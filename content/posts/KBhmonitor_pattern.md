+++
title = "monitor pattern"
author = ["Houjun Liu"]
draft = false
+++

[monitor pattern]({{< relref "KBhmonitor_pattern.md" >}}) is a [multithreading]({{< relref "KBhmultithreading.md" >}}) pattern to help prevent [race condition]({{< relref "KBhmultithreading.md#race-condition" >}})s and [deadlock]({{< relref "KBhdeadlock.md" >}})s.

**associate a single lock with a collection of variables** (a "class"), having one lock associated with the group.

any time when you want to access anything in that group, you unlock the [mutex]({{< relref "KBhmultithreading.md#mutex" >}}) associated with the group. meaning, there's only one mutex which can be used to change shared state.
