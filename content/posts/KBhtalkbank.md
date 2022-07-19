+++
title = "talkbank"
author = ["Houjun Liu"]
draft = false
+++

## QUESTIONS {#questions}

-   implemented LubetichSagae, but how did they deal with variable-length inputs? i.e. data having a variable number of utterances, how to treat?


## mar {#mar}

-   mar has done a thing and its phoneme level
-   We did it, now automated
-   LEAP data


## next actions {#next-actions}

-   Aphasia (-apraxia?): classification
-   Child data (EllisWeismer)
-   Dementia


## a {#a}

-   `~Multiple @Begin/CHECK problem~`
-   `~Placement of @Options~`
-   `~Strange, missing period~`
-   `~Bracket comments should FOLLOW words instead of PRECEEDING them~`
-   `~%xwor: line~`

-   STICK TO DASHES WHEN DISTRIBUTING BATCHALIGN
-   end the utterance when it ends (incl. inter-utterance pauses)
-   "I" need to be capitalized
-   11005 (LT)

Align EllisWeismer

Also cool to align:

-   fluency IISRP/\*

-   <https://en.wikipedia.org/wiki/Speaker_diarisation>
-   <https://universaldependencies.org/>


## Alzheimer's Project {#alzheimer-s-project}

-   <https://dementia.talkbank.org/>
-   <https://luzs.gitlab.io/adresso-2021/>
-   Specifically: <https://dementia.talkbank.org/access/English/Pitt.html>

-   Review Kathleen Fraser: <https://drive.google.com/drive/u/1/folders/1lYTIzzXLXw3LlDG9ZQ7k4RayDiP6eLs1>
-   Here are the review papers: <https://drive.google.com/drive/u/1/folders/1pokU75aKt6vNdeSMpc-HfN9fkLvRyutt>
-   Read this first: <https://drive.google.com/drive/u/1/folders/0B3XZtiQwQW4XMnlFN0ZGUndUamM?resourcekey=0-AlOCZb4q9TyG4KpaMQpeoA>

-   Some PITT data have 3-4 recordings

****The best way to diagnosing alzhimers' is from language.****

Why this field is needed: to analyze a pre-post test metric.

Desired output: existence of dementia (a.k.a alzheimer's').

Other research to read:

-   Penn (julia parish something but they don't stare their data but they smile and things with Mark Libermann type of thing)
-   Learning more about speech text
-   <https://my.clevelandclinic.org/health/diagnostics/22327-differential-diagnosis>

python3 ~/mfa_data/[batchalign]({{< relref "KBhbatchalign.md" >}})-dist/batchalign.py ~/mfa_data/my_corpus ~/mfa_data/my_corpus_aligned

christan marr paper on MFA on child data