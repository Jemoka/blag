+++
title = "Streaming Algorithms"
author = ["Houjun Liu"]
draft = false
+++

[Streaming Algorithms]({{< relref "KBhstreaming_algorithms.md" >}}) are computation that grow with the size of the input at a "small"(?) rate. The memory of these systems is not large---they grow roughly logarithmically or poly-logorithmically against the size of the system.

Every so often as we process our system, we have to output a symbol that tells us about the stream we saw so far.


## streaming vs FA {#streaming-vs-fa}

[Streaming Algorithms]({{< relref "KBhstreaming_algorithms.md" >}}) is a superset of [DFA]({{< relref "KBhdeterministic_finite_automata.md" >}})s: things that [Streaming Algorithms]({{< relref "KBhstreaming_algorithms.md" >}}) can't do can't also be done with [DFA]({{< relref "KBhdeterministic_finite_automata.md" >}})s. Their memory doesn't grow too large against the sizes of strings.


## [communication]({{< relref "KBhsu_engr76_may072024.md#communication" >}}) {#communication--kbhsu-engr76-may072024-dot-md}

we lastly consider [communication]({{< relref "KBhsu_engr76_may072024.md#communication" >}}), as a limited-resource thing that [Streaming Algorithms]({{< relref "KBhstreaming_algorithms.md" >}}) can solve. we also consider impossibility results from [communication]({{< relref "KBhsu_engr76_may072024.md#communication" >}}) to give us impossibilities with [Streaming Algorithms]({{< relref "KBhstreaming_algorithms.md" >}}).


## examples {#examples}


### ones vs zeros {#ones-vs-zeros}

a streaming algorithm to measure if a [language]({{< relref "KBhalphabet.md" >}}) has more \\(1\\) than \\(0\\).

we can do this by tracking \\(B\\) a majority bit (currently what's winning), and \\(C\\) how many more times that we saw \\(B\\) than \\(\not B\\).

(we do this instead of two counters because storage efficiency).
