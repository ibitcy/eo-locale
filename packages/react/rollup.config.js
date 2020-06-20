import path from 'path';
import { terser } from 'rollup-plugin-terser';
import typescript from 'rollup-plugin-typescript2';
import clear from 'rollup-plugin-clear';

export default [
  {
    input: path.resolve(__dirname, 'src/index.tsx'),
    output: [
      {
        file: path.resolve(__dirname, 'lib/index.js'),
        format: 'cjs',
      },
      {
        file: path.resolve(__dirname, 'lib/index.es.js'),
        format: 'es',
      },
    ],
    external: ['react', 'react-dom/server', '@eo-locale/core'],
    plugins: [
      clear({
        targets: [path.resolve(__dirname, 'lib')],
      }),
      typescript(),
      terser({
        toplevel: true,
        compress: {
          passes: 3,
          pure_getters: true,
          unsafe: true,
        },
        output: {
          comments: false,
        },
      }),
    ],
  },
];
