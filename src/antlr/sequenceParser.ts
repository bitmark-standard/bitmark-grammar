// Generated from ./antlr/sequenceParser.g4 by ANTLR 4.9.0-SNAPSHOT


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

import { sequenceParserListener } from "./sequenceParserListener";

export class sequenceParser extends Parser {
	public static readonly OPDOT = 1;
	public static readonly S = 2;
	public static readonly BitSequence = 3;
	public static readonly BitMenu3Course = 4;
	public static readonly OPDOLL = 5;
	public static readonly OPBUL = 6;
	public static readonly OPESC = 7;
	public static readonly OPRANGLES = 8;
	public static readonly OPRANGLEL = 9;
	public static readonly OPDANGLE = 10;
	public static readonly OPU = 11;
	public static readonly OPB = 12;
	public static readonly OPQ = 13;
	public static readonly OPA = 14;
	public static readonly OPP = 15;
	public static readonly OPM = 16;
	public static readonly OPS = 17;
	public static readonly OPR = 18;
	public static readonly OPC = 19;
	public static readonly OPITEM = 20;
	public static readonly OPLEAD = 21;
	public static readonly OPPAGENUMBER = 22;
	public static readonly OPMARGINNUMBER = 23;
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
	public static readonly Dot = 35;
	public static readonly DBLEQ = 36;
	public static readonly DMM = 37;
	public static readonly HSPL = 38;
	public static readonly SSPL = 39;
	public static readonly SSPL2 = 40;
	public static readonly COMMENT = 41;
	public static readonly DCANY = 42;
	public static readonly Image_type = 43;
	public static readonly Audio_type = 44;
	public static readonly Video_type = 45;
	public static readonly ArticleText = 46;
	public static readonly NOTCL = 47;
	public static readonly NUMERIC = 48;
	public static readonly STRING = 49;
	public static readonly NL = 50;
	public static readonly NOTBITMARK = 51;
	public static readonly ELIPSIS = 52;
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
	public static readonly AmpVideo = 89;
	public static readonly AmpArticle = 90;
	public static readonly AmpDocument = 91;
	public static readonly AmpApp = 92;
	public static readonly AmpWebsite = 93;
	public static readonly AmpStillImageFilm = 94;
	public static readonly AmpPdf = 95;
	public static readonly OpAmpAudio = 96;
	public static readonly OpAmpImage = 97;
	public static readonly OpAmpImageZoom = 98;
	public static readonly OpAmpVideo = 99;
	public static readonly OpAmpArticle = 100;
	public static readonly OpAmpArticleAtt = 101;
	public static readonly OpAmpDocument = 102;
	public static readonly OpAmpApp = 103;
	public static readonly OpAmpWebsite = 104;
	public static readonly OpAmpStillImageFilm = 105;
	public static readonly BracEnclose = 106;
	public static readonly AmpAudioLink = 107;
	public static readonly AmpImageLink = 108;
	public static readonly AmpVideoLink = 109;
	public static readonly AmpArticleLink = 110;
	public static readonly AmpDocumentLink = 111;
	public static readonly AmpDocumentDownload = 112;
	public static readonly AmpAppLink = 113;
	public static readonly AmpWebsiteLink = 114;
	public static readonly AmpStillImageFilmLink = 115;
	public static readonly OpAmpAudioLink = 116;
	public static readonly OpAmpImageLink = 117;
	public static readonly OpAmpVideoLink = 118;
	public static readonly OpAmpArticleLink = 119;
	public static readonly OpAmpDocumentLink = 120;
	public static readonly OpAmpDocumentDownload = 121;
	public static readonly OpAmpAppLink = 122;
	public static readonly OpAmpWebsiteLink = 123;
	public static readonly OpAmpStillImageFilmLink = 124;
	public static readonly AmpImageEmbed = 125;
	public static readonly AmpVideoEmbed = 126;
	public static readonly AmpAudioEmbed = 127;
	public static readonly AmpDocumentEmbed = 128;
	public static readonly AmpStillImageFilmEmbed = 129;
	public static readonly OpAmpImageEmbed = 130;
	public static readonly OpAmpVideoEmbed = 131;
	public static readonly OpAmpAudioEmbed = 132;
	public static readonly OpAmpDocumentEmbed = 133;
	public static readonly OpAmpStillImageFilmEmbed = 134;
	public static readonly BitmarkMinus = 135;
	public static readonly BitmarkPlus = 136;
	public static readonly ColonText = 137;
	public static readonly ColonJson = 138;
	public static readonly Prosemirror = 139;
	public static readonly Placeholder = 140;
	public static readonly BASIC = 141;
	public static readonly JPG = 142;
	public static readonly PNG = 143;
	public static readonly GIF = 144;
	public static readonly SVG = 145;
	public static readonly MP2 = 146;
	public static readonly MP3 = 147;
	public static readonly MP4 = 148;
	public static readonly FLV = 149;
	public static readonly WMV = 150;
	public static readonly MPEG = 151;
	public static readonly MPG = 152;
	public static readonly TEL = 153;
	public static readonly DotArticleAtt = 154;
	public static readonly STAR = 155;
	public static readonly URL = 156;
	public static readonly LIST_LINE = 157;
	public static readonly ENCLBARS = 158;
	public static readonly RULE_bitmark = 0;
	public static readonly RULE_bitmark_ = 1;
	public static readonly RULE_bit = 2;
	public static readonly RULE_sequence = 3;
	public static readonly RULE_seqstr = 4;
	public static readonly RULE_minusminus = 5;
	public static readonly RULE_menu_3_course = 6;
	public static readonly RULE_menu_list = 7;
	public static readonly RULE_hspl_slot = 8;
	public static readonly RULE_menu_text = 9;
	public static readonly RULE_melem = 10;
	public static readonly RULE_mtex = 11;
	public static readonly RULE_footer = 12;
	public static readonly RULE_bitElem = 13;
	public static readonly RULE_gap = 14;
	public static readonly RULE_single_gap = 15;
	public static readonly RULE_choice_plus = 16;
	public static readonly RULE_choice_minus = 17;
	public static readonly RULE_choice_star = 18;
	public static readonly RULE_resource = 19;
	public static readonly RULE_bullet_item = 20;
	public static readonly RULE_atpoint = 21;
	public static readonly RULE_format = 22;
	public static readonly RULE_resource_format = 23;
	public static readonly RULE_resource_format_extra = 24;
	public static readonly RULE_format2 = 25;
	public static readonly RULE_image_format = 26;
	public static readonly RULE_video_format = 27;
	public static readonly RULE_article_format = 28;
	public static readonly RULE_document_format = 29;
	public static readonly RULE_app_format = 30;
	public static readonly RULE_website_format = 31;
	public static readonly RULE_stillimagefilm_format = 32;
	public static readonly RULE_op_article_format = 33;
	public static readonly RULE_op_document_format = 34;
	public static readonly RULE_op_app_format = 35;
	public static readonly RULE_op_website_format = 36;
	public static readonly RULE_op_video_format = 37;
	public static readonly RULE_op_stillimagefilm_format = 38;
	public static readonly RULE_articlebit = 39;
	public static readonly RULE_documentbit = 40;
	public static readonly RULE_websitebit = 41;
	public static readonly RULE_appbit = 42;
	public static readonly RULE_stillimagefilmbit = 43;
	public static readonly RULE_stillimg_one = 44;
	public static readonly RULE_videobit = 45;
	public static readonly RULE_video_one = 46;
	public static readonly RULE_imagebit = 47;
	public static readonly RULE_image_one = 48;
	public static readonly RULE_op_image_format = 49;
	public static readonly RULE_image_chained = 50;
	public static readonly RULE_image_chained4match = 51;
	public static readonly RULE_audiobit = 52;
	public static readonly RULE_audio_one = 53;
	public static readonly RULE_audio_format = 54;
	public static readonly RULE_op_audio_format = 55;
	public static readonly RULE_resource_chained = 56;
	public static readonly RULE_telephone = 57;
	public static readonly RULE_url = 58;
	public static readonly RULE_item = 59;
	public static readonly RULE_lead = 60;
	public static readonly RULE_angleref = 61;
	public static readonly RULE_example = 62;
	public static readonly RULE_bracketed_text = 63;
	public static readonly RULE_reference = 64;
	public static readonly RULE_progress = 65;
	public static readonly RULE_dateprop = 66;
	public static readonly RULE_dateprop_chained = 67;
	public static readonly RULE_instruction = 68;
	public static readonly RULE_hint = 69;
	public static readonly RULE_title = 70;
	public static readonly RULE_bool_label = 71;
	public static readonly RULE_progress_points = 72;
	public static readonly RULE_istracked = 73;
	public static readonly RULE_isinfoonly = 74;
	public static readonly RULE_atdef = 75;
	public static readonly RULE_atdef_ = 76;
	public static readonly RULE_dollarans = 77;
	public static readonly RULE_anchor = 78;
	public static readonly RULE_dcolon = 79;
	public static readonly RULE_s_and_w = 80;
	public static readonly RULE_dclines = 81;
	public static readonly RULE_clnsp = 82;
	public static readonly RULE_sspl = 83;
	public static readonly RULE_words = 84;
	public static readonly RULE_sp = 85;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"bitmark", "bitmark_", "bit", "sequence", "seqstr", "minusminus", "menu_3_course", 
		"menu_list", "hspl_slot", "menu_text", "melem", "mtex", "footer", "bitElem", 
		"gap", "single_gap", "choice_plus", "choice_minus", "choice_star", "resource", 
		"bullet_item", "atpoint", "format", "resource_format", "resource_format_extra", 
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
		"atdef", "atdef_", "dollarans", "anchor", "dcolon", "s_and_w", "dclines", 
		"clnsp", "sspl", "words", "sp",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'[.'", undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, "'[#'", "']'", "':'", "'&'", "'::'", 
		"'+'", "'.@'", "'>'", "'<'", "'\u25BA'", "'\u2192'", "'.'", "'=='", undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, "'[@'", undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, "'http://'", "'https://'", 
		"'&audio'", "'&image'", "'&image-zoom'", "'&video'", "'&article'", "'&document'", 
		"'&app'", "'&website'", "'&still-image-film'", "'&pdf'", undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, "'&audio-link'", "'&image-link'", "'&video-link'", 
		"'&article-link'", "'&document-link'", "'&document-download'", "'&app-link'", 
		"'&website-link'", "'&still-image-film-link'", undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, "'&image-embed'", 
		"'&video-embed'", "'&daudio-embed'", "'&document-embed'", "'&still-image-film-embed'", 
		undefined, undefined, undefined, undefined, undefined, "':bitmark--'", 
		"':bitmark++'", "':text'", "':json'", "':prosemirror'", "':placeholder'", 
		"':basic'", "':jpg'", "':png'", "':gif'", "':svg'", "':mp2'", "':mp3'", 
		"':mp4'", "':flv'", "':wmv'", "':mpeg'", "':mpg'", "'tel:'", "'.article-attachment'", 
		"'*'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "OPDOT", "S", "BitSequence", "BitMenu3Course", "OPDOLL", "OPBUL", 
		"OPESC", "OPRANGLES", "OPRANGLEL", "OPDANGLE", "OPU", "OPB", "OPQ", "OPA", 
		"OPP", "OPM", "OPS", "OPR", "OPC", "OPITEM", "OPLEAD", "OPPAGENUMBER", 
		"OPMARGINNUMBER", "OPHASH", "CL", "COLON", "AMP", "DBLCOLON", "PLUS", 
		"DotAt", "Greater", "Less", "RightAngle", "RightArrow", "Dot", "DBLEQ", 
		"DMM", "HSPL", "SSPL", "SSPL2", "COMMENT", "DCANY", "Image_type", "Audio_type", 
		"Video_type", "ArticleText", "NOTCL", "NUMERIC", "STRING", "NL", "NOTBITMARK", 
		"ELIPSIS", "SENTENCE", "BARSTRING", "OPAT", "AtProgress", "AtReference", 
		"AtWidth", "AtHeight", "AtProgressPoints", "AtShortanswer", "AtLonganswer", 
		"AtExampleWithStr", "AtExamplecol", "AtExamplecl", "AtSampleSolution", 
		"AtPartialAnswerS", "AtPartialAnswer", "AtLabeltrue", "AtLabelfalse", 
		"AtPoints", "AtSrc", "AtPartner", "OPATALT", "OPAMARK", "ShowInIndex", 
		"OpAtCaption", "OpAtLicense", "OpAtCopyright", "OpAtSearch", "OpAtIsTracked", 
		"OpAtIsInfoOnly", "AtDate", "Http", "Https", "AmpAudio", "AmpImage", "AmpImageZoom", 
		"AmpVideo", "AmpArticle", "AmpDocument", "AmpApp", "AmpWebsite", "AmpStillImageFilm", 
		"AmpPdf", "OpAmpAudio", "OpAmpImage", "OpAmpImageZoom", "OpAmpVideo", 
		"OpAmpArticle", "OpAmpArticleAtt", "OpAmpDocument", "OpAmpApp", "OpAmpWebsite", 
		"OpAmpStillImageFilm", "BracEnclose", "AmpAudioLink", "AmpImageLink", 
		"AmpVideoLink", "AmpArticleLink", "AmpDocumentLink", "AmpDocumentDownload", 
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
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(sequenceParser._LITERAL_NAMES, sequenceParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return sequenceParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "sequenceParser.g4"; }

	// @Override
	public get ruleNames(): string[] { return sequenceParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return sequenceParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(sequenceParser._ATN, this);
	}
	// @RuleVersion(0)
	public bitmark(): BitmarkContext {
		let _localctx: BitmarkContext = new BitmarkContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, sequenceParser.RULE_bitmark);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 185;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 172;
				this.bitmark_();
				this.state = 182;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 1, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 176;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						while (_la === sequenceParser.S) {
							{
							{
							this.state = 173;
							this.match(sequenceParser.S);
							}
							}
							this.state = 178;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
						}
						this.state = 179;
						this.match(sequenceParser.NL);
						}
						}
					}
					this.state = 184;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 1, this._ctx);
				}
				}
				}
				this.state = 187;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === sequenceParser.BitSequence || _la === sequenceParser.BitMenu3Course);
			this.state = 192;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === sequenceParser.NL) {
				{
				{
				this.state = 189;
				this.match(sequenceParser.NL);
				}
				}
				this.state = 194;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 195;
			this.match(sequenceParser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 2, sequenceParser.RULE_bitmark_);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 197;
			this.bit();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public bit(): BitContext {
		let _localctx: BitContext = new BitContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, sequenceParser.RULE_bit);
		try {
			this.state = 201;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case sequenceParser.BitSequence:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 199;
				this.sequence();
				}
				break;
			case sequenceParser.BitMenu3Course:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 200;
				this.menu_3_course();
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
	public sequence(): SequenceContext {
		let _localctx: SequenceContext = new SequenceContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, sequenceParser.RULE_sequence);
		let _la: number;
		try {
			let _alt: number;
			this.state = 268;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 15, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 203;
				this.match(sequenceParser.BitSequence);
				this.state = 204;
				this.format();
				this.state = 205;
				this.match(sequenceParser.CL);
				this.state = 215;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 6, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 209;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						while (_la === sequenceParser.NL) {
							{
							{
							this.state = 206;
							this.match(sequenceParser.NL);
							}
							}
							this.state = 211;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
						}
						this.state = 212;
						this.bitElem();
						}
						}
					}
					this.state = 217;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 6, this._ctx);
				}
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 218;
				this.match(sequenceParser.BitSequence);
				this.state = 219;
				this.format();
				this.state = 220;
				this.match(sequenceParser.CL);
				this.state = 230;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 8, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 224;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						while (_la === sequenceParser.NL) {
							{
							{
							this.state = 221;
							this.match(sequenceParser.NL);
							}
							}
							this.state = 226;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
						}
						this.state = 227;
						this.bitElem();
						}
						}
					}
					this.state = 232;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 8, this._ctx);
				}
				this.state = 236;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === sequenceParser.NL) {
					{
					{
					this.state = 233;
					this.match(sequenceParser.NL);
					}
					}
					this.state = 238;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 239;
				this.match(sequenceParser.HSPL);
				this.state = 245;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 10, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 240;
						this.seqstr();
						this.state = 241;
						this.minusminus();
						}
						}
					}
					this.state = 247;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 10, this._ctx);
				}
				this.state = 248;
				this.seqstr();
				this.state = 249;
				this.match(sequenceParser.HSPL);
				this.state = 251;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 11, this._ctx) ) {
				case 1:
					{
					this.state = 250;
					this.footer();
					}
					break;
				}
				this.state = 266;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 14, this._ctx) ) {
				case 1:
					{
					this.state = 253;
					this.resource();
					this.state = 263;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 13, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 257;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
							while (_la === sequenceParser.NL) {
								{
								{
								this.state = 254;
								this.match(sequenceParser.NL);
								}
								}
								this.state = 259;
								this._errHandler.sync(this);
								_la = this._input.LA(1);
							}
							this.state = 260;
							this.resource();
							}
							}
						}
						this.state = 265;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 13, this._ctx);
					}
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
	public seqstr(): SeqstrContext {
		let _localctx: SeqstrContext = new SeqstrContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, sequenceParser.RULE_seqstr);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 276;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 17, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 270;
					this.bitElem();
					this.state = 272;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === sequenceParser.NL) {
						{
						this.state = 271;
						this.match(sequenceParser.NL);
						}
					}

					}
					}
				}
				this.state = 278;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 17, this._ctx);
			}
			this.state = 279;
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
	public minusminus(): MinusminusContext {
		let _localctx: MinusminusContext = new MinusminusContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, sequenceParser.RULE_minusminus);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 281;
			this.match(sequenceParser.DMM);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public menu_3_course(): Menu_3_courseContext {
		let _localctx: Menu_3_courseContext = new Menu_3_courseContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, sequenceParser.RULE_menu_3_course);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 283;
			this.match(sequenceParser.BitMenu3Course);
			this.state = 284;
			this.format();
			this.state = 285;
			this.match(sequenceParser.CL);
			this.state = 295;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 19, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 289;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === sequenceParser.NL) {
						{
						{
						this.state = 286;
						this.match(sequenceParser.NL);
						}
						}
						this.state = 291;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					this.state = 292;
					this.bitElem();
					}
					}
				}
				this.state = 297;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 19, this._ctx);
			}
			this.state = 301;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === sequenceParser.NL) {
				{
				{
				this.state = 298;
				this.match(sequenceParser.NL);
				}
				}
				this.state = 303;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 304;
			this.menu_list();
			this.state = 306;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 21, this._ctx) ) {
			case 1:
				{
				this.state = 305;
				this.footer();
				}
				break;
			}
			this.state = 321;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 24, this._ctx) ) {
			case 1:
				{
				this.state = 308;
				this.resource();
				this.state = 318;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 23, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 312;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						while (_la === sequenceParser.NL) {
							{
							{
							this.state = 309;
							this.match(sequenceParser.NL);
							}
							}
							this.state = 314;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
						}
						this.state = 315;
						this.resource();
						}
						}
					}
					this.state = 320;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 23, this._ctx);
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
	public menu_list(): Menu_listContext {
		let _localctx: Menu_listContext = new Menu_listContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, sequenceParser.RULE_menu_list);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 323;
			this.hspl_slot();
			this.state = 324;
			this.menu_text();
			this.state = 329;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 25, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 325;
					this.match(sequenceParser.HSPL);
					this.state = 326;
					this.menu_text();
					}
					}
				}
				this.state = 331;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 25, this._ctx);
			}
			this.state = 332;
			this.match(sequenceParser.HSPL);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public hspl_slot(): Hspl_slotContext {
		let _localctx: Hspl_slotContext = new Hspl_slotContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, sequenceParser.RULE_hspl_slot);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 334;
			this.match(sequenceParser.HSPL);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public menu_text(): Menu_textContext {
		let _localctx: Menu_textContext = new Menu_textContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, sequenceParser.RULE_menu_text);
		try {
			this.state = 338;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case sequenceParser.S:
			case sequenceParser.OPB:
			case sequenceParser.OPQ:
			case sequenceParser.OPA:
			case sequenceParser.OPS:
			case sequenceParser.COLON:
			case sequenceParser.AMP:
			case sequenceParser.Greater:
			case sequenceParser.Less:
			case sequenceParser.RightAngle:
			case sequenceParser.RightArrow:
			case sequenceParser.DBLEQ:
			case sequenceParser.NUMERIC:
			case sequenceParser.STRING:
			case sequenceParser.NOTBITMARK:
			case sequenceParser.ELIPSIS:
			case sequenceParser.SENTENCE:
			case sequenceParser.BARSTRING:
			case sequenceParser.AtExampleWithStr:
			case sequenceParser.AtExamplecol:
			case sequenceParser.AtExamplecl:
			case sequenceParser.AtSampleSolution:
			case sequenceParser.OpAtCopyright:
			case sequenceParser.AmpAudio:
			case sequenceParser.AmpImage:
			case sequenceParser.AmpVideo:
			case sequenceParser.AmpArticle:
			case sequenceParser.AmpDocument:
			case sequenceParser.AmpApp:
			case sequenceParser.AmpWebsite:
			case sequenceParser.AmpAudioLink:
			case sequenceParser.AmpImageLink:
			case sequenceParser.AmpArticleLink:
			case sequenceParser.AmpDocumentLink:
			case sequenceParser.BitmarkMinus:
			case sequenceParser.BitmarkPlus:
			case sequenceParser.URL:
			case sequenceParser.LIST_LINE:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 336;
				this.melem();
				}
				break;
			case sequenceParser.HSPL:
				this.enterOuterAlt(_localctx, 2);
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
	public melem(): MelemContext {
		let _localctx: MelemContext = new MelemContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, sequenceParser.RULE_melem);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 340;
			this.mtex();
			this.state = 344;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << sequenceParser.S) | (1 << sequenceParser.OPB) | (1 << sequenceParser.OPQ) | (1 << sequenceParser.OPA) | (1 << sequenceParser.OPS) | (1 << sequenceParser.COLON) | (1 << sequenceParser.AMP) | (1 << sequenceParser.Greater))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (sequenceParser.Less - 32)) | (1 << (sequenceParser.RightAngle - 32)) | (1 << (sequenceParser.RightArrow - 32)) | (1 << (sequenceParser.DBLEQ - 32)) | (1 << (sequenceParser.NUMERIC - 32)) | (1 << (sequenceParser.STRING - 32)) | (1 << (sequenceParser.NOTBITMARK - 32)) | (1 << (sequenceParser.ELIPSIS - 32)) | (1 << (sequenceParser.SENTENCE - 32)) | (1 << (sequenceParser.BARSTRING - 32)) | (1 << (sequenceParser.AtExampleWithStr - 32)))) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (sequenceParser.AtExamplecol - 64)) | (1 << (sequenceParser.AtExamplecl - 64)) | (1 << (sequenceParser.AtSampleSolution - 64)) | (1 << (sequenceParser.OpAtCopyright - 64)) | (1 << (sequenceParser.AmpAudio - 64)) | (1 << (sequenceParser.AmpImage - 64)) | (1 << (sequenceParser.AmpVideo - 64)) | (1 << (sequenceParser.AmpArticle - 64)) | (1 << (sequenceParser.AmpDocument - 64)) | (1 << (sequenceParser.AmpApp - 64)) | (1 << (sequenceParser.AmpWebsite - 64)))) !== 0) || ((((_la - 107)) & ~0x1F) === 0 && ((1 << (_la - 107)) & ((1 << (sequenceParser.AmpAudioLink - 107)) | (1 << (sequenceParser.AmpImageLink - 107)) | (1 << (sequenceParser.AmpArticleLink - 107)) | (1 << (sequenceParser.AmpDocumentLink - 107)) | (1 << (sequenceParser.BitmarkMinus - 107)) | (1 << (sequenceParser.BitmarkPlus - 107)))) !== 0) || _la === sequenceParser.URL || _la === sequenceParser.LIST_LINE) {
				{
				{
				this.state = 341;
				this.mtex();
				}
				}
				this.state = 346;
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
	public mtex(): MtexContext {
		let _localctx: MtexContext = new MtexContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, sequenceParser.RULE_mtex);
		let _la: number;
		try {
			this.state = 366;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case sequenceParser.S:
			case sequenceParser.OPS:
			case sequenceParser.COLON:
			case sequenceParser.AMP:
			case sequenceParser.Greater:
			case sequenceParser.Less:
			case sequenceParser.RightAngle:
			case sequenceParser.RightArrow:
			case sequenceParser.DBLEQ:
			case sequenceParser.NUMERIC:
			case sequenceParser.STRING:
			case sequenceParser.NOTBITMARK:
			case sequenceParser.ELIPSIS:
			case sequenceParser.SENTENCE:
			case sequenceParser.BARSTRING:
			case sequenceParser.AmpAudio:
			case sequenceParser.AmpImage:
			case sequenceParser.AmpVideo:
			case sequenceParser.AmpArticle:
			case sequenceParser.AmpDocument:
			case sequenceParser.AmpApp:
			case sequenceParser.AmpWebsite:
			case sequenceParser.AmpAudioLink:
			case sequenceParser.AmpImageLink:
			case sequenceParser.AmpArticleLink:
			case sequenceParser.AmpDocumentLink:
			case sequenceParser.BitmarkMinus:
			case sequenceParser.BitmarkPlus:
			case sequenceParser.URL:
			case sequenceParser.LIST_LINE:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 347;
				this.s_and_w();
				this.state = 351;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === sequenceParser.NL) {
					{
					{
					this.state = 348;
					this.match(sequenceParser.NL);
					}
					}
					this.state = 353;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
				break;
			case sequenceParser.OPB:
			case sequenceParser.OPQ:
			case sequenceParser.OPA:
			case sequenceParser.AtExampleWithStr:
			case sequenceParser.AtExamplecol:
			case sequenceParser.AtExamplecl:
			case sequenceParser.AtSampleSolution:
			case sequenceParser.OpAtCopyright:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 358;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case sequenceParser.OPB:
					{
					this.state = 354;
					this.instruction();
					}
					break;
				case sequenceParser.OPA:
				case sequenceParser.AtSampleSolution:
				case sequenceParser.OpAtCopyright:
					{
					this.state = 355;
					this.atdef();
					}
					break;
				case sequenceParser.OPQ:
					{
					this.state = 356;
					this.hint();
					}
					break;
				case sequenceParser.AtExampleWithStr:
				case sequenceParser.AtExamplecol:
				case sequenceParser.AtExamplecl:
					{
					this.state = 357;
					this.example();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 363;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === sequenceParser.NL) {
					{
					{
					this.state = 360;
					this.match(sequenceParser.NL);
					}
					}
					this.state = 365;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
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
	public footer(): FooterContext {
		let _localctx: FooterContext = new FooterContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, sequenceParser.RULE_footer);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 375;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 371;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === sequenceParser.NL) {
						{
						{
						this.state = 368;
						this.match(sequenceParser.NL);
						}
						}
						this.state = 373;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					this.state = 374;
					this.s_and_w();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 377;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 33, this._ctx);
			} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
			this.state = 380;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 379;
					this.match(sequenceParser.NL);
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 382;
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
	public bitElem(): BitElemContext {
		let _localctx: BitElemContext = new BitElemContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, sequenceParser.RULE_bitElem);
		try {
			this.state = 410;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 35, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 384;
				this.match(sequenceParser.LIST_LINE);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 385;
				this.match(sequenceParser.NOTBITMARK);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 386;
				this.dclines();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 387;
				this.gap();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 388;
				this.atdef();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 389;
				this.reference();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 390;
				this.dollarans();
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 391;
				this.item();
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 392;
				this.title();
				}
				break;

			case 10:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 393;
				this.instruction();
				}
				break;

			case 11:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 394;
				this.hint();
				}
				break;

			case 12:
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 395;
				this.s_and_w();
				}
				break;

			case 13:
				this.enterOuterAlt(_localctx, 13);
				{
				this.state = 396;
				this.example();
				}
				break;

			case 14:
				this.enterOuterAlt(_localctx, 14);
				{
				this.state = 397;
				this.bool_label();
				}
				break;

			case 15:
				this.enterOuterAlt(_localctx, 15);
				{
				this.state = 398;
				this.imagebit();
				}
				break;

			case 16:
				this.enterOuterAlt(_localctx, 16);
				{
				this.state = 399;
				this.audiobit();
				}
				break;

			case 17:
				this.enterOuterAlt(_localctx, 17);
				{
				this.state = 400;
				this.videobit();
				}
				break;

			case 18:
				this.enterOuterAlt(_localctx, 18);
				{
				this.state = 401;
				this.articlebit();
				}
				break;

			case 19:
				this.enterOuterAlt(_localctx, 19);
				{
				this.state = 402;
				this.documentbit();
				}
				break;

			case 20:
				this.enterOuterAlt(_localctx, 20);
				{
				this.state = 403;
				this.appbit();
				}
				break;

			case 21:
				this.enterOuterAlt(_localctx, 21);
				{
				this.state = 404;
				this.websitebit();
				}
				break;

			case 22:
				this.enterOuterAlt(_localctx, 22);
				{
				this.state = 405;
				this.stillimagefilmbit();
				}
				break;

			case 23:
				this.enterOuterAlt(_localctx, 23);
				{
				this.state = 406;
				this.angleref();
				}
				break;

			case 24:
				this.enterOuterAlt(_localctx, 24);
				{
				this.state = 407;
				this.anchor();
				}
				break;

			case 25:
				this.enterOuterAlt(_localctx, 25);
				{
				this.state = 408;
				this.bracketed_text();
				}
				break;

			case 26:
				this.enterOuterAlt(_localctx, 26);
				{
				this.state = 409;
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
	public gap(): GapContext {
		let _localctx: GapContext = new GapContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, sequenceParser.RULE_gap);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 412;
			this.single_gap();
			this.state = 420;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 37, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					this.state = 418;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case sequenceParser.OPU:
						{
						this.state = 413;
						this.single_gap();
						}
						break;
					case sequenceParser.OPB:
						{
						this.state = 414;
						this.instruction();
						}
						break;
					case sequenceParser.OPQ:
						{
						this.state = 415;
						this.hint();
						}
						break;
					case sequenceParser.OPC:
					case sequenceParser.OPITEM:
						{
						this.state = 416;
						this.item();
						}
						break;
					case sequenceParser.AtExampleWithStr:
					case sequenceParser.AtExamplecol:
					case sequenceParser.AtExamplecl:
						{
						this.state = 417;
						this.example();
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					}
				}
				this.state = 422;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 37, this._ctx);
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
		this.enterRule(_localctx, 30, sequenceParser.RULE_single_gap);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 423;
			this.match(sequenceParser.OPU);
			this.state = 427;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 38, this._ctx) ) {
			case 1:
				{
				this.state = 424;
				this.match(sequenceParser.NUMERIC);
				}
				break;

			case 2:
				{
				this.state = 425;
				this.match(sequenceParser.STRING);
				}
				break;

			case 3:
				// tslint:disable-next-line:no-empty
				{
				}
				break;
			}
			this.state = 432;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << sequenceParser.S) | (1 << sequenceParser.OPS) | (1 << sequenceParser.COLON) | (1 << sequenceParser.AMP) | (1 << sequenceParser.Greater))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (sequenceParser.Less - 32)) | (1 << (sequenceParser.RightAngle - 32)) | (1 << (sequenceParser.RightArrow - 32)) | (1 << (sequenceParser.DBLEQ - 32)) | (1 << (sequenceParser.NUMERIC - 32)) | (1 << (sequenceParser.STRING - 32)) | (1 << (sequenceParser.NOTBITMARK - 32)) | (1 << (sequenceParser.ELIPSIS - 32)) | (1 << (sequenceParser.SENTENCE - 32)) | (1 << (sequenceParser.BARSTRING - 32)))) !== 0) || ((((_la - 86)) & ~0x1F) === 0 && ((1 << (_la - 86)) & ((1 << (sequenceParser.AmpAudio - 86)) | (1 << (sequenceParser.AmpImage - 86)) | (1 << (sequenceParser.AmpVideo - 86)) | (1 << (sequenceParser.AmpArticle - 86)) | (1 << (sequenceParser.AmpDocument - 86)) | (1 << (sequenceParser.AmpApp - 86)) | (1 << (sequenceParser.AmpWebsite - 86)) | (1 << (sequenceParser.AmpAudioLink - 86)) | (1 << (sequenceParser.AmpImageLink - 86)) | (1 << (sequenceParser.AmpArticleLink - 86)) | (1 << (sequenceParser.AmpDocumentLink - 86)))) !== 0) || ((((_la - 135)) & ~0x1F) === 0 && ((1 << (_la - 135)) & ((1 << (sequenceParser.BitmarkMinus - 135)) | (1 << (sequenceParser.BitmarkPlus - 135)) | (1 << (sequenceParser.URL - 135)) | (1 << (sequenceParser.LIST_LINE - 135)))) !== 0)) {
				{
				{
				this.state = 429;
				this.s_and_w();
				}
				}
				this.state = 434;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 435;
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
	public choice_plus(): Choice_plusContext {
		let _localctx: Choice_plusContext = new Choice_plusContext(this._ctx, this.state);
		this.enterRule(_localctx, 32, sequenceParser.RULE_choice_plus);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 438;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === sequenceParser.OPC || _la === sequenceParser.OPITEM) {
				{
				this.state = 437;
				this.item();
				}
			}

			this.state = 440;
			this.match(sequenceParser.OPP);
			this.state = 442;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 441;
				this.s_and_w();
				}
				}
				this.state = 444;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << sequenceParser.S) | (1 << sequenceParser.OPS) | (1 << sequenceParser.COLON) | (1 << sequenceParser.AMP) | (1 << sequenceParser.Greater))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (sequenceParser.Less - 32)) | (1 << (sequenceParser.RightAngle - 32)) | (1 << (sequenceParser.RightArrow - 32)) | (1 << (sequenceParser.DBLEQ - 32)) | (1 << (sequenceParser.NUMERIC - 32)) | (1 << (sequenceParser.STRING - 32)) | (1 << (sequenceParser.NOTBITMARK - 32)) | (1 << (sequenceParser.ELIPSIS - 32)) | (1 << (sequenceParser.SENTENCE - 32)) | (1 << (sequenceParser.BARSTRING - 32)))) !== 0) || ((((_la - 86)) & ~0x1F) === 0 && ((1 << (_la - 86)) & ((1 << (sequenceParser.AmpAudio - 86)) | (1 << (sequenceParser.AmpImage - 86)) | (1 << (sequenceParser.AmpVideo - 86)) | (1 << (sequenceParser.AmpArticle - 86)) | (1 << (sequenceParser.AmpDocument - 86)) | (1 << (sequenceParser.AmpApp - 86)) | (1 << (sequenceParser.AmpWebsite - 86)) | (1 << (sequenceParser.AmpAudioLink - 86)) | (1 << (sequenceParser.AmpImageLink - 86)) | (1 << (sequenceParser.AmpArticleLink - 86)) | (1 << (sequenceParser.AmpDocumentLink - 86)))) !== 0) || ((((_la - 135)) & ~0x1F) === 0 && ((1 << (_la - 135)) & ((1 << (sequenceParser.BitmarkMinus - 135)) | (1 << (sequenceParser.BitmarkPlus - 135)) | (1 << (sequenceParser.URL - 135)) | (1 << (sequenceParser.LIST_LINE - 135)))) !== 0));
			this.state = 446;
			this.match(sequenceParser.CL);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public choice_minus(): Choice_minusContext {
		let _localctx: Choice_minusContext = new Choice_minusContext(this._ctx, this.state);
		this.enterRule(_localctx, 34, sequenceParser.RULE_choice_minus);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 449;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === sequenceParser.OPC || _la === sequenceParser.OPITEM) {
				{
				this.state = 448;
				this.item();
				}
			}

			this.state = 451;
			this.match(sequenceParser.OPM);
			this.state = 453;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 452;
				this.s_and_w();
				}
				}
				this.state = 455;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << sequenceParser.S) | (1 << sequenceParser.OPS) | (1 << sequenceParser.COLON) | (1 << sequenceParser.AMP) | (1 << sequenceParser.Greater))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (sequenceParser.Less - 32)) | (1 << (sequenceParser.RightAngle - 32)) | (1 << (sequenceParser.RightArrow - 32)) | (1 << (sequenceParser.DBLEQ - 32)) | (1 << (sequenceParser.NUMERIC - 32)) | (1 << (sequenceParser.STRING - 32)) | (1 << (sequenceParser.NOTBITMARK - 32)) | (1 << (sequenceParser.ELIPSIS - 32)) | (1 << (sequenceParser.SENTENCE - 32)) | (1 << (sequenceParser.BARSTRING - 32)))) !== 0) || ((((_la - 86)) & ~0x1F) === 0 && ((1 << (_la - 86)) & ((1 << (sequenceParser.AmpAudio - 86)) | (1 << (sequenceParser.AmpImage - 86)) | (1 << (sequenceParser.AmpVideo - 86)) | (1 << (sequenceParser.AmpArticle - 86)) | (1 << (sequenceParser.AmpDocument - 86)) | (1 << (sequenceParser.AmpApp - 86)) | (1 << (sequenceParser.AmpWebsite - 86)) | (1 << (sequenceParser.AmpAudioLink - 86)) | (1 << (sequenceParser.AmpImageLink - 86)) | (1 << (sequenceParser.AmpArticleLink - 86)) | (1 << (sequenceParser.AmpDocumentLink - 86)))) !== 0) || ((((_la - 135)) & ~0x1F) === 0 && ((1 << (_la - 135)) & ((1 << (sequenceParser.BitmarkMinus - 135)) | (1 << (sequenceParser.BitmarkPlus - 135)) | (1 << (sequenceParser.URL - 135)) | (1 << (sequenceParser.LIST_LINE - 135)))) !== 0));
			this.state = 457;
			this.match(sequenceParser.CL);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public choice_star(): Choice_starContext {
		let _localctx: Choice_starContext = new Choice_starContext(this._ctx, this.state);
		this.enterRule(_localctx, 36, sequenceParser.RULE_choice_star);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 460;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === sequenceParser.OPC || _la === sequenceParser.OPITEM) {
				{
				this.state = 459;
				this.item();
				}
			}

			this.state = 462;
			this.match(sequenceParser.OPR);
			this.state = 464;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 463;
				this.s_and_w();
				}
				}
				this.state = 466;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << sequenceParser.S) | (1 << sequenceParser.OPS) | (1 << sequenceParser.COLON) | (1 << sequenceParser.AMP) | (1 << sequenceParser.Greater))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (sequenceParser.Less - 32)) | (1 << (sequenceParser.RightAngle - 32)) | (1 << (sequenceParser.RightArrow - 32)) | (1 << (sequenceParser.DBLEQ - 32)) | (1 << (sequenceParser.NUMERIC - 32)) | (1 << (sequenceParser.STRING - 32)) | (1 << (sequenceParser.NOTBITMARK - 32)) | (1 << (sequenceParser.ELIPSIS - 32)) | (1 << (sequenceParser.SENTENCE - 32)) | (1 << (sequenceParser.BARSTRING - 32)))) !== 0) || ((((_la - 86)) & ~0x1F) === 0 && ((1 << (_la - 86)) & ((1 << (sequenceParser.AmpAudio - 86)) | (1 << (sequenceParser.AmpImage - 86)) | (1 << (sequenceParser.AmpVideo - 86)) | (1 << (sequenceParser.AmpArticle - 86)) | (1 << (sequenceParser.AmpDocument - 86)) | (1 << (sequenceParser.AmpApp - 86)) | (1 << (sequenceParser.AmpWebsite - 86)) | (1 << (sequenceParser.AmpAudioLink - 86)) | (1 << (sequenceParser.AmpImageLink - 86)) | (1 << (sequenceParser.AmpArticleLink - 86)) | (1 << (sequenceParser.AmpDocumentLink - 86)))) !== 0) || ((((_la - 135)) & ~0x1F) === 0 && ((1 << (_la - 135)) & ((1 << (sequenceParser.BitmarkMinus - 135)) | (1 << (sequenceParser.BitmarkPlus - 135)) | (1 << (sequenceParser.URL - 135)) | (1 << (sequenceParser.LIST_LINE - 135)))) !== 0));
			this.state = 468;
			this.match(sequenceParser.CL);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 38, sequenceParser.RULE_resource);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 470;
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
	public bullet_item(): Bullet_itemContext {
		let _localctx: Bullet_itemContext = new Bullet_itemContext(this._ctx, this.state);
		this.enterRule(_localctx, 40, sequenceParser.RULE_bullet_item);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 472;
			this.match(sequenceParser.OPBUL);
			this.state = 473;
			this.s_and_w();
			this.state = 474;
			this.match(sequenceParser.CL);
			this.state = 476;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === sequenceParser.AtPoints) {
				{
				this.state = 475;
				this.atpoint();
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
	public atpoint(): AtpointContext {
		let _localctx: AtpointContext = new AtpointContext(this._ctx, this.state);
		this.enterRule(_localctx, 42, sequenceParser.RULE_atpoint);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 478;
			this.match(sequenceParser.AtPoints);
			this.state = 479;
			this.match(sequenceParser.NUMERIC);
			this.state = 480;
			this.match(sequenceParser.CL);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 44, sequenceParser.RULE_format);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 485;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 47, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 482;
					this.resource_format();
					}
					}
				}
				this.state = 487;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 47, this._ctx);
			}
			this.state = 493;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 86)) & ~0x1F) === 0 && ((1 << (_la - 86)) & ((1 << (sequenceParser.AmpAudio - 86)) | (1 << (sequenceParser.AmpImage - 86)) | (1 << (sequenceParser.AmpImageZoom - 86)) | (1 << (sequenceParser.AmpVideo - 86)) | (1 << (sequenceParser.AmpArticle - 86)) | (1 << (sequenceParser.AmpDocument - 86)) | (1 << (sequenceParser.AmpApp - 86)) | (1 << (sequenceParser.AmpWebsite - 86)) | (1 << (sequenceParser.AmpStillImageFilm - 86)) | (1 << (sequenceParser.AmpPdf - 86)) | (1 << (sequenceParser.AmpAudioLink - 86)) | (1 << (sequenceParser.AmpImageLink - 86)) | (1 << (sequenceParser.AmpVideoLink - 86)) | (1 << (sequenceParser.AmpArticleLink - 86)) | (1 << (sequenceParser.AmpDocumentLink - 86)) | (1 << (sequenceParser.AmpDocumentDownload - 86)) | (1 << (sequenceParser.AmpAppLink - 86)) | (1 << (sequenceParser.AmpWebsiteLink - 86)) | (1 << (sequenceParser.AmpStillImageFilmLink - 86)))) !== 0) || ((((_la - 126)) & ~0x1F) === 0 && ((1 << (_la - 126)) & ((1 << (sequenceParser.AmpVideoEmbed - 126)) | (1 << (sequenceParser.AmpDocumentEmbed - 126)) | (1 << (sequenceParser.AmpStillImageFilmEmbed - 126)) | (1 << (sequenceParser.ColonText - 126)) | (1 << (sequenceParser.ColonJson - 126)))) !== 0)) {
				{
				this.state = 491;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case sequenceParser.ColonText:
					{
					this.state = 488;
					this.match(sequenceParser.ColonText);
					}
					break;
				case sequenceParser.ColonJson:
					{
					this.state = 489;
					this.match(sequenceParser.ColonJson);
					}
					break;
				case sequenceParser.AmpAudio:
				case sequenceParser.AmpImage:
				case sequenceParser.AmpImageZoom:
				case sequenceParser.AmpVideo:
				case sequenceParser.AmpArticle:
				case sequenceParser.AmpDocument:
				case sequenceParser.AmpApp:
				case sequenceParser.AmpWebsite:
				case sequenceParser.AmpStillImageFilm:
				case sequenceParser.AmpPdf:
				case sequenceParser.AmpAudioLink:
				case sequenceParser.AmpImageLink:
				case sequenceParser.AmpVideoLink:
				case sequenceParser.AmpArticleLink:
				case sequenceParser.AmpDocumentLink:
				case sequenceParser.AmpDocumentDownload:
				case sequenceParser.AmpAppLink:
				case sequenceParser.AmpWebsiteLink:
				case sequenceParser.AmpStillImageFilmLink:
				case sequenceParser.AmpVideoEmbed:
				case sequenceParser.AmpDocumentEmbed:
				case sequenceParser.AmpStillImageFilmEmbed:
					{
					this.state = 490;
					this.resource_format_extra();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				this.state = 495;
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
		this.enterRule(_localctx, 46, sequenceParser.RULE_resource_format);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 496;
			_la = this._input.LA(1);
			if (!(((((_la - 90)) & ~0x1F) === 0 && ((1 << (_la - 90)) & ((1 << (sequenceParser.AmpArticle - 90)) | (1 << (sequenceParser.AmpDocument - 90)) | (1 << (sequenceParser.AmpWebsite - 90)) | (1 << (sequenceParser.AmpStillImageFilm - 90)) | (1 << (sequenceParser.AmpAudioLink - 90)) | (1 << (sequenceParser.AmpImageLink - 90)) | (1 << (sequenceParser.AmpVideoLink - 90)) | (1 << (sequenceParser.AmpArticleLink - 90)) | (1 << (sequenceParser.AmpDocumentLink - 90)) | (1 << (sequenceParser.AmpDocumentDownload - 90)) | (1 << (sequenceParser.AmpAppLink - 90)) | (1 << (sequenceParser.AmpWebsiteLink - 90)) | (1 << (sequenceParser.AmpStillImageFilmLink - 90)))) !== 0) || ((((_la - 126)) & ~0x1F) === 0 && ((1 << (_la - 126)) & ((1 << (sequenceParser.AmpVideoEmbed - 126)) | (1 << (sequenceParser.AmpAudioEmbed - 126)) | (1 << (sequenceParser.AmpDocumentEmbed - 126)) | (1 << (sequenceParser.AmpStillImageFilmEmbed - 126)) | (1 << (sequenceParser.BitmarkMinus - 126)) | (1 << (sequenceParser.BitmarkPlus - 126)) | (1 << (sequenceParser.ColonJson - 126)) | (1 << (sequenceParser.Prosemirror - 126)) | (1 << (sequenceParser.Placeholder - 126)))) !== 0))) {
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
		this.enterRule(_localctx, 48, sequenceParser.RULE_resource_format_extra);
		try {
			this.state = 507;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case sequenceParser.AmpImage:
			case sequenceParser.AmpImageZoom:
			case sequenceParser.AmpImageLink:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 498;
				this.image_format();
				}
				break;
			case sequenceParser.AmpAudio:
			case sequenceParser.AmpAudioLink:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 499;
				this.audio_format();
				}
				break;
			case sequenceParser.AmpVideo:
			case sequenceParser.AmpVideoLink:
			case sequenceParser.AmpVideoEmbed:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 500;
				this.video_format();
				}
				break;
			case sequenceParser.AmpArticle:
			case sequenceParser.AmpArticleLink:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 501;
				this.article_format();
				}
				break;
			case sequenceParser.AmpDocument:
			case sequenceParser.AmpDocumentLink:
			case sequenceParser.AmpDocumentDownload:
			case sequenceParser.AmpDocumentEmbed:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 502;
				this.document_format();
				}
				break;
			case sequenceParser.AmpApp:
			case sequenceParser.AmpAppLink:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 503;
				this.app_format();
				}
				break;
			case sequenceParser.AmpWebsite:
			case sequenceParser.AmpWebsiteLink:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 504;
				this.website_format();
				}
				break;
			case sequenceParser.AmpStillImageFilm:
			case sequenceParser.AmpStillImageFilmLink:
			case sequenceParser.AmpStillImageFilmEmbed:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 505;
				this.stillimagefilm_format();
				}
				break;
			case sequenceParser.AmpPdf:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 506;
				this.match(sequenceParser.AmpPdf);
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
		this.enterRule(_localctx, 50, sequenceParser.RULE_format2);
		try {
			this.state = 515;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case sequenceParser.BitmarkMinus:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 509;
				this.match(sequenceParser.BitmarkMinus);
				}
				break;
			case sequenceParser.BitmarkPlus:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 510;
				this.match(sequenceParser.BitmarkPlus);
				}
				break;
			case sequenceParser.ColonText:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 511;
				this.match(sequenceParser.ColonText);
				}
				break;
			case sequenceParser.Placeholder:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 512;
				this.match(sequenceParser.Placeholder);
				}
				break;
			case sequenceParser.ColonJson:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 513;
				this.match(sequenceParser.ColonJson);
				}
				break;
			case sequenceParser.EOF:
				this.enterOuterAlt(_localctx, 6);
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
		this.enterRule(_localctx, 52, sequenceParser.RULE_image_format);
		let _la: number;
		try {
			this.state = 530;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case sequenceParser.AmpImage:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 517;
				this.match(sequenceParser.AmpImage);
				this.state = 520;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case sequenceParser.Image_type:
					{
					{
					this.state = 518;
					this.match(sequenceParser.Image_type);
					}
					}
					break;
				case sequenceParser.DotArticleAtt:
					{
					{
					this.state = 519;
					this.match(sequenceParser.DotArticleAtt);
					}
					}
					break;
				case sequenceParser.CL:
				case sequenceParser.AmpAudio:
				case sequenceParser.AmpImage:
				case sequenceParser.AmpImageZoom:
				case sequenceParser.AmpVideo:
				case sequenceParser.AmpArticle:
				case sequenceParser.AmpDocument:
				case sequenceParser.AmpApp:
				case sequenceParser.AmpWebsite:
				case sequenceParser.AmpStillImageFilm:
				case sequenceParser.AmpPdf:
				case sequenceParser.AmpAudioLink:
				case sequenceParser.AmpImageLink:
				case sequenceParser.AmpVideoLink:
				case sequenceParser.AmpArticleLink:
				case sequenceParser.AmpDocumentLink:
				case sequenceParser.AmpDocumentDownload:
				case sequenceParser.AmpAppLink:
				case sequenceParser.AmpWebsiteLink:
				case sequenceParser.AmpStillImageFilmLink:
				case sequenceParser.AmpVideoEmbed:
				case sequenceParser.AmpDocumentEmbed:
				case sequenceParser.AmpStillImageFilmEmbed:
				case sequenceParser.ColonText:
				case sequenceParser.ColonJson:
					break;
				default:
					break;
				}
				}
				break;
			case sequenceParser.AmpImageLink:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 522;
				this.match(sequenceParser.AmpImageLink);
				this.state = 524;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === sequenceParser.Image_type) {
					{
					this.state = 523;
					this.match(sequenceParser.Image_type);
					}
				}

				}
				break;
			case sequenceParser.AmpImageZoom:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 526;
				this.match(sequenceParser.AmpImageZoom);
				this.state = 528;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === sequenceParser.Image_type) {
					{
					this.state = 527;
					this.match(sequenceParser.Image_type);
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
	public video_format(): Video_formatContext {
		let _localctx: Video_formatContext = new Video_formatContext(this._ctx, this.state);
		this.enterRule(_localctx, 54, sequenceParser.RULE_video_format);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 532;
			_la = this._input.LA(1);
			if (!(_la === sequenceParser.AmpVideo || _la === sequenceParser.AmpVideoLink || _la === sequenceParser.AmpVideoEmbed)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 535;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === sequenceParser.COLON) {
				{
				this.state = 533;
				this.match(sequenceParser.COLON);
				this.state = 534;
				this.match(sequenceParser.Video_type);
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
		this.enterRule(_localctx, 56, sequenceParser.RULE_article_format);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 537;
			_la = this._input.LA(1);
			if (!(_la === sequenceParser.AmpArticle || _la === sequenceParser.AmpArticleLink)) {
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
		this.enterRule(_localctx, 58, sequenceParser.RULE_document_format);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 539;
			_la = this._input.LA(1);
			if (!(((((_la - 91)) & ~0x1F) === 0 && ((1 << (_la - 91)) & ((1 << (sequenceParser.AmpDocument - 91)) | (1 << (sequenceParser.AmpDocumentLink - 91)) | (1 << (sequenceParser.AmpDocumentDownload - 91)))) !== 0) || _la === sequenceParser.AmpDocumentEmbed)) {
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
		this.enterRule(_localctx, 60, sequenceParser.RULE_app_format);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 541;
			_la = this._input.LA(1);
			if (!(_la === sequenceParser.AmpApp || _la === sequenceParser.AmpAppLink)) {
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
		this.enterRule(_localctx, 62, sequenceParser.RULE_website_format);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 543;
			_la = this._input.LA(1);
			if (!(_la === sequenceParser.AmpWebsite || _la === sequenceParser.AmpWebsiteLink)) {
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
		this.enterRule(_localctx, 64, sequenceParser.RULE_stillimagefilm_format);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 545;
			_la = this._input.LA(1);
			if (!(_la === sequenceParser.AmpStillImageFilm || _la === sequenceParser.AmpStillImageFilmLink || _la === sequenceParser.AmpStillImageFilmEmbed)) {
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
		this.enterRule(_localctx, 66, sequenceParser.RULE_op_article_format);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 547;
			_la = this._input.LA(1);
			if (!(_la === sequenceParser.OpAmpArticle || _la === sequenceParser.OpAmpArticleLink)) {
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
		this.enterRule(_localctx, 68, sequenceParser.RULE_op_document_format);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 549;
			_la = this._input.LA(1);
			if (!(((((_la - 102)) & ~0x1F) === 0 && ((1 << (_la - 102)) & ((1 << (sequenceParser.OpAmpDocument - 102)) | (1 << (sequenceParser.OpAmpDocumentLink - 102)) | (1 << (sequenceParser.OpAmpDocumentDownload - 102)) | (1 << (sequenceParser.OpAmpDocumentEmbed - 102)))) !== 0))) {
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
		this.enterRule(_localctx, 70, sequenceParser.RULE_op_app_format);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 551;
			_la = this._input.LA(1);
			if (!(_la === sequenceParser.OpAmpApp || _la === sequenceParser.OpAmpAppLink)) {
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
		this.enterRule(_localctx, 72, sequenceParser.RULE_op_website_format);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 553;
			_la = this._input.LA(1);
			if (!(_la === sequenceParser.OpAmpWebsite || _la === sequenceParser.OpAmpWebsiteLink)) {
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
		this.enterRule(_localctx, 74, sequenceParser.RULE_op_video_format);
		try {
			this.state = 570;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case sequenceParser.OpAmpVideo:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 555;
				this.match(sequenceParser.OpAmpVideo);
				this.state = 558;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 57, this._ctx) ) {
				case 1:
					{
					this.state = 556;
					this.match(sequenceParser.COLON);
					this.state = 557;
					this.match(sequenceParser.Video_type);
					}
					break;
				}
				}
				break;
			case sequenceParser.OpAmpVideoLink:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 560;
				this.match(sequenceParser.OpAmpVideoLink);
				this.state = 563;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 58, this._ctx) ) {
				case 1:
					{
					this.state = 561;
					this.match(sequenceParser.COLON);
					this.state = 562;
					this.match(sequenceParser.Video_type);
					}
					break;
				}
				}
				break;
			case sequenceParser.OpAmpVideoEmbed:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 565;
				this.match(sequenceParser.OpAmpVideoEmbed);
				this.state = 568;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 59, this._ctx) ) {
				case 1:
					{
					this.state = 566;
					this.match(sequenceParser.COLON);
					this.state = 567;
					this.match(sequenceParser.Video_type);
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
		this.enterRule(_localctx, 76, sequenceParser.RULE_op_stillimagefilm_format);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 572;
			_la = this._input.LA(1);
			if (!(((((_la - 105)) & ~0x1F) === 0 && ((1 << (_la - 105)) & ((1 << (sequenceParser.OpAmpStillImageFilm - 105)) | (1 << (sequenceParser.OpAmpStillImageFilmLink - 105)) | (1 << (sequenceParser.OpAmpStillImageFilmEmbed - 105)))) !== 0))) {
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
		this.enterRule(_localctx, 78, sequenceParser.RULE_articlebit);
		try {
			this.state = 580;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case sequenceParser.OpAmpArticle:
			case sequenceParser.OpAmpArticleLink:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 574;
				this.op_article_format();
				this.state = 575;
				this.match(sequenceParser.COLON);
				this.state = 576;
				this.url();
				this.state = 577;
				this.match(sequenceParser.CL);
				}
				break;
			case sequenceParser.ArticleText:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 579;
				this.match(sequenceParser.ArticleText);
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
		this.enterRule(_localctx, 80, sequenceParser.RULE_documentbit);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 582;
			this.op_document_format();
			this.state = 583;
			this.match(sequenceParser.COLON);
			this.state = 584;
			this.url();
			this.state = 585;
			this.match(sequenceParser.CL);
			this.state = 590;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === sequenceParser.OPATALT) {
				{
				this.state = 586;
				this.match(sequenceParser.OPATALT);
				this.state = 587;
				this.words();
				this.state = 588;
				this.match(sequenceParser.CL);
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
		this.enterRule(_localctx, 82, sequenceParser.RULE_websitebit);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 592;
			this.op_website_format();
			this.state = 593;
			this.match(sequenceParser.COLON);
			this.state = 594;
			this.url();
			this.state = 595;
			this.match(sequenceParser.CL);
			this.state = 600;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === sequenceParser.OPATALT) {
				{
				this.state = 596;
				this.match(sequenceParser.OPATALT);
				this.state = 597;
				this.words();
				this.state = 598;
				this.match(sequenceParser.CL);
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
		this.enterRule(_localctx, 84, sequenceParser.RULE_appbit);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 602;
			this.op_app_format();
			this.state = 603;
			this.match(sequenceParser.COLON);
			this.state = 606;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case sequenceParser.URL:
				{
				this.state = 604;
				this.url();
				}
				break;
			case sequenceParser.TEL:
				{
				this.state = 605;
				this.telephone();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 608;
			this.match(sequenceParser.CL);
			this.state = 613;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === sequenceParser.OPATALT) {
				{
				this.state = 609;
				this.match(sequenceParser.OPATALT);
				this.state = 610;
				this.words();
				this.state = 611;
				this.match(sequenceParser.CL);
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
		this.enterRule(_localctx, 86, sequenceParser.RULE_stillimagefilmbit);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 615;
			this.stillimg_one();
			this.state = 619;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 66, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 616;
					this.resource_chained();
					}
					}
				}
				this.state = 621;
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
	public stillimg_one(): Stillimg_oneContext {
		let _localctx: Stillimg_oneContext = new Stillimg_oneContext(this._ctx, this.state);
		this.enterRule(_localctx, 88, sequenceParser.RULE_stillimg_one);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 622;
			this.op_stillimagefilm_format();
			this.state = 623;
			this.match(sequenceParser.COLON);
			this.state = 627;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === sequenceParser.S) {
				{
				{
				this.state = 624;
				this.match(sequenceParser.S);
				}
				}
				this.state = 629;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 630;
			this.url();
			this.state = 631;
			this.match(sequenceParser.CL);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 90, sequenceParser.RULE_videobit);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 633;
			this.video_one();
			this.state = 637;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 68, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 634;
					this.resource_chained();
					}
					}
				}
				this.state = 639;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 68, this._ctx);
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
		this.enterRule(_localctx, 92, sequenceParser.RULE_video_one);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 640;
			this.op_video_format();
			this.state = 641;
			this.match(sequenceParser.COLON);
			this.state = 642;
			this.url();
			this.state = 643;
			this.match(sequenceParser.CL);
			this.state = 648;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 69, this._ctx) ) {
			case 1:
				{
				this.state = 644;
				this.match(sequenceParser.OPATALT);
				this.state = 645;
				this.words();
				this.state = 646;
				this.match(sequenceParser.CL);
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
		this.enterRule(_localctx, 94, sequenceParser.RULE_imagebit);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 650;
			this.image_one();
			this.state = 654;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 70, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 651;
					this.image_chained();
					}
					}
				}
				this.state = 656;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 70, this._ctx);
			}
			this.state = 659;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 71, this._ctx) ) {
			case 1:
				{
				this.state = 657;
				this.match(sequenceParser.NL);
				this.state = 658;
				this.match(sequenceParser.ShowInIndex);
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
		this.enterRule(_localctx, 96, sequenceParser.RULE_image_one);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 661;
			this.op_image_format();
			this.state = 662;
			this.match(sequenceParser.COLON);
			this.state = 666;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === sequenceParser.S) {
				{
				{
				this.state = 663;
				this.match(sequenceParser.S);
				}
				}
				this.state = 668;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 669;
			this.url();
			this.state = 670;
			this.match(sequenceParser.CL);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 98, sequenceParser.RULE_op_image_format);
		let _la: number;
		try {
			this.state = 685;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case sequenceParser.OpAmpImage:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 672;
				this.match(sequenceParser.OpAmpImage);
				this.state = 675;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case sequenceParser.Image_type:
					{
					{
					this.state = 673;
					this.match(sequenceParser.Image_type);
					}
					}
					break;
				case sequenceParser.DotArticleAtt:
					{
					{
					this.state = 674;
					this.match(sequenceParser.DotArticleAtt);
					}
					}
					break;
				case sequenceParser.COLON:
					break;
				default:
					break;
				}
				}
				break;
			case sequenceParser.OpAmpImageLink:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 677;
				this.match(sequenceParser.OpAmpImageLink);
				this.state = 679;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === sequenceParser.Image_type) {
					{
					this.state = 678;
					this.match(sequenceParser.Image_type);
					}
				}

				}
				break;
			case sequenceParser.OpAmpImageZoom:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 681;
				this.match(sequenceParser.OpAmpImageZoom);
				this.state = 683;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === sequenceParser.Image_type) {
					{
					this.state = 682;
					this.match(sequenceParser.Image_type);
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
	public image_chained(): Image_chainedContext {
		let _localctx: Image_chainedContext = new Image_chainedContext(this._ctx, this.state);
		this.enterRule(_localctx, 100, sequenceParser.RULE_image_chained);
		let _la: number;
		try {
			let _alt: number;
			this.state = 704;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case sequenceParser.AtSrc:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 687;
				this.match(sequenceParser.AtSrc);
				this.state = 688;
				this.match(sequenceParser.COLON);
				this.state = 689;
				this.url();
				this.state = 690;
				this.match(sequenceParser.CL);
				}
				break;
			case sequenceParser.AtWidth:
			case sequenceParser.AtHeight:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 692;
				_la = this._input.LA(1);
				if (!(_la === sequenceParser.AtWidth || _la === sequenceParser.AtHeight)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 693;
				this.match(sequenceParser.COLON);
				this.state = 694;
				this.match(sequenceParser.NUMERIC);
				this.state = 695;
				this.match(sequenceParser.CL);
				}
				break;
			case sequenceParser.OPATALT:
			case sequenceParser.OpAtCaption:
			case sequenceParser.OpAtLicense:
			case sequenceParser.OpAtCopyright:
			case sequenceParser.OpAtSearch:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 696;
				_la = this._input.LA(1);
				if (!(((((_la - 74)) & ~0x1F) === 0 && ((1 << (_la - 74)) & ((1 << (sequenceParser.OPATALT - 74)) | (1 << (sequenceParser.OpAtCaption - 74)) | (1 << (sequenceParser.OpAtLicense - 74)) | (1 << (sequenceParser.OpAtCopyright - 74)) | (1 << (sequenceParser.OpAtSearch - 74)))) !== 0))) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 700;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 77, this._ctx);
				while (_alt !== 1 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1 + 1) {
						{
						{
						this.state = 697;
						this.matchWildcard();
						}
						}
					}
					this.state = 702;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 77, this._ctx);
				}
				this.state = 703;
				this.match(sequenceParser.CL);
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
		this.enterRule(_localctx, 102, sequenceParser.RULE_image_chained4match);
		let _la: number;
		try {
			let _alt: number;
			this.state = 723;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case sequenceParser.AtSrc:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 706;
				this.match(sequenceParser.AtSrc);
				this.state = 707;
				this.match(sequenceParser.COLON);
				this.state = 708;
				this.url();
				this.state = 709;
				this.match(sequenceParser.CL);
				}
				break;
			case sequenceParser.AtWidth:
			case sequenceParser.AtHeight:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 711;
				_la = this._input.LA(1);
				if (!(_la === sequenceParser.AtWidth || _la === sequenceParser.AtHeight)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 712;
				this.match(sequenceParser.COLON);
				this.state = 713;
				this.match(sequenceParser.NUMERIC);
				this.state = 714;
				this.match(sequenceParser.CL);
				}
				break;
			case sequenceParser.OPATALT:
			case sequenceParser.OpAtCaption:
			case sequenceParser.OpAtLicense:
			case sequenceParser.OpAtCopyright:
			case sequenceParser.OpAtSearch:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 715;
				_la = this._input.LA(1);
				if (!(((((_la - 74)) & ~0x1F) === 0 && ((1 << (_la - 74)) & ((1 << (sequenceParser.OPATALT - 74)) | (1 << (sequenceParser.OpAtCaption - 74)) | (1 << (sequenceParser.OpAtLicense - 74)) | (1 << (sequenceParser.OpAtCopyright - 74)) | (1 << (sequenceParser.OpAtSearch - 74)))) !== 0))) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 719;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 79, this._ctx);
				while (_alt !== 1 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1 + 1) {
						{
						{
						this.state = 716;
						this.matchWildcard();
						}
						}
					}
					this.state = 721;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 79, this._ctx);
				}
				this.state = 722;
				this.match(sequenceParser.CL);
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
		this.enterRule(_localctx, 104, sequenceParser.RULE_audiobit);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 725;
			this.audio_one();
			this.state = 729;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 81, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 726;
					this.resource_chained();
					}
					}
				}
				this.state = 731;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 81, this._ctx);
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
		this.enterRule(_localctx, 106, sequenceParser.RULE_audio_one);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 732;
			this.op_audio_format();
			this.state = 733;
			this.match(sequenceParser.COLON);
			this.state = 734;
			this.url();
			this.state = 735;
			this.match(sequenceParser.CL);
			this.state = 740;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 82, this._ctx) ) {
			case 1:
				{
				this.state = 736;
				this.match(sequenceParser.OPATALT);
				this.state = 737;
				this.words();
				this.state = 738;
				this.match(sequenceParser.CL);
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
		this.enterRule(_localctx, 108, sequenceParser.RULE_audio_format);
		let _la: number;
		try {
			this.state = 752;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case sequenceParser.AmpAudio:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 742;
				this.match(sequenceParser.AmpAudio);
				this.state = 745;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === sequenceParser.COLON) {
					{
					this.state = 743;
					this.match(sequenceParser.COLON);
					this.state = 744;
					this.match(sequenceParser.Audio_type);
					}
				}

				}
				break;
			case sequenceParser.AmpAudioLink:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 747;
				this.match(sequenceParser.AmpAudioLink);
				this.state = 750;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === sequenceParser.COLON) {
					{
					this.state = 748;
					this.match(sequenceParser.COLON);
					this.state = 749;
					this.match(sequenceParser.Audio_type);
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
		this.enterRule(_localctx, 110, sequenceParser.RULE_op_audio_format);
		try {
			this.state = 769;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case sequenceParser.OpAmpAudio:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 754;
				this.match(sequenceParser.OpAmpAudio);
				this.state = 757;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 86, this._ctx) ) {
				case 1:
					{
					this.state = 755;
					this.match(sequenceParser.COLON);
					this.state = 756;
					this.match(sequenceParser.Audio_type);
					}
					break;
				}
				}
				break;
			case sequenceParser.OpAmpAudioLink:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 759;
				this.match(sequenceParser.OpAmpAudioLink);
				this.state = 762;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 87, this._ctx) ) {
				case 1:
					{
					this.state = 760;
					this.match(sequenceParser.COLON);
					this.state = 761;
					this.match(sequenceParser.Audio_type);
					}
					break;
				}
				}
				break;
			case sequenceParser.OpAmpAudioEmbed:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 764;
				this.match(sequenceParser.OpAmpAudioEmbed);
				this.state = 767;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 88, this._ctx) ) {
				case 1:
					{
					this.state = 765;
					this.match(sequenceParser.COLON);
					this.state = 766;
					this.match(sequenceParser.Audio_type);
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
		this.enterRule(_localctx, 112, sequenceParser.RULE_resource_chained);
		let _la: number;
		try {
			let _alt: number;
			this.state = 802;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case sequenceParser.OPA:
			case sequenceParser.AtSrc:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 774;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case sequenceParser.OPA:
					{
					this.state = 771;
					this.match(sequenceParser.OPA);
					this.state = 772;
					this.s_and_w();
					}
					break;
				case sequenceParser.AtSrc:
					{
					this.state = 773;
					this.match(sequenceParser.AtSrc);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 776;
				this.match(sequenceParser.COLON);
				this.state = 780;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 91, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 777;
						this.match(sequenceParser.S);
						}
						}
					}
					this.state = 782;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 91, this._ctx);
				}
				this.state = 785;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					this.state = 785;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case sequenceParser.S:
					case sequenceParser.OPS:
					case sequenceParser.COLON:
					case sequenceParser.AMP:
					case sequenceParser.Greater:
					case sequenceParser.Less:
					case sequenceParser.RightAngle:
					case sequenceParser.RightArrow:
					case sequenceParser.DBLEQ:
					case sequenceParser.NUMERIC:
					case sequenceParser.STRING:
					case sequenceParser.NOTBITMARK:
					case sequenceParser.ELIPSIS:
					case sequenceParser.SENTENCE:
					case sequenceParser.BARSTRING:
					case sequenceParser.AmpAudio:
					case sequenceParser.AmpImage:
					case sequenceParser.AmpVideo:
					case sequenceParser.AmpArticle:
					case sequenceParser.AmpDocument:
					case sequenceParser.AmpApp:
					case sequenceParser.AmpWebsite:
					case sequenceParser.AmpAudioLink:
					case sequenceParser.AmpImageLink:
					case sequenceParser.AmpArticleLink:
					case sequenceParser.AmpDocumentLink:
					case sequenceParser.BitmarkMinus:
					case sequenceParser.BitmarkPlus:
					case sequenceParser.URL:
					case sequenceParser.LIST_LINE:
						{
						this.state = 783;
						this.s_and_w();
						}
						break;
					case sequenceParser.NL:
						{
						this.state = 784;
						this.match(sequenceParser.NL);
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					}
					this.state = 787;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << sequenceParser.S) | (1 << sequenceParser.OPS) | (1 << sequenceParser.COLON) | (1 << sequenceParser.AMP) | (1 << sequenceParser.Greater))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (sequenceParser.Less - 32)) | (1 << (sequenceParser.RightAngle - 32)) | (1 << (sequenceParser.RightArrow - 32)) | (1 << (sequenceParser.DBLEQ - 32)) | (1 << (sequenceParser.NUMERIC - 32)) | (1 << (sequenceParser.STRING - 32)) | (1 << (sequenceParser.NL - 32)) | (1 << (sequenceParser.NOTBITMARK - 32)) | (1 << (sequenceParser.ELIPSIS - 32)) | (1 << (sequenceParser.SENTENCE - 32)) | (1 << (sequenceParser.BARSTRING - 32)))) !== 0) || ((((_la - 86)) & ~0x1F) === 0 && ((1 << (_la - 86)) & ((1 << (sequenceParser.AmpAudio - 86)) | (1 << (sequenceParser.AmpImage - 86)) | (1 << (sequenceParser.AmpVideo - 86)) | (1 << (sequenceParser.AmpArticle - 86)) | (1 << (sequenceParser.AmpDocument - 86)) | (1 << (sequenceParser.AmpApp - 86)) | (1 << (sequenceParser.AmpWebsite - 86)) | (1 << (sequenceParser.AmpAudioLink - 86)) | (1 << (sequenceParser.AmpImageLink - 86)) | (1 << (sequenceParser.AmpArticleLink - 86)) | (1 << (sequenceParser.AmpDocumentLink - 86)))) !== 0) || ((((_la - 135)) & ~0x1F) === 0 && ((1 << (_la - 135)) & ((1 << (sequenceParser.BitmarkMinus - 135)) | (1 << (sequenceParser.BitmarkPlus - 135)) | (1 << (sequenceParser.URL - 135)) | (1 << (sequenceParser.LIST_LINE - 135)))) !== 0));
				this.state = 789;
				this.match(sequenceParser.CL);
				}
				break;
			case sequenceParser.AtWidth:
			case sequenceParser.AtHeight:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 790;
				_la = this._input.LA(1);
				if (!(_la === sequenceParser.AtWidth || _la === sequenceParser.AtHeight)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 791;
				this.match(sequenceParser.COLON);
				this.state = 792;
				this.match(sequenceParser.NUMERIC);
				this.state = 793;
				this.match(sequenceParser.CL);
				}
				break;
			case sequenceParser.OPATALT:
			case sequenceParser.OpAtCaption:
			case sequenceParser.OpAtLicense:
			case sequenceParser.OpAtCopyright:
			case sequenceParser.OpAtSearch:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 794;
				_la = this._input.LA(1);
				if (!(((((_la - 74)) & ~0x1F) === 0 && ((1 << (_la - 74)) & ((1 << (sequenceParser.OPATALT - 74)) | (1 << (sequenceParser.OpAtCaption - 74)) | (1 << (sequenceParser.OpAtLicense - 74)) | (1 << (sequenceParser.OpAtCopyright - 74)) | (1 << (sequenceParser.OpAtSearch - 74)))) !== 0))) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 798;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 94, this._ctx);
				while (_alt !== 1 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1 + 1) {
						{
						{
						this.state = 795;
						this.matchWildcard();
						}
						}
					}
					this.state = 800;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 94, this._ctx);
				}
				this.state = 801;
				this.match(sequenceParser.CL);
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
		this.enterRule(_localctx, 114, sequenceParser.RULE_telephone);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 804;
			this.match(sequenceParser.TEL);
			this.state = 805;
			this.match(sequenceParser.PLUS);
			this.state = 806;
			this.match(sequenceParser.NUMERIC);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 116, sequenceParser.RULE_url);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 808;
			this.match(sequenceParser.URL);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 118, sequenceParser.RULE_item);
		let _la: number;
		try {
			let _alt: number;
			this.state = 848;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case sequenceParser.OPITEM:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 810;
				this.match(sequenceParser.OPITEM);
				this.state = 815;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << sequenceParser.S) | (1 << sequenceParser.OPS) | (1 << sequenceParser.COLON) | (1 << sequenceParser.AMP) | (1 << sequenceParser.Greater))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (sequenceParser.Less - 32)) | (1 << (sequenceParser.RightAngle - 32)) | (1 << (sequenceParser.RightArrow - 32)) | (1 << (sequenceParser.DBLEQ - 32)) | (1 << (sequenceParser.NUMERIC - 32)) | (1 << (sequenceParser.STRING - 32)) | (1 << (sequenceParser.NOTBITMARK - 32)) | (1 << (sequenceParser.ELIPSIS - 32)) | (1 << (sequenceParser.SENTENCE - 32)) | (1 << (sequenceParser.BARSTRING - 32)))) !== 0) || ((((_la - 86)) & ~0x1F) === 0 && ((1 << (_la - 86)) & ((1 << (sequenceParser.AmpAudio - 86)) | (1 << (sequenceParser.AmpImage - 86)) | (1 << (sequenceParser.AmpVideo - 86)) | (1 << (sequenceParser.AmpArticle - 86)) | (1 << (sequenceParser.AmpDocument - 86)) | (1 << (sequenceParser.AmpApp - 86)) | (1 << (sequenceParser.AmpWebsite - 86)) | (1 << (sequenceParser.AmpAudioLink - 86)) | (1 << (sequenceParser.AmpImageLink - 86)) | (1 << (sequenceParser.AmpArticleLink - 86)) | (1 << (sequenceParser.AmpDocumentLink - 86)))) !== 0) || ((((_la - 135)) & ~0x1F) === 0 && ((1 << (_la - 135)) & ((1 << (sequenceParser.BitmarkMinus - 135)) | (1 << (sequenceParser.BitmarkPlus - 135)) | (1 << (sequenceParser.URL - 135)) | (1 << (sequenceParser.LIST_LINE - 135)))) !== 0)) {
					{
					this.state = 813;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 96, this._ctx) ) {
					case 1:
						{
						this.state = 811;
						this.match(sequenceParser.COLON);
						}
						break;

					case 2:
						{
						this.state = 812;
						this.s_and_w();
						}
						break;
					}
					}
					this.state = 817;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 818;
				this.match(sequenceParser.CL);
				this.state = 828;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 99, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 822;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						while (_la === sequenceParser.S) {
							{
							{
							this.state = 819;
							this.match(sequenceParser.S);
							}
							}
							this.state = 824;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
						}
						this.state = 825;
						this.lead();
						}
						}
					}
					this.state = 830;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 99, this._ctx);
				}
				}
				break;
			case sequenceParser.OPC:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 831;
				this.match(sequenceParser.OPC);
				this.state = 833;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << sequenceParser.S) | (1 << sequenceParser.OPS) | (1 << sequenceParser.COLON) | (1 << sequenceParser.AMP) | (1 << sequenceParser.Greater))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (sequenceParser.Less - 32)) | (1 << (sequenceParser.RightAngle - 32)) | (1 << (sequenceParser.RightArrow - 32)) | (1 << (sequenceParser.DBLEQ - 32)) | (1 << (sequenceParser.NUMERIC - 32)) | (1 << (sequenceParser.STRING - 32)) | (1 << (sequenceParser.NOTBITMARK - 32)) | (1 << (sequenceParser.ELIPSIS - 32)) | (1 << (sequenceParser.SENTENCE - 32)) | (1 << (sequenceParser.BARSTRING - 32)))) !== 0) || ((((_la - 86)) & ~0x1F) === 0 && ((1 << (_la - 86)) & ((1 << (sequenceParser.AmpAudio - 86)) | (1 << (sequenceParser.AmpImage - 86)) | (1 << (sequenceParser.AmpVideo - 86)) | (1 << (sequenceParser.AmpArticle - 86)) | (1 << (sequenceParser.AmpDocument - 86)) | (1 << (sequenceParser.AmpApp - 86)) | (1 << (sequenceParser.AmpWebsite - 86)) | (1 << (sequenceParser.AmpAudioLink - 86)) | (1 << (sequenceParser.AmpImageLink - 86)) | (1 << (sequenceParser.AmpArticleLink - 86)) | (1 << (sequenceParser.AmpDocumentLink - 86)))) !== 0) || ((((_la - 135)) & ~0x1F) === 0 && ((1 << (_la - 135)) & ((1 << (sequenceParser.BitmarkMinus - 135)) | (1 << (sequenceParser.BitmarkPlus - 135)) | (1 << (sequenceParser.URL - 135)) | (1 << (sequenceParser.LIST_LINE - 135)))) !== 0)) {
					{
					this.state = 832;
					this.s_and_w();
					}
				}

				this.state = 835;
				this.match(sequenceParser.CL);
				this.state = 845;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 102, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 839;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						while (_la === sequenceParser.S) {
							{
							{
							this.state = 836;
							this.match(sequenceParser.S);
							}
							}
							this.state = 841;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
						}
						this.state = 842;
						this.lead();
						}
						}
					}
					this.state = 847;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 102, this._ctx);
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
	public lead(): LeadContext {
		let _localctx: LeadContext = new LeadContext(this._ctx, this.state);
		this.enterRule(_localctx, 120, sequenceParser.RULE_lead);
		let _la: number;
		try {
			this.state = 895;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case sequenceParser.OPLEAD:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 850;
				this.match(sequenceParser.OPLEAD);
				this.state = 851;
				this.s_and_w();
				this.state = 856;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << sequenceParser.S) | (1 << sequenceParser.OPS) | (1 << sequenceParser.COLON) | (1 << sequenceParser.AMP) | (1 << sequenceParser.Greater))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (sequenceParser.Less - 32)) | (1 << (sequenceParser.RightAngle - 32)) | (1 << (sequenceParser.RightArrow - 32)) | (1 << (sequenceParser.DBLEQ - 32)) | (1 << (sequenceParser.NUMERIC - 32)) | (1 << (sequenceParser.STRING - 32)) | (1 << (sequenceParser.NOTBITMARK - 32)) | (1 << (sequenceParser.ELIPSIS - 32)) | (1 << (sequenceParser.SENTENCE - 32)) | (1 << (sequenceParser.BARSTRING - 32)))) !== 0) || ((((_la - 86)) & ~0x1F) === 0 && ((1 << (_la - 86)) & ((1 << (sequenceParser.AmpAudio - 86)) | (1 << (sequenceParser.AmpImage - 86)) | (1 << (sequenceParser.AmpVideo - 86)) | (1 << (sequenceParser.AmpArticle - 86)) | (1 << (sequenceParser.AmpDocument - 86)) | (1 << (sequenceParser.AmpApp - 86)) | (1 << (sequenceParser.AmpWebsite - 86)) | (1 << (sequenceParser.AmpAudioLink - 86)) | (1 << (sequenceParser.AmpImageLink - 86)) | (1 << (sequenceParser.AmpArticleLink - 86)) | (1 << (sequenceParser.AmpDocumentLink - 86)))) !== 0) || ((((_la - 135)) & ~0x1F) === 0 && ((1 << (_la - 135)) & ((1 << (sequenceParser.BitmarkMinus - 135)) | (1 << (sequenceParser.BitmarkPlus - 135)) | (1 << (sequenceParser.URL - 135)) | (1 << (sequenceParser.LIST_LINE - 135)))) !== 0)) {
					{
					this.state = 854;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 104, this._ctx) ) {
					case 1:
						{
						this.state = 852;
						this.match(sequenceParser.COLON);
						}
						break;

					case 2:
						{
						this.state = 853;
						this.s_and_w();
						}
						break;
					}
					}
					this.state = 858;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 859;
				this.match(sequenceParser.CL);
				}
				break;
			case sequenceParser.OPPAGENUMBER:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 861;
				this.match(sequenceParser.OPPAGENUMBER);
				this.state = 862;
				this.s_and_w();
				this.state = 867;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << sequenceParser.S) | (1 << sequenceParser.OPS) | (1 << sequenceParser.COLON) | (1 << sequenceParser.AMP) | (1 << sequenceParser.Greater))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (sequenceParser.Less - 32)) | (1 << (sequenceParser.RightAngle - 32)) | (1 << (sequenceParser.RightArrow - 32)) | (1 << (sequenceParser.DBLEQ - 32)) | (1 << (sequenceParser.NUMERIC - 32)) | (1 << (sequenceParser.STRING - 32)) | (1 << (sequenceParser.NOTBITMARK - 32)) | (1 << (sequenceParser.ELIPSIS - 32)) | (1 << (sequenceParser.SENTENCE - 32)) | (1 << (sequenceParser.BARSTRING - 32)))) !== 0) || ((((_la - 86)) & ~0x1F) === 0 && ((1 << (_la - 86)) & ((1 << (sequenceParser.AmpAudio - 86)) | (1 << (sequenceParser.AmpImage - 86)) | (1 << (sequenceParser.AmpVideo - 86)) | (1 << (sequenceParser.AmpArticle - 86)) | (1 << (sequenceParser.AmpDocument - 86)) | (1 << (sequenceParser.AmpApp - 86)) | (1 << (sequenceParser.AmpWebsite - 86)) | (1 << (sequenceParser.AmpAudioLink - 86)) | (1 << (sequenceParser.AmpImageLink - 86)) | (1 << (sequenceParser.AmpArticleLink - 86)) | (1 << (sequenceParser.AmpDocumentLink - 86)))) !== 0) || ((((_la - 135)) & ~0x1F) === 0 && ((1 << (_la - 135)) & ((1 << (sequenceParser.BitmarkMinus - 135)) | (1 << (sequenceParser.BitmarkPlus - 135)) | (1 << (sequenceParser.URL - 135)) | (1 << (sequenceParser.LIST_LINE - 135)))) !== 0)) {
					{
					this.state = 865;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 106, this._ctx) ) {
					case 1:
						{
						this.state = 863;
						this.match(sequenceParser.COLON);
						}
						break;

					case 2:
						{
						this.state = 864;
						this.s_and_w();
						}
						break;
					}
					}
					this.state = 869;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 870;
				this.match(sequenceParser.CL);
				}
				break;
			case sequenceParser.OPMARGINNUMBER:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 872;
				this.match(sequenceParser.OPMARGINNUMBER);
				this.state = 873;
				this.s_and_w();
				this.state = 878;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << sequenceParser.S) | (1 << sequenceParser.OPS) | (1 << sequenceParser.COLON) | (1 << sequenceParser.AMP) | (1 << sequenceParser.Greater))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (sequenceParser.Less - 32)) | (1 << (sequenceParser.RightAngle - 32)) | (1 << (sequenceParser.RightArrow - 32)) | (1 << (sequenceParser.DBLEQ - 32)) | (1 << (sequenceParser.NUMERIC - 32)) | (1 << (sequenceParser.STRING - 32)) | (1 << (sequenceParser.NOTBITMARK - 32)) | (1 << (sequenceParser.ELIPSIS - 32)) | (1 << (sequenceParser.SENTENCE - 32)) | (1 << (sequenceParser.BARSTRING - 32)))) !== 0) || ((((_la - 86)) & ~0x1F) === 0 && ((1 << (_la - 86)) & ((1 << (sequenceParser.AmpAudio - 86)) | (1 << (sequenceParser.AmpImage - 86)) | (1 << (sequenceParser.AmpVideo - 86)) | (1 << (sequenceParser.AmpArticle - 86)) | (1 << (sequenceParser.AmpDocument - 86)) | (1 << (sequenceParser.AmpApp - 86)) | (1 << (sequenceParser.AmpWebsite - 86)) | (1 << (sequenceParser.AmpAudioLink - 86)) | (1 << (sequenceParser.AmpImageLink - 86)) | (1 << (sequenceParser.AmpArticleLink - 86)) | (1 << (sequenceParser.AmpDocumentLink - 86)))) !== 0) || ((((_la - 135)) & ~0x1F) === 0 && ((1 << (_la - 135)) & ((1 << (sequenceParser.BitmarkMinus - 135)) | (1 << (sequenceParser.BitmarkPlus - 135)) | (1 << (sequenceParser.URL - 135)) | (1 << (sequenceParser.LIST_LINE - 135)))) !== 0)) {
					{
					this.state = 876;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 108, this._ctx) ) {
					case 1:
						{
						this.state = 874;
						this.match(sequenceParser.COLON);
						}
						break;

					case 2:
						{
						this.state = 875;
						this.s_and_w();
						}
						break;
					}
					}
					this.state = 880;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 881;
				this.match(sequenceParser.CL);
				}
				break;
			case sequenceParser.OPC:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 883;
				this.match(sequenceParser.OPC);
				this.state = 885;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 110, this._ctx) ) {
				case 1:
					{
					this.state = 884;
					this.s_and_w();
					}
					break;
				}
				this.state = 891;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << sequenceParser.S) | (1 << sequenceParser.OPS) | (1 << sequenceParser.COLON) | (1 << sequenceParser.AMP) | (1 << sequenceParser.Greater))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (sequenceParser.Less - 32)) | (1 << (sequenceParser.RightAngle - 32)) | (1 << (sequenceParser.RightArrow - 32)) | (1 << (sequenceParser.DBLEQ - 32)) | (1 << (sequenceParser.NUMERIC - 32)) | (1 << (sequenceParser.STRING - 32)) | (1 << (sequenceParser.NOTBITMARK - 32)) | (1 << (sequenceParser.ELIPSIS - 32)) | (1 << (sequenceParser.SENTENCE - 32)) | (1 << (sequenceParser.BARSTRING - 32)))) !== 0) || ((((_la - 86)) & ~0x1F) === 0 && ((1 << (_la - 86)) & ((1 << (sequenceParser.AmpAudio - 86)) | (1 << (sequenceParser.AmpImage - 86)) | (1 << (sequenceParser.AmpVideo - 86)) | (1 << (sequenceParser.AmpArticle - 86)) | (1 << (sequenceParser.AmpDocument - 86)) | (1 << (sequenceParser.AmpApp - 86)) | (1 << (sequenceParser.AmpWebsite - 86)) | (1 << (sequenceParser.AmpAudioLink - 86)) | (1 << (sequenceParser.AmpImageLink - 86)) | (1 << (sequenceParser.AmpArticleLink - 86)) | (1 << (sequenceParser.AmpDocumentLink - 86)))) !== 0) || ((((_la - 135)) & ~0x1F) === 0 && ((1 << (_la - 135)) & ((1 << (sequenceParser.BitmarkMinus - 135)) | (1 << (sequenceParser.BitmarkPlus - 135)) | (1 << (sequenceParser.URL - 135)) | (1 << (sequenceParser.LIST_LINE - 135)))) !== 0)) {
					{
					this.state = 889;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 111, this._ctx) ) {
					case 1:
						{
						this.state = 887;
						this.match(sequenceParser.COLON);
						}
						break;

					case 2:
						{
						this.state = 888;
						this.s_and_w();
						}
						break;
					}
					}
					this.state = 893;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 894;
				this.match(sequenceParser.CL);
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
	public angleref(): AnglerefContext {
		let _localctx: AnglerefContext = new AnglerefContext(this._ctx, this.state);
		this.enterRule(_localctx, 122, sequenceParser.RULE_angleref);
		let _la: number;
		try {
			this.state = 907;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case sequenceParser.OPRANGLES:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 897;
				this.match(sequenceParser.OPRANGLES);
				this.state = 899;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << sequenceParser.S) | (1 << sequenceParser.OPS) | (1 << sequenceParser.COLON) | (1 << sequenceParser.AMP) | (1 << sequenceParser.Greater))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (sequenceParser.Less - 32)) | (1 << (sequenceParser.RightAngle - 32)) | (1 << (sequenceParser.RightArrow - 32)) | (1 << (sequenceParser.DBLEQ - 32)) | (1 << (sequenceParser.NUMERIC - 32)) | (1 << (sequenceParser.STRING - 32)) | (1 << (sequenceParser.NOTBITMARK - 32)) | (1 << (sequenceParser.ELIPSIS - 32)) | (1 << (sequenceParser.SENTENCE - 32)) | (1 << (sequenceParser.BARSTRING - 32)))) !== 0) || ((((_la - 86)) & ~0x1F) === 0 && ((1 << (_la - 86)) & ((1 << (sequenceParser.AmpAudio - 86)) | (1 << (sequenceParser.AmpImage - 86)) | (1 << (sequenceParser.AmpVideo - 86)) | (1 << (sequenceParser.AmpArticle - 86)) | (1 << (sequenceParser.AmpDocument - 86)) | (1 << (sequenceParser.AmpApp - 86)) | (1 << (sequenceParser.AmpWebsite - 86)) | (1 << (sequenceParser.AmpAudioLink - 86)) | (1 << (sequenceParser.AmpImageLink - 86)) | (1 << (sequenceParser.AmpArticleLink - 86)) | (1 << (sequenceParser.AmpDocumentLink - 86)))) !== 0) || ((((_la - 135)) & ~0x1F) === 0 && ((1 << (_la - 135)) & ((1 << (sequenceParser.BitmarkMinus - 135)) | (1 << (sequenceParser.BitmarkPlus - 135)) | (1 << (sequenceParser.URL - 135)) | (1 << (sequenceParser.LIST_LINE - 135)))) !== 0)) {
					{
					this.state = 898;
					this.s_and_w();
					}
				}

				this.state = 901;
				this.match(sequenceParser.CL);
				}
				break;
			case sequenceParser.OPRANGLEL:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 902;
				this.match(sequenceParser.OPRANGLEL);
				this.state = 904;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << sequenceParser.S) | (1 << sequenceParser.OPS) | (1 << sequenceParser.COLON) | (1 << sequenceParser.AMP) | (1 << sequenceParser.Greater))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (sequenceParser.Less - 32)) | (1 << (sequenceParser.RightAngle - 32)) | (1 << (sequenceParser.RightArrow - 32)) | (1 << (sequenceParser.DBLEQ - 32)) | (1 << (sequenceParser.NUMERIC - 32)) | (1 << (sequenceParser.STRING - 32)) | (1 << (sequenceParser.NOTBITMARK - 32)) | (1 << (sequenceParser.ELIPSIS - 32)) | (1 << (sequenceParser.SENTENCE - 32)) | (1 << (sequenceParser.BARSTRING - 32)))) !== 0) || ((((_la - 86)) & ~0x1F) === 0 && ((1 << (_la - 86)) & ((1 << (sequenceParser.AmpAudio - 86)) | (1 << (sequenceParser.AmpImage - 86)) | (1 << (sequenceParser.AmpVideo - 86)) | (1 << (sequenceParser.AmpArticle - 86)) | (1 << (sequenceParser.AmpDocument - 86)) | (1 << (sequenceParser.AmpApp - 86)) | (1 << (sequenceParser.AmpWebsite - 86)) | (1 << (sequenceParser.AmpAudioLink - 86)) | (1 << (sequenceParser.AmpImageLink - 86)) | (1 << (sequenceParser.AmpArticleLink - 86)) | (1 << (sequenceParser.AmpDocumentLink - 86)))) !== 0) || ((((_la - 135)) & ~0x1F) === 0 && ((1 << (_la - 135)) & ((1 << (sequenceParser.BitmarkMinus - 135)) | (1 << (sequenceParser.BitmarkPlus - 135)) | (1 << (sequenceParser.URL - 135)) | (1 << (sequenceParser.LIST_LINE - 135)))) !== 0)) {
					{
					this.state = 903;
					this.s_and_w();
					}
				}

				this.state = 906;
				this.match(sequenceParser.CL);
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
		this.enterRule(_localctx, 124, sequenceParser.RULE_example);
		let _la: number;
		try {
			this.state = 916;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case sequenceParser.AtExamplecl:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 909;
				this.match(sequenceParser.AtExamplecl);
				}
				break;
			case sequenceParser.AtExampleWithStr:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 910;
				this.match(sequenceParser.AtExampleWithStr);
				}
				break;
			case sequenceParser.AtExamplecol:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 911;
				this.match(sequenceParser.AtExamplecol);
				this.state = 913;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === sequenceParser.SENTENCE) {
					{
					this.state = 912;
					this.match(sequenceParser.SENTENCE);
					}
				}

				this.state = 915;
				this.match(sequenceParser.EOF);
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
		this.enterRule(_localctx, 126, sequenceParser.RULE_bracketed_text);
		let _la: number;
		try {
			let _alt: number;
			this.state = 957;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 126, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 918;
				this.match(sequenceParser.BracEnclose);
				this.state = 920;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 119, this._ctx) ) {
				case 1:
					{
					this.state = 919;
					this.s_and_w();
					}
					break;
				}
				this.state = 943;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << sequenceParser.S) | (1 << sequenceParser.OPS) | (1 << sequenceParser.COLON) | (1 << sequenceParser.AMP) | (1 << sequenceParser.Greater))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (sequenceParser.Less - 32)) | (1 << (sequenceParser.RightAngle - 32)) | (1 << (sequenceParser.RightArrow - 32)) | (1 << (sequenceParser.DBLEQ - 32)) | (1 << (sequenceParser.NUMERIC - 32)) | (1 << (sequenceParser.STRING - 32)) | (1 << (sequenceParser.NOTBITMARK - 32)) | (1 << (sequenceParser.ELIPSIS - 32)) | (1 << (sequenceParser.SENTENCE - 32)) | (1 << (sequenceParser.BARSTRING - 32)))) !== 0) || ((((_la - 86)) & ~0x1F) === 0 && ((1 << (_la - 86)) & ((1 << (sequenceParser.AmpAudio - 86)) | (1 << (sequenceParser.AmpImage - 86)) | (1 << (sequenceParser.AmpVideo - 86)) | (1 << (sequenceParser.AmpArticle - 86)) | (1 << (sequenceParser.AmpDocument - 86)) | (1 << (sequenceParser.AmpApp - 86)) | (1 << (sequenceParser.AmpWebsite - 86)) | (1 << (sequenceParser.AmpAudioLink - 86)) | (1 << (sequenceParser.AmpImageLink - 86)) | (1 << (sequenceParser.AmpArticleLink - 86)) | (1 << (sequenceParser.AmpDocumentLink - 86)))) !== 0) || ((((_la - 135)) & ~0x1F) === 0 && ((1 << (_la - 135)) & ((1 << (sequenceParser.BitmarkMinus - 135)) | (1 << (sequenceParser.BitmarkPlus - 135)) | (1 << (sequenceParser.URL - 135)) | (1 << (sequenceParser.LIST_LINE - 135)))) !== 0)) {
					{
					{
					this.state = 922;
					this.s_and_w();
					this.state = 932;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 121, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 923;
							this.match(sequenceParser.NL);
							this.state = 927;
							this._errHandler.sync(this);
							_alt = this.interpreter.adaptivePredict(this._input, 120, this._ctx);
							while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
								if (_alt === 1) {
									{
									{
									this.state = 924;
									this.match(sequenceParser.S);
									}
									}
								}
								this.state = 929;
								this._errHandler.sync(this);
								_alt = this.interpreter.adaptivePredict(this._input, 120, this._ctx);
							}
							}
							}
						}
						this.state = 934;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 121, this._ctx);
					}
					this.state = 938;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === sequenceParser.NL) {
						{
						{
						this.state = 935;
						this.match(sequenceParser.NL);
						}
						}
						this.state = 940;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
					}
					this.state = 945;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 946;
				this.match(sequenceParser.CL);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 947;
				this.match(sequenceParser.BracEnclose);
				this.state = 953;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << sequenceParser.S) | (1 << sequenceParser.OPS) | (1 << sequenceParser.COLON) | (1 << sequenceParser.AMP) | (1 << sequenceParser.Greater))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (sequenceParser.Less - 32)) | (1 << (sequenceParser.RightAngle - 32)) | (1 << (sequenceParser.RightArrow - 32)) | (1 << (sequenceParser.DBLEQ - 32)) | (1 << (sequenceParser.NUMERIC - 32)) | (1 << (sequenceParser.STRING - 32)) | (1 << (sequenceParser.NL - 32)) | (1 << (sequenceParser.NOTBITMARK - 32)) | (1 << (sequenceParser.ELIPSIS - 32)) | (1 << (sequenceParser.SENTENCE - 32)) | (1 << (sequenceParser.BARSTRING - 32)))) !== 0) || ((((_la - 86)) & ~0x1F) === 0 && ((1 << (_la - 86)) & ((1 << (sequenceParser.AmpAudio - 86)) | (1 << (sequenceParser.AmpImage - 86)) | (1 << (sequenceParser.AmpVideo - 86)) | (1 << (sequenceParser.AmpArticle - 86)) | (1 << (sequenceParser.AmpDocument - 86)) | (1 << (sequenceParser.AmpApp - 86)) | (1 << (sequenceParser.AmpWebsite - 86)) | (1 << (sequenceParser.AmpAudioLink - 86)) | (1 << (sequenceParser.AmpImageLink - 86)) | (1 << (sequenceParser.AmpArticleLink - 86)) | (1 << (sequenceParser.AmpDocumentLink - 86)))) !== 0) || ((((_la - 135)) & ~0x1F) === 0 && ((1 << (_la - 135)) & ((1 << (sequenceParser.BitmarkMinus - 135)) | (1 << (sequenceParser.BitmarkPlus - 135)) | (1 << (sequenceParser.URL - 135)) | (1 << (sequenceParser.LIST_LINE - 135)))) !== 0)) {
					{
					this.state = 951;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 124, this._ctx) ) {
					case 1:
						{
						this.state = 948;
						this.s_and_w();
						}
						break;

					case 2:
						{
						this.state = 949;
						this.match(sequenceParser.NL);
						}
						break;

					case 3:
						{
						this.state = 950;
						this.match(sequenceParser.S);
						}
						break;
					}
					}
					this.state = 955;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 956;
				this.match(sequenceParser.EOF);
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
		this.enterRule(_localctx, 128, sequenceParser.RULE_reference);
		let _la: number;
		try {
			this.state = 981;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 131, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 959;
				this.match(sequenceParser.AtReference);
				this.state = 964;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					this.state = 964;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 127, this._ctx) ) {
					case 1:
						{
						this.state = 960;
						this.s_and_w();
						}
						break;

					case 2:
						{
						this.state = 961;
						this.match(sequenceParser.COLON);
						}
						break;

					case 3:
						{
						this.state = 962;
						this.match(sequenceParser.URL);
						}
						break;

					case 4:
						{
						this.state = 963;
						this.match(sequenceParser.NL);
						}
						break;
					}
					}
					this.state = 966;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << sequenceParser.S) | (1 << sequenceParser.OPS) | (1 << sequenceParser.COLON) | (1 << sequenceParser.AMP) | (1 << sequenceParser.Greater))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (sequenceParser.Less - 32)) | (1 << (sequenceParser.RightAngle - 32)) | (1 << (sequenceParser.RightArrow - 32)) | (1 << (sequenceParser.DBLEQ - 32)) | (1 << (sequenceParser.NUMERIC - 32)) | (1 << (sequenceParser.STRING - 32)) | (1 << (sequenceParser.NL - 32)) | (1 << (sequenceParser.NOTBITMARK - 32)) | (1 << (sequenceParser.ELIPSIS - 32)) | (1 << (sequenceParser.SENTENCE - 32)) | (1 << (sequenceParser.BARSTRING - 32)))) !== 0) || ((((_la - 86)) & ~0x1F) === 0 && ((1 << (_la - 86)) & ((1 << (sequenceParser.AmpAudio - 86)) | (1 << (sequenceParser.AmpImage - 86)) | (1 << (sequenceParser.AmpVideo - 86)) | (1 << (sequenceParser.AmpArticle - 86)) | (1 << (sequenceParser.AmpDocument - 86)) | (1 << (sequenceParser.AmpApp - 86)) | (1 << (sequenceParser.AmpWebsite - 86)) | (1 << (sequenceParser.AmpAudioLink - 86)) | (1 << (sequenceParser.AmpImageLink - 86)) | (1 << (sequenceParser.AmpArticleLink - 86)) | (1 << (sequenceParser.AmpDocumentLink - 86)))) !== 0) || ((((_la - 135)) & ~0x1F) === 0 && ((1 << (_la - 135)) & ((1 << (sequenceParser.BitmarkMinus - 135)) | (1 << (sequenceParser.BitmarkPlus - 135)) | (1 << (sequenceParser.URL - 135)) | (1 << (sequenceParser.LIST_LINE - 135)))) !== 0));
				this.state = 968;
				this.match(sequenceParser.CL);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 969;
				this.match(sequenceParser.AtReference);
				this.state = 977;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << sequenceParser.S) | (1 << sequenceParser.OPS) | (1 << sequenceParser.COLON) | (1 << sequenceParser.AMP) | (1 << sequenceParser.Greater))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (sequenceParser.Less - 32)) | (1 << (sequenceParser.RightAngle - 32)) | (1 << (sequenceParser.RightArrow - 32)) | (1 << (sequenceParser.DBLEQ - 32)) | (1 << (sequenceParser.NUMERIC - 32)) | (1 << (sequenceParser.STRING - 32)) | (1 << (sequenceParser.NL - 32)) | (1 << (sequenceParser.NOTBITMARK - 32)) | (1 << (sequenceParser.ELIPSIS - 32)) | (1 << (sequenceParser.SENTENCE - 32)) | (1 << (sequenceParser.BARSTRING - 32)))) !== 0) || ((((_la - 86)) & ~0x1F) === 0 && ((1 << (_la - 86)) & ((1 << (sequenceParser.AmpAudio - 86)) | (1 << (sequenceParser.AmpImage - 86)) | (1 << (sequenceParser.AmpVideo - 86)) | (1 << (sequenceParser.AmpArticle - 86)) | (1 << (sequenceParser.AmpDocument - 86)) | (1 << (sequenceParser.AmpApp - 86)) | (1 << (sequenceParser.AmpWebsite - 86)) | (1 << (sequenceParser.AmpAudioLink - 86)) | (1 << (sequenceParser.AmpImageLink - 86)) | (1 << (sequenceParser.AmpArticleLink - 86)) | (1 << (sequenceParser.AmpDocumentLink - 86)))) !== 0) || ((((_la - 135)) & ~0x1F) === 0 && ((1 << (_la - 135)) & ((1 << (sequenceParser.BitmarkMinus - 135)) | (1 << (sequenceParser.BitmarkPlus - 135)) | (1 << (sequenceParser.URL - 135)) | (1 << (sequenceParser.LIST_LINE - 135)))) !== 0)) {
					{
					this.state = 975;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 129, this._ctx) ) {
					case 1:
						{
						this.state = 970;
						this.s_and_w();
						}
						break;

					case 2:
						{
						this.state = 971;
						this.match(sequenceParser.COLON);
						}
						break;

					case 3:
						{
						this.state = 972;
						this.match(sequenceParser.URL);
						}
						break;

					case 4:
						{
						this.state = 973;
						this.match(sequenceParser.NL);
						}
						break;

					case 5:
						{
						this.state = 974;
						this.match(sequenceParser.S);
						}
						break;
					}
					}
					this.state = 979;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 980;
				this.match(sequenceParser.EOF);
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
		this.enterRule(_localctx, 130, sequenceParser.RULE_progress);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 983;
			this.match(sequenceParser.AtProgress);
			this.state = 984;
			this.s_and_w();
			this.state = 985;
			this.match(sequenceParser.CL);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 132, sequenceParser.RULE_dateprop);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 987;
			this.match(sequenceParser.AtDate);
			this.state = 991;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				this.state = 991;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 132, this._ctx) ) {
				case 1:
					{
					this.state = 988;
					this.s_and_w();
					}
					break;

				case 2:
					{
					this.state = 989;
					this.match(sequenceParser.COLON);
					}
					break;

				case 3:
					{
					this.state = 990;
					this.match(sequenceParser.NL);
					}
					break;
				}
				}
				this.state = 993;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << sequenceParser.S) | (1 << sequenceParser.OPS) | (1 << sequenceParser.COLON) | (1 << sequenceParser.AMP) | (1 << sequenceParser.Greater))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (sequenceParser.Less - 32)) | (1 << (sequenceParser.RightAngle - 32)) | (1 << (sequenceParser.RightArrow - 32)) | (1 << (sequenceParser.DBLEQ - 32)) | (1 << (sequenceParser.NUMERIC - 32)) | (1 << (sequenceParser.STRING - 32)) | (1 << (sequenceParser.NL - 32)) | (1 << (sequenceParser.NOTBITMARK - 32)) | (1 << (sequenceParser.ELIPSIS - 32)) | (1 << (sequenceParser.SENTENCE - 32)) | (1 << (sequenceParser.BARSTRING - 32)))) !== 0) || ((((_la - 86)) & ~0x1F) === 0 && ((1 << (_la - 86)) & ((1 << (sequenceParser.AmpAudio - 86)) | (1 << (sequenceParser.AmpImage - 86)) | (1 << (sequenceParser.AmpVideo - 86)) | (1 << (sequenceParser.AmpArticle - 86)) | (1 << (sequenceParser.AmpDocument - 86)) | (1 << (sequenceParser.AmpApp - 86)) | (1 << (sequenceParser.AmpWebsite - 86)) | (1 << (sequenceParser.AmpAudioLink - 86)) | (1 << (sequenceParser.AmpImageLink - 86)) | (1 << (sequenceParser.AmpArticleLink - 86)) | (1 << (sequenceParser.AmpDocumentLink - 86)))) !== 0) || ((((_la - 135)) & ~0x1F) === 0 && ((1 << (_la - 135)) & ((1 << (sequenceParser.BitmarkMinus - 135)) | (1 << (sequenceParser.BitmarkPlus - 135)) | (1 << (sequenceParser.URL - 135)) | (1 << (sequenceParser.LIST_LINE - 135)))) !== 0));
			this.state = 995;
			this.match(sequenceParser.CL);
			this.state = 997;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === sequenceParser.AtDate) {
				{
				this.state = 996;
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
		this.enterRule(_localctx, 134, sequenceParser.RULE_dateprop_chained);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 999;
			this.match(sequenceParser.AtDate);
			this.state = 1003;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				this.state = 1003;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 135, this._ctx) ) {
				case 1:
					{
					this.state = 1000;
					this.s_and_w();
					}
					break;

				case 2:
					{
					this.state = 1001;
					this.match(sequenceParser.COLON);
					}
					break;

				case 3:
					{
					this.state = 1002;
					this.match(sequenceParser.NL);
					}
					break;
				}
				}
				this.state = 1005;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << sequenceParser.S) | (1 << sequenceParser.OPS) | (1 << sequenceParser.COLON) | (1 << sequenceParser.AMP) | (1 << sequenceParser.Greater))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (sequenceParser.Less - 32)) | (1 << (sequenceParser.RightAngle - 32)) | (1 << (sequenceParser.RightArrow - 32)) | (1 << (sequenceParser.DBLEQ - 32)) | (1 << (sequenceParser.NUMERIC - 32)) | (1 << (sequenceParser.STRING - 32)) | (1 << (sequenceParser.NL - 32)) | (1 << (sequenceParser.NOTBITMARK - 32)) | (1 << (sequenceParser.ELIPSIS - 32)) | (1 << (sequenceParser.SENTENCE - 32)) | (1 << (sequenceParser.BARSTRING - 32)))) !== 0) || ((((_la - 86)) & ~0x1F) === 0 && ((1 << (_la - 86)) & ((1 << (sequenceParser.AmpAudio - 86)) | (1 << (sequenceParser.AmpImage - 86)) | (1 << (sequenceParser.AmpVideo - 86)) | (1 << (sequenceParser.AmpArticle - 86)) | (1 << (sequenceParser.AmpDocument - 86)) | (1 << (sequenceParser.AmpApp - 86)) | (1 << (sequenceParser.AmpWebsite - 86)) | (1 << (sequenceParser.AmpAudioLink - 86)) | (1 << (sequenceParser.AmpImageLink - 86)) | (1 << (sequenceParser.AmpArticleLink - 86)) | (1 << (sequenceParser.AmpDocumentLink - 86)))) !== 0) || ((((_la - 135)) & ~0x1F) === 0 && ((1 << (_la - 135)) & ((1 << (sequenceParser.BitmarkMinus - 135)) | (1 << (sequenceParser.BitmarkPlus - 135)) | (1 << (sequenceParser.URL - 135)) | (1 << (sequenceParser.LIST_LINE - 135)))) !== 0));
			this.state = 1007;
			this.match(sequenceParser.CL);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 136, sequenceParser.RULE_instruction);
		let _la: number;
		try {
			let _alt: number;
			this.state = 1055;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 145, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1009;
				this.match(sequenceParser.OPB);
				this.state = 1013;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 137, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 1010;
						this.match(sequenceParser.NL);
						}
						}
					}
					this.state = 1015;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 137, this._ctx);
				}
				this.state = 1017;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 138, this._ctx) ) {
				case 1:
					{
					this.state = 1016;
					this.s_and_w();
					}
					break;
				}
				this.state = 1034;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 141, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 1028;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						while (_la === sequenceParser.NL) {
							{
							{
							this.state = 1019;
							this.match(sequenceParser.NL);
							this.state = 1023;
							this._errHandler.sync(this);
							_alt = this.interpreter.adaptivePredict(this._input, 139, this._ctx);
							while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
								if (_alt === 1) {
									{
									{
									this.state = 1020;
									this.match(sequenceParser.S);
									}
									}
								}
								this.state = 1025;
								this._errHandler.sync(this);
								_alt = this.interpreter.adaptivePredict(this._input, 139, this._ctx);
							}
							}
							}
							this.state = 1030;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
						}
						this.state = 1031;
						this.s_and_w();
						}
						}
					}
					this.state = 1036;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 141, this._ctx);
				}
				this.state = 1040;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === sequenceParser.NL) {
					{
					{
					this.state = 1037;
					this.match(sequenceParser.NL);
					}
					}
					this.state = 1042;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1043;
				this.match(sequenceParser.CL);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1044;
				this.match(sequenceParser.OPB);
				this.state = 1048;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === sequenceParser.NL) {
					{
					{
					this.state = 1045;
					this.match(sequenceParser.NL);
					}
					}
					this.state = 1050;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1052;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << sequenceParser.S) | (1 << sequenceParser.OPS) | (1 << sequenceParser.COLON) | (1 << sequenceParser.AMP) | (1 << sequenceParser.Greater))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (sequenceParser.Less - 32)) | (1 << (sequenceParser.RightAngle - 32)) | (1 << (sequenceParser.RightArrow - 32)) | (1 << (sequenceParser.DBLEQ - 32)) | (1 << (sequenceParser.NUMERIC - 32)) | (1 << (sequenceParser.STRING - 32)) | (1 << (sequenceParser.NOTBITMARK - 32)) | (1 << (sequenceParser.ELIPSIS - 32)) | (1 << (sequenceParser.SENTENCE - 32)) | (1 << (sequenceParser.BARSTRING - 32)))) !== 0) || ((((_la - 86)) & ~0x1F) === 0 && ((1 << (_la - 86)) & ((1 << (sequenceParser.AmpAudio - 86)) | (1 << (sequenceParser.AmpImage - 86)) | (1 << (sequenceParser.AmpVideo - 86)) | (1 << (sequenceParser.AmpArticle - 86)) | (1 << (sequenceParser.AmpDocument - 86)) | (1 << (sequenceParser.AmpApp - 86)) | (1 << (sequenceParser.AmpWebsite - 86)) | (1 << (sequenceParser.AmpAudioLink - 86)) | (1 << (sequenceParser.AmpImageLink - 86)) | (1 << (sequenceParser.AmpArticleLink - 86)) | (1 << (sequenceParser.AmpDocumentLink - 86)))) !== 0) || ((((_la - 135)) & ~0x1F) === 0 && ((1 << (_la - 135)) & ((1 << (sequenceParser.BitmarkMinus - 135)) | (1 << (sequenceParser.BitmarkPlus - 135)) | (1 << (sequenceParser.URL - 135)) | (1 << (sequenceParser.LIST_LINE - 135)))) !== 0)) {
					{
					this.state = 1051;
					this.s_and_w();
					}
				}

				this.state = 1054;
				this.match(sequenceParser.EOF);
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
		this.enterRule(_localctx, 138, sequenceParser.RULE_hint);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1057;
			this.match(sequenceParser.OPQ);
			this.state = 1059;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 1058;
				_la = this._input.LA(1);
				if (_la <= 0 || (_la === sequenceParser.CL)) {
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
				this.state = 1061;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << sequenceParser.OPDOT) | (1 << sequenceParser.S) | (1 << sequenceParser.BitSequence) | (1 << sequenceParser.BitMenu3Course) | (1 << sequenceParser.OPDOLL) | (1 << sequenceParser.OPBUL) | (1 << sequenceParser.OPESC) | (1 << sequenceParser.OPRANGLES) | (1 << sequenceParser.OPRANGLEL) | (1 << sequenceParser.OPDANGLE) | (1 << sequenceParser.OPU) | (1 << sequenceParser.OPB) | (1 << sequenceParser.OPQ) | (1 << sequenceParser.OPA) | (1 << sequenceParser.OPP) | (1 << sequenceParser.OPM) | (1 << sequenceParser.OPS) | (1 << sequenceParser.OPR) | (1 << sequenceParser.OPC) | (1 << sequenceParser.OPITEM) | (1 << sequenceParser.OPLEAD) | (1 << sequenceParser.OPPAGENUMBER) | (1 << sequenceParser.OPMARGINNUMBER) | (1 << sequenceParser.OPHASH) | (1 << sequenceParser.COLON) | (1 << sequenceParser.AMP) | (1 << sequenceParser.DBLCOLON) | (1 << sequenceParser.PLUS) | (1 << sequenceParser.DotAt) | (1 << sequenceParser.Greater))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (sequenceParser.Less - 32)) | (1 << (sequenceParser.RightAngle - 32)) | (1 << (sequenceParser.RightArrow - 32)) | (1 << (sequenceParser.Dot - 32)) | (1 << (sequenceParser.DBLEQ - 32)) | (1 << (sequenceParser.DMM - 32)) | (1 << (sequenceParser.HSPL - 32)) | (1 << (sequenceParser.SSPL - 32)) | (1 << (sequenceParser.SSPL2 - 32)) | (1 << (sequenceParser.COMMENT - 32)) | (1 << (sequenceParser.DCANY - 32)) | (1 << (sequenceParser.Image_type - 32)) | (1 << (sequenceParser.Audio_type - 32)) | (1 << (sequenceParser.Video_type - 32)) | (1 << (sequenceParser.ArticleText - 32)) | (1 << (sequenceParser.NOTCL - 32)) | (1 << (sequenceParser.NUMERIC - 32)) | (1 << (sequenceParser.STRING - 32)) | (1 << (sequenceParser.NL - 32)) | (1 << (sequenceParser.NOTBITMARK - 32)) | (1 << (sequenceParser.ELIPSIS - 32)) | (1 << (sequenceParser.SENTENCE - 32)) | (1 << (sequenceParser.BARSTRING - 32)) | (1 << (sequenceParser.OPAT - 32)) | (1 << (sequenceParser.AtProgress - 32)) | (1 << (sequenceParser.AtReference - 32)) | (1 << (sequenceParser.AtWidth - 32)) | (1 << (sequenceParser.AtHeight - 32)) | (1 << (sequenceParser.AtProgressPoints - 32)) | (1 << (sequenceParser.AtShortanswer - 32)) | (1 << (sequenceParser.AtLonganswer - 32)) | (1 << (sequenceParser.AtExampleWithStr - 32)))) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (sequenceParser.AtExamplecol - 64)) | (1 << (sequenceParser.AtExamplecl - 64)) | (1 << (sequenceParser.AtSampleSolution - 64)) | (1 << (sequenceParser.AtPartialAnswerS - 64)) | (1 << (sequenceParser.AtPartialAnswer - 64)) | (1 << (sequenceParser.AtLabeltrue - 64)) | (1 << (sequenceParser.AtLabelfalse - 64)) | (1 << (sequenceParser.AtPoints - 64)) | (1 << (sequenceParser.AtSrc - 64)) | (1 << (sequenceParser.AtPartner - 64)) | (1 << (sequenceParser.OPATALT - 64)) | (1 << (sequenceParser.OPAMARK - 64)) | (1 << (sequenceParser.ShowInIndex - 64)) | (1 << (sequenceParser.OpAtCaption - 64)) | (1 << (sequenceParser.OpAtLicense - 64)) | (1 << (sequenceParser.OpAtCopyright - 64)) | (1 << (sequenceParser.OpAtSearch - 64)) | (1 << (sequenceParser.OpAtIsTracked - 64)) | (1 << (sequenceParser.OpAtIsInfoOnly - 64)) | (1 << (sequenceParser.AtDate - 64)) | (1 << (sequenceParser.Http - 64)) | (1 << (sequenceParser.Https - 64)) | (1 << (sequenceParser.AmpAudio - 64)) | (1 << (sequenceParser.AmpImage - 64)) | (1 << (sequenceParser.AmpImageZoom - 64)) | (1 << (sequenceParser.AmpVideo - 64)) | (1 << (sequenceParser.AmpArticle - 64)) | (1 << (sequenceParser.AmpDocument - 64)) | (1 << (sequenceParser.AmpApp - 64)) | (1 << (sequenceParser.AmpWebsite - 64)) | (1 << (sequenceParser.AmpStillImageFilm - 64)) | (1 << (sequenceParser.AmpPdf - 64)))) !== 0) || ((((_la - 96)) & ~0x1F) === 0 && ((1 << (_la - 96)) & ((1 << (sequenceParser.OpAmpAudio - 96)) | (1 << (sequenceParser.OpAmpImage - 96)) | (1 << (sequenceParser.OpAmpImageZoom - 96)) | (1 << (sequenceParser.OpAmpVideo - 96)) | (1 << (sequenceParser.OpAmpArticle - 96)) | (1 << (sequenceParser.OpAmpArticleAtt - 96)) | (1 << (sequenceParser.OpAmpDocument - 96)) | (1 << (sequenceParser.OpAmpApp - 96)) | (1 << (sequenceParser.OpAmpWebsite - 96)) | (1 << (sequenceParser.OpAmpStillImageFilm - 96)) | (1 << (sequenceParser.BracEnclose - 96)) | (1 << (sequenceParser.AmpAudioLink - 96)) | (1 << (sequenceParser.AmpImageLink - 96)) | (1 << (sequenceParser.AmpVideoLink - 96)) | (1 << (sequenceParser.AmpArticleLink - 96)) | (1 << (sequenceParser.AmpDocumentLink - 96)) | (1 << (sequenceParser.AmpDocumentDownload - 96)) | (1 << (sequenceParser.AmpAppLink - 96)) | (1 << (sequenceParser.AmpWebsiteLink - 96)) | (1 << (sequenceParser.AmpStillImageFilmLink - 96)) | (1 << (sequenceParser.OpAmpAudioLink - 96)) | (1 << (sequenceParser.OpAmpImageLink - 96)) | (1 << (sequenceParser.OpAmpVideoLink - 96)) | (1 << (sequenceParser.OpAmpArticleLink - 96)) | (1 << (sequenceParser.OpAmpDocumentLink - 96)) | (1 << (sequenceParser.OpAmpDocumentDownload - 96)) | (1 << (sequenceParser.OpAmpAppLink - 96)) | (1 << (sequenceParser.OpAmpWebsiteLink - 96)) | (1 << (sequenceParser.OpAmpStillImageFilmLink - 96)) | (1 << (sequenceParser.AmpImageEmbed - 96)) | (1 << (sequenceParser.AmpVideoEmbed - 96)) | (1 << (sequenceParser.AmpAudioEmbed - 96)))) !== 0) || ((((_la - 128)) & ~0x1F) === 0 && ((1 << (_la - 128)) & ((1 << (sequenceParser.AmpDocumentEmbed - 128)) | (1 << (sequenceParser.AmpStillImageFilmEmbed - 128)) | (1 << (sequenceParser.OpAmpImageEmbed - 128)) | (1 << (sequenceParser.OpAmpVideoEmbed - 128)) | (1 << (sequenceParser.OpAmpAudioEmbed - 128)) | (1 << (sequenceParser.OpAmpDocumentEmbed - 128)) | (1 << (sequenceParser.OpAmpStillImageFilmEmbed - 128)) | (1 << (sequenceParser.BitmarkMinus - 128)) | (1 << (sequenceParser.BitmarkPlus - 128)) | (1 << (sequenceParser.ColonText - 128)) | (1 << (sequenceParser.ColonJson - 128)) | (1 << (sequenceParser.Prosemirror - 128)) | (1 << (sequenceParser.Placeholder - 128)) | (1 << (sequenceParser.BASIC - 128)) | (1 << (sequenceParser.JPG - 128)) | (1 << (sequenceParser.PNG - 128)) | (1 << (sequenceParser.GIF - 128)) | (1 << (sequenceParser.SVG - 128)) | (1 << (sequenceParser.MP2 - 128)) | (1 << (sequenceParser.MP3 - 128)) | (1 << (sequenceParser.MP4 - 128)) | (1 << (sequenceParser.FLV - 128)) | (1 << (sequenceParser.WMV - 128)) | (1 << (sequenceParser.MPEG - 128)) | (1 << (sequenceParser.MPG - 128)) | (1 << (sequenceParser.TEL - 128)) | (1 << (sequenceParser.DotArticleAtt - 128)) | (1 << (sequenceParser.STAR - 128)) | (1 << (sequenceParser.URL - 128)) | (1 << (sequenceParser.LIST_LINE - 128)) | (1 << (sequenceParser.ENCLBARS - 128)))) !== 0));
			this.state = 1063;
			this.match(sequenceParser.CL);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 140, sequenceParser.RULE_title);
		let _la: number;
		try {
			this.state = 1077;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 149, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1065;
				this.match(sequenceParser.OPHASH);
				this.state = 1068;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					this.state = 1068;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case sequenceParser.S:
					case sequenceParser.OPS:
					case sequenceParser.COLON:
					case sequenceParser.AMP:
					case sequenceParser.Greater:
					case sequenceParser.Less:
					case sequenceParser.RightAngle:
					case sequenceParser.RightArrow:
					case sequenceParser.DBLEQ:
					case sequenceParser.NUMERIC:
					case sequenceParser.STRING:
					case sequenceParser.NOTBITMARK:
					case sequenceParser.ELIPSIS:
					case sequenceParser.SENTENCE:
					case sequenceParser.BARSTRING:
					case sequenceParser.AmpAudio:
					case sequenceParser.AmpImage:
					case sequenceParser.AmpVideo:
					case sequenceParser.AmpArticle:
					case sequenceParser.AmpDocument:
					case sequenceParser.AmpApp:
					case sequenceParser.AmpWebsite:
					case sequenceParser.AmpAudioLink:
					case sequenceParser.AmpImageLink:
					case sequenceParser.AmpArticleLink:
					case sequenceParser.AmpDocumentLink:
					case sequenceParser.BitmarkMinus:
					case sequenceParser.BitmarkPlus:
					case sequenceParser.URL:
					case sequenceParser.LIST_LINE:
						{
						this.state = 1066;
						this.s_and_w();
						}
						break;
					case sequenceParser.NL:
						{
						this.state = 1067;
						this.match(sequenceParser.NL);
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					}
					this.state = 1070;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << sequenceParser.S) | (1 << sequenceParser.OPS) | (1 << sequenceParser.COLON) | (1 << sequenceParser.AMP) | (1 << sequenceParser.Greater))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (sequenceParser.Less - 32)) | (1 << (sequenceParser.RightAngle - 32)) | (1 << (sequenceParser.RightArrow - 32)) | (1 << (sequenceParser.DBLEQ - 32)) | (1 << (sequenceParser.NUMERIC - 32)) | (1 << (sequenceParser.STRING - 32)) | (1 << (sequenceParser.NL - 32)) | (1 << (sequenceParser.NOTBITMARK - 32)) | (1 << (sequenceParser.ELIPSIS - 32)) | (1 << (sequenceParser.SENTENCE - 32)) | (1 << (sequenceParser.BARSTRING - 32)))) !== 0) || ((((_la - 86)) & ~0x1F) === 0 && ((1 << (_la - 86)) & ((1 << (sequenceParser.AmpAudio - 86)) | (1 << (sequenceParser.AmpImage - 86)) | (1 << (sequenceParser.AmpVideo - 86)) | (1 << (sequenceParser.AmpArticle - 86)) | (1 << (sequenceParser.AmpDocument - 86)) | (1 << (sequenceParser.AmpApp - 86)) | (1 << (sequenceParser.AmpWebsite - 86)) | (1 << (sequenceParser.AmpAudioLink - 86)) | (1 << (sequenceParser.AmpImageLink - 86)) | (1 << (sequenceParser.AmpArticleLink - 86)) | (1 << (sequenceParser.AmpDocumentLink - 86)))) !== 0) || ((((_la - 135)) & ~0x1F) === 0 && ((1 << (_la - 135)) & ((1 << (sequenceParser.BitmarkMinus - 135)) | (1 << (sequenceParser.BitmarkPlus - 135)) | (1 << (sequenceParser.URL - 135)) | (1 << (sequenceParser.LIST_LINE - 135)))) !== 0));
				this.state = 1072;
				this.match(sequenceParser.CL);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1073;
				this.match(sequenceParser.OPHASH);
				this.state = 1074;
				this.s_and_w();
				this.state = 1075;
				this.match(sequenceParser.EOF);
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
		this.enterRule(_localctx, 142, sequenceParser.RULE_bool_label);
		try {
			this.state = 1087;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case sequenceParser.AtLabeltrue:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1079;
				this.match(sequenceParser.AtLabeltrue);
				this.state = 1080;
				this.s_and_w();
				this.state = 1081;
				this.match(sequenceParser.CL);
				}
				break;
			case sequenceParser.AtLabelfalse:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1083;
				this.match(sequenceParser.AtLabelfalse);
				this.state = 1084;
				this.s_and_w();
				this.state = 1085;
				this.match(sequenceParser.CL);
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
		this.enterRule(_localctx, 144, sequenceParser.RULE_progress_points);
		try {
			this.state = 1098;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 151, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1089;
				this.match(sequenceParser.AtProgressPoints);
				this.state = 1090;
				this.match(sequenceParser.COLON);
				this.state = 1091;
				this.match(sequenceParser.NUMERIC);
				this.state = 1092;
				this.match(sequenceParser.CL);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1093;
				this.match(sequenceParser.AtProgressPoints);
				this.state = 1094;
				this.match(sequenceParser.COLON);
				this.state = 1095;
				this.s_and_w();
				this.state = 1096;
				this.match(sequenceParser.CL);
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
		this.enterRule(_localctx, 146, sequenceParser.RULE_istracked);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1100;
			this.match(sequenceParser.OpAtIsTracked);
			this.state = 1101;
			this.s_and_w();
			this.state = 1102;
			this.match(sequenceParser.CL);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 148, sequenceParser.RULE_isinfoonly);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1104;
			this.match(sequenceParser.OpAtIsInfoOnly);
			this.state = 1105;
			this.s_and_w();
			this.state = 1106;
			this.match(sequenceParser.CL);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 150, sequenceParser.RULE_atdef);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1108;
			this.atdef_();
			this.state = 1118;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 153, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1112;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === sequenceParser.NL) {
						{
						{
						this.state = 1109;
						this.match(sequenceParser.NL);
						}
						}
						this.state = 1114;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					this.state = 1115;
					this.atdef_();
					}
					}
				}
				this.state = 1120;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 153, this._ctx);
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
		this.enterRule(_localctx, 152, sequenceParser.RULE_atdef_);
		let _la: number;
		try {
			let _alt: number;
			this.state = 1144;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case sequenceParser.OPA:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1121;
				this.match(sequenceParser.OPA);
				this.state = 1122;
				this.s_and_w();
				this.state = 1123;
				_la = this._input.LA(1);
				if (!(_la === sequenceParser.COLON || _la === sequenceParser.DBLCOLON)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 1124;
				this.s_and_w();
				this.state = 1130;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << sequenceParser.S) | (1 << sequenceParser.OPS) | (1 << sequenceParser.COLON) | (1 << sequenceParser.AMP) | (1 << sequenceParser.Greater))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (sequenceParser.Less - 32)) | (1 << (sequenceParser.RightAngle - 32)) | (1 << (sequenceParser.RightArrow - 32)) | (1 << (sequenceParser.DBLEQ - 32)) | (1 << (sequenceParser.NUMERIC - 32)) | (1 << (sequenceParser.STRING - 32)) | (1 << (sequenceParser.NL - 32)) | (1 << (sequenceParser.NOTBITMARK - 32)) | (1 << (sequenceParser.ELIPSIS - 32)) | (1 << (sequenceParser.SENTENCE - 32)) | (1 << (sequenceParser.BARSTRING - 32)))) !== 0) || ((((_la - 86)) & ~0x1F) === 0 && ((1 << (_la - 86)) & ((1 << (sequenceParser.AmpAudio - 86)) | (1 << (sequenceParser.AmpImage - 86)) | (1 << (sequenceParser.AmpVideo - 86)) | (1 << (sequenceParser.AmpArticle - 86)) | (1 << (sequenceParser.AmpDocument - 86)) | (1 << (sequenceParser.AmpApp - 86)) | (1 << (sequenceParser.AmpWebsite - 86)) | (1 << (sequenceParser.AmpAudioLink - 86)) | (1 << (sequenceParser.AmpImageLink - 86)) | (1 << (sequenceParser.AmpArticleLink - 86)) | (1 << (sequenceParser.AmpDocumentLink - 86)))) !== 0) || ((((_la - 135)) & ~0x1F) === 0 && ((1 << (_la - 135)) & ((1 << (sequenceParser.BitmarkMinus - 135)) | (1 << (sequenceParser.BitmarkPlus - 135)) | (1 << (sequenceParser.URL - 135)) | (1 << (sequenceParser.LIST_LINE - 135)))) !== 0)) {
					{
					this.state = 1128;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 154, this._ctx) ) {
					case 1:
						{
						this.state = 1125;
						this.match(sequenceParser.NL);
						}
						break;

					case 2:
						{
						this.state = 1126;
						this.match(sequenceParser.COLON);
						}
						break;

					case 3:
						{
						this.state = 1127;
						this.s_and_w();
						}
						break;
					}
					}
					this.state = 1132;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1133;
				this.match(sequenceParser.CL);
				}
				break;
			case sequenceParser.OpAtCopyright:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1135;
				this.match(sequenceParser.OpAtCopyright);
				this.state = 1139;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 156, this._ctx);
				while (_alt !== 1 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1 + 1) {
						{
						{
						this.state = 1136;
						this.matchWildcard();
						}
						}
					}
					this.state = 1141;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 156, this._ctx);
				}
				this.state = 1142;
				this.match(sequenceParser.CL);
				}
				break;
			case sequenceParser.AtSampleSolution:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1143;
				this.match(sequenceParser.AtSampleSolution);
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
		this.enterRule(_localctx, 154, sequenceParser.RULE_dollarans);
		let _la: number;
		try {
			this.state = 1165;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 162, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1146;
				this.match(sequenceParser.OPDOLL);
				this.state = 1150;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					this.state = 1150;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 158, this._ctx) ) {
					case 1:
						{
						this.state = 1147;
						this.s_and_w();
						}
						break;

					case 2:
						{
						this.state = 1148;
						this.match(sequenceParser.COLON);
						}
						break;

					case 3:
						{
						this.state = 1149;
						this.match(sequenceParser.NL);
						}
						break;
					}
					}
					this.state = 1152;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << sequenceParser.S) | (1 << sequenceParser.OPS) | (1 << sequenceParser.COLON) | (1 << sequenceParser.AMP) | (1 << sequenceParser.Greater))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (sequenceParser.Less - 32)) | (1 << (sequenceParser.RightAngle - 32)) | (1 << (sequenceParser.RightArrow - 32)) | (1 << (sequenceParser.DBLEQ - 32)) | (1 << (sequenceParser.NUMERIC - 32)) | (1 << (sequenceParser.STRING - 32)) | (1 << (sequenceParser.NL - 32)) | (1 << (sequenceParser.NOTBITMARK - 32)) | (1 << (sequenceParser.ELIPSIS - 32)) | (1 << (sequenceParser.SENTENCE - 32)) | (1 << (sequenceParser.BARSTRING - 32)))) !== 0) || ((((_la - 86)) & ~0x1F) === 0 && ((1 << (_la - 86)) & ((1 << (sequenceParser.AmpAudio - 86)) | (1 << (sequenceParser.AmpImage - 86)) | (1 << (sequenceParser.AmpVideo - 86)) | (1 << (sequenceParser.AmpArticle - 86)) | (1 << (sequenceParser.AmpDocument - 86)) | (1 << (sequenceParser.AmpApp - 86)) | (1 << (sequenceParser.AmpWebsite - 86)) | (1 << (sequenceParser.AmpAudioLink - 86)) | (1 << (sequenceParser.AmpImageLink - 86)) | (1 << (sequenceParser.AmpArticleLink - 86)) | (1 << (sequenceParser.AmpDocumentLink - 86)))) !== 0) || ((((_la - 135)) & ~0x1F) === 0 && ((1 << (_la - 135)) & ((1 << (sequenceParser.BitmarkMinus - 135)) | (1 << (sequenceParser.BitmarkPlus - 135)) | (1 << (sequenceParser.URL - 135)) | (1 << (sequenceParser.LIST_LINE - 135)))) !== 0));
				this.state = 1154;
				this.match(sequenceParser.CL);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1155;
				this.match(sequenceParser.OPDOLL);
				this.state = 1161;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << sequenceParser.S) | (1 << sequenceParser.OPS) | (1 << sequenceParser.COLON) | (1 << sequenceParser.AMP) | (1 << sequenceParser.Greater))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (sequenceParser.Less - 32)) | (1 << (sequenceParser.RightAngle - 32)) | (1 << (sequenceParser.RightArrow - 32)) | (1 << (sequenceParser.DBLEQ - 32)) | (1 << (sequenceParser.NUMERIC - 32)) | (1 << (sequenceParser.STRING - 32)) | (1 << (sequenceParser.NL - 32)) | (1 << (sequenceParser.NOTBITMARK - 32)) | (1 << (sequenceParser.ELIPSIS - 32)) | (1 << (sequenceParser.SENTENCE - 32)) | (1 << (sequenceParser.BARSTRING - 32)))) !== 0) || ((((_la - 86)) & ~0x1F) === 0 && ((1 << (_la - 86)) & ((1 << (sequenceParser.AmpAudio - 86)) | (1 << (sequenceParser.AmpImage - 86)) | (1 << (sequenceParser.AmpVideo - 86)) | (1 << (sequenceParser.AmpArticle - 86)) | (1 << (sequenceParser.AmpDocument - 86)) | (1 << (sequenceParser.AmpApp - 86)) | (1 << (sequenceParser.AmpWebsite - 86)) | (1 << (sequenceParser.AmpAudioLink - 86)) | (1 << (sequenceParser.AmpImageLink - 86)) | (1 << (sequenceParser.AmpArticleLink - 86)) | (1 << (sequenceParser.AmpDocumentLink - 86)))) !== 0) || ((((_la - 135)) & ~0x1F) === 0 && ((1 << (_la - 135)) & ((1 << (sequenceParser.BitmarkMinus - 135)) | (1 << (sequenceParser.BitmarkPlus - 135)) | (1 << (sequenceParser.URL - 135)) | (1 << (sequenceParser.LIST_LINE - 135)))) !== 0)) {
					{
					this.state = 1159;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 160, this._ctx) ) {
					case 1:
						{
						this.state = 1156;
						this.s_and_w();
						}
						break;

					case 2:
						{
						this.state = 1157;
						this.match(sequenceParser.COLON);
						}
						break;

					case 3:
						{
						this.state = 1158;
						this.match(sequenceParser.NL);
						}
						break;
					}
					}
					this.state = 1163;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1164;
				this.match(sequenceParser.EOF);
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
		this.enterRule(_localctx, 156, sequenceParser.RULE_anchor);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1167;
			this.match(sequenceParser.OPDANGLE);
			this.state = 1169;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << sequenceParser.S) | (1 << sequenceParser.OPS) | (1 << sequenceParser.COLON) | (1 << sequenceParser.AMP) | (1 << sequenceParser.Greater))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (sequenceParser.Less - 32)) | (1 << (sequenceParser.RightAngle - 32)) | (1 << (sequenceParser.RightArrow - 32)) | (1 << (sequenceParser.DBLEQ - 32)) | (1 << (sequenceParser.NUMERIC - 32)) | (1 << (sequenceParser.STRING - 32)) | (1 << (sequenceParser.NOTBITMARK - 32)) | (1 << (sequenceParser.ELIPSIS - 32)) | (1 << (sequenceParser.SENTENCE - 32)) | (1 << (sequenceParser.BARSTRING - 32)))) !== 0) || ((((_la - 86)) & ~0x1F) === 0 && ((1 << (_la - 86)) & ((1 << (sequenceParser.AmpAudio - 86)) | (1 << (sequenceParser.AmpImage - 86)) | (1 << (sequenceParser.AmpVideo - 86)) | (1 << (sequenceParser.AmpArticle - 86)) | (1 << (sequenceParser.AmpDocument - 86)) | (1 << (sequenceParser.AmpApp - 86)) | (1 << (sequenceParser.AmpWebsite - 86)) | (1 << (sequenceParser.AmpAudioLink - 86)) | (1 << (sequenceParser.AmpImageLink - 86)) | (1 << (sequenceParser.AmpArticleLink - 86)) | (1 << (sequenceParser.AmpDocumentLink - 86)))) !== 0) || ((((_la - 135)) & ~0x1F) === 0 && ((1 << (_la - 135)) & ((1 << (sequenceParser.BitmarkMinus - 135)) | (1 << (sequenceParser.BitmarkPlus - 135)) | (1 << (sequenceParser.URL - 135)) | (1 << (sequenceParser.LIST_LINE - 135)))) !== 0)) {
				{
				this.state = 1168;
				this.s_and_w();
				}
			}

			this.state = 1171;
			this.match(sequenceParser.CL);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 158, sequenceParser.RULE_dcolon);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1173;
			this.match(sequenceParser.DBLCOLON);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 160, sequenceParser.RULE_s_and_w);
		let _la: number;
		try {
			let _alt: number;
			this.state = 1220;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 171, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1175;
				this.match(sequenceParser.STRING);
				this.state = 1182;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 165, this._ctx) ) {
				case 1:
					{
					this.state = 1177;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					do {
						{
						{
						this.state = 1176;
						this.match(sequenceParser.S);
						}
						}
						this.state = 1179;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					} while (_la === sequenceParser.S);
					this.state = 1181;
					this.match(sequenceParser.NUMERIC);
					}
					break;
				}
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1184;
				this.words();
				this.state = 1191;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 167, this._ctx) ) {
				case 1:
					{
					this.state = 1186;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					do {
						{
						{
						this.state = 1185;
						this.match(sequenceParser.S);
						}
						}
						this.state = 1188;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					} while (_la === sequenceParser.S);
					this.state = 1190;
					this.match(sequenceParser.NUMERIC);
					}
					break;
				}
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1193;
				this.match(sequenceParser.OPS);
				this.state = 1194;
				this.s_and_w();
				this.state = 1195;
				this.match(sequenceParser.CL);
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1197;
				this.match(sequenceParser.NUMERIC);
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 1201;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === sequenceParser.S) {
					{
					{
					this.state = 1198;
					this.match(sequenceParser.S);
					}
					}
					this.state = 1203;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1204;
				this.match(sequenceParser.COLON);
				this.state = 1208;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 169, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 1205;
						this.match(sequenceParser.S);
						}
						}
					}
					this.state = 1210;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 169, this._ctx);
				}
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 1211;
				this.match(sequenceParser.AMP);
				this.state = 1215;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 170, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 1212;
						this.match(sequenceParser.S);
						}
						}
					}
					this.state = 1217;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 170, this._ctx);
				}
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 1218;
				this.match(sequenceParser.DBLEQ);
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 1219;
				this.match(sequenceParser.URL);
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
	public dclines(): DclinesContext {
		let _localctx: DclinesContext = new DclinesContext(this._ctx, this.state);
		this.enterRule(_localctx, 162, sequenceParser.RULE_dclines);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1222;
			this.match(sequenceParser.DCANY);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 164, sequenceParser.RULE_clnsp);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1224;
			this.match(sequenceParser.CL);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 166, sequenceParser.RULE_sspl);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1226;
			_la = this._input.LA(1);
			if (!(_la === sequenceParser.SSPL || _la === sequenceParser.SSPL2)) {
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
		this.enterRule(_localctx, 168, sequenceParser.RULE_words);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1254;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					this.state = 1254;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 172, this._ctx) ) {
					case 1:
						{
						this.state = 1228;
						this.match(sequenceParser.SENTENCE);
						}
						break;

					case 2:
						{
						this.state = 1229;
						this.match(sequenceParser.NOTBITMARK);
						}
						break;

					case 3:
						{
						this.state = 1230;
						this.match(sequenceParser.BARSTRING);
						}
						break;

					case 4:
						{
						this.state = 1231;
						this.match(sequenceParser.ELIPSIS);
						}
						break;

					case 5:
						{
						this.state = 1232;
						this.match(sequenceParser.LIST_LINE);
						}
						break;

					case 6:
						{
						this.state = 1233;
						this.match(sequenceParser.AMP);
						}
						break;

					case 7:
						{
						this.state = 1234;
						this.match(sequenceParser.Greater);
						this.state = 1235;
						_la = this._input.LA(1);
						if (_la <= 0 || (_la === sequenceParser.Greater)) {
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

					case 8:
						{
						this.state = 1236;
						this.match(sequenceParser.Less);
						this.state = 1237;
						_la = this._input.LA(1);
						if (_la <= 0 || (_la === sequenceParser.Less)) {
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

					case 9:
						{
						this.state = 1238;
						this.match(sequenceParser.RightArrow);
						}
						break;

					case 10:
						{
						this.state = 1239;
						this.match(sequenceParser.RightAngle);
						}
						break;

					case 11:
						{
						this.state = 1240;
						this.match(sequenceParser.AmpArticle);
						}
						break;

					case 12:
						{
						this.state = 1241;
						this.match(sequenceParser.AmpDocument);
						}
						break;

					case 13:
						{
						this.state = 1242;
						this.match(sequenceParser.AmpDocumentLink);
						}
						break;

					case 14:
						{
						this.state = 1243;
						this.match(sequenceParser.AmpWebsite);
						}
						break;

					case 15:
						{
						this.state = 1244;
						this.match(sequenceParser.AmpImage);
						}
						break;

					case 16:
						{
						this.state = 1245;
						this.match(sequenceParser.AmpAudio);
						}
						break;

					case 17:
						{
						this.state = 1246;
						this.match(sequenceParser.AmpVideo);
						}
						break;

					case 18:
						{
						this.state = 1247;
						this.match(sequenceParser.AmpApp);
						}
						break;

					case 19:
						{
						this.state = 1248;
						this.match(sequenceParser.AmpArticleLink);
						}
						break;

					case 20:
						{
						this.state = 1249;
						this.match(sequenceParser.AmpAudioLink);
						}
						break;

					case 21:
						{
						this.state = 1250;
						this.match(sequenceParser.AmpImageLink);
						}
						break;

					case 22:
						{
						this.state = 1251;
						this.match(sequenceParser.AmpDocumentLink);
						}
						break;

					case 23:
						{
						this.state = 1252;
						this.match(sequenceParser.BitmarkMinus);
						}
						break;

					case 24:
						{
						this.state = 1253;
						this.match(sequenceParser.BitmarkPlus);
						}
						break;
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 1256;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 173, this._ctx);
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
		this.enterRule(_localctx, 170, sequenceParser.RULE_sp);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1258;
			this.match(sequenceParser.S);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
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
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\xA0\u04EF\x04" +
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
		"O\tO\x04P\tP\x04Q\tQ\x04R\tR\x04S\tS\x04T\tT\x04U\tU\x04V\tV\x04W\tW\x03" +
		"\x02\x03\x02\x07\x02\xB1\n\x02\f\x02\x0E\x02\xB4\v\x02\x03\x02\x07\x02" +
		"\xB7\n\x02\f\x02\x0E\x02\xBA\v\x02\x06\x02\xBC\n\x02\r\x02\x0E\x02\xBD" +
		"\x03\x02\x07\x02\xC1\n\x02\f\x02\x0E\x02\xC4\v\x02\x03\x02\x03\x02\x03" +
		"\x03\x03\x03\x03\x04\x03\x04\x05\x04\xCC\n\x04\x03\x05\x03\x05\x03\x05" +
		"\x03\x05\x07\x05\xD2\n\x05\f\x05\x0E\x05\xD5\v\x05\x03\x05\x07\x05\xD8" +
		"\n\x05\f\x05\x0E\x05\xDB\v\x05\x03\x05\x03\x05\x03\x05\x03\x05\x07\x05" +
		"\xE1\n\x05\f\x05\x0E\x05\xE4\v\x05\x03\x05\x07\x05\xE7\n\x05\f\x05\x0E" +
		"\x05\xEA\v\x05\x03\x05\x07\x05\xED\n\x05\f\x05\x0E\x05\xF0\v\x05\x03\x05" +
		"\x03\x05\x03\x05\x03\x05\x07\x05\xF6\n\x05\f\x05\x0E\x05\xF9\v\x05\x03" +
		"\x05\x03\x05\x03\x05\x05\x05\xFE\n\x05\x03\x05\x03\x05\x07\x05\u0102\n" +
		"\x05\f\x05\x0E\x05\u0105\v\x05\x03\x05\x07\x05\u0108\n\x05\f\x05\x0E\x05" +
		"\u010B\v\x05\x05\x05\u010D\n\x05\x05\x05\u010F\n\x05\x03\x06\x03\x06\x05" +
		"\x06\u0113\n\x06\x07\x06\u0115\n\x06\f\x06\x0E\x06\u0118\v\x06\x03\x06" +
		"\x03\x06\x03\x07\x03\x07\x03\b\x03\b\x03\b\x03\b\x07\b\u0122\n\b\f\b\x0E" +
		"\b\u0125\v\b\x03\b\x07\b\u0128\n\b\f\b\x0E\b\u012B\v\b\x03\b\x07\b\u012E" +
		"\n\b\f\b\x0E\b\u0131\v\b\x03\b\x03\b\x05\b\u0135\n\b\x03\b\x03\b\x07\b" +
		"\u0139\n\b\f\b\x0E\b\u013C\v\b\x03\b\x07\b\u013F\n\b\f\b\x0E\b\u0142\v" +
		"\b\x05\b\u0144\n\b\x03\t\x03\t\x03\t\x03\t\x07\t\u014A\n\t\f\t\x0E\t\u014D" +
		"\v\t\x03\t\x03\t\x03\n\x03\n\x03\v\x03\v\x05\v\u0155\n\v\x03\f\x03\f\x07" +
		"\f\u0159\n\f\f\f\x0E\f\u015C\v\f\x03\r\x03\r\x07\r\u0160\n\r\f\r\x0E\r" +
		"\u0163\v\r\x03\r\x03\r\x03\r\x03\r\x05\r\u0169\n\r\x03\r\x07\r\u016C\n" +
		"\r\f\r\x0E\r\u016F\v\r\x05\r\u0171\n\r\x03\x0E\x07\x0E\u0174\n\x0E\f\x0E" +
		"\x0E\x0E\u0177\v\x0E\x03\x0E\x06\x0E\u017A\n\x0E\r\x0E\x0E\x0E\u017B\x03" +
		"\x0E\x06\x0E\u017F\n\x0E\r\x0E\x0E\x0E\u0180\x03\x0F\x03\x0F\x03\x0F\x03" +
		"\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03" +
		"\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03" +
		"\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x05\x0F\u019D\n\x0F\x03\x10\x03\x10" +
		"\x03\x10\x03\x10\x03\x10\x03\x10\x07\x10\u01A5\n\x10\f\x10\x0E\x10\u01A8" +
		"\v\x10\x03\x11\x03\x11\x03\x11\x03\x11\x05\x11\u01AE\n\x11\x03\x11\x07" +
		"\x11\u01B1\n\x11\f\x11\x0E\x11\u01B4\v\x11\x03\x11\x03\x11\x03\x12\x05" +
		"\x12\u01B9\n\x12\x03\x12\x03\x12\x06\x12\u01BD\n\x12\r\x12\x0E\x12\u01BE" +
		"\x03\x12\x03\x12\x03\x13\x05\x13\u01C4\n\x13\x03\x13\x03\x13\x06\x13\u01C8" +
		"\n\x13\r\x13\x0E\x13\u01C9\x03\x13\x03\x13\x03\x14\x05\x14\u01CF\n\x14" +
		"\x03\x14\x03\x14\x06\x14\u01D3\n\x14\r\x14\x0E\x14\u01D4\x03\x14\x03\x14" +
		"\x03\x15\x03\x15\x03\x16\x03\x16\x03\x16\x03\x16\x05\x16\u01DF\n\x16\x03" +
		"\x17\x03\x17\x03\x17\x03\x17\x03\x18\x07\x18\u01E6\n\x18\f\x18\x0E\x18" +
		"\u01E9\v\x18\x03\x18\x03\x18\x03\x18\x07\x18\u01EE\n\x18\f\x18\x0E\x18" +
		"\u01F1\v\x18\x03\x19\x03\x19\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03" +
		"\x1A\x03\x1A\x03\x1A\x03\x1A\x05\x1A\u01FE\n\x1A\x03\x1B\x03\x1B\x03\x1B" +
		"\x03\x1B\x03\x1B\x03\x1B\x05\x1B\u0206\n\x1B\x03\x1C\x03\x1C\x03\x1C\x05" +
		"\x1C\u020B\n\x1C\x03\x1C\x03\x1C\x05\x1C\u020F\n\x1C\x03\x1C\x03\x1C\x05" +
		"\x1C\u0213\n\x1C\x05\x1C\u0215\n\x1C\x03\x1D\x03\x1D\x03\x1D\x05\x1D\u021A" +
		"\n\x1D\x03\x1E\x03\x1E\x03\x1F\x03\x1F\x03 \x03 \x03!\x03!\x03\"\x03\"" +
		"\x03#\x03#\x03$\x03$\x03%\x03%\x03&\x03&\x03\'\x03\'\x03\'\x05\'\u0231" +
		"\n\'\x03\'\x03\'\x03\'\x05\'\u0236\n\'\x03\'\x03\'\x03\'\x05\'\u023B\n" +
		"\'\x05\'\u023D\n\'\x03(\x03(\x03)\x03)\x03)\x03)\x03)\x03)\x05)\u0247" +
		"\n)\x03*\x03*\x03*\x03*\x03*\x03*\x03*\x03*\x05*\u0251\n*\x03+\x03+\x03" +
		"+\x03+\x03+\x03+\x03+\x03+\x05+\u025B\n+\x03,\x03,\x03,\x03,\x05,\u0261" +
		"\n,\x03,\x03,\x03,\x03,\x03,\x05,\u0268\n,\x03-\x03-\x07-\u026C\n-\f-" +
		"\x0E-\u026F\v-\x03.\x03.\x03.\x07.\u0274\n.\f.\x0E.\u0277\v.\x03.\x03" +
		".\x03.\x03/\x03/\x07/\u027E\n/\f/\x0E/\u0281\v/\x030\x030\x030\x030\x03" +
		"0\x030\x030\x030\x050\u028B\n0\x031\x031\x071\u028F\n1\f1\x0E1\u0292\v" +
		"1\x031\x031\x051\u0296\n1\x032\x032\x032\x072\u029B\n2\f2\x0E2\u029E\v" +
		"2\x032\x032\x032\x033\x033\x033\x053\u02A6\n3\x033\x033\x053\u02AA\n3" +
		"\x033\x033\x053\u02AE\n3\x053\u02B0\n3\x034\x034\x034\x034\x034\x034\x03" +
		"4\x034\x034\x034\x034\x074\u02BD\n4\f4\x0E4\u02C0\v4\x034\x054\u02C3\n" +
		"4\x035\x035\x035\x035\x035\x035\x035\x035\x035\x035\x035\x075\u02D0\n" +
		"5\f5\x0E5\u02D3\v5\x035\x055\u02D6\n5\x036\x036\x076\u02DA\n6\f6\x0E6" +
		"\u02DD\v6\x037\x037\x037\x037\x037\x037\x037\x037\x057\u02E7\n7\x038\x03" +
		"8\x038\x058\u02EC\n8\x038\x038\x038\x058\u02F1\n8\x058\u02F3\n8\x039\x03" +
		"9\x039\x059\u02F8\n9\x039\x039\x039\x059\u02FD\n9\x039\x039\x039\x059" +
		"\u0302\n9\x059\u0304\n9\x03:\x03:\x03:\x05:\u0309\n:\x03:\x03:\x07:\u030D" +
		"\n:\f:\x0E:\u0310\v:\x03:\x03:\x06:\u0314\n:\r:\x0E:\u0315\x03:\x03:\x03" +
		":\x03:\x03:\x03:\x03:\x07:\u031F\n:\f:\x0E:\u0322\v:\x03:\x05:\u0325\n" +
		":\x03;\x03;\x03;\x03;\x03<\x03<\x03=\x03=\x03=\x07=\u0330\n=\f=\x0E=\u0333" +
		"\v=\x03=\x03=\x07=\u0337\n=\f=\x0E=\u033A\v=\x03=\x07=\u033D\n=\f=\x0E" +
		"=\u0340\v=\x03=\x03=\x05=\u0344\n=\x03=\x03=\x07=\u0348\n=\f=\x0E=\u034B" +
		"\v=\x03=\x07=\u034E\n=\f=\x0E=\u0351\v=\x05=\u0353\n=\x03>\x03>\x03>\x03" +
		">\x07>\u0359\n>\f>\x0E>\u035C\v>\x03>\x03>\x03>\x03>\x03>\x03>\x07>\u0364" +
		"\n>\f>\x0E>\u0367\v>\x03>\x03>\x03>\x03>\x03>\x03>\x07>\u036F\n>\f>\x0E" +
		">\u0372\v>\x03>\x03>\x03>\x03>\x05>\u0378\n>\x03>\x03>\x07>\u037C\n>\f" +
		">\x0E>\u037F\v>\x03>\x05>\u0382\n>\x03?\x03?\x05?\u0386\n?\x03?\x03?\x03" +
		"?\x05?\u038B\n?\x03?\x05?\u038E\n?\x03@\x03@\x03@\x03@\x05@\u0394\n@\x03" +
		"@\x05@\u0397\n@\x03A\x03A\x05A\u039B\nA\x03A\x03A\x03A\x07A\u03A0\nA\f" +
		"A\x0EA\u03A3\vA\x07A\u03A5\nA\fA\x0EA\u03A8\vA\x03A\x07A\u03AB\nA\fA\x0E" +
		"A\u03AE\vA\x07A\u03B0\nA\fA\x0EA\u03B3\vA\x03A\x03A\x03A\x03A\x03A\x07" +
		"A\u03BA\nA\fA\x0EA\u03BD\vA\x03A\x05A\u03C0\nA\x03B\x03B\x03B\x03B\x03" +
		"B\x06B\u03C7\nB\rB\x0EB\u03C8\x03B\x03B\x03B\x03B\x03B\x03B\x03B\x07B" +
		"\u03D2\nB\fB\x0EB\u03D5\vB\x03B\x05B\u03D8\nB\x03C\x03C\x03C\x03C\x03" +
		"D\x03D\x03D\x03D\x06D\u03E2\nD\rD\x0ED\u03E3\x03D\x03D\x05D\u03E8\nD\x03" +
		"E\x03E\x03E\x03E\x06E\u03EE\nE\rE\x0EE\u03EF\x03E\x03E\x03F\x03F\x07F" +
		"\u03F6\nF\fF\x0EF\u03F9\vF\x03F\x05F\u03FC\nF\x03F\x03F\x07F\u0400\nF" +
		"\fF\x0EF\u0403\vF\x07F\u0405\nF\fF\x0EF\u0408\vF\x03F\x07F\u040B\nF\f" +
		"F\x0EF\u040E\vF\x03F\x07F\u0411\nF\fF\x0EF\u0414\vF\x03F\x03F\x03F\x07" +
		"F\u0419\nF\fF\x0EF\u041C\vF\x03F\x05F\u041F\nF\x03F\x05F\u0422\nF\x03" +
		"G\x03G\x06G\u0426\nG\rG\x0EG\u0427\x03G\x03G\x03H\x03H\x03H\x06H\u042F" +
		"\nH\rH\x0EH\u0430\x03H\x03H\x03H\x03H\x03H\x05H\u0438\nH\x03I\x03I\x03" +
		"I\x03I\x03I\x03I\x03I\x03I\x05I\u0442\nI\x03J\x03J\x03J\x03J\x03J\x03" +
		"J\x03J\x03J\x03J\x05J\u044D\nJ\x03K\x03K\x03K\x03K\x03L\x03L\x03L\x03" +
		"L\x03M\x03M\x07M\u0459\nM\fM\x0EM\u045C\vM\x03M\x07M\u045F\nM\fM\x0EM" +
		"\u0462\vM\x03N\x03N\x03N\x03N\x03N\x03N\x03N\x07N\u046B\nN\fN\x0EN\u046E" +
		"\vN\x03N\x03N\x03N\x03N\x07N\u0474\nN\fN\x0EN\u0477\vN\x03N\x03N\x05N" +
		"\u047B\nN\x03O\x03O\x03O\x03O\x06O\u0481\nO\rO\x0EO\u0482\x03O\x03O\x03" +
		"O\x03O\x03O\x07O\u048A\nO\fO\x0EO\u048D\vO\x03O\x05O\u0490\nO\x03P\x03" +
		"P\x05P\u0494\nP\x03P\x03P\x03Q\x03Q\x03R\x03R\x06R\u049C\nR\rR\x0ER\u049D" +
		"\x03R\x05R\u04A1\nR\x03R\x03R\x06R\u04A5\nR\rR\x0ER\u04A6\x03R\x05R\u04AA" +
		"\nR\x03R\x03R\x03R\x03R\x03R\x03R\x07R\u04B2\nR\fR\x0ER\u04B5\vR\x03R" +
		"\x03R\x07R\u04B9\nR\fR\x0ER\u04BC\vR\x03R\x03R\x07R\u04C0\nR\fR\x0ER\u04C3" +
		"\vR\x03R\x03R\x05R\u04C7\nR\x03S\x03S\x03T\x03T\x03U\x03U\x03V\x03V\x03" +
		"V\x03V\x03V\x03V\x03V\x03V\x03V\x03V\x03V\x03V\x03V\x03V\x03V\x03V\x03" +
		"V\x03V\x03V\x03V\x03V\x03V\x03V\x03V\x03V\x03V\x06V\u04E9\nV\rV\x0EV\u04EA" +
		"\x03W\x03W\x03W\x06\u02BE\u02D1\u0320\u0475\x02\x02X\x02\x02\x04\x02\x06" +
		"\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02" +
		"\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02$\x02&\x02(\x02*\x02,\x02.\x020\x02" +
		"2\x024\x026\x028\x02:\x02<\x02>\x02@\x02B\x02D\x02F\x02H\x02J\x02L\x02" +
		"N\x02P\x02R\x02T\x02V\x02X\x02Z\x02\\\x02^\x02`\x02b\x02d\x02f\x02h\x02" +
		"j\x02l\x02n\x02p\x02r\x02t\x02v\x02x\x02z\x02|\x02~\x02\x80\x02\x82\x02" +
		"\x84\x02\x86\x02\x88\x02\x8A\x02\x8C\x02\x8E\x02\x90\x02\x92\x02\x94\x02" +
		"\x96\x02\x98\x02\x9A\x02\x9C\x02\x9E\x02\xA0\x02\xA2\x02\xA4\x02\xA6\x02" +
		"\xA8\x02\xAA\x02\xAC\x02\x02\x15\b\x02\\]_`mu\x80\x83\x89\x8A\x8C\x8E" +
		"\x05\x02[[oo\x80\x80\x04\x02\\\\pp\x05\x02]]qr\x82\x82\x04\x02^^ss\x04" +
		"\x02__tt\x05\x02``uu\x83\x83\x04\x02ffyy\x05\x02hhz{\x87\x87\x04\x02i" +
		"i||\x04\x02jj}}\x05\x02kk~~\x88\x88\x03\x02<=\x04\x02LLOR\x03\x02\x1B" +
		"\x1B\x04\x02\x1C\x1C\x1E\x1E\x03\x02)*\x03\x02!!\x03\x02\"\"\x02\u05A4" +
		"\x02\xBB\x03\x02\x02\x02\x04\xC7\x03\x02\x02\x02\x06\xCB\x03\x02\x02\x02" +
		"\b\u010E\x03\x02\x02\x02\n\u0116\x03\x02\x02\x02\f\u011B\x03\x02\x02\x02" +
		"\x0E\u011D\x03\x02\x02\x02\x10\u0145\x03\x02\x02\x02\x12\u0150\x03\x02" +
		"\x02\x02\x14\u0154\x03\x02\x02\x02\x16\u0156\x03\x02\x02\x02\x18\u0170" +
		"\x03\x02\x02\x02\x1A\u0179\x03\x02\x02\x02\x1C\u019C\x03\x02\x02\x02\x1E" +
		"\u019E\x03\x02\x02\x02 \u01A9\x03\x02\x02\x02\"\u01B8\x03\x02\x02\x02" +
		"$\u01C3\x03\x02\x02\x02&\u01CE\x03\x02\x02\x02(\u01D8\x03\x02\x02\x02" +
		"*\u01DA\x03\x02\x02\x02,\u01E0\x03\x02\x02\x02.\u01E7\x03\x02\x02\x02" +
		"0\u01F2\x03\x02\x02\x022\u01FD\x03\x02\x02\x024\u0205\x03\x02\x02\x02" +
		"6\u0214\x03\x02\x02\x028\u0216\x03\x02\x02\x02:\u021B\x03\x02\x02\x02" +
		"<\u021D\x03\x02\x02\x02>\u021F\x03\x02\x02\x02@\u0221\x03\x02\x02\x02" +
		"B\u0223\x03\x02\x02\x02D\u0225\x03\x02\x02\x02F\u0227\x03\x02\x02\x02" +
		"H\u0229\x03\x02\x02\x02J\u022B\x03\x02\x02\x02L\u023C\x03\x02\x02\x02" +
		"N\u023E\x03\x02\x02\x02P\u0246\x03\x02\x02\x02R\u0248\x03\x02\x02\x02" +
		"T\u0252\x03\x02\x02\x02V\u025C\x03\x02\x02\x02X\u0269\x03\x02\x02\x02" +
		"Z\u0270\x03\x02\x02\x02\\\u027B\x03\x02\x02\x02^\u0282\x03\x02\x02\x02" +
		"`\u028C\x03\x02\x02\x02b\u0297\x03\x02\x02\x02d\u02AF\x03\x02\x02\x02" +
		"f\u02C2\x03\x02\x02\x02h\u02D5\x03\x02\x02\x02j\u02D7\x03\x02\x02\x02" +
		"l\u02DE\x03\x02\x02\x02n\u02F2\x03\x02\x02\x02p\u0303\x03\x02\x02\x02" +
		"r\u0324\x03\x02\x02\x02t\u0326\x03\x02\x02\x02v\u032A\x03\x02\x02\x02" +
		"x\u0352\x03\x02\x02\x02z\u0381\x03\x02\x02\x02|\u038D\x03\x02\x02\x02" +
		"~\u0396\x03\x02\x02\x02\x80\u03BF\x03\x02\x02\x02\x82\u03D7\x03\x02\x02" +
		"\x02\x84\u03D9\x03\x02\x02\x02\x86\u03DD\x03\x02\x02\x02\x88\u03E9\x03" +
		"\x02\x02\x02\x8A\u0421\x03\x02\x02\x02\x8C\u0423\x03\x02\x02\x02\x8E\u0437" +
		"\x03\x02\x02\x02\x90\u0441\x03\x02\x02\x02\x92\u044C\x03\x02\x02\x02\x94" +
		"\u044E\x03\x02\x02\x02\x96\u0452\x03\x02\x02\x02\x98\u0456\x03\x02\x02" +
		"\x02\x9A\u047A\x03\x02\x02\x02\x9C\u048F\x03\x02\x02\x02\x9E\u0491\x03" +
		"\x02\x02\x02\xA0\u0497\x03\x02\x02\x02\xA2\u04C6\x03\x02\x02\x02\xA4\u04C8" +
		"\x03\x02\x02\x02\xA6\u04CA\x03\x02\x02\x02\xA8\u04CC\x03\x02\x02\x02\xAA" +
		"\u04E8\x03\x02\x02\x02\xAC\u04EC\x03\x02\x02\x02\xAE\xB8\x05\x04\x03\x02" +
		"\xAF\xB1\x07\x04\x02\x02\xB0\xAF\x03\x02\x02\x02\xB1\xB4\x03\x02\x02\x02" +
		"\xB2\xB0\x03\x02\x02\x02\xB2\xB3\x03\x02\x02\x02\xB3\xB5\x03\x02\x02\x02" +
		"\xB4\xB2\x03\x02\x02\x02\xB5\xB7\x074\x02\x02\xB6\xB2\x03\x02\x02\x02" +
		"\xB7\xBA\x03\x02\x02\x02\xB8\xB6\x03\x02\x02\x02\xB8\xB9\x03\x02\x02\x02" +
		"\xB9\xBC\x03\x02\x02\x02\xBA\xB8\x03\x02\x02\x02\xBB\xAE\x03\x02\x02\x02" +
		"\xBC\xBD\x03\x02\x02\x02\xBD\xBB\x03\x02\x02\x02\xBD\xBE\x03\x02\x02\x02" +
		"\xBE\xC2\x03\x02\x02\x02\xBF\xC1\x074\x02\x02\xC0\xBF\x03\x02\x02\x02" +
		"\xC1\xC4\x03\x02\x02\x02\xC2\xC0\x03\x02\x02\x02\xC2\xC3\x03\x02\x02\x02" +
		"\xC3\xC5\x03\x02\x02\x02\xC4\xC2\x03\x02\x02\x02\xC5\xC6\x07\x02\x02\x03" +
		"\xC6\x03\x03\x02\x02\x02\xC7\xC8\x05\x06\x04\x02\xC8\x05\x03\x02\x02\x02" +
		"\xC9\xCC\x05\b\x05\x02\xCA\xCC\x05\x0E\b\x02\xCB\xC9\x03\x02\x02\x02\xCB" +
		"\xCA\x03\x02\x02\x02\xCC\x07\x03\x02\x02\x02\xCD\xCE\x07\x05\x02\x02\xCE" +
		"\xCF\x05.\x18\x02\xCF\xD9\x07\x1B\x02\x02\xD0\xD2\x074\x02\x02\xD1\xD0" +
		"\x03\x02\x02\x02\xD2\xD5\x03\x02\x02\x02\xD3\xD1\x03\x02\x02\x02\xD3\xD4" +
		"\x03\x02\x02\x02\xD4\xD6\x03\x02\x02\x02\xD5\xD3\x03\x02\x02\x02\xD6\xD8" +
		"\x05\x1C\x0F\x02\xD7\xD3\x03\x02\x02\x02\xD8\xDB\x03\x02\x02\x02\xD9\xD7" +
		"\x03\x02\x02\x02\xD9\xDA\x03\x02\x02\x02\xDA\u010F\x03\x02\x02\x02\xDB" +
		"\xD9\x03\x02\x02\x02\xDC\xDD\x07\x05\x02\x02\xDD\xDE\x05.\x18\x02\xDE" +
		"\xE8\x07\x1B\x02\x02\xDF\xE1\x074\x02\x02\xE0\xDF\x03\x02\x02\x02\xE1" +
		"\xE4\x03\x02\x02\x02\xE2\xE0\x03\x02\x02\x02\xE2\xE3\x03\x02\x02\x02\xE3" +
		"\xE5\x03\x02\x02\x02\xE4\xE2\x03\x02\x02\x02\xE5\xE7\x05\x1C\x0F\x02\xE6" +
		"\xE2\x03\x02\x02\x02\xE7\xEA\x03\x02\x02\x02\xE8\xE6\x03\x02\x02\x02\xE8" +
		"\xE9\x03\x02\x02\x02\xE9\xEE\x03\x02\x02\x02\xEA\xE8\x03\x02\x02\x02\xEB" +
		"\xED\x074\x02\x02\xEC\xEB\x03\x02\x02\x02\xED\xF0\x03\x02\x02\x02\xEE" +
		"\xEC\x03\x02\x02\x02\xEE\xEF\x03\x02\x02\x02\xEF\xF1\x03\x02\x02\x02\xF0" +
		"\xEE\x03\x02\x02\x02\xF1\xF7\x07(\x02\x02\xF2\xF3\x05\n\x06\x02\xF3\xF4" +
		"\x05\f\x07\x02\xF4\xF6\x03\x02\x02\x02\xF5\xF2\x03\x02\x02\x02\xF6\xF9" +
		"\x03\x02\x02\x02\xF7\xF5\x03\x02\x02\x02\xF7\xF8\x03\x02\x02\x02\xF8\xFA" +
		"\x03\x02\x02\x02\xF9\xF7\x03\x02\x02\x02\xFA\xFB\x05\n\x06\x02\xFB\xFD" +
		"\x07(\x02\x02\xFC\xFE\x05\x1A\x0E\x02\xFD\xFC\x03\x02\x02\x02\xFD\xFE" +
		"\x03\x02\x02\x02\xFE\u010C\x03\x02\x02\x02\xFF\u0109\x05(\x15\x02\u0100" +
		"\u0102\x074\x02\x02\u0101\u0100\x03\x02\x02\x02\u0102\u0105\x03\x02\x02" +
		"\x02\u0103\u0101\x03\x02\x02\x02\u0103\u0104\x03\x02\x02\x02\u0104\u0106" +
		"\x03\x02\x02\x02\u0105\u0103\x03\x02\x02\x02\u0106\u0108\x05(\x15\x02" +
		"\u0107\u0103\x03\x02\x02\x02\u0108\u010B\x03\x02\x02\x02\u0109\u0107\x03" +
		"\x02\x02\x02\u0109\u010A\x03\x02\x02\x02\u010A\u010D\x03\x02\x02\x02\u010B" +
		"\u0109\x03\x02\x02\x02\u010C\xFF\x03\x02\x02\x02\u010C\u010D\x03\x02\x02" +
		"\x02\u010D\u010F\x03\x02\x02\x02\u010E\xCD\x03\x02\x02\x02\u010E\xDC\x03" +
		"\x02\x02\x02\u010F\t\x03\x02\x02\x02\u0110\u0112\x05\x1C\x0F\x02\u0111" +
		"\u0113\x074\x02\x02\u0112\u0111\x03\x02\x02\x02\u0112\u0113\x03\x02\x02" +
		"\x02\u0113\u0115\x03\x02\x02\x02\u0114\u0110\x03\x02\x02\x02\u0115\u0118" +
		"\x03\x02\x02\x02\u0116\u0114\x03\x02\x02\x02\u0116\u0117\x03\x02\x02\x02" +
		"\u0117\u0119\x03\x02\x02\x02\u0118\u0116\x03\x02\x02\x02\u0119\u011A\x05" +
		"\xA2R\x02\u011A\v\x03\x02\x02\x02\u011B\u011C\x07\'\x02\x02\u011C\r\x03" +
		"\x02\x02\x02\u011D\u011E\x07\x06\x02\x02\u011E\u011F\x05.\x18\x02\u011F" +
		"\u0129\x07\x1B\x02\x02\u0120\u0122\x074\x02\x02\u0121\u0120\x03\x02\x02" +
		"\x02\u0122\u0125\x03\x02\x02\x02\u0123\u0121\x03\x02\x02\x02\u0123\u0124" +
		"\x03\x02\x02\x02\u0124\u0126\x03\x02\x02\x02\u0125\u0123\x03\x02\x02\x02" +
		"\u0126\u0128\x05\x1C\x0F\x02\u0127\u0123\x03\x02\x02\x02\u0128\u012B\x03" +
		"\x02\x02\x02\u0129\u0127\x03\x02\x02\x02\u0129\u012A\x03\x02\x02\x02\u012A" +
		"\u012F\x03\x02\x02\x02\u012B\u0129\x03\x02\x02\x02\u012C\u012E\x074\x02" +
		"\x02\u012D\u012C\x03\x02\x02\x02\u012E\u0131\x03\x02\x02\x02\u012F\u012D" +
		"\x03\x02\x02\x02\u012F\u0130\x03\x02\x02\x02\u0130\u0132\x03\x02\x02\x02" +
		"\u0131\u012F\x03\x02\x02\x02\u0132\u0134\x05\x10\t\x02\u0133\u0135\x05" +
		"\x1A\x0E\x02\u0134\u0133\x03\x02\x02\x02\u0134\u0135\x03\x02\x02\x02\u0135" +
		"\u0143\x03\x02\x02\x02\u0136\u0140\x05(\x15\x02\u0137\u0139\x074\x02\x02" +
		"\u0138\u0137\x03\x02\x02\x02\u0139\u013C\x03\x02\x02\x02\u013A\u0138\x03" +
		"\x02\x02\x02\u013A\u013B\x03\x02\x02\x02\u013B\u013D\x03\x02\x02\x02\u013C" +
		"\u013A\x03\x02\x02\x02\u013D\u013F\x05(\x15\x02\u013E\u013A\x03\x02\x02" +
		"\x02\u013F\u0142\x03\x02\x02\x02\u0140\u013E\x03\x02\x02\x02\u0140\u0141" +
		"\x03\x02\x02\x02\u0141\u0144\x03\x02\x02\x02\u0142\u0140\x03\x02\x02\x02" +
		"\u0143\u0136\x03\x02\x02\x02\u0143\u0144\x03\x02\x02\x02\u0144\x0F\x03" +
		"\x02\x02\x02\u0145\u0146\x05\x12\n\x02\u0146\u014B\x05\x14\v\x02\u0147" +
		"\u0148\x07(\x02\x02\u0148\u014A\x05\x14\v\x02\u0149\u0147\x03\x02\x02" +
		"\x02\u014A\u014D\x03\x02\x02\x02\u014B\u0149\x03\x02\x02\x02\u014B\u014C" +
		"\x03\x02\x02\x02\u014C\u014E\x03\x02\x02\x02\u014D\u014B\x03\x02\x02\x02" +
		"\u014E\u014F\x07(\x02\x02\u014F\x11\x03\x02\x02\x02\u0150\u0151\x07(\x02" +
		"\x02\u0151\x13\x03\x02\x02\x02\u0152\u0155\x05\x16\f\x02\u0153\u0155\x03" +
		"\x02\x02\x02\u0154\u0152\x03\x02\x02\x02\u0154\u0153\x03\x02\x02\x02\u0155" +
		"\x15\x03\x02\x02\x02\u0156\u015A\x05\x18\r\x02\u0157\u0159\x05\x18\r\x02" +
		"\u0158\u0157\x03\x02\x02\x02\u0159\u015C\x03\x02\x02\x02\u015A\u0158\x03" +
		"\x02\x02\x02\u015A\u015B\x03\x02\x02\x02\u015B\x17\x03\x02\x02\x02\u015C" +
		"\u015A\x03\x02\x02\x02\u015D\u0161\x05\xA2R\x02\u015E\u0160\x074\x02\x02" +
		"\u015F\u015E\x03\x02\x02\x02\u0160\u0163\x03\x02\x02\x02\u0161\u015F\x03" +
		"\x02\x02\x02\u0161\u0162\x03\x02\x02\x02\u0162\u0171\x03\x02\x02\x02\u0163" +
		"\u0161\x03\x02\x02\x02\u0164\u0169\x05\x8AF\x02\u0165\u0169\x05\x98M\x02" +
		"\u0166\u0169\x05\x8CG\x02\u0167\u0169\x05~@\x02\u0168\u0164\x03\x02\x02" +
		"\x02\u0168\u0165\x03\x02\x02\x02\u0168\u0166\x03\x02\x02\x02\u0168\u0167" +
		"\x03\x02\x02\x02\u0169\u016D\x03\x02\x02\x02\u016A\u016C\x074\x02\x02" +
		"\u016B\u016A\x03\x02\x02\x02\u016C\u016F\x03\x02\x02\x02\u016D\u016B\x03" +
		"\x02\x02\x02\u016D\u016E\x03\x02\x02\x02\u016E\u0171\x03\x02\x02\x02\u016F" +
		"\u016D\x03\x02\x02\x02\u0170\u015D\x03\x02\x02\x02\u0170\u0168\x03\x02" +
		"\x02\x02\u0171\x19\x03\x02\x02\x02\u0172\u0174\x074\x02\x02\u0173\u0172" +
		"\x03\x02\x02\x02\u0174\u0177\x03\x02\x02\x02\u0175\u0173\x03\x02\x02\x02" +
		"\u0175\u0176\x03";
	private static readonly _serializedATNSegment1: string =
		"\x02\x02\x02\u0176\u0178\x03\x02\x02\x02\u0177\u0175\x03\x02\x02\x02\u0178" +
		"\u017A\x05\xA2R\x02\u0179\u0175\x03\x02\x02\x02\u017A\u017B\x03\x02\x02" +
		"\x02\u017B\u0179\x03\x02\x02\x02\u017B\u017C\x03\x02\x02\x02\u017C\u017E" +
		"\x03\x02\x02\x02\u017D\u017F\x074\x02\x02\u017E\u017D\x03\x02\x02\x02" +
		"\u017F\u0180\x03\x02\x02\x02\u0180\u017E\x03\x02\x02\x02\u0180\u0181\x03" +
		"\x02\x02\x02\u0181\x1B\x03\x02\x02\x02\u0182\u019D\x07\x9F\x02\x02\u0183" +
		"\u019D\x075\x02\x02\u0184\u019D\x05\xA4S\x02\u0185\u019D\x05\x1E\x10\x02" +
		"\u0186\u019D\x05\x98M\x02\u0187\u019D\x05\x82B\x02\u0188\u019D\x05\x9C" +
		"O\x02\u0189\u019D\x05x=\x02\u018A\u019D\x05\x8EH\x02\u018B\u019D\x05\x8A" +
		"F\x02\u018C\u019D\x05\x8CG\x02\u018D\u019D\x05\xA2R\x02\u018E\u019D\x05" +
		"~@\x02\u018F\u019D\x05\x90I\x02\u0190\u019D\x05`1\x02\u0191\u019D\x05" +
		"j6\x02\u0192\u019D\x05\\/\x02\u0193\u019D\x05P)\x02\u0194\u019D\x05R*" +
		"\x02\u0195\u019D\x05V,\x02\u0196\u019D\x05T+\x02\u0197\u019D\x05X-\x02" +
		"\u0198\u019D\x05|?\x02\u0199\u019D\x05\x9EP\x02\u019A\u019D\x05\x80A\x02" +
		"\u019B\u019D\x05\xACW\x02\u019C\u0182\x03\x02\x02\x02\u019C\u0183\x03" +
		"\x02\x02\x02\u019C\u0184\x03\x02\x02\x02\u019C\u0185\x03\x02\x02\x02\u019C" +
		"\u0186\x03\x02\x02\x02\u019C\u0187\x03\x02\x02\x02\u019C\u0188\x03\x02" +
		"\x02\x02\u019C\u0189\x03\x02\x02\x02\u019C\u018A\x03\x02\x02\x02\u019C" +
		"\u018B\x03\x02\x02\x02\u019C\u018C\x03\x02\x02\x02\u019C\u018D\x03\x02" +
		"\x02\x02\u019C\u018E\x03\x02\x02\x02\u019C\u018F\x03\x02\x02\x02\u019C" +
		"\u0190\x03\x02\x02\x02\u019C\u0191\x03\x02\x02\x02\u019C\u0192\x03\x02" +
		"\x02\x02\u019C\u0193\x03\x02\x02\x02\u019C\u0194\x03\x02\x02\x02\u019C" +
		"\u0195\x03\x02\x02\x02\u019C\u0196\x03\x02\x02\x02\u019C\u0197\x03\x02" +
		"\x02\x02\u019C\u0198\x03\x02\x02\x02\u019C\u0199\x03\x02\x02\x02\u019C" +
		"\u019A\x03\x02\x02\x02\u019C\u019B\x03\x02\x02\x02\u019D\x1D\x03\x02\x02" +
		"\x02\u019E\u01A6\x05 \x11\x02\u019F\u01A5\x05 \x11\x02\u01A0\u01A5\x05" +
		"\x8AF\x02\u01A1\u01A5\x05\x8CG\x02\u01A2\u01A5\x05x=\x02\u01A3\u01A5\x05" +
		"~@\x02\u01A4\u019F\x03\x02\x02\x02\u01A4\u01A0\x03\x02\x02\x02\u01A4\u01A1" +
		"\x03\x02\x02\x02\u01A4\u01A2\x03\x02\x02\x02\u01A4\u01A3\x03\x02\x02\x02" +
		"\u01A5\u01A8\x03\x02\x02\x02\u01A6\u01A4\x03\x02\x02\x02\u01A6\u01A7\x03" +
		"\x02\x02\x02\u01A7\x1F\x03\x02\x02\x02\u01A8\u01A6\x03\x02\x02\x02\u01A9" +
		"\u01AD\x07\r\x02\x02\u01AA\u01AE\x072\x02\x02\u01AB\u01AE\x073\x02\x02" +
		"\u01AC\u01AE\x03\x02\x02\x02\u01AD\u01AA\x03\x02\x02\x02\u01AD\u01AB\x03" +
		"\x02\x02\x02\u01AD\u01AC\x03\x02\x02\x02\u01AE\u01B2\x03\x02\x02\x02\u01AF" +
		"\u01B1\x05\xA2R\x02\u01B0\u01AF\x03\x02\x02\x02\u01B1\u01B4\x03\x02\x02" +
		"\x02\u01B2\u01B0\x03\x02\x02\x02\u01B2\u01B3\x03\x02\x02\x02\u01B3\u01B5" +
		"\x03\x02\x02\x02\u01B4\u01B2\x03\x02\x02\x02\u01B5\u01B6\x05\xA6T\x02" +
		"\u01B6!\x03\x02\x02\x02\u01B7\u01B9\x05x=\x02\u01B8\u01B7\x03\x02\x02" +
		"\x02\u01B8\u01B9\x03\x02\x02\x02\u01B9\u01BA\x03\x02\x02\x02\u01BA\u01BC" +
		"\x07\x11\x02\x02\u01BB\u01BD\x05\xA2R\x02\u01BC\u01BB\x03\x02\x02\x02" +
		"\u01BD\u01BE\x03\x02\x02\x02\u01BE\u01BC\x03\x02\x02\x02\u01BE\u01BF\x03" +
		"\x02\x02\x02\u01BF\u01C0\x03\x02\x02\x02\u01C0\u01C1\x07\x1B\x02\x02\u01C1" +
		"#\x03\x02\x02\x02\u01C2\u01C4\x05x=\x02\u01C3\u01C2\x03\x02\x02\x02\u01C3" +
		"\u01C4\x03\x02\x02\x02\u01C4\u01C5\x03\x02\x02\x02\u01C5\u01C7\x07\x12" +
		"\x02\x02\u01C6\u01C8\x05\xA2R\x02\u01C7\u01C6\x03\x02\x02\x02\u01C8\u01C9" +
		"\x03\x02\x02\x02\u01C9\u01C7\x03\x02\x02\x02\u01C9\u01CA\x03\x02\x02\x02" +
		"\u01CA\u01CB\x03\x02\x02\x02\u01CB\u01CC\x07\x1B\x02\x02\u01CC%\x03\x02" +
		"\x02\x02\u01CD\u01CF\x05x=\x02\u01CE\u01CD\x03\x02\x02\x02\u01CE\u01CF" +
		"\x03\x02\x02\x02\u01CF\u01D0\x03\x02\x02\x02\u01D0\u01D2\x07\x14\x02\x02" +
		"\u01D1\u01D3\x05\xA2R\x02\u01D2\u01D1\x03\x02\x02\x02\u01D3\u01D4\x03" +
		"\x02\x02\x02\u01D4\u01D2\x03\x02\x02\x02\u01D4\u01D5\x03\x02\x02\x02\u01D5" +
		"\u01D6\x03\x02\x02\x02\u01D6\u01D7\x07\x1B\x02\x02\u01D7\'\x03\x02\x02" +
		"\x02\u01D8\u01D9\x05\x1C\x0F\x02\u01D9)\x03\x02\x02\x02\u01DA\u01DB\x07" +
		"\b\x02\x02\u01DB\u01DC\x05\xA2R\x02\u01DC\u01DE\x07\x1B\x02\x02\u01DD" +
		"\u01DF\x05,\x17\x02\u01DE\u01DD\x03\x02\x02\x02\u01DE\u01DF\x03\x02\x02" +
		"\x02\u01DF+\x03\x02\x02\x02\u01E0\u01E1\x07I\x02\x02\u01E1\u01E2\x072" +
		"\x02\x02\u01E2\u01E3\x07\x1B\x02\x02\u01E3-\x03\x02\x02\x02\u01E4\u01E6" +
		"\x050\x19\x02\u01E5\u01E4\x03\x02\x02\x02\u01E6\u01E9\x03\x02\x02\x02" +
		"\u01E7\u01E5\x03\x02\x02\x02\u01E7\u01E8\x03\x02\x02\x02\u01E8\u01EF\x03" +
		"\x02\x02\x02\u01E9\u01E7\x03\x02\x02\x02\u01EA\u01EE\x07\x8B\x02\x02\u01EB" +
		"\u01EE\x07\x8C\x02\x02\u01EC\u01EE\x052\x1A\x02\u01ED\u01EA\x03\x02\x02" +
		"\x02\u01ED\u01EB\x03\x02\x02\x02\u01ED\u01EC\x03\x02\x02\x02\u01EE\u01F1" +
		"\x03\x02\x02\x02\u01EF\u01ED\x03\x02\x02\x02\u01EF\u01F0\x03\x02\x02\x02" +
		"\u01F0/\x03\x02\x02\x02\u01F1\u01EF\x03\x02\x02\x02\u01F2\u01F3\t\x02" +
		"\x02\x02\u01F31\x03\x02\x02\x02\u01F4\u01FE\x056\x1C\x02\u01F5\u01FE\x05" +
		"n8\x02\u01F6\u01FE\x058\x1D\x02\u01F7\u01FE\x05:\x1E\x02\u01F8\u01FE\x05" +
		"<\x1F\x02\u01F9\u01FE\x05> \x02\u01FA\u01FE\x05@!\x02\u01FB\u01FE\x05" +
		"B\"\x02\u01FC\u01FE\x07a\x02\x02\u01FD\u01F4\x03\x02\x02\x02\u01FD\u01F5" +
		"\x03\x02\x02\x02\u01FD\u01F6\x03\x02\x02\x02\u01FD\u01F7\x03\x02\x02\x02" +
		"\u01FD\u01F8\x03\x02\x02\x02\u01FD\u01F9\x03\x02\x02\x02\u01FD\u01FA\x03" +
		"\x02\x02\x02\u01FD\u01FB\x03\x02\x02\x02\u01FD\u01FC\x03\x02\x02\x02\u01FE" +
		"3\x03\x02\x02\x02\u01FF\u0206\x07\x89\x02\x02\u0200\u0206\x07\x8A\x02" +
		"\x02\u0201\u0206\x07\x8B\x02\x02\u0202\u0206\x07\x8E\x02\x02\u0203\u0206" +
		"\x07\x8C\x02\x02\u0204\u0206\x03\x02\x02\x02\u0205\u01FF\x03\x02\x02\x02" +
		"\u0205\u0200\x03\x02\x02\x02\u0205\u0201\x03\x02\x02\x02\u0205\u0202\x03" +
		"\x02\x02\x02\u0205\u0203\x03\x02\x02\x02\u0205\u0204\x03\x02\x02\x02\u0206" +
		"5\x03\x02\x02\x02\u0207\u020A\x07Y\x02\x02\u0208\u020B\x07-\x02\x02\u0209" +
		"\u020B\x07\x9C\x02\x02\u020A\u0208\x03\x02\x02\x02\u020A\u0209\x03\x02" +
		"\x02\x02\u020A\u020B\x03\x02\x02\x02\u020B\u0215\x03\x02\x02\x02\u020C" +
		"\u020E\x07n\x02\x02\u020D\u020F\x07-\x02\x02\u020E\u020D\x03\x02\x02\x02" +
		"\u020E\u020F\x03\x02\x02\x02\u020F\u0215\x03\x02\x02\x02\u0210\u0212\x07" +
		"Z\x02\x02\u0211\u0213\x07-\x02\x02\u0212\u0211\x03\x02\x02\x02\u0212\u0213" +
		"\x03\x02\x02\x02\u0213\u0215\x03\x02\x02\x02\u0214\u0207\x03\x02\x02\x02" +
		"\u0214\u020C\x03\x02\x02\x02\u0214\u0210\x03\x02\x02\x02\u02157\x03\x02" +
		"\x02\x02\u0216\u0219\t\x03\x02\x02\u0217\u0218\x07\x1C\x02\x02\u0218\u021A" +
		"\x07/\x02\x02\u0219\u0217\x03\x02\x02\x02\u0219\u021A\x03\x02\x02\x02" +
		"\u021A9\x03\x02\x02\x02\u021B\u021C\t\x04\x02\x02\u021C;\x03\x02\x02\x02" +
		"\u021D\u021E\t\x05\x02\x02\u021E=\x03\x02\x02\x02\u021F\u0220\t\x06\x02" +
		"\x02\u0220?\x03\x02\x02\x02\u0221\u0222\t\x07\x02\x02\u0222A\x03\x02\x02" +
		"\x02\u0223\u0224\t\b\x02\x02\u0224C\x03\x02\x02\x02\u0225\u0226\t\t\x02" +
		"\x02\u0226E\x03\x02\x02\x02\u0227\u0228\t\n\x02\x02\u0228G\x03\x02\x02" +
		"\x02\u0229\u022A\t\v\x02\x02\u022AI\x03\x02\x02\x02\u022B\u022C\t\f\x02" +
		"\x02\u022CK\x03\x02\x02\x02\u022D\u0230\x07e\x02\x02\u022E\u022F\x07\x1C" +
		"\x02\x02\u022F\u0231\x07/\x02\x02\u0230\u022E\x03\x02\x02\x02\u0230\u0231" +
		"\x03\x02\x02\x02\u0231\u023D\x03\x02\x02\x02\u0232\u0235\x07x\x02\x02" +
		"\u0233\u0234\x07\x1C\x02\x02\u0234\u0236\x07/\x02\x02\u0235\u0233\x03" +
		"\x02\x02\x02\u0235\u0236\x03\x02\x02\x02\u0236\u023D\x03\x02\x02\x02\u0237" +
		"\u023A\x07\x85\x02\x02\u0238\u0239\x07\x1C\x02\x02\u0239\u023B\x07/\x02" +
		"\x02\u023A\u0238\x03\x02\x02\x02\u023A\u023B\x03\x02\x02\x02\u023B\u023D" +
		"\x03\x02\x02\x02\u023C\u022D\x03\x02\x02\x02\u023C\u0232\x03\x02\x02\x02" +
		"\u023C\u0237\x03\x02\x02\x02\u023DM\x03\x02\x02\x02\u023E\u023F\t\r\x02" +
		"\x02\u023FO\x03\x02\x02\x02\u0240\u0241\x05D#\x02\u0241\u0242\x07\x1C" +
		"\x02\x02\u0242\u0243\x05v<\x02\u0243\u0244\x07\x1B\x02\x02\u0244\u0247" +
		"\x03\x02\x02\x02\u0245\u0247\x070\x02\x02\u0246\u0240\x03\x02\x02\x02" +
		"\u0246\u0245\x03\x02\x02\x02\u0247Q\x03\x02\x02\x02\u0248\u0249\x05F$" +
		"\x02\u0249\u024A\x07\x1C\x02\x02\u024A\u024B\x05v<\x02\u024B\u0250\x07" +
		"\x1B\x02\x02\u024C\u024D\x07L\x02\x02\u024D\u024E\x05\xAAV\x02\u024E\u024F" +
		"\x07\x1B\x02\x02\u024F\u0251\x03\x02\x02\x02\u0250\u024C\x03\x02\x02\x02" +
		"\u0250\u0251\x03\x02\x02\x02\u0251S\x03\x02\x02\x02\u0252\u0253\x05J&" +
		"\x02\u0253\u0254\x07\x1C\x02\x02\u0254\u0255\x05v<\x02\u0255\u025A\x07" +
		"\x1B\x02\x02\u0256\u0257\x07L\x02\x02\u0257\u0258\x05\xAAV\x02\u0258\u0259" +
		"\x07\x1B\x02\x02\u0259\u025B\x03\x02\x02\x02\u025A\u0256\x03\x02\x02\x02" +
		"\u025A\u025B\x03\x02\x02\x02\u025BU\x03\x02\x02\x02\u025C\u025D\x05H%" +
		"\x02\u025D\u0260\x07\x1C\x02\x02\u025E\u0261\x05v<\x02\u025F\u0261\x05" +
		"t;\x02\u0260\u025E\x03\x02\x02\x02\u0260\u025F\x03\x02\x02\x02\u0261\u0262" +
		"\x03\x02\x02\x02\u0262\u0267\x07\x1B\x02\x02\u0263\u0264\x07L\x02\x02" +
		"\u0264\u0265\x05\xAAV\x02\u0265\u0266\x07\x1B\x02\x02\u0266\u0268\x03" +
		"\x02\x02\x02\u0267\u0263\x03\x02\x02\x02\u0267\u0268\x03\x02\x02\x02\u0268" +
		"W\x03\x02\x02\x02\u0269\u026D\x05Z.\x02\u026A\u026C\x05r:\x02\u026B\u026A" +
		"\x03\x02\x02\x02\u026C\u026F\x03\x02\x02\x02\u026D\u026B\x03\x02\x02\x02" +
		"\u026D\u026E\x03\x02\x02\x02\u026EY\x03\x02\x02\x02\u026F\u026D\x03\x02" +
		"\x02\x02\u0270\u0271\x05N(\x02\u0271\u0275\x07\x1C\x02\x02\u0272\u0274" +
		"\x07\x04\x02\x02\u0273\u0272\x03\x02\x02\x02\u0274\u0277\x03\x02\x02\x02" +
		"\u0275\u0273\x03\x02\x02\x02\u0275\u0276\x03\x02\x02\x02\u0276\u0278\x03" +
		"\x02\x02\x02\u0277\u0275\x03\x02\x02\x02\u0278\u0279\x05v<\x02\u0279\u027A" +
		"\x07\x1B\x02\x02\u027A[\x03\x02\x02\x02\u027B\u027F\x05^0\x02\u027C\u027E" +
		"\x05r:\x02\u027D\u027C\x03\x02\x02\x02\u027E\u0281\x03\x02\x02\x02\u027F" +
		"\u027D\x03\x02\x02\x02\u027F\u0280\x03\x02\x02\x02\u0280]\x03\x02\x02" +
		"\x02\u0281\u027F\x03\x02\x02\x02\u0282\u0283\x05L\'\x02\u0283\u0284\x07" +
		"\x1C\x02\x02\u0284\u0285\x05v<\x02\u0285\u028A\x07\x1B\x02\x02\u0286\u0287" +
		"\x07L\x02\x02\u0287\u0288\x05\xAAV\x02\u0288\u0289\x07\x1B\x02\x02\u0289" +
		"\u028B\x03\x02\x02\x02\u028A\u0286\x03\x02\x02\x02\u028A\u028B\x03\x02" +
		"\x02\x02\u028B_\x03\x02\x02\x02\u028C\u0290\x05b2\x02\u028D\u028F\x05" +
		"f4\x02\u028E\u028D\x03\x02\x02\x02\u028F\u0292\x03\x02\x02\x02\u0290\u028E" +
		"\x03\x02\x02\x02\u0290\u0291\x03\x02\x02\x02\u0291\u0295\x03\x02\x02\x02" +
		"\u0292\u0290\x03\x02\x02\x02\u0293\u0294\x074\x02\x02\u0294\u0296\x07" +
		"N\x02\x02\u0295\u0293\x03\x02\x02\x02\u0295\u0296\x03\x02\x02\x02\u0296" +
		"a\x03\x02\x02\x02\u0297\u0298\x05d3\x02\u0298\u029C\x07\x1C\x02\x02\u0299" +
		"\u029B\x07\x04\x02\x02\u029A\u0299\x03\x02\x02\x02\u029B\u029E\x03\x02" +
		"\x02\x02\u029C\u029A\x03\x02\x02\x02\u029C\u029D\x03\x02\x02\x02\u029D" +
		"\u029F\x03\x02\x02\x02\u029E\u029C\x03\x02\x02\x02\u029F\u02A0\x05v<\x02" +
		"\u02A0\u02A1\x07\x1B\x02\x02\u02A1c\x03\x02\x02\x02\u02A2\u02A5\x07c\x02" +
		"\x02\u02A3\u02A6\x07-\x02\x02\u02A4\u02A6\x07\x9C\x02\x02\u02A5\u02A3" +
		"\x03\x02\x02\x02\u02A5\u02A4\x03\x02\x02\x02\u02A5\u02A6\x03\x02\x02\x02" +
		"\u02A6\u02B0\x03\x02\x02\x02\u02A7\u02A9\x07w\x02\x02\u02A8\u02AA\x07" +
		"-\x02\x02\u02A9\u02A8\x03\x02\x02\x02\u02A9\u02AA\x03\x02\x02\x02\u02AA" +
		"\u02B0\x03\x02\x02\x02\u02AB\u02AD\x07d\x02\x02\u02AC\u02AE\x07-\x02\x02" +
		"\u02AD\u02AC\x03\x02\x02\x02\u02AD\u02AE\x03\x02\x02\x02\u02AE\u02B0\x03" +
		"\x02\x02\x02\u02AF\u02A2\x03\x02\x02\x02\u02AF\u02A7\x03\x02\x02\x02\u02AF" +
		"\u02AB\x03\x02\x02\x02\u02B0e\x03\x02\x02\x02\u02B1\u02B2\x07J\x02\x02" +
		"\u02B2\u02B3\x07\x1C\x02\x02\u02B3\u02B4\x05v<\x02\u02B4\u02B5\x07\x1B" +
		"\x02\x02\u02B5\u02C3\x03\x02\x02\x02\u02B6\u02B7\t\x0E\x02\x02\u02B7\u02B8" +
		"\x07\x1C\x02\x02\u02B8\u02B9\x072\x02\x02\u02B9\u02C3\x07\x1B\x02\x02" +
		"\u02BA\u02BE\t\x0F\x02\x02\u02BB\u02BD\v\x02\x02\x02\u02BC\u02BB\x03\x02" +
		"\x02\x02\u02BD\u02C0\x03\x02\x02\x02\u02BE\u02BF\x03\x02\x02\x02\u02BE" +
		"\u02BC\x03\x02\x02\x02\u02BF\u02C1\x03\x02\x02\x02\u02C0\u02BE\x03\x02" +
		"\x02\x02\u02C1\u02C3\x07\x1B\x02\x02\u02C2\u02B1\x03\x02\x02\x02\u02C2" +
		"\u02B6\x03\x02\x02\x02\u02C2\u02BA\x03\x02\x02\x02\u02C3g\x03\x02\x02" +
		"\x02\u02C4\u02C5\x07J\x02\x02\u02C5\u02C6\x07\x1C\x02\x02\u02C6\u02C7" +
		"\x05v<\x02\u02C7\u02C8\x07\x1B\x02\x02\u02C8\u02D6\x03\x02\x02\x02\u02C9" +
		"\u02CA\t\x0E\x02\x02\u02CA\u02CB\x07\x1C\x02\x02\u02CB\u02CC\x072\x02" +
		"\x02\u02CC\u02D6\x07\x1B\x02\x02\u02CD\u02D1\t\x0F\x02\x02\u02CE\u02D0" +
		"\v\x02\x02\x02\u02CF\u02CE\x03\x02\x02\x02\u02D0\u02D3\x03\x02\x02\x02" +
		"\u02D1\u02D2\x03\x02\x02\x02\u02D1\u02CF\x03\x02\x02\x02\u02D2\u02D4\x03" +
		"\x02\x02\x02\u02D3\u02D1\x03\x02\x02\x02\u02D4\u02D6\x07\x1B\x02\x02\u02D5" +
		"\u02C4\x03\x02\x02\x02\u02D5\u02C9\x03\x02\x02\x02\u02D5\u02CD\x03\x02" +
		"\x02\x02\u02D6i\x03\x02\x02\x02\u02D7\u02DB\x05l7\x02\u02D8\u02DA\x05" +
		"r:\x02\u02D9\u02D8\x03\x02\x02\x02\u02DA\u02DD\x03\x02\x02\x02\u02DB\u02D9" +
		"\x03\x02\x02\x02\u02DB\u02DC\x03\x02\x02\x02\u02DCk\x03\x02\x02\x02\u02DD" +
		"\u02DB\x03\x02\x02\x02\u02DE\u02DF\x05p9\x02\u02DF\u02E0\x07\x1C\x02\x02" +
		"\u02E0\u02E1\x05v<\x02\u02E1\u02E6\x07\x1B\x02\x02\u02E2\u02E3\x07L\x02" +
		"\x02\u02E3\u02E4\x05\xAAV\x02\u02E4\u02E5\x07\x1B\x02\x02\u02E5\u02E7" +
		"\x03\x02\x02\x02\u02E6\u02E2\x03\x02\x02\x02\u02E6\u02E7\x03\x02\x02\x02" +
		"\u02E7m\x03\x02\x02\x02\u02E8\u02EB\x07X\x02\x02\u02E9\u02EA\x07\x1C\x02" +
		"\x02\u02EA\u02EC\x07.\x02\x02\u02EB\u02E9\x03\x02\x02\x02\u02EB\u02EC" +
		"\x03\x02\x02\x02\u02EC\u02F3\x03\x02\x02\x02\u02ED\u02F0\x07m\x02\x02" +
		"\u02EE\u02EF\x07\x1C\x02\x02\u02EF\u02F1\x07.\x02\x02\u02F0\u02EE\x03" +
		"\x02\x02\x02\u02F0\u02F1\x03\x02\x02\x02\u02F1\u02F3\x03\x02\x02\x02\u02F2" +
		"\u02E8\x03\x02\x02\x02\u02F2\u02ED\x03\x02\x02\x02\u02F3o\x03\x02\x02" +
		"\x02\u02F4\u02F7\x07b\x02\x02\u02F5\u02F6\x07\x1C\x02\x02\u02F6\u02F8" +
		"\x07.\x02\x02\u02F7\u02F5\x03\x02\x02\x02\u02F7\u02F8\x03\x02\x02\x02" +
		"\u02F8\u0304\x03\x02\x02\x02\u02F9\u02FC\x07v\x02\x02\u02FA\u02FB\x07" +
		"\x1C\x02\x02\u02FB\u02FD\x07.\x02\x02\u02FC\u02FA\x03\x02\x02\x02\u02FC" +
		"\u02FD\x03\x02\x02\x02\u02FD\u0304\x03\x02\x02\x02\u02FE\u0301\x07\x86" +
		"\x02\x02\u02FF\u0300\x07\x1C\x02\x02\u0300\u0302\x07.\x02\x02\u0301\u02FF" +
		"\x03\x02\x02\x02\u0301\u0302\x03\x02\x02\x02\u0302\u0304\x03\x02\x02\x02" +
		"\u0303\u02F4\x03\x02\x02\x02\u0303\u02F9\x03\x02\x02\x02\u0303\u02FE\x03" +
		"\x02\x02\x02\u0304q\x03\x02\x02\x02\u0305\u0306\x07\x10\x02\x02\u0306" +
		"\u0309\x05\xA2R\x02\u0307\u0309\x07J\x02\x02\u0308\u0305\x03\x02\x02\x02" +
		"\u0308\u0307\x03\x02\x02\x02\u0309\u030A\x03\x02\x02\x02\u030A\u030E\x07" +
		"\x1C\x02\x02\u030B\u030D\x07\x04\x02\x02\u030C\u030B\x03\x02\x02\x02\u030D" +
		"\u0310\x03\x02\x02\x02\u030E\u030C\x03\x02\x02\x02\u030E\u030F\x03\x02" +
		"\x02\x02\u030F\u0313\x03\x02\x02\x02\u0310\u030E\x03\x02\x02\x02\u0311" +
		"\u0314\x05\xA2R\x02\u0312\u0314\x074\x02\x02\u0313\u0311\x03\x02\x02\x02" +
		"\u0313\u0312\x03\x02\x02\x02\u0314\u0315\x03\x02\x02\x02\u0315\u0313\x03" +
		"\x02\x02\x02\u0315\u0316\x03\x02\x02\x02\u0316\u0317\x03\x02\x02\x02\u0317" +
		"\u0325\x07\x1B\x02\x02\u0318\u0319\t\x0E\x02\x02\u0319\u031A\x07\x1C\x02" +
		"\x02\u031A\u031B\x072\x02\x02\u031B\u0325\x07\x1B\x02\x02\u031C\u0320" +
		"\t\x0F\x02\x02\u031D\u031F\v\x02\x02\x02\u031E\u031D\x03\x02\x02\x02\u031F" +
		"\u0322\x03\x02\x02\x02\u0320\u0321\x03\x02\x02\x02\u0320\u031E\x03\x02" +
		"\x02\x02\u0321\u0323\x03\x02\x02\x02\u0322\u0320\x03\x02\x02\x02\u0323" +
		"\u0325\x07\x1B\x02\x02\u0324\u0308\x03\x02\x02\x02\u0324\u0318\x03\x02" +
		"\x02\x02\u0324\u031C\x03\x02\x02\x02\u0325s\x03\x02\x02\x02\u0326\u0327" +
		"\x07\x9B\x02\x02\u0327\u0328\x07\x1F\x02\x02\u0328\u0329\x072\x02\x02" +
		"\u0329u\x03\x02\x02\x02\u032A\u032B\x07\x9E\x02\x02\u032Bw\x03\x02\x02" +
		"\x02\u032C\u0331\x07\x16\x02\x02\u032D\u0330\x07\x1C\x02\x02\u032E\u0330" +
		"\x05\xA2R\x02\u032F\u032D\x03\x02\x02\x02\u032F\u032E\x03\x02\x02\x02" +
		"\u0330\u0333\x03\x02\x02\x02\u0331\u032F\x03\x02\x02\x02\u0331\u0332\x03" +
		"\x02\x02\x02\u0332\u0334\x03\x02\x02\x02\u0333\u0331\x03\x02\x02\x02\u0334" +
		"\u033E\x07\x1B\x02\x02\u0335\u0337\x07\x04\x02\x02\u0336\u0335\x03\x02" +
		"\x02\x02\u0337\u033A\x03\x02\x02\x02\u0338\u0336\x03\x02\x02\x02\u0338" +
		"\u0339\x03\x02\x02\x02\u0339\u033B\x03\x02\x02\x02\u033A\u0338\x03\x02" +
		"\x02\x02\u033B\u033D\x05z>\x02\u033C\u0338\x03\x02\x02\x02\u033D\u0340" +
		"\x03\x02\x02\x02\u033E\u033C\x03\x02\x02\x02\u033E\u033F\x03\x02\x02\x02" +
		"\u033F\u0353\x03\x02\x02\x02\u0340\u033E\x03\x02\x02\x02\u0341\u0343\x07" +
		"\x15\x02\x02\u0342\u0344\x05\xA2R\x02\u0343\u0342\x03\x02\x02\x02\u0343" +
		"\u0344\x03\x02\x02\x02\u0344\u0345\x03\x02\x02\x02\u0345\u034F\x07\x1B" +
		"\x02\x02\u0346\u0348\x07\x04\x02\x02\u0347\u0346\x03\x02\x02\x02\u0348" +
		"\u034B\x03\x02\x02\x02\u0349\u0347\x03\x02\x02\x02\u0349\u034A\x03\x02" +
		"\x02\x02\u034A\u034C\x03\x02\x02\x02\u034B\u0349\x03\x02\x02\x02\u034C" +
		"\u034E\x05z>\x02\u034D\u0349\x03\x02\x02\x02\u034E\u0351\x03\x02\x02\x02" +
		"\u034F\u034D\x03\x02\x02\x02\u034F\u0350\x03\x02\x02\x02\u0350\u0353\x03" +
		"\x02\x02\x02\u0351\u034F\x03\x02\x02\x02\u0352\u032C\x03\x02\x02\x02\u0352" +
		"\u0341\x03\x02\x02\x02\u0353y\x03\x02\x02\x02\u0354\u0355\x07\x17\x02" +
		"\x02\u0355\u035A\x05\xA2R\x02\u0356\u0359\x07\x1C\x02\x02\u0357\u0359" +
		"\x05\xA2R\x02\u0358\u0356\x03\x02\x02\x02\u0358\u0357\x03\x02\x02\x02" +
		"\u0359\u035C\x03\x02\x02\x02\u035A\u0358\x03\x02\x02\x02\u035A\u035B\x03" +
		"\x02\x02\x02\u035B\u035D\x03\x02\x02\x02\u035C\u035A\x03\x02\x02\x02\u035D" +
		"\u035E\x07\x1B\x02\x02\u035E\u0382\x03\x02\x02\x02\u035F\u0360\x07\x18" +
		"\x02\x02\u0360\u0365\x05\xA2R\x02\u0361\u0364\x07\x1C\x02\x02\u0362\u0364" +
		"\x05\xA2R\x02\u0363\u0361\x03\x02\x02\x02\u0363\u0362\x03\x02\x02\x02" +
		"\u0364\u0367\x03\x02\x02\x02\u0365\u0363\x03\x02\x02\x02\u0365\u0366\x03" +
		"\x02\x02\x02\u0366\u0368\x03\x02\x02\x02\u0367\u0365\x03\x02\x02\x02\u0368" +
		"\u0369\x07\x1B\x02\x02\u0369\u0382\x03\x02\x02\x02\u036A\u036B\x07\x19" +
		"\x02\x02\u036B\u0370\x05\xA2R\x02\u036C\u036F\x07\x1C\x02\x02\u036D\u036F" +
		"\x05\xA2R\x02\u036E\u036C\x03\x02\x02\x02\u036E\u036D\x03\x02\x02\x02" +
		"\u036F\u0372\x03\x02\x02\x02\u0370\u036E\x03\x02\x02\x02\u0370\u0371\x03" +
		"\x02\x02\x02\u0371\u0373\x03\x02\x02\x02\u0372\u0370\x03\x02\x02\x02\u0373" +
		"\u0374\x07\x1B\x02\x02\u0374\u0382\x03\x02\x02\x02\u0375\u0377\x07\x15" +
		"\x02\x02\u0376\u0378\x05\xA2R\x02\u0377\u0376\x03\x02\x02\x02\u0377\u0378" +
		"\x03\x02\x02\x02\u0378\u037D\x03\x02\x02\x02\u0379\u037C\x07\x1C\x02\x02" +
		"\u037A\u037C\x05\xA2R\x02\u037B\u0379\x03\x02\x02\x02\u037B\u037A\x03" +
		"\x02\x02\x02\u037C\u037F\x03\x02\x02\x02\u037D\u037B\x03\x02\x02\x02\u037D" +
		"\u037E\x03\x02\x02\x02\u037E\u0380\x03\x02\x02\x02\u037F\u037D\x03\x02" +
		"\x02\x02\u0380\u0382\x07\x1B\x02\x02\u0381\u0354\x03\x02\x02\x02\u0381" +
		"\u035F\x03\x02\x02\x02\u0381\u036A\x03\x02\x02\x02\u0381\u0375\x03\x02" +
		"\x02\x02\u0382{\x03\x02\x02\x02\u0383\u0385\x07\n\x02\x02\u0384\u0386" +
		"\x05\xA2R\x02\u0385\u0384\x03\x02\x02\x02\u0385\u0386\x03\x02\x02\x02" +
		"\u0386\u0387\x03\x02\x02\x02\u0387\u038E\x07\x1B\x02\x02\u0388\u038A\x07" +
		"\v\x02\x02\u0389\u038B\x05\xA2R\x02\u038A\u0389\x03\x02\x02\x02\u038A" +
		"\u038B\x03\x02\x02\x02\u038B\u038C\x03\x02\x02\x02\u038C\u038E\x07\x1B" +
		"\x02\x02\u038D\u0383\x03\x02\x02\x02\u038D\u0388\x03\x02\x02\x02\u038E" +
		"}\x03\x02\x02\x02\u038F\u0397\x07C\x02\x02\u0390\u0397\x07A\x02\x02\u0391" +
		"\u0393\x07B\x02\x02\u0392\u0394\x077\x02\x02\u0393\u0392\x03\x02\x02\x02" +
		"\u0393\u0394\x03\x02\x02\x02\u0394\u0395\x03\x02\x02\x02\u0395\u0397\x07" +
		"\x02\x02\x03\u0396\u038F\x03\x02\x02\x02\u0396\u0390\x03\x02\x02\x02\u0396" +
		"\u0391\x03\x02\x02\x02\u0397\x7F\x03\x02\x02\x02\u0398\u039A\x07l\x02" +
		"\x02\u0399\u039B\x05\xA2R\x02\u039A\u0399\x03\x02\x02\x02\u039A\u039B" +
		"\x03\x02\x02\x02\u039B\u03B1\x03\x02\x02\x02\u039C\u03A6\x05\xA2R\x02" +
		"\u039D\u03A1\x074\x02\x02\u039E\u03A0\x07\x04\x02\x02\u039F\u039E\x03" +
		"\x02\x02\x02\u03A0\u03A3\x03\x02\x02\x02\u03A1\u039F\x03\x02\x02\x02\u03A1" +
		"\u03A2\x03\x02\x02\x02\u03A2\u03A5\x03\x02\x02\x02\u03A3\u03A1\x03\x02" +
		"\x02\x02\u03A4\u039D\x03\x02\x02\x02\u03A5\u03A8\x03\x02\x02\x02\u03A6" +
		"\u03A4\x03\x02\x02\x02\u03A6\u03A7\x03\x02\x02\x02\u03A7\u03AC\x03\x02" +
		"\x02\x02\u03A8\u03A6\x03\x02\x02\x02\u03A9\u03AB\x074\x02\x02\u03AA\u03A9" +
		"\x03\x02\x02\x02\u03AB\u03AE\x03\x02\x02\x02\u03AC\u03AA\x03\x02\x02\x02" +
		"\u03AC\u03AD\x03\x02\x02\x02\u03AD\u03B0\x03\x02\x02\x02\u03AE\u03AC\x03" +
		"\x02\x02\x02\u03AF\u039C\x03\x02\x02\x02\u03B0\u03B3\x03\x02\x02\x02\u03B1" +
		"\u03AF\x03\x02\x02\x02\u03B1\u03B2\x03\x02\x02\x02\u03B2\u03B4\x03\x02" +
		"\x02\x02\u03B3\u03B1\x03\x02\x02\x02\u03B4\u03C0\x07\x1B\x02\x02\u03B5" +
		"\u03BB\x07l\x02\x02\u03B6\u03BA\x05\xA2R\x02\u03B7\u03BA\x074\x02\x02" +
		"\u03B8\u03BA\x07\x04\x02\x02\u03B9\u03B6\x03\x02\x02\x02\u03B9\u03B7\x03" +
		"\x02\x02\x02\u03B9\u03B8\x03\x02\x02\x02\u03BA\u03BD\x03\x02\x02\x02\u03BB" +
		"\u03B9\x03\x02\x02\x02\u03BB\u03BC\x03\x02\x02\x02\u03BC\u03BE\x03\x02" +
		"\x02\x02\u03BD\u03BB\x03\x02\x02\x02\u03BE\u03C0\x07\x02\x02\x03\u03BF" +
		"\u0398\x03\x02\x02\x02\u03BF\u03B5\x03\x02\x02\x02\u03C0\x81\x03\x02\x02" +
		"\x02\u03C1\u03C6\x07;\x02\x02\u03C2\u03C7\x05\xA2R\x02\u03C3\u03C7\x07" +
		"\x1C\x02\x02\u03C4\u03C7\x07\x9E\x02\x02\u03C5\u03C7\x074\x02\x02\u03C6" +
		"\u03C2\x03\x02\x02\x02\u03C6\u03C3\x03\x02\x02\x02\u03C6\u03C4\x03\x02" +
		"\x02\x02\u03C6\u03C5\x03\x02\x02\x02\u03C7\u03C8\x03\x02\x02\x02\u03C8" +
		"\u03C6\x03\x02\x02\x02\u03C8\u03C9\x03\x02\x02\x02\u03C9\u03CA\x03\x02" +
		"\x02\x02\u03CA\u03D8\x07\x1B\x02\x02\u03CB\u03D3\x07;\x02\x02\u03CC\u03D2" +
		"\x05\xA2R\x02\u03CD\u03D2\x07\x1C\x02\x02\u03CE\u03D2\x07\x9E\x02\x02" +
		"\u03CF\u03D2\x074\x02\x02\u03D0\u03D2\x07\x04\x02\x02\u03D1\u03CC\x03" +
		"\x02\x02\x02\u03D1\u03CD\x03\x02\x02\x02\u03D1\u03CE\x03\x02\x02\x02\u03D1" +
		"\u03CF\x03\x02\x02\x02\u03D1\u03D0\x03\x02\x02\x02\u03D2\u03D5\x03\x02" +
		"\x02\x02\u03D3\u03D1\x03\x02\x02\x02\u03D3\u03D4\x03\x02\x02\x02\u03D4" +
		"\u03D6\x03\x02\x02\x02\u03D5\u03D3\x03\x02\x02\x02\u03D6\u03D8\x07\x02" +
		"\x02\x03\u03D7\u03C1\x03\x02\x02\x02\u03D7\u03CB\x03\x02\x02\x02\u03D8" +
		"\x83\x03\x02\x02\x02\u03D9\u03DA\x07:\x02\x02\u03DA\u03DB\x05\xA2R\x02" +
		"\u03DB\u03DC\x07\x1B\x02\x02\u03DC\x85\x03\x02\x02\x02\u03DD\u03E1\x07" +
		"U\x02\x02\u03DE\u03E2\x05\xA2R\x02\u03DF\u03E2\x07\x1C\x02\x02\u03E0\u03E2" +
		"\x074\x02\x02\u03E1\u03DE\x03\x02\x02\x02\u03E1\u03DF\x03\x02\x02\x02" +
		"\u03E1\u03E0\x03\x02\x02\x02\u03E2\u03E3\x03\x02\x02\x02\u03E3\u03E1\x03" +
		"\x02\x02\x02\u03E3\u03E4\x03\x02\x02\x02\u03E4\u03E5\x03\x02\x02\x02\u03E5" +
		"\u03E7\x07\x1B\x02\x02\u03E6\u03E8\x05\x88E\x02\u03E7\u03E6\x03\x02\x02" +
		"\x02\u03E7\u03E8\x03\x02\x02\x02\u03E8\x87\x03\x02\x02\x02\u03E9\u03ED" +
		"\x07U\x02\x02\u03EA\u03EE\x05\xA2R\x02\u03EB\u03EE\x07\x1C\x02\x02\u03EC" +
		"\u03EE\x074\x02\x02\u03ED\u03EA\x03\x02\x02\x02\u03ED\u03EB\x03\x02\x02" +
		"\x02\u03ED\u03EC\x03\x02\x02\x02\u03EE\u03EF\x03\x02\x02\x02\u03EF\u03ED" +
		"\x03\x02\x02\x02\u03EF\u03F0\x03\x02\x02\x02\u03F0\u03F1\x03\x02\x02\x02" +
		"\u03F1\u03F2\x07\x1B\x02\x02\u03F2\x89\x03\x02\x02\x02\u03F3\u03F7\x07" +
		"\x0E\x02\x02\u03F4\u03F6\x074\x02\x02\u03F5\u03F4\x03\x02\x02\x02\u03F6" +
		"\u03F9\x03\x02\x02\x02\u03F7\u03F5\x03\x02\x02\x02\u03F7\u03F8\x03\x02" +
		"\x02\x02\u03F8\u03FB\x03\x02\x02\x02\u03F9\u03F7\x03\x02\x02\x02\u03FA" +
		"\u03FC\x05\xA2R\x02\u03FB\u03FA\x03\x02\x02\x02\u03FB\u03FC\x03\x02\x02" +
		"\x02\u03FC\u040C\x03\x02\x02\x02\u03FD\u0401\x074\x02\x02\u03FE\u0400" +
		"\x07\x04\x02\x02\u03FF\u03FE\x03\x02\x02\x02\u0400\u0403\x03\x02\x02\x02" +
		"\u0401\u03FF\x03\x02\x02\x02\u0401\u0402\x03\x02\x02\x02\u0402\u0405\x03" +
		"\x02\x02\x02\u0403\u0401\x03\x02\x02\x02\u0404\u03FD\x03\x02\x02\x02\u0405" +
		"\u0408\x03\x02\x02\x02\u0406\u0404\x03\x02\x02\x02\u0406\u0407\x03\x02" +
		"\x02\x02\u0407\u0409\x03\x02\x02\x02\u0408\u0406\x03\x02\x02\x02\u0409" +
		"\u040B\x05\xA2R\x02\u040A\u0406\x03\x02\x02\x02\u040B\u040E\x03\x02\x02" +
		"\x02\u040C\u040A\x03\x02\x02\x02\u040C\u040D\x03\x02\x02\x02\u040D\u0412" +
		"\x03\x02\x02";
	private static readonly _serializedATNSegment2: string =
		"\x02\u040E\u040C\x03\x02\x02\x02\u040F\u0411\x074\x02\x02\u0410\u040F" +
		"\x03\x02\x02\x02\u0411\u0414\x03\x02\x02\x02\u0412\u0410\x03\x02\x02\x02" +
		"\u0412\u0413\x03\x02\x02\x02\u0413\u0415\x03\x02\x02\x02\u0414\u0412\x03" +
		"\x02\x02\x02\u0415\u0422\x07\x1B\x02\x02\u0416\u041A\x07\x0E\x02\x02\u0417" +
		"\u0419\x074\x02\x02\u0418\u0417\x03\x02\x02\x02\u0419\u041C\x03\x02\x02" +
		"\x02\u041A\u0418\x03\x02\x02\x02\u041A\u041B\x03\x02\x02\x02\u041B\u041E" +
		"\x03\x02\x02\x02\u041C\u041A\x03\x02\x02\x02\u041D\u041F\x05\xA2R\x02" +
		"\u041E\u041D\x03\x02\x02\x02\u041E\u041F\x03\x02\x02\x02\u041F\u0420\x03" +
		"\x02\x02\x02\u0420\u0422\x07\x02\x02\x03\u0421\u03F3\x03\x02\x02\x02\u0421" +
		"\u0416\x03\x02\x02\x02\u0422\x8B\x03\x02\x02\x02\u0423\u0425\x07\x0F\x02" +
		"\x02\u0424\u0426\n\x10\x02\x02\u0425\u0424\x03\x02\x02\x02\u0426\u0427" +
		"\x03\x02\x02\x02\u0427\u0425\x03\x02\x02\x02\u0427\u0428\x03\x02\x02\x02" +
		"\u0428\u0429\x03\x02\x02\x02\u0429\u042A\x07\x1B\x02\x02\u042A\x8D\x03" +
		"\x02\x02\x02\u042B\u042E\x07\x1A\x02\x02\u042C\u042F\x05\xA2R\x02\u042D" +
		"\u042F\x074\x02\x02\u042E\u042C\x03\x02\x02\x02\u042E\u042D\x03\x02\x02" +
		"\x02\u042F\u0430\x03\x02\x02\x02\u0430\u042E\x03\x02\x02\x02\u0430\u0431" +
		"\x03\x02\x02\x02\u0431\u0432\x03\x02\x02\x02\u0432\u0438\x07\x1B\x02\x02" +
		"\u0433\u0434\x07\x1A\x02\x02\u0434\u0435\x05\xA2R\x02\u0435\u0436\x07" +
		"\x02\x02\x03\u0436\u0438\x03\x02\x02\x02\u0437\u042B\x03\x02\x02\x02\u0437" +
		"\u0433\x03\x02\x02\x02\u0438\x8F\x03\x02\x02\x02\u0439\u043A\x07G\x02" +
		"\x02\u043A\u043B\x05\xA2R\x02\u043B\u043C\x07\x1B\x02\x02\u043C\u0442" +
		"\x03\x02\x02\x02\u043D\u043E\x07H\x02\x02\u043E\u043F\x05\xA2R\x02\u043F" +
		"\u0440\x07\x1B\x02\x02\u0440\u0442\x03\x02\x02\x02\u0441\u0439\x03\x02" +
		"\x02\x02\u0441\u043D\x03\x02\x02\x02\u0442\x91\x03\x02\x02\x02\u0443\u0444" +
		"\x07>\x02\x02\u0444\u0445\x07\x1C\x02\x02\u0445\u0446\x072\x02\x02\u0446" +
		"\u044D\x07\x1B\x02\x02\u0447\u0448\x07>\x02\x02\u0448\u0449\x07\x1C\x02" +
		"\x02\u0449\u044A\x05\xA2R\x02\u044A\u044B\x07\x1B\x02\x02\u044B\u044D" +
		"\x03\x02\x02\x02\u044C\u0443\x03\x02\x02\x02\u044C\u0447\x03\x02\x02\x02" +
		"\u044D\x93\x03\x02\x02\x02\u044E\u044F\x07S\x02\x02\u044F\u0450\x05\xA2" +
		"R\x02\u0450\u0451\x07\x1B\x02\x02\u0451\x95\x03\x02\x02\x02\u0452\u0453" +
		"\x07T\x02\x02\u0453\u0454\x05\xA2R\x02\u0454\u0455\x07\x1B\x02\x02\u0455" +
		"\x97\x03\x02\x02\x02\u0456\u0460\x05\x9AN\x02\u0457\u0459\x074\x02\x02" +
		"\u0458\u0457\x03\x02\x02\x02\u0459\u045C\x03\x02\x02\x02\u045A\u0458\x03" +
		"\x02\x02\x02\u045A\u045B\x03\x02\x02\x02\u045B\u045D\x03\x02\x02\x02\u045C" +
		"\u045A\x03\x02\x02\x02\u045D\u045F\x05\x9AN\x02\u045E\u045A\x03\x02\x02" +
		"\x02\u045F\u0462\x03\x02\x02\x02\u0460\u045E\x03\x02\x02\x02\u0460\u0461" +
		"\x03\x02\x02\x02\u0461\x99\x03\x02\x02\x02\u0462\u0460\x03\x02\x02\x02" +
		"\u0463\u0464\x07\x10\x02\x02\u0464\u0465\x05\xA2R\x02\u0465\u0466\t\x11" +
		"\x02\x02\u0466\u046C\x05\xA2R\x02\u0467\u046B\x074\x02\x02\u0468\u046B" +
		"\x07\x1C\x02\x02\u0469\u046B\x05\xA2R\x02\u046A\u0467\x03\x02\x02\x02" +
		"\u046A\u0468\x03\x02\x02\x02\u046A\u0469\x03\x02\x02\x02\u046B\u046E\x03" +
		"\x02\x02\x02\u046C\u046A\x03\x02\x02\x02\u046C\u046D\x03\x02\x02\x02\u046D" +
		"\u046F\x03\x02\x02\x02\u046E\u046C\x03\x02\x02\x02\u046F\u0470\x07\x1B" +
		"\x02\x02\u0470\u047B\x03\x02\x02\x02\u0471\u0475\x07Q\x02\x02\u0472\u0474" +
		"\v\x02\x02\x02\u0473\u0472\x03\x02\x02\x02\u0474\u0477\x03\x02\x02\x02" +
		"\u0475\u0476\x03\x02\x02\x02\u0475\u0473\x03\x02\x02\x02\u0476\u0478\x03" +
		"\x02\x02\x02\u0477\u0475\x03\x02\x02\x02\u0478\u047B\x07\x1B\x02\x02\u0479" +
		"\u047B\x07D\x02\x02\u047A\u0463\x03\x02\x02\x02\u047A\u0471\x03\x02\x02" +
		"\x02\u047A\u0479\x03\x02\x02\x02\u047B\x9B\x03\x02\x02\x02\u047C\u0480" +
		"\x07\x07\x02\x02\u047D\u0481\x05\xA2R\x02\u047E\u0481\x07\x1C\x02\x02" +
		"\u047F\u0481\x074\x02\x02\u0480\u047D\x03\x02\x02\x02\u0480\u047E\x03" +
		"\x02\x02\x02\u0480\u047F\x03\x02\x02\x02\u0481\u0482\x03\x02\x02\x02\u0482" +
		"\u0480\x03\x02\x02\x02\u0482\u0483\x03\x02\x02\x02\u0483\u0484\x03\x02" +
		"\x02\x02\u0484\u0490\x07\x1B\x02\x02\u0485\u048B\x07\x07\x02\x02\u0486" +
		"\u048A\x05\xA2R\x02\u0487\u048A\x07\x1C\x02\x02\u0488\u048A\x074\x02\x02" +
		"\u0489\u0486\x03\x02\x02\x02\u0489\u0487\x03\x02\x02\x02\u0489\u0488\x03" +
		"\x02\x02\x02\u048A\u048D\x03\x02\x02\x02\u048B\u0489\x03\x02\x02\x02\u048B" +
		"\u048C\x03\x02\x02\x02\u048C\u048E\x03\x02\x02\x02\u048D\u048B\x03\x02" +
		"\x02\x02\u048E\u0490\x07\x02\x02\x03\u048F\u047C\x03\x02\x02\x02\u048F" +
		"\u0485\x03\x02\x02\x02\u0490\x9D\x03\x02\x02\x02\u0491\u0493\x07\f\x02" +
		"\x02\u0492\u0494\x05\xA2R\x02\u0493\u0492\x03\x02\x02\x02\u0493\u0494" +
		"\x03\x02\x02\x02\u0494\u0495\x03\x02\x02\x02\u0495\u0496\x07\x1B\x02\x02" +
		"\u0496\x9F\x03\x02\x02\x02\u0497\u0498\x07\x1E\x02\x02\u0498\xA1\x03\x02" +
		"\x02\x02\u0499\u04A0\x073\x02\x02\u049A\u049C\x07\x04\x02\x02\u049B\u049A" +
		"\x03\x02\x02\x02\u049C\u049D\x03\x02\x02\x02\u049D\u049B\x03\x02\x02\x02" +
		"\u049D\u049E\x03\x02\x02\x02\u049E\u049F\x03\x02\x02\x02\u049F\u04A1\x07" +
		"2\x02\x02\u04A0\u049B\x03\x02\x02\x02\u04A0\u04A1\x03\x02\x02\x02\u04A1" +
		"\u04C7\x03\x02\x02\x02\u04A2\u04A9\x05\xAAV\x02\u04A3\u04A5\x07\x04\x02" +
		"\x02\u04A4\u04A3\x03\x02\x02\x02\u04A5\u04A6\x03\x02\x02\x02\u04A6\u04A4" +
		"\x03\x02\x02\x02\u04A6\u04A7\x03\x02\x02\x02\u04A7\u04A8\x03\x02\x02\x02" +
		"\u04A8\u04AA\x072\x02\x02\u04A9\u04A4\x03\x02\x02\x02\u04A9\u04AA\x03" +
		"\x02\x02\x02\u04AA\u04C7\x03\x02\x02\x02\u04AB\u04AC\x07\x13\x02\x02\u04AC" +
		"\u04AD\x05\xA2R\x02\u04AD\u04AE\x07\x1B\x02\x02\u04AE\u04C7\x03\x02\x02" +
		"\x02\u04AF\u04C7\x072\x02\x02\u04B0\u04B2\x07\x04\x02\x02\u04B1\u04B0" +
		"\x03\x02\x02\x02\u04B2\u04B5\x03\x02\x02\x02\u04B3\u04B1\x03\x02\x02\x02" +
		"\u04B3\u04B4\x03\x02\x02\x02\u04B4\u04B6\x03\x02\x02\x02\u04B5\u04B3\x03" +
		"\x02\x02\x02\u04B6\u04BA\x07\x1C\x02\x02\u04B7\u04B9\x07\x04\x02\x02\u04B8" +
		"\u04B7\x03\x02\x02\x02\u04B9\u04BC\x03\x02\x02\x02\u04BA\u04B8\x03\x02" +
		"\x02\x02\u04BA\u04BB\x03\x02\x02\x02\u04BB\u04C7\x03\x02\x02\x02\u04BC" +
		"\u04BA\x03\x02\x02\x02\u04BD\u04C1\x07\x1D\x02\x02\u04BE\u04C0\x07\x04" +
		"\x02\x02\u04BF\u04BE\x03\x02\x02\x02\u04C0\u04C3\x03\x02\x02\x02\u04C1" +
		"\u04BF\x03\x02\x02\x02\u04C1\u04C2\x03\x02\x02\x02\u04C2\u04C7\x03\x02" +
		"\x02\x02\u04C3\u04C1\x03\x02\x02\x02\u04C4\u04C7\x07&\x02\x02\u04C5\u04C7" +
		"\x07\x9E\x02\x02\u04C6\u0499\x03\x02\x02\x02\u04C6\u04A2\x03\x02\x02\x02" +
		"\u04C6\u04AB\x03\x02\x02\x02\u04C6\u04AF\x03\x02\x02\x02\u04C6\u04B3\x03" +
		"\x02\x02\x02\u04C6\u04BD\x03\x02\x02\x02\u04C6\u04C4\x03\x02\x02\x02\u04C6" +
		"\u04C5\x03\x02\x02\x02\u04C7\xA3\x03\x02\x02\x02\u04C8\u04C9\x07,\x02" +
		"\x02\u04C9\xA5\x03\x02\x02\x02\u04CA\u04CB\x07\x1B\x02\x02\u04CB\xA7\x03" +
		"\x02\x02\x02\u04CC\u04CD\t\x12\x02\x02\u04CD\xA9\x03\x02\x02\x02\u04CE" +
		"\u04E9\x077\x02\x02\u04CF\u04E9\x075\x02\x02\u04D0\u04E9\x078\x02\x02" +
		"\u04D1\u04E9\x076\x02\x02\u04D2\u04E9\x07\x9F\x02\x02\u04D3\u04E9\x07" +
		"\x1D\x02\x02\u04D4\u04D5\x07!\x02\x02\u04D5\u04E9\n\x13\x02\x02\u04D6" +
		"\u04D7\x07\"\x02\x02\u04D7\u04E9\n\x14\x02\x02\u04D8\u04E9\x07$\x02\x02" +
		"\u04D9\u04E9\x07#\x02\x02\u04DA\u04E9\x07\\\x02\x02\u04DB\u04E9\x07]\x02" +
		"\x02\u04DC\u04E9\x07q\x02\x02\u04DD\u04E9\x07_\x02\x02\u04DE\u04E9\x07" +
		"Y\x02\x02\u04DF\u04E9\x07X\x02\x02\u04E0\u04E9\x07[\x02\x02\u04E1\u04E9" +
		"\x07^\x02\x02\u04E2\u04E9\x07p\x02\x02\u04E3\u04E9\x07m\x02\x02\u04E4" +
		"\u04E9\x07n\x02\x02\u04E5\u04E9\x07q\x02\x02\u04E6\u04E9\x07\x89\x02\x02" +
		"\u04E7\u04E9\x07\x8A\x02\x02\u04E8\u04CE\x03\x02\x02\x02\u04E8\u04CF\x03" +
		"\x02\x02\x02\u04E8\u04D0\x03\x02\x02\x02\u04E8\u04D1\x03\x02\x02\x02\u04E8" +
		"\u04D2\x03\x02\x02\x02\u04E8\u04D3\x03\x02\x02\x02\u04E8\u04D4\x03\x02" +
		"\x02\x02\u04E8\u04D6\x03\x02\x02\x02\u04E8\u04D8\x03\x02\x02\x02\u04E8" +
		"\u04D9\x03\x02\x02\x02\u04E8\u04DA\x03\x02\x02\x02\u04E8\u04DB\x03\x02" +
		"\x02\x02\u04E8\u04DC\x03\x02\x02\x02\u04E8\u04DD\x03\x02\x02\x02\u04E8" +
		"\u04DE\x03\x02\x02\x02\u04E8\u04DF\x03\x02\x02\x02\u04E8\u04E0\x03\x02" +
		"\x02\x02\u04E8\u04E1\x03\x02\x02\x02\u04E8\u04E2\x03\x02\x02\x02\u04E8" +
		"\u04E3\x03\x02\x02\x02\u04E8\u04E4\x03\x02\x02\x02\u04E8\u04E5\x03\x02" +
		"\x02\x02\u04E8\u04E6\x03\x02\x02\x02\u04E8\u04E7\x03\x02\x02\x02\u04E9" +
		"\u04EA\x03\x02\x02\x02\u04EA\u04E8\x03\x02\x02\x02\u04EA\u04EB\x03\x02" +
		"\x02\x02\u04EB\xAB\x03\x02\x02\x02\u04EC\u04ED\x07\x04\x02\x02\u04ED\xAD" +
		"\x03\x02\x02\x02\xB0\xB2\xB8\xBD\xC2\xCB\xD3\xD9\xE2\xE8\xEE\xF7\xFD\u0103" +
		"\u0109\u010C\u010E\u0112\u0116\u0123\u0129\u012F\u0134\u013A\u0140\u0143" +
		"\u014B\u0154\u015A\u0161\u0168\u016D\u0170\u0175\u017B\u0180\u019C\u01A4" +
		"\u01A6\u01AD\u01B2\u01B8\u01BE\u01C3\u01C9\u01CE\u01D4\u01DE\u01E7\u01ED" +
		"\u01EF\u01FD\u0205\u020A\u020E\u0212\u0214\u0219\u0230\u0235\u023A\u023C" +
		"\u0246\u0250\u025A\u0260\u0267\u026D\u0275\u027F\u028A\u0290\u0295\u029C" +
		"\u02A5\u02A9\u02AD\u02AF\u02BE\u02C2\u02D1\u02D5\u02DB\u02E6\u02EB\u02F0" +
		"\u02F2\u02F7\u02FC\u0301\u0303\u0308\u030E\u0313\u0315\u0320\u0324\u032F" +
		"\u0331\u0338\u033E\u0343\u0349\u034F\u0352\u0358\u035A\u0363\u0365\u036E" +
		"\u0370\u0377\u037B\u037D\u0381\u0385\u038A\u038D\u0393\u0396\u039A\u03A1" +
		"\u03A6\u03AC\u03B1\u03B9\u03BB\u03BF\u03C6\u03C8\u03D1\u03D3\u03D7\u03E1" +
		"\u03E3\u03E7\u03ED\u03EF\u03F7\u03FB\u0401\u0406\u040C\u0412\u041A\u041E" +
		"\u0421\u0427\u042E\u0430\u0437\u0441\u044C\u045A\u0460\u046A\u046C\u0475" +
		"\u047A\u0480\u0482\u0489\u048B\u048F\u0493\u049D\u04A0\u04A6\u04A9\u04B3" +
		"\u04BA\u04C1\u04C6\u04E8\u04EA";
	public static readonly _serializedATN: string = Utils.join(
		[
			sequenceParser._serializedATNSegment0,
			sequenceParser._serializedATNSegment1,
			sequenceParser._serializedATNSegment2,
		],
		"",
	);
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!sequenceParser.__ATN) {
			sequenceParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(sequenceParser._serializedATN));
		}

		return sequenceParser.__ATN;
	}

}

export class BitmarkContext extends ParserRuleContext {
	public EOF(): TerminalNode { return this.getToken(sequenceParser.EOF, 0); }
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
			return this.getTokens(sequenceParser.NL);
		} else {
			return this.getToken(sequenceParser.NL, i);
		}
	}
	public S(): TerminalNode[];
	public S(i: number): TerminalNode;
	public S(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(sequenceParser.S);
		} else {
			return this.getToken(sequenceParser.S, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return sequenceParser.RULE_bitmark; }
	// @Override
	public enterRule(listener: sequenceParserListener): void {
		if (listener.enterBitmark) {
			listener.enterBitmark(this);
		}
	}
	// @Override
	public exitRule(listener: sequenceParserListener): void {
		if (listener.exitBitmark) {
			listener.exitBitmark(this);
		}
	}
}


export class Bitmark_Context extends ParserRuleContext {
	public bit(): BitContext {
		return this.getRuleContext(0, BitContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return sequenceParser.RULE_bitmark_; }
	// @Override
	public enterRule(listener: sequenceParserListener): void {
		if (listener.enterBitmark_) {
			listener.enterBitmark_(this);
		}
	}
	// @Override
	public exitRule(listener: sequenceParserListener): void {
		if (listener.exitBitmark_) {
			listener.exitBitmark_(this);
		}
	}
}


export class BitContext extends ParserRuleContext {
	public sequence(): SequenceContext | undefined {
		return this.tryGetRuleContext(0, SequenceContext);
	}
	public menu_3_course(): Menu_3_courseContext | undefined {
		return this.tryGetRuleContext(0, Menu_3_courseContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return sequenceParser.RULE_bit; }
	// @Override
	public enterRule(listener: sequenceParserListener): void {
		if (listener.enterBit) {
			listener.enterBit(this);
		}
	}
	// @Override
	public exitRule(listener: sequenceParserListener): void {
		if (listener.exitBit) {
			listener.exitBit(this);
		}
	}
}


export class SequenceContext extends ParserRuleContext {
	public BitSequence(): TerminalNode { return this.getToken(sequenceParser.BitSequence, 0); }
	public format(): FormatContext {
		return this.getRuleContext(0, FormatContext);
	}
	public CL(): TerminalNode { return this.getToken(sequenceParser.CL, 0); }
	public bitElem(): BitElemContext[];
	public bitElem(i: number): BitElemContext;
	public bitElem(i?: number): BitElemContext | BitElemContext[] {
		if (i === undefined) {
			return this.getRuleContexts(BitElemContext);
		} else {
			return this.getRuleContext(i, BitElemContext);
		}
	}
	public NL(): TerminalNode[];
	public NL(i: number): TerminalNode;
	public NL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(sequenceParser.NL);
		} else {
			return this.getToken(sequenceParser.NL, i);
		}
	}
	public HSPL(): TerminalNode[];
	public HSPL(i: number): TerminalNode;
	public HSPL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(sequenceParser.HSPL);
		} else {
			return this.getToken(sequenceParser.HSPL, i);
		}
	}
	public seqstr(): SeqstrContext[];
	public seqstr(i: number): SeqstrContext;
	public seqstr(i?: number): SeqstrContext | SeqstrContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SeqstrContext);
		} else {
			return this.getRuleContext(i, SeqstrContext);
		}
	}
	public minusminus(): MinusminusContext[];
	public minusminus(i: number): MinusminusContext;
	public minusminus(i?: number): MinusminusContext | MinusminusContext[] {
		if (i === undefined) {
			return this.getRuleContexts(MinusminusContext);
		} else {
			return this.getRuleContext(i, MinusminusContext);
		}
	}
	public footer(): FooterContext | undefined {
		return this.tryGetRuleContext(0, FooterContext);
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
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return sequenceParser.RULE_sequence; }
	// @Override
	public enterRule(listener: sequenceParserListener): void {
		if (listener.enterSequence) {
			listener.enterSequence(this);
		}
	}
	// @Override
	public exitRule(listener: sequenceParserListener): void {
		if (listener.exitSequence) {
			listener.exitSequence(this);
		}
	}
}


export class SeqstrContext extends ParserRuleContext {
	public s_and_w(): S_and_wContext {
		return this.getRuleContext(0, S_and_wContext);
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
	public NL(): TerminalNode[];
	public NL(i: number): TerminalNode;
	public NL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(sequenceParser.NL);
		} else {
			return this.getToken(sequenceParser.NL, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return sequenceParser.RULE_seqstr; }
	// @Override
	public enterRule(listener: sequenceParserListener): void {
		if (listener.enterSeqstr) {
			listener.enterSeqstr(this);
		}
	}
	// @Override
	public exitRule(listener: sequenceParserListener): void {
		if (listener.exitSeqstr) {
			listener.exitSeqstr(this);
		}
	}
}


export class MinusminusContext extends ParserRuleContext {
	public DMM(): TerminalNode { return this.getToken(sequenceParser.DMM, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return sequenceParser.RULE_minusminus; }
	// @Override
	public enterRule(listener: sequenceParserListener): void {
		if (listener.enterMinusminus) {
			listener.enterMinusminus(this);
		}
	}
	// @Override
	public exitRule(listener: sequenceParserListener): void {
		if (listener.exitMinusminus) {
			listener.exitMinusminus(this);
		}
	}
}


export class Menu_3_courseContext extends ParserRuleContext {
	public BitMenu3Course(): TerminalNode { return this.getToken(sequenceParser.BitMenu3Course, 0); }
	public format(): FormatContext {
		return this.getRuleContext(0, FormatContext);
	}
	public CL(): TerminalNode { return this.getToken(sequenceParser.CL, 0); }
	public menu_list(): Menu_listContext {
		return this.getRuleContext(0, Menu_listContext);
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
	public NL(): TerminalNode[];
	public NL(i: number): TerminalNode;
	public NL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(sequenceParser.NL);
		} else {
			return this.getToken(sequenceParser.NL, i);
		}
	}
	public footer(): FooterContext | undefined {
		return this.tryGetRuleContext(0, FooterContext);
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
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return sequenceParser.RULE_menu_3_course; }
	// @Override
	public enterRule(listener: sequenceParserListener): void {
		if (listener.enterMenu_3_course) {
			listener.enterMenu_3_course(this);
		}
	}
	// @Override
	public exitRule(listener: sequenceParserListener): void {
		if (listener.exitMenu_3_course) {
			listener.exitMenu_3_course(this);
		}
	}
}


export class Menu_listContext extends ParserRuleContext {
	public hspl_slot(): Hspl_slotContext {
		return this.getRuleContext(0, Hspl_slotContext);
	}
	public menu_text(): Menu_textContext[];
	public menu_text(i: number): Menu_textContext;
	public menu_text(i?: number): Menu_textContext | Menu_textContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Menu_textContext);
		} else {
			return this.getRuleContext(i, Menu_textContext);
		}
	}
	public HSPL(): TerminalNode[];
	public HSPL(i: number): TerminalNode;
	public HSPL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(sequenceParser.HSPL);
		} else {
			return this.getToken(sequenceParser.HSPL, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return sequenceParser.RULE_menu_list; }
	// @Override
	public enterRule(listener: sequenceParserListener): void {
		if (listener.enterMenu_list) {
			listener.enterMenu_list(this);
		}
	}
	// @Override
	public exitRule(listener: sequenceParserListener): void {
		if (listener.exitMenu_list) {
			listener.exitMenu_list(this);
		}
	}
}


export class Hspl_slotContext extends ParserRuleContext {
	public HSPL(): TerminalNode { return this.getToken(sequenceParser.HSPL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return sequenceParser.RULE_hspl_slot; }
	// @Override
	public enterRule(listener: sequenceParserListener): void {
		if (listener.enterHspl_slot) {
			listener.enterHspl_slot(this);
		}
	}
	// @Override
	public exitRule(listener: sequenceParserListener): void {
		if (listener.exitHspl_slot) {
			listener.exitHspl_slot(this);
		}
	}
}


export class Menu_textContext extends ParserRuleContext {
	public melem(): MelemContext | undefined {
		return this.tryGetRuleContext(0, MelemContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return sequenceParser.RULE_menu_text; }
	// @Override
	public enterRule(listener: sequenceParserListener): void {
		if (listener.enterMenu_text) {
			listener.enterMenu_text(this);
		}
	}
	// @Override
	public exitRule(listener: sequenceParserListener): void {
		if (listener.exitMenu_text) {
			listener.exitMenu_text(this);
		}
	}
}


export class MelemContext extends ParserRuleContext {
	public mtex(): MtexContext[];
	public mtex(i: number): MtexContext;
	public mtex(i?: number): MtexContext | MtexContext[] {
		if (i === undefined) {
			return this.getRuleContexts(MtexContext);
		} else {
			return this.getRuleContext(i, MtexContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return sequenceParser.RULE_melem; }
	// @Override
	public enterRule(listener: sequenceParserListener): void {
		if (listener.enterMelem) {
			listener.enterMelem(this);
		}
	}
	// @Override
	public exitRule(listener: sequenceParserListener): void {
		if (listener.exitMelem) {
			listener.exitMelem(this);
		}
	}
}


export class MtexContext extends ParserRuleContext {
	public s_and_w(): S_and_wContext | undefined {
		return this.tryGetRuleContext(0, S_and_wContext);
	}
	public NL(): TerminalNode[];
	public NL(i: number): TerminalNode;
	public NL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(sequenceParser.NL);
		} else {
			return this.getToken(sequenceParser.NL, i);
		}
	}
	public instruction(): InstructionContext | undefined {
		return this.tryGetRuleContext(0, InstructionContext);
	}
	public atdef(): AtdefContext | undefined {
		return this.tryGetRuleContext(0, AtdefContext);
	}
	public hint(): HintContext | undefined {
		return this.tryGetRuleContext(0, HintContext);
	}
	public example(): ExampleContext | undefined {
		return this.tryGetRuleContext(0, ExampleContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return sequenceParser.RULE_mtex; }
	// @Override
	public enterRule(listener: sequenceParserListener): void {
		if (listener.enterMtex) {
			listener.enterMtex(this);
		}
	}
	// @Override
	public exitRule(listener: sequenceParserListener): void {
		if (listener.exitMtex) {
			listener.exitMtex(this);
		}
	}
}


export class FooterContext extends ParserRuleContext {
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
			return this.getTokens(sequenceParser.NL);
		} else {
			return this.getToken(sequenceParser.NL, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return sequenceParser.RULE_footer; }
	// @Override
	public enterRule(listener: sequenceParserListener): void {
		if (listener.enterFooter) {
			listener.enterFooter(this);
		}
	}
	// @Override
	public exitRule(listener: sequenceParserListener): void {
		if (listener.exitFooter) {
			listener.exitFooter(this);
		}
	}
}


export class BitElemContext extends ParserRuleContext {
	public LIST_LINE(): TerminalNode | undefined { return this.tryGetToken(sequenceParser.LIST_LINE, 0); }
	public NOTBITMARK(): TerminalNode | undefined { return this.tryGetToken(sequenceParser.NOTBITMARK, 0); }
	public dclines(): DclinesContext | undefined {
		return this.tryGetRuleContext(0, DclinesContext);
	}
	public gap(): GapContext | undefined {
		return this.tryGetRuleContext(0, GapContext);
	}
	public atdef(): AtdefContext | undefined {
		return this.tryGetRuleContext(0, AtdefContext);
	}
	public reference(): ReferenceContext | undefined {
		return this.tryGetRuleContext(0, ReferenceContext);
	}
	public dollarans(): DollaransContext | undefined {
		return this.tryGetRuleContext(0, DollaransContext);
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
	public bracketed_text(): Bracketed_textContext | undefined {
		return this.tryGetRuleContext(0, Bracketed_textContext);
	}
	public sp(): SpContext | undefined {
		return this.tryGetRuleContext(0, SpContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return sequenceParser.RULE_bitElem; }
	// @Override
	public enterRule(listener: sequenceParserListener): void {
		if (listener.enterBitElem) {
			listener.enterBitElem(this);
		}
	}
	// @Override
	public exitRule(listener: sequenceParserListener): void {
		if (listener.exitBitElem) {
			listener.exitBitElem(this);
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
	public get ruleIndex(): number { return sequenceParser.RULE_gap; }
	// @Override
	public enterRule(listener: sequenceParserListener): void {
		if (listener.enterGap) {
			listener.enterGap(this);
		}
	}
	// @Override
	public exitRule(listener: sequenceParserListener): void {
		if (listener.exitGap) {
			listener.exitGap(this);
		}
	}
}


export class Single_gapContext extends ParserRuleContext {
	public OPU(): TerminalNode { return this.getToken(sequenceParser.OPU, 0); }
	public clnsp(): ClnspContext {
		return this.getRuleContext(0, ClnspContext);
	}
	public NUMERIC(): TerminalNode | undefined { return this.tryGetToken(sequenceParser.NUMERIC, 0); }
	public STRING(): TerminalNode | undefined { return this.tryGetToken(sequenceParser.STRING, 0); }
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
	public get ruleIndex(): number { return sequenceParser.RULE_single_gap; }
	// @Override
	public enterRule(listener: sequenceParserListener): void {
		if (listener.enterSingle_gap) {
			listener.enterSingle_gap(this);
		}
	}
	// @Override
	public exitRule(listener: sequenceParserListener): void {
		if (listener.exitSingle_gap) {
			listener.exitSingle_gap(this);
		}
	}
}


export class Choice_plusContext extends ParserRuleContext {
	public OPP(): TerminalNode { return this.getToken(sequenceParser.OPP, 0); }
	public CL(): TerminalNode { return this.getToken(sequenceParser.CL, 0); }
	public item(): ItemContext | undefined {
		return this.tryGetRuleContext(0, ItemContext);
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
	public get ruleIndex(): number { return sequenceParser.RULE_choice_plus; }
	// @Override
	public enterRule(listener: sequenceParserListener): void {
		if (listener.enterChoice_plus) {
			listener.enterChoice_plus(this);
		}
	}
	// @Override
	public exitRule(listener: sequenceParserListener): void {
		if (listener.exitChoice_plus) {
			listener.exitChoice_plus(this);
		}
	}
}


export class Choice_minusContext extends ParserRuleContext {
	public OPM(): TerminalNode { return this.getToken(sequenceParser.OPM, 0); }
	public CL(): TerminalNode { return this.getToken(sequenceParser.CL, 0); }
	public item(): ItemContext | undefined {
		return this.tryGetRuleContext(0, ItemContext);
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
	public get ruleIndex(): number { return sequenceParser.RULE_choice_minus; }
	// @Override
	public enterRule(listener: sequenceParserListener): void {
		if (listener.enterChoice_minus) {
			listener.enterChoice_minus(this);
		}
	}
	// @Override
	public exitRule(listener: sequenceParserListener): void {
		if (listener.exitChoice_minus) {
			listener.exitChoice_minus(this);
		}
	}
}


export class Choice_starContext extends ParserRuleContext {
	public OPR(): TerminalNode { return this.getToken(sequenceParser.OPR, 0); }
	public CL(): TerminalNode { return this.getToken(sequenceParser.CL, 0); }
	public item(): ItemContext | undefined {
		return this.tryGetRuleContext(0, ItemContext);
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
	public get ruleIndex(): number { return sequenceParser.RULE_choice_star; }
	// @Override
	public enterRule(listener: sequenceParserListener): void {
		if (listener.enterChoice_star) {
			listener.enterChoice_star(this);
		}
	}
	// @Override
	public exitRule(listener: sequenceParserListener): void {
		if (listener.exitChoice_star) {
			listener.exitChoice_star(this);
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
	public get ruleIndex(): number { return sequenceParser.RULE_resource; }
	// @Override
	public enterRule(listener: sequenceParserListener): void {
		if (listener.enterResource) {
			listener.enterResource(this);
		}
	}
	// @Override
	public exitRule(listener: sequenceParserListener): void {
		if (listener.exitResource) {
			listener.exitResource(this);
		}
	}
}


export class Bullet_itemContext extends ParserRuleContext {
	public OPBUL(): TerminalNode { return this.getToken(sequenceParser.OPBUL, 0); }
	public s_and_w(): S_and_wContext {
		return this.getRuleContext(0, S_and_wContext);
	}
	public CL(): TerminalNode { return this.getToken(sequenceParser.CL, 0); }
	public atpoint(): AtpointContext | undefined {
		return this.tryGetRuleContext(0, AtpointContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return sequenceParser.RULE_bullet_item; }
	// @Override
	public enterRule(listener: sequenceParserListener): void {
		if (listener.enterBullet_item) {
			listener.enterBullet_item(this);
		}
	}
	// @Override
	public exitRule(listener: sequenceParserListener): void {
		if (listener.exitBullet_item) {
			listener.exitBullet_item(this);
		}
	}
}


export class AtpointContext extends ParserRuleContext {
	public AtPoints(): TerminalNode { return this.getToken(sequenceParser.AtPoints, 0); }
	public NUMERIC(): TerminalNode { return this.getToken(sequenceParser.NUMERIC, 0); }
	public CL(): TerminalNode { return this.getToken(sequenceParser.CL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return sequenceParser.RULE_atpoint; }
	// @Override
	public enterRule(listener: sequenceParserListener): void {
		if (listener.enterAtpoint) {
			listener.enterAtpoint(this);
		}
	}
	// @Override
	public exitRule(listener: sequenceParserListener): void {
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
			return this.getTokens(sequenceParser.ColonText);
		} else {
			return this.getToken(sequenceParser.ColonText, i);
		}
	}
	public ColonJson(): TerminalNode[];
	public ColonJson(i: number): TerminalNode;
	public ColonJson(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(sequenceParser.ColonJson);
		} else {
			return this.getToken(sequenceParser.ColonJson, i);
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
	public get ruleIndex(): number { return sequenceParser.RULE_format; }
	// @Override
	public enterRule(listener: sequenceParserListener): void {
		if (listener.enterFormat) {
			listener.enterFormat(this);
		}
	}
	// @Override
	public exitRule(listener: sequenceParserListener): void {
		if (listener.exitFormat) {
			listener.exitFormat(this);
		}
	}
}


export class Resource_formatContext extends ParserRuleContext {
	public BitmarkMinus(): TerminalNode | undefined { return this.tryGetToken(sequenceParser.BitmarkMinus, 0); }
	public BitmarkPlus(): TerminalNode | undefined { return this.tryGetToken(sequenceParser.BitmarkPlus, 0); }
	public Prosemirror(): TerminalNode | undefined { return this.tryGetToken(sequenceParser.Prosemirror, 0); }
	public Placeholder(): TerminalNode | undefined { return this.tryGetToken(sequenceParser.Placeholder, 0); }
	public ColonJson(): TerminalNode | undefined { return this.tryGetToken(sequenceParser.ColonJson, 0); }
	public AmpArticle(): TerminalNode | undefined { return this.tryGetToken(sequenceParser.AmpArticle, 0); }
	public AmpDocument(): TerminalNode | undefined { return this.tryGetToken(sequenceParser.AmpDocument, 0); }
	public AmpWebsite(): TerminalNode | undefined { return this.tryGetToken(sequenceParser.AmpWebsite, 0); }
	public AmpStillImageFilm(): TerminalNode | undefined { return this.tryGetToken(sequenceParser.AmpStillImageFilm, 0); }
	public AmpAudioLink(): TerminalNode | undefined { return this.tryGetToken(sequenceParser.AmpAudioLink, 0); }
	public AmpImageLink(): TerminalNode | undefined { return this.tryGetToken(sequenceParser.AmpImageLink, 0); }
	public AmpVideoLink(): TerminalNode | undefined { return this.tryGetToken(sequenceParser.AmpVideoLink, 0); }
	public AmpArticleLink(): TerminalNode | undefined { return this.tryGetToken(sequenceParser.AmpArticleLink, 0); }
	public AmpDocumentLink(): TerminalNode | undefined { return this.tryGetToken(sequenceParser.AmpDocumentLink, 0); }
	public AmpAppLink(): TerminalNode | undefined { return this.tryGetToken(sequenceParser.AmpAppLink, 0); }
	public AmpWebsiteLink(): TerminalNode | undefined { return this.tryGetToken(sequenceParser.AmpWebsiteLink, 0); }
	public AmpStillImageFilmLink(): TerminalNode | undefined { return this.tryGetToken(sequenceParser.AmpStillImageFilmLink, 0); }
	public AmpVideoEmbed(): TerminalNode | undefined { return this.tryGetToken(sequenceParser.AmpVideoEmbed, 0); }
	public AmpAudioEmbed(): TerminalNode | undefined { return this.tryGetToken(sequenceParser.AmpAudioEmbed, 0); }
	public AmpDocumentEmbed(): TerminalNode | undefined { return this.tryGetToken(sequenceParser.AmpDocumentEmbed, 0); }
	public AmpStillImageFilmEmbed(): TerminalNode | undefined { return this.tryGetToken(sequenceParser.AmpStillImageFilmEmbed, 0); }
	public AmpDocumentDownload(): TerminalNode | undefined { return this.tryGetToken(sequenceParser.AmpDocumentDownload, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return sequenceParser.RULE_resource_format; }
	// @Override
	public enterRule(listener: sequenceParserListener): void {
		if (listener.enterResource_format) {
			listener.enterResource_format(this);
		}
	}
	// @Override
	public exitRule(listener: sequenceParserListener): void {
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
	public AmpPdf(): TerminalNode | undefined { return this.tryGetToken(sequenceParser.AmpPdf, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return sequenceParser.RULE_resource_format_extra; }
	// @Override
	public enterRule(listener: sequenceParserListener): void {
		if (listener.enterResource_format_extra) {
			listener.enterResource_format_extra(this);
		}
	}
	// @Override
	public exitRule(listener: sequenceParserListener): void {
		if (listener.exitResource_format_extra) {
			listener.exitResource_format_extra(this);
		}
	}
}


export class Format2Context extends ParserRuleContext {
	public BitmarkMinus(): TerminalNode | undefined { return this.tryGetToken(sequenceParser.BitmarkMinus, 0); }
	public BitmarkPlus(): TerminalNode | undefined { return this.tryGetToken(sequenceParser.BitmarkPlus, 0); }
	public ColonText(): TerminalNode | undefined { return this.tryGetToken(sequenceParser.ColonText, 0); }
	public Placeholder(): TerminalNode | undefined { return this.tryGetToken(sequenceParser.Placeholder, 0); }
	public ColonJson(): TerminalNode | undefined { return this.tryGetToken(sequenceParser.ColonJson, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return sequenceParser.RULE_format2; }
	// @Override
	public enterRule(listener: sequenceParserListener): void {
		if (listener.enterFormat2) {
			listener.enterFormat2(this);
		}
	}
	// @Override
	public exitRule(listener: sequenceParserListener): void {
		if (listener.exitFormat2) {
			listener.exitFormat2(this);
		}
	}
}


export class Image_formatContext extends ParserRuleContext {
	public AmpImage(): TerminalNode | undefined { return this.tryGetToken(sequenceParser.AmpImage, 0); }
	public Image_type(): TerminalNode | undefined { return this.tryGetToken(sequenceParser.Image_type, 0); }
	public DotArticleAtt(): TerminalNode | undefined { return this.tryGetToken(sequenceParser.DotArticleAtt, 0); }
	public AmpImageLink(): TerminalNode | undefined { return this.tryGetToken(sequenceParser.AmpImageLink, 0); }
	public AmpImageZoom(): TerminalNode | undefined { return this.tryGetToken(sequenceParser.AmpImageZoom, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return sequenceParser.RULE_image_format; }
	// @Override
	public enterRule(listener: sequenceParserListener): void {
		if (listener.enterImage_format) {
			listener.enterImage_format(this);
		}
	}
	// @Override
	public exitRule(listener: sequenceParserListener): void {
		if (listener.exitImage_format) {
			listener.exitImage_format(this);
		}
	}
}


export class Video_formatContext extends ParserRuleContext {
	public AmpVideo(): TerminalNode | undefined { return this.tryGetToken(sequenceParser.AmpVideo, 0); }
	public AmpVideoLink(): TerminalNode | undefined { return this.tryGetToken(sequenceParser.AmpVideoLink, 0); }
	public AmpVideoEmbed(): TerminalNode | undefined { return this.tryGetToken(sequenceParser.AmpVideoEmbed, 0); }
	public COLON(): TerminalNode | undefined { return this.tryGetToken(sequenceParser.COLON, 0); }
	public Video_type(): TerminalNode | undefined { return this.tryGetToken(sequenceParser.Video_type, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return sequenceParser.RULE_video_format; }
	// @Override
	public enterRule(listener: sequenceParserListener): void {
		if (listener.enterVideo_format) {
			listener.enterVideo_format(this);
		}
	}
	// @Override
	public exitRule(listener: sequenceParserListener): void {
		if (listener.exitVideo_format) {
			listener.exitVideo_format(this);
		}
	}
}


export class Article_formatContext extends ParserRuleContext {
	public AmpArticle(): TerminalNode | undefined { return this.tryGetToken(sequenceParser.AmpArticle, 0); }
	public AmpArticleLink(): TerminalNode | undefined { return this.tryGetToken(sequenceParser.AmpArticleLink, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return sequenceParser.RULE_article_format; }
	// @Override
	public enterRule(listener: sequenceParserListener): void {
		if (listener.enterArticle_format) {
			listener.enterArticle_format(this);
		}
	}
	// @Override
	public exitRule(listener: sequenceParserListener): void {
		if (listener.exitArticle_format) {
			listener.exitArticle_format(this);
		}
	}
}


export class Document_formatContext extends ParserRuleContext {
	public AmpDocument(): TerminalNode | undefined { return this.tryGetToken(sequenceParser.AmpDocument, 0); }
	public AmpDocumentLink(): TerminalNode | undefined { return this.tryGetToken(sequenceParser.AmpDocumentLink, 0); }
	public AmpDocumentDownload(): TerminalNode | undefined { return this.tryGetToken(sequenceParser.AmpDocumentDownload, 0); }
	public AmpDocumentEmbed(): TerminalNode | undefined { return this.tryGetToken(sequenceParser.AmpDocumentEmbed, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return sequenceParser.RULE_document_format; }
	// @Override
	public enterRule(listener: sequenceParserListener): void {
		if (listener.enterDocument_format) {
			listener.enterDocument_format(this);
		}
	}
	// @Override
	public exitRule(listener: sequenceParserListener): void {
		if (listener.exitDocument_format) {
			listener.exitDocument_format(this);
		}
	}
}


export class App_formatContext extends ParserRuleContext {
	public AmpApp(): TerminalNode | undefined { return this.tryGetToken(sequenceParser.AmpApp, 0); }
	public AmpAppLink(): TerminalNode | undefined { return this.tryGetToken(sequenceParser.AmpAppLink, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return sequenceParser.RULE_app_format; }
	// @Override
	public enterRule(listener: sequenceParserListener): void {
		if (listener.enterApp_format) {
			listener.enterApp_format(this);
		}
	}
	// @Override
	public exitRule(listener: sequenceParserListener): void {
		if (listener.exitApp_format) {
			listener.exitApp_format(this);
		}
	}
}


export class Website_formatContext extends ParserRuleContext {
	public AmpWebsite(): TerminalNode | undefined { return this.tryGetToken(sequenceParser.AmpWebsite, 0); }
	public AmpWebsiteLink(): TerminalNode | undefined { return this.tryGetToken(sequenceParser.AmpWebsiteLink, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return sequenceParser.RULE_website_format; }
	// @Override
	public enterRule(listener: sequenceParserListener): void {
		if (listener.enterWebsite_format) {
			listener.enterWebsite_format(this);
		}
	}
	// @Override
	public exitRule(listener: sequenceParserListener): void {
		if (listener.exitWebsite_format) {
			listener.exitWebsite_format(this);
		}
	}
}


export class Stillimagefilm_formatContext extends ParserRuleContext {
	public AmpStillImageFilm(): TerminalNode | undefined { return this.tryGetToken(sequenceParser.AmpStillImageFilm, 0); }
	public AmpStillImageFilmLink(): TerminalNode | undefined { return this.tryGetToken(sequenceParser.AmpStillImageFilmLink, 0); }
	public AmpStillImageFilmEmbed(): TerminalNode | undefined { return this.tryGetToken(sequenceParser.AmpStillImageFilmEmbed, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return sequenceParser.RULE_stillimagefilm_format; }
	// @Override
	public enterRule(listener: sequenceParserListener): void {
		if (listener.enterStillimagefilm_format) {
			listener.enterStillimagefilm_format(this);
		}
	}
	// @Override
	public exitRule(listener: sequenceParserListener): void {
		if (listener.exitStillimagefilm_format) {
			listener.exitStillimagefilm_format(this);
		}
	}
}


export class Op_article_formatContext extends ParserRuleContext {
	public OpAmpArticleLink(): TerminalNode | undefined { return this.tryGetToken(sequenceParser.OpAmpArticleLink, 0); }
	public OpAmpArticle(): TerminalNode | undefined { return this.tryGetToken(sequenceParser.OpAmpArticle, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return sequenceParser.RULE_op_article_format; }
	// @Override
	public enterRule(listener: sequenceParserListener): void {
		if (listener.enterOp_article_format) {
			listener.enterOp_article_format(this);
		}
	}
	// @Override
	public exitRule(listener: sequenceParserListener): void {
		if (listener.exitOp_article_format) {
			listener.exitOp_article_format(this);
		}
	}
}


export class Op_document_formatContext extends ParserRuleContext {
	public OpAmpDocumentLink(): TerminalNode | undefined { return this.tryGetToken(sequenceParser.OpAmpDocumentLink, 0); }
	public OpAmpDocument(): TerminalNode | undefined { return this.tryGetToken(sequenceParser.OpAmpDocument, 0); }
	public OpAmpDocumentDownload(): TerminalNode | undefined { return this.tryGetToken(sequenceParser.OpAmpDocumentDownload, 0); }
	public OpAmpDocumentEmbed(): TerminalNode | undefined { return this.tryGetToken(sequenceParser.OpAmpDocumentEmbed, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return sequenceParser.RULE_op_document_format; }
	// @Override
	public enterRule(listener: sequenceParserListener): void {
		if (listener.enterOp_document_format) {
			listener.enterOp_document_format(this);
		}
	}
	// @Override
	public exitRule(listener: sequenceParserListener): void {
		if (listener.exitOp_document_format) {
			listener.exitOp_document_format(this);
		}
	}
}


export class Op_app_formatContext extends ParserRuleContext {
	public OpAmpApp(): TerminalNode | undefined { return this.tryGetToken(sequenceParser.OpAmpApp, 0); }
	public OpAmpAppLink(): TerminalNode | undefined { return this.tryGetToken(sequenceParser.OpAmpAppLink, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return sequenceParser.RULE_op_app_format; }
	// @Override
	public enterRule(listener: sequenceParserListener): void {
		if (listener.enterOp_app_format) {
			listener.enterOp_app_format(this);
		}
	}
	// @Override
	public exitRule(listener: sequenceParserListener): void {
		if (listener.exitOp_app_format) {
			listener.exitOp_app_format(this);
		}
	}
}


export class Op_website_formatContext extends ParserRuleContext {
	public OpAmpWebsite(): TerminalNode | undefined { return this.tryGetToken(sequenceParser.OpAmpWebsite, 0); }
	public OpAmpWebsiteLink(): TerminalNode | undefined { return this.tryGetToken(sequenceParser.OpAmpWebsiteLink, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return sequenceParser.RULE_op_website_format; }
	// @Override
	public enterRule(listener: sequenceParserListener): void {
		if (listener.enterOp_website_format) {
			listener.enterOp_website_format(this);
		}
	}
	// @Override
	public exitRule(listener: sequenceParserListener): void {
		if (listener.exitOp_website_format) {
			listener.exitOp_website_format(this);
		}
	}
}


export class Op_video_formatContext extends ParserRuleContext {
	public OpAmpVideo(): TerminalNode | undefined { return this.tryGetToken(sequenceParser.OpAmpVideo, 0); }
	public COLON(): TerminalNode | undefined { return this.tryGetToken(sequenceParser.COLON, 0); }
	public Video_type(): TerminalNode | undefined { return this.tryGetToken(sequenceParser.Video_type, 0); }
	public OpAmpVideoLink(): TerminalNode | undefined { return this.tryGetToken(sequenceParser.OpAmpVideoLink, 0); }
	public OpAmpVideoEmbed(): TerminalNode | undefined { return this.tryGetToken(sequenceParser.OpAmpVideoEmbed, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return sequenceParser.RULE_op_video_format; }
	// @Override
	public enterRule(listener: sequenceParserListener): void {
		if (listener.enterOp_video_format) {
			listener.enterOp_video_format(this);
		}
	}
	// @Override
	public exitRule(listener: sequenceParserListener): void {
		if (listener.exitOp_video_format) {
			listener.exitOp_video_format(this);
		}
	}
}


export class Op_stillimagefilm_formatContext extends ParserRuleContext {
	public OpAmpStillImageFilm(): TerminalNode | undefined { return this.tryGetToken(sequenceParser.OpAmpStillImageFilm, 0); }
	public OpAmpStillImageFilmLink(): TerminalNode | undefined { return this.tryGetToken(sequenceParser.OpAmpStillImageFilmLink, 0); }
	public OpAmpStillImageFilmEmbed(): TerminalNode | undefined { return this.tryGetToken(sequenceParser.OpAmpStillImageFilmEmbed, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return sequenceParser.RULE_op_stillimagefilm_format; }
	// @Override
	public enterRule(listener: sequenceParserListener): void {
		if (listener.enterOp_stillimagefilm_format) {
			listener.enterOp_stillimagefilm_format(this);
		}
	}
	// @Override
	public exitRule(listener: sequenceParserListener): void {
		if (listener.exitOp_stillimagefilm_format) {
			listener.exitOp_stillimagefilm_format(this);
		}
	}
}


export class ArticlebitContext extends ParserRuleContext {
	public op_article_format(): Op_article_formatContext | undefined {
		return this.tryGetRuleContext(0, Op_article_formatContext);
	}
	public COLON(): TerminalNode | undefined { return this.tryGetToken(sequenceParser.COLON, 0); }
	public url(): UrlContext | undefined {
		return this.tryGetRuleContext(0, UrlContext);
	}
	public CL(): TerminalNode | undefined { return this.tryGetToken(sequenceParser.CL, 0); }
	public ArticleText(): TerminalNode | undefined { return this.tryGetToken(sequenceParser.ArticleText, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return sequenceParser.RULE_articlebit; }
	// @Override
	public enterRule(listener: sequenceParserListener): void {
		if (listener.enterArticlebit) {
			listener.enterArticlebit(this);
		}
	}
	// @Override
	public exitRule(listener: sequenceParserListener): void {
		if (listener.exitArticlebit) {
			listener.exitArticlebit(this);
		}
	}
}


export class DocumentbitContext extends ParserRuleContext {
	public op_document_format(): Op_document_formatContext {
		return this.getRuleContext(0, Op_document_formatContext);
	}
	public COLON(): TerminalNode { return this.getToken(sequenceParser.COLON, 0); }
	public url(): UrlContext {
		return this.getRuleContext(0, UrlContext);
	}
	public CL(): TerminalNode[];
	public CL(i: number): TerminalNode;
	public CL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(sequenceParser.CL);
		} else {
			return this.getToken(sequenceParser.CL, i);
		}
	}
	public OPATALT(): TerminalNode | undefined { return this.tryGetToken(sequenceParser.OPATALT, 0); }
	public words(): WordsContext | undefined {
		return this.tryGetRuleContext(0, WordsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return sequenceParser.RULE_documentbit; }
	// @Override
	public enterRule(listener: sequenceParserListener): void {
		if (listener.enterDocumentbit) {
			listener.enterDocumentbit(this);
		}
	}
	// @Override
	public exitRule(listener: sequenceParserListener): void {
		if (listener.exitDocumentbit) {
			listener.exitDocumentbit(this);
		}
	}
}


export class WebsitebitContext extends ParserRuleContext {
	public op_website_format(): Op_website_formatContext {
		return this.getRuleContext(0, Op_website_formatContext);
	}
	public COLON(): TerminalNode { return this.getToken(sequenceParser.COLON, 0); }
	public url(): UrlContext {
		return this.getRuleContext(0, UrlContext);
	}
	public CL(): TerminalNode[];
	public CL(i: number): TerminalNode;
	public CL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(sequenceParser.CL);
		} else {
			return this.getToken(sequenceParser.CL, i);
		}
	}
	public OPATALT(): TerminalNode | undefined { return this.tryGetToken(sequenceParser.OPATALT, 0); }
	public words(): WordsContext | undefined {
		return this.tryGetRuleContext(0, WordsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return sequenceParser.RULE_websitebit; }
	// @Override
	public enterRule(listener: sequenceParserListener): void {
		if (listener.enterWebsitebit) {
			listener.enterWebsitebit(this);
		}
	}
	// @Override
	public exitRule(listener: sequenceParserListener): void {
		if (listener.exitWebsitebit) {
			listener.exitWebsitebit(this);
		}
	}
}


export class AppbitContext extends ParserRuleContext {
	public op_app_format(): Op_app_formatContext {
		return this.getRuleContext(0, Op_app_formatContext);
	}
	public COLON(): TerminalNode { return this.getToken(sequenceParser.COLON, 0); }
	public CL(): TerminalNode[];
	public CL(i: number): TerminalNode;
	public CL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(sequenceParser.CL);
		} else {
			return this.getToken(sequenceParser.CL, i);
		}
	}
	public url(): UrlContext | undefined {
		return this.tryGetRuleContext(0, UrlContext);
	}
	public telephone(): TelephoneContext | undefined {
		return this.tryGetRuleContext(0, TelephoneContext);
	}
	public OPATALT(): TerminalNode | undefined { return this.tryGetToken(sequenceParser.OPATALT, 0); }
	public words(): WordsContext | undefined {
		return this.tryGetRuleContext(0, WordsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return sequenceParser.RULE_appbit; }
	// @Override
	public enterRule(listener: sequenceParserListener): void {
		if (listener.enterAppbit) {
			listener.enterAppbit(this);
		}
	}
	// @Override
	public exitRule(listener: sequenceParserListener): void {
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
	public get ruleIndex(): number { return sequenceParser.RULE_stillimagefilmbit; }
	// @Override
	public enterRule(listener: sequenceParserListener): void {
		if (listener.enterStillimagefilmbit) {
			listener.enterStillimagefilmbit(this);
		}
	}
	// @Override
	public exitRule(listener: sequenceParserListener): void {
		if (listener.exitStillimagefilmbit) {
			listener.exitStillimagefilmbit(this);
		}
	}
}


export class Stillimg_oneContext extends ParserRuleContext {
	public op_stillimagefilm_format(): Op_stillimagefilm_formatContext {
		return this.getRuleContext(0, Op_stillimagefilm_formatContext);
	}
	public COLON(): TerminalNode { return this.getToken(sequenceParser.COLON, 0); }
	public url(): UrlContext {
		return this.getRuleContext(0, UrlContext);
	}
	public CL(): TerminalNode { return this.getToken(sequenceParser.CL, 0); }
	public S(): TerminalNode[];
	public S(i: number): TerminalNode;
	public S(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(sequenceParser.S);
		} else {
			return this.getToken(sequenceParser.S, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return sequenceParser.RULE_stillimg_one; }
	// @Override
	public enterRule(listener: sequenceParserListener): void {
		if (listener.enterStillimg_one) {
			listener.enterStillimg_one(this);
		}
	}
	// @Override
	public exitRule(listener: sequenceParserListener): void {
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
	public get ruleIndex(): number { return sequenceParser.RULE_videobit; }
	// @Override
	public enterRule(listener: sequenceParserListener): void {
		if (listener.enterVideobit) {
			listener.enterVideobit(this);
		}
	}
	// @Override
	public exitRule(listener: sequenceParserListener): void {
		if (listener.exitVideobit) {
			listener.exitVideobit(this);
		}
	}
}


export class Video_oneContext extends ParserRuleContext {
	public op_video_format(): Op_video_formatContext {
		return this.getRuleContext(0, Op_video_formatContext);
	}
	public COLON(): TerminalNode { return this.getToken(sequenceParser.COLON, 0); }
	public url(): UrlContext {
		return this.getRuleContext(0, UrlContext);
	}
	public CL(): TerminalNode[];
	public CL(i: number): TerminalNode;
	public CL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(sequenceParser.CL);
		} else {
			return this.getToken(sequenceParser.CL, i);
		}
	}
	public OPATALT(): TerminalNode | undefined { return this.tryGetToken(sequenceParser.OPATALT, 0); }
	public words(): WordsContext | undefined {
		return this.tryGetRuleContext(0, WordsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return sequenceParser.RULE_video_one; }
	// @Override
	public enterRule(listener: sequenceParserListener): void {
		if (listener.enterVideo_one) {
			listener.enterVideo_one(this);
		}
	}
	// @Override
	public exitRule(listener: sequenceParserListener): void {
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
	public NL(): TerminalNode | undefined { return this.tryGetToken(sequenceParser.NL, 0); }
	public ShowInIndex(): TerminalNode | undefined { return this.tryGetToken(sequenceParser.ShowInIndex, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return sequenceParser.RULE_imagebit; }
	// @Override
	public enterRule(listener: sequenceParserListener): void {
		if (listener.enterImagebit) {
			listener.enterImagebit(this);
		}
	}
	// @Override
	public exitRule(listener: sequenceParserListener): void {
		if (listener.exitImagebit) {
			listener.exitImagebit(this);
		}
	}
}


export class Image_oneContext extends ParserRuleContext {
	public op_image_format(): Op_image_formatContext {
		return this.getRuleContext(0, Op_image_formatContext);
	}
	public COLON(): TerminalNode { return this.getToken(sequenceParser.COLON, 0); }
	public url(): UrlContext {
		return this.getRuleContext(0, UrlContext);
	}
	public CL(): TerminalNode { return this.getToken(sequenceParser.CL, 0); }
	public S(): TerminalNode[];
	public S(i: number): TerminalNode;
	public S(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(sequenceParser.S);
		} else {
			return this.getToken(sequenceParser.S, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return sequenceParser.RULE_image_one; }
	// @Override
	public enterRule(listener: sequenceParserListener): void {
		if (listener.enterImage_one) {
			listener.enterImage_one(this);
		}
	}
	// @Override
	public exitRule(listener: sequenceParserListener): void {
		if (listener.exitImage_one) {
			listener.exitImage_one(this);
		}
	}
}


export class Op_image_formatContext extends ParserRuleContext {
	public OpAmpImage(): TerminalNode | undefined { return this.tryGetToken(sequenceParser.OpAmpImage, 0); }
	public Image_type(): TerminalNode | undefined { return this.tryGetToken(sequenceParser.Image_type, 0); }
	public DotArticleAtt(): TerminalNode | undefined { return this.tryGetToken(sequenceParser.DotArticleAtt, 0); }
	public OpAmpImageLink(): TerminalNode | undefined { return this.tryGetToken(sequenceParser.OpAmpImageLink, 0); }
	public OpAmpImageZoom(): TerminalNode | undefined { return this.tryGetToken(sequenceParser.OpAmpImageZoom, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return sequenceParser.RULE_op_image_format; }
	// @Override
	public enterRule(listener: sequenceParserListener): void {
		if (listener.enterOp_image_format) {
			listener.enterOp_image_format(this);
		}
	}
	// @Override
	public exitRule(listener: sequenceParserListener): void {
		if (listener.exitOp_image_format) {
			listener.exitOp_image_format(this);
		}
	}
}


export class Image_chainedContext extends ParserRuleContext {
	public AtSrc(): TerminalNode | undefined { return this.tryGetToken(sequenceParser.AtSrc, 0); }
	public COLON(): TerminalNode | undefined { return this.tryGetToken(sequenceParser.COLON, 0); }
	public url(): UrlContext | undefined {
		return this.tryGetRuleContext(0, UrlContext);
	}
	public CL(): TerminalNode { return this.getToken(sequenceParser.CL, 0); }
	public NUMERIC(): TerminalNode | undefined { return this.tryGetToken(sequenceParser.NUMERIC, 0); }
	public AtWidth(): TerminalNode | undefined { return this.tryGetToken(sequenceParser.AtWidth, 0); }
	public AtHeight(): TerminalNode | undefined { return this.tryGetToken(sequenceParser.AtHeight, 0); }
	public OPATALT(): TerminalNode | undefined { return this.tryGetToken(sequenceParser.OPATALT, 0); }
	public OpAtCaption(): TerminalNode | undefined { return this.tryGetToken(sequenceParser.OpAtCaption, 0); }
	public OpAtSearch(): TerminalNode | undefined { return this.tryGetToken(sequenceParser.OpAtSearch, 0); }
	public OpAtLicense(): TerminalNode | undefined { return this.tryGetToken(sequenceParser.OpAtLicense, 0); }
	public OpAtCopyright(): TerminalNode | undefined { return this.tryGetToken(sequenceParser.OpAtCopyright, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return sequenceParser.RULE_image_chained; }
	// @Override
	public enterRule(listener: sequenceParserListener): void {
		if (listener.enterImage_chained) {
			listener.enterImage_chained(this);
		}
	}
	// @Override
	public exitRule(listener: sequenceParserListener): void {
		if (listener.exitImage_chained) {
			listener.exitImage_chained(this);
		}
	}
}


export class Image_chained4matchContext extends ParserRuleContext {
	public AtSrc(): TerminalNode | undefined { return this.tryGetToken(sequenceParser.AtSrc, 0); }
	public COLON(): TerminalNode | undefined { return this.tryGetToken(sequenceParser.COLON, 0); }
	public url(): UrlContext | undefined {
		return this.tryGetRuleContext(0, UrlContext);
	}
	public CL(): TerminalNode { return this.getToken(sequenceParser.CL, 0); }
	public NUMERIC(): TerminalNode | undefined { return this.tryGetToken(sequenceParser.NUMERIC, 0); }
	public AtWidth(): TerminalNode | undefined { return this.tryGetToken(sequenceParser.AtWidth, 0); }
	public AtHeight(): TerminalNode | undefined { return this.tryGetToken(sequenceParser.AtHeight, 0); }
	public OPATALT(): TerminalNode | undefined { return this.tryGetToken(sequenceParser.OPATALT, 0); }
	public OpAtCaption(): TerminalNode | undefined { return this.tryGetToken(sequenceParser.OpAtCaption, 0); }
	public OpAtSearch(): TerminalNode | undefined { return this.tryGetToken(sequenceParser.OpAtSearch, 0); }
	public OpAtLicense(): TerminalNode | undefined { return this.tryGetToken(sequenceParser.OpAtLicense, 0); }
	public OpAtCopyright(): TerminalNode | undefined { return this.tryGetToken(sequenceParser.OpAtCopyright, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return sequenceParser.RULE_image_chained4match; }
	// @Override
	public enterRule(listener: sequenceParserListener): void {
		if (listener.enterImage_chained4match) {
			listener.enterImage_chained4match(this);
		}
	}
	// @Override
	public exitRule(listener: sequenceParserListener): void {
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
	public get ruleIndex(): number { return sequenceParser.RULE_audiobit; }
	// @Override
	public enterRule(listener: sequenceParserListener): void {
		if (listener.enterAudiobit) {
			listener.enterAudiobit(this);
		}
	}
	// @Override
	public exitRule(listener: sequenceParserListener): void {
		if (listener.exitAudiobit) {
			listener.exitAudiobit(this);
		}
	}
}


export class Audio_oneContext extends ParserRuleContext {
	public op_audio_format(): Op_audio_formatContext {
		return this.getRuleContext(0, Op_audio_formatContext);
	}
	public COLON(): TerminalNode { return this.getToken(sequenceParser.COLON, 0); }
	public url(): UrlContext {
		return this.getRuleContext(0, UrlContext);
	}
	public CL(): TerminalNode[];
	public CL(i: number): TerminalNode;
	public CL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(sequenceParser.CL);
		} else {
			return this.getToken(sequenceParser.CL, i);
		}
	}
	public OPATALT(): TerminalNode | undefined { return this.tryGetToken(sequenceParser.OPATALT, 0); }
	public words(): WordsContext | undefined {
		return this.tryGetRuleContext(0, WordsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return sequenceParser.RULE_audio_one; }
	// @Override
	public enterRule(listener: sequenceParserListener): void {
		if (listener.enterAudio_one) {
			listener.enterAudio_one(this);
		}
	}
	// @Override
	public exitRule(listener: sequenceParserListener): void {
		if (listener.exitAudio_one) {
			listener.exitAudio_one(this);
		}
	}
}


export class Audio_formatContext extends ParserRuleContext {
	public AmpAudio(): TerminalNode | undefined { return this.tryGetToken(sequenceParser.AmpAudio, 0); }
	public COLON(): TerminalNode | undefined { return this.tryGetToken(sequenceParser.COLON, 0); }
	public Audio_type(): TerminalNode | undefined { return this.tryGetToken(sequenceParser.Audio_type, 0); }
	public AmpAudioLink(): TerminalNode | undefined { return this.tryGetToken(sequenceParser.AmpAudioLink, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return sequenceParser.RULE_audio_format; }
	// @Override
	public enterRule(listener: sequenceParserListener): void {
		if (listener.enterAudio_format) {
			listener.enterAudio_format(this);
		}
	}
	// @Override
	public exitRule(listener: sequenceParserListener): void {
		if (listener.exitAudio_format) {
			listener.exitAudio_format(this);
		}
	}
}


export class Op_audio_formatContext extends ParserRuleContext {
	public OpAmpAudio(): TerminalNode | undefined { return this.tryGetToken(sequenceParser.OpAmpAudio, 0); }
	public COLON(): TerminalNode | undefined { return this.tryGetToken(sequenceParser.COLON, 0); }
	public Audio_type(): TerminalNode | undefined { return this.tryGetToken(sequenceParser.Audio_type, 0); }
	public OpAmpAudioLink(): TerminalNode | undefined { return this.tryGetToken(sequenceParser.OpAmpAudioLink, 0); }
	public OpAmpAudioEmbed(): TerminalNode | undefined { return this.tryGetToken(sequenceParser.OpAmpAudioEmbed, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return sequenceParser.RULE_op_audio_format; }
	// @Override
	public enterRule(listener: sequenceParserListener): void {
		if (listener.enterOp_audio_format) {
			listener.enterOp_audio_format(this);
		}
	}
	// @Override
	public exitRule(listener: sequenceParserListener): void {
		if (listener.exitOp_audio_format) {
			listener.exitOp_audio_format(this);
		}
	}
}


export class Resource_chainedContext extends ParserRuleContext {
	public COLON(): TerminalNode | undefined { return this.tryGetToken(sequenceParser.COLON, 0); }
	public CL(): TerminalNode { return this.getToken(sequenceParser.CL, 0); }
	public OPA(): TerminalNode | undefined { return this.tryGetToken(sequenceParser.OPA, 0); }
	public s_and_w(): S_and_wContext[];
	public s_and_w(i: number): S_and_wContext;
	public s_and_w(i?: number): S_and_wContext | S_and_wContext[] {
		if (i === undefined) {
			return this.getRuleContexts(S_and_wContext);
		} else {
			return this.getRuleContext(i, S_and_wContext);
		}
	}
	public AtSrc(): TerminalNode | undefined { return this.tryGetToken(sequenceParser.AtSrc, 0); }
	public S(): TerminalNode[];
	public S(i: number): TerminalNode;
	public S(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(sequenceParser.S);
		} else {
			return this.getToken(sequenceParser.S, i);
		}
	}
	public NL(): TerminalNode[];
	public NL(i: number): TerminalNode;
	public NL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(sequenceParser.NL);
		} else {
			return this.getToken(sequenceParser.NL, i);
		}
	}
	public NUMERIC(): TerminalNode | undefined { return this.tryGetToken(sequenceParser.NUMERIC, 0); }
	public AtWidth(): TerminalNode | undefined { return this.tryGetToken(sequenceParser.AtWidth, 0); }
	public AtHeight(): TerminalNode | undefined { return this.tryGetToken(sequenceParser.AtHeight, 0); }
	public OPATALT(): TerminalNode | undefined { return this.tryGetToken(sequenceParser.OPATALT, 0); }
	public OpAtCaption(): TerminalNode | undefined { return this.tryGetToken(sequenceParser.OpAtCaption, 0); }
	public OpAtSearch(): TerminalNode | undefined { return this.tryGetToken(sequenceParser.OpAtSearch, 0); }
	public OpAtLicense(): TerminalNode | undefined { return this.tryGetToken(sequenceParser.OpAtLicense, 0); }
	public OpAtCopyright(): TerminalNode | undefined { return this.tryGetToken(sequenceParser.OpAtCopyright, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return sequenceParser.RULE_resource_chained; }
	// @Override
	public enterRule(listener: sequenceParserListener): void {
		if (listener.enterResource_chained) {
			listener.enterResource_chained(this);
		}
	}
	// @Override
	public exitRule(listener: sequenceParserListener): void {
		if (listener.exitResource_chained) {
			listener.exitResource_chained(this);
		}
	}
}


export class TelephoneContext extends ParserRuleContext {
	public TEL(): TerminalNode { return this.getToken(sequenceParser.TEL, 0); }
	public PLUS(): TerminalNode { return this.getToken(sequenceParser.PLUS, 0); }
	public NUMERIC(): TerminalNode { return this.getToken(sequenceParser.NUMERIC, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return sequenceParser.RULE_telephone; }
	// @Override
	public enterRule(listener: sequenceParserListener): void {
		if (listener.enterTelephone) {
			listener.enterTelephone(this);
		}
	}
	// @Override
	public exitRule(listener: sequenceParserListener): void {
		if (listener.exitTelephone) {
			listener.exitTelephone(this);
		}
	}
}


export class UrlContext extends ParserRuleContext {
	public URL(): TerminalNode { return this.getToken(sequenceParser.URL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return sequenceParser.RULE_url; }
	// @Override
	public enterRule(listener: sequenceParserListener): void {
		if (listener.enterUrl) {
			listener.enterUrl(this);
		}
	}
	// @Override
	public exitRule(listener: sequenceParserListener): void {
		if (listener.exitUrl) {
			listener.exitUrl(this);
		}
	}
}


export class ItemContext extends ParserRuleContext {
	public OPITEM(): TerminalNode | undefined { return this.tryGetToken(sequenceParser.OPITEM, 0); }
	public CL(): TerminalNode { return this.getToken(sequenceParser.CL, 0); }
	public COLON(): TerminalNode[];
	public COLON(i: number): TerminalNode;
	public COLON(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(sequenceParser.COLON);
		} else {
			return this.getToken(sequenceParser.COLON, i);
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
	public lead(): LeadContext[];
	public lead(i: number): LeadContext;
	public lead(i?: number): LeadContext | LeadContext[] {
		if (i === undefined) {
			return this.getRuleContexts(LeadContext);
		} else {
			return this.getRuleContext(i, LeadContext);
		}
	}
	public S(): TerminalNode[];
	public S(i: number): TerminalNode;
	public S(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(sequenceParser.S);
		} else {
			return this.getToken(sequenceParser.S, i);
		}
	}
	public OPC(): TerminalNode | undefined { return this.tryGetToken(sequenceParser.OPC, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return sequenceParser.RULE_item; }
	// @Override
	public enterRule(listener: sequenceParserListener): void {
		if (listener.enterItem) {
			listener.enterItem(this);
		}
	}
	// @Override
	public exitRule(listener: sequenceParserListener): void {
		if (listener.exitItem) {
			listener.exitItem(this);
		}
	}
}


export class LeadContext extends ParserRuleContext {
	public OPLEAD(): TerminalNode | undefined { return this.tryGetToken(sequenceParser.OPLEAD, 0); }
	public s_and_w(): S_and_wContext[];
	public s_and_w(i: number): S_and_wContext;
	public s_and_w(i?: number): S_and_wContext | S_and_wContext[] {
		if (i === undefined) {
			return this.getRuleContexts(S_and_wContext);
		} else {
			return this.getRuleContext(i, S_and_wContext);
		}
	}
	public CL(): TerminalNode { return this.getToken(sequenceParser.CL, 0); }
	public COLON(): TerminalNode[];
	public COLON(i: number): TerminalNode;
	public COLON(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(sequenceParser.COLON);
		} else {
			return this.getToken(sequenceParser.COLON, i);
		}
	}
	public OPPAGENUMBER(): TerminalNode | undefined { return this.tryGetToken(sequenceParser.OPPAGENUMBER, 0); }
	public OPMARGINNUMBER(): TerminalNode | undefined { return this.tryGetToken(sequenceParser.OPMARGINNUMBER, 0); }
	public OPC(): TerminalNode | undefined { return this.tryGetToken(sequenceParser.OPC, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return sequenceParser.RULE_lead; }
	// @Override
	public enterRule(listener: sequenceParserListener): void {
		if (listener.enterLead) {
			listener.enterLead(this);
		}
	}
	// @Override
	public exitRule(listener: sequenceParserListener): void {
		if (listener.exitLead) {
			listener.exitLead(this);
		}
	}
}


export class AnglerefContext extends ParserRuleContext {
	public OPRANGLES(): TerminalNode | undefined { return this.tryGetToken(sequenceParser.OPRANGLES, 0); }
	public CL(): TerminalNode { return this.getToken(sequenceParser.CL, 0); }
	public s_and_w(): S_and_wContext | undefined {
		return this.tryGetRuleContext(0, S_and_wContext);
	}
	public OPRANGLEL(): TerminalNode | undefined { return this.tryGetToken(sequenceParser.OPRANGLEL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return sequenceParser.RULE_angleref; }
	// @Override
	public enterRule(listener: sequenceParserListener): void {
		if (listener.enterAngleref) {
			listener.enterAngleref(this);
		}
	}
	// @Override
	public exitRule(listener: sequenceParserListener): void {
		if (listener.exitAngleref) {
			listener.exitAngleref(this);
		}
	}
}


export class ExampleContext extends ParserRuleContext {
	public AtExamplecl(): TerminalNode | undefined { return this.tryGetToken(sequenceParser.AtExamplecl, 0); }
	public AtExampleWithStr(): TerminalNode | undefined { return this.tryGetToken(sequenceParser.AtExampleWithStr, 0); }
	public AtExamplecol(): TerminalNode | undefined { return this.tryGetToken(sequenceParser.AtExamplecol, 0); }
	public EOF(): TerminalNode | undefined { return this.tryGetToken(sequenceParser.EOF, 0); }
	public SENTENCE(): TerminalNode | undefined { return this.tryGetToken(sequenceParser.SENTENCE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return sequenceParser.RULE_example; }
	// @Override
	public enterRule(listener: sequenceParserListener): void {
		if (listener.enterExample) {
			listener.enterExample(this);
		}
	}
	// @Override
	public exitRule(listener: sequenceParserListener): void {
		if (listener.exitExample) {
			listener.exitExample(this);
		}
	}
}


export class Bracketed_textContext extends ParserRuleContext {
	public BracEnclose(): TerminalNode { return this.getToken(sequenceParser.BracEnclose, 0); }
	public CL(): TerminalNode | undefined { return this.tryGetToken(sequenceParser.CL, 0); }
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
			return this.getTokens(sequenceParser.NL);
		} else {
			return this.getToken(sequenceParser.NL, i);
		}
	}
	public S(): TerminalNode[];
	public S(i: number): TerminalNode;
	public S(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(sequenceParser.S);
		} else {
			return this.getToken(sequenceParser.S, i);
		}
	}
	public EOF(): TerminalNode | undefined { return this.tryGetToken(sequenceParser.EOF, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return sequenceParser.RULE_bracketed_text; }
	// @Override
	public enterRule(listener: sequenceParserListener): void {
		if (listener.enterBracketed_text) {
			listener.enterBracketed_text(this);
		}
	}
	// @Override
	public exitRule(listener: sequenceParserListener): void {
		if (listener.exitBracketed_text) {
			listener.exitBracketed_text(this);
		}
	}
}


export class ReferenceContext extends ParserRuleContext {
	public AtReference(): TerminalNode { return this.getToken(sequenceParser.AtReference, 0); }
	public CL(): TerminalNode | undefined { return this.tryGetToken(sequenceParser.CL, 0); }
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
			return this.getTokens(sequenceParser.COLON);
		} else {
			return this.getToken(sequenceParser.COLON, i);
		}
	}
	public URL(): TerminalNode[];
	public URL(i: number): TerminalNode;
	public URL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(sequenceParser.URL);
		} else {
			return this.getToken(sequenceParser.URL, i);
		}
	}
	public NL(): TerminalNode[];
	public NL(i: number): TerminalNode;
	public NL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(sequenceParser.NL);
		} else {
			return this.getToken(sequenceParser.NL, i);
		}
	}
	public EOF(): TerminalNode | undefined { return this.tryGetToken(sequenceParser.EOF, 0); }
	public S(): TerminalNode[];
	public S(i: number): TerminalNode;
	public S(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(sequenceParser.S);
		} else {
			return this.getToken(sequenceParser.S, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return sequenceParser.RULE_reference; }
	// @Override
	public enterRule(listener: sequenceParserListener): void {
		if (listener.enterReference) {
			listener.enterReference(this);
		}
	}
	// @Override
	public exitRule(listener: sequenceParserListener): void {
		if (listener.exitReference) {
			listener.exitReference(this);
		}
	}
}


export class ProgressContext extends ParserRuleContext {
	public AtProgress(): TerminalNode { return this.getToken(sequenceParser.AtProgress, 0); }
	public s_and_w(): S_and_wContext {
		return this.getRuleContext(0, S_and_wContext);
	}
	public CL(): TerminalNode { return this.getToken(sequenceParser.CL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return sequenceParser.RULE_progress; }
	// @Override
	public enterRule(listener: sequenceParserListener): void {
		if (listener.enterProgress) {
			listener.enterProgress(this);
		}
	}
	// @Override
	public exitRule(listener: sequenceParserListener): void {
		if (listener.exitProgress) {
			listener.exitProgress(this);
		}
	}
}


export class DatepropContext extends ParserRuleContext {
	public AtDate(): TerminalNode { return this.getToken(sequenceParser.AtDate, 0); }
	public CL(): TerminalNode { return this.getToken(sequenceParser.CL, 0); }
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
			return this.getTokens(sequenceParser.COLON);
		} else {
			return this.getToken(sequenceParser.COLON, i);
		}
	}
	public NL(): TerminalNode[];
	public NL(i: number): TerminalNode;
	public NL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(sequenceParser.NL);
		} else {
			return this.getToken(sequenceParser.NL, i);
		}
	}
	public dateprop_chained(): Dateprop_chainedContext | undefined {
		return this.tryGetRuleContext(0, Dateprop_chainedContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return sequenceParser.RULE_dateprop; }
	// @Override
	public enterRule(listener: sequenceParserListener): void {
		if (listener.enterDateprop) {
			listener.enterDateprop(this);
		}
	}
	// @Override
	public exitRule(listener: sequenceParserListener): void {
		if (listener.exitDateprop) {
			listener.exitDateprop(this);
		}
	}
}


export class Dateprop_chainedContext extends ParserRuleContext {
	public AtDate(): TerminalNode { return this.getToken(sequenceParser.AtDate, 0); }
	public CL(): TerminalNode { return this.getToken(sequenceParser.CL, 0); }
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
			return this.getTokens(sequenceParser.COLON);
		} else {
			return this.getToken(sequenceParser.COLON, i);
		}
	}
	public NL(): TerminalNode[];
	public NL(i: number): TerminalNode;
	public NL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(sequenceParser.NL);
		} else {
			return this.getToken(sequenceParser.NL, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return sequenceParser.RULE_dateprop_chained; }
	// @Override
	public enterRule(listener: sequenceParserListener): void {
		if (listener.enterDateprop_chained) {
			listener.enterDateprop_chained(this);
		}
	}
	// @Override
	public exitRule(listener: sequenceParserListener): void {
		if (listener.exitDateprop_chained) {
			listener.exitDateprop_chained(this);
		}
	}
}


export class InstructionContext extends ParserRuleContext {
	public OPB(): TerminalNode { return this.getToken(sequenceParser.OPB, 0); }
	public CL(): TerminalNode | undefined { return this.tryGetToken(sequenceParser.CL, 0); }
	public NL(): TerminalNode[];
	public NL(i: number): TerminalNode;
	public NL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(sequenceParser.NL);
		} else {
			return this.getToken(sequenceParser.NL, i);
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
			return this.getTokens(sequenceParser.S);
		} else {
			return this.getToken(sequenceParser.S, i);
		}
	}
	public EOF(): TerminalNode | undefined { return this.tryGetToken(sequenceParser.EOF, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return sequenceParser.RULE_instruction; }
	// @Override
	public enterRule(listener: sequenceParserListener): void {
		if (listener.enterInstruction) {
			listener.enterInstruction(this);
		}
	}
	// @Override
	public exitRule(listener: sequenceParserListener): void {
		if (listener.exitInstruction) {
			listener.exitInstruction(this);
		}
	}
}


export class HintContext extends ParserRuleContext {
	public OPQ(): TerminalNode { return this.getToken(sequenceParser.OPQ, 0); }
	public CL(): TerminalNode[];
	public CL(i: number): TerminalNode;
	public CL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(sequenceParser.CL);
		} else {
			return this.getToken(sequenceParser.CL, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return sequenceParser.RULE_hint; }
	// @Override
	public enterRule(listener: sequenceParserListener): void {
		if (listener.enterHint) {
			listener.enterHint(this);
		}
	}
	// @Override
	public exitRule(listener: sequenceParserListener): void {
		if (listener.exitHint) {
			listener.exitHint(this);
		}
	}
}


export class TitleContext extends ParserRuleContext {
	public OPHASH(): TerminalNode { return this.getToken(sequenceParser.OPHASH, 0); }
	public CL(): TerminalNode | undefined { return this.tryGetToken(sequenceParser.CL, 0); }
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
			return this.getTokens(sequenceParser.NL);
		} else {
			return this.getToken(sequenceParser.NL, i);
		}
	}
	public EOF(): TerminalNode | undefined { return this.tryGetToken(sequenceParser.EOF, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return sequenceParser.RULE_title; }
	// @Override
	public enterRule(listener: sequenceParserListener): void {
		if (listener.enterTitle) {
			listener.enterTitle(this);
		}
	}
	// @Override
	public exitRule(listener: sequenceParserListener): void {
		if (listener.exitTitle) {
			listener.exitTitle(this);
		}
	}
}


export class Bool_labelContext extends ParserRuleContext {
	public AtLabeltrue(): TerminalNode | undefined { return this.tryGetToken(sequenceParser.AtLabeltrue, 0); }
	public s_and_w(): S_and_wContext {
		return this.getRuleContext(0, S_and_wContext);
	}
	public CL(): TerminalNode { return this.getToken(sequenceParser.CL, 0); }
	public AtLabelfalse(): TerminalNode | undefined { return this.tryGetToken(sequenceParser.AtLabelfalse, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return sequenceParser.RULE_bool_label; }
	// @Override
	public enterRule(listener: sequenceParserListener): void {
		if (listener.enterBool_label) {
			listener.enterBool_label(this);
		}
	}
	// @Override
	public exitRule(listener: sequenceParserListener): void {
		if (listener.exitBool_label) {
			listener.exitBool_label(this);
		}
	}
}


export class Progress_pointsContext extends ParserRuleContext {
	public AtProgressPoints(): TerminalNode { return this.getToken(sequenceParser.AtProgressPoints, 0); }
	public COLON(): TerminalNode { return this.getToken(sequenceParser.COLON, 0); }
	public NUMERIC(): TerminalNode | undefined { return this.tryGetToken(sequenceParser.NUMERIC, 0); }
	public CL(): TerminalNode { return this.getToken(sequenceParser.CL, 0); }
	public s_and_w(): S_and_wContext | undefined {
		return this.tryGetRuleContext(0, S_and_wContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return sequenceParser.RULE_progress_points; }
	// @Override
	public enterRule(listener: sequenceParserListener): void {
		if (listener.enterProgress_points) {
			listener.enterProgress_points(this);
		}
	}
	// @Override
	public exitRule(listener: sequenceParserListener): void {
		if (listener.exitProgress_points) {
			listener.exitProgress_points(this);
		}
	}
}


export class IstrackedContext extends ParserRuleContext {
	public OpAtIsTracked(): TerminalNode { return this.getToken(sequenceParser.OpAtIsTracked, 0); }
	public s_and_w(): S_and_wContext {
		return this.getRuleContext(0, S_and_wContext);
	}
	public CL(): TerminalNode { return this.getToken(sequenceParser.CL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return sequenceParser.RULE_istracked; }
	// @Override
	public enterRule(listener: sequenceParserListener): void {
		if (listener.enterIstracked) {
			listener.enterIstracked(this);
		}
	}
	// @Override
	public exitRule(listener: sequenceParserListener): void {
		if (listener.exitIstracked) {
			listener.exitIstracked(this);
		}
	}
}


export class IsinfoonlyContext extends ParserRuleContext {
	public OpAtIsInfoOnly(): TerminalNode { return this.getToken(sequenceParser.OpAtIsInfoOnly, 0); }
	public s_and_w(): S_and_wContext {
		return this.getRuleContext(0, S_and_wContext);
	}
	public CL(): TerminalNode { return this.getToken(sequenceParser.CL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return sequenceParser.RULE_isinfoonly; }
	// @Override
	public enterRule(listener: sequenceParserListener): void {
		if (listener.enterIsinfoonly) {
			listener.enterIsinfoonly(this);
		}
	}
	// @Override
	public exitRule(listener: sequenceParserListener): void {
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
			return this.getTokens(sequenceParser.NL);
		} else {
			return this.getToken(sequenceParser.NL, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return sequenceParser.RULE_atdef; }
	// @Override
	public enterRule(listener: sequenceParserListener): void {
		if (listener.enterAtdef) {
			listener.enterAtdef(this);
		}
	}
	// @Override
	public exitRule(listener: sequenceParserListener): void {
		if (listener.exitAtdef) {
			listener.exitAtdef(this);
		}
	}
}


export class Atdef_Context extends ParserRuleContext {
	public OPA(): TerminalNode | undefined { return this.tryGetToken(sequenceParser.OPA, 0); }
	public s_and_w(): S_and_wContext[];
	public s_and_w(i: number): S_and_wContext;
	public s_and_w(i?: number): S_and_wContext | S_and_wContext[] {
		if (i === undefined) {
			return this.getRuleContexts(S_and_wContext);
		} else {
			return this.getRuleContext(i, S_and_wContext);
		}
	}
	public CL(): TerminalNode | undefined { return this.tryGetToken(sequenceParser.CL, 0); }
	public COLON(): TerminalNode[];
	public COLON(i: number): TerminalNode;
	public COLON(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(sequenceParser.COLON);
		} else {
			return this.getToken(sequenceParser.COLON, i);
		}
	}
	public DBLCOLON(): TerminalNode | undefined { return this.tryGetToken(sequenceParser.DBLCOLON, 0); }
	public NL(): TerminalNode[];
	public NL(i: number): TerminalNode;
	public NL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(sequenceParser.NL);
		} else {
			return this.getToken(sequenceParser.NL, i);
		}
	}
	public OpAtCopyright(): TerminalNode | undefined { return this.tryGetToken(sequenceParser.OpAtCopyright, 0); }
	public AtSampleSolution(): TerminalNode | undefined { return this.tryGetToken(sequenceParser.AtSampleSolution, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return sequenceParser.RULE_atdef_; }
	// @Override
	public enterRule(listener: sequenceParserListener): void {
		if (listener.enterAtdef_) {
			listener.enterAtdef_(this);
		}
	}
	// @Override
	public exitRule(listener: sequenceParserListener): void {
		if (listener.exitAtdef_) {
			listener.exitAtdef_(this);
		}
	}
}


export class DollaransContext extends ParserRuleContext {
	public OPDOLL(): TerminalNode { return this.getToken(sequenceParser.OPDOLL, 0); }
	public CL(): TerminalNode | undefined { return this.tryGetToken(sequenceParser.CL, 0); }
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
			return this.getTokens(sequenceParser.COLON);
		} else {
			return this.getToken(sequenceParser.COLON, i);
		}
	}
	public NL(): TerminalNode[];
	public NL(i: number): TerminalNode;
	public NL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(sequenceParser.NL);
		} else {
			return this.getToken(sequenceParser.NL, i);
		}
	}
	public EOF(): TerminalNode | undefined { return this.tryGetToken(sequenceParser.EOF, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return sequenceParser.RULE_dollarans; }
	// @Override
	public enterRule(listener: sequenceParserListener): void {
		if (listener.enterDollarans) {
			listener.enterDollarans(this);
		}
	}
	// @Override
	public exitRule(listener: sequenceParserListener): void {
		if (listener.exitDollarans) {
			listener.exitDollarans(this);
		}
	}
}


export class AnchorContext extends ParserRuleContext {
	public OPDANGLE(): TerminalNode { return this.getToken(sequenceParser.OPDANGLE, 0); }
	public CL(): TerminalNode { return this.getToken(sequenceParser.CL, 0); }
	public s_and_w(): S_and_wContext | undefined {
		return this.tryGetRuleContext(0, S_and_wContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return sequenceParser.RULE_anchor; }
	// @Override
	public enterRule(listener: sequenceParserListener): void {
		if (listener.enterAnchor) {
			listener.enterAnchor(this);
		}
	}
	// @Override
	public exitRule(listener: sequenceParserListener): void {
		if (listener.exitAnchor) {
			listener.exitAnchor(this);
		}
	}
}


export class DcolonContext extends ParserRuleContext {
	public DBLCOLON(): TerminalNode { return this.getToken(sequenceParser.DBLCOLON, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return sequenceParser.RULE_dcolon; }
	// @Override
	public enterRule(listener: sequenceParserListener): void {
		if (listener.enterDcolon) {
			listener.enterDcolon(this);
		}
	}
	// @Override
	public exitRule(listener: sequenceParserListener): void {
		if (listener.exitDcolon) {
			listener.exitDcolon(this);
		}
	}
}


export class S_and_wContext extends ParserRuleContext {
	public STRING(): TerminalNode | undefined { return this.tryGetToken(sequenceParser.STRING, 0); }
	public NUMERIC(): TerminalNode | undefined { return this.tryGetToken(sequenceParser.NUMERIC, 0); }
	public S(): TerminalNode[];
	public S(i: number): TerminalNode;
	public S(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(sequenceParser.S);
		} else {
			return this.getToken(sequenceParser.S, i);
		}
	}
	public words(): WordsContext | undefined {
		return this.tryGetRuleContext(0, WordsContext);
	}
	public OPS(): TerminalNode | undefined { return this.tryGetToken(sequenceParser.OPS, 0); }
	public s_and_w(): S_and_wContext | undefined {
		return this.tryGetRuleContext(0, S_and_wContext);
	}
	public CL(): TerminalNode | undefined { return this.tryGetToken(sequenceParser.CL, 0); }
	public COLON(): TerminalNode | undefined { return this.tryGetToken(sequenceParser.COLON, 0); }
	public AMP(): TerminalNode | undefined { return this.tryGetToken(sequenceParser.AMP, 0); }
	public DBLEQ(): TerminalNode | undefined { return this.tryGetToken(sequenceParser.DBLEQ, 0); }
	public URL(): TerminalNode | undefined { return this.tryGetToken(sequenceParser.URL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return sequenceParser.RULE_s_and_w; }
	// @Override
	public enterRule(listener: sequenceParserListener): void {
		if (listener.enterS_and_w) {
			listener.enterS_and_w(this);
		}
	}
	// @Override
	public exitRule(listener: sequenceParserListener): void {
		if (listener.exitS_and_w) {
			listener.exitS_and_w(this);
		}
	}
}


export class DclinesContext extends ParserRuleContext {
	public DCANY(): TerminalNode { return this.getToken(sequenceParser.DCANY, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return sequenceParser.RULE_dclines; }
	// @Override
	public enterRule(listener: sequenceParserListener): void {
		if (listener.enterDclines) {
			listener.enterDclines(this);
		}
	}
	// @Override
	public exitRule(listener: sequenceParserListener): void {
		if (listener.exitDclines) {
			listener.exitDclines(this);
		}
	}
}


export class ClnspContext extends ParserRuleContext {
	public CL(): TerminalNode { return this.getToken(sequenceParser.CL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return sequenceParser.RULE_clnsp; }
	// @Override
	public enterRule(listener: sequenceParserListener): void {
		if (listener.enterClnsp) {
			listener.enterClnsp(this);
		}
	}
	// @Override
	public exitRule(listener: sequenceParserListener): void {
		if (listener.exitClnsp) {
			listener.exitClnsp(this);
		}
	}
}


export class SsplContext extends ParserRuleContext {
	public SSPL(): TerminalNode | undefined { return this.tryGetToken(sequenceParser.SSPL, 0); }
	public SSPL2(): TerminalNode | undefined { return this.tryGetToken(sequenceParser.SSPL2, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return sequenceParser.RULE_sspl; }
	// @Override
	public enterRule(listener: sequenceParserListener): void {
		if (listener.enterSspl) {
			listener.enterSspl(this);
		}
	}
	// @Override
	public exitRule(listener: sequenceParserListener): void {
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
			return this.getTokens(sequenceParser.SENTENCE);
		} else {
			return this.getToken(sequenceParser.SENTENCE, i);
		}
	}
	public NOTBITMARK(): TerminalNode[];
	public NOTBITMARK(i: number): TerminalNode;
	public NOTBITMARK(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(sequenceParser.NOTBITMARK);
		} else {
			return this.getToken(sequenceParser.NOTBITMARK, i);
		}
	}
	public BARSTRING(): TerminalNode[];
	public BARSTRING(i: number): TerminalNode;
	public BARSTRING(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(sequenceParser.BARSTRING);
		} else {
			return this.getToken(sequenceParser.BARSTRING, i);
		}
	}
	public ELIPSIS(): TerminalNode[];
	public ELIPSIS(i: number): TerminalNode;
	public ELIPSIS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(sequenceParser.ELIPSIS);
		} else {
			return this.getToken(sequenceParser.ELIPSIS, i);
		}
	}
	public LIST_LINE(): TerminalNode[];
	public LIST_LINE(i: number): TerminalNode;
	public LIST_LINE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(sequenceParser.LIST_LINE);
		} else {
			return this.getToken(sequenceParser.LIST_LINE, i);
		}
	}
	public AMP(): TerminalNode[];
	public AMP(i: number): TerminalNode;
	public AMP(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(sequenceParser.AMP);
		} else {
			return this.getToken(sequenceParser.AMP, i);
		}
	}
	public Greater(): TerminalNode[];
	public Greater(i: number): TerminalNode;
	public Greater(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(sequenceParser.Greater);
		} else {
			return this.getToken(sequenceParser.Greater, i);
		}
	}
	public Less(): TerminalNode[];
	public Less(i: number): TerminalNode;
	public Less(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(sequenceParser.Less);
		} else {
			return this.getToken(sequenceParser.Less, i);
		}
	}
	public RightArrow(): TerminalNode[];
	public RightArrow(i: number): TerminalNode;
	public RightArrow(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(sequenceParser.RightArrow);
		} else {
			return this.getToken(sequenceParser.RightArrow, i);
		}
	}
	public RightAngle(): TerminalNode[];
	public RightAngle(i: number): TerminalNode;
	public RightAngle(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(sequenceParser.RightAngle);
		} else {
			return this.getToken(sequenceParser.RightAngle, i);
		}
	}
	public AmpArticle(): TerminalNode[];
	public AmpArticle(i: number): TerminalNode;
	public AmpArticle(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(sequenceParser.AmpArticle);
		} else {
			return this.getToken(sequenceParser.AmpArticle, i);
		}
	}
	public AmpDocument(): TerminalNode[];
	public AmpDocument(i: number): TerminalNode;
	public AmpDocument(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(sequenceParser.AmpDocument);
		} else {
			return this.getToken(sequenceParser.AmpDocument, i);
		}
	}
	public AmpDocumentLink(): TerminalNode[];
	public AmpDocumentLink(i: number): TerminalNode;
	public AmpDocumentLink(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(sequenceParser.AmpDocumentLink);
		} else {
			return this.getToken(sequenceParser.AmpDocumentLink, i);
		}
	}
	public AmpWebsite(): TerminalNode[];
	public AmpWebsite(i: number): TerminalNode;
	public AmpWebsite(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(sequenceParser.AmpWebsite);
		} else {
			return this.getToken(sequenceParser.AmpWebsite, i);
		}
	}
	public AmpImage(): TerminalNode[];
	public AmpImage(i: number): TerminalNode;
	public AmpImage(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(sequenceParser.AmpImage);
		} else {
			return this.getToken(sequenceParser.AmpImage, i);
		}
	}
	public AmpAudio(): TerminalNode[];
	public AmpAudio(i: number): TerminalNode;
	public AmpAudio(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(sequenceParser.AmpAudio);
		} else {
			return this.getToken(sequenceParser.AmpAudio, i);
		}
	}
	public AmpVideo(): TerminalNode[];
	public AmpVideo(i: number): TerminalNode;
	public AmpVideo(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(sequenceParser.AmpVideo);
		} else {
			return this.getToken(sequenceParser.AmpVideo, i);
		}
	}
	public AmpApp(): TerminalNode[];
	public AmpApp(i: number): TerminalNode;
	public AmpApp(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(sequenceParser.AmpApp);
		} else {
			return this.getToken(sequenceParser.AmpApp, i);
		}
	}
	public AmpArticleLink(): TerminalNode[];
	public AmpArticleLink(i: number): TerminalNode;
	public AmpArticleLink(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(sequenceParser.AmpArticleLink);
		} else {
			return this.getToken(sequenceParser.AmpArticleLink, i);
		}
	}
	public AmpAudioLink(): TerminalNode[];
	public AmpAudioLink(i: number): TerminalNode;
	public AmpAudioLink(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(sequenceParser.AmpAudioLink);
		} else {
			return this.getToken(sequenceParser.AmpAudioLink, i);
		}
	}
	public AmpImageLink(): TerminalNode[];
	public AmpImageLink(i: number): TerminalNode;
	public AmpImageLink(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(sequenceParser.AmpImageLink);
		} else {
			return this.getToken(sequenceParser.AmpImageLink, i);
		}
	}
	public BitmarkMinus(): TerminalNode[];
	public BitmarkMinus(i: number): TerminalNode;
	public BitmarkMinus(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(sequenceParser.BitmarkMinus);
		} else {
			return this.getToken(sequenceParser.BitmarkMinus, i);
		}
	}
	public BitmarkPlus(): TerminalNode[];
	public BitmarkPlus(i: number): TerminalNode;
	public BitmarkPlus(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(sequenceParser.BitmarkPlus);
		} else {
			return this.getToken(sequenceParser.BitmarkPlus, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return sequenceParser.RULE_words; }
	// @Override
	public enterRule(listener: sequenceParserListener): void {
		if (listener.enterWords) {
			listener.enterWords(this);
		}
	}
	// @Override
	public exitRule(listener: sequenceParserListener): void {
		if (listener.exitWords) {
			listener.exitWords(this);
		}
	}
}


export class SpContext extends ParserRuleContext {
	public S(): TerminalNode { return this.getToken(sequenceParser.S, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return sequenceParser.RULE_sp; }
	// @Override
	public enterRule(listener: sequenceParserListener): void {
		if (listener.enterSp) {
			listener.enterSp(this);
		}
	}
	// @Override
	public exitRule(listener: sequenceParserListener): void {
		if (listener.exitSp) {
			listener.exitSp(this);
		}
	}
}


