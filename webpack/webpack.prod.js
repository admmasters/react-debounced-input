const webpack = require('webpack');
const baseConfig = require('./webpack.base.js');
const pkg = require('../package.json');
const libraryName = 'ReactHighlightedText';

const productionPlugins = [
  new webpack.optimize.DedupePlugin(),
  new webpack.optimize.OccurenceOrderPlugin(),
  new webpack.optimize.UglifyJsPlugin(),
];

module.exports = Object.assign({}, baseConfig, {
  output: Object.assign(baseConfig.output, {
    filename: `${libraryName}-v${pkg.version}.min.js`,
    library: `${libraryName}`,
  }),
  plugins: productionPlugins,
});
