// Generated from ./Chat//chatParser.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

import { BitmarkContext } from "./chatParser";
import { Bitmark_Context } from "./chatParser";
import { ChatContext } from "./chatParser";
import { ConversationContext } from "./chatParser";
import { Conversation_left_1Context } from "./chatParser";
import { Conversation_right_1Context } from "./chatParser";
import { Conversation_right_1_thoughtContext } from "./chatParser";
import { Conversation_right_1_screamContext } from "./chatParser";
import { Conversation_left_1_thoughtContext } from "./chatParser";
import { Conversation_left_1_screamContext } from "./chatParser";
import { InitiatorContext } from "./chatParser";
import { PartnerContext } from "./chatParser";
import { Partner1Context } from "./chatParser";
import { Partner1_nameContext } from "./chatParser";
import { Name_textContext } from "./chatParser";
import { Name_altContext } from "./chatParser";
import { Chat_initiatorContext } from "./chatParser";
import { Chat_partnerContext } from "./chatParser";
import { Sspl_chat_partnerContext } from "./chatParser";
import { BitElemContext } from "./chatParser";
import { ResourceContext } from "./chatParser";
import { GapContext } from "./chatParser";
import { Single_gapContext } from "./chatParser";
import { DcolonContext } from "./chatParser";
import { AtpointContext } from "./chatParser";
import { FormatContext } from "./chatParser";
import { Resource_formatContext } from "./chatParser";
import { Resource_format_extraContext } from "./chatParser";
import { Format2Context } from "./chatParser";
import { Image_formatContext } from "./chatParser";
import { Video_formatContext } from "./chatParser";
import { Article_formatContext } from "./chatParser";
import { Document_formatContext } from "./chatParser";
import { App_formatContext } from "./chatParser";
import { Website_formatContext } from "./chatParser";
import { Stillimagefilm_formatContext } from "./chatParser";
import { Op_article_formatContext } from "./chatParser";
import { Op_document_formatContext } from "./chatParser";
import { Op_app_formatContext } from "./chatParser";
import { Op_website_formatContext } from "./chatParser";
import { Op_video_formatContext } from "./chatParser";
import { Op_stillimagefilm_formatContext } from "./chatParser";
import { ArticlebitContext } from "./chatParser";
import { DocumentbitContext } from "./chatParser";
import { WebsitebitContext } from "./chatParser";
import { AppbitContext } from "./chatParser";
import { StillimagefilmbitContext } from "./chatParser";
import { Stillimg_oneContext } from "./chatParser";
import { VideobitContext } from "./chatParser";
import { Video_oneContext } from "./chatParser";
import { ImagebitContext } from "./chatParser";
import { Image_oneContext } from "./chatParser";
import { Op_image_formatContext } from "./chatParser";
import { Image_chainedContext } from "./chatParser";
import { Image_chained4matchContext } from "./chatParser";
import { AudiobitContext } from "./chatParser";
import { Audio_oneContext } from "./chatParser";
import { Audio_formatContext } from "./chatParser";
import { Op_audio_formatContext } from "./chatParser";
import { Resource_chainedContext } from "./chatParser";
import { TelephoneContext } from "./chatParser";
import { UrlContext } from "./chatParser";
import { ItemContext } from "./chatParser";
import { LeadContext } from "./chatParser";
import { AnglerefContext } from "./chatParser";
import { ExampleContext } from "./chatParser";
import { Bracketed_textContext } from "./chatParser";
import { ReferenceContext } from "./chatParser";
import { ProgressContext } from "./chatParser";
import { DatepropContext } from "./chatParser";
import { Dateprop_chainedContext } from "./chatParser";
import { InstructionContext } from "./chatParser";
import { HintContext } from "./chatParser";
import { TitleContext } from "./chatParser";
import { Bool_labelContext } from "./chatParser";
import { Progress_pointsContext } from "./chatParser";
import { IstrackedContext } from "./chatParser";
import { IsinfoonlyContext } from "./chatParser";
import { AtdefContext } from "./chatParser";
import { Atdef_Context } from "./chatParser";
import { DollaransContext } from "./chatParser";
import { AnchorContext } from "./chatParser";
import { LinesContext } from "./chatParser";
import { S_and_wContext } from "./chatParser";
import { ClnspContext } from "./chatParser";
import { SsplContext } from "./chatParser";
import { WordsContext } from "./chatParser";
import { SpContext } from "./chatParser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `chatParser`.
 */
