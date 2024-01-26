+++
title = "matrix exponentiation"
author = ["Houjun Liu"]
draft = false
+++

If we have some system:

\begin{equation}
x' = Ax
\end{equation}

the solution for this system should be \\(e^{At}\\). This gives rise to, given the power series:

\begin{equation}
e^{At} = 1 + At + \frac{1}{2} \qty(At)^{2} + \frac{1}{3!} (At)^{3}+ \dots
\end{equation}

the derivative of which:

\begin{align}
\dv t e^{At} &= A + A^{2}t + \frac{A^{3}t^{2}}{2} + \dots   \\\\
&= A\qty(1 + At + \frac{A^{2}t^{2}}{2})
\end{align}

This intuition makes sense for all matrices \\(A\\). Meaning the general solution gives:

\begin{equation}
x = e^{At} x\_0
\end{equation}

---

Example:

\begin{equation}
A = \mqty( 2 & 0 \\\ 0 & 3)
\end{equation}

Given its a diagonal matrix, \\(A^{n}\\) is the diagonal to the \\(n\\), plugging it into the power series, and eventually:

\begin{equation}
e^{At} = \mqty( e^{2t} & 0 \\\ 0 & e^{3t})
\end{equation}

---

Example, but not diagonal now:

\begin{equation}
A = \mqty(1 & 1 \\\ 0 & 1)
\end{equation}

this matrix has the property that:

\begin{equation}
A^{k} = \mqty(1 & k \\\ 0 & 1)
\end{equation}

This means that:

\begin{equation}
e^{A} = \mqty(e^{t} & te^{t} \\\ 0 & e^{t})
\end{equation}
