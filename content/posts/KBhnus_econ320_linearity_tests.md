+++
title = "NUS-ECON320 Linearity Tests"
author = ["Houjun Liu"]
draft = false
+++

Let's begin. We want to create test for the linearity of a few assets, for whether or not they follow the CAPM.

Note that we will be using the Sharpe-Linter version of CAPM:

\begin{equation}
E[R\_{i}-R\_{f}] = \beta\_{im} E[(R\_{m}-R\_{f})]
\end{equation}

\begin{equation}
\beta\_{im} := \frac{Cov[(R\_{i}-R\_{f}),(R\_{m}-R\_{f})]}{Var[R\_{m}-R\_{f}]}
\end{equation}

Recall that we declare \\(R\_{f}\\) (the risk-free rate) to be non-stochastic.