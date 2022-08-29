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

The difficulty of forming adequate investigations in the area of NSM is due the theory itself being exceedingly hard to falsify---the principle method through which NSM is demonstrated is via the manual (i.e. non-standardized) lexicalization of semantic primes and a partial demonstration of their relations (<a href="#citeproc_bib_item_4">Geeraerts 2009</a>) to other words in the language. Whenever one irregularity in the theory is identified (<a href="#citeproc_bib_item_1">Bohnemeyer 1998</a>), the proponents of the theory simply respond with another update to the (non standardized) set of reductive paraphrasing rules to account for the irregularity (NO_ITEM_DATA:goddard1998bad.)

Yet, there are repeated empirical (again, non-standardized) confirmations of the existence of the original set (<a href="#citeproc_bib_item_14">Wierzbicka 1974</a>) of semantic primes in other languages (<a href="#citeproc_bib_item_2">Chappell 2002</a>; <a href="#citeproc_bib_item_10">Peeters 1994</a>; <a href="#citeproc_bib_item_13">Travis 2002</a>); there are also numerous demonstrations of the proposed applications (<a href="#citeproc_bib_item_7">Goddard 2012</a>) of the theory in structural semantics. These facts has therefore maintained the relevance of NSM in current linguistic study but rendered the theory without a very clear path forward. Due to this reason, recent research has placed larger focus on functional (cognitive linguistical) theories (<a href="#citeproc_bib_item_3">Divjak, Levshina, and Klavan 2016</a>) and largely overlooked structuralist arguments like the NSM.


### Broad Goals {#broad-goals}

To complement the very large body of work already in the identification of semantic primes for NSM in numerous languages, we aim in this project to investigate the process of reductive paraphrasing to provide a baseline evaluation of the feasibility of NSM as a theory. The approach proposed is intended to very generally test the practicality of the act of reductive paraphrasing from the declared primes: whether it is even broadly possible given the existing set of semantic primes across the entire lexicon of a few languages for which it is purported to be possible. We aim to do this via _much_ newer approaches in computational linguistics, specifically model-based Natural Language Processing (NLP).

In order to isolate the exact problem of reductive paraphrasing, we first will have to highlight a few key assumptions of the NSM theory and therefore this project.

The semantic metalanguage theory is built itself on the assumption that "each language is its own metalanguage" (<a href="#citeproc_bib_item_6">Goddard 2002</a>)---that human languages are broadly lexicalizable by itself (i.e. one can write an English dictionary in English.) We believe that the examination of this assumption is not within scope of the study and---given it is fairly universally true from a practical standpoint (i.e. English dictionaries exist)---we will take it as fact. We will use this fact further as the control for the feasibility of the approach, as discussed in the second below.

The remaining key assumption made in this study is that---should semantic primes exist---the original set of NSM primes published (<a href="#citeproc_bib_item_14">Wierzbicka 1974</a>) (and in subsequent studies in various other languages highlighted before) are correct. As much of the demonstrations of NSM involves the manual reexamination of purportedly missing concepts from NSM via the theory's accepted primes (<a href="#citeproc_bib_item_5">Goddard 1998</a>; <a href="#citeproc_bib_item_9">Heine, Narrog, and Goddard 2015</a>), it appears that the body of work in the theory has definitely taken the accepted primes as invariant. This assumption is carefully controlled for in the language of the design of the study to ensure that overly-broad conclusions are not reached.


### Study Aims and Design {#study-aims-and-design}

In this study, we aim to develop a computational protocol for lexicon-wide testing of the possibility of reductive paraphrasing given a set of purported semantic primes. Practically, this means that we are trying create a model to test whether all words in a language is lexicalizable using only a chosen subset of primes in the same language.

Given this study operates using the "own-metalanguage" assumption (again, that one can write an English dictionary in English, etc.), we will use the entire lexicon of a given language as the control set of "primes", and the published version of the NSM primes as the alternate set to be tested. In accordance with the large body of work already in the language, we will use English as our target language.

To create a truly replicable test for lexicalizability, we turn to NLP approaches. For our problem, lexicalibility is defined by the ability to reconstruct the exactly words desired by only using a linear combination of the input "primes". In essence, we are verifying whether or not the entire lexicon of a language can be projected to the much lower-dimensional space of the primes losslessly.

This projection is not, in principle, impossible. In the high-dimensional space of the entire lexicon, individual lexicalized words represent only the basis vectors of the space (and indeed in one-hot encodings for deep learning they are shown as the standard-basis of the lexicon-wide space.) Whereas in the lower-dimensional subspace of primes, a linear combination of primes can be used to represent each lexicalized word in the full lexicon.

We propose to leverage a variation upon the Conditional Variable Autoenconder (CVAE) architecture (<a href="#citeproc_bib_item_12">Sohn, Lee, and Yan 2015</a>) to frame the problem of lexicalizability testing as a unsupervised autoencoding problem.

Created for conditional image generation, CVAEs leverage the traditional Variable Auto Encoders (VAEs) model architecture but allow an additional input to influence the latent embedding space.

![](/ox-hugo/2022-08-28_15-41-38_screenshot.png)
(Figure above from (<a href="#citeproc_bib_item_11">Rahman 2020</a>), on the image application of CVAEs)


#### Hypothesis 1 and Feasibility Checkpoint {#hypothesis-1-and-feasibility-checkpoint}


#### Hypothesis 2 {#hypothesis-2}


