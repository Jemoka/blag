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


### Edit Distance {#edit-distance}

DP costs \\(O(nm)\\), backtrace costs \\(O(n+m)\\).

-   [minimum edit distance]({{< relref "KBhminimum_edit_distance.md" >}})
    -   [weighted edit distance]({{< relref "KBhweighted_edit_distance.md" >}})
-   [backtracing]({{< relref "KBhbacktracing.md" >}})
