+++
title = "Martingale Model"
author = ["Houjun Liu"]
draft = false
+++

The [Martingale Model]({{< relref "KBhmartingale_model.md" >}}) states: if we observed the closing price of the market yesterday, we expect that the market is going to open at the close price yesterday.

Formally:

\begin{equation}
E\qty [X\_{k}\middle|X\_{k-1}, X\_{k-2},\ldots] = X\_{k-1}
\end{equation}

"irrespective of what you know, no matter how long the history, the best expectation of today's price is yesterday's price."

This is not a _for sure!_ modeling statement: this is simply the expected value!! That means, after \\(\infty\\) times of re-running the universe starting "yesterday", the new opening price will converge to the last closing price.

Two important conclusions:

1.  If we know the closing price yesterday (it is observed), the price today will be DETERMINED and not!!! a [random variable]({{< relref "KBhrandom_variables.md" >}})
2.  If the closing price yesterday is a [random variable]({{< relref "KBhrandom_variables.md" >}}), the price today will be IN-DETERMINED and also a [random variable]({{< relref "KBhrandom_variables.md" >}})

Therefore, the "randomness is fair", and therefore the "market is not drifting in favor/against you."

---

The [Martingale Model]({{< relref "KBhmartingale_model.md" >}}) comes from the idea that "true gambling is true equal conditions (money, opponents, bystanders, situations, die, and dice.)" Therefore, any amount of bias towards one direction/party is advantageous for that person.

Therefore, we have that:

\begin{equation}
    E[P\_{t+1}-P\_t | P\_t, P\_{t-1},\ldots] = 0
\end{equation}

where, \\(P\_t\\) is one's wealth at time \\(t\\). This means that there is about a zero-sum fair game at every timestamp, even despite you knowing the historical performance.

Therefore, we would expect the result of today's price to be exactly yesterday's price---even given the entire history. Therefore, the best predictor (to minimize square error) of today's price is yesterday's price.

In fact, it was theorized that an efficient market should follow exactly this behavior.