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

A (source) code is a mapping from symbol set \\(X\\) to the set of binary sequence \\(c(x)\\) which corresponds to each \\(x \in X\\).

For [lossless compression]({{< relref "KBhlossless_compression.md" >}}), we need a [uniquely decodeable](#uniquely-decodeable) encoding.


### non-singular code {#non-singular-code}

for all \\(x, x' \in X\\) where \\(x \neq x'\\), a [non-singular code](#non-singular-code) assigns \\(c(x) \neq c(x')\\).

Though [lossless compression]({{< relref "KBhlossless_compression.md" >}}) requires [non-singular code](#non-singular-code), having it alone does **NOT** guarantee lossless encoding. You will want an [uniquely decodeable](#uniquely-decodeable) encoding instead. For instance:

| X | Encoding |
|---|----------|
| A | 0        |
| T | 1        |
| C | 10       |
| G | 11       |

Is a [non-singular code](#non-singular-code), but 0110 could be ATTA or AGA or ...


### uniquely decodeable {#uniquely-decodeable}

a sequence being [uniquely decodeable](#uniquely-decodeable) means that any possible source **sequence** \\(x\_1, ..., x\_{n}\\) is mapped into a unique binary representation.

One simple scheme would be the [Prefix-Free](#prefix-free) scheme, which is [uniquely decodeable](#uniquely-decodeable) and [instantaneously decodable](#instantaneously-decodable). Not all [uniquely decodeable](#uniquely-decodeable) codes need to be [Prefix-Free](#prefix-free).


#### every [uniquely decodeable](#uniquely-decodeable) sequence is a [non-singular code](#non-singular-code) {#every-uniquely-decodeable--orgf5173a8--sequence-is-a-non-singular-code--org5df329d}

Suppose an encoding is [uniquely decodeable](#uniquely-decodeable). We desire that it is also [non-singular code](#non-singular-code). Consider sequences of length 1, each with one symbol in it. Because the encoding is [uniquely decodeable](#uniquely-decodeable), each encoding of these sequences is unique. Now we can assign that sequence encoding to the corresponding symbol.


### instantaneously decodable {#instantaneously-decodable}

We do not need to perform lookaheads to decode the sequence; once we see a valid code we can decode it without lookahead.


### Prefix-Free {#prefix-free}

A [Prefix-Free](#prefix-free) codes is a coding scheme for which no codeword is a prefix of another codeword.


### Average Codeword Length {#average-codeword-length}

For a specific code, we have a quality \\(\bar{\ell}\\). This is a quantity which is a probability-scaled average number of bits to encode each source symbol.

Consider, then, this code:

| X | Probability | Code |
|---|-------------|------|
| A | 1/2         | 0    |
| T | 1/4         | 10   |
| C | 1/8         | 110  |
| G | 1/8         | 111  |

Our average codeword length her, then is:

\begin{equation}
\frac{1}{2} + \frac{1}{4} \cdot 2 + \frac{1}{8} \cdot 3 + \frac{1}{8} \cdot 3 = 1.75
\end{equation}

which would be a bit better than using 2 bits to encode everything.


### Motivation {#motivation}

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

Our symbol/encoding mapping has to be non-singular; otherwise, we will be very sad.

How do we improve this code?


#### Counting by Frequency {#counting-by-frequency}

Suppose we got some empirical frequencies of the occurances:

| X | Probability |
|---|-------------|
| A | 1/2         |
| T | 1/4         |
| C | 1/8         |
| G | 1/8         |

We will encode each symbol by a number of bits inversely proportional to the frequency of its occurrence. So:

| X | Probability | Code |
|---|-------------|------|
| A | 1/2         | 0    |
| T | 1/4         | 10   |
| C | 1/8         | 110  |
| G | 1/8         | 111  |

This is actually [uniquely decodeable](#uniquely-decodeable) because its [Prefix-Free](#prefix-free).
