/*
   truefalse lexer
*/
lexer grammar truefalseLexer;

OPDOT:	        '[.' ;
S:		 [ \t] ;
BitTruefalse1:	 NL OPDOT S* 'true-false-1'    ;
BitTruefalse:	 NL OPDOT S* 'true-false'    ;

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

HSPL:		NL '===' S* NL  ; // hard split
HSPL2:		'==='   S* NL  ;   // hard split
SSPL:	  	NL '---' S* NL  ; // soft split
SSPL2:	  	'---'   S* NL  ; // soft split


<<<<<<common<<<<<<
