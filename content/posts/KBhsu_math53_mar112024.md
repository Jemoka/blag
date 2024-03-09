+++
title = "SU-MATH53 MAR112024"
author = ["Houjun Liu"]
draft = false
+++

## convolution {#convolution}

For \\(f,g : \mathbb{R} \to \mathbb{C}\\), we have:

\begin{equation}
(f \* g)(x) = \int\_{\mathbb{R}} f(x-y) g(y) \dd{y}
\end{equation}


### properties of convolution {#properties-of-convolution}

-   \\((g \* f) (x) = (f \* g) (x)\\)
-   \\(\mathcal{F}(f \* g) = \mathcal{F}(f)\mathcal{F}(g)\\)


### motivation {#motivation}

What if we want the [Fourier Transform]({{< relref "KBhfourier_transform.md" >}}) of \\(\hat{f}(\lambda)\hat{g}(\lambda)\\) in terms of one expression?

Consider:

\begin{equation}
\hat{f}(\lambda) \hat{g}(\lambda) = \qty(\int\_{\mathbb{R}} f(x) e^{-i\lambda x} \dd{x}) \qty(\int\_{\mathbb{R}} g(y) e^{-i\lambda y} \dd{y})
\end{equation}

Notice that because neither integral have dependence on the other, we can actually:

\begin{equation}
\hat{f}(\lambda) \hat{g}(\lambda) = \int\_{\mathbb{R}} \int\_{\mathbb{R}} f(x) g(y) e^{-i\lambda (x+y)} \dd{x}\dd{y}
\end{equation}

writing this as a change of variable:

\begin{equation}
\begin{cases}
u = x+y \\\\
\dd{x} = \dd{u}
\end{cases}
\end{equation}

we can write:

\begin{equation}
\hat{f}(\lambda) \hat{g}(\lambda) = \int\_{\mathbb{R}} \qty(\int\_{\mathbb{R}} f(u-y) g(y) e^{-i\lambda (u)} \dd{u})\dd{y}
\end{equation}

Considering they the integrands are isolated and decaying, we can swap them, pulling out also \\(e^{-i\lambda(u)}\\) because it has no \\(y\\) dependence:

\begin{equation}
\hat{f}(\lambda) \hat{g}(\lambda) = \int\_{\mathbb{R}} \qty(\int\_{\mathbb{R}} f(u-y) g(y) \dd{y})e^{-i\lambda (u)} \dd{u}
\end{equation}

Notice! The inner part is a function, and the outer part is a Fourier transform! This is similar to a [convolution (probability)]({{< relref "KBhrandom_variables.md#adding-random-variables" >}})!
