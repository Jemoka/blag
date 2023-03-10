+++
title = "knowledgebase testing page"
author = ["Houjun Liu"]
draft = false
+++

## Generate a Valid Token! {#generate-a-valid-token}

1:nah 2:

what is there to do?
oenutonsetuhaoeu
o
ooensutahoeu



****type**** _faces_ for <span class="underline">everybody</span> ~~everywhere~~

<span class="underline">****yes indeed****</span> _****we stan type faces****_

Here's the characteristic equation again:


## Math! {#math}

What? we do math here?

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


### More Math! {#more-math}

We have one equation, four unknowns. However, we are not yet done. We will make one more simplifying assumption---try to get the \\(e^{x}\\) into sinusoidal form. We _know_ this is supposed to oscillate, and it being in sinusoidal makes the process of solving for periodic solutions easier.

\begin{equation}
\_{C\_{1}} e^{\left(b x\right)} + \_{C\_{0}} e^{\left(i \\, b x\right)} + \_{C\_{2}} e^{\left(-i \\, b x\right)} + \_{C\_{3}} e^{\left(-b x\right)}
\end{equation}

We have one equation, four unknowns. However, we are not yet done. We will make one more simplifying assumption---try to get the \\(e^{x}\\) into sinusoidal form. We _know_ this is supposed to oscillate, and it being in sinusoidal makes the process of solving for periodic solutions easier.


#### _Even_ 0More Math! {#even-0more-math}

Recall that:

\begin{equation}
\begin{cases}
\cosh x = \frac{e^{x}+e^{-x}}{2} \\\\
\cos x = \frac{e^{ix}+e^{-ix}}{2}\\\\
\sinh x = \frac{e^{x}-e^{-x}}{2} \\\\
\sin x = \frac{e^{ix}-e^{-ix}}{2i}\\\\
\end{cases}
\end{equation}

We have one equation, four unknowns. However, we are not yet done. We will make one more simplifying assumption---try to get the \\(e^{x}\\) into sinusoidal form. We _know_ this is supposed to oscillate, and it being in sinusoidal makes the process of solving for periodic solutions easier.

<!--list-separator-->

-  So much more math!

    We have one equation, four unknowns. However, we are not yet done. We will make one more simplifying assumption---try to get the \\(e^{x}\\) into sinusoidal form. We _know_ this is supposed to oscillate, and it being in sinusoidal makes the process of solving for periodic solutions easier.

    We have one equation, four unknowns. However, we are not yet done. We will make one more simplifying assumption---try to get the \\(e^{x}\\) into sinusoidal form. We _know_ this is supposed to oscillate, and it being in sinusoidal makes the process of solving for periodic solutions easier.


## error prop for tuning forks {#error-prop-for-tuning-forks}

```sage
E = var("E")
h = var("h")
p = var("p")
L = var("L")
s = var("s")

Ee = var("Ee")
he = var("he")
pe = var("pe")
Le = var("Le")

f = (s^2)/(2*pi*L^2)*((E*h^2)/(12*p))^(1/2)

fd = ((f.diff(E)*Ee)^2 + (f.diff(h)*he)^2 + (f.diff(pe)*pe)^2 + (f.diff(Le)*Le)^2)^(1/2)
fd.subs(E==46203293995, h==0.0065, p==2597, L==0.11604, s==1.8751040687120917, Ee==4620329399, he==5e-5, pe==1, Le==5e-5).n()
```

```text
16.6390442077208
```

[upper-triangular matrix]({{< relref "KBhupper_triangular_matrix.md" >}})
