+++
title = "pipe"
author = ["Houjun Liu"]
draft = false
+++

[pipe]({{< relref "KBhpipe.md" >}}) chains the STDOUT of one command and put it to the STDIN of another command.


## command pipelines {#command-pipelines}

1.  span two child processes
2.  create a pipe to allow the two processes to communicate
3.  connect the first child's STDOUT to the pipe + the second child's STDIN to the pipe


## pipe() {#pipe}

[pipe()](#pipe) gives us back two [file descriptor]({{< relref "KBhsyscalls.md#file-descriptor" >}})s, such that whatever is written to one can be read from another.

Interface:

```C++
int pipes[2];

// create the pipes
int ret = pipe(pipes);

// an so
int read_from_here = ret[0];
int write_to_here = ret[1];
// i.e. ret[1] => ret[0]

// write
write(write_to_here, ...);
close(write_to_here);

// close stuff
read(read_from_here, ...);
close(read_from_here);
```

[pipe]({{< relref "KBhpipe.md" >}})s have to be closed twice, and opened before the fork.


## dup2() {#dup2}
