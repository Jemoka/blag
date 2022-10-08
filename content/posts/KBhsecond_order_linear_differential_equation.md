+++
title = "Second-Order Linear Differential Equations"
author = ["Houjun Liu"]
draft = false
+++

Here's a general form:

\begin{equation}
a\dv[2]{x}{t} + b \dv{x}{t} + cx = f(t)
\end{equation}


## solving, with a zero on the right side. {#solving-with-a-zero-on-the-right-side-dot}

This problem because easier if the right side is \\(0\\).

\begin{equation}
a\dv[2]{x}{t} + b \dv{x}{t} + cx = 0
\end{equation}

The general goal to solve in this case is to make this a system of [First-Order Differential Equations]({{< relref "KBhlinear_non_seperable_equation.md#solving-differential-equations" >}}).

To do this, we begin by making:

\begin{equation}
y = \dv{x}{t}
\end{equation}

Therefore, we can change the first equation:

\begin{equation}
a \dv{y}{t} + by + cx = 0
\end{equation}

Solving both of these conditions, we form a system of linear equations:

\begin{align}
&\dv{x}{t}=y \\\\
&\dv{y}{t} = \frac{-c}{a}x-\frac{b}{a}y
\end{align}

We are now first-order, so we can put this into a matrix equation:

\begin{equation}
\dv t \begin{pmatrix}
x \\\ y
\end{pmatrix}  = \begin{pmatrix}
0 & 1 \\\ -\frac{c}{a} & \frac{-b}{a}
\end{pmatrix}  \begin{pmatrix}
x \\\ y
\end{pmatrix}
\end{equation}

Now! We have an equation:

\begin{equation}
\dv{t}v = Av
\end{equation}

The result above shows that the transformations \\(\dv{t}\\) and \\(A\\) are isomorphic. Therefore, we now attempt to characterize \\(A\\) to solve this expression.

---

Ok, but to take this derivative, let's work with some diagonal matrix \\(a\\) first. Its nicer because diagonal matricies commutes, so its easier to work with.

So, the diagonal analogue of the expression above is:

\begin{equation}
\dv{x}{t} = ax
\end{equation}

Note that \\(x\\) is a function in \\(t\\), so actually take this equation we have to move the \\(dx\\) to the same side as the \\(x\\). So:

\begin{align}
& \dv{x}{t} = ax  \\\\
\Rightarrow\ & \frac{1}{x}\dd{x} = a\dd{t} \\\\
\Rightarrow\ & \int \frac{1}{x}\dd{x} = \int a\dd{t}  \\\\
\Rightarrow\ & \ln (x) = at + C \\\\
\Rightarrow\ & x = e^{at+C}  \\\\
\Rightarrow\ & x = e^{at}e^{C} \\\\
\Rightarrow\ & x = e^{at}x\_0
\end{align}

So now, we have:

\begin{equation}
x = e^{at}x\_0
\end{equation}

---

Given the above result, we will now revert to \\(a \implies A\\), and recover what the true \\(\dv{x}{t}\\) should be:

\begin{align}
&v = e^{At}x\_0 \\\\
\Rightarrow\ & \dv{x}{t} = \dv{t} e^{At}x\_0
\end{align}


## method of undetermined coefficients {#method-of-undetermined-coefficients}

\begin{equation}
\dv{x}{t} = -2x+1
\end{equation}

The solution would be something like:

\begin{equation}
x = Ce^{-2t} + t
\end{equation}