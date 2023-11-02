+++
title = "value iteration"
author = ["Houjun Liu"]
draft = false
+++

We apply the [Bellman Expectation Equation]({{< relref "KBhpolicy_evaluation.md#bellman-expectation-equation" >}}) and selecting the [utility]({{< relref "KBhutility_theory.md" >}}) that is calculated by taking the most optimal action given the current [utility]({{< relref "KBhutility_theory.md" >}}):

\begin{equation}
U\_{k+1}(s) = \max\_{a} \qty(R(s,a) + \gamma \sum\_{s'} T(s' | s,a) U\_{k}(s'))
\end{equation}

This iterative process is called the [Bellman backup]({{< relref "KBhvalue_iteration.md" >}}), or [Bellman update]({{< relref "KBhvalue_iteration.md" >}}).

\begin{equation}
U\_1 \dots U\_{k} \dots U^{\*}
\end{equation}

eventually will converge into the [optimal value function]({{< relref "KBhpolicy.md#optimal-policy" >}}). After which, we just extract the [greedy policy]({{< relref "KBhaction_value_function.md#value-function-policy" >}}) from the [utility]({{< relref "KBhutility_theory.md" >}}) to get a [policy]({{< relref "KBhpolicy.md" >}}) to use.

We stop when the [Bellman Residual](#bellman-residual) hits a the desired error threshold:


## Bellman Residual {#bellman-residual}

Take the [L-\\(\infty\\)]({{< relref "KBhl_infty.md" >}}) norm of \\(U^{k+1}-U^{k}\\) (that is, take \\(||U\_{k+1} - U\_{k}||\_{\infty}\\). We call that the [Bellman Residual](#bellman-residual). If this [Bellman Residual](#bellman-residual) drops below \\(\delta\\), it is shown that the error between \\(U^{\*}\\) (convergence) and \\(U\_{k}\\) will only be:

\begin{equation}
\epsilon = \frac{\delta \gamma}{(1-\gamma)}
\end{equation}

So as long as the [Bellman Residual](#bellman-residual) between your two updates \\(\leq \delta\\), you know that you are at most \\(\epsilon\\) away from the [optimal utility]({{< relref "KBhpolicy.md#optimal-policy" >}}).

**You will note that as future discount \\(\gamma \to 1\\), this error bound becomes much larger. Therefore, you have to iterate more to get to the same \\(\epsilon\\).** You need more iterations when \\(\gamma \to 1\\).

Notably, the loss of some arbitrary [utility]({{< relref "KBhutility_theory.md" >}}) derived from [policy evaluation]({{< relref "KBhpolicy_evaluation.md" >}}) is:

\begin{equation}
|| U^{\pi} - U^{\*} || < \frac{2\epsilon \gamma}{1-\gamma}
\end{equation}


## asynchronous value iteration {#asynchronous-value-iteration}

We choose an ordering of states. We then loop through the entire list, updating the value function. Then, we loop through this system multiple times until the system converged.

That is, instead of creating a list of things \\(U\_{k}\\), keeping only the current current one in memory, we come up with some:

\begin{equation}
U(s) \leftarrow \max\_{a} \qty(R(s,a) + \gamma \sum\_{s'} T(s' | s,a) U(s'))
\end{equation}

The idea is, instead of keeping all of the \\(U\_{k-1}\\) until you have calculated all of \\(U\_{k}\\) for each state, we just use an ordering of the states to just use whatever value we calculated last.


## time complexity {#time-complexity}

\begin{equation}
O(S^{2}A)
\end{equation}

where \\(S\\) is the number of states and \\(A\\) the number of actions.

1.  loop over all states in each update
2.  loop over all actions to figure out the max
3.  loop over all next states and calculate their [utility]({{< relref "KBhutility_theory.md" >}})
