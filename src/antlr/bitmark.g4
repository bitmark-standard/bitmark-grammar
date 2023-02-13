/*
  Bitbook grammar
     June 18, 2020  by Yoshi Noda

Issues:
1)   ':' '&' and ']' in word not accepted.

2) 

3) Bracket escaping = [] inside sentences
   e.g.* Ich habe die __(deutsche)__ Staatsbürgerschaft. Ich bin __(Deutsche[r]). __

4) It gets really slow to parse lines line this
  => Modified the grammar and now it is not that slow.

*/

grammar bitmark;

bitmark: ( bitmark_ ( sp? nl)* )+ EOF ;

bitmark_:
	  bit  | emoji
	| lines
;

bit:
	  book | chapter
	| summary
	| bit_alias
	| internal_link
	| anchor
	| group_born | group_died
	| cloze
	| cloze_instruction_grouped
	| cloze_solution_grouped
	| cloze_and_multiple_choice_text
	| multiple_choice
	| multiple_choice_1
	| multiple_choice_text
	| multiple_response
	| multiple_response_1
	| essay
	| interview
	| interview_instruction_grouped
	| match_
	| match_reverse    // added June 7
	| match_picture	   // added June 7
	| match_audio	   // added June 7
	| match_solution_grouped
	| true_false_1
	| true_false
	| sequence
	| correction
	| mark_
	| document_upload
	| take_picture
	| record_audio
	| preparation_note
	| assignment
	| article
	| article_attachment
	| flashcard
	| flashcard_1
	| chat | conversation
	| bot_interview
	| self_assessment
	| rating | survey | survey_1 | survey_anonymous | survey_anonymous_1
	| hint
;
//
book:
    opd 'book' ( ':collection' | ':book' )? sp? cl nl* title_etc
;

chapter:
    opd 'chapter' ( ':' string )? sp? cl title_etc
;
title:  '[#' s_and_w+ cl  ;
subtitle: '[##' s_and_w+ cl ;

progress:
    opa 'progress:' s_and_w  cl
;
toc:
    opa 'toc:' s_and_w cl
;
summary:
    opd 'summary' sp? cl nl* title_etc
;
internal_link:
    opd 'internal-link' cl ( nl* bitElem )*
;
bit_alias:  // e.g. [.bit-alias][►com.firstpub.09823409h44]
    opd 'bit-alias' cl alias
;

//
title_etc:
  ( nl? ( title | subtitle | atdef | item | instruction
         | alias | anchor | progress | toc ) nl )* 
;
group_born:  // [.group*][*wtf]
     opd 'group*' cl ( opr s_and_w cl ) nl
;
group_died: // [.group†][*wtf]
     opd 'group†' cl ( opr s_and_w cl ) nl
;

//
// [.cloze] This sentence is a [_cloze][_gap text][!noun] with [_2][?1 or 2]
//    gaps including an instruction for the first and a hint for the second gap.
//
cloze:
    opd cloze_ format cl nl* ( bitElem nl* )+
;
//
bitElem:
     titlestar_ | note_ | remark_ | help_ | highlight_
   | annotate_ | annotate_image_ | ins_ | del_ | listline_
   | gap
   | atdef
   | item
   | instruction
   | hint
   | s_and_w 
   | example
   | imagebit nl*
   | audiobit nl*
   | videobit nl*
   | articlebit | documentbit | appbit
   | alias     // [►]
   | sp		// cuts the chained bits
///   | sp? nl
;
// 
cloze_instruction_grouped:
    opd 'cloze-instruction-grouped' format cl nl?
        ( item nl )? ( instruction )? nl* ( (bitElem nl*) )*
;
// 
cloze_solution_grouped:
    opd 'cloze-solution-grouped' format cl nl?
    	( item nl )? ( instruction )? nl* ( (bitElem nl*) )*
;

// [_string ( ' ' string )*]
// Chained bits following don't have the space between them.
gap:
////    single_gap ( single_gap )* ( instruction|hint|example )*
    single_gap ( single_gap|instruction|hint|example )*
;

single_gap:
    opu sp? ( numeric | string | cloze_ | /*nil*/ ) s_and_w* clnsp
;

// Instruction
instruction:
    opb s_and_w? ( s_and_w ( nl sp )* nl* )* cl
;
// Hint
hint:
    opq (sp? nl)* ( s_and_w | ':' | sp? nl )+  cl ( sp? nl )*
