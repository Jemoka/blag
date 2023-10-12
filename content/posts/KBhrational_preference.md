+++
title = "Rational Preference"
author = ["Houjun Liu"]
draft = false
+++

For rational values, for two situations, \\(A, B\\), we have, with [utility]({{< relref "KBhutility_theory.md" >}}) function \\(U\\):

\begin{equation}
U(A) > U(B) \iff A \succ B
\end{equation}

\begin{equation}
U(A) = U(B) \IFF A \sim B
\end{equation}

and this \\(U\\) is unique up to the same [affine transformation]({{< relref "KBhaffine_transformation.md" >}})


## Motivation {#motivation}

Suppose we would like to say that "we prefer all to well \\(A\\) more than bad blood \\(B\\)"

\begin{equation}
A \succ B
\end{equation}

No right or wrong answers in this statement by itself, but we can check whether or not your preferences are **inconsistent** with itself.


## von Neumann and Morgenstern Axioms {#von-neumann-and-morgenstern-axioms}

Axioms for checking if a set of preferences are rational.

For three conditions \\(A, B, C\\), we have:


### completeness {#completeness}

"[universal comparability]({{< relref "KBhprobability_theory.md#universal-comparability" >}})"

either \\(A \succ B\\), \\(A \prec B\\), \\(A \sim B\\) (you have to like either better, or be indifferent)


### [transitivity]({{< relref "KBhprobability_theory.md#transitivity" >}}) {#transitivity--kbhprobability-theory-dot-md}

If \\(A \succeq B\\), \\(B \succeq C\\), then \\(A \succeq C\\)


### [continuity]({{< relref "KBhuniqueness_and_existance.md#continuity" >}}) {#continuity--kbhuniqueness-and-existance-dot-md}

If \\(A \succeq C \succeq B\\), then there exists some probability \\(p\\) such that we can form a [lottery]({{< relref "KBhlottery.md" >}}) of shape \\([A:p; B:1-p] \sim C\\)

That is, if \\(C\\) is between \\(A, B\\), then we can create a situation where we mix the chance of \\(A\\) and \\(B\\) happening such that selecting from that situation feels equally as good as selecting from \\(C\\)


### [independence]({{< relref "KBhprobability.md#independence" >}}) {#independence--kbhprobability-dot-md}

for \\(A \succ B\\), then for any \\(C\\) and probability \\(b\\) and any probability \\(p\\), then the [lotteries]({{< relref "KBhlottery.md" >}}) \\([A:p; c:1-p] \geq [B:p; C:1-p]\\)

As in, if you swap out a component of a [lottery]({{< relref "KBhlottery.md" >}}) with something less desirable, your new [lottery]({{< relref "KBhlottery.md" >}}) should be more undesirable as well.
