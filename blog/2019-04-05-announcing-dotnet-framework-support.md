---
slug: announcing-dotnet-framework-support
title: Announcing Stryker.NET 0.10 with .NET Framework support
authors: richardwerkman
tags: [stryker.net]
---

Stryker.NET 0.10 is here! This brings new features to mutation testing for .NET. Read all about these features in this blog.

<!--truncate-->

Stryker.NET has been under very active development. Up to now, we focussed on performance and .NET core.
That all changes with v0.10, as we now also support **.NET Framework**. Both frameworks are supported now,
with 100% feature parity. We also introduce some cool new features.

In this article we want to briefly recap what mutation testing is.
After that we'll explain how you install and use Stryker.NET.
We also want to highlight some cool new features, before we end with a quick look at what's next.
Jump right into it:

## 👾 Mutation testing

For those of you who might not be familiar with Stryker.NET and Mutation Testing, here is a brief reminder.
Please see [our RoboBar example](/example) for the full introduction.

Stryker.NET places _mutants_ (bugs) inside your source code. After that, it runs your tests for each mutant.
If at least one tests fails, that's great! Your tests just killed that mutant. If not, too bad, the mutant survived.
Apparently, you're missing a test.

Calculating the percentage of mutants that were killed results in the mutation score. The higher the number, the better.
It is the only way to measure _your tests effectiveness_. It's really as simple as that.

To cover as much logic as possible Stryker.NET provides a wide range of mutations.
An overview of these mutations can be found [here](/docs/stryker-net/mutations).
You can run Stryker.NET with .NET Core on Windows, Mac and Linux as well as .NET Framework on Windows.

## 💪 Start using Stryker.NET

Stryker.NET is now installed as a (global) [dotnet tool](https://docs.microsoft.com/en-us/dotnet/core/tools/global-tools)
instead of a [Per-project tool](https://docs.microsoft.com/en-us/dotnet/core/tools/extensibility).
This has the advantage of not competing with your local project dependencies, but this also means that
Stryker.NET has to be installed globally on your system. From .NET core 3.0, you will be able to install dotnet tools locally inside your project.

1. Installation

   Install **globally** (.NET Core runtime 2.2+):

   ```
   dotnet tool install -g dotnet-stryker
   ```

   Or install **locally** (.NET Core runtime 3.0+):

   ```shell
   cd my-test-project
   dotnet new tool-manifest
   dotnet tool install dotnet-stryker
   ```

   This will create a file called dotnet-tools.json in your project folder. You should check this file into source control to make sure all team members have access to Stryker and other tools specified here.

   ```
   dotnet tool install dotnet-stryker
   ```

2. Install NuGet

   For .NET Core projects this step can be skipped.  
   For .NET Framework projects, make sure `nuget.exe` is installed on your system.
   Please follow their [installation instructions](https://docs.microsoft.com/en-us/nuget/install-nuget-client-tools#windows).

3. Remove old references

   Remove the old `DotNetCliToolReference` from your test project since they won't be updated anymore.

4. Have fun using stryker!

   You can now kick off stryker using

   ```
   dotnet stryker --solution-path "../MySolution.sln"
   ```

   If stryker is installed as a dotnet core 3.0 local tool, use the following instead:

   ```
   dotnet tool run dotnet-stryker --solution-path "../MySolution.sln"
   ```

## ⏩ VSTest integration

Stryker.NET now hooks right into VSTest to execute your unit tests instead of running your tests from the command line.
This means a big performance boost, because it keeps the VSTest connection alive between test runs.
Because Stryker.NET supports VSTest, this performance boost wil work for most test frameworks, including [XUnit](https://xunit.github.io/),
[NUnit](https://nunit.org/) and [MSTest](https://docs.microsoft.com/en-us/dotnet/core/testing/unit-testing-with-mstest).

## 📊 New HTML report

This might catch your eye. As of v0.10, Stryker.NET comes with an HTML reporter.
It shows a report in your browser with insights in your test quality, directly after your run Stryker.  
It even goes into detail and shows you exactly what mutants were made and if your tests killed them!

![](/images/stryker-net/html-report-net.png)

It uses the generic [mutation-testing-elements](https://github.com/stryker-mutator/mutation-testing-elements),
which is an open standard for reporting mutation test results. See our [previous blog](./2019-04-03-one-mutation-testing-html-report.md) for more information about the mutation-testing-elements

## 🏃‍ Progress bar

You can now track the progress of the mutation testing process, as well as preview the mutant stats.
It also includes an indication of the remaining time to finish.
![](/images/stryker-net/progress-bar-net.png)

## 🔮 What's next?

The following months we will be focusing on performance and stability.
The main next feature will be coverage analysis. How does that work?

Stryker.NET will use code coverage analysis to find mutants that are not covered by your tests.
If it's not covered, it cannot be killed by any test, right? The mutant will be marked as `no coverage`,
meaning the mutant survived while we saved valuable time.

## Contribute

Want to help make Stryker.NET even better?
Check out our [contribution guide](https://github.com/stryker-mutator/stryker-net/blob/master/CONTRIBUTING.md)
and [backlog](https://waffle.io/stryker-mutator/stryker-net) to see what help we need.

Special thanks to [@dubdop](https://github.com/stryker-mutator/stryker-net/commits?author=dupdob) for all his contributions. Keep up the good work! 💪
