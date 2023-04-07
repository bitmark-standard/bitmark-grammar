/*
  default lexer mode:
  [Bit Keyword]  -> non-bit-mode

  endof bit -> default mode
*/
lexer grammar choiceLexer;



OPDOT:	        '[.' ;
S:		 [ \t] ;
BitMultichoice1: NL OPDOT S* 'multiple-choice-1'    ;
BitMultichoice:  NL OPDOT S* 'multiple-choice'    ;
BitMultiresp1:   NL OPDOT S* 'multiple-response-1'    ;
BitMultiresp:    NL OPDOT S* 'multiple-response'    ;
BitMultichoicetext: NL OPDOT S* 'multiple-choice-text'    ;
BitHighlighttext: NL OPDOT S* 'highlight-text' ;

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
OPHASH:		'[#' S* ;

CL:		S* ']' ;
COLON:		':' ;
AMP:		'&' ;
DBLCOLON:	'::' ;
PLUS:		'+' ;
DotAt:	   	'.@' ;
Greater: 	'>' ;
Less:		'<' ;
Lparen:		'(' ;
Rparen:		')' ;
RightAngle:	'►' ;
RightArrow:     '→' ;

// Separators
DBLEQ:		'=='  ;

HSPL:		NL '===' S* NL  ; // hard split
HSPL2:		'==='   S* NL  ;   // hard split
SSPL:	  	NL '---' S* NL  ; // soft split
SSPL2:	  	'---'   S* NL  ; // soft split

StrParen:       [A-Za-z_]+ Rparen ;

<<<<<<common<<<<<<
