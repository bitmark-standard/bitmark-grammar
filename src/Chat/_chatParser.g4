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
  	| conversation_left_1
	| conversation_right_1
	| conversation_right_1_thought
	| conversation_right_1_scream
	| conversation_left_1_thought
	| conversation_left_1_scream
;
// Also conversation
chat:
    BitChat format CL NL* ( bitElem NL* )*
   |BitChat format CL NL* ( bitElem NL* )*
        (HSPL|HSPL2) initiator (HSPL|HSPL2) partner
        ( (HSPL|HSPL2) chat_initiator ( sspl_chat_partner )* )+ (HSPL|HSPL2)
	NL* ( resource (NL* resource)* )?
;
conversation:
    BitConv format CL NL* ( bitElem NL* )*
   |BitConv format CL NL* ( bitElem NL* )*
        (HSPL|HSPL2) initiator (HSPL|HSPL2) partner
        ( (HSPL|HSPL2) chat_initiator ( sspl_chat_partner )* )+ (HSPL|HSPL2)
	NL* ( resource (NL* resource)* )?
;

conversation_left_1:
    BitConversationLeft1 format2 CL NL* ( bitElem NL* )* 
   |BitConversationLeft1 format2 CL NL* ( bitElem NL* )* partner1? NL* ( s_and_w NL* )+
;
conversation_right_1:
    BitConversationRight1 format2 CL NL* ( bitElem NL* )*
   |BitConversationRight1 format2 CL NL* ( bitElem NL* )* partner1? NL* ( s_and_w NL* )+
;
conversation_right_1_thought:
    BitConversationRight1Thought format2 CL NL* ( bitElem NL* )* 
   |BitConversationRight1Thought format2 CL NL* ( bitElem NL* )* partner1? NL* ( s_and_w NL* )+
;
conversation_right_1_scream: 
    BitConversationRight1Scream format2 CL NL* ( bitElem NL* )*
   |BitConversationRight1Scream format2 CL NL* ( bitElem NL* )* partner1? NL* ( s_and_w NL* )+
;
conversation_left_1_thought:
    BitConversationLeft1Thought format2 CL NL* ( bitElem NL* )*
   |BitConversationLeft1Thought format2 CL NL* ( bitElem NL* )* partner1? NL* ( s_and_w NL* )+
;
conversation_left_1_scream:
    BitConversationLeft1Scream format2 CL NL* ( bitElem NL* )*
   |BitConversationLeft1Scream format2 CL NL* ( bitElem NL* )* partner1? NL* ( s_and_w NL* )+
;


// when there is imagebit name_alt will be handled by "exitImage_chained" in
// bitmark-listener.js.
initiator:	name_text ( NL* imagebit )? ( name_alt )? ;
partner:     	name_text ( NL* imagebit )? ( name_alt )? ;
partner1:     	partner1_name ( NL* imagebit )? ( name_alt )? ;
partner1_name:	AtPartner s_and_w CL  ;

name_text:      OPHASH s_and_w CL ;
name_alt:       OPATALT s_and_w CL ;
chat_initiator: s_and_w ;
chat_partner:   s_and_w ;
sspl_chat_partner: sspl chat_partner ;


//
bitElem:
     LIST_LINE
   | NOTBITMARK
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

//***************** import the common parser here*********
<<<<<<common<<<<<<
//********************************************************

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

clnsp:	 CL ;  // without spaces
sspl:	 SSPL|SSPL2 ;

words:   ( SENTENCE
	   | NOTBITMARK
	   | BARSTRING | ELIPSIS
	   | AMP | Greater ~(Greater) | Less ~(Less)
	   | DBLEQ | RightArrow | RightAngle )+
;

sp: 	S ;


// ---------END of grammar-------------------------------------------------------------
