+++
title = "SU-MATH53 MAR042024"
author = ["Houjun Liu"]
draft = false
+++

What if, [Fourier Series]({{< relref "KBhfourier_series.md" >}}), but exponential?

This also motivates Discrete Fourier Transform.

Also [Complex Exponential]({{< relref "KBhcomplex_exponential.md" >}}).

---


## Review {#review}

Recall again that if we have a periodic function, we've got:

\begin{equation}
f(x) = \sum\_{k=0}^{\infty} a\_{k} \sin \qty( \frac{2\pi k}{l} x) + b\_{n} \cos  \qty( \frac{2\pi k x}{L})
\end{equation}

We note that this breaks individually into the sign and cosine series depending of the function's oddness.


## Complex Fourier Series {#complex-fourier-series}

This will begin by feeling like a notation rewrite:

\begin{equation}
f(x) = \sum\_{-\infty}^{\infty} c\_{n} e^{n \omega x i}
\end{equation}

where \\(\omega = \frac{2\pi}{L}\\).

---

Why is this summing from negative to positive?

Consider:

\begin{equation}
\cos \qty(nx) = \frac{e^{inx}+e^{-inx}}{2}
\end{equation}

You will note that summing \\(n \in 0 ... \infty\\), plugging it into above, will result in summing from both \\(n \in -\infty ... \infty\\).

---


### Finding \\(c\_{n}\\) {#finding-c-n}

Recall that [complex exponentials are orthonormal]({{< relref "KBhcomplex_exponential.md#complex-exponentials-are-orthonormal" >}}) + [inner product over complex-valued functions]({{< relref "KBhcomplex_exponential.md#over-complex-valued-functions" >}})

Because most cancels except one thing, we get:

\begin{equation}
\langle f, e^{i\omega n x} \rangle = c\_{n} L
\end{equation}

meaning:

\begin{equation}
c\_{n} = \frac{1}{L} \int\_{0}^{L} f(x) e^{-i\omega n x} \dd{x}
\end{equation}


### Complex Exponentials with Sawtooth {#complex-exponentials-with-sawtooth}

Consider:

\begin{equation}
f(x) = x-n
\end{equation}

where this function is periodic over \\(n \leq x \leq n+1\\), so---

\begin{equation}
c\_{n} = \int\_{0}^{1} x e^{-2\pi i n x} \dd{x} = -\frac{1}{2\pi i n} e^{-2 \pi i n}
\end{equation}

&sum;<sub>-&infin;</sub><sup>&infin;</sup>


## Fourier Transform as Quantization {#fourier-transform-as-quantization}

Consider:

the big fun idea----we can transform:

-   \\(L\\) periodic function on \\(f(x)\\)
-   \\(\left\\{ (c\_{n})^{\infty}\_{-\infty} \right\\}\\)

This series exists for all function, converges exceedingly quickly, and has great properties. It should look like the form:

\begin{equation}
f(x) = \sum\_{-\infty}^{\infty} c\_{n} e^{n \omega x i}
\end{equation}


### Fourier norm of a function {#fourier-norm-of-a-function}

After you do this, and obtain

\\(\left\\{ (c\_{n})^{\infty}\_{-\infty} \right\\}\\)

we call the "size" of this function:

\begin{equation}
\sum\_{-\infty}^{\infty} | c\_{n}|^{2}
\end{equation}


### Planchrel's Formula {#planchrel-s-formula}

For a usual \\(L\\) periodic function, size agrees:

\begin{equation}
\langle f,f \rangle= \int\_{0}^{L} |f(x)|^{2} \dd{x} = L\sum\_{-\infty}^{\infty} | c\_{n}|^{2}
\end{equation}

You can show this by plugging in the [Complex Fourier Series](#complex-fourier-series) in \\(f\\).
