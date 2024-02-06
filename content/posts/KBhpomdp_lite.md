+++
title = "POMDP-lite"
author = ["Houjun Liu"]
draft = false
+++

What if our initial unobservable state never change or deterministically changing? For instance, say, for localization.

(note, like a [MOMDP]({{< relref "KBhmomdp.md" >}}), you can tack on top any amount)


## POMDP-lite {#pomdp-lite}

-   \\(X\\) fully observable states
-   \\(\theta\\) hidden parameter: finite amount of values \\(\theta\_{1 \dots N}\\)
-   where \\(S = X \times \theta\\)

we then assume conditional independence between \\(x\\) and \\(\theta\\). So: \\(T = P(x'|\theta, x, a)\\), where \\(P(\theta'|\theta,x,a) = 1\\) ("our hidden parameter is known or deterministically changing")


## Solving {#solving}

****Main Idea****: if that's the case, then we can split our models into a set of [MDP]({{< relref "KBhmarkov_decision_process.md" >}})s. Because \\(\theta\_{j}\\) change deterministically, we can have a MDP solved **ONLINE** over \\(X\\) and \\(T\\) for each possible initial \\(\theta\\). Then, you just take the believe over \\(\theta\\) and sample over the MDPs based on that belief.

-   information gain
-   exploration reward bonus, which encourages exploration (this helps coordinate)
-   maintain a value \\(\xi(b,x,a)\\) which is the number of times b,x,a is visited---if it exceeds a number of times, clip reward bonus


### Algorithm {#algorithm}

{{< figure src="/ox-hugo/2024-02-06_09-54-45_screenshot.png" >}}
