const baseConfig = require('./webpack.base.js');
const pkg = require('../package.json');
const libraryName = 'ReactHighlightedText';

module.exports = Object.assign({}, baseConfig, {
  output: Object.assign(baseConfig.output, {
    filename: `${libraryName}-v${pkg.version}.js`,
    library: `${libraryName}`,
  }),
});
