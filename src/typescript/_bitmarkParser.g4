/*
  Bitbook grammar
     June 18, 2020  by Yoshi Noda

Issues:
1)   ':' '&' and ']' in word not accepted.

2) 

3) Bracket escaping = [] inside sentences
   e.g.* Ich habe die __(deutsche)__ Staatsbürgerschaft. Ich bin __(Deutsche[r]). __

4) It gets really slow to parse lines line this
  => Modified the grammar and now it is not that slow.

*/

parser grammar bitmarkParser;

options { tokenVocab = bitmarkLexer; }


bitmark: ( bitmark_ ( S* NL )* )+ NL* EOF ;

bitmark_:
	  bit
	| lines
;

bit:
	  book | chapter
	| summary | toc
	| bit_alias
	| internal_link
	| anchor
	| group_born | group_died
 	| essay
	| correction
	| mark_
	| document_upload
	| take_picture
	| record_audio
	| preparation_note
	| assignment
	| article
	| statement		// 6/16/2022
	| details		// 6/18/2022
	| note | info | warning | remark | hintbit | help | danger | bug    // 02/06/22
	| sidenote | stickynote | quote | footnote | examplebit  // 02/06/22
	| page
	| message 
	| bot_interview
	| self_assessment
	| rating | survey | survey_1 | survey_anonymous | survey_anonymous_1
	| hint
	| learning_path_lti | learning_path_step | learning_path_book
	| learning_path_sign | learning_path_video_call | learning_path_learning_goal 
	| learning_path_closing | learning_path_feedback | learning_path_bot_training
	| learning_path_external_link | learning_path_classroom_training
	| learning_path_classroom_event
	| bot_action_send | bot_action_announce	| bot_action_save | bot_action_remind
;
//
book:
    BitBook ( ColonCollection | ColonBook | format )? CL ( NL* bitElem )+
;
chapter:
    BitChapter format? CL NL* ( anchor NL )?
      resource (NL* resource)* 
;

toc:
    BitToc s_and_w? CL NL ( atdef NL )?
;
summary:
    BitSummary CL NL* title_etc
;
internal_link:
    (BitIntlink|BitIntRef) (BitmarkMinus|BitmarkPlus)? CL ( NL* bitElem )*
;

bit_alias:  // e.g. [.bit-alias][►com.firstpub.09823409h44]
    BitAlias CL angleref
;

//
title_etc:
  ( NL? ( title | atdef | item | instruction | angleref | anchor | progress ) )* 
;
group_born:  // [.group*][*wtf]
    BitGroups CL ( NL (OPR|OPHASH) (s_and_w|COLON)+ CL )+ NL lines*
;
// OPR [*
group_died: // [.group†][*wtf]
    BitGroupt CL ( NL (OPR|OPHASH) (s_and_w|COLON)+ CL )+ NL lines*
;

// New April 2022
learning_path_lti:
    BitLearningPathLti  format CL NL* ( bitElem NL* )+ ;
learning_path_step:
    BitLearningPathStep format CL NL* ( bitElem NL* )+ ;
learning_path_book:
    BitLearningPathBook format CL NL* ( bitElem NL* )+ ;
learning_path_sign:
    BitLearningPathSign format CL NL* ( bitElem NL* )+ ;
learning_path_video_call:
    BitLearningPathVideoCall format CL NL* ( bitElem NL* )+ ;
learning_path_learning_goal:
    BitLearningPathLearningGoal format CL NL* ( bitElem NL* )+ ;
learning_path_closing:
    BitLearningPathClosing format CL NL* ( bitElem NL* )+ ;
learning_path_feedback:
    BitLearningPathFeedback format CL NL* ( bitElem NL* )+ ;
learning_path_bot_training:
    BitLearningPathBotTraining format CL NL* ( bitElem NL* )+ ;
learning_path_external_link:
    BitLearningPathExternalLink format CL NL* ( bitElem NL* )+ ;
learning_path_classroom_training:
    BitLearningPathClassroomTraining format CL NL* ( bitElem NL* )+ ;

