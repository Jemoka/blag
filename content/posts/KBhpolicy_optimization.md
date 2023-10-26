+++
title = "Policy Optimization"
author = ["Houjun Liu"]
draft = false
+++

Basics:


## Policy Search {#policy-search}

Let us represent our [policy]({{< relref "KBhpolicy.md" >}}) with a set of parameters:

\begin{equation}
\mqty(\theta\_{1} \\\ \dots \\\ \theta\_{n})
\end{equation}

The [utility]({{< relref "KBhutility_theory.md" >}}) from following a [policy]({{< relref "KBhpolicy.md" >}}) AT A STATE is given by:

\begin{equation}
U^{\pi}(s) = R(s, \pi(s)) + \gamma \sum\_{s'} T(s' | s, \pi(s)) U^{\pi} (s')
\end{equation}

The [utility]({{< relref "KBhutility_theory.md" >}}) of a policy, in general:

\begin{equation}
U(\pi) = \sum\_{s}^{} b(s) U^{\pi}(s)
\end{equation}

where, \\(b(s)\\) is the probability of being in a particular state.


## Roll-out utility {#roll-out-utility}

Collecting a utility for all \\(s\\) is real hard. Therefore, instead, we perform a bunch of [Rollout]({{< relref "KBhrollout_with_lookahead.md#rollout" >}})s and then calculate, for each trajectory \\(\tau\\) you ended up with:

\begin{align}
U(\pi\_{\theta}) &= \mathbb{E}[R(\tau)]  \\\\
&= \int\_{\tau} p\_{\tau} (\tau) R(\tau) d\tau
\end{align}

where, \\(p(\tau)\\) is the probability of that trajectory happening, and \\(R(\tau)\\) is the discounted future reward of that trajectory. (that is:)

\begin{equation}
R(\tau) = \sum\_{k=1}^{d} r\_{k}\ \gamma^{k-1}
\end{equation}

Obviously we can't get all trajectories normally, so we simply perform an average of \\(m\\) sample trajectories:

\begin{equation}
U(\pi\_{\theta}) = \frac{1}{m}\sum\_{i=1}^{m} R(\tau^{i})
\end{equation}

We start each trajectory using a probability-weighted sample of initial states. This is the [Roll-out utility](#roll-out-utility)


## Methods {#methods}


### Local Policy Search {#local-policy-search}

1.  We sample a local set of [parameter]({{< relref "KBhparameter.md" >}})s (up, down, left, right in latent space), and use those to seed a policy.
2.  Check each policy for its [utility]({{< relref "KBhutility_theory.md" >}}) via the [Roll-out utility](#roll-out-utility)
3.  If any of the adjacent points are better, we move there
4.  If none of the adjacent points are better, we shrink the step size (of the up/down/left/right) and try again

Note: if we have billions of parameters, this method will be not that feasible because we have to calculate the [Roll-out utility](#roll-out-utility) so many many many times.


### Cross Entropy Method {#cross-entropy-method}

This method introduces a search distribution instead of discrete points:

\begin{equation}
p(\theta | \psi)
\end{equation}

We want to know how parameters \\(\theta\\) are distributed, given some input parameters \\(\psi\\) (for instance, we assume parameters are [gaussian]({{< relref "KBhgaussian_distribution.md" >}}) distributed such as the mean/variance).

1.  Given this distribution, we sample \\(m\\) samples of \\(\theta\\) from the distribution. Those are our starting candidate points.
2.  We then check its policy for its [utility]({{< relref "KBhutility_theory.md" >}}) via the [Roll-out utility](#roll-out-utility)
3.  We want to take top \\(k\\) of our best performers, called "elite samples" \\(m\_{elite}\\)
4.  Use the set of \\(m\_{elite}\\) points, we fit a new distribution parameter \\(\psi\\) that describes those sample

This allows us to bound how many [Roll-out utilitie](#roll-out-utility)s we are doing.


### [Policy Gradient]({{< relref "KBhpolicy_gradient.md#policy-gradient" >}}) {#policy-gradient--kbhpolicy-gradient-dot-md}

See [Policy Gradient]({{< relref "KBhpolicy_gradient.md#policy-gradient" >}})
