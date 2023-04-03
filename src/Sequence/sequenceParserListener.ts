// Generated from ./Sequence/sequenceParser.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

import { BitmarkContext } from "./sequenceParser";
import { Bitmark_Context } from "./sequenceParser";
import { BitContext } from "./sequenceParser";
import { SequenceContext } from "./sequenceParser";
import { SeqstrContext } from "./sequenceParser";
import { MmmContext } from "./sequenceParser";
import { BitElemContext } from "./sequenceParser";
import { GapContext } from "./sequenceParser";
import { Single_gapContext } from "./sequenceParser";
import { Choice_plusContext } from "./sequenceParser";
import { Choice_minusContext } from "./sequenceParser";
import { Choice_starContext } from "./sequenceParser";
import { ResourceContext } from "./sequenceParser";
import { Bullet_itemContext } from "./sequenceParser";
import { AtpointContext } from "./sequenceParser";
import { FormatContext } from "./sequenceParser";
import { Resource_formatContext } from "./sequenceParser";
import { Resource_format_extraContext } from "./sequenceParser";
import { Format2Context } from "./sequenceParser";
import { Image_formatContext } from "./sequenceParser";
import { Video_formatContext } from "./sequenceParser";
import { Article_formatContext } from "./sequenceParser";
import { Document_formatContext } from "./sequenceParser";
import { App_formatContext } from "./sequenceParser";
import { Website_formatContext } from "./sequenceParser";
import { Stillimagefilm_formatContext } from "./sequenceParser";
import { Op_article_formatContext } from "./sequenceParser";
import { Op_document_formatContext } from "./sequenceParser";
import { Op_app_formatContext } from "./sequenceParser";
import { Op_website_formatContext } from "./sequenceParser";
import { Op_video_formatContext } from "./sequenceParser";
import { Op_stillimagefilm_formatContext } from "./sequenceParser";
import { ArticlebitContext } from "./sequenceParser";
import { DocumentbitContext } from "./sequenceParser";
import { WebsitebitContext } from "./sequenceParser";
import { AppbitContext } from "./sequenceParser";
import { StillimagefilmbitContext } from "./sequenceParser";
import { Stillimg_oneContext } from "./sequenceParser";
import { VideobitContext } from "./sequenceParser";
import { Video_oneContext } from "./sequenceParser";
import { ImagebitContext } from "./sequenceParser";
import { Image_oneContext } from "./sequenceParser";
import { Op_image_formatContext } from "./sequenceParser";
import { Image_chainedContext } from "./sequenceParser";
import { Image_chained4matchContext } from "./sequenceParser";
import { AudiobitContext } from "./sequenceParser";
import { Audio_oneContext } from "./sequenceParser";
import { Audio_formatContext } from "./sequenceParser";
import { Op_audio_formatContext } from "./sequenceParser";
import { Resource_chainedContext } from "./sequenceParser";
import { TelephoneContext } from "./sequenceParser";
import { UrlContext } from "./sequenceParser";
import { ItemContext } from "./sequenceParser";
import { LeadContext } from "./sequenceParser";
import { AnglerefContext } from "./sequenceParser";
import { ExampleContext } from "./sequenceParser";
import { Bracketed_textContext } from "./sequenceParser";
import { ReferenceContext } from "./sequenceParser";
import { ProgressContext } from "./sequenceParser";
import { DatepropContext } from "./sequenceParser";
import { Dateprop_chainedContext } from "./sequenceParser";
import { InstructionContext } from "./sequenceParser";
import { HintContext } from "./sequenceParser";
import { TitleContext } from "./sequenceParser";
import { Bool_labelContext } from "./sequenceParser";
import { Progress_pointsContext } from "./sequenceParser";
import { IstrackedContext } from "./sequenceParser";
import { IsinfoonlyContext } from "./sequenceParser";
import { AtdefContext } from "./sequenceParser";
import { Atdef_Context } from "./sequenceParser";
import { DollaransContext } from "./sequenceParser";
import { AnchorContext } from "./sequenceParser";
import { DcolonContext } from "./sequenceParser";
import { S_and_wContext } from "./sequenceParser";
import { DclinesContext } from "./sequenceParser";
import { ClnspContext } from "./sequenceParser";
import { SsplContext } from "./sequenceParser";
import { WordsContext } from "./sequenceParser";
import { SpContext } from "./sequenceParser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `sequenceParser`.
 */
