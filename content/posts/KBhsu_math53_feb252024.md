+++
title = "SU-MATH53 FEB252024"
author = ["Houjun Liu"]
draft = false
+++

## Fourier Decomposition {#fourier-decomposition}

Main idea, any induction \\(f(x)\\) on an interval \\([0, L]\\) can be written as a sum:

\begin{equation}
f(x) = a\_0 + \sum\_{k=1}^{\infty} a\_{k} \cos \qty( \frac{2\pi k}{L} x) + \sum\_{k=1}^{\infty} b\_{k} \sin \qty( \frac{2\pi k}{L} x)
\end{equation}


## L-periodicity {#l-periodicity}

A function is $L$-periodic if \\(f(x+L) = f(x)\\). In that case, it has period \\(L\\).

$L$-periodicity is preserved across...


### translation {#translation}

we are just moving it to the right/left


### dilation {#dilation}

Suppose \\(f(x)\\) is \\(L\\) periodic and let \\(g(x) = f(kx)\\), then, \\(g\\) is also \\(L\\) periodic.

Proof:

\\(g(x+L) = f(k(x+L)) = f(kx + kL) = f(kx) = g(x)\\). So \\(g\\) would also be \\(L\\) periodic. However, importantly, \\(g\\) would also be \\(\frac{L}{k}\\) periodic (verified by using the same sketch as before)


### linear combinations {#linear-combinations}

Suppose \\(f,g\\) are \\(L\\) periodic and \\(h(x) = af(x) + bg(x)\\), then \\(h\\) is also \\(L\\) periodic.

Proof:

\begin{equation}
h(x+L) = af(x+L) + bg(x+L) = af(x) + bg(x) = h(x)
\end{equation}


## Fourier Series {#fourier-series}

