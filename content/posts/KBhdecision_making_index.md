+++
title = "Decision Making Index"
author = ["Houjun Liu"]
tags = ["index"]
draft = false
+++

Lecture notes taking during CS238, decision making. Stanford Intelligence Systems Laboratory (SISL: planning and validation of intelligent systems).


## Staff {#staff}

People's office hours: <https://aa228.stanford.edu/officehours/>

Wednesdays, 5:30, Roble Field: ultimate Frisbee


### Harrison {#harrison}

Wed 1PM. AI Safety.


### Arec {#arec}

Automotive driving, etc.


### Elysia {#elysia}

CS Coderm


## Course Logistics {#course-logistics}

"We will be working Taylor swift lyrics into every lecture"


### Probability {#probability}

Will be reviewed in problem session on Wednesday.


### High Level Programming {#high-level-programming}

You need to be able to code. 2 major programming assignments. We care most about the **algorithms** about programming.


### Read the book {#read-the-book}

Read the book!


### Assignments {#assignments}

-   Due 5PM on Fridays
-   0% penalty for 72 hours --- ****this does not apply for quizzes****


## Big Ideas {#big-ideas}


### Themes {#themes}

1.  There's a principled mathematical framework for defining rational behavior
2.  There are computational techniques that could lead to better, and perhaps counter-intuitive decisions
3.  Successful application depends on your choice of representation and approximation
    -   you typically can't solve mathematical models **exactly**
    -   so, we have to rely on good models of approximations
4.  The same computational approaches can be applied to different application domains
    -   the same set of abstractions can be carried through life
    -   send Mykel a note about how these topics about where this stuff is applied

These algorithms drive **high quality** decisions on a **tight timeline**. You can't fuck up: people die.


### Contents {#contents}

-   Fundamental understanding of mathematical models and solution methods---ungraded book exercises
    -   Three quizzes: one question per chapter
        1.  chapters 2, 3, 5
-   Implement and extend key algorithms for learning and decision making
-   Identify an application of the theory of this course and formulate it mathematically (proposal)
    -   what are the i/o
    -   what are the sensors measurements
    -   what are the decisions to be made
-   [one other thing]


## Course Outline {#course-outline}


### 1-shot: Probabilistic Reasoning {#1-shot-probabilistic-reasoning}

-   models of distributions over many variables
-   using distributions to make inferences
-   [utility theory]({{< relref "KBhutility_theory.md" >}})


### n-shot: Sequential Problems {#n-shot-sequential-problems}

-   we now 1-shot [decision network]({{< relref "KBhdecision_networks.md" >}})s into making a series of decisions
    -   **assume**: model of environment is known (no [Model Uncertainty]({{< relref "KBhmodel_uncertainty.md" >}})), and environment is fully observable (no [State Uncertainty]({{< relref "KBhstate_uncertainty.md" >}}))
    -   this introduces a [Markov Decision Process]({{< relref "KBhmarkov_decision_process.md" >}}) (MDP)
-   approximation solutions for observing the environment both online and offline


### Model Uncertainty {#model-uncertainty}

-   deal with situations where we don't know what the best action is at any given step
-   i.e.: future rewards, etc.
-   introduce [reinforcement learning]({{< relref "KBhreinforcement_learning.md" >}}) and its challenges
    1.  Rewards may be received long after important decisions
    2.  Agents must generalized from limited exploration experience


### State Uncertainty {#state-uncertainty}

-   deal with situations where we don't know what is actually happening: we only have a **probabilistic** state
-   introduce [Partially Observable Markov Decision Process]({{< relref "KBhpartially_observable_markov_decision_process.md" >}})
    1.  keep a distribution of believes
    2.  update the distribution of believes
    3.  make decisions based the distribution


### Multiagent Systems {#multiagent-systems}

-   challenges of [Interaction Uncertainty]({{< relref "KBhinteraction_uncertainty.md" >}})
-   building up interaction complexity
    1.  [simple game]({{< relref "KBhsimple_game.md" >}})s: many [agent]({{< relref "KBhagent.md" >}})s, each with individual rewards, acting to make a single joint action
    2.  [markov game]({{< relref "KBhmarkov_game.md" >}})s: many agents, many states, multiple outcomes in a stochastic environment; [Interaction Uncertainty]({{< relref "KBhinteraction_uncertainty.md" >}}) arises out of unknowns about what other agents will do
    3.  [partially observable markov game]({{< relref "KBhpartially_observable_markov_game.md" >}}): [markov game]({{< relref "KBhmarkov_game.md" >}})s with [State Uncertainty]({{< relref "KBhstate_uncertainty.md" >}})
    4.  decentralized [partially observable markov game]({{< relref "KBhpartially_observable_markov_game.md" >}}): [POMG]({{< relref "KBhpartially_observable_markov_game.md" >}})s with shared rewards between [agent]({{< relref "KBhagent.md" >}})s instead of individual rewards


## Lectures {#lectures}

-   [SU-CS238 SEP262023]({{< relref "KBhsu_cs238_sep262023.md" >}})
-   [SU-CS238 SEP272023]({{< relref "KBhsu_cs238_sep272023.md" >}})
-   [SU-CS238 OCT032023]({{< relref "KBhsu_cs238_oct032023.md" >}})
-   [SU-CS238 OCT052023]({{< relref "KBhsu_cs238_oct052023.md" >}})
-   [SU-CS238 OCT102023]({{< relref "KBhsu_cs238_oct102023.md" >}})
-   [SU-CS238 OCT122023]({{< relref "KBhsu_cs238_oct122023.md" >}})


## Worksheets {#worksheets}

-   [SU-CS238 Q0Q3]({{< relref "KBhsu_cs238_q0q3.md" >}})
