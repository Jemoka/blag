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

Of course, we also want to know what shape our thing is; more specifically, we want to know how the point masses in our thing is distributed. So we will also need the [second moment of area]({{< relref "KBhsecond_moment_of_area.md" >}}) \\(I\\).

Finally, we should have \\(m\\) mass per unit length of the rod we are bending.

The [Euler-Bernoulli Theory](#euler-bernoulli-theory) tells us that the deflection (distance from the neutral-axis) each point \\(x\\) in the material should get is:

\begin{equation}
EI \pdv[4]{w}{x} + m \pdv[2]{w}{t} = q(x,t)
\end{equation}

Solving this lovely [Differential Equation]({{< relref "KBhdiffeq_intro.md" >}}) would tell you how far away each point diverges from the neutral point.

Tracing this out over \\((x,t)\\), we can get some trace of how the thing vibrates by measuring the behavior of \\(\omega\\).


### free vibrations in [Euler-Bernoulli Theory](#euler-bernoulli-theory) {#free-vibrations-in-euler-bernoulli-theory--org5f27273}

If no time-varying \\(q\\) exists, we then have:

\begin{equation}
EI \pdv[4]{w}{x} + m \pdv[2]{w}{t} = 0
\end{equation}

And then some magical [Differential Equations]({{< relref "KBhdiffeq_intro.md" >}}) happen. I hope to learn them soon.

{{< figure src="/ox-hugo/2022-09-05_23-15-31_screenshot.png" >}}

{{< figure src="/ox-hugo/2022-09-05_23-16-41_screenshot.png" >}}

The result here is significant: if we can figure the actual rate of vibrations which we expect.

However, this doesn't really decay---but [funing tork]({{< relref "KBhtuning_forks.md" >}})s do. How?

Apparently because air resistance---Zachary Sayyah. So Sasha time.