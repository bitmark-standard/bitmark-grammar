// Webpack is used to bundle all of the various JS dependency files into one that the browser can easily load
//const ClosureCompiler = require('google-closure-compiler-js');
//const webpack = require('webpack/lib/webpack.js');
//const ClosurePlugin = require('closure-webpack-plugin');
const ClosureCompilerPlugin = require('webpack-closure-compiler');
 
const path = require('path');

module.exports = {
  entry: '../src/index.js',
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'bitmark.bundle.js'
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
    new ClosureCompilerPlugin({
      compiler: {
        language_in: 'ECMASCRIPT_2015',
        language_out: 'ECMASCRIPT_2015',
        compilation_level: 'ADVANCED'
      },
      concurrency: 3,
    })
  ]
};

