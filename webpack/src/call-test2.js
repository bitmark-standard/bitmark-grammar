/*
 * call-test2.js  test main
 *
 * Usage:
 *  $ node main-ts.js ../tests/assets/serkb2.txt
 *
 * ^\[\.(?<type>(?:(?<bit_type>.*?)(?::(?<bit_format>.*?)|))(?:&(?:(?<resource_type>.*?)(?::(?<resource_format>.*?)|))|))\](?<content>[\s\S]*?)(?:(?:$(?![\r\n]))|(?=^\[\..*?\]))
 *
 *
 */
let fs = require('fs');
let process = require('process');
let now = require('performance-now');
let parser = require('./index.js');
let but = require('./bit-utils.js');


let __main__ = function(filepath, trace, debug, bit) {
  let dbg = false;
  let text = null;
 
  if (typeof debug !== 'undefined')
    dbg = debug;
  
  if (fs.existsSync(filepath)) {
    try {
      text = fs.readFileSync(filepath, 'utf8');
    }
    catch(e) {
      console.error(e);
      return;
    }
  }
  else
    text = filepath;
  // Preprocess

  
}

let myArgs = process.argv.slice(0, process.argv.length)
let debug = false;
let trace = false;
let bit = null;


if (3 < myArgs.length) {
  for (let i=2; i<myArgs.length; i++) {
    if (myArgs[i] === '--debug')
      debug = true;
    if (myArgs[i] === '--trace')
      trace = true;
    if (myArgs[i] === '--cloze')
      bit = 'cloze';
    if (myArgs[i] === '--match')
      bit = 'match';
  }
}

if (3 <= myArgs.length) {
  if (myArgs[2].endsWith('.txt') || myArgs[2].endsWith('.bit')) {
    __main__(myArgs[2], trace, debug, bit);
  }
  else {
    let stat = fs.statSync(myArgs[2]);
    if (stat.isDirectory()) {
      let dir = myArgs[2];
      // iterate over all .c files in the dicrectory
      fs.readdir(dir, (err, files) => {
	files.forEach(file => {
	  if (file.endsWith(lang_ext)) {
	    console.log(file);
	    __main__(dir+'/'+file, trace, debug, bit);
	  }
	})
      })
    }
    else
      console.log('bad input file name')
  }
}
else {
  __main__(null, trace, debug, bit)    
}

