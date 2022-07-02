+++
title = "DementiaBank Acoustics Project"
author = ["Houjun Liu"]
draft = false
+++

The [DementiaBank Acoustics Project]({{< relref "KBhdementiabank_acoustics_project.md" >}}) is a working title for an acoustic-only challenge for AD detection. This document serves as the lab notebook for this project.


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