/*
 *  bitmark-listener.js
 *
 */
import R_clone from 'ramda/es/clone.js';
import { Stack } from './stack.mjs';
import { BitUtil } from './bit-utils.mjs';
import { JSON_BIT_TEMPLATES } from './bit-template.mjs';

const webpack = true;
const log = {};
const logfun = function(text){console.log(text);}
log.info = logfun;
log.debug = logfun;
log.error = logfun;



// This class defines a complete listener for a parse tree produced by bitmarkParser.
let BitmarkListener = function(error_listener, source, parser) {
  this.error_listener = error_listener;
  this.source = source;
  this.parser = parser;  // New 10/9/2021  
  this.stk = new Stack();
  this.curr_bit_stk = new Stack();
  this.but = new BitUtil(source.trim());
  this.format = "";  // &image, &audio, &video etc
  this.resformat = "";
  this.reslist = ['&image', '&audio', '&video',
		  '&document', '&app', '&website', '&stillImageFilm',
		  '&pdf'];
  this.atdef_str = ['date', 'location', 'book', 'duration', 'action', 'deepLink',
		    'botAnnounceAt', 'botSaveAt', 'botSendAt', 'botRemindAt',
		    'externalLink', 'videoCallLink', 'externalLinkText', 'textReference',
		    'quotedPerson', 'kind', 'collection', 'book',
		   ];
  this.body_key = 'body';
  this.num_angleref = 0;
  return this;
}

BitmarkListener.prototype = Object();  /*.create(clozeParserListener)*/
BitmarkListener.prototype.constructor = BitmarkListener;

BitmarkListener.prototype.get_json = function() {
  return JSON.stringify(this.stk.bucket, null, 4);
};

BitmarkListener.prototype.get_result = function() {
  while (0 < this.curr_bit_stk.size)
	  delete this.curr_bit_stk.pop();
  return this.stk.bucket;
};

//
BitmarkListener.prototype.push_bit2 = function(code, type, fmt_regex) {
  let vals = this.but.get_bit_value_colonsep(fmt_regex, code);
  let b = JSON_BIT_TEMPLATES.Regular_bit;
  b.bitmark = code;
  b.bit.type = type;
  this.stk.push(b);
  return vals;
};
// Call on enter
BitmarkListener.prototype.push_tmpl = function(ctx, type, template) {
  if (!template)
    template =  R_clone(JSON_BIT_TEMPLATES.Regular_bit);
  let b = template;
  b.bit.type = type;

  // Save body --- code not available
  let bit_type = this.source.match(/\s*\[([^\]]+)\]/)[0];
  let body = this.source.replace(bit_type, '');
  b.bit['body'] = body;
  let code = this.but.getcode(ctx).trim(); // 4/5/2022
  let res = this.but.get_bit_resource(code);
  // closing ] may be there
  this.resformat = res.length === 0 ? 'bitmark--' : res[0];
  
  this.stk.push(b);
};
//
//
BitmarkListener.prototype.set_value_based_on_curr_bit_stk = function(val1, sub1, val2, sub2, tmpl=null) {
  let subscript = this.curr_bit_stk.top();
  let key_obj = null;
  
  if (subscript.startsWith('{'))
    key_obj = subscript.split('$'); // like "{Diaz:0}:marks"
  if (key_obj.length===2) {
    if (tmpl && !(key_obj[0] in this.stk.top().bit[key_obj[1]]))
      (this.stk.top()).bit[key_obj[1]][key_obj[0]] = R_clone(tmpl);      
    if (key_obj[0] in this.stk.top().bit[key_obj[1]]) {
      // e.g. bit.gaps['{0}'].example = true;
      (this.stk.top()).bit[key_obj[1]][key_obj[0]][sub1] = val1;
      if (sub2 != null)
	(this.stk.top()).bit[key_obj[1]][key_obj[0]][sub2] = val2;
    }
  }
}

BitmarkListener.prototype.save_blocktaggedtext = function(what, code) {
  if (0 < this.stk.size) {
    if (!(what in this.stk.top()))
      this.stk.top()[what] = [];
    this.stk.top()[what].push(code);  // *** what ***
  }
  else
    log.error("save_blocktaggedtext stack is empty");
};

BitmarkListener.prototype.bitmark_enterRule = function(fn_name) {
  log.debug(`===>>${fn_name}`);
};
BitmarkListener.prototype.bitmark_exitRule = function(fn_name) {
  log.debug(`<<===${fn_name}`);
};

BitmarkListener.prototype.enterBook = function(ctx) {
  this.push_tmpl(ctx, 'book');
};
// Exit a parse tree produced by bitmarkParser#bitElem.
//BitmarkListener.prototype.exitBook = function(ctx) {};

// Enter a parse tree produced by bitmarkParser#chapter.
BitmarkListener.prototype.enterChapter = function(ctx) {
  this.push_tmpl(ctx, 'chapter');
  // Added below 10/1/2020 set defaults
  (this.stk.top()).bit['level'] = 1;
  (this.stk.top()).bit['progress'] = true;
  (this.stk.top()).bit['toc'] = true;
};
// Exit a parse tree produced by bitmarkParser#chapter.
//BitmarkListener.prototype.exitChapter = function(ctx) {};

// Enter a parse tree produced by bitmarkParser#progress.
BitmarkListener.prototype.exitProgress = function(ctx) {
  let code = this.but.getcode(ctx);
  let vals = this.but.get_at_value(code);
  (this.stk.top()).bit['progress'] = vals[1];
  // Remove it from body
  (this.stk.top()).bit.body = (this.stk.top()).bit.body.replace(code,'');
};

BitmarkListener.prototype.enterToc = function(ctx) {
  this.push_tmpl(ctx, 'toc');
}
// Enter a parse tree produced by bitmarkParser#toc.
BitmarkListener.prototype.exitToc = function(ctx) {
  let code = this.but.getcode(ctx);
  let vals = this.but.get_at_value(code);
  
  if (this.stk.size===0) {
    //this.push_bit(ctx, 'toc');
    // toc can't exist by itself.
  }
  (this.stk.top()).bit['toc'] = vals[1];
  // Remove it from body
  (this.stk.top()).bit.body = (this.stk.top()).bit.body.replace(code,'');
};

// Enter a parse tree produced by bitmarkParser#summary.
BitmarkListener.prototype.enterSummary = function(ctx) {
  this.push_tmpl(ctx, 'summary');
};
// Exit a parse tree produced by bitmarkParser#summary.
//BitmarkListener.prototype.exitSummary = function(ctx) {};

// Enter a parse tree produced by bitmarkParser#bit.
BitmarkListener.prototype.enterBit = function(ctx) {
  let code = this.but.getcode(ctx);
  this.but.set_currentbit(code);
};

// Exit a parse tree produced by bitmarkParser#bit.
BitmarkListener.prototype.exitBit = function(ctx) {
  // Add an empty resource data if format is defined.
  if (this.resformat != '' && this.stk.top().bit.resource==undefined
      && 0 <= this.reslist.indexOf(this.resformat)) {
    let res = this.resformat;
    if (this.resformat.startsWith('&'))
      res = this.resformat.substr(1);
    this.stk.top().bit['resource'] = {
      'type': res,
      [res]: {}
    }
  }
  this.stk.top().bit.body = this.stk.top().bit.body.trim();
};
BitmarkListener.prototype.exitBitmark_ = function(ctx) {
  this.stk.top().bit.body = this.stk.top().bit.body.trim();
};

// Enter a parse tree produced by bitmarkParser#group_open.
BitmarkListener.prototype.enterGroup_born = function(ctx) {
  this.push_tmpl(ctx, 'group*');  
};
// Exit a parse tree produced by bitmarkParser#group_open.
//BitmarkListener.prototype.exitGroup_born = function(ctx) {};

// Enter a parse tree produced by bitmarkParser#group_close.
BitmarkListener.prototype.enterGroup_died = function(ctx) {
  this.push_tmpl(ctx, 'group???');
};
// Exit a parse tree produced by bitmarkParser#group_close.
//BitmarkListener.prototype.exitGroup_died = function(ctx) {};
BitmarkListener.prototype.enterCloze = function(ctx) {
  this.push_tmpl(ctx, 'cloze');  // default template
};

// Exit a parse tree produced by bitmarkParser#cloze.
//BitmarkListener.prototype.exitCloze = function(ctx) {};

// Enter a parse tree produced by bitmarkParser#cloze_instruction_grouped.
BitmarkListener.prototype.enterCloze_instruction_grouped = function(ctx) {
  this.push_tmpl(ctx, 'cloze-instruction-grouped');
};
// Exit a parse tree produced by bitmarkParser#cloze_instruction_grouped.
//BitmarkListener.prototype.exitCloze_instruction_grouped = function(ctx) {};

// Enter a parse tree produced by bitmarkParser#cloze_solution_grouped.
BitmarkListener.prototype.enterCloze_solution_grouped = function(ctx) {
  this.push_tmpl(ctx, 'cloze-solution-grouped');
};
// Exit a parse tree produced by bitmarkParser#cloze_solution_grouped.
//BitmarkListener.prototype.exitCloze_solution_grouped = function(ctx) {};

// This is INTENTIONALLY enter!!
BitmarkListener.prototype.enterGap = function(ctx) {
  let code = this.but.getcode(ctx);

  if (0 < this.stk.size) {
    if (!('placeholders' in this.stk.top().bit))
      (this.stk.top()).bit['placeholders'] = {};
    let n = Object.keys(this.stk.top().bit['placeholders']).length;
    let key = `{${n}}`;
    this.stk.top().bit['placeholders'][key] = R_clone(JSON_BIT_TEMPLATES.Gap_bit);
    this.curr_bit_stk.push(key+'$placeholders'); // let children know the key
  }
  else
    log.error('enterGap no bit on stack');
}

BitmarkListener.prototype.exitGap = function(ctx) {
  let code = this.but.getcode(ctx);
  let kp = this.curr_bit_stk.pop();  //(key+'$placeholders');
  let keypl = kp.split('$');
  code = code.replace(/\[[^_][^\]]+\]/g, '');
  this.stk.top().bit.body = this.stk.top().bit.body.replace(code, keypl[0]);
};

BitmarkListener.prototype.exitSingle_gap = function(ctx) {
  let code = this.but.getcode(ctx);
  let type = this.stk.top().bit.type;
  
  if (type.startsWith('cloze') || type.startsWith('article')) {
    let val = code.match(/[^\[]*(\[.*\])([^\]]|[\s])*/s); // accept NEWLINE in the text
    let n = Object.keys(this.stk.top().bit['placeholders']).length - 1;
    let key = `{${n}}`;
    let vals = code.match(/\[_([^\]]+)\]/g); // could be more than 1
    // vals can be null when it is [_]
    if (vals) {
      for (let g of vals) {
	let v = this.but.get_bit_value(/\[_([^\]]*)\]/, g);
	this.stk.top().bit['placeholders'][key].solutions.push(v);
      }
    }
  }
};
// Enter a parse tree produced by bitmarkParser#instruction.
BitmarkListener.prototype.exitInstruction = function(ctx) {
  let code = this.but.getcode2(ctx);
  let re=/\[!(([^\]]|[\s])*)\]/s;  // accepts newline
  let val = this.but.get_bit_value(re, code);

  if (!val) {
    // There can be [!]
    return;
  }
  if (0 < this.stk.size) {
    const what = this.curr_bit_stk.top();

    if (what==='cplus' || what==='cminus' || what==='pair'
	|| what==='interview_qanda' || what==='essay'
	|| what==='mcrmisc' || what==='panswer') {
      (this.curr_bit_stk.bottom()).instruction = val;  // was second
    }
    else if (what==='mpanswer') {
      (this.curr_bit_stk.second()).instruction = val;  // was second
    }
    else if (what != null) {
      let key_obj='';
      if (typeof what==='string' && what.startsWith('{'))
	key_obj = what.split('$');
      if (typeof what==='string' && key_obj.length===2) {
	(this.stk.top()).bit[key_obj[1]][key_obj[0]]['instruction'] =  val;
      }
      else
	what.hint = val;
    }
    else {
      // no key
      (this.stk.top()).bit['instruction'] = val;
    }
    // Remove it from body
    if (what !== 'pair_multival') {
      (this.stk.top()).bit.body = (this.stk.top()).bit.body.replace(code,'');
    }
  }
  else
    log.error("exitInstruction stack is empty");
};

// Enter a parse tree produced by bitmarkParser#hint.
BitmarkListener.prototype.exitHint = function(ctx) {

  let code = this.but.getcode(ctx);
  let re=/\[\?([^\]]*)\]/;
  let val = this.but.get_bit_value(re, code);
  let what = this.curr_bit_stk.top();
  
  if (what=='footer')
    return;  
  if (0 < this.stk.size && 0 < this.curr_bit_stk.size) {
    const what = this.curr_bit_stk.top();
    let key_obj = what;
    if (what==='cplus' || what==='cminus' || what=='pair') {    
      (this.curr_bit_stk.second()).hint = val;
    }
    else {
      if (typeof what==='string' && what.startsWith('{'))
	key_obj = what.split('$');
      if (typeof what==='string' && Array.isArray(key_obj) && key_obj.length===2) {
	// bit.gaps.{1}.hint = val
	(this.stk.top()).bit[key_obj[1]][key_obj[0]]['hint'] =  val;
      }
      else if (what==='panswer' || what==='interview_qanda')
	(this.curr_bit_stk.bottom()).hint = val;
      else if (typeof what === 'object')
	what.hint = val;
      else
	(this.stk.top()).bit['hint'] =  val;
    }
    // TODO key_obj.length < 2???
  }
  else {
    (this.stk.top()).bit['hint'] =  val;
  }
  (this.stk.top()).bit.body = (this.stk.top()).bit.body.replace(code,'');
};

