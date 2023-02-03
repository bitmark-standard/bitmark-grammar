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
	| take_picture | take_audio
	| record_audio
	| preparation_note
	| assignment
	| article
	| statement 
	| details 
	| sample_solution
	| buttoncopytext | wbtcontinue | learningpathdetails
	| note | info | warning | remark | hintbit | help | danger | bug
	| sidenote | stickynote | quote | footnote | examplebit
	| page
	| message 
	| bot_interview
	| self_assessment
	| rating | survey | survey_1 | survey_anonymous | survey_anonymous_1
	| hint
	| vendor_padlet_embed | scorm
	| learning_path_lti | learning_path_step | learning_path_book
	| learning_path_sign | learning_path_video_call | learning_path_learning_goal 
	| learning_path_closing | learning_path_feedback | learning_path_bot_training
	| learning_path_external_link | learning_path_classroom_training
	| learning_path_classroom_event
	| bot_action_send | bot_action_announce	| bot_action_save | bot_action_remind

	| bit_image | bit_imageLink | bit_imageZoom
	| bit_audio | bit_audioLink | bit_audioEmbed
	| bit_video | bit_videoLink | bit_videoEmbed
	| bit_stillImageFilm | bit_stillImageFilmLink | bit_stillImageFilmEmbed
	| bit_document | bit_documentLink | bit_documentEmbed | bit_documentDownload
	| bit_websiteLink | bit_appLink | bit_editorial

	| book_frontispiece | book_title | book_copyright | book_dedication
	| book_forword | book_preface | book_prologue | book_epilogue | book_introduction
	| book_inciting_incident | book_conclusion | book_afterword | book_postscript
	| book_appendix | book_addendum | book_acknowledgments 
	| book_list_of_contributors | book_bibliography | book_reference_list
	| book_endnotes | book_notes | book_copyright_permissions | book_teaser
	| book_auther_bio | book_request_for_a_book_review | book_coming_soon
	| book_read_more | book_summary | book_epigraph

	| code | card1 | question1
;
//
book:
    BitBook (format)? CL ( NL* bitElem )+
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
   | dclines
   | gap
   | reference
   | dateprop
   | progress
   | atdef
   | dollarans
   | partans
   | item
   | title
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
   | bracketed_text
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
take_audio:
    BitTakeAudio format CL NL ( bitElem NL* )* NL* ( resource (NL* resource)* )?
;
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
statement: BitStatement format CL NL* ( bitElem NL* )+ ;
details:   BitDetails format CL NL* ( bitElem NL* )+ ;
sample_solution: BitSampleSolution format CL NL* ( bitElem NL* )+ ;
buttoncopytext:  BitButtonCopytext format CL NL* ( bitElem NL* )+ ;
wbtcontinue: BitWbtContinue format CL NL* ( bitElem NL* )+ ;
learningpathdetails: BitLearningPathDetails format CL NL* ( bitElem NL* )+ ;

page:		BitPage format CL NL* ( bitElem NL* )+ ;
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
vendor_padlet_embed:  BitVendorPadletEmbed format CL NL* ( bitElem NL* )+ ;
scorm:  	BitScorm format CL NL* ( bitElem NL* )+ ;

