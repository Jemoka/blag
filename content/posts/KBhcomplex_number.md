+++
title = "complex number"
author = ["Houjun Liu"]
draft = false
+++

A [complex number]({{< relref "KBhcomplex_number.md" >}}) is an order pair of two elements \\((a,b)\\) where \\(a,b\in \mathbb{R}\\). They are usually written as \\(a+bi\\).

Formally---

\begin{equation}
    \mathbb{C} = \left\\{a+bi\ \middle |\ a,b \in \mathbb{R} \right\\}
\end{equation}


## addition and multiplication of [complex number]({{< relref "KBhcomplex_number.md" >}})s {#addition-and-multiplication-of-complex-number--kbhcomplex-number-dot-md--s}

\begin{align}
    (a+bi) + (c+di) &= (a+c)+(b+d)i \\\\
(a+bi)(c+di) &= (ac-bd)+(ad+bc)i
\end{align}

where, \\(a,b,c,d\in\mathbb{R}\\).


## properties of complex arithmetic {#properties-of-complex-arithmetic}

there are 6. For all statements below, we assume \\(\alpha = a+bi\\) and \\(\beta=c+di\\), \\(\lambda = e+fi\\), where \\(a,b,c,d,e,f \in \mathbb{R}\\) and therefore \\(\alpha, \beta,\lambda \in \mathbb{C}\\).


### [commutativity]({{< relref "KBhcommutivity.md" >}}) {#commutativity--kbhcommutivity-dot-md}

\\(\alpha + \beta = \beta + \alpha\\) and \\(\alpha\beta = \beta\alpha\\) for all \\(\alpha,\beta \in \mathbb{C}\\).


#### Proof {#proof}


#### Insights {#insights}

This proof has the feature of combining, operating (commuting, here), the splitting.


### [associativity]({{< relref "KBhassociative.md" >}}) {#associativity--kbhassociative-dot-md}

\\((\alpha +\beta) + \lambda = \alpha + (\beta +\lambda)\\) and \\((\alpha\beta) \lambda = (\alpha \beta) \lambda\\)


#### Proof {#proof}

Same trick as last time


### [identities]({{< relref "KBhidentity.md" >}}) {#identities--kbhidentity-dot-md}

\\(\lambda + 0 = 0\\), \\(\lambda 1 = \lambda\\)


### additive [inverse]({{< relref "KBhinverses.md" >}}) {#additive-inverse--kbhinverses-dot-md}

\\(\forall \alpha \in \mathbb{C}, \exists !\ \beta \in \mathbb{C}: \alpha + \beta = 0\\)


#### Proof {#proof}

Take a number \\(\alpha \in \mathbb{C}\\). We have that \\(\alpha\\) would then by definition be some \\((a+bi)\\) where \\(a,b \in \mathbb{R}\\).

Take some \\(\beta\\) for which \\(\alpha + \beta = 0\\); by definition we again have \\(\beta\\) equals some \\((c+di)\\) where \\(c,d \in \mathbb{R}\\).

-   \\(\because \alpha + \beta =0\\), \\(\therefore (a+bi) + (c+di) = 0\\).
-   \\(\therefore (a+c) + (b+d)i = 0\\)
-   \\(\therefore a+c = 0, b+d = 0\\)
-   \\(\therefore c = -a, d = -b\\)

We have created a unique definition of \\(c,d\\) and therefore \\(\beta\\) given any \\(\alpha\\), implying both uniqueness and existence.

<!--list-separator-->

-  Insights

    In this case, the cool insight is the case-then-definition pattern. We are taking a single case \\(\alpha\\), manipulating it, and wrote the result we want in terms of the constituents of \\(\alpha\\). This creates both an existence and uniqueness proof.