+++
title = "Interactive Agents"
author = ["Houjun Liu"]
draft = false
+++

Big question: how to we align agents in an interactive, dynamic way (i.e. without instruction fine tuning which is hard).

Sequentiality is hard:

1.  what is the context/motivation?
2.  how to you transfer across contexts?
3.  how do you plan?


## Key Idea {#key-idea}

Language is information that helps agents **predict the future**; instructions is **world modeling**

-   instead of instructions =&gt; actions (executor)
-   instructions =&gt; updated belief (world model)

User intent =&gt; action shouldn't have LLM language representation in the middle as a bottleneck.

There is an underlying representation of the user's preferences, you have to use language to coax it out of them.


## Dynalang {#dynalang}

1.  build model that takes vision + language as a joint input
2.  pass it through an auto-encoding representation
3.  have the world model predict the next-encoding representation

Main Idea: modeling language/tokens/images as a joint latent representation over time.

Training objective:

1.  reconstruction loss against the future presentation: using \\(R\_{i}\\) to predict  \\(R\_{i+1}\\)
2.  predict the reward over time
3.  regularize?


## Workflow {#workflow}

1.  take reward/preferences/behavior data
2.  [structure learning]({{< relref "KBhstructure_learning.md" >}}) to create the relationships between elements in the data structure
