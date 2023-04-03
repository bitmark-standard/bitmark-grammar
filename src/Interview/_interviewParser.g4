/*
  interview grammar
     Sep 15, 2020  by Yoshi Noda

Issues:
1)   ':' '&' and ']' in word not accepted.

2) 

3) Bracket escaping = [] inside sentences
   e.g.* Ich habe die __(deutsche)__ Staatsbürgerschaft. Ich bin __(Deutsche[r]). __

4) It gets really slow to parse lines line this
  => Modified the grammar and now it is not that slow.

*/

parser grammar interviewParser;

options { tokenVocab = interviewLexer; }


bitmark: ( bitmark_ ( S* NL )* )+ NL* EOF ;

bitmark_:
	  interviews
;
interviews:
	  interview
	| interview_instruction_grouped
;

// Interview
interview:
    BitInterview format CL NL* ( bitElem NL* )*
           ( mcrsep NL* ( interview_qanda NL* )? )+ mcrsep_end NL*
	   ( interview_footer )?
;
//
interview_instruction_grouped:
    BitInterviewinstgrp format CL NL* ( bitElem NL* )*
           ( mcrsep ( interview_qanda NL* ) )* mcrsep_end NL*
	   ( interview_footer )?
;

mcrsep:     ((HSPL|HSPL2)| NL) ;
mcrsep_end: (HSPL|HSPL2) ;
mcrmisc:    interview_qanda NL ;

// QandA
interview_qanda:  interview_qanda__ ( NL+ interview_qanda__ )*  ;

interview_qanda__:
    item? interview_text S*
    (
        instruction | example | shortans | longans | dollarans | partans
        | single_gap  | mark_text  | hint | interview_sometext
    )*
    ( NL interview_answer? S* (example | shortans | longans | dollarans | partans)* )?
  | (
        instruction | example | shortans | longans | dollarans | partans
	| single_gap  | mark_text | hint | interview_sometext
    )+
    ( NL interview_answer? S* (example | shortans | longans | dollarans | partans)* )?
;
interview_sometext: s_and_w+ ;

//interview_text: (ALPHA CL)? ( words COLON? NL* )+
//		| LIST_LINE
//;

interview_text: (STRING CL)? ( words COLON? NL* )+
		| LIST_LINE
;



interview_answer: ( words COLON? )+ ;

longans:   AtLonganswer ;
shortans:  AtShortanswer ;

partans:   AtPartialAnswer | AtPartialAnswerS ;

mark_text: OPS .*? CL ;   // added sep 21

// s_and_w+ is to include & in the sentence
query:
      s_and_w+ ( AtExamplecl )?
;
answer:
      s_and_w+ ( OR s_and_w+ )? ( S* example )?
;
heading:
    key_title NL+ value_title
;
key_title:   OPHASH s_and_w+ CL  ;
value_title: OPHASH s_and_w+ CL  ;

// multiline example
ml_example:
      AtExamplecol (NL? lines NL?)? CL ;  // Now working!!!!!

//
bitElem:
     NOTBITMARK
   | item
   | atdef
   | reference 
   | title
   | instruction 
   | hint
   | gap
   | s_and_w 
   | example
   | bool_label
   | imagebit 
   | audiobit 
   | videobit 
   | articlebit | documentbit | appbit | websitebit
   | stillimagefilmbit  // added 8/18/2021
   | angleref      // [►]
   | anchor       // [▼]
   | sp		// cuts the chained bits
;

interview_footer: NL* footer_resource ( footer_resource )* NL* ;

footer_resource: ( footer_text | imagebit | audiobit | videobit
     | articlebit | documentbit | appbit | websitebit | reference | hint ) NL*
;
footer_text: (LIST_LINE | s_and_w)+  ;


// [_string ( ' ' string )*]
// Chained bits following don't have the space between them.
gap:
    single_gap ( single_gap|instruction|hint|item|example )*
;

single_gap:
    OPU ( NUMERIC | STRING | /*nil*/ ) s_and_w* clnsp
;
<<<<<<common<<<<<<


dcolon: DBLCOLON ;

//
lines: 
  ( s_and_w NL? )+
;

s_and_w: 
	   STRING ( S+ NUMERIC )?  // string=STRING
	 | words  ( S+ NUMERIC )?  // words=SENTENCE
	 | NUMERIC
	 | OPS s_and_w CL
	 | NL 
	 | S* COLON S*
	 | '&' S*
	 | DBLCOLON
	 | DBLEQ 
	 | URL
;

// Not sure what this is.
clnsp:		CL ;  // without spaces
sspl:		SSPL|SSPL2 ;

words: ( STRING
       | SENTENCE
       | NOTBITMARK
       | BARSTRING | AMP | Greater ~(Greater) | Less ~(Less)
       | RightArrow | RightAngle
       )+ ;

sp: 		S ;


// ---------END of grammar-------------------------------------------------------------