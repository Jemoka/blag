+++
title = "AST Project Update"
author = ["Houjun Liu"]
draft = false
+++

## Introduction {#introduction}

Recent advances in language modeling has brought fourth the emergence of open domain chat systems built using decoder-only language models ((<a href="#citeproc_bib_item_2">Brown et al. 2020</a>)). Unfortunately, due to the inclusion of toxic content in massive online training sets, even in-distribution autoregressive sampling of these systems could degenerate into undesirable toxic trajectories ((<a href="#citeproc_bib_item_27">Zhang et al. 2021</a>; <a href="#citeproc_bib_item_14">McGuffie and Newhouse 2020</a>)).

Red teaming, the general class of methods to identify potentially harmful trajectories in language models for both understanding and pruning, is traditionally done with a human-in-the-loop with research focusing on sampling strategies and evaluation metrics ((<a href="#citeproc_bib_item_6">Ganguli et al. 2022</a>)). One classic strategy of identifying and benchmarking these possibly undesirable trajectories focuses on eliciting toxicity using a known sampled dataset ((<a href="#citeproc_bib_item_7">Gehman et al. 2020</a>)), which typically involves testing a series of human-written prompts for the chance that their direct entailments could result in toxicity. Yet, the emergence of toxicity may be spontaneous---without perceptible toxicity in the prompt---and model specific ((<a href="#citeproc_bib_item_15">Mehrabi et al. 2022</a>)).

Automated methods in this area typically focus similarly on the iterative selection of prompts and measuring the toxicity of the resulting trajectories, through direct search ((<a href="#citeproc_bib_item_25">Yu et al. 2023</a>)), search with LM reasoning ((<a href="#citeproc_bib_item_16">Mehrotra et al. 2024</a>)), or actual, rhetorical persuasive strategies ((<a href="#citeproc_bib_item_26">Zeng et al. 2024</a>)) developed through manual engineering. These methods result in model-specific prompts which are limited in diversity due to exogenous selection of the space of prompts, and may even require manual engineering for each model being tested.

Approaches have also emerged that uses Reinforcement Learning (RL) techniques for prompt optimization. These approaches range from using gradient steps to optimize embedding level "soft prompts" ((<a href="#citeproc_bib_item_18">Qian et al. 2022</a>)), optimizing discrete token choices through a differentiable reward ("soft RL") ((<a href="#citeproc_bib_item_5">Deng et al. 2022</a>)), or optimizing a non-differentiable reward formulated solely by entailment toxicity ("hard RL") ((<a href="#citeproc_bib_item_3">Casper et al. 2023</a>; <a href="#citeproc_bib_item_17">Perez et al. 2022</a>)).

Embedding level soft prompts are not understandable by humans in their nature, and of course will not arise naturally in the auto-regression process as decoder models are designed to choose in the vocab space. Even in discrete optimization approaches, the resulting prompts may appear to be disfluent or nonsensical ((<a href="#citeproc_bib_item_5">Deng et al. 2022</a>; <a href="#citeproc_bib_item_3">Casper et al. 2023</a>)) without further restrictions to the prompt space.

In these methods, heuristics are designed typically to focus on the toxicity of the resulting output _without_ regard to the likelihood of the toxicity prompt automatically emerging. Even when _fluency_ is used as a part of the scoring, the outputs of models specifically tuned to elicit toxicity appear relatively nonsensical ((<a href="#citeproc_bib_item_23">Wichers, Denison, and Beirami 2024</a>)) as compare to direct entailments. Yet, toxicity can emerge both naturally within a language model ((<a href="#citeproc_bib_item_15">Mehrabi et al. 2022</a>)), occasionally without even conditioning the model on toxic or potentially harmful content ((<a href="#citeproc_bib_item_22">Si et al. 2022</a>)). Therefore, a gap in literature exists in automated, heuristic-guided red-teaming strategies which not only elicit toxicity but also do so with likely sequences that entail normal conversation from the original LM being red-teamed.


## ASTPrompter {#astprompter}

