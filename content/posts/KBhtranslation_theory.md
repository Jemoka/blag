+++
title = "Translation Theory"
author = ["Houjun Liu"]
draft = false
+++

[Translation Theory]({{< relref "KBhtranslation_theory.md" >}}) is the theory that studies how [translation]({{< relref "KBhtranslation_studies_index.md" >}}) works.


## Spectrum of Translation {#spectrum-of-translation}

[domestication](#spectrum-of-translation) and [foreignization](#spectrum-of-translation) are processes by which a translator can choose to alter the style of a translation for a purpose.


### [foreignization](#spectrum-of-translation) {#foreignization--org3bce9e3}

trying to bring the target language closer to the source language

-   bring in foreign words
-   use colourful idioms
-   use old words


### [domestication](#spectrum-of-translation) {#domestication--org3bce9e3}

trying to bring he source language closer to the target language

```sage
f1 = var("f1")
f2 = var("f2")

df1 = var("df1")
df2 = var("df2")

f = ((f1^2)/2 + (f2^2)/2)^(1/2)
(((f.diff(f1) * df1)^2 + (f.diff(f2) * df2)^2)^(1/2)).subs(f1=512.5094554, f2=512.5094554, df1=0.5, df2=0.5)
```

```text
0.353553390593274
```