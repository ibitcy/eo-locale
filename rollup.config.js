import path from 'path';
import copy from 'rollup-plugin-copy-glob';
import { terser } from 'rollup-plugin-terser';
import typescript from 'rollup-plugin-typescript2';

export default [
  {
    input: path.resolve(__dirname, 'src/index.ts'),
    output: [
      {
        file: path.resolve(__dirname, 'dist/index.js'),
        format: 'cjs',
      },
      {
        file: path.resolve(__dirname, 'dist/index.es.js'),
        format: 'es',
      },
    ],
    external: ['react', 'react-dom/server', '@eo-locale/core'],
    plugins: [
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
      copy([
        {
          files: path.resolve(__dirname, 'src/**/*.js.flow'),
          dest: path.resolve(__dirname, 'dist'),
        },
      ]),
    ],
  },
];
