+++
title = "Hidden Markov Model"
author = ["Houjun Liu"]
draft = false
+++

1.  draw an initial state \\(q\_1\\) from the initial state distribution \\(\pi\\)
2.  For each state \\(q\_{i}\\)...
    1.  Drew observe something \\(o\_{t}\\) according to the action distribution of state \\(q\_{i}\\)
    2.  Use transition probability \\(a\_{i,j}\\) to draw a next state \\(q\_{j}\\)

Isolated recognition: train a family of [HMM]({{< relref "KBhhidden_markov_model.md" >}})s, one for each word or something. Then, given new data, perform scoring of the [HMM]({{< relref "KBhhidden_markov_model.md" >}}) onto the features.


## components of [HMM]({{< relref "KBhhidden_markov_model.md" >}})s {#components-of-hmm--kbhhidden-markov-model-dot-md--s}


### scoring {#scoring}

Given an observation \\(o\_1, ..., o\_{T}\\) and a model, we compute $P(O | &lambda;)$---the probability of a sequence given a model \\(\lambda\\)

"forward and backward algorithm"


### decoding {#decoding}

Given observations, find the state sequence \\(q1, ..., q\_{T}\\) most likely to have generated


### training {#training}

Given observations \\(O\\), find the model parameters \\(\lambda\\) that maximize \\(P(O|\lambda)\\), the [Maximum Likelihood Parameter Learning]({{< relref "KBhmaximum_likelihood_parameter_learning.md" >}}).


## continuous-density [HMM]({{< relref "KBhhidden_markov_model.md" >}}) {#continuous-density-hmm--kbhhidden-markov-model-dot-md}

There are some [HMM]({{< relref "KBhhidden_markov_model.md" >}})s that blend the discrete timestamps into [Gaussian mixture model]({{< relref "KBhprobability_distributions.md#gaussian-mixture-model" >}})s.


## continuous speech {#continuous-speech}

Scoring becomes hard because you have to go through and calculate every freaking word. THerefore:

\begin{equation}
P(W|O) = \frac{P(O|W) P(W)}{P(O)}
\end{equation}

Therefore, we really desire:

\begin{equation}
\arg\max\_{w} P(O|W) P(W)
\end{equation}
