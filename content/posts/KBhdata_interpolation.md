+++
title = "data interpolation"
author = ["Houjun Liu"]
draft = false
+++

Given \\(\geq 2\\) points, we can then start creating [interpolation]({{< relref "KBhinterpolation.md#interpolation" >}})s for missing data.


## polynomial interpolation {#polynomial-interpolation}

For \\(m\\) data points, you can draw a unique \\(m-1\\), polynomial which fits the lines exactly.

[overfitting]({{< relref "KBhoverfitting.md" >}}) can occur, so we perform [regularization]({{< relref "KBhregularization.md" >}})


## [nearest neighbor method]({{< relref "KBhnearest_neighbor_method.md" >}}) and [data interpolation]({{< relref "KBhdata_interpolation.md" >}}) {#nearest-neighbor-method--kbhnearest-neighbor-method-dot-md--and-data-interpolation--kbhdata-interpolation-dot-md}

you can think of [nearest neighbor method]({{< relref "KBhnearest_neighbor_method.md" >}}) as piecewise-constant interpolation
