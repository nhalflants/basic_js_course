const path = require('path')

module.exports = {
  entry: {
    index: ['babel-polyfill', './src/index.js'],
    edit: ['babel-polyfill', './src/edit.js']
  },
  output: {
    path: path.resolve(__dirname, 'public/scripts'),
    filename: '[name]-bundle.js'
  },
  module: {
    rules: [{
      // Define configuration rule to use babel
      // Check if file has .js at the end of the path
      test: /\.js$/,
      // Which files rule should be applied
      exclude: /node_modules/,
      use: {
        // Define which loader should be used
        loader: 'babel-loader',
        options: {
          presets: ['env']
        }
      }
    }]
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'public'),
    publicPath: '/scripts/'
  },
  devtool: 'source-map'
}