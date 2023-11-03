+++
title = "random variable"
author = ["Houjun Liu"]
draft = false
+++

A [random variable]({{< relref "KBhrandom_variables.md" >}}) is a variable that has a value, but there are [uncertainty]({{< relref "KBhuncertainty.md" >}}) with respect to what that value is.

-   **discrete**: finite number of values
-   **continuous**: infinitely many possible values


## [probability mass function]({{< relref "KBhprobability_mass_function.md" >}}) {#probability-mass-function--kbhprobability-mass-function-dot-md}

A discrete random variable is encoded as a [probability mass function]({{< relref "KBhprobability_mass_function.md" >}})


## [probability density function]({{< relref "KBhprobability_distributions.md#probability-density-function" >}}) {#probability-density-function--kbhprobability-distributions-dot-md}

A continuous [random variable]({{< relref "KBhrandom_variables.md" >}}) is represented as a [probability density function]({{< relref "KBhprobability_distributions.md#probability-density-function" >}}).


## summary statistics {#summary-statistics}

-   [probability mass function]({{< relref "KBhprobability_mass_function.md" >}}) is a description for the random variable: and [random variable]({{< relref "KBhrandom_variables.md" >}})s are usually communicated via [probability mass function]({{< relref "KBhprobability_mass_function.md" >}})s
-   [expected value]({{< relref "KBhexpectation.md" >}})


## adding random variables {#adding-random-variables}

"what's the probability of \\(X + Y = n\\)"?

\begin{equation}
\sum\_{i=0}^{n} P(X=i, Y=n-i)
\end{equation}

for every single outcome, we want to create every possible operation which causes the two variables to sum to \\(n\\).
