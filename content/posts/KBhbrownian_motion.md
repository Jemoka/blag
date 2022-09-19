+++
title = "Brownian Motion"
author = ["Houjun Liu"]
draft = false
+++

[Brownian Motion]({{< relref "KBhbrownian_motion.md" >}}) is the pattern for measuring the convergence of [random walk]({{< relref "KBhrandom_walk.md" >}}) through continuous timing.


## discrete random walk {#discrete-random-walk}

[discrete random walk](#discrete-random-walk) is a tool used to construct [Brownian Motion]({{< relref "KBhbrownian_motion.md" >}}). It is a [random walk]({{< relref "KBhrandom_walk.md" >}}) which only takes on two discrete values at any given time: \\(\Delta\\) and its [additive inverse]({{< relref "KBhinverses.md" >}}) \\(-\Delta\\). These two cases take place at probabilities \\(\pi\\) and \\(1-\pi\\).

Therefore, the expected return over each time \\(k\\) is:

\begin{equation}
\epsilon\_{k} = \begin{cases}
\Delta, p(\pi) \\\\
-\Delta, p(1-\pi)
\end{cases}
\end{equation}

(that, at any given time, the [expectation]({{< relref "KBhexpectation.md" >}}) of return is either---with probability $&pi;$---\\(\Delta\\), or--with probability $1-&pi;$---\\(-\Delta\\).

This makes \\(\epsilon\_{k}\\) independently and identically distributed. The price, then, is formed by:

\begin{equation}
p\_{k} = p\_{k-1}+\epsilon\_{k}
\end{equation}

and therefore the price follows a [random walk]({{< relref "KBhrandom_walk.md" >}}).

Such a [discrete random walk](#discrete-random-walk) can look like this:

{{< figure src="/ox-hugo/2022-09-19_10-53-11_screenshot.png" >}}

We can split this time from \\([0,T]\\) into \\(n\\) pieces; making each segment with length \\(h=\frac{T}{n}\\). Then, we can parcel out:

\begin{equation}
p\_{n}(t) = p\_{[\frac{t}{h}]} = p\_{[\frac{nt}{T}]}
\end{equation}

Descretized at integer intervals.

At this current, discrete moments have expected value \\(E[p\_{n}(T)] = n(\pi -(1-\pi)\Delta\\) and variance \\(Var[p\_{n}(T)]=4n\pi (1-\pi)\Delta^{2}\\). #why

Now, if we want to have a [continuous]({{< relref "KBhuniqueness_and_existance.md#continuity" >}}) version of the descretized interval above, we will maintain the finiteness of \\(p\_{n}(T)\\) but take \\(n\\) to \\(\infty\\). To get a continuous [random walk]({{< relref "KBhrandom_walk.md" >}}) needed for [Brownian Motion]({{< relref "KBhbrownian_motion.md" >}}), we adjust \\(\Delta\\), \\(\pi\\), and \\(1-\pi\\) such that the expected value and variance tends towards the normal; that is, we hope to see that:

\begin{equation}
\begin{cases}
n(\pi -(1-\pi))\Delta \to \mu T \\\\
4n\pi (1-\pi )\Delta ^{2} \to \sigma^{2} T \\\\
\end{cases}
\end{equation}