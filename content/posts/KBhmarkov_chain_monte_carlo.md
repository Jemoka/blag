+++
title = "Markov Chain Monte-Carlo"
author = ["Houjun Liu"]
draft = false
+++

Start with an initial sample \\(\tau\\)

At each distribution...

1.  sample \\(\tau ' \sim g\qty(\cdot | \tau)\\) (for instance, \\(\tau' \sim \mathcal{N}\qty(\cdot | \tau, \sigma^{2})\\))
2.  accept the sample with probability given by \\(\frac{\bar{p} \qty(\tau') g\qty(\tau | \tau')}{\bar{p}\qty(\tau) g\qty(\tau' | \tau)}\\), otherwise keep \\(\tau\\)


## intuition {#intuition}

The kernel is often chosen to be symmetric, so:

\begin{equation}
g\qty(\tau | \tau') = g\qty(\tau' | \tau)
\end{equation}

we want to sample from **areas of high density** more often. Consider:

1.  \\(\bar{p}\qty(\tau') \geq \bar{p}\qty(\tau)\\), meaning \\(\tau'\\) is more likely under the target density than \\(\tau\\), so \\(\frac{\bar{p}\qty(\tau')}{\bar{p} \qty(\tau)} \geq 1\\), so we will **always accept**
2.  whereas \\(\bar{p}\qty(\tau') < \bar{p}\qty(\tau)\\), meaning \\(\frac{\bar{p}\qty(\tau')}{\bar{p}\qty(\tau)} < 1\\), so we will still accept some of the time but mostly not accept; the bigger the deviations, the less likely we are able to sample it

Key: this all works assuming this is _in the limit of infinite samples_.


## burn in {#burn-in}

A useful hack to do is to start sampling and throw away some samples in the beginning.


## smoothing {#smoothing}

In certain cases where the failure distribution is multi-modal, its really hard to perturb your way into jumping between different distributions. So, let's define:

-   \\(\Delta \qty(\tau) = 0\\), if \\(\tau \not \in \psi\\)
-   \\(\Delta \qty(\tau) > 0\\), otherwise

for instance, a function that behaves like tis is \\(\max \qty(\rho(\tau, \psi), 0)\\)
