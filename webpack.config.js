'use strict';

const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const loaders = require('./webpack/loaders');
const packageName = 'ReactHighlightedText';
const exampleAppEntries = ['./examples/index.tsx'];

const entry = process.env.NODE_ENV === 'production' ?
  './src/index.tsx' :
  {
    app: exampleAppEntries,
    vendor: [
      'react'
    ]
  };

const externals =
  process.env.NODE_ENV === 'production' ? {
    'react': 'react',
  } : [];

const basePlugins = [
  new webpack.DefinePlugin({
    __DEV__: process.env.NODE_ENV !== 'production',
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
  }),
];

const examplePlugins = [
  new HtmlWebpackPlugin({
    template: './examples/index.html',
    inject: 'body'
  }),
  new webpack.NoErrorsPlugin(),
  new webpack.optimize.CommonsChunkPlugin('vendor', '[name].[hash].js'),
];

const prodPlugins = [
  new webpack.optimize.UglifyJsPlugin({
    compress: {
      warnings: false
    }
  }),
  new webpack.optimize.DedupePlugin(),
  new webpack.optimize.OccurenceOrderPlugin(),
];

const plugins = basePlugins
  .concat(process.env.NODE_ENV === 'production' ? prodPlugins : [])
  .concat(process.env.NODE_ENV === 'development' ? examplePlugins : []);

const devtool = () => {
  switch(process.env.NODE_ENV) {
    case 'production': 'cheap-module-source-map';
    default: 'source-map';
  }
}

const devOutput = {
  path: path.join(__dirname, 'dist'),
  filename: '[name].[hash].js',
  publicPath: '/',
  sourceMapFilename: '[name].[hash].js.map',
  chunkFilename: '[id].chunk.js'
};

const prodOutput = {
  path: path.join(__dirname, 'dist'),
  filename: `${packageName}.js`,
  pathinfo: true,
  sourcePrefix: '',
  libraryTarget: "umd",
};

const output = () => process.env.NODE_ENV === 'production' ? prodOutput : devOutput;

module.exports = {
  entry,
  externals,
  output: output(),
  devtool: devtool(),
  resolve: {
    extensions: ['', '.webpack.js', '.web.js', '.tsx', '.ts', '.js']
  },
  plugins,
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
