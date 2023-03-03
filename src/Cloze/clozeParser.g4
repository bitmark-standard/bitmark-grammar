/*
  Cloze grammar
     Aug 28, 2020  by Yoshi Noda

*/

parser grammar clozeParser;

options { tokenVocab = clozeLexer; }


bitmark: ( bitmark_ ( S* nl)* )+ EOF ;

bitmark_:
	clozes
;

clozes:
	  cloze
	| cloze_instruction_grouped
	| cloze_solution_grouped
	| cloze_and_multiple_choice_text
;

bitElem:
     LIST_LINE
   | dclines  // Added 12/18/2020
   | gap
   | atdef
   | reference
   | item
   | instruction
   | hint
   | s_and_w 
   | example
   | bool_label
   | imagebit nl*
   | audiobit nl*
   | videobit nl*
   | articlebit
   | documentbit
   | appbit
   | websitebit
   | stillimagefilmbit  // added 8/18/2021
   | angleref     // [►]
   | anchor       // [▼]
   | sp		// cuts the chained bits
;

resource:
     bitElem 
;


//
// [.cloze] This sentence is a [_cloze][_gap text][!noun] with [_2][?1 or 2]
//    gaps including an instruction for the first and a hint for the second gap.
//
cloze:
     BitCloze format          CL nl* ( bitElem nl* )+ NL* ( resource (NL* resource)* )?
//    |BitCloze format_nullable CL nl* ( bitElem nl* )+ NL* ( resource (NL* resource)* )?
;
// 
cloze_instruction_grouped:
    BitClozeinstgrp format CL nl?
        ( item nl )? ( instruction )? nl* ( (bitElem nl*) )*
	NL* ( resource (NL* resource)* )?
;
// 
cloze_solution_grouped:
    BitClozesolgrp format CL nl?
    	( item nl )? ( instruction )? nl* ( (bitElem nl*) )*
	NL* ( resource (NL* resource)* )? 
;

// [_string ( ' ' string )*]
// Chained bits following don't have the space between them.
gap:
    single_gap ( single_gap|instruction|hint|item|example )*
;

single_gap:
    OPU ( numeric | string | /*nil*/ ) s_and_w* clnsp
;

//
// [.cloze-and-multiple-choice-text]
// The students completed the [_cloze] with the correct verb [+forms][-formats].
// Level 0 test ok
cloze_and_multiple_choice_text:
    BitClozeandmulti format CL nl*
       ( bitElem nl* | headed_inline_choices nl* )+
       NL* ( resource (NL* resource)* )?
;

headed_inline_choices: choice_head? inline_choices ;
// ['complete][+d][-t]..
// Level 0 test ok
choice_head:
    OPS s_and_w CL
;
// No space(s) inbetween
inline_choices:
    ( choice_plus | choice_minus | choice_star )
       ( choice_plus | choice_minus | choice_star )*
;
// item=[%1] so forth
choice_plus:  item? OPP s_and_w+ CL ;  // [+
choice_minus: item? OPM s_and_w+ CL ;  // [-
choice_star:  item? OPR s_and_w+ CL ;  // [*

pimagebit:  image_one ( image_chained )* ( OPATALT words CL )? ;

//<<<<<<<<<<<<<<<<<<<<<<<start common
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
 ;
 
resource_format_extra:
   image_format | audio_format | video_format | article_format
  | document_format | app_format | website_format | stillimagefilm_format
  | AmpPdf
;

format2:
   BitmarkMinus | BitmarkPlus | ColonText | ColonJson | /*nil*/
;

//
//
image_format:  // No [ included
    AmpImage  (( Image_type ) | ( DotArticleAtt ))?
  | AmpImageLink ( Image_type )?
  | AmpImageZoom ( Image_type )?
  | AmpImageWAudio
  ;
video_format:    (AmpVideo | AmpVideoLink) ( COLON Video_type )? ;
article_format:  AmpArticle | AmpArticleLink ;
document_format: AmpDocument | AmpDocumentLink  ;
app_format:      AmpApp | AmpAppLink ;
website_format:  AmpWebsite | AmpWebsiteLink  ;
stillimagefilm_format: AmpStillImageFilm | AmpStillImageFilmLink ;

op_article_format:  OpAmpArticleLink | OpAmpArticle ;
op_document_format: OpAmpDocumentLink | OpAmpDocument ;
op_app_format:      OpAmpApp | OpAmpAppLink ;
op_website_format:  OpAmpWebsite | OpAmpWebsiteLink ;
op_video_format:    OpAmpVideo ( COLON Video_type )? 
		  | OpAmpVideoLink ( COLON Video_type )?
;
op_stillimagefilm_format: OpAmpStillImageFilm | OpAmpStillImageFilmLink ;

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
  | OpAmpImageWAudio
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
      | OPC s_and_w (COLON|words)* CL ( S* lead )? 
;
lead:   OPC s_and_w (COLON|words)* CL ;

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
    OPB NL* s_and_w? ( s_and_w ( NL S* )* NL* )* CL
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
;

dollarans:
    OPDOLL ( s_and_w | COLON | NL )+ CL
  | OPDOLL ( s_and_w | COLON | NL )* EOF
;

anchor:  OPDANGLE s_and_w? CL ;

//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<end common


lines: 
  ( s_and_w nl? )+
;

s_and_w:  
	   STRING ( S+ numeric )?  // string=STRING
	 | words ( S+ numeric )?   // words=SENTENCE
	 | OPS s_and_w CL
	 | NUMERIC
	 | S* COLON S*
	 | '&' S* | CL | OP_N_ETC
	 | DBLEQ  // Added Aug 28, 2020
 	 | URL
;
dclines: DCANY ;

opu:		OPU ;
opb:		OPB ;
opq:		OPQ ;
opa:		OPA ;
opp:		OPP ;
opm:		OPM ;
ops:		OPS ;
opr:		OPR ;  // [*
opc:		OPC ;

cl:		CL ;
clnsp:		CL ;  // without spaces
nl:		NL ;

listline_:	LIST_LINE ;

numeric:	NUMERIC ;
string:		STRING ;
words:          ( SENTENCE | BARSTRING | AMP | Greater ~(Greater) | Less ~(Less) 
		| RightArrow | RightAngle
		)+ ;
sp: 		S ;


// ---------END of grammar-------------------------------------------------------------
