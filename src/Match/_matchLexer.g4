/*
  default lexer mode:
  [Bit Keyword]  -> non-bit-mode

  endof bit -> default mode
*/
lexer grammar matchLexer;

OPDOT:	         '[.' ;
S:		 [ \t] ;
OP:		 '[' ;
BitMatch:        NL OPDOT S* 'match'    ;
BitMatchmatrix:	 NL OPDOT S* 'match-matrix'    ;
BitMatchall:	 NL OPDOT S* 'match-all'    ;
BitMatchrev:	 NL OPDOT S* 'match-reverse'    ;
BitMatchallrev:	 NL OPDOT S* 'match-all-reverse'    ;
BitMatchpic:	 NL OPDOT S* 'match-picture'    ;
BitMatchaudio:	 NL OPDOT S* 'match-audio'    ;
BitMatchsolgrp:	 NL OPDOT S* 'match-solution-grouped'    ;

//
OPDOLL:		'[' S* '$' ;      // Dollar
OPBUL:          '[' S* '•' ;      // Bullet

//OPESC:        '[^' ;      // Escaped bracketted def
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
DOT:		'.' ;
RightAngle:	'►' ;
RightArrow:     '→' ;
//BETA:		'' ;
//HISHI:          '◇' ;

// Separators
EQ:		'==' ;
HSPL:		'===' ;
OR:	        NL '--' NL ;

TENSE: '__(' .*? ')__' ;

// ********************** import the common lexer here***************
<<<<<<common<<<<<<
// ******************************************************************

