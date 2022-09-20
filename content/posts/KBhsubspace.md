+++
title = "subspace"
author = ["Houjun Liu"]
draft = false
+++

A [subspace]({{< relref "KBhsubspace.md" >}}) is a [vector space]({{< relref "KBhvector_space.md" >}}) which is a subset of a [vector space]({{< relref "KBhvector_space.md" >}}), using the same [addition]({{< relref "KBhadding.md" >}}) and [scalar multiplication]({{< relref "KBhscalar_multiplication.md" >}}) operations. Intuitively, a [subspace]({{< relref "KBhsubspace.md" >}}) of \\(\mathbb{R}^{2}\\) are all the lines through the origin as well as \\(\\{0\\}\\); a [subspace]({{< relref "KBhsubspace.md" >}}) of \\(\mathbb{R}^{3}\\) are all the planes through the origin as well as \\(\\{0\\}\\), etc. etc.


## constituents {#constituents}

-   [vector space]({{< relref "KBhvector_space.md" >}}) \\(V\\)
-   A subset \\(U \subset V\\) which is itself a [vector space]({{< relref "KBhvector_space.md" >}})


## requirements {#requirements}

You check if \\(U\\) is a [subspace]({{< relref "KBhsubspace.md" >}}) of \\(V\\) by checking [IFF]({{< relref "KBhequivalence.md" >}}) the following three conditions:

-   [additive identity]({{< relref "KBhadditive_identity.md" >}}): \\(0 \in U\\)
-   [closed]({{< relref "KBhclosed.md" >}}) under the same [addition]({{< relref "KBhadding.md" >}}) as in \\(V\\): \\(u,w \in U: u+w \in U\\)
-   [closed]({{< relref "KBhclosed.md" >}}) under [scalar multiplication]({{< relref "KBhscalar_multiplication.md" >}}) as in \\(V\\): \\(a \in \mathbb{F}\\) and \\(u \in U\\) means \\(au \in U\\)

Yes, by only checking three you can prove everything else.


## additional information {#additional-information}


### simplified check for subspace {#simplified-check-for-subspace}


#### [commutativity]({{< relref "KBhcommutivity.md" >}}), [associativity]({{< relref "KBhassociative.md" >}}), [distributivity]({{< relref "KBhdistributivity.md" >}}) {#commutativity--kbhcommutivity-dot-md--associativity--kbhassociative-dot-md--distributivity--kbhdistributivity-dot-md}

These properties are inherited from \\(V\\) as they hold for every element in \\(V\\) so they will hold for \\(U \subset V\\).


#### [additive inverse]({{< relref "KBhinverses.md" >}}) {#additive-inverse--kbhinverses-dot-md}

Because [scalar multiplication]({{< relref "KBhscalar_multiplication.md" >}}) is defined, and we proved in [Axler 1.B]({{< relref "KBhaxler_1_b.md" >}}) that \\(-1v=-v\\) (proof: \\(v+(-1)v = (1+(-1))v = 0v = 0\\)).


#### [multiplicative identity]({{< relref "KBhmultiplicative_identity.md" >}}) {#multiplicative-identity--kbhmultiplicative-identity-dot-md}

Its still \\(1\\).

\\(\blacksquare\\)