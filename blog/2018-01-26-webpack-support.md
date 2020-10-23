---
slug: webpack-support
title: Webpack support is here
author: Nico Jansen
author_title: Stryker Team
author_url: https://github.com/nicojs
author_image_url: https://avatars3.githubusercontent.com/u/1828233?s=400&u=fec18ad3776aaafec54c49bbd7173a841ae7ea59&v=4
tags: [stryker]
---

Stryker now supports bundling your code using webpack before running your tests. 
The installation/upgrade scenario's in this blog post can be circumvented by using the [Quickstart](https://stryker-mutator.github.io/quickstart.html) if you don't already use Stryker in your project.

![](/images/blogs/love-webpack.png)

<!--truncate-->

## A bundle for each mutant?

Ok. Stryker can mutate your code. We support both JavaScript and TypeScript. 
However, the tests of many web projects first need to be bundled before they can be loaded in the browser for testing.
Stryker [mutates your source files](./2017-07-14-road-to-stryker-1-0.md#open-heart-surgery), 
rather than the resulting JS bundle. This means that you still need to tell Stryker how your bundle is created.

## Webpack transpiler

Let's say we're using [Webpack](https://webpack.js.org) to create that bundle. Well sir, let me bring you up-to-speed. We have just 
[released the stryker-webpack-transpiler](https://www.npmjs.com/package/stryker-webpack-transpiler) and with it, Stryker uses *your webpack configuration*
to create the testing bundle.

To use the new Webpack transpiler, start by installing the package:

```
npm install --save-dev stryker-webpack-transpiler
```

And configure it in your stryker.conf.js:

```js
transpilers: ['webpack'],
webpack: {
    configFile: 'webpack.config.js', // Is your webpack config file somewhere else? Please specify it here.
    silent: true // This removes the "ProgressPlugin" from your config before feeding it through Stryker
},
```

For more info, please see the [stryker-webpack-transpiler changelog](https://github.com/stryker-mutator/stryker/blob/master/packages/stryker-webpack-transpiler/CHANGELOG.md)
or take a look at the [readme](https://github.com/stryker-mutator/stryker/tree/master/packages/stryker-webpack-transpiler#readme)

Enjoy!

## Can I use... 

### Angular?

With this new support for webpack, we now start to support [Angular](https://angular.io) projects! 
However, you still need to provide a webpack configuration to Stryker. If you're using the [angular cli](https://npmjs.com/package/@angular/cli)
you probably don't have a `webpack.config.js` file lying around. In that case, head on over to [nicojs/angular-stryker-example](https://github.com/nicojs/angular-stryker-example)
and take a look. We have tested it on small sized projects (< 100 tests). We would love your feedback if you're using it on larger projects.

### React?

Unfortunately, this release does not mean that we now support mutation testing on react projects, as they don't use webpack 
for testing. Instead, you're probably using [Jest](https://facebook.github.io/jest) which is responsible for loading your tests 
in a nodejs environment (using [JSDom](https://github.com/tmpvar/jsdom)).

However, we are working on first class support for any project using Jest, so you won't have to wait long.

## What's next?

Webpack support is awesome, but performance does take a big hit if we need to bundle each mutant. 
Having the coverage analysis can help a lot with that. As of yet, we don't support coverage analysis
when using a transpiler. However, [PR 559](https://github.com/stryker-mutator/stryker/pull/559) looks promising
and we'll be merging that into master in about a week or so.

We will also be working on React support with support for the Jest test runner. You can expect that in the next
couple of weeks as well.

## Special thanks

Special thanks go out to [@Archcry](https://github.com/Archcry). He created the webpack plugin during his internship. 
Give him some love!