+++
title = "SU-CS111 Final Sheet"
author = ["Houjun Liu"]
draft = false
+++

## FS {#fs}


### main challenges {#main-challenges}

-   **naming**: how do users name files
-   **reliability**: surviving OS crashes and hardware failures
-   **protection**: isolation between users, controlled sharing
-   **disk space management**: minimize seeks, sharing space ("preventing fragmentation")


#### seeks {#seeks}

to wait until the platter go under the arm and read.


#### internal v. external fragmentation {#internal-v-dot-external-fragmentation}

-   **internal**: a file can be no less than a single block of text.
-   **external**: no space is available even if the space in aggregate is available


### main designs {#main-designs}


#### contiguous allocation {#contiguous-allocation}

IBM used this? puts files and meta-data together + implement an explicit free list allocator. **benefit**: simple; **drawback**: 1) external fragmentation 2) hard to grow files


#### linked files {#linked-files}

in every block, store the location of the next block; don't store files continuously---instead, store a pointer to where the next block of the file is. **benefit**: solves fragmentation and file growth; **drawback**: 1) huge seek time 2) random access from the middle is hard (i.e. O(n))


#### Windows FAT {#windows-fat}

linked files, but cached the file links in memory when using it. **benefits**: same as linked files, and a bit faster **drawback**: data _still_ fragmented and now you have a whole ass table to deal with! but its at least faster


#### File Payload Data {#file-payload-data}

Kind of what we do---instead of storing file data in order OR using links, store the file BLOCK information contiguously.

_multi-level index_: store all block numbers for a given file down a tree (EXT2/3, Unix V6, NTFS)


### Unix V6 + MLI {#unix-v6-plus-mli}

| Sector Size | Block Size | Inode Size | Inodes Per Block | Address Type   |
|-------------|------------|------------|------------------|----------------|
| 512         | 512        | 32         | 16               | Short, 2 bytes |


#### block {#block}

```C
const size_t INODE_PER_BLOCK = SECTOR_SIZE / sizeof(struct inode);
struct inode inodes[INODE_PER_BLOCK];

char buf[SECTOR_SIZE];
readsector(2, &inodes); // recall this is the first 16 inodes: sec0 is fs info, sec1 is supernode

printf("addr: %d\n", inodes[0].i_add);
```


#### ino {#ino}

```C
struct inode {
    uint16_t i_addr[8];
    uint16_t i_mode[8];
    uint16_t file_size;
}
```

[inode]({{< relref "KBhunix_v6_filesystem.md" >}})s have two modes

```C
if ((inode.i_mode & ILARG) != 0) == // node is in "large mode"
```

-   in **small mode**, the [inode]({{< relref "KBhunix_v6_filesystem.md" >}}) stores in `i_addr` the block numbers to the data
-   in **large mode**, the [inode]({{< relref "KBhunix_v6_filesystem.md" >}}) stores in the **first seven** numbers in `i_addr` block numbers to _blocks that contain block numbers_ (512/2 = 256 block numbers, which are chars); the **eighth number** points to **doubly indirect** _blocks that contain block numbers that point to other blocks_

The [inode]({{< relref "KBhunix_v6_filesystem.md" >}}) table for each file only contains space to point to \\(8\\) block. 1 block = 1 sector on Unix v6. [inode]({{< relref "KBhunix_v6_filesystem.md" >}})s are usualy 32 bytes big, and 1 block = 1 sector = 512 bytes. usually this packs 16 inodes per block

in **large mode**, this system can store \\((7+256) \cdot (256 \cdot 512) = 34MB\\), which is as large as the file system itself, which means we are fine now.

<!--list-separator-->

-  sizing

    -   small: \\(512\\) bytes per block, and \\(8\\) block storable, so \\(8 \cdot 512 = 4096\\) bytes
    -   large: \\(512\\) bytes per block pointed to by i_addr, each containing \\(\frac{512}{2} = 256\\) block numbers. The first seven in total would therefore address \\(256 \times 7 = 1792\\) blocks of memory. The last eight would each address \\(256 \cdot 256 = 65536\\) blocks of memory. In total, that addresses \\(1792+65536 = 67328\\) blocks of memory. Finally, that means we can address \\(67328 \cdot 512 = 34471936\\) bytes.


#### dir {#dir}

```C
struct dirent {
    uint16_t d_inumber; // inode number of this file
    char d_name[14]; // the name; *NOT NECESSARILY NULL TERMINATED*
}
```

**THE NAME MAY NOT BE NULL TERMINATED** to cram max things. You have to use **strncmp**

**strcmp/strncmp**: stops comparing after \\(n\\) characters; &lt;0 if str1 comes before str2 alphabetically; &gt;0 if str1 comes after str2; 0 if equal

