/*
  multi-choice grammar
     May 5, 2022 last update
     Yoshi Noda

*/

parser grammar choiceParser;

options { tokenVocab = choiceLexer; }


bitmark: ( bitmark_ ( S* NL )* )+ NL* EOF ;

bitmark_:
	  multi_choices
;

multi_choices:
	  multiple_choice
	| multiple_choice_1
	| multiple_response
	| multiple_response_1
	| multiple_choice_text
	| highlight_text
;
// multi choice sets
//
multiple_choice:
   BitMultichoice format CL NL* ( bitElem NL* )*
  |BitMultichoice format CL NL+ ( bitElem NL* )*
      ( NL* mcrsep ( NL* mcrmisc )? s_and_w? choices )+
      ((HSPL|HSPL2)|NL) ( bitElem NL )? NL* ( resource (NL* resource)* )?
;
// ===NL
mcrsep: ((HSPL|HSPL2)|NL) ;
mcrmisc: bitElem* NL  ;

// 1 choice set
// Level 0 test ok
multiple_choice_1:
   BitMultichoice1 format CL NL* ( bitElem NL* )*
  |BitMultichoice1 format CL NL+ ( bitElem NL* )* choices   
;

// 
multiple_response:
    BitMultiresp format CL NL* ( bitElem NL* )*
   |BitMultiresp format CL NL+ ( bitElem NL* )*
      ( NL* mcrsep ( NL* mcrmisc )? choices )+
      ((HSPL|HSPL2)|NL)? ( bitElem NL* )? NL* ( resource (NL* resource)* )?
;
// 
multiple_response_1:
    BitMultiresp1 format CL NL+ ( bitElem NL* )*
   |BitMultiresp1 format CL NL+ ( bitElem NL* )+ choices NL* ( resource (NL* resource)* )?
;

//
// [.multiple-choice-text]
// The students ['complete][+d][-t][-s] the [+cloze][-close][-cloth] with the correct verb forms.
//
//
multiple_choice_text:
   BitMultichoicetext format CL NL+  ( bitElem NL* )*
      multitxt_il_choice* NL*
      ( resource (NL* resource)* )?
;
multitxt_il_choice:
	( ( headed_inline_choices | (S* NL) | s_and_w | S+ )+  ) ;


// 4/5/2021 addition
highlight_text:
   BitHighlighttext format CL NL+  ( bitElem NL* )*
    highlight_il_choice* NL*
    ( resource (NL* resource)* )?
;
highlight_il_choice:
    ( ( highlight_inline_choices | (S* NL) | s_and_w | S+ )+ ) ;

//
bitElem:
     LIST_LINE
   | NOTBITMARK
   | dclines
   | gap
   | atdef
   | reference 
   | item
   | title
   | instruction 
   | hint
   | s_and_w 
   | example
   | bool_label
   | imagebit 
   | audiobit
   | videobit 
   | articlebit
   | documentbit
   | appbit
   | websitebit
   | stillimagefilmbit  // added 8/18/2021
   | angleref     // [►]
   | anchor       // [▼]
   | sp		// cuts the chained bits
;

// [_string ( ' ' string )*]
// Chained bits following don't have the space between them.
gap:
    single_gap ( single_gap|instruction|hint|item|example )*
;

single_gap:
    OPU ( NUMERIC | STRING | /*nil*/ ) s_and_w* clnsp
;

// There must be 2 choices at least
// No space in between.
choices:  ( cplus | cminus ) (NL? S* ( cplus | cminus ) )* ;

cplus:  choice_plus ( item | example | instruction | hint )*  ;
cminus: choice_minus ( item | example | instruction | hint )*  ;

// item=[%1] so forth
choice_plus:  item? OPP StrParen? (s_and_w|NL)+ CL ;  // [+
choice_minus: item? OPM StrParen? (s_and_w|NL)+ CL ;  // [-

// Inline -- NL not allowed. Added 6/12/21
il_choice_plus:  item? OPP StrParen? s_and_w CL ;  // [+
il_choice_minus: item? OPM StrParen? s_and_w CL ;  // [-

headed_inline_choices: choice_head? inline_choices il_follow* ;

highlight_inline_choices: choice_head? inline_choices  il_follow* ;

//
headed_choices: choice_head? choices ;

// ['complete][+d][-t]..
// Level 0 test ok
choice_head:
    OPS s_and_w CL
