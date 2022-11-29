+++
title = "matrix multiplication"
author = ["Houjun Liu"]
draft = false
+++

[matrix multiplication]({{< relref "KBhmatrix_multiplication.md" >}}) is defined such that the expression \\(\mathcal{M}(ST) = \mathcal{M}(S)\mathcal{M}(T)\\) holds:

\begin{equation}
(AC)\_{j,k} = \sum\_{r=1}^{n}A\_{j,r}C\_{r,k}
\end{equation}

While matrix multiplication is [distributive]({{< relref "KBhdistributivity.md" >}}) and [associative]({{< relref "KBhassociative.md" >}}), it is ****NOT****!!!!!!!!!!! [commutative]({{< relref "KBhcommutivity.md" >}}). I hope you can see that \\(ST\neq TS\\).


## memorization {#memorization}

-   its always row-by-column, move down rows first then columns
-   multiply element-wise and add (row times column and add)


## other ways of thinking about [matrix multiplication]({{< relref "KBhmatrix_multiplication.md" >}}) {#other-ways-of-thinking-about-matrix-multiplication--kbhmatrix-multiplication-dot-md}

-   it is "row times column": \\((AC)\_{j,k} = A\_{j, .} \cdot C\_{., k}\\)
-   it is "matrix times columns": \\((AC)\_{. , k} = A C\_{., k}\\)


## matrix as a linear combinator {#matrix-as-a-linear-combinator}

Suppose \\(A\\) is an \\(m\\) by \\(n\\) matrix; and \\(c = \mqty(c\_1\\\ \vdots\\\ c\_{0})\\) is an \\(n\\) by \\(1\\) matrix; then:

\begin{equation}
Ac = c\_1 A\_{., 1} + \dots  + c\_{n} A\_{., n}
\end{equation}

(i.e. you can use a vector to linearly combinate the column vectors.)