// New Jan 24. 2023
bit_image:			BitImage format2 CL NL* ( bitElem NL*)+ ;
bit_imageLink:	      		BitImageLink format2 CL NL* ( bitElem NL*)+ ;
bit_imageZoom:	      		BitImageZoom format2 CL NL* ( bitElem NL*)+ ;
bit_audio:	      		BitAudio format2 CL NL* ( bitElem NL*)+ ;
bit_audioLink:	      		BitAudioLink format2 CL NL* ( bitElem NL*)+ ;
bit_audioEmbed:	      		BitAudioEmbed format2 CL NL* ( bitElem NL*)+ ;
bit_video:	      		BitVideo format2 CL NL* ( bitElem NL*)+ ;
bit_videoLink:	      		BitVideoLink format2 CL NL* ( bitElem NL*)+ ;
bit_videoEmbed:	      		BitVideoEmbed format2 CL NL* ( bitElem NL*)+ ;
bit_stillImageFilm:   		BitStillImageFilm format2 CL NL* ( bitElem NL*)+ ;
bit_stillImageFilmLink:   	BitStillImageFilmLink format2 CL NL* ( bitElem NL*)+ ;
bit_stillImageFilmEmbed:  	BitStillImageFilmEmbed format2 CL NL* ( bitElem NL*)+ ;
bit_websiteLink:	      	BitWebsiteLink format2 CL NL* ( bitElem NL*)+ ;
bit_document:	      		BitDocument format2 CL NL* ( bitElem NL*)+ ;
bit_documentLink:     		BitDocumentLink format2 CL NL* ( bitElem NL*)+ ;
bit_documentEmbed:    		BitDocumentEmbed format2 CL NL* ( bitElem NL*)+ ;
bit_documentDownload: 		BitDocumentDownload format2 CL NL* ( bitElem NL*)+ ;
bit_appLink:	      		BitAppLink format2 CL NL* ( bitElem NL*)+ ;
bit_editorial:	      		BitEditorial format2 CL NL* ( bitElem NL*)+ ;

book_frontispiece:	       BitBookFrontispiece format CL NL* ( bitElem NL* )+ ;
book_title:	       	       BitBookTitle format CL NL* ( bitElem NL* )+ ;
book_copyright:	       	       BitBookCopyright format CL NL* ( bitElem NL* )+ ;
book_dedication:	       BitBookDedication format CL NL* ( bitElem NL* )+ ;
book_forword:		       BitBookForword format CL NL* ( bitElem NL* )+ ;
book_preface:		       BitBookPreface format CL NL* ( bitElem NL* )+ ;
book_prologue:		       BitBookPrologue format CL NL* ( bitElem NL* )+ ;
book_epilogue:		       BitBookEpilogue format CL NL* ( bitElem NL* )+ ;
book_introduction:	       BitBookIntroduction format CL NL* ( bitElem NL* )+ ;
book_inciting_incident:	       BitBookIncitingIncident format CL NL* ( bitElem NL* )+ ;
book_conclusion:	       BitBookConclusion format CL NL* ( bitElem NL* )+ ;
book_afterword:	       	       BitBookAfterword format CL NL* ( bitElem NL* )+ ;
book_postscript: 	       BitBookPostscript format CL NL* ( bitElem NL* )+ ;
book_appendix:		       BitBookappendix format CL NL* ( bitElem NL* )+ ;
book_addendum:		       BitBookAddendum format CL NL* ( bitElem NL* )+ ;
book_acknowledgments:	       BitBookAcknowledgments format CL NL* ( bitElem NL* )+ ;
book_list_of_contributors:     BitBookListOfContributors format CL NL* ( bitElem NL* )+ ;
book_bibliography:	       BitBookBibliography format CL NL* ( bitElem NL* )+ ;
book_reference_list:	       BitBookReferenceList format CL NL* ( bitElem NL* )+ ;
book_endnotes:		       BitBookEndnotes format CL NL* ( bitElem NL* )+ ;
book_notes:		       BitBookNotes format CL NL* ( bitElem NL* )+ ;
book_copyright_permissions:   BitBookCopyrightPermissions format CL NL* ( bitElem NL* )+ ;
book_teaser:		       BitBookTeaser format CL NL* ( bitElem NL* )+ ;
book_auther_bio: 	       BitBookAutherBio format CL NL* ( bitElem NL* )+ ;
book_request_for_a_book_review: BitBookRequestForABookReview format CL NL* ( bitElem NL* )+ ;
book_coming_soon:	       BitBookComingSoon format CL NL* ( bitElem NL* )+ ;
book_read_more:		       BitBookReadMore format CL NL* ( bitElem NL* )+ ;
book_summary:		       BitBookSummary format CL NL* ( bitElem NL* )+ ;
book_epigraph:		       BitBookEpigraph format CL NL* ( bitElem NL* )+ ;

code:			       BitCode format CL NL* ( bitElem NL* )+ ;
card1:			       BitCard1 format CL NL* ( bitElem NL* )+ ;
question1:		       BitQuestion1 format CL NL* ( bitElem NL* )+ ;


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
