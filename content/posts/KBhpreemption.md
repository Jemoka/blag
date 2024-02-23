+++
title = "preemption"
author = ["Houjun Liu"]
draft = false
+++

We use [interrupt]({{< relref "KBhdispatching.md#interrupt" >}})s to implement [preemption]({{< relref "KBhpreemption.md" >}}), "[preempting]({{< relref "KBhpreemption.md" >}})" threads in order to swap on another thread to CPU. This enables [scheduling]({{< relref "KBhscheduling.md" >}}) to happen.


## preempting into a brand new thread {#preempting-into-a-brand-new-thread}

IMPORTANT: because [interrupt]({{< relref "KBhdispatching.md#interrupt" >}})s are disabled at the beginning of the interrupt handler, and re-enabled by the **end**, new threads (which starts not at the interrupt handle) will not re-enable interrupts.

```C++
void interrupt_handler() {
    /* disables interupts */

    // future spawns start here
    context_switch(...);

    /* enables interupts */
}

void threadfunc() {
    // initial spawn start here (i.e. previous thread's disabling
    //                                of interrupts are not reenabled)
    ...
}
```


## preemption, in detail {#preemption-in-detail}

```C++

void interrupt_handler() {
    /* disables interupts */

    // future spawns start here
    context_switch(...);

    /* enables interupts */
}

void threadfunc_wrapper() {
    // manually enable interrupts before first run
    intr_enable(true);
    // start thread's actual business
    threadfunc();
}
```
