+++
title = "HSVI"
author = ["Houjun Liu"]
draft = false
+++

Improving [PBVI]({{< relref "KBhpoint_based_value_iteration.md" >}}) without sacrificing quality.


## Lower Bound {#lower-bound}

Set of [alpha vector]({{< relref "KBhalpha_vector.md" >}})s: [best-action worst-state]({{< relref "KBhworst_possible_state.md" >}}) ([HSVI]({{< relref "KBhhsvi.md" >}})1), [blind lower bound]({{< relref "KBhblind_lower_bound.md" >}}) ([HSVI]({{< relref "KBhhsvi.md" >}})2)


## Upper Bound {#upper-bound}

[Fast Informed Bound]({{< relref "KBhfast_informed_bound.md" >}})

-   solving fully-observable MDP
-   Project \\(b\\) into the point-set
-   Projected the upper bound onto a convex hull (HSVI2: via approximate convex hull projection)


## Explore {#explore}

-   select an action \\(a^{\*}\\) and observation \\(o^{\*}\\) to further our search
-   selects the child not which has the most uncertainty to root node \\(b\\)
-   if your belief has a zero value, don't calculate alpha vector

{{< figure src="/ox-hugo/2024-01-18_09-21-19_screenshot.png" >}}
