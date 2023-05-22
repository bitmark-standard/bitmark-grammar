// Generated from ./Chat/chatParser.g4 by ANTLR 4.9.0-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { FailedPredicateException } from "antlr4ts/FailedPredicateException";
import { NotNull } from "antlr4ts/Decorators";
import { NoViableAltException } from "antlr4ts/NoViableAltException";
import { Override } from "antlr4ts/Decorators";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { ParserATNSimulator } from "antlr4ts/atn/ParserATNSimulator";
import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";
import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";
import { RecognitionException } from "antlr4ts/RecognitionException";
import { RuleContext } from "antlr4ts/RuleContext";
//import { RuleVersion } from "antlr4ts/RuleVersion";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { Token } from "antlr4ts/Token";
import { TokenStream } from "antlr4ts/TokenStream";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";

import { chatParserListener } from "./chatParserListener";

export class chatParser extends Parser {
	public static readonly OPDOT = 1;
	public static readonly S = 2;
	public static readonly BitChat = 3;
	public static readonly BitConv = 4;
	public static readonly BitConversationLeft1 = 5;
	public static readonly BitConversationRight1 = 6;
	public static readonly BitConversationRight1Thought = 7;
	public static readonly BitConversationRight1Scream = 8;
	public static readonly BitConversationLeft1Thought = 9;
	public static readonly BitConversationLeft1Scream = 10;
	public static readonly OPDOLL = 11;
	public static readonly OPBUL = 12;
	public static readonly OPESC = 13;
	public static readonly OPRANGLES = 14;
	public static readonly OPRANGLEL = 15;
	public static readonly OPDANGLE = 16;
	public static readonly OPU = 17;
	public static readonly OPB = 18;
	public static readonly OPQ = 19;
	public static readonly OPA = 20;
	public static readonly OPP = 21;
	public static readonly OPM = 22;
	public static readonly OPS = 23;
	public static readonly OPR = 24;
	public static readonly OPC = 25;
	public static readonly OPHASH = 26;
	public static readonly CL = 27;
	public static readonly COLON = 28;
	public static readonly AMP = 29;
	public static readonly DBLCOLON = 30;
	public static readonly PLUS = 31;
	public static readonly DotAt = 32;
	public static readonly Greater = 33;
	public static readonly Less = 34;
	public static readonly RightAngle = 35;
	public static readonly RightArrow = 36;
	public static readonly DBLEQ = 37;
	public static readonly HSPL = 38;
	public static readonly HSPL2 = 39;
	public static readonly SSPL = 40;
	public static readonly SSPL2 = 41;
	public static readonly COMMENT = 42;
	public static readonly DCANY = 43;
	public static readonly Image_type = 44;
	public static readonly Audio_type = 45;
	public static readonly Video_type = 46;
	public static readonly ArticleText = 47;
	public static readonly NOTCL = 48;
	public static readonly NUMERIC = 49;
	public static readonly STRING = 50;
	public static readonly NL = 51;
	public static readonly NOTBITMARK = 52;
	public static readonly ELIPSIS = 53;
	public static readonly SENTENCE = 54;
	public static readonly BARSTRING = 55;
	public static readonly OPAT = 56;
	public static readonly AtProgress = 57;
	public static readonly AtReference = 58;
	public static readonly AtWidth = 59;
	public static readonly AtHeight = 60;
	public static readonly AtProgressPoints = 61;
	public static readonly AtShortanswer = 62;
	public static readonly AtLonganswer = 63;
	public static readonly AtExampleWithStr = 64;
	public static readonly AtExamplecol = 65;
	public static readonly AtExamplecl = 66;
	public static readonly AtSampleSolution = 67;
	public static readonly AtPartialAnswerS = 68;
	public static readonly AtPartialAnswer = 69;
	public static readonly AtLabeltrue = 70;
	public static readonly AtLabelfalse = 71;
	public static readonly AtPoints = 72;
	public static readonly AtSrc = 73;
	public static readonly AtPartner = 74;
	public static readonly OPATALT = 75;
	public static readonly OPAMARK = 76;
	public static readonly ShowInIndex = 77;
	public static readonly OpAtCaption = 78;
	public static readonly OpAtLicense = 79;
	public static readonly OpAtCopyright = 80;
	public static readonly OpAtSearch = 81;
	public static readonly OpAtIsTracked = 82;
	public static readonly OpAtIsInfoOnly = 83;
	public static readonly AtDate = 84;
	public static readonly Http = 85;
	public static readonly Https = 86;
	public static readonly AmpAudio = 87;
	public static readonly AmpImage = 88;
	public static readonly AmpImageZoom = 89;
	public static readonly AmpImageWAudio = 90;
	public static readonly AmpVideo = 91;
	public static readonly AmpArticle = 92;
	public static readonly AmpDocument = 93;
	public static readonly AmpApp = 94;
	public static readonly AmpWebsite = 95;
	public static readonly AmpStillImageFilm = 96;
	public static readonly AmpPdf = 97;
	public static readonly OpAmpAudio = 98;
	public static readonly OpAmpImage = 99;
	public static readonly OpAmpImageZoom = 100;
	public static readonly OpAmpImageWAudio = 101;
	public static readonly OpAmpVideo = 102;
	public static readonly OpAmpArticle = 103;
	public static readonly OpAmpArticleAtt = 104;
	public static readonly OpAmpDocument = 105;
	public static readonly OpAmpApp = 106;
	public static readonly OpAmpWebsite = 107;
	public static readonly OpAmpStillImageFilm = 108;
	public static readonly BracEnclose = 109;
	public static readonly AmpAudioLink = 110;
	public static readonly AmpImageLink = 111;
	public static readonly AmpVideoLink = 112;
	public static readonly AmpArticleLink = 113;
	public static readonly AmpDocumentLink = 114;
	public static readonly AmpDocumentDownload = 115;
	public static readonly AmpAppLink = 116;
	public static readonly AmpWebsiteLink = 117;
	public static readonly AmpStillImageFilmLink = 118;
	public static readonly OpAmpAudioLink = 119;
	public static readonly OpAmpImageLink = 120;
	public static readonly OpAmpVideoLink = 121;
	public static readonly OpAmpArticleLink = 122;
	public static readonly OpAmpDocumentLink = 123;
	public static readonly OpAmpDocumentDownload = 124;
	public static readonly OpAmpAppLink = 125;
	public static readonly OpAmpWebsiteLink = 126;
	public static readonly OpAmpStillImageFilmLink = 127;
	public static readonly AmpImageEmbed = 128;
	public static readonly AmpVideoEmbed = 129;
	public static readonly AmpAudioEmbed = 130;
	public static readonly AmpDocumentEmbed = 131;
	public static readonly AmpStillImageFilmEmbed = 132;
	public static readonly OpAmpImageEmbed = 133;
	public static readonly OpAmpVideoEmbed = 134;
	public static readonly OpAmpAudioEmbed = 135;
	public static readonly OpAmpDocumentEmbed = 136;
	public static readonly OpAmpStillImageFilmEmbed = 137;
	public static readonly BitmarkMinus = 138;
	public static readonly BitmarkPlus = 139;
	public static readonly ColonText = 140;
	public static readonly ColonJson = 141;
	public static readonly Prosemirror = 142;
	public static readonly Placeholder = 143;
	public static readonly BASIC = 144;
	public static readonly JPG = 145;
	public static readonly PNG = 146;
	public static readonly GIF = 147;
	public static readonly SVG = 148;
	public static readonly MP2 = 149;
	public static readonly MP3 = 150;
	public static readonly MP4 = 151;
	public static readonly FLV = 152;
	public static readonly WMV = 153;
	public static readonly MPEG = 154;
	public static readonly MPG = 155;
	public static readonly TEL = 156;
	public static readonly DotArticleAtt = 157;
	public static readonly STAR = 158;
	public static readonly URL = 159;
	public static readonly LIST_LINE = 160;
	public static readonly ENCLBARS = 161;
	public static readonly RULE_bitmark = 0;
	public static readonly RULE_bitmark_ = 1;
	public static readonly RULE_chat = 2;
	public static readonly RULE_conversation = 3;
	public static readonly RULE_conversation_left_1 = 4;
	public static readonly RULE_conversation_right_1 = 5;
	public static readonly RULE_conversation_right_1_thought = 6;
	public static readonly RULE_conversation_right_1_scream = 7;
	public static readonly RULE_conversation_left_1_thought = 8;
	public static readonly RULE_conversation_left_1_scream = 9;
	public static readonly RULE_initiator = 10;
	public static readonly RULE_partner = 11;
	public static readonly RULE_partner1 = 12;
	public static readonly RULE_partner1_name = 13;
	public static readonly RULE_name_text = 14;
	public static readonly RULE_name_alt = 15;
	public static readonly RULE_chat_initiator = 16;
	public static readonly RULE_chat_partner = 17;
	public static readonly RULE_sspl_chat_partner = 18;
	public static readonly RULE_bitElem = 19;
	public static readonly RULE_resource = 20;
	public static readonly RULE_gap = 21;
	public static readonly RULE_single_gap = 22;
	public static readonly RULE_dcolon = 23;
	public static readonly RULE_atpoint = 24;
	public static readonly RULE_format = 25;
	public static readonly RULE_resource_format = 26;
	public static readonly RULE_resource_format_extra = 27;
	public static readonly RULE_format2 = 28;
	public static readonly RULE_image_format = 29;
	public static readonly RULE_video_format = 30;
	public static readonly RULE_article_format = 31;
	public static readonly RULE_document_format = 32;
	public static readonly RULE_app_format = 33;
	public static readonly RULE_website_format = 34;
	public static readonly RULE_stillimagefilm_format = 35;
	public static readonly RULE_op_article_format = 36;
	public static readonly RULE_op_document_format = 37;
	public static readonly RULE_op_app_format = 38;
	public static readonly RULE_op_website_format = 39;
	public static readonly RULE_op_video_format = 40;
	public static readonly RULE_op_stillimagefilm_format = 41;
	public static readonly RULE_articlebit = 42;
	public static readonly RULE_documentbit = 43;
	public static readonly RULE_websitebit = 44;
	public static readonly RULE_appbit = 45;
	public static readonly RULE_stillimagefilmbit = 46;
	public static readonly RULE_stillimg_one = 47;
	public static readonly RULE_videobit = 48;
	public static readonly RULE_video_one = 49;
	public static readonly RULE_imagebit = 50;
	public static readonly RULE_image_one = 51;
	public static readonly RULE_op_image_format = 52;
	public static readonly RULE_image_chained = 53;
	public static readonly RULE_image_chained4match = 54;
	public static readonly RULE_audiobit = 55;
	public static readonly RULE_audio_one = 56;
	public static readonly RULE_audio_format = 57;
	public static readonly RULE_op_audio_format = 58;
	public static readonly RULE_resource_chained = 59;
	public static readonly RULE_telephone = 60;
	public static readonly RULE_url = 61;
	public static readonly RULE_item = 62;
	public static readonly RULE_lead = 63;
	public static readonly RULE_angleref = 64;
	public static readonly RULE_example = 65;
	public static readonly RULE_bracketed_text = 66;
	public static readonly RULE_reference = 67;
	public static readonly RULE_progress = 68;
	public static readonly RULE_dateprop = 69;
	public static readonly RULE_dateprop_chained = 70;
	public static readonly RULE_instruction = 71;
	public static readonly RULE_hint = 72;
	public static readonly RULE_title = 73;
	public static readonly RULE_bool_label = 74;
	public static readonly RULE_progress_points = 75;
	public static readonly RULE_istracked = 76;
	public static readonly RULE_isinfoonly = 77;
	public static readonly RULE_atdef = 78;
	public static readonly RULE_atdef_ = 79;
	public static readonly RULE_dollarans = 80;
	public static readonly RULE_anchor = 81;
	public static readonly RULE_lines = 82;
	public static readonly RULE_s_and_w = 83;
	public static readonly RULE_clnsp = 84;
	public static readonly RULE_sspl = 85;
	public static readonly RULE_words = 86;
	public static readonly RULE_sp = 87;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"bitmark", "bitmark_", "chat", "conversation", "conversation_left_1", 
		"conversation_right_1", "conversation_right_1_thought", "conversation_right_1_scream", 
		"conversation_left_1_thought", "conversation_left_1_scream", "initiator", 
		"partner", "partner1", "partner1_name", "name_text", "name_alt", "chat_initiator", 
		"chat_partner", "sspl_chat_partner", "bitElem", "resource", "gap", "single_gap", 
		"dcolon", "atpoint", "format", "resource_format", "resource_format_extra", 
		"format2", "image_format", "video_format", "article_format", "document_format", 
		"app_format", "website_format", "stillimagefilm_format", "op_article_format", 
		"op_document_format", "op_app_format", "op_website_format", "op_video_format", 
		"op_stillimagefilm_format", "articlebit", "documentbit", "websitebit", 
		"appbit", "stillimagefilmbit", "stillimg_one", "videobit", "video_one", 
		"imagebit", "image_one", "op_image_format", "image_chained", "image_chained4match", 
		"audiobit", "audio_one", "audio_format", "op_audio_format", "resource_chained", 
		"telephone", "url", "item", "lead", "angleref", "example", "bracketed_text", 
		"reference", "progress", "dateprop", "dateprop_chained", "instruction", 
		"hint", "title", "bool_label", "progress_points", "istracked", "isinfoonly", 
		"atdef", "atdef_", "dollarans", "anchor", "lines", "s_and_w", "clnsp", 
		"sspl", "words", "sp",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'[.'", undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, "'[^'", 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, "'[#'", undefined, 
		"':'", "'&'", "'::'", "'+'", "'.@'", "'>'", "'<'", "'\u25BA'", "'\u2192'", 
		"'=='", undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, "'[@'", undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, "'http://'", 
		"'https://'", "'&audio'", "'&image'", "'&image-zoom'", "'&image-with-audio'", 
		"'&video'", "'&article'", "'&document'", "'&app'", "'&website'", "'&still-image-film'", 
		"'&pdf'", undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, "'&audio-link'", 
		"'&image-link'", "'&video-link'", "'&article-link'", "'&document-link'", 
		"'&document-download'", "'&app-link'", "'&website-link'", "'&still-image-film-link'", 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, "'&image-embed'", "'&video-embed'", "'&daudio-embed'", 
		"'&document-embed'", "'&still-image-film-embed'", undefined, undefined, 
		undefined, undefined, undefined, "':bitmark--'", "':bitmark++'", "':text'", 
		"':json'", "':prosemirror'", "':placeholder'", "':basic'", "':jpg'", "':png'", 
		"':gif'", "':svg'", "':mp2'", "':mp3'", "':mp4'", "':flv'", "':wmv'", 
		"':mpeg'", "':mpg'", "'tel:'", "'.article-attachment'", "'*'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "OPDOT", "S", "BitChat", "BitConv", "BitConversationLeft1", 
		"BitConversationRight1", "BitConversationRight1Thought", "BitConversationRight1Scream", 
		"BitConversationLeft1Thought", "BitConversationLeft1Scream", "OPDOLL", 
		"OPBUL", "OPESC", "OPRANGLES", "OPRANGLEL", "OPDANGLE", "OPU", "OPB", 
		"OPQ", "OPA", "OPP", "OPM", "OPS", "OPR", "OPC", "OPHASH", "CL", "COLON", 
		"AMP", "DBLCOLON", "PLUS", "DotAt", "Greater", "Less", "RightAngle", "RightArrow", 
		"DBLEQ", "HSPL", "HSPL2", "SSPL", "SSPL2", "COMMENT", "DCANY", "Image_type", 
		"Audio_type", "Video_type", "ArticleText", "NOTCL", "NUMERIC", "STRING", 
		"NL", "NOTBITMARK", "ELIPSIS", "SENTENCE", "BARSTRING", "OPAT", "AtProgress", 
		"AtReference", "AtWidth", "AtHeight", "AtProgressPoints", "AtShortanswer", 
		"AtLonganswer", "AtExampleWithStr", "AtExamplecol", "AtExamplecl", "AtSampleSolution", 
		"AtPartialAnswerS", "AtPartialAnswer", "AtLabeltrue", "AtLabelfalse", 
		"AtPoints", "AtSrc", "AtPartner", "OPATALT", "OPAMARK", "ShowInIndex", 
		"OpAtCaption", "OpAtLicense", "OpAtCopyright", "OpAtSearch", "OpAtIsTracked", 
		"OpAtIsInfoOnly", "AtDate", "Http", "Https", "AmpAudio", "AmpImage", "AmpImageZoom", 
		"AmpImageWAudio", "AmpVideo", "AmpArticle", "AmpDocument", "AmpApp", "AmpWebsite", 
		"AmpStillImageFilm", "AmpPdf", "OpAmpAudio", "OpAmpImage", "OpAmpImageZoom", 
		"OpAmpImageWAudio", "OpAmpVideo", "OpAmpArticle", "OpAmpArticleAtt", "OpAmpDocument", 
		"OpAmpApp", "OpAmpWebsite", "OpAmpStillImageFilm", "BracEnclose", "AmpAudioLink", 
		"AmpImageLink", "AmpVideoLink", "AmpArticleLink", "AmpDocumentLink", "AmpDocumentDownload", 
		"AmpAppLink", "AmpWebsiteLink", "AmpStillImageFilmLink", "OpAmpAudioLink", 
		"OpAmpImageLink", "OpAmpVideoLink", "OpAmpArticleLink", "OpAmpDocumentLink", 
		"OpAmpDocumentDownload", "OpAmpAppLink", "OpAmpWebsiteLink", "OpAmpStillImageFilmLink", 
		"AmpImageEmbed", "AmpVideoEmbed", "AmpAudioEmbed", "AmpDocumentEmbed", 
		"AmpStillImageFilmEmbed", "OpAmpImageEmbed", "OpAmpVideoEmbed", "OpAmpAudioEmbed", 
		"OpAmpDocumentEmbed", "OpAmpStillImageFilmEmbed", "BitmarkMinus", "BitmarkPlus", 
		"ColonText", "ColonJson", "Prosemirror", "Placeholder", "BASIC", "JPG", 
		"PNG", "GIF", "SVG", "MP2", "MP3", "MP4", "FLV", "WMV", "MPEG", "MPG", 
		"TEL", "DotArticleAtt", "STAR", "URL", "LIST_LINE", "ENCLBARS",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(chatParser._LITERAL_NAMES, chatParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return chatParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "chatParser.g4"; }

	// @Override
	public get ruleNames(): string[] { return chatParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return chatParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(chatParser._ATN, this);
	}
	// @RuleVersion(0)
	public bitmark(): BitmarkContext {
		let _localctx: BitmarkContext = new BitmarkContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, chatParser.RULE_bitmark);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 189;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 176;
				this.bitmark_();
				this.state = 186;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 1, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 180;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						while (_la === chatParser.S) {
							{
							{
							this.state = 177;
							this.match(chatParser.S);
							}
							}
							this.state = 182;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
						}
						this.state = 183;
						this.match(chatParser.NL);
						}
						}
					}
					this.state = 188;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 1, this._ctx);
				}
				}
				}
				this.state = 191;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << chatParser.BitChat) | (1 << chatParser.BitConv) | (1 << chatParser.BitConversationLeft1) | (1 << chatParser.BitConversationRight1) | (1 << chatParser.BitConversationRight1Thought) | (1 << chatParser.BitConversationRight1Scream) | (1 << chatParser.BitConversationLeft1Thought) | (1 << chatParser.BitConversationLeft1Scream))) !== 0));
			this.state = 196;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === chatParser.NL) {
				{
				{
				this.state = 193;
				this.match(chatParser.NL);
				}
				}
				this.state = 198;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 199;
			this.match(chatParser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public bitmark_(): Bitmark_Context {
		let _localctx: Bitmark_Context = new Bitmark_Context(this._ctx, this.state);
		this.enterRule(_localctx, 2, chatParser.RULE_bitmark_);
		try {
			this.state = 209;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case chatParser.BitChat:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 201;
				this.chat();
				}
				break;
			case chatParser.BitConv:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 202;
				this.conversation();
				}
				break;
			case chatParser.BitConversationLeft1:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 203;
				this.conversation_left_1();
				}
				break;
			case chatParser.BitConversationRight1:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 204;
				this.conversation_right_1();
				}
				break;
			case chatParser.BitConversationRight1Thought:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 205;
				this.conversation_right_1_thought();
				}
				break;
			case chatParser.BitConversationRight1Scream:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 206;
				this.conversation_right_1_scream();
				}
				break;
			case chatParser.BitConversationLeft1Thought:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 207;
				this.conversation_left_1_thought();
				}
				break;
			case chatParser.BitConversationLeft1Scream:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 208;
				this.conversation_left_1_scream();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public chat(): ChatContext {
		let _localctx: ChatContext = new ChatContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, chatParser.RULE_chat);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 211;
			this.match(chatParser.BitChat);
			this.state = 212;
			this.format();
			this.state = 213;
			this.match(chatParser.CL);
			this.state = 217;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === chatParser.NL) {
				{
				{
				this.state = 214;
				this.match(chatParser.NL);
				}
				}
				this.state = 219;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 229;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << chatParser.S) | (1 << chatParser.OPRANGLES) | (1 << chatParser.OPRANGLEL) | (1 << chatParser.OPDANGLE) | (1 << chatParser.OPU) | (1 << chatParser.OPB) | (1 << chatParser.OPQ) | (1 << chatParser.OPA) | (1 << chatParser.OPS) | (1 << chatParser.OPC) | (1 << chatParser.OPHASH) | (1 << chatParser.COLON) | (1 << chatParser.AMP) | (1 << chatParser.DBLCOLON))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (chatParser.Greater - 33)) | (1 << (chatParser.Less - 33)) | (1 << (chatParser.RightAngle - 33)) | (1 << (chatParser.RightArrow - 33)) | (1 << (chatParser.DBLEQ - 33)) | (1 << (chatParser.ArticleText - 33)) | (1 << (chatParser.NUMERIC - 33)) | (1 << (chatParser.STRING - 33)) | (1 << (chatParser.NOTBITMARK - 33)) | (1 << (chatParser.ELIPSIS - 33)) | (1 << (chatParser.SENTENCE - 33)) | (1 << (chatParser.BARSTRING - 33)) | (1 << (chatParser.AtReference - 33)) | (1 << (chatParser.AtExampleWithStr - 33)))) !== 0) || ((((_la - 65)) & ~0x1F) === 0 && ((1 << (_la - 65)) & ((1 << (chatParser.AtExamplecol - 65)) | (1 << (chatParser.AtExamplecl - 65)) | (1 << (chatParser.AtLabeltrue - 65)) | (1 << (chatParser.AtLabelfalse - 65)) | (1 << (chatParser.OpAtCopyright - 65)))) !== 0) || ((((_la - 98)) & ~0x1F) === 0 && ((1 << (_la - 98)) & ((1 << (chatParser.OpAmpAudio - 98)) | (1 << (chatParser.OpAmpImage - 98)) | (1 << (chatParser.OpAmpImageZoom - 98)) | (1 << (chatParser.OpAmpImageWAudio - 98)) | (1 << (chatParser.OpAmpVideo - 98)) | (1 << (chatParser.OpAmpArticle - 98)) | (1 << (chatParser.OpAmpDocument - 98)) | (1 << (chatParser.OpAmpApp - 98)) | (1 << (chatParser.OpAmpWebsite - 98)) | (1 << (chatParser.OpAmpStillImageFilm - 98)) | (1 << (chatParser.OpAmpAudioLink - 98)) | (1 << (chatParser.OpAmpImageLink - 98)) | (1 << (chatParser.OpAmpVideoLink - 98)) | (1 << (chatParser.OpAmpArticleLink - 98)) | (1 << (chatParser.OpAmpDocumentLink - 98)) | (1 << (chatParser.OpAmpDocumentDownload - 98)) | (1 << (chatParser.OpAmpAppLink - 98)) | (1 << (chatParser.OpAmpWebsiteLink - 98)) | (1 << (chatParser.OpAmpStillImageFilmLink - 98)))) !== 0) || ((((_la - 134)) & ~0x1F) === 0 && ((1 << (_la - 134)) & ((1 << (chatParser.OpAmpVideoEmbed - 134)) | (1 << (chatParser.OpAmpAudioEmbed - 134)) | (1 << (chatParser.OpAmpDocumentEmbed - 134)) | (1 << (chatParser.OpAmpStillImageFilmEmbed - 134)) | (1 << (chatParser.URL - 134)) | (1 << (chatParser.LIST_LINE - 134)))) !== 0)) {
				{
				{
				this.state = 220;
				this.bitElem();
				this.state = 224;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === chatParser.NL) {
					{
					{
					this.state = 221;
					this.match(chatParser.NL);
					}
					}
					this.state = 226;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
				}
				this.state = 231;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 232;
			_la = this._input.LA(1);
			if (!(_la === chatParser.HSPL || _la === chatParser.HSPL2)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 233;
			this.initiator();
			this.state = 234;
			_la = this._input.LA(1);
			if (!(_la === chatParser.HSPL || _la === chatParser.HSPL2)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 235;
			this.partner();
			this.state = 244;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 236;
					_la = this._input.LA(1);
					if (!(_la === chatParser.HSPL || _la === chatParser.HSPL2)) {
					this._errHandler.recoverInline(this);
					} else {
						if (this._input.LA(1) === Token.EOF) {
							this.matchedEOF = true;
						}

						this._errHandler.reportMatch(this);
						this.consume();
					}
					this.state = 237;
					this.chat_initiator();
					this.state = 241;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === chatParser.SSPL || _la === chatParser.SSPL2) {
						{
						{
						this.state = 238;
						this.sspl_chat_partner();
						}
						}
						this.state = 243;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 246;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 9, this._ctx);
			} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
			this.state = 248;
			_la = this._input.LA(1);
			if (!(_la === chatParser.HSPL || _la === chatParser.HSPL2)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 252;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 10, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 249;
					this.match(chatParser.NL);
					}
					}
				}
				this.state = 254;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 10, this._ctx);
			}
			this.state = 268;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 13, this._ctx) ) {
			case 1:
				{
				this.state = 255;
				this.resource();
				this.state = 265;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 12, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 259;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						while (_la === chatParser.NL) {
							{
							{
							this.state = 256;
							this.match(chatParser.NL);
							}
							}
							this.state = 261;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
						}
						this.state = 262;
						this.resource();
						}
						}
					}
					this.state = 267;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 12, this._ctx);
				}
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public conversation(): ConversationContext {
		let _localctx: ConversationContext = new ConversationContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, chatParser.RULE_conversation);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 270;
			this.match(chatParser.BitConv);
			this.state = 271;
			this.format();
			this.state = 272;
			this.match(chatParser.CL);
			this.state = 276;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === chatParser.NL) {
				{
				{
				this.state = 273;
				this.match(chatParser.NL);
				}
				}
				this.state = 278;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 288;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << chatParser.S) | (1 << chatParser.OPRANGLES) | (1 << chatParser.OPRANGLEL) | (1 << chatParser.OPDANGLE) | (1 << chatParser.OPU) | (1 << chatParser.OPB) | (1 << chatParser.OPQ) | (1 << chatParser.OPA) | (1 << chatParser.OPS) | (1 << chatParser.OPC) | (1 << chatParser.OPHASH) | (1 << chatParser.COLON) | (1 << chatParser.AMP) | (1 << chatParser.DBLCOLON))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (chatParser.Greater - 33)) | (1 << (chatParser.Less - 33)) | (1 << (chatParser.RightAngle - 33)) | (1 << (chatParser.RightArrow - 33)) | (1 << (chatParser.DBLEQ - 33)) | (1 << (chatParser.ArticleText - 33)) | (1 << (chatParser.NUMERIC - 33)) | (1 << (chatParser.STRING - 33)) | (1 << (chatParser.NOTBITMARK - 33)) | (1 << (chatParser.ELIPSIS - 33)) | (1 << (chatParser.SENTENCE - 33)) | (1 << (chatParser.BARSTRING - 33)) | (1 << (chatParser.AtReference - 33)) | (1 << (chatParser.AtExampleWithStr - 33)))) !== 0) || ((((_la - 65)) & ~0x1F) === 0 && ((1 << (_la - 65)) & ((1 << (chatParser.AtExamplecol - 65)) | (1 << (chatParser.AtExamplecl - 65)) | (1 << (chatParser.AtLabeltrue - 65)) | (1 << (chatParser.AtLabelfalse - 65)) | (1 << (chatParser.OpAtCopyright - 65)))) !== 0) || ((((_la - 98)) & ~0x1F) === 0 && ((1 << (_la - 98)) & ((1 << (chatParser.OpAmpAudio - 98)) | (1 << (chatParser.OpAmpImage - 98)) | (1 << (chatParser.OpAmpImageZoom - 98)) | (1 << (chatParser.OpAmpImageWAudio - 98)) | (1 << (chatParser.OpAmpVideo - 98)) | (1 << (chatParser.OpAmpArticle - 98)) | (1 << (chatParser.OpAmpDocument - 98)) | (1 << (chatParser.OpAmpApp - 98)) | (1 << (chatParser.OpAmpWebsite - 98)) | (1 << (chatParser.OpAmpStillImageFilm - 98)) | (1 << (chatParser.OpAmpAudioLink - 98)) | (1 << (chatParser.OpAmpImageLink - 98)) | (1 << (chatParser.OpAmpVideoLink - 98)) | (1 << (chatParser.OpAmpArticleLink - 98)) | (1 << (chatParser.OpAmpDocumentLink - 98)) | (1 << (chatParser.OpAmpDocumentDownload - 98)) | (1 << (chatParser.OpAmpAppLink - 98)) | (1 << (chatParser.OpAmpWebsiteLink - 98)) | (1 << (chatParser.OpAmpStillImageFilmLink - 98)))) !== 0) || ((((_la - 134)) & ~0x1F) === 0 && ((1 << (_la - 134)) & ((1 << (chatParser.OpAmpVideoEmbed - 134)) | (1 << (chatParser.OpAmpAudioEmbed - 134)) | (1 << (chatParser.OpAmpDocumentEmbed - 134)) | (1 << (chatParser.OpAmpStillImageFilmEmbed - 134)) | (1 << (chatParser.URL - 134)) | (1 << (chatParser.LIST_LINE - 134)))) !== 0)) {
				{
				{
				this.state = 279;
				this.bitElem();
				this.state = 283;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === chatParser.NL) {
					{
					{
					this.state = 280;
					this.match(chatParser.NL);
					}
					}
					this.state = 285;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
				}
				this.state = 290;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 291;
			_la = this._input.LA(1);
			if (!(_la === chatParser.HSPL || _la === chatParser.HSPL2)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 292;
			this.initiator();
			this.state = 293;
			_la = this._input.LA(1);
			if (!(_la === chatParser.HSPL || _la === chatParser.HSPL2)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 294;
			this.partner();
			this.state = 303;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 295;
					_la = this._input.LA(1);
					if (!(_la === chatParser.HSPL || _la === chatParser.HSPL2)) {
					this._errHandler.recoverInline(this);
					} else {
						if (this._input.LA(1) === Token.EOF) {
							this.matchedEOF = true;
						}

						this._errHandler.reportMatch(this);
						this.consume();
					}
					this.state = 296;
					this.chat_initiator();
					this.state = 300;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === chatParser.SSPL || _la === chatParser.SSPL2) {
						{
						{
						this.state = 297;
						this.sspl_chat_partner();
						}
						}
						this.state = 302;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 305;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 18, this._ctx);
			} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
			this.state = 307;
			_la = this._input.LA(1);
			if (!(_la === chatParser.HSPL || _la === chatParser.HSPL2)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 311;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 19, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 308;
					this.match(chatParser.NL);
					}
					}
				}
				this.state = 313;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 19, this._ctx);
			}
			this.state = 327;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 22, this._ctx) ) {
			case 1:
				{
				this.state = 314;
				this.resource();
				this.state = 324;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 21, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 318;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						while (_la === chatParser.NL) {
							{
							{
							this.state = 315;
							this.match(chatParser.NL);
							}
							}
							this.state = 320;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
						}
						this.state = 321;
						this.resource();
						}
						}
					}
					this.state = 326;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 21, this._ctx);
				}
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public conversation_left_1(): Conversation_left_1Context {
		let _localctx: Conversation_left_1Context = new Conversation_left_1Context(this._ctx, this.state);
		this.enterRule(_localctx, 8, chatParser.RULE_conversation_left_1);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 329;
			this.match(chatParser.BitConversationLeft1);
			this.state = 330;
			this.format2();
			this.state = 331;
			this.match(chatParser.CL);
			this.state = 335;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 23, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 332;
					this.match(chatParser.NL);
					}
					}
				}
				this.state = 337;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 23, this._ctx);
			}
			this.state = 347;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 25, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 338;
					this.bitElem();
					this.state = 342;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 24, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 339;
							this.match(chatParser.NL);
							}
							}
						}
						this.state = 344;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 24, this._ctx);
					}
					}
					}
				}
				this.state = 349;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 25, this._ctx);
			}
			this.state = 351;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === chatParser.AtPartner) {
				{
				this.state = 350;
				this.partner1();
				}
			}

			this.state = 356;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === chatParser.NL) {
				{
				{
				this.state = 353;
				this.match(chatParser.NL);
				}
				}
				this.state = 358;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 366;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 359;
					this.s_and_w();
					this.state = 363;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 28, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 360;
							this.match(chatParser.NL);
							}
							}
						}
						this.state = 365;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 28, this._ctx);
					}
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 368;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 29, this._ctx);
			} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public conversation_right_1(): Conversation_right_1Context {
		let _localctx: Conversation_right_1Context = new Conversation_right_1Context(this._ctx, this.state);
		this.enterRule(_localctx, 10, chatParser.RULE_conversation_right_1);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 370;
			this.match(chatParser.BitConversationRight1);
			this.state = 371;
			this.format2();
			this.state = 372;
			this.match(chatParser.CL);
			this.state = 376;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 30, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 373;
					this.match(chatParser.NL);
					}
					}
				}
				this.state = 378;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 30, this._ctx);
			}
			this.state = 388;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 32, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 379;
					this.bitElem();
					this.state = 383;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 31, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 380;
							this.match(chatParser.NL);
							}
							}
						}
						this.state = 385;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 31, this._ctx);
					}
					}
					}
				}
				this.state = 390;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 32, this._ctx);
			}
			this.state = 392;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === chatParser.AtPartner) {
				{
				this.state = 391;
				this.partner1();
				}
			}

			this.state = 397;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === chatParser.NL) {
				{
				{
				this.state = 394;
				this.match(chatParser.NL);
				}
				}
				this.state = 399;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 407;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 400;
					this.s_and_w();
					this.state = 404;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 35, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 401;
							this.match(chatParser.NL);
							}
							}
						}
						this.state = 406;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 35, this._ctx);
					}
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 409;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 36, this._ctx);
			} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public conversation_right_1_thought(): Conversation_right_1_thoughtContext {
		let _localctx: Conversation_right_1_thoughtContext = new Conversation_right_1_thoughtContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, chatParser.RULE_conversation_right_1_thought);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 411;
			this.match(chatParser.BitConversationRight1Thought);
			this.state = 412;
			this.format2();
			this.state = 413;
			this.match(chatParser.CL);
			this.state = 417;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 37, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 414;
					this.match(chatParser.NL);
					}
					}
				}
				this.state = 419;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 37, this._ctx);
			}
			this.state = 429;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 39, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 420;
					this.bitElem();
					this.state = 424;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 38, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 421;
							this.match(chatParser.NL);
							}
							}
						}
						this.state = 426;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 38, this._ctx);
					}
					}
					}
				}
				this.state = 431;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 39, this._ctx);
			}
			this.state = 433;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === chatParser.AtPartner) {
				{
				this.state = 432;
				this.partner1();
				}
			}

			this.state = 438;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === chatParser.NL) {
				{
				{
				this.state = 435;
				this.match(chatParser.NL);
				}
				}
				this.state = 440;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 448;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 441;
					this.s_and_w();
					this.state = 445;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 42, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 442;
							this.match(chatParser.NL);
							}
							}
						}
						this.state = 447;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 42, this._ctx);
					}
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 450;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 43, this._ctx);
			} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public conversation_right_1_scream(): Conversation_right_1_screamContext {
		let _localctx: Conversation_right_1_screamContext = new Conversation_right_1_screamContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, chatParser.RULE_conversation_right_1_scream);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 452;
			this.match(chatParser.BitConversationRight1Scream);
			this.state = 453;
			this.format2();
			this.state = 454;
			this.match(chatParser.CL);
			this.state = 458;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 44, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 455;
					this.match(chatParser.NL);
					}
					}
				}
				this.state = 460;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 44, this._ctx);
			}
			this.state = 470;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 46, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 461;
					this.bitElem();
					this.state = 465;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 45, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 462;
							this.match(chatParser.NL);
							}
							}
						}
						this.state = 467;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 45, this._ctx);
					}
					}
					}
				}
				this.state = 472;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 46, this._ctx);
			}
			this.state = 474;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === chatParser.AtPartner) {
				{
				this.state = 473;
				this.partner1();
				}
			}

			this.state = 479;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === chatParser.NL) {
				{
				{
				this.state = 476;
				this.match(chatParser.NL);
				}
				}
				this.state = 481;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 489;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 482;
					this.s_and_w();
					this.state = 486;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 49, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 483;
							this.match(chatParser.NL);
							}
							}
						}
						this.state = 488;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 49, this._ctx);
					}
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 491;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 50, this._ctx);
			} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public conversation_left_1_thought(): Conversation_left_1_thoughtContext {
		let _localctx: Conversation_left_1_thoughtContext = new Conversation_left_1_thoughtContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, chatParser.RULE_conversation_left_1_thought);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 493;
			this.match(chatParser.BitConversationLeft1Thought);
			this.state = 494;
			this.format2();
			this.state = 495;
			this.match(chatParser.CL);
			this.state = 499;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 51, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 496;
					this.match(chatParser.NL);
					}
					}
				}
				this.state = 501;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 51, this._ctx);
			}
			this.state = 511;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 53, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 502;
					this.bitElem();
					this.state = 506;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 52, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 503;
							this.match(chatParser.NL);
							}
							}
						}
						this.state = 508;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 52, this._ctx);
					}
					}
					}
				}
				this.state = 513;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 53, this._ctx);
			}
			this.state = 515;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === chatParser.AtPartner) {
				{
				this.state = 514;
				this.partner1();
				}
			}

			this.state = 520;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === chatParser.NL) {
				{
				{
				this.state = 517;
				this.match(chatParser.NL);
				}
				}
				this.state = 522;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 530;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 523;
					this.s_and_w();
					this.state = 527;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 56, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 524;
							this.match(chatParser.NL);
							}
							}
						}
						this.state = 529;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 56, this._ctx);
					}
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 532;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 57, this._ctx);
			} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public conversation_left_1_scream(): Conversation_left_1_screamContext {
		let _localctx: Conversation_left_1_screamContext = new Conversation_left_1_screamContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, chatParser.RULE_conversation_left_1_scream);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 534;
			this.match(chatParser.BitConversationLeft1Scream);
			this.state = 535;
			this.format2();
			this.state = 536;
			this.match(chatParser.CL);
			this.state = 540;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 58, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 537;
					this.match(chatParser.NL);
					}
					}
				}
				this.state = 542;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 58, this._ctx);
			}
			this.state = 552;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 60, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 543;
					this.bitElem();
					this.state = 547;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 59, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 544;
							this.match(chatParser.NL);
							}
							}
						}
						this.state = 549;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 59, this._ctx);
					}
					}
					}
				}
				this.state = 554;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 60, this._ctx);
			}
			this.state = 556;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === chatParser.AtPartner) {
				{
				this.state = 555;
				this.partner1();
				}
			}

			this.state = 561;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === chatParser.NL) {
				{
				{
				this.state = 558;
				this.match(chatParser.NL);
				}
				}
				this.state = 563;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 571;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 564;
					this.s_and_w();
					this.state = 568;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 63, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 565;
							this.match(chatParser.NL);
							}
							}
						}
						this.state = 570;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 63, this._ctx);
					}
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 573;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 64, this._ctx);
			} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public initiator(): InitiatorContext {
		let _localctx: InitiatorContext = new InitiatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, chatParser.RULE_initiator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 575;
			this.name_text();
			this.state = 583;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === chatParser.NL || ((((_la - 99)) & ~0x1F) === 0 && ((1 << (_la - 99)) & ((1 << (chatParser.OpAmpImage - 99)) | (1 << (chatParser.OpAmpImageZoom - 99)) | (1 << (chatParser.OpAmpImageWAudio - 99)) | (1 << (chatParser.OpAmpImageLink - 99)))) !== 0)) {
				{
				this.state = 579;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === chatParser.NL) {
					{
					{
					this.state = 576;
					this.match(chatParser.NL);
					}
					}
					this.state = 581;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 582;
				this.imagebit();
				}
			}

			this.state = 586;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === chatParser.OPATALT) {
				{
				this.state = 585;
				this.name_alt();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public partner(): PartnerContext {
		let _localctx: PartnerContext = new PartnerContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, chatParser.RULE_partner);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 588;
			this.name_text();
			this.state = 596;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === chatParser.NL || ((((_la - 99)) & ~0x1F) === 0 && ((1 << (_la - 99)) & ((1 << (chatParser.OpAmpImage - 99)) | (1 << (chatParser.OpAmpImageZoom - 99)) | (1 << (chatParser.OpAmpImageWAudio - 99)) | (1 << (chatParser.OpAmpImageLink - 99)))) !== 0)) {
				{
				this.state = 592;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === chatParser.NL) {
					{
					{
					this.state = 589;
					this.match(chatParser.NL);
					}
					}
					this.state = 594;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 595;
				this.imagebit();
				}
			}

			this.state = 599;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === chatParser.OPATALT) {
				{
				this.state = 598;
				this.name_alt();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public partner1(): Partner1Context {
		let _localctx: Partner1Context = new Partner1Context(this._ctx, this.state);
		this.enterRule(_localctx, 24, chatParser.RULE_partner1);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 601;
			this.partner1_name();
			this.state = 609;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 72, this._ctx) ) {
			case 1:
				{
				this.state = 605;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === chatParser.NL) {
					{
					{
					this.state = 602;
					this.match(chatParser.NL);
					}
					}
					this.state = 607;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 608;
				this.imagebit();
				}
				break;
			}
			this.state = 612;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === chatParser.OPATALT) {
				{
				this.state = 611;
				this.name_alt();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public partner1_name(): Partner1_nameContext {
		let _localctx: Partner1_nameContext = new Partner1_nameContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, chatParser.RULE_partner1_name);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 614;
			this.match(chatParser.AtPartner);
			this.state = 615;
			this.s_and_w();
			this.state = 616;
			this.match(chatParser.CL);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public name_text(): Name_textContext {
		let _localctx: Name_textContext = new Name_textContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, chatParser.RULE_name_text);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 618;
			this.match(chatParser.OPHASH);
			this.state = 619;
			this.s_and_w();
			this.state = 620;
			this.match(chatParser.CL);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public name_alt(): Name_altContext {
		let _localctx: Name_altContext = new Name_altContext(this._ctx, this.state);
		this.enterRule(_localctx, 30, chatParser.RULE_name_alt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 622;
			this.match(chatParser.OPATALT);
			this.state = 623;
			this.s_and_w();
			this.state = 624;
			this.match(chatParser.CL);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public chat_initiator(): Chat_initiatorContext {
		let _localctx: Chat_initiatorContext = new Chat_initiatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 32, chatParser.RULE_chat_initiator);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 626;
			this.s_and_w();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public chat_partner(): Chat_partnerContext {
		let _localctx: Chat_partnerContext = new Chat_partnerContext(this._ctx, this.state);
		this.enterRule(_localctx, 34, chatParser.RULE_chat_partner);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 628;
			this.s_and_w();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public sspl_chat_partner(): Sspl_chat_partnerContext {
		let _localctx: Sspl_chat_partnerContext = new Sspl_chat_partnerContext(this._ctx, this.state);
		this.enterRule(_localctx, 36, chatParser.RULE_sspl_chat_partner);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 630;
			this.sspl();
			this.state = 631;
			this.chat_partner();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public bitElem(): BitElemContext {
		let _localctx: BitElemContext = new BitElemContext(this._ctx, this.state);
		this.enterRule(_localctx, 38, chatParser.RULE_bitElem);
		try {
			this.state = 656;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 74, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 633;
				this.match(chatParser.LIST_LINE);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 634;
				this.match(chatParser.NOTBITMARK);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 635;
				this.gap();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 636;
				this.atdef();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 637;
				this.reference();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 638;
				this.item();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 639;
				this.title();
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 640;
				this.instruction();
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 641;
				this.hint();
				}
				break;

			case 10:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 642;
				this.s_and_w();
				}
				break;

			case 11:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 643;
				this.example();
				}
				break;

			case 12:
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 644;
				this.bool_label();
				}
				break;

			case 13:
				this.enterOuterAlt(_localctx, 13);
				{
				this.state = 645;
				this.imagebit();
				}
				break;

			case 14:
				this.enterOuterAlt(_localctx, 14);
				{
				this.state = 646;
				this.audiobit();
				}
				break;

			case 15:
				this.enterOuterAlt(_localctx, 15);
				{
				this.state = 647;
				this.videobit();
				}
				break;

			case 16:
				this.enterOuterAlt(_localctx, 16);
				{
				this.state = 648;
				this.articlebit();
				}
				break;

			case 17:
				this.enterOuterAlt(_localctx, 17);
				{
				this.state = 649;
				this.documentbit();
				}
				break;

			case 18:
				this.enterOuterAlt(_localctx, 18);
				{
				this.state = 650;
				this.appbit();
				}
				break;

			case 19:
				this.enterOuterAlt(_localctx, 19);
				{
				this.state = 651;
				this.websitebit();
				}
				break;

			case 20:
				this.enterOuterAlt(_localctx, 20);
				{
				this.state = 652;
				this.stillimagefilmbit();
				}
				break;

			case 21:
				this.enterOuterAlt(_localctx, 21);
				{
				this.state = 653;
				this.angleref();
				}
				break;

			case 22:
				this.enterOuterAlt(_localctx, 22);
				{
				this.state = 654;
				this.anchor();
				}
				break;

			case 23:
				this.enterOuterAlt(_localctx, 23);
				{
				this.state = 655;
				this.sp();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public resource(): ResourceContext {
		let _localctx: ResourceContext = new ResourceContext(this._ctx, this.state);
		this.enterRule(_localctx, 40, chatParser.RULE_resource);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 658;
			this.bitElem();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public gap(): GapContext {
		let _localctx: GapContext = new GapContext(this._ctx, this.state);
		this.enterRule(_localctx, 42, chatParser.RULE_gap);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 660;
			this.single_gap();
			this.state = 668;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 76, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					this.state = 666;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case chatParser.OPU:
						{
						this.state = 661;
						this.single_gap();
						}
						break;
					case chatParser.OPB:
						{
						this.state = 662;
						this.instruction();
						}
						break;
					case chatParser.OPQ:
						{
						this.state = 663;
						this.hint();
						}
						break;
					case chatParser.OPC:
						{
						this.state = 664;
						this.item();
						}
						break;
					case chatParser.AtExampleWithStr:
					case chatParser.AtExamplecol:
					case chatParser.AtExamplecl:
						{
						this.state = 665;
						this.example();
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					}
				}
				this.state = 670;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 76, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public single_gap(): Single_gapContext {
		let _localctx: Single_gapContext = new Single_gapContext(this._ctx, this.state);
		this.enterRule(_localctx, 44, chatParser.RULE_single_gap);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 671;
			this.match(chatParser.OPU);
			this.state = 675;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 77, this._ctx) ) {
			case 1:
				{
				this.state = 672;
				this.match(chatParser.NUMERIC);
				}
				break;

			case 2:
				{
				this.state = 673;
				this.match(chatParser.STRING);
				}
				break;

			case 3:
				// tslint:disable-next-line:no-empty
				{
				}
				break;
			}
			this.state = 680;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << chatParser.S) | (1 << chatParser.OPS) | (1 << chatParser.COLON) | (1 << chatParser.AMP) | (1 << chatParser.DBLCOLON))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (chatParser.Greater - 33)) | (1 << (chatParser.Less - 33)) | (1 << (chatParser.RightAngle - 33)) | (1 << (chatParser.RightArrow - 33)) | (1 << (chatParser.DBLEQ - 33)) | (1 << (chatParser.NUMERIC - 33)) | (1 << (chatParser.STRING - 33)) | (1 << (chatParser.NOTBITMARK - 33)) | (1 << (chatParser.ELIPSIS - 33)) | (1 << (chatParser.SENTENCE - 33)) | (1 << (chatParser.BARSTRING - 33)))) !== 0) || _la === chatParser.URL) {
				{
				{
				this.state = 677;
				this.s_and_w();
				}
				}
				this.state = 682;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 683;
			this.clnsp();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public dcolon(): DcolonContext {
		let _localctx: DcolonContext = new DcolonContext(this._ctx, this.state);
		this.enterRule(_localctx, 46, chatParser.RULE_dcolon);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 685;
			this.match(chatParser.DBLCOLON);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public atpoint(): AtpointContext {
		let _localctx: AtpointContext = new AtpointContext(this._ctx, this.state);
		this.enterRule(_localctx, 48, chatParser.RULE_atpoint);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 687;
			this.match(chatParser.AtPoints);
			this.state = 688;
			this.match(chatParser.NUMERIC);
			this.state = 689;
			this.match(chatParser.CL);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public format(): FormatContext {
		let _localctx: FormatContext = new FormatContext(this._ctx, this.state);
		this.enterRule(_localctx, 50, chatParser.RULE_format);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 694;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 79, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 691;
					this.resource_format();
					}
					}
				}
				this.state = 696;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 79, this._ctx);
			}
			this.state = 702;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 87)) & ~0x1F) === 0 && ((1 << (_la - 87)) & ((1 << (chatParser.AmpAudio - 87)) | (1 << (chatParser.AmpImage - 87)) | (1 << (chatParser.AmpImageZoom - 87)) | (1 << (chatParser.AmpImageWAudio - 87)) | (1 << (chatParser.AmpVideo - 87)) | (1 << (chatParser.AmpArticle - 87)) | (1 << (chatParser.AmpDocument - 87)) | (1 << (chatParser.AmpApp - 87)) | (1 << (chatParser.AmpWebsite - 87)) | (1 << (chatParser.AmpStillImageFilm - 87)) | (1 << (chatParser.AmpPdf - 87)) | (1 << (chatParser.AmpAudioLink - 87)) | (1 << (chatParser.AmpImageLink - 87)) | (1 << (chatParser.AmpVideoLink - 87)) | (1 << (chatParser.AmpArticleLink - 87)) | (1 << (chatParser.AmpDocumentLink - 87)) | (1 << (chatParser.AmpDocumentDownload - 87)) | (1 << (chatParser.AmpAppLink - 87)) | (1 << (chatParser.AmpWebsiteLink - 87)) | (1 << (chatParser.AmpStillImageFilmLink - 87)))) !== 0) || ((((_la - 129)) & ~0x1F) === 0 && ((1 << (_la - 129)) & ((1 << (chatParser.AmpVideoEmbed - 129)) | (1 << (chatParser.AmpDocumentEmbed - 129)) | (1 << (chatParser.AmpStillImageFilmEmbed - 129)) | (1 << (chatParser.ColonText - 129)) | (1 << (chatParser.ColonJson - 129)))) !== 0)) {
				{
				this.state = 700;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case chatParser.ColonText:
					{
					this.state = 697;
					this.match(chatParser.ColonText);
					}
					break;
				case chatParser.ColonJson:
					{
					this.state = 698;
					this.match(chatParser.ColonJson);
					}
					break;
				case chatParser.AmpAudio:
				case chatParser.AmpImage:
				case chatParser.AmpImageZoom:
				case chatParser.AmpImageWAudio:
				case chatParser.AmpVideo:
				case chatParser.AmpArticle:
				case chatParser.AmpDocument:
				case chatParser.AmpApp:
				case chatParser.AmpWebsite:
				case chatParser.AmpStillImageFilm:
				case chatParser.AmpPdf:
				case chatParser.AmpAudioLink:
				case chatParser.AmpImageLink:
				case chatParser.AmpVideoLink:
				case chatParser.AmpArticleLink:
				case chatParser.AmpDocumentLink:
				case chatParser.AmpDocumentDownload:
				case chatParser.AmpAppLink:
				case chatParser.AmpWebsiteLink:
				case chatParser.AmpStillImageFilmLink:
				case chatParser.AmpVideoEmbed:
				case chatParser.AmpDocumentEmbed:
				case chatParser.AmpStillImageFilmEmbed:
					{
					this.state = 699;
					this.resource_format_extra();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				this.state = 704;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public resource_format(): Resource_formatContext {
		let _localctx: Resource_formatContext = new Resource_formatContext(this._ctx, this.state);
		this.enterRule(_localctx, 52, chatParser.RULE_resource_format);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 705;
			_la = this._input.LA(1);
			if (!(((((_la - 92)) & ~0x1F) === 0 && ((1 << (_la - 92)) & ((1 << (chatParser.AmpArticle - 92)) | (1 << (chatParser.AmpDocument - 92)) | (1 << (chatParser.AmpWebsite - 92)) | (1 << (chatParser.AmpStillImageFilm - 92)) | (1 << (chatParser.AmpAudioLink - 92)) | (1 << (chatParser.AmpImageLink - 92)) | (1 << (chatParser.AmpVideoLink - 92)) | (1 << (chatParser.AmpArticleLink - 92)) | (1 << (chatParser.AmpDocumentLink - 92)) | (1 << (chatParser.AmpDocumentDownload - 92)) | (1 << (chatParser.AmpAppLink - 92)) | (1 << (chatParser.AmpWebsiteLink - 92)) | (1 << (chatParser.AmpStillImageFilmLink - 92)))) !== 0) || ((((_la - 129)) & ~0x1F) === 0 && ((1 << (_la - 129)) & ((1 << (chatParser.AmpVideoEmbed - 129)) | (1 << (chatParser.AmpAudioEmbed - 129)) | (1 << (chatParser.AmpDocumentEmbed - 129)) | (1 << (chatParser.AmpStillImageFilmEmbed - 129)) | (1 << (chatParser.BitmarkMinus - 129)) | (1 << (chatParser.BitmarkPlus - 129)) | (1 << (chatParser.ColonJson - 129)) | (1 << (chatParser.Prosemirror - 129)) | (1 << (chatParser.Placeholder - 129)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public resource_format_extra(): Resource_format_extraContext {
		let _localctx: Resource_format_extraContext = new Resource_format_extraContext(this._ctx, this.state);
		this.enterRule(_localctx, 54, chatParser.RULE_resource_format_extra);
		try {
			this.state = 716;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case chatParser.AmpImage:
			case chatParser.AmpImageZoom:
			case chatParser.AmpImageWAudio:
			case chatParser.AmpImageLink:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 707;
				this.image_format();
				}
				break;
			case chatParser.AmpAudio:
			case chatParser.AmpAudioLink:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 708;
				this.audio_format();
				}
				break;
			case chatParser.AmpVideo:
			case chatParser.AmpVideoLink:
			case chatParser.AmpVideoEmbed:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 709;
				this.video_format();
				}
				break;
			case chatParser.AmpArticle:
			case chatParser.AmpArticleLink:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 710;
				this.article_format();
				}
				break;
			case chatParser.AmpDocument:
			case chatParser.AmpDocumentLink:
			case chatParser.AmpDocumentDownload:
			case chatParser.AmpDocumentEmbed:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 711;
				this.document_format();
				}
				break;
			case chatParser.AmpApp:
			case chatParser.AmpAppLink:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 712;
				this.app_format();
				}
				break;
			case chatParser.AmpWebsite:
			case chatParser.AmpWebsiteLink:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 713;
				this.website_format();
				}
				break;
			case chatParser.AmpStillImageFilm:
			case chatParser.AmpStillImageFilmLink:
			case chatParser.AmpStillImageFilmEmbed:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 714;
				this.stillimagefilm_format();
				}
				break;
			case chatParser.AmpPdf:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 715;
				this.match(chatParser.AmpPdf);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public format2(): Format2Context {
		let _localctx: Format2Context = new Format2Context(this._ctx, this.state);
		this.enterRule(_localctx, 56, chatParser.RULE_format2);
		try {
			this.state = 723;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case chatParser.BitmarkMinus:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 718;
				this.match(chatParser.BitmarkMinus);
				}
				break;
			case chatParser.BitmarkPlus:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 719;
				this.match(chatParser.BitmarkPlus);
				}
				break;
			case chatParser.ColonText:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 720;
				this.match(chatParser.ColonText);
				}
				break;
			case chatParser.ColonJson:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 721;
				this.match(chatParser.ColonJson);
				}
				break;
			case chatParser.CL:
				this.enterOuterAlt(_localctx, 5);
				// tslint:disable-next-line:no-empty
				{
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public image_format(): Image_formatContext {
		let _localctx: Image_formatContext = new Image_formatContext(this._ctx, this.state);
		this.enterRule(_localctx, 58, chatParser.RULE_image_format);
		let _la: number;
		try {
			this.state = 739;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case chatParser.AmpImage:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 725;
				this.match(chatParser.AmpImage);
				this.state = 728;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case chatParser.Image_type:
					{
					{
					this.state = 726;
					this.match(chatParser.Image_type);
					}
					}
					break;
				case chatParser.DotArticleAtt:
					{
					{
					this.state = 727;
					this.match(chatParser.DotArticleAtt);
					}
					}
					break;
				case chatParser.CL:
				case chatParser.AmpAudio:
				case chatParser.AmpImage:
				case chatParser.AmpImageZoom:
				case chatParser.AmpImageWAudio:
				case chatParser.AmpVideo:
				case chatParser.AmpArticle:
				case chatParser.AmpDocument:
				case chatParser.AmpApp:
				case chatParser.AmpWebsite:
				case chatParser.AmpStillImageFilm:
				case chatParser.AmpPdf:
				case chatParser.AmpAudioLink:
				case chatParser.AmpImageLink:
				case chatParser.AmpVideoLink:
				case chatParser.AmpArticleLink:
				case chatParser.AmpDocumentLink:
				case chatParser.AmpDocumentDownload:
				case chatParser.AmpAppLink:
				case chatParser.AmpWebsiteLink:
				case chatParser.AmpStillImageFilmLink:
				case chatParser.AmpVideoEmbed:
				case chatParser.AmpDocumentEmbed:
				case chatParser.AmpStillImageFilmEmbed:
				case chatParser.ColonText:
				case chatParser.ColonJson:
					break;
				default:
					break;
				}
				}
				break;
			case chatParser.AmpImageLink:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 730;
				this.match(chatParser.AmpImageLink);
				this.state = 732;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === chatParser.Image_type) {
					{
					this.state = 731;
					this.match(chatParser.Image_type);
					}
				}

				}
				break;
			case chatParser.AmpImageZoom:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 734;
				this.match(chatParser.AmpImageZoom);
				this.state = 736;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === chatParser.Image_type) {
					{
					this.state = 735;
					this.match(chatParser.Image_type);
					}
				}

				}
				break;
			case chatParser.AmpImageWAudio:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 738;
				this.match(chatParser.AmpImageWAudio);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public video_format(): Video_formatContext {
		let _localctx: Video_formatContext = new Video_formatContext(this._ctx, this.state);
		this.enterRule(_localctx, 60, chatParser.RULE_video_format);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 741;
			_la = this._input.LA(1);
			if (!(_la === chatParser.AmpVideo || _la === chatParser.AmpVideoLink || _la === chatParser.AmpVideoEmbed)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 744;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === chatParser.COLON) {
				{
				this.state = 742;
				this.match(chatParser.COLON);
				this.state = 743;
				this.match(chatParser.Video_type);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public article_format(): Article_formatContext {
		let _localctx: Article_formatContext = new Article_formatContext(this._ctx, this.state);
		this.enterRule(_localctx, 62, chatParser.RULE_article_format);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 746;
			_la = this._input.LA(1);
			if (!(_la === chatParser.AmpArticle || _la === chatParser.AmpArticleLink)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public document_format(): Document_formatContext {
		let _localctx: Document_formatContext = new Document_formatContext(this._ctx, this.state);
		this.enterRule(_localctx, 64, chatParser.RULE_document_format);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 748;
			_la = this._input.LA(1);
			if (!(((((_la - 93)) & ~0x1F) === 0 && ((1 << (_la - 93)) & ((1 << (chatParser.AmpDocument - 93)) | (1 << (chatParser.AmpDocumentLink - 93)) | (1 << (chatParser.AmpDocumentDownload - 93)))) !== 0) || _la === chatParser.AmpDocumentEmbed)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public app_format(): App_formatContext {
		let _localctx: App_formatContext = new App_formatContext(this._ctx, this.state);
		this.enterRule(_localctx, 66, chatParser.RULE_app_format);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 750;
			_la = this._input.LA(1);
			if (!(_la === chatParser.AmpApp || _la === chatParser.AmpAppLink)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public website_format(): Website_formatContext {
		let _localctx: Website_formatContext = new Website_formatContext(this._ctx, this.state);
		this.enterRule(_localctx, 68, chatParser.RULE_website_format);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 752;
			_la = this._input.LA(1);
			if (!(_la === chatParser.AmpWebsite || _la === chatParser.AmpWebsiteLink)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public stillimagefilm_format(): Stillimagefilm_formatContext {
		let _localctx: Stillimagefilm_formatContext = new Stillimagefilm_formatContext(this._ctx, this.state);
		this.enterRule(_localctx, 70, chatParser.RULE_stillimagefilm_format);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 754;
			_la = this._input.LA(1);
			if (!(_la === chatParser.AmpStillImageFilm || _la === chatParser.AmpStillImageFilmLink || _la === chatParser.AmpStillImageFilmEmbed)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public op_article_format(): Op_article_formatContext {
		let _localctx: Op_article_formatContext = new Op_article_formatContext(this._ctx, this.state);
		this.enterRule(_localctx, 72, chatParser.RULE_op_article_format);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 756;
			_la = this._input.LA(1);
			if (!(_la === chatParser.OpAmpArticle || _la === chatParser.OpAmpArticleLink)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public op_document_format(): Op_document_formatContext {
		let _localctx: Op_document_formatContext = new Op_document_formatContext(this._ctx, this.state);
		this.enterRule(_localctx, 74, chatParser.RULE_op_document_format);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 758;
			_la = this._input.LA(1);
			if (!(((((_la - 105)) & ~0x1F) === 0 && ((1 << (_la - 105)) & ((1 << (chatParser.OpAmpDocument - 105)) | (1 << (chatParser.OpAmpDocumentLink - 105)) | (1 << (chatParser.OpAmpDocumentDownload - 105)) | (1 << (chatParser.OpAmpDocumentEmbed - 105)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public op_app_format(): Op_app_formatContext {
		let _localctx: Op_app_formatContext = new Op_app_formatContext(this._ctx, this.state);
		this.enterRule(_localctx, 76, chatParser.RULE_op_app_format);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 760;
			_la = this._input.LA(1);
			if (!(_la === chatParser.OpAmpApp || _la === chatParser.OpAmpAppLink)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public op_website_format(): Op_website_formatContext {
		let _localctx: Op_website_formatContext = new Op_website_formatContext(this._ctx, this.state);
		this.enterRule(_localctx, 78, chatParser.RULE_op_website_format);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 762;
			_la = this._input.LA(1);
			if (!(_la === chatParser.OpAmpWebsite || _la === chatParser.OpAmpWebsiteLink)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public op_video_format(): Op_video_formatContext {
		let _localctx: Op_video_formatContext = new Op_video_formatContext(this._ctx, this.state);
		this.enterRule(_localctx, 80, chatParser.RULE_op_video_format);
		try {
			this.state = 779;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case chatParser.OpAmpVideo:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 764;
				this.match(chatParser.OpAmpVideo);
				this.state = 767;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 89, this._ctx) ) {
				case 1:
					{
					this.state = 765;
					this.match(chatParser.COLON);
					this.state = 766;
					this.match(chatParser.Video_type);
					}
					break;
				}
				}
				break;
			case chatParser.OpAmpVideoLink:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 769;
				this.match(chatParser.OpAmpVideoLink);
				this.state = 772;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 90, this._ctx) ) {
				case 1:
					{
					this.state = 770;
					this.match(chatParser.COLON);
					this.state = 771;
					this.match(chatParser.Video_type);
					}
					break;
				}
				}
				break;
			case chatParser.OpAmpVideoEmbed:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 774;
				this.match(chatParser.OpAmpVideoEmbed);
				this.state = 777;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 91, this._ctx) ) {
				case 1:
					{
					this.state = 775;
					this.match(chatParser.COLON);
					this.state = 776;
					this.match(chatParser.Video_type);
					}
					break;
				}
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public op_stillimagefilm_format(): Op_stillimagefilm_formatContext {
		let _localctx: Op_stillimagefilm_formatContext = new Op_stillimagefilm_formatContext(this._ctx, this.state);
		this.enterRule(_localctx, 82, chatParser.RULE_op_stillimagefilm_format);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 781;
			_la = this._input.LA(1);
			if (!(((((_la - 108)) & ~0x1F) === 0 && ((1 << (_la - 108)) & ((1 << (chatParser.OpAmpStillImageFilm - 108)) | (1 << (chatParser.OpAmpStillImageFilmLink - 108)) | (1 << (chatParser.OpAmpStillImageFilmEmbed - 108)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public articlebit(): ArticlebitContext {
		let _localctx: ArticlebitContext = new ArticlebitContext(this._ctx, this.state);
		this.enterRule(_localctx, 84, chatParser.RULE_articlebit);
		try {
			this.state = 789;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case chatParser.OpAmpArticle:
			case chatParser.OpAmpArticleLink:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 783;
				this.op_article_format();
				this.state = 784;
				this.match(chatParser.COLON);
				this.state = 785;
				this.url();
				this.state = 786;
				this.match(chatParser.CL);
				}
				break;
			case chatParser.ArticleText:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 788;
				this.match(chatParser.ArticleText);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public documentbit(): DocumentbitContext {
		let _localctx: DocumentbitContext = new DocumentbitContext(this._ctx, this.state);
		this.enterRule(_localctx, 86, chatParser.RULE_documentbit);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 791;
			this.op_document_format();
			this.state = 792;
			this.match(chatParser.COLON);
			this.state = 793;
			this.url();
			this.state = 794;
			this.match(chatParser.CL);
			this.state = 799;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === chatParser.OPATALT) {
				{
				this.state = 795;
				this.match(chatParser.OPATALT);
				this.state = 796;
				this.words();
				this.state = 797;
				this.match(chatParser.CL);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public websitebit(): WebsitebitContext {
		let _localctx: WebsitebitContext = new WebsitebitContext(this._ctx, this.state);
		this.enterRule(_localctx, 88, chatParser.RULE_websitebit);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 801;
			this.op_website_format();
			this.state = 802;
			this.match(chatParser.COLON);
			this.state = 803;
			this.url();
			this.state = 804;
			this.match(chatParser.CL);
			this.state = 809;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === chatParser.OPATALT) {
				{
				this.state = 805;
				this.match(chatParser.OPATALT);
				this.state = 806;
				this.words();
				this.state = 807;
				this.match(chatParser.CL);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public appbit(): AppbitContext {
		let _localctx: AppbitContext = new AppbitContext(this._ctx, this.state);
		this.enterRule(_localctx, 90, chatParser.RULE_appbit);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 811;
			this.op_app_format();
			this.state = 812;
			this.match(chatParser.COLON);
			this.state = 815;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case chatParser.URL:
				{
				this.state = 813;
				this.url();
				}
				break;
			case chatParser.TEL:
				{
				this.state = 814;
				this.telephone();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 817;
			this.match(chatParser.CL);
			this.state = 822;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === chatParser.OPATALT) {
				{
				this.state = 818;
				this.match(chatParser.OPATALT);
				this.state = 819;
				this.words();
				this.state = 820;
				this.match(chatParser.CL);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public stillimagefilmbit(): StillimagefilmbitContext {
		let _localctx: StillimagefilmbitContext = new StillimagefilmbitContext(this._ctx, this.state);
		this.enterRule(_localctx, 92, chatParser.RULE_stillimagefilmbit);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 824;
			this.stillimg_one();
			this.state = 828;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 98, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 825;
					this.resource_chained();
					}
					}
				}
				this.state = 830;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 98, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public stillimg_one(): Stillimg_oneContext {
		let _localctx: Stillimg_oneContext = new Stillimg_oneContext(this._ctx, this.state);
		this.enterRule(_localctx, 94, chatParser.RULE_stillimg_one);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 831;
			this.op_stillimagefilm_format();
			this.state = 832;
			this.match(chatParser.COLON);
			this.state = 836;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === chatParser.S) {
				{
				{
				this.state = 833;
				this.match(chatParser.S);
				}
				}
				this.state = 838;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 839;
			this.url();
			this.state = 840;
			this.match(chatParser.CL);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public videobit(): VideobitContext {
		let _localctx: VideobitContext = new VideobitContext(this._ctx, this.state);
		this.enterRule(_localctx, 96, chatParser.RULE_videobit);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 842;
			this.video_one();
			this.state = 846;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 100, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 843;
					this.resource_chained();
					}
					}
				}
				this.state = 848;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 100, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public video_one(): Video_oneContext {
		let _localctx: Video_oneContext = new Video_oneContext(this._ctx, this.state);
		this.enterRule(_localctx, 98, chatParser.RULE_video_one);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 849;
			this.op_video_format();
			this.state = 850;
			this.match(chatParser.COLON);
			this.state = 851;
			this.url();
			this.state = 852;
			this.match(chatParser.CL);
			this.state = 857;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 101, this._ctx) ) {
			case 1:
				{
				this.state = 853;
				this.match(chatParser.OPATALT);
				this.state = 854;
				this.words();
				this.state = 855;
				this.match(chatParser.CL);
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public imagebit(): ImagebitContext {
		let _localctx: ImagebitContext = new ImagebitContext(this._ctx, this.state);
		this.enterRule(_localctx, 100, chatParser.RULE_imagebit);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 859;
			this.image_one();
			this.state = 863;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 102, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 860;
					this.image_chained();
					}
					}
				}
				this.state = 865;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 102, this._ctx);
			}
			this.state = 868;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 103, this._ctx) ) {
			case 1:
				{
				this.state = 866;
				this.match(chatParser.NL);
				this.state = 867;
				this.match(chatParser.ShowInIndex);
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public image_one(): Image_oneContext {
		let _localctx: Image_oneContext = new Image_oneContext(this._ctx, this.state);
		this.enterRule(_localctx, 102, chatParser.RULE_image_one);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 870;
			this.op_image_format();
			this.state = 871;
			this.match(chatParser.COLON);
			this.state = 875;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === chatParser.S) {
				{
				{
				this.state = 872;
				this.match(chatParser.S);
				}
				}
				this.state = 877;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 878;
			this.url();
			this.state = 879;
			this.match(chatParser.CL);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public op_image_format(): Op_image_formatContext {
		let _localctx: Op_image_formatContext = new Op_image_formatContext(this._ctx, this.state);
		this.enterRule(_localctx, 104, chatParser.RULE_op_image_format);
		let _la: number;
		try {
			this.state = 895;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case chatParser.OpAmpImage:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 881;
				this.match(chatParser.OpAmpImage);
				this.state = 884;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case chatParser.Image_type:
					{
					{
					this.state = 882;
					this.match(chatParser.Image_type);
					}
					}
					break;
				case chatParser.DotArticleAtt:
					{
					{
					this.state = 883;
					this.match(chatParser.DotArticleAtt);
					}
					}
					break;
				case chatParser.COLON:
					break;
				default:
					break;
				}
				}
				break;
			case chatParser.OpAmpImageLink:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 886;
				this.match(chatParser.OpAmpImageLink);
				this.state = 888;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === chatParser.Image_type) {
					{
					this.state = 887;
					this.match(chatParser.Image_type);
					}
				}

				}
				break;
			case chatParser.OpAmpImageZoom:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 890;
				this.match(chatParser.OpAmpImageZoom);
				this.state = 892;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === chatParser.Image_type) {
					{
					this.state = 891;
					this.match(chatParser.Image_type);
					}
				}

				}
				break;
			case chatParser.OpAmpImageWAudio:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 894;
				this.match(chatParser.OpAmpImageWAudio);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public image_chained(): Image_chainedContext {
		let _localctx: Image_chainedContext = new Image_chainedContext(this._ctx, this.state);
		this.enterRule(_localctx, 106, chatParser.RULE_image_chained);
		let _la: number;
		try {
			let _alt: number;
			this.state = 914;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case chatParser.AtSrc:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 897;
				this.match(chatParser.AtSrc);
				this.state = 898;
				this.match(chatParser.COLON);
				this.state = 899;
				this.url();
				this.state = 900;
				this.match(chatParser.CL);
				}
				break;
			case chatParser.AtWidth:
			case chatParser.AtHeight:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 902;
				_la = this._input.LA(1);
				if (!(_la === chatParser.AtWidth || _la === chatParser.AtHeight)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 903;
				this.match(chatParser.COLON);
				this.state = 904;
				this.match(chatParser.NUMERIC);
				this.state = 905;
				this.match(chatParser.CL);
				}
				break;
			case chatParser.OPATALT:
			case chatParser.OpAtCaption:
			case chatParser.OpAtLicense:
			case chatParser.OpAtCopyright:
			case chatParser.OpAtSearch:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 906;
				_la = this._input.LA(1);
				if (!(((((_la - 75)) & ~0x1F) === 0 && ((1 << (_la - 75)) & ((1 << (chatParser.OPATALT - 75)) | (1 << (chatParser.OpAtCaption - 75)) | (1 << (chatParser.OpAtLicense - 75)) | (1 << (chatParser.OpAtCopyright - 75)) | (1 << (chatParser.OpAtSearch - 75)))) !== 0))) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 910;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 109, this._ctx);
				while (_alt !== 1 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1 + 1) {
						{
						{
						this.state = 907;
						this.matchWildcard();
						}
						}
					}
					this.state = 912;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 109, this._ctx);
				}
				this.state = 913;
				this.match(chatParser.CL);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public image_chained4match(): Image_chained4matchContext {
		let _localctx: Image_chained4matchContext = new Image_chained4matchContext(this._ctx, this.state);
		this.enterRule(_localctx, 108, chatParser.RULE_image_chained4match);
		let _la: number;
		try {
			let _alt: number;
			this.state = 933;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case chatParser.AtSrc:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 916;
				this.match(chatParser.AtSrc);
				this.state = 917;
				this.match(chatParser.COLON);
				this.state = 918;
				this.url();
				this.state = 919;
				this.match(chatParser.CL);
				}
				break;
			case chatParser.AtWidth:
			case chatParser.AtHeight:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 921;
				_la = this._input.LA(1);
				if (!(_la === chatParser.AtWidth || _la === chatParser.AtHeight)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 922;
				this.match(chatParser.COLON);
				this.state = 923;
				this.match(chatParser.NUMERIC);
				this.state = 924;
				this.match(chatParser.CL);
				}
				break;
			case chatParser.OPATALT:
			case chatParser.OpAtCaption:
			case chatParser.OpAtLicense:
			case chatParser.OpAtCopyright:
			case chatParser.OpAtSearch:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 925;
				_la = this._input.LA(1);
				if (!(((((_la - 75)) & ~0x1F) === 0 && ((1 << (_la - 75)) & ((1 << (chatParser.OPATALT - 75)) | (1 << (chatParser.OpAtCaption - 75)) | (1 << (chatParser.OpAtLicense - 75)) | (1 << (chatParser.OpAtCopyright - 75)) | (1 << (chatParser.OpAtSearch - 75)))) !== 0))) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 929;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 111, this._ctx);
				while (_alt !== 1 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1 + 1) {
						{
						{
						this.state = 926;
						this.matchWildcard();
						}
						}
					}
					this.state = 931;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 111, this._ctx);
				}
				this.state = 932;
				this.match(chatParser.CL);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public audiobit(): AudiobitContext {
		let _localctx: AudiobitContext = new AudiobitContext(this._ctx, this.state);
		this.enterRule(_localctx, 110, chatParser.RULE_audiobit);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 935;
			this.audio_one();
			this.state = 939;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 113, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 936;
					this.resource_chained();
					}
					}
				}
				this.state = 941;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 113, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public audio_one(): Audio_oneContext {
		let _localctx: Audio_oneContext = new Audio_oneContext(this._ctx, this.state);
		this.enterRule(_localctx, 112, chatParser.RULE_audio_one);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 942;
			this.op_audio_format();
			this.state = 943;
			this.match(chatParser.COLON);
			this.state = 944;
			this.url();
			this.state = 945;
			this.match(chatParser.CL);
			this.state = 950;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 114, this._ctx) ) {
			case 1:
				{
				this.state = 946;
				this.match(chatParser.OPATALT);
				this.state = 947;
				this.words();
				this.state = 948;
				this.match(chatParser.CL);
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public audio_format(): Audio_formatContext {
		let _localctx: Audio_formatContext = new Audio_formatContext(this._ctx, this.state);
		this.enterRule(_localctx, 114, chatParser.RULE_audio_format);
		let _la: number;
		try {
			this.state = 962;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case chatParser.AmpAudio:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 952;
				this.match(chatParser.AmpAudio);
				this.state = 955;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === chatParser.COLON) {
					{
					this.state = 953;
					this.match(chatParser.COLON);
					this.state = 954;
					this.match(chatParser.Audio_type);
					}
				}

				}
				break;
			case chatParser.AmpAudioLink:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 957;
				this.match(chatParser.AmpAudioLink);
				this.state = 960;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === chatParser.COLON) {
					{
					this.state = 958;
					this.match(chatParser.COLON);
					this.state = 959;
					this.match(chatParser.Audio_type);
					}
				}

				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public op_audio_format(): Op_audio_formatContext {
		let _localctx: Op_audio_formatContext = new Op_audio_formatContext(this._ctx, this.state);
		this.enterRule(_localctx, 116, chatParser.RULE_op_audio_format);
		try {
			this.state = 979;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case chatParser.OpAmpAudio:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 964;
				this.match(chatParser.OpAmpAudio);
				this.state = 967;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 118, this._ctx) ) {
				case 1:
					{
					this.state = 965;
					this.match(chatParser.COLON);
					this.state = 966;
					this.match(chatParser.Audio_type);
					}
					break;
				}
				}
				break;
			case chatParser.OpAmpAudioLink:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 969;
				this.match(chatParser.OpAmpAudioLink);
				this.state = 972;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 119, this._ctx) ) {
				case 1:
					{
					this.state = 970;
					this.match(chatParser.COLON);
					this.state = 971;
					this.match(chatParser.Audio_type);
					}
					break;
				}
				}
				break;
			case chatParser.OpAmpAudioEmbed:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 974;
				this.match(chatParser.OpAmpAudioEmbed);
				this.state = 977;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 120, this._ctx) ) {
				case 1:
					{
					this.state = 975;
					this.match(chatParser.COLON);
					this.state = 976;
					this.match(chatParser.Audio_type);
					}
					break;
				}
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public resource_chained(): Resource_chainedContext {
		let _localctx: Resource_chainedContext = new Resource_chainedContext(this._ctx, this.state);
		this.enterRule(_localctx, 118, chatParser.RULE_resource_chained);
		let _la: number;
		try {
			let _alt: number;
			this.state = 1012;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case chatParser.OPA:
			case chatParser.AtSrc:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 984;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case chatParser.OPA:
					{
					this.state = 981;
					this.match(chatParser.OPA);
					this.state = 982;
					this.s_and_w();
					}
					break;
				case chatParser.AtSrc:
					{
					this.state = 983;
					this.match(chatParser.AtSrc);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 986;
				this.match(chatParser.COLON);
				this.state = 990;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 123, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 987;
						this.match(chatParser.S);
						}
						}
					}
					this.state = 992;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 123, this._ctx);
				}
				this.state = 995;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					this.state = 995;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case chatParser.S:
					case chatParser.OPS:
					case chatParser.COLON:
					case chatParser.AMP:
					case chatParser.DBLCOLON:
					case chatParser.Greater:
					case chatParser.Less:
					case chatParser.RightAngle:
					case chatParser.RightArrow:
					case chatParser.DBLEQ:
					case chatParser.NUMERIC:
					case chatParser.STRING:
					case chatParser.NOTBITMARK:
					case chatParser.ELIPSIS:
					case chatParser.SENTENCE:
					case chatParser.BARSTRING:
					case chatParser.URL:
						{
						this.state = 993;
						this.s_and_w();
						}
						break;
					case chatParser.NL:
						{
						this.state = 994;
						this.match(chatParser.NL);
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					}
					this.state = 997;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << chatParser.S) | (1 << chatParser.OPS) | (1 << chatParser.COLON) | (1 << chatParser.AMP) | (1 << chatParser.DBLCOLON))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (chatParser.Greater - 33)) | (1 << (chatParser.Less - 33)) | (1 << (chatParser.RightAngle - 33)) | (1 << (chatParser.RightArrow - 33)) | (1 << (chatParser.DBLEQ - 33)) | (1 << (chatParser.NUMERIC - 33)) | (1 << (chatParser.STRING - 33)) | (1 << (chatParser.NL - 33)) | (1 << (chatParser.NOTBITMARK - 33)) | (1 << (chatParser.ELIPSIS - 33)) | (1 << (chatParser.SENTENCE - 33)) | (1 << (chatParser.BARSTRING - 33)))) !== 0) || _la === chatParser.URL);
				this.state = 999;
				this.match(chatParser.CL);
				}
				break;
			case chatParser.AtWidth:
			case chatParser.AtHeight:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1000;
				_la = this._input.LA(1);
				if (!(_la === chatParser.AtWidth || _la === chatParser.AtHeight)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 1001;
				this.match(chatParser.COLON);
				this.state = 1002;
				this.match(chatParser.NUMERIC);
				this.state = 1003;
				this.match(chatParser.CL);
				}
				break;
			case chatParser.OPATALT:
			case chatParser.OpAtCaption:
			case chatParser.OpAtLicense:
			case chatParser.OpAtCopyright:
			case chatParser.OpAtSearch:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1004;
				_la = this._input.LA(1);
				if (!(((((_la - 75)) & ~0x1F) === 0 && ((1 << (_la - 75)) & ((1 << (chatParser.OPATALT - 75)) | (1 << (chatParser.OpAtCaption - 75)) | (1 << (chatParser.OpAtLicense - 75)) | (1 << (chatParser.OpAtCopyright - 75)) | (1 << (chatParser.OpAtSearch - 75)))) !== 0))) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 1008;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 126, this._ctx);
				while (_alt !== 1 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1 + 1) {
						{
						{
						this.state = 1005;
						this.matchWildcard();
						}
						}
					}
					this.state = 1010;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 126, this._ctx);
				}
				this.state = 1011;
				this.match(chatParser.CL);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public telephone(): TelephoneContext {
		let _localctx: TelephoneContext = new TelephoneContext(this._ctx, this.state);
		this.enterRule(_localctx, 120, chatParser.RULE_telephone);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1014;
			this.match(chatParser.TEL);
			this.state = 1015;
			this.match(chatParser.PLUS);
			this.state = 1016;
			this.match(chatParser.NUMERIC);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public url(): UrlContext {
		let _localctx: UrlContext = new UrlContext(this._ctx, this.state);
		this.enterRule(_localctx, 122, chatParser.RULE_url);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1018;
			this.match(chatParser.URL);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public item(): ItemContext {
		let _localctx: ItemContext = new ItemContext(this._ctx, this.state);
		this.enterRule(_localctx, 124, chatParser.RULE_item);
		let _la: number;
		try {
			this.state = 1050;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 134, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1020;
				this.match(chatParser.OPC);
				this.state = 1021;
				this.match(chatParser.CL);
				this.state = 1029;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 129, this._ctx) ) {
				case 1:
					{
					this.state = 1025;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === chatParser.S) {
						{
						{
						this.state = 1022;
						this.match(chatParser.S);
						}
						}
						this.state = 1027;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					this.state = 1028;
					this.lead();
					}
					break;
				}
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1031;
				this.match(chatParser.OPC);
				this.state = 1032;
				this.s_and_w();
				this.state = 1037;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (((((_la - 28)) & ~0x1F) === 0 && ((1 << (_la - 28)) & ((1 << (chatParser.COLON - 28)) | (1 << (chatParser.AMP - 28)) | (1 << (chatParser.Greater - 28)) | (1 << (chatParser.Less - 28)) | (1 << (chatParser.RightAngle - 28)) | (1 << (chatParser.RightArrow - 28)) | (1 << (chatParser.DBLEQ - 28)) | (1 << (chatParser.NOTBITMARK - 28)) | (1 << (chatParser.ELIPSIS - 28)) | (1 << (chatParser.SENTENCE - 28)) | (1 << (chatParser.BARSTRING - 28)))) !== 0)) {
					{
					this.state = 1035;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case chatParser.COLON:
						{
						this.state = 1033;
						this.match(chatParser.COLON);
						}
						break;
					case chatParser.AMP:
					case chatParser.Greater:
					case chatParser.Less:
					case chatParser.RightAngle:
					case chatParser.RightArrow:
					case chatParser.DBLEQ:
					case chatParser.NOTBITMARK:
					case chatParser.ELIPSIS:
					case chatParser.SENTENCE:
					case chatParser.BARSTRING:
						{
						this.state = 1034;
						this.words();
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					}
					this.state = 1039;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1040;
				this.match(chatParser.CL);
				this.state = 1048;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 133, this._ctx) ) {
				case 1:
					{
					this.state = 1044;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === chatParser.S) {
						{
						{
						this.state = 1041;
						this.match(chatParser.S);
						}
						}
						this.state = 1046;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					this.state = 1047;
					this.lead();
					}
					break;
				}
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public lead(): LeadContext {
		let _localctx: LeadContext = new LeadContext(this._ctx, this.state);
		this.enterRule(_localctx, 126, chatParser.RULE_lead);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1052;
			this.match(chatParser.OPC);
			this.state = 1053;
			this.s_and_w();
			this.state = 1058;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 28)) & ~0x1F) === 0 && ((1 << (_la - 28)) & ((1 << (chatParser.COLON - 28)) | (1 << (chatParser.AMP - 28)) | (1 << (chatParser.Greater - 28)) | (1 << (chatParser.Less - 28)) | (1 << (chatParser.RightAngle - 28)) | (1 << (chatParser.RightArrow - 28)) | (1 << (chatParser.DBLEQ - 28)) | (1 << (chatParser.NOTBITMARK - 28)) | (1 << (chatParser.ELIPSIS - 28)) | (1 << (chatParser.SENTENCE - 28)) | (1 << (chatParser.BARSTRING - 28)))) !== 0)) {
				{
				this.state = 1056;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case chatParser.COLON:
					{
					this.state = 1054;
					this.match(chatParser.COLON);
					}
					break;
				case chatParser.AMP:
				case chatParser.Greater:
				case chatParser.Less:
				case chatParser.RightAngle:
				case chatParser.RightArrow:
				case chatParser.DBLEQ:
				case chatParser.NOTBITMARK:
				case chatParser.ELIPSIS:
				case chatParser.SENTENCE:
				case chatParser.BARSTRING:
					{
					this.state = 1055;
					this.words();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				this.state = 1060;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1061;
			this.match(chatParser.CL);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public angleref(): AnglerefContext {
		let _localctx: AnglerefContext = new AnglerefContext(this._ctx, this.state);
		this.enterRule(_localctx, 128, chatParser.RULE_angleref);
		let _la: number;
		try {
			this.state = 1073;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case chatParser.OPRANGLES:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1063;
				this.match(chatParser.OPRANGLES);
				this.state = 1065;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << chatParser.S) | (1 << chatParser.OPS) | (1 << chatParser.COLON) | (1 << chatParser.AMP) | (1 << chatParser.DBLCOLON))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (chatParser.Greater - 33)) | (1 << (chatParser.Less - 33)) | (1 << (chatParser.RightAngle - 33)) | (1 << (chatParser.RightArrow - 33)) | (1 << (chatParser.DBLEQ - 33)) | (1 << (chatParser.NUMERIC - 33)) | (1 << (chatParser.STRING - 33)) | (1 << (chatParser.NOTBITMARK - 33)) | (1 << (chatParser.ELIPSIS - 33)) | (1 << (chatParser.SENTENCE - 33)) | (1 << (chatParser.BARSTRING - 33)))) !== 0) || _la === chatParser.URL) {
					{
					this.state = 1064;
					this.s_and_w();
					}
				}

				this.state = 1067;
				this.match(chatParser.CL);
				}
				break;
			case chatParser.OPRANGLEL:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1068;
				this.match(chatParser.OPRANGLEL);
				this.state = 1070;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << chatParser.S) | (1 << chatParser.OPS) | (1 << chatParser.COLON) | (1 << chatParser.AMP) | (1 << chatParser.DBLCOLON))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (chatParser.Greater - 33)) | (1 << (chatParser.Less - 33)) | (1 << (chatParser.RightAngle - 33)) | (1 << (chatParser.RightArrow - 33)) | (1 << (chatParser.DBLEQ - 33)) | (1 << (chatParser.NUMERIC - 33)) | (1 << (chatParser.STRING - 33)) | (1 << (chatParser.NOTBITMARK - 33)) | (1 << (chatParser.ELIPSIS - 33)) | (1 << (chatParser.SENTENCE - 33)) | (1 << (chatParser.BARSTRING - 33)))) !== 0) || _la === chatParser.URL) {
					{
					this.state = 1069;
					this.s_and_w();
					}
				}

				this.state = 1072;
				this.match(chatParser.CL);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public example(): ExampleContext {
		let _localctx: ExampleContext = new ExampleContext(this._ctx, this.state);
		this.enterRule(_localctx, 130, chatParser.RULE_example);
		let _la: number;
		try {
			this.state = 1082;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case chatParser.AtExamplecl:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1075;
				this.match(chatParser.AtExamplecl);
				}
				break;
			case chatParser.AtExampleWithStr:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1076;
				this.match(chatParser.AtExampleWithStr);
				}
				break;
			case chatParser.AtExamplecol:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1077;
				this.match(chatParser.AtExamplecol);
				this.state = 1079;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === chatParser.SENTENCE) {
					{
					this.state = 1078;
					this.match(chatParser.SENTENCE);
					}
				}

				this.state = 1081;
				this.match(chatParser.EOF);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public bracketed_text(): Bracketed_textContext {
		let _localctx: Bracketed_textContext = new Bracketed_textContext(this._ctx, this.state);
		this.enterRule(_localctx, 132, chatParser.RULE_bracketed_text);
		let _la: number;
		try {
			let _alt: number;
			this.state = 1123;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 149, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1084;
				this.match(chatParser.BracEnclose);
				this.state = 1086;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 142, this._ctx) ) {
				case 1:
					{
					this.state = 1085;
					this.s_and_w();
					}
					break;
				}
				this.state = 1109;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << chatParser.S) | (1 << chatParser.OPS) | (1 << chatParser.COLON) | (1 << chatParser.AMP) | (1 << chatParser.DBLCOLON))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (chatParser.Greater - 33)) | (1 << (chatParser.Less - 33)) | (1 << (chatParser.RightAngle - 33)) | (1 << (chatParser.RightArrow - 33)) | (1 << (chatParser.DBLEQ - 33)) | (1 << (chatParser.NUMERIC - 33)) | (1 << (chatParser.STRING - 33)) | (1 << (chatParser.NOTBITMARK - 33)) | (1 << (chatParser.ELIPSIS - 33)) | (1 << (chatParser.SENTENCE - 33)) | (1 << (chatParser.BARSTRING - 33)))) !== 0) || _la === chatParser.URL) {
					{
					{
					this.state = 1088;
					this.s_and_w();
					this.state = 1098;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 144, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 1089;
							this.match(chatParser.NL);
							this.state = 1093;
							this._errHandler.sync(this);
							_alt = this.interpreter.adaptivePredict(this._input, 143, this._ctx);
							while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
								if (_alt === 1) {
									{
									{
									this.state = 1090;
									this.match(chatParser.S);
									}
									}
								}
								this.state = 1095;
								this._errHandler.sync(this);
								_alt = this.interpreter.adaptivePredict(this._input, 143, this._ctx);
							}
							}
							}
						}
						this.state = 1100;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 144, this._ctx);
					}
					this.state = 1104;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === chatParser.NL) {
						{
						{
						this.state = 1101;
						this.match(chatParser.NL);
						}
						}
						this.state = 1106;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
					}
					this.state = 1111;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1112;
				this.match(chatParser.CL);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1113;
				this.match(chatParser.BracEnclose);
				this.state = 1119;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << chatParser.S) | (1 << chatParser.OPS) | (1 << chatParser.COLON) | (1 << chatParser.AMP) | (1 << chatParser.DBLCOLON))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (chatParser.Greater - 33)) | (1 << (chatParser.Less - 33)) | (1 << (chatParser.RightAngle - 33)) | (1 << (chatParser.RightArrow - 33)) | (1 << (chatParser.DBLEQ - 33)) | (1 << (chatParser.NUMERIC - 33)) | (1 << (chatParser.STRING - 33)) | (1 << (chatParser.NL - 33)) | (1 << (chatParser.NOTBITMARK - 33)) | (1 << (chatParser.ELIPSIS - 33)) | (1 << (chatParser.SENTENCE - 33)) | (1 << (chatParser.BARSTRING - 33)))) !== 0) || _la === chatParser.URL) {
					{
					this.state = 1117;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 147, this._ctx) ) {
					case 1:
						{
						this.state = 1114;
						this.s_and_w();
						}
						break;

					case 2:
						{
						this.state = 1115;
						this.match(chatParser.NL);
						}
						break;

					case 3:
						{
						this.state = 1116;
						this.match(chatParser.S);
						}
						break;
					}
					}
					this.state = 1121;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1122;
				this.match(chatParser.EOF);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public reference(): ReferenceContext {
		let _localctx: ReferenceContext = new ReferenceContext(this._ctx, this.state);
		this.enterRule(_localctx, 134, chatParser.RULE_reference);
		let _la: number;
		try {
			this.state = 1147;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 154, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1125;
				this.match(chatParser.AtReference);
				this.state = 1130;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					this.state = 1130;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 150, this._ctx) ) {
					case 1:
						{
						this.state = 1126;
						this.s_and_w();
						}
						break;

					case 2:
						{
						this.state = 1127;
						this.match(chatParser.COLON);
						}
						break;

					case 3:
						{
						this.state = 1128;
						this.match(chatParser.URL);
						}
						break;

					case 4:
						{
						this.state = 1129;
						this.match(chatParser.NL);
						}
						break;
					}
					}
					this.state = 1132;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << chatParser.S) | (1 << chatParser.OPS) | (1 << chatParser.COLON) | (1 << chatParser.AMP) | (1 << chatParser.DBLCOLON))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (chatParser.Greater - 33)) | (1 << (chatParser.Less - 33)) | (1 << (chatParser.RightAngle - 33)) | (1 << (chatParser.RightArrow - 33)) | (1 << (chatParser.DBLEQ - 33)) | (1 << (chatParser.NUMERIC - 33)) | (1 << (chatParser.STRING - 33)) | (1 << (chatParser.NL - 33)) | (1 << (chatParser.NOTBITMARK - 33)) | (1 << (chatParser.ELIPSIS - 33)) | (1 << (chatParser.SENTENCE - 33)) | (1 << (chatParser.BARSTRING - 33)))) !== 0) || _la === chatParser.URL);
				this.state = 1134;
				this.match(chatParser.CL);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1135;
				this.match(chatParser.AtReference);
				this.state = 1143;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << chatParser.S) | (1 << chatParser.OPS) | (1 << chatParser.COLON) | (1 << chatParser.AMP) | (1 << chatParser.DBLCOLON))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (chatParser.Greater - 33)) | (1 << (chatParser.Less - 33)) | (1 << (chatParser.RightAngle - 33)) | (1 << (chatParser.RightArrow - 33)) | (1 << (chatParser.DBLEQ - 33)) | (1 << (chatParser.NUMERIC - 33)) | (1 << (chatParser.STRING - 33)) | (1 << (chatParser.NL - 33)) | (1 << (chatParser.NOTBITMARK - 33)) | (1 << (chatParser.ELIPSIS - 33)) | (1 << (chatParser.SENTENCE - 33)) | (1 << (chatParser.BARSTRING - 33)))) !== 0) || _la === chatParser.URL) {
					{
					this.state = 1141;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 152, this._ctx) ) {
					case 1:
						{
						this.state = 1136;
						this.s_and_w();
						}
						break;

					case 2:
						{
						this.state = 1137;
						this.match(chatParser.COLON);
						}
						break;

					case 3:
						{
						this.state = 1138;
						this.match(chatParser.URL);
						}
						break;

					case 4:
						{
						this.state = 1139;
						this.match(chatParser.NL);
						}
						break;

					case 5:
						{
						this.state = 1140;
						this.match(chatParser.S);
						}
						break;
					}
					}
					this.state = 1145;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1146;
				this.match(chatParser.EOF);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public progress(): ProgressContext {
		let _localctx: ProgressContext = new ProgressContext(this._ctx, this.state);
		this.enterRule(_localctx, 136, chatParser.RULE_progress);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1149;
			this.match(chatParser.AtProgress);
			this.state = 1150;
			this.s_and_w();
			this.state = 1151;
			this.match(chatParser.CL);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public dateprop(): DatepropContext {
		let _localctx: DatepropContext = new DatepropContext(this._ctx, this.state);
		this.enterRule(_localctx, 138, chatParser.RULE_dateprop);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1153;
			this.match(chatParser.AtDate);
			this.state = 1157;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				this.state = 1157;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 155, this._ctx) ) {
				case 1:
					{
					this.state = 1154;
					this.s_and_w();
					}
					break;

				case 2:
					{
					this.state = 1155;
					this.match(chatParser.COLON);
					}
					break;

				case 3:
					{
					this.state = 1156;
					this.match(chatParser.NL);
					}
					break;
				}
				}
				this.state = 1159;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << chatParser.S) | (1 << chatParser.OPS) | (1 << chatParser.COLON) | (1 << chatParser.AMP) | (1 << chatParser.DBLCOLON))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (chatParser.Greater - 33)) | (1 << (chatParser.Less - 33)) | (1 << (chatParser.RightAngle - 33)) | (1 << (chatParser.RightArrow - 33)) | (1 << (chatParser.DBLEQ - 33)) | (1 << (chatParser.NUMERIC - 33)) | (1 << (chatParser.STRING - 33)) | (1 << (chatParser.NL - 33)) | (1 << (chatParser.NOTBITMARK - 33)) | (1 << (chatParser.ELIPSIS - 33)) | (1 << (chatParser.SENTENCE - 33)) | (1 << (chatParser.BARSTRING - 33)))) !== 0) || _la === chatParser.URL);
			this.state = 1161;
			this.match(chatParser.CL);
			this.state = 1163;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === chatParser.AtDate) {
				{
				this.state = 1162;
				this.dateprop_chained();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public dateprop_chained(): Dateprop_chainedContext {
		let _localctx: Dateprop_chainedContext = new Dateprop_chainedContext(this._ctx, this.state);
		this.enterRule(_localctx, 140, chatParser.RULE_dateprop_chained);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1165;
			this.match(chatParser.AtDate);
			this.state = 1169;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				this.state = 1169;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 158, this._ctx) ) {
				case 1:
					{
					this.state = 1166;
					this.s_and_w();
					}
					break;

				case 2:
					{
					this.state = 1167;
					this.match(chatParser.COLON);
					}
					break;

				case 3:
					{
					this.state = 1168;
					this.match(chatParser.NL);
					}
					break;
				}
				}
				this.state = 1171;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << chatParser.S) | (1 << chatParser.OPS) | (1 << chatParser.COLON) | (1 << chatParser.AMP) | (1 << chatParser.DBLCOLON))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (chatParser.Greater - 33)) | (1 << (chatParser.Less - 33)) | (1 << (chatParser.RightAngle - 33)) | (1 << (chatParser.RightArrow - 33)) | (1 << (chatParser.DBLEQ - 33)) | (1 << (chatParser.NUMERIC - 33)) | (1 << (chatParser.STRING - 33)) | (1 << (chatParser.NL - 33)) | (1 << (chatParser.NOTBITMARK - 33)) | (1 << (chatParser.ELIPSIS - 33)) | (1 << (chatParser.SENTENCE - 33)) | (1 << (chatParser.BARSTRING - 33)))) !== 0) || _la === chatParser.URL);
			this.state = 1173;
			this.match(chatParser.CL);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public instruction(): InstructionContext {
		let _localctx: InstructionContext = new InstructionContext(this._ctx, this.state);
		this.enterRule(_localctx, 142, chatParser.RULE_instruction);
		let _la: number;
		try {
			let _alt: number;
			this.state = 1221;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 168, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1175;
				this.match(chatParser.OPB);
				this.state = 1179;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === chatParser.NL) {
					{
					{
					this.state = 1176;
					this.match(chatParser.NL);
					}
					}
					this.state = 1181;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1183;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 161, this._ctx) ) {
				case 1:
					{
					this.state = 1182;
					this.s_and_w();
					}
					break;
				}
				this.state = 1206;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << chatParser.S) | (1 << chatParser.OPS) | (1 << chatParser.COLON) | (1 << chatParser.AMP) | (1 << chatParser.DBLCOLON))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (chatParser.Greater - 33)) | (1 << (chatParser.Less - 33)) | (1 << (chatParser.RightAngle - 33)) | (1 << (chatParser.RightArrow - 33)) | (1 << (chatParser.DBLEQ - 33)) | (1 << (chatParser.NUMERIC - 33)) | (1 << (chatParser.STRING - 33)) | (1 << (chatParser.NOTBITMARK - 33)) | (1 << (chatParser.ELIPSIS - 33)) | (1 << (chatParser.SENTENCE - 33)) | (1 << (chatParser.BARSTRING - 33)))) !== 0) || _la === chatParser.URL) {
					{
					{
					this.state = 1185;
					this.s_and_w();
					this.state = 1195;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 163, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 1186;
							this.match(chatParser.NL);
							this.state = 1190;
							this._errHandler.sync(this);
							_alt = this.interpreter.adaptivePredict(this._input, 162, this._ctx);
							while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
								if (_alt === 1) {
									{
									{
									this.state = 1187;
									this.match(chatParser.S);
									}
									}
								}
								this.state = 1192;
								this._errHandler.sync(this);
								_alt = this.interpreter.adaptivePredict(this._input, 162, this._ctx);
							}
							}
							}
						}
						this.state = 1197;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 163, this._ctx);
					}
					this.state = 1201;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === chatParser.NL) {
						{
						{
						this.state = 1198;
						this.match(chatParser.NL);
						}
						}
						this.state = 1203;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
					}
					this.state = 1208;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1209;
				this.match(chatParser.CL);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1210;
				this.match(chatParser.OPB);
				this.state = 1214;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === chatParser.NL) {
					{
					{
					this.state = 1211;
					this.match(chatParser.NL);
					}
					}
					this.state = 1216;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1218;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << chatParser.S) | (1 << chatParser.OPS) | (1 << chatParser.COLON) | (1 << chatParser.AMP) | (1 << chatParser.DBLCOLON))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (chatParser.Greater - 33)) | (1 << (chatParser.Less - 33)) | (1 << (chatParser.RightAngle - 33)) | (1 << (chatParser.RightArrow - 33)) | (1 << (chatParser.DBLEQ - 33)) | (1 << (chatParser.NUMERIC - 33)) | (1 << (chatParser.STRING - 33)) | (1 << (chatParser.NOTBITMARK - 33)) | (1 << (chatParser.ELIPSIS - 33)) | (1 << (chatParser.SENTENCE - 33)) | (1 << (chatParser.BARSTRING - 33)))) !== 0) || _la === chatParser.URL) {
					{
					this.state = 1217;
					this.s_and_w();
					}
				}

				this.state = 1220;
				this.match(chatParser.EOF);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public hint(): HintContext {
		let _localctx: HintContext = new HintContext(this._ctx, this.state);
		this.enterRule(_localctx, 144, chatParser.RULE_hint);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1223;
			this.match(chatParser.OPQ);
			this.state = 1225;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 1224;
				_la = this._input.LA(1);
				if (_la <= 0 || (_la === chatParser.CL)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				}
				}
				this.state = 1227;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << chatParser.OPDOT) | (1 << chatParser.S) | (1 << chatParser.BitChat) | (1 << chatParser.BitConv) | (1 << chatParser.BitConversationLeft1) | (1 << chatParser.BitConversationRight1) | (1 << chatParser.BitConversationRight1Thought) | (1 << chatParser.BitConversationRight1Scream) | (1 << chatParser.BitConversationLeft1Thought) | (1 << chatParser.BitConversationLeft1Scream) | (1 << chatParser.OPDOLL) | (1 << chatParser.OPBUL) | (1 << chatParser.OPESC) | (1 << chatParser.OPRANGLES) | (1 << chatParser.OPRANGLEL) | (1 << chatParser.OPDANGLE) | (1 << chatParser.OPU) | (1 << chatParser.OPB) | (1 << chatParser.OPQ) | (1 << chatParser.OPA) | (1 << chatParser.OPP) | (1 << chatParser.OPM) | (1 << chatParser.OPS) | (1 << chatParser.OPR) | (1 << chatParser.OPC) | (1 << chatParser.OPHASH) | (1 << chatParser.COLON) | (1 << chatParser.AMP) | (1 << chatParser.DBLCOLON) | (1 << chatParser.PLUS))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (chatParser.DotAt - 32)) | (1 << (chatParser.Greater - 32)) | (1 << (chatParser.Less - 32)) | (1 << (chatParser.RightAngle - 32)) | (1 << (chatParser.RightArrow - 32)) | (1 << (chatParser.DBLEQ - 32)) | (1 << (chatParser.HSPL - 32)) | (1 << (chatParser.HSPL2 - 32)) | (1 << (chatParser.SSPL - 32)) | (1 << (chatParser.SSPL2 - 32)) | (1 << (chatParser.COMMENT - 32)) | (1 << (chatParser.DCANY - 32)) | (1 << (chatParser.Image_type - 32)) | (1 << (chatParser.Audio_type - 32)) | (1 << (chatParser.Video_type - 32)) | (1 << (chatParser.ArticleText - 32)) | (1 << (chatParser.NOTCL - 32)) | (1 << (chatParser.NUMERIC - 32)) | (1 << (chatParser.STRING - 32)) | (1 << (chatParser.NL - 32)) | (1 << (chatParser.NOTBITMARK - 32)) | (1 << (chatParser.ELIPSIS - 32)) | (1 << (chatParser.SENTENCE - 32)) | (1 << (chatParser.BARSTRING - 32)) | (1 << (chatParser.OPAT - 32)) | (1 << (chatParser.AtProgress - 32)) | (1 << (chatParser.AtReference - 32)) | (1 << (chatParser.AtWidth - 32)) | (1 << (chatParser.AtHeight - 32)) | (1 << (chatParser.AtProgressPoints - 32)) | (1 << (chatParser.AtShortanswer - 32)) | (1 << (chatParser.AtLonganswer - 32)))) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (chatParser.AtExampleWithStr - 64)) | (1 << (chatParser.AtExamplecol - 64)) | (1 << (chatParser.AtExamplecl - 64)) | (1 << (chatParser.AtSampleSolution - 64)) | (1 << (chatParser.AtPartialAnswerS - 64)) | (1 << (chatParser.AtPartialAnswer - 64)) | (1 << (chatParser.AtLabeltrue - 64)) | (1 << (chatParser.AtLabelfalse - 64)) | (1 << (chatParser.AtPoints - 64)) | (1 << (chatParser.AtSrc - 64)) | (1 << (chatParser.AtPartner - 64)) | (1 << (chatParser.OPATALT - 64)) | (1 << (chatParser.OPAMARK - 64)) | (1 << (chatParser.ShowInIndex - 64)) | (1 << (chatParser.OpAtCaption - 64)) | (1 << (chatParser.OpAtLicense - 64)) | (1 << (chatParser.OpAtCopyright - 64)) | (1 << (chatParser.OpAtSearch - 64)) | (1 << (chatParser.OpAtIsTracked - 64)) | (1 << (chatParser.OpAtIsInfoOnly - 64)) | (1 << (chatParser.AtDate - 64)) | (1 << (chatParser.Http - 64)) | (1 << (chatParser.Https - 64)) | (1 << (chatParser.AmpAudio - 64)) | (1 << (chatParser.AmpImage - 64)) | (1 << (chatParser.AmpImageZoom - 64)) | (1 << (chatParser.AmpImageWAudio - 64)) | (1 << (chatParser.AmpVideo - 64)) | (1 << (chatParser.AmpArticle - 64)) | (1 << (chatParser.AmpDocument - 64)) | (1 << (chatParser.AmpApp - 64)) | (1 << (chatParser.AmpWebsite - 64)))) !== 0) || ((((_la - 96)) & ~0x1F) === 0 && ((1 << (_la - 96)) & ((1 << (chatParser.AmpStillImageFilm - 96)) | (1 << (chatParser.AmpPdf - 96)) | (1 << (chatParser.OpAmpAudio - 96)) | (1 << (chatParser.OpAmpImage - 96)) | (1 << (chatParser.OpAmpImageZoom - 96)) | (1 << (chatParser.OpAmpImageWAudio - 96)) | (1 << (chatParser.OpAmpVideo - 96)) | (1 << (chatParser.OpAmpArticle - 96)) | (1 << (chatParser.OpAmpArticleAtt - 96)) | (1 << (chatParser.OpAmpDocument - 96)) | (1 << (chatParser.OpAmpApp - 96)) | (1 << (chatParser.OpAmpWebsite - 96)) | (1 << (chatParser.OpAmpStillImageFilm - 96)) | (1 << (chatParser.BracEnclose - 96)) | (1 << (chatParser.AmpAudioLink - 96)) | (1 << (chatParser.AmpImageLink - 96)) | (1 << (chatParser.AmpVideoLink - 96)) | (1 << (chatParser.AmpArticleLink - 96)) | (1 << (chatParser.AmpDocumentLink - 96)) | (1 << (chatParser.AmpDocumentDownload - 96)) | (1 << (chatParser.AmpAppLink - 96)) | (1 << (chatParser.AmpWebsiteLink - 96)) | (1 << (chatParser.AmpStillImageFilmLink - 96)) | (1 << (chatParser.OpAmpAudioLink - 96)) | (1 << (chatParser.OpAmpImageLink - 96)) | (1 << (chatParser.OpAmpVideoLink - 96)) | (1 << (chatParser.OpAmpArticleLink - 96)) | (1 << (chatParser.OpAmpDocumentLink - 96)) | (1 << (chatParser.OpAmpDocumentDownload - 96)) | (1 << (chatParser.OpAmpAppLink - 96)) | (1 << (chatParser.OpAmpWebsiteLink - 96)) | (1 << (chatParser.OpAmpStillImageFilmLink - 96)))) !== 0) || ((((_la - 128)) & ~0x1F) === 0 && ((1 << (_la - 128)) & ((1 << (chatParser.AmpImageEmbed - 128)) | (1 << (chatParser.AmpVideoEmbed - 128)) | (1 << (chatParser.AmpAudioEmbed - 128)) | (1 << (chatParser.AmpDocumentEmbed - 128)) | (1 << (chatParser.AmpStillImageFilmEmbed - 128)) | (1 << (chatParser.OpAmpImageEmbed - 128)) | (1 << (chatParser.OpAmpVideoEmbed - 128)) | (1 << (chatParser.OpAmpAudioEmbed - 128)) | (1 << (chatParser.OpAmpDocumentEmbed - 128)) | (1 << (chatParser.OpAmpStillImageFilmEmbed - 128)) | (1 << (chatParser.BitmarkMinus - 128)) | (1 << (chatParser.BitmarkPlus - 128)) | (1 << (chatParser.ColonText - 128)) | (1 << (chatParser.ColonJson - 128)) | (1 << (chatParser.Prosemirror - 128)) | (1 << (chatParser.Placeholder - 128)) | (1 << (chatParser.BASIC - 128)) | (1 << (chatParser.JPG - 128)) | (1 << (chatParser.PNG - 128)) | (1 << (chatParser.GIF - 128)) | (1 << (chatParser.SVG - 128)) | (1 << (chatParser.MP2 - 128)) | (1 << (chatParser.MP3 - 128)) | (1 << (chatParser.MP4 - 128)) | (1 << (chatParser.FLV - 128)) | (1 << (chatParser.WMV - 128)) | (1 << (chatParser.MPEG - 128)) | (1 << (chatParser.MPG - 128)) | (1 << (chatParser.TEL - 128)) | (1 << (chatParser.DotArticleAtt - 128)) | (1 << (chatParser.STAR - 128)) | (1 << (chatParser.URL - 128)))) !== 0) || _la === chatParser.LIST_LINE || _la === chatParser.ENCLBARS);
			this.state = 1229;
			this.match(chatParser.CL);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public title(): TitleContext {
		let _localctx: TitleContext = new TitleContext(this._ctx, this.state);
		this.enterRule(_localctx, 146, chatParser.RULE_title);
		let _la: number;
		try {
			this.state = 1243;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 172, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1231;
				this.match(chatParser.OPHASH);
				this.state = 1234;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					this.state = 1234;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case chatParser.S:
					case chatParser.OPS:
					case chatParser.COLON:
					case chatParser.AMP:
					case chatParser.DBLCOLON:
					case chatParser.Greater:
					case chatParser.Less:
					case chatParser.RightAngle:
					case chatParser.RightArrow:
					case chatParser.DBLEQ:
					case chatParser.NUMERIC:
					case chatParser.STRING:
					case chatParser.NOTBITMARK:
					case chatParser.ELIPSIS:
					case chatParser.SENTENCE:
					case chatParser.BARSTRING:
					case chatParser.URL:
						{
						this.state = 1232;
						this.s_and_w();
						}
						break;
					case chatParser.NL:
						{
						this.state = 1233;
						this.match(chatParser.NL);
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					}
					this.state = 1236;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << chatParser.S) | (1 << chatParser.OPS) | (1 << chatParser.COLON) | (1 << chatParser.AMP) | (1 << chatParser.DBLCOLON))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (chatParser.Greater - 33)) | (1 << (chatParser.Less - 33)) | (1 << (chatParser.RightAngle - 33)) | (1 << (chatParser.RightArrow - 33)) | (1 << (chatParser.DBLEQ - 33)) | (1 << (chatParser.NUMERIC - 33)) | (1 << (chatParser.STRING - 33)) | (1 << (chatParser.NL - 33)) | (1 << (chatParser.NOTBITMARK - 33)) | (1 << (chatParser.ELIPSIS - 33)) | (1 << (chatParser.SENTENCE - 33)) | (1 << (chatParser.BARSTRING - 33)))) !== 0) || _la === chatParser.URL);
				this.state = 1238;
				this.match(chatParser.CL);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1239;
				this.match(chatParser.OPHASH);
				this.state = 1240;
				this.s_and_w();
				this.state = 1241;
				this.match(chatParser.EOF);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public bool_label(): Bool_labelContext {
		let _localctx: Bool_labelContext = new Bool_labelContext(this._ctx, this.state);
		this.enterRule(_localctx, 148, chatParser.RULE_bool_label);
		try {
			this.state = 1253;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case chatParser.AtLabeltrue:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1245;
				this.match(chatParser.AtLabeltrue);
				this.state = 1246;
				this.s_and_w();
				this.state = 1247;
				this.match(chatParser.CL);
				}
				break;
			case chatParser.AtLabelfalse:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1249;
				this.match(chatParser.AtLabelfalse);
				this.state = 1250;
				this.s_and_w();
				this.state = 1251;
				this.match(chatParser.CL);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public progress_points(): Progress_pointsContext {
		let _localctx: Progress_pointsContext = new Progress_pointsContext(this._ctx, this.state);
		this.enterRule(_localctx, 150, chatParser.RULE_progress_points);
		try {
			this.state = 1264;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 174, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1255;
				this.match(chatParser.AtProgressPoints);
				this.state = 1256;
				this.match(chatParser.COLON);
				this.state = 1257;
				this.match(chatParser.NUMERIC);
				this.state = 1258;
				this.match(chatParser.CL);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1259;
				this.match(chatParser.AtProgressPoints);
				this.state = 1260;
				this.match(chatParser.COLON);
				this.state = 1261;
				this.s_and_w();
				this.state = 1262;
				this.match(chatParser.CL);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public istracked(): IstrackedContext {
		let _localctx: IstrackedContext = new IstrackedContext(this._ctx, this.state);
		this.enterRule(_localctx, 152, chatParser.RULE_istracked);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1266;
			this.match(chatParser.OpAtIsTracked);
			this.state = 1267;
			this.s_and_w();
			this.state = 1268;
			this.match(chatParser.CL);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public isinfoonly(): IsinfoonlyContext {
		let _localctx: IsinfoonlyContext = new IsinfoonlyContext(this._ctx, this.state);
		this.enterRule(_localctx, 154, chatParser.RULE_isinfoonly);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1270;
			this.match(chatParser.OpAtIsInfoOnly);
			this.state = 1271;
			this.s_and_w();
			this.state = 1272;
			this.match(chatParser.CL);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public atdef(): AtdefContext {
		let _localctx: AtdefContext = new AtdefContext(this._ctx, this.state);
		this.enterRule(_localctx, 156, chatParser.RULE_atdef);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1274;
			this.atdef_();
			this.state = 1284;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 176, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1278;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === chatParser.NL) {
						{
						{
						this.state = 1275;
						this.match(chatParser.NL);
						}
						}
						this.state = 1280;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					this.state = 1281;
					this.atdef_();
					}
					}
				}
				this.state = 1286;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 176, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public atdef_(): Atdef_Context {
		let _localctx: Atdef_Context = new Atdef_Context(this._ctx, this.state);
		this.enterRule(_localctx, 158, chatParser.RULE_atdef_);
		let _la: number;
		try {
			let _alt: number;
			this.state = 1309;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case chatParser.OPA:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1287;
				this.match(chatParser.OPA);
				this.state = 1288;
				this.s_and_w();
				this.state = 1289;
				_la = this._input.LA(1);
				if (!(_la === chatParser.COLON || _la === chatParser.DBLCOLON)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 1290;
				this.s_and_w();
				this.state = 1296;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << chatParser.S) | (1 << chatParser.OPS) | (1 << chatParser.COLON) | (1 << chatParser.AMP) | (1 << chatParser.DBLCOLON))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (chatParser.Greater - 33)) | (1 << (chatParser.Less - 33)) | (1 << (chatParser.RightAngle - 33)) | (1 << (chatParser.RightArrow - 33)) | (1 << (chatParser.DBLEQ - 33)) | (1 << (chatParser.NUMERIC - 33)) | (1 << (chatParser.STRING - 33)) | (1 << (chatParser.NL - 33)) | (1 << (chatParser.NOTBITMARK - 33)) | (1 << (chatParser.ELIPSIS - 33)) | (1 << (chatParser.SENTENCE - 33)) | (1 << (chatParser.BARSTRING - 33)))) !== 0) || _la === chatParser.URL) {
					{
					this.state = 1294;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 177, this._ctx) ) {
					case 1:
						{
						this.state = 1291;
						this.match(chatParser.NL);
						}
						break;

					case 2:
						{
						this.state = 1292;
						this.match(chatParser.COLON);
						}
						break;

					case 3:
						{
						this.state = 1293;
						this.s_and_w();
						}
						break;
					}
					}
					this.state = 1298;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1299;
				this.match(chatParser.CL);
				}
				break;
			case chatParser.OpAtCopyright:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1301;
				this.match(chatParser.OpAtCopyright);
				this.state = 1305;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 179, this._ctx);
				while (_alt !== 1 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1 + 1) {
						{
						{
						this.state = 1302;
						this.matchWildcard();
						}
						}
					}
					this.state = 1307;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 179, this._ctx);
				}
				this.state = 1308;
				this.match(chatParser.CL);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public dollarans(): DollaransContext {
		let _localctx: DollaransContext = new DollaransContext(this._ctx, this.state);
		this.enterRule(_localctx, 160, chatParser.RULE_dollarans);
		let _la: number;
		try {
			this.state = 1330;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 185, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1311;
				this.match(chatParser.OPDOLL);
				this.state = 1315;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					this.state = 1315;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 181, this._ctx) ) {
					case 1:
						{
						this.state = 1312;
						this.s_and_w();
						}
						break;

					case 2:
						{
						this.state = 1313;
						this.match(chatParser.COLON);
						}
						break;

					case 3:
						{
						this.state = 1314;
						this.match(chatParser.NL);
						}
						break;
					}
					}
					this.state = 1317;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << chatParser.S) | (1 << chatParser.OPS) | (1 << chatParser.COLON) | (1 << chatParser.AMP) | (1 << chatParser.DBLCOLON))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (chatParser.Greater - 33)) | (1 << (chatParser.Less - 33)) | (1 << (chatParser.RightAngle - 33)) | (1 << (chatParser.RightArrow - 33)) | (1 << (chatParser.DBLEQ - 33)) | (1 << (chatParser.NUMERIC - 33)) | (1 << (chatParser.STRING - 33)) | (1 << (chatParser.NL - 33)) | (1 << (chatParser.NOTBITMARK - 33)) | (1 << (chatParser.ELIPSIS - 33)) | (1 << (chatParser.SENTENCE - 33)) | (1 << (chatParser.BARSTRING - 33)))) !== 0) || _la === chatParser.URL);
				this.state = 1319;
				this.match(chatParser.CL);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1320;
				this.match(chatParser.OPDOLL);
				this.state = 1326;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << chatParser.S) | (1 << chatParser.OPS) | (1 << chatParser.COLON) | (1 << chatParser.AMP) | (1 << chatParser.DBLCOLON))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (chatParser.Greater - 33)) | (1 << (chatParser.Less - 33)) | (1 << (chatParser.RightAngle - 33)) | (1 << (chatParser.RightArrow - 33)) | (1 << (chatParser.DBLEQ - 33)) | (1 << (chatParser.NUMERIC - 33)) | (1 << (chatParser.STRING - 33)) | (1 << (chatParser.NL - 33)) | (1 << (chatParser.NOTBITMARK - 33)) | (1 << (chatParser.ELIPSIS - 33)) | (1 << (chatParser.SENTENCE - 33)) | (1 << (chatParser.BARSTRING - 33)))) !== 0) || _la === chatParser.URL) {
					{
					this.state = 1324;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 183, this._ctx) ) {
					case 1:
						{
						this.state = 1321;
						this.s_and_w();
						}
						break;

					case 2:
						{
						this.state = 1322;
						this.match(chatParser.COLON);
						}
						break;

					case 3:
						{
						this.state = 1323;
						this.match(chatParser.NL);
						}
						break;
					}
					}
					this.state = 1328;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1329;
				this.match(chatParser.EOF);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public anchor(): AnchorContext {
		let _localctx: AnchorContext = new AnchorContext(this._ctx, this.state);
		this.enterRule(_localctx, 162, chatParser.RULE_anchor);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1332;
			this.match(chatParser.OPDANGLE);
			this.state = 1334;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << chatParser.S) | (1 << chatParser.OPS) | (1 << chatParser.COLON) | (1 << chatParser.AMP) | (1 << chatParser.DBLCOLON))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (chatParser.Greater - 33)) | (1 << (chatParser.Less - 33)) | (1 << (chatParser.RightAngle - 33)) | (1 << (chatParser.RightArrow - 33)) | (1 << (chatParser.DBLEQ - 33)) | (1 << (chatParser.NUMERIC - 33)) | (1 << (chatParser.STRING - 33)) | (1 << (chatParser.NOTBITMARK - 33)) | (1 << (chatParser.ELIPSIS - 33)) | (1 << (chatParser.SENTENCE - 33)) | (1 << (chatParser.BARSTRING - 33)))) !== 0) || _la === chatParser.URL) {
				{
				this.state = 1333;
				this.s_and_w();
				}
			}

			this.state = 1336;
			this.match(chatParser.CL);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public lines(): LinesContext {
		let _localctx: LinesContext = new LinesContext(this._ctx, this.state);
		this.enterRule(_localctx, 164, chatParser.RULE_lines);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1342;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 1338;
				this.s_and_w();
				this.state = 1340;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === chatParser.NL) {
					{
					this.state = 1339;
					this.match(chatParser.NL);
					}
				}

				}
				}
				this.state = 1344;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << chatParser.S) | (1 << chatParser.OPS) | (1 << chatParser.COLON) | (1 << chatParser.AMP) | (1 << chatParser.DBLCOLON))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (chatParser.Greater - 33)) | (1 << (chatParser.Less - 33)) | (1 << (chatParser.RightAngle - 33)) | (1 << (chatParser.RightArrow - 33)) | (1 << (chatParser.DBLEQ - 33)) | (1 << (chatParser.NUMERIC - 33)) | (1 << (chatParser.STRING - 33)) | (1 << (chatParser.NOTBITMARK - 33)) | (1 << (chatParser.ELIPSIS - 33)) | (1 << (chatParser.SENTENCE - 33)) | (1 << (chatParser.BARSTRING - 33)))) !== 0) || _la === chatParser.URL);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public s_and_w(): S_and_wContext {
		let _localctx: S_and_wContext = new S_and_wContext(this._ctx, this.state);
		this.enterRule(_localctx, 166, chatParser.RULE_s_and_w);
		let _la: number;
		try {
			let _alt: number;
			this.state = 1392;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 196, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1346;
				this.match(chatParser.STRING);
				this.state = 1353;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 190, this._ctx) ) {
				case 1:
					{
					this.state = 1348;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					do {
						{
						{
						this.state = 1347;
						this.match(chatParser.S);
						}
						}
						this.state = 1350;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					} while (_la === chatParser.S);
					this.state = 1352;
					this.match(chatParser.NUMERIC);
					}
					break;
				}
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1355;
				this.words();
				this.state = 1362;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 192, this._ctx) ) {
				case 1:
					{
					this.state = 1357;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					do {
						{
						{
						this.state = 1356;
						this.match(chatParser.S);
						}
						}
						this.state = 1359;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					} while (_la === chatParser.S);
					this.state = 1361;
					this.match(chatParser.NUMERIC);
					}
					break;
				}
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1364;
				this.match(chatParser.OPS);
				this.state = 1365;
				this.s_and_w();
				this.state = 1366;
				this.match(chatParser.CL);
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1368;
				this.match(chatParser.NUMERIC);
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 1372;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === chatParser.S) {
					{
					{
					this.state = 1369;
					this.match(chatParser.S);
					}
					}
					this.state = 1374;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1375;
				this.match(chatParser.COLON);
				this.state = 1379;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 194, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 1376;
						this.match(chatParser.S);
						}
						}
					}
					this.state = 1381;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 194, this._ctx);
				}
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 1382;
				this.match(chatParser.AMP);
				this.state = 1386;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 195, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 1383;
						this.match(chatParser.S);
						}
						}
					}
					this.state = 1388;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 195, this._ctx);
				}
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 1389;
				this.match(chatParser.DBLCOLON);
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 1390;
				this.match(chatParser.DBLEQ);
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 1391;
				this.match(chatParser.URL);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public clnsp(): ClnspContext {
		let _localctx: ClnspContext = new ClnspContext(this._ctx, this.state);
		this.enterRule(_localctx, 168, chatParser.RULE_clnsp);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1394;
			this.match(chatParser.CL);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public sspl(): SsplContext {
		let _localctx: SsplContext = new SsplContext(this._ctx, this.state);
		this.enterRule(_localctx, 170, chatParser.RULE_sspl);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1396;
			_la = this._input.LA(1);
			if (!(_la === chatParser.SSPL || _la === chatParser.SSPL2)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public words(): WordsContext {
		let _localctx: WordsContext = new WordsContext(this._ctx, this.state);
		this.enterRule(_localctx, 172, chatParser.RULE_words);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1410;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					this.state = 1410;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case chatParser.SENTENCE:
						{
						this.state = 1398;
						this.match(chatParser.SENTENCE);
						}
						break;
					case chatParser.NOTBITMARK:
						{
						this.state = 1399;
						this.match(chatParser.NOTBITMARK);
						}
						break;
					case chatParser.BARSTRING:
						{
						this.state = 1400;
						this.match(chatParser.BARSTRING);
						}
						break;
					case chatParser.ELIPSIS:
						{
						this.state = 1401;
						this.match(chatParser.ELIPSIS);
						}
						break;
					case chatParser.AMP:
						{
						this.state = 1402;
						this.match(chatParser.AMP);
						}
						break;
					case chatParser.Greater:
						{
						this.state = 1403;
						this.match(chatParser.Greater);
						this.state = 1404;
						_la = this._input.LA(1);
						if (_la <= 0 || (_la === chatParser.Greater)) {
						this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						}
						break;
					case chatParser.Less:
						{
						this.state = 1405;
						this.match(chatParser.Less);
						this.state = 1406;
						_la = this._input.LA(1);
						if (_la <= 0 || (_la === chatParser.Less)) {
						this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						}
						break;
					case chatParser.DBLEQ:
						{
						this.state = 1407;
						this.match(chatParser.DBLEQ);
						}
						break;
					case chatParser.RightArrow:
						{
						this.state = 1408;
						this.match(chatParser.RightArrow);
						}
						break;
					case chatParser.RightAngle:
						{
						this.state = 1409;
						this.match(chatParser.RightAngle);
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 1412;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 198, this._ctx);
			} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public sp(): SpContext {
		let _localctx: SpContext = new SpContext(this._ctx, this.state);
		this.enterRule(_localctx, 174, chatParser.RULE_sp);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1414;
			this.match(chatParser.S);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	private static readonly _serializedATNSegments: number = 3;
	private static readonly _serializedATNSegment0: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\xA3\u058B\x04" +
		"\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04" +
		"\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r" +
		"\x04\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12" +
		"\x04\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17" +
		"\x04\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C" +
		"\x04\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t\"\x04" +
		"#\t#\x04$\t$\x04%\t%\x04&\t&\x04\'\t\'\x04(\t(\x04)\t)\x04*\t*\x04+\t" +
		"+\x04,\t,\x04-\t-\x04.\t.\x04/\t/\x040\t0\x041\t1\x042\t2\x043\t3\x04" +
		"4\t4\x045\t5\x046\t6\x047\t7\x048\t8\x049\t9\x04:\t:\x04;\t;\x04<\t<\x04" +
		"=\t=\x04>\t>\x04?\t?\x04@\t@\x04A\tA\x04B\tB\x04C\tC\x04D\tD\x04E\tE\x04" +
		"F\tF\x04G\tG\x04H\tH\x04I\tI\x04J\tJ\x04K\tK\x04L\tL\x04M\tM\x04N\tN\x04" +
		"O\tO\x04P\tP\x04Q\tQ\x04R\tR\x04S\tS\x04T\tT\x04U\tU\x04V\tV\x04W\tW\x04" +
		"X\tX\x04Y\tY\x03\x02\x03\x02\x07\x02\xB5\n\x02\f\x02\x0E\x02\xB8\v\x02" +
		"\x03\x02\x07\x02\xBB\n\x02\f\x02\x0E\x02\xBE\v\x02\x06\x02\xC0\n\x02\r" +
		"\x02\x0E\x02\xC1\x03\x02\x07\x02\xC5\n\x02\f\x02\x0E\x02\xC8\v\x02\x03" +
		"\x02\x03\x02\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
		"\x03\x05\x03\xD4\n\x03\x03\x04\x03\x04\x03\x04\x03\x04\x07\x04\xDA\n\x04" +
		"\f\x04\x0E\x04\xDD\v\x04\x03\x04\x03\x04\x07\x04\xE1\n\x04\f\x04\x0E\x04" +
		"\xE4\v\x04\x07\x04\xE6\n\x04\f\x04\x0E\x04\xE9\v\x04\x03\x04\x03\x04\x03" +
		"\x04\x03\x04\x03\x04\x03\x04\x03\x04\x07\x04\xF2\n\x04\f\x04\x0E\x04\xF5" +
		"\v\x04\x06\x04\xF7\n\x04\r\x04\x0E\x04\xF8\x03\x04\x03\x04\x07\x04\xFD" +
		"\n\x04\f\x04\x0E\x04\u0100\v\x04\x03\x04\x03\x04\x07\x04\u0104\n\x04\f" +
		"\x04\x0E\x04\u0107\v\x04\x03\x04\x07\x04\u010A\n\x04\f\x04\x0E\x04\u010D" +
		"\v\x04\x05\x04\u010F\n\x04\x03\x05\x03\x05\x03\x05\x03\x05\x07\x05\u0115" +
		"\n\x05\f\x05\x0E\x05\u0118\v\x05\x03\x05\x03\x05\x07\x05\u011C\n\x05\f" +
		"\x05\x0E\x05\u011F\v\x05\x07\x05\u0121\n\x05\f\x05\x0E\x05\u0124\v\x05" +
		"\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x07\x05\u012D" +
		"\n\x05\f\x05\x0E\x05\u0130\v\x05\x06\x05\u0132\n\x05\r\x05\x0E\x05\u0133" +
		"\x03\x05\x03\x05\x07\x05\u0138\n\x05\f\x05\x0E\x05\u013B\v\x05\x03\x05" +
		"\x03\x05\x07\x05\u013F\n\x05\f\x05\x0E\x05\u0142\v\x05\x03\x05\x07\x05" +
		"\u0145\n\x05\f\x05\x0E\x05\u0148\v\x05\x05\x05\u014A\n\x05\x03\x06\x03" +
		"\x06\x03\x06\x03\x06\x07\x06\u0150\n\x06\f\x06\x0E\x06\u0153\v\x06\x03" +
		"\x06\x03\x06\x07\x06\u0157\n\x06\f\x06\x0E\x06\u015A\v\x06\x07\x06\u015C" +
		"\n\x06\f\x06\x0E\x06\u015F\v\x06\x03\x06\x05\x06\u0162\n\x06\x03\x06\x07" +
		"\x06\u0165\n\x06\f\x06\x0E\x06\u0168\v\x06\x03\x06\x03\x06\x07\x06\u016C" +
		"\n\x06\f\x06\x0E\x06\u016F\v\x06\x06\x06\u0171\n\x06\r\x06\x0E\x06\u0172" +
		"\x03\x07\x03\x07\x03\x07\x03\x07\x07\x07\u0179\n\x07\f\x07\x0E\x07\u017C" +
		"\v\x07\x03\x07\x03\x07\x07\x07\u0180\n\x07\f\x07\x0E\x07\u0183\v\x07\x07" +
		"\x07\u0185\n\x07\f\x07\x0E\x07\u0188\v\x07\x03\x07\x05\x07\u018B\n\x07" +
		"\x03\x07\x07\x07\u018E\n\x07\f\x07\x0E\x07\u0191\v\x07\x03\x07\x03\x07" +
		"\x07\x07\u0195\n\x07\f\x07\x0E\x07\u0198\v\x07\x06\x07\u019A\n\x07\r\x07" +
		"\x0E\x07\u019B\x03\b\x03\b\x03\b\x03\b\x07\b\u01A2\n\b\f\b\x0E\b\u01A5" +
		"\v\b\x03\b\x03\b\x07\b\u01A9\n\b\f\b\x0E\b\u01AC\v\b\x07\b\u01AE\n\b\f" +
		"\b\x0E\b\u01B1\v\b\x03\b\x05\b\u01B4\n\b\x03\b\x07\b\u01B7\n\b\f\b\x0E" +
		"\b\u01BA\v\b\x03\b\x03\b\x07\b\u01BE\n\b\f\b\x0E\b\u01C1\v\b\x06\b\u01C3" +
		"\n\b\r\b\x0E\b\u01C4\x03\t\x03\t\x03\t\x03\t\x07\t\u01CB\n\t\f\t\x0E\t" +
		"\u01CE\v\t\x03\t\x03\t\x07\t\u01D2\n\t\f\t\x0E\t\u01D5\v\t\x07\t\u01D7" +
		"\n\t\f\t\x0E\t\u01DA\v\t\x03\t\x05\t\u01DD\n\t\x03\t\x07\t\u01E0\n\t\f" +
		"\t\x0E\t\u01E3\v\t\x03\t\x03\t\x07\t\u01E7\n\t\f\t\x0E\t\u01EA\v\t\x06" +
		"\t\u01EC\n\t\r\t\x0E\t\u01ED\x03\n\x03\n\x03\n\x03\n\x07\n\u01F4\n\n\f" +
		"\n\x0E\n\u01F7\v\n\x03\n\x03\n\x07\n\u01FB\n\n\f\n\x0E\n\u01FE\v\n\x07" +
		"\n\u0200\n\n\f\n\x0E\n\u0203\v\n\x03\n\x05\n\u0206\n\n\x03\n\x07\n\u0209" +
		"\n\n\f\n\x0E\n\u020C\v\n\x03\n\x03\n\x07\n\u0210\n\n\f\n\x0E\n\u0213\v" +
		"\n\x06\n\u0215\n\n\r\n\x0E\n\u0216\x03\v\x03\v\x03\v\x03\v\x07\v\u021D" +
		"\n\v\f\v\x0E\v\u0220\v\v\x03\v\x03\v\x07\v\u0224\n\v\f\v\x0E\v\u0227\v" +
		"\v\x07\v\u0229\n\v\f\v\x0E\v\u022C\v\v\x03\v\x05\v\u022F\n\v\x03\v\x07" +
		"\v\u0232\n\v\f\v\x0E\v\u0235\v\v\x03\v\x03\v\x07\v\u0239\n\v\f\v\x0E\v" +
		"\u023C\v\v\x06\v\u023E\n\v\r\v\x0E\v\u023F\x03\f\x03\f\x07\f\u0244\n\f" +
		"\f\f\x0E\f\u0247\v\f\x03\f\x05\f\u024A\n\f\x03\f\x05\f\u024D\n\f\x03\r" +
		"\x03\r\x07\r\u0251\n\r\f\r\x0E\r\u0254\v\r\x03\r\x05\r\u0257\n\r\x03\r" +
		"\x05\r\u025A\n\r\x03\x0E\x03\x0E\x07\x0E\u025E\n\x0E\f\x0E\x0E\x0E\u0261" +
		"\v\x0E\x03\x0E\x05\x0E\u0264\n\x0E\x03\x0E\x05\x0E\u0267\n\x0E\x03\x0F" +
		"\x03\x0F\x03\x0F\x03\x0F\x03\x10\x03\x10\x03\x10\x03\x10\x03\x11\x03\x11" +
		"\x03\x11\x03\x11\x03\x12\x03\x12\x03\x13\x03\x13\x03\x14\x03\x14\x03\x14" +
		"\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15" +
		"\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15" +
		"\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x05\x15\u0293\n\x15\x03\x16\x03" +
		"\x16\x03\x17\x03\x17\x03\x17\x03\x17\x03\x17\x03\x17\x07\x17\u029D\n\x17" +
		"\f\x17\x0E\x17\u02A0\v\x17\x03\x18\x03\x18\x03\x18\x03\x18\x05\x18\u02A6" +
		"\n\x18\x03\x18\x07\x18\u02A9\n\x18\f\x18\x0E\x18\u02AC\v\x18\x03\x18\x03" +
		"\x18\x03\x19\x03\x19\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1B\x07\x1B\u02B7" +
		"\n\x1B\f\x1B\x0E\x1B\u02BA\v\x1B\x03\x1B\x03\x1B\x03\x1B\x07\x1B\u02BF" +
		"\n\x1B\f\x1B\x0E\x1B\u02C2\v\x1B\x03\x1C\x03\x1C\x03\x1D\x03\x1D\x03\x1D" +
		"\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x05\x1D\u02CF\n\x1D\x03" +
		"\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x05\x1E\u02D6\n\x1E\x03\x1F\x03\x1F" +
		"\x03\x1F\x05\x1F\u02DB\n\x1F\x03\x1F\x03\x1F\x05\x1F\u02DF\n\x1F\x03\x1F" +
		"\x03\x1F\x05\x1F\u02E3\n\x1F\x03\x1F\x05\x1F\u02E6\n\x1F\x03 \x03 \x03" +
		" \x05 \u02EB\n \x03!\x03!\x03\"\x03\"\x03#\x03#\x03$\x03$\x03%\x03%\x03" +
		"&\x03&\x03\'\x03\'\x03(\x03(\x03)\x03)\x03*\x03*\x03*\x05*\u0302\n*\x03" +
		"*\x03*\x03*\x05*\u0307\n*\x03*\x03*\x03*\x05*\u030C\n*\x05*\u030E\n*\x03" +
		"+\x03+\x03,\x03,\x03,\x03,\x03,\x03,\x05,\u0318\n,\x03-\x03-\x03-\x03" +
		"-\x03-\x03-\x03-\x03-\x05-\u0322\n-\x03.\x03.\x03.\x03.\x03.\x03.\x03" +
		".\x03.\x05.\u032C\n.\x03/\x03/\x03/\x03/\x05/\u0332\n/\x03/\x03/\x03/" +
		"\x03/\x03/\x05/\u0339\n/\x030\x030\x070\u033D\n0\f0\x0E0\u0340\v0\x03" +
		"1\x031\x031\x071\u0345\n1\f1\x0E1\u0348\v1\x031\x031\x031\x032\x032\x07" +
		"2\u034F\n2\f2\x0E2\u0352\v2\x033\x033\x033\x033\x033\x033\x033\x033\x05" +
		"3\u035C\n3\x034\x034\x074\u0360\n4\f4\x0E4\u0363\v4\x034\x034\x054\u0367" +
		"\n4\x035\x035\x035\x075\u036C\n5\f5\x0E5\u036F\v5\x035\x035\x035\x036" +
		"\x036\x036\x056\u0377\n6\x036\x036\x056\u037B\n6\x036\x036\x056\u037F" +
		"\n6\x036\x056\u0382\n6\x037\x037\x037\x037\x037\x037\x037\x037\x037\x03" +
		"7\x037\x077\u038F\n7\f7\x0E7\u0392\v7\x037\x057\u0395\n7\x038\x038\x03" +
		"8\x038\x038\x038\x038\x038\x038\x038\x038\x078\u03A2\n8\f8\x0E8\u03A5" +
		"\v8\x038\x058\u03A8\n8\x039\x039\x079\u03AC\n9\f9\x0E9\u03AF\v9\x03:\x03" +
		":\x03:\x03:\x03:\x03:\x03:\x03:\x05:\u03B9\n:\x03;\x03;\x03;\x05;\u03BE" +
		"\n;\x03;\x03;\x03;\x05;\u03C3\n;\x05;\u03C5\n;\x03<\x03<\x03<\x05<\u03CA" +
		"\n<\x03<\x03<\x03<\x05<\u03CF\n<\x03<\x03<\x03<\x05<\u03D4\n<\x05<\u03D6" +
		"\n<\x03=\x03=\x03=\x05=\u03DB\n=\x03=\x03=\x07=\u03DF\n=\f=\x0E=\u03E2" +
		"\v=\x03=\x03=\x06=\u03E6\n=\r=\x0E=\u03E7\x03=\x03=\x03=\x03=\x03=\x03" +
		"=\x03=\x07=\u03F1\n=\f=\x0E=\u03F4\v=\x03=\x05=\u03F7\n=\x03>\x03>\x03" +
		">\x03>\x03?\x03?\x03@\x03@\x03@\x07@\u0402\n@\f@\x0E@\u0405\v@\x03@\x05" +
		"@\u0408\n@\x03@\x03@\x03@\x03@\x07@\u040E\n@\f@\x0E@\u0411\v@\x03@\x03" +
		"@\x07@\u0415\n@\f@\x0E@\u0418\v@\x03@\x05@\u041B\n@\x05@\u041D\n@\x03" +
		"A\x03A\x03A\x03A\x07A\u0423\nA\fA\x0EA\u0426\vA\x03A\x03A\x03B\x03B\x05" +
		"B\u042C\nB\x03B\x03B\x03B\x05B\u0431\nB\x03B\x05B\u0434\nB\x03C\x03C\x03" +
		"C\x03C\x05C\u043A\nC\x03C\x05C\u043D\nC\x03D\x03D\x05D\u0441\nD\x03D\x03" +
		"D\x03D\x07D\u0446\nD\fD\x0ED\u0449\vD\x07D\u044B\nD\fD\x0ED\u044E\vD\x03" +
		"D\x07D\u0451\nD\fD\x0ED\u0454\vD\x07D\u0456\nD\fD\x0ED\u0459\vD\x03D\x03" +
		"D\x03D\x03D\x03D\x07D\u0460\nD\fD\x0ED\u0463\vD\x03D\x05D\u0466\nD\x03" +
		"E\x03E\x03E\x03E\x03E\x06E\u046D\nE\rE\x0EE\u046E\x03E\x03E\x03E\x03E" +
		"\x03E\x03E\x03E\x07E\u0478\nE\fE\x0EE\u047B\vE\x03E\x05E\u047E\nE\x03" +
		"F\x03F\x03F\x03F\x03G\x03G\x03G\x03G\x06G\u0488\nG\rG\x0EG\u0489\x03G" +
		"\x03G\x05G\u048E\nG\x03H\x03H\x03H\x03H\x06H\u0494\nH\rH\x0EH\u0495\x03" +
		"H\x03H\x03I\x03I\x07I\u049C\nI\fI\x0EI\u049F\vI\x03I\x05I\u04A2\nI\x03" +
		"I\x03I\x03I\x07I\u04A7\nI\fI\x0EI\u04AA\vI\x07I\u04AC\nI\fI\x0EI\u04AF" +
		"\vI\x03I\x07I\u04B2\nI\fI\x0EI\u04B5\vI\x07I\u04B7\nI\fI\x0EI\u04BA\v" +
		"I\x03I\x03I\x03I\x07I\u04BF\nI\fI\x0EI\u04C2\vI\x03I\x05I\u04C5\nI\x03" +
		"I\x05I\u04C8\nI\x03J\x03J\x06J\u04CC\nJ\rJ\x0EJ\u04CD\x03J\x03J\x03K\x03" +
		"K\x03K\x06K\u04D5\nK\rK\x0EK\u04D6\x03K\x03K\x03K\x03K\x03K\x05K\u04DE" +
		"\nK\x03L\x03L\x03L\x03L\x03L\x03L\x03L\x03L\x05L\u04E8\nL\x03M\x03M\x03" +
		"M\x03M\x03M\x03M\x03M\x03M\x03M\x05M\u04F3\nM\x03N\x03N\x03N\x03N\x03" +
		"O\x03O\x03O\x03O\x03P\x03P\x07P\u04FF\nP\fP\x0EP\u0502\vP\x03P\x07P\u0505" +
		"\nP\fP\x0EP\u0508\vP\x03Q\x03Q\x03Q\x03Q\x03Q\x03Q\x03Q\x07Q\u0511\nQ" +
		"\fQ\x0EQ\u0514\vQ\x03Q\x03Q\x03Q\x03Q\x07Q\u051A\nQ\fQ\x0EQ\u051D\vQ\x03" +
		"Q\x05Q\u0520\nQ\x03R\x03R\x03R\x03R\x06R\u0526\nR\rR\x0ER\u0527\x03R\x03" +
		"R\x03R\x03R\x03R\x07R\u052F\nR\fR\x0ER\u0532\vR\x03R\x05R\u0535\nR\x03" +
		"S\x03S\x05S\u0539\nS\x03S\x03S\x03T\x03T\x05T\u053F\nT\x06T\u0541\nT\r" +
		"T\x0ET\u0542\x03U\x03U\x06U\u0547\nU\rU\x0EU\u0548\x03U\x05U\u054C\nU" +
		"\x03U\x03U\x06U\u0550\nU\rU\x0EU\u0551\x03U\x05U\u0555\nU\x03U\x03U\x03" +
		"U\x03U\x03U\x03U\x07U\u055D\nU\fU\x0EU\u0560\vU\x03U\x03U\x07U\u0564\n" +
		"U\fU\x0EU\u0567\vU\x03U\x03U\x07U\u056B\nU\fU\x0EU\u056E\vU\x03U\x03U" +
		"\x03U\x05U\u0573\nU\x03V\x03V\x03W\x03W\x03X\x03X\x03X\x03X\x03X\x03X" +
		"\x03X\x03X\x03X\x03X\x03X\x03X\x06X\u0585\nX\rX\x0EX\u0586\x03Y\x03Y\x03" +
		"Y\x06\u0390\u03A3\u03F2\u051B\x02\x02Z\x02\x02\x04\x02\x06\x02\b\x02\n" +
		"\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C" +
		"\x02\x1E\x02 \x02\"\x02$\x02&\x02(\x02*\x02,\x02.\x020\x022\x024\x026" +
		"\x028\x02:\x02<\x02>\x02@\x02B\x02D\x02F\x02H\x02J\x02L\x02N\x02P\x02" +
		"R\x02T\x02V\x02X\x02Z\x02\\\x02^\x02`\x02b\x02d\x02f\x02h\x02j\x02l\x02" +
		"n\x02p\x02r\x02t\x02v\x02x\x02z\x02|\x02~\x02\x80\x02\x82\x02\x84\x02" +
		"\x86\x02\x88\x02\x8A\x02\x8C\x02\x8E\x02\x90\x02\x92\x02\x94\x02\x96\x02" +
		"\x98\x02\x9A\x02\x9C\x02\x9E\x02\xA0\x02\xA2\x02\xA4\x02\xA6\x02\xA8\x02" +
		"\xAA\x02\xAC\x02\xAE\x02\xB0\x02\x02\x16\x03\x02()\b\x02^_abpx\x83\x86" +
		"\x8C\x8D\x8F\x91\x05\x02]]rr\x83\x83\x04\x02^^ss\x05\x02__tu\x85\x85\x04" +
		"\x02``vv\x04\x02aaww\x05\x02bbxx\x86\x86\x04\x02ii||\x05\x02kk}~\x8A\x8A" +
		"\x04\x02ll\x7F\x7F\x04\x02mm\x80\x80\x05\x02nn\x81\x81\x8B\x8B\x03\x02" +
		"=>\x04\x02MMPS\x03\x02\x1D\x1D\x04\x02\x1E\x1E  \x03\x02*+\x03\x02##\x03" +
		"\x02$$\x02\u0649\x02\xBF\x03\x02\x02\x02\x04\xD3\x03\x02\x02\x02\x06\xD5" +
		"\x03\x02\x02\x02\b\u0110\x03\x02\x02\x02\n\u014B\x03\x02\x02\x02\f\u0174" +
		"\x03\x02\x02\x02\x0E\u019D\x03\x02\x02\x02\x10\u01C6\x03\x02\x02\x02\x12" +
		"\u01EF\x03\x02\x02\x02\x14\u0218\x03\x02\x02\x02\x16\u0241\x03\x02\x02" +
		"\x02\x18\u024E\x03\x02\x02\x02\x1A\u025B\x03\x02\x02\x02\x1C\u0268\x03" +
		"\x02\x02\x02\x1E\u026C\x03\x02\x02\x02 \u0270\x03\x02\x02\x02\"\u0274" +
		"\x03\x02\x02\x02$\u0276\x03\x02\x02\x02&\u0278\x03\x02\x02\x02(\u0292" +
		"\x03\x02\x02\x02*\u0294\x03\x02\x02\x02,\u0296\x03\x02\x02\x02.\u02A1" +
		"\x03\x02\x02\x020\u02AF\x03\x02\x02\x022\u02B1\x03\x02\x02\x024\u02B8" +
		"\x03\x02\x02\x026\u02C3\x03\x02\x02\x028\u02CE\x03\x02\x02\x02:\u02D5" +
		"\x03\x02\x02\x02<\u02E5\x03\x02\x02\x02>\u02E7\x03\x02\x02\x02@\u02EC" +
		"\x03\x02\x02\x02B\u02EE\x03\x02\x02\x02D\u02F0\x03\x02\x02\x02F\u02F2" +
		"\x03\x02\x02\x02H\u02F4\x03\x02\x02\x02J\u02F6\x03\x02\x02\x02L\u02F8" +
		"\x03\x02\x02\x02N\u02FA\x03\x02\x02\x02P\u02FC\x03\x02\x02\x02R\u030D" +
		"\x03\x02\x02\x02T\u030F\x03\x02\x02\x02V\u0317\x03\x02\x02\x02X\u0319" +
		"\x03\x02\x02\x02Z\u0323\x03\x02\x02\x02\\\u032D\x03\x02\x02\x02^\u033A" +
		"\x03\x02\x02\x02`\u0341\x03\x02\x02\x02b\u034C\x03\x02\x02\x02d\u0353" +
		"\x03\x02\x02\x02f\u035D\x03\x02\x02\x02h\u0368\x03\x02\x02\x02j\u0381" +
		"\x03\x02\x02\x02l\u0394\x03\x02\x02\x02n\u03A7\x03\x02\x02\x02p\u03A9" +
		"\x03\x02\x02\x02r\u03B0\x03\x02\x02\x02t\u03C4\x03\x02\x02\x02v\u03D5" +
		"\x03\x02\x02\x02x\u03F6\x03\x02\x02\x02z\u03F8\x03\x02\x02\x02|\u03FC" +
		"\x03\x02\x02\x02~\u041C\x03\x02\x02\x02\x80\u041E\x03\x02\x02\x02\x82" +
		"\u0433\x03\x02\x02\x02\x84\u043C\x03\x02\x02\x02\x86\u0465\x03\x02\x02" +
		"\x02\x88\u047D\x03\x02\x02\x02\x8A\u047F\x03\x02\x02\x02\x8C\u0483\x03" +
		"\x02\x02\x02\x8E\u048F\x03\x02\x02\x02\x90\u04C7\x03\x02\x02\x02\x92\u04C9" +
		"\x03\x02\x02\x02\x94\u04DD\x03\x02\x02\x02\x96\u04E7\x03\x02\x02\x02\x98" +
		"\u04F2\x03\x02\x02\x02\x9A\u04F4\x03\x02\x02\x02\x9C\u04F8\x03\x02\x02" +
		"\x02\x9E\u04FC\x03\x02\x02\x02\xA0\u051F\x03\x02\x02\x02\xA2\u0534\x03" +
		"\x02\x02\x02\xA4\u0536\x03\x02\x02\x02\xA6\u0540\x03\x02\x02\x02\xA8\u0572" +
		"\x03\x02\x02\x02\xAA\u0574\x03\x02\x02\x02\xAC\u0576\x03\x02\x02\x02\xAE" +
		"\u0584\x03\x02\x02\x02\xB0\u0588\x03\x02\x02\x02\xB2\xBC\x05\x04\x03\x02" +
		"\xB3\xB5\x07\x04\x02\x02\xB4\xB3\x03\x02\x02\x02\xB5\xB8\x03\x02\x02\x02" +
		"\xB6\xB4\x03\x02\x02\x02\xB6\xB7\x03\x02\x02\x02\xB7\xB9\x03\x02\x02\x02" +
		"\xB8\xB6\x03\x02\x02\x02\xB9\xBB\x075\x02\x02\xBA\xB6\x03\x02\x02\x02" +
		"\xBB\xBE\x03\x02\x02\x02\xBC\xBA\x03\x02\x02\x02\xBC\xBD\x03\x02\x02\x02" +
		"\xBD\xC0\x03\x02\x02\x02\xBE\xBC\x03\x02\x02\x02\xBF\xB2\x03\x02\x02\x02" +
		"\xC0\xC1\x03\x02\x02\x02\xC1\xBF\x03\x02\x02\x02\xC1\xC2\x03\x02\x02\x02" +
		"\xC2\xC6\x03\x02\x02\x02\xC3\xC5\x075\x02\x02\xC4\xC3\x03\x02\x02\x02" +
		"\xC5\xC8\x03\x02\x02\x02\xC6\xC4\x03\x02\x02\x02\xC6\xC7\x03\x02\x02\x02" +
		"\xC7\xC9\x03\x02\x02\x02\xC8\xC6\x03\x02\x02\x02\xC9\xCA\x07\x02\x02\x03" +
		"\xCA\x03\x03\x02\x02\x02\xCB\xD4\x05\x06\x04\x02\xCC\xD4\x05\b\x05\x02" +
		"\xCD\xD4\x05\n\x06\x02\xCE\xD4\x05\f\x07\x02\xCF\xD4\x05\x0E\b\x02\xD0" +
		"\xD4\x05\x10\t\x02\xD1\xD4\x05\x12\n\x02\xD2\xD4\x05\x14\v\x02\xD3\xCB" +
		"\x03\x02\x02\x02\xD3\xCC\x03\x02\x02\x02\xD3\xCD\x03\x02\x02\x02\xD3\xCE" +
		"\x03\x02\x02\x02\xD3\xCF\x03\x02\x02\x02\xD3\xD0\x03\x02\x02\x02\xD3\xD1" +
		"\x03\x02\x02\x02\xD3\xD2\x03\x02\x02\x02\xD4\x05\x03\x02\x02\x02\xD5\xD6" +
		"\x07\x05\x02\x02\xD6\xD7\x054\x1B\x02\xD7\xDB\x07\x1D\x02\x02\xD8\xDA" +
		"\x075\x02\x02\xD9\xD8\x03\x02\x02\x02\xDA\xDD\x03\x02\x02\x02\xDB\xD9" +
		"\x03\x02\x02\x02\xDB\xDC\x03\x02\x02\x02\xDC\xE7\x03\x02\x02\x02\xDD\xDB" +
		"\x03\x02\x02\x02\xDE\xE2\x05(\x15\x02\xDF\xE1\x075\x02\x02\xE0\xDF\x03" +
		"\x02\x02\x02\xE1\xE4\x03\x02\x02\x02\xE2\xE0\x03\x02\x02\x02\xE2\xE3\x03" +
		"\x02\x02\x02\xE3\xE6\x03\x02\x02\x02\xE4\xE2\x03\x02\x02\x02\xE5\xDE\x03" +
		"\x02\x02\x02\xE6\xE9\x03\x02\x02\x02\xE7\xE5\x03\x02\x02\x02\xE7\xE8\x03" +
		"\x02\x02\x02\xE8\xEA\x03\x02\x02\x02\xE9\xE7\x03\x02\x02\x02\xEA\xEB\t" +
		"\x02\x02\x02\xEB\xEC\x05\x16\f\x02\xEC\xED\t\x02\x02\x02\xED\xF6\x05\x18" +
		"\r\x02\xEE\xEF\t\x02\x02\x02\xEF\xF3\x05\"\x12\x02\xF0\xF2\x05&\x14\x02" +
		"\xF1\xF0\x03\x02\x02\x02\xF2\xF5\x03\x02\x02\x02\xF3\xF1\x03\x02\x02\x02" +
		"\xF3\xF4\x03\x02\x02\x02\xF4\xF7\x03\x02\x02\x02\xF5\xF3\x03\x02\x02\x02" +
		"\xF6\xEE\x03\x02\x02\x02\xF7\xF8\x03\x02\x02\x02\xF8\xF6\x03\x02\x02\x02" +
		"\xF8\xF9\x03\x02\x02\x02\xF9\xFA\x03\x02\x02\x02\xFA\xFE\t\x02\x02\x02" +
		"\xFB\xFD\x075\x02\x02\xFC\xFB\x03\x02\x02\x02\xFD\u0100\x03\x02\x02\x02" +
		"\xFE\xFC\x03\x02\x02\x02\xFE\xFF\x03\x02\x02\x02\xFF\u010E\x03\x02\x02" +
		"\x02\u0100\xFE\x03\x02\x02\x02\u0101\u010B\x05*\x16\x02\u0102\u0104\x07" +
		"5\x02\x02\u0103\u0102\x03\x02\x02\x02\u0104\u0107\x03\x02\x02\x02\u0105" +
		"\u0103\x03\x02\x02\x02\u0105\u0106\x03\x02\x02\x02\u0106\u0108\x03\x02" +
		"\x02\x02\u0107\u0105\x03\x02\x02\x02\u0108\u010A\x05*\x16\x02\u0109\u0105" +
		"\x03\x02\x02\x02\u010A\u010D\x03\x02\x02\x02\u010B\u0109\x03\x02\x02\x02" +
		"\u010B\u010C\x03\x02\x02\x02\u010C\u010F\x03\x02\x02\x02\u010D\u010B\x03" +
		"\x02\x02\x02\u010E\u0101\x03\x02\x02\x02\u010E\u010F\x03\x02\x02\x02\u010F" +
		"\x07\x03\x02\x02\x02\u0110\u0111\x07\x06\x02\x02\u0111\u0112\x054\x1B" +
		"\x02\u0112\u0116\x07\x1D\x02\x02\u0113\u0115\x075\x02\x02\u0114\u0113" +
		"\x03\x02\x02\x02\u0115\u0118\x03\x02\x02\x02\u0116\u0114\x03\x02\x02\x02" +
		"\u0116\u0117\x03\x02\x02\x02\u0117\u0122\x03\x02\x02\x02\u0118\u0116\x03" +
		"\x02\x02\x02\u0119\u011D\x05(\x15\x02\u011A\u011C\x075\x02\x02\u011B\u011A" +
		"\x03\x02\x02\x02\u011C\u011F\x03\x02\x02\x02\u011D\u011B\x03\x02\x02\x02" +
		"\u011D\u011E\x03\x02\x02\x02\u011E\u0121\x03\x02\x02\x02\u011F\u011D\x03" +
		"\x02\x02\x02\u0120\u0119\x03\x02\x02\x02\u0121\u0124\x03\x02\x02\x02\u0122" +
		"\u0120\x03\x02\x02\x02\u0122\u0123\x03\x02\x02\x02\u0123\u0125\x03\x02" +
		"\x02\x02\u0124\u0122\x03\x02\x02\x02\u0125\u0126\t\x02\x02\x02\u0126\u0127" +
		"\x05\x16\f\x02\u0127\u0128\t\x02\x02\x02\u0128\u0131\x05\x18\r\x02\u0129" +
		"\u012A\t\x02\x02\x02\u012A\u012E\x05\"\x12\x02\u012B\u012D\x05&\x14\x02" +
		"\u012C\u012B\x03\x02\x02\x02\u012D\u0130\x03\x02\x02\x02\u012E\u012C\x03" +
		"\x02\x02\x02\u012E\u012F\x03\x02\x02\x02\u012F\u0132\x03\x02\x02\x02\u0130" +
		"\u012E\x03\x02\x02\x02\u0131\u0129\x03\x02\x02\x02\u0132\u0133\x03\x02" +
		"\x02\x02\u0133\u0131\x03\x02\x02\x02\u0133\u0134\x03\x02\x02\x02\u0134" +
		"\u0135\x03\x02\x02\x02\u0135\u0139\t\x02\x02\x02\u0136\u0138\x075\x02" +
		"\x02\u0137\u0136\x03\x02\x02\x02\u0138\u013B\x03\x02\x02\x02\u0139\u0137" +
		"\x03\x02\x02\x02\u0139\u013A\x03\x02\x02\x02\u013A\u0149\x03\x02\x02\x02" +
		"\u013B\u0139\x03\x02\x02\x02\u013C\u0146\x05*\x16\x02\u013D\u013F\x07" +
		"5\x02\x02\u013E\u013D\x03\x02\x02\x02\u013F\u0142\x03\x02\x02\x02\u0140" +
		"\u013E\x03\x02\x02\x02\u0140\u0141\x03\x02\x02\x02";
	private static readonly _serializedATNSegment1: string =
		"\u0141\u0143\x03\x02\x02\x02\u0142\u0140\x03\x02\x02\x02\u0143\u0145\x05" +
		"*\x16\x02\u0144\u0140\x03\x02\x02\x02\u0145\u0148\x03\x02\x02\x02\u0146" +
		"\u0144\x03\x02\x02\x02\u0146\u0147\x03\x02\x02\x02\u0147\u014A\x03\x02" +
		"\x02\x02\u0148\u0146\x03\x02\x02\x02\u0149\u013C\x03\x02\x02\x02\u0149" +
		"\u014A\x03\x02\x02\x02\u014A\t\x03\x02\x02\x02\u014B\u014C\x07\x07\x02" +
		"\x02\u014C\u014D\x05:\x1E\x02\u014D\u0151\x07\x1D\x02\x02\u014E\u0150" +
		"\x075\x02\x02\u014F\u014E\x03\x02\x02\x02\u0150\u0153\x03\x02\x02\x02" +
		"\u0151\u014F\x03\x02\x02\x02\u0151\u0152\x03\x02\x02\x02\u0152\u015D\x03" +
		"\x02\x02\x02\u0153\u0151\x03\x02\x02\x02\u0154\u0158\x05(\x15\x02\u0155" +
		"\u0157\x075\x02\x02\u0156\u0155\x03\x02\x02\x02\u0157\u015A\x03\x02\x02" +
		"\x02\u0158\u0156\x03\x02\x02\x02\u0158\u0159\x03\x02\x02\x02\u0159\u015C" +
		"\x03\x02\x02\x02\u015A\u0158\x03\x02\x02\x02\u015B\u0154\x03\x02\x02\x02" +
		"\u015C\u015F\x03\x02\x02\x02\u015D\u015B\x03\x02\x02\x02\u015D\u015E\x03" +
		"\x02\x02\x02\u015E\u0161\x03\x02\x02\x02\u015F\u015D\x03\x02\x02\x02\u0160" +
		"\u0162\x05\x1A\x0E\x02\u0161\u0160\x03\x02\x02\x02\u0161\u0162\x03\x02" +
		"\x02\x02\u0162\u0166\x03\x02\x02\x02\u0163\u0165\x075\x02\x02\u0164\u0163" +
		"\x03\x02\x02\x02\u0165\u0168\x03\x02\x02\x02\u0166\u0164\x03\x02\x02\x02" +
		"\u0166\u0167\x03\x02\x02\x02\u0167\u0170\x03\x02\x02\x02\u0168\u0166\x03" +
		"\x02\x02\x02\u0169\u016D\x05\xA8U\x02\u016A\u016C\x075\x02\x02\u016B\u016A" +
		"\x03\x02\x02\x02\u016C\u016F\x03\x02\x02\x02\u016D\u016B\x03\x02\x02\x02" +
		"\u016D\u016E\x03\x02\x02\x02\u016E\u0171\x03\x02\x02\x02\u016F\u016D\x03" +
		"\x02\x02\x02\u0170\u0169\x03\x02\x02\x02\u0171\u0172\x03\x02\x02\x02\u0172" +
		"\u0170\x03\x02\x02\x02\u0172\u0173\x03\x02\x02\x02\u0173\v\x03\x02\x02" +
		"\x02\u0174\u0175\x07\b\x02\x02\u0175\u0176\x05:\x1E\x02\u0176\u017A\x07" +
		"\x1D\x02\x02\u0177\u0179\x075\x02\x02\u0178\u0177\x03\x02\x02\x02\u0179" +
		"\u017C\x03\x02\x02\x02\u017A\u0178\x03\x02\x02\x02\u017A\u017B\x03\x02" +
		"\x02\x02\u017B\u0186\x03\x02\x02\x02\u017C\u017A\x03\x02\x02\x02\u017D" +
		"\u0181\x05(\x15\x02\u017E\u0180\x075\x02\x02\u017F\u017E\x03\x02\x02\x02" +
		"\u0180\u0183\x03\x02\x02\x02\u0181\u017F\x03\x02\x02\x02\u0181\u0182\x03" +
		"\x02\x02\x02\u0182\u0185\x03\x02\x02\x02\u0183\u0181\x03\x02\x02\x02\u0184" +
		"\u017D\x03\x02\x02\x02\u0185\u0188\x03\x02\x02\x02\u0186\u0184\x03\x02" +
		"\x02\x02\u0186\u0187\x03\x02\x02\x02\u0187\u018A\x03\x02\x02\x02\u0188" +
		"\u0186\x03\x02\x02\x02\u0189\u018B\x05\x1A\x0E\x02\u018A\u0189\x03\x02" +
		"\x02\x02\u018A\u018B\x03\x02\x02\x02\u018B\u018F\x03\x02\x02\x02\u018C" +
		"\u018E\x075\x02\x02\u018D\u018C\x03\x02\x02\x02\u018E\u0191\x03\x02\x02" +
		"\x02\u018F\u018D\x03\x02\x02\x02\u018F\u0190\x03\x02\x02\x02\u0190\u0199" +
		"\x03\x02\x02\x02\u0191\u018F\x03\x02\x02\x02\u0192\u0196\x05\xA8U\x02" +
		"\u0193\u0195\x075\x02\x02\u0194\u0193\x03\x02\x02\x02\u0195\u0198\x03" +
		"\x02\x02\x02\u0196\u0194\x03\x02\x02\x02\u0196\u0197\x03\x02\x02\x02\u0197" +
		"\u019A\x03\x02\x02\x02\u0198\u0196\x03\x02\x02\x02\u0199\u0192\x03\x02" +
		"\x02\x02\u019A\u019B\x03\x02\x02\x02\u019B\u0199\x03\x02\x02\x02\u019B" +
		"\u019C\x03\x02\x02\x02\u019C\r\x03\x02\x02\x02\u019D\u019E\x07\t\x02\x02" +
		"\u019E\u019F\x05:\x1E\x02\u019F\u01A3\x07\x1D\x02\x02\u01A0\u01A2\x07" +
		"5\x02\x02\u01A1\u01A0\x03\x02\x02\x02\u01A2\u01A5\x03\x02\x02\x02\u01A3" +
		"\u01A1\x03\x02\x02\x02\u01A3\u01A4\x03\x02\x02\x02\u01A4\u01AF\x03\x02" +
		"\x02\x02\u01A5\u01A3\x03\x02\x02\x02\u01A6\u01AA\x05(\x15\x02\u01A7\u01A9" +
		"\x075\x02\x02\u01A8\u01A7\x03\x02\x02\x02\u01A9\u01AC\x03\x02\x02\x02" +
		"\u01AA\u01A8\x03\x02\x02\x02\u01AA\u01AB\x03\x02\x02\x02\u01AB\u01AE\x03" +
		"\x02\x02\x02\u01AC\u01AA\x03\x02\x02\x02\u01AD\u01A6\x03\x02\x02\x02\u01AE" +
		"\u01B1\x03\x02\x02\x02\u01AF\u01AD\x03\x02\x02\x02\u01AF\u01B0\x03\x02" +
		"\x02\x02\u01B0\u01B3\x03\x02\x02\x02\u01B1\u01AF\x03\x02\x02\x02\u01B2" +
		"\u01B4\x05\x1A\x0E\x02\u01B3\u01B2\x03\x02\x02\x02\u01B3\u01B4\x03\x02" +
		"\x02\x02\u01B4\u01B8\x03\x02\x02\x02\u01B5\u01B7\x075\x02\x02\u01B6\u01B5" +
		"\x03\x02\x02\x02\u01B7\u01BA\x03\x02\x02\x02\u01B8\u01B6\x03\x02\x02\x02" +
		"\u01B8\u01B9\x03\x02\x02\x02\u01B9\u01C2\x03\x02\x02\x02\u01BA\u01B8\x03" +
		"\x02\x02\x02\u01BB\u01BF\x05\xA8U\x02\u01BC\u01BE\x075\x02\x02\u01BD\u01BC" +
		"\x03\x02\x02\x02\u01BE\u01C1\x03\x02\x02\x02\u01BF\u01BD\x03\x02\x02\x02" +
		"\u01BF\u01C0\x03\x02\x02\x02\u01C0\u01C3\x03\x02\x02\x02\u01C1\u01BF\x03" +
		"\x02\x02\x02\u01C2\u01BB\x03\x02\x02\x02\u01C3\u01C4\x03\x02\x02\x02\u01C4" +
		"\u01C2\x03\x02\x02\x02\u01C4\u01C5\x03\x02\x02\x02\u01C5\x0F\x03\x02\x02" +
		"\x02\u01C6\u01C7\x07\n\x02\x02\u01C7\u01C8\x05:\x1E\x02\u01C8\u01CC\x07" +
		"\x1D\x02\x02\u01C9\u01CB\x075\x02\x02\u01CA\u01C9\x03\x02\x02\x02\u01CB" +
		"\u01CE\x03\x02\x02\x02\u01CC\u01CA\x03\x02\x02\x02\u01CC\u01CD\x03\x02" +
		"\x02\x02\u01CD\u01D8\x03\x02\x02\x02\u01CE\u01CC\x03\x02\x02\x02\u01CF" +
		"\u01D3\x05(\x15\x02\u01D0\u01D2\x075\x02\x02\u01D1\u01D0\x03\x02\x02\x02" +
		"\u01D2\u01D5\x03\x02\x02\x02\u01D3\u01D1\x03\x02\x02\x02\u01D3\u01D4\x03" +
		"\x02\x02\x02\u01D4\u01D7\x03\x02\x02\x02\u01D5\u01D3\x03\x02\x02\x02\u01D6" +
		"\u01CF\x03\x02\x02\x02\u01D7\u01DA\x03\x02\x02\x02\u01D8\u01D6\x03\x02" +
		"\x02\x02\u01D8\u01D9\x03\x02\x02\x02\u01D9\u01DC\x03\x02\x02\x02\u01DA" +
		"\u01D8\x03\x02\x02\x02\u01DB\u01DD\x05\x1A\x0E\x02\u01DC\u01DB\x03\x02" +
		"\x02\x02\u01DC\u01DD\x03\x02\x02\x02\u01DD\u01E1\x03\x02\x02\x02\u01DE" +
		"\u01E0\x075\x02\x02\u01DF\u01DE\x03\x02\x02\x02\u01E0\u01E3\x03\x02\x02" +
		"\x02\u01E1\u01DF\x03\x02\x02\x02\u01E1\u01E2\x03\x02\x02\x02\u01E2\u01EB" +
		"\x03\x02\x02\x02\u01E3\u01E1\x03\x02\x02\x02\u01E4\u01E8\x05\xA8U\x02" +
		"\u01E5\u01E7\x075\x02\x02\u01E6\u01E5\x03\x02\x02\x02\u01E7\u01EA\x03" +
		"\x02\x02\x02\u01E8\u01E6\x03\x02\x02\x02\u01E8\u01E9\x03\x02\x02\x02\u01E9" +
		"\u01EC\x03\x02\x02\x02\u01EA\u01E8\x03\x02\x02\x02\u01EB\u01E4\x03\x02" +
		"\x02\x02\u01EC\u01ED\x03\x02\x02\x02\u01ED\u01EB\x03\x02\x02\x02\u01ED" +
		"\u01EE\x03\x02\x02\x02\u01EE\x11\x03\x02\x02\x02\u01EF\u01F0\x07\v\x02" +
		"\x02\u01F0\u01F1\x05:\x1E\x02\u01F1\u01F5\x07\x1D\x02\x02\u01F2\u01F4" +
		"\x075\x02\x02\u01F3\u01F2\x03\x02\x02\x02\u01F4\u01F7\x03\x02\x02\x02" +
		"\u01F5\u01F3\x03\x02\x02\x02\u01F5\u01F6\x03\x02\x02\x02\u01F6\u0201\x03" +
		"\x02\x02\x02\u01F7\u01F5\x03\x02\x02\x02\u01F8\u01FC\x05(\x15\x02\u01F9" +
		"\u01FB\x075\x02\x02\u01FA\u01F9\x03\x02\x02\x02\u01FB\u01FE\x03\x02\x02" +
		"\x02\u01FC\u01FA\x03\x02\x02\x02\u01FC\u01FD\x03\x02\x02\x02\u01FD\u0200" +
		"\x03\x02\x02\x02\u01FE\u01FC\x03\x02\x02\x02\u01FF\u01F8\x03\x02\x02\x02" +
		"\u0200\u0203\x03\x02\x02\x02\u0201\u01FF\x03\x02\x02\x02\u0201\u0202\x03" +
		"\x02\x02\x02\u0202\u0205\x03\x02\x02\x02\u0203\u0201\x03\x02\x02\x02\u0204" +
		"\u0206\x05\x1A\x0E\x02\u0205\u0204\x03\x02\x02\x02\u0205\u0206\x03\x02" +
		"\x02\x02\u0206\u020A\x03\x02\x02\x02\u0207\u0209\x075\x02\x02\u0208\u0207" +
		"\x03\x02\x02\x02\u0209\u020C\x03\x02\x02\x02\u020A\u0208\x03\x02\x02\x02" +
		"\u020A\u020B\x03\x02\x02\x02\u020B\u0214\x03\x02\x02\x02\u020C\u020A\x03" +
		"\x02\x02\x02\u020D\u0211\x05\xA8U\x02\u020E\u0210\x075\x02\x02\u020F\u020E" +
		"\x03\x02\x02\x02\u0210\u0213\x03\x02\x02\x02\u0211\u020F\x03\x02\x02\x02" +
		"\u0211\u0212\x03\x02\x02\x02\u0212\u0215\x03\x02\x02\x02\u0213\u0211\x03" +
		"\x02\x02\x02\u0214\u020D\x03\x02\x02\x02\u0215\u0216\x03\x02\x02\x02\u0216" +
		"\u0214\x03\x02\x02\x02\u0216\u0217\x03\x02\x02\x02\u0217\x13\x03\x02\x02" +
		"\x02\u0218\u0219\x07\f\x02\x02\u0219\u021A\x05:\x1E\x02\u021A\u021E\x07" +
		"\x1D\x02\x02\u021B\u021D\x075\x02\x02\u021C\u021B\x03\x02\x02\x02\u021D" +
		"\u0220\x03\x02\x02\x02\u021E\u021C\x03\x02\x02\x02\u021E\u021F\x03\x02" +
		"\x02\x02\u021F\u022A\x03\x02\x02\x02\u0220\u021E\x03\x02\x02\x02\u0221" +
		"\u0225\x05(\x15\x02\u0222\u0224\x075\x02\x02\u0223\u0222\x03\x02\x02\x02" +
		"\u0224\u0227\x03\x02\x02\x02\u0225\u0223\x03\x02\x02\x02\u0225\u0226\x03" +
		"\x02\x02\x02\u0226\u0229\x03\x02\x02\x02\u0227\u0225\x03\x02\x02\x02\u0228" +
		"\u0221\x03\x02\x02\x02\u0229\u022C\x03\x02\x02\x02\u022A\u0228\x03\x02" +
		"\x02\x02\u022A\u022B\x03\x02\x02\x02\u022B\u022E\x03\x02\x02\x02\u022C" +
		"\u022A\x03\x02\x02\x02\u022D\u022F\x05\x1A\x0E\x02\u022E\u022D\x03\x02" +
		"\x02\x02\u022E\u022F\x03\x02\x02\x02\u022F\u0233\x03\x02\x02\x02\u0230" +
		"\u0232\x075\x02\x02\u0231\u0230\x03\x02\x02\x02\u0232\u0235\x03\x02\x02" +
		"\x02\u0233\u0231\x03\x02\x02\x02\u0233\u0234\x03\x02\x02\x02\u0234\u023D" +
		"\x03\x02\x02\x02\u0235\u0233\x03\x02\x02\x02\u0236\u023A\x05\xA8U\x02" +
		"\u0237\u0239\x075\x02\x02\u0238\u0237\x03\x02\x02\x02\u0239\u023C\x03" +
		"\x02\x02\x02\u023A\u0238\x03\x02\x02\x02\u023A\u023B\x03\x02\x02\x02\u023B" +
		"\u023E\x03\x02\x02\x02\u023C\u023A\x03\x02\x02\x02\u023D\u0236\x03\x02" +
		"\x02\x02\u023E\u023F\x03\x02\x02\x02\u023F\u023D\x03\x02\x02\x02\u023F" +
		"\u0240\x03\x02\x02\x02\u0240\x15\x03\x02\x02\x02\u0241\u0249\x05\x1E\x10" +
		"\x02\u0242\u0244\x075\x02\x02\u0243\u0242\x03\x02\x02\x02\u0244\u0247" +
		"\x03\x02\x02\x02\u0245\u0243\x03\x02\x02\x02\u0245\u0246\x03\x02\x02\x02" +
		"\u0246\u0248\x03\x02\x02\x02\u0247\u0245\x03\x02\x02\x02\u0248\u024A\x05" +
		"f4\x02\u0249\u0245\x03\x02\x02\x02\u0249\u024A\x03\x02\x02\x02\u024A\u024C" +
		"\x03\x02\x02\x02\u024B\u024D\x05 \x11\x02\u024C\u024B\x03\x02\x02\x02" +
		"\u024C\u024D\x03\x02\x02\x02\u024D\x17\x03\x02\x02\x02\u024E\u0256\x05" +
		"\x1E\x10\x02\u024F\u0251\x075\x02\x02\u0250\u024F\x03\x02\x02\x02\u0251" +
		"\u0254\x03\x02\x02\x02\u0252\u0250\x03\x02\x02\x02\u0252\u0253\x03\x02" +
		"\x02\x02\u0253\u0255\x03\x02\x02\x02\u0254\u0252\x03\x02\x02\x02\u0255" +
		"\u0257\x05f4\x02\u0256\u0252\x03\x02\x02\x02\u0256\u0257\x03\x02\x02\x02" +
		"\u0257\u0259\x03\x02\x02\x02\u0258\u025A\x05 \x11\x02\u0259\u0258\x03" +
		"\x02\x02\x02\u0259\u025A\x03\x02\x02\x02\u025A\x19\x03\x02\x02\x02\u025B" +
		"\u0263\x05\x1C\x0F\x02\u025C\u025E\x075\x02\x02\u025D\u025C\x03\x02\x02" +
		"\x02\u025E\u0261\x03\x02\x02\x02\u025F\u025D\x03\x02\x02\x02\u025F\u0260" +
		"\x03\x02\x02\x02\u0260\u0262\x03\x02\x02\x02\u0261\u025F\x03\x02\x02\x02" +
		"\u0262\u0264\x05f4\x02\u0263\u025F\x03\x02\x02\x02\u0263\u0264\x03\x02" +
		"\x02\x02\u0264\u0266\x03\x02\x02\x02\u0265\u0267\x05 \x11\x02\u0266\u0265" +
		"\x03\x02\x02\x02\u0266\u0267\x03\x02\x02\x02\u0267\x1B\x03\x02\x02\x02" +
		"\u0268\u0269\x07L\x02\x02\u0269\u026A\x05\xA8U\x02\u026A\u026B\x07\x1D" +
		"\x02\x02\u026B\x1D\x03\x02\x02\x02\u026C\u026D\x07\x1C\x02\x02\u026D\u026E" +
		"\x05\xA8U\x02\u026E\u026F\x07\x1D\x02\x02\u026F\x1F\x03\x02\x02\x02\u0270" +
		"\u0271\x07M\x02\x02\u0271\u0272\x05\xA8U\x02\u0272\u0273\x07\x1D\x02\x02" +
		"\u0273!\x03\x02\x02\x02\u0274\u0275\x05\xA8U\x02\u0275#\x03\x02\x02\x02" +
		"\u0276\u0277\x05\xA8U\x02\u0277%\x03\x02\x02\x02\u0278\u0279\x05\xACW" +
		"\x02\u0279\u027A\x05$\x13\x02\u027A\'\x03\x02\x02\x02\u027B\u0293\x07" +
		"\xA2\x02\x02\u027C\u0293\x076\x02\x02\u027D\u0293\x05,\x17\x02\u027E\u0293" +
		"\x05\x9EP\x02\u027F\u0293\x05\x88E\x02\u0280\u0293\x05~@\x02\u0281\u0293" +
		"\x05\x94K\x02\u0282\u0293\x05\x90I\x02\u0283\u0293\x05\x92J\x02\u0284" +
		"\u0293\x05\xA8U\x02\u0285\u0293\x05\x84C\x02\u0286\u0293\x05\x96L\x02" +
		"\u0287\u0293\x05f4\x02\u0288\u0293\x05p9\x02\u0289\u0293\x05b2\x02\u028A" +
		"\u0293\x05V,\x02\u028B\u0293\x05X-\x02\u028C\u0293\x05\\/\x02\u028D\u0293" +
		"\x05Z.\x02\u028E\u0293\x05^0\x02\u028F\u0293\x05\x82B\x02\u0290\u0293" +
		"\x05\xA4S\x02\u0291\u0293\x05\xB0Y\x02\u0292\u027B\x03\x02\x02\x02\u0292" +
		"\u027C\x03\x02\x02\x02\u0292\u027D\x03\x02\x02\x02\u0292\u027E\x03\x02" +
		"\x02\x02\u0292\u027F\x03\x02\x02\x02\u0292\u0280\x03\x02\x02\x02\u0292" +
		"\u0281\x03\x02\x02\x02\u0292\u0282\x03\x02\x02\x02\u0292\u0283\x03\x02" +
		"\x02\x02\u0292\u0284\x03\x02\x02\x02\u0292\u0285\x03\x02\x02\x02\u0292" +
		"\u0286\x03\x02\x02\x02\u0292\u0287\x03\x02\x02\x02\u0292\u0288\x03\x02" +
		"\x02\x02\u0292\u0289\x03\x02\x02\x02\u0292\u028A\x03\x02\x02\x02\u0292" +
		"\u028B\x03\x02\x02\x02\u0292\u028C\x03\x02\x02\x02\u0292\u028D\x03\x02" +
		"\x02\x02\u0292\u028E\x03\x02\x02\x02\u0292\u028F\x03\x02\x02\x02\u0292" +
		"\u0290\x03\x02\x02\x02\u0292\u0291\x03\x02\x02\x02\u0293)\x03\x02\x02" +
		"\x02\u0294\u0295\x05(\x15\x02\u0295+\x03\x02\x02\x02\u0296\u029E\x05." +
		"\x18\x02\u0297\u029D\x05.\x18\x02\u0298\u029D\x05\x90I\x02\u0299\u029D" +
		"\x05\x92J\x02\u029A\u029D\x05~@\x02\u029B\u029D\x05\x84C\x02\u029C\u0297" +
		"\x03\x02\x02\x02\u029C\u0298\x03\x02\x02\x02\u029C\u0299\x03\x02\x02\x02" +
		"\u029C\u029A\x03\x02\x02\x02\u029C\u029B\x03\x02\x02\x02\u029D\u02A0\x03" +
		"\x02\x02\x02\u029E\u029C\x03\x02\x02\x02\u029E\u029F\x03\x02\x02\x02\u029F" +
		"-\x03\x02\x02\x02\u02A0\u029E\x03\x02\x02\x02\u02A1\u02A5\x07\x13\x02" +
		"\x02\u02A2\u02A6\x073\x02\x02\u02A3\u02A6\x074\x02\x02\u02A4\u02A6\x03" +
		"\x02\x02\x02\u02A5\u02A2\x03\x02\x02\x02\u02A5\u02A3\x03\x02\x02\x02\u02A5" +
		"\u02A4\x03\x02\x02\x02\u02A6\u02AA\x03\x02\x02\x02\u02A7\u02A9\x05\xA8" +
		"U\x02\u02A8\u02A7\x03\x02\x02\x02\u02A9\u02AC\x03\x02\x02\x02\u02AA\u02A8" +
		"\x03\x02\x02\x02\u02AA\u02AB\x03\x02\x02\x02\u02AB\u02AD\x03\x02\x02\x02" +
		"\u02AC\u02AA\x03\x02\x02\x02\u02AD\u02AE\x05\xAAV\x02\u02AE/\x03\x02\x02" +
		"\x02\u02AF\u02B0\x07 \x02\x02\u02B01\x03\x02\x02\x02\u02B1\u02B2\x07J" +
		"\x02\x02\u02B2\u02B3\x073\x02\x02\u02B3\u02B4\x07\x1D\x02\x02\u02B43\x03" +
		"\x02\x02\x02\u02B5\u02B7\x056\x1C\x02\u02B6\u02B5\x03\x02\x02\x02\u02B7" +
		"\u02BA\x03\x02\x02\x02\u02B8\u02B6\x03\x02\x02\x02\u02B8\u02B9\x03\x02" +
		"\x02\x02\u02B9\u02C0\x03\x02\x02\x02\u02BA\u02B8\x03\x02\x02\x02\u02BB" +
		"\u02BF\x07\x8E\x02\x02\u02BC\u02BF\x07\x8F\x02\x02\u02BD\u02BF\x058\x1D" +
		"\x02\u02BE\u02BB\x03\x02\x02\x02\u02BE\u02BC\x03\x02\x02\x02\u02BE\u02BD" +
		"\x03\x02\x02\x02\u02BF\u02C2\x03\x02\x02\x02\u02C0\u02BE\x03\x02\x02\x02" +
		"\u02C0\u02C1\x03\x02\x02\x02\u02C15\x03\x02\x02\x02\u02C2\u02C0\x03\x02" +
		"\x02\x02\u02C3\u02C4\t\x03\x02\x02\u02C47\x03\x02\x02\x02\u02C5\u02CF" +
		"\x05<\x1F\x02\u02C6\u02CF\x05t;\x02\u02C7\u02CF\x05> \x02\u02C8\u02CF" +
		"\x05@!\x02\u02C9\u02CF\x05B\"\x02\u02CA\u02CF\x05D#\x02\u02CB\u02CF\x05" +
		"F$\x02\u02CC\u02CF\x05H%\x02\u02CD\u02CF\x07c\x02\x02\u02CE\u02C5\x03" +
		"\x02\x02\x02\u02CE\u02C6\x03\x02\x02\x02\u02CE\u02C7\x03\x02\x02\x02\u02CE" +
		"\u02C8\x03\x02\x02\x02\u02CE\u02C9\x03\x02\x02\x02\u02CE\u02CA\x03\x02" +
		"\x02\x02\u02CE\u02CB\x03\x02\x02\x02\u02CE\u02CC\x03\x02\x02\x02\u02CE" +
		"\u02CD\x03\x02\x02\x02\u02CF9\x03\x02\x02\x02\u02D0\u02D6\x07\x8C\x02" +
		"\x02\u02D1\u02D6\x07\x8D\x02\x02\u02D2\u02D6\x07\x8E\x02\x02\u02D3\u02D6" +
		"\x07\x8F\x02\x02\u02D4\u02D6\x03\x02\x02\x02\u02D5\u02D0\x03\x02\x02\x02" +
		"\u02D5\u02D1\x03\x02\x02\x02\u02D5\u02D2\x03\x02\x02\x02\u02D5\u02D3\x03" +
		"\x02\x02\x02\u02D5\u02D4\x03\x02\x02\x02\u02D6;\x03\x02\x02\x02\u02D7" +
		"\u02DA\x07Z\x02\x02\u02D8\u02DB\x07.\x02\x02\u02D9\u02DB\x07\x9F\x02\x02" +
		"\u02DA\u02D8\x03\x02\x02\x02\u02DA\u02D9\x03\x02\x02\x02\u02DA\u02DB\x03" +
		"\x02\x02\x02\u02DB\u02E6\x03\x02\x02\x02\u02DC\u02DE\x07q\x02\x02\u02DD" +
		"\u02DF\x07.\x02\x02\u02DE\u02DD\x03\x02\x02\x02\u02DE\u02DF\x03\x02\x02" +
		"\x02\u02DF\u02E6\x03\x02\x02\x02\u02E0\u02E2\x07[\x02\x02\u02E1\u02E3" +
		"\x07.\x02\x02\u02E2\u02E1\x03\x02\x02\x02\u02E2\u02E3\x03\x02\x02\x02" +
		"\u02E3\u02E6\x03\x02\x02\x02\u02E4\u02E6\x07\\\x02\x02\u02E5\u02D7\x03" +
		"\x02\x02\x02\u02E5\u02DC\x03\x02\x02\x02\u02E5\u02E0\x03\x02\x02\x02\u02E5" +
		"\u02E4\x03\x02\x02\x02\u02E6=\x03\x02\x02\x02\u02E7\u02EA\t\x04\x02\x02" +
		"\u02E8\u02E9\x07\x1E\x02\x02\u02E9\u02EB\x070\x02\x02\u02EA\u02E8\x03" +
		"\x02\x02\x02\u02EA\u02EB\x03\x02\x02\x02\u02EB?\x03\x02\x02\x02\u02EC" +
		"\u02ED\t\x05\x02\x02\u02EDA\x03\x02\x02\x02\u02EE\u02EF\t\x06\x02\x02" +
		"\u02EFC\x03\x02\x02\x02\u02F0\u02F1\t\x07\x02\x02\u02F1E\x03\x02\x02\x02" +
		"\u02F2\u02F3\t\b\x02\x02\u02F3G\x03\x02\x02\x02\u02F4\u02F5\t\t\x02\x02" +
		"\u02F5I\x03\x02\x02\x02\u02F6\u02F7\t\n\x02\x02\u02F7K\x03\x02\x02\x02" +
		"\u02F8\u02F9\t\v\x02\x02\u02F9M\x03\x02\x02\x02\u02FA\u02FB\t\f\x02\x02" +
		"\u02FBO\x03\x02\x02\x02\u02FC\u02FD\t\r\x02\x02\u02FDQ\x03\x02\x02\x02" +
		"\u02FE\u0301\x07h\x02\x02\u02FF\u0300\x07\x1E\x02\x02\u0300\u0302\x07" +
		"0\x02\x02\u0301\u02FF\x03\x02\x02\x02\u0301\u0302\x03\x02\x02\x02\u0302" +
		"\u030E\x03\x02\x02\x02\u0303\u0306\x07{\x02\x02\u0304\u0305\x07\x1E\x02" +
		"\x02\u0305\u0307\x070\x02\x02\u0306\u0304\x03\x02\x02\x02\u0306\u0307" +
		"\x03\x02\x02\x02\u0307\u030E\x03\x02\x02\x02\u0308\u030B\x07\x88\x02\x02" +
		"\u0309\u030A\x07\x1E\x02\x02\u030A\u030C\x070\x02\x02\u030B\u0309\x03" +
		"\x02\x02\x02\u030B\u030C\x03\x02\x02\x02\u030C\u030E\x03\x02\x02\x02\u030D" +
		"\u02FE\x03\x02\x02\x02\u030D\u0303\x03\x02\x02\x02\u030D\u0308\x03\x02" +
		"\x02\x02\u030ES\x03\x02\x02\x02\u030F\u0310\t\x0E\x02\x02\u0310U\x03\x02" +
		"\x02\x02\u0311\u0312\x05J&\x02\u0312\u0313\x07\x1E\x02\x02\u0313\u0314" +
		"\x05|?\x02\u0314\u0315\x07\x1D\x02\x02\u0315\u0318\x03\x02\x02\x02\u0316" +
		"\u0318\x071\x02\x02\u0317\u0311\x03\x02\x02\x02\u0317\u0316\x03\x02\x02" +
		"\x02\u0318W\x03\x02\x02\x02\u0319\u031A\x05L\'\x02\u031A\u031B\x07\x1E" +
		"\x02\x02\u031B\u031C\x05|?\x02\u031C\u0321\x07\x1D\x02\x02\u031D\u031E" +
		"\x07M\x02\x02\u031E\u031F\x05\xAEX\x02\u031F\u0320\x07\x1D\x02\x02\u0320" +
		"\u0322\x03\x02\x02\x02\u0321\u031D\x03\x02\x02\x02\u0321\u0322\x03\x02" +
		"\x02\x02\u0322Y\x03\x02\x02\x02\u0323\u0324\x05P)\x02\u0324\u0325\x07" +
		"\x1E\x02\x02\u0325\u0326\x05|?\x02\u0326\u032B\x07\x1D\x02\x02\u0327\u0328" +
		"\x07M\x02\x02\u0328\u0329\x05\xAEX\x02\u0329\u032A\x07\x1D\x02\x02\u032A" +
		"\u032C\x03\x02\x02\x02\u032B\u0327\x03\x02\x02\x02\u032B\u032C\x03\x02" +
		"\x02\x02\u032C[\x03\x02\x02\x02\u032D\u032E\x05N(\x02\u032E\u0331\x07" +
		"\x1E\x02\x02\u032F\u0332\x05|?\x02\u0330\u0332\x05z>\x02\u0331\u032F\x03" +
		"\x02\x02\x02\u0331\u0330\x03\x02\x02\x02\u0332\u0333\x03\x02\x02\x02\u0333" +
		"\u0338\x07\x1D\x02\x02\u0334\u0335\x07M\x02\x02\u0335\u0336\x05\xAEX\x02" +
		"\u0336\u0337\x07\x1D\x02\x02\u0337\u0339\x03\x02\x02\x02\u0338\u0334\x03" +
		"\x02\x02\x02\u0338\u0339\x03\x02\x02\x02\u0339]\x03\x02\x02\x02\u033A" +
		"\u033E\x05`1\x02\u033B\u033D\x05x=\x02\u033C\u033B\x03\x02\x02\x02\u033D" +
		"\u0340\x03\x02\x02\x02\u033E\u033C\x03\x02\x02\x02\u033E\u033F\x03\x02" +
		"\x02\x02\u033F_\x03\x02\x02\x02\u0340\u033E\x03\x02\x02\x02\u0341\u0342" +
		"\x05T+\x02\u0342\u0346\x07\x1E\x02\x02\u0343\u0345\x07\x04\x02\x02\u0344" +
		"\u0343\x03\x02\x02\x02\u0345\u0348\x03\x02\x02\x02\u0346\u0344\x03\x02" +
		"\x02\x02\u0346\u0347\x03\x02\x02\x02\u0347\u0349\x03\x02\x02\x02\u0348" +
		"\u0346\x03\x02\x02\x02\u0349\u034A\x05|?\x02\u034A\u034B\x07\x1D\x02\x02" +
		"\u034Ba\x03\x02\x02\x02\u034C\u0350\x05d3\x02\u034D\u034F\x05x=\x02\u034E" +
		"\u034D\x03\x02\x02\x02\u034F\u0352\x03\x02\x02\x02\u0350\u034E\x03\x02" +
		"\x02\x02\u0350\u0351\x03\x02\x02\x02\u0351c\x03\x02\x02\x02\u0352\u0350" +
		"\x03\x02\x02\x02\u0353\u0354\x05R*\x02\u0354\u0355\x07\x1E\x02\x02\u0355" +
		"\u0356\x05|?\x02\u0356\u035B\x07\x1D\x02\x02\u0357\u0358\x07M\x02\x02" +
		"\u0358\u0359\x05\xAEX\x02\u0359\u035A\x07\x1D\x02\x02\u035A\u035C\x03" +
		"\x02\x02\x02\u035B\u0357\x03\x02\x02\x02\u035B\u035C\x03\x02\x02\x02\u035C" +
		"e\x03\x02\x02\x02\u035D\u0361\x05h5\x02\u035E\u0360\x05l7\x02\u035F\u035E" +
		"\x03\x02\x02\x02\u0360\u0363\x03\x02\x02\x02\u0361\u035F\x03\x02\x02\x02" +
		"\u0361\u0362\x03\x02\x02\x02\u0362\u0366\x03\x02\x02\x02\u0363\u0361\x03" +
		"\x02\x02\x02\u0364\u0365\x075\x02\x02\u0365\u0367\x07O\x02\x02\u0366\u0364" +
		"\x03\x02\x02\x02\u0366\u0367\x03\x02\x02\x02\u0367g\x03\x02\x02\x02\u0368" +
		"\u0369\x05j6\x02\u0369\u036D\x07\x1E\x02\x02\u036A\u036C\x07\x04\x02\x02" +
		"\u036B\u036A\x03\x02\x02\x02\u036C\u036F\x03\x02\x02\x02\u036D\u036B\x03" +
		"\x02\x02\x02\u036D\u036E\x03\x02\x02\x02\u036E\u0370\x03\x02\x02\x02\u036F" +
		"\u036D\x03\x02\x02\x02\u0370\u0371\x05|?\x02\u0371\u0372\x07\x1D\x02\x02" +
		"\u0372i\x03\x02\x02\x02\u0373\u0376\x07e\x02\x02\u0374\u0377\x07.\x02" +
		"\x02\u0375\u0377\x07\x9F\x02\x02\u0376\u0374\x03\x02\x02\x02\u0376\u0375" +
		"\x03\x02\x02\x02\u0376\u0377\x03\x02\x02\x02\u0377\u0382\x03\x02\x02\x02" +
		"\u0378\u037A\x07z\x02\x02\u0379\u037B\x07.\x02\x02\u037A\u0379\x03\x02" +
		"\x02\x02\u037A\u037B\x03\x02\x02\x02\u037B\u0382\x03\x02\x02\x02\u037C" +
		"\u037E\x07f\x02\x02\u037D\u037F\x07.\x02\x02\u037E\u037D\x03\x02\x02\x02" +
		"\u037E\u037F\x03\x02\x02\x02\u037F\u0382\x03\x02\x02\x02\u0380\u0382\x07" +
		"g\x02\x02\u0381\u0373\x03\x02\x02\x02\u0381\u0378\x03\x02\x02\x02\u0381" +
		"\u037C\x03\x02\x02\x02\u0381\u0380\x03\x02\x02\x02\u0382k\x03\x02\x02" +
		"\x02\u0383\u0384\x07K\x02\x02\u0384\u0385\x07\x1E\x02\x02\u0385\u0386" +
		"\x05|?\x02\u0386\u0387\x07\x1D\x02\x02\u0387\u0395\x03\x02\x02\x02\u0388" +
		"\u0389\t\x0F\x02\x02\u0389\u038A\x07\x1E\x02\x02\u038A\u038B\x073\x02" +
		"\x02\u038B\u0395\x07\x1D\x02\x02\u038C\u0390\t\x10\x02\x02\u038D\u038F" +
		"\v\x02\x02\x02\u038E\u038D\x03\x02\x02\x02\u038F\u0392\x03\x02\x02\x02" +
		"\u0390\u0391\x03\x02\x02\x02\u0390\u038E\x03\x02\x02\x02\u0391\u0393\x03" +
		"\x02\x02\x02\u0392\u0390\x03\x02\x02\x02\u0393\u0395\x07\x1D\x02\x02\u0394" +
		"\u0383\x03\x02\x02\x02\u0394\u0388\x03\x02\x02\x02\u0394\u038C\x03\x02" +
		"\x02\x02\u0395m\x03\x02\x02\x02\u0396\u0397\x07K\x02\x02\u0397\u0398\x07" +
		"\x1E\x02\x02\u0398\u0399\x05|?\x02\u0399\u039A\x07\x1D\x02\x02\u039A\u03A8" +
		"\x03\x02\x02\x02\u039B\u039C\t\x0F\x02\x02\u039C\u039D\x07\x1E\x02\x02" +
		"\u039D\u039E\x073\x02\x02\u039E\u03A8\x07\x1D\x02\x02\u039F\u03A3\t\x10" +
		"\x02\x02\u03A0\u03A2\v\x02\x02\x02\u03A1\u03A0\x03\x02\x02\x02\u03A2\u03A5" +
		"\x03\x02\x02\x02\u03A3\u03A4\x03\x02\x02\x02\u03A3\u03A1\x03\x02\x02\x02" +
		"\u03A4\u03A6\x03\x02\x02\x02\u03A5\u03A3\x03\x02\x02\x02\u03A6\u03A8\x07" +
		"\x1D\x02\x02\u03A7\u0396\x03\x02\x02\x02\u03A7\u039B\x03\x02\x02\x02\u03A7" +
		"\u039F\x03\x02\x02\x02\u03A8o\x03\x02\x02\x02\u03A9\u03AD\x05r:\x02\u03AA" +
		"\u03AC\x05x=\x02\u03AB\u03AA\x03\x02\x02\x02\u03AC\u03AF\x03\x02\x02\x02" +
		"\u03AD\u03AB\x03\x02\x02\x02\u03AD\u03AE\x03\x02\x02\x02\u03AEq\x03\x02" +
		"\x02\x02\u03AF\u03AD\x03\x02\x02\x02\u03B0\u03B1\x05v<\x02\u03B1\u03B2" +
		"\x07\x1E\x02\x02\u03B2\u03B3\x05|?\x02\u03B3\u03B8\x07\x1D\x02\x02\u03B4" +
		"\u03B5\x07M\x02\x02\u03B5\u03B6\x05\xAEX\x02\u03B6\u03B7\x07\x1D\x02\x02" +
		"\u03B7\u03B9\x03\x02\x02\x02\u03B8\u03B4\x03\x02\x02\x02\u03B8\u03B9\x03" +
		"\x02\x02\x02\u03B9s\x03\x02\x02\x02\u03BA\u03BD\x07Y\x02\x02\u03BB\u03BC" +
		"\x07\x1E\x02\x02\u03BC\u03BE\x07/\x02\x02\u03BD\u03BB\x03\x02\x02\x02" +
		"\u03BD\u03BE\x03\x02\x02\x02\u03BE\u03C5\x03\x02\x02\x02\u03BF\u03C2\x07" +
		"p\x02\x02\u03C0\u03C1\x07\x1E\x02\x02\u03C1\u03C3\x07/\x02\x02\u03C2\u03C0" +
		"\x03\x02\x02\x02\u03C2\u03C3\x03\x02\x02\x02\u03C3\u03C5\x03\x02\x02\x02" +
		"\u03C4\u03BA\x03\x02\x02\x02\u03C4\u03BF\x03\x02\x02\x02\u03C5u\x03\x02" +
		"\x02\x02\u03C6\u03C9\x07d\x02\x02\u03C7\u03C8\x07\x1E\x02\x02\u03C8\u03CA" +
		"\x07/\x02\x02\u03C9\u03C7\x03\x02\x02\x02\u03C9\u03CA\x03\x02\x02\x02" +
		"\u03CA\u03D6\x03\x02\x02\x02\u03CB\u03CE\x07y\x02\x02\u03CC\u03CD\x07" +
		"\x1E\x02\x02\u03CD\u03CF\x07/\x02\x02\u03CE\u03CC\x03\x02\x02\x02\u03CE" +
		"\u03CF\x03\x02\x02\x02\u03CF\u03D6\x03\x02\x02\x02\u03D0\u03D3\x07\x89" +
		"\x02\x02\u03D1\u03D2\x07\x1E\x02\x02\u03D2\u03D4\x07/\x02\x02\u03D3\u03D1" +
		"\x03\x02\x02\x02\u03D3\u03D4\x03\x02\x02\x02\u03D4\u03D6\x03\x02\x02\x02" +
		"\u03D5\u03C6\x03\x02\x02\x02\u03D5\u03CB\x03\x02\x02\x02\u03D5\u03D0\x03" +
		"\x02\x02\x02\u03D6w\x03\x02\x02\x02\u03D7\u03D8\x07\x16\x02\x02\u03D8" +
		"\u03DB\x05\xA8U\x02\u03D9\u03DB\x07K\x02\x02\u03DA\u03D7\x03\x02\x02\x02" +
		"\u03DA\u03D9\x03\x02\x02\x02\u03DB\u03DC\x03\x02\x02\x02\u03DC\u03E0\x07" +
		"\x1E\x02\x02\u03DD\u03DF\x07\x04\x02\x02\u03DE\u03DD\x03\x02\x02\x02\u03DF" +
		"\u03E2\x03\x02\x02\x02\u03E0\u03DE\x03\x02\x02\x02\u03E0\u03E1\x03\x02" +
		"\x02\x02\u03E1\u03E5\x03\x02\x02\x02\u03E2\u03E0\x03\x02\x02\x02\u03E3" +
		"\u03E6\x05\xA8U\x02\u03E4\u03E6\x075\x02\x02\u03E5\u03E3\x03\x02\x02\x02" +
		"\u03E5\u03E4\x03\x02\x02\x02\u03E6\u03E7\x03\x02\x02\x02\u03E7\u03E5\x03" +
		"\x02\x02\x02\u03E7\u03E8\x03\x02\x02\x02\u03E8\u03E9\x03\x02\x02\x02\u03E9" +
		"\u03F7\x07\x1D\x02\x02\u03EA\u03EB\t\x0F\x02\x02\u03EB\u03EC";
	private static readonly _serializedATNSegment2: string =
		"\x07\x1E\x02\x02\u03EC\u03ED\x073\x02\x02\u03ED\u03F7\x07\x1D\x02\x02" +
		"\u03EE\u03F2\t\x10\x02\x02\u03EF\u03F1\v\x02\x02\x02\u03F0\u03EF\x03\x02" +
		"\x02\x02\u03F1\u03F4\x03\x02\x02\x02\u03F2\u03F3\x03\x02\x02\x02\u03F2" +
		"\u03F0\x03\x02\x02\x02\u03F3\u03F5\x03\x02\x02\x02\u03F4\u03F2\x03\x02" +
		"\x02\x02\u03F5\u03F7\x07\x1D\x02\x02\u03F6\u03DA\x03\x02\x02\x02\u03F6" +
		"\u03EA\x03\x02\x02\x02\u03F6\u03EE\x03\x02\x02\x02\u03F7y\x03\x02\x02" +
		"\x02\u03F8\u03F9\x07\x9E\x02\x02\u03F9\u03FA\x07!\x02\x02\u03FA\u03FB" +
		"\x073\x02\x02\u03FB{\x03\x02\x02\x02\u03FC\u03FD\x07\xA1\x02\x02\u03FD" +
		"}\x03\x02\x02\x02\u03FE\u03FF\x07\x1B\x02\x02\u03FF\u0407\x07\x1D\x02" +
		"\x02\u0400\u0402\x07\x04\x02\x02\u0401\u0400\x03\x02\x02\x02\u0402\u0405" +
		"\x03\x02\x02\x02\u0403\u0401\x03\x02\x02\x02\u0403\u0404\x03\x02\x02\x02" +
		"\u0404\u0406\x03\x02\x02\x02\u0405\u0403\x03\x02\x02\x02\u0406\u0408\x05" +
		"\x80A\x02\u0407\u0403\x03\x02\x02\x02\u0407\u0408\x03\x02\x02\x02\u0408" +
		"\u041D\x03\x02\x02\x02\u0409\u040A\x07\x1B\x02\x02\u040A\u040F\x05\xA8" +
		"U\x02\u040B\u040E\x07\x1E\x02\x02\u040C\u040E\x05\xAEX\x02\u040D\u040B" +
		"\x03\x02\x02\x02\u040D\u040C\x03\x02\x02\x02\u040E\u0411\x03\x02\x02\x02" +
		"\u040F\u040D\x03\x02\x02\x02\u040F\u0410\x03\x02\x02\x02\u0410\u0412\x03" +
		"\x02\x02\x02\u0411\u040F\x03\x02\x02\x02\u0412\u041A\x07\x1D\x02\x02\u0413" +
		"\u0415\x07\x04\x02\x02\u0414\u0413\x03\x02\x02\x02\u0415\u0418\x03\x02" +
		"\x02\x02\u0416\u0414\x03\x02\x02\x02\u0416\u0417\x03\x02\x02\x02\u0417" +
		"\u0419\x03\x02\x02\x02\u0418\u0416\x03\x02\x02\x02\u0419\u041B\x05\x80" +
		"A\x02\u041A\u0416\x03\x02\x02\x02\u041A\u041B\x03\x02\x02\x02\u041B\u041D" +
		"\x03\x02\x02\x02\u041C\u03FE\x03\x02\x02\x02\u041C\u0409\x03\x02\x02\x02" +
		"\u041D\x7F\x03\x02\x02\x02\u041E\u041F\x07\x1B\x02\x02\u041F\u0424\x05" +
		"\xA8U\x02\u0420\u0423\x07\x1E\x02\x02\u0421\u0423\x05\xAEX\x02\u0422\u0420" +
		"\x03\x02\x02\x02\u0422\u0421\x03\x02\x02\x02\u0423\u0426\x03\x02\x02\x02" +
		"\u0424\u0422\x03\x02\x02\x02\u0424\u0425\x03\x02\x02\x02\u0425\u0427\x03" +
		"\x02\x02\x02\u0426\u0424\x03\x02\x02\x02\u0427\u0428\x07\x1D\x02\x02\u0428" +
		"\x81\x03\x02\x02\x02\u0429\u042B\x07\x10\x02\x02\u042A\u042C\x05\xA8U" +
		"\x02\u042B\u042A\x03\x02\x02\x02\u042B\u042C\x03\x02\x02\x02\u042C\u042D" +
		"\x03\x02\x02\x02\u042D\u0434\x07\x1D\x02\x02\u042E\u0430\x07\x11\x02\x02" +
		"\u042F\u0431\x05\xA8U\x02\u0430\u042F\x03\x02\x02\x02\u0430\u0431\x03" +
		"\x02\x02\x02\u0431\u0432\x03\x02\x02\x02\u0432\u0434\x07\x1D\x02\x02\u0433" +
		"\u0429\x03\x02\x02\x02\u0433\u042E\x03\x02\x02\x02\u0434\x83\x03\x02\x02" +
		"\x02\u0435\u043D\x07D\x02\x02\u0436\u043D\x07B\x02\x02\u0437\u0439\x07" +
		"C\x02\x02\u0438\u043A\x078\x02\x02\u0439\u0438\x03\x02\x02\x02\u0439\u043A" +
		"\x03\x02\x02\x02\u043A\u043B\x03\x02\x02\x02\u043B\u043D\x07\x02\x02\x03" +
		"\u043C\u0435\x03\x02\x02\x02\u043C\u0436\x03\x02\x02\x02\u043C\u0437\x03" +
		"\x02\x02\x02\u043D\x85\x03\x02\x02\x02\u043E\u0440\x07o\x02\x02\u043F" +
		"\u0441\x05\xA8U\x02\u0440\u043F\x03\x02\x02\x02\u0440\u0441\x03\x02\x02" +
		"\x02\u0441\u0457\x03\x02\x02\x02\u0442\u044C\x05\xA8U\x02\u0443\u0447" +
		"\x075\x02\x02\u0444\u0446\x07\x04\x02\x02\u0445\u0444\x03\x02\x02\x02" +
		"\u0446\u0449\x03\x02\x02\x02\u0447\u0445\x03\x02\x02\x02\u0447\u0448\x03" +
		"\x02\x02\x02\u0448\u044B\x03\x02\x02\x02\u0449\u0447\x03\x02\x02\x02\u044A" +
		"\u0443\x03\x02\x02\x02\u044B\u044E\x03\x02\x02\x02\u044C\u044A\x03\x02" +
		"\x02\x02\u044C\u044D\x03\x02\x02\x02\u044D\u0452\x03\x02\x02\x02\u044E" +
		"\u044C\x03\x02\x02\x02\u044F\u0451\x075\x02\x02\u0450\u044F\x03\x02\x02" +
		"\x02\u0451\u0454\x03\x02\x02\x02\u0452\u0450\x03\x02\x02\x02\u0452\u0453" +
		"\x03\x02\x02\x02\u0453\u0456\x03\x02\x02\x02\u0454\u0452\x03\x02\x02\x02" +
		"\u0455\u0442\x03\x02\x02\x02\u0456\u0459\x03\x02\x02\x02\u0457\u0455\x03" +
		"\x02\x02\x02\u0457\u0458\x03\x02\x02\x02\u0458\u045A\x03\x02\x02\x02\u0459" +
		"\u0457\x03\x02\x02\x02\u045A\u0466\x07\x1D\x02\x02\u045B\u0461\x07o\x02" +
		"\x02\u045C\u0460\x05\xA8U\x02\u045D\u0460\x075\x02\x02\u045E\u0460\x07" +
		"\x04\x02\x02\u045F\u045C\x03\x02\x02\x02\u045F\u045D\x03\x02\x02\x02\u045F" +
		"\u045E\x03\x02\x02\x02\u0460\u0463\x03\x02\x02\x02\u0461\u045F\x03\x02" +
		"\x02\x02\u0461\u0462\x03\x02\x02\x02\u0462\u0464\x03\x02\x02\x02\u0463" +
		"\u0461\x03\x02\x02\x02\u0464\u0466\x07\x02\x02\x03\u0465\u043E\x03\x02" +
		"\x02\x02\u0465\u045B\x03\x02\x02\x02\u0466\x87\x03\x02\x02\x02\u0467\u046C" +
		"\x07<\x02\x02\u0468\u046D\x05\xA8U\x02\u0469\u046D\x07\x1E\x02\x02\u046A" +
		"\u046D\x07\xA1\x02\x02\u046B\u046D\x075\x02\x02\u046C\u0468\x03\x02\x02" +
		"\x02\u046C\u0469\x03\x02\x02\x02\u046C\u046A\x03\x02\x02\x02\u046C\u046B" +
		"\x03\x02\x02\x02\u046D\u046E\x03\x02\x02\x02\u046E\u046C\x03\x02\x02\x02" +
		"\u046E\u046F\x03\x02\x02\x02\u046F\u0470\x03\x02\x02\x02\u0470\u047E\x07" +
		"\x1D\x02\x02\u0471\u0479\x07<\x02\x02\u0472\u0478\x05\xA8U\x02\u0473\u0478" +
		"\x07\x1E\x02\x02\u0474\u0478\x07\xA1\x02\x02\u0475\u0478\x075\x02\x02" +
		"\u0476\u0478\x07\x04\x02\x02\u0477\u0472\x03\x02\x02\x02\u0477\u0473\x03" +
		"\x02\x02\x02\u0477\u0474\x03\x02\x02\x02\u0477\u0475\x03\x02\x02\x02\u0477" +
		"\u0476\x03\x02\x02\x02\u0478\u047B\x03\x02\x02\x02\u0479\u0477\x03\x02" +
		"\x02\x02\u0479\u047A\x03\x02\x02\x02\u047A\u047C\x03\x02\x02\x02\u047B" +
		"\u0479\x03\x02\x02\x02\u047C\u047E\x07\x02\x02\x03\u047D\u0467\x03\x02" +
		"\x02\x02\u047D\u0471\x03\x02\x02\x02\u047E\x89\x03\x02\x02\x02\u047F\u0480" +
		"\x07;\x02\x02\u0480\u0481\x05\xA8U\x02\u0481\u0482\x07\x1D\x02\x02\u0482" +
		"\x8B\x03\x02\x02\x02\u0483\u0487\x07V\x02\x02\u0484\u0488\x05\xA8U\x02" +
		"\u0485\u0488\x07\x1E\x02\x02\u0486\u0488\x075\x02\x02\u0487\u0484\x03" +
		"\x02\x02\x02\u0487\u0485\x03\x02\x02\x02\u0487\u0486\x03\x02\x02\x02\u0488" +
		"\u0489\x03\x02\x02\x02\u0489\u0487\x03\x02\x02\x02\u0489\u048A\x03\x02" +
		"\x02\x02\u048A\u048B\x03\x02\x02\x02\u048B\u048D\x07\x1D\x02\x02\u048C" +
		"\u048E\x05\x8EH\x02\u048D\u048C\x03\x02\x02\x02\u048D\u048E\x03\x02\x02" +
		"\x02\u048E\x8D\x03\x02\x02\x02\u048F\u0493\x07V\x02\x02\u0490\u0494\x05" +
		"\xA8U\x02\u0491\u0494\x07\x1E\x02\x02\u0492\u0494\x075\x02\x02\u0493\u0490" +
		"\x03\x02\x02\x02\u0493\u0491\x03\x02\x02\x02\u0493\u0492\x03\x02\x02\x02" +
		"\u0494\u0495\x03\x02\x02\x02\u0495\u0493\x03\x02\x02\x02\u0495\u0496\x03" +
		"\x02\x02\x02\u0496\u0497\x03\x02\x02\x02\u0497\u0498\x07\x1D\x02\x02\u0498" +
		"\x8F\x03\x02\x02\x02\u0499\u049D\x07\x14\x02\x02\u049A\u049C\x075\x02" +
		"\x02\u049B\u049A\x03\x02\x02\x02\u049C\u049F\x03\x02\x02\x02\u049D\u049B" +
		"\x03\x02\x02\x02\u049D\u049E\x03\x02\x02\x02\u049E\u04A1\x03\x02\x02\x02" +
		"\u049F\u049D\x03\x02\x02\x02\u04A0\u04A2\x05\xA8U\x02\u04A1\u04A0\x03" +
		"\x02\x02\x02\u04A1\u04A2\x03\x02\x02\x02\u04A2\u04B8\x03\x02\x02\x02\u04A3" +
		"\u04AD\x05\xA8U\x02\u04A4\u04A8\x075\x02\x02\u04A5\u04A7\x07\x04\x02\x02" +
		"\u04A6\u04A5\x03\x02\x02\x02\u04A7\u04AA\x03\x02\x02\x02\u04A8\u04A6\x03" +
		"\x02\x02\x02\u04A8\u04A9\x03\x02\x02\x02\u04A9\u04AC\x03\x02\x02\x02\u04AA" +
		"\u04A8\x03\x02\x02\x02\u04AB\u04A4\x03\x02\x02\x02\u04AC\u04AF\x03\x02" +
		"\x02\x02\u04AD\u04AB\x03\x02\x02\x02\u04AD\u04AE\x03\x02\x02\x02\u04AE" +
		"\u04B3\x03\x02\x02\x02\u04AF\u04AD\x03\x02\x02\x02\u04B0\u04B2\x075\x02" +
		"\x02\u04B1\u04B0\x03\x02\x02\x02\u04B2\u04B5\x03\x02\x02\x02\u04B3\u04B1" +
		"\x03\x02\x02\x02\u04B3\u04B4\x03\x02\x02\x02\u04B4\u04B7\x03\x02\x02\x02" +
		"\u04B5\u04B3\x03\x02\x02\x02\u04B6\u04A3\x03\x02\x02\x02\u04B7\u04BA\x03" +
		"\x02\x02\x02\u04B8\u04B6\x03\x02\x02\x02\u04B8\u04B9\x03\x02\x02\x02\u04B9" +
		"\u04BB\x03\x02\x02\x02\u04BA\u04B8\x03\x02\x02\x02\u04BB\u04C8\x07\x1D" +
		"\x02\x02\u04BC\u04C0\x07\x14\x02\x02\u04BD\u04BF\x075\x02\x02\u04BE\u04BD" +
		"\x03\x02\x02\x02\u04BF\u04C2\x03\x02\x02\x02\u04C0\u04BE\x03\x02\x02\x02" +
		"\u04C0\u04C1\x03\x02\x02\x02\u04C1\u04C4\x03\x02\x02\x02\u04C2\u04C0\x03" +
		"\x02\x02\x02\u04C3\u04C5\x05\xA8U\x02\u04C4\u04C3\x03\x02\x02\x02\u04C4" +
		"\u04C5\x03\x02\x02\x02\u04C5\u04C6\x03\x02\x02\x02\u04C6\u04C8\x07\x02" +
		"\x02\x03\u04C7\u0499\x03\x02\x02\x02\u04C7\u04BC\x03\x02\x02\x02\u04C8" +
		"\x91\x03\x02\x02\x02\u04C9\u04CB\x07\x15\x02\x02\u04CA\u04CC\n\x11\x02" +
		"\x02\u04CB\u04CA\x03\x02\x02\x02\u04CC\u04CD\x03\x02\x02\x02\u04CD\u04CB" +
		"\x03\x02\x02\x02\u04CD\u04CE\x03\x02\x02\x02\u04CE\u04CF\x03\x02\x02\x02" +
		"\u04CF\u04D0\x07\x1D\x02\x02\u04D0\x93\x03\x02\x02\x02\u04D1\u04D4\x07" +
		"\x1C\x02\x02\u04D2\u04D5\x05\xA8U\x02\u04D3\u04D5\x075\x02\x02\u04D4\u04D2" +
		"\x03\x02\x02\x02\u04D4\u04D3\x03\x02\x02\x02\u04D5\u04D6\x03\x02\x02\x02" +
		"\u04D6\u04D4\x03\x02\x02\x02\u04D6\u04D7\x03\x02\x02\x02\u04D7\u04D8\x03" +
		"\x02\x02\x02\u04D8\u04DE\x07\x1D\x02\x02\u04D9\u04DA\x07\x1C\x02\x02\u04DA" +
		"\u04DB\x05\xA8U\x02\u04DB\u04DC\x07\x02\x02\x03\u04DC\u04DE\x03\x02\x02" +
		"\x02\u04DD\u04D1\x03\x02\x02\x02\u04DD\u04D9\x03\x02\x02\x02\u04DE\x95" +
		"\x03\x02\x02\x02\u04DF\u04E0\x07H\x02\x02\u04E0\u04E1\x05\xA8U\x02\u04E1" +
		"\u04E2\x07\x1D\x02\x02\u04E2\u04E8\x03\x02\x02\x02\u04E3\u04E4\x07I\x02" +
		"\x02\u04E4\u04E5\x05\xA8U\x02\u04E5\u04E6\x07\x1D\x02\x02\u04E6\u04E8" +
		"\x03\x02\x02\x02\u04E7\u04DF\x03\x02\x02\x02\u04E7\u04E3\x03\x02\x02\x02" +
		"\u04E8\x97\x03\x02\x02\x02\u04E9\u04EA\x07?\x02\x02\u04EA\u04EB\x07\x1E" +
		"\x02\x02\u04EB\u04EC\x073\x02\x02\u04EC\u04F3\x07\x1D\x02\x02\u04ED\u04EE" +
		"\x07?\x02\x02\u04EE\u04EF\x07\x1E\x02\x02\u04EF\u04F0\x05\xA8U\x02\u04F0" +
		"\u04F1\x07\x1D\x02\x02\u04F1\u04F3\x03\x02\x02\x02\u04F2\u04E9\x03\x02" +
		"\x02\x02\u04F2\u04ED\x03\x02\x02\x02\u04F3\x99\x03\x02\x02\x02\u04F4\u04F5" +
		"\x07T\x02\x02\u04F5\u04F6\x05\xA8U\x02\u04F6\u04F7\x07\x1D\x02\x02\u04F7" +
		"\x9B\x03\x02\x02\x02\u04F8\u04F9\x07U\x02\x02\u04F9\u04FA\x05\xA8U\x02" +
		"\u04FA\u04FB\x07\x1D\x02\x02\u04FB\x9D\x03\x02\x02\x02\u04FC\u0506\x05" +
		"\xA0Q\x02\u04FD\u04FF\x075\x02\x02\u04FE\u04FD\x03\x02\x02\x02\u04FF\u0502" +
		"\x03\x02\x02\x02\u0500\u04FE\x03\x02\x02\x02\u0500\u0501\x03\x02\x02\x02" +
		"\u0501\u0503\x03\x02\x02\x02\u0502\u0500\x03\x02\x02\x02\u0503\u0505\x05" +
		"\xA0Q\x02\u0504\u0500\x03\x02\x02\x02\u0505\u0508\x03\x02\x02\x02\u0506" +
		"\u0504\x03\x02\x02\x02\u0506\u0507\x03\x02\x02\x02\u0507\x9F\x03\x02\x02" +
		"\x02\u0508\u0506\x03\x02\x02\x02\u0509\u050A\x07\x16\x02\x02\u050A\u050B" +
		"\x05\xA8U\x02\u050B\u050C\t\x12\x02\x02\u050C\u0512\x05\xA8U\x02\u050D" +
		"\u0511\x075\x02\x02\u050E\u0511\x07\x1E\x02\x02\u050F\u0511\x05\xA8U\x02" +
		"\u0510\u050D\x03\x02\x02\x02\u0510\u050E\x03\x02\x02\x02\u0510\u050F\x03" +
		"\x02\x02\x02\u0511\u0514\x03\x02\x02\x02\u0512\u0510\x03\x02\x02\x02\u0512" +
		"\u0513\x03\x02\x02\x02\u0513\u0515\x03\x02\x02\x02\u0514\u0512\x03\x02" +
		"\x02\x02\u0515\u0516\x07\x1D\x02\x02\u0516\u0520\x03\x02\x02\x02\u0517" +
		"\u051B\x07R\x02\x02\u0518\u051A\v\x02\x02\x02\u0519\u0518\x03\x02\x02" +
		"\x02\u051A\u051D\x03\x02\x02\x02\u051B\u051C\x03\x02\x02\x02\u051B\u0519" +
		"\x03\x02\x02\x02\u051C\u051E\x03\x02\x02\x02\u051D\u051B\x03\x02\x02\x02" +
		"\u051E\u0520\x07\x1D\x02\x02\u051F\u0509\x03\x02\x02\x02\u051F\u0517\x03" +
		"\x02\x02\x02\u0520\xA1\x03\x02\x02\x02\u0521\u0525\x07\r\x02\x02\u0522" +
		"\u0526\x05\xA8U\x02\u0523\u0526\x07\x1E\x02\x02\u0524\u0526\x075\x02\x02" +
		"\u0525\u0522\x03\x02\x02\x02\u0525\u0523\x03\x02\x02\x02\u0525\u0524\x03" +
		"\x02\x02\x02\u0526\u0527\x03\x02\x02\x02\u0527\u0525\x03\x02\x02\x02\u0527" +
		"\u0528\x03\x02\x02\x02\u0528\u0529\x03\x02\x02\x02\u0529\u0535\x07\x1D" +
		"\x02\x02\u052A\u0530\x07\r\x02\x02\u052B\u052F\x05\xA8U\x02\u052C\u052F" +
		"\x07\x1E\x02\x02\u052D\u052F\x075\x02\x02\u052E\u052B\x03\x02\x02\x02" +
		"\u052E\u052C\x03\x02\x02\x02\u052E\u052D\x03\x02\x02\x02\u052F\u0532\x03" +
		"\x02\x02\x02\u0530\u052E\x03\x02\x02\x02\u0530\u0531\x03\x02\x02\x02\u0531" +
		"\u0533\x03\x02\x02\x02\u0532\u0530\x03\x02\x02\x02\u0533\u0535\x07\x02" +
		"\x02\x03\u0534\u0521\x03\x02\x02\x02\u0534\u052A\x03\x02\x02\x02\u0535" +
		"\xA3\x03\x02\x02\x02\u0536\u0538\x07\x12\x02\x02\u0537\u0539\x05\xA8U" +
		"\x02\u0538\u0537\x03\x02\x02\x02\u0538\u0539\x03\x02\x02\x02\u0539\u053A" +
		"\x03\x02\x02\x02\u053A\u053B\x07\x1D\x02\x02\u053B\xA5\x03\x02\x02\x02" +
		"\u053C\u053E\x05\xA8U\x02\u053D\u053F\x075\x02\x02\u053E\u053D\x03\x02" +
		"\x02\x02\u053E\u053F\x03\x02\x02\x02\u053F\u0541\x03\x02\x02\x02\u0540" +
		"\u053C\x03\x02\x02\x02\u0541\u0542\x03\x02\x02\x02\u0542\u0540\x03\x02" +
		"\x02\x02\u0542\u0543\x03\x02\x02\x02\u0543\xA7\x03\x02\x02\x02\u0544\u054B" +
		"\x074\x02\x02\u0545\u0547\x07\x04\x02\x02\u0546\u0545\x03\x02\x02\x02" +
		"\u0547\u0548\x03\x02\x02\x02\u0548\u0546\x03\x02\x02\x02\u0548\u0549\x03" +
		"\x02\x02\x02\u0549\u054A\x03\x02\x02\x02\u054A\u054C\x073\x02\x02\u054B" +
		"\u0546\x03\x02\x02\x02\u054B\u054C\x03\x02\x02\x02\u054C\u0573\x03\x02" +
		"\x02\x02\u054D\u0554\x05\xAEX\x02\u054E\u0550\x07\x04\x02\x02\u054F\u054E" +
		"\x03\x02\x02\x02\u0550\u0551\x03\x02\x02\x02\u0551\u054F\x03\x02\x02\x02" +
		"\u0551\u0552\x03\x02\x02\x02\u0552\u0553\x03\x02\x02\x02\u0553\u0555\x07" +
		"3\x02\x02\u0554\u054F\x03\x02\x02\x02\u0554\u0555\x03\x02\x02\x02\u0555" +
		"\u0573\x03\x02\x02\x02\u0556\u0557\x07\x19\x02\x02\u0557\u0558\x05\xA8" +
		"U\x02\u0558\u0559\x07\x1D\x02\x02\u0559\u0573\x03\x02\x02\x02\u055A\u0573" +
		"\x073\x02\x02\u055B\u055D\x07\x04\x02\x02\u055C\u055B\x03\x02\x02\x02" +
		"\u055D\u0560\x03\x02\x02\x02\u055E\u055C\x03\x02\x02\x02\u055E\u055F\x03" +
		"\x02\x02\x02\u055F\u0561\x03\x02\x02\x02\u0560\u055E\x03\x02\x02\x02\u0561" +
		"\u0565\x07\x1E\x02\x02\u0562\u0564\x07\x04\x02\x02\u0563\u0562\x03\x02" +
		"\x02\x02\u0564\u0567\x03\x02\x02\x02\u0565\u0563\x03\x02\x02\x02\u0565" +
		"\u0566\x03\x02\x02\x02\u0566\u0573\x03\x02\x02\x02\u0567\u0565\x03\x02" +
		"\x02\x02\u0568\u056C\x07\x1F\x02\x02\u0569\u056B\x07\x04\x02\x02\u056A" +
		"\u0569\x03\x02\x02\x02\u056B\u056E\x03\x02\x02\x02\u056C\u056A\x03\x02" +
		"\x02\x02\u056C\u056D\x03\x02\x02\x02\u056D\u0573\x03\x02\x02\x02\u056E" +
		"\u056C\x03\x02\x02\x02\u056F\u0573\x07 \x02\x02\u0570\u0573\x07\'\x02" +
		"\x02\u0571\u0573\x07\xA1\x02\x02\u0572\u0544\x03\x02\x02\x02\u0572\u054D" +
		"\x03\x02\x02\x02\u0572\u0556\x03\x02\x02\x02\u0572\u055A\x03\x02\x02\x02" +
		"\u0572\u055E\x03\x02\x02\x02\u0572\u0568\x03\x02\x02\x02\u0572\u056F\x03" +
		"\x02\x02\x02\u0572\u0570\x03\x02\x02\x02\u0572\u0571\x03\x02\x02\x02\u0573" +
		"\xA9\x03\x02\x02\x02\u0574\u0575\x07\x1D\x02\x02\u0575\xAB\x03\x02\x02" +
		"\x02\u0576\u0577\t\x13\x02\x02\u0577\xAD\x03\x02\x02\x02\u0578\u0585\x07" +
		"8\x02\x02\u0579\u0585\x076\x02\x02\u057A\u0585\x079\x02\x02\u057B\u0585" +
		"\x077\x02\x02\u057C\u0585\x07\x1F\x02\x02\u057D\u057E\x07#\x02\x02\u057E" +
		"\u0585\n\x14\x02\x02\u057F\u0580\x07$\x02\x02\u0580\u0585\n\x15\x02\x02" +
		"\u0581\u0585\x07\'\x02\x02\u0582\u0585\x07&\x02\x02\u0583\u0585\x07%\x02" +
		"\x02\u0584\u0578\x03\x02\x02\x02\u0584\u0579\x03\x02\x02\x02\u0584\u057A" +
		"\x03\x02\x02\x02\u0584\u057B\x03\x02\x02\x02\u0584\u057C\x03\x02\x02\x02" +
		"\u0584\u057D\x03\x02\x02\x02\u0584\u057F\x03\x02\x02\x02\u0584\u0581\x03" +
		"\x02\x02\x02\u0584\u0582\x03\x02\x02\x02\u0584\u0583\x03\x02\x02\x02\u0585" +
		"\u0586\x03\x02\x02\x02\u0586\u0584\x03\x02\x02\x02\u0586\u0587\x03\x02" +
		"\x02\x02\u0587\xAF\x03\x02\x02\x02\u0588\u0589\x07\x04\x02\x02\u0589\xB1" +
		"\x03\x02\x02\x02\xC9\xB6\xBC\xC1\xC6\xD3\xDB\xE2\xE7\xF3\xF8\xFE\u0105" +
		"\u010B\u010E\u0116\u011D\u0122\u012E\u0133\u0139\u0140\u0146\u0149\u0151" +
		"\u0158\u015D\u0161\u0166\u016D\u0172\u017A\u0181\u0186\u018A\u018F\u0196" +
		"\u019B\u01A3\u01AA\u01AF\u01B3\u01B8\u01BF\u01C4\u01CC\u01D3\u01D8\u01DC" +
		"\u01E1\u01E8\u01ED\u01F5\u01FC\u0201\u0205\u020A\u0211\u0216\u021E\u0225" +
		"\u022A\u022E\u0233\u023A\u023F\u0245\u0249\u024C\u0252\u0256\u0259\u025F" +
		"\u0263\u0266\u0292\u029C\u029E\u02A5\u02AA\u02B8\u02BE\u02C0\u02CE\u02D5" +
		"\u02DA\u02DE\u02E2\u02E5\u02EA\u0301\u0306\u030B\u030D\u0317\u0321\u032B" +
		"\u0331\u0338\u033E\u0346\u0350\u035B\u0361\u0366\u036D\u0376\u037A\u037E" +
		"\u0381\u0390\u0394\u03A3\u03A7\u03AD\u03B8\u03BD\u03C2\u03C4\u03C9\u03CE" +
		"\u03D3\u03D5\u03DA\u03E0\u03E5\u03E7\u03F2\u03F6\u0403\u0407\u040D\u040F" +
		"\u0416\u041A\u041C\u0422\u0424\u042B\u0430\u0433\u0439\u043C\u0440\u0447" +
		"\u044C\u0452\u0457\u045F\u0461\u0465\u046C\u046E\u0477\u0479\u047D\u0487" +
		"\u0489\u048D\u0493\u0495\u049D\u04A1\u04A8\u04AD\u04B3\u04B8\u04C0\u04C4" +
		"\u04C7\u04CD\u04D4\u04D6\u04DD\u04E7\u04F2\u0500\u0506\u0510\u0512\u051B" +
		"\u051F\u0525\u0527\u052E\u0530\u0534\u0538\u053E\u0542\u0548\u054B\u0551" +
		"\u0554\u055E\u0565\u056C\u0572\u0584\u0586";
	public static readonly _serializedATN: string = Utils.join(
		[
			chatParser._serializedATNSegment0,
			chatParser._serializedATNSegment1,
			chatParser._serializedATNSegment2,
		],
		"",
	);
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!chatParser.__ATN) {
			chatParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(chatParser._serializedATN));
		}

		return chatParser.__ATN;
	}

}

export class BitmarkContext extends ParserRuleContext {
	public EOF(): TerminalNode { return this.getToken(chatParser.EOF, 0); }
	public bitmark_(): Bitmark_Context[];
	public bitmark_(i: number): Bitmark_Context;
	public bitmark_(i?: number): Bitmark_Context | Bitmark_Context[] {
		if (i === undefined) {
			return this.getRuleContexts(Bitmark_Context);
		} else {
			return this.getRuleContext(i, Bitmark_Context);
		}
	}
	public NL(): TerminalNode[];
	public NL(i: number): TerminalNode;
	public NL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(chatParser.NL);
		} else {
			return this.getToken(chatParser.NL, i);
		}
	}
	public S(): TerminalNode[];
	public S(i: number): TerminalNode;
	public S(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(chatParser.S);
		} else {
			return this.getToken(chatParser.S, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return chatParser.RULE_bitmark; }
	// @Override
	public enterRule(listener: chatParserListener): void {
		if (listener.enterBitmark) {
			listener.enterBitmark(this);
		}
	}
	// @Override
	public exitRule(listener: chatParserListener): void {
		if (listener.exitBitmark) {
			listener.exitBitmark(this);
		}
	}
}


export class Bitmark_Context extends ParserRuleContext {
	public chat(): ChatContext | undefined {
		return this.tryGetRuleContext(0, ChatContext);
	}
	public conversation(): ConversationContext | undefined {
		return this.tryGetRuleContext(0, ConversationContext);
	}
	public conversation_left_1(): Conversation_left_1Context | undefined {
		return this.tryGetRuleContext(0, Conversation_left_1Context);
	}
	public conversation_right_1(): Conversation_right_1Context | undefined {
		return this.tryGetRuleContext(0, Conversation_right_1Context);
	}
	public conversation_right_1_thought(): Conversation_right_1_thoughtContext | undefined {
		return this.tryGetRuleContext(0, Conversation_right_1_thoughtContext);
	}
	public conversation_right_1_scream(): Conversation_right_1_screamContext | undefined {
		return this.tryGetRuleContext(0, Conversation_right_1_screamContext);
	}
	public conversation_left_1_thought(): Conversation_left_1_thoughtContext | undefined {
		return this.tryGetRuleContext(0, Conversation_left_1_thoughtContext);
	}
	public conversation_left_1_scream(): Conversation_left_1_screamContext | undefined {
		return this.tryGetRuleContext(0, Conversation_left_1_screamContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return chatParser.RULE_bitmark_; }
	// @Override
	public enterRule(listener: chatParserListener): void {
		if (listener.enterBitmark_) {
			listener.enterBitmark_(this);
		}
	}
	// @Override
	public exitRule(listener: chatParserListener): void {
		if (listener.exitBitmark_) {
			listener.exitBitmark_(this);
		}
	}
}


export class ChatContext extends ParserRuleContext {
	public BitChat(): TerminalNode { return this.getToken(chatParser.BitChat, 0); }
	public format(): FormatContext {
		return this.getRuleContext(0, FormatContext);
	}
	public CL(): TerminalNode { return this.getToken(chatParser.CL, 0); }
	public initiator(): InitiatorContext {
		return this.getRuleContext(0, InitiatorContext);
	}
	public partner(): PartnerContext {
		return this.getRuleContext(0, PartnerContext);
	}
	public HSPL(): TerminalNode[];
	public HSPL(i: number): TerminalNode;
	public HSPL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(chatParser.HSPL);
		} else {
			return this.getToken(chatParser.HSPL, i);
		}
	}
	public HSPL2(): TerminalNode[];
	public HSPL2(i: number): TerminalNode;
	public HSPL2(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(chatParser.HSPL2);
		} else {
			return this.getToken(chatParser.HSPL2, i);
		}
	}
	public NL(): TerminalNode[];
	public NL(i: number): TerminalNode;
	public NL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(chatParser.NL);
		} else {
			return this.getToken(chatParser.NL, i);
		}
	}
	public bitElem(): BitElemContext[];
	public bitElem(i: number): BitElemContext;
	public bitElem(i?: number): BitElemContext | BitElemContext[] {
		if (i === undefined) {
			return this.getRuleContexts(BitElemContext);
		} else {
			return this.getRuleContext(i, BitElemContext);
		}
	}
	public chat_initiator(): Chat_initiatorContext[];
	public chat_initiator(i: number): Chat_initiatorContext;
	public chat_initiator(i?: number): Chat_initiatorContext | Chat_initiatorContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Chat_initiatorContext);
		} else {
			return this.getRuleContext(i, Chat_initiatorContext);
		}
	}
	public resource(): ResourceContext[];
	public resource(i: number): ResourceContext;
	public resource(i?: number): ResourceContext | ResourceContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ResourceContext);
		} else {
			return this.getRuleContext(i, ResourceContext);
		}
	}
	public sspl_chat_partner(): Sspl_chat_partnerContext[];
	public sspl_chat_partner(i: number): Sspl_chat_partnerContext;
	public sspl_chat_partner(i?: number): Sspl_chat_partnerContext | Sspl_chat_partnerContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Sspl_chat_partnerContext);
		} else {
			return this.getRuleContext(i, Sspl_chat_partnerContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return chatParser.RULE_chat; }
	// @Override
	public enterRule(listener: chatParserListener): void {
		if (listener.enterChat) {
			listener.enterChat(this);
		}
	}
	// @Override
	public exitRule(listener: chatParserListener): void {
		if (listener.exitChat) {
			listener.exitChat(this);
		}
	}
}


export class ConversationContext extends ParserRuleContext {
	public BitConv(): TerminalNode { return this.getToken(chatParser.BitConv, 0); }
	public format(): FormatContext {
		return this.getRuleContext(0, FormatContext);
	}
	public CL(): TerminalNode { return this.getToken(chatParser.CL, 0); }
	public initiator(): InitiatorContext {
		return this.getRuleContext(0, InitiatorContext);
	}
	public partner(): PartnerContext {
		return this.getRuleContext(0, PartnerContext);
	}
	public HSPL(): TerminalNode[];
	public HSPL(i: number): TerminalNode;
	public HSPL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(chatParser.HSPL);
		} else {
			return this.getToken(chatParser.HSPL, i);
		}
	}
	public HSPL2(): TerminalNode[];
	public HSPL2(i: number): TerminalNode;
	public HSPL2(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(chatParser.HSPL2);
		} else {
			return this.getToken(chatParser.HSPL2, i);
		}
	}
	public NL(): TerminalNode[];
	public NL(i: number): TerminalNode;
	public NL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(chatParser.NL);
		} else {
			return this.getToken(chatParser.NL, i);
		}
	}
	public bitElem(): BitElemContext[];
	public bitElem(i: number): BitElemContext;
	public bitElem(i?: number): BitElemContext | BitElemContext[] {
		if (i === undefined) {
			return this.getRuleContexts(BitElemContext);
		} else {
			return this.getRuleContext(i, BitElemContext);
		}
	}
	public chat_initiator(): Chat_initiatorContext[];
	public chat_initiator(i: number): Chat_initiatorContext;
	public chat_initiator(i?: number): Chat_initiatorContext | Chat_initiatorContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Chat_initiatorContext);
		} else {
			return this.getRuleContext(i, Chat_initiatorContext);
		}
	}
	public resource(): ResourceContext[];
	public resource(i: number): ResourceContext;
	public resource(i?: number): ResourceContext | ResourceContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ResourceContext);
		} else {
			return this.getRuleContext(i, ResourceContext);
		}
	}
	public sspl_chat_partner(): Sspl_chat_partnerContext[];
	public sspl_chat_partner(i: number): Sspl_chat_partnerContext;
	public sspl_chat_partner(i?: number): Sspl_chat_partnerContext | Sspl_chat_partnerContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Sspl_chat_partnerContext);
		} else {
			return this.getRuleContext(i, Sspl_chat_partnerContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return chatParser.RULE_conversation; }
	// @Override
	public enterRule(listener: chatParserListener): void {
		if (listener.enterConversation) {
			listener.enterConversation(this);
		}
	}
	// @Override
	public exitRule(listener: chatParserListener): void {
		if (listener.exitConversation) {
			listener.exitConversation(this);
		}
	}
}


export class Conversation_left_1Context extends ParserRuleContext {
	public BitConversationLeft1(): TerminalNode { return this.getToken(chatParser.BitConversationLeft1, 0); }
	public format2(): Format2Context {
		return this.getRuleContext(0, Format2Context);
	}
	public CL(): TerminalNode { return this.getToken(chatParser.CL, 0); }
	public NL(): TerminalNode[];
	public NL(i: number): TerminalNode;
	public NL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(chatParser.NL);
		} else {
			return this.getToken(chatParser.NL, i);
		}
	}
	public bitElem(): BitElemContext[];
	public bitElem(i: number): BitElemContext;
	public bitElem(i?: number): BitElemContext | BitElemContext[] {
		if (i === undefined) {
			return this.getRuleContexts(BitElemContext);
		} else {
			return this.getRuleContext(i, BitElemContext);
		}
	}
	public partner1(): Partner1Context | undefined {
		return this.tryGetRuleContext(0, Partner1Context);
	}
	public s_and_w(): S_and_wContext[];
	public s_and_w(i: number): S_and_wContext;
	public s_and_w(i?: number): S_and_wContext | S_and_wContext[] {
		if (i === undefined) {
			return this.getRuleContexts(S_and_wContext);
		} else {
			return this.getRuleContext(i, S_and_wContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return chatParser.RULE_conversation_left_1; }
	// @Override
	public enterRule(listener: chatParserListener): void {
		if (listener.enterConversation_left_1) {
			listener.enterConversation_left_1(this);
		}
	}
	// @Override
	public exitRule(listener: chatParserListener): void {
		if (listener.exitConversation_left_1) {
			listener.exitConversation_left_1(this);
		}
	}
}


export class Conversation_right_1Context extends ParserRuleContext {
	public BitConversationRight1(): TerminalNode { return this.getToken(chatParser.BitConversationRight1, 0); }
	public format2(): Format2Context {
		return this.getRuleContext(0, Format2Context);
	}
	public CL(): TerminalNode { return this.getToken(chatParser.CL, 0); }
	public NL(): TerminalNode[];
	public NL(i: number): TerminalNode;
	public NL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(chatParser.NL);
		} else {
			return this.getToken(chatParser.NL, i);
		}
	}
	public bitElem(): BitElemContext[];
	public bitElem(i: number): BitElemContext;
	public bitElem(i?: number): BitElemContext | BitElemContext[] {
		if (i === undefined) {
			return this.getRuleContexts(BitElemContext);
		} else {
			return this.getRuleContext(i, BitElemContext);
		}
	}
	public partner1(): Partner1Context | undefined {
		return this.tryGetRuleContext(0, Partner1Context);
	}
	public s_and_w(): S_and_wContext[];
	public s_and_w(i: number): S_and_wContext;
	public s_and_w(i?: number): S_and_wContext | S_and_wContext[] {
		if (i === undefined) {
			return this.getRuleContexts(S_and_wContext);
		} else {
			return this.getRuleContext(i, S_and_wContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return chatParser.RULE_conversation_right_1; }
	// @Override
	public enterRule(listener: chatParserListener): void {
		if (listener.enterConversation_right_1) {
			listener.enterConversation_right_1(this);
		}
	}
	// @Override
	public exitRule(listener: chatParserListener): void {
		if (listener.exitConversation_right_1) {
			listener.exitConversation_right_1(this);
		}
	}
}


export class Conversation_right_1_thoughtContext extends ParserRuleContext {
	public BitConversationRight1Thought(): TerminalNode { return this.getToken(chatParser.BitConversationRight1Thought, 0); }
	public format2(): Format2Context {
		return this.getRuleContext(0, Format2Context);
	}
	public CL(): TerminalNode { return this.getToken(chatParser.CL, 0); }
	public NL(): TerminalNode[];
	public NL(i: number): TerminalNode;
	public NL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(chatParser.NL);
		} else {
			return this.getToken(chatParser.NL, i);
		}
	}
	public bitElem(): BitElemContext[];
	public bitElem(i: number): BitElemContext;
	public bitElem(i?: number): BitElemContext | BitElemContext[] {
		if (i === undefined) {
			return this.getRuleContexts(BitElemContext);
		} else {
			return this.getRuleContext(i, BitElemContext);
		}
	}
	public partner1(): Partner1Context | undefined {
		return this.tryGetRuleContext(0, Partner1Context);
	}
	public s_and_w(): S_and_wContext[];
	public s_and_w(i: number): S_and_wContext;
	public s_and_w(i?: number): S_and_wContext | S_and_wContext[] {
		if (i === undefined) {
			return this.getRuleContexts(S_and_wContext);
		} else {
			return this.getRuleContext(i, S_and_wContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return chatParser.RULE_conversation_right_1_thought; }
	// @Override
	public enterRule(listener: chatParserListener): void {
		if (listener.enterConversation_right_1_thought) {
			listener.enterConversation_right_1_thought(this);
		}
	}
	// @Override
	public exitRule(listener: chatParserListener): void {
		if (listener.exitConversation_right_1_thought) {
			listener.exitConversation_right_1_thought(this);
		}
	}
}


export class Conversation_right_1_screamContext extends ParserRuleContext {
	public BitConversationRight1Scream(): TerminalNode { return this.getToken(chatParser.BitConversationRight1Scream, 0); }
	public format2(): Format2Context {
		return this.getRuleContext(0, Format2Context);
	}
	public CL(): TerminalNode { return this.getToken(chatParser.CL, 0); }
	public NL(): TerminalNode[];
	public NL(i: number): TerminalNode;
	public NL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(chatParser.NL);
		} else {
			return this.getToken(chatParser.NL, i);
		}
	}
	public bitElem(): BitElemContext[];
	public bitElem(i: number): BitElemContext;
	public bitElem(i?: number): BitElemContext | BitElemContext[] {
		if (i === undefined) {
			return this.getRuleContexts(BitElemContext);
		} else {
			return this.getRuleContext(i, BitElemContext);
		}
	}
	public partner1(): Partner1Context | undefined {
		return this.tryGetRuleContext(0, Partner1Context);
	}
	public s_and_w(): S_and_wContext[];
	public s_and_w(i: number): S_and_wContext;
	public s_and_w(i?: number): S_and_wContext | S_and_wContext[] {
		if (i === undefined) {
			return this.getRuleContexts(S_and_wContext);
		} else {
			return this.getRuleContext(i, S_and_wContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return chatParser.RULE_conversation_right_1_scream; }
	// @Override
	public enterRule(listener: chatParserListener): void {
		if (listener.enterConversation_right_1_scream) {
			listener.enterConversation_right_1_scream(this);
		}
	}
	// @Override
	public exitRule(listener: chatParserListener): void {
		if (listener.exitConversation_right_1_scream) {
			listener.exitConversation_right_1_scream(this);
		}
	}
}


export class Conversation_left_1_thoughtContext extends ParserRuleContext {
	public BitConversationLeft1Thought(): TerminalNode { return this.getToken(chatParser.BitConversationLeft1Thought, 0); }
	public format2(): Format2Context {
		return this.getRuleContext(0, Format2Context);
	}
	public CL(): TerminalNode { return this.getToken(chatParser.CL, 0); }
	public NL(): TerminalNode[];
	public NL(i: number): TerminalNode;
	public NL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(chatParser.NL);
		} else {
			return this.getToken(chatParser.NL, i);
		}
	}
	public bitElem(): BitElemContext[];
	public bitElem(i: number): BitElemContext;
	public bitElem(i?: number): BitElemContext | BitElemContext[] {
		if (i === undefined) {
			return this.getRuleContexts(BitElemContext);
		} else {
			return this.getRuleContext(i, BitElemContext);
		}
	}
	public partner1(): Partner1Context | undefined {
		return this.tryGetRuleContext(0, Partner1Context);
	}
	public s_and_w(): S_and_wContext[];
	public s_and_w(i: number): S_and_wContext;
	public s_and_w(i?: number): S_and_wContext | S_and_wContext[] {
		if (i === undefined) {
			return this.getRuleContexts(S_and_wContext);
		} else {
			return this.getRuleContext(i, S_and_wContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return chatParser.RULE_conversation_left_1_thought; }
	// @Override
	public enterRule(listener: chatParserListener): void {
		if (listener.enterConversation_left_1_thought) {
			listener.enterConversation_left_1_thought(this);
		}
	}
	// @Override
	public exitRule(listener: chatParserListener): void {
		if (listener.exitConversation_left_1_thought) {
			listener.exitConversation_left_1_thought(this);
		}
	}
}


export class Conversation_left_1_screamContext extends ParserRuleContext {
	public BitConversationLeft1Scream(): TerminalNode { return this.getToken(chatParser.BitConversationLeft1Scream, 0); }
	public format2(): Format2Context {
		return this.getRuleContext(0, Format2Context);
	}
	public CL(): TerminalNode { return this.getToken(chatParser.CL, 0); }
	public NL(): TerminalNode[];
	public NL(i: number): TerminalNode;
	public NL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(chatParser.NL);
		} else {
			return this.getToken(chatParser.NL, i);
		}
	}
	public bitElem(): BitElemContext[];
	public bitElem(i: number): BitElemContext;
	public bitElem(i?: number): BitElemContext | BitElemContext[] {
		if (i === undefined) {
			return this.getRuleContexts(BitElemContext);
		} else {
			return this.getRuleContext(i, BitElemContext);
		}
	}
	public partner1(): Partner1Context | undefined {
		return this.tryGetRuleContext(0, Partner1Context);
	}
	public s_and_w(): S_and_wContext[];
	public s_and_w(i: number): S_and_wContext;
	public s_and_w(i?: number): S_and_wContext | S_and_wContext[] {
		if (i === undefined) {
			return this.getRuleContexts(S_and_wContext);
		} else {
			return this.getRuleContext(i, S_and_wContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return chatParser.RULE_conversation_left_1_scream; }
	// @Override
	public enterRule(listener: chatParserListener): void {
		if (listener.enterConversation_left_1_scream) {
			listener.enterConversation_left_1_scream(this);
		}
	}
	// @Override
	public exitRule(listener: chatParserListener): void {
		if (listener.exitConversation_left_1_scream) {
			listener.exitConversation_left_1_scream(this);
		}
	}
}


export class InitiatorContext extends ParserRuleContext {
	public name_text(): Name_textContext {
		return this.getRuleContext(0, Name_textContext);
	}
	public imagebit(): ImagebitContext | undefined {
		return this.tryGetRuleContext(0, ImagebitContext);
	}
	public name_alt(): Name_altContext | undefined {
		return this.tryGetRuleContext(0, Name_altContext);
	}
	public NL(): TerminalNode[];
	public NL(i: number): TerminalNode;
	public NL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(chatParser.NL);
		} else {
			return this.getToken(chatParser.NL, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return chatParser.RULE_initiator; }
	// @Override
	public enterRule(listener: chatParserListener): void {
		if (listener.enterInitiator) {
			listener.enterInitiator(this);
		}
	}
	// @Override
	public exitRule(listener: chatParserListener): void {
		if (listener.exitInitiator) {
			listener.exitInitiator(this);
		}
	}
}


export class PartnerContext extends ParserRuleContext {
	public name_text(): Name_textContext {
		return this.getRuleContext(0, Name_textContext);
	}
	public imagebit(): ImagebitContext | undefined {
		return this.tryGetRuleContext(0, ImagebitContext);
	}
	public name_alt(): Name_altContext | undefined {
		return this.tryGetRuleContext(0, Name_altContext);
	}
	public NL(): TerminalNode[];
	public NL(i: number): TerminalNode;
	public NL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(chatParser.NL);
		} else {
			return this.getToken(chatParser.NL, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return chatParser.RULE_partner; }
	// @Override
	public enterRule(listener: chatParserListener): void {
		if (listener.enterPartner) {
			listener.enterPartner(this);
		}
	}
	// @Override
	public exitRule(listener: chatParserListener): void {
		if (listener.exitPartner) {
			listener.exitPartner(this);
		}
	}
}


export class Partner1Context extends ParserRuleContext {
	public partner1_name(): Partner1_nameContext {
		return this.getRuleContext(0, Partner1_nameContext);
	}
	public imagebit(): ImagebitContext | undefined {
		return this.tryGetRuleContext(0, ImagebitContext);
	}
	public name_alt(): Name_altContext | undefined {
		return this.tryGetRuleContext(0, Name_altContext);
	}
	public NL(): TerminalNode[];
	public NL(i: number): TerminalNode;
	public NL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(chatParser.NL);
		} else {
			return this.getToken(chatParser.NL, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return chatParser.RULE_partner1; }
	// @Override
	public enterRule(listener: chatParserListener): void {
		if (listener.enterPartner1) {
			listener.enterPartner1(this);
		}
	}
	// @Override
	public exitRule(listener: chatParserListener): void {
		if (listener.exitPartner1) {
			listener.exitPartner1(this);
		}
	}
}


export class Partner1_nameContext extends ParserRuleContext {
	public AtPartner(): TerminalNode { return this.getToken(chatParser.AtPartner, 0); }
	public s_and_w(): S_and_wContext {
		return this.getRuleContext(0, S_and_wContext);
	}
	public CL(): TerminalNode { return this.getToken(chatParser.CL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return chatParser.RULE_partner1_name; }
	// @Override
	public enterRule(listener: chatParserListener): void {
		if (listener.enterPartner1_name) {
			listener.enterPartner1_name(this);
		}
	}
	// @Override
	public exitRule(listener: chatParserListener): void {
		if (listener.exitPartner1_name) {
			listener.exitPartner1_name(this);
		}
	}
}


export class Name_textContext extends ParserRuleContext {
	public OPHASH(): TerminalNode { return this.getToken(chatParser.OPHASH, 0); }
	public s_and_w(): S_and_wContext {
		return this.getRuleContext(0, S_and_wContext);
	}
	public CL(): TerminalNode { return this.getToken(chatParser.CL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return chatParser.RULE_name_text; }
	// @Override
	public enterRule(listener: chatParserListener): void {
		if (listener.enterName_text) {
			listener.enterName_text(this);
		}
	}
	// @Override
	public exitRule(listener: chatParserListener): void {
		if (listener.exitName_text) {
			listener.exitName_text(this);
		}
	}
}


export class Name_altContext extends ParserRuleContext {
	public OPATALT(): TerminalNode { return this.getToken(chatParser.OPATALT, 0); }
	public s_and_w(): S_and_wContext {
		return this.getRuleContext(0, S_and_wContext);
	}
	public CL(): TerminalNode { return this.getToken(chatParser.CL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return chatParser.RULE_name_alt; }
	// @Override
	public enterRule(listener: chatParserListener): void {
		if (listener.enterName_alt) {
			listener.enterName_alt(this);
		}
	}
	// @Override
	public exitRule(listener: chatParserListener): void {
		if (listener.exitName_alt) {
			listener.exitName_alt(this);
		}
	}
}


export class Chat_initiatorContext extends ParserRuleContext {
	public s_and_w(): S_and_wContext {
		return this.getRuleContext(0, S_and_wContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return chatParser.RULE_chat_initiator; }
	// @Override
	public enterRule(listener: chatParserListener): void {
		if (listener.enterChat_initiator) {
			listener.enterChat_initiator(this);
		}
	}
	// @Override
	public exitRule(listener: chatParserListener): void {
		if (listener.exitChat_initiator) {
			listener.exitChat_initiator(this);
		}
	}
}


export class Chat_partnerContext extends ParserRuleContext {
	public s_and_w(): S_and_wContext {
		return this.getRuleContext(0, S_and_wContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return chatParser.RULE_chat_partner; }
	// @Override
	public enterRule(listener: chatParserListener): void {
		if (listener.enterChat_partner) {
			listener.enterChat_partner(this);
		}
	}
	// @Override
	public exitRule(listener: chatParserListener): void {
		if (listener.exitChat_partner) {
			listener.exitChat_partner(this);
		}
	}
}


export class Sspl_chat_partnerContext extends ParserRuleContext {
	public sspl(): SsplContext {
		return this.getRuleContext(0, SsplContext);
	}
	public chat_partner(): Chat_partnerContext {
		return this.getRuleContext(0, Chat_partnerContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return chatParser.RULE_sspl_chat_partner; }
	// @Override
	public enterRule(listener: chatParserListener): void {
		if (listener.enterSspl_chat_partner) {
			listener.enterSspl_chat_partner(this);
		}
	}
	// @Override
	public exitRule(listener: chatParserListener): void {
		if (listener.exitSspl_chat_partner) {
			listener.exitSspl_chat_partner(this);
		}
	}
}


export class BitElemContext extends ParserRuleContext {
	public LIST_LINE(): TerminalNode | undefined { return this.tryGetToken(chatParser.LIST_LINE, 0); }
	public NOTBITMARK(): TerminalNode | undefined { return this.tryGetToken(chatParser.NOTBITMARK, 0); }
	public gap(): GapContext | undefined {
		return this.tryGetRuleContext(0, GapContext);
	}
	public atdef(): AtdefContext | undefined {
		return this.tryGetRuleContext(0, AtdefContext);
	}
	public reference(): ReferenceContext | undefined {
		return this.tryGetRuleContext(0, ReferenceContext);
	}
	public item(): ItemContext | undefined {
		return this.tryGetRuleContext(0, ItemContext);
	}
	public title(): TitleContext | undefined {
		return this.tryGetRuleContext(0, TitleContext);
	}
	public instruction(): InstructionContext | undefined {
		return this.tryGetRuleContext(0, InstructionContext);
	}
	public hint(): HintContext | undefined {
		return this.tryGetRuleContext(0, HintContext);
	}
	public s_and_w(): S_and_wContext | undefined {
		return this.tryGetRuleContext(0, S_and_wContext);
	}
	public example(): ExampleContext | undefined {
		return this.tryGetRuleContext(0, ExampleContext);
	}
	public bool_label(): Bool_labelContext | undefined {
		return this.tryGetRuleContext(0, Bool_labelContext);
	}
	public imagebit(): ImagebitContext | undefined {
		return this.tryGetRuleContext(0, ImagebitContext);
	}
	public audiobit(): AudiobitContext | undefined {
		return this.tryGetRuleContext(0, AudiobitContext);
	}
	public videobit(): VideobitContext | undefined {
		return this.tryGetRuleContext(0, VideobitContext);
	}
	public articlebit(): ArticlebitContext | undefined {
		return this.tryGetRuleContext(0, ArticlebitContext);
	}
	public documentbit(): DocumentbitContext | undefined {
		return this.tryGetRuleContext(0, DocumentbitContext);
	}
	public appbit(): AppbitContext | undefined {
		return this.tryGetRuleContext(0, AppbitContext);
	}
	public websitebit(): WebsitebitContext | undefined {
		return this.tryGetRuleContext(0, WebsitebitContext);
	}
	public stillimagefilmbit(): StillimagefilmbitContext | undefined {
		return this.tryGetRuleContext(0, StillimagefilmbitContext);
	}
	public angleref(): AnglerefContext | undefined {
		return this.tryGetRuleContext(0, AnglerefContext);
	}
	public anchor(): AnchorContext | undefined {
		return this.tryGetRuleContext(0, AnchorContext);
	}
	public sp(): SpContext | undefined {
		return this.tryGetRuleContext(0, SpContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return chatParser.RULE_bitElem; }
	// @Override
	public enterRule(listener: chatParserListener): void {
		if (listener.enterBitElem) {
			listener.enterBitElem(this);
		}
	}
	// @Override
	public exitRule(listener: chatParserListener): void {
		if (listener.exitBitElem) {
			listener.exitBitElem(this);
		}
	}
}


export class ResourceContext extends ParserRuleContext {
	public bitElem(): BitElemContext {
		return this.getRuleContext(0, BitElemContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return chatParser.RULE_resource; }
	// @Override
	public enterRule(listener: chatParserListener): void {
		if (listener.enterResource) {
			listener.enterResource(this);
		}
	}
	// @Override
	public exitRule(listener: chatParserListener): void {
		if (listener.exitResource) {
			listener.exitResource(this);
		}
	}
}


export class GapContext extends ParserRuleContext {
	public single_gap(): Single_gapContext[];
	public single_gap(i: number): Single_gapContext;
	public single_gap(i?: number): Single_gapContext | Single_gapContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Single_gapContext);
		} else {
			return this.getRuleContext(i, Single_gapContext);
		}
	}
	public instruction(): InstructionContext[];
	public instruction(i: number): InstructionContext;
	public instruction(i?: number): InstructionContext | InstructionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(InstructionContext);
		} else {
			return this.getRuleContext(i, InstructionContext);
		}
	}
	public hint(): HintContext[];
	public hint(i: number): HintContext;
	public hint(i?: number): HintContext | HintContext[] {
		if (i === undefined) {
			return this.getRuleContexts(HintContext);
		} else {
			return this.getRuleContext(i, HintContext);
		}
	}
	public item(): ItemContext[];
	public item(i: number): ItemContext;
	public item(i?: number): ItemContext | ItemContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ItemContext);
		} else {
			return this.getRuleContext(i, ItemContext);
		}
	}
	public example(): ExampleContext[];
	public example(i: number): ExampleContext;
	public example(i?: number): ExampleContext | ExampleContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExampleContext);
		} else {
			return this.getRuleContext(i, ExampleContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return chatParser.RULE_gap; }
	// @Override
	public enterRule(listener: chatParserListener): void {
		if (listener.enterGap) {
			listener.enterGap(this);
		}
	}
	// @Override
	public exitRule(listener: chatParserListener): void {
		if (listener.exitGap) {
			listener.exitGap(this);
		}
	}
}


export class Single_gapContext extends ParserRuleContext {
	public OPU(): TerminalNode { return this.getToken(chatParser.OPU, 0); }
	public clnsp(): ClnspContext {
		return this.getRuleContext(0, ClnspContext);
	}
	public NUMERIC(): TerminalNode | undefined { return this.tryGetToken(chatParser.NUMERIC, 0); }
	public STRING(): TerminalNode | undefined { return this.tryGetToken(chatParser.STRING, 0); }
	public s_and_w(): S_and_wContext[];
	public s_and_w(i: number): S_and_wContext;
	public s_and_w(i?: number): S_and_wContext | S_and_wContext[] {
		if (i === undefined) {
			return this.getRuleContexts(S_and_wContext);
		} else {
			return this.getRuleContext(i, S_and_wContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return chatParser.RULE_single_gap; }
	// @Override
	public enterRule(listener: chatParserListener): void {
		if (listener.enterSingle_gap) {
			listener.enterSingle_gap(this);
		}
	}
	// @Override
	public exitRule(listener: chatParserListener): void {
		if (listener.exitSingle_gap) {
			listener.exitSingle_gap(this);
		}
	}
}


export class DcolonContext extends ParserRuleContext {
	public DBLCOLON(): TerminalNode { return this.getToken(chatParser.DBLCOLON, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return chatParser.RULE_dcolon; }
	// @Override
	public enterRule(listener: chatParserListener): void {
		if (listener.enterDcolon) {
			listener.enterDcolon(this);
		}
	}
	// @Override
	public exitRule(listener: chatParserListener): void {
		if (listener.exitDcolon) {
			listener.exitDcolon(this);
		}
	}
}


export class AtpointContext extends ParserRuleContext {
	public AtPoints(): TerminalNode { return this.getToken(chatParser.AtPoints, 0); }
	public NUMERIC(): TerminalNode { return this.getToken(chatParser.NUMERIC, 0); }
	public CL(): TerminalNode { return this.getToken(chatParser.CL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return chatParser.RULE_atpoint; }
	// @Override
	public enterRule(listener: chatParserListener): void {
		if (listener.enterAtpoint) {
			listener.enterAtpoint(this);
		}
	}
	// @Override
	public exitRule(listener: chatParserListener): void {
		if (listener.exitAtpoint) {
			listener.exitAtpoint(this);
		}
	}
}


export class FormatContext extends ParserRuleContext {
	public resource_format(): Resource_formatContext[];
	public resource_format(i: number): Resource_formatContext;
	public resource_format(i?: number): Resource_formatContext | Resource_formatContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Resource_formatContext);
		} else {
			return this.getRuleContext(i, Resource_formatContext);
		}
	}
	public ColonText(): TerminalNode[];
	public ColonText(i: number): TerminalNode;
	public ColonText(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(chatParser.ColonText);
		} else {
			return this.getToken(chatParser.ColonText, i);
		}
	}
	public ColonJson(): TerminalNode[];
	public ColonJson(i: number): TerminalNode;
	public ColonJson(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(chatParser.ColonJson);
		} else {
			return this.getToken(chatParser.ColonJson, i);
		}
	}
	public resource_format_extra(): Resource_format_extraContext[];
	public resource_format_extra(i: number): Resource_format_extraContext;
	public resource_format_extra(i?: number): Resource_format_extraContext | Resource_format_extraContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Resource_format_extraContext);
		} else {
			return this.getRuleContext(i, Resource_format_extraContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return chatParser.RULE_format; }
	// @Override
	public enterRule(listener: chatParserListener): void {
		if (listener.enterFormat) {
			listener.enterFormat(this);
		}
	}
	// @Override
	public exitRule(listener: chatParserListener): void {
		if (listener.exitFormat) {
			listener.exitFormat(this);
		}
	}
}


export class Resource_formatContext extends ParserRuleContext {
	public BitmarkMinus(): TerminalNode | undefined { return this.tryGetToken(chatParser.BitmarkMinus, 0); }
	public BitmarkPlus(): TerminalNode | undefined { return this.tryGetToken(chatParser.BitmarkPlus, 0); }
	public Prosemirror(): TerminalNode | undefined { return this.tryGetToken(chatParser.Prosemirror, 0); }
	public Placeholder(): TerminalNode | undefined { return this.tryGetToken(chatParser.Placeholder, 0); }
	public ColonJson(): TerminalNode | undefined { return this.tryGetToken(chatParser.ColonJson, 0); }
	public AmpArticle(): TerminalNode | undefined { return this.tryGetToken(chatParser.AmpArticle, 0); }
	public AmpDocument(): TerminalNode | undefined { return this.tryGetToken(chatParser.AmpDocument, 0); }
	public AmpWebsite(): TerminalNode | undefined { return this.tryGetToken(chatParser.AmpWebsite, 0); }
	public AmpStillImageFilm(): TerminalNode | undefined { return this.tryGetToken(chatParser.AmpStillImageFilm, 0); }
	public AmpAudioLink(): TerminalNode | undefined { return this.tryGetToken(chatParser.AmpAudioLink, 0); }
	public AmpImageLink(): TerminalNode | undefined { return this.tryGetToken(chatParser.AmpImageLink, 0); }
	public AmpVideoLink(): TerminalNode | undefined { return this.tryGetToken(chatParser.AmpVideoLink, 0); }
	public AmpArticleLink(): TerminalNode | undefined { return this.tryGetToken(chatParser.AmpArticleLink, 0); }
	public AmpDocumentLink(): TerminalNode | undefined { return this.tryGetToken(chatParser.AmpDocumentLink, 0); }
	public AmpAppLink(): TerminalNode | undefined { return this.tryGetToken(chatParser.AmpAppLink, 0); }
	public AmpWebsiteLink(): TerminalNode | undefined { return this.tryGetToken(chatParser.AmpWebsiteLink, 0); }
	public AmpStillImageFilmLink(): TerminalNode | undefined { return this.tryGetToken(chatParser.AmpStillImageFilmLink, 0); }
	public AmpVideoEmbed(): TerminalNode | undefined { return this.tryGetToken(chatParser.AmpVideoEmbed, 0); }
	public AmpAudioEmbed(): TerminalNode | undefined { return this.tryGetToken(chatParser.AmpAudioEmbed, 0); }
	public AmpDocumentEmbed(): TerminalNode | undefined { return this.tryGetToken(chatParser.AmpDocumentEmbed, 0); }
	public AmpStillImageFilmEmbed(): TerminalNode | undefined { return this.tryGetToken(chatParser.AmpStillImageFilmEmbed, 0); }
	public AmpDocumentDownload(): TerminalNode | undefined { return this.tryGetToken(chatParser.AmpDocumentDownload, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return chatParser.RULE_resource_format; }
	// @Override
	public enterRule(listener: chatParserListener): void {
		if (listener.enterResource_format) {
			listener.enterResource_format(this);
		}
	}
	// @Override
	public exitRule(listener: chatParserListener): void {
		if (listener.exitResource_format) {
			listener.exitResource_format(this);
		}
	}
}


export class Resource_format_extraContext extends ParserRuleContext {
	public image_format(): Image_formatContext | undefined {
		return this.tryGetRuleContext(0, Image_formatContext);
	}
	public audio_format(): Audio_formatContext | undefined {
		return this.tryGetRuleContext(0, Audio_formatContext);
	}
	public video_format(): Video_formatContext | undefined {
		return this.tryGetRuleContext(0, Video_formatContext);
	}
	public article_format(): Article_formatContext | undefined {
		return this.tryGetRuleContext(0, Article_formatContext);
	}
	public document_format(): Document_formatContext | undefined {
		return this.tryGetRuleContext(0, Document_formatContext);
	}
	public app_format(): App_formatContext | undefined {
		return this.tryGetRuleContext(0, App_formatContext);
	}
	public website_format(): Website_formatContext | undefined {
		return this.tryGetRuleContext(0, Website_formatContext);
	}
	public stillimagefilm_format(): Stillimagefilm_formatContext | undefined {
		return this.tryGetRuleContext(0, Stillimagefilm_formatContext);
	}
	public AmpPdf(): TerminalNode | undefined { return this.tryGetToken(chatParser.AmpPdf, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return chatParser.RULE_resource_format_extra; }
	// @Override
	public enterRule(listener: chatParserListener): void {
		if (listener.enterResource_format_extra) {
			listener.enterResource_format_extra(this);
		}
	}
	// @Override
	public exitRule(listener: chatParserListener): void {
		if (listener.exitResource_format_extra) {
			listener.exitResource_format_extra(this);
		}
	}
}


export class Format2Context extends ParserRuleContext {
	public BitmarkMinus(): TerminalNode | undefined { return this.tryGetToken(chatParser.BitmarkMinus, 0); }
	public BitmarkPlus(): TerminalNode | undefined { return this.tryGetToken(chatParser.BitmarkPlus, 0); }
	public ColonText(): TerminalNode | undefined { return this.tryGetToken(chatParser.ColonText, 0); }
	public ColonJson(): TerminalNode | undefined { return this.tryGetToken(chatParser.ColonJson, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return chatParser.RULE_format2; }
	// @Override
	public enterRule(listener: chatParserListener): void {
		if (listener.enterFormat2) {
			listener.enterFormat2(this);
		}
	}
	// @Override
	public exitRule(listener: chatParserListener): void {
		if (listener.exitFormat2) {
			listener.exitFormat2(this);
		}
	}
}


export class Image_formatContext extends ParserRuleContext {
	public AmpImage(): TerminalNode | undefined { return this.tryGetToken(chatParser.AmpImage, 0); }
	public Image_type(): TerminalNode | undefined { return this.tryGetToken(chatParser.Image_type, 0); }
	public DotArticleAtt(): TerminalNode | undefined { return this.tryGetToken(chatParser.DotArticleAtt, 0); }
	public AmpImageLink(): TerminalNode | undefined { return this.tryGetToken(chatParser.AmpImageLink, 0); }
	public AmpImageZoom(): TerminalNode | undefined { return this.tryGetToken(chatParser.AmpImageZoom, 0); }
	public AmpImageWAudio(): TerminalNode | undefined { return this.tryGetToken(chatParser.AmpImageWAudio, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return chatParser.RULE_image_format; }
	// @Override
	public enterRule(listener: chatParserListener): void {
		if (listener.enterImage_format) {
			listener.enterImage_format(this);
		}
	}
	// @Override
	public exitRule(listener: chatParserListener): void {
		if (listener.exitImage_format) {
			listener.exitImage_format(this);
		}
	}
}


export class Video_formatContext extends ParserRuleContext {
	public AmpVideo(): TerminalNode | undefined { return this.tryGetToken(chatParser.AmpVideo, 0); }
	public AmpVideoLink(): TerminalNode | undefined { return this.tryGetToken(chatParser.AmpVideoLink, 0); }
	public AmpVideoEmbed(): TerminalNode | undefined { return this.tryGetToken(chatParser.AmpVideoEmbed, 0); }
	public COLON(): TerminalNode | undefined { return this.tryGetToken(chatParser.COLON, 0); }
	public Video_type(): TerminalNode | undefined { return this.tryGetToken(chatParser.Video_type, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return chatParser.RULE_video_format; }
	// @Override
	public enterRule(listener: chatParserListener): void {
		if (listener.enterVideo_format) {
			listener.enterVideo_format(this);
		}
	}
	// @Override
	public exitRule(listener: chatParserListener): void {
		if (listener.exitVideo_format) {
			listener.exitVideo_format(this);
		}
	}
}


export class Article_formatContext extends ParserRuleContext {
	public AmpArticle(): TerminalNode | undefined { return this.tryGetToken(chatParser.AmpArticle, 0); }
	public AmpArticleLink(): TerminalNode | undefined { return this.tryGetToken(chatParser.AmpArticleLink, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return chatParser.RULE_article_format; }
	// @Override
	public enterRule(listener: chatParserListener): void {
		if (listener.enterArticle_format) {
			listener.enterArticle_format(this);
		}
	}
	// @Override
	public exitRule(listener: chatParserListener): void {
		if (listener.exitArticle_format) {
			listener.exitArticle_format(this);
		}
	}
}


export class Document_formatContext extends ParserRuleContext {
	public AmpDocument(): TerminalNode | undefined { return this.tryGetToken(chatParser.AmpDocument, 0); }
	public AmpDocumentLink(): TerminalNode | undefined { return this.tryGetToken(chatParser.AmpDocumentLink, 0); }
	public AmpDocumentDownload(): TerminalNode | undefined { return this.tryGetToken(chatParser.AmpDocumentDownload, 0); }
	public AmpDocumentEmbed(): TerminalNode | undefined { return this.tryGetToken(chatParser.AmpDocumentEmbed, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return chatParser.RULE_document_format; }
	// @Override
	public enterRule(listener: chatParserListener): void {
		if (listener.enterDocument_format) {
			listener.enterDocument_format(this);
		}
	}
	// @Override
	public exitRule(listener: chatParserListener): void {
		if (listener.exitDocument_format) {
			listener.exitDocument_format(this);
		}
	}
}


export class App_formatContext extends ParserRuleContext {
	public AmpApp(): TerminalNode | undefined { return this.tryGetToken(chatParser.AmpApp, 0); }
	public AmpAppLink(): TerminalNode | undefined { return this.tryGetToken(chatParser.AmpAppLink, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return chatParser.RULE_app_format; }
	// @Override
	public enterRule(listener: chatParserListener): void {
		if (listener.enterApp_format) {
			listener.enterApp_format(this);
		}
	}
	// @Override
	public exitRule(listener: chatParserListener): void {
		if (listener.exitApp_format) {
			listener.exitApp_format(this);
		}
	}
}


export class Website_formatContext extends ParserRuleContext {
	public AmpWebsite(): TerminalNode | undefined { return this.tryGetToken(chatParser.AmpWebsite, 0); }
	public AmpWebsiteLink(): TerminalNode | undefined { return this.tryGetToken(chatParser.AmpWebsiteLink, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return chatParser.RULE_website_format; }
	// @Override
	public enterRule(listener: chatParserListener): void {
		if (listener.enterWebsite_format) {
			listener.enterWebsite_format(this);
		}
	}
	// @Override
	public exitRule(listener: chatParserListener): void {
		if (listener.exitWebsite_format) {
			listener.exitWebsite_format(this);
		}
	}
}


export class Stillimagefilm_formatContext extends ParserRuleContext {
	public AmpStillImageFilm(): TerminalNode | undefined { return this.tryGetToken(chatParser.AmpStillImageFilm, 0); }
	public AmpStillImageFilmLink(): TerminalNode | undefined { return this.tryGetToken(chatParser.AmpStillImageFilmLink, 0); }
	public AmpStillImageFilmEmbed(): TerminalNode | undefined { return this.tryGetToken(chatParser.AmpStillImageFilmEmbed, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return chatParser.RULE_stillimagefilm_format; }
	// @Override
	public enterRule(listener: chatParserListener): void {
		if (listener.enterStillimagefilm_format) {
			listener.enterStillimagefilm_format(this);
		}
	}
	// @Override
	public exitRule(listener: chatParserListener): void {
		if (listener.exitStillimagefilm_format) {
			listener.exitStillimagefilm_format(this);
		}
	}
}


export class Op_article_formatContext extends ParserRuleContext {
	public OpAmpArticleLink(): TerminalNode | undefined { return this.tryGetToken(chatParser.OpAmpArticleLink, 0); }
	public OpAmpArticle(): TerminalNode | undefined { return this.tryGetToken(chatParser.OpAmpArticle, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return chatParser.RULE_op_article_format; }
	// @Override
	public enterRule(listener: chatParserListener): void {
		if (listener.enterOp_article_format) {
			listener.enterOp_article_format(this);
		}
	}
	// @Override
	public exitRule(listener: chatParserListener): void {
		if (listener.exitOp_article_format) {
			listener.exitOp_article_format(this);
		}
	}
}


export class Op_document_formatContext extends ParserRuleContext {
	public OpAmpDocumentLink(): TerminalNode | undefined { return this.tryGetToken(chatParser.OpAmpDocumentLink, 0); }
	public OpAmpDocument(): TerminalNode | undefined { return this.tryGetToken(chatParser.OpAmpDocument, 0); }
	public OpAmpDocumentDownload(): TerminalNode | undefined { return this.tryGetToken(chatParser.OpAmpDocumentDownload, 0); }
	public OpAmpDocumentEmbed(): TerminalNode | undefined { return this.tryGetToken(chatParser.OpAmpDocumentEmbed, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return chatParser.RULE_op_document_format; }
	// @Override
	public enterRule(listener: chatParserListener): void {
		if (listener.enterOp_document_format) {
			listener.enterOp_document_format(this);
		}
	}
	// @Override
	public exitRule(listener: chatParserListener): void {
		if (listener.exitOp_document_format) {
			listener.exitOp_document_format(this);
		}
	}
}


export class Op_app_formatContext extends ParserRuleContext {
	public OpAmpApp(): TerminalNode | undefined { return this.tryGetToken(chatParser.OpAmpApp, 0); }
	public OpAmpAppLink(): TerminalNode | undefined { return this.tryGetToken(chatParser.OpAmpAppLink, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return chatParser.RULE_op_app_format; }
	// @Override
	public enterRule(listener: chatParserListener): void {
		if (listener.enterOp_app_format) {
			listener.enterOp_app_format(this);
		}
	}
	// @Override
	public exitRule(listener: chatParserListener): void {
		if (listener.exitOp_app_format) {
			listener.exitOp_app_format(this);
		}
	}
}


export class Op_website_formatContext extends ParserRuleContext {
	public OpAmpWebsite(): TerminalNode | undefined { return this.tryGetToken(chatParser.OpAmpWebsite, 0); }
	public OpAmpWebsiteLink(): TerminalNode | undefined { return this.tryGetToken(chatParser.OpAmpWebsiteLink, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return chatParser.RULE_op_website_format; }
	// @Override
	public enterRule(listener: chatParserListener): void {
		if (listener.enterOp_website_format) {
			listener.enterOp_website_format(this);
		}
	}
	// @Override
	public exitRule(listener: chatParserListener): void {
		if (listener.exitOp_website_format) {
			listener.exitOp_website_format(this);
		}
	}
}


export class Op_video_formatContext extends ParserRuleContext {
	public OpAmpVideo(): TerminalNode | undefined { return this.tryGetToken(chatParser.OpAmpVideo, 0); }
	public COLON(): TerminalNode | undefined { return this.tryGetToken(chatParser.COLON, 0); }
	public Video_type(): TerminalNode | undefined { return this.tryGetToken(chatParser.Video_type, 0); }
	public OpAmpVideoLink(): TerminalNode | undefined { return this.tryGetToken(chatParser.OpAmpVideoLink, 0); }
	public OpAmpVideoEmbed(): TerminalNode | undefined { return this.tryGetToken(chatParser.OpAmpVideoEmbed, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return chatParser.RULE_op_video_format; }
	// @Override
	public enterRule(listener: chatParserListener): void {
		if (listener.enterOp_video_format) {
			listener.enterOp_video_format(this);
		}
	}
	// @Override
	public exitRule(listener: chatParserListener): void {
		if (listener.exitOp_video_format) {
			listener.exitOp_video_format(this);
		}
	}
}


export class Op_stillimagefilm_formatContext extends ParserRuleContext {
	public OpAmpStillImageFilm(): TerminalNode | undefined { return this.tryGetToken(chatParser.OpAmpStillImageFilm, 0); }
	public OpAmpStillImageFilmLink(): TerminalNode | undefined { return this.tryGetToken(chatParser.OpAmpStillImageFilmLink, 0); }
	public OpAmpStillImageFilmEmbed(): TerminalNode | undefined { return this.tryGetToken(chatParser.OpAmpStillImageFilmEmbed, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return chatParser.RULE_op_stillimagefilm_format; }
	// @Override
	public enterRule(listener: chatParserListener): void {
		if (listener.enterOp_stillimagefilm_format) {
			listener.enterOp_stillimagefilm_format(this);
		}
	}
	// @Override
	public exitRule(listener: chatParserListener): void {
		if (listener.exitOp_stillimagefilm_format) {
			listener.exitOp_stillimagefilm_format(this);
		}
	}
}


export class ArticlebitContext extends ParserRuleContext {
	public op_article_format(): Op_article_formatContext | undefined {
		return this.tryGetRuleContext(0, Op_article_formatContext);
	}
	public COLON(): TerminalNode | undefined { return this.tryGetToken(chatParser.COLON, 0); }
	public url(): UrlContext | undefined {
		return this.tryGetRuleContext(0, UrlContext);
	}
	public CL(): TerminalNode | undefined { return this.tryGetToken(chatParser.CL, 0); }
	public ArticleText(): TerminalNode | undefined { return this.tryGetToken(chatParser.ArticleText, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return chatParser.RULE_articlebit; }
	// @Override
	public enterRule(listener: chatParserListener): void {
		if (listener.enterArticlebit) {
			listener.enterArticlebit(this);
		}
	}
	// @Override
	public exitRule(listener: chatParserListener): void {
		if (listener.exitArticlebit) {
			listener.exitArticlebit(this);
		}
	}
}


export class DocumentbitContext extends ParserRuleContext {
	public op_document_format(): Op_document_formatContext {
		return this.getRuleContext(0, Op_document_formatContext);
	}
	public COLON(): TerminalNode { return this.getToken(chatParser.COLON, 0); }
	public url(): UrlContext {
		return this.getRuleContext(0, UrlContext);
	}
	public CL(): TerminalNode[];
	public CL(i: number): TerminalNode;
	public CL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(chatParser.CL);
		} else {
			return this.getToken(chatParser.CL, i);
		}
	}
	public OPATALT(): TerminalNode | undefined { return this.tryGetToken(chatParser.OPATALT, 0); }
	public words(): WordsContext | undefined {
		return this.tryGetRuleContext(0, WordsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return chatParser.RULE_documentbit; }
	// @Override
	public enterRule(listener: chatParserListener): void {
		if (listener.enterDocumentbit) {
			listener.enterDocumentbit(this);
		}
	}
	// @Override
	public exitRule(listener: chatParserListener): void {
		if (listener.exitDocumentbit) {
			listener.exitDocumentbit(this);
		}
	}
}


export class WebsitebitContext extends ParserRuleContext {
	public op_website_format(): Op_website_formatContext {
		return this.getRuleContext(0, Op_website_formatContext);
	}
	public COLON(): TerminalNode { return this.getToken(chatParser.COLON, 0); }
	public url(): UrlContext {
		return this.getRuleContext(0, UrlContext);
	}
	public CL(): TerminalNode[];
	public CL(i: number): TerminalNode;
	public CL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(chatParser.CL);
		} else {
			return this.getToken(chatParser.CL, i);
		}
	}
	public OPATALT(): TerminalNode | undefined { return this.tryGetToken(chatParser.OPATALT, 0); }
	public words(): WordsContext | undefined {
		return this.tryGetRuleContext(0, WordsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return chatParser.RULE_websitebit; }
	// @Override
	public enterRule(listener: chatParserListener): void {
		if (listener.enterWebsitebit) {
			listener.enterWebsitebit(this);
		}
	}
	// @Override
	public exitRule(listener: chatParserListener): void {
		if (listener.exitWebsitebit) {
			listener.exitWebsitebit(this);
		}
	}
}


export class AppbitContext extends ParserRuleContext {
	public op_app_format(): Op_app_formatContext {
		return this.getRuleContext(0, Op_app_formatContext);
	}
	public COLON(): TerminalNode { return this.getToken(chatParser.COLON, 0); }
	public CL(): TerminalNode[];
	public CL(i: number): TerminalNode;
	public CL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(chatParser.CL);
		} else {
			return this.getToken(chatParser.CL, i);
		}
	}
	public url(): UrlContext | undefined {
		return this.tryGetRuleContext(0, UrlContext);
	}
	public telephone(): TelephoneContext | undefined {
		return this.tryGetRuleContext(0, TelephoneContext);
	}
	public OPATALT(): TerminalNode | undefined { return this.tryGetToken(chatParser.OPATALT, 0); }
	public words(): WordsContext | undefined {
		return this.tryGetRuleContext(0, WordsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return chatParser.RULE_appbit; }
	// @Override
	public enterRule(listener: chatParserListener): void {
		if (listener.enterAppbit) {
			listener.enterAppbit(this);
		}
	}
	// @Override
	public exitRule(listener: chatParserListener): void {
		if (listener.exitAppbit) {
			listener.exitAppbit(this);
		}
	}
}


export class StillimagefilmbitContext extends ParserRuleContext {
	public stillimg_one(): Stillimg_oneContext {
		return this.getRuleContext(0, Stillimg_oneContext);
	}
	public resource_chained(): Resource_chainedContext[];
	public resource_chained(i: number): Resource_chainedContext;
	public resource_chained(i?: number): Resource_chainedContext | Resource_chainedContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Resource_chainedContext);
		} else {
			return this.getRuleContext(i, Resource_chainedContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return chatParser.RULE_stillimagefilmbit; }
	// @Override
	public enterRule(listener: chatParserListener): void {
		if (listener.enterStillimagefilmbit) {
			listener.enterStillimagefilmbit(this);
		}
	}
	// @Override
	public exitRule(listener: chatParserListener): void {
		if (listener.exitStillimagefilmbit) {
			listener.exitStillimagefilmbit(this);
		}
	}
}


export class Stillimg_oneContext extends ParserRuleContext {
	public op_stillimagefilm_format(): Op_stillimagefilm_formatContext {
		return this.getRuleContext(0, Op_stillimagefilm_formatContext);
	}
	public COLON(): TerminalNode { return this.getToken(chatParser.COLON, 0); }
	public url(): UrlContext {
		return this.getRuleContext(0, UrlContext);
	}
	public CL(): TerminalNode { return this.getToken(chatParser.CL, 0); }
	public S(): TerminalNode[];
	public S(i: number): TerminalNode;
	public S(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(chatParser.S);
		} else {
			return this.getToken(chatParser.S, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return chatParser.RULE_stillimg_one; }
	// @Override
	public enterRule(listener: chatParserListener): void {
		if (listener.enterStillimg_one) {
			listener.enterStillimg_one(this);
		}
	}
	// @Override
	public exitRule(listener: chatParserListener): void {
		if (listener.exitStillimg_one) {
			listener.exitStillimg_one(this);
		}
	}
}


export class VideobitContext extends ParserRuleContext {
	public video_one(): Video_oneContext {
		return this.getRuleContext(0, Video_oneContext);
	}
	public resource_chained(): Resource_chainedContext[];
	public resource_chained(i: number): Resource_chainedContext;
	public resource_chained(i?: number): Resource_chainedContext | Resource_chainedContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Resource_chainedContext);
		} else {
			return this.getRuleContext(i, Resource_chainedContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return chatParser.RULE_videobit; }
	// @Override
	public enterRule(listener: chatParserListener): void {
		if (listener.enterVideobit) {
			listener.enterVideobit(this);
		}
	}
	// @Override
	public exitRule(listener: chatParserListener): void {
		if (listener.exitVideobit) {
			listener.exitVideobit(this);
		}
	}
}


export class Video_oneContext extends ParserRuleContext {
	public op_video_format(): Op_video_formatContext {
		return this.getRuleContext(0, Op_video_formatContext);
	}
	public COLON(): TerminalNode { return this.getToken(chatParser.COLON, 0); }
	public url(): UrlContext {
		return this.getRuleContext(0, UrlContext);
	}
	public CL(): TerminalNode[];
	public CL(i: number): TerminalNode;
	public CL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(chatParser.CL);
		} else {
			return this.getToken(chatParser.CL, i);
		}
	}
	public OPATALT(): TerminalNode | undefined { return this.tryGetToken(chatParser.OPATALT, 0); }
	public words(): WordsContext | undefined {
		return this.tryGetRuleContext(0, WordsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return chatParser.RULE_video_one; }
	// @Override
	public enterRule(listener: chatParserListener): void {
		if (listener.enterVideo_one) {
			listener.enterVideo_one(this);
		}
	}
	// @Override
	public exitRule(listener: chatParserListener): void {
		if (listener.exitVideo_one) {
			listener.exitVideo_one(this);
		}
	}
}


export class ImagebitContext extends ParserRuleContext {
	public image_one(): Image_oneContext {
		return this.getRuleContext(0, Image_oneContext);
	}
	public image_chained(): Image_chainedContext[];
	public image_chained(i: number): Image_chainedContext;
	public image_chained(i?: number): Image_chainedContext | Image_chainedContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Image_chainedContext);
		} else {
			return this.getRuleContext(i, Image_chainedContext);
		}
	}
	public NL(): TerminalNode | undefined { return this.tryGetToken(chatParser.NL, 0); }
	public ShowInIndex(): TerminalNode | undefined { return this.tryGetToken(chatParser.ShowInIndex, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return chatParser.RULE_imagebit; }
	// @Override
	public enterRule(listener: chatParserListener): void {
		if (listener.enterImagebit) {
			listener.enterImagebit(this);
		}
	}
	// @Override
	public exitRule(listener: chatParserListener): void {
		if (listener.exitImagebit) {
			listener.exitImagebit(this);
		}
	}
}


export class Image_oneContext extends ParserRuleContext {
	public op_image_format(): Op_image_formatContext {
		return this.getRuleContext(0, Op_image_formatContext);
	}
	public COLON(): TerminalNode { return this.getToken(chatParser.COLON, 0); }
	public url(): UrlContext {
		return this.getRuleContext(0, UrlContext);
	}
	public CL(): TerminalNode { return this.getToken(chatParser.CL, 0); }
	public S(): TerminalNode[];
	public S(i: number): TerminalNode;
	public S(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(chatParser.S);
		} else {
			return this.getToken(chatParser.S, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return chatParser.RULE_image_one; }
	// @Override
	public enterRule(listener: chatParserListener): void {
		if (listener.enterImage_one) {
			listener.enterImage_one(this);
		}
	}
	// @Override
	public exitRule(listener: chatParserListener): void {
		if (listener.exitImage_one) {
			listener.exitImage_one(this);
		}
	}
}


export class Op_image_formatContext extends ParserRuleContext {
	public OpAmpImage(): TerminalNode | undefined { return this.tryGetToken(chatParser.OpAmpImage, 0); }
	public Image_type(): TerminalNode | undefined { return this.tryGetToken(chatParser.Image_type, 0); }
	public DotArticleAtt(): TerminalNode | undefined { return this.tryGetToken(chatParser.DotArticleAtt, 0); }
	public OpAmpImageLink(): TerminalNode | undefined { return this.tryGetToken(chatParser.OpAmpImageLink, 0); }
	public OpAmpImageZoom(): TerminalNode | undefined { return this.tryGetToken(chatParser.OpAmpImageZoom, 0); }
	public OpAmpImageWAudio(): TerminalNode | undefined { return this.tryGetToken(chatParser.OpAmpImageWAudio, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return chatParser.RULE_op_image_format; }
	// @Override
	public enterRule(listener: chatParserListener): void {
		if (listener.enterOp_image_format) {
			listener.enterOp_image_format(this);
		}
	}
	// @Override
	public exitRule(listener: chatParserListener): void {
		if (listener.exitOp_image_format) {
			listener.exitOp_image_format(this);
		}
	}
}


export class Image_chainedContext extends ParserRuleContext {
	public AtSrc(): TerminalNode | undefined { return this.tryGetToken(chatParser.AtSrc, 0); }
	public COLON(): TerminalNode | undefined { return this.tryGetToken(chatParser.COLON, 0); }
	public url(): UrlContext | undefined {
		return this.tryGetRuleContext(0, UrlContext);
	}
	public CL(): TerminalNode { return this.getToken(chatParser.CL, 0); }
	public NUMERIC(): TerminalNode | undefined { return this.tryGetToken(chatParser.NUMERIC, 0); }
	public AtWidth(): TerminalNode | undefined { return this.tryGetToken(chatParser.AtWidth, 0); }
	public AtHeight(): TerminalNode | undefined { return this.tryGetToken(chatParser.AtHeight, 0); }
	public OPATALT(): TerminalNode | undefined { return this.tryGetToken(chatParser.OPATALT, 0); }
	public OpAtCaption(): TerminalNode | undefined { return this.tryGetToken(chatParser.OpAtCaption, 0); }
	public OpAtSearch(): TerminalNode | undefined { return this.tryGetToken(chatParser.OpAtSearch, 0); }
	public OpAtLicense(): TerminalNode | undefined { return this.tryGetToken(chatParser.OpAtLicense, 0); }
	public OpAtCopyright(): TerminalNode | undefined { return this.tryGetToken(chatParser.OpAtCopyright, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return chatParser.RULE_image_chained; }
	// @Override
	public enterRule(listener: chatParserListener): void {
		if (listener.enterImage_chained) {
			listener.enterImage_chained(this);
		}
	}
	// @Override
	public exitRule(listener: chatParserListener): void {
		if (listener.exitImage_chained) {
			listener.exitImage_chained(this);
		}
	}
}


export class Image_chained4matchContext extends ParserRuleContext {
	public AtSrc(): TerminalNode | undefined { return this.tryGetToken(chatParser.AtSrc, 0); }
	public COLON(): TerminalNode | undefined { return this.tryGetToken(chatParser.COLON, 0); }
	public url(): UrlContext | undefined {
		return this.tryGetRuleContext(0, UrlContext);
	}
	public CL(): TerminalNode { return this.getToken(chatParser.CL, 0); }
	public NUMERIC(): TerminalNode | undefined { return this.tryGetToken(chatParser.NUMERIC, 0); }
	public AtWidth(): TerminalNode | undefined { return this.tryGetToken(chatParser.AtWidth, 0); }
	public AtHeight(): TerminalNode | undefined { return this.tryGetToken(chatParser.AtHeight, 0); }
	public OPATALT(): TerminalNode | undefined { return this.tryGetToken(chatParser.OPATALT, 0); }
	public OpAtCaption(): TerminalNode | undefined { return this.tryGetToken(chatParser.OpAtCaption, 0); }
	public OpAtSearch(): TerminalNode | undefined { return this.tryGetToken(chatParser.OpAtSearch, 0); }
	public OpAtLicense(): TerminalNode | undefined { return this.tryGetToken(chatParser.OpAtLicense, 0); }
	public OpAtCopyright(): TerminalNode | undefined { return this.tryGetToken(chatParser.OpAtCopyright, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return chatParser.RULE_image_chained4match; }
	// @Override
	public enterRule(listener: chatParserListener): void {
		if (listener.enterImage_chained4match) {
			listener.enterImage_chained4match(this);
		}
	}
	// @Override
	public exitRule(listener: chatParserListener): void {
		if (listener.exitImage_chained4match) {
			listener.exitImage_chained4match(this);
		}
	}
}


export class AudiobitContext extends ParserRuleContext {
	public audio_one(): Audio_oneContext {
		return this.getRuleContext(0, Audio_oneContext);
	}
	public resource_chained(): Resource_chainedContext[];
	public resource_chained(i: number): Resource_chainedContext;
	public resource_chained(i?: number): Resource_chainedContext | Resource_chainedContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Resource_chainedContext);
		} else {
			return this.getRuleContext(i, Resource_chainedContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return chatParser.RULE_audiobit; }
	// @Override
	public enterRule(listener: chatParserListener): void {
		if (listener.enterAudiobit) {
			listener.enterAudiobit(this);
		}
	}
	// @Override
	public exitRule(listener: chatParserListener): void {
		if (listener.exitAudiobit) {
			listener.exitAudiobit(this);
		}
	}
}


export class Audio_oneContext extends ParserRuleContext {
	public op_audio_format(): Op_audio_formatContext {
		return this.getRuleContext(0, Op_audio_formatContext);
	}
	public COLON(): TerminalNode { return this.getToken(chatParser.COLON, 0); }
	public url(): UrlContext {
		return this.getRuleContext(0, UrlContext);
	}
	public CL(): TerminalNode[];
	public CL(i: number): TerminalNode;
	public CL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(chatParser.CL);
		} else {
			return this.getToken(chatParser.CL, i);
		}
	}
	public OPATALT(): TerminalNode | undefined { return this.tryGetToken(chatParser.OPATALT, 0); }
	public words(): WordsContext | undefined {
		return this.tryGetRuleContext(0, WordsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return chatParser.RULE_audio_one; }
	// @Override
	public enterRule(listener: chatParserListener): void {
		if (listener.enterAudio_one) {
			listener.enterAudio_one(this);
		}
	}
	// @Override
	public exitRule(listener: chatParserListener): void {
		if (listener.exitAudio_one) {
			listener.exitAudio_one(this);
		}
	}
}


export class Audio_formatContext extends ParserRuleContext {
	public AmpAudio(): TerminalNode | undefined { return this.tryGetToken(chatParser.AmpAudio, 0); }
	public COLON(): TerminalNode | undefined { return this.tryGetToken(chatParser.COLON, 0); }
	public Audio_type(): TerminalNode | undefined { return this.tryGetToken(chatParser.Audio_type, 0); }
	public AmpAudioLink(): TerminalNode | undefined { return this.tryGetToken(chatParser.AmpAudioLink, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return chatParser.RULE_audio_format; }
	// @Override
	public enterRule(listener: chatParserListener): void {
		if (listener.enterAudio_format) {
			listener.enterAudio_format(this);
		}
	}
	// @Override
	public exitRule(listener: chatParserListener): void {
		if (listener.exitAudio_format) {
			listener.exitAudio_format(this);
		}
	}
}


export class Op_audio_formatContext extends ParserRuleContext {
	public OpAmpAudio(): TerminalNode | undefined { return this.tryGetToken(chatParser.OpAmpAudio, 0); }
	public COLON(): TerminalNode | undefined { return this.tryGetToken(chatParser.COLON, 0); }
	public Audio_type(): TerminalNode | undefined { return this.tryGetToken(chatParser.Audio_type, 0); }
	public OpAmpAudioLink(): TerminalNode | undefined { return this.tryGetToken(chatParser.OpAmpAudioLink, 0); }
	public OpAmpAudioEmbed(): TerminalNode | undefined { return this.tryGetToken(chatParser.OpAmpAudioEmbed, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return chatParser.RULE_op_audio_format; }
	// @Override
	public enterRule(listener: chatParserListener): void {
		if (listener.enterOp_audio_format) {
			listener.enterOp_audio_format(this);
		}
	}
	// @Override
	public exitRule(listener: chatParserListener): void {
		if (listener.exitOp_audio_format) {
			listener.exitOp_audio_format(this);
		}
	}
}


export class Resource_chainedContext extends ParserRuleContext {
	public COLON(): TerminalNode | undefined { return this.tryGetToken(chatParser.COLON, 0); }
	public CL(): TerminalNode { return this.getToken(chatParser.CL, 0); }
	public OPA(): TerminalNode | undefined { return this.tryGetToken(chatParser.OPA, 0); }
	public s_and_w(): S_and_wContext[];
	public s_and_w(i: number): S_and_wContext;
	public s_and_w(i?: number): S_and_wContext | S_and_wContext[] {
		if (i === undefined) {
			return this.getRuleContexts(S_and_wContext);
		} else {
			return this.getRuleContext(i, S_and_wContext);
		}
	}
	public AtSrc(): TerminalNode | undefined { return this.tryGetToken(chatParser.AtSrc, 0); }
	public S(): TerminalNode[];
	public S(i: number): TerminalNode;
	public S(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(chatParser.S);
		} else {
			return this.getToken(chatParser.S, i);
		}
	}
	public NL(): TerminalNode[];
	public NL(i: number): TerminalNode;
	public NL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(chatParser.NL);
		} else {
			return this.getToken(chatParser.NL, i);
		}
	}
	public NUMERIC(): TerminalNode | undefined { return this.tryGetToken(chatParser.NUMERIC, 0); }
	public AtWidth(): TerminalNode | undefined { return this.tryGetToken(chatParser.AtWidth, 0); }
	public AtHeight(): TerminalNode | undefined { return this.tryGetToken(chatParser.AtHeight, 0); }
	public OPATALT(): TerminalNode | undefined { return this.tryGetToken(chatParser.OPATALT, 0); }
	public OpAtCaption(): TerminalNode | undefined { return this.tryGetToken(chatParser.OpAtCaption, 0); }
	public OpAtSearch(): TerminalNode | undefined { return this.tryGetToken(chatParser.OpAtSearch, 0); }
	public OpAtLicense(): TerminalNode | undefined { return this.tryGetToken(chatParser.OpAtLicense, 0); }
	public OpAtCopyright(): TerminalNode | undefined { return this.tryGetToken(chatParser.OpAtCopyright, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return chatParser.RULE_resource_chained; }
	// @Override
	public enterRule(listener: chatParserListener): void {
		if (listener.enterResource_chained) {
			listener.enterResource_chained(this);
		}
	}
	// @Override
	public exitRule(listener: chatParserListener): void {
		if (listener.exitResource_chained) {
			listener.exitResource_chained(this);
		}
	}
}


export class TelephoneContext extends ParserRuleContext {
	public TEL(): TerminalNode { return this.getToken(chatParser.TEL, 0); }
	public PLUS(): TerminalNode { return this.getToken(chatParser.PLUS, 0); }
	public NUMERIC(): TerminalNode { return this.getToken(chatParser.NUMERIC, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return chatParser.RULE_telephone; }
	// @Override
	public enterRule(listener: chatParserListener): void {
		if (listener.enterTelephone) {
			listener.enterTelephone(this);
		}
	}
	// @Override
	public exitRule(listener: chatParserListener): void {
		if (listener.exitTelephone) {
			listener.exitTelephone(this);
		}
	}
}


export class UrlContext extends ParserRuleContext {
	public URL(): TerminalNode { return this.getToken(chatParser.URL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return chatParser.RULE_url; }
	// @Override
	public enterRule(listener: chatParserListener): void {
		if (listener.enterUrl) {
			listener.enterUrl(this);
		}
	}
	// @Override
	public exitRule(listener: chatParserListener): void {
		if (listener.exitUrl) {
			listener.exitUrl(this);
		}
	}
}


export class ItemContext extends ParserRuleContext {
	public OPC(): TerminalNode { return this.getToken(chatParser.OPC, 0); }
	public CL(): TerminalNode { return this.getToken(chatParser.CL, 0); }
	public lead(): LeadContext | undefined {
		return this.tryGetRuleContext(0, LeadContext);
	}
	public S(): TerminalNode[];
	public S(i: number): TerminalNode;
	public S(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(chatParser.S);
		} else {
			return this.getToken(chatParser.S, i);
		}
	}
	public s_and_w(): S_and_wContext | undefined {
		return this.tryGetRuleContext(0, S_and_wContext);
	}
	public COLON(): TerminalNode[];
	public COLON(i: number): TerminalNode;
	public COLON(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(chatParser.COLON);
		} else {
			return this.getToken(chatParser.COLON, i);
		}
	}
	public words(): WordsContext[];
	public words(i: number): WordsContext;
	public words(i?: number): WordsContext | WordsContext[] {
		if (i === undefined) {
			return this.getRuleContexts(WordsContext);
		} else {
			return this.getRuleContext(i, WordsContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return chatParser.RULE_item; }
	// @Override
	public enterRule(listener: chatParserListener): void {
		if (listener.enterItem) {
			listener.enterItem(this);
		}
	}
	// @Override
	public exitRule(listener: chatParserListener): void {
		if (listener.exitItem) {
			listener.exitItem(this);
		}
	}
}


export class LeadContext extends ParserRuleContext {
	public OPC(): TerminalNode { return this.getToken(chatParser.OPC, 0); }
	public s_and_w(): S_and_wContext {
		return this.getRuleContext(0, S_and_wContext);
	}
	public CL(): TerminalNode { return this.getToken(chatParser.CL, 0); }
	public COLON(): TerminalNode[];
	public COLON(i: number): TerminalNode;
	public COLON(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(chatParser.COLON);
		} else {
			return this.getToken(chatParser.COLON, i);
		}
	}
	public words(): WordsContext[];
	public words(i: number): WordsContext;
	public words(i?: number): WordsContext | WordsContext[] {
		if (i === undefined) {
			return this.getRuleContexts(WordsContext);
		} else {
			return this.getRuleContext(i, WordsContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return chatParser.RULE_lead; }
	// @Override
	public enterRule(listener: chatParserListener): void {
		if (listener.enterLead) {
			listener.enterLead(this);
		}
	}
	// @Override
	public exitRule(listener: chatParserListener): void {
		if (listener.exitLead) {
			listener.exitLead(this);
		}
	}
}


export class AnglerefContext extends ParserRuleContext {
	public OPRANGLES(): TerminalNode | undefined { return this.tryGetToken(chatParser.OPRANGLES, 0); }
	public CL(): TerminalNode { return this.getToken(chatParser.CL, 0); }
	public s_and_w(): S_and_wContext | undefined {
		return this.tryGetRuleContext(0, S_and_wContext);
	}
	public OPRANGLEL(): TerminalNode | undefined { return this.tryGetToken(chatParser.OPRANGLEL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return chatParser.RULE_angleref; }
	// @Override
	public enterRule(listener: chatParserListener): void {
		if (listener.enterAngleref) {
			listener.enterAngleref(this);
		}
	}
	// @Override
	public exitRule(listener: chatParserListener): void {
		if (listener.exitAngleref) {
			listener.exitAngleref(this);
		}
	}
}


export class ExampleContext extends ParserRuleContext {
	public AtExamplecl(): TerminalNode | undefined { return this.tryGetToken(chatParser.AtExamplecl, 0); }
	public AtExampleWithStr(): TerminalNode | undefined { return this.tryGetToken(chatParser.AtExampleWithStr, 0); }
	public AtExamplecol(): TerminalNode | undefined { return this.tryGetToken(chatParser.AtExamplecol, 0); }
	public EOF(): TerminalNode | undefined { return this.tryGetToken(chatParser.EOF, 0); }
	public SENTENCE(): TerminalNode | undefined { return this.tryGetToken(chatParser.SENTENCE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return chatParser.RULE_example; }
	// @Override
	public enterRule(listener: chatParserListener): void {
		if (listener.enterExample) {
			listener.enterExample(this);
		}
	}
	// @Override
	public exitRule(listener: chatParserListener): void {
		if (listener.exitExample) {
			listener.exitExample(this);
		}
	}
}


export class Bracketed_textContext extends ParserRuleContext {
	public BracEnclose(): TerminalNode { return this.getToken(chatParser.BracEnclose, 0); }
	public CL(): TerminalNode | undefined { return this.tryGetToken(chatParser.CL, 0); }
	public s_and_w(): S_and_wContext[];
	public s_and_w(i: number): S_and_wContext;
	public s_and_w(i?: number): S_and_wContext | S_and_wContext[] {
		if (i === undefined) {
			return this.getRuleContexts(S_and_wContext);
		} else {
			return this.getRuleContext(i, S_and_wContext);
		}
	}
	public NL(): TerminalNode[];
	public NL(i: number): TerminalNode;
	public NL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(chatParser.NL);
		} else {
			return this.getToken(chatParser.NL, i);
		}
	}
	public S(): TerminalNode[];
	public S(i: number): TerminalNode;
	public S(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(chatParser.S);
		} else {
			return this.getToken(chatParser.S, i);
		}
	}
	public EOF(): TerminalNode | undefined { return this.tryGetToken(chatParser.EOF, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return chatParser.RULE_bracketed_text; }
	// @Override
	public enterRule(listener: chatParserListener): void {
		if (listener.enterBracketed_text) {
			listener.enterBracketed_text(this);
		}
	}
	// @Override
	public exitRule(listener: chatParserListener): void {
		if (listener.exitBracketed_text) {
			listener.exitBracketed_text(this);
		}
	}
}


export class ReferenceContext extends ParserRuleContext {
	public AtReference(): TerminalNode { return this.getToken(chatParser.AtReference, 0); }
	public CL(): TerminalNode | undefined { return this.tryGetToken(chatParser.CL, 0); }
	public s_and_w(): S_and_wContext[];
	public s_and_w(i: number): S_and_wContext;
	public s_and_w(i?: number): S_and_wContext | S_and_wContext[] {
		if (i === undefined) {
			return this.getRuleContexts(S_and_wContext);
		} else {
			return this.getRuleContext(i, S_and_wContext);
		}
	}
	public COLON(): TerminalNode[];
	public COLON(i: number): TerminalNode;
	public COLON(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(chatParser.COLON);
		} else {
			return this.getToken(chatParser.COLON, i);
		}
	}
	public URL(): TerminalNode[];
	public URL(i: number): TerminalNode;
	public URL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(chatParser.URL);
		} else {
			return this.getToken(chatParser.URL, i);
		}
	}
	public NL(): TerminalNode[];
	public NL(i: number): TerminalNode;
	public NL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(chatParser.NL);
		} else {
			return this.getToken(chatParser.NL, i);
		}
	}
	public EOF(): TerminalNode | undefined { return this.tryGetToken(chatParser.EOF, 0); }
	public S(): TerminalNode[];
	public S(i: number): TerminalNode;
	public S(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(chatParser.S);
		} else {
			return this.getToken(chatParser.S, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return chatParser.RULE_reference; }
	// @Override
	public enterRule(listener: chatParserListener): void {
		if (listener.enterReference) {
			listener.enterReference(this);
		}
	}
	// @Override
	public exitRule(listener: chatParserListener): void {
		if (listener.exitReference) {
			listener.exitReference(this);
		}
	}
}


export class ProgressContext extends ParserRuleContext {
	public AtProgress(): TerminalNode { return this.getToken(chatParser.AtProgress, 0); }
	public s_and_w(): S_and_wContext {
		return this.getRuleContext(0, S_and_wContext);
	}
	public CL(): TerminalNode { return this.getToken(chatParser.CL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return chatParser.RULE_progress; }
	// @Override
	public enterRule(listener: chatParserListener): void {
		if (listener.enterProgress) {
			listener.enterProgress(this);
		}
	}
	// @Override
	public exitRule(listener: chatParserListener): void {
		if (listener.exitProgress) {
			listener.exitProgress(this);
		}
	}
}


export class DatepropContext extends ParserRuleContext {
	public AtDate(): TerminalNode { return this.getToken(chatParser.AtDate, 0); }
	public CL(): TerminalNode { return this.getToken(chatParser.CL, 0); }
	public s_and_w(): S_and_wContext[];
	public s_and_w(i: number): S_and_wContext;
	public s_and_w(i?: number): S_and_wContext | S_and_wContext[] {
		if (i === undefined) {
			return this.getRuleContexts(S_and_wContext);
		} else {
			return this.getRuleContext(i, S_and_wContext);
		}
	}
	public COLON(): TerminalNode[];
	public COLON(i: number): TerminalNode;
	public COLON(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(chatParser.COLON);
		} else {
			return this.getToken(chatParser.COLON, i);
		}
	}
	public NL(): TerminalNode[];
	public NL(i: number): TerminalNode;
	public NL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(chatParser.NL);
		} else {
			return this.getToken(chatParser.NL, i);
		}
	}
	public dateprop_chained(): Dateprop_chainedContext | undefined {
		return this.tryGetRuleContext(0, Dateprop_chainedContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return chatParser.RULE_dateprop; }
	// @Override
	public enterRule(listener: chatParserListener): void {
		if (listener.enterDateprop) {
			listener.enterDateprop(this);
		}
	}
	// @Override
	public exitRule(listener: chatParserListener): void {
		if (listener.exitDateprop) {
			listener.exitDateprop(this);
		}
	}
}


export class Dateprop_chainedContext extends ParserRuleContext {
	public AtDate(): TerminalNode { return this.getToken(chatParser.AtDate, 0); }
	public CL(): TerminalNode { return this.getToken(chatParser.CL, 0); }
	public s_and_w(): S_and_wContext[];
	public s_and_w(i: number): S_and_wContext;
	public s_and_w(i?: number): S_and_wContext | S_and_wContext[] {
		if (i === undefined) {
			return this.getRuleContexts(S_and_wContext);
		} else {
			return this.getRuleContext(i, S_and_wContext);
		}
	}
	public COLON(): TerminalNode[];
	public COLON(i: number): TerminalNode;
	public COLON(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(chatParser.COLON);
		} else {
			return this.getToken(chatParser.COLON, i);
		}
	}
	public NL(): TerminalNode[];
	public NL(i: number): TerminalNode;
	public NL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(chatParser.NL);
		} else {
			return this.getToken(chatParser.NL, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return chatParser.RULE_dateprop_chained; }
	// @Override
	public enterRule(listener: chatParserListener): void {
		if (listener.enterDateprop_chained) {
			listener.enterDateprop_chained(this);
		}
	}
	// @Override
	public exitRule(listener: chatParserListener): void {
		if (listener.exitDateprop_chained) {
			listener.exitDateprop_chained(this);
		}
	}
}


export class InstructionContext extends ParserRuleContext {
	public OPB(): TerminalNode { return this.getToken(chatParser.OPB, 0); }
	public CL(): TerminalNode | undefined { return this.tryGetToken(chatParser.CL, 0); }
	public NL(): TerminalNode[];
	public NL(i: number): TerminalNode;
	public NL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(chatParser.NL);
		} else {
			return this.getToken(chatParser.NL, i);
		}
	}
	public s_and_w(): S_and_wContext[];
	public s_and_w(i: number): S_and_wContext;
	public s_and_w(i?: number): S_and_wContext | S_and_wContext[] {
		if (i === undefined) {
			return this.getRuleContexts(S_and_wContext);
		} else {
			return this.getRuleContext(i, S_and_wContext);
		}
	}
	public S(): TerminalNode[];
	public S(i: number): TerminalNode;
	public S(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(chatParser.S);
		} else {
			return this.getToken(chatParser.S, i);
		}
	}
	public EOF(): TerminalNode | undefined { return this.tryGetToken(chatParser.EOF, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return chatParser.RULE_instruction; }
	// @Override
	public enterRule(listener: chatParserListener): void {
		if (listener.enterInstruction) {
			listener.enterInstruction(this);
		}
	}
	// @Override
	public exitRule(listener: chatParserListener): void {
		if (listener.exitInstruction) {
			listener.exitInstruction(this);
		}
	}
}


export class HintContext extends ParserRuleContext {
	public OPQ(): TerminalNode { return this.getToken(chatParser.OPQ, 0); }
	public CL(): TerminalNode[];
	public CL(i: number): TerminalNode;
	public CL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(chatParser.CL);
		} else {
			return this.getToken(chatParser.CL, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return chatParser.RULE_hint; }
	// @Override
	public enterRule(listener: chatParserListener): void {
		if (listener.enterHint) {
			listener.enterHint(this);
		}
	}
	// @Override
	public exitRule(listener: chatParserListener): void {
		if (listener.exitHint) {
			listener.exitHint(this);
		}
	}
}


export class TitleContext extends ParserRuleContext {
	public OPHASH(): TerminalNode { return this.getToken(chatParser.OPHASH, 0); }
	public CL(): TerminalNode | undefined { return this.tryGetToken(chatParser.CL, 0); }
	public s_and_w(): S_and_wContext[];
	public s_and_w(i: number): S_and_wContext;
	public s_and_w(i?: number): S_and_wContext | S_and_wContext[] {
		if (i === undefined) {
			return this.getRuleContexts(S_and_wContext);
		} else {
			return this.getRuleContext(i, S_and_wContext);
		}
	}
	public NL(): TerminalNode[];
	public NL(i: number): TerminalNode;
	public NL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(chatParser.NL);
		} else {
			return this.getToken(chatParser.NL, i);
		}
	}
	public EOF(): TerminalNode | undefined { return this.tryGetToken(chatParser.EOF, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return chatParser.RULE_title; }
	// @Override
	public enterRule(listener: chatParserListener): void {
		if (listener.enterTitle) {
			listener.enterTitle(this);
		}
	}
	// @Override
	public exitRule(listener: chatParserListener): void {
		if (listener.exitTitle) {
			listener.exitTitle(this);
		}
	}
}


export class Bool_labelContext extends ParserRuleContext {
	public AtLabeltrue(): TerminalNode | undefined { return this.tryGetToken(chatParser.AtLabeltrue, 0); }
	public s_and_w(): S_and_wContext {
		return this.getRuleContext(0, S_and_wContext);
	}
	public CL(): TerminalNode { return this.getToken(chatParser.CL, 0); }
	public AtLabelfalse(): TerminalNode | undefined { return this.tryGetToken(chatParser.AtLabelfalse, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return chatParser.RULE_bool_label; }
	// @Override
	public enterRule(listener: chatParserListener): void {
		if (listener.enterBool_label) {
			listener.enterBool_label(this);
		}
	}
	// @Override
	public exitRule(listener: chatParserListener): void {
		if (listener.exitBool_label) {
			listener.exitBool_label(this);
		}
	}
}


export class Progress_pointsContext extends ParserRuleContext {
	public AtProgressPoints(): TerminalNode { return this.getToken(chatParser.AtProgressPoints, 0); }
	public COLON(): TerminalNode { return this.getToken(chatParser.COLON, 0); }
	public NUMERIC(): TerminalNode | undefined { return this.tryGetToken(chatParser.NUMERIC, 0); }
	public CL(): TerminalNode { return this.getToken(chatParser.CL, 0); }
	public s_and_w(): S_and_wContext | undefined {
		return this.tryGetRuleContext(0, S_and_wContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return chatParser.RULE_progress_points; }
	// @Override
	public enterRule(listener: chatParserListener): void {
		if (listener.enterProgress_points) {
			listener.enterProgress_points(this);
		}
	}
	// @Override
	public exitRule(listener: chatParserListener): void {
		if (listener.exitProgress_points) {
			listener.exitProgress_points(this);
		}
	}
}


export class IstrackedContext extends ParserRuleContext {
	public OpAtIsTracked(): TerminalNode { return this.getToken(chatParser.OpAtIsTracked, 0); }
	public s_and_w(): S_and_wContext {
		return this.getRuleContext(0, S_and_wContext);
	}
	public CL(): TerminalNode { return this.getToken(chatParser.CL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return chatParser.RULE_istracked; }
	// @Override
	public enterRule(listener: chatParserListener): void {
		if (listener.enterIstracked) {
			listener.enterIstracked(this);
		}
	}
	// @Override
	public exitRule(listener: chatParserListener): void {
		if (listener.exitIstracked) {
			listener.exitIstracked(this);
		}
	}
}


export class IsinfoonlyContext extends ParserRuleContext {
	public OpAtIsInfoOnly(): TerminalNode { return this.getToken(chatParser.OpAtIsInfoOnly, 0); }
	public s_and_w(): S_and_wContext {
		return this.getRuleContext(0, S_and_wContext);
	}
	public CL(): TerminalNode { return this.getToken(chatParser.CL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return chatParser.RULE_isinfoonly; }
	// @Override
	public enterRule(listener: chatParserListener): void {
		if (listener.enterIsinfoonly) {
			listener.enterIsinfoonly(this);
		}
	}
	// @Override
	public exitRule(listener: chatParserListener): void {
		if (listener.exitIsinfoonly) {
			listener.exitIsinfoonly(this);
		}
	}
}


export class AtdefContext extends ParserRuleContext {
	public atdef_(): Atdef_Context[];
	public atdef_(i: number): Atdef_Context;
	public atdef_(i?: number): Atdef_Context | Atdef_Context[] {
		if (i === undefined) {
			return this.getRuleContexts(Atdef_Context);
		} else {
			return this.getRuleContext(i, Atdef_Context);
		}
	}
	public NL(): TerminalNode[];
	public NL(i: number): TerminalNode;
	public NL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(chatParser.NL);
		} else {
			return this.getToken(chatParser.NL, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return chatParser.RULE_atdef; }
	// @Override
	public enterRule(listener: chatParserListener): void {
		if (listener.enterAtdef) {
			listener.enterAtdef(this);
		}
	}
	// @Override
	public exitRule(listener: chatParserListener): void {
		if (listener.exitAtdef) {
			listener.exitAtdef(this);
		}
	}
}


export class Atdef_Context extends ParserRuleContext {
	public OPA(): TerminalNode | undefined { return this.tryGetToken(chatParser.OPA, 0); }
	public s_and_w(): S_and_wContext[];
	public s_and_w(i: number): S_and_wContext;
	public s_and_w(i?: number): S_and_wContext | S_and_wContext[] {
		if (i === undefined) {
			return this.getRuleContexts(S_and_wContext);
		} else {
			return this.getRuleContext(i, S_and_wContext);
		}
	}
	public CL(): TerminalNode { return this.getToken(chatParser.CL, 0); }
	public COLON(): TerminalNode[];
	public COLON(i: number): TerminalNode;
	public COLON(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(chatParser.COLON);
		} else {
			return this.getToken(chatParser.COLON, i);
		}
	}
	public DBLCOLON(): TerminalNode | undefined { return this.tryGetToken(chatParser.DBLCOLON, 0); }
	public NL(): TerminalNode[];
	public NL(i: number): TerminalNode;
	public NL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(chatParser.NL);
		} else {
			return this.getToken(chatParser.NL, i);
		}
	}
	public OpAtCopyright(): TerminalNode | undefined { return this.tryGetToken(chatParser.OpAtCopyright, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return chatParser.RULE_atdef_; }
	// @Override
	public enterRule(listener: chatParserListener): void {
		if (listener.enterAtdef_) {
			listener.enterAtdef_(this);
		}
	}
	// @Override
	public exitRule(listener: chatParserListener): void {
		if (listener.exitAtdef_) {
			listener.exitAtdef_(this);
		}
	}
}


export class DollaransContext extends ParserRuleContext {
	public OPDOLL(): TerminalNode { return this.getToken(chatParser.OPDOLL, 0); }
	public CL(): TerminalNode | undefined { return this.tryGetToken(chatParser.CL, 0); }
	public s_and_w(): S_and_wContext[];
	public s_and_w(i: number): S_and_wContext;
	public s_and_w(i?: number): S_and_wContext | S_and_wContext[] {
		if (i === undefined) {
			return this.getRuleContexts(S_and_wContext);
		} else {
			return this.getRuleContext(i, S_and_wContext);
		}
	}
	public COLON(): TerminalNode[];
	public COLON(i: number): TerminalNode;
	public COLON(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(chatParser.COLON);
		} else {
			return this.getToken(chatParser.COLON, i);
		}
	}
	public NL(): TerminalNode[];
	public NL(i: number): TerminalNode;
	public NL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(chatParser.NL);
		} else {
			return this.getToken(chatParser.NL, i);
		}
	}
	public EOF(): TerminalNode | undefined { return this.tryGetToken(chatParser.EOF, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return chatParser.RULE_dollarans; }
	// @Override
	public enterRule(listener: chatParserListener): void {
		if (listener.enterDollarans) {
			listener.enterDollarans(this);
		}
	}
	// @Override
	public exitRule(listener: chatParserListener): void {
		if (listener.exitDollarans) {
			listener.exitDollarans(this);
		}
	}
}


export class AnchorContext extends ParserRuleContext {
	public OPDANGLE(): TerminalNode { return this.getToken(chatParser.OPDANGLE, 0); }
	public CL(): TerminalNode { return this.getToken(chatParser.CL, 0); }
	public s_and_w(): S_and_wContext | undefined {
		return this.tryGetRuleContext(0, S_and_wContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return chatParser.RULE_anchor; }
	// @Override
	public enterRule(listener: chatParserListener): void {
		if (listener.enterAnchor) {
			listener.enterAnchor(this);
		}
	}
	// @Override
	public exitRule(listener: chatParserListener): void {
		if (listener.exitAnchor) {
			listener.exitAnchor(this);
		}
	}
}


export class LinesContext extends ParserRuleContext {
	public s_and_w(): S_and_wContext[];
	public s_and_w(i: number): S_and_wContext;
	public s_and_w(i?: number): S_and_wContext | S_and_wContext[] {
		if (i === undefined) {
			return this.getRuleContexts(S_and_wContext);
		} else {
			return this.getRuleContext(i, S_and_wContext);
		}
	}
	public NL(): TerminalNode[];
	public NL(i: number): TerminalNode;
	public NL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(chatParser.NL);
		} else {
			return this.getToken(chatParser.NL, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return chatParser.RULE_lines; }
	// @Override
	public enterRule(listener: chatParserListener): void {
		if (listener.enterLines) {
			listener.enterLines(this);
		}
	}
	// @Override
	public exitRule(listener: chatParserListener): void {
		if (listener.exitLines) {
			listener.exitLines(this);
		}
	}
}


export class S_and_wContext extends ParserRuleContext {
	public STRING(): TerminalNode | undefined { return this.tryGetToken(chatParser.STRING, 0); }
	public NUMERIC(): TerminalNode | undefined { return this.tryGetToken(chatParser.NUMERIC, 0); }
	public S(): TerminalNode[];
	public S(i: number): TerminalNode;
	public S(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(chatParser.S);
		} else {
			return this.getToken(chatParser.S, i);
		}
	}
	public words(): WordsContext | undefined {
		return this.tryGetRuleContext(0, WordsContext);
	}
	public OPS(): TerminalNode | undefined { return this.tryGetToken(chatParser.OPS, 0); }
	public s_and_w(): S_and_wContext | undefined {
		return this.tryGetRuleContext(0, S_and_wContext);
	}
	public CL(): TerminalNode | undefined { return this.tryGetToken(chatParser.CL, 0); }
	public COLON(): TerminalNode | undefined { return this.tryGetToken(chatParser.COLON, 0); }
	public AMP(): TerminalNode | undefined { return this.tryGetToken(chatParser.AMP, 0); }
	public DBLCOLON(): TerminalNode | undefined { return this.tryGetToken(chatParser.DBLCOLON, 0); }
	public DBLEQ(): TerminalNode | undefined { return this.tryGetToken(chatParser.DBLEQ, 0); }
	public URL(): TerminalNode | undefined { return this.tryGetToken(chatParser.URL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return chatParser.RULE_s_and_w; }
	// @Override
	public enterRule(listener: chatParserListener): void {
		if (listener.enterS_and_w) {
			listener.enterS_and_w(this);
		}
	}
	// @Override
	public exitRule(listener: chatParserListener): void {
		if (listener.exitS_and_w) {
			listener.exitS_and_w(this);
		}
	}
}


export class ClnspContext extends ParserRuleContext {
	public CL(): TerminalNode { return this.getToken(chatParser.CL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return chatParser.RULE_clnsp; }
	// @Override
	public enterRule(listener: chatParserListener): void {
		if (listener.enterClnsp) {
			listener.enterClnsp(this);
		}
	}
	// @Override
	public exitRule(listener: chatParserListener): void {
		if (listener.exitClnsp) {
			listener.exitClnsp(this);
		}
	}
}


export class SsplContext extends ParserRuleContext {
	public SSPL(): TerminalNode | undefined { return this.tryGetToken(chatParser.SSPL, 0); }
	public SSPL2(): TerminalNode | undefined { return this.tryGetToken(chatParser.SSPL2, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return chatParser.RULE_sspl; }
	// @Override
	public enterRule(listener: chatParserListener): void {
		if (listener.enterSspl) {
			listener.enterSspl(this);
		}
	}
	// @Override
	public exitRule(listener: chatParserListener): void {
		if (listener.exitSspl) {
			listener.exitSspl(this);
		}
	}
}


export class WordsContext extends ParserRuleContext {
	public SENTENCE(): TerminalNode[];
	public SENTENCE(i: number): TerminalNode;
	public SENTENCE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(chatParser.SENTENCE);
		} else {
			return this.getToken(chatParser.SENTENCE, i);
		}
	}
	public NOTBITMARK(): TerminalNode[];
	public NOTBITMARK(i: number): TerminalNode;
	public NOTBITMARK(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(chatParser.NOTBITMARK);
		} else {
			return this.getToken(chatParser.NOTBITMARK, i);
		}
	}
	public BARSTRING(): TerminalNode[];
	public BARSTRING(i: number): TerminalNode;
	public BARSTRING(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(chatParser.BARSTRING);
		} else {
			return this.getToken(chatParser.BARSTRING, i);
		}
	}
	public ELIPSIS(): TerminalNode[];
	public ELIPSIS(i: number): TerminalNode;
	public ELIPSIS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(chatParser.ELIPSIS);
		} else {
			return this.getToken(chatParser.ELIPSIS, i);
		}
	}
	public AMP(): TerminalNode[];
	public AMP(i: number): TerminalNode;
	public AMP(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(chatParser.AMP);
		} else {
			return this.getToken(chatParser.AMP, i);
		}
	}
	public Greater(): TerminalNode[];
	public Greater(i: number): TerminalNode;
	public Greater(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(chatParser.Greater);
		} else {
			return this.getToken(chatParser.Greater, i);
		}
	}
	public Less(): TerminalNode[];
	public Less(i: number): TerminalNode;
	public Less(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(chatParser.Less);
		} else {
			return this.getToken(chatParser.Less, i);
		}
	}
	public DBLEQ(): TerminalNode[];
	public DBLEQ(i: number): TerminalNode;
	public DBLEQ(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(chatParser.DBLEQ);
		} else {
			return this.getToken(chatParser.DBLEQ, i);
		}
	}
	public RightArrow(): TerminalNode[];
	public RightArrow(i: number): TerminalNode;
	public RightArrow(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(chatParser.RightArrow);
		} else {
			return this.getToken(chatParser.RightArrow, i);
		}
	}
	public RightAngle(): TerminalNode[];
	public RightAngle(i: number): TerminalNode;
	public RightAngle(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(chatParser.RightAngle);
		} else {
			return this.getToken(chatParser.RightAngle, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return chatParser.RULE_words; }
	// @Override
	public enterRule(listener: chatParserListener): void {
		if (listener.enterWords) {
			listener.enterWords(this);
		}
	}
	// @Override
	public exitRule(listener: chatParserListener): void {
		if (listener.exitWords) {
			listener.exitWords(this);
		}
	}
}


export class SpContext extends ParserRuleContext {
	public S(): TerminalNode { return this.getToken(chatParser.S, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return chatParser.RULE_sp; }
	// @Override
	public enterRule(listener: chatParserListener): void {
		if (listener.enterSp) {
			listener.enterSp(this);
		}
	}
	// @Override
	public exitRule(listener: chatParserListener): void {
		if (listener.exitSp) {
			listener.exitSp(this);
		}
	}
}


