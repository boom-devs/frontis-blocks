// const defaultConfig = require( '@wordpress/scripts/config/webpack.config' );
// const path = require( 'path' );
//
// module.exports = {
// 	...defaultConfig,
// 	resolve: {
// 		alias: {
// 			...defaultConfig.resolve.alias,
//             '@Controls': path.resolve(__dirname, 'blocks-config/fb-controls/'),
//             '@Components': path.resolve(__dirname, 'src/components/'),
//             '@Config': path.resolve(__dirname, 'src/config/'),
//             '@Utils': path.resolve(__dirname, 'src/utils/'),
//             '@Blocks': path.resolve(__dirname, 'src/blocks/'),
//             '@Store': path.resolve(__dirname, 'src/store/'),
//             '@Attributes': path.resolve(__dirname, 'blocks-config/blocks-attributes/'),
// 		},
// 	},
// };

const defaultConfig = require('@wordpress/scripts/config/webpack.config');
const path = require('path');
const glob = require('glob');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const fs = require('fs');

class CombineFilesPlugin {
	apply(compiler) {
		compiler.hooks.afterEmit.tapAsync('CombineFilesPlugin', (compilation, callback) => {
			console.log('Combining files after build...');
			const jsFiles = glob.sync('**/index.js', { cwd: path.resolve(__dirname, 'build/blocks') });
			console.log('Found JS Files:', jsFiles);

			if (jsFiles.length > 0) {
				const combinedJs = jsFiles.map((file) => fs.readFileSync(path.resolve(__dirname, 'build/blocks', file), 'utf-8')).join('\n');
				fs.writeFileSync(path.resolve(__dirname, 'build/combined-blocks.js'), combinedJs);
			}

			const jsFilesView = glob.sync('**/view.js', { cwd: path.resolve(__dirname, 'build/blocks') });
			console.log('Found JS Files:', jsFilesView);

			if (jsFilesView.length > 0) {
				const combinedJs = jsFilesView.map((file) => fs.readFileSync(path.resolve(__dirname, 'build/blocks', file), 'utf-8')).join('\n');
				fs.writeFileSync(path.resolve(__dirname, 'build/combined-view-blocks.js'), combinedJs);
			}

			const cssFiles = glob.sync('**/style-index.css', { cwd: path.resolve(__dirname, 'build/blocks') });
			console.log('Found CSS Files:', cssFiles);

			if (cssFiles.length > 0) {
				const combinedCss = cssFiles.map((file) => fs.readFileSync(path.resolve(__dirname, 'build/blocks', file), 'utf-8')).join('\n');
				fs.writeFileSync(path.resolve(__dirname, 'build/style-combined.css'), combinedCss);
			}

			const indexCssFiles = glob.sync('**/index.css', { cwd: path.resolve(__dirname, 'build/blocks') });
			console.log('Found CSS Files:', indexCssFiles);

			if (indexCssFiles.length > 0) {
				const indexCombinedCss = indexCssFiles.map((file) => fs.readFileSync(path.resolve(__dirname, 'build/blocks', file), 'utf-8')).join('\n');
				fs.writeFileSync(path.resolve(__dirname, 'build/index-combined.css'), indexCombinedCss);
			}

			callback();
		});
	}
}

module.exports = {
	...defaultConfig,
	output: {
		...defaultConfig.output,
		filename: '[name].js',
		path: path.resolve(__dirname, 'build'),
	},
	resolve: {
		alias: {
			...defaultConfig.resolve.alias,
			'@Controls': path.resolve(__dirname, 'blocks-config/fb-controls/'),
			'@Components': path.resolve(__dirname, 'src/components/'),
			'@Config': path.resolve(__dirname, 'src/config/'),
			'@Utils': path.resolve(__dirname, 'src/utils/'),
			'@Blocks': path.resolve(__dirname, 'src/blocks/'),
			'@Store': path.resolve(__dirname, 'src/store/'),
			'@Attributes': path.resolve(__dirname, 'blocks-config/blocks-attributes/'),
		},
	},
	plugins: [
		new CleanWebpackPlugin(),
		...defaultConfig.plugins,
		new MiniCssExtractPlugin({ filename: '[name].css' }),
		new CombineFilesPlugin(),
	],
	optimization: {
		...defaultConfig.optimization,
		minimize: true,
	},
};
