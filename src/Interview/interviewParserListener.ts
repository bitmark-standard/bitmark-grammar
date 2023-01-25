// Generated from ./Interview/interviewParser.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

import { BitmarkContext } from "./interviewParser";
import { Bitmark_Context } from "./interviewParser";
import { InterviewsContext } from "./interviewParser";
import { InterviewContext } from "./interviewParser";
import { Interview_instruction_groupedContext } from "./interviewParser";
import { McrsepContext } from "./interviewParser";
import { Mcrsep_endContext } from "./interviewParser";
import { McrmiscContext } from "./interviewParser";
import { Interview_qandaContext } from "./interviewParser";
import { Interview_qanda__Context } from "./interviewParser";
import { Interview_sometextContext } from "./interviewParser";
import { Interview_textContext } from "./interviewParser";
import { Interview_answerContext } from "./interviewParser";
import { LongansContext } from "./interviewParser";
import { ShortansContext } from "./interviewParser";
import { PartansContext } from "./interviewParser";
import { Mark_textContext } from "./interviewParser";
import { QueryContext } from "./interviewParser";
import { AnswerContext } from "./interviewParser";
import { HeadingContext } from "./interviewParser";
import { Key_titleContext } from "./interviewParser";
import { Value_titleContext } from "./interviewParser";
import { Ml_exampleContext } from "./interviewParser";
import { BitElemContext } from "./interviewParser";
import { Interview_footerContext } from "./interviewParser";
import { Footer_resourceContext } from "./interviewParser";
import { Footer_textContext } from "./interviewParser";
import { GapContext } from "./interviewParser";
import { Single_gapContext } from "./interviewParser";
import { AtpointContext } from "./interviewParser";
import { FormatContext } from "./interviewParser";
import { Resource_formatContext } from "./interviewParser";
import { Resource_format_extraContext } from "./interviewParser";
import { Format2Context } from "./interviewParser";
import { Image_formatContext } from "./interviewParser";
import { Video_formatContext } from "./interviewParser";
import { Article_formatContext } from "./interviewParser";
import { Document_formatContext } from "./interviewParser";
import { App_formatContext } from "./interviewParser";
import { Website_formatContext } from "./interviewParser";
import { Stillimagefilm_formatContext } from "./interviewParser";
import { Op_article_formatContext } from "./interviewParser";
import { Op_document_formatContext } from "./interviewParser";
import { Op_app_formatContext } from "./interviewParser";
import { Op_website_formatContext } from "./interviewParser";
import { Op_video_formatContext } from "./interviewParser";
import { Op_stillimagefilm_formatContext } from "./interviewParser";
import { ArticlebitContext } from "./interviewParser";
import { DocumentbitContext } from "./interviewParser";
import { WebsitebitContext } from "./interviewParser";
import { AppbitContext } from "./interviewParser";
import { StillimagefilmbitContext } from "./interviewParser";
import { Stillimg_oneContext } from "./interviewParser";
import { VideobitContext } from "./interviewParser";
import { Video_oneContext } from "./interviewParser";
import { ImagebitContext } from "./interviewParser";
import { Image_oneContext } from "./interviewParser";
import { Op_image_formatContext } from "./interviewParser";
import { Image_chainedContext } from "./interviewParser";
import { Image_chained4matchContext } from "./interviewParser";
import { AudiobitContext } from "./interviewParser";
import { Audio_oneContext } from "./interviewParser";
import { Audio_formatContext } from "./interviewParser";
import { Op_audio_formatContext } from "./interviewParser";
import { Resource_chainedContext } from "./interviewParser";
import { TelephoneContext } from "./interviewParser";
import { UrlContext } from "./interviewParser";
import { ItemContext } from "./interviewParser";
import { LeadContext } from "./interviewParser";
import { AnglerefContext } from "./interviewParser";
import { ExampleContext } from "./interviewParser";
import { Bracketed_textContext } from "./interviewParser";
import { ReferenceContext } from "./interviewParser";
import { ProgressContext } from "./interviewParser";
import { DatepropContext } from "./interviewParser";
import { Dateprop_chainedContext } from "./interviewParser";
import { InstructionContext } from "./interviewParser";
import { HintContext } from "./interviewParser";
import { TitleContext } from "./interviewParser";
import { Bool_labelContext } from "./interviewParser";
import { Progress_pointsContext } from "./interviewParser";
import { IstrackedContext } from "./interviewParser";
import { IsinfoonlyContext } from "./interviewParser";
import { AtdefContext } from "./interviewParser";
import { Atdef_Context } from "./interviewParser";
import { DollaransContext } from "./interviewParser";
import { AnchorContext } from "./interviewParser";
import { DcolonContext } from "./interviewParser";
import { LinesContext } from "./interviewParser";
import { S_and_wContext } from "./interviewParser";
import { Bracket_escapedContext } from "./interviewParser";
import { ClnspContext } from "./interviewParser";
import { SsplContext } from "./interviewParser";
import { WordsContext } from "./interviewParser";
import { SpContext } from "./interviewParser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `interviewParser`.
 */
