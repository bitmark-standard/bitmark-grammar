/*
  default lexer mode:
  [Bit Keyword]  -> non-bit-mode

  endof bit -> default mode
*/
lexer grammar clozeLexer;

S:		 [ \t] ;
OPDOT:	        '[.' ;
BitCloze:        NL OPDOT S* 'cloze'     ;
BitClozeinstgrp: NL OPDOT S* 'cloze-instruction-grouped'    ;
BitClozesolgrp:  NL OPDOT S* 'cloze-solution-grouped'    ;
BitClozeandmulti: NL OPDOT S* 'cloze-and-multiple-choice-text'    ;


//----------------------------------------
OPSP:	        '[' S* ;
OPDOLL:		'[' S* '$' ;      // Dollar
OPBUL:          '[' S* '•' ;      // Bullet
OPESC:          '[^' ;      // Escaped bracketted def

OPRANGLES:    '[' '►' S* ;  // Right angle - internal link
OPRANGLEL:    '[' '▶' S* ;  // Right angle - internal link
OPDANGLE:     '[▼' S* ;  // Down angle - Anchor
OPU:		'[_' S* [-+]? ;  // Underscore
OPB:		'[!' S* '_'? ;  // Bang!
OPQ:		'[?' S* ;  // Question
OPA:		'[@' S* ;  // At
OPP:		'[+' S* [+]? ;  // Plus
OPM:		'[-' S* [-]? ;  // Minus
OPS:		'[\'' S* ; // [' Single quote
OPR:		'[*' S* ;  // [*
OPC:		'[%' S* ;  // [% Item
OPHASH:		'[#'  ;
CL:		S* ']' ;
COLON:		':' ;
AMP:		'&' ;
DBLCOLON:	'::' ;
PLUS:		'+' ;
DotAt:   	'.@' ;
Greater: 	'>' ;
Less:		'<' ;
DBLEQ:		'==' ;
RightAngle:	'►' ;
RightArrow:     '→' ;
OP_N_ETC:	'[' [@&+\-*%#!?_]+  ;
UNSCO:		'_' ;


<<<<<<common<<<<<<
