+++
title = "IS-DESPOT"
author = ["Houjun Liu"]
draft = false
+++

## Motivation {#motivation}

Large crowd navigation with sudden changes: unlikely events are out of likely sample. So, we want to bring in another distribution based on **importance** and not **likelyness**.


## Goals {#goals}

-   retains DESPOT garantees
-   outperforms [DESPOT]({{< relref "KBhdespot.md" >}}) and [POMCP]({{< relref "KBhpomcp.md" >}})


## [DESPOT]({{< relref "KBhdespot.md" >}}) with [Importance Sampling](#importance-sampling) {#despot--kbhdespot-dot-md--with-importance-sampling--org7062454}

1.  take our initial belief
2.  sample trajectories according to [Importance Sampling](#importance-sampling) distribution
3.  calculate values of those states
4.  obtain value estimate based on weighted average of the values


### [Importance Sampling](#importance-sampling) of trajectories {#importance-sampling--org7062454--of-trajectories}

We define an [importance distribution](#importance-sampling) of some trajectory \\(\xi\\):

\begin{equation}
q(\xi | b,\pi) = q(s\_0) \prod\_{t=0}^{D} q(s\_{t+1}, o\_{t+1} | s\_{t}, a\_{t+1})
\end{equation}


## Background {#background}


### Importance Sampling {#importance-sampling}

Suppose you have a function \\(f(s)\\) which isn't super well integrate-able, yet you want:

\begin{equation}
\mu = \mathbb{E}(f(s)) = \int\_{0}^{1} f(s)p(s) \dd{s}
\end{equation}

how would you sample various \\(f(s)\\) effectively such that you end up with \\(\hat{\mu}\\) that's close enough?

Well, what if you have an [importance distribution](#importance-sampling) \\(q(s): S \to \mathbb{R}^{[0,1]}\\), which tells you how "important" to the expected value of the distribution a particular state is? Then, we can formulate a new, better normalization function called the "[importance weight](#importance-sampling)":

\begin{equation}
w(s) = \frac{p(s)}{q(s)}
\end{equation}

Therefore, this would make our estimator:

\begin{equation}
\hat{\mu} = \frac{\sum\_{n} f(s\_{n}) w(s\_{n})}{\sum\_{n}  w(s\_{n})}
\end{equation}


#### Theoretic grantees {#theoretic-grantees}

So, there's a distribution over \\(f\\):

\begin{equation}
q(s) = \frac{b(s)}{w\_{\pi}(s)}
\end{equation}

where

\begin{equation}
w(s) = \frac{\mathbb{E}\_{b} \qty( \sqrt{[\mathbb{E}(v|s, \pi )]^{2} + [Var(v|s, \pi )]})}{[\mathbb{E}(v|s, \pi )]^{2} + [Var(v|s, \pi )]}
\end{equation}

which measures how important a state is, where \\(\pi\\) is the total discounted reward.
