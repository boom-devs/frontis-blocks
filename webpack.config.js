const defaultConfig = require('@wordpress/scripts/config/webpack.config');
const path = require('path');
const { spawn } = require('child_process');


class FBRunAdditionalProcess {
    apply(compiler) {
        compiler.hooks.afterEmit.tapAsync('FBRunAdditionalProcess', (compilation, callback) => {
            spawn(
                /^win/.test(process.platform) ? 'npm-run-all.cmd' : 'npm-run-all',
                ['--sequential', 'build:sass', 'build:placeholder'],
                { stdio: 'inherit' }
            );
            callback();
        });
    }
}

const wp_rules = defaultConfig.module.rules.filter(function (item) {
    if (String(item.test) === String(/\.jsx?$/)) {
        return true;
    }

    if (String(item.test) === String(/\.(sc|sa)ss$/)) {
        item.exclude = [/node_modules/, /editor/];
        return true;
    }
    return false;
});

module.exports = {
    ...defaultConfig,
    plugins: [
        ...defaultConfig.plugins,
        // new FBRunAdditionalProcess(),
    ],
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
            // '@Attributes': path.resolve(__dirname, 'blocks-config/blocks-attributes/'),
            '@Store': path.resolve(__dirname, 'src/store/'),
        },
    },
    module: {
        rules: [
            ...wp_rules,
            {
                test: /\.(scss|css)$/,
                exclude: [/node_modules/, /style/],
                use: [
                    {
                        loader: 'style-loader',
                        options: {
                            injectType: 'lazySingletonStyleTag',
                            attributes: { id: 'fb-editor-styles' },
                        },
                    },
                    'css-loader',
                    'sass-loader',
                ],
            },
        ],
    },
    output: {
        ...defaultConfig.output,
        path: path.resolve(__dirname, 'build'),
    },
};