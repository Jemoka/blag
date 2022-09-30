+++
title = "eigenvalue"
author = ["Houjun Liu"]
draft = false
+++

[eigenvalue]({{< relref "KBheigenvalue.md" >}})s are values which scales eigenvectors


## constituents {#constituents}

-   linear map \\(T\\)
-   "eigenvectors" \\(v\\)
-   "eigenvalues" \\(\lambda\_{j}\\)


## requirements {#requirements}

\begin{equation}
Tv = \lambda\_{j}v
\end{equation}


## additional information {#additional-information}


### finding eigenvalue {#finding-eigenvalue}

\begin{equation}
\lambda\_{j} \in Spec(T) \Rightarrow det(\lambda\_{j}I-T) = 0
\end{equation}

The right polynomial \\(det(\lambda\_{j} I-T) = 0\\) is named the "characteristic polynomial."


### this allow us how to decompose a matrix in diagonalizing it {#this-allow-us-how-to-decompose-a-matrix-in-diagonalizing-it}

Given the eigenvectors \\((x+,y+), (x-,y-)\\), we can change coordinates of your matrix into the natural choordinates.

\begin{equation}
A = \begin{pmatrix}
x+ & x- \\\y+ & y-
\end{pmatrix} \begin{pmatrix}
\lambda+ & 0 \\\ 0 & \lambda-
\end{pmatrix} \begin{pmatrix}
x+ & x- \\\y+ & y-
\end{pmatrix}^{-1}
\end{equation}

This makes scaling matricides much much easier. If you think about multiplying the above matrix \\(n\\) times, the inverse and non-inverse cancells out.