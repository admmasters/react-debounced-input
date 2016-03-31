module.exports = {  
  entry: './index.tsx',
  output: {
    filename: './dist/react-debounced-input.js',
  },
  resolve: {
    extensions: ['', '.webpack.js', '.web.js', '.ts', '.tsx', '.js'],
  },
  externals: {
    "react": "react",
  },
  module: {
    loaders: [
      { test: /\.tsx?$/, loader: 'ts-loader' },
    ]
  }
}