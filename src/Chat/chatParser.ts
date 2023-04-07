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
	public static readonly OPDOLL = 7;
	public static readonly OPBUL = 8;
	public static readonly OPESC = 9;
	public static readonly OPRANGLES = 10;
	public static readonly OPRANGLEL = 11;
	public static readonly OPDANGLE = 12;
	public static readonly OPU = 13;
	public static readonly OPB = 14;
	public static readonly OPQ = 15;
	public static readonly OPA = 16;
	public static readonly OPP = 17;
	public static readonly OPM = 18;
	public static readonly OPS = 19;
	public static readonly OPR = 20;
	public static readonly OPC = 21;
	public static readonly OPHASH = 22;
	public static readonly CL = 23;
	public static readonly COLON = 24;
	public static readonly AMP = 25;
	public static readonly DBLCOLON = 26;
	public static readonly PLUS = 27;
	public static readonly DotAt = 28;
	public static readonly Greater = 29;
	public static readonly Less = 30;
	public static readonly RightAngle = 31;
	public static readonly RightArrow = 32;
	public static readonly DBLEQ = 33;
	public static readonly HSPL = 34;
	public static readonly HSPL2 = 35;
	public static readonly SSPL = 36;
	public static readonly SSPL2 = 37;
	public static readonly COMMENT = 38;
	public static readonly DCANY = 39;
	public static readonly Image_type = 40;
	public static readonly Audio_type = 41;
	public static readonly Video_type = 42;
	public static readonly ArticleText = 43;
	public static readonly NOTCL = 44;
	public static readonly NUMERIC = 45;
	public static readonly STRING = 46;
	public static readonly NL = 47;
	public static readonly NOTBITMARK = 48;
	public static readonly SENTENCE = 49;
	public static readonly BARSTRING = 50;
	public static readonly OPAT = 51;
	public static readonly AtProgress = 52;
	public static readonly AtReference = 53;
	public static readonly AtWidth = 54;
	public static readonly AtHeight = 55;
	public static readonly AtProgressPoints = 56;
	public static readonly AtShortanswer = 57;
	public static readonly AtLonganswer = 58;
	public static readonly AtExampleWithStr = 59;
	public static readonly AtExamplecol = 60;
	public static readonly AtExamplecl = 61;
	public static readonly AtPartialAnswerS = 62;
	public static readonly AtPartialAnswer = 63;
	public static readonly AtLabeltrue = 64;
	public static readonly AtLabelfalse = 65;
	public static readonly AtPoints = 66;
	public static readonly AtSrc = 67;
	public static readonly AtPartner = 68;
	public static readonly OPATALT = 69;
	public static readonly OPAMARK = 70;
	public static readonly ShowInIndex = 71;
	public static readonly OpAtCaption = 72;
	public static readonly OpAtLicense = 73;
	public static readonly OpAtCopyright = 74;
	public static readonly OpAtSearch = 75;
	public static readonly OpAtIsTracked = 76;
	public static readonly OpAtIsInfoOnly = 77;
	public static readonly AtDate = 78;
	public static readonly Http = 79;
	public static readonly Https = 80;
	public static readonly AmpAudio = 81;
	public static readonly AmpImage = 82;
	public static readonly AmpImageZoom = 83;
	public static readonly AmpImageWAudio = 84;
	public static readonly AmpVideo = 85;
	public static readonly AmpArticle = 86;
	public static readonly AmpDocument = 87;
	public static readonly AmpApp = 88;
	public static readonly AmpWebsite = 89;
	public static readonly AmpStillImageFilm = 90;
	public static readonly AmpPdf = 91;
	public static readonly OpAmpAudio = 92;
	public static readonly OpAmpImage = 93;
	public static readonly OpAmpImageZoom = 94;
	public static readonly OpAmpImageWAudio = 95;
	public static readonly OpAmpVideo = 96;
	public static readonly OpAmpArticle = 97;
	public static readonly OpAmpArticleAtt = 98;
	public static readonly OpAmpDocument = 99;
	public static readonly OpAmpApp = 100;
	public static readonly OpAmpWebsite = 101;
	public static readonly OpAmpStillImageFilm = 102;
	public static readonly BracEnclose = 103;
	public static readonly AmpAudioLink = 104;
	public static readonly AmpImageLink = 105;
	public static readonly AmpVideoLink = 106;
	public static readonly AmpArticleLink = 107;
	public static readonly AmpDocumentLink = 108;
	public static readonly AmpAppLink = 109;
	public static readonly AmpWebsiteLink = 110;
	public static readonly AmpStillImageFilmLink = 111;
	public static readonly OpAmpAudioLink = 112;
	public static readonly OpAmpImageLink = 113;
	public static readonly OpAmpVideoLink = 114;
	public static readonly OpAmpArticleLink = 115;
	public static readonly OpAmpDocumentLink = 116;
	public static readonly OpAmpAppLink = 117;
	public static readonly OpAmpWebsiteLink = 118;
	public static readonly OpAmpStillImageFilmLink = 119;
	public static readonly AmpImageEmbed = 120;
	public static readonly AmpVideoEmbed = 121;
	public static readonly AmpAudioEmbed = 122;
	public static readonly AmpDocumentEmbed = 123;
	public static readonly AmpStillImageFilmEmbed = 124;
	public static readonly OpAmpImageEmbed = 125;
	public static readonly OpAmpVideoEmbed = 126;
	public static readonly OpAmpAudioEmbed = 127;
	public static readonly OpAmpDocumentEmbed = 128;
	public static readonly OpAmpStillImageFilmEmbed = 129;
	public static readonly BitmarkMinus = 130;
	public static readonly BitmarkPlus = 131;
	public static readonly ColonText = 132;
	public static readonly ColonJson = 133;
	public static readonly Prosemirror = 134;
	public static readonly Placeholder = 135;
	public static readonly BASIC = 136;
	public static readonly JPG = 137;
	public static readonly PNG = 138;
	public static readonly GIF = 139;
	public static readonly SVG = 140;
	public static readonly MP2 = 141;
	public static readonly MP3 = 142;
	public static readonly MP4 = 143;
	public static readonly FLV = 144;
	public static readonly WMV = 145;
	public static readonly MPEG = 146;
	public static readonly MPG = 147;
	public static readonly TEL = 148;
	public static readonly DotArticleAtt = 149;
	public static readonly STAR = 150;
	public static readonly URL = 151;
	public static readonly LIST_LINE = 152;
	public static readonly ENCLBARS = 153;
	public static readonly RULE_bitmark = 0;
	public static readonly RULE_bitmark_ = 1;
	public static readonly RULE_chat = 2;
	public static readonly RULE_conversation = 3;
	public static readonly RULE_conversation_left_1 = 4;
	public static readonly RULE_conversation_right_1 = 5;
	public static readonly RULE_initiator = 6;
	public static readonly RULE_partner = 7;
	public static readonly RULE_partner1 = 8;
	public static readonly RULE_partner1_name = 9;
	public static readonly RULE_name_text = 10;
	public static readonly RULE_name_alt = 11;
	public static readonly RULE_chat_initiator = 12;
	public static readonly RULE_chat_partner = 13;
	public static readonly RULE_sspl_chat_partner = 14;
	public static readonly RULE_bitElem = 15;
	public static readonly RULE_resource = 16;
	public static readonly RULE_gap = 17;
	public static readonly RULE_single_gap = 18;
	public static readonly RULE_dcolon = 19;
	public static readonly RULE_atpoint = 20;
	public static readonly RULE_format = 21;
	public static readonly RULE_resource_format = 22;
	public static readonly RULE_resource_format_extra = 23;
	public static readonly RULE_format2 = 24;
	public static readonly RULE_image_format = 25;
	public static readonly RULE_video_format = 26;
	public static readonly RULE_article_format = 27;
	public static readonly RULE_document_format = 28;
	public static readonly RULE_app_format = 29;
	public static readonly RULE_website_format = 30;
	public static readonly RULE_stillimagefilm_format = 31;
	public static readonly RULE_op_article_format = 32;
	public static readonly RULE_op_document_format = 33;
	public static readonly RULE_op_app_format = 34;
	public static readonly RULE_op_website_format = 35;
	public static readonly RULE_op_video_format = 36;
	public static readonly RULE_op_stillimagefilm_format = 37;
	public static readonly RULE_articlebit = 38;
	public static readonly RULE_documentbit = 39;
	public static readonly RULE_websitebit = 40;
	public static readonly RULE_appbit = 41;
	public static readonly RULE_stillimagefilmbit = 42;
	public static readonly RULE_stillimg_one = 43;
	public static readonly RULE_videobit = 44;
	public static readonly RULE_video_one = 45;
	public static readonly RULE_imagebit = 46;
	public static readonly RULE_image_one = 47;
	public static readonly RULE_op_image_format = 48;
	public static readonly RULE_image_chained = 49;
	public static readonly RULE_image_chained4match = 50;
	public static readonly RULE_audiobit = 51;
	public static readonly RULE_audio_one = 52;
	public static readonly RULE_audio_format = 53;
	public static readonly RULE_op_audio_format = 54;
	public static readonly RULE_resource_chained = 55;
	public static readonly RULE_telephone = 56;
	public static readonly RULE_url = 57;
	public static readonly RULE_item = 58;
	public static readonly RULE_lead = 59;
	public static readonly RULE_angleref = 60;
	public static readonly RULE_example = 61;
	public static readonly RULE_bracketed_text = 62;
	public static readonly RULE_reference = 63;
	public static readonly RULE_progress = 64;
	public static readonly RULE_dateprop = 65;
	public static readonly RULE_dateprop_chained = 66;
	public static readonly RULE_instruction = 67;
	public static readonly RULE_hint = 68;
	public static readonly RULE_title = 69;
	public static readonly RULE_bool_label = 70;
	public static readonly RULE_progress_points = 71;
	public static readonly RULE_istracked = 72;
	public static readonly RULE_isinfoonly = 73;
	public static readonly RULE_atdef = 74;
	public static readonly RULE_atdef_ = 75;
	public static readonly RULE_dollarans = 76;
	public static readonly RULE_anchor = 77;
	public static readonly RULE_lines = 78;
	public static readonly RULE_s_and_w = 79;
	public static readonly RULE_clnsp = 80;
	public static readonly RULE_sspl = 81;
	public static readonly RULE_words = 82;
	public static readonly RULE_sp = 83;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"bitmark", "bitmark_", "chat", "conversation", "conversation_left_1", 
		"conversation_right_1", "initiator", "partner", "partner1", "partner1_name", 
		"name_text", "name_alt", "chat_initiator", "chat_partner", "sspl_chat_partner", 
		"bitElem", "resource", "gap", "single_gap", "dcolon", "atpoint", "format", 
		"resource_format", "resource_format_extra", "format2", "image_format", 
		"video_format", "article_format", "document_format", "app_format", "website_format", 
		"stillimagefilm_format", "op_article_format", "op_document_format", "op_app_format", 
		"op_website_format", "op_video_format", "op_stillimagefilm_format", "articlebit", 
		"documentbit", "websitebit", "appbit", "stillimagefilmbit", "stillimg_one", 
		"videobit", "video_one", "imagebit", "image_one", "op_image_format", "image_chained", 
		"image_chained4match", "audiobit", "audio_one", "audio_format", "op_audio_format", 
		"resource_chained", "telephone", "url", "item", "lead", "angleref", "example", 
		"bracketed_text", "reference", "progress", "dateprop", "dateprop_chained", 
		"instruction", "hint", "title", "bool_label", "progress_points", "istracked", 
		"isinfoonly", "atdef", "atdef_", "dollarans", "anchor", "lines", "s_and_w", 
		"clnsp", "sspl", "words", "sp",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'[.'", undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, "'[^'", undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, "'[#'", undefined, "':'", "'&'", "'::'", "'+'", "'.@'", "'>'", 
		"'<'", "'\u25BA'", "'\u2192'", "'=='", undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		"'[@'", undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		"'http://'", "'https://'", "'&audio'", "'&image'", "'&image-zoom'", "'&image-with-audio'", 
		"'&video'", "'&article'", "'&document'", "'&app'", "'&website'", "'&still-image-film'", 
		"'&pdf'", undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, "'&audio-link'", 
		"'&image-link'", "'&video-link'", "'&article-link'", "'&document-link'", 
		"'&app-link'", "'&website-link'", "'&still-image-film-link'", undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		"'&image-embed'", "'&video-embed'", "'&daudio-embed'", "'&document-embed'", 
		"'&still-image-film-embed'", undefined, undefined, undefined, undefined, 
		undefined, "':bitmark--'", "':bitmark++'", "':text'", "':json'", "':prosemirror'", 
		"':placeholder'", "':basic'", "':jpg'", "':png'", "':gif'", "':svg'", 
		"':mp2'", "':mp3'", "':mp4'", "':flv'", "':wmv'", "':mpeg'", "':mpg'", 
		"'tel:'", "'.article-attachment'", "'*'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "OPDOT", "S", "BitChat", "BitConv", "BitConversationLeft1", 
		"BitConversationRight1", "OPDOLL", "OPBUL", "OPESC", "OPRANGLES", "OPRANGLEL", 
		"OPDANGLE", "OPU", "OPB", "OPQ", "OPA", "OPP", "OPM", "OPS", "OPR", "OPC", 
		"OPHASH", "CL", "COLON", "AMP", "DBLCOLON", "PLUS", "DotAt", "Greater", 
		"Less", "RightAngle", "RightArrow", "DBLEQ", "HSPL", "HSPL2", "SSPL", 
		"SSPL2", "COMMENT", "DCANY", "Image_type", "Audio_type", "Video_type", 
		"ArticleText", "NOTCL", "NUMERIC", "STRING", "NL", "NOTBITMARK", "SENTENCE", 
		"BARSTRING", "OPAT", "AtProgress", "AtReference", "AtWidth", "AtHeight", 
		"AtProgressPoints", "AtShortanswer", "AtLonganswer", "AtExampleWithStr", 
		"AtExamplecol", "AtExamplecl", "AtPartialAnswerS", "AtPartialAnswer", 
		"AtLabeltrue", "AtLabelfalse", "AtPoints", "AtSrc", "AtPartner", "OPATALT", 
		"OPAMARK", "ShowInIndex", "OpAtCaption", "OpAtLicense", "OpAtCopyright", 
		"OpAtSearch", "OpAtIsTracked", "OpAtIsInfoOnly", "AtDate", "Http", "Https", 
		"AmpAudio", "AmpImage", "AmpImageZoom", "AmpImageWAudio", "AmpVideo", 
		"AmpArticle", "AmpDocument", "AmpApp", "AmpWebsite", "AmpStillImageFilm", 
		"AmpPdf", "OpAmpAudio", "OpAmpImage", "OpAmpImageZoom", "OpAmpImageWAudio", 
		"OpAmpVideo", "OpAmpArticle", "OpAmpArticleAtt", "OpAmpDocument", "OpAmpApp", 
		"OpAmpWebsite", "OpAmpStillImageFilm", "BracEnclose", "AmpAudioLink", 
		"AmpImageLink", "AmpVideoLink", "AmpArticleLink", "AmpDocumentLink", "AmpAppLink", 
		"AmpWebsiteLink", "AmpStillImageFilmLink", "OpAmpAudioLink", "OpAmpImageLink", 
		"OpAmpVideoLink", "OpAmpArticleLink", "OpAmpDocumentLink", "OpAmpAppLink", 
		"OpAmpWebsiteLink", "OpAmpStillImageFilmLink", "AmpImageEmbed", "AmpVideoEmbed", 
		"AmpAudioEmbed", "AmpDocumentEmbed", "AmpStillImageFilmEmbed", "OpAmpImageEmbed", 
		"OpAmpVideoEmbed", "OpAmpAudioEmbed", "OpAmpDocumentEmbed", "OpAmpStillImageFilmEmbed", 
		"BitmarkMinus", "BitmarkPlus", "ColonText", "ColonJson", "Prosemirror", 
		"Placeholder", "BASIC", "JPG", "PNG", "GIF", "SVG", "MP2", "MP3", "MP4", 
		"FLV", "WMV", "MPEG", "MPG", "TEL", "DotArticleAtt", "STAR", "URL", "LIST_LINE", 
		"ENCLBARS",
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
			this.state = 181;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 168;
				this.bitmark_();
				this.state = 178;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 1, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 172;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						while (_la === chatParser.S) {
							{
							{
							this.state = 169;
							this.match(chatParser.S);
							}
							}
							this.state = 174;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
						}
						this.state = 175;
						this.match(chatParser.NL);
						}
						}
					}
					this.state = 180;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 1, this._ctx);
				}
				}
				}
				this.state = 183;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << chatParser.BitChat) | (1 << chatParser.BitConv) | (1 << chatParser.BitConversationLeft1) | (1 << chatParser.BitConversationRight1))) !== 0));
			this.state = 188;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === chatParser.NL) {
				{
				{
				this.state = 185;
				this.match(chatParser.NL);
				}
				}
				this.state = 190;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 191;
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
			this.state = 197;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case chatParser.BitChat:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 193;
				this.chat();
				}
				break;
			case chatParser.BitConv:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 194;
				this.conversation();
				}
				break;
			case chatParser.BitConversationLeft1:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 195;
				this.conversation_left_1();
				}
				break;
			case chatParser.BitConversationRight1:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 196;
				this.conversation_right_1();
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
			this.state = 199;
			this.match(chatParser.BitChat);
			this.state = 200;
			this.format();
			this.state = 201;
			this.match(chatParser.CL);
			this.state = 205;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === chatParser.NL) {
				{
				{
				this.state = 202;
				this.match(chatParser.NL);
				}
				}
				this.state = 207;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 217;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 2)) & ~0x1F) === 0 && ((1 << (_la - 2)) & ((1 << (chatParser.S - 2)) | (1 << (chatParser.OPRANGLES - 2)) | (1 << (chatParser.OPRANGLEL - 2)) | (1 << (chatParser.OPDANGLE - 2)) | (1 << (chatParser.OPU - 2)) | (1 << (chatParser.OPB - 2)) | (1 << (chatParser.OPQ - 2)) | (1 << (chatParser.OPA - 2)) | (1 << (chatParser.OPS - 2)) | (1 << (chatParser.OPC - 2)) | (1 << (chatParser.OPHASH - 2)) | (1 << (chatParser.COLON - 2)) | (1 << (chatParser.AMP - 2)) | (1 << (chatParser.DBLCOLON - 2)) | (1 << (chatParser.Greater - 2)) | (1 << (chatParser.Less - 2)) | (1 << (chatParser.RightAngle - 2)) | (1 << (chatParser.RightArrow - 2)) | (1 << (chatParser.DBLEQ - 2)))) !== 0) || ((((_la - 43)) & ~0x1F) === 0 && ((1 << (_la - 43)) & ((1 << (chatParser.ArticleText - 43)) | (1 << (chatParser.NUMERIC - 43)) | (1 << (chatParser.STRING - 43)) | (1 << (chatParser.NOTBITMARK - 43)) | (1 << (chatParser.SENTENCE - 43)) | (1 << (chatParser.BARSTRING - 43)) | (1 << (chatParser.AtReference - 43)) | (1 << (chatParser.AtExampleWithStr - 43)) | (1 << (chatParser.AtExamplecol - 43)) | (1 << (chatParser.AtExamplecl - 43)) | (1 << (chatParser.AtLabeltrue - 43)) | (1 << (chatParser.AtLabelfalse - 43)) | (1 << (chatParser.OpAtCopyright - 43)))) !== 0) || ((((_la - 92)) & ~0x1F) === 0 && ((1 << (_la - 92)) & ((1 << (chatParser.OpAmpAudio - 92)) | (1 << (chatParser.OpAmpImage - 92)) | (1 << (chatParser.OpAmpImageZoom - 92)) | (1 << (chatParser.OpAmpImageWAudio - 92)) | (1 << (chatParser.OpAmpVideo - 92)) | (1 << (chatParser.OpAmpArticle - 92)) | (1 << (chatParser.OpAmpDocument - 92)) | (1 << (chatParser.OpAmpApp - 92)) | (1 << (chatParser.OpAmpWebsite - 92)) | (1 << (chatParser.OpAmpStillImageFilm - 92)) | (1 << (chatParser.OpAmpAudioLink - 92)) | (1 << (chatParser.OpAmpImageLink - 92)) | (1 << (chatParser.OpAmpVideoLink - 92)) | (1 << (chatParser.OpAmpArticleLink - 92)) | (1 << (chatParser.OpAmpDocumentLink - 92)) | (1 << (chatParser.OpAmpAppLink - 92)) | (1 << (chatParser.OpAmpWebsiteLink - 92)) | (1 << (chatParser.OpAmpStillImageFilmLink - 92)))) !== 0) || ((((_la - 126)) & ~0x1F) === 0 && ((1 << (_la - 126)) & ((1 << (chatParser.OpAmpVideoEmbed - 126)) | (1 << (chatParser.OpAmpAudioEmbed - 126)) | (1 << (chatParser.OpAmpDocumentEmbed - 126)) | (1 << (chatParser.OpAmpStillImageFilmEmbed - 126)) | (1 << (chatParser.URL - 126)) | (1 << (chatParser.LIST_LINE - 126)))) !== 0)) {
				{
				{
				this.state = 208;
				this.bitElem();
				this.state = 212;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === chatParser.NL) {
					{
					{
					this.state = 209;
					this.match(chatParser.NL);
					}
					}
					this.state = 214;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
				}
				this.state = 219;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 220;
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
			this.state = 221;
			this.initiator();
			this.state = 222;
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
			this.state = 223;
			this.partner();
			this.state = 232;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 224;
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
					this.state = 225;
					this.chat_initiator();
					this.state = 229;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === chatParser.SSPL || _la === chatParser.SSPL2) {
						{
						{
						this.state = 226;
						this.sspl_chat_partner();
						}
						}
						this.state = 231;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 234;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 9, this._ctx);
			} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
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
			this.state = 240;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 10, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 237;
					this.match(chatParser.NL);
					}
					}
				}
				this.state = 242;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 10, this._ctx);
			}
			this.state = 256;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 13, this._ctx) ) {
			case 1:
				{
				this.state = 243;
				this.resource();
				this.state = 253;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 12, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 247;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						while (_la === chatParser.NL) {
							{
							{
							this.state = 244;
							this.match(chatParser.NL);
							}
							}
							this.state = 249;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
						}
						this.state = 250;
						this.resource();
						}
						}
					}
					this.state = 255;
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
			this.state = 258;
			this.match(chatParser.BitConv);
			this.state = 259;
			this.format();
			this.state = 260;
			this.match(chatParser.CL);
			this.state = 264;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === chatParser.NL) {
				{
				{
				this.state = 261;
				this.match(chatParser.NL);
				}
				}
				this.state = 266;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 276;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 2)) & ~0x1F) === 0 && ((1 << (_la - 2)) & ((1 << (chatParser.S - 2)) | (1 << (chatParser.OPRANGLES - 2)) | (1 << (chatParser.OPRANGLEL - 2)) | (1 << (chatParser.OPDANGLE - 2)) | (1 << (chatParser.OPU - 2)) | (1 << (chatParser.OPB - 2)) | (1 << (chatParser.OPQ - 2)) | (1 << (chatParser.OPA - 2)) | (1 << (chatParser.OPS - 2)) | (1 << (chatParser.OPC - 2)) | (1 << (chatParser.OPHASH - 2)) | (1 << (chatParser.COLON - 2)) | (1 << (chatParser.AMP - 2)) | (1 << (chatParser.DBLCOLON - 2)) | (1 << (chatParser.Greater - 2)) | (1 << (chatParser.Less - 2)) | (1 << (chatParser.RightAngle - 2)) | (1 << (chatParser.RightArrow - 2)) | (1 << (chatParser.DBLEQ - 2)))) !== 0) || ((((_la - 43)) & ~0x1F) === 0 && ((1 << (_la - 43)) & ((1 << (chatParser.ArticleText - 43)) | (1 << (chatParser.NUMERIC - 43)) | (1 << (chatParser.STRING - 43)) | (1 << (chatParser.NOTBITMARK - 43)) | (1 << (chatParser.SENTENCE - 43)) | (1 << (chatParser.BARSTRING - 43)) | (1 << (chatParser.AtReference - 43)) | (1 << (chatParser.AtExampleWithStr - 43)) | (1 << (chatParser.AtExamplecol - 43)) | (1 << (chatParser.AtExamplecl - 43)) | (1 << (chatParser.AtLabeltrue - 43)) | (1 << (chatParser.AtLabelfalse - 43)) | (1 << (chatParser.OpAtCopyright - 43)))) !== 0) || ((((_la - 92)) & ~0x1F) === 0 && ((1 << (_la - 92)) & ((1 << (chatParser.OpAmpAudio - 92)) | (1 << (chatParser.OpAmpImage - 92)) | (1 << (chatParser.OpAmpImageZoom - 92)) | (1 << (chatParser.OpAmpImageWAudio - 92)) | (1 << (chatParser.OpAmpVideo - 92)) | (1 << (chatParser.OpAmpArticle - 92)) | (1 << (chatParser.OpAmpDocument - 92)) | (1 << (chatParser.OpAmpApp - 92)) | (1 << (chatParser.OpAmpWebsite - 92)) | (1 << (chatParser.OpAmpStillImageFilm - 92)) | (1 << (chatParser.OpAmpAudioLink - 92)) | (1 << (chatParser.OpAmpImageLink - 92)) | (1 << (chatParser.OpAmpVideoLink - 92)) | (1 << (chatParser.OpAmpArticleLink - 92)) | (1 << (chatParser.OpAmpDocumentLink - 92)) | (1 << (chatParser.OpAmpAppLink - 92)) | (1 << (chatParser.OpAmpWebsiteLink - 92)) | (1 << (chatParser.OpAmpStillImageFilmLink - 92)))) !== 0) || ((((_la - 126)) & ~0x1F) === 0 && ((1 << (_la - 126)) & ((1 << (chatParser.OpAmpVideoEmbed - 126)) | (1 << (chatParser.OpAmpAudioEmbed - 126)) | (1 << (chatParser.OpAmpDocumentEmbed - 126)) | (1 << (chatParser.OpAmpStillImageFilmEmbed - 126)) | (1 << (chatParser.URL - 126)) | (1 << (chatParser.LIST_LINE - 126)))) !== 0)) {
				{
				{
				this.state = 267;
				this.bitElem();
				this.state = 271;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === chatParser.NL) {
					{
					{
					this.state = 268;
					this.match(chatParser.NL);
					}
					}
					this.state = 273;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
				}
				this.state = 278;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 279;
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
			this.state = 280;
			this.initiator();
			this.state = 281;
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
			this.state = 282;
			this.partner();
			this.state = 291;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 283;
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
					this.state = 284;
					this.chat_initiator();
					this.state = 288;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === chatParser.SSPL || _la === chatParser.SSPL2) {
						{
						{
						this.state = 285;
						this.sspl_chat_partner();
						}
						}
						this.state = 290;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 293;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 18, this._ctx);
			} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
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
			this.state = 299;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 19, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 296;
					this.match(chatParser.NL);
					}
					}
				}
				this.state = 301;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 19, this._ctx);
			}
			this.state = 315;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 22, this._ctx) ) {
			case 1:
				{
				this.state = 302;
				this.resource();
				this.state = 312;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 21, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 306;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						while (_la === chatParser.NL) {
							{
							{
							this.state = 303;
							this.match(chatParser.NL);
							}
							}
							this.state = 308;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
						}
						this.state = 309;
						this.resource();
						}
						}
					}
					this.state = 314;
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
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 317;
			this.match(chatParser.BitConversationLeft1);
			this.state = 318;
			this.format2();
			this.state = 319;
			this.match(chatParser.CL);
			this.state = 323;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === chatParser.NL) {
				{
				{
				this.state = 320;
				this.match(chatParser.NL);
				}
				}
				this.state = 325;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 335;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 2)) & ~0x1F) === 0 && ((1 << (_la - 2)) & ((1 << (chatParser.S - 2)) | (1 << (chatParser.OPRANGLES - 2)) | (1 << (chatParser.OPRANGLEL - 2)) | (1 << (chatParser.OPDANGLE - 2)) | (1 << (chatParser.OPU - 2)) | (1 << (chatParser.OPB - 2)) | (1 << (chatParser.OPQ - 2)) | (1 << (chatParser.OPA - 2)) | (1 << (chatParser.OPS - 2)) | (1 << (chatParser.OPC - 2)) | (1 << (chatParser.OPHASH - 2)) | (1 << (chatParser.COLON - 2)) | (1 << (chatParser.AMP - 2)) | (1 << (chatParser.DBLCOLON - 2)) | (1 << (chatParser.Greater - 2)) | (1 << (chatParser.Less - 2)) | (1 << (chatParser.RightAngle - 2)) | (1 << (chatParser.RightArrow - 2)) | (1 << (chatParser.DBLEQ - 2)))) !== 0) || ((((_la - 43)) & ~0x1F) === 0 && ((1 << (_la - 43)) & ((1 << (chatParser.ArticleText - 43)) | (1 << (chatParser.NUMERIC - 43)) | (1 << (chatParser.STRING - 43)) | (1 << (chatParser.NOTBITMARK - 43)) | (1 << (chatParser.SENTENCE - 43)) | (1 << (chatParser.BARSTRING - 43)) | (1 << (chatParser.AtReference - 43)) | (1 << (chatParser.AtExampleWithStr - 43)) | (1 << (chatParser.AtExamplecol - 43)) | (1 << (chatParser.AtExamplecl - 43)) | (1 << (chatParser.AtLabeltrue - 43)) | (1 << (chatParser.AtLabelfalse - 43)) | (1 << (chatParser.OpAtCopyright - 43)))) !== 0) || ((((_la - 92)) & ~0x1F) === 0 && ((1 << (_la - 92)) & ((1 << (chatParser.OpAmpAudio - 92)) | (1 << (chatParser.OpAmpImage - 92)) | (1 << (chatParser.OpAmpImageZoom - 92)) | (1 << (chatParser.OpAmpImageWAudio - 92)) | (1 << (chatParser.OpAmpVideo - 92)) | (1 << (chatParser.OpAmpArticle - 92)) | (1 << (chatParser.OpAmpDocument - 92)) | (1 << (chatParser.OpAmpApp - 92)) | (1 << (chatParser.OpAmpWebsite - 92)) | (1 << (chatParser.OpAmpStillImageFilm - 92)) | (1 << (chatParser.OpAmpAudioLink - 92)) | (1 << (chatParser.OpAmpImageLink - 92)) | (1 << (chatParser.OpAmpVideoLink - 92)) | (1 << (chatParser.OpAmpArticleLink - 92)) | (1 << (chatParser.OpAmpDocumentLink - 92)) | (1 << (chatParser.OpAmpAppLink - 92)) | (1 << (chatParser.OpAmpWebsiteLink - 92)) | (1 << (chatParser.OpAmpStillImageFilmLink - 92)))) !== 0) || ((((_la - 126)) & ~0x1F) === 0 && ((1 << (_la - 126)) & ((1 << (chatParser.OpAmpVideoEmbed - 126)) | (1 << (chatParser.OpAmpAudioEmbed - 126)) | (1 << (chatParser.OpAmpDocumentEmbed - 126)) | (1 << (chatParser.OpAmpStillImageFilmEmbed - 126)) | (1 << (chatParser.URL - 126)) | (1 << (chatParser.LIST_LINE - 126)))) !== 0)) {
				{
				{
				this.state = 326;
				this.bitElem();
				this.state = 330;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === chatParser.NL) {
					{
					{
					this.state = 327;
					this.match(chatParser.NL);
					}
					}
					this.state = 332;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
				}
				this.state = 337;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 338;
			this.partner1();
			this.state = 342;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === chatParser.NL) {
				{
				{
				this.state = 339;
				this.match(chatParser.NL);
				}
				}
				this.state = 344;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 345;
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
	public conversation_right_1(): Conversation_right_1Context {
		let _localctx: Conversation_right_1Context = new Conversation_right_1Context(this._ctx, this.state);
		this.enterRule(_localctx, 10, chatParser.RULE_conversation_right_1);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 347;
			this.match(chatParser.BitConversationRight1);
			this.state = 348;
			this.format2();
			this.state = 349;
			this.match(chatParser.CL);
			this.state = 353;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === chatParser.NL) {
				{
				{
				this.state = 350;
				this.match(chatParser.NL);
				}
				}
				this.state = 355;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 365;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 2)) & ~0x1F) === 0 && ((1 << (_la - 2)) & ((1 << (chatParser.S - 2)) | (1 << (chatParser.OPRANGLES - 2)) | (1 << (chatParser.OPRANGLEL - 2)) | (1 << (chatParser.OPDANGLE - 2)) | (1 << (chatParser.OPU - 2)) | (1 << (chatParser.OPB - 2)) | (1 << (chatParser.OPQ - 2)) | (1 << (chatParser.OPA - 2)) | (1 << (chatParser.OPS - 2)) | (1 << (chatParser.OPC - 2)) | (1 << (chatParser.OPHASH - 2)) | (1 << (chatParser.COLON - 2)) | (1 << (chatParser.AMP - 2)) | (1 << (chatParser.DBLCOLON - 2)) | (1 << (chatParser.Greater - 2)) | (1 << (chatParser.Less - 2)) | (1 << (chatParser.RightAngle - 2)) | (1 << (chatParser.RightArrow - 2)) | (1 << (chatParser.DBLEQ - 2)))) !== 0) || ((((_la - 43)) & ~0x1F) === 0 && ((1 << (_la - 43)) & ((1 << (chatParser.ArticleText - 43)) | (1 << (chatParser.NUMERIC - 43)) | (1 << (chatParser.STRING - 43)) | (1 << (chatParser.NOTBITMARK - 43)) | (1 << (chatParser.SENTENCE - 43)) | (1 << (chatParser.BARSTRING - 43)) | (1 << (chatParser.AtReference - 43)) | (1 << (chatParser.AtExampleWithStr - 43)) | (1 << (chatParser.AtExamplecol - 43)) | (1 << (chatParser.AtExamplecl - 43)) | (1 << (chatParser.AtLabeltrue - 43)) | (1 << (chatParser.AtLabelfalse - 43)) | (1 << (chatParser.OpAtCopyright - 43)))) !== 0) || ((((_la - 92)) & ~0x1F) === 0 && ((1 << (_la - 92)) & ((1 << (chatParser.OpAmpAudio - 92)) | (1 << (chatParser.OpAmpImage - 92)) | (1 << (chatParser.OpAmpImageZoom - 92)) | (1 << (chatParser.OpAmpImageWAudio - 92)) | (1 << (chatParser.OpAmpVideo - 92)) | (1 << (chatParser.OpAmpArticle - 92)) | (1 << (chatParser.OpAmpDocument - 92)) | (1 << (chatParser.OpAmpApp - 92)) | (1 << (chatParser.OpAmpWebsite - 92)) | (1 << (chatParser.OpAmpStillImageFilm - 92)) | (1 << (chatParser.OpAmpAudioLink - 92)) | (1 << (chatParser.OpAmpImageLink - 92)) | (1 << (chatParser.OpAmpVideoLink - 92)) | (1 << (chatParser.OpAmpArticleLink - 92)) | (1 << (chatParser.OpAmpDocumentLink - 92)) | (1 << (chatParser.OpAmpAppLink - 92)) | (1 << (chatParser.OpAmpWebsiteLink - 92)) | (1 << (chatParser.OpAmpStillImageFilmLink - 92)))) !== 0) || ((((_la - 126)) & ~0x1F) === 0 && ((1 << (_la - 126)) & ((1 << (chatParser.OpAmpVideoEmbed - 126)) | (1 << (chatParser.OpAmpAudioEmbed - 126)) | (1 << (chatParser.OpAmpDocumentEmbed - 126)) | (1 << (chatParser.OpAmpStillImageFilmEmbed - 126)) | (1 << (chatParser.URL - 126)) | (1 << (chatParser.LIST_LINE - 126)))) !== 0)) {
				{
				{
				this.state = 356;
				this.bitElem();
				this.state = 360;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === chatParser.NL) {
					{
					{
					this.state = 357;
					this.match(chatParser.NL);
					}
					}
					this.state = 362;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
				}
				this.state = 367;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 368;
			this.partner1();
			this.state = 372;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === chatParser.NL) {
				{
				{
				this.state = 369;
				this.match(chatParser.NL);
				}
				}
				this.state = 374;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 375;
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
	public initiator(): InitiatorContext {
		let _localctx: InitiatorContext = new InitiatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, chatParser.RULE_initiator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 377;
			this.name_text();
			this.state = 385;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === chatParser.NL || ((((_la - 93)) & ~0x1F) === 0 && ((1 << (_la - 93)) & ((1 << (chatParser.OpAmpImage - 93)) | (1 << (chatParser.OpAmpImageZoom - 93)) | (1 << (chatParser.OpAmpImageWAudio - 93)) | (1 << (chatParser.OpAmpImageLink - 93)))) !== 0)) {
				{
				this.state = 381;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === chatParser.NL) {
					{
					{
					this.state = 378;
					this.match(chatParser.NL);
					}
					}
					this.state = 383;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 384;
				this.imagebit();
				}
			}

			this.state = 388;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === chatParser.OPATALT) {
				{
				this.state = 387;
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
		this.enterRule(_localctx, 14, chatParser.RULE_partner);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 390;
			this.name_text();
			this.state = 398;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === chatParser.NL || ((((_la - 93)) & ~0x1F) === 0 && ((1 << (_la - 93)) & ((1 << (chatParser.OpAmpImage - 93)) | (1 << (chatParser.OpAmpImageZoom - 93)) | (1 << (chatParser.OpAmpImageWAudio - 93)) | (1 << (chatParser.OpAmpImageLink - 93)))) !== 0)) {
				{
				this.state = 394;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === chatParser.NL) {
					{
					{
					this.state = 391;
					this.match(chatParser.NL);
					}
					}
					this.state = 396;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 397;
				this.imagebit();
				}
			}

			this.state = 401;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === chatParser.OPATALT) {
				{
				this.state = 400;
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
		this.enterRule(_localctx, 16, chatParser.RULE_partner1);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 403;
			this.partner1_name();
			this.state = 411;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 38, this._ctx) ) {
			case 1:
				{
				this.state = 407;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === chatParser.NL) {
					{
					{
					this.state = 404;
					this.match(chatParser.NL);
					}
					}
					this.state = 409;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 410;
				this.imagebit();
				}
				break;
			}
			this.state = 414;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === chatParser.OPATALT) {
				{
				this.state = 413;
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
		this.enterRule(_localctx, 18, chatParser.RULE_partner1_name);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 416;
			this.match(chatParser.AtPartner);
			this.state = 417;
			this.match(chatParser.STRING);
			this.state = 418;
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
		this.enterRule(_localctx, 20, chatParser.RULE_name_text);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 420;
			this.match(chatParser.OPHASH);
			this.state = 421;
			this.s_and_w();
			this.state = 422;
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
		this.enterRule(_localctx, 22, chatParser.RULE_name_alt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 424;
			this.match(chatParser.OPATALT);
			this.state = 425;
			this.match(chatParser.STRING);
			this.state = 426;
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
		this.enterRule(_localctx, 24, chatParser.RULE_chat_initiator);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 428;
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
		this.enterRule(_localctx, 26, chatParser.RULE_chat_partner);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 430;
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
		this.enterRule(_localctx, 28, chatParser.RULE_sspl_chat_partner);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 432;
			this.sspl();
			this.state = 433;
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
		this.enterRule(_localctx, 30, chatParser.RULE_bitElem);
		try {
			this.state = 458;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 40, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 435;
				this.match(chatParser.LIST_LINE);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 436;
				this.match(chatParser.NOTBITMARK);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 437;
				this.gap();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 438;
				this.atdef();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 439;
				this.reference();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 440;
				this.item();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 441;
				this.title();
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 442;
				this.instruction();
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 443;
				this.hint();
				}
				break;

			case 10:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 444;
				this.s_and_w();
				}
				break;

			case 11:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 445;
				this.example();
				}
				break;

			case 12:
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 446;
				this.bool_label();
				}
				break;

			case 13:
				this.enterOuterAlt(_localctx, 13);
				{
				this.state = 447;
				this.imagebit();
				}
				break;

			case 14:
				this.enterOuterAlt(_localctx, 14);
				{
				this.state = 448;
				this.audiobit();
				}
				break;

			case 15:
				this.enterOuterAlt(_localctx, 15);
				{
				this.state = 449;
				this.videobit();
				}
				break;

			case 16:
				this.enterOuterAlt(_localctx, 16);
				{
				this.state = 450;
				this.articlebit();
				}
				break;

			case 17:
				this.enterOuterAlt(_localctx, 17);
				{
				this.state = 451;
				this.documentbit();
				}
				break;

			case 18:
				this.enterOuterAlt(_localctx, 18);
				{
				this.state = 452;
				this.appbit();
				}
				break;

			case 19:
				this.enterOuterAlt(_localctx, 19);
				{
				this.state = 453;
				this.websitebit();
				}
				break;

			case 20:
				this.enterOuterAlt(_localctx, 20);
				{
				this.state = 454;
				this.stillimagefilmbit();
				}
				break;

			case 21:
				this.enterOuterAlt(_localctx, 21);
				{
				this.state = 455;
				this.angleref();
				}
				break;

			case 22:
				this.enterOuterAlt(_localctx, 22);
				{
				this.state = 456;
				this.anchor();
				}
				break;

			case 23:
				this.enterOuterAlt(_localctx, 23);
				{
				this.state = 457;
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
		this.enterRule(_localctx, 32, chatParser.RULE_resource);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 460;
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
		this.enterRule(_localctx, 34, chatParser.RULE_gap);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 462;
			this.single_gap();
			this.state = 470;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 42, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					this.state = 468;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case chatParser.OPU:
						{
						this.state = 463;
						this.single_gap();
						}
						break;
					case chatParser.OPB:
						{
						this.state = 464;
						this.instruction();
						}
						break;
					case chatParser.OPQ:
						{
						this.state = 465;
						this.hint();
						}
						break;
					case chatParser.OPC:
						{
						this.state = 466;
						this.item();
						}
						break;
					case chatParser.AtExampleWithStr:
					case chatParser.AtExamplecol:
					case chatParser.AtExamplecl:
						{
						this.state = 467;
						this.example();
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					}
				}
				this.state = 472;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 42, this._ctx);
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
		this.enterRule(_localctx, 36, chatParser.RULE_single_gap);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 473;
			this.match(chatParser.OPU);
			this.state = 477;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 43, this._ctx) ) {
			case 1:
				{
				this.state = 474;
				this.match(chatParser.NUMERIC);
				}
				break;

			case 2:
				{
				this.state = 475;
				this.match(chatParser.STRING);
				}
				break;

			case 3:
				// tslint:disable-next-line:no-empty
				{
				}
				break;
			}
			this.state = 482;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << chatParser.S) | (1 << chatParser.OPS) | (1 << chatParser.COLON) | (1 << chatParser.AMP) | (1 << chatParser.DBLCOLON) | (1 << chatParser.Greater) | (1 << chatParser.Less) | (1 << chatParser.RightAngle))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (chatParser.RightArrow - 32)) | (1 << (chatParser.DBLEQ - 32)) | (1 << (chatParser.NUMERIC - 32)) | (1 << (chatParser.STRING - 32)) | (1 << (chatParser.NOTBITMARK - 32)) | (1 << (chatParser.SENTENCE - 32)) | (1 << (chatParser.BARSTRING - 32)))) !== 0) || _la === chatParser.URL) {
				{
				{
				this.state = 479;
				this.s_and_w();
				}
				}
				this.state = 484;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 485;
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
		this.enterRule(_localctx, 38, chatParser.RULE_dcolon);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 487;
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
		this.enterRule(_localctx, 40, chatParser.RULE_atpoint);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 489;
			this.match(chatParser.AtPoints);
			this.state = 490;
			this.match(chatParser.NUMERIC);
			this.state = 491;
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
		this.enterRule(_localctx, 42, chatParser.RULE_format);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 496;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 45, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 493;
					this.resource_format();
					}
					}
				}
				this.state = 498;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 45, this._ctx);
			}
			this.state = 504;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 81)) & ~0x1F) === 0 && ((1 << (_la - 81)) & ((1 << (chatParser.AmpAudio - 81)) | (1 << (chatParser.AmpImage - 81)) | (1 << (chatParser.AmpImageZoom - 81)) | (1 << (chatParser.AmpImageWAudio - 81)) | (1 << (chatParser.AmpVideo - 81)) | (1 << (chatParser.AmpArticle - 81)) | (1 << (chatParser.AmpDocument - 81)) | (1 << (chatParser.AmpApp - 81)) | (1 << (chatParser.AmpWebsite - 81)) | (1 << (chatParser.AmpStillImageFilm - 81)) | (1 << (chatParser.AmpPdf - 81)) | (1 << (chatParser.AmpAudioLink - 81)) | (1 << (chatParser.AmpImageLink - 81)) | (1 << (chatParser.AmpVideoLink - 81)) | (1 << (chatParser.AmpArticleLink - 81)) | (1 << (chatParser.AmpDocumentLink - 81)) | (1 << (chatParser.AmpAppLink - 81)) | (1 << (chatParser.AmpWebsiteLink - 81)) | (1 << (chatParser.AmpStillImageFilmLink - 81)))) !== 0) || ((((_la - 121)) & ~0x1F) === 0 && ((1 << (_la - 121)) & ((1 << (chatParser.AmpVideoEmbed - 121)) | (1 << (chatParser.AmpDocumentEmbed - 121)) | (1 << (chatParser.AmpStillImageFilmEmbed - 121)) | (1 << (chatParser.ColonText - 121)) | (1 << (chatParser.ColonJson - 121)))) !== 0)) {
				{
				this.state = 502;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case chatParser.ColonText:
					{
					this.state = 499;
					this.match(chatParser.ColonText);
					}
					break;
				case chatParser.ColonJson:
					{
					this.state = 500;
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
				case chatParser.AmpAppLink:
				case chatParser.AmpWebsiteLink:
				case chatParser.AmpStillImageFilmLink:
				case chatParser.AmpVideoEmbed:
				case chatParser.AmpDocumentEmbed:
				case chatParser.AmpStillImageFilmEmbed:
					{
					this.state = 501;
					this.resource_format_extra();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				this.state = 506;
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
		this.enterRule(_localctx, 44, chatParser.RULE_resource_format);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 507;
			_la = this._input.LA(1);
			if (!(((((_la - 86)) & ~0x1F) === 0 && ((1 << (_la - 86)) & ((1 << (chatParser.AmpArticle - 86)) | (1 << (chatParser.AmpDocument - 86)) | (1 << (chatParser.AmpWebsite - 86)) | (1 << (chatParser.AmpStillImageFilm - 86)) | (1 << (chatParser.AmpAudioLink - 86)) | (1 << (chatParser.AmpImageLink - 86)) | (1 << (chatParser.AmpVideoLink - 86)) | (1 << (chatParser.AmpArticleLink - 86)) | (1 << (chatParser.AmpDocumentLink - 86)) | (1 << (chatParser.AmpAppLink - 86)) | (1 << (chatParser.AmpWebsiteLink - 86)) | (1 << (chatParser.AmpStillImageFilmLink - 86)))) !== 0) || ((((_la - 121)) & ~0x1F) === 0 && ((1 << (_la - 121)) & ((1 << (chatParser.AmpVideoEmbed - 121)) | (1 << (chatParser.AmpAudioEmbed - 121)) | (1 << (chatParser.AmpDocumentEmbed - 121)) | (1 << (chatParser.AmpStillImageFilmEmbed - 121)) | (1 << (chatParser.BitmarkMinus - 121)) | (1 << (chatParser.BitmarkPlus - 121)) | (1 << (chatParser.ColonJson - 121)) | (1 << (chatParser.Prosemirror - 121)) | (1 << (chatParser.Placeholder - 121)))) !== 0))) {
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
		this.enterRule(_localctx, 46, chatParser.RULE_resource_format_extra);
		try {
			this.state = 518;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case chatParser.AmpImage:
			case chatParser.AmpImageZoom:
			case chatParser.AmpImageWAudio:
			case chatParser.AmpImageLink:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 509;
				this.image_format();
				}
				break;
			case chatParser.AmpAudio:
			case chatParser.AmpAudioLink:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 510;
				this.audio_format();
				}
				break;
			case chatParser.AmpVideo:
			case chatParser.AmpVideoLink:
			case chatParser.AmpVideoEmbed:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 511;
				this.video_format();
				}
				break;
			case chatParser.AmpArticle:
			case chatParser.AmpArticleLink:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 512;
				this.article_format();
				}
				break;
			case chatParser.AmpDocument:
			case chatParser.AmpDocumentLink:
			case chatParser.AmpDocumentEmbed:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 513;
				this.document_format();
				}
				break;
			case chatParser.AmpApp:
			case chatParser.AmpAppLink:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 514;
				this.app_format();
				}
				break;
			case chatParser.AmpWebsite:
			case chatParser.AmpWebsiteLink:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 515;
				this.website_format();
				}
				break;
			case chatParser.AmpStillImageFilm:
			case chatParser.AmpStillImageFilmLink:
			case chatParser.AmpStillImageFilmEmbed:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 516;
				this.stillimagefilm_format();
				}
				break;
			case chatParser.AmpPdf:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 517;
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
		this.enterRule(_localctx, 48, chatParser.RULE_format2);
		try {
			this.state = 525;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case chatParser.BitmarkMinus:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 520;
				this.match(chatParser.BitmarkMinus);
				}
				break;
			case chatParser.BitmarkPlus:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 521;
				this.match(chatParser.BitmarkPlus);
				}
				break;
			case chatParser.ColonText:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 522;
				this.match(chatParser.ColonText);
				}
				break;
			case chatParser.ColonJson:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 523;
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
		this.enterRule(_localctx, 50, chatParser.RULE_image_format);
		let _la: number;
		try {
			this.state = 541;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case chatParser.AmpImage:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 527;
				this.match(chatParser.AmpImage);
				this.state = 530;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case chatParser.Image_type:
					{
					{
					this.state = 528;
					this.match(chatParser.Image_type);
					}
					}
					break;
				case chatParser.DotArticleAtt:
					{
					{
					this.state = 529;
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
				this.state = 532;
				this.match(chatParser.AmpImageLink);
				this.state = 534;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === chatParser.Image_type) {
					{
					this.state = 533;
					this.match(chatParser.Image_type);
					}
				}

				}
				break;
			case chatParser.AmpImageZoom:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 536;
				this.match(chatParser.AmpImageZoom);
				this.state = 538;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === chatParser.Image_type) {
					{
					this.state = 537;
					this.match(chatParser.Image_type);
					}
				}

				}
				break;
			case chatParser.AmpImageWAudio:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 540;
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
		this.enterRule(_localctx, 52, chatParser.RULE_video_format);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 543;
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
			this.state = 546;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === chatParser.COLON) {
				{
				this.state = 544;
				this.match(chatParser.COLON);
				this.state = 545;
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
		this.enterRule(_localctx, 54, chatParser.RULE_article_format);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 548;
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
		this.enterRule(_localctx, 56, chatParser.RULE_document_format);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 550;
			_la = this._input.LA(1);
			if (!(_la === chatParser.AmpDocument || _la === chatParser.AmpDocumentLink || _la === chatParser.AmpDocumentEmbed)) {
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
		this.enterRule(_localctx, 58, chatParser.RULE_app_format);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 552;
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
		this.enterRule(_localctx, 60, chatParser.RULE_website_format);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 554;
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
		this.enterRule(_localctx, 62, chatParser.RULE_stillimagefilm_format);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 556;
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
		this.enterRule(_localctx, 64, chatParser.RULE_op_article_format);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 558;
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
		this.enterRule(_localctx, 66, chatParser.RULE_op_document_format);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 560;
			_la = this._input.LA(1);
			if (!(((((_la - 99)) & ~0x1F) === 0 && ((1 << (_la - 99)) & ((1 << (chatParser.OpAmpDocument - 99)) | (1 << (chatParser.OpAmpDocumentLink - 99)) | (1 << (chatParser.OpAmpDocumentEmbed - 99)))) !== 0))) {
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
		this.enterRule(_localctx, 68, chatParser.RULE_op_app_format);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 562;
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
		this.enterRule(_localctx, 70, chatParser.RULE_op_website_format);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 564;
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
		this.enterRule(_localctx, 72, chatParser.RULE_op_video_format);
		try {
			this.state = 581;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case chatParser.OpAmpVideo:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 566;
				this.match(chatParser.OpAmpVideo);
				this.state = 569;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 55, this._ctx) ) {
				case 1:
					{
					this.state = 567;
					this.match(chatParser.COLON);
					this.state = 568;
					this.match(chatParser.Video_type);
					}
					break;
				}
				}
				break;
			case chatParser.OpAmpVideoLink:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 571;
				this.match(chatParser.OpAmpVideoLink);
				this.state = 574;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 56, this._ctx) ) {
				case 1:
					{
					this.state = 572;
					this.match(chatParser.COLON);
					this.state = 573;
					this.match(chatParser.Video_type);
					}
					break;
				}
				}
				break;
			case chatParser.OpAmpVideoEmbed:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 576;
				this.match(chatParser.OpAmpVideoEmbed);
				this.state = 579;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 57, this._ctx) ) {
				case 1:
					{
					this.state = 577;
					this.match(chatParser.COLON);
					this.state = 578;
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
		this.enterRule(_localctx, 74, chatParser.RULE_op_stillimagefilm_format);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 583;
			_la = this._input.LA(1);
			if (!(((((_la - 102)) & ~0x1F) === 0 && ((1 << (_la - 102)) & ((1 << (chatParser.OpAmpStillImageFilm - 102)) | (1 << (chatParser.OpAmpStillImageFilmLink - 102)) | (1 << (chatParser.OpAmpStillImageFilmEmbed - 102)))) !== 0))) {
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
		this.enterRule(_localctx, 76, chatParser.RULE_articlebit);
		try {
			this.state = 591;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case chatParser.OpAmpArticle:
			case chatParser.OpAmpArticleLink:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 585;
				this.op_article_format();
				this.state = 586;
				this.match(chatParser.COLON);
				this.state = 587;
				this.url();
				this.state = 588;
				this.match(chatParser.CL);
				}
				break;
			case chatParser.ArticleText:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 590;
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
		this.enterRule(_localctx, 78, chatParser.RULE_documentbit);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 593;
			this.op_document_format();
			this.state = 594;
			this.match(chatParser.COLON);
			this.state = 595;
			this.url();
			this.state = 596;
			this.match(chatParser.CL);
			this.state = 601;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === chatParser.OPATALT) {
				{
				this.state = 597;
				this.match(chatParser.OPATALT);
				this.state = 598;
				this.words();
				this.state = 599;
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
		this.enterRule(_localctx, 80, chatParser.RULE_websitebit);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 603;
			this.op_website_format();
			this.state = 604;
			this.match(chatParser.COLON);
			this.state = 605;
			this.url();
			this.state = 606;
			this.match(chatParser.CL);
			this.state = 611;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === chatParser.OPATALT) {
				{
				this.state = 607;
				this.match(chatParser.OPATALT);
				this.state = 608;
				this.words();
				this.state = 609;
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
		this.enterRule(_localctx, 82, chatParser.RULE_appbit);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 613;
			this.op_app_format();
			this.state = 614;
			this.match(chatParser.COLON);
			this.state = 617;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case chatParser.URL:
				{
				this.state = 615;
				this.url();
				}
				break;
			case chatParser.TEL:
				{
				this.state = 616;
				this.telephone();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 619;
			this.match(chatParser.CL);
			this.state = 624;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === chatParser.OPATALT) {
				{
				this.state = 620;
				this.match(chatParser.OPATALT);
				this.state = 621;
				this.words();
				this.state = 622;
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
		this.enterRule(_localctx, 84, chatParser.RULE_stillimagefilmbit);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 626;
			this.stillimg_one();
			this.state = 630;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 64, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 627;
					this.resource_chained();
					}
					}
				}
				this.state = 632;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 64, this._ctx);
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
		this.enterRule(_localctx, 86, chatParser.RULE_stillimg_one);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 633;
			this.op_stillimagefilm_format();
			this.state = 634;
			this.match(chatParser.COLON);
			this.state = 638;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === chatParser.S) {
				{
				{
				this.state = 635;
				this.match(chatParser.S);
				}
				}
				this.state = 640;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 641;
			this.url();
			this.state = 642;
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
		this.enterRule(_localctx, 88, chatParser.RULE_videobit);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 644;
			this.video_one();
			this.state = 648;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 66, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 645;
					this.resource_chained();
					}
					}
				}
				this.state = 650;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 66, this._ctx);
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
		this.enterRule(_localctx, 90, chatParser.RULE_video_one);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 651;
			this.op_video_format();
			this.state = 652;
			this.match(chatParser.COLON);
			this.state = 653;
			this.url();
			this.state = 654;
			this.match(chatParser.CL);
			this.state = 659;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 67, this._ctx) ) {
			case 1:
				{
				this.state = 655;
				this.match(chatParser.OPATALT);
				this.state = 656;
				this.words();
				this.state = 657;
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
		this.enterRule(_localctx, 92, chatParser.RULE_imagebit);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 661;
			this.image_one();
			this.state = 665;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 68, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 662;
					this.image_chained();
					}
					}
				}
				this.state = 667;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 68, this._ctx);
			}
			this.state = 670;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 69, this._ctx) ) {
			case 1:
				{
				this.state = 668;
				this.match(chatParser.NL);
				this.state = 669;
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
		this.enterRule(_localctx, 94, chatParser.RULE_image_one);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 672;
			this.op_image_format();
			this.state = 673;
			this.match(chatParser.COLON);
			this.state = 677;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === chatParser.S) {
				{
				{
				this.state = 674;
				this.match(chatParser.S);
				}
				}
				this.state = 679;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 680;
			this.url();
			this.state = 681;
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
		this.enterRule(_localctx, 96, chatParser.RULE_op_image_format);
		let _la: number;
		try {
			this.state = 697;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case chatParser.OpAmpImage:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 683;
				this.match(chatParser.OpAmpImage);
				this.state = 686;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case chatParser.Image_type:
					{
					{
					this.state = 684;
					this.match(chatParser.Image_type);
					}
					}
					break;
				case chatParser.DotArticleAtt:
					{
					{
					this.state = 685;
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
				this.state = 688;
				this.match(chatParser.OpAmpImageLink);
				this.state = 690;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === chatParser.Image_type) {
					{
					this.state = 689;
					this.match(chatParser.Image_type);
					}
				}

				}
				break;
			case chatParser.OpAmpImageZoom:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 692;
				this.match(chatParser.OpAmpImageZoom);
				this.state = 694;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === chatParser.Image_type) {
					{
					this.state = 693;
					this.match(chatParser.Image_type);
					}
				}

				}
				break;
			case chatParser.OpAmpImageWAudio:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 696;
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
		this.enterRule(_localctx, 98, chatParser.RULE_image_chained);
		let _la: number;
		try {
			let _alt: number;
			this.state = 716;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case chatParser.AtSrc:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 699;
				this.match(chatParser.AtSrc);
				this.state = 700;
				this.match(chatParser.COLON);
				this.state = 701;
				this.url();
				this.state = 702;
				this.match(chatParser.CL);
				}
				break;
			case chatParser.AtWidth:
			case chatParser.AtHeight:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 704;
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
				this.state = 705;
				this.match(chatParser.COLON);
				this.state = 706;
				this.match(chatParser.NUMERIC);
				this.state = 707;
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
				this.state = 708;
				_la = this._input.LA(1);
				if (!(((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & ((1 << (chatParser.OPATALT - 69)) | (1 << (chatParser.OpAtCaption - 69)) | (1 << (chatParser.OpAtLicense - 69)) | (1 << (chatParser.OpAtCopyright - 69)) | (1 << (chatParser.OpAtSearch - 69)))) !== 0))) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 712;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 75, this._ctx);
				while (_alt !== 1 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1 + 1) {
						{
						{
						this.state = 709;
						this.matchWildcard();
						}
						}
					}
					this.state = 714;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 75, this._ctx);
				}
				this.state = 715;
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
		this.enterRule(_localctx, 100, chatParser.RULE_image_chained4match);
		let _la: number;
		try {
			let _alt: number;
			this.state = 735;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case chatParser.AtSrc:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 718;
				this.match(chatParser.AtSrc);
				this.state = 719;
				this.match(chatParser.COLON);
				this.state = 720;
				this.url();
				this.state = 721;
				this.match(chatParser.CL);
				}
				break;
			case chatParser.AtWidth:
			case chatParser.AtHeight:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 723;
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
				this.state = 724;
				this.match(chatParser.COLON);
				this.state = 725;
				this.match(chatParser.NUMERIC);
				this.state = 726;
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
				this.state = 727;
				_la = this._input.LA(1);
				if (!(((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & ((1 << (chatParser.OPATALT - 69)) | (1 << (chatParser.OpAtCaption - 69)) | (1 << (chatParser.OpAtLicense - 69)) | (1 << (chatParser.OpAtCopyright - 69)) | (1 << (chatParser.OpAtSearch - 69)))) !== 0))) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 731;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 77, this._ctx);
				while (_alt !== 1 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1 + 1) {
						{
						{
						this.state = 728;
						this.matchWildcard();
						}
						}
					}
					this.state = 733;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 77, this._ctx);
				}
				this.state = 734;
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
		this.enterRule(_localctx, 102, chatParser.RULE_audiobit);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 737;
			this.audio_one();
			this.state = 741;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 79, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 738;
					this.resource_chained();
					}
					}
				}
				this.state = 743;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 79, this._ctx);
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
		this.enterRule(_localctx, 104, chatParser.RULE_audio_one);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 744;
			this.op_audio_format();
			this.state = 745;
			this.match(chatParser.COLON);
			this.state = 746;
			this.url();
			this.state = 747;
			this.match(chatParser.CL);
			this.state = 752;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 80, this._ctx) ) {
			case 1:
				{
				this.state = 748;
				this.match(chatParser.OPATALT);
				this.state = 749;
				this.words();
				this.state = 750;
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
		this.enterRule(_localctx, 106, chatParser.RULE_audio_format);
		let _la: number;
		try {
			this.state = 764;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case chatParser.AmpAudio:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 754;
				this.match(chatParser.AmpAudio);
				this.state = 757;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === chatParser.COLON) {
					{
					this.state = 755;
					this.match(chatParser.COLON);
					this.state = 756;
					this.match(chatParser.Audio_type);
					}
				}

				}
				break;
			case chatParser.AmpAudioLink:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 759;
				this.match(chatParser.AmpAudioLink);
				this.state = 762;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === chatParser.COLON) {
					{
					this.state = 760;
					this.match(chatParser.COLON);
					this.state = 761;
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
		this.enterRule(_localctx, 108, chatParser.RULE_op_audio_format);
		try {
			this.state = 781;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case chatParser.OpAmpAudio:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 766;
				this.match(chatParser.OpAmpAudio);
				this.state = 769;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 84, this._ctx) ) {
				case 1:
					{
					this.state = 767;
					this.match(chatParser.COLON);
					this.state = 768;
					this.match(chatParser.Audio_type);
					}
					break;
				}
				}
				break;
			case chatParser.OpAmpAudioLink:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 771;
				this.match(chatParser.OpAmpAudioLink);
				this.state = 774;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 85, this._ctx) ) {
				case 1:
					{
					this.state = 772;
					this.match(chatParser.COLON);
					this.state = 773;
					this.match(chatParser.Audio_type);
					}
					break;
				}
				}
				break;
			case chatParser.OpAmpAudioEmbed:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 776;
				this.match(chatParser.OpAmpAudioEmbed);
				this.state = 779;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 86, this._ctx) ) {
				case 1:
					{
					this.state = 777;
					this.match(chatParser.COLON);
					this.state = 778;
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
		this.enterRule(_localctx, 110, chatParser.RULE_resource_chained);
		let _la: number;
		try {
			let _alt: number;
			this.state = 814;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case chatParser.OPA:
			case chatParser.AtSrc:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 786;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case chatParser.OPA:
					{
					this.state = 783;
					this.match(chatParser.OPA);
					this.state = 784;
					this.s_and_w();
					}
					break;
				case chatParser.AtSrc:
					{
					this.state = 785;
					this.match(chatParser.AtSrc);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 788;
				this.match(chatParser.COLON);
				this.state = 792;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 89, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 789;
						this.match(chatParser.S);
						}
						}
					}
					this.state = 794;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 89, this._ctx);
				}
				this.state = 797;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					this.state = 797;
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
					case chatParser.SENTENCE:
					case chatParser.BARSTRING:
					case chatParser.URL:
						{
						this.state = 795;
						this.s_and_w();
						}
						break;
					case chatParser.NL:
						{
						this.state = 796;
						this.match(chatParser.NL);
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					}
					this.state = 799;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << chatParser.S) | (1 << chatParser.OPS) | (1 << chatParser.COLON) | (1 << chatParser.AMP) | (1 << chatParser.DBLCOLON) | (1 << chatParser.Greater) | (1 << chatParser.Less) | (1 << chatParser.RightAngle))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (chatParser.RightArrow - 32)) | (1 << (chatParser.DBLEQ - 32)) | (1 << (chatParser.NUMERIC - 32)) | (1 << (chatParser.STRING - 32)) | (1 << (chatParser.NL - 32)) | (1 << (chatParser.NOTBITMARK - 32)) | (1 << (chatParser.SENTENCE - 32)) | (1 << (chatParser.BARSTRING - 32)))) !== 0) || _la === chatParser.URL);
				this.state = 801;
				this.match(chatParser.CL);
				}
				break;
			case chatParser.AtWidth:
			case chatParser.AtHeight:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 802;
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
				this.state = 803;
				this.match(chatParser.COLON);
				this.state = 804;
				this.match(chatParser.NUMERIC);
				this.state = 805;
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
				this.state = 806;
				_la = this._input.LA(1);
				if (!(((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & ((1 << (chatParser.OPATALT - 69)) | (1 << (chatParser.OpAtCaption - 69)) | (1 << (chatParser.OpAtLicense - 69)) | (1 << (chatParser.OpAtCopyright - 69)) | (1 << (chatParser.OpAtSearch - 69)))) !== 0))) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 810;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 92, this._ctx);
				while (_alt !== 1 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1 + 1) {
						{
						{
						this.state = 807;
						this.matchWildcard();
						}
						}
					}
					this.state = 812;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 92, this._ctx);
				}
				this.state = 813;
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
		this.enterRule(_localctx, 112, chatParser.RULE_telephone);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 816;
			this.match(chatParser.TEL);
			this.state = 817;
			this.match(chatParser.PLUS);
			this.state = 818;
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
		this.enterRule(_localctx, 114, chatParser.RULE_url);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 820;
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
		this.enterRule(_localctx, 116, chatParser.RULE_item);
		let _la: number;
		try {
			this.state = 852;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 100, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 822;
				this.match(chatParser.OPC);
				this.state = 823;
				this.match(chatParser.CL);
				this.state = 831;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 95, this._ctx) ) {
				case 1:
					{
					this.state = 827;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === chatParser.S) {
						{
						{
						this.state = 824;
						this.match(chatParser.S);
						}
						}
						this.state = 829;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					this.state = 830;
					this.lead();
					}
					break;
				}
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 833;
				this.match(chatParser.OPC);
				this.state = 834;
				this.s_and_w();
				this.state = 839;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (((((_la - 24)) & ~0x1F) === 0 && ((1 << (_la - 24)) & ((1 << (chatParser.COLON - 24)) | (1 << (chatParser.AMP - 24)) | (1 << (chatParser.Greater - 24)) | (1 << (chatParser.Less - 24)) | (1 << (chatParser.RightAngle - 24)) | (1 << (chatParser.RightArrow - 24)) | (1 << (chatParser.DBLEQ - 24)) | (1 << (chatParser.NOTBITMARK - 24)) | (1 << (chatParser.SENTENCE - 24)) | (1 << (chatParser.BARSTRING - 24)))) !== 0)) {
					{
					this.state = 837;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case chatParser.COLON:
						{
						this.state = 835;
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
					case chatParser.SENTENCE:
					case chatParser.BARSTRING:
						{
						this.state = 836;
						this.words();
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					}
					this.state = 841;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 842;
				this.match(chatParser.CL);
				this.state = 850;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 99, this._ctx) ) {
				case 1:
					{
					this.state = 846;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === chatParser.S) {
						{
						{
						this.state = 843;
						this.match(chatParser.S);
						}
						}
						this.state = 848;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					this.state = 849;
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
		this.enterRule(_localctx, 118, chatParser.RULE_lead);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 854;
			this.match(chatParser.OPC);
			this.state = 855;
			this.s_and_w();
			this.state = 860;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 24)) & ~0x1F) === 0 && ((1 << (_la - 24)) & ((1 << (chatParser.COLON - 24)) | (1 << (chatParser.AMP - 24)) | (1 << (chatParser.Greater - 24)) | (1 << (chatParser.Less - 24)) | (1 << (chatParser.RightAngle - 24)) | (1 << (chatParser.RightArrow - 24)) | (1 << (chatParser.DBLEQ - 24)) | (1 << (chatParser.NOTBITMARK - 24)) | (1 << (chatParser.SENTENCE - 24)) | (1 << (chatParser.BARSTRING - 24)))) !== 0)) {
				{
				this.state = 858;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case chatParser.COLON:
					{
					this.state = 856;
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
				case chatParser.SENTENCE:
				case chatParser.BARSTRING:
					{
					this.state = 857;
					this.words();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				this.state = 862;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 863;
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
		this.enterRule(_localctx, 120, chatParser.RULE_angleref);
		let _la: number;
		try {
			this.state = 875;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case chatParser.OPRANGLES:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 865;
				this.match(chatParser.OPRANGLES);
				this.state = 867;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << chatParser.S) | (1 << chatParser.OPS) | (1 << chatParser.COLON) | (1 << chatParser.AMP) | (1 << chatParser.DBLCOLON) | (1 << chatParser.Greater) | (1 << chatParser.Less) | (1 << chatParser.RightAngle))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (chatParser.RightArrow - 32)) | (1 << (chatParser.DBLEQ - 32)) | (1 << (chatParser.NUMERIC - 32)) | (1 << (chatParser.STRING - 32)) | (1 << (chatParser.NOTBITMARK - 32)) | (1 << (chatParser.SENTENCE - 32)) | (1 << (chatParser.BARSTRING - 32)))) !== 0) || _la === chatParser.URL) {
					{
					this.state = 866;
					this.s_and_w();
					}
				}

				this.state = 869;
				this.match(chatParser.CL);
				}
				break;
			case chatParser.OPRANGLEL:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 870;
				this.match(chatParser.OPRANGLEL);
				this.state = 872;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << chatParser.S) | (1 << chatParser.OPS) | (1 << chatParser.COLON) | (1 << chatParser.AMP) | (1 << chatParser.DBLCOLON) | (1 << chatParser.Greater) | (1 << chatParser.Less) | (1 << chatParser.RightAngle))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (chatParser.RightArrow - 32)) | (1 << (chatParser.DBLEQ - 32)) | (1 << (chatParser.NUMERIC - 32)) | (1 << (chatParser.STRING - 32)) | (1 << (chatParser.NOTBITMARK - 32)) | (1 << (chatParser.SENTENCE - 32)) | (1 << (chatParser.BARSTRING - 32)))) !== 0) || _la === chatParser.URL) {
					{
					this.state = 871;
					this.s_and_w();
					}
				}

				this.state = 874;
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
		this.enterRule(_localctx, 122, chatParser.RULE_example);
		let _la: number;
		try {
			this.state = 884;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case chatParser.AtExamplecl:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 877;
				this.match(chatParser.AtExamplecl);
				}
				break;
			case chatParser.AtExampleWithStr:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 878;
				this.match(chatParser.AtExampleWithStr);
				}
				break;
			case chatParser.AtExamplecol:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 879;
				this.match(chatParser.AtExamplecol);
				this.state = 881;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === chatParser.SENTENCE) {
					{
					this.state = 880;
					this.match(chatParser.SENTENCE);
					}
				}

				this.state = 883;
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
		this.enterRule(_localctx, 124, chatParser.RULE_bracketed_text);
		let _la: number;
		try {
			let _alt: number;
			this.state = 925;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 115, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 886;
				this.match(chatParser.BracEnclose);
				this.state = 888;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 108, this._ctx) ) {
				case 1:
					{
					this.state = 887;
					this.s_and_w();
					}
					break;
				}
				this.state = 911;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << chatParser.S) | (1 << chatParser.OPS) | (1 << chatParser.COLON) | (1 << chatParser.AMP) | (1 << chatParser.DBLCOLON) | (1 << chatParser.Greater) | (1 << chatParser.Less) | (1 << chatParser.RightAngle))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (chatParser.RightArrow - 32)) | (1 << (chatParser.DBLEQ - 32)) | (1 << (chatParser.NUMERIC - 32)) | (1 << (chatParser.STRING - 32)) | (1 << (chatParser.NOTBITMARK - 32)) | (1 << (chatParser.SENTENCE - 32)) | (1 << (chatParser.BARSTRING - 32)))) !== 0) || _la === chatParser.URL) {
					{
					{
					this.state = 890;
					this.s_and_w();
					this.state = 900;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 110, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 891;
							this.match(chatParser.NL);
							this.state = 895;
							this._errHandler.sync(this);
							_alt = this.interpreter.adaptivePredict(this._input, 109, this._ctx);
							while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
								if (_alt === 1) {
									{
									{
									this.state = 892;
									this.match(chatParser.S);
									}
									}
								}
								this.state = 897;
								this._errHandler.sync(this);
								_alt = this.interpreter.adaptivePredict(this._input, 109, this._ctx);
							}
							}
							}
						}
						this.state = 902;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 110, this._ctx);
					}
					this.state = 906;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === chatParser.NL) {
						{
						{
						this.state = 903;
						this.match(chatParser.NL);
						}
						}
						this.state = 908;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
					}
					this.state = 913;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 914;
				this.match(chatParser.CL);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 915;
				this.match(chatParser.BracEnclose);
				this.state = 921;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << chatParser.S) | (1 << chatParser.OPS) | (1 << chatParser.COLON) | (1 << chatParser.AMP) | (1 << chatParser.DBLCOLON) | (1 << chatParser.Greater) | (1 << chatParser.Less) | (1 << chatParser.RightAngle))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (chatParser.RightArrow - 32)) | (1 << (chatParser.DBLEQ - 32)) | (1 << (chatParser.NUMERIC - 32)) | (1 << (chatParser.STRING - 32)) | (1 << (chatParser.NL - 32)) | (1 << (chatParser.NOTBITMARK - 32)) | (1 << (chatParser.SENTENCE - 32)) | (1 << (chatParser.BARSTRING - 32)))) !== 0) || _la === chatParser.URL) {
					{
					this.state = 919;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 113, this._ctx) ) {
					case 1:
						{
						this.state = 916;
						this.s_and_w();
						}
						break;

					case 2:
						{
						this.state = 917;
						this.match(chatParser.NL);
						}
						break;

					case 3:
						{
						this.state = 918;
						this.match(chatParser.S);
						}
						break;
					}
					}
					this.state = 923;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 924;
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
		this.enterRule(_localctx, 126, chatParser.RULE_reference);
		let _la: number;
		try {
			this.state = 949;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 120, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 927;
				this.match(chatParser.AtReference);
				this.state = 932;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					this.state = 932;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 116, this._ctx) ) {
					case 1:
						{
						this.state = 928;
						this.s_and_w();
						}
						break;

					case 2:
						{
						this.state = 929;
						this.match(chatParser.COLON);
						}
						break;

					case 3:
						{
						this.state = 930;
						this.match(chatParser.URL);
						}
						break;

					case 4:
						{
						this.state = 931;
						this.match(chatParser.NL);
						}
						break;
					}
					}
					this.state = 934;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << chatParser.S) | (1 << chatParser.OPS) | (1 << chatParser.COLON) | (1 << chatParser.AMP) | (1 << chatParser.DBLCOLON) | (1 << chatParser.Greater) | (1 << chatParser.Less) | (1 << chatParser.RightAngle))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (chatParser.RightArrow - 32)) | (1 << (chatParser.DBLEQ - 32)) | (1 << (chatParser.NUMERIC - 32)) | (1 << (chatParser.STRING - 32)) | (1 << (chatParser.NL - 32)) | (1 << (chatParser.NOTBITMARK - 32)) | (1 << (chatParser.SENTENCE - 32)) | (1 << (chatParser.BARSTRING - 32)))) !== 0) || _la === chatParser.URL);
				this.state = 936;
				this.match(chatParser.CL);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 937;
				this.match(chatParser.AtReference);
				this.state = 945;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << chatParser.S) | (1 << chatParser.OPS) | (1 << chatParser.COLON) | (1 << chatParser.AMP) | (1 << chatParser.DBLCOLON) | (1 << chatParser.Greater) | (1 << chatParser.Less) | (1 << chatParser.RightAngle))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (chatParser.RightArrow - 32)) | (1 << (chatParser.DBLEQ - 32)) | (1 << (chatParser.NUMERIC - 32)) | (1 << (chatParser.STRING - 32)) | (1 << (chatParser.NL - 32)) | (1 << (chatParser.NOTBITMARK - 32)) | (1 << (chatParser.SENTENCE - 32)) | (1 << (chatParser.BARSTRING - 32)))) !== 0) || _la === chatParser.URL) {
					{
					this.state = 943;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 118, this._ctx) ) {
					case 1:
						{
						this.state = 938;
						this.s_and_w();
						}
						break;

					case 2:
						{
						this.state = 939;
						this.match(chatParser.COLON);
						}
						break;

					case 3:
						{
						this.state = 940;
						this.match(chatParser.URL);
						}
						break;

					case 4:
						{
						this.state = 941;
						this.match(chatParser.NL);
						}
						break;

					case 5:
						{
						this.state = 942;
						this.match(chatParser.S);
						}
						break;
					}
					}
					this.state = 947;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 948;
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
		this.enterRule(_localctx, 128, chatParser.RULE_progress);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 951;
			this.match(chatParser.AtProgress);
			this.state = 952;
			this.s_and_w();
			this.state = 953;
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
		this.enterRule(_localctx, 130, chatParser.RULE_dateprop);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 955;
			this.match(chatParser.AtDate);
			this.state = 959;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				this.state = 959;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 121, this._ctx) ) {
				case 1:
					{
					this.state = 956;
					this.s_and_w();
					}
					break;

				case 2:
					{
					this.state = 957;
					this.match(chatParser.COLON);
					}
					break;

				case 3:
					{
					this.state = 958;
					this.match(chatParser.NL);
					}
					break;
				}
				}
				this.state = 961;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << chatParser.S) | (1 << chatParser.OPS) | (1 << chatParser.COLON) | (1 << chatParser.AMP) | (1 << chatParser.DBLCOLON) | (1 << chatParser.Greater) | (1 << chatParser.Less) | (1 << chatParser.RightAngle))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (chatParser.RightArrow - 32)) | (1 << (chatParser.DBLEQ - 32)) | (1 << (chatParser.NUMERIC - 32)) | (1 << (chatParser.STRING - 32)) | (1 << (chatParser.NL - 32)) | (1 << (chatParser.NOTBITMARK - 32)) | (1 << (chatParser.SENTENCE - 32)) | (1 << (chatParser.BARSTRING - 32)))) !== 0) || _la === chatParser.URL);
			this.state = 963;
			this.match(chatParser.CL);
			this.state = 965;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === chatParser.AtDate) {
				{
				this.state = 964;
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
		this.enterRule(_localctx, 132, chatParser.RULE_dateprop_chained);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 967;
			this.match(chatParser.AtDate);
			this.state = 971;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				this.state = 971;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 124, this._ctx) ) {
				case 1:
					{
					this.state = 968;
					this.s_and_w();
					}
					break;

				case 2:
					{
					this.state = 969;
					this.match(chatParser.COLON);
					}
					break;

				case 3:
					{
					this.state = 970;
					this.match(chatParser.NL);
					}
					break;
				}
				}
				this.state = 973;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << chatParser.S) | (1 << chatParser.OPS) | (1 << chatParser.COLON) | (1 << chatParser.AMP) | (1 << chatParser.DBLCOLON) | (1 << chatParser.Greater) | (1 << chatParser.Less) | (1 << chatParser.RightAngle))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (chatParser.RightArrow - 32)) | (1 << (chatParser.DBLEQ - 32)) | (1 << (chatParser.NUMERIC - 32)) | (1 << (chatParser.STRING - 32)) | (1 << (chatParser.NL - 32)) | (1 << (chatParser.NOTBITMARK - 32)) | (1 << (chatParser.SENTENCE - 32)) | (1 << (chatParser.BARSTRING - 32)))) !== 0) || _la === chatParser.URL);
			this.state = 975;
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
		this.enterRule(_localctx, 134, chatParser.RULE_instruction);
		let _la: number;
		try {
			let _alt: number;
			this.state = 1023;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 134, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 977;
				this.match(chatParser.OPB);
				this.state = 981;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === chatParser.NL) {
					{
					{
					this.state = 978;
					this.match(chatParser.NL);
					}
					}
					this.state = 983;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 985;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 127, this._ctx) ) {
				case 1:
					{
					this.state = 984;
					this.s_and_w();
					}
					break;
				}
				this.state = 1008;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << chatParser.S) | (1 << chatParser.OPS) | (1 << chatParser.COLON) | (1 << chatParser.AMP) | (1 << chatParser.DBLCOLON) | (1 << chatParser.Greater) | (1 << chatParser.Less) | (1 << chatParser.RightAngle))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (chatParser.RightArrow - 32)) | (1 << (chatParser.DBLEQ - 32)) | (1 << (chatParser.NUMERIC - 32)) | (1 << (chatParser.STRING - 32)) | (1 << (chatParser.NOTBITMARK - 32)) | (1 << (chatParser.SENTENCE - 32)) | (1 << (chatParser.BARSTRING - 32)))) !== 0) || _la === chatParser.URL) {
					{
					{
					this.state = 987;
					this.s_and_w();
					this.state = 997;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 129, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 988;
							this.match(chatParser.NL);
							this.state = 992;
							this._errHandler.sync(this);
							_alt = this.interpreter.adaptivePredict(this._input, 128, this._ctx);
							while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
								if (_alt === 1) {
									{
									{
									this.state = 989;
									this.match(chatParser.S);
									}
									}
								}
								this.state = 994;
								this._errHandler.sync(this);
								_alt = this.interpreter.adaptivePredict(this._input, 128, this._ctx);
							}
							}
							}
						}
						this.state = 999;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 129, this._ctx);
					}
					this.state = 1003;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === chatParser.NL) {
						{
						{
						this.state = 1000;
						this.match(chatParser.NL);
						}
						}
						this.state = 1005;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
					}
					this.state = 1010;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1011;
				this.match(chatParser.CL);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1012;
				this.match(chatParser.OPB);
				this.state = 1016;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === chatParser.NL) {
					{
					{
					this.state = 1013;
					this.match(chatParser.NL);
					}
					}
					this.state = 1018;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1020;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << chatParser.S) | (1 << chatParser.OPS) | (1 << chatParser.COLON) | (1 << chatParser.AMP) | (1 << chatParser.DBLCOLON) | (1 << chatParser.Greater) | (1 << chatParser.Less) | (1 << chatParser.RightAngle))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (chatParser.RightArrow - 32)) | (1 << (chatParser.DBLEQ - 32)) | (1 << (chatParser.NUMERIC - 32)) | (1 << (chatParser.STRING - 32)) | (1 << (chatParser.NOTBITMARK - 32)) | (1 << (chatParser.SENTENCE - 32)) | (1 << (chatParser.BARSTRING - 32)))) !== 0) || _la === chatParser.URL) {
					{
					this.state = 1019;
					this.s_and_w();
					}
				}

				this.state = 1022;
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
		this.enterRule(_localctx, 136, chatParser.RULE_hint);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1025;
			this.match(chatParser.OPQ);
			this.state = 1027;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 1026;
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
				this.state = 1029;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << chatParser.OPDOT) | (1 << chatParser.S) | (1 << chatParser.BitChat) | (1 << chatParser.BitConv) | (1 << chatParser.BitConversationLeft1) | (1 << chatParser.BitConversationRight1) | (1 << chatParser.OPDOLL) | (1 << chatParser.OPBUL) | (1 << chatParser.OPESC) | (1 << chatParser.OPRANGLES) | (1 << chatParser.OPRANGLEL) | (1 << chatParser.OPDANGLE) | (1 << chatParser.OPU) | (1 << chatParser.OPB) | (1 << chatParser.OPQ) | (1 << chatParser.OPA) | (1 << chatParser.OPP) | (1 << chatParser.OPM) | (1 << chatParser.OPS) | (1 << chatParser.OPR) | (1 << chatParser.OPC) | (1 << chatParser.OPHASH) | (1 << chatParser.COLON) | (1 << chatParser.AMP) | (1 << chatParser.DBLCOLON) | (1 << chatParser.PLUS) | (1 << chatParser.DotAt) | (1 << chatParser.Greater) | (1 << chatParser.Less) | (1 << chatParser.RightAngle))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (chatParser.RightArrow - 32)) | (1 << (chatParser.DBLEQ - 32)) | (1 << (chatParser.HSPL - 32)) | (1 << (chatParser.HSPL2 - 32)) | (1 << (chatParser.SSPL - 32)) | (1 << (chatParser.SSPL2 - 32)) | (1 << (chatParser.COMMENT - 32)) | (1 << (chatParser.DCANY - 32)) | (1 << (chatParser.Image_type - 32)) | (1 << (chatParser.Audio_type - 32)) | (1 << (chatParser.Video_type - 32)) | (1 << (chatParser.ArticleText - 32)) | (1 << (chatParser.NOTCL - 32)) | (1 << (chatParser.NUMERIC - 32)) | (1 << (chatParser.STRING - 32)) | (1 << (chatParser.NL - 32)) | (1 << (chatParser.NOTBITMARK - 32)) | (1 << (chatParser.SENTENCE - 32)) | (1 << (chatParser.BARSTRING - 32)) | (1 << (chatParser.OPAT - 32)) | (1 << (chatParser.AtProgress - 32)) | (1 << (chatParser.AtReference - 32)) | (1 << (chatParser.AtWidth - 32)) | (1 << (chatParser.AtHeight - 32)) | (1 << (chatParser.AtProgressPoints - 32)) | (1 << (chatParser.AtShortanswer - 32)) | (1 << (chatParser.AtLonganswer - 32)) | (1 << (chatParser.AtExampleWithStr - 32)) | (1 << (chatParser.AtExamplecol - 32)) | (1 << (chatParser.AtExamplecl - 32)) | (1 << (chatParser.AtPartialAnswerS - 32)) | (1 << (chatParser.AtPartialAnswer - 32)))) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (chatParser.AtLabeltrue - 64)) | (1 << (chatParser.AtLabelfalse - 64)) | (1 << (chatParser.AtPoints - 64)) | (1 << (chatParser.AtSrc - 64)) | (1 << (chatParser.AtPartner - 64)) | (1 << (chatParser.OPATALT - 64)) | (1 << (chatParser.OPAMARK - 64)) | (1 << (chatParser.ShowInIndex - 64)) | (1 << (chatParser.OpAtCaption - 64)) | (1 << (chatParser.OpAtLicense - 64)) | (1 << (chatParser.OpAtCopyright - 64)) | (1 << (chatParser.OpAtSearch - 64)) | (1 << (chatParser.OpAtIsTracked - 64)) | (1 << (chatParser.OpAtIsInfoOnly - 64)) | (1 << (chatParser.AtDate - 64)) | (1 << (chatParser.Http - 64)) | (1 << (chatParser.Https - 64)) | (1 << (chatParser.AmpAudio - 64)) | (1 << (chatParser.AmpImage - 64)) | (1 << (chatParser.AmpImageZoom - 64)) | (1 << (chatParser.AmpImageWAudio - 64)) | (1 << (chatParser.AmpVideo - 64)) | (1 << (chatParser.AmpArticle - 64)) | (1 << (chatParser.AmpDocument - 64)) | (1 << (chatParser.AmpApp - 64)) | (1 << (chatParser.AmpWebsite - 64)) | (1 << (chatParser.AmpStillImageFilm - 64)) | (1 << (chatParser.AmpPdf - 64)) | (1 << (chatParser.OpAmpAudio - 64)) | (1 << (chatParser.OpAmpImage - 64)) | (1 << (chatParser.OpAmpImageZoom - 64)) | (1 << (chatParser.OpAmpImageWAudio - 64)))) !== 0) || ((((_la - 96)) & ~0x1F) === 0 && ((1 << (_la - 96)) & ((1 << (chatParser.OpAmpVideo - 96)) | (1 << (chatParser.OpAmpArticle - 96)) | (1 << (chatParser.OpAmpArticleAtt - 96)) | (1 << (chatParser.OpAmpDocument - 96)) | (1 << (chatParser.OpAmpApp - 96)) | (1 << (chatParser.OpAmpWebsite - 96)) | (1 << (chatParser.OpAmpStillImageFilm - 96)) | (1 << (chatParser.BracEnclose - 96)) | (1 << (chatParser.AmpAudioLink - 96)) | (1 << (chatParser.AmpImageLink - 96)) | (1 << (chatParser.AmpVideoLink - 96)) | (1 << (chatParser.AmpArticleLink - 96)) | (1 << (chatParser.AmpDocumentLink - 96)) | (1 << (chatParser.AmpAppLink - 96)) | (1 << (chatParser.AmpWebsiteLink - 96)) | (1 << (chatParser.AmpStillImageFilmLink - 96)) | (1 << (chatParser.OpAmpAudioLink - 96)) | (1 << (chatParser.OpAmpImageLink - 96)) | (1 << (chatParser.OpAmpVideoLink - 96)) | (1 << (chatParser.OpAmpArticleLink - 96)) | (1 << (chatParser.OpAmpDocumentLink - 96)) | (1 << (chatParser.OpAmpAppLink - 96)) | (1 << (chatParser.OpAmpWebsiteLink - 96)) | (1 << (chatParser.OpAmpStillImageFilmLink - 96)) | (1 << (chatParser.AmpImageEmbed - 96)) | (1 << (chatParser.AmpVideoEmbed - 96)) | (1 << (chatParser.AmpAudioEmbed - 96)) | (1 << (chatParser.AmpDocumentEmbed - 96)) | (1 << (chatParser.AmpStillImageFilmEmbed - 96)) | (1 << (chatParser.OpAmpImageEmbed - 96)) | (1 << (chatParser.OpAmpVideoEmbed - 96)) | (1 << (chatParser.OpAmpAudioEmbed - 96)))) !== 0) || ((((_la - 128)) & ~0x1F) === 0 && ((1 << (_la - 128)) & ((1 << (chatParser.OpAmpDocumentEmbed - 128)) | (1 << (chatParser.OpAmpStillImageFilmEmbed - 128)) | (1 << (chatParser.BitmarkMinus - 128)) | (1 << (chatParser.BitmarkPlus - 128)) | (1 << (chatParser.ColonText - 128)) | (1 << (chatParser.ColonJson - 128)) | (1 << (chatParser.Prosemirror - 128)) | (1 << (chatParser.Placeholder - 128)) | (1 << (chatParser.BASIC - 128)) | (1 << (chatParser.JPG - 128)) | (1 << (chatParser.PNG - 128)) | (1 << (chatParser.GIF - 128)) | (1 << (chatParser.SVG - 128)) | (1 << (chatParser.MP2 - 128)) | (1 << (chatParser.MP3 - 128)) | (1 << (chatParser.MP4 - 128)) | (1 << (chatParser.FLV - 128)) | (1 << (chatParser.WMV - 128)) | (1 << (chatParser.MPEG - 128)) | (1 << (chatParser.MPG - 128)) | (1 << (chatParser.TEL - 128)) | (1 << (chatParser.DotArticleAtt - 128)) | (1 << (chatParser.STAR - 128)) | (1 << (chatParser.URL - 128)) | (1 << (chatParser.LIST_LINE - 128)) | (1 << (chatParser.ENCLBARS - 128)))) !== 0));
			this.state = 1031;
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
		this.enterRule(_localctx, 138, chatParser.RULE_title);
		let _la: number;
		try {
			this.state = 1045;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 138, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1033;
				this.match(chatParser.OPHASH);
				this.state = 1036;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					this.state = 1036;
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
					case chatParser.SENTENCE:
					case chatParser.BARSTRING:
					case chatParser.URL:
						{
						this.state = 1034;
						this.s_and_w();
						}
						break;
					case chatParser.NL:
						{
						this.state = 1035;
						this.match(chatParser.NL);
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					}
					this.state = 1038;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << chatParser.S) | (1 << chatParser.OPS) | (1 << chatParser.COLON) | (1 << chatParser.AMP) | (1 << chatParser.DBLCOLON) | (1 << chatParser.Greater) | (1 << chatParser.Less) | (1 << chatParser.RightAngle))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (chatParser.RightArrow - 32)) | (1 << (chatParser.DBLEQ - 32)) | (1 << (chatParser.NUMERIC - 32)) | (1 << (chatParser.STRING - 32)) | (1 << (chatParser.NL - 32)) | (1 << (chatParser.NOTBITMARK - 32)) | (1 << (chatParser.SENTENCE - 32)) | (1 << (chatParser.BARSTRING - 32)))) !== 0) || _la === chatParser.URL);
				this.state = 1040;
				this.match(chatParser.CL);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1041;
				this.match(chatParser.OPHASH);
				this.state = 1042;
				this.s_and_w();
				this.state = 1043;
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
		this.enterRule(_localctx, 140, chatParser.RULE_bool_label);
		try {
			this.state = 1055;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case chatParser.AtLabeltrue:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1047;
				this.match(chatParser.AtLabeltrue);
				this.state = 1048;
				this.s_and_w();
				this.state = 1049;
				this.match(chatParser.CL);
				}
				break;
			case chatParser.AtLabelfalse:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1051;
				this.match(chatParser.AtLabelfalse);
				this.state = 1052;
				this.s_and_w();
				this.state = 1053;
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
		this.enterRule(_localctx, 142, chatParser.RULE_progress_points);
		try {
			this.state = 1066;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 140, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1057;
				this.match(chatParser.AtProgressPoints);
				this.state = 1058;
				this.match(chatParser.COLON);
				this.state = 1059;
				this.match(chatParser.NUMERIC);
				this.state = 1060;
				this.match(chatParser.CL);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1061;
				this.match(chatParser.AtProgressPoints);
				this.state = 1062;
				this.match(chatParser.COLON);
				this.state = 1063;
				this.s_and_w();
				this.state = 1064;
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
		this.enterRule(_localctx, 144, chatParser.RULE_istracked);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1068;
			this.match(chatParser.OpAtIsTracked);
			this.state = 1069;
			this.s_and_w();
			this.state = 1070;
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
		this.enterRule(_localctx, 146, chatParser.RULE_isinfoonly);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1072;
			this.match(chatParser.OpAtIsInfoOnly);
			this.state = 1073;
			this.s_and_w();
			this.state = 1074;
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
		this.enterRule(_localctx, 148, chatParser.RULE_atdef);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1076;
			this.atdef_();
			this.state = 1086;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 142, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1080;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === chatParser.NL) {
						{
						{
						this.state = 1077;
						this.match(chatParser.NL);
						}
						}
						this.state = 1082;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					this.state = 1083;
					this.atdef_();
					}
					}
				}
				this.state = 1088;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 142, this._ctx);
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
		this.enterRule(_localctx, 150, chatParser.RULE_atdef_);
		let _la: number;
		try {
			let _alt: number;
			this.state = 1111;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case chatParser.OPA:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1089;
				this.match(chatParser.OPA);
				this.state = 1090;
				this.s_and_w();
				this.state = 1091;
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
				this.state = 1092;
				this.s_and_w();
				this.state = 1098;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << chatParser.S) | (1 << chatParser.OPS) | (1 << chatParser.COLON) | (1 << chatParser.AMP) | (1 << chatParser.DBLCOLON) | (1 << chatParser.Greater) | (1 << chatParser.Less) | (1 << chatParser.RightAngle))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (chatParser.RightArrow - 32)) | (1 << (chatParser.DBLEQ - 32)) | (1 << (chatParser.NUMERIC - 32)) | (1 << (chatParser.STRING - 32)) | (1 << (chatParser.NL - 32)) | (1 << (chatParser.NOTBITMARK - 32)) | (1 << (chatParser.SENTENCE - 32)) | (1 << (chatParser.BARSTRING - 32)))) !== 0) || _la === chatParser.URL) {
					{
					this.state = 1096;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 143, this._ctx) ) {
					case 1:
						{
						this.state = 1093;
						this.match(chatParser.NL);
						}
						break;

					case 2:
						{
						this.state = 1094;
						this.match(chatParser.COLON);
						}
						break;

					case 3:
						{
						this.state = 1095;
						this.s_and_w();
						}
						break;
					}
					}
					this.state = 1100;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1101;
				this.match(chatParser.CL);
				}
				break;
			case chatParser.OpAtCopyright:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1103;
				this.match(chatParser.OpAtCopyright);
				this.state = 1107;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 145, this._ctx);
				while (_alt !== 1 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1 + 1) {
						{
						{
						this.state = 1104;
						this.matchWildcard();
						}
						}
					}
					this.state = 1109;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 145, this._ctx);
				}
				this.state = 1110;
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
		this.enterRule(_localctx, 152, chatParser.RULE_dollarans);
		let _la: number;
		try {
			this.state = 1132;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 151, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1113;
				this.match(chatParser.OPDOLL);
				this.state = 1117;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
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
						this.match(chatParser.COLON);
						}
						break;

					case 3:
						{
						this.state = 1116;
						this.match(chatParser.NL);
						}
						break;
					}
					}
					this.state = 1119;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << chatParser.S) | (1 << chatParser.OPS) | (1 << chatParser.COLON) | (1 << chatParser.AMP) | (1 << chatParser.DBLCOLON) | (1 << chatParser.Greater) | (1 << chatParser.Less) | (1 << chatParser.RightAngle))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (chatParser.RightArrow - 32)) | (1 << (chatParser.DBLEQ - 32)) | (1 << (chatParser.NUMERIC - 32)) | (1 << (chatParser.STRING - 32)) | (1 << (chatParser.NL - 32)) | (1 << (chatParser.NOTBITMARK - 32)) | (1 << (chatParser.SENTENCE - 32)) | (1 << (chatParser.BARSTRING - 32)))) !== 0) || _la === chatParser.URL);
				this.state = 1121;
				this.match(chatParser.CL);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1122;
				this.match(chatParser.OPDOLL);
				this.state = 1128;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << chatParser.S) | (1 << chatParser.OPS) | (1 << chatParser.COLON) | (1 << chatParser.AMP) | (1 << chatParser.DBLCOLON) | (1 << chatParser.Greater) | (1 << chatParser.Less) | (1 << chatParser.RightAngle))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (chatParser.RightArrow - 32)) | (1 << (chatParser.DBLEQ - 32)) | (1 << (chatParser.NUMERIC - 32)) | (1 << (chatParser.STRING - 32)) | (1 << (chatParser.NL - 32)) | (1 << (chatParser.NOTBITMARK - 32)) | (1 << (chatParser.SENTENCE - 32)) | (1 << (chatParser.BARSTRING - 32)))) !== 0) || _la === chatParser.URL) {
					{
					this.state = 1126;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 149, this._ctx) ) {
					case 1:
						{
						this.state = 1123;
						this.s_and_w();
						}
						break;

					case 2:
						{
						this.state = 1124;
						this.match(chatParser.COLON);
						}
						break;

					case 3:
						{
						this.state = 1125;
						this.match(chatParser.NL);
						}
						break;
					}
					}
					this.state = 1130;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1131;
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
		this.enterRule(_localctx, 154, chatParser.RULE_anchor);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1134;
			this.match(chatParser.OPDANGLE);
			this.state = 1136;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << chatParser.S) | (1 << chatParser.OPS) | (1 << chatParser.COLON) | (1 << chatParser.AMP) | (1 << chatParser.DBLCOLON) | (1 << chatParser.Greater) | (1 << chatParser.Less) | (1 << chatParser.RightAngle))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (chatParser.RightArrow - 32)) | (1 << (chatParser.DBLEQ - 32)) | (1 << (chatParser.NUMERIC - 32)) | (1 << (chatParser.STRING - 32)) | (1 << (chatParser.NOTBITMARK - 32)) | (1 << (chatParser.SENTENCE - 32)) | (1 << (chatParser.BARSTRING - 32)))) !== 0) || _la === chatParser.URL) {
				{
				this.state = 1135;
				this.s_and_w();
				}
			}

			this.state = 1138;
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
		this.enterRule(_localctx, 156, chatParser.RULE_lines);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1144;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 1140;
				this.s_and_w();
				this.state = 1142;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === chatParser.NL) {
					{
					this.state = 1141;
					this.match(chatParser.NL);
					}
				}

				}
				}
				this.state = 1146;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << chatParser.S) | (1 << chatParser.OPS) | (1 << chatParser.COLON) | (1 << chatParser.AMP) | (1 << chatParser.DBLCOLON) | (1 << chatParser.Greater) | (1 << chatParser.Less) | (1 << chatParser.RightAngle))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (chatParser.RightArrow - 32)) | (1 << (chatParser.DBLEQ - 32)) | (1 << (chatParser.NUMERIC - 32)) | (1 << (chatParser.STRING - 32)) | (1 << (chatParser.NOTBITMARK - 32)) | (1 << (chatParser.SENTENCE - 32)) | (1 << (chatParser.BARSTRING - 32)))) !== 0) || _la === chatParser.URL);
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
		this.enterRule(_localctx, 158, chatParser.RULE_s_and_w);
		let _la: number;
		try {
			let _alt: number;
			this.state = 1194;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 162, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1148;
				this.match(chatParser.STRING);
				this.state = 1155;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 156, this._ctx) ) {
				case 1:
					{
					this.state = 1150;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					do {
						{
						{
						this.state = 1149;
						this.match(chatParser.S);
						}
						}
						this.state = 1152;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					} while (_la === chatParser.S);
					this.state = 1154;
					this.match(chatParser.NUMERIC);
					}
					break;
				}
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1157;
				this.words();
				this.state = 1164;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 158, this._ctx) ) {
				case 1:
					{
					this.state = 1159;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					do {
						{
						{
						this.state = 1158;
						this.match(chatParser.S);
						}
						}
						this.state = 1161;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					} while (_la === chatParser.S);
					this.state = 1163;
					this.match(chatParser.NUMERIC);
					}
					break;
				}
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1166;
				this.match(chatParser.OPS);
				this.state = 1167;
				this.s_and_w();
				this.state = 1168;
				this.match(chatParser.CL);
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1170;
				this.match(chatParser.NUMERIC);
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 1174;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === chatParser.S) {
					{
					{
					this.state = 1171;
					this.match(chatParser.S);
					}
					}
					this.state = 1176;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1177;
				this.match(chatParser.COLON);
				this.state = 1181;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 160, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 1178;
						this.match(chatParser.S);
						}
						}
					}
					this.state = 1183;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 160, this._ctx);
				}
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 1184;
				this.match(chatParser.AMP);
				this.state = 1188;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 161, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 1185;
						this.match(chatParser.S);
						}
						}
					}
					this.state = 1190;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 161, this._ctx);
				}
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 1191;
				this.match(chatParser.DBLCOLON);
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 1192;
				this.match(chatParser.DBLEQ);
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 1193;
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
		this.enterRule(_localctx, 160, chatParser.RULE_clnsp);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1196;
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
		this.enterRule(_localctx, 162, chatParser.RULE_sspl);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1198;
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
		this.enterRule(_localctx, 164, chatParser.RULE_words);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1211;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					this.state = 1211;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case chatParser.SENTENCE:
						{
						this.state = 1200;
						this.match(chatParser.SENTENCE);
						}
						break;
					case chatParser.NOTBITMARK:
						{
						this.state = 1201;
						this.match(chatParser.NOTBITMARK);
						}
						break;
					case chatParser.BARSTRING:
						{
						this.state = 1202;
						this.match(chatParser.BARSTRING);
						}
						break;
					case chatParser.AMP:
						{
						this.state = 1203;
						this.match(chatParser.AMP);
						}
						break;
					case chatParser.Greater:
						{
						this.state = 1204;
						this.match(chatParser.Greater);
						this.state = 1205;
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
						this.state = 1206;
						this.match(chatParser.Less);
						this.state = 1207;
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
						this.state = 1208;
						this.match(chatParser.DBLEQ);
						}
						break;
					case chatParser.RightArrow:
						{
						this.state = 1209;
						this.match(chatParser.RightArrow);
						}
						break;
					case chatParser.RightAngle:
						{
						this.state = 1210;
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
				this.state = 1213;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 164, this._ctx);
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
		this.enterRule(_localctx, 166, chatParser.RULE_sp);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1215;
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
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\x9B\u04C4\x04" +
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
		"O\tO\x04P\tP\x04Q\tQ\x04R\tR\x04S\tS\x04T\tT\x04U\tU\x03\x02\x03\x02\x07" +
		"\x02\xAD\n\x02\f\x02\x0E\x02\xB0\v\x02\x03\x02\x07\x02\xB3\n\x02\f\x02" +
		"\x0E\x02\xB6\v\x02\x06\x02\xB8\n\x02\r\x02\x0E\x02\xB9\x03\x02\x07\x02" +
		"\xBD\n\x02\f\x02\x0E\x02\xC0\v\x02\x03\x02\x03\x02\x03\x03\x03\x03\x03" +
		"\x03\x03\x03\x05\x03\xC8\n\x03\x03\x04\x03\x04\x03\x04\x03\x04\x07\x04" +
		"\xCE\n\x04\f\x04\x0E\x04\xD1\v\x04\x03\x04\x03\x04\x07\x04\xD5\n\x04\f" +
		"\x04\x0E\x04\xD8\v\x04\x07\x04\xDA\n\x04\f\x04\x0E\x04\xDD\v\x04\x03\x04" +
		"\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x07\x04\xE6\n\x04\f\x04" +
		"\x0E\x04\xE9\v\x04\x06\x04\xEB\n\x04\r\x04\x0E\x04\xEC\x03\x04\x03\x04" +
		"\x07\x04\xF1\n\x04\f\x04\x0E\x04\xF4\v\x04\x03\x04\x03\x04\x07\x04\xF8" +
		"\n\x04\f\x04\x0E\x04\xFB\v\x04\x03\x04\x07\x04\xFE\n\x04\f\x04\x0E\x04" +
		"\u0101\v\x04\x05\x04\u0103\n\x04\x03\x05\x03\x05\x03\x05\x03\x05\x07\x05" +
		"\u0109\n\x05\f\x05\x0E\x05\u010C\v\x05\x03\x05\x03\x05\x07\x05\u0110\n" +
		"\x05\f\x05\x0E\x05\u0113\v\x05\x07\x05\u0115\n\x05\f\x05\x0E\x05\u0118" +
		"\v\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x07\x05" +
		"\u0121\n\x05\f\x05\x0E\x05\u0124\v\x05\x06\x05\u0126\n\x05\r\x05\x0E\x05" +
		"\u0127\x03\x05\x03\x05\x07\x05\u012C\n\x05\f\x05\x0E\x05\u012F\v\x05\x03" +
		"\x05\x03\x05\x07\x05\u0133\n\x05\f\x05\x0E\x05\u0136\v\x05\x03\x05\x07" +
		"\x05\u0139\n\x05\f\x05\x0E\x05\u013C\v\x05\x05\x05\u013E\n\x05\x03\x06" +
		"\x03\x06\x03\x06\x03\x06\x07\x06\u0144\n\x06\f\x06\x0E\x06\u0147\v\x06" +
		"\x03\x06\x03\x06\x07\x06\u014B\n\x06\f\x06\x0E\x06\u014E\v\x06\x07\x06" +
		"\u0150\n\x06\f\x06\x0E\x06\u0153\v\x06\x03\x06\x03\x06\x07\x06\u0157\n" +
		"\x06\f\x06\x0E\x06\u015A\v\x06\x03\x06\x03\x06\x03\x07\x03\x07\x03\x07" +
		"\x03\x07\x07\x07\u0162\n\x07\f\x07\x0E\x07\u0165\v\x07\x03\x07\x03\x07" +
		"\x07\x07\u0169\n\x07\f\x07\x0E\x07\u016C\v\x07\x07\x07\u016E\n\x07\f\x07" +
		"\x0E\x07\u0171\v\x07\x03\x07\x03\x07\x07\x07\u0175\n\x07\f\x07\x0E\x07" +
		"\u0178\v\x07\x03\x07\x03\x07\x03\b\x03\b\x07\b\u017E\n\b\f\b\x0E\b\u0181" +
		"\v\b\x03\b\x05\b\u0184\n\b\x03\b\x05\b\u0187\n\b\x03\t\x03\t\x07\t\u018B" +
		"\n\t\f\t\x0E\t\u018E\v\t\x03\t\x05\t\u0191\n\t\x03\t\x05\t\u0194\n\t\x03" +
		"\n\x03\n\x07\n\u0198\n\n\f\n\x0E\n\u019B\v\n\x03\n\x05\n\u019E\n\n\x03" +
		"\n\x05\n\u01A1\n\n\x03\v\x03\v\x03\v\x03\v\x03\f\x03\f\x03\f\x03\f\x03" +
		"\r\x03\r\x03\r\x03\r\x03\x0E\x03\x0E\x03\x0F\x03\x0F\x03\x10\x03\x10\x03" +
		"\x10\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03" +
		"\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03" +
		"\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x05\x11\u01CD\n\x11\x03\x12" +
		"\x03\x12\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x07\x13\u01D7" +
		"\n\x13\f\x13\x0E\x13\u01DA\v\x13\x03\x14\x03\x14\x03\x14\x03\x14\x05\x14" +
		"\u01E0\n\x14\x03\x14\x07\x14\u01E3\n\x14\f\x14\x0E\x14\u01E6\v\x14\x03" +
		"\x14\x03\x14\x03\x15\x03\x15\x03\x16\x03\x16\x03\x16\x03\x16\x03\x17\x07" +
		"\x17\u01F1\n\x17\f\x17\x0E\x17\u01F4\v\x17\x03\x17\x03\x17\x03\x17\x07" +
		"\x17\u01F9\n\x17\f\x17\x0E\x17\u01FC\v\x17\x03\x18\x03\x18\x03\x19\x03" +
		"\x19\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x05\x19\u0209" +
		"\n\x19\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x05\x1A\u0210\n\x1A\x03" +
		"\x1B\x03\x1B\x03\x1B\x05\x1B\u0215\n\x1B\x03\x1B\x03\x1B\x05\x1B\u0219" +
		"\n\x1B\x03\x1B\x03\x1B\x05\x1B\u021D\n\x1B\x03\x1B\x05\x1B\u0220\n\x1B" +
		"\x03\x1C\x03\x1C\x03\x1C\x05\x1C\u0225\n\x1C\x03\x1D\x03\x1D\x03\x1E\x03" +
		"\x1E\x03\x1F\x03\x1F\x03 \x03 \x03!\x03!\x03\"\x03\"\x03#\x03#\x03$\x03" +
		"$\x03%\x03%\x03&\x03&\x03&\x05&\u023C\n&\x03&\x03&\x03&\x05&\u0241\n&" +
		"\x03&\x03&\x03&\x05&\u0246\n&\x05&\u0248\n&\x03\'\x03\'\x03(\x03(\x03" +
		"(\x03(\x03(\x03(\x05(\u0252\n(\x03)\x03)\x03)\x03)\x03)\x03)\x03)\x03" +
		")\x05)\u025C\n)\x03*\x03*\x03*\x03*\x03*\x03*\x03*\x03*\x05*\u0266\n*" +
		"\x03+\x03+\x03+\x03+\x05+\u026C\n+\x03+\x03+\x03+\x03+\x03+\x05+\u0273" +
		"\n+\x03,\x03,\x07,\u0277\n,\f,\x0E,\u027A\v,\x03-\x03-\x03-\x07-\u027F" +
		"\n-\f-\x0E-\u0282\v-\x03-\x03-\x03-\x03.\x03.\x07.\u0289\n.\f.\x0E.\u028C" +
		"\v.\x03/\x03/\x03/\x03/\x03/\x03/\x03/\x03/\x05/\u0296\n/\x030\x030\x07" +
		"0\u029A\n0\f0\x0E0\u029D\v0\x030\x030\x050\u02A1\n0\x031\x031\x031\x07" +
		"1\u02A6\n1\f1\x0E1\u02A9\v1\x031\x031\x031\x032\x032\x032\x052\u02B1\n" +
		"2\x032\x032\x052\u02B5\n2\x032\x032\x052\u02B9\n2\x032\x052\u02BC\n2\x03" +
		"3\x033\x033\x033\x033\x033\x033\x033\x033\x033\x033\x073\u02C9\n3\f3\x0E" +
		"3\u02CC\v3\x033\x053\u02CF\n3\x034\x034\x034\x034\x034\x034\x034\x034" +
		"\x034\x034\x034\x074\u02DC\n4\f4\x0E4\u02DF\v4\x034\x054\u02E2\n4\x03" +
		"5\x035\x075\u02E6\n5\f5\x0E5\u02E9\v5\x036\x036\x036\x036\x036\x036\x03" +
		"6\x036\x056\u02F3\n6\x037\x037\x037\x057\u02F8\n7\x037\x037\x037\x057" +
		"\u02FD\n7\x057\u02FF\n7\x038\x038\x038\x058\u0304\n8\x038\x038\x038\x05" +
		"8\u0309\n8\x038\x038\x038\x058\u030E\n8\x058\u0310\n8\x039\x039\x039\x05" +
		"9\u0315\n9\x039\x039\x079\u0319\n9\f9\x0E9\u031C\v9\x039\x039\x069\u0320" +
		"\n9\r9\x0E9\u0321\x039\x039\x039\x039\x039\x039\x039\x079\u032B\n9\f9" +
		"\x0E9\u032E\v9\x039\x059\u0331\n9\x03:\x03:\x03:\x03:\x03;\x03;\x03<\x03" +
		"<\x03<\x07<\u033C\n<\f<\x0E<\u033F\v<\x03<\x05<\u0342\n<\x03<\x03<\x03" +
		"<\x03<\x07<\u0348\n<\f<\x0E<\u034B\v<\x03<\x03<\x07<\u034F\n<\f<\x0E<" +
		"\u0352\v<\x03<\x05<\u0355\n<\x05<\u0357\n<\x03=\x03=\x03=\x03=\x07=\u035D" +
		"\n=\f=\x0E=\u0360\v=\x03=\x03=\x03>\x03>\x05>\u0366\n>\x03>\x03>\x03>" +
		"\x05>\u036B\n>\x03>\x05>\u036E\n>\x03?\x03?\x03?\x03?\x05?\u0374\n?\x03" +
		"?\x05?\u0377\n?\x03@\x03@\x05@\u037B\n@\x03@\x03@\x03@\x07@\u0380\n@\f" +
		"@\x0E@\u0383\v@\x07@\u0385\n@\f@\x0E@\u0388\v@\x03@\x07@\u038B\n@\f@\x0E" +
		"@\u038E\v@\x07@\u0390\n@\f@\x0E@\u0393\v@\x03@\x03@\x03@\x03@\x03@\x07" +
		"@\u039A\n@\f@\x0E@\u039D\v@\x03@\x05@\u03A0\n@\x03A\x03A\x03A\x03A\x03" +
		"A\x06A\u03A7\nA\rA\x0EA\u03A8\x03A\x03A\x03A\x03A\x03A\x03A\x03A\x07A" +
		"\u03B2\nA\fA\x0EA\u03B5\vA\x03A\x05A\u03B8\nA\x03B\x03B\x03B\x03B\x03" +
		"C\x03C\x03C\x03C\x06C\u03C2\nC\rC\x0EC\u03C3\x03C\x03C\x05C\u03C8\nC\x03" +
		"D\x03D\x03D\x03D\x06D\u03CE\nD\rD\x0ED\u03CF\x03D\x03D\x03E\x03E\x07E" +
		"\u03D6\nE\fE\x0EE\u03D9\vE\x03E\x05E\u03DC\nE\x03E\x03E\x03E\x07E\u03E1" +
		"\nE\fE\x0EE\u03E4\vE\x07E\u03E6\nE\fE\x0EE\u03E9\vE\x03E\x07E\u03EC\n" +
		"E\fE\x0EE\u03EF\vE\x07E\u03F1\nE\fE\x0EE\u03F4\vE\x03E\x03E\x03E\x07E" +
		"\u03F9\nE\fE\x0EE\u03FC\vE\x03E\x05E\u03FF\nE\x03E\x05E\u0402\nE\x03F" +
		"\x03F\x06F\u0406\nF\rF\x0EF\u0407\x03F\x03F\x03G\x03G\x03G\x06G\u040F" +
		"\nG\rG\x0EG\u0410\x03G\x03G\x03G\x03G\x03G\x05G\u0418\nG\x03H\x03H\x03" +
		"H\x03H\x03H\x03H\x03H\x03H\x05H\u0422\nH\x03I\x03I\x03I\x03I\x03I\x03" +
		"I\x03I\x03I\x03I\x05I\u042D\nI\x03J\x03J\x03J\x03J\x03K\x03K\x03K\x03" +
		"K\x03L\x03L\x07L\u0439\nL\fL\x0EL\u043C\vL\x03L\x07L\u043F\nL\fL\x0EL" +
		"\u0442\vL\x03M\x03M\x03M\x03M\x03M\x03M\x03M\x07M\u044B\nM\fM\x0EM\u044E" +
		"\vM\x03M\x03M\x03M\x03M\x07M\u0454\nM\fM\x0EM\u0457\vM\x03M\x05M\u045A" +
		"\nM\x03N\x03N\x03N\x03N\x06N\u0460\nN\rN\x0EN\u0461\x03N\x03N\x03N\x03" +
		"N\x03N\x07N\u0469\nN\fN\x0EN\u046C\vN\x03N\x05N\u046F\nN\x03O\x03O\x05" +
		"O\u0473\nO\x03O\x03O\x03P\x03P\x05P\u0479\nP\x06P\u047B\nP\rP\x0EP\u047C" +
		"\x03Q\x03Q\x06Q\u0481\nQ\rQ\x0EQ\u0482\x03Q\x05Q\u0486\nQ\x03Q\x03Q\x06" +
		"Q\u048A\nQ\rQ\x0EQ\u048B\x03Q\x05Q\u048F\nQ\x03Q\x03Q\x03Q\x03Q\x03Q\x03" +
		"Q\x07Q\u0497\nQ\fQ\x0EQ\u049A\vQ\x03Q\x03Q\x07Q\u049E\nQ\fQ\x0EQ\u04A1" +
		"\vQ\x03Q\x03Q\x07Q\u04A5\nQ\fQ\x0EQ\u04A8\vQ\x03Q\x03Q\x03Q\x05Q\u04AD" +
		"\nQ\x03R\x03R\x03S\x03S\x03T\x03T\x03T\x03T\x03T\x03T\x03T\x03T\x03T\x03" +
		"T\x03T\x06T\u04BE\nT\rT\x0ET\u04BF\x03U\x03U\x03U\x06\u02CA\u02DD\u032C" +
		"\u0455\x02\x02V\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10" +
		"\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02" +
		"$\x02&\x02(\x02*\x02,\x02.\x020\x022\x024\x026\x028\x02:\x02<\x02>\x02" +
		"@\x02B\x02D\x02F\x02H\x02J\x02L\x02N\x02P\x02R\x02T\x02V\x02X\x02Z\x02" +
		"\\\x02^\x02`\x02b\x02d\x02f\x02h\x02j\x02l\x02n\x02p\x02r\x02t\x02v\x02" +
		"x\x02z\x02|\x02~\x02\x80\x02\x82\x02\x84\x02\x86\x02\x88\x02\x8A\x02\x8C" +
		"\x02\x8E\x02\x90\x02\x92\x02\x94\x02\x96\x02\x98\x02\x9A\x02\x9C\x02\x9E" +
		"\x02\xA0\x02\xA2\x02\xA4\x02\xA6\x02\xA8\x02\x02\x16\x03\x02$%\b\x02X" +
		"Y[\\jq{~\x84\x85\x87\x89\x05\x02WWll{{\x04\x02XXmm\x05\x02YYnn}}\x04\x02" +
		"ZZoo\x04\x02[[pp\x05\x02\\\\qq~~\x04\x02ccuu\x05\x02eevv\x82\x82\x04\x02" +
		"ffww\x04\x02ggxx\x05\x02hhyy\x83\x83\x03\x0289\x04\x02GGJM\x03\x02\x19" +
		"\x19\x04\x02\x1A\x1A\x1C\x1C\x03\x02&\'\x03\x02\x1F\x1F\x03\x02  \x02" +
		"\u055F\x02\xB7\x03\x02\x02\x02\x04\xC7\x03\x02\x02\x02\x06\xC9\x03\x02" +
		"\x02\x02\b\u0104\x03\x02\x02\x02\n\u013F\x03\x02\x02\x02\f\u015D\x03\x02" +
		"\x02\x02\x0E\u017B\x03\x02\x02\x02\x10\u0188\x03\x02\x02\x02\x12\u0195" +
		"\x03\x02\x02\x02\x14\u01A2\x03\x02\x02\x02\x16\u01A6\x03\x02\x02\x02\x18" +
		"\u01AA\x03\x02\x02\x02\x1A\u01AE\x03\x02\x02\x02\x1C\u01B0\x03\x02\x02" +
		"\x02\x1E\u01B2\x03\x02\x02\x02 \u01CC\x03\x02\x02\x02\"\u01CE\x03\x02" +
		"\x02\x02$\u01D0\x03\x02\x02\x02&\u01DB\x03\x02\x02\x02(\u01E9\x03\x02" +
		"\x02\x02*\u01EB\x03\x02\x02\x02,\u01F2\x03\x02\x02\x02.\u01FD\x03\x02" +
		"\x02\x020\u0208\x03\x02\x02\x022\u020F\x03\x02\x02\x024\u021F\x03\x02" +
		"\x02\x026\u0221\x03\x02\x02\x028\u0226\x03\x02\x02\x02:\u0228\x03\x02" +
		"\x02\x02<\u022A\x03\x02\x02\x02>\u022C\x03\x02\x02\x02@\u022E\x03\x02" +
		"\x02\x02B\u0230\x03\x02\x02\x02D\u0232\x03\x02\x02\x02F\u0234\x03\x02" +
		"\x02\x02H\u0236\x03\x02\x02\x02J\u0247\x03\x02\x02\x02L\u0249\x03\x02" +
		"\x02\x02N\u0251\x03\x02\x02\x02P\u0253\x03\x02\x02\x02R\u025D\x03\x02" +
		"\x02\x02T\u0267\x03\x02\x02\x02V\u0274\x03\x02\x02\x02X\u027B\x03\x02" +
		"\x02\x02Z\u0286\x03\x02\x02\x02\\\u028D\x03\x02\x02\x02^\u0297\x03\x02" +
		"\x02\x02`\u02A2\x03\x02\x02\x02b\u02BB\x03\x02\x02\x02d\u02CE\x03\x02" +
		"\x02\x02f\u02E1\x03\x02\x02\x02h\u02E3\x03\x02\x02\x02j\u02EA\x03\x02" +
		"\x02\x02l\u02FE\x03\x02\x02\x02n\u030F\x03\x02\x02\x02p\u0330\x03\x02" +
		"\x02\x02r\u0332\x03\x02\x02\x02t\u0336\x03\x02\x02\x02v\u0356\x03\x02" +
		"\x02\x02x\u0358\x03\x02\x02\x02z\u036D\x03\x02\x02\x02|\u0376\x03\x02" +
		"\x02\x02~\u039F\x03\x02\x02\x02\x80\u03B7\x03\x02\x02\x02\x82\u03B9\x03" +
		"\x02\x02\x02\x84\u03BD\x03\x02\x02\x02\x86\u03C9\x03\x02\x02\x02\x88\u0401" +
		"\x03\x02\x02\x02\x8A\u0403\x03\x02\x02\x02\x8C\u0417\x03\x02\x02\x02\x8E" +
		"\u0421\x03\x02\x02\x02\x90\u042C\x03\x02\x02\x02\x92\u042E\x03\x02\x02" +
		"\x02\x94\u0432\x03\x02\x02\x02\x96\u0436\x03\x02\x02\x02\x98\u0459\x03" +
		"\x02\x02\x02\x9A\u046E\x03\x02\x02\x02\x9C\u0470\x03\x02\x02\x02\x9E\u047A" +
		"\x03\x02\x02\x02\xA0\u04AC\x03\x02\x02\x02\xA2\u04AE\x03\x02\x02\x02\xA4" +
		"\u04B0\x03\x02\x02\x02\xA6\u04BD\x03\x02\x02\x02\xA8\u04C1\x03\x02\x02" +
		"\x02\xAA\xB4\x05\x04\x03\x02\xAB\xAD\x07\x04\x02\x02\xAC\xAB\x03\x02\x02" +
		"\x02\xAD\xB0\x03\x02\x02\x02\xAE\xAC\x03\x02\x02\x02\xAE\xAF\x03\x02\x02" +
		"\x02\xAF\xB1\x03\x02\x02\x02\xB0\xAE\x03\x02\x02\x02\xB1\xB3\x071\x02" +
		"\x02\xB2\xAE\x03\x02\x02\x02\xB3\xB6\x03\x02\x02\x02\xB4\xB2\x03\x02\x02" +
		"\x02\xB4\xB5\x03\x02\x02\x02\xB5\xB8\x03\x02\x02\x02\xB6\xB4\x03\x02\x02" +
		"\x02\xB7\xAA\x03\x02\x02\x02\xB8\xB9\x03\x02\x02\x02\xB9\xB7\x03\x02\x02" +
		"\x02\xB9\xBA\x03\x02\x02\x02\xBA\xBE\x03\x02\x02\x02\xBB\xBD\x071\x02" +
		"\x02\xBC\xBB\x03\x02\x02\x02\xBD\xC0\x03\x02\x02\x02\xBE\xBC\x03\x02\x02" +
		"\x02\xBE\xBF\x03\x02\x02\x02\xBF\xC1\x03\x02\x02\x02\xC0\xBE\x03\x02\x02" +
		"\x02\xC1\xC2\x07\x02\x02\x03\xC2\x03\x03\x02\x02\x02\xC3\xC8\x05\x06\x04" +
		"\x02\xC4\xC8\x05\b\x05\x02\xC5\xC8\x05\n\x06\x02\xC6\xC8\x05\f\x07\x02" +
		"\xC7\xC3\x03\x02\x02\x02\xC7\xC4\x03\x02\x02\x02\xC7\xC5\x03\x02\x02\x02" +
		"\xC7\xC6\x03\x02\x02\x02\xC8\x05\x03\x02\x02\x02\xC9\xCA\x07\x05\x02\x02" +
		"\xCA\xCB\x05,\x17\x02\xCB\xCF\x07\x19\x02\x02\xCC\xCE\x071\x02\x02\xCD" +
		"\xCC\x03\x02\x02\x02\xCE\xD1\x03\x02\x02\x02\xCF\xCD\x03\x02\x02\x02\xCF" +
		"\xD0\x03\x02\x02\x02\xD0\xDB\x03\x02\x02\x02\xD1\xCF\x03\x02\x02\x02\xD2" +
		"\xD6\x05 \x11\x02\xD3\xD5\x071\x02\x02\xD4\xD3\x03\x02\x02\x02\xD5\xD8" +
		"\x03\x02\x02\x02\xD6\xD4\x03\x02\x02\x02\xD6\xD7\x03\x02\x02\x02\xD7\xDA" +
		"\x03\x02\x02\x02\xD8\xD6\x03\x02\x02\x02\xD9\xD2\x03\x02\x02\x02\xDA\xDD" +
		"\x03\x02\x02\x02\xDB\xD9\x03\x02\x02\x02\xDB\xDC\x03\x02\x02\x02\xDC\xDE" +
		"\x03\x02\x02\x02\xDD\xDB\x03\x02\x02\x02\xDE\xDF\t\x02\x02\x02\xDF\xE0" +
		"\x05\x0E\b\x02\xE0\xE1\t\x02\x02\x02\xE1\xEA\x05\x10\t\x02\xE2\xE3\t\x02" +
		"\x02\x02\xE3\xE7\x05\x1A\x0E\x02\xE4\xE6\x05\x1E\x10\x02\xE5\xE4\x03\x02" +
		"\x02\x02\xE6\xE9\x03\x02\x02\x02\xE7\xE5\x03\x02\x02\x02\xE7\xE8\x03\x02" +
		"\x02\x02\xE8\xEB\x03\x02\x02\x02\xE9\xE7\x03\x02\x02\x02\xEA\xE2\x03\x02" +
		"\x02\x02\xEB\xEC\x03\x02\x02\x02\xEC\xEA\x03\x02\x02\x02\xEC\xED\x03\x02" +
		"\x02\x02\xED\xEE\x03\x02\x02\x02\xEE\xF2\t\x02\x02\x02\xEF\xF1\x071\x02" +
		"\x02\xF0\xEF\x03\x02\x02\x02\xF1\xF4\x03\x02\x02\x02\xF2\xF0\x03\x02\x02" +
		"\x02\xF2\xF3\x03\x02\x02\x02\xF3\u0102\x03\x02\x02\x02\xF4\xF2\x03\x02" +
		"\x02\x02\xF5\xFF\x05\"\x12\x02\xF6\xF8\x071\x02\x02\xF7\xF6\x03\x02\x02" +
		"\x02\xF8\xFB\x03\x02\x02\x02\xF9\xF7\x03\x02\x02\x02\xF9\xFA\x03\x02\x02" +
		"\x02\xFA\xFC\x03\x02\x02\x02\xFB\xF9\x03\x02\x02\x02\xFC\xFE\x05\"\x12" +
		"\x02\xFD\xF9\x03\x02\x02\x02\xFE\u0101\x03\x02\x02\x02\xFF\xFD\x03\x02" +
		"\x02\x02\xFF\u0100\x03\x02\x02\x02\u0100\u0103\x03\x02\x02\x02\u0101\xFF" +
		"\x03\x02\x02\x02\u0102\xF5\x03\x02\x02\x02\u0102\u0103\x03\x02\x02\x02" +
		"\u0103\x07\x03\x02\x02\x02\u0104\u0105\x07\x06\x02\x02\u0105\u0106\x05" +
		",\x17\x02\u0106\u010A\x07\x19\x02\x02\u0107\u0109\x071\x02\x02\u0108\u0107" +
		"\x03\x02\x02\x02\u0109\u010C\x03\x02\x02\x02\u010A\u0108\x03\x02\x02\x02" +
		"\u010A\u010B\x03\x02\x02\x02\u010B\u0116\x03\x02\x02\x02\u010C\u010A\x03" +
		"\x02\x02\x02\u010D\u0111\x05 \x11\x02\u010E\u0110\x071\x02\x02\u010F\u010E" +
		"\x03\x02\x02\x02\u0110\u0113\x03\x02\x02\x02\u0111\u010F\x03\x02\x02\x02" +
		"\u0111\u0112\x03\x02\x02\x02\u0112\u0115\x03\x02\x02\x02\u0113\u0111\x03" +
		"\x02\x02\x02\u0114\u010D\x03\x02\x02\x02\u0115\u0118\x03\x02\x02\x02\u0116" +
		"\u0114\x03\x02\x02\x02\u0116\u0117\x03\x02\x02\x02\u0117\u0119\x03\x02" +
		"\x02\x02\u0118\u0116\x03\x02\x02\x02\u0119\u011A\t\x02\x02\x02\u011A\u011B" +
		"\x05\x0E\b\x02\u011B\u011C\t\x02\x02\x02\u011C\u0125\x05\x10\t\x02\u011D" +
		"\u011E\t\x02\x02\x02\u011E\u0122\x05\x1A\x0E\x02\u011F\u0121\x05\x1E\x10" +
		"\x02\u0120\u011F\x03\x02\x02\x02\u0121\u0124\x03\x02\x02\x02\u0122\u0120" +
		"\x03\x02\x02\x02\u0122\u0123\x03\x02\x02\x02\u0123\u0126\x03\x02\x02\x02" +
		"\u0124\u0122\x03\x02\x02\x02\u0125\u011D\x03\x02\x02\x02\u0126\u0127\x03" +
		"\x02\x02\x02\u0127\u0125\x03\x02\x02\x02\u0127\u0128\x03\x02\x02\x02\u0128" +
		"\u0129\x03\x02\x02\x02\u0129\u012D\t\x02\x02\x02\u012A\u012C\x071\x02" +
		"\x02\u012B\u012A\x03\x02\x02\x02\u012C\u012F\x03\x02\x02\x02\u012D\u012B" +
		"\x03\x02\x02\x02\u012D\u012E\x03\x02\x02\x02\u012E\u013D\x03\x02\x02\x02" +
		"\u012F\u012D\x03\x02\x02\x02\u0130\u013A\x05\"\x12\x02\u0131\u0133\x07" +
		"1\x02\x02\u0132\u0131\x03\x02\x02\x02\u0133\u0136\x03\x02\x02\x02\u0134" +
		"\u0132\x03\x02\x02\x02\u0134\u0135\x03\x02\x02\x02\u0135\u0137\x03\x02" +
		"\x02\x02\u0136\u0134\x03\x02\x02\x02\u0137\u0139\x05\"\x12\x02\u0138\u0134" +
		"\x03\x02\x02\x02\u0139\u013C\x03\x02\x02\x02\u013A\u0138\x03\x02\x02\x02" +
		"\u013A\u013B\x03\x02\x02\x02\u013B\u013E\x03\x02\x02\x02\u013C\u013A\x03" +
		"\x02\x02\x02\u013D\u0130\x03\x02\x02\x02\u013D\u013E\x03\x02\x02\x02\u013E" +
		"\t\x03\x02\x02\x02\u013F\u0140\x07\x07\x02\x02\u0140\u0141\x052\x1A\x02" +
		"\u0141\u0145\x07\x19\x02\x02\u0142\u0144\x071\x02\x02\u0143\u0142\x03" +
		"\x02\x02\x02\u0144\u0147\x03\x02\x02\x02\u0145\u0143\x03\x02\x02\x02\u0145" +
		"\u0146\x03\x02\x02\x02\u0146\u0151\x03\x02\x02\x02\u0147\u0145\x03\x02" +
		"\x02\x02\u0148\u014C\x05 \x11\x02\u0149\u014B\x071\x02\x02\u014A\u0149" +
		"\x03\x02\x02\x02\u014B\u014E\x03\x02\x02\x02\u014C\u014A\x03\x02\x02\x02" +
		"\u014C\u014D\x03\x02\x02\x02\u014D\u0150\x03\x02\x02\x02\u014E\u014C\x03" +
		"\x02\x02\x02\u014F\u0148\x03\x02\x02\x02\u0150\u0153\x03\x02\x02\x02\u0151" +
		"\u014F\x03\x02\x02\x02\u0151\u0152\x03\x02\x02\x02\u0152\u0154\x03\x02" +
		"\x02\x02\u0153\u0151\x03\x02\x02\x02\u0154\u0158\x05\x12\n\x02\u0155\u0157" +
		"\x071\x02\x02\u0156\u0155\x03\x02\x02\x02\u0157\u015A\x03\x02\x02\x02" +
		"\u0158\u0156\x03\x02\x02\x02\u0158\u0159\x03\x02\x02\x02\u0159\u015B\x03" +
		"\x02\x02\x02\u015A\u0158\x03\x02\x02\x02\u015B\u015C\x05\xA0Q\x02\u015C" +
		"\v\x03\x02\x02\x02\u015D\u015E\x07\b\x02\x02\u015E\u015F\x052\x1A\x02" +
		"\u015F\u0163\x07\x19\x02\x02\u0160\u0162\x071\x02\x02\u0161\u0160\x03" +
		"\x02\x02\x02\u0162\u0165\x03\x02\x02\x02\u0163\u0161\x03\x02\x02\x02\u0163" +
		"\u0164\x03\x02\x02\x02\u0164\u016F\x03\x02\x02\x02\u0165\u0163\x03\x02" +
		"\x02\x02\u0166\u016A\x05 \x11\x02\u0167\u0169\x071\x02\x02\u0168\u0167" +
		"\x03\x02\x02\x02\u0169\u016C\x03\x02\x02\x02\u016A\u0168\x03\x02\x02\x02" +
		"\u016A\u016B\x03\x02\x02\x02\u016B\u016E\x03\x02\x02\x02\u016C\u016A\x03" +
		"\x02\x02\x02\u016D\u0166\x03\x02\x02\x02\u016E\u0171\x03\x02\x02\x02\u016F" +
		"\u016D\x03\x02\x02\x02\u016F\u0170\x03\x02\x02\x02\u0170\u0172\x03\x02" +
		"\x02\x02\u0171\u016F\x03\x02\x02\x02\u0172\u0176\x05\x12\n\x02\u0173\u0175" +
		"\x071\x02\x02\u0174\u0173\x03\x02\x02\x02\u0175\u0178\x03\x02\x02\x02" +
		"\u0176\u0174\x03\x02\x02\x02\u0176\u0177\x03\x02\x02\x02\u0177\u0179\x03" +
		"\x02\x02\x02\u0178\u0176\x03\x02\x02\x02\u0179\u017A\x05\xA0Q\x02\u017A" +
		"\r\x03\x02\x02\x02\u017B\u0183\x05\x16\f\x02\u017C\u017E\x071\x02\x02" +
		"\u017D\u017C\x03\x02\x02\x02\u017E\u0181\x03\x02\x02\x02\u017F\u017D\x03" +
		"\x02\x02\x02\u017F\u0180\x03\x02\x02\x02\u0180\u0182\x03\x02\x02\x02\u0181" +
		"\u017F\x03\x02\x02\x02\u0182\u0184\x05^0\x02\u0183\u017F\x03\x02\x02\x02";
	private static readonly _serializedATNSegment1: string =
		"\u0183\u0184\x03\x02\x02\x02\u0184\u0186\x03\x02\x02\x02\u0185\u0187\x05" +
		"\x18\r\x02\u0186\u0185\x03\x02\x02\x02\u0186\u0187\x03\x02\x02\x02\u0187" +
		"\x0F\x03\x02\x02\x02\u0188\u0190\x05\x16\f\x02\u0189\u018B\x071\x02\x02" +
		"\u018A\u0189\x03\x02\x02\x02\u018B\u018E\x03\x02\x02\x02\u018C\u018A\x03" +
		"\x02\x02\x02\u018C\u018D\x03\x02\x02\x02\u018D\u018F\x03\x02\x02\x02\u018E" +
		"\u018C\x03\x02\x02\x02\u018F\u0191\x05^0\x02\u0190\u018C\x03\x02\x02\x02" +
		"\u0190\u0191\x03\x02\x02\x02\u0191\u0193\x03\x02\x02\x02\u0192\u0194\x05" +
		"\x18\r\x02\u0193\u0192\x03\x02\x02\x02\u0193\u0194\x03\x02\x02\x02\u0194" +
		"\x11\x03\x02\x02\x02\u0195\u019D\x05\x14\v\x02\u0196\u0198\x071\x02\x02" +
		"\u0197\u0196\x03\x02\x02\x02\u0198\u019B\x03\x02\x02\x02\u0199\u0197\x03" +
		"\x02\x02\x02\u0199\u019A\x03\x02\x02\x02\u019A\u019C\x03\x02\x02\x02\u019B" +
		"\u0199\x03\x02\x02\x02\u019C\u019E\x05^0\x02\u019D\u0199\x03\x02\x02\x02" +
		"\u019D\u019E\x03\x02\x02\x02\u019E\u01A0\x03\x02\x02\x02\u019F\u01A1\x05" +
		"\x18\r\x02\u01A0\u019F\x03\x02\x02\x02\u01A0\u01A1\x03\x02\x02\x02\u01A1" +
		"\x13\x03\x02\x02\x02\u01A2\u01A3\x07F\x02\x02\u01A3\u01A4\x070\x02\x02" +
		"\u01A4\u01A5\x07\x19\x02\x02\u01A5\x15\x03\x02\x02\x02\u01A6\u01A7\x07" +
		"\x18\x02\x02\u01A7\u01A8\x05\xA0Q\x02\u01A8\u01A9\x07\x19\x02\x02\u01A9" +
		"\x17\x03\x02\x02\x02\u01AA\u01AB\x07G\x02\x02\u01AB\u01AC\x070\x02\x02" +
		"\u01AC\u01AD\x07\x19\x02\x02\u01AD\x19\x03\x02\x02\x02\u01AE\u01AF\x05" +
		"\xA0Q\x02\u01AF\x1B\x03\x02\x02\x02\u01B0\u01B1\x05\xA0Q\x02\u01B1\x1D" +
		"\x03\x02\x02\x02\u01B2\u01B3\x05\xA4S\x02\u01B3\u01B4\x05\x1C\x0F\x02" +
		"\u01B4\x1F\x03\x02\x02\x02\u01B5\u01CD\x07\x9A\x02\x02\u01B6\u01CD\x07" +
		"2\x02\x02\u01B7\u01CD\x05$\x13\x02\u01B8\u01CD\x05\x96L\x02\u01B9\u01CD" +
		"\x05\x80A\x02\u01BA\u01CD\x05v<\x02\u01BB\u01CD\x05\x8CG\x02\u01BC\u01CD" +
		"\x05\x88E\x02\u01BD\u01CD\x05\x8AF\x02\u01BE\u01CD\x05\xA0Q\x02\u01BF" +
		"\u01CD\x05|?\x02\u01C0\u01CD\x05\x8EH\x02\u01C1\u01CD\x05^0\x02\u01C2" +
		"\u01CD\x05h5\x02\u01C3\u01CD\x05Z.\x02\u01C4\u01CD\x05N(\x02\u01C5\u01CD" +
		"\x05P)\x02\u01C6\u01CD\x05T+\x02\u01C7\u01CD\x05R*\x02\u01C8\u01CD\x05" +
		"V,\x02\u01C9\u01CD\x05z>\x02\u01CA\u01CD\x05\x9CO\x02\u01CB\u01CD\x05" +
		"\xA8U\x02\u01CC\u01B5\x03\x02\x02\x02\u01CC\u01B6\x03\x02\x02\x02\u01CC" +
		"\u01B7\x03\x02\x02\x02\u01CC\u01B8\x03\x02\x02\x02\u01CC\u01B9\x03\x02" +
		"\x02\x02\u01CC\u01BA\x03\x02\x02\x02\u01CC\u01BB\x03\x02\x02\x02\u01CC" +
		"\u01BC\x03\x02\x02\x02\u01CC\u01BD\x03\x02\x02\x02\u01CC\u01BE\x03\x02" +
		"\x02\x02\u01CC\u01BF\x03\x02\x02\x02\u01CC\u01C0\x03\x02\x02\x02\u01CC" +
		"\u01C1\x03\x02\x02\x02\u01CC\u01C2\x03\x02\x02\x02\u01CC\u01C3\x03\x02" +
		"\x02\x02\u01CC\u01C4\x03\x02\x02\x02\u01CC\u01C5\x03\x02\x02\x02\u01CC" +
		"\u01C6\x03\x02\x02\x02\u01CC\u01C7\x03\x02\x02\x02\u01CC\u01C8\x03\x02" +
		"\x02\x02\u01CC\u01C9\x03\x02\x02\x02\u01CC\u01CA\x03\x02\x02\x02\u01CC" +
		"\u01CB\x03\x02\x02\x02\u01CD!\x03\x02\x02\x02\u01CE\u01CF\x05 \x11\x02" +
		"\u01CF#\x03\x02\x02\x02\u01D0\u01D8\x05&\x14\x02\u01D1\u01D7\x05&\x14" +
		"\x02\u01D2\u01D7\x05\x88E\x02\u01D3\u01D7\x05\x8AF\x02\u01D4\u01D7\x05" +
		"v<\x02\u01D5\u01D7\x05|?\x02\u01D6\u01D1\x03\x02\x02\x02\u01D6\u01D2\x03" +
		"\x02\x02\x02\u01D6\u01D3\x03\x02\x02\x02\u01D6\u01D4\x03\x02\x02\x02\u01D6" +
		"\u01D5\x03\x02\x02\x02\u01D7\u01DA\x03\x02\x02\x02\u01D8\u01D6\x03\x02" +
		"\x02\x02\u01D8\u01D9\x03\x02\x02\x02\u01D9%\x03\x02\x02\x02\u01DA\u01D8" +
		"\x03\x02\x02\x02\u01DB\u01DF\x07\x0F\x02\x02\u01DC\u01E0\x07/\x02\x02" +
		"\u01DD\u01E0\x070\x02\x02\u01DE\u01E0\x03\x02\x02\x02\u01DF\u01DC\x03" +
		"\x02\x02\x02\u01DF\u01DD\x03\x02\x02\x02\u01DF\u01DE\x03\x02\x02\x02\u01E0" +
		"\u01E4\x03\x02\x02\x02\u01E1\u01E3\x05\xA0Q\x02\u01E2\u01E1\x03\x02\x02" +
		"\x02\u01E3\u01E6\x03\x02\x02\x02\u01E4\u01E2\x03\x02\x02\x02\u01E4\u01E5" +
		"\x03\x02\x02\x02\u01E5\u01E7\x03\x02\x02\x02\u01E6\u01E4\x03\x02\x02\x02" +
		"\u01E7\u01E8\x05\xA2R\x02\u01E8\'\x03\x02\x02\x02\u01E9\u01EA\x07\x1C" +
		"\x02\x02\u01EA)\x03\x02\x02\x02\u01EB\u01EC\x07D\x02\x02\u01EC\u01ED\x07" +
		"/\x02\x02\u01ED\u01EE\x07\x19\x02\x02\u01EE+\x03\x02\x02\x02\u01EF\u01F1" +
		"\x05.\x18\x02\u01F0\u01EF\x03\x02\x02\x02\u01F1\u01F4\x03\x02\x02\x02" +
		"\u01F2\u01F0\x03\x02\x02\x02\u01F2\u01F3\x03\x02\x02\x02\u01F3\u01FA\x03" +
		"\x02\x02\x02\u01F4\u01F2\x03\x02\x02\x02\u01F5\u01F9\x07\x86\x02\x02\u01F6" +
		"\u01F9\x07\x87\x02\x02\u01F7\u01F9\x050\x19\x02\u01F8\u01F5\x03\x02\x02" +
		"\x02\u01F8\u01F6\x03\x02\x02\x02\u01F8\u01F7\x03\x02\x02\x02\u01F9\u01FC" +
		"\x03\x02\x02\x02\u01FA\u01F8\x03\x02\x02\x02\u01FA\u01FB\x03\x02\x02\x02" +
		"\u01FB-\x03\x02\x02\x02\u01FC\u01FA\x03\x02\x02\x02\u01FD\u01FE\t\x03" +
		"\x02\x02\u01FE/\x03\x02\x02\x02\u01FF\u0209\x054\x1B\x02\u0200\u0209\x05" +
		"l7\x02\u0201\u0209\x056\x1C\x02\u0202\u0209\x058\x1D\x02\u0203\u0209\x05" +
		":\x1E\x02\u0204\u0209\x05<\x1F\x02\u0205\u0209\x05> \x02\u0206\u0209\x05" +
		"@!\x02\u0207\u0209\x07]\x02\x02\u0208\u01FF\x03\x02\x02\x02\u0208\u0200" +
		"\x03\x02\x02\x02\u0208\u0201\x03\x02\x02\x02\u0208\u0202\x03\x02\x02\x02" +
		"\u0208\u0203\x03\x02\x02\x02\u0208\u0204\x03\x02\x02\x02\u0208\u0205\x03" +
		"\x02\x02\x02\u0208\u0206\x03\x02\x02\x02\u0208\u0207\x03\x02\x02\x02\u0209" +
		"1\x03\x02\x02\x02\u020A\u0210\x07\x84\x02\x02\u020B\u0210\x07\x85\x02" +
		"\x02\u020C\u0210\x07\x86\x02\x02\u020D\u0210\x07\x87\x02\x02\u020E\u0210" +
		"\x03\x02\x02\x02\u020F\u020A\x03\x02\x02\x02\u020F\u020B\x03\x02\x02\x02" +
		"\u020F\u020C\x03\x02\x02\x02\u020F\u020D\x03\x02\x02\x02\u020F\u020E\x03" +
		"\x02\x02\x02\u02103\x03\x02\x02\x02\u0211\u0214\x07T\x02\x02\u0212\u0215" +
		"\x07*\x02\x02\u0213\u0215\x07\x97\x02\x02\u0214\u0212\x03\x02\x02\x02" +
		"\u0214\u0213\x03\x02\x02\x02\u0214\u0215\x03\x02\x02\x02\u0215\u0220\x03" +
		"\x02\x02\x02\u0216\u0218\x07k\x02\x02\u0217\u0219\x07*\x02\x02\u0218\u0217" +
		"\x03\x02\x02\x02\u0218\u0219\x03\x02\x02\x02\u0219\u0220\x03\x02\x02\x02" +
		"\u021A\u021C\x07U\x02\x02\u021B\u021D\x07*\x02\x02\u021C\u021B\x03\x02" +
		"\x02\x02\u021C\u021D\x03\x02\x02\x02\u021D\u0220\x03\x02\x02\x02\u021E" +
		"\u0220\x07V\x02\x02\u021F\u0211\x03\x02\x02\x02\u021F\u0216\x03\x02\x02" +
		"\x02\u021F\u021A\x03\x02\x02\x02\u021F\u021E\x03\x02\x02\x02\u02205\x03" +
		"\x02\x02\x02\u0221\u0224\t\x04\x02\x02\u0222\u0223\x07\x1A\x02\x02\u0223" +
		"\u0225\x07,\x02\x02\u0224\u0222\x03\x02\x02\x02\u0224\u0225\x03\x02\x02" +
		"\x02\u02257\x03\x02\x02\x02\u0226\u0227\t\x05\x02\x02\u02279\x03\x02\x02" +
		"\x02\u0228\u0229\t\x06\x02\x02\u0229;\x03\x02\x02\x02\u022A\u022B\t\x07" +
		"\x02\x02\u022B=\x03\x02\x02\x02\u022C\u022D\t\b\x02\x02\u022D?\x03\x02" +
		"\x02\x02\u022E\u022F\t\t\x02\x02\u022FA\x03\x02\x02\x02\u0230\u0231\t" +
		"\n\x02\x02\u0231C\x03\x02\x02\x02\u0232\u0233\t\v\x02\x02\u0233E\x03\x02" +
		"\x02\x02\u0234\u0235\t\f\x02\x02\u0235G\x03\x02\x02\x02\u0236\u0237\t" +
		"\r\x02\x02\u0237I\x03\x02\x02\x02\u0238\u023B\x07b\x02\x02\u0239\u023A" +
		"\x07\x1A\x02\x02\u023A\u023C\x07,\x02\x02\u023B\u0239\x03\x02\x02\x02" +
		"\u023B\u023C\x03\x02\x02\x02\u023C\u0248\x03\x02\x02\x02\u023D\u0240\x07" +
		"t\x02\x02\u023E\u023F\x07\x1A\x02\x02\u023F\u0241\x07,\x02\x02\u0240\u023E" +
		"\x03\x02\x02\x02\u0240\u0241\x03\x02\x02\x02\u0241\u0248\x03\x02\x02\x02" +
		"\u0242\u0245\x07\x80\x02\x02\u0243\u0244\x07\x1A\x02\x02\u0244\u0246\x07" +
		",\x02\x02\u0245\u0243\x03\x02\x02\x02\u0245\u0246\x03\x02\x02\x02\u0246" +
		"\u0248\x03\x02\x02\x02\u0247\u0238\x03\x02\x02\x02\u0247\u023D\x03\x02" +
		"\x02\x02\u0247\u0242\x03\x02\x02\x02\u0248K\x03\x02\x02\x02\u0249\u024A" +
		"\t\x0E\x02\x02\u024AM\x03\x02\x02\x02\u024B\u024C\x05B\"\x02\u024C\u024D" +
		"\x07\x1A\x02\x02\u024D\u024E\x05t;\x02\u024E\u024F\x07\x19\x02\x02\u024F" +
		"\u0252\x03\x02\x02\x02\u0250\u0252\x07-\x02\x02\u0251\u024B\x03\x02\x02" +
		"\x02\u0251\u0250\x03\x02\x02\x02\u0252O\x03\x02\x02\x02\u0253\u0254\x05" +
		"D#\x02\u0254\u0255\x07\x1A\x02\x02\u0255\u0256\x05t;\x02\u0256\u025B\x07" +
		"\x19\x02\x02\u0257\u0258\x07G\x02\x02\u0258\u0259\x05\xA6T\x02\u0259\u025A" +
		"\x07\x19\x02\x02\u025A\u025C\x03\x02\x02\x02\u025B\u0257\x03\x02\x02\x02" +
		"\u025B\u025C\x03\x02\x02\x02\u025CQ\x03\x02\x02\x02\u025D\u025E\x05H%" +
		"\x02\u025E\u025F\x07\x1A\x02\x02\u025F\u0260\x05t;\x02\u0260\u0265\x07" +
		"\x19\x02\x02\u0261\u0262\x07G\x02\x02\u0262\u0263\x05\xA6T\x02\u0263\u0264" +
		"\x07\x19\x02\x02\u0264\u0266\x03\x02\x02\x02\u0265\u0261\x03\x02\x02\x02" +
		"\u0265\u0266\x03\x02\x02\x02\u0266S\x03\x02\x02\x02\u0267\u0268\x05F$" +
		"\x02\u0268\u026B\x07\x1A\x02\x02\u0269\u026C\x05t;\x02\u026A\u026C\x05" +
		"r:\x02\u026B\u0269\x03\x02\x02\x02\u026B\u026A\x03\x02\x02\x02\u026C\u026D" +
		"\x03\x02\x02\x02\u026D\u0272\x07\x19\x02\x02\u026E\u026F\x07G\x02\x02" +
		"\u026F\u0270\x05\xA6T\x02\u0270\u0271\x07\x19\x02\x02\u0271\u0273\x03" +
		"\x02\x02\x02\u0272\u026E\x03\x02\x02\x02\u0272\u0273\x03\x02\x02\x02\u0273" +
		"U\x03\x02\x02\x02\u0274\u0278\x05X-\x02\u0275\u0277\x05p9\x02\u0276\u0275" +
		"\x03\x02\x02\x02\u0277\u027A\x03\x02\x02\x02\u0278\u0276\x03\x02\x02\x02" +
		"\u0278\u0279\x03\x02\x02\x02\u0279W\x03\x02\x02\x02\u027A\u0278\x03\x02" +
		"\x02\x02\u027B\u027C\x05L\'\x02\u027C\u0280\x07\x1A\x02\x02\u027D\u027F" +
		"\x07\x04\x02\x02\u027E\u027D\x03\x02\x02\x02\u027F\u0282\x03\x02\x02\x02" +
		"\u0280\u027E\x03\x02\x02\x02\u0280\u0281\x03\x02\x02\x02\u0281\u0283\x03" +
		"\x02\x02\x02\u0282\u0280\x03\x02\x02\x02\u0283\u0284\x05t;\x02\u0284\u0285" +
		"\x07\x19\x02\x02\u0285Y\x03\x02\x02\x02\u0286\u028A\x05\\/\x02\u0287\u0289" +
		"\x05p9\x02\u0288\u0287\x03\x02\x02\x02\u0289\u028C\x03\x02\x02\x02\u028A" +
		"\u0288\x03\x02\x02\x02\u028A\u028B\x03\x02\x02\x02\u028B[\x03\x02\x02" +
		"\x02\u028C\u028A\x03\x02\x02\x02\u028D\u028E\x05J&\x02\u028E\u028F\x07" +
		"\x1A\x02\x02\u028F\u0290\x05t;\x02\u0290\u0295\x07\x19\x02\x02\u0291\u0292" +
		"\x07G\x02\x02\u0292\u0293\x05\xA6T\x02\u0293\u0294\x07\x19\x02\x02\u0294" +
		"\u0296\x03\x02\x02\x02\u0295\u0291\x03\x02\x02\x02\u0295\u0296\x03\x02" +
		"\x02\x02\u0296]\x03\x02\x02\x02\u0297\u029B\x05`1\x02\u0298\u029A\x05" +
		"d3\x02\u0299\u0298\x03\x02\x02\x02\u029A\u029D\x03\x02\x02\x02\u029B\u0299" +
		"\x03\x02\x02\x02\u029B\u029C\x03\x02\x02\x02\u029C\u02A0\x03\x02\x02\x02" +
		"\u029D\u029B\x03\x02\x02\x02\u029E\u029F\x071\x02\x02\u029F\u02A1\x07" +
		"I\x02\x02\u02A0\u029E\x03\x02\x02\x02\u02A0\u02A1\x03\x02\x02\x02\u02A1" +
		"_\x03\x02\x02\x02\u02A2\u02A3\x05b2\x02\u02A3\u02A7\x07\x1A\x02\x02\u02A4" +
		"\u02A6\x07\x04\x02\x02\u02A5\u02A4\x03\x02\x02\x02\u02A6\u02A9\x03\x02" +
		"\x02\x02\u02A7\u02A5\x03\x02\x02\x02\u02A7\u02A8\x03\x02\x02\x02\u02A8" +
		"\u02AA\x03\x02\x02\x02\u02A9\u02A7\x03\x02\x02\x02\u02AA\u02AB\x05t;\x02" +
		"\u02AB\u02AC\x07\x19\x02\x02\u02ACa\x03\x02\x02\x02\u02AD\u02B0\x07_\x02" +
		"\x02\u02AE\u02B1\x07*\x02\x02\u02AF\u02B1\x07\x97\x02\x02\u02B0\u02AE" +
		"\x03\x02\x02\x02\u02B0\u02AF\x03\x02\x02\x02\u02B0\u02B1\x03\x02\x02\x02" +
		"\u02B1\u02BC\x03\x02\x02\x02\u02B2\u02B4\x07s\x02\x02\u02B3\u02B5\x07" +
		"*\x02\x02\u02B4\u02B3\x03\x02\x02\x02\u02B4\u02B5\x03\x02\x02\x02\u02B5" +
		"\u02BC\x03\x02\x02\x02\u02B6\u02B8\x07`\x02\x02\u02B7\u02B9\x07*\x02\x02" +
		"\u02B8\u02B7\x03\x02\x02\x02\u02B8\u02B9\x03\x02\x02\x02\u02B9\u02BC\x03" +
		"\x02\x02\x02\u02BA\u02BC\x07a\x02\x02\u02BB\u02AD\x03\x02\x02\x02\u02BB" +
		"\u02B2\x03\x02\x02\x02\u02BB\u02B6\x03\x02\x02\x02\u02BB\u02BA\x03\x02" +
		"\x02\x02\u02BCc\x03\x02\x02\x02\u02BD\u02BE\x07E\x02\x02\u02BE\u02BF\x07" +
		"\x1A\x02\x02\u02BF\u02C0\x05t;\x02\u02C0\u02C1\x07\x19\x02\x02\u02C1\u02CF" +
		"\x03\x02\x02\x02\u02C2\u02C3\t\x0F\x02\x02\u02C3\u02C4\x07\x1A\x02\x02" +
		"\u02C4\u02C5\x07/\x02\x02\u02C5\u02CF\x07\x19\x02\x02\u02C6\u02CA\t\x10" +
		"\x02\x02\u02C7\u02C9\v\x02\x02\x02\u02C8\u02C7\x03\x02\x02\x02\u02C9\u02CC" +
		"\x03\x02\x02\x02\u02CA\u02CB\x03\x02\x02\x02\u02CA\u02C8\x03\x02\x02\x02" +
		"\u02CB\u02CD\x03\x02\x02\x02\u02CC\u02CA\x03\x02\x02\x02\u02CD\u02CF\x07" +
		"\x19\x02\x02\u02CE\u02BD\x03\x02\x02\x02\u02CE\u02C2\x03\x02\x02\x02\u02CE" +
		"\u02C6\x03\x02\x02\x02\u02CFe\x03\x02\x02\x02\u02D0\u02D1\x07E\x02\x02" +
		"\u02D1\u02D2\x07\x1A\x02\x02\u02D2\u02D3\x05t;\x02\u02D3\u02D4\x07\x19" +
		"\x02\x02\u02D4\u02E2\x03\x02\x02\x02\u02D5\u02D6\t\x0F\x02\x02\u02D6\u02D7" +
		"\x07\x1A\x02\x02\u02D7\u02D8\x07/\x02\x02\u02D8\u02E2\x07\x19\x02\x02" +
		"\u02D9\u02DD\t\x10\x02\x02\u02DA\u02DC\v\x02\x02\x02\u02DB\u02DA\x03\x02" +
		"\x02\x02\u02DC\u02DF\x03\x02\x02\x02\u02DD\u02DE\x03\x02\x02\x02\u02DD" +
		"\u02DB\x03\x02\x02\x02\u02DE\u02E0\x03\x02\x02\x02\u02DF\u02DD\x03\x02" +
		"\x02\x02\u02E0\u02E2\x07\x19\x02\x02\u02E1\u02D0\x03\x02\x02\x02\u02E1" +
		"\u02D5\x03\x02\x02\x02\u02E1\u02D9\x03\x02\x02\x02\u02E2g\x03\x02\x02" +
		"\x02\u02E3\u02E7\x05j6\x02\u02E4\u02E6\x05p9\x02\u02E5\u02E4\x03\x02\x02" +
		"\x02\u02E6\u02E9\x03\x02\x02\x02\u02E7\u02E5\x03\x02\x02\x02\u02E7\u02E8" +
		"\x03\x02\x02\x02\u02E8i\x03\x02\x02\x02\u02E9\u02E7\x03\x02\x02\x02\u02EA" +
		"\u02EB\x05n8\x02\u02EB\u02EC\x07\x1A\x02\x02\u02EC\u02ED\x05t;\x02\u02ED" +
		"\u02F2\x07\x19\x02\x02\u02EE\u02EF\x07G\x02\x02\u02EF\u02F0\x05\xA6T\x02" +
		"\u02F0\u02F1\x07\x19\x02\x02\u02F1\u02F3\x03\x02\x02\x02\u02F2\u02EE\x03" +
		"\x02\x02\x02\u02F2\u02F3\x03\x02\x02\x02\u02F3k\x03\x02\x02\x02\u02F4" +
		"\u02F7\x07S\x02\x02\u02F5\u02F6\x07\x1A\x02\x02\u02F6\u02F8\x07+\x02\x02" +
		"\u02F7\u02F5\x03\x02\x02\x02\u02F7\u02F8\x03\x02\x02\x02\u02F8\u02FF\x03" +
		"\x02\x02\x02\u02F9\u02FC\x07j\x02\x02\u02FA\u02FB\x07\x1A\x02\x02\u02FB" +
		"\u02FD\x07+\x02\x02\u02FC\u02FA\x03\x02\x02\x02\u02FC\u02FD\x03\x02\x02" +
		"\x02\u02FD\u02FF\x03\x02\x02\x02\u02FE\u02F4\x03\x02\x02\x02\u02FE\u02F9" +
		"\x03\x02\x02\x02\u02FFm\x03\x02\x02\x02\u0300\u0303\x07^\x02\x02\u0301" +
		"\u0302\x07\x1A\x02\x02\u0302\u0304\x07+\x02\x02\u0303\u0301\x03\x02\x02" +
		"\x02\u0303\u0304\x03\x02\x02\x02\u0304\u0310\x03\x02\x02\x02\u0305\u0308" +
		"\x07r\x02\x02\u0306\u0307\x07\x1A\x02\x02\u0307\u0309\x07+\x02\x02\u0308" +
		"\u0306\x03\x02\x02\x02\u0308\u0309\x03\x02\x02\x02\u0309\u0310\x03\x02" +
		"\x02\x02\u030A\u030D\x07\x81\x02\x02\u030B\u030C\x07\x1A\x02\x02\u030C" +
		"\u030E\x07+\x02\x02\u030D\u030B\x03\x02\x02\x02\u030D\u030E\x03\x02\x02" +
		"\x02\u030E\u0310\x03\x02\x02\x02\u030F\u0300\x03\x02\x02\x02\u030F\u0305" +
		"\x03\x02\x02\x02\u030F\u030A\x03\x02\x02\x02\u0310o\x03\x02\x02\x02\u0311" +
		"\u0312\x07\x12\x02\x02\u0312\u0315\x05\xA0Q\x02\u0313\u0315\x07E\x02\x02" +
		"\u0314\u0311\x03\x02\x02\x02\u0314\u0313\x03\x02\x02\x02\u0315\u0316\x03" +
		"\x02\x02\x02\u0316\u031A\x07\x1A\x02\x02\u0317\u0319\x07\x04\x02\x02\u0318" +
		"\u0317\x03\x02\x02\x02\u0319\u031C\x03\x02\x02\x02\u031A\u0318\x03\x02" +
		"\x02\x02\u031A\u031B\x03\x02\x02\x02\u031B\u031F\x03\x02\x02\x02\u031C" +
		"\u031A\x03\x02\x02\x02\u031D\u0320\x05\xA0Q\x02\u031E\u0320\x071\x02\x02" +
		"\u031F\u031D\x03\x02\x02\x02\u031F\u031E\x03\x02\x02\x02\u0320\u0321\x03" +
		"\x02\x02\x02\u0321\u031F\x03\x02\x02\x02\u0321\u0322\x03\x02\x02\x02\u0322" +
		"\u0323\x03\x02\x02\x02\u0323\u0331\x07\x19\x02\x02\u0324\u0325\t\x0F\x02" +
		"\x02\u0325\u0326\x07\x1A\x02\x02\u0326\u0327\x07/\x02\x02\u0327\u0331" +
		"\x07\x19\x02\x02\u0328\u032C\t\x10\x02\x02\u0329\u032B\v\x02\x02\x02\u032A" +
		"\u0329\x03\x02\x02\x02\u032B\u032E\x03\x02\x02\x02\u032C\u032D\x03\x02" +
		"\x02\x02\u032C\u032A\x03\x02\x02\x02\u032D\u032F\x03\x02\x02\x02\u032E" +
		"\u032C\x03\x02\x02\x02\u032F\u0331\x07\x19\x02\x02\u0330\u0314\x03\x02" +
		"\x02\x02\u0330\u0324\x03\x02\x02\x02\u0330\u0328\x03\x02\x02\x02\u0331" +
		"q\x03\x02\x02\x02\u0332\u0333\x07\x96\x02\x02\u0333\u0334\x07\x1D\x02" +
		"\x02\u0334\u0335\x07/\x02\x02\u0335s\x03\x02\x02\x02\u0336\u0337\x07\x99" +
		"\x02\x02\u0337u\x03\x02\x02\x02\u0338\u0339\x07\x17\x02\x02\u0339\u0341" +
		"\x07\x19\x02\x02\u033A\u033C\x07\x04\x02\x02\u033B\u033A\x03\x02\x02\x02" +
		"\u033C\u033F\x03\x02\x02\x02\u033D\u033B\x03\x02\x02\x02\u033D\u033E\x03" +
		"\x02\x02\x02\u033E\u0340\x03\x02\x02\x02\u033F\u033D\x03\x02\x02\x02\u0340" +
		"\u0342\x05x=\x02\u0341\u033D\x03\x02\x02\x02\u0341\u0342\x03\x02\x02\x02" +
		"\u0342\u0357\x03\x02\x02\x02\u0343\u0344\x07\x17\x02\x02\u0344\u0349\x05" +
		"\xA0Q\x02\u0345\u0348\x07\x1A\x02\x02\u0346\u0348\x05\xA6T\x02\u0347\u0345" +
		"\x03\x02\x02\x02\u0347\u0346\x03\x02\x02\x02\u0348\u034B\x03\x02\x02\x02" +
		"\u0349\u0347\x03\x02\x02\x02\u0349\u034A\x03\x02\x02\x02\u034A\u034C\x03" +
		"\x02\x02\x02\u034B\u0349\x03\x02\x02\x02\u034C\u0354\x07\x19\x02\x02\u034D" +
		"\u034F\x07\x04\x02\x02\u034E\u034D\x03\x02\x02\x02\u034F\u0352\x03\x02" +
		"\x02\x02\u0350\u034E\x03\x02\x02\x02\u0350\u0351\x03\x02\x02\x02\u0351" +
		"\u0353\x03\x02\x02\x02\u0352\u0350\x03\x02\x02\x02\u0353\u0355\x05x=\x02" +
		"\u0354\u0350\x03\x02\x02\x02\u0354\u0355\x03\x02\x02\x02\u0355\u0357\x03" +
		"\x02\x02\x02\u0356\u0338\x03\x02\x02\x02\u0356\u0343\x03\x02\x02\x02\u0357" +
		"w\x03\x02\x02\x02\u0358\u0359\x07\x17\x02\x02\u0359\u035E\x05\xA0Q\x02" +
		"\u035A\u035D\x07\x1A\x02\x02\u035B\u035D\x05\xA6T\x02\u035C\u035A\x03" +
		"\x02\x02\x02\u035C\u035B\x03\x02\x02\x02\u035D\u0360\x03\x02\x02\x02\u035E" +
		"\u035C\x03\x02\x02\x02\u035E\u035F\x03\x02\x02\x02\u035F\u0361\x03\x02" +
		"\x02\x02\u0360\u035E\x03\x02\x02\x02\u0361\u0362\x07\x19\x02\x02\u0362" +
		"y\x03\x02\x02\x02\u0363\u0365\x07\f\x02\x02\u0364\u0366\x05\xA0Q\x02\u0365" +
		"\u0364\x03\x02\x02\x02\u0365\u0366\x03\x02\x02\x02\u0366\u0367\x03\x02" +
		"\x02\x02\u0367\u036E\x07\x19\x02\x02\u0368\u036A\x07\r\x02\x02\u0369\u036B" +
		"\x05\xA0Q\x02\u036A\u0369\x03\x02\x02\x02\u036A\u036B\x03\x02\x02\x02" +
		"\u036B\u036C\x03\x02\x02\x02\u036C\u036E\x07\x19\x02\x02\u036D\u0363\x03" +
		"\x02\x02\x02\u036D\u0368\x03\x02\x02\x02\u036E{\x03\x02\x02\x02\u036F" +
		"\u0377\x07?\x02\x02\u0370\u0377\x07=\x02\x02\u0371\u0373\x07>\x02\x02" +
		"\u0372\u0374\x073\x02\x02\u0373\u0372\x03\x02\x02\x02\u0373\u0374\x03" +
		"\x02\x02\x02\u0374\u0375\x03\x02\x02\x02\u0375\u0377\x07\x02\x02\x03\u0376" +
		"\u036F\x03\x02\x02\x02\u0376\u0370\x03\x02\x02\x02\u0376\u0371\x03\x02" +
		"\x02\x02\u0377}\x03\x02\x02\x02\u0378\u037A\x07i\x02\x02\u0379\u037B\x05" +
		"\xA0Q\x02\u037A\u0379\x03\x02\x02\x02\u037A\u037B\x03\x02\x02\x02\u037B" +
		"\u0391\x03\x02\x02\x02\u037C\u0386\x05\xA0Q\x02\u037D\u0381\x071\x02\x02" +
		"\u037E\u0380\x07\x04\x02\x02\u037F\u037E\x03\x02\x02\x02\u0380\u0383\x03" +
		"\x02\x02\x02\u0381\u037F\x03\x02\x02\x02\u0381\u0382\x03\x02\x02\x02\u0382" +
		"\u0385\x03\x02\x02\x02\u0383\u0381\x03\x02\x02\x02\u0384\u037D\x03\x02" +
		"\x02\x02\u0385\u0388\x03\x02\x02\x02\u0386\u0384\x03\x02\x02\x02\u0386" +
		"\u0387\x03\x02\x02\x02\u0387\u038C\x03\x02\x02\x02\u0388\u0386\x03\x02" +
		"\x02\x02\u0389\u038B\x071\x02\x02\u038A\u0389\x03\x02\x02\x02\u038B\u038E" +
		"\x03\x02\x02\x02\u038C\u038A\x03\x02\x02\x02\u038C\u038D\x03\x02\x02\x02" +
		"\u038D\u0390\x03\x02\x02\x02\u038E\u038C\x03\x02\x02\x02\u038F\u037C\x03" +
		"\x02\x02\x02\u0390\u0393\x03\x02\x02\x02\u0391\u038F\x03\x02\x02\x02\u0391" +
		"\u0392\x03\x02\x02\x02\u0392\u0394\x03\x02\x02\x02\u0393\u0391\x03\x02" +
		"\x02\x02\u0394\u03A0\x07\x19\x02\x02\u0395\u039B\x07i\x02\x02\u0396\u039A" +
		"\x05\xA0Q\x02\u0397\u039A\x071\x02\x02\u0398\u039A\x07\x04\x02\x02\u0399" +
		"\u0396\x03\x02\x02\x02\u0399\u0397\x03\x02\x02\x02\u0399\u0398\x03\x02" +
		"\x02\x02\u039A\u039D\x03\x02\x02\x02\u039B\u0399\x03\x02\x02\x02\u039B" +
		"\u039C\x03\x02\x02\x02\u039C\u039E\x03\x02\x02\x02\u039D\u039B\x03\x02" +
		"\x02\x02\u039E\u03A0\x07\x02\x02\x03\u039F\u0378\x03\x02\x02\x02\u039F" +
		"\u0395\x03\x02\x02\x02\u03A0\x7F\x03\x02\x02\x02\u03A1\u03A6\x077\x02" +
		"\x02\u03A2\u03A7\x05\xA0Q\x02\u03A3\u03A7\x07\x1A\x02\x02\u03A4\u03A7" +
		"\x07\x99\x02\x02\u03A5\u03A7\x071\x02\x02\u03A6\u03A2\x03\x02\x02\x02" +
		"\u03A6\u03A3\x03\x02\x02\x02\u03A6\u03A4\x03\x02\x02\x02\u03A6\u03A5\x03" +
		"\x02\x02\x02\u03A7\u03A8\x03\x02\x02\x02\u03A8\u03A6\x03\x02\x02\x02\u03A8" +
		"\u03A9\x03\x02\x02\x02\u03A9\u03AA\x03\x02\x02\x02\u03AA\u03B8\x07\x19" +
		"\x02\x02\u03AB\u03B3\x077\x02\x02\u03AC\u03B2\x05\xA0Q\x02\u03AD\u03B2" +
		"\x07\x1A\x02\x02\u03AE\u03B2\x07\x99\x02\x02\u03AF\u03B2\x071\x02\x02" +
		"\u03B0\u03B2\x07\x04\x02\x02\u03B1\u03AC\x03\x02\x02\x02\u03B1\u03AD\x03" +
		"\x02\x02\x02\u03B1\u03AE\x03\x02\x02\x02\u03B1\u03AF\x03\x02\x02\x02\u03B1" +
		"\u03B0\x03\x02\x02\x02\u03B2\u03B5\x03\x02\x02\x02\u03B3\u03B1\x03\x02" +
		"\x02\x02\u03B3\u03B4\x03\x02\x02\x02\u03B4\u03B6\x03\x02\x02\x02\u03B5" +
		"\u03B3\x03\x02\x02\x02\u03B6\u03B8\x07\x02\x02\x03\u03B7\u03A1\x03\x02" +
		"\x02\x02\u03B7\u03AB\x03\x02\x02\x02\u03B8\x81\x03\x02\x02\x02\u03B9\u03BA" +
		"\x076\x02\x02\u03BA\u03BB\x05\xA0Q\x02\u03BB\u03BC\x07\x19\x02\x02\u03BC" +
		"\x83\x03\x02\x02\x02\u03BD\u03C1\x07P\x02\x02\u03BE\u03C2\x05\xA0Q\x02" +
		"\u03BF\u03C2\x07\x1A\x02\x02\u03C0\u03C2\x071\x02\x02\u03C1\u03BE\x03" +
		"\x02\x02\x02\u03C1\u03BF\x03\x02\x02\x02\u03C1\u03C0\x03\x02\x02\x02\u03C2" +
		"\u03C3\x03\x02\x02\x02\u03C3\u03C1\x03\x02\x02\x02\u03C3\u03C4\x03\x02" +
		"\x02\x02\u03C4\u03C5\x03\x02\x02\x02\u03C5\u03C7\x07\x19\x02\x02\u03C6" +
		"\u03C8\x05\x86D\x02\u03C7\u03C6\x03\x02\x02\x02\u03C7\u03C8\x03\x02\x02" +
		"\x02\u03C8\x85\x03\x02\x02\x02\u03C9\u03CD\x07P\x02\x02\u03CA\u03CE\x05" +
		"\xA0Q\x02\u03CB\u03CE\x07\x1A\x02\x02\u03CC\u03CE\x071\x02\x02\u03CD\u03CA" +
		"\x03\x02\x02\x02\u03CD\u03CB\x03\x02\x02\x02\u03CD\u03CC\x03\x02\x02\x02" +
		"\u03CE\u03CF\x03\x02\x02\x02\u03CF\u03CD\x03\x02\x02\x02\u03CF\u03D0\x03" +
		"\x02\x02\x02\u03D0\u03D1\x03\x02\x02\x02\u03D1\u03D2\x07\x19\x02\x02\u03D2" +
		"\x87\x03\x02\x02\x02\u03D3\u03D7\x07\x10\x02\x02\u03D4\u03D6\x071\x02" +
		"\x02\u03D5\u03D4\x03\x02\x02\x02\u03D6\u03D9\x03\x02\x02\x02\u03D7\u03D5" +
		"\x03\x02\x02\x02\u03D7\u03D8\x03\x02\x02\x02\u03D8\u03DB\x03\x02\x02\x02" +
		"\u03D9\u03D7\x03\x02\x02\x02\u03DA\u03DC\x05\xA0Q\x02\u03DB\u03DA\x03" +
		"\x02\x02\x02\u03DB\u03DC\x03\x02\x02\x02\u03DC\u03F2\x03\x02\x02\x02\u03DD" +
		"\u03E7\x05\xA0Q\x02\u03DE\u03E2\x071\x02\x02\u03DF\u03E1\x07\x04\x02\x02" +
		"\u03E0\u03DF\x03\x02\x02\x02\u03E1\u03E4\x03\x02\x02\x02\u03E2\u03E0\x03" +
		"\x02\x02\x02\u03E2\u03E3\x03\x02\x02\x02\u03E3\u03E6\x03\x02\x02\x02\u03E4" +
		"\u03E2\x03\x02\x02\x02\u03E5\u03DE\x03\x02\x02\x02\u03E6\u03E9\x03\x02" +
		"\x02\x02\u03E7\u03E5\x03\x02\x02\x02\u03E7\u03E8\x03\x02\x02\x02\u03E8" +
		"\u03ED\x03\x02\x02\x02\u03E9\u03E7\x03\x02\x02\x02\u03EA\u03EC\x071\x02" +
		"\x02\u03EB\u03EA\x03\x02\x02\x02\u03EC\u03EF\x03\x02\x02\x02\u03ED\u03EB" +
		"\x03\x02\x02\x02\u03ED\u03EE\x03\x02\x02\x02\u03EE\u03F1\x03\x02\x02\x02" +
		"\u03EF\u03ED\x03\x02\x02\x02\u03F0\u03DD\x03\x02\x02\x02\u03F1\u03F4\x03" +
		"\x02\x02\x02\u03F2\u03F0\x03\x02\x02\x02\u03F2\u03F3\x03\x02\x02\x02\u03F3" +
		"\u03F5\x03\x02\x02\x02\u03F4\u03F2\x03\x02\x02\x02\u03F5\u0402\x07\x19" +
		"\x02\x02\u03F6\u03FA\x07\x10\x02\x02\u03F7\u03F9\x071\x02\x02\u03F8\u03F7" +
		"\x03\x02\x02\x02\u03F9\u03FC\x03\x02\x02\x02\u03FA\u03F8\x03\x02\x02\x02" +
		"\u03FA\u03FB\x03\x02\x02\x02\u03FB\u03FE\x03\x02\x02\x02\u03FC\u03FA\x03" +
		"\x02\x02\x02\u03FD\u03FF\x05\xA0Q\x02\u03FE\u03FD\x03\x02\x02\x02\u03FE" +
		"\u03FF\x03\x02\x02\x02\u03FF\u0400\x03\x02\x02\x02\u0400\u0402\x07\x02" +
		"\x02\x03\u0401\u03D3\x03\x02\x02\x02\u0401\u03F6\x03\x02\x02\x02\u0402" +
		"\x89\x03\x02\x02\x02\u0403\u0405\x07\x11\x02\x02\u0404\u0406\n\x11\x02" +
		"\x02\u0405\u0404\x03\x02\x02\x02\u0406\u0407\x03\x02\x02\x02\u0407\u0405" +
		"\x03\x02\x02\x02\u0407\u0408\x03\x02\x02\x02\u0408\u0409\x03\x02\x02\x02" +
		"\u0409\u040A\x07\x19\x02\x02\u040A\x8B\x03\x02\x02\x02\u040B\u040E\x07" +
		"\x18\x02\x02\u040C\u040F\x05\xA0Q\x02\u040D\u040F\x071\x02\x02\u040E\u040C" +
		"\x03\x02\x02\x02\u040E\u040D\x03\x02\x02\x02\u040F\u0410\x03\x02\x02\x02" +
		"\u0410\u040E\x03\x02\x02\x02\u0410\u0411\x03\x02\x02\x02\u0411\u0412\x03" +
		"\x02\x02\x02\u0412\u0418\x07\x19\x02\x02\u0413\u0414\x07\x18\x02\x02\u0414" +
		"\u0415\x05\xA0Q\x02\u0415\u0416\x07\x02\x02\x03\u0416\u0418\x03\x02\x02" +
		"\x02\u0417\u040B\x03\x02\x02\x02\u0417\u0413\x03\x02\x02\x02\u0418\x8D" +
		"\x03\x02\x02\x02\u0419\u041A\x07B\x02\x02\u041A\u041B\x05\xA0Q\x02\u041B" +
		"\u041C\x07\x19\x02\x02\u041C\u0422\x03\x02\x02\x02\u041D\u041E\x07C\x02" +
		"\x02\u041E\u041F\x05\xA0Q\x02\u041F\u0420\x07\x19\x02\x02\u0420\u0422" +
		"\x03\x02\x02\x02\u0421\u0419\x03\x02\x02\x02\u0421\u041D";
	private static readonly _serializedATNSegment2: string =
		"\x03\x02\x02\x02\u0422\x8F\x03\x02\x02\x02\u0423\u0424\x07:\x02\x02\u0424" +
		"\u0425\x07\x1A\x02\x02\u0425\u0426\x07/\x02\x02\u0426\u042D\x07\x19\x02" +
		"\x02\u0427\u0428\x07:\x02\x02\u0428\u0429\x07\x1A\x02\x02\u0429\u042A" +
		"\x05\xA0Q\x02\u042A\u042B\x07\x19\x02\x02\u042B\u042D\x03\x02\x02\x02" +
		"\u042C\u0423\x03\x02\x02\x02\u042C\u0427\x03\x02\x02\x02\u042D\x91\x03" +
		"\x02\x02\x02\u042E\u042F\x07N\x02\x02\u042F\u0430\x05\xA0Q\x02\u0430\u0431" +
		"\x07\x19\x02\x02\u0431\x93\x03\x02\x02\x02\u0432\u0433\x07O\x02\x02\u0433" +
		"\u0434\x05\xA0Q\x02\u0434\u0435\x07\x19\x02\x02\u0435\x95\x03\x02\x02" +
		"\x02\u0436\u0440\x05\x98M\x02\u0437\u0439\x071\x02\x02\u0438\u0437\x03" +
		"\x02\x02\x02\u0439\u043C\x03\x02\x02\x02\u043A\u0438\x03\x02\x02\x02\u043A" +
		"\u043B\x03\x02\x02\x02\u043B\u043D\x03\x02\x02\x02\u043C\u043A\x03\x02" +
		"\x02\x02\u043D\u043F\x05\x98M\x02\u043E\u043A\x03\x02\x02\x02\u043F\u0442" +
		"\x03\x02\x02\x02\u0440\u043E\x03\x02\x02\x02\u0440\u0441\x03\x02\x02\x02" +
		"\u0441\x97\x03\x02\x02\x02\u0442\u0440\x03\x02\x02\x02\u0443\u0444\x07" +
		"\x12\x02\x02\u0444\u0445\x05\xA0Q\x02\u0445\u0446\t\x12\x02\x02\u0446" +
		"\u044C\x05\xA0Q\x02\u0447\u044B\x071\x02\x02\u0448\u044B\x07\x1A\x02\x02" +
		"\u0449\u044B\x05\xA0Q\x02\u044A\u0447\x03\x02\x02\x02\u044A\u0448\x03" +
		"\x02\x02\x02\u044A\u0449\x03\x02\x02\x02\u044B\u044E\x03\x02\x02\x02\u044C" +
		"\u044A\x03\x02\x02\x02\u044C\u044D\x03\x02\x02\x02\u044D\u044F\x03\x02" +
		"\x02\x02\u044E\u044C\x03\x02\x02\x02\u044F\u0450\x07\x19\x02\x02\u0450" +
		"\u045A\x03\x02\x02\x02\u0451\u0455\x07L\x02\x02\u0452\u0454\v\x02\x02" +
		"\x02\u0453\u0452\x03\x02\x02\x02\u0454\u0457\x03\x02\x02\x02\u0455\u0456" +
		"\x03\x02\x02\x02\u0455\u0453\x03\x02\x02\x02\u0456\u0458\x03\x02\x02\x02" +
		"\u0457\u0455\x03\x02\x02\x02\u0458\u045A\x07\x19\x02\x02\u0459\u0443\x03" +
		"\x02\x02\x02\u0459\u0451\x03\x02\x02\x02\u045A\x99\x03\x02\x02\x02\u045B" +
		"\u045F\x07\t\x02\x02\u045C\u0460\x05\xA0Q\x02\u045D\u0460\x07\x1A\x02" +
		"\x02\u045E\u0460\x071\x02\x02\u045F\u045C\x03\x02\x02\x02\u045F\u045D" +
		"\x03\x02\x02\x02\u045F\u045E\x03\x02\x02\x02\u0460\u0461\x03\x02\x02\x02" +
		"\u0461\u045F\x03\x02\x02\x02\u0461\u0462\x03\x02\x02\x02\u0462\u0463\x03" +
		"\x02\x02\x02\u0463\u046F\x07\x19\x02\x02\u0464\u046A\x07\t\x02\x02\u0465" +
		"\u0469\x05\xA0Q\x02\u0466\u0469\x07\x1A\x02\x02\u0467\u0469\x071\x02\x02" +
		"\u0468\u0465\x03\x02\x02\x02\u0468\u0466\x03\x02\x02\x02\u0468\u0467\x03" +
		"\x02\x02\x02\u0469\u046C\x03\x02\x02\x02\u046A\u0468\x03\x02\x02\x02\u046A" +
		"\u046B\x03\x02\x02\x02\u046B\u046D\x03\x02\x02\x02\u046C\u046A\x03\x02" +
		"\x02\x02\u046D\u046F\x07\x02\x02\x03\u046E\u045B\x03\x02\x02\x02\u046E" +
		"\u0464\x03\x02\x02\x02\u046F\x9B\x03\x02\x02\x02\u0470\u0472\x07\x0E\x02" +
		"\x02\u0471\u0473\x05\xA0Q\x02\u0472\u0471\x03\x02\x02\x02\u0472\u0473" +
		"\x03\x02\x02\x02\u0473\u0474\x03\x02\x02\x02\u0474\u0475\x07\x19\x02\x02" +
		"\u0475\x9D\x03\x02\x02\x02\u0476\u0478\x05\xA0Q\x02\u0477\u0479\x071\x02" +
		"\x02\u0478\u0477\x03\x02\x02\x02\u0478\u0479\x03\x02\x02\x02\u0479\u047B" +
		"\x03\x02\x02\x02\u047A\u0476\x03\x02\x02\x02\u047B\u047C\x03\x02\x02\x02" +
		"\u047C\u047A\x03\x02\x02\x02\u047C\u047D\x03\x02\x02\x02\u047D\x9F\x03" +
		"\x02\x02\x02\u047E\u0485\x070\x02\x02\u047F\u0481\x07\x04\x02\x02\u0480" +
		"\u047F\x03\x02\x02\x02\u0481\u0482\x03\x02\x02\x02\u0482\u0480\x03\x02" +
		"\x02\x02\u0482\u0483\x03\x02\x02\x02\u0483\u0484\x03\x02\x02\x02\u0484" +
		"\u0486\x07/\x02\x02\u0485\u0480\x03\x02\x02\x02\u0485\u0486\x03\x02\x02" +
		"\x02\u0486\u04AD\x03\x02\x02\x02\u0487\u048E\x05\xA6T\x02\u0488\u048A" +
		"\x07\x04\x02\x02\u0489\u0488\x03\x02\x02\x02\u048A\u048B\x03\x02\x02\x02" +
		"\u048B\u0489\x03\x02\x02\x02\u048B\u048C\x03\x02\x02\x02\u048C\u048D\x03" +
		"\x02\x02\x02\u048D\u048F\x07/\x02\x02\u048E\u0489\x03\x02\x02\x02\u048E" +
		"\u048F\x03\x02\x02\x02\u048F\u04AD\x03\x02\x02\x02\u0490\u0491\x07\x15" +
		"\x02\x02\u0491\u0492\x05\xA0Q\x02\u0492\u0493\x07\x19\x02\x02\u0493\u04AD" +
		"\x03\x02\x02\x02\u0494\u04AD\x07/\x02\x02\u0495\u0497\x07\x04\x02\x02" +
		"\u0496\u0495\x03\x02\x02\x02\u0497\u049A\x03\x02\x02\x02\u0498\u0496\x03" +
		"\x02\x02\x02\u0498\u0499\x03\x02\x02\x02\u0499\u049B\x03\x02\x02\x02\u049A" +
		"\u0498\x03\x02\x02\x02\u049B\u049F\x07\x1A\x02\x02\u049C\u049E\x07\x04" +
		"\x02\x02\u049D\u049C\x03\x02\x02\x02\u049E\u04A1\x03\x02\x02\x02\u049F" +
		"\u049D\x03\x02\x02\x02\u049F\u04A0\x03\x02\x02\x02\u04A0\u04AD\x03\x02" +
		"\x02\x02\u04A1\u049F\x03\x02\x02\x02\u04A2\u04A6\x07\x1B\x02\x02\u04A3" +
		"\u04A5\x07\x04\x02\x02\u04A4\u04A3\x03\x02\x02\x02\u04A5\u04A8\x03\x02" +
		"\x02\x02\u04A6\u04A4\x03\x02\x02\x02\u04A6\u04A7\x03\x02\x02\x02\u04A7" +
		"\u04AD\x03\x02\x02\x02\u04A8\u04A6\x03\x02\x02\x02\u04A9\u04AD\x07\x1C" +
		"\x02\x02\u04AA\u04AD\x07#\x02\x02\u04AB\u04AD\x07\x99\x02\x02\u04AC\u047E" +
		"\x03\x02\x02\x02\u04AC\u0487\x03\x02\x02\x02\u04AC\u0490\x03\x02\x02\x02" +
		"\u04AC\u0494\x03\x02\x02\x02\u04AC\u0498\x03\x02\x02\x02\u04AC\u04A2\x03" +
		"\x02\x02\x02\u04AC\u04A9\x03\x02\x02\x02\u04AC\u04AA\x03\x02\x02\x02\u04AC" +
		"\u04AB\x03\x02\x02\x02\u04AD\xA1\x03\x02\x02\x02\u04AE\u04AF\x07\x19\x02" +
		"\x02\u04AF\xA3\x03\x02\x02\x02\u04B0\u04B1\t\x13\x02\x02\u04B1\xA5\x03" +
		"\x02\x02\x02\u04B2\u04BE\x073\x02\x02\u04B3\u04BE\x072\x02\x02\u04B4\u04BE" +
		"\x074\x02\x02\u04B5\u04BE\x07\x1B\x02\x02\u04B6\u04B7\x07\x1F\x02\x02" +
		"\u04B7\u04BE\n\x14\x02\x02\u04B8\u04B9\x07 \x02\x02\u04B9\u04BE\n\x15" +
		"\x02\x02\u04BA\u04BE\x07#\x02\x02\u04BB\u04BE\x07\"\x02\x02\u04BC\u04BE" +
		"\x07!\x02\x02\u04BD\u04B2\x03\x02\x02\x02\u04BD\u04B3\x03\x02\x02\x02" +
		"\u04BD\u04B4\x03\x02\x02\x02\u04BD\u04B5\x03\x02\x02\x02\u04BD\u04B6\x03" +
		"\x02\x02\x02\u04BD\u04B8\x03\x02\x02\x02\u04BD\u04BA\x03\x02\x02\x02\u04BD" +
		"\u04BB\x03\x02\x02\x02\u04BD\u04BC\x03\x02\x02\x02\u04BE\u04BF\x03\x02" +
		"\x02\x02\u04BF\u04BD\x03\x02\x02\x02\u04BF\u04C0\x03\x02\x02\x02\u04C0" +
		"\xA7\x03\x02\x02\x02\u04C1\u04C2\x07\x04\x02\x02\u04C2\xA9\x03\x02\x02" +
		"\x02\xA7\xAE\xB4\xB9\xBE\xC7\xCF\xD6\xDB\xE7\xEC\xF2\xF9\xFF\u0102\u010A" +
		"\u0111\u0116\u0122\u0127\u012D\u0134\u013A\u013D\u0145\u014C\u0151\u0158" +
		"\u0163\u016A\u016F\u0176\u017F\u0183\u0186\u018C\u0190\u0193\u0199\u019D" +
		"\u01A0\u01CC\u01D6\u01D8\u01DF\u01E4\u01F2\u01F8\u01FA\u0208\u020F\u0214" +
		"\u0218\u021C\u021F\u0224\u023B\u0240\u0245\u0247\u0251\u025B\u0265\u026B" +
		"\u0272\u0278\u0280\u028A\u0295\u029B\u02A0\u02A7\u02B0\u02B4\u02B8\u02BB" +
		"\u02CA\u02CE\u02DD\u02E1\u02E7\u02F2\u02F7\u02FC\u02FE\u0303\u0308\u030D" +
		"\u030F\u0314\u031A\u031F\u0321\u032C\u0330\u033D\u0341\u0347\u0349\u0350" +
		"\u0354\u0356\u035C\u035E\u0365\u036A\u036D\u0373\u0376\u037A\u0381\u0386" +
		"\u038C\u0391\u0399\u039B\u039F\u03A6\u03A8\u03B1\u03B3\u03B7\u03C1\u03C3" +
		"\u03C7\u03CD\u03CF\u03D7\u03DB\u03E2\u03E7\u03ED\u03F2\u03FA\u03FE\u0401" +
		"\u0407\u040E\u0410\u0417\u0421\u042C\u043A\u0440\u044A\u044C\u0455\u0459" +
		"\u045F\u0461\u0468\u046A\u046E\u0472\u0478\u047C\u0482\u0485\u048B\u048E" +
		"\u0498\u049F\u04A6\u04AC\u04BD\u04BF";
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
	public partner1(): Partner1Context {
		return this.getRuleContext(0, Partner1Context);
	}
	public s_and_w(): S_and_wContext {
		return this.getRuleContext(0, S_and_wContext);
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
	public partner1(): Partner1Context {
		return this.getRuleContext(0, Partner1Context);
	}
	public s_and_w(): S_and_wContext {
		return this.getRuleContext(0, S_and_wContext);
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
	public STRING(): TerminalNode { return this.getToken(chatParser.STRING, 0); }
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
	public STRING(): TerminalNode { return this.getToken(chatParser.STRING, 0); }
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


