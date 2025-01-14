+++
title = "STCONN"
author = ["Houjun Liu"]
draft = false
+++

\begin{equation}
\text{STCONN} = \qty {\langle G, S, t \rangle : \text{$\exists^{?}$ a path from s $\to$ t $\in$ G}}
\end{equation}

we solve this with BFS or DFS; but those algorithms' working sets require linear space. Turns out, we can solve this algorithm \\(\text{STCONN} \in \text{SPACE}\qty(\log^{2}\qty(n))\\)

-   for **directed** \\(G\\), we are not sure if its in [L]({{< relref "KBhspace_class_l.md" >}}).
-   for **undirected** \\(G\\), Omer showed that its in [L]({{< relref "KBhspace_class_l.md" >}})
