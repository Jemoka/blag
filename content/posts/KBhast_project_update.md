+++
title = "AST Project Update"
author = ["Houjun Liu"]
draft = false
+++

Note that, after discussion and analysis of our previous formulation, we elected to reformulate our previous problem almost in its entirety. So, we first introduce here the new problem formulation, and discuss existing work.


## Background {#background}

Our fundamental motivation remains the same: that the classic processes of detoxifying multi-turn dialogue tasks suffer from long horizon ((<a href="#citeproc_bib_item_9">Ramamurthy et al. 2023</a>)) and adversarial ((<a href="#citeproc_bib_item_11">Si et al. 2022</a>)) trajectories. Previously, all typical strategies of detoxification focuses on eliciting toxicity using a known sampled dataset ((<a href="#citeproc_bib_item_2">Gehman et al. 2020</a>)), which typically involves using a series of human-written prompt to sample maximum-likely direct entailments of toxicity, yet the emergence of toxicity may be spontaneous---without perceptible toxicity in the prompt---and model specific ((<a href="#citeproc_bib_item_7">Mehrabi et al. 2022</a>)). Red teaming, the class of methods to identify potentially harmful trajectories in language models for both understanding and pruning, is traditionally done with a human-in-the-loop with research focusing on sampling strategies and evaluation metrics ((<a href="#citeproc_bib_item_1">Ganguli et al. 2022</a>)). Automated methods in this area typically focus similarly on the iterative selection of prompts and measuring the toxicity of the resulting trajectories, through direct search ((<a href="#citeproc_bib_item_13">Yu et al. 2023</a>)), search with LM reasoning ((<a href="#citeproc_bib_item_8">Mehrotra et al. 2024</a>)), or actual, rhetorical persuasive strategies ((<a href="#citeproc_bib_item_14">Zeng et al. 2024</a>)).

Previous work focuses mostly on non-guided, exhaustive search strategies; where heuristics exist, they typically focus on the toxicity of the resulting output _without_ regard to the likelihood of the toxicity prompt automatically emerging; yet, (<a href="#citeproc_bib_item_7">Mehrabi et al. 2022</a>) discusses the fact that toxicity can emerge without such toxic prompts. Therefore, a gap in literature exists in automated, heuristic-guided red-teaming strategies which not only elicit toxicity but also do so with likely sequences from the original LM being red-teamed.


## AST {#ast}

In this work, we borrow from the literature of autonomous vehicle planning, in particular Adaptive Stress Testing (AST) ((<a href="#citeproc_bib_item_4">Koren et al. 2018</a>; <a href="#citeproc_bib_item_5">Lee et al. 2020</a>)), as a reinforcement learning (RL) formulation for the automatic discovery of problematic input trajectories which elicits toxicity. In AST, we formulate the task of finding _likely_ cases of _failure_ of any Markov Decision Process (MDP) (\\(S, A, R, T\\)) as a reinforcement learning problem, where failure is defined by some set \\(E \subset S\\).

An AST policy (which we abbreviate here as "an AST") acts to perturb the state of the underlying MDP (which we call "defender"). The AST takes state \\(s \in S\\) as input, and takes actions \\(a \in A\\) on the environment to obtain \\(s'\\), which the defender then acts on. The goal of the AST is to choose actions that maximize:

\begin{equation}
R(s,a, s') = \begin{cases}
R\_{e}, \text{if}\ s' \in E, s\ \text{is terminal} \\\\
d\_{E}(s'), \text{if}\ s' \in E, s\ \text{is terminal}\\\\
\log \qty(p\_{\text{defender}}(a|s)), \text{otherwise}
\end{cases}
\end{equation}

where \\(d\_{E}(s')\\) is some inverse distance metric between \\(s'\\) and a state of likely failure. That is, the AST attempts to identify likely actions that the _defender_ may take at a state which maximizes a failure.


## Progress and Next Steps {#progress-and-next-steps}


### Done: Final Formulation {#done-final-formulation}

From our previous discussion, we continue to define dialogue language modeling as a finite-horizon MDP. Each \\(a \sim p\_{\theta}\\) is a single utterance given by a language model in an open domain dialogue task, each \\(s \in S\\) is the dialogue so far, and \\(T(s'|s,a) = p\_{\theta}(s'|s)\\) the conditional probability which tokens some utterance \\(s'\\) has given dialogue \\(s\\) and last turn statement \\(a\\).

In this work, we aim to learn some language model \\(p\_{AST}\\) which, when placed in a open domain dialogue with a defender (i.e. untuned) language model \\(p\_{\theta}\\), elicit toxic sequences from \\(p\_{\theta}\\).

Toxicity detection models exist to formulate a dense reward objective which helps score toxicity of a trajectory automatically ((<a href="#citeproc_bib_item_3">Hanu and Unitary 2020</a>; <a href="#citeproc_bib_item_6">Lees et al. 2022</a>)). They take a sequence \\(s\\) and produce \\(R\_{\phi}(s) \in [0,1]\\), which indicates the degree of toxicity in this sequence. We formulate our reward function for \\(p\_{AST}\\) following the original AST reward as much as possible, adjusting slightly for an LM context:

\begin{equation}
R(s,a, s') = \begin{cases}
1, \text{if}\ R\_{\phi}(s') > 0.5 \\\\
R\_{\phi}(s'), \text{if}\ R\_{\phi}(s') > 0.3 \\\\
\kappa \log \qty(p\_{\text{defender}}(a|s)), \text{otherwise}
\end{cases}
\end{equation}

where \\(\kappa\\) is any normalization constant of choice. Though this formulation doesn't naively appear to be corresponding to the AST reward naively, it fits the formulation when under the context of LM red-teaming.

We first define a **terminal state** as one which the language model is toxic. Indeed, a toxicity elicitation procedure in a two-participant dialogue can go on for a fairly large number of turns before toxicity is elicited ((<a href="#citeproc_bib_item_7">Mehrabi et al. 2022</a>)). Second, as \\(R\_{\phi}\\) reports its results densely based on the amount of toxicity, it essentially acts as an inverse toxicity metric to failure.


### In Progress: Tuning {#in-progress-tuning}

As with before, we are tuning our policy with proximal policy optimization ((<a href="#citeproc_bib_item_10">Schulman et al. 2017</a>)), testing the application of the PPO objective at levels of both entire conversations ((<a href="#citeproc_bib_item_15">Ziegler et al. 2020</a>)) as well as per utterance ((<a href="#citeproc_bib_item_12">Wu et al. 2023</a>)).

In our work, we have finalized the above formulation, obtained baseline policies, and are beginning to use PPO to tune our system. To build the experimental environment, we have obtained and cleaned a corpus of Reddit conversations, using our chosen \\(R\_{\phi}\\) ((<a href="#citeproc_bib_item_3">Hanu and Unitary 2020</a>)) to find low (&lt;0.5) toxicity input trajectories to serve as \\(s\_0\\) for our defender model.

To initialize the tuning process, we are using the RealToxicityPrompts dataset ((<a href="#citeproc_bib_item_2">Gehman et al. 2020</a>)) as a means of stabilizing our policy model prior to eliciting toxicity directly using the roll-outs.


### Next Steps: Evaluation {#next-steps-evaluation}

After obtaining the policy, we aim to sample roll-outs of conversations between \\(P\_{AST}\\) and \\(P\_{\theta}\\), and use their resulting toxicity scores as as a standard dataset for applying PPO \\(P\_{\theta}\\). In this way, we can not only benchmark the performance of our model on our specific AST task, as well as provide motivation for the system's downstream use.
