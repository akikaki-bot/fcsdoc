// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'FCS Documentation',
  tagline: 'とてもみやすい',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://tanaka.fcs-morishio.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'akikaki-bot', // Usually your GitHub org/user name.
  projectName: 'bunkadoc', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
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
      announcementBar: {
        id: "announcementBar_1",
        content: `✨ RESTAPI 採用でもっと高速化！`,
      },
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'FestivalComprehensiveSystem',
        items: [
          {
            type: 'docSidebar',
            sidebarId : "tutorialSidebar",
            position: 'left',
            label: 'ホーム',
          },
          {
            type: 'docSidebar',
            sidebarId : "usethings",
            position: 'left',
            label: '使ってみる',
          },
          {
            href: "https://github.com/akikaki-bot/bunkasai",
            position: "right",
            label : "Github"
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'ドキュメント',
            items: [
              {
                label: 'FCSについての概要',
                to: '/docs/intro',
              },
              {
                label: 'FCS開発者ポータル',
                to: '/docs/api/intro',
              },
            ],
          },
          {
            title: 'FCSを使ってみる',
            items: [
              {
                label: '使用方法',
                to: '/docs/howtosomething/intro',
              },
            ],
          },
          {
            title: '開発者',
            items: [
              {
                label: 'Github',
                to: 'https://github.com/akikaki-bot/',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Akikaki a.k.a. F`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
