+++
title = "turing machine"
author = ["Houjun Liu"]
draft = false
+++

## constituents {#constituents}

-   \\(Q\\) is a finite set of states
-   \\(\Sigma\\) is the input alphabet, where \\(\square \not \in \Sigma\\)
-   \\(\Gamma\\) is the tape alphabet, where \\(\square \in \Gamma\\), and \\(\Sigma \subseteq \Gamma\\) (because we can write empty cells)
-   \\(\delta: Q \times \Gamma \to Q \times \Gamma \times \qty {L, R}\\)
-   \\(q\_0 \in Q\\), the start state
-   \\(q\_{a} \in Q\\), the accept state
-   \\(q\_{r} \neq q\_{a}\in Q\\), the reject state (because a Turing Machine may not terminate at end of input)


## requirements {#requirements}


## additional information {#additional-information}


### configuration {#configuration}

the [configuration](#configuration) of a Turing Machine contains its entire state:

1.  the content of the tape
2.  the current state of the controller
3.  the position of the writer

we write this by putting the state right before the position of the write head:

this means that our write head is at the bit that says 1, at state q7.


### yield {#yield}

Let \\(C\_1\\) and \\(C\_2\\) be configurations of a TM \\(M\\); let us call \\(C\_1\\) **yields** \\(C\_2\\) if \\(M\\) is in configuration \\(C\_2\\) after running \\(M\\) in configuration \\(C\_1\\) for one step.

Suppose \\(\delta(q\_1, b) = (q\_2, c, L)\\); then \\(aa (q\_{1}) bb\\) yields \\(a (q\_{2}) a c b\\).


### accept {#accept}

A TM \\(M\\) accepts \\(w\\) if there are configs \\(C\_0, ..., C\_{k}\\) for which:

-   \\(C\_0 = q\_0w\\)
-   \\(C\_i\\) yields \\(C\_{i+1}\\) for \\(i=0 ... k-1\\) and
-   \\(C\_{k}\\) contains \\(q\_{accept}\\)


### recognize vs decide {#recognize-vs-decide}

-   **recognize** \\(L\\): the TM will accept strings \\(l \in L\\) (a string outside may loop or reject)
-   **decide** \\(L\\): the TM will accept strings \\(l \in L\\), and reject all strings \\(l' \not \in L\\)


### recognizable {#recognizable}

A language \\(L\\) is **recognizable** ("recursively enumerable") if some TM recognizes \\(L\\)


### decidable {#decidable}

A language \\(L\\) is **recursive** if some TM decides \\(L\\)


#### L is decidable IFF L and not L are both recognizable {#l-is-decidable-iff-l-and-not-l-are-both-recognizable}

given a \\(M\_1\\) that recognizes \\(L\\), a \\(M\_{2}\\) that recognizes \\(\neg L\\), we want to build a machine \\(M\\) that decides \\(L\\).

(this is easy; just run both machines at once on two tapes and then just check which one gets recognized first; accept if \\(M\_1\\) accepts and reject if \\(M\_2\\) accepts)

---

if \\(L\\) is decidable, \\(\neg L\\) is also decidable (because we just run \\(L\\) and return the opposite)


### intuition {#intuition}


#### structure {#structure}

1.  finite state controller (with a write head)
2.  infinite, writable tape (whenever the machine goes to the right, we get a new cell, if we go left, we hit a wall and stay put)
3.  we lay our input onto the tape


#### capability {#capability}

-   they can write to and read from the tape
-   the head can move left and right
-   the input doesn't have to be read entirely: we can bail at any moment, or not stop at all

Accept and Reject take immediate effect.


### Graph-based Turing Machine Representation {#graph-based-turing-machine-representation}

-   nodes are the finite control states
-   each edge has a three-tuple: \\((read, write, move)\\) which is what we are going to read, what we are going to write, and where we move on the tape (left or right)
    -   the empty cell is a valid read or write (i.e. we can read nothing, meaning our input has ended, and we can write nothing)

notation: read -&gt; write, move


### examples {#examples}


#### two of the same string {#two-of-the-same-string}

\begin{equation}
L = \qty {w \\# w \mid w \in {0,1}^{\*}}
\end{equation}

1.  if there is no # on the tape (or more than one, #), **reject**
    1.  while you do this, copy the entire string to the right (we do this because otherwise we wouldn't know if moving to the left actually did something (i.e. the first symbol is duplicated) or we were just hitting the wall and bouncing)
2.  while there is a bit to the left of #
    1.  replace the first bit with X, and check the first bit to the right of the # and x is the same one
    2.  if not, reject; if so, replace the right bit with an X too
3.  if there is a bit to the right of # that's not X, then reject; otherwise, accept


### Non-deterministic Turing Machines {#non-deterministic-turing-machines}

We have multiple transitions for a state, symbol pair in non-deterministic TMs. Theorem: every non-deterministic Turing machine \\(N\\) can be transformed into a Turing machine \\(M\\) that accepts only strings \\(N\\) accepts.

(We don't care about rejection in this case, because "some rejection state" seems odd if there are some that's not a rejection state)

---

Proof:

We pick an ordering of strings over \\(\qty {Q \cup \Gamma \cup \\#}^{\*}\\).

To check if we accept \\(w\\) with \\(M\\): for all strings in \\(\qty {Q \cup \Gamma \cup \\#}^{\*}\\), check if for \\(D \in \qty {Q \cup \Gamma \cup \\#}\\), and \\(D = C\_0 \\# ... \\# C\_{k}\\), if the sequence \\(C\_0 ... C\_{k}\\) is an accepting computation history in \\(N\\) (that is, \\(C\_0\\) is a valid start configuration, and \\(C\_{k}\\) is (1) a valid accepting one) that (2) \\(C\_{0}\\) corresponds to the string \\(w\\). If so, accept.

(i.e. we precompute paths)


### Recognizability {#recognizability}


#### decidable predicate {#decidable-predicate}

A decidable predicate \\(R(x,y)\\) is a proposition about the input strings \\(x\\), \\(y\\), such that some Turing machine \\(M\\) will implement \\(R\\).

That is, for all \\(x, y\\), we have \\(R(x,y)\\) is true means \\(M(x,y)\\) accepts, and \\(R(x,y)\\) is false means \\(M(x,y)\\) rejects.

That is: \\(R: \Sigma^{\*} \times \Sigma^{\*} \to \qty {T,f}\\)


#### predicate recognizability {#predicate-recognizability}

a particular language \\(A\\) is **recognizable** IFF there is a **[decidable](#decidable)** (note the upgrade in strength) [predicate]({{< relref "KBhpredicates.md" >}}) \\(R(x,y)\\) such that \\(A = \qty {x \mid \exists y, R(x,y)}\\).

Proof:

\\(\Rightarrow\\) assume \\(A = \qty {x \mid \exists y, R(x,y)}\\), we want to show that \\(A\\) is [recognizable](#recognizable)

Create a Turing machine which: enumerate all finite-length strings \\(y\\); if \\(R(x,y)\\) is true, accept it.

\\(\Leftarrow\\) if \\(A\\) is recognizable, there is some decidable predicate \\(R(x,y)\\) such that \\(A = \qty {x \mid \exists y, R(x,y)}\\).

By definition \\(A\\) is recognizable, so there's an \\(M\\) which recognizes \\(A\\). Define a predicate \\(R(x,y)\\) be TRUE IFF \\(M\\) accepts \\(x\\) in \\(|y|\\) steps.

We now want to show that \\(R(x,y)\\) is decidable. If \\(M\\) accepts \\(x\\); it would have done so in some finite \\(y\\) steps. Hence, \\(R(x,y) = TRUE\\). If there is some \\(y\\) for which \\(R(x,y)\\) is true, we can see that we can run \\(M\\) on \\(x\\) for \\(y\\) steps and see that by definition \\(M\\) have just accepted the string. This is _decidable_ because we can check for \\(y\\) steps exactly, so we will always terminate.
