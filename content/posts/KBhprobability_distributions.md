+++
title = "probability distribution"
author = ["Houjun Liu"]
draft = false
+++

[probability distributions]({{< relref "KBhprobability_distributions.md" >}}) "assigns probability to outcomes"

\\(X\\) follows distribution \\(D\\). \\(X\\) is a "\\(D\\) random variable", where \\(D\\) is some distribution ([normal]({{< relref "KBhaxler_7_a.md#normal" >}}), gaussian, etc.)

syntax: \\(X \sim D\\).

Each distribution has three properties:

-   variables (what is being modeled)
-   values (what values can they take on)
-   parameters (how many degrees of freedom do we have)


## Methods of Compressing the Parameters of a Distribution {#methods-of-compressing-the-parameters-of-a-distribution}

So, for instance, for a binary distribution with \\(n\\) variables which we know nothing about, we have:

\begin{equation}
2^{n} - 1
\end{equation}

parameters (\\(2^{n}\\) different possibilities of combinations, and \\(1\\) non-free variables to ensure that the distribution add up)


### assuming independence {#assuming-independence}

HOWEVER, if the variables were [independent]({{< relref "KBhprobability.md#independence" >}}), this becomes much easier. Because the variables are independent, we can claim that:

\begin{equation}
p(x\_{1\dots n}) =  \prod\_{i}^{} p(x\_{i)}
\end{equation}


### decision tree {#decision-tree}

For instance, you can have a decision tree which you selectively ignore some combinations.

{{< figure src="/ox-hugo/2023-09-28_10-13-07_screenshot.png" >}}

In this case, we ignored \\(z\\) if both \\(x\\) and \\(y\\) are \\(0\\).


### Baysian networks {#baysian-networks}

see [Baysian Network]({{< relref "KBhbaysian_network.md" >}})


## types of probability distributions {#types-of-probability-distributions}

-   [discrete distribution]({{< relref "KBhdiscrete_distribution.md" >}})
-   [continuous distribution]({{< relref "KBhcontinuous_distribution.md" >}})
-   [joint probability distribution]({{< relref "KBhjoint_probability_distribution.md" >}})


## distribution of note {#distribution-of-note}

-   [uniform distribution](#uniform-distribution)
-   gaussian distributions
    -   [Gaussian distribution](#gaussian-distribution)
    -   [Truncated Gaussian distribution](#truncated-gaussian-distribution)
    -   [Gaussian mixture model](#gaussian-mixture-model)


### uniform distribution {#uniform-distribution}

\begin{equation}
X \sim Uni(\alpha, \beta)
\end{equation}

\begin{equation}
f(x) = \begin{cases}
\frac{1}{\beta -\alpha }, 0\leq x \leq 10 \\\0
\end{cases}
\end{equation}

\begin{equation}
E[x] = \frac{1}{2}(\alpha +\beta)
\end{equation}

\begin{equation}
Var(X) = \frac{1}{12}(\beta -\alpha )^{2}
\end{equation}


### Gaussian Things {#gaussian-things}


#### standard normal density function {#standard-normal-density-function}

This is a function used to model many Gaussian distributions.

\begin{equation}
\phi(x) = \frac{1}{\sqrt{2\pi}} e^{-\frac{x^{2}}{2}}
\end{equation}


#### Gaussian distribution {#gaussian-distribution}

\begin{equation}
X \sim N(\mu, \sigma^{2})
\end{equation}

Its [PDF](#probability-density-functions) is:

\begin{equation}
\mathcal{N}(x \mid \mu, \sigma^{2}) = \frac{1}{\sigma} \phi \qty(\frac{x-\mu}{\sigma})
\end{equation}

where, \\(\phi\\) is the [standard normal density function](#standard-normal-density-function)

And its expectations:

\\(E(X) = \mu\\)

\\(Var(X) = \sigma^{2}\\)


#### Truncated Gaussian distribution {#truncated-gaussian-distribution}

Sometimes, we don't want to use a [Gaussian distribution](#gaussian-distribution) for values above or below a threshold (say if they are physically impossible). In those cases, we have some:

\begin{equation}
X \sim N(\mu, \sigma^{2}, a, b)
\end{equation}

bounded within the interval of \\((a,b)\\). The [PDF](#probability-density-functions) of this function is given by:

\begin{equation}
N(\mu, \sigma^{2}, a, b) = \frac{\frac{1}{\sigma} \phi \qty(\frac{x-\mu }{\sigma })}{\Phi \qty(\frac{b-\mu }{\sigma }) - \Phi \qty(\frac{a-\mu}{\sigma})}
\end{equation}

where:

\begin{equation}
\Phi = \int\_{-\infty}^{x} \phi (x') \dd{x'}
\end{equation}

and where \\(\phi\\) is the [standard normal density function](#standard-normal-density-function).


#### Gaussian mixture model {#gaussian-mixture-model}

Gaussian models are typically [unimodal]({{< relref "KBhunimodal.md" >}}), meaning they have one peak (things decrease to the left of that peak, increases to the right of it).

Therefore, in order to model something more complex with multiple peaks, we just weighted average multiple gaussian models

\begin{equation}
p(x | \dots ) = \sum\_{i-1}^{n}p\_i \mathcal{N}(x | u\_{i}, {\sigma\_{i}}^{2})
\end{equation}

whereby,


## three ways of analysis {#three-ways-of-analysis}


### probability mass function {#probability-mass-function}

[PMF](#probability-mass-function) is a function that maps possible outcomes of a discrete random variables to the corresponding probability.

\\(P(event) = value\\)


### probability density functions {#probability-density-functions}

[PDF](#probability-density-functions)s is a function that maps continuous random variables to the corresponding probability.

and \\(\int P\ dE = 1\\) because of [axiom of probability]({{< relref "KBhprobability.md#axiom-of-probability" >}})


### cumulative distribution function {#cumulative-distribution-function}

What is the probability that a [random variable]({{< relref "KBhrandom_variables.md" >}}) takes on value less tha

\begin{equation}
cdf\_{x}(x) = P(X<x) = \int\_{-\infty}^{x} p(x') dx'
\end{equation}


### quantile function {#quantile-function}

\begin{equation}
\text{quantile}\_{X}(\alpha)
\end{equation}

is the value \\(x\\) such that:

\begin{equation}
P(X \leq x) = \alpha
\end{equation}

That is, the [quantile function](#quantile-function) returns the minimum value of \\(x\\) at which point a certain [cumulative distribution](#cumulative-distribution-function) value desired is achieved.
