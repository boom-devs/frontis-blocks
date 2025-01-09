const defaultConfig = require('@wordpress/scripts/config/webpack.config');
const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
	...defaultConfig,
	entry: {
		blocks: path.resolve(__dirname, 'src/blocks.js'),
	},
	resolve: {
		alias: {
			...defaultConfig.resolve.alias,
			'@Components': path.resolve(__dirname, 'src/components/'),
			'@Config': path.resolve(__dirname, 'src/config/'),
			'@Utils': path.resolve(__dirname, 'src/utils/'),
			'@Blocks': path.resolve(__dirname, 'src/blocks/'),
			'@Store': path.resolve(__dirname, 'src/store/'),
			'@Constants': path.resolve(__dirname, 'src/fbConstants/'),
		},
	},
	output: {
		...defaultConfig.output,
		path: path.resolve(__dirname, 'dist'),
	},
	optimization: {
		minimize: true, // Enables minification
		minimizer: [
			new TerserPlugin({
				terserOptions: {
					compress: {
						drop_console: true, // Removes console logs in production
					},
				},
			}),
		],
	},
};
