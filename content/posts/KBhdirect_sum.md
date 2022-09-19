+++
title = "direct sum"
author = ["Houjun Liu"]
draft = false
+++

A [direct sum]({{< relref "KBhdirect_sum.md" >}}) is a sum of ****[subspace]({{< relref "KBhsubspace.md" >}})s**** (not just subsets!!) where there's only one way to represent each element.


## constituents {#constituents}

[subspace]({{< relref "KBhsubspace.md" >}})s of \\(V\\) named \\(U\_1, \dots, U\_{m}\\)


## requirements {#requirements}

The [sum of subsets]({{< relref "KBhsum_of_subsets.md" >}}) of \\(U\_1+\dots+U\_{m}\\) is called a _direct sum_ [IFF]({{< relref "KBhequivalence.md" >}}):

each element in \\(U\_1+\dots +U\_{m}\\) can only be written in one way as a sum \\(u\_1 +\dots +u\_{m}\\) (as in, they are linearly independent?)

We use \\(\oplus\\) to represent [direct sum]({{< relref "KBhdirect_sum.md" >}}).


## additional information {#additional-information}


### a [sum of subsets]({{< relref "KBhsum_of_subsets.md" >}}) is a [direct sum]({{< relref "KBhdirect_sum.md" >}}) [IFF]({{< relref "KBhequivalence.md" >}}) there is only one way to write \\(0\\) {#a-sum-of-subsets--kbhsum-of-subsets-dot-md--is-a-direct-sum--kbhdirect-sum-dot-md--iff--kbhequivalence-dot-md--there-is-only-one-way-to-write-0}

Given \\(U\_1, \dots, U\_{m}\\) are subspaces of \\(V\\), then \\(U\_1+\dots +U\_{m}\\) is a direct sum IFF the only way to write \\(0\\) as a sum \\(u\_1 +\dots +u\_{m}\\) is by taking each element to \\(0\\).

Proof:

if---
If some \\(U\_1 + \dots +U\_{m}\\) is a [direct sum]({{< relref "KBhdirect_sum.md" >}}), definitionally there is only one way to write \\(0\\). And you can always write \\(0\\) by taking all the constituents to \\(0\\) as they are [subspace]({{< relref "KBhsubspace.md" >}})s, so the [additive identity]({{< relref "KBhadditive_identity.md" >}}) exists.

only if---
We are given that there is only one way to write \\(0\\), that:

\begin{equation}
0 = u\_1+ u\_2+ \dots+ u\_{m}: u\_j \in U\_{j}
\end{equation}

as \\(U\_{j}\\) are all subspaces, and the [additive identity]({{< relref "KBhadditive_identity.md" >}}) exists, we can say that \\(u\_1=u\_2=\dots =0\\).

Assume for the sake of contradiction that \\(U\_1 + \dots +U\_{m}\\) is not a [direct sum]({{< relref "KBhdirect_sum.md" >}}). Therefore:

\begin{equation}
\exists\ v\_1 = u\_1+u\_2+\dots + u\_{m}: u\_{j} \in U\_{j}
\end{equation}

and

\begin{equation}
\exists\ v\_1 = w\_1+w\_2+\dots + w\_{m}: w\_{j} \in U\_{j}
\end{equation}

"there are two unique representations of a [vector]({{< relref "KBhvector.md" >}}) given the [sum of subsets]({{< relref "KBhsum_of_subsets.md" >}})"

Subtracting these representations, then:

\begin{equation}
(v\_1-v\_1) = (u\_1-w\_1) + \dots +(u\_{m}-w\_{m}): u\_{j}, w\_{j} \in U\_{j}
\end{equation}

Finally, then:

\begin{equation}
0 = (u\_1-w\_1) + \dots +(u\_{m}-w\_{m}): u\_{j}, w\_{j} \in U\_{j}
\end{equation}

We have established that each slot that makes up this particular sum \\(=0\\). Therefore, \\(u\_{i}-w\_{i} = 0\\). This means $u<sub>i</sub>=w<sub>i</sub>$---there are no two unique representations of \\(v\_{1}\\). Reaching contradiction. \\(\blacksquare\\)


### a [sum of subsets]({{< relref "KBhsum_of_subsets.md" >}}) is only a [direct sum]({{< relref "KBhdirect_sum.md" >}}) [IFF]({{< relref "KBhequivalence.md" >}}) their intersection is set containing \\(0\\) {#a-sum-of-subsets--kbhsum-of-subsets-dot-md--is-only-a-direct-sum--kbhdirect-sum-dot-md--iff--kbhequivalence-dot-md--their-intersection-is-set-containing-0}

Take \\(U\\) and \\(W\\), two [subspace]({{< relref "KBhsubspace.md" >}})s  of \\(V\\). \\(U+V\\) is a [direct sum]({{< relref "KBhdirect_sum.md" >}}) [IFF]({{< relref "KBhequivalence.md" >}}) \\(U \cap W = \\{0\\}\\).

Proof:

if---
Suppose \\(U+V\\) is a [direct sum]({{< relref "KBhdirect_sum.md" >}}). \\(\forall v \in U \cap V\\), as \\(v\\) is equal to itself, we have that:

\begin{equation}
0 = v+(-v)
\end{equation}

where, \\(v\\) is in \\(U\\) and \\(-v\\) is in \\(V\\) (as both \\(U\\) and \\(V\\) are vector spaces, both would contain \\(-1v=-v\\) as we are given \\(v \in U \cap V\\) and [scalar multiplication]({{< relref "KBhscalar_multiplication.md" >}}) is closed on both.)

By the unique representation in the definition of [direct sum]({{< relref "KBhdirect_sum.md" >}})s, you have only one way to construct this expression: namely, that \\(v=0\\) as both are [vector space]({{< relref "KBhvector_space.md" >}})s so the [additive identity]({{< relref "KBhadditive_identity.md" >}}) exists on both.

Hence:

\begin{equation}
\\{0\\} = U \cap V
\end{equation}

only if---
Suppose \\(U \cap W = \\{0\\}\\). Take also \\(u \in U\\) and \\(w \in W\\); we can construct an expression:

\begin{equation}
u + w = 0
\end{equation}

If we can show that there is only one unique combination of \\(u\\) and \\(w\\) to write \\(0\\), we satisfy the previous proof and therefore \\(U+W\\) is a direct sum.

The expression above implies that \\(w\\) is the [additive inverse]({{< relref "KBhinverses.md" >}}) of \\(u\\); therefore; \\(u = -w\\). As both \\(U\\) and \\(W\\) are [vector space]({{< relref "KBhvector_space.md" >}})s, their elements all have [inverse]({{< relref "KBhinverses.md" >}})s. As \\(u\\) is the inverse of \\(w\\), and given the definition of [sum of subsets]({{< relref "KBhsum_of_subsets.md" >}}) that \\(u \in U\\) and \\(w \in W\\), \\(u\\) and \\(w\\) are both in both \\(U\\) and \\(W\\).

As the intersection of \\(U\\) and \\(V\\) is \\(0\\), \\(u=w=0\\). Therefore, there is only one unique representation of \\(0\\), namely with \\(u=0,w=0\\), making \\(U+W\\) a [direct sum]({{< relref "KBhdirect_sum.md" >}}). \\(\blacksquare\\)


### [direct sum]({{< relref "KBhdirect_sum.md" >}}) proofs are not pairwise! {#direct-sum--kbhdirect-sum-dot-md--proofs-are-not-pairwise}

Those two proofs above only deal with pairs of [sum of subsets]({{< relref "KBhsum_of_subsets.md" >}}). If you have multiple subsets, they don't apply!