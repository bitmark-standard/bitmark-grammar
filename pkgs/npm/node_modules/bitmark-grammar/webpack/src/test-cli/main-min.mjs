/*
 *  main.js
 *
 *
 *
 *
 *  process-direction
 *
 *  setvalue:
 *      1. capture the text starting after the <setvalue> and upto before next tag appears.
 *      2. concatnate all lines and remove \ before newline.
 *      3. split by the assign op =, :=, ?=, !=, +=, ::=
 *      4. Get three parts lhs assign-op rhs
 *   aliases: [
 *	{"lhs": "CC", "op":":=", "rhs": "g++"},
 *	("lhs": "CFLAGS", "op": "=", "rhs": "-c -Wall"},
 *       ...
 *   ],
 *
 *
 *
 */
import fs from 'fs';
import process from 'process';
import now from 'performance-now';
import {CMarkupGenerator} from '../../common/markup.min.mjs';
import '../../common/string_helpers.mjs';
import {MarkupTags} from '../../common/MarkupTags.mjs';




var __main__ = function(filepath, query, debug, trace, querystar, suggest, rule) {
  Error.stackTraceLimit = 100;
  
  var dbg = false;
  let text, opt = {}
  
  if (typeof debug !== 'undefined')
    dbg = debug;
  
  if (fs.existsSync(filepath))
    text = fs.readFileSync(filepath, 'utf8');
  else
    text = filepath;

  opt = {
    language: 'modkit',  // for now “C” or “C++”,
    tags: MarkupTags,
    source: '',
    prefix: '',
    startrule: rule,  //'snippet-atomic', 
    errorhandling: suggest ? 'suggest' : 'isolate', 
  }
  console.log(`---Processing--- ${filepath} by ${opt.startrule}`)

  var cmg = new CMarkupGenerator(opt, debug, trace);

  let r = ''

  let t0=0, t1=0, t2=0
  t0 = now()
  
  var [err, alt] = cmg.__init__(text, opt.startrule)
  if (err)
    throw err

  t1 = now()
  console.log(`__init__=${t1-t0}`);
  console.log(`~~~~~~~~~~~~~~~~~~~~`)

  if (1) {
    let result;
    t0 = now()
    if (querystar) 
      result = cmg.query(null, "*")   //"*:not(sp):not(tab):not(newline)")
    else
      result = cmg.query(null, "code,statement,expression,open-paren,close-paren,comment,error,em")
    console.log(`*** StartRule=${opt.startrule}, Result from QUERY=\n${result}`)
    t1 = now()
    console.log(`First query=${t1-t0}`);
  }
  else {
    console.log(`__init__ returned error ${err}`)  // error messages
    console.log(alt)  // error markup
  }
  return 'no results';
};

var myArgs = process.argv.slice(0, process.argv.length)
console.log(myArgs);
var debug = false
var trace = false
var xml = false
var query = 'code,statement'
var lang_ext = '.mkl'
var querystar = true;
var suggest = false;
var startrule = 'code';

if (3 < myArgs.length) {
  for (let i=2; i<myArgs.length; i++) {
    if (myArgs[i] === '--debug')
      debug = true
    if (myArgs[i] === '--diff')
      diff = true
    if (myArgs[i] === '--trace')
      trace = true
    if (myArgs[i] === '--symmap')
      symmap = true
    if (myArgs[i] === '--markup')
      markup = true
    if (myArgs[i] === '--star')
      querystar = true
    if (myArgs[i] === '--suggest')
      suggest = true
    if (myArgs[i] === '--stmt')
      startrule = 'statement';
   
  }
}

if (3 <= myArgs.length) {
  if (myArgs[2].endsWith('.mkl')|| myArgs[2].endsWith('.io')) {
    __main__(myArgs[2], query, debug, trace, querystar, suggest, startrule);
  }
  else {
    let stat = fs.statSync(myArgs[2])
    if (stat.isDirectory()) {
      let dir = myArgs[2]
      // iterate over all .c files in the dicrectory
      fs.readdir(dir, (err, files) => {
	files.forEach(file => {
	  if (file.endsWith(lang_ext)) {
	    console.log(file)
	    __main__(dir+'/'+file, debug, trace, querystar)
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


