+++
title = "central limit theorem"
author = ["Houjun Liu"]
draft = false
+++

"If sample size is large, the sampling distribution is normal. The larger \\(N\\) is, the more normal the resulting shape is."

It is technically written as:

given some [random variable]({{< relref "KBhrandom_variables.md" >}}) \\(Y\\), the normalized collection of a random variable \\(X\\) with samples \\(x\_j\\),

\begin{equation}
    Y = \frac{1}{\sigma \sqrt{N}} \sum\_{i=1}^N (x\_1 - \mu)
\end{equation}

We have that:

\begin{equation}
    \lim\_{N\to \infty} Y\_n \sim N(0,1)
\end{equation}

That, as long as you normalize a random variable and have enough of it, you get the normal distribution.