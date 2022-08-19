/*
  default lexer mode:
  [Bit Keyword]  -> non-bit-mode

  endof bit -> default mode
*/
lexer grammar bitmarkLexer;

OPDOT:	        '[.' ;
S:		 [ \t] ;
BitBook:         NL OPDOT S* 'book'    ;
BitChapter:      NL OPDOT S* 'chapter'    ;
BitToc:          NL OPDOT S* 'toc'    ;
BitSummary:      NL OPDOT S* 'summary'    ;
BitIntlink:      NL OPDOT S* 'internal-link' ;
BitIntRef:       NL OPDOT S* 'internal-reference' ;
BitAlias:        NL OPDOT S* 'bit-alias'    ;
BitGroups:       NL OPDOT S* 'group*'    ;
BitGroupt:       NL OPDOT S* 'group†'    ;
BitPlaceholder:  NL OPDOT S* 'placeholder'  ; // for internal use only
BitStatement:	 NL OPDOT S* 'statement'    ;
BitDetails:	 NL OPDOT S* 'details-1'    ;
CLOZE:		 'CLOZE' ;
MATCH:		 'MATCH' ;

BitArticle:	 NL OPDOT S* 'article'  ;
BitPage:	 NL OPDOT S* 'page'    ;
BitEssay:        NL OPDOT S* 'essay'    ;
BitMessage:      NL OPDOT S* 'message'  ;  // NEW added 12/2/2020
/*BitSequence:	 NL OPDOT S* 'sequence'    ;*/
BitCorrection:	 NL OPDOT S* 'correction'    ;
BitMark:	 NL OPDOT S* 'mark'    ;
BitDocup:	 NL OPDOT S* 'document-upload'    ;
BitTakepic:	 NL OPDOT S* 'take-picture'    ;
BitRecaud:	 NL OPDOT S* 'record-audio'    ;
BitPrepnote:	 NL OPDOT S* 'preparation-note'    ;
BitAssign:	 NL OPDOT S* 'assignment'    ;

BitBotint: 	 NL OPDOT S* 'bot-interview'    ;
BitSelfassess: 	 NL OPDOT S* 'self-assessment'    ;
BitRating: 	 NL OPDOT S* 'rating'    ;
BitSurvey: 	 NL OPDOT S* 'survey'    ;
BitSurvey1: 	 NL OPDOT S* 'survey-1'    ;
BitSurveyanon: 	 NL OPDOT S* 'survey-anonymous'    ;
BitSurveyanon1:  NL OPDOT S* 'survey-anonymous-1'    ;
BitVocabulary:   NL OPDOT S* 'vocabulary'  ;
BitVocabulary1:  NL OPDOT S* 'vocabulary-1'  ;
// Added below on 02/06/2022
BitNote:	 NL OPDOT S* 'note' ;
BitInfo:  	 NL OPDOT S* 'info' ;
BitWarning:	 NL OPDOT S* 'warning' ;
BitRemark:	 NL OPDOT S* 'remark';
BitHint:	 NL OPDOT S* 'hint';
BitHelp:	 NL OPDOT S* 'help';
BitDanger:	 NL OPDOT S* 'danger';
BitBug:		 NL OPDOT S* 'bug';
BitSidenote:	 NL OPDOT S* 'side-note';
BitStickynote:	 NL OPDOT S* 'sticky-note';
BitQuote:	 NL OPDOT S* 'quote' ;
BitFootnote:	 NL OPDOT S* 'foot-note' ;
BitExample:	 NL OPDOT S* 'example' ;
BitButtonCopytext: NL OPDOT S* 'button-copy-text' ;
BitWbtContinue:	 NL OPDOT S* 'wbt-continue' ;
BitLearningPathDetails: NL OPDOT S* 'learning-path-details' ;


