+++
title = "SU-CS361 APR252024"
author = ["Houjun Liu"]
draft = false
+++

## Linear Constraint Optimization {#linear-constraint-optimization}

\begin{align}
\min\_{x}\ &c^{\top} x \\\\
s.t.\ &Ax \leq b \\\\
& x \geq 0
\end{align}

-   linear objective function
-   linear constraints

single our inequality forms a half-space; the entire [feasible set]({{< relref "KBhsu_cs361_apr022024.md#formal-formulation-of-optimization" >}}) is denoted by a series of linear functions----these linear equalities are each **CONVEX**.

This makes a [Linear Program](#linear-constraint-optimization) have a single minimum.


### 3 cases of design points {#3-cases-of-design-points}

1.  **points on the interior of feasible set** is always non-optimal, because we can always move along \\(c\\) gradient
2.  **points on the faces** could be optimal IFF the face is perpendicular to \\(c\\), the gradient of our objective function---but you can always slide along the face, making there be _infinite solutions_ if its on a face (because \\(c\\) doesn't change along that face)
3.  **points on vertex** could be optimal


### linear program equality form {#linear-program-equality-form}

\begin{align}
\min\_{x}\ &c^{\top} x \\\\
s.t.\ &Ax = b \\\\
& x \geq 0
\end{align}

We can transpose our standard-form expression into an equality form above by introducing another "slack variable" \\(s\\), such that we write:

\begin{equation}
Ax \leq b \implies Ax + s = b
\end{equation}

and introducing \\(s > 0\\) as another constraint.


### [FONC]({{< relref "KBhsu_cs361_apr042024.md#first-order-necessary-condition" >}}) for linear program {#fonc--kbhsu-cs361-apr042024-dot-md--for-linear-program}

To convert a linear program into a unconstrained program---

Recall our [KKT Conditions]({{< relref "KBhsu_cs361_apr182024.md#kkt-conditions" >}}):

\begin{align}
\mathcal{L} = c^{\top} x - \mu^{\top} - \lambda^{\top} (Ax - b)
\end{align}

-   feasibility: \\(Ax = b, x \geq 0\\) (satisfies our constraints)
-   dual feasibility: \\(\mu \geq 0\\)
-   complementary slackness: \\(u \odot x = 0\\)
-   stationarity: \\(A^{\top}\lambda + \mu = c\\)

So:

\begin{equation}
\min\_{x} \max\_{\mu \geq 0, \lambda} \mathcal{L}(x,\mu)
\end{equation}

For linear programs, is that [FONC]({{< relref "KBhsu_cs361_apr042024.md#first-order-necessary-condition" >}}) are sufficient by themselves!


## vertex partitioning {#vertex-partitioning}

Consider \\(n\\), the number of design variables \\(x\\); and \\(m\\), the number of equality constraints in [linear program equality form](#linear-program-equality-form); the number of vertices gives \\(n-m\\).

We can map each of our vertices to a basis by chopping off some dimensions and applying our map \\(A\\).


### get vertex {#get-vertex}

```python
class LinearProgram:
    A, b, c

def get_vertex(basis, LP:LinearProgram):
    A,b,c = LP.A, LP.b, LP.c
    b_indicies = sort(basis)
    AB = A[:,b_inds]
    xB = x
```


## simplex algorithm {#simplex-algorithm}

1.  find vertices
2.  check for [FONC for linear program](#fonc--kbhsu-cs361-apr042024-dot-md--for-linear-program)
3.  if done, return

---


### Phase 1 {#phase-1}

Choose an initial partition which gives an initial vertex:

\begin{align}
\min\_{x,z}\ &\mqty[0^{\top}, 1^{\top}] \mqty[x \\\ z] \\\\
s.t.\ &\mqty[A, Z] \mqty[x \\\ z] = b \\\\
& \mqty[x \\\ z] \geq 0
\end{align}

where:

\begin{equation}
Z\_{ii} = \begin{cases}
1, \text{if}\ b\_{i} \geq  0 \\\\
-1
\end{cases}
\end{equation}

the **partition** obtained by solving this system will give \\(Ax = b\\); if the \\(z\\) returned is _nonzero_, this makes the original problem **infeasible**.

We initialize this system because we have a known initial partition we can solve \\(\mathcal{B} = \\{n+1, ..., n+m\\}\\).

Once we get a final set \\(\mathcal{B}\\), we can then solve the final expression:

\begin{align}
\min\_{x,z}\ &\mqty[c^{\top} & 0^{\top}] \mqty[x \\\ z] \\\\
s.t.\ &\mqty[A & I \\\ 0 & I] \mqty[x \\\ z] = \mqty[b \\\ 0] \\\\
& \mqty[x \\\ z] \geq 0
\end{align}


### Phase 2 {#phase-2}

Consider an initial partition \\(\mathcal{B}\\); choose an entering index \\(q \in \mathcal{V}\\), and a leaving index \\(p \in \mathcal{B}\\), and a leaving index \\(p \in \mathcal{B}\\).

....

\begin{equation}
x\_{\mathcal{B}}' = x\_{\mathcal{B}} - A^{-1}\_{\mathcal{B}} A\_{\\{q\\}} x\_{q}'
\end{equation}

and:

\begin{equation}
c^{\top} x' - c^{\top} x = \mu\_{q} x\_{q}'
\end{equation}

First choose an _entering_ index \\(q\\), then solve for leaving index \\(p\\)

\begin{equation}
x\_{q}' = \frac{(x\_{\mathcal{B}})\_{p}}{(A\_{\mathcal{B}}^{-1} A\_{\\{q\\}})\_{p}}
\end{equation}

we then go through each possible candidate \\(q \in \mathcal{V}\\), and within each of those we iterate trough peach possible \\(p \in \mathcal{B}\\), and find the pair \\((p,q)\\) for each \\(q\\) which gives the smallest ratio above. we then greedily return the swap pair which minimizes \\(\mu\_{q} x\_{q}'\\).

We can solve for our lagrange multiplies by:

\begin{equation}
\lambda = A^{-\top}\_{\mathcal{B}} c\_{\mathcal{B}}
\end{equation}

and:

\begin{equation}
u\_{\mathcal{V}} = c\_{\mathcal{V}} - A^{\top}\_{\mathcal{V}} \lambda
\end{equation}

A node is a candidate \\(q\\) if \\(u\_{\mathcal{V}}[q] < 0\\) , which is the only one that satisfies FONC.
