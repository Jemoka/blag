+++
title = "IS-DESPOT"
author = ["Houjun Liu"]
draft = false
+++

## Motivation {#motivation}

Large crowd navigation with sudden changes: unlikely events are out of likely sample. So, we want to bring in another distribution based on **importance** and not **likeliness**.


## Goals {#goals}

-   retains DESPOT garantees
-   outperforms [DESPOT]({{< relref "KBhdespot.md" >}}) and [POMCP]({{< relref "KBhpomcp.md" >}})


## Importance Sampling {#importance-sampling}

If you want to compute the expected value of a variable \\(u\\) that is not integrable that well, you have to sample points and average them to estimate the expected value.

So, there's a distribution over \\(f\\):

\begin{equation}
q(s) = \frac{b(s)}{w\_{\pi}(s)}
\end{equation}

where

\begin{equation}
w(s) = \frac{\mathbb{E}\_{b} \qty( \sqrt{[\mathbb{E}(v|s, \pi )]^{2} + [Var(v|s, \pi )]})}{[\mathbb{E}(v|s, \pi )]^{2} + [Var(v|s, \pi )]}
\end{equation}

which measures how important a state is, where \\(\pi\\) is the total discounted reward.


## [DESPOT]({{< relref "KBhdespot.md" >}}) with [Importance Sampling](#importance-sampling) {#despot--kbhdespot-dot-md--with-importance-sampling--orgb52f65b}

1.  begin with states from belief
2.  sample according to [Importance Sampling](#importance-sampling) distribution
3.  calculate values of those states
4.  obtain estimate based on weighted average


### Constructing \\(w\\) {#constructing-w}

To address expectation and variance of the importance distribution, we need to collect states
