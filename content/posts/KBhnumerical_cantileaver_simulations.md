+++
title = "Numerical Cantileaver Simulations"
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
w
```

```text
_C1*e^(sqrt(f)*x*(u/(E*I))^(1/4)) + _C0*e^(I*sqrt(f)*x*(u/(E*I))^(1/4)) + _C2*e^(-I*sqrt(f)*x*(u/(E*I))^(1/4)) + _C3*e^(-sqrt(f)*x*(u/(E*I))^(1/4))
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

There are multiple solutions that exist for this function, we will solve for when solutions exist. We do this by gradually substituting and removing variables from each expression.

```sage
c0 = solve(cond_1, _c0)[0].rhs()
c0
```

```text
-_C1 - _C2 - _C3
```

We will substitute this to the second expression.

```sage
c1 = solve(cond_2.subs(_C0=c0), _c1)[0].rhs()
c1
```

```text
(I - 1)*_C2 + I*_C3
```

And the third

```sage
c2 = solve(cond_3.subs(_C0=c0).subs(_C1=c1), _c2)[0].rhs()
c2
```

```text
(-I*_C3*e^((I + 2)*L*b) - (I + 1)*_C3*e^((2*I + 1)*L*b) - _C3*e^(I*L*b))/((I - 1)*e^((I + 2)*L*b) + I*e^((2*I + 1)*L*b) - e^(L*b))
```

And lastly,

```sage
c3 = solve(cond_4.subs(_C0=c0).subs(_C1=c1).subs(_C2=c2), _c3)[0].rhs()
c3
```

```text
0
```

At this point, we realise that this will gets us the trivial solution. So instead, let us simplify this and see when we can make \\(c\_3\\) non-zero:

```sage
cond_4.subs(_C0=c0).subs(_C1=c1).subs(_C2=c2).full_simplify()
```

```text
(-(I - 1)*_C3*b^3*e^(2*L*b) - (I - 1)*_C3*b^3 - (-(I - 1)*_C3*b^3*e^(2*L*b) - (I - 1)*_C3*b^3)*e^(6*I*L*b) - 4*(_C3*b^3*e^(3*L*b) - (I - 2)*_C3*b^3*e^(L*b))*e^(5*I*L*b) + (-(2*I + 2)*_C3*b^3*e^(4*L*b) - (3*I + 21)*_C3*b^3*e^(2*L*b) - (I + 3)*_C3*b^3)*e^(4*I*L*b) + 12*(-(I + 1)*_C3*b^3*e^(3*L*b) - (I + 1)*_C3*b^3*e^(L*b))*e^(3*I*L*b) + (-(2*I + 2)*_C3*b^3*e^(4*L*b) - (21*I + 3)*_C3*b^3*e^(2*L*b) - (3*I + 1)*_C3*b^3)*e^(2*I*L*b) + 4*(-I*_C3*b^3*e^(3*L*b) - (2*I - 1)*_C3*b^3*e^(L*b))*e^(I*L*b))/(3*(2*e^(3*L*b) + e^(L*b))*e^(4*I*L*b) - 2*(-(I + 1)*e^(4*L*b) - (3*I + 3)*e^(2*L*b))*e^(3*I*L*b) - 3*(-2*I*e^(3*L*b) - I*e^(L*b))*e^(2*I*L*b) - (3*I - 3)*e^((5*I + 2)*L*b) + (3*I - 3)*e^((I + 2)*L*b) - I*e^((6*I + 1)*L*b) - e^(L*b)) == 0
```