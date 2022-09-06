+++
title = "matricies"
author = ["Houjun Liu"]
draft = false
+++

we never do them anyways


## additional information {#additional-information}


### multiplying [matricies]({{< relref "KBhmatricies.md" >}}) {#multiplying-matricies--kbhmatricies-dot-md}

-   its always row-by-column, move down rows first then columns
-   multiply element-wise and add (row times column and add)


### invertability {#invertability}

Matrices whose determinants are not \\(0\\) (i.e. it is invertable) is called "[nonsingular matrix](#invertability)". If it doesn't have an [inverse]({{< relref "KBhinverses.md" >}}), it is called a [singular matrix](#invertability).


### Gaussian elimination {#gaussian-elimination}

The point of [Gaussian elimination](#gaussian-elimination) is to solve/identiy-ify a linear equation. Take, if you have a matrix expression:

\begin{equation}
    Ax = b
\end{equation}

We can apply \\(A^{-1}\\) to both side, we then have:

\begin{equation}
    A^{-1}Ax = A^{-1} b
\end{equation}

Applying the definition of the identity:

\begin{equation}
    Ix = A^{-1}b
\end{equation}

Therefore, to solve for some \\(A^{-1}\\), which would yield


### determinants {#determinants}

For a matrix, for instance, like:

\begin{equation}
\begin{bmatrix}
a & b \\\\
c & d
\end{bmatrix}
\end{equation}

We wish to find the matrix's determinant; we write it down as:

\begin{equation}
\begin{vmatrix}
a & b \\\\
c & d
\end{vmatrix}
\end{equation}