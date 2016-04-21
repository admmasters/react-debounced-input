const webpack = require('webpack');
const path = require('path');
const nodeModulesDir = path.resolve(__dirname, 'node_modules');
const loaders = [
  {
    test: /\.tsx?$/,
    loader: 'ts-loader',
    exclude: [nodeModulesDir],
  },
  { test: /\.css$/, loader: 'style!css' },
  { test: /\.scss$/, loaders: ['style', 'css', 'sass'] },
];

module.exports = {
  module: {
    loaders,
  },
  devtool: 'source-map',
  entry: {
    'app': path.resolve(__dirname, './src/index'),
    'vendors': ['react', 'react-dom'],
  },
  output: {
    path: 'dist',
    filename: '[name].js',
  },
  resolve: {
    extensions: ['', '.ts', '.tsx', '.js', '.jsx'],
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js', Infinity),
    new webpack.DefinePlugin({
      'process.env': { NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'development') },
      '__DEV__': process.env.NODE_ENV === 'development' ? 'true' : false,
    })
  ],
};
