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
-   Ran `flo` on all collected samples. Arguments used are the same as that for [batchalign]({{< relref "KBhbatchalign.md" >}}), except _we filter out the `INV` tier_ as we are detecting AD on patient and not investigator: so `flo +d +ca +t* -tINV`
-   Moved all collected samples (and changed extension to .txt) to the same sub-folder, but in `transcripts_nodisfluency`


### July 2nd {#july-2nd}

-   Created a dataprep script `dataprep.py` which dumps a pickled copy of cleaned data to `transcripts_nodisfluency/pitt-7-1.dat`.
-   Created sliding windows of 5 pieces of dialogue concatenated, stored it in `transcripts_nodisfluency/pitt-7-1-windowed.dat`
-   Used tencent/HuYong's `nghuyong/ernie-2.0-en` Ernie 2.0 model, the continuous language model from Baidu (Layer:12, Hidden:768, Heads:12)


### July 4th {#july-4th}

-   Finalized training code. Selected base hyperparameters {bs: 8, epochs: 2, lr: 3e-3, length: 60}. Again, we are using Baidu's `nghuyong/ernie-2.0-en`.
-   Started training fastcalculator on `24bc812`


#### faithful-frog-3 {#faithful-frog-3}

{bs: 8, epochs: 2, lr: 3e-3, length: 60, pitt-7-1-windowed.dat }

{{< figure src="/ox-hugo/2022-07-04_19-20-13_screenshot.png" >}}

-   Commentary: LR could be too high, looking at the divergent loss behavior.
-   Decision: dropping bs to `4` and lr to `1e-5`, similar to previous transformers. Also training for 3 epochs.


#### revived-disco-5 {#revived-disco-5}

{bs: 4, epochs: 3, lr: 1e-5, length: 60, pitt-7-1-windowed.dat }

{{< figure src="/ox-hugo/2022-07-04_19-28-07_screenshot.png" >}}

-   Commentary: quintessential overfitting
-   Decision:
    -   Made the corpus bigger
        -   cleaned the entire [Pitt](https://dementia.talkbank.org/access/English/Pitt.html) corpus (`pitt-7-4` in the `raw` folder) to become training data. Similar to `pitt-7-1`, ran `flo` on all collected samples; arguments used are the same as that for [batchalign]({{< relref "KBhbatchalign.md" >}}), except _we filter out the `INV` tier_ as we are detecting AD on patient and not investigator: so `flo +d +ca +t* -tINV`; the `flo`'d results are in `transcripts_nodisfluency`.
        -   the notable difference between the previous dataset `7-1` and the current one `7-4` is that the `7-4` are prepended numbered by the task (`cookie/100-01.cha` `> =cookie-100-01.txt`)
        -   New (full) Pitt data as prepared above is ran though the dataprep script as of `b325514cfad79da82d7a519ed29ea19ed87b2be4` (difference is that empty/dummy files are ignored), and pickled at `transcripts_nodisfluency/pitt-7-4.dat` and `transcripts_nodisfluency/pitt-7-4-windowed.dat` respectively.
        -   For new data, window size is still `5`, splitting `10` cases out for testing now instead of `5`.


#### vocal-oath-6 {#vocal-oath-6}

{bs: 4, epochs: 3, lr: 1e-5, length: 60, pitt-7-4-windowed.dat}

{{< figure src="/ox-hugo/2022-07-04_20-20-01_screenshot.png" >}}

{{< figure src="/ox-hugo/2022-07-04_20-35-54_screenshot.png" >}}

-   Commentary: high recall, low precision. Perhaps classes aren't balanced?
-   But anyways, going to discuss these results as they seem to meet results we see in [Yuan 2021]({{< relref "KBhyuan_2021.md" >}}), even without top-N ensemble (though this is one trial, [LOOCV]({{< relref "KBhloo.md" >}}) may still show that we actually need it.)


## Concerns and Questions {#concerns-and-questions}


### July 2nd {#july-2nd}

-   `pitt7-1/dementia/493-0` PAR tier "tell me everything you see going on in that picture" doesn't seem to be labeled correctly; I am guessing that's supposed to be INV?
-   Has anyone tried to include investigator/participant cross-dialogue?