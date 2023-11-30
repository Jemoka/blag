+++
title = "deep learning"
author = ["Houjun Liu"]
draft = false
+++

[deep learning]({{< relref "KBhdeep_learning.md" >}}) is [MLE]({{< relref "KBhmaximum_likelihood_parameter_learning.md" >}}) performed with neural networks. A [neural network]({{< relref "KBhdeep_learning.md" >}}) is many [logistic regression]({{< relref "KBhlogistic_regression.md" >}}) pieces (sic.?) stack on top of each other.

---

We begin motivating this with trying to solve MNIST with [logistic regression]({{< relref "KBhlogistic_regression.md" >}}). What a time to be alive. After each layer of [deep learning]({{< relref "KBhdeep_learning.md" >}}), we are going to use a layer of "[hidden variable]({{< relref "KBhinference.md" >}})", made of singular [logistic regression]({{< relref "KBhlogistic_regression.md" >}})s,

---

Notation:

\\(x\\) is the input, \\(h\\) is the hidden layers, and \\(\hat{y}\\) is the prediction.

We call each weight, at each layer, from \\(x\_{i}\\) to \\(h\_{j}\\), \\(\theta\_{i,j}^{(h)}\\). At every neuron on each layer, we calculate:

\begin{equation}
h\_{j} = \sigma\qty[\sum\_{i}^{} x\_{i} \theta\_{i,j}^{(h)}]
\end{equation}

\begin{equation}
\hat{y} = \sigma\qty[\sum\_{i}^{} h\_{i}\theta\_{i}^{(y)}]
\end{equation}

note! we often


## backpropegation {#backpropegation}

Motivation:

-   deep learning is useful by having good \\(\theta\\)
-   we can find useful thetas by [MLE]({{< relref "KBhmaximum_likelihood_parameter_learning.md" >}})
-   we [MLE]({{< relref "KBhmaximum_likelihood_parameter_learning.md" >}}) by doing optimization to maximize the [likelyhood]({{< relref "KBhlikelyhood.md" >}})

For one data point, let us define our neural network:

\begin{equation}
h\_{j} = \sigma\qty[\sum\_{i}^{} x\_{i} \theta\_{i,j}^{(h)}]
\end{equation}

\begin{equation}
\hat{y} = \sigma\qty[\sum\_{i}^{} h\_{i}\theta\_{i}^{(y)}]
\end{equation}

we can define our network:

\begin{equation}
L(\theta) = P(Y=y|X=x) = (\hat{y})^{y} (1-\hat{y})^{1-y}
\end{equation}

from IID datasets, we can multiply the probablities together:

\begin{equation}
L(\theta) = \prod\_{i=1}^{n} (\hat{y\_{i}})^{y\_{i}} (1-\hat{y\_{i}})^{1-y\_{i}}
\end{equation}

and, to prevent calculus and derivative instability, we take the log:

\begin{equation}
LL(\theta) = \sum\_{i=1}^{n}{y\_{i}}\log  (\hat{y\_{i}}) \cdot  ( 1-y\_{i} )\log (1-\hat{y\_{i}})
\end{equation}

We want to maximise this, meaning we perform [gradient ascent]({{< relref "KBhargmax.md#gradient-ascent" >}}) on this statement. Recall the chain rule; so we can break each layer down:

\begin{equation}
\pdv{LL(\theta)}{\theta\_{ij}^{h}} = \pdv{LL(\theta)}{\hat{y}} \pdv{\hat{y}}{h\_{j}} \pdv{h\_{j}}{\theta\_{ij}^{h}}
\end{equation}

furthermore, for any summation,

\begin{equation}
\dv x \sum\_{i=0}^{} x = \sum\_{i=0}^{}\dv x x
\end{equation}

So we can consider our derivatives with respect to each data point.
