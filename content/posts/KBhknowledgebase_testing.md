+++
title = "knowledgebase testing page"
author = ["Houjun Liu"]
draft = false
+++

[knowledgebase testing]({{< relref "KBhknowledgebase_testing.md" >}}) is a space to test the knowledgebase!


## Hello! {#hello}

Hewo


## Hi its the index {#hi-its-the-index}

[thermoregulation]({{< relref "KBhthermoregulation.md" >}}) is the brain's regulation of body temperature to respond to heat, cold events.

Studies indicate that cold exposure cold exposure can activate [AgRP]({{< relref "KBhagrp.md" >}}) (stimulate food intake) as a means for the brain leveraging [CNS regulation]({{< relref "KBhcns_regulation.md" >}}) to which would lower the [glucose]({{< relref "KBhglucose.md" >}}) level and maintain [glucose homeostatis]({{< relref "KBhglucose_homeostatis.md" >}}).

However, cold exposure also trigger energy expenditure, and seems contradictory but _not really why?_ \\(12\chi\delta\\)

[Federal Project Number One]({{< relref "KBhfederal_project_number_one.md" >}})

\begin{equation}
   \iint\_0^1 \left(\frac{1}{331}\sqrt{32\chi}\right)
\end{equation}

{{< figure src="/ox-hugo/2022-04-16_18-22-10_screenshot.png" >}}

look

[Authoritarianism]({{< relref "KBhauthoritarianism.md" >}})

[thermoregulation]({{< relref "KBhthermoregulation.md" >}})


### second level heading {#second-level-heading}

what does this


## Who woattada thought {#who-woattada-thought}

hewo

i hidden

i hidden

i hidden

i


## Hi its the index {#hi-its-the-index}

eyooo

[Authoritarianism]({{< relref "KBhauthoritarianism.md" >}})

[thermoregulation]({{< relref "KBhthermoregulation.md" >}})


## Who woattada thought {#who-woattada-thought}

hewo

i hidden

i hidden

i hidden

i


## Hi its the index {#hi-its-the-index}

eyooo

[Authoritarianism]({{< relref "KBhauthoritarianism.md" >}})

[thermoregulation]({{< relref "KBhthermoregulation.md" >}})


## Who woattada thought {#who-woattada-thought}

hewo

i hidden

i hidden

i hidden

i


## Hi its the index {#hi-its-the-index}

eyooo

[Authoritarianism]({{< relref "KBhauthoritarianism.md" >}})

[thermoregulation]({{< relref "KBhthermoregulation.md" >}})


## Who woattada thought {#who-woattada-thought}

hewo

i hidden

i hidden

i hidden

i hidden hidden hidden hidden

```sage
f(x) = 12^x
plot(f, (x, -10, 10))
```

```python
print("hewo")
x = input()
```


## Problem 5: Energy Approach {#problem-5-energy-approach}


### Velocity and Angular Velocity {#velocity-and-angular-velocity}

Velocity at the top of the ramp: \\(0\\). Because there are no sliding (hence there are no heat), there is not going to be another component (beyond rotational, translational, and potential energy.)

We know, then:

\begin{equation}
   \Delta KE +\Delta PE = 0
\end{equation}

From the fact that the object slid from the top of the ramp (\\(h\\)), we know that the sliding took a total potential energy loss of \\(Mg\Delta h\\).

Therefore:

\begin{equation}
   -Mgh + \frac{1}{2} M{v\_f}^2 + \frac{1}{2}I\_o {\omega\_f}^2 = 0
\end{equation}

Separating the variable off to both sides:

\begin{align}
    &\frac{1}{2} M{v\_f}^2 + \frac{1}{2}I\_o {\omega\_f}^2 = Mgh\\\\
\Rightarrow & M{v\_f}^2 + I\_o {\omega\_f}^2 = 2 Mgh
\end{align}

Because there are no sliding:

\begin{equation}
   {\omega\_f} R = v\_f
\end{equation}

We now have two equations and two variables:

