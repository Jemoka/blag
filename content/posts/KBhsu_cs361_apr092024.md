+++
title = "SU-CS361 APR092024"
author = ["Houjun Liu"]
draft = false
+++

## Quadratic search {#quadratic-search}

if your function is [unimodal]({{< relref "KBhunimodal.md" >}})...

-   Pick three points that gets "high, low, high"
-   Fit a quadratic to it, evaluate its minima and add it to the point set
-   Now, drop any of the four resulting point


## Shubert-Piyavskill Method {#shubert-piyavskill-method}

This is a [Bracketing]({{< relref "KBhsu_cs361_apr042024.md#bracketing" >}}) approach which grantees optimality **WITHOUT unimodality** by using the [Lipschitz Constant]({{< relref "KBhuniqueness_and_existance.md#lipschitz-condition" >}}). But, this only works in **one dimension**.

Consider a [Lipschitz continuous]({{< relref "KBhuniqueness_and_existance.md#lipschitz-condition" >}}) function with [Lipschitz Constant]({{< relref "KBhuniqueness_and_existance.md#lipschitz-condition" >}}) \\(L\\). We can get our two initial points \\(a\\) and \\(b\\). First, we arbitrarily pick a point in the middle to evaluate; this will give us a cone (see [Lipschitz Condition]({{< relref "KBhuniqueness_and_existance.md#lipschitz-condition" >}})) which bounds the function.

We will then evaluate the function + draw a new cone at each of our ed points \\(a, b\\). By piecing together the cones, we now obtain a sawtooth which lower bounds our function. We will continue this by choosing the lowest point on our lower bound, reevaluating, raising it to the new sawtooth.

For instance, in maximization, we can end up with sawtooths like:

{{< figure src="/ox-hugo/2024-04-09_09-29-57_screenshot.png" >}}


## Bisection Method {#bisection-method}

bisect \\(f'(x)\\) by sampling points in the middle of the "valid interval" until you find t


## Local Descent {#local-descent}


### Descent Direction Iteration {#descent-direction-iteration}

[Descent Direction Iteration](#descent-direction-iteration) is a class of method that uses a "local model" to improve the design point until we converge.

1.  check whether our current \\(\bold{x}\\) meets our termination conditions; if not...
2.  calculate some descent direction \\(\bold{d}\\) to update our \\(\bold{x}\\); sometimes, people say it has to be normalized
3.  decide some step size \\(\alpha\\)
4.  have fun: \\(\bold{x} \leftarrow \bold{x} + \alpha \bold{d}\\)


### Line Search {#line-search}

We can choose the step size \\(\alpha\\) to perform using line search; i.e., figure out our \\(\bold{d}\\) somehow, and then use any of the [Bracketing]({{< relref "KBhsu_cs361_apr042024.md#bracketing" >}}) methods (or grid it up) to solve:

\begin{equation}
\min\_{\alpha} f(\bold{x} + \alpha \bold{d})
\end{equation}


#### Decaying \\(\alpha\\) {#decaying-alpha}

We can also give up solving for the greatest \\(\alpha\\), fix a learning rate, and then decay it using \\(\alpha \gamma^{n}\\) where \\(n\\) is the number of iterations and \\(\gamma\\) is the decay rate.


#### Approximate Line Search {#approximate-line-search}

Instead of continuously evaluating the function \\(f\\), we use a first order approximation on our directional derivative (plus some acceptability factor \\(\beta \in [0,1]\\), usually \\(\beta=1 \times 10^{-4}\\)).

We will then choose the largest \\(\alpha\\) that satisfies

<!--list-separator-->

-  Sufficient Decrease Condition

    \begin{equation}
    f(x\_{t+1}) \leq f(x\_{t}) + \beta \alpha \nabla\_{d} f(x\_{t})
    \end{equation}

<!--list-separator-->

-  Curvature Condition

    {{< figure src="/ox-hugo/2024-04-09_10-01-52_screenshot.png" >}}

    which bounds the "shallowness" of the directional derivatives.


### Trust Region Methods {#trust-region-methods}

We often want to bound our change in \\(x\\) by some region \\(\delta\\).


## Termination Conditions {#termination-conditions}


### Maximum Iterations {#maximum-iterations}

\begin{equation}
k > k\_{\max }
\end{equation}

termination condition for those on a deadline


### Absolute Improvement {#absolute-improvement}

\begin{equation}
|f(x\_{t}) - f(x\_{t+1})| < \epsilon
\end{equation}


### Relative Improvement {#relative-improvement}

\begin{equation}
f(x\_{t}) - f(x\_{t+1}) < \epsilon | f(x)|
\end{equation}

Some range of acceptability.


### Gradient {#gradient}

\begin{equation}
|\nabla f(x\_{t})| < \epsilon
\end{equation}


## First-Order Methods {#first-order-methods}


### [gradient descent]({{< relref "KBhlogistic_regression.md#gradient-descent" >}}) {#gradient-descent--kbhlogistic-regression-dot-md}

see [gradient descent]({{< relref "KBhlogistic_regression.md#gradient-descent" >}})

\begin{equation}
\bold{d} = \nabla f(x)
\end{equation}


### Conjugate Gradient {#conjugate-gradient}

We optimize the function as if its a gradratic function:

\begin{equation}
\min\_{x} f(x) = \frac{1}{2} \bold{x}^{\top} \bold{A}\bold{x} + \bold{b}^{\top} \bold{x} + c
\end{equation}

where \\(A\\) is a positive, definite matrix. Under this assumption, we consider that this function would behave like a bowl.

We can then formulate:

\begin{equation}
\bold{d}\_{t+1}  = -\nabla\_{t+1} f + \beta \bold{d}\_{t}
\end{equation}

where \\(\bold{d}\_{t+1}\\) is the step direction we are going to use at ****t+2****!! So we are essentially averaging the direction from two steps before.

We usually set \\(\beta\\) to be the **Fletcher-Reeves** or **Polak-Ribere** approaches.

All descent direction are [Mutually Conjugate](#mutually-conjugate).


#### Mutually Conjugate {#mutually-conjugate}

if \\(x\_{i} \neq x\_{j}\\) are [Mutually Conjugate](#mutually-conjugate), we have:

\begin{equation}
x\_{i} A x\_{j} = 0
\end{equation}


### Momentum {#momentum}

We descent by calculating a "position" and a "velocity"

\begin{equation}
v\_{t+1} = \beta v\_{t} - \alpha \nabla\_{x\_{t}} f
\end{equation}

\begin{equation}
x\_{t+1} = x\_{t} + v\_{t+1}
\end{equation}

if \\(\beta\\), the momentum is set to \\(0\\), we just get normal [gradient descent]({{< relref "KBhlogistic_regression.md#gradient-descent" >}}). If there is a positive \\(\beta\\), your update vector will take on some of the previous update direction values.
