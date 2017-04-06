const commonConfig = require('./webpack.common');
const webpackMerge = require('webpack-merge');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = webpackMerge(commonConfig, {
    module: {
        rules: [
            {
                test: /\.(c|sc)ss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                minimize: true
                            }
                        },
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
                        'resolve-url-loader',
                        {
                            loader: 'sass-loader',
                            query: {
                                sourceMap: true
                            }
                        }
                    ]
                })
            }
        ]
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin(),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'common',
            filename: 'common.js',
            minChunks: 2
        }),
        new ExtractTextPlugin({
            filename: 'style.css'
        })
    ]
});

