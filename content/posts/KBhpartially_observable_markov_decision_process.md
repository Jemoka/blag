+++
title = "Partially Observable Markov Decision Process"
author = ["Houjun Liu"]
draft = false
+++

[Partially Observable Markov Decision Process]({{< relref "KBhpartially_observable_markov_decision_process.md" >}}) is a [Markov Decision Process]({{< relref "KBhmarkov_decision_process.md" >}}) with [State Uncertainty]({{< relref "KBhstate_uncertainty.md" >}}).

As always we desire to find a [policy]({{< relref "KBhpolicy.md" >}}) \\(\pi\\) such that we can:

\begin{equation}
\underset{\pi \in \Pi}{\text{maximize}}\ \mathbb{E} \qty[ \sum\_{t=0}^{\infty} \gamma^{t} R(b\_{t}, \pi(b\_{t}))]
\end{equation}

whereby our [policy]({{< relref "KBhpolicy.md" >}}) \\(\pi\\) instead of taking in a state for input takes in a [belief]({{< relref "KBhbelief.md" >}}) ([probability distribution]({{< relref "KBhprobability_distributions.md" >}}) over possible states) as input.


## observation and states {#observation-and-states}

"where are we, and how sure are we about that?"

[beliefs]({{< relref "KBhbelief.md" >}}) and [filters]({{< relref "KBhfilters.md" >}})


## policy representations {#policy-representations}

"how do we use a policy"

-   [conditional plan]({{< relref "KBhconditional_plan.md" >}})
-   [alpha vector]({{< relref "KBhalpha_vector.md" >}}) + [one-step lookahead in POMDP]({{< relref "KBhalpha_vector.md#one-step-lookahead-in-pomdp" >}})
-   [alpha vector]({{< relref "KBhalpha_vector.md" >}}) + just take the top action of the conditional plan the alpha-vector was computed from


## policy evaluations {#policy-evaluations}

[conditional plan evaluation]({{< relref "KBhconditional_plan.md#id-6f19368f-74b5-4606-a882-ec9bc5619873-conditional-plan-evaluation" >}})


## policy solutions {#policy-solutions}

"how do we make that policy better?"


### exact solutions {#exact-solutions}

-   [optimal value function for POMDP]({{< relref "KBhconditional_plan.md#id-9ccda204-0967-44c8-a801-c92d0df154b5-optimal-value-function-for-id-130d5294-0274-422b-b395-7d6f7f75be7d-pomdp" >}})
-   [POMDP value-iteration]({{< relref "KBhvalue_iteration.md#pomdp--kbhpartially-observable-markov-decision-process-dot-md--value-iteration" >}})


### approximate solutions {#approximate-solutions}

-   estimate an [alpha vector]({{< relref "KBhalpha_vector.md" >}}), and then use a policy representation:
    -   upper-bounds for [alpha vector]({{< relref "KBhalpha_vector.md" >}})s
        -   [QMDP]({{< relref "KBhqmdp.md" >}})
        -   [FIB]({{< relref "KBhfast_informed_bound.md" >}})
    -   lower-bounds for [alpha vector]({{< relref "KBhalpha_vector.md" >}})s
        -   [BAWS]({{< relref "KBhworst_possible_state.md" >}})
        -   [blind lower bound]({{< relref "KBhblind_lower_bound.md" >}})


### online solutions {#online-solutions}

[Online POMDP Methods]({{< relref "KBhonline_pomdp_methods.md" >}})
