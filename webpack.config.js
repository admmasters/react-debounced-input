var webpack = require('webpack');
var pkg = require('./package.json');

var filename = 'ReactHighlightedText';

var externals = {
  react: 'react',
  'react-dom': 'react-dom',
};

var babel = { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"};
var loaders = {
  loaders: [babel]
};

module.exports = [
  {
    entry: './src/index.js',
    output: {
      path: './dist',
      pathinfo: true,
      sourcePrefix: '',
      filename: filename + '-v' + pkg.version + '.js',
      library: filename,
      libraryTarget: "umd",
    },
    externals: externals,
    module: loaders
  },
  {
    entry: './src/index.js',
    output: {
      path: './dist',
      filename: filename + '-v' + pkg.version + '.min.js',
      library: filename,
      libraryTarget: "umd"
    },
    plugins:[
      new webpack.optimize.UglifyJsPlugin()
    ],
    externals: externals,
    module: loaders
  }
];