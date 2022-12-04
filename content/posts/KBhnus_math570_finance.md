+++
title = "NUS-MATH570 Finance"
author = ["Houjun Liu"]
draft = false
+++

We need to solve this system:

```sage
# variables
s = var("s")
# constants
I0, U0, G0, M0 = var("I0 U0 G0 M0")
# extrinsic variables
phi = var("phi", latex_name="\phi")

# random functions
Fi = var("Fi")
Fu = var("Fu")
Fg = var("Fg")
Fm = var("Fm")

# equations
eqns = [
    Fm == (0.02*s*sin(phi)+0.023*cos(phi))/(s^2+1.3225),
    s*Fi - I0 == -0.73*Fu+(0.0438/s)+0.4*(s*Fm-M0),
    s*Fu - U0 == 0.4*Fi - 0.012/s,
    s*Fg - G0 == (s*Fm-M0)-Fi
]

# solve!
solution = solve(eqns, Fi, Fu, Fg, Fm, solution_dict=True)[0]
solution
```

```text
{Fi: 1/100*(80000*(125*I0 - 50*M0 + sin(phi))*s^4 - 2000*(3650*U0 - 46*cos(phi) - 219)*s^3 + 200*(66125*I0 - 26450*M0 + 438)*s^2 - 193085*(50*U0 - 3)*s + 115851)/(100000*s^5 + 161450*s^3 + 38617*s),
 Fu: 1/50*(5000000*U0*s^4 + 4000*(500*I0 - 200*M0 + 4*sin(phi) - 15)*s^3 + 100*(66125*U0 + 184*cos(phi) + 876)*s^2 + 26450*(100*I0 - 40*M0 - 3)*s + 115851)/(100000*s^5 + 161450*s^3 + 38617*s),
 Fg: 1/100*(200000*(50*G0 - 50*M0 + sin(phi))*s^5 - 10000*(1000*I0 - 400*M0 - 23*cos(phi) + 8*sin(phi))*s^4 + 200*(80725*G0 - 80725*M0 + 36500*U0 - 460*cos(phi) + 292*sin(phi) - 2190)*s^3 - 40*(330625*I0 - 132250*M0 - 1679*cos(phi) + 2190)*s^2 + 193085*(20*G0 - 20*M0 + 50*U0 - 3)*s - 115851)/(100000*s^6 + 161450*s^4 + 38617*s^2),
 Fm: 2/5*(20*s*sin(phi) + 23*cos(phi))/(400*s^2 + 529)}
```

Now we inverse Laplace transform:

```sage
t = var("t")
I(t) = inverse_laplace(solution[Fi], s, t)
U(t) = inverse_laplace(solution[Fu], s, t)
G(t) = inverse_laplace(solution[Fg], s, t)
M(t) = inverse_laplace(solution[Fm], s, t)

(I,U,G,M)
```

```text
(t |--> -1/2061000*sqrt(730)*(103050*U0 + 368*cos(phi) - 6183)*sin(1/50*sqrt(730)*t) + 1/1030500*(1030500*I0 - 412200*M0 - 2336*sin(phi) - 30915)*cos(1/50*sqrt(730)*t) + 529/51525*cos(23/20*t)*sin(phi) + 529/51525*cos(phi)*sin(23/20*t) + 3/100,
 t |--> 1/37613250*sqrt(730)*(1030500*I0 - 412200*M0 - 2336*sin(phi) - 30915)*sin(1/50*sqrt(730)*t) + 1/103050*(103050*U0 + 368*cos(phi) - 6183)*cos(1/50*sqrt(730)*t) - 184/51525*cos(phi)*cos(23/20*t) + 184/51525*sin(phi)*sin(23/20*t) + 3/50,
 t |--> -1/15045300*sqrt(730)*(1030500*I0 - 412200*M0 - 2336*sin(phi) - 30915)*sin(1/50*sqrt(730)*t) - 1/41220*(103050*U0 + 368*cos(phi) - 6183)*cos(1/50*sqrt(730)*t) + 1/103050*(920*cos(phi) + 2061*sin(phi))*cos(23/20*t) + 1/103050*(2061*cos(phi) - 920*sin(phi))*sin(23/20*t) + G0 - M0 + 5/2*U0 - 3/100*t - 3/20,
 t |--> 1/50*cos(23/20*t)*sin(phi) + 1/50*cos(phi)*sin(23/20*t))
```

Some plots.

```sage
I_specific = I.subs(I0=0.24, U0=0.39, M0=0, G0=0, phi=2.35)
U_specific = U.subs(I0=0.24, U0=0.39, M0=0, G0=0, phi=2.35)
G_specific = G.subs(I0=0.24, U0=0.39, M0=0, G0=0, phi=2.35)
M_specific = M.subs(I0=0.24, U0=0.39, M0=0, G0=0, phi=2.35)

plot(I_specific, t, 0, 100, color="blue") + plot(U_specific, t, 0, 100, color="orange") + plot(G_specific, t, 0, 100, color="green") + plot(M_specific, t, 0, 100, color="red")
```

```text
/Users/houliu/.sage/temp/baboon.jemoka.com/80287/tmp_nxtuomzj.png
```

{{< figure src="/ox-hugo/2022-12-02_15-01-11_screenshot.png" >}}

```sage
derivative(I, t)
```

```text
t |--> -1/51525000*sqrt(730)*(1030500*I0 - 412200*M0 - 2336*sin(phi) - 30915)*sin(1/50*sqrt(730)*t) - 73/10305000*(103050*U0 + 368*cos(phi) - 6183)*cos(1/50*sqrt(730)*t) + 12167/1030500*cos(phi)*cos(23/20*t) - 12167/1030500*sin(phi)*sin(23/20*t)
```