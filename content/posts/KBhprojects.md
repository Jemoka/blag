+++
title = "Projects Index"
author = ["Houjun Liu"]
tags = ["index"]
draft = false
+++

[Projects Index]({{< relref "KBhprojects.md" >}}) is a [index]({{< relref "KBhzettlekasten_index.md" >}}) that contains a list of almost all projects for which I have ever worked on. Major categories are highlighted from chapter titles.

****This index does not include my jobs****; it is meant to be a list of endeavors for which I had key designing or founding impact---not including many paid-jobs with an existing structure but including small one-off scripts and utilities; for my jobs and volunteering background, please [checkout my LinkedIn](https://www.linkedin.com/in/houjun-liu/).


## Research Projects {#research-projects}

I have spent the last 6 years or so working as an actively-publishing member of the science research community; my research interests are mainly in NLP, semantic analysis, L2 learning, and science education. As a part of my work with Professor [Brian Macwinney]({{< relref "KBhbrian_macwinney.md" >}}), I have also recently taken up interest in acoustic modeling.

For a list of my recent research, please head to the [Research Index]({{< relref "KBhresearch_index.md" >}}).


## Media Production Projects {#media-production-projects}

I produce a lot of media (videos, podcasts, blogs, live events/talks) as a part of publicizing my work or for other purposes. For those types of projects, head on over to [Production Index]({{< relref "KBhproduction_index.md" >}}).


## Large-Scale Endeavors {#large-scale-endeavors}


### Condution {#condution}

An open-source task management app. [Website](https://www.condution.com/).

Motivation: I got really tired with most other to-do apps after swapping them out over and over again, until I got fed up and built one with some friends.

-   Role: Co-Founder, Lead Developer.
-   Technologies: React, Ionic, Firebase, Typescript, Swift, PostgreSQL
-   Key stats and facts: 10,000+ users, 8-person team, [featured](https://www.almanacnews.com/print/story/2021/02/26/community-briefs) in the Bay Area almanac, praised by Asana’s head of developer relations for “open-source advocacy”


### MODAP {#modap}

A R&amp;D team for fireline safety during emergency fires. [Repository](https://github.com/MODAP/stack).

Motivation: a friend approached me with an opportunity to help our local community, especially with the increased influx of fires.

-   Role: Team Lead
-   Technologies: Rust, Torch, ARM, electronics (i2C, UART, messaging protocols, etc.)
-   Key stats and facts: coordinated 5 engineers in developing new technology, supported by Dr. Robert G. Gann, Deputy Director, Center of Excellence for Advanced Technology Aerial Firefighting at the state of Colorado as well as Captain Mason of CalFire


## Full-Stack Projects {#full-stack-projects}


### tractotato {#tractotato}

CommonLisp macroset for time tracking. [Repo](https://github.com/Jemoka/tractotato).

Motivation: I wanted to learn CommonLisp macros syntax after reading the [Land of Lisp](http://landoflisp.com/) book.

-   Role: author
-   Technologies: CommonLisp


### Scratchathon Portal {#scratchathon-portal}

Portal to submit projects for a scratch hackathon I hosted. [Repo](https://github.com/Jemoka/ScratchathonPortal).

Motivation: my friends [McGuy](https://www.youtube.com/channel/UC2MtlTiLxWNQAjHyFZt95Vw) and [fuelvin](https://www.youtube.com/watch?v=1Fll6uaz5Kk), both content creators on Scratch on YouTube, put together a Scratch hackathon summer of 2020. This is the submission portal.

-   Role: author
-   Technologies: React, Vercel, Firebase


### syzygy {#syzygy}

Library rethinking to-do list dating to be more flexible and powerful. [Repo](https://github.com/jklsnt/syzygy).

Motivation: a friend and I wanted to innovate beyond the scope of Condution to see how we can abstract away a to-do list system to its bare minimum.

-   Role: co-founder, co-author
-   Technologies: Rust


### positron {#positron}

Library for building lightweight native apps using web tech. [Repo](https://github.com/jklsnt/positron).

Motivation: I wanted to re-make electron to be more lightweight using Suckless' Surf browser concept.

-   Role: author
-   Technologies: C++, GTK


## OS/Driver Development {#os-driver-development}


### Broadcom Wifi/Bluetooth 4377 Chip Linux Driver {#broadcom-wifi-bluetooth-4377-chip-linux-driver}

A driver patchset to support cutting-edge Broadcom 4377 Wifi/Bluetooth chips. [Repo](https://github.com/Jemoka/linux-mbp-wifi).

Motivation: I needed to be able to use Wifi on my laptop while running Arch Linux.

-   Role: author
-   Technologies: C, (small amounts of) Assembly
-   Key stats and facts: integrated into the [t2linux](https://wiki.t2linux.org/) pipeline used to make WiFi possible on Linux for most MacBooks released after 2018


## Distributed Algorithms and Parallel Computing {#distributed-algorithms-and-parallel-computing}


### coveather {#coveather}

An encrypted, anonymized system for protected health information verification. [Preprint](https://arxiv.org/abs/2205.02753), [Repo](https://github.com/Jemoka/coveather), and [internal note]({{< relref "KBhcoveather.md" >}}).

Motivation: I wanted to be able to make vaccine passports more feasible because the current COVID testing/vaccine verification scheme is really bad.

-   Role: author
-   Technologies: Clojure, `core.async` concurrency, Monte-Carlo simulations, blockchain, PGP
-   Key stats and facts: project won first place at the California STEM Fair, and got special recognition from the Yale Science and Engineering assoc. Total award $3000.


### multischedule {#multischedule}

A multiple-asynchronous scheduling and delegation algorithm. [Repo](https://github.com/Jemoka/multischedule).

Motivation: (didn't even come close to getting there) I wanted to create a way to solve or simplify debugging loop overrun problems in robotics codebases.

-   Role: author
-   Technologies: Clojure, `core.async` concurrency


### rotifer {#rotifer}

A work-in-progress distributed algorithm for taproot. [Repo](https://github.com/jklsnt/rotifer).

Motivation: I wanted to make taproot even more distributed if possible.

-   Role: author
-   Technologies: Clojure, XML, UDP, ICE


### simian {#simian}

Exploring OT/CRDT and collaborative text editing for taproot. [Repo](https://github.com/jklsnt/simian).

Motivation: I wanted to learn about how apps like Google Docs work, and explore Operational Transformation/CRDT, in hopes of putting it into Taproot

-   Role: author
-   Technologies: Clojure, OT, CRDT


### aron {#aron}

A distributed multi-dimensional optimization tool. [Repo](https://github.com/Jemoka/aron).

Motivation: [Nueva]({{< relref "KBhnueva_courses_index.md" >}})'s course scheduling was quite a mess, and I wanted to help. It is a very complex problem and this project is in the freezer at the moment.

-   Role: author
-   Technologies: CommonLisp


### mitte {#mitte}

Easy UDP sockets. [Repo](https://github.com/jklsnt/mitte), [Docs](https://jklsnt.github.io/mitte/mitte/).

Motivation: a friend and I wanted to explore UDP.

-   Role: co-author
-   Technologies: Rust, UDP, ICE (connection)


## Cryptography and security {#cryptography-and-security}

See also: [coveather](#coveather).


### jrainbow {#jrainbow}

An implementation of a MD5 rainbow table. [Repo](https://github.com/Jemoka/rainbow), [Crate](https://crates.io/crates/jrainbow).

Motivation: I wanted to understand how Rainbow Tables worked.

-   Role: author
-   Technologies: Rust, MD5


## Note-taking Systems and \\(\LaTeX\\) improvements {#note-taking-systems-and-latex-improvements}


### taproot {#taproot}

A shared [zettlekasten]({{< relref "KBhzettlekasten.md" >}}) of notes and learning resources put together by some friends and I. there has been a few iterations. [Current Repo](https://github.com/jklsnt/taproot3), [Current Site](https://taproot3.jklsnt.com/), [Legacy Site](https://taproot2.shabang.cf/), [Even More Legacy Site](https://taproot.shabang.cf/).

Motivation: I started writing nice \\(\LaTeX\\) PDFs of my homework, and some friends wanted to have access to it. Later when I mentioned it, another friend had a similar need; so we asked many people to pool our notes and work together to share.

-   Role: co-founder, co-lead, developer
-   Technologies: Next.JS, XeLaTeX, GNU Make, Firn, Hugo, Emacs Org, Org-Publish, Markdown


### blag {#blag}

The [zettlekasten]({{< relref "KBhzettlekasten.md" >}}) you are currently in! My currently maintained personal knowledgebase. [Repo](https://github.com/jemoka/blag), [Site](https://www.jemoka.com/).

Motivation: I wanted to experiment with more advanced note-taking techniques after developing taproot, and it ended up superseeding the note-taking abilities of taproot.

-   Role: author
-   Technologies: Next.js, Emacs Org, Hugo


### gdoc.el {#gdoc-dot-el}

A utility to enable GNU Emacs to edit Google Doc documents based on the `gdrive` utility. [Repo](https://github.com/Jemoka/gdoc.el).

Motivation: I wanted to edit Google Docs in Emacs!

-   Role: author
-   Technologies: GNU Emacs, elisp


### interesting {#interesting}

Things that my friends and I find interesting, chucked on the web and builds itself. [Repo](https://github.com/Jemoka/interesting), [Site](https://interesting-blue.vercel.app/). No longer maintained.

Motivation: many text channels were too clogged with stuff my friend group found interesting, so I wanted to take initiative to collect them.

-   Role: co-founder, author
-   Technologies: Next.js, Vercel, remark, CommonMark Markdown


## Public Configurations {#public-configurations}


### borg {#borg}

Automatically configure terminals. [Repo](https://github.com/Jemoka/Borg).

Motivation: I needed a way to copy my system terminal config onto a system quickly.

-   Role: author
-   Technologies: Bash, Zsh, OhMyZsh


### .config {#dot-config}

A group of sane configuration files. [Repo](https://github.com/Jemoka/.config).

Motivation: some Redditors asked for my Config, and I thought I'd share it to benefit the community; also for personal backup.

-   Role: author, maintainer
-   Technologies: Unix administration, Perl, Ruby, LISP


### .emacs.d {#dot-emacs-dot-d}

Simple, powerful, and semantic GNU Emacs configuration for personal use. [Repo](https://github.com/Jemoka/.emacs.d).

Motivation: I wanted to track my progress in developing a working Emacs config.

-   Role: author, maintainer
-   Technologies: GNU Emacs, elisp