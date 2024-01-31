+++
title = "SU-MATH53 JAN312024"
author = ["Houjun Liu"]
draft = false
+++

## non-homogeneous linear differential equation {#non-homogeneous-linear-differential-equation}

\begin{equation}
y' + ay = f(t)
\end{equation}

The general solution for this would be

1.  any solution specifically which gives \\(f(t)\\), plus
2.  any homogeneous solutions

specifically:

\begin{equation}
y = y\_{p}(t) + y\_{n}(t)
\end{equation}

where the left is a particular solution, and the right is any homogeneous solution.

The general solution to this is:

\begin{equation}
y(t) = e^{-at} \int\_{0}^{t}e^{ax} f(x) \dd{x} + Ce^{-at}
\end{equation}

this works equally well when \\(a\\) is not constant:

\begin{equation}
y(t) = e^{-\qty(\int a(s) \dd{s})t} \int\_{0}^{t}e^{\qty(\int a(s) \dd{s})x} f(x) \dd{x} + Ce^{-at}
\end{equation}


### integrating factor {#integrating-factor}

Consider the case where:

\begin{equation}
y' + ay = f(t)
\end{equation}

ideally, we would love our whole left side to be one giant derivative which we can antiderive; let's try multiply both sides with \\(e^{at}\\):

\begin{equation}
(e^{at}y)' = e^{at}y' + ae^{at}y  = e^{at}(y' + ay) = e^{at} f(t)
\end{equation}

We note that this gives:

\begin{equation}
(e^{at}y)' = e^{at}f(t)
\end{equation}

meaning:

\begin{equation}
e^{at}y(t) = \int\_{0}^{t} e^{ax} f(x) \dd{x}
\end{equation}

which gives:

\begin{equation}
y(t) = e^{-at} \int\_{0}^{t}e^{ax} f(x) \dd{x}
\end{equation}

Tacking on the homogeneous solution :

\begin{equation}
y(t) = e^{-at} \int\_{0}^{t}e^{ax} f(x) \dd{x} + Ce^{-at}
\end{equation}

note! the first term doesn't have a scaler in front of it. Otherwise, the derivative will give you \\(nf(x)\\) instead of \\(f(x)\\).

This actually doesn't matter what \\(a\\) is. In a sense, if we swap \\(a\\) for \\(a(t)\\), we simply have to write \\(a = \int a(x) \dd{x}\\).So, most generally:

\begin{equation}
y' + a(t)y = f(t)
\end{equation}

yields

\begin{equation}
y(t) = e^{-\qty(\int a(s) \dd{s})t} \int\_{0}^{t}e^{\qty(\int a(s) \dd{s})x} f(x) \dd{x} + Ce^{-at}
\end{equation}


### why do we tack on the homogeneous solution again? {#why-do-we-tack-on-the-homogeneous-solution-again}

What if we have a plane specified:

\begin{equation}
a x\_1 + b x\_2 + c x\_3 = K
\end{equation}

we want to solve \\(x\_{j}\\) as a vector which lives on this plane.

Let's begin by shifting this plane down to the origin:

\begin{equation}
a x\_1 + b x\_2 + c x\_3 + 0
\end{equation}

Which says the same thing as:

\begin{equation}
\mqty(a & b & c) \mqty(x\_1 \\\ x\_2 \\\ x\_3) = 0
\end{equation}

meaning:

\begin{equation}
A x = 0
\end{equation}

where \\(A \in \mathcal{L}(m,n)\\), where \\(m < n\\). To solve for \\(x\\), we desire \\(\text{null}\ A\\), and given we are a map into a bigger space, we should have non-trivial null space.

1.  find a particular solution \\(x\_{p}\\) to the non-shifted version
2.  the general solution should live in \\(x\_{p} + \text{null}\ A\\), the [affine subset]({{< relref "KBhparallel_linear_algebra.md" >}})
3.  meaning all solutions should live on \\(x = x\_{p} + c\_1 v\_1 + c\_2 v\_2\\)


### [method of undetermined coefficients]({{< relref "KBhsecond_order_linear_differential_equation.md#method-of-undetermined-coefficients" >}}) {#method-of-undetermined-coefficients--kbhsecond-order-linear-differential-equation-dot-md}

say:

\begin{equation}
y' + ky = 70k + 10k \sin (t)
\end{equation}

let's break it up into three pieces:

\begin{equation}
\begin{cases}
y\_1' + ky\_{1} = 70 k\\\\
y\_2' + k y\_2 = 10k \sin (t) \\\\
y\_3' + k y\_{3} = 0
\end{cases}
\end{equation}

you will note that adding up all three of these yields a value for \\(y\\) that satisfy the overall expression.

-   first one: we can just guess \\(y = 70\\), which evidently works
-   second one: we want the sin and cos to cancel out, so we can guess \\(A \sin t + B \cos t\\), whose derivative is \\(-B \sin t + A \cos t\\), plugging that in, we get: \\((-B+kA) \sin t + (A+kB) \cos t\\), which we can use our coefficients to solve
-   third one: that's the homogeneous solution \\(Ce^{-kt}\\)

and we can finally add it all up.
