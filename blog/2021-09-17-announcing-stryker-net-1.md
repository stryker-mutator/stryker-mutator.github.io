---
slug: 2021-09-17-announcing-stryker-net-1.md
title: Announcing Stryker.NET 1.0
author: Richard Werkman
author_title: Stryker Team
author_url: https://github.com/richardwerkman
author_image_url: https://avatars.githubusercontent.com/u/14224500?v=4
tags: [stryker.net]
---

# Announcing Stryker.NET 1.0 - No more beta!

We're proud to announce the first major release of Stryker.NET: 1.0. It comes with exciting new features and a overhaul of how options work. It should now be easier to use.

<!--truncate-->

If you're new to mutation testing, it's a way to measure your tests' effectiveness. A mutation testing framework will make small changes, called _mutants_, one by one in your source code. Then it will run your tests to see if one of them fails. If so, you just "killed" that mutant; if not, it "survived". If too many mutants survive, you probably want to improve your tests. The mutation testing report will give you insides into the test cases you may have missed. If this all sounds complicated, please take a look at [our RoboBar 🤖🍷 example](https://stryker-mutator.io/example).

If you're new to Stryker.NET, please follow our [Getting started guide](https://stryker-mutator.io/docs/stryker-net/getting-started/). Are you already using Stryker.NET? Update to the latest version with the following command:

```shell
dotnet tool update -g dotnet-stryker
```

With that out of the way, let's dive into the new stuff!

## 💥 Breaking changes

### ⏭ Updated runtime

The .NET runtime for Stryker.NET has been updated from 3.1 to 5.0.

This should have some performance benefits. And helps with developing Stryker.NET in the future.

