+++
title = "Baysian Network"
author = ["Houjun Liu"]
draft = false
+++

A [Baysian Network]({{< relref "KBhbaysian_network.md" >}}) is composed of:

1.  a set of variables to model
2.  a directed, acyclic graph
3.  a set of [conditional probabilities]({{< relref "KBhprobability.md#conditional-probability" >}}) acting as [factor]({{< relref "KBhfactor.md" >}})s.

{{< figure src="/ox-hugo/2023-09-28_10-20-23_screenshot.png" >}}

And we can model conditional probabilities based on each value happening.


## conditional independence {#conditional-independence}

The network above has an important property: conditions \\(B\\) and \\(S\\) are independent; and conditions \\(D\\) and \\(C\\) are independent. Though they all depended on \\(E\\), each pair is [conditionally independent](#conditional-independence).

For instance, \\(D,C\\) is [independent]({{< relref "KBhprobability.md#independence" >}}) given \\(E\\), so we write:

\begin{equation}
P(D \perp C \mid E)
\end{equation}

You can show this by showing:

\begin{equation}
P(D \mid E) = P(D \mid C, E)
\end{equation}

and so forth.


### checking for conditional independence {#checking-for-conditional-independence}

Suppose we desire to know if \\((A \perp B \mid C)\\). We have to check all undirected paths from \\(A\\) to \\(B\\) exhibits [d seperation](#checking-for-conditional-independence), whose conditions are below:

A path is d-seperated if ANY of the following:

1.  the path contains a chain of nodes: \\(X \to C \to Z\\)
2.  the path contains a fork: \\(X \leftarrow C \to Z\\)
3.  the path contains a [inverted fork](#checking-for-conditional-independence): \\(X \to Y \leftarrow Z\\), where \\(Y\\) is **not** \\(C\\) and no descendent of \\(Y\\) is in \\(C\\).
