+++
title = "LLMs are fantastic search engines, so I built one"
author = ["Houjun Liu"]
tags = ["writing"]
draft = false
+++

In the past 20 years, semantic indexing sucked.

For the most part, the core offerings of search products in the last while is divided into two categories:

1.  Full-text search things (i.e. every app in the face of the planet that stores text), which for the most part use something n-grammy like [Okapi BM25](https://en.wikipedia.org/wiki/Okapi_BM25) to do nice fuzzy string matching
2.  Ranking/Recommendation things, who isn't so much trying to _search_ a database as they are trying to guess the user's intent and _recommend_ them things from it

And we lived in a pretty happy world in which, depending on the application, developers chose one or the other to build.

There's something really funny to do with this idea of "search". Take, for instance, Google. Its a "search" engine---but really it _recommends_ people information that is probably relevant; PageRank, the company's claim to fame, isn't even textual analysis of any type at all: it is a measure of _relevance_, based on centrality arguments about where the average web surfer may end up.

By framing systems like Google as an act of recommendation, we can see why it is so widely adopted: it, really, brings the best of the Internet to the user---a catalogue of sorts---based on text which the user provides as input data regarding their interest. It is, importantly, _not a capital-s Search engine_.

And perhaps this explains why this doesn't work:

{{< figure src="/ox-hugo/2023-09-02_15-01-29_screenshot.png" caption="<span class=\"figure-number\">Figure 1: </span>Oh my lord scary books." width="60%" height="60%" >}}

Wouldn't it be nice


## Here Comes the LLM {#here-comes-the-llm}

So for the past 20 years where we had lots of data to search through, we waited. And finally,


## Gosh Darn Chatbots {#gosh-darn-chatbots}

And yet, everybody and their pet duck is building a chat bot. What gives? [Wattenburger has this fantastic take](https://wattenberger.com/thoughts/boo-chatbots) on
