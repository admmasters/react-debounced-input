module.exports = {
  entry: './src/index.js',
  output: {
    path: './dist',
    pathinfo: true,
    sourcePrefix: '',
    libraryTarget: "umd",
  },
  externals: {
    react: 'react',
  },
  module: {
    loaders: [
      {test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"}
    ]
  }
};