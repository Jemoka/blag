+++
title = "E-PCA"
author = ["Houjun Liu"]
draft = false
+++

We want to solve huge [POMDP]({{< relref "KBhpartially_observable_markov_decision_process.md" >}}) in the real world, but the belief states are huge. Notably, reachable beliefs are very small given an initial belief.


## Why is vanilla PCA bad {#why-is-vanilla-pca-bad}

PCA as a denoising procedure: the underlying data is some data which is normally noised. This is not strictly true, the points don't have normal noise.


## Better PCA {#better-pca}

Instead of Euclidean distance, we use

\begin{equation}
L(U,V) = \mid X-UV\mid^{2}
\end{equation}

specifically:

\begin{equation}
F(z) - yz + F^{\*}(y)
\end{equation}

where \\(F\\) is any convex objective that is problem specific.

**Bregman Divergence** forces the underlying matricies' bases to be non-negative


## Overall Methods {#overall-methods}

1.  collect sample beliefs
2.  Apply the believes into E-PCA
3.  Convert and discretized
4.  Recalculate R and T
5.  [POMDP value-iteration]({{< relref "KBhvalue_iteration.md#pomdp--kbhpartially-observable-markov-decision-process-dot-md--value-iteration" >}})
