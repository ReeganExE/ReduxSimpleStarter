module.exports = {
  entry: [
    './src/index.js'
  ],
  output: {
    path: __dirname,
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
  devServer: {
    host: '0.0.0.0',
    historyApiFallback: true,
    contentBase: './'
  },
  devtool: 'source-map'
};