;

// There must be 2 choices at least
// No space in between.
choices:
    ( choice_plus | choice_minus | choice_star )
         (nl? ( choice_plus | choice_minus | choice_star | example ) )*
;
choice_plus:  opp s_and_w+ cl ;  // [+
choice_minus: opm s_and_w+ cl ;  // [-
choice_star:  opr s_and_w+ cl ;  // [*

// 1 choice set
// Level 0 test ok
multiple_choice_1:
   opd 'multiple-choice-1' format cl nl ( bitElem nl* )* choices 
;

// multi choise sets
//
multiple_choice:
   opd 'multiple-choice' format cl nl ( bitElem nl? )+
      ( (hspl|nl)? ( instruction nl )? choices )+ (hspl|nl) ( bitElem nl )?
;
// 
multiple_response_1:
    opd 'multiple-response-1' format cl nl ( bitElem nl? )+
    	choices
;

// 
multiple_response:
    opd 'multiple-response' format cl nl ( bitElem nl* )+ 
      ( (hspl|nl)? ( instruction nl )? choices nl* )+ (hspl|nl)? ( bitElem nl )?
;

//
// [.multiple-choice-text]
// The students ['complete][+d][-t][-s] the [+cloze][-close][-cloth] with the correct verb forms.
//
//
multiple_choice_text:
  opd 'multiple-choice-text' format cl nl  ( bitElem nl* )+
      ( ( (sp? nl) | s_and_w | headed_inline_choices )+ )*
;
headed_inline_choices: choice_head? inline_choices ;
//
headed_choices: choice_head? choices ;

// ['complete][+d][-t]..
// Level 0 test ok
choice_head:
    ops s_and_w cl
;
// No space(s) inbetween
inline_choices:
    ( choice_plus | choice_minus | choice_star )
       ( choice_plus | choice_minus | choice_star )*
;
//
// [.cloze-and-multiple-choice-text]
// The students completed the [_cloze] with the correct verb [+forms][-formats].
// Level 0 test ok
cloze_and_multiple_choice_text:
    opd 'cloze-and-multiple-choice-text' format cl nl*
       ( bitElem nl* | inline_choices nl* )+
;
//
essay:
    opd 'essay' format cl nl ( bitElem nl* )*
     	 ( nl* ( ml_example | bitElem ) )* nl*
  | opd 'essay' '&article-attachment' format cl nl ( bitElem nl* )*
     	 article_attachment?
;
//
article_attachment:
    opd 'article-attachment' format cl nl ( ( bitElem | headed_choices ) nl* )*
	   nl+ ( words | headed_choices )*
;

// multiline example
ml_example:
    opa 'example:' nl? lines nl? cl ;  // Now working!!!!!

// Cloze does not allow line breaks in example solutions
// example:      opa 'example' cl ;
//
example:
      opa 'example' cl          // above will not work
    | opa 'example:' words cl
;
// Interview
interview:
    opd 'interview' format cl nl* ( bitElem nl* )*
           ( hspl ( nl* interview_answer nl* )* )* hspl 
;
interview_answer:
     ( bitElem | ml_example )+ ( shortans | longans )?
    | shortans
    | longans
;
longans:  opa 'longAnswer' cl ;
shortans: opa 'shortAnswer' cl ;


//
interview_instruction_grouped:
     opd 'interview-instruction-grouped' format cl nl+ instruction nl* ( hspl interview_answer )+ hspl
;
// s_and_w+ is to include & in the sentence
query:
      s_and_w+ ( opa 'example' cl )?
    | listline_
;
answer:
      s_and_w+ ( or s_and_w+ )? ( sp? example )?
    | listline_
;
heading:
    key_title eq value_title
;
key_title: '[#' s_and_w+ cl  ;
value_title: '[#' s_and_w+ cl  ;
// PAIRS
pair:        ( hspl pquery eq panswer ) ;
pairs:       pair+ ;
pair_image:  ( hspl pimagebit eq panswer ) ;
pair_images: pair_image+  ;
pair_audio:  ( hspl paudiobit eq panswer )+ ;
pair_audios: pair_audio+ ;

pquery:     item? s_and_w+ ( example )? | listline_ ;
panswer:    s_and_w+ ( or s_and_w+ )? ( sp? example )? | listline_ ; 
pimagebit:  op image_format resolution? '::' url cl ;
paudiobit:  op audio_format '::' url cl ;

