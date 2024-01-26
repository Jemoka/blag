+++
title = "Determinized Sparse Partially Observable Tree"
author = ["Houjun Liu"]
draft = false
+++

## Belief Trees {#belief-trees}

Good ol [conditional plan]({{< relref "KBhconditional_plan.md" >}}), which will grow exponential with depth.


## [DESPOT]({{< relref "KBhdespot.md" >}}) trees {#despot--kbhdespot-dot-md--trees}

We make an assumption, that the actual observation given are fixed given belief.

That is:

\begin{equation}
O(o|b,a) = 1
\end{equation}

for some specific \\(o\\), everything else is \\(0\\) for every b,a.


## Naive DESPOT {#naive-despot}

Naive despot is easy to overfit over the chosen beliefs.


## Anytime DESPOT {#anytime-despot}

We build up the despot tree by maintaining upper and lower bounds on the value function.
