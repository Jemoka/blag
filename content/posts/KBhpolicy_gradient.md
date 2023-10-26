+++
title = "Policy Gradient"
author = ["Houjun Liu"]
draft = false
+++

We have our [policy]({{< relref "KBhpolicy.md" >}}):

\begin{equation}
\pi\_{\theta}
\end{equation}

whereby the [policy]({{< relref "KBhpolicy.md" >}}) is parameterized by \\(\theta\\)


## Obtaining a policy gradient {#obtaining-a-policy-gradient}


### Finite-Different Gradient Estimation {#finite-different-gradient-estimation}

We want some expression for:

\begin{equation}
\nabla U(\theta) = \qty[\pdv{U}{\theta\_{1}} (\theta), \dots, \pdv{U}{\theta\_{n}}]
\end{equation}

we can estimate that with the finite-difference "epsilon trick":

\begin{equation}
\nabla U(\theta) = \qty[ \frac{U(\theta + \delta e^{1}) - U(\theta)}{\delta} , \dots, \frac{U(\theta + \delta e^{n}) - U(\theta)}{\delta} ]
\end{equation}

where \\(e^{j}\\) is the standard [basis]({{< relref "KBhbasis.md" >}}) [vector]({{< relref "KBhvector.md" >}}) at position \\(j\\). We essentially add a small \\(\delta\\) to the \\(j\\) th slot of each parameter \\(\theta\_{j}\\), and divide to get an estimate of the gradient.


### Linear Regression Gradient Estimate {#linear-regression-gradient-estimate}

We perform \\(m\\) random perturbations of \\(\theta\\) parameters, and lay each resulting [parameter]({{< relref "KBhparameter.md" >}}) vector flat onto a matrix:

\begin{equation}
\Delta \theta = \mqty[(\Delta \theta^{1})^{T} \\\ \dots \\\ (\Delta \theta^{m})^{T}]
\end{equation}

For \\(\theta\\) that contains \\(n\\) parameters, this is a matrix \\(m\times n\\).

We can now write out the \\(\Delta U\\) with:

\begin{equation}
\Delta U = \qty[U(\theta+ \Delta \theta^{1}) - U(\theta), \dots, U(\theta+ \Delta \theta^{m}) - U(\theta)]
\end{equation}

We have to compute a [Roll-out utility]({{< relref "KBhpolicy_optimization.md#roll-out-utility" >}}) for each \\(U(\theta + ...)\\).

We now want to fit a function between \\(\Delta \theta\\) to \\(\Delta U\\), because from the definition of the gradient we have:

\begin{equation}
\Delta U = \nabla\_{\theta} U(\theta)\ \Delta \theta
\end{equation}

(that is \\(y = mx\\))

Rearranging the expression above

\begin{equation}
\nabla\_{\theta} U(\theta) \approx \Delta \theta^{\dagger} \Delta U
\end{equation}

where \\(\Delta \theta^{\dagger}\\) is the [pseudoinverse]({{< relref "KBhpseudoinverse.md" >}}) of \\(\Delta \theta\\) matrix.

To end up at a gradient estimate.


### Analytical Policy Gradient Solution {#analytical-policy-gradient-solution}

Recall:

\begin{align}
U(\pi\_{\theta}) &= \mathbb{E}[R(\tau)]  \\\\
&= \int\_{\tau} p\_{\tau} (\tau) R(\tau) d\tau
\end{align}

Now consider:

\begin{align}
\nabla\_{\theta} U(\theta) &= \int\_{\tau} \nabla\_{\theta} p\_{\pi}(\tau) R(\tau) d \tau   \\\\
&= \int\_{\tau} \frac{p\_{\pi} (\tau)}{p\_{\pi} (\tau)} \nabla\_{\tau} p\_{\tau}(\tau) R(\tau) d \tau
\end{align}

---

Aside 1:

Now, consider the expression:

\begin{equation}
\nabla \log p\_{\pi} (\tau) = \frac{\nabla p\_{\pi}(\tau)}{p\_{\pi} \tau}
\end{equation}

This is just out of calculus. Consider the derivative chain rule; now, the derivative of \\(\log (x) = \frac{1}{x}\\) , and the derivative of the inside is \\(\nabla x\\).

Rearranging that, we have:

\begin{equation}
\nabla p\_{\pi}(\tau) = (\nabla \log p\_{\pi} (\tau))(p\_{\pi} \tau)
\end{equation}

---

Substituting that in, we have:

\begin{equation}
\int\_{\tau} p\_{\pi}(\tau) \nabla\_{\theta} \log p\_{\pi}(\tau) R(\tau) \dd{\tau}
\end{equation}

Which is an expectation:

\begin{equation}
\nabla\_{\theta} U(\theta) &=  \mathbb{E}\_{\tau} [\nabla\_{\tau} \log p\_{\pi}(\tau) R(\tau)]
\end{equation}

---

Aside 2:

Recall that \\(\tau\\) a trajectory is a pair of \\(s\_1, a\_1, ..., s\_{n}, a\_{d}\\).

We want to come up with some \\(p\_{\pi}(\tau)\\), "what's the probability of a trajectory happening given a policy".

\begin{equation}
p\_{\theta}(\tau) = p(s^{1}) \prod\_{k=1}^{d} p(s^{k+1} | s^{k}, a^{k}) \pi\_{\theta} (a^{k}|s^{k})
\end{equation}

Now, taking the log of it causes the product to become a summation:

