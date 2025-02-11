+++
title = "If P != NP, then BPP in P"
author = ["Houjun Liu"]
draft = false
+++

We really really want to prove:

\begin{equation}
\text{BPP} \subseteq \text{P}
\end{equation}

which will give \\(\text{P} = \text{BPP}\\).

---

How about we replace the truly random bits on the random tape \\(r \in \qty {0,1}^{\text{poly}\qty(|x|)}\\) with "pseudo-randomness" bits and prove that \\(M\\) can't tell the difference.

Namely, a thing that is "pseudo-random" is easier to brute force over. So, we ideally can brute force over \\(\text{poly}\qty(n)\\) many outcomes instead of \\(2^{\text{poly}\qty(n)}\\) in the case of true randomness.

We see that if we believe \\(P \neq NP\\), then we can execute this plan above. In particular, since \\(M\\) is just a normal Turing Machine \\(\in P\\), if \\(P \neq NP\\), then we think there's surely there's a way to fool \\(M\\) by taking up the gap.

---

Assume a pseudorandom generator (which takes a small input, because that's nicely brute forcable):

\begin{equation}
G : \qty {0,1}^{\log n}  \to  \qty {0,1}^{n}
\end{equation}

Naively doing this is certainty doesn't result in a uniform output distribution; because \\(G\\) is wildly not [surjective]({{< relref "KBhsurjectivity.md" >}}) --- there are \\(2^{\log n} = n\\) possible input values, and \\(2^{n}\\) possible outputs.

We want \\(M\\) to not be able to tell the difference, in particular meaning we want \\(G\\) to be scrambly enough o that \\(M\\) can't tell the diffidence between these two pictures.
