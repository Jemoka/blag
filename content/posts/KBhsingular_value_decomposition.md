+++
title = "singular value decomposition"
author = ["Houjun Liu"]
draft = false
+++

We have a matrix \\(M\\), it may suck: it may not be [normal]({{< relref "KBhaxler_7_a.md#normal" >}}), it may not even be an [operator]({{< relref "KBhoperator.md" >}}).

So consider now:

\begin{equation}
M^{\*} M
\end{equation}

you will note that this is now an _operator!_ Not only that, \\(M^{\*}M\\) is [self-adjoint]({{< relref "KBhaxler_7_a.md#self-adjoint" >}}) (\\((M^{\*}M)^{\*} = M^{\*}(M^{\*})^{\*} = M^{\*}M\\)). Of course [self-adjoint]({{< relref "KBhaxler_7_a.md#self-adjoint" >}}) matricies are [normal]({{< relref "KBhaxler_7_a.md#normal" >}}), which is nice, so [spectral theorem]({{< relref "KBhaxler_7_a.md#complex-spectral-theorem" >}}) applies here (even the real version because [self-adjoint]({{< relref "KBhaxler_7_a.md#self-adjoint" >}})!)

So, there are a basis of orthonormal [eigenvector]({{< relref "KBheigenvalue.md" >}})s \\(v\_1, \dots v\_{n}\\) of \\(M^{\*}M\\) such that:

Given:

\begin{equation}
V = (v\_1 \dots v\_{m})
\end{equation}

\begin{equation}
M^{\*}M = V D V^{-1}
\end{equation}

(recall that [T is diagonalizable IFF the matrix of T is similar to a diagonal matrix]({{< relref "KBhnus_math530_similar_to_diagonal.md" >}})). Recall, that, \\(v\_1, \dots v\_{n}\\) are **orthonormal**, so \\(V\\)'s columns are [orthonormal]({{< relref "KBhorthonormal.md" >}}). By definition, then, \\(V\\) is [unitary]({{< relref "KBhaxler_7_a.md#unitary" >}}). This makes \\(V^{-1} = V^{\*}\\) is [unitary]({{< relref "KBhaxler_7_a.md#unitary" >}}). This makes \\(V^{-1} = V^{\*}\\).

And therefore:

\begin{equation}
M^{\*} M = V D V^{-1} = V D V^{\*}
\end{equation}

---

Tangent---

To make this better, we can order \\(v\_1, \dots v\_{n}\\) such that eigenvectors vectors corresponding to \\(\lambda = 0\\) comes last.

And so we make a \\(V\\):

\begin{equation}
V = (v\_1 \dots v\_{m-p} | v\_{m-p+1} \dots v\_{m})
\end{equation}

So we have two sub-matricies: an matrix \\(V\_1\\) of shape \\((n, m-p)\\) which is filled by [eigenvector]({{< relref "KBheigenvalue.md" >}})s corresponding to [eigenvalue]({{< relref "KBheigenvalue.md" >}})s not \\(=0\\), and the other matrix \\(V\_2\\) of shape \\((m,p)\\) which is made of [eigenvector]({{< relref "KBheigenvalue.md" >}})s corresponding to zero [eigenvalue]({{< relref "KBheigenvalue.md" >}})s.

---

Ok, recall:

\begin{equation}
M^{\*} M = V D V^{-1} = V D V^{\*}
\end{equation}

Equivalently (by applying \\(V\\) and \\(V^{\*}\\)) to both sides, we have:

\begin{equation}
V^{\*} M^{\*}M V = D
\end{equation}

Applying the breakup of \\(V = (V\_1\ V\_2)\\) above:

\begin{equation}
\mqty(V\_1^{\*} \\\ V\_2^{\*}) M^{\*} M \mqty(V\_1\ V\_2) = D
\end{equation}

The diagonal matrix, given that the columns in \\(V\_2\\) correspond to zero [eigenvalue]({{< relref "KBheigenvalue.md" >}})s, will look like these four **not-necessarily same size** quadrants:

\begin{equation}
\mqty(V\_1^{\*} \\\ V\_2^{\*}) M^{\*} M \mqty(V\_1\ V\_2) = \mqty(D' & 0 \\\ 0 & 0)
\end{equation}

The non-diagonals are zero by definition, the lower-right quadrant is \\(0\\) because the sub-part of \\(V\_2\\) are eigenvectors corresponding to the zero eigenvalue.

Now, recall how matricies multiply:

\begin{align}
&\mqty(V\_1^{\*} \\\ V\_2^{\*}) M^{\*} M \mqty(V\_1\ V\_2) = \mqty(D' & 0 \\\ 0 & 0)\\\\
\Rightarrow\ &\mqty(V\_1^{\*} \\\ V\_2^{\*}) \mqty(M^{\*} M V\_1\ M^{\*} M V\_2) = \mqty(D' & 0 \\\ 0 & 0) \\\\
\Rightarrow\ & \mqty(V\_1^{\*} M^{\*} M V\_1 & V\_1^{\*} M^{\*} M V\_2 \\\ V\_2^{\*}M^{\*} M V\_1 & V\_2^{\*} M^{\*} M V\_2)  = \mqty(D' & 0 \\\ 0 & 0)
\end{align}