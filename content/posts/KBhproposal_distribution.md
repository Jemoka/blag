+++
title = "proposal distribution"
author = ["Houjun Liu"]
draft = false
+++

We define the optimal [proposal distribution]({{< relref "KBhproposal_distribution.md" >}}) as the one that _minimizes the variance_ of the estimator of the [Probability of Failure]({{< relref "KBhprobability_of_failure.md" >}}).

Sadly, the best proposal distributions is...

\begin{equation}
q^{\*}\qty(\tau) = \frac{p\qty(\tau) 1\qty {\tau \not \in \psi}}{p\_{\text{fail}}}
\end{equation}

notice that this is exactly the **DEFINITION OF THE FAILURE DISTRIBUTION**. et, we were trying to estimate \\(p\_{\text{fail}}\\) in the first place? Recall; we are able to sample from the [Failure Distribution]({{< relref "KBhfailure_distribution.md" >}}), fit a model and nice.
