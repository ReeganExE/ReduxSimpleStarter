const webpack = require('webpack');
const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: [
    './src/index.js'
  ],
  output: {
    path: path.join(__dirname, 'build'),
    publicPath: '/',
    filename: 'app.js'
  },
  module: {
    rules: [{
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      loader: [
        'babel-loader'
      ],
    }]
  },
  resolve: {
  },
  plugins: [
      new webpack.DefinePlugin({
        'process.env': {
          'NODE_ENV': JSON.stringify('production')
        }
      }),
      new webpack.LoaderOptionsPlugin({
          minimize: true,
          debug: false
      }),
      new webpack.optimize.UglifyJsPlugin({
          beautify: false,
          mangle: {
              screw_ie8: true,
              keep_fnames: false
          },
          compress: {
              screw_ie8: true
          },
          comments: false
      }),
       new CopyWebpackPlugin([
        {
          from: path.join(__dirname, 'index.html')
        },
        {
          from: path.join(__dirname, 'style', 'style.css'),
          to: 'style'
        }
      ])

  ],
  devtool: 'nosources-source-map'
};
