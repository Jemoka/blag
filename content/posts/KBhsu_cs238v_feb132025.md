+++
title = "SU-CS238V FEB132025"
author = ["Houjun Liu"]
draft = false
+++

## Key Sequence {#key-sequence}


## Notation {#notation}


## New Concepts {#new-concepts}


## Important Results / Claims {#important-results-claims}

-   [overapproximate]({{< relref "KBhoverapproximation.md#overapproximation" >}})


## Questions {#questions}


## Interesting Factoids {#interesting-factoids}


## reachability for non-linear systems {#reachability-for-non-linear-systems}

Standard [reachability analysis]({{< relref "KBhreachability_analysis.md#reachability-analysis" >}}) for [Linear Dynamical System]({{< relref "KBhlinear_dynamical_system.md#linear-dynamical-system" >}}) is not great, because [polytope]({{< relref "KBhsu_cs238v_feb112025.md#polytope" >}})s don't stay [polytope]({{< relref "KBhsu_cs238v_feb112025.md#polytope" >}})s when we apply non-linear operations.

The general vibe, then, is to take a non-linear thing and bound them using a [polytope]({{< relref "KBhsu_cs238v_feb112025.md#polytope" >}}).


### interval arithmetic {#interval-arithmetic}

We can't propagate [polytope]({{< relref "KBhsu_cs238v_feb112025.md#polytope" >}})s though non linear systems; but we can propagate intervals.

Suppose we have an interval:

\begin{equation}
[x] = \qty {x \mid x\_1 \leq x \leq x\_2}
\end{equation}

Let's define some operations


#### interval counterpart of addition {#interval-counterpart-of-addition}

\begin{equation}
[x] + [y] = \qty {x+y \mid x \in [x], y \in [y]}
\end{equation}

We could actually compute the interval explicitly:

\begin{equation}
[x] + [y] = [x\_1 + y\_1, x\_2 + y\_2]
\end{equation}

we can just add the intervals together


#### interval counter part of binary operators {#interval-counter-part-of-binary-operators}

\begin{equation}
[x] \cdot [y] = \qty {x \cdot y \mid x \in [x], y \in [y]}
\end{equation}


#### specifically... {#specifically-dot-dot-dot}

\begin{equation}
[x] + [y] = [x\_1 - y\_2, x\_2 - y\_1]
\end{equation}

\begin{equation}
[x] \times [y] = [\min \qty(x\_1y\_1, x\_1y\_2, x\_2y\_1, x\_2y\_2), \max \qty(x\_1y\_1, x\_1y\_2, x\_2y\_1, x\_2y\_2)]
\end{equation}

**notably!** this last thing is not defined if any of the intervals contains \\(0\\).

for [monotone function]({{< relref "KBhnon_linear_ode.md#monotone-function" >}}) **f**:

\begin{equation}
f\qty([x]) = [f\qty(x\_1), f\qty(x\_2)]
\end{equation}


### inclusion functions {#inclusion-functions}

we said above the with [monotone function]({{< relref "KBhnon_linear_ode.md#monotone-function" >}})s we can directly compute the interval \\(f\qty([x])\\). But, we can bound the behavior of \\(f\qty([x])\\) with some "[inclusion function](#inclusion-functions)":

\begin{equation}
f\qty([x]) \subseteq [f]\qty([x])
\end{equation}


#### natural inclusion function {#natural-inclusion-function}

Consider:

\begin{equation}
f\qty(x) = x - \sin  \qty(x)
\end{equation}

we can just "naively" plug in the interval:

\begin{equation}
[f]\qty([x]) = [x] - \sin \qty([x])
\end{equation}

but! this yields a **huge** overapproximation error. This is due to the _dependency effect_, since \\(x\\) and \\(\sin \qty(x)\\) values are not independent!


#### mean value inclusion function {#mean-value-inclusion-function}

applying this  interval \\([x]\\), but weirdly:

given the centerpoint \\(c\\) of the interval \\([x]\\) and any \\(x \in [x]\\), there exists a point \\(x' \in [x]\\) such that:

\begin{equation}
\frac{f\qty(x) - f\qty( c)}{x - c} = f'\qty(x')
\end{equation}

Now, algebra! We now obtain a reparameterized version of the function

\begin{equation}
f\qty(x) = f\qty( c) + f'\qty(x') \qty(x-c)
\end{equation}

applying the natural inclusion function (remember \\(x' \in [x]\\), so)

\begin{equation}
[f]\qty([x]) = f\qty( c) + [f'] \qty([x]) \qty( [x] - c)
\end{equation}

with \\(c = \frac{x\_{\max } + x\_{\min }}{2}\\).

where we take the [natural inclusion function](#natural-inclusion-function) for \\(f'\qty(x)\\).

<!--list-separator-->

-  mean value theorem

    For \\(f\qty(x)\\) that is continuous and differentiable on the interval \\([x]\\), there exists a point \\(x' \in [x]\\) such that:

    \begin{equation}
    \frac{f\qty(x\_{\max}) - f\qty(x\_{\min})}{x\_{\max } - x\_{\min }} = f'\qty(x')
    \end{equation}


#### Taylor inclusion function {#taylor-inclusion-function}

Notice the above [mean value theorem](#mean-value-theorem) gives us a first-order Taylor approximation. We can just add more terms where we explicitly compute \\(f'\\) up to \\(pn\\).

{{< figure src="/ox-hugo/2025-02-13_14-37-44_screenshot.png" >}}
