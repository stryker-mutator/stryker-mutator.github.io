// @ts-check
/**
 * @type {import('@docusaurus/types').DocusaurusConfig}
 */
module.exports = {
  title: 'Stryker Mutator',
  tagline: 'Test your tests with mutation testing.',
  url: 'https://stryker-mutator.io',
  baseUrl: '/',
  favicon: 'images/favicon.ico',
  organizationName: 'stryker-mutator',
  projectName: 'stryker-mutator.github.io',
  themeConfig: {
    navbar: {
      title: 'Stryker Mutator',
      logo: {
        alt: 'Stryker Mutator Logo',
        src: 'images/stryker.svg',
      },
      links: [
        {
          to: 'docs/',
          activeBasePath: 'docs/',
          label: 'Docs',
          position: 'left',
        },
        { to: 'blog', label: 'Blog', position: 'left' },
        {
          // TODO: Proper link
          to: 'docs/Introduction/doc2',
          activeBasePath: 'docs/stryker/',
          label: 'For JavaScript',
          position: 'left',
        },
        {
          to: 'docs/stryker-net/Configuration',
          activeBasePath: 'docs/stryker-net',
          label: 'For C#',
          position: 'left',
        },
        {
          to: 'docs/stryker4s/Configuration',
          activeBasePath: 'docs/stryker4s',
          label: 'For Scala',
          position: 'left',
        },
        {
          to: 'docs/Introduction/example',
          activeBasePath: 'docs/Introduction/example',
          label: 'An example',
          position: 'left',
        },
        {
          to: 'docs/stryker-handbook/README',
          activeBasePath: 'docs/stryker-handbook',
          label: 'Handbook',
          position: 'left',
        },
        {
          href: 'https://dashboard.stryker-mutator.io',
          label: 'Dashboard',
          position: 'right',
        },
        {
          href: 'https://github.com/stryker-mutator/stryker-mutator.github.io',
          position: 'right',
          className: 'header-github-link',
          'aria-label': 'GitHub repository',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Style Guide',
              to: 'docs/Introduction/doc1/',
            },
            {
              label: 'Second Doc',
              to: 'docs/Introduction/doc2/',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Slack',
              href:
                'https://join.slack.com/t/stryker-mutator/shared_invite/enQtOTUyMTYyNTg1NDQ0LTU4ODNmZDlmN2I3MmEyMTVhYjZlYmJkOThlNTY3NTM1M2QxYmM5YTM3ODQxYmJjY2YyYzllM2RkMmM1NjNjZjM',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/stryker-mutator',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/stryker-mutator/',
            },
          ],
        },
      ],
      copyright: `Stryker is released under the Apache 2.0 license. Site by the Stryker team (see GitHub). Logo by Selina van den Top.`,
    },
    prism: {
      additionalLanguages: ['scala', 'csharp', 'java'],
    },
    googleAnalytics: {
      trackingID: 'UA-104444094-1',
      // Optional fields.
      anonymizeIP: true, // Should IPs be anonymized?
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          // It is recommended to set document id as docs home page (`docs/` path).
          homePageId: 'Introduction/index',
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/stryker-mutator/stryker-mutator.github.io/edit/develop/',
        },
        blog: {
          showReadingTime: true,
          editUrl: 'https://github.com/stryker-mutator/stryker-mutator.github.io/edit/develop/',
          feedOptions: {
            type: 'rss',
          },
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  plugins: [['@docusaurus/plugin-client-redirects', { redirects: require('./legacy-redirects') }]],
};
