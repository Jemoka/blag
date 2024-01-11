+++
title = "Unix V6 Filesystem"
author = ["Houjun Liu"]
draft = false
+++

its a [File Payload Data]({{< relref "KBhfile_payload_data.md" >}}) with smartness.

For each file on the disk, we store payload data in a bunch of places scattered across the disk, and a **single** [inode]({{< relref "KBhunix_v6_filesystem.md" >}}) which stores the location of each block for the file in an array.

-   [inode]({{< relref "KBhunix_v6_filesystem.md" >}})s contain an **ordered** list of block numbers, file size, permissions.
-   all [inode]({{< relref "KBhunix_v6_filesystem.md" >}})s are stored together in an [inode]({{< relref "KBhunix_v6_filesystem.md" >}}) table, which starts at **block 2**. Blocks 0 and 1 are disk metadata.
-   [inode]({{< relref "KBhunix_v6_filesystem.md" >}}) can be read into memory individally to cache
-   [inode]({{< relref "KBhunix_v6_filesystem.md" >}})s are usualy 32 bytes big, and 1 block = 1 sector = 512 blocks. usually this packs 16 inodes per block
-   10% of harddrive is used to [inode]({{< relref "KBhunix_v6_filesystem.md" >}})

[Unix V6 Filesystem]({{< relref "KBhunix_v6_filesystem.md" >}}) limits the maximum file size in order to keep the [inode]({{< relref "KBhunix_v6_filesystem.md" >}}) a finite size. It has space for \\(8\\) block numbers: which is enough to store large files... apparently.
