+++
title = "Pegasus"
author = ["Houjun Liu"]
draft = false
+++

Memoryless policy search through fake determinism.

-   uses a [deterministic simulative function](#deterministic-simulative-function) to calculate the value
-   performs policy search by using normal standard optimizations

Primary contribution: transforming **stochastic** [POMDP]({{< relref "KBhpartially_observable_markov_decision_process.md" >}}) to a [deterministic simulative function](#deterministic-simulative-function); foregos [alpha vector]({{< relref "KBhalpha_vector.md" >}})s.


## deterministic simulative function {#deterministic-simulative-function}

Typically, a [generative model]({{< relref "KBhonline_planning.md#generative-model" >}}) takes random actions from the action distribution. However, what we do is have a simulator which takes a **RANDOM NUMBER** as **INPUT**, and also the action distribution, and **DETERMINISTICALLY** give an action.


## [Pegasus]({{< relref "KBhpegasus.md" >}}) procedure {#pegasus--kbhpegasus-dot-md--procedure}

We augment the state:

\begin{equation}
s \in (S, \mathbb{R}^{[0,1]}, \mathbb{R}^{[0,1]}, \dots)
\end{equation}

meaning every state is a state against a series of random numbers between \\(0\\) and \\(1\\):

\begin{equation}
(s, 0.91, 0.22, \dots)
\end{equation}

at every transition, we eat up one of the random numbers to use, and take an action, and use those in our [deterministic simulative function](#deterministic-simulative-function) to obtain our next state.


## determinism {#determinism}

Because now next actions are fully deterministic at this point, we can use generic optimization techniques to solve this [POMDP]({{< relref "KBhpartially_observable_markov_decision_process.md" >}}).
