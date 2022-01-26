// @ts-check
/**
 * @type {import('@docusaurus/types').DocusaurusConfig}
 */
module.exports = {
  title: 'Stryker Mutator',
  tagline: 'Test your tests with mutation testing.',
  url: 'https://stryker-mutator.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  favicon: 'images/stryker.svg',
  organizationName: 'stryker-mutator',
  projectName: 'stryker-mutator.github.io',
  themeConfig: {
    image: 'images/strykerman.png',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    announcementBar: {
      id: 'talk', // Any value that will identify this message.
      content:
        '📽️ <a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/watch?v=Vq9eqZzblfg">Watch the talk "Who is testing your tests?" from <i>Scala Love in the City</i></a>',
      backgroundColor: 'var(--ifm-navbar-background-color, #fff)',
      textColor: 'var(--ifm-navbar-link-color, #000)',
      isCloseable: true,
    },
    navbar: {
      title: 'Stryker Mutator',
      logo: {
        alt: 'Stryker Mutator Logo',
        src: 'images/stryker.svg',
      },
      items: [
        { to: 'blog', label: 'Blog', position: 'left' },
        {
          to: 'docs/stryker-js/introduction',
          activeBasePath: 'docs/stryker-js/',
          label: 'For JavaScript',
          position: 'left',
        },
        {
          to: 'docs/stryker-net/introduction',
          activeBasePath: 'docs/stryker-net',
          label: 'For C#',
          position: 'left',
        },
        {
          to: 'docs/stryker4s/getting-started',
          activeBasePath: 'docs/stryker4s',
          label: 'For Scala',
          position: 'left',
        },
        {
          to: 'docs/General/example',
          activeBasePath: 'docs/General/example',
          label: 'An example',
          position: 'left',
        },
        {
          href: 'https://dashboard.stryker-mutator.io',
          label: 'Dashboard',
          position: 'right',
        },
        {
          href: '#',
          target: '_self',
          position: 'right',
          className: 'header-github-link',
          'aria-label': 'GitHub repository dropdown',
          items: [
            {
              label: 'StrykerJS (JS & TS)',
              href: 'https://github.com/stryker-mutator/stryker-js',
            },
            {
              label: 'Stryker.NET (C#)',
              href: 'https://github.com/stryker-mutator/stryker-net',
            },
            {
              label: 'Stryker4s (Scala)',
              href: 'https://github.com/stryker-mutator/stryker4s',
            },
            {
              label: 'Mutation Testing Elements',
              href: 'https://github.com/stryker-mutator/mutation-testing-elements',
            },
            {
              label: 'This website',
              href: 'https://github.com/stryker-mutator/stryker-mutator.github.io',
            },
          ],
        },
      ],
    },
    footer: {
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'FAQ',
              to: 'docs/General/faq',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Slack',
              href: 'https://join.slack.com/t/stryker-mutator/shared_invite/enQtOTUyMTYyNTg1NDQ0LTU4ODNmZDlmN2I3MmEyMTVhYjZlYmJkOThlNTY3NTM1M2QxYmM5YTM3ODQxYmJjY2YyYzllM2RkMmM1NjNjZjM',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/stryker_mutator',
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
      copyright: `Powered by <a target="_blank" rel="noopener noreferrer" href="https://www.infosupport.com/open-source/">Info Support</a>.<br/>Stryker is released under the Apache 2.0 license. Site by the <a target="_blank" rel="noopener noreferrer" href="https://github.com/orgs/stryker-mutator/people">Stryker team</a>. Logo by Selina van den Top.`,
      logo: {
        alt: 'Info Support Logo',
        src: 'images/info-support.svg',
        href: 'https://infosupport.com',
      },
    },
    prism: {
      additionalLanguages: ['java', 'scala', 'csharp'],
      theme: require('prism-react-renderer/themes/github'),
      darkTheme: require('prism-react-renderer/themes/dracula'),
    },

    algolia: {
      appId: 'QF3A1J09N2',
      apiKey: 'b0ec9342a88037eafe5fa4fd412b8b35',
      indexName: 'stryker-mutator',
    },
    metadata: [
      {
        name: 'keywords',
        content: 'mutation testing, JavaScript, TypeScript, C#, .NET, Scala, testing, testing tools, software',
      },
    ],
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/stryker-mutator/stryker-mutator.github.io/edit/develop/',
        },
        blog: {
          showReadingTime: true,
          editUrl: 'https://github.com/stryker-mutator/stryker-mutator.github.io/edit/develop/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        googleAnalytics: {
          trackingID: 'UA-104444094-1',
          // Optional fields.
          anonymizeIP: true, // Should IPs be anonymized?
        },
      },
    ],
  ],
  plugins: [['@docusaurus/plugin-client-redirects', { redirects: require('./legacy-redirects') }]],
};
