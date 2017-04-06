const commonConfig = require('./webpack.common');
const webpackMerge = require('webpack-merge');
const path = require('path');

module.exports = webpackMerge(commonConfig, {
    module: {
        rules: [
            {
                test: /\.js$/,
                include: path.resolve(__dirname, '../src'),
                exclude: /node_modules|\.spec\.js$/,
                loader: 'istanbul-instrumenter-loader',
                query: {
                    esModules: true
                }
            },
            {
                test: /\.(c|sc)ss$/,
                loader: 'null-loader'
            }
        ]
    }
});
