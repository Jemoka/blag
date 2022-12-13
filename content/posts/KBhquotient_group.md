+++
title = "quotient group"
author = ["Houjun Liu"]
draft = false
+++

a [quotient group]({{< relref "KBhquotient_group.md" >}}) is a [subgroup]({{< relref "KBhsubgroup.md" >}}) where you mask out multiples:

\begin{equation}
\mathbb{Z}} / 3 \mathbb{Z}
\end{equation}

this is essentially the same thing as \\(\mod 3\\).

However, each value in this new group is a [group]({{< relref "KBhgroup.md" >}}) itself, a set of numbers; for instance, in \\(\mathbb{Z} / 3\mathbb{Z}\\), \\(0\\) is actually the set \\(\\{\dots -6, -3, 0, 3, 6, \dots\\}\\); we call this a [subgroup]({{< relref "KBhsubgroup.md" >}}).

Other elements in the quotient space ("1", a.k.a. \\(\\{ \dots, -2, 1, 4, 7 \dots \\}\\), or "2", a.k.a. \\(\\{\dots, -1, 2, 5, 8 \dots \\}\\)) are called "cosets" of \\(3 \mathbb{Z}\\). You will notice they are not a [subgroup]({{< relref "KBhsubgroup.md" >}})s.