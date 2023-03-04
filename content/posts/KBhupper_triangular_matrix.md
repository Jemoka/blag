+++
title = "upper-triangular matrix"
author = ["Houjun Liu"]
draft = false
+++

A [matrix]({{< relref "KBhmatricies.md" >}}) is [upper-triangular]({{< relref "KBhupper_triangular_matrix.md" >}}) if the entries below the [diagonal]({{< relref "KBhmatricies.md#diagonal" >}}) are \\(0\\):

\begin{equation}
\mqty(\lambda\_{1} & & \* \\\ & \ddots & \\\ 0 & & \lambda\_{n})
\end{equation}


## properties of [upper-triangular matrix]({{< relref "KBhupper_triangular_matrix.md" >}}) {#properties-of-upper-triangular-matrix--kbhupper-triangular-matrix-dot-md}

Suppose \\(T \in \mathcal{L}(V)\\), and \\(v\_1 ... v\_{n}\\) is a basis of \\(V\\). Then:

1.  the matrix of \\(T\\) w.r.t. \\(v\_1 ... v\_{n}\\) is [upper-triangular]({{< relref "KBhupper_triangular_matrix.md" >}})
2.  \\(Tv\_{j} \in span(v\_1 \dots v\_{j})\\) for each \\(v\_{j}\\)
3.  \\(span(v\_{1}, ... v\_{j})\\) is [invariant]({{< relref "KBhinvariant_subspace.md" >}}) under \\(T\\) for each \\(v\_{j}\\)


### \\(1 \implies 2\\) {#1-implies-2}

Recall that our matrix \\(A=\mathcal{M}(T)\\) is [upper-triangular]({{< relref "KBhupper_triangular_matrix.md" >}}). So, for any \\(v\_{j}\\) sent through \\(A\\), it will be multiplied to the $j$-th column [vector]({{< relref "KBhvector.md" >}}) of the [matrix]({{< relref "KBhmatricies.md" >}}). Now, that $j$-th column has \\(0\\) for rows \\(j+1 ... n\\), meaning that only through a linear combination of the first \\(j\\) vectors we can construct \\(T v\_{j}\\). Hence, \\(Tv\_{j} \in span(v\_1 ... v\_{j})\\)


### \\(3 \implies 2\\) {#3-implies-2}

"obviously"

All \\(v\_{j} \in span(v\_1, \dots v\_{j})\\), and yet \\(T v\_{j} \in span (v\_{1}, ... v\_{j})\\) as it is given. Hence, \\(span(v\_1, ... v\_{j})\\) is [invariant]({{< relref "KBhinvariant_subspace.md" >}}) under \\(T\\).


### \\(2 \implies 3\\) {#2-implies-3}

Let \\(v \in span(v\_1, ... v\_{j})\\); meaning: \\(v = a\_1 v\_1 + ... + a\_{j} v\_{j}\\). Now, \\(Tv = a\_1 T v\_{1} + ... + a\_{j} T v\_{j}\\). Recall now we are given \\(T v\_{j} \in span(v\_1, ... v\_{j})\\) for each \\(v\_{j}\\) (of course if \\(T{v\_{1}} \in span(v\_{1})\\)  it is also in \\(span(v\_1, ... v\_{j})\\) so the statement make sense.) Therefore, a linear combinations of \\(T v\_{j}\\) also is in \\(span(v\_1 ... v\_{j})\\). Making the latter [invariant]({{< relref "KBhinvariant_subspace.md" >}}) under \\(T\\). \\(\blacksquare\\)