[Fourier Series](#fourier-series) and how to find them.


### Statement {#statement}

Suppose we have a function that satisfies:

\begin{equation}
f(x) = a\_0 + \sum\_{k=1}^{\infty} \qty( a\_{k} \cos(k \omega x) + b\_{k} \sin(k \omega x))
\end{equation}

where  \\(\omega = \frac{2\pi}{L}\\).

recall that each \\(\cos(\dots)\\)  and \\(\sin (...)\\) are [orthogonal]({{< relref "KBhorthogonal.md" >}}), we can then use the [Fourier formula]({{< relref "KBhlearn_more.md" >}}) to figure the coefficients \\(a\_{k}\\), \\(b\_{k}\\).

---

Aside: why is \\(a\_0\\) also orthogonal?

\begin{equation}
a\_0 = a\_0 \cos (0 \omega x) = a\_0 \cdot 1  = a\_0
\end{equation}

---

Therefore, by the [Fourier formula]({{< relref "KBhlearn_more.md" >}}), we expect that:

\begin{equation}
a\_0 = \frac{\langle f, 1 \rangle}{ \langle 1,1 \rangle} = \frac{1}{L} \int\_{0}^{L} f(x) \dd{x}
\end{equation}

\begin{equation}
a\_{k} = \frac{\langle f, \cos (k\omega x) \rangle}{\langle \cos (k\omega x), \cos (k\omega x) \rangle} = \frac{1}{L / 2} \int\_{0}^{L} f(x) \cos (k\omega x) \dd{x}
\end{equation}

\begin{equation}
b\_{k} = \frac{\langle f, \sin (k\omega x) \rangle}{\langle \sin (k\omega x), \sin (k\omega x) \rangle} = \frac{1}{L / 2} \int\_{0}^{L} f(x) \sin (k\omega x) \dd{x}
\end{equation}

When computing this, recall that:

\begin{equation}
\omega = \frac{2\pi}{L}
\end{equation}

where \\(L\\) the period of your \\(L\\) periodic function.


### Fourier Series Converges with \\(L\\) Periodic Function {#fourier-series-converges-with-l-periodic-function}

Suppose \\(f(x)\\) is an \\(L\\) periodic function with at most jump discountinuty, and \\(f'\\) continuous everywhere. Then, the associated [Fourier Series](#fourier-series) converges everywhere and coincides with \\(f\\) except for jump discontinuances, where the values are the average of limits from either side


### Background {#background}


#### [Fourier formula]({{< relref "KBhlearn_more.md" >}}) {#fourier-formula--kbhlearn-more-dot-md}

Consider some [orthogonal]({{< relref "KBhorthogonal.md" >}}) basis \\(v\_1, ... v\_{n}\\), recall that if we have:

\begin{equation}
v = c\_1 v\_1 + \dots + c\_{n} v\_{n}
\end{equation}

we can write:

\begin{equation}
c\_{j} = \frac{v \cdot v\_{j}}{ v\_{j} \cdot v\_{j}}
\end{equation}

(this is similar to [Writing a vector as a linear combination of orthonormal basis]({{< relref "KBhorthonormal_basis.md#writing-a-vector-as-a-linear-combination-of-orthonormal-basis" >}}), but recall the \\(v\_{j}\\) are **orthogonal** and not **orthonormal**, so we have to divide by the square of the norm of \\(v\\). [learn more]({{< relref "KBhlearn_more.md" >}}))


#### [inner product of \\(L\\) periodic functions]({{< relref "KBhinner_product.md#inner-product-of-l-periodic-functions" >}}) {#inner-product-of-l-periodic-functions--kbhinner-product-dot-md}

For \\(f,g : [0,L] \to \mathbb{R}\\), which are [L-periodic](#l-periodicity), we write:

\begin{equation}
\langle f,g \rangle := \frac{1}{L} \int\_{0}^{L} f(x) g(x) \dd{x}
\end{equation}

<!--list-separator-->

-  properties worth noting

    for continuous functions \\([0,L]\\) \\(g\_1, g\_2, h\_1, h\_2, g, h\\), the [inner product]({{< relref "KBhinner_product.md" >}}) rules hold, which gives

    -   \\(\langle c\_1 g\_1 + c\_2 g\_2, h \rangle = c\_1 \langle g\_1, h \rangle + c\_2 \langle g\_2, h \rangle\\)
    -   \\(\langle g, c\_1h\_1 + c\_2h\_2 \rangle = c\_1 \langle g, h\_1 \rangle + c\_2 \langle g, h\_2 \rangle\\)
    -   \\(\langle h,g \rangle = \langle g,h \rangle\\), as the functions are over the reals
    -   \\(\langle g,g \rangle\\) is zero only when \\(g\\) is zero

<!--list-separator-->

-  \\(L\\) periodic sinusoids are orthogonal

    Recall that we have two basic [L-periodic](#l-periodicity) sinusoids:

    -   \\(\sin \qty(\frac{2\pi k }{L}x)\\)
    -   \\(\cos \qty(\frac{2\pi k }{L}x)\\)

    Let's write:

    \begin{equation}
    \omega = \frac{2\pi}{L}
    \end{equation}

    then, for any distinct integer \\(k\_1 \neq k\_2, k\_1, k\_2 > 0\\), we see that:

    \begin{equation}
    \int\_{0}^{L} \cos (k\_1 \omega x) \cos (k\_2 \omega x) = \int\_{0}^{L} \sin (k\_1 \omega x) \sin (k\_2 \omega x) = \int\_{0}^{L} \cos (k\_1 \omega x) \sin (k\_2 \omega x) = 0
    \end{equation}

    Meaning, every pair of \\(\langle \\{\sin, \cos\\} (k\_1 \omega x), \\{\sin, \cos\\} (k\_1 \omega x) \rangle\\) are orthogonal.

    Further, for the same \\(k\\),

    \begin{equation}
    \langle \cos (k\omega x), \cos (k \omega x) \rangle = \langle \sin (k\omega x), \sin (k \omega x) \rangle = \frac{1}{2}
    \end{equation}
