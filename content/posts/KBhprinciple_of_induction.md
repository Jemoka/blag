+++
title = "principle of induction"
author = ["Houjun Liu"]
draft = false
+++

Recall that \\(\mathbb{Z}\\) are the integers, so \\(\\{..., -2,-1,0,1,2,...\\}\\), and \\(\mathbb{N}\\) are the natural numbers, so \\(\\{0,1,2, \dots\\}\\).

The following three axioms are equivalent statements:


## Statements {#statements}


### well-ordering principle {#well-ordering-principle}

Every nonempty subset \\(S\\) of \\(\mathbb{N}\\) has a smallest element.


### standard induction {#standard-induction}

Let \\(S \subset \mathbb{N}\\), such that \\(0 \in S\\). Furthermore, let, for each \\(n \in \mathbb{N}\\), \\(n \in S\\) implies \\(n+1 \in S\\) (let some element \\(n\\) of \\(\mathbb{N}\\) being in \\(S\\) imply that \\(n+1\\) will also be in \\(S\\)).

By induction, we have that \\(S=\mathbb{N}\\).


### strong induction {#strong-induction}

Let \\(S \subset \mathbb{N}\\), such that \\(0 \in S\\). Furthermore, let, for each \\(n \in \mathbb{N}\\), \\(\\{0,1, \dots, n\\} \in S\\) implies \\(n+1 \in S\\) (let every element of \\(\mathbb{N}\\) up to \\(n\\) being in \\(S\\) imply that the next element will also be in \\(S\\)).

By induction, we have that \\(S=\mathbb{N}\\).


## Proof that they are the same statement {#proof-that-they-are-the-same-statement}