\begin{equation}
\log p\_{\theta}(\tau) = p(s^{1}) + \sum\_{k=1}^{d} p(s^{k+1} | s^{k}, a^{k}) + \pi\_{\theta} (a^{k}|s^{k})
\end{equation}

---

[plugging it in. you will not that the gradient is zero for things that don't depend on \\(\theta\\)]

\begin{equation}
\nabla\_{\theta} U(\theta) = \mathbb{E}\_{\tau} \qty[\sum\_{k=1}^{d} \nabla\_{\theta} \log \pi\_{\theta}(a^{k}|s^{k}) R(\tau)]
\end{equation}

"this is very nice" because we do not need to know anything regarding the transition model. This means we don't actually need to know what \\(p(s^{k+1}|s^{k}a^{k})\\) because that term just dropped out of the gradient.


### Reward-to-Go {#reward-to-go}

Variance typically increases with [Rollout]({{< relref "KBhrollout_with_lookahead.md#rollout" >}}) depth. We don't want that. We want to correct for the causality of action/reward. Action in the FUTURE do not influence reward in the PAST.

Recall:

\begin{equation}
R(\tau) = \sum\_{k=1}^{d} r\_{k}\ \gamma^{k-1}
\end{equation}

Let us plug this into the [policy gradient](#linear-regression-gradient-estimate) expression:

\begin{equation}
\nabla\_{\theta} U(\theta) = \mathbb{E}\_{\tau} \qty[\sum\_{k=1}^{d} \nabla\_{\theta} \log \pi\_{\theta}(a^{k}|s^{k}) \qty(\sum\_{k=1}^{d} r\_{k}\ \gamma^{k-1})]
\end{equation}

Let us split this reward into two piece; one piece for the past (up to \\(k-1\\)), and one for the future:

\begin{equation}
\nabla\_{\theta} U(\theta) = \mathbb{E}\_{\tau} \qty[\sum\_{k=1}^{d} \nabla\_{\theta} \log \pi\_{\theta}(a^{k}|s^{k}) \qty(\sum\_{l=1}^{k-1} r\_{l}\ \gamma^{l-1} + \sum\_{l=k}^{d} r\_{l}\ \gamma^{l-1})]
\end{equation}

We now want to ignore all the past rewards (i.e. the first half of the internal summation). Again, this is because action in the future shouldn't care about what reward was gather in the past.

\begin{equation}
\nabla\_{\theta} U(\theta) = \mathbb{E}\_{\tau} \qty[\sum\_{k=1}^{d} \nabla\_{\theta} \log \pi\_{\theta}(a^{k}|s^{k}) \sum\_{l=k}^{d} r\_{l}\ \gamma^{l-1}]
\end{equation}

We now factor out \\(\gamma^{k-1}\\) to make the expression look like:

\begin{equation}
\nabla\_{\theta} U(\theta) = \mathbb{E}\_{\tau} \qty[\sum\_{k=1}^{d} \nabla\_{\theta} \log \pi\_{\theta}(a^{k}|s^{k}) \qty(\gamma^{k-1} \sum\_{l=k}^{d} r\_{l}\ \gamma^{l-k})]
\end{equation}

We call the right term [Reward-to-Go](#reward-to-go):

\begin{equation}
r\_{togo}(k) = \sum\_{l=k}^{d} r\_{l}\ \gamma^{l-k}
\end{equation}

where \\(d\\) is the depth of your trajectory and \\(k\\) is your current state. Finally, then:

\begin{equation}
\nabla\_{\theta} U(\theta) = \mathbb{E}\_{\tau} \qty[\sum\_{k=1}^{d} \nabla\_{\theta} \log \pi\_{\theta}(a^{k}|s^{k}) \qty(\gamma^{k-1} r\_{togo}(k))]
\end{equation}


### Baseline subtraction {#baseline-subtraction}

Sometimes, we want to subtract a baseline reward to show how much actually better an action is (instead of blindly summing all future rewards). This could be the average reward at all actions at that state, this could be any other thing of your choosing.

\begin{equation}
\nabla\_{\theta} U(\theta) = \mathbb{E}\_{\tau} \qty[\sum\_{k=1}^{d} \nabla\_{\theta} \log \pi\_{\theta}(a^{k}|s^{k}) \qty(\gamma^{k-1} (r\_{togo}(k) - r\_{baseline}(k)))]
\end{equation}

For instance, if you have a system where each action all gave \\(+1000\\) reward, taking any particular action isn't actually very good. Hence:


## Optimizing the [Policy Gradient]({{< relref "KBhpolicy_gradient.md" >}}) {#optimizing-the-policy-gradient--kbhpolicy-gradient-dot-md}

We want to make \\(U(\theta)\\) real big. We have two knobs: what is our objective function, and what is your restriction?


### Policy Gradient Ascent {#policy-gradient-ascent}

good 'ol fashioned

\begin{equation}
\theta \leftarrow \theta + \alpha \nabla U(\theta)
\end{equation}

where \\(\alpha\\) is learning rate/step factor.


### Restricted Gradient {#restricted-gradient}

We want to maximize \\(U(\theta)\\)

\begin{equation}
U(\theta') \approx U(\theta) + \nabla U(\theta)^{T} (\theta' - \theta)
\end{equation}

We will apply some restriction of :

\begin{equation}
\frac{1}{2}(\theta' - \theta)^{T} I(\theta' - \theta) \leq \epsilon
\end{equation}


### Natural Gradient {#natural-gradient}


### Trust Region Policy Optimization {#trust-region-policy-optimization}


### Proximal Policy Optimization {#proximal-policy-optimization}
