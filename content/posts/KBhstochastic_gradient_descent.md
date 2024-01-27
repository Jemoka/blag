+++
title = "stochastic gradient descent"
author = ["Houjun Liu"]
draft = false
+++

\begin{equation}
\theta^{t+1} = \theta^{t} - \eta \nabla\_{\theta} L(f\_{\theta}(x), y)
\end{equation}

this terminates when theta differences becomes small, or when progress halts: like when \\(\theta\\) begins going up instead.


## batch gradient descent {#batch-gradient-descent}

[stochastic gradient descent]({{< relref "KBhstochastic_gradient_descent.md" >}}) gives choppy movements because it does one sample at once. We could also do gradient over entire dataset, but that's slow.

mini-batches helps take advantage of both.
