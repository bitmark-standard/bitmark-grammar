/*
   chat bit lexer
*/
lexer grammar chatLexer;

OPDOT:	        '[.' ;
S:		 [ \t] ;
BitChat:   	 NL OPDOT S* 'chat'    ;
BitConv:  	 NL OPDOT S* 'conversation'    ;

//
COMMENT:  '||' UTF8*? '||' S* NL* ->skip ;
Image_type: BASIC | JPG | PNG | GIF | SVG ;
Audio_type: BASIC | MP3 | MP4 ;
Video_type: MP3 | MP2 | MP4 | FLV | GIF | WMV | MPEG | MPG ;
//----------------------------------------

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
SSPL:	  	NL '---' S* NL  ; // soft split
SSPL2:	  	'---'   S* NL  ; // soft split

<<<<<<common<<<<<<
