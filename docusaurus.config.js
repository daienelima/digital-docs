// @ts-check
import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Digital Docs',
  tagline: 'Anotações sobre tecnologia',
  favicon: 'img/favicon.ico',
  url: 'https://daienelima.github.io',
  baseUrl: '/digital-docs/',
  organizationName: 'daienelima',
  projectName: 'digital-docs',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  i18n: {
    defaultLocale: 'pt',
    locales: ['pt'],
  },
  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: {
          showReadingTime: true,
          routeBasePath: 'blog',
          blogTitle: '📚 Diário de Bordo',
          blogDescription: 'Anotações, reflexões e aprendizados de uma dev em jornada.',
          postsPerPage: 5,
          authorsMapPath: 'blog/authors.yml',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'Digital Docs',
      logo: {
        src: 'img/logo.svg',
      },
      items: [
        { type: 'docSidebar', sidebarId: 'tutorialSidebar', position: 'left', label: 'Anotações' },
        { to: '/blog', label: 'Blog', position: 'left' },
        { href: 'https://github.com/daienelima/', label: 'GitHub', position: 'right' },
      ],
    },
    footer: {
      style: 'dark',
      links: [],
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['java']
    },
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: false,
      respectPrefersColorScheme: false,
    },
  },
};
export default config;