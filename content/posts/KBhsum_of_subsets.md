+++
title = "sum of subsets"
author = ["Houjun Liu"]
draft = false
+++

The [sum of subsets]({{< relref "KBhsum_of_subsets.md" >}}) is the definition of [addition]({{< relref "KBhadding.md" >}}) upon two subsets.

Apparently, the unions of subsets are almost never [subspace]({{< relref "KBhsubspace.md" >}})s (they don't produce linearity?) Therefore, we like to work with [sum of subsets]({{< relref "KBhsum_of_subsets.md" >}}) more.


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