/*
  match grammar
   last update  Aug 24, 2021 by Yoshi Noda

*/

parser grammar matchParser;

options { tokenVocab = matchLexer; }


bitmark: ( bitmark_ ( S* NL)* )+ EOF ;

bitmark_:
	matches
;

matches:
	  match_
	| match_matrix	   // added Sep 2,2020
	| match_all	   // added July 31
	| match_all_reverse // added July 31
	| match_reverse    // added June 7
	| match_picture	   // added June 7
	| match_audio	   // added June 7
	| match_solution_grouped
;

// match eq='\n==\n'
match_:
     BitMatch format CL NL+ ( bitElem NL* )*
        ( (HSPL NL) pair_heading )? pairs 
        NL* ( resource (NL* resource)* )?
;
// New 9/2/2020
match_matrix:
     BitMatchmatrix format CL NL+ ( bitElem NL* )*
        ( (HSPL NL) pair_heading_multi )? pair_multivals 
	NL* ( resource (NL* resource)* )?
;
//
match_solution_grouped:
     BitMatchsolgrp format CL NL+ ( bitElem NL* )*
        ( (HSPL NL) pair_heading )? pairs
        NL* ( resource (NL* resource)* )?
;
// added June 7
match_reverse:
     BitMatchrev format CL NL+ ( bitElem NL* )*
        ( (HSPL NL) pair_heading )? pairs 
        NL* ( resource (NL* resource)* )?
;
// An alias of match-reverse 7/31
match_all_reverse:
     BitMatchallrev format CL NL+ ( bitElem NL* )*
        ( (HSPL NL) pair_heading )? pairs 
        NL* ( resource (NL* resource)* )?
;
// added June 7
match_picture:
     BitMatchpic format CL NL+ ( bitElem NL* )*
        ( (HSPL NL) pair_heading )? pair_images 
        NL* ( resource (NL* resource)* )?
;
// added June 7
match_audio:
     BitMatchaudio format CL NL+ ( bitElem NL* )*
        ( (HSPL NL) pair_heading )? pair_audios
        NL* ( resource (NL* resource)* )?
;
// An alias  of match? 7/31
match_all:
     BitMatchall format CL NL+ ( bitElem NL* )*
        ( (HSPL NL) pair_heading )? pairs
        NL* ( resource (NL* resource)* )?
;

// remove emphasis_ 12/3/2021
bitElem:
     list_line
   | dclines
   | colcoltext
   | gap
   | atdef
   | dollarans
   | reference 
   | item
   | instruction 
   | hint
   | s_and_w
   | example
   | bool_label
   | imagebit 
   | audiobit 
   | videobit 
   | articlebit | documentbit | appbit | websitebit
   | stillimagefilmbit  // added 8/18/2021
   | angleref    // [►]
   | anchor       // [▼]
   | bracketed_text   // added 1/21/2020
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

// Jan 21, 2020
// bracketed_text: BracEnclose s_and_w? ( s_and_w ( NL S* )* NL* )* CL ;

// multiline example
ml_example:
    AtExamplecol (NL? lines NL?)? CL ;  // Now working!!!!!

longans:   AtLonganswer ;
shortans:  AtShortanswer ;

resource:
     bitElem
;

pair_heading: key_title (NL* EQ NL*) value_title NL;

pair_heading_multi:
       key_title ( (NL* EQ NL*) value_title_multi )+ NL
;

key_title:   OPHASH s_and_w* CL  ;
value_title: OPHASH s_and_w* CL  ;
value_title_multi: OPHASH s_and_w* CL  ;

// PAIRS
pairs:     HSPL NL pqpair+ ;

pqpair:    pquery (NL EQ NL) panswer (or_ panswer )* (NL* HSPL NL*)
	 | pquery (NL EQ NL*) (HSPL NL*)                   // No answer
	 | (NL* EQ NL*) (NL EQ NL) panswer (NL* HSPL NL*)  // no query
;

pquery:	 pquery__ ( pquery__ )* 
         | /*nil*/
;
pquery__:
	  NL* S* (item | s_and_w | COLON)+ ( S* (example) )? (longans|shortans|tense)?
	| NL* instruction
;


tense: TENSE ;

panswer: panswer__ (longans|shortans|example)? ;
//
panswer__:
          example? item? (s_and_w|NL|S|OP|CL|DBLCOLON)+ ( S* example )?
	| /* nil */
        | example s_and_w?
	| s_and_w NL? (example | hint | instruction)*
	| s_and_w NL instruction
        | instruction? opdoll ( s_and_w|NL|DOT|COLON )+ CL ( example )?
	| instruction s_and_w ( example )?
