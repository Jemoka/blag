+++
title = "Bouton 2018"
author = ["Houjun Liu"]
draft = false
+++

(<a href="#citeproc_bib_item_2">Bouton et al. 2018</a>)


## One-Liner {#one-liner}

Uses the single-user avoidance POMDP formulation presented in (<a href="#citeproc_bib_item_1">Bouton, Cosgun, and Kochenderfer 2017</a>) to extend to multiple road users


## Novelty {#novelty}

Uses [Single-User Model of Road Navigation](#single-user-model-of-road-navigation) to extend general [POMDP]({{< relref "KBhpartially_observable_markov_decision_process.md" >}}) formulation into multi-pedestrian


## Notable Methods {#notable-methods}

-   Uses and [SARSOP]({{< relref "KBhsarsop.md" >}}) to perform optimization

Scaling to multiple road users "is straightforward":

-   make an aggregate utility which is a function across all the single-user avoidance strategies (i.e. the aggregate utiltiy of mulitlpe road user is the utility of avoiding each individual user) \\(U^{\*}(b,a) = f(U^{\*}(b\_1, a) ... U^{\*}(b\_{n}, a)\\). this is called [utility fusion]({{< relref "KBhutility_fusion.md" >}})
-   two possible approaches: either minimum of all the utilities, or the sum of them; the former is more risk averse (we want to hit no one), and latter treats each user is independent.
-   further, the number of users in the road is modeled by a belief


## Key Figs {#key-figs}

{{< figure src="/ox-hugo/2024-01-09_13-00-53_screenshot.png" >}}

{{< figure src="/ox-hugo/2024-01-09_13-00-59_screenshot.png" >}}


## New Concepts {#new-concepts}


### Single-User Model of Road Navigation {#single-user-model-of-road-navigation}

POMDP formulation; we only care about **one road user**

1.  action: a finite set of change in acceleration
2.  states and transitions: position and velocity of car and the one other road user, updated constantly
3.  observation: measured position and velocity of the one other road user with a pm 1 meter variance for crosswalks and pm 2 meter variance for intersection
4.  reward: unit reward for final position, tuned penalty for collision


## Notes {#notes}
