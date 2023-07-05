---
slug: announcing-stryker-playground
title: 'Announcing the Stryker Playground'
authors: rachid-boukaiba
tags: [stryker-net]
---

Explaining the intricacies of mutation testing to a co-worker or friend can be challenging.
We believe the best way to grasp a new concept is through hands-on practice.
While we already offer a [quickstart guide](/docs/General/example/), installing all the prerequisites can be quite cumbersome.

That is why we are happy to announce the [Stryker Playground](https://stryker-mutator.io/stryker-playground/), bringing the Stryker.NET experience to the web!

<!-- truncate -->

![Pending mutants](/images/blogs/playground.png)

## 🤔 How does this work?

You may have noticed the playground takes a while to load initially.
That is because it's entirely client-side, powered by Blazor WebAssembly.
Compiling the submitted code into an in-memory assembly is made possible by Roslyn, the .NET Compiler Platform.
And, of course, the playground also depends on Stryker.NET for the instrumentation.

Thanks to the [NUnit Lite Runner](https://docs.nunit.org/articles/nunit/running-tests/NUnitLite-Runner.html) we're able to discover and execute tests contained inside in-memory assemblies.

## 🔮 What's on the horizon?

We're looking for ways to improve intellisense, which should make it easier to freely write code and discover available methods and variables.
We would also like to introduce a diverse collection of templates, offering users challenges of varying difficulties.

And last but not least, supporting StrykerJs & Stryker4s is also on the roadmap!

## 📣 Share your feedback

We value your input! Try out [the playground](https://stryker-mutator.io/stryker-playground/) and let us know what you think.

If you happen to have any issues or have suggestions for improvement, please feel free to [open an issue on Github](https://github.com/stryker-mutator/stryker-playground/issues).
