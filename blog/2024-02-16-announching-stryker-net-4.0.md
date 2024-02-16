---
slug: stryker-net-4-is-here
title: 'Stryker.NET 4.0 is here!'
authors: richard-werkman
tags: [stryker-net]
---

Hello there! We're excited to share some fantastic news about the latest version of Stryker.NET. The team has been hard at work and has introduced some significant updates that will enhance the user experience and functionality of the platform.

<!-- truncate -->

## 💥 Breaking Change

First and foremost, one of the most notable changes is the upgrade of the .NET runtime from dotnet 6 to dotnet 8. This update brings with it improved performance and LTS, ensuring that Stryker.NET remains at the forefront of development tools.

## 🚀 What's New

In addition to the runtime update, users will be thrilled to learn that the dashboard now supports live reporting. This means that users can now view and analyze real-time data, providing them with valuable insights into the performance of their projects. Even when Stryker is being run in a pipeline.

## 📰 In Other News

Since version `3.13.0` we support initializing a config file straight from the command line.

```
dotnet stryker init --project myproject.csproj
```

This command will create a new config file at the commands current location. It will fill the config file with default values for all file based options. Any options passed as CLI options will also be saved in the newly created config file. 

## 🔮 What's Next?

As part of the evolution of the platform, the decision has been made to deprecate the baseline & since options. They will be replaced with commands. 

The commands will probably look like this:

```
dotnet stryker with-baseline feat-2
dotnet stryker baseline recreate feat-2
```

While this may require some adjustment for existing users, the team is confident that this change will streamline the user experience and pave the way for future enhancements. 

Another deprecation in a future version is the span in mutate option. We feel this option isn't used by any projects and doesn't work, like we intended it to work. A replacement for this feature could be added, if the need for this arises. This change aligns with the team's focus on optimizing and simplifying the platform, ensuring that users can efficiently navigate and utilize its features without unnecessary complexity.

## 🔬 Research

Improving the speed of Stryker.NET is our top priority. That's why we will investigate how to utilize VSTest in a better way. Other Stryker frameworks have seen big performance improvement by keeping their testrunners alive between testruns. VSTest sadly doesn't support this, so we need to spin up a new instance of VSTest for each testrun. This has a big negative impact on the performance of Stryker. We hope to gain a massive performance boost by this 🚀

## 🌯 That's a wrap

With these updates, the latest version of stryker.net represents a significant step forward in empowering developers to build and test their code with greater efficiency and accuracy. The team is dedicated to continuously improving the platform, and these changes reflect their commitment to delivering a top-tier development experience.

Stay tuned for more exciting updates and features from stryker.net as the platform continues to evolve and adapt to the ever-changing landscape of software development.

In the meantime, we'd love to hear your thoughts. Any feedback is appreciated, on [our Slack channel](https://join.slack.com/t/stryker-mutator/shared_invite/enQtOTUyMTYyNTg1NDQ0LTU4ODNmZDlmN2I3MmEyMTVhYjZlYmJkOThlNTY3NTM1M2QxYmM5YTM3ODQxYmJjY2YyYzllM2RkMmM1NjNjZjM), our baseline project on [github](https://github.com/orgs/stryker-mutator/projects/7), or send us a [tweet](https://twitter.com/stryker_mutator/).