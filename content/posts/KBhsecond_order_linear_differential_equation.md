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

Tangent:

At this point, we want to recall the result we derived from [applying eigenspace]({{< relref "KBhapplying_eigenspace.md" >}}); that:

\begin{equation}
\dv t e^{tA} = e^{tA}A
\end{equation}

Ok. So, for the right side, recall that we can diagonalize \\(A\\) and \\(e^{tA}\\) using the same set of change-of-basis vectors.

Therefore, the middle change-of-basis matrices cancel out, and the middle matricies are diagonal and hence commutative (multiplying the middle, inherits commutativity in \\(\mathbb{F}\\)).

Hence:

\begin{equation}
e^{tA}A = Ae^{tA}
\end{equation}

So, we have that:

\begin{equation}
\dv t e^{tA} = Ae^{tA}
\end{equation}

Lastly, we can apply some initial conditions \\(\vec{C}\\) (why?), such that:

\begin{equation}
\qty(\dv t e^{tA}) \vec{C} = Ae^{tA} \vec{C}
\end{equation}

---

Ok, so. We will use the above result to characterize what \\(v\\) is. We can apply the above exhibit of the behavior of \\(\dv{t}\\), we will set:

\begin{equation}
\dv t v = \qty(\dv t e^{tA}) \vec{C}
\end{equation}

WHY can we do this?

Then, we have that:

\begin{equation}
\dv{t}v = Av = Ae^{tA} \vec{C}
\end{equation}

and so

\begin{align}
&Av = Ae^{tA} \vec{C} \\\\
\Rightarrow\ & v = e^{tA} \vec{C}
\end{align}

Great. Finally, we solve for