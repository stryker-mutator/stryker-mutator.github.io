// @ts-check

// This file contains all urls from the old non-Docusaurus website that need a redirect so no links are broken

/**
 * @type {import('@docusaurus/plugin-client-redirects/lib/types').RedirectOption[]}
 */
const redirects = [
  // Content pages
  { from: ['/example', '/example.html'], to: '/docs/General/example' },
  { from: ['/mutators', '/mutators.html'], to: '/docs/mutation-testing-elements/supported-mutators' },
  { from: ['/plugins', '/stryker/plugins'], to: '/docs/stryker-js/plugins' },
  { from: ['/quickstart', '/stryker/quickstart'], to: '/docs/stryker-js/getting-started' },
  { from: ['/faq'], to: '/docs/General/faq' },
  { from: ['/stryker', '/stryker/index'], to: '/docs/stryker-js/getting-started' },
  { from: ['/stryker-net', '/stryker-net/index', '/stryker-net/quickstart'], to: '/docs/stryker-net/Introduction' },
  { from: ['../docs/stryker-net/mutations'], to: '/docs/stryker-net/Mutators' },
  { from: ['/stryker4s', '/stryker4s/index', '/stryker4s/quickstart'], to: '/docs/stryker4s/getting-started' },
  { from: ['/stryker/handbook', '/stryker4s/handbook', '/stryker-net/handbook'], to: '/docs/' },
  // Blogs
  { from: ['/blog/2016-12-30/stryker-0-5-5', '/blog/2016-12-30/stryker-0-5-5.html'], to: '/blog/stryker-0-5-5' },
  {
    from: ['/blog/2017-01-01/happy-new-stryker', '/blog/2017-01-01/happy-new-stryker.html'],
    to: '/blog/happy-new-stryker',
  },
  {
    from: [
      '/blog/2017-01-17/introduction-to-mutation-testing',
      '/blog/2017-01-17/introduction-to-mutation-testing.html',
    ],
    to: '/blog/introduction-to-mutation-testing',
  },
  { from: ['/blog/2017-02-21/stryker-weekend', '/blog/2017-02-21/stryker-weekend.html'], to: '/blog/stryker-weekend' },
  { from: ['/blog/2017-06-10/stryker-0-6-4', '/blog/2017-06-10/stryker-0-6-4.html'], to: '/blog/stryker-0-6-4' },
  {
    from: ['/blog/2017-07-14/road-to-stryker-1-0', '/blog/2017-07-14/road-to-stryker-1-0.html'],
    to: '/blog/road-to-stryker-1-0',
  },
  { from: ['/blog/2017-08-11/stryker-0-8-0', '/blog/2017-08-11/stryker-0-8-0.html'], to: '/blog/stryker-0-8-0' },
  {
    from: ['/blog/2017-10-06/typescript-support', '/blog/2017-10-06/typescript-support.html'],
    to: '/blog/typescript-support',
  },
  { from: ['/blog/2017-10-28/new-html-report', '/blog/2017-10-28/new-html-report.html'], to: '/blog/new-html-report' },
  { from: ['/blog/2017-12-01/babel-support', '/blog/2017-12-01/babel-support.html'], to: '/blog/babel-support' },
  {
    from: [
      '/blog/2018-01-10/typescript-coverage-analysis-support',
      '/blog/2018-01-10/typescript-coverage-analysis-support.html',
    ],
    to: '/blog/typescript-coverage-analysis-support',
  },
  { from: ['/blog/2018-01-26/webpack-support', '/blog/2018-01-26/webpack-support.html'], to: '/blog/webpack-support' },
  {
    from: [
      '/blog/2018-02-08/get-your-mutation-score-badge-now',
      '/blog/2018-02-08/get-your-mutation-score-badge-now.html',
    ],
    to: '/blog/get-your-mutation-score-badge-now',
  },
  {
    from: ['/blog/2018-04-04/use-git-to-select-files', '/blog/2018-04-04/use-git-to-select-files.html'],
    to: '/blog/use-git-to-select-files',
  },
  {
    from: ['/blog/2018-10-6/mutation-switching', '/blog/2018-10-6/mutation-switching.html'],
    to: '/blog/mutation-switching',
  },
  {
    from: ['/blog/2018-12-24/anouncing-stryker-0-34', '/blog/2018-12-24/anouncing-stryker-0-34.html'],
    to: '/blog/announcing-stryker-0-34',
  },
  {
    from: ['/blog/2018-12-25/stryker4s-0-1-0-released', '/blog/2018-12-25/stryker4s-0-1-0-released.html'],
    to: '/blog/stryker4s-0-1-0-released',
  },
  {
    from: ['/blog/2018-9-27/csharp-and-scala-support', '/blog/2018-9-27/csharp-and-scala-support.html'],
    to: '/blog/csharp-and-scala-support',
  },
  {
    from: ['/blog/2019-02-13/announcing-stryker-1-0', '/blog/2019-02-13/announcing-stryker-1-0.html'],
    to: '/blog/announcing-stryker-1-0',
  },
  {
    from: [
      '/blog/2019-04-03/one-mutation-testing-html-report',
      '/blog/2019-04-03/one-mutation-testing-html-report.html',
    ],
    to: '/blog/one-mutation-testing-html-report',
  },
  {
    from: [
      '/blog/2019-04-05/announcing-dotnet-framework-support',
      '/blog/2019-04-05/announcing-dotnet-framework-support.html',
    ],
    to: '/blog/announcing-dotnet-framework-support',
  },
  {
    from: ['/blog/2019-05-17/announcing-stryker-2-0', '/blog/2019-05-17/announcing-stryker-2-0.html'],
    to: '/blog/announcing-stryker-2-0',
  },
  {
    from: [
      '/blog/2019-12-27/stryker-dashboard-host-your-mutation-testing-report',
      '/blog/2019-12-27/stryker-dashboard-host-your-mutation-testing-report.html',
    ],
    to: '/blog/stryker-dashboard-host-your-mutation-testing-report',
  },
  {
    from: ['/blog/2020-03-11/stryker-version-3', '/blog/2020-03-11/stryker-version-3.html'],
    to: '/blog/stryker-version-3',
  },
  {
    from: ['/blog/2020-04-01/anouncing-100-mode', '/blog/2020-04-01/anouncing-100-mode.html'],
    to: '/blog/announcing-100-mode',
  },
  {
    from: ['/blog/2020-05-15/azure-pipelines-integration', '/blog/2020-05-15/azure-pipelines-integration.html'],
    to: '/blog/azure-pipelines-integration',
  },
  {
    from: [
      '/blog/2020-07-13/announcing-stryker-4-beta-mutation-switching',
      '/blog/2020-07-13/announcing-stryker-4-beta-mutation-switching.html',
    ],
    to: '/blog/announcing-stryker-4-beta-mutation-switching',
  },
  {
    from: [
      '/blog/2020-10-07/announcing-stryker-4-mutation-switching',
      '/blog/2020-10-07/announcing-stryker-4-mutation-switching.html',
    ],
    to: '/blog/announcing-stryker-4-mutation-switching',
  },
  { from: ['/blog/stryker4s-sbt-speedup'], to: '/blog/stryker4s-40-minutes-to-40-seconds' },
  // Stryker to StrykerJS
  { from: ['/docs/stryker/configuration'], to: '/docs/stryker-js/configuration' },
  { from: ['/docs/stryker/introduction'], to: '/docs/stryker-js/introduction' },
  { from: ['/docs/stryker/getting-started'], to: '/docs/stryker-js/getting-started' },
  { from: ['/docs/stryker/config-file'], to: '/docs/stryker-js/config-file' },
  { from: ['/docs/stryker/usage'], to: '/docs/stryker-js/usage' },
  { from: ['/docs/stryker/jest-runner'], to: '/docs/stryker-js/jest-runner' },
  { from: ['/docs/stryker/plugins'], to: '/docs/stryker-js/plugins' },
  { from: ['/docs/stryker/typescript-checker'], to: '/docs/stryker-js/typescript-checker' },
  { from: ['/docs/stryker/jasmine-runner'], to: '/docs/stryker-js/jasmine-runner' },
  { from: ['/docs/stryker/karma-runner'], to: '/docs/stryker-js/karma-runner' },
  { from: ['/docs/stryker/mocha-runner'], to: '/docs/stryker-js/mocha-runner' },
  { from: ['/docs/stryker/guides/react'], to: '/docs/stryker-js/guides/react' },
  { from: ['/docs/stryker/guides/angular'], to: '/docs/stryker-js/guides/angular' },
  { from: ['/docs/stryker/guides/nodejs'], to: '/docs/stryker-js/guides/nodejs' },
  { from: ['/docs/stryker/guides/create-a-plugin'], to: '/docs/stryker-js/guides/create-a-plugin' },
  { from: ['/docs/stryker/guides/vuejs'], to: '/docs/stryker-js/guides/vuejs' },
];

module.exports = redirects;
