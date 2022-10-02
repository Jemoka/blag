+++
title = "linear independence"
author = ["Houjun Liu"]
draft = false
+++

A [linearly independent]({{< relref "KBhlinear_independence.md" >}}) list is a list of vectors such that there is one unique choice of scalars to be able to construct each member of their span.

Based on the same technique as in the proof that [a sum of subsets is a direct sum IFF there is only one way to write \\(0\\)]({{< relref "KBhdirect_sum.md#a-id-1b800658-2f83-4802-acfd-2d15cf5a1d74-sum-of-subsets-is-a-id-4e586014-c91f-4d52-98bb-a2fe11a75007-direct-sum-id-fddf0648-91ea-4c5b-8298-fa0a30637cb7-iff-there-is-only-one-way-to-write-0" >}}), we can show that in a [linearly independent]({{< relref "KBhlinear_independence.md" >}}) [list]({{< relref "KBhlist.md" >}}), there is (IFF) only one way to write the zero vector as a [linear combination]({{< relref "KBhlinear_combination.md" >}}) of that [list]({{< relref "KBhlist.md" >}}) of vectors ---namely, the trivial representation of taking each vector to \\(0\\). In fact, we will actually use that as the formal definition of [linear independence]({{< relref "KBhlinear_independence.md" >}}).


## constituents {#constituents}

-   A list of vectors \\(v\_1, \dots, v\_{m}\\) in \\(V\\)


## requirements {#requirements}

Formally, a [linearly independent]({{< relref "KBhlinear_independence.md" >}}) list is defined by there being only one choice of scalars \\(a\_1, \dots, a\_{m} \in \mathbb{F}\\) to write \\(0\\) as a [linear combination]({{< relref "KBhlinear_combination.md" >}}) of \\(v\_{1},\dots, v\_{m}\\): namely, by taking each \\(a\_1, \dots a\_{m}\\) to \\(0\\).

We also declare \\(()\\) to be [linearly independent]({{< relref "KBhlinear_independence.md" >}}).


## additional information {#additional-information}


### linearly dependent {#linearly-dependent}

a list is [linearly dependent](#linearly-dependent) if.... its not [linearly independent]({{< relref "KBhlinear_independence.md" >}}).

oh. my. god.

Based on the same formal definition, this means that a [linearly dependent](#linearly-dependent) list is defined by the fact that there can be more than one way of writing \\(0\\) as a [linear combination]({{< relref "KBhlinear_combination.md" >}}) of that [list]({{< relref "KBhlist.md" >}}) of [vector]({{< relref "KBhvector.md" >}})s, where one of the ways makes it so that writing \\(0\\) does not require all zero scalars.


### length of linearly-independent list \\(\leq\\) length of spanning list {#length-of-linearly-independent-list-leq-length-of-spanning-list}

A [linearly independent]({{< relref "KBhlinear_independence.md" >}}) list should be smaller or equal in length to a [spanning]({{< relref "KBhspan.md#spans" >}}) list.

The canonical proof is one by induction.

Suppose \\(u\_1, \dots u\_{m}\\) is an [linearly independent]({{< relref "KBhlinear_independence.md" >}}) list in \\(V\\). Take also a list \\(w\_1, \dots w\_{n}\\) [spans]({{< relref "KBhspan.md#spans" >}}) \\(V\\). We desire that \\(m\leq n\\).


#### base case {#base-case}

take the [spanning]({{< relref "KBhspan.md#spans" >}}) list of \\(V\\) we declared named \\(w\_1, \dots w\_{n}\\). Given it spans, adding any other vector in \\(V\\), if \\(w\_1, \dots w\_{n}\\) isn't already [linearly dependent](#linearly-dependent), will make it [linearly dependent](#linearly-dependent). This is because you can write the new vector \\(v \in V\\) which you add as a [linear combination]({{< relref "KBhlinear_combination.md" >}}) of the previous [vector]({{< relref "KBhvector.md" >}})s already as they already span \\(V\\).

By the [Linear Dependence Lemma]({{< relref "KBhlinear_dependence_lemma.md" >}}), you can remove one of the [vector]({{< relref "KBhvector.md" >}})s in the new [linearly dependent](#linearly-dependent) list while keeping the list still [spanning]({{< relref "KBhspan.md#spans" >}}) \\(V\\).


#### case number \\(j\\) {#case-number-j}