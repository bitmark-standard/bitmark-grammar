/*
  chat grammar
     Sep 16, 2020  by Yoshi Noda

Issues:
1)   ':' '&' and ']' in word not accepted.

2) 

3) Bracket escaping = [] inside sentences
   e.g.* Ich habe die __(deutsche)__ Staatsbürgerschaft. Ich bin __(Deutsche[r]). __

4) It gets really slow to parse lines line this
  => Modified the grammar and now it is not that slow.

*/
parser grammar chatParser;

options { tokenVocab = chatLexer; }


bitmark: ( bitmark_ ( S* NL )* )+ NL* EOF ;

bitmark_:
	  chat
        | conversation
;
// Also conversation
chat:
    BitChat format CL NL* ( bitElem NL* )*
        (HSPL|HSPL2) initiator (HSPL|HSPL2) partner
        ( (HSPL|HSPL2) chat_initiator ( sspl_chat_partner )* )+ (HSPL|HSPL2)
	NL* ( resource (NL* resource)* )?
;
conversation:
    BitConv format CL NL* ( bitElem NL* )*
        (HSPL|HSPL2) initiator (HSPL|HSPL2) partner
        ( (HSPL|HSPL2) chat_initiator ( sspl_chat_partner )* )+ (HSPL|HSPL2)
	NL* ( resource (NL* resource)* )?
;
//
initiator:	name_text ( NL imagebit )? ;
partner:     	name_text ( NL imagebit )? ;
name_text:      OPHASH s_and_w CL ;
chat_initiator: s_and_w ;
chat_partner:   s_and_w ;
sspl_chat_partner: sspl chat_partner ;

//
bitElem:
     LIST_LINE
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

resource:
     bitElem
;

// [_string ( ' ' string )*]
// Chained bits following don't have the space between them.
gap:
    single_gap ( single_gap|instruction|hint|item|example )*
;

single_gap:
    OPU ( NUMERIC | STRING | /*nil*/ ) s_and_w* clnsp
;

dcolon: DBLCOLON ;

<<<<<<common<<<<<<

//
lines: 
  ( s_and_w NL? )+
;

s_and_w:  
	   STRING ( S+ NUMERIC )?  // string=STRING
	 | words ( S+ NUMERIC )?   // words=SENTENCE
	 | OPS s_and_w CL
	 | NUMERIC
	 | S* COLON S*
	 | '&' S* | DBLCOLON | DBLEQ
	 | URL
;

bracket_escaped:
    OPESC  s_and_w CL
;

clnsp:		CL ;  // without spaces
sspl:		SSPL|SSPL2 ;

words:          ( SENTENCE | AMP | Greater ~(Greater) | Less ~(Less)
		| DBLEQ | RightArrow | RightAngle )+ ;

sp: 		S ;


// ---------END of grammar-------------------------------------------------------------
