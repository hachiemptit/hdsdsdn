const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

// With JSDoc @type annotations, IDEs can provide config autocompletion
/** @type {import('@docusaurus/types').DocusaurusConfig} */
(module.exports = {
  title: 'VNPT Invoice',
  tagline: 'Hóa đơn điện tử VNPT',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/facebook/docusaurus/edit/main/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/main/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
<<<<<<< HEAD
        title: 'Hóa đơn điện tử VNPT',
        logo: {
          alt: 'VNPT',
          src: 'img/VNPT_Logo.png',
=======
        title: 'VNPT Invoice HDSD',
        logo: {
          alt: 'VNPT Invoice',
          src: 'img/logo.svg',
>>>>>>> 6bf4eb5abfcaa731c476a47eee52a3c909613d96
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Hóa đơn điện tử máy tính tiền',
          },
          {to: '/blog', label: 'Thông báo', position: 'left'},
          {
            href: '#',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Hướng dẫn',
            items: [
              {
<<<<<<< HEAD
                label: 'Hóa đơn điện tử máy tính tiền',
=======
                label: 'Hóa đơn máy tính tiền',
>>>>>>> 6bf4eb5abfcaa731c476a47eee52a3c909613d96
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Liên hệ',
            items: [
              {
                label: 'Stack Overflow',
                href: '#',
              },
              {
                label: 'Discord',
                href: '#',
              },
              {
                label: 'Twitter',
                href: '#',
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
                href: '#',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Ban KHDN - VNPT Vinaphone`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
});