;
// No space(s) inbetween
inline_choices:
    ( il_choice_plus | il_choice_minus )
       ( il_choice_plus | il_choice_minus )*
;

// multiline example
ml_example:
    AtExamplecol ( NL? lines NL? )? CL ;  // Now working!!!!!

// For inline text for multi-choice-text
il_follow:
      example
    | OPQ ~( CL )+ CL      // hint
;

longans:   AtLonganswer ;
shortans:  AtShortanswer ;

resource:
     bitElem
;

bullet_item:
    OPBUL s_and_w CL ( atpoint )?
;

// Import the common part
/*
    common part of the bitmark parser

*/
// [@point:number]
atpoint:
    AtPoints NUMERIC CL
;
// videoLink, audioLink are draft state as of Aug 20,2021
format:
 ( resource_format )* ( ColonText | ColonJson | resource_format_extra )*
;
resource_format:
   BitmarkMinus | BitmarkPlus | Prosemirror | Placeholder | ColonJson 
 | AmpArticle | AmpDocument 
 | AmpWebsite | AmpStillImageFilm
 | AmpAudioLink | AmpImageLink | AmpVideoLink | AmpArticleLink
 | AmpDocumentLink | AmpAppLink | AmpWebsiteLink | AmpStillImageFilmLink
 | AmpVideoEmbed | AmpAudioEmbed | AmpDocumentEmbed
 | AmpDocumentEmbed | AmpStillImageFilmEmbed
 | AmpDocumentDownload
 ;
 
resource_format_extra:
   image_format | audio_format | video_format | article_format
  | document_format | app_format | website_format | stillimagefilm_format
  | AmpPdf
;

format2:
   BitmarkMinus | BitmarkPlus | ColonText | Placeholder | ColonJson | /*nil*/
;

//
//
image_format:  // No [ included
    AmpImage  (( Image_type ) | ( DotArticleAtt ))?
  | AmpImageLink ( Image_type )?
  | AmpImageZoom ( Image_type )?
  ;
video_format:    (AmpVideo | AmpVideoLink | AmpVideoEmbed) ( COLON Video_type )? ;
article_format:  AmpArticle | AmpArticleLink ;
document_format: AmpDocument | AmpDocumentLink | AmpDocumentDownload | AmpDocumentEmbed ;
app_format:      AmpApp | AmpAppLink  ;
website_format:  AmpWebsite | AmpWebsiteLink  ;
stillimagefilm_format: AmpStillImageFilm | AmpStillImageFilmLink | AmpStillImageFilmEmbed;

op_article_format:  OpAmpArticleLink | OpAmpArticle ;
op_document_format: OpAmpDocumentLink | OpAmpDocument
		    | OpAmpDocumentDownload | OpAmpDocumentEmbed ;
op_app_format:      OpAmpApp | OpAmpAppLink  ;
op_website_format:  OpAmpWebsite | OpAmpWebsiteLink ;
op_video_format:    OpAmpVideo ( COLON Video_type )? 
		  | OpAmpVideoLink ( COLON Video_type )?
		  | OpAmpVideoEmbed ( COLON Video_type )?
;
op_stillimagefilm_format: OpAmpStillImageFilm
		  | OpAmpStillImageFilmLink | OpAmpStillImageFilmEmbed ;

articlebit:   op_article_format COLON url CL 
	    | ArticleText
;

documentbit: op_document_format  COLON url CL ( OPATALT words CL )? ;
websitebit:  op_website_format   COLON url CL ( OPATALT words CL )? ;
appbit:      op_app_format COLON ( url | telephone ) CL ( OPATALT words CL )? ;

stillimagefilmbit: stillimg_one ( resource_chained )* ;
stillimg_one: op_stillimagefilm_format COLON S* url CL ;

videobit:    video_one ( resource_chained )* ;
video_one:   op_video_format  COLON url CL ( OPATALT words CL )? ;

// [&image:...]
imagebit:    image_one ( image_chained )* ( NL ShowInIndex )? ;
image_one:   op_image_format COLON S* url CL ;

op_image_format:
    OpAmpImage  (( Image_type ) | ( DotArticleAtt ))?
  | OpAmpImageLink ( Image_type )?
  | OpAmpImageZoom ( Image_type )?
;
image_chained:
    AtSrc COLON url CL | (AtWidth | AtHeight) COLON NUMERIC CL
  | ( OPATALT | OpAtCaption | OpAtSearch | OpAtLicense | OpAtCopyright ) .*? CL
