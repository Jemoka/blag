+++
title = "Operating Systems Index"
author = ["Houjun Liu"]
draft = false
+++

cs111.stanford.edu


## Topics {#topics}

CS111 leverages CS107 experience to show operating systems and how they function.


### What is an operating system {#what-is-an-operating-system}

-   operating system sits between **hardware** and **user programs**
-   most importantly: manages _shared resources_ to allow the program to run
    -   **CPU**: gets which program to do work and for how long
    -   **RAM**: how much memory to give to a program
    -   **Hard Drive**


### Main Events {#main-events}

-   concurrency: switch between processes so quickly to only use on core while concurrent access
-   memory: memory addresses are mostly scattered everywhere --- everything include the lowest level including CPU uses only virtual memory, translated by the OS
-   file management
-   i/o devices
-   networking: CS144
-   security: interactions between users in a system


### Main Components of the Course {#main-components-of-the-course}

-   File Systems
-   Process and Multiprocess
-   Threads
-   Virtual Memory + Paging + limits
-   Modern Technologies/Niceties


## Content {#content}


### [filesystem]({{< relref "KBhfilesystem.md" >}}) {#filesystem--kbhfilesystem-dot-md}

How can we design file systems to manage files on disk, and what are the tradeoffs inherent in designing them. How can we interact with the filesystem?

-   [filesystem]({{< relref "KBhfilesystem.md" >}})
    -   [Unix V6 Filesystem]({{< relref "KBhunix_v6_filesystem.md" >}})
        -   [Freelist]({{< relref "KBhunix_v6_filesystem.md#freelist" >}}) and [Block Cache]({{< relref "KBhunix_v6_filesystem.md#block-cache" >}})
-   [disk]({{< relref "KBhfilesystem.md#disk" >}})
-   [crash recovery]({{< relref "KBhcrash_recovery.md" >}})
    -   [fsck]({{< relref "KBhcrash_recovery.md#fsck" >}})
    -   [ordered writes]({{< relref "KBhcrash_recovery.md#ordered-writes" >}})
    -   [journaling]({{< relref "KBhcrash_recovery.md#journaling" >}}): [write-ahead logging]({{< relref "KBhcrash_recovery.md#journaling" >}})
-   [syscalls]({{< relref "KBhsyscalls.md" >}})
    -   [kernel mode]({{< relref "KBhsyscalls.md#kernel-mode" >}})
    -   files handling
        -   [file]({{< relref "KBhsyscalls.md#open" >}})
        -   [file descriptor]({{< relref "KBhsyscalls.md#file-descriptor" >}})


### multiprocessing {#multiprocessing}

How are programs run, how to spawn subprograms, and how they work in general?

-   [multiprocessing]({{< relref "KBhmultiprocessing.md" >}})
-   [fork]({{< relref "KBhfork.md" >}})
    -   [execvp]({{< relref "KBhfork.md#execvp" >}})
    -   [waitpid]({{< relref "KBhfork.md#waitpid" >}})
-   [shell]({{< relref "KBhfork.md#shell" >}})
-   [pipe]({{< relref "KBhpipe.md" >}}) and ipc

---

An example of a good time:

```C
void main() {
    // make pipe
    int fds[2];
    pipe(fds);

    pid_t pidp = fork();

    if (pidp == 0) {
        close(pidp[1]);
        dup2(pidp[0], STDIN_FILENO);
        close(pidp[0]);
        execvp("", ...);
        // throw-a-tantrum
        exit(1);
    }

    close(pidp[0]);

    return pidp[1];
}
```
