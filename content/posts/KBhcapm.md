+++
title = "Capital-Asset Pricing Model"
author = ["Houjun Liu"]
draft = false
+++

[CAPM]({{< relref "KBhcapm.md" >}}) is a method of portfolio selection analysis which focuses on _maximizing_ [return]({{< relref "KBhrandom_walk.md#return--finmetrics" >}}) given some fixed variance.

The version of [CAPM]({{< relref "KBhcapm.md" >}}), as presented here, assumes that there is a non-zero risk-free-rate (i.e. savings interest.)

Let's define some \\(\beta\_{im}\\):

\begin{equation}
\beta\_{im} := \frac{Cov[R\_{i}, R\_{m}]}{Var[R\_{m}]}
\end{equation}

And construct:

\begin{equation}
E[R\_{i}] = R\_{f} + \beta\_{im}(E[R\_{m}]-R\_{f})
\end{equation}

where, \\(R\_{i}\\) is the return of asset \\(i\\), \\(R\_{m}\\) is the return of the market portfolio, and \\(R\_{f}\\) is the risk-free rate.

This is a bit of a scary result which is hard to interpreter. Given we are dealing with the **change** in the pricing, it is actually easier to model the change in value. That is, we have that:

\begin{equation}
Z\_{i} := R\_{i}-R\_{f}
\end{equation}

Now, we can rewrite our results above as simply:

\begin{equation}
\begin{cases}
E[Z\_{i}] = \beta\_{im}E[Z\_{m}] \\\\
\beta\_{im} = \frac{Cov[Z\_{i}, Z\_{m}]}{Var(Z\_{mr})}
\end{cases}
\end{equation}

This is defined explicitly