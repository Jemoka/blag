+++
title = "ICLR2025 Friday Posters"
author = ["Houjun Liu"]
draft = false
+++

## ICLR2025 Fan: loop transformers for length generalization {#iclr2025-fan-loop-transformers-for-length-generalization}

Key insight: UT like approaches with loops generalize better for tasks of a specific kind


## ICLR2025 Lee: multiple non-asymptotic rates for value iteration {#iclr2025-lee-multiple-non-asymptotic-rates-for-value-iteration}

Key insight: anchoring using the original policy speed up average value value iteration

That is: Vt = a\*V0 + b\*T\*Vt-1


## ICLR2025 Liu: linear combination of saves checkpoints makes diffusion and consistency models better {#iclr2025-liu-linear-combination-of-saves-checkpoints-makes-diffusion-and-consistency-models-better}

Key insight: as titled, use evolutionary research to figure out the best mixture of weights to select


## ICLR2025 Ramapuram: theory analysis and best practices for sigmoid self attention {#iclr2025-ramapuram-theory-analysis-and-best-practices-for-sigmoid-self-attention}

Key insight: sigmoid self attention reduces all gather costs and they have a bunch of tricks to make it work


## ICLR2025 Sun: block verification accelerate speculative decoding {#iclr2025-sun-block-verification-accelerate-speculative-decoding}

Key insight: when using a small language model to speculatively decode a large language model, evaluate likelihood blocks at a time


## ICLR2025 Chang: skiable influence a fact tracing {#iclr2025-chang-skiable-influence-a-fact-tracing}

Key insight: using a normalized gradient dot product between training examples and outputs, do attribution


## ICLR2025 Hu: how to visualize training dynamics {#iclr2025-hu-how-to-visualize-training-dynamics}

Key insight: take whatever summary statistics you have for each checkpoint, run classical low dimensional work on it such as PCA


## ICLR2025 Addepali: safety training of LM's generalized to semantically related prompts {#iclr2025-addepali-safety-training-of-lm-s-generalized-to-semantically-related-prompts}

Key insight: take some jailbreak that doesn't work anymore, make semantic pururbation o it, check if it still works. Often, it does.


## ICLR2025 Georgiev: attribute to delete {#iclr2025-georgiev-attribute-to-delete}

Key insight: learn a data model which then allows you to perturb what pieces of input pre-training data is relevant to the actual output, using this,, with counterfactual for what the correct unlearned outcome is, and then tune against that.