BitmarkListener.prototype.enterHeaded_choices = function(ctx) {
    let p =  R_clone(JSON_BIT_TEMPLATES.Mct_placeholder);
    let n = 0;
    if (this.stk.top().bit['placeholders'] === undefined) 
	this.stk.top().bit['placeholders'] = [];
    else
	n = Object.keys(this.stk.top().bit['placeholders']).length;
    let key = `{${n}}`;
    this.stk.top().bit['placeholders'][key] = p;
    this.curr_bit_stk.push(key); // let children know the key
};

BitmarkListener.prototype.enterMcrsep = function(ctx) {
  if ((this.stk.top()).bit.type.startsWith('multiple-choice'))  {
    let quiz = R_clone(JSON_BIT_TEMPLATES.Mc_quiz);
    (this.stk.top()).bit['quizzes'].push(quiz);
    // Push quiz to store group-wise inst, item, hint etc
    this.curr_bit_stk.push(quiz);
  }
  else if ((this.stk.top()).bit.type.startsWith('multiple-response'))  {
    let resp = R_clone(JSON_BIT_TEMPLATES.Mr_response);
    (this.stk.top()).bit['quizzes'].push(resp);
    // Push resp to store group-wise inst, item, hint etc
    this.curr_bit_stk.push(resp);
  }
  else if ((this.stk.top()).bit.type.startsWith('true-false'))  {

    let stmt = R_clone(JSON_BIT_TEMPLATES.True_false_stmt);
    (this.stk.top()).bit['statements'].push(stmt);
    // Push resp to store group-wise inst, item, hint etc
    this.curr_bit_stk.push(stmt);
  }
  // Remove all === from body
  (this.stk.top()).bit.body = (this.stk.top()).bit.body.replace(/\n?===\n?/g,'');
};

BitmarkListener.prototype.enterMcrmisc = function(ctx) {
  this.curr_bit_stk.push('mcrmisc');
};
BitmarkListener.prototype.exitMcrmisc = function(ctx) {
  this.curr_bit_stk.pop(); // obj
  this.curr_bit_stk.pop(); // "mcrmisc"
};


BitmarkListener.prototype.get_multi_choice_keys = function(bit_type) {
  const mul_choice_list_key = {
    'multiple-choice-1':    'choices-choice',
    'multiple-choice':      'quizzes-choices-choice',
    'multiple-response-1':  'responses-response',
    'multiple-response':    'quizzes-responses-response',
    'true-false-1':         'statement',
    'true-false':           'statements-statement',
  };
  const mul_choice_tmpl_class = {
    'multiple-choice-1':    JSON_BIT_TEMPLATES.Mc_quiz_choice,
    'multiple-choice':      JSON_BIT_TEMPLATES.Mc_quiz_choice,
    'multiple-response-1':  JSON_BIT_TEMPLATES.Mr_resp_resp,
    'multiple-response':    JSON_BIT_TEMPLATES.Mr_resp_resp,
    'true-false-1':         null,
    'true-false':           JSON_BIT_TEMPLATES.True_false_stmt,
  };

  let list_key = mul_choice_list_key[bit_type];

  if (list_key) {
    let spl = list_key.split('-');
    spl.unshift(spl.length);
    // Get element template
    let tmpl = mul_choice_tmpl_class[bit_type];
    spl.push(tmpl);
    return spl;  // [len, key1, key2?, key3?, tmpl]
  }
  return [];
};

//
BitmarkListener.prototype.exitCplus = function(ctx) {
  this.curr_bit_stk.pop();  // cplus 
  this.curr_bit_stk.pop();  // cplus obj
};
BitmarkListener.prototype.exitCminus = function(ctx) {
  this.curr_bit_stk.pop();  // cminus 
  this.curr_bit_stk.pop();  // cminus obj
};

// Enter a parse tree produced by bitmarkParser#choice_plus.
BitmarkListener.prototype.exitChoice_plus = function(ctx) {
  let code = this.but.getcode(ctx);
  let bit_type = (this.stk.top()).bit.type;
  const re=/\[\+([^\]]*)\]/;
  let val = this.but.get_bit_value(re, code);
  let listname = bit_type.startsWith('highlight') ? 'texts' : 'options';

  if (bit_type==='bot-interview')
    return;   // TODO fix once JSON is defined

  if ('placeholders' in (this.stk.top()).bit) {
    // multi_choice_text inline choices
    let key = this.curr_bit_stk.top() === null ? '{0}' : this.curr_bit_stk.top();
    let opt;

    opt = bit_type!=='highlight-text'? R_clone(JSON_BIT_TEMPLATES.Mct_opt) :
                R_clone(JSON_BIT_TEMPLATES.Highlight_text_text);
    opt.text = val;
    opt.isCorrect = true;  // because plus
    this.stk.top().bit['placeholders'][key][listname].push(opt);
  }
  else if (bit_type==='true-false') {
    let bit = (this.stk.top()).bit;

    if (this.curr_bit_stk.size === 0) {
      console.error('True_false_stmt slot does not exist');
      return;
    }
    this.curr_bit_stk.top().statement = val;
    this.curr_bit_stk.top().isCorrect = true;
    (this.stk.top()).bit.body = (this.stk.top()).bit.body.replace(code,''); 
  }
  else {
    // multiple-choice+
    let bit = (this.stk.top()).bit;
    let spl = this.get_multi_choice_keys(bit_type);
    
    if (1 < spl[0]) {
      let sz1 = bit[spl[1]].length;
      let choice_obj; 
      
      sz1 = bit[spl[1]].length; // was 1

      let sz2 = 0;
      if (bit_type.endsWith('-1'))  // multi-choice-1, multi-response-1
	      sz2 = bit[spl[1]].length == 0 ? 0 : bit[spl[1]].length;
      else
      	sz2 = bit[spl[1]][sz1==0?0:sz1-1][spl[2]].length;
      
      if (4 < spl.length) {
	choice_obj = R_clone(spl[spl.length-1]);  // clone
	(bit[spl[1]][sz1-1])[spl[2]].push(choice_obj);
	sz2 = (bit[spl[1]][sz1-1])[spl[2]].length;
      }
      else {
	choice_obj = R_clone(spl[spl.length-1]); // clone
        bit[spl[1]].push(choice_obj);
				sz1 += 1;
      }
      if (2 < spl[0]) {
        ((bit[spl[1]][sz1-1])[spl[2]][sz2-1])[spl[3]] = val;
      }
      else {
	(bit[spl[1]][sz1-1])[spl[2]] = val;
	(bit[spl[1]][sz1-1]).isCorrect = true;  // bcz this is plus
      }
      (this.stk.top()).bit.body = (this.stk.top()).bit.body.replace(code,'');
      this.curr_bit_stk.push(choice_obj);
      this.curr_bit_stk.push('cplus');
    }
    else {
      bit[spl[1]] = val;
      (this.stk.top()).bit.body = (this.stk.top()).bit.body.replace(code,'');				
    }
  }
  
};

// Enter a parse tree produced by bitmarkParser#choice_minus.
BitmarkListener.prototype.exitChoice_minus = function(ctx) {
  let code = this.but.getcode(ctx);
  let bit_type = (this.stk.top()).bit.type;
  const re=/\[\-([^\]]*)\]/;
  let val = this.but.get_bit_value(re, code);
  let listname = bit_type.startsWith('highlight') ? 'texts' : 'options';
		
  if (bit_type==='bot-interview')
    return;   // TODO fix once JSON is defined

  if ('placeholders' in (this.stk.top()).bit) {
    // multi_choice_text inline choices
    let key = this.curr_bit_stk.top() === null ? '{0}' : this.curr_bit_stk.top();
    let opt;
    if (-1 < key.indexOf('$')) {
      key = key.split('$')[0];
    }
    opt = bit_type!=='highlight-text'? R_clone(JSON_BIT_TEMPLATES.Mct_opt) :
           R_clone(JSON_BIT_TEMPLATES.Highlight_text_text);
    opt.text = val;
    opt.isCorrect = false;  // because minus

    this.stk.top().bit['placeholders'][key][listname].push(opt);    
  }
  else if (bit_type==='true-false') {
    let bit = (this.stk.top()).bit;

    if (this.curr_bit_stk.size === 0) {
      console.error('True_false_stmt slot does not exist');
      return;
    }
    this.curr_bit_stk.top().statement = val;
    this.curr_bit_stk.top().isCorrect = false;
    (this.stk.top()).bit.body = (this.stk.top()).bit.body.replace(code,'');
  }
  else {
    // multiple-choice-
    let spl = this.get_multi_choice_keys(bit_type);
    let bit = (this.stk.top()).bit;

    if (1 < spl[0]) {
      let sz1 = bit[spl[1]].length;
      let choice_obj;

      sz1 = bit[spl[1]].length; 
      let sz2;
      if (bit_type.endsWith('-1'))
	sz2 = bit[spl[1]].length == 0 ? 0 : bit[spl[1]].length;
      else
      	sz2 = bit[spl[1]][sz1==0?0:sz1-1][spl[2]].length;
       
      if (4 < spl.length) {
	choice_obj = R_clone(spl[spl.length-1]);
	(bit[spl[1]][sz1-1])[spl[2]].push(choice_obj);
	sz2 = (bit[spl[1]][sz1-1])[spl[2]].length;
      }
      else {
	choice_obj = R_clone(spl[spl.length-1]); // clone
	bit[spl[1]].push(choice_obj);
	sz1 += 1;
      }
      
      if (2 < spl[0]) {
	((bit[spl[1]][sz1-1])[spl[2]][sz2-1])[spl[3]] = val;
	((bit[spl[1]][sz1-1])[spl[2]][sz2-1]).isCorrect = false;
      }
      else {
	(bit[spl[1]][sz1-1])[spl[2]] = val;
	(bit[spl[1]][sz1-1]).isCorrect = false;  // bcz this is minus
      }
      (this.stk.top()).bit.body = (this.stk.top()).bit.body.replace(code,'');
      this.curr_bit_stk.push(choice_obj);
      this.curr_bit_stk.push('cminus');
    }
    else {
      // (spl[0]===1)
      bit[spl[1]] = val;
    }
  }
};

BitmarkListener.prototype.exitIl_choice_plus = function(ctx) {
    this.exitChoice_plus(ctx);
};
BitmarkListener.prototype.exitIl_choice_minus = function(ctx) {
    this.exitChoice_minus(ctx);
};

// Enter a parse tree produced by bitmarkParser#multiple_choice_1.
BitmarkListener.prototype.enterMultiple_choice_1 = function(ctx) {
  this.push_tmpl(ctx, 'multiple-choice-1', R_clone(JSON_BIT_TEMPLATES.Multi_choice_1));
};
// Exit a parse tree produced by bitmarkParser#multiple_choice_1.
//BitmarkListener.prototype.exitMultiple_choice_1 = function(ctx) {};

// Enter a parse tree produced by bitmarkParser#multiple_choice.
BitmarkListener.prototype.enterMultiple_choice = function(ctx) {
  this.push_tmpl(ctx, 'multiple-choice', R_clone(JSON_BIT_TEMPLATES.Multi_choice));  
};
// Exit a parse tree produced by bitmarkParser#multiple_choice.
//BitmarkListener.prototype.exitMultiple_choice = function(ctx) {};

// Enter a parse tree produced by bitmarkParser#multiple_response_1.
BitmarkListener.prototype.enterMultiple_response_1 = function(ctx) {
  this.push_tmpl(ctx, 'multiple-response-1', R_clone(JSON_BIT_TEMPLATES.Multi_response_1));
};
// Exit a parse tree produced by bitmarkParser#multiple_response_1.
//BitmarkListener.prototype.exitMultiple_response_1 = function(ctx) {};

// Enter a parse tree produced by bitmarkParser#multiple_response.
BitmarkListener.prototype.enterMultiple_response = function(ctx) {
  this.push_tmpl(ctx, 'multiple-response', R_clone(JSON_BIT_TEMPLATES.Multi_response));
};
// Exit a parse tree produced by bitmarkParser#multiple_response.
BitmarkListener.prototype.exitMultiple_response = function(ctx) {};

// Enter a parse tree produced by bitmarkParser#multiple_choice_text.
BitmarkListener.prototype.enterMultiple_choice_text = function(ctx) {
  this.push_tmpl(ctx, 'multiple-choice-text',
		 R_clone(JSON_BIT_TEMPLATES.Multi_choice_text));
};
//BitmarkListener.prototype.exitMultiple_choice_text = function(ctx) {};
  
BitmarkListener.prototype.exitMultiple_il_choice = function(ctx) {
  this.curr_bit_stk.pop(); 
};

BitmarkListener.prototype.enterHighlight_text = function(ctx) {
  this.push_tmpl(ctx, 'highlight-text', R_clone(JSON_BIT_TEMPLATES.Highlight_text));
};
//BitmarkListener.prototype.exitHighlight_text = function(ctx) {};

