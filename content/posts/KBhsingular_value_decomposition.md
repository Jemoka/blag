+++
title = "singular value decomposition"
author = ["Houjun Liu"]
draft = false
+++

[Singular value decomposition]({{< relref "KBhsingular_value_decomposition.md" >}}) is a factorization of a [matrix]({{< relref "KBhmatricies.md" >}}), which is a generalization of the [eigendecomposition]({{< relref "KBhnus_math530_similar_to_diagonal.md" >}}) of [normal]({{< relref "KBhaxler_7_a.md#normal" >}}) [matricies]({{< relref "KBhmatricies.md" >}}) (i.e. where \\(A = V^{-1} D V\\) when \\(A\\) is [diagonalizable]({{< relref "KBhdiagonal_matrix.md#properties-of-diagonal-matrices" >}}), i.e. by the [spectral theorem]({{< relref "KBhaxler_7_a.md#complex-spectral-theorem" >}}) possible when matricies are [normal]({{< relref "KBhaxler_7_a.md#normal" >}})).


## Definitions {#definitions}

**Singular value decomposition** Every \\(m \times n\\) matrix has a factorization of the form:

\begin{equation}
M = U D^{\frac{1}{2}} V^{\*}
\end{equation}

where, \\(U\\) is an [unitary]({{< relref "KBhaxler_7_a.md#unitary" >}}) matrix, \\(D^{\frac{1}{2}}\\) a [diagonal]({{< relref "KBhdiagonal_matrix.md" >}})ish (i.e. rectangular diagonal) matrix with non-negative numbers on its diagonal called **singular values**, which are the positive square roots of eigenvalues of \\(M^{\* }M\\) --- meaning the diagonal of \\(D^{\frac{1}{2}}\\) is non-negative (\\(\geq 0\\)). Finally, \\(V\\) is formed columns of orthonormal bases of eigenvectors of \\(M^{\*}M\\).

[SVD]({{< relref "KBhsingular_value_decomposition.md" >}}) is not technically unique, but we like to force a specific (convenient, see proof for why) ordering: where \\(D^{\frac{1}{2}}\\) (and the corresponding values in \\(V^{\*}\\)) is sorted such that the non-zero values are to the right.


## Doing It {#doing-it}

Doing SVD is not actually super duper hard, but it takes some thinking on why it works, which we shall do below.

Recall that \\(V^{\* }\\) is the conjugate transpose of the orthonormal eigenvectors of \\(M^{\*} M\\). Then, we construct the square roots of the corresponding eigenvalues and arrange them into \\(D^{\frac{1}{2}}\\).

---

**Tangent**:

Why is it we can take square roots of these values (i.e. the eigenvalues are guaranteed positive or zero?) Recall the definition of adjoint:

\begin{equation}
\langle Tv, w \rangle = \langle v, T^{\*}w \rangle
\end{equation}

Applying it here, we have

\begin{equation}
\langle M^{\*}M v, v \rangle = \langle M v, M v \rangle
\end{equation}

And recall that, by definition of inner product, \\(\langle Mv, Mv \rangle \geq 0\\), and so \\(\\|Mv\\|^{2} \geq 0\\) and so \\(\\|Mv\\| \geq 0\\) so \\(\\| \lambda v \\| \geq 0\\).

---

And so you can take the square roots of those singular values (i.e. square roots of eigenvalues of \\(M^{\*}M\\)).

How do we get \\(U\\)? Well recall:

\begin{equation}
M = U D^{\frac{1}{2}} V^{\*}
\end{equation}

And \\(V\\) is an operator lined with orthornomal eigenbases so it is unitary and so \\(V = (V^{\*})^{-1}\\).

And therefore, we apply \\(V\\) on both sides:

\begin{equation}
MV = UD^{\frac{1}{2}}
\end{equation}

As \\(D\\) is diagonal, and we know the left side, we can then easily recover \\(U\\) by staring at it (and norming the vectors).


## Motivation and Proof {#motivation-and-proof}


### Beginning Motivation {#beginning-motivation}

We have a matrix \\(M\\) of shape \\(m \times n\\), it sucks: it may not be [normal]({{< relref "KBhaxler_7_a.md#normal" >}}), it may not even be an [operator]({{< relref "KBhoperator.md" >}}).