;
image_chained4match:
    AtSrc COLON url CL | (AtWidth | AtHeight) COLON NUMERIC CL 
  | ( OPATALT | OpAtCaption | OpAtSearch | OpAtLicense | OpAtCopyright ) .*? CL
;
audiobit:    audio_one ( resource_chained )* ;
audio_one:   op_audio_format  COLON url CL ( OPATALT words CL )? ;

audio_format:
    AmpAudio ( COLON Audio_type )? 
  | AmpAudioLink ( COLON Audio_type )? 
;
op_audio_format:
    OpAmpAudio ( COLON Audio_type )? 
  | OpAmpAudioLink ( COLON Audio_type )?
  | OpAmpAudioEmbed ( COLON Audio_type )?
;

// Aug 8,2021 added
resource_chained:
   ( OPA s_and_w | AtSrc ) COLON S* (s_and_w|NL)+  CL
 | ( AtWidth | AtHeight ) COLON NUMERIC CL 
 | ( OPATALT | OpAtCaption | OpAtSearch | OpAtLicense | OpAtCopyright ) .*? CL
;

telephone:   TEL PLUS NUMERIC ;

url: URL ;

item:   OPC CL ( S* lead )?
      | OPC s_and_w (COLON|s_and_w)* CL ( S* lead )? 
;
lead:   OPC s_and_w (COLON|s_and_w)* CL ;

angleref:
      OPRANGLES  s_and_w? CL
    | OPRANGLEL  s_and_w? CL
;

// --------- 2/11/2022 -- added below ---------
example:
      AtExamplecl          // above will not work
    | AtExampleWithStr
    | AtExamplecol SENTENCE? EOF
;
bracketed_text:
    BracEnclose s_and_w? ( s_and_w ( NL S* )* NL* )* CL
  | BracEnclose ( s_and_w | NL | S )* EOF
;
reference:
      AtReference ( s_and_w | COLON | URL | NL )+  CL 
   |  AtReference ( s_and_w | COLON | URL | NL | S )* EOF
;
progress:
    AtProgress s_and_w  CL
;
dateprop:
    AtDate  (s_and_w|COLON|NL)+  CL ( dateprop_chained )?
;
dateprop_chained:
    AtDate  (s_and_w|COLON|NL)+  CL
;


// Instruction
instruction:
    OPB NL* s_and_w? ( (NL S*)* s_and_w )* NL* CL
  | OPB NL* s_and_w? EOF
;
// Hint
hint:
    OPQ ~( CL )+ CL
;
title:
    OPHASH (s_and_w|NL)+ CL 
  | OPHASH s_and_w EOF
;
bool_label:
    AtLabeltrue  s_and_w CL
  | AtLabelfalse s_and_w CL
;
progress_points:
    AtProgressPoints COLON NUMERIC CL
  | AtProgressPoints COLON s_and_w CL    // Error
;

istracked:
    OpAtIsTracked s_and_w CL  // checks true false in the listener
;
isinfoonly:	 
    OpAtIsInfoOnly s_and_w CL  // checks true false in the listener
;


// [@language:en]
atdef:  atdef_ ( NL* atdef_ )*
;
// Chained atdef like [@age:1][@age:100],
// [@language:en][@language:jp][@language:cn]
atdef_:
     OPA s_and_w (COLON|DBLCOLON) s_and_w (NL|COLON|s_and_w)* CL
   | OpAtCopyright .*? CL
   | AtSampleSolution
;

dollarans:
    OPDOLL ( s_and_w | COLON | NL )+ CL
  | OPDOLL ( s_and_w | COLON | NL )* EOF
;

anchor:  OPDANGLE s_and_w? CL ;





dclines: DCANY ;

//
lines: 
  ( s_and_w NL? )+
;

s_and_w:  
	   STRING ( S+ NUMERIC )?  // string=STRING
	 | words ( S+ NUMERIC )?   // words=SENTENCE
	 | NUMERIC
	 | S* COLON S*
	 | '&' S* | DBLEQ 
	 | URL
;

clnsp:		CL ;  // without spaces
sspl:		SSPL|SSPL2 ;

words:          ( SENTENCE
		| BARSTRING
		| NOTBITMARK | ELIPSIS
		| AMP | Greater ~(Greater) | Less ~(Less) 
		| RightArrow | RightAngle
		)+ ;
sp: 		S ;


// ---------END of grammar-------------------------------------------------------------
