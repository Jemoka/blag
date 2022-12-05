+++
title = "NUS-ECON320 Currency Arbitrage"
author = ["Houjun Liu"]
draft = false
+++

Let's import some tools.

```python
import pandas as pd
from scipy.optimize import minimize
import numpy as np
from datetime import datetime
from tqdm import tqdm
import torch
tqdm.pandas()
```

And load our data:

```python
df = pd.read_csv("./currency_signal.csv", index_col=0, header=None, parse_dates=[0])
df
```

```text
                   1
0
2006-03-01  0.000050
2006-03-02  0.001778
2006-03-03  0.000116
2006-03-06 -0.001038
2006-03-07 -0.001197
...              ...
2020-05-18  0.000264
2020-05-19  0.001434
2020-05-20  0.000995
2020-05-21  0.000120
2020-05-22  0.000424

[3713 rows x 1 columns]
```

Let's rename the headers

```python
df.index.rename("date", True)
df.columns = ["value"]
```

Awesome. For the rest of the calculations, we will hide the 2020 data from the model:

```python
data = df[df.index < datetime(2020, 1,1)]
data
```

```text
               value
date
2006-03-01  0.000050
2006-03-02  0.001778
2006-03-03  0.000116
2006-03-06 -0.001038
2006-03-07 -0.001197
...              ...
2019-12-25 -0.010659
2019-12-26 -0.000869
2019-12-27  0.000075
2019-12-30  0.000033
2019-12-31  0.000944

[3610 rows x 1 columns]
```

we will add a column of randomness to this, to serve as the seed of our epsilon:

```python
data["epsilon"] = np.random.normal(0,1, data.shape[0])
data
```

```text
               value   epsilon
date
2006-03-01  0.000050  0.239830
2006-03-02  0.001778 -0.125140
2006-03-03  0.000116  0.035148
2006-03-06 -0.001038 -1.140093
2006-03-07 -0.001197 -0.347221
...              ...       ...
2019-12-25 -0.010659 -0.738273
2019-12-26 -0.000869 -0.777475
2019-12-27  0.000075  1.354012
2019-12-30  0.000033  0.005882
2019-12-31  0.000944 -0.678830

[3610 rows x 2 columns]
```

Awesome, we will now seed three parameter variables. Recall that the GARCH model we are dealing with is:

\begin{equation}
\begin{cases}
\eta\_t = \sigma\_{t}\epsilon\_{t} \\\\
{\sigma\_{t}}^{2} = \alpha {\eta\_{t}}^{2} + \beta {\sigma\_{t-1}}^{2} + \gamma
\end{cases}
\end{equation}

Solving for explicit solutions of \\(n\_t\\) and \\(\sigma\_t\\), in terms of the others using computer algebra, we have:

\begin{equation}
\sigma\_{t}^{2} = -\frac{\beta \mathit{\sigma\_{t-1}}^{2} + y}{\alpha \epsilon^{2} - 1}
\end{equation}

The value of \\(\eta\_t\\) is naturally \\(\sigma\_t \epsilon\_t\\) (i.e. \\(\eta^{2} = (\sigma\_{t})^{2}(\epsilon\_{t})^{2}\\)).

So, to make the squared results, we want to square both value and epsilon:

```python
data["value2"] = data.value**2
data["epsilon2"] = data.epsilon**2
data
```

```text
               value   epsilon        value2  epsilon2
date
2006-03-01  0.000050  0.239830  2.450633e-09  0.057519
2006-03-02  0.001778 -0.125140  3.162006e-06  0.015660
2006-03-03  0.000116  0.035148  1.334210e-08  0.001235
2006-03-06 -0.001038 -1.140093  1.076978e-06  1.299812
2006-03-07 -0.001197 -0.347221  1.432477e-06  0.120563
...              ...       ...           ...       ...
2019-12-25 -0.010659 -0.738273  1.136119e-04  0.545047
2019-12-26 -0.000869 -0.777475  7.549935e-07  0.604468
2019-12-27  0.000075  1.354012  5.670657e-09  1.833349
2019-12-30  0.000033  0.005882  1.083948e-09  0.000035
2019-12-31  0.000944 -0.678830  8.913486e-07  0.460810

[3610 rows x 4 columns]
```

Now, we can now compute a column of these, based on the data we have. To be able to optimize this symbolically, we will leverage PyTorch.

Let's seed these constants all at \\(1\\), to be optimized later:

```python
a = torch.tensor(0.1, requires_grad=True)
b = torch.tensor(0.1, requires_grad=True)
y = torch.tensor(0.1, requires_grad=True)

(a,b,y)
```

```text
(tensor(0.1000, requires_grad=True), tensor(0.1000, requires_grad=True), tensor(0.1000, requires_grad=True))
```

We use the complex data type here to make the subtract operation work. We will eventually project it down to real space without much trouble.

Awesome, let us compute this series of \\(\sigma\\), and optimize for the loss.

Here is a gradient descent optimizer:

```python
# we will use the gradient descent scheme
optimizer = torch.optim.SGD([a,b,y], lr=0.1)

optimizer
```

```text
SGD (
Parameter Group 0
    dampening: 0
    differentiable: False
    foreach: None
    lr: 0.1
    maximize: False
    momentum: 0
    nesterov: False
    weight_decay: 0
)
```

And now, for 1000 steps, we will minimize the difference between the computed \\(n\\) and actual value against \\(\alpha, \beta, \gamma\\). We will run the scheme for 50 steps.

```python
for _ in tqdm(range(50)):
    prev_sigma_2 = 0
    # # for each row
    for i in range(len(data)):
        # get previous value, or seed at 0
        # if it doesn't exist
        sigma_2 = (-(b*prev_sigma_2+y)/(a*data["epsilon2"].iloc[i]-1))
        n_2 = sigma_2*data["epsilon2"].iloc[i]
        ((n_2-data["value2"].iloc[i])**2).backward()
        prev_sigma_2 = sigma_2.detach()
        optimizer.step()
        optimizer.zero_grad()
```

Awesome, now, let's see the fitted results:

```python
(a,b,y)
```

```text
(tensor(-0.0173, requires_grad=True), tensor(0.0827, requires_grad=True), tensor(4.2208e-06, requires_grad=True))
```

We will now work to validate these results in the entire dataset.

```python
data_val = df.copy()
data_val
```

```text
               value
date
2006-03-01  0.000050
2006-03-02  0.001778
2006-03-03  0.000116
2006-03-06 -0.001038
2006-03-07 -0.001197
...              ...
2020-05-18  0.000264
2020-05-19  0.001434
2020-05-20  0.000995
2020-05-21  0.000120
2020-05-22  0.000424

[3713 rows x 1 columns]
```

Now, we will use these values to compute the variance and the predicted variance on the data.