import pkg from './package.json';

export default {
  base: `/${pkg.name}/`,
  description: pkg.description,
  dest: '/docs',
  hashRouter: true,
  propsParser: false,
  title: pkg.name,
  typescript: true,
  version: pkg.version,
  themeConfig: {
    colors: {
      primary: '#000000',
    },
  },
}
