const path = require('path');
const HtmlPlugin = require('html-webpack-plugin');

module.exports = {
    context: path.resolve(__dirname, '../src'),
    entry: {
        index: './index.js',
        orders: './orders/orders.js',
        contacts: './contacts/contacts.js'
    },
    output: {
        path: path.resolve(__dirname, '../build'),
        filename: '[name].bundle.js'
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
                test: /\.(png|jpe?g|gif|svg)$/i,
                loaders: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192,
                            name: 'images/[hash:6].[ext]?[hash]'
                        }
                    }
                ]
            },
            {
                test: /\.html$/,
                use: [
                    'html-loader'
                ]
            }
        ]
    },
    plugins: [
        new HtmlPlugin({
            inject: 'body',
            filename: 'index.html',
            template: path.resolve(__dirname, '../src/index.html')
        })
    ]
};