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
2006-03-01  0.000050  0.907060
2006-03-02  0.001778 -0.679389
2006-03-03  0.000116  0.930653
2006-03-06 -0.001038 -0.357563
2006-03-07 -0.001197 -2.583978
...              ...       ...
2019-12-25 -0.010659 -0.967139
2019-12-26 -0.000869 -2.435896
2019-12-27  0.000075  2.511539
2019-12-30  0.000033 -0.434153
2019-12-31  0.000944 -0.990262

[3610 rows x 2 columns]
```

Awesome, we will now seed three parameter variables. Recall that the GARCH model we are dealing with is:

\begin{equation}
\begin{cases}
n\_t = \sigma\_{t}\epsilon\_{t} \\\\
{\sigma\_{t}}^{2} = \alpha {n\_{t}}^{2} + \beta {\sigma\_{t-1}}^{2} + \gamma
\end{cases}
\end{equation}

Solving for explicit solutions of \\(n\_t\\) and \\(\sigma\_t\\), in terms of the others using computer algebra, we have:

\begin{equation}
\sigma\_{t} = \sqrt{-\frac{\beta \mathit{\sigma\_{t-1}}^{2} + y}{\alpha \epsilon^{2} - 1}}
\end{equation}

The value of \\(n\_t\\) is naturally \\(\sigma\_t \epsilon\_t\\).

Now, we can now compute a column of these, based on the data we have. To be able to optimize this symbolically, we will leverage PyTorch.

Let's seed these constants all at \\(1\\), to be optimized later:

```python
a = torch.tensor(0.001, requires_grad=True, dtype=torch.cfloat)
b = torch.tensor(0.001, requires_grad=True, dtype=torch.cfloat)
y = torch.tensor(0.001, requires_grad=True, dtype=torch.cfloat)

(a,b,y)
```

```text
(tensor(0.0010+0.j, requires_grad=True), tensor(0.0010+0.j, requires_grad=True), tensor(0.0010+0.j, requires_grad=True))
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
    loss = 0
    prev_sigma = 0
    # # for each row
    for i in range(len(data)):
        # get previous value, or seed at 0
        # if it doesn't exist
        prev_sigma = ((-(b*prev_sigma**2+y)/(a*data["epsilon"].iloc[i]**2-1))**0.5)
        n = prev_sigma*data["epsilon"].iloc[i]
        loss += (n-data["value"].iloc[i])**2
    # print the loss
    print(loss)
    # backpropegate the loss
    loss.backward()
    optimizer.step()
    optimizer.zero_grad()
```

These values continue to be imaginary, which we will discuss next time.