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


### Bump Allocator {#bump-allocator}

Silliest [Heap allocator](#heap-allocator). You maintain a pointer that's the root of the memory being used, and each time you get memory we bump that pointer forward. Free does nothing.

Maximum throughput (you like, just allocate heap), but bad utilization.
