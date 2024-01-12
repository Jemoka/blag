+++
title = "Language Agents with Karthik"
author = ["Houjun Liu"]
draft = false
+++

## Definitions: Language Agents {#definitions-language-agents}

Agents that uses the language to act on behave of another person or group.


## Transitions {#transitions}

1.  Transition first from rule based learning to statistical learning
2.  Rise of semantic parsing: statistical models of parsing
3.  Then, moving from semantic parsing to large models---putting decision making and language modeling into the same bubble


## Importance of LLMs {#importance-of-llms}

-   They are simply better at understanding language inputs
-   They can generate structured information (i.e. not just human language, JSONs, etc.)
-   They can perform natural language "reasoning"---not just generate

(and natural language generation, abv)

-   1+3 gives you chain of thought reasoning
-   1+2 gives CALM, SayCan, and other types of RL text parsing in order to do stuff with robotics
-   all three gives ReAct


## ReAct {#react}

-   Recover from incorrect thought and incorrect tools
-   Allows human-in-the-loop alignment


### Major Flaw {#major-flaw}

-   left-to-right one-pass decoding doesn't allow alternate solutions
-   bad properties regarding propagating hallucination
-   search and planning had been explored a lot


### Tree of Thoughts {#tree-of-thoughts}

Partial solution: [Tree of Thoughts](#tree-of-thoughts)

{{< figure src="/ox-hugo/2024-01-11_11-22-35_screenshot.png" >}}

evaluate sub-paths to determine most optimal paths: think A\* but with more proper heuristic bounding.

**Big idea: merge classic algorithmic ideas with decision making against LLMs**


## Problem: agents are not robust at all {#problem-agents-are-not-robust-at-all}

<https://github.com/ryoungj/ToolEmu>


## Key New Challenges for Agents {#key-new-challenges-for-agents}


### Evaluation {#evaluation}

1.  Different from how previous NLP benchmarks: we are **not** worried about language modeling
2.  No longer boundaries between various fields

Common goals:

-   realistic agents---stop playing Atari games.
-   reproducible systems
-   measurability goals
-   scalable models
-   which are easy to use


#### Web as an Interactive Environment {#web-as-an-interactive-environment}

-   agents on the web is both practical and scalable
-   <https://webshop-pnlp.github.io/>
-   WebShop can actually transfer with no work to training on Amazon
-   Mind2Web


#### InterCode {#intercode}

Formulation of agent decisions as POMDP in order to fully benchmark Markovian decisions:

<https://arxiv.org/abs/2306.14898>


### Agent Development {#agent-development}

Agents development has no core framework


#### production systems {#production-systems}

-   set of rules specificying a precondition + action
-   when preconditinons are met, perform an action

Big kitchen sink proposal: <https://arxiv.org/abs/2309.02427>


### Trust and safety {#trust-and-safety}

Agents are much more powerful and dynamic
