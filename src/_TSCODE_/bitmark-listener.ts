/*
 *  bitmark-listener.js
 *
 *  last update
 *  Sep 24,2022
 */
import R_clone from 'ramda/es/clone';
import R_slice from 'ramda/es/slice';
import { Stack } from './stack';
import { BitUtil } from './bit-utils';
import { JSON_BIT_TEMPLATES } from './bit-template';
import { BitmarkErrorListener } from './index';
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";


const webpack = false;

const log = {};
const logfun = function(text:string){console.log(text);}
log['info'] = logfun;
log['debug'] = logfun;
log['error'] = logfun;


// kebabcase to camelcase
//const camelize = s => s.replace(/-./g, x=>x[1].toUpperCase())
function camelize(s:string): string { // 
    return s.replace(/-./g, x=>x[1].toUpperCase());
}
function replaceFrom(base: string, search:string, replace:string, from:number):string {
    if (base.length > from) {
	return base.slice(0, from) + base.slice(from).replace(search, replace);
    }
    return base;
};

/*
interface String {
    camelize(s:String): String;
    replaceFrom(search:string, replace:string, from:number): string;
};
String.prototype.camelize = function(s:string):string {
    return s.replace(/-./g, x=>x[1].toUpperCase());
};
// Sep 10, 2022 added this to fix  a bug in exitMpanswer__ body text replace.
String.prototype.replaceFrom = function(search:string, replace:string, from:number):string {
    if (this.length > from) {
	return this.slice(0, from) + this.slice(from).replace(search, replace);
    }
    return this.toString(); // ?????
};
*/



// This class defines a complete listener for a parse tree produced by bitmarkParser.
class BitmarkListener {

    error_listener: BitmarkErrorListener;
    source: string;
    parser: Parser;
    stk: Stack;
    curr_bit_stk: Stack;
    but: BitUtil;
    format: string;
    resformat: string;
    resselfdesc: Object;
    RESOURCE_MAP: Object;
    resimagegrp: string[];
    reslist: string[];
    fmtlist: string[];
    atdef_str: string[];
    atdef_num: string[];
    bot_action_rating: any[];
    body_key: string;
    num_angleref: number;


    constructor(error_listener: BitmarkErrorListener,
		source: string,
		parser: Parser) {
	this.error_listener = error_listener;
	this.source = source;
	this.parser = parser;  // New 10/9/2021  
	this.stk = new Stack();
	this.curr_bit_stk = new Stack();
	this.but = new BitUtil(source.trim());
	this.format = "";  // &image, &audio, &video etc
	this.resformat = "";
	// type starts with one of these}; 
	this.resselfdesc = {'image-link': 'image-link',
			    'audio-link': 'audio-link',
			    'video-link': 'video-link',
			    'image':'image', 'audio':'audio', 'video':'video',
			    'still-image-film-link': 'still-image-film-link',
			    'still-image-film': 'still-image-film'  // !!must come after -link
			   }
	// this.resformat is the key
	this.RESOURCE_MAP = {'&image': 'image',
			     '&still-image-film': 'image',
			     '&still-image-film-link': 'videoLink',		       
			     '&image-link': 'imageLink',
			     '&audio-link': 'audioLink',
			     '&video-link': 'videoLink',
			     '&article-link': 'articleLink',
			     '&app-link': 'appLink',
			     '&website-link': 'websiteLink',
			     '&document-link': 'documentLink',
			     '&document-download': 'documentDownload',
			    };
	this.resimagegrp = ['screenshot', 'focus-image', 'photo', 'browser-image'];  // implicit image group
	this.reslist     = ['&image', '&audio', '&video', '&document', '&app', '&website', '&still-image-film', '&pdf'];
	this.fmtlist     = ['prosemirror', 'placeholder', 'text'];
	
	this.atdef_str   = ['date', 'location', 'book', 'duration', 'action', 'deepLink',
			    'botAnnounceAt', 'botSaveAt', 'botSendAt', 'botRemindAt',
			    'externalLink', 'videoCallLink', 'externalLinkText', 'textReference',
			    'quotedPerson', 'kind', 'collection', 'book', 'padletId',
			    'scormSource', 'posterImage', 'computerLanguage','icon', 'iconChar',
			    'releaseDate', 'releaseVersion'
			   ];
	this.atdef_num = ['focusX', 'focusY', 'numberOfStars'];
	this.bot_action_rating = [];  // for storing bot-action-rating at exitHint()
	
	this.body_key = 'body';
	this.num_angleref = 0;
	return this;
    }

    //BitmarkListener.prototype = Object();  /*.create(clozeParserListener)*/
    //BitmarkListener.prototype.constructor = BitmarkListener;

    get_json():string {
	return JSON.stringify(this.stk.bucket, null, 4);
    };

    get_result():any[] {
	// This code gets error on tsc compile
	//while (0 < this.curr_bit_stk.size) {
	//    delete this.curr_bit_stk.pop();
	//}
	this.curr_bit_stk.bucket = [];  // == delete
	return this.stk.bucket;
    };

    push_bit2(code: string, type: string, fmt_regex: any):string[]|string {
	let vals:string[]|null = this.but.get_bit_value_colonsep(fmt_regex, code);
	let b: Object = JSON_BIT_TEMPLATES.Regular_bit;
	b['bitmark'] = code;
	b['bit']['type']= type;
	this.stk.push(b);
	return vals;
    };
    // Call on enter
    push_tmpl(ctx: ParserRuleContext, type: string, template: Object=R_clone(JSON_BIT_TEMPLATES.Regular_bit)) {

	let b:Object = template;
	b['bit']['type'] = type;

	// bit_type is like "[.video]"
	let bit_type:string = this.source.match(/\s*\[([^\]]+)\]/)[0];
	let body:string = this.source.replace(bit_type, '');
	let code:string = this.but.getcode(ctx).trim(); 
	let res:string[] = this.but.get_bit_resource(code);
	// closing ] may be there
	let bitfmt:string = res.length === 0 ? 'bitmark--' : res[0];
	b['bit']['body'] = body;

	// If arg type is one of [image, audio, video], then set the resformat as the bit name
	let found:boolean = false;
	for (let t of Object.keys(this.resselfdesc)) {
	    // ['image', 'audio', 'video', 'still-image-film']
	    if (type.startsWith(t)) {
		this.resformat = '&'+this.resselfdesc[t];  // image audio video
		found = true;
		break;
	    }
	}
	if (!found && -1 < this.resimagegrp.indexOf(type)) 
	    this.resformat = '&image';  // image audio video
	
	if (-1 < ['bitmark++', 'bitmark--', 'text', 'json'].indexOf(bitfmt))
	    b['bit']['format'] = bitfmt;

