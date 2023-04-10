+++
title = "Transformer Speech Diarization"
author = ["Houjun Liu"]
draft = false
+++

## Background {#background}

Current deep-learning first approaches have shown promising results for the speech text diarization task. For ASR-independent diarization, specifically, two main methods appear as yielding fruitful conclusions:

1.  Auditory feature extraction using deep learning to create a trained, fixed-size latent representation via Mel-frequency cepstral coefficients slices that came from any existing voice-activity detection (VAD) scheme ((<a href="#citeproc_bib_item_6">Snyder et al. 2018</a>)), where the features extracted with the neural network are later used with traditional clustering and Variational Bayes refinement ((<a href="#citeproc_bib_item_5">Sell et al. 2018</a>; <a href="#citeproc_bib_item_2">Landini et al. 2022</a>)) approaches to produce groups of diarized speakers
2.  End-to-end neural approaches which takes temporally-dependent log-mel-frequency cepstrum and perform voice activity detection, speaker recognition, and diarization directly on the same neural network ((<a href="#citeproc_bib_item_1">Fujita et al. 2019</a>))

    {{< figure src="/ox-hugo/2023-04-09_23-26-04_screenshot.png" >}}

The latter, end-to-end approach, offers lower Diarization Error Rate (DER) than former clustering ((<a href="#citeproc_bib_item_1">Fujita et al. 2019</a>)), achiving 10.76 vs. 11.53 DER on the CALLHOME dataset respectively. However, it confers a few disadvantages: the end-to-end system produces a diarization result directly dependent on the time dimension of the input Log-Mel (i.e. it outputs probability per speaker per time slice), so its error could include _both_ the error in voice activity detection and diarization; furthermore, the one-shot nature of this method allows no interpretation or manipulation of its actual outputs---such as specifying the number of speakers _after_ diarization is completed (as is possible with clustering because one could simply choose the number of centroids to calculate) (<a href="#citeproc_bib_item_3">Park et al. 2021</a>).

We therefore desire here to combine the advantages of both methods discussed here in producing a diarization technique that both retains the flexible nature of vector-based approaches but also seeks to generate as complete and performant (in terms of DER) a pipeline as possible with deep learning.


## Motivation {#motivation}

The discussion here is motivated by a few facts:

1.  Excellent ((<a href="#citeproc_bib_item_4">Radford et al. 2022</a>)) ASR models exist without being pre-trained on the diarization task, meaning they produce transcriptions without the speakers labels
2.  The number of speakers is not exogenously known, yet could be specified after diarization



<style>.csl-entry{text-indent: -1.5em; margin-left: 1.5em;}</style><div class="csl-bib-body">
  <div class="csl-entry"><a id="citeproc_bib_item_1"></a>Fujita, Yusuke, Naoyuki Kanda, Shota Horiguchi, Yawen Xue, Kenji Nagamatsu, and Shinji Watanabe. 2019. “End-to-End Neural Speaker Diarization with Self-Attention.” In <i>2019 IEEE Automatic Speech Recognition and Understanding Workshop (ASRU)</i>, 296–303. IEEE.</div>
  <div class="csl-entry"><a id="citeproc_bib_item_2"></a>Landini, Federico, Ján Profant, Mireia Diez, and Lukáš Burget. 2022. “Bayesian HMM Clustering of X-Vector Sequences (VBx) in Speaker Diarization: Theory, Implementation and Analysis on Standard Tasks.” <i>Computer Speech &#38; Language</i> 71 (January): 101254. doi:<a href="https://doi.org/10.1016/j.csl.2021.101254">10.1016/j.csl.2021.101254</a>.</div>
  <div class="csl-entry"><a id="citeproc_bib_item_3"></a>Park, Tae Jin, Naoyuki Kanda, Dimitrios Dimitriadis, Kyu J. Han, Shinji Watanabe, and Shrikanth Narayanan. 2021. “A Review of Speaker Diarization: Recent Advances with Deep Learning.” arXiv. <a href="http://arxiv.org/abs/2101.09624">http://arxiv.org/abs/2101.09624</a>.</div>
  <div class="csl-entry"><a id="citeproc_bib_item_4"></a>Radford, Alec, Jong Wook Kim, Tao Xu, Greg Brockman, Christine McLeavey, and Ilya Sutskever. 2022. “Robust Speech Recognition via Large-Scale Weak Supervision.” <i>arXiv Preprint arXiv:2212.04356</i>.</div>
  <div class="csl-entry"><a id="citeproc_bib_item_5"></a>Sell, Gregory, David Snyder, Alan McCree, Daniel Garcia-Romero, Jesús Villalba, Matthew Maciejewski, Vimal Manohar, et al. 2018. “Diarization Is Hard: Some Experiences and Lessons Learned for the JHU Team in the Inaugural DIHARD Challenge.” In <i>Interspeech 2018</i>, 2808–12. ISCA. doi:<a href="https://doi.org/10.21437/Interspeech.2018-1893">10.21437/Interspeech.2018-1893</a>.</div>
  <div class="csl-entry"><a id="citeproc_bib_item_6"></a>Snyder, David, Daniel Garcia-Romero, Gregory Sell, Daniel Povey, and Sanjeev Khudanpur. 2018. “X-Vectors: Robust DNN Embeddings for Speaker Recognition.” In <i>2018 IEEE International Conference on Acoustics, Speech and Signal Processing (ICASSP)</i>, 5329–33. Calgary, AB: IEEE. doi:<a href="https://doi.org/10.1109/ICASSP.2018.8461375">10.1109/ICASSP.2018.8461375</a>.</div>
</div>
