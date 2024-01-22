+++
title = "perplexity"
author = ["Houjun Liu"]
draft = false
+++

[perplexity]({{< relref "KBhperplexity.md" >}}) is a measure of a language model's ability to predict words.


## Intuition {#intuition}

A good language model should prefer "real" or otherwise "frequently observed" sentences. That is, it should assign lower probability to word salad.

So a good language model should assign a higher probability to the next word that actually occurs given a sequence of words.

Generally, we want the LM to assign high probability to the entire test set. However, big issue is that **probability gets smaller by length of the text**.

To address this, we normalize by number of words.


## Expression {#expression}

\begin{equation}
PP (W) = P(w\_1 w\_2 \dots w\_{n})^{-\frac{1}{N}}
\end{equation}

Specifically,

\begin{equation}
PP (W) = N \sqrt{\frac{1}{P(w\_1, \dots w\_{n)}}}
\end{equation}

Notably, perplexity is inverse of probability. We want the lowest entropy possible, i.e. the highest likelihood possible. Therefore, the range of perplexity is \\([1, \infty]\\). We therefore want to **minimize perplexity**.


## Branching Factor {#branching-factor}

[perplexity]({{< relref "KBhperplexity.md" >}}) could be also considered the "weighted average [Branching Factor](#branching-factor)" of the language. That is, the average number of possible next words given each of the words.

The [Branching Factor](#branching-factor) is the set of possible next words that can follow a given word.


## Sampling {#sampling}

Conditioned upon previous words or current n-gram, sample from the next possible word in the distribution.

Meaning, we sample from the distribution of n-grams whose n-1 characters are known.


### Sparsity {#sparsity}

Out-of-sample ngrams will never be counted, no matter how truly likely.

Also, it causes perplexity problems: because you can't divide by 0, perplexity assumes that any sequence of words should have non zero likeliness.
