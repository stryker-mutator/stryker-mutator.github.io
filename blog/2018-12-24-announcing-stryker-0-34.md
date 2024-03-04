---
slug: announcing-stryker-0-34
title: Announcing Stryker 0.34
authors: nicojs
tags: [stryker-js]
---

Stryker 0.34 is here. This new version comes with features to help you get started. It's never been this easy to mutation test your JS project!

<!--truncate-->

Install Stryker via the command line:

```
npm i stryker stryker-api --save-dev
```

Or run `stryker init` in the root of your project:

```
npx stryker init
```

Some features we want to talk about:

- [Command test runner](#command-test-runner)
- [Zero configuration](#zero-configuration)
- [Init presets](#init-presets)
- [Web component tester test runner plugin](#web-component-tester-plugin)

## Command test runner

Stryker always was and always will be test runner agnostic. It doesn't care which test runner you use.
However, it always required you to install a test runner plugin.
Are you using Jest? Install the 'stryker-jest-runner'. Want to use mocha? Then the 'stryker-mocha-runner' is just what you need.
This works great if the test runner of choice is supported, but what do you do when your test runner isn't supported?
Like [Ava.js](https://github.com/stryker-mutator/stryker-js/issues/243) or [node-tap](https://github.com/stryker-mutator/stryker-js/issues/325)
or [Intern](https://github.com/stryker-mutator/stryker-js/issues/430) or
maybe you have a custom `npm test` command. This is why we've added the `'command'` test runner.

Configure it in your stryker configuration:

```js
// stryker.conf.js
{
    testRunner: 'command',
    // Or leave out testRunner, 'command' is the default test runner
    commandRunner: {
        command: 'npm run mocha' // optionally choose a different command to run
    }
}
```

Stryker ships with the command test runner, so it doesn't need additional plugins. The command test runner will simply run your `npm test` script.
If the exit code is `0`, the tests succeeded. If not, they failed.

Stryker is limited in the ways it can optimize for performance. For example, it starts a fresh node process for each test run.
So if your test runner is supported via a test runner plugin, that would still be the way to go.

The command test runner runs `npm test` by default. You can configure a different command with the `commandRunner` configuration key.

Special thanks to [Diego R.B.](https://twitter.com/DiegoRBaquero) for inspiring us to implement this.

## Zero configuration

Stryker now chooses sensible defaults for all settings. Meaning that you can now run Stryker without any configuration.
It will look for \*.js files to mutate in your `src` and `lib` directories (excluding obvious test files, like app.spec.js).
Coverage analysis will be turned off and the [command test runner](#command-test-runner) is used.

```
npm install --save-dev stryker stryker-api
npx stryker run
```

**Note:** The default mutator Stryker uses will still be the deprecated `es5` mutator (comes with Stryker). In time, we'll be migrating this to
use the `'javascript'` mutator (supporting ESNext).

With these defaults in place, it is now also easy to run Stryker without a configuration file if you want just one or two config options
to change. For example:

```
npx stryker run --testRunner mocha --mutator javascript
```

Again, special thanks to [Diego R.B.](https://twitter.com/DiegoRBaquero) for inspiring us to implement this.

With this feature in place, Stryker is now effectively a drop in replacement for [mutode](https://github.com/TheSoftwareDesignLab/mutode).

## Init presets

With `stryker init` (either using the [stryker-cli](https://github.com/stryker-mutator/stryker-cli), or using `npx stryker init`)
you can initialize Stryker in your repository. It asks questions via a questionnaire, like "Which test runner do you want to use?" and
"Which test framework do you want to use?". Sometimes you might not know the answer to those questions. It also might take a lot more
configuration to get you started. This is why we added a [guides section to the stryker handbook](https://github.com/stryker-mutator/stryker-handbook/tree/master/stryker/guides).
We've now integrated those into the `stryker init` command.

```
$ stryker init
? Are you using one of these frameworks? Then select a preset configuration. (Use arrow keys)
> angular-cli
react
vueJs
──────────────
None/other
```

Choosing for a preset immediately gets you started! It creates the configuration file and installs the correct plugins.
Choosing `None/other` here will still take you to the normal questionnaire.

Special thanks to [wmaarts](https://github.com/Wmaarts) for adding this feature.

## Web component tester plugin

With this release of Stryker, we've also released version 0.1.0 of the stryker-wct-runner. Install it with:

```
$ npm install --save-dev stryker-wct-runner
```

Configure it with:

```js
{
  testRunner: 'wct';
}
```

With this plugin, we now support [Polymer](https://www.polymer-project.org/) cli projects.
The [web-component-tester](https://www.npmjs.com/package/web-component-tester) runs your tests in an actual browser.
However, it doesn't support any of the coverage analysis performance features for now. If you want those to be supported,
please open an issue. You're also welcome to take a look at the [issues we've opened at Polymer side](https://github.com/Polymer/tools/issues/created_by/nicojs).
Any help there is really appreciated.

## What's next?

We're still focussing on getting v1 out of the door. We're reasonably certain it will happen in Q1 of next year.
V1 will mostly be removing deprecated features. We'll also introduce a more predictable release schedule with
strict [Semantic Versioning](https://semver.org/spec/v2.0.0.html) policies. Stay tuned.

Input on these new features or the v1 preparations are welcome!
