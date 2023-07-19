/*
  flashcard grammar
     Sep 15, 2020  by Yoshi Noda

Issues:
1)   ':' '&' and ']' in word not accepted.

2) 

3) Bracket escaping = [] inside sentences
   e.g.* Ich habe die __(deutsche)__ Staatsbürgerschaft. Ich bin __(Deutsche[r]). __

4) It gets really slow to parse lines line this
  => Modified the grammar and now it is not that slow.

*/

parser grammar flashcardParser;

options { tokenVocab = flashcardLexer; }


bitmark: ( bitmark_ ( S* NL )* )+ NL* EOF ;

bitmark_:
	  flashcards
	| vocab			  // added 5.11.2021
	| vocab_1		  // added 5.11.2021
;
flashcards:
	  flashcard
	| flashcard_1
	| flashcard_set	          // added 9/2/2020
	| flashcard_language_set  // added 9/2/2020
	| flashcard_language_1    // added 9/2/2020
;
//
flashcard_1:
    BitFlash1 format CL NL* ( bitElem NL* )*
   |BitFlash1 format CL NL side (EQ|EQ2) side NL* ( resource (NL* resource)* )?
;
flashcard:
    BitFlash  format CL NL* ( bitElem NL* )*
   |BitFlash  format CL NL* (HSPL|HSPL2) side (EQ|EQ2) side 
       	   ( (HSPL|HSPL2) side (EQ|EQ2) side )* (HSPL|HSPL2) NL* ( resource (NL* resource)* )?
;
flashcard_set: 	          // added 9/2/2020
    BitFlashcardset  format CL NL* ( bitElem NL* )*
   |BitFlashcardset  format CL NL* ( (HSPL|HSPL2) side (EQ|EQ2) side )?
       	   ( (HSPL|HSPL2) side (EQ|EQ2) side ( NL OR side )* )* (HSPL|HSPL2) NL* ( resource (NL* resource)* )?
;
flashcard_language_set:  // added 9/2/2020
    BitFlashcardlangset  format CL NL* ( bitElem NL* )*
   |BitFlashcardlangset  format CL NL* sidex_NL
          ( (HSPL|HSPL2) sidex ( NL sidex_NL ) ( (EQ|EQ2) sidex_NL )+ )+ (HSPL|HSPL2) NL* ( resource (NL* resource)* )?
;
flashcard_language_1:    // added 9/2/2020
    BitFlashcardlang1  format CL NL* ( bitElem NL* )*
   |BitFlashcardlang1  format CL NL* sidex_NL
           (EQ|EQ2) sidex ( NL sidex_NL ) ( OR sidex_NL )+  NL* ( resource (NL* resource)* )?
;

vocab:
    BitVocabulary format CL NL* ( bitElem NL* )*
   |BitVocabulary format CL NL* ( bitElem NL* )*
      ( ( HSPL|HSPL2 ) vside+ ( (EQ|EQ2) vside+ )* )+
      (HSPL|HSPL2) NL*
      ( resource (NL* resource)* )?
;

vocab_1:
    BitVocabulary_1 format CL NL* ( bitElem NL* )*
   |BitVocabulary_1 format CL NL* ( bitElem NL* )*
      (EQ|EQ2) vside+ ( OR vside+ )* ( OR resource (NL* resource)* )?
;

sx:   atdef | s_and_w | instruction | imagebit | audiobit ;

sidex:   sx ( NL? sx )* ;

sidex_NL:   bitElem NL* ;

side:     sidex ( OR sidex )* ;

side_NL:  sidex_NL ( OR sidex_NL )* ;

vside:    sidex_NL ;

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

// ********************** import the common parser here*************
<<<<<<common<<<<<<
// ******************************************************************

dcolon: DBLCOLON ;

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
	 | '&' S* | URL
;


clnsp:		CL ;  // without spaces
sspl:		SSPL|SSPL2 ;

words:          ( SENTENCE
		| NOTBITMARK
		| BARSTRING | ELIPSIS
		| AMP | Greater ~(Greater) | Less ~(Less) 
		| RightArrow | RightAngle
		)+ ;
sp: 		S ;


// ---------END of grammar-------------------------------------------------------------
