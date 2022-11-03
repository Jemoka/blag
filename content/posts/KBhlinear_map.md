+++
title = "Linear Map"
author = ["Houjun Liu"]
draft = false
+++

A [Linear Map]({{< relref "KBhlinear_map.md" >}}) (a.k.a. [Linear Transformation]({{< relref "KBhlinear_map.md" >}})) is a [function]({{< relref "KBhfunction.md" >}}) which maps elements between two [vector space]({{< relref "KBhvector_space.md" >}}) that follows linear properties.


## constituents {#constituents}

-   [vector space]({{< relref "KBhvector_space.md" >}})s \\(V\\) and \\(W\\) (they <span class="underline">don't</span> have to be [subspace]({{< relref "KBhsubspace.md" >}})s)
-   A [function]({{< relref "KBhfunction.md" >}}) \\(T: V \to W\\)


## requirements {#requirements}

\\(T\\) is considered a [Linear Map]({{< relref "KBhlinear_map.md" >}}) if it follows...


### additivity {#additivity}

\begin{equation}
T(u+v) = Tu+Tv,\ \forall u,v \in V
\end{equation}


### [homogeneity]({{< relref "KBhhomogeneity.md" >}}) {#homogeneity--kbhhomogeneity-dot-md}

\begin{equation}
T(\lambda v) = \lambda (Tv),\ \forall \lambda \in \mathbb{F}, v \in V
\end{equation}


## additional information {#additional-information}


### note on notation {#note-on-notation}

The "application" of a [Linear Map]({{< relref "KBhlinear_map.md" >}}) \\(T\\) on a vector \\(V\\) is written as:

\begin{equation}
\begin{cases}
Tv \\\\
T(v)
\end{cases}
\end{equation}

both are acceptable.


### \\(\mathcal{L}(V,W)\\) {#mathcal-l--v-w}

The set of all [Linear Map]({{< relref "KBhlinear_map.md" >}})s from \\(V\\) to \\(W\\) is denoted as \\(\mathcal{L}(V,W)\\).


### some fun linear maps {#some-fun-linear-maps}


#### [zero]({{< relref "KBhzero.md" >}}) {#zero--kbhzero-dot-md}

There is, of course, the [Linear Map]({{< relref "KBhlinear_map.md" >}}) that maps everything to the \\(0\\) --- as the [zero]({{< relref "KBhzero.md" >}}) exists in all [vector space]({{< relref "KBhvector_space.md" >}})s.

That is:

\begin{equation}
0 \in \mathcal{L}(V,W) \implies 0v = 0, v\in V
\end{equation}

<!--list-separator-->

-  additivity

    Let \\(v\_1+v\_2= v \in V\\).

    \begin{equation}
    0(v\_1+v\_2) = 0(v) = 0 = 0+0 = 0v\_1+0v\_2
    \end{equation}

<!--list-separator-->

-  [homogeneity]({{< relref "KBhhomogeneity.md" >}})

    Let \\(\lambda v = u \in V\\).

    \begin{equation}
    0(\lambda v) = 0(u) = 0 = \lambda 0 = \lambda 0v
    \end{equation}


#### [identity]({{< relref "KBhidentity.md" >}}) {#identity--kbhidentity-dot-md}

Another classic. \\(I\\), the [identity]({{< relref "KBhidentity.md" >}}) map, is denoted as (for some \\(v \in V\\) and \\(I \in \mathcal{L}(V,V)\\)):

\begin{equation}
Iv = v
\end{equation}

i.e. it does nothing

<!--list-separator-->

-  additivity

    Let \\(v\_1,v\_2 \in V\\):

    \begin{equation}
    I(v\_1+v\_2) = v\_1+v\_2 = Iv1+Iv2
    \end{equation}

<!--list-separator-->

-  [homogeneity]({{< relref "KBhhomogeneity.md" >}})

    \begin{equation}
    I(\lambda v) = \lambda v = \lambda Iv
    \end{equation}


#### any map from \\(\mathbb{F}^{n}\\) to \\(\mathbb{F}^{m}\\) {#any-map-from-mathbb-f-n-to-mathbb-f-m}

turns out any map that follows a specific pattern of [polynomial]({{< relref "KBhpolynomial.md" >}})s between two [vector space]({{< relref "KBhvector_space.md" >}})s are [Linear Map]({{< relref "KBhlinear_map.md" >}})s.

Define some two [vector space]({{< relref "KBhvector_space.md" >}})s \\(\mathbb{F}^{n}\\) and \\(\mathbb{F}^{m}\\), some set of scalars \\(a\_{jk} \in \mathbb{F}: j=1, \dots m; k=1, \dots n\\).

We construct \\(T \in \mathcal{L}(\mathbb{F}^{n}, \mathbb{F}^{m})\\) by: \\(T(x\_1, \dots x\_{n}) = a\_{11} x\_1+ \cdots + a\_{1n} x\_{n}, \dots, a\_{m1} x\_1 + \cdots + a\_{mn} x\_{n}\\) (i.e. a combination of [linear combination]({{< relref "KBhlinear_combination.md" >}})s).

<!--list-separator-->

-  additivity

    Let \\(x,y \in \mathbb{F}^{n}\\), with \\(x\_{j}\\) being each [coordinate]({{< relref "KBhlists_over_fields.md" >}}) of \\(x\\) and the same goes for \\(y\\).

    \begin{align}
    T((x\_1, \dots x\_{n}) + (y\_1, \dots y\_{n}))) &= T(x\_1+y\_1 \dots x\_{n}+y\_{n})  \\\\
    &= a\_{11}(x\_1+y\_1) + \cdots, \dots, \cdots + a\_{mn} (x\_{n} + y\_{n})  \\\\
    &= (a\_{11}x\_1 + a\_{11}y\_{1}) + \cdots, \dots, \cdots + (a\_{mn} x\_{n} + a\_{mn} y\_{n})  \\\\
    &= (a\_{11}x\_1 + \cdots) + (a\_{11}y\_{1}+ \cdots ), \dots, (\cdots + a\_{mn}x\_n) + (\cdots + a\_{mn}y\_{n}) \\\\
    &= ((a\_{11}x\_1 + \cdots), \dots, (\cdots + a\_{mn}x\_n)) =  ((a\_{11}y\_{1}+ \cdots ), \dots,(\cdots + a\_{mn}y\_{n}))   \\\\
    &= T (x\_1, \dots, x\_{n}) + T (y\_1, \dots, x\_{n})
    \end{align}

<!--list-separator-->

-  [homogeneity]({{< relref "KBhhomogeneity.md" >}})

    Proof left to the reader. Pretty much just expand and more algebra.