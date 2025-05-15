+++
title = "SU-CS143 MAY152025"
author = ["Houjun Liu"]
draft = false
+++

"If \\(B\\) is a subclass of \\(A\\), then an object of \\(B\\) can be used wherever \\(A\\) is expected."

To do this, we will lay out:

the pointer `*` points to a method table


## Other Semantics than [structural operational semantics]({{< relref "KBhsu_cs242_oct152024.md#structural-operational-semantics" >}}) {#other-semantics-than-structural-operational-semantics--kbhsu-cs242-oct152024-dot-md}

1.  [denotational semantics]({{< relref "KBhsu_cs224n_apr022024.md#denotational-semantics" >}})
2.  [axiomatic semantics]({{< relref "KBhaxiomatic_semantics.md" >}})


## Runtime Errors {#runtime-errors}

We have to catch some runtime errors:

-   calling on voids
-   method dispatch problems


## What to track in context? {#what-to-track-in-context}

-   **environment**: where in memory a variable is stored? `Map<Symbol, void *>`
-   **store**: what is in memory? `Map<void *, Value>`

This means that a judgment is:

\begin{equation}
\text{self}, E, S \vdash e: V, S'
\end{equation}

that is, "given environment \\(E\\), store \\(S\\), we have that \\(e\\) evaluates to \\(V\\), and \\(S\\) are side effects."

The reason why environments doesn't change is because we can't pass globals up, so scoping always travels down.


### assignments {#assignments}

As you would expect:

\begin{equation}
\frac{so,E, S \vdash  e : v, S\_1 | E\qty(id) = I\_{id} | S\_2=S\_1[v / I\_{id}]}{so, E, S \vdash  id \leftarrow e: v, S\_2}
\end{equation}

Notice! we have side effects that are **CHAINED**; if evaluating \\(e\\) has side effects, we carry them into our evaluation in the side effects.


### ...what about `self`? {#dot-dot-dot-what-about-self}

\begin{equation}
\frac{}{\text{so}, E, S \vdash \text{self}: \text{so}, S}
\end{equation}
