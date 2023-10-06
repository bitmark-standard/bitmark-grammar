/*
 * index.js
 *
 */
const process = require('process');
const R = require('ramda');


const CharStreams = require('antlr4ts/CharStreams.js');
const CommonTokenStream = require('antlr4ts/CommonTokenStream.js');
const PredictionMode = require('antlr4ts/atn/PredictionMode.js');
const BailErrorStrategy = require('antlr4ts/BailErrorStrategy.js');
const errorstrategy = require('antlr4ts/DefaultErrorStrategy.js');
const ParseTreeWalker = require('antlr4ts/tree/ParseTreeWalker.js');
//
const bitmarkLexer = require('./antlr/bitmarkLexer.js');
const bitmarkParser = require('./antlr/bitmarkParser.js');
// close
const clozeLexer = require('./antlr/clozeLexer.js');
const clozeParser = require('./antlr/clozeParser.js');
// match
const matchLexer = require('./antlr/matchLexer.js');
const matchParser = require('./antlr/matchParser.js');
// multiple-choice-*
const choiceLexer = require('./antlr/choiceLexer.js');
const choiceParser = require('./antlr/choiceParser.js');

const interviewLexer = require('./antlr/interviewLexer.js');
const interviewParser = require('./antlr/interviewParser.js');

const truefalseLexer = require('./antlr/truefalseLexer.js');
const truefalseParser = require('./antlr/truefalseParser.js');

const flashcardLexer = require('./antlr/flashcardLexer.js');
const flashcardParser = require('./antlr/flashcardParser.js');

const chatLexer = require('./antlr/chatLexer.js');
const chatParser = require('./antlr/chatParser.js');

const sequenceLexer = require('./antlr/sequenceLexer.js');
const sequenceParser = require('./antlr/sequenceParser.js');

const listener = require('./bitmark-listener.js');
const bit_tmpl = require('./bit-template.js');
const but = require('./bit-utils.js');

const JSON_BITS = [".vendor-amcharts-5-chart"];

/*
 */
class Preprocessor {

