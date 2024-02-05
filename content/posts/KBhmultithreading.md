+++
title = "multithreading"
author = ["Houjun Liu"]
draft = false
+++

-   we can have concurrency **within a single process**---each running a single function


## thread {#thread}

-   you can spawn a thread using the **thread()** can even pass function parameters
-   **threads share all virtual address space**: bugs can arise when multiple threads modify the same thing at the same time---each thread has access to a small chunk of the stack
-   threads are actually the unit of concurrency: the OS actually chooses threads to run

<!--listend-->

```C++
// now the thread can execute at any time: once a thread is made, it will run in any order
thread myThread(function_to_run, arg1, arg2, ...);
// threads run AS SOON AS SPAWENED: so
```

We can wait for a thread:

```C++
myThread.join()
```

You can also start a bunch on a loop:

```C++
thread threads[3];
for (thread& cf : threads) {
    cf = thread(func, ...);
}
```

Importantly, unlike [waitpid]({{< relref "KBhfork.md#waitpid" >}}), we can't join an arbitrary thread. We basically have to wait for all your threads to finish.


### passing by reference {#passing-by-reference}

threading doesn't know the type of arguments being passed into a function; this is especially prevalent when passing by reference.

```C++
static void mythingref(int &pbr);
thread(myfunc, ref(myint));
```

Remember: ref will ****SHARE MEMORY****, and you have no control over when the thread runs. So once a pointer is passed all bets are off in terms of what values things take on.


## [process]({{< relref "KBhmultiprocessing.md#process" >}})es vs [thread](#thread)s {#process--kbhmultiprocessing-dot-md--es-vs-thread--orgdebbf3a--s}

| Processes                                          | Threads                                     |
|----------------------------------------------------|---------------------------------------------|
| isolate virtual address spaces                     | shares virtual address space to share info  |
| can run external programs                          | can't run external programs (execvp wipes)  |
| harder to coordinate tasks within the same program | easier to coordinate tasks within a program |

[thread](#thread)s are really the main way to break down big tasks.


## race condition {#race-condition}

undesirable behavior caused by arbitrary execution order.


### thread safe {#thread-safe}

[thread safe](#thread-safe) functions are ones whereby its designed to prevent against unexpected behavior during threading.

we want [atomicity]({{< relref "KBhdistributed_algorithum.md#atomicity" >}}) in the code: we want entire data viewing + modification operations to not be interrupted---otherwise, you will generate race conditions.

Recall: ****C++ statements themselves are not INHERENTLY autonomic****.
