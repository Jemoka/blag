+++
title = "value of information"
author = ["Houjun Liu"]
draft = false
+++

The [value of information]({{< relref "KBhvalue_of_information.md" >}}) a measure for how much observing an additional variable is expected to **increase** our [utility]({{< relref "KBhutility_theory.md" >}}).

[VOI]({{< relref "KBhvalue_of_information.md" >}}) can never be negative, and does not take into account the **COST** of performing the observation.

Intuition: "[VOI]({{< relref "KBhvalue_of_information.md" >}}) is a measure of how much observing something changes your action if you are a rational agent."

---

let \\(o\\) be an observation, and \\(O'\\) be a possible observation to run which yield \\(o'\_{j}\\) different outcomes:

\begin{equation}
VOI(O'|o) = (\sum\_{o'} P(o'|o) EU(o, o')) - EU(o)
\end{equation}

"the value of an observation is the sum of the [MEU]({{< relref "KBhutility_theory.md#maximum-expected-utility-principle" >}}) of each possible outcome from that new observation, time their probability of occurance, subtracted by the [MEU]({{< relref "KBhutility_theory.md#maximum-expected-utility-principle" >}}) of the current observation"