\begin{equation}
   \begin{cases}
    M{v\_f}^2 + I\_o {\omega\_f}^2 = 2 Mgh\\\\
   {\omega\_f} R = v\_f
\end{cases}
\end{equation}

Substituting the second result into the top expression:

\begin{equation}
   M{\omega\_f}^2 R^2 + I\_0{\omega\_f}^2 = 2Mgh
\end{equation}

Finally, solving for \\(\omega\_f\\):

\begin{align}
    &{\omega\_f}^2(M R^2 + I\_0) = 2Mgh\\\\
\Rightarrow &{\omega\_f}^2 = \frac{2Mgh}{(M R^2 + I\_0)}\\\\
\Rightarrow &{\omega\_f} = \sqrt{\frac{2Mgh}{M R^2 + I\_0}}\ \blacksquare
\end{align}

Multiplying the expression by \\(R\\) to figure \\(v\_f\\):

\begin{equation}
v\_f = R\sqrt{\frac{2Mgh}{M R^2 + I\_0}}\ \blacksquare
\end{equation}


### Acceleration and Angular Acceleration {#acceleration-and-angular-acceleration}

Taking the timed derivative of \\(v\_f\\):

\begin{equation}
   a\_{CM} = \frac{R}{2\sqrt{\frac{2Mgh}{M R^2 + I\_0}}} \frac{2Mgh}{M R^2 + I\_0}} \frac{dh}{dt}
\end{equation}

to figure change in height, we see that, because of the ramp:

\begin{equation}
   \frac{dh}{dt} = \frac{d c}{dt} \sin\theta
\end{equation}

where \\(c\\) is the ramp remaining.

Furthermore, we see that:

\begin{equation}
   \frac{dc}{dt} = \vec{v}
\end{equation}

Hence:

\begin{equation}
 \frac{dh}{dt} =  R\sqrt{\frac{2Mgh}{M R^2 + I\_0}}\sin\theta
\end{equation}

Substituting this back to the expression:

\begin{align}
   a\_{CM} &= \frac{R}{2\sqrt{\frac{2Mgh}{M R^2 + I\_0}}} \frac{2Mgh}{M R^2 + I\_0}  R\sqrt{\frac{2Mgh}{M R^2 + I\_0}}\sin\theta\\\\
&= R^2  \frac{Mgh}{M R^2 + I\_0} \sin\theta\ \blacksquare
\end{align}

The same logic follows for \\(\alpha\\), simply without an extra constant of \\(R\\) being multiplied. To figure out its derivative, then we can again divide \\(R\\) out from the above expression to result in:

\begin{align}
   \alpha\_{CM} &= R \frac{Mgh}{M R^2 + I\_0} \sin\theta\ \blacksquare
\end{align}


## Problem 6: Force and Torque {#problem-6-force-and-torque}


### Figuring Torque {#figuring-torque}

We will figure torque for the object, then use it for calculations. We will set the origin of the system to the lower-left of the triangle.

We will set the origin as being at the center of mass at the top of the ramp. Gravity and normal force, therefore, is coaxial with the center of mass and hence not accounted for here.

We see that:

\begin{equation}
   I\_0\alpha = -RF
\end{equation}

Relating the slide down the ramp:

\begin{equation}
Mg\sin\theta - F = Ma\_x
\end{equation}

And finally, relating rotational and acceleration movements, given no sliding:

\begin{equation}
   a\_x = R\alpha
\end{equation}

We now have three expressions relating unknowns \\(\alpha\\), \\(F\\), and \\(a\_x\\). Substituting both expressions into the second:

\begin{align}
   &F = \frac{-I\_0\alpha}{R} \\\\
