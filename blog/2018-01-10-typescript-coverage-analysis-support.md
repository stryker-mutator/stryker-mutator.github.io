---
slug: typescript-coverage-analysis-support
title: TypeScript coverage analysis support
authors: nicojs
tags: [stryker-js]
---

Let's start this new year strong. Stryker 0.18 adds coverage analysis support for transpilers, starting with the TypeScript transpiler.

<!--truncate-->

This article first explains the basics of [(code) coverage](https://en.wikipedia.org/wiki/Code_coverage) analysis for mutation testing in general, before focussing on the new feature.

See the original PR for even more details:

- [feat(coverage analysis): Support transpiled code #559](https://github.com/stryker-mutator/stryker-js/pull/559)

## Coverage analysis

It might not sound particularly sexy, but (code) coverage analysis is an important feature of any mutation testing framework.
Mutation testing takes a long time. The most effective way to save time, is to do less work.

Take this small piece of JavaScript code:

```javascript
// Source code:
function sum(a, b) {
  return a + b;
}

function product(a, b) {
  return a * b;
}

function difference(a, b) {
  return a - b;
}
```

```javascript
// The tests:
describe('Math', () => {
  it('should give 3 for sum(1, 2)', () => {
    expect(sum(1, 2)).to.eq(3);
  });

  it('should give 12 for product(3, 4)', () => {
    expect(product(3, 4)).to.eq(12);
  });
});
```

### Coverage analysis: 'all'

As you can see the `sum` and `product` functions are reasonably well tested, but the the `difference` function isn't tested at all.

For example: what would the result be for the mutant that changes `a - b` to `a + b`? It doesn't even make sense to test it,
anyone can see it will survive anyway.

If you set coverage analysis to `'all'` inside your stryker.conf.js file, this is exactly what happens. Stryker will automatically
collect code coverage results during the initial test run phase\*. If a mutant mutates code that is not tested,
it will be marked as _'no coverage'_ (which translates to _survived_ during the score calculation) without ever testing it.
This can safe minutes on larger code bases.

- Coverage analysis is not supported for Jest yet.

### Coverage analysis: 'perTest'

Nice! We're already saving time by analyzing a simple code coverage result. But if we take a closer look, we see that we can save even more time.

Take the `product` function for example: we want to test the mutant that changes `a * b` to `a / b`. We see that it is covered by a test, so
we cannot skip the actual testing of this mutant. However, we can save time by only running the one test that covers this mutant.

If you set coverage analysis to `'perTest'` inside your stryker.conf.js file, this is exactly what happens. Stryker will automatically
collect code coverage results _per test_ during the initial test run phase. Next, it will select only those tests that actually cover
a mutant to run for that mutant (again, not supported for Jest yet). This might seem like a small improvements,
but in big projects with 100s of tests, it quickly adds up to minutes.

It is important to realize that this does not influence the quality of the resulting report at all. It simply less work to reach the same conclusion.

## The challenge with transpiled code

Now that we have a firm understanding of coverage analysis and why it is important, lets dive into the new stuff.
After all, coverage analysis is nothing new for Stryker, it has been there for a long time.
However, it gets more complicated when you add a transpiler to the (delicious) mutation testing mix.

Please read [our blog article on transpiling code](./2017-10-06-typescript-support.md) if your interested in the details on how transpilers are implemented in Stryker.
For now it is is enough that you understand that Stryker mutates your _source_ code, while running the _transpiled_ code in the test runner.
Any coverage analysis we collect will only tell us about the _transpiled_ covered code, while the mutants only work on your _source_ code.

Take this small piece of TypeScript code:

```typescript
// TypeScript: before transpiling
class Math {
  static sum(a: number, b: number) {
    return a + b;
  }
}
```

```javascript
// JavaScript: after transpiling (target: es5)
var Math = /** @class */ (function () {
  function Math() {}
  Math.sum = function (a, b) {
    return a + b;
  };
  return Math;
})();
```

Even with this small example, you can already see that the location of `a + b` in source code vs transpiled code is totally different.
We need to translate the location of a mutant to the actual transpiled location somehow.

## Bridging the gap

Luckily, any respectable transpiler can produce [source maps](https://www.thecssninja.com/javascript/source-mapping).
They are used by code editors and browsers to debug source code while executing transpiled/minified/bundled code.
And, as of now, this is what is used by Stryker to calculate the transpiled location.

So if you select coverage analysis 'all' or 'perTest' while transpiling using typescript, the stryker-typescript transpiler
plugin will produce source maps during the initial test run. Stryker will use those source maps to translate the transpiled location
of all mutants.

## Show me the numbers

Unfortunately, we do not have a good performance testing mechanism for Stryker yet (PRs and ideas are welcome!),
but the results for mutation testing on Stryker itself are very promising, shaving off about 6 minutes for single run,
about a 50% performance increase.

## What's next?

Next up we'll work on getting this performance increase to all supported transpilers.
We're also working behind the scenes on a transpiler plugin for webpack. Which you can also expect
within the next couple of weeks.

In the meantime: have fun with this feature. Are you using it? Please let is know what you think! We're always
interested to know what we can improve further.

Have fun.
