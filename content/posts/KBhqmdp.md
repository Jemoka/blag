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

you will note we don't ever actually use anything partially-observable in this. Once we get the [alpha vector]({{< relref "KBhalpha_vector.md" >}}), we need to use [one-step lookahead in POMDP]({{< relref "KBhalpha_vector.md#one-step-lookahead-in-pomdp" >}}) (which does use transitions) to actually turn this [alpha vector]({{< relref "KBhalpha_vector.md" >}}) into a policy, which then does create