	this.stk.push(b);
	return res;
    };
    //
    //
    set_value_based_on_curr_bit_stk(val1:string,
				    sub1:string,
				    val2:boolean,
				    sub2:string=null,
				    tmpl:Object|null=null) {
	let subscript:string = this.curr_bit_stk.top();
	let key_obj:string[] = null;
	
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

    save_blocktaggedtext(what:string, code:string) {
	if (0 < this.stk.size) {
	    if (!(what in this.stk.top()))
		this.stk.top()[what] = [];
	    this.stk.top()[what].push(code);  // *** what ***
	}
	else
	    log['error']("save_blocktaggedtext stack is empty");
    };

    bitmark_enterRule(fn_name:string):void {
	log['debug'](`===>>${fn_name}`);
    };
    bitmark_exitRule(fn_name:string):void {
	log['debug'](`<<===${fn_name}`);
    };

    enterBook(ctx: ParserRuleContext):void {
	this.push_tmpl(ctx, 'book');
    };
    // Exit a parse tree produced by bitmarkParser#bitElem.
    //exitBook(ctx):void {};

    // Enter a parse tree produced by bitmarkParser#chapter.
    enterChapter(ctx: ParserRuleContext):void {
	this.push_tmpl(ctx, 'chapter');
	// Added below 10/1/2020 set defaults
	const bit = this.stk.top().bit;
	bit['level'] = 1;
	bit['progress'] = true;
	bit['toc'] = true;
    };
    // Exit a parse tree produced by bitmarkParser#chapter.
    //exitChapter(ctx):void {};

    // Enter a parse tree produced by bitmarkParser#progress.
    exitProgress(ctx: ParserRuleContext):void {
	let code:string = this.but.getcode(ctx);
	let vals:string[] = this.but.get_at_value(code);
	(this.stk.top()).bit['progress'] = vals[1];
	// Remove it from body
	(this.stk.top()).bit.body = (this.stk.top()).bit.body.replace(code,'');
    };

    enterToc(ctx: ParserRuleContext):void {
	this.push_tmpl(ctx, 'toc');
    }
    // Enter a parse tree produced by bitmarkParser#toc.
    exitToc(ctx: ParserRuleContext):void {
	let code:string = this.but.getcode(ctx);
	let vals:string[] = this.but.get_at_value(code);
	
	if (this.stk.size===0) {
	    //this.push_bit(ctx, 'toc');
	    // toc can't exist by itself.
	}
	(this.stk.top()).bit['toc'] = vals[1];
	// Remove it from body
	(this.stk.top()).bit.body = (this.stk.top()).bit.body.replace(code,'');
    };

    // Enter a parse tree produced by bitmarkParser#summary.
    enterSummary(ctx: ParserRuleContext):void {
	this.push_tmpl(ctx, 'summary');
    };
    // Exit a parse tree produced by bitmarkParser#summary.
    //exitSummary(ctx):void {};

    // Enter a parse tree produced by bitmarkParser#bit.
    enterBit(ctx: ParserRuleContext):void {
	let code:string = this.but.getcode(ctx);
	this.but.set_currentbit(code);
    };

    // Exit a parse tree produced by bitmarkParser#bit.
    exitBit(ctx: ParserRuleContext):void {
	// Add an empty resource data if format is defined.
	if (this.resformat != '' && this.stk.top().bit['resource']===undefined
	    && 0 <= this.reslist.indexOf(this.resformat)) {
	    let res:string = this.resformat;
	    if (this.resformat.startsWith('&'))
		res = this.resformat.substr(1);
	    this.stk.top().bit['resource'] = {
		'type': res,
		[res]: {}
	    }
	}
	this.stk.top().bit.body = this.stk.top().bit.body.trim();
    };
    exitBitmark_(ctx: ParserRuleContext):void {
	this.stk.top().bit.body = this.stk.top().bit.body.trim();
    };

    // Enter a parse tree produced by bitmarkParser#group_open.
    enterGroup_born(ctx: ParserRuleContext):void {
	this.push_tmpl(ctx, 'group*');  
    };
    // Exit a parse tree produced by bitmarkParser#group_open.
    //exitGroup_born(ctx) {};

    // Enter a parse tree produced by bitmarkParser#group_close.
    enterGroup_died(ctx: ParserRuleContext):void {
	this.push_tmpl(ctx, 'group†');
    };
    // Exit a parse tree produced by bitmarkParser#group_close.
    //exitGroup_died(ctx):void {};
    enterCloze(ctx: ParserRuleContext):void {
	this.push_tmpl(ctx, 'cloze');  // default template
    };

    // Exit a parse tree produced by bitmarkParser#cloze.
    //exitCloze(ctx):void {};

    // Enter a parse tree produced by bitmarkParser#cloze_instruction_grouped.
    enterCloze_instruction_grouped(ctx: ParserRuleContext):void {
	this.push_tmpl(ctx, 'cloze-instruction-grouped');
    };
    // Exit a parse tree produced by bitmarkParser#cloze_instruction_grouped.
    //exitCloze_instruction_grouped(ctx):void {};

    // Enter a parse tree produced by bitmarkParser#cloze_solution_grouped.
    enterCloze_solution_grouped(ctx: ParserRuleContext):void {
	this.push_tmpl(ctx, 'cloze-solution-grouped');
    };
    // Exit a parse tree produced by bitmarkParser#cloze_solution_grouped.
    //exitCloze_solution_grouped(ctx):void {};

    // This is INTENTIONALLY enter!!
    enterGap(ctx: ParserRuleContext):void {
	let code:string = this.but.getcode(ctx);

	if (0 < this.stk.size) {
	    if (!('placeholders' in this.stk.top().bit))
		(this.stk.top()).bit['placeholders'] = {};
	    let n:number = Object.keys(this.stk.top().bit['placeholders']).length;
	    let key:string = `{${n}}`;
	    this.stk.top().bit['placeholders'][key] = R_clone(JSON_BIT_TEMPLATES.Gap_bit);
	    this.curr_bit_stk.push(key+'$placeholders'); // let children know the key
	}
	else
	    log['error']('enterGap no bit on stack');
    }

    exitGap(ctx: ParserRuleContext):void {
	let code:string = this.but.getcode(ctx);
	let kp:string = this.curr_bit_stk.pop();  //(key+'$placeholders');
	let keypl:string[] = kp.split('$');
	code = code.replace(/\[[^_][^\]]+\]/g, '');
	this.stk.top().bit.body = this.stk.top().bit.body.replace(code, keypl[0]);
    };

    exitSingle_gap(ctx: ParserRuleContext):void {
	let code:string = this.but.getcode(ctx);
	let type:string = this.stk.top().bit.type;
	
	if (type.startsWith('cloze') || type.startsWith('article')) {
	    let val:any[] = code.match(/[^\[]*(\[.*\])([^\]]|[\s])*/s); // accept NEWLINE in the text
	    let n:number = Object.keys(this.stk.top().bit['placeholders']).length - 1;
	    let key:string = `{${n}}`;
	    let vals:string[] = code.match(/\[_([^\]]+)\]/g); // could be more than 1
	    // vals can be null when it is [_]
	    if (vals) {
		for (let g of vals) {
		    let v:string = this.but.get_bit_value(/\[_([^\]]*)\]/, g);
		    this.stk.top().bit['placeholders'][key].solutions.push(v);
		}
	    }
	}
    };
    // Enter a parse tree produced by bitmarkParser#instruction.
    exitInstruction(ctx: ParserRuleContext):void {
	let code:string = this.but.getcode2(ctx);
	let re:RegExp=/\[!(([^\]]|[\s])*)\]/s;  // accepts newline
	let val:string|number = this.but.get_bit_value(re, code);
	const bit:Object = this.stk.top().bit;
	
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
	    else if (what==='bot_action') {
		// For bot_action_rating_number
		if (val.match(/^[0-9]+$/))
		    val = parseInt(val);
		let l:number = bit['responses'].length;
		bit['responses'][l-1]['response'] = val;
		this.bot_action_rating.push(val);
	    }
	    else if (what==='menu') {
		this.curr_bit_stk.third()['instruction'] = val;
	    }
	    else if (what != null) {
		let key_obj:string|string[] = '';
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
		bit['body'] = bit['body'].replace(code,'');
	    }
	}
	else
	    log['error']("exitInstruction stack is empty");
    };

    // Enter a parse tree produced by bitmarkParser#hint.
    exitHint(ctx: ParserRuleContext):void {

	let code:string = this.but.getcode(ctx);
	let re:RegExp=/\[\?([^\]]*)\]/;
	let val:string = this.but.get_bit_value(re, code);
	let what:string = this.curr_bit_stk.top();
	const bit:Object = this.stk.top().bit;
	
	if (what=='footer')
	    return;  
	if (0 < this.stk.size && 0 < this.curr_bit_stk.size) {
	    const what = this.curr_bit_stk.top();
	    let key_obj:string = what;
	    if (what==='cplus' || what==='cminus' || what=='pair') {    
		(this.curr_bit_stk.second()).hint = val;
	    }
	    else if (what==='bot_action') {
		let l:number = bit['responses'].length;
		bit['responses'][l-1].hint = val;
	    }
	    else if (what==='menu') {
		this.curr_bit_stk.third()['hint'] = val;
	    }
	    else {
		let key_obj:string[];
		if (typeof what==='string' && what.startsWith('{'))
		    key_obj = what.split('$');
		if (typeof what==='string' && Array.isArray(key_obj) && key_obj.length===2) {
		    // bit.gaps.{1}.hint = val
		    bit[key_obj[1]][key_obj[0]]['hint'] =  val;
		}
		else if (what==='panswer' || what==='interview_qanda')
		    (this.curr_bit_stk.bottom()).hint = val;
		else if (typeof what === 'object')
		    what.hint = val;
		else
		    bit['hint'] =  val;
	    }
	    // TODO key_obj.length < 2???
	}
	else {
	    bit['hint'] =  val;
	}
	bit['body'] = bit['body'].replace(code,'');
    };

    enterHeaded_choices(ctx: ParserRuleContext):void {
	let p:Object =  R_clone(JSON_BIT_TEMPLATES.Mct_placeholder);
	let n:number = 0;
	const bit:Object = this.stk.top().bit;
	
	if (bit['placeholders'] === undefined) 
	    bit['placeholders'] = [];
	else
	    n = Object.keys(bit['placeholders']).length;
	let key:string = `{${n}}`;
	bit['placeholders'][key] = p;
	this.curr_bit_stk.push(key); // let children know the key
    };

    enterMcrsep(ctx: ParserRuleContext):void {
	const bit = this.stk.top().bit;
	
	if (bit.type.startsWith('multiple-choice'))  {
	    let quiz:Object = R_clone(JSON_BIT_TEMPLATES.Mc_quiz);
	    bit['quizzes'].push(quiz);
	    // Push quiz to store group-wise inst, item, hint etc
	    this.curr_bit_stk.push(quiz);
	}
	else if (bit.type.startsWith('multiple-response'))  {
	    let resp:Object = R_clone(JSON_BIT_TEMPLATES.Mr_response);
	    bit['quizzes'].push(resp);
	    // Push resp to store group-wise inst, item, hint etc
	    this.curr_bit_stk.push(resp);
	}
	else if (bit.type.startsWith('true-false'))  {

	    let stmt:Object = R_clone(JSON_BIT_TEMPLATES.True_false_stmt);
	    bit['statements'].push(stmt);
	    // Push resp to store group-wise inst, item, hint etc
	    this.curr_bit_stk.push(stmt);
	}
	// Remove all === from body
	bit['body'] = bit['body'].replace(/\n?===\n?/g,'');
    };

    enterMcrmisc(ctx: ParserRuleContext): void {
	this.curr_bit_stk.push('mcrmisc');
    };
    exitMcrmisc(ctx: ParserRuleContext): void {
	this.curr_bit_stk.pop(); // obj
	this.curr_bit_stk.pop(); // "mcrmisc"
    };


    get_multi_choice_keys(bit_type: string): any[] {
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

	let list_key:string = mul_choice_list_key[bit_type];

	if (list_key) {
	    let spl: any[] = list_key.split('-');
	    spl.unshift(spl.length.toString());
	    // Get element template
	    let tmpl:Object = mul_choice_tmpl_class[bit_type];
	    spl.push(tmpl);
	    return spl;  // [len, key1, key2?, key3?, tmpl]
	}
	return [];
    };

    //
    exitCplus(ctx: ParserRuleContext):void {
	this.curr_bit_stk.pop();  // cplus 
	this.curr_bit_stk.pop();  // cplus obj
    };
    exitCminus(ctx: ParserRuleContext):void {
	this.curr_bit_stk.pop();  // cminus 
	this.curr_bit_stk.pop();  // cminus obj
    };

    // Enter a parse tree produced by bitmarkParser#choice_plus.
    exitChoice_plus(ctx: ParserRuleContext):void {
	let code:string = this.but.getcode(ctx);
	let bit_type:string = (this.stk.top()).bit.type;
	const re:RegExp =/\[\+([^\]]*)\]/;
	let val:string = this.but.get_bit_value(re, code);
	let listname:string = bit_type.startsWith('highlight') ? 'texts' : 'options';
	const bit: Object = this.stk.top().bit;
	
	if (bit_type==='bot-interview')
	    return;   // TODO fix once JSON is defined

	let what:string = this.curr_bit_stk.top();
	if (what==='bot_action') {
	    let l:number = bit['responses'].length;
	    bit['responses'][l-1].response = val;
	    bit['responses'][l-1]['isCorrect'] = true;    
	    bit['body'] = bit['body'].replace(code,''); 
	}
	else if ('placeholders' in bit) {
	    // multi_choice_text inline choices
	    let key:string = this.curr_bit_stk.top() === null ? '{0}' : this.curr_bit_stk.top();
	    let opt: Object;

	    opt = bit_type!=='highlight-text'? R_clone(JSON_BIT_TEMPLATES.Mct_opt) :
                R_clone(JSON_BIT_TEMPLATES.Highlight_text_text);
	    opt['text'] = val;
	    opt['isCorrect'] = true;  // because plus
	    bit['placeholders'][key][listname].push(opt);
	}
	else if (bit_type==='true-false') {
	    if (this.curr_bit_stk.size === 0) {
		console.error('True_false_stmt slot does not exist');
		return;
	    }
	    this.curr_bit_stk.top().statement = val;
	    this.curr_bit_stk.top().isCorrect = true;
	    bit['body'] = bit['body'].replace(code,''); 
	}
	else {
	    // multiple-choice+
	    let spl:any[] = this.get_multi_choice_keys(bit_type);
	    
	    if (1 < spl[0]) {
		let sz1:number = bit[spl[1]].length;
		let choice_obj:Object; 
		
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
		bit['body'] = bit['body'].replace(code,'');
		this.curr_bit_stk.push(choice_obj);
		this.curr_bit_stk.push('cplus');
	    }
	    else {
		bit[spl[1]] = val;
		bit['body'] = bit['body'].replace(code,'');				
	    }
	}
	
    };

    // Enter a parse tree produced by bitmarkParser#choice_minus.
    exitChoice_minus(ctx: ParserRuleContext):void {
	let code:string = this.but.getcode(ctx);
	let bit_type = (this.stk.top()).bit.type;
	const re=/\[\-([^\]]*)\]/;
	let val:string = this.but.get_bit_value(re, code);
	let listname = bit_type.startsWith('highlight') ? 'texts' : 'options';
	const bit = this.stk.top().bit;
	
	if (bit_type==='bot-interview')
	    return;   // TODO fix once JSON is defined

	let what = this.curr_bit_stk.top();
	if (what==='bot_action') {
	    let l = bit['responses'].length;
	    bit['responses'][l-1].response = val;
	    bit['responses'][l-1]['isCorrect'] = false;    
	    bit['body'] = bit['body'].replace(code,''); 
	}
	else if ('placeholders' in bit) {
	    // multi_choice_text inline choices
	    let key:string = this.curr_bit_stk.top() === null ? '{0}' : this.curr_bit_stk.top();
	    let opt: Object;
	    if (-1 < key.indexOf('$')) {
		key = key.split('$')[0];
	    }
	    opt = bit_type!=='highlight-text'? R_clone(JSON_BIT_TEMPLATES.Mct_opt) :
		R_clone(JSON_BIT_TEMPLATES.Highlight_text_text);
	    opt['text'] = val;
	    opt['isCorrect'] = false;  // because minus

	    bit['placeholders'][key][listname].push(opt);    
	}
	else if (bit_type==='true-false') {
	    if (this.curr_bit_stk.size === 0) {
		console.error('True_false_stmt slot does not exist');
		return;
	    }
	    this.curr_bit_stk.top().statement = val;
	    this.curr_bit_stk.top().isCorrect = false;
	    bit['body'] = bit['body'].replace(code,'');
	}
	else {
	    // multiple-choice-
	    let spl = this.get_multi_choice_keys(bit_type);

	    if (1 < spl[0]) {
		let sz1:number = bit[spl[1]].length;
		let choice_obj:Object;

		sz1 = bit[spl[1]].length; 
		let sz2:number;
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
		(this.stk.top()).bit['body'] = (this.stk.top()).bit['body'].replace(code,'');
		this.curr_bit_stk.push(choice_obj);
		this.curr_bit_stk.push('cminus');
	    }
	    else {
		// (spl[0]===1)
		bit[spl[1]] = val;
	    }
	}
    };

    exitIl_choice_plus(ctx: ParserRuleContext):void {
	this.exitChoice_plus(ctx);
    };
    exitIl_choice_minus(ctx: ParserRuleContext):void {
	this.exitChoice_minus(ctx);
    };

    // Enter a parse tree produced by bitmarkParser#multiple_choice_1.
    enterMultiple_choice_1(ctx: ParserRuleContext):void {
	this.push_tmpl(ctx, 'multiple-choice-1', R_clone(JSON_BIT_TEMPLATES.Multi_choice_1));
    };
    // Exit a parse tree produced by bitmarkParser#multiple_choice_1.
    //exitMultiple_choice_1(ctx):void {};

    // Enter a parse tree produced by bitmarkParser#multiple_choice.
    enterMultiple_choice(ctx: ParserRuleContext):void {
	this.push_tmpl(ctx, 'multiple-choice', R_clone(JSON_BIT_TEMPLATES.Multi_choice));  
    };
    // Exit a parse tree produced by bitmarkParser#multiple_choice.
    //exitMultiple_choice(ctx):void {};

    // Enter a parse tree produced by bitmarkParser#multiple_response_1.
    enterMultiple_response_1(ctx: ParserRuleContext):void {
	this.push_tmpl(ctx, 'multiple-response-1', R_clone(JSON_BIT_TEMPLATES.Multi_response_1));
    };
    // Exit a parse tree produced by bitmarkParser#multiple_response_1.
    //exitMultiple_response_1(ctx):void {};

    // Enter a parse tree produced by bitmarkParser#multiple_response.
    enterMultiple_response(ctx: ParserRuleContext):void {
	this.push_tmpl(ctx, 'multiple-response', R_clone(JSON_BIT_TEMPLATES.Multi_response));
    };
    // Exit a parse tree produced by bitmarkParser#multiple_response.
    exitMultiple_response(ctx: ParserRuleContext):void {};

    // Enter a parse tree produced by bitmarkParser#multiple_choice_text.
    enterMultiple_choice_text(ctx: ParserRuleContext):void {
	this.push_tmpl(ctx, 'multiple-choice-text',
		       R_clone(JSON_BIT_TEMPLATES.Multi_choice_text));
    };
    //exitMultiple_choice_text(ctx: ParserRuleContext):void {};
    
    exitMultiple_il_choice(ctx: ParserRuleContext):void {
	this.curr_bit_stk.pop(); 
    };

    enterHighlight_text(ctx: ParserRuleContext):void {
	this.push_tmpl(ctx, 'highlight-text', R_clone(JSON_BIT_TEMPLATES.Highlight_text));
    };
    //exitHighlight_text(ctx: ParserRuleContext):void {};

    //
    enterHeaded_inline_choices(ctx: ParserRuleContext):void {
	let code:string = this.but.getcode(ctx);
	let p:Object =  R_clone(JSON_BIT_TEMPLATES.Mct_placeholder);
	let n:number = Object.keys(this.stk.top().bit['placeholders']).length;
	let key:string = `{${n}}`;

	this.stk.top().bit['placeholders'][key] = p;
	this.curr_bit_stk.push(p); // let children know the key  
	this.curr_bit_stk.push(key); // let children know the key
    };
    exitHeaded_inline_choices(ctx: ParserRuleContext):void { 
	let code:string = this.but.getcode(ctx);
	let key:string = this.curr_bit_stk.pop();

	// replace the choices with the placeholder seq num
	code = code.replace(/\[[^\+\-][^\]]+\]/g, '');
	this.stk.top().bit['body'] = this.stk.top().bit['body'].replace(code, key);
	this.curr_bit_stk.pop();  // discard p
    };
    //
    enterHighlight_inline_choices(ctx: ParserRuleContext):void {
	let code:string = this.but.getcode(ctx);
	let p:Object = R_clone(JSON_BIT_TEMPLATES.Highlight_placeholder);
	let n:number = Object.keys(this.stk.top().bit['placeholders']).length;
	let key:string = `{${n}}`;

	this.stk.top().bit['placeholders'][key] = p;
	// let children know the key e.g. {0}  
	this.curr_bit_stk.push(p); // let children know the key  
	this.curr_bit_stk.push(key);
    };
    exitHighlight_inline_choices(ctx: ParserRuleContext):void { 
	let code:string = this.but.getcode(ctx);
	let key:string = this.curr_bit_stk.pop();

	// replace the choices with the placeholder seq num
	code = code.replace(/\[[^\+\-][^\]]+\]/g, '');
	this.stk.top().bit['body'] = this.stk.top().bit['body'].replace(code, key);
	this.curr_bit_stk.pop();  // discard p
    };

    // Enter a parse tree produced by bitmarkParser#choice_head.
    exitChoice_head(ctx: ParserRuleContext):void {
	let code:string = this.but.getcode(ctx);
	const key:string = this.curr_bit_stk.top(); // let children know the key  
	const re:RegExp =/\[\'([^\]]*)\]/;
	let val:string = this.but.get_bit_value(re, code);
	const bit:Object = this.stk.top().bit;
	
	bit['placeholders'][key].prefix = val;
	bit['body'] = bit['body'].replace(code,'');		
    }

    // Enter a parse tree produced by bitmarkParser#cloze_and_multiple_choice_text.
    enterCloze_and_multiple_choice_text(ctx: ParserRuleContext):void {
	this.push_tmpl(ctx, 'cloze-and-multiple-choice-text',
		       R_clone(JSON_BIT_TEMPLATES.Multi_choice_text));
    };
    // Exit a parse tree produced by bitmarkParser#cloze_and_multiple_choice_text.
    //exitCloze_and_multiple_choice_text(ctx):void {};

    // Enter a parse tree produced by bitmarkParser#essay.
    enterEssay(ctx: ParserRuleContext):void {
	this.push_tmpl(ctx, 'essay', R_clone(JSON_BIT_TEMPLATES.Essay_bit));
	this.curr_bit_stk.push(this.stk.top().bit);
	this.curr_bit_stk.push('essay');
    }
    // Exit a parse tree produced by bitmarkParser#essay.
    //exitEssay(ctx):void {};

    // Enter a parse tree produced by bitmarkParser#ml_example.
    // For multiple-choice-text and hightlight-text
    enterIl_follow(ctx: ParserRuleContext):void {
	let code:string = this.but.getcode(ctx);
	let is_example:boolean = false;
	let key:string, bool_key:string =null;
	let re:RegExp;

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
	let val:string = this.but.get_bit_value(re, code);
	if (val === null)
	    val = '';
	let cbit:any = this.curr_bit_stk.top();
	
	if (cbit && cbit.startsWith('{')) {
	    if (bool_key)
		this.stk.top().bit.placeholders[cbit][bool_key] = true;
	    this.stk.top().bit.placeholders[cbit][key] = val;
	    // Remove it from body
	    (this.stk.top()).bit['body'] = (this.stk.top()).bit['body'].replace(code,'');
	}
    };

    // Exit a parse tree produced by bitmarkParser#ml_example.
    exitIl_follow(ctx: ParserRuleContext):void {
	let code:string = this.but.getcode(ctx);
	// Remove it from body
	(this.stk.top()).bit['body'] = (this.stk.top()).bit['body'].replace(code,'');
    };


    // Enter a parse tree produced by bitmarkParser#example.
    exitExample(ctx: ParserRuleContext):void {

	let code:string = this.but.getcode(ctx);
	const re = /\[@example:([^\]]*)\]/;
	let val:string = this.but.get_bit_value(re, code);
	if (val === null)
	    val = '';
	//let cbstk:Stack = this.curr_bit_stk;
	let cbit:string = this.curr_bit_stk.top();
	let type:string = this.stk.top().bit.type;
	let remove_from_body:boolean = false;
	const bit:Object = this.stk.top().bit;
	
	if (cbit==='pair' || cbit==='pquery' || cbit==='panswer') {
	    let lastpair:number = this.stk.top().bit['pairs'].length-1;
	    bit['pairs'][lastpair].isExample = true;
	    bit['pairs'][lastpair].example = val.trim();
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
	    let cell_len:number = this.curr_bit_stk.bottom().cells.length;
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
	    bit['body'] = bit['body'].replace(code,'');
	}
    };

    // Enter a parse tree produced by bitmarkParser#interview.
    enterInterview(ctx: ParserRuleContext):void {
	this.push_tmpl(ctx, 'interview', R_clone(JSON_BIT_TEMPLATES.Interview_bit)); 
    };
    exitInterview(ctx: ParserRuleContext):void {
	let bit:Object = this.stk.top().bit;
	if (this.resformat != '' && bit['resource'] === undefined) {
	    if (0 <= this.reslist.indexOf(this.resformat)) {
		// Line number is the num lines
		//let lines = (this.stk.top().bitmark.match(/\n/g)||[]).length;
		this.error_listener.manualError(ctx, ctx._start.line-1, 0,
						'Missing resource(s) for '+this.resformat);
	    }
	}
    };

    enterInterview_qanda(ctx: ParserRuleContext):void {
	let qanda:Object = R_clone(JSON_BIT_TEMPLATES.Interview_question); 
	this.stk.top().bit['questions'].push(qanda);
	this.curr_bit_stk.push(qanda);
	this.curr_bit_stk.push('interview_qanda');
    };
    exitInterview_qanda(ctx: ParserRuleContext):void { // OK
	this.curr_bit_stk.pop();
	this.curr_bit_stk.pop();
    };

    exitEmphasis_(ctx: ParserRuleContext):void {
	let code:string = this.but.getcode(ctx);
	const re:RegExp=/\[\$(([^\]]|[\s])*)\]/s;  // accepts newline

	if (this.curr_bit_stk.top()==='interview_qanda') {
	    let val:string = this.but.get_bit_value(re, code);
	    (this.curr_bit_stk.second()).question = code;
	    // Move this outer if there are multiple
	    (this.stk.top()).bit['body'] = (this.stk.top()).bit['body'].replace(this.but.getcode(ctx),'');
	}
    };
    exitDollarans(ctx: ParserRuleContext):void {
	let code:string = this.but.getcode(ctx);
	const re:RegExp = /\[\$(([^\]]|[\s])*)\]/s;  // accepts newline

	if (this.curr_bit_stk.top()==='interview_qanda') {
	    let val:string = this.but.get_bit_value(re, code);
	    (this.curr_bit_stk.second()).sampleSolution = val;
	    // Move this outer if there are multiple
	    (this.stk.top()).bit['body'] = (this.stk.top()).bit['body'].replace(this.but.getcode(ctx),'');
	}
    };
    exitPartans(ctx: ParserRuleContext):void {
	let code:string = this.but.getcode(ctx);
	let re:RegExp = /\[@partialAnswer:?(([^\]]|[\s])*)\]/s;  // accepts newline
	const cbit:string = this.curr_bit_stk.top()

	if (cbit==='interview_qanda'||cbit==='essay') {
	    let val:string = this.but.get_bit_value(re, code);
	    (this.curr_bit_stk.second()).partialAnswer = val;
	    // Move this outer if there are multiple
	    (this.stk.top()).bit['body'] = (this.stk.top()).bit['body'].replace(this.but.getcode(ctx),'');
	}
    };

    // Enter a parse tree produced by bitmarkParser#longans.
    // [@longAnswer]
    exitLongans(ctx: ParserRuleContext):void {
	let cbit:string = this.curr_bit_stk.top();
	if (cbit==='Panswer') {
	    let lastpair = this.stk.top().bit['pairs'].length-1;
	    this.stk.top().bit['pairs'][lastpair].isLongAnswer = true;
	}
	else if (cbit==='interview_qanda') 
	    (this.curr_bit_stk.second()).isShortAnswer = false;

	(this.stk.top()).bit['body'] = (this.stk.top()).bit['body'].replace(this.but.getcode(ctx),'');    
    }

    exitShortans(ctx: ParserRuleContext):void {
	let cbit = this.curr_bit_stk.top();
	if (cbit==='interview_qanda') 
	    (this.curr_bit_stk.second()).isShortAnswer = true;
	(this.stk.top()).bit['body'] = (this.stk.top()).bit['body'].replace(this.but.getcode(ctx),'');    
    };
    exitSample_soln_prop(ctx: ParserRuleContext):void {
	let cbit:string = this.curr_bit_stk.top();
	if (cbit==='interview_qanda') {
	    let code:string = this.but.getcode2(ctx).trim();
	    const re:RegExp = /\[@sampleSolution:([^\]]+)\]/;
	    let val:string = this.but.get_bit_value(re, code);
	    (this.curr_bit_stk.second()).sampleSolution = val;
	}
	(this.stk.top()).bit['body'] = (this.stk.top()).bit['body'].replace(this.but.getcode(ctx),'');    
    };
    // 
    exitInterview_text(ctx: ParserRuleContext):void {
	let cbit:string = this.curr_bit_stk.top();
	let code:string = this.but.getcode2(ctx).trim();  // was but.getcode()  
	if (cbit==='interview_qanda') 
	    (this.curr_bit_stk.second()).question = code;
	(this.stk.top()).bit['body'] = (this.stk.top()).bit['body'].replace(this.but.getcode(ctx),'');
    };
    exitInterview_sometext(ctx: ParserRuleContext):void {
	let cbit:string = this.curr_bit_stk.top();
	let code:string = this.but.getcode2(ctx).trim();  // was but.getcode()  
	if (cbit==='interview_qanda') 
	    (this.curr_bit_stk.second()).question += code;
	(this.stk.top()).bit['body'] = (this.stk.top()).bit['body'].replace(this.but.getcode(ctx),'');
    };

    enterInterview_instruction_grouped(ctx: ParserRuleContext):void {
	this.push_tmpl(ctx, 'interview-instruction-grouped',
		       R_clone(JSON_BIT_TEMPLATES.Interview_bit));
    };
    // Enter a parse tree produced by bitmarkParser#interview_instruction_grouped.
    //exitInterview_instruction_grouped(ctx: ParserRuleContext) {};
    exitFooter_resource(ctx: ParserRuleContext):void {
	let code:string = this.but.getcode2(ctx);  // was but.getcode()  
	(this.stk.top()).bit.footer = (this.stk.top()).bit.footer + code.trim();
	(this.stk.top()).bit['body'] = (this.stk.top()).bit['body'].replace(code,'');
    };
    enterInterview_footer(ctx: ParserRuleContext):void {
	this.curr_bit_stk.push('footer');
    };
    exitInterview_footer(ctx: ParserRuleContext):void {
	this.curr_bit_stk.pop();
    };
    // Enter a parse tree produced by bitmarkParser#title.
    exitTitlestar_(ctx: ParserRuleContext):void {
	let code:string = this.but.getcode(ctx);
	this.save_blocktaggedtext('emphasized', code);
    }

    // Enter a parse tree produced by bitmarkParser#title.
    exitTitle(ctx: ParserRuleContext):void {
	let code:string = this.but.getcode(ctx);
	let val:string = this.but.get_title(code);
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
	    (this.stk.top()).bit['body'] = (this.stk.top()).bit['body'].replace(code,'');
	}
	else
	    log['error']("enterTitle stack is empty");
    };

    remove_separators_from_body():void {
	// Remove all === from body
	//(this.stk.top()).bit['body'] = (this.stk.top()).bit['body'].replace(/\n?==(=)?\n?/g,'');
	(this.stk.top()).bit['body'] = (this.stk.top()).bit['body'].replace(/===/g,'');	
    };

    // Enter a parse tree produced by bitmarkParser#match_.
    enterMatch_(ctx: ParserRuleContext):void {
	this.push_tmpl(ctx, 'match', R_clone(JSON_BIT_TEMPLATES.Match_bit));
    }
    // Exit a parse tree produced by bitmarkParser#match_.
    exitMatch_(ctx: ParserRuleContext):void {
	this.remove_separators_from_body();    // Remove all === from body
    }

    enterMatch_all(ctx: ParserRuleContext):void {
	this.push_tmpl(ctx, 'match-all', R_clone(JSON_BIT_TEMPLATES.Match_bit));
    }
    exitMatch_all(ctx: ParserRuleContext):void {
	this.remove_separators_from_body();    // Remove all === from body
    }

    enterMatch_all_reverse(ctx: ParserRuleContext):void {
	this.push_tmpl(ctx, 'match-all-reverse', R_clone(JSON_BIT_TEMPLATES.Match_bit));
    };
    exitMatch_all_reverse(ctx: ParserRuleContext):void {
	this.remove_separators_from_body();    // Remove all === from body
    };

    enterMatch_reverse(ctx: ParserRuleContext):void {
	this.push_tmpl(ctx, 'match-reverse', R_clone(JSON_BIT_TEMPLATES.Match_bit));
    }
    exitMatch_reverse(ctx: ParserRuleContext):void { 
	this.remove_separators_from_body();    // Remove all === from body
    };

    enterMatch_picture(ctx: ParserRuleContext):void {
	this.push_tmpl(ctx, 'match-picture', R_clone(JSON_BIT_TEMPLATES.Match_bit));
    };
    exitMatch_picture(ctx: ParserRuleContext):void {
	this.remove_separators_from_body();    // Remove all === from body
    };

    enterMatch_audio(ctx: ParserRuleContext):void {
	this.push_tmpl(ctx, 'match-audio', R_clone(JSON_BIT_TEMPLATES.Match_bit));
    };
    exitMatch_audio(ctx: ParserRuleContext):void { 
	this.remove_separators_from_body();    // Remove all === from body
    };

    enterMatch_matrix(ctx: ParserRuleContext):void {
	this.push_tmpl(ctx, 'match-matrix', R_clone(JSON_BIT_TEMPLATES.MatchMatrix_bit));
    };
    exitMatch_matrix(ctx: ParserRuleContext):void {
	this.remove_separators_from_body();    // Remove all === from body
    };

    enterPair_heading(ctx: ParserRuleContext):void {
	this.stk.top().bit['heading'] = { 'forKeys':'', 'forValues':'' };
	this.curr_bit_stk.push('pair_heading');
    };
    exitPair_heading(ctx: ParserRuleContext):void { 
	// Remove it from body
	let code:string = this.but.getcode(ctx);
	(this.stk.top()).bit['body'] = (this.stk.top()).bit['body'].replace(code,'');
	this.curr_bit_stk.pop();
    };
    // rule=heading_multi: key_title eq value_title ( eq value_title )* ;
    enterPair_heading_multi(ctx: ParserRuleContext):void {
	this.stk.top().bit['heading'] = { 'forKeys':'', 'forValues':[] };
    };
    exitPair_heading_multi(ctx: ParserRuleContext):void {
	let code:string = this.but.getcode(ctx);
	(this.stk.top()).bit['body'] = (this.stk.top()).bit['body'].replace(code,'');
    };

    // For each pair create a pair object and push
    enterPqpair(ctx: ParserRuleContext):void {

	let p:Object =  R_clone(JSON_BIT_TEMPLATES.Match_pair);
	delete(p['keyImage']);
	delete(p['keyAudio']);
	this.stk.top().bit['pairs'].push(p);
	this.curr_bit_stk.push(p);
	this.curr_bit_stk.push('pair');  
    };
    exitPqpair(ctx: ParserRuleContext):void { 
	this.curr_bit_stk.pop();
	this.curr_bit_stk.pop();
    };
    exitOr_(ctx: ParserRuleContext):void {
	let code:string = this.but.getcode(ctx);
	(this.stk.top()).bit['body'] = (this.stk.top()).bit['body'].replace(code,'');
    }

    // For each pair create a pair object and push
    enterPair_multival(ctx: ParserRuleContext):void {
	let p:Object =  R_clone(JSON_BIT_TEMPLATES.MatchMatrix_matrixelem);
	delete(p['keyImage']);
	delete(p['keyAudio']);
	this.stk.top().bit['matrix'].push(p);
	this.curr_bit_stk.push(p);
	this.curr_bit_stk.push('pair_multival');  
    };
    enterPair_multivals(ctx: ParserRuleContext):void {
	//console.error('enterPair_multivals');
    };
    exitPair_multival(ctx: ParserRuleContext):void {
	// Remove it from body
	let code:string = this.but.getcode(ctx);
	// Remove these from body
	(this.stk.top()).bit['body'] = (this.stk.top()).bit['body'].replace(code,'');
    };

    // For each pair create a pair object and push
    enterPair(ctx: ParserRuleContext):void {
	let p =  R_clone(JSON_BIT_TEMPLATES.Match_pair);
	delete(p.keyImage);
	delete(p.keyAudio);
	this.stk.top().bit['pairs'].push(p);
    };
    //
    // For each pair create a pair object and push
    enterPair_image(ctx: ParserRuleContext):void {
	let p =  R_clone(JSON_BIT_TEMPLATES.Match_pair);
	delete(p.key);
	delete(p.keyAudio);
	this.stk.top().bit['pairs'].push(p);

    };

    //enterPair_audios(ctx):void {};
    // For each pair create a pair object and push
    enterPair_audio(ctx: ParserRuleContext):void {
	let p =  R_clone(JSON_BIT_TEMPLATES.Match_pair);
	delete(p.key);
	delete(p.keyImage);
	this.stk.top().bit['pairs'].push(p);
    };
    // Audio bit
    exitPaudiobit(ctx: ParserRuleContext):void {
	let code:string = this.but.getcode(ctx);
	let [what, url] = this.but.get_url(code);
	let lastpair = this.stk.top().bit['pairs'].length-1;

	this.stk.top().bit['pairs'][lastpair].keyAudio.src = url;
	this.stk.top().bit['pairs'][lastpair].keyAudio.format = url.split('.').pop();
	// Remove it from body
	(this.stk.top()).bit['body'] = (this.stk.top()).bit['body'].replace(code,'');
    };
    // Image bit
    exitPimagebit(ctx: ParserRuleContext):void {
	let code:string = this.but.getcode(ctx);
	let [what, url] = this.but.get_url(code);  // get_bracket_content(code);
	let lastpair = this.stk.top().bit['pairs'].length-1;

	this.stk.top().bit['pairs'][lastpair].keyImage['src'] = url; //.split('::').pop();
	// Remove it from body
	(this.stk.top()).bit['body'] = (this.stk.top()).bit['body'].replace(code,'');
    };

    exitResource_chained(ctx: ParserRuleContext):void {

	let code:string = this.but.getcode(ctx);
	// e.g. code=[@src2x::https://cdn.bitbook.education/avatars/cat_70x70@2.jpg][
	let [key, url] = this.but.get_url(code);
	key = key.substring(1);
	let parent:string = 'resource';
	let child:string = this.curr_bit_stk.top(); // video, audio, image, image-link etc
	let obname:string = child;
	let type:string = '';
	const bit:Object = this.stk.top().bit;
	
	if (!this.resformat.toLowerCase().match(new RegExp(child.toLowerCase()))) {
	    parent = 'parser';
	    child = 'excessResources';
	    type = key;
	}
	else if (code[1]==='&') {
	    child = this.RESOURCE_MAP['&'+child];
	    if (!bit[parent])
		bit[parent] = {};    
	    if (!bit[parent][child])
		bit[parent][child] = [];
	}
	else {
	    // Probably @def
	    child = this.curr_bit_stk.top();
	    if (this.RESOURCE_MAP['&'+child] !== undefined)
		child = this.RESOURCE_MAP['&'+child];
	    else
		child = camelize(child);
	}
	let re:RegExp = /\[@([^:]*)\s*:\s*([^\]]*)\s*\]/g;
	let vals:string[]|null = this.but.get_bit_value_colonsep(re, code);
	// @defs == width, height, duration, etc

	if (vals.length) {
	    if (key==='posterImage' && key in bit[parent][child]) {
		bit[parent][child][key].src = vals[1];
		bit[parent][child][key].format = vals[1].split('.').pop();
	    }
	    else if (child==='videoLink' && key.startsWith('src')) {
		key = 'thumbnails';
		// objects in array 
		if (!(key in bit[parent][child]))
		    bit[parent][child][key] = [];
		let thumb = R_clone({ format: '', width: null, height: null });
		thumb[vals[0]] = url;
		thumb.format = url.split('.').pop();
		bit[parent][child].thumbnails.push(thumb);
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
		bit[parent][child][vals[0]] = vals[1];
	}
	(this.stk.top()).bit['body'] = (this.stk.top()).bit['body'].replace(code,'');
    };


    exitImage_chained4match(ctx: ParserRuleContext):void {
	let code:string = this.but.getcode(ctx);
	// e.g. code=[@src2x::https://cdn.bitbook.education/avatars/cat_70x70@2.jpg][
	let [key, url] = this.but.get_url(code); // bracket_content(code);
	let lastpair = this.stk.top().bit['pairs'].length-1;
	
	key = key.substring(1);
	this.stk.top().bit['pairs'][lastpair].keyImage[key] = url;
	(this.stk.top()).bit['body'] = (this.stk.top()).bit['body'].replace(code,'');
    };

    exitImage_chained(ctx: ParserRuleContext):void {
	let code:string = this.but.getcode(ctx);
	// e.g. code=[@src2x::https://cdn.bitbook.education/avatars/cat_70x70@2.jpg][
	let [key, url] = this.but.get_url(code);
	let parent = 'resource'; //this.curr_bit_stk.top();
	let child = this.curr_bit_stk.top().trim();
	key = key.substring(1).trim();
	url = url.trim();
	
	if (1 < this.curr_bit_stk.size) {
	    let second = this.curr_bit_stk.second();
	    if (second==='initiator'||second==='partner') {
		parent = second;
		child = 'avatarImage';
	    }
	    if (this.stk.top().bit[parent]===undefined)
		this.stk.top().bit[parent] = {};
	    if (this.stk.top().bit[parent][child]===undefined)
		this.stk.top().bit[parent][child] = {};
	    this.stk.top().bit[parent][child][key] = url;
	}
	else {
	    if (!this.stk.top().bit[parent])
		this.stk.top().bit[parent] = R_clone(JSON_BIT_TEMPLATES.Imageresource_element);
	    child = camelize(child); // image-link => imageLink
	    this.stk.top().bit[parent][child][key] = url;
	}
	(this.stk.top()).bit['body'] = (this.stk.top()).bit['body'].replace(code,'');
    };

    enterKey_title(ctx: ParserRuleContext):void {
	let code:string = this.but.getcode(ctx);
	let val:string = this.but.get_title(code);
	
	if (0 < this.stk.size) {
	    this.stk.top().bit.heading['forKeys'] =  val;
	}
	else
	    log['error']("enterKey_title stack is empty");
    };
    enterValue_title(ctx: ParserRuleContext):void {
	let code:string = this.but.getcode(ctx);
	let val:string = this.but.get_title(code);
	if (0 < this.stk.size) {
	    this.stk.top().bit.heading['forValues'] =  val;
	}    
	else
	    log['error']("enterValue_title stack is empty");
    };
    enterValue_title_multi(ctx: ParserRuleContext):void {
	let code:string = this.but.getcode(ctx);
	let val:string = this.but.get_title(code);
	if (0 < this.stk.size)
	    this.stk.top().bit.heading['forValues'].push(val);
	else
	    log['error']("enterValue_title stack is empty");
    };

    enterPquery(ctx: ParserRuleContext):void {

	let code:string = this.but.getcode(ctx);
	code = this.but.remove_tail(code, '\n=+\n?');
	if (!code)
	    return;
	this.curr_bit_stk.push('pquery'); // this is the marker
    };
    //
    exitPquery(ctx: ParserRuleContext):void {
	this.curr_bit_stk.pop();
    };

    exitPquery__(ctx: ParserRuleContext):void {
	let code:string = this.but.getcode(ctx);
	let val:string = code;
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
	    (this.stk.top()).bit['body'] = (this.stk.top()).bit['body'].replace(val,'');
	}
    };

    //
    enterMpquery(ctx: ParserRuleContext):void {
	this.curr_bit_stk.push('mpquery'); // this is the marker
    };
    //
    exitMpquery__(ctx: ParserRuleContext):void {

	let code:string = this.but.getcode(ctx);
	let val:string = code;
	let topbit = this.stk.top().bit;
	let lastmatidx = this.stk.top().bit['matrix'].length-1;

	if (0 < this.stk.size) {
	    val = val.replace(/\[[^\]]+\]/g, '');    
	    this.stk.top().bit['matrix'][lastmatidx]['key'] = val.trim();
	    (this.stk.top()).bit['body'] = (this.stk.top()).bit['body'].replace(val,''); 
	}
	else
	    log['error']("enterValue_title stack is empty");
	this.curr_bit_stk.pop();
    };

    enterPanswer__(ctx: ParserRuleContext):void {
	this.curr_bit_stk.push('panswer');
    };

    exitPanswer__(ctx: ParserRuleContext):void {

	let code:string = this.but.getcode(ctx);
	code = this.but.remove_tail(code, '\n=+\n?');
	
	let vals:string[] = code.split('\n--\n');
	// Could be an empty answer
	if (code.startsWith('==='))  
	    return;
	let lastpairidx = this.stk.top().bit['pairs'].length-1;

	if (0 < this.stk.size) {
	    for (let val of vals)
		if (val.length != 0) {
		    val = val.replace(/\[@example(:[^\]]*)?\]/, '');
		    this.stk.top().bit['pairs'][lastpairidx]['values'].push(val.trim());
		    (this.stk.top()).bit['body'] = (this.stk.top()).bit['body'].replace(val,'');
		}
	}
	else
	    log['error']("enterValue_title stack is empty");
	this.curr_bit_stk.pop();  // drop panswer
    };
    //
    enterMpanswer(ctx: ParserRuleContext):void {
	const lastmatidx = this.stk.top().bit['matrix'].length-1;
	let cell = R_clone(JSON_BIT_TEMPLATES.MatchMatrix_cell);
	this.stk.top().bit['matrix'][lastmatidx]['cells'].push(cell);
	this.curr_bit_stk.push(cell);
    };
    exitMpanswer(ctx: ParserRuleContext):void {
	this.curr_bit_stk.pop();
    };

    enterMpanswer__(ctx: ParserRuleContext):void {
	this.curr_bit_stk.push('mpanswer'); // let children know the key
    };

    //
    exitMpanswer__(ctx: ParserRuleContext):void {
	let code:string = this.but.getcode(ctx, true); // pass true to say this could end without ]
	code = this.but.remove_tail(code, '\n=+\n?');
	let vals:string[] = code.split('\n--\n');

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
		    
		    // Sep 10,2022 bug fix. replace should not replace text before matrix text.
		    let i = (this.stk.top()).bit['body'].indexOf('===');
		    (this.stk.top()).bit['body'] = (this.stk.top()).bit['body'].replaceFrom(val,'',i);	
		}
	}
	else
	    log['error']("enterValue_title stack is empty");  
	this.curr_bit_stk.pop();
    };

    // Enter a parse tree produced by bitmarkParser#match_solution_grouped.
    enterMatch_solution_grouped(ctx: ParserRuleContext):void {
	this.push_tmpl(ctx, 'match-solution-grouped', R_clone(JSON_BIT_TEMPLATES.Match_bit));
    };
    // Exit a parse tree produced by bitmarkParser#match_solution_grouped.
    //exitMatch_solution_grouped(ctx):void {};

    // Enter a parse tree produced by bitmarkParser#true_false_1.
    enterTrue_false_1(ctx: ParserRuleContext):void {
	this.push_tmpl(ctx, 'true-false-1', R_clone(JSON_BIT_TEMPLATES.True_false_1));
    }
    // Exit a parse tree produced by bitmarkParser#true_false_1.
    //exitTrue_false_1(ctx):void {}

    // Enter a parse tree produced by bitmarkParser#true_false.
    enterTrue_false(ctx: ParserRuleContext):void {
	this.push_tmpl(ctx, 'true-false', R_clone(JSON_BIT_TEMPLATES.True_false));
    }
    // Exit a parse tree produced by bitmarkParser#true_false.
    //exitTrue_false(ctx: ParserRuleContext):void {};

    // Enter a parse tree produced by bitmarkParser#bool_label.
    // [@label-true:rather yes]
    // [@label-false:rather no]
    exitBool_label(ctx: ParserRuleContext):void {
	let code:string = this.but.getcode(ctx);
	const re = /\[@label(True|False):([^\]]+)\]/;
	let m = code.match(re);
	
	let val:string = m[2];
	if (0 < code.indexOf('labelTrue'))
	    this.stk.top().bit.labelTrue = val;
	else
	    this.stk.top().bit.labelFalse = val;
	// Remove from body
	(this.stk.top()).bit['body'] = (this.stk.top()).bit['body'].replace(code,'');  
    };
    exitProgress_points(ctx: ParserRuleContext):void {
	let code:string = this.but.getcode(ctx);
	let val:string = this.check_numeric_prop(ctx, code, 'progressPoints');
	if (!val)
	    return;
	this.stk.top().bit.progressPoints = parseInt(val);
	// Remove from body
	(this.stk.top()).bit['body'] = (this.stk.top()).bit['body'].replace(code,'');  
    };

    // Common func to check with numeric value properties
    check_numeric_prop(ctx: ParserRuleContext, code: string, propname: string) {
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
    exitIstracked(ctx: ParserRuleContext):void {
	let code:string = this.but.getcode(ctx);
	let val:string = this.check_bool_prop(ctx, code, 'isTracked');
	if (!val)
	    return;
	this.stk.top().bit.isTracked = (val==='true');
	// Remove from body
	(this.stk.top()).bit['body'] = (this.stk.top()).bit['body'].replace(code,'');  
    };
    // Boolean property
    exitIsinfoonly(ctx: ParserRuleContext):void {
	let code:string = this.but.getcode(ctx);
	let val:string = this.check_bool_prop(ctx, code, 'isInfoOnly');
	if (!val)
	    return;
	this.stk.top().bit.isInfoOnly = (val==='true');
	// Remove from body
	(this.stk.top()).bit['body'] = (this.stk.top()).bit['body'].replace(code,'');  
    };

    // Common func to check with numeric value properties
    check_bool_prop(ctx: ParserRuleContext, code:string, propname: string) {
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
    enterSequence(ctx: ParserRuleContext):void {
	this.push_tmpl(ctx, 'sequence', R_clone(JSON_BIT_TEMPLATES.Sequence));
    };
    // Exit a parse tree produced by bitmarkParser#sequence.
    exitSequence(ctx: ParserRuleContext):void {
	(this.stk.top()).bit['body'] = (this.stk.top()).bit['body'].replace(/\n?--?\n?/g,'');
	(this.stk.top()).bit['body'] = (this.stk.top()).bit['body'].replace(/\n?===?\n?/g,'');  
    };
    //
    exitSeqstr(ctx: ParserRuleContext):void {
	let code:string = this.but.getcode(ctx);
	this.stk.top().bit['elements'].push(code);
	(this.stk.top()).bit['body'] = (this.stk.top()).bit['body'].replace(code,'');  
    };

    // Enter a parse tree produced by bitmarkParser#correction.
    enterCorrection(ctx: ParserRuleContext):void {
	this.push_tmpl(ctx, 'correction');    // TODO fix template
    };
    // Exit a parse tree produced by bitmarkParser#correction.
    //exitCorrection(ctx) {};

    // Enter a parse tree produced by bitmarkParser#mark_.
    enterMark_(ctx: ParserRuleContext):void {
	this.push_tmpl(ctx, 'mark', R_clone(JSON_BIT_TEMPLATES.Mark_bit)); 
    }
    // Exit a parse tree produced by bitmarkParser#mark_.
    //exitMark_(ctx: ParserRuleContext) {}

    // Enter a parse tree produced by bitmarkParser#mark_text.
    // ----- intentionallu enter -------
    enterMark_text(ctx: ParserRuleContext):void {
	let code:string = this.but.getcode(ctx);
	let re:RegExp = /\[\'([^\]]*)\]/;
	let val:string = this.but.get_bit_value(re, code);

	if (!('marks' in this.stk.top().bit))
	    (this.stk.top()).bit['marks'] = {};
	let n = Object.keys(this.stk.top().bit['marks']).length;
	let key = `{${val}:${n}}$marks`;
	this.curr_bit_stk.push(key);

	// Remove it from the body
	re=/(\[\'[^\]]*\])/;
	let m = code.match(re);
	code = m[1];
	(this.stk.top()).bit['body'] = (this.stk.top()).bit['body'].replace(code,'');
    }

    // Exit a parse tree produced by bitmarkParser#mark_text.
    exitMark_text(ctx: ParserRuleContext):void {
	this.curr_bit_stk.pop();
    };

    // Enter a parse tree produced by bitmarkParser#mark_color.
    enterMark_color(ctx: ParserRuleContext):void {
	let code:string = this.but.getcode(ctx);
	let re:RegExp = /\[@([^:]*)\s*:\s*([^\]]+)\s*\]/g;
	let vals:string[]|null = this.but.get_bit_value_colonsep(re, code);
	if (1 < vals.length) {
	    this.set_value_based_on_curr_bit_stk(vals[1], 'mark', null, null,
						 R_clone(JSON_BIT_TEMPLATES.Mark_element));
	    // Remove it from the body
	    (this.stk.top()).bit['body'] = (this.stk.top()).bit['body'].replace(code,'');
	}
	else
	    log['error']("enterMark_color stack is empty"); //  TODO is this good?
    };

    // Enter a parse tree produced by bitmarkParser#document_upload.
    enterDocument_upload(ctx: ParserRuleContext):void {
	this.push_tmpl(ctx, 'document-upload');
    }
    // Enter a parse tree produced by bitmarkParser#take_picture.
    enterTake_picture(ctx: ParserRuleContext):void {
	this.push_tmpl(ctx, 'take-picture');
    };
    enterTake_audio(ctx: ParserRuleContext):void {
	this.push_tmpl(ctx, 'take-audio');
    };
    // Enter a parse tree produced by bitmarkParser#record.
    enterRecord_audio(ctx: ParserRuleContext):void {
	this.push_tmpl(ctx, 'record');
    };
    // Enter a parse tree produced by bitmarkParser#preparation_note.
    enterPreparation_note(ctx: ParserRuleContext):void {
	this.push_tmpl(ctx, 'preparation-note');
    }

    // Enter a parse tree produced by bitmarkParser#assignment.
    enterAssignment(ctx: ParserRuleContext):void {
	this.push_tmpl(ctx, 'assignment');
    };
    // Exit a parse tree produced by bitmarkParser#assignment.
    //exitAssignment(ctx):void {};

    enterVocab(ctx: ParserRuleContext):void {
	this.push_tmpl(ctx, 'vocabulary');  // default template
    };
    //exitVocab(ctx):void {};
    enterVocab_1(ctx: ParserRuleContext):void {
	this.push_tmpl(ctx, 'vocabulary-1');  // default template
    };
    //exitVocab_1(ctx):void {};
    // Enter a parse tree produced by bitmarkParser#flashcard_1.
    enterFlashcard_1(ctx: ParserRuleContext):void {
	this.push_tmpl(ctx, 'flashcard-1');
    };
    //exitFlashcard_1(ctx):void {};
    // New 0902/20202
    enterFlashcard_set(ctx: ParserRuleContext):void {
	this.push_tmpl(ctx, 'flashcard-set');
    };
    //exitFlashcard_set(ctx):void {};
    // New 0902/20202
    enterFlashcard_language_set(ctx: ParserRuleContext):void {
	this.push_tmpl(ctx, 'flashcard-language-set');
    };
    //exitFlashcard_language_set(ctx):void {};
    // New 0902/20202
    enterFlashcard_language_1(ctx: ParserRuleContext):void {
	this.push_tmpl(ctx, 'flashcard-language-1');
    };
    //exitFlashcard_language_1(ctx):void {};
    // Enter a parse tree produced by bitmarkParser#flashcard.
    enterFlashcard(ctx: ParserRuleContext):void {
	this.push_tmpl(ctx, 'flashcard');
    };
    // Exit a parse tree produced by bitmarkParser#flashcard.
    //exitFlashcard(ctx):void {};

    // Added June 22.
    exitAtdef_(ctx: ParserRuleContext):void {
	let code:string = this.but.getcode(ctx);
	let re:RegExp = /\[@([^:]*)\s*:\s*([^\]]*)\s*\]/g;
	let vals:string[]|null = this.but.get_bit_value_colonsep(re, code);
	let what = this.curr_bit_stk.top();

	if (0 < vals.length) {
	    if (what !== 'menu' && (vals[0] === 'format' || vals[0] === 'type'))
		vals[0] = '_'+vals[0];  // because those keys are already there

	    if (-1 < this.atdef_str.indexOf(vals[0])) {
		// Not a list = string
		this.stk.top().bit[vals[0]] = vals[1];
	    }
	    else if (-1 < this.atdef_num.indexOf(vals[0])) {
		this.stk.top().bit[vals[0]] = parseInt(vals[1]);
	    }
	    else if (what==='website-link') {
		this.stk.top().bit['resource'].preview[vals[0]] = vals[1];
	    }
	    else if (what === 'bot_action') {
		// bot-action-response
		let l = this.stk.top().bit['responses'].length;
		const REACTIONS = ['correct','wrong','unknown','agree','disagree','celebrate',
				   'like','success','funny','love','insightful','ok','neutral',
				   'happy','cool','what?'];
		if (vals[0]==='reaction') {
		    if (REACTIONS.indexOf(vals[1]) < 0) {
			this.error_listener.manualError(ctx, ctx._start.line-1, 0,
							`Reaction value "${vals[1]}" is not allowed`);
			return null; }
		}
		this.stk.top().bit['responses'][l-1][vals[0]] = vals[1];
	    }
	    else if (what==='menu') {
		let fn = this.curr_bit_stk.second();
		fn(code, vals[0], vals[1]);
	    }
	    else {
		// @def values be in a list
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
	    (this.stk.top()).bit['body'] = (this.stk.top()).bit['body'].replace(code,'');
	}
	else
	    this.error_listener.manualError(ctx, ctx._start.line-1, 0,
					    'Missing a colon in [@] tag');
    };

    // Added July 24
    exitReference(ctx: ParserRuleContext):void {
	this.exitAtdef_(ctx);
    };
    exitDateprop(ctx: ParserRuleContext):void {
	this.exitAtdef_(ctx);
    };
    exitDateprop_chained(ctx: ParserRuleContext):void {
	let code:string = this.but.getcode(ctx);
	let re:RegExp = /\[@([^:]*)\s*:\s*([^\]]*)\s*\]/g;
	let vals:string[]|null = this.but.get_bit_value_colonsep(re, code);

	if (0 < vals.length) {
	    if (-1 < this.atdef_str.indexOf(vals[0])) {
		this.stk.top().bit['dateEnd'] = vals[1];
	    }
	    (this.stk.top()).bit['body'] = (this.stk.top()).bit['body'].replace(code,'');
	}
	else
	    this.error_listener.manualError(ctx, ctx._start.line-1, 0,
					    'Missing a colon in [@] tag');
    };


    enterBit_alias(ctx: ParserRuleContext):void {
	this.push_tmpl(ctx, 'bit-alias');
    };
    //exitBit_alias(ctx):void {};

    // e.g. [►com.firstpub.09823409h44]
    exitAngleref(ctx: ParserRuleContext):void {
	let code:string = this.but.getcode(ctx);
	let con = this.but.get_bracket_content(code);

	this.num_angleref++;
	if (this.num_angleref==2)
	    (this.stk.top()).bit['referenceEnd'] = con.substr(1,con.length);
	else
	    (this.stk.top()).bit['reference'] = con.substr(1,con.length);
	this.stk.top().bit['body'] = this.stk.top().bit['body'].replace(code, '');
    };

    // e.g.[.internal-link][!More examples and quizzes...][►Ref4.2.34]
    enterInternal_link(ctx: ParserRuleContext):void {
	this.push_tmpl(ctx, 'internal-link');  
    };
    //exitInternal_link(ctx):void {};

    // Enter a parse tree produced by bitmarkParser#article.
    enterArticle(ctx: ParserRuleContext):void { 
	this.push_tmpl(ctx, 'article', R_clone(JSON_BIT_TEMPLATES.Article_bit));
    };
    // Enter a parse tree produced by bitmarkParser#statement
    enterStatement(ctx: ParserRuleContext):void { 
	// same as article
	this.push_tmpl(ctx, 'statement', R_clone(JSON_BIT_TEMPLATES.Article_bit));
    };
    enterDetails(ctx: ParserRuleContext):void { 
	// same as article
	this.push_tmpl(ctx, 'details-1', R_clone(JSON_BIT_TEMPLATES.Article_bit));
    };
    enterSample_solution(ctx: ParserRuleContext):void { 
	// same as article
	this.push_tmpl(ctx, 'sample-solution', R_clone(JSON_BIT_TEMPLATES.Article_bit));
    };
    enterWbtcontinue(ctx: ParserRuleContext):void { 
	// same as article
	this.push_tmpl(ctx, 'wbt-continue', R_clone(JSON_BIT_TEMPLATES.Article_bit));
    };
    enterButtoncopytext(ctx: ParserRuleContext):void { 
	// same as article
	this.push_tmpl(ctx, 'button-copy-text', R_clone(JSON_BIT_TEMPLATES.Article_bit));
    };
    enterLearningpathdetails(ctx: ParserRuleContext):void { 
	// same as article
	this.push_tmpl(ctx, 'learning-path-details', R_clone(JSON_BIT_TEMPLATES.Article_bit));
    };


    //exitArticle(ctx):void {};
    // Enter a parse tree produced by bitmarkParser#article.
    enterPage(ctx: ParserRuleContext):void { 
	this.push_tmpl(ctx, 'page', R_clone(JSON_BIT_TEMPLATES.Article_bit));
    };
    //exitPage(ctx):void {};

    // Enter a parse tree produced by bitmarkParser#article_attachment.
    //enterArticle_attachment(ctx):void {}

    // NEW 12/2/2020
    enterMessage(ctx: ParserRuleContext):void {
	this.push_tmpl(ctx, 'message', R_clone(JSON_BIT_TEMPLATES.Message_bit));
    }
    // NEW 12/2/2020
    //exitMessage(ctx):void {};

    enterChat(ctx: ParserRuleContext):void {
	this.push_tmpl(ctx, 'chat', R_clone(JSON_BIT_TEMPLATES.Chat_bit));
    };
    exitChat(ctx: ParserRuleContext):void { 
	(this.stk.top()).bit['body'] = (this.stk.top()).bit['body'].replace(/\n?==(=)?\n?/g,'');
    };
    // Conversation is equivalent to chat in all aspect.
    enterConversation(ctx: ParserRuleContext):void {
	this.push_tmpl(ctx, 'conversation', R_clone(JSON_BIT_TEMPLATES.Chat_bit));  
    };
    exitConversation(ctx: ParserRuleContext):void { 
	(this.stk.top()).bit['body'] = (this.stk.top()).bit['body'].replace(/\n?==(=)?\n?/g,'');
    };

    enterChat_initiator(ctx: ParserRuleContext):void {
	let code:string = this.but.getcode(ctx);
	let alt = this.stk.top().bit.initiator.avatarImage.alt;
	(this.stk.top()).bit['chat'].push({
	    name: (this.stk.top()).bit.initiator.name,
	    alt: alt,
	    text: code,
	    initiator: true
	});
    };
    exitChat_initiator(ctx: ParserRuleContext):void {
	// Remove it from body
	let code:string = this.but.getcode(ctx);
	(this.stk.top()).bit['body'] = (this.stk.top()).bit['body'].replace(code,'');
    };

    enterChat_partner(ctx: ParserRuleContext):void {
	let code:string = this.but.getcode(ctx);
	let alt = this.stk.top().bit.partner.avatarImage.alt;
	(this.stk.top()).bit['chat'].push({
	    name: (this.stk.top()).bit.partner.name,
	    alt: alt,
	    text: code,
	    initiator: false
	});
    };
    exitSspl_chat_partner(ctx: ParserRuleContext):void { 
	// Remove it from body
	let code:string = this.but.getcode(ctx);
	(this.stk.top()).bit['body'] = (this.stk.top()).bit['body'].replace(code,'');
    };

    // Enter a parse tree produced by bitmarkParser#senderName.
    enterInitiator(ctx: ParserRuleContext):void {
	this.curr_bit_stk.push('initiator');  // key for the  name
    };
    // Exit a parse tree produced by bitmarkParser#senderName.
    //exitInitiator(ctx):void {};

    // Enter a parse tree produced by bitmarkParser#receiverName.
    enterPartner(ctx: ParserRuleContext):void {
	this.curr_bit_stk.push('partner');  // key for the  name
    };
    enterPartner1(ctx: ParserRuleContext):void {
	this.curr_bit_stk.push('partner');  // key for the  name
    };
    exitPartner1_name(ctx: ParserRuleContext):void {
	let code:string = this.but.getcode(ctx);
	let [prop,name] = this.but.get_at_value(code);  // [@partner:name]
	const key = this.curr_bit_stk.top();
	if (this.stk.top().bit[key]===undefined)
	    this.stk.top().bit[key] = {};
	(this.stk.top()).bit[key]['name'] = name;
	(this.stk.top()).bit['body'] = (this.stk.top()).bit['body'].replace(code,'');
    };
    //enterChat_partner1(ctx):void {};
    // Exit a parse tree produced by bitmarkParser#receiverName.
    //exitPartner(ctx):void {};

    // Enter a parse tree produced by bitmarkParser#name_text.
    enterName_text(ctx: ParserRuleContext):void {
	let code:string = this.but.getcode(ctx);
	let name = this.but.get_title(code);
	const key = this.curr_bit_stk.top();
	(this.stk.top()).bit[key].name = name;
    };
    // Exit a parse tree produced by bitmarkParser#name_text.
    exitName_text(ctx: ParserRuleContext):void {
	let code:string = this.but.getcode(ctx);
	let k = 'body';
	(this.stk.top()).bit['body'] = (this.stk.top()).bit['body'].replace(code,'');
    };
    exitName_alt(ctx: ParserRuleContext):void {
	let code:string = this.but.getcode(ctx);
	let re:RegExp = /\[@([^:]*)\s*:\s*([^\]]*)\s*\]/g;
	let vals:string[]|null = this.but.get_bit_value_colonsep(re, code);
	let slot: string = this.curr_bit_stk.top();
	this.stk.top().bit[slot]['avatarImage'][vals[0]] = vals[1];
	(this.stk.top()).bit['body'] = (this.stk.top()).bit['body'].replace(code,'');  
    };
    // Exit a parse tree produced by bitmarkParser#bot_choice.
    exitBot_choice(ctx: ParserRuleContext):void {
	// Remove it from body
	let code:string = this.but.getcode(ctx);
	(this.stk.top()).bit['body'] = (this.stk.top()).bit['body'].replace(code,'');
    };

    // Enter a parse tree produced by bitmarkParser#self_assessment.
    enterSelf_assessment(ctx: ParserRuleContext):void {
	this.push_tmpl(ctx, 'self-assessment');
    }
    // Exit a parse tree produced by bitmarkParser#self_assessment.
    //exitSelf_assessment(ctx):void {};

    // Enter a parse tree produced by bitmarkParser#rating.
    enterRating(ctx: ParserRuleContext):void {
	this.push_tmpl(ctx, 'rating');
    };
    //exitRating(ctx: ParserRuleContext):void {};
    // Enter a parse tree produced by bitmarkParser#rating.
    enterSurvey(ctx: ParserRuleContext):void {
	this.push_tmpl(ctx, 'survey');
    };
    //exitSurvey(ctx):void {};
    // Enter a parse tree produced by bitmarkParser#rating.
    enterSurvey_1(ctx: ParserRuleContext):void {
	this.push_tmpl(ctx, 'survey-1');
    };
    exitSurvey_1(ctx: ParserRuleContext):void {};
    // Enter a parse tree produced by bitmarkParser#rating.
    enterSurvey_anonymous(ctx: ParserRuleContext):void {
	this.push_tmpl(ctx, 'survey-anonymous');
    };
    exitSurvey_anonymous(ctx: ParserRuleContext):void {};
    // Enter a parse tree produced by bitmarkParser#rating.
    enterSurvey_anonymous_1(ctx: ParserRuleContext):void {
	this.push_tmpl(ctx, 'survey-anonymous-1');
    };
    exitSurvey_anonymous_1(ctx: ParserRuleContext):void {};
    // Enter a parse tree produced by bitmarkParser#atpoint.
    exitBullet_item(ctx: ParserRuleContext):void {
	let code:string = this.but.getcode(ctx);
	let val:string = this.but.get_bit_value(/\[ *•([^\]]+)\]/, code);
	
	if (!('bullet' in (this.stk.top()).bit))
	    (this.stk.top()).bit['bullet'] = [];  // TODO change the name 'bullet'
	(this.stk.top()).bit['bullet'].push(val);
	(this.stk.top()).bit['body'] = (this.stk.top()).bit['body'].replace(code,'');
    }

    // Enter a parse tree produced by bitmarkParser#atpoint.
    exitAtpoint(ctx: ParserRuleContext):void {
	let code:string = this.but.getcode(ctx);
	let vals:string[] = this.but.get_at_value(code);
	if (!('points' in (this.stk.top()).bit))
	    (this.stk.top()).bit['points'] = [];
	(this.stk.top()).bit['points'].push(vals[1]);
    }

    exitResource_format(ctx: ParserRuleContext):void {
	let fmt = this.but.remove_close_bracket_and_follow(this.but.getcode(ctx));
	if (fmt.startsWith(':bitmark')) {
	    this.format = fmt;  // @1
	    this.stk.top().bit.format = fmt.substring(1);
	}
	else {
	    this.resformat = fmt;
	}
    };
    exitResource_format_extra(ctx: ParserRuleContext):void {
	let fmt = this.but.remove_close_bracket_and_follow(this.but.getcode(ctx));
	if (fmt.startsWith(':bitmark')) {
	    this.format = fmt;  // @2
	}
	else {
	    this.resformat = fmt;
	}
    };

    enterPimage_one(ctx: ParserRuleContext):void {
	this.curr_bit_stk.push('pimage');
    };
    enterImage_one(ctx: ParserRuleContext):void {
	let key = this.get_resource_type(ctx) 
	if (this.curr_bit_stk.top() != 'pimage')
	    this.curr_bit_stk.push(key);
    };
    exitImagebit(ctx: ParserRuleContext):void {
	this.curr_bit_stk.pop();
    };
    // [&image::https://cdn
    exitImage_one(ctx: ParserRuleContext):void {

	let code:string = this.but.getcode(ctx);
	let [what, url] = this.but.get_url(code);
	let key = this.curr_bit_stk.top().trim();
	let tmpl = key==='image' ? R_clone(JSON_BIT_TEMPLATES.Image_detail_element) :
	    R_clone(JSON_BIT_TEMPLATES.ImageLink);
	const bit = this.stk.top().bit;
	const bittype = bit.type;
	const format = bit.format;
	
	// From footer
	if (1 < this.curr_bit_stk.size && this.curr_bit_stk.second()==='footer')
	    return;
	
	if (url == undefined) {
	    // Error probably ': :'
	    this.error_listener.manualError(ctx, ctx._start.line-1, 7, 'Syntax error: did you mean ::?');
	    return;
	}
	if (bittype in {'chat':0,'conversation':1,'conversation-left-1':2,'conversation-right-1':3,
			'conversation-right-1-thought':4, 'conversation-right-1-scream':5,
			'conversation-left-1-thought':6, 'conversation-left-1-scream':7
		       }
	    && 1 < this.curr_bit_stk.size) {
	    key = this.curr_bit_stk.second();
	    if (bit[key]===undefined)
		bit[key] = {};
	    bit[key].avatarImage = tmpl;
	    bit[key].avatarImage['src'] = url;
	    bit[key].avatarImage['format'] = url.split('.').pop();
	}
	else if (format==='image' || this.resformat in this.RESOURCE_MAP) {
	    const res = this.but.remove_close_bracket_and_follow(code);
	    bit[this.body_key] = bit[this.body_key].replace(code, '');
	    const slot = 'resource';
	    if (this.stk.top().bit[slot]==undefined)
		bit[slot] = {};
	    key = this.RESOURCE_MAP[this.resformat];
	    bit[slot]['type'] = what.substr(1).trim();
	    bit[slot][key] = tmpl;
	    bit[slot][key][this.resformat==='&image'?'src':'url'] = url;
	    bit[slot][key]['format'] = url.split('.').pop();
	    let caption = this.but.get_caption_string(code);
	    if (caption) {
		bit[slot][key]['caption'] = caption;
	    }
	}
	else if (this.resformat in this.RESOURCE_MAP) {
	    const res = this.but.remove_close_bracket_and_follow(code);
	    bit[this.body_key] = bit[this.body_key].replace(code, '');
	    const slot = 'resource';
	    key = this.RESOURCE_MAP[this.resformat];
	    if (this.stk.top().bit[slot]==undefined)
		bit[slot] = {};
	    bit[slot]['type'] = what.substr(1).trim();
	    bit[slot][key] = tmpl;
	    bit[slot][key]['url'] = url;
	    bit[slot][key]['provider'] = this.but.get_domain_from_url(url);    
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
	    bit.footer = bit.footer + code;
	    bit['body'] = bit['body'].replace(code,'');
	}
	bit['body'] = bit['body'].replace(code,'');
    };

    enterStillimagefilmbit(ctx: ParserRuleContext):void {
	let key = this.get_resource_type(ctx);
	this.curr_bit_stk.push(key);  // this is intentional!
    };  
    exitStillimg_one(ctx: ParserRuleContext):void {
	this.exitImage_one(ctx);
    };

    enterAudiobit(ctx: ParserRuleContext):void {
	let key = this.get_resource_type(ctx) 
	this.curr_bit_stk.push(key);
    };
    exitAudiobit(ctx: ParserRuleContext):void {
	this.curr_bit_stk.pop();
    };
    // Enter a parse tree produced by bitmarkParser#audiobit.
    exitAudio_one(ctx: ParserRuleContext):void {

	let code:string = this.but.getcode(ctx);
	let [what, url] = this.but.get_url(code);
	let key = this.curr_bit_stk.top(), slot='resource';
	const bit = this.stk.top().bit;
	
	if (url == undefined) {
	    // Error probably ': :'
	    this.error_listener.manualError(ctx, ctx._start.line-1, 7, 'Syntax error: did you mean ::?');
	    return;
	}
	if (key in this.stk.top().bit
	    && 'avatarImage' in this.stk.top().bit[key]) {
	    // Chat, Survey etc
	}
	else if (this.resformat=='&audio'|| this.resformat == "&image-with-audio") {
	    const res = this.but.remove_close_bracket_and_follow(code);
	    key = what.substr(1);  // remove &
	    
	    if (this.stk.top().bit[slot]==undefined)
		bit[slot] = {};
	    bit[slot]['type'] = key;
	    key = camelize(key);
	    bit[slot][key] = {};
	    bit[slot][key]['format'] = url.split('.').pop();
	    bit[slot][key]['src'] = url;
	    // Remove from the body
	    bit['body'] = bit['body'].replace(code,'');
	}
	else if (what==='&audio-link' && this.resformat.startsWith('&audio')) {
	    let key = what.substr(1);  // remove &
	    if (this.stk.top().bit[slot]==undefined)
		bit[slot] = {};
	    bit[slot]['type'] = key;
	    key = camelize(key);
	    bit[slot][key] = {};
	    bit[slot][key]['provider'] = url.split('.').pop();
	    bit[slot][key]['url'] = url;
	    bit[slot][key]['duration'] = '';
	    bit[slot][key]['autoplay'] = true;
	    // Remove from the body
	    bit['body'] = bit['body'].replace(code,'');
	}  
	else if (1 < this.curr_bit_stk.size
	    && this.curr_bit_stk.second() === 'footer') { // not match-pair
	    bit.footer = bit.footer + code;
	    bit['body'] = bit['body'].replace(code,'');
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
	    bit['body'] = bit['body'].replace(code,'');
	}
    };
    get_resource_type(ctx: ParserRuleContext):string {
	let code:string = this.but.getcode(ctx);
	let [key, url] = this.but.get_url(code);
	return key.replace('&', '');
    };

    // Enter a parse tree produced by bitmarkParser#videobit.
    enterVideobit(ctx: ParserRuleContext):void {
	let key = this.get_resource_type(ctx) 
	this.curr_bit_stk.push(key);
    };
    exitVideobit(ctx: ParserRuleContext):void {
	this.curr_bit_stk.pop();
    };

    exitVideo_one(ctx: ParserRuleContext):void {
	let code:string = this.but.getcode(ctx);
	let [what, url] = this.but.get_url(code);
	let key = this.curr_bit_stk.top(), slot='resource';
	const bit = this.stk.top().bit;
	
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
	    bit[this.body_key] = bit[this.body_key].replace(code, '');
	    const key = camelize(what.substr(1));  // remove &
	    bit[slot] = {};
	    bit[slot]['type'] = what.substr(1);
	    bit[slot][key] = key==='video' ? R_clone(JSON_BIT_TEMPLATES.Video) : R_clone(JSON_BIT_TEMPLATES.VideoLink);
	    let parent = bit[slot][key];
	    
	    if (key==='video') {
		parent['format'] = url.split('.').pop();
		parent['src'] = url;
		parent['mute'] = false;
		parent['autoplay'] = false;
	    }
	    else {// Video-link
		parent['provider'] = this.but.get_domain_from_url(url);
		parent['url'] = url;
	    }
	    bit['body'] = bit['body'].replace(code,'');
	}
	else if (1 < this.curr_bit_stk.size
	    && this.curr_bit_stk.second() === 'footer') { // not match-pair
	    bit.footer = bit.footer + code;
	    bit['body'] = bit['body'].replace(code,'');
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
	    bit['body'] = bit['body'].replace(code,'');    
	}
    };
    enterArticlebit(ctx: ParserRuleContext):void {
	let key = this.get_resource_type(ctx) 
	this.curr_bit_stk.push(key);
    };
    // Enter a parse tree produced by bitmarkParser#videobit.
    exitArticlebit(ctx: ParserRuleContext):void {

	let code:string = this.but.getcode(ctx);
	let [what, url] = this.but.get_url(code);
	let key = this.curr_bit_stk.top(), slot='resource';
	let format='', content='';
	const bit = this.stk.top().bit;
	
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
	    let re:RegExp = /^\[&([^:]+):/;
	    let m = code.match(re);
	    key = m[1];
	}
	if (0 < this.stk.size && key in this.stk.top().bit
	    && 'avatarImage' in this.stk.top().bit[key]) {
	    // Chat, Survey etc
	}
	else if (what==='&article-link') {
	    bit[slot] = {};
	    bit[slot]['type'] = key;
	    key = camelize(key);
	    bit[slot][key] = {};
	    bit[slot][key]['url'] = url;    
	}
	else if (url.startsWith('http')) {
	    let key_org = key;

	    bit[slot] = {};
	    let parent = bit[slot][key];
	    key = camelize(key);  //this.but.underscore_to_camelcase(key);
	    //
	    bit[slot]['type'] = key_org;
	    parent = {};
	    parent['format'] = format;
	    parent['url'] = url;
	    parent['body'] = content;
	}
	else if (1 < this.curr_bit_stk.size
	    && this.curr_bit_stk.second() === 'footer') { // not match-pair
	    bit.footer = bit.footer + code;
	    bit['body'] = bit['body'].replace(code,'');
	}
	else {
	    // key is already set
	    bit[slot] = {};    
	    let parent = bit[slot];
	    parent['type'] = key;
	    parent[key] = {};   // article
	    parent[key]['format'] = format;
	    parent[key]['href'] = '';
	    parent[key]['body'] = content;
	}
	bit['body'] = bit['body'].replace(code,'');
    };

    // Enter a parse tree produced by bitmarkParser#videobit.
    exitDocumentbit(ctx: ParserRuleContext):void {
	let code:string = this.but.getcode(ctx);
	let [what, url] = this.but.get_url(code);
	const key = this.curr_bit_stk.top(), slot='resource';
	const bit = this.stk.top().bit;
	const has_resource = bit['resource']!==undefined;
	
	if (key in this.stk.top().bit && 'avatarImage' in this.stk.top().bit[key]) {
	    // Chat, Survey etc
	}
	if (!has_resource) {
	    if (what==='&document') {
		const key = what.substr(1);  // remove &
		bit[slot] = {}; // slot=resource
		bit[slot]['type'] = key;  // document
		bit[slot][key] = url;
		bit[slot]['private'] = {};
	    }
	    if (-1 < ['&document-link', '&document-download'].indexOf(what)) {
		let key = what.substr(1);  // remove &
		bit[slot] = {}; // slot=resource
		bit[slot]['type'] = key;  // document
		key = camelize(key);
		bit[slot][key] = {};
		bit[slot][key]['url'] = url;
		bit[slot][key]['provider'] = this.but.get_domain_from_url(url);
	    }
	    bit['body'] = bit['body'].replace(code,'');
	}
	else if (1 < this.curr_bit_stk.size
	    && this.curr_bit_stk.second() === 'footer') { // not match-pair
	    bit.footer = bit.footer + code;
	    bit['body'] = bit['body'].replace(code,'');
	}
	else {
	    const key = 'document', slot= 'excessResources';
	    if ((this.stk.top()).parser == undefined)
		(this.stk.top())['parser'] = {};
	    if ((this.stk.top()).parser[slot]===undefined)
		(this.stk.top()).parser[slot] = [];
	    (this.stk.top()).parser[slot].push({'type': key, src: url});
	    bit['body'] = bit['body'].replace(code,'');
	}
    };
    enterAppbit(ctx: ParserRuleContext):void {
	let key = this.get_resource_type(ctx) 
	this.curr_bit_stk.push(key);
    };
    // Enter a parse tree produced by bitmarkParser#videobit.
    exitAppbit(ctx: ParserRuleContext):void {
	let code:string = this.but.getcode(ctx);
	let [what, url] = this.but.get_url(code);
	let key = this.curr_bit_stk.top();
	const has_resource = (this.stk.top()).bit['resource']!==undefined;
	let slot='resource';
	const bit = this.stk.top().bit;
	const stktop = this.stk.top();
	
	if (what==='&app-link') {
	    let bit = this.stk.top().bit;
	    bit[slot] = {};
	    bit[slot]['type'] = key;
	    key = camelize(key);
	    bit[slot][key] = {};
	    bit[slot][key]['url'] = url;    
	}
	else if (!has_resource) {
	    if (key in bit && 'avatarImage' in bit[key]) {
		// Chat, Survey etc
	    }
	    else {
		const key = what.substr(1);
		bit[slot] = {};
		bit[slot]['type'] = key;
		bit[slot]['app'] = url;
		bit[slot]['private'] = {};
	    }
	}
	else if (1 < this.curr_bit_stk.size
	    && this.curr_bit_stk.second() === 'footer') { // not match-pair
	    bit.footer = bit.footer + code;
	    bit['body'] = bit['body'].replace(code,'');
	}
	else {
	    const key = 'app';
	    slot= 'excessResources';
	    
	    if (stktop.parser == undefined)
		stktop['parser'] = {};
	    if (stktop.parser[slot]===undefined)
		stktop.parser[slot] = [];
	    stktop.parser[slot].push({'type': key, src: url});
	}
	bit['body'] = bit['body'].replace(code,'');
	
    };

    enterWebsitebit(ctx: ParserRuleContext):void {
	let key = this.get_resource_type(ctx) 
	this.curr_bit_stk.push(key);
    };
    // Added 12/8/2020
    exitWebsitebit(ctx: ParserRuleContext):void {
	let code:string = this.but.getcode(ctx);
	let [what, url] = this.but.get_url(code);
	let key = this.curr_bit_stk.top();
	const has_resource = (this.stk.top()).bit['resource']!==undefined;
	const slot='resource';
	const bit = this.stk.top().bit;
	const stktop = this.stk.top();
	
	if (what==='&website-link') {
	    //
	    bit[slot] = R_clone(JSON_BIT_TEMPLATES.Res_website_link);
	    what = what.substr(1);
	    bit[slot]['type'] = what;
	    key = camelize(what);  // remove &
	    bit[slot][key] = {};
	    bit[slot][key]['siteName'] = ''; 
	    bit[slot][key]['url'] = url; 
	}  
	else if (!has_resource) {
	    if (key in this.stk.top().bit && 'avatarImage' in this.stk.top().bit[key]) {
		// Chat, Survey etc
	    }
	    else {
		bit[slot] = {};
		bit[slot]['type'] = key;
		bit[slot]['website'] = url;
		bit[slot]['siteName'] = this.but.get_url_in_text(url);
		bit[slot]['private'] = {};
	    }
	}
	else if (1 < this.curr_bit_stk.size
	    && this.curr_bit_stk.second() === 'footer') { // not match-pair
	    bit.footer = bit.footer + code;
	    bit['body'] = bit['body'].replace(code,'');
	}
	else {
	    const key = 'website', slot= 'excessResources';
	    if (stktop.parser == undefined)
		stktop['parser'] = {};
	    if (stktop.parser[slot]===undefined)
		stktop.parser[slot] = [];
	    stktop.parser[slot].push({'type': key, src: url});
	}
	// Remove from body
	bit['body'] = bit['body'].replace(code,'');

    };


    escapeRegExp(a: string):string {
	return a.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    }

    // Enter a parse tree produced by bitmarkParser#item.
    exitItem(ctx: ParserRuleContext):void {
	const code:string = this.but.getcode(ctx);
	let regex:RegExp = /\[%\s*([^\]]+)\s*\]/;
	let val:string = this.but.get_bit_value(regex, code);  
	let cbit:string = this.curr_bit_stk.top();
	let type:string = this.stk.top().bit.type;

	if (code.startsWith('[%]')) {
	    // item is [%].
	    (this.stk.top()).bit['body'] = (this.stk.top()).bit['body'].split(code).join('');
	    return;
	}
	if (cbit==='cplus' || cbit==='cminus' || cbit==='interview_qanda') {
	    (this.curr_bit_stk.second()).item = val;
	}
	else if (cbit === 'pquery') {
	    let lastpair:number = this.stk.top().bit['pairs'].length-1;
	    this.stk.top().bit['pairs'][lastpair].item = val;
	    this.curr_bit_stk.pop();
	}
	else if (cbit === 'mpquery') {
	    let last:number = this.stk.top().bit['matrix'].length-1;
	    this.stk.top().bit['matrix'][last].item = val;
	    this.curr_bit_stk.pop();
	}
	else if (cbit === 'bot_action') {
	    let l:number = this.stk.top().bit['responses'].length;
	    this.stk.top().bit['responses'][l-1].item = val;
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
	(this.stk.top()).bit['body'] = (this.stk.top()).bit['body'].split(code).join('');
    }

    // new 11/20/2021
    exitLead(ctx: ParserRuleContext):void {
	const code:string = this.but.getcode(ctx);
	let regex:RegExp = /\[%\s*([^\]]+)\s*\]/;
	let val:string = this.but.get_bit_value(regex, code);  
	this.stk.top().bit['lead'] = val;  // save the only first one
    }
    // New April 2022
    enterLearning_path_lti(ctx: ParserRuleContext):void { this.push_tmpl(ctx, 'learning-path-lti', R_clone(JSON_BIT_TEMPLATES.LearningPath_bit)); };
    enterLearning_path_step(ctx: ParserRuleContext):void { this.push_tmpl(ctx, 'learning-path-step', R_clone(JSON_BIT_TEMPLATES.LearningPath_bit)); };
    enterLearning_path_book(ctx: ParserRuleContext):void { this.push_tmpl(ctx, 'learning-path-book', R_clone(JSON_BIT_TEMPLATES.LearningPath_bit)); };
    enterLearning_path_sign(ctx: ParserRuleContext):void { this.push_tmpl(ctx, 'learning-path-sign', R_clone(JSON_BIT_TEMPLATES.LearningPath_bit)); };
    enterLearning_path_video_call(ctx: ParserRuleContext):void { this.push_tmpl(ctx, 'learning-path-video-call', R_clone(JSON_BIT_TEMPLATES.LearningPath_bit)); };
    enterLearning_path_learning_goal(ctx: ParserRuleContext):void { this.push_tmpl(ctx, 'learning-path-learning-goal', R_clone(JSON_BIT_TEMPLATES.LearningPath_bit));};
    enterLearning_path_closing(ctx: ParserRuleContext):void { this.push_tmpl(ctx, 'learning-path-closing', R_clone(JSON_BIT_TEMPLATES.LearningPath_bit)); };
    enterLearning_path_feedback(ctx: ParserRuleContext):void { this.push_tmpl(ctx, 'learning-path-feedback', R_clone(JSON_BIT_TEMPLATES.LearningPath_bit)); };
    enterLearning_path_bot_training(ctx: ParserRuleContext):void { this.push_tmpl(ctx, 'learning-path-bot-training', R_clone(JSON_BIT_TEMPLATES.LearningPath_bit)); };
    enterLearning_path_external_link(ctx: ParserRuleContext):void { this.push_tmpl(ctx, 'learning-path-external-link', R_clone(JSON_BIT_TEMPLATES.LearningPath_bit)); };
    enterLearning_path_classroom_training(ctx: ParserRuleContext):void { this.push_tmpl(ctx, 'learning-path-classroom-training', R_clone(JSON_BIT_TEMPLATES.LearningPath_bit)); };
    enterLearning_path_classroom_event(ctx: ParserRuleContext):void { this.push_tmpl(ctx, 'learning-path-classroom-event', R_clone(JSON_BIT_TEMPLATES.LearningPath_bit)); };

    enterBot_action_send(ctx: ParserRuleContext):void { this.push_tmpl(ctx, 'bot-action-send'); };
    enterBot_action_announce(ctx: ParserRuleContext):void { this.push_tmpl(ctx, 'bot-action-announce'); };
    enterBot_action_save(ctx: ParserRuleContext):void { this.push_tmpl(ctx, 'bot-action-save'); };
    enterBot_action_remind(ctx: ParserRuleContext):void { this.push_tmpl(ctx, 'bot-action-remind'); };

    rmhspl(ctx: ParserRuleContext):void {
	let body:string = this.stk.top().bit['body'];
	this.stk.top().bit['body'] = body.replace(/\n*===\n*/g, '');
    };
    enterBot_action_response(ctx: ParserRuleContext):void { this.push_tmpl(ctx, 'bot-action-response'); };
    exitBot_action_response(ctx: ParserRuleContext):void { this.rmhspl(ctx); }
    enterBot_action_true_false(ctx: ParserRuleContext):void { this.push_tmpl(ctx, 'bot-action-true-false'); };
    exitBot_action_true_false(ctx: ParserRuleContext):void { this.rmhspl(ctx); }
    enterBot_action_rating_number(ctx: ParserRuleContext):void { this.push_tmpl(ctx, 'bot-action-rating-number'); };
    exitBot_action_rating_number(ctx: ParserRuleContext):void {
	this.rmhspl(ctx);
	this.bot_action_rating.sort();
	this.stk.top().bit['ratingStart'] = this.bot_action_rating[0];
	let l:number = this.bot_action_rating.length;
	this.stk.top().bit['ratingEnd'] = this.bot_action_rating[l-1];
    };
    enterBot_action_rating_stars(ctx: ParserRuleContext):void { this.push_tmpl(ctx, 'bot-action-rating-stars'); };
    exitBot_action_rating_stars(ctx: ParserRuleContext):void { this.rmhspl(ctx); }

    enterBot_action(ctx: ParserRuleContext):void {
	if (this.stk.top().bit['responses'] === undefined)
	    this.stk.top().bit['responses'] = [];
	this.stk.top().bit['responses'].push({ "response": "", "reaction": "", "item": "", "feedback": "" });
	this.curr_bit_stk.push('bot_action');  // push a marker.
    };
    exitBot_action(ctx: ParserRuleContext):void {
	this.curr_bit_stk.pop();
    };
    enterFeedback(ctx: ParserRuleContext):void {
	if (this.curr_bit_stk.top() === 'bot_action') {
	    let code:string = this.but.getstring_insidenl(ctx);
	    let l:number = this.stk.top().bit['responses'].length;
	    this.stk.top().bit['responses'][l-1].feedback = code.trim();
	    // remove from the body
	    (this.stk.top()).bit['body'] = (this.stk.top()).bit['body'].split(code).join('');
	}
    };
    exitFooter(ctx: ParserRuleContext):void {
	let code:string = this.but.getcode(ctx);
	this.stk.top().bit['footer'] = code.trim();
	(this.stk.top()).bit['body'] = (this.stk.top()).bit['body'].split(code).join('');
    };


    // new 02/07/22
    enterNote(ctx: ParserRuleContext):void { this.push_tmpl(ctx, 'note'); };
    enterRemark(ctx: ParserRuleContext):void { this.push_tmpl(ctx, 'remark'); };
    enterHelp(ctx: ParserRuleContext):void { this.push_tmpl(ctx, 'help'); };
    enterInfo(ctx: ParserRuleContext):void { this.push_tmpl(ctx, 'info'); };
    enterWarning(ctx: ParserRuleContext):void { this.push_tmpl(ctx, 'warning');};
    enterDanger(ctx: ParserRuleContext):void { this.push_tmpl(ctx, 'danger');};
    enterBug(ctx: ParserRuleContext):void { this.push_tmpl(ctx, 'bug');};
    enterSidenote(ctx: ParserRuleContext){this.push_tmpl(ctx, 'side-note');};
    enterStickynote(ctx: ParserRuleContext):void { this.push_tmpl(ctx, 'sticky-note');};
    enterQuote(ctx: ParserRuleContext):void { this.push_tmpl(ctx, 'quote');};
    enterFootnote(ctx: ParserRuleContext){this.push_tmpl(ctx, 'foot-note');};
    enterHintbit(ctx: ParserRuleContext):void { this.push_tmpl(ctx, 'hint');};
    enterExamplebit(ctx: ParserRuleContext){this.push_tmpl(ctx, 'example');};
    enterVendor_padlet_embed(ctx: ParserRuleContext):void { this.push_tmpl(ctx, 'vendor-padlet-embed');};
    enterScorm(ctx: ParserRuleContext){this.push_tmpl(ctx, 'scorm');};

    enterBit_image(ctx: ParserRuleContext):void { this.push_tmpl(ctx, 'image'); }
    enterBit_imageLink(ctx: ParserRuleContext):void { this.push_tmpl(ctx, 'image-link'); }
    enterBit_imageZoom(ctx: ParserRuleContext):void { this.push_tmpl(ctx, 'image-zoom'); }
    enterBit_imagePrototype(ctx: ParserRuleContext):void { this.push_tmpl(ctx, 'image-prototype'); }
    enterBit_imageSuperWide(ctx: ParserRuleContext):void { this.push_tmpl(ctx, 'image-super-wide'); }
    enterBit_audio(ctx: ParserRuleContext):void { this.push_tmpl(ctx, 'audio'); }
    enterBit_audioLink(ctx: ParserRuleContext):void { this.push_tmpl(ctx, 'audio-link'); }
    enterBit_audioEmbed(ctx: ParserRuleContext):void { this.push_tmpl(ctx, 'audio-embed'); }
    enterBit_video(ctx: ParserRuleContext):void { this.push_tmpl(ctx, 'video'); }
    enterBit_videoLink(ctx: ParserRuleContext):void { this.push_tmpl(ctx, 'video-link'); }
    enterBit_videoEmbed(ctx: ParserRuleContext):void { this.push_tmpl(ctx, 'video-embed'); }
    enterBit_videoPortrait(ctx: ParserRuleContext):void { this.push_tmpl(ctx, 'video-portrait'); }
    enterBit_videoLandscape(ctx: ParserRuleContext):void { this.push_tmpl(ctx, 'video-landscape'); }
    enterBit_stillImageFilm(ctx: ParserRuleContext):void {
	this.push_tmpl(ctx, 'still-image-film'); }
    enterBit_stillImageFilmLink(ctx: ParserRuleContext):void {
	this.push_tmpl(ctx, 'still-image-film-link'); }
    enterBit_stillImageFilmEmbed(ctx: ParserRuleContext):void { this.push_tmpl(ctx, 'still-image-film-embed'); }
    enterBit_websiteLink(ctx: ParserRuleContext):void { this.push_tmpl(ctx, 'website-link'); }
    enterBit_document(ctx: ParserRuleContext):void { this.push_tmpl(ctx, 'document'); }
    enterBit_documentLink(ctx: ParserRuleContext):void { this.push_tmpl(ctx, 'document-link'); }
    enterBit_documentEmbed(ctx: ParserRuleContext):void { this.push_tmpl(ctx, 'document-embed'); }
    enterBit_documentDownload(ctx: ParserRuleContext):void { this.push_tmpl(ctx, 'document-download'); }
    enterBit_appLink(ctx: ParserRuleContext):void { this.push_tmpl(ctx, 'app-link'); }
    enterBit_editorial(ctx: ParserRuleContext):void { this.push_tmpl(ctx, 'editorial'); }

    enterBook_frontispiece(ctx: ParserRuleContext):void { this.push_tmpl(ctx, 'book-frontispiece'); }
    enterBook_title(ctx: ParserRuleContext):void { this.push_tmpl(ctx, 'book-title'); }
    enterBook_copyright(ctx: ParserRuleContext):void { this.push_tmpl(ctx, 'book-copyright'); }
    enterBook_dedication(ctx: ParserRuleContext):void { this.push_tmpl(ctx, 'book-dedication'); }
    enterBook_forword(ctx: ParserRuleContext):void { this.push_tmpl(ctx, 'book-foreword'); }
    enterBook_preface(ctx: ParserRuleContext):void { this.push_tmpl(ctx, 'book-preface'); }
    enterBook_prologue(ctx: ParserRuleContext):void { this.push_tmpl(ctx, 'book-prologue'); }
    enterBook_epilogue(ctx: ParserRuleContext):void { this.push_tmpl(ctx, 'book-epilogue'); }
    enterBook_introduction(ctx: ParserRuleContext):void { this.push_tmpl(ctx, 'book-introduction'); }
    enterBook_inciting_incident(ctx: ParserRuleContext):void { this.push_tmpl(ctx, 'book-inciting-incident'); }
    enterBook_conclusion(ctx: ParserRuleContext):void { this.push_tmpl(ctx, 'book-conclusion'); }
    enterBook_afterword(ctx: ParserRuleContext):void { this.push_tmpl(ctx, 'book-afterword'); }
    enterBook_postscript(ctx: ParserRuleContext):void { this.push_tmpl(ctx, 'book-postscript'); }
    enterBook_appendix(ctx: ParserRuleContext):void { this.push_tmpl(ctx, 'book-appendix'); }
    enterBook_addendum(ctx: ParserRuleContext):void { this.push_tmpl(ctx, 'book-addendum'); }
    enterBook_acknowledgments(ctx: ParserRuleContext):void { this.push_tmpl(ctx, 'book-acknowledgments'); }
    enterBook_list_of_contributors(ctx: ParserRuleContext):void { this.push_tmpl(ctx, 'book-list-of-contributors'); }
    enterBook_bibliography(ctx: ParserRuleContext):void { this.push_tmpl(ctx, 'book-bibliography'); }
    enterBook_reference_list(ctx: ParserRuleContext):void { this.push_tmpl(ctx, 'book-reference-list'); }
    enterBook_endnotes(ctx: ParserRuleContext):void { this.push_tmpl(ctx, 'book-endnotes'); }
    enterBook_notes(ctx: ParserRuleContext):void { this.push_tmpl(ctx, 'book-notes'); }
    enterBook_copyright_permissions(ctx: ParserRuleContext):void { this.push_tmpl(ctx, 'book-copyright-permissions'); }
    enterBook_teaser(ctx: ParserRuleContext):void { this.push_tmpl(ctx, 'book-teaser'); }
    enterBook_auther_bio(ctx: ParserRuleContext):void { this.push_tmpl(ctx, 'book-author-bio'); }
    enterBook_request_for_a_book_review(ctx: ParserRuleContext):void { this.push_tmpl(ctx, 'book-request-for-a-book-review'); }
    enterBook_coming_soon(ctx: ParserRuleContext):void { this.push_tmpl(ctx, 'book-coming-soon'); }
    enterBook_read_more(ctx: ParserRuleContext):void { this.push_tmpl(ctx, 'book-read-more'); }
    enterBook_summary(ctx: ParserRuleContext):void { this.push_tmpl(ctx, 'book-summary'); }
    enterBook_epigraph(ctx: ParserRuleContext):void { this.push_tmpl(ctx, 'book-epigraph'); }

    enterCode(ctx: ParserRuleContext):void { this.push_tmpl(ctx, 'code'); }
    enterCard1(ctx: ParserRuleContext):void { this.push_tmpl(ctx, 'card-1'); }
    enterQuestion1(ctx: ParserRuleContext):void { this.push_tmpl(ctx, 'question-1'); }
    //
    enterScreenshot(ctx: ParserRuleContext):void { this.push_tmpl(ctx, 'screenshot'); }
    enterFocus_image(ctx: ParserRuleContext):void { this.push_tmpl(ctx, 'focus-image'); }
    enterPhoto(ctx: ParserRuleContext):void { this.push_tmpl(ctx, 'photo'); }
    enterBrowser_image(ctx: ParserRuleContext):void { this.push_tmpl(ctx, 'browser-image'); };

    enterChapter_subject_matter(ctx: ParserRuleContext):void { this.push_tmpl(ctx, 'chapter-subject-matter'); };
    enterRelease_note(ctx: ParserRuleContext):void { this.push_tmpl(ctx, 'release-note'); };
    enterConclusion(ctx: ParserRuleContext):void { this.push_tmpl(ctx, 'conclusion'); };
    enterFeatured(ctx: ParserRuleContext):void { this.push_tmpl(ctx, 'featured'); };

    enterVendor_amcharts_5_chart(ctx: ParserRuleContext):void {
	// restype is an array.
	let restype:string[] = this.push_tmpl(ctx, 'vendor-amcharts-5-chart');

	if (restype.length===0) {   // bitmark-- will never appear as format.
	    // the default is not bitmark--
	    this.stk.top().bit.format = 'json';
	}
	if (this.stk.top().bit.format === 'json') {
	    try {
		let json:string = this.but.extract_json(this.stk.top().bit['body']);
		// Unescaepe []. See escape_json_for_json_bits(text) in index.js.
		let json_repl:string = json.replace(/&#91;/g, '[');
		json_repl = json_repl.replace(/&#93;/g, ']');
		// Parse to validate.
		JSON.parse(json_repl);
	    }
	    catch (err) {
		// invalid json. Add error.
		this.error_listener.manualError(ctx, ctx._start.line-1, 0, 'JSON error: invalid JSON text');
	    }
	}
    };

    enterNewspaper_article(ctx: ParserRuleContext):void { this.push_tmpl(ctx, 'newspaper-article'); };
    enterBlog_article(ctx: ParserRuleContext):void { this.push_tmpl(ctx, 'blog-article'); };
    enterBook_article(ctx: ParserRuleContext):void { this.push_tmpl(ctx, 'book-article'); };
    enterNotebook_article(ctx: ParserRuleContext):void { this.push_tmpl(ctx, 'notebook-article'); };
    enterWorkbook_article(ctx: ParserRuleContext):void { this.push_tmpl(ctx, 'workbook-article'); };


    enterConversation_left_1(ctx: ParserRuleContext):void { this.push_tmpl(ctx, 'conversation-left-1'); }
    enterConversation_right_1(ctx: ParserRuleContext):void { this.push_tmpl(ctx, 'conversation-right-1'); }
    enterConversation_left_1_thought(ctx: ParserRuleContext):void { this.push_tmpl(ctx, 'conversation-left-1-thought'); }
    enterConversation_right_1_thought(ctx: ParserRuleContext):void { this.push_tmpl(ctx, 'conversation-right-1-thought'); }
    enterConversation_left_1_scream(ctx: ParserRuleContext):void { this.push_tmpl(ctx, 'conversation-left-1-scream'); }
    enterConversation_right_1_scream(ctx: ParserRuleContext):void { this.push_tmpl(ctx, 'conversation-right-1-scream'); }

    enterMenu_3_course(ctx: ParserRuleContext):void {
	this.push_tmpl(ctx, 'menu-3-course');
	this.stk.top().bit['menu'] = [];
	for (let i=0; i<3; i++)
	    this.stk.top().bit['menu'].push(R_clone(JSON_BIT_TEMPLATES.MenuItem));  
	// init static menu order number
	//if ( typeof this.enterMenu_text.mi == 'undefined')
	this.enterMenu_text['mi'] = 0;
    };
    exitMenu_3_course(ctx: ParserRuleContext):void {
	this.stk.top().bit['body'] = this.stk.top().bit['body'].replace(/\n*===\n*/g, '');
    };
    //enterMenu_list(ctx) {};
    //exitMenu_list(ctx) {};

    enterMenu_text(ctx: ParserRuleContext):void {
	const MENUITEMS = ["appetizer", "mainCourse", "dessert"];
	let t = MENUITEMS[this.enterMenu_text['mi']];  // set default
	let slot = this.stk.top().bit['menu'][this.enterMenu_text['mi']];
	//this.stk.top().bit['menu'][this.enterMenu_text['mi']]['type'] = t;  // set default type
	slot['type'] = t;  // set default type
	
	// key-val store function
	const fn:any = (code:string, key:string, val:string) => {
	    //console.log(`key=${key} val=${val}`);
	    const MENUITEMS = ["appetizer", "mainCourse", "dessert"];
	    let slot = this.curr_bit_stk.third();
	    slot[key] = val;
	    (this.stk.top()).bit['body'] = (this.stk.top()).bit['body'].replace(code,'');      
	};
	this.curr_bit_stk.push(slot);
	this.curr_bit_stk.push(fn);
	this.curr_bit_stk.push('menu');  // push a marker.  
    };

    exitMenu_text(ctx: ParserRuleContext):void {
	let code:string = this.but.getcode(ctx);
	// When an entry is emply, the parser captures \n===\n + entry to the next slot.
	// This is not a full solution to it but at least \n===\n in the data
	code = code.replace(/\n*===\n*/g, '');
	let slot = this.stk.top().bit['menu'][this.enterMenu_text['mi']];
	code = code.replace(/\[.*?\]/g, '').trim();
	slot['course'] = code;
	
	this.enterMenu_text['mi']++;
	(this.stk.top()).bit['body'] = (this.stk.top()).bit['body'].replace(code,'');

	this.curr_bit_stk.pop();  // menu
	this.curr_bit_stk.pop();  // fn
	this.curr_bit_stk.pop();  // slot
    };
    
    exitAnchor(ctx: ParserRuleContext):void {
	let code:string = this.but.getcode(ctx);
	let re:RegExp = /\[▼(([^\]]|[\s])*)\]/s;  // accepts newline
	let val:string = this.but.get_bit_value(re, code);
	let slot:string = 'anchor';  // default key
	this.stk.top().bit[slot] = val;
	(this.stk.top()).bit['body'] = (this.stk.top()).bit['body'].replace(code,'');
    };

}

/*export {BitmarkListener};*/
export {BitmarkListener};

