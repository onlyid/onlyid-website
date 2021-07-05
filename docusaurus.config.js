const lightCodeTheme = require('prism-react-renderer/themes/github');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: '唯ID',
  url: 'https://www.onlyid.net',
  baseUrl: '/home/',
  favicon: 'img/favicon.png',
  themeConfig: {
    navbar: {
      logo: {
        src: 'img/logo.svg',
      },
      items: [
        {to: '/why-onlyid', label: '为什么选择唯ID'},
        {
          type: 'doc',
          docId: 'intro',
          label: '开发文档',
        },
        {to: '/blog', label: '开发者博客'},
        {
          href: 'https://github.com/facebook/docusaurus',
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
              label: 'Tutorial',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/docusaurus',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/docusaurus',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/facebook/docusaurus',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
    },
    prism: {
      theme: lightCodeTheme,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: {
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
