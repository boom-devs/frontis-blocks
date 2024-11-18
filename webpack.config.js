const defaultConfig = require('@wordpress/scripts/config/webpack.config');
const path = require('path');
const TerserPlugin = require('terser-webpack-plugin'); // For JS minification

module.exports = {
	...defaultConfig,
	mode: 'production', // Ensure the build is in production mode (enables minification)
	resolve: {
		alias: {
			...defaultConfig.resolve.alias,
			'@Components': path.resolve(__dirname, 'src/components/'),
			'@Config': path.resolve(__dirname, 'src/config/'),
			'@Utils': path.resolve(__dirname, 'src/utils/'),
			'@Blocks': path.resolve(__dirname, 'src/blocks/'),
			'@Store': path.resolve(__dirname, 'src/store/'),
		},
	},
	output: {
		path: path.resolve(__dirname, 'build'),
		filename: '[name].js',
		// sourceMapFilename can be customized if needed, but it's disabled here
	},
	devtool: false, // Disable source maps in production build
	optimization: {
		minimize: true, // Enable minification for JS and CSS
		minimizer: [
			// Use TerserPlugin for JS minification
			new TerserPlugin({
				terserOptions: {
					compress: {
						drop_console: true, // Remove console logs (optional)
					},
				},
			}),
		],
	},
};
