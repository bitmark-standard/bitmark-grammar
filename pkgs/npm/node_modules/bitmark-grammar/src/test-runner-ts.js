//
// main.js for Python parser
//

let fs        = require('fs');
let process   = require('process');
let ANTLRInputStream = require('antlr4ts/ANTLRInputStream.js');
let CommonTokenStream = require('antlr4ts/CommonTokenStream.js');
let PredictionMode = require('antlr4ts/atn/PredictionMode.js');
let ParserATNSimulator = require('antlr4ts/atn/ParserATNSimulator.js');
let ConsoleErrorListener = require('antlr4ts/ConsoleErrorListener.js');
let BailErrorStrategy = require('antlr4ts/BailErrorStrategy.js');
let DefaultErrorStrategy = require('antlr4ts/DefaultErrorStrategy.js');
let ParseTreeWalker = require('antlr4ts/tree/ParseTreeWalker.js');
//
let bitmarkLexer = require('./typescript/bitmarkLexer.js');
let bitmarkParser = require('./typescript/bitmarkParser.js');
// close
let clozeLexer = require('./Cloze/clozeLexer.js');
let clozeParser = require('./Cloze/clozeParser.js');
// match
let matchLexer = require('./Match/matchLexer.js');
let matchParser = require('./Match/matchParser.js');

let listener  = require('./bitmark-listener.js');




function BitmarkErrorListener() {
  //ErrorListener.call(this);
  return this;
}
BitmarkErrorListener.prototype = Object; //.create(ErrorListener.prototype);
BitmarkErrorListener.prototype.constructor = BitmarkErrorListener;
BitmarkErrorListener.INSTANCE = new BitmarkErrorListener();
BitmarkErrorListener.prototype.syntaxError = function(recognizer, offendingSymbol, line, column, msg, e) {
  console.error("Bitmark: line " + line + ":" + column + " " + msg);
};

let Bitmark = function(trace, debug) {
  this.trace = false;
  this.debug = false;;
  if (typeof trace !== 'undefind')
    this.trace = trace;
  if (typeof debug !== 'undefind')
    this.debug = debug;
  return this;
};

Bitmark.prototype.constructor = Bitmark;
Bitmark.prototype.afilepath = null;
Bitmark.prototype.inFile = null;


Bitmark.prototype.run = function(filepath, text) {
  if (filepath)
    text = fs.readFileSync(filepath, 'utf8');
  let chars = new ANTLRInputStream.ANTLRInputStream(text, true); // 2nd arg true to use Emoji
  //let lexer = new bitmarkLexer.bitmarkLexer(chars);
  //let tokens  = new CommonTokenStream.CommonTokenStream(lexer);
  //let parser = new bitmarkParser.bitmarkParser(tokens);
  let lexer, tokens, parser;
  let printer = null;

  console.log(filepath);
  debugger//Oops
  
  if (-1 < filepath.search('cloze')) {

    lexer = new clozeLexer.clozeLexer(chars);
    tokens  = new CommonTokenStream.CommonTokenStream(lexer);
    parser = new clozeParser.clozeParser(tokens);
  }
  else if (-1 < filepath.search('match')) {
    lexer = new matchLexer.matchLexer(chars);
    tokens = new CommonTokenStream.CommonTokenStream(lexer);
    parser = new matchParser.matchParser(tokens);
  }    
  else { // default
    lexer = new bitmarkLexer.bitmarkLexer(chars);
    tokens = new CommonTokenStream.CommonTokenStream(lexer);
    parser = new bitmarkParser.bitmarkParser(tokens);
  }
  try {
    parser.buildParseTrees = true;
    //parser.setTrace(this.trace); antlr4
    parser.isTrace = this.trace;
    
    parser.removeErrorListeners();
    parser._errHandler = new BailErrorStrategy.BailErrorStrategy();
    parser._interp.predictionMode = PredictionMode.SLL;  // works!!

    let tree = parser.bitmark();
    let printer = new listener.BitmarkListener(lexer, parser, text, this.debug);
    let walker = new ParseTreeWalker.ParseTreeWalker();
    console.log(text);
    console.log('========================');
    walker.walk(printer, tree);
    let json = printer.get_json();
    console.log(json);
    
  }
  catch (e) {
    // Step 2 LL mode
    console.error(e);
    /*
    console.error('====Bitmark Fallback clause entered====');
    tokens.reset();
    parser.reset();
    parser.removeErrorListeners();
    parser.addErrorListener(BitmarkErrorListener.INSTANCE);

    parser._errHandler = new DefaultErrorStrategy();
    parser._interp.predictionMode = PredictionMode.LL;  // just in case
    let  tree = parser.bitmark();
    printer = new listener.BitmarkListener(lexer, parser, this.debug);
    antlr4.tree.ParseTreeWalker.DEFAULT.walk(printer, tree);
    */
  }
  return null;  //printer.output;
};

Bitmark.prototype.chkarg = function() {
  console.log(process.argv[2]);
  if (typeof process.argv[2] !== 'undefined') {
    Bitmark.prototype.afilepath = process.argv[2];
    return true;
  }
  return false;
};

exports.Bitmark = Bitmark;
