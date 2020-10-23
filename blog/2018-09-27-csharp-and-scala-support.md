---
slug: csharp-and-scala-support
title: Introducing Stryker.NET and Stryker4s
author: Nico Jansen
author_title: Stryker Team
author_url: https://github.com/nicojs
author_image_url: https://avatars3.githubusercontent.com/u/1828233?s=400&u=fec18ad3776aaafec54c49bbd7173a841ae7ea59&v=4
tags: [stryker4s, stryker.net]
---

We're excited to announce that we're doubling the number of supported languages for Stryker. We already had support for JavaScript and Typescript, and now both C# and Scala are supported as preview versions. Try them out and let us know what you think. 

<!--truncate-->

## New platforms

As you might know, both C# and Scala run on entirely different platforms compared to Stryker (which runs on NodeJS). This is the main reason we decided to implement them as
separate frameworks. [Stryker.NET](/stryker-net) is written in C# and runs as a .NET Core application, while [Stryker4s](/stryker4s) is written in Scala and runs on the JVM (Java Virtual Machine).
As of now, a version of Stryker.NET can be found on nuget.org, the package manager for the .NET platform. In due time, Stryker4s can be found on Maven Central.

Stryker.NET is the result of the internship of [Richard](https://github.com/richardwerkman).  
Stryker4s is the result of the internship of [Hugo](https://github.com/hugo-vrijswijk).

Thanks to them both for their hard work and continued support.

## Getting started

As you might have noticed, we've redesigned [our website](/). It is focussed to help you get started on the platform of choice. 

* [Get started with Stryker.NET](/stryker-net/quickstart) (preview)
* [Get started with Stryker4s](/stryker4s/quickstart) (preview)
* [Get started with Stryker](/stryker/quickstart) (for JavaScript / TypeScript)

## One design mentality

Although all 3 versions of Stryker are implemented on different platforms, the design goals are the same. It should be _easy to use_ and
_fast to run_. Without compromises. 

For Stryker JavaScript we're mutating _source code_ (as explained in our 
[road to Stryker 1.0](/blog/2017-07-14/road-to-stryker-1-0) blog post), instead of transpiled/minified JavaScript code. 
The main advantage is that it makes sure we only mutate _your actual code_, instead of 3rd party library or minified code.

We wanted to offer the same quality to the .NET and Scala counterparts, but they have one additional problem: compiling code takes a long time.
It would dramatically reduce the performance of the frameworks. This is why we chose to implement a new mutation testing technique we call _Mutation Switching_.
With this technique, we compile only once. This results in a drastic performance gain, without compromising the quality of the mutations. 
It really deserves it's own blog post, so more on that later.

## Collaboration

Though the 3 frameworks have their own code base, there are actually a lot of points on which we're planning to collaborate.

* **One vocabulary**\
  Terms like _mutant_, _survived_ and _mutator_ will mean the same across platforms. We will even share the names
  for the mutators, see [the supported mutators in our handbook](https://github.com/stryker-mutator/stryker-handbook/blob/master/mutator-types.md#supported-mutators)
  for a comprehensive list of supported mutators.
* **One website**\
  We'll keep things together with [one website](/). This will help visibility for all platforms and keep things simple for our users.
* **One html reporter**\
  We're redesigning our html report as [HTML 5 web components](https://www.webcomponents.org/). It really is it's own thing and might even be used for other mutation testing frameworks out there.
  Interested to help? Please let us know! [Github repository here](https://github.com/stryker-mutator/mutation-testing-elements).
* **One dashboard**\
  We're planning on supporting our [mutation testing dashboard](https://dashboard.stryker-mutator.io) for all 3 implementations.

## What about good old Stryker?

You might wonder what this all means for Stryker (for JavaScript and friends). Well, not much. The core developers are still here, focussed as ever. 
We're still focused on getting the 1.0 release out there for you.
We had to invest some time in the overhead of setting this all up, but it will result in better and more complete frameworks in the end.