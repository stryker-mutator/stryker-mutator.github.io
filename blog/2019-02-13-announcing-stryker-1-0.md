---
slug: announcing-stryker-1-0
title: Announcing Stryker 1.0
author: Nico Jansen
author_title: Stryker Team
author_url: https://github.com/nicojs
author_image_url: https://avatars3.githubusercontent.com/u/1828233?s=400&u=fec18ad3776aaafec54c49bbd7173a841ae7ea59&v=4
tags: [stryker]
---

Stryker 1.0 is here! This is an important milestone for mutation testing in JavaScript and TypeScript.

<!--truncate-->

If you’re unfamiliar with Stryker and mutation testing, now is the perfect time to try it out! 
We've updated [our quickstart](/stryker/quickstart), so go ahead and start using Stryker today.
Stryker can help you to improve your test quality by inserting bugs in your code and validating
that your tests can find them. The output is a comprehensive report telling you exactly what your unit tests missed.

## What's new

Here you find a list of all the new features in Stryker 1.0 (alphabetical order):

![](/images/blogs/tumble-weed.jpg)
_Nothing to see here_

That's right! We chose to not introduce new features. Instead, we've _removed all deprecated functionality_.
Also, we've renamed all packages to be part of the @stryker-mutator [organization on NPM](https://docs.npmjs.com/orgs/).

## Migrating from Stryker 0.x

Please use this migration guide to update your older Stryker version. If you're feeling adventurous 🤠🐊, you can skip to step 3.

1. **Make sure you're on the latest version of 0.x**

    Please make sure you're on the latest 0.x version first. Here is a list of all the latest versions:

    - `grunt-stryker@0.13.17`
    - `stryker-api@0.24.1`
    - `stryker-babel-transpiler@0.10.1`
    - `stryker-html-reporter@0.18.1`
    - `stryker-jasmine-runner@0.4.1`
    - `stryker-jasmine@0.12.1`
    - `stryker-javascript-mutator@0.14.1`
    - `stryker-jest-runner@1.4.1`
    - `stryker-karma-runner@0.24.1`
    - `stryker-mocha-framework@0.15.1`
    - `stryker-mocha-runner@0.17.1`
    - `@stryker-mutator/test-helpers@0.1.1`
    - `stryker-typescript@0.18.1`
    - `stryker-vue-mutator@0.4.1`
    - `stryker-wct-runner@0.3.1`
    - `stryker-webpack-transpiler@0.9.1`
    - `stryker@0.35.1`

    First update them in your package.json file, next use `npm install` (or `yarn install`) to install the versions.

2. **Fix all deprecation warnings**

    If you're on the latest 0.x release, run `npx stryker run` and fix any deprecation warnings that are logged. 
    If Stryker runs without deprecation warnings, you're ready to upgrade

3. **Update your global stryker-cli**

    If you've installed the `stryker-cli`, please update that one as well: `npm i -g stryker-cli`

4. **Upgrade your dependencies**

    Update your package.json file. 

    * `stryker` ➡ `@stryker-mutator/core`
    * `stryker-api` ➡ _none, this can be removed_
    * `stryker-babel-transpiler` ➡ `@stryker-mutator/babel-transpiler`
    * `grunt-stryker` ➡ `@stryker-mutator/grunt-stryker`
    * `stryker-html-reporter` ➡ `@stryker-mutator/html-reporter`
    * `stryker-jasmine` ➡ `@stryker-mutator/jasmine-framework`
    * `stryker-jasmine-runner` ➡ `@stryker-mutator/jasmine-runner`
    * `stryker-javascript-mutator` ➡ `@stryker-mutator/javascript-mutator`
    * `stryker-jest-runner` ➡ `@stryker-mutator/jest-runner`
    * `stryker-karma-runner` ➡ `@stryker-mutator/karma-runner`
    * `stryker-mocha-framework` ➡ `@stryker-mutator/mocha-framework`
    * `stryker-mocha-runner` ➡ `@stryker-mutator/mocha-runner`
    * `stryker-mutator-specification` ➡ `@stryker-mutator/mutator-specification`
    * `stryker-test-helpers` ➡ `@stryker-mutator/test-helpers`
    * `stryker-typescript` ➡ `@stryker-mutator/typescript`
    * `stryker-util` ➡ `@stryker-mutator/util`
    * `stryker-vue-mutator` ➡ `@stryker-mutator/vue-mutator`
    * `stryker-wct-runner` ➡ `@stryker-mutator/wct-runner`
    * `stryker-webpack-transpiler` ➡ `@stryker-mutator/webpack-transpiler`

    The versioning of these dependencies start at 1.0.0, so feel free to use `^1.0.0` to specify the version.

    After updating your package.json, you'll need to run `npm install` (or `yarn install`) once more. 

5. **Take it for a spin**
    
    Stryker should now work as expected. Try it out with: `npx stryker run`.

## Release cycle 

From now on we'll adhere to strict [semantic versioning](https://semver.org/spec/v2.0.0.html), or semver for short.
This means that it's easy to distinguish between bug fixes, new features or breaking changes just 
by looking at the version number. 

Futhermore, we've decided to use _fixed versioning_ for our packages, meaning that all `@stryker-mutator/*` packages
will _have the same version number_. For example, if your local `@stryker-mutator/core` version is `1.0.0`, your
`@stryker-mutator/html-reporter` should also be at that exact version. This makes maintaining your Stryker dependencies a breeze. 

This is comparable to how Angular or React do their versioning.

## Release schedule

We'll be releasing about as often as we were doing. The key difference is that we'll be extra focused on 
semver. Since we will be dropping support for old NodeJS versions as soon as 
[it reaches end-of-life](https://github.com/nodejs/Release#release-schedule), 
expect _at least_ one major release a year, (however, we might do more major releases). 
So you can expect a v2 release around April 30th, since we'll be dropping Node.JS 6 support at that time
(the best birthday gift for me each year 🎁)

We'll also keep a healthy deprecation policy, making sure that deprecated features remain in tact for at least one major release.