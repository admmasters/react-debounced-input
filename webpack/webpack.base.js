module.exports = {
  entry: './src/index.js',
  output: {
    path: './dist',
    pathinfo: true,
    sourcePrefix: '',
    libraryTarget: 'umd',
  },
  externals: {
    react: 'react',
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
  module: {
    loaders: [
      { test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel-loader' },
      { test: /\.css$/, loader: 'style-loader!css-loader' },
    ],
  },
};
