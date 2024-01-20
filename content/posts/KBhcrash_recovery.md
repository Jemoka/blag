+++
title = "crash recovery"
author = ["Houjun Liu"]
draft = false
+++

## Major Challenges {#major-challenges}

-   **data loss**: crashes can happen, and not all data could be saved to disk
-   **inconsistency**: crashes can happen in the middle of operations
    -   crashes could occur when someone of the blocks that have been written to disk, but not others
    -   inode and free lists don't agree.

Ideally, filesystem operations should be **atomic**. Every operation should happen or not happen at all---but not halfway.

Case study: [Block Cache Modification]({{< relref "KBhunix_v6_filesystem.md#block-cache-modification" >}})


## fsck {#fsck}

Don't make any changes to filesystem at all. At the system boot time, check filesystem for consistency.

main limitation:

-   can't restart filesystem until it completes: this process ****takes forever****
-   restores consistency, but doesn't prevent loss of info
-   restores consistency, but filesystem may still be unusable (core files moved to lost+found)
-   a block could migrate from a password file to some other random file, hence removing info

---

-   Check whether or not there is a clean shutdown: setting a disk flag on clean shutdown; so if the flag isn't set there isn't a clean shutdown.
-   If it wasn't a clean shutdown, identify inconsistencies
-   Scans meta data (inodes, indirect blocks, free list, directory blocks) and handle any of the following situations---


### block in an inode and in free list {#block-in-an-inode-and-in-free-list}

Solution: pull the block off of free list


### block is a part of two inodes {#block-is-a-part-of-two-inodes}

Solutions:

-   give to newest
-   randomly pick
-   make a copy
-   remove (generally a bad idea, we don't want to destroy data)


### inode claims one dirent refers to it, but there are no such dirent {#inode-claims-one-dirent-refers-to-it-but-there-are-no-such-dirent}

put the file under the `lost+found` folder


## ordered writes {#ordered-writes}

****Example****: block is in file and also in the free list.

This basically removes the need to wait for fsck on reboot.

We can use a certain **order** of operations to prevent these types of errors from occurring:

1.  Always initialize the **TARGET** before initializing the **REFERENCE**
    -   Initialize inode before initalize directory entry to it
2.  Never reuse a resource before nullifying all existing references
    -   Remove the inode reference before putting a block on the fre list
3.  Never clear the last reference to a live resource before setting a new reference ("its better to have 2 copies instead of none")
    -   Make the new directory entry before get rid of the old one

---

Limitations:

-   By default it obviates the block cache because it forces an order, and the block cache is in any order
    -   Solution: make the block cache store the operations' order, so during commits it will do them eventually
    -   Because this forces some synchronous writes---keeping track of dependencies in the block to rememberer what order we do them.
-   It could leak resources
    -   We can run fsck in the background
