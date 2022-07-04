+++
title = "DementiaBank Acoustics Project"
author = ["Houjun Liu"]
draft = false
+++

The [DementiaBank Acoustics Project]({{< relref "KBhdementiabank_acoustics_project.md" >}}) is a working title for an acoustic-only challenge for AD detection. This document serves as the lab notebook for this project.

This project will attempt to replicate some of the results of [Wang 2019]({{< relref "KBhwang_2019.md" >}}) and [Martinc 2021]({{< relref "KBhmartinc_2021.md" >}}), but focusing on minimizing human involvement; we will first work on raw transcript classification with ERNIE (cutting all CHAT annotations), then introduce pause-encoding in a manner similar to [Yuan 2021]({{< relref "KBhyuan_2021.md" >}}) which is automated by MFA. Goal is to replicate the results of [Yuan 2021]({{< relref "KBhyuan_2021.md" >}})/or even [Martinc 2021]({{< relref "KBhmartinc_2021.md" >}}) in a completely automated manner.


## Background Reading {#background-reading}

I first began by doing a literature survey on the [ADReSS Challenge]({{< relref "KBhadress_literature_survey.md" >}}) results published in the Frontiers AD special interest group issue.


## Proposal {#proposal}

And then, we wrote a proposal: [DementiaBank Acoustics Project Proposal]({{< relref "KBhdementiabank_acoustics_project_proposal.md" >}})


## Brainstoming {#brainstoming}

More notes from the meeting: [DementiaBank Acoustics Brainstoming]({{< relref "KBhdementiabank_acoustics_brainstoming.md" >}})


## Protocol Notes {#protocol-notes}


### July 1st {#july-1st}

-   Began by moving a subsample of [Pitt](https://dementia.talkbank.org/access/English/Pitt.html)'s [Cookie Theft]({{< relref "KBhctp.md" >}}) to `pitt-7-1` in the `raw` data folder
-   Ran `flo` on all collected samples. Arguments used are the same as that for [batchalign]({{< relref "KBhbatchalign.md" >}}), except _we filter out the `INV` tier_ as we are detecting AD on patient and not investigator: so  `flo +d +ca +t* -tINV`
-   Moved all collected samples (and changed extension to .txt) to the same sub-folder, but in `transcripts_nodisfluency`


### July 2nd {#july-2nd}

-   Created a dataprep script `dataprep.py` which dumps a pickled copy of cleaned data to `transcripts_nodisfluency/pitt-7-1.dat`.
-   Created sliding windows of 5 pieces of dialogue concatenated, stored it in `transcripts_nodisfluency/pitt-7-1-windowed.dat`
-   Used tencent/HuYong's `nghuyong/ernie-2.0-en` Ernie 2.0 model, the continuous language model from Baidu (Layer:12, Hidden:768, Heads:12)


### July 4th {#july-4th}

-   Finalized training code. Selected base hyperparameters {bs: 8, epochs: 2, lr: 3e-3, length: 60}. Again, we are using Baidu's `nghuyong/ernie-2.0-en`.


## Concerns and Questions {#concerns-and-questions}


### July 2nd {#july-2nd}

-   `pitt7-1/dementia/493-0` PAR tier "tell me everything you see going on in that picture" doesn't seem to be labeled correctly; I am guessing that's supposed to be INV?
-   Has anyone tried to include investigator/participant cross-dialogue?