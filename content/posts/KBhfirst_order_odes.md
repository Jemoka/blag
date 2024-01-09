+++
title = "First Order ODEs"
author = ["Houjun Liu"]
draft = false
+++

[First Order ODEs]({{< relref "KBhfirst_order_odes.md" >}}) are [Differential Equations]({{< relref "KBhdiffeq_intro.md" >}}) that only takes one derivative.

\begin{equation}
y' = 3x
\end{equation}

you've done this before. The solution is any possible function which has derivative \\(3x\\), we have the form \\(y = \frac{3}{2}x^{2}+C\\). Given a single initial condition, say \\(y(1)+5\\), we can solve for a certain \\(C\\).

---

Sometimes the solution may not be analytic, but is well-defined:

\begin{equation}
y' = e^{-x^{2}}
\end{equation}

we know that, by the fundamental theorem of calculus, gives us:

\begin{equation}
y(x) = \int\_{0}^{x} e^{-s{2}} \dd{s}
\end{equation}

Indeed this function doesn't have an elementary integral, but still has a well defined result. Almost always differential equations doesn't have elementary solutions.
