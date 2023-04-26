// Generated from ./Cloze/clozeParser.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

import { BitmarkContext } from "./clozeParser";
import { Bitmark_Context } from "./clozeParser";
import { ClozesContext } from "./clozeParser";
import { BitElemContext } from "./clozeParser";
import { ResourceContext } from "./clozeParser";
import { ClozeContext } from "./clozeParser";
import { Cloze_instruction_groupedContext } from "./clozeParser";
import { Cloze_solution_groupedContext } from "./clozeParser";
import { GapContext } from "./clozeParser";
import { Single_gapContext } from "./clozeParser";
import { Cloze_and_multiple_choice_textContext } from "./clozeParser";
import { Headed_inline_choicesContext } from "./clozeParser";
import { Choice_headContext } from "./clozeParser";
import { Inline_choicesContext } from "./clozeParser";
import { Choice_plusContext } from "./clozeParser";
import { Choice_minusContext } from "./clozeParser";
import { Choice_starContext } from "./clozeParser";
import { PimagebitContext } from "./clozeParser";
import { AtpointContext } from "./clozeParser";
import { FormatContext } from "./clozeParser";
import { Resource_formatContext } from "./clozeParser";
import { Resource_format_extraContext } from "./clozeParser";
import { Format2Context } from "./clozeParser";
import { Image_formatContext } from "./clozeParser";
import { Video_formatContext } from "./clozeParser";
import { Article_formatContext } from "./clozeParser";
import { Document_formatContext } from "./clozeParser";
import { App_formatContext } from "./clozeParser";
import { Website_formatContext } from "./clozeParser";
import { Stillimagefilm_formatContext } from "./clozeParser";
import { Op_article_formatContext } from "./clozeParser";
import { Op_document_formatContext } from "./clozeParser";
import { Op_app_formatContext } from "./clozeParser";
import { Op_website_formatContext } from "./clozeParser";
import { Op_video_formatContext } from "./clozeParser";
import { Op_stillimagefilm_formatContext } from "./clozeParser";
import { ArticlebitContext } from "./clozeParser";
import { DocumentbitContext } from "./clozeParser";
import { WebsitebitContext } from "./clozeParser";
import { AppbitContext } from "./clozeParser";
import { StillimagefilmbitContext } from "./clozeParser";
import { Stillimg_oneContext } from "./clozeParser";
import { VideobitContext } from "./clozeParser";
import { Video_oneContext } from "./clozeParser";
import { ImagebitContext } from "./clozeParser";
import { Image_oneContext } from "./clozeParser";
import { Op_image_formatContext } from "./clozeParser";
import { Image_chainedContext } from "./clozeParser";
import { Image_chained4matchContext } from "./clozeParser";
import { AudiobitContext } from "./clozeParser";
import { Audio_oneContext } from "./clozeParser";
import { Audio_formatContext } from "./clozeParser";
import { Op_audio_formatContext } from "./clozeParser";
import { Resource_chainedContext } from "./clozeParser";
import { TelephoneContext } from "./clozeParser";
import { UrlContext } from "./clozeParser";
import { ItemContext } from "./clozeParser";
import { LeadContext } from "./clozeParser";
import { AnglerefContext } from "./clozeParser";
import { ExampleContext } from "./clozeParser";
import { Bracketed_textContext } from "./clozeParser";
import { ReferenceContext } from "./clozeParser";
import { ProgressContext } from "./clozeParser";
import { DatepropContext } from "./clozeParser";
import { Dateprop_chainedContext } from "./clozeParser";
import { InstructionContext } from "./clozeParser";
import { HintContext } from "./clozeParser";
import { TitleContext } from "./clozeParser";
import { Bool_labelContext } from "./clozeParser";
import { Progress_pointsContext } from "./clozeParser";
import { IstrackedContext } from "./clozeParser";
import { IsinfoonlyContext } from "./clozeParser";
import { AtdefContext } from "./clozeParser";
import { Atdef_Context } from "./clozeParser";
import { DollaransContext } from "./clozeParser";
import { AnchorContext } from "./clozeParser";
import { LinesContext } from "./clozeParser";
import { S_and_wContext } from "./clozeParser";
import { DclinesContext } from "./clozeParser";
import { OpuContext } from "./clozeParser";
import { OpbContext } from "./clozeParser";
import { OpqContext } from "./clozeParser";
import { OpaContext } from "./clozeParser";
import { OppContext } from "./clozeParser";
import { OpmContext } from "./clozeParser";
import { OpsContext } from "./clozeParser";
import { OprContext } from "./clozeParser";
import { OpcContext } from "./clozeParser";
import { ClContext } from "./clozeParser";
import { ClnspContext } from "./clozeParser";
import { NlContext } from "./clozeParser";
import { Listline_Context } from "./clozeParser";
import { NumericContext } from "./clozeParser";
import { StringContext } from "./clozeParser";
import { WordsContext } from "./clozeParser";
import { SpContext } from "./clozeParser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `clozeParser`.
 */
