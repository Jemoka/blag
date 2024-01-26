+++
title = "multiprocessing"
author = ["Houjun Liu"]
draft = false
+++

multiprocessing is the act of switching between multiple [process](#process)es so fast that it appears multiple processes are running concurrently.

-   OS _schedules_ tasks
-   each program gets a little time, then has to wait in a turn to continue executing

base level syscalls that requires waiting will be moved off before finishing, and in the meantime others can wait. like file read.


## program {#program}

A [program](#program) is a script to be ran.


## process {#process}

a [process](#process) is an instance of a [program](#program). Every process has a unique identifier, each process is uniquely identified by a [PID](#process).

syscall `get_pid` will give you back the PID.


### process control block {#process-control-block}

each [process](#process) is controlled by a struct which contain information about the process