learning_path_classroom_event:
    BitLearningPathClassroomEvent format CL NL* ( bitElem NL* )+ ;
bot_action_send:
    BitBotActionSend format CL NL* ( bitElem NL* )+ ;
bot_action_announce:
    BitBotActionAnnounce format CL NL* ( bitElem NL* )+ ;
bot_action_save:
    BitBotActionSave format CL NL* ( bitElem NL* )+ ;
bot_action_remind:
    BitBotActionRemind format CL NL* ( bitElem NL* )+ ;

//
bitElem:
     LIST_LINE
   | dclines  // Added 12/18/2020
   | gap
   | reference
   | dateprop
   | progress
   | atdef
   | dollarans
   | partans
   | item
   | title   // 9/3/2020
   | instruction 
   | hint
   | s_and_w 
   | example
   | bool_label
   | progress_points
   | istracked | isinfoonly
   | imagebit 
   | audiobit 
   | videobit
   | articlebit
   | documentbit
   | appbit
   | websitebit
   | stillimagefilmbit
   | angleref     // [►]
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
    OPU ( NUMERIC | STRING | /*nil*/ ) (s_and_w )* clnsp
;

// There must be 2 choices at least
// No space in between.

// item=[%1] so forth
choice_plus:  item? OPP s_and_w+ CL ;  // [+
choice_minus: item? OPM s_and_w+ CL ;  // [-
choice_star:  item? OPR s_and_w+ CL ;  // [*

essay:
    BitEssay format CL NL ( (bitElem ) NL* )*
     	 ( NL* ( ml_example ) )*
	 NL* ( resource (NL* resource)* )?
;

// multiline example
ml_example:
    AtExamplecol ( NL? lines NL? )? CL ;  // Now working!!!!!

partans:   AtPartialAnswerS | AtPartialAnswer ;

resource:
      bitElem
;

//
correction:
    BitCorrection format CL NL ( bitElem NL* )* corrs*
        NL* ( resource (NL* resource)* )?
;
corrs:
     OPM .*? CL NL
   | OPP .*? CL NL
;

// mark
mark_:
    BitMark format CL NL (( bitElem | mark_text ) NL* )* NL* ( resource (NL* resource)* )?

;

// ['Diaz][@mark:red] 
mark_text:  OPS  s_and_w CL mark_color? (hint|item|instruction)* ;
mark_color: OPAMARK S* STRING S* CL ;

//
document_upload:
    BitDocup ( Video_type | Audio_type | Image_type )?
    	CL NL ( bitElem NL* )*
	NL* ( resource (NL* resource)* )?
;

//
take_picture:
    BitTakepic format CL NL ( bitElem NL* )* NL* ( resource (NL* resource)* )?
;
//
record_audio:
    BitRecaud format CL NL  ( bitElem NL* )* NL* ( resource (NL* resource)* )?
;
//
preparation_note:
    BitPrepnote format CL NL* ( bitElem NL* )* lines? NL* ( resource (NL* resource)* )?
;
//
assignment:
    BitAssign format CL NL+ ( bitElem NL* )* lines? NL* ( resource (NL* resource)* )?
;
//
article:
    BitArticle format CL NL* ( bitElem NL* )+
;
statement:
    BitStatement format CL NL* ( bitElem NL* )+
;
details:
    BitDetails format CL NL* ( bitElem NL* )+
;

// May 20,2021
page:		BitPage format CL NL* ( bitElem NL* )+ ;
// New bits added these on 02/06/22
note:	        BitNote format CL NL* ( bitElem NL* )+ ;
info:		BitInfo  format CL NL* ( bitElem NL* )+ ;
warning:	BitWarning  format CL NL* ( bitElem NL* )+ ;
remark:		BitRemark  format CL NL* ( bitElem NL* )+ ;
help:		BitHelp  format CL NL* ( bitElem NL* )+ ;
danger:		BitDanger  format CL NL* ( bitElem NL* )+ ;
bug:		BitBug  format CL NL* ( bitElem NL* )+ ;
sidenote:	BitSidenote  format CL NL* ( bitElem NL* )+ ;
stickynote:	BitStickynote  format CL NL* ( bitElem NL* )+ ;
quote:		BitQuote  format CL NL* ( bitElem NL* )+ ;
footnote:	BitFootnote  format CL NL* ( bitElem NL* )+ ;
hintbit:	BitHint  format CL NL* ( bitElem NL* )+ ;
examplebit:     BitExample format CL NL* ( bitElem NL* )+ ;

