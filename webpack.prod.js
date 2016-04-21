const webpack = require('webpack');
const path = require('path');
const baseConfig = require('./webpack.config');
const pkg = require('./package.json');
const libraryName = 'ReactHighlightedText';

const productionPlugins = [
  new webpack.optimize.DedupePlugin(),
  new webpack.optimize.OccurenceOrderPlugin(),
  new webpack.optimize.UglifyJsPlugin(),
];

module.exports = Object.assign({}, baseConfig, {
  entry: path.resolve(__dirname, './src/index'),
  output: {
    libraryTarget: 'umd',
    library: 'ReactHighlightedText',
    path: './dist/',
    filename: 'ReactHighlightedText' + '.js'
  },
  externals: [
    {
      'react-dom': {
        root: 'ReactDOM',
        commonjs2: 'react-dom',
        commonjs: 'react-dom',
        amd: 'react-dom'
      }
    },
    {
      'react': {
        root: 'React',
        commonjs2: 'react',
        commonjs: 'react',
        amd: 'react'
      }
    },
  ],
  node: { Buffer: false },
  plugins: productionPlugins,
});
