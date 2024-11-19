+++
title = "Space Complexity"
author = ["Houjun Liu"]
draft = false
+++

We define [Space Complexity]({{< relref "KBhspace_complexity.md" >}}) as the **largest tape index reached** during computation.

Let \\(M\\) be a deterministic Turing Machine; the space complexity of \\(M\\) is the function \\(S: \mathbb{N} \to  \mathbb{N}\\), where \\(S(n)\\) is the largest tape index reached by \\(M\\) on any input of length \\(n\\).

\begin{equation}
\text{SPACE}\qty(S(n)) = \qty {L \mid L \text{ is decidable by TM with $O(S(n))$ space}}
\end{equation}

these classes involve computations with bounded memory


## Upper-Bounding Time Complexity with Space Complexity {#upper-bounding-time-complexity-with-space-complexity}

For \\(L \in \text{SPACE}\qty(S(n))\\), what is its upper-bounded time complexity?

Note that the number of possible timestamps is at most the number of possible configurations---if we ever see a configuration twice, our machine is looping.

So, the number of configurations our system could be in is exponential in \\(S(n)\\) (number of states times number of positions the read head is at times the number of symbols).

So, the total number of configurations is: \\(S |Q| |\Gamma|^{2} = 2^{O(S)}\\).

Therefore, \\(S(n)\\) space computations is decidable in \\(2^{O(S(n))}\\) time. So:

\begin{equation}
\text{SPACE}\qty(s(n)) \subseteq \bigcup\_{c \in \mathbb{N}} \text{TIME}\qty(2^{cS(n)})
\end{equation}


### PSPACE {#pspace}

let

\begin{equation}
\text{PSPACE} = \bigcup\_{k \in \mathbb{N}} \text{SPACE} \qty(n^{k})
\end{equation}

and recall

\begin{equation}
\text{EXPTIME} = \bigcup\_{k \in \mathbb{N}} \text{TIME} \qty(2^{n^{k}})
\end{equation}

then we can write:

\begin{equation}
\text{PSPACE} \subseteq \text{EXPTIME}
\end{equation}

because of the upper-bounding enlargement above


### P, NP is in PSPACE {#p-np-is-in-pspace}

\begin{equation}
P \subseteq \text{PSPACE}
\end{equation}

this is because the space is bounded by time---because if all you did was to go right, you will still do so by polynomial space

\begin{equation}
NP \subseteq \text{PSPACE}
\end{equation}

because you can use the same space to enumerate each of your choices

\begin{equation}
NP^{NP} \subseteq \text{PSPACE}
\end{equation}

Because the algorithm only takes \\(PSPACE\\) (since its \\(NP\\)), and the Oracle can be simulated out in \\(PSPACE\\)


## additional info {#additional-info}


### hierarchy of space and time {#hierarchy-of-space-and-time}

\begin{equation}
\text{P} \subseteq \text{NP} \subseteq \text{PSPACE} \subseteq \text{EXPTIME}
\end{equation}

Notice that \\(P \neq \text{EXPTIME}\\), because of the [time hierarchy theorem]({{< relref "KBhcomputational_complexity_theory.md#time-hierarchy-theorem" >}})---more time buys you more things to solve.


### space hierarchy theorem {#space-hierarchy-theorem}

\begin{equation}
\text{SPACE}\qty(s(n)) \not \subseteq  \text{SPACE}\qty(S(n))
\end{equation}

if \\(\frac{s(n)}{S(n)} \to 0\\) (i.e. \\(S(n)\\) is asymptotically larger than \\(s(n)\\))

argument sketch: nationalization; make a machine \\(M\\) which uses \\(S(n)\\) and does the opposite of every \\(s(n)\\) space machines on at least one input.

Note that \\(L(M)\\) is in \\(\text{SPACE}\qty(S(n))\\) but not \\(\text{SPACE}\qty(s(n))\\), because if it was it would've then had a contradiction


### nondeterministic space classes {#nondeterministic-space-classes}

Let \\(N\\) be a nondeterministic Turing machine which halts on all inputs in all possible branches. The space complexity of \\(N\\) is function \\(f\\) where \\(f(n)\\) is the **furthest** tape cell reached by all computation paths, over all inputs of length \\(n\\).

\begin{equation}
\text{NSPACE}\qty(s(n)) = \qty {L \mid \text{all things decided using $O(s(n))$ space complexity with a non-deterministic TM}}
\end{equation}


### Savitch's Theorem {#savitch-s-theorem}

For every "nice" (constructable) function \\(s: \mathbb{N} \to  \mathbb{N}\\), where \\(s(n) > n\\), for all \\(n\\), then:

\begin{equation}
\text{NSPACE}\qty(s(n)) \subseteq \text{SPACE}\qty(s(n)^{2})
\end{equation}

this is kind of [multi-tape TM theorem]({{< relref "KBhcomputational_complexity_theory.md#multi-tape-tm-theorem" >}})


#### and so, on polynomial sizes, this doesn't matter {#and-so-on-polynomial-sizes-this-doesn-t-matter}

that is:

\begin{equation}
\text{NPSPACE} = \text{PSPACE}
\end{equation}

where

\begin{equation}
\text{NPSPACE} = \cup\_{k \in N} \text{NPSPACE} \qty(n^{k})
\end{equation}


## unclear {#unclear}

For instance, \\(\text{SPACE}\qty(n^{2})\\) problems could takes possibly much longer than \\(n^{2}\\) steps to solve (because you can re-use space, but not time).


## examples {#examples}

\begin{equation}
\text{3SAT} \in \text{SPACE}\qty(n)
\end{equation}

Because we can try all assignments of \\(n\\) variables by length \\(n\\), this is in exponential time, but trying each only requires you to write down assignments of each which is in \\(O(n)\\).

\begin{equation}
\text{NTIME}\qty(t(n)) \in \text{SPACE}(t(n))
\end{equation}

because the witness is at most \\(t(n)\\) (or at least you can truncate it as such since checking it only takes \\(t(n)\\) steps), and you need at most some factor against \\(t(n)\\) to check.
