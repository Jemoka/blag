+++
title = "NSM Proposal"
author = ["Houjun Liu"]
draft = false
+++

"Doing NSM analysis is a demanding process and there is no mechanical procedure for it. Published explications have often been through a dozen or more iterations over several months" --- (<a href="#citeproc_bib_item_9">Heine, Narrog, and Goddard 2015</a>)


## Approach and XD {#approach-and-xd}


### Introduction and Background {#introduction-and-background}

The Natural Semantic Metalanguage (NSM) approach (<a href="#citeproc_bib_item_14">Wierzbicka 1974</a>) is a long-standing hypothetical theory in structural semantics which claims that all human languages share a common set of primitive lexical units---usually words, but, in some languages, short connected phrases---through which all other words in each language can be defined.

For NSM to hold, two main results must be demonstrated. (<a href="#citeproc_bib_item_9">Heine, Narrog, and Goddard 2015</a>) The theory's validity hinges, first, upon the _existence_ of semantic primes---a series of primitive lexical units both indefinable via other words in the same language but also is universally lexicalized across all languages. Second, the theory's confirmation requires the ability to perform "reductive paraphrasing", the process of defining all other words in a language with respect to the universal semantic primes' manifest in that language.

If proven as fact, the NSM theory and its implications has reaching implications into the long-standing (footnote: not to mention often personally fierce) conflict between the newer theories of generative semantics---where structure of language is created in support of meaning---and Noam Chomsky's transformational generative syntax---where meaning is filled to precomputed structure, which NSM suggests (<a href="#citeproc_bib_item_8">Harris 2021</a>).

The difficulty of forming adequate investigations in the area of NSM is due the theory itself being exceedingly hard to falsify---the principle method through which NSM is demonstrated is via the manual (i.e. non-standardized) lexicalization of semantic primes and a partial demonstration of their relations (<a href="#citeproc_bib_item_5">Geeraerts 2009</a>) to other words in the language. Whenever one irregularity in the theory is identified (<a href="#citeproc_bib_item_2">Bohnemeyer 1998</a>), the proponents of the theory simply respond with another update to the (non standardized) set of reductive paraphrasing rules to account for the irregularity (NO_ITEM_DATA:goddard1998bad.)

Yet, there are repeated empirical (again, non-standardized) confirmations of the existence of the original set (<a href="#citeproc_bib_item_14">Wierzbicka 1974</a>) of semantic primes in other languages (<a href="#citeproc_bib_item_3">Chappell 2002</a>; <a href="#citeproc_bib_item_11">Peeters 1994</a>; <a href="#citeproc_bib_item_12">Travis 2002</a>); there are also numerous demonstrations of the proposed applications (<a href="#citeproc_bib_item_7">Goddard 2012</a>) of the theory in structural semantics. These facts has therefore maintained the relevance of NSM in current linguistic study but rendered the theory without a very clear path forward. Due to this reason, recent research has placed larger focus on functional (cognitive linguistical) theories (<a href="#citeproc_bib_item_4">Divjak, Levshina, and Klavan 2016</a>) and largely overlooked structuralist arguments like the NSM.


### Broad Goals {#broad-goals}

To complement the very large body of work already in the identification of semantic primes for NSM in numerous languages, we aim in this project to investigate the process of reductive paraphrasing to provide a baseline evaluation of the feasibility of NSM as a theory. The approach proposed below is intended to very generally test the practicality of the act of reductive paraphrasing from the published set of primes: whether paraphrasing from those primes is even broadly possible across the entire lexicon of the few languages for which it is purported to be possible. This test remains needed because, quite counter-intuitively, metalanguage theorists have been constructing lexicalizations for non-prime words on an "as-needed" basis such as in (<a href="#citeproc_bib_item_15">Wierzbicka 2007</a>). No lexicon-wide demonstrations of lexicalizability has been performed (i.e. reductive paraphrasing all words down to the primes) as the current approach of manual definition of words from primes is significantly time-consuming and requires careful consideration of NSM's semantic grammar between primes.

We aim perform a lexicon-wide test of reductive paraphrasing computationally via _much_ newer approaches in computational linguistics, specifically model-based Natural Language Processing (NLP).

In order to isolate the exact problem of reductive paraphrasing, we first will have to highlight a few key assumptions by the NSM theory and therefore this project.

The semantic metalanguage theory is itself built on the assumption that "each language is its own metalanguage" (<a href="#citeproc_bib_item_6">Goddard 2002</a>)---that human languages are broadly lexicalizable by itself (i.e. one can write an English dictionary by only using English.) We believe that the examination of this assumption is not within scope of the study and---given it is fairly universally true from a practical standpoint (i.e. English dictionaries exist)---we will take it as fact. We will use this fact further as the control for the feasibility of the approach, as discussed in the section below.

The remaining assumptions of NSM to be tested here, then, is that 1) semantic primes exist and 2) the original set of NSM primes published (<a href="#citeproc_bib_item_14">Wierzbicka 1974</a>) (and in subsequent studies in various other languages highlighted before) are correct and, through reductive paraphrase, can lexicalize every word in the lexicon.


