+++
title = "compositional scene representation"
author = ["Houjun Liu"]
draft = false
+++

[compositional scene representation]({{< relref "KBhscene_representation.md" >}}) is the process of trying to represent a certain visual signal into its constituent parts.

Aim: unsupervised segmentation + representation

-   the model finds the most intuitive representations of the scene
-   train segmentation and representation together

Autoencoding segmentation! Segment =&gt; Represent =&gt; Resegment =&gt; etc.