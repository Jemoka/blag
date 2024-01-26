+++
title = "Project Proposal: Lookahead Sampler"
author = ["Houjun Liu"]
draft = false
+++

## Introduction and Background {#introduction-and-background}

Recent advances of language models (LMs) introduced the possibility of in-context, few or zero-shot reasoning ((<a href="#citeproc_bib_item_1">Brown et al. 2020</a>)) using LMs without much or any fine tuning.

Classically, LM decoding takes place using a left-to-right fashion, auto-regressively resolving one token at a time by sampling from the output distribution of possible next words. This simple approach has yielded significant advancements across most areas of LM research, but is subject to some notable drawbacks.

Most importantly, (<a href="#citeproc_bib_item_3">Holtzman et al. 2020</a>) highlights the problem of "de-generation", whereby, because of the non-backtracking nature of auto-regression, naive maximizations of sequence likelihood results in a most likely sub-phrase being repeated. Yet, (<a href="#citeproc_bib_item_2">Finlayson et al. 2023</a>) has shown that one core reason why this de-generative process occurs due to the dramatically constraining projection which the softmax activation causes at the end of LM decoding. Therefore, especially as model size scales, it is possible that the latent information of a LM contains a lot more information than can be posited from the final token output.

Recent work in LM agents have taken steps to solve more complex problems with LMs by attempting to extract latent reasoning by eliciting prompt-level natural language responses. The simplest approach, named "chain-of-thoughts" (CoT), involves forcing the LM at decode time to begin the sequence with natural language reasoning about its actions ((<a href="#citeproc_bib_item_8">Wei et al. 2022</a>)). The fairly simple method has contributed to the creation of powerful language agents ((<a href="#citeproc_bib_item_10">Yao, Zhao, et al. 2023</a>)) that can reason about complex actions.

Yet more recently, (<a href="#citeproc_bib_item_9">Yao, Yu, et al. 2023</a>) presents a decomposition of the chain-of-thoughts approach by combining LLM decoding with classic approaches in search and planning. This "tree-of-thoughts" (ToT) formulation breaks a possible valid response into a finite-horizon planning problem, whereby at each time an I.I.D. sampling of LM output is decoded, and the optimal seed sequence for each next time stamp decided through the LM's own scoring of such samples via self-reflection by depth-first (DFS) or breath-first (BFS) traversal of the sampling tree.

By combining explicit planning and LM reasoning, this approach achieved state-of-the-art results in difficult natural-language tasks such as a crossword. However, the approach has a few limitations yet to be explored which may confer increased reasoning advantage.

First, the ToT formulation still leverages a decoding approach at a paragraph level, meaning its output thoughts are still subject to the degeneration concerns outlined before. Furthermore, the paragraph level decoding means that a successful decoding with ToT requires the generation of many such "thoughts" to create an adequate sampling of the latent state space.

Second, ToT does not incorporate any form of preferential planning between different "though" states, and instead opts for a fixed search scheme such as DFS to decode the best possible output sequences---in contrast to dynamic approaches which preferentially explore sequences of high probability of success.

To address these limitations, we propose the Lookahead Sampler (LS), a LM inference scheme which aims to leverage the LM self-reflective planning aspects of ToT, but formulate the problem explicitly as 1) a token-level decoding decision-making scheme with backtracking which 2) is solved via an online search formulation. To do this, we formulate the task of self-reflective language agent decoding as a POMDP ((<a href="#citeproc_bib_item_4">Kaelbling, Littman, and Cassandra 1998</a>)), and propose strategies to best solve this system.

The key underlying assumption of the proposed LS scheme involves the claim that LMs are able to make judgments about the coherence of a sequence in latent space which is collapsed during output token simplex projection. This assumption is supported by the existence of reinforcement learning formulations of LM-on-LM output verification---both for reasoning ((<a href="#citeproc_bib_item_7">Verma et al. 2022</a>)) and hallucination ((<a href="#citeproc_bib_item_6">Liu et al. 2022</a>))--as well as the ToS approach itself.

We leverage this assumption by, similar to ToT, using the LM's evaluation of the likelihood of a sequence (similar to LM "scoring" of a "thought" in ToT) as a heuristic for the coherence and reasoning within a subsequence of LM output. Yet, differing from ToT, we explicitly formulate this scoring by an LM as an "observation" from an unobservable underlying latent understanding of the input sequence.


## Proposed Approach {#proposed-approach}


### Definitions and Prompts {#definitions-and-prompts}

To formulate the approach, let us first formalize LM decoding. Let \\(\tau\\) a sequence of tokens in vocab, formulating a trajectory which we combine, if complete, to call a "sentence":

\begin{equation}
\tau\_{i} = [w\_1, \dots, w\_{n}], w\_{j} \in V
\end{equation}

Let an LM with parameters \\(\theta\\) be called \\(p\_{\theta}\\), the task of LM decoding is then sampling a word from the next word distribution \\(w\_{n+1} \in W\_{n+1}\\) given our current trajectory where:

\begin{equation}
W\_{n+1} = p\_{\theta}( \cdot | \tau\_{i})
\end{equation}

