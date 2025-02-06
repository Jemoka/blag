+++
title = "SU-CS205L FEB042025"
author = ["Houjun Liu"]
draft = false
+++

**"regularization": removing columns (i.e. explicitly making things roughly degenerate to fit more generally)**

"tall full-rank matrix" (i.e. let \\(A\\) be \\(m \times n\\), such that \\(m \geq n\\)).

Solving such full-rank linear systems---

\begin{equation}
Ac = b \implies U \Sigma V^{T} c = b \implies  \Sigma \qty(V^{T}c) = U^{T} b
\end{equation}

We can now solve this above by simply dividing by the nonzero singular values of each row (since we are full rank, this is true). The last equations are zero.

---

"classic" method for solving least squares---

\begin{equation}
A^{T}A c = A^{T} b
\end{equation}

this only works if we know \\(Ac = b\\) (that the problem is solvable.)

---

residuals based method for solving the problem---

\\(b \in \text{range}\ A\\), then \\(Ac = b\\). However, generally, only \\(r = b- Ac\\) is always true. So then the goal is to minimize residual:

\begin{equation}
\min\_{c}  \qty(b - Ac)
\end{equation}

Notice this is a vector! So to actually minimize it, we need to pick a norm. By convention we use 2 norms:

\begin{equation}
\min\_{c}  \Vert \qty(b - Ac) \Vert\_{2}
\end{equation}

---

**weighted least squares**: some equations maybe more important than others---scaling the entries in the residuals (prior taking the norm); so we are actually trying to minimize \\(\Vert Dr \Vert\_{2}\\), in particular meaning we have:

\begin{equation}
Dr = Db - DAc
\end{equation}

Suppose you are trying to minimize \\(\Vert r \Vert^{2}\_{2}\\) to get rid of the square root (and so we can just foil and get a matrix equation):

\begin{equation}
c^{T} A^{T} A c - 2b^{T} Ac
\end{equation}

for weighting:

\begin{equation}
c^{T}A^{T} D^{2}Ac - 2b^{T} D^{2} Ac
\end{equation}

Critical point: \\(\nabla f = 0\\) ; any \\(c\\) that simultaneously solves all equations is a critical point.

The [Hessian]({{< relref "KBhsu_math53_feb212024.md#hessian" >}}) is the Jacobian of the gradient; note that **order matters**.
