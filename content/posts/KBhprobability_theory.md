+++
title = "probability theory"
author = ["Houjun Liu"]
draft = false
+++

[probability theory]({{< relref "KBhprobability_theory.md" >}}) is the theory of [probability]({{< relref "KBhprobability.md" >}}).


## Motivation {#motivation}

We need to compare some theory against some observation.

Let us take two statements:

-   \\(A\\) Taylor gets Nobel Prize in Literature
-   \\(B\\) Han shot first

For instance, if we want to express "I think its more likely that Taylor gets the prize than Han shot first":

\begin{equation}
A \succ B
\end{equation}


### axioms of [probability theory]({{< relref "KBhprobability_theory.md" >}}) {#axioms-of-probability-theory--kbhprobability-theory-dot-md}


#### universal comparability {#universal-comparability}

for two statements \\(A, B\\), only three states can exist:

-   \\(A \succ B\\) (A more likely)
-   \\(A \prec B\\) (B more likely)
-   \\(A \sim B\\) (equally likely)


#### transitivity {#transitivity}

if \\(A \succeq B\\) and \\(B \succeq C\\), then \\(A \succeq C\\)


### [probability]({{< relref "KBhprobability.md" >}}) and [probability theory]({{< relref "KBhprobability_theory.md" >}}) maps together {#probability--kbhprobability-dot-md--and-probability-theory--kbhprobability-theory-dot-md--maps-together}

-   \\(P(A) > P(B) \Leftrightarrow A \succ B\\)
-   \\(P(A) = P(B) \Leftrightarrow A \sim B\\)

See also [axiom of probability]({{< relref "KBhprobability.md#axiom-of-probability" >}})