So consider now:

\begin{equation}
M^{\*} M
\end{equation}

you will note that this is now an _operator (\\((n \times m)(m \times n) = n \times n\\))!!_ Not only that, \\(M^{\*}M\\) is [self-adjoint]({{< relref "KBhaxler_7_a.md#self-adjoint" >}}) (\\((M^{\*}M)^{\*} = M^{\*}(M^{\*})^{\*} = M^{\*}M\\)). Of course [self-adjoint]({{< relref "KBhaxler_7_a.md#self-adjoint" >}}) matricies are [normal]({{< relref "KBhaxler_7_a.md#normal" >}}), which is nice, so [spectral theorem]({{< relref "KBhaxler_7_a.md#complex-spectral-theorem" >}}) applies here (even the real version because [self-adjoint]({{< relref "KBhaxler_7_a.md#self-adjoint" >}})!)


### [Eigendecomposition]({{< relref "KBhnus_math530_similar_to_diagonal.md" >}}) of \\(M^{\*}M\\) {#eigendecomposition--kbhnus-math530-similar-to-diagonal-dot-md--of-m-m}

So, by the [spectral theorem]({{< relref "KBhaxler_7_a.md#complex-spectral-theorem" >}}), there are a basis of orthonormal [eigenvector]({{< relref "KBheigenvalue.md" >}})s \\(v\_1, \dots v\_{n}\\) of \\(M^{\*}M\\) such that:

Given:

\begin{equation}
V = \mqty(v\_1 & \dots & v\_{n})
\end{equation}

we have

\begin{equation}
M^{\*}M = V D\_0 V^{-1}
\end{equation}

i.e. this is the [eigendecomposition]({{< relref "KBhnus_math530_similar_to_diagonal.md" >}}) ("similar to diagonal") result we had from before, where \\(D\_0\\) is a [Diagonal Matrix]({{< relref "KBhdiagonal_matrix.md" >}}) of [eigenvalue]({{< relref "KBheigenvalue.md" >}})s on the diagonal.

Swapping the direction of conjugation, to expose the diagonal matrix by itself, we have:

\begin{equation}
D\_0 = V^{-1} M^{\*} M V
\end{equation}

You will NOTICE! The [spectral theorem]({{< relref "KBhaxler_7_a.md#complex-spectral-theorem" >}}) gives us that \\(v\_1, ... v\_{n}\\) is not only a [basis]({{< relref "KBhbasis.md" >}}) of [eigenvector]({{< relref "KBheigenvalue.md" >}})s, but an **ORTHONORMAL** basis of eigenvectors. So \\(V\\) is an [operator]({{< relref "KBhoperator.md" >}}) with [orthogonal]({{< relref "KBhorthogonal.md" >}}) columns. And so, because of [this result]({{< relref "KBhnus_math530_matrix_adjectives.md#an-unitary-operator-is-invertible-and-the-inverse-of-its-matrix-representation-is-its-transpose" >}}), we have that: \\(V^{\*} = V^{-1}\\).

Substituting this in, we have:

\begin{equation}
D\_0 = V^{\*} M^{\*} M V
\end{equation}


### Aside #1: zero-eigenvalue eigenvector ordering {#aside-1-zero-eigenvalue-eigenvector-ordering}

To make this better, we can order \\(v\_1, \dots v\_{n}\\) such that eigenvectors vectors corresponding to \\(\lambda = 0\\) comes last.

And so we make a \\(V\\):

\begin{equation}
V = \mqty(v\_1 &\dots &v\_{n-p} & v\_{n-p+1} &\dots &v\_{n})
\end{equation}

So we have two sub-matricies: an matrix \\(V\_1\\) of shape \\((n, n-p)\\) which is filled by [eigenvector]({{< relref "KBheigenvalue.md" >}})s corresponding to [eigenvalue]({{< relref "KBheigenvalue.md" >}})s not \\(=0\\), and the other matrix \\(V\_2\\) of shape \\((n,p)\\) which is made of [eigenvector]({{< relref "KBheigenvalue.md" >}})s corresponding to zero [eigenvalue]({{< relref "KBheigenvalue.md" >}})s.

That is:

\begin{equation}
\begin{cases}
V\_1 = \mqty(v\_1 & \dots & v\_{n-p}) \\\\
V\_1 = \mqty(v\_{n-p+1} & \dots & v\_{n}) \\\\
\end{cases}
\end{equation}

and

\begin{equation}
V = \mqty(V\_1 &  V\_2)
\end{equation}

where, \\(v\_1, ..., v\_{n-p}\\) are orthonormal [eigenvector]({{< relref "KBheigenvalue.md" >}})s corresponding to non-zero [eigenvalue]({{< relref "KBheigenvalue.md" >}})s, and \\(v\_{n-p+1}, ..., v\_{n}\\) are that corresponding to [zero]({{< relref "KBhzero.md" >}}) [eigenvalue]({{< relref "KBheigenvalue.md" >}}).

Furthermore, this ordering of the eigenvectors can help us better clarify what \\(D\_0\\) is:

\begin{equation}
D\_0 = \mqty(D & 0 \\\ 0 & 0)
\end{equation}

Where, \\(D\\) is a [Diagonal Matrix]({{< relref "KBhdiagonal_matrix.md" >}}) with a strictly positive [diagonal]({{< relref "KBhdiagonal_matrix.md" >}}) as the non-diagonals are zero by definition, the lower-right quadrant is \\(0\\) because the sub-part of \\(V\_2\\) are eigenvectors corresponding to the zero eigenvalue.


### Applying \\(V\_1, V\_2\\) breakup from aside above {#applying-v-1-v-2-breakup-from-aside-above}

Ok, recall where we were:

\begin{equation}
D\_0 = V^{\*} M^{\*} M V
\end{equation}

Applying the substitutions from above:

\begin{equation}
\mqty(V\_1^{\*} \\\ V\_2^{\*}) M^{\*} M \mqty(V\_1\ V\_2) = \mqty(D & 0 \\\ 0 & 0)
\end{equation}

Now, recall how matricies multiply:

\begin{align}
&\mqty(V\_1^{\*} \\\ V\_2^{\*}) M^{\*} M \mqty(V\_1\ V\_2) = \mqty(D & 0 \\\ 0 & 0)\\\\
\Rightarrow\ &\mqty(V\_1^{\*} \\\ V\_2^{\*}) \mqty(M^{\*} M V\_1\ M^{\*} M V\_2) = \mqty(D & 0 \\\ 0 & 0) \\\\
\Rightarrow\ & \mqty(V\_1^{\*} M^{\*} M V\_1 & V\_1^{\*} M^{\*} M V\_2 \\\ V\_2^{\*}M^{\*} M V\_1 & V\_2^{\*} M^{\*} M V\_2)  = \mqty(D & 0 \\\ 0 & 0)
\end{align}


### Aside #2: \\(A^{\*} A = 0 \implies A=0\\) {#aside-2-a-a-0-implies-a-0}

Take the construction:

\begin{equation}
A^{\*} A = 0
\end{equation}

we desire that \\(A = 0\\).

Recall the definition of \\(A^{\*}\\):

\begin{equation}
\langle Av, w \rangle = \langle v, A^{\*}w \rangle
\end{equation}

for all \\(v,w\\).

Now, consider:

\begin{equation}
\langle A^{\*} Av, w \rangle = \langle A^{\*} (Av), w \rangle = \langle Av, (A^{\*})^{\*}w \rangle = \langle Av, Aw \rangle
\end{equation}

Applying the above, finally, consider:

\begin{equation}
\\|Av\\|^{2} = \langle Av, Av \rangle = \langle A^{\*}A v, v \rangle
\end{equation}

Recall that \\(A^{\*}A = 0\\), so:

\begin{equation}
\\|Av\\|^{2} = \langle A^{\*}A v, v \rangle = \langle 0v,v \rangle = 0
\end{equation}

So, the norm of \\(Av = 0\\) for all \\(v \in V\\), which means \\(A\\) produces only \\(0\\) vectors, which means \\(A=0\\), as desired.


### Breaking \\(V\_{j}^{\*} M^{\*}M V\_{j}\\) up {#breaking-v-j-m-m-v-j-up}

Recall where we ended up at:

\begin{equation}
\mqty(V\_1^{\*} M^{\*} M V\_1 & V\_1^{\*} M^{\*} M V\_2 \\\ V\_2^{\*}M^{\*} M V\_1 & V\_2^{\*} M^{\*} M V\_2)  = \mqty(D & 0 \\\ 0 & 0)
\end{equation}

Consider its diagonals:

\begin{equation}
\begin{cases}
V\_1^{\*} M^{\*} M V\_1 = D \\\\
V\_2^{\*} M^{\*} M V\_2 = 0
\end{cases}
\end{equation}

Now, for the second expression, we have: \\(V\_2^{\*}M^{\*}MV\_{2} = (M V\_2)^{\*} (M V\_2) = 0\\). So, from the result above (that \\(A^{\*}A = 0 \implies A=0\\)), we have that \\(MV\_{2} = 0\\).


### Aside #3: \\(V\_1 V\_1^{\*} + V\_2V\_2^{\*} = I\\) {#aside-3-v-1-v-1-plus-v-2v-2-i}

Consider:

\begin{equation}
V\_1 V\_1^{\*}
\end{equation}

The matrix \\(V\_1\\) has shape \\((n, n-p)\\), and this makes \\(V\_1^{\* }\\) have shape \\((n-p, n)\\). You will, therefore, note that \\(V\_{1}^{\* }\\) is a map from a vector space of dimension \\(n\\) to that in a dimension \\(n-p\\). This map, then, is not [injective]({{< relref "KBhinjectivity.md" >}}) when \\(p\neq 0\\). Therefore, the overall operator \\(V\_1 V\_1^{\* }\\) is also not going to be [injective]({{< relref "KBhinjectivity.md" >}}) because non-zero is going to be sent by \\(V\_1^{\* }\\) to \\(0\\), then sent still by \\(V\_1\\) to \\(0\\). This also means that \\(V\_1 V\_1^{\*}\\) is not [invertable]({{< relref "KBhinvertability.md" >}}).

Yet, we are trying to show \\(V\_1 V\_1^{\*} + V\_2 V\_2^{\*} = I\\), which is the sum of these two noninvertible map, is \\(I\\): the grandaddy of all invertible maps. What gives?

Recall that:

\begin{equation}
\begin{cases}
\mqty(V\_1 & V\_2) = V \\\\
V V^{\*} = I
\end{cases}
\end{equation}

The first result is by definition, the second because \\(V\\) is an orthonormal operator so it is [unitary]({{< relref "KBhaxler_7_a.md#unitary" >}}).

Let us begin with:

\begin{align}
I &= V V^{\*}  \\\\
&= \mqty(V\_1 & V\_2) \mqty(V\_1 & V\_2)^{\*}  \\\\
&= \mqty(V\_1 & V\_2) \mqty(V\_1^{\*} \\\ V\_2^{\*})  \\\\
&= V\_1V\_1^{\*} + V\_2 V\_2^{\*}
\end{align}

And the last equation simply comes from how matrices multiply: row by column. And so, weirdly, we can confirm that adding non-full rank matricies and end up to be the identity. So, again:

\begin{equation}
V\_1 V\_1^{\*} + V\_2V\_2^{\*} = I
\end{equation}


### Constructing \\(U\_1\\) {#constructing-u-1}

With the result above, we are finally close to doing what we want to do. Recall our last set of conclusions:

one, that:

\begin{equation}
\begin{cases}
V\_1^{\*} M^{\*} M V\_1 = D \\\\
V\_2^{\*} M^{\*} M V\_2 = 0
\end{cases}
\end{equation}

and specifically, that \\(MV\_{2} = 0\\).

and two, that:

\begin{align}
&V\_1 V\_1^{\* } + V\_2V\_2^{\* } = I \\\\
\Rightarrow\ & V\_1 V\_1^{\* } = I  -  V\_2V\_2^{\* }
\end{align}

Let's now turn our attention to \\(D\\) above. It has all non-zero diagonals, because we cropped out the zero already ([see above](#aside-1-zero-eigenvalue-eigenvector-ordering) during the definition of \\(D\\) vis a vi \\(D\_0\\)). This means it is invertible because [operator is only invertible if diagonal of its upper-triangular matrix is nonzero]({{< relref "KBhupper_triangular_matrix.md#operator-is-only-invertible-if-id-c38ed162-6861-420c-a812-6d25ac539ea9-diagonal-of-its-id-af53dbd7-0421-4039-a9f9-9080ea6e1c42-upper-triangular-matrix-is-nonzero" >}}). For a diagonal matrix, this is particularly easy; let us construct:

\begin{equation}
D = D^{\frac{1}{2}} D^{\frac{1}{2}}
\end{equation}

where, \\(D^{\frac{1}{2}}\\) is just the same [diagonal]({{< relref "KBhdiagonal_matrix.md" >}}) matrix as \\(D\\) except we take the square root of everything in the diagonal. The above could be shown then to be true by calculation (\\(\sqrt{a}\sqrt{a} = a\\) on every element in the diagonal).

Let us also make:

\begin{equation}
I = D^{-\frac{1}{2}} D^{\frac{1}{2}}
\end{equation}

where, \\(D^{-\frac{1}{2}}\\) is \\(\frac{1}{\sqrt{a}}\\) for event element \\(a\\) in the diagonal. Again, the above could be shown to be true by calculation by \\(\sqrt{a} \frac{1}{\sqrt{a}} = 1\\).

Given the diagonal of \\(D\\) contains the [eigenvalue]({{< relref "KBheigenvalue.md" >}})s of \\(M^{\*}M\\), by calculation \\(D^{\frac{1}{2}}\\) contains the square roots of these [eigenvalue]({{< relref "KBheigenvalue.md" >}})s, which means that it should contain on its [diagonal]({{< relref "KBhdiagonal_matrix.md" >}}) the [singular value]({{< relref "KBhsingular_value_decomposition.md" >}})s of \\(M\\), which is rather nice (because we have corollaries below that show concordance between [singular value]({{< relref "KBhsingular_value_decomposition.md" >}})s of \\(M\\) and its [eigenvalue]({{< relref "KBheigenvalue.md" >}})s, see below).

Consider, finally, the matrix \\(M\\):

\begin{align}
M &= M - 0 \\\\
&= M - 0 V\_2^{\* } \\\\
&= M - (M V\_2) V\_2^{\* } \\\\
&= M (I - V\_2 V\_2^{\* })  \\\\
&= M V\_1V\_1^{\*}  \\\\
&= M V\_1 I V\_1^{\*}  \\\\
&= M V\_1 (D^{-\frac{1}{2}} D^{\frac{1}{2}}) V\_1^{\*} \\\\
&= (M V\_1 D^{-\frac{1}{2}}) D^{\frac{1}{2}} V\_1^{\*}
\end{align}

We now define a matrix \\(U\_1\\):

\begin{equation}
U\_1 = M V\_1 D^{-\frac{1}{2}}
\end{equation}

We now have:

\begin{equation}
M = U\_1 D^{\frac{1}{2}} V\_1^{\*}
\end{equation}

Were \\(U\_1\\) is a matrix of shape \\((m \times n)(n \times  n-p)(n-p \times  n-p) = (m \times  n-p)\\), \\(D^{\frac{1}{2}}\\) is a [diagonal]({{< relref "KBhdiagonal_matrix.md" >}}) matrix of shape \\((n-p \times  n-p)\\) with [singular values]({{< relref "KBhsingular_value_decomposition.md" >}}) on the diagonal, and \\(V\_1^{\*}\\) is a matrix with orthonormal rows of shape \\((n-p \times  n)\\).

This is a **compact svd**. We are sandwitching a [diagonal]({{< relref "KBhdiagonal_matrix.md" >}}) matrix of [singular values]({{< relref "KBhsingular_value_decomposition.md" >}}) between two rectangular matricies to recover \\(M\\). Ideally, we want the left and right matricies too to have nice properties (like, say, be an [operator]({{< relref "KBhoperator.md" >}}) or have [unitarity]({{< relref "KBhaxler_7_a.md#unitary" >}})). So we work harder.


### Aside #4: \\(U\_1\\) is orthonormal {#aside-4-u-1-is-orthonormal}

We can't actually claim \\(U\_1\\) is [unitary]({{< relref "KBhaxler_7_a.md#unitary" >}}) because its not an [operator]({{< relref "KBhoperator.md" >}}). However, we like to show its columns are [orthonormal]({{< relref "KBhorthonormal.md" >}}) so far so we can extend it into a fully, actually, [unitary]({{< relref "KBhaxler_7_a.md#unitary" >}}) matrix.

