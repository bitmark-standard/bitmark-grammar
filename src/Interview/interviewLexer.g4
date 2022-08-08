/*
   interview lexer
*/
lexer grammar interviewLexer;


OPDOT:	         '[.' ;
S:		 [ \t] ;
BitInterview:    NL OPDOT S* 'interview'    ;
BitInterviewinstgrp: NL OPDOT S* 'interview-instruction-grouped'    ;

//
COMMENT:  '||' UTF8*? '||' S* NL* ->skip ;
Image_type: BASIC | JPG | PNG | GIF | SVG ;
Audio_type: BASIC | MP3 | MP4 ;
Video_type: MP3 | MP2 | MP4 | FLV | GIF | WMV | MPEG | MPG ;
//----------------------------------------
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
RightAngle:	'►' ;
RightArrow:     '→' ;

// Separators
DBLEQ:		'==' ;
OR:		NL '--' S* NL ;
HSPL:		NL '===' S* NL  ; // hard split
HSPL2:		'==='   S* NL  ;   // hard split
SSPL:	  	NL '---' S* NL  ; // soft split
SSPL2:	  	'---'   S* NL  ; // soft split

BULLET:   '•'  ;
//<<<<<<<<<<<<<<<< COMMON LEXER RULES <<<<<<<<<<<<<<<<<<<<
// DCANY added 12/18/2020
DCANY:  NL* '::' STRING (':' SENTENCE)? '::' (NL|.)*? '::' NL ;  // OK1

//ANNO:    '==' STR_SP '==(' [!*+\-_?@▼] STR_SPX ')' '==' ;
//ANNO_IM: '==' STR_SP '==(' '&image' STR_SPX ')' '==' ;

ArticleText: '[' S* AmpArticle COLON (.|[ \t\r\n])*? CL ;

NOTCL:    [^\]] ;
NUMERIC:  ('+'|'-')?[0-9]+ ;
STRING:   STR  ;
NL:	  ('\n'|'\r\n') ;

fragment EM0:      '\u{1F400}' .. '\u{1F4FF}' ;
fragment EM2:      '\u{1F650}' .. '\u{1F9F0}' ;
fragment VS0:      '\u{FE00}' .. '\u{FE0F}' ;

fragment ROMANIA:  [ÂâĂăÎîşŞţŢșȘțȚ] ;
fragment GERMAN:   [ÄäẞÖöÜü] ;
fragment POLISH:   [ĄąĆćĘęŁłŃńÓóŚśŹźŻż] ;
fragment TRANSL:   [ČčĎďĚěǦǧȞȟǏǐJ̌ǰǨǩĽľŇňǑǒŘřŠšŤťǓǔǙǚŽžǮǯ] ;
fragment EURO:     [☞→↓←↑€“”’…„́«»◇◼︎◎ʌɪˈ_̈₂] ;  
fragment IPA:	   [ɛɜːɡʊuɔɪəɒæʌʉo] ;
fragment JAPANESE : [\p{Script=Hiragana}\p{Script=Katakana}\p{Script=Han}\u{FF01}-\u{FF20}\u{FF61}-\u{FF64}\u{2460}-\u{24FF}\u{3001}-\u{3002}\u{3220}-\u{325F}] ;


