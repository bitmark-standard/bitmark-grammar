// Webpack is used to bundle all of the various JS dependency files into one that the browser can easily load
//const ClosureCompilerPlugin = require('webpack-closure-compiler');
const path = require('path');



module.exports = {
  entry: '../webpack/call.mjs',
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'bitmark.bundle.es6.js'
  },
  module: {
    rules: [
      { test: /\.txt$/, use: 'raw-loader' }
    ]
  },
  node: {
    fs: 'empty'
  },
  plugins: [
  ]
};

