const webpack = require('webpack');
const path = require('path');
const baseConfig = require('./webpack.config');

module.exports = Object.assign({}, baseConfig, {
  entry: './examples/index.tsx',
  devServer: {
    contentBase: './examples/',
    stats: { colors: true },
    hot: true,
    inline: true,
  },
  output: 'bundle.js',
  devtool: 'cheap-module-inline-source-map',
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
});