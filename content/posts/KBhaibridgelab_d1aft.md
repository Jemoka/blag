+++
title = "AIBridgeLab D1Aft"
author = ["Houjun Liu"]
draft = false
+++

Welcome to the Day-1 Afternoon Lab! We are super excited to work through tasks in linear regression and logistic regression, as well as familiarize you with the Iris dataset.


## Iris Dataset {#iris-dataset}

Let's load the Iris dataset! Begin by importing the `load_iris` tool from `sklearn`. This is an easy loader scheme for the iris dataset.

```python
from sklearn.datasets import load_iris
```

Then, we simply execute the following to load the data.

```python
input_values,output_values = load_iris(return_X_y=True)
```

We use the `return_X_y` argument here so that, instead of dumping a large `CSV`, we get the neat-cleaned input and output values.

Let's inspect this data a little.

```python
input_values[0]
```

|     |     |     |     |
|-----|-----|-----|-----|
| 5.1 | 3.5 | 1.4 | 0.2 |

We can see that each `sample` of the data is a vector in \\(\mathbb{R}^4\\). They correspond to four attributes:

-   septal length
-   septal width
-   pedal length
-   pedal width

What's the output?

```python
output_values[0]
```

```text
0
```

We can actually see all the possible values of the output by putting it into a set.

```python
set(output_values)
```

|   |   |   |
|---|---|---|
| 0 | 1 | 2 |

There are three different `classes` of outputs.

-   Iris Setosa
-   Iris Versicolour
-   Iris Virginica

Excellent. So we can see that we have a dataset of four possible inputs and one possible output. Let's see what we can do with it.


## Logistic Regression {#logistic-regression}

The simplest thing we can do is a logistic regression. We have a there _categories_ for output.