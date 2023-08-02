// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'notlar.im',
  tagline: 'Yazılım, bilgisayar, bisiklet, gezi gibi çeşitli konularda tuttuğum notlarım ve yer imlerim',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://notlar.im',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'bcanata', // Usually your GitHub org/user name.
  projectName: 'notlar.im', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'tr',
    locales: ['tr'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          path: 'notlar',
          routeBasePath: 'notlar',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/bcanata/notlar.im/tree/main/',
        },
        blog: {
          showReadingTime: true,
          blogSidebarTitle: "Tüm Yazılar",
          blogSidebarCount: 'ALL',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/bcanata/notlar.im/tree/main/',
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
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'notlar.im',
        logo: {
          alt: 'notlar.im logosu',
          src: 'img/logo.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Notlar',
          },
          {to: '/blog', label: 'Blog', position: 'left'},

          {to: '/hakkimda', label: 'Hakkımda', position: 'right'},
          {
            href: 'https://github.com/bcanata/notlar.im',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'notlar.im',
            items: [
              {
                label: 'Notlar',
                to: '/notlar/intro',
              },
            ],
          },
          {
            title: 'Sosyal Medya',
            items: [
              {
                label: 'bugracanata.com.tr',
                href: 'https://bugracanata.com.tr',
              },
            ],
          },
          {
            title: 'Daha Fazla',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/bcanata',
              },
            ],
          },
        ],
        copyright: `Tüm hakları saklıdır © ${new Date().getFullYear()} Buğra CANATA. Docusaurus ile yapıldı.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
