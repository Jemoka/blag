+++
title = "Maximum Likelihood Parameter Learning"
author = ["Houjun Liu"]
draft = false
+++

"We find the [parameter]({{< relref "KBhparameter.md" >}}) that maximizes the likelihood."

We desire \\(\theta\\) parameter from some data \\(D\\). To do this, we simply optimize:

\begin{equation}
\hat{\theta} = \arg\max\_{\theta}P(D|\theta)
\end{equation}

that is, we desire some \\(\theta\\) that maximize the [probability]({{< relref "KBhprobability.md" >}}) of what's observed. Where:

\begin{equation}
P(D|\theta) = \prod\_{i} P(o\_{i}| \theta)
\end{equation}

for each \\(o\_{i} \in D\\). This only works, of course, if each \\(o\_{i} \in D\\) is [independent]({{< relref "KBhprobability.md#independence" >}}) from each other, which we often assume so by calling the samples [independently and identically distributed]({{< relref "KBhindependently_and_identically_distributed.md" >}}).

The summation is a little unwieldy, so we take the logs and apply log laws to turn the multiplication into a summation:

\begin{equation}
\hat{\theta} = \arg\max\_{\theta} \sum\_{i} \log P(o\_{i}|\theta)
\end{equation}

"add the log probabilities of each of the outcomes you observed happening according to your unoptimized theta, and maximize it"


## Example {#example}

Say we want to train a model to predict whether or not a plane will crash. Suppose our network is very simple:

\\(\theta\\) represents if there will be an midair collision. Therefore, we have two disconnected nodes:

\begin{equation}
P(crash) = \theta
\end{equation}

\begin{equation}
P(safe) = 1-\theta
\end{equation}

Now, suppose we observed that there was \\(m\\) flights and \\(n\\) midair collisions between them. We can then write then:

\begin{equation}
P(D|\theta) = \theta^{n}(1-\theta)^{m-n}
\end{equation}

because \\(\theta^{n}(1-\theta)^{m-n}\\) is the total probability of the data you are given occurring (\\(n\\) crashes, \\(m-n\\) non crashing flights).

Now, we seek to maximise this value---because the probability of \\(P(D)\\) occurring should be \\(1\\) because \\(D\\) actually occured.

Its mostly algebra at this point:

{{< figure src="/ox-hugo/2023-10-05_10-07-18_screenshot.png" >}}

Steps:

1.  we first compute the probability of each of the sample happening according to old \\(\theta\\) to get \\(P(D|\theta)\\)
2.  we then take the log of it to make it a summation
3.  we then try to maximize \\(\theta\\) to

What this tells us is...


## Generic Maximum Likelihood Estimate {#generic-maximum-likelihood-estimate}

Overall, its kind of unsurprising from the [Frequentist Definition of Probability]({{< relref "KBhprobability.md#frequentist-definition-of-probability" >}}), but:

\begin{equation}
\hat{\theta}\_{i} = \frac{n\_{i}}{\sum\_{j=1}^{k} n\_{j}}
\end{equation}

for some observations \\(n\_{1:k}\\).


## Problems with [Maximum Likelihood Parameter Learning]({{< relref "KBhmaximum_likelihood_parameter_learning.md" >}}) {#problems-with-maximum-likelihood-parameter-learning--kbhmaximum-likelihood-parameter-learning-dot-md}

This requires a lot of data to make work: for instance---if we don't have any plane crashes observed in \\(n\\) files, this scheme would say there's no chance of plane crashes. This is not explicitly true.

Therefore, we use [Baysian Parameter Learning]({{< relref "KBhbaysian_parameter_learning.md" >}}).