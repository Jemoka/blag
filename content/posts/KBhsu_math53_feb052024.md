+++
title = "SU-MATH53 FEB052024"
author = ["Houjun Liu"]
draft = false
+++

## ODE Existence and Uniqueness {#ode-existence-and-uniqueness}

For a system:

\begin{equation}
x' = g(t,x)
\end{equation}

that has continuous (and not-necessarily differentiable) \\(g\\) gives that:

1.  the ODE has a solution \\(x(t\_0) = x\_0\\) for any \\(t\_0\\), and any two solutions on the interval coincide as the same solution
2.  The only way for a solution to fail to extend temporally is due to the bounds' \\(||x(t)||\\) becomes unbounded as \\(t\\) approaches the endpoints
3.  linear ODEs don't have this problem (i.e. when \\(g(t,x) = A(t)v + f(t)\\))---solutions exists and persists across any interval where the IVP itself is well-defined


## Cauchy Stability {#cauchy-stability}

Suppose \\(x(t)\\) satisfies:

\begin{equation}
x'(t) = g(t,x(t)), x(t\_0) = x\_0
\end{equation}

For some interval \\(t \in I\\) where the IVP is satisfied; for any time interval \\([t\_1, t\_2]\\) inside \\(I\\) and any \\(x\_0'\\) near to \\(x\_0\\), the associated \\(x(t\_0) = x\_0'\\) should exist for the same interval \\([t\_1, t\_2]\\) and \\(|| x'(t) - x(t) ||\\) is small for \\(t\\).

This extends for not just initial conditions, but also parameters as well. For function parameters \\(a\_0\\) and \\(a\_0'\\).
