const commonConfig = require('./webpack.common');
const webpackMerge = require('webpack-merge');

module.exports = webpackMerge(commonConfig, {
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules|\.spec\.js$/,
                loader: 'istanbul-instrumenter-loader',
                query: {
                    esModules: true
                }
            }
        ]
    }
});
