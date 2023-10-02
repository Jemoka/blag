+++
title = "computer number system"
author = ["Houjun Liu"]
draft = false
+++

## bit {#bit}

A computer is built out of binary gates:

{{< figure src="/ox-hugo/2023-10-02_10-36-03_screenshot.png" >}}

So, having voltage into \\(B\\) allows current to pass through between \\(S\\) and \\(D\\), it could be on/off.


## byte {#byte}

Accumulation of \\(8\\) [bit](#bit)s

Computer memory is a large array of [byte](#byte)s. It is only **BYTE ADDRESSABLE**: you can't address a bit in isolation.


## numerical representations {#numerical-representations}

Generate, each base uses digits \\(0\\) to \\(base-1\\).

We prefix `0x` to represent hexadecimal, and `0b` to represent binary.


### base 10 {#base-10}

[base 10](#base-10) uses digits \\(0-9\\). Each place value represents to a certain power of \\(10\\): \\(10^{n}\\) at each place value \\(n\\), starting at \\(0\\).

{{< figure src="/ox-hugo/2023-10-02_10-40-16_screenshot.png" >}}


### base 2 {#base-2}

[base 2](#base-2) uses digits \\(0-1\\). Each place value represents a certain power of \\(2\\): \\(2^{n}\\) at each place \\(n\\), starting at \\(0\\).

{{< figure src="/ox-hugo/2023-10-02_10-41-23_screenshot.png" >}}

The leftmost (largest value) is considered most-significant bit, right most is the least-significant bit.


#### conversion from base 10 to base 2 {#conversion-from-base-10-to-base-2}

"What is \\(6\\) is base 2?"

-   What's the largest power of \\(2 \leq 6\\)? Well, we have \\(2^{2}\\). Therefore, the first place value is \\(2\\), which is the third digit.
-   now, we subtract the remainder, we now have \\(6-4=2\\) , which is \\(2^{1}\\)


#### min and max of binary {#min-and-max-of-binary}

The maximum value could be one minus the extra place value. For instance, if you have \\(8\\) digits (i.e. 7 place values), you would only be able to represent:

\begin{equation}
2^{8}-1 = 255
\end{equation}


#### multiplying and dividing by base {#multiplying-and-dividing-by-base}

{{< figure src="/ox-hugo/2023-10-02_10-48-50_screenshot.png" >}}

{{< figure src="/ox-hugo/2023-10-02_10-49-33_screenshot.png" >}}

It works in the way you expect.


### base 16 {#base-16}

We can use [base 16](#base-16) essentially to divide [base 2](#base-2) numbers into groups of \\(4\\).

{{< figure src="/ox-hugo/2023-10-02_10-54-50_screenshot.png" >}}

Each quartet of bits can be converted separately
