+++
title = "NUS-MATH570 Finance (Eigen)"
author = ["Houjun Liu"]
draft = false
+++

We have a system of differential equations:

\begin{equation}
\begin{cases}
\dv{I}{t} = -0.73 U(t) + 0.0438 + 0.4 \dv{M}{t} \\\\
\dv{U}{t} = 0.4I-0.012 \\\\
\dv{G}{t} = \dv{M}{t} - I(t)
\end{cases}
\end{equation}

where, \\(M\\) is a sinusoidal function which we can control.

We hope for this system to be as stable as possible.

First, let's try to get a general solution of the system. The linearized(ish) solution takes the shape of:

\begin{equation}
\dv t \mqty(I \\\ U \\\ G) = \mqty(0 & -x\_1 & 0 \\\ x\_4 & 0 & 0 \\\ -1 & 0 & 0 ) \mqty(I \\\ U \\\ G)+ \dv{M}{t}\mqty(x\_3 \\\ 0 \\\ 1) + \mqty(x\_2 \\\ x\_5 \\\ 0)
\end{equation}

With:

\begin{equation}
\begin{cases}
x\_1 = 0.73 \\\\
x\_2 = 0.0438 \\\\
x\_3 = 0.4 \\\\
x\_4 = 0.4 \\\\
x\_5 = 0.012
\end{cases}
\end{equation}

as input parameters. We will follow the method of underdetermined coefficients: taking the homogeneous solution first and then using it to get the general solution.


## Homogeneous System {#homogeneous-system}

To get the characteristic equation of the [homogeneous]({{< relref "KBhhomogeneity.md" >}}) system, we take the [eigenvalue]({{< relref "KBheigenvalue.md" >}}) of the system:

```sage
x1,x2,x3,x4,x5 = var("x1 x2 x3 x4 x5")
matrix = matrix([[0, -x1, 0], [x4, 0,0], [-1, 0,0]])
matrix.eigenvalues()
```

```text
[-sqrt(-x1*x4), sqrt(-x1*x4), 0]
```

Awesome. So we can see that our characteristic equation will be:

\begin{align}
\mqty(I \\\ U \\\ G) &= \vec{c\_0} e^{0t} + \vec{c\_1} e^{\sqrt{-x\_1x\_4}t} + \vec{c\_2} e^{-\sqrt{-x\_1x\_4}t} \\\\
&= \vec{c\_0} + \vec{c\_1}e^{i \sqrt{x\_1x\_4}t} + \vec{c\_2} e^{-i \sqrt{x\_1x\_4}t}
\end{align}

Now, the two \\(e^{ix}\\) functions, one positive and one negative, inspires us to the following results:

\begin{equation}
\begin{cases}
\cos x = \frac{e^{ix}+e^{-ix}}{2}\\\\
\sin x = \frac{e^{ix}-e^{-ix}}{2i}\\\\
\end{cases}
\end{equation}

Treating \\(\frac{1}{2}\\) and \\(\frac{1}{2i}\\) (which we can do, because the constants can be defined on any space desired), we have:

\begin{align}
\cos x + \sin x &= \frac{e^{ix}+e^{-ix}}{2} + \frac{e^{ix}-e^{-ix}}{2i} \\\\
&= A\_1e^{ix}+A\_2e^{-ix}
\end{align}

for some constant scalars \\(A\_1\\) and \\(A\_2\\)

"Wait, doesn't the \\(e^{-ix}\\) and \\(-e^{-ix}\\) subtract each other out on the numerator? No, notice the denominator is different, so we will have \\((A-B)e^{-ix}\\) after we add the two expressions for some constants \\(A\\) and \\(B\\), it doesn't cancel out."

Performing this substitution allows us to reveal the sinusoidal nature of our characteristic equation, and get rid of those pesky \\(i\\).

\begin{align}
\mqty(I \\\ U \\\ G) &= \vec{c\_0} e^{0t} + \vec{c\_1} e^{\sqrt{-x\_1x\_4}t} + \vec{c\_2} e^{-\sqrt{-x\_1x\_4}t} \\\\
&= \vec{c\_0} + \vec{c\_1}e^{i \sqrt{x\_1x\_4}t} + \vec{c\_2} e^{-i \sqrt{x\_1x\_4}t}  \\\\
&= \vec{c\_0} + \vec{c\_1'} \cos (\sqrt{x\_1x\_4} t)+ \vec{c\_2'} \sin (\sqrt{x\_1x\_4} t)
\end{align}

The primes here indicate that \\(\vec{c\_1} \neq \vec{c\_1'}\\) because the initial conditions shift when we move to sinusoidal functions.

Writing this out completely, ditching the vector expressions, we have

\begin{equation}
\begin{cases}
I(t) = I\_0 + I\_1\cos(\sqrt{x\_1x\_4}t) + I\_2\sin (\sqrt{x\_1x\_4}t) \\\\
U(t) = U\_0 + U\_1\cos(\sqrt{x\_1x\_4}t) + U\_2\sin (\sqrt{x\_1x\_4}t) \\\\
G(t) = G\_0 + G\_1\cos(\sqrt{x\_1x\_4}t) + G\_2\sin (\sqrt{x\_1x\_4}t)
\end{cases}
\end{equation}

i