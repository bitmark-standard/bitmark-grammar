/*
 * index.js 
 *
 * Usage:
 *  $ node main-ts.js ../tests/assets/serkb2.txt
 *
 *
 *
 *
 */
let fs = require('fs');
let process = require('process');
let now = require('performance-now');

let parser = require('./src/index.js');


exports.parse = function(filepath_or_text){

  if (fs.existsSync(filepath_or_text))
    bittext = fs.readFileSync(filepath_or_text, 'utf8');
  else
    bittext = filepath_or_text;

  options = {
    trace: false,
    debug: false,
    need_error_report: false,
  };
  let bitmark = new parser.BitmarkParser(bittext, options);
  // Returns JSON
  return bitmark.parse();
};
