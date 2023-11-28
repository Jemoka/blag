+++
title = "logistic regression"
author = ["Houjun Liu"]
draft = false
+++

[Naive Bayes]({{< relref "KBhnaive_bayes.md" >}}) acts to compute \\(P(Y|X)\\) via the [Bayes rule]({{< relref "KBhbayes_theorem.md" >}}) and using the [Naive Bayes assumption]({{< relref "KBhnaive_bayes.md#id-6cdf74a2-2451-47d1-8a62-62aa6dff62c6-naive-bayes-assumption" >}}). What if we can model the value of \\(P(Y|X)\\) directly?

With \\(\sigma\\) as the [sigmoid]({{< relref "KBhsigmoid.md" >}}) function:

\begin{equation}
P(Y=1|X=x) = \sigma (\theta^{\top}x)
\end{equation}

and we tune the parameters of \\(\theta\\) until this looks correct.

We always want to introduce a BIAS parameter, which acts as an offset; meaning the first \\(x\\) should always be \\(1\\), which makes the first value in \\(\theta\\) as a "bias".

For optimizing this function, we have:

\begin{equation}
LL(\theta) = y \log \sigma(\theta^{\top} x) + (1-y) \log (1- \theta^{\top} x)
\end{equation}

and if we took the derivative w.r.t. a particular parameter slot \\(\theta\_{j}\\):

\begin{equation}
\pdv{LL(\theta)}{\theta\_{j}} = \sum\_{i=1}^{n} \qty[y^{(i)} - \sigma(\theta^{\top}x^{(i)})] x\_{j}^{(i)}
\end{equation}


## logistic regression assumption {#logistic-regression-assumption}

We assume that there exists that there are some \\(\theta\\) which, when multiplied to the input and squashed by th [sigmoid]({{< relref "KBhsigmoid.md" >}}) function, can model our underlying [probability]({{< relref "KBhprobability.md" >}}) distribution:

\begin{equation}
\begin{cases}
P(Y=1|X=x) = \sigma (\theta^{\top}x) \\\\
P(Y=0|X=x) = 1- \sigma (\theta^{\top}x) \\\\
\end{cases}
\end{equation}

We then attempt to compute a set of \\(\theta\\) which:

\begin{equation}
\theta\_{MLE} = \arg\max\_{\theta} P(y^{(1)}, \dots, y^{(n)} | \theta, x\_1 \dots x\_{n})
\end{equation}


## Log Likelihood of Logistic Regression {#log-likelihood-of-logistic-regression}

To actually perform [MLE]({{< relref "KBhmaximum_likelihood_parameter_learning.md" >}}) for the $&theta;$s, we need to do [parameter learning]({{< relref "KBhparameter_learning.md" >}}). Now, recall that we defined, though the [logistic regression assumption](#logistic-regression-assumption):

\begin{equation}
P(Y=1|X=x) = \sigma (\theta^{\top}x)
\end{equation}

essentially, this is a Bernouli:

\begin{equation}
(Y|X=x) \sim Bern(p=\sigma(\theta^{\top}x))
\end{equation}

We desire to maximize:

\begin{equation}
P(Y=y | \theta, X=x)
\end{equation}

Now, recall the continous [PDF]({{< relref "KBhprobability_distributions.md#probability-density-function" >}}) of Bernouli:

\begin{equation}
P(Y=y) = p^{y} (1-p)^{1-y}
\end{equation}

we now plug in our expression for \\(p\\):

\begin{equation}
P(Y=y|X=x) = \sigma(\theta^{\top}x)^{y} (1-\sigma(\theta^{\top}x))^{1-y}
\end{equation}

for all \\(x,y\\).

---

Detour. To maximize this, we need to eventually take a derivative of:

\begin{equation}
\sigma(\theta^{\top} x)
\end{equation}

with respect to each \\(\theta\_{j}\\), to do this, recall chain rule:

\begin{equation}
\pdv{\sigma(\theta^{\top}x)}{\theta\_{j}} =
\end{equation}
