const defaultConfig = require('@wordpress/scripts/config/webpack.config');
const path = require('path');
const webpack = require('webpack');

console.log('Using custom webpack config for admin');

module.exports = {
  ...defaultConfig,
  entry: {
    index: path.resolve(process.cwd(), 'admin', 'index.js'),
  },
  output: {
    path: path.resolve(process.cwd(), 'assets', 'admin'),
    filename: '[name].js',
  },
//   plugins: [
//     ...defaultConfig.plugins,
//     new webpack.IgnorePlugin({
//       resourceRegExp: /^\.\/blocks/,
//       contextRegExp: /src$/,
//     }),
//   ],
};