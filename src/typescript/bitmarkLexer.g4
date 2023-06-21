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
BitSampleSolution:  NL OPDOT S* 'sample-solution'    ;
BitTakeAudio:	 NL OPDOT S* 'take-audio'    ;
CLOZE:		 'CLOZE' ;
MATCH:		 'MATCH' ;

BitArticle:	 NL OPDOT S* 'article'  ;
BitPage:	 NL OPDOT S* 'page'    ;
BitEssay:        NL OPDOT S* 'essay'    ;
BitMessage:      NL OPDOT S* 'message'  ;  // NEW added 12/2/2020
BitCorrection:	 NL OPDOT S* 'correction'    ;
BitMark:	 NL OPDOT S* 'mark'    ;
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

BitAiPrompt:		    NL OPDOT S* 'ai-prompt' ;
BitNoteAi:		    NL OPDOT S* 'note-ai' ;
BitSummayAi:		    NL OPDOT S* 'summary-ai' ;
BitArticleAi:		    NL OPDOT S* 'article-ai' ;

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

BitImage:			NL OPDOT S* 'image'   ;
BitImageLink:			NL OPDOT S* 'image-link'   ;
BitImageZoom:			NL OPDOT S* 'image-zoom'   ;
BitImagePrototype:		NL OPDOT S* 'image-prototype'   ;
BitImageSuperWide:		NL OPDOT S* 'image-super-wide' ;
BitAudio:			NL OPDOT S* 'audio'   ;
BitAudioLink:			NL OPDOT S* 'audio-link'   ;
BitAudioEmbed:			NL OPDOT S* 'audio-embed'   ;
BitVideo:			NL OPDOT S* 'video'   ;
BitVideoLink:			NL OPDOT S* 'video-link'   ;
BitVideoEmbed:			NL OPDOT S* 'video-embed'   ;
BitVideoPortrait:		NL OPDOT S* 'video-portrait'   ;
BitVideoLandscape:		NL OPDOT S* 'video-landscape'   ;
BitStillImageFilm: 		NL OPDOT S* 'still-image-film'   ;
BitStillImageFilmLink:		NL OPDOT S* 'still-image-film-link'   ;
BitStillImageFilmEmbed:		NL OPDOT S* 'still-image-film-embed'   ;
BitWebsiteLink:			NL OPDOT S* 'website-link'   ;
BitDocument:			NL OPDOT S* 'document'   ;
BitDocumentLink:		NL OPDOT S* 'document-link'   ;
BitDocumentEmbed:		NL OPDOT S* 'document-embed'   ;
BitDocumentDownload:		NL OPDOT S* 'document-download'   ;
BitAppLink:			NL OPDOT S* 'app-link'   ;
BitEditorial:			NL OPDOT S* 'editorial'   ;

BitBookFrontispiece:		NL OPDOT S* 'book-frontispiece'   ;
BitBookTitle:	       		NL OPDOT S* 'book-title'   ;
BitBookCopyright:		NL OPDOT S* 'book-copyright'   ;
BitBookDedication:		NL OPDOT S* 'book-dedication'   ;
BitBookForword:			NL OPDOT S* 'book-foreword'   ;
BitBookPreface:			NL OPDOT S* 'book-preface'   ;
BitBookPrologue:		NL OPDOT S* 'book-prologue'   ;
BitBookEpilogue:		NL OPDOT S* 'book-epilogue'   ;
BitBookIntroduction:		NL OPDOT S* 'book-introduction'   ;
BitBookIncitingIncident:	NL OPDOT S* 'book-inciting-incident'   ;
BitBookConclusion:		NL OPDOT S* 'book-conclusion'   ;
BitBookAfterword:		NL OPDOT S* 'book-afterword'   ;
BitBookPostscript:		NL OPDOT S* 'book-postscript'   ;
BitBookappendix:		NL OPDOT S* 'book-appendix'   ;
BitBookAddendum:		NL OPDOT S* 'book-addendum'   ;
BitBookAcknowledgments:		NL OPDOT S* 'book-acknowledgments'   ;
BitBookListOfContributors:	NL OPDOT S* 'book-list-of-contributors'   ;
BitBookBibliography:		NL OPDOT S* 'book-bibliography'   ;
BitBookReferenceList:		NL OPDOT S* 'book-reference-list'   ;
BitBookEndnotes:		NL OPDOT S* 'book-endnotes'   ;
BitBookNotes:			NL OPDOT S* 'book-notes'   ;
BitBookCopyrightPermissions:	NL OPDOT S* 'book-copyright-permissions'   ;
BitBookTeaser:			NL OPDOT S* 'book-teaser'   ;
BitBookAutherBio:		NL OPDOT S* 'book-author-bio'   ;
BitBookRequestForABookReview:	NL OPDOT S* 'book-request-for-a-book-review'   ;
BitBookComingSoon:		NL OPDOT S* 'book-coming-soon'   ;
BitBookReadMore:		NL OPDOT S* 'book-read-more'   ;
BitBookSummary:			NL OPDOT S* 'book-summary'   ;
BitBookEpigraph:		NL OPDOT S* 'book-epigraph'   ;

