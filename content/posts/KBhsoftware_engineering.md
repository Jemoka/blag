+++
title = "Software Engineering"
author = ["Houjun Liu"]
draft = false
+++

## process of Engineering: chronological order {#process-of-engineering-chronological-order}

-   User interviews/stories
-   Documentation/Specification
-   Task estimation
-   Design &amp; architecture
-   Testing
-   Project Management
-   Build and Release engineering


## fundamental trade-off of [Software Engineering]({{< relref "KBhsoftware_engineering.md" >}}) {#fundamental-trade-off-of-software-engineering--kbhsoftware-engineering-dot-md}

The [MIT vs. New Jersey](#fundamental-trade-off-of-software-engineering--kbhsoftware-engineering-dot-md) problem: in [Software Engineering]({{< relref "KBhsoftware_engineering.md" >}}), you can only choose one of FAST or ROBUST.

| Problem    | Fast ("Bell Labs/NJ")   | Robust ("MIT")                                            |
|------------|-------------------------|-----------------------------------------------------------|
| Specs      | Whatever it looks like  | screens, states, UI elements documented; transitions      |
| Time       | "whenever"              | precise projections, track work and dependencies          |
| Testing    | "ran it + didn't crash" | black, white box, code overage, edge/adv. cases           |
| Modular    | Giant function          | object/data model, grouped function, abstraction barriers |
| Failure    | Unpredictable + silent  | Graceful, noisy, error reporting + logging                |
| Language   | Scripting, high level   | Low-level, assembly/bare metal, control, can be difficult |
| Proto.     | Many/Quickly            | Few/Slowly                                                |
| Being Done | Now                     | Later                                                     |

Source: [here](https://www.dreamsongs.com/RiseOfWorseIsBetter.html).


### how to choose? {#how-to-choose}

Which is the better approach? There isn't one. However, here are some critical questions for you to answer:

-   Deadline: what happens if you don't finish today?
-   Release cycle: if you ship a bug, how long can you fix it?
-   Consequences: if the software malfunctions, how bad is it?
-   Life-cycle: how long will the software get used?

{{< figure src="/ox-hugo/2022-09-07_13-00-47_screenshot.png" >}}