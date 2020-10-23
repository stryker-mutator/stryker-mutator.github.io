---
slug: road-to-stryker-1-0
title: Road to Stryker 1.0
author: Nico Jansen
author_title: Stryker Team
author_url: https://github.com/nicojs
author_image_url: https://avatars3.githubusercontent.com/u/1828233?s=400&u=fec18ad3776aaafec54c49bbd7173a841ae7ea59&v=4
tags: [stryker]
---

Stryker is about two years old. During this time we achieved a lot. But it's far from finished. So, what's next? Let's take a glimpse in the future.

Some of Strykers achievements are:
        
* Stryker is the first functional mutation testing framework for JavaScript.
* Stryker is test framework and test runner agnostic.
* Stryker boosts performance by running tests in parallel.
* Stryker uses advance coverage analysis to do less work.

The way Stryker achieves all this, is using a plugin model. Want to use a different test runner? 
Create a class that implements the [TestRunner interface](https://github.com/stryker-mutator/stryker/blob/master/packages/stryker-api/src/test_runner/TestRunner.ts) and you're done.
However, Stryker does one assumption: your source code can be directly executed in your environment.

## Road to v1

We're very happy with the results so far, but we're far from done. The JavaScript world is constantly evolving.
A couple of examples of modern use cases are:

* A web project written in JSX / [React](https://facebook.github.io/react/)
* A node project written in [TypesScript](https://www.typescriptlang.org/) and executed using [ts-node](https://www.npmjs.com/package/ts-node) 
* An Angular project generated with the [angular cli](https://www.npmjs.com/package/@angular/cli) using [webpack](https://webpack.js.org/) and [TypeScript](https://www.typescriptlang.org/)
* A web project using [VueJS](https://vuejs.org/)
* A web component written in HTML5 using [Polymer](https://www.polymer-project.org) and [webpack](https://webpack.js.org/)

In order to stay relevant, these use cases need to be supported in a user friendly way. 
Only then are we comfortable with tagging Stryker with a version *1* tag.

## False assumption

If you look at the modern use cases, they have something in common: 
your code cannot be directly executed in your JavaScript environment. It's not even JavaScript in some cases.
It first needs to be compiled, transpiled and/or bundled, before it can be executed.
For the sake of this article, let's call this step [transpiling](https://en.wikipedia.org/wiki/Source-to-source_compiler).
This makes the assumption that Stryker does a false one: **it should not assume the code you write is the code that gets executed**.

## First attempt

We've had a lot of discussion within the Stryker team on how to support these use cases. 
One possibility is to first transpile your code before we run the normal Stryker process on it.
        
In the end we decided against this approach, because it comes with a big downside: it will cause a lot of false positives.

Let's take this piece of TypeScript code as an example:

```typescript
const b = 42;
const a = `the answer is ${b}`;
```

This might transpile to:

```javascript
var b = 42;
var a = 'the answer is ' + b;
```

When Stryker comes along: it changes `'the answer is ' + b` to `'the answer is ' - b`. 
This is a valid mutation for JavaScript (if you're curious: the answer is `NaN`).
However, `'the answer is ' - b` is *not a valid TypeScript expression*. It results in the following compile error:

```bash
The left-hand side of an arithmetic operation must be of type 'any', 'number' or an enum type.
```

This is why we refer to it as a false positive. This mutation shouldn't be tested, because it's a waste of resources and it impacts the mutation score. This is why we shouldn't blindly mutate transpiled code. 

## Open heart surgery

The only solution for supporting these use cases is to transpile the code after it has been mutated. This way, we can make sure only valid mutations are done to your code because 
we *teach* Stryker which mutations are valid and which are invalid and we won't have to worry about code that gets generated during the transpilation. 

However, we don't want to just hard code it all in Stryker, because that would force a dependency on TypeScript, Babel, Webpack, etc. 
Instead the transpiling and mutating of the code will be the responsibility of a new plugin type.
Let's call this the `transpiler` plugin. Examples of these plugins may be (in the future): `stryker-typescript-transpiler`, `stryker-javascript-transpiler`, `stryker-babel-transpiler`, `stryker-webpack-transpiler`

We've sketched the new workflow for the TypeScript use case on a whiteboard:

![transpiler-plugin](/images/blogs/transpiler-plugin.jpg)

Let's explain what happens in 2 steps: 

1. Initial test run
2. Mutation testing

### Step 1: Initial test run

Starting from the top left: Stryker starts by reading your Stryker configuration file.
After that, we read in the source files into memory. As you might have noticed, these will be the *typescript files*.
Next up: it's the new `stryker-typescript-transpiler` plugin's time to shine. It will transpile the *.ts files into *.js files
and it will use your "tsconfig.json" configuration for this. The JavaScript output of this process will
be written to disk by Stryker in something that we call a *Sandbox*. In this Sandbox, Stryker can 
start the initial test run as usual.

Why this complicated setup? After all, if we want to do an initial test run, we might as well just let your build process transpile the code
and run the tests using your test runner. The answer is that we need a baseline of your tests ran by Stryker. 
In the next step, Stryker will write mutations to different Sandboxes and run your tests. 
We need a control step to make sure your tests pass under normal circumstances. Also: this is where 
we measure your code coverage results for every test (if your test framework and test runner support it), which
are used to speed up mutation testing.

### Step 2: Mutation testing

After the initial test run completed successfully, we proceed with the actual mutation testing. The first step here
is about figuring out how we can mutate your source code. This is again done by the `stryker-typescript-transpiler` plugin.
It will mutate the TypeScript specific [abstract syntax tree](https://en.wikipedia.org/wiki/Abstract_syntax_tree), but *only
in valid ways*. For example: it won't mutate `'the answer is ' + 42` into `'the answer is ' - 42`, but it might
mutate it into `'Stryker was here' + 42`. The output of this process is a list of (in-memory) mutants.

A mutant will have 2 parts: a TypeScript part and a JavaScript part. Stryker itself only cares about the 
JavaScript part, because that is the recipe to mutate the JavaScript code in the sandboxes.
This will allow Stryker to do mutation testing without needing to compile the code for each mutant, which would be disastrous for performance.
The TypeScript part of a mutant can be used to report the mutated code to the end user. So the mutants that will be reported
in the exact code and language that the end user uses.

## Plain JavaScript projects

Back to plain JavaScript projects. What will change for them? The answer is: not much.
We'll basically move the current logic for mutating code to a new `stryker-javascript-transpiler` plugin.
It will be a pass-through transpiler, meaning that the code you write will be used directly. 
Mutating of JavaScript code will move to this plugin as well.

## Want to help?

Want to help? Great! We're really looking for people interested in helping us reach our goal of supporting all JavaScript based projects! 