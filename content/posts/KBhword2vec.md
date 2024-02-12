+++
title = "word2vec"
author = ["Houjun Liu"]
draft = false
+++

we will train a classifier on a binary prediction task: "is context words \\(c\_{1:L}\\) likely to show up near some target word \\(W\_0\\)?"

We estimate the probability that \\(w\_{0}\\) occurs within this window based on the product of the probabilities of the similarity of the embeddings between each context word and the target word.

To turn [cosine similarity]({{< relref "KBhranked_information_retrieval.md#cosine-similarity" >}}) [dot product]({{< relref "KBhdot_product.md" >}})s into probability, we squish the [dot product]({{< relref "KBhdot_product.md" >}}) via the [sigmoid]({{< relref "KBhsigmoid.md" >}}) function.

importantly, we don't actually use these results. we simply take the resulting embeddings.


## properties {#properties}


### window size {#window-size}

-   **smaller windows**: captures more syntax level information
-   **large windows**: capture more semantic field information


### parallelogram model {#parallelogram-model}

simple way to solve analogies problems with vector semantics: get the difference between two word vectors, and add it somewhere else to get an analogous transformation.

-   only words for frequent words
-   small distances
-   but not quite for large systems


#### allocational harm {#allocational-harm}

embeddings bake in existing biases, which leads to bias in hiring practices, etc.


## skip-gram with negative sampling {#skip-gram-with-negative-sampling}

[skip-gram](#skip-gram-with-negative-sampling) trains vectors separately for word being used as target and word being used as context.

the mechanism for training the embedding:

-   select some \\(k\\), which is the multiplier of the negative examples (if \\(k=2\\), ever one positive example will be matched with 2 negative examples)
-   sample a target word, and generate positive samples paired by words in its immediate window
-   sample window size times \\(k\\) negative examples, where the noise words are chosen explicitly as not being near our target word, and weighted based on unigram frequency

for each paired training sample, we minimize the loss via [cross entropy loss]({{< relref "KBhcross_entropy_loss.md" >}}):

\begin{equation}
L\_{CE} = -\qty[ \log (\sigma(c\_{pos} \cdot w)) + \sum\_{i=1}^{k} \log \sigma\qty(-c\_{neg} \cdot w)]
\end{equation}

recall that:

\begin{equation}
\pdv{L\_{CE}}{w} = \qty[\sigma(c\_{pos} \cdot w) -1]c\_{pos} + \sum\_{i=1}^{k} \qty[\sigma(c\_{neg\_{i}}\cdot w)]c\_{neg\_{i}}
\end{equation}
