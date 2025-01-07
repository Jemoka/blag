+++
title = "house price prediction"
author = ["Houjun Liu"]
draft = false
+++

[house price prediction]({{< relref "KBhhouse_price_prediction.md" >}}) is a classical machine learning framing problem.

**collect data**: use a single property ("feature")---size of the house, in square feet; to learn is the output---price


## linear regression {#linear-regression}

We can:

\begin{equation}
\text{price} = \theta\_{1} \cdot \text{size} + \theta\_{2}
\end{equation}

our goal is to identify \\(\theta\_{j}\\) to be able to get the "best linear fit".
