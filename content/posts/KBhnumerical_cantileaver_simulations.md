+++
title = "Numerical Cantilever Simulations"
author = ["Houjun Liu"]
draft = false
+++

Here's the characteristic equation again:

\begin{equation}
\pdv[2] x \qty(EI \pdv[2]{w}{x}) = -\mu \pdv{w}{t}+q(x)
\end{equation}

After Fourier decomposition, we have that:

\begin{equation}
EI \dv[4]{\hat{w}}{x} - \mu f^{2}\hat{w} = 0
\end{equation}

Let's solve this!

```sage
E,I,u,f = var("E I u f")
x, L = var("x L")
w = function('w')(x)
_c0, _c1, _c2, _c3 = var("_C0 _C1 _C2 _C3")
```

```sage
fourier_cantileaver = (E*I*diff(w, x, 4) - u*f^2*w == 0)
fourier_cantileaver
```

```text
-f^2*u*w(x) + E*I*diff(w(x), x, x, x, x) == 0
```

And now, we can go about solving this result.

```sage
solution = desolve(fourier_cantileaver, w, ivar=x, algorithm="fricas").expand()
w = solution
```

\begin{equation}
\_{C\_{1}} e^{\left(\sqrt{f} x \left(\frac{u}{E I}\right)^{\frac{1}{4}}\right)} + \_{C\_{0}} e^{\left(i \\, \sqrt{f} x \left(\frac{u}{E I}\right)^{\frac{1}{4}}\right)} + \_{C\_{2}} e^{\left(-i \\, \sqrt{f} x \left(\frac{u}{E I}\right)^{\frac{1}{4}}\right)} + \_{C\_{3}} e^{\left(-\sqrt{f} x \left(\frac{u}{E I}\right)^{\frac{1}{4}}\right)}
\end{equation}

We will simplify the repeated, constant top of this expression into a single variable \\(b\\):

```sage
b = var("b")
top = sqrt(f)*(u/E*I)*(1/4)

w = _c1*e^(b*x) + _c0*e^(i*b*x) + _c2*e^(-i*b*x) + _c3*e^(-b*x)
w
```

```text
_C1*e^(b*x) + _C0*e^(I*b*x) + _C2*e^(-I*b*x) + _C3*e^(-b*x)
```

\begin{equation}
\_{C\_{1}} e^{\left(b x\right)} + \_{C\_{0}} e^{\left(i \\, b x\right)} + \_{C\_{2}} e^{\left(-i \\, b x\right)} + \_{C\_{3}} e^{\left(-b x\right)}
\end{equation}

We have one equation, four unknowns. The way that we will go about this is by
taking three derivatives and supplying the following initial conditions:

{{< figure src="/ox-hugo/2022-11-10_13-38-40_screenshot.png" >}}

```sage
wp = diff(w,x,1)
wpp = diff(w,x,2)
wppp = diff(w,x,3)
(wp, wpp, wppp)
```

```text
(_C1*b*e^(b*x) + I*_C0*b*e^(I*b*x) - I*_C2*b*e^(-I*b*x) - _C3*b*e^(-b*x),
 _C1*b^2*e^(b*x) - _C0*b^2*e^(I*b*x) - _C2*b^2*e^(-I*b*x) + _C3*b^2*e^(-b*x),
 _C1*b^3*e^(b*x) - I*_C0*b^3*e^(I*b*x) + I*_C2*b^3*e^(-I*b*x) - _C3*b^3*e^(-b*x))
```

And then, we have a system:

```sage
cond_1 = w.subs(x=0) == 0
cond_2 = wp.subs(x=0) == 0
cond_3 = wpp.subs(x=L) == 0
cond_4 = wppp.subs(x=L) == 0

conds = (cond_1, cond_2, cond_3, cond_4)
conds
```

```text
(_C0 + _C1 + _C2 + _C3 == 0,
 I*_C0*b + _C1*b - I*_C2*b - _C3*b == 0,
 _C1*b^2*e^(L*b) - _C0*b^2*e^(I*L*b) - _C2*b^2*e^(-I*L*b) + _C3*b^2*e^(-L*b) == 0,
 _C1*b^3*e^(L*b) - I*_C0*b^3*e^(I*L*b) + I*_C2*b^3*e^(-I*L*b) - _C3*b^3*e^(-L*b) == 0)
```

Ok so, we notice that out of all of these boundary expressions the \\(b^{n}\\) term drop out.

Then, we are left with a mix-and-match of the following components. Let us first work on the bottom two expressions.

\begin{equation}
\begin{cases}
x\_1 = C\_1e^{Lb} \\\\
x\_2 = C\_0ie^{iLb} \\\\
x\_3 = C\_2ie^{-iLb} \\\\
x\_4 = C\_3e^{-Lb} \\\\
\end{cases}
\end{equation}

We can then change the last two expressions above to the following:

\begin{equation}
\begin{cases}
x\_1-x\_2-x\_3+x\_4 = 0 \\\\
x\_1-x\_2+x\_3-x\_4 = 0
\end{cases}
\end{equation}

