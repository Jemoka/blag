+++
title = "policy iteration"
author = ["Houjun Liu"]
draft = false
+++

[policy iteration]({{< relref "KBhpolicy_iteration.md" >}}) will allow us to perform [policy evaluation]({{< relref "KBhpolicy_evaluation.md" >}}) for an [optimal policy]({{< relref "KBhpolicy.md#optimal-policy" >}}).

1.  start with some initial [policy]({{< relref "KBhpolicy.md" >}}) \\(\pi\\) (this scheme converges to an [optimal policy]({{< relref "KBhpolicy.md#optimal-policy" >}}) regardless of where you start)
2.  [solve for \\(U^{\pi}\\)]({{< relref "KBhpolicy_evaluation.md#solving-for-the-utility-of-a-policy" >}})
3.  create a new policy \\(\pi'\\) by creating a [value-function policy]({{< relref "KBhpolicy_evaluation.md#value-function-policy" >}}) that maximizes \\(U^{\pi}\\)
4.  repeat 2-3

Since there are a finite policies, this will eventually converge.
