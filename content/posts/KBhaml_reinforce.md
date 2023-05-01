+++
title = "AML: REINFORCE(ment learning)"
author = ["Houjun Liu"]
draft = false
+++

Woof. As I begin to write this I should add that **this unit is going to be conceptually dense**. Though we are teaching one particular algorithm (incidentally, named, REINFORCE), the world of reinforcement learning is build by one, if not many, college level classes.

So if anything, I would focus on getting the conceptual flavor of how these problems are formulated and discuses. If you can be along for the mathematical and algorithmic journey, then even better --- but by no means required or expected... There's still lots for all of us to learn together.

Speaking of college level classes, I _loved_ the detailed and accessible overview of Reinforcement Learning methods by Professors Charles Isbell and Michael Littlman from Georgia Tech CoC. If you find yourself gravitating towards the topic of this unit, go check them out: <https://omscs.gatech.edu/cs-7642-reinforcement-learning-course-videos>

Ok. Let's dive in.


## Motivation {#motivation}

We are used to a clear, **differentiable** loss function. One particular exercise in class we do a lot is to shout out a problem, and think about its loss function:

-   "classifying Pokemon!" ... "cross entropy!"
-   "generating stock price!" ... "MSE!"
-   "making pictures of rice!" ... "GAN non-saturating loss!"

and so on. Regardless of the classification/regression difference, you will note that these functions are all of the shape:

\begin{align}
&f(\hat{y}, y) = \text{single float value}
\end{align}

Meaning, it takes **two vectors**---the _output_ ("prediction", \\(\hat{y}\\)) of the network, and the _desired output_ ("target", \\(y\\)) in your training data, and produces (sometimes with much mathematical gymnastics) a single scalar value representing which we try to optimize to be lower.

Note that, regardless of **supervised learning** (like Pokemon classification; we have input, desired targets, and actual output) or **unsupervised learning** (like GAN rice generation; we have only the desired targets and actual output), we _have the desired targets_ in hand. We _know_ what the model is supposed to do (i.e. have many examples of correct behavior), and are just teaching the model to do so one way or other.

But what if.... we _don't_ know the correct behavior of the model? Can you brainstorm some tasks that would very well might want to automate using ML, but can't provide precise labels for the desired action?

...

Take, for instance, the task of [teaching this poor stick figure how to stand up](https://gymnasium.farama.org/environments/mujoco/humanoid_standup/):

{{< figure src="/ox-hugo/2023-04-30_12-37-54_screenshot.png" caption="<span class=\"figure-number\">Figure 1: </span>aw so sad" >}}

you are given a list of forces currently hitting the figure, and you are to produce a list of forces the figure's limbs should produce.

Of course you can't know precisely the labels at every given moment: there are no "best" or, arguably, even a "correct" strategy for standing the figure up. There's no labels which you can use to even begin to approach this task!

What to do?

**In come Reinforcement Learning (RL)**


## RL, in Brief {#rl-in-brief}

Ok, this is where the math will begin. I encourage you to take a piece of paper and start writing down each symbol we define together, and refer to that piece of paper copiously to understand the expressions.

If you want to learn this more, the conceptual basis we are working with is called **policy gradient**, specifically the **REINFORCE** algorithm. This is _not even close_ to being the only way to approach the Reinforcement Learning task; but its one fairly interesting and successful approach.


### The Environment: State, Action, and Policy {#the-environment-state-action-and-policy}

Three variables underlie the basics of **Reinforcement Learning**:

-   **state** \\(s\_{t}\\): the "situation" of the **environment**, what can be "observed"; for our example above, this looks like the forces on each limb of our humanoid.
-   **action** \\(a\\): a certain perturbation one can do to the **environment**; for our example, this looks like moving ("translating"/"applying force on") one or many limbs.
-   **policy** \\(\pi\\): the **policy** is a function which takes the **state** as input, and produces a probability distribution (think "softmax") over all the **actions** one could choose. We will talk extensively about this shortly.

---

IMPORTANT NOTE: policy is as function \\(\pi(s\_{t})\\), literally a _function named pi_. It has nothing to do with the ratio between the radius and circumference of a circle. Its _just called pi..._ Unfortunately, we are working to stick to the language used by current literature, but sometimes their symbol choice is rather deranged.

---


### Reward {#reward}

In lieu of a loss function, **Reinforcement Learning** is a class of models that learn from a numerical signal called **reward**. The reward function typically looks like this:

\begin{equation}
r\_{t}(s\_{t},a\_{t}) = \text{single float value}
\end{equation}

Instead of calculating the difference between the desired and actual output of the model, the **reward** signal scores _how good taking a certain action is_ in an environment. It takes two vectors as input: the **state** and an **action** on the state, to produce a certain score.

Unlike what we are used to with the loss, this **reward** value is _not_ differentiable w.r.t. the parameters of the network! The action is a _sample_ from the distribution; so this score can be generated however you'd like. Furthermore, unlike what we are used to with **loss**, a **higher** **reward** value means a better action.

For our example, for instance, this could mean if we raised the agent's head higher at that step.


### Cumulative Discounted Reward {#cumulative-discounted-reward}


### Policy Gradient Theorem {#policy-gradient-theorem}


### Monte-Carlo and REINFORCE {#monte-carlo-and-reinforce}
