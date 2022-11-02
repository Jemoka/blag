+++
title = "Non-Linear Systems"
author = ["Houjun Liu"]
draft = false
+++

"Chaotic Dynamics" Because the word is sadly nonlinear.


## General Dynamical System {#general-dynamical-system}

Here's a very general nonlinear system:

\begin{equation}
\dv t \vec{x} = F(\vec{x}, t)
\end{equation}


## aaaaa {#aaaaa}

So Let us set up a second-degree system:

\begin{align}
\dv{x}{t} = F(x,y) \\\\
\dv{y}{t} = G(x,y)
\end{align}

we want to solve for critical points---

\begin{equation}
F(x\*,y\*) = G(x\*, y\*) = 0
\end{equation}

where, \\((x\*, y\*)\\) is the critical point for functions \\(x,y\\).

We then create:

\begin{equation}
\dv{y}{x} = \frac{y'}{xy} = \frac{G(x,y)}{F(x,y)}
\end{equation}