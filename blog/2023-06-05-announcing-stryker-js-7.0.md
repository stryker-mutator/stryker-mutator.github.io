---
slug: announcing-stryker-js-7
title: 'Announcing StrykerJS 7.0: Vitest and Tap test runner support'
authors: nicojs
tags: [stryker-js]
---

Welcome to the latest major release of Stryker, version 7.0!

We are excited to introduce you to 2 new friends: ⚡ _[Vitest](https://vitest.dev/)_ and the 📼 _Tap_ runner. There are also some quality-of-life improvements and some (small) breaking changes.

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

## ⚡ Vitest support

Vitest is a test runner explicitly designed for the popular Vite build tool. It was [our most upvoted feature request](https://github.com/stryker-mutator/stryker-js/issues/3465). With Stryker 7.0, you can finally use mutation testing for your Vitest projects.

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

As you can see, Stryker allows you to configure an alternative config file. However, it also honors the [vitest defaults](https://vitest.dev/config/), allowing for seamless integration with Vite-powered projects.

This plugin comes with all the features you've come to love, including coverage analysis support and fine-grained test filtering for mutants.

See the [vitest runner](/docs/stryker-js/vitest-runner) documentation for more details.

💐 Special thanks go to [@odinvanderlinden](https://github.com/odinvanderlinden) for implementing the plugin and [sheremet_va](https://twitter.com/sheremet_va) for adding programmatic support on the vitest side ♥.

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

💐 Special thanks go to [@danny12321](https://github.com/danny12321) for implementing this plugin.

## --allowEmpty

In response to user feedback, we have introduced the `--allowEmpty` flag to prevent Stryker from crashing when the test suite is empty. This enhancement ensures a smoother experience, especially when working with projects that might have occasional empty test runs. With `--allowEmpty`, Stryker remains resilient and provides valuable insights even in such scenarios.

## --cleanTempDir always

To streamline the cleanup process, Stryker 7.0 introduces the `--cleanTempDir always` option. This enhancement ensures that the temporary directory used during mutation testing is consistently cleaned up after every run, regardless of the outcome. By keeping your project environment tidy, Stryker helps maintain a well-organized workflow and avoids cluttering your workspace.

### Breaking Changes
