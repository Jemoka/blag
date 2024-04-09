+++
title = "SU-ENGR76 APR092024"
author = ["Houjun Liu"]
draft = false
+++

## joint entropy {#joint-entropy}

Suppose we have two [information source]({{< relref "KBhsu_engr76_apr042024.md#information-source" >}})s; [joint entropy](#joint-entropy) is the measure of joint surprise when we are defined over more than one [information source]({{< relref "KBhsu_engr76_apr042024.md#information-source" >}}).

For a pair of random variables, \\(X, Y\\), their [joint entropy](#joint-entropy) is defined over a new random variable of \\(X \cup Y\\).

\begin{equation}
H(x,y) = \sum\_{i \in X}^{} \sum\_{j \in Y}^{} P(X=i, Y=j) \log\_{2} \qty(\frac{1}{P(X=i, Y=j)})
\end{equation}

If \\(X \perp Y\\), we can write \\(H(x,y) = H(x)+H(y)\\) (shown below.) Further, we have for all \\(X\\) and \\(Y\\), \\(H(x,y) \leq  H(x) + H(y)\\) because you can never be more surprised than if you got two completely independent pieces of information.


### joint entropy of independent events {#joint-entropy-of-independent-events}

Recall [independence]({{< relref "KBhprobability.md#independence" >}}); so if \\(X \perp Y\\), we can write \\(P(X=i, Y=j) = P(X=i) \cdot P(Y=j)\\) and plug in and chug.

Now, plugging that in and applying [log laws]({{< relref "KBhlog_laws.md" >}}):

\begin{align}
H(x,y) &= \sum\_{i \in X}^{} \sum\_{j \in Y}^{} P(X=i)P(Y=j) \qty(\log\_{2} \frac{1}{P(X=i)}+\log\_{2} \frac{1}{P(Y=j)})  \\\\
&= \sum\_{i \in X}^{} \sum\_{j \in Y}^{} P(X=i)P(Y=j) \log\_{2} \frac{1}{P(X=i)}+ \sum\_{i \in X}^{} \sum\_{j \in Y}^{} P(X=i)P(Y=j) \log\_{2} \frac{1}{P(Y=j)}   \\\\
&= \sum\_{i \in X}^{} P(X=i)\log\_{2}\frac{1}{P(X=i)}\sum\_{j \in Y}^{} P(Y=j)  + \sum\_{i \in X}^{}P(X=i) \sum\_{j \in Y}^{} P(Y=j) \log\_{2} \frac{1}{P(Y=j)}   \\\\
&= \sum\_{i \in X}^{} P(X=i)\log\_{2}\frac{1}{P(X=i)} 1  + 1 \sum\_{j \in Y}^{} P(Y=j) \log\_{2} \frac{1}{P(Y=j)}  \\\\
&= H(X) + H(Y)
\end{align}

Where we can factor the \\(P(Y=j)\\) out and the \\(P(X=j)\\) out on the left and right sides because they don't depend on the other argument in the summation. After which, recall \\(\sum\_{k}^{}P(K=k)=1\\), so each factored out term reduces to \\(1\\); multiplying in, we result in the [entropy]({{< relref "KBhsu_engr76_apr042024.md#information-value" >}}) expressions for each random variable.


## Source Coding {#source-coding}

"communication" needs to happen by formalizing your data into a sequence of symbols \\(x\_1, x\_2, \dots\\), where \\(x \in X\\) in some symbol set. For instance, an image is a long sequence of pixels; words is a long sequence of letters, etc.

After which, we will need to convert our sequence of symbols into bits using some encoder; then, we will need some decoder to convert it back.


### Example {#example}

A DNA is a piece of information with four symbols: \\(X \in \\{A, T, C, G\\}\\).

The most trivial encoding could just be assign a 2-bit sequence to each symbol:

| X | Encoding ("Code Words") |
|---|-------------------------|
| A | 00                      |
| T | 01                      |
| C | 10                      |
| G | 11                      |
