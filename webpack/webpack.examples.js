const webpack = require('webpack');
const baseConfig = require('./webpack.base.js');

module.exports = Object.assign({}, baseConfig, {
  entry: './examples/index',
  devServer: {
    contentBase: './examples/',
    stats: { colors: true },
    hot: true,
    inline: true,
  },
  devtool: 'cheap-module-inline-source-map',
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
