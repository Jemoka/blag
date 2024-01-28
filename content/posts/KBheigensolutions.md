+++
title = "eigensolutions"
author = ["Houjun Liu"]
draft = false
+++

For an ODE, [eigensolutions]({{< relref "KBheigensolutions.md" >}}) of some expression \\(x'=Ax\\) consists of the class of solutions which remains in a line through the origin, which consists of the family which:

\begin{equation}
x(t) = ke^{\lambda t} v
\end{equation}

where \\(\lambda\\) is an eigenvalue of \\(A\\), and \\(v\\) its corresponding [eigenvector]({{< relref "KBheigenvalue.md" >}}).


## sketching solutions along eigenlines {#sketching-solutions-along-eigenlines}

For eigenlines, we can observe the sign of the eigenline to see how it behaves, and---in conjuction---how other solutions behave. In particular, in the x1, x2 plane for two orders, the solutions are tangent to the eigensolutions.

With an negative eigenvalue, the eigensolution arrows will point towards the origin, whereas with positive eigenvalues the eigensolutions will point away.

By tracing those patterns, you can draw other solutions over time:

{{< figure src="/ox-hugo/2024-01-27_15-13-27_screenshot.png" >}}

-   **saddle case**: if \\(\lambda\_{1}\\) and \\(\lambda\_{2}\\) have opposite signs, then the paths look like half-parabolas matching the eigensolutions: approach more rapidly to whichever \\(\lambda\\) is smaller
-   **node case**: if \\(\lambda\_{1}\\) and \\(\lambda\_{2}\\) have the same sign, then the solutions look like half-parabolas tangent only to the eigenline which has a smaller \\(\lambda\\) --- in this case, if the eigenvalues happens to be both negative you can work things out for \\(-A\\) and then flip the paths on all the lines

This is because:

\begin{equation}
(-A)v = -(Av) = (-\lambda) v
\end{equation}

meaning the directions of eigenvectors don't change while their corresponding eigenvalues change. If we define some \\(y(t) = x(-t)\\), where \\(Ax = x'\\), we can work out that \\(y'(t) = -Ay(t)\\), meaning that \\(y'\\)'s graphs are just flipped versions of \\(x\\)'s graphs.

Hence we can just flip everything.
