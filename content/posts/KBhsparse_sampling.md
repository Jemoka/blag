+++
title = "Sparse Sampling"
author = ["Houjun Liu"]
draft = false
+++

Same core algorithm as [Forward Search]({{< relref "KBhforward_search.md" >}}), but instead of calculating a [utility]({{< relref "KBhutility_theory.md" >}}) based on the [action-value]({{< relref "KBhaction_value_function.md" >}}), you sample a set of possible next states and average their future utilities. How many to sample is controlled by \\(m\\).
