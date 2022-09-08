---
slug: announcing-stryker-2-0
title: Announcing Stryker 2.0
author: Simon de Lang
author_title: Stryker Team
author_url: https://github.com/simondel
author_image_url: https://avatars1.githubusercontent.com/u/4221997?s=460&u=d09f7c27690d66764ff2f2ebb6d9f8d5431ad9e3&v=4
tags: [stryker-js]
---

A new major version of Stryker for JavaScript and TypeScript has been released: version 2.0.0.
This blog post will cover some of the changes. For a full list of changes, please read [our changelog](https://github.com/stryker-mutator/stryker-js/blob/master/CHANGELOG.md#200-2019-05-17).

<!--truncate-->

If you run into any issues using the latest version of Stryker, please let us know!

## 🚀 Migration

Migrating to the latest major version is easy! Just update all `@stryker-mutator` dependencies to at least version 2.0.0. If you are still using version 0.x.x, then please look at [our blog post regarding stryker v1](https://stryker-mutator.io/blog/2019-02-13/announcing-stryker-1-0).

If you're new to Stryker, please see [our quickstart](/stryker/quickstart). Have fun with mutation testing!

## 🔥 Breaking changes

This major release comes with some breaking changes:

1. NodeJS version 8 or higher is now required to run Stryker
2. The code of Stryker is now es2017 code instead of es5

## ✨ What's new

Not a big list of new features this time around. Mainly housekeeping and other optimizations. Here you'll find a list of small improvements.

- Prettier has been removed as a direct dependency. We use prettier when initially writing your stryker.conf.js to disk (with `stryker init`).
  We now run prettier using the npx command instead of packaging it with Stryker, keeping Stryker lean and mean.
- We've updated our source-map dependency to enable lazy loading. This ensures that coverage data is only mapped when (and if) it's required.
- VueJS files are only mutated when they contain `<script>` blocks.

## 👴 Deprecations

Since Stryker v1, we've introduced a deprecation policy. This means that we'll support features for one major release after we've deprecated them.
This is a (small) list of stuff we've deprecated. You'll also get a warning if you still use them in your setup.

- The use of mocha version 5 and below is deprecated. This is mainly because of big changes the way you configure mocha.
  Please upgrade to mocha 6 or above. See [their changelog](https://github.com/mochajs/mocha/blob/master/CHANGELOG.md#600--2019-02-18) for more information about upgrading.
  Support for mocha version 5 and below will be removed in the future (with Stryker v3 probably).
- The `onScoreCalculated` internal reporter event is deprecated. Please use `onMutationTestReportReady` and calculate the score using [mutation-testing-metrics](https://github.com/stryker-mutator/mutation-testing-elements/tree/master/packages/mutation-testing-metrics#readme).
  All reporters maintained by the Stryker team are already migrated.

## 📅 Release schedule

We'll keep improving Stryker by fixing nasty bugs, improving code (and test) quality and by adding new features.
The next major release of Stryker will probably be at the start of 2020 due to the LTS support of NodeJS version 8 ending.
