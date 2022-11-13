+++
title = "Getting Started with PyTorch"
author = ["Houjun Liu"]
tags = ["guide"]
draft = false
layout = "blank"
+++

(Py)Torch is a great C++/Python library to construct and train complex neural networks. It has taken over academia over the last few years:

{{< figure src="/ox-hugo/2022-11-12_23-39-31_screenshot.png" >}}

([source](https://paperswithcode.com/trends))

and is slowly taking over industry. Let's learn about how it works!

The chapters below take you through large chapters in a machine-learning journey. But, to do anything, we need to import some stuff which we will need:

```python
import numpy as np
import torch
```


## Autograd {#autograd}

I believe that anybody learning a new ML framework should learn how its differentiation tools work. Yes, this means that we should first understand how it works with not a giant matrix, but with just two simple variables.

At the heart of PyTorch is the built-in gradient backpropagation facilities. To demonstrate this, let us create two such variables.

```python
var_1 = torch.tensor(3.0, requires_grad=True)
var_2 = torch.tensor(4.0, requires_grad=True)

(var_1, var_2)
```

```text
(tensor(3., requires_grad=True), tensor(4., requires_grad=True))
```

There is secretly a lot going on here, so let's dive in. First, just to get the stickler out of the way, `torch.tensor` (used here) is the generic variable creator, `torch.Tensor` (capital!) initializes a proper tensor---which you will **never** need.

What is a `tensor`? A `tensor` is simply a very efficient matrix that can updates its own values dynamically but keep the same variable name. The above commands creates two such `tensor`, both being `1x1` matrices.

Note that, for the initial values, I used _floats!_ instead of _ints_. The above code will crash if you use ints: this is because we want the surface on which the matrix changes value to be smooth to make things like gradient descent to work.

Lastly, we have an argument `requires_grad=True`. This argument tells PyTorch to keep track of the gradient of the `tensor`. For now, understand this as "permit PyTorch to change this variable if needed." More on that in a sec.

Naturally, if we have two tensors, we would love to multiply them!

```python
var_mult = var_1*var_2
var_mult
```

```text
tensor(12., grad_fn=<MulBackward0>)
```

Wouldyalookatthat! Another tensor, with the value \\(12\\).

Now. Onto the main event. Backpropagation! The point of backprop is that, by just telling Torch that you want one variable in your network to be some value, it can adjust ("proper gate backwards") all other variables which contributed to the value of that variable to make sure that reapplying the same computations would arrive at the new, desired values.

Let's see a practical example. What if we want `var_mult` to be... \\(7\\)? Recall that there are two variables that contributed to the current value of `var_mult`: 1) `var_1` and 2) `var_2` (because `var_mult` is just the product of those variables!)

We don't want to be numpties and go about adjusting `var_1` and `var_2` ourselves to get `var_mult` to be \\(7\\). That's so lame! We want to let _PyTorch_ do it for us---through the magic of backpropagation.

Let's first of all figure out how much we need to adjust `var_mult` in the first place:

```python
diff = var_mult-3
diff
```

```text
tensor(9., grad_fn=<SubBackward0>)
```

Apparently, \\(12\\) is \\(5\\) away from \\(7\\). Our goal now is to ask PyTorch to adjust `var_1` and `var_2` accordingly to make that difference \\(0\\) (i.e. to make `var_mult` not different at all from \\(7\\).)

Now, this is the beauty of PyTorch. To do this, we just write....

```python
diff.backward()
```

```text
None
```

Woosh! Now, PyTorch has't actually changed anything---

```python
var_mult
```

```text
tensor(12., grad_fn=<MulBackward0>)
```

but, what it did was add a `.grad` option to each of our variables for which we told that it could update (i.e. that has a `requires_grad` option.)

Let's take a look at those variables:

```python
(var_1.grad, var_2.grad)
```

```text
(tensor(4.), tensor(3.))
```