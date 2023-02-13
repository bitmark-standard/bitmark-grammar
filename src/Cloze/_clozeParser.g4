/*
  Cloze grammar
     Aug 28, 2020  by Yoshi Noda

*/

parser grammar clozeParser;

options { tokenVocab = clozeLexer; }


bitmark: ( bitmark_ ( S* nl)* )+ EOF ;

bitmark_:
	clozes
;

clozes:
	  cloze
	| cloze_instruction_grouped
	| cloze_solution_grouped
	| cloze_and_multiple_choice_text
;

bitElem:
     LIST_LINE
   | dclines  // Added 12/18/2020
   | gap
   | atdef
   | reference
   | item
   | instruction
   | hint
   | s_and_w 
   | example
   | bool_label
   | imagebit nl*
   | audiobit nl*
   | videobit nl*
   | articlebit
   | documentbit
   | appbit
   | websitebit
   | stillimagefilmbit  // added 8/18/2021
   | angleref     // [►]
   | anchor       // [▼]
   | sp		// cuts the chained bits
;

resource:
     bitElem 
;


//
// [.cloze] This sentence is a [_cloze][_gap text][!noun] with [_2][?1 or 2]
//    gaps including an instruction for the first and a hint for the second gap.
//
cloze:
     BitCloze format          CL nl* ( bitElem nl* )+ NL* ( resource (NL* resource)* )?
//    |BitCloze format_nullable CL nl* ( bitElem nl* )+ NL* ( resource (NL* resource)* )?
;
// 
cloze_instruction_grouped:
    BitClozeinstgrp format CL nl?
        ( item nl )? ( instruction )? nl* ( (bitElem nl*) )*
	NL* ( resource (NL* resource)* )?
;
// 
cloze_solution_grouped:
    BitClozesolgrp format CL nl?
    	( item nl )? ( instruction )? nl* ( (bitElem nl*) )*
	NL* ( resource (NL* resource)* )? 
;

// [_string ( ' ' string )*]
// Chained bits following don't have the space between them.
gap:
    single_gap ( single_gap|instruction|hint|item|example )*
;

single_gap:
    OPU ( numeric | string | /*nil*/ ) s_and_w* clnsp
;

//
// [.cloze-and-multiple-choice-text]
// The students completed the [_cloze] with the correct verb [+forms][-formats].
// Level 0 test ok
cloze_and_multiple_choice_text:
    BitClozeandmulti format CL nl*
       ( bitElem nl* | headed_inline_choices nl* )+
       NL* ( resource (NL* resource)* )?
;

headed_inline_choices: choice_head? inline_choices ;
// ['complete][+d][-t]..
// Level 0 test ok
choice_head:
    OPS s_and_w CL
;
// No space(s) inbetween
inline_choices:
    ( choice_plus | choice_minus | choice_star )
       ( choice_plus | choice_minus | choice_star )*
;
// item=[%1] so forth
choice_plus:  item? OPP s_and_w+ CL ;  // [+
choice_minus: item? OPM s_and_w+ CL ;  // [-
choice_star:  item? OPR s_and_w+ CL ;  // [*

pimagebit:  image_one ( image_chained )* ( OPATALT words CL )? ;

<<<<<<common<<<<<<

lines: 
  ( s_and_w nl? )+
;

s_and_w:  
	   STRING ( S+ numeric )?  // string=STRING
	 | words ( S+ numeric )?   // words=SENTENCE
	 | OPS s_and_w CL
	 | NUMERIC
	 | S* COLON S*
	 | '&' S* | CL | OP_N_ETC
	 | DBLEQ  // Added Aug 28, 2020
 	 | URL
;
dclines: DCANY ;

opu:		OPU ;
opb:		OPB ;
opq:		OPQ ;
opa:		OPA ;
opp:		OPP ;
opm:		OPM ;
ops:		OPS ;
opr:		OPR ;  // [*
opc:		OPC ;

cl:		CL ;
clnsp:		CL ;  // without spaces
nl:		NL ;

listline_:	LIST_LINE ;

numeric:	NUMERIC ;
string:		STRING ;
words:          ( SENTENCE | AMP | Greater ~(Greater) | Less ~(Less) 
		| RightArrow | RightAngle
		)+ ;
sp: 		S ;


// ---------END of grammar-------------------------------------------------------------