fragment
STR_SP:
  ([ :0-9̈A-Za-z_"\p{Block=Latin_1_Supplement}]|EURO|TRANSL|GERMAN|POLISH|ROMANIA|JAPANESE|'\\'|'{'|'}')+ ;

fragment
STR_SPX:
  ([0-9̈A-Za-z_ %?@!=*+-/:#$;<>'"\p{Block=Latin_1_Supplement}]|EURO|TRANSL|GERMAN|POLISH|ROMANIA|JAPANESE|'\\'|'{'|'}')+ ;

fragment
STR:
  ([-0-9̈A-Za-z_"\p{Block=Latin_1_Supplement}\p{Emoji}]|IPA|EM0|EM2|VS0|EURO|TRANSL|GERMAN|POLISH|ROMANIA|JAPANESE|'\\'|'{'|'}')+ ;

SENTENCE:   // Has a space
  ([0-9A-Za-z_̈%?@!=*+-/ \t$#;"'–•●—➔^ |()\p{Block=Latin_1_Supplement}\p{Emoji}]|IPA|EM0|EM2|VS0|EURO|TRANSL|GERMAN|POLISH|ROMANIA|JAPANESE|'\\'|'{'|'}')+
;



fragment UTF8:    [̈\u0000-\u00FF\u27CC] ;
OPAT:	 	 '[@' ;
AtProgress:      OPAT S* 'progress:'  ;  //-> AtDef
AtReference:     OPAT S* 'reference:'  ; //-> AtDef
AtWidth:	 OPAT S* 'width' ;
AtHeight:	 OPAT S* 'height' ;
AtProgressPoints: OPAT S* 'progressPoints' ;
AtShortanswer:	  OPAT S* 'shortAnswer]'  ;
AtLonganswer:	  OPAT S* 'longAnswer]' ;

AtExampleWithStr:OPAT S* 'example:' (SENTENCE|NL)* CL ;
AtExamplecol:    OPAT S* 'example:'  ;
AtExamplecl:     OPAT S* 'example]'  ;

AtPartialAnswerS:OPAT S* 'partialAnswer:' SENTENCE CL ;
AtPartialAnswer: OPAT S* 'partialAnswer]' ;
AtLabeltrue:     OPAT S* 'labelTrue:'  ;
AtLabelfalse:    OPAT S* 'labelFalse:'  ;
AtPoints:        OPAT S* 'points:'  ;
AtSrc:		 OPAT S* 'src' [0-9]+'x' ;  // added Sep 17

OPATALT: 	 OPAT S* 'alt:' ;
OPAMARK: 	 OPAT S* 'mark:' ;
ShowInIndex:     OPAT S* 'showInIndex]' ;
OpAtCaption:     OPAT S* 'caption:' ;
OpAtLicense:	 OPAT S* 'license:' ;
OpAtCopyright:	 OPAT S* 'copyright:' ;

// Boolean  property
OpAtIsTracked:	 OPAT S* 'isTracked:'  ;
OpAtIsInfoOnly:	 OPAT S* 'isInfoOnly:' ;

AtDate:		 OPAT S* 'date:' ;


Http:	  	 'http://'  ;
Https:   	 'https://'  ;
AmpAudio:	 '&audio' ;
AmpImage:	 '&image' ;
AmpImageZoom:    '&image-zoom' ;
AmpImageWAudio:	 '&imageWithAudio' ;
AmpVideo:	 '&video' ;
AmpArticle:      '&article' ;
AmpDocument:     '&document' ;
AmpApp:        	 '&app' ;
AmpWebsite:      '&website' ;  // NEW added 12/2/2020 usage [.message&website]..
AmpStillImageFilm:'&stillImageFilm' ;
AmpPdf:	         '&pdf' ;

OpAmpAudio:	 '[&' S* 'audio' ;
OpAmpImage:	 '[&' S* 'image' ;
OpAmpImageZoom:  '[&' S* 'image-zoom' ;
OpAmpImageWAudio:'[&' S* 'ImageWithAudio' ;
OpAmpVideo:	 '[&' S* 'video' ;
OpAmpArticle:    '[&' S* 'article' ;
OpAmpArticleAtt: '[&' S* 'article-attachment' ;
OpAmpDocument:   '[&' S* 'document' ;
OpAmpApp:        '[&' S* 'app' ;
OpAmpWebsite:    '[&' S* 'website' ;  // NEW added 12/2/2020 usage [.message&website]..
OpAmpStillImageFilm: '[&' S* 'stillImageFilm' ;

BracEnclose:     '[' ([A-Za-z]|ROMANIA)+ ;

// Added links Aug 18 2021
AmpAudioLink:	 '&audioLink' ;
AmpImageLink:	 '&imageLink' ;
AmpVideoLink:	 '&videoLink' ;
AmpArticleLink:  '&articleLink' ;
AmpDocumentLink: '&documentLink' ;
AmpAppLink:	 '&appLink' ;
AmpWebsiteLink:  '&websiteLink' ;
AmpStillImageFilmLink:'&stillImageFilmLink' ;


OpAmpAudioLink:	 '[&' S* 'audioLink' ;
OpAmpImageLink:	 '[&' S* 'imageLink' ;
OpAmpVideoLink:	 '[&' S* 'videoLink' ;
OpAmpArticleLink:'[&' S* 'articleLink' ;
OpAmpDocumentLink:'[&' S* 'documentLink' ;
OpAmpAppLink:	 '[&' S* 'appLink' ;
OpAmpWebsiteLink:'[&' S* 'websiteLink' ;
OpAmpStillImageFilmLink:'[&' S* 'stillImageFilmLink' ;

BitmarkMinus: 	 ':bitmark--' ;
BitmarkPlus:  	 ':bitmark++' ;
ColonText:   	 ':text' ;
Prosemirror:	 ':prosemirror' ;
Placeholder:	 ':placeholder' ;

BASIC:  ':basic' ;
JPG:    ':jpg' ;
PNG:    ':png' ;
GIF:    ':gif' ;
SVG:    ':svg' ;
MP2:	':mp2' ;
MP3:	':mp3' ;
MP4:	':mp4' ;
FLV:    ':flv' ;
WMV:    ':wmv' ;
MPEG:   ':mpeg';
MPG:    ':mpg' ;

TEL:	'tel:' ;
DotArticleAtt:  '.article-attachment' ;

STAR:  '*' ;
URL: ('https'|'http'|'ftp'|'file') '://' [-a-zA-Z0-9+&@#/%?=~_|!:,.;()]*[-a-zA-Z0-9+&@#/%=~_|]+ ;

LIST_LINE:
    S* '('? [0-9]+    (')') S+ SENTENCE NL
  | S* '('? [A-Za-z]+ (')') S+ SENTENCE NL
;
//<<<<<<<<<<<<<<<< COMMON <<<<<<<<<<<<<<<<<<<<

