const defaultConfig = require('@wordpress/scripts/config/webpack.config');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

const wp_rules = defaultConfig.module.rules.map((rule) => {
    // Handle .jsx? files
    if (rule.test && rule.test.toString().includes('jsx')) {
        return rule;
    }

    // Modify scss/sass rules to exclude specific directories
    if (rule.test && rule.test.toString().includes('scss')) {
        return {
            ...rule,
            exclude: [/node_modules/, /editor/],
        };
    }

    return rule;
});

module.exports = {
    ...defaultConfig,
    entry: {
        blocks: path.resolve(__dirname, 'src/blocks.js'),
    },
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
            filename: '[name].css',
        }),
    ],
    output: {
        ...defaultConfig.output,
        path: path.resolve(__dirname, 'build'),
    },
};
