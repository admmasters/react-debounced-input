var webpack = require('webpack');
var pkg = require('./package.json');

module.exports = [
  {
    entry: './src/index.js',
    output: {
      path: './dist',
      pathinfo: true,
      sourcePrefix: '',
      filename: 'ReactDebouncedInput-v' + pkg.version + '.js',
      library: 'ReactDebouncedInput',
      libraryTarget: "umd",
    },
    externals: {
      react: 'react',
    },
    module: {
      loaders: [
        { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"}
      ]
    }
  },
  {
    entry: './src/index.js',
    output: {
      path: './dist',
      filename: 'ReactDebouncedInput-v' + pkg.version + '.min.js',
      library: 'ReactDebouncedInput',
      libraryTarget: "umd"
    },
    plugins:[
      new webpack.optimize.UglifyJsPlugin()
    ],
    externals: {
      react: 'react',
    },
    module: {
      loaders: [
        { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"}
      ]
    }
  }
];