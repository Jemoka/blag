+++
title = "exponential distribution"
author = ["Houjun Liu"]
draft = false
+++

Analogous to [poisson distribution]({{< relref "KBhprobability_of_k_in_x_time.md" >}}), but for [continuous]({{< relref "KBhuniqueness_and_existance.md#continuity" >}}) [random variable]({{< relref "KBhrandom_variables.md" >}}). Consider a distribution which lasts a duration of time until success; what's the [probability]({{< relref "KBhprobability.md" >}}) that success is found in some range of times:

"What's the probability that there are an earthquake in \\(k\\) years if there's on average \\(2\\) earthquakes in 1 year?"


## constituents {#constituents}

-   \\(\lambda\\): expected time it takes for one success


## requirements {#requirements}

\begin{equation}
f(x) = \begin{cases}
\lambda e^{-\lambda x} \\\\
0
\end{cases}
\end{equation}


## additional information {#additional-information}

-   **expectation**: \\(\frac{1}{\lambda}\\)
-   **variance**: \\(\frac{1}{\lambda^{2}}\\)
