/*
 *  test-all.js
 *
 *  last update: Dec 2, 2020
 */
const R = require('ramda');
require('colors');
const fs = require('fs');
const process = require('process');
const now = require('performance-now');
const parser = require('./index.js');
const Diff = require('diff');


//Error.stackTraceLimit = 5;
const testfiles = [
  
  '../tests/book1.bit',
  '../tests/book2.bit',    
  '../tests/article1.bit',  // had [.cloze] etc in text
  '../tests/article2.bit',
  '../tests/page1.bit',
  '../tests/page2.bit',
  '../tests/assign1.bit',
  //'../tests/botinterview1.bit',  not used
  //'../tests/botinterview2.bit',  not used
  '../tests/chat1.bit',
  '../tests/chat2.bit',  
  '../tests/conversation1.bit',  
  '../tests/cloze.bit', 
  '../tests/cloze2.bit',
  '../tests/cloze3.bit',
  '../tests/cloze4.bit', // Had .chapter
  '../tests/cloze5.bit',
  '../tests/cloze10.bit',
  '../tests/cloze11.bit',
  '../tests/cloze12.bit',
  '../tests/cloze13.bit',
  
  '../tests/cloze-emoji.bit',
  '../tests/cloze-emoji2.bit',
  '../tests/clozeig.bit',  // Ok
  '../tests/clozenmultx.bit', // Ok
  '../tests/clozesg1.bit', // ok
  //'../tests/comment.bit',
  '../tests/corr1.bit',
  '../tests/corr2.bit',
  '../tests/corr3.bit',
  '../tests/docup1.bit',
  '../tests/essay1.bit', 
  '../tests/essay2.bit',
  '../tests/essay3.bit',
  '../tests/essay4.bit',
  '../tests/essay5.bit',
  '../tests/essay6.bit',
  '../tests/essay7.bit',
  '../tests/essay8.bit',
  '../tests/essay9.bit',  
  '../tests/flashcard1.bit',
  '../tests/flashcard2.bit',
  '../tests/flashcard3.bit',
  '../tests/flashcard4.bit',
  '../tests/flashcard-set.bit',
  
  '../tests/interview1.bit',
  ////'../tests/interview2.bit',
  '../tests/interview3.bit',
  '../tests/interview4.bit',
  '../tests/interview100.bit',  
  //'../tests/interview101.bit',  
  '../tests/interview102.bit',  
  '../tests/interview103.bit',  
  '../tests/interview104.bit',  
  '../tests/interview105.bit',  
  //'../tests/interview106.bit',  
  '../tests/interview107.bit',  
  //'../tests/interview108.bit',  
  '../tests/interview109.bit',
  '../tests/interview110.bit',
  '../tests/interview-image1.bit',
  
  '../tests/mark1.bit',
  //'../tests/mark2.bit',  // complex
  '../tests/match1.bit', 
  '../tests/match2.bit', 
  '../tests/match3.bit',
  '../tests/match4.bit',
  //'../tests/match5.bit',
  '../tests/matchsg1.bit',  
  
  '../tests/match-pict1.bit',  // 6/7
  '../tests/match-pict2.bit',  // 6/7
  '../tests/match-audio1.bit',  // 6/7
  '../tests/match-article1.bit',  // 6/7  
  '../tests/match-matrix1.bit',
  '../tests/match-matrix3.bit',
  
  '../tests/multich-1.bit',
  '../tests/multich-1-2.bit',  // has hints
  '../tests/multires-1.bit',
  '../tests/multires-1-2.bit',  // has hints
  
  '../tests/multich1.bit',
  '../tests/multich2.bit', 
  '../tests/multichtx1.bit',
  '../tests/multichtx2.bit',
  '../tests/multichtx3.bit',
  '../tests/multichtx4.bit',
  
  '../tests/multires1.bit',
  '../tests/multires2.bit',
  '../tests/multitxt1.bit',
  '../tests/multitxt2.bit',
  '../tests/multitxt3.bit',
  '../tests/multitxt4.bit',

  '../tests/prepnote1.bit',
  '../tests/rec1.bit',
  '../tests/seq1.bit', 
  '../tests/seq2.bit',
  '../tests/takepic1.bit',

  '../tests/truefalse1.bit',
  '../tests/truefalse2.bit',
  '../tests/truefalse3.bit',
  '../tests/truefalse4.bit',
  '../tests/truefalse5.bit',
  '../tests/selfass1.bit',
  '../tests/selfass2.bit',
  '../tests/rating1.bit',
  '../tests/survey1.bit',
  '../tests/survey-anon1.bit',
  '../tests/highlighttext1.bit',  // 4/5/2021
  '../tests/highlighttext2.bit',  // 4/5/2021
  
  '../tests/bit-alias1.bit',
  '../tests/bit-alias2.bit',
  //'../tests/blocktags.bit', // ok
  //'../tests/blocktags2.bit', // ok
  //'../tests/article-online.bit', // ok
  '../tests/appresource.bit', // ok
  '../tests/vocab1.bit',
  '../tests/vocab2.bit',

  '../tests/learning-path1.bit',
  '../tests/learning-path3.bit',
  '../tests/learning-path4.bit',
  '../tests/learning-path5.bit',
  '../tests/learning-path6.bit',
  '../tests/learning-path7.bit',

  '../tests/resource-all.bit',

  // GMB
  '../tests/GMB/cloze.bit',  // X
  '../tests/GMB/cloze_attachment.bit', // X
  '../tests/GMB/cloze_bitmark--.bit',  // X
  '../tests/GMB/cloze_emoticons.bit',  // X
  '../tests/GMB/essay.bit',  // X
  '../tests/GMB/bitmark_example.bit', // X
];

