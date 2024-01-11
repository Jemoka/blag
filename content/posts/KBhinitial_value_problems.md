+++
title = "initial value problems"
author = ["Houjun Liu"]
draft = false
+++

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


## one and exactly one solution exist for every point of an IVP {#one-and-exactly-one-solution-exist-for-every-point-of-an-ivp}

The [ODE]({{< relref "KBhordinary_differential_equations.md" >}}) \\(y' = f(t,y)\\) with initial condition \\(y(t\_0) = y\_0\\), where, \\(f\\) has to be continuous in **all** \\(t,y\\), and differentiable in \\(y\\), has a unique solution on some [maximal interval]({{< relref "KBhmaximal_interval.md" >}}) of \\(t\\).

That is: for every single point on a solution space of an [IVP]({{< relref "KBhinitial_value_problems.md" >}}), each point is covered one solution and only one solution. Its possible for that function to diverge beyond that point.
