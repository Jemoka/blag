+++
title = "online planning"
author = ["Houjun Liu"]
draft = false
+++

For elements with large possible future state space, we can't just iterate over all states to get a [value function]({{< relref "KBhaction_value_function.md" >}}) for every state, and **THEN** go about using the [greedy policy]({{< relref "KBhaction_value_function.md#value-function-policy" >}}) to perform actions.

Therefore, we employ a technique called **receding horizon planning**: planning from the current state upwards to a maximum horizon \\(d\\), figure out what the best action would be given that information for only this state, and then replan.

Here are the main methods of doing this:

-   [Rollout with Lookahead]({{< relref "KBhrollout_with_lookahead.md" >}}): for each possible next action, sample a transition-weighted random trajectory, use whatever discounted future reward you got for that as your utility
-   [Forward Search]({{< relref "KBhforward_search.md" >}}): for each possible next action, search through each possible next action until you hit the depth required, calculate the instantaneous reward at that point, and backup until you have recorded the sequence of actions that maybe best, and then return the first action in that sequence
-   [Branch and Bound]({{< relref "KBhbranch_and_bound.md" >}})


## monte-carlo tree search {#monte-carlo-tree-search}

-   \\(\mathcal{P}\\) problem (states, transitions, etc.)
-   \\(N\\) visit counts
-   \\(Q\\) a q-table: [action-value]({{< relref "KBhaction_value_function.md" >}}) estimates
-   \\(d\\) depth (how many next states to look into)---more is more accurate but slower
-   \\(U\\) [value function estimate]({{< relref "KBhaction_value_function.md#value-function--kbhaction-value-function-dot-md" >}}); usually a [Rollout Policy]({{< relref "KBhrollout_with_lookahead.md#rollout-policy" >}}), estimate at some depth \\(d\\)
-   \\(c\\) exploration constant

After simulation; we find the best action for our current state from our q-table.

Simulation algorithm:

-   If we have reached the end of depth, simply return the [utility]({{< relref "KBhutility_theory.md" >}}) from the [value function]({{< relref "KBhaction_value_function.md#value-function--kbhaction-value-function-dot-md" >}}) estimate
-   For some pair of state, action that we just got, if we haven't seen it, we just return the [value function]({{< relref "KBhaction_value_function.md#value-function--kbhaction-value-function-dot-md" >}}) estimate
-   get a promising action from [monte-carlo exploration](#monte-carlo-exploration)
-   sample a next state and reward based on the action you gotten via a [generative model](#generative-model)
-   simulate
-   add to the (state, action) count
-   update the q table at (state, action): Q[s,a] += (q-


### monte-carlo exploration {#monte-carlo-exploration}

\begin{equation}
\max\_{a} Q(s,a) + c \sqrt{ \frac{\log \sum\_{a}N(s,a)}{N(s,a)}}
\end{equation}

where \\(c\\) is the exploration factor, and \\(N\\) is the next steps.

We want to encourage the exploration of things we haven't tried as much. Note that as \\(N(s,a)\\) is small, the right term is larger. So, if its also not too bad in terms of \\(Q\\), we will choose it.

If \\(N(s,a)\\) is zero, you return the action. You always want to try something at least once.


## generative model {#generative-model}

we perform a random sample of possible next state (weighted by the action you took, meaning an instantiation of \\(s' \sim T(\cdot | s,a)\\)) and reward \\(R(s,a)\\) from current state


## open-loop planning vs close-loop planning {#open-loop-planning-vs-close-loop-planning}


### open loop planning ("model predictive control") {#open-loop-planning--model-predictive-control}

Maximize: \\(U(a\_1, ..., a\_{n})\\)

We want to maximize
