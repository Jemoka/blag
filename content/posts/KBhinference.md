+++
title = "inference"
author = ["Houjun Liu"]
draft = false
+++

[inference]({{< relref "KBhinference.md" >}}) is the act of determining a distribution of unobserved variables given observed variables:

\begin{equation}
P(X|Y)
\end{equation}

where \\(Y\\) is observed, and we want to know how likely \\(X\\) would therefore be.

[Bayes rule]({{< relref "KBhbayes_theorem.md" >}}) allows us to perform inference if needed.


## Example {#example}

{{< figure src="/ox-hugo/2023-10-03_09-52-18_screenshot.png" >}}

Suppose we'd like to know \\(P(b^{1} | d^{1}, c^{1})\\), where \\(b^{1}\\) is considered a query variable, and \\(c^{1}\\) is considered evidence varibales. The definition of the [conditional probability]({{< relref "KBhprobability.md#conditional-probability" >}}) gives us:

\begin{equation}
p(b^{1} | d^{1}, c^{1}) = \frac{p(b^{1}, d^{1}, c^{1})}{p(d^{1}, c^{1})}
\end{equation}

to compute \\(p(b^{1}, d^{1}, c^{1})\\), we would have to sum over \\(e,s\\) which are not involved upon \\(p(b ... c)\\).

{{< figure src="/ox-hugo/2023-10-03_09-59-24_screenshot.png" >}}


## sum-product elimination {#sum-product-elimination}

You will note the summation in the example above has a lot of interlocking for loops. You can "factor them out" via the [sum-product elimination](#sum-product-elimination) algorithm.

Suppose you are interested in:

\begin{equation}
P(b | d', c')
\end{equation}


### Step 1: write down factors {#step-1-write-down-factors}

Write down all [factor]({{< relref "KBhfactor.md" >}})s associated with this computation:

\begin{equation}
\phi\_{1}(B), \phi\_{2}(S), \phi\_{3}(E,B,S), \phi\_{4}(D,E), \phi\_{5}(C,E)
\end{equation}

we have evidence at two variables: \\(D, C\\). Therefore, \\(\phi\_{4}\\) and \\(\phi\_{5}\\) can be replaced by the [factor conditioning]({{< relref "KBhfactor.md#factor-conditioning" >}}) as we observed \\(d, c\\), so we no longer need \\(d, c\\) as input because we know them:

now we have, to replace \\(\phi\_{4}, \phi\_{5}\\):

\begin{equation}
\phi\_{6}(E), \phi\_{7}(E)
\end{equation}

We then choose an ordering of the [hidden variables]({{< relref "KBhinference.md" >}}) and apply a [factor product]({{< relref "KBhfactor.md#factor-product" >}}) using the [law of total probability]({{< relref "KBhprobability.md#law-of-total-probability" >}}) to get rid of them:

\begin{equation}
\phi\_{8}(B,S) = \sum\_{E=e} \phi\_{3}(E,B,S) \phi\_{6}(e) \phi\_{7}(e)
\end{equation}

\begin{equation}
\phi\_{9}(B) = \sum\_{S=s} \phi\_{2}(s) \cdot  \phi\_{8}(B,S)
\end{equation}

We now only have two [factor]({{< relref "KBhfactor.md" >}})s left: \\(\phi\_{1}(B)\phi\_{9}(B)\\). We finally apply [factor product]({{< relref "KBhfactor.md#factor-product" >}}) again:

\begin{equation}
\phi\_{10} (B) = \phi\_{9}(B) \cdot \phi\_{1}(B)
\end{equation}
