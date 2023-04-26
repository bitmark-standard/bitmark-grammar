// Generated from ./Truefalse/truefalseParser.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

import { BitmarkContext } from "./truefalseParser";
import { Bitmark_Context } from "./truefalseParser";
import { TruefalsesContext } from "./truefalseParser";
import { True_false_1Context } from "./truefalseParser";
import { True_falseContext } from "./truefalseParser";
import { McrsepContext } from "./truefalseParser";
import { Mcrsep_endContext } from "./truefalseParser";
import { TfmiscContext } from "./truefalseParser";
import { ChoicesContext } from "./truefalseParser";
import { CplusContext } from "./truefalseParser";
import { CminusContext } from "./truefalseParser";
import { Choice_plusContext } from "./truefalseParser";
import { Choice_minusContext } from "./truefalseParser";
import { Choice_starContext } from "./truefalseParser";
import { BitElemContext } from "./truefalseParser";
import { ResourceContext } from "./truefalseParser";
import { GapContext } from "./truefalseParser";
import { Single_gapContext } from "./truefalseParser";
import { Bullet_itemContext } from "./truefalseParser";
import { AtpointContext } from "./truefalseParser";
import { FormatContext } from "./truefalseParser";
import { Resource_formatContext } from "./truefalseParser";
import { Resource_format_extraContext } from "./truefalseParser";
import { Format2Context } from "./truefalseParser";
import { Image_formatContext } from "./truefalseParser";
import { Video_formatContext } from "./truefalseParser";
import { Article_formatContext } from "./truefalseParser";
import { Document_formatContext } from "./truefalseParser";
import { App_formatContext } from "./truefalseParser";
import { Website_formatContext } from "./truefalseParser";
import { Stillimagefilm_formatContext } from "./truefalseParser";
import { Op_article_formatContext } from "./truefalseParser";
import { Op_document_formatContext } from "./truefalseParser";
import { Op_app_formatContext } from "./truefalseParser";
import { Op_website_formatContext } from "./truefalseParser";
import { Op_video_formatContext } from "./truefalseParser";
import { Op_stillimagefilm_formatContext } from "./truefalseParser";
import { ArticlebitContext } from "./truefalseParser";
import { DocumentbitContext } from "./truefalseParser";
import { WebsitebitContext } from "./truefalseParser";
import { AppbitContext } from "./truefalseParser";
import { StillimagefilmbitContext } from "./truefalseParser";
import { Stillimg_oneContext } from "./truefalseParser";
import { VideobitContext } from "./truefalseParser";
import { Video_oneContext } from "./truefalseParser";
import { ImagebitContext } from "./truefalseParser";
import { Image_oneContext } from "./truefalseParser";
import { Op_image_formatContext } from "./truefalseParser";
import { Image_chainedContext } from "./truefalseParser";
import { Image_chained4matchContext } from "./truefalseParser";
import { AudiobitContext } from "./truefalseParser";
import { Audio_oneContext } from "./truefalseParser";
import { Audio_formatContext } from "./truefalseParser";
import { Op_audio_formatContext } from "./truefalseParser";
import { Resource_chainedContext } from "./truefalseParser";
import { TelephoneContext } from "./truefalseParser";
import { UrlContext } from "./truefalseParser";
import { ItemContext } from "./truefalseParser";
import { LeadContext } from "./truefalseParser";
import { AnglerefContext } from "./truefalseParser";
import { ExampleContext } from "./truefalseParser";
import { Bracketed_textContext } from "./truefalseParser";
import { ReferenceContext } from "./truefalseParser";
import { ProgressContext } from "./truefalseParser";
import { DatepropContext } from "./truefalseParser";
import { Dateprop_chainedContext } from "./truefalseParser";
import { InstructionContext } from "./truefalseParser";
import { HintContext } from "./truefalseParser";
import { TitleContext } from "./truefalseParser";
import { Bool_labelContext } from "./truefalseParser";
import { Progress_pointsContext } from "./truefalseParser";
import { IstrackedContext } from "./truefalseParser";
import { IsinfoonlyContext } from "./truefalseParser";
import { AtdefContext } from "./truefalseParser";
import { Atdef_Context } from "./truefalseParser";
import { DollaransContext } from "./truefalseParser";
import { AnchorContext } from "./truefalseParser";
import { LinesContext } from "./truefalseParser";
import { S_and_wContext } from "./truefalseParser";
import { DclinesContext } from "./truefalseParser";
import { ClnspContext } from "./truefalseParser";
import { SsplContext } from "./truefalseParser";
import { WordsContext } from "./truefalseParser";
import { SpContext } from "./truefalseParser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `truefalseParser`.
 */
