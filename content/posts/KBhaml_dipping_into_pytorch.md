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

Ok, to get this SGD thing up and spinning, we have to tell it every tensor it gets to play with in a list. For us, let's ask PyTorch SGD to update `var_1` and `var_2` such that `my_latent_value` (which, remember, is var1 times var2) becomes a new value.

---

Aside: **learning rate**

Now, if you recall the neural network simulation, our model does not reach the desired outcome immediately. It does so in _steps_. The size of these steps are called the **learning rate**; the LARGER these steps are, the quicker you will get _close_ to your desired solution, but where you end up getting maybe farther away from the actual solution; and vise versa.

Think about the learning rate as a hoppy frog: a frog that can hop a yard at a time ("high learning rate") can probably hit a target a mile away much quicker, but will have a hard time actually hitting the foot-wide target precisely; a frog that can hop an inch at a time ("low learning rate") can probably hit a target a mile away.... years from now, but will definitely be precisely hitting the foot-wide target when it finally gets there.

So what does "high" and "low" mean? Usually, we adjust learning rate by considering the number of decimal places it has. \\(1\\) is considered a high learning rate, \\(1 \times 10^{-3} = 0.001\\) as medium-ish learning rate, and \\(1 \times 10^{-5}=0.00001\\) as a small one. There are, however, no hard and fast rules about this and it is subjcet to experimentation.

---

So, choose also an appropriate **learning rate** for our optimizer. I would usually start with \\(3 \times 10^{-3}\\) and go from there. In Python, we write that as `3e-3`.

So, let's make a SGD, and give it `var_1` and `var_2` to play with, and set the learning rate to `3e-3`:

```python
my_sgd = SGD([var_1, var_2], lr=3e-3)
my_sgd
```

```text
SGD (
Parameter Group 0
    dampening: 0
    differentiable: False
    foreach: None
    lr: 0.003
    maximize: False
    momentum: 0
    nesterov: False
    weight_decay: 0
)
```

Wonderful. Don't worry much about how many of these means for now; however, we will see it in action shortly.

Now! Recall that we allowed `my_sgd` to mess with `var_1` and `var_2` to change the value of `my_latent_value` (the product of `var_1` and `var_2`).

Current, `var_1` and `var_2` carries the values of:

```python
var_1, var_2
```

```text
(tensor(3., requires_grad=True), tensor(4., requires_grad=True))
```

And, of course, their product `my_latent_value` carries the value of:

```python
my_latent_value
```

```text
tensor(12., grad_fn=<MulBackward0>)
```

What if we want `my_latent_value` to be... \\(15\\)? That sounds like a good number. Let's ask our SGD algorithm to update `var_1` and `var_2` such that `my_latent_value` will be \\(15\\)!

Waaait. I mentioned that the optimizers can only take things to \\(0\\). How could it take `my_latent_value` to \\(15\\) then? Recall! I said SGD takes _a_ latent variable to \\(0\\). So, we can just build another latent variable such that, when `my_latent_value` is \\(15\\), our new latent variable will be \\(0\\), and then ask SGD optimize on that!

What cloud that be... Well, the _difference_ between \\(15\\) and `my_latent_value` is a good one. If `my_latent_value` is \\(15\\), the _difference_ between it and \\(15\\) will be \\(0\\), as desired!

Turns out, the "objective" for SGD optimization, the thing that we ask SGD to take to \\(0\\) on our behalf by updating the parameters we allowed it to update (again, they are `var_1` and `var_2` in our case here), is called the **loss**. We used the "subtract from 15" operation here to compute the loss, so "subtract from 15" is our **loss function** for this toy problem. For a multitude of reasons, this loss function is a baaad idea when you are actually doing ML. But for demonstration purposes this is OK.

So let's do it! Let's create a tensor our loss:

```python
loss = 15-my_latent_value
loss
```

```text
tensor(3., grad_fn=<RsubBackward1>)
```

Nice. So our loss is at \\(3\\) right now; when `my_latent_value` is correctly at \\(15\\), our loss will be at \\(0\\)! So, to get `my_latent_value` to \\(15\\), we will ask SGD to take


### So why the heck are we doing all this {#so-why-the-heck-are-we-doing-all-this}


## y=mx+b {#y-mx-plus-b}


## Your First Neural Network {#your-first-neural-network}