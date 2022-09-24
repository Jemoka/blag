+++
title = "NUS-MATH530 1.C Problem 23"
author = ["Houjun Liu"]
draft = false
+++

## Statement {#statement}

Suppose \\(U\_1\\), \\(U\_2\\), and \\(W\\) are subspaces of \\(V\\), such that:

\begin{equation}
\begin{cases}
V = U\_1 \oplus W\\\\
V = U\_2 \oplus W
\end{cases}
\end{equation}

Prove or give a counterexample that \\(U\_1=U\_2\\)


## Result {#result}

The statement is not true. The definition of direct sums makes it such that, \\(\forall v \in V\\), there exists a unique representation of \\(v\\) with \\(u\_{1i}+w\_{i} = v\\) for \\(u\_{1j}\in U\_1, w\_{j} \in W\\) as well as another unique representation \\(u\_{2i} + w\_{i}=v\\) for \\(u\_{2j} \in U\_{2}, w\_{j} \in W\\).

However, the definition of direct sums doesn't guarantee that the distinct unique representations are equivalent; although \\(V\\) can only be represented uniquely by EITHER a sum of \\(U\_1+W\\) or \\(U\_2+W\\), it does not mean that each \\(v \in V\\) itself has only one unique representation.


## Counterexample {#counterexample}

In constructing a counterexample, we turn to the fact that the sums of two variables creates a third free variable; therefore, we can figure two distinct ways of creating a third, final free variable that construct an equivalent space.

We begin with constructing:

\begin{equation}
U\_1= \left\\{\begin{pmatrix}
x\_1\\\y\_1\\\2y\_1
\end{pmatrix}, x\_1,y\_1 \in \mathbb{F} \right\\}
\end{equation}

By setting both free variables to \\(0\\), we construct the additive identity. Then:

\begin{equation}
\lambda \begin{pmatrix}
x\_1 \\\ y\_1 \\\ 2y\_1
\end{pmatrix} = \begin{pmatrix}
\lambda x\_1 \\\ \lambda y\_1\\\ 2(\lambda y\_1)
\end{pmatrix}
\end{equation}

by multiplication in \\(\mathbb{F}\\), scalar multiplication, commutativity, and associativity. We can show closure under addition by inheriting the operation in \\(\mathbb{F}\\) as well as applying distributive to the factor of \\(2\\).

Therefore, we show that \\(U\_1\\) is a subspace of \\(\mathbb{F}^{3}\\). Then, we construct:

\begin{equation}
U\_2=\left\\{\begin{pmatrix}
x\_1 \\\ y\_1 \\\ 0
\end{pmatrix}, x\_1,y\_1\in \mathbb{F} \right\\}
\end{equation}

We again have \\(0\\) by setting free variables to create the additive identity. Addition and scalar multiplication is closed by inheriting them from \\(\mathbb{F}\\) (and the fact that \\(0\\) is the additive inverse and therefore \\(\lambda 0 = 0\\)).

Therefore, \\(U\_2\\) is a subspace as well in \\(\mathbb{F}^{3}\\).

Finally, we have:

\begin{equation}
W = \left\\{\begin{pmatrix}
0 \\\ 0 \\\z\_1
\end{pmatrix}, z\_1\in \mathbb{F} \right\\}
\end{equation}

By setting \\(z\_1=0\\), we have the additive identity. As with above, addition and scalar multiplication is closed through inheritance and that \\(\lambda 0=0\\).

Let's construct:

\begin{equation}
U\_1+W = V
\end{equation}

We have that:

\begin{equation}
\begin{pmatrix}
x\_{1} \\\ y\_1 \\\ 2y\_1
\end{pmatrix} + \begin{pmatrix}
0 \\\ 0 \\\ z\_1
\end{pmatrix} = \begin{pmatrix}
x\_1 \\\ y\_1 \\\ 2y\_1+z\_1
\end{pmatrix}
\end{equation}

For all vectors in \\(\mathbb{F}^{3}\\), this is an equivalence with 3 free variables and 3 expressions---rendering each vector in \\(\mathbb{F}^{3}\\) to have a representation by \\(U\_1+W\\). We can see this also with the unique \\(0\\) test:

We see that for:

\begin{equation}
0 \in U\_1+W
\end{equation}

we have that:

\begin{equation}
\begin{pmatrix}
x\_{1} \\\ y\_1 \\\ 2y\_1
\end{pmatrix} + \begin{pmatrix}
0 \\\ 0 \\\ z\_1
\end{pmatrix} = \begin{pmatrix}
0 \\\ 0 \\\ 0
\end{pmatrix}
\end{equation}

where the first vector is in \\(U\_1\\) and the second is in \\(W\\). The first two expressions tell us that \\(x\_1=y\_1=0\\); the final equation requires that \\(2y\_1+z\_1=0+z\_1=0\Rightarrow z\_1=0\\) .

Therefore, the only way to write \\(0\\) is to take each element in the sum to \\(0\\), making the above a direct sum.

Therefore:

\begin{equation}
U\_1 \oplus W = V
\end{equation}

In almost the same manner, we can show that:

\begin{equation}
U\_2\oplus W = V
\end{equation}

That:

\begin{equation}
\begin{pmatrix}
x\_1\\\y\_1\\\0
\end{pmatrix}  + \begin{pmatrix}
0 \\\ 0 \\\ z\_1
\end{pmatrix} = \begin{pmatrix}
x\_1\\\y\_1\\\z\_1
\end{pmatrix}
\end{equation}

for the first vector in \\(U\_2\\), the second in \\(W\\). In fact, this is the statement made in example `1.41`.

Finally, we have that:

\begin{equation}
\begin{pmatrix}
x\_1 \\\ y\_1 \\\ 2y\_1
\end{pmatrix} \neq \begin{pmatrix}
x\_1 \\\ y\_1 \\\ 0
\end{pmatrix}
\end{equation}

\\(\forall y\_1 \neq 0\\). Therefore, \\(U\_1 \neq U\_2\\), finishing the counterexample. \\(\blacksquare\\)