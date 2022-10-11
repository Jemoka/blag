+++
title = "NUS-ECON320 Volatility Hedging"
author = ["Houjun Liu"]
draft = false
+++

Let \\(X\\) denote price and \\(Y\\) denote volatility. The two objects obey the following process:

\begin{equation}
\begin{cases}
\dd{X} = \mu X \dd{t} + XY \dd{W} \\\\
\dd{Y} = \sigma Y \dd{B}
\end{cases}
\end{equation}

where, \\(W\\) and \\(B\\) are correlated Brownian motions with correlation $&rho;$---\\(E[(\dd{W})(\dd{B})] = \rho \dd{t}\\).

---

Let's work with \\(Y\\) first. We understand that \\(Y\\) is some continuous variable \\(e^{?}\\). Therefore, \\(\dv{Y}{t}=?e^{?}\\). Therefore, \\(dY = ?e^{?}dt\\). Finally, then \\(\frac{\dd{Y}}{Y} = \frac{?e^{?}}{e?}\dd{t} = ?\\).

Finally, then, because we defined \\(Y=e^{?} \implies \ln Y = ? = \frac{\dd{Y}}{Y}\\).

So, we have that:

\begin{align}
&\dd{Y} = \sigma Y\dd{B} \\\\
\Rightarrow\ & \dd{\log Y} = \sigma \dd{B}
\end{align}

This tells that the change in log returns in \\(Y\\) is [normal]({{< relref "KBhnormal_distribution.md" >}}) (as \\(B\\) is a [Brownian Motion]({{< relref "KBhbrownian_motion.md" >}})), with a standard deviation of \\(\sigma\\). Therefore:

\begin{equation}
\dd{\log Y} \sim \mathcal{N}(0, \sigma^{2} \dd{t})
\end{equation}

So now, tackling the expression above in \\(X\\), we will do the same exact thing as above and divide by \\(X\\):

\begin{equation}
\dd{\log X} = \mu \dd{t} + Y\dd{W}
\end{equation}