;

pair_images: HSPL NL pair_image+  ;
pair_image:  pimagebit (NL EQ NL) panswer (NL* HSPL NL*) ;

pair_audios: HSPL NL pair_audio+ ;
pair_audio:  paudiobit (NL EQ NL) panswer (NL* HSPL NL*) ;

// New 9/2/202
pair_multivals: HSPL NL pair_multival+ ;
pair_multival:  mpquery ((NL EQ NL) mpanswer )+ (NL* HSPL NL*) ;

pairmultival_image: ( HSPL imagebit EQ mpanswer ( EQ mpanswer )* ) ;
pairmultival_audio:  ( HSPL audiobit EQ mpanswer ( EQ mpanswer )* )+ ;


mpquery:  mpquery__ ( NL mpquery__ )* ;
mpquery__:
	  NL* (item | s_and_w |COLON)+ ( example )?
	| NL* LIST_LINE
;

mpanswer: mpanswer__ (longans|shortans)? ( (OR | NL) mpanswer__ (longans|shortans)? )* ;
mpanswer__:
          example? item? (s_and_w|NL|S|OP|CL|DBLCOLON)+ ( S* example )?
        | instruction? opdoll ( s_and_w|NL|DOT|COLON )+ CL ( example )?
	| instruction s_and_w ( example )?
	| /* nil */
        | example s_and_w?
	| s_and_w NL? (example | hint | instruction)*
	| s_and_w NL instruction
;

// These has its own listener functions
pimagebit: pimage_one ( image_chained4match )* ( OPATALT words CL )? ( OpAtCaption .*? CL )?
;
pimage_one: image_one ;

paudiobit:  op_audio_format COLON url CL ( OPATALT words CL )? ;

bullet_item:
    OPBUL s_and_w CL ( atpoint )?
;

//<<<<<<<<<<<<<<<<<<<<<<<start common
// [@point:number]
atpoint:
    AtPoints NUMERIC CL
;
// videoLink, audioLink are draft state as of Aug 20,2021
format:
 ( resource_format )* ( ColonText | resource_format_extra )*
;
resource_format:
   BitmarkMinus | BitmarkPlus | AmpArticle | AmpDocument 
 | AmpWebsite | AmpStillImageFilm
 | AmpAudioLink | AmpImageLink | AmpVideoLink | AmpArticleLink
 | AmpDocumentLink | AmpAppLink | AmpWebsiteLink | AmpStillImageFilmLink
 ;
 
resource_format_extra:
   image_format | audio_format | video_format | article_format
  | document_format | app_format | website_format | stillimagefilm_format
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
  | ( OPATALT | OpAtCaption | OpAtLicense | OpAtCopyright ) .*? CL
;
image_chained4match:
    AtSrc COLON url CL | (AtWidth | AtHeight) COLON NUMERIC CL 
  | ( OPATALT | OpAtCaption | OpAtLicense | OpAtCopyright ) .*? CL
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
 | ( OPATALT | OpAtCaption | OpAtLicense | OpAtCopyright ) .*? CL
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
    OPB s_and_w? ( s_and_w ( NL S* )* NL* )* CL
  | OPB s_and_w? EOF
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


dcolon: DBLCOLON ;
colcoltext: dcolon STRING dcolon ~('::')+ dcolon ;


//
lines: 
  ( s_and_w NL? )+
;
list_line: LIST_LINE ;

s_and_w:  
	   STRING ( S+ NUMERIC )?  // string=STRING
	 | words ( S+ NUMERIC )?   // words=SENTENCE
	 | OPS s_and_w CL
	 | NUMERIC
	 | S* COLON S*
	 | AMP S*
	 | CL | DBLCOLON | LIST_LINE
	 | colcoltext
;
dclines: DCANY ;

opdoll:		OPDOLL ;
opu:		OPU ;
opb:		OPB ;
opq:		OPQ ;
opa:		OPA ;
opp:		OPP ;
opm:		OPM ;
ops:		OPS ;
opr:		OPR ;  // [*
opc:		OPC ;

clnsp:		CL ;  // without spaces
or_:		OR ;

// Removed STAR 12/3/2021 SENTENCE has a STAR in it
words:          ( SENTENCE | AMP | Greater ~(Greater) | Less ~(Less) 
		| RightArrow | RightAngle
		)+ ;


sp: 		S ;


// ---------END of grammar-------------------------------------------------------------
