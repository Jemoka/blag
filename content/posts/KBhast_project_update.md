+++
title = "AST Project Update"
author = ["Houjun Liu"]
draft = false
+++

## Introduction {#introduction}

Recent advances in language modeling has brought fourth the emergence of open domain chat systems built using decoder-only language models ((<a href="#citeproc_bib_item_1">Brown et al. 2020</a>)). Unfortunately, due to the inclusion of toxic content in massive online training sets, even in-distribution autoregressive sampling of these systems could degenerate into undesirable toxic trajectories ((<a href="#citeproc_bib_item_20">Zhang et al. 2021</a>; <a href="#citeproc_bib_item_10">McGuffie and Newhouse 2020</a>)).

Red teaming, the general class of methods to identify potentially harmful trajectories in language models for both understanding and pruning, is traditionally done with a human-in-the-loop with research focusing on sampling strategies and evaluation metrics ((<a href="#citeproc_bib_item_4">Ganguli et al. 2022</a>)). One classic strategy of identifying and benchmarking these possibly undesirable trajectories focuses on eliciting toxicity using a known sampled dataset ((<a href="#citeproc_bib_item_5">Gehman et al. 2020</a>)), which typically involves testing a series of human-written prompts for the chance that their direct entailments could result in toxicity. Yet, the emergence of toxicity may be spontaneous---without perceptible toxicity in the prompt---and model specific ((<a href="#citeproc_bib_item_11">Mehrabi et al. 2022</a>)).

Automated methods in this area typically focus similarly on the iterative selection of prompts and measuring the toxicity of the resulting trajectories, through direct search ((<a href="#citeproc_bib_item_18">Yu et al. 2023</a>)), search with LM reasoning ((<a href="#citeproc_bib_item_12">Mehrotra et al. 2024</a>)), or actual, rhetorical persuasive strategies ((<a href="#citeproc_bib_item_19">Zeng et al. 2024</a>)) developed through manual engineering. These methods result in model-specific prompts which are limited in diversity due to exogenous selection of the space of prompts, and may even require manual engineering for each model being tested.

Most recently, approaches have also emerged that uses Reinforcement Learning (RL) techniques for prompt optimization. These approaches range from using gradient steps to optimize embedding level "soft prompts" ((<a href="#citeproc_bib_item_14">Qian et al. 2022</a>)), optimizing discrete token choices through a differentiable reward ((<a href="#citeproc_bib_item_3">Deng et al. 2022</a>)), or optimizing a non-differentiable reward formulated solely by entailment toxicity ((<a href="#citeproc_bib_item_2">Casper et al. 2023</a>; <a href="#citeproc_bib_item_13">Perez et al. 2022</a>)).

Embedding level soft prompts are not understandable by humans in their nature, and of course will not arise naturally in the auto-regression process as decoder models are designed to choose in the vocab space. Even in discrete optimization approaches, the resulting prompts may appear to be disfluent or nonsensical ((<a href="#citeproc_bib_item_3">Deng et al. 2022</a>; <a href="#citeproc_bib_item_2">Casper et al. 2023</a>)) without further restrictions to the prompt space. Further, these methods ofte

In these methods, heuristics are designed typically to focus on the toxicity of the resulting output _without_ regard to the likelihood of the toxicity prompt automatically emerging; yet, toxicity can emerge both naturally within a language model ((<a href="#citeproc_bib_item_11">Mehrabi et al. 2022</a>)), occasionally without even conditioning the model on toxic content ((<a href="#citeproc_bib_item_16">Si et al. 2022</a>)). Even when fluency is used as a part of the scoring

Therefore, a gap in literature exists in automated, heuristic-guided red-teaming strategies which not only elicit toxicity but also do so with likely sequences from the original LM being red-teamed.


## Preliminaries {#preliminaries}


### AST {#ast}

In this work, we borrow from the literature of autonomous vehicle planning, in particular Adaptive Stress Testing (AST) ((<a href="#citeproc_bib_item_7">Koren et al. 2018</a>; <a href="#citeproc_bib_item_8">Lee et al. 2020</a>)), as a reinforcement learning (RL) formulation for the automatic discovery of problematic input trajectories which elicits toxicity. In AST, we formulate the task of finding _likely_ cases of _failure_ of any Markov Decision Process (MDP) (\\(S, A, R, T\\)) as a reinforcement learning problem, where failure is defined by some set \\(E \subset S\\).

