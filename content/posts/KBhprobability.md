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


## marginal distribution {#marginal-distribution}

say you have two variables \\(x, y\\).

"what's the probablity of \\(x\\)"

\begin{equation}
p(x) = \int\_{y} f(X=x, y=y)
\end{equation}

a.k.a.:

\begin{equation}
p(x) = p(x|y\_1)p(y\_1) + \dots + p(x|y\_{n})y\_{n}
\end{equation}


## conditional probability {#conditional-probability}

\begin{equation}
P (E\ and\ F ) = P(E|F) \cdot P(F)
\end{equation}


## Bayes Theorem {#bayes-theorem}

\begin{align}
P(E|F) &= \frac{P(E,F)}{P(F)}  \\\\
&= \frac{P(F|E) \cdot P(E)}{P(F)} \\\\
&= \frac{P(F|E) \cdot P(E)}{P(F|E)P(E) + P(F|E^{C})P(E^{C})}
\end{align}

(note: that \\(E\\) in this case only has two condition, if you have multiple conditions)

condition on

\begin{align}
p(x|y) &= \frac{p(y|x) \cdot  p(x)}{p(y)}  \\\\
&= \frac{p(y|x) \cdot p(x)}{\sum\_{x} p(y)}
\end{align}
