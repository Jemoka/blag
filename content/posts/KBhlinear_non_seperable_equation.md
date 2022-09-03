+++
title = "Linear Non-Seperable Equation"
author = ["Houjun Liu"]
draft = false
+++

Take:

\begin{equation}
    a(x) \frac{dy}{dx} + b(x)y = c(x)
\end{equation}


## this is bad {#this-is-bad}


## solving differential equations {#solving-differential-equations}

The following technique works for ALL first-order linear differential equations:

To solve, first put your equation into the standard form (for the eqn above, divide by \\(a(x)\\):

\begin{equation}
    \frac{dy}{dx} + P(x)y = Q(x)
\end{equation}

To solve a generic equation, we here are trying to UNDO the product rule.

We first multiply the entire expression by something called the [integrating factor]({{< relref "KBhintegrating_factor.md" >}}) \\(\rho(x)\\) (it helps us undo product rule, see [the note]({{< relref "KBhintegrating_factor.md" >}}) to see requirements to be a candidate \\(\rho(x)\\)):

\begin{equation}
    \rho(x) \left(\frac{dy}{dx} + P(x)y\right) = \rho(x)Q(x)
\end{equation}

Given the definition of [integrating factor]({{< relref "KBhintegrating_factor.md" >}}) and substituting in the result:

\begin{equation}
    e^{\int P dx} \left(\frac{dy}{dx} + P(x)y\right) = e^{\int P dx} Q(x)
\end{equation}

\begin{equation}
12^
\end{equation}