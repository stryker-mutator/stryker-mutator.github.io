---
slug: announcing-faster-typescript-checker
title: 'Announcing a faster TypeScript checker for StrykerJS'
authors: danny-berkelaar
tags: [stryker-js]
---

We're excited to announce StrykerJS 6.4. This release comes with [some bug fixes](https://github.com/stryker-mutator/stryker-js/releases/tag/v6.4.0), but in this article, we will focus on upgraded TypeScript Checker.	 
 
As a reminder, the TypeScript checker is an optional StrykerJS plugin. When configured, each mutant will first be validated to not result in compile errors when run through the TypeScript compiler.

The performance of this process has been an issue for quite some time now. In the past, enabling this plugin might have resulted in up to a 10x performance degradation. But there is excellent news, version 6.4 of the Typescript checker improves the performance by up to 50% 

 <!-- truncate -->	 

To update to the latest version of StrykerJS, install `@latest` as follows:	 

 ```shell	 
 npm install --save-dev @stryker-mutator/core@latest	 
 # OR	 
 yarn add --dev @stryker-mutator/core@latest	 
 ```	 

Remember also to update your Stryker plugins. For example, when using the TypeScript checker:

```shell	 
npm install --save-dev @stryker-mutator/typescript-checker@latest	 
# OR	 
yarn add --dev @stryker-mutator/typescript-checker@latest	 
```	 

If you're new to mutation testing, it's a way to measure your tests' effectiveness. Please take a look at [our RoboBar 🤖🍷 example](https://stryker-mutator.io/example) and see how even 100% code coverage doesn't tell the whole story. Mutation testing is the only way to know if your tests are any good.	 

Now, let's dive into the upgraded TypeScript checker! 🏊‍♂️	 
 
## 😲 The problem

If you've used TypeScript before, you probably have noticed that running the TypeScript can  be pretty slow. However, you generally accept this because of the incredible value type checking provides in your day-to-day life. 

TypeScript is very smart about what constructs are valid and which aren't. So when you also use StrykerJS, you want to avoid being bothered by mutants that result in invalid TypeScript. This is where the TypeScript checkers come in. Configuring this checker plugin will make sure mutants are always valid. Invalid mutants get reported as `CompileError`. 

The way the checker plugin did this was to validate your mutants was somewhat pessimistic, namely, by letting TypeScript validate each mutant one by one. Even when you do this in memory and with TypeScript's `--watch` mode enabled, this results in dramatic performance! Running StrykerJS on itself took 10x longer with this plugin than without it!

## ⏩ The upgraded TypeScript Checker	 

Luckily there is a solution here. By grouping mutants together, we can type-check a bunch of them at once. Creating these groups is somwhat tricky, [see in depth](#🔎-in-depth).	 
 
 **Note:** This grouping strategy is the new default. However, there are some minor [drawbacks](#⚠-drawbacks).	 

In our tests on the `core` package of StrykerJS we found that the performance increased by 43% while still being 99.1% accurate! Of course, the larger a project is, the more performance gain this new version might provide.

## 🔎 In depth	 

To improve the performance of the TypeScript checker, we needed to find a way to check multiple mutants at once. However, simply inserting all mutants into the project and compiling it wouldn't work! Indeed, how would you relate compile errors to the mutants that created them? 

To solve this problem, we decided to group mutants based on their relation to each other. Groups of mutants are created based on file references. To keep it simple: mutants are _only_ grouped together when they _don't relate to each other_. We might even want to experiment with larger group sizes in the future.

Internally, a dependency graph is created from the project files using the TypeScript Compiler. Starting with an empty group, we pick a mutant from the list and check if its related file is not already in the group and if the files of the mutants already in the group have no dependencies on them. If it passes these checks, the mutant is added to the group. We then repeat this process with the next mutant until the group is "full", at which point we start a new group. This continues until all mutants have been grouped.

Once groups are created, we check them for compile errors. All mutants in one group are checked in the same TypeScript Compiler run. Any compile errors are captured and referenced back to the mutant that caused it using the dependency graph created in the group method.	

## ⚠ Drawbacks	 

It's worth noting that the mutation results may not always be 100% accurate with the new TypeScript checker. The issue stems from how TypeScript resolves its compile errors. For more information on this topic, check out [issue 46272](https://github.com/microsoft/TypeScript/issues/46272) that we created at the TypeScript repository.	 

If your project requires the highest possible level of accuracy, it's still possible to disable grouping entirely. However, you'll be forfeiting the performance gains offered by grouping.	 

 ```js
 {	 
  "typescriptChecker": {	 
    "prioritizePerformanceOverAccuracy": false // set to false (default true)
   }	
 }
 ```	 

 ## 🔮 What's next	 

Please try out the new TypeScript Checker and let us know what you think. We would love to hear from you! Also, look at the [6.4 release notes](https://github.com/stryker-mutator/stryker-js/releases/tag/v6.4.0) to see the complete list of changes in 6.4.	 

In the medium term, we will be working on supporting `vitest` and `node-tap`. We maintain a [🛣 roadmap on github](https://github.com/stryker-mutator/stryker-js/wiki/Roadmap), so you can always see what we're actively working on.
