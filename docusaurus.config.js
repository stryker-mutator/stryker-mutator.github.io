// @ts-check
/**
 * @type {import('@docusaurus/types').DocusaurusConfig}
 */
module.exports = {
  title: 'Stryker Mutator',
  tagline: 'Test your tests with mutation testing.',
  url: 'https://stryker-mutator.io',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'stryker-mutator',
  projectName: 'stryker-mutator.github.io',
  themeConfig: {
    navbar: {
      title: 'Stryker Mutator',
      logo: {
        alt: 'Stryker Mutator Logo',
        src: 'img/logo.png',
      },
      links: [
        {
          to: 'docs/Introduction/doc1',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {
          to: 'docs/Introduction/doc2',
          activeBasePath: 'docs',
          label: 'For JavaScript',
          position: 'left',
        },
        { to: 'blog', label: 'Blog', position: 'left' },
        {
          href: 'https://github.com/stryker-mutator/stryker-mutator.github.io',
          label: 'GitHub',
          position: 'right',
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
              to: 'docs/Introduction/doc1',
            },
            {
              label: 'Second Doc',
              to: 'docs/Introduction/doc1',
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
          ],
        },
        {
          title: 'Social',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/stryker-mutator/',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/stryker_mutator',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Stryker Mutator, Inc. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/stryker-mutator/stryker-mutator.github.io/edit/master/website/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
