+++
title = "SU-MATH53 FEB142024"
author = ["Houjun Liu"]
draft = false
+++

## Numerical Approximation Schemes {#numerical-approximation-schemes}

Consider a general non-linear [First Order ODEs]({{< relref "KBhfirst_order_odes.md" >}}):

\begin{equation}
x' = F(x)
\end{equation}

Suppose we have some time interval, we have some solutions to the expression given. Is it possible for us to, given \\(x(t\_0) = x\_0\\), what \\(x(t\_0+T)\\) would be? Can we approximate for explicit numbers?

The solutions have to exist for all time: blow-up **cannot** be present during numerical estimations.


### Explicit Euler Method {#explicit-euler-method}

recall that given \\(x(t\_0) = x\_0\\), we desire \\(x(t\_0+T)\\).

1.  divide your solution interval into \\(N\\) small intervals; each interval would have length \\(h= \frac{T}{N}\\)
2.  let \\(t\_{i} = t\_0 + i \frac{T}{N}\\), where \\(t\_{N} = t\_{0}+T\\)
3.  for each segment \\(t\_{i}\\), we attempt to compute a \\(x\_{i}\\), and we'd like to approximate the error between \\(x\_{i}\\) and \\(x(t\_{i})\\).

In the explicit Euler method, we make piecewise linear approximations. At each \\(x\_0\\), we follow the slope estimated via the [ODE]({{< relref "KBhordinary_differential_equations.md" >}}) at that point. Specifically:

\begin{equation}
x'(t) = \lim\_{k \to 0} \frac{x(t+k)-x(t)}{k} \approx \frac{x(t+h)-x(t)}{h}
\end{equation}