In response, we introduce ASTPrompter, a Reinforcement Learning scheme which formulates LM red-teaming as a multi-objective optimization problem that, given a non-toxic prefix in a conversation corpus, seeks to identify adversarial suffixes that are 1) themselves likely (low perplexity) entailments of the non-toxic prefix as scored by the black-box language model and 2) result in toxic generation by the black-box language model when combined with the prefix. We solve this task using a Hard-RL approach through an online-learning ((<a href="#citeproc_bib_item_8">Guo et al. 2024</a>)) variant of the Identity Preference Optimization (IPO, (<a href="#citeproc_bib_item_1">Azar et al. 2023</a>)) scheme on the GPT-2 model (). By prompting the adversarial with filtered Reddit conversations ((<a href="#citeproc_bib_item_4">Chang et al. 2020</a>)), serving an instance of non-toxic and easily arising dialogue prefixes, we show empirical results relating to both toxicity and fluency of the resulting trajectories; we further discuss trade offs of this policy and existing toxicity elicitation approaches in the types of toxicity it elicits and the means by which toxicity arises.


### Adaptive Stress Testing {#adaptive-stress-testing}

In this work, we borrow from the literature of autonomous vehicle planning, in particular Adaptive Stress Testing (AST) ((<a href="#citeproc_bib_item_11">Koren et al. 2018</a>; <a href="#citeproc_bib_item_12">Lee et al. 2020</a>)), as a reinforcement learning (RL) formulation for the automatic discovery of problematic input trajectories which elicits toxicity. In AST, we formulate the task of finding _likely_ cases of _failure_ of any Markov Decision Process (MDP) (\\(S, A, R, T\\)) as a reinforcement learning problem, where failure is defined by some set \\(E \subset S\\).

