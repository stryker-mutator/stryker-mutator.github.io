---
slug: announcing-incremental-mode
title: 'Announcing StrykerJS incremental mode'
author: Nico Jansen
author_title: Stryker Team
author_url: https://github.com/nicojs
author_image_url: https://avatars3.githubusercontent.com/u/1828233?s=400&u=fec18ad3776aaafec54c49bbd7173a841ae7ea59&v=4
tags: [stryker]
---

We're excited to announce StrykerJS 6.2. Of course, this release comes with [some bug fixes](https://github.com/stryker-mutator/stryker-js/releases/tag/v6.2.0), but in this article, we want to focus on a popular new feature: incremental mutation testing.

Incremental mutation testing is ideal for Continuous Integration (CI) scenarios or if you want a faster feedback cycle locally. Indeed, many users seem to be interested in this since [it was our most upvoted issue ever](https://github.com/stryker-mutator/stryker-js/issues/2753).

While in 'incremental mode', StrykerJS will track the changes you make to your code and tests and only runs mutation testing on the changed code; while still providing a full mutation testing report at the end!

<!-- truncate -->

To update to the latest version of StrykerJS, install `@latest` as follows:

```shell
npm install --save-dev @stryker-mutator/core@latest
# OR
yarn add --dev @stryker-mutator/core@latest
```

Don't forget to update Stryker plugins. For example, when using the mocha runner:

```shell
npm install --save-dev @stryker-mutator/mocha-runner@latest
# OR
yarn add --dev @stryker-mutator/mocha-runner@latest
```

If you're new to mutation testing, it's a way to measure your tests' effectiveness. Please take a look at [our RoboBar 🤖🍷 example](https://stryker-mutator.io/example) and see how even 100% code coverage doesn't tell the whole story. Mutation testing is the only way to know if your tests are any good.

Now, let's dive into incremental mode! 🏊‍♂️

## ⏩ Incremental mode

You enable incremental mode with the `--incremental` flag:

```
npx stryker run --incremental
```

_**Note:** Setting `"incremental": true` in your stryker.conf.json file is also supported_

The first time you do an incremental run, StrykerJS will do an entire run as usual, except it will write the JSON result to a `reports/stryker-incremental.json` file at the end. The next time you run StrykerJS incrementally, it will read this JSON file and try to reuse as much of it as possible.

_**Note:** You can change the file's location with the `--incrementalFile` option._

Reuse of a mutant result is possible when:

- That mutant was "Killed"; the culprit test still exists and didn't change
- Or, that mutant was not "Killed"; no new test covers it, and no covering tests changed.

Stryker uses a file diff algorithm to determine which mutants or tests changed. It does this using google's [diff match patch](https://github.com/google/diff-match-patch) library, a small dependency with excellent diffing performance!

You can see the statistics of the incremental analysis in your console. It appears just after the dry run and looks like this:

```
        Mutants:        1 files changed (+2 -2)
        Tests:          2 files changed (+22 -21)
        Result:         3731 of 3965 mutant result(s).
```

Here you can see that:

- One file with mutants changed (2 mutants added, 2 mutants removed)
- Two test files changed (22 tests added and 21 tests removed)
- In total, Stryker reuses 3731 mutant results, meaning only 234 mutants need to run this time.

_**Note:** Stryker.NET has a similar feature called: "baseline". See [the PR for a detailed comparison](https://github.com/stryker-mutator/stryker-js/pull/3609#issuecomment-1170009387)._

## 🥢 Limitations

When in incremental mode, Stryker will do its best to produce an accurate mutation testing report. But, due to the complex nature of mutation testing, there are inherent limitations:

- Stryker will not detect any changes you've made in files other than mutated files and test files.
- Detecting test changes is only supported when the test runner plugin reports the necessary test details.
- Other changes to your environment are not detected, such as updates to other files, updated (dev) dependencies, changes to environment variables, changes to `.snap` files, readme files, etc.
- [Static mutants](../../docs/mutation-testing-elements/static-mutants/) don't have test coverage; thus, Stryker won't detect test changes for them.

See [incremental limitations](../../docs/stryker-js/incremental/#limitations) for more details.

## 🔨 Forcing reruns

With these inherent limitations in mind, you can probably imagine a scenario where you want to force specific mutants to run while using incremental mode. You can do this with `--force`. With it, you tell StrykerJS to rerun all mutants in scope, regardless of the previous result found in the incremental file.

Using `--force` is especially beneficial when combined with a custom `--mutate` pattern. I.e., if you only want to rerun the mutants in `src/app.js`, you use:

```
npx stryker run --incremental --force --mutate src/app.js
```

You can even specify individual lines to mutate:

```
npx stryker run --incremental --force --mutate src/app.js:5-7
```

In this example, you tell Stryker to only run mutation testing for lines 5 through 7 in the `src/app.js` file and update the incremental report.

Using the combination of `--incremental` with a custom `--mutate` pattern, StrykerJS will not remove mutants that are not in scope and still report them as part of the full mutation report!

## 🔁 Continuous Integration (CI)

Incremental mutation testing is ideal for CI scenarios! For example, when you open a Pull/Merge Request against your main branch, you probably don't need an entire mutation testing run; you are just interested in _changes since the last run on the main branch_.

For this to work, you need the `stryker-incremental.json` file. You could 'check in' this file into source control, but it changes a lot, and you should not treat it as source code anyway. Instead, it is better to treat it as an artifact.

The CI process for mutation testing looks as follows.

import Mermaid from '@theme/Mermaid';

<!-- prettier-ignore-start -->

<Mermaid 
  _key="simple-ci" 
  chart={`
graph TD; A(1. Download stryker-incremental.json artifact)-->B(2. Run \`stryker --incremental\`)
B-->C(3. Upload \`stryker-incremental.json\` artifact)
  `} 
  />

<!-- prettier-ignore-end -->

Your preferred implementation of steps 1 and 3 will depend on your CI provider. Besides artifact storage provided by your CI provider, you can also opt for cloud storage. If you are using AWS, it might make sense to use an S3 bucket here. You probably want to opt for Azure blob storage when using Azure DevOps.

Is your project open-source? Then you're in luck with the [Stryker Dashboard](https://dashboard.stryker-mutator.io), free to use for open-source projects. The JSON file format StrykerJS uses for its incremental mode is the same as the Stryker Dashboard's report file. So downloading this JSON report (step 1) is as easy as using a cURL request. Furthermore, since it already updates the report, you get 'step 3' for free when using the [dashboard reporter](../../docs/General/dashboard/).

For example, to download the report for the `main` branch for a project called `my-org/my-repo`, you can use this cURL request:

```bash
curl --silent --create-dirs --output reports/stryker-incremental.json https://dashboard.stryker-mutator.io/api/reports/github.com/my-org/my-repo/main
```

In an actual CI scenario, where you might push multiple changes to a particular PR, you might want to download the report for the current branch first and fall back to the main branch if it didn't exist. If so, you can use this script (assuming the `$BRANCH_NAME` environment variable contains the current branch name).

```bash
curl --dump-header .header.out --silent --create-dirs --output reports/stryker-incremental.json https://dashboard.stryker-mutator.io/api/reports/github.com/my-org/my-repo/$BRANCH_NAME
if cat .header.out | grep HTTP | grep 404
then
    echo "- falling back to main branch.."
    curl -s --create-dirs -o reports/stryker-incremental.json https://dashboard.stryker-mutator.io/api/reports/github.com/my-org/my-repo/main
fi
rm .header.out
```

If you only ever run Stryker with incremental mode, you might fear that the mutation report slowly 'drifts' from reality because of [said limitations](#-limitations). We recommend doing a full mutation testing run now and then to prevent this, either with [`--force`](#-forcing-reruns) or using the dashboard reporter. We do this in CI to develop StrykerJS itself. Our complete CI process looks like this:

<!-- prettier-ignore-start -->

<Mermaid 
  _key="full-ci" 
  chart={`
flowchart TB;
    A(1. Download JSON report from dashboard)-->B(2. Run stryker incremental)
    B-->C(3. Upload JSON report to dashboard)
    C--Merge to main branch-->D(4. Full mutation testing run)
    D-->E(5. Upload new JSON report to dashboard)
`} 
/>

<!-- prettier-ignore-end -->

## 🔮 What's next

Please try out incremental mode and let us know what you think. We would love to hear from you! You can take a look at the [incremental documentation page](../../docs/stryker-js/incremental). Also, look at the [6.2 release notes](https://github.com/stryker-mutator/stryker-js/releases/tag/v6.2.0) to see the complete list of changes in 6.2.

In the medium term, we'll be working on supporting more test runners and implementing performance improvements in the typescript checker. We maintain a [🛣 roadmap on github](https://github.com/stryker-mutator/stryker-js/wiki/Roadmap), so you can always see what we're actively working on.

In the meantime, we would love to hear from you! So please voice your feedback on [our slack channel](https://join.slack.com/t/stryker-mutator/shared_invite/enQtOTUyMTYyNTg1NDQ0LTU4ODNmZDlmN2I3MmEyMTVhYjZlYmJkOThlNTY3NTM1M2QxYmM5YTM3ODQxYmJjY2YyYzllM2RkMmM1NjNjZjM) or by sending a [tweet](https://twitter.com/stryker_mutator/).
