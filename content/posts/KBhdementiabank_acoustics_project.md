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


#### train: faithful-frog-3 {#train-faithful-frog-3}

{bs: 8, epochs: 2, lr: 3e-3, length: 60, pitt-7-1-windowed.dat }

{{< figure src="/ox-hugo/2022-07-04_19-20-13_screenshot.png" >}}

-   Commentary: LR could be too high, looking at the divergent loss behavior.
-   Decision: dropping bs to `4` and lr to `1e-5`, similar to previous transformers. Also training for 3 epochs.


#### train: revived-disco-5 {#train-revived-disco-5}

{bs: 4, epochs: 3, lr: 1e-5, length: 60, pitt-7-1-windowed.dat }

{{< figure src="/ox-hugo/2022-07-04_19-28-07_screenshot.png" >}}

-   Commentary: quintessential overfitting
-   Decision:
    -   Made the corpus bigger
        -   cleaned the entire [Pitt](https://dementia.talkbank.org/access/English/Pitt.html) corpus (`pitt-7-4` in the `raw` folder) to become training data. Similar to `pitt-7-1`, ran `flo` on all collected samples; arguments used are the same as that for [batchalign]({{< relref "KBhbatchalign.md" >}}), except _we filter out the `INV` tier_ as we are detecting AD on patient and not investigator: so `flo +d +ca +t* -tINV`; the `flo`'d results are in `transcripts_nodisfluency`.
        -   the notable difference between the previous dataset `7-1` and the current one `7-4` is that the `7-4` are prepended numbered by the task (`cookie/100-01.cha` `> =cookie-100-01.txt`)
        -   New (full) Pitt data as prepared above is ran though the dataprep script as of `b325514cfad79da82d7a519ed29ea19ed87b2be4` (difference is that empty/dummy files are ignored), and pickled at `transcripts_nodisfluency/pitt-7-4.dat` and `transcripts_nodisfluency/pitt-7-4-windowed.dat` respectively.
        -   For new data, window size is still `5`, splitting `10` cases out for testing now instead of `5`.


#### train: vocal-oath-6 {#train-vocal-oath-6}

{bs: 4, epochs: 3, lr: 1e-5, length: 60, pitt-7-4-windowed.dat}

{{< figure src="/ox-hugo/2022-07-04_20-20-01_screenshot.png" >}}

{{< figure src="/ox-hugo/2022-07-04_20-35-54_screenshot.png" >}}

-   Commentary: high recall, low precision. Perhaps classes aren't balanced?
    -   Spoiler alert: they are not.
    -   An inspection of data reveals that there is 3211 rows of dementia, 2397 rows of control
-   Decision:
    -   Created `pitt-7-4-bal` and `pitt-7-4-windowed-bal` series of data based on dataprep.py on `703f79248a20fd7a13a5033ca2bf7f691f42c941`. This version force-crops to make sure that the dementia and control indicies have the exact same length for each class.


#### train: helpful-leaf-7 {#train-helpful-leaf-7}

{bs: 4, epochs: 3, lr: 1e-5, length: 60, pitt-7-4-windowed-bal.dat}

{{< figure src="/ox-hugo/2022-07-04_21-31-19_screenshot.png" >}}

{{< figure src="/ox-hugo/2022-07-04_21-35-43_screenshot.png" >}}

Beautiful. Question now is whether or not there is data leakage/external heuristics. It is a good time to do some [LOOCV]({{< relref "KBhloo.md" >}}). Getting this result without any disfluency calculations seems unlikely.

But anyways, going to discuss these results as they seem to meet results we see in [Yuan 2021]({{< relref "KBhyuan_2021.md" >}}), even without top-N ensemble; though this is one trial, [LOOCV]({{< relref "KBhloo.md" >}}) may still show that we actually need it.


### July 5th {#july-5th}

-   Began the day with creating the script k-fold validation; I originally hoped to exactly replicate the procedure of [Yuan 2021]({{< relref "KBhyuan_2021.md" >}}) for comparability, but, not sure how they got the actual result of a min/max range with [LOOCV]({{< relref "KBhloo.md" >}}) on binary; therefore, we will instead create a 95% [confidence interval]({{< relref "KBhconfidence_interval.md" >}}) analysis via a single-variable [t test]({{< relref "KBht_statistics.md" >}}) on standard k-fold validation. K=50
-   During one-off testing, another set of hyperparameters seems to work too: {bs: 72, epochs: 3, lr: 1e-5, length: 60, pitt-7-4-windowed-bal.dat}. As we have not begun tuning for hyperparameters, we are just going to use this set, K=50, for the first k-fold trial.


#### k-fold: F4ZVbGfdBAQvtvXemWZCZD {#k-fold-f4zvbgfdbaqvtvxemwzczd}

code: 55f77ff1dea03c3ed66967864dc52fd2c0062f23

{{< figure src="/ox-hugo/2022-07-05_13-22-24_screenshot.png" >}}

{bs: 72, epochs: 3, lr: 1e-5, length: 60, pitt-7-4-windowed-bal.dat}
K = 50

{{< figure src="/ox-hugo/2022-07-05_14-25-26_screenshot.png" >}}

{{< figure src="/ox-hugo/2022-07-05_14-26-00_screenshot.png" >}}

It seems like the results we got is consistent and validates in a manner which we expect.


### July 7th {#july-7th}

Yesterday was a day filled with working on [batchalign]({{< relref "KBhbatchalign.md" >}}), but we are back now. Today, I aim to look into the heuristic that I identified yesterday by playing with the model, which is that it seems like the model prefers the use of long-focused sentences _about_ cookies, so the heruistic its picking up is probably on-topicness.

I am going to first leverage the lovely `cdpierse/transformers-interpret` tool to help build some explainability by adding it to validate.py. Upon some human validation with random sampling, the model seem to do less well than I'd hoped. Running a train cycle with the new results/params seen above to see if it does better.


#### train: brisk-oath-10 {#train-brisk-oath-10}

{bs: 72, epochs: 3, lr: 1e-5, length: 60, pitt-7-4-windowed-bal.dat}

{{< figure src="/ox-hugo/2022-07-07_11-39-18_screenshot.png" >}}

{{< figure src="/ox-hugo/2022-07-07_11-48-40_screenshot.png" >}}

-   Commentary: It seems like the model is doing overall worse from validation data, but it does fairly well during test data.
-   Decision:
    -   I can fairly confidently claim that the model is just fitting on topic. As in, if the topic is about cookies (theft/taking/cookie/mother/etc.), it will be classified as control.
    -   One thing that we can do is to claim this task as directly task-controlled: that is, include **no** data except cookie and control for that difference
    -   Then, the model would't be able to predict the result b/c the variation in topic won't have influence.
    -   This is going to be prepared in the `cookiepitt-7-7-bal*` based on `dataprep.py` in commit `518dec82bb961c0a8ad02e3080289b56102aa1a2`


#### train: super-durian-11 {#train-super-durian-11}

{bs: 72, epochs: 3, lr: 1e-5, length: 60, cookiepitt-7-7-windowed-bal.dat}

{{< figure src="/ox-hugo/2022-07-07_13-51-01_screenshot.png" >}}

-   Commentary: the model is _no where near convergence_
-   Decision: multiplying the LR by 10


#### train: floral-sunset-12 {#train-floral-sunset-12}

{bs: 72, epochs: 3, lr: 1e-4, length: 60, cookiepitt-7-7-windowed-bal.dat}

{{< figure src="/ox-hugo/2022-07-07_13-54-38_screenshot.png" >}}

{{< figure src="/ox-hugo/2022-07-07_14-02-47_screenshot.png" >}}

-   Commentary: There we go. This seem to be more in line with what we see in [Yuan 2021]({{< relref "KBhyuan_2021.md" >}})
-   Decision: ok, let's elongate the actual content. Perhaps we can try a 7-element search instead? This is written as `cookiepitt-7-7-*-long`. Code based on `9e31f4bc13c4bfe193dcc049059c3d9bda46c8d0`


#### train: sweet-plasma-13 {#train-sweet-plasma-13}

{bs: 72, epochs: 3, lr: 1e-4, length: 60, cookiepitt-7-7-windowed-long-bal.dat}

{{< figure src="/ox-hugo/2022-07-07_15-05-28_screenshot.png" >}}

-   Commentary: underfitting
-   Dropping batch size down to 64 to add more steps


#### train: smart-river-14 {#train-smart-river-14}

{bs: 64, epochs: 3, lr: 1e-4, length: 60, cookiepitt-7-7-windowed-long-bal.dat}

{{< figure src="/ox-hugo/2022-07-07_15-13-21_screenshot.png" >}}

{{< figure src="/ox-hugo/2022-07-07_15-20-57_screenshot.png" >}}

-   Commentary: this finally fits to the specifications which [Yuan 2021]({{< relref "KBhyuan_2021.md" >}}) have revealed
-   Decision: running k-fold on this architecture


#### k-fold: XgsP4FVS6ScFxCZKFJoVQ5. {#k-fold-xgsp4fvs6scfxczkfjovq5-dot}

Code: 3870651ba71da8ddb3f481a7c3e046397a09d8b2

{{< figure src="/ox-hugo/2022-07-07_15-30-07_screenshot.png" >}}

{{< figure src="/ox-hugo/2022-07-07_16-18-44_screenshot.png" >}}

{{< figure src="/ox-hugo/2022-07-07_16-20-23_screenshot.png" >}}


## Concerns and Questions {#concerns-and-questions}


### July 2nd {#july-2nd}

-   `pitt7-1/dementia/493-0` PAR tier "tell me everything you see going on in that picture" doesn't seem to be labeled correctly; I am guessing that's supposed to be INV?
-   Has anyone tried to include investigator/participant cross-dialogue?


### July 4th {#july-4th}

-   Is the model overfitting on antiquated language?
-   Is the model overfitting on cooke-theft on-topic-ness?