### Study Aims and Design {#study-aims-and-design}

In this study, we aim to develop a computational protocol for lexicon-wide testing of the possibility of performing reductive paraphrasing for every word in the lexicon given a set of purported semantic primes. Practically, this means that we are trying create a model to test whether all words in a language is lexicalizable when restricted to only using a chosen subset of primes in the same language.

To create a truly replicable test for lexicalizability under restriction, we turn to probabilistic NLP approaches. We propose the following metric for lexicalizability: a word is "lexicalizable" under some set of semantic primes if there is a lossless mapping between a linear combination of the primes' latent embeddings to the word in lexicon space.

Under this model, all words in the lexicon are lexicalizable by the set of primes being tested if there is a lossless projection of the bases of the lexical space to the primes' latent embedding space.

That is, given we have a latent embedding space of \\(n\\) semantic primes \\(P^n\\) and some lexicon \\(W\\) with \\(m\\) words, we aim to identify a linear mapping \\(M\\) such that:

\begin{equation}
Mp = e\_W\_j\ |\ p \in P^n, \forall j=1\ldots m
\end{equation}

where, \\(e\_W\_j\\) is the \\(j\\) th standard basis of \\(W\\) (i.e. \\(j\\) th word in the lexicon.)

This projection is not, in principle, impossible. In the high-dimensional space of the entire lexicon, individual lexicalized words represent only the basis vectors of the space (and indeed in one-hot encodings for deep learning they are shown as the standard-basis of the lexicon-wide space.) Whereas in the lower-dimensional subspace of primes, a linear combination of primes can be used to represent each lexicalized word in the full lexicon.

Success in identifying a feasible \\(M \in \mathcal{L}(P, W)\\) for a given \\(P\\) and \\(W\\) indicates the feasibility of finding a linear combination in \\(P\\) which maps to all \\(w \in W\\), which means reductive paraphrase of \\(w\\) to a set of primes in \\(P\\) is possible as there is a direct "translation" (namely, \\(W\\)) from \\(P\\) to \\(W\\).

To actually compute \\(W\\) given \\(P\\) and \\(M\\), we leverage the well-established Transformer encoder-decoder architecture for language modeling (<a href="#citeproc_bib_item_13">Vaswani et al. 2017</a>). Furthermore, we frame the problem as one of unsupervised multi-lingual translation without alignments.

The basis of the model proposed to be used to obtain \\(W\\) is (<a href="#citeproc_bib_item_1">Artetxe et al. 2018</a>), a unsupervised multi-lingual translation model.

![](/ox-hugo/2022-08-28_20-26-43_screenshot.png)
Figure from (<a href="#citeproc_bib_item_1">Artetxe et al. 2018</a>).

As we are performing the task with word embeddings, not sentences like that of (<a href="#citeproc_bib_item_1">Artetxe et al. 2018</a>), the cross-attention lookup vector will serve no purpose (be \\(0\\)) (<a href="#citeproc_bib_item_10">Niu, Zhong, and Yu 2021</a>) and hence removed.

For the sake of standardization, we will call \\(P\\) the primary language \\(L1\\), and \\(W\\) the second language \\(L2\\). The basic hypothesis provided by (<a href="#citeproc_bib_item_1">Artetxe et al. 2018</a>) is that, through alternating samples of \\(L1\\) and \\(L2\\) through the model against their corresponding decoders using a shared encoder and separate decoders, the shared encoder is trained to perform the task of autoencoding for both languages at once. Therefore, at prediction time, to get the "translation" of an input, one simply applies the decoder of the desired language to obtain a translation.

We will also the proposed backtranslation mechanism during training: whereby the autoencoded output from \\(L1\\) is used as target for the same input as \\(L2\\) (as well as the reverse), mimicking the process of translation.

We will restrict the output dimension of the shared encoder to \\(dim(P)\\) which after training we will call the latent embedding space of \\(P\\); this name is verified and justified as a part of Hypothesis 1 below.

After training, the \\(L2\\) decoder would then be the candidate \\(W\\), mapping from the (proposed) latent embedding space of \\(P\\) to the lexicon \\(W\\).


#### Hypothesis 1 and Feasibility Checkpoint {#hypothesis-1-and-feasibility-checkpoint}


#### Hypothesis 2 {#hypothesis-2}


## Institution and Experience {#institution-and-experience}


## Impact {#impact}


### Academic Significance {#academic-significance}


### Learning and Teaching {#learning-and-teaching}


## Safety and Ethics {#safety-and-ethics}



## References

