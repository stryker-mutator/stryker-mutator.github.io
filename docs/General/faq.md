---
sidebar_label: FAQ
title: Frequently Asked Questions
---

Here you will find the answer to the most common issues first-time users of Stryker encounter.  
If this page doesn't answer your question, please feel free to [![Gitter](https://badges.gitter.im/stryker-mutator/stryker.svg)](https://gitter.im/stryker-mutator/stryker?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge).
If you think you've encountered a bug, please also contact us on Gitter first, before submitting a bug report.

## Q: Stryker is slow! How do I speed it up?

**A: Improve your tests' performance**  
As we're running _your_ tests, the first thing you should do, is to improve the performance of your unit tests.
For example: when running tests in a browser, try to reduce the number of files loaded in the browser.

**A: Only mutate what's needed**  
Make sure you're not mutating unnecessary files (e.g. test files, third party code, etc.).
Double-check your `files` and `mutate` settings.

**A: Create a RAM disk/drive**  
Take a look at your disk I/O. Is it peaking when running Stryker? Consider creating a RAM disk!  
This will speed up writing and/or reading intermediate files (such as temporary HTML files) by doing everything in your secondary storage.  
_Note_: We didn't test this ourselves yet. So take it with a grain of salt. ;-)

## Q: So, what is this "mutation score"?

**A: It's the percentage of mutants that have been killed.**  
We suppose that mutants to the original source code will be `killed` by a unit test.
If that is not the case, the mutant will `survive`.
That's not good - so the higher the mutation score, the better is the quality of your tests!

To determine the mutation score, Stryker calculates the following numbers:

    # Total detected = # timedOut + # killed
    # Total undetected = # survived + # no coverage
    # Total mutants = # Total detected + # Total undetected
    % Mutation score = # Total detected / # Total mutants * 100

Please note that mutants that resulted in an `error` are not used in the calculation.

## Q: What do all these metrics mean?

**A: After running, Stryker gives each mutant a status:**

- `Killed` means that a mutant in the original code caused a test to fail. The mutant is dead!
- `Survived` means that a mutant in the original code did not cause a test to fail.
- `TimedOut` means that, due to a mutant in the original code, the test takes too long to run. This is often an indication that the mutant created an infinite loop. Such cases are killed by Stryker.
  An example of a `TimedOut` due to a mutant would be a snippet of code like this:

      while (moreDataAvailable) {
          // perform some logic
      }

  Stryker could decide to mutate the `moreDataAvailable` into the constant `true` (Stryker would not do this, but let's say that he does.), thus creating an infinite loop.

- `No coverage` means that the original, unmodified code did not have test coverage, As such, every mutant would survive and is as such considered 'survived'.
- An `Error` is used to indicate that an `Error` was thrown while running a test. This could be due to a mutant, but that is not always the case. Due to that, in this situation, the mutant is _not_ considered being killed.

  An example of an `Error` due to a mutant would be a line of code like this:

      const fs = require('f' + 's');

  Stryker could decide to mutate the `+` into a `-`, which would result in `AssertionError: missing path at Module.require (module.js:496:3)`. In such cases, Stryker will report:

  > 1 mutant(s) caused an error and were therefore not accounted for in the mutation score

## Q: I found a bug! What do I do now?

**A: First [take a look at the known issues](https://github.com/stryker-mutator/stryker-js/issues) before filing an issue yourself**  
You can also [contact us on Gitter](https://gitter.im/stryker-mutator/stryker-js) and ask if the (mis)behavior you've encountered is known.  
When reporting an issue, please read [our documentation on how to report bugs](https://github.com/stryker-mutator/stryker-js/blob/master/CONTRIBUTING.md#bug-triage).
