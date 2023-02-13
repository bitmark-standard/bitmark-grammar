/*
 * index.js
 * 
 */
let fs        = require('fs');
let process   = require('process');
let now       = require('performance-now');

//let ANTLRInputStream = require('antlr4ts/ANTLRInputStream.js');
let CharStreams = require('antlr4ts/CharStreams.js');
let CommonTokenStream = require('antlr4ts/CommonTokenStream.js');
let PredictionMode = require('antlr4ts/atn/PredictionMode.js');
let BailErrorStrategy = require('antlr4ts/BailErrorStrategy.js');
//let DefaultErrorStrategy = require('antlr4ts/DefaultErrorStrategy.js');
let errorstrategy = require('antlr4ts/DefaultErrorStrategy.js');
let ParseTreeWalker = require('antlr4ts/tree/ParseTreeWalker.js');
//
//let bitmarkLexer = require('./typescript/bitmarkLexer.js');
//let bitmarkParser = require('./typescript/bitmarkParser.js');
// choice
let choiceLexer = require('../Choice/choiceLexer.js');
let choiceParser = require('../Choice/choiceParser.js');
// close
let clozeLexer = require('../Cloze/clozeLexer.js');
let clozeParser = require('../Cloze/clozeParser.js');
// match
let matchLexer = require('../Match/matchLexer.js');
let matchParser = require('../Match/matchParser.js');

let listener  = require('../bitmark-listener.js');
let bit_tmpl = require('../bit-template.js');
let but = require('../bit-utils.js');


/*
 */
class Preprocessor {

  constructor() {}

  countlines(text) {
    const lines = (text.match(/\n/g) || '').length + 1;
    return lines;
  }

  /*
   * Goto the desired line
   * Start looking for a "\n[."
   * The line before the "\n[." is the line to cut
   */
  split_bits(text) {

    let bb = new but.BitUtil(text);    
    let bits = bb.split_bits(); // array of {offset, bittext}
    return bits;
  }
  
 
}

/*
 */
class BitmarkErrorListener extends errorstrategy.DefaultErrorStrategy {
  //options = {};
  
  constructor(source, options) {
    super();
    this.options = options;
    this.errors  = [];
    this.error_messages = [];
    this.bail_mode = true;
    this.source = source;
    return this;
  }
  //
  clearErrors() {
    this.error_messages = [];   // was INST
    this.errors = [];   // was INST
  }
  //
  syntaxError(recognizer, offendingSymbol, line, column, msg, e) {

    let errmsg = `SyntaxError line=${line} column=${column} msg=${msg}`;
    let tmpl = bit_tmpl.JSON_BIT_TEMPLATES.Error_Info;
    tmpl.parser.fatalError = errmsg;

    let bb = new but.BitUtil(this.source);    
    let bit = this.source;
    let errline = bb.get_error_line(this.source, line, column);
    /* Error_Info: {
       bitmark: ...
       parser: {
         fatalError: '',
         warnings: [],
         errorLine: ''
       }
      }*/
    if (0<bit.length)
      tmpl.bitmark = bit;
    if (0<errline.length)
      tmpl.parser.errorLine = errline;
    if (this.bail_mode) {
      throw JSON.stringify(tmpl,null,4)
    }
    return; // leave
  }
};



let Option_Template = {
  trace: false,
  debug: false,
};

class BitmarkParser {
  /*
  options = Option_Template;
  parser_vars = {
    chars: null,
    lexer: null,
    parser: null,
    tokens: null,
    printer: null
  };
  input_text = null;
  */
  /*
   */
  constructor(text1, options, bit=null) {
    this.ParserTable = {
      'cloze': {
	lexer: clozeLexer.clozeLexer,
	parser: clozeParser.clozeParser
      },
      'match': {
	lexer: matchLexer.matchLexer,
	parser: matchParser.matchParser
      },
      'multichoice': {
	lexer: choiceLexer.choiceLexer,
	parser: choiceParser.choiceParser
      }
    };
    this.options = options;
    this.input_text = text1;
    this.parser_vars = {
      chars: null,
      lexer: null,
      parser: null,
      tokens: null,
      printer: null,
      errorlisten: null,
      bit: bit
    };
  }

  init(text, bit) {

    this.input_text = text;
    this.parser_vars.bit = bit;

    this.parser_vars.chars = CharStreams.CharStreams.fromString(text);

    let lp = this.ParserTable[bit];
    if (!lp) {
      console.error(`Error: no parser available for bit ${bit}`);
      return null;
    }
    this.parser_vars.lexer = new lp.lexer(this.parser_vars.chars);
    this.parser_vars.tokens =new CommonTokenStream.CommonTokenStream(this.parser_vars.lexer);
    this.parser_vars.parser = new lp.parser(this.parser_vars.tokens);
    this.parser_vars.printer = null;

    // Remove default
    this.parser_vars.lexer.removeErrorListeners();
    this.parser_vars.parser.removeErrorListeners();
    // And add our own
    let errlisten = new BitmarkErrorListener(this.input_text, {});
    this.parser_vars.errorlisten = errlisten;

    this.parser_vars.lexer.addErrorListener(errlisten);  // for the unreconizable tokens
    this.parser_vars.parser.addErrorListener(errlisten);  // for the syntax errors
  }

  /**/
  run_parser() {
    this.parser_vars.parser.buildParseTrees = true;
    this.parser_vars.parser.isTrace = this.options.trace;
    this.parser_vars.parser._interp.predictionMode = PredictionMode.SLL;  // works!!
    
    let tree = this.parser_vars.parser.bitmark();
    this.parser_vars.printer = new listener.BitmarkListener(this.parser_vars.lexer,
							    this.parser_vars.parser,
							    this.input_text,
							    this.options.debug);
    let walker = new ParseTreeWalker.ParseTreeWalker();
    walker.walk(this.parser_vars.printer, tree);
    
    if (0 < this.parser_vars.errorlisten.error_messages.length) {
      return this.parser_vars.errorlisten.error_messages[0];  // Error message
    }
    return this.parser_vars.printer.get_result();  // not json
  }

  //
  parse() {
    let pp = new Preprocessor();
    let bits = pp.split_bits(this.input_text);
    let allobjs = [];

    const t0 = now();
debugger//?
    for (let bit of bits) {
      if (bit.bit.match(/\[\.cloze/))
	this.init(bit.bit, 'cloze');
      else if (bit.bit.match(/\[\.match/))
	this.init(bit.bit, 'match');
      else if (bit.bit.match(/\[\.multiple/))
	this.init(bit.bit, 'multichoice');
      else
	this.init(bit.bit, null);
      
      let obj = this.run_parser();	
      allobjs = allobjs.concat(obj);
    }

    const t1 = now();
    if (this.options.debug)
      console.log(`Call to parser for 3 took ${t1 - t0} milliseconds.`);

    let json = JSON.stringify(allobjs, null, 4);
    if (this.options.debug)
      console.log(json);
    return json;
  }

};


exports.BitmarkParser = BitmarkParser;
exports.Preprocessor = Preprocessor;
