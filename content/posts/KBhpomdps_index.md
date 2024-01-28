+++
title = "POMDPs Index"
author = ["Houjun Liu"]
draft = false
+++

a class about [POMDP]({{< relref "KBhpartially_observable_markov_decision_process.md" >}})s

| Theme           | Topics                                                                                                                                     |
|-----------------|--------------------------------------------------------------------------------------------------------------------------------------------|
| Robot dogs      | [NeBula]({{< relref "KBhnebula.md" >}}), [AISR NeBula]({{< relref "KBhnebula.md#aisr-nebula--kbhnebula-dot-md" >}})                        |
| Applications    | [POMDSoar]({{< relref "KBhkolobov_2018.md#pomdsoar" >}}),                                                                                  |
| Offline Solvers | [PBVI]({{< relref "KBhpoint_based_value_iteration.md" >}}), [HSVI]({{< relref "KBhhsvi.md" >}}), [Perseus]({{< relref "KBhperseus.md" >}}) |
| Offline Solvers | [SARSOP]({{< relref "KBhsarsop.md" >}}), [E-PCA]({{< relref "KBhe_pca.md" >}}), [CALP]({{< relref "KBhcalp.md" >}})                        |
| Policy Graphs   | [Hansen]({{< relref "KBhhansen.md" >}}), [MCVI]({{< relref "KBhmcvi.md" >}}), [PGA]({{< relref "KBhpga.md" >}})                            |
| Online Solvers  | [AEMS]({{< relref "KBhaems.md" >}}), [POMCP]({{< relref "KBhpomcp.md" >}}), [DESPOT]({{< relref "KBhdespot.md" >}})                        |


## Other Content {#other-content}


### Levels of Critique {#levels-of-critique}

-   high level: "is this problem important/can it scale?"
-   mid level: "do the experiments show what is claimed"
-   low level: typography, grammar, style

State contributions before and after.


### Good Presentations {#good-presentations}

-   not too stuffy nor casual
-   frequent use of graphics
-   you don't want bullets with more than 2 lines
-   clear, upfront objective of the paper
-   everything was understanding **during** presentation: timing presentations such that its digestible as drinking down


### Time Management {#time-management}

Randy Pausch's time management lecture.

-   optimize for fun
-   "why am I doing this?"
-   have "you can always change your plan, but only if you have one"

SEPARATE: email, to-do list, calendar


### Writing a Paper {#writing-a-paper}

Jennifer Widom: how to write a paper


### Packages to Use {#packages-to-use}


#### Plots {#plots}

"using matlab to screenshot a plot is... an automatic F. If you want to have A quality work, you can use pgfplot. Or you can use a pgfplots backend."

```python
import tikzplotlib
```


#### Tables {#tables}

No vertical linens

<http://people.inf.ethz.ch/markusp/teaching/guides/guide-tables.pdf>

\toprule

Possibly: PGFPlotsTable. TikZ.


#### Algos {#algos}

algorithmicx


#### Captions {#captions}

subcaptions


#### Units {#units}

siunitx


#### Code {#code}

minted, or---code executation---pythontex


#### References {#references}

"cleveref": tell you what it is, and give you back with the "Fig. #N" informatino.
