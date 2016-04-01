const webpack = require('webpack');
const baseConfig = require('./webpack.base.config.js');
const pkg = require('../package.json');
const libraryName = 'ReactDebouncedInput';

module.exports = Object.assign({}, baseConfig, {
  output: Object.assign(baseConfig.output, {
    filename: `${libraryName}-v${pkg.version}.min.js`,
    library: `${libraryName}`,
  }),
  plugins: [
    new webpack.optimize.UglifyJsPlugin()
  ],
});