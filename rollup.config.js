import { terser } from 'rollup-plugin-terser';
import typescript from 'rollup-plugin-typescript2';

export default [
	{
		input: './src/index.ts',
		output: [
			{
				file: './dist/index.js',
				format: 'cjs',
			},
			{
				file: './dist/index.es.js',
				format: 'es',
			},
		],
		external: ['react', 'react-dom/server'],
		plugins: [
			typescript(),
			terser({
				toplevel: true,
				compress: {
					passes: 3,
					pure_getters: true,
					unsafe: true,
				},
			}),
		],
	},
	{
		input: './src/polyfill.ts',
		output: [
			{
				file: './dist/polyfill.js',
				format: 'cjs',
			},
		],
		external: ['intl-locales-supported', 'intl'],
		plugins: [typescript()],
	},
];
