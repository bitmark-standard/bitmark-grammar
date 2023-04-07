/*
   chat bit lexer
*/
lexer grammar chatLexer;

OPDOT:	        '[.' ;
S:		 [ \t] ;
BitChat:   	        NL OPDOT S* 'chat'    ;
BitConv:  	    	NL OPDOT S* 'conversation'    ;
BitConversationLeft1:	NL OPDOT S* 'conversation-left-1' ;
BitConversationRight1:	NL OPDOT S* 'conversation-right-1' ;

//
OPDOLL:		'[' S* '$' ;      // Dollar
OPBUL:          '[' S* '•' ;      // Bullet
OPESC:          '[^' ;      // Escaped bracketted def

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

CL:		S* ']' ;
COLON:		':' ;
AMP:		'&' ;
DBLCOLON:	'::' ;
PLUS:		'+' ;
DotAt:	   	'.@' ;
Greater: 	'>' ;
Less:		'<' ;
RightAngle:	'►' ;
RightArrow:     '→' ;


// Separators
DBLEQ:		'==' ;
HSPL:		NL '===' S* NL  ; // hard split
HSPL2:		'==='   S* NL  ;   // hard split
SSPL:	  	NL '--' S* NL  ; // soft split
SSPL2:	  	'--'   S* NL  ; // soft split

<<<<<<common<<<<<<