export interface sequenceParserListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `sequenceParser.bitmark`.
	 * @param ctx the parse tree
	 */
	enterBitmark?: (ctx: BitmarkContext) => void;
	/**
	 * Exit a parse tree produced by `sequenceParser.bitmark`.
	 * @param ctx the parse tree
	 */
	exitBitmark?: (ctx: BitmarkContext) => void;

	/**
	 * Enter a parse tree produced by `sequenceParser.bitmark_`.
	 * @param ctx the parse tree
	 */
	enterBitmark_?: (ctx: Bitmark_Context) => void;
	/**
	 * Exit a parse tree produced by `sequenceParser.bitmark_`.
	 * @param ctx the parse tree
	 */
	exitBitmark_?: (ctx: Bitmark_Context) => void;

	/**
	 * Enter a parse tree produced by `sequenceParser.bit`.
	 * @param ctx the parse tree
	 */
	enterBit?: (ctx: BitContext) => void;
	/**
	 * Exit a parse tree produced by `sequenceParser.bit`.
	 * @param ctx the parse tree
	 */
	exitBit?: (ctx: BitContext) => void;

	/**
	 * Enter a parse tree produced by `sequenceParser.sequence`.
	 * @param ctx the parse tree
	 */
	enterSequence?: (ctx: SequenceContext) => void;
	/**
	 * Exit a parse tree produced by `sequenceParser.sequence`.
	 * @param ctx the parse tree
	 */
	exitSequence?: (ctx: SequenceContext) => void;

	/**
	 * Enter a parse tree produced by `sequenceParser.seqstr`.
	 * @param ctx the parse tree
	 */
	enterSeqstr?: (ctx: SeqstrContext) => void;
	/**
	 * Exit a parse tree produced by `sequenceParser.seqstr`.
	 * @param ctx the parse tree
	 */
	exitSeqstr?: (ctx: SeqstrContext) => void;

	/**
	 * Enter a parse tree produced by `sequenceParser.mmm`.
	 * @param ctx the parse tree
	 */
	enterMmm?: (ctx: MmmContext) => void;
	/**
	 * Exit a parse tree produced by `sequenceParser.mmm`.
	 * @param ctx the parse tree
	 */
	exitMmm?: (ctx: MmmContext) => void;

	/**
	 * Enter a parse tree produced by `sequenceParser.bitElem`.
	 * @param ctx the parse tree
	 */
	enterBitElem?: (ctx: BitElemContext) => void;
	/**
	 * Exit a parse tree produced by `sequenceParser.bitElem`.
	 * @param ctx the parse tree
	 */
	exitBitElem?: (ctx: BitElemContext) => void;

	/**
	 * Enter a parse tree produced by `sequenceParser.gap`.
	 * @param ctx the parse tree
	 */
	enterGap?: (ctx: GapContext) => void;
	/**
	 * Exit a parse tree produced by `sequenceParser.gap`.
	 * @param ctx the parse tree
	 */
	exitGap?: (ctx: GapContext) => void;

	/**
	 * Enter a parse tree produced by `sequenceParser.single_gap`.
	 * @param ctx the parse tree
	 */
	enterSingle_gap?: (ctx: Single_gapContext) => void;
	/**
	 * Exit a parse tree produced by `sequenceParser.single_gap`.
	 * @param ctx the parse tree
	 */
	exitSingle_gap?: (ctx: Single_gapContext) => void;

	/**
	 * Enter a parse tree produced by `sequenceParser.choice_plus`.
	 * @param ctx the parse tree
	 */
	enterChoice_plus?: (ctx: Choice_plusContext) => void;
	/**
	 * Exit a parse tree produced by `sequenceParser.choice_plus`.
	 * @param ctx the parse tree
	 */
	exitChoice_plus?: (ctx: Choice_plusContext) => void;

	/**
	 * Enter a parse tree produced by `sequenceParser.choice_minus`.
	 * @param ctx the parse tree
	 */
	enterChoice_minus?: (ctx: Choice_minusContext) => void;
	/**
	 * Exit a parse tree produced by `sequenceParser.choice_minus`.
	 * @param ctx the parse tree
	 */
	exitChoice_minus?: (ctx: Choice_minusContext) => void;

	/**
	 * Enter a parse tree produced by `sequenceParser.choice_star`.
	 * @param ctx the parse tree
	 */
	enterChoice_star?: (ctx: Choice_starContext) => void;
	/**
	 * Exit a parse tree produced by `sequenceParser.choice_star`.
	 * @param ctx the parse tree
	 */
	exitChoice_star?: (ctx: Choice_starContext) => void;

	/**
	 * Enter a parse tree produced by `sequenceParser.resource`.
	 * @param ctx the parse tree
	 */
	enterResource?: (ctx: ResourceContext) => void;
	/**
	 * Exit a parse tree produced by `sequenceParser.resource`.
	 * @param ctx the parse tree
	 */
	exitResource?: (ctx: ResourceContext) => void;

	/**
	 * Enter a parse tree produced by `sequenceParser.bullet_item`.
	 * @param ctx the parse tree
	 */
	enterBullet_item?: (ctx: Bullet_itemContext) => void;
	/**
	 * Exit a parse tree produced by `sequenceParser.bullet_item`.
	 * @param ctx the parse tree
	 */
	exitBullet_item?: (ctx: Bullet_itemContext) => void;

	/**
	 * Enter a parse tree produced by `sequenceParser.atpoint`.
	 * @param ctx the parse tree
	 */
	enterAtpoint?: (ctx: AtpointContext) => void;
	/**
	 * Exit a parse tree produced by `sequenceParser.atpoint`.
	 * @param ctx the parse tree
	 */
	exitAtpoint?: (ctx: AtpointContext) => void;

	/**
	 * Enter a parse tree produced by `sequenceParser.format`.
	 * @param ctx the parse tree
	 */
	enterFormat?: (ctx: FormatContext) => void;
	/**
	 * Exit a parse tree produced by `sequenceParser.format`.
	 * @param ctx the parse tree
	 */
	exitFormat?: (ctx: FormatContext) => void;

	/**
	 * Enter a parse tree produced by `sequenceParser.resource_format`.
	 * @param ctx the parse tree
	 */
	enterResource_format?: (ctx: Resource_formatContext) => void;
	/**
	 * Exit a parse tree produced by `sequenceParser.resource_format`.
	 * @param ctx the parse tree
	 */
	exitResource_format?: (ctx: Resource_formatContext) => void;

	/**
	 * Enter a parse tree produced by `sequenceParser.resource_format_extra`.
	 * @param ctx the parse tree
	 */
	enterResource_format_extra?: (ctx: Resource_format_extraContext) => void;
	/**
	 * Exit a parse tree produced by `sequenceParser.resource_format_extra`.
	 * @param ctx the parse tree
	 */
	exitResource_format_extra?: (ctx: Resource_format_extraContext) => void;

	/**
	 * Enter a parse tree produced by `sequenceParser.format2`.
	 * @param ctx the parse tree
	 */
	enterFormat2?: (ctx: Format2Context) => void;
	/**
	 * Exit a parse tree produced by `sequenceParser.format2`.
	 * @param ctx the parse tree
	 */
	exitFormat2?: (ctx: Format2Context) => void;

	/**
	 * Enter a parse tree produced by `sequenceParser.image_format`.
	 * @param ctx the parse tree
	 */
	enterImage_format?: (ctx: Image_formatContext) => void;
	/**
	 * Exit a parse tree produced by `sequenceParser.image_format`.
	 * @param ctx the parse tree
	 */
	exitImage_format?: (ctx: Image_formatContext) => void;

	/**
	 * Enter a parse tree produced by `sequenceParser.video_format`.
	 * @param ctx the parse tree
	 */
	enterVideo_format?: (ctx: Video_formatContext) => void;
	/**
	 * Exit a parse tree produced by `sequenceParser.video_format`.
	 * @param ctx the parse tree
	 */
	exitVideo_format?: (ctx: Video_formatContext) => void;

	/**
	 * Enter a parse tree produced by `sequenceParser.article_format`.
	 * @param ctx the parse tree
	 */
	enterArticle_format?: (ctx: Article_formatContext) => void;
	/**
	 * Exit a parse tree produced by `sequenceParser.article_format`.
	 * @param ctx the parse tree
	 */
	exitArticle_format?: (ctx: Article_formatContext) => void;

	/**
	 * Enter a parse tree produced by `sequenceParser.document_format`.
	 * @param ctx the parse tree
	 */
	enterDocument_format?: (ctx: Document_formatContext) => void;
	/**
	 * Exit a parse tree produced by `sequenceParser.document_format`.
	 * @param ctx the parse tree
	 */
	exitDocument_format?: (ctx: Document_formatContext) => void;

	/**
	 * Enter a parse tree produced by `sequenceParser.app_format`.
	 * @param ctx the parse tree
	 */
	enterApp_format?: (ctx: App_formatContext) => void;
	/**
	 * Exit a parse tree produced by `sequenceParser.app_format`.
	 * @param ctx the parse tree
	 */
	exitApp_format?: (ctx: App_formatContext) => void;

	/**
	 * Enter a parse tree produced by `sequenceParser.website_format`.
	 * @param ctx the parse tree
	 */
	enterWebsite_format?: (ctx: Website_formatContext) => void;
	/**
	 * Exit a parse tree produced by `sequenceParser.website_format`.
	 * @param ctx the parse tree
	 */
	exitWebsite_format?: (ctx: Website_formatContext) => void;

	/**
	 * Enter a parse tree produced by `sequenceParser.stillimagefilm_format`.
	 * @param ctx the parse tree
	 */
	enterStillimagefilm_format?: (ctx: Stillimagefilm_formatContext) => void;
	/**
	 * Exit a parse tree produced by `sequenceParser.stillimagefilm_format`.
	 * @param ctx the parse tree
	 */
	exitStillimagefilm_format?: (ctx: Stillimagefilm_formatContext) => void;

	/**
	 * Enter a parse tree produced by `sequenceParser.op_article_format`.
	 * @param ctx the parse tree
	 */
	enterOp_article_format?: (ctx: Op_article_formatContext) => void;
	/**
	 * Exit a parse tree produced by `sequenceParser.op_article_format`.
	 * @param ctx the parse tree
	 */
	exitOp_article_format?: (ctx: Op_article_formatContext) => void;

	/**
	 * Enter a parse tree produced by `sequenceParser.op_document_format`.
	 * @param ctx the parse tree
	 */
	enterOp_document_format?: (ctx: Op_document_formatContext) => void;
	/**
	 * Exit a parse tree produced by `sequenceParser.op_document_format`.
	 * @param ctx the parse tree
	 */
	exitOp_document_format?: (ctx: Op_document_formatContext) => void;

	/**
	 * Enter a parse tree produced by `sequenceParser.op_app_format`.
	 * @param ctx the parse tree
	 */
	enterOp_app_format?: (ctx: Op_app_formatContext) => void;
	/**
	 * Exit a parse tree produced by `sequenceParser.op_app_format`.
	 * @param ctx the parse tree
	 */
	exitOp_app_format?: (ctx: Op_app_formatContext) => void;

	/**
	 * Enter a parse tree produced by `sequenceParser.op_website_format`.
	 * @param ctx the parse tree
	 */
	enterOp_website_format?: (ctx: Op_website_formatContext) => void;
	/**
	 * Exit a parse tree produced by `sequenceParser.op_website_format`.
	 * @param ctx the parse tree
	 */
	exitOp_website_format?: (ctx: Op_website_formatContext) => void;

	/**
	 * Enter a parse tree produced by `sequenceParser.op_video_format`.
	 * @param ctx the parse tree
	 */
	enterOp_video_format?: (ctx: Op_video_formatContext) => void;
	/**
	 * Exit a parse tree produced by `sequenceParser.op_video_format`.
	 * @param ctx the parse tree
	 */
	exitOp_video_format?: (ctx: Op_video_formatContext) => void;

	/**
	 * Enter a parse tree produced by `sequenceParser.op_stillimagefilm_format`.
	 * @param ctx the parse tree
	 */
	enterOp_stillimagefilm_format?: (ctx: Op_stillimagefilm_formatContext) => void;
	/**
	 * Exit a parse tree produced by `sequenceParser.op_stillimagefilm_format`.
	 * @param ctx the parse tree
	 */
	exitOp_stillimagefilm_format?: (ctx: Op_stillimagefilm_formatContext) => void;

	/**
	 * Enter a parse tree produced by `sequenceParser.articlebit`.
	 * @param ctx the parse tree
	 */
	enterArticlebit?: (ctx: ArticlebitContext) => void;
	/**
	 * Exit a parse tree produced by `sequenceParser.articlebit`.
	 * @param ctx the parse tree
	 */
	exitArticlebit?: (ctx: ArticlebitContext) => void;

	/**
	 * Enter a parse tree produced by `sequenceParser.documentbit`.
	 * @param ctx the parse tree
	 */
	enterDocumentbit?: (ctx: DocumentbitContext) => void;
	/**
	 * Exit a parse tree produced by `sequenceParser.documentbit`.
	 * @param ctx the parse tree
	 */
	exitDocumentbit?: (ctx: DocumentbitContext) => void;

	/**
	 * Enter a parse tree produced by `sequenceParser.websitebit`.
	 * @param ctx the parse tree
	 */
	enterWebsitebit?: (ctx: WebsitebitContext) => void;
	/**
	 * Exit a parse tree produced by `sequenceParser.websitebit`.
	 * @param ctx the parse tree
	 */
	exitWebsitebit?: (ctx: WebsitebitContext) => void;

	/**
	 * Enter a parse tree produced by `sequenceParser.appbit`.
	 * @param ctx the parse tree
	 */
	enterAppbit?: (ctx: AppbitContext) => void;
	/**
	 * Exit a parse tree produced by `sequenceParser.appbit`.
	 * @param ctx the parse tree
	 */
	exitAppbit?: (ctx: AppbitContext) => void;

	/**
	 * Enter a parse tree produced by `sequenceParser.stillimagefilmbit`.
	 * @param ctx the parse tree
	 */
	enterStillimagefilmbit?: (ctx: StillimagefilmbitContext) => void;
	/**
	 * Exit a parse tree produced by `sequenceParser.stillimagefilmbit`.
	 * @param ctx the parse tree
	 */
	exitStillimagefilmbit?: (ctx: StillimagefilmbitContext) => void;

	/**
	 * Enter a parse tree produced by `sequenceParser.stillimg_one`.
	 * @param ctx the parse tree
	 */
	enterStillimg_one?: (ctx: Stillimg_oneContext) => void;
	/**
	 * Exit a parse tree produced by `sequenceParser.stillimg_one`.
	 * @param ctx the parse tree
	 */
	exitStillimg_one?: (ctx: Stillimg_oneContext) => void;

	/**
	 * Enter a parse tree produced by `sequenceParser.videobit`.
	 * @param ctx the parse tree
	 */
	enterVideobit?: (ctx: VideobitContext) => void;
	/**
	 * Exit a parse tree produced by `sequenceParser.videobit`.
	 * @param ctx the parse tree
	 */
	exitVideobit?: (ctx: VideobitContext) => void;

	/**
	 * Enter a parse tree produced by `sequenceParser.video_one`.
	 * @param ctx the parse tree
	 */
	enterVideo_one?: (ctx: Video_oneContext) => void;
	/**
	 * Exit a parse tree produced by `sequenceParser.video_one`.
	 * @param ctx the parse tree
	 */
	exitVideo_one?: (ctx: Video_oneContext) => void;

	/**
	 * Enter a parse tree produced by `sequenceParser.imagebit`.
	 * @param ctx the parse tree
	 */
	enterImagebit?: (ctx: ImagebitContext) => void;
	/**
	 * Exit a parse tree produced by `sequenceParser.imagebit`.
	 * @param ctx the parse tree
	 */
	exitImagebit?: (ctx: ImagebitContext) => void;

	/**
	 * Enter a parse tree produced by `sequenceParser.image_one`.
	 * @param ctx the parse tree
	 */
	enterImage_one?: (ctx: Image_oneContext) => void;
	/**
	 * Exit a parse tree produced by `sequenceParser.image_one`.
	 * @param ctx the parse tree
	 */
	exitImage_one?: (ctx: Image_oneContext) => void;

	/**
	 * Enter a parse tree produced by `sequenceParser.op_image_format`.
	 * @param ctx the parse tree
	 */
	enterOp_image_format?: (ctx: Op_image_formatContext) => void;
	/**
	 * Exit a parse tree produced by `sequenceParser.op_image_format`.
	 * @param ctx the parse tree
	 */
	exitOp_image_format?: (ctx: Op_image_formatContext) => void;

	/**
	 * Enter a parse tree produced by `sequenceParser.image_chained`.
	 * @param ctx the parse tree
	 */
	enterImage_chained?: (ctx: Image_chainedContext) => void;
	/**
	 * Exit a parse tree produced by `sequenceParser.image_chained`.
	 * @param ctx the parse tree
	 */
	exitImage_chained?: (ctx: Image_chainedContext) => void;

	/**
	 * Enter a parse tree produced by `sequenceParser.image_chained4match`.
	 * @param ctx the parse tree
	 */
	enterImage_chained4match?: (ctx: Image_chained4matchContext) => void;
	/**
	 * Exit a parse tree produced by `sequenceParser.image_chained4match`.
	 * @param ctx the parse tree
	 */
	exitImage_chained4match?: (ctx: Image_chained4matchContext) => void;

	/**
	 * Enter a parse tree produced by `sequenceParser.audiobit`.
	 * @param ctx the parse tree
	 */
	enterAudiobit?: (ctx: AudiobitContext) => void;
	/**
	 * Exit a parse tree produced by `sequenceParser.audiobit`.
	 * @param ctx the parse tree
	 */
	exitAudiobit?: (ctx: AudiobitContext) => void;

	/**
	 * Enter a parse tree produced by `sequenceParser.audio_one`.
	 * @param ctx the parse tree
	 */
	enterAudio_one?: (ctx: Audio_oneContext) => void;
	/**
	 * Exit a parse tree produced by `sequenceParser.audio_one`.
	 * @param ctx the parse tree
	 */
	exitAudio_one?: (ctx: Audio_oneContext) => void;

	/**
	 * Enter a parse tree produced by `sequenceParser.audio_format`.
	 * @param ctx the parse tree
	 */
	enterAudio_format?: (ctx: Audio_formatContext) => void;
	/**
	 * Exit a parse tree produced by `sequenceParser.audio_format`.
	 * @param ctx the parse tree
	 */
	exitAudio_format?: (ctx: Audio_formatContext) => void;

	/**
	 * Enter a parse tree produced by `sequenceParser.op_audio_format`.
	 * @param ctx the parse tree
	 */
	enterOp_audio_format?: (ctx: Op_audio_formatContext) => void;
	/**
	 * Exit a parse tree produced by `sequenceParser.op_audio_format`.
	 * @param ctx the parse tree
	 */
	exitOp_audio_format?: (ctx: Op_audio_formatContext) => void;

	/**
	 * Enter a parse tree produced by `sequenceParser.resource_chained`.
	 * @param ctx the parse tree
	 */
	enterResource_chained?: (ctx: Resource_chainedContext) => void;
	/**
	 * Exit a parse tree produced by `sequenceParser.resource_chained`.
	 * @param ctx the parse tree
	 */
	exitResource_chained?: (ctx: Resource_chainedContext) => void;

	/**
	 * Enter a parse tree produced by `sequenceParser.telephone`.
	 * @param ctx the parse tree
	 */
	enterTelephone?: (ctx: TelephoneContext) => void;
	/**
	 * Exit a parse tree produced by `sequenceParser.telephone`.
	 * @param ctx the parse tree
	 */
	exitTelephone?: (ctx: TelephoneContext) => void;

	/**
	 * Enter a parse tree produced by `sequenceParser.url`.
	 * @param ctx the parse tree
	 */
	enterUrl?: (ctx: UrlContext) => void;
	/**
	 * Exit a parse tree produced by `sequenceParser.url`.
	 * @param ctx the parse tree
	 */
	exitUrl?: (ctx: UrlContext) => void;

	/**
	 * Enter a parse tree produced by `sequenceParser.item`.
	 * @param ctx the parse tree
	 */
	enterItem?: (ctx: ItemContext) => void;
	/**
	 * Exit a parse tree produced by `sequenceParser.item`.
	 * @param ctx the parse tree
	 */
	exitItem?: (ctx: ItemContext) => void;

	/**
	 * Enter a parse tree produced by `sequenceParser.lead`.
	 * @param ctx the parse tree
	 */
	enterLead?: (ctx: LeadContext) => void;
	/**
	 * Exit a parse tree produced by `sequenceParser.lead`.
	 * @param ctx the parse tree
	 */
	exitLead?: (ctx: LeadContext) => void;

	/**
	 * Enter a parse tree produced by `sequenceParser.angleref`.
	 * @param ctx the parse tree
	 */
	enterAngleref?: (ctx: AnglerefContext) => void;
	/**
	 * Exit a parse tree produced by `sequenceParser.angleref`.
	 * @param ctx the parse tree
	 */
	exitAngleref?: (ctx: AnglerefContext) => void;

	/**
	 * Enter a parse tree produced by `sequenceParser.example`.
	 * @param ctx the parse tree
	 */
	enterExample?: (ctx: ExampleContext) => void;
	/**
	 * Exit a parse tree produced by `sequenceParser.example`.
	 * @param ctx the parse tree
	 */
	exitExample?: (ctx: ExampleContext) => void;

	/**
	 * Enter a parse tree produced by `sequenceParser.bracketed_text`.
	 * @param ctx the parse tree
	 */
	enterBracketed_text?: (ctx: Bracketed_textContext) => void;
	/**
	 * Exit a parse tree produced by `sequenceParser.bracketed_text`.
	 * @param ctx the parse tree
	 */
	exitBracketed_text?: (ctx: Bracketed_textContext) => void;

	/**
	 * Enter a parse tree produced by `sequenceParser.reference`.
	 * @param ctx the parse tree
	 */
	enterReference?: (ctx: ReferenceContext) => void;
	/**
	 * Exit a parse tree produced by `sequenceParser.reference`.
	 * @param ctx the parse tree
	 */
	exitReference?: (ctx: ReferenceContext) => void;

	/**
	 * Enter a parse tree produced by `sequenceParser.progress`.
	 * @param ctx the parse tree
	 */
	enterProgress?: (ctx: ProgressContext) => void;
	/**
	 * Exit a parse tree produced by `sequenceParser.progress`.
	 * @param ctx the parse tree
	 */
	exitProgress?: (ctx: ProgressContext) => void;

	/**
	 * Enter a parse tree produced by `sequenceParser.dateprop`.
	 * @param ctx the parse tree
	 */
	enterDateprop?: (ctx: DatepropContext) => void;
	/**
	 * Exit a parse tree produced by `sequenceParser.dateprop`.
	 * @param ctx the parse tree
	 */
	exitDateprop?: (ctx: DatepropContext) => void;

	/**
	 * Enter a parse tree produced by `sequenceParser.dateprop_chained`.
	 * @param ctx the parse tree
	 */
	enterDateprop_chained?: (ctx: Dateprop_chainedContext) => void;
	/**
	 * Exit a parse tree produced by `sequenceParser.dateprop_chained`.
	 * @param ctx the parse tree
	 */
	exitDateprop_chained?: (ctx: Dateprop_chainedContext) => void;

	/**
	 * Enter a parse tree produced by `sequenceParser.instruction`.
	 * @param ctx the parse tree
	 */
	enterInstruction?: (ctx: InstructionContext) => void;
	/**
	 * Exit a parse tree produced by `sequenceParser.instruction`.
	 * @param ctx the parse tree
	 */
	exitInstruction?: (ctx: InstructionContext) => void;

	/**
	 * Enter a parse tree produced by `sequenceParser.hint`.
	 * @param ctx the parse tree
	 */
	enterHint?: (ctx: HintContext) => void;
	/**
	 * Exit a parse tree produced by `sequenceParser.hint`.
	 * @param ctx the parse tree
	 */
	exitHint?: (ctx: HintContext) => void;

	/**
	 * Enter a parse tree produced by `sequenceParser.title`.
	 * @param ctx the parse tree
	 */
	enterTitle?: (ctx: TitleContext) => void;
	/**
	 * Exit a parse tree produced by `sequenceParser.title`.
	 * @param ctx the parse tree
	 */
	exitTitle?: (ctx: TitleContext) => void;

	/**
	 * Enter a parse tree produced by `sequenceParser.bool_label`.
	 * @param ctx the parse tree
	 */
	enterBool_label?: (ctx: Bool_labelContext) => void;
	/**
	 * Exit a parse tree produced by `sequenceParser.bool_label`.
	 * @param ctx the parse tree
	 */
	exitBool_label?: (ctx: Bool_labelContext) => void;

	/**
	 * Enter a parse tree produced by `sequenceParser.progress_points`.
	 * @param ctx the parse tree
	 */
	enterProgress_points?: (ctx: Progress_pointsContext) => void;
	/**
	 * Exit a parse tree produced by `sequenceParser.progress_points`.
	 * @param ctx the parse tree
	 */
	exitProgress_points?: (ctx: Progress_pointsContext) => void;

	/**
	 * Enter a parse tree produced by `sequenceParser.istracked`.
	 * @param ctx the parse tree
	 */
	enterIstracked?: (ctx: IstrackedContext) => void;
	/**
	 * Exit a parse tree produced by `sequenceParser.istracked`.
	 * @param ctx the parse tree
	 */
	exitIstracked?: (ctx: IstrackedContext) => void;

	/**
	 * Enter a parse tree produced by `sequenceParser.isinfoonly`.
	 * @param ctx the parse tree
	 */
	enterIsinfoonly?: (ctx: IsinfoonlyContext) => void;
	/**
	 * Exit a parse tree produced by `sequenceParser.isinfoonly`.
	 * @param ctx the parse tree
	 */
	exitIsinfoonly?: (ctx: IsinfoonlyContext) => void;

	/**
	 * Enter a parse tree produced by `sequenceParser.atdef`.
	 * @param ctx the parse tree
	 */
	enterAtdef?: (ctx: AtdefContext) => void;
	/**
	 * Exit a parse tree produced by `sequenceParser.atdef`.
	 * @param ctx the parse tree
	 */
	exitAtdef?: (ctx: AtdefContext) => void;

	/**
	 * Enter a parse tree produced by `sequenceParser.atdef_`.
	 * @param ctx the parse tree
	 */
	enterAtdef_?: (ctx: Atdef_Context) => void;
	/**
	 * Exit a parse tree produced by `sequenceParser.atdef_`.
	 * @param ctx the parse tree
	 */
	exitAtdef_?: (ctx: Atdef_Context) => void;

	/**
	 * Enter a parse tree produced by `sequenceParser.dollarans`.
	 * @param ctx the parse tree
	 */
	enterDollarans?: (ctx: DollaransContext) => void;
	/**
	 * Exit a parse tree produced by `sequenceParser.dollarans`.
	 * @param ctx the parse tree
	 */
	exitDollarans?: (ctx: DollaransContext) => void;

	/**
	 * Enter a parse tree produced by `sequenceParser.anchor`.
	 * @param ctx the parse tree
	 */
	enterAnchor?: (ctx: AnchorContext) => void;
	/**
	 * Exit a parse tree produced by `sequenceParser.anchor`.
	 * @param ctx the parse tree
	 */
	exitAnchor?: (ctx: AnchorContext) => void;

	/**
	 * Enter a parse tree produced by `sequenceParser.dcolon`.
	 * @param ctx the parse tree
	 */
	enterDcolon?: (ctx: DcolonContext) => void;
	/**
	 * Exit a parse tree produced by `sequenceParser.dcolon`.
	 * @param ctx the parse tree
	 */
	exitDcolon?: (ctx: DcolonContext) => void;

	/**
	 * Enter a parse tree produced by `sequenceParser.s_and_w`.
	 * @param ctx the parse tree
	 */
	enterS_and_w?: (ctx: S_and_wContext) => void;
	/**
	 * Exit a parse tree produced by `sequenceParser.s_and_w`.
	 * @param ctx the parse tree
	 */
	exitS_and_w?: (ctx: S_and_wContext) => void;

	/**
	 * Enter a parse tree produced by `sequenceParser.dclines`.
	 * @param ctx the parse tree
	 */
	enterDclines?: (ctx: DclinesContext) => void;
	/**
	 * Exit a parse tree produced by `sequenceParser.dclines`.
	 * @param ctx the parse tree
	 */
	exitDclines?: (ctx: DclinesContext) => void;

	/**
	 * Enter a parse tree produced by `sequenceParser.clnsp`.
	 * @param ctx the parse tree
	 */
	enterClnsp?: (ctx: ClnspContext) => void;
	/**
	 * Exit a parse tree produced by `sequenceParser.clnsp`.
	 * @param ctx the parse tree
	 */
	exitClnsp?: (ctx: ClnspContext) => void;

	/**
	 * Enter a parse tree produced by `sequenceParser.sspl`.
	 * @param ctx the parse tree
	 */
	enterSspl?: (ctx: SsplContext) => void;
	/**
	 * Exit a parse tree produced by `sequenceParser.sspl`.
	 * @param ctx the parse tree
	 */
	exitSspl?: (ctx: SsplContext) => void;

	/**
	 * Enter a parse tree produced by `sequenceParser.words`.
	 * @param ctx the parse tree
	 */
	enterWords?: (ctx: WordsContext) => void;
	/**
	 * Exit a parse tree produced by `sequenceParser.words`.
	 * @param ctx the parse tree
	 */
	exitWords?: (ctx: WordsContext) => void;

	/**
	 * Enter a parse tree produced by `sequenceParser.sp`.
	 * @param ctx the parse tree
	 */
	enterSp?: (ctx: SpContext) => void;
	/**
	 * Exit a parse tree produced by `sequenceParser.sp`.
	 * @param ctx the parse tree
	 */
	exitSp?: (ctx: SpContext) => void;
}

