+++
title = "AIBridgeLab D3/D4"
author = ["Houjun Liu"]
draft = false
+++

Woah! We talked about a lot of different ways of doing classification today! Let's see what we can do about this for the Iris dataset!


## Iris Dataset {#iris-dataset}

Let's load the Iris dataset! Begin by importing the `load_iris` tool from `sklearn`. This is an easy loader scheme for the iris dataset.

```python
from sklearn.datasets import load_iris
```

Then, we simply execute the following to load the data.

```python
x,y = load_iris(return_X_y=True)
```

We use the `return_X_y` argument here so that, instead of dumping a large `CSV`, we get the neat-cleaned input and output values.


## Decision Trees {#decision-trees}

Scikit learn has great facilities for using decision trees for classification! Let's use some of them by fitting to the Iris dataset.

Let us begin by importing the SciKit learn tree system:

```python
from sklearn.tree import DecisionTreeClassifier
```

We will fit and instantiate this classifier and fit it to the data exactly!

```python
clf = DecisionTreeClassifier()
clf = clf.fit(x,y)
```

One cool thing about decision trees is that we can actually see what its _doing!_ by looking at the series of splits and decisions. This is a function provided by tree too.

```python
from sklearn.tree import plot_tree
plot_tree(clf)
```