Moving things around, we have then:

\begin{equation}
\begin{cases}
x\_1+x\_4 = x\_2+x\_3 \\\\
x\_1+x\_3 = x\_2+x\_4
\end{cases}
\end{equation}

These expressions then tell us that by pairwise subtraction:

\begin{equation}
\begin{cases}
x\_1=x\_2 \\\\
x\_3=x\_4
\end{cases}
\end{equation}

Stating those back to the original expressions, we have:

\begin{equation}
\begin{cases}
C\_1e^{Lb}=C\_0ie^{iLb} \\\\
C\_2ie^{-iLb} = C\_3e^{-Lb}
\end{cases}
\end{equation}

We now Euler's formula! This will help us get that \\(i\\) next to the exponential function.

Recall that:

\begin{equation}
e^{ix} = \cos x + i\sin x\\\\
\end{equation}

And so:

\begin{equation}
i = e^{\frac{i\pi}{2}}
\end{equation}

(i.e. because \\(\cos \frac{\pi}{2} = 0, \sin \frac{\pi}{2} = 1\\) so \\(0+1i=i\\)).

And therefore, applying that to our expressions:

\begin{equation}
\begin{cases}
C\_1e^{Lb}=C\_0e^{i(Lb+\frac{\pi}{2})} \\\\
C\_2e^{i(\frac{\pi}{2}-Lb)} = C\_3e^{-Lb}
\end{cases}
\end{equation}

We now 1) swap the bottom expression, and 2) divide:

\begin{equation}
\frac{C\_1}{C\_3}e^{2Lb} = \frac{C\_0}{C\_2} e^{i2Lb}
\end{equation}

Finally, divide again:

\begin{equation}
\frac{C\_1}{C\_3}\frac{C\_2}{C\_0} =  e^{(i-1)2Lb}
\end{equation}

Excellent. We now move on to the top two expressions (dividing out the extra \\(b\\)):

\begin{align}
i C\_0 + C\_1 - i C\_2 - C\_3 = 0 \\\\
C\_0+C\_1+C\_2+C\_3=0
\end{align}

Equating these values above (as they are both \\(0\\)):

\begin{equation}
i C\_0 + C\_1 - i C\_2 - C\_3 = C\_0 + C\_1 + C\_2 + C\_3
\end{equation}

Simplfying more:

\begin{align}
&(i-1) C\_0  = (i+1) C\_2 + 2C\_3  \\\\
\Rightarrow\ & (i-1)C\_0-2C\_3 = (i+1)C\_2 \\\\
\Rightarrow\ & i C\_0 - (1-i)C\_3 = C\_2 \\\\
\Rightarrow\ & i C\_0 + (i-1)C\_3 = C\_2
\end{align}

Ok, substituting this into the original expression:

\begin{align}
&\frac{C\_1}{C\_3}\frac{C\_2}{C\_0} =  e^{(i-1)2Lb} \\\\
\Rightarrow\ & \frac{C\_1}{C\_3}\frac{(i C\_0 + (i-1)C\_3)}{C\_0} =  e^{(i-1)2Lb}  \\\\
\Rightarrow\ & \frac{C\_1}{C\_3} \qty(i+(i-1)\frac{C\_3}{C\_0}) =e^{(i-1)2Lb} \\\\
\Rightarrow\ & \qty(\frac{C\_1}{C\_3} i+\frac{C\_1}{C\_0}(i-1)) =e^{(i-1)2Lb}
\end{align}

And dividing:

\begin{equation}
C\_0  = -i C\_2 + \frac{2}{i-1}C\_3
\end{equation}

There are multiple solutions that exist for this function, we will solve for when solutions exist. We do this by gradually substituting and removing variables from each expression.

```sage
# w = solve(cond_1, w)
w
```

```text
[]
```

We will substitute this to the second expression.

```sage
c1 = solve(cond_3.subs(_C0=c0), _c1)[0].rhs()
c1
```

```text
-(1/2*I - 1/2)*(2*_C2*e^(L*b) + (I - 1)*_C3*e^(I*L*b))*e^(-(I + 2)*L*b)
```

And the third

```sage
c2 = solve(cond_3.subs(_C2=c0).subs(_C1=c1), _c2)[0].rhs()
c2
```

And lastly,

```sage
c3 = solve(cond_4.subs(_C1=c0).subs(_C1=c1).subs(_C2=c2), _c3)[0].rhs()
c3
```

```text
(_C0*((I + 1)*e^((4*I + 3)*L*b) + e^((5*I + 2)*L*b)) + I*_C0*e^((3*I + 2)*L*b))/(e^((I + 4)*L*b) - (I - 2)*e^((2*I + 3)*L*b) + (I - 1)*e^((3*I + 2)*L*b) + e^((I + 2)*L*b) + I*e^((4*I + 1)*L*b) + (I - 1)*e^((2*I + 1)*L*b))
```