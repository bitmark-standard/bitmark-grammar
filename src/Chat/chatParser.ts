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
	public static readonly SENTENCE = 53;
	public static readonly BARSTRING = 54;
	public static readonly OPAT = 55;
	public static readonly AtProgress = 56;
	public static readonly AtReference = 57;
	public static readonly AtWidth = 58;
	public static readonly AtHeight = 59;
	public static readonly AtProgressPoints = 60;
	public static readonly AtShortanswer = 61;
	public static readonly AtLonganswer = 62;
	public static readonly AtExampleWithStr = 63;
	public static readonly AtExamplecol = 64;
	public static readonly AtExamplecl = 65;
	public static readonly AtSampleSolution = 66;
	public static readonly AtPartialAnswerS = 67;
	public static readonly AtPartialAnswer = 68;
	public static readonly AtLabeltrue = 69;
	public static readonly AtLabelfalse = 70;
	public static readonly AtPoints = 71;
	public static readonly AtSrc = 72;
	public static readonly AtPartner = 73;
	public static readonly OPATALT = 74;
	public static readonly OPAMARK = 75;
	public static readonly ShowInIndex = 76;
	public static readonly OpAtCaption = 77;
	public static readonly OpAtLicense = 78;
	public static readonly OpAtCopyright = 79;
	public static readonly OpAtSearch = 80;
	public static readonly OpAtIsTracked = 81;
	public static readonly OpAtIsInfoOnly = 82;
	public static readonly AtDate = 83;
	public static readonly Http = 84;
	public static readonly Https = 85;
	public static readonly AmpAudio = 86;
	public static readonly AmpImage = 87;
	public static readonly AmpImageZoom = 88;
	public static readonly AmpImageWAudio = 89;
	public static readonly AmpVideo = 90;
	public static readonly AmpArticle = 91;
	public static readonly AmpDocument = 92;
	public static readonly AmpApp = 93;
	public static readonly AmpWebsite = 94;
	public static readonly AmpStillImageFilm = 95;
	public static readonly AmpPdf = 96;
	public static readonly OpAmpAudio = 97;
	public static readonly OpAmpImage = 98;
	public static readonly OpAmpImageZoom = 99;
	public static readonly OpAmpImageWAudio = 100;
	public static readonly OpAmpVideo = 101;
	public static readonly OpAmpArticle = 102;
	public static readonly OpAmpArticleAtt = 103;
	public static readonly OpAmpDocument = 104;
	public static readonly OpAmpApp = 105;
	public static readonly OpAmpWebsite = 106;
	public static readonly OpAmpStillImageFilm = 107;
	public static readonly BracEnclose = 108;
	public static readonly AmpAudioLink = 109;
	public static readonly AmpImageLink = 110;
	public static readonly AmpVideoLink = 111;
	public static readonly AmpArticleLink = 112;
	public static readonly AmpDocumentLink = 113;
	public static readonly AmpDocumentDownload = 114;
	public static readonly AmpAppLink = 115;
	public static readonly AmpWebsiteLink = 116;
	public static readonly AmpStillImageFilmLink = 117;
	public static readonly OpAmpAudioLink = 118;
	public static readonly OpAmpImageLink = 119;
	public static readonly OpAmpVideoLink = 120;
	public static readonly OpAmpArticleLink = 121;
	public static readonly OpAmpDocumentLink = 122;
	public static readonly OpAmpDocumentDownload = 123;
	public static readonly OpAmpAppLink = 124;
	public static readonly OpAmpWebsiteLink = 125;
	public static readonly OpAmpStillImageFilmLink = 126;
	public static readonly AmpImageEmbed = 127;
	public static readonly AmpVideoEmbed = 128;
	public static readonly AmpAudioEmbed = 129;
	public static readonly AmpDocumentEmbed = 130;
	public static readonly AmpStillImageFilmEmbed = 131;
	public static readonly OpAmpImageEmbed = 132;
	public static readonly OpAmpVideoEmbed = 133;
	public static readonly OpAmpAudioEmbed = 134;
	public static readonly OpAmpDocumentEmbed = 135;
	public static readonly OpAmpStillImageFilmEmbed = 136;
	public static readonly BitmarkMinus = 137;
	public static readonly BitmarkPlus = 138;
	public static readonly ColonText = 139;
	public static readonly ColonJson = 140;
	public static readonly Prosemirror = 141;
	public static readonly Placeholder = 142;
	public static readonly BASIC = 143;
	public static readonly JPG = 144;
	public static readonly PNG = 145;
	public static readonly GIF = 146;
	public static readonly SVG = 147;
	public static readonly MP2 = 148;
	public static readonly MP3 = 149;
	public static readonly MP4 = 150;
	public static readonly FLV = 151;
	public static readonly WMV = 152;
	public static readonly MPEG = 153;
	public static readonly MPG = 154;
	public static readonly TEL = 155;
	public static readonly DotArticleAtt = 156;
	public static readonly STAR = 157;
	public static readonly URL = 158;
	public static readonly LIST_LINE = 159;
	public static readonly ENCLBARS = 160;
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
		undefined, undefined, undefined, undefined, "'[@'", undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, "'http://'", "'https://'", 
		"'&audio'", "'&image'", "'&image-zoom'", "'&image-with-audio'", "'&video'", 
		"'&article'", "'&document'", "'&app'", "'&website'", "'&still-image-film'", 
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
		"NL", "NOTBITMARK", "SENTENCE", "BARSTRING", "OPAT", "AtProgress", "AtReference", 
		"AtWidth", "AtHeight", "AtProgressPoints", "AtShortanswer", "AtLonganswer", 
		"AtExampleWithStr", "AtExamplecol", "AtExamplecl", "AtSampleSolution", 
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
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << chatParser.S) | (1 << chatParser.OPRANGLES) | (1 << chatParser.OPRANGLEL) | (1 << chatParser.OPDANGLE) | (1 << chatParser.OPU) | (1 << chatParser.OPB) | (1 << chatParser.OPQ) | (1 << chatParser.OPA) | (1 << chatParser.OPS) | (1 << chatParser.OPC) | (1 << chatParser.OPHASH) | (1 << chatParser.COLON) | (1 << chatParser.AMP) | (1 << chatParser.DBLCOLON))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (chatParser.Greater - 33)) | (1 << (chatParser.Less - 33)) | (1 << (chatParser.RightAngle - 33)) | (1 << (chatParser.RightArrow - 33)) | (1 << (chatParser.DBLEQ - 33)) | (1 << (chatParser.ArticleText - 33)) | (1 << (chatParser.NUMERIC - 33)) | (1 << (chatParser.STRING - 33)) | (1 << (chatParser.NOTBITMARK - 33)) | (1 << (chatParser.SENTENCE - 33)) | (1 << (chatParser.BARSTRING - 33)) | (1 << (chatParser.AtReference - 33)) | (1 << (chatParser.AtExampleWithStr - 33)) | (1 << (chatParser.AtExamplecol - 33)))) !== 0) || ((((_la - 65)) & ~0x1F) === 0 && ((1 << (_la - 65)) & ((1 << (chatParser.AtExamplecl - 65)) | (1 << (chatParser.AtLabeltrue - 65)) | (1 << (chatParser.AtLabelfalse - 65)) | (1 << (chatParser.OpAtCopyright - 65)))) !== 0) || ((((_la - 97)) & ~0x1F) === 0 && ((1 << (_la - 97)) & ((1 << (chatParser.OpAmpAudio - 97)) | (1 << (chatParser.OpAmpImage - 97)) | (1 << (chatParser.OpAmpImageZoom - 97)) | (1 << (chatParser.OpAmpImageWAudio - 97)) | (1 << (chatParser.OpAmpVideo - 97)) | (1 << (chatParser.OpAmpArticle - 97)) | (1 << (chatParser.OpAmpDocument - 97)) | (1 << (chatParser.OpAmpApp - 97)) | (1 << (chatParser.OpAmpWebsite - 97)) | (1 << (chatParser.OpAmpStillImageFilm - 97)) | (1 << (chatParser.OpAmpAudioLink - 97)) | (1 << (chatParser.OpAmpImageLink - 97)) | (1 << (chatParser.OpAmpVideoLink - 97)) | (1 << (chatParser.OpAmpArticleLink - 97)) | (1 << (chatParser.OpAmpDocumentLink - 97)) | (1 << (chatParser.OpAmpDocumentDownload - 97)) | (1 << (chatParser.OpAmpAppLink - 97)) | (1 << (chatParser.OpAmpWebsiteLink - 97)) | (1 << (chatParser.OpAmpStillImageFilmLink - 97)))) !== 0) || ((((_la - 133)) & ~0x1F) === 0 && ((1 << (_la - 133)) & ((1 << (chatParser.OpAmpVideoEmbed - 133)) | (1 << (chatParser.OpAmpAudioEmbed - 133)) | (1 << (chatParser.OpAmpDocumentEmbed - 133)) | (1 << (chatParser.OpAmpStillImageFilmEmbed - 133)) | (1 << (chatParser.URL - 133)) | (1 << (chatParser.LIST_LINE - 133)))) !== 0)) {
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
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << chatParser.S) | (1 << chatParser.OPRANGLES) | (1 << chatParser.OPRANGLEL) | (1 << chatParser.OPDANGLE) | (1 << chatParser.OPU) | (1 << chatParser.OPB) | (1 << chatParser.OPQ) | (1 << chatParser.OPA) | (1 << chatParser.OPS) | (1 << chatParser.OPC) | (1 << chatParser.OPHASH) | (1 << chatParser.COLON) | (1 << chatParser.AMP) | (1 << chatParser.DBLCOLON))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (chatParser.Greater - 33)) | (1 << (chatParser.Less - 33)) | (1 << (chatParser.RightAngle - 33)) | (1 << (chatParser.RightArrow - 33)) | (1 << (chatParser.DBLEQ - 33)) | (1 << (chatParser.ArticleText - 33)) | (1 << (chatParser.NUMERIC - 33)) | (1 << (chatParser.STRING - 33)) | (1 << (chatParser.NOTBITMARK - 33)) | (1 << (chatParser.SENTENCE - 33)) | (1 << (chatParser.BARSTRING - 33)) | (1 << (chatParser.AtReference - 33)) | (1 << (chatParser.AtExampleWithStr - 33)) | (1 << (chatParser.AtExamplecol - 33)))) !== 0) || ((((_la - 65)) & ~0x1F) === 0 && ((1 << (_la - 65)) & ((1 << (chatParser.AtExamplecl - 65)) | (1 << (chatParser.AtLabeltrue - 65)) | (1 << (chatParser.AtLabelfalse - 65)) | (1 << (chatParser.OpAtCopyright - 65)))) !== 0) || ((((_la - 97)) & ~0x1F) === 0 && ((1 << (_la - 97)) & ((1 << (chatParser.OpAmpAudio - 97)) | (1 << (chatParser.OpAmpImage - 97)) | (1 << (chatParser.OpAmpImageZoom - 97)) | (1 << (chatParser.OpAmpImageWAudio - 97)) | (1 << (chatParser.OpAmpVideo - 97)) | (1 << (chatParser.OpAmpArticle - 97)) | (1 << (chatParser.OpAmpDocument - 97)) | (1 << (chatParser.OpAmpApp - 97)) | (1 << (chatParser.OpAmpWebsite - 97)) | (1 << (chatParser.OpAmpStillImageFilm - 97)) | (1 << (chatParser.OpAmpAudioLink - 97)) | (1 << (chatParser.OpAmpImageLink - 97)) | (1 << (chatParser.OpAmpVideoLink - 97)) | (1 << (chatParser.OpAmpArticleLink - 97)) | (1 << (chatParser.OpAmpDocumentLink - 97)) | (1 << (chatParser.OpAmpDocumentDownload - 97)) | (1 << (chatParser.OpAmpAppLink - 97)) | (1 << (chatParser.OpAmpWebsiteLink - 97)) | (1 << (chatParser.OpAmpStillImageFilmLink - 97)))) !== 0) || ((((_la - 133)) & ~0x1F) === 0 && ((1 << (_la - 133)) & ((1 << (chatParser.OpAmpVideoEmbed - 133)) | (1 << (chatParser.OpAmpAudioEmbed - 133)) | (1 << (chatParser.OpAmpDocumentEmbed - 133)) | (1 << (chatParser.OpAmpStillImageFilmEmbed - 133)) | (1 << (chatParser.URL - 133)) | (1 << (chatParser.LIST_LINE - 133)))) !== 0)) {
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
			this.state = 360;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 359;
					this.s_and_w();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 362;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 28, this._ctx);
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
			this.state = 364;
			this.match(chatParser.BitConversationRight1);
			this.state = 365;
			this.format2();
			this.state = 366;
			this.match(chatParser.CL);
			this.state = 370;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 29, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 367;
					this.match(chatParser.NL);
					}
					}
				}
				this.state = 372;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 29, this._ctx);
			}
			this.state = 382;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 31, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 373;
					this.bitElem();
					this.state = 377;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 30, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 374;
							this.match(chatParser.NL);
							}
							}
						}
						this.state = 379;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 30, this._ctx);
					}
					}
					}
				}
				this.state = 384;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 31, this._ctx);
			}
			this.state = 386;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === chatParser.AtPartner) {
				{
				this.state = 385;
				this.partner1();
				}
			}

			this.state = 391;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === chatParser.NL) {
				{
				{
				this.state = 388;
				this.match(chatParser.NL);
				}
				}
				this.state = 393;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 395;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 394;
					this.s_and_w();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 397;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 34, this._ctx);
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
			this.state = 399;
			this.match(chatParser.BitConversationRight1Thought);
			this.state = 400;
			this.format2();
			this.state = 401;
			this.match(chatParser.CL);
			this.state = 405;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 35, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 402;
					this.match(chatParser.NL);
					}
					}
				}
				this.state = 407;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 35, this._ctx);
			}
			this.state = 417;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 37, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 408;
					this.bitElem();
					this.state = 412;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 36, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 409;
							this.match(chatParser.NL);
							}
							}
						}
						this.state = 414;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 36, this._ctx);
					}
					}
					}
				}
				this.state = 419;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 37, this._ctx);
			}
			this.state = 421;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === chatParser.AtPartner) {
				{
				this.state = 420;
				this.partner1();
				}
			}

			this.state = 426;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === chatParser.NL) {
				{
				{
				this.state = 423;
				this.match(chatParser.NL);
				}
				}
				this.state = 428;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 430;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 429;
					this.s_and_w();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 432;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 40, this._ctx);
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
			this.state = 434;
			this.match(chatParser.BitConversationRight1Scream);
			this.state = 435;
			this.format2();
			this.state = 436;
			this.match(chatParser.CL);
			this.state = 440;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 41, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 437;
					this.match(chatParser.NL);
					}
					}
				}
				this.state = 442;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 41, this._ctx);
			}
			this.state = 452;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 43, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 443;
					this.bitElem();
					this.state = 447;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 42, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 444;
							this.match(chatParser.NL);
							}
							}
						}
						this.state = 449;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 42, this._ctx);
					}
					}
					}
				}
				this.state = 454;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 43, this._ctx);
			}
			this.state = 456;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === chatParser.AtPartner) {
				{
				this.state = 455;
				this.partner1();
				}
			}

			this.state = 461;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === chatParser.NL) {
				{
				{
				this.state = 458;
				this.match(chatParser.NL);
				}
				}
				this.state = 463;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 465;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 464;
					this.s_and_w();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 467;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 46, this._ctx);
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
			this.state = 469;
			this.match(chatParser.BitConversationLeft1Thought);
			this.state = 470;
			this.format2();
			this.state = 471;
			this.match(chatParser.CL);
			this.state = 475;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 47, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 472;
					this.match(chatParser.NL);
					}
					}
				}
				this.state = 477;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 47, this._ctx);
			}
			this.state = 487;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 49, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 478;
					this.bitElem();
					this.state = 482;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 48, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 479;
							this.match(chatParser.NL);
							}
							}
						}
						this.state = 484;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 48, this._ctx);
					}
					}
					}
				}
				this.state = 489;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 49, this._ctx);
			}
			this.state = 491;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === chatParser.AtPartner) {
				{
				this.state = 490;
				this.partner1();
				}
			}

			this.state = 496;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === chatParser.NL) {
				{
				{
				this.state = 493;
				this.match(chatParser.NL);
				}
				}
				this.state = 498;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 500;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 499;
					this.s_and_w();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 502;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 52, this._ctx);
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
			this.state = 504;
			this.match(chatParser.BitConversationLeft1Scream);
			this.state = 505;
			this.format2();
			this.state = 506;
			this.match(chatParser.CL);
			this.state = 510;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 53, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 507;
					this.match(chatParser.NL);
					}
					}
				}
				this.state = 512;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 53, this._ctx);
			}
			this.state = 522;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 55, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 513;
					this.bitElem();
					this.state = 517;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 54, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 514;
							this.match(chatParser.NL);
							}
							}
						}
						this.state = 519;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 54, this._ctx);
					}
					}
					}
				}
				this.state = 524;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 55, this._ctx);
			}
			this.state = 526;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === chatParser.AtPartner) {
				{
				this.state = 525;
				this.partner1();
				}
			}

			this.state = 531;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === chatParser.NL) {
				{
				{
				this.state = 528;
				this.match(chatParser.NL);
				}
				}
				this.state = 533;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 535;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 534;
					this.s_and_w();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 537;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 58, this._ctx);
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
			this.state = 539;
			this.name_text();
			this.state = 547;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === chatParser.NL || ((((_la - 98)) & ~0x1F) === 0 && ((1 << (_la - 98)) & ((1 << (chatParser.OpAmpImage - 98)) | (1 << (chatParser.OpAmpImageZoom - 98)) | (1 << (chatParser.OpAmpImageWAudio - 98)) | (1 << (chatParser.OpAmpImageLink - 98)))) !== 0)) {
				{
				this.state = 543;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === chatParser.NL) {
					{
					{
					this.state = 540;
					this.match(chatParser.NL);
					}
					}
					this.state = 545;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 546;
				this.imagebit();
				}
			}

			this.state = 550;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === chatParser.OPATALT) {
				{
				this.state = 549;
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
			this.state = 552;
			this.name_text();
			this.state = 560;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === chatParser.NL || ((((_la - 98)) & ~0x1F) === 0 && ((1 << (_la - 98)) & ((1 << (chatParser.OpAmpImage - 98)) | (1 << (chatParser.OpAmpImageZoom - 98)) | (1 << (chatParser.OpAmpImageWAudio - 98)) | (1 << (chatParser.OpAmpImageLink - 98)))) !== 0)) {
				{
				this.state = 556;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === chatParser.NL) {
					{
					{
					this.state = 553;
					this.match(chatParser.NL);
					}
					}
					this.state = 558;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 559;
				this.imagebit();
				}
			}

			this.state = 563;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === chatParser.OPATALT) {
				{
				this.state = 562;
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
			this.state = 565;
			this.partner1_name();
			this.state = 573;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 66, this._ctx) ) {
			case 1:
				{
				this.state = 569;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === chatParser.NL) {
					{
					{
					this.state = 566;
					this.match(chatParser.NL);
					}
					}
					this.state = 571;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 572;
				this.imagebit();
				}
				break;
			}
			this.state = 576;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === chatParser.OPATALT) {
				{
				this.state = 575;
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
			this.state = 578;
			this.match(chatParser.AtPartner);
			this.state = 579;
			this.match(chatParser.STRING);
			this.state = 580;
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
			this.state = 582;
			this.match(chatParser.OPHASH);
			this.state = 583;
			this.s_and_w();
			this.state = 584;
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
			this.state = 586;
			this.match(chatParser.OPATALT);
			this.state = 587;
			this.match(chatParser.STRING);
			this.state = 588;
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
			this.state = 590;
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
			this.state = 592;
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
			this.state = 594;
			this.sspl();
			this.state = 595;
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
			this.state = 620;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 68, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 597;
				this.match(chatParser.LIST_LINE);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 598;
				this.match(chatParser.NOTBITMARK);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 599;
				this.gap();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 600;
				this.atdef();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 601;
				this.reference();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 602;
				this.item();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 603;
				this.title();
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 604;
				this.instruction();
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 605;
				this.hint();
				}
				break;

			case 10:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 606;
				this.s_and_w();
				}
				break;

			case 11:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 607;
				this.example();
				}
				break;

			case 12:
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 608;
				this.bool_label();
				}
				break;

			case 13:
				this.enterOuterAlt(_localctx, 13);
				{
				this.state = 609;
				this.imagebit();
				}
				break;

			case 14:
				this.enterOuterAlt(_localctx, 14);
				{
				this.state = 610;
				this.audiobit();
				}
				break;

			case 15:
				this.enterOuterAlt(_localctx, 15);
				{
				this.state = 611;
				this.videobit();
				}
				break;

			case 16:
				this.enterOuterAlt(_localctx, 16);
				{
				this.state = 612;
				this.articlebit();
				}
				break;

			case 17:
				this.enterOuterAlt(_localctx, 17);
				{
				this.state = 613;
				this.documentbit();
				}
				break;

			case 18:
				this.enterOuterAlt(_localctx, 18);
				{
				this.state = 614;
				this.appbit();
				}
				break;

			case 19:
				this.enterOuterAlt(_localctx, 19);
				{
				this.state = 615;
				this.websitebit();
				}
				break;

			case 20:
				this.enterOuterAlt(_localctx, 20);
				{
				this.state = 616;
				this.stillimagefilmbit();
				}
				break;

			case 21:
				this.enterOuterAlt(_localctx, 21);
				{
				this.state = 617;
				this.angleref();
				}
				break;

			case 22:
				this.enterOuterAlt(_localctx, 22);
				{
				this.state = 618;
				this.anchor();
				}
				break;

			case 23:
				this.enterOuterAlt(_localctx, 23);
				{
				this.state = 619;
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
			this.state = 622;
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
			this.state = 624;
			this.single_gap();
			this.state = 632;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 70, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					this.state = 630;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case chatParser.OPU:
						{
						this.state = 625;
						this.single_gap();
						}
						break;
					case chatParser.OPB:
						{
						this.state = 626;
						this.instruction();
						}
						break;
					case chatParser.OPQ:
						{
						this.state = 627;
						this.hint();
						}
						break;
					case chatParser.OPC:
						{
						this.state = 628;
						this.item();
						}
						break;
					case chatParser.AtExampleWithStr:
					case chatParser.AtExamplecol:
					case chatParser.AtExamplecl:
						{
						this.state = 629;
						this.example();
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					}
				}
				this.state = 634;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 70, this._ctx);
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
			this.state = 635;
			this.match(chatParser.OPU);
			this.state = 639;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 71, this._ctx) ) {
			case 1:
				{
				this.state = 636;
				this.match(chatParser.NUMERIC);
				}
				break;

			case 2:
				{
				this.state = 637;
				this.match(chatParser.STRING);
				}
				break;

			case 3:
				// tslint:disable-next-line:no-empty
				{
				}
				break;
			}
			this.state = 644;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << chatParser.S) | (1 << chatParser.OPS) | (1 << chatParser.COLON) | (1 << chatParser.AMP) | (1 << chatParser.DBLCOLON))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (chatParser.Greater - 33)) | (1 << (chatParser.Less - 33)) | (1 << (chatParser.RightAngle - 33)) | (1 << (chatParser.RightArrow - 33)) | (1 << (chatParser.DBLEQ - 33)) | (1 << (chatParser.NUMERIC - 33)) | (1 << (chatParser.STRING - 33)) | (1 << (chatParser.NOTBITMARK - 33)) | (1 << (chatParser.SENTENCE - 33)) | (1 << (chatParser.BARSTRING - 33)))) !== 0) || _la === chatParser.URL) {
				{
				{
				this.state = 641;
				this.s_and_w();
				}
				}
				this.state = 646;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 647;
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
			this.state = 649;
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
			this.state = 651;
			this.match(chatParser.AtPoints);
			this.state = 652;
			this.match(chatParser.NUMERIC);
			this.state = 653;
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
			this.state = 658;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 73, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 655;
					this.resource_format();
					}
					}
				}
				this.state = 660;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 73, this._ctx);
			}
			this.state = 666;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 86)) & ~0x1F) === 0 && ((1 << (_la - 86)) & ((1 << (chatParser.AmpAudio - 86)) | (1 << (chatParser.AmpImage - 86)) | (1 << (chatParser.AmpImageZoom - 86)) | (1 << (chatParser.AmpImageWAudio - 86)) | (1 << (chatParser.AmpVideo - 86)) | (1 << (chatParser.AmpArticle - 86)) | (1 << (chatParser.AmpDocument - 86)) | (1 << (chatParser.AmpApp - 86)) | (1 << (chatParser.AmpWebsite - 86)) | (1 << (chatParser.AmpStillImageFilm - 86)) | (1 << (chatParser.AmpPdf - 86)) | (1 << (chatParser.AmpAudioLink - 86)) | (1 << (chatParser.AmpImageLink - 86)) | (1 << (chatParser.AmpVideoLink - 86)) | (1 << (chatParser.AmpArticleLink - 86)) | (1 << (chatParser.AmpDocumentLink - 86)) | (1 << (chatParser.AmpDocumentDownload - 86)) | (1 << (chatParser.AmpAppLink - 86)) | (1 << (chatParser.AmpWebsiteLink - 86)) | (1 << (chatParser.AmpStillImageFilmLink - 86)))) !== 0) || ((((_la - 128)) & ~0x1F) === 0 && ((1 << (_la - 128)) & ((1 << (chatParser.AmpVideoEmbed - 128)) | (1 << (chatParser.AmpDocumentEmbed - 128)) | (1 << (chatParser.AmpStillImageFilmEmbed - 128)) | (1 << (chatParser.ColonText - 128)) | (1 << (chatParser.ColonJson - 128)))) !== 0)) {
				{
				this.state = 664;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case chatParser.ColonText:
					{
					this.state = 661;
					this.match(chatParser.ColonText);
					}
					break;
				case chatParser.ColonJson:
					{
					this.state = 662;
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
					this.state = 663;
					this.resource_format_extra();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				this.state = 668;
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
			this.state = 669;
			_la = this._input.LA(1);
			if (!(((((_la - 91)) & ~0x1F) === 0 && ((1 << (_la - 91)) & ((1 << (chatParser.AmpArticle - 91)) | (1 << (chatParser.AmpDocument - 91)) | (1 << (chatParser.AmpWebsite - 91)) | (1 << (chatParser.AmpStillImageFilm - 91)) | (1 << (chatParser.AmpAudioLink - 91)) | (1 << (chatParser.AmpImageLink - 91)) | (1 << (chatParser.AmpVideoLink - 91)) | (1 << (chatParser.AmpArticleLink - 91)) | (1 << (chatParser.AmpDocumentLink - 91)) | (1 << (chatParser.AmpDocumentDownload - 91)) | (1 << (chatParser.AmpAppLink - 91)) | (1 << (chatParser.AmpWebsiteLink - 91)) | (1 << (chatParser.AmpStillImageFilmLink - 91)))) !== 0) || ((((_la - 128)) & ~0x1F) === 0 && ((1 << (_la - 128)) & ((1 << (chatParser.AmpVideoEmbed - 128)) | (1 << (chatParser.AmpAudioEmbed - 128)) | (1 << (chatParser.AmpDocumentEmbed - 128)) | (1 << (chatParser.AmpStillImageFilmEmbed - 128)) | (1 << (chatParser.BitmarkMinus - 128)) | (1 << (chatParser.BitmarkPlus - 128)) | (1 << (chatParser.ColonJson - 128)) | (1 << (chatParser.Prosemirror - 128)) | (1 << (chatParser.Placeholder - 128)))) !== 0))) {
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
			this.state = 680;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case chatParser.AmpImage:
			case chatParser.AmpImageZoom:
			case chatParser.AmpImageWAudio:
			case chatParser.AmpImageLink:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 671;
				this.image_format();
				}
				break;
			case chatParser.AmpAudio:
			case chatParser.AmpAudioLink:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 672;
				this.audio_format();
				}
				break;
			case chatParser.AmpVideo:
			case chatParser.AmpVideoLink:
			case chatParser.AmpVideoEmbed:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 673;
				this.video_format();
				}
				break;
			case chatParser.AmpArticle:
			case chatParser.AmpArticleLink:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 674;
				this.article_format();
				}
				break;
			case chatParser.AmpDocument:
			case chatParser.AmpDocumentLink:
			case chatParser.AmpDocumentDownload:
			case chatParser.AmpDocumentEmbed:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 675;
				this.document_format();
				}
				break;
			case chatParser.AmpApp:
			case chatParser.AmpAppLink:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 676;
				this.app_format();
				}
				break;
			case chatParser.AmpWebsite:
			case chatParser.AmpWebsiteLink:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 677;
				this.website_format();
				}
				break;
			case chatParser.AmpStillImageFilm:
			case chatParser.AmpStillImageFilmLink:
			case chatParser.AmpStillImageFilmEmbed:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 678;
				this.stillimagefilm_format();
				}
				break;
			case chatParser.AmpPdf:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 679;
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
			this.state = 687;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case chatParser.BitmarkMinus:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 682;
				this.match(chatParser.BitmarkMinus);
				}
				break;
			case chatParser.BitmarkPlus:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 683;
				this.match(chatParser.BitmarkPlus);
				}
				break;
			case chatParser.ColonText:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 684;
				this.match(chatParser.ColonText);
				}
				break;
			case chatParser.ColonJson:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 685;
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
			this.state = 703;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case chatParser.AmpImage:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 689;
				this.match(chatParser.AmpImage);
				this.state = 692;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case chatParser.Image_type:
					{
					{
					this.state = 690;
					this.match(chatParser.Image_type);
					}
					}
					break;
				case chatParser.DotArticleAtt:
					{
					{
					this.state = 691;
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
				this.state = 694;
				this.match(chatParser.AmpImageLink);
				this.state = 696;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === chatParser.Image_type) {
					{
					this.state = 695;
					this.match(chatParser.Image_type);
					}
				}

				}
				break;
			case chatParser.AmpImageZoom:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 698;
				this.match(chatParser.AmpImageZoom);
				this.state = 700;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === chatParser.Image_type) {
					{
					this.state = 699;
					this.match(chatParser.Image_type);
					}
				}

				}
				break;
			case chatParser.AmpImageWAudio:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 702;
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
			this.state = 705;
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
			this.state = 708;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === chatParser.COLON) {
				{
				this.state = 706;
				this.match(chatParser.COLON);
				this.state = 707;
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
			this.state = 710;
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
			this.state = 712;
			_la = this._input.LA(1);
			if (!(((((_la - 92)) & ~0x1F) === 0 && ((1 << (_la - 92)) & ((1 << (chatParser.AmpDocument - 92)) | (1 << (chatParser.AmpDocumentLink - 92)) | (1 << (chatParser.AmpDocumentDownload - 92)))) !== 0) || _la === chatParser.AmpDocumentEmbed)) {
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
			this.state = 714;
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
			this.state = 716;
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
			this.state = 718;
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
			this.state = 720;
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
			this.state = 722;
			_la = this._input.LA(1);
			if (!(((((_la - 104)) & ~0x1F) === 0 && ((1 << (_la - 104)) & ((1 << (chatParser.OpAmpDocument - 104)) | (1 << (chatParser.OpAmpDocumentLink - 104)) | (1 << (chatParser.OpAmpDocumentDownload - 104)) | (1 << (chatParser.OpAmpDocumentEmbed - 104)))) !== 0))) {
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
			this.state = 724;
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
			this.state = 726;
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
			this.state = 743;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case chatParser.OpAmpVideo:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 728;
				this.match(chatParser.OpAmpVideo);
				this.state = 731;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 83, this._ctx) ) {
				case 1:
					{
					this.state = 729;
					this.match(chatParser.COLON);
					this.state = 730;
					this.match(chatParser.Video_type);
					}
					break;
				}
				}
				break;
			case chatParser.OpAmpVideoLink:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 733;
				this.match(chatParser.OpAmpVideoLink);
				this.state = 736;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 84, this._ctx) ) {
				case 1:
					{
					this.state = 734;
					this.match(chatParser.COLON);
					this.state = 735;
					this.match(chatParser.Video_type);
					}
					break;
				}
				}
				break;
			case chatParser.OpAmpVideoEmbed:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 738;
				this.match(chatParser.OpAmpVideoEmbed);
				this.state = 741;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 85, this._ctx) ) {
				case 1:
					{
					this.state = 739;
					this.match(chatParser.COLON);
					this.state = 740;
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
			this.state = 745;
			_la = this._input.LA(1);
			if (!(((((_la - 107)) & ~0x1F) === 0 && ((1 << (_la - 107)) & ((1 << (chatParser.OpAmpStillImageFilm - 107)) | (1 << (chatParser.OpAmpStillImageFilmLink - 107)) | (1 << (chatParser.OpAmpStillImageFilmEmbed - 107)))) !== 0))) {
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
			this.state = 753;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case chatParser.OpAmpArticle:
			case chatParser.OpAmpArticleLink:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 747;
				this.op_article_format();
				this.state = 748;
				this.match(chatParser.COLON);
				this.state = 749;
				this.url();
				this.state = 750;
				this.match(chatParser.CL);
				}
				break;
			case chatParser.ArticleText:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 752;
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
			this.state = 755;
			this.op_document_format();
			this.state = 756;
			this.match(chatParser.COLON);
			this.state = 757;
			this.url();
			this.state = 758;
			this.match(chatParser.CL);
			this.state = 763;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === chatParser.OPATALT) {
				{
				this.state = 759;
				this.match(chatParser.OPATALT);
				this.state = 760;
				this.words();
				this.state = 761;
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
			this.state = 765;
			this.op_website_format();
			this.state = 766;
			this.match(chatParser.COLON);
			this.state = 767;
			this.url();
			this.state = 768;
			this.match(chatParser.CL);
			this.state = 773;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === chatParser.OPATALT) {
				{
				this.state = 769;
				this.match(chatParser.OPATALT);
				this.state = 770;
				this.words();
				this.state = 771;
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
			this.state = 775;
			this.op_app_format();
			this.state = 776;
			this.match(chatParser.COLON);
			this.state = 779;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case chatParser.URL:
				{
				this.state = 777;
				this.url();
				}
				break;
			case chatParser.TEL:
				{
				this.state = 778;
				this.telephone();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 781;
			this.match(chatParser.CL);
			this.state = 786;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === chatParser.OPATALT) {
				{
				this.state = 782;
				this.match(chatParser.OPATALT);
				this.state = 783;
				this.words();
				this.state = 784;
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
			this.state = 788;
			this.stillimg_one();
			this.state = 792;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 92, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 789;
					this.resource_chained();
					}
					}
				}
				this.state = 794;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 92, this._ctx);
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
			this.state = 795;
			this.op_stillimagefilm_format();
			this.state = 796;
			this.match(chatParser.COLON);
			this.state = 800;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === chatParser.S) {
				{
				{
				this.state = 797;
				this.match(chatParser.S);
				}
				}
				this.state = 802;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 803;
			this.url();
			this.state = 804;
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
			this.state = 806;
			this.video_one();
			this.state = 810;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 94, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 807;
					this.resource_chained();
					}
					}
				}
				this.state = 812;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 94, this._ctx);
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
			this.state = 813;
			this.op_video_format();
			this.state = 814;
			this.match(chatParser.COLON);
			this.state = 815;
			this.url();
			this.state = 816;
			this.match(chatParser.CL);
			this.state = 821;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 95, this._ctx) ) {
			case 1:
				{
				this.state = 817;
				this.match(chatParser.OPATALT);
				this.state = 818;
				this.words();
				this.state = 819;
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
			this.state = 823;
			this.image_one();
			this.state = 827;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 96, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 824;
					this.image_chained();
					}
					}
				}
				this.state = 829;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 96, this._ctx);
			}
			this.state = 832;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 97, this._ctx) ) {
			case 1:
				{
				this.state = 830;
				this.match(chatParser.NL);
				this.state = 831;
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
			this.state = 834;
			this.op_image_format();
			this.state = 835;
			this.match(chatParser.COLON);
			this.state = 839;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === chatParser.S) {
				{
				{
				this.state = 836;
				this.match(chatParser.S);
				}
				}
				this.state = 841;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 842;
			this.url();
			this.state = 843;
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
			this.state = 859;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case chatParser.OpAmpImage:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 845;
				this.match(chatParser.OpAmpImage);
				this.state = 848;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case chatParser.Image_type:
					{
					{
					this.state = 846;
					this.match(chatParser.Image_type);
					}
					}
					break;
				case chatParser.DotArticleAtt:
					{
					{
					this.state = 847;
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
				this.state = 850;
				this.match(chatParser.OpAmpImageLink);
				this.state = 852;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === chatParser.Image_type) {
					{
					this.state = 851;
					this.match(chatParser.Image_type);
					}
				}

				}
				break;
			case chatParser.OpAmpImageZoom:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 854;
				this.match(chatParser.OpAmpImageZoom);
				this.state = 856;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === chatParser.Image_type) {
					{
					this.state = 855;
					this.match(chatParser.Image_type);
					}
				}

				}
				break;
			case chatParser.OpAmpImageWAudio:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 858;
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
			this.state = 878;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case chatParser.AtSrc:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 861;
				this.match(chatParser.AtSrc);
				this.state = 862;
				this.match(chatParser.COLON);
				this.state = 863;
				this.url();
				this.state = 864;
				this.match(chatParser.CL);
				}
				break;
			case chatParser.AtWidth:
			case chatParser.AtHeight:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 866;
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
				this.state = 867;
				this.match(chatParser.COLON);
				this.state = 868;
				this.match(chatParser.NUMERIC);
				this.state = 869;
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
				this.state = 870;
				_la = this._input.LA(1);
				if (!(((((_la - 74)) & ~0x1F) === 0 && ((1 << (_la - 74)) & ((1 << (chatParser.OPATALT - 74)) | (1 << (chatParser.OpAtCaption - 74)) | (1 << (chatParser.OpAtLicense - 74)) | (1 << (chatParser.OpAtCopyright - 74)) | (1 << (chatParser.OpAtSearch - 74)))) !== 0))) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 874;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 103, this._ctx);
				while (_alt !== 1 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1 + 1) {
						{
						{
						this.state = 871;
						this.matchWildcard();
						}
						}
					}
					this.state = 876;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 103, this._ctx);
				}
				this.state = 877;
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
			this.state = 897;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case chatParser.AtSrc:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 880;
				this.match(chatParser.AtSrc);
				this.state = 881;
				this.match(chatParser.COLON);
				this.state = 882;
				this.url();
				this.state = 883;
				this.match(chatParser.CL);
				}
				break;
			case chatParser.AtWidth:
			case chatParser.AtHeight:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 885;
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
				this.state = 886;
				this.match(chatParser.COLON);
				this.state = 887;
				this.match(chatParser.NUMERIC);
				this.state = 888;
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
				this.state = 889;
				_la = this._input.LA(1);
				if (!(((((_la - 74)) & ~0x1F) === 0 && ((1 << (_la - 74)) & ((1 << (chatParser.OPATALT - 74)) | (1 << (chatParser.OpAtCaption - 74)) | (1 << (chatParser.OpAtLicense - 74)) | (1 << (chatParser.OpAtCopyright - 74)) | (1 << (chatParser.OpAtSearch - 74)))) !== 0))) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 893;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 105, this._ctx);
				while (_alt !== 1 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1 + 1) {
						{
						{
						this.state = 890;
						this.matchWildcard();
						}
						}
					}
					this.state = 895;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 105, this._ctx);
				}
				this.state = 896;
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
			this.state = 899;
			this.audio_one();
			this.state = 903;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 107, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 900;
					this.resource_chained();
					}
					}
				}
				this.state = 905;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 107, this._ctx);
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
			this.state = 906;
			this.op_audio_format();
			this.state = 907;
			this.match(chatParser.COLON);
			this.state = 908;
			this.url();
			this.state = 909;
			this.match(chatParser.CL);
			this.state = 914;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 108, this._ctx) ) {
			case 1:
				{
				this.state = 910;
				this.match(chatParser.OPATALT);
				this.state = 911;
				this.words();
				this.state = 912;
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
			this.state = 926;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case chatParser.AmpAudio:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 916;
				this.match(chatParser.AmpAudio);
				this.state = 919;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === chatParser.COLON) {
					{
					this.state = 917;
					this.match(chatParser.COLON);
					this.state = 918;
					this.match(chatParser.Audio_type);
					}
				}

				}
				break;
			case chatParser.AmpAudioLink:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 921;
				this.match(chatParser.AmpAudioLink);
				this.state = 924;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === chatParser.COLON) {
					{
					this.state = 922;
					this.match(chatParser.COLON);
					this.state = 923;
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
			this.state = 943;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case chatParser.OpAmpAudio:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 928;
				this.match(chatParser.OpAmpAudio);
				this.state = 931;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 112, this._ctx) ) {
				case 1:
					{
					this.state = 929;
					this.match(chatParser.COLON);
					this.state = 930;
					this.match(chatParser.Audio_type);
					}
					break;
				}
				}
				break;
			case chatParser.OpAmpAudioLink:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 933;
				this.match(chatParser.OpAmpAudioLink);
				this.state = 936;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 113, this._ctx) ) {
				case 1:
					{
					this.state = 934;
					this.match(chatParser.COLON);
					this.state = 935;
					this.match(chatParser.Audio_type);
					}
					break;
				}
				}
				break;
			case chatParser.OpAmpAudioEmbed:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 938;
				this.match(chatParser.OpAmpAudioEmbed);
				this.state = 941;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 114, this._ctx) ) {
				case 1:
					{
					this.state = 939;
					this.match(chatParser.COLON);
					this.state = 940;
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
			this.state = 976;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case chatParser.OPA:
			case chatParser.AtSrc:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 948;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case chatParser.OPA:
					{
					this.state = 945;
					this.match(chatParser.OPA);
					this.state = 946;
					this.s_and_w();
					}
					break;
				case chatParser.AtSrc:
					{
					this.state = 947;
					this.match(chatParser.AtSrc);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 950;
				this.match(chatParser.COLON);
				this.state = 954;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 117, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 951;
						this.match(chatParser.S);
						}
						}
					}
					this.state = 956;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 117, this._ctx);
				}
				this.state = 959;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					this.state = 959;
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
						this.state = 957;
						this.s_and_w();
						}
						break;
					case chatParser.NL:
						{
						this.state = 958;
						this.match(chatParser.NL);
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					}
					this.state = 961;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << chatParser.S) | (1 << chatParser.OPS) | (1 << chatParser.COLON) | (1 << chatParser.AMP) | (1 << chatParser.DBLCOLON))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (chatParser.Greater - 33)) | (1 << (chatParser.Less - 33)) | (1 << (chatParser.RightAngle - 33)) | (1 << (chatParser.RightArrow - 33)) | (1 << (chatParser.DBLEQ - 33)) | (1 << (chatParser.NUMERIC - 33)) | (1 << (chatParser.STRING - 33)) | (1 << (chatParser.NL - 33)) | (1 << (chatParser.NOTBITMARK - 33)) | (1 << (chatParser.SENTENCE - 33)) | (1 << (chatParser.BARSTRING - 33)))) !== 0) || _la === chatParser.URL);
				this.state = 963;
				this.match(chatParser.CL);
				}
				break;
			case chatParser.AtWidth:
			case chatParser.AtHeight:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 964;
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
				this.state = 965;
				this.match(chatParser.COLON);
				this.state = 966;
				this.match(chatParser.NUMERIC);
				this.state = 967;
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
				this.state = 968;
				_la = this._input.LA(1);
				if (!(((((_la - 74)) & ~0x1F) === 0 && ((1 << (_la - 74)) & ((1 << (chatParser.OPATALT - 74)) | (1 << (chatParser.OpAtCaption - 74)) | (1 << (chatParser.OpAtLicense - 74)) | (1 << (chatParser.OpAtCopyright - 74)) | (1 << (chatParser.OpAtSearch - 74)))) !== 0))) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 972;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 120, this._ctx);
				while (_alt !== 1 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1 + 1) {
						{
						{
						this.state = 969;
						this.matchWildcard();
						}
						}
					}
					this.state = 974;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 120, this._ctx);
				}
				this.state = 975;
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
			this.state = 978;
			this.match(chatParser.TEL);
			this.state = 979;
			this.match(chatParser.PLUS);
			this.state = 980;
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
			this.state = 982;
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
			this.state = 1014;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 128, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 984;
				this.match(chatParser.OPC);
				this.state = 985;
				this.match(chatParser.CL);
				this.state = 993;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 123, this._ctx) ) {
				case 1:
					{
					this.state = 989;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === chatParser.S) {
						{
						{
						this.state = 986;
						this.match(chatParser.S);
						}
						}
						this.state = 991;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					this.state = 992;
					this.lead();
					}
					break;
				}
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 995;
				this.match(chatParser.OPC);
				this.state = 996;
				this.s_and_w();
				this.state = 1001;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (((((_la - 28)) & ~0x1F) === 0 && ((1 << (_la - 28)) & ((1 << (chatParser.COLON - 28)) | (1 << (chatParser.AMP - 28)) | (1 << (chatParser.Greater - 28)) | (1 << (chatParser.Less - 28)) | (1 << (chatParser.RightAngle - 28)) | (1 << (chatParser.RightArrow - 28)) | (1 << (chatParser.DBLEQ - 28)) | (1 << (chatParser.NOTBITMARK - 28)) | (1 << (chatParser.SENTENCE - 28)) | (1 << (chatParser.BARSTRING - 28)))) !== 0)) {
					{
					this.state = 999;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case chatParser.COLON:
						{
						this.state = 997;
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
						this.state = 998;
						this.words();
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					}
					this.state = 1003;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1004;
				this.match(chatParser.CL);
				this.state = 1012;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 127, this._ctx) ) {
				case 1:
					{
					this.state = 1008;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === chatParser.S) {
						{
						{
						this.state = 1005;
						this.match(chatParser.S);
						}
						}
						this.state = 1010;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					this.state = 1011;
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
			this.state = 1016;
			this.match(chatParser.OPC);
			this.state = 1017;
			this.s_and_w();
			this.state = 1022;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 28)) & ~0x1F) === 0 && ((1 << (_la - 28)) & ((1 << (chatParser.COLON - 28)) | (1 << (chatParser.AMP - 28)) | (1 << (chatParser.Greater - 28)) | (1 << (chatParser.Less - 28)) | (1 << (chatParser.RightAngle - 28)) | (1 << (chatParser.RightArrow - 28)) | (1 << (chatParser.DBLEQ - 28)) | (1 << (chatParser.NOTBITMARK - 28)) | (1 << (chatParser.SENTENCE - 28)) | (1 << (chatParser.BARSTRING - 28)))) !== 0)) {
				{
				this.state = 1020;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case chatParser.COLON:
					{
					this.state = 1018;
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
					this.state = 1019;
					this.words();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				this.state = 1024;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1025;
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
			this.state = 1037;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case chatParser.OPRANGLES:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1027;
				this.match(chatParser.OPRANGLES);
				this.state = 1029;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << chatParser.S) | (1 << chatParser.OPS) | (1 << chatParser.COLON) | (1 << chatParser.AMP) | (1 << chatParser.DBLCOLON))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (chatParser.Greater - 33)) | (1 << (chatParser.Less - 33)) | (1 << (chatParser.RightAngle - 33)) | (1 << (chatParser.RightArrow - 33)) | (1 << (chatParser.DBLEQ - 33)) | (1 << (chatParser.NUMERIC - 33)) | (1 << (chatParser.STRING - 33)) | (1 << (chatParser.NOTBITMARK - 33)) | (1 << (chatParser.SENTENCE - 33)) | (1 << (chatParser.BARSTRING - 33)))) !== 0) || _la === chatParser.URL) {
					{
					this.state = 1028;
					this.s_and_w();
					}
				}

				this.state = 1031;
				this.match(chatParser.CL);
				}
				break;
			case chatParser.OPRANGLEL:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1032;
				this.match(chatParser.OPRANGLEL);
				this.state = 1034;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << chatParser.S) | (1 << chatParser.OPS) | (1 << chatParser.COLON) | (1 << chatParser.AMP) | (1 << chatParser.DBLCOLON))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (chatParser.Greater - 33)) | (1 << (chatParser.Less - 33)) | (1 << (chatParser.RightAngle - 33)) | (1 << (chatParser.RightArrow - 33)) | (1 << (chatParser.DBLEQ - 33)) | (1 << (chatParser.NUMERIC - 33)) | (1 << (chatParser.STRING - 33)) | (1 << (chatParser.NOTBITMARK - 33)) | (1 << (chatParser.SENTENCE - 33)) | (1 << (chatParser.BARSTRING - 33)))) !== 0) || _la === chatParser.URL) {
					{
					this.state = 1033;
					this.s_and_w();
					}
				}

				this.state = 1036;
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
			this.state = 1046;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case chatParser.AtExamplecl:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1039;
				this.match(chatParser.AtExamplecl);
				}
				break;
			case chatParser.AtExampleWithStr:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1040;
				this.match(chatParser.AtExampleWithStr);
				}
				break;
			case chatParser.AtExamplecol:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1041;
				this.match(chatParser.AtExamplecol);
				this.state = 1043;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === chatParser.SENTENCE) {
					{
					this.state = 1042;
					this.match(chatParser.SENTENCE);
					}
				}

				this.state = 1045;
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
			this.state = 1087;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 143, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1048;
				this.match(chatParser.BracEnclose);
				this.state = 1050;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 136, this._ctx) ) {
				case 1:
					{
					this.state = 1049;
					this.s_and_w();
					}
					break;
				}
				this.state = 1073;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << chatParser.S) | (1 << chatParser.OPS) | (1 << chatParser.COLON) | (1 << chatParser.AMP) | (1 << chatParser.DBLCOLON))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (chatParser.Greater - 33)) | (1 << (chatParser.Less - 33)) | (1 << (chatParser.RightAngle - 33)) | (1 << (chatParser.RightArrow - 33)) | (1 << (chatParser.DBLEQ - 33)) | (1 << (chatParser.NUMERIC - 33)) | (1 << (chatParser.STRING - 33)) | (1 << (chatParser.NOTBITMARK - 33)) | (1 << (chatParser.SENTENCE - 33)) | (1 << (chatParser.BARSTRING - 33)))) !== 0) || _la === chatParser.URL) {
					{
					{
					this.state = 1052;
					this.s_and_w();
					this.state = 1062;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 138, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 1053;
							this.match(chatParser.NL);
							this.state = 1057;
							this._errHandler.sync(this);
							_alt = this.interpreter.adaptivePredict(this._input, 137, this._ctx);
							while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
								if (_alt === 1) {
									{
									{
									this.state = 1054;
									this.match(chatParser.S);
									}
									}
								}
								this.state = 1059;
								this._errHandler.sync(this);
								_alt = this.interpreter.adaptivePredict(this._input, 137, this._ctx);
							}
							}
							}
						}
						this.state = 1064;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 138, this._ctx);
					}
					this.state = 1068;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === chatParser.NL) {
						{
						{
						this.state = 1065;
						this.match(chatParser.NL);
						}
						}
						this.state = 1070;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
					}
					this.state = 1075;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1076;
				this.match(chatParser.CL);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1077;
				this.match(chatParser.BracEnclose);
				this.state = 1083;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << chatParser.S) | (1 << chatParser.OPS) | (1 << chatParser.COLON) | (1 << chatParser.AMP) | (1 << chatParser.DBLCOLON))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (chatParser.Greater - 33)) | (1 << (chatParser.Less - 33)) | (1 << (chatParser.RightAngle - 33)) | (1 << (chatParser.RightArrow - 33)) | (1 << (chatParser.DBLEQ - 33)) | (1 << (chatParser.NUMERIC - 33)) | (1 << (chatParser.STRING - 33)) | (1 << (chatParser.NL - 33)) | (1 << (chatParser.NOTBITMARK - 33)) | (1 << (chatParser.SENTENCE - 33)) | (1 << (chatParser.BARSTRING - 33)))) !== 0) || _la === chatParser.URL) {
					{
					this.state = 1081;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 141, this._ctx) ) {
					case 1:
						{
						this.state = 1078;
						this.s_and_w();
						}
						break;

					case 2:
						{
						this.state = 1079;
						this.match(chatParser.NL);
						}
						break;

					case 3:
						{
						this.state = 1080;
						this.match(chatParser.S);
						}
						break;
					}
					}
					this.state = 1085;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1086;
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
			this.state = 1111;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 148, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1089;
				this.match(chatParser.AtReference);
				this.state = 1094;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					this.state = 1094;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 144, this._ctx) ) {
					case 1:
						{
						this.state = 1090;
						this.s_and_w();
						}
						break;

					case 2:
						{
						this.state = 1091;
						this.match(chatParser.COLON);
						}
						break;

					case 3:
						{
						this.state = 1092;
						this.match(chatParser.URL);
						}
						break;

					case 4:
						{
						this.state = 1093;
						this.match(chatParser.NL);
						}
						break;
					}
					}
					this.state = 1096;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << chatParser.S) | (1 << chatParser.OPS) | (1 << chatParser.COLON) | (1 << chatParser.AMP) | (1 << chatParser.DBLCOLON))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (chatParser.Greater - 33)) | (1 << (chatParser.Less - 33)) | (1 << (chatParser.RightAngle - 33)) | (1 << (chatParser.RightArrow - 33)) | (1 << (chatParser.DBLEQ - 33)) | (1 << (chatParser.NUMERIC - 33)) | (1 << (chatParser.STRING - 33)) | (1 << (chatParser.NL - 33)) | (1 << (chatParser.NOTBITMARK - 33)) | (1 << (chatParser.SENTENCE - 33)) | (1 << (chatParser.BARSTRING - 33)))) !== 0) || _la === chatParser.URL);
				this.state = 1098;
				this.match(chatParser.CL);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1099;
				this.match(chatParser.AtReference);
				this.state = 1107;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << chatParser.S) | (1 << chatParser.OPS) | (1 << chatParser.COLON) | (1 << chatParser.AMP) | (1 << chatParser.DBLCOLON))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (chatParser.Greater - 33)) | (1 << (chatParser.Less - 33)) | (1 << (chatParser.RightAngle - 33)) | (1 << (chatParser.RightArrow - 33)) | (1 << (chatParser.DBLEQ - 33)) | (1 << (chatParser.NUMERIC - 33)) | (1 << (chatParser.STRING - 33)) | (1 << (chatParser.NL - 33)) | (1 << (chatParser.NOTBITMARK - 33)) | (1 << (chatParser.SENTENCE - 33)) | (1 << (chatParser.BARSTRING - 33)))) !== 0) || _la === chatParser.URL) {
					{
					this.state = 1105;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 146, this._ctx) ) {
					case 1:
						{
						this.state = 1100;
						this.s_and_w();
						}
						break;

					case 2:
						{
						this.state = 1101;
						this.match(chatParser.COLON);
						}
						break;

					case 3:
						{
						this.state = 1102;
						this.match(chatParser.URL);
						}
						break;

					case 4:
						{
						this.state = 1103;
						this.match(chatParser.NL);
						}
						break;

					case 5:
						{
						this.state = 1104;
						this.match(chatParser.S);
						}
						break;
					}
					}
					this.state = 1109;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1110;
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
			this.state = 1113;
			this.match(chatParser.AtProgress);
			this.state = 1114;
			this.s_and_w();
			this.state = 1115;
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
			this.state = 1117;
			this.match(chatParser.AtDate);
			this.state = 1121;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				this.state = 1121;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 149, this._ctx) ) {
				case 1:
					{
					this.state = 1118;
					this.s_and_w();
					}
					break;

				case 2:
					{
					this.state = 1119;
					this.match(chatParser.COLON);
					}
					break;

				case 3:
					{
					this.state = 1120;
					this.match(chatParser.NL);
					}
					break;
				}
				}
				this.state = 1123;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << chatParser.S) | (1 << chatParser.OPS) | (1 << chatParser.COLON) | (1 << chatParser.AMP) | (1 << chatParser.DBLCOLON))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (chatParser.Greater - 33)) | (1 << (chatParser.Less - 33)) | (1 << (chatParser.RightAngle - 33)) | (1 << (chatParser.RightArrow - 33)) | (1 << (chatParser.DBLEQ - 33)) | (1 << (chatParser.NUMERIC - 33)) | (1 << (chatParser.STRING - 33)) | (1 << (chatParser.NL - 33)) | (1 << (chatParser.NOTBITMARK - 33)) | (1 << (chatParser.SENTENCE - 33)) | (1 << (chatParser.BARSTRING - 33)))) !== 0) || _la === chatParser.URL);
			this.state = 1125;
			this.match(chatParser.CL);
			this.state = 1127;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === chatParser.AtDate) {
				{
				this.state = 1126;
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
			this.state = 1129;
			this.match(chatParser.AtDate);
			this.state = 1133;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				this.state = 1133;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 152, this._ctx) ) {
				case 1:
					{
					this.state = 1130;
					this.s_and_w();
					}
					break;

				case 2:
					{
					this.state = 1131;
					this.match(chatParser.COLON);
					}
					break;

				case 3:
					{
					this.state = 1132;
					this.match(chatParser.NL);
					}
					break;
				}
				}
				this.state = 1135;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << chatParser.S) | (1 << chatParser.OPS) | (1 << chatParser.COLON) | (1 << chatParser.AMP) | (1 << chatParser.DBLCOLON))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (chatParser.Greater - 33)) | (1 << (chatParser.Less - 33)) | (1 << (chatParser.RightAngle - 33)) | (1 << (chatParser.RightArrow - 33)) | (1 << (chatParser.DBLEQ - 33)) | (1 << (chatParser.NUMERIC - 33)) | (1 << (chatParser.STRING - 33)) | (1 << (chatParser.NL - 33)) | (1 << (chatParser.NOTBITMARK - 33)) | (1 << (chatParser.SENTENCE - 33)) | (1 << (chatParser.BARSTRING - 33)))) !== 0) || _la === chatParser.URL);
			this.state = 1137;
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
			this.state = 1185;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 162, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1139;
				this.match(chatParser.OPB);
				this.state = 1143;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === chatParser.NL) {
					{
					{
					this.state = 1140;
					this.match(chatParser.NL);
					}
					}
					this.state = 1145;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1147;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 155, this._ctx) ) {
				case 1:
					{
					this.state = 1146;
					this.s_and_w();
					}
					break;
				}
				this.state = 1170;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << chatParser.S) | (1 << chatParser.OPS) | (1 << chatParser.COLON) | (1 << chatParser.AMP) | (1 << chatParser.DBLCOLON))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (chatParser.Greater - 33)) | (1 << (chatParser.Less - 33)) | (1 << (chatParser.RightAngle - 33)) | (1 << (chatParser.RightArrow - 33)) | (1 << (chatParser.DBLEQ - 33)) | (1 << (chatParser.NUMERIC - 33)) | (1 << (chatParser.STRING - 33)) | (1 << (chatParser.NOTBITMARK - 33)) | (1 << (chatParser.SENTENCE - 33)) | (1 << (chatParser.BARSTRING - 33)))) !== 0) || _la === chatParser.URL) {
					{
					{
					this.state = 1149;
					this.s_and_w();
					this.state = 1159;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 157, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 1150;
							this.match(chatParser.NL);
							this.state = 1154;
							this._errHandler.sync(this);
							_alt = this.interpreter.adaptivePredict(this._input, 156, this._ctx);
							while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
								if (_alt === 1) {
									{
									{
									this.state = 1151;
									this.match(chatParser.S);
									}
									}
								}
								this.state = 1156;
								this._errHandler.sync(this);
								_alt = this.interpreter.adaptivePredict(this._input, 156, this._ctx);
							}
							}
							}
						}
						this.state = 1161;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 157, this._ctx);
					}
					this.state = 1165;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === chatParser.NL) {
						{
						{
						this.state = 1162;
						this.match(chatParser.NL);
						}
						}
						this.state = 1167;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
					}
					this.state = 1172;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1173;
				this.match(chatParser.CL);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1174;
				this.match(chatParser.OPB);
				this.state = 1178;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === chatParser.NL) {
					{
					{
					this.state = 1175;
					this.match(chatParser.NL);
					}
					}
					this.state = 1180;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1182;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << chatParser.S) | (1 << chatParser.OPS) | (1 << chatParser.COLON) | (1 << chatParser.AMP) | (1 << chatParser.DBLCOLON))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (chatParser.Greater - 33)) | (1 << (chatParser.Less - 33)) | (1 << (chatParser.RightAngle - 33)) | (1 << (chatParser.RightArrow - 33)) | (1 << (chatParser.DBLEQ - 33)) | (1 << (chatParser.NUMERIC - 33)) | (1 << (chatParser.STRING - 33)) | (1 << (chatParser.NOTBITMARK - 33)) | (1 << (chatParser.SENTENCE - 33)) | (1 << (chatParser.BARSTRING - 33)))) !== 0) || _la === chatParser.URL) {
					{
					this.state = 1181;
					this.s_and_w();
					}
				}

				this.state = 1184;
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
			this.state = 1187;
			this.match(chatParser.OPQ);
			this.state = 1189;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 1188;
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
				this.state = 1191;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (((((_la - 1)) & ~0x1F) === 0 && ((1 << (_la - 1)) & ((1 << (chatParser.OPDOT - 1)) | (1 << (chatParser.S - 1)) | (1 << (chatParser.BitChat - 1)) | (1 << (chatParser.BitConv - 1)) | (1 << (chatParser.BitConversationLeft1 - 1)) | (1 << (chatParser.BitConversationRight1 - 1)) | (1 << (chatParser.BitConversationRight1Thought - 1)) | (1 << (chatParser.BitConversationRight1Scream - 1)) | (1 << (chatParser.BitConversationLeft1Thought - 1)) | (1 << (chatParser.BitConversationLeft1Scream - 1)) | (1 << (chatParser.OPDOLL - 1)) | (1 << (chatParser.OPBUL - 1)) | (1 << (chatParser.OPESC - 1)) | (1 << (chatParser.OPRANGLES - 1)) | (1 << (chatParser.OPRANGLEL - 1)) | (1 << (chatParser.OPDANGLE - 1)) | (1 << (chatParser.OPU - 1)) | (1 << (chatParser.OPB - 1)) | (1 << (chatParser.OPQ - 1)) | (1 << (chatParser.OPA - 1)) | (1 << (chatParser.OPP - 1)) | (1 << (chatParser.OPM - 1)) | (1 << (chatParser.OPS - 1)) | (1 << (chatParser.OPR - 1)) | (1 << (chatParser.OPC - 1)) | (1 << (chatParser.OPHASH - 1)) | (1 << (chatParser.COLON - 1)) | (1 << (chatParser.AMP - 1)) | (1 << (chatParser.DBLCOLON - 1)) | (1 << (chatParser.PLUS - 1)) | (1 << (chatParser.DotAt - 1)))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (chatParser.Greater - 33)) | (1 << (chatParser.Less - 33)) | (1 << (chatParser.RightAngle - 33)) | (1 << (chatParser.RightArrow - 33)) | (1 << (chatParser.DBLEQ - 33)) | (1 << (chatParser.HSPL - 33)) | (1 << (chatParser.HSPL2 - 33)) | (1 << (chatParser.SSPL - 33)) | (1 << (chatParser.SSPL2 - 33)) | (1 << (chatParser.COMMENT - 33)) | (1 << (chatParser.DCANY - 33)) | (1 << (chatParser.Image_type - 33)) | (1 << (chatParser.Audio_type - 33)) | (1 << (chatParser.Video_type - 33)) | (1 << (chatParser.ArticleText - 33)) | (1 << (chatParser.NOTCL - 33)) | (1 << (chatParser.NUMERIC - 33)) | (1 << (chatParser.STRING - 33)) | (1 << (chatParser.NL - 33)) | (1 << (chatParser.NOTBITMARK - 33)) | (1 << (chatParser.SENTENCE - 33)) | (1 << (chatParser.BARSTRING - 33)) | (1 << (chatParser.OPAT - 33)) | (1 << (chatParser.AtProgress - 33)) | (1 << (chatParser.AtReference - 33)) | (1 << (chatParser.AtWidth - 33)) | (1 << (chatParser.AtHeight - 33)) | (1 << (chatParser.AtProgressPoints - 33)) | (1 << (chatParser.AtShortanswer - 33)) | (1 << (chatParser.AtLonganswer - 33)) | (1 << (chatParser.AtExampleWithStr - 33)) | (1 << (chatParser.AtExamplecol - 33)))) !== 0) || ((((_la - 65)) & ~0x1F) === 0 && ((1 << (_la - 65)) & ((1 << (chatParser.AtExamplecl - 65)) | (1 << (chatParser.AtSampleSolution - 65)) | (1 << (chatParser.AtPartialAnswerS - 65)) | (1 << (chatParser.AtPartialAnswer - 65)) | (1 << (chatParser.AtLabeltrue - 65)) | (1 << (chatParser.AtLabelfalse - 65)) | (1 << (chatParser.AtPoints - 65)) | (1 << (chatParser.AtSrc - 65)) | (1 << (chatParser.AtPartner - 65)) | (1 << (chatParser.OPATALT - 65)) | (1 << (chatParser.OPAMARK - 65)) | (1 << (chatParser.ShowInIndex - 65)) | (1 << (chatParser.OpAtCaption - 65)) | (1 << (chatParser.OpAtLicense - 65)) | (1 << (chatParser.OpAtCopyright - 65)) | (1 << (chatParser.OpAtSearch - 65)) | (1 << (chatParser.OpAtIsTracked - 65)) | (1 << (chatParser.OpAtIsInfoOnly - 65)) | (1 << (chatParser.AtDate - 65)) | (1 << (chatParser.Http - 65)) | (1 << (chatParser.Https - 65)) | (1 << (chatParser.AmpAudio - 65)) | (1 << (chatParser.AmpImage - 65)) | (1 << (chatParser.AmpImageZoom - 65)) | (1 << (chatParser.AmpImageWAudio - 65)) | (1 << (chatParser.AmpVideo - 65)) | (1 << (chatParser.AmpArticle - 65)) | (1 << (chatParser.AmpDocument - 65)) | (1 << (chatParser.AmpApp - 65)) | (1 << (chatParser.AmpWebsite - 65)) | (1 << (chatParser.AmpStillImageFilm - 65)) | (1 << (chatParser.AmpPdf - 65)))) !== 0) || ((((_la - 97)) & ~0x1F) === 0 && ((1 << (_la - 97)) & ((1 << (chatParser.OpAmpAudio - 97)) | (1 << (chatParser.OpAmpImage - 97)) | (1 << (chatParser.OpAmpImageZoom - 97)) | (1 << (chatParser.OpAmpImageWAudio - 97)) | (1 << (chatParser.OpAmpVideo - 97)) | (1 << (chatParser.OpAmpArticle - 97)) | (1 << (chatParser.OpAmpArticleAtt - 97)) | (1 << (chatParser.OpAmpDocument - 97)) | (1 << (chatParser.OpAmpApp - 97)) | (1 << (chatParser.OpAmpWebsite - 97)) | (1 << (chatParser.OpAmpStillImageFilm - 97)) | (1 << (chatParser.BracEnclose - 97)) | (1 << (chatParser.AmpAudioLink - 97)) | (1 << (chatParser.AmpImageLink - 97)) | (1 << (chatParser.AmpVideoLink - 97)) | (1 << (chatParser.AmpArticleLink - 97)) | (1 << (chatParser.AmpDocumentLink - 97)) | (1 << (chatParser.AmpDocumentDownload - 97)) | (1 << (chatParser.AmpAppLink - 97)) | (1 << (chatParser.AmpWebsiteLink - 97)) | (1 << (chatParser.AmpStillImageFilmLink - 97)) | (1 << (chatParser.OpAmpAudioLink - 97)) | (1 << (chatParser.OpAmpImageLink - 97)) | (1 << (chatParser.OpAmpVideoLink - 97)) | (1 << (chatParser.OpAmpArticleLink - 97)) | (1 << (chatParser.OpAmpDocumentLink - 97)) | (1 << (chatParser.OpAmpDocumentDownload - 97)) | (1 << (chatParser.OpAmpAppLink - 97)) | (1 << (chatParser.OpAmpWebsiteLink - 97)) | (1 << (chatParser.OpAmpStillImageFilmLink - 97)) | (1 << (chatParser.AmpImageEmbed - 97)) | (1 << (chatParser.AmpVideoEmbed - 97)))) !== 0) || ((((_la - 129)) & ~0x1F) === 0 && ((1 << (_la - 129)) & ((1 << (chatParser.AmpAudioEmbed - 129)) | (1 << (chatParser.AmpDocumentEmbed - 129)) | (1 << (chatParser.AmpStillImageFilmEmbed - 129)) | (1 << (chatParser.OpAmpImageEmbed - 129)) | (1 << (chatParser.OpAmpVideoEmbed - 129)) | (1 << (chatParser.OpAmpAudioEmbed - 129)) | (1 << (chatParser.OpAmpDocumentEmbed - 129)) | (1 << (chatParser.OpAmpStillImageFilmEmbed - 129)) | (1 << (chatParser.BitmarkMinus - 129)) | (1 << (chatParser.BitmarkPlus - 129)) | (1 << (chatParser.ColonText - 129)) | (1 << (chatParser.ColonJson - 129)) | (1 << (chatParser.Prosemirror - 129)) | (1 << (chatParser.Placeholder - 129)) | (1 << (chatParser.BASIC - 129)) | (1 << (chatParser.JPG - 129)) | (1 << (chatParser.PNG - 129)) | (1 << (chatParser.GIF - 129)) | (1 << (chatParser.SVG - 129)) | (1 << (chatParser.MP2 - 129)) | (1 << (chatParser.MP3 - 129)) | (1 << (chatParser.MP4 - 129)) | (1 << (chatParser.FLV - 129)) | (1 << (chatParser.WMV - 129)) | (1 << (chatParser.MPEG - 129)) | (1 << (chatParser.MPG - 129)) | (1 << (chatParser.TEL - 129)) | (1 << (chatParser.DotArticleAtt - 129)) | (1 << (chatParser.STAR - 129)) | (1 << (chatParser.URL - 129)) | (1 << (chatParser.LIST_LINE - 129)) | (1 << (chatParser.ENCLBARS - 129)))) !== 0));
			this.state = 1193;
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
			this.state = 1207;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 166, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1195;
				this.match(chatParser.OPHASH);
				this.state = 1198;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					this.state = 1198;
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
						this.state = 1196;
						this.s_and_w();
						}
						break;
					case chatParser.NL:
						{
						this.state = 1197;
						this.match(chatParser.NL);
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					}
					this.state = 1200;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << chatParser.S) | (1 << chatParser.OPS) | (1 << chatParser.COLON) | (1 << chatParser.AMP) | (1 << chatParser.DBLCOLON))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (chatParser.Greater - 33)) | (1 << (chatParser.Less - 33)) | (1 << (chatParser.RightAngle - 33)) | (1 << (chatParser.RightArrow - 33)) | (1 << (chatParser.DBLEQ - 33)) | (1 << (chatParser.NUMERIC - 33)) | (1 << (chatParser.STRING - 33)) | (1 << (chatParser.NL - 33)) | (1 << (chatParser.NOTBITMARK - 33)) | (1 << (chatParser.SENTENCE - 33)) | (1 << (chatParser.BARSTRING - 33)))) !== 0) || _la === chatParser.URL);
				this.state = 1202;
				this.match(chatParser.CL);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1203;
				this.match(chatParser.OPHASH);
				this.state = 1204;
				this.s_and_w();
				this.state = 1205;
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
			this.state = 1217;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case chatParser.AtLabeltrue:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1209;
				this.match(chatParser.AtLabeltrue);
				this.state = 1210;
				this.s_and_w();
				this.state = 1211;
				this.match(chatParser.CL);
				}
				break;
			case chatParser.AtLabelfalse:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1213;
				this.match(chatParser.AtLabelfalse);
				this.state = 1214;
				this.s_and_w();
				this.state = 1215;
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
			this.state = 1228;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 168, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1219;
				this.match(chatParser.AtProgressPoints);
				this.state = 1220;
				this.match(chatParser.COLON);
				this.state = 1221;
				this.match(chatParser.NUMERIC);
				this.state = 1222;
				this.match(chatParser.CL);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1223;
				this.match(chatParser.AtProgressPoints);
				this.state = 1224;
				this.match(chatParser.COLON);
				this.state = 1225;
				this.s_and_w();
				this.state = 1226;
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
			this.state = 1230;
			this.match(chatParser.OpAtIsTracked);
			this.state = 1231;
			this.s_and_w();
			this.state = 1232;
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
			this.state = 1234;
			this.match(chatParser.OpAtIsInfoOnly);
			this.state = 1235;
			this.s_and_w();
			this.state = 1236;
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
			this.state = 1238;
			this.atdef_();
			this.state = 1248;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 170, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1242;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === chatParser.NL) {
						{
						{
						this.state = 1239;
						this.match(chatParser.NL);
						}
						}
						this.state = 1244;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					this.state = 1245;
					this.atdef_();
					}
					}
				}
				this.state = 1250;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 170, this._ctx);
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
			this.state = 1273;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case chatParser.OPA:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1251;
				this.match(chatParser.OPA);
				this.state = 1252;
				this.s_and_w();
				this.state = 1253;
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
				this.state = 1254;
				this.s_and_w();
				this.state = 1260;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << chatParser.S) | (1 << chatParser.OPS) | (1 << chatParser.COLON) | (1 << chatParser.AMP) | (1 << chatParser.DBLCOLON))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (chatParser.Greater - 33)) | (1 << (chatParser.Less - 33)) | (1 << (chatParser.RightAngle - 33)) | (1 << (chatParser.RightArrow - 33)) | (1 << (chatParser.DBLEQ - 33)) | (1 << (chatParser.NUMERIC - 33)) | (1 << (chatParser.STRING - 33)) | (1 << (chatParser.NL - 33)) | (1 << (chatParser.NOTBITMARK - 33)) | (1 << (chatParser.SENTENCE - 33)) | (1 << (chatParser.BARSTRING - 33)))) !== 0) || _la === chatParser.URL) {
					{
					this.state = 1258;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 171, this._ctx) ) {
					case 1:
						{
						this.state = 1255;
						this.match(chatParser.NL);
						}
						break;

					case 2:
						{
						this.state = 1256;
						this.match(chatParser.COLON);
						}
						break;

					case 3:
						{
						this.state = 1257;
						this.s_and_w();
						}
						break;
					}
					}
					this.state = 1262;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1263;
				this.match(chatParser.CL);
				}
				break;
			case chatParser.OpAtCopyright:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1265;
				this.match(chatParser.OpAtCopyright);
				this.state = 1269;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 173, this._ctx);
				while (_alt !== 1 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1 + 1) {
						{
						{
						this.state = 1266;
						this.matchWildcard();
						}
						}
					}
					this.state = 1271;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 173, this._ctx);
				}
				this.state = 1272;
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
			this.state = 1294;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 179, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1275;
				this.match(chatParser.OPDOLL);
				this.state = 1279;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					this.state = 1279;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 175, this._ctx) ) {
					case 1:
						{
						this.state = 1276;
						this.s_and_w();
						}
						break;

					case 2:
						{
						this.state = 1277;
						this.match(chatParser.COLON);
						}
						break;

					case 3:
						{
						this.state = 1278;
						this.match(chatParser.NL);
						}
						break;
					}
					}
					this.state = 1281;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << chatParser.S) | (1 << chatParser.OPS) | (1 << chatParser.COLON) | (1 << chatParser.AMP) | (1 << chatParser.DBLCOLON))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (chatParser.Greater - 33)) | (1 << (chatParser.Less - 33)) | (1 << (chatParser.RightAngle - 33)) | (1 << (chatParser.RightArrow - 33)) | (1 << (chatParser.DBLEQ - 33)) | (1 << (chatParser.NUMERIC - 33)) | (1 << (chatParser.STRING - 33)) | (1 << (chatParser.NL - 33)) | (1 << (chatParser.NOTBITMARK - 33)) | (1 << (chatParser.SENTENCE - 33)) | (1 << (chatParser.BARSTRING - 33)))) !== 0) || _la === chatParser.URL);
				this.state = 1283;
				this.match(chatParser.CL);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1284;
				this.match(chatParser.OPDOLL);
				this.state = 1290;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << chatParser.S) | (1 << chatParser.OPS) | (1 << chatParser.COLON) | (1 << chatParser.AMP) | (1 << chatParser.DBLCOLON))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (chatParser.Greater - 33)) | (1 << (chatParser.Less - 33)) | (1 << (chatParser.RightAngle - 33)) | (1 << (chatParser.RightArrow - 33)) | (1 << (chatParser.DBLEQ - 33)) | (1 << (chatParser.NUMERIC - 33)) | (1 << (chatParser.STRING - 33)) | (1 << (chatParser.NL - 33)) | (1 << (chatParser.NOTBITMARK - 33)) | (1 << (chatParser.SENTENCE - 33)) | (1 << (chatParser.BARSTRING - 33)))) !== 0) || _la === chatParser.URL) {
					{
					this.state = 1288;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 177, this._ctx) ) {
					case 1:
						{
						this.state = 1285;
						this.s_and_w();
						}
						break;

					case 2:
						{
						this.state = 1286;
						this.match(chatParser.COLON);
						}
						break;

					case 3:
						{
						this.state = 1287;
						this.match(chatParser.NL);
						}
						break;
					}
					}
					this.state = 1292;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1293;
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
			this.state = 1296;
			this.match(chatParser.OPDANGLE);
			this.state = 1298;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << chatParser.S) | (1 << chatParser.OPS) | (1 << chatParser.COLON) | (1 << chatParser.AMP) | (1 << chatParser.DBLCOLON))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (chatParser.Greater - 33)) | (1 << (chatParser.Less - 33)) | (1 << (chatParser.RightAngle - 33)) | (1 << (chatParser.RightArrow - 33)) | (1 << (chatParser.DBLEQ - 33)) | (1 << (chatParser.NUMERIC - 33)) | (1 << (chatParser.STRING - 33)) | (1 << (chatParser.NOTBITMARK - 33)) | (1 << (chatParser.SENTENCE - 33)) | (1 << (chatParser.BARSTRING - 33)))) !== 0) || _la === chatParser.URL) {
				{
				this.state = 1297;
				this.s_and_w();
				}
			}

			this.state = 1300;
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
			this.state = 1306;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 1302;
				this.s_and_w();
				this.state = 1304;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === chatParser.NL) {
					{
					this.state = 1303;
					this.match(chatParser.NL);
					}
				}

				}
				}
				this.state = 1308;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << chatParser.S) | (1 << chatParser.OPS) | (1 << chatParser.COLON) | (1 << chatParser.AMP) | (1 << chatParser.DBLCOLON))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (chatParser.Greater - 33)) | (1 << (chatParser.Less - 33)) | (1 << (chatParser.RightAngle - 33)) | (1 << (chatParser.RightArrow - 33)) | (1 << (chatParser.DBLEQ - 33)) | (1 << (chatParser.NUMERIC - 33)) | (1 << (chatParser.STRING - 33)) | (1 << (chatParser.NOTBITMARK - 33)) | (1 << (chatParser.SENTENCE - 33)) | (1 << (chatParser.BARSTRING - 33)))) !== 0) || _la === chatParser.URL);
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
			this.state = 1356;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 190, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1310;
				this.match(chatParser.STRING);
				this.state = 1317;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 184, this._ctx) ) {
				case 1:
					{
					this.state = 1312;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					do {
						{
						{
						this.state = 1311;
						this.match(chatParser.S);
						}
						}
						this.state = 1314;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					} while (_la === chatParser.S);
					this.state = 1316;
					this.match(chatParser.NUMERIC);
					}
					break;
				}
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1319;
				this.words();
				this.state = 1326;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 186, this._ctx) ) {
				case 1:
					{
					this.state = 1321;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					do {
						{
						{
						this.state = 1320;
						this.match(chatParser.S);
						}
						}
						this.state = 1323;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					} while (_la === chatParser.S);
					this.state = 1325;
					this.match(chatParser.NUMERIC);
					}
					break;
				}
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1328;
				this.match(chatParser.OPS);
				this.state = 1329;
				this.s_and_w();
				this.state = 1330;
				this.match(chatParser.CL);
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1332;
				this.match(chatParser.NUMERIC);
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 1336;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === chatParser.S) {
					{
					{
					this.state = 1333;
					this.match(chatParser.S);
					}
					}
					this.state = 1338;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1339;
				this.match(chatParser.COLON);
				this.state = 1343;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 188, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 1340;
						this.match(chatParser.S);
						}
						}
					}
					this.state = 1345;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 188, this._ctx);
				}
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 1346;
				this.match(chatParser.AMP);
				this.state = 1350;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 189, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 1347;
						this.match(chatParser.S);
						}
						}
					}
					this.state = 1352;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 189, this._ctx);
				}
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 1353;
				this.match(chatParser.DBLCOLON);
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 1354;
				this.match(chatParser.DBLEQ);
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 1355;
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
			this.state = 1358;
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
			this.state = 1360;
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
			this.state = 1373;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					this.state = 1373;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case chatParser.SENTENCE:
						{
						this.state = 1362;
						this.match(chatParser.SENTENCE);
						}
						break;
					case chatParser.NOTBITMARK:
						{
						this.state = 1363;
						this.match(chatParser.NOTBITMARK);
						}
						break;
					case chatParser.BARSTRING:
						{
						this.state = 1364;
						this.match(chatParser.BARSTRING);
						}
						break;
					case chatParser.AMP:
						{
						this.state = 1365;
						this.match(chatParser.AMP);
						}
						break;
					case chatParser.Greater:
						{
						this.state = 1366;
						this.match(chatParser.Greater);
						this.state = 1367;
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
						this.state = 1368;
						this.match(chatParser.Less);
						this.state = 1369;
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
						this.state = 1370;
						this.match(chatParser.DBLEQ);
						}
						break;
					case chatParser.RightArrow:
						{
						this.state = 1371;
						this.match(chatParser.RightArrow);
						}
						break;
					case chatParser.RightAngle:
						{
						this.state = 1372;
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
				this.state = 1375;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 192, this._ctx);
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
			this.state = 1377;
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
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\xA2\u0566\x04" +
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
		"\x06\u0165\n\x06\f\x06\x0E\x06\u0168\v\x06\x03\x06\x06\x06\u016B\n\x06" +
		"\r\x06\x0E\x06\u016C\x03\x07\x03\x07\x03\x07\x03\x07\x07\x07\u0173\n\x07" +
		"\f\x07\x0E\x07\u0176\v\x07\x03\x07\x03\x07\x07\x07\u017A\n\x07\f\x07\x0E" +
		"\x07\u017D\v\x07\x07\x07\u017F\n\x07\f\x07\x0E\x07\u0182\v\x07\x03\x07" +
		"\x05\x07\u0185\n\x07\x03\x07\x07\x07\u0188\n\x07\f\x07\x0E\x07\u018B\v" +
		"\x07\x03\x07\x06\x07\u018E\n\x07\r\x07\x0E\x07\u018F\x03\b\x03\b\x03\b" +
		"\x03\b\x07\b\u0196\n\b\f\b\x0E\b\u0199\v\b\x03\b\x03\b\x07\b\u019D\n\b" +
		"\f\b\x0E\b\u01A0\v\b\x07\b\u01A2\n\b\f\b\x0E\b\u01A5\v\b\x03\b\x05\b\u01A8" +
		"\n\b\x03\b\x07\b\u01AB\n\b\f\b\x0E\b\u01AE\v\b\x03\b\x06\b\u01B1\n\b\r" +
		"\b\x0E\b\u01B2\x03\t\x03\t\x03\t\x03\t\x07\t\u01B9\n\t\f\t\x0E\t\u01BC" +
		"\v\t\x03\t\x03\t\x07\t\u01C0\n\t\f\t\x0E\t\u01C3\v\t\x07\t\u01C5\n\t\f" +
		"\t\x0E\t\u01C8\v\t\x03\t\x05\t\u01CB\n\t\x03\t\x07\t\u01CE\n\t\f\t\x0E" +
		"\t\u01D1\v\t\x03\t\x06\t\u01D4\n\t\r\t\x0E\t\u01D5\x03\n\x03\n\x03\n\x03" +
		"\n\x07\n\u01DC\n\n\f\n\x0E\n\u01DF\v\n\x03\n\x03\n\x07\n\u01E3\n\n\f\n" +
		"\x0E\n\u01E6\v\n\x07\n\u01E8\n\n\f\n\x0E\n\u01EB\v\n\x03\n\x05\n\u01EE" +
		"\n\n\x03\n\x07\n\u01F1\n\n\f\n\x0E\n\u01F4\v\n\x03\n\x06\n\u01F7\n\n\r" +
		"\n\x0E\n\u01F8\x03\v\x03\v\x03\v\x03\v\x07\v\u01FF\n\v\f\v\x0E\v\u0202" +
		"\v\v\x03\v\x03\v\x07\v\u0206\n\v\f\v\x0E\v\u0209\v\v\x07\v\u020B\n\v\f" +
		"\v\x0E\v\u020E\v\v\x03\v\x05\v\u0211\n\v\x03\v\x07\v\u0214\n\v\f\v\x0E" +
		"\v\u0217\v\v\x03\v\x06\v\u021A\n\v\r\v\x0E\v\u021B\x03\f\x03\f\x07\f\u0220" +
		"\n\f\f\f\x0E\f\u0223\v\f\x03\f\x05\f\u0226\n\f\x03\f\x05\f\u0229\n\f\x03" +
		"\r\x03\r\x07\r\u022D\n\r\f\r\x0E\r\u0230\v\r\x03\r\x05\r\u0233\n\r\x03" +
		"\r\x05\r\u0236\n\r\x03\x0E\x03\x0E\x07\x0E\u023A\n\x0E\f\x0E\x0E\x0E\u023D" +
		"\v\x0E\x03\x0E\x05\x0E\u0240\n\x0E\x03\x0E\x05\x0E\u0243\n\x0E\x03\x0F" +
		"\x03\x0F\x03\x0F\x03\x0F\x03\x10\x03\x10\x03\x10\x03\x10\x03\x11\x03\x11" +
		"\x03\x11\x03\x11\x03\x12\x03\x12\x03\x13\x03\x13\x03\x14\x03\x14\x03\x14" +
		"\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15" +
		"\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15" +
		"\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x05\x15\u026F\n\x15\x03\x16\x03" +
		"\x16\x03\x17\x03\x17\x03\x17\x03\x17\x03\x17\x03\x17\x07\x17\u0279\n\x17" +
		"\f\x17\x0E\x17\u027C\v\x17\x03\x18\x03\x18\x03\x18\x03\x18\x05\x18\u0282" +
		"\n\x18\x03\x18\x07\x18\u0285\n\x18\f\x18\x0E\x18\u0288\v\x18\x03\x18\x03" +
		"\x18\x03\x19\x03\x19\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1B\x07\x1B\u0293" +
		"\n\x1B\f\x1B\x0E\x1B\u0296\v\x1B\x03\x1B\x03\x1B\x03\x1B\x07\x1B\u029B" +
		"\n\x1B\f\x1B\x0E\x1B\u029E\v\x1B\x03\x1C\x03\x1C\x03\x1D\x03\x1D\x03\x1D" +
		"\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x05\x1D\u02AB\n\x1D\x03" +
		"\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x05\x1E\u02B2\n\x1E\x03\x1F\x03\x1F" +
		"\x03\x1F\x05\x1F\u02B7\n\x1F\x03\x1F\x03\x1F\x05\x1F\u02BB\n\x1F\x03\x1F" +
		"\x03\x1F\x05\x1F\u02BF\n\x1F\x03\x1F\x05\x1F\u02C2\n\x1F\x03 \x03 \x03" +
		" \x05 \u02C7\n \x03!\x03!\x03\"\x03\"\x03#\x03#\x03$\x03$\x03%\x03%\x03" +
		"&\x03&\x03\'\x03\'\x03(\x03(\x03)\x03)\x03*\x03*\x03*\x05*\u02DE\n*\x03" +
		"*\x03*\x03*\x05*\u02E3\n*\x03*\x03*\x03*\x05*\u02E8\n*\x05*\u02EA\n*\x03" +
		"+\x03+\x03,\x03,\x03,\x03,\x03,\x03,\x05,\u02F4\n,\x03-\x03-\x03-\x03" +
		"-\x03-\x03-\x03-\x03-\x05-\u02FE\n-\x03.\x03.\x03.\x03.\x03.\x03.\x03" +
		".\x03.\x05.\u0308\n.\x03/\x03/\x03/\x03/\x05/\u030E\n/\x03/\x03/\x03/" +
		"\x03/\x03/\x05/\u0315\n/\x030\x030\x070\u0319\n0\f0\x0E0\u031C\v0\x03" +
		"1\x031\x031\x071\u0321\n1\f1\x0E1\u0324\v1\x031\x031\x031\x032\x032\x07" +
		"2\u032B\n2\f2\x0E2\u032E\v2\x033\x033\x033\x033\x033\x033\x033\x033\x05" +
		"3\u0338\n3\x034\x034\x074\u033C\n4\f4\x0E4\u033F\v4\x034\x034\x054\u0343" +
		"\n4\x035\x035\x035\x075\u0348\n5\f5\x0E5\u034B\v5\x035\x035\x035\x036" +
		"\x036\x036\x056\u0353\n6\x036\x036\x056\u0357\n6\x036\x036\x056\u035B" +
		"\n6\x036\x056\u035E\n6\x037\x037\x037\x037\x037\x037\x037\x037\x037\x03" +
		"7\x037\x077\u036B\n7\f7\x0E7\u036E\v7\x037\x057\u0371\n7\x038\x038\x03" +
		"8\x038\x038\x038\x038\x038\x038\x038\x038\x078\u037E\n8\f8\x0E8\u0381" +
		"\v8\x038\x058\u0384\n8\x039\x039\x079\u0388\n9\f9\x0E9\u038B\v9\x03:\x03" +
		":\x03:\x03:\x03:\x03:\x03:\x03:\x05:\u0395\n:\x03;\x03;\x03;\x05;\u039A" +
		"\n;\x03;\x03;\x03;\x05;\u039F\n;\x05;\u03A1\n;\x03<\x03<\x03<\x05<\u03A6" +
		"\n<\x03<\x03<\x03<\x05<\u03AB\n<\x03<\x03<\x03<\x05<\u03B0\n<\x05<\u03B2" +
		"\n<\x03=\x03=\x03=\x05=\u03B7\n=\x03=\x03=\x07=\u03BB\n=\f=\x0E=\u03BE" +
		"\v=\x03=\x03=\x06=\u03C2\n=\r=\x0E=\u03C3\x03=\x03=\x03=\x03=\x03=\x03" +
		"=\x03=\x07=\u03CD\n=\f=\x0E=\u03D0\v=\x03=\x05=\u03D3\n=\x03>\x03>\x03" +
		">\x03>\x03?\x03?\x03@\x03@\x03@\x07@\u03DE\n@\f@\x0E@\u03E1\v@\x03@\x05" +
		"@\u03E4\n@\x03@\x03@\x03@\x03@\x07@\u03EA\n@\f@\x0E@\u03ED\v@\x03@\x03" +
		"@\x07@\u03F1\n@\f@\x0E@\u03F4\v@\x03@\x05@\u03F7\n@\x05@\u03F9\n@\x03" +
		"A\x03A\x03A\x03A\x07A\u03FF\nA\fA\x0EA\u0402\vA\x03A\x03A\x03B\x03B\x05" +
		"B\u0408\nB\x03B\x03B\x03B\x05B\u040D\nB\x03B\x05B\u0410\nB\x03C\x03C\x03" +
		"C\x03C\x05C\u0416\nC\x03C\x05C\u0419\nC\x03D\x03D\x05D\u041D\nD\x03D\x03" +
		"D\x03D\x07D\u0422\nD\fD\x0ED\u0425\vD\x07D\u0427\nD\fD\x0ED\u042A\vD\x03" +
		"D\x07D\u042D\nD\fD\x0ED\u0430\vD\x07D\u0432\nD\fD\x0ED\u0435\vD\x03D\x03" +
		"D\x03D\x03D\x03D\x07D\u043C\nD\fD\x0ED\u043F\vD\x03D\x05D\u0442\nD\x03" +
		"E\x03E\x03E\x03E\x03E\x06E\u0449\nE\rE\x0EE\u044A\x03E\x03E\x03E\x03E" +
		"\x03E\x03E\x03E\x07E\u0454\nE\fE\x0EE\u0457\vE\x03E\x05E\u045A\nE\x03" +
		"F\x03F\x03F\x03F\x03G\x03G\x03G\x03G\x06G\u0464\nG\rG\x0EG\u0465\x03G" +
		"\x03G\x05G\u046A\nG\x03H\x03H\x03H\x03H\x06H\u0470\nH\rH\x0EH\u0471\x03" +
		"H\x03H\x03I\x03I\x07I\u0478\nI\fI\x0EI\u047B\vI\x03I\x05I\u047E\nI\x03" +
		"I\x03I\x03I\x07I\u0483\nI\fI\x0EI\u0486\vI\x07I\u0488\nI\fI\x0EI\u048B" +
		"\vI\x03I\x07I\u048E\nI\fI\x0EI\u0491\vI\x07I\u0493\nI\fI\x0EI\u0496\v" +
		"I\x03I\x03I\x03I\x07I\u049B\nI\fI\x0EI\u049E\vI\x03I\x05I\u04A1\nI\x03" +
		"I\x05I\u04A4\nI\x03J\x03J\x06J\u04A8\nJ\rJ\x0EJ\u04A9\x03J\x03J\x03K\x03" +
		"K\x03K\x06K\u04B1\nK\rK\x0EK\u04B2\x03K\x03K\x03K\x03K\x03K\x05K\u04BA" +
		"\nK\x03L\x03L\x03L\x03L\x03L\x03L\x03L\x03L\x05L\u04C4\nL\x03M\x03M\x03" +
		"M\x03M\x03M\x03M\x03M\x03M\x03M\x05M\u04CF\nM\x03N\x03N\x03N\x03N\x03" +
		"O\x03O\x03O\x03O\x03P\x03P\x07P\u04DB\nP\fP\x0EP\u04DE\vP\x03P\x07P\u04E1" +
		"\nP\fP\x0EP\u04E4\vP\x03Q\x03Q\x03Q\x03Q\x03Q\x03Q\x03Q\x07Q\u04ED\nQ" +
		"\fQ\x0EQ\u04F0\vQ\x03Q\x03Q\x03Q\x03Q\x07Q\u04F6\nQ\fQ\x0EQ\u04F9\vQ\x03" +
		"Q\x05Q\u04FC\nQ\x03R\x03R\x03R\x03R\x06R\u0502\nR\rR\x0ER\u0503\x03R\x03" +
		"R\x03R\x03R\x03R\x07R\u050B\nR\fR\x0ER\u050E\vR\x03R\x05R\u0511\nR\x03" +
		"S\x03S\x05S\u0515\nS\x03S\x03S\x03T\x03T\x05T\u051B\nT\x06T\u051D\nT\r" +
		"T\x0ET\u051E\x03U\x03U\x06U\u0523\nU\rU\x0EU\u0524\x03U\x05U\u0528\nU" +
		"\x03U\x03U\x06U\u052C\nU\rU\x0EU\u052D\x03U\x05U\u0531\nU\x03U\x03U\x03" +
		"U\x03U\x03U\x03U\x07U\u0539\nU\fU\x0EU\u053C\vU\x03U\x03U\x07U\u0540\n" +
		"U\fU\x0EU\u0543\vU\x03U\x03U\x07U\u0547\nU\fU\x0EU\u054A\vU\x03U\x03U" +
		"\x03U\x05U\u054F\nU\x03V\x03V\x03W\x03W\x03X\x03X\x03X\x03X\x03X\x03X" +
		"\x03X\x03X\x03X\x03X\x03X\x06X\u0560\nX\rX\x0EX\u0561\x03Y\x03Y\x03Y\x06" +
		"\u036C\u037F\u03CE\u04F7\x02\x02Z\x02\x02\x04\x02\x06\x02\b\x02\n\x02" +
		"\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02" +
		"\x1E\x02 \x02\"\x02$\x02&\x02(\x02*\x02,\x02.\x020\x022\x024\x026\x02" +
		"8\x02:\x02<\x02>\x02@\x02B\x02D\x02F\x02H\x02J\x02L\x02N\x02P\x02R\x02" +
		"T\x02V\x02X\x02Z\x02\\\x02^\x02`\x02b\x02d\x02f\x02h\x02j\x02l\x02n\x02" +
		"p\x02r\x02t\x02v\x02x\x02z\x02|\x02~\x02\x80\x02\x82\x02\x84\x02\x86\x02" +
		"\x88\x02\x8A\x02\x8C\x02\x8E\x02\x90\x02\x92\x02\x94\x02\x96\x02\x98\x02" +
		"\x9A\x02\x9C\x02\x9E\x02\xA0\x02\xA2\x02\xA4\x02\xA6\x02\xA8\x02\xAA\x02" +
		"\xAC\x02\xAE\x02\xB0\x02\x02\x16\x03\x02()\b\x02]^`aow\x82\x85\x8B\x8C" +
		"\x8E\x90\x05\x02\\\\qq\x82\x82\x04\x02]]rr\x05\x02^^st\x84\x84\x04\x02" +
		"__uu\x04\x02``vv\x05\x02aaww\x85\x85\x04\x02hh{{\x05\x02jj|}\x89\x89\x04" +
		"\x02kk~~\x04\x02ll\x7F\x7F\x05\x02mm\x80\x80\x8A\x8A\x03\x02<=\x04\x02" +
		"LLOR\x03\x02\x1D\x1D\x04\x02\x1E\x1E  \x03\x02*+\x03\x02##\x03\x02$$\x02" +
		"\u061D\x02\xBF\x03\x02\x02\x02\x04\xD3\x03\x02\x02\x02\x06\xD5\x03\x02" +
		"\x02\x02\b\u0110\x03\x02\x02\x02\n\u014B\x03\x02\x02\x02\f\u016E\x03\x02" +
		"\x02\x02\x0E\u0191\x03\x02\x02\x02\x10\u01B4\x03\x02\x02\x02\x12\u01D7" +
		"\x03\x02\x02\x02\x14\u01FA\x03\x02\x02\x02\x16\u021D\x03\x02\x02\x02\x18" +
		"\u022A\x03\x02\x02\x02\x1A\u0237\x03\x02\x02\x02\x1C\u0244\x03\x02\x02" +
		"\x02\x1E\u0248\x03\x02\x02\x02 \u024C\x03\x02\x02\x02\"\u0250\x03\x02" +
		"\x02\x02$\u0252\x03\x02\x02\x02&\u0254\x03\x02\x02\x02(\u026E\x03\x02" +
		"\x02\x02*\u0270\x03\x02\x02\x02,\u0272\x03\x02\x02\x02.\u027D\x03\x02" +
		"\x02\x020\u028B\x03\x02\x02\x022\u028D\x03\x02\x02\x024\u0294\x03\x02" +
		"\x02\x026\u029F\x03\x02\x02\x028\u02AA\x03\x02\x02\x02:\u02B1\x03\x02" +
		"\x02\x02<\u02C1\x03\x02\x02\x02>\u02C3\x03\x02\x02\x02@\u02C8\x03\x02" +
		"\x02\x02B\u02CA\x03\x02\x02\x02D\u02CC\x03\x02\x02\x02F\u02CE\x03\x02" +
		"\x02\x02H\u02D0\x03\x02\x02\x02J\u02D2\x03\x02\x02\x02L\u02D4\x03\x02" +
		"\x02\x02N\u02D6\x03\x02\x02\x02P\u02D8\x03\x02\x02\x02R\u02E9\x03\x02" +
		"\x02\x02T\u02EB\x03\x02\x02\x02V\u02F3\x03\x02\x02\x02X\u02F5\x03\x02" +
		"\x02\x02Z\u02FF\x03\x02\x02\x02\\\u0309\x03\x02\x02\x02^\u0316\x03\x02" +
		"\x02\x02`\u031D\x03\x02\x02\x02b\u0328\x03\x02\x02\x02d\u032F\x03\x02" +
		"\x02\x02f\u0339\x03\x02\x02\x02h\u0344\x03\x02\x02\x02j\u035D\x03\x02" +
		"\x02\x02l\u0370\x03\x02\x02\x02n\u0383\x03\x02\x02\x02p\u0385\x03\x02" +
		"\x02\x02r\u038C\x03\x02\x02\x02t\u03A0\x03\x02\x02\x02v\u03B1\x03\x02" +
		"\x02\x02x\u03D2\x03\x02\x02\x02z\u03D4\x03\x02\x02\x02|\u03D8\x03\x02" +
		"\x02\x02~\u03F8\x03\x02\x02\x02\x80\u03FA\x03\x02\x02\x02\x82\u040F\x03" +
		"\x02\x02\x02\x84\u0418\x03\x02\x02\x02\x86\u0441\x03\x02\x02\x02\x88\u0459" +
		"\x03\x02\x02\x02\x8A\u045B\x03\x02\x02\x02\x8C\u045F\x03\x02\x02\x02\x8E" +
		"\u046B\x03\x02\x02\x02\x90\u04A3\x03\x02\x02\x02\x92\u04A5\x03\x02\x02" +
		"\x02\x94\u04B9\x03\x02\x02\x02\x96\u04C3\x03\x02\x02\x02\x98\u04CE\x03" +
		"\x02\x02\x02\x9A\u04D0\x03\x02\x02\x02\x9C\u04D4\x03\x02\x02\x02\x9E\u04D8" +
		"\x03\x02\x02\x02\xA0\u04FB\x03\x02\x02\x02\xA2\u0510\x03\x02\x02\x02\xA4" +
		"\u0512\x03\x02\x02\x02\xA6\u051C\x03\x02\x02\x02\xA8\u054E\x03\x02\x02" +
		"\x02\xAA\u0550\x03\x02\x02\x02\xAC\u0552\x03\x02\x02\x02\xAE\u055F\x03" +
		"\x02\x02\x02\xB0\u0563\x03\x02\x02\x02\xB2\xBC\x05\x04\x03\x02\xB3\xB5" +
		"\x07\x04\x02\x02\xB4\xB3\x03\x02\x02\x02\xB5\xB8\x03\x02\x02\x02\xB6\xB4" +
		"\x03\x02\x02\x02\xB6\xB7\x03\x02\x02\x02\xB7\xB9\x03\x02\x02\x02\xB8\xB6" +
		"\x03\x02\x02\x02\xB9\xBB\x075\x02\x02\xBA\xB6\x03\x02\x02\x02\xBB\xBE" +
		"\x03\x02\x02\x02\xBC\xBA\x03\x02\x02\x02\xBC\xBD\x03\x02\x02\x02\xBD\xC0" +
		"\x03\x02\x02\x02\xBE\xBC\x03\x02\x02\x02\xBF\xB2\x03\x02\x02\x02\xC0\xC1" +
		"\x03\x02\x02\x02\xC1\xBF\x03\x02\x02\x02\xC1\xC2\x03\x02\x02\x02\xC2\xC6" +
		"\x03\x02\x02\x02\xC3\xC5\x075\x02\x02\xC4\xC3\x03\x02\x02\x02\xC5\xC8" +
		"\x03\x02\x02\x02\xC6\xC4\x03\x02\x02\x02\xC6\xC7\x03\x02\x02\x02\xC7\xC9" +
		"\x03\x02\x02\x02\xC8\xC6\x03\x02\x02\x02\xC9\xCA\x07\x02\x02\x03\xCA\x03" +
		"\x03\x02\x02\x02\xCB\xD4\x05\x06\x04\x02\xCC\xD4\x05\b\x05\x02\xCD\xD4" +
		"\x05\n\x06\x02\xCE\xD4\x05\f\x07\x02\xCF\xD4\x05\x0E\b\x02\xD0\xD4\x05" +
		"\x10\t\x02\xD1\xD4\x05\x12\n\x02\xD2\xD4\x05\x14\v\x02\xD3\xCB\x03\x02" +
		"\x02\x02\xD3\xCC\x03\x02\x02\x02\xD3\xCD\x03\x02\x02\x02\xD3\xCE\x03\x02" +
		"\x02\x02\xD3\xCF\x03\x02\x02\x02\xD3\xD0\x03\x02\x02\x02\xD3\xD1\x03\x02" +
		"\x02\x02\xD3\xD2\x03\x02\x02\x02\xD4\x05\x03\x02\x02\x02\xD5\xD6\x07\x05" +
		"\x02\x02\xD6\xD7\x054\x1B\x02\xD7\xDB\x07\x1D\x02\x02\xD8\xDA\x075\x02" +
		"\x02\xD9\xD8\x03\x02\x02\x02\xDA\xDD\x03\x02\x02\x02\xDB\xD9\x03\x02\x02" +
		"\x02\xDB\xDC\x03\x02\x02\x02\xDC\xE7\x03\x02\x02\x02\xDD\xDB\x03\x02\x02" +
		"\x02\xDE\xE2\x05(\x15\x02\xDF\xE1\x075\x02\x02\xE0\xDF\x03\x02\x02\x02" +
		"\xE1\xE4\x03\x02\x02\x02\xE2\xE0\x03\x02\x02\x02\xE2\xE3\x03\x02\x02\x02" +
		"\xE3\xE6\x03\x02\x02\x02\xE4\xE2\x03\x02\x02\x02\xE5\xDE\x03\x02\x02\x02" +
		"\xE6\xE9\x03\x02\x02\x02\xE7\xE5\x03\x02\x02\x02\xE7\xE8\x03\x02\x02\x02" +
		"\xE8\xEA\x03\x02\x02\x02\xE9\xE7\x03\x02\x02\x02\xEA\xEB\t\x02\x02\x02" +
		"\xEB\xEC\x05\x16\f\x02\xEC\xED\t\x02\x02\x02\xED\xF6\x05\x18\r\x02\xEE" +
		"\xEF\t\x02\x02\x02\xEF\xF3\x05\"\x12\x02\xF0\xF2\x05&\x14\x02\xF1\xF0" +
		"\x03\x02\x02\x02\xF2\xF5\x03\x02\x02\x02\xF3\xF1\x03\x02\x02\x02\xF3\xF4" +
		"\x03\x02\x02\x02\xF4\xF7\x03\x02\x02\x02\xF5\xF3\x03\x02\x02\x02\xF6\xEE" +
		"\x03\x02\x02\x02\xF7\xF8\x03\x02\x02\x02\xF8\xF6\x03\x02\x02\x02\xF8\xF9" +
		"\x03\x02\x02\x02\xF9\xFA\x03\x02\x02\x02\xFA\xFE\t\x02\x02\x02\xFB\xFD" +
		"\x075\x02\x02\xFC\xFB\x03\x02\x02\x02\xFD\u0100\x03\x02\x02\x02\xFE\xFC" +
		"\x03\x02\x02\x02\xFE\xFF\x03\x02\x02\x02\xFF\u010E\x03\x02\x02\x02\u0100" +
		"\xFE\x03\x02\x02\x02\u0101\u010B\x05*\x16\x02\u0102\u0104\x075\x02\x02" +
		"\u0103\u0102\x03\x02\x02\x02\u0104\u0107\x03\x02\x02\x02\u0105\u0103\x03" +
		"\x02\x02\x02\u0105\u0106\x03\x02\x02\x02\u0106\u0108\x03\x02\x02\x02\u0107" +
		"\u0105\x03\x02\x02\x02\u0108\u010A\x05*\x16\x02\u0109\u0105\x03\x02\x02" +
		"\x02\u010A\u010D\x03\x02\x02\x02\u010B\u0109\x03\x02\x02\x02\u010B\u010C" +
		"\x03\x02\x02\x02\u010C\u010F\x03\x02\x02\x02\u010D\u010B\x03\x02\x02\x02" +
		"\u010E\u0101\x03\x02\x02\x02\u010E\u010F\x03\x02\x02\x02\u010F\x07\x03" +
		"\x02\x02\x02\u0110\u0111\x07\x06\x02\x02\u0111\u0112\x054\x1B\x02\u0112" +
		"\u0116\x07\x1D\x02\x02\u0113\u0115\x075\x02\x02\u0114\u0113\x03\x02\x02" +
		"\x02\u0115\u0118\x03\x02\x02\x02\u0116\u0114\x03\x02\x02\x02\u0116\u0117" +
		"\x03\x02\x02\x02\u0117\u0122\x03\x02\x02\x02\u0118\u0116\x03\x02\x02\x02" +
		"\u0119\u011D\x05(\x15\x02\u011A\u011C\x075\x02\x02\u011B\u011A\x03\x02" +
		"\x02\x02\u011C\u011F\x03\x02\x02\x02\u011D\u011B\x03\x02\x02\x02\u011D" +
		"\u011E\x03\x02\x02\x02\u011E\u0121\x03\x02\x02\x02\u011F\u011D\x03\x02" +
		"\x02\x02\u0120\u0119\x03\x02\x02\x02\u0121\u0124\x03\x02\x02\x02\u0122" +
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
		"\u013E\x03\x02\x02\x02\u0140\u0141\x03\x02\x02\x02\u0141\u0143\x03\x02" +
		"\x02\x02\u0142\u0140\x03\x02\x02\x02\u0143\u0145\x05*\x16\x02\u0144\u0140" +
		"\x03\x02\x02\x02\u0145\u0148\x03\x02\x02\x02\u0146\u0144\x03\x02\x02\x02" +
		"\u0146\u0147\x03\x02\x02\x02\u0147\u014A\x03\x02\x02\x02\u0148\u0146\x03" +
		"\x02\x02\x02\u0149\u013C\x03\x02\x02\x02\u0149\u014A\x03\x02\x02\x02\u014A" +
		"\t\x03\x02\x02\x02\u014B\u014C\x07\x07\x02\x02\u014C\u014D\x05:\x1E\x02" +
		"\u014D\u0151";
	private static readonly _serializedATNSegment1: string =
		"\x07\x1D\x02\x02\u014E\u0150\x075\x02\x02\u014F\u014E\x03\x02\x02\x02" +
		"\u0150\u0153\x03\x02\x02\x02\u0151\u014F\x03\x02\x02\x02\u0151\u0152\x03" +
		"\x02\x02\x02\u0152\u015D\x03\x02\x02\x02\u0153\u0151\x03\x02\x02\x02\u0154" +
		"\u0158\x05(\x15\x02\u0155\u0157\x075\x02\x02\u0156\u0155\x03\x02\x02\x02" +
		"\u0157\u015A\x03\x02\x02\x02\u0158\u0156\x03\x02\x02\x02\u0158\u0159\x03" +
		"\x02\x02\x02\u0159\u015C\x03\x02\x02\x02\u015A\u0158\x03\x02\x02\x02\u015B" +
		"\u0154\x03\x02\x02\x02\u015C\u015F\x03\x02\x02\x02\u015D\u015B\x03\x02" +
		"\x02\x02\u015D\u015E\x03\x02\x02\x02\u015E\u0161\x03\x02\x02\x02\u015F" +
		"\u015D\x03\x02\x02\x02\u0160\u0162\x05\x1A\x0E\x02\u0161\u0160\x03\x02" +
		"\x02\x02\u0161\u0162\x03\x02\x02\x02\u0162\u0166\x03\x02\x02\x02\u0163" +
		"\u0165\x075\x02\x02\u0164\u0163\x03\x02\x02\x02\u0165\u0168\x03\x02\x02" +
		"\x02\u0166\u0164\x03\x02\x02\x02\u0166\u0167\x03\x02\x02\x02\u0167\u016A" +
		"\x03\x02\x02\x02\u0168\u0166\x03\x02\x02\x02\u0169\u016B\x05\xA8U\x02" +
		"\u016A\u0169\x03\x02\x02\x02\u016B\u016C\x03\x02\x02\x02\u016C\u016A\x03" +
		"\x02\x02\x02\u016C\u016D\x03\x02\x02\x02\u016D\v\x03\x02\x02\x02\u016E" +
		"\u016F\x07\b\x02\x02\u016F\u0170\x05:\x1E\x02\u0170\u0174\x07\x1D\x02" +
		"\x02\u0171\u0173\x075\x02\x02\u0172\u0171\x03\x02\x02\x02\u0173\u0176" +
		"\x03\x02\x02\x02\u0174\u0172\x03\x02\x02\x02\u0174\u0175\x03\x02\x02\x02" +
		"\u0175\u0180\x03\x02\x02\x02\u0176\u0174\x03\x02\x02\x02\u0177\u017B\x05" +
		"(\x15\x02\u0178\u017A\x075\x02\x02\u0179\u0178\x03\x02\x02\x02\u017A\u017D" +
		"\x03\x02\x02\x02\u017B\u0179\x03\x02\x02\x02\u017B\u017C\x03\x02\x02\x02" +
		"\u017C\u017F\x03\x02\x02\x02\u017D\u017B\x03\x02\x02\x02\u017E\u0177\x03" +
		"\x02\x02\x02\u017F\u0182\x03\x02\x02\x02\u0180\u017E\x03\x02\x02\x02\u0180" +
		"\u0181\x03\x02\x02\x02\u0181\u0184\x03\x02\x02\x02\u0182\u0180\x03\x02" +
		"\x02\x02\u0183\u0185\x05\x1A\x0E\x02\u0184\u0183\x03\x02\x02\x02\u0184" +
		"\u0185\x03\x02\x02\x02\u0185\u0189\x03\x02\x02\x02\u0186\u0188\x075\x02" +
		"\x02\u0187\u0186\x03\x02\x02\x02\u0188\u018B\x03\x02\x02\x02\u0189\u0187" +
		"\x03\x02\x02\x02\u0189\u018A\x03\x02\x02\x02\u018A\u018D\x03\x02\x02\x02" +
		"\u018B\u0189\x03\x02\x02\x02\u018C\u018E\x05\xA8U\x02\u018D\u018C\x03" +
		"\x02\x02\x02\u018E\u018F\x03\x02\x02\x02\u018F\u018D\x03\x02\x02\x02\u018F" +
		"\u0190\x03\x02\x02\x02\u0190\r\x03\x02\x02\x02\u0191\u0192\x07\t\x02\x02" +
		"\u0192\u0193\x05:\x1E\x02\u0193\u0197\x07\x1D\x02\x02\u0194\u0196\x07" +
		"5\x02\x02\u0195\u0194\x03\x02\x02\x02\u0196\u0199\x03\x02\x02\x02\u0197" +
		"\u0195\x03\x02\x02\x02\u0197\u0198\x03\x02\x02\x02\u0198\u01A3\x03\x02" +
		"\x02\x02\u0199\u0197\x03\x02\x02\x02\u019A\u019E\x05(\x15\x02\u019B\u019D" +
		"\x075\x02\x02\u019C\u019B\x03\x02\x02\x02\u019D\u01A0\x03\x02\x02\x02" +
		"\u019E\u019C\x03\x02\x02\x02\u019E\u019F\x03\x02\x02\x02\u019F\u01A2\x03" +
		"\x02\x02\x02\u01A0\u019E\x03\x02\x02\x02\u01A1\u019A\x03\x02\x02\x02\u01A2" +
		"\u01A5\x03\x02\x02\x02\u01A3\u01A1\x03\x02\x02\x02\u01A3\u01A4\x03\x02" +
		"\x02\x02\u01A4\u01A7\x03\x02\x02\x02\u01A5\u01A3\x03\x02\x02\x02\u01A6" +
		"\u01A8\x05\x1A\x0E\x02\u01A7\u01A6\x03\x02\x02\x02\u01A7\u01A8\x03\x02" +
		"\x02\x02\u01A8\u01AC\x03\x02\x02\x02\u01A9\u01AB\x075\x02\x02\u01AA\u01A9" +
		"\x03\x02\x02\x02\u01AB\u01AE\x03\x02\x02\x02\u01AC\u01AA\x03\x02\x02\x02" +
		"\u01AC\u01AD\x03\x02\x02\x02\u01AD\u01B0\x03\x02\x02\x02\u01AE\u01AC\x03" +
		"\x02\x02\x02\u01AF\u01B1\x05\xA8U\x02\u01B0\u01AF\x03\x02\x02\x02\u01B1" +
		"\u01B2\x03\x02\x02\x02\u01B2\u01B0\x03\x02\x02\x02\u01B2\u01B3\x03\x02" +
		"\x02\x02\u01B3\x0F\x03\x02\x02\x02\u01B4\u01B5\x07\n\x02\x02\u01B5\u01B6" +
		"\x05:\x1E\x02\u01B6\u01BA\x07\x1D\x02\x02\u01B7\u01B9\x075\x02\x02\u01B8" +
		"\u01B7\x03\x02\x02\x02\u01B9\u01BC\x03\x02\x02\x02\u01BA\u01B8\x03\x02" +
		"\x02\x02\u01BA\u01BB\x03\x02\x02\x02\u01BB\u01C6\x03\x02\x02\x02\u01BC" +
		"\u01BA\x03\x02\x02\x02\u01BD\u01C1\x05(\x15\x02\u01BE\u01C0\x075\x02\x02" +
		"\u01BF\u01BE\x03\x02\x02\x02\u01C0\u01C3\x03\x02\x02\x02\u01C1\u01BF\x03" +
		"\x02\x02\x02\u01C1\u01C2\x03\x02\x02\x02\u01C2\u01C5\x03\x02\x02\x02\u01C3" +
		"\u01C1\x03\x02\x02\x02\u01C4\u01BD\x03\x02\x02\x02\u01C5\u01C8\x03\x02" +
		"\x02\x02\u01C6\u01C4\x03\x02\x02\x02\u01C6\u01C7\x03\x02\x02\x02\u01C7" +
		"\u01CA\x03\x02\x02\x02\u01C8\u01C6\x03\x02\x02\x02\u01C9\u01CB\x05\x1A" +
		"\x0E\x02\u01CA\u01C9\x03\x02\x02\x02\u01CA\u01CB\x03\x02\x02\x02\u01CB" +
		"\u01CF\x03\x02\x02\x02\u01CC\u01CE\x075\x02\x02\u01CD\u01CC\x03\x02\x02" +
		"\x02\u01CE\u01D1\x03\x02\x02\x02\u01CF\u01CD\x03\x02\x02\x02\u01CF\u01D0" +
		"\x03\x02\x02\x02\u01D0\u01D3\x03\x02\x02\x02\u01D1\u01CF\x03\x02\x02\x02" +
		"\u01D2\u01D4\x05\xA8U\x02\u01D3\u01D2\x03\x02\x02\x02\u01D4\u01D5\x03" +
		"\x02\x02\x02\u01D5\u01D3\x03\x02\x02\x02\u01D5\u01D6\x03\x02\x02\x02\u01D6" +
		"\x11\x03\x02\x02\x02\u01D7\u01D8\x07\v\x02\x02\u01D8\u01D9\x05:\x1E\x02" +
		"\u01D9\u01DD\x07\x1D\x02\x02\u01DA\u01DC\x075\x02\x02\u01DB\u01DA\x03" +
		"\x02\x02\x02\u01DC\u01DF\x03\x02\x02\x02\u01DD\u01DB\x03\x02\x02\x02\u01DD" +
		"\u01DE\x03\x02\x02\x02\u01DE\u01E9\x03\x02\x02\x02\u01DF\u01DD\x03\x02" +
		"\x02\x02\u01E0\u01E4\x05(\x15\x02\u01E1\u01E3\x075\x02\x02\u01E2\u01E1" +
		"\x03\x02\x02\x02\u01E3\u01E6\x03\x02\x02\x02\u01E4\u01E2\x03\x02\x02\x02" +
		"\u01E4\u01E5\x03\x02\x02\x02\u01E5\u01E8\x03\x02\x02\x02\u01E6\u01E4\x03" +
		"\x02\x02\x02\u01E7\u01E0\x03\x02\x02\x02\u01E8\u01EB\x03\x02\x02\x02\u01E9" +
		"\u01E7\x03\x02\x02\x02\u01E9\u01EA\x03\x02\x02\x02\u01EA\u01ED\x03\x02" +
		"\x02\x02\u01EB\u01E9\x03\x02\x02\x02\u01EC\u01EE\x05\x1A\x0E\x02\u01ED" +
		"\u01EC\x03\x02\x02\x02\u01ED\u01EE\x03\x02\x02\x02\u01EE\u01F2\x03\x02" +
		"\x02\x02\u01EF\u01F1\x075\x02\x02\u01F0\u01EF\x03\x02\x02\x02\u01F1\u01F4" +
		"\x03\x02\x02\x02\u01F2\u01F0\x03\x02\x02\x02\u01F2\u01F3\x03\x02\x02\x02" +
		"\u01F3\u01F6\x03\x02\x02\x02\u01F4\u01F2\x03\x02\x02\x02\u01F5\u01F7\x05" +
		"\xA8U\x02\u01F6\u01F5\x03\x02\x02\x02\u01F7\u01F8\x03\x02\x02\x02\u01F8" +
		"\u01F6\x03\x02\x02\x02\u01F8\u01F9\x03\x02\x02\x02\u01F9\x13\x03\x02\x02" +
		"\x02\u01FA\u01FB\x07\f\x02\x02\u01FB\u01FC\x05:\x1E\x02\u01FC\u0200\x07" +
		"\x1D\x02\x02\u01FD\u01FF\x075\x02\x02\u01FE\u01FD\x03\x02\x02\x02\u01FF" +
		"\u0202\x03\x02\x02\x02\u0200\u01FE\x03\x02\x02\x02\u0200\u0201\x03\x02" +
		"\x02\x02\u0201\u020C\x03\x02\x02\x02\u0202\u0200\x03\x02\x02\x02\u0203" +
		"\u0207\x05(\x15\x02\u0204\u0206\x075\x02\x02\u0205\u0204\x03\x02\x02\x02" +
		"\u0206\u0209\x03\x02\x02\x02\u0207\u0205\x03\x02\x02\x02\u0207\u0208\x03" +
		"\x02\x02\x02\u0208\u020B\x03\x02\x02\x02\u0209\u0207\x03\x02\x02\x02\u020A" +
		"\u0203\x03\x02\x02\x02\u020B\u020E\x03\x02\x02\x02\u020C\u020A\x03\x02" +
		"\x02\x02\u020C\u020D\x03\x02\x02\x02\u020D\u0210\x03\x02\x02\x02\u020E" +
		"\u020C\x03\x02\x02\x02\u020F\u0211\x05\x1A\x0E\x02\u0210\u020F\x03\x02" +
		"\x02\x02\u0210\u0211\x03\x02\x02\x02\u0211\u0215\x03\x02\x02\x02\u0212" +
		"\u0214\x075\x02\x02\u0213\u0212\x03\x02\x02\x02\u0214\u0217\x03\x02\x02" +
		"\x02\u0215\u0213\x03\x02\x02\x02\u0215\u0216\x03\x02\x02\x02\u0216\u0219" +
		"\x03\x02\x02\x02\u0217\u0215\x03\x02\x02\x02\u0218\u021A\x05\xA8U\x02" +
		"\u0219\u0218\x03\x02\x02\x02\u021A\u021B\x03\x02\x02\x02\u021B\u0219\x03" +
		"\x02\x02\x02\u021B\u021C\x03\x02\x02\x02\u021C\x15\x03\x02\x02\x02\u021D" +
		"\u0225\x05\x1E\x10\x02\u021E\u0220\x075\x02\x02\u021F\u021E\x03\x02\x02" +
		"\x02\u0220\u0223\x03\x02\x02\x02\u0221\u021F\x03\x02\x02\x02\u0221\u0222" +
		"\x03\x02\x02\x02\u0222\u0224\x03\x02\x02\x02\u0223\u0221\x03\x02\x02\x02" +
		"\u0224\u0226\x05f4\x02\u0225\u0221\x03\x02\x02\x02\u0225\u0226\x03\x02" +
		"\x02\x02\u0226\u0228\x03\x02\x02\x02\u0227\u0229\x05 \x11\x02\u0228\u0227" +
		"\x03\x02\x02\x02\u0228\u0229\x03\x02\x02\x02\u0229\x17\x03\x02\x02\x02" +
		"\u022A\u0232\x05\x1E\x10\x02\u022B\u022D\x075\x02\x02\u022C\u022B\x03" +
		"\x02\x02\x02\u022D\u0230\x03\x02\x02\x02\u022E\u022C\x03\x02\x02\x02\u022E" +
		"\u022F\x03\x02\x02\x02\u022F\u0231\x03\x02\x02\x02\u0230\u022E\x03\x02" +
		"\x02\x02\u0231\u0233\x05f4\x02\u0232\u022E\x03\x02\x02\x02\u0232\u0233" +
		"\x03\x02\x02\x02\u0233\u0235\x03\x02\x02\x02\u0234\u0236\x05 \x11\x02" +
		"\u0235\u0234\x03\x02\x02\x02\u0235\u0236\x03\x02\x02\x02\u0236\x19\x03" +
		"\x02\x02\x02\u0237\u023F\x05\x1C\x0F\x02\u0238\u023A\x075\x02\x02\u0239" +
		"\u0238\x03\x02\x02\x02\u023A\u023D\x03\x02\x02\x02\u023B\u0239\x03\x02" +
		"\x02\x02\u023B\u023C\x03\x02\x02\x02\u023C\u023E\x03\x02\x02\x02\u023D" +
		"\u023B\x03\x02\x02\x02\u023E\u0240\x05f4\x02\u023F\u023B\x03\x02\x02\x02" +
		"\u023F\u0240\x03\x02\x02\x02\u0240\u0242\x03\x02\x02\x02\u0241\u0243\x05" +
		" \x11\x02\u0242\u0241\x03\x02\x02\x02\u0242\u0243\x03\x02\x02\x02\u0243" +
		"\x1B\x03\x02\x02\x02\u0244\u0245\x07K\x02\x02\u0245\u0246\x074\x02\x02" +
		"\u0246\u0247\x07\x1D\x02\x02\u0247\x1D\x03\x02\x02\x02\u0248\u0249\x07" +
		"\x1C\x02\x02\u0249\u024A\x05\xA8U\x02\u024A\u024B\x07\x1D\x02\x02\u024B" +
		"\x1F\x03\x02\x02\x02\u024C\u024D\x07L\x02\x02\u024D\u024E\x074\x02\x02" +
		"\u024E\u024F\x07\x1D\x02\x02\u024F!\x03\x02\x02\x02\u0250\u0251\x05\xA8" +
		"U\x02\u0251#\x03\x02\x02\x02\u0252\u0253\x05\xA8U\x02\u0253%\x03\x02\x02" +
		"\x02\u0254\u0255\x05\xACW\x02\u0255\u0256\x05$\x13\x02\u0256\'\x03\x02" +
		"\x02\x02\u0257\u026F\x07\xA1\x02\x02\u0258\u026F\x076\x02\x02\u0259\u026F" +
		"\x05,\x17\x02\u025A\u026F\x05\x9EP\x02\u025B\u026F\x05\x88E\x02\u025C" +
		"\u026F\x05~@\x02\u025D\u026F\x05\x94K\x02\u025E\u026F\x05\x90I\x02\u025F" +
		"\u026F\x05\x92J\x02\u0260\u026F\x05\xA8U\x02\u0261\u026F\x05\x84C\x02" +
		"\u0262\u026F\x05\x96L\x02\u0263\u026F\x05f4\x02\u0264\u026F\x05p9\x02" +
		"\u0265\u026F\x05b2\x02\u0266\u026F\x05V,\x02\u0267\u026F\x05X-\x02\u0268" +
		"\u026F\x05\\/\x02\u0269\u026F\x05Z.\x02\u026A\u026F\x05^0\x02\u026B\u026F" +
		"\x05\x82B\x02\u026C\u026F\x05\xA4S\x02\u026D\u026F\x05\xB0Y\x02\u026E" +
		"\u0257\x03\x02\x02\x02\u026E\u0258\x03\x02\x02\x02\u026E\u0259\x03\x02" +
		"\x02\x02\u026E\u025A\x03\x02\x02\x02\u026E\u025B\x03\x02\x02\x02\u026E" +
		"\u025C\x03\x02\x02\x02\u026E\u025D\x03\x02\x02\x02\u026E\u025E\x03\x02" +
		"\x02\x02\u026E\u025F\x03\x02\x02\x02\u026E\u0260\x03\x02\x02\x02\u026E" +
		"\u0261\x03\x02\x02\x02\u026E\u0262\x03\x02\x02\x02\u026E\u0263\x03\x02" +
		"\x02\x02\u026E\u0264\x03\x02\x02\x02\u026E\u0265\x03\x02\x02\x02\u026E" +
		"\u0266\x03\x02\x02\x02\u026E\u0267\x03\x02\x02\x02\u026E\u0268\x03\x02" +
		"\x02\x02\u026E\u0269\x03\x02\x02\x02\u026E\u026A\x03\x02\x02\x02\u026E" +
		"\u026B\x03\x02\x02\x02\u026E\u026C\x03\x02\x02\x02\u026E\u026D\x03\x02" +
		"\x02\x02\u026F)\x03\x02\x02\x02\u0270\u0271\x05(\x15\x02\u0271+\x03\x02" +
		"\x02\x02\u0272\u027A\x05.\x18\x02\u0273\u0279\x05.\x18\x02\u0274\u0279" +
		"\x05\x90I\x02\u0275\u0279\x05\x92J\x02\u0276\u0279\x05~@\x02\u0277\u0279" +
		"\x05\x84C\x02\u0278\u0273\x03\x02\x02\x02\u0278\u0274\x03\x02\x02\x02" +
		"\u0278\u0275\x03\x02\x02\x02\u0278\u0276\x03\x02\x02\x02\u0278\u0277\x03" +
		"\x02\x02\x02\u0279\u027C\x03\x02\x02\x02\u027A\u0278\x03\x02\x02\x02\u027A" +
		"\u027B\x03\x02\x02\x02\u027B-\x03\x02\x02\x02\u027C\u027A\x03\x02\x02" +
		"\x02\u027D\u0281\x07\x13\x02\x02\u027E\u0282\x073\x02\x02\u027F\u0282" +
		"\x074\x02\x02\u0280\u0282\x03\x02\x02\x02\u0281\u027E\x03\x02\x02\x02" +
		"\u0281\u027F\x03\x02\x02\x02\u0281\u0280\x03\x02\x02\x02\u0282\u0286\x03" +
		"\x02\x02\x02\u0283\u0285\x05\xA8U\x02\u0284\u0283\x03\x02\x02\x02\u0285" +
		"\u0288\x03\x02\x02\x02\u0286\u0284\x03\x02\x02\x02\u0286\u0287\x03\x02" +
		"\x02\x02\u0287\u0289\x03\x02\x02\x02\u0288\u0286\x03\x02\x02\x02\u0289" +
		"\u028A\x05\xAAV\x02\u028A/\x03\x02\x02\x02\u028B\u028C\x07 \x02\x02\u028C" +
		"1\x03\x02\x02\x02\u028D\u028E\x07I\x02\x02\u028E\u028F\x073\x02\x02\u028F" +
		"\u0290\x07\x1D\x02\x02\u02903\x03\x02\x02\x02\u0291\u0293\x056\x1C\x02" +
		"\u0292\u0291\x03\x02\x02\x02\u0293\u0296\x03\x02\x02\x02\u0294\u0292\x03" +
		"\x02\x02\x02\u0294\u0295\x03\x02\x02\x02\u0295\u029C\x03\x02\x02\x02\u0296" +
		"\u0294\x03\x02\x02\x02\u0297\u029B\x07\x8D\x02\x02\u0298\u029B\x07\x8E" +
		"\x02\x02\u0299\u029B\x058\x1D\x02\u029A\u0297\x03\x02\x02\x02\u029A\u0298" +
		"\x03\x02\x02\x02\u029A\u0299\x03\x02\x02\x02\u029B\u029E\x03\x02\x02\x02" +
		"\u029C\u029A\x03\x02\x02\x02\u029C\u029D\x03\x02\x02\x02\u029D5\x03\x02" +
		"\x02\x02\u029E\u029C\x03\x02\x02\x02\u029F\u02A0\t\x03\x02\x02\u02A07" +
		"\x03\x02\x02\x02\u02A1\u02AB\x05<\x1F\x02\u02A2\u02AB\x05t;\x02\u02A3" +
		"\u02AB\x05> \x02\u02A4\u02AB\x05@!\x02\u02A5\u02AB\x05B\"\x02\u02A6\u02AB" +
		"\x05D#\x02\u02A7\u02AB\x05F$\x02\u02A8\u02AB\x05H%\x02\u02A9\u02AB\x07" +
		"b\x02\x02\u02AA\u02A1\x03\x02\x02\x02\u02AA\u02A2\x03\x02\x02\x02\u02AA" +
		"\u02A3\x03\x02\x02\x02\u02AA\u02A4\x03\x02\x02\x02\u02AA\u02A5\x03\x02" +
		"\x02\x02\u02AA\u02A6\x03\x02\x02\x02\u02AA\u02A7\x03\x02\x02\x02\u02AA" +
		"\u02A8\x03\x02\x02\x02\u02AA\u02A9\x03\x02\x02\x02\u02AB9\x03\x02\x02" +
		"\x02\u02AC\u02B2\x07\x8B\x02\x02\u02AD\u02B2\x07\x8C\x02\x02\u02AE\u02B2" +
		"\x07\x8D\x02\x02\u02AF\u02B2\x07\x8E\x02\x02\u02B0\u02B2\x03\x02\x02\x02" +
		"\u02B1\u02AC\x03\x02\x02\x02\u02B1\u02AD\x03\x02\x02\x02\u02B1\u02AE\x03" +
		"\x02\x02\x02\u02B1\u02AF\x03\x02\x02\x02\u02B1\u02B0\x03\x02\x02\x02\u02B2" +
		";\x03\x02\x02\x02\u02B3\u02B6\x07Y\x02\x02\u02B4\u02B7\x07.\x02\x02\u02B5" +
		"\u02B7\x07\x9E\x02\x02\u02B6\u02B4\x03\x02\x02\x02\u02B6\u02B5\x03\x02" +
		"\x02\x02\u02B6\u02B7\x03\x02\x02\x02\u02B7\u02C2\x03\x02\x02\x02\u02B8" +
		"\u02BA\x07p\x02\x02\u02B9\u02BB\x07.\x02\x02\u02BA\u02B9\x03\x02\x02\x02" +
		"\u02BA\u02BB\x03\x02\x02\x02\u02BB\u02C2\x03\x02\x02\x02\u02BC\u02BE\x07" +
		"Z\x02\x02\u02BD\u02BF\x07.\x02\x02\u02BE\u02BD\x03\x02\x02\x02\u02BE\u02BF" +
		"\x03\x02\x02\x02\u02BF\u02C2\x03\x02\x02\x02\u02C0\u02C2\x07[\x02\x02" +
		"\u02C1\u02B3\x03\x02\x02\x02\u02C1\u02B8\x03\x02\x02\x02\u02C1\u02BC\x03" +
		"\x02\x02\x02\u02C1\u02C0\x03\x02\x02\x02\u02C2=\x03\x02\x02\x02\u02C3" +
		"\u02C6\t\x04\x02\x02\u02C4\u02C5\x07\x1E\x02\x02\u02C5\u02C7\x070\x02" +
		"\x02\u02C6\u02C4\x03\x02\x02\x02\u02C6\u02C7\x03\x02\x02\x02\u02C7?\x03" +
		"\x02\x02\x02\u02C8\u02C9\t\x05\x02\x02\u02C9A\x03\x02\x02\x02\u02CA\u02CB" +
		"\t\x06\x02\x02\u02CBC\x03\x02\x02\x02\u02CC\u02CD\t\x07\x02\x02\u02CD" +
		"E\x03\x02\x02\x02\u02CE\u02CF\t\b\x02\x02\u02CFG\x03\x02\x02\x02\u02D0" +
		"\u02D1\t\t\x02\x02\u02D1I\x03\x02\x02\x02\u02D2\u02D3\t\n\x02\x02\u02D3" +
		"K\x03\x02\x02\x02\u02D4\u02D5\t\v\x02\x02\u02D5M\x03\x02\x02\x02\u02D6" +
		"\u02D7\t\f\x02\x02\u02D7O\x03\x02\x02\x02\u02D8\u02D9\t\r\x02\x02\u02D9" +
		"Q\x03\x02\x02\x02\u02DA\u02DD\x07g\x02\x02\u02DB\u02DC\x07\x1E\x02\x02" +
		"\u02DC\u02DE\x070\x02\x02\u02DD\u02DB\x03\x02\x02\x02\u02DD\u02DE\x03" +
		"\x02\x02\x02\u02DE\u02EA\x03\x02\x02\x02\u02DF\u02E2\x07z\x02\x02\u02E0" +
		"\u02E1\x07\x1E\x02\x02\u02E1\u02E3\x070\x02\x02\u02E2\u02E0\x03\x02\x02" +
		"\x02\u02E2\u02E3\x03\x02\x02\x02\u02E3\u02EA\x03\x02\x02\x02\u02E4\u02E7" +
		"\x07\x87\x02\x02\u02E5\u02E6\x07\x1E\x02\x02\u02E6\u02E8\x070\x02\x02" +
		"\u02E7\u02E5\x03\x02\x02\x02\u02E7\u02E8\x03\x02\x02\x02\u02E8\u02EA\x03" +
		"\x02\x02\x02\u02E9\u02DA\x03\x02\x02\x02\u02E9\u02DF\x03\x02\x02\x02\u02E9" +
		"\u02E4\x03\x02\x02\x02\u02EAS\x03\x02\x02\x02\u02EB\u02EC\t\x0E\x02\x02" +
		"\u02ECU\x03\x02\x02\x02\u02ED\u02EE\x05J&\x02\u02EE\u02EF\x07\x1E\x02" +
		"\x02\u02EF\u02F0\x05|?\x02\u02F0\u02F1\x07\x1D\x02\x02\u02F1\u02F4\x03" +
		"\x02\x02\x02\u02F2\u02F4\x071\x02\x02\u02F3\u02ED\x03\x02\x02\x02\u02F3" +
		"\u02F2\x03\x02\x02\x02\u02F4W\x03\x02\x02\x02\u02F5\u02F6\x05L\'\x02\u02F6" +
		"\u02F7\x07\x1E\x02\x02\u02F7\u02F8\x05|?\x02\u02F8\u02FD\x07\x1D\x02\x02" +
		"\u02F9\u02FA\x07L\x02\x02\u02FA\u02FB\x05\xAEX\x02\u02FB\u02FC\x07\x1D" +
		"\x02\x02\u02FC\u02FE\x03\x02\x02\x02\u02FD\u02F9\x03\x02\x02\x02\u02FD" +
		"\u02FE\x03\x02\x02\x02\u02FEY\x03\x02\x02\x02\u02FF\u0300\x05P)\x02\u0300" +
		"\u0301\x07\x1E\x02\x02\u0301\u0302\x05|?\x02\u0302\u0307\x07\x1D\x02\x02" +
		"\u0303\u0304\x07L\x02\x02\u0304\u0305\x05\xAEX\x02\u0305\u0306\x07\x1D" +
		"\x02\x02\u0306\u0308\x03\x02\x02\x02\u0307\u0303\x03\x02\x02\x02\u0307" +
		"\u0308\x03\x02\x02\x02\u0308[\x03\x02\x02\x02\u0309\u030A\x05N(\x02\u030A" +
		"\u030D\x07\x1E\x02\x02\u030B\u030E\x05|?\x02\u030C\u030E\x05z>\x02\u030D" +
		"\u030B\x03\x02\x02\x02\u030D\u030C\x03\x02\x02\x02\u030E\u030F\x03\x02" +
		"\x02\x02\u030F\u0314\x07\x1D\x02\x02\u0310\u0311\x07L\x02\x02\u0311\u0312" +
		"\x05\xAEX\x02\u0312\u0313\x07\x1D\x02\x02\u0313\u0315\x03\x02\x02\x02" +
		"\u0314\u0310\x03\x02\x02\x02\u0314\u0315\x03\x02\x02\x02\u0315]\x03\x02" +
		"\x02\x02\u0316\u031A\x05`1\x02\u0317\u0319\x05x=\x02\u0318\u0317\x03\x02" +
		"\x02\x02\u0319\u031C\x03\x02\x02\x02\u031A\u0318\x03\x02\x02\x02\u031A" +
		"\u031B\x03\x02\x02\x02\u031B_\x03\x02\x02\x02\u031C\u031A\x03\x02\x02" +
		"\x02\u031D\u031E\x05T+\x02\u031E\u0322\x07\x1E\x02\x02\u031F\u0321\x07" +
		"\x04\x02\x02\u0320\u031F\x03\x02\x02\x02\u0321\u0324\x03\x02\x02\x02\u0322" +
		"\u0320\x03\x02\x02\x02\u0322\u0323\x03\x02\x02\x02\u0323\u0325\x03\x02" +
		"\x02\x02\u0324\u0322\x03\x02\x02\x02\u0325\u0326\x05|?\x02\u0326\u0327" +
		"\x07\x1D\x02\x02\u0327a\x03\x02\x02\x02\u0328\u032C\x05d3\x02\u0329\u032B" +
		"\x05x=\x02\u032A\u0329\x03\x02\x02\x02\u032B\u032E\x03\x02\x02\x02\u032C" +
		"\u032A\x03\x02\x02\x02\u032C\u032D\x03\x02\x02\x02\u032Dc\x03\x02\x02" +
		"\x02\u032E\u032C\x03\x02\x02\x02\u032F\u0330\x05R*\x02\u0330\u0331\x07" +
		"\x1E\x02\x02\u0331\u0332\x05|?\x02\u0332\u0337\x07\x1D\x02\x02\u0333\u0334" +
		"\x07L\x02\x02\u0334\u0335\x05\xAEX\x02\u0335\u0336\x07\x1D\x02\x02\u0336" +
		"\u0338\x03\x02\x02\x02\u0337\u0333\x03\x02\x02\x02\u0337\u0338\x03\x02" +
		"\x02\x02\u0338e\x03\x02\x02\x02\u0339\u033D\x05h5\x02\u033A\u033C\x05" +
		"l7\x02\u033B\u033A\x03\x02\x02\x02\u033C\u033F\x03\x02\x02\x02\u033D\u033B" +
		"\x03\x02\x02\x02\u033D\u033E\x03\x02\x02\x02\u033E\u0342\x03\x02\x02\x02" +
		"\u033F\u033D\x03\x02\x02\x02\u0340\u0341\x075\x02\x02\u0341\u0343\x07" +
		"N\x02\x02\u0342\u0340\x03\x02\x02\x02\u0342\u0343\x03\x02\x02\x02\u0343" +
		"g\x03\x02\x02\x02\u0344\u0345\x05j6\x02\u0345\u0349\x07\x1E\x02\x02\u0346" +
		"\u0348\x07\x04\x02\x02\u0347\u0346\x03\x02\x02\x02\u0348\u034B\x03\x02" +
		"\x02\x02\u0349\u0347\x03\x02\x02\x02\u0349\u034A\x03\x02\x02\x02\u034A" +
		"\u034C\x03\x02\x02\x02\u034B\u0349\x03\x02\x02\x02\u034C\u034D\x05|?\x02" +
		"\u034D\u034E\x07\x1D\x02\x02\u034Ei\x03\x02\x02\x02\u034F\u0352\x07d\x02" +
		"\x02\u0350\u0353\x07.\x02\x02\u0351\u0353\x07\x9E\x02\x02\u0352\u0350" +
		"\x03\x02\x02\x02\u0352\u0351\x03\x02\x02\x02\u0352\u0353\x03\x02\x02\x02" +
		"\u0353\u035E\x03\x02\x02\x02\u0354\u0356\x07y\x02\x02\u0355\u0357\x07" +
		".\x02\x02\u0356\u0355\x03\x02\x02\x02\u0356\u0357\x03\x02\x02\x02\u0357" +
		"\u035E\x03\x02\x02\x02\u0358\u035A\x07e\x02\x02\u0359\u035B\x07.\x02\x02" +
		"\u035A\u0359\x03\x02\x02\x02\u035A\u035B\x03\x02\x02\x02\u035B\u035E\x03" +
		"\x02\x02\x02\u035C\u035E\x07f\x02\x02\u035D\u034F\x03\x02\x02\x02\u035D" +
		"\u0354\x03\x02\x02\x02\u035D\u0358\x03\x02\x02\x02\u035D\u035C\x03\x02" +
		"\x02\x02\u035Ek\x03\x02\x02\x02\u035F\u0360\x07J\x02\x02\u0360\u0361\x07" +
		"\x1E\x02\x02\u0361\u0362\x05|?\x02\u0362\u0363\x07\x1D\x02\x02\u0363\u0371" +
		"\x03\x02\x02\x02\u0364\u0365\t\x0F\x02\x02\u0365\u0366\x07\x1E\x02\x02" +
		"\u0366\u0367\x073\x02\x02\u0367\u0371\x07\x1D\x02\x02\u0368\u036C\t\x10" +
		"\x02\x02\u0369\u036B\v\x02\x02\x02\u036A\u0369\x03\x02\x02\x02\u036B\u036E" +
		"\x03\x02\x02\x02\u036C\u036D\x03\x02\x02\x02\u036C\u036A\x03\x02\x02\x02" +
		"\u036D\u036F\x03\x02\x02\x02\u036E\u036C\x03\x02\x02\x02\u036F\u0371\x07" +
		"\x1D\x02\x02\u0370\u035F\x03\x02\x02\x02\u0370\u0364\x03\x02\x02\x02\u0370" +
		"\u0368\x03\x02\x02\x02\u0371m\x03\x02\x02\x02\u0372\u0373\x07J\x02\x02" +
		"\u0373\u0374\x07\x1E\x02\x02\u0374\u0375\x05|?\x02\u0375\u0376\x07\x1D" +
		"\x02\x02\u0376\u0384\x03\x02\x02\x02\u0377\u0378\t\x0F\x02\x02\u0378\u0379" +
		"\x07\x1E\x02\x02\u0379\u037A\x073\x02\x02\u037A\u0384\x07\x1D\x02\x02" +
		"\u037B\u037F\t\x10\x02\x02\u037C\u037E\v\x02\x02\x02\u037D\u037C\x03\x02" +
		"\x02\x02\u037E\u0381\x03\x02\x02\x02\u037F\u0380\x03\x02\x02\x02\u037F" +
		"\u037D\x03\x02\x02\x02\u0380\u0382\x03\x02\x02\x02\u0381\u037F\x03\x02" +
		"\x02\x02\u0382\u0384\x07\x1D\x02\x02\u0383\u0372\x03\x02\x02\x02\u0383" +
		"\u0377\x03\x02\x02\x02\u0383\u037B\x03\x02\x02\x02\u0384o\x03\x02\x02" +
		"\x02\u0385\u0389\x05r:\x02\u0386\u0388\x05x=\x02\u0387\u0386\x03\x02\x02" +
		"\x02\u0388\u038B\x03\x02\x02\x02\u0389\u0387\x03\x02\x02\x02\u0389\u038A" +
		"\x03\x02\x02\x02\u038Aq\x03\x02\x02\x02\u038B\u0389\x03\x02\x02\x02\u038C" +
		"\u038D\x05v<\x02\u038D\u038E\x07\x1E\x02\x02\u038E\u038F\x05|?\x02\u038F" +
		"\u0394\x07\x1D\x02\x02\u0390\u0391\x07L\x02\x02\u0391\u0392\x05\xAEX\x02" +
		"\u0392\u0393\x07\x1D\x02\x02\u0393\u0395\x03\x02\x02\x02\u0394\u0390\x03" +
		"\x02\x02\x02\u0394\u0395\x03\x02\x02\x02\u0395s\x03\x02\x02\x02\u0396" +
		"\u0399\x07X\x02\x02\u0397\u0398\x07\x1E\x02\x02\u0398\u039A\x07/\x02\x02" +
		"\u0399\u0397\x03\x02\x02\x02\u0399\u039A\x03\x02\x02\x02\u039A\u03A1\x03" +
		"\x02\x02\x02\u039B\u039E\x07o\x02\x02\u039C\u039D\x07\x1E\x02\x02\u039D" +
		"\u039F\x07/\x02\x02\u039E\u039C\x03\x02\x02\x02\u039E\u039F\x03\x02\x02" +
		"\x02\u039F\u03A1\x03\x02\x02\x02\u03A0\u0396\x03\x02\x02\x02\u03A0\u039B" +
		"\x03\x02\x02\x02\u03A1u\x03\x02\x02\x02\u03A2\u03A5\x07c\x02\x02\u03A3" +
		"\u03A4\x07\x1E\x02\x02\u03A4\u03A6\x07/\x02\x02\u03A5\u03A3\x03\x02\x02" +
		"\x02\u03A5\u03A6\x03\x02\x02\x02\u03A6\u03B2\x03\x02\x02\x02\u03A7\u03AA" +
		"\x07x\x02\x02\u03A8\u03A9\x07\x1E\x02\x02\u03A9\u03AB\x07/\x02\x02\u03AA" +
		"\u03A8\x03\x02\x02\x02\u03AA\u03AB\x03\x02\x02\x02\u03AB\u03B2\x03\x02" +
		"\x02\x02\u03AC\u03AF\x07\x88\x02\x02\u03AD\u03AE\x07\x1E\x02\x02\u03AE" +
		"\u03B0\x07/\x02\x02\u03AF\u03AD\x03\x02\x02\x02\u03AF\u03B0\x03\x02\x02" +
		"\x02\u03B0\u03B2\x03\x02\x02\x02\u03B1\u03A2\x03\x02\x02\x02\u03B1\u03A7" +
		"\x03\x02\x02\x02\u03B1\u03AC\x03\x02\x02\x02\u03B2w\x03\x02\x02\x02\u03B3" +
		"\u03B4\x07\x16\x02\x02\u03B4\u03B7\x05\xA8U\x02\u03B5\u03B7\x07J\x02\x02" +
		"\u03B6\u03B3\x03\x02\x02\x02\u03B6\u03B5\x03\x02\x02\x02\u03B7\u03B8\x03" +
		"\x02\x02\x02\u03B8\u03BC\x07\x1E\x02\x02\u03B9\u03BB\x07\x04\x02\x02\u03BA" +
		"\u03B9\x03\x02\x02\x02\u03BB\u03BE\x03\x02\x02\x02\u03BC\u03BA\x03\x02" +
		"\x02\x02\u03BC\u03BD\x03\x02\x02\x02\u03BD\u03C1\x03\x02\x02\x02\u03BE" +
		"\u03BC\x03\x02\x02\x02\u03BF\u03C2\x05\xA8U\x02\u03C0\u03C2\x075\x02\x02" +
		"\u03C1\u03BF\x03\x02\x02\x02\u03C1\u03C0\x03\x02\x02\x02\u03C2\u03C3\x03" +
		"\x02\x02\x02\u03C3\u03C1\x03\x02\x02\x02\u03C3\u03C4\x03\x02\x02\x02\u03C4" +
		"\u03C5\x03\x02\x02\x02\u03C5\u03D3\x07\x1D\x02\x02\u03C6\u03C7\t\x0F\x02" +
		"\x02\u03C7\u03C8\x07\x1E\x02\x02\u03C8\u03C9\x073\x02\x02\u03C9\u03D3" +
		"\x07\x1D\x02\x02\u03CA\u03CE\t\x10\x02\x02\u03CB\u03CD\v\x02\x02\x02\u03CC" +
		"\u03CB\x03\x02\x02\x02\u03CD\u03D0\x03\x02\x02\x02\u03CE\u03CF\x03\x02" +
		"\x02\x02\u03CE\u03CC\x03\x02\x02\x02\u03CF\u03D1\x03\x02\x02\x02\u03D0" +
		"\u03CE\x03\x02\x02\x02\u03D1\u03D3\x07\x1D\x02\x02\u03D2\u03B6\x03\x02" +
		"\x02\x02\u03D2\u03C6\x03\x02\x02\x02\u03D2\u03CA\x03\x02\x02\x02\u03D3" +
		"y\x03\x02\x02\x02\u03D4\u03D5\x07\x9D\x02\x02\u03D5\u03D6\x07!\x02\x02" +
		"\u03D6\u03D7\x073\x02\x02\u03D7{\x03\x02\x02\x02\u03D8\u03D9\x07\xA0\x02" +
		"\x02\u03D9}\x03\x02\x02\x02\u03DA\u03DB\x07\x1B\x02\x02\u03DB\u03E3\x07" +
		"\x1D\x02\x02\u03DC\u03DE\x07\x04\x02\x02\u03DD\u03DC\x03\x02\x02\x02\u03DE" +
		"\u03E1\x03\x02\x02\x02\u03DF\u03DD\x03\x02\x02\x02\u03DF\u03E0\x03\x02" +
		"\x02\x02\u03E0\u03E2\x03\x02\x02\x02\u03E1\u03DF\x03\x02\x02\x02\u03E2" +
		"\u03E4\x05\x80A\x02\u03E3\u03DF\x03\x02\x02\x02\u03E3\u03E4\x03\x02\x02" +
		"\x02\u03E4\u03F9\x03\x02\x02\x02\u03E5\u03E6\x07\x1B\x02\x02\u03E6\u03EB" +
		"\x05\xA8U\x02\u03E7\u03EA\x07\x1E\x02\x02\u03E8\u03EA\x05\xAEX\x02\u03E9" +
		"\u03E7\x03\x02\x02\x02\u03E9\u03E8\x03\x02\x02\x02\u03EA\u03ED\x03\x02" +
		"\x02\x02\u03EB\u03E9\x03\x02\x02\x02\u03EB\u03EC\x03\x02\x02\x02\u03EC" +
		"\u03EE\x03\x02\x02\x02\u03ED\u03EB\x03\x02\x02\x02\u03EE\u03F6\x07\x1D" +
		"\x02\x02\u03EF\u03F1\x07\x04\x02\x02\u03F0\u03EF\x03\x02\x02\x02\u03F1" +
		"\u03F4\x03\x02\x02\x02\u03F2\u03F0\x03\x02\x02\x02\u03F2\u03F3\x03\x02" +
		"\x02\x02\u03F3\u03F5\x03\x02\x02\x02\u03F4\u03F2\x03\x02\x02\x02\u03F5" +
		"\u03F7\x05\x80A\x02\u03F6\u03F2\x03\x02\x02\x02\u03F6\u03F7\x03\x02";
	private static readonly _serializedATNSegment2: string =
		"\x02\x02\u03F7\u03F9\x03\x02\x02\x02\u03F8\u03DA\x03\x02\x02\x02\u03F8" +
		"\u03E5\x03\x02\x02\x02\u03F9\x7F\x03\x02\x02\x02\u03FA\u03FB\x07\x1B\x02" +
		"\x02\u03FB\u0400\x05\xA8U\x02\u03FC\u03FF\x07\x1E\x02\x02\u03FD\u03FF" +
		"\x05\xAEX\x02\u03FE\u03FC\x03\x02\x02\x02\u03FE\u03FD\x03\x02\x02\x02" +
		"\u03FF\u0402\x03\x02\x02\x02\u0400\u03FE\x03\x02\x02\x02\u0400\u0401\x03" +
		"\x02\x02\x02\u0401\u0403\x03\x02\x02\x02\u0402\u0400\x03\x02\x02\x02\u0403" +
		"\u0404\x07\x1D\x02\x02\u0404\x81\x03\x02\x02\x02\u0405\u0407\x07\x10\x02" +
		"\x02\u0406\u0408\x05\xA8U\x02\u0407\u0406\x03\x02\x02\x02\u0407\u0408" +
		"\x03\x02\x02\x02\u0408\u0409\x03\x02\x02\x02\u0409\u0410\x07\x1D\x02\x02" +
		"\u040A\u040C\x07\x11\x02\x02\u040B\u040D\x05\xA8U\x02\u040C\u040B\x03" +
		"\x02\x02\x02\u040C\u040D\x03\x02\x02\x02\u040D\u040E\x03\x02\x02\x02\u040E" +
		"\u0410\x07\x1D\x02\x02\u040F\u0405\x03\x02\x02\x02\u040F\u040A\x03\x02" +
		"\x02\x02\u0410\x83\x03\x02\x02\x02\u0411\u0419\x07C\x02\x02\u0412\u0419" +
		"\x07A\x02\x02\u0413\u0415\x07B\x02\x02\u0414\u0416\x077\x02\x02\u0415" +
		"\u0414\x03\x02\x02\x02\u0415\u0416\x03\x02\x02\x02\u0416\u0417\x03\x02" +
		"\x02\x02\u0417\u0419\x07\x02\x02\x03\u0418\u0411\x03\x02\x02\x02\u0418" +
		"\u0412\x03\x02\x02\x02\u0418\u0413\x03\x02\x02\x02\u0419\x85\x03\x02\x02" +
		"\x02\u041A\u041C\x07n\x02\x02\u041B\u041D\x05\xA8U\x02\u041C\u041B\x03" +
		"\x02\x02\x02\u041C\u041D\x03\x02\x02\x02\u041D\u0433\x03\x02\x02\x02\u041E" +
		"\u0428\x05\xA8U\x02\u041F\u0423\x075\x02\x02\u0420\u0422\x07\x04\x02\x02" +
		"\u0421\u0420\x03\x02\x02\x02\u0422\u0425\x03\x02\x02\x02\u0423\u0421\x03" +
		"\x02\x02\x02\u0423\u0424\x03\x02\x02\x02\u0424\u0427\x03\x02\x02\x02\u0425" +
		"\u0423\x03\x02\x02\x02\u0426\u041F\x03\x02\x02\x02\u0427\u042A\x03\x02" +
		"\x02\x02\u0428\u0426\x03\x02\x02\x02\u0428\u0429\x03\x02\x02\x02\u0429" +
		"\u042E\x03\x02\x02\x02\u042A\u0428\x03\x02\x02\x02\u042B\u042D\x075\x02" +
		"\x02\u042C\u042B\x03\x02\x02\x02\u042D\u0430\x03\x02\x02\x02\u042E\u042C" +
		"\x03\x02\x02\x02\u042E\u042F\x03\x02\x02\x02\u042F\u0432\x03\x02\x02\x02" +
		"\u0430\u042E\x03\x02\x02\x02\u0431\u041E\x03\x02\x02\x02\u0432\u0435\x03" +
		"\x02\x02\x02\u0433\u0431\x03\x02\x02\x02\u0433\u0434\x03\x02\x02\x02\u0434" +
		"\u0436\x03\x02\x02\x02\u0435\u0433\x03\x02\x02\x02\u0436\u0442\x07\x1D" +
		"\x02\x02\u0437\u043D\x07n\x02\x02\u0438\u043C\x05\xA8U\x02\u0439\u043C" +
		"\x075\x02\x02\u043A\u043C\x07\x04\x02\x02\u043B\u0438\x03\x02\x02\x02" +
		"\u043B\u0439\x03\x02\x02\x02\u043B\u043A\x03\x02\x02\x02\u043C\u043F\x03" +
		"\x02\x02\x02\u043D\u043B\x03\x02\x02\x02\u043D\u043E\x03\x02\x02\x02\u043E" +
		"\u0440\x03\x02\x02\x02\u043F\u043D\x03\x02\x02\x02\u0440\u0442\x07\x02" +
		"\x02\x03\u0441\u041A\x03\x02\x02\x02\u0441\u0437\x03\x02\x02\x02\u0442" +
		"\x87\x03\x02\x02\x02\u0443\u0448\x07;\x02\x02\u0444\u0449\x05\xA8U\x02" +
		"\u0445\u0449\x07\x1E\x02\x02\u0446\u0449\x07\xA0\x02\x02\u0447\u0449\x07" +
		"5\x02\x02\u0448\u0444\x03\x02\x02\x02\u0448\u0445\x03\x02\x02\x02\u0448" +
		"\u0446\x03\x02\x02\x02\u0448\u0447\x03\x02\x02\x02\u0449\u044A\x03\x02" +
		"\x02\x02\u044A\u0448\x03\x02\x02\x02\u044A\u044B\x03\x02\x02\x02\u044B" +
		"\u044C\x03\x02\x02\x02\u044C\u045A\x07\x1D\x02\x02\u044D\u0455\x07;\x02" +
		"\x02\u044E\u0454\x05\xA8U\x02\u044F\u0454\x07\x1E\x02\x02\u0450\u0454" +
		"\x07\xA0\x02\x02\u0451\u0454\x075\x02\x02\u0452\u0454\x07\x04\x02\x02" +
		"\u0453\u044E\x03\x02\x02\x02\u0453\u044F\x03\x02\x02\x02\u0453\u0450\x03" +
		"\x02\x02\x02\u0453\u0451\x03\x02\x02\x02\u0453\u0452\x03\x02\x02\x02\u0454" +
		"\u0457\x03\x02\x02\x02\u0455\u0453\x03\x02\x02\x02\u0455\u0456\x03\x02" +
		"\x02\x02\u0456\u0458\x03\x02\x02\x02\u0457\u0455\x03\x02\x02\x02\u0458" +
		"\u045A\x07\x02\x02\x03\u0459\u0443\x03\x02\x02\x02\u0459\u044D\x03\x02" +
		"\x02\x02\u045A\x89\x03\x02\x02\x02\u045B\u045C\x07:\x02\x02\u045C\u045D" +
		"\x05\xA8U\x02\u045D\u045E\x07\x1D\x02\x02\u045E\x8B\x03\x02\x02\x02\u045F" +
		"\u0463\x07U\x02\x02\u0460\u0464\x05\xA8U\x02\u0461\u0464\x07\x1E\x02\x02" +
		"\u0462\u0464\x075\x02\x02\u0463\u0460\x03\x02\x02\x02\u0463\u0461\x03" +
		"\x02\x02\x02\u0463\u0462\x03\x02\x02\x02\u0464\u0465\x03\x02\x02\x02\u0465" +
		"\u0463\x03\x02\x02\x02\u0465\u0466\x03\x02\x02\x02\u0466\u0467\x03\x02" +
		"\x02\x02\u0467\u0469\x07\x1D\x02\x02\u0468\u046A\x05\x8EH\x02\u0469\u0468" +
		"\x03\x02\x02\x02\u0469\u046A\x03\x02\x02\x02\u046A\x8D\x03\x02\x02\x02" +
		"\u046B\u046F\x07U\x02\x02\u046C\u0470\x05\xA8U\x02\u046D\u0470\x07\x1E" +
		"\x02\x02\u046E\u0470\x075\x02\x02\u046F\u046C\x03\x02\x02\x02\u046F\u046D" +
		"\x03\x02\x02\x02\u046F\u046E\x03\x02\x02\x02\u0470\u0471\x03\x02\x02\x02" +
		"\u0471\u046F\x03\x02\x02\x02\u0471\u0472\x03\x02\x02\x02\u0472\u0473\x03" +
		"\x02\x02\x02\u0473\u0474\x07\x1D\x02\x02\u0474\x8F\x03\x02\x02\x02\u0475" +
		"\u0479\x07\x14\x02\x02\u0476\u0478\x075\x02\x02\u0477\u0476\x03\x02\x02" +
		"\x02\u0478\u047B\x03\x02\x02\x02\u0479\u0477\x03\x02\x02\x02\u0479\u047A" +
		"\x03\x02\x02\x02\u047A\u047D\x03\x02\x02\x02\u047B\u0479\x03\x02\x02\x02" +
		"\u047C\u047E\x05\xA8U\x02\u047D\u047C\x03\x02\x02\x02\u047D\u047E\x03" +
		"\x02\x02\x02\u047E\u0494\x03\x02\x02\x02\u047F\u0489\x05\xA8U\x02\u0480" +
		"\u0484\x075\x02\x02\u0481\u0483\x07\x04\x02\x02\u0482\u0481\x03\x02\x02" +
		"\x02\u0483\u0486\x03\x02\x02\x02\u0484\u0482\x03\x02\x02\x02\u0484\u0485" +
		"\x03\x02\x02\x02\u0485\u0488\x03\x02\x02\x02\u0486\u0484\x03\x02\x02\x02" +
		"\u0487\u0480\x03\x02\x02\x02\u0488\u048B\x03\x02\x02\x02\u0489\u0487\x03" +
		"\x02\x02\x02\u0489\u048A\x03\x02\x02\x02\u048A\u048F\x03\x02\x02\x02\u048B" +
		"\u0489\x03\x02\x02\x02\u048C\u048E\x075\x02\x02\u048D\u048C\x03\x02\x02" +
		"\x02\u048E\u0491\x03\x02\x02\x02\u048F\u048D\x03\x02\x02\x02\u048F\u0490" +
		"\x03\x02\x02\x02\u0490\u0493\x03\x02\x02\x02\u0491\u048F\x03\x02\x02\x02" +
		"\u0492\u047F\x03\x02\x02\x02\u0493\u0496\x03\x02\x02\x02\u0494\u0492\x03" +
		"\x02\x02\x02\u0494\u0495\x03\x02\x02\x02\u0495\u0497\x03\x02\x02\x02\u0496" +
		"\u0494\x03\x02\x02\x02\u0497\u04A4\x07\x1D\x02\x02\u0498\u049C\x07\x14" +
		"\x02\x02\u0499\u049B\x075\x02\x02\u049A\u0499\x03\x02\x02\x02\u049B\u049E" +
		"\x03\x02\x02\x02\u049C\u049A\x03\x02\x02\x02\u049C\u049D\x03\x02\x02\x02" +
		"\u049D\u04A0\x03\x02\x02\x02\u049E\u049C\x03\x02\x02\x02\u049F\u04A1\x05" +
		"\xA8U\x02\u04A0\u049F\x03\x02\x02\x02\u04A0\u04A1\x03\x02\x02\x02\u04A1" +
		"\u04A2\x03\x02\x02\x02\u04A2\u04A4\x07\x02\x02\x03\u04A3\u0475\x03\x02" +
		"\x02\x02\u04A3\u0498\x03\x02\x02\x02\u04A4\x91\x03\x02\x02\x02\u04A5\u04A7" +
		"\x07\x15\x02\x02\u04A6\u04A8\n\x11\x02\x02\u04A7\u04A6\x03\x02\x02\x02" +
		"\u04A8\u04A9\x03\x02\x02\x02\u04A9\u04A7\x03\x02\x02\x02\u04A9\u04AA\x03" +
		"\x02\x02\x02\u04AA\u04AB\x03\x02\x02\x02\u04AB\u04AC\x07\x1D\x02\x02\u04AC" +
		"\x93\x03\x02\x02\x02\u04AD\u04B0\x07\x1C\x02\x02\u04AE\u04B1\x05\xA8U" +
		"\x02\u04AF\u04B1\x075\x02\x02\u04B0\u04AE\x03\x02\x02\x02\u04B0\u04AF" +
		"\x03\x02\x02\x02\u04B1\u04B2\x03\x02\x02\x02\u04B2\u04B0\x03\x02\x02\x02" +
		"\u04B2\u04B3\x03\x02\x02\x02\u04B3\u04B4\x03\x02\x02\x02\u04B4\u04BA\x07" +
		"\x1D\x02\x02\u04B5\u04B6\x07\x1C\x02\x02\u04B6\u04B7\x05\xA8U\x02\u04B7" +
		"\u04B8\x07\x02\x02\x03\u04B8\u04BA\x03\x02\x02\x02\u04B9\u04AD\x03\x02" +
		"\x02\x02\u04B9\u04B5\x03\x02\x02\x02\u04BA\x95\x03\x02\x02\x02\u04BB\u04BC" +
		"\x07G\x02\x02\u04BC\u04BD\x05\xA8U\x02\u04BD\u04BE\x07\x1D\x02\x02\u04BE" +
		"\u04C4\x03\x02\x02\x02\u04BF\u04C0\x07H\x02\x02\u04C0\u04C1\x05\xA8U\x02" +
		"\u04C1\u04C2\x07\x1D\x02\x02\u04C2\u04C4\x03\x02\x02\x02\u04C3\u04BB\x03" +
		"\x02\x02\x02\u04C3\u04BF\x03\x02\x02\x02\u04C4\x97\x03\x02\x02\x02\u04C5" +
		"\u04C6\x07>\x02\x02\u04C6\u04C7\x07\x1E\x02\x02\u04C7\u04C8\x073\x02\x02" +
		"\u04C8\u04CF\x07\x1D\x02\x02\u04C9\u04CA\x07>\x02\x02\u04CA\u04CB\x07" +
		"\x1E\x02\x02\u04CB\u04CC\x05\xA8U\x02\u04CC\u04CD\x07\x1D\x02\x02\u04CD" +
		"\u04CF\x03\x02\x02\x02\u04CE\u04C5\x03\x02\x02\x02\u04CE\u04C9\x03\x02" +
		"\x02\x02\u04CF\x99\x03\x02\x02\x02\u04D0\u04D1\x07S\x02\x02\u04D1\u04D2" +
		"\x05\xA8U\x02\u04D2\u04D3\x07\x1D\x02\x02\u04D3\x9B\x03\x02\x02\x02\u04D4" +
		"\u04D5\x07T\x02\x02\u04D5\u04D6\x05\xA8U\x02\u04D6\u04D7\x07\x1D\x02\x02" +
		"\u04D7\x9D\x03\x02\x02\x02\u04D8\u04E2\x05\xA0Q\x02\u04D9\u04DB\x075\x02" +
		"\x02\u04DA\u04D9\x03\x02\x02\x02\u04DB\u04DE\x03\x02\x02\x02\u04DC\u04DA" +
		"\x03\x02\x02\x02\u04DC\u04DD\x03\x02\x02\x02\u04DD\u04DF\x03\x02\x02\x02" +
		"\u04DE\u04DC\x03\x02\x02\x02\u04DF\u04E1\x05\xA0Q\x02\u04E0\u04DC\x03" +
		"\x02\x02\x02\u04E1\u04E4\x03\x02\x02\x02\u04E2\u04E0\x03\x02\x02\x02\u04E2" +
		"\u04E3\x03\x02\x02\x02\u04E3\x9F\x03\x02\x02\x02\u04E4\u04E2\x03\x02\x02" +
		"\x02\u04E5\u04E6\x07\x16\x02\x02\u04E6\u04E7\x05\xA8U\x02\u04E7\u04E8" +
		"\t\x12\x02\x02\u04E8\u04EE\x05\xA8U\x02\u04E9\u04ED\x075\x02\x02\u04EA" +
		"\u04ED\x07\x1E\x02\x02\u04EB\u04ED\x05\xA8U\x02\u04EC\u04E9\x03\x02\x02" +
		"\x02\u04EC\u04EA\x03\x02\x02\x02\u04EC\u04EB\x03\x02\x02\x02\u04ED\u04F0" +
		"\x03\x02\x02\x02\u04EE\u04EC\x03\x02\x02\x02\u04EE\u04EF\x03\x02\x02\x02" +
		"\u04EF\u04F1\x03\x02\x02\x02\u04F0\u04EE\x03\x02\x02\x02\u04F1\u04F2\x07" +
		"\x1D\x02\x02\u04F2\u04FC\x03\x02\x02\x02\u04F3\u04F7\x07Q\x02\x02\u04F4" +
		"\u04F6\v\x02\x02\x02\u04F5\u04F4\x03\x02\x02\x02\u04F6\u04F9\x03\x02\x02" +
		"\x02\u04F7\u04F8\x03\x02\x02\x02\u04F7\u04F5\x03\x02\x02\x02\u04F8\u04FA" +
		"\x03\x02\x02\x02\u04F9\u04F7\x03\x02\x02\x02\u04FA\u04FC\x07\x1D\x02\x02" +
		"\u04FB\u04E5\x03\x02\x02\x02\u04FB\u04F3\x03\x02\x02\x02\u04FC\xA1\x03" +
		"\x02\x02\x02\u04FD\u0501\x07\r\x02\x02\u04FE\u0502\x05\xA8U\x02\u04FF" +
		"\u0502\x07\x1E\x02\x02\u0500\u0502\x075\x02\x02\u0501\u04FE\x03\x02\x02" +
		"\x02\u0501\u04FF\x03\x02\x02\x02\u0501\u0500\x03\x02\x02\x02\u0502\u0503" +
		"\x03\x02\x02\x02\u0503\u0501\x03\x02\x02\x02\u0503\u0504\x03\x02\x02\x02" +
		"\u0504\u0505\x03\x02\x02\x02\u0505\u0511\x07\x1D\x02\x02\u0506\u050C\x07" +
		"\r\x02\x02\u0507\u050B\x05\xA8U\x02\u0508\u050B\x07\x1E\x02\x02\u0509" +
		"\u050B\x075\x02\x02\u050A\u0507\x03\x02\x02\x02\u050A\u0508\x03\x02\x02" +
		"\x02\u050A\u0509\x03\x02\x02\x02\u050B\u050E\x03\x02\x02\x02\u050C\u050A" +
		"\x03\x02\x02\x02\u050C\u050D\x03\x02\x02\x02\u050D\u050F\x03\x02\x02\x02" +
		"\u050E\u050C\x03\x02\x02\x02\u050F\u0511\x07\x02\x02\x03\u0510\u04FD\x03" +
		"\x02\x02\x02\u0510\u0506\x03\x02\x02\x02\u0511\xA3\x03\x02\x02\x02\u0512" +
		"\u0514\x07\x12\x02\x02\u0513\u0515\x05\xA8U\x02\u0514\u0513\x03\x02\x02" +
		"\x02\u0514\u0515\x03\x02\x02\x02\u0515\u0516\x03\x02\x02\x02\u0516\u0517" +
		"\x07\x1D\x02\x02\u0517\xA5\x03\x02\x02\x02\u0518\u051A\x05\xA8U\x02\u0519" +
		"\u051B\x075\x02\x02\u051A\u0519\x03\x02\x02\x02\u051A\u051B\x03\x02\x02" +
		"\x02\u051B\u051D\x03\x02\x02\x02\u051C\u0518\x03\x02\x02\x02\u051D\u051E" +
		"\x03\x02\x02\x02\u051E\u051C\x03\x02\x02\x02\u051E\u051F\x03\x02\x02\x02" +
		"\u051F\xA7\x03\x02\x02\x02\u0520\u0527\x074\x02\x02\u0521\u0523\x07\x04" +
		"\x02\x02\u0522\u0521\x03\x02\x02\x02\u0523\u0524\x03\x02\x02\x02\u0524" +
		"\u0522\x03\x02\x02\x02\u0524\u0525\x03\x02\x02\x02\u0525\u0526\x03\x02" +
		"\x02\x02\u0526\u0528\x073\x02\x02\u0527\u0522\x03\x02\x02\x02\u0527\u0528" +
		"\x03\x02\x02\x02\u0528\u054F\x03\x02\x02\x02\u0529\u0530\x05\xAEX\x02" +
		"\u052A\u052C\x07\x04\x02\x02\u052B\u052A\x03\x02\x02\x02\u052C\u052D\x03" +
		"\x02\x02\x02\u052D\u052B\x03\x02\x02\x02\u052D\u052E\x03\x02\x02\x02\u052E" +
		"\u052F\x03\x02\x02\x02\u052F\u0531\x073\x02\x02\u0530\u052B\x03\x02\x02" +
		"\x02\u0530\u0531\x03\x02\x02\x02\u0531\u054F\x03\x02\x02\x02\u0532\u0533" +
		"\x07\x19\x02\x02\u0533\u0534\x05\xA8U\x02\u0534\u0535\x07\x1D\x02\x02" +
		"\u0535\u054F\x03\x02\x02\x02\u0536\u054F\x073\x02\x02\u0537\u0539\x07" +
		"\x04\x02\x02\u0538\u0537\x03\x02\x02\x02\u0539\u053C\x03\x02\x02\x02\u053A" +
		"\u0538\x03\x02\x02\x02\u053A\u053B\x03\x02\x02\x02\u053B\u053D\x03\x02" +
		"\x02\x02\u053C\u053A\x03\x02\x02\x02\u053D\u0541\x07\x1E\x02\x02\u053E" +
		"\u0540\x07\x04\x02\x02\u053F\u053E\x03\x02\x02\x02\u0540\u0543\x03\x02" +
		"\x02\x02\u0541\u053F\x03\x02\x02\x02\u0541\u0542\x03\x02\x02\x02\u0542" +
		"\u054F\x03\x02\x02\x02\u0543\u0541\x03\x02\x02\x02\u0544\u0548\x07\x1F" +
		"\x02\x02\u0545\u0547\x07\x04\x02\x02\u0546\u0545\x03\x02\x02\x02\u0547" +
		"\u054A\x03\x02\x02\x02\u0548\u0546\x03\x02\x02\x02\u0548\u0549\x03\x02" +
		"\x02\x02\u0549\u054F\x03\x02\x02\x02\u054A\u0548\x03\x02\x02\x02\u054B" +
		"\u054F\x07 \x02\x02\u054C\u054F\x07\'\x02\x02\u054D\u054F\x07\xA0\x02" +
		"\x02\u054E\u0520\x03\x02\x02\x02\u054E\u0529\x03\x02\x02\x02\u054E\u0532" +
		"\x03\x02\x02\x02\u054E\u0536\x03\x02\x02\x02\u054E\u053A\x03\x02\x02\x02" +
		"\u054E\u0544\x03\x02\x02\x02\u054E\u054B\x03\x02\x02\x02\u054E\u054C\x03" +
		"\x02\x02\x02\u054E\u054D\x03\x02\x02\x02\u054F\xA9\x03\x02\x02\x02\u0550" +
		"\u0551\x07\x1D\x02\x02\u0551\xAB\x03\x02\x02\x02\u0552\u0553\t\x13\x02" +
		"\x02\u0553\xAD\x03\x02\x02\x02\u0554\u0560\x077\x02\x02\u0555\u0560\x07" +
		"6\x02\x02\u0556\u0560\x078\x02\x02\u0557\u0560\x07\x1F\x02\x02\u0558\u0559" +
		"\x07#\x02\x02\u0559\u0560\n\x14\x02\x02\u055A\u055B\x07$\x02\x02\u055B" +
		"\u0560\n\x15\x02\x02\u055C\u0560\x07\'\x02\x02\u055D\u0560\x07&\x02\x02" +
		"\u055E\u0560\x07%\x02\x02\u055F\u0554\x03\x02\x02\x02\u055F\u0555\x03" +
		"\x02\x02\x02\u055F\u0556\x03\x02\x02\x02\u055F\u0557\x03\x02\x02\x02\u055F" +
		"\u0558\x03\x02\x02\x02\u055F\u055A\x03\x02\x02\x02\u055F\u055C\x03\x02" +
		"\x02\x02\u055F\u055D\x03\x02\x02\x02\u055F\u055E\x03\x02\x02\x02\u0560" +
		"\u0561\x03\x02\x02\x02\u0561\u055F\x03\x02\x02\x02\u0561\u0562\x03\x02" +
		"\x02\x02\u0562\xAF\x03\x02\x02\x02\u0563\u0564\x07\x04\x02\x02\u0564\xB1" +
		"\x03\x02\x02\x02\xC3\xB6\xBC\xC1\xC6\xD3\xDB\xE2\xE7\xF3\xF8\xFE\u0105" +
		"\u010B\u010E\u0116\u011D\u0122\u012E\u0133\u0139\u0140\u0146\u0149\u0151" +
		"\u0158\u015D\u0161\u0166\u016C\u0174\u017B\u0180\u0184\u0189\u018F\u0197" +
		"\u019E\u01A3\u01A7\u01AC\u01B2\u01BA\u01C1\u01C6\u01CA\u01CF\u01D5\u01DD" +
		"\u01E4\u01E9\u01ED\u01F2\u01F8\u0200\u0207\u020C\u0210\u0215\u021B\u0221" +
		"\u0225\u0228\u022E\u0232\u0235\u023B\u023F\u0242\u026E\u0278\u027A\u0281" +
		"\u0286\u0294\u029A\u029C\u02AA\u02B1\u02B6\u02BA\u02BE\u02C1\u02C6\u02DD" +
		"\u02E2\u02E7\u02E9\u02F3\u02FD\u0307\u030D\u0314\u031A\u0322\u032C\u0337" +
		"\u033D\u0342\u0349\u0352\u0356\u035A\u035D\u036C\u0370\u037F\u0383\u0389" +
		"\u0394\u0399\u039E\u03A0\u03A5\u03AA\u03AF\u03B1\u03B6\u03BC\u03C1\u03C3" +
		"\u03CE\u03D2\u03DF\u03E3\u03E9\u03EB\u03F2\u03F6\u03F8\u03FE\u0400\u0407" +
		"\u040C\u040F\u0415\u0418\u041C\u0423\u0428\u042E\u0433\u043B\u043D\u0441" +
		"\u0448\u044A\u0453\u0455\u0459\u0463\u0465\u0469\u046F\u0471\u0479\u047D" +
		"\u0484\u0489\u048F\u0494\u049C\u04A0\u04A3\u04A9\u04B0\u04B2\u04B9\u04C3" +
		"\u04CE\u04DC\u04E2\u04EC\u04EE\u04F7\u04FB\u0501\u0503\u050A\u050C\u0510" +
		"\u0514\u051A\u051E\u0524\u0527\u052D\u0530\u053A\u0541\u0548\u054E\u055F" +
		"\u0561";
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


