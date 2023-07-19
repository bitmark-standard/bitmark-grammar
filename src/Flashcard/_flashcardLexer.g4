/*
   truefalse lexer
*/
lexer grammar flashcardLexer;

OPDOT:	        '[.' ;
S:		 [ \t] ;
BitFlash1:	 NL OPDOT S* 'flashcard-1'    ;
BitFlash:	 NL OPDOT S* 'flashcard'    ;
BitFlashcardset: NL OPDOT S* 'flashcard-set' ;
BitFlashcardlangset: NL OPDOT S* 'flashcard-language-set' ;
BitFlashcardlang1:   NL OPDOT S* 'flashcard-language-1' ;
BitVocabulary:   NL OPDOT S* 'vocabulary' ;
BitVocabulary_1: NL OPDOT S* 'vocabulary-1' ;

//
OPDOLL:		'[' S* '$' ;      // Dollar
OPBUL:          '[' S* '•' ;      // Bullet

OPESC:          '[^' ;      // Escaped bracketted def
//OPAMP:	'[&' ;	    // Get conflict if exist.

OPRANGLES:      '[' '►' S* ;  // Right angle - internal link
OPRANGLEL:      '[' '▶' S* ;  // Right angle - internal link
OPDANGLE:       '[▼' S* ;  // Down angle - Anchor
OPU:		'[_' S* ;  // Underscore
OPB:		'[!' S* ;  // Bang!
OPQ:		'[?' S* ;  // Question
OPA:		'[@' S* ;  // At
OPP:		'[+' S* [+]? ;  // Plus
OPM:		'[-' S* [-]? ;  // Minus
OPS:		'[\'' S* ; // [' Single quote
OPR:		'[*' S* ;  // [*
OPC:		'[%' S* ;  // [% Item
OPHASH:		'[#'  ;

CL:		']' ;
COLON:		':' ;
AMP:		'&' ;
DBLCOLON:	'::' ;
PLUS:		'+' ;
DotAt:	   	'.@' ;
Greater: 	'>' ;
Less:		'<' ;
DBLEQ:		'==' ;
RightAngle:	'►' ;
RightArrow:     '→' ;


// Separators
EQ:	        NL '==' S* NL ;
EQ2:	        '=='   S* NL ;
OR:		NL '--' S* NL ;
HSPL:		NL '===' S* NL  ; // hard split
HSPL2:		'==='   S* NL  ;   // hard split
SSPL:	  	NL '---' S* NL  ; // soft split
SSPL2:	  	'---'   S* NL  ; // soft split

//***************** import the common lexer here**********
import bitmark_common_lexer;
//********************************************************

