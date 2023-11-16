+++
title = "Partially Observable Markov Decision Process"
author = ["Houjun Liu"]
draft = false
+++

[Partially Observable Markov Decision Process]({{< relref "KBhpartially_observable_markov_decision_process.md" >}}) is a [Markov Decision Process]({{< relref "KBhmarkov_decision_process.md" >}}) with [State Uncertainty]({{< relref "KBhstate_uncertainty.md" >}}).


## observation and states {#observation-and-states}

"where are we, and how sure are we about that?"

[beliefs]({{< relref "KBhbelief.md" >}}) and [filters]({{< relref "KBhfilters.md" >}})


## policy representations {#policy-representations}

"how do we use a policy"

-   [conditional plan]({{< relref "KBhconditional_plan.md" >}})
-   [alpha vector]({{< relref "KBhalpha_vector.md" >}}) + [one-step lookahead in POMDP]({{< relref "KBhalpha_vector.md#one-step-lookahead-in-pomdp" >}})
-   [alpha vector]({{< relref "KBhalpha_vector.md" >}}) + just take the top action of the conditional plan the alpha-vector was computed from


## policy evaluations {#policy-evaluations}

[conditional plan evaluation]({{< relref "KBhconditional_plan.md#conditional-plan--kbhconditional-plan-dot-md--evaluation" >}})


## policy solutions {#policy-solutions}

"how do we make that policy better?"


### exact solutions {#exact-solutions}

-   [optimal value function for POMDP]({{< relref "KBhconditional_plan.md#for-pomdp--kbhpartially-observable-markov-decision-process-dot-md" >}})
-   [POMDP value-iteration]({{< relref "KBhvalue_iteration.md#pomdp--kbhpartially-observable-markov-decision-process-dot-md--value-iteration" >}})


### approximate solutions {#approximate-solutions}

-   estimate an [alpha vector]({{< relref "KBhalpha_vector.md" >}}), and then use a policy representation:
    -   [QMDP]({{< relref "KBhqmdp.md" >}})
    -   [FIB]({{< relref "KBhfast_informed_bound.md" >}})
