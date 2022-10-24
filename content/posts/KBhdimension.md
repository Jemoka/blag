+++
title = "dimension"
author = ["Houjun Liu"]
draft = false
+++

The [dimension]({{< relref "KBhdimension.md" >}}) of a [vector space]({{< relref "KBhvector_space.md" >}}) is the length of any [basis]({{< relref "KBhbasis.md" >}}) in the [vector space]({{< relref "KBhvector_space.md" >}}). It is denoted as \\(\dim V\\).


## additional information {#additional-information}

See also [finite-dimensional vector space]({{< relref "KBhfinite_dimensional_vector_space.md" >}}) and [infinite-demensional vector space]({{< relref "KBhfinite_dimensional_vector_space.md" >}})


### dimension of subspace is smaller or equal to that of its parent {#dimension-of-subspace-is-smaller-or-equal-to-that-of-its-parent}

If we have a [finite-dimensional]({{< relref "KBhfinite_dimensional_vector_space.md" >}}) \\(V\\) and a [subspace]({{< relref "KBhsubspace.md" >}}) thereof \\(U\\), then \\(\dim U \leq \dim V\\).

Firstly, the [every subspace of a finite-dimensional vector space is a finite-dimensional vector space]({{< relref "KBhsubspace.md#finite-dimensional-subspaces" >}}) is itself a [finite-dimensional vector space]({{< relref "KBhfinite_dimensional_vector_space.md" >}}). Therefore, it has a finite dimension.

Then, we will simply think of the [basis]({{< relref "KBhbasis.md" >}}) of \\(U\\) as an [linearly independent]({{< relref "KBhlinear_independence.md" >}}) list in \\(V\\); and of course, the [basis]({{< relref "KBhbasis.md" >}}) of \\(V\\) [spans]({{< relref "KBhspan.md#spans" >}}) \\(V\\). As [length of linearly-independent list \\(\leq\\) length of spanning list]({{< relref "KBhlinear_independence.md#length-of-linearly-independent-list-leq-length-of-spanning-list" >}}), we have that length of [basis]({{< relref "KBhbasis.md" >}}) of \\(U \leq\\) length of [basis]({{< relref "KBhbasis.md" >}}) of \\(V\\).

This makes \\(\dim U \leq \dim V\\).