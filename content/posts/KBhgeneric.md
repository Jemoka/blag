+++
title = "generics"
author = ["Houjun Liu"]
draft = false
+++

We don't want to write the same thing many times; generics minimizes code duplication. Therefore, generics!

Let's implement a simple swap function:

```C
void swap_ptr_values(void *data1ptr, void *data2ptr, size_t datasize) {
}
```


## helper functions {#helper-functions}


### memcpy {#memcpy}

Copy `datasize` bytes worth of memory in the second argument into the first argument. The two arguments **CANNOT OVERLAP** otherwise, you risk UB.

```C
void *memcpy(void *dest, void *src, size_t nbytes)
```


### memmove {#memmove}

Its [memcpy](#memcpy), but it works with overlapping data, and is slower.

```C
void *memove(void *dest, void *src, size_t nbytes)
```
