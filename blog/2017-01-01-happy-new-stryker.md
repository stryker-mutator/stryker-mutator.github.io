---
slug: happy-new-stryker
title: Happy new Stryker!
author: Nico Jansen
author_title: Stryker Team
author_url: https://github.com/nicojs
author_image_url: https://avatars3.githubusercontent.com/u/1828233?s=400&u=fec18ad3776aaafec54c49bbd7173a841ae7ea59&v=4
tags: [stryker]
---

## 2017 - The year to invest into test quality

Up until now, when you were writing unit tests, you were actually investing in _code quality_. Catching bugs early by continuously
exercising your code with unit tests and keeping your stakeholders happy by presenting them with a code coverage number of 85% or higher.
But does code coverage tell the entire story? Are your tests actually able to detect bugs? How do you test _your tests_?
That's the problem [mutation testing](https://en.wikipedia.org/wiki/Mutation_testing) sets out to solve.

<!--truncate-->

### Mutation testing in JavaScript

Due to JavaScript's dynamic nature, unit testing has become a fundamental tool to bring a higher level of robustness to JavaScript projects.
Your average JavaScript app can easily have around 1,000 unit tests. Ensuring that these are actually _effective_ can be a full-time job. This is where Stryker comes in.
[Stryker Mutator](http://stryker-mutator.github.io/) is our approach to providing a comprehensive mutation testing tool for the JavaScript environment.

We start out by altering your source code ever so slightly (e.g. turning a `+` into `-`) and then running your tests to see if they are
resilient to this _"mutant"_. If they are (and they fail), all is fine - the _mutant is dead_. If they don't, the _mutant_ survived and you have to fix your test.

## Stryker Hackweek 2016

Stryker began its life as the thesis project of Simon de Lang. After graduating, his thesis tutor Nico Jansen joined him and continued development in the open on [GitHub](https://github.com/stryker-mutator/).
Since then they had five major releases, improving performance, adding support for the [Karma](http://karma-runner.github.io/1.0/index.html) and [Mocha](http://mochajs.org/) test runners,
as well as creating a fancy [HTML reporter](https://github.com/stryker-mutator/mutation-testing-elements/tree/master/packages/mutation-testing-elements).

Up until now, the two of them did all of this in their own time, next to their daytime jobs as software engineers.

Around came the traditionally slow Christmas time period, allowing a select few of their colleagues at [Info Support](https://www.infosupport.com/) to join them for 4 days for the **_Stryker Hackweek 2016_**.

### Achieved goals

The whole team enjoyed the experience a lot and had good fun extending Stryker and fixing issues.
We mostly concentrated on integrating Stryker with SonarQube, as well as improving the first time usage experience.

All in all we made **47 commits**, closed **18 issues**, eat **6 kebabs** and **4 subway sandwiches**!
Here's a quick overview of what we did:

- Created a [Stryker SonarQube plugin](https://github.com/stryker-mutator/sonar-stryker-plugin), that turns survived mutants into neat SonarQube issues
- Added [a blog](http://stryker-mutator.github.io/blog.html) to the Stryker homepage
- Upgraded the TypeScript compiler in all projects to 2.1
- Released [version 0.5.5 of Stryker](http://stryker-mutator.github.io/blog/2016-12-30/stryker-0-5-5.html), including:
  - A new progress reporter
  - Limit the number of test-names to log in the clear text reporter
  - Support to [exclude online files from globbing](https://github.com/stryker-mutator/stryker-js/issues/90)
- Support for [karma config parsing in the stryker-karma-runner](https://github.com/stryker-mutator/stryker-js/tree/master/packages/stryker-karma-runner/issues/7)
- Improved documentation for first time-users
- A plan for a series of blog articles

### The Hackweek Team

![The Hackweek Team (f.l.t.r.): Alex van Assem, Nico Jansen, Simon de Lang, Philipp Weissenbacher, Jasper Catthoor, Wannes Van Regenmortel](/images/blogs/stryker-team-photo.jpg)

The Stryker Hackweek team consisted of (from left to right):

- Alex van Assem: Agile coach and TypeScript hacker
- Nico Jansen: T-shaped software engineer
- Simon de Lang: Software engineer and TypeScript aficionado
- Philipp Weissenbacher: Software/BI engineer
- Jasper Catthoor: Software engineer (via Info Support Belgium)
- Wannes Van Regenmortel: Software engineer (via Info Support Belgium)

#### Want to try out Stryker? Begin with the handy [quick start guide](http://stryker-mutator.github.io/quickstart.html).
