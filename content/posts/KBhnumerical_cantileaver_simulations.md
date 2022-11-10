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

So, valid solutions to this expression for \\(f\\) would be valid modes. Let's solve it!

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
(_C1*sqrt(f)*(u/(E*I))^(1/4)*e^(sqrt(f)*x*(u/(E*I))^(1/4)) + I*_C0*sqrt(f)*(u/(E*I))^(1/4)*e^(I*sqrt(f)*x*(u/(E*I))^(1/4)) - I*_C2*sqrt(f)*(u/(E*I))^(1/4)*e^(-I*sqrt(f)*x*(u/(E*I))^(1/4)) - _C3*sqrt(f)*(u/(E*I))^(1/4)*e^(-sqrt(f)*x*(u/(E*I))^(1/4)),
 _C1*f*sqrt(u/(E*I))*e^(sqrt(f)*x*(u/(E*I))^(1/4)) - _C0*f*sqrt(u/(E*I))*e^(I*sqrt(f)*x*(u/(E*I))^(1/4)) - _C2*f*sqrt(u/(E*I))*e^(-I*sqrt(f)*x*(u/(E*I))^(1/4)) + _C3*f*sqrt(u/(E*I))*e^(-sqrt(f)*x*(u/(E*I))^(1/4)),
 _C1*f^(3/2)*(u/(E*I))^(3/4)*e^(sqrt(f)*x*(u/(E*I))^(1/4)) - I*_C0*f^(3/2)*(u/(E*I))^(3/4)*e^(I*sqrt(f)*x*(u/(E*I))^(1/4)) + I*_C2*f^(3/2)*(u/(E*I))^(3/4)*e^(-I*sqrt(f)*x*(u/(E*I))^(1/4)) - _C3*f^(3/2)*(u/(E*I))^(3/4)*e^(-sqrt(f)*x*(u/(E*I))^(1/4)))
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
 I*_C0*sqrt(f)*(u/(E*I))^(1/4) + _C1*sqrt(f)*(u/(E*I))^(1/4) - I*_C2*sqrt(f)*(u/(E*I))^(1/4) - _C3*sqrt(f)*(u/(E*I))^(1/4) == 0,
 _C1*f*sqrt(u/(E*I))*e^(L*sqrt(f)*(u/(E*I))^(1/4)) - _C0*f*sqrt(u/(E*I))*e^(I*L*sqrt(f)*(u/(E*I))^(1/4)) - _C2*f*sqrt(u/(E*I))*e^(-I*L*sqrt(f)*(u/(E*I))^(1/4)) + _C3*f*sqrt(u/(E*I))*e^(-L*sqrt(f)*(u/(E*I))^(1/4)) == 0,
 _C1*f^(3/2)*(u/(E*I))^(3/4)*e^(L*sqrt(f)*(u/(E*I))^(1/4)) - I*_C0*f^(3/2)*(u/(E*I))^(3/4)*e^(I*L*sqrt(f)*(u/(E*I))^(1/4)) + I*_C2*f^(3/2)*(u/(E*I))^(3/4)*e^(-I*L*sqrt(f)*(u/(E*I))^(1/4)) - _C3*f^(3/2)*(u/(E*I))^(3/4)*e^(-L*sqrt(f)*(u/(E*I))^(1/4)) == 0)
```

Finally, we can solve.

```sage
solve(conds, _c0, _c1, _c2, _c3, algorithm="sympy")
```

```text
[{_C0: 0, _C1: 0, _C2: 0, _C3: 0}]
```

```sage
w
```

```text
w(x)
```

```sage
t(x) = sin(x)
solve(sin(x)==0, x)
```

```text
[x == 0]
```