const path = require('path');
const defaultConfig = require('@wordpress/scripts/config/webpack.config');
const { readdirSync } = require('fs');

// Function to get all block folders
const getBlockFolders = () => {
    const blocksPath = path.resolve(process.cwd(), 'src', 'blocks');
    return readdirSync(blocksPath, { withFileTypes: true })
        .filter(dirent => dirent.isDirectory())
        .map(dirent => dirent.name);
};

// Generate entry points for each block
const blockEntries = getBlockFolders().reduce((entries, folder) => {
    entries[folder] = path.resolve(process.cwd(), 'src', 'blocks', folder, 'index.js');
    return entries;
}, {});

module.exports = {
    ...defaultConfig,
    entry: blockEntries,
    output: {
        path: path.resolve(process.cwd(), 'build'),
        filename: '[name]/index.js',
    },
    resolve: {
        ...defaultConfig.resolve,
        alias: {
            ...defaultConfig.resolve.alias,
            '@Controls': path.resolve(process.cwd(), 'controls'),
            '@Utils': path.resolve(process.cwd(), 'utils'),
        },
    },
    module: {
        ...defaultConfig.module,
        rules: [
            ...defaultConfig.module.rules,
            {
                test: /\.svg$/,
                use: ['@svgr/webpack', 'url-loader'],
            },
        ],
    },
};