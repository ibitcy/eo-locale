import { terser } from 'rollup-plugin-terser';
import typescript from 'rollup-plugin-typescript2';

const plugins = [
	typescript(),
	terser(),
];

export default [
	{
		input: './src/index.ts',
		output: [
			{
				file: './dist/index.js',
				format: 'cjs',
			},
		],
		external: ['react', 'react-dom/server', 'intl-messageformat'],
		plugins,
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
		plugins,
	},
];
