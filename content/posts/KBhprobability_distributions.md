+++
title = "probability distributions"
author = ["Houjun Liu"]
draft = false
+++

[probability distributions]({{< relref "KBhprobability_distributions.md" >}}) "assigns probability to outcomes"

\\(X\\) follows distribution \\(D\\). \\(X\\) is a "\\(D\\) random variable", where \\(D\\) is some distribution ([normal]({{< relref "KBhaxler_7_a.md#normal" >}}), gaussian, etc.)

syntax: \\(X \sim D\\).


## types of distributions {#types-of-distributions}


### Gaussian distribution {#gaussian-distribution}

\begin{equation}
X \sim N(\mu, \sigma^{2})
\end{equation}

Its [PDF](#probability-distributions) is:

\begin{equation}
f\_{x}(x) = \frac{1}{\sigma \sqrt{2\pi}} e^{\frac{-(x-\mu)^{2}}{2 \sigma ^{2}}}
\end{equation}

And its exepctations:

\\(E(X) = \mu\\)

\\(Var(X) = \sigma^{2}\\) (TODO check this)


### uniform distribution {#uniform-distribution}

\begin{equation}
X \sim Uni(\alpha, \beta)
\end{equation}

\begin{equation}
f(x) = \begin{cases}
\frac{1}{\beta -\alpha } \\\0
\end{cases}
\end{equation}

\begin{equation}
E[x] = \frac{1}{2}(\alpha +\beta)
\end{equation}

\begin{equation}
Var(X) = \frac{1}{12}(\beta -\alpha )^{2}
\end{equation}


## three ways of analysis {#three-ways-of-analysis}


### probability mass function {#probability-mass-function}

[PMF](#probability-mass-function) is a function that maps possible outcomes of a discrete random variables to the corresponding probability.

\\(P(event) = value\\)


### probability distributions {#probability-distributions}

[PDF](#probability-distributions)s is a function that maps continuous random variables to the corresponding probability.

and \\(\int P\ dE = 1\\) because of [axiom of probability]({{< relref "KBhprobability.md#axiom-of-probability" >}})


### cumulative distribution function {#cumulative-distribution-function}

What is the probability that a [random variable]({{< relref "KBhrandom_variables.md" >}}) takes on value less tha

\begin{equation}
cdf\_{x}(x) = P(X<x) = \int\_{-\infty}^{x} p(x') dx'
\end{equation}
