// Webpack is used to bundle all of the various JS dependency files into one that the browser can easily load
const path = require('path');



module.exports = {
  entry: '../src/index.js',
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: `bitmark.webpack.bundle.js`
  },
  module: {
    rules: [
      { test: /\.txt$/, use: 'raw-loader' }
    ]
  },
  node: {
    fs: 'empty'
  }
};
