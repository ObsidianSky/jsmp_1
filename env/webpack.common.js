const path = require('path');
const webpack = require('webpack');

module.exports = {
    context: path.resolve(__dirname, '../src'),
    entry: {
        index: './index.js',
        orders: './orders/orders.js',
        contacts: './contacts/contacts.js'
    },
    output: {
        path: path.resolve(__dirname, '../build'),
        filename: '[name].bundle.js',
        publicPath:'/'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [{
                    loader: 'babel-loader',
                    options: { presets: ['es2015', 'es2016'] }
                }]
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
    }
};