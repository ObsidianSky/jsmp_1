const commonConfig = require('./webpack.common');
const webpackMerge = require('webpack-merge');
const webpack = require('webpack');

process.traceDeprecation = true;

module.exports = webpackMerge(commonConfig, {
    devServer: {
        port: 8082,
        inline: true,
        noInfo: true,
        stats: {
            colors: true
        }
    },
    devtool: 'cheap-module-source-map',
    module: {
        rules: [
            {
                enforce: 'pre',
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'eslint-loader'
            },
            {
                test: /\.(c|sc)ss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: function () {
                                return [
                                    require('postcss-short'),
                                    require('autoprefixer')
                                ];
                            }
                        }
                    },
                    'sass-loader'
                ]
            }
        ]
    },
    plugins: [
        new webpack.LoaderOptionsPlugin({
            debug: true,
            cache: true
        })
    ]
});
