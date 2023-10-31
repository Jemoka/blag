+++
title = "Directed Exploration"
author = ["Houjun Liu"]
draft = false
+++

## Softmax Method {#softmax-method}

Pull arm \\(a\\) with probability \\(\propto \exp (\lambda \rho\_{a})\\), where \\(\lambda \geq 0\\) is the "decision parameter".

When \\(\lambda \to 0\\), this system uses the same rate for each of the probabilities,


## Quantile Exploration {#quantile-exploration}

Choose the arm with the largest \\(\theta\\) at the highest $&alpha;$-th percentile, pull that arm

"choose the arm with the highest \\(\theta\\) for the \\(90\\%\\) percentile, then update the distribution"


## UCB 1 {#ucb-1}

Inspired by [monte-carlo exploration]({{< relref "KBhmonte_carlo_tree_search.md#monte-carlo-exploration" >}})

take action \\(a\\) such that

\begin{equation}
\max\_{a} \rho\_{a} + c \sqrt{ \frac{\log N}{N(a)}}
\end{equation}

where, \\(c\\) is the exploration factor, \\(N\\) is the total number of trials, \\(N(a)\\) is the number of trials for \\(a\\) we have done.


## Posterior Sampling {#posterior-sampling}

Same one point from each [Beta Distribution]({{< relref "KBhbaysian_parameter_learning.md#beta-distribution" >}}) for each of your slot machines; then you pick the result that is the highest.

This is proven to do some over-exploration. But that's (mostly) just fine.
