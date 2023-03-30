+++
title = "AML: It Takes Two"
author = ["Houjun Liu"]
draft = false
+++

Hello everyone! It's April, which means we are ready again for a new unit. Let's dive in.

You know what's better than one neural network? TWO!!! Multi-modal approaches---making two neural networks interact for a certain result---dominate many of the current edge of neural network research. In this unit, we are going to introduce one such approach, **Generative Adversarial Networks** (**GAN**), but leave you with some food for thought for other possibilities for what training multiple networks together can do.

Be aware that this unit will begin our more theory-focused discussions, and will leave more of the implementation up to your own explorations or a later fuller example. If you don't understand the math or the theory, please do flag us down in class or out to get things clarified.


## Motivation {#motivation}

Although we will provide motivations for the architecture of a **GAN** in a bit, let's first provide a problem to ground ourselves.

Say we want to build a neural network to generate pictures of mountain goats. How would you do that?

You can't build a supervised model exactly: what's the input, and what are the labels? No clear answer. Even if you have labels, you'd have infinitely many possible such mountain goats; how do you generate labels for all of those?

To help us in solving this problem, let us make a few related claims that may seem unmotivated for now:

1.  It is easy to find images of mountain goats `[citation needed]`
2.  It is eas(ier) to train a model to classify if an image is a mountain goat or not
3.  It is easy to generate random noise
4.  We want more pictures of mountain goats because they are cool

It maybe unclear how `1-3` help us solve the mountain-goat generation problem; to explain why they are all crucial, we have to first understand some hand wavy game theory.


## (Better) Motivation {#better--motivation}

It's storytime!

Al Capone and Eliot Ness are playing a game. Al is trying to create counterfeit Franklins, and Eliot is trying to catch them out of circulation.

Al first uses his HP Inkjet printer to print the currency. Eliot quickly wises up and uses a microscope to observe whether or not a piece of money in question is printed by ink or via color pigmented paper. Not wishing to foil his plan, Al asks his lab to develop new color pigmentation technology---just like the US currency does!

Yet, Eliot outsmarts Al again---he uses a spectrophotometer to analyze whether or not the money in question is made using paper or on cotton like the actual US currency. Seeing this, an angry Al purchases a tonne of cotton and starts printing his counterfeits on cotton.

Wanting to satisfy Jack's uselessly long analogy, Doctor Strange comes and freezes time for everyone except Al and Eliot (and their respective teams). As the true US currency technology remains the same, Eliot and Al continue to play this game: both developing better technologies to make or catch counterfeits.

After a billion years, Doctor Strange gets bored and looked into his frozen world. What does he see?

Al Capone built an exact replica of the US Mint.

Why? Each time Al gets caught out by Eliot, Al learns one more aspect of how his counterfeit differs from actual US currency. In effect, he's also learning one new detail of how the US currency is made. Therefore, if he keeps patching these tiny differences that Eliot helpfully pointed out for him for the span of a billion years, what Al will be producing will eventually be indistinguishable from US dollars as Eliot will be out of things to point out!

At this point, the Capone-Ness system has reached what we call **Nash equilibrium**: neither Eliot nor Al have a better move to make---Eliot no longer has anything more he can possibly do to catch counterfeits as Al's money is identical to US currency, and Al can no longer change his formula for money-making as any deviation will create another factor Eliot can latch onto.


## GANs {#gans}

A **Generative Adversarial Network** (**GAN**) is a multi-modal generation model.

It is made out of two interacting neural networks:

-   **generator** \\(G(x)\\): Al Capone
-   **discriminator** \\(D(x)\\): Eliot Ness

Specifically, the **generator** is an unsupervised model trained on the task of generating the targets ("images of mountain goats") from random noise, while the **discriminator** is a **self-supervised model** trained on the task of classifying whether or not something is actually the target ("actual images of mountain goats") or the output of the generator.

The two models converge in tandem, in a similar fashion to the story described above.


### Discriminator \\(D(x)\\) {#discriminator-d--x}

