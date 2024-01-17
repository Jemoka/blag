+++
title = "Point-Based Value Iteration"
author = ["Houjun Liu"]
draft = false
+++

we keep track of a bunch of [alpha vector]({{< relref "KBhalpha_vector.md" >}})s and [belief]({{< relref "KBhbelief.md" >}}) samples (which we get from [point selection]({{< relref "KBhpoint_selection.md" >}})):

\begin{equation}
\Gamma = \\{\alpha\_{1}, \dots, \alpha\_{m}\\}
\end{equation}

and

\begin{equation}
B = \\{b\_1, \dots, b\_{m}\\}
\end{equation}

To preserve the lower-boundedness of these [alpha vector]({{< relref "KBhalpha_vector.md" >}})s, one should seed the [alpha vector]({{< relref "KBhalpha_vector.md" >}})s via something like [blind lower bound]({{< relref "KBhblind_lower_bound.md" >}})

We can estimate our [utility]({{< relref "KBhutility_theory.md" >}}) function at any belief:

\begin{equation}
U^{\Gamma}(b) = \max\_{\alpha \in \Gamma} \alpha^{\top}b
\end{equation}

We now define a function named `backup`:

\begin{equation}
\Gamma^{t+1} = \\{backup(\Gamma, b) | b \in B\\}
\end{equation}

where:

\begin{equation}
\alpha \leftarrow backup(\Gamma, b)
\end{equation}

therefore we call backup on each \\(b\\).

---

`backup`, given \\(\Gamma\\) and \\(b\\):

\begin{equation}
\alpha = \arg\max\_{\alpha\_{a}} \alpha\_{a}^{\top} b
\end{equation}

where, each \\(\alpha\_{a}\\) is defined as:

\begin{equation}
\alpha\_{a}(s) = R(s,a) + \gamma \sum\_{s',o}^{} O(o|a,s')T(s'|s,a)\alpha\_{a,o} (s')
\end{equation}

which we compute over all actions and observations \\(a,o\\) given our \\(\Gamma\\):

\begin{equation}
\alpha\_{a,o} = \arg\max\_{\alpha \in \Gamma} = \alpha^{\top} update(b,a,o)
\end{equation}


## Randomized [PBVI]({{< relref "KBhpoint_based_value_iteration.md" >}}) {#randomized-pbvi--kbhpoint-based-value-iteration-dot-md}

At every point, we drop the contents of the set \\(B\\) which had an improvement and come up with a piecewise series of [alpha vector]({{< relref "KBhalpha_vector.md" >}})s which had an improvement over each \\(b\\).


### Perseus backup {#perseus-backup}

sample a belief point \\(b\\) uniformly at random, and compute \\(\alpha' = backup(b)\\). Once you do, check the value given to each of the beliefs; if it has improved, we don't need to run backup for that belief anymore. If there are no improvement, don't add \\(\alpha\\) into the action set.

{{< figure src="/ox-hugo/2024-01-16_10-00-40_screenshot.png" >}}
