// Generated from antlr/bitmark.g4 by ANTLR 4.8
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete generic visitor for a parse tree produced by bitmarkParser.

function bitmarkVisitor() {
	antlr4.tree.ParseTreeVisitor.call(this);
	return this;
}

bitmarkVisitor.prototype = Object.create(antlr4.tree.ParseTreeVisitor.prototype);
bitmarkVisitor.prototype.constructor = bitmarkVisitor;

// Visit a parse tree produced by bitmarkParser#bitmark.
bitmarkVisitor.prototype.visitBitmark = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by bitmarkParser#bitmark_.
bitmarkVisitor.prototype.visitBitmark_ = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by bitmarkParser#bit.
bitmarkVisitor.prototype.visitBit = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by bitmarkParser#book.
bitmarkVisitor.prototype.visitBook = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by bitmarkParser#chapter.
bitmarkVisitor.prototype.visitChapter = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by bitmarkParser#title.
bitmarkVisitor.prototype.visitTitle = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by bitmarkParser#subtitle.
bitmarkVisitor.prototype.visitSubtitle = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by bitmarkParser#progress.
bitmarkVisitor.prototype.visitProgress = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by bitmarkParser#toc.
bitmarkVisitor.prototype.visitToc = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by bitmarkParser#summary.
bitmarkVisitor.prototype.visitSummary = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by bitmarkParser#internal_link.
bitmarkVisitor.prototype.visitInternal_link = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by bitmarkParser#bit_alias.
bitmarkVisitor.prototype.visitBit_alias = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by bitmarkParser#title_etc.
bitmarkVisitor.prototype.visitTitle_etc = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by bitmarkParser#group_born.
bitmarkVisitor.prototype.visitGroup_born = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by bitmarkParser#group_died.
bitmarkVisitor.prototype.visitGroup_died = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by bitmarkParser#cloze.
bitmarkVisitor.prototype.visitCloze = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by bitmarkParser#bitElem.
bitmarkVisitor.prototype.visitBitElem = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by bitmarkParser#cloze_instruction_grouped.
bitmarkVisitor.prototype.visitCloze_instruction_grouped = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by bitmarkParser#cloze_solution_grouped.
bitmarkVisitor.prototype.visitCloze_solution_grouped = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by bitmarkParser#gap.
bitmarkVisitor.prototype.visitGap = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by bitmarkParser#single_gap.
bitmarkVisitor.prototype.visitSingle_gap = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by bitmarkParser#instruction.
bitmarkVisitor.prototype.visitInstruction = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by bitmarkParser#hint.
bitmarkVisitor.prototype.visitHint = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by bitmarkParser#choices.
bitmarkVisitor.prototype.visitChoices = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by bitmarkParser#choice_plus.
bitmarkVisitor.prototype.visitChoice_plus = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by bitmarkParser#choice_minus.
bitmarkVisitor.prototype.visitChoice_minus = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by bitmarkParser#choice_star.
bitmarkVisitor.prototype.visitChoice_star = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by bitmarkParser#multiple_choice_1.
bitmarkVisitor.prototype.visitMultiple_choice_1 = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by bitmarkParser#multiple_choice.
bitmarkVisitor.prototype.visitMultiple_choice = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by bitmarkParser#multiple_response_1.
bitmarkVisitor.prototype.visitMultiple_response_1 = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by bitmarkParser#multiple_response.
bitmarkVisitor.prototype.visitMultiple_response = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by bitmarkParser#multiple_choice_text.
bitmarkVisitor.prototype.visitMultiple_choice_text = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by bitmarkParser#headed_inline_choices.
bitmarkVisitor.prototype.visitHeaded_inline_choices = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by bitmarkParser#headed_choices.
bitmarkVisitor.prototype.visitHeaded_choices = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by bitmarkParser#choice_head.
bitmarkVisitor.prototype.visitChoice_head = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by bitmarkParser#inline_choices.
bitmarkVisitor.prototype.visitInline_choices = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by bitmarkParser#cloze_and_multiple_choice_text.
bitmarkVisitor.prototype.visitCloze_and_multiple_choice_text = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by bitmarkParser#essay.
bitmarkVisitor.prototype.visitEssay = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by bitmarkParser#article_attachment.
bitmarkVisitor.prototype.visitArticle_attachment = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by bitmarkParser#ml_example.
bitmarkVisitor.prototype.visitMl_example = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by bitmarkParser#example.
bitmarkVisitor.prototype.visitExample = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by bitmarkParser#interview.
bitmarkVisitor.prototype.visitInterview = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by bitmarkParser#interview_answer.
bitmarkVisitor.prototype.visitInterview_answer = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by bitmarkParser#longans.
bitmarkVisitor.prototype.visitLongans = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by bitmarkParser#shortans.
bitmarkVisitor.prototype.visitShortans = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by bitmarkParser#interview_instruction_grouped.
bitmarkVisitor.prototype.visitInterview_instruction_grouped = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by bitmarkParser#query.
bitmarkVisitor.prototype.visitQuery = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by bitmarkParser#answer.
bitmarkVisitor.prototype.visitAnswer = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by bitmarkParser#heading.
bitmarkVisitor.prototype.visitHeading = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by bitmarkParser#key_title.
bitmarkVisitor.prototype.visitKey_title = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by bitmarkParser#value_title.
bitmarkVisitor.prototype.visitValue_title = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by bitmarkParser#pair.
bitmarkVisitor.prototype.visitPair = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by bitmarkParser#pairs.
bitmarkVisitor.prototype.visitPairs = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by bitmarkParser#pair_image.
bitmarkVisitor.prototype.visitPair_image = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by bitmarkParser#pair_images.
bitmarkVisitor.prototype.visitPair_images = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by bitmarkParser#pair_audio.
bitmarkVisitor.prototype.visitPair_audio = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by bitmarkParser#pair_audios.
bitmarkVisitor.prototype.visitPair_audios = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by bitmarkParser#pquery.
bitmarkVisitor.prototype.visitPquery = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by bitmarkParser#panswer.
bitmarkVisitor.prototype.visitPanswer = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by bitmarkParser#pimagebit.
bitmarkVisitor.prototype.visitPimagebit = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by bitmarkParser#paudiobit.
bitmarkVisitor.prototype.visitPaudiobit = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by bitmarkParser#match_.
bitmarkVisitor.prototype.visitMatch_ = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by bitmarkParser#match_reverse.
bitmarkVisitor.prototype.visitMatch_reverse = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by bitmarkParser#match_picture.
bitmarkVisitor.prototype.visitMatch_picture = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by bitmarkParser#match_audio.
bitmarkVisitor.prototype.visitMatch_audio = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by bitmarkParser#match_solution_grouped.
bitmarkVisitor.prototype.visitMatch_solution_grouped = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by bitmarkParser#true_false_1.
bitmarkVisitor.prototype.visitTrue_false_1 = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by bitmarkParser#true_false.
bitmarkVisitor.prototype.visitTrue_false = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by bitmarkParser#bool_label.
bitmarkVisitor.prototype.visitBool_label = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by bitmarkParser#sequence.
bitmarkVisitor.prototype.visitSequence = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by bitmarkParser#correction.
bitmarkVisitor.prototype.visitCorrection = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by bitmarkParser#mark_.
bitmarkVisitor.prototype.visitMark_ = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by bitmarkParser#mark_text.
bitmarkVisitor.prototype.visitMark_text = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by bitmarkParser#mark_color.
bitmarkVisitor.prototype.visitMark_color = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by bitmarkParser#document_upload.
bitmarkVisitor.prototype.visitDocument_upload = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by bitmarkParser#take_picture.
bitmarkVisitor.prototype.visitTake_picture = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by bitmarkParser#record_audio.
bitmarkVisitor.prototype.visitRecord_audio = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by bitmarkParser#preparation_note.
bitmarkVisitor.prototype.visitPreparation_note = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by bitmarkParser#assignment.
bitmarkVisitor.prototype.visitAssignment = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by bitmarkParser#flashcard_1.
bitmarkVisitor.prototype.visitFlashcard_1 = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by bitmarkParser#flashcard.
bitmarkVisitor.prototype.visitFlashcard = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by bitmarkParser#sidex.
bitmarkVisitor.prototype.visitSidex = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by bitmarkParser#side.
bitmarkVisitor.prototype.visitSide = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by bitmarkParser#atdef.
bitmarkVisitor.prototype.visitAtdef = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by bitmarkParser#atdef_.
bitmarkVisitor.prototype.visitAtdef_ = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by bitmarkParser#article.
bitmarkVisitor.prototype.visitArticle = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by bitmarkParser#chat.
bitmarkVisitor.prototype.visitChat = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by bitmarkParser#initiator.
bitmarkVisitor.prototype.visitInitiator = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by bitmarkParser#partner.
bitmarkVisitor.prototype.visitPartner = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by bitmarkParser#name_text.
bitmarkVisitor.prototype.visitName_text = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by bitmarkParser#chat_initiator.
bitmarkVisitor.prototype.visitChat_initiator = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by bitmarkParser#chat_partner.
bitmarkVisitor.prototype.visitChat_partner = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by bitmarkParser#conversation.
bitmarkVisitor.prototype.visitConversation = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by bitmarkParser#bot_interview.
bitmarkVisitor.prototype.visitBot_interview = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by bitmarkParser#bot_choice.
bitmarkVisitor.prototype.visitBot_choice = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by bitmarkParser#self_assessment.
bitmarkVisitor.prototype.visitSelf_assessment = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by bitmarkParser#rating.
bitmarkVisitor.prototype.visitRating = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by bitmarkParser#bullet_item.
bitmarkVisitor.prototype.visitBullet_item = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by bitmarkParser#survey.
bitmarkVisitor.prototype.visitSurvey = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by bitmarkParser#survey_1.
bitmarkVisitor.prototype.visitSurvey_1 = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by bitmarkParser#survey_anonymous.
bitmarkVisitor.prototype.visitSurvey_anonymous = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by bitmarkParser#survey_anonymous_1.
bitmarkVisitor.prototype.visitSurvey_anonymous_1 = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by bitmarkParser#atpoint.
bitmarkVisitor.prototype.visitAtpoint = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by bitmarkParser#format.
bitmarkVisitor.prototype.visitFormat = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by bitmarkParser#image_format.
bitmarkVisitor.prototype.visitImage_format = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by bitmarkParser#image_type.
bitmarkVisitor.prototype.visitImage_type = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by bitmarkParser#audio_format.
bitmarkVisitor.prototype.visitAudio_format = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by bitmarkParser#audio_type.
bitmarkVisitor.prototype.visitAudio_type = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by bitmarkParser#video_format.
bitmarkVisitor.prototype.visitVideo_format = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by bitmarkParser#video_type.
bitmarkVisitor.prototype.visitVideo_type = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by bitmarkParser#article_format.
bitmarkVisitor.prototype.visitArticle_format = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by bitmarkParser#document_format.
bitmarkVisitor.prototype.visitDocument_format = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by bitmarkParser#app_format.
bitmarkVisitor.prototype.visitApp_format = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by bitmarkParser#imagebit.
bitmarkVisitor.prototype.visitImagebit = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by bitmarkParser#audiobit.
bitmarkVisitor.prototype.visitAudiobit = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by bitmarkParser#videobit.
bitmarkVisitor.prototype.visitVideobit = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by bitmarkParser#articlebit.
bitmarkVisitor.prototype.visitArticlebit = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by bitmarkParser#documentbit.
bitmarkVisitor.prototype.visitDocumentbit = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by bitmarkParser#appbit.
bitmarkVisitor.prototype.visitAppbit = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by bitmarkParser#telephone.
bitmarkVisitor.prototype.visitTelephone = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by bitmarkParser#resolution.
bitmarkVisitor.prototype.visitResolution = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by bitmarkParser#url.
bitmarkVisitor.prototype.visitUrl = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by bitmarkParser#lines.
bitmarkVisitor.prototype.visitLines = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by bitmarkParser#s_and_w.
bitmarkVisitor.prototype.visitS_and_w = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by bitmarkParser#anchor.
bitmarkVisitor.prototype.visitAnchor = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by bitmarkParser#alias.
bitmarkVisitor.prototype.visitAlias = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by bitmarkParser#item.
bitmarkVisitor.prototype.visitItem = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by bitmarkParser#bracket_escaped.
bitmarkVisitor.prototype.visitBracket_escaped = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by bitmarkParser#opbul.
bitmarkVisitor.prototype.visitOpbul = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by bitmarkParser#opescape.
bitmarkVisitor.prototype.visitOpescape = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by bitmarkParser#oprangle.
bitmarkVisitor.prototype.visitOprangle = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by bitmarkParser#opdangle.
bitmarkVisitor.prototype.visitOpdangle = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by bitmarkParser#opd.
bitmarkVisitor.prototype.visitOpd = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by bitmarkParser#opu.
bitmarkVisitor.prototype.visitOpu = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by bitmarkParser#opb.
bitmarkVisitor.prototype.visitOpb = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by bitmarkParser#opq.
bitmarkVisitor.prototype.visitOpq = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by bitmarkParser#opa.
bitmarkVisitor.prototype.visitOpa = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by bitmarkParser#opp.
bitmarkVisitor.prototype.visitOpp = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by bitmarkParser#opm.
bitmarkVisitor.prototype.visitOpm = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by bitmarkParser#ops.
bitmarkVisitor.prototype.visitOps = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by bitmarkParser#opr.
bitmarkVisitor.prototype.visitOpr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by bitmarkParser#opc.
bitmarkVisitor.prototype.visitOpc = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by bitmarkParser#op.
bitmarkVisitor.prototype.visitOp = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by bitmarkParser#cl.
bitmarkVisitor.prototype.visitCl = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by bitmarkParser#clnsp.
bitmarkVisitor.prototype.visitClnsp = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by bitmarkParser#nl.
bitmarkVisitor.prototype.visitNl = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by bitmarkParser#or.
bitmarkVisitor.prototype.visitOr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by bitmarkParser#eq.
bitmarkVisitor.prototype.visitEq = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by bitmarkParser#hspl.
bitmarkVisitor.prototype.visitHspl = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by bitmarkParser#sspl.
bitmarkVisitor.prototype.visitSspl = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by bitmarkParser#cloze_.
bitmarkVisitor.prototype.visitCloze_ = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by bitmarkParser#titlestar_.
bitmarkVisitor.prototype.visitTitlestar_ = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by bitmarkParser#ins_.
bitmarkVisitor.prototype.visitIns_ = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by bitmarkParser#del_.
bitmarkVisitor.prototype.visitDel_ = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by bitmarkParser#note_.
bitmarkVisitor.prototype.visitNote_ = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by bitmarkParser#remark_.
bitmarkVisitor.prototype.visitRemark_ = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by bitmarkParser#help_.
bitmarkVisitor.prototype.visitHelp_ = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by bitmarkParser#highlight_.
bitmarkVisitor.prototype.visitHighlight_ = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by bitmarkParser#annotate_.
bitmarkVisitor.prototype.visitAnnotate_ = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by bitmarkParser#annotate_image_.
bitmarkVisitor.prototype.visitAnnotate_image_ = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by bitmarkParser#listline_.
bitmarkVisitor.prototype.visitListline_ = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by bitmarkParser#numeric.
bitmarkVisitor.prototype.visitNumeric = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by bitmarkParser#string.
bitmarkVisitor.prototype.visitString = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by bitmarkParser#emoji.
bitmarkVisitor.prototype.visitEmoji = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by bitmarkParser#words.
bitmarkVisitor.prototype.visitWords = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by bitmarkParser#sp.
bitmarkVisitor.prototype.visitSp = function(ctx) {
  return this.visitChildren(ctx);
};



exports.bitmarkVisitor = bitmarkVisitor;