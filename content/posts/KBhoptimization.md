+++
title = "optimization"
author = ["Houjun Liu"]
draft = false
+++

[optimization]({{< relref "KBhoptimization.md" >}}) is a [decision making method]({{< relref "KBhdecision_making.md#id-9075c44f-4b26-4f5a-9236-bc7a5c10f4ee-decision-making-methods" >}}):

1.  identify a performance measure and a space of possible strategies to try
2.  run a bunch of simulations given a particular strategy, and measuring the performance
3.  try strategies with the goal of maximizing the performance measured

Importantly: model is not used to guide the search, it is only used to run simulations to evaluate performance.


## Disadvantage (or advantage) {#disadvantage--or-advantage}

-   does **not** take a advantage of the structure of the problem