  constructor() { }

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
    text = text.replace(/\] +$/mg, ']');
    if (text.charAt(text.length - 1) !== '\n')
      text += '\n';
    let bb = new but.BitUtil(text);
    let bits = bb.split_bits(); // array of {offset, bittext}
    return bits;
  }

  remove_comments(text) {
    return text.replace(/\|\|[\w\W]*?\|\|/mg, '');
  }

  replace_text_at(text, index, replacement, orgtext) {
    return text.substr(0, index) + replacement + text.substr(index + orgtext.length);
  }

  // Checks if the bit expects JSON data
  is_a_json_bit(text) {
    if (text !== undefined) {
      let x = text.match(/\S*\[(\.[^\]\[]+)\]/);
      let s = x[1].replace(/\:.*$/, '');  // remove format spec.
      return 0 <= JSON_BITS.indexOf(s) ? true : false;
    }
    return false;
  }
  is_a_js_bit(text) {
	let m = text.match(/\.app-bitmark-from-javascript/);
	return m != null;
  }

  has_a_url(text) {
    let re = /\[(&audio|&image|&video|&article|&document|&app|&website|&still-image|@src[0-9]x)[A-Za-z\-]*:(http|https|file):\/\/.*?\](?=\n|\[@)/g;  // look for one
    let m = text.match(re);
    return m && 0 < m.length ? true : false;
  }

  escape_bracket_in_url_if_any(text) {
    let re = /\[((&audio|&image|&video|&article|&document|&app|&website|&still-image|@src[0-9]x)[A-Za-z\-]*:(http|https|file):\/\/.*?)\](?=\n|\[@)/g;  // look for all
    let text_repl = text;
    let m;

    while ((m = re.exec(text_repl)) !== null) {
      let mr = m[1].replace(/\[/g, '&#91;');
      mr = mr.replace(/\]/g, '&#93;');
      text_repl = text_repl.replace(m[1], mr);
    }
    return text_repl;
  }

  /*
    Escape the [] inside between ** and **. This is a special case and I am not
    sure if this is a good solution. 7/25/2023
   */
  escape_brackets_in_emphasis(text) {
    let re = /(\*\*+[^\[\*\n]*\[[^\]\*]*\][^\]\*\n]*\*+\*)/gms;
    let text_repl=text;
    let m;

    while ((m = re.exec(text_repl)) !== null) {
      let mr = m[1].replace(/\[/g, '&#91;');
      mr = mr.replace(/\]/g, '&#93;');
      text_repl = text_repl.replace(m[0], mr);
    }
    return text_repl;
  }

  /*
     Escare [] in json data. It confuses with Bitmark bits
     Uses HTML escape strings
    [ = &#91;
    ] = &#93;
  */
  escape_json_for_json_bits(text) {
    String.prototype.lastIndexOfEnd = function (string) {
      let io = this.lastIndexOf(string);
      return io == -1 ? -1 : io + string.length;
    };
    const exjson = (t) => {
      // JSON extractor.
      const start = t.indexOf('{');
      const end = t.lastIndexOfEnd('}');
      let result = t.substring(start, end);
      return result;
    }
    // Remove non-json bits etc
    let json_orig = exjson(text);
    let json_repl = json_orig.replace(/\[/g, '&#91;');
    json_repl = json_repl.replace(/\]/g, '&#93;');
    text = text.replace(json_orig, json_repl);
    // offset <0 to dont care just replace them
    return [text, [{ before: '[', after: '&#91;', offset: -1 },
    { before: ']', after: '&#93;', offset: -1 }]];
  }

  // Expecting single bit arg
  replace_stray_bitheads(text) {
    let seq = 0;
    let ignore = 5;
    //const regex = /(\[\.[^\]\[]+\])/;  // for the first bit if any
	const regex = /(\[\.[^\]\[]+)/;  // no need closing ] 10/6/2023
    const MAXSEQ = 20;  // cant have too many
    let x_array = [];

    while (seq < MAXSEQ) {
      // Dont add if not the head doesnt start from 0th column
      text.search(regex);

      let where = text.slice(ignore).search(regex);
      if (where < 0)
        break;
      let tail = text.substr(where, text.length);
      let m = tail.match(regex);
      if (text.charAt(where - 1) !== '\n') {
        // Replace that with a marker
        text = this.replace_text_at(text, where + ignore, `$\{\{${seq}\}\}`, m[1]);
        let x = {
          before: m[1],
          after: `$\{\{${seq}\}\}`,
          offset: where + ignore
        };
        x_array.push(x);
      }
      ignore += where + m[1].length;
      seq++;
    }
    return [text, x_array];  // replaced.
  }

  escapeRegExp(text) {
    return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
  }
  // simple version. no offset
  unreplace_stray_bitheads(text, x_array) {
    const unescape_brackets = txt => (txt.replace(/&#91;/g, '[')).replace(/&#93;/g, ']');

    for (let i in x_array) {
      //
      let x = x_array[i];
      let y = this.escapeRegExp(x.after);
      var re = new RegExp(y, 'g');
      text = text.replace(re, x.before);
    }
    text = unescape_brackets(text);  // get the backets back.
    return text;
  }
}

/*
 */
class BitmarkErrorListener extends errorstrategy.DefaultErrorStrategy {
  //options = {};

  constructor(source, options) {
    super();
    this.options = options;
    this.errors = [];
    this.bail_mode = false;
    this.source = source;
    return this;
  }
  //
  clearErrors() {
    this.errors = [];   // was INST
  }

  modifyErrorMessage(msg) {
    const STD_MSGS = [
      { regex: /extraneous input ('[^\']*')/, repl: 'Unexpected input ${0}' },
      { regex: /mismatched input ('[^\']*')/, repl: 'Rule violation around ${0}' },
      { regex: /no viable alternative at input ('[^\']*')/, repl: 'Unexpected input ${0}' },
      { regex: /missing/, repl: null },  // no mod
    ];
    let fn = (ob, msg) => {
      let m = msg.match(ob.regex);
      let newmsg = null;
      if (m) {
        if (ob.repl)
          newmsg = ob.repl.replace('${0}', m[1]);
      }
      return newmsg;
    };
    let newmsg = null;
    for (let i = 0; i < STD_MSGS.length; i++) {
      newmsg = fn(STD_MSGS[i], msg);
      if (newmsg)
        break;
    }
    if (!newmsg)
      newmsg = msg;
    return newmsg;
  }
  //
  syntaxError(recognizer, offendingSymbol, line, column, msg, e) {
    msg = this.modifyErrorMessage(msg);
    let tmpl = R.clone(bit_tmpl.JSON_BIT_TEMPLATES.Error_Info);

    tmpl.message = msg;
    tmpl.line = parseInt(line) - 1;
    tmpl.column = column;

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
    if (0 < errline.length)
      tmpl.errorLine = errline;
    if (this.bail_mode) {
      throw JSON.stringify(tmpl, null, 4); // bail out
    }
    else {
      // not aborting
      this.errors.push(tmpl);
    }
    return; // leave
  }
  //
  manualError(ctx, line, column, message) {
    let tmpl = R.clone(bit_tmpl.JSON_BIT_TEMPLATES.Error_Info);
    tmpl.line = line < 0 ? ctx._start._line : line; // 1 origin
    tmpl.column = column; //ctx._start._charPositionInLine;

    let bb = new but.BitUtil(this.source);
    let bit = this.source;
    let errline = bb.get_error_line(this.source, tmpl.line, column);
    tmpl.errorLine = errline;
    tmpl.message = message;
    this.errors.push(tmpl);
  }
};



let Option_Template = {
  trace: false,
  debug: false,
};

class BitmarkParser {
  /*
   */
  constructor(text1, options, bit = null) {
    this.ParserTable = {
      'cloze': {
        regex: /\n\[\.[ \t]*cloze/,
        name: 'cloze',
        lexer: clozeLexer.clozeLexer,
        parser: clozeParser.clozeParser
      },
      'match': {
        regex: /\n\[\.[ \t]*match/,
        name: 'match',
        lexer: matchLexer.matchLexer,
        parser: matchParser.matchParser
      },
      'multiple': {
        regex: /\n\[\.[ \t]*(multiple|highlight)/,
        name: 'multiple',
        lexer: choiceLexer.choiceLexer,
        parser: choiceParser.choiceParser
      },
      'interview': {
        regex: /\n\[\.[ \t]*interview/,
        name: 'interview',
        lexer: interviewLexer.interviewLexer,
        parser: interviewParser.interviewParser
      },
      'true-false': {
        regex: /\n\[\.[ \t]*true-false/,
        name: 'true-false',
        lexer: truefalseLexer.truefalseLexer,
        parser: truefalseParser.truefalseParser
      },
      'flashcard': {
        regex: /\n\[\.[ \t]*(flashcard|vocabulary)/,
        name: 'flashcard',
        lexer: flashcardLexer.flashcardLexer,
        parser: flashcardParser.flashcardParser
      },
      'vocabulary': {
        regex: /\n\[\.[ \t]*vocabulary/,
        name: 'vocabulary',
        lexer: flashcardLexer.flashcardLexer,
        parser: flashcardParser.flashcardParser
      },
      'chat': {
        regex: /\n\[\.[ \t]*chat/,
        name: 'chat',
        lexer: chatLexer.chatLexer,
        parser: chatParser.chatParser
      },
      'conversation': {
        regex: /\n\[\.[ \t]*conversation/,
        name: 'chat',
        lexer: chatLexer.chatLexer,
        parser: chatParser.chatParser
      },
      'sequence': {
        regex: /\n\[\.[ \t]*sequence/,
        name: 'sequence',
        lexer: sequenceLexer.sequenceLexer,
        parser: sequenceParser.sequenceParser
      },
      'menu': {
        regex: /\n\[\.[ \t]*menu-3/,
        name: 'sequence',
        lexer: sequenceLexer.sequenceLexer,
        parser: sequenceParser.sequenceParser
      },
      'default': {
        regex: null,
        name: null,
        lexer: bitmarkLexer.bitmarkLexer,
        parser: bitmarkParser.bitmarkParser
      },

    };

    this.options = options;
    this.input_text = '\n' + text1;  // whole text. added NL 12/17/2020
    this.x_array = [];
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

  // Initialized the parser environment
  init(splitted_text, bit) {

    // Tweak the stray bitheads
    let prep = new Preprocessor(this.source);
    let replaced = splitted_text, x_array = [], y_array = [];

    if (prep.has_a_url(splitted_text)) {
      // Brackets contained in a URL is problem. Need to escape. No need x_array
      replaced = prep.escape_bracket_in_url_if_any(replaced);
    }
    if (prep.is_a_json_bit(splitted_text)) {
      [replaced, x_array] = prep.escape_json_for_json_bits(replaced);
    }
    if (0 < replaced.indexOf('[', 6)) {  // skip initial [] for bit heading
      replaced = prep.escape_brackets_in_emphasis(replaced);
    }

    [replaced, y_array] = prep.replace_stray_bitheads(replaced);
    x_array = y_array.concat(x_array);

    this.x_array = x_array;
    this.original_text = splitted_text;
    this.input_text = replaced;
    splitted_text = replaced;

    this.parser_vars.bit = bit;
    bit = !bit ? 'default' : bit;

    this.parser_vars.chars = CharStreams.CharStreams.fromString(splitted_text);
    let lp = this.ParserTable[bit];
    if (!lp) {
      console.error(`Error: no parser available for bit ${bit}`);
      return null;
    }
    this.parser_vars.lexer = new lp.lexer(this.parser_vars.chars);
    this.parser_vars.tokens = new CommonTokenStream.CommonTokenStream(this.parser_vars.lexer);
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
    this.parser_vars.printer = new listener.BitmarkListener(this.parser_vars.errorlisten,
      this.input_text,
      this.parser_vars.parser);
    this.parser_vars.parser.addParseListener(this.parser_vars.printer);
    let tree = this.parser_vars.parser.bitmark();
    return this.parser_vars.printer.get_result();  // not json
  }

  //
  parse() {
    let pp = new Preprocessor();
    let bits = pp.split_bits(this.input_text);
    let allobjs = [];
    //const t0 = now();
    let entry = null;
    let parsed = false;


    for (let bit of bits) {
      parsed = false;
      let text_with_comments = R.clone(bit.bit);
      bit.bit = pp.remove_comments(bit.bit);  // Oct 4,2021

      for (let key in this.ParserTable) {
        if (bit.bit.match(this.ParserTable[key].regex)) {
          entry = this.ParserTable[key];
          // Initialize with new bitmark
          this.init(bit.bit, entry.name);
          let obj = this.run_parser();  // obj is an array

          if (!obj || !obj.length)
            obj = [{ bitmark: bit }];

          obj[0].bitmark = text_with_comments.trim();

          // obj[0].bit.content at this point is bithead replaced text.
          obj[0].bit.body = pp.unreplace_stray_bitheads(obj[0].bit.body, this.x_array);

          if (0 < this.parser_vars.errorlisten.errors.length) {
            obj[0]['errors'] = this.parser_vars.errorlisten.errors;
            this.parser_vars.errorlisten.errors = [];
          }
          allobjs = allobjs.concat(obj);
          parsed = true;
          break;
        }
      }
      if (!parsed) {
        entry = this.ParserTable['default'];
        // Run the default parser
        this.init(bit.bit, entry.name);

        let obj = this.run_parser();
        let unknown = null;

        if (obj.length < 1) {
          // Most probably wrong bit name
          let bitre = /\s*\[(.*)\]/;
          let m = bit.bit.match(bitre);
          unknown = m[1];
        }
        else
          obj[0].bitmark = text_with_comments.trim();

        // obj[0].bit.content at this point is bithead replaced text.
        if (!unknown)
          obj[0].bit.body = pp.unreplace_stray_bitheads(obj[0].bit.body, this.x_array);

        if (0 < this.parser_vars.errorlisten.errors.length) {
          if (!obj || !obj.length)
            obj = [{ bitmark: bit }];
          if (unknown) {
            obj[0]['errors'] = ["unknown bit name: " + unknown];
            obj[0].bitmark.offset = 0;
          }
          else
            obj[0]['errors'] = this.parser_vars.errorlisten.errors;
          this.parser_vars.errorlisten.errors = [];
        }
        allobjs = allobjs.concat(obj);
      }
    }
    //const t1 = now();
    //if (this.options.debug)
    //  console.log(`Call to parser for 3 took ${t1 - t0} milliseconds.`);

    let json = JSON.stringify(allobjs, null, 4);
    while (allobjs.length) {
      delete allobjs.pop();
    }
    if (this.options.debug)
      console.log(json);

    return json;
  }

};


exports.BitmarkParser = BitmarkParser;
exports.Preprocessor = Preprocessor;
