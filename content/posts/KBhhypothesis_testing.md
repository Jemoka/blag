+++
title = "hypothesis testing"
author = ["Houjun Liu"]
draft = false
+++

[hypothesis testing]({{< relref "KBhhypothesis_testing.md" >}}) is the mechanism by which a hypothesis is tested statistically.

The core logic of [hypothesis testing]({{< relref "KBhhypothesis_testing.md" >}}): have a metric, do tests, calculate probability that the outcome could have happened given the metric is true.

To do this, we have to define a few different terms and statistics:


## null hypothesis {#null-hypothesis}

A [null hypothesis](#null-hypothesis) is a "no difference" hypothesis created as a part of [hypothesis testing]({{< relref "KBhhypothesis_testing.md" >}}). It is usually stated as an equality.


## alternative hypothesis {#alternative-hypothesis}

The [alternative hypothesis](#alternative-hypothesis) is the "new news" hypothesis created as a part of [hypothesis testing]({{< relref "KBhhypothesis_testing.md" >}}), whereby the confirmation would introduce new information.


## p-value {#p-value}

the [p-value](#p-value) of a [hypothesis test]({{< relref "KBhhypothesis_testing.md" >}}) is the probability of the results acquired taking place given if the [null hypothesis](#null-hypothesis). That is:

\begin{equation}
   p(\hat{p} | H\_0\ true)
\end{equation}