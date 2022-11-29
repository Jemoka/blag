+++
title = "matricies"
author = ["Houjun Liu"]
draft = false
+++

[matricies]({{< relref "KBhmatricies.md" >}}) are like buckets of numbers. ok, ok, seriously:

[matricies]({{< relref "KBhmatricies.md" >}}) are a way of encoding the [basis of domain]({{< relref "KBhbasis_of_domain.md" >}}) proof: that if [Linear Map]({{< relref "KBhlinear_map.md" >}})s are determined uniquely by where they map the [basis]({{< relref "KBhbasis.md" >}}) anyways, why don't we just make a mathematical object that represents that to encode the linear maps.


## definition {#definition}

Let \\(n\\), \\(m\\) be positive integer. An \\(m\\) by \\(n\\) matrix \\(A\\) is a rectangular array of elements of \\(\mathbb{F}\\) with \\(m\\) rows and \\(n\\) columns:

\begin{equation}
A = \mqty(A\_{1,1} & \dots & A\_{1,n} \\\ \vdots && \vdots \\\ A\_{m,1} & \dots & A\_{m,n})
\end{equation}

the [matrix]({{< relref "KBhmatricies.md" >}}) representing a [Linear Map]({{< relref "KBhlinear_map.md" >}}) \\(T\\) is noted as \\(\mathcal{M}(T)\\). This maybe [basis]({{< relref "KBhbasis.md" >}}) specific; see [matrix of Linear Map](#matrix-of-linear-map--kbhlinear-map-dot-md) for more.


## additional information {#additional-information}


### matrix of [Linear Map]({{< relref "KBhlinear_map.md" >}}) {#matrix-of-linear-map--kbhlinear-map-dot-md}

This result codifies the claim that [matricies]({{< relref "KBhmatricies.md" >}}) represent [Linear Map]({{< relref "KBhlinear_map.md" >}})s by what they do to the [basis]({{< relref "KBhbasis.md" >}}) of the space of concern.

Suppose \\(T \in \mathcal{L}(V,W)\\), and \\(v\_1, \dots, v\_{n}\\) is a [basis]({{< relref "KBhbasis.md" >}}) of \\(V\\); and \\(w\_1, \dots w\_{m}\\) is a [basis]({{< relref "KBhbasis.md" >}}) of \\(W\\). Then, the [matrix]({{< relref "KBhmatricies.md" >}}) of \\(T\\) with respective to these basis is the \\(m\\) by \\(n\\) (rows by columns!) where:

\begin{equation}
Tv\_{k} = A\_{1,k}w\_1 + \dots  + A\_{m,k}w\_{m}
\end{equation}

Quick memory of this result: inputs across columns, outputs across rows; think about how matrix is multiplied: you smash the input vector horizontally, across the top columns and down. Therefore, a matrix is written as: each columns contains the instructions of where to send each input [basis]({{< relref "KBhbasis.md" >}}), written as a [linear combination]({{< relref "KBhlinear_combination.md" >}}) down each row of that column of the output [basis]({{< relref "KBhbasis.md" >}})

IF the [basis]({{< relref "KBhbasis.md" >}}) being used in the [matrix]({{< relref "KBhmatricies.md" >}}) is unclear (i.e. if we had a change of [basis]({{< relref "KBhbasis.md" >}}), so didn't use the standard basis, etc.), then the [matrix]({{< relref "KBhmatricies.md" >}}) of a _SPECIFIC_ set of [basis]({{< relref "KBhbasis.md" >}}) is written as: \\(\mathcal{M}(T, (v\_1, \dots, v\_n), (w\_1, \dots, w\_{m}))\\).


### sums and scalar multiplication of [matricies]({{< relref "KBhmatricies.md" >}}) {#sums-and-scalar-multiplication-of-matricies--kbhmatricies-dot-md}

According to Jana, a third grader can add and scalar multiply [matricies]({{< relref "KBhmatricies.md" >}}). So I am not going to write them here.

However, what's interesting is the fact that they actually work:

-   Suppose \\(S,T \in \mathcal{L}(V,W)\\), then \\(\mathcal{M}(S+T) = \mathcal{M}(S)+\mathcal{M}(T)\\)
-   Suppose \\(\lambda  \in \mathbb{F}, T \in \mathcal{L}(V,W)\\), then \\(\mathcal{M}(\lambdaT) = \lambda \mathcal{M}(T)\\)

The verification of this result, briefly, is that:

Recall that matricies encode where each input [basis]({{< relref "KBhbasis.md" >}}) get sent, as a [linear combination]({{< relref "KBhlinear_combination.md" >}}) of the output [basis]({{< relref "KBhbasis.md" >}}), down each column; recall that \\((S+T)v = Sv+Tv\\); now, write the sum of the matrix without performing the sum; apply the basis to the matrix; distribute the basis choordinates across the sum, seperate into two matricies. Now we have the sum of the matrix is equal to \\(Sv + Tv\\); then invoke definition of sum of [Linear Map]({{< relref "KBhlinear_map.md" >}}).

[scalar multiplication]({{< relref "KBhscalar_multiplication.md" >}}) works in the same darn way.


### matrix multiplication {#matrix-multiplication}

-   its always row-by-column, move down rows first then columns
-   multiply element-wise and add (row times column and add)


### \\(\mathbb{F}^{m,n}\\) {#mathbb-f-m-n}

For \\(m\\) and \\(n\\) positive integers, the set of all \\(m,n\\) matricies with entries in \\(\mathbb{F}\\) is called \\(\mathbb{F}^{m,n}\\).

This is a [vector space]({{< relref "KBhvector_space.md" >}})!


### invertability {#invertability}

Matrices whose determinants are not \\(0\\) (i.e. it is invertable) is called "[nonsingular matrix](#invertability)". If it doesn't have an [inverse]({{< relref "KBhinverses.md" >}}), it is called a [singular matrix](#invertability).


### elementary matrix {#elementary-matrix}

[elementary matricies](#elementary-matrix) are slight variations from the [identity]({{< relref "KBhidentity.md" >}}) matrix which performs the [elementary row operations](#elementary-matrix):

-   swap rows
-   add a row to another
-   scale rows


### [determinants]({{< relref "KBhdeterminants.md" >}}) {#determinants--kbhdeterminants-dot-md}

See [determinants]({{< relref "KBhdeterminants.md" >}})


### [Gaussian elimination]({{< relref "KBhgaussian_elimination.md" >}}) {#gaussian-elimination--kbhgaussian-elimination-dot-md}

See [Gaussian elimination]({{< relref "KBhgaussian_elimination.md" >}})