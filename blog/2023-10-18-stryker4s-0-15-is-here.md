---
slug: stryker4s-0-15-is-here
title: 'Stryker4s 0.15 is Here with Exciting New Features!'
authors: hugo-vrijswijk
tags: [stryker4s]
---

We're excited to announce the arrival of **Stryker4s 0.15**. This latest release is filled with exciting new features. It's been a while since our last update, but we think you'll find this one worth the wait.

In this article, we'll guide you through the highlights of this release, including **colorized console output**, a **revamped instrumenting algorithm**, and various **new configuration options**.

<!-- truncate -->

**New to mutation testing?** It's a unique way to assess the quality of your tests. Check out our [RoboBar 🤖🍷 example](https://stryker-mutator.io/docs/General/example/) to understand why 100% code coverage doesn't tell the whole story. You can also explore our [new playground to experience mutation testing in action (C#)](https://stryker-mutator.io/stryker-playground). Mutation testing is the key to gauging the effectiveness of your tests.

To update or install Stryker4s, adjust your `plugins.sbt` file:

```scala
addSbtPlugin("io.stryker-mutator" % "sbt-stryker4s" % "0.15.0")
```

For Maven users:

```xml
<plugin>
  <groupId>io.stryker-mutator</groupId>
  <artifactId>stryker4s-maven-plugin</artifactId>
  <version>0.15.0</version>
</plugin>
```

## 🌈 Colorized Console Output

We've added color to your console output, making it easier to identify essential details. This feature is enabled by default, but you can disable it by setting the `NO_COLOR` environment variable to `true`. Stryker4s also strives to automatically adapt to your terminal's capabilities for colorized output. Here's a glimpse of the new output:

![Colorized console output of Stryker4s](/images/blogs/stryker4s-colors-start.webp)

![Colorized Stryker4s report](/images/blogs/stryker4s-colors-report.webp)

We're eager to hear your thoughts on these new colors. If you have suggestions or prefer different adjustments, feel free to [create a new issue](https://github.com/stryker-mutator/stryker4s/issues/new) or leave a comment below 👇.

## 🧬 Revamped Instrumenting Algorithm

Before Stryker4s begins running your tests, it needs to parse and instrument your source code with mutants. We've completely overhauled this process, making it more robust and efficient. The new instrumenter streamlines the process, inspired by Stryker-js. It also takes advantage of [fs2](https://fs2.io/) for parallel streaming, significantly boosting performance. This means Stryker4s can start running your tests faster!

## 💬 New Dialects

Scala is a fast-evolving language, and to ensure compatibility, we already had the [`scala-dialect`](https://stryker-mutator.io/docs/stryker4s/configuration/#scala-dialect-string) config option. In Stryker4s 0.15, we've introduced the `source3` option for Scala 2 codebases using the `-Xsource3` flag and the `scala3future` option for Scala 3 codebases with the `-source:future` flag 📡.

[@fabianhjr](https://github.com/fabianhjr) has also resolved an issue where mutated code wasn't correctly written back to disk using the correct dialect. This mainly affected Scala 3 codebases. Thanks for the fix!

## 📝 New Configuration Options

We've added several configuration options to offer more flexibility. The first is the [`clean-tmp-dir`](https://stryker-mutator.io/docs/stryker4s/configuration/#clean-tmp-dir-boolean) option, which defaults to `true`. When disabled, Stryker4s won't clean the temporary directory used for instrumented code, which can be handy for debugging. Combine this with [`static-tmp-dir`](https://stryker-mutator.io/docs/stryker4s/configuration/#static-tmp-dir-boolean), and Stryker4s will use the same temporary directory for each run. Both of these options were contributed by [@gergelytraveltime](https://github.com/gergelytraveltime).

## 📦 Maven Plugin Update

Our Maven plugin now builds on Scala 2.13. You can still run Stryker4s with your preferred Scala version, but the plugin itself is now built on 2.13. If you encounter any issues, please don't hesitate to reach out.

## 🔮 What's Next?

What's on the horizon? Look forward to the upcoming [real-time HTML report](/blog/announcing-realtime-reporting-for-stryker) for Stryker4s, along with test information integrated into the HTML report. This will help you determine which tests successfully battled the mutants and which didn't.

In the long term, we're exploring the possibility of expanding Stryker4s to other JVM languages, starting with Kotlin. It's a significant undertaking, but stay tuned for updates!

In the meantime, we'd love to hear your thoughts. Share your feedback in the comments below 👇, on [our Slack channel](https://join.slack.com/t/stryker-mutator/shared_invite/enQtOTUyMTYyNTg1NDQ0LTU4ODNmZDlmN2I3MmEyMTVhYjZlYmJkOThlNTY3NTM1M2QxYmM5YTM3ODQxYmJjY2YyYzllM2RkMmM1NjNjZjM), or send us a [tweet](https://twitter.com/stryker_mutator/).
