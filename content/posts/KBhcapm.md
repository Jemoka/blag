+++
title = "Capital-Asset Pricing Model"
author = ["Houjun Liu"]
draft = false
+++

[CAPM]({{< relref "KBhcapm.md" >}}) is a method of portfolio selection analysis which focuses on _maximizing_ [return]({{< relref "KBhrandom_walk.md#return--finmetrics" >}}) given some fixed variance.


## Sharpe Ratio {#sharpe-ratio}

The [Sharpe Ratio](#sharpe-ratio) is a measure of the risk-adjusted performance of an asset---given the rate of return of some risk-free asset.

It is defined as:

\begin{equation}
S\_{a} = \frac{E[R\_{a}-R\_{b}]}{\sigma\_{a}}
\end{equation}

where, \\(R\_{a}\\) is the raw [return]({{< relref "KBhrandom_walk.md#return--finmetrics" >}}) of the asset, \\(R\_{b}\\) is the risk-free rate of [return]({{< relref "KBhrandom_walk.md#return--finmetrics" >}}), and \\(\sigma\_{a}\\) is the standard deviation of the asset "excess" return (i.e. standard deviation actual return - expected return---how much extra there is).


## Capital Market Line {#capital-market-line}

The [Capital Market Line](#capital-market-line) is a line that uses the [Sharpe Ratio](#sharpe-ratio) of a **market** as a whole (how the market is performing against the risk-free rate) to analyze the performance of portfolio. It plots the performance of an "optimal portfolio" in a given market.

Let's construct first the [Sharpe Ratio](#sharpe-ratio) of a hypothetical market:

\begin{equation}
\frac{R\_{t}-r\_{f}}{\sigma\_{t}}
\end{equation}

where \\(R\_{T}\\) is the market return, \\(r\_{f}\\) is the risk-free rate, and \\(\sigma\_{t}\\) is standard-deviation of the market returns.

We will multiply this value by the standard-deviation of your portfolio to calculate what the market claims should be your expected return. Then, we shift the line by the risk-free rate (as you are expected also to get that rate back in your return.

So an "effecient" portfolio should behave like:

\begin{equation}
R\_{p} = r\_{f}+\frac{R\_{T}-r\_{f}}{\sigma\_{T}}\sigma\_{p}
\end{equation}

(the risk-free rate, plus how much you are expected to get minus the r

{{< figure src="/ox-hugo/2022-10-27_10-35-03_screenshot.png" >}}


## Tangency Portfolio {#tangency-portfolio}