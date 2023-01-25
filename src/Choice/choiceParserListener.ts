// Generated from ./Choice/choiceParser.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

import { BitmarkContext } from "./choiceParser";
import { Bitmark_Context } from "./choiceParser";
import { Multi_choicesContext } from "./choiceParser";
import { Multiple_choiceContext } from "./choiceParser";
import { McrsepContext } from "./choiceParser";
import { McrmiscContext } from "./choiceParser";
import { Multiple_choice_1Context } from "./choiceParser";
import { Multiple_responseContext } from "./choiceParser";
import { Multiple_response_1Context } from "./choiceParser";
import { Multiple_choice_textContext } from "./choiceParser";
import { Multitxt_il_choiceContext } from "./choiceParser";
import { Highlight_textContext } from "./choiceParser";
import { Highlight_il_choiceContext } from "./choiceParser";
import { BitElemContext } from "./choiceParser";
import { GapContext } from "./choiceParser";
import { Single_gapContext } from "./choiceParser";
import { ChoicesContext } from "./choiceParser";
import { CplusContext } from "./choiceParser";
import { CminusContext } from "./choiceParser";
import { Choice_plusContext } from "./choiceParser";
import { Choice_minusContext } from "./choiceParser";
import { Il_choice_plusContext } from "./choiceParser";
import { Il_choice_minusContext } from "./choiceParser";
import { Headed_inline_choicesContext } from "./choiceParser";
import { Highlight_inline_choicesContext } from "./choiceParser";
import { Headed_choicesContext } from "./choiceParser";
import { Choice_headContext } from "./choiceParser";
import { Inline_choicesContext } from "./choiceParser";
import { Ml_exampleContext } from "./choiceParser";
import { Il_followContext } from "./choiceParser";
import { LongansContext } from "./choiceParser";
import { ShortansContext } from "./choiceParser";
import { ResourceContext } from "./choiceParser";
import { Bullet_itemContext } from "./choiceParser";
import { AtpointContext } from "./choiceParser";
import { FormatContext } from "./choiceParser";
import { Resource_formatContext } from "./choiceParser";
import { Resource_format_extraContext } from "./choiceParser";
import { Format2Context } from "./choiceParser";
import { Image_formatContext } from "./choiceParser";
import { Video_formatContext } from "./choiceParser";
import { Article_formatContext } from "./choiceParser";
import { Document_formatContext } from "./choiceParser";
import { App_formatContext } from "./choiceParser";
import { Website_formatContext } from "./choiceParser";
import { Stillimagefilm_formatContext } from "./choiceParser";
import { Op_article_formatContext } from "./choiceParser";
import { Op_document_formatContext } from "./choiceParser";
import { Op_app_formatContext } from "./choiceParser";
import { Op_website_formatContext } from "./choiceParser";
import { Op_video_formatContext } from "./choiceParser";
import { Op_stillimagefilm_formatContext } from "./choiceParser";
import { ArticlebitContext } from "./choiceParser";
import { DocumentbitContext } from "./choiceParser";
import { WebsitebitContext } from "./choiceParser";
import { AppbitContext } from "./choiceParser";
import { StillimagefilmbitContext } from "./choiceParser";
import { Stillimg_oneContext } from "./choiceParser";
import { VideobitContext } from "./choiceParser";
import { Video_oneContext } from "./choiceParser";
import { ImagebitContext } from "./choiceParser";
import { Image_oneContext } from "./choiceParser";
import { Op_image_formatContext } from "./choiceParser";
import { Image_chainedContext } from "./choiceParser";
import { Image_chained4matchContext } from "./choiceParser";
import { AudiobitContext } from "./choiceParser";
import { Audio_oneContext } from "./choiceParser";
import { Audio_formatContext } from "./choiceParser";
import { Op_audio_formatContext } from "./choiceParser";
import { Resource_chainedContext } from "./choiceParser";
import { TelephoneContext } from "./choiceParser";
import { UrlContext } from "./choiceParser";
import { ItemContext } from "./choiceParser";
import { LeadContext } from "./choiceParser";
import { AnglerefContext } from "./choiceParser";
import { ExampleContext } from "./choiceParser";
import { Bracketed_textContext } from "./choiceParser";
import { ReferenceContext } from "./choiceParser";
import { ProgressContext } from "./choiceParser";
import { DatepropContext } from "./choiceParser";
import { Dateprop_chainedContext } from "./choiceParser";
import { InstructionContext } from "./choiceParser";
import { HintContext } from "./choiceParser";
import { TitleContext } from "./choiceParser";
import { Bool_labelContext } from "./choiceParser";
import { Progress_pointsContext } from "./choiceParser";
import { IstrackedContext } from "./choiceParser";
import { IsinfoonlyContext } from "./choiceParser";
import { AtdefContext } from "./choiceParser";
import { Atdef_Context } from "./choiceParser";
import { DollaransContext } from "./choiceParser";
import { AnchorContext } from "./choiceParser";
import { DclinesContext } from "./choiceParser";
import { LinesContext } from "./choiceParser";
import { S_and_wContext } from "./choiceParser";
import { Bracket_escapedContext } from "./choiceParser";
import { ClnspContext } from "./choiceParser";
import { SsplContext } from "./choiceParser";
import { WordsContext } from "./choiceParser";
import { SpContext } from "./choiceParser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `choiceParser`.
 */
