const defaultConfig = require( '@wordpress/scripts/config/webpack.config' );
const path = require( 'path' );

module.exports = {
	...defaultConfig,
	resolve: {
		alias: {
			...defaultConfig.resolve.alias,
            '@Config': path.resolve(__dirname, 'src/config/'),
            '@Components': path.resolve(__dirname, 'src/components/'),
            '@Blocks': path.resolve(__dirname, 'src/blocks/'),
            '@Store': path.resolve(__dirname, 'src/store/'),
		},
	},
};