// match eq='\n==\n'
match_:
     opd 'match' format cl nl ( bitElem nl? )*
        ( hspl heading )? pairs hspl nl* bitElem+?
;
// added June 7
match_reverse:
     opd 'match-reverse' format cl nl ( bitElem nl? )*
        ( hspl heading )? pairs hspl nl* bitElem+?
;
// added June 7
match_picture:
     opd 'match-picture' format cl nl ( bitElem nl? )*
        ( hspl heading )? pair_images hspl
;
// added June 7
match_audio:
     opd 'match-audio' format cl nl ( bitElem nl? )*
        ( hspl heading )? pair_audio hspl
;
//
match_solution_grouped:
     opd 'match-solution-grouped' format cl nl ( bitElem nl? )*
        ( hspl heading )? pairs hspl
;

//
true_false_1:
    opd 'true-false-1' format cl nl+ ( bool_label | bitElem nl? )* choices
;
true_false:
    opd 'true-false' format cl nl* hspl?
       ( bool_label | ( bitElem nl*) )* ( hspl? choices )+ hspl?
;
bool_label:
    opa ( 'label-true:' | 'label-false:' ) words cl
;
//
sequence:
    opd 'sequence' format cl nl* ( bitElem nl* )*
       ( sspl ( nl* (s_and_w|bitElem) )* )+ sspl
;
correction:
    opd 'correction' format cl nl instruction nl* choices nl+
;

// mark
mark_:
    opd 'mark' format cl nl (( bitElem | mark_text ) nl* )* 
;

// ['Diaz][@mark:red] 
mark_text:  ops s_and_w cl mark_color? ;
mark_color: opa 'mark' ':' string cl ;

//
document_upload:
    opd 'document-upload' ( ':' ( audio_type | image_type | video_type ) )?
    	cl nl ( bitElem nl* )*
;
//
take_picture:
    opd 'take-picture' format cl nl ( bitElem nl* )* 
;
//
record_audio:
    opd 'record-audio' format cl nl  ( bitElem nl* )* 
;
//
preparation_note:
    opd 'preparation-note' format cl nl* ( instruction nl )? lines?
;
//
assignment:
    opd 'assignment' format cl nl ( bitElem nl* )* lines?
;

flashcard_1:
    opd 'flashcard-1' format cl nl side eq side 
;
flashcard:
    opd 'flashcard'   format cl nl* hspl side eq side 
       	   ( hspl side eq side )* hspl
;

sidex: ( atdef | s_and_w | instruction | audiobit )+
;
side:   sidex ( or sidex )* 
;
// [@language:en]
atdef:  atdef_ ( atdef_ )*
;
// Chained atdef like [@age:1][@age:100],
// [@language:en][@language:jp][@language:cn]
atdef_: opa s_and_w ':' s_and_w ( nl s_and_w )* cl
;

//
article:
    opd 'article' format cl nl* ( bitElem nl* )+
;
//
chat:
    opd 'chat' format cl hspl initiator hspl partner
        ( hspl chat_initiator ( sspl chat_partner )* )+ hspl
;
initiator:   name_text ( nl imagebit )? ;
partner:     name_text ( nl imagebit )? ;
name_text:   '[#' s_and_w cl ;
chat_initiator: s_and_w ;
chat_partner:   s_and_w ;

conversation:
    opd 'conversation' format cl hspl initiator hspl partner
        ( hspl chat_initiator ( sspl chat_partner )* )+ hspl
;

bot_interview:
    opd 'bot-interview' format cl ( hspl bot_choice ( sspl bot_choice )* )+ hspl
;
bot_choice:
    ( words | instruction | audiobit | gap | choice_plus | choice_minus | choice_star )+
;

self_assessment:
    opd 'self-assessment' format cl nl* ( bitElem nl* )*
           ( hspl s_and_w ( nl bullet_item )+ )+ hspl
;
rating:
    opd 'rating' format cl nl* ( bitElem nl* )*
           ( hspl s_and_w ( nl bullet_item )+ )+ hspl
;
bullet_item:
    opbul s_and_w cl ( atpoint )?
;
// .survey, .survey-1, .survey-anonymous, .survey-anonymous-1
survey:
    opd 'survey' format cl nl* ( bitElem nl* )*
           ( hspl s_and_w ( nl bullet_item )+ )+ hspl