The **discriminator** \\(D(x)\\) is perhaps the more easily understandable model out of the two. It is a **self-supervised model** designed with the task of discriminating whether or not a particular input came from the actual world ("goat images") or was the output of the **generator**.

Specifically, the **discriminator** is a neural network with any middle layers you'd like that takes the output of the **generator** _or_ real images as input, and produces a single `sigmoid` activated feature (between 0-1) where \\(0\\) represents "definitely produced by **generator**" and \\(1\\) represents "definitely real world."


### Generator \\(G(x)\\) {#generator-g--x}

The **generator** \\(G(x)\\) is a model that takes a _random tensor_ as input and attempts to produce a generated sample ("a picture of a goat"). As with the descriminator, it can have any middle layers you'd like but has to produce a tensor with the same shape and activation of an actual sample. For instance, if you are trying to produce images, the output of your **generator** has to be of shape \\((channels, x, y)\\) activated with `sigmoid` for brightness; if you are trying to produce single scalars, then the **generator** has to produce only value, etc.

It is perhaps very mystifying how we would ever build a magical box that takes a random tensor and turn it into a pretend image; looking at the loss functions (i.e. training objectives) of these two networks may perhaps help clarify this.


### Loss Functions {#loss-functions}

Before we begin, I want to quickly reiterate something which will be crucial to your mental framework of the loss functions: **THEY ARE NOT METRICS**. The _value_ of the loss functions---especially these ones---are now completely devoid of physical meaning; instead, the _trend_ of the loss functions ("value goes down means model is doing better") is what matters.

We are introducing the simplest form of **GAN** loss functions by [Goodfellow, et al](https://arxiv.org/abs/1406.2661) called "non-saturating loss." There are better ones, but these ones are mathematically elegant and works most of the time---and are the "base case" loss functions which other models improve on.


#### Descriminator Loss {#descriminator-loss}

\begin{equation}
L\_{d} (\bold{x}\_{i}, \bold{z}\_{i}) = -\log D(\bold{x}\_{i}) - \log  (1- D(G(\bold{z}\_{i})))
\end{equation}

where, \\(\bold{x}\_{i}\\) is a tensor representing a real sample (for instance, again, an actual grid of pixels for a mountain goat image), and \\(\bold{z}\_{i}\\) is a tensor containing random noise.

Woof. This is quite a scary loss function; let's break it up into pieces.

-   \\(-\log D(\bold{x}\_{i})\\): \\(\bold{x}\_{i}\\) is a real sample, so we expect \\(D\\) to produce \\(1\\). Any value below \\(1\\) (i.e. the **descriminator** thinking a real image is generated) will produce negative values of increasingly larger magnitude as \\(D(\bold{x}\_{i})\\) approaches \\(0\\). If the descriminator produces \\(1\\) correctly, \\(\log 1 = 0\\) and we indeed have converged.
-   \\(-\log (1- D(G(\bold{z}\_{i})))\\): on the flip side, we expect the generator to consider the output of the generator (i.e. \\(D(G(\bold{z}\_{i}))\\)) to be generated and produce \\(0\\). Therefore, we expect the same scheme as before but flipped (\\(1-D(G(\bold{z}\_{i})\\))---if \\(D(G(\bold{z}))\\) produces \\(1\\) ("the descriminator is fooled"), \\(1-D(G(\bold{z}))\\) will produce \\(0\\) and the loss will be very high. Vise versa: if \\(D(G(\bold{z}))\\) produces \\(0\\) ("the descriminator picked out the fake"), the loss will be \\(0\\).

    Adding the two values encourages our descriminator to both classify real samples as real \\(1\\), and generated samples as fake \\(0\\).


#### Generator Loss {#generator-loss}

\begin{equation}
L\_{g}(\bold{z}\_{i}) = -\log (D(G(\bold{z}\_{i})))
\end{equation}

The sharp-eyed among you may realize that this is just the right term from the above expression without the \\(1-\\) negation. Indeed, the training target for the "generator" is very simple: "did I fool the descriminator"?


## The Training Loop {#the-training-loop}

Loss functions in place, we are almost ready to make the model.
