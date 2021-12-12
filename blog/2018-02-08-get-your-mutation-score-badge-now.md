---
slug: get-your-mutation-score-badge-now
title: Get your mutation score badge now!
author: Nico Jansen
author_title: Stryker Team
author_url: https://github.com/nicojs
author_image_url: https://avatars3.githubusercontent.com/u/1828233?s=400&u=fec18ad3776aaafec54c49bbd7173a841ae7ea59&v=4
tags: [dashboard]
---

We're launching our [Stryker Dashboard](https://dashboard.stryker-mutator.io) today.
This will be the home of your test quality in the future.
The first feature? A mutation score badge!

![badge green](https://img.shields.io/badge/mutation%20score-82.3-green.svg)
![badge orange](https://img.shields.io/badge/mutation%20score-72.3-orange.svg)
![badge red](https://img.shields.io/badge/mutation%20score-59.6-red.svg)

<!--truncate-->

## Tell me how!

Take these steps to enable the mutation score badge on your repository.

- **Step 1**: Make sure you can run stryker during a [travis](https://travis-ci.org) build (we only support travis at the moment).
- **Step 2**: Go to [https://dashboard.stryker-mutator.io](https://dashboard.stryker-mutator.io) and sign with your github account.
- **Step 3**: Flip the switch next to your repository:
  <svg _ngcontent-c6="" height="50" width="250" xmlns="http://www.w3.org/2000/svg">
  <g _ngcontent-c6="">
  <title _ngcontent-c6="">background</title>
  <rect _ngcontent-c6="" x="0" y="0" width="250" height="50" ry="20" rx="20" fill="#fff" r="50" stroke="#E7E8E6" strokeWidth="1.5"></rect>
  </g>
  <g _ngcontent-c6="">
  <title _ngcontent-c6="">Switch</title>
  <text _ngcontent-c6="" textAnchor="start" x="10" y="30">username/reponame</text>
  <rect _ngcontent-c6="" fill="#E77964" height="20" rx="10" ry="50" width="45" x="180" y="15"></rect>
  <circle _ngcontent-c6="" cx="215" cy="25" fill="#b74934" r="13"></circle>
  </g>
  </svg>
- **Step 4**: Configure your api key in your project. Please make sure you encrypt this variable using the [encrypted environment variables](https://docs.travis-ci.com/user/environment-variables/#Encrypting-environment-variables).
  For example:  
  `$ travis encrypt STRYKER_DASHBOARD_API_KEY=89b99910-04d8-4ffb-9a91-23d709c828b4 --add`
- **Step 5**: Configure the dashboard reporter in your stryker.conf.js file (you will need stryker version 0.19.1 or higher):  
  `reporter: [ /*...*/ 'dashboard' ]`
- **Step 6**: Force a travis build  
  `$ git push origin master`

Your badge will be available at: `https://badge.stryker-mutator.io/github.com/{username}/{repository_name}/{branch}`.
(don't forget to add it to your readme file)

Real life examples of the mutation score badge:

- [stryker-mutator/stryker-jest-runner](https://github.com/stryker-mutator/stryker-jest-runner#readme) ![badge](https://badge.stryker-mutator.io/github.com/stryker-mutator/stryker-jest-runner/master)
- [nicojs/node-install-local](https://github.com/nicojs/node-install-local#readme) ![badge](https://badge.stryker-mutator.io/github.com/nicojs/node-install-local/master)
- [nicojs/node-sdedit](https://github.com/nicojs/node-sdedit#readme) ![badge](https://badge.stryker-mutator.io/github.com/nicojs/node-sdedit/master)

## What's next?

A mutation score badge sure is nice, but what does the future bring?

First we want to support monorepo style projects (stryker itself is a mono-repo). Every package in your monorepo will have its own badge.
We also want to support a cumulative badge for in your main readme file.

We would also like to support more build servers and use cases. Are you missing a feature?
Please let us know by opening [an issue](https://github.com/stryker-mutator/stryker-dashboard/issues/new).

But the dashboard is more than just badges. We truly want to make this the home of your test quality.
You can think of features like:

- Showing your html mutation report.
- Keep your history and show trend lines.
- Informing you how a pull request changes your mutation score.
- Support mutation testing frameworks for other languages.

We are curious to know what you think.
