+++
title = "assembly"
author = ["Houjun Liu"]
draft = false
+++

dum, dum, duuuummmmm


## Review: data representation {#review-data-representation}

-   [integer]({{< relref "KBhinteger.md" >}})
-   [char]({{< relref "KBhchar.md" >}})
-   addresses: [unsigned long]({{< relref "KBhbinary_number_system.md#unsigned-integers" >}}) (`size_t`)
-   aggregates: [array]({{< relref "KBharray.md" >}})s, structs, etc.


### SURPRISE: CODE IS ALSO BINARY {#surprise-code-is-also-binary}

Instruction: code is also binary. `gcc` converts your human code to machine code.

Computers don't really understand data structure, variable types, etc. [assembly]({{< relref "KBhassembly.md" >}}) are human-readable form of [binary]({{< relref "KBhbinary_number_system.md#base-2" >}}). Multiple assembly intsructions needed to encode a single C instruction.


## CPU review {#cpu-review}

1978 created Intel 8086.

-   Idea =&gt; C code: your job
-   C code =&gt; Assembly =&gt; Machine code: complier + assembly's job

What we really want to learn is the skill of translating the assembly **BACK** into C code. We want to know how our C code is converted into machine instructions.


## Breakdown {#breakdown}

-   [assembly]({{< relref "KBhassembly.md" >}}) instructions in X86 are **variable length**; meaning there's each [assembly]({{< relref "KBhassembly.md" >}}) command

each instruction looks like:

```asm
add $0x1, $eax
```

-   `add` is the opcode
-   `$[value]`, like `$0x1`, which, because of the dollar sign, is a constant
-   `%[name]`, like `%eax`, which, because of the percent sign, is a CPU scratch space


## Addressing {#addressing}

-   `$0xconstant`: constants
-   `0xvalue`: exact address in memory
-   `%rxx`: register in CPU


### parentheses {#parentheses}

```asm
mov %rbx, ___
```

```asm
mov (%rbx), ___
```

The former is moving the contents of %rbx; the latter is "dereferencing" and moving the contents of the memory pointed to by the contents of rbx.


### displacement {#displacement}

```asm
mov 0x10(%rbx), ___
```

Moves the contents of the memory pointed to by the contents of rbx PLUS 16 [byte]({{< relref "KBhbinary_number_system.md#byte" >}})s forward.

This value can actually be negative.


### sum {#sum}

```asm
mov (%rax, %rbx), ___
```

Moves the contents of the memory pointed to by the SUM of the contents of rax and rbx somewhere.


### sum AND displacement {#sum-and-displacement}

```asm
mov 0x10(%rax, %rbx), ___
```

You can do both!


### scale {#scale}

```asm
mov (%rbx, %rax, 4), ___
```

The value at `4` can be `1,2,4,8`, which multiplies the address within `rax` AND THEN adds it to `rbx`. The `rbx` argument can be omitted if you just want to multiply and dereference `mov (,%rax,4), ___`

If this value is not provided; its assumed to be a 1.


## register {#register}

A [register](#register) is a 64 bit scratch space that's very fast [memory]({{< relref "KBhmemory.md" >}}) in CPU; there are 16 registers. In total, therefore, there are \\(64 \times 16\\) bits of memory.

Memory can be loaded into a register.

Most operations require your values into [register](#register)s. Most of your work involves moving memory from flash, move it into the registers, doing operations, and move it out.

{{< figure src="/ox-hugo/2023-10-27_11-14-21_screenshot.png" >}}

One of the 16 [register](#register)s is used for the program counter (PC), which is to store the address of currently executing instruction.


### Register types + sizes {#register-types-plus-sizes}

-   a **byte** is 1 byte
-   a **word** is 2 bytes: before, it was the size of pointer, but in our day and age a pointer is 8 bytes
-   a **long\*/\*double word** is 4 bytes (yes yes yes longs are 8 bytes in 32 bit but no)
-   a **quad word** is 8 bytes

therefore, assembly code instructions can include suffixes:

-   b: 1 byte
-   w: 2 bytes
-   l: 4 bytes
-   q: 8 bytes

and hence, the 16 registers:

{{< figure src="/ox-hugo/2023-10-30_11-18-06_screenshot.png" >}}

{{< figure src="/ox-hugo/2023-10-30_11-18-40_screenshot.png" >}}

{{< figure src="/ox-hugo/2023-10-30_11-18-45_screenshot.png" >}}


### Register responsibilities {#register-responsibilities}

-   %rax holds the return value
-   %rdi is the irst praameter to a function
-   %rsi stores the second parameter to a function
-   %rdx stores the third parameter
-   %rip stores the next instruction to be executed ("instruction pointer")
-   %rsp stores the address of the stack frame to the currently executing function ("stack pointer")


### register suffix {#register-suffix}

`mov` can take suffixes to move specific sizes starting at initial pointer. `mov` by default moves 8 bytes (64 bits) in a 64 bit machine.

-   movb, movw, movl, movq


## instruction-set architecture {#instruction-set-architecture}

[ISA](#instruction-set-architecture) is a contract between the compiler and hardware, which:

1.  defines operations that the CPU can do
2.  data read/write/transfer operations
3.  controls

Intel designed the X86-64 [ISA](#instruction-set-architecture):

-   legacy support support is very bad
-   originally a 16 bit processor; then 32 bit; now 64 bit


## instructions {#instructions}


### mov {#mov}

```asm
mov src, dest
```

**src** and **dest** can be:

-   immediate constant `$0x104`: the literal number \\(1\cdot 16^2 + 4\\)
-   register: `%rbx`: a regi\qty(er)
