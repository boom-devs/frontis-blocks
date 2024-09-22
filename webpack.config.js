const defaultConfig = require('@wordpress/scripts/config/webpack.config');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');
const fs = require('fs');

const blocksDir = path.resolve(__dirname, 'src/blocks');
const entries = {};

// Read all block directories in src/blocks
fs.readdirSync(blocksDir).forEach((dir) => {
    const blockPath = path.join(blocksDir, dir);
    if (fs.statSync(blockPath).isDirectory()) {
        // Read all JavaScript files in the block directory
        const blockFiles = fs.readdirSync(blockPath).filter(file => file.endsWith('.js'));
        
        // Create an entry for each block file
        blockFiles.forEach(file => {
            const blockName = path.basename(blockPath);
            entries[`blocks/${blockName}/${file}`] = path.join(blockPath, file);
        });
    }
});

module.exports = {
    ...defaultConfig,
    entry: entries, // Use dynamically created entries
    resolve: {
        alias: {
            ...defaultConfig.resolve.alias,
            '@Controls': path.resolve(__dirname, 'blocks-config/fb-controls/'),
            '@Components': path.resolve(__dirname, 'src/components/'),
            '@Utils': path.resolve(__dirname, 'src/utils/'),
            '@Blocks': path.resolve(__dirname, 'src/blocks/'),
            '@Store': path.resolve(__dirname, 'src/store/'),
        },
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader", "sass-loader"]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ["babel-loader"]
            }
        ],
    },
    plugins: [
        ...defaultConfig.plugins,
        new MiniCssExtractPlugin({
            filename: '[name].css', // Keep original CSS filenames in the same folder
        }),
    ],
    output: {
        filename: '[name]',
        path: path.resolve(__dirname, 'build'), // Output all block files in the build/blocks directory
        clean: true, // Clean the output directory before each build
    },
};