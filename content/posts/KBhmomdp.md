+++
title = "MOMDP"
author = ["Houjun Liu"]
draft = false
+++

[MOMDP]({{< relref "KBhmomdp.md" >}}) are [POMDP]({{< relref "KBhpartially_observable_markov_decision_process.md" >}})s where some parts of the state are fully observable.

---


## Motivation {#motivation}

scaling up [POMDP]({{< relref "KBhpartially_observable_markov_decision_process.md" >}})s is ****really hard****: exponential [curse of dimensionality]({{< relref "KBhcurse_of_dimensionality.md" >}}). Even discretization will cause the number of beliefs to really blow up.

**Some of the state isn't uncertain, some others are bounded uncertainty: this REDUCES scale a lot.**


## Solving {#solving}

Solving the algorithm uses [SARSOP]({{< relref "KBhsarsop.md" >}}), or any point-based system. Instead of sampling the full belief state, however, we sample from a tuple \\((x, b\_{y})\\), whereby \\(x\\) is the observable part and \\(b\_{y}\\) is the unobservable part.


## How Exactly Tuple? {#how-exactly-tuple}


### True Mixed Observability {#true-mixed-observability}

Go about splitting about your space based on the true observability part. Say there are \\(10\\) states which are observable, you literally just initialize 10 sets of [alpha vector]({{< relref "KBhalpha_vector.md" >}})s to create:

\begin{equation}
V(x, b\_{y}) = \dots
\end{equation}

whereby all of your objectives and backup, etc., takes \\(x\\) your observable state as input. Then, during inference/backup looking at where you are.


### Pseudo-Full Observability {#pseudo-full-observability}

Train a fully observable model, and then use [belief]({{< relref "KBhbelief.md" >}})-weighted average during inference. This is where [QMDP]({{< relref "KBhqmdp.md" >}}) came from.


### Bounded Uncertainty {#bounded-uncertainty}

Throw away extra uncertainty, and hence leave only the region around your observed location.
