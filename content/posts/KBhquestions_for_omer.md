+++
title = "Questions for Omer"
author = ["Houjun Liu"]
draft = false
+++

## Week 3 {#week-3}

-   for the one to one/well-formed proofs, why are the outcomes copiable? like why is it that when I get accept on one end \\(M'\\) I must get accept on teh other end? \\(M\_{\min}\\)?
-   why does the algorthium run for at most q^2 times? wouldn't it be q^3 because for each round you have to run the update on the entire grid? (i.e. q^2 would just be one iteration over the grid, right?)


## Week 2 {#week-2}

-   is concatenation commutative? no, right? but the symbol used \\(\cdot\\) is typically communative
-   you seem to call [string]({{< relref "KBhalphabet.md" >}})s "words"; are those terms equivalent?
-   for DFAs, do all possible strings have to be specified in \\(\delta\\)? can I have a \\(\delta\\) for which \\(\delta(q\_1, \sigma)\\) is undefined? in the case of NFAs, when they are undefined, do we assume that they are defined its just the output maps to the empty set? if so, when we process that string, do we reject it immediately?
    -   in particular, for NFAs, suppose I have a NFA which ends in me arriving at an accept state with no outbound edges, but then I still have 3 more characters to process, what happens?


### clarification {#clarification}

is \\(n\\) in the last line supposed to be \\(k\\) here?

{{< figure src="/ox-hugo/2024-09-30_20-45-39_screenshot.png" >}}
