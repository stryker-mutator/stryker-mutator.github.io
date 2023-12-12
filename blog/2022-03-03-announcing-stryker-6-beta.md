---
slug: announcing-stryker-js-v6.0-beta
title: Announcing StrykerJS v6.0 Beta
authors: nicojs
tags: [stryker-js]
---

We're excited to announce the beta of the next major release of the StrykerJS: StrykerJS 6.0.

From the 6th version onward, StrykerJS supports _native ECMAScript modules_, or ESM for short. To make this work, we changed some parts of StrykerJS, which includes small (yet technically breaking) changes. As a bonus, we've improved performance considerably in some use cases! We're curious to know what you think. Why not try the beta today?

<!-- truncate -->

Update your Stryker dependencies to get started using the beta.

```shell
npm install --save-dev @stryker-mutator/core@next
# OR
yarn add --dev @stryker-mutator/core@next
```

Don't forget to update Stryker plugins. For example, when using the mocha runner:

```shell
npm install --save-dev @stryker-mutator/mocha-runner@next
# OR
yarn add --dev @stryker-mutator/mocha-runner@next
```

If you're new to mutation testing, it's a way to measure your tests' effectiveness. Please take a look at our RoboCoasters 🤖🎢 example and see how even 100% code coverage doesn't tell the whole story. Mutation testing is the only way to know if your tests are any good.

Now, let's dive into the changes! 🏊‍♂️

## 📦 ESM support for NodeJS-based test runners

As stated in the introduction, StrykerJS v6 brings official support for ESM projects.

