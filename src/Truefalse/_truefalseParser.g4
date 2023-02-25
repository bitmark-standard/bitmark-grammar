/*
  truefalse grammar
     Sep 15, 2020  by Yoshi Noda

Issues:
1)   ':' '&' and ']' in word not accepted.

2) 

3) Bracket escaping = [] inside sentences
   e.g.* Ich habe die __(deutsche)__ Staatsbürgerschaft. Ich bin __(Deutsche[r]). __

4) It gets really slow to parse lines line this
  => Modified the grammar and now it is not that slow.

*/

parser grammar truefalseParser;

options { tokenVocab = truefalseLexer; }


bitmark: ( bitmark_ ( S* NL )* )+ NL* EOF ;

bitmark_:
	  truefalses
;
truefalses:
	  true_false_1
	| true_false
;

//
true_false_1:
    BitTruefalse1 format CL NL+ ( bitElem NL* )* choices
       NL* ( resource (NL* resource)* )?
;
true_false:
    BitTruefalse format CL NL*
       ( bitElem NL* )* ( mcrsep? tfmisc* choices )+
       mcrsep_end
       NL* ( resource (NL* resource)* )?
;



// ===NL
mcrsep:     (HSPL|HSPL2) ;
mcrsep_end: (HSPL|HSPL2) ;
tfmisc:     (bitElem NL*)  ;

//
choices:
    ( cplus | cminus ) (NL? S* ( cplus | cminus ) )*
;
cplus:  choice_plus example?  ;
cminus: choice_minus example?  ;

// item=[%1] so forth	       
choice_plus:  item? OPP (s_and_w|NL)+ CL ;  // [+
choice_minus: item? OPM (s_and_w|NL)+ CL ;  // [-
choice_star:  item? OPR (s_and_w|NL)+ CL ;  // [*

//
bitElem:
     LIST_LINE
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
   | articlebit | documentbit | appbit | websitebit
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

bullet_item:
    OPBUL s_and_w CL ( atpoint )?
;

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

dclines: DCANY ;

bracket_escaped:
    OPESC  s_and_w CL
;

clnsp:		CL ;  // without spaces
sspl:		SSPL|SSPL2 ;

words:          ( SENTENCE | BARSTRING | AMP | Greater ~(Greater) | Less ~(Less) 
		| RightArrow | RightAngle
		)+ ;
sp: 		S ;


// ---------END of grammar-------------------------------------------------------------
