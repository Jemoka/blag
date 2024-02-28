+++
title = "virtual memory"
author = ["Houjun Liu"]
draft = false
+++

We are trying to share a resource: memory; memory allows multiple processes to use a share pool of memory.


## key goals {#key-goals}

-   **multitasking**: multiple processes should be able to use memory
-   **transparency**: no process need to know that memory is shared; each process should be able to run regardless of the number/locations of processes
-   **isolation**: processes shouldn't be able to corrupt other processes' memory
-   **efficiency**: shouldn't be degraded by sharing


## virtual memory {#virtual-memory}

The operating system will translate **virtual** addresses (which are 0 based for every program, which isn't a problem) to **physical** addresses in memory.

-   the OS doesn't need to map all virtual addresses unless its needed (i.e. if the program is asking for it)
-   worst case: we can kick out unused memory into disk, and load it back when needed

This is an example of [virtualization]({{< relref "KBhvirtual_memory.md" >}}).


## dynamic address translation {#dynamic-address-translation}

The system will die if we try to do virtual mapping to physical mapping.

So we have a [Memory Management Unit](#dynamic-address-translation) ([MMU](#dynamic-address-translation)) to do:

How does an [MMU](#dynamic-address-translation) work?


### base and bound {#base-and-bound}

This is basically [load-time relocation](#load-time-relocation), but with [virtual memory]({{< relref "KBhvirtual_memory.md" >}}).

-   assign a location in physical memory, call the **base**; during translation, we just add every virtual address by the **base**
-   we can cap the virtual address space for each process by a **bound**, we can raise a bus error/segfault if it goes above the highest allowable

The **bound** is a virtual address (the first invalid address in the virtual world), whereas the **base** is a physical address. This is both stored in the **process control block**.


#### translation {#translation}

-   compare virtual address to bound, [trap]({{< relref "KBhdispatching.md#trap" >}}) and raise if &gt;= **bound**
-   then, return virtual address + **base**

importantly, we can arbitrary adjust base and bound.


#### tradeoff {#tradeoff}

<!--list-separator-->

-  good news

    -   **inexpensive**: just doing addition
    -   **doesn't require additional space**: (just two addresses)
    -   **separation**: [virtualization]({{< relref "KBhvirtual_memory.md" >}}).

<!--list-separator-->

-  bad news

    -   **one contiguous region**: need to allocate free spcae
    -   **fragmentation**: because of the above
    -   **growing can only happens upwards with bounds** (and its kind of useless)---we can't move the stack up in virtual space
    -   no read only memory (we'll want to limit access to code segment)


## why not something simpler? {#why-not-something-simpler}


### single-tasking memory {#single-tasking-memory}

very bad idea:

ASSUME that there is only one process. Stack grows down, data grows up, and code sits at the bottom.


#### tradeoff {#tradeoff}

-   **no isolation**: even in this case, nothing is stopping the program from accessing memory in the OS reserve segment; which is bad.
-   **no multitasking**: because, well, we have one program


### load-time relocation {#load-time-relocation}

separate processes.

When program is compiled, it assumes that its initial address is `0x0`; so, at load time, we have to go into the code segment when the program is set up and increment all of its memory addresses up.


#### tradeoff {#tradeoff}

-   **no isolation**: nothing is stopping the program from accessing memory in otherbody's segments
-   must decide the memory usage of a program ahead of time + cannot grow if needs more memory (we can't move because the addresses would be in stack)
-   external fragmentation (normal alloc problems)
