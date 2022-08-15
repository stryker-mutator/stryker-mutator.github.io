---
slug: connect-pit-to-stryker-dashboard
title: 'Connect PIT to Stryker Dashboard'
author: Maarten Mulders
author_title: Stryker Team
author_url: https://maarten.mulders.it/
author_image_url: https://maarten.mulders.it/img/twitter-profile-202106.png
tags: [stryker, pit, java, maven, dashboard]
---

Until recently, it would be quite cumbersome to integrate PIT with the Stryker Mutator Dashboard.
It involved (mis-) using a different PIT reporter, a fragile Bash script to fiddle around in one of the generated JavaScript files...
Not pretty at all.

A first-class tool like PIT deserves a better integration with a first-class dashboard like the Stryker Mutator Dashboard!

<!-- truncate -->

That's why today, I am introducing a much cleaner and simpler approach: the [Stryker Mutator Dashboard reporter for PIT](https://github.com/mthmulders/pit-stryker-dashboard-reporter).

Here's how it works:

1. It collects mutation testing results from [PIT](https://pitest.org/).
1. It converts the collected mutation testing results into the format that the [Stryker Mutator Dashboard](https://dashboard.stryker-mutator.io/) expects.
1. It uploads the converted report to the [Stryker Mutator Dashboard](https://dashboard.stryker-mutator.io/).

## How to use it?

I've tried to make it as simple as possible to use the reporter.

As a prerequisite, make sure there is an environment variable `STRYKER_DASHBOARD_API_KEY` with the API key that you got when you set up your project.

Now, follow these four steps:

1. Find the place in your **pom.xml** where you define the _pitest-maven_ plugin.
2. Add a dependency to this plugin declaration:
   ```xml
   <dependency>
      <groupId>it.mulders.stryker</groupId>
      <artifactId>pit-dashboard-reporter</artifactId>
      <version>0.1.2</version>
   </dependency>
   ```
3. Configure PIT to use the new output format:
   ```xml
   <configuration>
       <outputFormats>
           <format>stryker-dashboard</format>
       </outputFormats>
   </configuration>
   ```
   1. Alternatively, if `<configuration>` is already there, add the `<outputFormats>`.
   2. Similarly, if `<outputFormats>` is already there, add (or replace) with `<format>stryker-dashboard</format>`.
4. **Important** If you are working on a multi-module Maven project, add the following to the `<configuration>` block:
   ```xml
   <pluginConfiguration>
       <stryker.moduleName>${project.artifactId}</stryker.moduleName>
   </pluginConfiguration>
   ```
   This will ensure the mutation testing results of the various Maven modules will not mix up in the report.
   You **should not** do this if you have a single-module Maven project!
5. For all the other things, the reporter will autoconfigure itself, given your build runs on any of the following environments:

   - GitHub Actions

   If your builds run in another environment, please feel free to [open an issue](https://github.com/mthmulders/pit-stryker-dashboard-reporter/issues/new).

**That's all - you're done!**
Kick off a fresh build, wait a few minutes and enjoy the online report!

## Credits

Credit where credit is due: this reporter would not exist without this [tremendous work](https://github.com/wmaarts/pitest-mutation-testing-elements-plugin) by Wouter Aarts.
His reporter contains all the complex mapping from PIT results to [mutation-testing-elements' JSON format](https://github.com/stryker-mutator/mutation-testing-elements/tree/master/packages/report-schema).

## Post Scriptum

I have a slightly longer version of this blog (including some historical background) on [my personal blog](https://maarten.mulders.it/2022/07/mutation-testing-badge-with-pit-and-stryker-dashboard/).
