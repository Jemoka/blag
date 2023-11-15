+++
title = "memory allocation"
author = ["Houjun Liu"]
draft = false
+++

Utilization vs throughput is conflicting goals.


## Big Picture {#big-picture}

{{< figure src="/ox-hugo/2023-11-13_10-56-33_screenshot.png" >}}

OS:

-   creates new process
-   sets up address space/segments
-   read the executable, load instructions, global data
-   libraries gets loaded

Complier:

-   set up stack

Heap Allocator: "Sandbox of bytes"

-   initialize the heap


## heap allocation: client {#heap-allocation-client}

```c
void *malloc(size_t size);
```

Returns a pointer to a block of heap memory of at least size `bytes`, or `NULL` if an error occurred.

```C
void free(void *ptr);
```

Frees the heap-allocated block starting at the specific address.

```C
void *realloc(void *ptr, size_t size);
```

Changing the size of a pointer and realloc if needed


## Heap allocator {#heap-allocator}

Upon initialization, a large contiguous block of memory is initialized as a whole and called the "heap". If we run out of it, we double the amount of memory being allocated.

1.  handling arbitrary requests of mallocs/realloc and frees
2.  keep track of what's been allocated and what's free
3.  decide which segment of memory to use when fulfilling an allocating request
4.  respond quickly
5.  Return addresses that are 8-byte aligned (native types must be stored at a memory location which is a multiple of its size; otherwise bus error)

Two main goals:

-   maximize throughput: we want to make number of requests per unit of time large ("we want the largest address in use to be as low as possible")
-   maximize utilization: we want to use memory economically without fragmenting it

These two goals seems to be conflicting: it may take longer to plan out heap memory use for each request if we want to have perfect.


### Design Questions {#design-questions}

1.  how do we keep track of blocks that are freed
2.  how do we choose which free block to satisfy an allocation request
3.  after we choose a free block, how do we deal with the excess

4.  can we avoid searching all blocks for the free blocks to reuse?
5.  can we merge adjacent free blocks to keep large space available?
6.  Can we avoid always coping/moving data?


### Bump Allocator {#bump-allocator}

Silliest [Heap allocator](#heap-allocator). You maintain a pointer that's the root of the memory being used, and each time you get memory we bump that pointer forward. Free does nothing.

Maximum throughput (you like, just allocate heap, and free is very easy), but bad utilization.


### Implicit Free List Allocator {#implicit-free-list-allocator}

In this implementation, the block structure implies what has been freed. We used to store this into a global data structure, but that's bad because there is too much memory overhead. Instead, we place a 8-byte "header" in front of each block of memory containing whether its free or in use + its payload size. Through reading all the headers, we essentially maintain an implicit list of free nodes.

Now, the 8 byte system for memory + free status doesn't sound right. Recall memory addresses themselves are 8-bytes; however, all of our memory is 8-byte aligned. So, the first three bits should be 0.

Therefore, we pack free status in the firs tbit, ignore the next two, do store the memory in the rest


#### "which one do you alloc" {#which-one-do-you-alloc}

-   **First fit**: start from the beginning, and search for the first free block you come across to serve the request
-   **Next fit**: continuing search starting at the end point of your last malloc until you get the first free block, when you hit the end, go back around
-   **Best fit**: examine every free block and find the one with the smallest size that fits

Best fit minimizes fragmentation; next fit optimizes speed


#### edge case {#edge-case}

if you run out of space in the end, with an awkward 8 byte in the end, you can either make a 0-byte block or just give the last bit of memory to the previous one.


### Explicit Free List Allocator {#explicit-free-list-allocator}

Can we design an allocator to jump between free blocks. Naively doing this is bad.

Instead, we can constrain each block to be at least size 16. And then, we will put the pointers to the prev/next free nodes in the next two 8-byte payload.
