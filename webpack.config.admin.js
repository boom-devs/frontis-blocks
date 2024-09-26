const defaultConfig = require('@wordpress/scripts/config/webpack.config');
const DependencyExtractionWebpackPlugin = require('@wordpress/dependency-extraction-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const path = require('path');
const webpack = require('webpack');

console.log('Using custom webpack config for admin');

module.exports = {
	...defaultConfig,
	entry: {
		index: path.resolve(process.cwd(), 'admin', 'index.js'),
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
