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
    noInfo: true,
    stats: {
      colors: true
    }
  },
  devtool: 'cheap-module-source-map',
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
        test: /\.(c|sa|sc)ss$/,
        use: [
          'style-loader',
          'css-loader',
          {
              loader: 'postcss-loader',
              options: {
                  plugins: function () {
                      return [
                          require('precss'),
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
    new webpack.optimize.CommonsChunkPlugin({
      name: 'common',
      filename: 'common.js',
      minChunks: 2
    }),
    new webpack.optimize.UglifyJsPlugin()
  ],
};