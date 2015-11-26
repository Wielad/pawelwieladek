var webpack = require('webpack');
var path = require('path');
var Clean = require('clean-webpack-plugin');

module.exports = {
  entry: path.join(__dirname, 'src/scripts/main.js'),
  output: {
    path: path.join(__dirname, 'public/dist'),
    publicPath: 'dist/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /.js?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        loaders: ['style', 'css', 'sass']
      },
      {
        test: /\.(png|jpg|gif)$/,
        exclude: /node_modules/,
        loader: 'url?limit=10000'
      },
      {
        test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
        loader: "url?limit=10000&mimetype=application/font-woff"
      }, {
        test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
        loader: "url?limit=10000&mimetype=application/font-woff"
      }, {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        loader: "url?limit=10000&mimetype=application/octet-stream"
      }, {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        loader: "file"
      }, {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        loader: "url?limit=10000&mimetype=image/svg+xml"
      }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, './public/')
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new Clean(['./public/dist'])
  ]
};
