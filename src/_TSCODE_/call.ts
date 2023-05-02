/*
 * call-test.js  test main
 *
 * Usage:
 *  $ node main-ts.js ../tests/assets/serkb2.txt
 *
 *
 *
 *
 */
import * as fs from 'fs';
import * as process from 'process';
import * as parser from './index';


let __main__ = function(filepath: string,
			trace: boolean,
			debug: boolean,
			bit: string|null) {
  let dbg = false;
  let text;
  
  if (typeof debug !== 'undefined')
    dbg = debug;
  
  if (fs.existsSync(filepath))
    text = fs.readFileSync(filepath, 'utf8');
  else
    text = filepath;

  let parser_options = {trace: trace, debug: debug, need_error_report: false};
  let bitmark = new parser.BitmarkParser(text, parser_options, bit);

  try {
    let json = bitmark.parse();
    if (json)
      console.log(json);
  }
  catch(e) {
    console.error(e);
  }
}

let myArgs:string[] = process.argv.slice(0, process.argv.length)
let debug:boolean = false;
let trace:boolean = false;
let bit:string|null = null;
const LANG_EXT = '.bit';


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
	  if (file.endsWith(LANG_EXT)) {
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
  __main__('', trace, debug, bit)    
}

