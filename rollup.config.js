import { terser } from 'rollup-plugin-terser';
import typescript from 'rollup-plugin-typescript2';

const plugins = [
	typescript(),
	terser({
		toplevel: true,
		compress: {
			passes: 3,
			pure_getters: true,
			unsafe: true,
		},
	}),
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
		external: ['react', 'react-dom/server'],
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
