---
slug: hacktoberfest-with-stryker
title: 'Celebrating Hacktoberfest results'
authors: [richardwerkman, nicojs, hugo-vrijswijk]
tags: [stryker mutator, release, hacktoberfest, hackathon]
---

At Stryker we can look back at a very successful Hacktoberfest this year! On the last weekend of October, we got together with other 'open-sourcerers' to help reduce the number of outstanding issues on our Stryker projects.

Info Support sponsored the hackathon, in addition to the regular sponsoring.

![accomplishments](/images/blogs/hacktoberfest-2022.jpg)

<!-- truncate -->

## Accomplishments

During the hackathon, we worked on various issues, from minor bug fixes to significant features that have been in progress for months. Not all work has resulted in merged PRs, but everyone learned a lot.

Let's take a look at what we have accomplished in just two days of hacking:

### Stryker JS

### Stryker.NET

Thanks [Yakiv Yusyn](https://github.com/yakivyusin) for your contribution on the Math mutations.
- Feat: [Add mutator for Math class](https://github.com/stryker-mutator/stryker-net/pull/2244)

Thanks [Peter Bonnema](https://github.com/PBonnema) for your contribution, the Null-coalesing assignment mutator. And a nasty bug that was discovered during hacktoberfest.
- Feat: [Add mutator for `??=`](https://github.com/stryker-mutator/stryker-net/pull/2274)
- Fix: [Spaces in the output path are supported for the -o option](https://github.com/stryker-mutator/stryker-net/pull/2264)
- Docs: [Add reference to integration test projects in contribution guide](https://github.com/stryker-mutator/stryker-net/pull/2275)

Thanks [Liam Rougoor](https://github.com/Liam-Rougoor) for your contribution of 2 pull requests!
- Feat: [Add object initializer mutator](https://github.com/stryker-mutator/stryker-net/pull/2259)
- Fix: [Multiple mutator descriptions](https://github.com/stryker-mutator/stryker-net/pull/2277)

Thanks [Cyrille Dupuydauby](https://github.com/dupdob)
- Fix: [False "NoCoverage" mark in the report](https://github.com/stryker-mutator/stryker-net/pull/2254)
- Fix: [Handle mutations of prefixed increment/decrement](https://github.com/stryker-mutator/stryker-net/pull/2285)

Thanks [Valentin Breuß](https://github.com/vbreuss)
- Fix: [Correctly classify changed files as source or test files](https://github.com/stryker-mutator/stryker-net/pull/2256)

Thanks [Yorrick Bakker](https://github.com/ysbakker)
- Fix: [Correctly show whitespace in report](https://github.com/stryker-mutator/stryker-net/pull/2289)
- Fix: [Correctly show whitespace in report](https://github.com/stryker-mutator/stryker-net/pull/2276)
- Docs: [Add operating modes page](https://github.com/stryker-mutator/stryker-net/pull/2291)

Thanks [Aysha Athar](https://github.com/AyshaAthar)
- Chore: [Removed hard coded references to command line](https://github.com/stryker-mutator/stryker-net/pull/2268)

### Mutation testing elements (report)

- Feat: [Replace bootstrap with tailwind](https://github.com/stryker-mutator/mutation-testing-elements/pull/2160)

### See you next year?

Given the success of this year's hackathon, we will also organize one next year! This hackathon takes place in The Netherlands and Belgium, so be sure to join if you are in the neighborhood.