//
BitmarkListener.prototype.enterHeaded_inline_choices = function(ctx) {
  let code = this.but.getcode(ctx);
  let p =  R_clone(JSON_BIT_TEMPLATES.Mct_placeholder);
  let n = Object.keys(this.stk.top().bit['placeholders']).length;
  let key = `{${n}}`;

  this.stk.top().bit['placeholders'][key] = p;
  this.curr_bit_stk.push(p); // let children know the key  
  this.curr_bit_stk.push(key); // let children know the key
};
BitmarkListener.prototype.exitHeaded_inline_choices = function(ctx) { 
  let code = this.but.getcode(ctx);
	let key = this.curr_bit_stk.pop();

  // replace the choices with the placeholder seq num
  code = code.replace(/\[[^\+\-][^\]]+\]/g, '');
  this.stk.top().bit['body'] = this.stk.top().bit['body'].replace(code, key);
  this.curr_bit_stk.pop();  // discard p
};
//
BitmarkListener.prototype.enterHighlight_inline_choices = function(ctx) {
  let code = this.but.getcode(ctx);
  let p =  R_clone(JSON_BIT_TEMPLATES.Highlight_placeholder);
  let n = Object.keys(this.stk.top().bit['placeholders']).length;
  let key = `{${n}}`;

  this.stk.top().bit['placeholders'][key] = p;
  // let children know the key e.g. {0}  
  this.curr_bit_stk.push(p); // let children know the key  
  this.curr_bit_stk.push(key);
};
BitmarkListener.prototype.exitHighlight_inline_choices = function(ctx) { 
  let code = this.but.getcode(ctx);
  let key = this.curr_bit_stk.pop();

  //console.log('exitHighlight_inline_choices  '+code);
  // replace the choices with the placeholder seq num
  code = code.replace(/\[[^\+\-][^\]]+\]/g, '');
  this.stk.top().bit['body'] = this.stk.top().bit['body'].replace(code, key);
  this.curr_bit_stk.pop();  // discard p
};

// Enter a parse tree produced by bitmarkParser#choice_head.
BitmarkListener.prototype.exitChoice_head = function(ctx) {
  let code = this.but.getcode(ctx);
  const key = this.curr_bit_stk.top(); // let children know the key  
  const re=/\[\'([^\]]*)\]/;
  let val = this.but.get_bit_value(re, code);
  this.stk.top().bit['placeholders'][key].prefix = val;
  (this.stk.top()).bit.body = (this.stk.top()).bit.body.replace(code,'');		
}

// Enter a parse tree produced by bitmarkParser#cloze_and_multiple_choice_text.
BitmarkListener.prototype.enterCloze_and_multiple_choice_text = function(ctx) {
  this.push_tmpl(ctx, 'cloze-and-multiple-choice-text',
		 R_clone(JSON_BIT_TEMPLATES.Multi_choice_text));
};
// Exit a parse tree produced by bitmarkParser#cloze_and_multiple_choice_text.
//BitmarkListener.prototype.exitCloze_and_multiple_choice_text = function(ctx) {};

// Enter a parse tree produced by bitmarkParser#essay.
BitmarkListener.prototype.enterEssay = function(ctx) {
  this.push_tmpl(ctx, 'essay', R_clone(JSON_BIT_TEMPLATES.Essay_bit));
  this.curr_bit_stk.push(this.stk.top().bit);
  this.curr_bit_stk.push('essay');
}
// Exit a parse tree produced by bitmarkParser#essay.
//BitmarkListener.prototype.exitEssay = function(ctx) {};

// Enter a parse tree produced by bitmarkParser#ml_example.
// For multiple-choice-text and hightlight-text
BitmarkListener.prototype.enterIl_follow = function(ctx) {
  let code = this.but.getcode(ctx);
  let is_example = false;
  let key, bool_key=null;
  let re;

  //console.error('****enterIl_follow*** '+code);
  if (-1 < code.indexOf('[@exa')) {
    is_example = true;
    re = /\[@example:([^\]]*)\]/;
    key = 'example';
    bool_key = 'isExample';
  }
  else {
    is_example = false; // HINT
    re = /\[\?([^\]]*)\]/;
    key = 'hint';
    bool_key = null; 
  }
  let val = this.but.get_bit_value(re, code);
  if (val === null)
    val = '';
  let cbit = this.curr_bit_stk.top();
  
  if (cbit && cbit.startsWith('{')) {
    if (bool_key)
      this.stk.top().bit.placeholders[cbit][bool_key] = true;
    this.stk.top().bit.placeholders[cbit][key] = val;
    // Remove it from body
    (this.stk.top()).bit.body = (this.stk.top()).bit.body.replace(code,'');
  }
};

// Exit a parse tree produced by bitmarkParser#ml_example.
BitmarkListener.prototype.exitIl_follow = function(ctx) {
  let code = this.but.getcode(ctx);
  // Remove it from body
  (this.stk.top()).bit.body = (this.stk.top()).bit.body.replace(code,'');
};


// Enter a parse tree produced by bitmarkParser#example.
BitmarkListener.prototype.exitExample = function(ctx) {

  let code = this.but.getcode(ctx);
  const re = /\[@example:([^\]]*)\]/;
  let val = this.but.get_bit_value(re, code);
  if (val === null)
    val = '';
  let cbit = this.curr_bit_stk.top();
  let type = this.stk.top().bit.type;
  let remove_from_body = false;
  
  if (cbit==='pair' || cbit==='pquery' || cbit==='panswer') {
    let lastpair = this.stk.top().bit['pairs'].length-1;
    this.stk.top().bit['pairs'][lastpair].isExample = true;
    this.stk.top().bit['pairs'][lastpair].example = val.trim();
    // Remove it from body
    remove_from_body = true;
  }
  else if (cbit && typeof cbit==='string' && cbit.startsWith('{')) {
    this.set_value_based_on_curr_bit_stk(val, 'example', true, 'isExample', null);
    remove_from_body = true;
  }
  else if (cbit==='interview_qanda' || cbit==='essay') {
    (this.curr_bit_stk.second()).example = val;
    (this.curr_bit_stk.second()).isExample = true;
    remove_from_body = true;
  }
  else if (type==='match-matrix') {
    let cell_len = this.curr_bit_stk.bottom().cells.length;
    this.curr_bit_stk.bottom().cells[cell_len-1].example = val;
    this.curr_bit_stk.bottom().cells[cell_len-1].isExample = true;
    remove_from_body = true;
  }
  else if (type==='true-false' && (cbit==='cplus' || cbit==='cminus')) {
    // Interview JSON not defined yet
    this.curr_bit_stk.bottom()['example'] = val;  // (((((
    this.curr_bit_stk.bottom().isExample = true;
    remove_from_body = true;
  }
  else if (typeof cbit==='object'
	   && !(this.stk.top().bit.type.startsWith('interview')) // Interview JSON undef!
	   && !(this.stk.top().bit.type.startsWith('cloze')) // Need this 
	  ) {
    // Interview JSON not defined yet
    if (this.curr_bit_stk.size===1) {
      this.curr_bit_stk.top().example = val;
      this.curr_bit_stk.top().isExample = true;
      remove_from_body = true;
    }
    else if (2 <= this.curr_bit_stk.size) {
      this.curr_bit_stk.second().example = val;
      this.curr_bit_stk.second().isExample = true;
      remove_from_body = true;
    }
    else {
      this.stk.top().bit['example'] =  val;
      this.stk.top().bit['isExample'] =  true;
      remove_from_body = true;
    }
  }
  else {
    this.stk.top()['example'] =  val.trim();
    remove_from_body = true;
  }
  if (remove_from_body) {
    (this.stk.top()).bit.body = (this.stk.top()).bit.body.replace(code,'');
  }
};

// Enter a parse tree produced by bitmarkParser#interview.
BitmarkListener.prototype.enterInterview = function(ctx) {
  this.push_tmpl(ctx, 'interview', R_clone(JSON_BIT_TEMPLATES.Interview_bit)); 
};
BitmarkListener.prototype.exitInterview = function(ctx) {
  let bit = this.stk.top().bit;
  if (this.resformat != '' && bit.resource === undefined) {
    if (0 <= this.reslist.indexOf(this.resformat)) {
      // Line number is the num lines
      //let lines = (this.stk.top().bitmark.match(/\n/g)||[]).length;
      this.error_listener.manualError(ctx, ctx._start.line-1, 0,
				      'Missing resource(s) for '+this.resformat);
    }
  }
};

BitmarkListener.prototype.enterInterview_qanda = function(ctx) {
  let qanda = R_clone(JSON_BIT_TEMPLATES.Interview_question); 
  this.stk.top().bit['questions'].push(qanda);
  this.curr_bit_stk.push(qanda);
  this.curr_bit_stk.push('interview_qanda');
};
BitmarkListener.prototype.exitInterview_qanda = function(ctx) { // OK
  this.curr_bit_stk.pop();
  this.curr_bit_stk.pop();
};

BitmarkListener.prototype.exitEmphasis_ = function(ctx) {
  let code = this.but.getcode(ctx);
  let re=/\[\$(([^\]]|[\s])*)\]/s;  // accepts newline

  if (this.curr_bit_stk.top()==='interview_qanda') {
    let val = this.but.get_bit_value(re, code);
    (this.curr_bit_stk.second()).question = code;
    // Move this outer if there are multiple
    (this.stk.top()).bit.body = (this.stk.top()).bit.body.replace(this.but.getcode(ctx),'');
  }
};
BitmarkListener.prototype.exitDollarans = function(ctx) {
  let code = this.but.getcode(ctx);
  let re=/\[\$(([^\]]|[\s])*)\]/s;  // accepts newline

  if (this.curr_bit_stk.top()==='interview_qanda') {
    let val = this.but.get_bit_value(re, code);
    (this.curr_bit_stk.second()).sampleSolution = val;
    // Move this outer if there are multiple
    (this.stk.top()).bit.body = (this.stk.top()).bit.body.replace(this.but.getcode(ctx),'');
  }
};
BitmarkListener.prototype.exitPartans = function(ctx) {
  let code = this.but.getcode(ctx);
  let re=/\[@partialAnswer:?(([^\]]|[\s])*)\]/s;  // accepts newline
  const cbit = this.curr_bit_stk.top()

  if (cbit==='interview_qanda'||cbit==='essay') {
    let val = this.but.get_bit_value(re, code);
    (this.curr_bit_stk.second()).partialAnswer = val;
    // Move this outer if there are multiple
    (this.stk.top()).bit.body = (this.stk.top()).bit.body.replace(this.but.getcode(ctx),'');
  }
};

// Enter a parse tree produced by bitmarkParser#longans.
// [@longAnswer]
BitmarkListener.prototype.exitLongans = function(ctx) {
  let cbit = this.curr_bit_stk.top();
  if (cbit==='Panswer') {
    let lastpair = this.stk.top().bit['pairs'].length-1;
    this.stk.top().bit['pairs'][lastpair].isLongAnswer = true;
  }
  else if (cbit==='interview_qanda') 
    (this.curr_bit_stk.second()).isShortAnswer = false;

  (this.stk.top()).bit.body = (this.stk.top()).bit.body.replace(this.but.getcode(ctx),'');    
}

BitmarkListener.prototype.exitShortans = function(ctx) {
  let cbit = this.curr_bit_stk.top();
  if (cbit==='interview_qanda') 
    (this.curr_bit_stk.second()).isShortAnswer = true;
  (this.stk.top()).bit.body = (this.stk.top()).bit.body.replace(this.but.getcode(ctx),'');    
};
// 
BitmarkListener.prototype.exitInterview_text = function(ctx) {
  let cbit = this.curr_bit_stk.top();
  let code = this.but.getcode2(ctx).trim();  // was but.getcode()  
  if (cbit==='interview_qanda') 
    (this.curr_bit_stk.second()).question = code;
  (this.stk.top()).bit.body = (this.stk.top()).bit.body.replace(this.but.getcode(ctx),'');
};
BitmarkListener.prototype.exitInterview_sometext = function(ctx) {
  let cbit = this.curr_bit_stk.top();
  let code = this.but.getcode2(ctx).trim();  // was but.getcode()  
  if (cbit==='interview_qanda') 
    (this.curr_bit_stk.second()).question += code;
  (this.stk.top()).bit.body = (this.stk.top()).bit.body.replace(this.but.getcode(ctx),'');
};

BitmarkListener.prototype.enterInterview_instruction_grouped = function(ctx) {
  this.push_tmpl(ctx, 'interview-instruction-grouped',
		R_clone(JSON_BIT_TEMPLATES.Interview_bit));
};
// Enter a parse tree produced by bitmarkParser#interview_instruction_grouped.
//BitmarkListener.prototype.exitInterview_instruction_grouped = function(ctx) {};
BitmarkListener.prototype.exitFooter_resource = function(ctx) {
  let code = this.but.getcode2(ctx);  // was but.getcode()  
  (this.stk.top()).bit.footer = (this.stk.top()).bit.footer + code;
  (this.stk.top()).bit.body = (this.stk.top()).bit.body.replace(code,'');
};
BitmarkListener.prototype.enterInterview_footer = function(ctx) {
  this.curr_bit_stk.push('footer');
};
BitmarkListener.prototype.exitInterview_footer = function(ctx) {
  this.curr_bit_stk.pop();
};
// Enter a parse tree produced by bitmarkParser#title.
BitmarkListener.prototype.exitTitlestar_ = function(ctx) {
  let code = this.but.getcode(ctx);
  this.save_blocktaggedtext('emphasized', code);
}