Following ToT's value formulation, we label an output trajectory using one of three situations: "sure" \\(c\_0\\), "likely" \\(c\_1\\), "impossible" \\(c\_2\\).

Finally, we can now formulate our space as \\(S = C \times \tau\\). For instance, let

\begin{equation}
\tau\_{0} = [\`\`Jack", \`\`is", \`\`chicken"]
\end{equation}

then, the state: \\((\tau\_{0}, c\_1)\\) can be interpreted as the situation that "Jack is likely a chicken".

We further define a few LM prompts (i.e. functions over \\(\tau\\)) that will be useful in our discussion of the formulation.

we define the `conditioning` prompt as:

\begin{equation}
\tau\_{cond}(\tau\_{i}, \tau\_{j}, c\_{i}) = \text{if } \tau\_{i} \text{ is } c\_{i} \text{, then, } \tau\_{j} \text{ is }
\end{equation}

and the `evaluation` prompt as:

\begin{equation}
\tau\_{eval}(\tau\_{i}) = \tau\_{i} \text{ is }
\end{equation}

these prompts will be used in the following section to formulate our transition and observation functions, an could be thought of similarly as analogous to ToT's instantiation of the "value" function.


### POMDP Formulation {#pomdp-formulation}

We formulate the **state**, as mentioned above, as \\(S = C \times \tau\\). As we desire to formulate LS as an LM decoding scheme, we have **action** space being discrete over three possible decoding actions --- "sample next token" \\(a\_0\\), "delete previous token" \\(a\_1\\), "submit" \\(a\_2\\). Let \\(A(a, \tau\_{i}) \in \tau\\) be the function which applies the action (i.e. deleting a token, sampling a token from LLM) onto a given trajectory. \\(A(a\_2, \tau\_{i}) = \tau\_{i}\\).

We assign **reward** as follows:

\begin{equation}
R((\tau, c), a) = \begin{cases}
+1, \text{where, }c = c\_0, a=a\_2 \\\\
-1, \text{where, }c = c\_2, a=a\_2\\\\
0, \text{otherwise}
\end{cases}
\end{equation}

indeed, importantly, no other agents apart from the LM itself is responsible for assigning this reward---making this a self-reflection scheme.

We leverage the `conditioning` prompt above to formulate our transition function. The motivation for this formulation is similar to the CoT---that leveraging stepwise thinking in LMs is easier than one-shot reasoning. Hence, we give:

\begin{equation}
T((\tau', c') | (\tau, c), a) = \begin{cases}
prob(p\_{\theta}(\cdot | \tau\_{cond}(\tau, \tau', c)) = c'), \text{where, } A(a, \tau) = \tau' \\\\
0, \text{otherwise}
\end{cases}
\end{equation}

that is, the probability of a certain next state is the probability that the LM assigns to that next state given our current state via the `conditioning` prompt.

Similarly, we define an observation model using the LM---effectively, letting the LM introspect its own generation to assign a possible evaluation; this is directly analogous to the "value" computation step in ToT. We define the observation space to be discrete and similar to the state space, that is, \\(O = C\\). Importantly, however, these two spaces are _distinct_: due to the limitations of sampling, we can never observe the LM's evaluation of a sequence directly; hence, the claims of the LM regarding its hypothesis of state is taken as the state. We define our observation model using `evaluation`:

\begin{equation}
\omega(c'|a,(\tau, c)) = prob(p\_{\theta}(\cdot | \tau\_{eval}(\tau)) = c')
\end{equation}

notably, \\(c\\), the current state, is never used.

Finally, we define our belief space as 2-simplex over \\(C\\) crossed with all trajectories (i.e. \\(B = \triangle^{|C|} \times \tau\\)). We will update our beliefs like so:

\begin{equation}
update((b\_{prob}, \tau),a,o) = (DSF(b\_{prob}, a,o), A(a, \tau))
\end{equation}

where \\(DSF\\) is the discrete state filter.


### Decoding {#decoding}

The solution to this system will likely be approximate ((<a href="#citeproc_bib_item_5">Kurniawati, Hsu, and Lee 2008</a>)), resulting in a set of sampled alpha-vectors representing the optimal value function of this system. The process of decoding would involve seeding \\(b\\) with the user input (i.e. "prompt") sequence, and uninformed uniform likelyhood over all three states.

Then, to perform decoding, we autoregressively preform one-step alpha-vector lookahead over our set of obtained alpha-vectors \\(\Gamma\\):

\begin{equation}
\pi^{\Gamma}(b) = \arg\max\_{a}\qty[R(b,a)+\gamma \qty(\sum\_{o}^{}P(o|b,a) U^{\Gamma}(update(b,a,o)))]
\end{equation}

where:

\begin{equation}
R(b,a) = \sum\_{s}^{} R(s,a)b(s)
\end{equation}

\begin{align}
P(o|b,a) &= \sum\_{s}^{} p(o|s,a) b(s)  \\\\
&= \sum\_{s}^{} \sum\_{s'}^{} T(s'|s,a) O(o|s',a) b(s)
\end{align}

and

\begin{equation}
U^{\Gamma}(b) = \max\_{\alpha \in \Gamma} \alpha^{\top}  b
\end{equation}


## Plan for Evaluation {#plan-for-evaluation}

ToT offers a fairly comprehensive suite of evaluations for the resulting LM agent. One task that would be salient to begin evaluation would be the crossword task, which has been shown to be difficult even with SOTA LMs like GPT-4.



<style>.csl-entry{text-indent: -1.5em; margin-left: 1.5em;}</style><div class="csl-bib-body">
  <div class="csl-entry"><a id="citeproc_bib_item_1"></a>Brown, Tom B., Benjamin Mann, Nick Ryder, Melanie Subbiah, Jared Kaplan, Prafulla Dhariwal, Arvind Neelakantan, et al. 2020. “Language Models Are Few-Shot Learners.” arXiv. <a href="http://arxiv.org/abs/2005.14165">http://arxiv.org/abs/2005.14165</a>.</div>
  <div class="csl-entry"><a id="citeproc_bib_item_2"></a>Finlayson, Matthew, John Hewitt, Alexander Koller, Swabha Swayamdipta, and Ashish Sabharwal. 2023. “Closing the Curious Case of Neural Text Degeneration.” arXiv. <a href="http://arxiv.org/abs/2310.01693">http://arxiv.org/abs/2310.01693</a>.</div>
  <div class="csl-entry"><a id="citeproc_bib_item_3"></a>Holtzman, Ari, Jan Buys, Li Du, Maxwell Forbes, and Yejin Choi. 2020. “The Curious Case of Neural Text Degeneration.” arXiv. <a href="http://arxiv.org/abs/1904.09751">http://arxiv.org/abs/1904.09751</a>.</div>
  <div class="csl-entry"><a id="citeproc_bib_item_4"></a>Kaelbling, Leslie Pack, Michael L. Littman, and Anthony R. Cassandra. 1998. “Planning and Acting in Partially Observable Stochastic Domains.” <i>Artificial Intelligence</i> 101 (1): 99–134. doi:<a href="https://doi.org/10.1016/S0004-3702(98)00023-X">10.1016/S0004-3702(98)00023-X</a>.</div>
  <div class="csl-entry"><a id="citeproc_bib_item_5"></a>Kurniawati, Hanna, David Hsu, and Wee Sun Lee. 2008. “SARSOP: Efficient Point-Based POMDP Planning by Approximating Optimally Reachable Belief Spaces.” In <i>Robotics: Science and Systems IV</i>, nil. doi:<a href="https://doi.org/10.15607/rss.2008.iv.009">10.15607/rss.2008.iv.009</a>.</div>
  <div class="csl-entry"><a id="citeproc_bib_item_6"></a>Liu, Tianyu, Yizhe Zhang, Chris Brockett, Yi Mao, Zhifang Sui, Weizhu Chen, and Bill Dolan. 2022. “A Token-Level Reference-Free Hallucination Detection Benchmark for Free-Form Text Generation.” In <i>Proceedings of the 60th Annual Meeting of the Association for Computational Linguistics (Volume 1: Long Papers)</i>, 6723–37. Dublin, Ireland: Association for Computational Linguistics. doi:<a href="https://doi.org/10.18653/v1/2022.acl-long.464">10.18653/v1/2022.acl-long.464</a>.</div>
  <div class="csl-entry"><a id="citeproc_bib_item_7"></a>Verma, Siddharth, Justin Fu, Mengjiao Yang, and Sergey Levine. 2022. “CHAI: A CHatbot AI for Task-Oriented Dialogue with Offline Reinforcement Learning.” arXiv. <a href="http://arxiv.org/abs/2204.08426">http://arxiv.org/abs/2204.08426</a>.</div>
  <div class="csl-entry"><a id="citeproc_bib_item_8"></a>Wei, Jason, Xuezhi Wang, Dale Schuurmans, Maarten Bosma, Brian Ichter, Fei Xia, Ed H Chi, Quoc V Le, and Denny Zhou. 2022. “Chain-of-Thought Prompting Elicits Reasoning in Large Language Models.”</div>
  <div class="csl-entry"><a id="citeproc_bib_item_9"></a>Yao, Shunyu, Dian Yu, Jeffrey Zhao, Izhak Shafran, Thomas L. Griffiths, Yuan Cao, and Karthik Narasimhan. 2023. “Tree of Thoughts: Deliberate Problem Solving with Large Language Models.” arXiv. <a href="http://arxiv.org/abs/2305.10601">http://arxiv.org/abs/2305.10601</a>.</div>
  <div class="csl-entry"><a id="citeproc_bib_item_10"></a>Yao, Shunyu, Jeffrey Zhao, Dian Yu, Nan Du, Izhak Shafran, Karthik Narasimhan, and Yuan Cao. 2023. “ReAct: Synergizing Reasoning and Acting in Language Models.” arXiv. <a href="http://arxiv.org/abs/2210.03629">http://arxiv.org/abs/2210.03629</a>.</div>
</div>
