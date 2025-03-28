const defaultConfig = require( '@wordpress/scripts/config/webpack.config' );
const path = require( 'path' );
const fs = require( 'fs' );

const blocksDir = path.resolve(__dirname, 'src/blocks');
const blocks = fs.readdirSync(blocksDir).filter((block) =>
	fs.existsSync(path.join(blocksDir, block, 'index.js')) ||
	fs.existsSync(path.join(blocksDir, block, 'view.js'))
);

const entry = {};
blocks.forEach((block) => {
	const blockPath = path.join(blocksDir, block);
	if (fs.existsSync(path.join(blockPath, 'index.js'))) {
		entry[`blocks/${block}/index`] = path.join(blockPath, 'index.js');
	}
	if (fs.existsSync(path.join(blockPath, 'view.js'))) {
		entry[`blocks/${block}/view`] = path.join(blockPath, 'view.js');
	}
});

module.exports = {
	...defaultConfig,
	entry,
	output: {
		path: path.resolve(__dirname, 'build'),
		filename: '[name].js', // এটি `blocks/accordion/index.js` আকারে জেনারেট করবে
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
};
