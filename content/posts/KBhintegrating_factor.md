+++
title = "integrating factor"
author = ["Houjun Liu"]
draft = false
+++

The [integrating factor]({{< relref "KBhintegrating_factor.md" >}}) \\(\rho(x)\\) is a value that helps undo the product rule. For which:

\begin{equation}
    log(\rho(x)) = \int P(x)dx
\end{equation}

Separating the \\(\rho(x)\\) out, we have therefore:

\begin{equation}
    e^{\int P dx} = \rho(x)
\end{equation}

Why is this helpful and undoes the product rule? Take if we have some

\begin{equation}
    \frac{d}{dx} \left(y\rho(x) \right) = \frac{d}{dx} \left(ye^{\int P dx} \right)
\end{equation}

By the product rule, we have:

\begin{equation}
    \frac{dy}{dx}e^{\int P dx} + yP(x)
\end{equation}