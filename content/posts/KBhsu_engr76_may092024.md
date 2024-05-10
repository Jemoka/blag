+++
title = "SU-ENGR76 MAY092024"
author = ["Houjun Liu"]
draft = false
+++

## [digital encoding]({{< relref "KBhsu_engr76_may072024.md#digital-encoding" >}}) {#digital-encoding--kbhsu-engr76-may072024-dot-md}

We allocating different systems in the same environment different frequency bands; by doing this, we are able to communicate pack information more effectively to prevent interference.

"how do we take a sequence of bits 10100.... and map it to a continuous-time signal \\(X(t)\\) such that the spectrum of this system is limited to \\([0, B]\\)"?


### sinc digital encoding {#sinc-digital-encoding}

IDEA: recall [sinc sampling theorem]({{< relref "KBhsu_engr76_may022024.md#shannon-s-nyquist-theorem" >}}), which (even if under sampled), will recover the source points exactly. As such, we can write:

\begin{equation}
X(t) = \sum\_{m=1}^{\infty} X[m] \text{sinc} \qty( \frac{t-mT}{T})
\end{equation}

for your choice of period \\(T > 0\\). where, \\(X[m] = V \cdot b\_{m}\\) where \\(b\_{m}\\) is the binary ([Huffman Coding]({{< relref "KBhhuffman_coding.md" >}})) encoding of your data.

By the [sinc sampling theorem]({{< relref "KBhsu_engr76_may022024.md#shannon-s-nyquist-theorem" >}}), we know that the spectrum of the recovered signal would be at most \\(\frac{1}{2T}\\). This means that, to limit the transmission to \\([0,B]\\), we should transmit our signal by using sinc interpolation using \\(T = \frac{1}{2B}\\).

This makes the rate of our communication to be \\(\frac{1}{T}\\) bits per second; plugging in the above that \\(T = 1/2B\\) in, this means our rate of communication is \\(2B\\) (higher the bandwidth, higher the speed).
