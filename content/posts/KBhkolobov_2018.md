+++
title = "Kolobov 2018"
author = ["Houjun Liu"]
draft = false
+++

## One-Liner {#one-liner}

UAV navigation through leveraging updrafts, handling their unpredictability with [POMDP]({{< relref "KBhpartially_observable_markov_decision_process.md" >}})s and [Receeding Horizon]({{< relref "KBhreceeding_horizon.md" >}}).


## Novelty {#novelty}

-   Developed new method for low-cost POMDP online solving
-   Cool bird.


## Notable Methods {#notable-methods}

Formulation:

-   \\(\mathcal{S}\\): \\(s^{u} \in \mathbb{R}^{6}\\), the joint state of the UAV (2D location wrt fixed point + air speech + heading, bank, roll, altitude), and \\(s^{th} \in \mathbb{R}^{2}\\),the thermal status (thermal center x and y relative to UAV)
-   \\(\mathcal{A}\\): discretized arc trajectory segments by bank angles \\(\phi\_{1 \dots n}\\), which executes for a fixed \\(T\_{A}\\) seconds
-   \\(\mathcal{T}\\): Gaussian of \\(s^{u}\\) over the dynamics of the UAV, and over fixed noise covariance \\(Q\\)
-   \\(\mathcal{R}\\): \\(h\_{s}-h\_{s'}\\), the change in altitude.... this sounds backwards (i.e. don't we want the UAV to go up?)
-   \\(\mathcal{O}\\): senor readings
-   \\(O(a, s', o)\\): fixed noise covariance \\(R\\)
-   \\(b\_0\\): product of two Gaussian of the UAV's position and the belief about the underlying thermals
-   \\(update(b,a,o)\\): [EKF]({{< relref "KBhfilters.md#extended" >}})


### POMDSoar {#pomdsoar}

The exact solution to the [POMDP]({{< relref "KBhpartially_observable_markov_decision_process.md" >}}) as proposed makes aggressive decisions in order to simplify costs to run on a PixHawk


## Key Figs {#key-figs}

{{< figure src="/ox-hugo/2024-01-09_12-12-55_screenshot.png" >}}

ArduPilot's implementation is worse


## New Concepts {#new-concepts}

[POMDSoar](#pomdsoar), the soring mechanism


## Notes {#notes}
