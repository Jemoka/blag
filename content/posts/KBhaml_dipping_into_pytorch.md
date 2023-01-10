+++
title = "AML: Dipping into PyTorch"
author = ["Houjun Liu"]
draft = false
layout = "nobrand"
+++

Hello! Welcome to the series of guided code-along labs to introduce you to the basis of using the PyTorch library and its friends to create a neural network! We will dive deeply into Torch, focusing on how practically it can be used to build Neural Networks, as well as taking sideroads into how it works under the hood.


## Getting Started {#getting-started}

To get started, let's open a [colab](https://colab.research.google.com/) and import Torch!

```python
import torch
import torch.nn as nn
```

The top line here import PyTorch generally, and the bottom line imports the Neural Network libraries. We will need both for today and into the future!


## Tensors and AutoGrad {#tensors-and-autograd}

The most basic element we will be working with in Torch is something called a **tensor**. A tensor is a variable, which holds either a single number (**scalar**) or a list of numbers (**vector**), that _can change_. We will see what that means in a sec.


### Your First Tensors {#your-first-tensors}

Let's create two scalar tensors!

```python
var_1 = torch.tensor(3.0, requires_grad=True)
var_2 = torch.tensor(4.0, requires_grad=True)

var_1, var_2
```

```text
(tensor(3., requires_grad=True), tensor(4., requires_grad=True))
```

We initialized two numbers, `3`, which we named `var_1`, and `4`, which we named `var_2`.

The value `requires_grad` here tells PyTorch that these values can change, which we need it to do... very shortly!

First, though, let's create a **latent** variable. A "latent" value is a value that is the _result_ of operations on other non-latent tensors. For instance, if I multiplied our two tensors together, we can create our very own latent tensor.

```python
my_latent_value = var_1*var_2
my_latent_value
```

```text
tensor(12., grad_fn=<MulBackward0>)
```

Evidently, \\(3 \cdot 4 = 12\\).


### Autograd {#autograd}

Now! The beauty of PyTorch is that we can tell it to set any particular latent variable to \\(0\\) (Why only \\(0\\), and \\(0\\) specifically? Calculus; turns out this limitation doesn't matter at all, as we will see), and it can update all of its constituent tensors with `required_grad` "True" such that the latent variable we told PyTorch to set to \\(0\\) indeed becomes \\(0\\)!

This process is called "automatic gradient calculation" and "backpropagation." (Big asterisks throughout, but bear with us. Find Matt/Jack if you want more.)

To do this, we will leverage the help of a special optimization algorithm called **stochastic gradient descent**.

Let's get a box of this stuff first:

```python
from torch.optim import SGD

SGD
```

```text
<class 'torch.optim.sgd.SGD'>
```

Excellent. By the way, from the `torch.optim` package, there's tonnes (like at least 20) different "optimizer" algorithms that all to the same thing ("take this latent variable to \\(0\\) by updating its constituents please") but do them in important different ways. We will explore some of them through this semester, and others you can Google for yourself by looking up "PyTorch optimizers".

Ok, to get this SGD thing up and spinning, we have to tell it every tensor it gets to play with in a list. For us, let's ask PyTorch SGD to update `var_1` and `var_2` such that =