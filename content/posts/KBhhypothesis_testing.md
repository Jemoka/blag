+++
title = "hypothesis testing"
author = ["Houjun Liu"]
draft = false
+++

[hypothesis testing]({{< relref "KBhhypothesis_testing.md" >}}) is the mechanism by which a hypothesis is tested statistically.

The core logic of [hypothesis testing]({{< relref "KBhhypothesis_testing.md" >}}): have a metric, do tests, calculate probability that the outcome could have happened given the metric is true.


## null hypothesis {#null-hypothesis}

A [null hypothesis](#null-hypothesis) is a "no difference" hypothesis created as a part of [hypothesis testing]({{< relref "KBhhypothesis_testing.md" >}}). It is usually stated as an equality.


## alternative hypothesis {#alternative-hypothesis}

The [alternative hypothesis](#alternative-hypothesis) is the "new news" hypothesis created as a part of [hypothesis testing]({{< relref "KBhhypothesis_testing.md" >}}), whereby the confirmation would introduce new information.


## p-value {#p-value}

the [p-value](#p-value) of a [hypothesis test]({{< relref "KBhhypothesis_testing.md" >}}) is the probability of the results acquired taking place given if the [null hypothesis](#null-hypothesis). That is:

\begin{equation}
   p(\hat{p} | H\_0\ true)
\end{equation}

To figure out the above probability, you could either simulate the occurrence and look at a histogram (more common for [AP Statistics]({{< relref "KBhAPStats.md" >}}) anyways) or measure a few other statistics. We will talk about them later.

To use [p-value](#p-value) as a [hypothesis test]({{< relref "KBhhypothesis_testing.md" >}}), the sample has to meet the [conditions for inference](#conditions-for-inference).


### conditions for inference {#conditions-for-inference}

-   has to be random
-   has to be reasonably normal
-   each sample has to be independent (or 10% rule)


### use a z-statistic to find p-value {#use-a-z-statistic-to-find-p-value}

1.  Given a sample proportion, calculate the sample proportion standard deviation (given on the formula sheet)
2.  Then, divide the difference between measured and null proportions to figure \\(z\\)

that is,

\begin{equation}
   z = \frac{\hat{p}-p\_0}{\sqrt{\frac{p\_0(1-p\_0)}{n}}}
\end{equation}

Look up the probability of \\(z\\) taking place on a \\(z\\) table. Then, \\(1-z\\) would yield the \\(p\\) vaule.


## significance level {#significance-level}

[significance level](#significance-level) is the level by which one would accept a [p-value](#p-value) is being indicative of the success of a test. We usually use the letter \\(\alpha\\) to denote this.


## Type I Error {#type-i-error}

A [Type I Error](#type-i-error) takes place when you reject the [null hypothesis](#null-hypothesis) during [hypothesis testing]({{< relref "KBhhypothesis_testing.md" >}}) even while its true: i.e., a false positive.

The probability of having a [Type I Error](#type-i-error) is the [significance level](#significance-level) of the test.


## Type II Error {#type-ii-error}

A [Type II Error](#type-ii-error) takes place when you accept the [null hypothesis](#null-hypothesis) during [hypothesis testing]({{< relref "KBhhypothesis_testing.md" >}}) even while its false.

The probability of having a [Type II Error](#type-ii-error) is the conjugate of the [power](#power--statistics) of a test.


## power (statistics) {#power--statistics}

[power](#power--statistics) is a [statistic]({{< relref "KBhstastistic.md" >}}) calculable during [hypothesis testing]({{< relref "KBhhypothesis_testing.md" >}}). Its the probability of rejecting the [null hypothesis](#null-hypothesis) given the [null hypothesis](#null-hypothesis) is false. Also known as the conjugate of the [Type II Error](#type-ii-error).

[power](#power--statistics) increases as [significance level](#significance-level) increases, but then the probability of a [Type I Error](#type-i-error) increases as well.