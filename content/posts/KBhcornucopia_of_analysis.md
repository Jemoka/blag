+++
title = "cornucopia of analysis"
author = ["Houjun Liu"]
draft = false
+++

## Pythagorean Theorem {#pythagorean-theorem}

\begin{equation}
\\|u + v\\|^{2} = \\|u \\|^{2} + \\|v\\|^{2}
\end{equation}

if \\(v\\) and \\(u\\) are orthogonal vectors.

{{< figure src="/ox-hugo/2023-04-08_22-53-17_screenshot.png" >}}


## One Orthogonal Decomposition {#one-orthogonal-decomposition}

Suppose we have a vector \\(u\\), and another \\(v\\), both belonging to \\(V\\). We can decompose \\(u\\) as a sum of two vectors given a choice of \\(v\\): one a scalar multiple of \\(v\\), and another orthogonal to \\(v\\).

That is: we can write \\(u = cv + w\\), where \\(c \in \mathbb{F}\\) and \\(w \in V\\), such that \\(\langle w,v \rangle = 0\\).

Here's how:

\begin{equation}
c = \frac{\langle u,v \rangle}{\\|v\\|^{2}}
\end{equation}

and

\begin{equation}
w = (u - cv)
\end{equation}

We can show \\(\langle w,v \rangle=0\\) as follows:

\begin{align}
\langle (u-cv), v \rangle &= \langle u,v \rangle - \langle cv, v \rangle  \\\\
&= \langle u,v \rangle - c \langle v,v \rangle \\\\
&= \langle u,v \rangle - \frac{\langle u,v \rangle}{\\|v\\|^{2}} \langle v,v \rangle  \\\\
&= \langle u,v \rangle - \frac{\langle u,v \rangle}{\\|v\\|^{2}} \\|v\\|^{2}  \\\\
&= 0
\end{align}
