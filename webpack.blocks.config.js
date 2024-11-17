const path = require('path');
const glob = require('glob');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const DependencyExtractionWebpackPlugin = require('@wordpress/dependency-extraction-webpack-plugin');

// Get all block entry points
const blockEntries = glob.sync('./build/blocks/*/index.js').reduce((entries, path) => {
    entries.blocks = entries.blocks || [];
    entries.blocks.push(path);
    return entries;
}, {});

// Get all editor styles
const editorStyles = glob.sync('./build/blocks/*/index.css');

// Get all frontend styles
const frontendStyles = glob.sync('./build/blocks/*/style-index.css');

module.exports = {
    entry: {
        blocks: blockEntries.blocks,
        editor: editorStyles,
        'style-blocks': frontendStyles
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                }
            },
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader'
                ]
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].css'
        }),
        new DependencyExtractionWebpackPlugin()
    ]
};