// Enter a parse tree produced by bitmarkParser#title.
BitmarkListener.prototype.exitTitle = function(ctx) {
  let code = this.but.getcode(ctx);
  let val = this.but.get_title(code);
  let level = this.but.get_numhash(code);
  let bit = this.stk.top().bit;
  
  if (0 < this.stk.size) {
    if (0 < level && bit.type == 'chapter') {
      this.stk.top().bit['title'] =  val;
      this.stk.top().bit['level'] = level;
    }
    else {
      //Book
      if (level < 2)
	this.stk.top().bit['title'] =  val;
      else
	this.stk.top().bit['subtitle'] =  val;
    }
    // Remove it from body
    (this.stk.top()).bit.body = (this.stk.top()).bit.body.replace(code,'');
  }
  else
    log.error("enterTitle stack is empty");
};

BitmarkListener.prototype.remove_separators_from_body = function() {
  // Remove all === from body
  (this.stk.top()).bit.body = (this.stk.top()).bit.body.replace(/\n?==(=)?\n?/g,'');
};

// Enter a parse tree produced by bitmarkParser#match_.
BitmarkListener.prototype.enterMatch_ = function(ctx) {
  this.push_tmpl(ctx, 'match', R_clone(JSON_BIT_TEMPLATES.Match_bit));
}
// Exit a parse tree produced by bitmarkParser#match_.
BitmarkListener.prototype.exitMatch_ = function(ctx) {
  this.remove_separators_from_body();    // Remove all === from body
}

BitmarkListener.prototype.enterMatch_all = function(ctx) {
  this.push_tmpl(ctx, 'match-all', R_clone(JSON_BIT_TEMPLATES.Match_bit));
}
//BitmarkListener.prototype.exitMatch_all = function(ctx) {}

BitmarkListener.prototype.enterMatch_all_reverse = function(ctx) {
  this.push_tmpl(ctx, 'match-all-reverse', R_clone(JSON_BIT_TEMPLATES.Match_bit));
};
BitmarkListener.prototype.exitMatch_all_reverse = function(ctx) {
  this.remove_separators_from_body();    // Remove all === from body
};

BitmarkListener.prototype.enterMatch_reverse = function(ctx) {
  this.push_tmpl(ctx, 'match-reverse', R_clone(JSON_BIT_TEMPLATES.Match_bit));
}
BitmarkListener.prototype.exitMatch_reverse = function(ctx) { 
  this.remove_separators_from_body();    // Remove all === from body
};

BitmarkListener.prototype.enterMatch_picture = function(ctx) {
  this.push_tmpl(ctx, 'match-picture', R_clone(JSON_BIT_TEMPLATES.Match_bit));
};
BitmarkListener.prototype.exitMatch_picture = function(ctx) {
  this.remove_separators_from_body();    // Remove all === from body
};

BitmarkListener.prototype.enterMatch_audio = function(ctx) {
  this.push_tmpl(ctx, 'match-audio', R_clone(JSON_BIT_TEMPLATES.Match_bit));
};
BitmarkListener.prototype.exitMatch_audio = function(ctx) { 
  this.remove_separators_from_body();    // Remove all === from body
};

BitmarkListener.prototype.enterMatch_matrix = function(ctx) {
  this.push_tmpl(ctx, 'match-matrix', R_clone(JSON_BIT_TEMPLATES.MatchMatrix_bit));
};
BitmarkListener.prototype.exitMatch_matrix = function(ctx) {
  this.remove_separators_from_body();    // Remove all === from body
};

BitmarkListener.prototype.enterPair_heading = function(ctx) {
  this.stk.top().bit['heading'] = { 'forKeys':'', 'forValues':'' };
  this.curr_bit_stk.push('pair_heading');
};
BitmarkListener.prototype.exitPair_heading = function(ctx) { 
  // Remove it from body
  let code = this.but.getcode(ctx);
  (this.stk.top()).bit.body = (this.stk.top()).bit.body.replace(code,'');
  this.curr_bit_stk.pop();
};
// rule=heading_multi: key_title eq value_title ( eq value_title )* ;
BitmarkListener.prototype.enterPair_heading_multi = function(ctx) {
  this.stk.top().bit['heading'] = { 'forKeys':'', 'forValues':[] };
};
BitmarkListener.prototype.exitPair_heading_multi = function(ctx) {
  let code = this.but.getcode(ctx);
  (this.stk.top()).bit.body = (this.stk.top()).bit.body.replace(code,'');
};

// For each pair create a pair object and push
BitmarkListener.prototype.enterPqpair = function(ctx) {

  let p =  R_clone(JSON_BIT_TEMPLATES.Match_pair);
  delete(p.keyImage);
  delete(p.keyAudio);
  this.stk.top().bit['pairs'].push(p);
  this.curr_bit_stk.push(p);
  this.curr_bit_stk.push('pair');  
};
BitmarkListener.prototype.exitPqpair = function(ctx) { 
  this.curr_bit_stk.pop();
  this.curr_bit_stk.pop();
};

// For each pair create a pair object and push
BitmarkListener.prototype.enterPair_multival = function(ctx) {
  let p =  R_clone(JSON_BIT_TEMPLATES.MatchMatrix_matrixelem);
  delete(p.keyImage);
  delete(p.keyAudio);
  this.stk.top().bit['matrix'].push(p);
  this.curr_bit_stk.push(p);
  this.curr_bit_stk.push('pair_multival');  
};
BitmarkListener.prototype.enterPair_multivals = function(ctx) {
  //console.error('enterPair_multivals');
};
BitmarkListener.prototype.exitPair_multival = function(ctx) {
  // Remove it from body
  let code = this.but.getcode(ctx);
  // Remove these from body
  (this.stk.top()).bit.body = (this.stk.top()).bit.body.replace(code,'');
};

// For each pair create a pair object and push
BitmarkListener.prototype.enterPair = function(ctx) {
  let p =  R_clone(JSON_BIT_TEMPLATES.Match_pair);
  delete(p.keyImage);
  delete(p.keyAudio);
  this.stk.top().bit['pairs'].push(p);
};
//
// For each pair create a pair object and push
BitmarkListener.prototype.enterPair_image = function(ctx) {
  let p =  R_clone(JSON_BIT_TEMPLATES.Match_pair);
  delete(p.key);
  delete(p.keyAudio);
  this.stk.top().bit['pairs'].push(p);

};

//BitmarkListener.prototype.enterPair_audios = function(ctx) {};
// For each pair create a pair object and push
BitmarkListener.prototype.enterPair_audio = function(ctx) {
  let p =  R_clone(JSON_BIT_TEMPLATES.Match_pair);
  delete(p.key);
  delete(p.keyImage);
  this.stk.top().bit['pairs'].push(p);
};
// Audio bit
BitmarkListener.prototype.exitPaudiobit = function(ctx) {
  let code = this.but.getcode(ctx);
  let [what, url] = this.but.get_url(code);
  let lastpair = this.stk.top().bit['pairs'].length-1;

  this.stk.top().bit['pairs'][lastpair].keyAudio.src = url;
  this.stk.top().bit['pairs'][lastpair].keyAudio.format = url.split('.').pop();
  // Remove it from body
  (this.stk.top()).bit.body = (this.stk.top()).bit.body.replace(code,'');
};
// Image bit
BitmarkListener.prototype.exitPimagebit = function(ctx) {
  let code = this.but.getcode(ctx);
  let [what, url] = this.but.get_url(code);  // get_bracket_content(code);
  let lastpair = this.stk.top().bit['pairs'].length-1;

  this.stk.top().bit['pairs'][lastpair].keyImage['src'] = url; //.split('::').pop();
  // Remove it from body
  (this.stk.top()).bit.body = (this.stk.top()).bit.body.replace(code,'');
};

BitmarkListener.prototype.exitResource_chained = function(ctx) {
  let code = this.but.getcode(ctx);
  // e.g. code=[@src2x::https://cdn.bitbook.education/avatars/cat_70x70@2.jpg][
  let [key, url] = this.but.get_url(code);
  key = key.substring(1);
  let parent = 'resource';
  let child = this.curr_bit_stk.top(); // video, audio, image, imageLink etc
  let obname = child;
  let type = '';

  if (!this.resformat.toLowerCase().match(new RegExp(child.toLowerCase()), "i")) {
    parent = 'parser';
    child = 'excessResources';
    type = key;
  }
  else {
    if (!this.stk.top().bit[parent])
      this.stk.top().bit[parent] = {};    
    if (!this.stk.top().bit[parent][child])
      this.stk.top().bit[parent][child] = [];
  }
  let re = /\[@([^:]*)\s*:\s*([^\]]*)\s*\]/g;
  let vals = this.but.get_bit_value_colonsep(re, code);
  // @defs == width, height, duration, etc
  
  if (vals) {
    if (key==='posterImage' && key in this.stk.top().bit[parent][child]) {
      this.stk.top().bit[parent][child][key].src = vals[1];
      this.stk.top().bit[parent][child][key].format = vals[1].split('.').pop();
    }
    else if (child==='videoLink' && key.startsWith('src')) {
      key = 'thumbnails';
      // objects in array 
      if (!(key in this.stk.top().bit[parent][child]))
	this.stk.top().bit[parent][child][key] = [];
      let thumb = R_clone({ format: '', width: null, height: null });
      thumb[vals[0]] = url;
      thumb.format = url.split('.').pop();
      this.stk.top().bit[parent][child].thumbnails.push(thumb);
    }    
    else if (type) {
      if (!this.stk.top()[parent])
	this.stk.top()[parent] = {};    
      if (!this.stk.top()[parent][child])
	this.stk.top()[parent][child] = [];
      let len = this.stk.top()[parent][child].length;
      if (len==0) {
	this.stk.top()[parent][child].push({'type': obname});
	len++;
      }
      this.stk.top()[parent][child][len-1][vals[0]] = vals[1];
    }
    else
      this.stk.top().bit[parent][child][vals[0]] = vals[1];
  }
  (this.stk.top()).bit.body = (this.stk.top()).bit.body.replace(code,'');
};


BitmarkListener.prototype.exitImage_chained4match = function(ctx) {
  let code = this.but.getcode(ctx);
  // e.g. code=[@src2x::https://cdn.bitbook.education/avatars/cat_70x70@2.jpg][
  let [key, url] = this.but.get_url(code); // bracket_content(code);
  let lastpair = this.stk.top().bit['pairs'].length-1;
  
  key = key.substring(1);
  this.stk.top().bit['pairs'][lastpair].keyImage[key] = url;
  (this.stk.top()).bit.body = (this.stk.top()).bit.body.replace(code,'');
};

BitmarkListener.prototype.exitImage_chained = function(ctx) {
  let code = this.but.getcode(ctx);
  // e.g. code=[@src2x::https://cdn.bitbook.education/avatars/cat_70x70@2.jpg][
  let [key, url] = this.but.get_url(code);
  let parent = 'resource'; //this.curr_bit_stk.top();
  let child = this.curr_bit_stk.top().trim();
  key = key.substring(1).trim();
  
  if (1 < this.curr_bit_stk.size) {
    let second = this.curr_bit_stk.second();
    if (second==='initiator'||second==='partner')
      child = 'avatarImage';
    this.stk.top().bit[parent][child][key] = url;
  }
  else {
    if (!this.stk.top().bit[parent])
      this.stk.top().bit[parent] = R_clone(JSON_BIT_TEMPLATES.Imageresource_element);
    this.stk.top().bit[parent][child][key] = url;
  }
  (this.stk.top()).bit.body = (this.stk.top()).bit.body.replace(code,'');
};

BitmarkListener.prototype.enterKey_title = function(ctx) {
  let code = this.but.getcode(ctx);
  let val = this.but.get_title(code);
  if (0 < this.stk.size) {
    this.stk.top().bit.heading['forKeys'] =  val;
  }
  else
    log.error("enterKey_title stack is empty");
};
BitmarkListener.prototype.enterValue_title = function(ctx) {
  let code = this.but.getcode(ctx);
  let val = this.but.get_title(code);
  if (0 < this.stk.size) {
    this.stk.top().bit.heading['forValues'] =  val;
  }    
  else
    log.error("enterValue_title stack is empty");
};
BitmarkListener.prototype.enterValue_title_multi = function(ctx) {
  let code = this.but.getcode(ctx);
  let val = this.but.get_title(code);
  if (0 < this.stk.size)
    this.stk.top().bit.heading['forValues'].push(val);
  else
    log.error("enterValue_title stack is empty");
};

BitmarkListener.prototype.enterPquery = function(ctx) {

  let code = this.but.getcode(ctx);
  code = this.but.remove_tail(code, '\n=+\n?');
  if (!code)
    return;
  this.curr_bit_stk.push('pquery'); // this is the marker
};
//
BitmarkListener.prototype.exitPquery = function(ctx) {
  this.curr_bit_stk.pop();
};