for some small \\(h\\). Meaning, specifically, \\(x(t+h) \approx x(t) + h x'(t)\\), where \\(h\\) is the step size we computed before.

Consider that we had an [ODE]({{< relref "KBhordinary_differential_equations.md" >}}) that is \\(x' = F(x)\\), whech gives us:

\begin{equation}
x\_1 = x\_{0}+ h f(x\_0) \approx x(t\_0 + h)
\end{equation}

Following this scheme, we can calculate from \\(x\_0\\) all the way stepwise to \\(x\_{N}\\).


#### evaluation {#evaluation}

Situation: we have \\(X\_{N}\\), we have \\(x(t\_{N})\\), how close are they? In fact:

\begin{equation}
|x\_{N} - x(t\_{n}) | \leq Ch
\end{equation}

We have some constant \\(C(x\_0, t\_0, T, f)\\), which we can use to estimate \\(C\\) the bounds specific to the problem you are solving.


### Implicit Euler Method {#implicit-euler-method}

A small twist on the [Explicit Euler Method](#explicit-euler-method). To be able to use this method, we can formulate this as:

\begin{equation}
x\_{i+1} - h f(x\_{i+1}) = x\_i
\end{equation}

where we use [Newton's Method]({{< relref "KBhnewton_s_method.md" >}}) to estimate some input \\(i+1\\) for which the above statement gets to \\(x\_{i}\\).


#### evaluation {#evaluation}

We actually didn't do that much error; its is still bounded by:

\begin{equation}
|x\_{N} - x(t\_{n}) | \leq Ch
\end{equation}


#### Derivation {#derivation}

\begin{equation}
\frac{x((t+h)-h) - x(t+h)}{-h} \approx x'(t+h)
\end{equation}

this is first-order Taylor Approximation **written backwards**

This also yields:

\begin{equation}
\frac{x((t+h)-h) - x(t+h)}{-h} = \frac{x(t+h)-x((t+h)-h)}{h}
\end{equation}

Now, let \\(t = t\_0\\), and therefore we have \\(t\_1 = t +h\\), this gives us that:

Now, recall that, because \\(f\\) is the ODE:

\begin{equation}
x'(t\_1) = f(x(t\_1)) = x'(t+h) \approx \frac{x(t\_1) - x(t\_0)}{h}
\end{equation}

Multiplying \\(h\\) to both sides gives:

\begin{equation}
hf(x(t\_1)) = x(t\_1) - x(t\_0)
\end{equation}

which gives:

\begin{equation}
x(t\_0) = x(t\_1) - h f(x(t\_1))
\end{equation}

we will now attempt to estimate \\(x\_1\\) by declaring \\(x\_1 := x(t\_{1})\\), which will give us:

\begin{equation}
x\_1 - h f(x\_1) = x\_0
\end{equation}

Let us call \\(G(x\_{1}) = x\_1 - h f(x\_1) = x\_0\\).

Finally, we run [Newton's Method]({{< relref "KBhnewton_s_method.md" >}}) to solve the \\(x\_1\\) such that we can obtain \\(x\_0\\) by trying to find the zeros of \\(G(x\_1) - x\_0\\). Because \\(h\\) is small, a good initial guess is actually \\(G(x\_0)\\), and then we can optimize.


### Trapezoidal Method {#trapezoidal-method}

"averaging smoothed things out":

\begin{equation}
\frac{x(t+h) - x(t)}{h} \approx \frac{f(x(t+h)) + f(x(t))}{2}
\end{equation}

meaning we have:

\begin{equation}
\frac{x\_1-x\_0}{h} = \frac{f(x\_1) + f(x\_0)}{2}
\end{equation}

which averages our derivatives out.

Cross-multiplying, this gives:

\begin{equation}
x\_1 - \frac{1}{2}h f(x\_1) = x\_0 + \frac{1}{2} h f(x\_0)
\end{equation}

which can also be written as, multiplying by some \\(h\\):

\begin{equation}
x\_1 = x\_0 + h \frac{f(x\_1)+f(x\_0)}{2}
\end{equation}


#### evaluation {#evaluation}

Importantly, this gives bounds

\begin{equation}
|x\_{N} - x(t\_{n}) | \leq Ch^{2}
\end{equation}


### Modified Euler Method {#modified-euler-method}

This is also called "[Midpoint Method](#modified-euler-method)".

This is one of thee methods which doesn't break during "stiff" [ODE]({{< relref "KBhordinary_differential_equations.md" >}})s, and converges \\(h^{N}\\) times quickly.

For some:

\begin{equation}
\dv{x}{t} = f(t,x)
\end{equation}

\begin{equation}
x\_{i+1} = x\_{i} + h f\qty(t\_{i} + \frac{1}{2}h, x\_{i} + \frac{1}{2}h f(t\_{i}, x\_{i}))
\end{equation}

this is motivated by the [Trapezoidal Method](#trapezoidal-method), but

> "A thorough introduction to these methods requires additional background in approximation theory and numerical analysis"
>
> -   The Book


### Improved Euler Method {#improved-euler-method}

This is also called "[Heun's Method](#improved-euler-method)"

\begin{equation}
x\_{i+1} = x\_{i} + \frac{1}{2} h(f(t\_{i}, x\_{i}) + f(t\_{i}+h, x\_{i}+hf(t\_{i}, x\_{i})))
\end{equation}


### Runge-Kutta Method {#runge-kutta-method}

a.k.a. instead of contending with the forward, backward, middle slope, or native slope from \\(f\\), we just ball and average all of them:

\begin{equation}
\begin{cases}
m\_1 = f(t\_{i}, x\_{i}) \\\\
m\_2 = f\qty(t\_{i} + \frac{h}{2}, x\_{i}+\frac{h}{2}m\_{1}) \\\\
m\_3 = f\qty(t\_{i}+\frac{h}{2}, x\_{i}+\frac{h}{2}m\_{2}) \\\\
m\_4 = f\qty(t\_{i} + h, x\_{i}+hm\_{3})
\end{cases}
\end{equation}

and then:

\begin{equation}
x\_{i+1} = x\_{i} + \frac{1}{6}h m\_{1} + \frac{1}{3} h m\_{2} + \frac{1}{3} h m\_{3} + \frac{1}{6} h m\_{4}
\end{equation}
