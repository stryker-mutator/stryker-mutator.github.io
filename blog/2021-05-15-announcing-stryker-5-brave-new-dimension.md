---
slug: announcing-stryker-js-5-brave-new-dimension.md
title: Announcing StrykerJS 5.0 - Brave new Dimension
author: Nico Jansen
author_title: Stryker Team
author_url: https://github.com/nicojs
author_image_url: https://avatars3.githubusercontent.com/u/1828233?s=400&u=fec18ad3776aaafec54c49bbd7173a841ae7ea59&v=4
tags: [stryker]
---

# Announcing StrykerJS 5.0 - Brave new Dimension

We're proud to announce the next major release of StrykerJS: 5.0. With a name change, a new dimension in your report, a new way to discover files, updated mutators, quality of life improvements, and minor bug fixes.

<!--truncate-->

If you're new to mutation testing, it's a way to measure your tests' effectiveness. A mutation testing framework will make small changes, called _mutants_, one by one in your source code. Then it will run your tests to see if one of them fails. If so, you just "killed" that mutant; if not, it "survived". If too many mutants survive, you probably want to improve your tests. The mutation testing report will give you insides into the test cases you may have missed. If this all sounds complicated, please take a look at [our RoboBar 🤖🍷 example](https://stryker-mutator.io/example).

If you're new to StrykerJS, please follow our [Getting started guide](todo). Are you already using StrykerJS? Update to the latest version with your package manager of choice.

```shell
dotnet tool update -g dotnet-stryker
#or
dotnet tool install -g dotnet-stryker
```

With that out of the way, let's dive into the new stuff!

## 🐲 No more beta

For the last few years Stryker.NET has been in beta. This meant we didn't guarantee that features were stable and we could change functionality at our wish. 
In practice we kept all features pretty stable and even used deprecation for some features. They have been removed now that version 1.0 is done 😃

## Breaking changes

When upgrading from version 0.x to 1.0 you'll have to make sure you:
* Install dotnetcore runtime 5.0.
* Migrate all your command and json [configuration](todo) to our new notation.

