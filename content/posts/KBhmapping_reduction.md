+++
title = "mapping reduction"
author = ["Houjun Liu"]
draft = false
+++

A language \\(A\\) is mapping reducible to language \\(B\\), written as \\(A \leq\_{m} B\\), if there is a computable function \\(f: \Sigma^{\*} \to \Sigma ^{ \*}\\) such that for every \\(w\\), \\(w \in A \Leftrightarrow f(w) \in B\\).

This is sometimes called a "many-to-one" reduction because often times you want to have multiple \\(w\\) mapping to the same \\(f(w)\\).

We remember this as "A is weaker ("not stronger") than B"; or "A is reducable to B"


## General idea {#general-idea}

prove a language \\(L\\) is undecidable by proving that if \\(L\\) is decidable, so is \\(A\_{TM}\\). In particular, we reduce \\(A\_{TM}\\) to the language \\(L\\) (i.e. make a machine for \\(A\_{TM}\\) from \\(L\\) --- \\(A\_{TM} \leq\_{M} L\\)).


## computable function {#computable-function}

a function \\(f: \Sigma^{\*} \to \Sigma^{ \*}\\) is a [computable function](#computable-function) if there is a [turing machine]({{< relref "KBhturing_machinea.md" >}}) \\(M\\) which halts with just \\(f(w)\\) written on its tape, for every input \\(w\\). the function returns the tape after \\(M\\) halts.


## additional info {#additional-info}


### mapping reductions are transitive {#mapping-reductions-are-transitive}

if \\(A \leq\_{m} B\\), and \\(B \leq\_{m} C\\), we have \\(A \leq\_{m} C\\)


### examples {#examples}


#### halting problem {#halting-problem}

\begin{equation}
HALT\_{TM} = \qty {(M,w) \mid M\text{ is a TM \hat{t} halts on the string } w}
\end{equation}

This is undecidable!

Assume for contradiction that there is some \\(H\\) for which it decides \\(HALT\_{TM}\\). Now: we can actually use this property to construct a TM that decides \\(A\_{TM}\\), which we have already seen that [there are non-recognizable languages]({{< relref "KBhthere_are_non_recognizable_languages.md" >}}) so that's not possible.

In particular, we check if \\(H(M, w)\\); then, we run \\(M\\) on \\(w\\) until it halts---if accept, return accept; if reject, return reject; if \\(H(M,w)\\) says it won't halt, then reject.

Then, we just made a machine that decides \\(A\_{TM}\\), yet [\\(A\_{TM}\\) is recognizable but not decidable]({{< relref "KBhuniversal_turing_machine.md#a-tm-is-recognizable-but-not-decidable" >}}).

With a reduction, we see that [halting problem](#halting-problem) is undecidable.


### if A &lt;= B, B is decidable, then A is decidable {#if-a-b-b-is-decidable-then-a-is-decidable}

To decide \\(A\\), we build a machine \\(M'\\), where by we first:

1.  Compute \\(f(w)\\) on some given string \\(w\\)
2.  Then, run \\(M\\) (which decides \\(B\\)) on \\(f(w)\\), return its results

\\(w \in A \Leftrightarrow f(w) \in B\\), so if \\(M\\) accepts \\(f(w)\\) we know \\(w \in A\\)

\\(w\not \in A\\), then we will have \\(f(w) \not \in B\\), and so \\(M'\\) will reject \\(w\\)


### if A &lt;= B, B is recognizable, then A is recognizable {#if-a-b-b-is-recognizable-then-a-is-recognizable}

same as above---if you get the answer, let \\(m'\\) return it. otherwise, we run forever.


### contrapositives of the above {#contrapositives-of-the-above}

-   if A &lt;= B, if A is undecidable, then B is undecidable
-   if A &lt;= B, if A is unrecognizable, then B is unrecognizable

"A gives a lower bound on the difficulty of B"


### Atm &lt;= HaltTM {#atm-halttm}

[halting problem](#halting-problem)


### things to map to {#things-to-map-to}

-   Atm is recognizable but not decidable
-   EmptyTM is not recognizable
-   EqualTM (if a pair of TM is equal) is not recognizable
