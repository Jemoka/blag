+++
title = "Naive Bayes"
author = ["Houjun Liu"]
draft = false
+++

[Naive Bayes]({{< relref "KBhnaive_bayes.md" >}}) is a special class of [Baysian Network]({{< relref "KBhbaysian_network.md" >}}) [inference]({{< relref "KBhinference.md" >}}) problem which follows a specific structure used to solve classification problems.

The [Naive Bayes]({{< relref "KBhnaive_bayes.md" >}}) classifier is a [Baysian Network]({{< relref "KBhbaysian_network.md" >}}) of the shape:

{{< figure src="/ox-hugo/2023-10-03_13-15-54_screenshot.png" >}}

(Why is this backwards(ish)? Though we typically think about models as a function M(obs) = cls, the real world is almost kind of opposite; it kinda works like World(thing happening) = things we observe. Therefore, the observations are a RESULT of the class happening.)

We consider, **naively**, \\(o\_{1:n}\\) are all [conditionally independent]({{< relref "KBhbaysian_network.md#conditional-independence" >}}) on \\(c\\). From this graph, we can therefore use the [probability chain rule]({{< relref "KBhprobability.md#conditional-probability" >}}) + [conditional probability]({{< relref "KBhprobability.md#conditional-probability" >}}) to write that:

\begin{equation}
P(c, o\_{1:n}) = P( c) \prod\_{i=1}^{n} P(o\_{i} | c)
\end{equation}


## [inference]({{< relref "KBhinference.md" >}}) with [Naive Bayes]({{< relref "KBhnaive_bayes.md" >}}) {#inference--kbhinference-dot-md--with-naive-bayes--kbhnaive-bayes-dot-md}

Recall the definition of [inference]({{< relref "KBhinference.md" >}}), for our case here:

given observations \\(o\_{1:n}\\), we desire to know what's the [probability]({{< relref "KBhprobability.md" >}}) of \\(c\\) happening. That is, from [conditional probability]({{< relref "KBhprobability.md#conditional-probability" >}}):

\begin{equation}
P(c | o\_{1:n}) = \frac{P(c, o\_{1:n})}{P(o\_{1:n})}
\end{equation}

Now, from above we have \\(P(c, o\_{1:n})\\) already. To get the denominator, we invoke [law of total probability]({{< relref "KBhprobability.md#law-of-total-probability" >}}) to add up the probability of all observations occurring given all classes. That is:

\begin{equation}
P(o\_{1:n}) = \sum\_{c \in C} P(c, o\_{1:n})
\end{equation}

You will note that this value \\(P(o\_{1:n})\\) is actually constant as long as the network structure does not change. Therefore, we tend to write:

\begin{align}
P(c | o\_{1:n}) &= \frac{P(c, o\_{1:n})}{P(o\_{1:n})}  \\\\
&= \kappa P(c, o\_{1:n})
\end{align}

or, that:

\begin{equation}
P(c|o\_{1:n}) \propto P(c, o\_{1:n})
\end{equation}

"the probability of a class occurring given the inputs is proportional to the probability of that class occurring along with the inputs"


## Motivation: [Bayes rule]({{< relref "KBhbayes_theorem.md" >}}) {#motivation-bayes-rule--kbhbayes-theorem-dot-md}

{{< figure src="/ox-hugo/2023-10-05_09-14-17_screenshot.png" >}}

This will give us:

{{< figure src="/ox-hugo/2023-10-05_09-14-32_screenshot.png" >}}

However, what if we don't want to use the [law of total probability]({{< relref "KBhprobability.md#law-of-total-probability" >}}) to add up \\(P(FB')\\)?

We can actually write a relation that essentially reminds us that the fact that \\(P(FB')\\) as not dependent on \\(TSF\\), so we can write:

\begin{equation}
P(TSF^{1}|FB^{1}) \porpto P(TSF^{1})P(FB^{1} | TSF^{1})
\end{equation}