BitCode:			NL OPDOT S* 'code'   ;
BitCard1:			NL OPDOT S* 'card-1'   ;
BitQuestion1:			NL OPDOT S* 'question-1'   ;

BitScreenshot:			NL OPDOT S* 'screenshot'   ;
BitFocusImage:			NL OPDOT S* 'focus-image'   ;
BitPhoto:			NL OPDOT S* 'photo'   ;
BitBrowserImage:		NL OPDOT S* 'browser-image'   ;
BitBotActionResponse:		NL OPDOT S* 'bot-action-response'   ;
BitBotActionTrueFalse:		NL OPDOT S* 'bot-action-true-false'   ;
BitBotActionRatingNumber:	NL OPDOT S* 'bot-action-rating-number'   ;
BitBotActionRatingStars:	NL OPDOT S* 'bot-action-rating-stars'   ;

BitChapterSubjectMatter:	NL OPDOT S* 'chapter-subject-matter' ;
BitReleaseNote:			NL OPDOT S* 'release-note' ;
BitConclusion:			NL OPDOT S* 'conclusion' ;

BitVendorAmcharts5Chart:	NL OPDOT S* 'vendor-amcharts-5-chart' ;
BitFeatured:			NL OPDOT S* 'featured' ;

BitNewspaperArticle:		NL OPDOT S* 'newspaper-article' ;
BitBlogArticle:			NL OPDOT S* 'blog-article' ;
BitBookArticle:			NL OPDOT S* 'book-article' ;
BitNotebookArticle:		NL OPDOT S* 'notebook-article' ;
BitWorkbookArticle:		NL OPDOT S* 'workbook-article' ;


//
OPDOLL:		'[' S* '$' ;      // Dollar
OPBUL:          '[' S* '•' ;      // Bullet
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
OPR:		'[*' S* ;  // [* Asterisk
OPHASH:	'[#' S* ;  // [# Hash
OPC:	  '[%' S* ;  // [% Item

CL:		   S* ']' ;
COLON:		':' ;
AMP:		  '&' ;
DBLCOLON:	'::' ;
PLUS:	  	'+' ;
DotAt:	  '.@' ;
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

COMMENT:  '||' UTF8*? '||' S* NL* ->skip ;

DCANY:  NL* '::' STRING (':' SENTENCE)? '::' (NL|.)*? '::' NL ;  // OK1

Image_type: BASIC | JPG | PNG | GIF | SVG ;
Audio_type: BASIC | MP3 | MP4 ;
Video_type: MP3 | MP2 | MP4 | FLV | GIF | WMV | MPEG | MPG ;

ArticleText: '[' S* AmpArticle COLON (.|[ \t\r\n])*? CL ;

NOTCL:    [^\]] ;
NUMERIC:  ('+'|'-')?[0-9]+ ;
STRING:   STR  ;
NL:	      ('\n'|'\r\n') ;
NOTBITMARK:  '[^' .*?  ']' ;
ELIPSIS:  ('[…'|'[...') .*? ']' ;

fragment EM0:      '\u{1F400}' .. '\u{1F4FF}' ;   // emoji 1
fragment EM2:      '\u{1F650}' .. '\u{1F9F0}' ;   // emoji 2
fragment VS0:      '\u{FE00}' .. '\u{FE0F}' ;     // Variation Selectors
//fragment SS0:    '\u{2070}' .. '\u{209C}' ;     // superscript and subscript
fragment SS0:      '\u{2000}' .. '\u{209C}' ;     // superscript and subscript + General Punctuation
fragment LEA:	     '\u{0100}' .. '\u{017F}' ;     // latin extended A
fragment LEB:	     '\u{0200}' .. '\u{024F}' ;     // latin extended B
fragment GAL:      '\u{03B1}' .. '\u{03C9}' ;     // Greek alpha α β v ...
fragment GALC:     '\u{0391}' .. '\u{03A9}' ;     // Greek alpha Capital
fragment PHON:	   '\u{1D00}' .. '\u{1DCF}' ;     // phonetic extentions


