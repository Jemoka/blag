+++
title = "Euler-Bernoulli Theory"
author = ["Houjun Liu"]
draft = false
+++

The [Euler-Bernoulli Theory]({{< relref "KBheuler_bernoulli_theory.md" >}}) is a theory in dynamics which describes how much a beam deflect given an applied load.


## Assumptions {#assumptions}

For [Euler-Bernoulli Theory]({{< relref "KBheuler_bernoulli_theory.md" >}}) to apply in its basic form, we make assumptions.

-   The "beam" you are bending is modeled as a 1d object; it is only long and is not wide
-   For this page, \\(+x\\) is "right", \\(+y\\) is "in", and \\(+z\\) is "up"
-   Probably more, but we only have this so far.


## Basic Statement {#basic-statement}

The most basic for the [Euler-Bernoulli Equation]({{< relref "KBheuler_bernoulli_theory.md" >}}) looks like this:

\begin{equation}
\dv[2]x \qty(EI\dv[2]{w}{x}) =q(x)
\end{equation}

where, \\(w(x)\\) is the deflection of the beam at some direction \\(z\\) at position \\(x\\). \\(q\\) is the load distribution (force per unit length, similar to pressure which is force per unit area, at each point \\(x\\)). \\(E\\) is the [Elastic Modulus]({{< relref "KBhelastic_modulus.md" >}}) of the beam, and \\(I\\) the [second moment of area]({{< relref "KBhsecond_moment_of_area.md" >}}) of the beam's cross section.

Note that \\(I\\) must be calculated with respect to the axis perpendicular to the load. So, for a beam placed longside by the \\(x\\) axis, and pressed down on the \\(z\\) axis, \\(I\\) should be calculated as: \\(\iint z^{2}\dd{y}\dd{z}\\).

Pretty much all the time, the [Elastic Modulus]({{< relref "KBhelastic_modulus.md" >}}) \\(E\\) (how rigid your thing is) and [second moment of area]({{< relref "KBhsecond_moment_of_area.md" >}}) \\(I\\) (how distributed are the cross-section's mass) are constant; therefore, we factor them out, making:

\begin{align}
&\dv[2]x \qty(EI\dv[2]{w}{x}) =q(x) \\\\
\Rightarrow\ & EI \qty(\dv[2]x \dv[2]{w}{x} )=q(x) \\\\
\Rightarrow\ & EI \dv[4]{w}{x} = q(x)
\end{align}

This is also apparently used everywhere in engineering to figure out how bendy something will be given some \\(q\\) put along the beam.