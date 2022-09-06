+++
title = "bending"
author = ["Houjun Liu"]
draft = false
+++

[Bending]({{< relref "KBhbending.md" >}}) is what happens when you apply a [transverse load]({{< relref "KBhtransverse_loaod.md" >}}) to an object and it goes wooosh.

{{< figure src="/ox-hugo/2022-09-05_22-22-09_screenshot.png" >}}

That's cool. Now how does it work?


## Euler-Bernoulli Theory {#euler-bernoulli-theory}

Let's take some [transverse load]({{< relref "KBhtransverse_loaod.md" >}}) \\(q(x,t)\\), applied at time \\(t\\) at location \\(x\\). To model the load/bending/vibration of the rod, we first have to know a few more things.

First, figure the [Young's Modulus]({{< relref "KBhyoung_s_modulus.md" >}}) \\(E\\) of the thing that you are bending.