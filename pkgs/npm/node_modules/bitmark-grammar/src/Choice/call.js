/*
 * call-cloze.js  test main
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
let parser = require('./index.js');



let __main__ = function(filepath, trace, debug) {
  let dbg = false;
  if (typeof debug !== 'undefined')
    dbg = debug;
  
  if (fs.existsSync(filepath))
    text = fs.readFileSync(filepath, 'utf8');
  else
    text = filepath;
  try {
    options = {
      trace: trace,
      debug: debug,
    };
    let pa = new parser.BitmarkParser(text, options);
    let json = pa.parse();
    if (json)
      console.log(json);
  }
  catch(e) {
    console.error(e);
  }
}

let myArgs = process.argv.slice(0, process.argv.length)
let debug = false
let trace = false

if (3 < myArgs.length) {
  for (let i=2; i<myArgs.length; i++) {
    if (myArgs[i] === '--debug')
      debug = true
    if (myArgs[i] === '--trace')
      trace = true
  }
}

if (3 <= myArgs.length) {
  if (myArgs[2].endsWith('.txt') || myArgs[2].endsWith('.bit')) {
    __main__(myArgs[2], trace, debug);
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
	    __main__(dir+'/'+file, trace, debug);
	  }
	})
      })
    }
    else
      console.log('bad input file name')
  }
}
else {
  __main__(null, debug)    
}

