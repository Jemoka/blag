+++
title = "Questions for Omer"
author = ["Houjun Liu"]
draft = false
+++

## Week 3 {#week-3}


## Week 2 {#week-2}

-   is concatenation commutative? no, right? but the symbol used \\(\cdot\\) is typically communative
-   you seem to call [string]({{< relref "KBhalphabet.md" >}})s "words"; are those terms equivalent?
-   for DFAs, do all possible strings have to be specified in \\(\delta\\)? can I have a \\(\delta\\) for which \\(\delta(q\_1, \sigma)\\) is undefined? in the case of NFAs, when they are undefined, do we assume that they are defined its just the output maps to the empty set? if so, when we process that string, do we reject it immediately?
    -   in particular, for NFAs, suppose I have a NFA which ends in me arriving at an accept state with no outbound edges, but then I still have 3 more characters to process, what happens?


### clarification {#clarification}

is \\(n\\) in the last line supposed to be \\(k\\) here?

{{< figure src="/ox-hugo/2024-09-30_20-45-39_screenshot.png" >}}
