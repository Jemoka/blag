+++
title = "initial value problems"
author = ["Houjun Liu"]
draft = false
+++

## First order IVP {#first-order-ivp}

The class of problems described as:

\begin{equation}
\dv{y}{t} = f(t, y)
\end{equation}

and:

\begin{equation}
y(t\_0) = y\_0
\end{equation}

we need to figure "which of the general solutions of the DiffEqu satisfy the general value.

To do this, we simply have to plug in the initial value and solve for our constant \\(K\\).


## Second order IVP {#second-order-ivp}

\begin{equation}
\dv[2]{d}{t} = f(t,y,y')
\end{equation}

this requires two initial conditions to fully specify (because two variables becomes constant and goes away).


## one and exactly one solution exist for every point of an IVP {#one-and-exactly-one-solution-exist-for-every-point-of-an-ivp}

The [ODE]({{< relref "KBhordinary_differential_equations.md" >}}) \\(y' = f(t,y)\\) with initial condition \\(y(t\_0) = y\_0\\), where, \\(f\\) has to be continuous in some maximal interval \\(t,y\\), and differentiable in \\(y\\), has a unique solution on some [maximal interval]({{< relref "KBhmaximal_interval.md" >}}) of \\(t\\).

That is: for every single point on a solution space of an [IVP]({{< relref "KBhinitial_value_problems.md" >}}), each point is covered one solution and only one solution. Its possible for that function to diverge beyond that point.


## auxiliary constants {#auxiliary-constants}

:PROPERTIES:
:ID:       20C96C21-7C77-4F84-BDDD-B0F96E509200

\\(y\_0\\), or some \\(C\\) that arise out of constant of integration. Essentially, the values which fin down a specific function from a function family
