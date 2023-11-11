+++
title = "belief"
author = ["Houjun Liu"]
draft = false
+++

[belief]({{< relref "KBhbelief.md" >}}) is a [probability distribution]({{< relref "KBhprobability_distributions.md" >}}) over your states.

\begin{equation}
b \leftarrow update(b,a,o)
\end{equation}

we want to create a [Baysian Network]({{< relref "KBhbaysian_network.md" >}}) to represent our situation. For instance, say for a speech recognition task:

if we have state certainty, the states "lonely, Starbucks, lovers" converges to:

{{< figure src="/ox-hugo/2023-11-09_09-50-38_screenshot.png" >}}

This is a [HMM]({{< relref "KBhhidden_markov_model.md" >}})! The only difference between something like this and a normal [Markov Decision Process]({{< relref "KBhmarkov_decision_process.md" >}}) is that each state hangs an observation:

{{< figure src="/ox-hugo/2023-11-09_09-52-58_screenshot.png" >}}

which for us is the sound waves. This means that we describe a [POMDP]({{< relref "KBhpartially_observable_markov_decision_process.md" >}}) with three expressions:

-   \\(T(s'|s,a)\\)
-   \\(R(s,a)\\)

this is just one more expression than an [MDP]({{< relref "KBhmarkov_decision_process.md" >}}); we take need the third expression because we may not know \\(s\\) directly, because we only get to observe \\(O\\) and not \\(s\\).


## observation model {#observation-model}

\\(O(o|a,s')\\) is a model for what observations we may get if we are in a particular state/action.


### error model {#error-model}

there is some model which is a probability distribution over the state given observation:

{{< figure src="/ox-hugo/2023-11-09_10-01-10_screenshot.png" >}}

let orange \\(d\\) be state, the green would be the [error model](#error-model)


## discrete state filter {#discrete-state-filter}

\begin{equation}
b'(s') = P(s'|b,a,o)
\end{equation}

\\(b'\\) is what state we think we are in next, and its a probability distribution over all states, calculated given from \\(b,a,o\\) our current belief about our state, our action, and our observation.

We can perform this belief update by performing [Bayes Theorem]({{< relref "KBhbayes_theorem.md" >}}) over \\(o\\):

\begin{align}
b'(s') &= P(s'|b,a,o)  \\\\
&\propto P(o|b,a,s') P(s' | b,a)
\end{align}

Now, consider

{{< figure src="/ox-hugo/2023-11-09_09-52-58_screenshot.png" >}}

\\(b\\) is a representation of \\(s\\) ("belief is a representation of what previous state you are in.") However, you will note that \\(s\\) is [conditionally independent]({{< relref "KBhbaysian_network.md#conditional-independence" >}}) to \\(o\\) through [d-seperation]({{< relref "KBhbaysian_network.md#checking-for-conditional-independence" >}}) as there is a chain \\(s \to s' \to o\\). So:

\begin{align}
b'(s') &\propto P(o|b,a,s') P(s' | b,a)  \\\\
&= P(o|a,s') P(s' | b,a)
\end{align}

This first term is by definition the [observation model](#observation-model), so we have:

\begin{align}
b'(s') &\propto P(o|a,s') P(s' | b,a)   \\\\
&= O(o|a,s')P(s' | b,a)
\end{align}

We now invoke the [law of total probability]({{< relref "KBhprobability.md#law-of-total-probability" >}}) over the second term, over all states:

\begin{align}
b'(s') &\propto O(o|a,s')P(s' | b,a)  \\\\
&= O(o|a,s') \sum\_{s}^{} P(s'|b,a,s)P(s|b,a)
\end{align}

If we know \\(s\\) and \\(a\\) in the \\(P(s'|b,a,s)\\) terms, we can drop \\(b\\) because if we already know \\(a,s\\) knowing what probability we are in \\(s\\) (i.e. \\(b(s)\\)) is lame. Furthermore, \\(P(s|b,a)=b(s)\\) because the action we take is irrelavent to what CURRENT state we are in, if we already are given a distribution about what state we are in through \\(b\\).

\begin{align}
b'(s') &\propto O(o|a,s') \sum\_{s}^{} T(s'|s,a)b(s)
\end{align}


## Kalman Filter {#kalman-filter}

[Kalman Filter](#kalman-filter) is [discrete state filter](#discrete-state-filter) but continuous. Consider the final, belief-updating result of the [discrete state filter](#discrete-state-filter) above, and port it to be continous:

\begin{equation}
b'(s') \propto O(o|a,s') \int\_{s} T(s'|s,a) b(s) ds
\end{equation}

if we modeled our transition probabilties, observations, and initial belief with a [gaussian]({{< relref "KBhgaussian_distribution.md" >}}) whereby each parameter is a [gaussian model]({{< relref "KBhgaussian_distribution.md" >}}) parameterized upon a few matricies.

\begin{equation}
T(s'|s,a) = \mathcal{N}(s'|T\_{s} s + T\_{a} a, \Sigma\_{s})
\end{equation}

\begin{equation}
O(o|s') = \mathcal{N}(o|O\_{s}s', \Sigma\_{o})
\end{equation}

\begin{equation}
b(s) = \mathcal{N}(s | \mu\_{b}, \Sigma\_{b})
\end{equation}

Two main steps:


### predict {#predict}

\begin{equation}
\mu\_{p} \leftarrow T\_{s} \mu\_{b} + T\_{a}a
\end{equation}

\begin{equation}
\Sigma\_{p} \leftarrow T\_{s} \Sigma\_{b} T\_{s}^{T} + \Sigma\_{s}
\end{equation}

given our current belief \\(b\\) and its parameters, and our current situation \\(s,a\\), we want to make a prediction about where we **should** be next. We should be somewhere on: \\(b'\_{p} = \mathcal{N}(\mu\_{p}, \Sigma\_{p})\\).


### update {#update}

\begin{equation}
\mu\_{b} \leftarrow \mu\_{p}+K(o-O\_{s}\mu\_{p})
\end{equation}

\begin{equation}
\Sigma\_{b} \leftarrow (I-KO\_{s})\Sigma\_{p}
\end{equation}

where \\(K\\) is [Kalmain gain](#kalmain-gain)

We are now going to take an observation \\(o\\), and update our belief about where we should be now given our new observation.


#### Kalmain gain {#kalmain-gain}

\begin{equation}
K \leftarrow \Sigma\_{p} O\_{s}^{T} (O\_{s}\Sigma\_{p}O\_{s}^{T}+\Sigma\_{O})^{-1}}
\end{equation}
