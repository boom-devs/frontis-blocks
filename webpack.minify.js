const fs = require('fs');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

// Blocks Directory Path
const blocksDir = path.resolve(__dirname, 'build/blocks');

// Dynamically Collect All Files by Type
const collectFiles = (extension) => {
	const files = [];
	fs.readdirSync(blocksDir).forEach((block) => {
		const blockPath = path.join(blocksDir, block);
		if (fs.lstatSync(blockPath).isDirectory()) {
			const filePath = path.join(blockPath, extension);
			if (fs.existsSync(filePath)) {
				files.push(filePath);
			}
		}
	});
	return files;
};

// Webpack Configuration
module.exports = {
	mode: 'production',
	devtool: false, // Disable source maps for production
	entry: {
		'combined-index': collectFiles('index.js'),
		'combined-view': collectFiles('view.js'),
		'combined-index-css': collectFiles('index.css'),
	},
	output: {
		filename: '[name].min.js',
		path: path.resolve(__dirname, 'dist'),
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env'],
					},
				},
			},
			{
				test: /\.css$/,
				use: [MiniCssExtractPlugin.loader, 'css-loader'],
			},
		],
	},
	optimization: {
		minimize: true,
		splitChunks: {
			chunks: 'all',
		},
		minimizer: [
			new TerserPlugin({
				terserOptions: {
					compress: {
						drop_console: true, // Remove console logs
						pure_funcs: ['console.info'], // Remove specific functions
						keep_fargs: false, // Remove unused function arguments
						inline: true, // Inline small functions
					},
					mangle: {
						toplevel: true, // Mangle top-level variables
					},
					output: {
						comments: false, // Remove all comments
					},
				},
				extractComments: false,
			}),
			new CssMinimizerPlugin(),
		],
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename: '[name].min.css',
		}),
	],
};
