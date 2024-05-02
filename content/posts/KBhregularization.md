+++
title = "regularization"
author = ["Houjun LIu"]
draft = false
+++

[regularization]({{< relref "KBhregularization.md" >}}) penalize large weights to reduce over-fitting

For instance, in a linear model:

\begin{equation}
\min\_{\theta} |y - X \theta|\_{2}^{2} + \lambda | \theta |\_{2}^{2}
\end{equation}

This gives a analytical form:

\begin{equation}
\theta = \qty(B^{\top}B + \lambda I)^{-1} B^{\top} y
\end{equation}

Or, you can write the...


## Lasso {#lasso}

The lasso uses an $L$-1 norm on the weights

\begin{equation}
\min\_{\theta} |y - X \theta|\_{2}^{2} + \lambda | \theta |\_{1}^{2}
\end{equation}

which will downselect weights that are not useful.

Which has no closed form.
