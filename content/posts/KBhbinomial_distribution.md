+++
title = "binomial distribution"
author = ["Houjun Liu"]
draft = false
+++

A [binomial distribution]({{< relref "KBhbinomial_distribution.md" >}}) is a typo of distribution whose contents are:

-   Binary
-   Independent
-   Fixed number
-   Same probability

Think: "what's the [probability]({{< relref "KBhprobability.md" >}}) of \\(n\\) coin flips getting \\(k\\) heads given the head's probability is \\(p\\)".


## constituents {#constituents}

We write:

\begin{equation}
X \sim Bin(n,p)
\end{equation}

where, \\(n\\) is the number of trials, \\(p\\) is the probability of success on each trial.


## requirements {#requirements}

Here is the [probability mass function]({{< relref "KBhprobability_mass_function.md" >}}):

\begin{equation}
P(X=k) = {n \choose k} p^{k}(1-p)^{n-k}
\end{equation}


## additional information {#additional-information}


### properties of [binomial distribution]({{< relref "KBhbinomial_distribution.md" >}}) {#properties-of-binomial-distribution--kbhbinomial-distribution-dot-md}

-   **expected value**: \\(np\\)
-   **standard deviation**: \\(\sqrt{np(1-p)}\\)


### deriving the [expectation]({{< relref "KBhexpectation.md" >}}) {#deriving-the-expectation--kbhexpectation-dot-md}

The expectation of the [binomial distribution]({{< relref "KBhbinomial_distribution.md" >}}) is derivable from the fact:

\begin{equation}
X = \sum\_{i=1}^{n} Y\_{i}
\end{equation}

where,

\begin{equation}
\begin{cases}
X \sim Bin(n,p) \\\\
Y\_{i} \sim Bern(p)
\end{cases}
\end{equation}

Now, recall that [expected value]({{< relref "KBhexpectation.md" >}}) is linear.

Therefore, we can write that:

{{< figure src="/ox-hugo/2023-10-11_16-46-39_screenshot.png" >}}
