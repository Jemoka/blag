+++
title = "Baysian Parameter Learning"
author = ["Houjun Liu"]
draft = false
+++

We treat this as an inference problem in [Naive Bayes]({{< relref "KBhnaive_bayes.md" >}}): **observations are independent from each other**.

Instead of trying to compute a \\(\theta\\) that works for [Maximum Likelihood Parameter Learning]({{< relref "KBhmaximum_likelihood_parameter_learning.md#maximum-likelihood-parameter-learning" >}}), what we instead do is try to understand what \\(\theta\\) can be in terms of a distribution.

That is, we want to get some:

{{< figure src="/ox-hugo/2023-10-05_10-22-12_screenshot.png" >}}

"for each value of \\(\theta\\), what's the chance that that is the actual value"

To do this, we desire:

\begin{equation}
p(\theta | o\_{1:m})
\end{equation}

"what's the probability of theta being at a certain value given the observations we had."


## obtaining the distribution {#obtaining-the-distribution}

We are working in a [Naive Bayes]({{< relref "KBhnaive_bayes.md" >}}) environment, where we assume that \\(o\_{1:m}\\) are [conditionally independent]({{< relref "KBhbaysian_network.md#conditional-independence" >}}). Using the same steps as [inference with Naive Bayes]({{< relref "KBhnaive_bayes.md#id-76165699-9f9a-4b7e-a081-c8462cece2ee-inference-with-id-6cdf74a2-2451-47d1-8a62-62aa6dff62c6-naive-bayes" >}}), we have:

\begin{equation}
p(\theta | o\_{1:m}) \porpto p(\theta, o\_{1:m})
\end{equation}
