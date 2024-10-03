<<<<<<< HEAD
// const defaultConfig = require('@wordpress/scripts/config/webpack.config');
// const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// const path = require('path');
// const fs = require('fs');
//
// const blocksDir = path.resolve(__dirname, 'src/blocks');
// const entries = {};
//
// // Read all block directories in src/blocks
// fs.readdirSync(blocksDir).forEach((dir) => {
//     const blockPath = path.join(blocksDir, dir);
//     if (fs.statSync(blockPath).isDirectory()) {
//         // Read all JavaScript files in the block directory
//         const blockFiles = fs.readdirSync(blockPath).filter(file => file.endsWith('.js'));
//
//         // Create an entry for each block file
//         blockFiles.forEach(file => {
//             const blockName = path.basename(blockPath);
//             entries[`blocks/${blockName}/${file}`] = path.join(blockPath, file);
//         });
//     }
// });
//
