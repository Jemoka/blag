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
2.  near each equilibrium point, approximate through [Linearilzation]({{< relref "KBhode_linearilzation.md" >}})
3.  study the [mesoscopic region]({{< relref "KBhmesoscopic_region.md" >}})

So, see [ODE linearilzation]({{< relref "KBhode_linearilzation.md" >}}).


## Phase Portrait {#phase-portrait}

[Phase Portrait](#phase-portrait) is a figure in the \\(x\_1, x\_2\\) plane where each solution exists as a curve on the figure.