;
survey_1:
    opd 'survey-1' format cl nl* ( bitElem nl* )*
           ( hspl s_and_w ( nl bullet_item )+ )+ hspl
;
survey_anonymous:
    opd 'survey-anonymous' format cl nl* ( bitElem nl* )*
           ( hspl s_and_w ( nl bullet_item )+ )+ hspl
;
survey_anonymous_1:
    opd 'survey-anonymous-1' format cl nl* ( bitElem nl* )*
           ( hspl s_and_w ( nl bullet_item )+ )+ hspl
;




// [@point:number]
atpoint:
    opa 'points:' numeric cl
;

format:
    ( ':bitmark--' | ':bitmark++' | '&article' )*
       ( ':text' | image_format | audio_format | video_format | article_format )*
;
//
image_format:
    '&image' ( ':' image_type )?
  | '&image-online' ( ':' image_type )?
  | '&image-zoom' ( ':' image_type )?
;
image_type: 'basic' | 'jpg' | 'png' | 'gif' | 'svg' ;

/*
Resource
"image", "image-online", "image-zoom", "audio", "audio-online",
"video", "video-online", "article", "article-online",

"none", "document, "document-online", "app"
*/

//
audio_format:
    '&audio' ( ':' audio_type )? 
  | '&audio-online' ( ':' audio_type )? 
;
audio_type: 'basic' | 'mp3' | 'mp4' ;
//
video_format:
    '&video' ( ':' video_type )?
  | '&video-online' ( ':' video_type )?
;
video_type: 'mp4' | 'flv' | 'gif' | 'wmv' | 'mpeg' | 'mpg' | 'mp4' | 'mp2' ;
//
article_format:  '&article' | '&article-online' ;
document_format: '&document' | '&document-online' ;
app_format:      '&app' ;

// [&image:...]
imagebit:    op image_format resolution? '::' url cl ( NL opa 'showInIndex' cl )?
       		    ( opa 'alt:' words cl )?
;
audiobit:    op audio_format '::' url cl ( opa 'alt:' words cl )? ;
videobit:    op video_format '::' url cl ( opa 'alt:' words cl )? ;
articlebit:  op article_format '::' url cl ( opa 'alt:' words cl )? ;
documentbit: op document_format '::' url cl ( opa 'alt:' words cl )? ;
appbit:      op app_format '::' ( url | telephone ) cl ( opa 'alt:' words cl )? ;
telephone:   'tel:' '+' numeric ;

resolution:
    '.@' NUMERIC+ '::' ;

url:  'http://' words
    | 'https://' words
;
//
lines: 
  ( s_and_w nl? )+
;
// string words? ( sp numeric )?
s_and_w:  
	   string ( sp numeric )?
	 | words ( sp numeric )?
	 | numeric
	 | bracket_escaped
	 | ':' SP?
	 | '&' SP?
;

anchor:
    opdangle s_and_w? cl
;
// Not sure what this is.
alias:
    oprangle s_and_w? cl
;

item:   opc s_and_w cl 
;

bracket_escaped:
    opescape s_and_w cl
;


opbul:          OPBUL ;  
opescape:	OPESC ;
oprangle:       OPRANGLE ;  // right arrow
opdangle:       OPDANGLE ;  // dow arrow
opd:		OPD ;
opu:		OPU ;
opb:		OPB ;
opq:		OPQ ;
opa:		OPA ;
opp:		OPP ;
opm:		OPM ;
ops:		OPS ;
opr:		OPR ;  // [*
opc:		OPC ;

op:		OP ;
cl:		CL ;
clnsp:		CL ;  // without spaces
nl:		NL ;
or:		OR ;  // --
eq:		EQ|EQ2 ;  // ==
hspl:		HSPL|HSPL2 ;
sspl:		SSPL|SSPL2 ;

cloze_:		CLOZE ;
CLOZE:		'cloze' ;

//comment:	COMMENT ;   ///~('||')+ '||' sp nl  ;
titlestar_:	(EMP1|EMP2|EMP3) ;
ins_:		INS ;
del_:		DEL ;
note_:		NOTE ;
remark_:	REM ;
help_:		HELP ;
highlight_:	HIGH ;
annotate_:	ANNO ;
annotate_image_:ANNO_IM ;
listline_:	LIST_LINE ;

numeric:	NUMERIC ;
string:		STRING ;
emoji:		EMOJI+ ;
words:          SENTENCE ;
sp: 		SP ;

