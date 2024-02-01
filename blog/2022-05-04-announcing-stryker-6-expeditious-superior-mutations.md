---
slug: stryker-js-v6-expeditious-superior-mutations
title: 'StrykerJS v6.0: Expeditious Superior Mutations'
authors: nicojs
tags: [stryker-js]
---

We're excited to announce the next major release of the StrykerJS: StrykerJS 6.0.

StrykerJS now supports _native ECMAScript modules_, or ESM for short. To make this work, we changed some parts of StrykerJS, which includes small (yet technically breaking) changes. As a bonus, we've improved performance considerably in some use cases! We're curious to know what you think. Why not try it today?

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

If you're new to mutation testing, it's a way to measure your tests' effectiveness. Please take a look at our RoboCoasters 🤖🎢 example and see how even 100% code coverage doesn't tell the whole story. Mutation testing is the only way to know if your tests are any good.

Since the 6.0.0 beta release, we've implemented a new warning message to inform users about `--ignoreStatic` and improved the performance and progress reporting; you can read about that in the [🗿 Static mutant improvements](#-static-mutant-improvements) paragraph.

Now, let's dive into the changes! 🏊‍♂️

## 📦 ESM support

As stated in the introduction, StrykerJS v6 brings official support for ESM projects.

With ESM, you can use `import` and `export` statements. NodeJS has supported ESM since version 12. Browsers have gradually been adding support since 2017, and all major browsers support it by now. I recommend watching [Gil Tayar's introduction to ESM](https://www.youtube.com/watch?v=Zyoztl_7l7g) when you want to brush up on the ESM basics.

The `@stryker-mutator/karma-runner` and `@stryker-mutator/jest-runner` already worked with ESM (for Jest, you will need to configure the [`--experimental-vm-modules`](/docs/stryker-js/jest-runner#ecmascript-modules) flag), but our node-based runners did not. This changes with version 6.

You configure it like this:

```json

```

As you can see _no configuration change_ is needed. Updating StrykerJS is enough 😁.

## ⏩ Hot reload

StrykerJS will run your tests many, many times. Consider that each mutant is tested in isolation, so it runs your tests as many times as there are (covered) mutants. A way to save time is only to load your tests once (using `import`/`require`) and then run them multiple times in quick succession while activating a different mutant each time. We call this feature "hot reload", and it is generally the fastest way to implement mutation testing.

Hot reloading is only possible because Stryker uses mutant schemata. With mutant schemata (or mutation switching), Stryker inserts all mutants into your source code yet only activates them one at a time.

It looks something like this:

```ts
function add(a, b) {
  if (global.activeMutant === 0) {
    // 👾 BlockStatement mutator
  } else {
    return global.activeMutant === 1
      ? a - b // 👽 ArithmeticExpression mutator
      : a + b;
  }
}
```

When older versions of Stryker are testing mutants inside a worker process, it looks like this:

(old process)

1. Activate the mutant
1. _Load all files_, using `require`
1. Run the tests with the test runner of choice.
1. _Unload all files_, using [`delete require.cache['path/to/cjs/module']`](https://nodejs.org/api/modules.html#requirecache) to prepare for the next run.
1. Report the result

As you can see, _all files are loaded and unloaded_ for each mutant run. This way of reloading [won't ever work with native ESM](https://github.com/nodejs/tooling/issues/51), as there is simply no `cache` we can `delete` the loaded files from 🤷‍♀️.

The reloading is also expensive. Think about it: if your project contains 1k files, with a total of 10k mutants, it could mean a total of _ten million file IO actions_. That's why mutation testing with StrykerJS would slow down considerably when the size of your project grows.

As of v6, Node-based test runners use hot reload. The process is now:

(new process using hot reload)

1. (once) Load the code using `import`
1. Activate the mutant
1. Run the tests with the test runner of choice.
1. Report the result

The result is a significant performance improvement 🐇. You can clearly see the difference when running StrykerJS on Stryker's core itself:

| Old                                         |
| ------------------------------------------- |
| ![stryker-v5](/images/blogs/stryker-v5.gif) |

| New \*                                      |
| ------------------------------------------- |
| ![stryker-v6](/images/blogs/stryker-v6.gif) |

\* using `--ignoreStatic`

That's a whopping 70% performance improvement 🤯.

Hot reload is supported in `@stryker-mutator/mocha-runner` and `@stryker-mutator/jasmine-runner`. Please note that this feature is always on from version 6 onward, even for plain old CommonJS style projects! It does require a higher version of mocha or jasmine, respectively, see [breaking changes](#-breaking-changes). Support for `@stryker-mutator/cucumber-runner` is planned for version 8 of `@cucumber/cucumber` release.

Unfortunately, we're not supporting hot reload for the `@stryker-mutator/jest-runner` or `@stryker-mutator/karma-runner` yet; please up-vote [#3455](https://github.com/stryker-mutator/stryker-js/issues/3455) or [#3454](https://github.com/stryker-mutator/stryker-js/issues/3454) respectively if you want to see it happen 💙.

## 🗿 Static mutant improvements

Yes, indeed, hot reload sounds incredible! But what about _static mutants_?

A static mutant is a mutant that is executed once on _file load_ rather than during _test run-time_.

Take this small example:

```js
// greet.js
const hi = '👋';

export function greet(name) {
  return `${hi} ${name}`;
}

// greet.spec.js
import { greet } from './greet.js';

it('should greet me', () => {
  expect(greet('me')).toBe('👋 me');
});
```

When you run StrykerJS on this code, it will create a mutant for the `hi` constant:

```diff
-const hi = '👋';
+const hi = '';
```

When you consider mutant schemata, the actual code produced by StrykerJS looks more like this:

```js
const hi = global.activeMutant === '1' ? '' : '👋';
```

This mutant is called a _static mutant_. It is executed on file-load rather than during test run-time. For more details on static mutants, see [the new documentation on them](/docs/mutation-testing-elements/static-mutants).

Now, let's factor in [hot reload](#-hot-reload), where worker processes load the files once and reuse them across multiple mutant runs. This would mean that the mutant _survives no matter how good your tests are_. We can't have that 😪!

That's why StrykerJS will detect static mutants and _still follow the old process_ to test them. However, instead of reloading the files (remember, this won't work for ESM files), it will create a shiny new worker process for every static mutant run (for NodeJS-based test runners).

Stryker will also sort mutants, testing static mutants after non-static mutants. This saves some time since this means fewer worker process restarts.

For example, imagine mutants A, B, and C, where B is a static mutant. To keep it simple, we will be running with concurrency 1, meaning only one worker exists at any one time.

1. Mutant A: we start a worker process and test it.
1. Mutant B: we need to recreate the worker to test the static mutant
1. Mutant C: we need to recreate the worker _again_, because the previous mutant was static, which polluted the worker with a non-erasable mutant.

Basic math tells us a worker is started three times in this example. Now imagine this example again, but with the mutants sorted: A, C, and B.

1. Mutant A: we start a worker process and test it.
1. Mutant C: we reuse the worker and test it.
1. Mutant B: we need to recreate the worker to test the static mutant

As you can see, sorting the mutants just saved us from having to restart the worker once. This performance gain might sound insignificant, but with 1000s of mutants, it can save 100s of restarts, well worth the (small) effort.

One final note about static mutants: the progress-reporter will now accurately report their progress. It does this by assigning a _weight_ to each mutant to be tested, which it calculates using the performance measurements of the dry run. This means more smooth progress and a more realistic ETC estimate.

## 🖐 Ignore static mutants

Testing static mutants can be very expensive. As explained in the previous paragraph, they need a fresh worker process for each run (for Node-based test runners). On top of that, Stryker cannot determine test coverage for them. So the only thing it can do is run all tests 🐌.

Also, they are generally less interesting for you to spend your time on since they include constant strings, numbers, etc.

You might even want to ignore them entirely! This is where `--ignoreStatic` comes in. With `--ignoreStatic` static mutants are ... well ignored. Of course, you can still see them in your HTML report, but they won't count towards your mutation score.

<figure><img src="/images/blogs/ignored-static-mutant.png" alt="Ignored static mutant" />
<figcaption>An ignored static mutant</figcaption>
</figure>

Ignoring static mutants improves performance, but your mileage may vary. It depends on the number of static mutants and the size of your project. For running StrykerJS on Stryker's core itself, we [saw a whopping 50% performance improvement by ignoring 6% of our mutants (the static mutants) 🤯](https://github.com/stryker-mutator/stryker-js/issues/3282#issuecomment-980110861).

Even though it is a performance improvement, the default value for`"ignoreStatic"` is `false`, meaning Stryker won't ignore them. Our reasoning here is: "better be safe than sorry". But how would you know about this new feature when running Stryker on your project? Well, Stryker will tell you about it with a new warning message.

You will see the message when 2 conditions are met:

1. Stryker estimates static mutants to take >= 40% of the total execution time; and
2. Your project's estimated average execution time of a static mutant is twice that of a non-static mutant in your project.

Stryker logs this message _right before testing mutants_, so you can quickly kill Stryker and run again with `--ignoreStatic` if you want.

Here is an example you will see when running StrykerJS on Stryker's core without `ignoreStatic`:

```
WARN MutantTestPlanner Detected 255 static mutants (8% of total) that are estimated to take 83% of the time running the tests!
  You might want to enable "ignoreStatic" to ignore these static mutants for your next run.
  For more information about static mutants, visit https://stryker-mutator.io/docs/mutation-testing-elements/static-mutants.
  (disable "warnings.slow" to ignore this warning)
```

If you're happy with the performance tradeoff and want Stryker to stop annoying you, you can disable this warning by disabling `"warnings.slow"` in your stryker.conf.json file.

```json
{
  "ignoreStatic": false,
  "warnings": { "slow": false }
}
```

## 📃 ESM-based config

From v6 onward, StrykerJS also supports _your config_ as ESM. Either by adding `{ "type": "module" }` to your package.json file, or by renaming `stryker.conf.js` to `stryker.conf.mjs`.

```js
// stryker.conf.mjs
/** @type {import('@stryker-mutator/api/core').PartialStrykerOptions} */
const config = {
  reporters: ['html', 'clear-text', 'progress'],
  testRunner: 'mocha',
  coverageAnalysis: 'perTest',
};
export default config;
```

We've updated the `stryker init` command to emit this new config file format when choosing for "JavaScript" config format.

_Note_: for completeness sake, `stryker.conf.cjs` is also supported.

## 💥 Breaking changes

This is the list of breaking changes.

- [10d874](https://github.com/stryker-mutator/stryker-js/commit/10d874e4c46335d9ea457634d3061af35fa8f854) **node**: Drop support for Node 12. Minimal version is now Node 14.18.0.
- [#3450](https://github.com/stryker-mutator/stryker-js/pull/3450) **checker-api:** The `check` method of checker plugins now receives a _group of mutants_ and should provide a `CheckResult` per mutant id.
- [#3438](https://github.com/stryker-mutator/stryker-js/pull/3438) **html reporter:** Configuration option `htmlReporter.baseDir` is deprecated and will be removed in a later version. Please use `htmlReporter.fileName` instead.
- [#3432](https://github.com/stryker-mutator/stryker-js/pull/3432) **esm config:** Exporting a function (using `module.exports = function(config) {}`) from your `stryker.conf.js` file is no longer supported. This was already deprecated but now will give an error.
- [#3409](https://github.com/stryker-mutator/stryker-js/pull/3409) **esm:** StrykerJS is now a pure ESM. Please [read this](https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c).
- [#3409](https://github.com/stryker-mutator/stryker-js/pull/3409) **esm:** Karma v6.3 is now the min supported karma version for `@stryker-mutator/karma-runner`, since [that version added support for async config loading](https://github.com/karma-runner/karma/blob/master/CHANGELOG.md#630-2021-03-23)
- [#3396](https://github.com/stryker-mutator/stryker-js/pull/3396) **esm:** The `@stryker-mutator/jasmine-runner` now requires jasmine@3.10 or higher.
- [#3393](https://github.com/stryker-mutator/stryker-js/pull/3393) **esm:** The `@stryker-mutator/mocha-runner` now requires `mocha@7.2` or higher.
- [#3369](https://github.com/stryker-mutator/stryker-js/pull/3369) **reload test environment:** Test runner plugins must provide `TestRunnerCapabilities` by implementing the `capabilities` method.
- [#3489](https://github.com/stryker-mutator/stryker-js/pull/3489) **file**: The File class is no longer part of the public api and is thus no longer exported from @stryker-mutator/api. Plugin creators shouldn't rely on it anymore.
- [3469](https://github.com/stryker-mutator/stryker-js/pull/3469) **progress**: Reporter API method onAllMutantsMatchedWithTests has been replaced by onMutationTestingPlanReady. Please use that for your reporter plugin instead.
- [3469](https://github.com/stryker-mutator/stryker-js/pull/3469) **progress**: Reporter API method onAllSourceFilesRead has been removed, please use onMutationTestReportReady to retrieve the source files.
- [3469](https://github.com/stryker-mutator/stryker-js/pull/3469) **progress**: Reporter API method onSourceFileRead has been removed, please use onMutationTestReportReady to retrieve the source files.

## 🔮 What's next

With v6 out, we will be implementing a performance boost for our [`typescript-checker`](https://github.com/stryker-mutator/stryker-js/pull/3450). In the medium term we'll be looking to implement [incremental mode](https://github.com/stryker-mutator/stryker-js/issues/2753).

In the mean-time, we would love to hear from you! Please voice your feedback in the comment section below 👇, on [our slack channel](https://join.slack.com/t/stryker-mutator/shared_invite/enQtOTUyMTYyNTg1NDQ0LTU4ODNmZDlmN2I3MmEyMTVhYjZlYmJkOThlNTY3NTM1M2QxYmM5YTM3ODQxYmJjY2YyYzllM2RkMmM1NjNjZjM) or by sending a [tweet](https://twitter.com/stryker_mutator/).