## Institution and Experience {#institution-and-experience}


## Impact {#impact}


### Academic Significance {#academic-significance}


### Learning and Teaching {#learning-and-teaching}


## Safety and Ethics {#safety-and-ethics}



## References

<style>.csl-entry{text-indent: -1.5em; margin-left: 1.5em;}</style><div class="csl-bib-body">
  <div class="csl-entry"><a id="citeproc_bib_item_1"></a>Bohnemeyer, Jurgen. 1998. “Temporal Reference from a Radical Pragmatics Perspective: Why Yucatec Does Not Need to Express ’after’ and ’before’.” Walter de Gruyter, Berlin/New York Berlin, New York.</div>
  <div class="csl-entry"><a id="citeproc_bib_item_2"></a>Chappell, Hilary. 2002. “5. The Universal Syntax of Semantic Primes in Mandarin Chinese.” In <i>Studies in Language Companion Series</i>, 243–322. Studies in Language Companion Series. John Benjamins Publishing Company. doi:<a href="https://doi.org/10.1075/slcs.60.12cha">10.1075/slcs.60.12cha</a>.</div>
  <div class="csl-entry"><a id="citeproc_bib_item_3"></a>Divjak, Dagmar, Natalia Levshina, and Jane Klavan. 2016. <i>Cognitive Linguistics</i> 27 (4): 447–63. doi:<a href="https://doi.org/doi:10.1515/cog-2016-0095">doi:10.1515/cog-2016-0095</a>.</div>
  <div class="csl-entry"><a id="citeproc_bib_item_4"></a>Geeraerts, Dirk. 2009. “Neostructuralist Semantics.” In <i>Theories of Lexical Semantics</i>, 124–78. Theories of Lexical Semantics. Oxford University Press. doi:<a href="https://doi.org/10.1093/acprof:oso/9780198700302.003.0004">10.1093/acprof:oso/9780198700302.003.0004</a>.</div>
  <div class="csl-entry"><a id="citeproc_bib_item_5"></a>Goddard, Cliff. 1998. “Bad Arguments against Semantic Primitives.” Walter de Gruyter, Berlin/New York Berlin, New York.</div>
  <div class="csl-entry"><a id="citeproc_bib_item_6"></a>———. 2002. “The Search for the Shared Semantic Core of All Languages.” In <i>Meaning and Universal Grammar: Theory and Empirical Findings</i>. John Benjamins Publishing Company.</div>
  <div class="csl-entry"><a id="citeproc_bib_item_7"></a>———. 2012. “Semantic Primes, Semantic Molecules, Semantic Templates: Key Concepts in the NSM Approach to Lexical Typology.” <i>Linguistics</i> 50 (3). doi:<a href="https://doi.org/10.1515/ling-2012-0022">10.1515/ling-2012-0022</a>.</div>
  <div class="csl-entry"><a id="citeproc_bib_item_8"></a>Harris, Randy Allen. 2021. <i>The Linguistics Wars: Chomsky, Lakoff, and the Battle over Deep Structure</i>. Oxford University Press.</div>
  <div class="csl-entry"><a id="citeproc_bib_item_9"></a>Heine, Bernd, Heiko Narrog, and Cliff Goddard. 2015. “The Natural Semantic Metalanguage Approach.” In <i>The Oxford Handbook of Linguistic Analysis</i>, edited by Bernd Heine and Heiko Narrog. Oxford University Press. doi:<a href="https://doi.org/10.1093/oxfordhb/9780199677078.013.0018">10.1093/oxfordhb/9780199677078.013.0018</a>.</div>
  <div class="csl-entry"><a id="citeproc_bib_item_10"></a>Peeters, Bert. 1994. “16 Semantic and Lexical Universals in French.” In <i>Studies in Language Companion Series</i>, 423. Studies in Language Companion Series. John Benjamins Publishing Company. doi:<a href="https://doi.org/10.1075/slcs.25.20pee">10.1075/slcs.25.20pee</a>.</div>
  <div class="csl-entry"><a id="citeproc_bib_item_11"></a>Rahman, Md Ashiqur. 2020. “Understanding Conditional Variational Autoencoders.” <i>Medium</i>. <a href="https://towardsdatascience.com/understanding-conditional-variational-autoencoders-cd62b4f57bf8">https://towardsdatascience.com/understanding-conditional-variational-autoencoders-cd62b4f57bf8</a>.</div>
  <div class="csl-entry"><a id="citeproc_bib_item_12"></a>Sohn, Kihyuk, Honglak Lee, and Xinchen Yan. 2015. “Learning Structured Output Representation Using Deep Conditional Generative Models,” 9.</div>
  <div class="csl-entry"><a id="citeproc_bib_item_13"></a>Travis, Catherine E. 2002. “4. La Metalengua Semántica Natural.” In <i>Studies in Language Companion Series</i>, 173–242. Studies in Language Companion Series. John Benjamins Publishing Company. doi:<a href="https://doi.org/10.1075/slcs.60.11tra">10.1075/slcs.60.11tra</a>.</div>
  <div class="csl-entry"><a id="citeproc_bib_item_14"></a>Wierzbicka, Anna. 1974. “Semantic Primitives.” <i>Lingua</i> 34 (4): 365–69. doi:<a href="https://doi.org/10.1016/0024-3841(74)90004-7">10.1016/0024-3841(74)90004-7</a>.</div>
  <div class="csl-entry">NO_ITEM_DATA:goddard1998bad.</div>
</div>