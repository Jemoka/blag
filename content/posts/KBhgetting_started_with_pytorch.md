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

****This document is meant to be read cover-to-cover. It makes NO SENSE unless read like that. I focus on building intuition about why PyTorch works, so we will be writing unorthodox code until the very end where we put all ideas together.****

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

---

!!!!!!!!the rest of this document is in construction!!!!!!!

TODO explain what this means.


## Gradient Descent {#gradient-descent}

Ok but manually applying these gradients is kind of hard and also rather silly. To actually do it slowly and measurably, we use optimizer.

```python
import torch.optim as optim
```

To start an optimizer, you give it all the variables for which it should keep track of updating.

```python
optim = torch.optim.SGD([var_1, var_2], lr=1e-2, momentum=0.9)
```

And then, to update gradients, you just have to:

```python
optim.step()
# IMPORTANT
optim.zero_grad()
```

What's that `zero_grad`? That clears the gradients from the variables (after applying them with `.step()`) so that the next update doesn't influence the current one.


## Your First Neural Network {#your-first-neural-network}

```python
import torch.nn as nn
```


### Layers {#layers}

```python
m = nn.Linear(20, 30)
input = torch.randn(128, 20)
output = m(input)
output, output.size()
```

Explain what the \\(20, 30\\) means.

Ok one layer is just lame. What if you want a bunch of layers?

```python
m1 = nn.Linear(20, 30)
m2 = nn.Linear(30, 30)
m3 = nn.Linear(30, 40)
input = torch.randn(128, 20)

# function call syntax! Functions call from rigth to left!
output = m3(m2(m1(input)))
output, output.size()
```

And guess what? If you want to adjust the values here, you would just do:

```python
m1 = nn.Linear(20, 30)
m2 = nn.Linear(30, 30)
m3 = nn.Linear(30, 40)
input = torch.randn(128, 20)

# function call syntax! Functions call from rigth to left!
output = m3(m2(m1(input)))
(output.sum() - 12).backward()
```

```text
None
```

But wait! What are the options you give to your optimizer?

```python
optim = torch.optim.SGD([m1.weight, m1.bias ... ... ], lr=1e-2, momentum=0.9)
```

That's a _lot of variables!!_ Each linear layer has a \\(m\\) and a \\(b\\) (from \\(y=mx+b\\) fame), and you will end up with a bajillon one of those! Also, that function call syntax, chaining one layer after another, is so knarly! Can we do better? Yes.


### An Honest-to-Goodness Neural Network {#an-honest-to-goodness-neural-network}

PyTorch makes the `module` framework to make model creator's lives easier. This is the best practice for creating a neural network.

Let's replicate the example above with the new `module` framework:

```python
class MyNetwork(nn.Module):
    def __init__(self):
        # important: runs early calls to make sure that
        # the module is correct
        super().__init__()

        # we declare our layers. We don't use them yet.
        self.m1 = nn.Linear(20,30)
        self.m2 = nn.Linear(30,30)
        self.m3 = nn.Linear(30,40)

    # this is a special function that is called when
    # the module is called
    def forward(self, x):
        # we want to pass our input through to every layer
        # like we did before, but now more declaritively
        x = self.m1(x)
        x = self.m2(x)
        x = self.m3(x)

        return x
```

Explain all of this.

But now, we essentially built our entire network in own "layer" (actually we literally did, all =Layer=s are just =torch.Module=s) that does the job of all other layers acting together. To use it, we just:

```python
my_network = MyNetwork()
input = torch.randn(128, 20)

# function call syntax! Functions call from rigth to left!
output = my_network(input)
output
```

```text
tensor([[-0.1694,  0.0095,  0.4306,  ...,  0.1580,  0.2644,  0.1509],
        [-0.2346, -0.0269, -0.1191,  ...,  0.0229, -0.0819, -0.1452],
        [-0.4871, -0.2868, -0.2488,  ...,  0.0637,  0.1832,  0.0619],
        ...,
        [-0.1323,  0.2531, -0.1086,  ...,  0.0975,  0.0426, -0.2092],
        [-0.4765,  0.1441, -0.0520,  ...,  0.2364,  0.0253, -0.1914],
        [-0.5044, -0.3263,  0.3102,  ...,  0.1938,  0.1427, -0.0587]],
       grad_fn=<AddmmBackward0>)
```

But wait! What are the options you give to your optimizer? Surely you don't have to pass `my_network.m1.weight`, `my_network.m1.bias`, etc. etc. to the optimizer, right?

You don't. One of the things that the `super().__init__()` did was to register a special function to your network class that keeps track of everything to optimize for. So now, to ask the optimizer to update the entire network, you just have to write:

```python
optim = torch.optim.SGD(my_network.parameters(), lr=1e-2, momentum=0.9)
optim
```

```text
SGD (
Parameter Group 0
    dampening: 0
    differentiable: False
    foreach: None
    lr: 0.01
    maximize: False
    momentum: 0.9
    nesterov: False
    weight_decay: 0
)
```

TODO make students recall original backprop example, backprope and step and zero_grad with this new optim.

Look! Optimizing an entire network works in the _exact same way_ as optimizing two lone variables.


## Putting it together {#putting-it-together}

TODO

1.  training loop (zero first, call model, get diff/loss, .backward(), .step())
2.  best practices
3.  saving and restoring models
4.  GPU