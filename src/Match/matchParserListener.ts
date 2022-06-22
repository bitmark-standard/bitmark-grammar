// Generated from ./Match/matchParser.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

import { BitmarkContext } from "./matchParser";
import { Bitmark_Context } from "./matchParser";
import { MatchesContext } from "./matchParser";
import { Match_Context } from "./matchParser";
import { Match_matrixContext } from "./matchParser";
import { Match_solution_groupedContext } from "./matchParser";
import { Match_reverseContext } from "./matchParser";
import { Match_all_reverseContext } from "./matchParser";
import { Match_pictureContext } from "./matchParser";
import { Match_audioContext } from "./matchParser";
import { Match_allContext } from "./matchParser";
import { BitElemContext } from "./matchParser";
import { GapContext } from "./matchParser";
import { Single_gapContext } from "./matchParser";
import { Ml_exampleContext } from "./matchParser";
import { LongansContext } from "./matchParser";
import { ShortansContext } from "./matchParser";
import { ResourceContext } from "./matchParser";
import { Pair_headingContext } from "./matchParser";
import { Pair_heading_multiContext } from "./matchParser";
import { Key_titleContext } from "./matchParser";
import { Value_titleContext } from "./matchParser";
import { Value_title_multiContext } from "./matchParser";
import { PairsContext } from "./matchParser";
import { PqpairContext } from "./matchParser";
import { PqueryContext } from "./matchParser";
import { Pquery__Context } from "./matchParser";
import { TenseContext } from "./matchParser";
import { PanswerContext } from "./matchParser";
import { Panswer__Context } from "./matchParser";
import { Pair_imagesContext } from "./matchParser";
import { Pair_imageContext } from "./matchParser";
import { Pair_audiosContext } from "./matchParser";
import { Pair_audioContext } from "./matchParser";
import { Pair_multivalsContext } from "./matchParser";
import { Pair_multivalContext } from "./matchParser";
import { Pairmultival_imageContext } from "./matchParser";
import { Pairmultival_audioContext } from "./matchParser";
import { MpqueryContext } from "./matchParser";
import { Mpquery__Context } from "./matchParser";
import { MpanswerContext } from "./matchParser";
import { Mpanswer__Context } from "./matchParser";
import { PimagebitContext } from "./matchParser";
import { Pimage_oneContext } from "./matchParser";
import { PaudiobitContext } from "./matchParser";
import { Bullet_itemContext } from "./matchParser";
import { AtpointContext } from "./matchParser";
import { FormatContext } from "./matchParser";
import { Resource_formatContext } from "./matchParser";
import { Resource_format_extraContext } from "./matchParser";
import { Image_formatContext } from "./matchParser";
import { Video_formatContext } from "./matchParser";
import { Article_formatContext } from "./matchParser";
import { Document_formatContext } from "./matchParser";
import { App_formatContext } from "./matchParser";
import { Website_formatContext } from "./matchParser";
import { Stillimagefilm_formatContext } from "./matchParser";
import { Op_article_formatContext } from "./matchParser";
import { Op_document_formatContext } from "./matchParser";
import { Op_app_formatContext } from "./matchParser";
import { Op_website_formatContext } from "./matchParser";
import { Op_video_formatContext } from "./matchParser";
import { Op_stillimagefilm_formatContext } from "./matchParser";
import { ArticlebitContext } from "./matchParser";
import { DocumentbitContext } from "./matchParser";
import { WebsitebitContext } from "./matchParser";
import { AppbitContext } from "./matchParser";
import { StillimagefilmbitContext } from "./matchParser";
import { Stillimg_oneContext } from "./matchParser";
import { VideobitContext } from "./matchParser";
import { Video_oneContext } from "./matchParser";
import { ImagebitContext } from "./matchParser";
import { Image_oneContext } from "./matchParser";
import { Op_image_formatContext } from "./matchParser";
import { Image_chainedContext } from "./matchParser";
import { Image_chained4matchContext } from "./matchParser";
import { AudiobitContext } from "./matchParser";
import { Audio_oneContext } from "./matchParser";
import { Audio_formatContext } from "./matchParser";
import { Op_audio_formatContext } from "./matchParser";
import { Resource_chainedContext } from "./matchParser";
import { TelephoneContext } from "./matchParser";
import { UrlContext } from "./matchParser";
import { ItemContext } from "./matchParser";
import { LeadContext } from "./matchParser";
import { AnglerefContext } from "./matchParser";
import { ExampleContext } from "./matchParser";
import { Bracketed_textContext } from "./matchParser";
import { ReferenceContext } from "./matchParser";
import { ProgressContext } from "./matchParser";
import { DatepropContext } from "./matchParser";
import { Dateprop_chainedContext } from "./matchParser";
import { InstructionContext } from "./matchParser";
import { HintContext } from "./matchParser";
import { TitleContext } from "./matchParser";
import { Bool_labelContext } from "./matchParser";
import { Progress_pointsContext } from "./matchParser";
import { IstrackedContext } from "./matchParser";
import { IsinfoonlyContext } from "./matchParser";
import { AtdefContext } from "./matchParser";
import { Atdef_Context } from "./matchParser";
import { DollaransContext } from "./matchParser";
import { AnchorContext } from "./matchParser";
import { DcolonContext } from "./matchParser";
import { ColcoltextContext } from "./matchParser";
import { LinesContext } from "./matchParser";
import { List_lineContext } from "./matchParser";
import { S_and_wContext } from "./matchParser";
import { DclinesContext } from "./matchParser";
import { OpdollContext } from "./matchParser";
import { OpuContext } from "./matchParser";
import { OpbContext } from "./matchParser";
import { OpqContext } from "./matchParser";
import { OpaContext } from "./matchParser";
import { OppContext } from "./matchParser";
import { OpmContext } from "./matchParser";
import { OpsContext } from "./matchParser";
import { OprContext } from "./matchParser";
import { OpcContext } from "./matchParser";
import { ClnspContext } from "./matchParser";
import { Or_Context } from "./matchParser";
import { WordsContext } from "./matchParser";
import { SpContext } from "./matchParser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `matchParser`.
 */
