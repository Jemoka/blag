+++
title = "sum of subsets"
author = ["Houjun Liu"]
draft = false
+++

The [sum of subsets]({{< relref "KBhsum_of_subsets.md" >}}) is the definition of [addition]({{< relref "KBhadding.md" >}}) upon two subsets.

Apparently, the unions of subsets are almost never [subspace]({{< relref "KBhsubspace.md" >}})s (they don't produce linearity?) Therefore, we like to work with [sum of subsets]({{< relref "KBhsum_of_subsets.md" >}}) more.

Remember this has ****arbitrarily many things!!**** as a part of the content. When defining, remember to open that possibility.


## constituents {#constituents}

Sub-****sets**** of \\(V\\) named \\(U\_1, U\_2, \dots, U\_{m}\\)


## requirements {#requirements}

The [sum of subsets]({{< relref "KBhsum_of_subsets.md" >}}) \\(U\_1, \dots, U\_{m}\\) is defined as:

\begin{equation}
U\_1, \dots, U\_{m} = \\{u\_1+\dots+u\_{m}: u\_1\in U\_1, \dots, u\_{m} \in U\_{m}\\}
\end{equation}

"all elements formed by taking one element from each and add it."


## additional information {#additional-information}


### sum of subspaces is the smallest subspace with both subspaces {#sum-of-subspaces-is-the-smallest-subspace-with-both-subspaces}

Suppose \\(U\_1, \dots U\_{m}\\) are [subspace]({{< relref "KBhsubspace.md" >}})s of \\(V\\), then \\(U\_1+\dots +U\_{m}\\) is the smallest subspace of \\(V\\) containing \\(U\_1, \dots, U\_{m}\\).

Proof:

Is a subspace---

-   clearly \\(0\\) is in the sum. (taking \\(0\\) from each subspace and adding)
-   [addition]({{< relref "KBhadding.md" >}}) and [scalar multiplication]({{< relref "KBhscalar_multiplication.md" >}}) inherits (closed in each subspace, then, reapplying definition of [sum of subsets]({{< relref "KBhsum_of_subsets.md" >}}))

Smallest containing subspace---

Because a subspace is [closed]({{< relref "KBhclosed.md" >}}) under [addition]({{< relref "KBhadding.md" >}}), if a [subspace]({{< relref "KBhsubspace.md" >}}) contains \\(U\_{1}, \dots, U\_{m}\\) you can always add each of the constituent elements manually to form every \\(U\_1+\dots+U\_{m}\\).

Conversely, the [subspace]({{< relref "KBhsubspace.md" >}}) \\(U\_1+\dots +U\_{m}\\) should contain \\(U\_1, \dots, U\_{m}\\) by simply setting the coefficients except for the one you are interested in to \\(0\\).

Therefore, as both subsets contain each other; they are equivalent.


### [dimension]({{< relref "KBhdimension.md" >}}) of sums {#dimension--kbhdimension-dot-md--of-sums}

Let there be two [finite-dimensional subspaces]({{< relref "KBhsubspace.md#finite-dimensional-subspaces" >}}): \\(U\_1\\) and \\(U\_2\\). Then:

\begin{equation}
\dim(U\_1+U\_2)=\dim U\_1+\dim U\_{2} - \dim(U\_1 \cap U\_2)
\end{equation}

Proof:

let us form an [basis]({{< relref "KBhbasis.md" >}}) of \\(U\_1 \cap U\_{2}\\): \\(u\_1, \dots u\_{m}\\); this indicates to us that \\(\dim(U\_1 \cap U\_{2}) = m\\). Being a [basis]({{< relref "KBhbasis.md" >}}) of \\(U\_1 \cap U\_{2}\\), it is [linearly independent]({{< relref "KBhlinear_independence.md" >}}) in \\(U\_1\\) (which forms a part of the intersection.

As any [linearly independent]({{< relref "KBhlinear_independence.md" >}}) list (in this case, in \\(U\_1\\)) can be [expanded into a basis]({{< relref "KBhbasis.md#a-id-45384b28-f1e3-4fb1-aeb2-21c875834744-linearly-independent-list-expends-to-a-id-f88170b1-08b5-48a7-a7b5-1ace768e7b28-basis" >}}) of \\(U\_1\\). Let's say by some vectors \\(v\_1 \dots v\_{j}\\). Therefore, we have that:

The new basis is \\(u\_1, \dots u\_{m}, v\_1, \dots v\_{m}\\), and so:

\begin{equation}
\dim U\_1 = m+j
\end{equation}

By the same token, let's just say some \\(w\_1, \dots w\_{k}\\) can be used to extend \\(u\_1, \dots  u\_{m}\\) into a [basis]({{< relref "KBhbasis.md" >}}) of \\(U\_2\\) (as \\(u\_1, \dots u\_{m}\\) is _also_ an [linearly independent]({{< relref "KBhlinear_independence.md" >}}) list in \\(U\_2\\)). So:

\begin{equation}
\dim U\_{2} = m+k
\end{equation}

We desire that \\(\dim(U\_1+U\_2)=\dim U\_1+\dim U\_{2} - \dim(U\_1 \cap U\_2)\\). Having constructed all three of the elements, we desire to find a list that is length \\((m+j)+(m+k)-m = m+j+k\\) that forms a [basis]({{< relref "KBhbasis.md" >}}) of \\(U\_1+U\_2\\), which will complete the proof.

Conveniently, \\(u\_1, \dots u\_{m}, v\_1, \dots v\_{j}, w\_1, \dots w\_{k}\\) nicely is list of length \\(m+j+k\\). Therefore, we desire that that list forms a [basis]({{< relref "KBhbasis.md" >}}) of \\(U\_1+U\_{2}\\).

As pairwise in this list are the [basis]({{< relref "KBhbasis.md" >}}) of \\(U\_1\\) and \\(U\_2\\), this list can [span]({{< relref "KBhspan.md" >}}) both \\(U\_1\\) and \\(U\_2\\) (just [zero]({{< relref "KBhzero.md" >}}) out the "other" sublist---zero \\(w\\) if desiring a basis of \\(U\_1\\), \\(v\\) if \\(U\_2\\) ---and you have a [basis]({{< relref "KBhbasis.md" >}}) of each space. As \\(U\_1+U\_2\\) requires plucking a member from each and adding, as this [list]({{< relref "KBhlist.md" >}}) [spans]({{< relref "KBhspan.md#spans" >}}) \\(U\_1\\) and \\(U\_2\\) separately (again, it forms the basis of the each space), we can just use this list to construct individually each component of \\(U\_1+U\_2\\) then adding it together. Hence, that long combo list [spans]({{< relref "KBhspan.md#spans" >}}) \\(U\_1+U\_2\\).