+++
title = "Theory of Computing Index"
author = ["Houjun Liu"]
draft = false
+++

Formal models of [computation]({{< relref "KBhsu_cs154_week_1.md#computing" >}}) to have the language and tools:

-   what is computation?
-   what can and cannot be computed?
-   what can and cannot be efficiently computed?

Sidebar: [proof]({{< relref "KBhproof.md" >}})


## Goal {#goal}

-   basic principles of the theory of computation
-   formalize and prove properties of computation
-   apply basic principles of computational thinking such as reductions
-   exposure to different areas of theory


## Content {#content}


### Finite Automata {#finite-automata}

this is a very simple model of computation (a constant amount of memory), meaning we can:

-   characterize what can be computed (closure properties)
-   non-determinism (power of verified guessing)
-   characterize what cannot be computed
-   optimization and learning

More modern (complexity-theoretic) perspective: streaming algorithms, communication complexity.

-   [SU-CS154 Week 1]({{< relref "KBhsu_cs154_week_1.md" >}})


### Computability {#computability}

turing machines are super powerful, meaning we can:

undecidability: characterize what can't be computed (undecidability)

-   understand problems through [reduction]({{< relref "KBhcomplexity_theory.md#reduction--algorithms" >}})
-   hierarchy of exceedingly hard problems
-   kolomogorov complexity (universal theory of information)

this builds the foundations of mathematics through computation


### [complexity theory]({{< relref "KBhcomplexity_theory.md" >}}) {#complexity-theory--kbhcomplexity-theory-dot-md}

-   time complexity
-   P vs. NP, NP-completeness
-   NP non-determinism
-   SAT---likely hard to compute
-   better [reduction]({{< relref "KBhcomplexity_theory.md#reduction--algorithms" >}})s --- polynomial reductions
-   again, a hierachy of exceedingly hard problems

also adds: space, randomness, communication, power, etc.