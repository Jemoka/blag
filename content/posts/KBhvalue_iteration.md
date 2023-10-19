+++
title = "value iteration"
author = ["Houjun Liu"]
draft = false
+++

We apply the [Bellman Expectation Equation]({{< relref "KBhpolicy_evaluation.md#bellman-expectation-equation" >}}) and maximize it:

Recall the [value function]({{< relref "KBhpolicy_evaluation.md#action-value-function" >}}):

\begin{equation}
U\_{k+1}(s) = \max\_{a} \qty(R(s,a) + \gamma \sum\_{s'} T(s' | s,a) U\_{k}(s'))
\end{equation}

We iterate this process:

\begin{equation}
U\_1 \dots U\_{k} \dots U^{\*}
\end{equation}

eventually will converge into the [optimal value function]({{< relref "KBhpolicy.md#optimal-policy" >}}).

We stop when the [Bellman Residual](#bellman-residual) hits a


## Bellman Residual {#bellman-residual}

Take the [L-\\(\infty\\)]({{< relref "KBhl_infty.md" >}}) norm of \\(U^{k+1}-U^{k}\\); it is shown that the error between \\(U^{\*}\\) (convergence) and \\(U\_{k}\\) as:

\begin{equation}
\epsilon = \frac{\delta \gamma}{(1-\gamma)}
\end{equation}

where \\(\delta\\) is the desired error threshold.

The loss of this system is therefore:

\begin{equation}
|| U^{\pi k} - U^{\*} || < \frac{2\epsilon \gamma}{1-\gamma}
\end{equation}


## asynchronous value iteration {#asynchronous-value-iteration}

We choose an ordering of states. We then loop through the entire list, updating the value function. Then, we loop through this system multiple times until the system converged.
