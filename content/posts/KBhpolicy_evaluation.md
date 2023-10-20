+++
title = "policy evaluation"
author = ["Houjun Liu"]
draft = false
+++

## solving for the utility of a policy {#solving-for-the-utility-of-a-policy}

We can solve for the [utility]({{< relref "KBhutility_theory.md" >}}) of the [policy]({{< relref "KBhpolicy.md" >}}) given the transitions \\(T\\) and reward \\(R\\) by solving the following equation

\begin{equation}
\bold{U}^{\pi} = (I - \gamma T^{\pi})^{-1} \bold{R}^{\pi}
\end{equation}


### lookahead equation {#lookahead-equation}

We begin our derivation from [finite-horizon models]({{< relref "KBhmarkov_decision_process.md#finite-horizon-models" >}}).

Gives some policy \\(\pi\\), at the base case:

\begin{equation}
U^{\pi}\_{1} (s) = R(s, \pi(s))
\end{equation}

at time \\(k+1\\) steps remaining:

\begin{equation}
U^{\pi}\_{k+1}(s) = R(s, \pi(s)) + \gamma \sum\_{s'} T(s' | s, \pi(s)) U^{\pi}\_{k} (s')
\end{equation}

we don't know what the next state will be; so for each possible next state, we marginalize the result, multiplying the [probability]({{< relref "KBhprobability.md" >}}) of being in that state (gotten by \\(T(...)\\)) times the utility of being in that state.

This is called the [lookahead equation](#lookahead-equation), which represents how much [utility]({{< relref "KBhutility_theory.md" >}}) any future state can be be if we took action at point \\(k\\).


### Bellman Expectation Equation {#bellman-expectation-equation}

The [Bellman Equation](#bellman-expectation-equation) states that "the expected utility of being in a state is the instantaneous reward of being in that state plus the discounted future utility of all possible future state." It is the fundamental result of RL.

\begin{equation}
U(s) = R(s, \pi(s)) + \gamma \sum\_{s'} T(s' | s, \pi(s)) U (s')
\end{equation}

If we are dealing with [infinite-horizon models]({{< relref "KBhmarkov_decision_process.md#infinite-horizon-models" >}}) (at "convergence" of the [lookahead equation](#lookahead-equation)), we just no longer have a time dependency from the [lookahead equation](#lookahead-equation):

We only care about some Markovian state \\(s\\), and its next possible states \\(s'\\). When these pair happened doesn't matter.

---

We now can go about solving for what \\(U^{\pi}\\) is:

Procedure:

from the [Bellman Expectation Equation](#bellman-expectation-equation), we actually have a linear equation whereby:

\begin{equation}
\bold{U}^{\pi} = \bold{R}^{\pi} + \gamma T^{\pi}\bold{U}^{\pi}
\end{equation}

where, \\(T^{\pi}\\) is an \\(n\times n\\) matrix where \\(T^{\pi}\_{i,j}\\) represents the [probability]({{< relref "KBhprobability.md" >}}) of transitioning from the \\(i\\) th to the \\(j\\) the state; and where, \\(\bold{U}^{\pi}\\) and \\(\bold{R}^{\pi}\\) are \\(n\\) vectors which represents all possible states and all possible utilities. Note that everything is parametrized on \\(\pi\\) (so \\(T\\) doesn't need an action dimension because we will be using the [policy]({{< relref "KBhpolicy.md" >}}) to calculate all the actoins)

We can now solve for the [utility]({{< relref "KBhutility_theory.md" >}}) of the [policy]({{< relref "KBhpolicy.md" >}}). Now, algebra time on the previous equation to get us:

\begin{equation}
\bold{U}^{\pi} = (I - \gamma T^{\pi})^{-1} \bold{R}^{\pi}
\end{equation}

we know that \\(T\\) is [invertable]({{< relref "KBhinvertability.md" >}}) because its a transition matrix. And that, folks, is the [utility]({{< relref "KBhutility_theory.md" >}}) of a [policy]({{< relref "KBhpolicy.md" >}}).