\Rightarrow & Ma\_x = Mg\sin\theta - \frac{I\_0\alpha}{R} \\\\
\Rightarrow & MR\alpha = Mg\sin\theta - \frac{I\_0\alpha}{R} \\\\
\Rightarrow & MR\alpha + \frac{I\_0\alpha}{R}= Mg\sin\theta  \\\\
\Rightarrow & \alpha\left(MR + \frac{I\_0}{R}\right)= Mg\sin\theta  \\\\
\Rightarrow & \alpha\left(\frac{MR^2+I\_0}{R}\right)= Mg\sin\theta  \\\\
\Rightarrow & \alpha= Mg\sin\theta \left(\frac{R}{MR^2+I\_0}\right) \\\\
\Rightarrow & \alpha= R\left\frac{Mg\sin\theta }{MR^2+I\_0}\right\ \blacksquare
\end{align}

We can see that the expression derived here is exactly the same as that found with energetic methods above.

We can figure \\(a\_{CM}\\) by simply multiplying again the above expression with \\(R\\):

\begin{equation}
   a\_{CM} = R^2\left\frac{Mg\sin\theta }{MR^2+I\_0}\right\ \blacksquare
\end{equation}


### Time to reach bottom {#time-to-reach-bottom}

We can figure the time to reach bottom by integrating \\(a\_{CM}\\) twice then solving for time.

\begin{equation}
   \iint R^2\left\frac{Mg\sin\theta }{MR^2+I\_0}\right\ dt
\end{equation}

Now, we understand that the initial velocity and position of the object is \\(0\\). Hence:

\begin{equation}
   \iint R^2\left\frac{Mg\sin\theta }{MR^2+I\_0}\right\ dt = R^2\left\frac{Mg\sin\theta }{MR^2+I\_0}\right \frac{t^2}{2}
\end{equation}

To figure the time at the bottom of the ramp, we solve the above-derived expression for travel throughout the length of the ramp:

\begin{align}
    &\left\frac{R^2Mg\sin\theta }{MR^2+I\_0}\right \frac{t^2}{2} = \frac{h}{\sin\theta} \\\\
\Rightarrow\ &t^2 = \frac{MR^2+I\_0}{R^2Mg\sin\theta }\frac{2h}{\sin\theta} \\\\
\Rightarrow\ &t = \sqrt{\frac{MR^2+I\_0}{R^2Mg\sin\theta }\frac{2h}{\sin\theta} }\\\\
\Rightarrow\ &t = \frac{1}{R\sin\theta} \sqrt{\frac{2h(MR^2+I\_0)}{Mg}}\ \blacksquare
\end{align}


### Angular Velocity at the Bottom {#angular-velocity-at-the-bottom}

We can figure the angular velocity at the bottom by taking a single integral of the expression for angular acceleration, then supplying the right-derived expression for \\(t\\).

\begin{equation}
\int \alpha\ dt = \omega = tR\left\frac{Mg\sin\theta }{MR^2+I\_0}\right
\end{equation}

Supplying the expression for \\(t\\) above herein:

\begin{align}
    \omega\_f &= R\left(\frac{1}{R\sin\theta} \sqrt{\frac{2h(MR^2+I\_0)}{Mg}}\right)\left\frac{Mg\sin\theta }{MR^2+I\_0}\right\\\\
&= \sqrt{\frac{2h(MR^2+I\_0)}{Mg}}\left\frac{Mg}{MR^2+I\_0}\right\\\\
&= \sqrt{\frac{2h(MR^2+I\_0)}{Mg}}\sqrt{\left(\frac{Mg}{MR^2+I\_0}\right)^2}\\\\
&= \sqrt{\frac{2Mgh}{MR^2+I\_0}}\ \blacksquare
\end{align}

We can see that this result agrees with that above.


## Foods for Thought {#foods-for-thought}

-   The object is currently rolling perfectly; apart from counteracting slide, friction does not translate the point of contact (otherwise, it would be doing sliding) at all---hence doing no work.
-   The slope of the ramp, \\(\theta\\) is not in the expression for \\(\omega\_f\\) --- meaning it has no influence on the final angular velocity.


## A table! {#a-table}

| Here | Is   | a                                                           | table |
|------|------|-------------------------------------------------------------|-------|
| its  | just | [Authoritarianism]({{< relref "KBhauthoritarianism.md" >}}) | 12    |
| 3    | 31   | ia                                                          | 4     |