// NEW 12/2/2020
message:
    BitMessage format CL NL* ( bitElem NL* )+
;

bot_interview:
    BitBotint format CL ( (HSPL|HSPL2) bot_choice ( sspl bot_choice )* )+ (HSPL|HSPL2)
        NL* ( resource (NL* resource)* )?
;
bot_choice:
    ( words | instruction | audiobit | gap | choice_plus | choice_minus | choice_star )+
;
//sspl_bot_choice: sspl bot_choice ;

rating:
    BitRating format CL NL* ( bitElem NL* )*
       ( (HSPL|HSPL2) s_and_w ( NL bullet_item )+ )+ (HSPL|HSPL2)
       NL* ( resource (NL* resource)* )?
;
bullet_item:
    OPBUL s_and_w CL ( atpoint )?
;
// .survey, .survey-1, .survey-anonymous, .survey-anonymous-1
survey:
    BitSurvey format CL NL* ( bitElem NL* )*
           ( (HSPL|HSPL2) s_and_w? ( NL* bullet_item )+ )+ (HSPL|HSPL2)
;
survey_1:
    BitSurvey1 format CL NL* ( bitElem NL* )*
           ( (HSPL|HSPL2) s_and_w ( NL bullet_item )+ )+ (HSPL|HSPL2)
;
survey_anonymous:
    BitSurveyanon format CL NL* ( bitElem NL* )*
           ( (HSPL|HSPL2) s_and_w ( NL bullet_item )+ )+ (HSPL|HSPL2)
;
survey_anonymous_1:
    BitSurveyanon1 format CL NL* ( bitElem NL* )*
           ( (HSPL|HSPL2) s_and_w ( NL bullet_item )+ )+ (HSPL|HSPL2)
;
self_assessment:
    BitSelfassess format CL NL* ( bitElem NL* )*
     ( (HSPL|HSPL2) self_assess_s_and_w ( NL* bullet_item )+ )+ (HSPL|HSPL2)
     NL* ( resource (NL* resource)* )?
;
self_assess_s_and_w:  ~( OPBUL )+  ;

<<<<<<common<<<<<<

//
lines:
    ( s_and_w NL? )+
;

s_and_w:  
       STRING ( S+ NUMERIC )?  // string=STRING
     | words ( S+ NUMERIC )?   // words=SENTENCE
     | NUMERIC
     | OPS s_and_w CL
     | S* COLON S*
     | '&' S*
     | DBLEQ
     | URL
     | bracket_escaped    // Added 12/18/2020
;

dclines: DCANY ;

bracket_escaped:
    OPESC  s_and_w+ CL?
;

clnsp:		CL ;  // without spaces
sspl:		SSPL|SSPL2 ;


words:          ( sentence 
		| AMP | Greater ~(Greater) | Less ~(Less) 
		| RightArrow | RightAngle
		| AmpArticle | AmpArticleLink
		| AmpDocument | AmpDocumentLink
		| AmpWebsite | AmpWebsiteLink
		| AmpImage | AmpImageLink  
		| AmpAudio | AmpAudioLink
		| AmpVideo | AmpVideoLink
		| AmpApp | AmpAppLink
		| AmpStillImageFilm | AmpStillImageFilmLink
		| BitmarkMinus | BitmarkPlus | QUOTE_INDEX
		)+ ;
sp: 		S ;
sentence:       SENTENCE ;


// ---------END of grammar-------------------------------------------------------------
