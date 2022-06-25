+++
title = "ADReSS Literature Survey Index"
author = ["Houjun Liu"]
tags = ["index"]
draft = false
+++

The [ADReSS Literature Survey]({{< relref "KBhadress_literature_survey.md" >}}) is a literature survey for the results published during the [ADReSS Challenge]({{< relref "KBhadress_challenge.md" >}}).

| Paper Ref      | One Liner                                                                                                                                                                      | Note                                                    |
|----------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------|
| Antonsson 2021 | disflu. + [SVF]({{< relref "KBhsemantic_verbal_fluency.md" >}}) features trained on SVM: lexical &gt;  narrative qual.                                                         | [Antonsson 2021]({{< relref "KBhantonsson_2021.md" >}}) |
| Chlasta 2021   | features extracted from [VGGish]({{< relref "KBhvggish.md" >}}) on SVM; also trained new CNN from .wav                                                                         | [Chlasta 2021]({{< relref "KBhchlasta_2021.md" >}})     |
| Sadeghian 2021 | Used [GA]({{< relref "KBhgenetic_algorithum.md" >}}) for feature sel., achieved 94% w/ [MMSE]({{< relref "KBhmmse.md" >}}) alone; dev'd [ASR]({{< relref "KBhasr.md" >}}) tool | [Sadeghian 2021]({{< relref "KBhsadeghian_2021.md" >}}) |
| Martinc 2021   | CBOW (text) + [ADR]({{< relref "KBhactive_data_representation.md" >}}) (sound) [late fusion'd]({{< relref "KBhfusion.md#late-fusion" >}}) to a BERT, ablated for features      | [Martinc 2021]({{< relref "KBhmartinc_2021.md" >}})     |
| Meghanani 2021 | spontaneous speech transcripts with fastText and CNN; 83.33% acc                                                                                                               | [Meghanani 2021]({{< relref "KBhmeghanani_2021.md" >}}) |
| Yuan 2021      | ERNIE on transcripts with pause encoding; 89.6% acc                                                                                                                            | [Yuan 2021]({{< relref "KBhyuan_2021.md" >}})           |
| Jonell 2021    | Developed a kitchen sink of diag. tools and correlated it with biomarkers.                                                                                                     | [Jonell 2021]({{< relref "KBhjonell_2021.md" >}})       |
| Laguarta 2021  | large multimodel ([OVBM]({{< relref "KBhopen_voice_brain_model.md" >}})) to embed auditory info + biomarkers for clsf.                                                         | [Laguarta 2021]({{< relref "KBhlaguarta_2021.md" >}})   |
| Shah 2021      | [late fusion]({{< relref "KBhfusion.md#late-fusion" >}}) of n-gram and [OpenSMILE]({{< relref "KBhopensmile.md" >}}) on std. classifiers                                       | [Shah 2021]({{< relref "KBhshah_2021.md" >}})           |
| Lindsay 2021   | Cross-linguistic markers shared for AD patients between English and French                                                                                                     | [Lindsay 2021]({{< relref "KBhlindsay_2021.md" >}})     |

From [Meghanani 2021]({{< relref "KBhmeghanani_2021.md" >}}), a review:

{{< figure src="/ox-hugo/2022-06-24_00-32-54_screenshot.png" >}}