export interface choiceParserListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `choiceParser.bitmark`.
	 * @param ctx the parse tree
	 */
	enterBitmark?: (ctx: BitmarkContext) => void;
	/**
	 * Exit a parse tree produced by `choiceParser.bitmark`.
	 * @param ctx the parse tree
	 */
	exitBitmark?: (ctx: BitmarkContext) => void;

	/**
	 * Enter a parse tree produced by `choiceParser.bitmark_`.
	 * @param ctx the parse tree
	 */
	enterBitmark_?: (ctx: Bitmark_Context) => void;
	/**
	 * Exit a parse tree produced by `choiceParser.bitmark_`.
	 * @param ctx the parse tree
	 */
	exitBitmark_?: (ctx: Bitmark_Context) => void;

	/**
	 * Enter a parse tree produced by `choiceParser.multi_choices`.
	 * @param ctx the parse tree
	 */
	enterMulti_choices?: (ctx: Multi_choicesContext) => void;
	/**
	 * Exit a parse tree produced by `choiceParser.multi_choices`.
	 * @param ctx the parse tree
	 */
	exitMulti_choices?: (ctx: Multi_choicesContext) => void;

	/**
	 * Enter a parse tree produced by `choiceParser.multiple_choice`.
	 * @param ctx the parse tree
	 */
	enterMultiple_choice?: (ctx: Multiple_choiceContext) => void;
	/**
	 * Exit a parse tree produced by `choiceParser.multiple_choice`.
	 * @param ctx the parse tree
	 */
	exitMultiple_choice?: (ctx: Multiple_choiceContext) => void;

	/**
	 * Enter a parse tree produced by `choiceParser.mcrsep`.
	 * @param ctx the parse tree
	 */
	enterMcrsep?: (ctx: McrsepContext) => void;
	/**
	 * Exit a parse tree produced by `choiceParser.mcrsep`.
	 * @param ctx the parse tree
	 */
	exitMcrsep?: (ctx: McrsepContext) => void;

	/**
	 * Enter a parse tree produced by `choiceParser.mcrmisc`.
	 * @param ctx the parse tree
	 */
	enterMcrmisc?: (ctx: McrmiscContext) => void;
	/**
	 * Exit a parse tree produced by `choiceParser.mcrmisc`.
	 * @param ctx the parse tree
	 */
	exitMcrmisc?: (ctx: McrmiscContext) => void;

	/**
	 * Enter a parse tree produced by `choiceParser.multiple_choice_1`.
	 * @param ctx the parse tree
	 */
	enterMultiple_choice_1?: (ctx: Multiple_choice_1Context) => void;
	/**
	 * Exit a parse tree produced by `choiceParser.multiple_choice_1`.
	 * @param ctx the parse tree
	 */
	exitMultiple_choice_1?: (ctx: Multiple_choice_1Context) => void;

	/**
	 * Enter a parse tree produced by `choiceParser.multiple_response`.
	 * @param ctx the parse tree
	 */
	enterMultiple_response?: (ctx: Multiple_responseContext) => void;
	/**
	 * Exit a parse tree produced by `choiceParser.multiple_response`.
	 * @param ctx the parse tree
	 */
	exitMultiple_response?: (ctx: Multiple_responseContext) => void;

	/**
	 * Enter a parse tree produced by `choiceParser.multiple_response_1`.
	 * @param ctx the parse tree
	 */
	enterMultiple_response_1?: (ctx: Multiple_response_1Context) => void;
	/**
	 * Exit a parse tree produced by `choiceParser.multiple_response_1`.
	 * @param ctx the parse tree
	 */
	exitMultiple_response_1?: (ctx: Multiple_response_1Context) => void;

	/**
	 * Enter a parse tree produced by `choiceParser.multiple_choice_text`.
	 * @param ctx the parse tree
	 */
	enterMultiple_choice_text?: (ctx: Multiple_choice_textContext) => void;
	/**
	 * Exit a parse tree produced by `choiceParser.multiple_choice_text`.
	 * @param ctx the parse tree
	 */
	exitMultiple_choice_text?: (ctx: Multiple_choice_textContext) => void;

	/**
	 * Enter a parse tree produced by `choiceParser.multitxt_il_choice`.
	 * @param ctx the parse tree
	 */
	enterMultitxt_il_choice?: (ctx: Multitxt_il_choiceContext) => void;
	/**
	 * Exit a parse tree produced by `choiceParser.multitxt_il_choice`.
	 * @param ctx the parse tree
	 */
	exitMultitxt_il_choice?: (ctx: Multitxt_il_choiceContext) => void;

	/**
	 * Enter a parse tree produced by `choiceParser.highlight_text`.
	 * @param ctx the parse tree
	 */
	enterHighlight_text?: (ctx: Highlight_textContext) => void;
	/**
	 * Exit a parse tree produced by `choiceParser.highlight_text`.
	 * @param ctx the parse tree
	 */
	exitHighlight_text?: (ctx: Highlight_textContext) => void;

	/**
	 * Enter a parse tree produced by `choiceParser.highlight_il_choice`.
	 * @param ctx the parse tree
	 */
	enterHighlight_il_choice?: (ctx: Highlight_il_choiceContext) => void;
	/**
	 * Exit a parse tree produced by `choiceParser.highlight_il_choice`.
	 * @param ctx the parse tree
	 */
	exitHighlight_il_choice?: (ctx: Highlight_il_choiceContext) => void;

	/**
	 * Enter a parse tree produced by `choiceParser.bitElem`.
	 * @param ctx the parse tree
	 */
	enterBitElem?: (ctx: BitElemContext) => void;
	/**
	 * Exit a parse tree produced by `choiceParser.bitElem`.
	 * @param ctx the parse tree
	 */
	exitBitElem?: (ctx: BitElemContext) => void;

	/**
	 * Enter a parse tree produced by `choiceParser.gap`.
	 * @param ctx the parse tree
	 */
	enterGap?: (ctx: GapContext) => void;
	/**
	 * Exit a parse tree produced by `choiceParser.gap`.
	 * @param ctx the parse tree
	 */
	exitGap?: (ctx: GapContext) => void;

	/**
	 * Enter a parse tree produced by `choiceParser.single_gap`.
	 * @param ctx the parse tree
	 */
	enterSingle_gap?: (ctx: Single_gapContext) => void;
	/**
	 * Exit a parse tree produced by `choiceParser.single_gap`.
	 * @param ctx the parse tree
	 */
	exitSingle_gap?: (ctx: Single_gapContext) => void;

	/**
	 * Enter a parse tree produced by `choiceParser.choices`.
	 * @param ctx the parse tree
	 */
	enterChoices?: (ctx: ChoicesContext) => void;
	/**
	 * Exit a parse tree produced by `choiceParser.choices`.
	 * @param ctx the parse tree
	 */
	exitChoices?: (ctx: ChoicesContext) => void;

	/**
	 * Enter a parse tree produced by `choiceParser.cplus`.
	 * @param ctx the parse tree
	 */
	enterCplus?: (ctx: CplusContext) => void;
	/**
	 * Exit a parse tree produced by `choiceParser.cplus`.
	 * @param ctx the parse tree
	 */
	exitCplus?: (ctx: CplusContext) => void;

	/**
	 * Enter a parse tree produced by `choiceParser.cminus`.
	 * @param ctx the parse tree
	 */
	enterCminus?: (ctx: CminusContext) => void;
	/**
	 * Exit a parse tree produced by `choiceParser.cminus`.
	 * @param ctx the parse tree
	 */
	exitCminus?: (ctx: CminusContext) => void;

	/**
	 * Enter a parse tree produced by `choiceParser.choice_plus`.
	 * @param ctx the parse tree
	 */
	enterChoice_plus?: (ctx: Choice_plusContext) => void;
	/**
	 * Exit a parse tree produced by `choiceParser.choice_plus`.
	 * @param ctx the parse tree
	 */
	exitChoice_plus?: (ctx: Choice_plusContext) => void;

	/**
	 * Enter a parse tree produced by `choiceParser.choice_minus`.
	 * @param ctx the parse tree
	 */
	enterChoice_minus?: (ctx: Choice_minusContext) => void;
	/**
	 * Exit a parse tree produced by `choiceParser.choice_minus`.
	 * @param ctx the parse tree
	 */
	exitChoice_minus?: (ctx: Choice_minusContext) => void;

	/**
	 * Enter a parse tree produced by `choiceParser.il_choice_plus`.
	 * @param ctx the parse tree
	 */
	enterIl_choice_plus?: (ctx: Il_choice_plusContext) => void;
	/**
	 * Exit a parse tree produced by `choiceParser.il_choice_plus`.
	 * @param ctx the parse tree
	 */
	exitIl_choice_plus?: (ctx: Il_choice_plusContext) => void;

	/**
	 * Enter a parse tree produced by `choiceParser.il_choice_minus`.
	 * @param ctx the parse tree
	 */
	enterIl_choice_minus?: (ctx: Il_choice_minusContext) => void;
	/**
	 * Exit a parse tree produced by `choiceParser.il_choice_minus`.
	 * @param ctx the parse tree
	 */
	exitIl_choice_minus?: (ctx: Il_choice_minusContext) => void;

	/**
	 * Enter a parse tree produced by `choiceParser.headed_inline_choices`.
	 * @param ctx the parse tree
	 */
	enterHeaded_inline_choices?: (ctx: Headed_inline_choicesContext) => void;
	/**
	 * Exit a parse tree produced by `choiceParser.headed_inline_choices`.
	 * @param ctx the parse tree
	 */
	exitHeaded_inline_choices?: (ctx: Headed_inline_choicesContext) => void;

	/**
	 * Enter a parse tree produced by `choiceParser.highlight_inline_choices`.
	 * @param ctx the parse tree
	 */
	enterHighlight_inline_choices?: (ctx: Highlight_inline_choicesContext) => void;
	/**
	 * Exit a parse tree produced by `choiceParser.highlight_inline_choices`.
	 * @param ctx the parse tree
	 */
	exitHighlight_inline_choices?: (ctx: Highlight_inline_choicesContext) => void;

	/**
	 * Enter a parse tree produced by `choiceParser.headed_choices`.
	 * @param ctx the parse tree
	 */
	enterHeaded_choices?: (ctx: Headed_choicesContext) => void;
	/**
	 * Exit a parse tree produced by `choiceParser.headed_choices`.
	 * @param ctx the parse tree
	 */
	exitHeaded_choices?: (ctx: Headed_choicesContext) => void;

	/**
	 * Enter a parse tree produced by `choiceParser.choice_head`.
	 * @param ctx the parse tree
	 */
	enterChoice_head?: (ctx: Choice_headContext) => void;
	/**
	 * Exit a parse tree produced by `choiceParser.choice_head`.
	 * @param ctx the parse tree
	 */
	exitChoice_head?: (ctx: Choice_headContext) => void;

	/**
	 * Enter a parse tree produced by `choiceParser.inline_choices`.
	 * @param ctx the parse tree
	 */
	enterInline_choices?: (ctx: Inline_choicesContext) => void;
	/**
	 * Exit a parse tree produced by `choiceParser.inline_choices`.
	 * @param ctx the parse tree
	 */
	exitInline_choices?: (ctx: Inline_choicesContext) => void;

	/**
	 * Enter a parse tree produced by `choiceParser.ml_example`.
	 * @param ctx the parse tree
	 */
	enterMl_example?: (ctx: Ml_exampleContext) => void;
	/**
	 * Exit a parse tree produced by `choiceParser.ml_example`.
	 * @param ctx the parse tree
	 */
	exitMl_example?: (ctx: Ml_exampleContext) => void;

	/**
	 * Enter a parse tree produced by `choiceParser.il_follow`.
	 * @param ctx the parse tree
	 */
	enterIl_follow?: (ctx: Il_followContext) => void;
	/**
	 * Exit a parse tree produced by `choiceParser.il_follow`.
	 * @param ctx the parse tree
	 */
	exitIl_follow?: (ctx: Il_followContext) => void;

	/**
	 * Enter a parse tree produced by `choiceParser.longans`.
	 * @param ctx the parse tree
	 */
	enterLongans?: (ctx: LongansContext) => void;
	/**
	 * Exit a parse tree produced by `choiceParser.longans`.
	 * @param ctx the parse tree
	 */
	exitLongans?: (ctx: LongansContext) => void;

	/**
	 * Enter a parse tree produced by `choiceParser.shortans`.
	 * @param ctx the parse tree
	 */
	enterShortans?: (ctx: ShortansContext) => void;
	/**
	 * Exit a parse tree produced by `choiceParser.shortans`.
	 * @param ctx the parse tree
	 */
	exitShortans?: (ctx: ShortansContext) => void;

	/**
	 * Enter a parse tree produced by `choiceParser.resource`.
	 * @param ctx the parse tree
	 */
	enterResource?: (ctx: ResourceContext) => void;
	/**
	 * Exit a parse tree produced by `choiceParser.resource`.
	 * @param ctx the parse tree
	 */
	exitResource?: (ctx: ResourceContext) => void;

	/**
	 * Enter a parse tree produced by `choiceParser.bullet_item`.
	 * @param ctx the parse tree
	 */
	enterBullet_item?: (ctx: Bullet_itemContext) => void;
	/**
	 * Exit a parse tree produced by `choiceParser.bullet_item`.
	 * @param ctx the parse tree
	 */
	exitBullet_item?: (ctx: Bullet_itemContext) => void;

	/**
	 * Enter a parse tree produced by `choiceParser.atpoint`.
	 * @param ctx the parse tree
	 */
	enterAtpoint?: (ctx: AtpointContext) => void;
	/**
	 * Exit a parse tree produced by `choiceParser.atpoint`.
	 * @param ctx the parse tree
	 */
	exitAtpoint?: (ctx: AtpointContext) => void;

	/**
	 * Enter a parse tree produced by `choiceParser.format`.
	 * @param ctx the parse tree
	 */
	enterFormat?: (ctx: FormatContext) => void;
	/**
	 * Exit a parse tree produced by `choiceParser.format`.
	 * @param ctx the parse tree
	 */
	exitFormat?: (ctx: FormatContext) => void;

	/**
	 * Enter a parse tree produced by `choiceParser.resource_format`.
	 * @param ctx the parse tree
	 */
	enterResource_format?: (ctx: Resource_formatContext) => void;
	/**
	 * Exit a parse tree produced by `choiceParser.resource_format`.
	 * @param ctx the parse tree
	 */
	exitResource_format?: (ctx: Resource_formatContext) => void;

	/**
	 * Enter a parse tree produced by `choiceParser.resource_format_extra`.
	 * @param ctx the parse tree
	 */
	enterResource_format_extra?: (ctx: Resource_format_extraContext) => void;
	/**
	 * Exit a parse tree produced by `choiceParser.resource_format_extra`.
	 * @param ctx the parse tree
	 */
	exitResource_format_extra?: (ctx: Resource_format_extraContext) => void;

	/**
	 * Enter a parse tree produced by `choiceParser.format2`.
	 * @param ctx the parse tree
	 */
	enterFormat2?: (ctx: Format2Context) => void;
	/**
	 * Exit a parse tree produced by `choiceParser.format2`.
	 * @param ctx the parse tree
	 */
	exitFormat2?: (ctx: Format2Context) => void;

	/**
	 * Enter a parse tree produced by `choiceParser.image_format`.
	 * @param ctx the parse tree
	 */
	enterImage_format?: (ctx: Image_formatContext) => void;
	/**
	 * Exit a parse tree produced by `choiceParser.image_format`.
	 * @param ctx the parse tree
	 */
	exitImage_format?: (ctx: Image_formatContext) => void;

	/**
	 * Enter a parse tree produced by `choiceParser.video_format`.
	 * @param ctx the parse tree
	 */
	enterVideo_format?: (ctx: Video_formatContext) => void;
	/**
	 * Exit a parse tree produced by `choiceParser.video_format`.
	 * @param ctx the parse tree
	 */
	exitVideo_format?: (ctx: Video_formatContext) => void;

	/**
	 * Enter a parse tree produced by `choiceParser.article_format`.
	 * @param ctx the parse tree
	 */
	enterArticle_format?: (ctx: Article_formatContext) => void;
	/**
	 * Exit a parse tree produced by `choiceParser.article_format`.
	 * @param ctx the parse tree
	 */
	exitArticle_format?: (ctx: Article_formatContext) => void;

	/**
	 * Enter a parse tree produced by `choiceParser.document_format`.
	 * @param ctx the parse tree
	 */
	enterDocument_format?: (ctx: Document_formatContext) => void;
	/**
	 * Exit a parse tree produced by `choiceParser.document_format`.
	 * @param ctx the parse tree
	 */
	exitDocument_format?: (ctx: Document_formatContext) => void;

	/**
	 * Enter a parse tree produced by `choiceParser.app_format`.
	 * @param ctx the parse tree
	 */
	enterApp_format?: (ctx: App_formatContext) => void;
	/**
	 * Exit a parse tree produced by `choiceParser.app_format`.
	 * @param ctx the parse tree
	 */
	exitApp_format?: (ctx: App_formatContext) => void;

	/**
	 * Enter a parse tree produced by `choiceParser.website_format`.
	 * @param ctx the parse tree
	 */
	enterWebsite_format?: (ctx: Website_formatContext) => void;
	/**
	 * Exit a parse tree produced by `choiceParser.website_format`.
	 * @param ctx the parse tree
	 */
	exitWebsite_format?: (ctx: Website_formatContext) => void;

	/**
	 * Enter a parse tree produced by `choiceParser.stillimagefilm_format`.
	 * @param ctx the parse tree
	 */
	enterStillimagefilm_format?: (ctx: Stillimagefilm_formatContext) => void;
	/**
	 * Exit a parse tree produced by `choiceParser.stillimagefilm_format`.
	 * @param ctx the parse tree
	 */
	exitStillimagefilm_format?: (ctx: Stillimagefilm_formatContext) => void;

	/**
	 * Enter a parse tree produced by `choiceParser.op_article_format`.
	 * @param ctx the parse tree
	 */
	enterOp_article_format?: (ctx: Op_article_formatContext) => void;
	/**
	 * Exit a parse tree produced by `choiceParser.op_article_format`.
	 * @param ctx the parse tree
	 */
	exitOp_article_format?: (ctx: Op_article_formatContext) => void;

	/**
	 * Enter a parse tree produced by `choiceParser.op_document_format`.
	 * @param ctx the parse tree
	 */
	enterOp_document_format?: (ctx: Op_document_formatContext) => void;
	/**
	 * Exit a parse tree produced by `choiceParser.op_document_format`.
	 * @param ctx the parse tree
	 */
	exitOp_document_format?: (ctx: Op_document_formatContext) => void;

	/**
	 * Enter a parse tree produced by `choiceParser.op_app_format`.
	 * @param ctx the parse tree
	 */
	enterOp_app_format?: (ctx: Op_app_formatContext) => void;
	/**
	 * Exit a parse tree produced by `choiceParser.op_app_format`.
	 * @param ctx the parse tree
	 */
	exitOp_app_format?: (ctx: Op_app_formatContext) => void;

	/**
	 * Enter a parse tree produced by `choiceParser.op_website_format`.
	 * @param ctx the parse tree
	 */
	enterOp_website_format?: (ctx: Op_website_formatContext) => void;
	/**
	 * Exit a parse tree produced by `choiceParser.op_website_format`.
	 * @param ctx the parse tree
	 */
	exitOp_website_format?: (ctx: Op_website_formatContext) => void;

	/**
	 * Enter a parse tree produced by `choiceParser.op_video_format`.
	 * @param ctx the parse tree
	 */
	enterOp_video_format?: (ctx: Op_video_formatContext) => void;
	/**
	 * Exit a parse tree produced by `choiceParser.op_video_format`.
	 * @param ctx the parse tree
	 */
	exitOp_video_format?: (ctx: Op_video_formatContext) => void;

	/**
	 * Enter a parse tree produced by `choiceParser.op_stillimagefilm_format`.
	 * @param ctx the parse tree
	 */
	enterOp_stillimagefilm_format?: (ctx: Op_stillimagefilm_formatContext) => void;
	/**
	 * Exit a parse tree produced by `choiceParser.op_stillimagefilm_format`.
	 * @param ctx the parse tree
	 */
	exitOp_stillimagefilm_format?: (ctx: Op_stillimagefilm_formatContext) => void;

	/**
	 * Enter a parse tree produced by `choiceParser.articlebit`.
	 * @param ctx the parse tree
	 */
	enterArticlebit?: (ctx: ArticlebitContext) => void;
	/**
	 * Exit a parse tree produced by `choiceParser.articlebit`.
	 * @param ctx the parse tree
	 */
	exitArticlebit?: (ctx: ArticlebitContext) => void;

	/**
	 * Enter a parse tree produced by `choiceParser.documentbit`.
	 * @param ctx the parse tree
	 */
	enterDocumentbit?: (ctx: DocumentbitContext) => void;
	/**
	 * Exit a parse tree produced by `choiceParser.documentbit`.
	 * @param ctx the parse tree
	 */
	exitDocumentbit?: (ctx: DocumentbitContext) => void;

	/**
	 * Enter a parse tree produced by `choiceParser.websitebit`.
	 * @param ctx the parse tree
	 */
	enterWebsitebit?: (ctx: WebsitebitContext) => void;
	/**
	 * Exit a parse tree produced by `choiceParser.websitebit`.
	 * @param ctx the parse tree
	 */
	exitWebsitebit?: (ctx: WebsitebitContext) => void;

	/**
	 * Enter a parse tree produced by `choiceParser.appbit`.
	 * @param ctx the parse tree
	 */
	enterAppbit?: (ctx: AppbitContext) => void;
	/**
	 * Exit a parse tree produced by `choiceParser.appbit`.
	 * @param ctx the parse tree
	 */
	exitAppbit?: (ctx: AppbitContext) => void;

	/**
	 * Enter a parse tree produced by `choiceParser.stillimagefilmbit`.
	 * @param ctx the parse tree
	 */
	enterStillimagefilmbit?: (ctx: StillimagefilmbitContext) => void;
	/**
	 * Exit a parse tree produced by `choiceParser.stillimagefilmbit`.
	 * @param ctx the parse tree
	 */
	exitStillimagefilmbit?: (ctx: StillimagefilmbitContext) => void;

	/**
	 * Enter a parse tree produced by `choiceParser.stillimg_one`.
	 * @param ctx the parse tree
	 */
	enterStillimg_one?: (ctx: Stillimg_oneContext) => void;
	/**
	 * Exit a parse tree produced by `choiceParser.stillimg_one`.
	 * @param ctx the parse tree
	 */
	exitStillimg_one?: (ctx: Stillimg_oneContext) => void;

	/**
	 * Enter a parse tree produced by `choiceParser.videobit`.
	 * @param ctx the parse tree
	 */
	enterVideobit?: (ctx: VideobitContext) => void;
	/**
	 * Exit a parse tree produced by `choiceParser.videobit`.
	 * @param ctx the parse tree
	 */
	exitVideobit?: (ctx: VideobitContext) => void;

	/**
	 * Enter a parse tree produced by `choiceParser.video_one`.
	 * @param ctx the parse tree
	 */
	enterVideo_one?: (ctx: Video_oneContext) => void;
	/**
	 * Exit a parse tree produced by `choiceParser.video_one`.
	 * @param ctx the parse tree
	 */
	exitVideo_one?: (ctx: Video_oneContext) => void;

	/**
	 * Enter a parse tree produced by `choiceParser.imagebit`.
	 * @param ctx the parse tree
	 */
	enterImagebit?: (ctx: ImagebitContext) => void;
	/**
	 * Exit a parse tree produced by `choiceParser.imagebit`.
	 * @param ctx the parse tree
	 */
	exitImagebit?: (ctx: ImagebitContext) => void;

	/**
	 * Enter a parse tree produced by `choiceParser.image_one`.
	 * @param ctx the parse tree
	 */
	enterImage_one?: (ctx: Image_oneContext) => void;
	/**
	 * Exit a parse tree produced by `choiceParser.image_one`.
	 * @param ctx the parse tree
	 */
	exitImage_one?: (ctx: Image_oneContext) => void;

	/**
	 * Enter a parse tree produced by `choiceParser.op_image_format`.
	 * @param ctx the parse tree
	 */
	enterOp_image_format?: (ctx: Op_image_formatContext) => void;
	/**
	 * Exit a parse tree produced by `choiceParser.op_image_format`.
	 * @param ctx the parse tree
	 */
	exitOp_image_format?: (ctx: Op_image_formatContext) => void;

	/**
	 * Enter a parse tree produced by `choiceParser.image_chained`.
	 * @param ctx the parse tree
	 */
	enterImage_chained?: (ctx: Image_chainedContext) => void;
	/**
	 * Exit a parse tree produced by `choiceParser.image_chained`.
	 * @param ctx the parse tree
	 */
	exitImage_chained?: (ctx: Image_chainedContext) => void;

	/**
	 * Enter a parse tree produced by `choiceParser.image_chained4match`.
	 * @param ctx the parse tree
	 */
	enterImage_chained4match?: (ctx: Image_chained4matchContext) => void;
	/**
	 * Exit a parse tree produced by `choiceParser.image_chained4match`.
	 * @param ctx the parse tree
	 */
	exitImage_chained4match?: (ctx: Image_chained4matchContext) => void;

	/**
	 * Enter a parse tree produced by `choiceParser.audiobit`.
	 * @param ctx the parse tree
	 */
	enterAudiobit?: (ctx: AudiobitContext) => void;
	/**
	 * Exit a parse tree produced by `choiceParser.audiobit`.
	 * @param ctx the parse tree
	 */
	exitAudiobit?: (ctx: AudiobitContext) => void;

	/**
	 * Enter a parse tree produced by `choiceParser.audio_one`.
	 * @param ctx the parse tree
	 */
	enterAudio_one?: (ctx: Audio_oneContext) => void;
	/**
	 * Exit a parse tree produced by `choiceParser.audio_one`.
	 * @param ctx the parse tree
	 */
	exitAudio_one?: (ctx: Audio_oneContext) => void;

	/**
	 * Enter a parse tree produced by `choiceParser.audio_format`.
	 * @param ctx the parse tree
	 */
	enterAudio_format?: (ctx: Audio_formatContext) => void;
	/**
	 * Exit a parse tree produced by `choiceParser.audio_format`.
	 * @param ctx the parse tree
	 */
	exitAudio_format?: (ctx: Audio_formatContext) => void;

	/**
	 * Enter a parse tree produced by `choiceParser.op_audio_format`.
	 * @param ctx the parse tree
	 */
	enterOp_audio_format?: (ctx: Op_audio_formatContext) => void;
	/**
	 * Exit a parse tree produced by `choiceParser.op_audio_format`.
	 * @param ctx the parse tree
	 */
	exitOp_audio_format?: (ctx: Op_audio_formatContext) => void;

	/**
	 * Enter a parse tree produced by `choiceParser.resource_chained`.
	 * @param ctx the parse tree
	 */
	enterResource_chained?: (ctx: Resource_chainedContext) => void;
	/**
	 * Exit a parse tree produced by `choiceParser.resource_chained`.
	 * @param ctx the parse tree
	 */
	exitResource_chained?: (ctx: Resource_chainedContext) => void;

	/**
	 * Enter a parse tree produced by `choiceParser.telephone`.
	 * @param ctx the parse tree
	 */
	enterTelephone?: (ctx: TelephoneContext) => void;
	/**
	 * Exit a parse tree produced by `choiceParser.telephone`.
	 * @param ctx the parse tree
	 */
	exitTelephone?: (ctx: TelephoneContext) => void;

	/**
	 * Enter a parse tree produced by `choiceParser.url`.
	 * @param ctx the parse tree
	 */
	enterUrl?: (ctx: UrlContext) => void;
	/**
	 * Exit a parse tree produced by `choiceParser.url`.
	 * @param ctx the parse tree
	 */
	exitUrl?: (ctx: UrlContext) => void;

	/**
	 * Enter a parse tree produced by `choiceParser.item`.
	 * @param ctx the parse tree
	 */
	enterItem?: (ctx: ItemContext) => void;
	/**
	 * Exit a parse tree produced by `choiceParser.item`.
	 * @param ctx the parse tree
	 */
	exitItem?: (ctx: ItemContext) => void;

	/**
	 * Enter a parse tree produced by `choiceParser.lead`.
	 * @param ctx the parse tree
	 */
	enterLead?: (ctx: LeadContext) => void;
	/**
	 * Exit a parse tree produced by `choiceParser.lead`.
	 * @param ctx the parse tree
	 */
	exitLead?: (ctx: LeadContext) => void;

	/**
	 * Enter a parse tree produced by `choiceParser.angleref`.
	 * @param ctx the parse tree
	 */
	enterAngleref?: (ctx: AnglerefContext) => void;
	/**
	 * Exit a parse tree produced by `choiceParser.angleref`.
	 * @param ctx the parse tree
	 */
	exitAngleref?: (ctx: AnglerefContext) => void;

	/**
	 * Enter a parse tree produced by `choiceParser.example`.
	 * @param ctx the parse tree
	 */
	enterExample?: (ctx: ExampleContext) => void;
	/**
	 * Exit a parse tree produced by `choiceParser.example`.
	 * @param ctx the parse tree
	 */
	exitExample?: (ctx: ExampleContext) => void;

	/**
	 * Enter a parse tree produced by `choiceParser.bracketed_text`.
	 * @param ctx the parse tree
	 */
	enterBracketed_text?: (ctx: Bracketed_textContext) => void;
	/**
	 * Exit a parse tree produced by `choiceParser.bracketed_text`.
	 * @param ctx the parse tree
	 */
	exitBracketed_text?: (ctx: Bracketed_textContext) => void;

	/**
	 * Enter a parse tree produced by `choiceParser.reference`.
	 * @param ctx the parse tree
	 */
	enterReference?: (ctx: ReferenceContext) => void;
	/**
	 * Exit a parse tree produced by `choiceParser.reference`.
	 * @param ctx the parse tree
	 */
	exitReference?: (ctx: ReferenceContext) => void;

	/**
	 * Enter a parse tree produced by `choiceParser.progress`.
	 * @param ctx the parse tree
	 */
	enterProgress?: (ctx: ProgressContext) => void;
	/**
	 * Exit a parse tree produced by `choiceParser.progress`.
	 * @param ctx the parse tree
	 */
	exitProgress?: (ctx: ProgressContext) => void;

	/**
	 * Enter a parse tree produced by `choiceParser.dateprop`.
	 * @param ctx the parse tree
	 */
	enterDateprop?: (ctx: DatepropContext) => void;
	/**
	 * Exit a parse tree produced by `choiceParser.dateprop`.
	 * @param ctx the parse tree
	 */
	exitDateprop?: (ctx: DatepropContext) => void;

	/**
	 * Enter a parse tree produced by `choiceParser.dateprop_chained`.
	 * @param ctx the parse tree
	 */
	enterDateprop_chained?: (ctx: Dateprop_chainedContext) => void;
	/**
	 * Exit a parse tree produced by `choiceParser.dateprop_chained`.
	 * @param ctx the parse tree
	 */
	exitDateprop_chained?: (ctx: Dateprop_chainedContext) => void;

	/**
	 * Enter a parse tree produced by `choiceParser.instruction`.
	 * @param ctx the parse tree
	 */
	enterInstruction?: (ctx: InstructionContext) => void;
	/**
	 * Exit a parse tree produced by `choiceParser.instruction`.
	 * @param ctx the parse tree
	 */
	exitInstruction?: (ctx: InstructionContext) => void;

	/**
	 * Enter a parse tree produced by `choiceParser.hint`.
	 * @param ctx the parse tree
	 */
	enterHint?: (ctx: HintContext) => void;
	/**
	 * Exit a parse tree produced by `choiceParser.hint`.
	 * @param ctx the parse tree
	 */
	exitHint?: (ctx: HintContext) => void;

	/**
	 * Enter a parse tree produced by `choiceParser.title`.
	 * @param ctx the parse tree
	 */
	enterTitle?: (ctx: TitleContext) => void;
	/**
	 * Exit a parse tree produced by `choiceParser.title`.
	 * @param ctx the parse tree
	 */
	exitTitle?: (ctx: TitleContext) => void;

	/**
	 * Enter a parse tree produced by `choiceParser.bool_label`.
	 * @param ctx the parse tree
	 */
	enterBool_label?: (ctx: Bool_labelContext) => void;
	/**
	 * Exit a parse tree produced by `choiceParser.bool_label`.
	 * @param ctx the parse tree
	 */
	exitBool_label?: (ctx: Bool_labelContext) => void;

	/**
	 * Enter a parse tree produced by `choiceParser.progress_points`.
	 * @param ctx the parse tree
	 */
	enterProgress_points?: (ctx: Progress_pointsContext) => void;
	/**
	 * Exit a parse tree produced by `choiceParser.progress_points`.
	 * @param ctx the parse tree
	 */
	exitProgress_points?: (ctx: Progress_pointsContext) => void;

	/**
	 * Enter a parse tree produced by `choiceParser.istracked`.
	 * @param ctx the parse tree
	 */
	enterIstracked?: (ctx: IstrackedContext) => void;
	/**
	 * Exit a parse tree produced by `choiceParser.istracked`.
	 * @param ctx the parse tree
	 */
	exitIstracked?: (ctx: IstrackedContext) => void;

	/**
	 * Enter a parse tree produced by `choiceParser.isinfoonly`.
	 * @param ctx the parse tree
	 */
	enterIsinfoonly?: (ctx: IsinfoonlyContext) => void;
	/**
	 * Exit a parse tree produced by `choiceParser.isinfoonly`.
	 * @param ctx the parse tree
	 */
	exitIsinfoonly?: (ctx: IsinfoonlyContext) => void;

	/**
	 * Enter a parse tree produced by `choiceParser.atdef`.
	 * @param ctx the parse tree
	 */
	enterAtdef?: (ctx: AtdefContext) => void;
	/**
	 * Exit a parse tree produced by `choiceParser.atdef`.
	 * @param ctx the parse tree
	 */
	exitAtdef?: (ctx: AtdefContext) => void;

	/**
	 * Enter a parse tree produced by `choiceParser.atdef_`.
	 * @param ctx the parse tree
	 */
	enterAtdef_?: (ctx: Atdef_Context) => void;
	/**
	 * Exit a parse tree produced by `choiceParser.atdef_`.
	 * @param ctx the parse tree
	 */
	exitAtdef_?: (ctx: Atdef_Context) => void;

	/**
	 * Enter a parse tree produced by `choiceParser.dollarans`.
	 * @param ctx the parse tree
	 */
	enterDollarans?: (ctx: DollaransContext) => void;
	/**
	 * Exit a parse tree produced by `choiceParser.dollarans`.
	 * @param ctx the parse tree
	 */
	exitDollarans?: (ctx: DollaransContext) => void;

	/**
	 * Enter a parse tree produced by `choiceParser.anchor`.
	 * @param ctx the parse tree
	 */
	enterAnchor?: (ctx: AnchorContext) => void;
	/**
	 * Exit a parse tree produced by `choiceParser.anchor`.
	 * @param ctx the parse tree
	 */
	exitAnchor?: (ctx: AnchorContext) => void;

	/**
	 * Enter a parse tree produced by `choiceParser.dclines`.
	 * @param ctx the parse tree
	 */
	enterDclines?: (ctx: DclinesContext) => void;
	/**
	 * Exit a parse tree produced by `choiceParser.dclines`.
	 * @param ctx the parse tree
	 */
	exitDclines?: (ctx: DclinesContext) => void;

	/**
	 * Enter a parse tree produced by `choiceParser.lines`.
	 * @param ctx the parse tree
	 */
	enterLines?: (ctx: LinesContext) => void;
	/**
	 * Exit a parse tree produced by `choiceParser.lines`.
	 * @param ctx the parse tree
	 */
	exitLines?: (ctx: LinesContext) => void;

	/**
	 * Enter a parse tree produced by `choiceParser.s_and_w`.
	 * @param ctx the parse tree
	 */
	enterS_and_w?: (ctx: S_and_wContext) => void;
	/**
	 * Exit a parse tree produced by `choiceParser.s_and_w`.
	 * @param ctx the parse tree
	 */
	exitS_and_w?: (ctx: S_and_wContext) => void;

	/**
	 * Enter a parse tree produced by `choiceParser.bracket_escaped`.
	 * @param ctx the parse tree
	 */
	enterBracket_escaped?: (ctx: Bracket_escapedContext) => void;
	/**
	 * Exit a parse tree produced by `choiceParser.bracket_escaped`.
	 * @param ctx the parse tree
	 */
	exitBracket_escaped?: (ctx: Bracket_escapedContext) => void;

	/**
	 * Enter a parse tree produced by `choiceParser.clnsp`.
	 * @param ctx the parse tree
	 */
	enterClnsp?: (ctx: ClnspContext) => void;
	/**
	 * Exit a parse tree produced by `choiceParser.clnsp`.
	 * @param ctx the parse tree
	 */
	exitClnsp?: (ctx: ClnspContext) => void;

	/**
	 * Enter a parse tree produced by `choiceParser.sspl`.
	 * @param ctx the parse tree
	 */
	enterSspl?: (ctx: SsplContext) => void;
	/**
	 * Exit a parse tree produced by `choiceParser.sspl`.
	 * @param ctx the parse tree
	 */
	exitSspl?: (ctx: SsplContext) => void;

	/**
	 * Enter a parse tree produced by `choiceParser.words`.
	 * @param ctx the parse tree
	 */
	enterWords?: (ctx: WordsContext) => void;
	/**
	 * Exit a parse tree produced by `choiceParser.words`.
	 * @param ctx the parse tree
	 */
	exitWords?: (ctx: WordsContext) => void;

	/**
	 * Enter a parse tree produced by `choiceParser.sp`.
	 * @param ctx the parse tree
	 */
	enterSp?: (ctx: SpContext) => void;
	/**
	 * Exit a parse tree produced by `choiceParser.sp`.
	 * @param ctx the parse tree
	 */
	exitSp?: (ctx: SpContext) => void;
}

