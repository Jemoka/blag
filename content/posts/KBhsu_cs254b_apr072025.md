+++
title = "SU-CS254B APR072025"
author = ["Houjun Liu"]
draft = false
+++

Recall the relationship between time and space; in particular:

\begin{equation}
\text{TIME}\qty(t\qty(n)) \subseteq \text{SPACE}\qty(t\qty(n))
\end{equation}

"space is more valuable than time."


## On time vs. space {#on-time-vs-dot-space}

<div class="theorem"><span>

\begin{equation}
\text{TIME}\qty(\qty(n)) \subseteq \text{SPACE} \qty( \frac{t\qty(n)}{\log \qty(t\qty(n))})
\end{equation}

</span></div>

<div class="corollary"><span>

\begin{equation}
\text{TIME}\qty(\qty(n)) \subseteq \text{SPACE}\qty(t\qty(n))
\end{equation}

</span></div>

that is: space is strictly more valuable than time. Oh, and also:

\begin{equation}
\text{TIME}\qty(t\qty(n)) \subseteq \text{SPACE}\qty(\sqrt{t\qty(n) \log t\qty(n)})
\end{equation}

Key idea: let's transform the previous thing into a graph problem!

---

Suppose \\(M\\) is the time \\(T\\) truing machine, and consider its configure at time \\(t < T\\). Key idea: **we can tradeoff time for space! notably, we will _solve the same problem_ using a different algorithm, not _modify the original machine._**

Intuition: as we prod along on our space, if an oracle showed up and told you some space was no longer relevant, you could just dealloc it to save space.
.
Let's formalize this.


### Epochs {#epochs}

Divide total time \\(T\\) used up into blocks of size \\(B = \sqrt{T}\\). Each chunk is an "epoch of time" worth \\(\sqrt{T}\\), and total number of epochs is also \\(\sqrt{T}\\).

We now state without proof:

<div class="definition"><span>

A TM is **block respecting** such that, within an epoch of time, its tape heads are confined to a fixed block of tape; it could cross and return to the same blocks during epoch boundaries. Different tapes could also use different blocks.

</span></div>

<div class="lemma"><span>

WLOG, we can assume that our Turing machine is \\(\sqrt{T}\\) block respecting.

</span></div>

The sketch of this proof is essentially just to make the Turing machine wait a little bit if it has to cross block boundaries.

**Insight**: "can we delete the contents of the relevant blocks of epoch 17 after epoch 17?" To remember the final contents for \\(k\\) tapes, with each of the blocks being \\(\sqrt{T}\\) size, we have:

\begin{equation}
k \cdot \sqrt{T} = O\qty(B) = \sqrt{T} = v
\end{equation}

This means that naively, remembering everything doesn't work, because we have \\(\sqrt{T}\\) such epochs, so we need \\(\sqrt{T}^{2} = T\\). But! Turns out, we really only have to remember \\(\frac{v}{\log v}\\) many epochs to be able to recover the computation---that's Hop croft Paul Valiant.


### Graph Theory Time! {#graph-theory-time}

This reduces to a graph theory problem!!

Let's associate a directed graph \\(G\\) against our time \\(T\\) Turing Machine with \\(v = \sqrt{T}\\) vertices each representing time; one for each epoch.

For each of the \\(k\\) tapes, add \\(i \to  j\\) edge where \\(j\\) the next epoch that visits the relevant block of this tape.

Observe: to simulate epoch \\(j\\), it suffices to remember the final block contents of epoch \\(i\\) for all \\(i\\) such that \\(i \to  j\\) is an edge.


#### pebble game {#pebble-game}

Solo game, played on an v vertex directed graph with source and sink.

Goal: place pebble on sink; minimize the number of pebbles used ever on the graph.

Rules:

1.  Start with a pebble on the source
2.  We can only place a pebble on vertex \\(j\\) if all of \\(j\\)'s predecessors have pebbles on them
3.  You can always remove any pebble

<!--list-separator-->

-  HPV

    The original strategy for this was non-constructive. We'll show constructive strategy that uses \\(O\qty(\frac{N \log \log v}{\log v})\\). Cook gave a lower bound \\(\sqrt{v}\\).

    <div class="theorem"><span>

    Let \\(G\\) be \\(v\\) vertex digraph with constant in-degree; then there is a pebbling strategy that uses \\(O\qty(\frac{v}{\log v})\\) pebbles.

    </span></div>

    <div class="proof"><span>

    </span></div>

<!--list-separator-->

-  Valiant's Depth Reduction Lemma

    <div class="definition"><span>

    The **depth** of a digraph is the length of its longest path.

    </span></div>

    <div class="lemma"><span>

    Let \\(G\\) be a \\(v\\) vertex, \\(m\\) edge, depth \\(d\\) graph. For any parameter \\(1 \leq r \leq \log d\\), we can reduce the depth to at most \\(\leq \frac{d}{2^{r}}\\) by deleting \\(\frac{r}{\log  d} \cdot m\\) edges.

    </span></div>

    "by snipping away a few edges, there are no more long paths".
