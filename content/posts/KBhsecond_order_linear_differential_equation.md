+++
title = "Second-Order Linear Differential Equations"
author = ["Houjun Liu"]
draft = false
+++

Here's a general form:

\begin{equation}
a\dv[2]{x}{t} + b \dv{x}{t} + cx = f(t)
\end{equation}


## solving homogeneous higher-order differential equations {#solving-homogeneous-higher-order-differential-equations}

This problem because easier if the right side is \\(0\\).

\begin{equation}
a\dv[2]{x}{t} + b \dv{x}{t} + cx = 0
\end{equation}

The general goal to solve in this case is to make this a system of [First-Order Differential Equations]({{< relref "KBhlinear_non_seperable_equation.md#solving-differential-equations" >}}).

To do this, we begin by making:

\begin{equation}
y = \dv{x}{t}
\end{equation}

Therefore, we can change the first equation:

\begin{equation}
a \dv{y}{t} + by + cx = 0
\end{equation}

Solving both of these conditions, we form a system of linear equations:

\begin{align}
&\dv{x}{t}=y \\\\
&\dv{y}{t} = \frac{-c}{a}x-\frac{b}{a}y
\end{align}

We are now first-order, so we can put this into a matrix equation:

\begin{equation}
\dv t \begin{pmatrix}
x \\\ y
\end{pmatrix}  = \begin{pmatrix}
0 & 1 \\\ -\frac{c}{a} & \frac{-b}{a}
\end{pmatrix}  \begin{pmatrix}
x \\\ y
\end{pmatrix}
\end{equation}

Now! We have an equation:

\begin{equation}
\dv{t}v = Av
\end{equation}

The result above shows that the transformations \\(\dv{t}\\) and \\(A\\) are isomorphic. Therefore, we now attempt to characterize \\(A\\) to solve this expression.

Let's begin. We will first shove that \\(v\\) on top of the differential for aesthetics:

\begin{equation}
\dv{v}{t} = Av
\end{equation}

This expression is actually nicely [seperable]({{< relref "KBhlinear_constant_coefficient_equation.md#solving-separable-differential-equations" >}}), so we shall endeavor to separate it:

\begin{equation}
\dd{v} = Av\dd{t}
\end{equation}

Of course, \\(v\\) is a function of \\(t\\). Therefore, the right side would be woefully complicated. Therefore, we shall do this handwavy thing where we go:

\begin{equation}
\frac{1}{v}\dd{v} = A\dd{t}
\end{equation}

Now, \\(A\\) is not a function in $t$---its just some constants! So, we can integrate this safely without much trouble:

\begin{equation}
\int  \frac{1}{v}\dd{v} =\int  A\dd{t}
\end{equation}

To get:

\begin{equation}
\ln v = t A + C
\end{equation}

Note the order as \\(t\\) is a constant. Finally, we will invert the natural log and get \\(v\\) back:

\begin{equation}
v = e^{tA+C}
\end{equation}

Excellent. We will now apply some [log/exponent laws]({{< relref "KBhlog_laws.md" >}}):

\begin{equation}
v = e^{tA}e^{C} = e^{tA}C
\end{equation}

~~this is so very handwavy. \\(C\\) is technically a vector here... long story and iffy understanding~~

Ok, how do we go about solving \\(x\\)?

Note now that \\(v=(x\ y)\\), so we will expand that:

\begin{equation}
\begin{pmatrix}
x \\\ y
\end{pmatrix} = e^{tA}\begin{pmatrix}
x\_0 \\\ y\_0
\end{pmatrix}
\end{equation}

where, as we defined above \\(y=\dv{x}{t}\\) (each integral needing a different constant.)

Now. remember that \\(A\\) is diagonalizable; and so will \\(tA\\) (citation needed, but intuition is that scaling eigenvalues do nothing anyways). So, to make this exponentiation easier, we will diagonalize it.

We now have that

\begin{equation}
e^{tA} =  \mqty(v\_1& \dots& v\_{m})\mqty(\dmat{e^{t\lambda\_{1}}, \dots, e^{t\lambda\_{m}}})\mqty(v\_1& \dots& v\_{m})^{-1}
\end{equation}

([how?]({{< relref "KBhraising_e_to_a_matrix.md" >}}))

Ok. Finally, we will take the binroller that is "constancy" and apply it to \\(e^{tA}\\). This took quite a bit of time for me to get, so feel free to take some time to get it too.

