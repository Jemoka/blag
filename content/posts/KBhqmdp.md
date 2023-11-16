+++
title = "QMDP"
author = ["Houjun Liu"]
draft = false
+++

One [alpha vector]({{< relref "KBhalpha_vector.md" >}}) per action:

\begin{equation}
\alpha^{(k+1)}\_{a}(s) = R(s,a) + \gamma \sum\_{s'}^{}T(s'|s,a) \max\_{a'} \alpha^{(k)}\_{a'} (s')
\end{equation}

This is going to give you a set of [alpha vector]({{< relref "KBhalpha_vector.md" >}})s, one corresponding to each action.

time complexity: \\(O(|S|^{2}|A|^{2})\\)
