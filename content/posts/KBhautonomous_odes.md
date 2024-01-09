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


## division method {#division-method}

the [division method](#division-method) involves solving [autonomous ODEs]({{< relref "KBhautonomous_odes.md" >}}) by dividing and treating it normally:

\begin{equation}
y' = f(y)
\end{equation}

\begin{equation}
\frac{1}{f(y)} \dd{y} = \dd{x}
\end{equation}

integrate both sides.


## general solution to y'(t) = ry(t) {#general-solution-to-y--t--ry--t}

generally, for \\(r \in \mathbb{R}\\), the solution to \\(y'(t) = ry(t)\\) is at \\(y(t)=y\_0e^{rt}\\), where \\(y\_0 = y(0)\\).

---

for [autonomous ODEs]({{< relref "KBhautonomous_odes.md" >}}) for which \\(ry(t) = f(y)\\), we have that:

\begin{equation}
\dv{y}{x} = ry(x)
\end{equation}

which means:

\begin{equation}
\frac{1}{y(x)} \dd{y} = r\dd{x}
\end{equation}

and so:

\begin{equation}
\ln \qty| y(x) | = rx +C
\end{equation}

and hence:

\begin{equation}
y(x) = K e^{rx}
\end{equation}

plugging in \\(x=0\\), yields \\(y(0) = Ke^{0} = K\\).
