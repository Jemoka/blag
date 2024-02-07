+++
title = "multithreading"
author = ["Houjun Liu"]
draft = false
+++

-   we can have concurrency **within a single process**---each running a single function

We will solve problems:

-   **never [race condition](#race-condition)**
-   **never [deadlock]({{< relref "KBhdeadlock.md" >}})**


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

DEBUGGING TRICK: ****adding a sleep call everywhere shouldn't cause any problems****; if it does, there's a race condition.


### passing by reference {#passing-by-reference}

threading doesn't know the type of arguments being passed into a function; this is especially prevalent when passing by reference.

```C++
static void mythingref(int &pbr);
thread(myfunc, ref(myint));
```

Remember: ref will ****SHARE MEMORY****, and you have no control over when the thread runs. So once a pointer is passed all bets are off in terms of what values things take on.


## [process]({{< relref "KBhmultiprocessing.md#process" >}})es vs [thread](#thread)s {#process--kbhmultiprocessing-dot-md--es-vs-thread--org778fc72--s}

| Processes                                          | Threads                                     |
|----------------------------------------------------|---------------------------------------------|
| isolate virtual address spaces                     | shares virtual address space to share info  |
| can run external programs                          | can't run external programs (execvp wipes)  |
| harder to coordinate tasks within the same program | easier to coordinate tasks within a program |

[thread](#thread)s are really the main way to break down big tasks.


## race condition {#race-condition}

undesirable behavior caused by arbitrary execution order. we typically solve them using [mutex](#mutex)es.


### thread safe {#thread-safe}

[thread safe](#thread-safe) functions are ones whereby its designed to prevent against unexpected behavior during threading.

we want [atomicity]({{< relref "KBhdistributed_algorithum.md#atomicity" >}}) in the code: we want entire data viewing + modification operations to not be interrupted---otherwise, you will generate race conditions.

Recall: ****C++ statements themselves are not INHERENTLY autonomic****.

we want to outline a "critical section" and ensure it doesn't get ran more than once.


### critical section {#critical-section}

A [critical section](#critical-section) is a region of code which should only be executed by one thread at a time. We want to keep this section as small as possible to preserve performance.

1.  we want to organize it to be as small as we possibly can
2.  we want to move the critical section in terms of expressions; so if you have a loop you should put the loop in the outer area, and do the checking + break within

if our [critical section](#critical-section)s are not small, we would have little benefits to multithreading


## mutex {#mutex}

it would be nice if a [critical section](#critical-section) can only be executed once; a [mutex](#mutex) can be shared across threads, but can only be "owned" by a single thread at once.

```C++
mutex tmp;
```

```C++
tmp.lock();
tmp.unlock();
```

importantly, if multiple [thread](#thread)s are waiting on a mutex, the next thread that's going to get the mutex

-   when there are multiple threads **writing** to a value
-   when there is a thread **writing** and one or more threads **reading**
-   if you are no writes, you don't need a mutex

when dealing with [mutex](#mutex), beware of [deadlock]({{< relref "KBhdeadlock.md" >}})
