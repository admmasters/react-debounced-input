'use strict';

const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const loaders = require('./webpack/loaders');

const baseAppEntries = [
  './examples/index.tsx',
];

const basePlugins = [
  new webpack.DefinePlugin({
    __DEV__: process.env.NODE_ENV !== 'production',
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
  }),
  new webpack.optimize.CommonsChunkPlugin('vendor', '[name].[hash].js'),
];

const examplePlugins = [
  new HtmlWebpackPlugin({
    template: './examples/index.html',
    inject: 'body'
  }),
  new webpack.NoErrorsPlugin(),
];

const prodPlugins = [
  new webpack.optimize.UglifyJsPlugin({
    compress: {
      warnings: false
    }
  })
];

const plugins = basePlugins
  .concat(process.env.NODE_ENV === 'production' ? prodPlugins : [])
  .concat(process.env.NODE_ENV === 'development' ? examplePlugins : []);

module.exports = {

  entry: {
    app: baseAppEntries,
    vendor: [
      'react',
      'react-dom',
    ]
  },

  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].[hash].js',
    publicPath: '/',
    sourceMapFilename: '[name].[hash].js.map',
    chunkFilename: '[id].chunk.js'
  },

  devtool: 'source-map',

  resolve: {
    extensions: ['', '.webpack.js', '.web.js', '.tsx', '.ts', '.js']
  },

  plugins: plugins,

  module: {
    loaders: [
      loaders.tsx,
      loaders.html,
      loaders.css,
      loaders.svg,
      loaders.eot,
      loaders.woff,
      loaders.woff2,
      loaders.ttf,
    ]
  },

};
