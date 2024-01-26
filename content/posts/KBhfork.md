+++
title = "fork"
author = ["Houjun Liu"]
draft = false
+++

[fork]({{< relref "KBhfork.md" >}}) creates a second process that is an exact **clone** from the first.

The original process is called the **parent**, the child process is called the **child**. The **child** comes in at the next instruction after fork. This means that fork **calls once, returns twice**. **After `fork`, the execution order between both processes is completely up to the OS.** After fork, we cannot assume execution order.

Fork's **return value** is different between parent and child:

-   in parent, fork will return the PID of the child process
-   in the child, fork will return \\(0\\), you can get PID by calling `getpid`, and get parent ID through `getppid`.
-   if its \\(-1\\), something failed


## things that are duplicated {#things-that-are-duplicated}

-   fire descriptor table
-   mapped memory regions (both stack and heap)


## shell {#shell}

a [shell](#shell) forks off a child to run the command.

```C
while (true) {
    char *command = "ls";

    pid_t child_pid = fork();
    if (!child_pid) {
        // this is the child
        run_command(command);
        exit(0);
    }

    wait_to_finish(child_pid);

    // do cleanup
```


## fork mechanics {#fork-mechanics}

The act of copying stack and heap sounds really really expensive. So.... Whapppens?

Each program thinks its is given all memory addresses to use; the OS maps the "virtual addresses" to the main address. So, when the fork happens, the virtual address space stays the same. The child will map the parent's memory addresses to **different** physical addresses than for the parent.

The copies are **LAZY**---if the child writes to an area in memory, its virtual address are mapped to different addresses. If no writes by the child happen, the virtual address are mapped to the same address.