<style>.csl-entry{text-indent: -1.5em; margin-left: 1.5em;}</style><div class="csl-bib-body">
  <div class="csl-entry"><a id="citeproc_bib_item_1"></a>Artetxe, Mikel, Gorka Labaka, Eneko Agirre, and Kyunghyun Cho. 2018. “UNSUPERVISED NEURAL MACHINE TRANSLATION,” 12.</div>
  <div class="csl-entry"><a id="citeproc_bib_item_2"></a>Bohnemeyer, Jurgen. 1998. “Temporal Reference from a Radical Pragmatics Perspective: Why Yucatec Does Not Need to Express ’after’ and ’before’.” Walter de Gruyter, Berlin/New York Berlin, New York.</div>
  <div class="csl-entry"><a id="citeproc_bib_item_3"></a>Chappell, Hilary. 2002. “5. The Universal Syntax of Semantic Primes in Mandarin Chinese.” In <i>Studies in Language Companion Series</i>, 243–322. Studies in Language Companion Series. John Benjamins Publishing Company. doi:<a href="https://doi.org/10.1075/slcs.60.12cha">10.1075/slcs.60.12cha</a>.</div>
  <div class="csl-entry"><a id="citeproc_bib_item_4"></a>Divjak, Dagmar, Natalia Levshina, and Jane Klavan. 2016. <i>Cognitive Linguistics</i> 27 (4): 447–63. doi:<a href="https://doi.org/doi:10.1515/cog-2016-0095">doi:10.1515/cog-2016-0095</a>.</div>
  <div class="csl-entry"><a id="citeproc_bib_item_5"></a>Geeraerts, Dirk. 2009. “Neostructuralist Semantics.” In <i>Theories of Lexical Semantics</i>, 124–78. Theories of Lexical Semantics. Oxford University Press. doi:<a href="https://doi.org/10.1093/acprof:oso/9780198700302.003.0004">10.1093/acprof:oso/9780198700302.003.0004</a>.</div>
  <div class="csl-entry"><a id="citeproc_bib_item_6"></a>Goddard, Cliff. 2002. “The Search for the Shared Semantic Core of All Languages.” In <i>Meaning and Universal Grammar: Theory and Empirical Findings</i>. John Benjamins Publishing Company.</div>
  <div class="csl-entry"><a id="citeproc_bib_item_7"></a>———. 2012. “Semantic Primes, Semantic Molecules, Semantic Templates: Key Concepts in the NSM Approach to Lexical Typology.” <i>Linguistics</i> 50 (3). doi:<a href="https://doi.org/10.1515/ling-2012-0022">10.1515/ling-2012-0022</a>.</div>
  <div class="csl-entry"><a id="citeproc_bib_item_8"></a>Harris, Randy Allen. 2021. <i>The Linguistics Wars: Chomsky, Lakoff, and the Battle over Deep Structure</i>. Oxford University Press.</div>
  <div class="csl-entry"><a id="citeproc_bib_item_9"></a>Heine, Bernd, Heiko Narrog, and Cliff Goddard. 2015. “The Natural Semantic Metalanguage Approach.” In <i>The Oxford Handbook of Linguistic Analysis</i>, edited by Bernd Heine and Heiko Narrog. Oxford University Press. doi:<a href="https://doi.org/10.1093/oxfordhb/9780199677078.013.0018">10.1093/oxfordhb/9780199677078.013.0018</a>.</div>
  <div class="csl-entry"><a id="citeproc_bib_item_10"></a>Niu, Zhaoyang, Guoqiang Zhong, and Hui Yu. 2021. “A Review on the Attention Mechanism of Deep Learning.” <i>Neurocomputing</i> 452 (September): 48–62. doi:<a href="https://doi.org/10.1016/j.neucom.2021.03.091">10.1016/j.neucom.2021.03.091</a>.</div>
  <div class="csl-entry"><a id="citeproc_bib_item_11"></a>Peeters, Bert. 1994. “16 Semantic and Lexical Universals in French.” In <i>Studies in Language Companion Series</i>, 423. Studies in Language Companion Series. John Benjamins Publishing Company. doi:<a href="https://doi.org/10.1075/slcs.25.20pee">10.1075/slcs.25.20pee</a>.</div>
  <div class="csl-entry"><a id="citeproc_bib_item_12"></a>Travis, Catherine E. 2002. “4. La Metalengua Semántica Natural.” In <i>Studies in Language Companion Series</i>, 173–242. Studies in Language Companion Series. John Benjamins Publishing Company. doi:<a href="https://doi.org/10.1075/slcs.60.11tra">10.1075/slcs.60.11tra</a>.</div>
  <div class="csl-entry"><a id="citeproc_bib_item_13"></a>Vaswani, Ashish, Noam Shazeer, Niki Parmar, Jakob Uszkoreit, Llion Jones, Aidan N Gomez, Łukasz Kaiser, and Illia Polosukhin. 2017. “Attention Is All You Need,” 11.</div>
  <div class="csl-entry"><a id="citeproc_bib_item_14"></a>Wierzbicka, Anna. 1974. “Semantic Primitives.” <i>Lingua</i> 34 (4): 365–69. doi:<a href="https://doi.org/10.1016/0024-3841(74)90004-7">10.1016/0024-3841(74)90004-7</a>.</div>
  <div class="csl-entry"><a id="citeproc_bib_item_15"></a>———. 2007. “Bodies and Their Parts: An NSM Approach to Semantic Typology.” <i>Language Sciences</i> 29 (1): 14–65. doi:<a href="https://doi.org/10.1016/j.langsci.2006.07.002">10.1016/j.langsci.2006.07.002</a>.</div>
  <div class="csl-entry">NO_ITEM_DATA:goddard1998bad.</div>
</div>