fragment ROMANIA:  [ÂâĂăÎîşŞţŢșȘțȚ] ;
fragment GERMAN:   [ÄäẞÖöÜü] ;
fragment POLISH:   [ĄąĆćĘęŁłŃńÓóŚśŹźŻż] ;
fragment TRANSL:   [ČčĎďĚěǦǧȞȟǏǐJ̌ǰǨǩĽľŇňǑǒŘřŠšŤťǓǔǙǚŽžǮǯ] ;
fragment EURO:     [☞→↓←↑€“”’…„́«»◇◼︎◎ʌɪˈ_̈₂‰≤≥‘≠Ωʳᵉ−] ;
fragment IPA:	     [ɛɜːɡʊuɔɪəɒæʌʉo] ;
fragment JAPANESE : [\p{Script=Hiragana}\p{Script=Katakana}\p{Script=Han}\u{2460}-\u{24FF}\u{3001}-\u{3002}\u{3220}-\u{325F}\u{FF01}-\u{FF5E}ー「」『』〜〈〉] ;


fragment
STR_SP:
  ([ :0-9̈A-Za-z_"\p{Block=Latin_1_Supplement}]|EURO|TRANSL|GERMAN|POLISH|ROMANIA|JAPANESE|'\\'|'{'|'}')+ ;

fragment
STR_SPX:
  ([0-9̈A-Za-z_ %?@!=*+-/:#$;<>'"\p{Block=Latin_1_Supplement}]|EURO|TRANSL|GERMAN|POLISH|ROMANIA|JAPANESE|'\\'|'{'|'}')+ ;

fragment
STR:
  ([-0-9̈A-Za-z_"\p{Block=Latin_1_Supplement}\p{Emoji}]|IPA|EM0|EM2|VS0|SS0|LEA|LEB|GAL|GALC|PHON|EURO|TRANSL|GERMAN|POLISH|ROMANIA|JAPANESE|'\\'|'{'|'}')+ ;

SENTENCE:   // Has a space
  ([0-9A-Za-z_̈%?@!=*+-/ \t$#;"'–•●—➔^ |()\p{Block=Latin_1_Supplement}\p{Emoji}]|IPA|EM0|EM2|VS0|SS0|LEA|LEB|GAL|GALC|PHON|EURO|TRANSL|GERMAN|POLISH|ROMANIA|JAPANESE|'\\'|'{'|'}'|'…')+
;

BARSTRING: '|' .*? '|' ;

fragment UTF8:    [̈\u0000-\u00FF\u200c\u200d\u27CC] ;
OPAT:	 	  '[@' ;
AtProgress:       OPAT S* 'progress:'  ;  //-> AtDef
AtReference:      OPAT S* 'reference:'  ; //-> AtDef
AtWidth:	  OPAT S* 'width' ;
AtHeight:	  OPAT S* 'height' ;
AtProgressPoints: OPAT S* 'progressPoints' ;
AtShortanswer:	  OPAT S* 'shortAnswer]'  ;
AtLonganswer:	  OPAT S* 'longAnswer]' ;

AtExampleWithStr:OPAT S* 'example:' (SENTENCE|NL)* CL ;
AtExamplecol:    OPAT S* 'example:'  ;
AtExamplecl:     OPAT S* 'example]'  ;
AtSampleSolution: OPAT S* 'sampleSolution:' (SENTENCE|NL)* CL ;

AtPartialAnswerS:OPAT S* 'partialAnswer:' SENTENCE CL ;
AtPartialAnswer: OPAT S* 'partialAnswer]' ;
AtLabeltrue:     OPAT S* 'labelTrue:'  ;
AtLabelfalse:    OPAT S* 'labelFalse:'  ;
AtPoints:        OPAT S* 'points:'  ;
AtSrc:		       OPAT S* 'src' [0-9]+'x' ;  // added Sep 17
AtPartner:	     OPAT S* 'partner:' ;

OPATALT: 	       OPAT S* 'alt:' ;
OPAMARK: 	       OPAT S* 'mark:' ;
ShowInIndex:     OPAT S* 'showInIndex]' ;
OpAtCaption:     OPAT S* 'caption:' ;
OpAtLicense:	   OPAT S* 'license:' ;
OpAtCopyright:	 OPAT S* 'copyright:' ;
OpAtSearch:      OPAT S* 'search:' ;

// Boolean  property
OpAtIsTracked:	 OPAT S* 'isTracked:'  ;
OpAtIsInfoOnly:	 OPAT S* 'isInfoOnly:' ;

AtDate:		 OPAT S* 'date:' ;




Http:	  	 'http://'  ;
Https:   	 'https://'  ;
AmpAudio:	       '&audio' ;
AmpImage:	       '&image' ;
AmpImageZoom:    '&image-zoom' ;
AmpImageWAudio:	 '&image-with-audio' ;
AmpVideo:	       '&video' ;
AmpArticle:      '&article' ;
AmpDocument:     '&document' ;
AmpApp:        	 '&app' ;
AmpWebsite:      '&website' ;  // NEW added 12/2/2020 usage [.message&website]..
AmpStillImageFilm:'&still-image-film' ;  // *
AmpPdf:	         '&pdf' ;

OpAmpAudio:	     '[&' S* 'audio' ;
OpAmpImage:	     '[&' S* 'image' ;
OpAmpImageZoom:  '[&' S* 'image-zoom' ;
OpAmpImageWAudio:'[&' S* 'image-with-audio' ; 
OpAmpVideo:	     '[&' S* 'video' ;
OpAmpArticle:    '[&' S* 'article' ;
OpAmpArticleAtt: '[&' S* 'article-attachment' ;
OpAmpDocument:   '[&' S* 'document' ;
OpAmpApp:        '[&' S* 'app' ;
OpAmpWebsite:    '[&' S* 'website' ;  // NEW added 12/2/2020 usage [.message&website]..
OpAmpStillImageFilm: '[&' S* 'still-image-film' ; 

BracEnclose:     '[' ([A-Za-z]|ROMANIA)+ ;

// Added links Aug 18 2021
AmpAudioLink:	   '&audio-link' ; 
AmpImageLink:	   '&image-link' ; 
AmpVideoLink:	   '&video-link' ; 
AmpArticleLink:  '&article-link' ; 
AmpDocumentLink: '&document-link' ;
AmpDocumentDownload: '&document-download' ; 
AmpAppLink:	     '&app-link' ;  
AmpWebsiteLink:  '&website-link' ; 
AmpStillImageFilmLink:'&still-image-film-link' ;


OpAmpAudioLink:	 '[&' S* 'audio-link' ; 
OpAmpImageLink:	 '[&' S* 'image-link' ; 
OpAmpVideoLink:	 '[&' S* 'video-link' ; 
OpAmpArticleLink:'[&' S* 'article-link' ; 
OpAmpDocumentLink:'[&' S* 'document-link' ;
OpAmpDocumentDownload:'[&' S* 'document-download' ;
OpAmpAppLink:	 '[&' S* 'app-link' ; 
OpAmpWebsiteLink:'[&' S* 'website-link' ;  
OpAmpStillImageFilmLink:'[&' S* 'still-image-film-link' ;  

AmpImageEmbed:	  '&image-embed' ; 
AmpVideoEmbed:	  '&video-embed' ; 
AmpAudioEmbed: 	  '&daudio-embed' ; 
AmpDocumentEmbed: '&document-embed' ;
AmpStillImageFilmEmbed:  '&still-image-film-embed' ;

OpAmpImageEmbed:    '[&' S* 'image-embed' ; 
OpAmpVideoEmbed:    '[&' S* 'video-embed' ; 
OpAmpAudioEmbed:    '[&' S* 'audio-embed' ; 
OpAmpDocumentEmbed: '[&' S* 'document-embed' ; 
OpAmpStillImageFilmEmbed:  '[&' S* 'still-image-film-embed' ;


BitmarkMinus: 	 ':bitmark--' ;
BitmarkPlus:  	 ':bitmark++' ;
ColonText:   	 ':text' ;
ColonJson:	 ':json' ;
Prosemirror:	 ':prosemirror' ;
Placeholder:	 ':placeholder' ;

BASIC:  ':basic' ;
JPG:    ':jpg' ;
PNG:    ':png' ;
GIF:    ':gif' ;
SVG:    ':svg' ;
MP2:	  ':mp2' ;
MP3:	  ':mp3' ;
MP4:	  ':mp4' ;
FLV:    ':flv' ;
WMV:    ':wmv' ;
MPEG:   ':mpeg';
MPG:    ':mpg' ;

TEL:	'tel:' ;
DotArticleAtt:  '.article-attachment' ;

STAR:  '*' ;
URL: ('https'|'http'|'ftp'|'file') '://' [-a-zA-Z0-9+&@#/%?=~_|!:,.;'()*$]*([-a-zA-Z0-9+&@#/%=~_|!:,.;'()*$]|'[')+ ;



LIST_LINE:
    S* '('? [0-9]+    (')') S+ SENTENCE NL
  | S* '('? [A-Za-z]+ (')') S+ SENTENCE NL
;
ENCLBARS:	'|' .*? '|' ;

//<<<<<<<<<<<<<<<< COMMON <<<<<<<<<<<<<<<<<<<<


// end