const path = require('path');
const webpack = require('webpack');

process.traceDeprecation = true;

module.exports = {
  context: path.resolve(__dirname, './src'),
  entry: {
    index: './index.js',
    orders: './orders/orders.js',
    contacts: './contacts/contacts.js'
  },
  output: {
    path: path.resolve(__dirname, './build'),
    filename: '[name].bundle.js',
    publicPath:'/'
  },
  devServer: {
    port: 8081,
    inline: true,
    contentBase: 'src/',
    noInfo: true
  },
  devtool: 'cheap-module-eval-source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [{
          loader: 'babel-loader',
          options: { presets: ['es2015', 'es2016'] }
        }]
      }
    ]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'common',
      filename: 'common.js',
      minChunks: 2
    })
  ],

}