---
slug: stryker-dashboard-host-your-mutation-testing-report
title: Host your mutation testing report
authors: nicojs
tags: [dashboard]
---

📊 The Stryker Dashboard can now host your mutation testing report in the cloud.

<!--truncate-->

If you're new to mutation testing, it's a way to measure how effective your tests are at finding bugs.
Please take a look at [our RoboCoasters 🤖🎢 example](/example) and see how even 100% code coverage doesn't tell the whole story.
Mutation testing is the only way to make sure your code is tested.

Mutation testing is done by a mutation testing framework. After a mutation test run, you'll get a report that gives you all the details.
Since mutation testing is still growing in popularity, there wasn't a convenient way yet to view the report in the cloud.
The Stryker Dashboard solves that problem.

The dashboard now has several new features:

💄 Store and show gorgeous reports.  
🥇 Brag about your mutation score with the mutation score badge.  
🔀 Support for Git workflows with mutation reports per branch and tag.  
🐉 Support for Monorepos. Multiple reports are aggregated to show a report of all your modules.  
💸 Free for open source projects.  
🤝 Supports all Stryker mutation testing frameworks. Other frameworks will add support over time or you can send your report through a cURL request. See [the Stryker handbook](https://github.com/stryker-mutator/stryker-handbook/blob/master/dashboard.md) for more details.

## Some examples

Click on the links below to see some examples of mutation testing reports hosted in the Stryker Dashboard.

- [Stryker ![badge](https://img.shields.io/endpoint?style=flat&url=https%3A%2F%2Fbadge-api.stryker-mutator.io%2Fgithub.com%2Fstryker-mutator%2Fstryker%2Fmaster)](https://dashboard.stryker-mutator.io/reports/github.com/stryker-mutator/stryker-js/master)
- [Stryker4s ![badge](https://img.shields.io/endpoint?style=flat&url=https%3A%2F%2Fbadge-api.stryker-mutator.io%2Fgithub.com%2Fstryker-mutator%2Fstryker4s%2Fmaster)](https://dashboard.stryker-mutator.io/reports/github.com/stryker-mutator/stryker4s/master)
- [Stryker.NET ![badge](https://img.shields.io/endpoint?style=flat&url=https%3A%2F%2Fbadge-api.stryker-mutator.io%2Fgithub.com%2Fstryker-mutator%2Fstryker-net%2Fmaster)](https://dashboard.stryker-mutator.io/reports/github.com/stryker-mutator/stryker-net/master)

## Why do we need it?

Mutation testing can be time-consuming.
Using your PC to do it is fine for small projects, but for bigger projects, you really want to run it in your CI/CD pipeline.

This is also something we've experienced developing Stryker, the mutation testing framework for JavaScript and TypeScript.
At first, we would run Stryker on Stryker every week.
But as our codebase grew, this became impractical.

Luckily, running mutation testing in your CI/CD pipeline is a trivial task.
Most mutation testing frameworks can be run from the command line.
This is also true for the Stryker family of frameworks.

The problem becomes: what is a convenient way to read the mutation testing report 👀?
Manually downloading files and opening them in your browser isn't a way anyone should be forced to spend an afternoon.

## Where can I get my own?

Getting up and running with the dashboard is simple.

🎯 Navigate to [dashboard.stryker-mutator.io](https://dashboard.stryker-mutator.io) and log in with your GitHub account.  
✅ Enable the Stryker Dashboard for your repository.  
🔑 Configure your API key. See [the dashboard article on the Stryker handbook for the details](https://github.com/stryker-mutator/stryker-handbook/blob/master/dashboard.md)  
🏃‍♀️ Run Stryker.NET, Stryker4s or Stryker (with the dashboard reporter enabled) and upload your first report.

## Eating our own dog food 🍴🐶🥫

We are eating our own dog food since we're using the new dashboard features to make our own mutation testing reports visible.
We're naturally welcoming pull requests to help improve our tests.
Improving tests is a good way to get to know a new codebase.

## What's next?

We can't wait for people to start using the dashboard and give feedback.
Please enable it on your open-source project and tell us what you think!
Together, we'll be able to spread the word about mutation testing
and test quality by making it more visible

We'd like to get more mutation testing frameworks on board. To this date, [InfectionPHP](https://twitter.com/maks_rafalko/status/1207256423404638208) for PHP,
[Mull](https://twitter.com/1101_debian/status/1206613696564346881) for C++ and [Pitest](https://twitter.com/_pitest/status/1207251028653068288) for Java
have shown interest.

We're looking to improve the dashboard further. You can expect more features and open-source git providers to be added.
We're always looking for feedback, please don't hesitate to create [an issue](https://github.com/stryker-mutator/stryker-dashboard/issues/new).
