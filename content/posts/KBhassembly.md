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
-   `%[value]`, like `$0x1`, which, because of the dollar sign, is a constant
-   `%[name]`, like `%eax`, which, because of the percent sign, is a CPU scratch space


## register {#register}

A [register](#register) is a 64 bit scratch space that's very fast [memory]({{< relref "KBhmemory.md" >}}) in CPU; there are 16 registers. In total, therefore, there are \\(64 \times 16\\) bits of memory.

Memory can be loaded into a register.

Most operations require your values into [register](#register)s. Most of your work involves moving memory from flash, move it into the registers, doing operations, and move it out.

{{< figure src="/ox-hugo/2023-10-27_11-14-21_screenshot.png" >}}

One of the 16 [register](#register)s is used for the program counter (PC), which is to store the address of currently executing instruction.


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
