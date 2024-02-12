const path = require('path')

module.exports = {
  entry: ['babel-polyfill', './src/index.js'],
  output: {
    path: path.resolve(__dirname, 'public/scripts'),
    filename: 'bundle.js'
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