BitmarkListener.prototype.exitPquery__ = function(ctx) {
  let code = this.but.getcode(ctx);
  let val = code;
  let topkey = 'pairs';
  let lastpairidx = this.stk.top().bit[topkey].length-1;

  if (0 < this.stk.size) {
    // Check if bracketted string e.g. [%11] is inside ** **
    // If true, then we don't remove them as those are not processed.
    //if (!this.but.is_brackets_inside_stars(val)) {
    const re = /\[[^\]]+\]/g;  ///\[[^\]]+\](.*$)/;
    val = val.replace(re, ''); // Remove all [] enclosed thingy
    //}
    if (!val.startsWith('=='))
      this.stk.top().bit[topkey][lastpairidx]['key'] += val;
    (this.stk.top()).bit.body = (this.stk.top()).bit.body.replace(val,'');
  }
};

//
BitmarkListener.prototype.enterMpquery = function(ctx) {
  this.curr_bit_stk.push('mpquery'); // this is the marker
};
//
BitmarkListener.prototype.exitMpquery__ = function(ctx) {

  let code = this.but.getcode(ctx);
  let val = code;
  let topbit = this.stk.top().bit;
  let lastmatidx = this.stk.top().bit['matrix'].length-1;

  if (0 < this.stk.size) {
    val = val.replace(/\[[^\]]+\]/g, '');    
    this.stk.top().bit['matrix'][lastmatidx]['key'] = val.trim();
    (this.stk.top()).bit.body = (this.stk.top()).bit.body.replace(val,''); 
  }
  else
    log.error("enterValue_title stack is empty");
  this.curr_bit_stk.pop();
};

BitmarkListener.prototype.enterPanswer__ = function(ctx) {
  this.curr_bit_stk.push('panswer');
};

BitmarkListener.prototype.exitPanswer__ = function(ctx) {

  let code = this.but.getcode(ctx);
  code = this.but.remove_tail(code, '\n=+\n?');
  
  let vals = code.split('\n--\n');
  // Could be an empty answer
  if (code.startsWith('==='))  
    return;
  let lastpairidx = this.stk.top().bit['pairs'].length-1;

  if (0 < this.stk.size) {
    for (let val of vals)
      if (val.length != 0) {
	val = val.replace(/\[@example(:[^\]]*)?\]/, '');
	this.stk.top().bit['pairs'][lastpairidx]['values'].push(val.trim());
	(this.stk.top()).bit.body = (this.stk.top()).bit.body.replace(val,'');
      }
  }
  else
    log.error("enterValue_title stack is empty");
  this.curr_bit_stk.pop();  // drop panswer
};
//
BitmarkListener.prototype.enterMpanswer = function(ctx) {
  const lastmatidx = this.stk.top().bit['matrix'].length-1;
  let cell = R_clone(JSON_BIT_TEMPLATES.MatchMatrix_cell);
  this.stk.top().bit['matrix'][lastmatidx]['cells'].push(cell);
  this.curr_bit_stk.push(cell);
};
BitmarkListener.prototype.exitMpanswer = function(ctx) {
  this.curr_bit_stk.pop();
};

BitmarkListener.prototype.enterMpanswer__ = function(ctx) {
  this.curr_bit_stk.push('mpanswer'); // let children know the key
};
//
BitmarkListener.prototype.exitMpanswer__ = function(ctx) {
  let code = this.but.getcode(ctx, true); // pass true to say this could end without ]
  code = this.but.remove_tail(code, '\n=+\n?');
  let vals = code.split('\n--\n');
  // Could be an empty answer
  if (code.startsWith('==='))  
    return;
  let lastmxidx = this.stk.top().bit['matrix'].length-1;

  if (0 < this.stk.size) {
    for (let val of vals)
      if (val.length != 0) {
	val = val.replace(/\[[^\]]+\]/g, '');
	// ORed values go into the same slot.
	let cellsz = this.stk.top().bit['matrix'][lastmxidx]['cells'].length;
	this.stk.top().bit['matrix'][lastmxidx]['cells'][cellsz-1]['values'] .push(val.trim());
	(this.stk.top()).bit.body = (this.stk.top()).bit.body.replace(val,'');
      }
  }
  else
    log.error("enterValue_title stack is empty");  
  this.curr_bit_stk.pop();
};

// Enter a parse tree produced by bitmarkParser#match_solution_grouped.
BitmarkListener.prototype.enterMatch_solution_grouped = function(ctx) {
  this.push_tmpl(ctx, 'match-solution-grouped', R_clone(JSON_BIT_TEMPLATES.Match_bit));
};
// Exit a parse tree produced by bitmarkParser#match_solution_grouped.
//BitmarkListener.prototype.exitMatch_solution_grouped = function(ctx) {};

// Enter a parse tree produced by bitmarkParser#true_false_1.
BitmarkListener.prototype.enterTrue_false_1 = function(ctx) {
  this.push_tmpl(ctx, 'true-false-1', R_clone(JSON_BIT_TEMPLATES.True_false_1));
}
// Exit a parse tree produced by bitmarkParser#true_false_1.
//BitmarkListener.prototype.exitTrue_false_1 = function(ctx) {}

// Enter a parse tree produced by bitmarkParser#true_false.
BitmarkListener.prototype.enterTrue_false = function(ctx) {
  this.push_tmpl(ctx, 'true-false', R_clone(JSON_BIT_TEMPLATES.True_false));
}
// Exit a parse tree produced by bitmarkParser#true_false.
//BitmarkListener.prototype.exitTrue_false = function(ctx) {};

// Enter a parse tree produced by bitmarkParser#bool_label.
// [@label-true:rather yes]
// [@label-false:rather no]
BitmarkListener.prototype.exitBool_label = function(ctx) {
  let code = this.but.getcode(ctx);
  const re = /\[@label(True|False):([^\]]+)\]/;
  let m = code.match(re);
  
  let val = m[2];
  if (0 < code.indexOf('labelTrue'))
    this.stk.top().bit.labelTrue = val;
  else
    this.stk.top().bit.labelFalse = val;
  // Remove from body
  (this.stk.top()).bit.body = (this.stk.top()).bit.body.replace(code,'');  
};
// Numeric value property
BitmarkListener.prototype.exitProgress_points = function(ctx) {
  let code = this.but.getcode(ctx);
  let val = this.check_numeric_prop(ctx, code, 'progressPoints');
  if (!val)
    return;
  this.stk.top().bit.progressPoints = parseInt(val);
  // Remove from body
  (this.stk.top()).bit.body = (this.stk.top()).bit.body.replace(code,'');  
};

// Common func to check with numeric value properties
BitmarkListener.prototype.check_numeric_prop = function(ctx, code, propname) {
  const re = /: *([0-9]+)\]/;
  let m = code.match(re);
  if (m == null) {
    this.error_listener.manualError(ctx, ctx._start.line-1, 0,
			    propname + ' property has to be positive integer value');
    return null;
  }
  return m[1];
};

// Boolean property
BitmarkListener.prototype.exitIstracked = function(ctx) {
  let code = this.but.getcode(ctx);
  let val = this.check_bool_prop(ctx, code, 'isTracked');
  if (!val)
    return;
  this.stk.top().bit.isTracked = (val==='true');
  // Remove from body
  (this.stk.top()).bit.body = (this.stk.top()).bit.body.replace(code,'');  
};
// Boolean property
BitmarkListener.prototype.exitIsinfoonly = function(ctx) {
  let code = this.but.getcode(ctx);
  let val = this.check_bool_prop(ctx, code, 'isInfoOnly');
  if (!val)
    return;
  this.stk.top().bit.isInfoOnly = (val==='true');
  // Remove from body
  (this.stk.top()).bit.body = (this.stk.top()).bit.body.replace(code,'');  
};

// Common func to check with numeric value properties
BitmarkListener.prototype.check_bool_prop = function(ctx, code, propname) {
  const re = /: *(true|false)\]/;
  let m = code.match(re);
  if (m == null) {
    this.error_listener.manualError(ctx, ctx._start.line-1, 0,
			    propname + ' property has to be true or false');
    return null;
  }
  return m[1];
};


// Enter a parse tree produced by bitmarkParser#sequence.
BitmarkListener.prototype.enterSequence = function(ctx) {
  this.push_tmpl(ctx, 'sequence', R_clone(JSON_BIT_TEMPLATES.Sequence));
};
// Exit a parse tree produced by bitmarkParser#sequence.
BitmarkListener.prototype.exitSequence = function(ctx) {
  (this.stk.top()).bit.body = (this.stk.top()).bit.body.replace(/\n?--?\n?/g,'');
  (this.stk.top()).bit.body = (this.stk.top()).bit.body.replace(/\n?===?\n?/g,'');  
};
//
BitmarkListener.prototype.exitSeqstr = function(ctx) {
  let code = this.but.getcode(ctx);
  this.stk.top().bit['elements'].push(code);
  (this.stk.top()).bit.body = (this.stk.top()).bit.body.replace(code,'');  
};

// Enter a parse tree produced by bitmarkParser#correction.
BitmarkListener.prototype.enterCorrection = function(ctx) {
  this.push_tmpl(ctx, 'correction');    // TODO fix template
};
// Exit a parse tree produced by bitmarkParser#correction.
//BitmarkListener.prototype.exitCorrection = function(ctx) {};

// Enter a parse tree produced by bitmarkParser#mark_.
BitmarkListener.prototype.enterMark_ = function(ctx) {
  this.push_tmpl(ctx, 'mark', R_clone(JSON_BIT_TEMPLATES.Mark_bit)); 
}
// Exit a parse tree produced by bitmarkParser#mark_.
//BitmarkListener.prototype.exitMark_ = function(ctx) {}

// Enter a parse tree produced by bitmarkParser#mark_text.
// ----- intentionallu enter -------
BitmarkListener.prototype.enterMark_text = function(ctx) {
  let code = this.but.getcode(ctx);
  let re=/\[\'([^\]]*)\]/;
  let val = this.but.get_bit_value(re, code);

  if (!('marks' in this.stk.top().bit))
      (this.stk.top()).bit['marks'] = {};
  let n = Object.keys(this.stk.top().bit['marks']).length;
  let key = `{${val}:${n}}$marks`;
  this.curr_bit_stk.push(key);

  // Remove it from the body
  re=/(\[\'[^\]]*\])/;
  let m = code.match(re);
  code = m[1];
  (this.stk.top()).bit.body = (this.stk.top()).bit.body.replace(code,'');
}

// Exit a parse tree produced by bitmarkParser#mark_text.
BitmarkListener.prototype.exitMark_text = function(ctx) {
  this.curr_bit_stk.pop();
};

// Enter a parse tree produced by bitmarkParser#mark_color.
BitmarkListener.prototype.enterMark_color = function(ctx) {
  let code = this.but.getcode(ctx);
  let re = /\[@([^:]*)\s*:\s*([^\]]+)\s*\]/g;
  let vals = this.but.get_bit_value_colonsep(re, code);
  if (1 < vals.length) {
    this.set_value_based_on_curr_bit_stk(vals[1], 'mark', null, null,
					 R_clone(JSON_BIT_TEMPLATES.Mark_element));
    // Remove it from the body
    (this.stk.top()).bit.body = (this.stk.top()).bit.body.replace(code,'');
  }
  else
    log.error("enterMark_color stack is empty"); //  TODO is this good?
};

// Enter a parse tree produced by bitmarkParser#document_upload.
BitmarkListener.prototype.enterDocument_upload = function(ctx) {
  this.push_tmpl(ctx, 'document-upload');
}
// Exit a parse tree produced by bitmarkParser#document_upload.
//BitmarkListener.prototype.exitDocument_upload = function(ctx) {};
// Enter a parse tree produced by bitmarkParser#take_picture.
BitmarkListener.prototype.enterTake_picture = function(ctx) {
  this.push_tmpl(ctx, 'take-picture');
};
// Exit a parse tree produced by bitmarkParser#take_picture.
//BitmarkListener.prototype.exitTake_picture = function(ctx) {};
// Enter a parse tree produced by bitmarkParser#record.
BitmarkListener.prototype.enterRecord_audio = function(ctx) {
  this.push_tmpl(ctx, 'record');
};
// Exit a parse tree produced by bitmarkParser#record.
//BitmarkListener.prototype.exitRecord = function(ctx) {};
// Enter a parse tree produced by bitmarkParser#preparation_note.
BitmarkListener.prototype.enterPreparation_note = function(ctx) {
  this.push_tmpl(ctx, 'preparation-note');
}
// Exit a parse tree produced by bitmarkParser#preparation_note.
//BitmarkListener.prototype.exitPreparation_note = function(ctx) {};

// Enter a parse tree produced by bitmarkParser#assignment.
BitmarkListener.prototype.enterAssignment = function(ctx) {
  this.push_tmpl(ctx, 'assignment');
};
// Exit a parse tree produced by bitmarkParser#assignment.
//BitmarkListener.prototype.exitAssignment = function(ctx) {};

BitmarkListener.prototype.enterVocab = function(ctx) {
  this.push_tmpl(ctx, 'vocabulary');  // default template
};
//BitmarkListener.prototype.exitVocab = function(ctx) {};
BitmarkListener.prototype.enterVocab_1 = function(ctx) {
  this.push_tmpl(ctx, 'vocabulary-1');  // default template
};
//BitmarkListener.prototype.exitVocab_1 = function(ctx) {};
// Enter a parse tree produced by bitmarkParser#flashcard_1.
BitmarkListener.prototype.enterFlashcard_1 = function(ctx) {
  this.push_tmpl(ctx, 'flashcard-1');
};
//BitmarkListener.prototype.exitFlashcard_1 = function(ctx) {};
// New 0902/20202
BitmarkListener.prototype.enterFlashcard_set = function(ctx) {
  this.push_tmpl(ctx, 'flashcard-set');
};
//BitmarkListener.prototype.exitFlashcard_set = function(ctx) {};
// New 0902/20202
BitmarkListener.prototype.enterFlashcard_language_set = function(ctx) {
  this.push_tmpl(ctx, 'flashcard-language-set');
};
//BitmarkListener.prototype.exitFlashcard_language_set = function(ctx) {};
// New 0902/20202
BitmarkListener.prototype.enterFlashcard_language_1 = function(ctx) {
  this.push_tmpl(ctx, 'flashcard-language-1');
};
//BitmarkListener.prototype.exitFlashcard_language_1 = function(ctx) {};
// Enter a parse tree produced by bitmarkParser#flashcard.
BitmarkListener.prototype.enterFlashcard = function(ctx) {
  this.push_tmpl(ctx, 'flashcard');
};
// Exit a parse tree produced by bitmarkParser#flashcard.
//BitmarkListener.prototype.exitFlashcard = function(ctx) {};

// Added June 22.
BitmarkListener.prototype.exitAtdef_ = function(ctx) {
  let code = this.but.getcode(ctx);
  let re = /\[@([^:]*)\s*:\s*([^\]]*)\s*\]/g;
  let vals = this.but.get_bit_value_colonsep(re, code);
  let what = this.curr_bit_stk.top();
  
  if (what=='footer')
    return;
  if (0 < vals.length) {
    if (vals[0] === 'format' || vals[0] === 'type')
      vals[0] = '_'+vals[0];  // because those keys are already there

    if (-1 < this.atdef_str.indexOf(vals[0])) {
      // Not a list
      this.stk.top().bit[vals[0]] = vals[1];
    }
    else {
      if (!(vals[0] in this.stk.top().bit)) {
	this.stk.top().bit[vals[0]] = [];
      }
      if ((this.stk.top()).bit[vals[0]]==undefined) {
	(this.stk.top()).bit[vals[0]]=[];
      }
      if (vals[1]==='')
	vals[1]='undefined';
      if (typeof this.stk.top().bit[vals[0]] === 'object')
	(this.stk.top()).bit[vals[0]].push(vals[1]);
      else
	(this.stk.top()).bit[vals[0]] = vals[1];
    }
    (this.stk.top()).bit.body = (this.stk.top()).bit.body.replace(code,'');
  }
  else
    this.error_listener.manualError(ctx, ctx._start.line-1, 0,
				    'Missing a colon in [@] tag');
};

// Added July 24
BitmarkListener.prototype.exitReference = function(ctx) {
  this.exitAtdef_(ctx);
};
BitmarkListener.prototype.exitDateprop = function(ctx) {
  this.exitAtdef_(ctx);
};
BitmarkListener.prototype.exitDateprop_chained = function(ctx) {
  let code = this.but.getcode(ctx);
  let re = /\[@([^:]*)\s*:\s*([^\]]*)\s*\]/g;
  let vals = this.but.get_bit_value_colonsep(re, code);

  if (0 < vals.length) {
    if (-1 < this.atdef_str.indexOf(vals[0])) {
      this.stk.top().bit['dateEnd'] = vals[1];
    }
    (this.stk.top()).bit.body = (this.stk.top()).bit.body.replace(code,'');
  }
  else
    this.error_listener.manualError(ctx, ctx._start.line-1, 0,
				    'Missing a colon in [@] tag');
};


