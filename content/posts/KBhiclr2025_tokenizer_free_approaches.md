+++
title = "ICLR2025 Tokenizer-Free Approaches"
author = ["Houjun Liu"]
draft = false
+++

## Talks {#talks}

-


## Downsides of [Subword Tokenization]({{< relref "KBhtokenization.md#subword-tokenization" >}}) {#downsides-of-subword-tokenization--kbhtokenization-dot-md}

1.  **not learned end to end**: vocab is fixed, can't adapt to difficulty
2.  **non-smoothness**: similar inputs get mapped to very different token sequences
    -   [token][ization]
    -   typo: [token][zi][ation] &lt;- suddenly bad despite small typo
3.  **huge vocabs**: yes
4.  **non-adaptive compression ratio**: you can't decide how much to compress (affects FLOPs/document)
5.
