+++
title = "kernel smoothing"
author = ["Houjun Liu"]
draft = false
+++

[kernel smoothing]({{< relref "KBhkernel_smoothing.md" >}}) is a way of smoothing a [utility]({{< relref "KBhutility_theory.md" >}}) function over [continuous]({{< relref "KBhuniqueness_and_existance.md#continuity" >}}) state space despite only sampling a discrete set of the states.

\begin{equation}
U\_{\theta}(s) = \theta^{T} \beta(s)
\end{equation}

We multiply of our [parameter]({{< relref "KBhparameter.md" >}}) against a basis function, generated for each \\(i\\) of known discrete state we have:

\begin{equation}
\beta\_{i}(s) = \frac{k(s, s\_{i})}{\sum\_{j}^{} k(s, s\_{j})}
\end{equation}

where, \\(k\\) is the kernel
