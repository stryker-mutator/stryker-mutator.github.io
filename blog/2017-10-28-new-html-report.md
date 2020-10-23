---
slug: new-html-report
title: New HTML reporter
author: Nico Jansen
author_title: Stryker Team
author_url: https://github.com/nicojs
author_image_url: https://avatars3.githubusercontent.com/u/1828233?s=400&u=fec18ad3776aaafec54c49bbd7173a841ae7ea59&v=4
tags: [stryker]
---

The Stryker HTML Reporter version 0.10 has a lot of new features, but more importantly: a sexy new look.

For the entire changelog:

* [stryker-html-reporter changelog](https://github.com/stryker-mutator/stryker/blob/master/packages/stryker-html-reporter/CHANGELOG.md)

## Sexy new look

Without further ado: 

![](/images/blogs/html-report-bootstrap4.png)

As you might already suspect, we've upgraded to [bootstrap 4 (beta)](http://getbootstrap.com/). 

## New features

This new report has a ton of new features:

* **Mutant states**. The file report will now show the exact [state of a mutant](http://stryker-mutator.github.io/faq.html#q-what-do-all-these-metrics-mean). 
It's also possible to filter out the exact states at the top. It even shows the amount of mutants with that state in parentheses.
  This should give you more details as to what happened when testing your application. 
* **Detailed mutant report**. On the right side (or below on small screens) of a file report, you can now see a detailed table with even more information about the mutants.
* **Breadcrumb**. The days of getting lost in your Stryker report belong to the past. Behold: the new breadcrumb in your report! 

Please try it out yourself and let us know what your think!