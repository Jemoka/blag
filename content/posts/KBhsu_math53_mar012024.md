+++
title = "SU-MATH53 MAR012024"
author = ["Houjun Liu"]
draft = false
+++

We've gone over [Heat Equation]({{< relref "KBhheat_equation.md" >}}), [Wave Equation]({{< relref "KBhsu_math53_feb212024.md#wave-equation" >}}), and let's talk about some more stuff.


## damped wave equation {#damped-wave-equation}

[Wave Equation]({{< relref "KBhsu_math53_feb212024.md#wave-equation" >}}), now with friction:

\begin{equation}
\pdv[2]{U}{t} (t,x) + k \pdv{U}{t}(t,x) = c^{2} \pdv[2]{U}{x}(t,x)
\end{equation}

We expect this every time when your wave is not going through a perfect vacuum: more attenuation of the wave happens as \\(k\\) increases. When waves travel through shit, it gets damped.

the general solution, given friction is low (\\(0 < k < \frac{2\pi}{l}c\\)), gives a general solution:

\begin{equation}
U(t,x) = e^{\frac{-k}{2}t} \sum\_{n=1}^{\infty} (A\_{n} \cos (\omega\_{n} ct) + B\_{n} \sin (\omega\_{n} ct)) \sin \qty( \frac{n\pi}{l}x)
\end{equation}

where \\(A\_{n}\\) and \\(B\_{n}\\) are given from initial conditions (\\(U(0,x)\\) and \\(\pdv{U}{t}(0,x)\\)), and:

\begin{equation}
\omega\_{n} = \sqrt{ \frac{n^{2}\pi^{2}}{l^{2}} - \qty(\frac{k}{2c})^{2}} = \frac{n\pi}{l} \sqrt{1 - \frac{k^{2} l^{2}}{4\pi^{2}n^{2}c^{2}}} \approx \frac{n\pi}{l} - \qty( \frac{k^{2}l}{8\pi c^{2}}) \frac{1}{n}
\end{equation}

