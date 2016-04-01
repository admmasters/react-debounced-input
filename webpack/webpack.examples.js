const webpack = require('webpack');
const baseConfig = require('./webpack.base.config.js');

module.exports = Object.assign({}, baseConfig, {
  entry: './examples/index.js',
  devServer: {
    contentBase: './examples/',
    stats: { colors: true },
    hot: true,
    inline: true,
  },
  output: Object.assign(baseConfig.output, {
    path: './examples/',
    filename: 'bundle.js',
    libraryTarget: 'var',
  }),
  externals: {},
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
});
