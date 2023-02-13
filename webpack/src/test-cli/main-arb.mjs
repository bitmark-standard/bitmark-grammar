/*
 *  main-arb.js
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
import {CMarkupGenerator} from '../../common/markup.mjs';
import '../../common/string_helpers.mjs';
import jsdiff from 'diff';
import libxmljs from "libxmljs";
import ramda_forEach from '@modkit/ramda-es6/es/forEach.js';
import {MarkupTags} from '../../common/MarkupTags.mjs';

import 'colors';
import jsdom from "jsdom";

let { JSDOM } = jsdom;
let USE_JSDOM = true;
const WRITEXMLFILE = 0;
const mydate = '';


//Error.stackTraceLimit = 5;

let errfiles = [
  '/tmp/validCodeA.mkl',
  '/tmp/validCodeB.mkl',
];

/**
 *
 */
function build_dom_from_xml(xml) {
  let dom = null;
  if (USE_JSDOM)
    dom = new JSDOM(xml);
  else {
    // Clear DOM to start
    //window.document.removeChild(document.documentElement)
    let root = window.document.getElementById('root');
    if (root)
      window.document.removeChild(root.documentElement);
    dom = window.document.createElement('div');  // fake root tag
    dom.setAttribute("id", "root");
    dom.innerHTML = xml;
  }
  return dom;
}

/**/
function getCode(dom) {
  let code;

  if (USE_JSDOM) {
    if (dom) {
      code = dom.window.document.querySelector('code')
      code = code.textContent.replace(/\"(\'[^']*\')\"/g, "\$1");
      code = code.replace(/\/<\//g, '/&lt;/')
	.replace(/\/>\//g, '/&gt;/')
	.replace(/\/&\//g, '/&amp;/')
	.replace(/\/"\//g, '/&quot;/');
      return code;
    }
    else
      return `<code>-----${this.path} Used JSON----</code>`
  }
  else {
    code = dom.querySelector('code')
    // code.innerHTML has all tags
    return code.innerHTML.replace(/<[^>]*>/g, "")
      .replace('&lt;', '<')
      .replace('&gt;', '>')
      .replace('&amp;', '&')
      .replace('&quot;', '"');
    //.replace('"\'','\'').replace('\'"','\'');
  }
}  
/**/
function getElem(dom, elemname) {
  let code;
  if (USE_JSDOM) {
    code = dom.window.document.querySelector(elemname);
    return code.textContent;
  }
  else {
    // Will not support browser dom
  }
}  
function writeXml(filepath, xml) {
  fs.writeFileSync(filepath, xml);
}

/*
 */
function run_diff(filelist, debug) {
  
  var dbg = false;
  let text, opt = {}
  if (typeof debug !== 'undefined')
    dbg = debug;
  opt = {
    language: 'modkit',  // for now “C” or “C++”,
    tags: MarkupTags,
    source: '',
    prefix: '',
    startrule: 'code',  //'snippet-atomic', 
    errorhandling: suggest ? 'suggest' : 'isolate', 
  }
  let get_diff = (filepath) => {

    let orgtext = fs.readFileSync(filepath, 'utf8');
    let cmg = new CMarkupGenerator(opt, false, false);
    let t0=0, t1=0, t2=0;
    t0 = now();
    console.log(`==============WORKING ON ${filepath}===============`);
    console.log('ORGINAL:'+orgtext);
    let [err, alt] = cmg.__init__(orgtext, opt.startrule);
    if (err)
      throw err
    t1 = now()
    console.log(`__init__=${t1-t0}`);
    
    let result;
    t0 = now()
    result = cmg.query(null, '*');
    //console.log(`*** Result from QUERY=\n${result}`)
    
    t1 = now()
    console.log(`Time for the first query=${t1-t0}`);
    console.log(result);
    if (WRITEXMLFILE)
      writeXml(filepath+`.isol.${mydate}xml`, result);

    let dodiff = (result, expect) => {
      // Escape the chars interfere xml.
      //let xmlDoc = libxmljs.parseXmlString(xml);
      let diff = jsdiff.diffChars(result, expect);
      let nongrey = 0;
      diff.forEach(function(part) {
        // green for additions, red for deletions
        // grey for common parts
        let color = part.added ? 'green' : part.removed ? 'red' : 'grey';
        if (color !== 'grey') {
	  console.log(`\n=====Diff Part=====`);	  
	  console.log(part);	  
          nongrey++
	}
        process.stderr.write(part.value[color]);
      });
      console.log(`nongrey=${nongrey}`);
      if (0 < nongrey)  // 2 for green <code> and </code> addition
        throw `There are differences in ${nongrey} for ${filepath}`;
    };
    if (!WRITEXMLFILE) {
      let show_diff = (result) => {
	let dom = build_dom_from_xml(result);
	let text = getCode(dom);
	console.log(`########\n${text}\n########`);
	let expected = fs.readFileSync(filepath, 'utf8');
	dodiff(text, expected);
      };
      show_diff(result);
      
    }
  }; // get_diff
  ramda_forEach(get_diff, filelist);

}




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

run_diff(errfiles, true);
//run_diff(testfiles, true);



