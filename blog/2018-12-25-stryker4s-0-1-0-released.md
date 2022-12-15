---
slug: stryker4s-0-1-0-released
title: Stryker4s 0.1.0 released
authors: hugo-vrijswijk
tags: [stryker4s]
---

This is the first official release of Stryker4s! Bringing easy mutation testing to Scala sbt projects. And it comes with some great features.

It's taken a little longer than we maybe would've liked, but we are very proud of this first release. In this blog post we'll tell you about why running with the sbt plugin is a big improvement, and some of the features you can use today for Stryker4s. Although it's still possible to use the command-runner for non-sbt projects, we decided a sbt plugin was an important for the first release.

<!--truncate-->

## Sbt plugin

The biggest thing in our first release is the addition of a plugin for sbt. With this plugin, adding Stryker4s is as easy as adding the following line to your `plugins.sbt` file:

```scala
addSbtPlugin("io.stryker-mutator" % "sbt-stryker4s" % "0.1.0")
```

Then just run `sbt stryker` and you are good to go!

Not only does this plugin make it a lot easier to add Stryker4s to your project, it also dramatically improves the speed compared to the old command-runner. The reason for this is that the command-runner would simply run the command `sbt test` for each mutant. This meant that sbt would have to start a new process every single time. If you have ever used sbt before, you probably know this can take a while.

With the new plugin we can hook into the sbt process and keep it alive. This means sbt only has to start once, and all we have to do is tell sbt to run tests for all the mutants we found. If you've used Stryker for JavaScript before, this may sound familiar. Adding to it, we don't even have to compile between mutant runs, which also gives a speed boost. You can read more about that in our [last blog post about mutation switching](/blog/2018-10-6/mutation-switching).

Big thanks to [Scelestino](https://github.com/scelestino) and [Wmaarts](https://github.com/Wmaarts) for the help on the plugin.

## Other features

Here are some other things we recently did to improve your mutation testing experience:

- We already support the new categories of mutators that are now [standardized across Stryker versions](https://github.com/stryker-mutator/stryker4s/pull/115).
- [Scala-specific function mutators](https://github.com/stryker-mutator/stryker-handbook/blob/master/mutator-types.md#stryker4s)
- [Excluding mutations](https://github.com/stryker-mutator/stryker4s/blob/master/docs/CONFIGURATION.md#excluded-mutations) you might not want to test
- [Setting a minimum mutation score](https://github.com/stryker-mutator/stryker4s/blob/master/docs/CONFIGURATION.md#excluded-mutations) threshold for your build.

## What's next

We have a lot planned for the future of Stryker4s. We'll keep looking at ways to optimize the performance, and add new features. As well as sorting out some smaller bugs with the current plugin, such as providing proper support for multi-module projects ([although we have a workaround](https://github.com/stryker-mutator/stryker4s#multi-module-projects)). We also want to provide a Maven plugin to give Maven users the same benefits and ease of use. Some other things on the roadmap are the new cross-Stryker HTML dashboard, new mutators and focusing on providing a stable working plugin for many different types of projects.

So, whether you might have a quiet week at work, or want to get away from the family during Christmas dinner, why not try adding mutation testing to your Scala projects? Let us know how it goes 🎄!