OPBUL:          '[•' ;      // Bullet
OPESC:          '[^' ;      // Escaped bracketted def
OPRANGLE:       '[►' SP? ;  // Right angle - internal link
OPDANGLE:       '[▼' SP? ;  // Down angle - Anchor
OPD:		'[.' SP? ;  // Dot
OPU:		'[_' SP? ;  // Underscore
OPB:		'[!' SP? ;  // Bang!
OPQ:		'[?' SP? ;  // Question
OPA:		'[@' SP? ;  // At
OPP:		'[+' SP? ;  // Plus
OPM:		'[-' SP? ;  // Minus
OPS:		'[\'' SP? ; // [' Single quote
OPR:		'[*' SP? ;  // [*
OPC:		'[%' SP? ;  // [% Item
OP:		'[' ;
CL:		']' ;

// Separators
EQ:	        '\n==' SP? '\n' ;
EQ2:	        '=='   SP? '\n' ;
OR:		'\n--' SP? '\n' ;
HSPL:		'\n===' SP? '\n'  ; // hard split
HSPL2:		'==='   SP? '\n'  ;   // hard split
SSPL:	  	'\n---' SP? '\n'  ; // soft split
SSPL2:	  	'---'   SP? '\n'  ; // soft split

// Supports emoji  i
//    [?@!=*+-/ \t$#;<>"'A-Za-z_0-9̈–•«»…„“”éóÜßäöüʌɪÄ|ˈ‘()
//    		\p{Emoji}\p{Block=Latin_1_Supplement}]
// sʌɪdlʌɪn
// Latin_1_Supplement=\u0080-\u00FF
// 

LIST_LINE:
/*
NOTE: For now we can't ascertain that these rules are preceded by a newline
as "_input" is undefined. Gotta resolve this issue to get this work.
    {_input.LA(1) == '\n'}? SP? [0-9]+ ('.'|')')? SP SENTENCE NL
  | {_input.LA(1) == '\n'}? SP? [A-Za-z]+ ('.'|')')? SP SENTENCE NL
  | {_input.LA(1) == '\n'}? SP? [*•●-] SP? SENTENCE NL
*/
    SP? '('? [0-9]+    ('.'|')') SP SENTENCE NL
  | SP? '('? [A-Za-z]+ ('.'|')') SP SENTENCE NL
  | SP? [*•●-]                   SP SENTENCE NL
;

EMP1:  '*' SP?    ~( '\n' )* ':'? SP? '*' NL;
EMP2:  '**' SP?   ~( '\n' )* ':'? SP? '**' NL;
EMP3:  '***' SP?  ~( '\n' )* ':'? SP? '***' NL;

NOTE: '>>' .*? '>>' ;
INS:  '++' .*? '++' ;
DEL:  '--' .*? '--' ;
REM:  '<<' .*? '<<' ;
HELP: '??' .*? '??' ;
HIGH: '!!' .*? '!!' ;

ANNO:    '==' STR_SP '==(' [!*+\-_?@▼] STR_SPX ')' '==' ;
ANNO_IM: '==' STR_SP '==(' '&image' STR_SPX ')' '==' ;

NUMERIC:  ('+'|'-')?[0-9]+ ;

STRING:  // sentence minus space
     STR | EMOJI
;
SP:	' '+  ; //[ \t]+ ;
NL:	'\n' ;

fragment
STR_SP: [ :0-9̈A-Za-z_"«»„“ʌɪˈ\p{Block=Latin_1_Supplement}]+ ;

fragment
STR_SPX: [ %?@!=*+-/:#$;<>'0-9̈A-Za-z_"«»„“ʌɪˈ\p{Block=Latin_1_Supplement}]+ ;

fragment
STR: [0-9̈A-Za-z_"«»„“ʌɪˈ\p{Block=Latin_1_Supplement}]+ ;


SENTENCE:
     [0-9A-Za-z_̈%?@!=*+-/ \t$#;<>"'–•●—«»…„“”ˈ‘’́ʌɪřłčě➔|()\p{Block=Latin_1_Supplement}]+
;

COMMENT:  '||' UTF8* '||' SP? '\n'+ ->skip;

fragment
UTF8:      [̈\u0000-\u00FF\u27CC]+ ;

EMOJI: [\p{Emoji}] ;


// ---------END of grammar-------------------------------------------------------------
/*
correction tag?????
*/