Start at the root directory, `/`. We want to go to the root directory, and find the entry named `/classes/`, and then, in that directory, find the file. etc. Traverse recursively. Directory could have metadata.

A directory is basically just a **file whose payload is a list of `dirent`**.

The inode tells you whether something is a file or a directory. They can be small or large, as usual. Root directory always have inode number `1`; `0` is reserved to NULL.


#### file {#file}

Recall that `read` doesn't read the whole thing. So, we it in parts.

```C++
void copyContents(int sourceFD, int destinationFD) {
    char buffer[INCREMENT];

    while (true) {
        ssize_t bytesRead = read(sourceFD, buffer, sizeof(buffer));
        if (bytesRead == 0) break;
        size_t bytesWritten = 0;
        while (bytesWritten < bytesRead) {
            ssize_t count = write(destinationFD, buffer + bytesWritten,
                                  bytesRead - bytesWritten);
            bytesWritten += count;
        }
    }
}
```

```C++
int open(const char *pathname, int flags);
```

Flags are a bitwise OR operations: you have to open with `O_RDONLY` (read only), `O_WRONLY` (write only), or `O_RDWR` (both read and write). This returns \\(-1\\) if the reading fails.

Other flags:

-   `O_TRUNC` (truncate file)
-   `O_CREAT` (creating a file if not exist), which will require a `mode_t mode` parameter to set the permission
-   `O_EXCL` (file must not exist)


### Block Cache {#block-cache}

We will use part of the main memory to retain recently-accessed disk **blocks**. This is **NOT** at the granularity of individual files.


#### Least Recently Used (LRU) Cache {#least-recently-used--lru--cache}

When you insert a new element into the cache, kick out the element on the cache that hasn't been touched in the longest time.


#### Block Cache Modification {#block-cache-modification}

we can either **write asap**, or **delay**.

****write asap****: _safer_: less risk of data loss, written as soon as possible; _slow_: program must wait to proceed until disk I/O completes

****write delay****: _dangerous_: may loose data after crash; _efficient_: memory writes is faster


## Crash Recovery {#crash-recovery}


### main challenges {#main-challenges}


### main designs {#main-designs}


### goal design {#goal-design}


### implementation {#implementation}


## MP {#mp}


### main challenges {#main-challenges}


### main designs {#main-designs}


### goal design {#goal-design}


### implementation {#implementation}


## MT {#mt}


### main challenges {#main-challenges}


### main designs {#main-designs}


### goal design {#goal-design}


### implementation {#implementation}


## Virtual Memory {#virtual-memory}


### main challenges {#main-challenges}


### main designs {#main-designs}


### goal design {#goal-design}


### implementation {#implementation}


## Multicore + Flash {#multicore-plus-flash}


### main challenges {#main-challenges}


### main designs {#main-designs}


### goal design {#goal-design}


### implementation {#implementation}


## Ethics {#ethics}


### main challenges {#main-challenges}


### main designs {#main-designs}


### goal design {#goal-design}


### implementation {#implementation}

Crash Recovery: tradeoffs, data loss and inconsistency, atomic operations, free list and block cache, fsck, ordered writes, write-ahead logging, transactions, checkpoints, idempotency, durability and consistency

Multiprocessing: processes, PIDs, fork, execution order, copy on write, waitpid, zombie processes, execvp, pipes and pipe / pipe2, I/O redirection

Multithreading: processes vs. threads, C++ threads and .join(), thread safety, race conditions, atomicity, critical sections, mutexes, deadlock, busy waiting, condition variables, notify_all, unique_lock, monitor pattern; dining philosophers

Dispatching / Scheduling: Process control blocks, traps and interrupts, context switching, thread state (running / blocked / ready), I/O-bound and CPU-bound threads, scheduling algorithms, first-come-first-serve, round robin, shortest remaining processing time (SRPT), priority-based scheduling, preemption, interrupts, implementing single-core locks and condition variables

Virtual memory: single-tasking, process memory, memory sharing goals, load-time relocation, dynamic address translation and MMU, virtual and physical addresses, base and bound, multiple segments, paging, demand paging, page maps, page faults, thrashing, fragmentation, disk swap, page replacement policies, random replacement, FIFO replacement, LRU replacement, clock algorithm, per process vs. global replacement, virtualization.

Modern technologies: multicore processors (multicore scheduling, work stealing, core affinity, gang scheduling, multicore locks (for multicore locks, just high level ideas about interrupts being insufficient to prevent races, atomic operations, and that busy waiting is necessary)), flash storage (quirks of erase + write operations, wear-out, wear-leveling, flash translation layer high-level idea)

Ethics and trust: trust and agency, trust by assumption, trust by inference, trust by substitution, agential gullibility, violations of trust, stakeholders, pervasiveness, time.
