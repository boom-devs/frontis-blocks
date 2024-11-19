const defaultConfig = require( '@wordpress/scripts/config/webpack.config' );
const path = require( 'path' );

module.exports = {
	...defaultConfig,
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
		path: path.resolve(__dirname, 'dist'),
		filename: '[name].js'
	}
};
