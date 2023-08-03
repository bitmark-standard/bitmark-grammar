/*
  chat grammar
     Sep 16, 2020  by Yoshi Noda

Issues:
1)   ':' '&' and ']' in word not accepted.

2) 

3) Bracket escaping = [] inside sentences
   e.g.* Ich habe die __(deutsche)__ Staatsbürgerschaft. Ich bin __(Deutsche[r]). __

4) It gets really slow to parse lines line this
  => Modified the grammar and now it is not that slow.

*/
parser grammar chatParser;

options { tokenVocab = chatLexer; }


bitmark: ( bitmark_ ( S* NL )* )+ NL* EOF ;

bitmark_:
	  chat
        | conversation
  	| conversation_left_1
	| conversation_right_1
	| conversation_right_1_thought
	| conversation_right_1_scream
	| conversation_left_1_thought
	| conversation_left_1_scream
;
// Also conversation
chat:
    BitChat format CL NL* ( bitElem NL* )*
   |BitChat format CL NL* ( bitElem NL* )*
        (HSPL|HSPL2) initiator (HSPL|HSPL2) partner
        ( (HSPL|HSPL2) chat_initiator ( sspl_chat_partner )* )+ (HSPL|HSPL2)
	NL* ( resource (NL* resource)* )?
;
conversation:
    BitConv format CL NL* ( bitElem NL* )*
   |BitConv format CL NL* ( bitElem NL* )*
        (HSPL|HSPL2) initiator (HSPL|HSPL2) partner
        ( (HSPL|HSPL2) chat_initiator ( sspl_chat_partner )* )+ (HSPL|HSPL2)
	NL* ( resource (NL* resource)* )?
;

conversation_left_1:
    BitConversationLeft1 format2 CL NL* ( bitElem NL* )* 
   |BitConversationLeft1 format2 CL NL* ( bitElem NL* )* partner1? NL* ( s_and_w NL* )+
;
conversation_right_1:
    BitConversationRight1 format2 CL NL* ( bitElem NL* )*
   |BitConversationRight1 format2 CL NL* ( bitElem NL* )* partner1? NL* ( s_and_w NL* )+
;
conversation_right_1_thought:
    BitConversationRight1Thought format2 CL NL* ( bitElem NL* )* 
   |BitConversationRight1Thought format2 CL NL* ( bitElem NL* )* partner1? NL* ( s_and_w NL* )+
;
conversation_right_1_scream: 
    BitConversationRight1Scream format2 CL NL* ( bitElem NL* )*
   |BitConversationRight1Scream format2 CL NL* ( bitElem NL* )* partner1? NL* ( s_and_w NL* )+
;
conversation_left_1_thought:
    BitConversationLeft1Thought format2 CL NL* ( bitElem NL* )*
   |BitConversationLeft1Thought format2 CL NL* ( bitElem NL* )* partner1? NL* ( s_and_w NL* )+
;
conversation_left_1_scream:
    BitConversationLeft1Scream format2 CL NL* ( bitElem NL* )*
   |BitConversationLeft1Scream format2 CL NL* ( bitElem NL* )* partner1? NL* ( s_and_w NL* )+
;


// when there is imagebit name_alt will be handled by "exitImage_chained" in
// bitmark-listener.js.
initiator:	name_text ( NL* imagebit )? ( name_alt )? ;
partner:     	name_text ( NL* imagebit )? ( name_alt )? ;
partner1:     	partner1_name ( NL* imagebit )? ( name_alt )? ;
partner1_name:	AtPartner s_and_w CL  ;

name_text:      OPHASH s_and_w CL ;
name_alt:       OPATALT s_and_w CL ;
chat_initiator: s_and_w ;
chat_partner:   s_and_w ;
sspl_chat_partner: sspl chat_partner ;


//
bitElem:
     LIST_LINE
   | NOTBITMARK
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

resource:
     bitElem
;

// [_string ( ' ' string )*]
// Chained bits following don't have the space between them.
gap:
    single_gap ( single_gap|instruction|hint|item|example )*
;

single_gap:
    OPU ( NUMERIC | STRING | /*nil*/ ) s_and_w* clnsp
;

dcolon: DBLCOLON ;

//***************** import the common parser here*********
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



//********************************************************

//
lines: 
  ( s_and_w NL? )+
;

s_and_w:  
	   STRING ( S+ NUMERIC )?  // string=STRING
	 | words ( S+ NUMERIC )?   // words=SENTENCE
	 | OPS s_and_w CL
	 | NUMERIC
	 | S* COLON S*
	 | '&' S* | DBLCOLON | DBLEQ
	 | URL
;

clnsp:	 CL ;  // without spaces
sspl:	 SSPL|SSPL2 ;

words:   ( SENTENCE
	   | NOTBITMARK
	   | BARSTRING | ELIPSIS
	   | AMP | Greater ~(Greater) | Less ~(Less)
	   | DBLEQ | RightArrow | RightAngle )+
;

sp: 	S ;


// ---------END of grammar-------------------------------------------------------------
