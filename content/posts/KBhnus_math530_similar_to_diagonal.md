+++
title = "NUS-MATH530 Similar to Diagonal"
author = ["Houjun Liu"]
draft = false
+++

Prove but \\(T\\) is [diagonalizable]({{< relref "KBhdiagonal_matrix.md#properties-of-diagonal-matrices" >}}) if and only if the matrix of \\(T\\) is similar to a diagonal matrix.

---

Given similarity.

Here's a brief review of similarity:

A matrix \\(T\\) is _similar_ to another matrix \\(B\\) if an only if there exists another invertible matrix \\(A\\) such that:

\begin{equation}
B = A^{-1} T A
\end{equation}

Now, we are given \\(B\\) is a diagonal matrix. Let \\(\lambda\\) be an eigenvalue of \\(B\\):

\begin{equation}
B v =  \lambda v
\end{equation}

for some \\(v \in V\\) and \\(\lambda \in \mathbb{F}\\).

Substituting the above definition in:

\begin{equation}
A^{-1} T A v= \lambda v
\end{equation}

Applying \\(A\\) to both sides:

\begin{equation}
A A^{-1} T A v = \lambda Av
\end{equation}

Recall that \\(A A^{-1} = I\\), so:

\begin{equation}
TAv = \lambda Av
\end{equation}

Now, this renders \\(Av\\) as eigenvector of \\(T\\), and \\(\lambda\\) still an eigenvalue.

In a similar fashion, we can show the other direction. Hence, WLOG, \\(T\\) and \\(B\\) has the same eigenvalues.

Given \\(T\\) and \\(B\\) belong to the same space, and \\(B\\) is diagonalizable (it has enough eigenvalues as dimensions), \\(T\\) is diagonalizable.

---

Given diagonalizable.

Therefore, there is a basis of eigenvectors of \\(T\\) which form \\(V\\). Construct a matrix \\(A\\) where the eigenvectors are arranged in its columns. As the list is a basis, the column space of \\(A\\) spans all of \\(V\\); this makes \\(A\\) subjective and also invertible.

Now, construct \\(B\\) with diagonals where each slot contains the eigenvalue where each eigenvector is mapped to by \\(T\\). By construction, therefore, \\(A^{-1}BA\\) behaves in the same way as \\(T\\).

Having shown by construction \\(T = A^{-1}BA\\), \\(B\\) a diagonal matrix is similar to \\(T\\).

Having shown both directions, \\(\blacksquare\\)