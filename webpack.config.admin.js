const defaultConfig = require('@wordpress/scripts/config/webpack.config');
const DependencyExtractionWebpackPlugin = require('@wordpress/dependency-extraction-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const path = require('path');

module.exports = {
	...defaultConfig,
	resolve: {
		alias: {
			...defaultConfig.resolve.alias,
			'@Controls': path.resolve(__dirname, 'blocks-config/fb-controls/'),
			'@Components': path.resolve(__dirname, 'src/components/'),
			'@Config': path.resolve(__dirname, 'src/config/'),
			'@Utils': path.resolve(__dirname, 'src/utils/'),
			'@Blocks': path.resolve(__dirname, 'src/blocks/'),
			'@Store': path.resolve(__dirname, 'src/store/'),
			'@Constants': path.resolve(__dirname, 'src/fbConstants/'),
			'@Attributes': path.resolve(__dirname, 'blocks-config/blocks-attributes/'),
		},
	},
	entry: {
		index: path.resolve(process.cwd(), 'admin', 'index.js'),
		dynamicContent: path.resolve(process.cwd(), 'admin', 'dynamic-content', 'index.js'),
		sidebar: path.resolve(process.cwd(), 'admin', 'sidebar', 'index.js'),
		tlibrary:path.resolve(process.cwd(), 'admin', 'template-library', 'index.js'),
		quickAccess:path.resolve(process.cwd(), 'admin', 'quick-sidebar', 'index.js'),
		blockRecovery: path.resolve(process.cwd(), 'admin', 'block-recovery', 'index.js'),
		copyPasteStyle: path.resolve(process.cwd(), 'admin', 'copy-paste', 'index.js'),
		highlightColor: path.resolve(process.cwd(), 'admin', 'highlight-color', 'index.js'),

	},
	output: {
		path: path.resolve(process.cwd(), 'assets', 'admin'),
		filename: '[name].js',
	},
	plugins: [
		new DependencyExtractionWebpackPlugin(),
		new MiniCssExtractPlugin
	],
};
