+++
title = "SU-MATH53 FEB072024"
author = ["Houjun Liu"]
draft = false
+++

Suppose we analyze first order non-linear system:

\begin{equation}
x' = F(t,x)
\end{equation}

We can actually turn this into an autonomous system:

\begin{equation}
x\_0' = 1
\end{equation}

meaning suddenly we have an autonomous system:

\begin{equation}
\begin{cases}
x\_0' = 1 \\\\
x\_1' = F(x\_0, x\_1)
\end{cases}
\end{equation}


## Three Examples that are Hopeless to Solve {#three-examples-that-are-hopeless-to-solve}


### Lotha-Volterra Prey-Predictor Equation {#lotha-volterra-prey-predictor-equation}

\begin{equation}
\begin{cases}
x\_1' = 2x\_1-x\_1x\_2 \\\\
x\_2' = x\_1x\_2 - 3x\_2
\end{cases}
\end{equation}

By default, if either \\(x\_1\\) or \\(x\_2\\) goes down, the system dies quickly.
oooooooo


### Example {#example}

\begin{equation}
\begin{cases}
x\_1' = r\_1x\_1 \qty(1- \frac{x\_1 + h\_{12} x\_2}{k\_1})\\\\
x\_2' = r\_2x\_2 \qty(1- \frac{x\_2 + h\_{21} x\_1}{k\_2})
\end{cases}
\end{equation}


### Example {#example}

\begin{equation}
\begin{cases}
x\_1' = x\_2 \\\\
x\_2' = -\sin x\_1 - \gamma x\_2
\end{cases}
\end{equation}


## Strategy to Analyze when its Hopeless {#strategy-to-analyze-when-its-hopeless}

1.  find a stationary solutions: \\(x(t) = a\\): where \\(x' = F(a) = 0\\) and draw them as points on the \\(x\_1\\) and \\(x\_2\\) plane
2.  near each equilibrium point, approximate through [Linearilzation](#linearilzation)
3.  study the [mesoscopic region]({{< relref "KBhmesoscopic_region.md" >}})


## linearilzation {#linearilzation}

For some non-linear function, we can use its first Jacobian to create a linear system. Then, we can use that system to write the first order Taylor:

\begin{equation}
y' = \nabla F(crit)y
\end{equation}

where \\(crit\\) are critical points.


### Three [Phase Portrait](#phase-portrait) connection cases {#three-phase-portrait--org3d17202--connection-cases}

-   spiraling away from equilibrium
-   spiraling towards the equilibrium
-   concentric circles


### Worked Example {#worked-example}

Let's [Lotha-Volterra Prey-Predictor Equation](#lotha-volterra-prey-predictor-equation) again as an example

\begin{equation}
\begin{cases}
x\_1' = 2x\_1-x\_1x\_2 \\\\
x\_2' = x\_1x\_2 - 3x\_2
\end{cases}
\end{equation}

we can stare at this (and factor \\(x\\) out) to understand that there are only two stationary points:

\begin{equation}
(x\_1,x\_2) = (0,0), (3,2)
\end{equation}

Let's analyze this function for [linearilzation](#linearilzation).

Let's write this expression in terms of the linear and non linear parts

\begin{equation}
\begin{cases}
x' = \mqty(2 & 0 \\\ 0 & -3) \mqty(x\_1 \\\ x\_2) + \mqty(-x\_1x\_2 \\\ x\_1 x\_2)
\end{cases}
\end{equation}


#### Near \\((0,0)\\) {#near--0-0}

You will note that the right non-linear parts becomes very small near \\((0,0)\\), meaning we can analyze this in terms of a normal phase portrait.


#### Near \\((3,2)\\) {#near--3-2}

We can translate this down:

Let:

\begin{equation}
y = x - \mqty(3 \\\2)
\end{equation}

meaning:

\begin{equation}
y' = x' = F\qty(y+\mqty(3 \\\ 2))
\end{equation}

we can use a Taylor expansion to get:

\begin{equation}
y' = x' = F\qty(y + \mqty(3\\\2)) + \qty(\nabla F)y + \dots
\end{equation}

Recall that \\(F\\) is given as:

\begin{equation}
\mqty(2x\_1 - x\_1x\_2 \\\ x\_1x\_2-3x\_2)
\end{equation}

meaning:

\begin{equation}
\nabla \mqty(2x\_1 - x\_1x\_2 \\\ x\_1x\_2-3x\_2) = \mqty(2-x\_2 & -x\_1 \\\ x\_2 & x\_1-3)
\end{equation}

plugging in \\((3, 2)\\) obtains:

\begin{equation}
y' = \mqty(0 & -3 \\\ 2 & 0) y
\end{equation}

which we can analyze in the usual manners.


## Phase Portrait {#phase-portrait}

[Phase Portrait](#phase-portrait) is a figure in the \\(x\_1, x\_2\\) plane where each solution exists as a curve on the figure.