One sign that a matrix is [orthonormal]({{< relref "KBhorthonormal.md" >}}) is if \\(T^{\*}T = I\\). Because of the way that matricies multiply, this holds IFF each column yields a \\(1\\) when its own conjugate transpose is applied, and \\(0\\) otherwise. This is also the definition of [orthonormal]({{< relref "KBhorthonormal.md" >}})ity.

Therefore, we desire \\(U\_{1}^{\*} U\_1 = I\\). We hence consider:

\begin{equation}
U\_1^{\*} U\_1
\end{equation}

We have by substitution of \\(U\_1 = M V\_1 D^{-\frac{1}{2}}\\):

\begin{equation}
(M V\_1 D^{-\frac{1}{2}})^{\*}(M V\_1 D^{-\frac{1}{2}})
\end{equation}

Given the property that \\((AB)^{\*} = B^{\*}A^{\*}\\), we have that:

\begin{equation}
(M V\_1 D^{-\frac{1}{2}})^{\*}(M V\_1 D^{-\frac{1}{2}}) = D^{-\frac{1}{2}}^{\*} V\_1^{\*} M^{\*}M V\_1 D^{-\frac{1}{2}}
\end{equation}

Recall now that, from way before, we have:

\begin{equation}
V\_1^{\*} M^{\*} M V\_1 = D
\end{equation}

Substituting that in:

\begin{align}
{D^{-\frac{1}{2}}}^{\*} V\_1^{\*} M^{\*}M V\_1 D^{-\frac{1}{2}} &= {D^{-\frac{1}{2}}}^{\*} (V\_1^{\*} M^{\*}M V\_1) D^{-\frac{1}{2}} \\\\
&= {D^{-\frac{1}{2}}}^{\*} D D^{-\frac{1}{2}}
\end{align}

Recall now that the multiplication of diagonal matricies are commutative (by calculation), and that diagonal real matricies are self-adjoint (try conjugate-transposing a real diagonal matrix). We know that \\(D^{-\frac{1}{2}}\\) is real (because its filled with the square roots of the [eigenvalue]({{< relref "KBheigenvalue.md" >}})s of \\(M^{\*}M\\), which is [self-adjoint]({{< relref "KBhaxler_7_a.md#self-adjoint" >}}), and [eigenvalues of self-adjoint matricies are real]({{< relref "KBhaxler_7_a.md#eigenvalues-of-id-04577953-b953-4ac0-8102-fe9b804bdfc9-self-adjoint-matricies-are-real" >}})) and is by definition diagonal. So we have that \\(D^{-\frac{1}{2}}\\) is self-adjoint.

Taking those facts in mind, we can now rewrite this expression:

\begin{align}
{D^{-\frac{1}{2}}}^{\*} V\_1^{\*} M^{\*}M V\_1 D^{-\frac{1}{2}} &= {D^{-\frac{1}{2}}}^{\*} D D^{-\frac{1}{2}}  \\\\
&= D^{-\frac{1}{2}} D D^{-\frac{1}{2}}  \\\\
&= D^{-\frac{1}{2}}D^{-\frac{1}{2}} D  \\\\
&= D^{-1} D  \\\\
&= I
\end{align}

Therefore, \\(U\_1^{\*} U\_1 = I\\) as desired, so the columns of \\(U\_1\\) is orthonormal.


### SVD, fully {#svd-fully}

Recall that, so far, we have:

\begin{equation}
M = U\_1 D^{\frac{1}{2}} V\_1^{\*}
\end{equation}

where

\begin{equation}
U\_1 = M V\_1 D^{-\frac{1}{2}}
\end{equation}

