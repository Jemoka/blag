+++
title = "PSet 5"
author = ["Houjun Liu"]
draft = false
+++

## Chapter 12 {#chapter-12}


### Problem 12.2 {#problem-12-dot-2}

We have:

\begin{equation}
\begin{cases}
y'' + 5y' - 14y = 0 \\\\
y(0) = 0 \\\\
y'(0) = 9
\end{cases}
\end{equation}

We have, for the characteristic equation:

\begin{equation}
\lambda^{2} + 5\lambda  - 14 = 0
\end{equation}

meaning:

\begin{equation}
(\lambda - 2) (\lambda +7) = 0
\end{equation}

meaning, we have:

\begin{equation}
y = C\_1 e^{2t} + C\_2e^{-7t}
\end{equation}

Taking one derivative, we obtain:

\begin{equation}
y' = 2C\_1e^{2t} - 7C\_2e^{-7t}
\end{equation}

Plugging in \\(y(0)\\) and \\(y'(0)\\), we get that:

\begin{equation}
y\_0 = C\_1 + C\_2 = 0
\end{equation}

and that:

\begin{equation}
y\_0' =  2C\_1 - 7C\_2 = k
\end{equation}

Plugging the first expression into the second one, we obtain:

\begin{equation}
9C\_1 = k
\end{equation}

meaning:

\begin{equation}
\begin{cases}
C\_1 = \frac{k}{9} \\\\
C\_2 = -\frac{k}{9}
\end{cases}
\end{equation}

We are asked to take:

\begin{equation}
|\tilde{y}(t) - y(t)| \leq 0.1
\end{equation}

Plugging in the values we obtained above, we obtain:

\begin{equation}
\left| \frac{k-9}{9} \qty(e^{2t}-e^{-7t}) \right| \leq 0.1
\end{equation}

Now, we are given that \\(|e^{2t}-e^{-7t}| \leq 55\\), meaning:

\begin{equation}
\left| \frac{55(k-9)}{9}  \right| \leq 0.1
\end{equation}

multiplying the fraction to both sides gives:

\begin{equation}
\left| k-9  \right| \leq \frac{9}{550} \approx 0.0164
\end{equation}

Finally, this gives:

\begin{equation}
\begin{cases}
k-9 \leq 0.0164 \\\\
k-9 \geq -0.0164
\end{cases}
\end{equation}

Finally, this gives:

\begin{equation}
8.9836 \leq k \leq 9.0164
\end{equation}

Therefore, \\(a \approx 8.98\\), and \\(b \approx 9.02\\)


### Problem 12.6 {#problem-12-dot-6}

We have:

\begin{equation}
y'(t) = ry \qty(1- \frac{y}{K}) -h
\end{equation}

Now, we would like to figure critical points for this system, and use that to determine an upper bound for \\(h\\).

We have that:

\begin{equation}
ry \qty(1- \frac{y}{K}) -h = 0
\end{equation}

which has roots:

\begin{equation}
\frac{k}{2} \pm \sqrt{\qty(\frac{k}{2})^{2} - \frac{hk}{r}}
\end{equation}

Notably, this gives a parabola that opens down. Meaning, the "lower" root would be an unstable point, and the "upper" root would be a stable point.

In any initial points higher than the "lower" bound, our function will not experience extinction. For our specific case, this means we desire:

\begin{equation}
\frac{k}{2} - \sqrt{\qty(\frac{k}{2})^{2} - \frac{hk}{r}} < y\_0
\end{equation}

Solving now for \\(h\\), we obtain that:

\begin{equation}
\frac{r}{k} \qty( \qty(\frac{k}{2})^{2} - \qty(\frac{k}{2}-y\_0)^{2}) > h
\end{equation}

For our specific initial conditions, we have that:

\begin{equation}
\begin{cases}
r = 2 \\\\
k = 100 \\\\
y\_0 = 30
\end{cases}
\end{equation}

which gives:

\begin{equation}
0.02 \qty(2500-400) > h
\end{equation}

Meaning at most, \\(h < 42\\).


### Problem 12.10 {#problem-12-dot-10}


#### Part a {#part-a}

We have:

\begin{equation}
\begin{cases}
x' = a(y-x) \\\\
y' = (b-z)x-y \\\\
z' = xy - cz
\end{cases}
\end{equation}

At a critical point, the first expression would give: \\(y=x\\).

Plugging that into the second expression gives:

\begin{equation}
(b-1)x-zx= 0
\end{equation}

The third expression provides a substitution: \\(\frac{x^{2}}{c}\\).

Plugging that in gives:

\begin{equation}
(b-1)x-\frac{x^{3}}{c} = 0
\end{equation}

which yields:

\begin{equation}
x\qty(b-1-\frac{x^{2}}{c}) = 0
\end{equation}

The left yields \\(x=0\\), and further \\(y=z=x=0\\). The right side gives:

\begin{equation}
c(b-1) = x^{2}
\end{equation}

yet, as \\(c>0\\), \\(b< 1\\) requires \\(x\\) be imaginary. Hence, the only real solution when \\(b\leq 1\\) is the origin.


#### Part b {#part-b}

We can show this by the chain rule:

\begin{equation}
V'(x,y,z) = \frac{2x}{a} \dv{x}{t} + 2y \dv{y}{t} + 2z \dv{z}{t}
\end{equation}

Plugging in our original expressions:

\begin{equation}
V'(x,y,z) = \frac{2x}{a} \qty(a(y-x)) + 2y \qty((b-z)x-y) + 2z \qty(xy-cz)
\end{equation}

Simplifying, we note that the terms \\(-2xyz\\) and \\(2zxy\\) cancels out, leaving us with after factoring out a \\(-2\\):

\begin{equation}
-2(x^{2}-(b+1)xy+y^{2})-2cz^{2})
\end{equation}


