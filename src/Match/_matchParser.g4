/*
  match grammar
   last update  Aug 24, 2021 by Yoshi Noda

*/

parser grammar matchParser;

options { tokenVocab = matchLexer; }


bitmark: ( bitmark_ ( S* NL)* )+ EOF ;

bitmark_:
	matches
;

matches:
	  match_
	| match_matrix	   // added Sep 2,2020
	| match_all	   // added July 31
	| match_all_reverse // added July 31
	| match_reverse    // added June 7
	| match_picture	   // added June 7
	| match_audio	   // added June 7
	| match_solution_grouped
;


match_:
     BitMatch format CL NL+ ( bitElem NL* )*
        ( (HSPL NL) pair_heading )? pairs 
        NL* ( resource (NL* resource)* )?
;
match_matrix:
     BitMatchmatrix format CL NL+ ( bitElem NL* )*
        ( (HSPL NL) pair_heading_multi )? pair_multivals 
	NL* ( resource (NL* resource)* )?
;
match_solution_grouped:
     BitMatchsolgrp format CL NL+ ( bitElem NL* )*
        ( (HSPL NL) pair_heading )? pairs
        NL* ( resource (NL* resource)* )?
;
match_reverse:
     BitMatchrev format CL NL+ ( bitElem NL* )*
        ( (HSPL NL) pair_heading )? pairs 
        NL* ( resource (NL* resource)* )?
;
// An alias of match-reverse 
match_all_reverse:
     BitMatchallrev format CL NL+ ( bitElem NL* )*
        ( (HSPL NL) pair_heading )? pairs 
        NL* ( resource (NL* resource)* )?
;
match_picture:
     BitMatchpic format CL NL+ ( bitElem NL* )*
        ( (HSPL NL) pair_heading )? pair_images 
        NL* ( resource (NL* resource)* )?
;
match_audio:
     BitMatchaudio format CL NL+ ( bitElem NL* )*
        ( (HSPL NL) pair_heading )? pair_audios
        NL* ( resource (NL* resource)* )?
;
match_all:
     BitMatchall format CL NL+ ( bitElem NL* )*
        ( (HSPL NL) pair_heading )? pairs
        NL* ( resource (NL* resource)* )?
;

// remove emphasis_ 12/3/2021
bitElem:
     NOTBITMARK
   | list_line
   | dclines
   | colcoltext
   | gap
   | atdef
   | dollarans
   | reference 
   | item
   | instruction 
   | hint
   | s_and_w
   | example
   | bool_label
   | imagebit 
   | audiobit 
   | videobit 
   | articlebit | documentbit | appbit | websitebit
   | stillimagefilmbit  // added 8/18/2021
   | angleref    // [►]
   | anchor       // [▼]
   | bracketed_text   // added 1/21/2020
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

// Jan 21, 2020
// bracketed_text: BracEnclose s_and_w? ( s_and_w ( NL S* )* NL* )* CL ;

// multiline example
ml_example:
    AtExamplecol (NL? lines NL?)? CL ;  // Now working!!!!!

longans:   AtLonganswer ;
shortans:  AtShortanswer ;

resource:
     bitElem
;

pair_heading: key_title (NL* EQ NL*) value_title NL;

pair_heading_multi:
       key_title ( (NL+ EQ NL*) value_title_multi )+ NL
;

key_title:   OPHASH s_and_w? CL  ;
value_title: OPHASH s_and_w* CL  ;
value_title_multi: OPHASH s_and_w* CL  ;

// PAIRS
pairs:     HSPL NL pqpair+ ;

pqpair:    pquery (NL EQ NL) panswer (or_ panswer )* (NL* HSPL NL*)
	 | pquery (NL EQ NL*) (HSPL NL*)                   // No answer
	 | (NL* EQ NL*) (NL EQ NL) panswer (NL* HSPL NL*)  // no query
;

pquery:	 pquery__ ( pquery__ )* 
         | /*nil*/
;
pquery__:
	  NL* S* (item | s_and_w | COLON)+ ( S* (example) )? (longans|shortans|tense)?
	| NL* instruction
;


tense: TENSE ;

panswer: panswer__ (longans|shortans|example)? ;
//
panswer__:
          example? item? (s_and_w|NL|S|OP|CL|DBLCOLON)+ ( S* example )?
	| /* nil */
        | example s_and_w?
	| s_and_w NL? (example | hint | instruction)*
	| s_and_w NL instruction
        | instruction? opdoll ( s_and_w|NL|DOT|COLON )+ CL ( example )?
	| instruction s_and_w ( example )?
;

pair_images: HSPL NL pair_image+  ;
pair_image:  pimagebit (NL EQ NL) panswer (NL* HSPL NL*) ;

pair_audios: HSPL NL pair_audio+ ;
pair_audio:  paudiobit (NL EQ NL) panswer (NL* HSPL NL*) ;

// New 9/2/202
pair_multivals: HSPL NL pair_multival+ ;
pair_multival:  mpquery ((NL EQ NL) mpanswer )+ (NL* HSPL NL*) ;

pairmultival_image: ( HSPL imagebit EQ mpanswer ( EQ mpanswer )* ) ;
pairmultival_audio:  ( HSPL audiobit EQ mpanswer ( EQ mpanswer )* )+ ;


mpquery:  mpquery__ ( NL mpquery__ )* ;
mpquery__:
	  NL* (item | s_and_w |COLON)+ ( example )?
	| NL* LIST_LINE
;

mpanswer: mpanswer__ (longans|shortans)? ( (or_ | NL) mpanswer__ (longans|shortans)? )* ;
mpanswer__:
          example? item? (s_and_w|NL|S|OP|CL|DBLCOLON)+ ( S* example )?
        | instruction? opdoll ( s_and_w|NL|DOT|COLON )+ CL ( example )?
	| instruction s_and_w ( example )?
	| /* nil */
        | example s_and_w?
	| s_and_w NL? (example | hint | instruction)*
	| s_and_w NL instruction
;

// These has its own listener functions
pimagebit: pimage_one ( image_chained4match )* ( OPATALT words CL )? ( OpAtCaption .*? CL )?
;
pimage_one: image_one ;

paudiobit:  op_audio_format COLON url CL ( OPATALT words CL )? ;

bullet_item:
    OPBUL s_and_w CL ( atpoint )?
;

<<<<<<common<<<<<<

dcolon: DBLCOLON ;
colcoltext: dcolon STRING dcolon ~('::')+ dcolon ;


//
lines: 
  ( s_and_w NL? )+
;
list_line: LIST_LINE ;

s_and_w:  
	   STRING ( S+ NUMERIC )?  // string=STRING
	 | words ( S+ NUMERIC )?   // words=SENTENCE
	 | OPS s_and_w CL
	 | NUMERIC
	 | S* COLON S*
	 | AMP S*
	 | CL | DBLCOLON | LIST_LINE
	 | colcoltext
;
dclines: DCANY ;

opdoll:		OPDOLL ;
opu:		OPU ;
opb:		OPB ;
opq:		OPQ ;
opa:		OPA ;
opp:		OPP ;
opm:		OPM ;
ops:		OPS ;
opr:		OPR ;  // [*
opc:		OPC ;

clnsp:		CL ;  // without spaces
or_:		OR ;

// Removed STAR 12/3/2021 SENTENCE has a STAR in it
words:          ( SENTENCE
		| NOTBITMARK
		| BARSTRING | ELIPSIS
		| AMP | Greater ~(Greater) | Less ~(Less) 
		| RightArrow | RightAngle
		)+ ;


sp: 		S ;


// ---------END of grammar-------------------------------------------------------------
