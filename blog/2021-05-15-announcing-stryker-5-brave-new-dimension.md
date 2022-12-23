---
slug: announcing-stryker-js-5-brave-new-dimension.md
title: Announcing StrykerJS 5.0 - Brave new Dimension
authors: nicojs
tags: [stryker-js]
---

# Announcing StrykerJS 5.0 - Brave new Dimension

We're proud to announce the next major release of StrykerJS: 5.0. With a name change, a new dimension in your report, a new way to discover files, updated mutators, quality of life improvements, and minor bug fixes.

<!--truncate-->

If you're new to mutation testing, it's a way to measure your tests' effectiveness. A mutation testing framework will make small changes, called _mutants_, one by one in your source code. Then it will run your tests to see if one of them fails. If so, you just "killed" that mutant; if not, it "survived". If too many mutants survive, you probably want to improve your tests. The mutation testing report will give you insides into the test cases you may have missed. If this all sounds complicated, please take a look at [our RoboBar 🤖🍷 example](https://stryker-mutator.io/example).

If you're new to StrykerJS, please follow our [Getting started guide](https://stryker-mutator.io/docs/stryker-js/getting-started/). Are you already using StrykerJS? Update to the latest version with your package manager of choice.

```shell
npm install --save-dev @stryker-mutator/core@latest
# OR
yarn add --dev @stryker-mutator/core@latest
```

Don't forget to do the same for any plugins you might be using. For example,

```shell
npm install --save-dev @stryker-mutator/mocha-runner@latest
# OR
yarn add --dev @stryker-mutator/mocha-runner@latest
```

With that out of the way, let's dive into the new stuff!

## 👪 Name change

That's right. We've rebranded 'Stryker for JavaScript and friends' as simply **StrykerJS**. This change makes it easier to distinguish StrykerJS from other frameworks in the Stryker family (Stryker.NET and Stryker4s). It also allows for better use of Twitter real estate 😊.

Don't worry; the names of the NPM packages haven't changed. So it is purely a branding thing.

## ✨ New dimension

The mutation test report has always been the bread and butter of Stryker. Either in your browser or console, it is where you find out where the killed and survived mutants are. But the next question you might ask is: which tests were responsible? Stryker knows but wasn't telling you. Until now!

Behold, the new dimension you'll find in your reports—the test view 🧪.

![html test view](/images/blogs/test-view-html-1.png)
![html test view2](/images/blogs/test-view-html-2.png)

Or using the `clear-text` reporter:

![text test view](/images/blogs/test-view-console.png)

The test view tells you at a glance which tests are _killing_ mutants, which are merely _covering_ mutants (without killing) and which are _not covering_ any mutants. Furthermore, you can determine which mutants were covered or killed by that particular test case. Finding out so much information about your tests has never been this easy!

A couple of caveats to point out:

- The `Covering` state will only be available when selecting the [`perTest` coverage analysis setting](https://stryker-mutator.io/docs/stryker-js/configuration#coverageanalysis-string).
- StrykerJS always runs your tests with `bail` mode active (or `failFast` in jasmine), making your test runner stop after the first failing test. As a result, a mutant can only be killed by one test. If you have overlap in asserts across tests, other tests might be marked as "Covering", while they would kill a mutant when run in isolation.
- Some mutants are executed as soon as your file _is loaded_ instead of during _test execution_. We call these mutants _static mutants_, and all your tests are executed as a result. For example:
  ```diff
  // hello.js
  -export const hello ='👋'
  +export const hello = ''
  ```
  A test that for `hello` might look like:
  ```js
  import { hello } from './hello.js';
  describe('hello', () => {
    it('should be a string', () => expect(typeof hello).toBe('string'));
  });
  ```
  As you can see, this is a relatively weak test that doesn't kill this mutant. You might assume that this test covers the mutant, but upon further inspection, you'll notice that `hello` is declared as soon as the file loads. There is no way for Stryker to know that this test is supposed to cover the mutant. As a result, the test is marked as "Not Covering".
- Currently, only the `@stryker-mutator/jest-runner` can group your tests in their original test files. Running with another test runner will result in your tests being displayed in a list instead.

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
