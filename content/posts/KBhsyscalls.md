+++
title = "syscalls"
author = ["Houjun Liu"]
draft = false
+++

[syscalls]({{< relref "KBhsyscalls.md" >}}) are public functions that allow user land operations to access system-level services (such as reading a sector) which otherwise is locked in [kernel mode](#kernel-mode) because they require special privileges.

-   `open`, `close`, `read`, `write`


## kernel mode {#kernel-mode}

[kernel mode](#kernel-mode) allows superuser function access such as reading [sector]({{< relref "KBhfilesystem.md#disk" >}})s, etc. which would be dangerous if public.
