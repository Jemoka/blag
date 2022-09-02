+++
title = "Random Walk Hypothesis"
author = ["Houjun Liu"]
draft = false
+++

The [Random Walk Hypothesis]({{< relref "KBhrandom_walk.md" >}}) is a [financial econometric]({{< relref "KBhfinancial_markets_intro.md" >}}) hypothesis that stocks have the same distribution and independent of each other: that stocks are a random variable and not predictable in a macro space.

To set up the random walk hypothesis, let's begin with some time \\(t\\), an asset return \\(r\_t\\), some time elapsed \\(k\\), and some future asset return \\(r\_{t+k}\\).

We will create two random variables \\(f(r\_t)\\) and \\(g(r\_{t+k})\\), which \\(f\\) and \\(g\\) are arbitrary functions we applied to analyze the return at that time.

The [Random Walk Hypothesis]({{< relref "KBhrandom_walk.md" >}}) tells us that, at any two unrelated given time, you cannot use the behavior of \\(r\_t\\) to predict anything about \\(r\_{t+k}\\), under any kind of analysis \\(f\\) or \\(g\\), that:

\begin{equation}
    Cov[f(r\_t), g(r\_{t+k})] = 0
\end{equation}

So, all of the [Random Walk Hypothesis]({{< relref "KBhrandom_walk.md" >}}) models would leverage the above result, that the two time info don't evolve together and they are independently, [random]({{< relref "KBhrandom.md" >}})ly distributed: they are [random variable]({{< relref "KBhrandom_variables.md" >}})s.


## return (FinMetrics) {#return--finmetrics}

Importantly: its not the _price_ that follows the random walk; it is the _RETURN_ that follows the walk; if it was the price, then its possible for price to become negative. Return, technically, is defined by:

\begin{equation}
    R\_t = \frac{p\_t-p\_{t-1}}{p\_{t-1}}
\end{equation}

However, we really are interested in the natural log of the prices:

\begin{equation}
    r\_t = log(p\_t) - log(p\_{t-1}) \approx R\_t
\end{equation}

We can do this is because, for small \\(x\\), \\(log\ x \approx x-1\\).

We do this is because, if we were wanting to add the returns over the last \\(n\\) days, in \\(R\_t\\) you'd have to multiply them:

\begin{equation}
    \frac{p\_{t+1}}{p\_t} \cdot \frac{p\_t}{p\_{t-1}} = \frac{p\_{t+1}}{p\_{t-1}}
\end{equation}

This is bad, because of the [central limit theorem]({{< relref "KBhcentral_limit_theorem.md" >}}). To make a random variable built of normalizing \\(n\\) items, you have to _add_ and not _multiply_ them together over a time range. We want to be able to add.

Therefore, \\(r\_t\\) can achieve the same division by adding (see the [log laws]({{< relref "KBhlog_laws.md" >}})).

But either way, with enough, we know that \\(r\_t\\) is independently, identity distributed.


## Martingale Model {#martingale-model}

The [Martingale Model](#martingale-model) comes from the idea that "true gambling is true equal conditions (money, opponents, bystanders, situations, die, and dice.)" Therefore, any amount of bias towards one direction/party is advantageous for that person.

Therefore, we have that:

\begin{equation}
    E[P\_{t+1}-P\_t | P\_t, P\_{t-1},\ldots] = 0
\end{equation}

where, \\(P\_t\\) is one's wealth at time \\(t\\). This means that there is about a zero-sum fair game at every timestamp, even despite you knowing the historical performance.

Therefore, we would expect the result of today's price to be exactly yesterday's price---even given the entire history. Therefore, the best predictor (to minimize square error) of today's price is yesterday's price.

In fact, it was theorized that an efficient