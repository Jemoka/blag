+++
title = "rho-POMDPs"
author = ["Houjun Liu"]
draft = false
+++

[POMDP]({{< relref "KBhpartially_observable_markov_decision_process.md" >}})s to solve [Active Sensing Problem]({{< relref "KBhrho_pomdps.md" >}}): where **gathering information** is the explicit goal and not a means to do something.

Directly reward the **reduction of uncertainty**: [belief]({{< relref "KBhbelief.md" >}})-based reward framework which you can just tack onto the existing solvers. To do this, we want to define some reward directly over the belief space which assigns rewards based on uncertainty reduction:

\begin{equation}
r(b,a) = \rho(b,a)
\end{equation}

and \\(\rho\\) likely includes some entropy/information.


## $&rho;$-POMDPs adaption for Piece-Wise Linear Convex ([PWLC]({{< relref "KBhrho_pomdps.md" >}})) Objectives {#and-rho-pomdps-adaption-for-piece-wise-linear-convex--pwlc-kbhrho-pomdps-dot-md---objectives}

\begin{equation}
\rho(b,a) = \max\_{\alpha \in \Gamma} \mqty[\sum\_{s}^{} ??]
\end{equation}

We want to use \\(R\\) extra alpha-vectors to compute the value at a state.


## non-[PWLC]({{< relref "KBhrho_pomdps.md" >}}) objectives {#non-pwlc--kbhrho-pomdps-dot-md--objectives}

Certain stronger-than [Lipschitz Condition]({{< relref "KBhuniqueness_and_existance.md#lipschitz-condition" >}}) [continuity]({{< relref "KBhuniqueness_and_existance.md#continuity" >}}) on \\(\rho\\), we can use a modified version of the bellman updates.