export interface chatParserListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `chatParser.bitmark`.
	 * @param ctx the parse tree
	 */
	enterBitmark?: (ctx: BitmarkContext) => void;
	/**
	 * Exit a parse tree produced by `chatParser.bitmark`.
	 * @param ctx the parse tree
	 */
	exitBitmark?: (ctx: BitmarkContext) => void;

	/**
	 * Enter a parse tree produced by `chatParser.bitmark_`.
	 * @param ctx the parse tree
	 */
	enterBitmark_?: (ctx: Bitmark_Context) => void;
	/**
	 * Exit a parse tree produced by `chatParser.bitmark_`.
	 * @param ctx the parse tree
	 */
	exitBitmark_?: (ctx: Bitmark_Context) => void;

	/**
	 * Enter a parse tree produced by `chatParser.chat`.
	 * @param ctx the parse tree
	 */
	enterChat?: (ctx: ChatContext) => void;
	/**
	 * Exit a parse tree produced by `chatParser.chat`.
	 * @param ctx the parse tree
	 */
	exitChat?: (ctx: ChatContext) => void;

	/**
	 * Enter a parse tree produced by `chatParser.conversation`.
	 * @param ctx the parse tree
	 */
	enterConversation?: (ctx: ConversationContext) => void;
	/**
	 * Exit a parse tree produced by `chatParser.conversation`.
	 * @param ctx the parse tree
	 */
	exitConversation?: (ctx: ConversationContext) => void;

	/**
	 * Enter a parse tree produced by `chatParser.conversation_left_1`.
	 * @param ctx the parse tree
	 */
	enterConversation_left_1?: (ctx: Conversation_left_1Context) => void;
	/**
	 * Exit a parse tree produced by `chatParser.conversation_left_1`.
	 * @param ctx the parse tree
	 */
	exitConversation_left_1?: (ctx: Conversation_left_1Context) => void;

	/**
	 * Enter a parse tree produced by `chatParser.conversation_right_1`.
	 * @param ctx the parse tree
	 */
	enterConversation_right_1?: (ctx: Conversation_right_1Context) => void;
	/**
	 * Exit a parse tree produced by `chatParser.conversation_right_1`.
	 * @param ctx the parse tree
	 */
	exitConversation_right_1?: (ctx: Conversation_right_1Context) => void;

	/**
	 * Enter a parse tree produced by `chatParser.conversation_right_1_thought`.
	 * @param ctx the parse tree
	 */
	enterConversation_right_1_thought?: (ctx: Conversation_right_1_thoughtContext) => void;
	/**
	 * Exit a parse tree produced by `chatParser.conversation_right_1_thought`.
	 * @param ctx the parse tree
	 */
	exitConversation_right_1_thought?: (ctx: Conversation_right_1_thoughtContext) => void;

	/**
	 * Enter a parse tree produced by `chatParser.conversation_right_1_scream`.
	 * @param ctx the parse tree
	 */
	enterConversation_right_1_scream?: (ctx: Conversation_right_1_screamContext) => void;
	/**
	 * Exit a parse tree produced by `chatParser.conversation_right_1_scream`.
	 * @param ctx the parse tree
	 */
	exitConversation_right_1_scream?: (ctx: Conversation_right_1_screamContext) => void;

	/**
	 * Enter a parse tree produced by `chatParser.conversation_left_1_thought`.
	 * @param ctx the parse tree
	 */
	enterConversation_left_1_thought?: (ctx: Conversation_left_1_thoughtContext) => void;
	/**
	 * Exit a parse tree produced by `chatParser.conversation_left_1_thought`.
	 * @param ctx the parse tree
	 */
	exitConversation_left_1_thought?: (ctx: Conversation_left_1_thoughtContext) => void;

	/**
	 * Enter a parse tree produced by `chatParser.conversation_left_1_scream`.
	 * @param ctx the parse tree
	 */
	enterConversation_left_1_scream?: (ctx: Conversation_left_1_screamContext) => void;
	/**
	 * Exit a parse tree produced by `chatParser.conversation_left_1_scream`.
	 * @param ctx the parse tree
	 */
	exitConversation_left_1_scream?: (ctx: Conversation_left_1_screamContext) => void;

	/**
	 * Enter a parse tree produced by `chatParser.initiator`.
	 * @param ctx the parse tree
	 */
	enterInitiator?: (ctx: InitiatorContext) => void;
	/**
	 * Exit a parse tree produced by `chatParser.initiator`.
	 * @param ctx the parse tree
	 */
	exitInitiator?: (ctx: InitiatorContext) => void;

	/**
	 * Enter a parse tree produced by `chatParser.partner`.
	 * @param ctx the parse tree
	 */
	enterPartner?: (ctx: PartnerContext) => void;
	/**
	 * Exit a parse tree produced by `chatParser.partner`.
	 * @param ctx the parse tree
	 */
	exitPartner?: (ctx: PartnerContext) => void;

	/**
	 * Enter a parse tree produced by `chatParser.partner1`.
	 * @param ctx the parse tree
	 */
	enterPartner1?: (ctx: Partner1Context) => void;
	/**
	 * Exit a parse tree produced by `chatParser.partner1`.
	 * @param ctx the parse tree
	 */
	exitPartner1?: (ctx: Partner1Context) => void;

	/**
	 * Enter a parse tree produced by `chatParser.partner1_name`.
	 * @param ctx the parse tree
	 */
	enterPartner1_name?: (ctx: Partner1_nameContext) => void;
	/**
	 * Exit a parse tree produced by `chatParser.partner1_name`.
	 * @param ctx the parse tree
	 */
	exitPartner1_name?: (ctx: Partner1_nameContext) => void;

	/**
	 * Enter a parse tree produced by `chatParser.name_text`.
	 * @param ctx the parse tree
	 */
	enterName_text?: (ctx: Name_textContext) => void;
	/**
	 * Exit a parse tree produced by `chatParser.name_text`.
	 * @param ctx the parse tree
	 */
	exitName_text?: (ctx: Name_textContext) => void;

	/**
	 * Enter a parse tree produced by `chatParser.name_alt`.
	 * @param ctx the parse tree
	 */
	enterName_alt?: (ctx: Name_altContext) => void;
	/**
	 * Exit a parse tree produced by `chatParser.name_alt`.
	 * @param ctx the parse tree
	 */
	exitName_alt?: (ctx: Name_altContext) => void;

	/**
	 * Enter a parse tree produced by `chatParser.chat_initiator`.
	 * @param ctx the parse tree
	 */
	enterChat_initiator?: (ctx: Chat_initiatorContext) => void;
	/**
	 * Exit a parse tree produced by `chatParser.chat_initiator`.
	 * @param ctx the parse tree
	 */
	exitChat_initiator?: (ctx: Chat_initiatorContext) => void;

	/**
	 * Enter a parse tree produced by `chatParser.chat_partner`.
	 * @param ctx the parse tree
	 */
	enterChat_partner?: (ctx: Chat_partnerContext) => void;
	/**
	 * Exit a parse tree produced by `chatParser.chat_partner`.
	 * @param ctx the parse tree
	 */
	exitChat_partner?: (ctx: Chat_partnerContext) => void;

	/**
	 * Enter a parse tree produced by `chatParser.sspl_chat_partner`.
	 * @param ctx the parse tree
	 */
	enterSspl_chat_partner?: (ctx: Sspl_chat_partnerContext) => void;
	/**
	 * Exit a parse tree produced by `chatParser.sspl_chat_partner`.
	 * @param ctx the parse tree
	 */
	exitSspl_chat_partner?: (ctx: Sspl_chat_partnerContext) => void;

	/**
	 * Enter a parse tree produced by `chatParser.bitElem`.
	 * @param ctx the parse tree
	 */
	enterBitElem?: (ctx: BitElemContext) => void;
	/**
	 * Exit a parse tree produced by `chatParser.bitElem`.
	 * @param ctx the parse tree
	 */
	exitBitElem?: (ctx: BitElemContext) => void;

	/**
	 * Enter a parse tree produced by `chatParser.resource`.
	 * @param ctx the parse tree
	 */
	enterResource?: (ctx: ResourceContext) => void;
	/**
	 * Exit a parse tree produced by `chatParser.resource`.
	 * @param ctx the parse tree
	 */
	exitResource?: (ctx: ResourceContext) => void;

	/**
	 * Enter a parse tree produced by `chatParser.gap`.
	 * @param ctx the parse tree
	 */
	enterGap?: (ctx: GapContext) => void;
	/**
	 * Exit a parse tree produced by `chatParser.gap`.
	 * @param ctx the parse tree
	 */
	exitGap?: (ctx: GapContext) => void;

	/**
	 * Enter a parse tree produced by `chatParser.single_gap`.
	 * @param ctx the parse tree
	 */
	enterSingle_gap?: (ctx: Single_gapContext) => void;
	/**
	 * Exit a parse tree produced by `chatParser.single_gap`.
	 * @param ctx the parse tree
	 */
	exitSingle_gap?: (ctx: Single_gapContext) => void;

	/**
	 * Enter a parse tree produced by `chatParser.dcolon`.
	 * @param ctx the parse tree
	 */
	enterDcolon?: (ctx: DcolonContext) => void;
	/**
	 * Exit a parse tree produced by `chatParser.dcolon`.
	 * @param ctx the parse tree
	 */
	exitDcolon?: (ctx: DcolonContext) => void;

	/**
	 * Enter a parse tree produced by `chatParser.atpoint`.
	 * @param ctx the parse tree
	 */
	enterAtpoint?: (ctx: AtpointContext) => void;
	/**
	 * Exit a parse tree produced by `chatParser.atpoint`.
	 * @param ctx the parse tree
	 */
	exitAtpoint?: (ctx: AtpointContext) => void;

	/**
	 * Enter a parse tree produced by `chatParser.format`.
	 * @param ctx the parse tree
	 */
	enterFormat?: (ctx: FormatContext) => void;
	/**
	 * Exit a parse tree produced by `chatParser.format`.
	 * @param ctx the parse tree
	 */
	exitFormat?: (ctx: FormatContext) => void;

	/**
	 * Enter a parse tree produced by `chatParser.resource_format`.
	 * @param ctx the parse tree
	 */
	enterResource_format?: (ctx: Resource_formatContext) => void;
	/**
	 * Exit a parse tree produced by `chatParser.resource_format`.
	 * @param ctx the parse tree
	 */
	exitResource_format?: (ctx: Resource_formatContext) => void;

	/**
	 * Enter a parse tree produced by `chatParser.resource_format_extra`.
	 * @param ctx the parse tree
	 */
	enterResource_format_extra?: (ctx: Resource_format_extraContext) => void;
	/**
	 * Exit a parse tree produced by `chatParser.resource_format_extra`.
	 * @param ctx the parse tree
	 */
	exitResource_format_extra?: (ctx: Resource_format_extraContext) => void;

	/**
	 * Enter a parse tree produced by `chatParser.format2`.
	 * @param ctx the parse tree
	 */
	enterFormat2?: (ctx: Format2Context) => void;
	/**
	 * Exit a parse tree produced by `chatParser.format2`.
	 * @param ctx the parse tree
	 */
	exitFormat2?: (ctx: Format2Context) => void;

	/**
	 * Enter a parse tree produced by `chatParser.image_format`.
	 * @param ctx the parse tree
	 */
	enterImage_format?: (ctx: Image_formatContext) => void;
	/**
	 * Exit a parse tree produced by `chatParser.image_format`.
	 * @param ctx the parse tree
	 */
	exitImage_format?: (ctx: Image_formatContext) => void;

	/**
	 * Enter a parse tree produced by `chatParser.video_format`.
	 * @param ctx the parse tree
	 */
	enterVideo_format?: (ctx: Video_formatContext) => void;
	/**
	 * Exit a parse tree produced by `chatParser.video_format`.
	 * @param ctx the parse tree
	 */
	exitVideo_format?: (ctx: Video_formatContext) => void;

	/**
	 * Enter a parse tree produced by `chatParser.article_format`.
	 * @param ctx the parse tree
	 */
	enterArticle_format?: (ctx: Article_formatContext) => void;
	/**
	 * Exit a parse tree produced by `chatParser.article_format`.
	 * @param ctx the parse tree
	 */
	exitArticle_format?: (ctx: Article_formatContext) => void;

	/**
	 * Enter a parse tree produced by `chatParser.document_format`.
	 * @param ctx the parse tree
	 */
	enterDocument_format?: (ctx: Document_formatContext) => void;
	/**
	 * Exit a parse tree produced by `chatParser.document_format`.
	 * @param ctx the parse tree
	 */
	exitDocument_format?: (ctx: Document_formatContext) => void;

	/**
	 * Enter a parse tree produced by `chatParser.app_format`.
	 * @param ctx the parse tree
	 */
	enterApp_format?: (ctx: App_formatContext) => void;
	/**
	 * Exit a parse tree produced by `chatParser.app_format`.
	 * @param ctx the parse tree
	 */
	exitApp_format?: (ctx: App_formatContext) => void;

	/**
	 * Enter a parse tree produced by `chatParser.website_format`.
	 * @param ctx the parse tree
	 */
	enterWebsite_format?: (ctx: Website_formatContext) => void;
	/**
	 * Exit a parse tree produced by `chatParser.website_format`.
	 * @param ctx the parse tree
	 */
	exitWebsite_format?: (ctx: Website_formatContext) => void;

	/**
	 * Enter a parse tree produced by `chatParser.stillimagefilm_format`.
	 * @param ctx the parse tree
	 */
	enterStillimagefilm_format?: (ctx: Stillimagefilm_formatContext) => void;
	/**
	 * Exit a parse tree produced by `chatParser.stillimagefilm_format`.
	 * @param ctx the parse tree
	 */
	exitStillimagefilm_format?: (ctx: Stillimagefilm_formatContext) => void;

	/**
	 * Enter a parse tree produced by `chatParser.op_article_format`.
	 * @param ctx the parse tree
	 */
	enterOp_article_format?: (ctx: Op_article_formatContext) => void;
	/**
	 * Exit a parse tree produced by `chatParser.op_article_format`.
	 * @param ctx the parse tree
	 */
	exitOp_article_format?: (ctx: Op_article_formatContext) => void;

	/**
	 * Enter a parse tree produced by `chatParser.op_document_format`.
	 * @param ctx the parse tree
	 */
	enterOp_document_format?: (ctx: Op_document_formatContext) => void;
	/**
	 * Exit a parse tree produced by `chatParser.op_document_format`.
	 * @param ctx the parse tree
	 */
	exitOp_document_format?: (ctx: Op_document_formatContext) => void;

	/**
	 * Enter a parse tree produced by `chatParser.op_app_format`.
	 * @param ctx the parse tree
	 */
	enterOp_app_format?: (ctx: Op_app_formatContext) => void;
	/**
	 * Exit a parse tree produced by `chatParser.op_app_format`.
	 * @param ctx the parse tree
	 */
	exitOp_app_format?: (ctx: Op_app_formatContext) => void;

	/**
	 * Enter a parse tree produced by `chatParser.op_website_format`.
	 * @param ctx the parse tree
	 */
	enterOp_website_format?: (ctx: Op_website_formatContext) => void;
	/**
	 * Exit a parse tree produced by `chatParser.op_website_format`.
	 * @param ctx the parse tree
	 */
	exitOp_website_format?: (ctx: Op_website_formatContext) => void;

	/**
	 * Enter a parse tree produced by `chatParser.op_video_format`.
	 * @param ctx the parse tree
	 */
	enterOp_video_format?: (ctx: Op_video_formatContext) => void;
	/**
	 * Exit a parse tree produced by `chatParser.op_video_format`.
	 * @param ctx the parse tree
	 */
	exitOp_video_format?: (ctx: Op_video_formatContext) => void;

	/**
	 * Enter a parse tree produced by `chatParser.op_stillimagefilm_format`.
	 * @param ctx the parse tree
	 */
	enterOp_stillimagefilm_format?: (ctx: Op_stillimagefilm_formatContext) => void;
	/**
	 * Exit a parse tree produced by `chatParser.op_stillimagefilm_format`.
	 * @param ctx the parse tree
	 */
	exitOp_stillimagefilm_format?: (ctx: Op_stillimagefilm_formatContext) => void;

	/**
	 * Enter a parse tree produced by `chatParser.articlebit`.
	 * @param ctx the parse tree
	 */
	enterArticlebit?: (ctx: ArticlebitContext) => void;
	/**
	 * Exit a parse tree produced by `chatParser.articlebit`.
	 * @param ctx the parse tree
	 */
	exitArticlebit?: (ctx: ArticlebitContext) => void;

	/**
	 * Enter a parse tree produced by `chatParser.documentbit`.
	 * @param ctx the parse tree
	 */
	enterDocumentbit?: (ctx: DocumentbitContext) => void;
	/**
	 * Exit a parse tree produced by `chatParser.documentbit`.
	 * @param ctx the parse tree
	 */
	exitDocumentbit?: (ctx: DocumentbitContext) => void;

	/**
	 * Enter a parse tree produced by `chatParser.websitebit`.
	 * @param ctx the parse tree
	 */
	enterWebsitebit?: (ctx: WebsitebitContext) => void;
	/**
	 * Exit a parse tree produced by `chatParser.websitebit`.
	 * @param ctx the parse tree
	 */
	exitWebsitebit?: (ctx: WebsitebitContext) => void;

	/**
	 * Enter a parse tree produced by `chatParser.appbit`.
	 * @param ctx the parse tree
	 */
	enterAppbit?: (ctx: AppbitContext) => void;
	/**
	 * Exit a parse tree produced by `chatParser.appbit`.
	 * @param ctx the parse tree
	 */
	exitAppbit?: (ctx: AppbitContext) => void;

	/**
	 * Enter a parse tree produced by `chatParser.stillimagefilmbit`.
	 * @param ctx the parse tree
	 */
	enterStillimagefilmbit?: (ctx: StillimagefilmbitContext) => void;
	/**
	 * Exit a parse tree produced by `chatParser.stillimagefilmbit`.
	 * @param ctx the parse tree
	 */
	exitStillimagefilmbit?: (ctx: StillimagefilmbitContext) => void;

	/**
	 * Enter a parse tree produced by `chatParser.stillimg_one`.
	 * @param ctx the parse tree
	 */
	enterStillimg_one?: (ctx: Stillimg_oneContext) => void;
	/**
	 * Exit a parse tree produced by `chatParser.stillimg_one`.
	 * @param ctx the parse tree
	 */
	exitStillimg_one?: (ctx: Stillimg_oneContext) => void;

	/**
	 * Enter a parse tree produced by `chatParser.videobit`.
	 * @param ctx the parse tree
	 */
	enterVideobit?: (ctx: VideobitContext) => void;
	/**
	 * Exit a parse tree produced by `chatParser.videobit`.
	 * @param ctx the parse tree
	 */
	exitVideobit?: (ctx: VideobitContext) => void;

	/**
	 * Enter a parse tree produced by `chatParser.video_one`.
	 * @param ctx the parse tree
	 */
	enterVideo_one?: (ctx: Video_oneContext) => void;
	/**
	 * Exit a parse tree produced by `chatParser.video_one`.
	 * @param ctx the parse tree
	 */
	exitVideo_one?: (ctx: Video_oneContext) => void;

	/**
	 * Enter a parse tree produced by `chatParser.imagebit`.
	 * @param ctx the parse tree
	 */
	enterImagebit?: (ctx: ImagebitContext) => void;
	/**
	 * Exit a parse tree produced by `chatParser.imagebit`.
	 * @param ctx the parse tree
	 */
	exitImagebit?: (ctx: ImagebitContext) => void;

	/**
	 * Enter a parse tree produced by `chatParser.image_one`.
	 * @param ctx the parse tree
	 */
	enterImage_one?: (ctx: Image_oneContext) => void;
	/**
	 * Exit a parse tree produced by `chatParser.image_one`.
	 * @param ctx the parse tree
	 */
	exitImage_one?: (ctx: Image_oneContext) => void;

	/**
	 * Enter a parse tree produced by `chatParser.op_image_format`.
	 * @param ctx the parse tree
	 */
	enterOp_image_format?: (ctx: Op_image_formatContext) => void;
	/**
	 * Exit a parse tree produced by `chatParser.op_image_format`.
	 * @param ctx the parse tree
	 */
	exitOp_image_format?: (ctx: Op_image_formatContext) => void;

	/**
	 * Enter a parse tree produced by `chatParser.image_chained`.
	 * @param ctx the parse tree
	 */
	enterImage_chained?: (ctx: Image_chainedContext) => void;
	/**
	 * Exit a parse tree produced by `chatParser.image_chained`.
	 * @param ctx the parse tree
	 */
	exitImage_chained?: (ctx: Image_chainedContext) => void;

	/**
	 * Enter a parse tree produced by `chatParser.image_chained4match`.
	 * @param ctx the parse tree
	 */
	enterImage_chained4match?: (ctx: Image_chained4matchContext) => void;
	/**
	 * Exit a parse tree produced by `chatParser.image_chained4match`.
	 * @param ctx the parse tree
	 */
	exitImage_chained4match?: (ctx: Image_chained4matchContext) => void;

	/**
	 * Enter a parse tree produced by `chatParser.audiobit`.
	 * @param ctx the parse tree
	 */
	enterAudiobit?: (ctx: AudiobitContext) => void;
	/**
	 * Exit a parse tree produced by `chatParser.audiobit`.
	 * @param ctx the parse tree
	 */
	exitAudiobit?: (ctx: AudiobitContext) => void;

	/**
	 * Enter a parse tree produced by `chatParser.audio_one`.
	 * @param ctx the parse tree
	 */
	enterAudio_one?: (ctx: Audio_oneContext) => void;
	/**
	 * Exit a parse tree produced by `chatParser.audio_one`.
	 * @param ctx the parse tree
	 */
	exitAudio_one?: (ctx: Audio_oneContext) => void;

	/**
	 * Enter a parse tree produced by `chatParser.audio_format`.
	 * @param ctx the parse tree
	 */
	enterAudio_format?: (ctx: Audio_formatContext) => void;
	/**
	 * Exit a parse tree produced by `chatParser.audio_format`.
	 * @param ctx the parse tree
	 */
	exitAudio_format?: (ctx: Audio_formatContext) => void;

	/**
	 * Enter a parse tree produced by `chatParser.op_audio_format`.
	 * @param ctx the parse tree
	 */
	enterOp_audio_format?: (ctx: Op_audio_formatContext) => void;
	/**
	 * Exit a parse tree produced by `chatParser.op_audio_format`.
	 * @param ctx the parse tree
	 */
	exitOp_audio_format?: (ctx: Op_audio_formatContext) => void;

	/**
	 * Enter a parse tree produced by `chatParser.resource_chained`.
	 * @param ctx the parse tree
	 */
	enterResource_chained?: (ctx: Resource_chainedContext) => void;
	/**
	 * Exit a parse tree produced by `chatParser.resource_chained`.
	 * @param ctx the parse tree
	 */
	exitResource_chained?: (ctx: Resource_chainedContext) => void;

	/**
	 * Enter a parse tree produced by `chatParser.telephone`.
	 * @param ctx the parse tree
	 */
	enterTelephone?: (ctx: TelephoneContext) => void;
	/**
	 * Exit a parse tree produced by `chatParser.telephone`.
	 * @param ctx the parse tree
	 */
	exitTelephone?: (ctx: TelephoneContext) => void;

	/**
	 * Enter a parse tree produced by `chatParser.url`.
	 * @param ctx the parse tree
	 */
	enterUrl?: (ctx: UrlContext) => void;
	/**
	 * Exit a parse tree produced by `chatParser.url`.
	 * @param ctx the parse tree
	 */
	exitUrl?: (ctx: UrlContext) => void;

	/**
	 * Enter a parse tree produced by `chatParser.item`.
	 * @param ctx the parse tree
	 */
	enterItem?: (ctx: ItemContext) => void;
	/**
	 * Exit a parse tree produced by `chatParser.item`.
	 * @param ctx the parse tree
	 */
	exitItem?: (ctx: ItemContext) => void;

	/**
	 * Enter a parse tree produced by `chatParser.lead`.
	 * @param ctx the parse tree
	 */
	enterLead?: (ctx: LeadContext) => void;
	/**
	 * Exit a parse tree produced by `chatParser.lead`.
	 * @param ctx the parse tree
	 */
	exitLead?: (ctx: LeadContext) => void;

	/**
	 * Enter a parse tree produced by `chatParser.angleref`.
	 * @param ctx the parse tree
	 */
	enterAngleref?: (ctx: AnglerefContext) => void;
	/**
	 * Exit a parse tree produced by `chatParser.angleref`.
	 * @param ctx the parse tree
	 */
	exitAngleref?: (ctx: AnglerefContext) => void;

	/**
	 * Enter a parse tree produced by `chatParser.example`.
	 * @param ctx the parse tree
	 */
	enterExample?: (ctx: ExampleContext) => void;
	/**
	 * Exit a parse tree produced by `chatParser.example`.
	 * @param ctx the parse tree
	 */
	exitExample?: (ctx: ExampleContext) => void;

	/**
	 * Enter a parse tree produced by `chatParser.bracketed_text`.
	 * @param ctx the parse tree
	 */
	enterBracketed_text?: (ctx: Bracketed_textContext) => void;
	/**
	 * Exit a parse tree produced by `chatParser.bracketed_text`.
	 * @param ctx the parse tree
	 */
	exitBracketed_text?: (ctx: Bracketed_textContext) => void;

	/**
	 * Enter a parse tree produced by `chatParser.reference`.
	 * @param ctx the parse tree
	 */
	enterReference?: (ctx: ReferenceContext) => void;
	/**
	 * Exit a parse tree produced by `chatParser.reference`.
	 * @param ctx the parse tree
	 */
	exitReference?: (ctx: ReferenceContext) => void;

	/**
	 * Enter a parse tree produced by `chatParser.progress`.
	 * @param ctx the parse tree
	 */
	enterProgress?: (ctx: ProgressContext) => void;
	/**
	 * Exit a parse tree produced by `chatParser.progress`.
	 * @param ctx the parse tree
	 */
	exitProgress?: (ctx: ProgressContext) => void;

	/**
	 * Enter a parse tree produced by `chatParser.dateprop`.
	 * @param ctx the parse tree
	 */
	enterDateprop?: (ctx: DatepropContext) => void;
	/**
	 * Exit a parse tree produced by `chatParser.dateprop`.
	 * @param ctx the parse tree
	 */
	exitDateprop?: (ctx: DatepropContext) => void;

	/**
	 * Enter a parse tree produced by `chatParser.dateprop_chained`.
	 * @param ctx the parse tree
	 */
	enterDateprop_chained?: (ctx: Dateprop_chainedContext) => void;
	/**
	 * Exit a parse tree produced by `chatParser.dateprop_chained`.
	 * @param ctx the parse tree
	 */
	exitDateprop_chained?: (ctx: Dateprop_chainedContext) => void;

	/**
	 * Enter a parse tree produced by `chatParser.instruction`.
	 * @param ctx the parse tree
	 */
	enterInstruction?: (ctx: InstructionContext) => void;
	/**
	 * Exit a parse tree produced by `chatParser.instruction`.
	 * @param ctx the parse tree
	 */
	exitInstruction?: (ctx: InstructionContext) => void;

	/**
	 * Enter a parse tree produced by `chatParser.hint`.
	 * @param ctx the parse tree
	 */
	enterHint?: (ctx: HintContext) => void;
	/**
	 * Exit a parse tree produced by `chatParser.hint`.
	 * @param ctx the parse tree
	 */
	exitHint?: (ctx: HintContext) => void;

	/**
	 * Enter a parse tree produced by `chatParser.title`.
	 * @param ctx the parse tree
	 */
	enterTitle?: (ctx: TitleContext) => void;
	/**
	 * Exit a parse tree produced by `chatParser.title`.
	 * @param ctx the parse tree
	 */
	exitTitle?: (ctx: TitleContext) => void;

	/**
	 * Enter a parse tree produced by `chatParser.bool_label`.
	 * @param ctx the parse tree
	 */
	enterBool_label?: (ctx: Bool_labelContext) => void;
	/**
	 * Exit a parse tree produced by `chatParser.bool_label`.
	 * @param ctx the parse tree
	 */
	exitBool_label?: (ctx: Bool_labelContext) => void;

	/**
	 * Enter a parse tree produced by `chatParser.progress_points`.
	 * @param ctx the parse tree
	 */
	enterProgress_points?: (ctx: Progress_pointsContext) => void;
	/**
	 * Exit a parse tree produced by `chatParser.progress_points`.
	 * @param ctx the parse tree
	 */
	exitProgress_points?: (ctx: Progress_pointsContext) => void;

	/**
	 * Enter a parse tree produced by `chatParser.istracked`.
	 * @param ctx the parse tree
	 */
	enterIstracked?: (ctx: IstrackedContext) => void;
	/**
	 * Exit a parse tree produced by `chatParser.istracked`.
	 * @param ctx the parse tree
	 */
	exitIstracked?: (ctx: IstrackedContext) => void;

	/**
	 * Enter a parse tree produced by `chatParser.isinfoonly`.
	 * @param ctx the parse tree
	 */
	enterIsinfoonly?: (ctx: IsinfoonlyContext) => void;
	/**
	 * Exit a parse tree produced by `chatParser.isinfoonly`.
	 * @param ctx the parse tree
	 */
	exitIsinfoonly?: (ctx: IsinfoonlyContext) => void;

	/**
	 * Enter a parse tree produced by `chatParser.atdef`.
	 * @param ctx the parse tree
	 */
	enterAtdef?: (ctx: AtdefContext) => void;
	/**
	 * Exit a parse tree produced by `chatParser.atdef`.
	 * @param ctx the parse tree
	 */
	exitAtdef?: (ctx: AtdefContext) => void;

	/**
	 * Enter a parse tree produced by `chatParser.atdef_`.
	 * @param ctx the parse tree
	 */
	enterAtdef_?: (ctx: Atdef_Context) => void;
	/**
	 * Exit a parse tree produced by `chatParser.atdef_`.
	 * @param ctx the parse tree
	 */
	exitAtdef_?: (ctx: Atdef_Context) => void;

	/**
	 * Enter a parse tree produced by `chatParser.dollarans`.
	 * @param ctx the parse tree
	 */
	enterDollarans?: (ctx: DollaransContext) => void;
	/**
	 * Exit a parse tree produced by `chatParser.dollarans`.
	 * @param ctx the parse tree
	 */
	exitDollarans?: (ctx: DollaransContext) => void;

	/**
	 * Enter a parse tree produced by `chatParser.anchor`.
	 * @param ctx the parse tree
	 */
	enterAnchor?: (ctx: AnchorContext) => void;
	/**
	 * Exit a parse tree produced by `chatParser.anchor`.
	 * @param ctx the parse tree
	 */
	exitAnchor?: (ctx: AnchorContext) => void;

	/**
	 * Enter a parse tree produced by `chatParser.lines`.
	 * @param ctx the parse tree
	 */
	enterLines?: (ctx: LinesContext) => void;
	/**
	 * Exit a parse tree produced by `chatParser.lines`.
	 * @param ctx the parse tree
	 */
	exitLines?: (ctx: LinesContext) => void;

	/**
	 * Enter a parse tree produced by `chatParser.s_and_w`.
	 * @param ctx the parse tree
	 */
	enterS_and_w?: (ctx: S_and_wContext) => void;
	/**
	 * Exit a parse tree produced by `chatParser.s_and_w`.
	 * @param ctx the parse tree
	 */
	exitS_and_w?: (ctx: S_and_wContext) => void;

	/**
	 * Enter a parse tree produced by `chatParser.clnsp`.
	 * @param ctx the parse tree
	 */
	enterClnsp?: (ctx: ClnspContext) => void;
	/**
	 * Exit a parse tree produced by `chatParser.clnsp`.
	 * @param ctx the parse tree
	 */
	exitClnsp?: (ctx: ClnspContext) => void;

	/**
	 * Enter a parse tree produced by `chatParser.sspl`.
	 * @param ctx the parse tree
	 */
	enterSspl?: (ctx: SsplContext) => void;
	/**
	 * Exit a parse tree produced by `chatParser.sspl`.
	 * @param ctx the parse tree
	 */
	exitSspl?: (ctx: SsplContext) => void;

	/**
	 * Enter a parse tree produced by `chatParser.words`.
	 * @param ctx the parse tree
	 */
	enterWords?: (ctx: WordsContext) => void;
	/**
	 * Exit a parse tree produced by `chatParser.words`.
	 * @param ctx the parse tree
	 */
	exitWords?: (ctx: WordsContext) => void;

	/**
	 * Enter a parse tree produced by `chatParser.sp`.
	 * @param ctx the parse tree
	 */
	enterSp?: (ctx: SpContext) => void;
	/**
	 * Exit a parse tree produced by `chatParser.sp`.
	 * @param ctx the parse tree
	 */
	exitSp?: (ctx: SpContext) => void;
}

