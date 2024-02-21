+++
title = "PSet 6"
author = ["Houjun Liu"]
draft = false
+++

## Chapter 15 {#chapter-15}


### Problem 15.1, Part b {#problem-15-dot-1-part-b}

We have:

\begin{equation}
f(x) = x{e^{x^{2}}}
\end{equation}

now, recall that:

\begin{equation}
e^{x} = \sum\_{n=0}^{\infty} \frac{1}{n!} x^{n}
\end{equation}

substituting in \\(x^{2}\\) for \\(x\\), we obtain:

\begin{equation}
e^{x^{2}} = \sum\_{n=0}^{\infty} \frac{1}{n!} x^{2n}
\end{equation}

finally, multiplying by \\(x\\), we have:

\begin{equation}
xe^{x^{2}}  = \sum\_{n=0}^{\infty} \frac{1}{n!} x^{2n+1}
\end{equation}

Whose first 4 non-zero terms are:

\begin{equation}
f(x) = xe^{x^{2}} = \sum\_{n=0}^{\infty} \frac{1}{n!} x^{2n+1} \approx x + x^{3} + \frac{1}{2} x^{5} + \frac{1}{3!} x^{7} + \dots
\end{equation}


### Problem 15.2 {#problem-15-dot-2}

We have:

\begin{equation}
y'' - xy = 0
\end{equation}

Let us guess that \\(y\\) takes on some form:

\begin{equation}
y = \sum\_{n=0}^{\infty} c\_{n}x^{n}
\end{equation}

Taking two derivatives, we obtain:

\begin{equation}
y'' = \sum\_{n=2}^{\infty} n(n-1) c\_{n} x^{n-2}= \sum\_{n=0}^{\infty} (n+1)(n+2) c\_{n+2} x^{n}
\end{equation}

Writing out the above expression in differential cases, then, we obtain:

\begin{equation}
\sum\_{n=0}^{\infty} (n+1)(n+2) c\_{n+2} x^{n}  - \sum\_{n=0}^{\infty} c\_{n} x^{n+1} = 0
\end{equation}

Meaning, we have that:

\begin{equation}
\sum\_{n=0}^{\infty} (n+1)(n+2) c\_{n+2} x^{n} = \sum\_{n=1}^{\infty} c\_{n-1} x^{n}
\end{equation}

Matching coefficients, this gives that:

\begin{equation}
(n+1)(n+2) c\_{n+2} = c\_{n-1}
\end{equation}

furthermore, at the constant solution \\(x^{0}\\), we have that \\(2 c\_{2} = 0\\). Meaning \\(c\_2 = 0\\).

Relabeling the above expression now, we obtain:

\begin{equation}
(n+2)(n+3) c\_{n+3} = c\_{n}
\end{equation}

Meaning:

\begin{equation}
c\_{n+3} = \frac{c\_{n}}{(n+2)(n+3)}
\end{equation}

Finally, Taylor's formula gives:

\begin{equation}
c\_0 = \frac{f(0)}{0!} = a\_0
\end{equation}

and:

