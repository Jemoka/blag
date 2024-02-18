+++
title = "SU-MATH53 FEB212024"
author = ["Houjun Liu"]
draft = false
+++

A [Partial Differential Equation]({{< relref "KBhpartial_differential_equations.md" >}}) is a [Differential Equation]({{< relref "KBhdiffeq_intro.md" >}}) which has more than one **independent variable**.

For instance:

\begin{equation}
\pdv{U}{t} = \alpha \pdv[2]{U}{x}
\end{equation}


## Linear Partial Differential Equation {#linear-partial-differential-equation}

A PDE is a [Linear PDE](#linear-partial-differential-equation) when it takes on the form of:

\begin{equation}
a\_{k,j}(t,x) \frac{\dd[k+j]{u}}{\dd[k]{x}\dd[j]{t}}
\end{equation}

meaning, it overall takes on the form of:

\begin{equation}
a\_{m,n}(t,x) \frac{\partial^{m+n}{u}}{\partial^{m}{x}\partial^{n}{t}} + \dots + a\_{1,0}(t,x) \pdv{u}{x} + a\_{0,1}(t,x) \pdv{u}{t} + a\_{0,0}(t,x) u = f(t,x)
\end{equation}


### [superposition principle]({{< relref "KBhordinary_differential_equations.md#superposition-principle" >}}) {#superposition-principle--kbhordinary-differential-equations-dot-md}

like homogeneous linear [ODE]({{< relref "KBhordinary_differential_equations.md" >}})s, homogeneous [Linear PDE](#linear-partial-differential-equation)s also satisfy the superposition principle: any linear combinations of solutions are a solution.


## Traveling Wave {#traveling-wave}

For two-variable [PDE]({{< relref "KBhpartial_differential_equations.md" >}})s, it is called a [Traveling Wave](#traveling-wave) if solutions to \\(u\\) takes on the form:

\begin{equation}
u(t,x) = w(x-ct)
\end{equation}

for some constant \\(c\\), and where \\(w(x)\\) is a function which depends on only one of the two variables.