BitmarkListener.prototype.enterBit_alias = function(ctx) {
  this.push_tmpl(ctx, 'bit-alias');
};
//BitmarkListener.prototype.exitBit_alias = function(ctx) {};

// e.g. [???com.firstpub.09823409h44]
BitmarkListener.prototype.exitAngleref = function(ctx) {
  let code = this.but.getcode(ctx);
  let con = this.but.get_bracket_content(code);

  this.num_angleref++;
  if (this.num_angleref==2)
    (this.stk.top()).bit['referenceEnd'] = con.substr(1,con.length);
  else
    (this.stk.top()).bit['reference'] = con.substr(1,con.length);
  this.stk.top().bit['body'] = this.stk.top().bit['body'].replace(code, '');
};

// e.g.[.internal-link][!More examples and quizzes...][???Ref4.2.34]
BitmarkListener.prototype.enterInternal_link = function(ctx) {
  this.push_tmpl(ctx, 'internal-link');  
};
//BitmarkListener.prototype.exitInternal_link = function(ctx) {};

// Enter a parse tree produced by bitmarkParser#article.
BitmarkListener.prototype.enterArticle = function(ctx) { 
  this.push_tmpl(ctx, 'article', R_clone(JSON_BIT_TEMPLATES.Article_bit));
};
// Enter a parse tree produced by bitmarkParser#statement
BitmarkListener.prototype.enterStatement = function(ctx) { 
  // same as article
  this.push_tmpl(ctx, 'statement', R_clone(JSON_BIT_TEMPLATES.Article_bit));
};
BitmarkListener.prototype.enterDetails = function(ctx) { 
  // same as article
  this.push_tmpl(ctx, 'details-1', R_clone(JSON_BIT_TEMPLATES.Article_bit));
};
BitmarkListener.prototype.enterWbtcontinue = function(ctx) { 
  // same as article
  this.push_tmpl(ctx, 'wbt-continue', R_clone(JSON_BIT_TEMPLATES.Article_bit));
};
BitmarkListener.prototype.enterButtoncopytext = function(ctx) { 
  // same as article
  this.push_tmpl(ctx, 'button-copy-text', R_clone(JSON_BIT_TEMPLATES.Article_bit));
};
BitmarkListener.prototype.enterLearningpathdetails = function(ctx) { 
  // same as article
  this.push_tmpl(ctx, 'learning-path-details', R_clone(JSON_BIT_TEMPLATES.Article_bit));
};

//BitmarkListener.prototype.exitArticle = function(ctx) {};
// Enter a parse tree produced by bitmarkParser#article.
BitmarkListener.prototype.enterPage = function(ctx) { 
  this.push_tmpl(ctx, 'page', R_clone(JSON_BIT_TEMPLATES.Article_bit));
};
//BitmarkListener.prototype.exitPage = function(ctx) {};

// Enter a parse tree produced by bitmarkParser#article_attachment.
//BitmarkListener.prototype.enterArticle_attachment = function(ctx) {}

// NEW 12/2/2020
BitmarkListener.prototype.enterMessage = function(ctx) {
  this.push_tmpl(ctx, 'message', R_clone(JSON_BIT_TEMPLATES.Message_bit));
}
// NEW 12/2/2020
//BitmarkListener.prototype.exitMessage = function(ctx) {};

BitmarkListener.prototype.enterChat = function(ctx) {
  this.push_tmpl(ctx, 'chat', R_clone(JSON_BIT_TEMPLATES.Chat_bit));
};
BitmarkListener.prototype.exitChat = function(ctx) { 
  (this.stk.top()).bit.body = (this.stk.top()).bit.body.replace(/\n?==(=)?\n?/g,'');
};
// Conversation is equivalent to chat in all aspect.
BitmarkListener.prototype.enterConversation = function(ctx) {
  this.push_tmpl(ctx, 'conversation', R_clone(JSON_BIT_TEMPLATES.Chat_bit));  
};
BitmarkListener.prototype.exitConversation = function(ctx) { 
  (this.stk.top()).bit.body = (this.stk.top()).bit.body.replace(/\n?==(=)?\n?/g,'');
};

BitmarkListener.prototype.enterChat_initiator = function(ctx) {
  let code = this.but.getcode(ctx);
  (this.stk.top()).bit['chat'].push({
    name: (this.stk.top()).bit.initiator.name,
    alt:'',
    text: code,
    initiator: true
  });
};
BitmarkListener.prototype.exitChat_initiator = function(ctx) {
  // Remove it from body
  let code = this.but.getcode(ctx);
  (this.stk.top()).bit.body = (this.stk.top()).bit.body.replace(code,'');
};

BitmarkListener.prototype.enterChat_partner = function(ctx) {
  let code = this.but.getcode(ctx);
  (this.stk.top()).bit['chat'].push({
    name: (this.stk.top()).bit.partner.name,
    alt:'',
    text: code,
    initiator: false
  });
};
BitmarkListener.prototype.exitSspl_chat_partner = function(ctx) { 
  // Remove it from body
  let code = this.but.getcode(ctx);
  (this.stk.top()).bit.body = (this.stk.top()).bit.body.replace(code,'');
};

// Enter a parse tree produced by bitmarkParser#senderName.
BitmarkListener.prototype.enterInitiator = function(ctx) {
  this.curr_bit_stk.push('initiator');  // key for the  name
};
// Exit a parse tree produced by bitmarkParser#senderName.
BitmarkListener.prototype.exitInitiator = function(ctx) {
  // Remove it from body
  let code = this.but.getcode(ctx);
};

// Enter a parse tree produced by bitmarkParser#receiverName.
BitmarkListener.prototype.enterPartner = function(ctx) {
  this.curr_bit_stk.push('partner');  // key for the  name
};

// Exit a parse tree produced by bitmarkParser#receiverName.
BitmarkListener.prototype.exitPartner = function(ctx) {
  // Remove it from body
  let code = this.but.getcode(ctx);
};

// Enter a parse tree produced by bitmarkParser#name_text.
BitmarkListener.prototype.enterName_text = function(ctx) {
  let code = this.but.getcode(ctx);
  let name = this.but.get_title(code);
  const key = this.curr_bit_stk.top();
  (this.stk.top()).bit[key].name = name;
};
// Exit a parse tree produced by bitmarkParser#name_text.
BitmarkListener.prototype.exitName_text = function(ctx) {
  let code = this.but.getcode(ctx);
  let k = 'body';
  (this.stk.top()).bit.body = (this.stk.top()).bit.body.replace(code,'');
};

// Exit a parse tree produced by bitmarkParser#bot_choice.
BitmarkListener.prototype.exitBot_choice = function(ctx) {
  // Remove it from body
  let code = this.but.getcode(ctx);
  (this.stk.top()).bit.body = (this.stk.top()).bit.body.replace(code,'');
};

// Enter a parse tree produced by bitmarkParser#self_assessment.
BitmarkListener.prototype.enterSelf_assessment = function(ctx) {
  this.push_tmpl(ctx, 'self-assessment');
}
// Exit a parse tree produced by bitmarkParser#self_assessment.
//BitmarkListener.prototype.exitSelf_assessment = function(ctx) {};

// Enter a parse tree produced by bitmarkParser#rating.
BitmarkListener.prototype.enterRating = function(ctx) {
  this.push_tmpl(ctx, 'rating');
};
//BitmarkListener.prototype.exitRating = function(ctx) {};
// Enter a parse tree produced by bitmarkParser#rating.
BitmarkListener.prototype.enterSurvey = function(ctx) {
  this.push_tmpl(ctx, 'survey');
};
//BitmarkListener.prototype.exitSurvey = function(ctx) {};
// Enter a parse tree produced by bitmarkParser#rating.
BitmarkListener.prototype.enterSurvey_1 = function(ctx) {
  this.push_tmpl(ctx, 'survey-1');
};
BitmarkListener.prototype.exitSurvey_1 = function(ctx) {};
// Enter a parse tree produced by bitmarkParser#rating.
BitmarkListener.prototype.enterSurvey_anonymous = function(ctx) {
  this.push_tmpl(ctx, 'survey-anonymous');
};
BitmarkListener.prototype.exitSurvey_anonymous = function(ctx) {};
// Enter a parse tree produced by bitmarkParser#rating.
BitmarkListener.prototype.enterSurvey_anonymous_1 = function(ctx) {
  this.push_tmpl(ctx, 'survey-anonymous-1');
};
BitmarkListener.prototype.exitSurvey_anonymous_1 = function(ctx) {};
// Enter a parse tree produced by bitmarkParser#atpoint.
BitmarkListener.prototype.exitBullet_item = function(ctx) {
  let code = this.but.getcode(ctx);
  let val = this.but.get_bit_value(/\[ *???([^\]]+)\]/, code);
  
  if (!('bullet' in (this.stk.top()).bit))
    (this.stk.top()).bit['bullet'] = [];  // TODO change the name 'bullet'
  (this.stk.top()).bit['bullet'].push(val);
  (this.stk.top()).bit.body = (this.stk.top()).bit.body.replace(code,'');
}

// Enter a parse tree produced by bitmarkParser#atpoint.
BitmarkListener.prototype.exitAtpoint = function(ctx) {
  let code = this.but.getcode(ctx);
  let vals = this.but.get_at_value(code);
  if (!('points' in (this.stk.top()).bit))
    (this.stk.top()).bit['points'] = [];
  (this.stk.top()).bit['points'].push(vals[1]);
}

BitmarkListener.prototype.exitResource_format = function(ctx) {
  let fmt = this.but.remove_close_bracket_and_follow(this.but.getcode(ctx));
  if (fmt.startsWith(':bitmark')) {
    this.format = fmt;  // @1
    this.stk.top().bit.format = fmt.substring(1);
  }
  else
    this.resformat = fmt;
};
BitmarkListener.prototype.exitResource_format_extra = function(ctx) {
  let fmt = this.but.remove_close_bracket_and_follow(this.but.getcode(ctx));
  if (fmt.startsWith(':bitmark')) {
    this.format = fmt;  // @2
  }
  else
    this.resformat = fmt;
};

