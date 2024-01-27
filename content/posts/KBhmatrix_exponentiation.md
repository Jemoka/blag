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

See also [raising e to a matrix]({{< relref "KBhraising_e_to_a_matrix.md" >}})
