+++
title = "SU-MATH53 FEB282024"
author = ["Houjun Liu"]
draft = false
+++

more on [Fourier Series]({{< relref "KBhfourier_series.md" >}}).

---


## decomposition of functions to even and odd {#decomposition-of-functions-to-even-and-odd}

Suppose we have any function with period \\(L\\) over \\([-\frac{L}{2}, \frac{L}{2}]\\), we can write this as a sum of even and odd functions:

\begin{equation}
f(x) = \frac{1}{2} (f(x) - f(-x)) + \frac{1}{2} (f(x) + f(-x))
\end{equation}

And because of this fact, we can actually take each part and break it down individually as a [Fourier Series]({{< relref "KBhfourier_series.md" >}}) because [sin and cos are even and odd parts]({{< relref "KBhfourier_series.md#sin-and-cos-are-even-and-odd-parts" >}}).

So we can take the first part, which is odd, and break it down using \\(a\_{n} \sin (k\omega x)\\).

We can take the second part, which is odd, and break it down using \\(b\_{n} \cos (k\omega x)\\).

If you then assume periodicity over the interval you care about \\(L\\), suddenly you can decompose it to a [Fourier Series]({{< relref "KBhfourier_series.md" >}}).


## solving wave equation {#solving-wave-equation}

At a glance, for [Dirichlet Conditions]({{< relref "KBhsu_math53_feb232024.md#dirichlet-conditions" >}}):

\begin{equation}
u(t,x) = \sum\_{k}  \qty(c\_1 \sin  \qty(\frac{ck\pi}{l} t) + c\_2 \cos  \qty(\frac{ck\pi}{l} t)) \sin  \qty( \frac{k \pi}{l}x)
\end{equation}

this takes two initial condition:

\begin{equation}
u(0,x) = \sum b\_{k} \sin  \qty( \frac{k\pi x}{l}) = f(x)
\end{equation}

\begin{equation}
\pdv{u}{t}(0,x) = \sum a\_{k} \frac{ck \pi}{l} \sin  \qty( \frac{k\pi x}{l}) = g(x)
\end{equation}

which now finishes our initial conditions.

Importantly, as we have a **SECOND ORDER** expression now, we need **two** initial conditions with initial amplitude and velocity.

---

Recall:

\begin{equation}
\pdv[2]{u}{t} = c^{2} \pdv[2]{u}{x}
\end{equation}

where \\(c^{2}\\) is called the "wave speed". Let's start with the [Dirichlet Conditions]({{< relref "KBhsu_math53_feb232024.md#dirichlet-conditions" >}}).

Unlike the [Heat Equation]({{< relref "KBhheat_equation.md" >}}), [Wave Equation]({{< relref "KBhsu_math53_feb212024.md#wave-equation" >}}) are time reversible (i.e. time going forward and backwards should have no difference). Any solutions that go forward in time also satisfy for going backwards in time.

Let's try to solve it. Guess:

\begin{equation}
u = A(t) B(x)
\end{equation}

meaning, we have:

\begin{equation}
A''(t) B(x) = c^{2} A(t)B''(x)
\end{equation}

This finally gives:

\begin{equation}
\frac{A''(t)}{A(t)} = c^{2} \frac{B''(x)}{B(X)} = \lambda
\end{equation}

which gives:

\begin{equation}
B''(x) - \frac{\lambda}{c^{2}} B(x) = 0
\end{equation}

we can only solve this, given our boundary conditions:

\begin{equation}
\lambda = \frac{-c^{2} k^{2} \pi^{2}}{l^{2}}
\end{equation}

which gives:

\begin{equation}
B(x) = \sin  \qty( \frac{k \pi}{l}x)
\end{equation}

and \\(A\\) will result in a second order equation (unlike before):

\begin{equation}
A''(t) + \frac{c^{2} h^{2} \pi^{2}}{l^{2}} A(t) = 0
\end{equation}

This gives generally a solution:

\begin{equation}
A(t) = c\_1 \sin  \qty(\frac{ck\pi}{l} t) + c\_2 \cos  \qty(\frac{ck\pi}{l} t)
\end{equation}

Therefore, multiplying everything out:

\begin{equation}
u(t,x) = \sum\_{k}  \qty(c\_1 \sin  \qty(\frac{ck\pi}{l} t) + c\_2 \cos  \qty(\frac{ck\pi}{l} t)) \sin  \qty( \frac{k \pi}{l}x)
\end{equation}

meaning: the overall oscillation is controlled by the wave speed, which changes in **time** but not **space**.

Finally, note that:

\begin{equation}
u(0,x) = \sum b\_{k} \sin  \qty( \frac{k\pi x}{l}) = f(x)
\end{equation}

Consider the \\(t\\) derivative as well:

\begin{equation}
\pdv{u}{t} = \sum \qty(a\_{n} \frac{ck\pi}{l} \cos \qty( \frac{ck \pi}{l} t) - b\_{k}\frac{k\pi}{l} \sin \qty( \frac{k\pi}{l}t)) \sin  \qty( \frac{k\pi}{l} x)
\end{equation}

now, this gives us another initial condition:

\begin{equation}
\pdv{u}{t}(0,x) = \sum a\_{k} \frac{ck \pi}{l} \sin  \qty( \frac{k\pi x}{l}) = g(x)
\end{equation}

which now finishes our initial conditions.
