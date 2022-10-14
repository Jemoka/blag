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

where, \\(W\\) and \\(B\\) are correlated Brownian motions with correlation \\(\rho\\) --- \\(E[(\dd{W})(\dd{B})] = \rho \dd{t}\\).

---

Let's work with \\(Y\\) first. We understand that \\(Y\\) is some continuous variable \\(e^{a}\\). Therefore, \\(\dv{Y}{t}=ae^{a}\\). Therefore, \\(dY = ae^{a}dt\\). Finally, then \\(\frac{\dd{Y}}{Y} = \frac{ae^{a}}{e^{a}}\dd{t} = a\\).

Finally, then, because we defined \\(Y=e^{a} \implies \ln Y = a = \frac{\dd{Y}}{Y}\\).

So, we have that:

\begin{align}
&\dd{Y} = \sigma Y\dd{B} \\\\
\Rightarrow\ & \dd{\log Y} = \frac{\sigma Y\dd{B}}{Y} = \sigma \dd{B}
\end{align}

This tells that the change in log returns in \\(Y\\) is [normal]({{< relref "KBhnormal_distribution.md" >}}) (as \\(B\\) is a [Brownian Motion]({{< relref "KBhbrownian_motion.md" >}})), with a standard deviation of \\(\sigma\\). Therefore:

\begin{equation}
\dd{\log Y} \sim \mathcal{N}(0, \sigma^{2} \dd{t})
\end{equation}

We therefore see that the log-returns of \\(Y\\) is a normal with variance \\(\sigma^{2}\\), making \\(Y\\) itself a [Brownian Motion]({{< relref "KBhbrownian_motion.md" >}}) with center \\(0\\) and variance \\(\sigma^{2}\\).

So now, tackling the expression above in \\(X\\), we will do the same exact thing as above and divide by \\(X\\):

\begin{equation}
\dd{\log X} = \mu \dd{t} + Y\dd{W}
\end{equation}

So we can see that \\(X\\) is a [Geometric Brownian Motion]({{< relref "KBhgeometric_brownian_motion.md" >}}) as a sum of two random variables---its volatility is determined by \\(Y\\) with a time-drift \\(\mu \dd{t}\\).

We see that we are _almost_ ready to have an analytical solution here, because the top expression is applying some function \\(f=\log\\) to a stochastic differential equation by time; however, the right side \\(Y\\) here is not quite a constant, so we can't simply apply an [Itô Intergral]({{< relref "KBhito_intergral.md" >}}) and call it a day.