export interface matchParserListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `matchParser.bitmark`.
	 * @param ctx the parse tree
	 */
	enterBitmark?: (ctx: BitmarkContext) => void;
	/**
	 * Exit a parse tree produced by `matchParser.bitmark`.
	 * @param ctx the parse tree
	 */
	exitBitmark?: (ctx: BitmarkContext) => void;

	/**
	 * Enter a parse tree produced by `matchParser.bitmark_`.
	 * @param ctx the parse tree
	 */
	enterBitmark_?: (ctx: Bitmark_Context) => void;
	/**
	 * Exit a parse tree produced by `matchParser.bitmark_`.
	 * @param ctx the parse tree
	 */
	exitBitmark_?: (ctx: Bitmark_Context) => void;

	/**
	 * Enter a parse tree produced by `matchParser.matches`.
	 * @param ctx the parse tree
	 */
	enterMatches?: (ctx: MatchesContext) => void;
	/**
	 * Exit a parse tree produced by `matchParser.matches`.
	 * @param ctx the parse tree
	 */
	exitMatches?: (ctx: MatchesContext) => void;

	/**
	 * Enter a parse tree produced by `matchParser.match_`.
	 * @param ctx the parse tree
	 */
	enterMatch_?: (ctx: Match_Context) => void;
	/**
	 * Exit a parse tree produced by `matchParser.match_`.
	 * @param ctx the parse tree
	 */
	exitMatch_?: (ctx: Match_Context) => void;

	/**
	 * Enter a parse tree produced by `matchParser.match_matrix`.
	 * @param ctx the parse tree
	 */
	enterMatch_matrix?: (ctx: Match_matrixContext) => void;
	/**
	 * Exit a parse tree produced by `matchParser.match_matrix`.
	 * @param ctx the parse tree
	 */
	exitMatch_matrix?: (ctx: Match_matrixContext) => void;

	/**
	 * Enter a parse tree produced by `matchParser.match_solution_grouped`.
	 * @param ctx the parse tree
	 */
	enterMatch_solution_grouped?: (ctx: Match_solution_groupedContext) => void;
	/**
	 * Exit a parse tree produced by `matchParser.match_solution_grouped`.
	 * @param ctx the parse tree
	 */
	exitMatch_solution_grouped?: (ctx: Match_solution_groupedContext) => void;

	/**
	 * Enter a parse tree produced by `matchParser.match_reverse`.
	 * @param ctx the parse tree
	 */
	enterMatch_reverse?: (ctx: Match_reverseContext) => void;
	/**
	 * Exit a parse tree produced by `matchParser.match_reverse`.
	 * @param ctx the parse tree
	 */
	exitMatch_reverse?: (ctx: Match_reverseContext) => void;

	/**
	 * Enter a parse tree produced by `matchParser.match_all_reverse`.
	 * @param ctx the parse tree
	 */
	enterMatch_all_reverse?: (ctx: Match_all_reverseContext) => void;
	/**
	 * Exit a parse tree produced by `matchParser.match_all_reverse`.
	 * @param ctx the parse tree
	 */
	exitMatch_all_reverse?: (ctx: Match_all_reverseContext) => void;

	/**
	 * Enter a parse tree produced by `matchParser.match_picture`.
	 * @param ctx the parse tree
	 */
	enterMatch_picture?: (ctx: Match_pictureContext) => void;
	/**
	 * Exit a parse tree produced by `matchParser.match_picture`.
	 * @param ctx the parse tree
	 */
	exitMatch_picture?: (ctx: Match_pictureContext) => void;

	/**
	 * Enter a parse tree produced by `matchParser.match_audio`.
	 * @param ctx the parse tree
	 */
	enterMatch_audio?: (ctx: Match_audioContext) => void;
	/**
	 * Exit a parse tree produced by `matchParser.match_audio`.
	 * @param ctx the parse tree
	 */
	exitMatch_audio?: (ctx: Match_audioContext) => void;

	/**
	 * Enter a parse tree produced by `matchParser.match_all`.
	 * @param ctx the parse tree
	 */
	enterMatch_all?: (ctx: Match_allContext) => void;
	/**
	 * Exit a parse tree produced by `matchParser.match_all`.
	 * @param ctx the parse tree
	 */
	exitMatch_all?: (ctx: Match_allContext) => void;

	/**
	 * Enter a parse tree produced by `matchParser.bitElem`.
	 * @param ctx the parse tree
	 */
	enterBitElem?: (ctx: BitElemContext) => void;
	/**
	 * Exit a parse tree produced by `matchParser.bitElem`.
	 * @param ctx the parse tree
	 */
	exitBitElem?: (ctx: BitElemContext) => void;

	/**
	 * Enter a parse tree produced by `matchParser.gap`.
	 * @param ctx the parse tree
	 */
	enterGap?: (ctx: GapContext) => void;
	/**
	 * Exit a parse tree produced by `matchParser.gap`.
	 * @param ctx the parse tree
	 */
	exitGap?: (ctx: GapContext) => void;

	/**
	 * Enter a parse tree produced by `matchParser.single_gap`.
	 * @param ctx the parse tree
	 */
	enterSingle_gap?: (ctx: Single_gapContext) => void;
	/**
	 * Exit a parse tree produced by `matchParser.single_gap`.
	 * @param ctx the parse tree
	 */
	exitSingle_gap?: (ctx: Single_gapContext) => void;

	/**
	 * Enter a parse tree produced by `matchParser.ml_example`.
	 * @param ctx the parse tree
	 */
	enterMl_example?: (ctx: Ml_exampleContext) => void;
	/**
	 * Exit a parse tree produced by `matchParser.ml_example`.
	 * @param ctx the parse tree
	 */
	exitMl_example?: (ctx: Ml_exampleContext) => void;

	/**
	 * Enter a parse tree produced by `matchParser.longans`.
	 * @param ctx the parse tree
	 */
	enterLongans?: (ctx: LongansContext) => void;
	/**
	 * Exit a parse tree produced by `matchParser.longans`.
	 * @param ctx the parse tree
	 */
	exitLongans?: (ctx: LongansContext) => void;

	/**
	 * Enter a parse tree produced by `matchParser.shortans`.
	 * @param ctx the parse tree
	 */
	enterShortans?: (ctx: ShortansContext) => void;
	/**
	 * Exit a parse tree produced by `matchParser.shortans`.
	 * @param ctx the parse tree
	 */
	exitShortans?: (ctx: ShortansContext) => void;

	/**
	 * Enter a parse tree produced by `matchParser.resource`.
	 * @param ctx the parse tree
	 */
	enterResource?: (ctx: ResourceContext) => void;
	/**
	 * Exit a parse tree produced by `matchParser.resource`.
	 * @param ctx the parse tree
	 */
	exitResource?: (ctx: ResourceContext) => void;

	/**
	 * Enter a parse tree produced by `matchParser.pair_heading`.
	 * @param ctx the parse tree
	 */
	enterPair_heading?: (ctx: Pair_headingContext) => void;
	/**
	 * Exit a parse tree produced by `matchParser.pair_heading`.
	 * @param ctx the parse tree
	 */
	exitPair_heading?: (ctx: Pair_headingContext) => void;

	/**
	 * Enter a parse tree produced by `matchParser.pair_heading_multi`.
	 * @param ctx the parse tree
	 */
	enterPair_heading_multi?: (ctx: Pair_heading_multiContext) => void;
	/**
	 * Exit a parse tree produced by `matchParser.pair_heading_multi`.
	 * @param ctx the parse tree
	 */
	exitPair_heading_multi?: (ctx: Pair_heading_multiContext) => void;

	/**
	 * Enter a parse tree produced by `matchParser.key_title`.
	 * @param ctx the parse tree
	 */
	enterKey_title?: (ctx: Key_titleContext) => void;
	/**
	 * Exit a parse tree produced by `matchParser.key_title`.
	 * @param ctx the parse tree
	 */
	exitKey_title?: (ctx: Key_titleContext) => void;

	/**
	 * Enter a parse tree produced by `matchParser.value_title`.
	 * @param ctx the parse tree
	 */
	enterValue_title?: (ctx: Value_titleContext) => void;
	/**
	 * Exit a parse tree produced by `matchParser.value_title`.
	 * @param ctx the parse tree
	 */
	exitValue_title?: (ctx: Value_titleContext) => void;

	/**
	 * Enter a parse tree produced by `matchParser.value_title_multi`.
	 * @param ctx the parse tree
	 */
	enterValue_title_multi?: (ctx: Value_title_multiContext) => void;
	/**
	 * Exit a parse tree produced by `matchParser.value_title_multi`.
	 * @param ctx the parse tree
	 */
	exitValue_title_multi?: (ctx: Value_title_multiContext) => void;

	/**
	 * Enter a parse tree produced by `matchParser.pairs`.
	 * @param ctx the parse tree
	 */
	enterPairs?: (ctx: PairsContext) => void;
	/**
	 * Exit a parse tree produced by `matchParser.pairs`.
	 * @param ctx the parse tree
	 */
	exitPairs?: (ctx: PairsContext) => void;

	/**
	 * Enter a parse tree produced by `matchParser.pqpair`.
	 * @param ctx the parse tree
	 */
	enterPqpair?: (ctx: PqpairContext) => void;
	/**
	 * Exit a parse tree produced by `matchParser.pqpair`.
	 * @param ctx the parse tree
	 */
	exitPqpair?: (ctx: PqpairContext) => void;

	/**
	 * Enter a parse tree produced by `matchParser.pquery`.
	 * @param ctx the parse tree
	 */
	enterPquery?: (ctx: PqueryContext) => void;
	/**
	 * Exit a parse tree produced by `matchParser.pquery`.
	 * @param ctx the parse tree
	 */
	exitPquery?: (ctx: PqueryContext) => void;

	/**
	 * Enter a parse tree produced by `matchParser.pquery__`.
	 * @param ctx the parse tree
	 */
	enterPquery__?: (ctx: Pquery__Context) => void;
	/**
	 * Exit a parse tree produced by `matchParser.pquery__`.
	 * @param ctx the parse tree
	 */
	exitPquery__?: (ctx: Pquery__Context) => void;

	/**
	 * Enter a parse tree produced by `matchParser.tense`.
	 * @param ctx the parse tree
	 */
	enterTense?: (ctx: TenseContext) => void;
	/**
	 * Exit a parse tree produced by `matchParser.tense`.
	 * @param ctx the parse tree
	 */
	exitTense?: (ctx: TenseContext) => void;

	/**
	 * Enter a parse tree produced by `matchParser.panswer`.
	 * @param ctx the parse tree
	 */
	enterPanswer?: (ctx: PanswerContext) => void;
	/**
	 * Exit a parse tree produced by `matchParser.panswer`.
	 * @param ctx the parse tree
	 */
	exitPanswer?: (ctx: PanswerContext) => void;

	/**
	 * Enter a parse tree produced by `matchParser.panswer__`.
	 * @param ctx the parse tree
	 */
	enterPanswer__?: (ctx: Panswer__Context) => void;
	/**
	 * Exit a parse tree produced by `matchParser.panswer__`.
	 * @param ctx the parse tree
	 */
	exitPanswer__?: (ctx: Panswer__Context) => void;

	/**
	 * Enter a parse tree produced by `matchParser.pair_images`.
	 * @param ctx the parse tree
	 */
	enterPair_images?: (ctx: Pair_imagesContext) => void;
	/**
	 * Exit a parse tree produced by `matchParser.pair_images`.
	 * @param ctx the parse tree
	 */
	exitPair_images?: (ctx: Pair_imagesContext) => void;

	/**
	 * Enter a parse tree produced by `matchParser.pair_image`.
	 * @param ctx the parse tree
	 */
	enterPair_image?: (ctx: Pair_imageContext) => void;
	/**
	 * Exit a parse tree produced by `matchParser.pair_image`.
	 * @param ctx the parse tree
	 */
	exitPair_image?: (ctx: Pair_imageContext) => void;

	/**
	 * Enter a parse tree produced by `matchParser.pair_audios`.
	 * @param ctx the parse tree
	 */
	enterPair_audios?: (ctx: Pair_audiosContext) => void;
	/**
	 * Exit a parse tree produced by `matchParser.pair_audios`.
	 * @param ctx the parse tree
	 */
	exitPair_audios?: (ctx: Pair_audiosContext) => void;

	/**
	 * Enter a parse tree produced by `matchParser.pair_audio`.
	 * @param ctx the parse tree
	 */
	enterPair_audio?: (ctx: Pair_audioContext) => void;
	/**
	 * Exit a parse tree produced by `matchParser.pair_audio`.
	 * @param ctx the parse tree
	 */
	exitPair_audio?: (ctx: Pair_audioContext) => void;

	/**
	 * Enter a parse tree produced by `matchParser.pair_multivals`.
	 * @param ctx the parse tree
	 */
	enterPair_multivals?: (ctx: Pair_multivalsContext) => void;
	/**
	 * Exit a parse tree produced by `matchParser.pair_multivals`.
	 * @param ctx the parse tree
	 */
	exitPair_multivals?: (ctx: Pair_multivalsContext) => void;

	/**
	 * Enter a parse tree produced by `matchParser.pair_multival`.
	 * @param ctx the parse tree
	 */
	enterPair_multival?: (ctx: Pair_multivalContext) => void;
	/**
	 * Exit a parse tree produced by `matchParser.pair_multival`.
	 * @param ctx the parse tree
	 */
	exitPair_multival?: (ctx: Pair_multivalContext) => void;

	/**
	 * Enter a parse tree produced by `matchParser.pairmultival_image`.
	 * @param ctx the parse tree
	 */
	enterPairmultival_image?: (ctx: Pairmultival_imageContext) => void;
	/**
	 * Exit a parse tree produced by `matchParser.pairmultival_image`.
	 * @param ctx the parse tree
	 */
	exitPairmultival_image?: (ctx: Pairmultival_imageContext) => void;

	/**
	 * Enter a parse tree produced by `matchParser.pairmultival_audio`.
	 * @param ctx the parse tree
	 */
	enterPairmultival_audio?: (ctx: Pairmultival_audioContext) => void;
	/**
	 * Exit a parse tree produced by `matchParser.pairmultival_audio`.
	 * @param ctx the parse tree
	 */
	exitPairmultival_audio?: (ctx: Pairmultival_audioContext) => void;

	/**
	 * Enter a parse tree produced by `matchParser.mpquery`.
	 * @param ctx the parse tree
	 */
	enterMpquery?: (ctx: MpqueryContext) => void;
	/**
	 * Exit a parse tree produced by `matchParser.mpquery`.
	 * @param ctx the parse tree
	 */
	exitMpquery?: (ctx: MpqueryContext) => void;

	/**
	 * Enter a parse tree produced by `matchParser.mpquery__`.
	 * @param ctx the parse tree
	 */
	enterMpquery__?: (ctx: Mpquery__Context) => void;
	/**
	 * Exit a parse tree produced by `matchParser.mpquery__`.
	 * @param ctx the parse tree
	 */
	exitMpquery__?: (ctx: Mpquery__Context) => void;

	/**
	 * Enter a parse tree produced by `matchParser.mpanswer`.
	 * @param ctx the parse tree
	 */
	enterMpanswer?: (ctx: MpanswerContext) => void;
	/**
	 * Exit a parse tree produced by `matchParser.mpanswer`.
	 * @param ctx the parse tree
	 */
	exitMpanswer?: (ctx: MpanswerContext) => void;

	/**
	 * Enter a parse tree produced by `matchParser.mpanswer__`.
	 * @param ctx the parse tree
	 */
	enterMpanswer__?: (ctx: Mpanswer__Context) => void;
	/**
	 * Exit a parse tree produced by `matchParser.mpanswer__`.
	 * @param ctx the parse tree
	 */
	exitMpanswer__?: (ctx: Mpanswer__Context) => void;

	/**
	 * Enter a parse tree produced by `matchParser.pimagebit`.
	 * @param ctx the parse tree
	 */
	enterPimagebit?: (ctx: PimagebitContext) => void;
	/**
	 * Exit a parse tree produced by `matchParser.pimagebit`.
	 * @param ctx the parse tree
	 */
	exitPimagebit?: (ctx: PimagebitContext) => void;

	/**
	 * Enter a parse tree produced by `matchParser.pimage_one`.
	 * @param ctx the parse tree
	 */
	enterPimage_one?: (ctx: Pimage_oneContext) => void;
	/**
	 * Exit a parse tree produced by `matchParser.pimage_one`.
	 * @param ctx the parse tree
	 */
	exitPimage_one?: (ctx: Pimage_oneContext) => void;

	/**
	 * Enter a parse tree produced by `matchParser.paudiobit`.
	 * @param ctx the parse tree
	 */
	enterPaudiobit?: (ctx: PaudiobitContext) => void;
	/**
	 * Exit a parse tree produced by `matchParser.paudiobit`.
	 * @param ctx the parse tree
	 */
	exitPaudiobit?: (ctx: PaudiobitContext) => void;

	/**
	 * Enter a parse tree produced by `matchParser.bullet_item`.
	 * @param ctx the parse tree
	 */
	enterBullet_item?: (ctx: Bullet_itemContext) => void;
	/**
	 * Exit a parse tree produced by `matchParser.bullet_item`.
	 * @param ctx the parse tree
	 */
	exitBullet_item?: (ctx: Bullet_itemContext) => void;

	/**
	 * Enter a parse tree produced by `matchParser.atpoint`.
	 * @param ctx the parse tree
	 */
	enterAtpoint?: (ctx: AtpointContext) => void;
	/**
	 * Exit a parse tree produced by `matchParser.atpoint`.
	 * @param ctx the parse tree
	 */
	exitAtpoint?: (ctx: AtpointContext) => void;

	/**
	 * Enter a parse tree produced by `matchParser.format`.
	 * @param ctx the parse tree
	 */
	enterFormat?: (ctx: FormatContext) => void;
	/**
	 * Exit a parse tree produced by `matchParser.format`.
	 * @param ctx the parse tree
	 */
	exitFormat?: (ctx: FormatContext) => void;

	/**
	 * Enter a parse tree produced by `matchParser.resource_format`.
	 * @param ctx the parse tree
	 */
	enterResource_format?: (ctx: Resource_formatContext) => void;
	/**
	 * Exit a parse tree produced by `matchParser.resource_format`.
	 * @param ctx the parse tree
	 */
	exitResource_format?: (ctx: Resource_formatContext) => void;

	/**
	 * Enter a parse tree produced by `matchParser.resource_format_extra`.
	 * @param ctx the parse tree
	 */
	enterResource_format_extra?: (ctx: Resource_format_extraContext) => void;
	/**
	 * Exit a parse tree produced by `matchParser.resource_format_extra`.
	 * @param ctx the parse tree
	 */
	exitResource_format_extra?: (ctx: Resource_format_extraContext) => void;

	/**
	 * Enter a parse tree produced by `matchParser.image_format`.
	 * @param ctx the parse tree
	 */
	enterImage_format?: (ctx: Image_formatContext) => void;
	/**
	 * Exit a parse tree produced by `matchParser.image_format`.
	 * @param ctx the parse tree
	 */
	exitImage_format?: (ctx: Image_formatContext) => void;

	/**
	 * Enter a parse tree produced by `matchParser.video_format`.
	 * @param ctx the parse tree
	 */
	enterVideo_format?: (ctx: Video_formatContext) => void;
	/**
	 * Exit a parse tree produced by `matchParser.video_format`.
	 * @param ctx the parse tree
	 */
	exitVideo_format?: (ctx: Video_formatContext) => void;

	/**
	 * Enter a parse tree produced by `matchParser.article_format`.
	 * @param ctx the parse tree
	 */
	enterArticle_format?: (ctx: Article_formatContext) => void;
	/**
	 * Exit a parse tree produced by `matchParser.article_format`.
	 * @param ctx the parse tree
	 */
	exitArticle_format?: (ctx: Article_formatContext) => void;

	/**
	 * Enter a parse tree produced by `matchParser.document_format`.
	 * @param ctx the parse tree
	 */
	enterDocument_format?: (ctx: Document_formatContext) => void;
	/**
	 * Exit a parse tree produced by `matchParser.document_format`.
	 * @param ctx the parse tree
	 */
	exitDocument_format?: (ctx: Document_formatContext) => void;

	/**
	 * Enter a parse tree produced by `matchParser.app_format`.
	 * @param ctx the parse tree
	 */
	enterApp_format?: (ctx: App_formatContext) => void;
	/**
	 * Exit a parse tree produced by `matchParser.app_format`.
	 * @param ctx the parse tree
	 */
	exitApp_format?: (ctx: App_formatContext) => void;

	/**
	 * Enter a parse tree produced by `matchParser.website_format`.
	 * @param ctx the parse tree
	 */
	enterWebsite_format?: (ctx: Website_formatContext) => void;
	/**
	 * Exit a parse tree produced by `matchParser.website_format`.
	 * @param ctx the parse tree
	 */
	exitWebsite_format?: (ctx: Website_formatContext) => void;

	/**
	 * Enter a parse tree produced by `matchParser.stillimagefilm_format`.
	 * @param ctx the parse tree
	 */
	enterStillimagefilm_format?: (ctx: Stillimagefilm_formatContext) => void;
	/**
	 * Exit a parse tree produced by `matchParser.stillimagefilm_format`.
	 * @param ctx the parse tree
	 */
	exitStillimagefilm_format?: (ctx: Stillimagefilm_formatContext) => void;

	/**
	 * Enter a parse tree produced by `matchParser.op_article_format`.
	 * @param ctx the parse tree
	 */
	enterOp_article_format?: (ctx: Op_article_formatContext) => void;
	/**
	 * Exit a parse tree produced by `matchParser.op_article_format`.
	 * @param ctx the parse tree
	 */
	exitOp_article_format?: (ctx: Op_article_formatContext) => void;

	/**
	 * Enter a parse tree produced by `matchParser.op_document_format`.
	 * @param ctx the parse tree
	 */
	enterOp_document_format?: (ctx: Op_document_formatContext) => void;
	/**
	 * Exit a parse tree produced by `matchParser.op_document_format`.
	 * @param ctx the parse tree
	 */
	exitOp_document_format?: (ctx: Op_document_formatContext) => void;

	/**
	 * Enter a parse tree produced by `matchParser.op_app_format`.
	 * @param ctx the parse tree
	 */
	enterOp_app_format?: (ctx: Op_app_formatContext) => void;
	/**
	 * Exit a parse tree produced by `matchParser.op_app_format`.
	 * @param ctx the parse tree
	 */
	exitOp_app_format?: (ctx: Op_app_formatContext) => void;

	/**
	 * Enter a parse tree produced by `matchParser.op_website_format`.
	 * @param ctx the parse tree
	 */
	enterOp_website_format?: (ctx: Op_website_formatContext) => void;
	/**
	 * Exit a parse tree produced by `matchParser.op_website_format`.
	 * @param ctx the parse tree
	 */
	exitOp_website_format?: (ctx: Op_website_formatContext) => void;

	/**
	 * Enter a parse tree produced by `matchParser.op_video_format`.
	 * @param ctx the parse tree
	 */
	enterOp_video_format?: (ctx: Op_video_formatContext) => void;
	/**
	 * Exit a parse tree produced by `matchParser.op_video_format`.
	 * @param ctx the parse tree
	 */
	exitOp_video_format?: (ctx: Op_video_formatContext) => void;

	/**
	 * Enter a parse tree produced by `matchParser.op_stillimagefilm_format`.
	 * @param ctx the parse tree
	 */
	enterOp_stillimagefilm_format?: (ctx: Op_stillimagefilm_formatContext) => void;
	/**
	 * Exit a parse tree produced by `matchParser.op_stillimagefilm_format`.
	 * @param ctx the parse tree
	 */
	exitOp_stillimagefilm_format?: (ctx: Op_stillimagefilm_formatContext) => void;

	/**
	 * Enter a parse tree produced by `matchParser.articlebit`.
	 * @param ctx the parse tree
	 */
	enterArticlebit?: (ctx: ArticlebitContext) => void;
	/**
	 * Exit a parse tree produced by `matchParser.articlebit`.
	 * @param ctx the parse tree
	 */
	exitArticlebit?: (ctx: ArticlebitContext) => void;

	/**
	 * Enter a parse tree produced by `matchParser.documentbit`.
	 * @param ctx the parse tree
	 */
	enterDocumentbit?: (ctx: DocumentbitContext) => void;
	/**
	 * Exit a parse tree produced by `matchParser.documentbit`.
	 * @param ctx the parse tree
	 */
	exitDocumentbit?: (ctx: DocumentbitContext) => void;

	/**
	 * Enter a parse tree produced by `matchParser.websitebit`.
	 * @param ctx the parse tree
	 */
	enterWebsitebit?: (ctx: WebsitebitContext) => void;
	/**
	 * Exit a parse tree produced by `matchParser.websitebit`.
	 * @param ctx the parse tree
	 */
	exitWebsitebit?: (ctx: WebsitebitContext) => void;

	/**
	 * Enter a parse tree produced by `matchParser.appbit`.
	 * @param ctx the parse tree
	 */
	enterAppbit?: (ctx: AppbitContext) => void;
	/**
	 * Exit a parse tree produced by `matchParser.appbit`.
	 * @param ctx the parse tree
	 */
	exitAppbit?: (ctx: AppbitContext) => void;

	/**
	 * Enter a parse tree produced by `matchParser.stillimagefilmbit`.
	 * @param ctx the parse tree
	 */
	enterStillimagefilmbit?: (ctx: StillimagefilmbitContext) => void;
	/**
	 * Exit a parse tree produced by `matchParser.stillimagefilmbit`.
	 * @param ctx the parse tree
	 */
	exitStillimagefilmbit?: (ctx: StillimagefilmbitContext) => void;

	/**
	 * Enter a parse tree produced by `matchParser.stillimg_one`.
	 * @param ctx the parse tree
	 */
	enterStillimg_one?: (ctx: Stillimg_oneContext) => void;
	/**
	 * Exit a parse tree produced by `matchParser.stillimg_one`.
	 * @param ctx the parse tree
	 */
	exitStillimg_one?: (ctx: Stillimg_oneContext) => void;

	/**
	 * Enter a parse tree produced by `matchParser.videobit`.
	 * @param ctx the parse tree
	 */
	enterVideobit?: (ctx: VideobitContext) => void;
	/**
	 * Exit a parse tree produced by `matchParser.videobit`.
	 * @param ctx the parse tree
	 */
	exitVideobit?: (ctx: VideobitContext) => void;

	/**
	 * Enter a parse tree produced by `matchParser.video_one`.
	 * @param ctx the parse tree
	 */
	enterVideo_one?: (ctx: Video_oneContext) => void;
	/**
	 * Exit a parse tree produced by `matchParser.video_one`.
	 * @param ctx the parse tree
	 */
	exitVideo_one?: (ctx: Video_oneContext) => void;

	/**
	 * Enter a parse tree produced by `matchParser.imagebit`.
	 * @param ctx the parse tree
	 */
	enterImagebit?: (ctx: ImagebitContext) => void;
	/**
	 * Exit a parse tree produced by `matchParser.imagebit`.
	 * @param ctx the parse tree
	 */
	exitImagebit?: (ctx: ImagebitContext) => void;

	/**
	 * Enter a parse tree produced by `matchParser.image_one`.
	 * @param ctx the parse tree
	 */
	enterImage_one?: (ctx: Image_oneContext) => void;
	/**
	 * Exit a parse tree produced by `matchParser.image_one`.
	 * @param ctx the parse tree
	 */
	exitImage_one?: (ctx: Image_oneContext) => void;

	/**
	 * Enter a parse tree produced by `matchParser.op_image_format`.
	 * @param ctx the parse tree
	 */
	enterOp_image_format?: (ctx: Op_image_formatContext) => void;
	/**
	 * Exit a parse tree produced by `matchParser.op_image_format`.
	 * @param ctx the parse tree
	 */
	exitOp_image_format?: (ctx: Op_image_formatContext) => void;

	/**
	 * Enter a parse tree produced by `matchParser.image_chained`.
	 * @param ctx the parse tree
	 */
	enterImage_chained?: (ctx: Image_chainedContext) => void;
	/**
	 * Exit a parse tree produced by `matchParser.image_chained`.
	 * @param ctx the parse tree
	 */
	exitImage_chained?: (ctx: Image_chainedContext) => void;

	/**
	 * Enter a parse tree produced by `matchParser.image_chained4match`.
	 * @param ctx the parse tree
	 */
	enterImage_chained4match?: (ctx: Image_chained4matchContext) => void;
	/**
	 * Exit a parse tree produced by `matchParser.image_chained4match`.
	 * @param ctx the parse tree
	 */
	exitImage_chained4match?: (ctx: Image_chained4matchContext) => void;

	/**
	 * Enter a parse tree produced by `matchParser.audiobit`.
	 * @param ctx the parse tree
	 */
	enterAudiobit?: (ctx: AudiobitContext) => void;
	/**
	 * Exit a parse tree produced by `matchParser.audiobit`.
	 * @param ctx the parse tree
	 */
	exitAudiobit?: (ctx: AudiobitContext) => void;

	/**
	 * Enter a parse tree produced by `matchParser.audio_one`.
	 * @param ctx the parse tree
	 */
	enterAudio_one?: (ctx: Audio_oneContext) => void;
	/**
	 * Exit a parse tree produced by `matchParser.audio_one`.
	 * @param ctx the parse tree
	 */
	exitAudio_one?: (ctx: Audio_oneContext) => void;

	/**
	 * Enter a parse tree produced by `matchParser.audio_format`.
	 * @param ctx the parse tree
	 */
	enterAudio_format?: (ctx: Audio_formatContext) => void;
	/**
	 * Exit a parse tree produced by `matchParser.audio_format`.
	 * @param ctx the parse tree
	 */
	exitAudio_format?: (ctx: Audio_formatContext) => void;

	/**
	 * Enter a parse tree produced by `matchParser.op_audio_format`.
	 * @param ctx the parse tree
	 */
	enterOp_audio_format?: (ctx: Op_audio_formatContext) => void;
	/**
	 * Exit a parse tree produced by `matchParser.op_audio_format`.
	 * @param ctx the parse tree
	 */
	exitOp_audio_format?: (ctx: Op_audio_formatContext) => void;

	/**
	 * Enter a parse tree produced by `matchParser.resource_chained`.
	 * @param ctx the parse tree
	 */
	enterResource_chained?: (ctx: Resource_chainedContext) => void;
	/**
	 * Exit a parse tree produced by `matchParser.resource_chained`.
	 * @param ctx the parse tree
	 */
	exitResource_chained?: (ctx: Resource_chainedContext) => void;

	/**
	 * Enter a parse tree produced by `matchParser.telephone`.
	 * @param ctx the parse tree
	 */
	enterTelephone?: (ctx: TelephoneContext) => void;
	/**
	 * Exit a parse tree produced by `matchParser.telephone`.
	 * @param ctx the parse tree
	 */
	exitTelephone?: (ctx: TelephoneContext) => void;

	/**
	 * Enter a parse tree produced by `matchParser.url`.
	 * @param ctx the parse tree
	 */
	enterUrl?: (ctx: UrlContext) => void;
	/**
	 * Exit a parse tree produced by `matchParser.url`.
	 * @param ctx the parse tree
	 */
	exitUrl?: (ctx: UrlContext) => void;

	/**
	 * Enter a parse tree produced by `matchParser.item`.
	 * @param ctx the parse tree
	 */
	enterItem?: (ctx: ItemContext) => void;
	/**
	 * Exit a parse tree produced by `matchParser.item`.
	 * @param ctx the parse tree
	 */
	exitItem?: (ctx: ItemContext) => void;

	/**
	 * Enter a parse tree produced by `matchParser.lead`.
	 * @param ctx the parse tree
	 */
	enterLead?: (ctx: LeadContext) => void;
	/**
	 * Exit a parse tree produced by `matchParser.lead`.
	 * @param ctx the parse tree
	 */
	exitLead?: (ctx: LeadContext) => void;

	/**
	 * Enter a parse tree produced by `matchParser.angleref`.
	 * @param ctx the parse tree
	 */
	enterAngleref?: (ctx: AnglerefContext) => void;
	/**
	 * Exit a parse tree produced by `matchParser.angleref`.
	 * @param ctx the parse tree
	 */
	exitAngleref?: (ctx: AnglerefContext) => void;

	/**
	 * Enter a parse tree produced by `matchParser.example`.
	 * @param ctx the parse tree
	 */
	enterExample?: (ctx: ExampleContext) => void;
	/**
	 * Exit a parse tree produced by `matchParser.example`.
	 * @param ctx the parse tree
	 */
	exitExample?: (ctx: ExampleContext) => void;

	/**
	 * Enter a parse tree produced by `matchParser.bracketed_text`.
	 * @param ctx the parse tree
	 */
	enterBracketed_text?: (ctx: Bracketed_textContext) => void;
	/**
	 * Exit a parse tree produced by `matchParser.bracketed_text`.
	 * @param ctx the parse tree
	 */
	exitBracketed_text?: (ctx: Bracketed_textContext) => void;

	/**
	 * Enter a parse tree produced by `matchParser.reference`.
	 * @param ctx the parse tree
	 */
	enterReference?: (ctx: ReferenceContext) => void;
	/**
	 * Exit a parse tree produced by `matchParser.reference`.
	 * @param ctx the parse tree
	 */
	exitReference?: (ctx: ReferenceContext) => void;

	/**
	 * Enter a parse tree produced by `matchParser.progress`.
	 * @param ctx the parse tree
	 */
	enterProgress?: (ctx: ProgressContext) => void;
	/**
	 * Exit a parse tree produced by `matchParser.progress`.
	 * @param ctx the parse tree
	 */
	exitProgress?: (ctx: ProgressContext) => void;

	/**
	 * Enter a parse tree produced by `matchParser.dateprop`.
	 * @param ctx the parse tree
	 */
	enterDateprop?: (ctx: DatepropContext) => void;
	/**
	 * Exit a parse tree produced by `matchParser.dateprop`.
	 * @param ctx the parse tree
	 */
	exitDateprop?: (ctx: DatepropContext) => void;

	/**
	 * Enter a parse tree produced by `matchParser.dateprop_chained`.
	 * @param ctx the parse tree
	 */
	enterDateprop_chained?: (ctx: Dateprop_chainedContext) => void;
	/**
	 * Exit a parse tree produced by `matchParser.dateprop_chained`.
	 * @param ctx the parse tree
	 */
	exitDateprop_chained?: (ctx: Dateprop_chainedContext) => void;

	/**
	 * Enter a parse tree produced by `matchParser.instruction`.
	 * @param ctx the parse tree
	 */
	enterInstruction?: (ctx: InstructionContext) => void;
	/**
	 * Exit a parse tree produced by `matchParser.instruction`.
	 * @param ctx the parse tree
	 */
	exitInstruction?: (ctx: InstructionContext) => void;

	/**
	 * Enter a parse tree produced by `matchParser.hint`.
	 * @param ctx the parse tree
	 */
	enterHint?: (ctx: HintContext) => void;
	/**
	 * Exit a parse tree produced by `matchParser.hint`.
	 * @param ctx the parse tree
	 */
	exitHint?: (ctx: HintContext) => void;

	/**
	 * Enter a parse tree produced by `matchParser.title`.
	 * @param ctx the parse tree
	 */
	enterTitle?: (ctx: TitleContext) => void;
	/**
	 * Exit a parse tree produced by `matchParser.title`.
	 * @param ctx the parse tree
	 */
	exitTitle?: (ctx: TitleContext) => void;

	/**
	 * Enter a parse tree produced by `matchParser.bool_label`.
	 * @param ctx the parse tree
	 */
	enterBool_label?: (ctx: Bool_labelContext) => void;
	/**
	 * Exit a parse tree produced by `matchParser.bool_label`.
	 * @param ctx the parse tree
	 */
	exitBool_label?: (ctx: Bool_labelContext) => void;

	/**
	 * Enter a parse tree produced by `matchParser.progress_points`.
	 * @param ctx the parse tree
	 */
	enterProgress_points?: (ctx: Progress_pointsContext) => void;
	/**
	 * Exit a parse tree produced by `matchParser.progress_points`.
	 * @param ctx the parse tree
	 */
	exitProgress_points?: (ctx: Progress_pointsContext) => void;

	/**
	 * Enter a parse tree produced by `matchParser.istracked`.
	 * @param ctx the parse tree
	 */
	enterIstracked?: (ctx: IstrackedContext) => void;
	/**
	 * Exit a parse tree produced by `matchParser.istracked`.
	 * @param ctx the parse tree
	 */
	exitIstracked?: (ctx: IstrackedContext) => void;

	/**
	 * Enter a parse tree produced by `matchParser.isinfoonly`.
	 * @param ctx the parse tree
	 */
	enterIsinfoonly?: (ctx: IsinfoonlyContext) => void;
	/**
	 * Exit a parse tree produced by `matchParser.isinfoonly`.
	 * @param ctx the parse tree
	 */
	exitIsinfoonly?: (ctx: IsinfoonlyContext) => void;

	/**
	 * Enter a parse tree produced by `matchParser.atdef`.
	 * @param ctx the parse tree
	 */
	enterAtdef?: (ctx: AtdefContext) => void;
	/**
	 * Exit a parse tree produced by `matchParser.atdef`.
	 * @param ctx the parse tree
	 */
	exitAtdef?: (ctx: AtdefContext) => void;

	/**
	 * Enter a parse tree produced by `matchParser.atdef_`.
	 * @param ctx the parse tree
	 */
	enterAtdef_?: (ctx: Atdef_Context) => void;
	/**
	 * Exit a parse tree produced by `matchParser.atdef_`.
	 * @param ctx the parse tree
	 */
	exitAtdef_?: (ctx: Atdef_Context) => void;

	/**
	 * Enter a parse tree produced by `matchParser.dollarans`.
	 * @param ctx the parse tree
	 */
	enterDollarans?: (ctx: DollaransContext) => void;
	/**
	 * Exit a parse tree produced by `matchParser.dollarans`.
	 * @param ctx the parse tree
	 */
	exitDollarans?: (ctx: DollaransContext) => void;

	/**
	 * Enter a parse tree produced by `matchParser.anchor`.
	 * @param ctx the parse tree
	 */
	enterAnchor?: (ctx: AnchorContext) => void;
	/**
	 * Exit a parse tree produced by `matchParser.anchor`.
	 * @param ctx the parse tree
	 */
	exitAnchor?: (ctx: AnchorContext) => void;

	/**
	 * Enter a parse tree produced by `matchParser.dcolon`.
	 * @param ctx the parse tree
	 */
	enterDcolon?: (ctx: DcolonContext) => void;
	/**
	 * Exit a parse tree produced by `matchParser.dcolon`.
	 * @param ctx the parse tree
	 */
	exitDcolon?: (ctx: DcolonContext) => void;

	/**
	 * Enter a parse tree produced by `matchParser.colcoltext`.
	 * @param ctx the parse tree
	 */
	enterColcoltext?: (ctx: ColcoltextContext) => void;
	/**
	 * Exit a parse tree produced by `matchParser.colcoltext`.
	 * @param ctx the parse tree
	 */
	exitColcoltext?: (ctx: ColcoltextContext) => void;

	/**
	 * Enter a parse tree produced by `matchParser.lines`.
	 * @param ctx the parse tree
	 */
	enterLines?: (ctx: LinesContext) => void;
	/**
	 * Exit a parse tree produced by `matchParser.lines`.
	 * @param ctx the parse tree
	 */
	exitLines?: (ctx: LinesContext) => void;

	/**
	 * Enter a parse tree produced by `matchParser.list_line`.
	 * @param ctx the parse tree
	 */
	enterList_line?: (ctx: List_lineContext) => void;
	/**
	 * Exit a parse tree produced by `matchParser.list_line`.
	 * @param ctx the parse tree
	 */
	exitList_line?: (ctx: List_lineContext) => void;

	/**
	 * Enter a parse tree produced by `matchParser.s_and_w`.
	 * @param ctx the parse tree
	 */
	enterS_and_w?: (ctx: S_and_wContext) => void;
	/**
	 * Exit a parse tree produced by `matchParser.s_and_w`.
	 * @param ctx the parse tree
	 */
	exitS_and_w?: (ctx: S_and_wContext) => void;

	/**
	 * Enter a parse tree produced by `matchParser.dclines`.
	 * @param ctx the parse tree
	 */
	enterDclines?: (ctx: DclinesContext) => void;
	/**
	 * Exit a parse tree produced by `matchParser.dclines`.
	 * @param ctx the parse tree
	 */
	exitDclines?: (ctx: DclinesContext) => void;

	/**
	 * Enter a parse tree produced by `matchParser.opdoll`.
	 * @param ctx the parse tree
	 */
	enterOpdoll?: (ctx: OpdollContext) => void;
	/**
	 * Exit a parse tree produced by `matchParser.opdoll`.
	 * @param ctx the parse tree
	 */
	exitOpdoll?: (ctx: OpdollContext) => void;

	/**
	 * Enter a parse tree produced by `matchParser.opu`.
	 * @param ctx the parse tree
	 */
	enterOpu?: (ctx: OpuContext) => void;
	/**
	 * Exit a parse tree produced by `matchParser.opu`.
	 * @param ctx the parse tree
	 */
	exitOpu?: (ctx: OpuContext) => void;

	/**
	 * Enter a parse tree produced by `matchParser.opb`.
	 * @param ctx the parse tree
	 */
	enterOpb?: (ctx: OpbContext) => void;
	/**
	 * Exit a parse tree produced by `matchParser.opb`.
	 * @param ctx the parse tree
	 */
	exitOpb?: (ctx: OpbContext) => void;

	/**
	 * Enter a parse tree produced by `matchParser.opq`.
	 * @param ctx the parse tree
	 */
	enterOpq?: (ctx: OpqContext) => void;
	/**
	 * Exit a parse tree produced by `matchParser.opq`.
	 * @param ctx the parse tree
	 */
	exitOpq?: (ctx: OpqContext) => void;

	/**
	 * Enter a parse tree produced by `matchParser.opa`.
	 * @param ctx the parse tree
	 */
	enterOpa?: (ctx: OpaContext) => void;
	/**
	 * Exit a parse tree produced by `matchParser.opa`.
	 * @param ctx the parse tree
	 */
	exitOpa?: (ctx: OpaContext) => void;

	/**
	 * Enter a parse tree produced by `matchParser.opp`.
	 * @param ctx the parse tree
	 */
	enterOpp?: (ctx: OppContext) => void;
	/**
	 * Exit a parse tree produced by `matchParser.opp`.
	 * @param ctx the parse tree
	 */
	exitOpp?: (ctx: OppContext) => void;

	/**
	 * Enter a parse tree produced by `matchParser.opm`.
	 * @param ctx the parse tree
	 */
	enterOpm?: (ctx: OpmContext) => void;
	/**
	 * Exit a parse tree produced by `matchParser.opm`.
	 * @param ctx the parse tree
	 */
	exitOpm?: (ctx: OpmContext) => void;

	/**
	 * Enter a parse tree produced by `matchParser.ops`.
	 * @param ctx the parse tree
	 */
	enterOps?: (ctx: OpsContext) => void;
	/**
	 * Exit a parse tree produced by `matchParser.ops`.
	 * @param ctx the parse tree
	 */
	exitOps?: (ctx: OpsContext) => void;

	/**
	 * Enter a parse tree produced by `matchParser.opr`.
	 * @param ctx the parse tree
	 */
	enterOpr?: (ctx: OprContext) => void;
	/**
	 * Exit a parse tree produced by `matchParser.opr`.
	 * @param ctx the parse tree
	 */
	exitOpr?: (ctx: OprContext) => void;

	/**
	 * Enter a parse tree produced by `matchParser.opc`.
	 * @param ctx the parse tree
	 */
	enterOpc?: (ctx: OpcContext) => void;
	/**
	 * Exit a parse tree produced by `matchParser.opc`.
	 * @param ctx the parse tree
	 */
	exitOpc?: (ctx: OpcContext) => void;

	/**
	 * Enter a parse tree produced by `matchParser.clnsp`.
	 * @param ctx the parse tree
	 */
	enterClnsp?: (ctx: ClnspContext) => void;
	/**
	 * Exit a parse tree produced by `matchParser.clnsp`.
	 * @param ctx the parse tree
	 */
	exitClnsp?: (ctx: ClnspContext) => void;

	/**
	 * Enter a parse tree produced by `matchParser.or_`.
	 * @param ctx the parse tree
	 */
	enterOr_?: (ctx: Or_Context) => void;
	/**
	 * Exit a parse tree produced by `matchParser.or_`.
	 * @param ctx the parse tree
	 */
	exitOr_?: (ctx: Or_Context) => void;

	/**
	 * Enter a parse tree produced by `matchParser.words`.
	 * @param ctx the parse tree
	 */
	enterWords?: (ctx: WordsContext) => void;
	/**
	 * Exit a parse tree produced by `matchParser.words`.
	 * @param ctx the parse tree
	 */
	exitWords?: (ctx: WordsContext) => void;

	/**
	 * Enter a parse tree produced by `matchParser.sp`.
	 * @param ctx the parse tree
	 */
	enterSp?: (ctx: SpContext) => void;
	/**
	 * Exit a parse tree produced by `matchParser.sp`.
	 * @param ctx the parse tree
	 */
	exitSp?: (ctx: SpContext) => void;
}

