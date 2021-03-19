---
slug: azure-pipelines-integration
title: Integrating Stryker.NET in your azure pipelines
author: Richard Werkman
author_title: Stryker.NET Team
author_url: https://github.com/richardwerkman
author_image_url: https://avatars1.githubusercontent.com/u/14224500?s=460&u=189f6ef9ab6957063d0674f94c014bef39bf4653&v=4
tags: [stryker.net]
---

Over the past few months we have been working hard to integrate Stryker.NET with azure pipelines. Learn how you can leverage our new features to include mutation testing in your continuous integration.

<!--truncate-->

When using continuous integration it can be hard to keep track of quality. By integrating Stryker in your build pipelines you can ensure a continued focus on test quality, no matter how many changes your code gets to see.

## 🚀 Speed

Stryker.NET is now faster than ever! This means you can run mutation testing for every pull request without waiting too long for your build to succeed.

Some performance improvements we have implemented:

- Mutation switching
  - We compile all mutants at once using conditional statements around the mutations. When testing the mutants we only have to flip the switch to turn it on 🔛
- Integration with VSTest
  - This is the fastest way to run your tests. And VSTest supports all well known test frameworks.
- Coverage analysis
  - We do not test mutants that are not covered by any test. And we only run the tests that cover the mutant when testing that mutant.
- Testing mutants in parallel
  - We run multiple test sessions at once to test the mutants even faster.
- Using the same test session for non overlapping mutants
  - Mutants that are in a different file and have no overlapping covered tests are run in the same test session to remove the overhead of starting a new test session.

By implementing all these performance tweaks we can now proudly say we are fast enough to use in your pipeline! So if performance was holding you back, now is the moment to give Stryker.NET a try! 🚀

## 🔎 Git integration

On large projects we can also use git to filter changed files in a pull request. That way only the changed code will be mutated. This helps to use mutation testing in pull request even on the largest projects.

How does this work? Simply run Stryker.NET with the following command in your PR build:

```
dotnet stryker --diff
```

This will use the master branch as base by default. If you use a different branch as base for your pull requests you can change the base branch like this:

```
dotnet stryker --diff --git-source "coalesce(variables['System.PullRequest.TargetBranch'], variables['Build.SourceBranchName'])"
```

This will get the pull request target branch, or the build source branch if no pull request target branch is available.

💡 Tip:
You can use this feature locally too, if you want to quickly mutate your new feature.

## ✨ Reporting

Another feature we are proud of is our integration with azure devops.

You can now display the html report in your azure devops environment using an [azure devops extension](https://marketplace.visualstudio.com/items?itemName=stryker-mutator.mutation-report-publisher).

![](/images/blogs/azure-devops-extension1.png)

![](/images/blogs/azure-devops-extension3.png)

The extension will add a new tab to your build result page. This new tab will contain the full html report that is also available locally and on the stryker dashboard.

How to use the extension:

- Install the [extension](https://marketplace.visualstudio.com/items?itemName=stryker-mutator.mutation-report-publisher) on your azure devops environment
- Run `dotnet stryker` in your pipeline.
- Make sure the `html reporter` is enabled (default).
- Add the `publish mutation report` task to your pipeline (after `dotnet stryker`)
- Pass the path to the html report

Example:
![](/images/blogs/azure-devops-extension2.png)

💡 Note: The extension does work for other mutation test frameworks as well. As long as the framework outputs a html report and you provide the location to the task, it will be displayed in your build result tab.

## ⛔ Forcing test quality

It's great that it is now possible to monitor the test quality automatically. But if you want to take a step even further towards maintaining your test quality you can set a breaking threshold.

This will break your pipeline if a minimum mutation score wasn't reached.

How to use custom thresholds:

```
dotnet stryker --threshold-high 90 --threshold-low 75 --threshold-break 60
```

or in `stryker-config.json`

```
{
    "stryker-config":
    {
        "threshold-high": 90,
        "threshold-low": 75,
        "threshold-break": 60
    }
}
```

This will make Stryker return a non-zero exit code when the mutation score is below 60.

![](/images/blogs/threshold-break.png)

💡 Tip:
If you think your mutation score is too low, try to increase the threshold every few months to gradually improve your tests.

💡 Tip:
If you can't seem to kill a mutant, maybe the mutated code is not needed and can be safely removed.

## 🎆 Conclusion

With all these features nothing stands in your way to go and add Stryker.NET to your build pipeline.

If we put all these features together your pipeline could look like this:

```yaml
steps:
- task: UseDotNet@2
displayName: 'Use .Net Core runtime 3.1.x'
inputs:
    packageType: runtime
    version: 3.1.x
- task: DotNetCoreCLI@2
displayName: 'Install dotnet tools for Stryker.CLI'
inputs:
    command: custom
    custom: 'tool restore'
    workingDirectory: 'src\Stryker.CLI\Stryker.CLI.UnitTest'
- task: DotNetCoreCLI@2
displayName: 'Run stryker on Stryker.CLI'
inputs:
    command: custom
    custom: 'stryker --reporters "[''dashboard'', ''html'']" --threshold-high 90 --threshold-low 75 --threshold-break 60 --diff'
    workingDirectory: 'src\Stryker.CLI\Stryker.CLI.UnitTest'
- task: stryker-mutator.mutation-report-publisher.publish-mutation-report.publish-mutation-report@0
displayName: 'Publish Mutation Test Report'
inputs:
    reportPattern: 'src\Stryker.CLI\Stryker.CLI.UnitTest\**\mutation-report.html'
```

If you run into trouble during installation or running, please let us know so we can improve.

## 🔮 What's next?

The upcoming months you can expect even more awesome features and improvements in Stryker.NET.

- The `git diff` feature will be greatly improved and result in a full report.
- Regex mutator (never seen before in mutation testing)
- Mutating a whole solution at once

Want to help make Stryker even better? Check out our [open issues](https://github.com/stryker-mutator/stryker-net/issues). Or help with implementing [mutation switching for Stryker (js)](https://github.com/stryker-mutator/stryker-js/issues/1514)
