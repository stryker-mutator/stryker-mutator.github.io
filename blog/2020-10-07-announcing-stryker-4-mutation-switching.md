---
slug: announcing-stryker-4-mutation-switching
title: Announcing Stryker 4.0 - Mutation Switching
author: Nico Jansen
author_title: Stryker Team
author_url: https://github.com/nicojs
author_image_url: https://avatars3.githubusercontent.com/u/1828233?s=400&u=fec18ad3776aaafec54c49bbd7173a841ae7ea59&v=4
tags: [stryker]
---

We're proud to announce the next major release of the Stryker mutation testing framework for JavaScript and friends: Stryker 4.0.

This release marks a fundamental shift in the way Stryker works internally. It now uses "mutation switching", which improves performance and usability, similar to Stryker.NET and Stryker4s already work. This change, unfortunately, couldn't be done without breaking changes. See the breaking changes paragraph if you're interested.

<!--truncate-->

**🎧 Listen to the <a target="_blank" href="https://thedeepdive.simplecast.com/episodes/mutation-testing-with-stryker">"Mutation testing with Stryker" podcast episode on InDepth.dev</a>**

If you're new to mutation testing, it's a way to measure your tests' effectiveness. Please look at [our RoboBar 🤖🍷 example](https://stryker-mutator.io/example) and see how even 100% code coverage doesn't tell the whole story. Mutation testing is the only way to make sure you're not missing any tests.

