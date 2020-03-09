module.exports = {
  title: 'eo-locale',
  tagline: 'Elegant lightweight internationalization library',
  url: 'https://ibitcy.github.io/eo-locale/',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'ibitcy', // Usually your GitHub org/user name.
  projectName: 'eo-locale', // Usually your repo name.
  themeConfig: {
    sidebarCollapsible: false,
    navbar: {
      title: 'eo-locale',
      logo: {
        alt: 'eo-locale',
        src: 'img/logo.svg',
      },
      links: [
        {to: 'docs/React', label: 'Docs', position: 'left'},
        {to: 'blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/ibitcy/eo-locale',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      // links: [
      //   {
      //     title: 'Docs',
      //     items: [
      //       {
      //         label: 'Style Guide',
      //         to: 'docs/doc1',
      //       },
      //       {
      //         label: 'Second Doc',
      //         to: 'docs/doc2',
      //       },
      //     ],
      //   },
      // ],
      copyright: `Copyright © ${new Date().getFullYear()}`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