BitmarkListener.prototype.enterPimage_one = function(ctx) {
  this.curr_bit_stk.push('pimage');
};
BitmarkListener.prototype.enterImage_one = function(ctx) {
  let key = this.get_resource_type(ctx) 
  if (this.curr_bit_stk.top() != 'pimage')
    this.curr_bit_stk.push(key);
};
BitmarkListener.prototype.exitImagebit = function(ctx) {
  this.curr_bit_stk.pop();
};
// [&image::https://cdn
BitmarkListener.prototype.exitImage_one = function(ctx) {
  let code = this.but.getcode(ctx);
  let [what, url] = this.but.get_url(code);
  let key = this.curr_bit_stk.top().trim();
  let tmpl = key==='image' ? R_clone(JSON_BIT_TEMPLATES.Image_detail_element) :
      R_clone(JSON_BIT_TEMPLATES.ImageLink);
  let bittype = this.stk.top().bit.type;

  // From footer
  if (1 < this.curr_bit_stk.size && this.curr_bit_stk.second()==='footer')
    return;
  
  if (url == undefined) {
    // Error probably ': :'
    this.error_listener.manualError(ctx, ctx._start.line-1, 7, 'Syntax error: did you mean ::?');
    return;
  }
  if (bittype in {'chat':0,'conversation':1}
      && 1 < this.curr_bit_stk.size) {
    key = this.curr_bit_stk.second();
    (this.stk.top()).bit[key].avatarImage = tmpl;
    (this.stk.top()).bit[key].avatarImage['src'] = url;
    (this.stk.top()).bit[key].avatarImage['format'] = url.split('.').pop();
  }
  else if (this.resformat in {'&image':0, '&stillImageFilm':1, '&imageWithAudio':2}) {
    const res = this.but.remove_close_bracket_and_follow(code);
    (this.stk.top()).bit[this.body_key] = (this.stk.top()).bit[this.body_key].replace(code, '');
    const slot = 'resource';
    if (this.stk.top().bit[slot]==undefined)
      (this.stk.top()).bit[slot] = {};
    (this.stk.top()).bit[slot]['type'] = what.substr(1).trim();
    (this.stk.top()).bit[slot][key] = tmpl;
    (this.stk.top()).bit[slot][key]['src'] = url;
    (this.stk.top()).bit[slot][key]['format'] = url.split('.').pop();
    let caption = this.but.get_caption_string(code);
    if (caption) {
      (this.stk.top()).bit[slot][key]['caption'] = caption;
    }
  }
  else if (this.resformat in {'&imageLink':0, '&stillImageFilmLink':1}) {
    const res = this.but.remove_close_bracket_and_follow(code);
    (this.stk.top()).bit[this.body_key] = (this.stk.top()).bit[this.body_key].replace(code, '');
    const slot = 'resource';
    if (this.stk.top().bit[slot]==undefined)
      (this.stk.top()).bit[slot] = {};
    (this.stk.top()).bit[slot]['type'] = what.substr(1).trim();
    (this.stk.top()).bit[slot][key] = tmpl;
    (this.stk.top()).bit[slot][key]['url'] = url;
    (this.stk.top()).bit[slot][key]['provider'] = this.but.get_domain_from_url(url);    
  }  
  else if (key !== 'pimage' && bittype != 'interview') { // not match-pair
    const slot= 'excessResources';
    if ((this.stk.top()).parser == undefined)
      (this.stk.top())['parser'] = {};
    if ((this.stk.top()).parser[slot]===undefined)
      (this.stk.top()).parser[slot] = [];
    (this.stk.top()).parser[slot].push({'type': key, 
					'format': url.split('.').pop(),
					'src': url });
  }
  else if (1 < this.curr_bit_stk.size
	   && this.curr_bit_stk.second() === 'footer') { // not match-pair
    (this.stk.top()).bit.footer = (this.stk.top()).bit.footer + code;
    (this.stk.top()).bit.body = (this.stk.top()).bit.body.replace(code,'');
  }
  (this.stk.top()).bit.body = (this.stk.top()).bit.body.replace(code,'');
};

BitmarkListener.prototype.enterStillimagefilmbit = function(ctx) {
  let key = this.get_resource_type(ctx) 
  this.curr_bit_stk.push('stillImageFilm');  // this is intentional!
};  
BitmarkListener.prototype.exitStillimg_one = function(ctx) {
  this.exitImage_one(ctx);
};

BitmarkListener.prototype.enterAudiobit = function(ctx) {
  let key = this.get_resource_type(ctx) 
  this.curr_bit_stk.push(key);
};
BitmarkListener.prototype.exitAudiobit = function(ctx) {
  this.curr_bit_stk.pop();
};
// Enter a parse tree produced by bitmarkParser#audiobit.
BitmarkListener.prototype.exitAudio_one = function(ctx) {

  let code = this.but.getcode(ctx);
  let [what, url] = this.but.get_url(code);
  let key = this.curr_bit_stk.top(), slot='resource';

  if (url == undefined) {
    // Error probably ': :'
    this.error_listener.manualError(ctx, ctx._start.line-1, 7, 'Syntax error: did you mean ::?');
    return;
  }
  if (key in this.stk.top().bit
      && 'avatarImage' in this.stk.top().bit[key]) {
    // Chat, Survey etc
  }
  else if (this.resformat=='&audio'|| this.resformat == "&imageWithAudio") {
    const res = this.but.remove_close_bracket_and_follow(code);
    const key = what.substr(1);  // remove &
    if (this.stk.top().bit[slot]==undefined)
      (this.stk.top()).bit[slot] = {};
    (this.stk.top()).bit[slot]['type'] = key;
    (this.stk.top()).bit[slot][key] = {};
    (this.stk.top()).bit[slot][key]['format'] = url.split('.').pop();
    (this.stk.top()).bit[slot][key]['src'] = url;
    // Remove from the body
    (this.stk.top()).bit.body = (this.stk.top()).bit.body.replace(code,'');
  }
  else if (what==='&audioLink' && this.resformat.startsWith('&audio')) {
    const key = what.substr(1);  // remove &
    if (this.stk.top().bit[slot]==undefined)
      (this.stk.top()).bit[slot] = {};
    (this.stk.top()).bit[slot]['type'] = key;
    (this.stk.top()).bit[slot][key] = {};
    (this.stk.top()).bit[slot][key]['provider'] = url.split('.').pop();
    (this.stk.top()).bit[slot][key]['url'] = url;
    (this.stk.top()).bit[slot][key]['duration'] = '';
    (this.stk.top()).bit[slot][key]['autoplay'] = true;
    // Remove from the body
    (this.stk.top()).bit.body = (this.stk.top()).bit.body.replace(code,'');
  }  
  else if (1 < this.curr_bit_stk.size
	   && this.curr_bit_stk.second() === 'footer') { // not match-pair
    (this.stk.top()).bit.footer = (this.stk.top()).bit.footer + code;
    (this.stk.top()).bit.body = (this.stk.top()).bit.body.replace(code,'');
  }
  else {
    key = what.substring(1); slot= 'excessResources';
    if ((this.stk.top()).parser == undefined)
      (this.stk.top())['parser'] = {};
    if ((this.stk.top()).parser[slot]===undefined)
      (this.stk.top()).parser[slot] = [];
    (this.stk.top()).parser[slot].push({'type': key,
					'format': url.split('.').pop(),
					'src': url });
    // Remove from the body
    (this.stk.top()).bit.body = (this.stk.top()).bit.body.replace(code,'');
  }
};
BitmarkListener.prototype.get_resource_type = function(ctx) {
  let code = this.but.getcode(ctx);
  let [key, url] = this.but.get_url(code);
  return key.replace('&', '');
};

// Enter a parse tree produced by bitmarkParser#videobit.
BitmarkListener.prototype.enterVideobit = function(ctx) {
  let key = this.get_resource_type(ctx) 
  this.curr_bit_stk.push(key);
};
BitmarkListener.prototype.exitVideobit = function(ctx) {
  this.curr_bit_stk.pop();
};

