+++
title = "Baysian Parameter Learning"
author = ["Houjun Liu"]
draft = false
+++

We treat this as an inference problem in [Naive Bayes]({{< relref "KBhnaive_bayes.md" >}}): **observations are independent from each other**.

Instead of trying to compute a \\(\theta\\) that works for [Maximum Likelihood Parameter Learning]({{< relref "KBhmaximum_likelihood_parameter_learning.md" >}}), what we instead do is try to understand what \\(\theta\\) can be in terms of a distribution.

That is, we want to get some:

{{< figure src="/ox-hugo/2023-10-05_10-22-12_screenshot.png" >}}

"for each value of \\(\theta\\), what's the chance that that is the actual value"

To do this, we desire:

\begin{equation}
p(\theta | D)
\end{equation}

"what's the probability of theta being at a certain value given the observations we had."

And to obtain the actual the actual value, we calculate the [expectation]({{< relref "KBhexpectation.md" >}}) of this distribution:

\begin{equation}
\hat{\theta} = \mathbb{E}[\theta] = \int \theta p(\theta | D) \dd{\theta}
\end{equation}

If its not possible to obtain such an expected value, we then calculate just the mode of the distribution (like where the peak probability of \\(\theta\\) is) by:

\begin{equation}
\hat{\theta} = \arg\max\_{\theta} p(\theta | D)
\end{equation}


## Bayesian Parameter Learning on Binary Distributions {#bayesian-parameter-learning-on-binary-distributions}

We are working in a [Naive Bayes]({{< relref "KBhnaive_bayes.md" >}}) environment, where we assume that \\(o\_{1:m}\\) are [conditionally independent]({{< relref "KBhbaysian_network.md#conditional-independence" >}}). Then, we essentially consider each class as carrying some parameter \\(\theta\\) which contains the possibility of that class happening.

{{< figure src="/ox-hugo/2023-10-05_14-55-41_screenshot.png" >}}

Using the same steps as [inference with Naive Bayes]({{< relref "KBhnaive_bayes.md#id-76165699-9f9a-4b7e-a081-c8462cece2ee-inference-with-id-6cdf74a2-2451-47d1-8a62-62aa6dff62c6-naive-bayes" >}}) and some algebra:

\begin{equation}
p(\theta | o\_{1:m}) \propto p(\theta, o\_{1:m})
\end{equation}

{{< figure src="/ox-hugo/2023-10-05_17-20-53_screenshot.png" >}}

Now, we would like to normalize this function for \\(\theta \in [0,1]\\), so, we get:

\begin{equation}
\int\_{0}^{1} \theta^{n}(1-\theta)^{m-n}\dd{\theta} = \frac{\Gamma(n+1) \Gamma(m-n+1)}{\Gamma(m+2)}
\end{equation}

where, \\(\Gamma\\) is a real valued factorial generalization.

Normalizing the output, we have that:

\begin{align}
p(\theta | o\_{1:m}) &\propto p(\theta, o\_{1:m})  \\\\
&= \frac{\Gamma(n+1) \Gamma(m-n+1)}{\Gamma(m+2)} \theta^{n} (1-\theta)^{m-n} \\\\
&= Beta(\theta | n+1, m-n +1)
\end{align}

where \\(m\\) is the sample size and \\(n\\) is the number of events in the sample space.

Beta is a special distribution which takes parameters \\(\alpha, \beta\\),and has mean:

\begin{equation}
\frac{\alpha}{\alpha + \beta}
\end{equation}

and has mode:

\begin{equation}
\frac{\alpha -1 }{\alpha + \beta -2}
\end{equation}

when \\(\alpha > 1\\) and \\(\beta > 1\\).

This means that, at \\(beta(1,1)\\), we have a inform distribution

{{< figure src="/ox-hugo/2023-10-05_21-32-18_screenshot.png" >}}


### Beta Distribution Shifting {#beta-distribution-shifting}

For binary outcomes, the beta distribution can be updated without doing any math.

For instance, say we had:

\begin{equation}
\theta\_{t} = Beta(\alpha, \beta)
\end{equation}

and we observed that \\(o\_{i} = 1\\), then:

\begin{equation}
\theta\_{t+1} = Beta(\alpha+1, \beta)
\end{equation}

instead, if we observed that \\(o\_{i} = 0\\), then:

\begin{equation}
\theta\_{t+1} = Beta(\alpha, \beta+1)
\end{equation}


### Choosing a prior {#choosing-a-prior}

-   do it with only the problem and no knowledge of the data
-   uniform typically works well, but if you have any reason why it won't be uniform (say coin flip), you should count accordingly such as making the distribution more normal with \\(Beta(1,1)\\).
