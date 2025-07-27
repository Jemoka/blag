+++
title = "knowledgebase testing page"
author = ["Houjun Liu"]
draft = false
+++

\begin{equation}
x\_1^{(j)} = x\_1^{(j-1)} + Attn\qty(x\_{k}^{(j-1)}, \forall k)
\end{equation}

\begin{equation}
At\_{x\_{1}^{(j-1)}} = \text{softmax}\qty(\frac{q\_{1} k\_{j}, \forall j}{\sqrt{d\_{\ \text{model}}}}) v\_{j}
\end{equation}

\begin{equation}
At\_{x\_{1}^{(j-1)}} = \text{softmax}\_{\text{top-k cliff}}\qty(\frac{q\_{1} k\_{j}, \forall j}{\sqrt{d\_{\ \text{model}}}}) v\_{j}
\end{equation}

trigger ci
