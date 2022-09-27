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


### this allow us how to decompose a matrix {#this-allow-us-how-to-decompose-a-matrix}

\begin{equation}
A = \begin{pmatrix}
x+ & x- \\\y+ & y-
\end{pmatrix} \begin{pmatrix}
\lambda+ & 0 \\\ 0 & \lambda-
\end{pmatrix} \begin{pmatrix}
x+ & x- \\\y+ & y-
\end{pmatrix}^{-1}
\end{equation}