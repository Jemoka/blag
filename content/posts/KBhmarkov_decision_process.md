+++
title = "Markov Decision Process"
author = ["Houjun Liu"]
draft = false
+++

A [MDP]({{< relref "KBhmarkov_decision_process.md" >}}) is a [decision network]({{< relref "KBhdecision_networks.md" >}}) whereby a sequences of actions causes a sequence of states. Each state is dependent on the action we take and the state we are in, and each [utility]({{< relref "KBhutility_theory.md" >}}) is dependent on action taken and the state we are in.

Note that, unlike a [POMDP]({{< relref "KBhpartially_observable_markov_decision_process.md" >}}), we know what state we are in---the observations from the states are just unclear.

{{< figure src="/ox-hugo/2023-10-17_09-18-03_screenshot.png" >}}


## constituents {#constituents}

-   \\(A\\): action space
-   \\(S\\): state space (assuming discrete for now, there are \\(n\\) states)
-   \\(T(s' | s,a)\\): state-transition model "[probability]({{< relref "KBhprobability.md" >}}) that we end up in \\(s'\\) given \\(s\\) and action \\(a\\)"
-   \\(R(s,a)\\): expected reward given in an action and a state (real world reward maybe stochastic)
-   \\(\pi\_{t}(s\_{1:t}, a\_{1:t-1})\\): the [policy]({{< relref "KBhpolicy.md" >}}), returning an action, a system of assigning actions based on states
    -   however, our past states are [d-seperated]({{< relref "KBhbaysian_network.md#checking-for-conditional-independence" >}}) from our [current]({{< relref "KBhcurrent.md" >}}) action given knowing the state, so really we have \\(\pi\_{t}(s\_{t})\\)


## requirements {#requirements}


## additional information {#additional-information}

We assume [policy]({{< relref "KBhpolicy.md" >}}) to be exact right now.


### stationary [Markov Decision Process]({{< relref "KBhmarkov_decision_process.md" >}}) {#stationary-markov-decision-process--kbhmarkov-decision-process-dot-md}

This is a [stationary Markov Decision Process](#stationary-markov-decision-process--kbhmarkov-decision-process-dot-md) because at each node \\(S\_{n}\\), we have: \\(P(S\_{n+1} | A\_n, S\_n)\\). Time is **not** a variable: as long as you know what state you are in, and what you did, you know the transition [probability]({{< relref "KBhprobability.md" >}}).

{{< figure src="/ox-hugo/2023-10-17_13-07-24_screenshot.png" >}}

(that is, the set of states is not dependent on time)


### calculating rewards {#calculating-rewards}

Because, typically, in [decision network]({{< relref "KBhdecision_networks.md" >}})s you sum all the [utilities]({{< relref "KBhutility_theory.md" >}}) together, you'd think that we should sum the [utilities]({{< relref "KBhutility_theory.md" >}}) together.


#### finite-horizon models {#finite-horizon-models}

We want to maximize reward over time, over a finite horizon \\(n\\). Therefore, we try to maximize:

\begin{equation}
\sum\_{t=1}^{n}r\_{t}
\end{equation}

this function is typically called "[return]({{< relref "KBhrandom_walk.md#return--finmetrics" >}})".


#### infinite-horizon models {#infinite-horizon-models}

If you lived forever, small positive \\(r\_{t}\\) and large \\(r\_{t}\\) makes no utility difference. We therefore add discounting:

\begin{equation}
\sum\_{t=1}^{\infty} \gamma^{t-1} r\_{t}
\end{equation}

where, \\(\gamma \in (0,1)\\)

we discount the future by some amount---an "interest rate"---reward now is better than reward in the future.

-   \\(\gamma \to 0\\): "myopic" strategies, near-sighted strategies
-   \\(\gamma \to 1\\): "non-discounting"


#### average return models {#average-return-models}

We don't care about this as much:

\begin{equation}
\lim\_{n \to \infty} \frac{1}{n} \sum\_{t=1}^{n}r\_{t}
\end{equation}

but its close to [infinite-horizon models](#infinite-horizon-models) with Gama close to \\(1\\)
