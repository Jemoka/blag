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
x = var("x")
w = function('w')(x)
w0, w1, w2, w3 = var("w0 w1 w2 w3")
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
solution = desolve_laplace(fourier_cantileaver, w, ics=[0, w0,w1,w2,w3], ivar=x).expand()
solution
```

```text
ilt(E*I*g2750^3*w0/(E*I*g2750^4 - f^2*u) + E*I*g2750^2*w1/(E*I*g2750^4 - f^2*u) + E*I*g2750*w2/(E*I*g2750^4 - f^2*u) + E*I*w3/(E*I*g2750^4 - f^2*u), g2750, x)
```

```sage
ilt
```