BitmarkListener.prototype.exitVideo_one = function(ctx) {
  let code = this.but.getcode(ctx);
  let [what, url] = this.but.get_url(code);
  let key = this.curr_bit_stk.top(), slot='resource';

  if (url == undefined) {
    // Error probably ': :'
    this.error_listener.manualError(ctx, ctx._start.line-1, 7, 'Syntax error: did you mean ::?');
    return;
  }
  if (key in this.stk.top().bit
      && 'avatarImage' in this.stk.top().bit[key]) {
    // Chat, Survey etc
  }
  else if (this.resformat.startsWith('&video')) {
    const res = this.but.remove_close_bracket_and_follow(code);
    (this.stk.top()).bit[this.body_key] = (this.stk.top()).bit[this.body_key].replace(code, '');
    const key = what.substr(1);  // remove &
    (this.stk.top()).bit[slot] = {};
    (this.stk.top()).bit[slot]['type'] = key;
    (this.stk.top()).bit[slot][key] = key==='video' ? R_clone(JSON_BIT_TEMPLATES.Video) : R_clone(JSON_BIT_TEMPLATES.VideoLink);
    let parent = (this.stk.top()).bit[slot][key];
    
    if (key==='video') {
      parent['format'] = url.split('.').pop();
      parent['src'] = url;
      parent['mute'] = false;
      parent['autoplay'] = false;
    }
    else {// VideoLink
      parent['provider'] = this.but.get_domain_from_url(url);
      parent['url'] = url;
    }
      
    (this.stk.top()).bit.body = (this.stk.top()).bit.body.replace(code,'');
  }
  else if (1 < this.curr_bit_stk.size
	   && this.curr_bit_stk.second() === 'footer') { // not match-pair
    (this.stk.top()).bit.footer = (this.stk.top()).bit.footer + code;
    (this.stk.top()).bit.body = (this.stk.top()).bit.body.replace(code,'');
  }
  else {
    const slot= 'excessResources';
    if ((this.stk.top()).parser == undefined)
      (this.stk.top())['parser'] = {};
    if ((this.stk.top()).parser[slot]===undefined)
      (this.stk.top()).parser[slot] = [];
    (this.stk.top()).parser[slot].push({'type': key,
					'format': url.split('.').pop(),
					'src': url });
    (this.stk.top()).bit.body = (this.stk.top()).bit.body.replace(code,'');    
  }
};
BitmarkListener.prototype.enterArticlebit = function(ctx) {
  let key = this.get_resource_type(ctx) 
  this.curr_bit_stk.push(key);
};
// Enter a parse tree produced by bitmarkParser#videobit.
BitmarkListener.prototype.exitArticlebit = function(ctx) {

  let code = this.but.getcode(ctx);
  let [what, url] = this.but.get_url(code);
  let key = this.curr_bit_stk.top(), slot='resource';
  let format='', content='';

  if (what.startsWith('&'))
    key = what.substr(1);  // remove &
  
  if (url.startsWith('http')) {
    format = url.split('.').pop();
    content = '';
  }
  else {
    format = '';
    let regex = /\[&article:((.|[\r\n])*)\]/m
    let article = this.but.get_bit_value(regex, code);  
    content = article; // was url
  }
  if (key===null) {
    let re = /^\[&([^:]+):/;
    let m = code.match(re);
    key = m[1];
  }
  if (0 < this.stk.size && key in this.stk.top().bit
      && 'avatarImage' in this.stk.top().bit[key]) {
    // Chat, Survey etc
  }
  else if (what==='&articleLink') {
    (this.stk.top()).bit[slot] = {};
    (this.stk.top()).bit[slot]['type'] = key;
    (this.stk.top()).bit[slot][key] = {};
    (this.stk.top()).bit[slot][key]['url'] = url;    
  }
  else if (url.startsWith('http')) {
    let key_org = key;
    let parent = (this.stk.top()).bit[slot][key];    
    key = this.but.underscore_to_camelcase(key);
    //
    (this.stk.top()).bit[slot] = {};
    (this.stk.top()).bit[slot]['type'] = key_org;
    parent = {};
    parent['format'] = format;
    parent['url'] = url;
    parent['body'] = content;
  }
  else if (1 < this.curr_bit_stk.size
	   && this.curr_bit_stk.second() === 'footer') { // not match-pair
    (this.stk.top()).bit.footer = (this.stk.top()).bit.footer + code;
    (this.stk.top()).bit.body = (this.stk.top()).bit.body.replace(code,'');
  }
  else {
    // key is already set
    (this.stk.top()).bit[slot] = {};    
    let parent = (this.stk.top()).bit[slot];
    parent['type'] = key;
    parent[key] = {};   // article
    parent[key]['format'] = format;
    parent[key]['href'] = '';
    parent[key]['body'] = content;
  }
  (this.stk.top()).bit.body = (this.stk.top()).bit.body.replace(code,'');
};

// Enter a parse tree produced by bitmarkParser#videobit.
BitmarkListener.prototype.exitDocumentbit = function(ctx) {
  let code = this.but.getcode(ctx);
  let [what, url] = this.but.get_url(code);
  const key = this.curr_bit_stk.top(), slot='resource';

  const has_resource = (this.stk.top()).bit.resource!==undefined;
  if (key in this.stk.top().bit && 'avatarImage' in this.stk.top().bit[key]) {
    // Chat, Survey etc
  }
  if (!has_resource) {
    if (what==='&document') {
      const key = what.substr(1);  // remove &
      (this.stk.top()).bit[slot] = {}; // slot=resource
      (this.stk.top()).bit[slot]['type'] = key;  // document
      (this.stk.top()).bit[slot][key] = url;
      (this.stk.top()).bit[slot]['private'] = {};
    }
    if (what==='&documentLink') {
      const key = what.substr(1);  // remove &
      (this.stk.top()).bit[slot] = {}; // slot=resource
      (this.stk.top()).bit[slot]['type'] = key;  // document
      (this.stk.top()).bit[slot][key] = {};
      (this.stk.top()).bit[slot][key]['url'] = url;
      (this.stk.top()).bit[slot][key]['provider'] = this.but.get_domain_from_url(url);
    }
    /*else if (what==='&document-online') { // &document-online  Added 0907
      const key = what.substr(1);  // remove &
      const domain = this.but.get_domain_from_url(url);
      (this.stk.top()).bit[slot] = {};
      (this.stk.top()).bit[slot]['type'] = key;
      (this.stk.top()).bit[slot]['documentOnline'] = {};
      (this.stk.top()).bit[slot]['documentOnline']['format'] = domain;
      (this.stk.top()).bit[slot]['documentOnline']['href'] = url;
      (this.stk.top()).bit[slot]['private'] = {};
    }*/
    (this.stk.top()).bit.body = (this.stk.top()).bit.body.replace(code,'');
  }
  else if (1 < this.curr_bit_stk.size
	   && this.curr_bit_stk.second() === 'footer') { // not match-pair
    (this.stk.top()).bit.footer = (this.stk.top()).bit.footer + code;
    (this.stk.top()).bit.body = (this.stk.top()).bit.body.replace(code,'');
  }
  else {
    const key = 'document', slot= 'excessResources';
    if ((this.stk.top()).parser == undefined)
      (this.stk.top())['parser'] = {};
    if ((this.stk.top()).parser[slot]===undefined)
      (this.stk.top()).parser[slot] = [];
    (this.stk.top()).parser[slot].push({'type': key, src: url});
    (this.stk.top()).bit.body = (this.stk.top()).bit.body.replace(code,'');
  }
};
BitmarkListener.prototype.enterAppbit = function(ctx) {
  let key = this.get_resource_type(ctx) 
  this.curr_bit_stk.push(key);
};
// Enter a parse tree produced by bitmarkParser#videobit.
BitmarkListener.prototype.exitAppbit = function(ctx) {
  let code = this.but.getcode(ctx);
  let [what, url] = this.but.get_url(code);
  const key = this.curr_bit_stk.top();
  const has_resource = (this.stk.top()).bit.resource!==undefined;
  let slot='resource';
  
  if (what==='&appLink') {
    (this.stk.top()).bit[slot] = {};
    (this.stk.top()).bit[slot]['type'] = key;
    (this.stk.top()).bit[slot][key] = {};
    (this.stk.top()).bit[slot][key]['url'] = url;    
  }
  else if (!has_resource) {
    if (key in this.stk.top().bit && 'avatarImage' in this.stk.top().bit[key]) {
      // Chat, Survey etc
    }
    else {
      const key = what.substr(1);
      (this.stk.top()).bit[slot] = {};
      (this.stk.top()).bit[slot]['type'] = key;
      (this.stk.top()).bit[slot]['app'] = url;
      (this.stk.top()).bit[slot]['private'] = {};
    }
  }
  else if (1 < this.curr_bit_stk.size
	   && this.curr_bit_stk.second() === 'footer') { // not match-pair
    (this.stk.top()).bit.footer = (this.stk.top()).bit.footer + code;
    (this.stk.top()).bit.body = (this.stk.top()).bit.body.replace(code,'');
  }
  else {
    const key = 'app';
    slot= 'excessResources';
    if ((this.stk.top()).parser == undefined)
      (this.stk.top())['parser'] = {};
    if ((this.stk.top()).parser[slot]===undefined)
      (this.stk.top()).parser[slot] = [];
    (this.stk.top()).parser[slot].push({'type': key, src: url});
  }
  (this.stk.top()).bit.body = (this.stk.top()).bit.body.replace(code,'');
  
};

BitmarkListener.prototype.enterWebsitebit = function(ctx) {
  let key = this.get_resource_type(ctx) 
  this.curr_bit_stk.push(key);
};
// Added 12/8/2020
BitmarkListener.prototype.exitWebsitebit = function(ctx) {
  let code = this.but.getcode(ctx);
  let [what, url] = this.but.get_url(code);
  const key = this.curr_bit_stk.top();
  const has_resource = (this.stk.top()).bit.resource!==undefined;
  const slot='resource';
  
  if (what==='&websiteLink') {
    (this.stk.top()).bit[slot] = {};
    (this.stk.top()).bit[slot]['type'] = key;
    (this.stk.top()).bit[slot][key] = {};
    (this.stk.top()).bit[slot][key]['siteName'] = ''; 
    (this.stk.top()).bit[slot][key]['url'] = url; 
  }  
  else if (!has_resource) {
    if (key in this.stk.top().bit && 'avatarImage' in this.stk.top().bit[key]) {
      // Chat, Survey etc
    }
    else {
      (this.stk.top()).bit[slot] = {};
      (this.stk.top()).bit[slot]['type'] = key;
      (this.stk.top()).bit[slot]['website'] = url;
      (this.stk.top()).bit[slot]['siteName'] = this.but.get_url_in_text(url);
      (this.stk.top()).bit[slot]['private'] = {};
    }
  }
  else if (1 < this.curr_bit_stk.size
	   && this.curr_bit_stk.second() === 'footer') { // not match-pair
    (this.stk.top()).bit.footer = (this.stk.top()).bit.footer + code;
    (this.stk.top()).bit.body = (this.stk.top()).bit.body.replace(code,'');
  }
  else {
   const key = 'website', slot= 'excessResources';
    if ((this.stk.top()).parser == undefined)
      (this.stk.top())['parser'] = {};
    if ((this.stk.top()).parser[slot]===undefined)
      (this.stk.top()).parser[slot] = [];
    (this.stk.top()).parser[slot].push({'type': key, src: url});
  }
  // Remove from body
  (this.stk.top()).bit.body = (this.stk.top()).bit.body.replace(code,'');

};


function escapeRegExp(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

// Enter a parse tree produced by bitmarkParser#item.
BitmarkListener.prototype.exitItem = function(ctx) {
  const code = this.but.getcode(ctx);
  let regex = /\[%\s*([^\]]+)\s*\]/;
  let val = this.but.get_bit_value(regex, code);  
  let cbit = this.curr_bit_stk.top();
  let type = this.stk.top().bit.type;

  if (code.startsWith('[%]')) {
    // item is [%].
    (this.stk.top()).bit.body = (this.stk.top()).bit.body.split(code).join('');
    return;
  }
  if (cbit==='cplus' || cbit==='cminus' || cbit==='interview_qanda') {
    (this.curr_bit_stk.second()).item = val;
  }
  else if (cbit === 'pquery') {
    let lastpair = this.stk.top().bit['pairs'].length-1;
    this.stk.top().bit['pairs'][lastpair].item = val;
    this.curr_bit_stk.pop();
  }
  else if (cbit === 'mpquery') {
    let last = this.stk.top().bit['matrix'].length-1;
    this.stk.top().bit['matrix'][last].item = val;
    this.curr_bit_stk.pop();
  }
  else if (cbit && typeof cbit==='string' && cbit.startsWith('{')) {
    this.set_value_based_on_curr_bit_stk(val, 'item', true);
  }
  else {
    if (cbit==='mcrmisc') {
      this.curr_bit_stk.second()['item'] = val;
    }
    else if (!this.stk.top().bit.item) {
      this.stk.top().bit.item = val;  // save the only first one
    }
  }
  // remove anyway 
  (this.stk.top()).bit.body = (this.stk.top()).bit.body.split(code).join('');
};

// new 11/20/2021
BitmarkListener.prototype.exitLead = function(ctx) {
  const code = this.but.getcode(ctx);
  let regex = /\[%\s*([^\]]+)\s*\]/;
  let val = this.but.get_bit_value(regex, code);  
  this.stk.top().bit['lead'] = val;  // save the only first one
};
// New April 2022
BitmarkListener.prototype.enterLearning_path_lti = function(ctx) { this.push_tmpl(ctx, 'learning-path-lti', R_clone(JSON_BIT_TEMPLATES.LearningPath_bit)); };
BitmarkListener.prototype.enterLearning_path_step = function(ctx) { this.push_tmpl(ctx, 'learning-path-step', R_clone(JSON_BIT_TEMPLATES.LearningPath_bit)); };
BitmarkListener.prototype.enterLearning_path_book = function(ctx) { this.push_tmpl(ctx, 'learning-path-book', R_clone(JSON_BIT_TEMPLATES.LearningPath_bit)); };
BitmarkListener.prototype.enterLearning_path_sign = function(ctx) { this.push_tmpl(ctx, 'learning-path-sign', R_clone(JSON_BIT_TEMPLATES.LearningPath_bit)); };
BitmarkListener.prototype.enterLearning_path_video_call = function(ctx) { this.push_tmpl(ctx, 'learning-path-video-call', R_clone(JSON_BIT_TEMPLATES.LearningPath_bit)); };
BitmarkListener.prototype.enterLearning_path_learning_goal = function(ctx) { this.push_tmpl(ctx, 'learning-path-learning-goal', R_clone(JSON_BIT_TEMPLATES.LearningPath_bit));};
BitmarkListener.prototype.enterLearning_path_closing = function(ctx) { this.push_tmpl(ctx, 'learning-path-closing', R_clone(JSON_BIT_TEMPLATES.LearningPath_bit)); };
BitmarkListener.prototype.enterLearning_path_feedback = function(ctx) { this.push_tmpl(ctx, 'learning-path-feedback', R_clone(JSON_BIT_TEMPLATES.LearningPath_bit)); };
BitmarkListener.prototype.enterLearning_path_bot_training = function(ctx) { this.push_tmpl(ctx, 'learning-path-bot-training', R_clone(JSON_BIT_TEMPLATES.LearningPath_bit)); };
BitmarkListener.prototype.enterLearning_path_external_link = function(ctx) { this.push_tmpl(ctx, 'learning-path-external-link', R_clone(JSON_BIT_TEMPLATES.LearningPath_bit)); };
BitmarkListener.prototype.enterLearning_path_classroom_training = function(ctx) { this.push_tmpl(ctx, 'learning-path-classroom-training', R_clone(JSON_BIT_TEMPLATES.LearningPath_bit)); };
BitmarkListener.prototype.enterLearning_path_classroom_event = function(ctx) { this.push_tmpl(ctx, 'learning-path-classroom-event', R_clone(JSON_BIT_TEMPLATES.LearningPath_bit)); };
//
BitmarkListener.prototype.enterBot_action_send = function(ctx) { this.push_tmpl(ctx, 'bot-action-send'); };
BitmarkListener.prototype.enterBot_action_announce = function(ctx) { this.push_tmpl(ctx, 'bot-action-announce'); };
BitmarkListener.prototype.enterBot_action_save = function(ctx) { this.push_tmpl(ctx, 'bot-action-save'); };
BitmarkListener.prototype.enterBot_action_remind = function(ctx) { this.push_tmpl(ctx, 'bot-action-remind'); };

// new 02/07/22
BitmarkListener.prototype.enterNote = function(ctx) { this.push_tmpl(ctx, 'note'); };
BitmarkListener.prototype.enterRemark = function(ctx) { this.push_tmpl(ctx, 'remark'); };
BitmarkListener.prototype.enterHelp = function(ctx) { this.push_tmpl(ctx, 'help'); };
BitmarkListener.prototype.enterInfo = function(ctx) { this.push_tmpl(ctx, 'info'); };
BitmarkListener.prototype.enterWarning = function(ctx) { this.push_tmpl(ctx, 'warning');};
BitmarkListener.prototype.enterDanger = function(ctx) { this.push_tmpl(ctx, 'danger');};
BitmarkListener.prototype.enterBug = function(ctx) { this.push_tmpl(ctx, 'bug');};
BitmarkListener.prototype.enterSidenote = function(ctx){this.push_tmpl(ctx, 'side-note');};
BitmarkListener.prototype.enterStickynote = function(ctx) { this.push_tmpl(ctx, 'sticky-note');};
BitmarkListener.prototype.enterQuote = function(ctx) { this.push_tmpl(ctx, 'quote');};
BitmarkListener.prototype.enterFootnote = function(ctx){this.push_tmpl(ctx, 'foot-note');};
BitmarkListener.prototype.enterHintbit = function(ctx) { this.push_tmpl(ctx, 'hint');};
BitmarkListener.prototype.enterExamplebit = function(ctx){this.push_tmpl(ctx, 'example');};

BitmarkListener.prototype.exitAnchor = function(ctx) {
  let code = this.but.getcode(ctx);
  let re=/\[???(([^\]]|[\s])*)\]/s;  // accepts newline
  let val = this.but.get_bit_value(re, code);
  let slot = 'anchor';  // default key
  this.stk.top().bit[slot] = val;
  (this.stk.top()).bit.body = (this.stk.top()).bit.body.replace(code,'');
};
export {BitmarkListener};
//exports.BitmarkListener = BitmarkListener;

