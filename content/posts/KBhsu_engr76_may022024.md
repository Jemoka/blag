+++
title = "SU-ENGR76 MAY022024"
author = ["Houjun Liu"]
draft = false
+++

## [nyquist]({{< relref "KBhsu_engr76_apr302024.md#lossless-sampling" >}}) sampling theorem {#nyquist--kbhsu-engr76-apr302024-dot-md--sampling-theorem}

Formally, the [nyquist limit]({{< relref "KBhsu_engr76_apr302024.md#lossless-sampling" >}}) is states as:

for \\(X(t)\\) a continuous-time [signal]({{< relref "KBhsu_engr76_apr162024.md#signal" >}}) with bounded frequency representation which is bounded by \\([0, B]\\) Hz; if \\(X\\) is sampled every \\(T\\) seconds, then if \\(T < \frac{1}{2B}\\) (sampling interval is smaller than \\(1/2B\\)) or equivalently \\(\frac{1}{T} > 2B\\) (sampling frequency is larger than \\(2B\\)), then \\(X\\) can be reconstructed from its samples \\(X(0), X(T), X(2T), \ldots\\).

At every time, we can go back and fourth between \\(X\\) the samples and sinusoids via:

\begin{align}
X(t) &= b\_0 + \sum\_{j=0}^{BT} a\_{j} \sin \qty(2\pi \frac{j}{T}t) + b\_{j} \cos \qty(2\pi \frac{j}{T}t)  \\\\
&= A\_{0} + \sum\_{j=1}^{BT} A\_{j} \sin \qty(2\pi \frac{j}{T} t + \phi\_{j})
\end{align}

We use the second representation (in particular with \\(A\_{j} = \sqrt{a\_{j}^{2} + b\_{j}^{2}}\\) because its easy to actually visualize and recover.


## Passband Signal {#passband-signal}

What if our signal, instead of being a [Baseband Signal](#passband-signal) (\\(f \in [0,B]\\)), what if we have a [Passband Signal](#passband-signal) meaning \\(f \in [f\_{\min} > 0, f\_{\max}]\\)?

We actually _still_ only need \\(2(f\_{\max} - f\_{\min})\\)  worth of samples.

Its the same [nyquist limit]({{< relref "KBhsu_engr76_apr302024.md#lossless-sampling" >}}) argument due to degrees of freedom.


## Interpolation {#interpolation}

[nyquist limit]({{< relref "KBhsu_engr76_apr302024.md#lossless-sampling" >}}) is great and all, but I really don't want to wait for all \\(T\\) to be able to sample all the necessary terms to solve for every \\(a\_{j},b\_{j}\\) before we can reconstruct our signal.

So, even if we got our sequence of \\(\frac{1}{2B}\\) length of points, we need an alternative way to reconstruct the signal as we go.

One way to reconstruction via interpolation is just to connect the dots; however, this is bad because it creates sharp corners.


### In General {#in-general}

Suppose you have a sampling period length \\(T\_{s}\\):

\begin{equation}
\hat{x}(t) = \sum\_{m=0}^{\infty} X\qty(mT\_{s}) F\qty( \frac{t-mT\_{s}}{T\_{s}}) = x(0) F \qty(\frac{t}{T\_{s}}) + x(T\_{s}) f\qty(\frac{t-T\_{s}}{T\_{s}}) + \dots
\end{equation}

where \\(F(t)\\) is some interpolation function such that:

\begin{equation}
\begin{cases}
F(0) = 1 \\\\
F(k) = 0, k \in \mathbb{Z} \backslash \\{0\\}
\end{cases}
\end{equation}

Notice the above is a [convolution]({{< relref "KBhconvolution.md" >}}) between \\(X\\) and \\(F\\), where \\(y\\) is fixed as a multiple \\(m\\) around \\(mT\_{s}\\) and the convolution is centered at \\(\frac{t}{T\_{s}}\\).

However, because we are finite valued, we just slide a window around and skip around.


#### Consider now \\(\hat{x}\\) at \\(kT\_{s}\\) {#consider-now-hat-x-at-kt-s}

\begin{align}
\hat{x}(kT\_{s}) &= \sum\_{m=0}^{\infty} X(mT\_{s}) F \qty(\frac{kT\_{s}- mT\_{s}}{T\_{s}})  \\\\
&= \sum\_{m=0}^{\infty} X(mT\_{s}) F \qty(k-m)
\end{align}

now, recall that \\(F\\) is \\(0\\) for all non-zero integers, so each term will only be preserved once, precisely at \\(m = k\\). Meaning:

\begin{align}
\hat{x}(kT\_{s}) &= \sum\_{m=0}^{\infty} X(mT\_{s}) F \qty(k-m)  \\\\
&= X(kT\_{s}) 1  \\\\
&= X(kT\_{s})
\end{align}

so this is why we need \\(F(k) = 0, k \in \mathbb{Z} \backslash \\{0\\}\\)


### Zero-Hold Interpolation {#zero-hold-interpolation}

Choose \\(F\\) such that:

\begin{equation}
F = \begin{cases}
1, \text{if}\ |x| < \frac{1}{2} \\\\
0
\end{cases}
\end{equation}


### Infinite-Degree Polynomial Interpolation {#infinite-degree-polynomial-interpolation}

\begin{equation}
F(t) = (1-t) (1+t) \qty(1- \frac{t}{2}) \qty(1+ \frac{t}{2}) \dots = \text{sinc}(t) = \frac{\sin(\pi t)}{\pi t}
\end{equation}

This is the BEST interpolation; this is because it will be stretched such that every zero crossing matches eat \\(mT\_{s}\\), meaning we will recover a sum of sinusoids.

This gives a **smooth signal**; and if sampling was done correctly with the [nyquist limit]({{< relref "KBhsu_engr76_apr302024.md#lossless-sampling" >}}), interpolating with [sinc interpolation](#infinite-degree-polynomial-interpolation) will give you your original signal.


#### Shannon's Nyquist Theorem {#shannon-s-nyquist-theorem}

\begin{equation}
\hat{X}(t) = \sum\_{m=0}^{\infty} X(mTs) \text{sinc} \qty( \frac{t-mT\_{s}}{T\_{s}})
\end{equation}

Let \\(X(t)\\), as before, be a continuous-time, bandwidth limited, signal with [Bandwidth]({{< relref "KBhsu_engr76_apr252024.md#bandwidth" >}}) \\(B\\); let \\(\hat{X}(t)\\) be the reconstruction of this signal with samples taken apart by \\(T\_{s} < \frac{1}{2B}\\); then \\(\hat{X}(t) = X(t)\\). Otherwise, if \\(T\_{s} > \frac{1}{2B}\\), then the reconstruction \\(\hat{X}(t) \neq X(t)\\), but the samples at \\(mT\_{s}\\) will still match (that is, \\(X(m T\_{s}) = \hat{X}(m T\_{s})\\)) and \\(\hat{X}(t)\\) will be a [Baseband Signal](#passband-signal) whose spectrum is limited by \\([0, \frac{\frac{1}{T\_{s}}}{2}] = [0, \frac{F\_{s}}{2}]\\). This second case is callled "aliasing", or "strocoscopic effect".
