import pkg from './package.json';

export default {
  title: pkg.name,
  description: pkg.description,
  base: `/${pkg.name}/`,
  version: pkg.version,
  propsParser: false,
  hashRouter: true,
  typescript: true,
  themeConfig: {
    colors: {
      primary: '#000000',
    },
  },
}
