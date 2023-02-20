// Generated from ./Chat/chatParser.g4 by ANTLR 4.7.3-SNAPSHOT


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
	public static readonly COMMENT = 5;
	public static readonly Image_type = 6;
	public static readonly Audio_type = 7;
	public static readonly Video_type = 8;
	public static readonly OPDOLL = 9;
	public static readonly OPBUL = 10;
	public static readonly OPESC = 11;
	public static readonly OPRANGLES = 12;
	public static readonly OPRANGLEL = 13;
	public static readonly OPDANGLE = 14;
	public static readonly OPU = 15;
	public static readonly OPB = 16;
	public static readonly OPQ = 17;
	public static readonly OPA = 18;
	public static readonly OPP = 19;
	public static readonly OPM = 20;
	public static readonly OPS = 21;
	public static readonly OPR = 22;
	public static readonly OPC = 23;
	public static readonly OPHASH = 24;
	public static readonly CL = 25;
	public static readonly COLON = 26;
	public static readonly AMP = 27;
	public static readonly DBLCOLON = 28;
	public static readonly PLUS = 29;
	public static readonly DotAt = 30;
	public static readonly Greater = 31;
	public static readonly Less = 32;
	public static readonly RightAngle = 33;
	public static readonly RightArrow = 34;
	public static readonly DBLEQ = 35;
	public static readonly HSPL = 36;
	public static readonly HSPL2 = 37;
	public static readonly SSPL = 38;
	public static readonly SSPL2 = 39;
	public static readonly DCANY = 40;
	public static readonly ArticleText = 41;
	public static readonly NOTCL = 42;
	public static readonly NUMERIC = 43;
	public static readonly STRING = 44;
	public static readonly NL = 45;
	public static readonly SENTENCE = 46;
	public static readonly BARSTRING = 47;
	public static readonly OPAT = 48;
	public static readonly AtProgress = 49;
	public static readonly AtReference = 50;
	public static readonly AtWidth = 51;
	public static readonly AtHeight = 52;
	public static readonly AtProgressPoints = 53;
	public static readonly AtShortanswer = 54;
	public static readonly AtLonganswer = 55;
	public static readonly AtExampleWithStr = 56;
	public static readonly AtExamplecol = 57;
	public static readonly AtExamplecl = 58;
	public static readonly AtPartialAnswerS = 59;
	public static readonly AtPartialAnswer = 60;
	public static readonly AtLabeltrue = 61;
	public static readonly AtLabelfalse = 62;
	public static readonly AtPoints = 63;
	public static readonly AtSrc = 64;
	public static readonly OPATALT = 65;
	public static readonly OPAMARK = 66;
	public static readonly ShowInIndex = 67;
	public static readonly OpAtCaption = 68;
	public static readonly OpAtLicense = 69;
	public static readonly OpAtCopyright = 70;
	public static readonly OpAtSearch = 71;
	public static readonly OpAtIsTracked = 72;
	public static readonly OpAtIsInfoOnly = 73;
	public static readonly AtDate = 74;
	public static readonly Http = 75;
	public static readonly Https = 76;
	public static readonly AmpAudio = 77;
	public static readonly AmpImage = 78;
	public static readonly AmpImageZoom = 79;
	public static readonly AmpImageWAudio = 80;
	public static readonly AmpVideo = 81;
	public static readonly AmpArticle = 82;
	public static readonly AmpDocument = 83;
	public static readonly AmpApp = 84;
	public static readonly AmpWebsite = 85;
	public static readonly AmpStillImageFilm = 86;
	public static readonly AmpPdf = 87;
	public static readonly OpAmpAudio = 88;
	public static readonly OpAmpImage = 89;
	public static readonly OpAmpImageZoom = 90;
	public static readonly OpAmpImageWAudio = 91;
	public static readonly OpAmpVideo = 92;
	public static readonly OpAmpArticle = 93;
	public static readonly OpAmpArticleAtt = 94;
	public static readonly OpAmpDocument = 95;
	public static readonly OpAmpApp = 96;
	public static readonly OpAmpWebsite = 97;
	public static readonly OpAmpStillImageFilm = 98;
	public static readonly BracEnclose = 99;
	public static readonly AmpAudioLink = 100;
	public static readonly AmpImageLink = 101;
	public static readonly AmpVideoLink = 102;
	public static readonly AmpArticleLink = 103;
	public static readonly AmpDocumentLink = 104;
	public static readonly AmpAppLink = 105;
	public static readonly AmpWebsiteLink = 106;
	public static readonly AmpStillImageFilmLink = 107;
	public static readonly OpAmpAudioLink = 108;
	public static readonly OpAmpImageLink = 109;
	public static readonly OpAmpVideoLink = 110;
	public static readonly OpAmpArticleLink = 111;
	public static readonly OpAmpDocumentLink = 112;
	public static readonly OpAmpAppLink = 113;
	public static readonly OpAmpWebsiteLink = 114;
	public static readonly OpAmpStillImageFilmLink = 115;
	public static readonly BitmarkMinus = 116;
	public static readonly BitmarkPlus = 117;
	public static readonly ColonText = 118;
	public static readonly Prosemirror = 119;
	public static readonly Placeholder = 120;
	public static readonly BASIC = 121;
	public static readonly JPG = 122;
	public static readonly PNG = 123;
	public static readonly GIF = 124;
	public static readonly SVG = 125;
	public static readonly MP2 = 126;
	public static readonly MP3 = 127;
	public static readonly MP4 = 128;
	public static readonly FLV = 129;
	public static readonly WMV = 130;
	public static readonly MPEG = 131;
	public static readonly MPG = 132;
	public static readonly TEL = 133;
	public static readonly DotArticleAtt = 134;
	public static readonly STAR = 135;
	public static readonly URL = 136;
	public static readonly LIST_LINE = 137;
	public static readonly ENCLBARS = 138;
	public static readonly RULE_bitmark = 0;
	public static readonly RULE_bitmark_ = 1;
	public static readonly RULE_chat = 2;
	public static readonly RULE_conversation = 3;
	public static readonly RULE_initiator = 4;
	public static readonly RULE_partner = 5;
	public static readonly RULE_name_text = 6;
	public static readonly RULE_chat_initiator = 7;
	public static readonly RULE_chat_partner = 8;
	public static readonly RULE_sspl_chat_partner = 9;
	public static readonly RULE_bitElem = 10;
	public static readonly RULE_resource = 11;
	public static readonly RULE_gap = 12;
	public static readonly RULE_single_gap = 13;
	public static readonly RULE_dcolon = 14;
	public static readonly RULE_atpoint = 15;
	public static readonly RULE_format = 16;
	public static readonly RULE_resource_format = 17;
	public static readonly RULE_resource_format_extra = 18;
	public static readonly RULE_format2 = 19;
	public static readonly RULE_image_format = 20;
	public static readonly RULE_video_format = 21;
	public static readonly RULE_article_format = 22;
	public static readonly RULE_document_format = 23;
	public static readonly RULE_app_format = 24;
	public static readonly RULE_website_format = 25;
	public static readonly RULE_stillimagefilm_format = 26;
	public static readonly RULE_op_article_format = 27;
	public static readonly RULE_op_document_format = 28;
	public static readonly RULE_op_app_format = 29;
	public static readonly RULE_op_website_format = 30;
	public static readonly RULE_op_video_format = 31;
	public static readonly RULE_op_stillimagefilm_format = 32;
	public static readonly RULE_articlebit = 33;
	public static readonly RULE_documentbit = 34;
	public static readonly RULE_websitebit = 35;
	public static readonly RULE_appbit = 36;
	public static readonly RULE_stillimagefilmbit = 37;
	public static readonly RULE_stillimg_one = 38;
	public static readonly RULE_videobit = 39;
	public static readonly RULE_video_one = 40;
	public static readonly RULE_imagebit = 41;
	public static readonly RULE_image_one = 42;
	public static readonly RULE_op_image_format = 43;
	public static readonly RULE_image_chained = 44;
	public static readonly RULE_image_chained4match = 45;
	public static readonly RULE_audiobit = 46;
	public static readonly RULE_audio_one = 47;
	public static readonly RULE_audio_format = 48;
	public static readonly RULE_op_audio_format = 49;
	public static readonly RULE_resource_chained = 50;
	public static readonly RULE_telephone = 51;
	public static readonly RULE_url = 52;
	public static readonly RULE_item = 53;
	public static readonly RULE_lead = 54;
	public static readonly RULE_angleref = 55;
	public static readonly RULE_example = 56;
	public static readonly RULE_bracketed_text = 57;
	public static readonly RULE_reference = 58;
	public static readonly RULE_progress = 59;
	public static readonly RULE_dateprop = 60;
	public static readonly RULE_dateprop_chained = 61;
	public static readonly RULE_instruction = 62;
	public static readonly RULE_hint = 63;
	public static readonly RULE_title = 64;
	public static readonly RULE_bool_label = 65;
	public static readonly RULE_progress_points = 66;
	public static readonly RULE_istracked = 67;
	public static readonly RULE_isinfoonly = 68;
	public static readonly RULE_atdef = 69;
	public static readonly RULE_atdef_ = 70;
	public static readonly RULE_dollarans = 71;
	public static readonly RULE_anchor = 72;
	public static readonly RULE_lines = 73;
	public static readonly RULE_s_and_w = 74;
	public static readonly RULE_bracket_escaped = 75;
	public static readonly RULE_clnsp = 76;
	public static readonly RULE_sspl = 77;
	public static readonly RULE_words = 78;
	public static readonly RULE_sp = 79;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"bitmark", "bitmark_", "chat", "conversation", "initiator", "partner", 
		"name_text", "chat_initiator", "chat_partner", "sspl_chat_partner", "bitElem", 
		"resource", "gap", "single_gap", "dcolon", "atpoint", "format", "resource_format", 
		"resource_format_extra", "format2", "image_format", "video_format", "article_format", 
		"document_format", "app_format", "website_format", "stillimagefilm_format", 
		"op_article_format", "op_document_format", "op_app_format", "op_website_format", 
		"op_video_format", "op_stillimagefilm_format", "articlebit", "documentbit", 
		"websitebit", "appbit", "stillimagefilmbit", "stillimg_one", "videobit", 
		"video_one", "imagebit", "image_one", "op_image_format", "image_chained", 
		"image_chained4match", "audiobit", "audio_one", "audio_format", "op_audio_format", 
		"resource_chained", "telephone", "url", "item", "lead", "angleref", "example", 
		"bracketed_text", "reference", "progress", "dateprop", "dateprop_chained", 
		"instruction", "hint", "title", "bool_label", "progress_points", "istracked", 
		"isinfoonly", "atdef", "atdef_", "dollarans", "anchor", "lines", "s_and_w", 
		"bracket_escaped", "clnsp", "sspl", "words", "sp",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'[.'", undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, "'[^'", undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, "'[#'", undefined, "':'", "'&'", "'::'", 
		"'+'", "'.@'", "'>'", "'<'", "'\u25BA'", "'\u2192'", "'=='", undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, "'[@'", undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, "'http://'", "'https://'", "'&audio'", 
		"'&image'", "'&image-zoom'", "'&imageWithAudio'", "'&video'", "'&article'", 
		"'&document'", "'&app'", "'&website'", "'&stillImageFilm'", "'&pdf'", 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, "'&audioLink'", 
		"'&imageLink'", "'&videoLink'", "'&articleLink'", "'&documentLink'", "'&appLink'", 
		"'&websiteLink'", "'&stillImageFilmLink'", undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, "':bitmark--'", 
		"':bitmark++'", "':text'", "':prosemirror'", "':placeholder'", "':basic'", 
		"':jpg'", "':png'", "':gif'", "':svg'", "':mp2'", "':mp3'", "':mp4'", 
		"':flv'", "':wmv'", "':mpeg'", "':mpg'", "'tel:'", "'.article-attachment'", 
		"'*'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "OPDOT", "S", "BitChat", "BitConv", "COMMENT", "Image_type", 
		"Audio_type", "Video_type", "OPDOLL", "OPBUL", "OPESC", "OPRANGLES", "OPRANGLEL", 
		"OPDANGLE", "OPU", "OPB", "OPQ", "OPA", "OPP", "OPM", "OPS", "OPR", "OPC", 
		"OPHASH", "CL", "COLON", "AMP", "DBLCOLON", "PLUS", "DotAt", "Greater", 
		"Less", "RightAngle", "RightArrow", "DBLEQ", "HSPL", "HSPL2", "SSPL", 
		"SSPL2", "DCANY", "ArticleText", "NOTCL", "NUMERIC", "STRING", "NL", "SENTENCE", 
		"BARSTRING", "OPAT", "AtProgress", "AtReference", "AtWidth", "AtHeight", 
		"AtProgressPoints", "AtShortanswer", "AtLonganswer", "AtExampleWithStr", 
		"AtExamplecol", "AtExamplecl", "AtPartialAnswerS", "AtPartialAnswer", 
		"AtLabeltrue", "AtLabelfalse", "AtPoints", "AtSrc", "OPATALT", "OPAMARK", 
		"ShowInIndex", "OpAtCaption", "OpAtLicense", "OpAtCopyright", "OpAtSearch", 
		"OpAtIsTracked", "OpAtIsInfoOnly", "AtDate", "Http", "Https", "AmpAudio", 
		"AmpImage", "AmpImageZoom", "AmpImageWAudio", "AmpVideo", "AmpArticle", 
		"AmpDocument", "AmpApp", "AmpWebsite", "AmpStillImageFilm", "AmpPdf", 
		"OpAmpAudio", "OpAmpImage", "OpAmpImageZoom", "OpAmpImageWAudio", "OpAmpVideo", 
		"OpAmpArticle", "OpAmpArticleAtt", "OpAmpDocument", "OpAmpApp", "OpAmpWebsite", 
		"OpAmpStillImageFilm", "BracEnclose", "AmpAudioLink", "AmpImageLink", 
		"AmpVideoLink", "AmpArticleLink", "AmpDocumentLink", "AmpAppLink", "AmpWebsiteLink", 
		"AmpStillImageFilmLink", "OpAmpAudioLink", "OpAmpImageLink", "OpAmpVideoLink", 
		"OpAmpArticleLink", "OpAmpDocumentLink", "OpAmpAppLink", "OpAmpWebsiteLink", 
		"OpAmpStillImageFilmLink", "BitmarkMinus", "BitmarkPlus", "ColonText", 
		"Prosemirror", "Placeholder", "BASIC", "JPG", "PNG", "GIF", "SVG", "MP2", 
		"MP3", "MP4", "FLV", "WMV", "MPEG", "MPG", "TEL", "DotArticleAtt", "STAR", 
		"URL", "LIST_LINE", "ENCLBARS",
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
			this.state = 173;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 160;
				this.bitmark_();
				this.state = 170;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 1, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 164;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						while (_la === chatParser.S) {
							{
							{
							this.state = 161;
							this.match(chatParser.S);
							}
							}
							this.state = 166;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
						}
						this.state = 167;
						this.match(chatParser.NL);
						}
						}
					}
					this.state = 172;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 1, this._ctx);
				}
				}
				}
				this.state = 175;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === chatParser.BitChat || _la === chatParser.BitConv);
			this.state = 180;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === chatParser.NL) {
				{
				{
				this.state = 177;
				this.match(chatParser.NL);
				}
				}
				this.state = 182;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 183;
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
			this.state = 187;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case chatParser.BitChat:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 185;
				this.chat();
				}
				break;
			case chatParser.BitConv:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 186;
				this.conversation();
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
			this.state = 189;
			this.match(chatParser.BitChat);
			this.state = 190;
			this.format();
			this.state = 191;
			this.match(chatParser.CL);
			this.state = 195;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === chatParser.NL) {
				{
				{
				this.state = 192;
				this.match(chatParser.NL);
				}
				}
				this.state = 197;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 207;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << chatParser.S) | (1 << chatParser.OPRANGLES) | (1 << chatParser.OPRANGLEL) | (1 << chatParser.OPDANGLE) | (1 << chatParser.OPU) | (1 << chatParser.OPB) | (1 << chatParser.OPQ) | (1 << chatParser.OPA) | (1 << chatParser.OPS) | (1 << chatParser.OPC) | (1 << chatParser.OPHASH) | (1 << chatParser.COLON) | (1 << chatParser.AMP) | (1 << chatParser.DBLCOLON) | (1 << chatParser.Greater))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (chatParser.Less - 32)) | (1 << (chatParser.RightAngle - 32)) | (1 << (chatParser.RightArrow - 32)) | (1 << (chatParser.DBLEQ - 32)) | (1 << (chatParser.ArticleText - 32)) | (1 << (chatParser.NUMERIC - 32)) | (1 << (chatParser.STRING - 32)) | (1 << (chatParser.SENTENCE - 32)) | (1 << (chatParser.AtReference - 32)) | (1 << (chatParser.AtExampleWithStr - 32)) | (1 << (chatParser.AtExamplecol - 32)) | (1 << (chatParser.AtExamplecl - 32)) | (1 << (chatParser.AtLabeltrue - 32)) | (1 << (chatParser.AtLabelfalse - 32)))) !== 0) || ((((_la - 70)) & ~0x1F) === 0 && ((1 << (_la - 70)) & ((1 << (chatParser.OpAtCopyright - 70)) | (1 << (chatParser.OpAmpAudio - 70)) | (1 << (chatParser.OpAmpImage - 70)) | (1 << (chatParser.OpAmpImageZoom - 70)) | (1 << (chatParser.OpAmpImageWAudio - 70)) | (1 << (chatParser.OpAmpVideo - 70)) | (1 << (chatParser.OpAmpArticle - 70)) | (1 << (chatParser.OpAmpDocument - 70)) | (1 << (chatParser.OpAmpApp - 70)) | (1 << (chatParser.OpAmpWebsite - 70)) | (1 << (chatParser.OpAmpStillImageFilm - 70)))) !== 0) || ((((_la - 108)) & ~0x1F) === 0 && ((1 << (_la - 108)) & ((1 << (chatParser.OpAmpAudioLink - 108)) | (1 << (chatParser.OpAmpImageLink - 108)) | (1 << (chatParser.OpAmpVideoLink - 108)) | (1 << (chatParser.OpAmpArticleLink - 108)) | (1 << (chatParser.OpAmpDocumentLink - 108)) | (1 << (chatParser.OpAmpAppLink - 108)) | (1 << (chatParser.OpAmpWebsiteLink - 108)) | (1 << (chatParser.OpAmpStillImageFilmLink - 108)) | (1 << (chatParser.URL - 108)) | (1 << (chatParser.LIST_LINE - 108)))) !== 0)) {
				{
				{
				this.state = 198;
				this.bitElem();
				this.state = 202;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === chatParser.NL) {
					{
					{
					this.state = 199;
					this.match(chatParser.NL);
					}
					}
					this.state = 204;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
				}
				this.state = 209;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 210;
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
			this.state = 211;
			this.initiator();
			this.state = 212;
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
			this.state = 213;
			this.partner();
			this.state = 222;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 214;
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
					this.state = 215;
					this.chat_initiator();
					this.state = 219;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === chatParser.SSPL || _la === chatParser.SSPL2) {
						{
						{
						this.state = 216;
						this.sspl_chat_partner();
						}
						}
						this.state = 221;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 224;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 9, this._ctx);
			} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
			this.state = 226;
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
			this.state = 230;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 10, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 227;
					this.match(chatParser.NL);
					}
					}
				}
				this.state = 232;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 10, this._ctx);
			}
			this.state = 246;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 13, this._ctx) ) {
			case 1:
				{
				this.state = 233;
				this.resource();
				this.state = 243;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 12, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 237;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						while (_la === chatParser.NL) {
							{
							{
							this.state = 234;
							this.match(chatParser.NL);
							}
							}
							this.state = 239;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
						}
						this.state = 240;
						this.resource();
						}
						}
					}
					this.state = 245;
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
			this.state = 248;
			this.match(chatParser.BitConv);
			this.state = 249;
			this.format();
			this.state = 250;
			this.match(chatParser.CL);
			this.state = 254;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === chatParser.NL) {
				{
				{
				this.state = 251;
				this.match(chatParser.NL);
				}
				}
				this.state = 256;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 266;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << chatParser.S) | (1 << chatParser.OPRANGLES) | (1 << chatParser.OPRANGLEL) | (1 << chatParser.OPDANGLE) | (1 << chatParser.OPU) | (1 << chatParser.OPB) | (1 << chatParser.OPQ) | (1 << chatParser.OPA) | (1 << chatParser.OPS) | (1 << chatParser.OPC) | (1 << chatParser.OPHASH) | (1 << chatParser.COLON) | (1 << chatParser.AMP) | (1 << chatParser.DBLCOLON) | (1 << chatParser.Greater))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (chatParser.Less - 32)) | (1 << (chatParser.RightAngle - 32)) | (1 << (chatParser.RightArrow - 32)) | (1 << (chatParser.DBLEQ - 32)) | (1 << (chatParser.ArticleText - 32)) | (1 << (chatParser.NUMERIC - 32)) | (1 << (chatParser.STRING - 32)) | (1 << (chatParser.SENTENCE - 32)) | (1 << (chatParser.AtReference - 32)) | (1 << (chatParser.AtExampleWithStr - 32)) | (1 << (chatParser.AtExamplecol - 32)) | (1 << (chatParser.AtExamplecl - 32)) | (1 << (chatParser.AtLabeltrue - 32)) | (1 << (chatParser.AtLabelfalse - 32)))) !== 0) || ((((_la - 70)) & ~0x1F) === 0 && ((1 << (_la - 70)) & ((1 << (chatParser.OpAtCopyright - 70)) | (1 << (chatParser.OpAmpAudio - 70)) | (1 << (chatParser.OpAmpImage - 70)) | (1 << (chatParser.OpAmpImageZoom - 70)) | (1 << (chatParser.OpAmpImageWAudio - 70)) | (1 << (chatParser.OpAmpVideo - 70)) | (1 << (chatParser.OpAmpArticle - 70)) | (1 << (chatParser.OpAmpDocument - 70)) | (1 << (chatParser.OpAmpApp - 70)) | (1 << (chatParser.OpAmpWebsite - 70)) | (1 << (chatParser.OpAmpStillImageFilm - 70)))) !== 0) || ((((_la - 108)) & ~0x1F) === 0 && ((1 << (_la - 108)) & ((1 << (chatParser.OpAmpAudioLink - 108)) | (1 << (chatParser.OpAmpImageLink - 108)) | (1 << (chatParser.OpAmpVideoLink - 108)) | (1 << (chatParser.OpAmpArticleLink - 108)) | (1 << (chatParser.OpAmpDocumentLink - 108)) | (1 << (chatParser.OpAmpAppLink - 108)) | (1 << (chatParser.OpAmpWebsiteLink - 108)) | (1 << (chatParser.OpAmpStillImageFilmLink - 108)) | (1 << (chatParser.URL - 108)) | (1 << (chatParser.LIST_LINE - 108)))) !== 0)) {
				{
				{
				this.state = 257;
				this.bitElem();
				this.state = 261;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === chatParser.NL) {
					{
					{
					this.state = 258;
					this.match(chatParser.NL);
					}
					}
					this.state = 263;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
				}
				this.state = 268;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 269;
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
			this.state = 270;
			this.initiator();
			this.state = 271;
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
			this.state = 272;
			this.partner();
			this.state = 281;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 273;
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
					this.state = 274;
					this.chat_initiator();
					this.state = 278;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === chatParser.SSPL || _la === chatParser.SSPL2) {
						{
						{
						this.state = 275;
						this.sspl_chat_partner();
						}
						}
						this.state = 280;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 283;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 18, this._ctx);
			} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
			this.state = 285;
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
			this.state = 289;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 19, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 286;
					this.match(chatParser.NL);
					}
					}
				}
				this.state = 291;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 19, this._ctx);
			}
			this.state = 305;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 22, this._ctx) ) {
			case 1:
				{
				this.state = 292;
				this.resource();
				this.state = 302;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 21, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 296;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						while (_la === chatParser.NL) {
							{
							{
							this.state = 293;
							this.match(chatParser.NL);
							}
							}
							this.state = 298;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
						}
						this.state = 299;
						this.resource();
						}
						}
					}
					this.state = 304;
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
	public initiator(): InitiatorContext {
		let _localctx: InitiatorContext = new InitiatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, chatParser.RULE_initiator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 307;
			this.name_text();
			this.state = 310;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === chatParser.NL) {
				{
				this.state = 308;
				this.match(chatParser.NL);
				this.state = 309;
				this.imagebit();
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
		this.enterRule(_localctx, 10, chatParser.RULE_partner);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 312;
			this.name_text();
			this.state = 315;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === chatParser.NL) {
				{
				this.state = 313;
				this.match(chatParser.NL);
				this.state = 314;
				this.imagebit();
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
	public name_text(): Name_textContext {
		let _localctx: Name_textContext = new Name_textContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, chatParser.RULE_name_text);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 317;
			this.match(chatParser.OPHASH);
			this.state = 318;
			this.s_and_w();
			this.state = 319;
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
		this.enterRule(_localctx, 14, chatParser.RULE_chat_initiator);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 321;
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
		this.enterRule(_localctx, 16, chatParser.RULE_chat_partner);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 323;
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
		this.enterRule(_localctx, 18, chatParser.RULE_sspl_chat_partner);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 325;
			this.sspl();
			this.state = 326;
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
		this.enterRule(_localctx, 20, chatParser.RULE_bitElem);
		try {
			this.state = 350;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 25, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 328;
				this.match(chatParser.LIST_LINE);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 329;
				this.gap();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 330;
				this.atdef();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 331;
				this.reference();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 332;
				this.item();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 333;
				this.title();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 334;
				this.instruction();
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 335;
				this.hint();
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 336;
				this.s_and_w();
				}
				break;

			case 10:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 337;
				this.example();
				}
				break;

			case 11:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 338;
				this.bool_label();
				}
				break;

			case 12:
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 339;
				this.imagebit();
				}
				break;

			case 13:
				this.enterOuterAlt(_localctx, 13);
				{
				this.state = 340;
				this.audiobit();
				}
				break;

			case 14:
				this.enterOuterAlt(_localctx, 14);
				{
				this.state = 341;
				this.videobit();
				}
				break;

			case 15:
				this.enterOuterAlt(_localctx, 15);
				{
				this.state = 342;
				this.articlebit();
				}
				break;

			case 16:
				this.enterOuterAlt(_localctx, 16);
				{
				this.state = 343;
				this.documentbit();
				}
				break;

			case 17:
				this.enterOuterAlt(_localctx, 17);
				{
				this.state = 344;
				this.appbit();
				}
				break;

			case 18:
				this.enterOuterAlt(_localctx, 18);
				{
				this.state = 345;
				this.websitebit();
				}
				break;

			case 19:
				this.enterOuterAlt(_localctx, 19);
				{
				this.state = 346;
				this.stillimagefilmbit();
				}
				break;

			case 20:
				this.enterOuterAlt(_localctx, 20);
				{
				this.state = 347;
				this.angleref();
				}
				break;

			case 21:
				this.enterOuterAlt(_localctx, 21);
				{
				this.state = 348;
				this.anchor();
				}
				break;

			case 22:
				this.enterOuterAlt(_localctx, 22);
				{
				this.state = 349;
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
		this.enterRule(_localctx, 22, chatParser.RULE_resource);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 352;
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
		this.enterRule(_localctx, 24, chatParser.RULE_gap);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 354;
			this.single_gap();
			this.state = 362;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 27, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					this.state = 360;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case chatParser.OPU:
						{
						this.state = 355;
						this.single_gap();
						}
						break;
					case chatParser.OPB:
						{
						this.state = 356;
						this.instruction();
						}
						break;
					case chatParser.OPQ:
						{
						this.state = 357;
						this.hint();
						}
						break;
					case chatParser.OPC:
						{
						this.state = 358;
						this.item();
						}
						break;
					case chatParser.AtExampleWithStr:
					case chatParser.AtExamplecol:
					case chatParser.AtExamplecl:
						{
						this.state = 359;
						this.example();
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					}
				}
				this.state = 364;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 27, this._ctx);
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
		this.enterRule(_localctx, 26, chatParser.RULE_single_gap);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 365;
			this.match(chatParser.OPU);
			this.state = 369;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 28, this._ctx) ) {
			case 1:
				{
				this.state = 366;
				this.match(chatParser.NUMERIC);
				}
				break;

			case 2:
				{
				this.state = 367;
				this.match(chatParser.STRING);
				}
				break;

			case 3:
				// tslint:disable-next-line:no-empty
				{
				}
				break;
			}
			this.state = 374;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << chatParser.S) | (1 << chatParser.OPS) | (1 << chatParser.COLON) | (1 << chatParser.AMP) | (1 << chatParser.DBLCOLON) | (1 << chatParser.Greater))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (chatParser.Less - 32)) | (1 << (chatParser.RightAngle - 32)) | (1 << (chatParser.RightArrow - 32)) | (1 << (chatParser.DBLEQ - 32)) | (1 << (chatParser.NUMERIC - 32)) | (1 << (chatParser.STRING - 32)) | (1 << (chatParser.SENTENCE - 32)))) !== 0) || _la === chatParser.URL) {
				{
				{
				this.state = 371;
				this.s_and_w();
				}
				}
				this.state = 376;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 377;
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
		this.enterRule(_localctx, 28, chatParser.RULE_dcolon);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 379;
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
		this.enterRule(_localctx, 30, chatParser.RULE_atpoint);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 381;
			this.match(chatParser.AtPoints);
			this.state = 382;
			this.match(chatParser.NUMERIC);
			this.state = 383;
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
		this.enterRule(_localctx, 32, chatParser.RULE_format);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 388;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 30, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 385;
					this.resource_format();
					}
					}
				}
				this.state = 390;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 30, this._ctx);
			}
			this.state = 395;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 77)) & ~0x1F) === 0 && ((1 << (_la - 77)) & ((1 << (chatParser.AmpAudio - 77)) | (1 << (chatParser.AmpImage - 77)) | (1 << (chatParser.AmpImageZoom - 77)) | (1 << (chatParser.AmpImageWAudio - 77)) | (1 << (chatParser.AmpVideo - 77)) | (1 << (chatParser.AmpArticle - 77)) | (1 << (chatParser.AmpDocument - 77)) | (1 << (chatParser.AmpApp - 77)) | (1 << (chatParser.AmpWebsite - 77)) | (1 << (chatParser.AmpStillImageFilm - 77)) | (1 << (chatParser.AmpPdf - 77)) | (1 << (chatParser.AmpAudioLink - 77)) | (1 << (chatParser.AmpImageLink - 77)) | (1 << (chatParser.AmpVideoLink - 77)) | (1 << (chatParser.AmpArticleLink - 77)) | (1 << (chatParser.AmpDocumentLink - 77)) | (1 << (chatParser.AmpAppLink - 77)) | (1 << (chatParser.AmpWebsiteLink - 77)) | (1 << (chatParser.AmpStillImageFilmLink - 77)))) !== 0) || _la === chatParser.ColonText) {
				{
				this.state = 393;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case chatParser.ColonText:
					{
					this.state = 391;
					this.match(chatParser.ColonText);
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
					{
					this.state = 392;
					this.resource_format_extra();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				this.state = 397;
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
		this.enterRule(_localctx, 34, chatParser.RULE_resource_format);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 398;
			_la = this._input.LA(1);
			if (!(((((_la - 82)) & ~0x1F) === 0 && ((1 << (_la - 82)) & ((1 << (chatParser.AmpArticle - 82)) | (1 << (chatParser.AmpDocument - 82)) | (1 << (chatParser.AmpWebsite - 82)) | (1 << (chatParser.AmpStillImageFilm - 82)) | (1 << (chatParser.AmpAudioLink - 82)) | (1 << (chatParser.AmpImageLink - 82)) | (1 << (chatParser.AmpVideoLink - 82)) | (1 << (chatParser.AmpArticleLink - 82)) | (1 << (chatParser.AmpDocumentLink - 82)) | (1 << (chatParser.AmpAppLink - 82)) | (1 << (chatParser.AmpWebsiteLink - 82)) | (1 << (chatParser.AmpStillImageFilmLink - 82)))) !== 0) || ((((_la - 116)) & ~0x1F) === 0 && ((1 << (_la - 116)) & ((1 << (chatParser.BitmarkMinus - 116)) | (1 << (chatParser.BitmarkPlus - 116)) | (1 << (chatParser.Prosemirror - 116)) | (1 << (chatParser.Placeholder - 116)))) !== 0))) {
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
		this.enterRule(_localctx, 36, chatParser.RULE_resource_format_extra);
		try {
			this.state = 409;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case chatParser.AmpImage:
			case chatParser.AmpImageZoom:
			case chatParser.AmpImageWAudio:
			case chatParser.AmpImageLink:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 400;
				this.image_format();
				}
				break;
			case chatParser.AmpAudio:
			case chatParser.AmpAudioLink:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 401;
				this.audio_format();
				}
				break;
			case chatParser.AmpVideo:
			case chatParser.AmpVideoLink:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 402;
				this.video_format();
				}
				break;
			case chatParser.AmpArticle:
			case chatParser.AmpArticleLink:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 403;
				this.article_format();
				}
				break;
			case chatParser.AmpDocument:
			case chatParser.AmpDocumentLink:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 404;
				this.document_format();
				}
				break;
			case chatParser.AmpApp:
			case chatParser.AmpAppLink:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 405;
				this.app_format();
				}
				break;
			case chatParser.AmpWebsite:
			case chatParser.AmpWebsiteLink:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 406;
				this.website_format();
				}
				break;
			case chatParser.AmpStillImageFilm:
			case chatParser.AmpStillImageFilmLink:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 407;
				this.stillimagefilm_format();
				}
				break;
			case chatParser.AmpPdf:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 408;
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
		this.enterRule(_localctx, 38, chatParser.RULE_format2);
		try {
			this.state = 415;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case chatParser.BitmarkMinus:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 411;
				this.match(chatParser.BitmarkMinus);
				}
				break;
			case chatParser.BitmarkPlus:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 412;
				this.match(chatParser.BitmarkPlus);
				}
				break;
			case chatParser.ColonText:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 413;
				this.match(chatParser.ColonText);
				}
				break;
			case chatParser.EOF:
				this.enterOuterAlt(_localctx, 4);
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
		this.enterRule(_localctx, 40, chatParser.RULE_image_format);
		let _la: number;
		try {
			this.state = 431;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case chatParser.AmpImage:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 417;
				this.match(chatParser.AmpImage);
				this.state = 420;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case chatParser.Image_type:
					{
					{
					this.state = 418;
					this.match(chatParser.Image_type);
					}
					}
					break;
				case chatParser.DotArticleAtt:
					{
					{
					this.state = 419;
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
				case chatParser.ColonText:
					break;
				default:
					break;
				}
				}
				break;
			case chatParser.AmpImageLink:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 422;
				this.match(chatParser.AmpImageLink);
				this.state = 424;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === chatParser.Image_type) {
					{
					this.state = 423;
					this.match(chatParser.Image_type);
					}
				}

				}
				break;
			case chatParser.AmpImageZoom:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 426;
				this.match(chatParser.AmpImageZoom);
				this.state = 428;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === chatParser.Image_type) {
					{
					this.state = 427;
					this.match(chatParser.Image_type);
					}
				}

				}
				break;
			case chatParser.AmpImageWAudio:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 430;
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
		this.enterRule(_localctx, 42, chatParser.RULE_video_format);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 433;
			_la = this._input.LA(1);
			if (!(_la === chatParser.AmpVideo || _la === chatParser.AmpVideoLink)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 436;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === chatParser.COLON) {
				{
				this.state = 434;
				this.match(chatParser.COLON);
				this.state = 435;
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
		this.enterRule(_localctx, 44, chatParser.RULE_article_format);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 438;
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
		this.enterRule(_localctx, 46, chatParser.RULE_document_format);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 440;
			_la = this._input.LA(1);
			if (!(_la === chatParser.AmpDocument || _la === chatParser.AmpDocumentLink)) {
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
		this.enterRule(_localctx, 48, chatParser.RULE_app_format);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 442;
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
		this.enterRule(_localctx, 50, chatParser.RULE_website_format);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 444;
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
		this.enterRule(_localctx, 52, chatParser.RULE_stillimagefilm_format);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 446;
			_la = this._input.LA(1);
			if (!(_la === chatParser.AmpStillImageFilm || _la === chatParser.AmpStillImageFilmLink)) {
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
		this.enterRule(_localctx, 54, chatParser.RULE_op_article_format);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 448;
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
		this.enterRule(_localctx, 56, chatParser.RULE_op_document_format);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 450;
			_la = this._input.LA(1);
			if (!(_la === chatParser.OpAmpDocument || _la === chatParser.OpAmpDocumentLink)) {
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
		this.enterRule(_localctx, 58, chatParser.RULE_op_app_format);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 452;
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
		this.enterRule(_localctx, 60, chatParser.RULE_op_website_format);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 454;
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
		this.enterRule(_localctx, 62, chatParser.RULE_op_video_format);
		try {
			this.state = 466;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case chatParser.OpAmpVideo:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 456;
				this.match(chatParser.OpAmpVideo);
				this.state = 459;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 40, this._ctx) ) {
				case 1:
					{
					this.state = 457;
					this.match(chatParser.COLON);
					this.state = 458;
					this.match(chatParser.Video_type);
					}
					break;
				}
				}
				break;
			case chatParser.OpAmpVideoLink:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 461;
				this.match(chatParser.OpAmpVideoLink);
				this.state = 464;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 41, this._ctx) ) {
				case 1:
					{
					this.state = 462;
					this.match(chatParser.COLON);
					this.state = 463;
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
		this.enterRule(_localctx, 64, chatParser.RULE_op_stillimagefilm_format);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 468;
			_la = this._input.LA(1);
			if (!(_la === chatParser.OpAmpStillImageFilm || _la === chatParser.OpAmpStillImageFilmLink)) {
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
		this.enterRule(_localctx, 66, chatParser.RULE_articlebit);
		try {
			this.state = 476;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case chatParser.OpAmpArticle:
			case chatParser.OpAmpArticleLink:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 470;
				this.op_article_format();
				this.state = 471;
				this.match(chatParser.COLON);
				this.state = 472;
				this.url();
				this.state = 473;
				this.match(chatParser.CL);
				}
				break;
			case chatParser.ArticleText:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 475;
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
		this.enterRule(_localctx, 68, chatParser.RULE_documentbit);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 478;
			this.op_document_format();
			this.state = 479;
			this.match(chatParser.COLON);
			this.state = 480;
			this.url();
			this.state = 481;
			this.match(chatParser.CL);
			this.state = 486;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === chatParser.OPATALT) {
				{
				this.state = 482;
				this.match(chatParser.OPATALT);
				this.state = 483;
				this.words();
				this.state = 484;
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
		this.enterRule(_localctx, 70, chatParser.RULE_websitebit);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 488;
			this.op_website_format();
			this.state = 489;
			this.match(chatParser.COLON);
			this.state = 490;
			this.url();
			this.state = 491;
			this.match(chatParser.CL);
			this.state = 496;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === chatParser.OPATALT) {
				{
				this.state = 492;
				this.match(chatParser.OPATALT);
				this.state = 493;
				this.words();
				this.state = 494;
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
		this.enterRule(_localctx, 72, chatParser.RULE_appbit);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 498;
			this.op_app_format();
			this.state = 499;
			this.match(chatParser.COLON);
			this.state = 502;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case chatParser.URL:
				{
				this.state = 500;
				this.url();
				}
				break;
			case chatParser.TEL:
				{
				this.state = 501;
				this.telephone();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 504;
			this.match(chatParser.CL);
			this.state = 509;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === chatParser.OPATALT) {
				{
				this.state = 505;
				this.match(chatParser.OPATALT);
				this.state = 506;
				this.words();
				this.state = 507;
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
		this.enterRule(_localctx, 74, chatParser.RULE_stillimagefilmbit);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 511;
			this.stillimg_one();
			this.state = 515;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 48, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 512;
					this.resource_chained();
					}
					}
				}
				this.state = 517;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 48, this._ctx);
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
		this.enterRule(_localctx, 76, chatParser.RULE_stillimg_one);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 518;
			this.op_stillimagefilm_format();
			this.state = 519;
			this.match(chatParser.COLON);
			this.state = 523;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === chatParser.S) {
				{
				{
				this.state = 520;
				this.match(chatParser.S);
				}
				}
				this.state = 525;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 526;
			this.url();
			this.state = 527;
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
		this.enterRule(_localctx, 78, chatParser.RULE_videobit);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 529;
			this.video_one();
			this.state = 533;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 50, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 530;
					this.resource_chained();
					}
					}
				}
				this.state = 535;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 50, this._ctx);
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
		this.enterRule(_localctx, 80, chatParser.RULE_video_one);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 536;
			this.op_video_format();
			this.state = 537;
			this.match(chatParser.COLON);
			this.state = 538;
			this.url();
			this.state = 539;
			this.match(chatParser.CL);
			this.state = 544;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 51, this._ctx) ) {
			case 1:
				{
				this.state = 540;
				this.match(chatParser.OPATALT);
				this.state = 541;
				this.words();
				this.state = 542;
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
		this.enterRule(_localctx, 82, chatParser.RULE_imagebit);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 546;
			this.image_one();
			this.state = 550;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 52, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 547;
					this.image_chained();
					}
					}
				}
				this.state = 552;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 52, this._ctx);
			}
			this.state = 555;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 53, this._ctx) ) {
			case 1:
				{
				this.state = 553;
				this.match(chatParser.NL);
				this.state = 554;
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
		this.enterRule(_localctx, 84, chatParser.RULE_image_one);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 557;
			this.op_image_format();
			this.state = 558;
			this.match(chatParser.COLON);
			this.state = 562;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === chatParser.S) {
				{
				{
				this.state = 559;
				this.match(chatParser.S);
				}
				}
				this.state = 564;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 565;
			this.url();
			this.state = 566;
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
		this.enterRule(_localctx, 86, chatParser.RULE_op_image_format);
		let _la: number;
		try {
			this.state = 582;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case chatParser.OpAmpImage:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 568;
				this.match(chatParser.OpAmpImage);
				this.state = 571;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case chatParser.Image_type:
					{
					{
					this.state = 569;
					this.match(chatParser.Image_type);
					}
					}
					break;
				case chatParser.DotArticleAtt:
					{
					{
					this.state = 570;
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
				this.state = 573;
				this.match(chatParser.OpAmpImageLink);
				this.state = 575;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === chatParser.Image_type) {
					{
					this.state = 574;
					this.match(chatParser.Image_type);
					}
				}

				}
				break;
			case chatParser.OpAmpImageZoom:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 577;
				this.match(chatParser.OpAmpImageZoom);
				this.state = 579;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === chatParser.Image_type) {
					{
					this.state = 578;
					this.match(chatParser.Image_type);
					}
				}

				}
				break;
			case chatParser.OpAmpImageWAudio:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 581;
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
		this.enterRule(_localctx, 88, chatParser.RULE_image_chained);
		let _la: number;
		try {
			let _alt: number;
			this.state = 601;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case chatParser.AtSrc:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 584;
				this.match(chatParser.AtSrc);
				this.state = 585;
				this.match(chatParser.COLON);
				this.state = 586;
				this.url();
				this.state = 587;
				this.match(chatParser.CL);
				}
				break;
			case chatParser.AtWidth:
			case chatParser.AtHeight:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 589;
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
				this.state = 590;
				this.match(chatParser.COLON);
				this.state = 591;
				this.match(chatParser.NUMERIC);
				this.state = 592;
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
				this.state = 593;
				_la = this._input.LA(1);
				if (!(((((_la - 65)) & ~0x1F) === 0 && ((1 << (_la - 65)) & ((1 << (chatParser.OPATALT - 65)) | (1 << (chatParser.OpAtCaption - 65)) | (1 << (chatParser.OpAtLicense - 65)) | (1 << (chatParser.OpAtCopyright - 65)) | (1 << (chatParser.OpAtSearch - 65)))) !== 0))) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 597;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 59, this._ctx);
				while (_alt !== 1 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1 + 1) {
						{
						{
						this.state = 594;
						this.matchWildcard();
						}
						}
					}
					this.state = 599;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 59, this._ctx);
				}
				this.state = 600;
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
		this.enterRule(_localctx, 90, chatParser.RULE_image_chained4match);
		let _la: number;
		try {
			let _alt: number;
			this.state = 620;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case chatParser.AtSrc:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 603;
				this.match(chatParser.AtSrc);
				this.state = 604;
				this.match(chatParser.COLON);
				this.state = 605;
				this.url();
				this.state = 606;
				this.match(chatParser.CL);
				}
				break;
			case chatParser.AtWidth:
			case chatParser.AtHeight:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 608;
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
				this.state = 609;
				this.match(chatParser.COLON);
				this.state = 610;
				this.match(chatParser.NUMERIC);
				this.state = 611;
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
				this.state = 612;
				_la = this._input.LA(1);
				if (!(((((_la - 65)) & ~0x1F) === 0 && ((1 << (_la - 65)) & ((1 << (chatParser.OPATALT - 65)) | (1 << (chatParser.OpAtCaption - 65)) | (1 << (chatParser.OpAtLicense - 65)) | (1 << (chatParser.OpAtCopyright - 65)) | (1 << (chatParser.OpAtSearch - 65)))) !== 0))) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 616;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 61, this._ctx);
				while (_alt !== 1 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1 + 1) {
						{
						{
						this.state = 613;
						this.matchWildcard();
						}
						}
					}
					this.state = 618;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 61, this._ctx);
				}
				this.state = 619;
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
		this.enterRule(_localctx, 92, chatParser.RULE_audiobit);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 622;
			this.audio_one();
			this.state = 626;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 63, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 623;
					this.resource_chained();
					}
					}
				}
				this.state = 628;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 63, this._ctx);
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
		this.enterRule(_localctx, 94, chatParser.RULE_audio_one);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 629;
			this.op_audio_format();
			this.state = 630;
			this.match(chatParser.COLON);
			this.state = 631;
			this.url();
			this.state = 632;
			this.match(chatParser.CL);
			this.state = 637;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 64, this._ctx) ) {
			case 1:
				{
				this.state = 633;
				this.match(chatParser.OPATALT);
				this.state = 634;
				this.words();
				this.state = 635;
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
		this.enterRule(_localctx, 96, chatParser.RULE_audio_format);
		let _la: number;
		try {
			this.state = 649;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case chatParser.AmpAudio:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 639;
				this.match(chatParser.AmpAudio);
				this.state = 642;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === chatParser.COLON) {
					{
					this.state = 640;
					this.match(chatParser.COLON);
					this.state = 641;
					this.match(chatParser.Audio_type);
					}
				}

				}
				break;
			case chatParser.AmpAudioLink:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 644;
				this.match(chatParser.AmpAudioLink);
				this.state = 647;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === chatParser.COLON) {
					{
					this.state = 645;
					this.match(chatParser.COLON);
					this.state = 646;
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
		this.enterRule(_localctx, 98, chatParser.RULE_op_audio_format);
		try {
			this.state = 661;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case chatParser.OpAmpAudio:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 651;
				this.match(chatParser.OpAmpAudio);
				this.state = 654;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 68, this._ctx) ) {
				case 1:
					{
					this.state = 652;
					this.match(chatParser.COLON);
					this.state = 653;
					this.match(chatParser.Audio_type);
					}
					break;
				}
				}
				break;
			case chatParser.OpAmpAudioLink:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 656;
				this.match(chatParser.OpAmpAudioLink);
				this.state = 659;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 69, this._ctx) ) {
				case 1:
					{
					this.state = 657;
					this.match(chatParser.COLON);
					this.state = 658;
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
		this.enterRule(_localctx, 100, chatParser.RULE_resource_chained);
		let _la: number;
		try {
			let _alt: number;
			this.state = 694;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case chatParser.OPA:
			case chatParser.AtSrc:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 666;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case chatParser.OPA:
					{
					this.state = 663;
					this.match(chatParser.OPA);
					this.state = 664;
					this.s_and_w();
					}
					break;
				case chatParser.AtSrc:
					{
					this.state = 665;
					this.match(chatParser.AtSrc);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 668;
				this.match(chatParser.COLON);
				this.state = 672;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 72, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 669;
						this.match(chatParser.S);
						}
						}
					}
					this.state = 674;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 72, this._ctx);
				}
				this.state = 677;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					this.state = 677;
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
					case chatParser.SENTENCE:
					case chatParser.URL:
						{
						this.state = 675;
						this.s_and_w();
						}
						break;
					case chatParser.NL:
						{
						this.state = 676;
						this.match(chatParser.NL);
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					}
					this.state = 679;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << chatParser.S) | (1 << chatParser.OPS) | (1 << chatParser.COLON) | (1 << chatParser.AMP) | (1 << chatParser.DBLCOLON) | (1 << chatParser.Greater))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (chatParser.Less - 32)) | (1 << (chatParser.RightAngle - 32)) | (1 << (chatParser.RightArrow - 32)) | (1 << (chatParser.DBLEQ - 32)) | (1 << (chatParser.NUMERIC - 32)) | (1 << (chatParser.STRING - 32)) | (1 << (chatParser.NL - 32)) | (1 << (chatParser.SENTENCE - 32)))) !== 0) || _la === chatParser.URL);
				this.state = 681;
				this.match(chatParser.CL);
				}
				break;
			case chatParser.AtWidth:
			case chatParser.AtHeight:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 682;
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
				this.state = 683;
				this.match(chatParser.COLON);
				this.state = 684;
				this.match(chatParser.NUMERIC);
				this.state = 685;
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
				this.state = 686;
				_la = this._input.LA(1);
				if (!(((((_la - 65)) & ~0x1F) === 0 && ((1 << (_la - 65)) & ((1 << (chatParser.OPATALT - 65)) | (1 << (chatParser.OpAtCaption - 65)) | (1 << (chatParser.OpAtLicense - 65)) | (1 << (chatParser.OpAtCopyright - 65)) | (1 << (chatParser.OpAtSearch - 65)))) !== 0))) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 690;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 75, this._ctx);
				while (_alt !== 1 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1 + 1) {
						{
						{
						this.state = 687;
						this.matchWildcard();
						}
						}
					}
					this.state = 692;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 75, this._ctx);
				}
				this.state = 693;
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
		this.enterRule(_localctx, 102, chatParser.RULE_telephone);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 696;
			this.match(chatParser.TEL);
			this.state = 697;
			this.match(chatParser.PLUS);
			this.state = 698;
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
		this.enterRule(_localctx, 104, chatParser.RULE_url);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 700;
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
		this.enterRule(_localctx, 106, chatParser.RULE_item);
		let _la: number;
		try {
			this.state = 732;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 83, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 702;
				this.match(chatParser.OPC);
				this.state = 703;
				this.match(chatParser.CL);
				this.state = 711;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 78, this._ctx) ) {
				case 1:
					{
					this.state = 707;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === chatParser.S) {
						{
						{
						this.state = 704;
						this.match(chatParser.S);
						}
						}
						this.state = 709;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					this.state = 710;
					this.lead();
					}
					break;
				}
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 713;
				this.match(chatParser.OPC);
				this.state = 714;
				this.s_and_w();
				this.state = 719;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (((((_la - 26)) & ~0x1F) === 0 && ((1 << (_la - 26)) & ((1 << (chatParser.COLON - 26)) | (1 << (chatParser.AMP - 26)) | (1 << (chatParser.Greater - 26)) | (1 << (chatParser.Less - 26)) | (1 << (chatParser.RightAngle - 26)) | (1 << (chatParser.RightArrow - 26)) | (1 << (chatParser.DBLEQ - 26)) | (1 << (chatParser.SENTENCE - 26)))) !== 0)) {
					{
					this.state = 717;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case chatParser.COLON:
						{
						this.state = 715;
						this.match(chatParser.COLON);
						}
						break;
					case chatParser.AMP:
					case chatParser.Greater:
					case chatParser.Less:
					case chatParser.RightAngle:
					case chatParser.RightArrow:
					case chatParser.DBLEQ:
					case chatParser.SENTENCE:
						{
						this.state = 716;
						this.words();
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					}
					this.state = 721;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 722;
				this.match(chatParser.CL);
				this.state = 730;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 82, this._ctx) ) {
				case 1:
					{
					this.state = 726;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === chatParser.S) {
						{
						{
						this.state = 723;
						this.match(chatParser.S);
						}
						}
						this.state = 728;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					this.state = 729;
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
		this.enterRule(_localctx, 108, chatParser.RULE_lead);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 734;
			this.match(chatParser.OPC);
			this.state = 735;
			this.s_and_w();
			this.state = 740;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 26)) & ~0x1F) === 0 && ((1 << (_la - 26)) & ((1 << (chatParser.COLON - 26)) | (1 << (chatParser.AMP - 26)) | (1 << (chatParser.Greater - 26)) | (1 << (chatParser.Less - 26)) | (1 << (chatParser.RightAngle - 26)) | (1 << (chatParser.RightArrow - 26)) | (1 << (chatParser.DBLEQ - 26)) | (1 << (chatParser.SENTENCE - 26)))) !== 0)) {
				{
				this.state = 738;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case chatParser.COLON:
					{
					this.state = 736;
					this.match(chatParser.COLON);
					}
					break;
				case chatParser.AMP:
				case chatParser.Greater:
				case chatParser.Less:
				case chatParser.RightAngle:
				case chatParser.RightArrow:
				case chatParser.DBLEQ:
				case chatParser.SENTENCE:
					{
					this.state = 737;
					this.words();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				this.state = 742;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 743;
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
		this.enterRule(_localctx, 110, chatParser.RULE_angleref);
		let _la: number;
		try {
			this.state = 755;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case chatParser.OPRANGLES:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 745;
				this.match(chatParser.OPRANGLES);
				this.state = 747;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << chatParser.S) | (1 << chatParser.OPS) | (1 << chatParser.COLON) | (1 << chatParser.AMP) | (1 << chatParser.DBLCOLON) | (1 << chatParser.Greater))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (chatParser.Less - 32)) | (1 << (chatParser.RightAngle - 32)) | (1 << (chatParser.RightArrow - 32)) | (1 << (chatParser.DBLEQ - 32)) | (1 << (chatParser.NUMERIC - 32)) | (1 << (chatParser.STRING - 32)) | (1 << (chatParser.SENTENCE - 32)))) !== 0) || _la === chatParser.URL) {
					{
					this.state = 746;
					this.s_and_w();
					}
				}

				this.state = 749;
				this.match(chatParser.CL);
				}
				break;
			case chatParser.OPRANGLEL:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 750;
				this.match(chatParser.OPRANGLEL);
				this.state = 752;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << chatParser.S) | (1 << chatParser.OPS) | (1 << chatParser.COLON) | (1 << chatParser.AMP) | (1 << chatParser.DBLCOLON) | (1 << chatParser.Greater))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (chatParser.Less - 32)) | (1 << (chatParser.RightAngle - 32)) | (1 << (chatParser.RightArrow - 32)) | (1 << (chatParser.DBLEQ - 32)) | (1 << (chatParser.NUMERIC - 32)) | (1 << (chatParser.STRING - 32)) | (1 << (chatParser.SENTENCE - 32)))) !== 0) || _la === chatParser.URL) {
					{
					this.state = 751;
					this.s_and_w();
					}
				}

				this.state = 754;
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
		this.enterRule(_localctx, 112, chatParser.RULE_example);
		let _la: number;
		try {
			this.state = 764;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case chatParser.AtExamplecl:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 757;
				this.match(chatParser.AtExamplecl);
				}
				break;
			case chatParser.AtExampleWithStr:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 758;
				this.match(chatParser.AtExampleWithStr);
				}
				break;
			case chatParser.AtExamplecol:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 759;
				this.match(chatParser.AtExamplecol);
				this.state = 761;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === chatParser.SENTENCE) {
					{
					this.state = 760;
					this.match(chatParser.SENTENCE);
					}
				}

				this.state = 763;
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
		this.enterRule(_localctx, 114, chatParser.RULE_bracketed_text);
		let _la: number;
		try {
			let _alt: number;
			this.state = 805;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 98, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 766;
				this.match(chatParser.BracEnclose);
				this.state = 768;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 91, this._ctx) ) {
				case 1:
					{
					this.state = 767;
					this.s_and_w();
					}
					break;
				}
				this.state = 791;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << chatParser.S) | (1 << chatParser.OPS) | (1 << chatParser.COLON) | (1 << chatParser.AMP) | (1 << chatParser.DBLCOLON) | (1 << chatParser.Greater))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (chatParser.Less - 32)) | (1 << (chatParser.RightAngle - 32)) | (1 << (chatParser.RightArrow - 32)) | (1 << (chatParser.DBLEQ - 32)) | (1 << (chatParser.NUMERIC - 32)) | (1 << (chatParser.STRING - 32)) | (1 << (chatParser.SENTENCE - 32)))) !== 0) || _la === chatParser.URL) {
					{
					{
					this.state = 770;
					this.s_and_w();
					this.state = 780;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 93, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 771;
							this.match(chatParser.NL);
							this.state = 775;
							this._errHandler.sync(this);
							_alt = this.interpreter.adaptivePredict(this._input, 92, this._ctx);
							while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
								if (_alt === 1) {
									{
									{
									this.state = 772;
									this.match(chatParser.S);
									}
									}
								}
								this.state = 777;
								this._errHandler.sync(this);
								_alt = this.interpreter.adaptivePredict(this._input, 92, this._ctx);
							}
							}
							}
						}
						this.state = 782;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 93, this._ctx);
					}
					this.state = 786;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === chatParser.NL) {
						{
						{
						this.state = 783;
						this.match(chatParser.NL);
						}
						}
						this.state = 788;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
					}
					this.state = 793;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 794;
				this.match(chatParser.CL);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 795;
				this.match(chatParser.BracEnclose);
				this.state = 801;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << chatParser.S) | (1 << chatParser.OPS) | (1 << chatParser.COLON) | (1 << chatParser.AMP) | (1 << chatParser.DBLCOLON) | (1 << chatParser.Greater))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (chatParser.Less - 32)) | (1 << (chatParser.RightAngle - 32)) | (1 << (chatParser.RightArrow - 32)) | (1 << (chatParser.DBLEQ - 32)) | (1 << (chatParser.NUMERIC - 32)) | (1 << (chatParser.STRING - 32)) | (1 << (chatParser.NL - 32)) | (1 << (chatParser.SENTENCE - 32)))) !== 0) || _la === chatParser.URL) {
					{
					this.state = 799;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 96, this._ctx) ) {
					case 1:
						{
						this.state = 796;
						this.s_and_w();
						}
						break;

					case 2:
						{
						this.state = 797;
						this.match(chatParser.NL);
						}
						break;

					case 3:
						{
						this.state = 798;
						this.match(chatParser.S);
						}
						break;
					}
					}
					this.state = 803;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 804;
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
		this.enterRule(_localctx, 116, chatParser.RULE_reference);
		let _la: number;
		try {
			this.state = 829;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 103, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 807;
				this.match(chatParser.AtReference);
				this.state = 812;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					this.state = 812;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 99, this._ctx) ) {
					case 1:
						{
						this.state = 808;
						this.s_and_w();
						}
						break;

					case 2:
						{
						this.state = 809;
						this.match(chatParser.COLON);
						}
						break;

					case 3:
						{
						this.state = 810;
						this.match(chatParser.URL);
						}
						break;

					case 4:
						{
						this.state = 811;
						this.match(chatParser.NL);
						}
						break;
					}
					}
					this.state = 814;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << chatParser.S) | (1 << chatParser.OPS) | (1 << chatParser.COLON) | (1 << chatParser.AMP) | (1 << chatParser.DBLCOLON) | (1 << chatParser.Greater))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (chatParser.Less - 32)) | (1 << (chatParser.RightAngle - 32)) | (1 << (chatParser.RightArrow - 32)) | (1 << (chatParser.DBLEQ - 32)) | (1 << (chatParser.NUMERIC - 32)) | (1 << (chatParser.STRING - 32)) | (1 << (chatParser.NL - 32)) | (1 << (chatParser.SENTENCE - 32)))) !== 0) || _la === chatParser.URL);
				this.state = 816;
				this.match(chatParser.CL);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 817;
				this.match(chatParser.AtReference);
				this.state = 825;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << chatParser.S) | (1 << chatParser.OPS) | (1 << chatParser.COLON) | (1 << chatParser.AMP) | (1 << chatParser.DBLCOLON) | (1 << chatParser.Greater))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (chatParser.Less - 32)) | (1 << (chatParser.RightAngle - 32)) | (1 << (chatParser.RightArrow - 32)) | (1 << (chatParser.DBLEQ - 32)) | (1 << (chatParser.NUMERIC - 32)) | (1 << (chatParser.STRING - 32)) | (1 << (chatParser.NL - 32)) | (1 << (chatParser.SENTENCE - 32)))) !== 0) || _la === chatParser.URL) {
					{
					this.state = 823;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 101, this._ctx) ) {
					case 1:
						{
						this.state = 818;
						this.s_and_w();
						}
						break;

					case 2:
						{
						this.state = 819;
						this.match(chatParser.COLON);
						}
						break;

					case 3:
						{
						this.state = 820;
						this.match(chatParser.URL);
						}
						break;

					case 4:
						{
						this.state = 821;
						this.match(chatParser.NL);
						}
						break;

					case 5:
						{
						this.state = 822;
						this.match(chatParser.S);
						}
						break;
					}
					}
					this.state = 827;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 828;
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
		this.enterRule(_localctx, 118, chatParser.RULE_progress);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 831;
			this.match(chatParser.AtProgress);
			this.state = 832;
			this.s_and_w();
			this.state = 833;
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
		this.enterRule(_localctx, 120, chatParser.RULE_dateprop);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 835;
			this.match(chatParser.AtDate);
			this.state = 839;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				this.state = 839;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 104, this._ctx) ) {
				case 1:
					{
					this.state = 836;
					this.s_and_w();
					}
					break;

				case 2:
					{
					this.state = 837;
					this.match(chatParser.COLON);
					}
					break;

				case 3:
					{
					this.state = 838;
					this.match(chatParser.NL);
					}
					break;
				}
				}
				this.state = 841;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << chatParser.S) | (1 << chatParser.OPS) | (1 << chatParser.COLON) | (1 << chatParser.AMP) | (1 << chatParser.DBLCOLON) | (1 << chatParser.Greater))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (chatParser.Less - 32)) | (1 << (chatParser.RightAngle - 32)) | (1 << (chatParser.RightArrow - 32)) | (1 << (chatParser.DBLEQ - 32)) | (1 << (chatParser.NUMERIC - 32)) | (1 << (chatParser.STRING - 32)) | (1 << (chatParser.NL - 32)) | (1 << (chatParser.SENTENCE - 32)))) !== 0) || _la === chatParser.URL);
			this.state = 843;
			this.match(chatParser.CL);
			this.state = 845;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === chatParser.AtDate) {
				{
				this.state = 844;
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
		this.enterRule(_localctx, 122, chatParser.RULE_dateprop_chained);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 847;
			this.match(chatParser.AtDate);
			this.state = 851;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				this.state = 851;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 107, this._ctx) ) {
				case 1:
					{
					this.state = 848;
					this.s_and_w();
					}
					break;

				case 2:
					{
					this.state = 849;
					this.match(chatParser.COLON);
					}
					break;

				case 3:
					{
					this.state = 850;
					this.match(chatParser.NL);
					}
					break;
				}
				}
				this.state = 853;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << chatParser.S) | (1 << chatParser.OPS) | (1 << chatParser.COLON) | (1 << chatParser.AMP) | (1 << chatParser.DBLCOLON) | (1 << chatParser.Greater))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (chatParser.Less - 32)) | (1 << (chatParser.RightAngle - 32)) | (1 << (chatParser.RightArrow - 32)) | (1 << (chatParser.DBLEQ - 32)) | (1 << (chatParser.NUMERIC - 32)) | (1 << (chatParser.STRING - 32)) | (1 << (chatParser.NL - 32)) | (1 << (chatParser.SENTENCE - 32)))) !== 0) || _la === chatParser.URL);
			this.state = 855;
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
		this.enterRule(_localctx, 124, chatParser.RULE_instruction);
		let _la: number;
		try {
			let _alt: number;
			this.state = 903;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 117, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 857;
				this.match(chatParser.OPB);
				this.state = 861;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === chatParser.NL) {
					{
					{
					this.state = 858;
					this.match(chatParser.NL);
					}
					}
					this.state = 863;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 865;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 110, this._ctx) ) {
				case 1:
					{
					this.state = 864;
					this.s_and_w();
					}
					break;
				}
				this.state = 888;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << chatParser.S) | (1 << chatParser.OPS) | (1 << chatParser.COLON) | (1 << chatParser.AMP) | (1 << chatParser.DBLCOLON) | (1 << chatParser.Greater))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (chatParser.Less - 32)) | (1 << (chatParser.RightAngle - 32)) | (1 << (chatParser.RightArrow - 32)) | (1 << (chatParser.DBLEQ - 32)) | (1 << (chatParser.NUMERIC - 32)) | (1 << (chatParser.STRING - 32)) | (1 << (chatParser.SENTENCE - 32)))) !== 0) || _la === chatParser.URL) {
					{
					{
					this.state = 867;
					this.s_and_w();
					this.state = 877;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 112, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 868;
							this.match(chatParser.NL);
							this.state = 872;
							this._errHandler.sync(this);
							_alt = this.interpreter.adaptivePredict(this._input, 111, this._ctx);
							while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
								if (_alt === 1) {
									{
									{
									this.state = 869;
									this.match(chatParser.S);
									}
									}
								}
								this.state = 874;
								this._errHandler.sync(this);
								_alt = this.interpreter.adaptivePredict(this._input, 111, this._ctx);
							}
							}
							}
						}
						this.state = 879;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 112, this._ctx);
					}
					this.state = 883;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === chatParser.NL) {
						{
						{
						this.state = 880;
						this.match(chatParser.NL);
						}
						}
						this.state = 885;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
					}
					this.state = 890;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 891;
				this.match(chatParser.CL);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 892;
				this.match(chatParser.OPB);
				this.state = 896;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === chatParser.NL) {
					{
					{
					this.state = 893;
					this.match(chatParser.NL);
					}
					}
					this.state = 898;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 900;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << chatParser.S) | (1 << chatParser.OPS) | (1 << chatParser.COLON) | (1 << chatParser.AMP) | (1 << chatParser.DBLCOLON) | (1 << chatParser.Greater))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (chatParser.Less - 32)) | (1 << (chatParser.RightAngle - 32)) | (1 << (chatParser.RightArrow - 32)) | (1 << (chatParser.DBLEQ - 32)) | (1 << (chatParser.NUMERIC - 32)) | (1 << (chatParser.STRING - 32)) | (1 << (chatParser.SENTENCE - 32)))) !== 0) || _la === chatParser.URL) {
					{
					this.state = 899;
					this.s_and_w();
					}
				}

				this.state = 902;
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
		this.enterRule(_localctx, 126, chatParser.RULE_hint);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 905;
			this.match(chatParser.OPQ);
			this.state = 907;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 906;
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
				this.state = 909;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << chatParser.OPDOT) | (1 << chatParser.S) | (1 << chatParser.BitChat) | (1 << chatParser.BitConv) | (1 << chatParser.COMMENT) | (1 << chatParser.Image_type) | (1 << chatParser.Audio_type) | (1 << chatParser.Video_type) | (1 << chatParser.OPDOLL) | (1 << chatParser.OPBUL) | (1 << chatParser.OPESC) | (1 << chatParser.OPRANGLES) | (1 << chatParser.OPRANGLEL) | (1 << chatParser.OPDANGLE) | (1 << chatParser.OPU) | (1 << chatParser.OPB) | (1 << chatParser.OPQ) | (1 << chatParser.OPA) | (1 << chatParser.OPP) | (1 << chatParser.OPM) | (1 << chatParser.OPS) | (1 << chatParser.OPR) | (1 << chatParser.OPC) | (1 << chatParser.OPHASH) | (1 << chatParser.COLON) | (1 << chatParser.AMP) | (1 << chatParser.DBLCOLON) | (1 << chatParser.PLUS) | (1 << chatParser.DotAt) | (1 << chatParser.Greater))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (chatParser.Less - 32)) | (1 << (chatParser.RightAngle - 32)) | (1 << (chatParser.RightArrow - 32)) | (1 << (chatParser.DBLEQ - 32)) | (1 << (chatParser.HSPL - 32)) | (1 << (chatParser.HSPL2 - 32)) | (1 << (chatParser.SSPL - 32)) | (1 << (chatParser.SSPL2 - 32)) | (1 << (chatParser.DCANY - 32)) | (1 << (chatParser.ArticleText - 32)) | (1 << (chatParser.NOTCL - 32)) | (1 << (chatParser.NUMERIC - 32)) | (1 << (chatParser.STRING - 32)) | (1 << (chatParser.NL - 32)) | (1 << (chatParser.SENTENCE - 32)) | (1 << (chatParser.BARSTRING - 32)) | (1 << (chatParser.OPAT - 32)) | (1 << (chatParser.AtProgress - 32)) | (1 << (chatParser.AtReference - 32)) | (1 << (chatParser.AtWidth - 32)) | (1 << (chatParser.AtHeight - 32)) | (1 << (chatParser.AtProgressPoints - 32)) | (1 << (chatParser.AtShortanswer - 32)) | (1 << (chatParser.AtLonganswer - 32)) | (1 << (chatParser.AtExampleWithStr - 32)) | (1 << (chatParser.AtExamplecol - 32)) | (1 << (chatParser.AtExamplecl - 32)) | (1 << (chatParser.AtPartialAnswerS - 32)) | (1 << (chatParser.AtPartialAnswer - 32)) | (1 << (chatParser.AtLabeltrue - 32)) | (1 << (chatParser.AtLabelfalse - 32)) | (1 << (chatParser.AtPoints - 32)))) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (chatParser.AtSrc - 64)) | (1 << (chatParser.OPATALT - 64)) | (1 << (chatParser.OPAMARK - 64)) | (1 << (chatParser.ShowInIndex - 64)) | (1 << (chatParser.OpAtCaption - 64)) | (1 << (chatParser.OpAtLicense - 64)) | (1 << (chatParser.OpAtCopyright - 64)) | (1 << (chatParser.OpAtSearch - 64)) | (1 << (chatParser.OpAtIsTracked - 64)) | (1 << (chatParser.OpAtIsInfoOnly - 64)) | (1 << (chatParser.AtDate - 64)) | (1 << (chatParser.Http - 64)) | (1 << (chatParser.Https - 64)) | (1 << (chatParser.AmpAudio - 64)) | (1 << (chatParser.AmpImage - 64)) | (1 << (chatParser.AmpImageZoom - 64)) | (1 << (chatParser.AmpImageWAudio - 64)) | (1 << (chatParser.AmpVideo - 64)) | (1 << (chatParser.AmpArticle - 64)) | (1 << (chatParser.AmpDocument - 64)) | (1 << (chatParser.AmpApp - 64)) | (1 << (chatParser.AmpWebsite - 64)) | (1 << (chatParser.AmpStillImageFilm - 64)) | (1 << (chatParser.AmpPdf - 64)) | (1 << (chatParser.OpAmpAudio - 64)) | (1 << (chatParser.OpAmpImage - 64)) | (1 << (chatParser.OpAmpImageZoom - 64)) | (1 << (chatParser.OpAmpImageWAudio - 64)) | (1 << (chatParser.OpAmpVideo - 64)) | (1 << (chatParser.OpAmpArticle - 64)) | (1 << (chatParser.OpAmpArticleAtt - 64)) | (1 << (chatParser.OpAmpDocument - 64)))) !== 0) || ((((_la - 96)) & ~0x1F) === 0 && ((1 << (_la - 96)) & ((1 << (chatParser.OpAmpApp - 96)) | (1 << (chatParser.OpAmpWebsite - 96)) | (1 << (chatParser.OpAmpStillImageFilm - 96)) | (1 << (chatParser.BracEnclose - 96)) | (1 << (chatParser.AmpAudioLink - 96)) | (1 << (chatParser.AmpImageLink - 96)) | (1 << (chatParser.AmpVideoLink - 96)) | (1 << (chatParser.AmpArticleLink - 96)) | (1 << (chatParser.AmpDocumentLink - 96)) | (1 << (chatParser.AmpAppLink - 96)) | (1 << (chatParser.AmpWebsiteLink - 96)) | (1 << (chatParser.AmpStillImageFilmLink - 96)) | (1 << (chatParser.OpAmpAudioLink - 96)) | (1 << (chatParser.OpAmpImageLink - 96)) | (1 << (chatParser.OpAmpVideoLink - 96)) | (1 << (chatParser.OpAmpArticleLink - 96)) | (1 << (chatParser.OpAmpDocumentLink - 96)) | (1 << (chatParser.OpAmpAppLink - 96)) | (1 << (chatParser.OpAmpWebsiteLink - 96)) | (1 << (chatParser.OpAmpStillImageFilmLink - 96)) | (1 << (chatParser.BitmarkMinus - 96)) | (1 << (chatParser.BitmarkPlus - 96)) | (1 << (chatParser.ColonText - 96)) | (1 << (chatParser.Prosemirror - 96)) | (1 << (chatParser.Placeholder - 96)) | (1 << (chatParser.BASIC - 96)) | (1 << (chatParser.JPG - 96)) | (1 << (chatParser.PNG - 96)) | (1 << (chatParser.GIF - 96)) | (1 << (chatParser.SVG - 96)) | (1 << (chatParser.MP2 - 96)) | (1 << (chatParser.MP3 - 96)))) !== 0) || ((((_la - 128)) & ~0x1F) === 0 && ((1 << (_la - 128)) & ((1 << (chatParser.MP4 - 128)) | (1 << (chatParser.FLV - 128)) | (1 << (chatParser.WMV - 128)) | (1 << (chatParser.MPEG - 128)) | (1 << (chatParser.MPG - 128)) | (1 << (chatParser.TEL - 128)) | (1 << (chatParser.DotArticleAtt - 128)) | (1 << (chatParser.STAR - 128)) | (1 << (chatParser.URL - 128)) | (1 << (chatParser.LIST_LINE - 128)) | (1 << (chatParser.ENCLBARS - 128)))) !== 0));
			this.state = 911;
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
		this.enterRule(_localctx, 128, chatParser.RULE_title);
		let _la: number;
		try {
			this.state = 925;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 121, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 913;
				this.match(chatParser.OPHASH);
				this.state = 916;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					this.state = 916;
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
					case chatParser.SENTENCE:
					case chatParser.URL:
						{
						this.state = 914;
						this.s_and_w();
						}
						break;
					case chatParser.NL:
						{
						this.state = 915;
						this.match(chatParser.NL);
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					}
					this.state = 918;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << chatParser.S) | (1 << chatParser.OPS) | (1 << chatParser.COLON) | (1 << chatParser.AMP) | (1 << chatParser.DBLCOLON) | (1 << chatParser.Greater))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (chatParser.Less - 32)) | (1 << (chatParser.RightAngle - 32)) | (1 << (chatParser.RightArrow - 32)) | (1 << (chatParser.DBLEQ - 32)) | (1 << (chatParser.NUMERIC - 32)) | (1 << (chatParser.STRING - 32)) | (1 << (chatParser.NL - 32)) | (1 << (chatParser.SENTENCE - 32)))) !== 0) || _la === chatParser.URL);
				this.state = 920;
				this.match(chatParser.CL);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 921;
				this.match(chatParser.OPHASH);
				this.state = 922;
				this.s_and_w();
				this.state = 923;
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
		this.enterRule(_localctx, 130, chatParser.RULE_bool_label);
		try {
			this.state = 935;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case chatParser.AtLabeltrue:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 927;
				this.match(chatParser.AtLabeltrue);
				this.state = 928;
				this.s_and_w();
				this.state = 929;
				this.match(chatParser.CL);
				}
				break;
			case chatParser.AtLabelfalse:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 931;
				this.match(chatParser.AtLabelfalse);
				this.state = 932;
				this.s_and_w();
				this.state = 933;
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
		this.enterRule(_localctx, 132, chatParser.RULE_progress_points);
		try {
			this.state = 946;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 123, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 937;
				this.match(chatParser.AtProgressPoints);
				this.state = 938;
				this.match(chatParser.COLON);
				this.state = 939;
				this.match(chatParser.NUMERIC);
				this.state = 940;
				this.match(chatParser.CL);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 941;
				this.match(chatParser.AtProgressPoints);
				this.state = 942;
				this.match(chatParser.COLON);
				this.state = 943;
				this.s_and_w();
				this.state = 944;
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
		this.enterRule(_localctx, 134, chatParser.RULE_istracked);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 948;
			this.match(chatParser.OpAtIsTracked);
			this.state = 949;
			this.s_and_w();
			this.state = 950;
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
		this.enterRule(_localctx, 136, chatParser.RULE_isinfoonly);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 952;
			this.match(chatParser.OpAtIsInfoOnly);
			this.state = 953;
			this.s_and_w();
			this.state = 954;
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
		this.enterRule(_localctx, 138, chatParser.RULE_atdef);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 956;
			this.atdef_();
			this.state = 966;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 125, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 960;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === chatParser.NL) {
						{
						{
						this.state = 957;
						this.match(chatParser.NL);
						}
						}
						this.state = 962;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					this.state = 963;
					this.atdef_();
					}
					}
				}
				this.state = 968;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 125, this._ctx);
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
		this.enterRule(_localctx, 140, chatParser.RULE_atdef_);
		let _la: number;
		try {
			let _alt: number;
			this.state = 991;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case chatParser.OPA:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 969;
				this.match(chatParser.OPA);
				this.state = 970;
				this.s_and_w();
				this.state = 971;
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
				this.state = 972;
				this.s_and_w();
				this.state = 978;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << chatParser.S) | (1 << chatParser.OPS) | (1 << chatParser.COLON) | (1 << chatParser.AMP) | (1 << chatParser.DBLCOLON) | (1 << chatParser.Greater))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (chatParser.Less - 32)) | (1 << (chatParser.RightAngle - 32)) | (1 << (chatParser.RightArrow - 32)) | (1 << (chatParser.DBLEQ - 32)) | (1 << (chatParser.NUMERIC - 32)) | (1 << (chatParser.STRING - 32)) | (1 << (chatParser.NL - 32)) | (1 << (chatParser.SENTENCE - 32)))) !== 0) || _la === chatParser.URL) {
					{
					this.state = 976;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 126, this._ctx) ) {
					case 1:
						{
						this.state = 973;
						this.match(chatParser.NL);
						}
						break;

					case 2:
						{
						this.state = 974;
						this.match(chatParser.COLON);
						}
						break;

					case 3:
						{
						this.state = 975;
						this.s_and_w();
						}
						break;
					}
					}
					this.state = 980;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 981;
				this.match(chatParser.CL);
				}
				break;
			case chatParser.OpAtCopyright:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 983;
				this.match(chatParser.OpAtCopyright);
				this.state = 987;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 128, this._ctx);
				while (_alt !== 1 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1 + 1) {
						{
						{
						this.state = 984;
						this.matchWildcard();
						}
						}
					}
					this.state = 989;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 128, this._ctx);
				}
				this.state = 990;
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
		this.enterRule(_localctx, 142, chatParser.RULE_dollarans);
		let _la: number;
		try {
			this.state = 1012;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 134, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 993;
				this.match(chatParser.OPDOLL);
				this.state = 997;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					this.state = 997;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 130, this._ctx) ) {
					case 1:
						{
						this.state = 994;
						this.s_and_w();
						}
						break;

					case 2:
						{
						this.state = 995;
						this.match(chatParser.COLON);
						}
						break;

					case 3:
						{
						this.state = 996;
						this.match(chatParser.NL);
						}
						break;
					}
					}
					this.state = 999;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << chatParser.S) | (1 << chatParser.OPS) | (1 << chatParser.COLON) | (1 << chatParser.AMP) | (1 << chatParser.DBLCOLON) | (1 << chatParser.Greater))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (chatParser.Less - 32)) | (1 << (chatParser.RightAngle - 32)) | (1 << (chatParser.RightArrow - 32)) | (1 << (chatParser.DBLEQ - 32)) | (1 << (chatParser.NUMERIC - 32)) | (1 << (chatParser.STRING - 32)) | (1 << (chatParser.NL - 32)) | (1 << (chatParser.SENTENCE - 32)))) !== 0) || _la === chatParser.URL);
				this.state = 1001;
				this.match(chatParser.CL);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1002;
				this.match(chatParser.OPDOLL);
				this.state = 1008;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << chatParser.S) | (1 << chatParser.OPS) | (1 << chatParser.COLON) | (1 << chatParser.AMP) | (1 << chatParser.DBLCOLON) | (1 << chatParser.Greater))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (chatParser.Less - 32)) | (1 << (chatParser.RightAngle - 32)) | (1 << (chatParser.RightArrow - 32)) | (1 << (chatParser.DBLEQ - 32)) | (1 << (chatParser.NUMERIC - 32)) | (1 << (chatParser.STRING - 32)) | (1 << (chatParser.NL - 32)) | (1 << (chatParser.SENTENCE - 32)))) !== 0) || _la === chatParser.URL) {
					{
					this.state = 1006;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 132, this._ctx) ) {
					case 1:
						{
						this.state = 1003;
						this.s_and_w();
						}
						break;

					case 2:
						{
						this.state = 1004;
						this.match(chatParser.COLON);
						}
						break;

					case 3:
						{
						this.state = 1005;
						this.match(chatParser.NL);
						}
						break;
					}
					}
					this.state = 1010;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1011;
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
		this.enterRule(_localctx, 144, chatParser.RULE_anchor);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1014;
			this.match(chatParser.OPDANGLE);
			this.state = 1016;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << chatParser.S) | (1 << chatParser.OPS) | (1 << chatParser.COLON) | (1 << chatParser.AMP) | (1 << chatParser.DBLCOLON) | (1 << chatParser.Greater))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (chatParser.Less - 32)) | (1 << (chatParser.RightAngle - 32)) | (1 << (chatParser.RightArrow - 32)) | (1 << (chatParser.DBLEQ - 32)) | (1 << (chatParser.NUMERIC - 32)) | (1 << (chatParser.STRING - 32)) | (1 << (chatParser.SENTENCE - 32)))) !== 0) || _la === chatParser.URL) {
				{
				this.state = 1015;
				this.s_and_w();
				}
			}

			this.state = 1018;
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
		this.enterRule(_localctx, 146, chatParser.RULE_lines);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1024;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 1020;
				this.s_and_w();
				this.state = 1022;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === chatParser.NL) {
					{
					this.state = 1021;
					this.match(chatParser.NL);
					}
				}

				}
				}
				this.state = 1026;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << chatParser.S) | (1 << chatParser.OPS) | (1 << chatParser.COLON) | (1 << chatParser.AMP) | (1 << chatParser.DBLCOLON) | (1 << chatParser.Greater))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (chatParser.Less - 32)) | (1 << (chatParser.RightAngle - 32)) | (1 << (chatParser.RightArrow - 32)) | (1 << (chatParser.DBLEQ - 32)) | (1 << (chatParser.NUMERIC - 32)) | (1 << (chatParser.STRING - 32)) | (1 << (chatParser.SENTENCE - 32)))) !== 0) || _la === chatParser.URL);
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
		this.enterRule(_localctx, 148, chatParser.RULE_s_and_w);
		let _la: number;
		try {
			let _alt: number;
			this.state = 1074;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 145, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1028;
				this.match(chatParser.STRING);
				this.state = 1035;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 139, this._ctx) ) {
				case 1:
					{
					this.state = 1030;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					do {
						{
						{
						this.state = 1029;
						this.match(chatParser.S);
						}
						}
						this.state = 1032;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					} while (_la === chatParser.S);
					this.state = 1034;
					this.match(chatParser.NUMERIC);
					}
					break;
				}
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1037;
				this.words();
				this.state = 1044;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 141, this._ctx) ) {
				case 1:
					{
					this.state = 1039;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					do {
						{
						{
						this.state = 1038;
						this.match(chatParser.S);
						}
						}
						this.state = 1041;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					} while (_la === chatParser.S);
					this.state = 1043;
					this.match(chatParser.NUMERIC);
					}
					break;
				}
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1046;
				this.match(chatParser.OPS);
				this.state = 1047;
				this.s_and_w();
				this.state = 1048;
				this.match(chatParser.CL);
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1050;
				this.match(chatParser.NUMERIC);
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 1054;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === chatParser.S) {
					{
					{
					this.state = 1051;
					this.match(chatParser.S);
					}
					}
					this.state = 1056;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1057;
				this.match(chatParser.COLON);
				this.state = 1061;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 143, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 1058;
						this.match(chatParser.S);
						}
						}
					}
					this.state = 1063;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 143, this._ctx);
				}
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 1064;
				this.match(chatParser.AMP);
				this.state = 1068;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 144, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 1065;
						this.match(chatParser.S);
						}
						}
					}
					this.state = 1070;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 144, this._ctx);
				}
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 1071;
				this.match(chatParser.DBLCOLON);
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 1072;
				this.match(chatParser.DBLEQ);
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 1073;
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
	public bracket_escaped(): Bracket_escapedContext {
		let _localctx: Bracket_escapedContext = new Bracket_escapedContext(this._ctx, this.state);
		this.enterRule(_localctx, 150, chatParser.RULE_bracket_escaped);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1076;
			this.match(chatParser.OPESC);
			this.state = 1077;
			this.s_and_w();
			this.state = 1078;
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
	public clnsp(): ClnspContext {
		let _localctx: ClnspContext = new ClnspContext(this._ctx, this.state);
		this.enterRule(_localctx, 152, chatParser.RULE_clnsp);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1080;
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
		this.enterRule(_localctx, 154, chatParser.RULE_sspl);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1082;
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
		this.enterRule(_localctx, 156, chatParser.RULE_words);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1093;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					this.state = 1093;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case chatParser.SENTENCE:
						{
						this.state = 1084;
						this.match(chatParser.SENTENCE);
						}
						break;
					case chatParser.AMP:
						{
						this.state = 1085;
						this.match(chatParser.AMP);
						}
						break;
					case chatParser.Greater:
						{
						this.state = 1086;
						this.match(chatParser.Greater);
						this.state = 1087;
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
						this.state = 1088;
						this.match(chatParser.Less);
						this.state = 1089;
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
						this.state = 1090;
						this.match(chatParser.DBLEQ);
						}
						break;
					case chatParser.RightArrow:
						{
						this.state = 1091;
						this.match(chatParser.RightArrow);
						}
						break;
					case chatParser.RightAngle:
						{
						this.state = 1092;
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
				this.state = 1095;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 147, this._ctx);
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
		this.enterRule(_localctx, 158, chatParser.RULE_sp);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1097;
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
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\x8C\u044E\x04" +
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
		"O\tO\x04P\tP\x04Q\tQ\x03\x02\x03\x02\x07\x02\xA5\n\x02\f\x02\x0E\x02\xA8" +
		"\v\x02\x03\x02\x07\x02\xAB\n\x02\f\x02\x0E\x02\xAE\v\x02\x06\x02\xB0\n" +
		"\x02\r\x02\x0E\x02\xB1\x03\x02\x07\x02\xB5\n\x02\f\x02\x0E\x02\xB8\v\x02" +
		"\x03\x02\x03\x02\x03\x03\x03\x03\x05\x03\xBE\n\x03\x03\x04\x03\x04\x03" +
		"\x04\x03\x04\x07\x04\xC4\n\x04\f\x04\x0E\x04\xC7\v\x04\x03\x04\x03\x04" +
		"\x07\x04\xCB\n\x04\f\x04\x0E\x04\xCE\v\x04\x07\x04\xD0\n\x04\f\x04\x0E" +
		"\x04\xD3\v\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04" +
		"\x07\x04\xDC\n\x04\f\x04\x0E\x04\xDF\v\x04\x06\x04\xE1\n\x04\r\x04\x0E" +
		"\x04\xE2\x03\x04\x03\x04\x07\x04\xE7\n\x04\f\x04\x0E\x04\xEA\v\x04\x03" +
		"\x04\x03\x04\x07\x04\xEE\n\x04\f\x04\x0E\x04\xF1\v\x04\x03\x04\x07\x04" +
		"\xF4\n\x04\f\x04\x0E\x04\xF7\v\x04\x05\x04\xF9\n\x04\x03\x05\x03\x05\x03" +
		"\x05\x03\x05\x07\x05\xFF\n\x05\f\x05\x0E\x05\u0102\v\x05\x03\x05\x03\x05" +
		"\x07\x05\u0106\n\x05\f\x05\x0E\x05\u0109\v\x05\x07\x05\u010B\n\x05\f\x05" +
		"\x0E\x05\u010E\v\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03" +
		"\x05\x07\x05\u0117\n\x05\f\x05\x0E\x05\u011A\v\x05\x06\x05\u011C\n\x05" +
		"\r\x05\x0E\x05\u011D\x03\x05\x03\x05\x07\x05\u0122\n\x05\f\x05\x0E\x05" +
		"\u0125\v\x05\x03\x05\x03\x05\x07\x05\u0129\n\x05\f\x05\x0E\x05\u012C\v" +
		"\x05\x03\x05\x07\x05\u012F\n\x05\f\x05\x0E\x05\u0132\v\x05\x05\x05\u0134" +
		"\n\x05\x03\x06\x03\x06\x03\x06\x05\x06\u0139\n\x06\x03\x07\x03\x07\x03" +
		"\x07\x05\x07\u013E\n\x07\x03\b\x03\b\x03\b\x03\b\x03\t\x03\t\x03\n\x03" +
		"\n\x03\v\x03\v\x03\v\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03" +
		"\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03" +
		"\f\x03\f\x05\f\u0161\n\f\x03\r\x03\r\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03" +
		"\x0E\x03\x0E\x07\x0E\u016B\n\x0E\f\x0E\x0E\x0E\u016E\v\x0E\x03\x0F\x03" +
		"\x0F\x03\x0F\x03\x0F\x05\x0F\u0174\n\x0F\x03\x0F\x07\x0F\u0177\n\x0F\f" +
		"\x0F\x0E\x0F\u017A\v\x0F\x03\x0F\x03\x0F\x03\x10\x03\x10\x03\x11\x03\x11" +
		"\x03\x11\x03\x11\x03\x12\x07\x12\u0185\n\x12\f\x12\x0E\x12\u0188\v\x12" +
		"\x03\x12\x03\x12\x07\x12\u018C\n\x12\f\x12\x0E\x12\u018F\v\x12\x03\x13" +
		"\x03\x13\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14" +
		"\x03\x14\x05\x14\u019C\n\x14\x03\x15\x03\x15\x03\x15\x03\x15\x05\x15\u01A2" +
		"\n\x15\x03\x16\x03\x16\x03\x16\x05\x16\u01A7\n\x16\x03\x16\x03\x16\x05" +
		"\x16\u01AB\n\x16\x03\x16\x03\x16\x05\x16\u01AF\n\x16\x03\x16\x05\x16\u01B2" +
		"\n\x16\x03\x17\x03\x17\x03\x17\x05\x17\u01B7\n\x17\x03\x18\x03\x18\x03" +
		"\x19\x03\x19\x03\x1A\x03\x1A\x03\x1B\x03\x1B\x03\x1C\x03\x1C\x03\x1D\x03" +
		"\x1D\x03\x1E\x03\x1E\x03\x1F\x03\x1F\x03 \x03 \x03!\x03!\x03!\x05!\u01CE" +
		"\n!\x03!\x03!\x03!\x05!\u01D3\n!\x05!\u01D5\n!\x03\"\x03\"\x03#\x03#\x03" +
		"#\x03#\x03#\x03#\x05#\u01DF\n#\x03$\x03$\x03$\x03$\x03$\x03$\x03$\x03" +
		"$\x05$\u01E9\n$\x03%\x03%\x03%\x03%\x03%\x03%\x03%\x03%\x05%\u01F3\n%" +
		"\x03&\x03&\x03&\x03&\x05&\u01F9\n&\x03&\x03&\x03&\x03&\x03&\x05&\u0200" +
		"\n&\x03\'\x03\'\x07\'\u0204\n\'\f\'\x0E\'\u0207\v\'\x03(\x03(\x03(\x07" +
		"(\u020C\n(\f(\x0E(\u020F\v(\x03(\x03(\x03(\x03)\x03)\x07)\u0216\n)\f)" +
		"\x0E)\u0219\v)\x03*\x03*\x03*\x03*\x03*\x03*\x03*\x03*\x05*\u0223\n*\x03" +
		"+\x03+\x07+\u0227\n+\f+\x0E+\u022A\v+\x03+\x03+\x05+\u022E\n+\x03,\x03" +
		",\x03,\x07,\u0233\n,\f,\x0E,\u0236\v,\x03,\x03,\x03,\x03-\x03-\x03-\x05" +
		"-\u023E\n-\x03-\x03-\x05-\u0242\n-\x03-\x03-\x05-\u0246\n-\x03-\x05-\u0249" +
		"\n-\x03.\x03.\x03.\x03.\x03.\x03.\x03.\x03.\x03.\x03.\x03.\x07.\u0256" +
		"\n.\f.\x0E.\u0259\v.\x03.\x05.\u025C\n.\x03/\x03/\x03/\x03/\x03/\x03/" +
		"\x03/\x03/\x03/\x03/\x03/\x07/\u0269\n/\f/\x0E/\u026C\v/\x03/\x05/\u026F" +
		"\n/\x030\x030\x070\u0273\n0\f0\x0E0\u0276\v0\x031\x031\x031\x031\x031" +
		"\x031\x031\x031\x051\u0280\n1\x032\x032\x032\x052\u0285\n2\x032\x032\x03" +
		"2\x052\u028A\n2\x052\u028C\n2\x033\x033\x033\x053\u0291\n3\x033\x033\x03" +
		"3\x053\u0296\n3\x053\u0298\n3\x034\x034\x034\x054\u029D\n4\x034\x034\x07" +
		"4\u02A1\n4\f4\x0E4\u02A4\v4\x034\x034\x064\u02A8\n4\r4\x0E4\u02A9\x03" +
		"4\x034\x034\x034\x034\x034\x034\x074\u02B3\n4\f4\x0E4\u02B6\v4\x034\x05" +
		"4\u02B9\n4\x035\x035\x035\x035\x036\x036\x037\x037\x037\x077\u02C4\n7" +
		"\f7\x0E7\u02C7\v7\x037\x057\u02CA\n7\x037\x037\x037\x037\x077\u02D0\n" +
		"7\f7\x0E7\u02D3\v7\x037\x037\x077\u02D7\n7\f7\x0E7\u02DA\v7\x037\x057" +
		"\u02DD\n7\x057\u02DF\n7\x038\x038\x038\x038\x078\u02E5\n8\f8\x0E8\u02E8" +
		"\v8\x038\x038\x039\x039\x059\u02EE\n9\x039\x039\x039\x059\u02F3\n9\x03" +
		"9\x059\u02F6\n9\x03:\x03:\x03:\x03:\x05:\u02FC\n:\x03:\x05:\u02FF\n:\x03" +
		";\x03;\x05;\u0303\n;\x03;\x03;\x03;\x07;\u0308\n;\f;\x0E;\u030B\v;\x07" +
		";\u030D\n;\f;\x0E;\u0310\v;\x03;\x07;\u0313\n;\f;\x0E;\u0316\v;\x07;\u0318" +
		"\n;\f;\x0E;\u031B\v;\x03;\x03;\x03;\x03;\x03;\x07;\u0322\n;\f;\x0E;\u0325" +
		"\v;\x03;\x05;\u0328\n;\x03<\x03<\x03<\x03<\x03<\x06<\u032F\n<\r<\x0E<" +
		"\u0330\x03<\x03<\x03<\x03<\x03<\x03<\x03<\x07<\u033A\n<\f<\x0E<\u033D" +
		"\v<\x03<\x05<\u0340\n<\x03=\x03=\x03=\x03=\x03>\x03>\x03>\x03>\x06>\u034A" +
		"\n>\r>\x0E>\u034B\x03>\x03>\x05>\u0350\n>\x03?\x03?\x03?\x03?\x06?\u0356" +
		"\n?\r?\x0E?\u0357\x03?\x03?\x03@\x03@\x07@\u035E\n@\f@\x0E@\u0361\v@\x03" +
		"@\x05@\u0364\n@\x03@\x03@\x03@\x07@\u0369\n@\f@\x0E@\u036C\v@\x07@\u036E" +
		"\n@\f@\x0E@\u0371\v@\x03@\x07@\u0374\n@\f@\x0E@\u0377\v@\x07@\u0379\n" +
		"@\f@\x0E@\u037C\v@\x03@\x03@\x03@\x07@\u0381\n@\f@\x0E@\u0384\v@\x03@" +
		"\x05@\u0387\n@\x03@\x05@\u038A\n@\x03A\x03A\x06A\u038E\nA\rA\x0EA\u038F" +
		"\x03A\x03A\x03B\x03B\x03B\x06B\u0397\nB\rB\x0EB\u0398\x03B\x03B\x03B\x03" +
		"B\x03B\x05B\u03A0\nB\x03C\x03C\x03C\x03C\x03C\x03C\x03C\x03C\x05C\u03AA" +
		"\nC\x03D\x03D\x03D\x03D\x03D\x03D\x03D\x03D\x03D\x05D\u03B5\nD\x03E\x03" +
		"E\x03E\x03E\x03F\x03F\x03F\x03F\x03G\x03G\x07G\u03C1\nG\fG\x0EG\u03C4" +
		"\vG\x03G\x07G\u03C7\nG\fG\x0EG\u03CA\vG\x03H\x03H\x03H\x03H\x03H\x03H" +
		"\x03H\x07H\u03D3\nH\fH\x0EH\u03D6\vH\x03H\x03H\x03H\x03H\x07H\u03DC\n" +
		"H\fH\x0EH\u03DF\vH\x03H\x05H\u03E2\nH\x03I\x03I\x03I\x03I\x06I\u03E8\n" +
		"I\rI\x0EI\u03E9\x03I\x03I\x03I\x03I\x03I\x07I\u03F1\nI\fI\x0EI\u03F4\v" +
		"I\x03I\x05I\u03F7\nI\x03J\x03J\x05J\u03FB\nJ\x03J\x03J\x03K\x03K\x05K" +
		"\u0401\nK\x06K\u0403\nK\rK\x0EK\u0404\x03L\x03L\x06L\u0409\nL\rL\x0EL" +
		"\u040A\x03L\x05L\u040E\nL\x03L\x03L\x06L\u0412\nL\rL\x0EL\u0413\x03L\x05" +
		"L\u0417\nL\x03L\x03L\x03L\x03L\x03L\x03L\x07L\u041F\nL\fL\x0EL\u0422\v" +
		"L\x03L\x03L\x07L\u0426\nL\fL\x0EL\u0429\vL\x03L\x03L\x07L\u042D\nL\fL" +
		"\x0EL\u0430\vL\x03L\x03L\x03L\x05L\u0435\nL\x03M\x03M\x03M\x03M\x03N\x03" +
		"N\x03O\x03O\x03P\x03P\x03P\x03P\x03P\x03P\x03P\x03P\x03P\x06P\u0448\n" +
		"P\rP\x0EP\u0449\x03Q\x03Q\x03Q\x06\u0257\u026A\u02B4\u03DD\x02\x02R\x02" +
		"\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02" +
		"\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02$\x02&\x02(\x02*\x02" +
		",\x02.\x020\x022\x024\x026\x028\x02:\x02<\x02>\x02@\x02B\x02D\x02F\x02" +
		"H\x02J\x02L\x02N\x02P\x02R\x02T\x02V\x02X\x02Z\x02\\\x02^\x02`\x02b\x02" +
		"d\x02f\x02h\x02j\x02l\x02n\x02p\x02r\x02t\x02v\x02x\x02z\x02|\x02~\x02" +
		"\x80\x02\x82\x02\x84\x02\x86\x02\x88\x02\x8A\x02\x8C\x02\x8E\x02\x90\x02" +
		"\x92\x02\x94\x02\x96\x02\x98\x02\x9A\x02\x9C\x02\x9E\x02\xA0\x02\x02\x16" +
		"\x03\x02&\'\x07\x02TUWXfmvwyz\x04\x02SShh\x04\x02TTii\x04\x02UUjj\x04" +
		"\x02VVkk\x04\x02WWll\x04\x02XXmm\x04\x02__qq\x04\x02aarr\x04\x02bbss\x04" +
		"\x02cctt\x04\x02dduu\x03\x0256\x04\x02CCFI\x03\x02\x1B\x1B\x04\x02\x1C" +
		"\x1C\x1E\x1E\x03\x02()\x03\x02!!\x03\x02\"\"\x02\u04D3\x02\xAF\x03\x02" +
		"\x02\x02\x04\xBD\x03\x02\x02\x02\x06\xBF\x03\x02\x02\x02\b\xFA\x03\x02" +
		"\x02\x02\n\u0135\x03\x02\x02\x02\f\u013A\x03\x02\x02\x02\x0E\u013F\x03" +
		"\x02\x02\x02\x10\u0143\x03\x02\x02\x02\x12\u0145\x03\x02\x02\x02\x14\u0147" +
		"\x03\x02\x02\x02\x16\u0160\x03\x02\x02\x02\x18\u0162\x03\x02\x02\x02\x1A" +
		"\u0164\x03\x02\x02\x02\x1C\u016F\x03\x02\x02\x02\x1E\u017D\x03\x02\x02" +
		"\x02 \u017F\x03\x02\x02\x02\"\u0186\x03\x02\x02\x02$\u0190\x03\x02\x02" +
		"\x02&\u019B\x03\x02\x02\x02(\u01A1\x03\x02\x02\x02*\u01B1\x03\x02\x02" +
		"\x02,\u01B3\x03\x02\x02\x02.\u01B8\x03\x02\x02\x020\u01BA\x03\x02\x02" +
		"\x022\u01BC\x03\x02\x02\x024\u01BE\x03\x02\x02\x026\u01C0\x03\x02\x02" +
		"\x028\u01C2\x03\x02\x02\x02:\u01C4\x03\x02\x02\x02<\u01C6\x03\x02\x02" +
		"\x02>\u01C8\x03\x02\x02\x02@\u01D4\x03\x02\x02\x02B\u01D6\x03\x02\x02" +
		"\x02D\u01DE\x03\x02\x02\x02F\u01E0\x03\x02\x02\x02H\u01EA\x03\x02\x02" +
		"\x02J\u01F4\x03\x02\x02\x02L\u0201\x03\x02\x02\x02N\u0208\x03\x02\x02" +
		"\x02P\u0213\x03\x02\x02\x02R\u021A\x03\x02\x02\x02T\u0224\x03\x02\x02" +
		"\x02V\u022F\x03\x02\x02\x02X\u0248\x03\x02\x02\x02Z\u025B\x03\x02\x02" +
		"\x02\\\u026E\x03\x02\x02\x02^\u0270\x03\x02\x02\x02`\u0277\x03\x02\x02" +
		"\x02b\u028B\x03\x02\x02\x02d\u0297\x03\x02\x02\x02f\u02B8\x03\x02\x02" +
		"\x02h\u02BA\x03\x02\x02\x02j\u02BE\x03\x02\x02\x02l\u02DE\x03\x02\x02" +
		"\x02n\u02E0\x03\x02\x02\x02p\u02F5\x03\x02\x02\x02r\u02FE\x03\x02\x02" +
		"\x02t\u0327\x03\x02\x02\x02v\u033F\x03\x02\x02\x02x\u0341\x03\x02\x02" +
		"\x02z\u0345\x03\x02\x02\x02|\u0351\x03\x02\x02\x02~\u0389\x03\x02\x02" +
		"\x02\x80\u038B\x03\x02\x02\x02\x82\u039F\x03\x02\x02\x02\x84\u03A9\x03" +
		"\x02\x02\x02\x86\u03B4\x03\x02\x02\x02\x88\u03B6\x03\x02\x02\x02\x8A\u03BA" +
		"\x03\x02\x02\x02\x8C\u03BE\x03\x02\x02\x02\x8E\u03E1\x03\x02\x02\x02\x90" +
		"\u03F6\x03\x02\x02\x02\x92\u03F8\x03\x02\x02\x02\x94\u0402\x03\x02\x02" +
		"\x02\x96\u0434\x03\x02\x02\x02\x98\u0436\x03\x02\x02\x02\x9A\u043A\x03" +
		"\x02\x02\x02\x9C\u043C\x03\x02\x02\x02\x9E\u0447\x03\x02\x02\x02\xA0\u044B" +
		"\x03\x02\x02\x02\xA2\xAC\x05\x04\x03\x02\xA3\xA5\x07\x04\x02\x02\xA4\xA3" +
		"\x03\x02\x02\x02\xA5\xA8\x03\x02\x02\x02\xA6\xA4\x03\x02\x02\x02\xA6\xA7" +
		"\x03\x02\x02\x02\xA7\xA9\x03\x02\x02\x02\xA8\xA6\x03\x02\x02\x02\xA9\xAB" +
		"\x07/\x02\x02\xAA\xA6\x03\x02\x02\x02\xAB\xAE\x03\x02\x02\x02\xAC\xAA" +
		"\x03\x02\x02\x02\xAC\xAD\x03\x02\x02\x02\xAD\xB0\x03\x02\x02\x02\xAE\xAC" +
		"\x03\x02\x02\x02\xAF\xA2\x03\x02\x02\x02\xB0\xB1\x03\x02\x02\x02\xB1\xAF" +
		"\x03\x02\x02\x02\xB1\xB2\x03\x02\x02\x02\xB2\xB6\x03\x02\x02\x02\xB3\xB5" +
		"\x07/\x02\x02\xB4\xB3\x03\x02\x02\x02\xB5\xB8\x03\x02\x02\x02\xB6\xB4" +
		"\x03\x02\x02\x02\xB6\xB7\x03\x02\x02\x02\xB7\xB9\x03\x02\x02\x02\xB8\xB6" +
		"\x03\x02\x02\x02\xB9\xBA\x07\x02\x02\x03\xBA\x03\x03\x02\x02\x02\xBB\xBE" +
		"\x05\x06\x04\x02\xBC\xBE\x05\b\x05\x02\xBD\xBB\x03\x02\x02\x02\xBD\xBC" +
		"\x03\x02\x02\x02\xBE\x05\x03\x02\x02\x02\xBF\xC0\x07\x05\x02\x02\xC0\xC1" +
		"\x05\"\x12\x02\xC1\xC5\x07\x1B\x02\x02\xC2\xC4\x07/\x02\x02\xC3\xC2\x03" +
		"\x02\x02\x02\xC4\xC7\x03\x02\x02\x02\xC5\xC3\x03\x02\x02\x02\xC5\xC6\x03" +
		"\x02\x02\x02\xC6\xD1\x03\x02\x02\x02\xC7\xC5\x03\x02\x02\x02\xC8\xCC\x05" +
		"\x16\f\x02\xC9\xCB\x07/\x02\x02\xCA\xC9\x03\x02\x02\x02\xCB\xCE\x03\x02" +
		"\x02\x02\xCC\xCA\x03\x02\x02\x02\xCC\xCD\x03\x02\x02\x02\xCD\xD0\x03\x02" +
		"\x02\x02\xCE\xCC\x03\x02\x02\x02\xCF\xC8\x03\x02\x02\x02\xD0\xD3\x03\x02" +
		"\x02\x02\xD1\xCF\x03\x02\x02\x02\xD1\xD2\x03\x02\x02\x02\xD2\xD4\x03\x02" +
		"\x02\x02\xD3\xD1\x03\x02\x02\x02\xD4\xD5\t\x02\x02\x02\xD5\xD6\x05\n\x06" +
		"\x02\xD6\xD7\t\x02\x02\x02\xD7\xE0\x05\f\x07\x02\xD8\xD9\t\x02\x02\x02" +
		"\xD9\xDD\x05\x10\t\x02\xDA\xDC\x05\x14\v\x02\xDB\xDA\x03\x02\x02\x02\xDC" +
		"\xDF\x03\x02\x02\x02\xDD\xDB\x03\x02\x02\x02\xDD\xDE\x03\x02\x02\x02\xDE" +
		"\xE1\x03\x02\x02\x02\xDF\xDD\x03\x02\x02\x02\xE0\xD8\x03\x02\x02\x02\xE1" +
		"\xE2\x03\x02\x02\x02\xE2\xE0\x03\x02\x02\x02\xE2\xE3\x03\x02\x02\x02\xE3" +
		"\xE4\x03\x02\x02\x02\xE4\xE8\t\x02\x02\x02\xE5\xE7\x07/\x02\x02\xE6\xE5" +
		"\x03\x02\x02\x02\xE7\xEA\x03\x02\x02\x02\xE8\xE6\x03\x02\x02\x02\xE8\xE9" +
		"\x03\x02\x02\x02\xE9\xF8\x03\x02\x02\x02\xEA\xE8\x03\x02\x02\x02\xEB\xF5" +
		"\x05\x18\r\x02\xEC\xEE\x07/\x02\x02\xED\xEC\x03\x02\x02\x02\xEE\xF1\x03" +
		"\x02\x02\x02\xEF\xED\x03\x02\x02\x02\xEF\xF0\x03\x02\x02\x02\xF0\xF2\x03" +
		"\x02\x02\x02\xF1\xEF\x03\x02\x02\x02\xF2\xF4\x05\x18\r\x02\xF3\xEF\x03" +
		"\x02\x02\x02\xF4\xF7\x03\x02\x02\x02\xF5\xF3\x03\x02\x02\x02\xF5\xF6\x03" +
		"\x02\x02\x02\xF6\xF9\x03\x02\x02\x02\xF7\xF5\x03\x02\x02\x02\xF8\xEB\x03" +
		"\x02\x02\x02\xF8\xF9\x03\x02\x02\x02\xF9\x07\x03\x02\x02\x02\xFA\xFB\x07" +
		"\x06\x02\x02\xFB\xFC\x05\"\x12\x02\xFC\u0100\x07\x1B\x02\x02\xFD\xFF\x07" +
		"/\x02\x02\xFE\xFD\x03\x02\x02\x02\xFF\u0102\x03\x02\x02\x02\u0100\xFE" +
		"\x03\x02\x02\x02\u0100\u0101\x03\x02\x02\x02\u0101\u010C\x03\x02\x02\x02" +
		"\u0102\u0100\x03\x02\x02\x02\u0103\u0107\x05\x16\f\x02\u0104\u0106\x07" +
		"/\x02\x02\u0105\u0104\x03\x02\x02\x02\u0106\u0109\x03\x02\x02\x02\u0107" +
		"\u0105\x03\x02\x02\x02\u0107\u0108\x03\x02\x02\x02\u0108\u010B\x03\x02" +
		"\x02\x02\u0109\u0107\x03\x02\x02\x02\u010A\u0103\x03\x02\x02\x02\u010B" +
		"\u010E\x03\x02\x02\x02\u010C\u010A\x03\x02\x02\x02\u010C\u010D\x03\x02" +
		"\x02\x02\u010D\u010F\x03\x02\x02\x02\u010E\u010C\x03\x02\x02\x02\u010F" +
		"\u0110\t\x02\x02\x02\u0110\u0111\x05\n\x06\x02\u0111\u0112\t\x02\x02\x02" +
		"\u0112\u011B\x05\f\x07\x02\u0113\u0114\t\x02\x02\x02\u0114\u0118\x05\x10" +
		"\t\x02\u0115\u0117\x05\x14\v\x02\u0116\u0115\x03\x02\x02\x02\u0117\u011A" +
		"\x03\x02\x02\x02\u0118\u0116\x03\x02\x02\x02\u0118\u0119\x03\x02\x02\x02" +
		"\u0119\u011C\x03\x02\x02\x02\u011A\u0118\x03\x02\x02\x02\u011B\u0113\x03" +
		"\x02\x02\x02\u011C\u011D\x03\x02\x02\x02\u011D\u011B\x03\x02\x02\x02\u011D" +
		"\u011E\x03\x02\x02\x02\u011E\u011F\x03\x02\x02\x02\u011F\u0123\t\x02\x02" +
		"\x02\u0120\u0122\x07/\x02\x02\u0121\u0120\x03\x02\x02\x02\u0122\u0125" +
		"\x03\x02\x02\x02\u0123\u0121\x03\x02\x02\x02\u0123\u0124\x03\x02\x02\x02" +
		"\u0124\u0133\x03\x02\x02\x02\u0125\u0123\x03\x02\x02\x02\u0126\u0130\x05" +
		"\x18\r\x02\u0127\u0129\x07/\x02\x02\u0128\u0127\x03\x02\x02\x02\u0129" +
		"\u012C\x03\x02\x02\x02\u012A\u0128\x03\x02\x02\x02\u012A\u012B\x03\x02" +
		"\x02\x02\u012B\u012D\x03\x02\x02\x02\u012C\u012A\x03\x02\x02\x02\u012D" +
		"\u012F\x05\x18\r\x02\u012E\u012A\x03\x02\x02\x02\u012F\u0132\x03\x02\x02" +
		"\x02\u0130\u012E\x03\x02\x02\x02\u0130\u0131\x03\x02\x02\x02\u0131\u0134" +
		"\x03\x02\x02\x02\u0132\u0130\x03\x02\x02\x02\u0133\u0126\x03\x02\x02\x02" +
		"\u0133\u0134\x03\x02\x02\x02\u0134\t\x03\x02\x02\x02\u0135\u0138\x05\x0E" +
		"\b\x02\u0136\u0137\x07/\x02\x02\u0137\u0139\x05T+\x02\u0138\u0136\x03" +
		"\x02\x02\x02\u0138\u0139\x03\x02\x02\x02\u0139\v\x03\x02\x02\x02\u013A" +
		"\u013D\x05\x0E\b\x02\u013B\u013C\x07/\x02\x02\u013C\u013E\x05T+\x02\u013D" +
		"\u013B\x03\x02\x02\x02\u013D\u013E\x03\x02\x02\x02\u013E\r\x03\x02\x02" +
		"\x02\u013F\u0140\x07\x1A\x02\x02\u0140\u0141\x05\x96L\x02\u0141\u0142" +
		"\x07\x1B\x02\x02\u0142\x0F\x03\x02\x02\x02\u0143\u0144\x05\x96L\x02\u0144" +
		"\x11\x03\x02\x02\x02\u0145\u0146\x05\x96L\x02\u0146\x13\x03\x02\x02\x02" +
		"\u0147\u0148\x05\x9CO\x02\u0148\u0149\x05\x12\n\x02\u0149\x15\x03\x02" +
		"\x02\x02\u014A\u0161\x07\x8B\x02\x02\u014B\u0161\x05\x1A\x0E\x02\u014C" +
		"\u0161\x05\x8CG\x02\u014D\u0161\x05v<\x02\u014E\u0161\x05l7\x02\u014F" +
		"\u0161\x05\x82B\x02\u0150\u0161\x05~@\x02\u0151\u0161\x05\x80A\x02\u0152" +
		"\u0161\x05\x96L\x02\u0153\u0161\x05r:\x02\u0154\u0161\x05\x84C\x02\u0155" +
		"\u0161\x05T+\x02\u0156\u0161\x05^0\x02\u0157\u0161\x05P)\x02\u0158\u0161" +
		"\x05D#\x02\u0159\u0161\x05F$\x02\u015A\u0161\x05J&\x02\u015B\u0161\x05" +
		"H%\x02\u015C\u0161\x05L\'\x02\u015D\u0161\x05p9\x02\u015E\u0161\x05\x92" +
		"J\x02\u015F\u0161\x05\xA0Q\x02\u0160\u014A\x03\x02\x02\x02\u0160\u014B" +
		"\x03\x02\x02\x02\u0160\u014C\x03\x02\x02\x02\u0160\u014D\x03\x02\x02\x02" +
		"\u0160\u014E\x03\x02\x02\x02\u0160\u014F\x03\x02\x02\x02\u0160\u0150\x03" +
		"\x02\x02\x02\u0160\u0151\x03\x02\x02\x02\u0160\u0152\x03\x02\x02\x02\u0160" +
		"\u0153\x03\x02\x02\x02\u0160\u0154\x03\x02\x02\x02\u0160\u0155\x03\x02" +
		"\x02\x02\u0160\u0156\x03\x02\x02\x02\u0160\u0157\x03\x02\x02\x02\u0160" +
		"\u0158\x03\x02\x02\x02\u0160\u0159\x03\x02\x02\x02\u0160\u015A\x03\x02" +
		"\x02\x02\u0160\u015B\x03\x02\x02\x02\u0160\u015C\x03\x02\x02\x02\u0160" +
		"\u015D\x03\x02\x02\x02\u0160\u015E\x03\x02\x02\x02\u0160\u015F\x03\x02" +
		"\x02\x02\u0161\x17\x03\x02\x02\x02\u0162\u0163\x05\x16\f\x02\u0163\x19" +
		"\x03\x02\x02\x02\u0164\u016C\x05\x1C\x0F\x02\u0165\u016B\x05\x1C\x0F\x02" +
		"\u0166\u016B\x05~@\x02\u0167\u016B\x05\x80A\x02\u0168\u016B\x05l7\x02" +
		"\u0169\u016B\x05r:\x02\u016A\u0165\x03\x02\x02\x02\u016A\u0166\x03\x02" +
		"\x02\x02\u016A\u0167\x03\x02\x02\x02\u016A\u0168\x03\x02\x02\x02\u016A" +
		"\u0169\x03\x02\x02\x02\u016B\u016E\x03\x02\x02\x02\u016C\u016A\x03\x02" +
		"\x02\x02\u016C\u016D\x03\x02\x02\x02\u016D\x1B\x03\x02\x02\x02\u016E\u016C" +
		"\x03\x02\x02\x02\u016F\u0173\x07\x11\x02\x02\u0170\u0174\x07-\x02\x02" +
		"\u0171\u0174\x07.\x02\x02\u0172\u0174\x03\x02\x02\x02\u0173\u0170\x03" +
		"\x02\x02\x02\u0173\u0171\x03\x02\x02\x02\u0173\u0172\x03\x02\x02\x02\u0174" +
		"\u0178\x03\x02\x02\x02\u0175\u0177\x05\x96L\x02\u0176\u0175\x03\x02\x02" +
		"\x02\u0177\u017A\x03\x02\x02\x02\u0178\u0176\x03\x02\x02\x02\u0178\u0179" +
		"\x03\x02\x02\x02\u0179\u017B\x03\x02\x02\x02\u017A\u0178\x03\x02\x02\x02" +
		"\u017B\u017C\x05\x9AN\x02\u017C\x1D\x03\x02\x02\x02\u017D\u017E\x07\x1E" +
		"\x02\x02\u017E\x1F\x03\x02\x02\x02\u017F\u0180\x07A\x02\x02\u0180\u0181" +
		"\x07-\x02\x02\u0181\u0182\x07\x1B\x02\x02\u0182!\x03\x02\x02\x02\u0183" +
		"\u0185\x05$\x13\x02\u0184\u0183\x03\x02\x02\x02\u0185\u0188\x03\x02\x02" +
		"\x02\u0186\u0184\x03\x02\x02\x02\u0186\u0187\x03\x02\x02\x02\u0187\u018D" +
		"\x03\x02\x02\x02\u0188\u0186\x03\x02\x02\x02\u0189\u018C\x07x\x02\x02" +
		"\u018A\u018C\x05&\x14\x02\u018B\u0189\x03\x02\x02\x02\u018B\u018A\x03" +
		"\x02\x02\x02\u018C\u018F\x03\x02\x02\x02\u018D\u018B\x03\x02\x02\x02\u018D" +
		"\u018E\x03\x02\x02\x02\u018E#\x03\x02\x02\x02\u018F\u018D\x03\x02\x02" +
		"\x02\u0190\u0191\t\x03\x02\x02\u0191%\x03\x02\x02\x02\u0192\u019C\x05" +
		"*\x16\x02\u0193\u019C\x05b2\x02\u0194\u019C\x05,\x17\x02\u0195\u019C\x05" +
		".\x18\x02\u0196\u019C\x050\x19\x02\u0197\u019C\x052\x1A\x02\u0198\u019C";
	private static readonly _serializedATNSegment1: string =
		"\x054\x1B\x02\u0199\u019C\x056\x1C\x02\u019A\u019C\x07Y\x02\x02\u019B" +
		"\u0192\x03\x02\x02\x02\u019B\u0193\x03\x02\x02\x02\u019B\u0194\x03\x02" +
		"\x02\x02\u019B\u0195\x03\x02\x02\x02\u019B\u0196\x03\x02\x02\x02\u019B" +
		"\u0197\x03\x02\x02\x02\u019B\u0198\x03\x02\x02\x02\u019B\u0199\x03\x02" +
		"\x02\x02\u019B\u019A\x03\x02\x02\x02\u019C\'\x03\x02\x02\x02\u019D\u01A2" +
		"\x07v\x02\x02\u019E\u01A2\x07w\x02\x02\u019F\u01A2\x07x\x02\x02\u01A0" +
		"\u01A2\x03\x02\x02\x02\u01A1\u019D\x03\x02\x02\x02\u01A1\u019E\x03\x02" +
		"\x02\x02\u01A1\u019F\x03\x02\x02\x02\u01A1\u01A0\x03\x02\x02\x02\u01A2" +
		")\x03\x02\x02\x02\u01A3\u01A6\x07P\x02\x02\u01A4\u01A7\x07\b\x02\x02\u01A5" +
		"\u01A7\x07\x88\x02\x02\u01A6\u01A4\x03\x02\x02\x02\u01A6\u01A5\x03\x02" +
		"\x02\x02\u01A6\u01A7\x03\x02\x02\x02\u01A7\u01B2\x03\x02\x02\x02\u01A8" +
		"\u01AA\x07g\x02\x02\u01A9\u01AB\x07\b\x02\x02\u01AA\u01A9\x03\x02\x02" +
		"\x02\u01AA\u01AB\x03\x02\x02\x02\u01AB\u01B2\x03\x02\x02\x02\u01AC\u01AE" +
		"\x07Q\x02\x02\u01AD\u01AF\x07\b\x02\x02\u01AE\u01AD\x03\x02\x02\x02\u01AE" +
		"\u01AF\x03\x02\x02\x02\u01AF\u01B2\x03\x02\x02\x02\u01B0\u01B2\x07R\x02" +
		"\x02\u01B1\u01A3\x03\x02\x02\x02\u01B1\u01A8\x03\x02\x02\x02\u01B1\u01AC" +
		"\x03\x02\x02\x02\u01B1\u01B0\x03\x02\x02\x02\u01B2+\x03\x02\x02\x02\u01B3" +
		"\u01B6\t\x04\x02\x02\u01B4\u01B5\x07\x1C\x02\x02\u01B5\u01B7\x07\n\x02" +
		"\x02\u01B6\u01B4\x03\x02\x02\x02\u01B6\u01B7\x03\x02\x02\x02\u01B7-\x03" +
		"\x02\x02\x02\u01B8\u01B9\t\x05\x02\x02\u01B9/\x03\x02\x02\x02\u01BA\u01BB" +
		"\t\x06\x02\x02\u01BB1\x03\x02\x02\x02\u01BC\u01BD\t\x07\x02\x02\u01BD" +
		"3\x03\x02\x02\x02\u01BE\u01BF\t\b\x02\x02\u01BF5\x03\x02\x02\x02\u01C0" +
		"\u01C1\t\t\x02\x02\u01C17\x03\x02\x02\x02\u01C2\u01C3\t\n\x02\x02\u01C3" +
		"9\x03\x02\x02\x02\u01C4\u01C5\t\v\x02\x02\u01C5;\x03\x02\x02\x02\u01C6" +
		"\u01C7\t\f\x02\x02\u01C7=\x03\x02\x02\x02\u01C8\u01C9\t\r\x02\x02\u01C9" +
		"?\x03\x02\x02\x02\u01CA\u01CD\x07^\x02\x02\u01CB\u01CC\x07\x1C\x02\x02" +
		"\u01CC\u01CE\x07\n\x02\x02\u01CD\u01CB\x03\x02\x02\x02\u01CD\u01CE\x03" +
		"\x02\x02\x02\u01CE\u01D5\x03\x02\x02\x02\u01CF\u01D2\x07p\x02\x02\u01D0" +
		"\u01D1\x07\x1C\x02\x02\u01D1\u01D3\x07\n\x02\x02\u01D2\u01D0\x03\x02\x02" +
		"\x02\u01D2\u01D3\x03\x02\x02\x02\u01D3\u01D5\x03\x02\x02\x02\u01D4\u01CA" +
		"\x03\x02\x02\x02\u01D4\u01CF\x03\x02\x02\x02\u01D5A\x03\x02\x02\x02\u01D6" +
		"\u01D7\t\x0E\x02\x02\u01D7C\x03\x02\x02\x02\u01D8\u01D9\x058\x1D\x02\u01D9" +
		"\u01DA\x07\x1C\x02\x02\u01DA\u01DB\x05j6\x02\u01DB\u01DC\x07\x1B\x02\x02" +
		"\u01DC\u01DF\x03\x02\x02\x02\u01DD\u01DF\x07+\x02\x02\u01DE\u01D8\x03" +
		"\x02\x02\x02\u01DE\u01DD\x03\x02\x02\x02\u01DFE\x03\x02\x02\x02\u01E0" +
		"\u01E1\x05:\x1E\x02\u01E1\u01E2\x07\x1C\x02\x02\u01E2\u01E3\x05j6\x02" +
		"\u01E3\u01E8\x07\x1B\x02\x02\u01E4\u01E5\x07C\x02\x02\u01E5\u01E6\x05" +
		"\x9EP\x02\u01E6\u01E7\x07\x1B\x02\x02\u01E7\u01E9\x03\x02\x02\x02\u01E8" +
		"\u01E4\x03\x02\x02\x02\u01E8\u01E9\x03\x02\x02\x02\u01E9G\x03\x02\x02" +
		"\x02\u01EA\u01EB\x05> \x02\u01EB\u01EC\x07\x1C\x02\x02\u01EC\u01ED\x05" +
		"j6\x02\u01ED\u01F2\x07\x1B\x02\x02\u01EE\u01EF\x07C\x02\x02\u01EF\u01F0" +
		"\x05\x9EP\x02\u01F0\u01F1\x07\x1B\x02\x02\u01F1\u01F3\x03\x02\x02\x02" +
		"\u01F2\u01EE\x03\x02\x02\x02\u01F2\u01F3\x03\x02\x02\x02\u01F3I\x03\x02" +
		"\x02\x02\u01F4\u01F5\x05<\x1F\x02\u01F5\u01F8\x07\x1C\x02\x02\u01F6\u01F9" +
		"\x05j6\x02\u01F7\u01F9\x05h5\x02\u01F8\u01F6\x03\x02\x02\x02\u01F8\u01F7" +
		"\x03\x02\x02\x02\u01F9\u01FA\x03\x02\x02\x02\u01FA\u01FF\x07\x1B\x02\x02" +
		"\u01FB\u01FC\x07C\x02\x02\u01FC\u01FD\x05\x9EP\x02\u01FD\u01FE\x07\x1B" +
		"\x02\x02\u01FE\u0200\x03\x02\x02\x02\u01FF\u01FB\x03\x02\x02\x02\u01FF" +
		"\u0200\x03\x02\x02\x02\u0200K\x03\x02\x02\x02\u0201\u0205\x05N(\x02\u0202" +
		"\u0204\x05f4\x02\u0203\u0202\x03\x02\x02\x02\u0204\u0207\x03\x02\x02\x02" +
		"\u0205\u0203\x03\x02\x02\x02\u0205\u0206\x03\x02\x02\x02\u0206M\x03\x02" +
		"\x02\x02\u0207\u0205\x03\x02\x02\x02\u0208\u0209\x05B\"\x02\u0209\u020D" +
		"\x07\x1C\x02\x02\u020A\u020C\x07\x04\x02\x02\u020B\u020A\x03\x02\x02\x02" +
		"\u020C\u020F\x03\x02\x02\x02\u020D\u020B\x03\x02\x02\x02\u020D\u020E\x03" +
		"\x02\x02\x02\u020E\u0210\x03\x02\x02\x02\u020F\u020D\x03\x02\x02\x02\u0210" +
		"\u0211\x05j6\x02\u0211\u0212\x07\x1B\x02\x02\u0212O\x03\x02\x02\x02\u0213" +
		"\u0217\x05R*\x02\u0214\u0216\x05f4\x02\u0215\u0214\x03\x02\x02\x02\u0216" +
		"\u0219\x03\x02\x02\x02\u0217\u0215\x03\x02\x02\x02\u0217\u0218\x03\x02" +
		"\x02\x02\u0218Q\x03\x02\x02\x02\u0219\u0217\x03\x02\x02\x02\u021A\u021B" +
		"\x05@!\x02\u021B\u021C\x07\x1C\x02\x02\u021C\u021D\x05j6\x02\u021D\u0222" +
		"\x07\x1B\x02\x02\u021E\u021F\x07C\x02\x02\u021F\u0220\x05\x9EP\x02\u0220" +
		"\u0221\x07\x1B\x02\x02\u0221\u0223\x03\x02\x02\x02\u0222\u021E\x03\x02" +
		"\x02\x02\u0222\u0223\x03\x02\x02\x02\u0223S\x03\x02\x02\x02\u0224\u0228" +
		"\x05V,\x02\u0225\u0227\x05Z.\x02\u0226\u0225\x03\x02\x02\x02\u0227\u022A" +
		"\x03\x02\x02\x02\u0228\u0226\x03\x02\x02\x02\u0228\u0229\x03\x02\x02\x02" +
		"\u0229\u022D\x03\x02\x02\x02\u022A\u0228\x03\x02\x02\x02\u022B\u022C\x07" +
		"/\x02\x02\u022C\u022E\x07E\x02\x02\u022D\u022B\x03\x02\x02\x02\u022D\u022E" +
		"\x03\x02\x02\x02\u022EU\x03\x02\x02\x02\u022F\u0230\x05X-\x02\u0230\u0234" +
		"\x07\x1C\x02\x02\u0231\u0233\x07\x04\x02\x02\u0232\u0231\x03\x02\x02\x02" +
		"\u0233\u0236\x03\x02\x02\x02\u0234\u0232\x03\x02\x02\x02\u0234\u0235\x03" +
		"\x02\x02\x02\u0235\u0237\x03\x02\x02\x02\u0236\u0234\x03\x02\x02\x02\u0237" +
		"\u0238\x05j6\x02\u0238\u0239\x07\x1B\x02\x02\u0239W\x03\x02\x02\x02\u023A" +
		"\u023D\x07[\x02\x02\u023B\u023E\x07\b\x02\x02\u023C\u023E\x07\x88\x02" +
		"\x02\u023D\u023B\x03\x02\x02\x02\u023D\u023C\x03\x02\x02\x02\u023D\u023E" +
		"\x03\x02\x02\x02\u023E\u0249\x03\x02\x02\x02\u023F\u0241\x07o\x02\x02" +
		"\u0240\u0242\x07\b\x02\x02\u0241\u0240\x03\x02\x02\x02\u0241\u0242\x03" +
		"\x02\x02\x02\u0242\u0249\x03\x02\x02\x02\u0243\u0245\x07\\\x02\x02\u0244" +
		"\u0246\x07\b\x02\x02\u0245\u0244\x03\x02\x02\x02\u0245\u0246\x03\x02\x02" +
		"\x02\u0246\u0249\x03\x02\x02\x02\u0247\u0249\x07]\x02\x02\u0248\u023A" +
		"\x03\x02\x02\x02\u0248\u023F\x03\x02\x02\x02\u0248\u0243\x03\x02\x02\x02" +
		"\u0248\u0247\x03\x02\x02\x02\u0249Y\x03\x02\x02\x02\u024A\u024B\x07B\x02" +
		"\x02\u024B\u024C\x07\x1C\x02\x02\u024C\u024D\x05j6\x02\u024D\u024E\x07" +
		"\x1B\x02\x02\u024E\u025C\x03\x02\x02\x02\u024F\u0250\t\x0F\x02\x02\u0250" +
		"\u0251\x07\x1C\x02\x02\u0251\u0252\x07-\x02\x02\u0252\u025C\x07\x1B\x02" +
		"\x02\u0253\u0257\t\x10\x02\x02\u0254\u0256\v\x02\x02\x02\u0255\u0254\x03" +
		"\x02\x02\x02\u0256\u0259\x03\x02\x02\x02\u0257\u0258\x03\x02\x02\x02\u0257" +
		"\u0255\x03\x02\x02\x02\u0258\u025A\x03\x02\x02\x02\u0259\u0257\x03\x02" +
		"\x02\x02\u025A\u025C\x07\x1B\x02\x02\u025B\u024A\x03\x02\x02\x02\u025B" +
		"\u024F\x03\x02\x02\x02\u025B\u0253\x03\x02\x02\x02\u025C[\x03\x02\x02" +
		"\x02\u025D\u025E\x07B\x02\x02\u025E\u025F\x07\x1C\x02\x02\u025F\u0260" +
		"\x05j6\x02\u0260\u0261\x07\x1B\x02\x02\u0261\u026F\x03\x02\x02\x02\u0262" +
		"\u0263\t\x0F\x02\x02\u0263\u0264\x07\x1C\x02\x02\u0264\u0265\x07-\x02" +
		"\x02\u0265\u026F\x07\x1B\x02\x02\u0266\u026A\t\x10\x02\x02\u0267\u0269" +
		"\v\x02\x02\x02\u0268\u0267\x03\x02\x02\x02\u0269\u026C\x03\x02\x02\x02" +
		"\u026A\u026B\x03\x02\x02\x02\u026A\u0268\x03\x02\x02\x02\u026B\u026D\x03" +
		"\x02\x02\x02\u026C\u026A\x03\x02\x02\x02\u026D\u026F\x07\x1B\x02\x02\u026E" +
		"\u025D\x03\x02\x02\x02\u026E\u0262\x03\x02\x02\x02\u026E\u0266\x03\x02" +
		"\x02\x02\u026F]\x03\x02\x02\x02\u0270\u0274\x05`1\x02\u0271\u0273\x05" +
		"f4\x02\u0272\u0271\x03\x02\x02\x02\u0273\u0276\x03\x02\x02\x02\u0274\u0272" +
		"\x03\x02\x02\x02\u0274\u0275\x03\x02\x02\x02\u0275_\x03\x02\x02\x02\u0276" +
		"\u0274\x03\x02\x02\x02\u0277\u0278\x05d3\x02\u0278\u0279\x07\x1C\x02\x02" +
		"\u0279\u027A\x05j6\x02\u027A\u027F\x07\x1B\x02\x02\u027B\u027C\x07C\x02" +
		"\x02\u027C\u027D\x05\x9EP\x02\u027D\u027E\x07\x1B\x02\x02\u027E\u0280" +
		"\x03\x02\x02\x02\u027F\u027B\x03\x02\x02\x02\u027F\u0280\x03\x02\x02\x02" +
		"\u0280a\x03\x02\x02\x02\u0281\u0284\x07O\x02\x02\u0282\u0283\x07\x1C\x02" +
		"\x02\u0283\u0285\x07\t\x02\x02\u0284\u0282\x03\x02\x02\x02\u0284\u0285" +
		"\x03\x02\x02\x02\u0285\u028C\x03\x02\x02\x02\u0286\u0289\x07f\x02\x02" +
		"\u0287\u0288\x07\x1C\x02\x02\u0288\u028A\x07\t\x02\x02\u0289\u0287\x03" +
		"\x02\x02\x02\u0289\u028A\x03\x02\x02\x02\u028A\u028C\x03\x02\x02\x02\u028B" +
		"\u0281\x03\x02\x02\x02\u028B\u0286\x03\x02\x02\x02\u028Cc\x03\x02\x02" +
		"\x02\u028D\u0290\x07Z\x02\x02\u028E\u028F\x07\x1C\x02\x02\u028F\u0291" +
		"\x07\t\x02\x02\u0290\u028E\x03\x02\x02\x02\u0290\u0291\x03\x02\x02\x02" +
		"\u0291\u0298\x03\x02\x02\x02\u0292\u0295\x07n\x02\x02\u0293\u0294\x07" +
		"\x1C\x02\x02\u0294\u0296\x07\t\x02\x02\u0295\u0293\x03\x02\x02\x02\u0295" +
		"\u0296\x03\x02\x02\x02\u0296\u0298\x03\x02\x02\x02\u0297\u028D\x03\x02" +
		"\x02\x02\u0297\u0292\x03\x02\x02\x02\u0298e\x03\x02\x02\x02\u0299\u029A" +
		"\x07\x14\x02\x02\u029A\u029D\x05\x96L\x02\u029B\u029D\x07B\x02\x02\u029C" +
		"\u0299\x03\x02\x02\x02\u029C\u029B\x03\x02\x02\x02\u029D\u029E\x03\x02" +
		"\x02\x02\u029E\u02A2\x07\x1C\x02\x02\u029F\u02A1\x07\x04\x02\x02\u02A0" +
		"\u029F\x03\x02\x02\x02\u02A1\u02A4\x03\x02\x02\x02\u02A2\u02A0\x03\x02" +
		"\x02\x02\u02A2\u02A3\x03\x02\x02\x02\u02A3\u02A7\x03\x02\x02\x02\u02A4" +
		"\u02A2\x03\x02\x02\x02\u02A5\u02A8\x05\x96L\x02\u02A6\u02A8\x07/\x02\x02" +
		"\u02A7\u02A5\x03\x02\x02\x02\u02A7\u02A6\x03\x02\x02\x02\u02A8\u02A9\x03" +
		"\x02\x02\x02\u02A9\u02A7\x03\x02\x02\x02\u02A9\u02AA\x03\x02\x02\x02\u02AA" +
		"\u02AB\x03\x02\x02\x02\u02AB\u02B9\x07\x1B\x02\x02\u02AC\u02AD\t\x0F\x02" +
		"\x02\u02AD\u02AE\x07\x1C\x02\x02\u02AE\u02AF\x07-\x02\x02\u02AF\u02B9" +
		"\x07\x1B\x02\x02\u02B0\u02B4\t\x10\x02\x02\u02B1\u02B3\v\x02\x02\x02\u02B2" +
		"\u02B1\x03\x02\x02\x02\u02B3\u02B6\x03\x02\x02\x02\u02B4\u02B5\x03\x02" +
		"\x02\x02\u02B4\u02B2\x03\x02\x02\x02\u02B5\u02B7\x03\x02\x02\x02\u02B6" +
		"\u02B4\x03\x02\x02\x02\u02B7\u02B9\x07\x1B\x02\x02\u02B8\u029C\x03\x02" +
		"\x02\x02\u02B8\u02AC\x03\x02\x02\x02\u02B8\u02B0\x03\x02\x02\x02\u02B9" +
		"g\x03\x02\x02\x02\u02BA\u02BB\x07\x87\x02\x02\u02BB\u02BC\x07\x1F\x02" +
		"\x02\u02BC\u02BD\x07-\x02\x02\u02BDi\x03\x02\x02\x02\u02BE\u02BF\x07\x8A" +
		"\x02\x02\u02BFk\x03\x02\x02\x02\u02C0\u02C1\x07\x19\x02\x02\u02C1\u02C9" +
		"\x07\x1B\x02\x02\u02C2\u02C4\x07\x04\x02\x02\u02C3\u02C2\x03\x02\x02\x02" +
		"\u02C4\u02C7\x03\x02\x02\x02\u02C5\u02C3\x03\x02\x02\x02\u02C5\u02C6\x03" +
		"\x02\x02\x02\u02C6\u02C8\x03\x02\x02\x02\u02C7\u02C5\x03\x02\x02\x02\u02C8" +
		"\u02CA\x05n8\x02\u02C9\u02C5\x03\x02\x02\x02\u02C9\u02CA\x03\x02\x02\x02" +
		"\u02CA\u02DF\x03\x02\x02\x02\u02CB\u02CC\x07\x19\x02\x02\u02CC\u02D1\x05" +
		"\x96L\x02\u02CD\u02D0\x07\x1C\x02\x02\u02CE\u02D0\x05\x9EP\x02\u02CF\u02CD" +
		"\x03\x02\x02\x02\u02CF\u02CE\x03\x02\x02\x02\u02D0\u02D3\x03\x02\x02\x02" +
		"\u02D1\u02CF\x03\x02\x02\x02\u02D1\u02D2\x03\x02\x02\x02\u02D2\u02D4\x03" +
		"\x02\x02\x02\u02D3\u02D1\x03\x02\x02\x02\u02D4\u02DC\x07\x1B\x02\x02\u02D5" +
		"\u02D7\x07\x04\x02\x02\u02D6\u02D5\x03\x02\x02\x02\u02D7\u02DA\x03\x02" +
		"\x02\x02\u02D8\u02D6\x03\x02\x02\x02\u02D8\u02D9\x03\x02\x02\x02\u02D9" +
		"\u02DB\x03\x02\x02\x02\u02DA\u02D8\x03\x02\x02\x02\u02DB\u02DD\x05n8\x02" +
		"\u02DC\u02D8\x03\x02\x02\x02\u02DC\u02DD\x03\x02\x02\x02\u02DD\u02DF\x03" +
		"\x02\x02\x02\u02DE\u02C0\x03\x02\x02\x02\u02DE\u02CB\x03\x02\x02\x02\u02DF" +
		"m\x03\x02\x02\x02\u02E0\u02E1\x07\x19\x02\x02\u02E1\u02E6\x05\x96L\x02" +
		"\u02E2\u02E5\x07\x1C\x02\x02\u02E3\u02E5\x05\x9EP\x02\u02E4\u02E2\x03" +
		"\x02\x02\x02\u02E4\u02E3\x03\x02\x02\x02\u02E5\u02E8\x03\x02\x02\x02\u02E6" +
		"\u02E4\x03\x02\x02\x02\u02E6\u02E7\x03\x02\x02\x02\u02E7\u02E9\x03\x02" +
		"\x02\x02\u02E8\u02E6\x03\x02\x02\x02\u02E9\u02EA\x07\x1B\x02\x02\u02EA" +
		"o\x03\x02\x02\x02\u02EB\u02ED\x07\x0E\x02\x02\u02EC\u02EE\x05\x96L\x02" +
		"\u02ED\u02EC\x03\x02\x02\x02\u02ED\u02EE\x03\x02\x02\x02\u02EE\u02EF\x03" +
		"\x02\x02\x02\u02EF\u02F6\x07\x1B\x02\x02\u02F0\u02F2\x07\x0F\x02\x02\u02F1" +
		"\u02F3\x05\x96L\x02\u02F2\u02F1\x03\x02\x02\x02\u02F2\u02F3\x03\x02\x02" +
		"\x02\u02F3\u02F4\x03\x02\x02\x02\u02F4\u02F6\x07\x1B\x02\x02\u02F5\u02EB" +
		"\x03\x02\x02\x02\u02F5\u02F0\x03\x02\x02\x02\u02F6q\x03\x02\x02\x02\u02F7" +
		"\u02FF\x07<\x02\x02\u02F8\u02FF\x07:\x02\x02\u02F9\u02FB\x07;\x02\x02" +
		"\u02FA\u02FC\x070\x02\x02\u02FB\u02FA\x03\x02\x02\x02\u02FB\u02FC\x03" +
		"\x02\x02\x02\u02FC\u02FD\x03\x02\x02\x02\u02FD\u02FF\x07\x02\x02\x03\u02FE" +
		"\u02F7\x03\x02\x02\x02\u02FE\u02F8\x03\x02\x02\x02\u02FE\u02F9\x03\x02" +
		"\x02\x02\u02FFs\x03\x02\x02\x02\u0300\u0302\x07e\x02\x02\u0301\u0303\x05" +
		"\x96L\x02\u0302\u0301\x03\x02\x02\x02\u0302\u0303\x03\x02\x02\x02\u0303" +
		"\u0319\x03\x02\x02\x02\u0304\u030E\x05\x96L\x02\u0305\u0309\x07/\x02\x02" +
		"\u0306\u0308\x07\x04\x02\x02\u0307\u0306\x03\x02\x02\x02\u0308\u030B\x03" +
		"\x02\x02\x02\u0309\u0307\x03\x02\x02\x02\u0309\u030A\x03\x02\x02\x02\u030A" +
		"\u030D\x03\x02\x02\x02\u030B\u0309\x03\x02\x02\x02\u030C\u0305\x03\x02" +
		"\x02\x02\u030D\u0310\x03\x02\x02\x02\u030E\u030C\x03\x02\x02\x02\u030E" +
		"\u030F\x03\x02\x02\x02\u030F\u0314\x03\x02\x02\x02\u0310\u030E\x03\x02" +
		"\x02\x02\u0311\u0313\x07/\x02\x02\u0312\u0311\x03\x02\x02\x02\u0313\u0316" +
		"\x03\x02\x02\x02\u0314\u0312\x03\x02\x02\x02\u0314\u0315\x03\x02\x02\x02" +
		"\u0315\u0318\x03\x02\x02\x02\u0316\u0314\x03\x02\x02\x02\u0317\u0304\x03" +
		"\x02\x02\x02\u0318\u031B\x03\x02\x02\x02\u0319\u0317\x03\x02\x02\x02\u0319" +
		"\u031A\x03\x02\x02\x02\u031A\u031C\x03\x02\x02\x02\u031B\u0319\x03\x02" +
		"\x02\x02\u031C\u0328\x07\x1B\x02\x02\u031D\u0323\x07e\x02\x02\u031E\u0322" +
		"\x05\x96L\x02\u031F\u0322\x07/\x02\x02\u0320\u0322\x07\x04\x02\x02\u0321" +
		"\u031E\x03\x02\x02\x02\u0321\u031F\x03\x02\x02\x02\u0321\u0320\x03\x02" +
		"\x02\x02\u0322\u0325\x03\x02\x02\x02\u0323\u0321\x03\x02\x02\x02\u0323" +
		"\u0324\x03\x02\x02\x02\u0324\u0326\x03\x02\x02\x02\u0325\u0323\x03\x02" +
		"\x02\x02\u0326\u0328\x07\x02\x02\x03\u0327\u0300\x03\x02\x02\x02\u0327" +
		"\u031D\x03\x02\x02\x02\u0328u\x03\x02\x02\x02\u0329\u032E\x074\x02\x02" +
		"\u032A\u032F\x05\x96L\x02\u032B\u032F\x07\x1C\x02\x02\u032C\u032F\x07" +
		"\x8A\x02\x02\u032D\u032F\x07/\x02\x02\u032E\u032A\x03\x02\x02\x02\u032E" +
		"\u032B\x03\x02\x02\x02\u032E\u032C\x03\x02\x02\x02\u032E\u032D\x03\x02" +
		"\x02\x02\u032F\u0330\x03\x02\x02\x02\u0330\u032E\x03\x02\x02\x02\u0330" +
		"\u0331\x03\x02\x02\x02\u0331\u0332\x03\x02\x02\x02\u0332\u0340\x07\x1B" +
		"\x02\x02\u0333\u033B\x074\x02\x02\u0334\u033A\x05\x96L\x02\u0335\u033A" +
		"\x07\x1C\x02\x02\u0336\u033A\x07\x8A\x02\x02\u0337\u033A\x07/\x02\x02" +
		"\u0338\u033A\x07\x04\x02\x02\u0339\u0334\x03\x02\x02\x02\u0339\u0335\x03" +
		"\x02\x02\x02\u0339\u0336\x03\x02\x02\x02\u0339\u0337\x03\x02\x02\x02\u0339" +
		"\u0338\x03\x02\x02\x02\u033A\u033D\x03\x02\x02\x02\u033B\u0339\x03\x02" +
		"\x02\x02\u033B\u033C\x03\x02\x02\x02\u033C\u033E\x03\x02\x02\x02\u033D" +
		"\u033B\x03\x02\x02\x02\u033E\u0340\x07\x02\x02\x03\u033F\u0329\x03\x02" +
		"\x02\x02\u033F\u0333\x03\x02\x02\x02\u0340w\x03\x02\x02\x02\u0341\u0342" +
		"\x073\x02\x02\u0342\u0343\x05\x96L\x02\u0343\u0344\x07\x1B\x02\x02\u0344" +
		"y\x03\x02\x02\x02\u0345\u0349\x07L\x02\x02\u0346\u034A\x05\x96L\x02\u0347" +
		"\u034A\x07\x1C\x02\x02\u0348\u034A\x07/\x02\x02\u0349\u0346\x03\x02\x02" +
		"\x02\u0349\u0347\x03\x02\x02\x02\u0349\u0348\x03\x02\x02\x02\u034A\u034B" +
		"\x03\x02\x02\x02\u034B\u0349\x03\x02\x02\x02\u034B\u034C\x03\x02\x02\x02" +
		"\u034C\u034D\x03\x02\x02\x02\u034D\u034F\x07\x1B\x02\x02\u034E\u0350\x05" +
		"|?\x02\u034F\u034E\x03\x02\x02\x02\u034F\u0350\x03\x02\x02\x02\u0350{" +
		"\x03\x02\x02\x02\u0351\u0355\x07L\x02\x02\u0352\u0356\x05\x96L\x02\u0353" +
		"\u0356\x07\x1C\x02\x02\u0354\u0356\x07/\x02\x02\u0355\u0352\x03\x02\x02" +
		"\x02\u0355\u0353\x03\x02\x02\x02\u0355\u0354\x03\x02\x02\x02\u0356\u0357" +
		"\x03\x02\x02\x02\u0357\u0355\x03\x02\x02\x02\u0357\u0358\x03\x02\x02\x02" +
		"\u0358\u0359\x03\x02\x02\x02\u0359\u035A\x07\x1B\x02\x02\u035A}\x03\x02" +
		"\x02\x02\u035B\u035F\x07\x12\x02\x02\u035C\u035E\x07/\x02\x02\u035D\u035C" +
		"\x03\x02\x02\x02\u035E\u0361\x03\x02\x02\x02\u035F\u035D\x03\x02\x02\x02" +
		"\u035F\u0360\x03\x02\x02\x02\u0360\u0363\x03\x02\x02\x02\u0361\u035F\x03" +
		"\x02\x02\x02\u0362\u0364\x05\x96L\x02\u0363\u0362\x03\x02\x02\x02\u0363" +
		"\u0364\x03\x02\x02\x02\u0364\u037A\x03\x02\x02\x02\u0365\u036F\x05\x96" +
		"L\x02\u0366\u036A\x07/\x02\x02\u0367\u0369\x07\x04\x02\x02\u0368\u0367" +
		"\x03\x02\x02\x02\u0369\u036C\x03\x02\x02\x02\u036A\u0368\x03\x02\x02\x02" +
		"\u036A\u036B\x03\x02\x02\x02\u036B\u036E\x03\x02\x02\x02\u036C\u036A\x03" +
		"\x02\x02\x02\u036D\u0366\x03\x02\x02\x02\u036E\u0371\x03\x02\x02\x02\u036F" +
		"\u036D\x03\x02\x02\x02\u036F\u0370\x03\x02\x02\x02\u0370\u0375\x03\x02" +
		"\x02\x02\u0371\u036F\x03\x02\x02\x02\u0372\u0374\x07/\x02\x02\u0373\u0372" +
		"\x03\x02\x02\x02\u0374\u0377\x03\x02\x02\x02\u0375\u0373\x03\x02\x02\x02" +
		"\u0375\u0376\x03\x02\x02\x02\u0376\u0379\x03\x02\x02\x02\u0377\u0375\x03" +
		"\x02\x02\x02\u0378\u0365\x03\x02\x02\x02\u0379\u037C\x03\x02\x02\x02\u037A" +
		"\u0378\x03\x02\x02\x02\u037A\u037B\x03\x02\x02\x02\u037B\u037D\x03\x02" +
		"\x02\x02\u037C\u037A\x03\x02\x02\x02\u037D\u038A\x07\x1B\x02\x02\u037E" +
		"\u0382\x07\x12\x02\x02\u037F\u0381\x07/\x02\x02\u0380\u037F\x03\x02\x02" +
		"\x02\u0381\u0384\x03\x02\x02\x02\u0382\u0380\x03\x02\x02\x02\u0382\u0383" +
		"\x03\x02\x02\x02\u0383\u0386\x03\x02\x02\x02\u0384\u0382\x03\x02\x02\x02" +
		"\u0385\u0387\x05\x96L\x02\u0386\u0385\x03\x02\x02\x02\u0386\u0387\x03" +
		"\x02\x02\x02\u0387\u0388\x03\x02\x02\x02\u0388\u038A\x07\x02\x02\x03\u0389" +
		"\u035B\x03\x02\x02\x02\u0389\u037E\x03\x02\x02\x02\u038A\x7F\x03\x02\x02" +
		"\x02\u038B\u038D\x07\x13\x02\x02\u038C\u038E\n\x11\x02\x02\u038D\u038C" +
		"\x03\x02\x02\x02\u038E\u038F\x03\x02\x02\x02\u038F\u038D\x03\x02\x02\x02" +
		"\u038F\u0390\x03\x02\x02\x02\u0390\u0391\x03\x02\x02\x02\u0391\u0392\x07" +
		"\x1B\x02\x02\u0392\x81\x03\x02\x02\x02\u0393\u0396\x07\x1A\x02\x02\u0394" +
		"\u0397\x05\x96L\x02\u0395\u0397\x07/\x02\x02\u0396\u0394\x03\x02\x02\x02" +
		"\u0396\u0395\x03\x02\x02\x02\u0397\u0398\x03\x02\x02\x02\u0398\u0396\x03" +
		"\x02\x02\x02\u0398\u0399\x03\x02\x02\x02\u0399\u039A\x03\x02\x02\x02\u039A" +
		"\u03A0\x07\x1B\x02\x02\u039B\u039C\x07\x1A\x02\x02\u039C\u039D\x05\x96" +
		"L\x02\u039D\u039E\x07\x02\x02\x03\u039E\u03A0\x03\x02\x02\x02\u039F\u0393" +
		"\x03\x02\x02\x02\u039F\u039B\x03\x02\x02\x02\u03A0\x83\x03\x02\x02\x02" +
		"\u03A1\u03A2\x07?\x02\x02\u03A2\u03A3\x05\x96L\x02\u03A3\u03A4\x07\x1B" +
		"\x02\x02\u03A4\u03AA\x03\x02\x02\x02\u03A5\u03A6\x07@\x02\x02\u03A6\u03A7" +
		"\x05\x96L\x02\u03A7\u03A8\x07\x1B\x02\x02\u03A8\u03AA\x03\x02\x02\x02" +
		"\u03A9\u03A1\x03\x02\x02\x02\u03A9\u03A5\x03\x02\x02\x02\u03AA\x85\x03" +
		"\x02\x02\x02\u03AB\u03AC\x077\x02\x02\u03AC\u03AD\x07\x1C\x02\x02\u03AD" +
		"\u03AE\x07-\x02\x02\u03AE\u03B5\x07\x1B\x02\x02\u03AF\u03B0\x077\x02\x02" +
		"\u03B0\u03B1\x07\x1C\x02\x02\u03B1\u03B2\x05\x96L\x02\u03B2\u03B3\x07" +
		"\x1B\x02\x02\u03B3\u03B5\x03\x02\x02\x02\u03B4\u03AB\x03\x02\x02\x02\u03B4" +
		"\u03AF\x03\x02\x02\x02\u03B5\x87\x03\x02\x02\x02\u03B6\u03B7\x07J\x02" +
		"\x02\u03B7\u03B8\x05\x96L\x02\u03B8\u03B9\x07\x1B\x02\x02\u03B9\x89\x03" +
		"\x02\x02\x02\u03BA\u03BB\x07K\x02\x02\u03BB\u03BC\x05\x96L\x02\u03BC\u03BD" +
		"\x07\x1B\x02\x02\u03BD\x8B\x03\x02\x02\x02\u03BE\u03C8\x05\x8EH\x02\u03BF" +
		"\u03C1\x07/\x02\x02\u03C0\u03BF\x03\x02\x02\x02\u03C1\u03C4\x03\x02\x02" +
		"\x02\u03C2\u03C0\x03\x02\x02\x02\u03C2\u03C3\x03\x02\x02\x02\u03C3\u03C5" +
		"\x03\x02\x02\x02\u03C4\u03C2\x03\x02\x02\x02\u03C5\u03C7\x05\x8EH\x02" +
		"\u03C6\u03C2\x03\x02\x02\x02\u03C7\u03CA\x03\x02\x02\x02\u03C8\u03C6\x03" +
		"\x02\x02\x02\u03C8\u03C9\x03\x02\x02\x02\u03C9\x8D\x03\x02\x02\x02\u03CA" +
		"\u03C8\x03\x02\x02\x02\u03CB\u03CC\x07\x14\x02\x02\u03CC\u03CD\x05\x96" +
		"L\x02\u03CD\u03CE\t\x12\x02\x02\u03CE\u03D4\x05\x96L\x02\u03CF\u03D3\x07" +
		"/\x02\x02\u03D0\u03D3\x07\x1C\x02\x02\u03D1\u03D3\x05\x96L\x02\u03D2\u03CF" +
		"\x03\x02\x02\x02\u03D2\u03D0\x03\x02\x02\x02\u03D2\u03D1\x03\x02\x02\x02" +
		"\u03D3\u03D6\x03\x02\x02\x02\u03D4\u03D2\x03\x02\x02\x02\u03D4\u03D5\x03" +
		"\x02\x02\x02\u03D5\u03D7\x03\x02\x02\x02\u03D6\u03D4\x03\x02\x02\x02\u03D7" +
		"\u03D8\x07\x1B\x02\x02\u03D8\u03E2\x03\x02\x02\x02\u03D9\u03DD\x07H\x02" +
		"\x02\u03DA\u03DC\v\x02\x02\x02\u03DB\u03DA\x03\x02\x02\x02\u03DC\u03DF" +
		"\x03\x02\x02\x02\u03DD\u03DE\x03\x02\x02\x02\u03DD\u03DB\x03\x02\x02\x02" +
		"\u03DE\u03E0\x03\x02\x02\x02\u03DF\u03DD\x03\x02\x02\x02\u03E0\u03E2\x07" +
		"\x1B\x02\x02\u03E1\u03CB\x03\x02\x02\x02\u03E1\u03D9\x03\x02\x02\x02\u03E2" +
		"\x8F\x03\x02\x02\x02\u03E3\u03E7\x07\v\x02\x02\u03E4\u03E8\x05\x96L\x02" +
		"\u03E5\u03E8\x07\x1C\x02\x02\u03E6\u03E8\x07/\x02\x02\u03E7\u03E4\x03" +
		"\x02\x02\x02\u03E7\u03E5\x03\x02\x02\x02\u03E7\u03E6\x03\x02\x02\x02\u03E8" +
		"\u03E9\x03\x02\x02\x02\u03E9\u03E7\x03\x02\x02\x02\u03E9\u03EA\x03\x02" +
		"\x02\x02\u03EA\u03EB\x03\x02\x02\x02\u03EB\u03F7\x07\x1B\x02\x02\u03EC" +
		"\u03F2\x07\v\x02\x02\u03ED\u03F1\x05\x96L\x02\u03EE\u03F1\x07\x1C\x02" +
		"\x02\u03EF\u03F1\x07/\x02\x02\u03F0\u03ED\x03\x02\x02\x02\u03F0\u03EE" +
		"\x03\x02\x02\x02\u03F0\u03EF\x03\x02\x02\x02\u03F1\u03F4\x03\x02\x02\x02" +
		"\u03F2\u03F0\x03\x02\x02\x02\u03F2\u03F3\x03\x02\x02\x02\u03F3\u03F5\x03" +
		"\x02\x02\x02\u03F4\u03F2\x03\x02\x02\x02\u03F5\u03F7\x07\x02\x02\x03\u03F6" +
		"\u03E3\x03\x02\x02\x02\u03F6\u03EC\x03\x02\x02\x02\u03F7\x91\x03\x02\x02" +
		"\x02\u03F8\u03FA\x07\x10\x02\x02\u03F9\u03FB\x05\x96L\x02\u03FA\u03F9" +
		"\x03\x02\x02\x02\u03FA\u03FB\x03\x02\x02\x02\u03FB\u03FC\x03\x02\x02\x02" +
		"\u03FC\u03FD\x07\x1B\x02\x02\u03FD\x93\x03\x02\x02\x02\u03FE\u0400\x05" +
		"\x96L\x02\u03FF\u0401\x07/\x02\x02\u0400\u03FF\x03\x02\x02\x02\u0400\u0401" +
		"\x03\x02\x02\x02\u0401\u0403\x03\x02\x02\x02\u0402\u03FE\x03\x02\x02\x02" +
		"\u0403\u0404\x03\x02\x02\x02\u0404\u0402\x03\x02\x02\x02\u0404\u0405\x03" +
		"\x02\x02\x02\u0405\x95\x03\x02\x02\x02\u0406\u040D\x07.\x02\x02\u0407" +
		"\u0409\x07\x04\x02\x02\u0408\u0407\x03\x02\x02\x02\u0409\u040A\x03\x02" +
		"\x02\x02\u040A\u0408\x03\x02\x02\x02\u040A\u040B\x03\x02\x02\x02\u040B" +
		"\u040C\x03\x02\x02\x02\u040C\u040E\x07-\x02\x02\u040D\u0408\x03\x02\x02" +
		"\x02\u040D\u040E\x03\x02\x02\x02\u040E\u0435\x03\x02\x02\x02\u040F\u0416" +
		"\x05\x9EP\x02\u0410\u0412\x07\x04\x02\x02\u0411\u0410\x03\x02\x02\x02" +
		"\u0412\u0413\x03\x02\x02\x02\u0413\u0411\x03\x02\x02\x02\u0413\u0414\x03" +
		"\x02\x02\x02\u0414\u0415\x03\x02\x02\x02\u0415\u0417\x07-\x02\x02\u0416" +
		"\u0411\x03\x02\x02\x02\u0416\u0417\x03\x02\x02\x02\u0417\u0435\x03\x02" +
		"\x02\x02\u0418\u0419\x07\x17\x02\x02\u0419\u041A\x05\x96L\x02\u041A\u041B" +
		"\x07\x1B\x02\x02\u041B\u0435\x03\x02\x02\x02\u041C\u0435\x07-\x02\x02" +
		"\u041D\u041F\x07\x04\x02\x02\u041E\u041D\x03\x02\x02\x02\u041F\u0422\x03" +
		"\x02\x02\x02\u0420\u041E\x03\x02\x02\x02\u0420\u0421\x03\x02\x02\x02\u0421" +
		"\u0423\x03\x02\x02\x02\u0422\u0420\x03\x02\x02\x02\u0423\u0427\x07\x1C" +
		"\x02\x02\u0424\u0426\x07\x04\x02\x02\u0425\u0424\x03\x02\x02\x02\u0426" +
		"\u0429\x03\x02\x02\x02\u0427\u0425\x03\x02\x02\x02\u0427\u0428\x03\x02" +
		"\x02\x02\u0428\u0435\x03\x02\x02\x02\u0429\u0427\x03\x02\x02\x02\u042A" +
		"\u042E\x07\x1D\x02\x02\u042B\u042D\x07\x04\x02\x02\u042C\u042B\x03\x02" +
		"\x02\x02\u042D\u0430\x03\x02\x02\x02\u042E\u042C\x03\x02\x02\x02\u042E" +
		"\u042F\x03\x02\x02\x02\u042F\u0435\x03\x02\x02\x02\u0430\u042E\x03\x02" +
		"\x02\x02\u0431\u0435\x07\x1E\x02\x02\u0432\u0435\x07%\x02\x02\u0433\u0435" +
		"\x07\x8A\x02\x02\u0434\u0406\x03\x02\x02\x02\u0434\u040F\x03\x02\x02\x02" +
		"\u0434\u0418\x03\x02\x02\x02\u0434\u041C\x03\x02\x02\x02\u0434\u0420\x03" +
		"\x02\x02\x02\u0434\u042A\x03\x02\x02\x02\u0434\u0431\x03\x02\x02\x02\u0434" +
		"\u0432\x03\x02\x02\x02\u0434\u0433\x03\x02\x02\x02\u0435\x97\x03\x02\x02" +
		"\x02\u0436\u0437\x07\r\x02\x02\u0437\u0438\x05\x96L\x02\u0438\u0439\x07" +
		"\x1B\x02\x02\u0439\x99\x03\x02\x02\x02\u043A\u043B\x07\x1B\x02\x02\u043B" +
		"\x9B\x03\x02\x02\x02\u043C\u043D\t\x13\x02\x02\u043D\x9D\x03\x02\x02\x02" +
		"\u043E\u0448\x070\x02\x02\u043F\u0448\x07\x1D\x02\x02\u0440\u0441\x07" +
		"!\x02\x02\u0441\u0448\n\x14\x02\x02\u0442\u0443\x07\"\x02\x02\u0443\u0448" +
		"\n\x15";
	private static readonly _serializedATNSegment2: string =
		"\x02\x02\u0444\u0448\x07%\x02\x02\u0445\u0448\x07$\x02\x02\u0446\u0448" +
		"\x07#\x02\x02\u0447\u043E\x03\x02\x02\x02\u0447\u043F\x03\x02\x02\x02" +
		"\u0447\u0440\x03\x02\x02\x02\u0447\u0442\x03\x02\x02\x02\u0447\u0444\x03" +
		"\x02\x02\x02\u0447\u0445\x03\x02\x02\x02\u0447\u0446\x03\x02\x02\x02\u0448" +
		"\u0449\x03\x02\x02\x02\u0449\u0447\x03\x02\x02\x02\u0449\u044A\x03\x02" +
		"\x02\x02\u044A\x9F\x03\x02\x02\x02\u044B\u044C\x07\x04\x02\x02\u044C\xA1" +
		"\x03\x02\x02\x02\x96\xA6\xAC\xB1\xB6\xBD\xC5\xCC\xD1\xDD\xE2\xE8\xEF\xF5" +
		"\xF8\u0100\u0107\u010C\u0118\u011D\u0123\u012A\u0130\u0133\u0138\u013D" +
		"\u0160\u016A\u016C\u0173\u0178\u0186\u018B\u018D\u019B\u01A1\u01A6\u01AA" +
		"\u01AE\u01B1\u01B6\u01CD\u01D2\u01D4\u01DE\u01E8\u01F2\u01F8\u01FF\u0205" +
		"\u020D\u0217\u0222\u0228\u022D\u0234\u023D\u0241\u0245\u0248\u0257\u025B" +
		"\u026A\u026E\u0274\u027F\u0284\u0289\u028B\u0290\u0295\u0297\u029C\u02A2" +
		"\u02A7\u02A9\u02B4\u02B8\u02C5\u02C9\u02CF\u02D1\u02D8\u02DC\u02DE\u02E4" +
		"\u02E6\u02ED\u02F2\u02F5\u02FB\u02FE\u0302\u0309\u030E\u0314\u0319\u0321" +
		"\u0323\u0327\u032E\u0330\u0339\u033B\u033F\u0349\u034B\u034F\u0355\u0357" +
		"\u035F\u0363\u036A\u036F\u0375\u037A\u0382\u0386\u0389\u038F\u0396\u0398" +
		"\u039F\u03A9\u03B4\u03C2\u03C8\u03D2\u03D4\u03DD\u03E1\u03E7\u03E9\u03F0" +
		"\u03F2\u03F6\u03FA\u0400\u0404\u040A\u040D\u0413\u0416\u0420\u0427\u042E" +
		"\u0434\u0447\u0449";
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


export class InitiatorContext extends ParserRuleContext {
	public name_text(): Name_textContext {
		return this.getRuleContext(0, Name_textContext);
	}
	public NL(): TerminalNode | undefined { return this.tryGetToken(chatParser.NL, 0); }
	public imagebit(): ImagebitContext | undefined {
		return this.tryGetRuleContext(0, ImagebitContext);
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
	public NL(): TerminalNode | undefined { return this.tryGetToken(chatParser.NL, 0); }
	public imagebit(): ImagebitContext | undefined {
		return this.tryGetRuleContext(0, ImagebitContext);
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


export class Bracket_escapedContext extends ParserRuleContext {
	public OPESC(): TerminalNode { return this.getToken(chatParser.OPESC, 0); }
	public s_and_w(): S_and_wContext {
		return this.getRuleContext(0, S_and_wContext);
	}
	public CL(): TerminalNode { return this.getToken(chatParser.CL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return chatParser.RULE_bracket_escaped; }
	// @Override
	public enterRule(listener: chatParserListener): void {
		if (listener.enterBracket_escaped) {
			listener.enterBracket_escaped(this);
		}
	}
	// @Override
	public exitRule(listener: chatParserListener): void {
		if (listener.exitBracket_escaped) {
			listener.exitBracket_escaped(this);
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


