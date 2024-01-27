+++
title = "Language Information Index"
author = ["Houjun Liu"]
draft = false
+++

What makes language modeling hard: **resolving ambiguity is hard**.

"the chef made her duck"


## Contents {#contents}


### Basic Text Processing {#basic-text-processing}

-   [regex]({{< relref "KBhregex.md" >}})
-   [ELIZA]({{< relref "KBheliza.md" >}})
-   [tokenization]({{< relref "KBhtokenization.md" >}}) and [corpus]({{< relref "KBhcorpus.md" >}})
    -   [Herdan's Law]({{< relref "KBhcorpus.md#herdan-s-law" >}})
-   [text normalization]({{< relref "KBhtext_normalization.md" >}})
    -   [tokenization]({{< relref "KBhtokenization.md" >}}) + [Subword Tokenization]({{< relref "KBhtokenization.md#subword-tokenization" >}})
        -   [BPE]({{< relref "KBhbpe.md" >}})
    -   [Word Normalization]({{< relref "KBhword_normalization.md" >}})
        -   [lemmatization]({{< relref "KBhlemmatization.md" >}}) through [morphological parsing]({{< relref "KBhmorphological_parsing.md" >}})
        -   only take stems from morphemes: [porter stemmer]({{< relref "KBhmorphological_parsing.md#porter-stemmer" >}})
    -   [sentence segmentation]({{< relref "KBhsentence_segmentation.md" >}})
-   [N-Grams]({{< relref "KBhn_grams.md" >}})


### Edit Distance {#edit-distance}

DP costs \\(O(nm)\\), backtrace costs \\(O(n+m)\\).

-   [minimum edit distance]({{< relref "KBhminimum_edit_distance.md" >}})
    -   [weighted edit distance]({{< relref "KBhweighted_edit_distance.md" >}})
-   [backtracing]({{< relref "KBhbacktracing.md" >}})


### Ngrams {#ngrams}

-   [N-Grams]({{< relref "KBhn_grams.md" >}})
-   [Markov Assumption]({{< relref "KBhn_grams.md#markov-assumption" >}})
    -   [Unigrams]({{< relref "KBhn_grams.md#unigrams" >}})
    -   [Backoff]({{< relref "KBhn_grams.md#backoff" >}}) and [Stupid Backoff]({{< relref "KBhn_grams.md#stupid-backoff" >}})
    -   [Interpolation]({{< relref "KBhn_grams.md#interpolation" >}})
    -   [OOV Words]({{< relref "KBhn_grams.md#oov-words" >}})
-   [Model Evaluation]({{< relref "KBhmodel_evaluation.md" >}})
    -   [perplexity]({{< relref "KBhperplexity.md" >}})
    -   [open vocabulary]({{< relref "KBhn_grams.md#oov-words" >}})


### Text Classification {#text-classification}

-   [Text Classification]({{< relref "KBhtext_classification.md" >}})
    -   [Bag of Words]({{< relref "KBhbag_of_words.md" >}})
    -   [Naive Bayes]({{< relref "KBhnaive_bayes.md" >}})
    -   [Naive Bayes for Text Classification]({{< relref "KBhbag_of_words.md#naive-bayes-for-text-classification" >}})
        -   [Binary Naive Bayes]({{< relref "KBhbag_of_words.md#binary-naive-bayes" >}})
    -   [Lexicon]({{< relref "KBhlexicon.md" >}})
-   [Naive Bays Language Modeling]({{< relref "KBhn_grams.md#naive-bays-language-modeling" >}})
-   [Harmonic Mean]({{< relref "KBhharmonic_mean.md" >}})
    -   [Macroaverage]({{< relref "KBhmacroaverage.md" >}}) and [Microaverage]({{< relref "KBhmacroaverage.md" >}})


### Logistic Regression {#logistic-regression}

-   [Generative Classifier]({{< relref "KBhgenerative_vs_discriminitive_classifier.md#generative-classifier" >}}) vs [Discriminate Classifier]({{< relref "KBhgenerative_vs_discriminitive_classifier.md#discriminative-classifier" >}})
-   [Logistic Regression Text Classification]({{< relref "KBhlogistic_regression.md#logistic-regression-text-classification" >}})
    -   [decision boundary]({{< relref "KBhlogistic_regression.md#logistic-regression-text-classification" >}})
-   [cross entropy loss]({{< relref "KBhcross_entropy_loss.md" >}})
-   [stochastic gradient descent]({{< relref "KBhstochastic_gradient_descent.md" >}})
