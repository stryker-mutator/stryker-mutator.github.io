---
slug: announcing-stryker-4-beta-mutation-switching
title: Announcing Stryker 4.0 Beta
authors: nicojs
tags: [stryker-js]
---

We're excited to announce the beta of the next major release of the Stryker mutation testing framework for JavaScript and friends: Stryker 4.0.

This beta is a huge milestone because it means a fundamental shift in the way Stryker works internally. It now uses "Mutation switching", a technique that can improve performance.

<!--truncate-->

This, unfortunately, couldn't be done without breaking changes. These changes are mostly limited to the internal plugin API's except for the changes highlighted in this blog article.

To get started using the beta, update your Stryker dependencies using npm or yarn.

```shell
npm install --save-dev @stryker-mutator/core@next
```

Don't forget to update Stryker plugins. For example, when using mocha:

```shell
npm install --save-dev @stryker-mutator/mocha-runner@next
```

This beta is released early, in order to get community feedback. We've not yet updated the docs with the changes specified in this blog article. At this moment, the jest-runner and the command test runner _still need to be migrated and will not work as expected_.

_Note: Since beta version `4.0.0-beta.2`, both the command test runner and the jest test runner are supported. However, the command test runner does have some [limitations](https://github.com/stryker-mutator/stryker-js/pull/2345)_

If you're new to mutation testing, it's a way to measure your tests' effectiveness. Please take a look at [our RoboCoasters 🤖🎢 example](/docs/General/example/) and see how even 100% code coverage doesn't tell the whole story. Mutation testing is the only way to make sure your code is thoroughly tested.

## 👽 Mutation switching

Mutation switching is a way to simultaneously put all mutants into your code while making sure only one mutant is active at the same time. Let's take a look at an example.

Let's take this.

```js
function add(a, b) {
  return a + b;
}
```

When you feed this code to Stryker, it will generate two mutants:

👽 `function add(a, b) { return a - b }`  
👾 `function add(a, b) {}`

Previous versions of Stryker would make two copies of the source code. One for each mutant. This changes with Stryker 4.0. Both mutants will be placed into the code _at the same time_.

```js
function add(a, b) {
  if (global.activeMutant === 0) {
  } else {
    return global.activeMutant === 1 ? a - b : a + b;
  }
}
```

(simplified example)

Stryker can now run your tests twice while changing which mutant is active in the process. Mutation switching can improve performance dramatically, depending on the type of project. For example, when you bundle your code with webpack before running the tests, then webpack only needs to run once. The same goes for TypeScript projects where you compile your code before testing.

## 🐠 Instrumentation with Babel

Mutation Switching is a significant performance improvement, but it means that Stryker is required to perform some complex transformations of the [Abstract Syntax Tree (AST)](https://en.wikipedia.org/wiki/Abstract_syntax_tree).

Doing this _instrumentation_ means visiting each node of the AST to collect and place mutants. This instrumentation is implemented with the [Babel](https://babeljs.io/) parser and now ships with `@stryker-mutator/core`. We're taking advantage of Babel 7's support to parse and print any type of JavaScript, including TypeScript code.

This means that it is _no longer needed to configure the `mutator`_ in your Stryker configuration. Stryker will always use the new mutation instrumenter. It supports TypeScript, JavaScript, Flow, and JSX. It even supports mutating script tags in `.html` or `.vue` files. It also picks up your babel configuration out-of-the-box, so no custom configuration is needed.

## 👷‍‍ Build command support

With mutation switching, all mutants are placed in the code at the same time. This also means that it only has to be built (transpiled or bundled) once.

_Note: not all projects need building. Simple projects might deploy JS code as is, or the test runner might take care of this step for you. For example, running your tests with `ts-node` or `babel/register` or running it with `Jest` or `Karma` with the [webpack plugin](https://github.com/webpack-contrib/karma-webpack)._

Before mutation switching, this would be the job of the `transpiler` plugin type. For example, `transpiler: ['babel']` would mean that all files would be transpiled with the `@stryker-mutator/babel-transpiler` plugin. It was a bit complex to create a transpiler plugin, and since every mutant needed to transpiled, it was slow. Every transpiler/bundler needed its a transpiler plugin.

Stryker 4.0 will no longer support the `transpiler` plugins. Instead, it allows you to configure a `buildCommand` yourself. A build command can be any command. Some examples include `npm run build`, `tsc -b` or `webpack --config webpack.config`. This means that the available plugins do not limit you.

The following dependencies are therefore no longer needed, and you can simply remove them:

- `@stryker-mutator/babel-transpiler`
- `@stryker-mutator/webpack-transpiler`
- `@stryker-mutator/typescript`

## ✅ Checker plugin

You might know that the old `@stryker-mutator/typescript` transpiler not only transpiled your code but also filtered out mutants that resulted in type errors, marking them with `compile error` (or `transpile error`) in your report. Mutants with this status are marked as "invalid" and do not influence your mutation score.

Since Stryker 4.0 [removes the transpiler plugin type](#build-command-support) we needed a new plugin that can perform this type checking. Introducing the `Checker` plugin type. In the Stryker 4 release, we will include one such checkers, the `@stryker-mutator/typescript-checker`.

Install it with `npm install @stryker-mutator/typescript-checker@next`

Configure it with:

```ts
{
  "checkers": ["typescript"],
  "tsconfigFile": "tsconfig.json"
}
```

(tsconfig.json is the default setting for "tsconfigFile").

Please see [the TypeScript checker's readme for more details](https://github.com/stryker-mutator/stryker-js/tree/epic/mutation-switching/packages/typescript-checker#readme)

## ☔ More coverage analysis

Coverage analysis is a way to speed up mutation testing. Stryker always came with three flavors:

- "off": No coverage analysis
- "all": Coverage is measured for the entire test suite. Mutants that are not covered by even one test are marked with "NoCoverage"
- "perTest": Coverage is measured per test. Only tests that cover a specific mutant are run for that mutant.

Running with "perTest" coverage yields a significant performance improvement (usually between 40% and 60%). However, most projects were unable to take advantage of it because Stryker relied on a complex mechanism of [istanbul](https://istanbul.js.org/) code coverage combined with hooks in the test runner. It only worked in scenarios without complicated transpiling or bundling.

With the introduction of mutation switching, the instrumenter is responsible for inserting coverage instrumentation into the code. This means that Stryker can measure mutant coverage, _regardless of which bundler/transpiler you are using_. The only requirement is that Stryker needs to be able to hook into the test runner. This is currently supported for `@stryker-mutator/mocha-runner`, `@stryker-mutator/karma-runner` and `@stryker-mutator/jasmine-runner`. Support for [`@stryker-mutator/jest-runner` is planned](https://github.com/stryker-mutator/stryker-js/issues/2316).

## 🧹 Other changes

We also decided to take this opportunity to improve the maintainability of the Stryker code further. That's why we've decided to drop support for two more plugin types.

- The `TestFramework` plugin type is removed  
  A test framework plugin used to be responsible for allowing Stryker to hook into the test framework to implement test filtering and perTest coverage analysis. In practice, this was often tightly coupled to the test runner itself. That's why we've decided to drop this plugin type and make the Test Runner plugin responsible for hooking into the test framework directly. Therefore the following dependencies can simply be removed: `@stryker-mutator/mocha-framework` and `@stryker-mutator/jasmine-framework`.
- The `OptionsEditor` plugin type is removed  
  Options editors provided a way for plugins to edit the Stryker options directly. In practice, this was used to load plugin-specific options and attach them to the StrykerOptions object for later use. Plugins are now expected to load their options in their life cycle.

## 🔮 What's next

We'll be focussing on getting Stryker 4.0 released. For that to happen, we would appreciate your feedback. Feel free to report any [issues](https://github.com/stryker-mutator/stryker-js/issues/new) you have with this beta release.
