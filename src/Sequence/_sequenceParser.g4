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
parser grammar sequenceParser;

options { tokenVocab = sequenceLexer; }


bitmark: ( bitmark_ ( S* NL )* )+ NL* EOF ;

bitmark_:
	  bit
;

bit:
	sequence
;
//
sequence:
    BitSequence format CL ( NL* bitElem )* NL*
       HSPL ( seqstr mmm )* seqstr HSPL
       ( resource (NL* resource)* )?
;

seqstr: (bitElem NL?)* s_and_w ;

mmm:    DBLMI  ;

//
bitElem:
     LIST_LINE
   | NOTBITMARK
   | dclines  // Added 12/18/2020
   | gap
   | atdef
   | reference 
   | dollarans
   | item
   | title   // 9/3/2020
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
   | bracketed_text   // added 1/21/2020
   | sp		// cuts the chained bits
;

// [_string ( ' ' string )*]
// Chained bits following don't have the space between them.
gap:
    single_gap ( single_gap|instruction|hint|item|example )*
;

single_gap:
    OPU ( NUMERIC | STRING | /*nil*/ ) (s_and_w )* clnsp
;

// item=[%1] so forth
choice_plus:  item? OPP s_and_w+ CL ;  // [+
choice_minus: item? OPM s_and_w+ CL ;  // [-
choice_star:  item? OPR s_and_w+ CL ;  // [*

resource:
      bitElem
;

//
bullet_item:
    OPBUL s_and_w CL ( atpoint )?
;

<<<<<<common<<<<<<

dcolon: DBLCOLON ;

//
//lines:   ( s_and_w NL? )+ ;


s_and_w:  
	   STRING ( S+ NUMERIC )?  // string=STRING
	 | words ( S+ NUMERIC )?   // words=SENTENCE
	 | OPS s_and_w CL
	 | NUMERIC
	 | S* COLON S*
	 | '&' S* 
	 | DBLEQ | URL
;

dclines: DCANY ;

clnsp:		CL ;  // without spaces
sspl:		SSPL|SSPL2 ;

words:          ( SENTENCE
		| NOTBITMARK	
		| BARSTRING
		| LIST_LINE
		| AMP | Greater ~(Greater) | Less ~(Less) 
		| RightArrow | RightAngle 
		| AmpArticle | AmpDocument | AmpDocumentLink | AmpWebsite
		| AmpImage | AmpAudio | AmpVideo | AmpApp 
		| AmpArticleLink | AmpAudioLink | AmpImageLink | AmpDocumentLink
		| BitmarkMinus | BitmarkPlus
		)+ ;
sp: 		S ;


// ---------END of grammar-------------------------------------------------------------