This all hinges upon the fact that \\(C\\) is a constant, so multiplying any constant to it still makes it \\(C\\).

So far, we have that:

\begin{equation}
\begin{pmatrix}
x \\\ y
\end{pmatrix} = e^{tA}\begin{pmatrix}
x\_0 \\\ y\_0
\end{pmatrix}  = \qty(\mqty(v\_1& \dots& v\_{m})\mqty(\dmat{e^{t\lambda\_{1}}, \dots, e^{t\lambda\_{m}}})\mqty(v\_1& \dots& v\_{m})^{-1} )\begin{pmatrix}
x\_0 \\\ y\_0
\end{pmatrix}
\end{equation}

Remember, now, that \\(v\_1\dots v\_{}\\) and its inverses are nothing but vectors filled with a lot of scalars. And any scalar \\(\alpha\\) times a constant still results in the (a new) constant: \\(\alpha C =C\\). So, we will steamroll \\(\mqty(x\_0&y\_0)\\) over the right side eigenbases matrix (multiplying a constant vector to any'ol matrix will just get a new set of constants back) to get:

\begin{align}
\begin{pmatrix}
x \\\ y
\end{pmatrix} &= \qty(\mqty(v\_1& \dots& v\_{m})\mqty(\dmat{e^{t\lambda\_{1}}, \dots, e^{t\lambda\_{m}}})\mqty(v\_1& \dots& v\_{m})^{-1} )\begin{pmatrix}
x\_0 \\\ y\_0
\end{pmatrix}  \\\\
&= \mqty(v\_1& \dots& v\_{m})\mqty(\dmat{e^{t\lambda\_{1}}, \dots, e^{t\lambda\_{m}}}) \begin{pmatrix}
C\_1 \\\ C\_2
\end{pmatrix}
\end{align}

Now, the middle thing has \\(t\\) in it! (the input!) So, we can't just steamroll now. We have to preserve the middle part.

\begin{align}
\begin{pmatrix}
x \\\ y
\end{pmatrix} &= \mqty(v\_1& \dots& v\_{m})\mqty(\dmat{e^{t\lambda\_{1}}, \dots, e^{t\lambda\_{m}}}) \begin{pmatrix}
C\_1 \\\ C\_2
\end{pmatrix}  \\\\
&= \mqty(v\_1& \dots& v\_{m}) \begin{pmatrix}
C\_1 e^{t\lambda\_{1}} \\\ C\_2 e^{t\lambda\_{2}}
\end{pmatrix}
\end{align}

And finally, we keep steamrolling:

\begin{align}
\begin{pmatrix}
x \\\ y
\end{pmatrix} &= \mqty(v\_1& \dots& v\_{m}) \begin{pmatrix}
C\_1 e^{t\lambda\_{1}} \\\ C\_2 e^{t\lambda\_{2}} \end{pmatrix}\\\\
&= \mqty({C\_1\_{x} e^{t\lambda\_{1}} + C\_2\_{x} e^{t\lambda\_{2}}} \\\ {C\_1\_{y} e^{t\lambda\_{1}} + C\_2\_{y} e^{t\lambda\_{2}}})
\end{align}

There is absolutely no difference in nature between \\(C\_{j\_{x}}\\) and \\(C\_{j\_{y}}\\) except for the fact that they are _different_ constants (which we got by multiplying \\(v\_1 \dots v\_{m}\\)) to it.

Ok so:

\begin{equation}
\begin{cases}
x = C\_1\_{x} e^{t\lambda\_{1}} + C\_2\_{x} e^{t\lambda\_{2}}\\\\
y = C\_1\_{y} e^{t\lambda\_{1}} + C\_2\_{y} e^{t\lambda\_{2}}\\\\
\end{cases}
\end{equation}

constructing the characteristic equation, as desired.


## method of undetermined coefficients {#method-of-undetermined-coefficients}

\begin{equation}
\dv{x}{t} = -2x+1
\end{equation}

The solution would be something like:

\begin{equation}
x = Ce^{-2t} + t
\end{equation}

Given the above result, we will now revert to \\(a \implies A\\), and recover what the true \\(\dv{x}{t}\\) should be:

\begin{align}
&v = e^{At}v\_0 \\\\
\Rightarrow\ & \dv{v}{t} = \qty(\dv{t} e^{At})x\_0
\end{align}

(as constants remain constant).

We now pull in the other expression we had from [applying eigenspace]({{< relref "KBhapplying_eigenspace.md" >}}):