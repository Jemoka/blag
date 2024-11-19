+++
title = "Approximation Algorithms"
author = ["Houjun Liu"]
draft = false
+++

## Probabilistically Checkable Proofs {#probabilistically-checkable-proofs}

Every statement that has a **polynomial time checkable** proof has such a proof where the verifier only reads \\(O(1)\\) (constant) bits of the proof such hat...

-   **perfect completeness**: correct statements will be accepted with probability 1
-   **soundness**: false statements will be rejected with probability 0.99 (with epsilon as the reading constant increases)


### PCP Theorem {#pcp-theorem}

For some constant \\(\alpha > 0\\), and for ever language \\(L \in NP\\), there exists a polynomial-time [computable function]({{< relref "KBhmapping_reduction.md#computable-function" >}}) that makes every input \\(x\\) into a [3cnf-formula]({{< relref "KBhnon_deterministic_turing_machines.md#3cnf-formula" >}}) \\(f(x)\\) such that...

1.  if \\(x \in L\\), then \\(f(x) \in \text{SAT}\\)
2.  if \\(x \neq L\\), then there is no assignment that satisfies more than \\(\qty(1-\alpha)\\) fraction of \\(f(x)\\) clauses

That is, a sufficiently good approximation of [Max-SAT](#max-sat) will imply \\(P = NP\\) (because we cloud just us that [Max-SAT](#max-sat) to disambiguate whether or not \\(f(x)\\) has a maximum satisfiable over the line of \\((1-\alpha)\\) and declare it in or out of the language.


## Provability {#provability}

By definition everything in \\(NP\\) has a short and checkable proof (in polynomial time) ...same can go for coNP and [PSPACE]({{< relref "KBhspace_complexity.md#pspace" >}}) if we **add interaction**.


### Interactive Proofs {#interactive-proofs}

We have prover \\(P\\) and verifier \\(V\\). The \\(V\\) asks \\(P\\) for membership statements, and \\(P\\) responds with statements. These proofs can be used to prove membership in very powerful languages.


### Graph Non-Isomorphism {#graph-non-isomorphism}

A graph \\(G\\) and \\(H\\) are [isomorphic]({{< relref "KBhisomorphism.md" >}}) if you can rename \\(G\\) to get \\(H\\) (i.e. they are same up to renaming).

-   GraphIsomorphism = {(G,H) | G and H are isomorphic}
-   GraphNonIsomorphism = {(G,H) | G and H are not isomorphic}

GraphIsomorphism is in NP. But, how do we show that two things are **not** isomorphic?


## Approximation Hardness {#approximation-hardness}

For particular problems, we can't even **approximate** it well enough.

Interestingly, for many problems, we know exactly what the correct approximation factor is; we even know what the approximation boundary is, so beyond this line we know we can't solve it unless \\(P= NP\\).

To show these results, we will need approximation-preserving reductions


### approximation preserving reductions {#approximation-preserving-reductions}

for instance, [clique problem]({{< relref "KBhnon_deterministic_turing_machines.md#clique-problem" >}}) (\\(3SAT \leq\_{P} \text{CLIQUE}\\)) is **very** approximation preserving because the size of the clique corresponds exactly to the number of clauses you can satisfy.

However, (\\(\text{IS} \leq\_{P} \text{{Vertex-Cover}}\\)) is super not approximation preserving; recall that our argument is that \\(V - IS\\) is a vertex cover, meaning \\(\qty(G, k) \Leftrightarrow (G, |V|-k)\\) is the sizes of the independent set and vertex covers respectively.

These are not good approximations of each other; suppose the minimum vertex cover is \\(k \ll n\\), this make the maximum independent set \\(n-k\\). An approximation of independent set will give a vertex cover size of \\(\frac{n}{c}\\) (since \\(k\\) is, as said before, very small), which means the approximate VC given would be \\(n - \frac{n}{c}\\) which may not be anywhere near \\(n-k\\).


## example {#example}


### [vertex cover]({{< relref "KBhnp_complete.md#vertex-cover" >}}) {#vertex-cover--kbhnp-complete-dot-md}

Recall [vertex cover]({{< relref "KBhnp_complete.md#vertex-cover" >}}) problem:

we want to find the smallest [vertex cover]({{< relref "KBhnp_complete.md#vertex-cover" >}})---this could be approximated greedily which will find a [vertex cover]({{< relref "KBhnp_complete.md#vertex-cover" >}}) which is at most twice as large as the original (a "two-approximation")

**the algorithm**: set \\(C = \emptyset\\), and while there exists an uncovered edge \\(e\\), add both endpoints of such an \\(e\\) to \\(C\\)

**prove**:

1.  it will work because for every uncovered edge, at least one of its endpoints is in the minimal vertex cover; so we add be greedy and just add both
2.  it 2x because we at most add 2x "extra" verticies


### Max-SAT {#max-sat}

given a [cnf-formula]({{< relref "KBhnon_deterministic_turing_machines.md#3cnf-formula" >}}) (not just 3cnf), how many clauses can be satisfied? a **maximization problem** because we want to satisfy the maximal amount of clauses.

approximation: we can always satisfy a constant frication of all of the clauses: that is, when all clauses have at least 3 unique literals, we can satisfy at least 7/8 of all the clauses (i.e. we will get to \\(\geq \frac{7}{8}\\) clauses of the clauses than optimal solution).

We can't solve this even further (i.e. we can't solve up to \\(\frac{7}{8}+\varepsilon\\) for any \\(\varepsilon > 0\\)) without \\(P = NP\\). see [PCP Theorem](#pcp-theorem)


### [clique problem]({{< relref "KBhnon_deterministic_turing_machines.md#clique-problem" >}}) {#clique-problem--kbhnon-deterministic-turing-machines-dot-md}

for other problems (such as cliques), no constant approximation may even occur
