// Generated from ./typescript//bitmarkParser.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

import { BitmarkContext } from "./bitmarkParser";
import { Bitmark_Context } from "./bitmarkParser";
import { BitContext } from "./bitmarkParser";
import { BookContext } from "./bitmarkParser";
import { ChapterContext } from "./bitmarkParser";
import { TocContext } from "./bitmarkParser";
import { SummaryContext } from "./bitmarkParser";
import { Internal_linkContext } from "./bitmarkParser";
import { Bit_aliasContext } from "./bitmarkParser";
import { Title_etcContext } from "./bitmarkParser";
import { Group_bornContext } from "./bitmarkParser";
import { Group_diedContext } from "./bitmarkParser";
import { Learning_path_ltiContext } from "./bitmarkParser";
import { Learning_path_stepContext } from "./bitmarkParser";
import { Learning_path_bookContext } from "./bitmarkParser";
import { Learning_path_signContext } from "./bitmarkParser";
import { Learning_path_video_callContext } from "./bitmarkParser";
import { Learning_path_learning_goalContext } from "./bitmarkParser";
import { Learning_path_closingContext } from "./bitmarkParser";
import { Learning_path_feedbackContext } from "./bitmarkParser";
import { Learning_path_bot_trainingContext } from "./bitmarkParser";
import { Learning_path_external_linkContext } from "./bitmarkParser";
import { Learning_path_classroom_trainingContext } from "./bitmarkParser";
import { Learning_path_classroom_eventContext } from "./bitmarkParser";
import { Bot_action_sendContext } from "./bitmarkParser";
import { Bot_action_announceContext } from "./bitmarkParser";
import { Bot_action_saveContext } from "./bitmarkParser";
import { Bot_action_remindContext } from "./bitmarkParser";
import { BitElemContext } from "./bitmarkParser";
import { GapContext } from "./bitmarkParser";
import { Single_gapContext } from "./bitmarkParser";
import { Choice_plusContext } from "./bitmarkParser";
import { Choice_minusContext } from "./bitmarkParser";
import { Choice_starContext } from "./bitmarkParser";
import { EssayContext } from "./bitmarkParser";
import { Ml_exampleContext } from "./bitmarkParser";
import { PartansContext } from "./bitmarkParser";
import { ResourceContext } from "./bitmarkParser";
import { CorrectionContext } from "./bitmarkParser";
import { CorrsContext } from "./bitmarkParser";
import { Mark_Context } from "./bitmarkParser";
import { Mark_textContext } from "./bitmarkParser";
import { Mark_colorContext } from "./bitmarkParser";
import { Document_uploadContext } from "./bitmarkParser";
import { Take_pictureContext } from "./bitmarkParser";
import { Record_audioContext } from "./bitmarkParser";
import { Preparation_noteContext } from "./bitmarkParser";
import { AssignmentContext } from "./bitmarkParser";
import { ArticleContext } from "./bitmarkParser";
import { StatementContext } from "./bitmarkParser";
import { DetailsContext } from "./bitmarkParser";
import { ButtoncopytextContext } from "./bitmarkParser";
import { WbtcontinueContext } from "./bitmarkParser";
import { LearningpathdetailsContext } from "./bitmarkParser";
import { PageContext } from "./bitmarkParser";
import { NoteContext } from "./bitmarkParser";
import { InfoContext } from "./bitmarkParser";
import { WarningContext } from "./bitmarkParser";
import { RemarkContext } from "./bitmarkParser";
import { HelpContext } from "./bitmarkParser";
import { DangerContext } from "./bitmarkParser";
import { BugContext } from "./bitmarkParser";
import { SidenoteContext } from "./bitmarkParser";
import { StickynoteContext } from "./bitmarkParser";
import { QuoteContext } from "./bitmarkParser";
import { FootnoteContext } from "./bitmarkParser";
import { HintbitContext } from "./bitmarkParser";
import { ExamplebitContext } from "./bitmarkParser";
import { Vendor_padlet_embedContext } from "./bitmarkParser";
import { ScormContext } from "./bitmarkParser";
import { MessageContext } from "./bitmarkParser";
import { Bot_interviewContext } from "./bitmarkParser";
import { Bot_choiceContext } from "./bitmarkParser";
import { RatingContext } from "./bitmarkParser";
import { Bullet_itemContext } from "./bitmarkParser";
import { SurveyContext } from "./bitmarkParser";
import { Survey_1Context } from "./bitmarkParser";
import { Survey_anonymousContext } from "./bitmarkParser";
import { Survey_anonymous_1Context } from "./bitmarkParser";
import { Self_assessmentContext } from "./bitmarkParser";
import { Self_assess_s_and_wContext } from "./bitmarkParser";
import { AtpointContext } from "./bitmarkParser";
import { FormatContext } from "./bitmarkParser";
import { Resource_formatContext } from "./bitmarkParser";
import { Resource_format_extraContext } from "./bitmarkParser";
import { Image_formatContext } from "./bitmarkParser";
import { Video_formatContext } from "./bitmarkParser";
import { Article_formatContext } from "./bitmarkParser";
import { Document_formatContext } from "./bitmarkParser";
import { App_formatContext } from "./bitmarkParser";
import { Website_formatContext } from "./bitmarkParser";
import { Stillimagefilm_formatContext } from "./bitmarkParser";
import { Op_article_formatContext } from "./bitmarkParser";
import { Op_document_formatContext } from "./bitmarkParser";
import { Op_app_formatContext } from "./bitmarkParser";
import { Op_website_formatContext } from "./bitmarkParser";
import { Op_video_formatContext } from "./bitmarkParser";
import { Op_stillimagefilm_formatContext } from "./bitmarkParser";
import { ArticlebitContext } from "./bitmarkParser";
import { DocumentbitContext } from "./bitmarkParser";
import { WebsitebitContext } from "./bitmarkParser";
import { AppbitContext } from "./bitmarkParser";
import { StillimagefilmbitContext } from "./bitmarkParser";
import { Stillimg_oneContext } from "./bitmarkParser";
import { VideobitContext } from "./bitmarkParser";
import { Video_oneContext } from "./bitmarkParser";
import { ImagebitContext } from "./bitmarkParser";
import { Image_oneContext } from "./bitmarkParser";
import { Op_image_formatContext } from "./bitmarkParser";
import { Image_chainedContext } from "./bitmarkParser";
import { Image_chained4matchContext } from "./bitmarkParser";
import { AudiobitContext } from "./bitmarkParser";
import { Audio_oneContext } from "./bitmarkParser";
import { Audio_formatContext } from "./bitmarkParser";
import { Op_audio_formatContext } from "./bitmarkParser";
import { Resource_chainedContext } from "./bitmarkParser";
import { TelephoneContext } from "./bitmarkParser";
import { UrlContext } from "./bitmarkParser";
import { ItemContext } from "./bitmarkParser";
import { LeadContext } from "./bitmarkParser";
import { AnglerefContext } from "./bitmarkParser";
import { ExampleContext } from "./bitmarkParser";
import { Bracketed_textContext } from "./bitmarkParser";
import { ReferenceContext } from "./bitmarkParser";
import { ProgressContext } from "./bitmarkParser";
import { DatepropContext } from "./bitmarkParser";
import { Dateprop_chainedContext } from "./bitmarkParser";
import { InstructionContext } from "./bitmarkParser";
import { HintContext } from "./bitmarkParser";
import { TitleContext } from "./bitmarkParser";
import { Bool_labelContext } from "./bitmarkParser";
import { Progress_pointsContext } from "./bitmarkParser";
import { IstrackedContext } from "./bitmarkParser";
import { IsinfoonlyContext } from "./bitmarkParser";
import { AtdefContext } from "./bitmarkParser";
import { Atdef_Context } from "./bitmarkParser";
import { DollaransContext } from "./bitmarkParser";
import { AnchorContext } from "./bitmarkParser";
import { LinesContext } from "./bitmarkParser";
import { S_and_wContext } from "./bitmarkParser";
import { DclinesContext } from "./bitmarkParser";
import { Bracket_escapedContext } from "./bitmarkParser";
import { ClnspContext } from "./bitmarkParser";
import { SsplContext } from "./bitmarkParser";
import { WordsContext } from "./bitmarkParser";
import { SpContext } from "./bitmarkParser";
import { SentenceContext } from "./bitmarkParser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `bitmarkParser`.
 */
