// Webpack is used to bundle all of the various JS dependency files into one that the browser can easily load
//const ClosureCompiler = require('google-closure-compiler-js');
//const webpack = require('webpack/lib/webpack.js');
//const ClosurePlugin = require('closure-webpack-plugin');
//import { ClosureCompilerPlugin } from 'webpack-closure-compiler';
//import path from 'path';
const process = require('process');
const ClosureCompilerPlugin = require('webpack-closure-compiler');
const path = require('path');

let BITMARK_BUNDLE_VERSION=process.env.BITMARK_BUNDLE_VERSION;


module.exports = {
  entry: '../webpack/call.mjs',
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: `bitmark.bundle.${BITMARK_BUNDLE_VERSION}.es6.js`
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
        language_in: 'ECMASCRIPT6',
        language_out: 'ECMASCRIPT6',
        compilation_level: 'ADVANCED'
      },
      concurrency: 3,
    })
  ]
};