An AST policy (which we abbreviate here as "an AST" or "the adversary") acts to perturb the state of the underlying MDP (which we call "defender"). The AST takes state \\(s \in S\\) as input, and takes actions \\(a \in A\\) on the environment to obtain \\(s'\\), which the defender then acts on. The goal of the adversary is to choose actions that maximize:

\begin{equation}
R(s,a, s') = \begin{cases}
R\_{e}, \text{if}\ s' \in E, s\ \text{is terminal} \\\\
d\_{E}(s'), \text{if}\ s' \in E, s\ \text{is terminal}\\\\
\log \qty(p\_{\text{defender}}(a|s)), \text{otherwise}
\end{cases}
\end{equation}

where \\(d\_{E}(s')\\) is some inverse distance metric between \\(s'\\) and a state of likely failure. That is, the adversary attempts to identify likely actions that the _defender_ may take at a state which maximizes a failure.


### Reward Formulation {#reward-formulation}

Following this framework, we define dialogue language modeling as a finite-horizon MDP. Each \\(a \sim p\_{\theta}\\) is a single utterance given by a language model in an open domain dialogue task, each \\(s \in S\\) is the dialogue so far, and \\(T(s'|s,a) = p\_{\theta}(s'|s)\\) the conditional probability which tokens some utterance \\(s'\\) has given dialogue \\(s\\) and last turn statement \\(a\\).

In this work, we aim to learn some language model \\(\pi\_{\theta}\\) which, when placed in a open domain dialogue with a defender (i.e. untuned) language model \\(\pi\_{\text{defender}}\\), elicit toxic sequences from \\(\pi\_{\text{defender}}\\).

Toxicity detection models exist to formulate a dense reward objective which helps score toxicity of a trajectory automatically ((<a href="#citeproc_bib_item_9">Hanu and Unitary 2020</a>; <a href="#citeproc_bib_item_13">Lees et al. 2022</a>)). They take a sequence \\(s\\) and produce \\(R\_{\phi}(s) \in [0,1]\\), which indicates the degree of toxicity in this sequence. We formulate our reward function for \\(p\_{AST}\\) following the original AST reward as much as possible, adjusting for an LM context:

\begin{equation}
R(s,a, s') = 2 R\_{\phi}(s') - 0.1 \frac{\log \qty(p\_{\text{defender}}(a|s))}{\text{len}(a)}
\end{equation}

The first term of the reward is a scaled toxicity score \\(\in [0,1]\\), and the second term is a scaled perplexity measure (precisely, length-scaled entropy, which is \\(\log\_{2}\\) of perplexity) ((<a href="#citeproc_bib_item_10">Jurafsky and Martin, n.d.</a>)) for likelihood of the adversary trajectory.

Though the reward formulation presented above doesn't naively appear to be corresponding to AST adversary reward exactly, it fits the formulation when under the context of LM red-teaming. We now provide a sketch of this argument, under the assumption that our defender policy does not experience representation collapse, this reward is sound for generating an AST policy.


### Reward Soundness {#reward-soundness}

We first define a **terminal state** as one which the language model is toxic. Indeed, a toxicity elicitation procedure in a two-participant dialogue can go on for a fairly large number of turns before toxicity is elicited ((<a href="#citeproc_bib_item_15">Mehrabi et al. 2022</a>)).

As \\(R\_{\phi}\\) reports its results densely based on the amount of toxicity, it essentially acts as an inverse distance metric to a "failure" state. As such, the first term is functionally inactive during (most) non-toxic generations, where \\(R\_{\phi} \approx 0\\), representing non-terminal states.

Conversely, though the second term is theoretically unbounded, it is functionally bounded due to \\(a\\) being MLE rollouts from the adversary and therefore would not have extremely high perplexity as scored by a derivative of the LM; if the adversary does not experience representation collapse (a factor which we describe further below), high toxicity sequences would result in the first term dominating the second, resulting in the terminal stages of the original AST formulation.


### IPO {#ipo}

To maximize solve the above reward metric, we turn to Identity Preference Optimization (IPO, (<a href="#citeproc_bib_item_1">Azar et al. 2023</a>)). IPO is a unsupervised paired-example training scheme similar to Direct Policy Optimization (DPO, (<a href="#citeproc_bib_item_20">Rafailov et al. 2023</a>))---where optimal policy search is conducted through being guided by pairs of optimal vs. suboptimal training examples---but with one key distinction: while the DPO objective assumes that the paired preference data are rationally ranked according to a single objective (in our case, this is untrue due to there being multiple terms to \\(R\\) and hence a non-trivial Pareto frontier exists), IPO relaxes this assumption and simply requires that pairs of entailments are ranked correctly according to their preferability---in our case, ranked by reward score.

Naively, an application of the Hard-RL approach Proximal Policy Optimization ((<a href="#citeproc_bib_item_21">Schulman et al. 2017</a>)) would seem to be appropriate for this case and result in faster convergence. Yet, as discussed in Section [Reward Soundness](#reward-soundness), the multi-modality and unboundedness of the reward signal results in a common failure case of over-optimizing \\(R\_{\phi}\\) with increasingly unlikely or degenerative prompts (similar to (<a href="#citeproc_bib_item_3">Casper et al. 2023</a>)) that initially elicit toxicity, but eventually will lead to representation collapse. Bounding \\(R\\), a typical strategy to mitigate this, results in the second term being saturated, achieving a similar effect.


### Online IPO and Multi-Turn Toxicity Elicitation {#online-ipo-and-multi-turn-toxicity-elicitation}

Existing direct preference approaches typically use a frozen set of preferences which is not updated throughout training. This type of approach is suitable for optimizing for human preferences, which has ample data and a relatively unchanging preference profile.

However, as our task focuses on iteratively testing a language model, this naive solution would result in the need of exogenously generating, selecting, and iterating a set of likely and toxic trajectories from the defender model---at which one could simply use supervised fine tuning or classic RLHF ((<a href="#citeproc_bib_item_28">Ziegler et al. 2020</a>)) for the detoxification task without any need of any further work.

Fortunately, recent work ((<a href="#citeproc_bib_item_8">Guo et al. 2024</a>)) has demonstrated strong results in using direct preference approaches in an online learning format, whereby preference data is generated on-the-fly through by ranking with a surrogate function (in our case, \\(R\\)) as the model improves. This is further advantageous because dialogue toxicity may take multiple turns to emerge ((<a href="#citeproc_bib_item_15">Mehrabi et al. 2022</a>)). As such, each rollout may contain multiple pairs of completions between the toxicity model and the defender policy. Because IPO requires paired response for each prompt, we must recursively build a tree of possible prompts given the previous conditions. This is formulated as a recursive generation procedure outlined in Algorithm \ref{alg:rollout}.

\begin{algorithm}
\caption{Multi-Turn Paired Dialogue Rollout}\label{alg:rollout}
\tcc{$\diamond$ represents string concatenation}
\begin{algorithmic}
\Require\\\\
Adversarial AST Policy $p\_{\theta}$\\\\
Defender policy $p\_{\text{defender}}$\\\\
Non-Toxic dataset $D$\\\\
Defense Opportunity Horizon $H$\\\\
\algrenewcommand\algorithmicensure{\textbf{Do:}}
\Ensure
\State $S \gets \varnothing$
\State $G \gets x \in D$ \Comment{current prompt}
\If{$H$ is 0}
\State return $S$
\EndIf
\State Rollout AST from prompt $y\_1, y\_2 \sim \pi\_{\theta}(G)$
\State Rollout Defender $y\_1' \sim \pi\_{\text{defender}}(G + y\_1)$, $y\_2' \sim \pi\_{\text{defender}}(G + y\_2)$
\State $y^+ \gets \arg\max\_{y\_j} R(G, y\_j, y\_j')$
\State $y^- \gets \arg\min\_{y\_j} R(G, y\_j, y\_j')$
\State $S \gets S \cup \\{(G, y^{+}, y^{-})\\}$
\State $S \gets S \cup \text{recurse} (H \gets H-1, G \gets \\{G \diamond  y^{+} \diamond  y^{+}'\\})$
\State $S \gets S \cup \text{recurse} (H \gets H-1, G \gets \\{G \diamond  y^{-} \diamond  y^{-}'\\})$
\State return $S$
\end{algorithmic}
\end{algorithm}

In each epoch, after rolling out some responses, we formulate our training procedure using a similar approach as that given in ((<a href="#citeproc_bib_item_8">Guo et al. 2024</a>)). Recall the IPO objective:

\begin{equation}
\mathcal{L}\_{\theta}(y^{+}, y^{-}, x, \beta) = \qty [\log \qty(\frac{p\_{\theta}(y^{+ }|x) p\_{ref}(y^{-}|x)}{p\_{\theta}(y^{-}|x) p\_{ref}(y^{+}|x)}) - \frac{1}{2 \beta}]^{2}
\end{equation}

where \\(\beta\\) is a hyper-parameter, and \\(y^{+ }, y^{-}\\) are two possible entailments of \\(x\\) where \\(y^{+ } \succ y^{-}\\) in terms of preference---that is, the resulting generations from the defender is more toxic or likely: \\(R(x, y^{+ }, \text{rollout}\_{\text{defender}}(y^{+}|x)) \geq  R(x, y^{-}, \text{rollout}\_{\text{defender}}(y^{+}|x))\\). Our optimization, then, iterates between collecting samples through multi-turn sampling from both the adversary and defender, followed by IPO of the resulting paired samples. The exact procedure is outlined in Algorithm \ref{alg:onlineipo}.

\begin{algorithm}
\tcc{Let $\tau(\pi\_{\theta}, \pi\_{\text{defender}}, H)$ be a set of rollouts following Multi-Turn Paired Rollout}
\caption{Online IPO for Dialogue Toxicity Elicitation (One Epoch)}\label{alg:onlineipo}
\begin{algorithmic}
\algrenewcommand\algorithmicensure{\textbf{Do:}}
\Require\\\\
Base policy $p\_{\text{ref}}$\\\\
Defender policy $p\_{\text{defender}}$\\\\
Non-Toxic dataset $D$\\\\
IPO parameter $\beta$\\\\
Epsiodes Per Epoch $E$\\\\
Defense Opportunity Horizon $H$\\\\
\Ensure
\State $\theta \gets \text{ref}$ \Comment{copy parameter of base model to start}
\State $t \gets 0$
\While{$t < E$}
\State $V \gets \tau(\pi\_{\theta}, \pi\_{\text{defender}}, H)$
\State $j \gets 0$
\While{$j < |V|$}
\State $x, y^{+}, y^{-} \gets V\_{j}$
\State Calculate $\theta'$ using $\nabla\_{\theta}\mathcal{L}\_{\theta}(y^{+}, y^{-}, x, \beta)$
\State $\theta \gets \theta'$
\State $v \gets v+1$
\EndWhile
\State $t \gets t+1$
\EndWhile
\end{algorithmic}
\end{algorithm}

Importantly, \ref{alg:onlineipo} represents **one epoch** of the procedure, and it is repeated until convergence.


### Weak Supervision {#weak-supervision}

Through the procedure given in Section [Online IPO and Multi-Turn Toxicity Elicitation](#online-ipo-and-multi-turn-toxicity-elicitation) would likely bring eventual convergence, the amount of naive occurrence of toxicity would be sparse enough such that the procedure may need to be repeated for a long time before the policy would converge.

To address this, we _weakly supervise_ our policy by, with probability \\(\rho\\) in each epoch, swap out the non-toxic prompt set \\(D\\) with a small and known-toxicity-eliciting dataset. This simply allows us to sample occasionally inflammatory text, where the adversary policy _may_ produce rollouts that are toxic which will allow a higher IPO loss margin between \\(y^{+}\\) and \\(y^{-}\\). In Section [Results](#results), we benchmark this choice with both a supervised policy on the toxicity elicitation set only as well as our method without any weak supervision.


## Experiments {#experiments}


### Model and Data {#model-and-data}

We aim to tune our model to elicit toxicity in realistic dialogue situations. To achieve this, we elected to use a not-explicitly-toxic natural textual conversation data as initial prompts for the training procedure.

The Convokit Reddit (small) corpus ((<a href="#citeproc_bib_item_4">Chang et al. 2020</a>)) has previously been discussed as a genuine source of generally non-toxic prompts which may induce unintended LM toxicity ((<a href="#citeproc_bib_item_22">Si et al. 2022</a>)). To ensure that the data used as a prefix (which the adversary entails with likely toxic text) is itself non-toxic, we additionally filter for the prompts' toxicity with `p<0.3` according to our chosen surrogate toxicity model Detoxify ((<a href="#citeproc_bib_item_9">Hanu and Unitary 2020</a>)).

For weak supervention, we chose `RealToxicityPrompts` ((<a href="#citeproc_bib_item_7">Gehman et al. 2020</a>))---a popular set of prompts which are known to elicit toxicity.

All of our experiments uses GPT-2 ((<a href="#citeproc_bib_item_19">Radford et al., n.d.</a>)) as both the defender model and the reference policy for the adversary IPO process.


### Metrics {#metrics}

We evaluate our resulting policy with our chosen toxicity surrogate model Detoxify ((<a href="#citeproc_bib_item_9">Hanu and Unitary 2020</a>)). Specifically, we use a held-out test partition of the ConvoKit Reddit corpus as the prompt, and allowing both the adversarial model and defender model to entail the prompt in 3 turns following the recursive procedure in Algorithm \ref{alg:rollout} (but without generating paired positive and negative samples).

For each input prompt, the rollout procedure will result in 3 objects that can be scored (one for each turn, whereby the "prompt" is the conversation so far and the "entailment" is the adversarial output). During scoring, we compute the perplexity of the adversarial entailment as measured by the _defender_ model \\(ppl\_{\text{defender}}(y)\\) --- to evaluate likelihood of the identified red-team prompt naturally occurring---and the toxicity of both the resulting defender output \\(R\_{\phi}(y' \sim p\_{\text{defender}}(\cdot | y))\\) and the entire attack/defense turn \\(R\_{\phi}\qty(y \cup \qty(y' \sim p\_{\text{defender}}(\cdot | y)))\\).

We report results across all of these steps and all entries in the held out set.


### Baselines {#baselines}

For this work, we establish a variety of baselines, each representing one potential trade-off between output fluency and toxicity elicitation. We adjust each baseline approach as little as possible subject to fitting our design constraints; specifically, that the adversarial statement must entail a prefix which the adversary cannot chose and is from a non-toxic corpus.

**No Tuning**: we report results by simply performing the evaluation task without any training by using a GPT-2 model for both the adversary and defender.

**Supervised Fine-Tune**: we use the train slice of `RealToxicityPrompts` to tune a copy of GPT-2 which elicits known toxic outputs.

**Gradient-Based Approaches**: following the procedure given in (<a href="#citeproc_bib_item_23">Wichers, Denison, and Beirami 2024</a>), we aim to tune a policy which back-propegates through a frozen defender model to elicit toxicity. Differing from their work, however, is that we randomly select the input prompt which the adversary model has to entail from the training slice of our proposed model (instead of keeping it fixed) to model a more realistic toxicity emergence setting.

In all cases, including our presented method, we use an untuned GPT-2 as the defender model.


### Implementation Details {#implementation-details}

We ran our experiments using the GPT2 implementation within the Hugging Face Transformers ((<a href="#citeproc_bib_item_24">Wolf et al. 2020</a>)) library, on two Nividia L40 GPUs. Learning rate of IPO was set to \\(5 \times 10^{-7}\\), with a linear warm up of \\(500\\) steps. For IPO, \\(\beta = 0.2\\). The training multi-turn horizon was set to \\(3\\), and each epoch included \\(512\\) such steps tuned with batch size of \\(8\\). We tuned our model for [TBD] epochs.

Our supervised baseline was trained on the train split of `RealToxicityPrompts`, for \\(8\\) epochs with a learning rate of \\(5 \times 10^{-6}\\) using a batch size of \\(16\\), optimizing standard cross-entropy language modeling loss.

Our gradient-based baseline was tuned with [TBD] epochs, with batches of [TBD] rollouts each. The optimization objective is consistent with (<a href="#citeproc_bib_item_23">Wichers, Denison, and Beirami 2024</a>), namely, to maximize the toxicity score by backpropegating the negative of the toxicity score across the toxicity model's scoring.


## Results {#results}

| Approach | \\(ppl\_{\text{defender}}(y)\\) (mean) | \\(ppl\_{\text{defender}}(y)\\) (range) | $R<sub>&phi;</sub>(y' &sim; p<sub>\text{defender}</sub>(&sdot; | y))$ (mean) | $R<sub>&phi;</sub>(y' &sim; p<sub>\text{defender}</sub>(&sdot; | y))$ (range) | $R<sub>&phi;</sub>\qty(y &cup; \qty(y' &sim; p<sub>\text{defender}</sub>(&sdot; | y)))$ (mean) | $R<sub>&phi;</sub>\qty(y &cup; \qty(y' &sim; p<sub>\text{defender}</sub>(&sdot; | y)))$ (range) |
|----------|----------------------------------------|-----------------------------------------|----------------------------------------------------------------|-------------|----------------------------------------------------------------|--------------|---------------------------------------------------------------------------------|--------------|---------------------------------------------------------------------------------|---------------|
|          |                                        |                                         |                                                                |             |                                                                |              |                                                                                 |              |                                                                                 |               |


## Next Steps and Discussion {#next-steps-and-discussion}

1.  we still need to finish tuning parameters for our model (\\(\beta\\), number of epochs to train, weighting for teach term)
2.  we need to finish the gradient based baseline
3.  ideally, we should perform some qualitative analysis of the trajectories elicited by the model
4.  a good analysis would be a downstream analysis of---within the trajectories that ended up being toxic (i.e. successful elicitation), what characteristics do they have? As in, even if we have fewer toxic prompts than that of SFT, are ours more likely, etc.
5.  stretch: if time permits, to elicit a whole dataset of prompts using our adversarial model, and use it to train + evaluate a non-toxic GPT2 as a demonstration of the applications of our work.