Later in this post you can find a complete [migration guide](#migration-guide).

## ✨ New features



### Allow failing tests

Up until now stryker needed a 100% succeeding testrun to ensure your mutation score is correct. But now you can run stryker even on a failing testset.

This can be useful for example when 

### Extensive mutant filtering

inline comments and linq

### Multi target support


### Statement mutator

## 🤷‍♂️ Discovering files

StrykerJS typically doesn't mutate your files directly. Instead, it creates a copy inside a _sandbox_ directory, usually located at `.stryker-tmp/sandbox-123456`. However, it won't copy over all files there to save time. Stryker used to rely on git to decide which files to copy. Any `.gitignored` files would not be copied.

There were some issues with this approach. First of all, it required your project to be located in a git repository, and you needed to have git installed. And then, there are also examples of test suites that need some `.gitignore`d files to run, like `.env`.

To combat these issues, StrykerJS 5 will no longer use git for file discovery. Instead, it will include all files while ignoring some standard patterns, like "node_modules". You can remove more files by specifying patterns in the new [`ignorePatterns`](https://stryker-mutator.io/docs/stryker-js/configuration#ignorepatterns-string) configuration option. For example:

```json
{
  "ignorePatterns": ["bower_components"]
}
```

StrykerJS also allows you to specify `files`, which does the opposite of `ignorePatterns`, namely, you select the files you need to run your tests. Painstakenly whitelisting each file is more time-consuming and prone to error; that's why we've decided to _deprecate_ `files` in favor of `ignorePatterns`.

Are you currently using `files`? You can probably remove `files`, and Stryker will still work. Or, if you still prefer the whitelisting method, you can achieve this like so:

```json
{
  "ignorePatterns": ["**", "!src/**/*.js"]
}
```

See the [original pull request](https://github.com/stryker-mutator/stryker-js/pull/2848) for more information.

## 👽 Updated mutators

We've decided to add a new variant to the [logical operator mutator](https://stryker-mutator.io/docs/mutation-testing-elements/supported-mutators#logical-operator). It now also mutates _the nullish coalescing operator_ (`??`).

```diff
-foo ?? bar
+foo && bar
```

To kill this mutant, you will need to write a test for both branches of the operator. Like you already needed to do for the logical OR (`||`) and logical AND (`&&`) operators.

We're also in the process of adding a new [optional chaining mutator](https://github.com/stryker-mutator/stryker-js/pull/2886), but that didn't make it in time for this release.

A quick plug: as of version 4.4, StrykerJS will also mutate your `/regex/`s. For example:

```diff
- /\d{4}\s?[a-Z]{2}/
+ /\d\s?[a-Z]{2}/
+ /\D{4}\s?[a-Z]{2}/
+ /\d{4}\S?[a-Z]{2}/
+ /\d{4}\s?[a-Z]/
+ /\d{4}\s?[^a-Z]{2}/
```

Thanks again to the students who created [weapon-regex](https://github.com/stryker-mutator/weapon-regex/) to make this happen 🎉

## 🕵️‍♂️ Default coverage analysis

Coverage analysis is a feature that makes StrykerJS run faster because it will run fewer tests per mutant. In its strongest setting, `"coverageAnalysis": "perTest"`, it will only run the exact tests that are covering a mutant. Whether or not you are able to use this feature depends on your test suite and test runner, see [coverage analysis in configuration](https://stryker-mutator.io/docs/stryker-js/configuration#coverageanalysis-string) for more details.

Since v4.3, `@stryker-mutator/jest-runner` also supports this setting. Now that all officially supported test runners support coverage analysis, it was time to make `perTest` the default setting. So we did. You can still disable it with `"coverageAnalysis": "off"`

## 🧹 Other changes

We once again chose to improve the maintainability of the Stryker code base.

**Unified reporter api**

The Reporter plugin API has gotten an overhaul. It is now more in line with [mutation-testing-elements](https://github.com/stryker-mutator/mutation-testing-elements/)

See the [original PR](https://github.com/stryker-mutator/stryker-js/pull/2798) for more information.

**Serialization**

Stryker uses worker processes to run tests and check mutants for type errors. These workers receive any options via a message. Stryker used the [surrial](https://www.npmjs.com/package/surrial) package to serialize complex objects like [RegExp](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp), functions, and even classes. This hidden feature was rarely used and not a good practice in hindsight. StrykerJS 5 replaces this with plain old [`JSON.stringify`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify) and [`JSON.parse`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse). Don't worry, you get a warning if you configure something that isn't serializable.

See the [original PR](https://github.com/stryker-mutator/stryker-js/pull/2877) for more information.

## 💥 Breaking changes

- **range:** The `range` property is no longer present on a `mutant`. Note, this is a breaking change for plugin creators only.
- **options:** `"perTest"` is now the default value for "coverageAnalysis" when the configured test runner is not "command". Explicitly set `"coverageAnalysis": "off"` manually to opt-out of this behavior.
- **node:** Node 10 is no longer supported. Please use Node 12 or higher.
- **serialize:** Having a non-JSON-serializable value in your configuration won't be sent to the child process anymore. If you really need them in your test runner configuration, you should isolate those values and put them in test runner-specific config files, loaded by the test runner plugin itself, for example, jest.config.js, karma.conf.js, webpack.config.js.
- **ignore patterns:** Stryker will no longer use a git command to determine which files belong to your project. Instead, it will rely on sane defaults. You can change this behavior by defining [`ignorePatterns`](https://stryker-mutator.io/docs/stryker-js/configuration/#ignorepatterns-string).
- **ignore patterns:** The `files` configuration option is deprecated and will be removed in a future release. Please use [`ignorePatterns`](https://stryker-mutator.io/docs/stryker-js/configuration/#ignorepatterns-string) instead.

  This:

  ```json
  {
    "files": ["foo.js"]
  }
  ```

  Is equivalent to:

  ```json
  {
    "ignorePatterns": ["**", "!foo.js"]
  }
  ```

- **reporter api:** Changes to `Reporter` and `TestRunner` plugin API of Stryker
- **jest-runner:** Support for project type `create-react-app-ts` is dropped from the jest-runner.

## 🎉 Thank you

Thanks to everyone for your continued support! Have questions or issues? Don't hesitate to contact us in [Slack](https://join.slack.com/t/stryker-mutator/shared_invite/enQtOTUyMTYyNTg1NDQ0LTU4ODNmZDlmN2I3MmEyMTVhYjZlYmJkOThlNTY3NTM1M2QxYmM5YTM3ODQxYmJjY2YyYzllM2RkMmM1NjNjZjM), on [Twitter](https://twitter.com/stryker_mutator/) or open [an issue](https://github.com/stryker-mutator/stryker-js/issues/new/choose).
