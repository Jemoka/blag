+++
title = "Second-Order Linear Differential Equations"
author = ["Houjun Liu"]
draft = false
+++

Here's a general form:

\begin{equation}
a\dv[2]{x}{t} + b \dv{x}{t} + cx = 0
\end{equation}


## solving {#solving}

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
\dv{v}{t} = Av
\end{equation}

To finally find the actual solution \\(v\\), we have will apply the relation we saw in [applying eigenspace]({{< relref "KBhapplying_eigenspace.md" >}}).

\begin{equation}
\dv t e^{tA} = e^{tA}A
\end{equation}

---

\begin{equation}
v(t) = e^{tA} C
\end{equation}

---

\begin{equation}
x(t) = {C\_1}e^{t\lambda+} + C\_2e^{t\lambda -}
\end{equation}