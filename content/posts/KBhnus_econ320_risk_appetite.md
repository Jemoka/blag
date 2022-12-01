+++
title = "NUS-ECON320 Representative Agent"
author = ["Houjun Liu"]
draft = false
+++

We want to construct a combined agent

\begin{equation}
(k\_1+k\_2)x^{\*}(k\_1+k\_2, \gamma^{\*}) = x^{\*}(k\_1,\gamma\_{1})k\_1+x^{\*}(k\_2, \gamma\_{2})k\_2
\end{equation}

which combines the relative risk of \\(\gamma\_{1}, \gamma\_{2}\\) into some new \\(\gamma^{\*}\\), which produces the same combined consumption of both agents \\(k\_1+k\_2\\).


## inter-temporal choice {#inter-temporal-choice}

Let us create some CAS tools to solve the inter-temporal choice problem generically for 10 steps in the past.

We do this by solving backwards. We will create a variable \\(k\\) to measure asset, and \\(k\_{t}\\) the remaining asset at time \\(t\\).

Let us first declare the function for [power utility]({{< relref "KBhpower_utility.md" >}}). \\(k\\) is our asset holding, \\(\gamma\\) our relative margin of risk, and \\(U\\) the power utility.

```sage
y = var("y", latex_name="\gamma", domain='real')
d = var("d", latex_name="\delta", domain='real')
c = var("c", domain='real')
# boundary conditions
assume(y>0)
assume(y<1)
assume(d>0)
assume(d<1)
# power utility
u(c) = d*((c^(1-y)-1)/(1-y))
u
```

```text
c |--> -(c^(-y + 1) - 1)*d/(y - 1)
```

At the final time stamp, we desire to consume all of our assets. Therefore, we desire that the [power utility]({{< relref "KBhpower_utility.md" >}}) at that point is \\(1\\). So our last consumption percentage is \\(1\\), and we will solve backwards:

We first make an array of consumptions:

```sage
prev_c = 1
consumptions = [prev_c]
consumptions
```

```text
[1]
```

And now, at each time stamp, we append the previous result---solving for the utility fraction which would order us to consume exactly as much as the previous dictated result:

```sage
for _ in range(0,3):
    eqn = prev_c == u(c)
    res = solve(eqn, c)
    prev_c = res[0].rhs()
    consumptions.append(prev_c)

res
```

```text
[c == (1/((-y/d + 1/d + 1)^(1/(y - 1))))]
```

```sage
consumptions
```

```text
[1]
```