// New April 2022
BitLearningPathLti:          NL OPDOT S* 'learning-path-lti' ;
BitLearningPathStep:         NL OPDOT S* 'learning-path-step' ;
BitLearningPathBook:         NL OPDOT S* 'learning-path-book' ;
BitLearningPathSign:         NL OPDOT S* 'learning-path-sign' ;
BitLearningPathVideoCall:    NL OPDOT S* 'learning-path-video-call' ;
BitLearningPathLearningGoal: NL OPDOT S* 'learning-path-learning-goal' ;
BitLearningPathClosing:      NL OPDOT S* 'learning-path-closing' ;
BitLearningPathFeedback:     NL OPDOT S* 'learning-path-feedback' ;
BitLearningPathBotTraining:  NL OPDOT S* 'learning-path-bot-training' ;
BitLearningPathExternalLink: NL OPDOT S* 'learning-path-external-link' ;
BitLearningPathClassroomTraining: NL OPDOT S* 'learning-path-classroom-training' ;
// New April 22, 2022
BitLearningPathClassroomEvent: NL OPDOT S* 'learning-path-classroom-event' ;
BitBotActionSend:              NL OPDOT S* 'bot-action-send' ;
BitBotActionAnnounce:          NL OPDOT S* 'bot-action-announce' ;
BitBotActionSave: 	       NL OPDOT S* 'bot-action-save' ;
BitBotActionRemind:  	       NL OPDOT S* 'bot-action-remind' ;

BitVendorPadletEmbed:	       NL OPDOT S* 'vendor-padlet-embed' ;
BitScorm:		       NL OPDOT S* 'scorm' ;

//
COMMENT:  '||' UTF8*? '||' S* '\n'* ->skip ;
Image_type: BASIC | JPG | PNG | GIF | SVG ;
Audio_type: BASIC | MP3 | MP4 ;
Video_type: MP3 | MP2 | MP4 | FLV | GIF | WMV | MPEG | MPG ;
//----------------------------------------

OPDOLL:		'[' S* '$' ;      // Dollar
OPBUL:          '[' S* '•' ;      // Bullet

OPESC:          '[^' [!@:+&%_$.\-]+  ;      // Escaped bracketted def
//OPAMP:	'[&' ;	    // Get conflict if exist.

OPRANGLES:      '[' '►' S* ;  // Right angle
OPRANGLEL:      '[' '▶' S* ;  // Right angle
OPDANGLE:       '[▼' S* ;  // Down angle - Anchor
OPU:		'[_' S* ;  // Underscore
OPB:		'[!' S* ;  // Bang!
OPQ:		'[?' S* ;  // Question
OPA:		'[@' S* ;  // At
OPP:		'[+' S* ;  // Plus
OPM:		'[-' S* ;  // Minus
OPS:		'[\'' S* ; // [' Single quote
OPR:		'[*' S* ;  // [*
OPHASH:		'[#' S* ;
OPC:	        '[%' S* ;  // [% Item

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

QUOTE_INDEX: '[' [0-9]+ ']' ;  // Only for this lexer!

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

fragment EM0:      '\u{1F400}' .. '\u{1F4FF}' ;   // emoji 1
fragment EM2:      '\u{1F650}' .. '\u{1F9F0}' ;   // emoji 2
fragment VS0:      '\u{FE00}' .. '\u{FE0F}' ;     // Variation Selectors
fragment SS0:      '\u{2070}' .. '\u{209C}' ;     // superscript and subscript

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
  ([-0-9̈A-Za-z_"\p{Block=Latin_1_Supplement}\p{Emoji}]|IPA|EM0|EM2|VS0|SS0|EURO|TRANSL|GERMAN|POLISH|ROMANIA|JAPANESE|'\\'|'{'|'}')+ ;

SENTENCE:   // Has a space
  ([0-9A-Za-z_̈%?@!=*+-/ \t$#;"'–•●—➔^ |()\p{Block=Latin_1_Supplement}\p{Emoji}]|IPA|EM0|EM2|VS0|SS0|EURO|TRANSL|GERMAN|POLISH|ROMANIA|JAPANESE|'\\'|'{'|'}')+
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
//OpAtPadletId:	 OPAT S* 'padletId' ;

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


// end