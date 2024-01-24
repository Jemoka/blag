+++
title = "First-Order Linear Systems of ODEs"
author = ["Houjun Liu"]
draft = false
+++

Consider the case where there are two functions interacting with each other:

\begin{equation}
y\_1(t) \dots y\_{2}(t)
\end{equation}

So we have more than one dependent function, with functions \\(y\_1, y\_1', y\_2, y\_2'\\) and so forth. To deal with this, we simply make it into a matrix system:

\begin{equation}
y(t) = \mqty(y\_1(t) \\\ \dots \\\ y\_{n}(t))
\end{equation}

For instance, should we have:

\begin{equation}
\begin{cases}
y\_1' = 3y\_1 - 2y\_2 \\\\
y\_2' = -y\_1 + 5y\_2
\end{cases}
\end{equation}

We can write this system in a matrix like such:

\begin{equation}
y'(t) = \mqty(3 & -2 \\\ -1 & 5) y(t)
\end{equation}

Meaning:

\begin{equation}
y' = Ay
\end{equation}

which is a single linear equation.

---

We can actually write higher order linear system this way too:

\begin{equation}
y'' + ay' + by = 0
\end{equation}

we can actually construct:

\begin{align}
& y\_1(t) = y(t)  \\\\
& y\_2(t) = y'(t)
\end{align}

And therefore, we can construct:

\begin{equation}
\mqty(y\_1 \\\ y\_2)' = \mqty(y\_2 \\\ -by1 - ay2) = \mqty(0 & 1 \\\ -b &-a) \mqty(y\_1 \\\ y\_2)
\end{equation}

---

Recall that we had:

\begin{equation}
y' = Ay
\end{equation}

Let \\(v\\) be an [eigenvector]({{< relref "KBheigenvalue.md" >}}) of \\(A\\) with \\(\lambda\\) be an eigenvalue. Let us guess that \\(y = e^{\lambda t} v\\)  is a solution.

Plugging this in, we have:

\begin{equation}
y' = Ay = A(e^{\lambda t} v) = e^{\lambda t} Av = \lambda e^{\lambda t} v
\end{equation}

Of course, \\(y' = \lambda e^{\lambda t} v\\).

Meaning this is a solution of our system.