export interface clozeParserListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `clozeParser.bitmark`.
	 * @param ctx the parse tree
	 */
	enterBitmark?: (ctx: BitmarkContext) => void;
	/**
	 * Exit a parse tree produced by `clozeParser.bitmark`.
	 * @param ctx the parse tree
	 */
	exitBitmark?: (ctx: BitmarkContext) => void;

	/**
	 * Enter a parse tree produced by `clozeParser.bitmark_`.
	 * @param ctx the parse tree
	 */
	enterBitmark_?: (ctx: Bitmark_Context) => void;
	/**
	 * Exit a parse tree produced by `clozeParser.bitmark_`.
	 * @param ctx the parse tree
	 */
	exitBitmark_?: (ctx: Bitmark_Context) => void;

	/**
	 * Enter a parse tree produced by `clozeParser.clozes`.
	 * @param ctx the parse tree
	 */
	enterClozes?: (ctx: ClozesContext) => void;
	/**
	 * Exit a parse tree produced by `clozeParser.clozes`.
	 * @param ctx the parse tree
	 */
	exitClozes?: (ctx: ClozesContext) => void;

	/**
	 * Enter a parse tree produced by `clozeParser.bitElem`.
	 * @param ctx the parse tree
	 */
	enterBitElem?: (ctx: BitElemContext) => void;
	/**
	 * Exit a parse tree produced by `clozeParser.bitElem`.
	 * @param ctx the parse tree
	 */
	exitBitElem?: (ctx: BitElemContext) => void;

	/**
	 * Enter a parse tree produced by `clozeParser.resource`.
	 * @param ctx the parse tree
	 */
	enterResource?: (ctx: ResourceContext) => void;
	/**
	 * Exit a parse tree produced by `clozeParser.resource`.
	 * @param ctx the parse tree
	 */
	exitResource?: (ctx: ResourceContext) => void;

	/**
	 * Enter a parse tree produced by `clozeParser.cloze`.
	 * @param ctx the parse tree
	 */
	enterCloze?: (ctx: ClozeContext) => void;
	/**
	 * Exit a parse tree produced by `clozeParser.cloze`.
	 * @param ctx the parse tree
	 */
	exitCloze?: (ctx: ClozeContext) => void;

	/**
	 * Enter a parse tree produced by `clozeParser.cloze_instruction_grouped`.
	 * @param ctx the parse tree
	 */
	enterCloze_instruction_grouped?: (ctx: Cloze_instruction_groupedContext) => void;
	/**
	 * Exit a parse tree produced by `clozeParser.cloze_instruction_grouped`.
	 * @param ctx the parse tree
	 */
	exitCloze_instruction_grouped?: (ctx: Cloze_instruction_groupedContext) => void;

	/**
	 * Enter a parse tree produced by `clozeParser.cloze_solution_grouped`.
	 * @param ctx the parse tree
	 */
	enterCloze_solution_grouped?: (ctx: Cloze_solution_groupedContext) => void;
	/**
	 * Exit a parse tree produced by `clozeParser.cloze_solution_grouped`.
	 * @param ctx the parse tree
	 */
	exitCloze_solution_grouped?: (ctx: Cloze_solution_groupedContext) => void;

	/**
	 * Enter a parse tree produced by `clozeParser.gap`.
	 * @param ctx the parse tree
	 */
	enterGap?: (ctx: GapContext) => void;
	/**
	 * Exit a parse tree produced by `clozeParser.gap`.
	 * @param ctx the parse tree
	 */
	exitGap?: (ctx: GapContext) => void;

	/**
	 * Enter a parse tree produced by `clozeParser.single_gap`.
	 * @param ctx the parse tree
	 */
	enterSingle_gap?: (ctx: Single_gapContext) => void;
	/**
	 * Exit a parse tree produced by `clozeParser.single_gap`.
	 * @param ctx the parse tree
	 */
	exitSingle_gap?: (ctx: Single_gapContext) => void;

	/**
	 * Enter a parse tree produced by `clozeParser.cloze_and_multiple_choice_text`.
	 * @param ctx the parse tree
	 */
	enterCloze_and_multiple_choice_text?: (ctx: Cloze_and_multiple_choice_textContext) => void;
	/**
	 * Exit a parse tree produced by `clozeParser.cloze_and_multiple_choice_text`.
	 * @param ctx the parse tree
	 */
	exitCloze_and_multiple_choice_text?: (ctx: Cloze_and_multiple_choice_textContext) => void;

	/**
	 * Enter a parse tree produced by `clozeParser.headed_inline_choices`.
	 * @param ctx the parse tree
	 */
	enterHeaded_inline_choices?: (ctx: Headed_inline_choicesContext) => void;
	/**
	 * Exit a parse tree produced by `clozeParser.headed_inline_choices`.
	 * @param ctx the parse tree
	 */
	exitHeaded_inline_choices?: (ctx: Headed_inline_choicesContext) => void;

	/**
	 * Enter a parse tree produced by `clozeParser.choice_head`.
	 * @param ctx the parse tree
	 */
	enterChoice_head?: (ctx: Choice_headContext) => void;
	/**
	 * Exit a parse tree produced by `clozeParser.choice_head`.
	 * @param ctx the parse tree
	 */
	exitChoice_head?: (ctx: Choice_headContext) => void;

	/**
	 * Enter a parse tree produced by `clozeParser.inline_choices`.
	 * @param ctx the parse tree
	 */
	enterInline_choices?: (ctx: Inline_choicesContext) => void;
	/**
	 * Exit a parse tree produced by `clozeParser.inline_choices`.
	 * @param ctx the parse tree
	 */
	exitInline_choices?: (ctx: Inline_choicesContext) => void;

	/**
	 * Enter a parse tree produced by `clozeParser.choice_plus`.
	 * @param ctx the parse tree
	 */
	enterChoice_plus?: (ctx: Choice_plusContext) => void;
	/**
	 * Exit a parse tree produced by `clozeParser.choice_plus`.
	 * @param ctx the parse tree
	 */
	exitChoice_plus?: (ctx: Choice_plusContext) => void;

	/**
	 * Enter a parse tree produced by `clozeParser.choice_minus`.
	 * @param ctx the parse tree
	 */
	enterChoice_minus?: (ctx: Choice_minusContext) => void;
	/**
	 * Exit a parse tree produced by `clozeParser.choice_minus`.
	 * @param ctx the parse tree
	 */
	exitChoice_minus?: (ctx: Choice_minusContext) => void;

	/**
	 * Enter a parse tree produced by `clozeParser.choice_star`.
	 * @param ctx the parse tree
	 */
	enterChoice_star?: (ctx: Choice_starContext) => void;
	/**
	 * Exit a parse tree produced by `clozeParser.choice_star`.
	 * @param ctx the parse tree
	 */
	exitChoice_star?: (ctx: Choice_starContext) => void;

	/**
	 * Enter a parse tree produced by `clozeParser.pimagebit`.
	 * @param ctx the parse tree
	 */
	enterPimagebit?: (ctx: PimagebitContext) => void;
	/**
	 * Exit a parse tree produced by `clozeParser.pimagebit`.
	 * @param ctx the parse tree
	 */
	exitPimagebit?: (ctx: PimagebitContext) => void;

	/**
	 * Enter a parse tree produced by `clozeParser.atpoint`.
	 * @param ctx the parse tree
	 */
	enterAtpoint?: (ctx: AtpointContext) => void;
	/**
	 * Exit a parse tree produced by `clozeParser.atpoint`.
	 * @param ctx the parse tree
	 */
	exitAtpoint?: (ctx: AtpointContext) => void;

	/**
	 * Enter a parse tree produced by `clozeParser.format`.
	 * @param ctx the parse tree
	 */
	enterFormat?: (ctx: FormatContext) => void;
	/**
	 * Exit a parse tree produced by `clozeParser.format`.
	 * @param ctx the parse tree
	 */
	exitFormat?: (ctx: FormatContext) => void;

	/**
	 * Enter a parse tree produced by `clozeParser.resource_format`.
	 * @param ctx the parse tree
	 */
	enterResource_format?: (ctx: Resource_formatContext) => void;
	/**
	 * Exit a parse tree produced by `clozeParser.resource_format`.
	 * @param ctx the parse tree
	 */
	exitResource_format?: (ctx: Resource_formatContext) => void;

	/**
	 * Enter a parse tree produced by `clozeParser.resource_format_extra`.
	 * @param ctx the parse tree
	 */
	enterResource_format_extra?: (ctx: Resource_format_extraContext) => void;
	/**
	 * Exit a parse tree produced by `clozeParser.resource_format_extra`.
	 * @param ctx the parse tree
	 */
	exitResource_format_extra?: (ctx: Resource_format_extraContext) => void;

	/**
	 * Enter a parse tree produced by `clozeParser.format2`.
	 * @param ctx the parse tree
	 */
	enterFormat2?: (ctx: Format2Context) => void;
	/**
	 * Exit a parse tree produced by `clozeParser.format2`.
	 * @param ctx the parse tree
	 */
	exitFormat2?: (ctx: Format2Context) => void;

	/**
	 * Enter a parse tree produced by `clozeParser.image_format`.
	 * @param ctx the parse tree
	 */
	enterImage_format?: (ctx: Image_formatContext) => void;
	/**
	 * Exit a parse tree produced by `clozeParser.image_format`.
	 * @param ctx the parse tree
	 */
	exitImage_format?: (ctx: Image_formatContext) => void;

	/**
	 * Enter a parse tree produced by `clozeParser.video_format`.
	 * @param ctx the parse tree
	 */
	enterVideo_format?: (ctx: Video_formatContext) => void;
	/**
	 * Exit a parse tree produced by `clozeParser.video_format`.
	 * @param ctx the parse tree
	 */
	exitVideo_format?: (ctx: Video_formatContext) => void;

	/**
	 * Enter a parse tree produced by `clozeParser.article_format`.
	 * @param ctx the parse tree
	 */
	enterArticle_format?: (ctx: Article_formatContext) => void;
	/**
	 * Exit a parse tree produced by `clozeParser.article_format`.
	 * @param ctx the parse tree
	 */
	exitArticle_format?: (ctx: Article_formatContext) => void;

	/**
	 * Enter a parse tree produced by `clozeParser.document_format`.
	 * @param ctx the parse tree
	 */
	enterDocument_format?: (ctx: Document_formatContext) => void;
	/**
	 * Exit a parse tree produced by `clozeParser.document_format`.
	 * @param ctx the parse tree
	 */
	exitDocument_format?: (ctx: Document_formatContext) => void;

	/**
	 * Enter a parse tree produced by `clozeParser.app_format`.
	 * @param ctx the parse tree
	 */
	enterApp_format?: (ctx: App_formatContext) => void;
	/**
	 * Exit a parse tree produced by `clozeParser.app_format`.
	 * @param ctx the parse tree
	 */
	exitApp_format?: (ctx: App_formatContext) => void;

	/**
	 * Enter a parse tree produced by `clozeParser.website_format`.
	 * @param ctx the parse tree
	 */
	enterWebsite_format?: (ctx: Website_formatContext) => void;
	/**
	 * Exit a parse tree produced by `clozeParser.website_format`.
	 * @param ctx the parse tree
	 */
	exitWebsite_format?: (ctx: Website_formatContext) => void;

	/**
	 * Enter a parse tree produced by `clozeParser.stillimagefilm_format`.
	 * @param ctx the parse tree
	 */
	enterStillimagefilm_format?: (ctx: Stillimagefilm_formatContext) => void;
	/**
	 * Exit a parse tree produced by `clozeParser.stillimagefilm_format`.
	 * @param ctx the parse tree
	 */
	exitStillimagefilm_format?: (ctx: Stillimagefilm_formatContext) => void;

	/**
	 * Enter a parse tree produced by `clozeParser.op_article_format`.
	 * @param ctx the parse tree
	 */
	enterOp_article_format?: (ctx: Op_article_formatContext) => void;
	/**
	 * Exit a parse tree produced by `clozeParser.op_article_format`.
	 * @param ctx the parse tree
	 */
	exitOp_article_format?: (ctx: Op_article_formatContext) => void;

	/**
	 * Enter a parse tree produced by `clozeParser.op_document_format`.
	 * @param ctx the parse tree
	 */
	enterOp_document_format?: (ctx: Op_document_formatContext) => void;
	/**
	 * Exit a parse tree produced by `clozeParser.op_document_format`.
	 * @param ctx the parse tree
	 */
	exitOp_document_format?: (ctx: Op_document_formatContext) => void;

	/**
	 * Enter a parse tree produced by `clozeParser.op_app_format`.
	 * @param ctx the parse tree
	 */
	enterOp_app_format?: (ctx: Op_app_formatContext) => void;
	/**
	 * Exit a parse tree produced by `clozeParser.op_app_format`.
	 * @param ctx the parse tree
	 */
	exitOp_app_format?: (ctx: Op_app_formatContext) => void;

	/**
	 * Enter a parse tree produced by `clozeParser.op_website_format`.
	 * @param ctx the parse tree
	 */
	enterOp_website_format?: (ctx: Op_website_formatContext) => void;
	/**
	 * Exit a parse tree produced by `clozeParser.op_website_format`.
	 * @param ctx the parse tree
	 */
	exitOp_website_format?: (ctx: Op_website_formatContext) => void;

	/**
	 * Enter a parse tree produced by `clozeParser.op_video_format`.
	 * @param ctx the parse tree
	 */
	enterOp_video_format?: (ctx: Op_video_formatContext) => void;
	/**
	 * Exit a parse tree produced by `clozeParser.op_video_format`.
	 * @param ctx the parse tree
	 */
	exitOp_video_format?: (ctx: Op_video_formatContext) => void;

	/**
	 * Enter a parse tree produced by `clozeParser.op_stillimagefilm_format`.
	 * @param ctx the parse tree
	 */
	enterOp_stillimagefilm_format?: (ctx: Op_stillimagefilm_formatContext) => void;
	/**
	 * Exit a parse tree produced by `clozeParser.op_stillimagefilm_format`.
	 * @param ctx the parse tree
	 */
	exitOp_stillimagefilm_format?: (ctx: Op_stillimagefilm_formatContext) => void;

	/**
	 * Enter a parse tree produced by `clozeParser.articlebit`.
	 * @param ctx the parse tree
	 */
	enterArticlebit?: (ctx: ArticlebitContext) => void;
	/**
	 * Exit a parse tree produced by `clozeParser.articlebit`.
	 * @param ctx the parse tree
	 */
	exitArticlebit?: (ctx: ArticlebitContext) => void;

	/**
	 * Enter a parse tree produced by `clozeParser.documentbit`.
	 * @param ctx the parse tree
	 */
	enterDocumentbit?: (ctx: DocumentbitContext) => void;
	/**
	 * Exit a parse tree produced by `clozeParser.documentbit`.
	 * @param ctx the parse tree
	 */
	exitDocumentbit?: (ctx: DocumentbitContext) => void;

	/**
	 * Enter a parse tree produced by `clozeParser.websitebit`.
	 * @param ctx the parse tree
	 */
	enterWebsitebit?: (ctx: WebsitebitContext) => void;
	/**
	 * Exit a parse tree produced by `clozeParser.websitebit`.
	 * @param ctx the parse tree
	 */
	exitWebsitebit?: (ctx: WebsitebitContext) => void;

	/**
	 * Enter a parse tree produced by `clozeParser.appbit`.
	 * @param ctx the parse tree
	 */
	enterAppbit?: (ctx: AppbitContext) => void;
	/**
	 * Exit a parse tree produced by `clozeParser.appbit`.
	 * @param ctx the parse tree
	 */
	exitAppbit?: (ctx: AppbitContext) => void;

	/**
	 * Enter a parse tree produced by `clozeParser.stillimagefilmbit`.
	 * @param ctx the parse tree
	 */
	enterStillimagefilmbit?: (ctx: StillimagefilmbitContext) => void;
	/**
	 * Exit a parse tree produced by `clozeParser.stillimagefilmbit`.
	 * @param ctx the parse tree
	 */
	exitStillimagefilmbit?: (ctx: StillimagefilmbitContext) => void;

	/**
	 * Enter a parse tree produced by `clozeParser.stillimg_one`.
	 * @param ctx the parse tree
	 */
	enterStillimg_one?: (ctx: Stillimg_oneContext) => void;
	/**
	 * Exit a parse tree produced by `clozeParser.stillimg_one`.
	 * @param ctx the parse tree
	 */
	exitStillimg_one?: (ctx: Stillimg_oneContext) => void;

	/**
	 * Enter a parse tree produced by `clozeParser.videobit`.
	 * @param ctx the parse tree
	 */
	enterVideobit?: (ctx: VideobitContext) => void;
	/**
	 * Exit a parse tree produced by `clozeParser.videobit`.
	 * @param ctx the parse tree
	 */
	exitVideobit?: (ctx: VideobitContext) => void;

	/**
	 * Enter a parse tree produced by `clozeParser.video_one`.
	 * @param ctx the parse tree
	 */
	enterVideo_one?: (ctx: Video_oneContext) => void;
	/**
	 * Exit a parse tree produced by `clozeParser.video_one`.
	 * @param ctx the parse tree
	 */
	exitVideo_one?: (ctx: Video_oneContext) => void;

	/**
	 * Enter a parse tree produced by `clozeParser.imagebit`.
	 * @param ctx the parse tree
	 */
	enterImagebit?: (ctx: ImagebitContext) => void;
	/**
	 * Exit a parse tree produced by `clozeParser.imagebit`.
	 * @param ctx the parse tree
	 */
	exitImagebit?: (ctx: ImagebitContext) => void;

	/**
	 * Enter a parse tree produced by `clozeParser.image_one`.
	 * @param ctx the parse tree
	 */
	enterImage_one?: (ctx: Image_oneContext) => void;
	/**
	 * Exit a parse tree produced by `clozeParser.image_one`.
	 * @param ctx the parse tree
	 */
	exitImage_one?: (ctx: Image_oneContext) => void;

	/**
	 * Enter a parse tree produced by `clozeParser.op_image_format`.
	 * @param ctx the parse tree
	 */
	enterOp_image_format?: (ctx: Op_image_formatContext) => void;
	/**
	 * Exit a parse tree produced by `clozeParser.op_image_format`.
	 * @param ctx the parse tree
	 */
	exitOp_image_format?: (ctx: Op_image_formatContext) => void;

	/**
	 * Enter a parse tree produced by `clozeParser.image_chained`.
	 * @param ctx the parse tree
	 */
	enterImage_chained?: (ctx: Image_chainedContext) => void;
	/**
	 * Exit a parse tree produced by `clozeParser.image_chained`.
	 * @param ctx the parse tree
	 */
	exitImage_chained?: (ctx: Image_chainedContext) => void;

	/**
	 * Enter a parse tree produced by `clozeParser.image_chained4match`.
	 * @param ctx the parse tree
	 */
	enterImage_chained4match?: (ctx: Image_chained4matchContext) => void;
	/**
	 * Exit a parse tree produced by `clozeParser.image_chained4match`.
	 * @param ctx the parse tree
	 */
	exitImage_chained4match?: (ctx: Image_chained4matchContext) => void;

	/**
	 * Enter a parse tree produced by `clozeParser.audiobit`.
	 * @param ctx the parse tree
	 */
	enterAudiobit?: (ctx: AudiobitContext) => void;
	/**
	 * Exit a parse tree produced by `clozeParser.audiobit`.
	 * @param ctx the parse tree
	 */
	exitAudiobit?: (ctx: AudiobitContext) => void;

	/**
	 * Enter a parse tree produced by `clozeParser.audio_one`.
	 * @param ctx the parse tree
	 */
	enterAudio_one?: (ctx: Audio_oneContext) => void;
	/**
	 * Exit a parse tree produced by `clozeParser.audio_one`.
	 * @param ctx the parse tree
	 */
	exitAudio_one?: (ctx: Audio_oneContext) => void;

	/**
	 * Enter a parse tree produced by `clozeParser.audio_format`.
	 * @param ctx the parse tree
	 */
	enterAudio_format?: (ctx: Audio_formatContext) => void;
	/**
	 * Exit a parse tree produced by `clozeParser.audio_format`.
	 * @param ctx the parse tree
	 */
	exitAudio_format?: (ctx: Audio_formatContext) => void;

	/**
	 * Enter a parse tree produced by `clozeParser.op_audio_format`.
	 * @param ctx the parse tree
	 */
	enterOp_audio_format?: (ctx: Op_audio_formatContext) => void;
	/**
	 * Exit a parse tree produced by `clozeParser.op_audio_format`.
	 * @param ctx the parse tree
	 */
	exitOp_audio_format?: (ctx: Op_audio_formatContext) => void;

	/**
	 * Enter a parse tree produced by `clozeParser.resource_chained`.
	 * @param ctx the parse tree
	 */
	enterResource_chained?: (ctx: Resource_chainedContext) => void;
	/**
	 * Exit a parse tree produced by `clozeParser.resource_chained`.
	 * @param ctx the parse tree
	 */
	exitResource_chained?: (ctx: Resource_chainedContext) => void;

	/**
	 * Enter a parse tree produced by `clozeParser.telephone`.
	 * @param ctx the parse tree
	 */
	enterTelephone?: (ctx: TelephoneContext) => void;
	/**
	 * Exit a parse tree produced by `clozeParser.telephone`.
	 * @param ctx the parse tree
	 */
	exitTelephone?: (ctx: TelephoneContext) => void;

	/**
	 * Enter a parse tree produced by `clozeParser.url`.
	 * @param ctx the parse tree
	 */
	enterUrl?: (ctx: UrlContext) => void;
	/**
	 * Exit a parse tree produced by `clozeParser.url`.
	 * @param ctx the parse tree
	 */
	exitUrl?: (ctx: UrlContext) => void;

	/**
	 * Enter a parse tree produced by `clozeParser.item`.
	 * @param ctx the parse tree
	 */
	enterItem?: (ctx: ItemContext) => void;
	/**
	 * Exit a parse tree produced by `clozeParser.item`.
	 * @param ctx the parse tree
	 */
	exitItem?: (ctx: ItemContext) => void;

	/**
	 * Enter a parse tree produced by `clozeParser.lead`.
	 * @param ctx the parse tree
	 */
	enterLead?: (ctx: LeadContext) => void;
	/**
	 * Exit a parse tree produced by `clozeParser.lead`.
	 * @param ctx the parse tree
	 */
	exitLead?: (ctx: LeadContext) => void;

	/**
	 * Enter a parse tree produced by `clozeParser.angleref`.
	 * @param ctx the parse tree
	 */
	enterAngleref?: (ctx: AnglerefContext) => void;
	/**
	 * Exit a parse tree produced by `clozeParser.angleref`.
	 * @param ctx the parse tree
	 */
	exitAngleref?: (ctx: AnglerefContext) => void;

	/**
	 * Enter a parse tree produced by `clozeParser.example`.
	 * @param ctx the parse tree
	 */
	enterExample?: (ctx: ExampleContext) => void;
	/**
	 * Exit a parse tree produced by `clozeParser.example`.
	 * @param ctx the parse tree
	 */
	exitExample?: (ctx: ExampleContext) => void;

	/**
	 * Enter a parse tree produced by `clozeParser.bracketed_text`.
	 * @param ctx the parse tree
	 */
	enterBracketed_text?: (ctx: Bracketed_textContext) => void;
	/**
	 * Exit a parse tree produced by `clozeParser.bracketed_text`.
	 * @param ctx the parse tree
	 */
	exitBracketed_text?: (ctx: Bracketed_textContext) => void;

	/**
	 * Enter a parse tree produced by `clozeParser.reference`.
	 * @param ctx the parse tree
	 */
	enterReference?: (ctx: ReferenceContext) => void;
	/**
	 * Exit a parse tree produced by `clozeParser.reference`.
	 * @param ctx the parse tree
	 */
	exitReference?: (ctx: ReferenceContext) => void;

	/**
	 * Enter a parse tree produced by `clozeParser.progress`.
	 * @param ctx the parse tree
	 */
	enterProgress?: (ctx: ProgressContext) => void;
	/**
	 * Exit a parse tree produced by `clozeParser.progress`.
	 * @param ctx the parse tree
	 */
	exitProgress?: (ctx: ProgressContext) => void;

	/**
	 * Enter a parse tree produced by `clozeParser.dateprop`.
	 * @param ctx the parse tree
	 */
	enterDateprop?: (ctx: DatepropContext) => void;
	/**
	 * Exit a parse tree produced by `clozeParser.dateprop`.
	 * @param ctx the parse tree
	 */
	exitDateprop?: (ctx: DatepropContext) => void;

	/**
	 * Enter a parse tree produced by `clozeParser.dateprop_chained`.
	 * @param ctx the parse tree
	 */
	enterDateprop_chained?: (ctx: Dateprop_chainedContext) => void;
	/**
	 * Exit a parse tree produced by `clozeParser.dateprop_chained`.
	 * @param ctx the parse tree
	 */
	exitDateprop_chained?: (ctx: Dateprop_chainedContext) => void;

	/**
	 * Enter a parse tree produced by `clozeParser.instruction`.
	 * @param ctx the parse tree
	 */
	enterInstruction?: (ctx: InstructionContext) => void;
	/**
	 * Exit a parse tree produced by `clozeParser.instruction`.
	 * @param ctx the parse tree
	 */
	exitInstruction?: (ctx: InstructionContext) => void;

	/**
	 * Enter a parse tree produced by `clozeParser.hint`.
	 * @param ctx the parse tree
	 */
	enterHint?: (ctx: HintContext) => void;
	/**
	 * Exit a parse tree produced by `clozeParser.hint`.
	 * @param ctx the parse tree
	 */
	exitHint?: (ctx: HintContext) => void;

	/**
	 * Enter a parse tree produced by `clozeParser.title`.
	 * @param ctx the parse tree
	 */
	enterTitle?: (ctx: TitleContext) => void;
	/**
	 * Exit a parse tree produced by `clozeParser.title`.
	 * @param ctx the parse tree
	 */
	exitTitle?: (ctx: TitleContext) => void;

	/**
	 * Enter a parse tree produced by `clozeParser.bool_label`.
	 * @param ctx the parse tree
	 */
	enterBool_label?: (ctx: Bool_labelContext) => void;
	/**
	 * Exit a parse tree produced by `clozeParser.bool_label`.
	 * @param ctx the parse tree
	 */
	exitBool_label?: (ctx: Bool_labelContext) => void;

	/**
	 * Enter a parse tree produced by `clozeParser.progress_points`.
	 * @param ctx the parse tree
	 */
	enterProgress_points?: (ctx: Progress_pointsContext) => void;
	/**
	 * Exit a parse tree produced by `clozeParser.progress_points`.
	 * @param ctx the parse tree
	 */
	exitProgress_points?: (ctx: Progress_pointsContext) => void;

	/**
	 * Enter a parse tree produced by `clozeParser.istracked`.
	 * @param ctx the parse tree
	 */
	enterIstracked?: (ctx: IstrackedContext) => void;
	/**
	 * Exit a parse tree produced by `clozeParser.istracked`.
	 * @param ctx the parse tree
	 */
	exitIstracked?: (ctx: IstrackedContext) => void;

	/**
	 * Enter a parse tree produced by `clozeParser.isinfoonly`.
	 * @param ctx the parse tree
	 */
	enterIsinfoonly?: (ctx: IsinfoonlyContext) => void;
	/**
	 * Exit a parse tree produced by `clozeParser.isinfoonly`.
	 * @param ctx the parse tree
	 */
	exitIsinfoonly?: (ctx: IsinfoonlyContext) => void;

	/**
	 * Enter a parse tree produced by `clozeParser.atdef`.
	 * @param ctx the parse tree
	 */
	enterAtdef?: (ctx: AtdefContext) => void;
	/**
	 * Exit a parse tree produced by `clozeParser.atdef`.
	 * @param ctx the parse tree
	 */
	exitAtdef?: (ctx: AtdefContext) => void;

	/**
	 * Enter a parse tree produced by `clozeParser.atdef_`.
	 * @param ctx the parse tree
	 */
	enterAtdef_?: (ctx: Atdef_Context) => void;
	/**
	 * Exit a parse tree produced by `clozeParser.atdef_`.
	 * @param ctx the parse tree
	 */
	exitAtdef_?: (ctx: Atdef_Context) => void;

	/**
	 * Enter a parse tree produced by `clozeParser.dollarans`.
	 * @param ctx the parse tree
	 */
	enterDollarans?: (ctx: DollaransContext) => void;
	/**
	 * Exit a parse tree produced by `clozeParser.dollarans`.
	 * @param ctx the parse tree
	 */
	exitDollarans?: (ctx: DollaransContext) => void;

	/**
	 * Enter a parse tree produced by `clozeParser.anchor`.
	 * @param ctx the parse tree
	 */
	enterAnchor?: (ctx: AnchorContext) => void;
	/**
	 * Exit a parse tree produced by `clozeParser.anchor`.
	 * @param ctx the parse tree
	 */
	exitAnchor?: (ctx: AnchorContext) => void;

	/**
	 * Enter a parse tree produced by `clozeParser.lines`.
	 * @param ctx the parse tree
	 */
	enterLines?: (ctx: LinesContext) => void;
	/**
	 * Exit a parse tree produced by `clozeParser.lines`.
	 * @param ctx the parse tree
	 */
	exitLines?: (ctx: LinesContext) => void;

	/**
	 * Enter a parse tree produced by `clozeParser.s_and_w`.
	 * @param ctx the parse tree
	 */
	enterS_and_w?: (ctx: S_and_wContext) => void;
	/**
	 * Exit a parse tree produced by `clozeParser.s_and_w`.
	 * @param ctx the parse tree
	 */
	exitS_and_w?: (ctx: S_and_wContext) => void;

	/**
	 * Enter a parse tree produced by `clozeParser.dclines`.
	 * @param ctx the parse tree
	 */
	enterDclines?: (ctx: DclinesContext) => void;
	/**
	 * Exit a parse tree produced by `clozeParser.dclines`.
	 * @param ctx the parse tree
	 */
	exitDclines?: (ctx: DclinesContext) => void;

	/**
	 * Enter a parse tree produced by `clozeParser.opu`.
	 * @param ctx the parse tree
	 */
	enterOpu?: (ctx: OpuContext) => void;
	/**
	 * Exit a parse tree produced by `clozeParser.opu`.
	 * @param ctx the parse tree
	 */
	exitOpu?: (ctx: OpuContext) => void;

	/**
	 * Enter a parse tree produced by `clozeParser.opb`.
	 * @param ctx the parse tree
	 */
	enterOpb?: (ctx: OpbContext) => void;
	/**
	 * Exit a parse tree produced by `clozeParser.opb`.
	 * @param ctx the parse tree
	 */
	exitOpb?: (ctx: OpbContext) => void;

	/**
	 * Enter a parse tree produced by `clozeParser.opq`.
	 * @param ctx the parse tree
	 */
	enterOpq?: (ctx: OpqContext) => void;
	/**
	 * Exit a parse tree produced by `clozeParser.opq`.
	 * @param ctx the parse tree
	 */
	exitOpq?: (ctx: OpqContext) => void;

	/**
	 * Enter a parse tree produced by `clozeParser.opa`.
	 * @param ctx the parse tree
	 */
	enterOpa?: (ctx: OpaContext) => void;
	/**
	 * Exit a parse tree produced by `clozeParser.opa`.
	 * @param ctx the parse tree
	 */
	exitOpa?: (ctx: OpaContext) => void;

	/**
	 * Enter a parse tree produced by `clozeParser.opp`.
	 * @param ctx the parse tree
	 */
	enterOpp?: (ctx: OppContext) => void;
	/**
	 * Exit a parse tree produced by `clozeParser.opp`.
	 * @param ctx the parse tree
	 */
	exitOpp?: (ctx: OppContext) => void;

	/**
	 * Enter a parse tree produced by `clozeParser.opm`.
	 * @param ctx the parse tree
	 */
	enterOpm?: (ctx: OpmContext) => void;
	/**
	 * Exit a parse tree produced by `clozeParser.opm`.
	 * @param ctx the parse tree
	 */
	exitOpm?: (ctx: OpmContext) => void;

	/**
	 * Enter a parse tree produced by `clozeParser.ops`.
	 * @param ctx the parse tree
	 */
	enterOps?: (ctx: OpsContext) => void;
	/**
	 * Exit a parse tree produced by `clozeParser.ops`.
	 * @param ctx the parse tree
	 */
	exitOps?: (ctx: OpsContext) => void;

	/**
	 * Enter a parse tree produced by `clozeParser.opr`.
	 * @param ctx the parse tree
	 */
	enterOpr?: (ctx: OprContext) => void;
	/**
	 * Exit a parse tree produced by `clozeParser.opr`.
	 * @param ctx the parse tree
	 */
	exitOpr?: (ctx: OprContext) => void;

	/**
	 * Enter a parse tree produced by `clozeParser.opc`.
	 * @param ctx the parse tree
	 */
	enterOpc?: (ctx: OpcContext) => void;
	/**
	 * Exit a parse tree produced by `clozeParser.opc`.
	 * @param ctx the parse tree
	 */
	exitOpc?: (ctx: OpcContext) => void;

	/**
	 * Enter a parse tree produced by `clozeParser.cl`.
	 * @param ctx the parse tree
	 */
	enterCl?: (ctx: ClContext) => void;
	/**
	 * Exit a parse tree produced by `clozeParser.cl`.
	 * @param ctx the parse tree
	 */
	exitCl?: (ctx: ClContext) => void;

	/**
	 * Enter a parse tree produced by `clozeParser.clnsp`.
	 * @param ctx the parse tree
	 */
	enterClnsp?: (ctx: ClnspContext) => void;
	/**
	 * Exit a parse tree produced by `clozeParser.clnsp`.
	 * @param ctx the parse tree
	 */
	exitClnsp?: (ctx: ClnspContext) => void;

	/**
	 * Enter a parse tree produced by `clozeParser.nl`.
	 * @param ctx the parse tree
	 */
	enterNl?: (ctx: NlContext) => void;
	/**
	 * Exit a parse tree produced by `clozeParser.nl`.
	 * @param ctx the parse tree
	 */
	exitNl?: (ctx: NlContext) => void;

	/**
	 * Enter a parse tree produced by `clozeParser.listline_`.
	 * @param ctx the parse tree
	 */
	enterListline_?: (ctx: Listline_Context) => void;
	/**
	 * Exit a parse tree produced by `clozeParser.listline_`.
	 * @param ctx the parse tree
	 */
	exitListline_?: (ctx: Listline_Context) => void;

	/**
	 * Enter a parse tree produced by `clozeParser.numeric`.
	 * @param ctx the parse tree
	 */
	enterNumeric?: (ctx: NumericContext) => void;
	/**
	 * Exit a parse tree produced by `clozeParser.numeric`.
	 * @param ctx the parse tree
	 */
	exitNumeric?: (ctx: NumericContext) => void;

	/**
	 * Enter a parse tree produced by `clozeParser.string`.
	 * @param ctx the parse tree
	 */
	enterString?: (ctx: StringContext) => void;
	/**
	 * Exit a parse tree produced by `clozeParser.string`.
	 * @param ctx the parse tree
	 */
	exitString?: (ctx: StringContext) => void;

	/**
	 * Enter a parse tree produced by `clozeParser.words`.
	 * @param ctx the parse tree
	 */
	enterWords?: (ctx: WordsContext) => void;
	/**
	 * Exit a parse tree produced by `clozeParser.words`.
	 * @param ctx the parse tree
	 */
	exitWords?: (ctx: WordsContext) => void;

	/**
	 * Enter a parse tree produced by `clozeParser.sp`.
	 * @param ctx the parse tree
	 */
	enterSp?: (ctx: SpContext) => void;
	/**
	 * Exit a parse tree produced by `clozeParser.sp`.
	 * @param ctx the parse tree
	 */
	exitSp?: (ctx: SpContext) => void;
}