export interface interviewParserListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `interviewParser.bitmark`.
	 * @param ctx the parse tree
	 */
	enterBitmark?: (ctx: BitmarkContext) => void;
	/**
	 * Exit a parse tree produced by `interviewParser.bitmark`.
	 * @param ctx the parse tree
	 */
	exitBitmark?: (ctx: BitmarkContext) => void;

	/**
	 * Enter a parse tree produced by `interviewParser.bitmark_`.
	 * @param ctx the parse tree
	 */
	enterBitmark_?: (ctx: Bitmark_Context) => void;
	/**
	 * Exit a parse tree produced by `interviewParser.bitmark_`.
	 * @param ctx the parse tree
	 */
	exitBitmark_?: (ctx: Bitmark_Context) => void;

	/**
	 * Enter a parse tree produced by `interviewParser.interviews`.
	 * @param ctx the parse tree
	 */
	enterInterviews?: (ctx: InterviewsContext) => void;
	/**
	 * Exit a parse tree produced by `interviewParser.interviews`.
	 * @param ctx the parse tree
	 */
	exitInterviews?: (ctx: InterviewsContext) => void;

	/**
	 * Enter a parse tree produced by `interviewParser.interview`.
	 * @param ctx the parse tree
	 */
	enterInterview?: (ctx: InterviewContext) => void;
	/**
	 * Exit a parse tree produced by `interviewParser.interview`.
	 * @param ctx the parse tree
	 */
	exitInterview?: (ctx: InterviewContext) => void;

	/**
	 * Enter a parse tree produced by `interviewParser.interview_instruction_grouped`.
	 * @param ctx the parse tree
	 */
	enterInterview_instruction_grouped?: (ctx: Interview_instruction_groupedContext) => void;
	/**
	 * Exit a parse tree produced by `interviewParser.interview_instruction_grouped`.
	 * @param ctx the parse tree
	 */
	exitInterview_instruction_grouped?: (ctx: Interview_instruction_groupedContext) => void;

	/**
	 * Enter a parse tree produced by `interviewParser.mcrsep`.
	 * @param ctx the parse tree
	 */
	enterMcrsep?: (ctx: McrsepContext) => void;
	/**
	 * Exit a parse tree produced by `interviewParser.mcrsep`.
	 * @param ctx the parse tree
	 */
	exitMcrsep?: (ctx: McrsepContext) => void;

	/**
	 * Enter a parse tree produced by `interviewParser.mcrsep_end`.
	 * @param ctx the parse tree
	 */
	enterMcrsep_end?: (ctx: Mcrsep_endContext) => void;
	/**
	 * Exit a parse tree produced by `interviewParser.mcrsep_end`.
	 * @param ctx the parse tree
	 */
	exitMcrsep_end?: (ctx: Mcrsep_endContext) => void;

	/**
	 * Enter a parse tree produced by `interviewParser.mcrmisc`.
	 * @param ctx the parse tree
	 */
	enterMcrmisc?: (ctx: McrmiscContext) => void;
	/**
	 * Exit a parse tree produced by `interviewParser.mcrmisc`.
	 * @param ctx the parse tree
	 */
	exitMcrmisc?: (ctx: McrmiscContext) => void;

	/**
	 * Enter a parse tree produced by `interviewParser.interview_qanda`.
	 * @param ctx the parse tree
	 */
	enterInterview_qanda?: (ctx: Interview_qandaContext) => void;
	/**
	 * Exit a parse tree produced by `interviewParser.interview_qanda`.
	 * @param ctx the parse tree
	 */
	exitInterview_qanda?: (ctx: Interview_qandaContext) => void;

	/**
	 * Enter a parse tree produced by `interviewParser.interview_qanda__`.
	 * @param ctx the parse tree
	 */
	enterInterview_qanda__?: (ctx: Interview_qanda__Context) => void;
	/**
	 * Exit a parse tree produced by `interviewParser.interview_qanda__`.
	 * @param ctx the parse tree
	 */
	exitInterview_qanda__?: (ctx: Interview_qanda__Context) => void;

	/**
	 * Enter a parse tree produced by `interviewParser.interview_sometext`.
	 * @param ctx the parse tree
	 */
	enterInterview_sometext?: (ctx: Interview_sometextContext) => void;
	/**
	 * Exit a parse tree produced by `interviewParser.interview_sometext`.
	 * @param ctx the parse tree
	 */
	exitInterview_sometext?: (ctx: Interview_sometextContext) => void;

	/**
	 * Enter a parse tree produced by `interviewParser.interview_text`.
	 * @param ctx the parse tree
	 */
	enterInterview_text?: (ctx: Interview_textContext) => void;
	/**
	 * Exit a parse tree produced by `interviewParser.interview_text`.
	 * @param ctx the parse tree
	 */
	exitInterview_text?: (ctx: Interview_textContext) => void;

	/**
	 * Enter a parse tree produced by `interviewParser.interview_answer`.
	 * @param ctx the parse tree
	 */
	enterInterview_answer?: (ctx: Interview_answerContext) => void;
	/**
	 * Exit a parse tree produced by `interviewParser.interview_answer`.
	 * @param ctx the parse tree
	 */
	exitInterview_answer?: (ctx: Interview_answerContext) => void;

	/**
	 * Enter a parse tree produced by `interviewParser.longans`.
	 * @param ctx the parse tree
	 */
	enterLongans?: (ctx: LongansContext) => void;
	/**
	 * Exit a parse tree produced by `interviewParser.longans`.
	 * @param ctx the parse tree
	 */
	exitLongans?: (ctx: LongansContext) => void;

	/**
	 * Enter a parse tree produced by `interviewParser.shortans`.
	 * @param ctx the parse tree
	 */
	enterShortans?: (ctx: ShortansContext) => void;
	/**
	 * Exit a parse tree produced by `interviewParser.shortans`.
	 * @param ctx the parse tree
	 */
	exitShortans?: (ctx: ShortansContext) => void;

	/**
	 * Enter a parse tree produced by `interviewParser.partans`.
	 * @param ctx the parse tree
	 */
	enterPartans?: (ctx: PartansContext) => void;
	/**
	 * Exit a parse tree produced by `interviewParser.partans`.
	 * @param ctx the parse tree
	 */
	exitPartans?: (ctx: PartansContext) => void;

	/**
	 * Enter a parse tree produced by `interviewParser.mark_text`.
	 * @param ctx the parse tree
	 */
	enterMark_text?: (ctx: Mark_textContext) => void;
	/**
	 * Exit a parse tree produced by `interviewParser.mark_text`.
	 * @param ctx the parse tree
	 */
	exitMark_text?: (ctx: Mark_textContext) => void;

	/**
	 * Enter a parse tree produced by `interviewParser.query`.
	 * @param ctx the parse tree
	 */
	enterQuery?: (ctx: QueryContext) => void;
	/**
	 * Exit a parse tree produced by `interviewParser.query`.
	 * @param ctx the parse tree
	 */
	exitQuery?: (ctx: QueryContext) => void;

	/**
	 * Enter a parse tree produced by `interviewParser.answer`.
	 * @param ctx the parse tree
	 */
	enterAnswer?: (ctx: AnswerContext) => void;
	/**
	 * Exit a parse tree produced by `interviewParser.answer`.
	 * @param ctx the parse tree
	 */
	exitAnswer?: (ctx: AnswerContext) => void;

	/**
	 * Enter a parse tree produced by `interviewParser.heading`.
	 * @param ctx the parse tree
	 */
	enterHeading?: (ctx: HeadingContext) => void;
	/**
	 * Exit a parse tree produced by `interviewParser.heading`.
	 * @param ctx the parse tree
	 */
	exitHeading?: (ctx: HeadingContext) => void;

	/**
	 * Enter a parse tree produced by `interviewParser.key_title`.
	 * @param ctx the parse tree
	 */
	enterKey_title?: (ctx: Key_titleContext) => void;
	/**
	 * Exit a parse tree produced by `interviewParser.key_title`.
	 * @param ctx the parse tree
	 */
	exitKey_title?: (ctx: Key_titleContext) => void;

	/**
	 * Enter a parse tree produced by `interviewParser.value_title`.
	 * @param ctx the parse tree
	 */
	enterValue_title?: (ctx: Value_titleContext) => void;
	/**
	 * Exit a parse tree produced by `interviewParser.value_title`.
	 * @param ctx the parse tree
	 */
	exitValue_title?: (ctx: Value_titleContext) => void;

	/**
	 * Enter a parse tree produced by `interviewParser.ml_example`.
	 * @param ctx the parse tree
	 */
	enterMl_example?: (ctx: Ml_exampleContext) => void;
	/**
	 * Exit a parse tree produced by `interviewParser.ml_example`.
	 * @param ctx the parse tree
	 */
	exitMl_example?: (ctx: Ml_exampleContext) => void;

	/**
	 * Enter a parse tree produced by `interviewParser.bitElem`.
	 * @param ctx the parse tree
	 */
	enterBitElem?: (ctx: BitElemContext) => void;
	/**
	 * Exit a parse tree produced by `interviewParser.bitElem`.
	 * @param ctx the parse tree
	 */
	exitBitElem?: (ctx: BitElemContext) => void;

	/**
	 * Enter a parse tree produced by `interviewParser.interview_footer`.
	 * @param ctx the parse tree
	 */
	enterInterview_footer?: (ctx: Interview_footerContext) => void;
	/**
	 * Exit a parse tree produced by `interviewParser.interview_footer`.
	 * @param ctx the parse tree
	 */
	exitInterview_footer?: (ctx: Interview_footerContext) => void;

	/**
	 * Enter a parse tree produced by `interviewParser.footer_resource`.
	 * @param ctx the parse tree
	 */
	enterFooter_resource?: (ctx: Footer_resourceContext) => void;
	/**
	 * Exit a parse tree produced by `interviewParser.footer_resource`.
	 * @param ctx the parse tree
	 */
	exitFooter_resource?: (ctx: Footer_resourceContext) => void;

	/**
	 * Enter a parse tree produced by `interviewParser.footer_text`.
	 * @param ctx the parse tree
	 */
	enterFooter_text?: (ctx: Footer_textContext) => void;
	/**
	 * Exit a parse tree produced by `interviewParser.footer_text`.
	 * @param ctx the parse tree
	 */
	exitFooter_text?: (ctx: Footer_textContext) => void;

	/**
	 * Enter a parse tree produced by `interviewParser.gap`.
	 * @param ctx the parse tree
	 */
	enterGap?: (ctx: GapContext) => void;
	/**
	 * Exit a parse tree produced by `interviewParser.gap`.
	 * @param ctx the parse tree
	 */
	exitGap?: (ctx: GapContext) => void;

	/**
	 * Enter a parse tree produced by `interviewParser.single_gap`.
	 * @param ctx the parse tree
	 */
	enterSingle_gap?: (ctx: Single_gapContext) => void;
	/**
	 * Exit a parse tree produced by `interviewParser.single_gap`.
	 * @param ctx the parse tree
	 */
	exitSingle_gap?: (ctx: Single_gapContext) => void;

	/**
	 * Enter a parse tree produced by `interviewParser.atpoint`.
	 * @param ctx the parse tree
	 */
	enterAtpoint?: (ctx: AtpointContext) => void;
	/**
	 * Exit a parse tree produced by `interviewParser.atpoint`.
	 * @param ctx the parse tree
	 */
	exitAtpoint?: (ctx: AtpointContext) => void;

	/**
	 * Enter a parse tree produced by `interviewParser.format`.
	 * @param ctx the parse tree
	 */
	enterFormat?: (ctx: FormatContext) => void;
	/**
	 * Exit a parse tree produced by `interviewParser.format`.
	 * @param ctx the parse tree
	 */
	exitFormat?: (ctx: FormatContext) => void;

	/**
	 * Enter a parse tree produced by `interviewParser.resource_format`.
	 * @param ctx the parse tree
	 */
	enterResource_format?: (ctx: Resource_formatContext) => void;
	/**
	 * Exit a parse tree produced by `interviewParser.resource_format`.
	 * @param ctx the parse tree
	 */
	exitResource_format?: (ctx: Resource_formatContext) => void;

	/**
	 * Enter a parse tree produced by `interviewParser.resource_format_extra`.
	 * @param ctx the parse tree
	 */
	enterResource_format_extra?: (ctx: Resource_format_extraContext) => void;
	/**
	 * Exit a parse tree produced by `interviewParser.resource_format_extra`.
	 * @param ctx the parse tree
	 */
	exitResource_format_extra?: (ctx: Resource_format_extraContext) => void;

	/**
	 * Enter a parse tree produced by `interviewParser.format2`.
	 * @param ctx the parse tree
	 */
	enterFormat2?: (ctx: Format2Context) => void;
	/**
	 * Exit a parse tree produced by `interviewParser.format2`.
	 * @param ctx the parse tree
	 */
	exitFormat2?: (ctx: Format2Context) => void;

	/**
	 * Enter a parse tree produced by `interviewParser.image_format`.
	 * @param ctx the parse tree
	 */
	enterImage_format?: (ctx: Image_formatContext) => void;
	/**
	 * Exit a parse tree produced by `interviewParser.image_format`.
	 * @param ctx the parse tree
	 */
	exitImage_format?: (ctx: Image_formatContext) => void;

	/**
	 * Enter a parse tree produced by `interviewParser.video_format`.
	 * @param ctx the parse tree
	 */
	enterVideo_format?: (ctx: Video_formatContext) => void;
	/**
	 * Exit a parse tree produced by `interviewParser.video_format`.
	 * @param ctx the parse tree
	 */
	exitVideo_format?: (ctx: Video_formatContext) => void;

	/**
	 * Enter a parse tree produced by `interviewParser.article_format`.
	 * @param ctx the parse tree
	 */
	enterArticle_format?: (ctx: Article_formatContext) => void;
	/**
	 * Exit a parse tree produced by `interviewParser.article_format`.
	 * @param ctx the parse tree
	 */
	exitArticle_format?: (ctx: Article_formatContext) => void;

	/**
	 * Enter a parse tree produced by `interviewParser.document_format`.
	 * @param ctx the parse tree
	 */
	enterDocument_format?: (ctx: Document_formatContext) => void;
	/**
	 * Exit a parse tree produced by `interviewParser.document_format`.
	 * @param ctx the parse tree
	 */
	exitDocument_format?: (ctx: Document_formatContext) => void;

	/**
	 * Enter a parse tree produced by `interviewParser.app_format`.
	 * @param ctx the parse tree
	 */
	enterApp_format?: (ctx: App_formatContext) => void;
	/**
	 * Exit a parse tree produced by `interviewParser.app_format`.
	 * @param ctx the parse tree
	 */
	exitApp_format?: (ctx: App_formatContext) => void;

	/**
	 * Enter a parse tree produced by `interviewParser.website_format`.
	 * @param ctx the parse tree
	 */
	enterWebsite_format?: (ctx: Website_formatContext) => void;
	/**
	 * Exit a parse tree produced by `interviewParser.website_format`.
	 * @param ctx the parse tree
	 */
	exitWebsite_format?: (ctx: Website_formatContext) => void;

	/**
	 * Enter a parse tree produced by `interviewParser.stillimagefilm_format`.
	 * @param ctx the parse tree
	 */
	enterStillimagefilm_format?: (ctx: Stillimagefilm_formatContext) => void;
	/**
	 * Exit a parse tree produced by `interviewParser.stillimagefilm_format`.
	 * @param ctx the parse tree
	 */
	exitStillimagefilm_format?: (ctx: Stillimagefilm_formatContext) => void;

	/**
	 * Enter a parse tree produced by `interviewParser.op_article_format`.
	 * @param ctx the parse tree
	 */
	enterOp_article_format?: (ctx: Op_article_formatContext) => void;
	/**
	 * Exit a parse tree produced by `interviewParser.op_article_format`.
	 * @param ctx the parse tree
	 */
	exitOp_article_format?: (ctx: Op_article_formatContext) => void;

	/**
	 * Enter a parse tree produced by `interviewParser.op_document_format`.
	 * @param ctx the parse tree
	 */
	enterOp_document_format?: (ctx: Op_document_formatContext) => void;
	/**
	 * Exit a parse tree produced by `interviewParser.op_document_format`.
	 * @param ctx the parse tree
	 */
	exitOp_document_format?: (ctx: Op_document_formatContext) => void;

	/**
	 * Enter a parse tree produced by `interviewParser.op_app_format`.
	 * @param ctx the parse tree
	 */
	enterOp_app_format?: (ctx: Op_app_formatContext) => void;
	/**
	 * Exit a parse tree produced by `interviewParser.op_app_format`.
	 * @param ctx the parse tree
	 */
	exitOp_app_format?: (ctx: Op_app_formatContext) => void;

	/**
	 * Enter a parse tree produced by `interviewParser.op_website_format`.
	 * @param ctx the parse tree
	 */
	enterOp_website_format?: (ctx: Op_website_formatContext) => void;
	/**
	 * Exit a parse tree produced by `interviewParser.op_website_format`.
	 * @param ctx the parse tree
	 */
	exitOp_website_format?: (ctx: Op_website_formatContext) => void;

	/**
	 * Enter a parse tree produced by `interviewParser.op_video_format`.
	 * @param ctx the parse tree
	 */
	enterOp_video_format?: (ctx: Op_video_formatContext) => void;
	/**
	 * Exit a parse tree produced by `interviewParser.op_video_format`.
	 * @param ctx the parse tree
	 */
	exitOp_video_format?: (ctx: Op_video_formatContext) => void;

	/**
	 * Enter a parse tree produced by `interviewParser.op_stillimagefilm_format`.
	 * @param ctx the parse tree
	 */
	enterOp_stillimagefilm_format?: (ctx: Op_stillimagefilm_formatContext) => void;
	/**
	 * Exit a parse tree produced by `interviewParser.op_stillimagefilm_format`.
	 * @param ctx the parse tree
	 */
	exitOp_stillimagefilm_format?: (ctx: Op_stillimagefilm_formatContext) => void;

	/**
	 * Enter a parse tree produced by `interviewParser.articlebit`.
	 * @param ctx the parse tree
	 */
	enterArticlebit?: (ctx: ArticlebitContext) => void;
	/**
	 * Exit a parse tree produced by `interviewParser.articlebit`.
	 * @param ctx the parse tree
	 */
	exitArticlebit?: (ctx: ArticlebitContext) => void;

	/**
	 * Enter a parse tree produced by `interviewParser.documentbit`.
	 * @param ctx the parse tree
	 */
	enterDocumentbit?: (ctx: DocumentbitContext) => void;
	/**
	 * Exit a parse tree produced by `interviewParser.documentbit`.
	 * @param ctx the parse tree
	 */
	exitDocumentbit?: (ctx: DocumentbitContext) => void;

	/**
	 * Enter a parse tree produced by `interviewParser.websitebit`.
	 * @param ctx the parse tree
	 */
	enterWebsitebit?: (ctx: WebsitebitContext) => void;
	/**
	 * Exit a parse tree produced by `interviewParser.websitebit`.
	 * @param ctx the parse tree
	 */
	exitWebsitebit?: (ctx: WebsitebitContext) => void;

	/**
	 * Enter a parse tree produced by `interviewParser.appbit`.
	 * @param ctx the parse tree
	 */
	enterAppbit?: (ctx: AppbitContext) => void;
	/**
	 * Exit a parse tree produced by `interviewParser.appbit`.
	 * @param ctx the parse tree
	 */
	exitAppbit?: (ctx: AppbitContext) => void;

	/**
	 * Enter a parse tree produced by `interviewParser.stillimagefilmbit`.
	 * @param ctx the parse tree
	 */
	enterStillimagefilmbit?: (ctx: StillimagefilmbitContext) => void;
	/**
	 * Exit a parse tree produced by `interviewParser.stillimagefilmbit`.
	 * @param ctx the parse tree
	 */
	exitStillimagefilmbit?: (ctx: StillimagefilmbitContext) => void;

	/**
	 * Enter a parse tree produced by `interviewParser.stillimg_one`.
	 * @param ctx the parse tree
	 */
	enterStillimg_one?: (ctx: Stillimg_oneContext) => void;
	/**
	 * Exit a parse tree produced by `interviewParser.stillimg_one`.
	 * @param ctx the parse tree
	 */
	exitStillimg_one?: (ctx: Stillimg_oneContext) => void;

	/**
	 * Enter a parse tree produced by `interviewParser.videobit`.
	 * @param ctx the parse tree
	 */
	enterVideobit?: (ctx: VideobitContext) => void;
	/**
	 * Exit a parse tree produced by `interviewParser.videobit`.
	 * @param ctx the parse tree
	 */
	exitVideobit?: (ctx: VideobitContext) => void;

	/**
	 * Enter a parse tree produced by `interviewParser.video_one`.
	 * @param ctx the parse tree
	 */
	enterVideo_one?: (ctx: Video_oneContext) => void;
	/**
	 * Exit a parse tree produced by `interviewParser.video_one`.
	 * @param ctx the parse tree
	 */
	exitVideo_one?: (ctx: Video_oneContext) => void;

	/**
	 * Enter a parse tree produced by `interviewParser.imagebit`.
	 * @param ctx the parse tree
	 */
	enterImagebit?: (ctx: ImagebitContext) => void;
	/**
	 * Exit a parse tree produced by `interviewParser.imagebit`.
	 * @param ctx the parse tree
	 */
	exitImagebit?: (ctx: ImagebitContext) => void;

	/**
	 * Enter a parse tree produced by `interviewParser.image_one`.
	 * @param ctx the parse tree
	 */
	enterImage_one?: (ctx: Image_oneContext) => void;
	/**
	 * Exit a parse tree produced by `interviewParser.image_one`.
	 * @param ctx the parse tree
	 */
	exitImage_one?: (ctx: Image_oneContext) => void;

	/**
	 * Enter a parse tree produced by `interviewParser.op_image_format`.
	 * @param ctx the parse tree
	 */
	enterOp_image_format?: (ctx: Op_image_formatContext) => void;
	/**
	 * Exit a parse tree produced by `interviewParser.op_image_format`.
	 * @param ctx the parse tree
	 */
	exitOp_image_format?: (ctx: Op_image_formatContext) => void;

	/**
	 * Enter a parse tree produced by `interviewParser.image_chained`.
	 * @param ctx the parse tree
	 */
	enterImage_chained?: (ctx: Image_chainedContext) => void;
	/**
	 * Exit a parse tree produced by `interviewParser.image_chained`.
	 * @param ctx the parse tree
	 */
	exitImage_chained?: (ctx: Image_chainedContext) => void;

	/**
	 * Enter a parse tree produced by `interviewParser.image_chained4match`.
	 * @param ctx the parse tree
	 */
	enterImage_chained4match?: (ctx: Image_chained4matchContext) => void;
	/**
	 * Exit a parse tree produced by `interviewParser.image_chained4match`.
	 * @param ctx the parse tree
	 */
	exitImage_chained4match?: (ctx: Image_chained4matchContext) => void;

	/**
	 * Enter a parse tree produced by `interviewParser.audiobit`.
	 * @param ctx the parse tree
	 */
	enterAudiobit?: (ctx: AudiobitContext) => void;
	/**
	 * Exit a parse tree produced by `interviewParser.audiobit`.
	 * @param ctx the parse tree
	 */
	exitAudiobit?: (ctx: AudiobitContext) => void;

	/**
	 * Enter a parse tree produced by `interviewParser.audio_one`.
	 * @param ctx the parse tree
	 */
	enterAudio_one?: (ctx: Audio_oneContext) => void;
	/**
	 * Exit a parse tree produced by `interviewParser.audio_one`.
	 * @param ctx the parse tree
	 */
	exitAudio_one?: (ctx: Audio_oneContext) => void;

	/**
	 * Enter a parse tree produced by `interviewParser.audio_format`.
	 * @param ctx the parse tree
	 */
	enterAudio_format?: (ctx: Audio_formatContext) => void;
	/**
	 * Exit a parse tree produced by `interviewParser.audio_format`.
	 * @param ctx the parse tree
	 */
	exitAudio_format?: (ctx: Audio_formatContext) => void;

	/**
	 * Enter a parse tree produced by `interviewParser.op_audio_format`.
	 * @param ctx the parse tree
	 */
	enterOp_audio_format?: (ctx: Op_audio_formatContext) => void;
	/**
	 * Exit a parse tree produced by `interviewParser.op_audio_format`.
	 * @param ctx the parse tree
	 */
	exitOp_audio_format?: (ctx: Op_audio_formatContext) => void;

	/**
	 * Enter a parse tree produced by `interviewParser.resource_chained`.
	 * @param ctx the parse tree
	 */
	enterResource_chained?: (ctx: Resource_chainedContext) => void;
	/**
	 * Exit a parse tree produced by `interviewParser.resource_chained`.
	 * @param ctx the parse tree
	 */
	exitResource_chained?: (ctx: Resource_chainedContext) => void;

	/**
	 * Enter a parse tree produced by `interviewParser.telephone`.
	 * @param ctx the parse tree
	 */
	enterTelephone?: (ctx: TelephoneContext) => void;
	/**
	 * Exit a parse tree produced by `interviewParser.telephone`.
	 * @param ctx the parse tree
	 */
	exitTelephone?: (ctx: TelephoneContext) => void;

	/**
	 * Enter a parse tree produced by `interviewParser.url`.
	 * @param ctx the parse tree
	 */
	enterUrl?: (ctx: UrlContext) => void;
	/**
	 * Exit a parse tree produced by `interviewParser.url`.
	 * @param ctx the parse tree
	 */
	exitUrl?: (ctx: UrlContext) => void;

	/**
	 * Enter a parse tree produced by `interviewParser.item`.
	 * @param ctx the parse tree
	 */
	enterItem?: (ctx: ItemContext) => void;
	/**
	 * Exit a parse tree produced by `interviewParser.item`.
	 * @param ctx the parse tree
	 */
	exitItem?: (ctx: ItemContext) => void;

	/**
	 * Enter a parse tree produced by `interviewParser.lead`.
	 * @param ctx the parse tree
	 */
	enterLead?: (ctx: LeadContext) => void;
	/**
	 * Exit a parse tree produced by `interviewParser.lead`.
	 * @param ctx the parse tree
	 */
	exitLead?: (ctx: LeadContext) => void;

	/**
	 * Enter a parse tree produced by `interviewParser.angleref`.
	 * @param ctx the parse tree
	 */
	enterAngleref?: (ctx: AnglerefContext) => void;
	/**
	 * Exit a parse tree produced by `interviewParser.angleref`.
	 * @param ctx the parse tree
	 */
	exitAngleref?: (ctx: AnglerefContext) => void;

	/**
	 * Enter a parse tree produced by `interviewParser.example`.
	 * @param ctx the parse tree
	 */
	enterExample?: (ctx: ExampleContext) => void;
	/**
	 * Exit a parse tree produced by `interviewParser.example`.
	 * @param ctx the parse tree
	 */
	exitExample?: (ctx: ExampleContext) => void;

	/**
	 * Enter a parse tree produced by `interviewParser.bracketed_text`.
	 * @param ctx the parse tree
	 */
	enterBracketed_text?: (ctx: Bracketed_textContext) => void;
	/**
	 * Exit a parse tree produced by `interviewParser.bracketed_text`.
	 * @param ctx the parse tree
	 */
	exitBracketed_text?: (ctx: Bracketed_textContext) => void;

	/**
	 * Enter a parse tree produced by `interviewParser.reference`.
	 * @param ctx the parse tree
	 */
	enterReference?: (ctx: ReferenceContext) => void;
	/**
	 * Exit a parse tree produced by `interviewParser.reference`.
	 * @param ctx the parse tree
	 */
	exitReference?: (ctx: ReferenceContext) => void;

	/**
	 * Enter a parse tree produced by `interviewParser.progress`.
	 * @param ctx the parse tree
	 */
	enterProgress?: (ctx: ProgressContext) => void;
	/**
	 * Exit a parse tree produced by `interviewParser.progress`.
	 * @param ctx the parse tree
	 */
	exitProgress?: (ctx: ProgressContext) => void;

	/**
	 * Enter a parse tree produced by `interviewParser.dateprop`.
	 * @param ctx the parse tree
	 */
	enterDateprop?: (ctx: DatepropContext) => void;
	/**
	 * Exit a parse tree produced by `interviewParser.dateprop`.
	 * @param ctx the parse tree
	 */
	exitDateprop?: (ctx: DatepropContext) => void;

	/**
	 * Enter a parse tree produced by `interviewParser.dateprop_chained`.
	 * @param ctx the parse tree
	 */
	enterDateprop_chained?: (ctx: Dateprop_chainedContext) => void;
	/**
	 * Exit a parse tree produced by `interviewParser.dateprop_chained`.
	 * @param ctx the parse tree
	 */
	exitDateprop_chained?: (ctx: Dateprop_chainedContext) => void;

	/**
	 * Enter a parse tree produced by `interviewParser.instruction`.
	 * @param ctx the parse tree
	 */
	enterInstruction?: (ctx: InstructionContext) => void;
	/**
	 * Exit a parse tree produced by `interviewParser.instruction`.
	 * @param ctx the parse tree
	 */
	exitInstruction?: (ctx: InstructionContext) => void;

	/**
	 * Enter a parse tree produced by `interviewParser.hint`.
	 * @param ctx the parse tree
	 */
	enterHint?: (ctx: HintContext) => void;
	/**
	 * Exit a parse tree produced by `interviewParser.hint`.
	 * @param ctx the parse tree
	 */
	exitHint?: (ctx: HintContext) => void;

	/**
	 * Enter a parse tree produced by `interviewParser.title`.
	 * @param ctx the parse tree
	 */
	enterTitle?: (ctx: TitleContext) => void;
	/**
	 * Exit a parse tree produced by `interviewParser.title`.
	 * @param ctx the parse tree
	 */
	exitTitle?: (ctx: TitleContext) => void;

	/**
	 * Enter a parse tree produced by `interviewParser.bool_label`.
	 * @param ctx the parse tree
	 */
	enterBool_label?: (ctx: Bool_labelContext) => void;
	/**
	 * Exit a parse tree produced by `interviewParser.bool_label`.
	 * @param ctx the parse tree
	 */
	exitBool_label?: (ctx: Bool_labelContext) => void;

	/**
	 * Enter a parse tree produced by `interviewParser.progress_points`.
	 * @param ctx the parse tree
	 */
	enterProgress_points?: (ctx: Progress_pointsContext) => void;
	/**
	 * Exit a parse tree produced by `interviewParser.progress_points`.
	 * @param ctx the parse tree
	 */
	exitProgress_points?: (ctx: Progress_pointsContext) => void;

	/**
	 * Enter a parse tree produced by `interviewParser.istracked`.
	 * @param ctx the parse tree
	 */
	enterIstracked?: (ctx: IstrackedContext) => void;
	/**
	 * Exit a parse tree produced by `interviewParser.istracked`.
	 * @param ctx the parse tree
	 */
	exitIstracked?: (ctx: IstrackedContext) => void;

	/**
	 * Enter a parse tree produced by `interviewParser.isinfoonly`.
	 * @param ctx the parse tree
	 */
	enterIsinfoonly?: (ctx: IsinfoonlyContext) => void;
	/**
	 * Exit a parse tree produced by `interviewParser.isinfoonly`.
	 * @param ctx the parse tree
	 */
	exitIsinfoonly?: (ctx: IsinfoonlyContext) => void;

	/**
	 * Enter a parse tree produced by `interviewParser.atdef`.
	 * @param ctx the parse tree
	 */
	enterAtdef?: (ctx: AtdefContext) => void;
	/**
	 * Exit a parse tree produced by `interviewParser.atdef`.
	 * @param ctx the parse tree
	 */
	exitAtdef?: (ctx: AtdefContext) => void;

	/**
	 * Enter a parse tree produced by `interviewParser.atdef_`.
	 * @param ctx the parse tree
	 */
	enterAtdef_?: (ctx: Atdef_Context) => void;
	/**
	 * Exit a parse tree produced by `interviewParser.atdef_`.
	 * @param ctx the parse tree
	 */
	exitAtdef_?: (ctx: Atdef_Context) => void;

	/**
	 * Enter a parse tree produced by `interviewParser.dollarans`.
	 * @param ctx the parse tree
	 */
	enterDollarans?: (ctx: DollaransContext) => void;
	/**
	 * Exit a parse tree produced by `interviewParser.dollarans`.
	 * @param ctx the parse tree
	 */
	exitDollarans?: (ctx: DollaransContext) => void;

	/**
	 * Enter a parse tree produced by `interviewParser.anchor`.
	 * @param ctx the parse tree
	 */
	enterAnchor?: (ctx: AnchorContext) => void;
	/**
	 * Exit a parse tree produced by `interviewParser.anchor`.
	 * @param ctx the parse tree
	 */
	exitAnchor?: (ctx: AnchorContext) => void;

	/**
	 * Enter a parse tree produced by `interviewParser.dcolon`.
	 * @param ctx the parse tree
	 */
	enterDcolon?: (ctx: DcolonContext) => void;
	/**
	 * Exit a parse tree produced by `interviewParser.dcolon`.
	 * @param ctx the parse tree
	 */
	exitDcolon?: (ctx: DcolonContext) => void;

	/**
	 * Enter a parse tree produced by `interviewParser.lines`.
	 * @param ctx the parse tree
	 */
	enterLines?: (ctx: LinesContext) => void;
	/**
	 * Exit a parse tree produced by `interviewParser.lines`.
	 * @param ctx the parse tree
	 */
	exitLines?: (ctx: LinesContext) => void;

	/**
	 * Enter a parse tree produced by `interviewParser.s_and_w`.
	 * @param ctx the parse tree
	 */
	enterS_and_w?: (ctx: S_and_wContext) => void;
	/**
	 * Exit a parse tree produced by `interviewParser.s_and_w`.
	 * @param ctx the parse tree
	 */
	exitS_and_w?: (ctx: S_and_wContext) => void;

	/**
	 * Enter a parse tree produced by `interviewParser.bracket_escaped`.
	 * @param ctx the parse tree
	 */
	enterBracket_escaped?: (ctx: Bracket_escapedContext) => void;
	/**
	 * Exit a parse tree produced by `interviewParser.bracket_escaped`.
	 * @param ctx the parse tree
	 */
	exitBracket_escaped?: (ctx: Bracket_escapedContext) => void;

	/**
	 * Enter a parse tree produced by `interviewParser.clnsp`.
	 * @param ctx the parse tree
	 */
	enterClnsp?: (ctx: ClnspContext) => void;
	/**
	 * Exit a parse tree produced by `interviewParser.clnsp`.
	 * @param ctx the parse tree
	 */
	exitClnsp?: (ctx: ClnspContext) => void;

	/**
	 * Enter a parse tree produced by `interviewParser.sspl`.
	 * @param ctx the parse tree
	 */
	enterSspl?: (ctx: SsplContext) => void;
	/**
	 * Exit a parse tree produced by `interviewParser.sspl`.
	 * @param ctx the parse tree
	 */
	exitSspl?: (ctx: SsplContext) => void;

	/**
	 * Enter a parse tree produced by `interviewParser.words`.
	 * @param ctx the parse tree
	 */
	enterWords?: (ctx: WordsContext) => void;
	/**
	 * Exit a parse tree produced by `interviewParser.words`.
	 * @param ctx the parse tree
	 */
	exitWords?: (ctx: WordsContext) => void;

	/**
	 * Enter a parse tree produced by `interviewParser.sp`.
	 * @param ctx the parse tree
	 */
	enterSp?: (ctx: SpContext) => void;
	/**
	 * Exit a parse tree produced by `interviewParser.sp`.
	 * @param ctx the parse tree
	 */
	exitSp?: (ctx: SpContext) => void;
}

