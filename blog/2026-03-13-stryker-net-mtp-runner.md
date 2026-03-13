---
slug: stryker-net-mtp-runner
title: 'Introducing the Microsoft Testing Platform runner for Stryker.NET'
authors: richardwerkman
tags: [stryker-net]
---

It has been a while since our last Stryker.NET blog post. The team has been quietly shipping a lot of improvements, and today we want to highlight the biggest one: **Microsoft Testing Platform (MTP) support**, now available in preview starting from Stryker.NET 4.13.

We also have a roundup of other noteworthy features that have landed since our last update.

<!-- truncate -->

Are you already using Stryker.NET? Update to the latest version:

Global install:

```shell
dotnet tool update dotnet-stryker --global
```

Local install:

```shell
dotnet tool update dotnet-stryker --local
```

## 🚀 Microsoft Testing Platform runner (preview)

Stryker.NET has long relied on **VSTest** as its test runner. VSTest works well, but it has a fundamental limitation: Stryker has to spin up a brand new VSTest process for every mutation test run. On large test suites, that startup overhead adds up quickly.

Microsoft has been building a modern alternative called the [Microsoft Testing Platform (MTP)](https://learn.microsoft.com/en-us/dotnet/core/testing/unit-testing-platform-intro). MTP is already being adopted by all the major testing frameworks (MSTest, NUnit, and xUnit v3) and it is the _only_ supported runner for newer frameworks such as [TUnit](https://github.com/thomhurst/TUnit). Until now, projects using these frameworks could not use Stryker.NET at all.

We're excited to announce that **MTP support is now available in preview** in Stryker.NET 4.13.

### How to enable it

Enable the MTP runner by passing `--test-runner mtp` on the command line:

```shell
dotnet stryker --test-runner mtp
```

Or add it to your `stryker-config.json`:

```json
{
  "stryker-config": {
    "test-runner": "mtp"
  }
}
```

Or in `stryker-config.yaml`:

```yaml
stryker-config:
  test-runner: mtp
```

### Performance benefits

Because MTP is designed to be embedded and extended rather than being a self-contained external process, Stryker can keep the test runner alive across multiple mutation test runs. This eliminates the per-run startup cost that made VSTest slow on larger projects, and is expected to provide a significant performance improvement.

### Preview status — what still needs work

The MTP runner is **still in preview**. Coverage analysis is partially implemented: Stryker can already filter out mutants that are not covered by any test, but it cannot yet filter individual test cases per mutant. Full per-test coverage analysis is still being worked on.

Additionally, the MTP runner does not yet support **.NET Framework** test projects (see [#3421](https://github.com/stryker-mutator/stryker-net/issues/3421)).

### We need your feedback!

Because this is a preview feature, your feedback is essential. If you encounter any issues or unexpected results when using the MTP runner, please [open an issue on GitHub](https://github.com/stryker-mutator/stryker-net/issues) or reach out on our [Slack channel](https://join.slack.com/t/stryker-mutator/shared_invite/enQtOTUyMTYyNTg1NDQ0LTU4ODNmZDlmN2I3MmEyMTVhYjZlYmJkOThlNTY3NTM1M2QxYmM5YTM3ODQxYmJjY2YyYzllM2RkMmM1NjNjZjM). We want to make this stable as soon as possible, and every bug report helps!

---

## 📰 Other noteworthy updates

A lot has changed since our February 2024 blog post. Here are the highlights.

### New mutators

Two new mutation categories have been added to Stryker.NET's arsenal.

**String method mutations** (`stringmethod`): Stryker now mutates common string manipulation methods. For example:

| Original       | Mutated         |
| -------------- | --------------- |
| `ToUpper()`    | `ToLower()`     |
| `ToLower()`    | `ToUpper()`     |
| `Trim()`       | `""`            |
| `TrimStart()`  | `TrimEnd()`     |
| `TrimEnd()`    | `TrimStart()`   |
| `StartsWith()` | `EndsWith()`    |
| `EndsWith()`   | `StartsWith()`  |
| `PadLeft()`    | `PadRight()`    |
| `IndexOf()`    | `LastIndexOf()` |
| `Substring()`  | `""`            |

These mutations are particularly good at catching code where the direction or casing of a string operation was never actually tested.

**List pattern mutations**: Stryker now mutates C# list pattern syntax. When code uses `is [...]` patterns to match the structure of a collection, Stryker will test that the pattern is actually meaningful by swapping or removing elements. This brings mutation testing to a modern and increasingly popular C# feature.

### YAML config file support

Stryker configuration files can now be written in **YAML** in addition to JSON. If you prefer YAML, simply create a `stryker-config.yaml` (or `stryker-config.yml`) file alongside your project:

```yaml
stryker-config:
  project: 'MyProject.csproj'
  reporters:
    - html
    - progress
  thresholds:
    high: 80
    low: 60
```

The file will be picked up automatically without any additional options.

---

## 🌯 That's a wrap

There is a lot to explore here. We are especially excited about the MTP runner and the doors it opens for teams using xUnit v3, NUnit's new MTP mode, or the excellent TUnit framework. Give it a try and let us know how it goes!

As always, we'd love to hear your thoughts on [our Slack channel](https://join.slack.com/t/stryker-mutator/shared_invite/enQtOTUyMTYyNTg1NDQ0LTU4ODNmZDlmN2I3MmEyMTVhYjZlYmJkOThlNTY3NTM1M2QxYmM5YTM3ODQxYmJjY2YyYzllM2RkMmM1NjNjZjM), open an [issue on GitHub](https://github.com/stryker-mutator/stryker-net/issues), or send us a [tweet](https://twitter.com/stryker_mutator/).