(where \\(\approx\\) means large \\(n\\), whereby \\(\sqrt{1-n} \approx 1- \frac{n}{2}\\).


### solving {#solving}

Let's guess that the solution:

\begin{equation}
u = A(t)B(x)
\end{equation}

this is a reasonable solution where we are looking at a strip \\(0 \to l\\), where the vertical dimension is time. They do not interact except beyond product. The intuition is that, if the domain is **not** a product you are pretty screwed.

So now, let's take derivatives and plug in:

\begin{equation}
\frac{A'' + \mu A'}{A} = c^{2} \frac{B''}{B} = \lambda
\end{equation}

This is now just the old separating fun:

\begin{equation}
\begin{cases}
B'' - \frac{\lambda}{c^{2}} B = 0 \\\\
A'' + \mu A' - \lambda A = 0
\end{cases}
\end{equation}

Let's choose [Dirichlet Conditions]({{< relref "KBhsu_math53_feb232024.md#dirichlet-conditions" >}}). The top equation would then tell us that:

\begin{equation}
-\frac{\lambda}{c^{2}} = \frac{k^{2}\pi^{2}}{l^{2}}}
\end{equation}

this gives that:

\begin{equation}
\lambda = \frac{-c^{2}k^{2}\pi^{2}}{l^{2}}
\end{equation}

meaning:

\begin{equation}
B\_(x) = \sin  \qty( \frac{k\pi x}{l})
\end{equation}

and so, we can plug stuff in now:

\begin{equation}
A'' + \mu A' + \frac{c^{2} k^{2}\pi^{2}}{l^{2}} A = 0
\end{equation}

The characteristic polynomial:

\begin{equation}
\lambda^{2} + \mu \lambda + \frac{c^{2}k^{2}\pi^{2}}{l^{2}} = 0
\end{equation}

by furious quadratic formulating:

\begin{equation}
\lambda  = \frac{-\mu \pm \sqrt{\mu^{2} - 4c^{2}\pi^{2}\frac{k^{2}}{l^{2}}}}{2}
\end{equation}

notice: as we have to allow solutions for each value of \\(k\\), for large enough \\(k\\) we **will** get complex valued solutions. So, let's consider the case where \\(\mu < \frac{2c\pi}{l}\\), which means that this results in always complex valued solutions.

So, each solution:

\begin{equation}
A = e^{-\frac{\mu}{2}t} \qty(a\_{k} \cos \omega\_{k} t + b\_{k} \sin \omega\_{k} t)
\end{equation}

where:

\begin{equation}
{\omega\_{h}}^{2} = \frac{c^{2}\pi^{2}h^{2}}{l^{2}} - \frac{\mu^{2}}{4}
\end{equation}

finally, multply the whole thing by \\(B\\):

\begin{equation}
U = AB
\end{equation}

where:

\begin{equation}
U(0,x) = \sum\_{}^{} a\_{k} \sin  \qty( \frac{k\pi x}{l})
\end{equation}

and:

\begin{equation}
\pdv{U(0,x)}{t}  = \sum\_{}^{} \qty(b \omega\_{k} - \frac{\mu}{2} a\_{k})  \sin  \qty( \frac{k \pi x}{l})
\end{equation}


### analogy {#analogy}

**damped pendulum/spring**: \\(u'' + \mu u' + \omega^{2}u = 0\\)

when \\(\mu\\) is positive, the effect is decaying exponentially in time.


## damped heat equation {#damped-heat-equation}

we can also damp the heat equation:

\begin{equation}
\pdv{u}{t} + ku = \pdv[2]{u}{x}
\end{equation}

we note that substituting \\(u(t,x) = e^{-kt}w(t,x)\\) into the expression, we yield:

\begin{equation}
\pdv{w}{t} = \pdv[2]{w}{t}
\end{equation}

therefore, we simply have to solve the system normally on \\(w\\), then multiply the solution by \\(e^{-kt}\\) to obtain our solution for the damped equation.


## two-dimensional heat equation {#two-dimensional-heat-equation}

what if heat, but plate

\begin{equation}
\pdv{u}{t} =  \pdv[2]{u}{x} + \pdv[2]{u}{y}
\end{equation}

For some heat distribution that has arbitrary shape, on some domain \\(\Omega \times [0, \infty]\_{t}\\) (i.e. argumentation of some space dimensions by time).

-   [Dirichlet Conditions]({{< relref "KBhsu_math53_feb232024.md#dirichlet-conditions" >}}): edges have heat \\(0\\)
-   OR [Neumann Conditions]({{< relref "KBhsu_math53_feb232024.md#neumann-conditions" >}}): normal derivative (flux) is \\(0\\) at the edge

If \\(\Omega\\) is a general blob, you are actually kinda fucked. Because the bounds on \\(x\\) depend on \\(y\\), and \\(y\\) on \\(x\\), so you can't just separate them into a product.

However, if we cut a rectangle, life is better.

---

{{< figure src="/ox-hugo/2024-02-28_22-57-25_screenshot.png" >}}

where:

\begin{equation}
0 \leq x \leq l\_1
\end{equation}

\begin{equation}
0 \leq y \leq l\_2
\end{equation}

where the Dirichlet condition is now described as the four line segments along the curve at \\(l\_1\\) and \\(l\_2\\) having constant (or vanishing) temperature.

Its general solution is:

\begin{equation}
u(t,x,y) = \sum\_{n\_1=1}^{\infty}\sum\_{n\_2=1}^{\infty} A\_{n\_1, n\_2} e^{-\qty(\qty( \frac{{n\_{1}}^{2}}{{l\_{1}}^{2}}) + ( \frac{{n\_{2}}^{2}}{{l\_{2}}^{2}})) \pi^{2}t} \sin \qty(\qty(n\_1 \frac{\pi}{l\_{1}})x )\sin \qty(\qty(n\_2 \frac{\pi}{l\_{2}})y )
\end{equation}

where:

\begin{equation}
\lambda = \lambda\_{1} + \lambda\_{2} = - \qty( \frac{{n\_{1}}^{2}}{{l\_1}^{2}} + \frac{{n\_{2}}^{2}}{{l\_2}^{2}}) \pi^{2}
\end{equation}


### solving {#solving}

\begin{equation}
U(t,x,y) = A(t)B(x)C(y)
\end{equation}

So now with much prayer and plugging:

\begin{equation}
A'(t) B(x) C(y) = A(t) B''(X)C(y) + A(t)B(x)C''(y)
\end{equation}

which gives:

\begin{equation}
\frac{A'(t)}{A(t)} = \frac{B''(x)}{B(x)} + \frac{C''(y)}{C(y)} = \lambda
\end{equation}

Which causes two problems to arise:

\begin{equation}
\begin{cases}
A'(t) = \lambda A(t) = 0 \\\\
\frac{B''(x)}{B(x)} + \frac{C''(y)}{C(y)} = \lambda
\end{cases}
\end{equation}

the second expression gives:

\begin{equation}
\frac{B''(X)}{B(X)} = \lambda - \frac{C''(y)}{C(y)}
\end{equation}

Meaning:

\begin{equation}
\frac{B''(X)}{B(X)} = \lambda - \frac{C''(y)}{C(y)} = \lambda\_{1}
\end{equation}

Meaning:

\begin{equation}
B''(x) - \lambda\_{1} B(x) = 0
\end{equation}

and:

\begin{equation}
C''(y) - \lambda\_{2} C = 0
\end{equation}

where \\(\lambda - \lambda\_{1} = \lambda\_{2}\\).

Now, recall our boundary conditions:

\begin{equation}
B(0) = B(l\_1) = 0
\end{equation}

and

\begin{equation}
C(0) = C(\lambda\_{2}) = 0
\end{equation}

So, for the expression in \\(B\\), we obtain:

\begin{equation}
\lambda\_{1} = \frac{-k\_{1}^{2}\pi^{2}}{l\_{1}^{2}}}
\end{equation}

\begin{equation}
\lambda\_{2} = \frac{-k\_{2}^{2}\pi^{2}}{l\_{2}^{2}}}
\end{equation}

so:

\begin{equation}
\lambda = \lambda\_{1} + \lambda\_{2}
\end{equation}

All together, we obtain:

\begin{equation}
B(x) = \sin  \qty( \frac{k\_{1} \pi x}{l\_{1}})
\end{equation}

and:

\begin{equation}
C(y) = \sin  \qty( \frac{k\_{2} \pi y}{l\_{2}})
\end{equation}

finally, where:

\begin{equation}
A' + \qty( \frac{k\_{1}^{2}  \pi^{2}}{ l\_1^{2}} + \frac{k\_{2}^{2}  \pi^{2}}{ l\_2^{2}})A = 0
\end{equation}

which gives us:

\begin{equation}
A(t) = e^{-\qty( \frac{k\_{1}^{2}  \pi^{2}}{ l\_1^{2}} + \frac{k\_{2}^{2}  \pi^{2}}{ l\_2^{2}})t}
\end{equation}

so then multiply them together:

\begin{equation}
\sum\_{k\_1}^{} \sum\_{k\_2}^{}E\_{k\_1, k\_2}  e^{-\qty( \frac{k\_{1}^{2}  \pi^{2}}{ l\_1^{2}} + \frac{k\_{2}^{2}  \pi^{2}}{ l\_2^{2}})t}  \sin  \qty( \frac{k\_{2} \pi y}{l\_{2}}) \sin  \qty( \frac{k\_{1} \pi x}{l\_{1}})
\end{equation}

at \\(u(0,x,y)\\), we obtain:

\begin{equation}
u(0,x,y) = \sum\_{k\_1}^{} \sum\_{k\_2}^{}E\_{k\_1, k\_2}   \sin  \qty( \frac{k\_{2} \pi y}{l\_{2}}) \sin  \qty( \frac{k\_{1} \pi x}{l\_{1}})
\end{equation}

for every \\(f(x,y)\\), we can solve for \\(E\_{k\_1, k\_2}\\) by fixing \\(y\\), for instance, then writing a Fourier series as a function that depends on the coefficients you left out. This gives:

\begin{equation}
f(x,y) = \sum a\_{k\_1}(y) \sin  \qty( \frac{k\_1 \pi x}{l\_1})
\end{equation}

and then, each of **THESE** internal functions a function \\(a\_{k\_1}(y)\\) , which you can obtain over \\(y\\) and expand as a fourier series.

To solve for each, you do the susual:

\begin{equation}
a\_{k\_1}(y) = \frac{2}{l\_1} \int\_{0}^{l\_1} f(x,y) \sin \qty( \frac{k\_1 \pi x}{l\_1}) \dd{x}
\end{equation}

which you can expand:

\begin{equation}
E\_{k\_1, k\_2} = \frac{2}{l\_2} \int\_{0}^{l\_2} a\_{k\_1}(y) \sin  \qty( \frac{k\_1 \pi y}{l\_2}) \dd{y}
\end{equation}

which means that, substituting it in, the whole thing can be written together as:

\begin{equation}
E\_{k\_1, k\_2} = \frac{2}{l\_2} \int\_{0}^{l\_2} \frac{2}{l\_1} \int\_{0}^{l\_1} f(x,y) \sin \qty( \frac{k\_1 \pi x}{l\_1}) \dd{x} \sin  \qty( \frac{k\_1 \pi y}{l\_2}) \dd{y}
\end{equation}
