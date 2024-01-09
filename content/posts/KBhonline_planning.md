+++
title = "online planning"
author = ["Houjun Liu"]
draft = false
+++

For elements with large possible future state space, we can't just iterate over all states to get a for every state, and **THEN** go about using the to perform actions.

Therefore, we employ a technique called **receding horizon planning**: planning from the current state upwards to a maximum horizon \\(d\\), figure out what the best **SINGLE action** would be given that information for only this state, and then replan.

Here are the main methods of doing this:

-   [Rollout with Lookahead]({{< relref "KBhrollout_with_lookahead.md" >}}): for each possible next action, sample a transition-weighted random trajectory using some policy, use whatever discounted future reward you got for that as your utility
-   : for each possible next action, search through each possible next action until you hit the depth required, calculate the instantaneous reward at that point, and backup until you have recorded the sequence of actions that maybe best, and then return the first action in that sequence
-   : same algorithm as , but you bound your search based on the theoretical upper-bound of the q-value
-   : same core algorithm as , but instead of calculating a based on the , you sample a set of possible next states and average their future utilities
-   : use function to come up with a bunch of possible actions to try, and try them with discounts as you try them


## Additional Information {#additional-information}


### generative model {#generative-model}

we perform a random sample of possible next state (weighted by the action you took, meaning an instantiation of \\(s' \sim T(\cdot | s,a)\\)) and reward \\(R(s,a)\\) from current state


### open-loop planning vs close-loop planning {#open-loop-planning-vs-close-loop-planning}


#### open loop planning {#open-loop-planning}

Instead of doing all the methods above, which all requires state information of the future, [open loop planning](#open-loop-planning) uses an exogenously chosen sequence of actions and tries to simply:

Maximize: \\(U(a\_1, ..., a\_{n})\\)

where the choice of actions doesn't change regardless of eventual state is.

For high dimensional systems, where is hard to do closed loop systems, this will work better.
