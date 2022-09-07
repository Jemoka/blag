+++
title = "NUS-MATH570 Problem Set 1"
author = ["Houjun Liu"]
draft = false
+++

We have:

\begin{equation}
\frac{2y^{2}}{9-x^{2}} + y \dv{y}{x} + \frac{3y}{2-x} = 0
\end{equation}

We want to get rid of things; let's begin by dividing the whole thing by \\(y\\).

\begin{equation}
\frac{2y}{9-x^{2}} + \dv{y}{x} + \frac{3}{2-x} = 0
\end{equation}

Finally, then, moving the right expression to the right, we have:

\begin{equation}
\frac{2y}{9-x^{2}} + \dv{y}{x} = \frac{-3}{2-x}
\end{equation}

In this case, we have functions:

\begin{equation}
\begin{cases}
P(x) = \frac{2}{9-x^{2}}\\\\
Q(x) = \frac{-3}{2-x}\\\\
\end{cases}
\end{equation}

Taking first the top integral:

\begin{equation}
\int \frac{2}{9-x^{2}} \dd{x} = \frac{1}{3} \log \qty(\frac{x+3}{3-x})
\end{equation}

Raising \\(e\\) to that power, we have that:

\begin{equation}
\sqrt[3]{e} \frac{x+3}{3-x}
\end{equation}

Multiplying \\(Q(x)\\) to that expression, we have that:

\begin{equation}
\int  \sqrt[3]{e} \frac{-3x-9}{3-x} \dd{x}
\end{equation}

As our right-side integral. We can take this integral using digital tools---

```sage
f(x) = e^(1/3)*((-3*x-9)/(3-x))
latex(f.integrate(x))
```

\begin{equation}
3 \\, {\left(x + 6 \\, \log\left(x - 3\right)\right)} e^{\frac{1}{3}}
\end{equation}

wonderful. Therefore, the final analytic solution would be:

\begin{equation}
y(x) = \qty(\frac{1}{\sqrt[3]{e}} \frac{3-x}{x+3})\qty(3 \\, {\left(x + 6 \\, \log\left(x - 3\right)\right)} e^{\frac{1}{3}})
\end{equation}

This function does _not_ appear to pass through the point \\((1,\pi \sqrt{3})\\).