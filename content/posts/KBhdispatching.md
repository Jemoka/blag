+++
title = "dispatching"
author = ["Houjun Liu"]
draft = false
+++

"how does an operating system track threads and processes"

see [process control block]({{< relref "KBhprocess_control_block.md" >}})


## traps and interrups {#traps-and-interrups}

Bad problem: **the operating system can't be running when a user thread is running**. We can't do thread bookeeping if a user thread is running.


### trap {#trap}

a [trap](#trap) is a scheme to request OS attention explicitly from the user thread, swapping the user process off the CPU.

1.  system calls
2.  errors
3.  page fault (memory errors)


### interrupt {#interrupt}

a [interrupt](#interrupt) takes place outside the current thread, it forces the OS' attention even if the user thread isn't asking for it

1.  character typed at keyboard
2.  completion of a disk operations
3.  a hardware timer that fires an interrupt


## dispatcher {#dispatcher}

a [dispatcher](#dispatcher) performs a [context switch](#context-switch), which


### context switch {#context-switch}

1.  (in asm) push **all [register]({{< relref "KBhassembly.md#register" >}})s** except `%rsp` into the bottom of the old thread's [stack]({{< relref "KBhstack.md" >}})
2.  store the [stack pointer]({{< relref "KBhassembly.md#stack-pointer" >}}) `%rsp` into the [process control block]({{< relref "KBhprocess_control_block.md" >}}) for that process corresponding to thread
3.  read the new thread's stack pointer from the [process control block]({{< relref "KBhprocess_control_block.md" >}}), and load that into `%rsp`
4.  (in asm) pop **all [register]({{< relref "KBhassembly.md#register" >}})s** stored on the bottom of our new stack back onto the registers

remember to push and pop the [register]({{< relref "KBhassembly.md#register" >}})s in the same order.... otherwise the registers won't be in the right order.

this makes a [context switch](#context-switch) a function that **calls on one thread** and **returns on another thread**.

Example:

context switch

```asm
    pushq %rbp
    pushq %rbx
    pushq %rip
    pushq %r14
    pushq %r15
    ;; pushq all of em ...
    movq %rsp, [somewhere in PCB, thread 1]                  ; the process control block
    movq [somewhere else in PCB, thread 2], %rsp             ; the stack is now somewhere else
    ;; now we pop backwards up from the stack
    ;; popq all of em ...
    popq %r15
    popq %r14
    popq %rip
    popq %rbx
    popq %rbp
    ;; this will RETURN to the last call *or* top of context_switch() of the
    ;; **THREAD 2**, because we moved the stack pointer by movq into
    ;; %rsp, we will return to the NEW thread's last executed position
    ret
```


#### what if the thread is new? {#what-if-the-thread-is-new}

We can't `ret` to a function that never called `context_switch`, which is the case for **new threads**.

To do this, we create a fake freeze frame on the stack for that new thread, and calls `context_switch` normally.