const problematic = [
    '../tests/interview101.bit',  
    '../tests/interview106.bit',  
    '../tests/interview107.bit',  
    '../tests/interview108.bit',  
    '../tests/match5.bit',
    '../tests/match-matrix1.bit',
    '../tests/match-matrix3.bit',
];

let bad = [
  '../tests/GMB/cloze_emoticons.bit',
];

const EXPECTED_JSON_FILEPATH = '../tests/EXPECTED.JSON';
let   expected_content = '';
let   check_diff = false;

let load_expected = function() {
  expected_content = fs.readFileSync(EXPECTED_JSON_FILEPATH, {encoding: 'utf8', fla:'r'});
};

let get_expected = function(filepath) {
  //const re = new RegExp('<<<<'+filepath+'(\\n[\\s\\S]*\\n)<<<<', 'm');
  const re = new RegExp('<<<<'+filepath+'(\\n[^<<<<]*\\n)<<<<', 'm');  

  let m = expected_content.match(re);
  if (m) {
    return m[1];
  }
  else
    console.error('Expected JSON for '+filepath+' was not found');
  return null;
};

let __run__ = function(filepath, trace, debug, bit) {
  let dbg = false;

  if (typeof debug !== 'undefined')
    dbg = debug;

  if (fs.existsSync(filepath))
    text = fs.readFileSync(filepath, 'utf8');
  else
    text = filepath;

  options = {
    trace: trace,
    debug: debug,
    need_error_report: false,
  };
  let bitmark = new parser.BitmarkParser(text, options, bit);
  try {
    let json = bitmark.parse();
    if (!json)
      console.log('No json for '+filepath);

    if (json) {
      //console.log(json);
      if (check_diff) {
        let exp = get_expected(filepath);
	if (!exp)
	  console.error('ERROR: Expected JSON for '+filepath+' was not found');
	else {
	  let d = Diff.diffChars(exp.trim(), json.trim(), {ignoreWhitespace: true});

	  if (1 < d.length) {
	    // Diff found
	    d.forEach((part) => {
	      // green for additions, red for deletions, grey for common parts
	      const color = part.added ? 'green' :
		    part.removed ? 'red' : 'grey';
	      process.stderr.write(part.value[color]);
});	    
	  }
	}
      }
    }
  }
  catch(e) {
    console.error(e);
  }
}

let __main__ = function(trace, debug) {

  let runtest = (filepath) => {
    try {
      console.log('<<<<'+filepath);
      __run__(filepath, trace, debug, null);
    }
    catch(e) {
      console.log('-----------------'+filepath+' NOT ok-----------------');
      console.error(e);
    }
  }
  load_expected();
  R.forEach(runtest, testfiles);
  console.log('<<<<');
}

let myArgs = process.argv.slice(0, process.argv.length);
let debug = false;
let trace = false;

for (let arg in myArgs) {
  if (myArgs[arg]==='--diff')
    check_diff = true;
}
__main__(trace, debug)    
