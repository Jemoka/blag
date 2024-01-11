+++
title = "autonomous ODEs"
author = ["Houjun Liu"]
draft = false
+++

an [First Order ODE]({{< relref "KBhfirst_order_odes.md" >}}) is "autonomous" when:

\begin{equation}
y' = f(y)
\end{equation}

for some \\(f\\) of one variables. Meaning, it only depends on the independent variable \\(t\\) through the use of \\(y(t)\\) in context.

This is a special class of [seperable diffequ]({{< relref "KBhseperable_diffequ.md" >}}).


## shifting {#shifting}

Consider:

\begin{equation}
y\_1'(t) = f(t,y\_1 (t))
\end{equation}

say we had a shifted version of this function:

\begin{equation}
y\_2 (t) = y\_1(t+1)
\end{equation}

by the chain rule, we can observe that \\(y\_2\\) also satisfy the statement above.
