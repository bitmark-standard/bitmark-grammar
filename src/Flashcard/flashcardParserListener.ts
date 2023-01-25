// Generated from ./Flashcard/flashcardParser.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

import { BitmarkContext } from "./flashcardParser";
import { Bitmark_Context } from "./flashcardParser";
import { FlashcardsContext } from "./flashcardParser";
import { Flashcard_1Context } from "./flashcardParser";
import { FlashcardContext } from "./flashcardParser";
import { Flashcard_setContext } from "./flashcardParser";
import { Flashcard_language_setContext } from "./flashcardParser";
import { Flashcard_language_1Context } from "./flashcardParser";
import { VocabContext } from "./flashcardParser";
import { Vocab_1Context } from "./flashcardParser";
import { SxContext } from "./flashcardParser";
import { SidexContext } from "./flashcardParser";
import { Sidex_NLContext } from "./flashcardParser";
import { SideContext } from "./flashcardParser";
import { Side_NLContext } from "./flashcardParser";
import { VsideContext } from "./flashcardParser";
import { BitElemContext } from "./flashcardParser";
import { ResourceContext } from "./flashcardParser";
import { GapContext } from "./flashcardParser";
import { Single_gapContext } from "./flashcardParser";
import { Bullet_itemContext } from "./flashcardParser";
import { AtpointContext } from "./flashcardParser";
import { FormatContext } from "./flashcardParser";
import { Resource_formatContext } from "./flashcardParser";
import { Resource_format_extraContext } from "./flashcardParser";
import { Format2Context } from "./flashcardParser";
import { Image_formatContext } from "./flashcardParser";
import { Video_formatContext } from "./flashcardParser";
import { Article_formatContext } from "./flashcardParser";
import { Document_formatContext } from "./flashcardParser";
import { App_formatContext } from "./flashcardParser";
import { Website_formatContext } from "./flashcardParser";
import { Stillimagefilm_formatContext } from "./flashcardParser";
import { Op_article_formatContext } from "./flashcardParser";
import { Op_document_formatContext } from "./flashcardParser";
import { Op_app_formatContext } from "./flashcardParser";
import { Op_website_formatContext } from "./flashcardParser";
import { Op_video_formatContext } from "./flashcardParser";
import { Op_stillimagefilm_formatContext } from "./flashcardParser";
import { ArticlebitContext } from "./flashcardParser";
import { DocumentbitContext } from "./flashcardParser";
import { WebsitebitContext } from "./flashcardParser";
import { AppbitContext } from "./flashcardParser";
import { StillimagefilmbitContext } from "./flashcardParser";
import { Stillimg_oneContext } from "./flashcardParser";
import { VideobitContext } from "./flashcardParser";
import { Video_oneContext } from "./flashcardParser";
import { ImagebitContext } from "./flashcardParser";
import { Image_oneContext } from "./flashcardParser";
import { Op_image_formatContext } from "./flashcardParser";
import { Image_chainedContext } from "./flashcardParser";
import { Image_chained4matchContext } from "./flashcardParser";
import { AudiobitContext } from "./flashcardParser";
import { Audio_oneContext } from "./flashcardParser";
import { Audio_formatContext } from "./flashcardParser";
import { Op_audio_formatContext } from "./flashcardParser";
import { Resource_chainedContext } from "./flashcardParser";
import { TelephoneContext } from "./flashcardParser";
import { UrlContext } from "./flashcardParser";
import { ItemContext } from "./flashcardParser";
import { LeadContext } from "./flashcardParser";
import { AnglerefContext } from "./flashcardParser";
import { ExampleContext } from "./flashcardParser";
import { Bracketed_textContext } from "./flashcardParser";
import { ReferenceContext } from "./flashcardParser";
import { ProgressContext } from "./flashcardParser";
import { DatepropContext } from "./flashcardParser";
import { Dateprop_chainedContext } from "./flashcardParser";
import { InstructionContext } from "./flashcardParser";
import { HintContext } from "./flashcardParser";
import { TitleContext } from "./flashcardParser";
import { Bool_labelContext } from "./flashcardParser";
import { Progress_pointsContext } from "./flashcardParser";
import { IstrackedContext } from "./flashcardParser";
import { IsinfoonlyContext } from "./flashcardParser";
import { AtdefContext } from "./flashcardParser";
import { Atdef_Context } from "./flashcardParser";
import { DollaransContext } from "./flashcardParser";
import { AnchorContext } from "./flashcardParser";
import { DcolonContext } from "./flashcardParser";
import { LinesContext } from "./flashcardParser";
import { S_and_wContext } from "./flashcardParser";
import { Bracket_escapedContext } from "./flashcardParser";
import { ClnspContext } from "./flashcardParser";
import { SsplContext } from "./flashcardParser";
import { WordsContext } from "./flashcardParser";
import { SpContext } from "./flashcardParser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `flashcardParser`.
 */