With ESM, you can use `import` and `export` statements. NodeJS has supported ESM since version 12. Browsers have gradually been adding support since 2017, and all major browsers support it by now. I recommend watching [Gil Tayar's introduction to ESM](https://www.youtube.com/watch?v=Zyoztl_7l7g) when you want to brush up on the ESM basics.

The `@stryker-mutator/karma-runner` and `@stryker-mutator/jest-runner` already worked with ESM (for Jest, you will need to configure the [`--experimental-vm-modules`](/docs/stryker-js/jest-runner/#ecmascript-modules) flag), but our node-based runners did not. This changes with version 6.

You configure it like this:

```json

```

As you can see _no configuration change_ is needed. Updating StrykerJS is enough 😁.

## ⏩ Hot reload

As you might know, StrykerJS uses mutation switching (sometimes called mutant schemata), meaning Stryker inserts all mutants into your source code yet only activates them one at a time.

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

Next, Stryker creates _worker_ processes. A worker process is responsible for activating a mutant, running tests, and reporting the result to the main process. To do that, it uses the test runner of your choice, for example, [mocha](https://mochajs.org/). For NodeJS-based test runners, it would look something like this:

(old process)

1. Activate the mutant
1. _Load all files_, using `require`
1. Run the tests with the test runner of choice.
1. _Unload all files_, using [`delete require.cache['path/to/cjs/module']`](https://nodejs.org/api/modules.html#requirecache) to prepare for the next run.
1. Report the result

As you can see, _all files are loaded and unloaded_ for each mutant run. This way of reloading [won't ever work with native ESM](https://github.com/nodejs/tooling/issues/51), as there is simply no `cache` we can `delete` the loaded files from 🤷‍♀️.

The reloading is also expensive. Think about it: if your project contains 1k files, with a total of 10k mutants, it could mean a total of _ten million file IO actions_. That's why mutation testing with StrykerJS would slow down considerably when the size of your project grows.

When you think about it, it is also **unnecessary**; why not simply keep all files loaded? Since they contain all the mutants anyway. This new process looks something like this:

(new process)

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

We call this feature "hot reload," and StrykerJS supports it in `@stryker-mutator/mocha-runner` and `@stryker-mutator/jasmine-runner`. Please note that this feature is always on from version 6 onward, even for plain old CommonJS style projects! It does require a higher version of mocha or jasmine, respectively, see [breaking changes](#-breaking-changes). Support for `@stryker-mutator/cucumber-runner` for the release of version 8 of `@cucumber/cucumber`.

Unfortunately, we're not supporting hot reload for the `@stryker-mutator/jest-runner` or `@stryker-mutator/karma-runner` yet; please up-vote [#3455](https://github.com/stryker-mutator/stryker-js/issues/3455) or [#3454](https://github.com/stryker-mutator/stryker-js/issues/3454) respectively if you want to see it happen 💙.

## 🗿 Ignore static

Yes, indeed, hot reload sounds incredible! But what about _static mutants_?

A static mutant is a mutant that is executed once on _file load_ rather than during _test runtime_.

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

When you now factor in [hot reload](#-hot-reload), you see that the mutant is only active during the runtime of the tests instead of at load time. This would mean that the mutant _survives no matter how good your tests are_. We can't have that 😪!

That's why StrykerJS will detect static mutants and _still follow the old process_ to test them. However, instead of reloading the files (remember, this won't work for ESM files), it will create a shiny, new worker process for every static mutant run (for NodeJS-based test runners).

Creating new worker processes to test static mutants makes them much more expensive in StrykerJS v6. Also, they are generally less interesting for you to spend your time on since they include constant strings, numbers, etc. You might even want to ignore them entirely! This is where `--ignoreStatic` comes in.

With `--ignoreStatic` static mutants are ... well ignored. You can still see them in your HTML report, but they won't count towards your mutation score.

<figure><img src="/images/blogs/ignored-static-mutant.png" alt="Ignored static mutant" />
<figcaption>An ignored static mutant</figcaption>
</figure>

Your mileage may vary, but for running StrykerJS on Stryker's core itself, we [saw a whopping 50% performance improvement by ignoring 6% of our mutants (the static mutants) 🤯](https://github.com/stryker-mutator/stryker-js/issues/3282#issuecomment-980110861). For more details on static mutants, see [the new documentation on on them](/docs/mutation-testing-elements/static-mutants).

Please try this feature out and provide feedback. We're also thinking of ways to point this feature out to users of Stryker, or even enable it by default. Feel free to voice your opinion in [the GitHub issue about it](https://github.com/stryker-mutator/stryker-js/issues/3435).

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

- [#3450](https://github.com/stryker-mutator/stryker-js/pull/3450) **checker-api:** The `check` method of checker plugins now receives a _group of mutants_ and should provide a `CheckResult` per mutant id.
- [#3438](https://github.com/stryker-mutator/stryker-js/pull/3438) **html reporter:** Configuration option `htmlReporter.baseDir` is deprecated and will be removed in a later version. Please use `htmlReporter.fileName` instead.
- [#3432](https://github.com/stryker-mutator/stryker-js/pull/3432) **esm config:** Exporting a function (using `module.exports = function(config) {}`) from your `stryker.conf.js` file is no longer supported. This was already deprecated but now will give an error.
- [#3409](https://github.com/stryker-mutator/stryker-js/pull/3409) **esm:** StrykerJS is now a pure ESM. Please [read this](https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c).
- [#3409](https://github.com/stryker-mutator/stryker-js/pull/3409) **esm:** Node 12.20 is now the min version.
- [#3409](https://github.com/stryker-mutator/stryker-js/pull/3409) **esm:** Karma v6.3 is now the min supported karma version for `@stryker-mutator/karma-runner`, since [that version added support for async config loading](https://github.com/karma-runner/karma/blob/master/CHANGELOG.md#630-2021-03-23)
- [#3396](https://github.com/stryker-mutator/stryker-js/pull/3396) **esm:** The `@stryker-mutator/jasmine-runner` now requires jasmine@3.10 or higher.
- [#3393](https://github.com/stryker-mutator/stryker-js/pull/3393) **esm:** The `@stryker-mutator/mocha-runner` now requires `mocha@7.2` or higher.
- [#3369](https://github.com/stryker-mutator/stryker-js/pull/3369) **reload test environment:** Test runner plugins must provide `TestRunnerCapabilities` by implementing the `capabilities` method.

## 🔮 What's next

We'll be focussing on getting StrykerJS 6.0 released in about a month or so. We would appreciate your feedback. Feel free to report any [issues](https://github.com/stryker-mutator/stryker-js/issues) you find or voice your opinion in the comment section below 👇 or on [our slack channel](https://join.slack.com/t/stryker-mutator/shared_invite/enQtOTUyMTYyNTg1NDQ0LTU4ODNmZDlmN2I3MmEyMTVhYjZlYmJkOThlNTY3NTM1M2QxYmM5YTM3ODQxYmJjY2YyYzllM2RkMmM1NjNjZjM).
