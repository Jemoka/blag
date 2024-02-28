+++
title = "stochastic gradient descent"
author = ["Houjun Liu"]
draft = false
+++

\begin{equation}
\theta^{t+1} = \theta^{t} - \eta \nabla\_{\theta} L(f\_{\theta}(x), y)
\end{equation}

this terminates when theta differences becomes small, or when progress halts: like when \\(\theta\\) begins going up instead.

we update the weights in SGD by taking a **single random sample** and moving weights to that direction.


## batch gradient descent {#batch-gradient-descent}

[stochastic gradient descent]({{< relref "KBhstochastic_gradient_descent.md" >}}) gives choppy movements because it does one sample at once.

[batch gradient descent](#batch-gradient-descent) does it over the entire dataset, which is fine but its slow.


## mini-batch gradient {#mini-batch-gradient}

mini-batches helps take advantage of both by training over groups of \\(m\\) samples


## regularization {#regularization}

[regularization](#regularization) penalize large weights to reduce over-fitting
