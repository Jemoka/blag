+++
title = "SU-MATH53 FEB212024"
author = ["Houjun Liu"]
draft = false
+++

A [Partial Differential Equation]({{< relref "KBhpartial_differential_equations.md" >}}) is a [Differential Equation]({{< relref "KBhdiffeq_intro.md" >}}) which has more than one **independent variable**: $u(x,y), u(t,x,y), ...$

For instance:

\begin{equation}
\pdv{U}{t} = \alpha \pdv[2]{U}{x}
\end{equation}


## Key Intuition {#key-intuition}

-   [PDE]({{< relref "KBhpartial_differential_equations.md" >}})s may have no solutions (unlike [Uniqueness and Existance]({{< relref "KBhuniqueness_and_existance.md" >}}) for [ODE]({{< relref "KBhordinary_differential_equations.md" >}})s)
-   yet, usually, there are too many solutions---so... how do you describe all solutions?
-   usually, there are no explicit formulas


## Laplacian of \\(u(x,y)\\) {#laplacian-of-u--x-y}

\begin{equation}
\pdv[2]{u}{x} + \pdv[2]{u}{y}
\end{equation}

Think about a Gaussian distribution, a bell shape curve. One important intuition is that the entire thing is curving down.


## Examples {#examples}


### [Heat Equation]({{< relref "KBhheat_equation.md" >}}) {#heat-equation--kbhheat-equation-dot-md}

See [Heat Equation]({{< relref "KBhheat_equation.md" >}})


### Wave Equation {#wave-equation}

**SEE [solving wave equation]({{< relref "KBhsu_math53_feb282024.md#solving-wave-equation" >}})**

\begin{equation}
u(t,x), u(t,x,y)
\end{equation}

we describe it:

\begin{equation}
\pdv[2]{u}{t} = c^{2} \qty(\pdv[2]{u}{x} + \pdv[2]{u}{y})
\end{equation}

If we write it in a single set of variables:

\begin{equation}
\pdv[2]{u}{t} = \pdv[2]{u}{x}
\end{equation}

One particular solution:

\begin{equation}
u(t,x) = \cos t \sin x
\end{equation}

If you consider traveling across \\(t\\), you will note that we begin at \\(\cos (1) = 1\\), then slowly travel to \\(\cos (\frac{\pi}{2}) = 0\\), and back and forth.


#### General Standing Wave Solution {#general-standing-wave-solution}

Because the [PDE]({{< relref "KBhpartial_differential_equations.md" >}}) given is linear, solutions compose, and we note that any scale of \\(\cos kt \sin kx\\) will compose.

\begin{equation}
u(t,x) = \sum\_{k=0}^{\infty} a\_{k} \cos kt \sin kx
\end{equation}


#### Fourier Series {#fourier-series}

\begin{equation}
u(o,x) \sum\_{k} a\_{k}\sin kx
\end{equation}

BIG **stunning conclusion**: **every single function, including wack ones, can be decomposed**. See [Fourier Series]({{< relref "KBhsu_math53_feb252024.md#fourier-decomposition" >}})


#### General Traveling Wave Solution {#general-traveling-wave-solution}

\begin{equation}
u(t,x) = \sin (x-t) w(x-t)
\end{equation}

as long as \\(w\\) is a valid twice-differentiable solution, plugging its derivative in will resolve as well.

<!--list-separator-->

-  Composition

    \begin{equation}
    \sin (x-t) + \sin (x+t) = \sin x \cos t - \cos x \sin t + \sin x \cos t + \cos x \sin t = 2 \sin x \cos t
    \end{equation}


### Transport Equation {#transport-equation}

\begin{equation}
\pdv{u}{t} = \pdv{u}{x}
\end{equation}

generally any \\(u = w(x+t)\\) should solve this


### Schrodinger Equation {#schrodinger-equation}

We have some:

\begin{equation}
u(x,t)
\end{equation}

and its a complex-valued function:

\begin{equation}
i \pdv{u}{t} = \pdv[2]{u}{x}
\end{equation}

which results in a superposition in linear equations


### Nonlinear Example {#nonlinear-example}

\begin{equation}
\pdv{u}{t} = \pdv[2]{u}{x} + u(1-u)
\end{equation}

this is a [PDE]({{< relref "KBhpartial_differential_equations.md" >}}) variant of the [logistic equation]({{< relref "KBhlogistic_equations.md" >}}): this is **non-linear**


### Monge-Ampere Equations {#monge-ampere-equations}

\begin{equation}
u(x,y)
\end{equation}


#### Hessian {#hessian}

\begin{equation}
Hess(u) = \mqty(\pdv[2]{u}{x} & \frac{\partial^{2} u}{\partial x \partial y}  \\\ \frac{\partial^{2} u}{\partial x \partial y} & \pdv[2]{u}{y})
\end{equation}

If we take its determinant, we obtain:

\begin{equation}
\pdv[2]{u}{x} \pdv[2]{u}{y} - \qty(\frac{\partial^{2} u}{\partial x \partial y})^{2}
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


## [Bell Curves]({{< relref "KBhbell_curves.md#bell-curves" >}}) {#bell-curves--kbhbell-curves-dot-md}

See also [Bell Curves]({{< relref "KBhbell_curves.md#bell-curves" >}})
