+++
title = "randomized turing machine"
author = ["Houjun Liu"]
draft = false
+++

a [randomized turing machine]({{< relref "KBhrandomized_turing_machine.md" >}}) is a [turing machine]({{< relref "KBhturing_machinea.md" >}}) with functions \\(\delta\_{0}\\), \\(\delta\_{1}\\). During computation, we take either \\(\delta\_{0}\\) or \\(\delta\_{1}\\) each with probability \\(\frac{1}{2}\\).


## decision {#decision}

a randomized TM decides a particular language \\(L\\) if, \\(\forall x \in \Sigma^{\*}\\), we have that:

\begin{align}
&x \in L \implies \text{Pr}\qty [M\text{ accepts } x] \geq  \frac{2}{3} \\\\
&x \not\in L \implies \text{Pr}\qty [M\text{ accepts } x] \leq  \frac{1}{3}
\end{align}

NOTE! we have to prove this for all \\(x\\). "most \\(x\\)" is not good enough.


## BPTIME {#bptime}

\begin{equation}
\text{BPTIME}\qty(t\qty(n)) = \qty {L: \exists \text{randomized TM that decides $L$ in $O(t(n))$ time}}
\end{equation}

in particular:

"decides in \\(O\qty(t\qty(n))\\) time" means:

\begin{equation}
\max\_{x; |x| = n} \max\_{\text{outcomes of randomness}} \qty {\text{$M$ takes $t\qty(n)$ steps}}
\end{equation}

funnily enough, \\(\max\\) and \\(\mathbb{E}\\) could be swapped here only up to (some?) slowdown.


## BPP {#bpp}

\begin{equation}
\text{BPP} = \text{BPTIME}\qty(\text{poly}\qty(n))
\end{equation}


## RP {#rp}

RP is the "one-sided error" class where we will always reject when not in the language and we will accept with some fixed probability.


## look, a chart! {#look-a-chart}

accept probability for...

| language             | x in L           | x not in L     |
|----------------------|------------------|----------------|
| BPP                  | &gt;= 2/3        | &lt;= 1/3      |
| BPP                  | 1-2<sup>-n</sup> | 2<sup>-n</sup> |
| P                    | 1                | 0              |
| RP (one-sided error) | &gt;= 1/2        | 0              |
| RP (one-sided error) | 1-2<sup>-n</sup> | 0              |
| NP                   | &gt; 0           | 0              |

RP is essentially "NP with a lot of witnesses"---you are really really certain (up to whatever probability you'd like, since [RP success amplifies](#rp-success-amplifies)).

Notice that this makes...


### RP in NP {#rp-in-np}

\begin{equation}
RP \subseteq NP
\end{equation}

RP is "accept with high probability" and NP is "accept somehow".


#### RP success amplifies {#rp-success-amplifies}

if \\(M\\) is a one-sided error truing machine with error \\(\leq \frac{1}{2}\\), then just run \\(M\\) \\(k\\) times to obtain:

\begin{equation}
2^{-\theta\qty(k)}
\end{equation}

failure probability. i.e. if the correct answer is accept, than the system will return accept for \\(1 - 2^{-\theta\qty(k)}\\) chance.