So far, \\(U\_1\\) and \\(V\_1^{\*}\\) are both disappointingly not [operator]({{< relref "KBhoperator.md" >}})s. However, we know that \\(U\_1\\) and \\(V\_1\\) are both orthonormal (the former per aside #4 above, the latter by the [spectral theorem]({{< relref "KBhaxler_7_a.md#complex-spectral-theorem" >}}) and  [construction above](#aside-1-zero-eigenvalue-eigenvector-ordering)). So wouldn't it be doubleplusgood for both of them to be [unitary]({{< relref "KBhaxler_7_a.md#unitary" >}}) [operator]({{< relref "KBhoperator.md" >}})s?

To make this happen, we need to first pad out \\(D^{\frac{1}{2}}\\). If we want \\(U\\) and \\(V^{\* }\\) to both be [operator]({{< relref "KBhoperator.md" >}})s, and yet have \\(U D^{\frac{1}{2}} V^{\*} = M\\), we note that we have to make \\(D^{\frac{1}{2}}\\) not square.

Recall that \\(M\\) has dimensions \\(m \times n\\). Therefore, for everything to have the right shape, \\(U\\) has to be \\(m \times m\\), \\(D^{\frac{1}{2}}\\) have \\(m \times n\\), and \\(V^{\*}\\) to be \\(n \times n\\).

There are immediate and direct ways of padding out \\(D^{\frac{1}{2}}\\) and \\(V\_{1}^{\*}\\): let us replace \\(V\_1 \implies V\\), and just shove enough zeros into \\(D\\) such that the dimensions work out. To show that those two steps doesn't affect anything, recall that:

\begin{equation}
V = \mqty(V\_1 & V\_2)
\end{equation}

where \\(V\_1\\) is a matrix whose columns are the non-zero [eigenvalue]({{< relref "KBheigenvalue.md" >}}) correlated [eigenvector]({{< relref "KBheigenvalue.md" >}})s, and the columns of \\(V\_1\\) the zero-eigenvalue related ones.

Therefore, as long as we pad out \\(D^{\frac{1}{2}}\\)'s "extra" dimensions with \\(0\\), replacing \\(V\_1^{\* }\\) with \\(V^{\*}\\)

---

FINALLY:

**DEFINE** singular values: square roots of [eigenvalue]({{< relref "KBheigenvalue.md" >}})s of \\(M^{\*} M\\) are the **singular values** of \\(M\\).

Notice! Every [eigenvalue]({{< relref "KBheigenvalue.md" >}}) of \\(M\\) is a **singular value** of \\(M\\); but there maybe more singular values

Let \\(U\_1 = M V\_1 D^{-\frac{1}{2}}\\). (Where the square root of the matrix is the matrix \\(D = D^{\frac{1}{2}} D^{\frac{1}{2}}\\). Now, \\(D^{-\frac{1}{2}} = (D^{\frac{1}{2}})^{-1}\\). For diagonal matricies, this is particularly easy: the matrix \\(D^{\frac{1}{2}}\\) would just be the square roots of the diagonal.)

Recall that \\(V\_1 V\_1^{\*} + V\_2V\_2^{\*} = I\\), and that . Consider,

\begin{equation}
U\_1 D^{\frac{1}{2}} V\_1^{\*} = (M V\_1 D^{-\frac{1}{2}}) (D^{\frac{1}{2}} V\_1^{\*}) = M V\_1 I V\_1^{\*} = M (I - V\_2 V\_2^{\*}) = M - M V\_2 V\_2^{\*} = M - 0 V\_2^{\*} = M
\end{equation}

You are now good at math.

So, we now know that:

\begin{equation}
M = U\_1 D^{\frac{1}{2}} V\_1^{\*}
\end{equation}

\\(U\_1\\) has shape \\((m \times n-p)\\), \\(D^{\frac{1}{2}}\\) has shape \\((n-p \times n-p)\\), and \\(V\_1^{\*}\\) has shape \\((n-p \times  n)\\). You can expand \\(U\_1\\)'s missing \\(p\\) column vectors into a basis of \\(V\\) to make thing things squared; and for the second part, you can add \\(V\_2\\) back. Those get sent to \\(0\\) so it wouldn't matter. This makes \\(D\\) [diagonalish]({{< relref "KBhdiagonal_matrix.md#properties-of-diagonal-matrices" >}}).


## Useful corollaries {#useful-corollaries}


### If \\(\lambda\\) is an en eigenvalue of \\(M\\), then \\(\lambda\\) is a singular value of \\(M\\) {#if-lambda-is-an-en-eigenvalue-of-m-then-lambda-is-a-singular-value-of-m}

So we have:

\begin{equation}
Mv = U D^{\frac{1}{2}} V^{\*} v
\end{equation}