An AST policy (which we abbreviate here as "an AST") acts to perturb the state of the underlying MDP (which we call "defender"). The AST takes state \\(s \in S\\) as input, and takes actions \\(a \in A\\) on the environment to obtain \\(s'\\), which the defender then acts on. The goal of the AST is to choose actions that maximize:

\begin{equation}
R(s,a, s') = \begin{cases}
R\_{e}, \text{if}\ s' \in E, s\ \text{is terminal} \\\\
d\_{E}(s'), \text{if}\ s' \in E, s\ \text{is terminal}\\\\
\log \qty(p\_{\text{defender}}(a|s)), \text{otherwise}
\end{cases}
\end{equation}

where \\(d\_{E}(s')\\) is some inverse distance metric between \\(s'\\) and a state of likely failure. That is, the AST attempts to identify likely actions that the _defender_ may take at a state which maximizes a failure.


### Automated Red-Teaming {#automated-red-teaming}


## Approach {#approach}


### Problem Formulation {#problem-formulation}

From our previous discussion, we continue to define dialogue language modeling as a finite-horizon MDP. Each \\(a \sim p\_{\theta}\\) is a single utterance given by a language model in an open domain dialogue task, each \\(s \in S\\) is the dialogue so far, and \\(T(s'|s,a) = p\_{\theta}(s'|s)\\) the conditional probability which tokens some utterance \\(s'\\) has given dialogue \\(s\\) and last turn statement \\(a\\).

In this work, we aim to learn some language model \\(p\_{AST}\\) which, when placed in a open domain dialogue with a defender (i.e. untuned) language model \\(p\_{\theta}\\), elicit toxic sequences from \\(p\_{\theta}\\).

Toxicity detection models exist to formulate a dense reward objective which helps score toxicity of a trajectory automatically ((<a href="#citeproc_bib_item_6">Hanu and Unitary 2020</a>; <a href="#citeproc_bib_item_9">Lees et al. 2022</a>)). They take a sequence \\(s\\) and produce \\(R\_{\phi}(s) \in [0,1]\\), which indicates the degree of toxicity in this sequence. We formulate our reward function for \\(p\_{AST}\\) following the original AST reward as much as possible, adjusting slightly for an LM context:

\begin{equation}
R(s,a, s') = \begin{cases}
1, \text{if}\ R\_{\phi}(s') > 0.5 \\\\
R\_{\phi}(s'), \text{if}\ R\_{\phi}(s') > 0.3 \\\\
\kappa \log \qty(p\_{\text{defender}}(a|s)), \text{otherwise}
\end{cases}
\end{equation}

where \\(\kappa\\) is any normalization constant of choice. Though this formulation doesn't naively appear to be corresponding to the AST reward naively, it fits the formulation when under the context of LM red-teaming.

We first define a **terminal state** as one which the language model is toxic. Indeed, a toxicity elicitation procedure in a two-participant dialogue can go on for a fairly large number of turns before toxicity is elicited ((<a href="#citeproc_bib_item_11">Mehrabi et al. 2022</a>)). Second, as \\(R\_{\phi}\\) reports its results densely based on the amount of toxicity, it essentially acts as an inverse toxicity metric to failure.


### Optimization {#optimization}

As with before, we are tuning our policy with proximal policy optimization ((<a href="#citeproc_bib_item_15">Schulman et al. 2017</a>)), testing the application of the PPO objective at levels of both entire conversations ((<a href="#citeproc_bib_item_21">Ziegler et al. 2020</a>)) as well as per utterance ((<a href="#citeproc_bib_item_17">Wu et al. 2023</a>)).

In our work, we have finalized the above formulation, obtained baseline policies, and are beginning to use PPO to tune our system. To build the experimental environment, we have obtained and cleaned a corpus of Reddit conversations, using our chosen \\(R\_{\phi}\\) ((<a href="#citeproc_bib_item_6">Hanu and Unitary 2020</a>)) to find low (&lt;0.5) toxicity input trajectories to serve as \\(s\_0\\) for our defender model.

To initialize the tuning process, we are using the RealToxicityPrompts dataset ((<a href="#citeproc_bib_item_5">Gehman et al. 2020</a>)) as a means of stabilizing our policy model prior to eliciting toxicity directly using the roll-outs.


## Detoxification Task {#detoxification-task}

After obtaining the policy, we aim to sample roll-outs of conversations between \\(P\_{AST}\\) and \\(P\_{\theta}\\), and use their resulting toxicity scores as as a standard dataset for applying PPO \\(P\_{\theta}\\). In this way, we can not only benchmark the performance of our model on our specific AST task, as well as provide motivation for the system's downstream use.


### Experiments {#experiments}


### Baselines {#baselines}


### Results {#results}


## Next Steps {#next-steps}