export interface truefalseParserListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `truefalseParser.bitmark`.
	 * @param ctx the parse tree
	 */
	enterBitmark?: (ctx: BitmarkContext) => void;
	/**
	 * Exit a parse tree produced by `truefalseParser.bitmark`.
	 * @param ctx the parse tree
	 */
	exitBitmark?: (ctx: BitmarkContext) => void;

	/**
	 * Enter a parse tree produced by `truefalseParser.bitmark_`.
	 * @param ctx the parse tree
	 */
	enterBitmark_?: (ctx: Bitmark_Context) => void;
	/**
	 * Exit a parse tree produced by `truefalseParser.bitmark_`.
	 * @param ctx the parse tree
	 */
	exitBitmark_?: (ctx: Bitmark_Context) => void;

	/**
	 * Enter a parse tree produced by `truefalseParser.truefalses`.
	 * @param ctx the parse tree
	 */
	enterTruefalses?: (ctx: TruefalsesContext) => void;
	/**
	 * Exit a parse tree produced by `truefalseParser.truefalses`.
	 * @param ctx the parse tree
	 */
	exitTruefalses?: (ctx: TruefalsesContext) => void;

	/**
	 * Enter a parse tree produced by `truefalseParser.true_false_1`.
	 * @param ctx the parse tree
	 */
	enterTrue_false_1?: (ctx: True_false_1Context) => void;
	/**
	 * Exit a parse tree produced by `truefalseParser.true_false_1`.
	 * @param ctx the parse tree
	 */
	exitTrue_false_1?: (ctx: True_false_1Context) => void;

	/**
	 * Enter a parse tree produced by `truefalseParser.true_false`.
	 * @param ctx the parse tree
	 */
	enterTrue_false?: (ctx: True_falseContext) => void;
	/**
	 * Exit a parse tree produced by `truefalseParser.true_false`.
	 * @param ctx the parse tree
	 */
	exitTrue_false?: (ctx: True_falseContext) => void;

	/**
	 * Enter a parse tree produced by `truefalseParser.mcrsep`.
	 * @param ctx the parse tree
	 */
	enterMcrsep?: (ctx: McrsepContext) => void;
	/**
	 * Exit a parse tree produced by `truefalseParser.mcrsep`.
	 * @param ctx the parse tree
	 */
	exitMcrsep?: (ctx: McrsepContext) => void;

	/**
	 * Enter a parse tree produced by `truefalseParser.mcrsep_end`.
	 * @param ctx the parse tree
	 */
	enterMcrsep_end?: (ctx: Mcrsep_endContext) => void;
	/**
	 * Exit a parse tree produced by `truefalseParser.mcrsep_end`.
	 * @param ctx the parse tree
	 */
	exitMcrsep_end?: (ctx: Mcrsep_endContext) => void;

	/**
	 * Enter a parse tree produced by `truefalseParser.tfmisc`.
	 * @param ctx the parse tree
	 */
	enterTfmisc?: (ctx: TfmiscContext) => void;
	/**
	 * Exit a parse tree produced by `truefalseParser.tfmisc`.
	 * @param ctx the parse tree
	 */
	exitTfmisc?: (ctx: TfmiscContext) => void;

	/**
	 * Enter a parse tree produced by `truefalseParser.choices`.
	 * @param ctx the parse tree
	 */
	enterChoices?: (ctx: ChoicesContext) => void;
	/**
	 * Exit a parse tree produced by `truefalseParser.choices`.
	 * @param ctx the parse tree
	 */
	exitChoices?: (ctx: ChoicesContext) => void;

	/**
	 * Enter a parse tree produced by `truefalseParser.cplus`.
	 * @param ctx the parse tree
	 */
	enterCplus?: (ctx: CplusContext) => void;
	/**
	 * Exit a parse tree produced by `truefalseParser.cplus`.
	 * @param ctx the parse tree
	 */
	exitCplus?: (ctx: CplusContext) => void;

	/**
	 * Enter a parse tree produced by `truefalseParser.cminus`.
	 * @param ctx the parse tree
	 */
	enterCminus?: (ctx: CminusContext) => void;
	/**
	 * Exit a parse tree produced by `truefalseParser.cminus`.
	 * @param ctx the parse tree
	 */
	exitCminus?: (ctx: CminusContext) => void;

	/**
	 * Enter a parse tree produced by `truefalseParser.choice_plus`.
	 * @param ctx the parse tree
	 */
	enterChoice_plus?: (ctx: Choice_plusContext) => void;
	/**
	 * Exit a parse tree produced by `truefalseParser.choice_plus`.
	 * @param ctx the parse tree
	 */
	exitChoice_plus?: (ctx: Choice_plusContext) => void;

	/**
	 * Enter a parse tree produced by `truefalseParser.choice_minus`.
	 * @param ctx the parse tree
	 */
	enterChoice_minus?: (ctx: Choice_minusContext) => void;
	/**
	 * Exit a parse tree produced by `truefalseParser.choice_minus`.
	 * @param ctx the parse tree
	 */
	exitChoice_minus?: (ctx: Choice_minusContext) => void;

	/**
	 * Enter a parse tree produced by `truefalseParser.choice_star`.
	 * @param ctx the parse tree
	 */
	enterChoice_star?: (ctx: Choice_starContext) => void;
	/**
	 * Exit a parse tree produced by `truefalseParser.choice_star`.
	 * @param ctx the parse tree
	 */
	exitChoice_star?: (ctx: Choice_starContext) => void;

	/**
	 * Enter a parse tree produced by `truefalseParser.bitElem`.
	 * @param ctx the parse tree
	 */
	enterBitElem?: (ctx: BitElemContext) => void;
	/**
	 * Exit a parse tree produced by `truefalseParser.bitElem`.
	 * @param ctx the parse tree
	 */
	exitBitElem?: (ctx: BitElemContext) => void;

	/**
	 * Enter a parse tree produced by `truefalseParser.resource`.
	 * @param ctx the parse tree
	 */
	enterResource?: (ctx: ResourceContext) => void;
	/**
	 * Exit a parse tree produced by `truefalseParser.resource`.
	 * @param ctx the parse tree
	 */
	exitResource?: (ctx: ResourceContext) => void;

	/**
	 * Enter a parse tree produced by `truefalseParser.gap`.
	 * @param ctx the parse tree
	 */
	enterGap?: (ctx: GapContext) => void;
	/**
	 * Exit a parse tree produced by `truefalseParser.gap`.
	 * @param ctx the parse tree
	 */
	exitGap?: (ctx: GapContext) => void;

	/**
	 * Enter a parse tree produced by `truefalseParser.single_gap`.
	 * @param ctx the parse tree
	 */
	enterSingle_gap?: (ctx: Single_gapContext) => void;
	/**
	 * Exit a parse tree produced by `truefalseParser.single_gap`.
	 * @param ctx the parse tree
	 */
	exitSingle_gap?: (ctx: Single_gapContext) => void;

	/**
	 * Enter a parse tree produced by `truefalseParser.bullet_item`.
	 * @param ctx the parse tree
	 */
	enterBullet_item?: (ctx: Bullet_itemContext) => void;
	/**
	 * Exit a parse tree produced by `truefalseParser.bullet_item`.
	 * @param ctx the parse tree
	 */
	exitBullet_item?: (ctx: Bullet_itemContext) => void;

	/**
	 * Enter a parse tree produced by `truefalseParser.atpoint`.
	 * @param ctx the parse tree
	 */
	enterAtpoint?: (ctx: AtpointContext) => void;
	/**
	 * Exit a parse tree produced by `truefalseParser.atpoint`.
	 * @param ctx the parse tree
	 */
	exitAtpoint?: (ctx: AtpointContext) => void;

	/**
	 * Enter a parse tree produced by `truefalseParser.format`.
	 * @param ctx the parse tree
	 */
	enterFormat?: (ctx: FormatContext) => void;
	/**
	 * Exit a parse tree produced by `truefalseParser.format`.
	 * @param ctx the parse tree
	 */
	exitFormat?: (ctx: FormatContext) => void;

	/**
	 * Enter a parse tree produced by `truefalseParser.resource_format`.
	 * @param ctx the parse tree
	 */
	enterResource_format?: (ctx: Resource_formatContext) => void;
	/**
	 * Exit a parse tree produced by `truefalseParser.resource_format`.
	 * @param ctx the parse tree
	 */
	exitResource_format?: (ctx: Resource_formatContext) => void;

	/**
	 * Enter a parse tree produced by `truefalseParser.resource_format_extra`.
	 * @param ctx the parse tree
	 */
	enterResource_format_extra?: (ctx: Resource_format_extraContext) => void;
	/**
	 * Exit a parse tree produced by `truefalseParser.resource_format_extra`.
	 * @param ctx the parse tree
	 */
	exitResource_format_extra?: (ctx: Resource_format_extraContext) => void;

	/**
	 * Enter a parse tree produced by `truefalseParser.format2`.
	 * @param ctx the parse tree
	 */
	enterFormat2?: (ctx: Format2Context) => void;
	/**
	 * Exit a parse tree produced by `truefalseParser.format2`.
	 * @param ctx the parse tree
	 */
	exitFormat2?: (ctx: Format2Context) => void;

	/**
	 * Enter a parse tree produced by `truefalseParser.image_format`.
	 * @param ctx the parse tree
	 */
	enterImage_format?: (ctx: Image_formatContext) => void;
	/**
	 * Exit a parse tree produced by `truefalseParser.image_format`.
	 * @param ctx the parse tree
	 */
	exitImage_format?: (ctx: Image_formatContext) => void;

	/**
	 * Enter a parse tree produced by `truefalseParser.video_format`.
	 * @param ctx the parse tree
	 */
	enterVideo_format?: (ctx: Video_formatContext) => void;
	/**
	 * Exit a parse tree produced by `truefalseParser.video_format`.
	 * @param ctx the parse tree
	 */
	exitVideo_format?: (ctx: Video_formatContext) => void;

	/**
	 * Enter a parse tree produced by `truefalseParser.article_format`.
	 * @param ctx the parse tree
	 */
	enterArticle_format?: (ctx: Article_formatContext) => void;
	/**
	 * Exit a parse tree produced by `truefalseParser.article_format`.
	 * @param ctx the parse tree
	 */
	exitArticle_format?: (ctx: Article_formatContext) => void;

	/**
	 * Enter a parse tree produced by `truefalseParser.document_format`.
	 * @param ctx the parse tree
	 */
	enterDocument_format?: (ctx: Document_formatContext) => void;
	/**
	 * Exit a parse tree produced by `truefalseParser.document_format`.
	 * @param ctx the parse tree
	 */
	exitDocument_format?: (ctx: Document_formatContext) => void;

	/**
	 * Enter a parse tree produced by `truefalseParser.app_format`.
	 * @param ctx the parse tree
	 */
	enterApp_format?: (ctx: App_formatContext) => void;
	/**
	 * Exit a parse tree produced by `truefalseParser.app_format`.
	 * @param ctx the parse tree
	 */
	exitApp_format?: (ctx: App_formatContext) => void;

	/**
	 * Enter a parse tree produced by `truefalseParser.website_format`.
	 * @param ctx the parse tree
	 */
	enterWebsite_format?: (ctx: Website_formatContext) => void;
	/**
	 * Exit a parse tree produced by `truefalseParser.website_format`.
	 * @param ctx the parse tree
	 */
	exitWebsite_format?: (ctx: Website_formatContext) => void;

	/**
	 * Enter a parse tree produced by `truefalseParser.stillimagefilm_format`.
	 * @param ctx the parse tree
	 */
	enterStillimagefilm_format?: (ctx: Stillimagefilm_formatContext) => void;
	/**
	 * Exit a parse tree produced by `truefalseParser.stillimagefilm_format`.
	 * @param ctx the parse tree
	 */
	exitStillimagefilm_format?: (ctx: Stillimagefilm_formatContext) => void;

	/**
	 * Enter a parse tree produced by `truefalseParser.op_article_format`.
	 * @param ctx the parse tree
	 */
	enterOp_article_format?: (ctx: Op_article_formatContext) => void;
	/**
	 * Exit a parse tree produced by `truefalseParser.op_article_format`.
	 * @param ctx the parse tree
	 */
	exitOp_article_format?: (ctx: Op_article_formatContext) => void;

	/**
	 * Enter a parse tree produced by `truefalseParser.op_document_format`.
	 * @param ctx the parse tree
	 */
	enterOp_document_format?: (ctx: Op_document_formatContext) => void;
	/**
	 * Exit a parse tree produced by `truefalseParser.op_document_format`.
	 * @param ctx the parse tree
	 */
	exitOp_document_format?: (ctx: Op_document_formatContext) => void;

	/**
	 * Enter a parse tree produced by `truefalseParser.op_app_format`.
	 * @param ctx the parse tree
	 */
	enterOp_app_format?: (ctx: Op_app_formatContext) => void;
	/**
	 * Exit a parse tree produced by `truefalseParser.op_app_format`.
	 * @param ctx the parse tree
	 */
	exitOp_app_format?: (ctx: Op_app_formatContext) => void;

	/**
	 * Enter a parse tree produced by `truefalseParser.op_website_format`.
	 * @param ctx the parse tree
	 */
	enterOp_website_format?: (ctx: Op_website_formatContext) => void;
	/**
	 * Exit a parse tree produced by `truefalseParser.op_website_format`.
	 * @param ctx the parse tree
	 */
	exitOp_website_format?: (ctx: Op_website_formatContext) => void;

	/**
	 * Enter a parse tree produced by `truefalseParser.op_video_format`.
	 * @param ctx the parse tree
	 */
	enterOp_video_format?: (ctx: Op_video_formatContext) => void;
	/**
	 * Exit a parse tree produced by `truefalseParser.op_video_format`.
	 * @param ctx the parse tree
	 */
	exitOp_video_format?: (ctx: Op_video_formatContext) => void;

	/**
	 * Enter a parse tree produced by `truefalseParser.op_stillimagefilm_format`.
	 * @param ctx the parse tree
	 */
	enterOp_stillimagefilm_format?: (ctx: Op_stillimagefilm_formatContext) => void;
	/**
	 * Exit a parse tree produced by `truefalseParser.op_stillimagefilm_format`.
	 * @param ctx the parse tree
	 */
	exitOp_stillimagefilm_format?: (ctx: Op_stillimagefilm_formatContext) => void;

	/**
	 * Enter a parse tree produced by `truefalseParser.articlebit`.
	 * @param ctx the parse tree
	 */
	enterArticlebit?: (ctx: ArticlebitContext) => void;
	/**
	 * Exit a parse tree produced by `truefalseParser.articlebit`.
	 * @param ctx the parse tree
	 */
	exitArticlebit?: (ctx: ArticlebitContext) => void;

	/**
	 * Enter a parse tree produced by `truefalseParser.documentbit`.
	 * @param ctx the parse tree
	 */
	enterDocumentbit?: (ctx: DocumentbitContext) => void;
	/**
	 * Exit a parse tree produced by `truefalseParser.documentbit`.
	 * @param ctx the parse tree
	 */
	exitDocumentbit?: (ctx: DocumentbitContext) => void;

	/**
	 * Enter a parse tree produced by `truefalseParser.websitebit`.
	 * @param ctx the parse tree
	 */
	enterWebsitebit?: (ctx: WebsitebitContext) => void;
	/**
	 * Exit a parse tree produced by `truefalseParser.websitebit`.
	 * @param ctx the parse tree
	 */
	exitWebsitebit?: (ctx: WebsitebitContext) => void;

	/**
	 * Enter a parse tree produced by `truefalseParser.appbit`.
	 * @param ctx the parse tree
	 */
	enterAppbit?: (ctx: AppbitContext) => void;
	/**
	 * Exit a parse tree produced by `truefalseParser.appbit`.
	 * @param ctx the parse tree
	 */
	exitAppbit?: (ctx: AppbitContext) => void;

	/**
	 * Enter a parse tree produced by `truefalseParser.stillimagefilmbit`.
	 * @param ctx the parse tree
	 */
	enterStillimagefilmbit?: (ctx: StillimagefilmbitContext) => void;
	/**
	 * Exit a parse tree produced by `truefalseParser.stillimagefilmbit`.
	 * @param ctx the parse tree
	 */
	exitStillimagefilmbit?: (ctx: StillimagefilmbitContext) => void;

	/**
	 * Enter a parse tree produced by `truefalseParser.stillimg_one`.
	 * @param ctx the parse tree
	 */
	enterStillimg_one?: (ctx: Stillimg_oneContext) => void;
	/**
	 * Exit a parse tree produced by `truefalseParser.stillimg_one`.
	 * @param ctx the parse tree
	 */
	exitStillimg_one?: (ctx: Stillimg_oneContext) => void;

	/**
	 * Enter a parse tree produced by `truefalseParser.videobit`.
	 * @param ctx the parse tree
	 */
	enterVideobit?: (ctx: VideobitContext) => void;
	/**
	 * Exit a parse tree produced by `truefalseParser.videobit`.
	 * @param ctx the parse tree
	 */
	exitVideobit?: (ctx: VideobitContext) => void;

	/**
	 * Enter a parse tree produced by `truefalseParser.video_one`.
	 * @param ctx the parse tree
	 */
	enterVideo_one?: (ctx: Video_oneContext) => void;
	/**
	 * Exit a parse tree produced by `truefalseParser.video_one`.
	 * @param ctx the parse tree
	 */
	exitVideo_one?: (ctx: Video_oneContext) => void;

	/**
	 * Enter a parse tree produced by `truefalseParser.imagebit`.
	 * @param ctx the parse tree
	 */
	enterImagebit?: (ctx: ImagebitContext) => void;
	/**
	 * Exit a parse tree produced by `truefalseParser.imagebit`.
	 * @param ctx the parse tree
	 */
	exitImagebit?: (ctx: ImagebitContext) => void;

	/**
	 * Enter a parse tree produced by `truefalseParser.image_one`.
	 * @param ctx the parse tree
	 */
	enterImage_one?: (ctx: Image_oneContext) => void;
	/**
	 * Exit a parse tree produced by `truefalseParser.image_one`.
	 * @param ctx the parse tree
	 */
	exitImage_one?: (ctx: Image_oneContext) => void;

	/**
	 * Enter a parse tree produced by `truefalseParser.op_image_format`.
	 * @param ctx the parse tree
	 */
	enterOp_image_format?: (ctx: Op_image_formatContext) => void;
	/**
	 * Exit a parse tree produced by `truefalseParser.op_image_format`.
	 * @param ctx the parse tree
	 */
	exitOp_image_format?: (ctx: Op_image_formatContext) => void;

	/**
	 * Enter a parse tree produced by `truefalseParser.image_chained`.
	 * @param ctx the parse tree
	 */
	enterImage_chained?: (ctx: Image_chainedContext) => void;
	/**
	 * Exit a parse tree produced by `truefalseParser.image_chained`.
	 * @param ctx the parse tree
	 */
	exitImage_chained?: (ctx: Image_chainedContext) => void;

	/**
	 * Enter a parse tree produced by `truefalseParser.image_chained4match`.
	 * @param ctx the parse tree
	 */
	enterImage_chained4match?: (ctx: Image_chained4matchContext) => void;
	/**
	 * Exit a parse tree produced by `truefalseParser.image_chained4match`.
	 * @param ctx the parse tree
	 */
	exitImage_chained4match?: (ctx: Image_chained4matchContext) => void;

	/**
	 * Enter a parse tree produced by `truefalseParser.audiobit`.
	 * @param ctx the parse tree
	 */
	enterAudiobit?: (ctx: AudiobitContext) => void;
	/**
	 * Exit a parse tree produced by `truefalseParser.audiobit`.
	 * @param ctx the parse tree
	 */
	exitAudiobit?: (ctx: AudiobitContext) => void;

	/**
	 * Enter a parse tree produced by `truefalseParser.audio_one`.
	 * @param ctx the parse tree
	 */
	enterAudio_one?: (ctx: Audio_oneContext) => void;
	/**
	 * Exit a parse tree produced by `truefalseParser.audio_one`.
	 * @param ctx the parse tree
	 */
	exitAudio_one?: (ctx: Audio_oneContext) => void;

	/**
	 * Enter a parse tree produced by `truefalseParser.audio_format`.
	 * @param ctx the parse tree
	 */
	enterAudio_format?: (ctx: Audio_formatContext) => void;
	/**
	 * Exit a parse tree produced by `truefalseParser.audio_format`.
	 * @param ctx the parse tree
	 */
	exitAudio_format?: (ctx: Audio_formatContext) => void;

	/**
	 * Enter a parse tree produced by `truefalseParser.op_audio_format`.
	 * @param ctx the parse tree
	 */
	enterOp_audio_format?: (ctx: Op_audio_formatContext) => void;
	/**
	 * Exit a parse tree produced by `truefalseParser.op_audio_format`.
	 * @param ctx the parse tree
	 */
	exitOp_audio_format?: (ctx: Op_audio_formatContext) => void;

	/**
	 * Enter a parse tree produced by `truefalseParser.resource_chained`.
	 * @param ctx the parse tree
	 */
	enterResource_chained?: (ctx: Resource_chainedContext) => void;
	/**
	 * Exit a parse tree produced by `truefalseParser.resource_chained`.
	 * @param ctx the parse tree
	 */
	exitResource_chained?: (ctx: Resource_chainedContext) => void;

	/**
	 * Enter a parse tree produced by `truefalseParser.telephone`.
	 * @param ctx the parse tree
	 */
	enterTelephone?: (ctx: TelephoneContext) => void;
	/**
	 * Exit a parse tree produced by `truefalseParser.telephone`.
	 * @param ctx the parse tree
	 */
	exitTelephone?: (ctx: TelephoneContext) => void;

	/**
	 * Enter a parse tree produced by `truefalseParser.url`.
	 * @param ctx the parse tree
	 */
	enterUrl?: (ctx: UrlContext) => void;
	/**
	 * Exit a parse tree produced by `truefalseParser.url`.
	 * @param ctx the parse tree
	 */
	exitUrl?: (ctx: UrlContext) => void;

	/**
	 * Enter a parse tree produced by `truefalseParser.item`.
	 * @param ctx the parse tree
	 */
	enterItem?: (ctx: ItemContext) => void;
	/**
	 * Exit a parse tree produced by `truefalseParser.item`.
	 * @param ctx the parse tree
	 */
	exitItem?: (ctx: ItemContext) => void;

	/**
	 * Enter a parse tree produced by `truefalseParser.lead`.
	 * @param ctx the parse tree
	 */
	enterLead?: (ctx: LeadContext) => void;
	/**
	 * Exit a parse tree produced by `truefalseParser.lead`.
	 * @param ctx the parse tree
	 */
	exitLead?: (ctx: LeadContext) => void;

	/**
	 * Enter a parse tree produced by `truefalseParser.angleref`.
	 * @param ctx the parse tree
	 */
	enterAngleref?: (ctx: AnglerefContext) => void;
	/**
	 * Exit a parse tree produced by `truefalseParser.angleref`.
	 * @param ctx the parse tree
	 */
	exitAngleref?: (ctx: AnglerefContext) => void;

	/**
	 * Enter a parse tree produced by `truefalseParser.example`.
	 * @param ctx the parse tree
	 */
	enterExample?: (ctx: ExampleContext) => void;
	/**
	 * Exit a parse tree produced by `truefalseParser.example`.
	 * @param ctx the parse tree
	 */
	exitExample?: (ctx: ExampleContext) => void;

	/**
	 * Enter a parse tree produced by `truefalseParser.bracketed_text`.
	 * @param ctx the parse tree
	 */
	enterBracketed_text?: (ctx: Bracketed_textContext) => void;
	/**
	 * Exit a parse tree produced by `truefalseParser.bracketed_text`.
	 * @param ctx the parse tree
	 */
	exitBracketed_text?: (ctx: Bracketed_textContext) => void;

	/**
	 * Enter a parse tree produced by `truefalseParser.reference`.
	 * @param ctx the parse tree
	 */
	enterReference?: (ctx: ReferenceContext) => void;
	/**
	 * Exit a parse tree produced by `truefalseParser.reference`.
	 * @param ctx the parse tree
	 */
	exitReference?: (ctx: ReferenceContext) => void;

	/**
	 * Enter a parse tree produced by `truefalseParser.progress`.
	 * @param ctx the parse tree
	 */
	enterProgress?: (ctx: ProgressContext) => void;
	/**
	 * Exit a parse tree produced by `truefalseParser.progress`.
	 * @param ctx the parse tree
	 */
	exitProgress?: (ctx: ProgressContext) => void;

	/**
	 * Enter a parse tree produced by `truefalseParser.dateprop`.
	 * @param ctx the parse tree
	 */
	enterDateprop?: (ctx: DatepropContext) => void;
	/**
	 * Exit a parse tree produced by `truefalseParser.dateprop`.
	 * @param ctx the parse tree
	 */
	exitDateprop?: (ctx: DatepropContext) => void;

	/**
	 * Enter a parse tree produced by `truefalseParser.dateprop_chained`.
	 * @param ctx the parse tree
	 */
	enterDateprop_chained?: (ctx: Dateprop_chainedContext) => void;
	/**
	 * Exit a parse tree produced by `truefalseParser.dateprop_chained`.
	 * @param ctx the parse tree
	 */
	exitDateprop_chained?: (ctx: Dateprop_chainedContext) => void;

	/**
	 * Enter a parse tree produced by `truefalseParser.instruction`.
	 * @param ctx the parse tree
	 */
	enterInstruction?: (ctx: InstructionContext) => void;
	/**
	 * Exit a parse tree produced by `truefalseParser.instruction`.
	 * @param ctx the parse tree
	 */
	exitInstruction?: (ctx: InstructionContext) => void;

	/**
	 * Enter a parse tree produced by `truefalseParser.hint`.
	 * @param ctx the parse tree
	 */
	enterHint?: (ctx: HintContext) => void;
	/**
	 * Exit a parse tree produced by `truefalseParser.hint`.
	 * @param ctx the parse tree
	 */
	exitHint?: (ctx: HintContext) => void;

	/**
	 * Enter a parse tree produced by `truefalseParser.title`.
	 * @param ctx the parse tree
	 */
	enterTitle?: (ctx: TitleContext) => void;
	/**
	 * Exit a parse tree produced by `truefalseParser.title`.
	 * @param ctx the parse tree
	 */
	exitTitle?: (ctx: TitleContext) => void;

	/**
	 * Enter a parse tree produced by `truefalseParser.bool_label`.
	 * @param ctx the parse tree
	 */
	enterBool_label?: (ctx: Bool_labelContext) => void;
	/**
	 * Exit a parse tree produced by `truefalseParser.bool_label`.
	 * @param ctx the parse tree
	 */
	exitBool_label?: (ctx: Bool_labelContext) => void;

	/**
	 * Enter a parse tree produced by `truefalseParser.progress_points`.
	 * @param ctx the parse tree
	 */
	enterProgress_points?: (ctx: Progress_pointsContext) => void;
	/**
	 * Exit a parse tree produced by `truefalseParser.progress_points`.
	 * @param ctx the parse tree
	 */
	exitProgress_points?: (ctx: Progress_pointsContext) => void;

	/**
	 * Enter a parse tree produced by `truefalseParser.istracked`.
	 * @param ctx the parse tree
	 */
	enterIstracked?: (ctx: IstrackedContext) => void;
	/**
	 * Exit a parse tree produced by `truefalseParser.istracked`.
	 * @param ctx the parse tree
	 */
	exitIstracked?: (ctx: IstrackedContext) => void;

	/**
	 * Enter a parse tree produced by `truefalseParser.isinfoonly`.
	 * @param ctx the parse tree
	 */
	enterIsinfoonly?: (ctx: IsinfoonlyContext) => void;
	/**
	 * Exit a parse tree produced by `truefalseParser.isinfoonly`.
	 * @param ctx the parse tree
	 */
	exitIsinfoonly?: (ctx: IsinfoonlyContext) => void;

	/**
	 * Enter a parse tree produced by `truefalseParser.atdef`.
	 * @param ctx the parse tree
	 */
	enterAtdef?: (ctx: AtdefContext) => void;
	/**
	 * Exit a parse tree produced by `truefalseParser.atdef`.
	 * @param ctx the parse tree
	 */
	exitAtdef?: (ctx: AtdefContext) => void;

	/**
	 * Enter a parse tree produced by `truefalseParser.atdef_`.
	 * @param ctx the parse tree
	 */
	enterAtdef_?: (ctx: Atdef_Context) => void;
	/**
	 * Exit a parse tree produced by `truefalseParser.atdef_`.
	 * @param ctx the parse tree
	 */
	exitAtdef_?: (ctx: Atdef_Context) => void;

	/**
	 * Enter a parse tree produced by `truefalseParser.dollarans`.
	 * @param ctx the parse tree
	 */
	enterDollarans?: (ctx: DollaransContext) => void;
	/**
	 * Exit a parse tree produced by `truefalseParser.dollarans`.
	 * @param ctx the parse tree
	 */
	exitDollarans?: (ctx: DollaransContext) => void;

	/**
	 * Enter a parse tree produced by `truefalseParser.anchor`.
	 * @param ctx the parse tree
	 */
	enterAnchor?: (ctx: AnchorContext) => void;
	/**
	 * Exit a parse tree produced by `truefalseParser.anchor`.
	 * @param ctx the parse tree
	 */
	exitAnchor?: (ctx: AnchorContext) => void;

	/**
	 * Enter a parse tree produced by `truefalseParser.lines`.
	 * @param ctx the parse tree
	 */
	enterLines?: (ctx: LinesContext) => void;
	/**
	 * Exit a parse tree produced by `truefalseParser.lines`.
	 * @param ctx the parse tree
	 */
	exitLines?: (ctx: LinesContext) => void;

	/**
	 * Enter a parse tree produced by `truefalseParser.s_and_w`.
	 * @param ctx the parse tree
	 */
	enterS_and_w?: (ctx: S_and_wContext) => void;
	/**
	 * Exit a parse tree produced by `truefalseParser.s_and_w`.
	 * @param ctx the parse tree
	 */
	exitS_and_w?: (ctx: S_and_wContext) => void;

	/**
	 * Enter a parse tree produced by `truefalseParser.dclines`.
	 * @param ctx the parse tree
	 */
	enterDclines?: (ctx: DclinesContext) => void;
	/**
	 * Exit a parse tree produced by `truefalseParser.dclines`.
	 * @param ctx the parse tree
	 */
	exitDclines?: (ctx: DclinesContext) => void;

	/**
	 * Enter a parse tree produced by `truefalseParser.clnsp`.
	 * @param ctx the parse tree
	 */
	enterClnsp?: (ctx: ClnspContext) => void;
	/**
	 * Exit a parse tree produced by `truefalseParser.clnsp`.
	 * @param ctx the parse tree
	 */
	exitClnsp?: (ctx: ClnspContext) => void;

	/**
	 * Enter a parse tree produced by `truefalseParser.sspl`.
	 * @param ctx the parse tree
	 */
	enterSspl?: (ctx: SsplContext) => void;
	/**
	 * Exit a parse tree produced by `truefalseParser.sspl`.
	 * @param ctx the parse tree
	 */
	exitSspl?: (ctx: SsplContext) => void;

	/**
	 * Enter a parse tree produced by `truefalseParser.words`.
	 * @param ctx the parse tree
	 */
	enterWords?: (ctx: WordsContext) => void;
	/**
	 * Exit a parse tree produced by `truefalseParser.words`.
	 * @param ctx the parse tree
	 */
	exitWords?: (ctx: WordsContext) => void;

	/**
	 * Enter a parse tree produced by `truefalseParser.sp`.
	 * @param ctx the parse tree
	 */
	enterSp?: (ctx: SpContext) => void;
	/**
	 * Exit a parse tree produced by `truefalseParser.sp`.
	 * @param ctx the parse tree
	 */
	exitSp?: (ctx: SpContext) => void;
}

