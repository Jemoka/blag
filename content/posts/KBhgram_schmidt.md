+++
title = "Gram-Schmidt"
author = ["Houjun Liu"]
draft = false
+++

OMG its [Gram-Schmidtting]({{< relref "KBhgram_schmidt.md" >}})!!! Ok so like [orthonormal basis]({{< relref "KBhorthonormal_basis.md" >}}) are so nice, don't you want to make them out of boring-ass normal [basis]({{< relref "KBhbasis.md" >}})? Of course you do.

Suppose \\(v\_1, ... v\_{m}\\) is a [linearly independent]({{< relref "KBhlinear_independence.md" >}}) list in \\(V\\). Now let us define some \\(e\_{1} ... e\_{m}\\) using the procedure below such that \\(e\_{j}\\) are [orthonormal]({{< relref "KBhorthonormal.md" >}}) and, importantly:

\begin{equation}
span(v\_1, \dots, v\_{m}) = span(e\_{1}, \dots, e\_{m})
\end{equation}


## The Procedure {#the-procedure}

We do this process inductively. Let:

\begin{equation}
e\_1 = \frac{v\_1}{\\|v\_1\\|}
\end{equation}

And then, let:

\begin{equation}
e\_{j} = \frac{v\_{j} - \langle v\_{j}, e\_{1} \rangle e\_{1} - \dots -\langle v\_{j}, e\_{j-1} \rangle e\_{j-1}}{\\|v\_{j} - \langle v\_{j}, e\_{1} \rangle e\_{1} - \dots -\langle v\_{j}, e\_{j-1} \rangle e\_{j-1}\\|}
\end{equation}

That is, for each vector \\(v\_{j}\\), we subtract out the component which it is already parallel (i.e. not [orthogonal]({{< relref "KBhorthogonal.md" >}}), i.e. already accounted by) each other already [orthonormal]({{< relref "KBhorthonormal.md" >}}) basis. Then we norm the whole thing as lengths don't matter and we desire [norm]({{< relref "KBhnorm.md" >}})-1.


## The Proof {#the-proof}

We Prove this by induction.

Base case: \\(j=1\\)

\\(span (v\_1) = span (e\_{1})\\) because, by definition above, \\(e\_1 = \frac{v\_1}{\\|v\_1\\|}\\). And hence, they are multiples of each other and hence has the same span.

Induction: at \\(1<j <m\\)

So, we have that:

\begin{equation}
span (v\_1, \dots, v\_{j-1}) = span(e\_1, \dots, e\_{j-1})
\end{equation}

Let now \\(v\_{j} \not \in span(v\_1, ..., v\_{j-1})\\) (because \\(v\_{j}\\) are linearly independent). We have then \\(v\_{j} \not \in span(e\_1, ..., e\_{j-1})\\), given the two spans are equal.

Hence, \\(v\_{j} - \langle v\_{j}, e\_{1} \rangle e\_{1}- ... - \langle v\_{j}, e\_{j-1} \rangle e\_{j-1} \neq 0\\) because otherwise \\(v\_{j}\\) would be writable as a linearly combinations of \\(e\_{1}, ..., e\_{j-1}\\) and would then be in the span thereof, which we know isn't true.

Dividing a vector by its [norm]({{< relref "KBhnorm.md" >}}) produces a [norm]({{< relref "KBhnorm.md" >}})-1 vector; so we have now that \\(e\_{j}\\) would be a [norm]({{< relref "KBhnorm.md" >}})-1 vector.

Now, let \\(k < j\\). We desire that \\(\langle e\_{j}, e\_{k} \rangle = 0\\) because we want our new \\(e\_{j}\\) to be [orthogonal]({{< relref "KBhorthogonal.md" >}}) to every other existing vector.

We have:

\begin{equation}
\langle e\_{j}, e\_{k} \rangle = \langle \frac{v\_{j} - \langle v\_{j}, e\_{1} \rangle e\_{1} - \dots - \langle v\_{j}, e\_{k}  \rangle e\_{k} - \dots \langle v\_{j}, e\_{j-1} \rangle e\_{j-1}}{\\|v\_{j} - \langle v\_{j}, e\_{1} \rangle e\_{1}- \dots - \langle v\_{j}, e\_{k}  \rangle e\_{k} - \dots \langle v\_{j}, e\_{j-1} \rangle e\_{j-1}\\|}, e\_{k} \rangle
\end{equation}

Now, if we parcel out the large fraction the bottom, and apply additivity in the first slot, we will note that all of the \\(\langle e\_{i \neq k}, e\_{k} \rangle=0\\) as everything already on this list is orthonormal. Finally, then we have only:

\begin{equation}
\langle v\_{j}, e\_{k} \rangle - \langle v\_{k}, e\_{k}  \rangle \langle e\_{k}, e\_{k} \rangle
\end{equation}

on top, which conveniently equals \\(0\\). Meaning \\(\langle e\_{j}, e\_{k} \rangle= 0\\), so \\(e\_{k}\\) is indeed [orthogonal]({{< relref "KBhorthogonal.md" >}}) to the rest of the list.

By definition of \\(e\_{j}\\) above, \\(v\_{j}\\) can be written as a linear combination of \\(e\_{1}, ... e\_{j-1}\\) as well as a bare \\(e\_{j}\\). Therefore:

\begin{equation}
span(v\_1, \dots, v\_{j}) \in span (e\_1, \dots e\_{j})
\end{equation}