export interface bitmarkParserListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `bitmarkParser.bitmark`.
	 * @param ctx the parse tree
	 */
	enterBitmark?: (ctx: BitmarkContext) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.bitmark`.
	 * @param ctx the parse tree
	 */
	exitBitmark?: (ctx: BitmarkContext) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.bitmark_`.
	 * @param ctx the parse tree
	 */
	enterBitmark_?: (ctx: Bitmark_Context) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.bitmark_`.
	 * @param ctx the parse tree
	 */
	exitBitmark_?: (ctx: Bitmark_Context) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.bit`.
	 * @param ctx the parse tree
	 */
	enterBit?: (ctx: BitContext) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.bit`.
	 * @param ctx the parse tree
	 */
	exitBit?: (ctx: BitContext) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.book`.
	 * @param ctx the parse tree
	 */
	enterBook?: (ctx: BookContext) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.book`.
	 * @param ctx the parse tree
	 */
	exitBook?: (ctx: BookContext) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.chapter`.
	 * @param ctx the parse tree
	 */
	enterChapter?: (ctx: ChapterContext) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.chapter`.
	 * @param ctx the parse tree
	 */
	exitChapter?: (ctx: ChapterContext) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.toc`.
	 * @param ctx the parse tree
	 */
	enterToc?: (ctx: TocContext) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.toc`.
	 * @param ctx the parse tree
	 */
	exitToc?: (ctx: TocContext) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.summary`.
	 * @param ctx the parse tree
	 */
	enterSummary?: (ctx: SummaryContext) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.summary`.
	 * @param ctx the parse tree
	 */
	exitSummary?: (ctx: SummaryContext) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.internal_link`.
	 * @param ctx the parse tree
	 */
	enterInternal_link?: (ctx: Internal_linkContext) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.internal_link`.
	 * @param ctx the parse tree
	 */
	exitInternal_link?: (ctx: Internal_linkContext) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.bit_alias`.
	 * @param ctx the parse tree
	 */
	enterBit_alias?: (ctx: Bit_aliasContext) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.bit_alias`.
	 * @param ctx the parse tree
	 */
	exitBit_alias?: (ctx: Bit_aliasContext) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.title_etc`.
	 * @param ctx the parse tree
	 */
	enterTitle_etc?: (ctx: Title_etcContext) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.title_etc`.
	 * @param ctx the parse tree
	 */
	exitTitle_etc?: (ctx: Title_etcContext) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.group_born`.
	 * @param ctx the parse tree
	 */
	enterGroup_born?: (ctx: Group_bornContext) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.group_born`.
	 * @param ctx the parse tree
	 */
	exitGroup_born?: (ctx: Group_bornContext) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.group_died`.
	 * @param ctx the parse tree
	 */
	enterGroup_died?: (ctx: Group_diedContext) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.group_died`.
	 * @param ctx the parse tree
	 */
	exitGroup_died?: (ctx: Group_diedContext) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.learning_path_lti`.
	 * @param ctx the parse tree
	 */
	enterLearning_path_lti?: (ctx: Learning_path_ltiContext) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.learning_path_lti`.
	 * @param ctx the parse tree
	 */
	exitLearning_path_lti?: (ctx: Learning_path_ltiContext) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.learning_path_step`.
	 * @param ctx the parse tree
	 */
	enterLearning_path_step?: (ctx: Learning_path_stepContext) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.learning_path_step`.
	 * @param ctx the parse tree
	 */
	exitLearning_path_step?: (ctx: Learning_path_stepContext) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.learning_path_book`.
	 * @param ctx the parse tree
	 */
	enterLearning_path_book?: (ctx: Learning_path_bookContext) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.learning_path_book`.
	 * @param ctx the parse tree
	 */
	exitLearning_path_book?: (ctx: Learning_path_bookContext) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.learning_path_sign`.
	 * @param ctx the parse tree
	 */
	enterLearning_path_sign?: (ctx: Learning_path_signContext) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.learning_path_sign`.
	 * @param ctx the parse tree
	 */
	exitLearning_path_sign?: (ctx: Learning_path_signContext) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.learning_path_video_call`.
	 * @param ctx the parse tree
	 */
	enterLearning_path_video_call?: (ctx: Learning_path_video_callContext) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.learning_path_video_call`.
	 * @param ctx the parse tree
	 */
	exitLearning_path_video_call?: (ctx: Learning_path_video_callContext) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.learning_path_learning_goal`.
	 * @param ctx the parse tree
	 */
	enterLearning_path_learning_goal?: (ctx: Learning_path_learning_goalContext) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.learning_path_learning_goal`.
	 * @param ctx the parse tree
	 */
	exitLearning_path_learning_goal?: (ctx: Learning_path_learning_goalContext) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.learning_path_closing`.
	 * @param ctx the parse tree
	 */
	enterLearning_path_closing?: (ctx: Learning_path_closingContext) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.learning_path_closing`.
	 * @param ctx the parse tree
	 */
	exitLearning_path_closing?: (ctx: Learning_path_closingContext) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.learning_path_feedback`.
	 * @param ctx the parse tree
	 */
	enterLearning_path_feedback?: (ctx: Learning_path_feedbackContext) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.learning_path_feedback`.
	 * @param ctx the parse tree
	 */
	exitLearning_path_feedback?: (ctx: Learning_path_feedbackContext) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.learning_path_bot_training`.
	 * @param ctx the parse tree
	 */
	enterLearning_path_bot_training?: (ctx: Learning_path_bot_trainingContext) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.learning_path_bot_training`.
	 * @param ctx the parse tree
	 */
	exitLearning_path_bot_training?: (ctx: Learning_path_bot_trainingContext) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.learning_path_external_link`.
	 * @param ctx the parse tree
	 */
	enterLearning_path_external_link?: (ctx: Learning_path_external_linkContext) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.learning_path_external_link`.
	 * @param ctx the parse tree
	 */
	exitLearning_path_external_link?: (ctx: Learning_path_external_linkContext) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.learning_path_classroom_training`.
	 * @param ctx the parse tree
	 */
	enterLearning_path_classroom_training?: (ctx: Learning_path_classroom_trainingContext) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.learning_path_classroom_training`.
	 * @param ctx the parse tree
	 */
	exitLearning_path_classroom_training?: (ctx: Learning_path_classroom_trainingContext) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.learning_path_classroom_event`.
	 * @param ctx the parse tree
	 */
	enterLearning_path_classroom_event?: (ctx: Learning_path_classroom_eventContext) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.learning_path_classroom_event`.
	 * @param ctx the parse tree
	 */
	exitLearning_path_classroom_event?: (ctx: Learning_path_classroom_eventContext) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.bot_action_send`.
	 * @param ctx the parse tree
	 */
	enterBot_action_send?: (ctx: Bot_action_sendContext) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.bot_action_send`.
	 * @param ctx the parse tree
	 */
	exitBot_action_send?: (ctx: Bot_action_sendContext) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.bot_action_announce`.
	 * @param ctx the parse tree
	 */
	enterBot_action_announce?: (ctx: Bot_action_announceContext) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.bot_action_announce`.
	 * @param ctx the parse tree
	 */
	exitBot_action_announce?: (ctx: Bot_action_announceContext) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.bot_action_save`.
	 * @param ctx the parse tree
	 */
	enterBot_action_save?: (ctx: Bot_action_saveContext) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.bot_action_save`.
	 * @param ctx the parse tree
	 */
	exitBot_action_save?: (ctx: Bot_action_saveContext) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.bot_action_remind`.
	 * @param ctx the parse tree
	 */
	enterBot_action_remind?: (ctx: Bot_action_remindContext) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.bot_action_remind`.
	 * @param ctx the parse tree
	 */
	exitBot_action_remind?: (ctx: Bot_action_remindContext) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.bitElem`.
	 * @param ctx the parse tree
	 */
	enterBitElem?: (ctx: BitElemContext) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.bitElem`.
	 * @param ctx the parse tree
	 */
	exitBitElem?: (ctx: BitElemContext) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.gap`.
	 * @param ctx the parse tree
	 */
	enterGap?: (ctx: GapContext) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.gap`.
	 * @param ctx the parse tree
	 */
	exitGap?: (ctx: GapContext) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.single_gap`.
	 * @param ctx the parse tree
	 */
	enterSingle_gap?: (ctx: Single_gapContext) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.single_gap`.
	 * @param ctx the parse tree
	 */
	exitSingle_gap?: (ctx: Single_gapContext) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.choice_plus`.
	 * @param ctx the parse tree
	 */
	enterChoice_plus?: (ctx: Choice_plusContext) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.choice_plus`.
	 * @param ctx the parse tree
	 */
	exitChoice_plus?: (ctx: Choice_plusContext) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.choice_minus`.
	 * @param ctx the parse tree
	 */
	enterChoice_minus?: (ctx: Choice_minusContext) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.choice_minus`.
	 * @param ctx the parse tree
	 */
	exitChoice_minus?: (ctx: Choice_minusContext) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.choice_star`.
	 * @param ctx the parse tree
	 */
	enterChoice_star?: (ctx: Choice_starContext) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.choice_star`.
	 * @param ctx the parse tree
	 */
	exitChoice_star?: (ctx: Choice_starContext) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.essay`.
	 * @param ctx the parse tree
	 */
	enterEssay?: (ctx: EssayContext) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.essay`.
	 * @param ctx the parse tree
	 */
	exitEssay?: (ctx: EssayContext) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.ml_example`.
	 * @param ctx the parse tree
	 */
	enterMl_example?: (ctx: Ml_exampleContext) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.ml_example`.
	 * @param ctx the parse tree
	 */
	exitMl_example?: (ctx: Ml_exampleContext) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.partans`.
	 * @param ctx the parse tree
	 */
	enterPartans?: (ctx: PartansContext) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.partans`.
	 * @param ctx the parse tree
	 */
	exitPartans?: (ctx: PartansContext) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.resource`.
	 * @param ctx the parse tree
	 */
	enterResource?: (ctx: ResourceContext) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.resource`.
	 * @param ctx the parse tree
	 */
	exitResource?: (ctx: ResourceContext) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.correction`.
	 * @param ctx the parse tree
	 */
	enterCorrection?: (ctx: CorrectionContext) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.correction`.
	 * @param ctx the parse tree
	 */
	exitCorrection?: (ctx: CorrectionContext) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.corrs`.
	 * @param ctx the parse tree
	 */
	enterCorrs?: (ctx: CorrsContext) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.corrs`.
	 * @param ctx the parse tree
	 */
	exitCorrs?: (ctx: CorrsContext) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.mark_`.
	 * @param ctx the parse tree
	 */
	enterMark_?: (ctx: Mark_Context) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.mark_`.
	 * @param ctx the parse tree
	 */
	exitMark_?: (ctx: Mark_Context) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.mark_text`.
	 * @param ctx the parse tree
	 */
	enterMark_text?: (ctx: Mark_textContext) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.mark_text`.
	 * @param ctx the parse tree
	 */
	exitMark_text?: (ctx: Mark_textContext) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.mark_color`.
	 * @param ctx the parse tree
	 */
	enterMark_color?: (ctx: Mark_colorContext) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.mark_color`.
	 * @param ctx the parse tree
	 */
	exitMark_color?: (ctx: Mark_colorContext) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.document_upload`.
	 * @param ctx the parse tree
	 */
	enterDocument_upload?: (ctx: Document_uploadContext) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.document_upload`.
	 * @param ctx the parse tree
	 */
	exitDocument_upload?: (ctx: Document_uploadContext) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.take_picture`.
	 * @param ctx the parse tree
	 */
	enterTake_picture?: (ctx: Take_pictureContext) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.take_picture`.
	 * @param ctx the parse tree
	 */
	exitTake_picture?: (ctx: Take_pictureContext) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.record_audio`.
	 * @param ctx the parse tree
	 */
	enterRecord_audio?: (ctx: Record_audioContext) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.record_audio`.
	 * @param ctx the parse tree
	 */
	exitRecord_audio?: (ctx: Record_audioContext) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.preparation_note`.
	 * @param ctx the parse tree
	 */
	enterPreparation_note?: (ctx: Preparation_noteContext) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.preparation_note`.
	 * @param ctx the parse tree
	 */
	exitPreparation_note?: (ctx: Preparation_noteContext) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.assignment`.
	 * @param ctx the parse tree
	 */
	enterAssignment?: (ctx: AssignmentContext) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.assignment`.
	 * @param ctx the parse tree
	 */
	exitAssignment?: (ctx: AssignmentContext) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.article`.
	 * @param ctx the parse tree
	 */
	enterArticle?: (ctx: ArticleContext) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.article`.
	 * @param ctx the parse tree
	 */
	exitArticle?: (ctx: ArticleContext) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.statement`.
	 * @param ctx the parse tree
	 */
	enterStatement?: (ctx: StatementContext) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.statement`.
	 * @param ctx the parse tree
	 */
	exitStatement?: (ctx: StatementContext) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.details`.
	 * @param ctx the parse tree
	 */
	enterDetails?: (ctx: DetailsContext) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.details`.
	 * @param ctx the parse tree
	 */
	exitDetails?: (ctx: DetailsContext) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.buttoncopytext`.
	 * @param ctx the parse tree
	 */
	enterButtoncopytext?: (ctx: ButtoncopytextContext) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.buttoncopytext`.
	 * @param ctx the parse tree
	 */
	exitButtoncopytext?: (ctx: ButtoncopytextContext) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.wbtcontinue`.
	 * @param ctx the parse tree
	 */
	enterWbtcontinue?: (ctx: WbtcontinueContext) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.wbtcontinue`.
	 * @param ctx the parse tree
	 */
	exitWbtcontinue?: (ctx: WbtcontinueContext) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.learningpathdetails`.
	 * @param ctx the parse tree
	 */
	enterLearningpathdetails?: (ctx: LearningpathdetailsContext) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.learningpathdetails`.
	 * @param ctx the parse tree
	 */
	exitLearningpathdetails?: (ctx: LearningpathdetailsContext) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.page`.
	 * @param ctx the parse tree
	 */
	enterPage?: (ctx: PageContext) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.page`.
	 * @param ctx the parse tree
	 */
	exitPage?: (ctx: PageContext) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.note`.
	 * @param ctx the parse tree
	 */
	enterNote?: (ctx: NoteContext) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.note`.
	 * @param ctx the parse tree
	 */
	exitNote?: (ctx: NoteContext) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.info`.
	 * @param ctx the parse tree
	 */
	enterInfo?: (ctx: InfoContext) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.info`.
	 * @param ctx the parse tree
	 */
	exitInfo?: (ctx: InfoContext) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.warning`.
	 * @param ctx the parse tree
	 */
	enterWarning?: (ctx: WarningContext) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.warning`.
	 * @param ctx the parse tree
	 */
	exitWarning?: (ctx: WarningContext) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.remark`.
	 * @param ctx the parse tree
	 */
	enterRemark?: (ctx: RemarkContext) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.remark`.
	 * @param ctx the parse tree
	 */
	exitRemark?: (ctx: RemarkContext) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.help`.
	 * @param ctx the parse tree
	 */
	enterHelp?: (ctx: HelpContext) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.help`.
	 * @param ctx the parse tree
	 */
	exitHelp?: (ctx: HelpContext) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.danger`.
	 * @param ctx the parse tree
	 */
	enterDanger?: (ctx: DangerContext) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.danger`.
	 * @param ctx the parse tree
	 */
	exitDanger?: (ctx: DangerContext) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.bug`.
	 * @param ctx the parse tree
	 */
	enterBug?: (ctx: BugContext) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.bug`.
	 * @param ctx the parse tree
	 */
	exitBug?: (ctx: BugContext) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.sidenote`.
	 * @param ctx the parse tree
	 */
	enterSidenote?: (ctx: SidenoteContext) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.sidenote`.
	 * @param ctx the parse tree
	 */
	exitSidenote?: (ctx: SidenoteContext) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.stickynote`.
	 * @param ctx the parse tree
	 */
	enterStickynote?: (ctx: StickynoteContext) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.stickynote`.
	 * @param ctx the parse tree
	 */
	exitStickynote?: (ctx: StickynoteContext) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.quote`.
	 * @param ctx the parse tree
	 */
	enterQuote?: (ctx: QuoteContext) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.quote`.
	 * @param ctx the parse tree
	 */
	exitQuote?: (ctx: QuoteContext) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.footnote`.
	 * @param ctx the parse tree
	 */
	enterFootnote?: (ctx: FootnoteContext) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.footnote`.
	 * @param ctx the parse tree
	 */
	exitFootnote?: (ctx: FootnoteContext) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.hintbit`.
	 * @param ctx the parse tree
	 */
	enterHintbit?: (ctx: HintbitContext) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.hintbit`.
	 * @param ctx the parse tree
	 */
	exitHintbit?: (ctx: HintbitContext) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.examplebit`.
	 * @param ctx the parse tree
	 */
	enterExamplebit?: (ctx: ExamplebitContext) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.examplebit`.
	 * @param ctx the parse tree
	 */
	exitExamplebit?: (ctx: ExamplebitContext) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.vendor_padlet_embed`.
	 * @param ctx the parse tree
	 */
	enterVendor_padlet_embed?: (ctx: Vendor_padlet_embedContext) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.vendor_padlet_embed`.
	 * @param ctx the parse tree
	 */
	exitVendor_padlet_embed?: (ctx: Vendor_padlet_embedContext) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.scorm`.
	 * @param ctx the parse tree
	 */
	enterScorm?: (ctx: ScormContext) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.scorm`.
	 * @param ctx the parse tree
	 */
	exitScorm?: (ctx: ScormContext) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.message`.
	 * @param ctx the parse tree
	 */
	enterMessage?: (ctx: MessageContext) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.message`.
	 * @param ctx the parse tree
	 */
	exitMessage?: (ctx: MessageContext) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.bot_interview`.
	 * @param ctx the parse tree
	 */
	enterBot_interview?: (ctx: Bot_interviewContext) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.bot_interview`.
	 * @param ctx the parse tree
	 */
	exitBot_interview?: (ctx: Bot_interviewContext) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.bot_choice`.
	 * @param ctx the parse tree
	 */
	enterBot_choice?: (ctx: Bot_choiceContext) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.bot_choice`.
	 * @param ctx the parse tree
	 */
	exitBot_choice?: (ctx: Bot_choiceContext) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.rating`.
	 * @param ctx the parse tree
	 */
	enterRating?: (ctx: RatingContext) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.rating`.
	 * @param ctx the parse tree
	 */
	exitRating?: (ctx: RatingContext) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.bullet_item`.
	 * @param ctx the parse tree
	 */
	enterBullet_item?: (ctx: Bullet_itemContext) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.bullet_item`.
	 * @param ctx the parse tree
	 */
	exitBullet_item?: (ctx: Bullet_itemContext) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.survey`.
	 * @param ctx the parse tree
	 */
	enterSurvey?: (ctx: SurveyContext) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.survey`.
	 * @param ctx the parse tree
	 */
	exitSurvey?: (ctx: SurveyContext) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.survey_1`.
	 * @param ctx the parse tree
	 */
	enterSurvey_1?: (ctx: Survey_1Context) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.survey_1`.
	 * @param ctx the parse tree
	 */
	exitSurvey_1?: (ctx: Survey_1Context) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.survey_anonymous`.
	 * @param ctx the parse tree
	 */
	enterSurvey_anonymous?: (ctx: Survey_anonymousContext) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.survey_anonymous`.
	 * @param ctx the parse tree
	 */
	exitSurvey_anonymous?: (ctx: Survey_anonymousContext) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.survey_anonymous_1`.
	 * @param ctx the parse tree
	 */
	enterSurvey_anonymous_1?: (ctx: Survey_anonymous_1Context) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.survey_anonymous_1`.
	 * @param ctx the parse tree
	 */
	exitSurvey_anonymous_1?: (ctx: Survey_anonymous_1Context) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.self_assessment`.
	 * @param ctx the parse tree
	 */
	enterSelf_assessment?: (ctx: Self_assessmentContext) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.self_assessment`.
	 * @param ctx the parse tree
	 */
	exitSelf_assessment?: (ctx: Self_assessmentContext) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.self_assess_s_and_w`.
	 * @param ctx the parse tree
	 */
	enterSelf_assess_s_and_w?: (ctx: Self_assess_s_and_wContext) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.self_assess_s_and_w`.
	 * @param ctx the parse tree
	 */
	exitSelf_assess_s_and_w?: (ctx: Self_assess_s_and_wContext) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.atpoint`.
	 * @param ctx the parse tree
	 */
	enterAtpoint?: (ctx: AtpointContext) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.atpoint`.
	 * @param ctx the parse tree
	 */
	exitAtpoint?: (ctx: AtpointContext) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.format`.
	 * @param ctx the parse tree
	 */
	enterFormat?: (ctx: FormatContext) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.format`.
	 * @param ctx the parse tree
	 */
	exitFormat?: (ctx: FormatContext) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.resource_format`.
	 * @param ctx the parse tree
	 */
	enterResource_format?: (ctx: Resource_formatContext) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.resource_format`.
	 * @param ctx the parse tree
	 */
	exitResource_format?: (ctx: Resource_formatContext) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.resource_format_extra`.
	 * @param ctx the parse tree
	 */
	enterResource_format_extra?: (ctx: Resource_format_extraContext) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.resource_format_extra`.
	 * @param ctx the parse tree
	 */
	exitResource_format_extra?: (ctx: Resource_format_extraContext) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.image_format`.
	 * @param ctx the parse tree
	 */
	enterImage_format?: (ctx: Image_formatContext) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.image_format`.
	 * @param ctx the parse tree
	 */
	exitImage_format?: (ctx: Image_formatContext) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.video_format`.
	 * @param ctx the parse tree
	 */
	enterVideo_format?: (ctx: Video_formatContext) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.video_format`.
	 * @param ctx the parse tree
	 */
	exitVideo_format?: (ctx: Video_formatContext) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.article_format`.
	 * @param ctx the parse tree
	 */
	enterArticle_format?: (ctx: Article_formatContext) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.article_format`.
	 * @param ctx the parse tree
	 */
	exitArticle_format?: (ctx: Article_formatContext) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.document_format`.
	 * @param ctx the parse tree
	 */
	enterDocument_format?: (ctx: Document_formatContext) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.document_format`.
	 * @param ctx the parse tree
	 */
	exitDocument_format?: (ctx: Document_formatContext) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.app_format`.
	 * @param ctx the parse tree
	 */
	enterApp_format?: (ctx: App_formatContext) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.app_format`.
	 * @param ctx the parse tree
	 */
	exitApp_format?: (ctx: App_formatContext) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.website_format`.
	 * @param ctx the parse tree
	 */
	enterWebsite_format?: (ctx: Website_formatContext) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.website_format`.
	 * @param ctx the parse tree
	 */
	exitWebsite_format?: (ctx: Website_formatContext) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.stillimagefilm_format`.
	 * @param ctx the parse tree
	 */
	enterStillimagefilm_format?: (ctx: Stillimagefilm_formatContext) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.stillimagefilm_format`.
	 * @param ctx the parse tree
	 */
	exitStillimagefilm_format?: (ctx: Stillimagefilm_formatContext) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.op_article_format`.
	 * @param ctx the parse tree
	 */
	enterOp_article_format?: (ctx: Op_article_formatContext) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.op_article_format`.
	 * @param ctx the parse tree
	 */
	exitOp_article_format?: (ctx: Op_article_formatContext) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.op_document_format`.
	 * @param ctx the parse tree
	 */
	enterOp_document_format?: (ctx: Op_document_formatContext) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.op_document_format`.
	 * @param ctx the parse tree
	 */
	exitOp_document_format?: (ctx: Op_document_formatContext) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.op_app_format`.
	 * @param ctx the parse tree
	 */
	enterOp_app_format?: (ctx: Op_app_formatContext) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.op_app_format`.
	 * @param ctx the parse tree
	 */
	exitOp_app_format?: (ctx: Op_app_formatContext) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.op_website_format`.
	 * @param ctx the parse tree
	 */
	enterOp_website_format?: (ctx: Op_website_formatContext) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.op_website_format`.
	 * @param ctx the parse tree
	 */
	exitOp_website_format?: (ctx: Op_website_formatContext) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.op_video_format`.
	 * @param ctx the parse tree
	 */
	enterOp_video_format?: (ctx: Op_video_formatContext) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.op_video_format`.
	 * @param ctx the parse tree
	 */
	exitOp_video_format?: (ctx: Op_video_formatContext) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.op_stillimagefilm_format`.
	 * @param ctx the parse tree
	 */
	enterOp_stillimagefilm_format?: (ctx: Op_stillimagefilm_formatContext) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.op_stillimagefilm_format`.
	 * @param ctx the parse tree
	 */
	exitOp_stillimagefilm_format?: (ctx: Op_stillimagefilm_formatContext) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.articlebit`.
	 * @param ctx the parse tree
	 */
	enterArticlebit?: (ctx: ArticlebitContext) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.articlebit`.
	 * @param ctx the parse tree
	 */
	exitArticlebit?: (ctx: ArticlebitContext) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.documentbit`.
	 * @param ctx the parse tree
	 */
	enterDocumentbit?: (ctx: DocumentbitContext) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.documentbit`.
	 * @param ctx the parse tree
	 */
	exitDocumentbit?: (ctx: DocumentbitContext) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.websitebit`.
	 * @param ctx the parse tree
	 */
	enterWebsitebit?: (ctx: WebsitebitContext) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.websitebit`.
	 * @param ctx the parse tree
	 */
	exitWebsitebit?: (ctx: WebsitebitContext) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.appbit`.
	 * @param ctx the parse tree
	 */
	enterAppbit?: (ctx: AppbitContext) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.appbit`.
	 * @param ctx the parse tree
	 */
	exitAppbit?: (ctx: AppbitContext) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.stillimagefilmbit`.
	 * @param ctx the parse tree
	 */
	enterStillimagefilmbit?: (ctx: StillimagefilmbitContext) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.stillimagefilmbit`.
	 * @param ctx the parse tree
	 */
	exitStillimagefilmbit?: (ctx: StillimagefilmbitContext) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.stillimg_one`.
	 * @param ctx the parse tree
	 */
	enterStillimg_one?: (ctx: Stillimg_oneContext) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.stillimg_one`.
	 * @param ctx the parse tree
	 */
	exitStillimg_one?: (ctx: Stillimg_oneContext) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.videobit`.
	 * @param ctx the parse tree
	 */
	enterVideobit?: (ctx: VideobitContext) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.videobit`.
	 * @param ctx the parse tree
	 */
	exitVideobit?: (ctx: VideobitContext) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.video_one`.
	 * @param ctx the parse tree
	 */
	enterVideo_one?: (ctx: Video_oneContext) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.video_one`.
	 * @param ctx the parse tree
	 */
	exitVideo_one?: (ctx: Video_oneContext) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.imagebit`.
	 * @param ctx the parse tree
	 */
	enterImagebit?: (ctx: ImagebitContext) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.imagebit`.
	 * @param ctx the parse tree
	 */
	exitImagebit?: (ctx: ImagebitContext) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.image_one`.
	 * @param ctx the parse tree
	 */
	enterImage_one?: (ctx: Image_oneContext) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.image_one`.
	 * @param ctx the parse tree
	 */
	exitImage_one?: (ctx: Image_oneContext) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.op_image_format`.
	 * @param ctx the parse tree
	 */
	enterOp_image_format?: (ctx: Op_image_formatContext) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.op_image_format`.
	 * @param ctx the parse tree
	 */
	exitOp_image_format?: (ctx: Op_image_formatContext) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.image_chained`.
	 * @param ctx the parse tree
	 */
	enterImage_chained?: (ctx: Image_chainedContext) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.image_chained`.
	 * @param ctx the parse tree
	 */
	exitImage_chained?: (ctx: Image_chainedContext) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.image_chained4match`.
	 * @param ctx the parse tree
	 */
	enterImage_chained4match?: (ctx: Image_chained4matchContext) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.image_chained4match`.
	 * @param ctx the parse tree
	 */
	exitImage_chained4match?: (ctx: Image_chained4matchContext) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.audiobit`.
	 * @param ctx the parse tree
	 */
	enterAudiobit?: (ctx: AudiobitContext) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.audiobit`.
	 * @param ctx the parse tree
	 */
	exitAudiobit?: (ctx: AudiobitContext) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.audio_one`.
	 * @param ctx the parse tree
	 */
	enterAudio_one?: (ctx: Audio_oneContext) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.audio_one`.
	 * @param ctx the parse tree
	 */
	exitAudio_one?: (ctx: Audio_oneContext) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.audio_format`.
	 * @param ctx the parse tree
	 */
	enterAudio_format?: (ctx: Audio_formatContext) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.audio_format`.
	 * @param ctx the parse tree
	 */
	exitAudio_format?: (ctx: Audio_formatContext) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.op_audio_format`.
	 * @param ctx the parse tree
	 */
	enterOp_audio_format?: (ctx: Op_audio_formatContext) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.op_audio_format`.
	 * @param ctx the parse tree
	 */
	exitOp_audio_format?: (ctx: Op_audio_formatContext) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.resource_chained`.
	 * @param ctx the parse tree
	 */
	enterResource_chained?: (ctx: Resource_chainedContext) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.resource_chained`.
	 * @param ctx the parse tree
	 */
	exitResource_chained?: (ctx: Resource_chainedContext) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.telephone`.
	 * @param ctx the parse tree
	 */
	enterTelephone?: (ctx: TelephoneContext) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.telephone`.
	 * @param ctx the parse tree
	 */
	exitTelephone?: (ctx: TelephoneContext) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.url`.
	 * @param ctx the parse tree
	 */
	enterUrl?: (ctx: UrlContext) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.url`.
	 * @param ctx the parse tree
	 */
	exitUrl?: (ctx: UrlContext) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.item`.
	 * @param ctx the parse tree
	 */
	enterItem?: (ctx: ItemContext) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.item`.
	 * @param ctx the parse tree
	 */
	exitItem?: (ctx: ItemContext) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.lead`.
	 * @param ctx the parse tree
	 */
	enterLead?: (ctx: LeadContext) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.lead`.
	 * @param ctx the parse tree
	 */
	exitLead?: (ctx: LeadContext) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.angleref`.
	 * @param ctx the parse tree
	 */
	enterAngleref?: (ctx: AnglerefContext) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.angleref`.
	 * @param ctx the parse tree
	 */
	exitAngleref?: (ctx: AnglerefContext) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.example`.
	 * @param ctx the parse tree
	 */
	enterExample?: (ctx: ExampleContext) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.example`.
	 * @param ctx the parse tree
	 */
	exitExample?: (ctx: ExampleContext) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.bracketed_text`.
	 * @param ctx the parse tree
	 */
	enterBracketed_text?: (ctx: Bracketed_textContext) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.bracketed_text`.
	 * @param ctx the parse tree
	 */
	exitBracketed_text?: (ctx: Bracketed_textContext) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.reference`.
	 * @param ctx the parse tree
	 */
	enterReference?: (ctx: ReferenceContext) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.reference`.
	 * @param ctx the parse tree
	 */
	exitReference?: (ctx: ReferenceContext) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.progress`.
	 * @param ctx the parse tree
	 */
	enterProgress?: (ctx: ProgressContext) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.progress`.
	 * @param ctx the parse tree
	 */
	exitProgress?: (ctx: ProgressContext) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.dateprop`.
	 * @param ctx the parse tree
	 */
	enterDateprop?: (ctx: DatepropContext) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.dateprop`.
	 * @param ctx the parse tree
	 */
	exitDateprop?: (ctx: DatepropContext) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.dateprop_chained`.
	 * @param ctx the parse tree
	 */
	enterDateprop_chained?: (ctx: Dateprop_chainedContext) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.dateprop_chained`.
	 * @param ctx the parse tree
	 */
	exitDateprop_chained?: (ctx: Dateprop_chainedContext) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.instruction`.
	 * @param ctx the parse tree
	 */
	enterInstruction?: (ctx: InstructionContext) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.instruction`.
	 * @param ctx the parse tree
	 */
	exitInstruction?: (ctx: InstructionContext) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.hint`.
	 * @param ctx the parse tree
	 */
	enterHint?: (ctx: HintContext) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.hint`.
	 * @param ctx the parse tree
	 */
	exitHint?: (ctx: HintContext) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.title`.
	 * @param ctx the parse tree
	 */
	enterTitle?: (ctx: TitleContext) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.title`.
	 * @param ctx the parse tree
	 */
	exitTitle?: (ctx: TitleContext) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.bool_label`.
	 * @param ctx the parse tree
	 */
	enterBool_label?: (ctx: Bool_labelContext) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.bool_label`.
	 * @param ctx the parse tree
	 */
	exitBool_label?: (ctx: Bool_labelContext) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.progress_points`.
	 * @param ctx the parse tree
	 */
	enterProgress_points?: (ctx: Progress_pointsContext) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.progress_points`.
	 * @param ctx the parse tree
	 */
	exitProgress_points?: (ctx: Progress_pointsContext) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.istracked`.
	 * @param ctx the parse tree
	 */
	enterIstracked?: (ctx: IstrackedContext) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.istracked`.
	 * @param ctx the parse tree
	 */
	exitIstracked?: (ctx: IstrackedContext) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.isinfoonly`.
	 * @param ctx the parse tree
	 */
	enterIsinfoonly?: (ctx: IsinfoonlyContext) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.isinfoonly`.
	 * @param ctx the parse tree
	 */
	exitIsinfoonly?: (ctx: IsinfoonlyContext) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.atdef`.
	 * @param ctx the parse tree
	 */
	enterAtdef?: (ctx: AtdefContext) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.atdef`.
	 * @param ctx the parse tree
	 */
	exitAtdef?: (ctx: AtdefContext) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.atdef_`.
	 * @param ctx the parse tree
	 */
	enterAtdef_?: (ctx: Atdef_Context) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.atdef_`.
	 * @param ctx the parse tree
	 */
	exitAtdef_?: (ctx: Atdef_Context) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.dollarans`.
	 * @param ctx the parse tree
	 */
	enterDollarans?: (ctx: DollaransContext) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.dollarans`.
	 * @param ctx the parse tree
	 */
	exitDollarans?: (ctx: DollaransContext) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.anchor`.
	 * @param ctx the parse tree
	 */
	enterAnchor?: (ctx: AnchorContext) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.anchor`.
	 * @param ctx the parse tree
	 */
	exitAnchor?: (ctx: AnchorContext) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.lines`.
	 * @param ctx the parse tree
	 */
	enterLines?: (ctx: LinesContext) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.lines`.
	 * @param ctx the parse tree
	 */
	exitLines?: (ctx: LinesContext) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.s_and_w`.
	 * @param ctx the parse tree
	 */
	enterS_and_w?: (ctx: S_and_wContext) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.s_and_w`.
	 * @param ctx the parse tree
	 */
	exitS_and_w?: (ctx: S_and_wContext) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.dclines`.
	 * @param ctx the parse tree
	 */
	enterDclines?: (ctx: DclinesContext) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.dclines`.
	 * @param ctx the parse tree
	 */
	exitDclines?: (ctx: DclinesContext) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.bracket_escaped`.
	 * @param ctx the parse tree
	 */
	enterBracket_escaped?: (ctx: Bracket_escapedContext) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.bracket_escaped`.
	 * @param ctx the parse tree
	 */
	exitBracket_escaped?: (ctx: Bracket_escapedContext) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.clnsp`.
	 * @param ctx the parse tree
	 */
	enterClnsp?: (ctx: ClnspContext) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.clnsp`.
	 * @param ctx the parse tree
	 */
	exitClnsp?: (ctx: ClnspContext) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.sspl`.
	 * @param ctx the parse tree
	 */
	enterSspl?: (ctx: SsplContext) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.sspl`.
	 * @param ctx the parse tree
	 */
	exitSspl?: (ctx: SsplContext) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.words`.
	 * @param ctx the parse tree
	 */
	enterWords?: (ctx: WordsContext) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.words`.
	 * @param ctx the parse tree
	 */
	exitWords?: (ctx: WordsContext) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.sp`.
	 * @param ctx the parse tree
	 */
	enterSp?: (ctx: SpContext) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.sp`.
	 * @param ctx the parse tree
	 */
	exitSp?: (ctx: SpContext) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.sentence`.
	 * @param ctx the parse tree
	 */
	enterSentence?: (ctx: SentenceContext) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.sentence`.
	 * @param ctx the parse tree
	 */
	exitSentence?: (ctx: SentenceContext) => void;
}