**_Note: updated on 9 October 2020: add remark about TypeScript 3.7 requirement in [Breaking changes](#breaking-changes)._**

## 🚀 Getting started

If you're new to Stryker, please follow the [quickstart guide](/stryker/quickstart).

If you're already using Stryker, you can install this latest version with your package manager of choice.

```shell
npm install --save-dev @stryker-mutator/core
```

Don't forget to do the same for your Stryker plugins. Please note that the following plugins have been removed and are no longer needed:

- ~~@stryker-mutator/typescript~~
- ~~@stryker-mutator/jasmine-framework~~
- ~~@stryker-mutator/mocha-framework~~
- ~~@stryker-mutator/babel-transpiler~~
- ~~@stryker-mutator/webpack-transpiler~~
- ~~@stryker-mutator/javascript-mutator~~

You can remove these from your package.json.

## 👽 Mutation switching

Mutation switching is a way to put all mutants into your code simultaneously.

Let's take a look at an example.

```js
function add(a, b) {
  return a + b;
}
```

When you feed this code to Stryker, it will generate two mutants:

`👽 function add(a, b) { return a - b }`  
`👾 function add(a, b) {}`

Previous versions of Stryker would make two copies of your source code. One for each mutant. Stryker 4.0 will now place _all mutants into the code simultaneously_, but with only _one mutant active at any one time_.

```js
function add(a, b) {
  if (global.activeMutant === 0) {
    // 👾
  } else {
    return global.activeMutant === 1
      ? a - b // 👽
      : a + b;
  }
}
```

(simplified example)

Stryker now runs your tests while changing (or _switching_) the active mutant between runs. Mutation switching can improve performance dramatically, depending on the type of project.

You're probably wondering: how much performance improvement? Like all great questions, the answer is: 'it depends'. For example, when you bundle your code with webpack before running the tests, then webpack only needs to run once, a significant performance gain. On the other hand, if you're running Stryker on an ES5 project with mocha, the improvement might not be that substantial. In our experience, you can expect somewhere between 20% to 70% speed increase.

## 🐠 Code instrumentation

Mutation Switching yields a significant performance improvement, but it means that Stryker is required to perform some complex transformations to the [Abstract Syntax Tree (AST)](https://en.wikipedia.org/wiki/Abstract_syntax_tree).

Doing this _instrumentation_ means visiting each node of the AST to collect and place mutants. This instrumentation is implemented with the [Babel](https://babeljs.io/) parser and now ships with `@stryker-mutator/core`. We're taking advantage of Babel's support for all types of JavaScript, including TypeScript code.

_Note that to implement mutation switching in both TypeScript and JavaScript before the release of Babel v7 would have meant implementing it twice. We think it is incredible that the Babel maintainers chose to add TypeScript support. We're standing on the shoulders of giants here 🎉. Without this, we probably wouldn't have done it._

This instrumentation means you _no longer need to configure the mutator_ in your Stryker configuration. Stryker will always use the new mutation instrumenter. It supports TypeScript, JavaScript, Flow, and JSX. It even mutates script tags in `.html` or `.vue` files. It also picks up your babel configuration out-of-the-box, so no custom configuration is needed—cupcakes for everyone 🧁.

## 👷‍‍ Build command support

_Note: not all projects need building. Simple projects might deploy JS code as is, or the test runner might take care of this step for you. For example, running your tests with ts-node or babel/register or running it with Jest or Karma with the webpack plugin._

Previous versions of Stryker allowed you to configure a transpiler. For example, configuring `"transpilers": ["babel"]` would allow all files to be transpiled with the `@stryker-mutator/babel-transpiler` plugin. This way of working had its disadvantages:

- ⛔ Since every mutant needed to transpiled one by one, it was slow.
- ⛔ Every transpiler/bundler required a plugin. We only officially supported Webpack, Babel, and TypeScript. If you were using a different tool, you were out of luck.
- ⛔ It was hard to maintain the transpiler plugins since it hooked into the transpiler/bundler's API.

Stryker 4.0 gets rid of the transpiler plugins. Instead, it allows you to configure a `buildCommand`. Stryker will run this command once in the sandbox directory after instrumenting your code and just before starting the dry run. For example, running Stryker with `--buildCommand "npm run build"` will run `npm run build` inside the sandbox directory.

This new way of working gets rid of all the disadvantages listed above. It will only run once, you can use whichever tool you want, and we don't have to maintain plugins—a win-win-win scenario. The old transpiler plugins are no longer needed, and you can remove them from your project.

## ✅ Checker plugin

You might know that the old `@stryker-mutator/typescript` transpiler not only transpiled your code but also filtered out mutants that resulted in type errors, marking them with "compile error" in your report. Mutants with this status are considered invalid and do not influence your mutation score.

Stryker 4.0 removes the transpiler plugin in favor of `--buildCommand`.

_Wondering how your TypeScript code compiles even while some mutants might create type errors? Stryker places `// @no-check` atop your code files. Your TypeScript compiler will ignore any type errors produced by instrumenting your code._

However, you might still want to invalidate mutants that result in a type error, so you won't spend any time looking at them. The new "Checker" plugin helps you here. Checker plugins can choose to invalidate mutants based on rules specific to the checker.

We maintain one such checker, the `@stryker-mutator/typescript-checker`. It will mark mutants that would result in a type error with "Compile error".

Install it with `npm install -D @stryker-mutator/typescript-checker`.

Configure it with:

```json
{
  "checkers": ["typescript"],
  "tsconfigFile": "tsconfig.json"
}
```

Please see [the TypeScript checker's readme](https://github.com/stryker-mutator/stryker/tree/master/packages/typescript-checker#readme) for more details.

## ☔ Coverage analysis

Coverage analysis is a great way to speed up mutation testing. It is a means to reduce the number of tests Stryker needs to run to test a mutant. Stryker has three flavors:

- **"off"**: No coverage analysis
- **"all"**: Mutant coverage for the entire test suite is measured. Mutants without coverage are marked with "no coverage". But all tests run for mutants that are covered.
- **"perTest"**: Mutant coverage is measured per test. Stryker runs only the tests that cover a specific mutant when it tests that mutant.

Running with "perTest" coverage analysis allows for significant performance improvement, usually between 40% and 60%. However, most projects were unable to take advantage of it because Stryker relied on [istanbul code coverage](https://istanbul.js.org/) combined with test runner hooks. It only worked in scenarios without transpiling or bundling.

This changes with version 4. When Stryker instruments your code with mutants, it also injects the coverage instrumentation. No need for instanbul anymore, allowing Stryker to measure mutant coverage, _regardless of which bundler/transpiler you are using_. Hooking into the test runner is the only remaining requirement. All test runner plugins support these hooks, except for the `@stryker-mutator/jest-runner` (although we're [planning to support it](https://github.com/stryker-mutator/stryker/issues/2316)).

## 🧹 Other changes

We also decided to take this opportunity to improve the maintainability of the Stryker code further. That's why we've decided to drop support for two more plugin types.

**The `TestFramework` plugins are removed.**

A test framework plugin used to be responsible for allowing Stryker to hook into the test framework to support "perTest" coverage analysis. In practice, this was often tightly coupled to the test runner itself. For example, the mocha test runner uses -you guessed it- the mocha test framework. It made configuring Stryker needlessly complicated. That's why we've decided to drop this plugin type and make the Test Runner plugin responsible for hooking into the test framework directly. As a result, the following dependencies are no longer needed: `@stryker-mutator/mocha-framework` and `@stryker-mutator/jasmine-framework`.

**The `OptionsEditor` plugins are removed.**

Options editors provided a way for plugins to edit the Stryker options directly. In practice, this was used to load plugin-specific options and attach them to the StrykerOptions object for later use. Plugins should now load their needed options in their life cycle, for example, in the `init` method of the plugin.

## 💥 Breaking changes

Here is a list of the most important breaking changes. For a full list, please see our [changelog](https://github.com/stryker-mutator/stryker/blob/master/CHANGELOG.md).

- Configuring "transpilers" is no longer supported; please use `--buildCommand` instead.
- Configuring `mutator` as a string, or configuring `mutator.name` is no longer supported, Stryker will always use its code instrumenter.
- TypeScript 3.7 or higher is required if you're using TypeScript to transpile your code, either via a `--buildCommand` or via a test runner plugin, like [ts-jest](https://www.npmjs.com/package/ts-jest), [karma-webpack](https://www.npmjs.com/package/karma-webpack) or using the [angular-cli](https://www.npmjs.com/package/@angular/cli). If you're dependent on TS <3.7, please consider upgrading, or keep using Stryker V3. This is because the mutation instrumenter heavily leans on the support of `// @ts-nocheck` feature, added in TS3.7. If you're using another transpiler, like [babel](https://babeljs.io) or [ts-node with `transpileOnly`](https://github.com/TypeStrong/ts-node), then Stryker will work fine.
- Because of the requirement for TS 3.7, Angular >=9.0 is required for Angular projects.
- The `"command"` test runner is now "best-effort". Stryker will use an environment variable to communicate which mutant should be active. Your test command should pass the environment variables to the test environment. We expect this to work for most test runners and test commands out there. One exception is Karma, but since we have the `@stryker-mutator/karma-runner` for this use case, it shouldn't be a problem.
- Support for the Web Component Tester is dropped. Please see [#2386](https://github.com/stryker-mutator/stryker/issues/2386) for reasoning.
- Exporting a `function` from your "stryker.conf.js" file is deprecated. Please export your config as an object instead, or use a stryker.conf.json file. Please see [#2429](https://github.com/stryker-mutator/stryker/issues/2429) for more details.
- The `--maxConcurrentTestRunner` option is now deprecated, please use `--concurrency` instead. Stryker will use this setting to determine how to scale checkers or test runner processes. Note that Stryker will no longer prevent you from configuring more than the number of logical cores in your machine, i.e., `--concurrency 9999` might be a bad idea.

## 🔮 What's next?

Mutation switching was a considerable undertaking, but we had to do it since it allows for further performance and usability improvements. Let's discuss some here.

All these issues align with our project goals, which we've published in [our roadmap](https://github.com/stryker-mutator/stryker/wiki/Roadmap).

**Better Jest support**

With mutation switching in our backpack, implementing "perTest" coverage analysis for Jest is now on the table, allowing Stryker to run fewer tests in total. See [#2316](https://github.com/stryker-mutator/stryker/issues/2316) for more info.

**Hot reload**

Currently, Stryker will reload all code files between test runs (clearing them from the [require.cache](https://nodejs.org/api/modules.html#modules_require_cache) or doing a full page reload with Karma). However, thanks to mutation switching, the mutated code does not have to be reloaded. Instead, we can switch the active mutant and do another test run. Mocha will be the first test runner to receive this improvement. See [#2413](https://github.com/stryker-mutator/stryker/issues/2413) for more info.

**In place mutation**

Stryker currently never mutates _your code_ directly. Instead, it makes a copy of it in a "sandbox" directory, and it mutates your code there. The reason for this should be apparent; you don't want mutants to make there way into production.

However, in some corner cases, the simple act of copying your code to a sandbox directory makes running the tests impossible. See [#2163](https://github.com/stryker-mutator/stryker/issues/2163) for some examples. To truly make Stryker work for all JavaScript projects, we will need to allow for "in place" mutation. Don't worry, this will be optional, and we will make sure to let you know what Stryker is doing 🧐.

## 🎉 Thank you

Back in July, we released the first beta of Stryker 4. Since then, we got loads of responses resulting in the closing of [more than 40 issues](https://github.com/stryker-mutator/stryker/issues?q=is%3Aissue+milestone%3A4.0+is%3Aclosed), some of which were pretty major 😅. We want to thank everyone who helped to make this release possible! In particular (in no specific order)

🌹 [gramster](https://github.com/gramster)  
💐[kmdrGroch](https://github.com/kmdrGroch)  
🌼[Lakitna](https://github.com/Lakitna)  
🌻[brodybits](https://github.com/brodybits)  
🌺[Garethp](https://github.com/Garethp)

You guys are incredible!

If you read through this article: thank you! You're awesome! Now stop reading and give Stryker 4 a try. And let us know what you think 😀.
