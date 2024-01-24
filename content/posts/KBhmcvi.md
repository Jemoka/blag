+++
title = "MCVI"
author = ["Houjun Liu"]
draft = false
+++

Continuous-state POMDPs. Fast algorithms require discretized state spaces, which makes the problem much more difficult to model. MCVI makes continuous representations possible for complex domains.


## MC Backup {#mc-backup}

\begin{equation}
V\_{t+1}(b) = HV\_{t}(b) = \max\_{a \in A} R(b,a) + \gamma \sum\_{o \in O}^{} p(o|b,a) V\_{t}(b')
\end{equation}

Use Monte-Carlo simulation to sample future states to take any integrals.


## MCVI {#mcvi}

-   initial each reward at action to \\(0\\)
-   for each observation, initialize each observation, node as \\(0\\)
-   Take monte-carlo samples across the actions and states to take integrals to obtain:
    -   \\(HV\_{g}(b) = \max\_{a \in A} \qty(\int\_{s \in S} R(s,a)b(s) \dd{s} + \sum\_{o}^{} ???)\\)
    -   each future observation is sampled using monte-carlo simulation

each backup, you pick one new node to add.
