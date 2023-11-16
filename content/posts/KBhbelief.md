+++
title = "belief"
author = ["Houjun Liu"]
draft = false
+++

[belief]({{< relref "KBhbelief.md" >}}) is a [probability distribution]({{< relref "KBhprobability_distributions.md" >}}) over your states.

\begin{equation}
b \leftarrow update(b,a,o)
\end{equation}

we want to create a [Baysian Network]({{< relref "KBhbaysian_network.md" >}}) to represent our situation. For instance, say for a speech recognition task:

if we have state certainty, the states "lonely, Starbucks, lovers" converges to:

{{< figure src="/ox-hugo/2023-11-09_09-50-38_screenshot.png" >}}

This is a [HMM]({{< relref "KBhhidden_markov_model.md" >}})! The only difference between something like this and a normal [Markov Decision Process]({{< relref "KBhmarkov_decision_process.md" >}}) is that each state hangs an observation:

{{< figure src="/ox-hugo/2023-11-09_09-52-58_screenshot.png" >}}

which for us is the sound waves. This means that we describe a [POMDP]({{< relref "KBhpartially_observable_markov_decision_process.md" >}}) with three expressions:

-   \\(T(s'|s,a)\\)
-   \\(R(s,a)\\)

this is just one more expression than an [MDP]({{< relref "KBhmarkov_decision_process.md" >}}); we take need the third expression because we may not know \\(s\\) directly, because we only get to observe \\(O\\) and not \\(s\\).


## observation model {#observation-model}

\\(O(o|a,s')\\) is a model for what observations we may get if we are in a particular state/action.


### error model {#error-model}

there is some model which is a probability distribution over the state given observation:

{{< figure src="/ox-hugo/2023-11-09_10-01-10_screenshot.png" >}}

let orange \\(d\\) be state, the green would be the [error model](#error-model)


### [filters]({{< relref "KBhfilters.md" >}}) {#filters--kbhfilters-dot-md}

[filters]({{< relref "KBhfilters.md" >}}) are how [belief]({{< relref "KBhbelief.md" >}})s are updated from observation. "we want to perform localization"