Please [download and install .NET 5.0](https://dotnet.microsoft.com/download/dotnet/5.0) or update your pipeline to support .NET 5.

### ⏭ Options rework 

Almost all options have been renamed or work different. A fundamental difference on the CLI is how multi value options are passed.

#### Multi value options

The old annotation for passing multi value options was confusing and not based on any standards. For example this is how multiple reporters were passed 👎

```shell
dotnet stryker --reporters "['html', 'progress']"
```

This now looks like 👍

```shell
dotnet stryker --reporter "html" --reporter "progress"
```

#### Options migration guide

A lot of options have been renamed or have been removed from the CLI. They can now only be passed in the JSON. Other options are now only available trough CLI. For example a API key should not be stored in JSON so that possibility has been removed.

Options migration overview:

| Old cli                       | New cli                                    | Old json                      | New json                     |
| ----------------------------- | ------------------------------------------ | ----------------------------- | ---------------------------- |
| config-file-path              | f \| config-file                            | ❌                          | ❌                            |
| max-concurrent-testrunners    | c \| concurrency                            | max-concurrent-testrunners    | concurrency                  |
| dev-mode                      | dev-mode                                   | dev-mode                      | ❌                            |
| solution-path                 | s \| solution                               | solution-path                 | solution                     |
| log-file                      | L \| log-to-file                            | log-file                      | ❌                           |
| log-level                     | V \| verbosity                              | log-level                     | verbosity                    |
| mutation-level                | l \| mutation-level                         | mutation-level                | mutation-level               |
| threshold-high                | ❌                                          | thresholds.high               | thresholds.high              |
| threshold-low                 | ❌                                          | thresholds.low                | thresholds.low               |
| threshold-break               | b \| break-at                               | thresholds.break              | thresholds.break             |
| reporters                     | r \| reporter (flag allowed multiple times) | reporters                     | reporters                    |
| project-file                  | p \| project                                | project-file                  | project                      |
| diff                          | since                                       | diff                          | since                        |
| timeout-ms                    | ❌                                          | timeout-ms                    | additional-timeout           |
| excluded-mutations            | ❌                                          | excluded-mutations            | ignore-mutations             |
| ignore-methods                | ❌                                          | ignore-methods                | ignore-methods               |
| mutate                        | m \| mutate                                 | mutate                        | mutate                       |
| language-version              | ❌                                          | language-version              | language-version             |
| coverage-analysis             | ❌                                          | coverage-analysis             | coverage-analysis            |
| abort-test-on-fail            | ❌                                          | abort-test-on-fail            | disable-bail                 |
| disable-testing-mix-mutations | ❌                                          | disable-testing-mix-mutations | disable-mix-mutants          |
| test-projects                 | ❌                                          | test-projects                 | test-projects                |
| dashboard-url                 | ❌                                          | dashboard-url                 | dashboard-url                |
| dashboard-api-key             | dashboard-api-key                          | dashboard-api-key             | ❌                            |
| project-name                  | ❌                                          | dashboard-project             | project-info.name            |
| module-name                   | ❌                                          | dashboard-module              | project-info.module          |
| project-version               | v \| version                                | dashboard-version             | project-info.version         |
| diff-ignore-files             | ❌                                          | diff-ignore-files             | since.ignore-changes-in      |
| azure-storage-url             | ❌                                          | azure-storage-url             | baseline.azure-fileshare-url |
| dashboard-fallback-version    | ❌                                          | dashboard-fallback-version    | baseline.fallback-version    |
| baseline-storage-location     | ❌                                          | baseline-storage-location     | baseline.provider            |
| dashboard-compare             | with-baseline                              | dashboard-compare             | baseline                     |
| git-diff-target               | \--since ...                               | git-diff-target               | since.target                 |
| azure-storage-sas             | azure-fileshare-sas                        | azure-storage-sas             | ❌                            |
| files-to-exclude              | ❌                                          | ❌                             | ❌                            |
| test-runner                   | ❌                                          | ❌                             | ❌                            |

❌ means the option has been removed.

## 🚀 Whats new?

An exciting set of new features has been added with this release! Let's walk trough them all:

### Allow failing tests

It's now allowed to start a mutation test run even with failing tests. Stryker will try to make the best of the situation by marking mutants that are covered by `initially failing tests` as `survived`. 

### Mutant filtering

It's now possible to filter mutants at source code level. This gives the most fine grained level of control. 

The syntax for the comments is: `Stryker [disable|restore][once][all| mutator list][: reason for disabling]`

Example:

```csharp
var i = 0;
// Stryker disable all : reason for disable
i++; // won't be mutated
i++; // won't be mutated
// Stryker restore all
i++; // will be mutated
// Stryker disable once all
i++; // won't be mutated
i++; // will be mutated
// Stryker disable once Arithmetic
i++; // will be mutated
// Stryker disable once Arithmetic,Update
i++; // won't be mutated
```

### Ignore mutations

The ignore mutations option has been extended to offer more fine grained control. Before v1.x it was possible to ignore complete mutators. Now it's possible to ignore specific mutations inside these mutators as well.

Example:

```json
"stryker-config": {
    "ignore-mutations": [
        "linq.First",
        "linq.Sum"
    ]
}
```

> Note: this only works for Linq mutations for now.

All possible mutations:

```
None,
Distinct,
Reverse,
Average,
AsEnumerable,
OrderBy,
OrderByDescending,
FirstOrDefault,
First,
SingleOrDefault,
Single,
Last,
All,
Any,
Skip,
Take,
SkipWhile,
TakeWhile,
Min,
Max,
Sum,
Count,
ThenBy,
ThenByDescending,
Union,
Intersect,
Concat,
Except
```

### MsBuild path option

By default stryker tries to autodiscover msbuild on your system. If stryker fails to discover msbuild you may supply the path to msbuild manually with this option.

Example:

```shell
--msbuild-path "c://MsBuild/MsBuild.exe"
```

### Target framework

If the project targets multiple frameworks, it is now possible to specify the particular framework to build against. If you specify a non-existent target, Stryker will build the project against a random one (or the only one if so).

Example:

```json
{
  "stryker-config": {
    "target-framework": "netcoreapp3.1"
  }
}
```

### Filter test cases

A long awaited feature has finally found its way into Stryker! It is now possible to exclude some test cases. For example if you have long running integration tests in your unit test project they can be disabled for Stryker. This will improve runtime.

Example:

```json
{
  "stryker-config": {
    "test-case-filter": "(FullyQualifiedName~UnitTest1&TestCategory=CategoryA)|Priority=1"
  }
}
```

Uses `dotnet test --filter` option syntax, [detailed here](https://docs.microsoft.com/en-us/dotnet/core/testing/selective-unit-tests).

### Use source link for dashboard reporter

Filling all settings to use the dashboard reporter could be a bit of a hustle. Thanks to [SourceLink](https://github.com/dotnet/sourcelink#readme), the repository URL and the full version (including the git SHA1) of a project can be included in the produced assembly.

Stryker now uses the information computed by SourceLink to automatically retrieve the project name (github.com/organization/project) and project version which are required for the dashboard reporter.

Enable this by adding the following to your `.csproj`:

```xml
    <!-- Optional: Publish the repository URL in the built .nupkg (in the NuSpec <Repository> element) -->
    <PublishRepositoryUrl>true</PublishRepositoryUrl>
 
    <!-- Optional: Embed source files that are not tracked by the source control manager in the PDB -->
    <EmbedUntrackedSources>true</EmbedUntrackedSources>
  
    <!-- Optional: Build symbol package (.snupkg) to distribute the PDB containing Source Link -->
    <IncludeSymbols>true</IncludeSymbols>
    <SymbolPackageFormat>snupkg</SymbolPackageFormat>
```

And add the correct package reference for your source control provider. Search nuget for `Microsoft.SourceLink.*` and pick your provider. For full info on how to enable SourceLink see [their readme](https://github.com/dotnet/sourcelink#readme)

## 🐛 Bug fixes

### No more mutated assembly on disk after stryker run

Internally Stryker replaces the `.dll` on your disk when running. Up till now the mutated assembly stayed in place. This had some unintended side effects. For example code coverage results are incorrect when run on a mutated assembly. And there was the risk of accidentally releasing/publishing the mutated assembly instead of the original one in a pipeline.

## 🎉 Thank you

Thanks to everyone for your continued support! Have questions or issues? Don't hesitate to contact us on [Slack](https://join.slack.com/t/stryker-mutator/shared_invite/enQtOTUyMTYyNTg1NDQ0LTU4ODNmZDlmN2I3MmEyMTVhYjZlYmJkOThlNTY3NTM1M2QxYmM5YTM3ODQxYmJjY2YyYzllM2RkMmM1NjNjZjM), on [Twitter](https://twitter.com/stryker_mutator/) or open [an issue](https://github.com/stryker-mutator/stryker-net/issues/new/choose).
