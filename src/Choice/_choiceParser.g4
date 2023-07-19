/*
  multi-choice grammar
     May 5, 2022 last update
     Yoshi Noda

*/

parser grammar choiceParser;

options { tokenVocab = choiceLexer; }


bitmark: ( bitmark_ ( S* NL )* )+ NL* EOF ;

bitmark_:
	  multi_choices
;

multi_choices:
	  multiple_choice
	| multiple_choice_1
	| multiple_response
	| multiple_response_1
	| multiple_choice_text
	| highlight_text
;
// multi choice sets
//
multiple_choice:
   BitMultichoice format CL NL* ( bitElem NL* )*
  |BitMultichoice format CL NL+ ( bitElem NL* )*
      ( NL* mcrsep ( NL* mcrmisc )? s_and_w? choices )+
      ((HSPL|HSPL2)|NL) ( bitElem NL )? NL* ( resource (NL* resource)* )?
;
// ===NL
mcrsep: ((HSPL|HSPL2)|NL) ;
mcrmisc: bitElem* NL  ;

// 1 choice set
// Level 0 test ok
multiple_choice_1:
   BitMultichoice1 format CL NL* ( bitElem NL* )*
  |BitMultichoice1 format CL NL+ ( bitElem NL* )* choices   
;

// 
multiple_response:
    BitMultiresp format CL NL* ( bitElem NL* )*
   |BitMultiresp format CL NL+ ( bitElem NL* )*
      ( NL* mcrsep ( NL* mcrmisc )? choices )+
      ((HSPL|HSPL2)|NL)? ( bitElem NL* )? NL* ( resource (NL* resource)* )?
;
// 
multiple_response_1:
    BitMultiresp1 format CL NL+ ( bitElem NL* )*
   |BitMultiresp1 format CL NL+ ( bitElem NL* )+ choices NL* ( resource (NL* resource)* )?
;

//
// [.multiple-choice-text]
// The students ['complete][+d][-t][-s] the [+cloze][-close][-cloth] with the correct verb forms.
//
//
multiple_choice_text:
   BitMultichoicetext format CL NL+  ( bitElem NL* )*
      multitxt_il_choice* NL*
      ( resource (NL* resource)* )?
;
multitxt_il_choice:
	( ( headed_inline_choices | (S* NL) | s_and_w | S+ )+  ) ;


// 4/5/2021 addition
highlight_text:
   BitHighlighttext format CL NL+  ( bitElem NL* )*
    highlight_il_choice* NL*
    ( resource (NL* resource)* )?
;
highlight_il_choice:
    ( ( highlight_inline_choices | (S* NL) | s_and_w | S+ )+ ) ;

//
bitElem:
     LIST_LINE
   | NOTBITMARK
   | dclines
   | gap
   | atdef
   | reference 
   | item
   | title
   | instruction 
   | hint
   | s_and_w 
   | example
   | bool_label
   | imagebit 
   | audiobit
   | videobit 
   | articlebit
   | documentbit
   | appbit
   | websitebit
   | stillimagefilmbit  // added 8/18/2021
   | angleref     // [►]
   | anchor       // [▼]
   | sp		// cuts the chained bits
;

// [_string ( ' ' string )*]
// Chained bits following don't have the space between them.
gap:
    single_gap ( single_gap|instruction|hint|item|example )*
;

single_gap:
    OPU ( NUMERIC | STRING | /*nil*/ ) s_and_w* clnsp
;

// There must be 2 choices at least
// No space in between.
choices:  ( cplus | cminus ) (NL? S* ( cplus | cminus ) )* ;

cplus:  choice_plus ( item | example | instruction | hint )*  ;
cminus: choice_minus ( item | example | instruction | hint )*  ;

// item=[%1] so forth
choice_plus:  item? OPP StrParen? (s_and_w|NL)+ CL ;  // [+
choice_minus: item? OPM StrParen? (s_and_w|NL)+ CL ;  // [-

// Inline -- NL not allowed. Added 6/12/21
il_choice_plus:  item? OPP StrParen? s_and_w CL ;  // [+
il_choice_minus: item? OPM StrParen? s_and_w CL ;  // [-

headed_inline_choices: choice_head? inline_choices il_follow* ;

highlight_inline_choices: choice_head? inline_choices  il_follow* ;

//
headed_choices: choice_head? choices ;

// ['complete][+d][-t]..
// Level 0 test ok
choice_head:
    OPS s_and_w CL
;
// No space(s) inbetween
inline_choices:
    ( il_choice_plus | il_choice_minus )
       ( il_choice_plus | il_choice_minus )*
;

// multiline example
ml_example:
    AtExamplecol ( NL? lines NL? )? CL ;  // Now working!!!!!

// For inline text for multi-choice-text
il_follow:
      example
    | OPQ ~( CL )+ CL      // hint
;

longans:   AtLonganswer ;
shortans:  AtShortanswer ;

resource:
     bitElem
;

bullet_item:
    OPBUL s_and_w CL ( atpoint )?
;

// Import the common part
<<<<<<common<<<<<<


dclines: DCANY ;

//
lines: 
  ( s_and_w NL? )+
;

s_and_w:  
	   STRING ( S+ NUMERIC )?  // string=STRING
	 | words ( S+ NUMERIC )?   // words=SENTENCE
	 | NUMERIC
	 | S* COLON S*
	 | '&' S* | DBLEQ 
	 | URL
;

clnsp:		CL ;  // without spaces
sspl:		SSPL|SSPL2 ;

words:          ( SENTENCE
		| BARSTRING
		| NOTBITMARK | ELIPSIS
		| AMP | Greater ~(Greater) | Less ~(Less) 
		| RightArrow | RightAngle
		)+ ;
sp: 		S ;


// ---------END of grammar-------------------------------------------------------------