#### Part c {#part-c}

We have:

\begin{equation}
\dv{V}{t} = -2 \qty(x- \qty(\frac{b+1}{2}y))^{2} - 2\qty(1-\qty(\frac{b+1}{2})^{2})y^{2} - 2cz^{2}
\end{equation}

Now, notably, we have three terms of \\(-2\\) being multiplied. In the first and last terms, it is being multiplied to something that's positive (as \\(a,b,c>0\\), and \\(\alpha^{2} \geq 0, \forall \alpha\\)).

We desire that \\(\dv{V}{t}\\) is negative, which therefore leaves us the middle term:

\begin{equation}
1-\qty(\frac{b+1}{2})^{2}
\end{equation}

during \\(b<1\\), we have that \\(\qty(\frac{b+1}{2})^{2} < 1\\), meaning this entire term is positive. This results in the middle term scaled by \\(-2\\) being negative, making htis whole expression negative.


## Chapter 13 {#chapter-13}


### Problem 13.1 {#problem-13-dot-1}

We have:

\begin{equation}
f(x\_1, x\_2) = \mqty(3x\_1-{x\_1}^{2}-x\_1x\_2 \\\ -2x\_2+x\_1x\_2)
\end{equation}

solving for stationary points (where the above vector is \\(0\\), we obtain the trivial solution \\((0,0)\\) as well as:

with the second expression, we obtain \\(x\_1x\_2 = 2x\_2\\), meaning \\(x\_1=2\\). From there, we can plug that into the first expression to obtain \\(x\_2=1\\).

This gives us two stationary points: \\((0,0), (2,1)\\).

Computing the derivative matrix of the function above, we obtain:

\begin{equation}
Df(x\_1,x\_2) = \mqty(3-2x\_1 - x\_2 & -x\_1 \\\ x\_2 & -2+x\_1)
\end{equation}

At \\((0,0)\\), we obtain the matrix:

\begin{equation}
\mqty(3 & 0 \\\ 0 & -2)
\end{equation}

which has characteristic polynomial \\((3-\lambda)(-2-\lambda)\\), which yields \\(\lambda = -2, 3\\), which means we have an saddle point which are unstable half-parabolas outwards.

At \\((2,1)\\), we obtain the matrix:

\begin{equation}
\mqty(-2 & -2 \\\ 1 & 0)
\end{equation}

which gives us the characteristic polynomial \\((-2-\lambda)(\lambda)+2\\), which yields that \\(\lambda = -1 \pm i\\).

This means that at this stationary point, we have an inward spiral.


### Problem 13.3 {#problem-13-dot-3}


#### Part a {#part-a}

\begin{equation}
\begin{cases}
x' = y+x^{2}y + y^{3} \\\\
y' = x+x^{3}+xy^{2}
\end{cases}
\end{equation}

which gives the derivative matrix:

\begin{equation}
\mqty(2xy & 1+x^{2}+3y^{2} \\\ 1+3x^{2}+y^{2} & 2xy)
\end{equation}

Now, at \\((0,0)\\), this gives:

\begin{equation}
\mqty(0 & 1 \\\ 1 & 0)
\end{equation}

This yields a characteristic polynomial of:

\begin{equation}
(-\lambda)^{2} -1 = 0
\end{equation}

meaning: \\(\lambda = -1, 1\\).

This yields two eigenvectors:

\begin{equation}
\begin{cases}
\lambda = -1, v =\mqty(1 \\\ -1) \\\\
\lambda =1, v= \mqty(1 \\\ 1)
\end{cases}
\end{equation}

Which creates this figure:

{{< figure src="/ox-hugo/2024-02-07_22-37-18_screenshot.png" >}}


#### Part b {#part-b}

We have:

\begin{equation}
\begin{cases}
x' = y+x-xy \\\\
y' = 4y +xy
\end{cases}
\end{equation}

meaning, we have the derivative matrix:

\begin{equation}
\mqty(1-y & 1-x \\\ y & 4+x)
\end{equation}

at \\((0,0)\\), this gives:

\begin{equation}
\mqty(1 & 1 \\\ 0 & 4)
\end{equation}

which yields the characteristic polynomial of \\((1-\lambda)(4-\lambda)\\), meaning we have \\(\lambda=1,4\\). This gives two eigenvectors:

\begin{equation}
\begin{cases}
\lambda =1, v = \mqty(1 \\\ 0) \\\\
\lambda =4, v = \mqty(3 \\\1)
\end{cases}
\end{equation}

Finally, this yields the figure:

{{< figure src="/ox-hugo/2024-02-07_22-40-52_screenshot.png" >}}


### Problem 13.9 {#problem-13-dot-9}

We have:

\begin{equation}
\begin{cases}
\dv{x}{t} = y \\\\
\dv{y}{t} = -2x^{3}+2x-\gamma y
\end{cases}
\end{equation}

The first expression gives \\(y=0\\) in a stationary point; plugging that into the latter yields \\(-2x(x^{2}-1)\\). This gives that \\(x=0,1,-1\\). Meaning, we have stationary points:

\begin{equation}
(0,0), (1,0), (-1,0)
\end{equation}

Now, the derivative matrix of this system gives:

\begin{equation}
\mqty(0 & 1 \\\ -6x^{2}+2 & -\gamma)
\end{equation}

Which gives the characteristic polynomial: \\(\lambda^{2}+\gamma \lambda -6x^{2}-2=0\\).

At \\(x=0\\), this gives \\(\lambda^{2}+\gamma \lambda -2 = 0\\), meaning it gives:

\begin{equation}
\lambda = \frac{-\gamma \pm \sqrt{\gamma^{2}+8}}{2}
\end{equation}

Now, \\(-\lambda - \sqrt{\dots}\\) is negative. Yet, \\(0=-\lambda+\sqrt{\lambda^{2}} < -\lambda+\sqrt{\lambda^{2}+8}\\), so, the other case is positive.

The real component of the eigenvalues having opposite signs, this system is unstable.

Consider \\(x=-1\\) and \\(x=1\\), we have: \\(\lambda^{2}+\gamma \lambda -8=0\\). This is a very similar case as the above, which gives:

\begin{equation}
\lambda = \frac{\lambda \pm \sqrt{\lambda^{2} +32}}{2}
\end{equation}

By a similar logic, this is also unstable.


## Chapter 14 {#chapter-14}


### Problem 14.1 {#problem-14-dot-1}


#### Part a {#part-a}

We have:

\begin{equation}
c(t) = x(t)^{2}-e^{y(t)}
\end{equation}

meaning, we have:

\begin{equation}
c'(t) = 2x x' - e^{y} y' = 2x(-x-e^{y}) - e^{y} (-2x) = -2x^{2}
\end{equation}

This is strictly decreasing because \\(x^{2}\\) is always positive when \\(x \neq 0\\), and therefore \\(c'(t)\\) is always negative, so the function is monotonically decreasing.


#### Part b {#part-b}

Orange. To make \\(c(t)\\) monotonically decreasing, either \\(x(t)\\) needs to decrease with time or \\(y(t)\\) needs to increase with time. Both of which will yield us a lower \\(c(t)\\) value than that of the black curve, which is the orange curve.


#### Part c {#part-c}

At \\((0, y\_0)\\), the original derivatives gives us the velocity vector:

\begin{equation}
\mqty(-e^{y\_0} \\\ 0)
\end{equation}

Recall that \\(e^{y\_0}>0\\) for all finite \\(y\_0\\). This makes this vector point to the left horizontally; as the vector gives no \\(y\\) component, and its \\(x\\) component is \\(0\\), our solution curve would cross the \\(y\\) axis by moving towards the left horizontally.


### Problem 14.3 {#problem-14-dot-3}


#### Part a {#part-a}

We note that holding either \\(X\\) or \\(Y\\) as \\(0\\) will result in the derivative of the variable in question to be \\(0\\). Therefore, the axes for the non-negative are solutions which---given this is a first order system---does not cross other solutions.

This means that solutions that start at the positive region will remain in the positive region.


#### Part b {#part-b}

We can check this by plugging our expressions in via the chain rule:

\begin{equation}
x = \qty(\frac{D}{C}) X
\end{equation}

and \\(t = CT\\), so:

\begin{equation}
\dv{x}{t} = \dv{x}{T}\dv{T}{t} = \frac{1}{C} \qty(\frac{D}{C} (A-BY)X)  = \frac{1}{C} \qty(A-BY)x = a(1-y)x
\end{equation}

Similarly, with:

\begin{equation}
y = \qty(\frac{B}{A})Y
\end{equation}

we can write:

\begin{equation}
\dv{y}{t} = \dv{y}{T} \dv{T}{t} = \frac{1}{C}\qty( \frac{B}{A} \qty(-C+DX)Y ) = (x-1)y
\end{equation}

Now, this system linearizes to:

\begin{equation}
\mqty(a-ay & -ax \\\ y & x-1)
\end{equation}

Which, at \\((1, 1)\\), gives:

\begin{equation}
\mqty(0 & -a \\\ 1 & 0)
\end{equation}

Now, this yields the characteristic polynomial \\((-\lambda)^{2}+a = 0\\), which provides purely imaginary eigenvalues, as desired.


#### Part c {#part-c}

We have:

\begin{equation}
(x - \ln x) + a(y- \ln y)
\end{equation}

Whose derivatives by \\(t\\) gives:

\begin{equation}
\dv{x}{t} - \frac{1}{x} \dv{x}{t} + a\qty(\dv{y}{t} - \frac{1}{y} \dv{y}{t})
\end{equation}

which, after plugging in the values given, gives:

\begin{equation}
a(1-y)x - a(1-y) + a((x-1)y-(x-1)) = 0
\end{equation}

as desired.
