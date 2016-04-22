var path = require("path");
var webpack = require("webpack");
var mainConfig = require('./webpack.config');

var config = {
  resolve: {
    extensions: mainConfig.resolve.extensions,
  },
  resolveLoader: mainConfig.resolveLoader,
  devtool: 'inline-source-map',
  externals: {
    'jsdom': 'window',
    'cheerio': 'window',
    'react/lib/ExecutionEnvironment': true
  },
  plugins: [
    new webpack.IgnorePlugin(/ReactContext/),
  ],
  module: {
    loaders: [
      { test: /\.tsx?$/, loader: 'ts-loader', include: path.resolve(__dirname, './src') },
      { test: /\.less$/, loader: 'null-loader' },
      { test: /\.css/, loader: 'null-loader' },
      { test: /\.(jpg|png|jpg|png|woff|eot|ttf|svg|gif)$/, loader: "null-loader" },
      {
        test: /\.json$/,
        loader: 'json'
      }
    ],
    noParse: [
      /node_modules\/sinon\//,
    ]
  }
}

module.exports = config;