export interface flashcardParserListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `flashcardParser.bitmark`.
	 * @param ctx the parse tree
	 */
	enterBitmark?: (ctx: BitmarkContext) => void;
	/**
	 * Exit a parse tree produced by `flashcardParser.bitmark`.
	 * @param ctx the parse tree
	 */
	exitBitmark?: (ctx: BitmarkContext) => void;

	/**
	 * Enter a parse tree produced by `flashcardParser.bitmark_`.
	 * @param ctx the parse tree
	 */
	enterBitmark_?: (ctx: Bitmark_Context) => void;
	/**
	 * Exit a parse tree produced by `flashcardParser.bitmark_`.
	 * @param ctx the parse tree
	 */
	exitBitmark_?: (ctx: Bitmark_Context) => void;

	/**
	 * Enter a parse tree produced by `flashcardParser.flashcards`.
	 * @param ctx the parse tree
	 */
	enterFlashcards?: (ctx: FlashcardsContext) => void;
	/**
	 * Exit a parse tree produced by `flashcardParser.flashcards`.
	 * @param ctx the parse tree
	 */
	exitFlashcards?: (ctx: FlashcardsContext) => void;

	/**
	 * Enter a parse tree produced by `flashcardParser.flashcard_1`.
	 * @param ctx the parse tree
	 */
	enterFlashcard_1?: (ctx: Flashcard_1Context) => void;
	/**
	 * Exit a parse tree produced by `flashcardParser.flashcard_1`.
	 * @param ctx the parse tree
	 */
	exitFlashcard_1?: (ctx: Flashcard_1Context) => void;

	/**
	 * Enter a parse tree produced by `flashcardParser.flashcard`.
	 * @param ctx the parse tree
	 */
	enterFlashcard?: (ctx: FlashcardContext) => void;
	/**
	 * Exit a parse tree produced by `flashcardParser.flashcard`.
	 * @param ctx the parse tree
	 */
	exitFlashcard?: (ctx: FlashcardContext) => void;

	/**
	 * Enter a parse tree produced by `flashcardParser.flashcard_set`.
	 * @param ctx the parse tree
	 */
	enterFlashcard_set?: (ctx: Flashcard_setContext) => void;
	/**
	 * Exit a parse tree produced by `flashcardParser.flashcard_set`.
	 * @param ctx the parse tree
	 */
	exitFlashcard_set?: (ctx: Flashcard_setContext) => void;

	/**
	 * Enter a parse tree produced by `flashcardParser.flashcard_language_set`.
	 * @param ctx the parse tree
	 */
	enterFlashcard_language_set?: (ctx: Flashcard_language_setContext) => void;
	/**
	 * Exit a parse tree produced by `flashcardParser.flashcard_language_set`.
	 * @param ctx the parse tree
	 */
	exitFlashcard_language_set?: (ctx: Flashcard_language_setContext) => void;

	/**
	 * Enter a parse tree produced by `flashcardParser.flashcard_language_1`.
	 * @param ctx the parse tree
	 */
	enterFlashcard_language_1?: (ctx: Flashcard_language_1Context) => void;
	/**
	 * Exit a parse tree produced by `flashcardParser.flashcard_language_1`.
	 * @param ctx the parse tree
	 */
	exitFlashcard_language_1?: (ctx: Flashcard_language_1Context) => void;

	/**
	 * Enter a parse tree produced by `flashcardParser.vocab`.
	 * @param ctx the parse tree
	 */
	enterVocab?: (ctx: VocabContext) => void;
	/**
	 * Exit a parse tree produced by `flashcardParser.vocab`.
	 * @param ctx the parse tree
	 */
	exitVocab?: (ctx: VocabContext) => void;

	/**
	 * Enter a parse tree produced by `flashcardParser.vocab_1`.
	 * @param ctx the parse tree
	 */
	enterVocab_1?: (ctx: Vocab_1Context) => void;
	/**
	 * Exit a parse tree produced by `flashcardParser.vocab_1`.
	 * @param ctx the parse tree
	 */
	exitVocab_1?: (ctx: Vocab_1Context) => void;

	/**
	 * Enter a parse tree produced by `flashcardParser.sx`.
	 * @param ctx the parse tree
	 */
	enterSx?: (ctx: SxContext) => void;
	/**
	 * Exit a parse tree produced by `flashcardParser.sx`.
	 * @param ctx the parse tree
	 */
	exitSx?: (ctx: SxContext) => void;

	/**
	 * Enter a parse tree produced by `flashcardParser.sidex`.
	 * @param ctx the parse tree
	 */
	enterSidex?: (ctx: SidexContext) => void;
	/**
	 * Exit a parse tree produced by `flashcardParser.sidex`.
	 * @param ctx the parse tree
	 */
	exitSidex?: (ctx: SidexContext) => void;

	/**
	 * Enter a parse tree produced by `flashcardParser.sidex_NL`.
	 * @param ctx the parse tree
	 */
	enterSidex_NL?: (ctx: Sidex_NLContext) => void;
	/**
	 * Exit a parse tree produced by `flashcardParser.sidex_NL`.
	 * @param ctx the parse tree
	 */
	exitSidex_NL?: (ctx: Sidex_NLContext) => void;

	/**
	 * Enter a parse tree produced by `flashcardParser.side`.
	 * @param ctx the parse tree
	 */
	enterSide?: (ctx: SideContext) => void;
	/**
	 * Exit a parse tree produced by `flashcardParser.side`.
	 * @param ctx the parse tree
	 */
	exitSide?: (ctx: SideContext) => void;

	/**
	 * Enter a parse tree produced by `flashcardParser.side_NL`.
	 * @param ctx the parse tree
	 */
	enterSide_NL?: (ctx: Side_NLContext) => void;
	/**
	 * Exit a parse tree produced by `flashcardParser.side_NL`.
	 * @param ctx the parse tree
	 */
	exitSide_NL?: (ctx: Side_NLContext) => void;

	/**
	 * Enter a parse tree produced by `flashcardParser.vside`.
	 * @param ctx the parse tree
	 */
	enterVside?: (ctx: VsideContext) => void;
	/**
	 * Exit a parse tree produced by `flashcardParser.vside`.
	 * @param ctx the parse tree
	 */
	exitVside?: (ctx: VsideContext) => void;

	/**
	 * Enter a parse tree produced by `flashcardParser.bitElem`.
	 * @param ctx the parse tree
	 */
	enterBitElem?: (ctx: BitElemContext) => void;
	/**
	 * Exit a parse tree produced by `flashcardParser.bitElem`.
	 * @param ctx the parse tree
	 */
	exitBitElem?: (ctx: BitElemContext) => void;

	/**
	 * Enter a parse tree produced by `flashcardParser.resource`.
	 * @param ctx the parse tree
	 */
	enterResource?: (ctx: ResourceContext) => void;
	/**
	 * Exit a parse tree produced by `flashcardParser.resource`.
	 * @param ctx the parse tree
	 */
	exitResource?: (ctx: ResourceContext) => void;

	/**
	 * Enter a parse tree produced by `flashcardParser.gap`.
	 * @param ctx the parse tree
	 */
	enterGap?: (ctx: GapContext) => void;
	/**
	 * Exit a parse tree produced by `flashcardParser.gap`.
	 * @param ctx the parse tree
	 */
	exitGap?: (ctx: GapContext) => void;

	/**
	 * Enter a parse tree produced by `flashcardParser.single_gap`.
	 * @param ctx the parse tree
	 */
	enterSingle_gap?: (ctx: Single_gapContext) => void;
	/**
	 * Exit a parse tree produced by `flashcardParser.single_gap`.
	 * @param ctx the parse tree
	 */
	exitSingle_gap?: (ctx: Single_gapContext) => void;

	/**
	 * Enter a parse tree produced by `flashcardParser.bullet_item`.
	 * @param ctx the parse tree
	 */
	enterBullet_item?: (ctx: Bullet_itemContext) => void;
	/**
	 * Exit a parse tree produced by `flashcardParser.bullet_item`.
	 * @param ctx the parse tree
	 */
	exitBullet_item?: (ctx: Bullet_itemContext) => void;

	/**
	 * Enter a parse tree produced by `flashcardParser.atpoint`.
	 * @param ctx the parse tree
	 */
	enterAtpoint?: (ctx: AtpointContext) => void;
	/**
	 * Exit a parse tree produced by `flashcardParser.atpoint`.
	 * @param ctx the parse tree
	 */
	exitAtpoint?: (ctx: AtpointContext) => void;

	/**
	 * Enter a parse tree produced by `flashcardParser.format`.
	 * @param ctx the parse tree
	 */
	enterFormat?: (ctx: FormatContext) => void;
	/**
	 * Exit a parse tree produced by `flashcardParser.format`.
	 * @param ctx the parse tree
	 */
	exitFormat?: (ctx: FormatContext) => void;

	/**
	 * Enter a parse tree produced by `flashcardParser.resource_format`.
	 * @param ctx the parse tree
	 */
	enterResource_format?: (ctx: Resource_formatContext) => void;
	/**
	 * Exit a parse tree produced by `flashcardParser.resource_format`.
	 * @param ctx the parse tree
	 */
	exitResource_format?: (ctx: Resource_formatContext) => void;

	/**
	 * Enter a parse tree produced by `flashcardParser.resource_format_extra`.
	 * @param ctx the parse tree
	 */
	enterResource_format_extra?: (ctx: Resource_format_extraContext) => void;
	/**
	 * Exit a parse tree produced by `flashcardParser.resource_format_extra`.
	 * @param ctx the parse tree
	 */
	exitResource_format_extra?: (ctx: Resource_format_extraContext) => void;

	/**
	 * Enter a parse tree produced by `flashcardParser.format2`.
	 * @param ctx the parse tree
	 */
	enterFormat2?: (ctx: Format2Context) => void;
	/**
	 * Exit a parse tree produced by `flashcardParser.format2`.
	 * @param ctx the parse tree
	 */
	exitFormat2?: (ctx: Format2Context) => void;

	/**
	 * Enter a parse tree produced by `flashcardParser.image_format`.
	 * @param ctx the parse tree
	 */
	enterImage_format?: (ctx: Image_formatContext) => void;
	/**
	 * Exit a parse tree produced by `flashcardParser.image_format`.
	 * @param ctx the parse tree
	 */
	exitImage_format?: (ctx: Image_formatContext) => void;

	/**
	 * Enter a parse tree produced by `flashcardParser.video_format`.
	 * @param ctx the parse tree
	 */
	enterVideo_format?: (ctx: Video_formatContext) => void;
	/**
	 * Exit a parse tree produced by `flashcardParser.video_format`.
	 * @param ctx the parse tree
	 */
	exitVideo_format?: (ctx: Video_formatContext) => void;

	/**
	 * Enter a parse tree produced by `flashcardParser.article_format`.
	 * @param ctx the parse tree
	 */
	enterArticle_format?: (ctx: Article_formatContext) => void;
	/**
	 * Exit a parse tree produced by `flashcardParser.article_format`.
	 * @param ctx the parse tree
	 */
	exitArticle_format?: (ctx: Article_formatContext) => void;

	/**
	 * Enter a parse tree produced by `flashcardParser.document_format`.
	 * @param ctx the parse tree
	 */
	enterDocument_format?: (ctx: Document_formatContext) => void;
	/**
	 * Exit a parse tree produced by `flashcardParser.document_format`.
	 * @param ctx the parse tree
	 */
	exitDocument_format?: (ctx: Document_formatContext) => void;

	/**
	 * Enter a parse tree produced by `flashcardParser.app_format`.
	 * @param ctx the parse tree
	 */
	enterApp_format?: (ctx: App_formatContext) => void;
	/**
	 * Exit a parse tree produced by `flashcardParser.app_format`.
	 * @param ctx the parse tree
	 */
	exitApp_format?: (ctx: App_formatContext) => void;

	/**
	 * Enter a parse tree produced by `flashcardParser.website_format`.
	 * @param ctx the parse tree
	 */
	enterWebsite_format?: (ctx: Website_formatContext) => void;
	/**
	 * Exit a parse tree produced by `flashcardParser.website_format`.
	 * @param ctx the parse tree
	 */
	exitWebsite_format?: (ctx: Website_formatContext) => void;

	/**
	 * Enter a parse tree produced by `flashcardParser.stillimagefilm_format`.
	 * @param ctx the parse tree
	 */
	enterStillimagefilm_format?: (ctx: Stillimagefilm_formatContext) => void;
	/**
	 * Exit a parse tree produced by `flashcardParser.stillimagefilm_format`.
	 * @param ctx the parse tree
	 */
	exitStillimagefilm_format?: (ctx: Stillimagefilm_formatContext) => void;

	/**
	 * Enter a parse tree produced by `flashcardParser.op_article_format`.
	 * @param ctx the parse tree
	 */
	enterOp_article_format?: (ctx: Op_article_formatContext) => void;
	/**
	 * Exit a parse tree produced by `flashcardParser.op_article_format`.
	 * @param ctx the parse tree
	 */
	exitOp_article_format?: (ctx: Op_article_formatContext) => void;

	/**
	 * Enter a parse tree produced by `flashcardParser.op_document_format`.
	 * @param ctx the parse tree
	 */
	enterOp_document_format?: (ctx: Op_document_formatContext) => void;
	/**
	 * Exit a parse tree produced by `flashcardParser.op_document_format`.
	 * @param ctx the parse tree
	 */
	exitOp_document_format?: (ctx: Op_document_formatContext) => void;

	/**
	 * Enter a parse tree produced by `flashcardParser.op_app_format`.
	 * @param ctx the parse tree
	 */
	enterOp_app_format?: (ctx: Op_app_formatContext) => void;
	/**
	 * Exit a parse tree produced by `flashcardParser.op_app_format`.
	 * @param ctx the parse tree
	 */
	exitOp_app_format?: (ctx: Op_app_formatContext) => void;

	/**
	 * Enter a parse tree produced by `flashcardParser.op_website_format`.
	 * @param ctx the parse tree
	 */
	enterOp_website_format?: (ctx: Op_website_formatContext) => void;
	/**
	 * Exit a parse tree produced by `flashcardParser.op_website_format`.
	 * @param ctx the parse tree
	 */
	exitOp_website_format?: (ctx: Op_website_formatContext) => void;

	/**
	 * Enter a parse tree produced by `flashcardParser.op_video_format`.
	 * @param ctx the parse tree
	 */
	enterOp_video_format?: (ctx: Op_video_formatContext) => void;
	/**
	 * Exit a parse tree produced by `flashcardParser.op_video_format`.
	 * @param ctx the parse tree
	 */
	exitOp_video_format?: (ctx: Op_video_formatContext) => void;

	/**
	 * Enter a parse tree produced by `flashcardParser.op_stillimagefilm_format`.
	 * @param ctx the parse tree
	 */
	enterOp_stillimagefilm_format?: (ctx: Op_stillimagefilm_formatContext) => void;
	/**
	 * Exit a parse tree produced by `flashcardParser.op_stillimagefilm_format`.
	 * @param ctx the parse tree
	 */
	exitOp_stillimagefilm_format?: (ctx: Op_stillimagefilm_formatContext) => void;

	/**
	 * Enter a parse tree produced by `flashcardParser.articlebit`.
	 * @param ctx the parse tree
	 */
	enterArticlebit?: (ctx: ArticlebitContext) => void;
	/**
	 * Exit a parse tree produced by `flashcardParser.articlebit`.
	 * @param ctx the parse tree
	 */
	exitArticlebit?: (ctx: ArticlebitContext) => void;

	/**
	 * Enter a parse tree produced by `flashcardParser.documentbit`.
	 * @param ctx the parse tree
	 */
	enterDocumentbit?: (ctx: DocumentbitContext) => void;
	/**
	 * Exit a parse tree produced by `flashcardParser.documentbit`.
	 * @param ctx the parse tree
	 */
	exitDocumentbit?: (ctx: DocumentbitContext) => void;

	/**
	 * Enter a parse tree produced by `flashcardParser.websitebit`.
	 * @param ctx the parse tree
	 */
	enterWebsitebit?: (ctx: WebsitebitContext) => void;
	/**
	 * Exit a parse tree produced by `flashcardParser.websitebit`.
	 * @param ctx the parse tree
	 */
	exitWebsitebit?: (ctx: WebsitebitContext) => void;

	/**
	 * Enter a parse tree produced by `flashcardParser.appbit`.
	 * @param ctx the parse tree
	 */
	enterAppbit?: (ctx: AppbitContext) => void;
	/**
	 * Exit a parse tree produced by `flashcardParser.appbit`.
	 * @param ctx the parse tree
	 */
	exitAppbit?: (ctx: AppbitContext) => void;

	/**
	 * Enter a parse tree produced by `flashcardParser.stillimagefilmbit`.
	 * @param ctx the parse tree
	 */
	enterStillimagefilmbit?: (ctx: StillimagefilmbitContext) => void;
	/**
	 * Exit a parse tree produced by `flashcardParser.stillimagefilmbit`.
	 * @param ctx the parse tree
	 */
	exitStillimagefilmbit?: (ctx: StillimagefilmbitContext) => void;

	/**
	 * Enter a parse tree produced by `flashcardParser.stillimg_one`.
	 * @param ctx the parse tree
	 */
	enterStillimg_one?: (ctx: Stillimg_oneContext) => void;
	/**
	 * Exit a parse tree produced by `flashcardParser.stillimg_one`.
	 * @param ctx the parse tree
	 */
	exitStillimg_one?: (ctx: Stillimg_oneContext) => void;

	/**
	 * Enter a parse tree produced by `flashcardParser.videobit`.
	 * @param ctx the parse tree
	 */
	enterVideobit?: (ctx: VideobitContext) => void;
	/**
	 * Exit a parse tree produced by `flashcardParser.videobit`.
	 * @param ctx the parse tree
	 */
	exitVideobit?: (ctx: VideobitContext) => void;

	/**
	 * Enter a parse tree produced by `flashcardParser.video_one`.
	 * @param ctx the parse tree
	 */
	enterVideo_one?: (ctx: Video_oneContext) => void;
	/**
	 * Exit a parse tree produced by `flashcardParser.video_one`.
	 * @param ctx the parse tree
	 */
	exitVideo_one?: (ctx: Video_oneContext) => void;

	/**
	 * Enter a parse tree produced by `flashcardParser.imagebit`.
	 * @param ctx the parse tree
	 */
	enterImagebit?: (ctx: ImagebitContext) => void;
	/**
	 * Exit a parse tree produced by `flashcardParser.imagebit`.
	 * @param ctx the parse tree
	 */
	exitImagebit?: (ctx: ImagebitContext) => void;

	/**
	 * Enter a parse tree produced by `flashcardParser.image_one`.
	 * @param ctx the parse tree
	 */
	enterImage_one?: (ctx: Image_oneContext) => void;
	/**
	 * Exit a parse tree produced by `flashcardParser.image_one`.
	 * @param ctx the parse tree
	 */
	exitImage_one?: (ctx: Image_oneContext) => void;

	/**
	 * Enter a parse tree produced by `flashcardParser.op_image_format`.
	 * @param ctx the parse tree
	 */
	enterOp_image_format?: (ctx: Op_image_formatContext) => void;
	/**
	 * Exit a parse tree produced by `flashcardParser.op_image_format`.
	 * @param ctx the parse tree
	 */
	exitOp_image_format?: (ctx: Op_image_formatContext) => void;

	/**
	 * Enter a parse tree produced by `flashcardParser.image_chained`.
	 * @param ctx the parse tree
	 */
	enterImage_chained?: (ctx: Image_chainedContext) => void;
	/**
	 * Exit a parse tree produced by `flashcardParser.image_chained`.
	 * @param ctx the parse tree
	 */
	exitImage_chained?: (ctx: Image_chainedContext) => void;

	/**
	 * Enter a parse tree produced by `flashcardParser.image_chained4match`.
	 * @param ctx the parse tree
	 */
	enterImage_chained4match?: (ctx: Image_chained4matchContext) => void;
	/**
	 * Exit a parse tree produced by `flashcardParser.image_chained4match`.
	 * @param ctx the parse tree
	 */
	exitImage_chained4match?: (ctx: Image_chained4matchContext) => void;

	/**
	 * Enter a parse tree produced by `flashcardParser.audiobit`.
	 * @param ctx the parse tree
	 */
	enterAudiobit?: (ctx: AudiobitContext) => void;
	/**
	 * Exit a parse tree produced by `flashcardParser.audiobit`.
	 * @param ctx the parse tree
	 */
	exitAudiobit?: (ctx: AudiobitContext) => void;

	/**
	 * Enter a parse tree produced by `flashcardParser.audio_one`.
	 * @param ctx the parse tree
	 */
	enterAudio_one?: (ctx: Audio_oneContext) => void;
	/**
	 * Exit a parse tree produced by `flashcardParser.audio_one`.
	 * @param ctx the parse tree
	 */
	exitAudio_one?: (ctx: Audio_oneContext) => void;

	/**
	 * Enter a parse tree produced by `flashcardParser.audio_format`.
	 * @param ctx the parse tree
	 */
	enterAudio_format?: (ctx: Audio_formatContext) => void;
	/**
	 * Exit a parse tree produced by `flashcardParser.audio_format`.
	 * @param ctx the parse tree
	 */
	exitAudio_format?: (ctx: Audio_formatContext) => void;

	/**
	 * Enter a parse tree produced by `flashcardParser.op_audio_format`.
	 * @param ctx the parse tree
	 */
	enterOp_audio_format?: (ctx: Op_audio_formatContext) => void;
	/**
	 * Exit a parse tree produced by `flashcardParser.op_audio_format`.
	 * @param ctx the parse tree
	 */
	exitOp_audio_format?: (ctx: Op_audio_formatContext) => void;

	/**
	 * Enter a parse tree produced by `flashcardParser.resource_chained`.
	 * @param ctx the parse tree
	 */
	enterResource_chained?: (ctx: Resource_chainedContext) => void;
	/**
	 * Exit a parse tree produced by `flashcardParser.resource_chained`.
	 * @param ctx the parse tree
	 */
	exitResource_chained?: (ctx: Resource_chainedContext) => void;

	/**
	 * Enter a parse tree produced by `flashcardParser.telephone`.
	 * @param ctx the parse tree
	 */
	enterTelephone?: (ctx: TelephoneContext) => void;
	/**
	 * Exit a parse tree produced by `flashcardParser.telephone`.
	 * @param ctx the parse tree
	 */
	exitTelephone?: (ctx: TelephoneContext) => void;

	/**
	 * Enter a parse tree produced by `flashcardParser.url`.
	 * @param ctx the parse tree
	 */
	enterUrl?: (ctx: UrlContext) => void;
	/**
	 * Exit a parse tree produced by `flashcardParser.url`.
	 * @param ctx the parse tree
	 */
	exitUrl?: (ctx: UrlContext) => void;

	/**
	 * Enter a parse tree produced by `flashcardParser.item`.
	 * @param ctx the parse tree
	 */
	enterItem?: (ctx: ItemContext) => void;
	/**
	 * Exit a parse tree produced by `flashcardParser.item`.
	 * @param ctx the parse tree
	 */
	exitItem?: (ctx: ItemContext) => void;

	/**
	 * Enter a parse tree produced by `flashcardParser.lead`.
	 * @param ctx the parse tree
	 */
	enterLead?: (ctx: LeadContext) => void;
	/**
	 * Exit a parse tree produced by `flashcardParser.lead`.
	 * @param ctx the parse tree
	 */
	exitLead?: (ctx: LeadContext) => void;

	/**
	 * Enter a parse tree produced by `flashcardParser.angleref`.
	 * @param ctx the parse tree
	 */
	enterAngleref?: (ctx: AnglerefContext) => void;
	/**
	 * Exit a parse tree produced by `flashcardParser.angleref`.
	 * @param ctx the parse tree
	 */
	exitAngleref?: (ctx: AnglerefContext) => void;

	/**
	 * Enter a parse tree produced by `flashcardParser.example`.
	 * @param ctx the parse tree
	 */
	enterExample?: (ctx: ExampleContext) => void;
	/**
	 * Exit a parse tree produced by `flashcardParser.example`.
	 * @param ctx the parse tree
	 */
	exitExample?: (ctx: ExampleContext) => void;

	/**
	 * Enter a parse tree produced by `flashcardParser.bracketed_text`.
	 * @param ctx the parse tree
	 */
	enterBracketed_text?: (ctx: Bracketed_textContext) => void;
	/**
	 * Exit a parse tree produced by `flashcardParser.bracketed_text`.
	 * @param ctx the parse tree
	 */
	exitBracketed_text?: (ctx: Bracketed_textContext) => void;

	/**
	 * Enter a parse tree produced by `flashcardParser.reference`.
	 * @param ctx the parse tree
	 */
	enterReference?: (ctx: ReferenceContext) => void;
	/**
	 * Exit a parse tree produced by `flashcardParser.reference`.
	 * @param ctx the parse tree
	 */
	exitReference?: (ctx: ReferenceContext) => void;

	/**
	 * Enter a parse tree produced by `flashcardParser.progress`.
	 * @param ctx the parse tree
	 */
	enterProgress?: (ctx: ProgressContext) => void;
	/**
	 * Exit a parse tree produced by `flashcardParser.progress`.
	 * @param ctx the parse tree
	 */
	exitProgress?: (ctx: ProgressContext) => void;

	/**
	 * Enter a parse tree produced by `flashcardParser.dateprop`.
	 * @param ctx the parse tree
	 */
	enterDateprop?: (ctx: DatepropContext) => void;
	/**
	 * Exit a parse tree produced by `flashcardParser.dateprop`.
	 * @param ctx the parse tree
	 */
	exitDateprop?: (ctx: DatepropContext) => void;

	/**
	 * Enter a parse tree produced by `flashcardParser.dateprop_chained`.
	 * @param ctx the parse tree
	 */
	enterDateprop_chained?: (ctx: Dateprop_chainedContext) => void;
	/**
	 * Exit a parse tree produced by `flashcardParser.dateprop_chained`.
	 * @param ctx the parse tree
	 */
	exitDateprop_chained?: (ctx: Dateprop_chainedContext) => void;

	/**
	 * Enter a parse tree produced by `flashcardParser.instruction`.
	 * @param ctx the parse tree
	 */
	enterInstruction?: (ctx: InstructionContext) => void;
	/**
	 * Exit a parse tree produced by `flashcardParser.instruction`.
	 * @param ctx the parse tree
	 */
	exitInstruction?: (ctx: InstructionContext) => void;

	/**
	 * Enter a parse tree produced by `flashcardParser.hint`.
	 * @param ctx the parse tree
	 */
	enterHint?: (ctx: HintContext) => void;
	/**
	 * Exit a parse tree produced by `flashcardParser.hint`.
	 * @param ctx the parse tree
	 */
	exitHint?: (ctx: HintContext) => void;

	/**
	 * Enter a parse tree produced by `flashcardParser.title`.
	 * @param ctx the parse tree
	 */
	enterTitle?: (ctx: TitleContext) => void;
	/**
	 * Exit a parse tree produced by `flashcardParser.title`.
	 * @param ctx the parse tree
	 */
	exitTitle?: (ctx: TitleContext) => void;

	/**
	 * Enter a parse tree produced by `flashcardParser.bool_label`.
	 * @param ctx the parse tree
	 */
	enterBool_label?: (ctx: Bool_labelContext) => void;
	/**
	 * Exit a parse tree produced by `flashcardParser.bool_label`.
	 * @param ctx the parse tree
	 */
	exitBool_label?: (ctx: Bool_labelContext) => void;

	/**
	 * Enter a parse tree produced by `flashcardParser.progress_points`.
	 * @param ctx the parse tree
	 */
	enterProgress_points?: (ctx: Progress_pointsContext) => void;
	/**
	 * Exit a parse tree produced by `flashcardParser.progress_points`.
	 * @param ctx the parse tree
	 */
	exitProgress_points?: (ctx: Progress_pointsContext) => void;

	/**
	 * Enter a parse tree produced by `flashcardParser.istracked`.
	 * @param ctx the parse tree
	 */
	enterIstracked?: (ctx: IstrackedContext) => void;
	/**
	 * Exit a parse tree produced by `flashcardParser.istracked`.
	 * @param ctx the parse tree
	 */
	exitIstracked?: (ctx: IstrackedContext) => void;

	/**
	 * Enter a parse tree produced by `flashcardParser.isinfoonly`.
	 * @param ctx the parse tree
	 */
	enterIsinfoonly?: (ctx: IsinfoonlyContext) => void;
	/**
	 * Exit a parse tree produced by `flashcardParser.isinfoonly`.
	 * @param ctx the parse tree
	 */
	exitIsinfoonly?: (ctx: IsinfoonlyContext) => void;

	/**
	 * Enter a parse tree produced by `flashcardParser.atdef`.
	 * @param ctx the parse tree
	 */
	enterAtdef?: (ctx: AtdefContext) => void;
	/**
	 * Exit a parse tree produced by `flashcardParser.atdef`.
	 * @param ctx the parse tree
	 */
	exitAtdef?: (ctx: AtdefContext) => void;

	/**
	 * Enter a parse tree produced by `flashcardParser.atdef_`.
	 * @param ctx the parse tree
	 */
	enterAtdef_?: (ctx: Atdef_Context) => void;
	/**
	 * Exit a parse tree produced by `flashcardParser.atdef_`.
	 * @param ctx the parse tree
	 */
	exitAtdef_?: (ctx: Atdef_Context) => void;

	/**
	 * Enter a parse tree produced by `flashcardParser.dollarans`.
	 * @param ctx the parse tree
	 */
	enterDollarans?: (ctx: DollaransContext) => void;
	/**
	 * Exit a parse tree produced by `flashcardParser.dollarans`.
	 * @param ctx the parse tree
	 */
	exitDollarans?: (ctx: DollaransContext) => void;

	/**
	 * Enter a parse tree produced by `flashcardParser.anchor`.
	 * @param ctx the parse tree
	 */
	enterAnchor?: (ctx: AnchorContext) => void;
	/**
	 * Exit a parse tree produced by `flashcardParser.anchor`.
	 * @param ctx the parse tree
	 */
	exitAnchor?: (ctx: AnchorContext) => void;

	/**
	 * Enter a parse tree produced by `flashcardParser.dcolon`.
	 * @param ctx the parse tree
	 */
	enterDcolon?: (ctx: DcolonContext) => void;
	/**
	 * Exit a parse tree produced by `flashcardParser.dcolon`.
	 * @param ctx the parse tree
	 */
	exitDcolon?: (ctx: DcolonContext) => void;

	/**
	 * Enter a parse tree produced by `flashcardParser.lines`.
	 * @param ctx the parse tree
	 */
	enterLines?: (ctx: LinesContext) => void;
	/**
	 * Exit a parse tree produced by `flashcardParser.lines`.
	 * @param ctx the parse tree
	 */
	exitLines?: (ctx: LinesContext) => void;

	/**
	 * Enter a parse tree produced by `flashcardParser.s_and_w`.
	 * @param ctx the parse tree
	 */
	enterS_and_w?: (ctx: S_and_wContext) => void;
	/**
	 * Exit a parse tree produced by `flashcardParser.s_and_w`.
	 * @param ctx the parse tree
	 */
	exitS_and_w?: (ctx: S_and_wContext) => void;

	/**
	 * Enter a parse tree produced by `flashcardParser.bracket_escaped`.
	 * @param ctx the parse tree
	 */
	enterBracket_escaped?: (ctx: Bracket_escapedContext) => void;
	/**
	 * Exit a parse tree produced by `flashcardParser.bracket_escaped`.
	 * @param ctx the parse tree
	 */
	exitBracket_escaped?: (ctx: Bracket_escapedContext) => void;

	/**
	 * Enter a parse tree produced by `flashcardParser.clnsp`.
	 * @param ctx the parse tree
	 */
	enterClnsp?: (ctx: ClnspContext) => void;
	/**
	 * Exit a parse tree produced by `flashcardParser.clnsp`.
	 * @param ctx the parse tree
	 */
	exitClnsp?: (ctx: ClnspContext) => void;

	/**
	 * Enter a parse tree produced by `flashcardParser.sspl`.
	 * @param ctx the parse tree
	 */
	enterSspl?: (ctx: SsplContext) => void;
	/**
	 * Exit a parse tree produced by `flashcardParser.sspl`.
	 * @param ctx the parse tree
	 */
	exitSspl?: (ctx: SsplContext) => void;

	/**
	 * Enter a parse tree produced by `flashcardParser.words`.
	 * @param ctx the parse tree
	 */
	enterWords?: (ctx: WordsContext) => void;
	/**
	 * Exit a parse tree produced by `flashcardParser.words`.
	 * @param ctx the parse tree
	 */
	exitWords?: (ctx: WordsContext) => void;

	/**
	 * Enter a parse tree produced by `flashcardParser.sp`.
	 * @param ctx the parse tree
	 */
	enterSp?: (ctx: SpContext) => void;
	/**
	 * Exit a parse tree produced by `flashcardParser.sp`.
	 * @param ctx the parse tree
	 */
	exitSp?: (ctx: SpContext) => void;
}

