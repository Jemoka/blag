+++
title = "falsification"
author = ["Houjun Liu"]
draft = false
+++

[falsification]({{< relref "KBhfalsification.md" >}}) is the process of systematically finding failures of a particular system to inform future design decisions.

Goals:

-   enhance system sensors
-   change the agent's policy
-   revise the system requirements
-   adapt the training of human operators
-   recognize a system as having limitations
-   ...or abandon the project

Here are some methods


## direct falsification {#direct-falsification}

-   rollout to a ceratin depth
-   check if any trajectory is a failure and collect
-   return them

**drawback**: this doesn't work super well for rare events


### ...how bad is it {#dot-dot-dot-how-bad-is-it}

\begin{equation}
p\_{fail} = \text{probability of failure}
\end{equation}

we typically don't know this! But suppose we did. Let's define:

\begin{equation}
p\qty(k): \text{probability we sample a failure on the $k$ th rollout}
\end{equation}

Meaning, the probability of \\((1-p\_{fail})^{k-1} p\_{fail}\\). This is our distribution over \\(k\\), and it is a geometric distribution! Meaning, it should require \\(\frac{1}{p\_{fail}}\\) simulations on average before we find a singular failure event.


## disturbances {#disturbances}

goal: systematically search for failures by **taking control for the sources of randomness**.

For instance, consider our observation model:

\begin{equation}
o \sim O\qty(\cdot | s)
\end{equation}

let's re-write:

\begin{equation}
o = O(s, x\_0), x\_{o} \sim D\_{o} \qty(\cdot | s)
\end{equation}

we are factoring the original model into a deterministic part \\(o = O\\), and also the stochastic part \\(x\_{o} \sim D\_{o}\\). Aesthetically, we typically want \\(D\\) to be a simple distribution, and perform transformations to the target distribution into \\(O\\).

---

we'll do this for everything

\begin{equation}
s' \sim T \qty(\cdot | s,a) \implies  s' = T(s,a,x\_{s}), x\_{s} \sim D\_{s}\qty(\cdot | s,a)
\end{equation}

...and more

We can package all of these \\(x,D\\) up together, into **disturbance** \\(x\\) and disturbance distribution \\(D\\).


### example {#example}

Suppose our observation is \\(o \sim \mathcal{N} \qty(\cdot | s, \Sigma)\\). Let's factor it:

\begin{equation}
o = s + x\_0, x\_0 \sim \mathcal{N} \qty(\cdot | 0, \Sigma)
\end{equation}

that is, the disturbance is the "observation noise" added to the true state. We just have a disturbance distribution centered at zero which helps us add noise to the observation.


### rewriting environment {#rewriting-environment}

```julia
function step(sys::System, s::State, D::DisturbanceDistributino)
    xo = rand(D.Do(s))
    o = sys.sensor(s, xo)
    xa = rand(D.Da(o))
    a = sys.agent(o,xa)
    xs = rand(D.Ds(s,a))
    s′ = sys.env(s,a,xs)

    # storing for bookeeping
    x = Disturbance(xa, xs, xo)

    return (; o, a, s′, x)
end
```


### trajectory distribution {#trajectory-distribution}

Recall: sources of randomness for a rollout --- 1) the initial state, and 2) the disturbance distribution applied at each step.

We can actually then specify this [trajectory distribution](#trajectory-distribution) with the following properties:

```julia
abstract type TrajectoryDistribution end
function initial_state_distribution(p::TrajectoryDistribution) end
function distriburbance_distribution, t::Timestamp) end
function depth(p::TrajectoryDistribution) end
```

we can then roll this system out:

```julia
function rollout(p::TrajectoryDistribution; d=depth(p))
    s = rand(initial_state_distribution(p))
    τ = []
    for t = 1:d
        o,a,s′ = step(s, distriburbance_distribution(p,t))
        push!(τ, (s′,o,a,x))
        s = s′
    end
end
```

a normal rollout can be factored to this via a "nominal trajectory distribution" .


## fuzzing {#fuzzing}

input a non-nominal [trajectory distribution](#trajectory-distribution) to cause failure. Usually, we do this by increasing variance off the nominal distirbution.


## disturbance optimization {#disturbance-optimization}

we want to systematically search over initial states and _**sequences** of disturbances_ of find failure trajectories.

\begin{align}
\min\_{s,x} &\ f\qty(\tau) \\\\
s.t. &\ \tau = RO(s,x)
\end{align}

where \\(f(\tau)\\) represents "closeness to failure".