\begin{equation}
c\_1 = \frac{f'(0)}{1!} = a\_1
\end{equation}

Finally, then we can write out all the coefficients up to degree \\(6\\):

-   \\(c\_0 = a\_0\\)
-   \\(c\_1 = a\_1\\)
-   \\(c\_2 = 0\\)
-   \\(c\_3 = \frac{c\_0}{6} = \frac{a\_0}{6}\\)
-   \\(c\_4 = \frac{c\_1}{12} = \frac{a\_1}{12}\\)
-   \\(c\_5 = \frac{c\_2}{20} = 0\\)
-   \\(c\_6 = \frac{c\_3}{30} = \frac{a\_0}{6} \frac{1}{30} = \frac{a\_0}{180}\\)

Assembling that together, we obtain that, roughly:

\begin{equation}
y \approx a\_0 + a\_1 x + \frac{a\_0}{6} x^{3} + \frac{a\_1}{12} x^{4} + \frac{a\_0}{180} x^{6} + \dots
\end{equation}


### Problem 15.4 {#problem-15-dot-4}

We have:

\begin{equation}
y'' - y' = xy
\end{equation}

Given:

\begin{equation}
y(x) = \sum\_{n=0}^{\infty} a\_{n}x^{n}
\end{equation}

now, taking two derivatives yields us:

\begin{equation}
y'' = \sum\_{n=0}^{\infty} (n+1)(n+2)a\_{n+2} x^{n}
\end{equation}

and

\begin{equation}
y' = \sum\_{n=0}^{\infty} (n+1) a\_{n+1} x^{n}
\end{equation}

Finally, note that:

\begin{equation}
xy = x \sum\_{n=0}^{\infty} a\_{n}x^{n} = \sum\_{n=0}^{\infty} a\_{n}x^{n+1} = \sum\_{n=1}^{\infty} a\_{n-1} x^{n}
\end{equation}

Assembling this together, we get:

\begin{equation}
\sum\_{n=0}^{\infty} (n+1)(n+2) a\_{n+2} x^{n} - \sum\_{n=0}^{\infty} (n+1)a\_{n+1} x^{n} = \sum\_{n=1}^{\infty} a\_{n-1} x^{n}
\end{equation}


#### Part a {#part-a}

At the \\(x^{0}\\) term, the right side vanishes and the left side yields us:

\begin{equation}
2 a\_{2} - a\_{1} = 0
\end{equation}

meaning we have that:

\begin{equation}
a\_2 = \frac{a\_1}{2}
\end{equation}


#### Part b {#part-b}

Writing out all other coefficients, we obtain:

\begin{equation}
(n+1)(n+2) a\_{n+2} - (n+1)a\_{n+1} = a\_{n-1}
\end{equation}

relabeling this, we get:

\begin{equation}
(n+2)(n+3) a\_{n+3} - (n+2)a\_{n+2} = a\_{n}
\end{equation}

Finally, solving for \\(a\_{n+3}\\), we get:

\begin{equation}
a\_{n+3} = \frac{a\_{n}+(n+2)a\_{n+2}}{(n+2)(n+3)}
\end{equation}


#### Part c {#part-c}

Finally, given our initial conditions \\(y\_0 = 0\\) and \\(y'\_{0} = 12\\), we obtain via Taylor's Formula that:

\begin{equation}
a\_0 = \frac{f(0)}{0!} = 0
\end{equation}

and

\begin{equation}
a\_1 = \frac{f'(0)}{0!} = 12
\end{equation}

This allows us to write out:

-   \\(a\_0 = 0\\)
-   \\(a\_1 = 12\\)
-   \\(a\_2 = \frac{12}{2} = 6\\)
-   \\(a\_3 = \frac{a\_0 + 2a\_{2}}{6} = \frac{12}{6} = 2\\)
-   \\(a\_{4} = \frac{a\_{1}+3a\_{3}}{12} = \frac{12+6}{12} = \frac{3}{2}\\)


## Chapter 16 {#chapter-16}


### Problem 16.1, part b {#problem-16-dot-1-part-b}

Explicit Euler's method relates to the slope field works by starting at the initial point, and taking the slope at that point, and "tracing" out to a distance of \\(h\\) on that slope + reevaluating.

In essence, explicit Euler traces out piecewise linear segments of the function on the slope field.

In Explicit Euler's method, we leverage the fact that:

\begin{equation}
x\_{0}+ h f(x\_0) \approx x(t\_0 + h)
\end{equation}

to obtain our solution at some point beyond the initial point. A graphical way of doing this would involve drawing piecewise linear line segments which span \\(h\\) in \\(t\\) and has slope \\(f(x\_0)\\), starting at point \\(x\_0\\). In problem \\(b\\), specifically, we have:

{{< figure src="/ox-hugo/2024-02-20_14-43-08_screenshot.png" >}}


### Problem 16.2, part a {#problem-16-dot-2-part-a}

In Implicit Euler's method, we seek a point such that:

\begin{equation}
x\_{i+1} - h f(x\_{i+1}) = x\_i
\end{equation}

to obtain our solution at some point beyond the initial point. Essentially, we go backwards from each \\(x\_{i+1}\\) in distance \\(h\\) from our previous point to "connect" the best line such the slope at that line can reach backwards into hitting our previous point \\(x\_{i}\\). The slopes chosen at each step should be the slope at the destination step, and not the source step.

We keep going ahead by steps \\(h\\), and "connecting" backwards to where we last finished computation. For \\(y' = -3y\\), we have:

This method may get stuck if, after a time period ahead of your current point \\(f(x\_{t+1})\\) results in a value for which there's no valid solution for \\(x\_{t+1}\\) which is connected to your previous point.

{{< figure src="/ox-hugo/2024-02-20_14-45-48_screenshot.png" >}}


## Chapter 17 {#chapter-17}


### Problem 17.2 {#problem-17-dot-2}

| h                  | 0.5     | 0.2     | 0.1     | 0.01    |
|--------------------|---------|---------|---------|---------|
| **Midpoint**       | 0.36328 | 0.42089 | 0.43224 | 0.43651 |
| **Midpoint Error** | 0.07328 | 0.01567 | 0.00432 | 0.00005 |
| **Heun**           | 0.44531 | 0.43637 | 0.43632 | 0.43655 |
| **Heun Error**     | 0.00875 | 0.00019 | 0.00024 | 0.00001 |
| **RK4**            | 0.43641 | 0.43655 | 0.43656 | 0.43656 |
| **RK4 Error**      | 0.00015 | 0.00001 | 0       | 0       |

| h                  | 0.5   | 0.2     | 0.1  | 0.01   |
|--------------------|-------|---------|------|--------|
| h^2                | 0.25  | 0.04    | 0.01 | 0.0001 |
| rk4/midpoint error | 0.002 | 0.00063 | 0    | 0      |
| rk4/heun error     | 0.017 | 0.0526  | 0    | 0      |

Though from this table it appears as though at, for \\(h=0.2\\), we obtained an RK4/heun ratio of \\(0.0526 > 0.04\\), this is due a difference is sigfigs. Preserving six digits of sigfigs, we obtain that the actual RK4 estimation would be \\(0.436554\\), meaning an error of about \\(0.000006\\), meaning the actual ratio would be about \\(0.03< 0.04\\).

Hence, all methods results in ratios below or around \\(h^{2}\\), providing evidence for rk4's fourth-order nature.


### Problem 17.5 {#problem-17-dot-5}

| h\k  | 5  | 10  | 20  | 50  |
|------|----|-----|-----|-----|
| 0.25 | No | Yes | Yes | Yes |
| 0.2  | No | Yes | Yes | Yes |
| 0.1  | No | No  | Yes | Yes |
| 0.05 | No | No  | No  | Yes |
