+++
title = "probability"
author = ["Houjun Liu"]
draft = false
+++

[probability]({{< relref "KBhprobability.md" >}}) of an event is the proportion of times the event occurs in many repeated trials.


## axiom of probability {#axiom-of-probability}

-   \\(0 \leq P(E) \leq 1\\)
-   \\(P(S) = 1\\), where \\(S\\) is the sample space
-   if \\(E\\) and \\(F\\) are mutually exclusive, \\(P(E) + P(F) = P(E \cup F)\\)

---

This results in three correlaries:

-   \\(P(E^{C}) = 1- P(E)\\)
-   \\(P(E \cup F) = P(E) + P(F) - P(E \cap F)\\)
-   if \\(E \subset F\\), \\(P(E) \leq  P(F)\\)


## conditional probability {#conditional-probability}

\begin{equation}
P (X, Y) = P(X\mid Y) \cdot P(Y)
\end{equation}

In this case, we call \\(Y\\) the "evidence". this allows us to find "what is the chance of \\(x\\) given \\(y\\)".

We can continue this to develop the [probability chain rule](#conditional-probability):

\begin{equation}
P(A\_1, A\_2 \dots, A\_{n}) = P(A\_{n} \mid A\_1, A\_2 \dots A\_{n-1})P(A\_1, A\_2 \dots A\_{n-1})
\end{equation}

and so on.

Now:

\begin{equation}
\sum\_{x}^{} p(x \mid y) = 1
\end{equation}

because this is **still** a probability over \\(x\\).


## law of total probability {#law-of-total-probability}

say you have two variables \\(x, y\\).

"what's the probablity of \\(x\\)"

\begin{equation}
P(x) = \sum\_{Y} P(x,y)
\end{equation}

a.k.a.:

\begin{equation}
p(x) = p(x|y\_1)p(y\_1) + \dots + p(x|y\_{n})y\_{n}
\end{equation}

by applying [conditional probability](#conditional-probability) formula upon each term


## Bayes rule {#bayes-rule}

See: [Bayes Theorem]({{< relref "KBhbayes_theorem.md" >}})


## independence {#independence}

If \\(X\\) and \\(Y\\) are independent (written as \\(X \perp Y\\)), we know that \\(P(x,y) = P(x)P(y)\\) for all \\(x, y\\).
