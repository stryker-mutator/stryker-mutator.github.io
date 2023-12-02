---
slug: announcing-stryker-js-8
title: 'Announcing StrykerJS 8.0: Svelte and Vitest browser mode support'
authors: teunlamers
tags: [stryker-js]
---

Welcome to the latest major release of StrykerJS, version 8.0!

We are excited to announce new capabilities by enabeling StrykerJS support in Svelte and Svelte-kit projects! It's also been made possible to use StrykerJS with Vitest browser mode! Furthermore there has been one breaking change.

To update to the latest version of StrykerJS, install `@latest` as follows:

```shell
npm install --save-dev @stryker-mutator/core@latest
# OR
yarn add --dev @stryker-mutator/core@latest
```

Remember to update Stryker plugins. For example, when using the vitest runner:

```shell
npm install --save-dev @stryker-mutator/vitest-runner@latest
# OR
yarn add --dev @stryker-mutator/vitest-runner@latest
```

If you're new to mutation testing, it's a way to measure your tests' effectiveness. Please take a look at our RoboBar 🤖🍷 example and see how even 100% code coverage doesn't tell the whole story. Mutation testing is the only way to know if your tests are any good.
In this blog article, we will walk you through the highlights of this release, including Svelte support, Vitest browser mode, and an important breaking change.

## Svelte Support

In our continuous effort to support the latest and greatest in the Javascript Ecosystem one framework has been missing for a while. Svelte is one of the most beloved frameworks by its users and we could not be more excited to announce that StrykerJS is now able to be used in Svelte and Svelte-Kit projects!

Check out our (guide)[https://stryker-mutator.io/docs/stryker-js/guides/svelte/] to use Stryker in your Svelte projects!

💐 Special thanks to [nicojs](https://github.com/nicojs) and  [hugo-vrijswijk](https://github.com/hugo-vrijswijk) for helping me with the design and implementation ❤

## 🌐 Vitest Browser mode

TODO

## 💥 Breaking Changes

Unfortunately The newest version comes with a breaking change:
- **Node 16 no longer supported** Node v16 is no longer [supported](https://nodejs.org/en/about/previous-releases)

## 🔮 What's next

TODO
