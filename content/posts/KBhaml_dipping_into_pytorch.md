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

What cloud that be... Well, the _squared difference_ between \\(15\\) and `my_latent_value` is a good one. If `my_latent_value` is \\(15\\), the _squared difference_ between it and \\(15\\) will be \\(0\\), as desired!

Why do we use squared differences? Well, because if we used "normal" difference, it is easy to overshoot the other way and make `my_latent_value` too big! (Because we can overshoot \\(0\\) and get to the negatives. Yet, squaring the difference means we can never accidentally get negative, and so `my_latent_value` will actually be \\(15\\)).

Turns out, the "objective" for SGD optimization, the thing that we ask SGD to take to \\(0\\) on our behalf by updating the parameters we allowed it to update (again, they are `var_1` and `var_2` in our case here), is called the **loss**. We used the "subtract and square" operation here to compute the loss, so "subtract and square", properly called **sum of squared errors**, is our **loss function** for this toy problem.

So let's do it! Let's create a tensor our loss:

```python
loss = (15-my_latent_value)**2
loss
```

```text
tensor(9., grad_fn=<PowBackward0>)
```

Nice. So our loss is at \\(3\\) right now; when `my_latent_value` is correctly at \\(15\\), our loss will be at \\(0\\)! So, to get `my_latent_value` to \\(15\\), we will ask SGD to take `loss` to \\(0\\).

To do this, there are three steps. **COMMIT THIS TO MEMORY**, as it will be basis of literally everything else in the future.

1.  Backpropagate: "please tell SGD to take this variable to \\(0\\), and mark the correct tensors to change"
2.  Optimize: "SGD, please update the marked tensors such that the variable I asked you to take to \\(0\\) is closer to \\(0\\)"
3.  Reset: "SGD, please get ready for step 1 again by unmarking everything that you have changed"

Again! Is it commited to memory yet?

1.  Backprop
2.  Optimize
3.  Reset

I am stressing this here because a _lot_ of people 1) miss one of these steps 2) do them out of order. Doing these in any other order will cause your desired result to not work. Why? Think about what each step does, and think about doing them out of order.

One more time for good luck:

1.  Backprop!
2.  Optimize!
3.  Reset!

Let's do it.


#### Backprop! {#backprop}

Backpropergation marks the correct loss value to take to \\(0\\), and marks all tensors with `requires_grad` set to True which make up the value of that loss value for update.

Secretly, this steps takes the **partial derivative** of our loss against each of the tensors we marked `requires_grad`, allowing SGD to "slide down the gradient" based on those partial derivatives. Don't worry if you didn't get that sentence.

To do this, we call `.backward()` on the loss we want to take to \\(0\\):

```python
loss.backward()
```

```text
None
```

This call will produce nothing. And that's OK, because here comes...


#### Optimize! {#optimize}

The next step is tell SGD to update all of the tensors marked for update in the previous step to get `loss` closer to \\(0\\). To do this, we simply:

```python
my_sgd.step()
```

```text
None
```

This call will produce nothing. But, if you check now, the tensors should updated.

Although... You should't check! Because we have one more step left:


#### Reset! {#reset}

```python
my_sgd.zero_grad()
```

```text
None
```

I cannot stress this enough. People often stop at the previous step because "ooo look my tensors updated!!!" and forget to do this step. THIS IS BAD. We won't go into why for now, but basically not resetting the update mark results in a tensor being updated twice, then thrice, etc. each time you call `.step()`, which will cause double-updates, which will cause you to overshoot (handwavy, but roughly), which is bad.


#### ooo look my tensors updated!!! {#ooo-look-my-tensors-updated}

```python
var_1, var_2
```

```text
(tensor(3.0720, requires_grad=True), tensor(4.0540, requires_grad=True))
```

WOAH! Look at that! Without us telling SGD, it figured out that `var_1` and `var_2` both need to be BIGGER for `my_latent_value`, the product of `var_1` and `var_2` to change from \\(12\\) to \\(15\\). Yet, the product of \\(3.0720\\) and \\(4.0540\\) is hardly close to \\(15\\).

Why? Because our step size. It was _tiny!_ To get `my_latent_value` to be properly \\(15\\), we have to do the cycle of 1) calculating new latent value 2) calculating new loss 3) backprop, optimize, reset, a LOT of times.


### Now do that a lot of times. {#now-do-that-a-lot-of-times-dot}

```python
for _ in range(100):
    my_latent_value = var_1*var_2
    loss = (15-my_latent_value)**2

    loss.backward() # BACKPROP!
    my_sgd.step() # OPTIMIZE!
    my_sgd.zero_grad() # RESET!

var_1, var_2
```

```text
(tensor(3.4505, requires_grad=True), tensor(4.3472, requires_grad=True))
```

Weird solution, but we got there! The product of these two values is indeed very close to \\(15\\)! Give yourself a pat on the back.


### So why the heck are we doing all this {#so-why-the-heck-are-we-doing-all-this}

So why did we go through all the effort of like 25 lines of code to get two numbers to multiply to \\(15\\)?


## y=mx+b {#y-mx-plus-b}


## Your First Neural Network {#your-first-neural-network}