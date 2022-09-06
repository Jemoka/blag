+++
title = "Simple Differential Equations"
author = ["Houjun Liu"]
draft = false
+++

Here is the most simple [Differential Equation]({{< relref "KBhdiffeq_intro.md" >}}) one could imagine:

\begin{equation}
\dv{x}{t} = f(t,x)
\end{equation}

Or, perhaps, we have a second order [differential equation]({{< relref "KBhdiffeq_intro.md" >}}) which is the same thing but in the second degree:

\begin{equation}
\dv[2]{x}{t} = f\qty(t,x,\dv{x}{t})
\end{equation}

Then in which case, we have that the first most simple type of [differential equation]({{< relref "KBhdiffeq_intro.md" >}}) to be as follows:

\begin{equation}
\dv{x}{t} = x(t)
\end{equation}

where, the function \\(f(t,x)=x(t)\\).

\begin{align}
& \dv{x}{t} = x(t) \\\\
\Rightarrow\ & \frac{1}{x(t)}\dd{x} = \dd{t}
\end{align}

At this point, you may ask yourself, why not construct it such that we have \\(\dd{x} = x(t)\dd{t}\\)? Well, its because our \\(x\\) is a variable in \\(t\\), so if we constructed it that way we'd have to integrate a function \\(\dd{t}\\) with usub and the reverse chain rule, etc. etc. If we are instead integrating it on \\(\dd{x}\\), it becomes much easier because our variable of interest no longer considers the \\(t\\).

Continuing on, then:

\begin{align}
&\frac{1}{x(t)}\dd{x} = \dd{t} \\\\
\Rightarrow\ &\int \frac{1}{x(t)}\dd{x} = \int \dd{t}  \\\\
\Rightarrow\ & \ln (x(t)) = t  \\\\
\Rightarrow\ & x(t) = e^{t}
\end{align}

Awesome. It should't be hard also to see that, generally:

\begin{equation}
x(t) = e^{ct}
\end{equation}

is the solution to all equations \\(\dv{x}{t} = cx\\).