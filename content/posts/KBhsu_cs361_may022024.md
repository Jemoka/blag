+++
title = "SU-CS361 MAY022024"
author = ["Houjun Liu"]
draft = false
+++

[Preference Elicitation]({{< relref "KBhpreference_elicitation.md#preference-elicitation" >}})


## Sampling Plans {#sampling-plans}

Many methods requires knowing a series of samples of the objective value to calculate local model or population methods, so...


### Full Factorial {#full-factorial}

Grid it up.

-   easy to implement
-   good results
-   bad: sample count grows exponentially with dimension


### Random Sampling {#random-sampling}

Use a pseudorandom generator to pick points in your space.

-   allows for any number of evaluations you specify
-   statistically, **the points clump** when you do this!
-   also need lots of samples to get good coverage


### Uniform Projection {#uniform-projection}

We take each point, and uniformly project it onto each dimension. To implement this, we grid up each dimension and shuffle the ordering of each dimension individually. Then, we read off the coordinates to create the points:

```python
# in d3...

seq = range(axis_min, axis_max)

d1 = random.shuffle(seq)
d2 = random.shuffle(seq)
d3 = random.shuffle(seq)

sampling_points = zip(d1, d2, d3)
```


### Stratified Sampling {#stratified-sampling}

-   perform [Uniform Projection](#uniform-projection)
-   within each grid, make smaller grids and perform within them [Uniform Projection](#uniform-projection) again


## Space-Filling Metrics {#space-filling-metrics}


### Pairwise Distances {#pairwise-distances}

This requires each set to have the **same number of points**

-   figure the euclidian distance between every pair of points
-   for each set of pairs, figure the closest together points, and call that the "pairwise distance" of the set

Limitation: if there are just two points that are close together, this metric scores it worse. So maybe [Morris-Mitchell](#morris-mitchell).


### Morris-Mitchell {#morris-mitchell}

We have a hype-parameter \\(q\\), which checks all of the possible norms to use between points. Consider \\(d\_{i}\\) to be the ith-pairwise distance between the points with the [Lp Norm]({{< relref "KBhlp_norm.md" >}}) for your choice of \\(p\\). Then, for:

\begin{equation}
\Phi\_{q}(X) = \qty(\sum\_{i}^{}d\_{i}^{-q})^{\frac{1}{q}}
\end{equation}

and we try to solve for our set of points \\(X\\) such that:

\begin{equation}
\min\_{X} \max\_{q \in \\{1,2,5,10,20,50,100\\}} \Phi\_{q}(X)
\end{equation}

"minimize the distance at the worst \\(q\\) possible norm"


### Space-Filling Subset {#space-filling-subset}

A [Space-Filling Subset](#space-filling-subset) is a subset \\(S\\) of a point set \\(X\\) which **minimizes the maximum distance** between a point in \\(S\\) and its closest point in \\(X\\) (i.e. making \\(S\\) a good representative of \\(X\\)).

\begin{equation}
d\_{\max}(X,S) = \max\_{x \in X} \min\_{s \in S} |s -x|\_{p}
\end{equation}

we can choose any \\(p\\) norm you'd like.


#### greedy local search {#greedy-local-search}

Choosing one best point to add to \\(S\\) which maximize \\(d\_{\max}\\), and then choose another point, and another one, ...


#### exchange algorithm {#exchange-algorithm}

randomly initialize \\(S\\), and swap points within \\(S\\) and only in \\(X\\)


## Surrogate Models {#surrogate-models}

Once we finished sampling, we need to create a model parameterized by \\(\theta\\) which minimizes the error. In particular, we want to choose \\(\theta\\) such that:

\begin{equation}
\min\_{\theta} |y - \hat{y}|\_{p}
\end{equation}

for some model \\(\hat{y}(x)\\), with matching actual result \\(y\\).


### Linear Model {#linear-model}

\begin{equation}
\hat{f} = w\_0 + \bold{w}^{\top}\bold{x}
\end{equation}

whereby, we now want:

\begin{equation}
\min\_{\theta} |y - X \theta|\_{2}^{2}
\end{equation}

this is CLOSE FORM! by applying the pseudo-inverse:

\begin{equation}
\theta = X^{\dagger} y
\end{equation}


### Basis Functions {#basis-functions}

We can make this slighlty non-linear by computing some non-zero \\(B(x)\\) where a set of these basis functions all taking \\(x\\) as input (for instance, terms of a polynomial) \\(\bold{B}(\bold{x})\\) is then used for optimization:

\begin{equation}
\min\_{\theta} |y - B \theta|\_{2}^{2}
\end{equation}


#### Radial Basis Functions {#radial-basis-functions}

\begin{equation}
\psi(x,c) = \psi(|x - c|)
\end{equation}

a radial basis function is a basis function that acts on the _distance_ to a local point. You can choose any kernel \\(\psi\\) you'd like.


###  {#d41d8c}

Especially for noisy things, you ideally want some kind of regularization: see


#### L2 Regularization {#l2-regularization}

\begin{equation}
\min\_{\theta} || y - B(x)\theta ||\_{2}^{2} + \lambda  || \theta ||^{2}\_{2}
\end{equation}

this is kind of a like a multi-objective [Weight Method]({{< relref "KBhsu_cs361_apr302024.md#weight-method" >}}).
