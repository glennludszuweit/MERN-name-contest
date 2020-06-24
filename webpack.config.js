const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve('public'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.json/,
        type: 'javascript/auto',
        use: [require.resolve('json-loader')],
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
      },
    ],
  },
};
