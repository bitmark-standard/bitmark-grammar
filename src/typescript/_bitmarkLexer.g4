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
//BitVocabulary:   NL OPDOT S* 'vocabulary'  ;
//BitVocabulary1:  NL OPDOT S* 'vocabulary-1'  ;

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

<<<<<<common<<<<<<

// end