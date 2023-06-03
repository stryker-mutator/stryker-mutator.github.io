---
slug: announcing-stryker-js-7
title: 'Announcing StrykerJS 7.0: Vitest and Tap test runner support'
authors: nicojs
tags: [stryker-js]
---

Welcome to the latest major release of Stryker, version 7.0!

We are excited to introduce you to 2 new friends: ⚡ _[Vitest](https://vitest.dev/)_ and 📼 [_Node Tap_](https://node-tap.org/). There are also some quality-of-life improvements and some (minor) breaking changes.

<!-- truncate -->

To update to the latest version of StrykerJS, install `@latest` as follows:

```shell
npm install --save-dev @stryker-mutator/core@latest
# OR
yarn add --dev @stryker-mutator/core@latest
```

Remember to update Stryker plugins. For example, when using the mocha runner:

```shell
npm install --save-dev @stryker-mutator/mocha-runner@latest
# OR
yarn add --dev @stryker-mutator/mocha-runner@latest
```

If you're new to mutation testing, it's a way to measure your tests' effectiveness. Please take a look at our RoboBar 🤖🍷 example and see how even 100% code coverage doesn't tell the whole story. Mutation testing is the only way to know if your tests are any good.
In this blog article, we will walk you through the highlights of this release, including new test runners, enhanced options, and important breaking changes.

## 👩‍👦 New friends

So why did we choose to add support for ⚡ Vitest and 📼 Node Tap? Well, it is simple, they are both popular.

⚡ Vitest is [rapidly growing](https://npm-stat.com/charts.html?package=vitest&from=2022-01-01) and is considered the de facto standard for projects using [Vite](https://vitejs.dev/), which in turn, is also [rapidly increasing in popularity](https://npm-stat.com/charts.html?package=vite&from=2021-01-01). As such, it is the new standard for running tests in Vue-based projects and many others. And even though Vitest is rapidly changing (they don't have a `v1` release yet), we thought it would be best not to wait any longer, as it was [our most upvoted feature request](https://github.com/stryker-mutator/stryker-js/issues/3465) with 40 votes!

The story for 📼 Node Tap is quite different. Node Tap has been a steady and stable test runner [for years now](https://npm-stat.com/charts.html?package=tap&from=2020-01-01). Indeed, we've had [an open issue about it since 2017!](https://github.com/stryker-mutator/stryker-js/issues/325). Node Tap has some [clear design goals](https://node-tap.org/#why-tap), like _Test files should be "normal" programs that can be run directly_, making it popular with the NodeJS tooling world. You might have heard of some of the tools that are using it: [rimraf](https://github.com/isaacs/rimraf), [json5](https://www.npmjs.com/package/json5), [tar](https://www.npmjs.com/package/tar) and even [npm itself](https://github.com/npm/cli). Since Node v16, Node ships with a [TAP based test runner](https://nodejs.org/api/test.html) of its own, which the new plugin also supports!

Without further ado, let's dive in 🏊‍♂️.

## ⚡ Vitest support

Vitest is a test runner explicitly designed for the popular Vite build tool. With Stryker 7.0, you can finally use mutation testing for your Vitest projects.

Install it using your favorite package manager:

```bash
$ npm i -D @stryker-mutator/vitest-runner
# OR
$ yarn add -D @stryker-mutator/vitest-runner
```

And configure it with:

```json
{
  "testRunner": "vitest",
  "vitest": {
    "configFile": "vitest.config.js"
  }
}
```

As you can see, Stryker allows you to configure an alternative config file. Not specifying a config file will honor the [vitest defaults](https://vitest.dev/config/), allowing for seamless integration with Vite-powered projects.

This plugin comes with all the StrykerJS features you love, including coverage analysis support and fine-grained test filtering for mutants, which increases performance.

See the [vitest runner](/docs/stryker-js/vitest-runner) documentation for more details.

💐 Special thanks go to [@odinvanderlinden](https://github.com/odinvanderlinden) for implementing the plugin, and [sheremet_va](https://twitter.com/sheremet_va) for adding programmatic support on the Vitest side ❤.

## 📼 TAP support

[Node Tap](https://node-tap.org) is a test runner specializing in running test files in Node.js and producing [TAP (**T**est **A**nything **P**rotocol) output](https://en.wikipedia.org/wiki/Test_Anything_Protocol).

However, instead of integrating with this test runner, this plugin enables _running any test files that produce TAP output_. One of these test runners is the [new Node Test runner](https://nodejs.org/api/test.html) that was added in Node v16.17.0 (experimental) and has been stable since Node v20. Using this concept, Stryker stays close to the [TAP design goals](https://node-tap.org/#why-tap): _Test files should be "normal" programs that can be run directly_

Install the tap runner using your favorite package manager:

```bash
$ npm i -D @stryker-mutator/tap-runner
# OR
$ yarn add -D @stryker-mutator/tap-runner
```

And configure it with:

```json
{
  "testRunner": "tap",
  "tap": {
    "testFiles": ["test/**/*.spec.js"]
  }
}
```

See the [tap runner documentation](/docs/stryker-js/tap-runner) for more details.

💐 Special thanks go to [@danny12321](https://github.com/danny12321) for implementing this plugin, and [isaacs](https://github.com/isaacs) for help in the design ❤

## 🪹 Allow empty

By default, Stryker will exit with an error when it cannot find any tests. This behavior is excellent for when you've misconfigured Stryker, reminding you to fix the configuration and try again.

In more complex setups, you might extract from the pull request which lines of code were exactly affected and pass only those files to Stryker. In this case, you may intend no tests to run. 

To support this scenario, you can now provide [`--allowEmpty`](/docs/stryker-js/configuration/#allowempty-boolean) (or equivalent in config file). With this flag enabled, Stryker will exit with a successful exit code (0) when no tests were executed.

💐 Special thanks go to [@emir7](https://github.com/emir7) for implementing this feature.

## 🧹 Always clean the temp dir

StrykerJS works inside a [temp directory](/docs/stryker-js/configuration/#tempdirname-string). What happens to this temp dir depends on the [--cleanTempDir](https://stryker-mutator.io/docs/stryker-js/configuration/#cleantempdir-boolean--always) setting. This setting now gets a new option: `'always'`. 

When `cleanTempDir` is set to `'always'`, the temp dir is... well... always deleted. This contradicts `true` (default), where the temp dir is only deleted when StrykerJS runs successfully. 

💐 Special thanks go to [@adeelpm](https://github.com/adeelpm) for implementing this feature.

## 💥 Breaking Changes

V7 comes with some more minor but technically-breaking changes. This is the list:

- [#4246](https://github.com/stryker-mutator/stryker-js/issues/4246) **type-checking:** `disableTypeChecks` is now `true` by default. You can use this configuration to opt out:
  ```json
  {
    "disableTypeChecks": "{test,src,lib}/**/*.{js,ts,jsx,tsx,html,vue,cts,mts}"
  }
  ```
- [#4234](https://github.com/stryker-mutator/stryker-js/issues/4234) **reporter-api:** The event `onAllMutantsTested` has been removed. Plugin creators should use `onMutationTestReportReady` instead.
- [#4171](https://github.com/stryker-mutator/stryker-js/issues/4171) **esm:** Deep (and undocumented) imports from `@stryker-mutator/core` or one of the plugins will no longer work. If you want to import something that's not available, please let us know by [opening an issue](https://github.com/stryker-mutator/stryker-js/issues/new/choose)
- [#4105](https://github.com/stryker-mutator/stryker-js/issues/4105) **node:** Node 14 is no longer supported. Please install an [LTS version of node](https://nodejs.org)

## 🔮 What's next

With v7 out the door, we will closely monitor any issues that might pop up with these new plugins. So if you have an issue, please don't hesitate to [let us know by reporting it](https://github.com/stryker-mutator/stryker-js/issues/new?assignees=&labels=%F0%9F%90%9B+Bug&projects=&template=bug_report.md&title=). 

Next, we will be focussing on getting the [real-time HTML report](/blog/announcing-realtime-reporting-for-stryker) working for StrykerJS and progress support for mutating [`.svelte` files](https://github.com/stryker-mutator/stryker-js/pull/3929).

In the medium term, we will focus on improving the mutating environment in general. The long-awaited [ignore plugin](https://github.com/stryker-mutator/stryker-js/issues/3229) comes to mind. We also would love for some mutators to be less noisy by only inserting mutants if no other mutants are inserted.

In the meantime, we would love to hear from you! So please voice your feedback in the comment section below 👇, on [our slack channel](https://join.slack.com/t/stryker-mutator/shared_invite/enQtOTUyMTYyNTg1NDQ0LTU4ODNmZDlmN2I3MmEyMTVhYjZlYmJkOThlNTY3NTM1M2QxYmM5YTM3ODQxYmJjY2YyYzllM2RkMmM1NjNjZjM) or by sending a [tweet](https://twitter.com/stryker_mutator/).