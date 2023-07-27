// Generated from ./antlr/truefalseParser.g4 by ANTLR 4.9.0-SNAPSHOT


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

import { truefalseParserListener } from "./truefalseParserListener";

export class truefalseParser extends Parser {
	public static readonly OPDOT = 1;
	public static readonly S = 2;
	public static readonly BitTruefalse1 = 3;
	public static readonly BitTruefalse = 4;
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
	public static readonly OPHASH = 20;
	public static readonly CL = 21;
	public static readonly COLON = 22;
	public static readonly AMP = 23;
	public static readonly DBLCOLON = 24;
	public static readonly PLUS = 25;
	public static readonly DotAt = 26;
	public static readonly Greater = 27;
	public static readonly Less = 28;
	public static readonly DBLEQ = 29;
	public static readonly RightAngle = 30;
	public static readonly RightArrow = 31;
	public static readonly HSPL = 32;
	public static readonly HSPL2 = 33;
	public static readonly SSPL = 34;
	public static readonly SSPL2 = 35;
	public static readonly COMMENT = 36;
	public static readonly DCANY = 37;
	public static readonly Image_type = 38;
	public static readonly Audio_type = 39;
	public static readonly Video_type = 40;
	public static readonly ArticleText = 41;
	public static readonly NOTCL = 42;
	public static readonly NUMERIC = 43;
	public static readonly STRING = 44;
	public static readonly NL = 45;
	public static readonly NOTBITMARK = 46;
	public static readonly ELIPSIS = 47;
	public static readonly SENTENCE = 48;
	public static readonly BARSTRING = 49;
	public static readonly OPAT = 50;
	public static readonly AtProgress = 51;
	public static readonly AtReference = 52;
	public static readonly AtWidth = 53;
	public static readonly AtHeight = 54;
	public static readonly AtProgressPoints = 55;
	public static readonly AtShortanswer = 56;
	public static readonly AtLonganswer = 57;
	public static readonly AtExampleWithStr = 58;
	public static readonly AtExamplecol = 59;
	public static readonly AtExamplecl = 60;
	public static readonly AtSampleSolution = 61;
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
	public static readonly AmpVideo = 84;
	public static readonly AmpArticle = 85;
	public static readonly AmpDocument = 86;
	public static readonly AmpApp = 87;
	public static readonly AmpWebsite = 88;
	public static readonly AmpStillImageFilm = 89;
	public static readonly AmpPdf = 90;
	public static readonly OpAmpAudio = 91;
	public static readonly OpAmpImage = 92;
	public static readonly OpAmpImageZoom = 93;
	public static readonly OpAmpVideo = 94;
	public static readonly OpAmpArticle = 95;
	public static readonly OpAmpArticleAtt = 96;
	public static readonly OpAmpDocument = 97;
	public static readonly OpAmpApp = 98;
	public static readonly OpAmpWebsite = 99;
	public static readonly OpAmpStillImageFilm = 100;
	public static readonly BracEnclose = 101;
	public static readonly AmpAudioLink = 102;
	public static readonly AmpImageLink = 103;
	public static readonly AmpVideoLink = 104;
	public static readonly AmpArticleLink = 105;
	public static readonly AmpDocumentLink = 106;
	public static readonly AmpDocumentDownload = 107;
	public static readonly AmpAppLink = 108;
	public static readonly AmpWebsiteLink = 109;
	public static readonly AmpStillImageFilmLink = 110;
	public static readonly OpAmpAudioLink = 111;
	public static readonly OpAmpImageLink = 112;
	public static readonly OpAmpVideoLink = 113;
	public static readonly OpAmpArticleLink = 114;
	public static readonly OpAmpDocumentLink = 115;
	public static readonly OpAmpDocumentDownload = 116;
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
	public static readonly OpAmpImageWAudio = 154;
	public static readonly RULE_bitmark = 0;
	public static readonly RULE_bitmark_ = 1;
	public static readonly RULE_truefalses = 2;
	public static readonly RULE_true_false_1 = 3;
	public static readonly RULE_true_false = 4;
	public static readonly RULE_mcrsep = 5;
	public static readonly RULE_mcrsep_end = 6;
	public static readonly RULE_tfmisc = 7;
	public static readonly RULE_choices = 8;
	public static readonly RULE_cplus = 9;
	public static readonly RULE_cminus = 10;
	public static readonly RULE_choice_plus = 11;
	public static readonly RULE_choice_minus = 12;
	public static readonly RULE_choice_star = 13;
	public static readonly RULE_bitElem = 14;
	public static readonly RULE_resource = 15;
	public static readonly RULE_gap = 16;
	public static readonly RULE_single_gap = 17;
	public static readonly RULE_bullet_item = 18;
	public static readonly RULE_atpoint = 19;
	public static readonly RULE_format = 20;
	public static readonly RULE_resource_format = 21;
	public static readonly RULE_resource_format_extra = 22;
	public static readonly RULE_format2 = 23;
	public static readonly RULE_image_format = 24;
	public static readonly RULE_video_format = 25;
	public static readonly RULE_article_format = 26;
	public static readonly RULE_document_format = 27;
	public static readonly RULE_app_format = 28;
	public static readonly RULE_website_format = 29;
	public static readonly RULE_stillimagefilm_format = 30;
	public static readonly RULE_op_article_format = 31;
	public static readonly RULE_op_document_format = 32;
	public static readonly RULE_op_app_format = 33;
	public static readonly RULE_op_website_format = 34;
	public static readonly RULE_op_video_format = 35;
	public static readonly RULE_op_stillimagefilm_format = 36;
	public static readonly RULE_articlebit = 37;
	public static readonly RULE_documentbit = 38;
	public static readonly RULE_websitebit = 39;
	public static readonly RULE_appbit = 40;
	public static readonly RULE_stillimagefilmbit = 41;
	public static readonly RULE_stillimg_one = 42;
	public static readonly RULE_videobit = 43;
	public static readonly RULE_video_one = 44;
	public static readonly RULE_imagebit = 45;
	public static readonly RULE_image_one = 46;
	public static readonly RULE_op_image_format = 47;
	public static readonly RULE_image_chained = 48;
	public static readonly RULE_image_chained4match = 49;
	public static readonly RULE_audiobit = 50;
	public static readonly RULE_audio_one = 51;
	public static readonly RULE_audio_format = 52;
	public static readonly RULE_op_audio_format = 53;
	public static readonly RULE_resource_chained = 54;
	public static readonly RULE_telephone = 55;
	public static readonly RULE_url = 56;
	public static readonly RULE_item = 57;
	public static readonly RULE_lead = 58;
	public static readonly RULE_angleref = 59;
	public static readonly RULE_example = 60;
	public static readonly RULE_bracketed_text = 61;
	public static readonly RULE_reference = 62;
	public static readonly RULE_progress = 63;
	public static readonly RULE_dateprop = 64;
	public static readonly RULE_dateprop_chained = 65;
	public static readonly RULE_instruction = 66;
	public static readonly RULE_hint = 67;
	public static readonly RULE_title = 68;
	public static readonly RULE_bool_label = 69;
	public static readonly RULE_progress_points = 70;
	public static readonly RULE_istracked = 71;
	public static readonly RULE_isinfoonly = 72;
	public static readonly RULE_atdef = 73;
	public static readonly RULE_atdef_ = 74;
	public static readonly RULE_dollarans = 75;
	public static readonly RULE_anchor = 76;
	public static readonly RULE_lines = 77;
	public static readonly RULE_s_and_w = 78;
	public static readonly RULE_dclines = 79;
	public static readonly RULE_clnsp = 80;
	public static readonly RULE_sspl = 81;
	public static readonly RULE_words = 82;
	public static readonly RULE_sp = 83;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"bitmark", "bitmark_", "truefalses", "true_false_1", "true_false", "mcrsep", 
		"mcrsep_end", "tfmisc", "choices", "cplus", "cminus", "choice_plus", "choice_minus", 
		"choice_star", "bitElem", "resource", "gap", "single_gap", "bullet_item", 
		"atpoint", "format", "resource_format", "resource_format_extra", "format2", 
		"image_format", "video_format", "article_format", "document_format", "app_format", 
		"website_format", "stillimagefilm_format", "op_article_format", "op_document_format", 
		"op_app_format", "op_website_format", "op_video_format", "op_stillimagefilm_format", 
		"articlebit", "documentbit", "websitebit", "appbit", "stillimagefilmbit", 
		"stillimg_one", "videobit", "video_one", "imagebit", "image_one", "op_image_format", 
		"image_chained", "image_chained4match", "audiobit", "audio_one", "audio_format", 
		"op_audio_format", "resource_chained", "telephone", "url", "item", "lead", 
		"angleref", "example", "bracketed_text", "reference", "progress", "dateprop", 
		"dateprop_chained", "instruction", "hint", "title", "bool_label", "progress_points", 
		"istracked", "isinfoonly", "atdef", "atdef_", "dollarans", "anchor", "lines", 
		"s_and_w", "dclines", "clnsp", "sspl", "words", "sp",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'[.'", undefined, undefined, undefined, undefined, undefined, 
		"'[^'", undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, "'[#'", 
		"']'", "':'", "'&'", "'::'", "'+'", "'.@'", "'>'", "'<'", "'=='", "'\u25BA'", 
		"'\u2192'", undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, "'[@'", undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, "'http://'", 
		"'https://'", "'&audio'", "'&image'", "'&image-zoom'", "'&video'", "'&article'", 
		"'&document'", "'&app'", "'&website'", "'&still-image-film'", "'&pdf'", 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, "'&audio-link'", "'&image-link'", 
		"'&video-link'", "'&article-link'", "'&document-link'", "'&document-download'", 
		"'&app-link'", "'&website-link'", "'&still-image-film-link'", undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, "'&image-embed'", "'&video-embed'", "'&daudio-embed'", "'&document-embed'", 
		"'&still-image-film-embed'", undefined, undefined, undefined, undefined, 
		undefined, "':bitmark--'", "':bitmark++'", "':text'", "':json'", "':prosemirror'", 
		"':placeholder'", "':basic'", "':jpg'", "':png'", "':gif'", "':svg'", 
		"':mp2'", "':mp3'", "':mp4'", "':flv'", "':wmv'", "':mpeg'", "':mpg'", 
		"'tel:'", "'.article-attachment'", "'*'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "OPDOT", "S", "BitTruefalse1", "BitTruefalse", "OPDOLL", "OPBUL", 
		"OPESC", "OPRANGLES", "OPRANGLEL", "OPDANGLE", "OPU", "OPB", "OPQ", "OPA", 
		"OPP", "OPM", "OPS", "OPR", "OPC", "OPHASH", "CL", "COLON", "AMP", "DBLCOLON", 
		"PLUS", "DotAt", "Greater", "Less", "DBLEQ", "RightAngle", "RightArrow", 
		"HSPL", "HSPL2", "SSPL", "SSPL2", "COMMENT", "DCANY", "Image_type", "Audio_type", 
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
		"TEL", "DotArticleAtt", "STAR", "URL", "LIST_LINE", "ENCLBARS", "OpAmpImageWAudio",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(truefalseParser._LITERAL_NAMES, truefalseParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return truefalseParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "truefalseParser.g4"; }

	// @Override
	public get ruleNames(): string[] { return truefalseParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return truefalseParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(truefalseParser._ATN, this);
	}
	// @RuleVersion(0)
	public bitmark(): BitmarkContext {
		let _localctx: BitmarkContext = new BitmarkContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, truefalseParser.RULE_bitmark);
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
						while (_la === truefalseParser.S) {
							{
							{
							this.state = 169;
							this.match(truefalseParser.S);
							}
							}
							this.state = 174;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
						}
						this.state = 175;
						this.match(truefalseParser.NL);
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
			} while (_la === truefalseParser.BitTruefalse1 || _la === truefalseParser.BitTruefalse);
			this.state = 188;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === truefalseParser.NL) {
				{
				{
				this.state = 185;
				this.match(truefalseParser.NL);
				}
				}
				this.state = 190;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 191;
			this.match(truefalseParser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 2, truefalseParser.RULE_bitmark_);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 193;
			this.truefalses();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public truefalses(): TruefalsesContext {
		let _localctx: TruefalsesContext = new TruefalsesContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, truefalseParser.RULE_truefalses);
		try {
			this.state = 197;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case truefalseParser.BitTruefalse1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 195;
				this.true_false_1();
				}
				break;
			case truefalseParser.BitTruefalse:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 196;
				this.true_false();
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
	public true_false_1(): True_false_1Context {
		let _localctx: True_false_1Context = new True_false_1Context(this._ctx, this.state);
		this.enterRule(_localctx, 6, truefalseParser.RULE_true_false_1);
		let _la: number;
		try {
			let _alt: number;
			this.state = 262;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 15, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 199;
				this.match(truefalseParser.BitTruefalse1);
				this.state = 200;
				this.format();
				this.state = 201;
				this.match(truefalseParser.CL);
				this.state = 205;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 5, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 202;
						this.match(truefalseParser.NL);
						}
						}
					}
					this.state = 207;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 5, this._ctx);
				}
				this.state = 217;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 7, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 208;
						this.bitElem();
						this.state = 212;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 6, this._ctx);
						while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
							if (_alt === 1) {
								{
								{
								this.state = 209;
								this.match(truefalseParser.NL);
								}
								}
							}
							this.state = 214;
							this._errHandler.sync(this);
							_alt = this.interpreter.adaptivePredict(this._input, 6, this._ctx);
						}
						}
						}
					}
					this.state = 219;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 7, this._ctx);
				}
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 220;
				this.match(truefalseParser.BitTruefalse1);
				this.state = 221;
				this.format();
				this.state = 222;
				this.match(truefalseParser.CL);
				this.state = 224;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 223;
					this.match(truefalseParser.NL);
					}
					}
					this.state = 226;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la === truefalseParser.NL);
				this.state = 237;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 10, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 228;
						this.bitElem();
						this.state = 232;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						while (_la === truefalseParser.NL) {
							{
							{
							this.state = 229;
							this.match(truefalseParser.NL);
							}
							}
							this.state = 234;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
						}
						}
						}
					}
					this.state = 239;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 10, this._ctx);
				}
				this.state = 240;
				this.choices();
				this.state = 244;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 11, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 241;
						this.match(truefalseParser.NL);
						}
						}
					}
					this.state = 246;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 11, this._ctx);
				}
				this.state = 260;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 14, this._ctx) ) {
				case 1:
					{
					this.state = 247;
					this.resource();
					this.state = 257;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 13, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 251;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
							while (_la === truefalseParser.NL) {
								{
								{
								this.state = 248;
								this.match(truefalseParser.NL);
								}
								}
								this.state = 253;
								this._errHandler.sync(this);
								_la = this._input.LA(1);
							}
							this.state = 254;
							this.resource();
							}
							}
						}
						this.state = 259;
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
	public true_false(): True_falseContext {
		let _localctx: True_falseContext = new True_falseContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, truefalseParser.RULE_true_false);
		let _la: number;
		try {
			let _alt: number;
			this.state = 342;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 29, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 264;
				this.match(truefalseParser.BitTruefalse);
				this.state = 265;
				this.format();
				this.state = 266;
				this.match(truefalseParser.CL);
				this.state = 270;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 16, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 267;
						this.match(truefalseParser.NL);
						}
						}
					}
					this.state = 272;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 16, this._ctx);
				}
				this.state = 282;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 18, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 273;
						this.bitElem();
						this.state = 277;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 17, this._ctx);
						while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
							if (_alt === 1) {
								{
								{
								this.state = 274;
								this.match(truefalseParser.NL);
								}
								}
							}
							this.state = 279;
							this._errHandler.sync(this);
							_alt = this.interpreter.adaptivePredict(this._input, 17, this._ctx);
						}
						}
						}
					}
					this.state = 284;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 18, this._ctx);
				}
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 285;
				this.match(truefalseParser.BitTruefalse);
				this.state = 286;
				this.format();
				this.state = 287;
				this.match(truefalseParser.CL);
				this.state = 291;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === truefalseParser.NL) {
					{
					{
					this.state = 288;
					this.match(truefalseParser.NL);
					}
					}
					this.state = 293;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 303;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 21, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 294;
						this.bitElem();
						this.state = 298;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						while (_la === truefalseParser.NL) {
							{
							{
							this.state = 295;
							this.match(truefalseParser.NL);
							}
							}
							this.state = 300;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
						}
						}
						}
					}
					this.state = 305;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 21, this._ctx);
				}
				this.state = 316;
				this._errHandler.sync(this);
				_alt = 1;
				do {
					switch (_alt) {
					case 1:
						{
						{
						this.state = 307;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === truefalseParser.HSPL || _la === truefalseParser.HSPL2) {
							{
							this.state = 306;
							this.mcrsep();
							}
						}

						this.state = 312;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 23, this._ctx);
						while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
							if (_alt === 1) {
								{
								{
								this.state = 309;
								this.tfmisc();
								}
								}
							}
							this.state = 314;
							this._errHandler.sync(this);
							_alt = this.interpreter.adaptivePredict(this._input, 23, this._ctx);
						}
						this.state = 315;
						this.choices();
						}
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					this.state = 318;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 24, this._ctx);
				} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
				this.state = 320;
				this.mcrsep_end();
				this.state = 324;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 25, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 321;
						this.match(truefalseParser.NL);
						}
						}
					}
					this.state = 326;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 25, this._ctx);
				}
				this.state = 340;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 28, this._ctx) ) {
				case 1:
					{
					this.state = 327;
					this.resource();
					this.state = 337;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 27, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 331;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
							while (_la === truefalseParser.NL) {
								{
								{
								this.state = 328;
								this.match(truefalseParser.NL);
								}
								}
								this.state = 333;
								this._errHandler.sync(this);
								_la = this._input.LA(1);
							}
							this.state = 334;
							this.resource();
							}
							}
						}
						this.state = 339;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 27, this._ctx);
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
	public mcrsep(): McrsepContext {
		let _localctx: McrsepContext = new McrsepContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, truefalseParser.RULE_mcrsep);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 344;
			_la = this._input.LA(1);
			if (!(_la === truefalseParser.HSPL || _la === truefalseParser.HSPL2)) {
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
	public mcrsep_end(): Mcrsep_endContext {
		let _localctx: Mcrsep_endContext = new Mcrsep_endContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, truefalseParser.RULE_mcrsep_end);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 346;
			_la = this._input.LA(1);
			if (!(_la === truefalseParser.HSPL || _la === truefalseParser.HSPL2)) {
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
	public tfmisc(): TfmiscContext {
		let _localctx: TfmiscContext = new TfmiscContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, truefalseParser.RULE_tfmisc);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 348;
			this.bitElem();
			this.state = 352;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === truefalseParser.NL) {
				{
				{
				this.state = 349;
				this.match(truefalseParser.NL);
				}
				}
				this.state = 354;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
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
	public choices(): ChoicesContext {
		let _localctx: ChoicesContext = new ChoicesContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, truefalseParser.RULE_choices);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 357;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 31, this._ctx) ) {
			case 1:
				{
				this.state = 355;
				this.cplus();
				}
				break;

			case 2:
				{
				this.state = 356;
				this.cminus();
				}
				break;
			}
			this.state = 374;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 35, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 360;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === truefalseParser.NL) {
						{
						this.state = 359;
						this.match(truefalseParser.NL);
						}
					}

					this.state = 365;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === truefalseParser.S) {
						{
						{
						this.state = 362;
						this.match(truefalseParser.S);
						}
						}
						this.state = 367;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					this.state = 370;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 34, this._ctx) ) {
					case 1:
						{
						this.state = 368;
						this.cplus();
						}
						break;

					case 2:
						{
						this.state = 369;
						this.cminus();
						}
						break;
					}
					}
					}
				}
				this.state = 376;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 35, this._ctx);
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
	public cplus(): CplusContext {
		let _localctx: CplusContext = new CplusContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, truefalseParser.RULE_cplus);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 377;
			this.choice_plus();
			this.state = 379;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 36, this._ctx) ) {
			case 1:
				{
				this.state = 378;
				this.example();
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
	public cminus(): CminusContext {
		let _localctx: CminusContext = new CminusContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, truefalseParser.RULE_cminus);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 381;
			this.choice_minus();
			this.state = 383;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 37, this._ctx) ) {
			case 1:
				{
				this.state = 382;
				this.example();
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
	public choice_plus(): Choice_plusContext {
		let _localctx: Choice_plusContext = new Choice_plusContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, truefalseParser.RULE_choice_plus);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 386;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === truefalseParser.OPC) {
				{
				this.state = 385;
				this.item();
				}
			}

			this.state = 388;
			this.match(truefalseParser.OPP);
			this.state = 391;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				this.state = 391;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case truefalseParser.S:
				case truefalseParser.OPS:
				case truefalseParser.COLON:
				case truefalseParser.AMP:
				case truefalseParser.DBLCOLON:
				case truefalseParser.Greater:
				case truefalseParser.Less:
				case truefalseParser.DBLEQ:
				case truefalseParser.RightAngle:
				case truefalseParser.RightArrow:
				case truefalseParser.NUMERIC:
				case truefalseParser.STRING:
				case truefalseParser.NOTBITMARK:
				case truefalseParser.ELIPSIS:
				case truefalseParser.SENTENCE:
				case truefalseParser.BARSTRING:
				case truefalseParser.URL:
					{
					this.state = 389;
					this.s_and_w();
					}
					break;
				case truefalseParser.NL:
					{
					this.state = 390;
					this.match(truefalseParser.NL);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				this.state = 393;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << truefalseParser.S) | (1 << truefalseParser.OPS) | (1 << truefalseParser.COLON) | (1 << truefalseParser.AMP) | (1 << truefalseParser.DBLCOLON) | (1 << truefalseParser.Greater) | (1 << truefalseParser.Less) | (1 << truefalseParser.DBLEQ) | (1 << truefalseParser.RightAngle) | (1 << truefalseParser.RightArrow))) !== 0) || ((((_la - 43)) & ~0x1F) === 0 && ((1 << (_la - 43)) & ((1 << (truefalseParser.NUMERIC - 43)) | (1 << (truefalseParser.STRING - 43)) | (1 << (truefalseParser.NL - 43)) | (1 << (truefalseParser.NOTBITMARK - 43)) | (1 << (truefalseParser.ELIPSIS - 43)) | (1 << (truefalseParser.SENTENCE - 43)) | (1 << (truefalseParser.BARSTRING - 43)))) !== 0) || _la === truefalseParser.URL);
			this.state = 395;
			this.match(truefalseParser.CL);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 24, truefalseParser.RULE_choice_minus);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 398;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === truefalseParser.OPC) {
				{
				this.state = 397;
				this.item();
				}
			}

			this.state = 400;
			this.match(truefalseParser.OPM);
			this.state = 403;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				this.state = 403;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case truefalseParser.S:
				case truefalseParser.OPS:
				case truefalseParser.COLON:
				case truefalseParser.AMP:
				case truefalseParser.DBLCOLON:
				case truefalseParser.Greater:
				case truefalseParser.Less:
				case truefalseParser.DBLEQ:
				case truefalseParser.RightAngle:
				case truefalseParser.RightArrow:
				case truefalseParser.NUMERIC:
				case truefalseParser.STRING:
				case truefalseParser.NOTBITMARK:
				case truefalseParser.ELIPSIS:
				case truefalseParser.SENTENCE:
				case truefalseParser.BARSTRING:
				case truefalseParser.URL:
					{
					this.state = 401;
					this.s_and_w();
					}
					break;
				case truefalseParser.NL:
					{
					this.state = 402;
					this.match(truefalseParser.NL);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				this.state = 405;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << truefalseParser.S) | (1 << truefalseParser.OPS) | (1 << truefalseParser.COLON) | (1 << truefalseParser.AMP) | (1 << truefalseParser.DBLCOLON) | (1 << truefalseParser.Greater) | (1 << truefalseParser.Less) | (1 << truefalseParser.DBLEQ) | (1 << truefalseParser.RightAngle) | (1 << truefalseParser.RightArrow))) !== 0) || ((((_la - 43)) & ~0x1F) === 0 && ((1 << (_la - 43)) & ((1 << (truefalseParser.NUMERIC - 43)) | (1 << (truefalseParser.STRING - 43)) | (1 << (truefalseParser.NL - 43)) | (1 << (truefalseParser.NOTBITMARK - 43)) | (1 << (truefalseParser.ELIPSIS - 43)) | (1 << (truefalseParser.SENTENCE - 43)) | (1 << (truefalseParser.BARSTRING - 43)))) !== 0) || _la === truefalseParser.URL);
			this.state = 407;
			this.match(truefalseParser.CL);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 26, truefalseParser.RULE_choice_star);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 410;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === truefalseParser.OPC) {
				{
				this.state = 409;
				this.item();
				}
			}

			this.state = 412;
			this.match(truefalseParser.OPR);
			this.state = 415;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				this.state = 415;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case truefalseParser.S:
				case truefalseParser.OPS:
				case truefalseParser.COLON:
				case truefalseParser.AMP:
				case truefalseParser.DBLCOLON:
				case truefalseParser.Greater:
				case truefalseParser.Less:
				case truefalseParser.DBLEQ:
				case truefalseParser.RightAngle:
				case truefalseParser.RightArrow:
				case truefalseParser.NUMERIC:
				case truefalseParser.STRING:
				case truefalseParser.NOTBITMARK:
				case truefalseParser.ELIPSIS:
				case truefalseParser.SENTENCE:
				case truefalseParser.BARSTRING:
				case truefalseParser.URL:
					{
					this.state = 413;
					this.s_and_w();
					}
					break;
				case truefalseParser.NL:
					{
					this.state = 414;
					this.match(truefalseParser.NL);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				this.state = 417;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << truefalseParser.S) | (1 << truefalseParser.OPS) | (1 << truefalseParser.COLON) | (1 << truefalseParser.AMP) | (1 << truefalseParser.DBLCOLON) | (1 << truefalseParser.Greater) | (1 << truefalseParser.Less) | (1 << truefalseParser.DBLEQ) | (1 << truefalseParser.RightAngle) | (1 << truefalseParser.RightArrow))) !== 0) || ((((_la - 43)) & ~0x1F) === 0 && ((1 << (_la - 43)) & ((1 << (truefalseParser.NUMERIC - 43)) | (1 << (truefalseParser.STRING - 43)) | (1 << (truefalseParser.NL - 43)) | (1 << (truefalseParser.NOTBITMARK - 43)) | (1 << (truefalseParser.ELIPSIS - 43)) | (1 << (truefalseParser.SENTENCE - 43)) | (1 << (truefalseParser.BARSTRING - 43)))) !== 0) || _la === truefalseParser.URL);
			this.state = 419;
			this.match(truefalseParser.CL);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 28, truefalseParser.RULE_bitElem);
		try {
			this.state = 445;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 47, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 421;
				this.match(truefalseParser.LIST_LINE);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 422;
				this.match(truefalseParser.NOTBITMARK);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 423;
				this.dclines();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 424;
				this.gap();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 425;
				this.atdef();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 426;
				this.reference();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 427;
				this.item();
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 428;
				this.title();
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 429;
				this.instruction();
				}
				break;

			case 10:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 430;
				this.hint();
				}
				break;

			case 11:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 431;
				this.s_and_w();
				}
				break;

			case 12:
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 432;
				this.example();
				}
				break;

			case 13:
				this.enterOuterAlt(_localctx, 13);
				{
				this.state = 433;
				this.bool_label();
				}
				break;

			case 14:
				this.enterOuterAlt(_localctx, 14);
				{
				this.state = 434;
				this.imagebit();
				}
				break;

			case 15:
				this.enterOuterAlt(_localctx, 15);
				{
				this.state = 435;
				this.audiobit();
				}
				break;

			case 16:
				this.enterOuterAlt(_localctx, 16);
				{
				this.state = 436;
				this.videobit();
				}
				break;

			case 17:
				this.enterOuterAlt(_localctx, 17);
				{
				this.state = 437;
				this.articlebit();
				}
				break;

			case 18:
				this.enterOuterAlt(_localctx, 18);
				{
				this.state = 438;
				this.documentbit();
				}
				break;

			case 19:
				this.enterOuterAlt(_localctx, 19);
				{
				this.state = 439;
				this.appbit();
				}
				break;

			case 20:
				this.enterOuterAlt(_localctx, 20);
				{
				this.state = 440;
				this.websitebit();
				}
				break;

			case 21:
				this.enterOuterAlt(_localctx, 21);
				{
				this.state = 441;
				this.stillimagefilmbit();
				}
				break;

			case 22:
				this.enterOuterAlt(_localctx, 22);
				{
				this.state = 442;
				this.angleref();
				}
				break;

			case 23:
				this.enterOuterAlt(_localctx, 23);
				{
				this.state = 443;
				this.anchor();
				}
				break;

			case 24:
				this.enterOuterAlt(_localctx, 24);
				{
				this.state = 444;
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
		this.enterRule(_localctx, 30, truefalseParser.RULE_resource);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 447;
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
		this.enterRule(_localctx, 32, truefalseParser.RULE_gap);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 449;
			this.single_gap();
			this.state = 457;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 49, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					this.state = 455;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case truefalseParser.OPU:
						{
						this.state = 450;
						this.single_gap();
						}
						break;
					case truefalseParser.OPB:
						{
						this.state = 451;
						this.instruction();
						}
						break;
					case truefalseParser.OPQ:
						{
						this.state = 452;
						this.hint();
						}
						break;
					case truefalseParser.OPC:
						{
						this.state = 453;
						this.item();
						}
						break;
					case truefalseParser.AtExampleWithStr:
					case truefalseParser.AtExamplecol:
					case truefalseParser.AtExamplecl:
						{
						this.state = 454;
						this.example();
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					}
				}
				this.state = 459;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 49, this._ctx);
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
		this.enterRule(_localctx, 34, truefalseParser.RULE_single_gap);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 460;
			this.match(truefalseParser.OPU);
			this.state = 464;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 50, this._ctx) ) {
			case 1:
				{
				this.state = 461;
				this.match(truefalseParser.NUMERIC);
				}
				break;

			case 2:
				{
				this.state = 462;
				this.match(truefalseParser.STRING);
				}
				break;

			case 3:
				// tslint:disable-next-line:no-empty
				{
				}
				break;
			}
			this.state = 469;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << truefalseParser.S) | (1 << truefalseParser.OPS) | (1 << truefalseParser.COLON) | (1 << truefalseParser.AMP) | (1 << truefalseParser.DBLCOLON) | (1 << truefalseParser.Greater) | (1 << truefalseParser.Less) | (1 << truefalseParser.DBLEQ) | (1 << truefalseParser.RightAngle) | (1 << truefalseParser.RightArrow))) !== 0) || ((((_la - 43)) & ~0x1F) === 0 && ((1 << (_la - 43)) & ((1 << (truefalseParser.NUMERIC - 43)) | (1 << (truefalseParser.STRING - 43)) | (1 << (truefalseParser.NOTBITMARK - 43)) | (1 << (truefalseParser.ELIPSIS - 43)) | (1 << (truefalseParser.SENTENCE - 43)) | (1 << (truefalseParser.BARSTRING - 43)))) !== 0) || _la === truefalseParser.URL) {
				{
				{
				this.state = 466;
				this.s_and_w();
				}
				}
				this.state = 471;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 472;
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
	public bullet_item(): Bullet_itemContext {
		let _localctx: Bullet_itemContext = new Bullet_itemContext(this._ctx, this.state);
		this.enterRule(_localctx, 36, truefalseParser.RULE_bullet_item);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 474;
			this.match(truefalseParser.OPBUL);
			this.state = 475;
			this.s_and_w();
			this.state = 476;
			this.match(truefalseParser.CL);
			this.state = 478;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === truefalseParser.AtPoints) {
				{
				this.state = 477;
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
		this.enterRule(_localctx, 38, truefalseParser.RULE_atpoint);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 480;
			this.match(truefalseParser.AtPoints);
			this.state = 481;
			this.match(truefalseParser.NUMERIC);
			this.state = 482;
			this.match(truefalseParser.CL);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 40, truefalseParser.RULE_format);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 487;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 53, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 484;
					this.resource_format();
					}
					}
				}
				this.state = 489;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 53, this._ctx);
			}
			this.state = 495;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 81)) & ~0x1F) === 0 && ((1 << (_la - 81)) & ((1 << (truefalseParser.AmpAudio - 81)) | (1 << (truefalseParser.AmpImage - 81)) | (1 << (truefalseParser.AmpImageZoom - 81)) | (1 << (truefalseParser.AmpVideo - 81)) | (1 << (truefalseParser.AmpArticle - 81)) | (1 << (truefalseParser.AmpDocument - 81)) | (1 << (truefalseParser.AmpApp - 81)) | (1 << (truefalseParser.AmpWebsite - 81)) | (1 << (truefalseParser.AmpStillImageFilm - 81)) | (1 << (truefalseParser.AmpPdf - 81)) | (1 << (truefalseParser.AmpAudioLink - 81)) | (1 << (truefalseParser.AmpImageLink - 81)) | (1 << (truefalseParser.AmpVideoLink - 81)) | (1 << (truefalseParser.AmpArticleLink - 81)) | (1 << (truefalseParser.AmpDocumentLink - 81)) | (1 << (truefalseParser.AmpDocumentDownload - 81)) | (1 << (truefalseParser.AmpAppLink - 81)) | (1 << (truefalseParser.AmpWebsiteLink - 81)) | (1 << (truefalseParser.AmpStillImageFilmLink - 81)))) !== 0) || ((((_la - 121)) & ~0x1F) === 0 && ((1 << (_la - 121)) & ((1 << (truefalseParser.AmpVideoEmbed - 121)) | (1 << (truefalseParser.AmpDocumentEmbed - 121)) | (1 << (truefalseParser.AmpStillImageFilmEmbed - 121)) | (1 << (truefalseParser.ColonText - 121)) | (1 << (truefalseParser.ColonJson - 121)))) !== 0)) {
				{
				this.state = 493;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case truefalseParser.ColonText:
					{
					this.state = 490;
					this.match(truefalseParser.ColonText);
					}
					break;
				case truefalseParser.ColonJson:
					{
					this.state = 491;
					this.match(truefalseParser.ColonJson);
					}
					break;
				case truefalseParser.AmpAudio:
				case truefalseParser.AmpImage:
				case truefalseParser.AmpImageZoom:
				case truefalseParser.AmpVideo:
				case truefalseParser.AmpArticle:
				case truefalseParser.AmpDocument:
				case truefalseParser.AmpApp:
				case truefalseParser.AmpWebsite:
				case truefalseParser.AmpStillImageFilm:
				case truefalseParser.AmpPdf:
				case truefalseParser.AmpAudioLink:
				case truefalseParser.AmpImageLink:
				case truefalseParser.AmpVideoLink:
				case truefalseParser.AmpArticleLink:
				case truefalseParser.AmpDocumentLink:
				case truefalseParser.AmpDocumentDownload:
				case truefalseParser.AmpAppLink:
				case truefalseParser.AmpWebsiteLink:
				case truefalseParser.AmpStillImageFilmLink:
				case truefalseParser.AmpVideoEmbed:
				case truefalseParser.AmpDocumentEmbed:
				case truefalseParser.AmpStillImageFilmEmbed:
					{
					this.state = 492;
					this.resource_format_extra();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				this.state = 497;
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
		this.enterRule(_localctx, 42, truefalseParser.RULE_resource_format);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 498;
			_la = this._input.LA(1);
			if (!(((((_la - 85)) & ~0x1F) === 0 && ((1 << (_la - 85)) & ((1 << (truefalseParser.AmpArticle - 85)) | (1 << (truefalseParser.AmpDocument - 85)) | (1 << (truefalseParser.AmpWebsite - 85)) | (1 << (truefalseParser.AmpStillImageFilm - 85)) | (1 << (truefalseParser.AmpAudioLink - 85)) | (1 << (truefalseParser.AmpImageLink - 85)) | (1 << (truefalseParser.AmpVideoLink - 85)) | (1 << (truefalseParser.AmpArticleLink - 85)) | (1 << (truefalseParser.AmpDocumentLink - 85)) | (1 << (truefalseParser.AmpDocumentDownload - 85)) | (1 << (truefalseParser.AmpAppLink - 85)) | (1 << (truefalseParser.AmpWebsiteLink - 85)) | (1 << (truefalseParser.AmpStillImageFilmLink - 85)))) !== 0) || ((((_la - 121)) & ~0x1F) === 0 && ((1 << (_la - 121)) & ((1 << (truefalseParser.AmpVideoEmbed - 121)) | (1 << (truefalseParser.AmpAudioEmbed - 121)) | (1 << (truefalseParser.AmpDocumentEmbed - 121)) | (1 << (truefalseParser.AmpStillImageFilmEmbed - 121)) | (1 << (truefalseParser.BitmarkMinus - 121)) | (1 << (truefalseParser.BitmarkPlus - 121)) | (1 << (truefalseParser.ColonJson - 121)) | (1 << (truefalseParser.Prosemirror - 121)) | (1 << (truefalseParser.Placeholder - 121)))) !== 0))) {
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
		this.enterRule(_localctx, 44, truefalseParser.RULE_resource_format_extra);
		try {
			this.state = 509;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case truefalseParser.AmpImage:
			case truefalseParser.AmpImageZoom:
			case truefalseParser.AmpImageLink:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 500;
				this.image_format();
				}
				break;
			case truefalseParser.AmpAudio:
			case truefalseParser.AmpAudioLink:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 501;
				this.audio_format();
				}
				break;
			case truefalseParser.AmpVideo:
			case truefalseParser.AmpVideoLink:
			case truefalseParser.AmpVideoEmbed:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 502;
				this.video_format();
				}
				break;
			case truefalseParser.AmpArticle:
			case truefalseParser.AmpArticleLink:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 503;
				this.article_format();
				}
				break;
			case truefalseParser.AmpDocument:
			case truefalseParser.AmpDocumentLink:
			case truefalseParser.AmpDocumentDownload:
			case truefalseParser.AmpDocumentEmbed:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 504;
				this.document_format();
				}
				break;
			case truefalseParser.AmpApp:
			case truefalseParser.AmpAppLink:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 505;
				this.app_format();
				}
				break;
			case truefalseParser.AmpWebsite:
			case truefalseParser.AmpWebsiteLink:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 506;
				this.website_format();
				}
				break;
			case truefalseParser.AmpStillImageFilm:
			case truefalseParser.AmpStillImageFilmLink:
			case truefalseParser.AmpStillImageFilmEmbed:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 507;
				this.stillimagefilm_format();
				}
				break;
			case truefalseParser.AmpPdf:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 508;
				this.match(truefalseParser.AmpPdf);
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
		this.enterRule(_localctx, 46, truefalseParser.RULE_format2);
		try {
			this.state = 517;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case truefalseParser.BitmarkMinus:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 511;
				this.match(truefalseParser.BitmarkMinus);
				}
				break;
			case truefalseParser.BitmarkPlus:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 512;
				this.match(truefalseParser.BitmarkPlus);
				}
				break;
			case truefalseParser.ColonText:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 513;
				this.match(truefalseParser.ColonText);
				}
				break;
			case truefalseParser.Placeholder:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 514;
				this.match(truefalseParser.Placeholder);
				}
				break;
			case truefalseParser.ColonJson:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 515;
				this.match(truefalseParser.ColonJson);
				}
				break;
			case truefalseParser.EOF:
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
		this.enterRule(_localctx, 48, truefalseParser.RULE_image_format);
		let _la: number;
		try {
			this.state = 532;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case truefalseParser.AmpImage:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 519;
				this.match(truefalseParser.AmpImage);
				this.state = 522;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case truefalseParser.Image_type:
					{
					{
					this.state = 520;
					this.match(truefalseParser.Image_type);
					}
					}
					break;
				case truefalseParser.DotArticleAtt:
					{
					{
					this.state = 521;
					this.match(truefalseParser.DotArticleAtt);
					}
					}
					break;
				case truefalseParser.CL:
				case truefalseParser.AmpAudio:
				case truefalseParser.AmpImage:
				case truefalseParser.AmpImageZoom:
				case truefalseParser.AmpVideo:
				case truefalseParser.AmpArticle:
				case truefalseParser.AmpDocument:
				case truefalseParser.AmpApp:
				case truefalseParser.AmpWebsite:
				case truefalseParser.AmpStillImageFilm:
				case truefalseParser.AmpPdf:
				case truefalseParser.AmpAudioLink:
				case truefalseParser.AmpImageLink:
				case truefalseParser.AmpVideoLink:
				case truefalseParser.AmpArticleLink:
				case truefalseParser.AmpDocumentLink:
				case truefalseParser.AmpDocumentDownload:
				case truefalseParser.AmpAppLink:
				case truefalseParser.AmpWebsiteLink:
				case truefalseParser.AmpStillImageFilmLink:
				case truefalseParser.AmpVideoEmbed:
				case truefalseParser.AmpDocumentEmbed:
				case truefalseParser.AmpStillImageFilmEmbed:
				case truefalseParser.ColonText:
				case truefalseParser.ColonJson:
					break;
				default:
					break;
				}
				}
				break;
			case truefalseParser.AmpImageLink:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 524;
				this.match(truefalseParser.AmpImageLink);
				this.state = 526;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === truefalseParser.Image_type) {
					{
					this.state = 525;
					this.match(truefalseParser.Image_type);
					}
				}

				}
				break;
			case truefalseParser.AmpImageZoom:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 528;
				this.match(truefalseParser.AmpImageZoom);
				this.state = 530;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === truefalseParser.Image_type) {
					{
					this.state = 529;
					this.match(truefalseParser.Image_type);
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
		this.enterRule(_localctx, 50, truefalseParser.RULE_video_format);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 534;
			_la = this._input.LA(1);
			if (!(_la === truefalseParser.AmpVideo || _la === truefalseParser.AmpVideoLink || _la === truefalseParser.AmpVideoEmbed)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 537;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === truefalseParser.COLON) {
				{
				this.state = 535;
				this.match(truefalseParser.COLON);
				this.state = 536;
				this.match(truefalseParser.Video_type);
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
		this.enterRule(_localctx, 52, truefalseParser.RULE_article_format);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 539;
			_la = this._input.LA(1);
			if (!(_la === truefalseParser.AmpArticle || _la === truefalseParser.AmpArticleLink)) {
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
		this.enterRule(_localctx, 54, truefalseParser.RULE_document_format);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 541;
			_la = this._input.LA(1);
			if (!(((((_la - 86)) & ~0x1F) === 0 && ((1 << (_la - 86)) & ((1 << (truefalseParser.AmpDocument - 86)) | (1 << (truefalseParser.AmpDocumentLink - 86)) | (1 << (truefalseParser.AmpDocumentDownload - 86)))) !== 0) || _la === truefalseParser.AmpDocumentEmbed)) {
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
		this.enterRule(_localctx, 56, truefalseParser.RULE_app_format);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 543;
			_la = this._input.LA(1);
			if (!(_la === truefalseParser.AmpApp || _la === truefalseParser.AmpAppLink)) {
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
		this.enterRule(_localctx, 58, truefalseParser.RULE_website_format);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 545;
			_la = this._input.LA(1);
			if (!(_la === truefalseParser.AmpWebsite || _la === truefalseParser.AmpWebsiteLink)) {
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
		this.enterRule(_localctx, 60, truefalseParser.RULE_stillimagefilm_format);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 547;
			_la = this._input.LA(1);
			if (!(_la === truefalseParser.AmpStillImageFilm || _la === truefalseParser.AmpStillImageFilmLink || _la === truefalseParser.AmpStillImageFilmEmbed)) {
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
		this.enterRule(_localctx, 62, truefalseParser.RULE_op_article_format);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 549;
			_la = this._input.LA(1);
			if (!(_la === truefalseParser.OpAmpArticle || _la === truefalseParser.OpAmpArticleLink)) {
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
		this.enterRule(_localctx, 64, truefalseParser.RULE_op_document_format);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 551;
			_la = this._input.LA(1);
			if (!(((((_la - 97)) & ~0x1F) === 0 && ((1 << (_la - 97)) & ((1 << (truefalseParser.OpAmpDocument - 97)) | (1 << (truefalseParser.OpAmpDocumentLink - 97)) | (1 << (truefalseParser.OpAmpDocumentDownload - 97)) | (1 << (truefalseParser.OpAmpDocumentEmbed - 97)))) !== 0))) {
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
		this.enterRule(_localctx, 66, truefalseParser.RULE_op_app_format);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 553;
			_la = this._input.LA(1);
			if (!(_la === truefalseParser.OpAmpApp || _la === truefalseParser.OpAmpAppLink)) {
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
		this.enterRule(_localctx, 68, truefalseParser.RULE_op_website_format);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 555;
			_la = this._input.LA(1);
			if (!(_la === truefalseParser.OpAmpWebsite || _la === truefalseParser.OpAmpWebsiteLink)) {
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
		this.enterRule(_localctx, 70, truefalseParser.RULE_op_video_format);
		try {
			this.state = 572;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case truefalseParser.OpAmpVideo:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 557;
				this.match(truefalseParser.OpAmpVideo);
				this.state = 560;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 63, this._ctx) ) {
				case 1:
					{
					this.state = 558;
					this.match(truefalseParser.COLON);
					this.state = 559;
					this.match(truefalseParser.Video_type);
					}
					break;
				}
				}
				break;
			case truefalseParser.OpAmpVideoLink:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 562;
				this.match(truefalseParser.OpAmpVideoLink);
				this.state = 565;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 64, this._ctx) ) {
				case 1:
					{
					this.state = 563;
					this.match(truefalseParser.COLON);
					this.state = 564;
					this.match(truefalseParser.Video_type);
					}
					break;
				}
				}
				break;
			case truefalseParser.OpAmpVideoEmbed:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 567;
				this.match(truefalseParser.OpAmpVideoEmbed);
				this.state = 570;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 65, this._ctx) ) {
				case 1:
					{
					this.state = 568;
					this.match(truefalseParser.COLON);
					this.state = 569;
					this.match(truefalseParser.Video_type);
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
		this.enterRule(_localctx, 72, truefalseParser.RULE_op_stillimagefilm_format);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 574;
			_la = this._input.LA(1);
			if (!(((((_la - 100)) & ~0x1F) === 0 && ((1 << (_la - 100)) & ((1 << (truefalseParser.OpAmpStillImageFilm - 100)) | (1 << (truefalseParser.OpAmpStillImageFilmLink - 100)) | (1 << (truefalseParser.OpAmpStillImageFilmEmbed - 100)))) !== 0))) {
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
		this.enterRule(_localctx, 74, truefalseParser.RULE_articlebit);
		try {
			this.state = 582;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case truefalseParser.OpAmpArticle:
			case truefalseParser.OpAmpArticleLink:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 576;
				this.op_article_format();
				this.state = 577;
				this.match(truefalseParser.COLON);
				this.state = 578;
				this.url();
				this.state = 579;
				this.match(truefalseParser.CL);
				}
				break;
			case truefalseParser.ArticleText:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 581;
				this.match(truefalseParser.ArticleText);
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
		this.enterRule(_localctx, 76, truefalseParser.RULE_documentbit);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 584;
			this.op_document_format();
			this.state = 585;
			this.match(truefalseParser.COLON);
			this.state = 586;
			this.url();
			this.state = 587;
			this.match(truefalseParser.CL);
			this.state = 592;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === truefalseParser.OPATALT) {
				{
				this.state = 588;
				this.match(truefalseParser.OPATALT);
				this.state = 589;
				this.words();
				this.state = 590;
				this.match(truefalseParser.CL);
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
		this.enterRule(_localctx, 78, truefalseParser.RULE_websitebit);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 594;
			this.op_website_format();
			this.state = 595;
			this.match(truefalseParser.COLON);
			this.state = 596;
			this.url();
			this.state = 597;
			this.match(truefalseParser.CL);
			this.state = 602;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === truefalseParser.OPATALT) {
				{
				this.state = 598;
				this.match(truefalseParser.OPATALT);
				this.state = 599;
				this.words();
				this.state = 600;
				this.match(truefalseParser.CL);
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
		this.enterRule(_localctx, 80, truefalseParser.RULE_appbit);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 604;
			this.op_app_format();
			this.state = 605;
			this.match(truefalseParser.COLON);
			this.state = 608;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case truefalseParser.URL:
				{
				this.state = 606;
				this.url();
				}
				break;
			case truefalseParser.TEL:
				{
				this.state = 607;
				this.telephone();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 610;
			this.match(truefalseParser.CL);
			this.state = 615;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === truefalseParser.OPATALT) {
				{
				this.state = 611;
				this.match(truefalseParser.OPATALT);
				this.state = 612;
				this.words();
				this.state = 613;
				this.match(truefalseParser.CL);
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
		this.enterRule(_localctx, 82, truefalseParser.RULE_stillimagefilmbit);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 617;
			this.stillimg_one();
			this.state = 621;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 72, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 618;
					this.resource_chained();
					}
					}
				}
				this.state = 623;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 72, this._ctx);
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
		this.enterRule(_localctx, 84, truefalseParser.RULE_stillimg_one);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 624;
			this.op_stillimagefilm_format();
			this.state = 625;
			this.match(truefalseParser.COLON);
			this.state = 629;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === truefalseParser.S) {
				{
				{
				this.state = 626;
				this.match(truefalseParser.S);
				}
				}
				this.state = 631;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 632;
			this.url();
			this.state = 633;
			this.match(truefalseParser.CL);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 86, truefalseParser.RULE_videobit);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 635;
			this.video_one();
			this.state = 639;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 74, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 636;
					this.resource_chained();
					}
					}
				}
				this.state = 641;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 74, this._ctx);
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
		this.enterRule(_localctx, 88, truefalseParser.RULE_video_one);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 642;
			this.op_video_format();
			this.state = 643;
			this.match(truefalseParser.COLON);
			this.state = 644;
			this.url();
			this.state = 645;
			this.match(truefalseParser.CL);
			this.state = 650;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 75, this._ctx) ) {
			case 1:
				{
				this.state = 646;
				this.match(truefalseParser.OPATALT);
				this.state = 647;
				this.words();
				this.state = 648;
				this.match(truefalseParser.CL);
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
		this.enterRule(_localctx, 90, truefalseParser.RULE_imagebit);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 652;
			this.image_one();
			this.state = 656;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 76, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 653;
					this.image_chained();
					}
					}
				}
				this.state = 658;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 76, this._ctx);
			}
			this.state = 661;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 77, this._ctx) ) {
			case 1:
				{
				this.state = 659;
				this.match(truefalseParser.NL);
				this.state = 660;
				this.match(truefalseParser.ShowInIndex);
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
		this.enterRule(_localctx, 92, truefalseParser.RULE_image_one);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 663;
			this.op_image_format();
			this.state = 664;
			this.match(truefalseParser.COLON);
			this.state = 668;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === truefalseParser.S) {
				{
				{
				this.state = 665;
				this.match(truefalseParser.S);
				}
				}
				this.state = 670;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 671;
			this.url();
			this.state = 672;
			this.match(truefalseParser.CL);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 94, truefalseParser.RULE_op_image_format);
		let _la: number;
		try {
			this.state = 688;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case truefalseParser.OpAmpImage:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 674;
				this.match(truefalseParser.OpAmpImage);
				this.state = 677;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case truefalseParser.Image_type:
					{
					{
					this.state = 675;
					this.match(truefalseParser.Image_type);
					}
					}
					break;
				case truefalseParser.DotArticleAtt:
					{
					{
					this.state = 676;
					this.match(truefalseParser.DotArticleAtt);
					}
					}
					break;
				case truefalseParser.COLON:
					break;
				default:
					break;
				}
				}
				break;
			case truefalseParser.OpAmpImageLink:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 679;
				this.match(truefalseParser.OpAmpImageLink);
				this.state = 681;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === truefalseParser.Image_type) {
					{
					this.state = 680;
					this.match(truefalseParser.Image_type);
					}
				}

				}
				break;
			case truefalseParser.OpAmpImageZoom:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 683;
				this.match(truefalseParser.OpAmpImageZoom);
				this.state = 685;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === truefalseParser.Image_type) {
					{
					this.state = 684;
					this.match(truefalseParser.Image_type);
					}
				}

				}
				break;
			case truefalseParser.OpAmpImageWAudio:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 687;
				this.match(truefalseParser.OpAmpImageWAudio);
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
		this.enterRule(_localctx, 96, truefalseParser.RULE_image_chained);
		let _la: number;
		try {
			let _alt: number;
			this.state = 707;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case truefalseParser.AtSrc:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 690;
				this.match(truefalseParser.AtSrc);
				this.state = 691;
				this.match(truefalseParser.COLON);
				this.state = 692;
				this.url();
				this.state = 693;
				this.match(truefalseParser.CL);
				}
				break;
			case truefalseParser.AtWidth:
			case truefalseParser.AtHeight:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 695;
				_la = this._input.LA(1);
				if (!(_la === truefalseParser.AtWidth || _la === truefalseParser.AtHeight)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 696;
				this.match(truefalseParser.COLON);
				this.state = 697;
				this.match(truefalseParser.NUMERIC);
				this.state = 698;
				this.match(truefalseParser.CL);
				}
				break;
			case truefalseParser.OPATALT:
			case truefalseParser.OpAtCaption:
			case truefalseParser.OpAtLicense:
			case truefalseParser.OpAtCopyright:
			case truefalseParser.OpAtSearch:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 699;
				_la = this._input.LA(1);
				if (!(((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & ((1 << (truefalseParser.OPATALT - 69)) | (1 << (truefalseParser.OpAtCaption - 69)) | (1 << (truefalseParser.OpAtLicense - 69)) | (1 << (truefalseParser.OpAtCopyright - 69)) | (1 << (truefalseParser.OpAtSearch - 69)))) !== 0))) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 703;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 83, this._ctx);
				while (_alt !== 1 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1 + 1) {
						{
						{
						this.state = 700;
						this.matchWildcard();
						}
						}
					}
					this.state = 705;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 83, this._ctx);
				}
				this.state = 706;
				this.match(truefalseParser.CL);
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
		this.enterRule(_localctx, 98, truefalseParser.RULE_image_chained4match);
		let _la: number;
		try {
			let _alt: number;
			this.state = 726;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case truefalseParser.AtSrc:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 709;
				this.match(truefalseParser.AtSrc);
				this.state = 710;
				this.match(truefalseParser.COLON);
				this.state = 711;
				this.url();
				this.state = 712;
				this.match(truefalseParser.CL);
				}
				break;
			case truefalseParser.AtWidth:
			case truefalseParser.AtHeight:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 714;
				_la = this._input.LA(1);
				if (!(_la === truefalseParser.AtWidth || _la === truefalseParser.AtHeight)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 715;
				this.match(truefalseParser.COLON);
				this.state = 716;
				this.match(truefalseParser.NUMERIC);
				this.state = 717;
				this.match(truefalseParser.CL);
				}
				break;
			case truefalseParser.OPATALT:
			case truefalseParser.OpAtCaption:
			case truefalseParser.OpAtLicense:
			case truefalseParser.OpAtCopyright:
			case truefalseParser.OpAtSearch:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 718;
				_la = this._input.LA(1);
				if (!(((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & ((1 << (truefalseParser.OPATALT - 69)) | (1 << (truefalseParser.OpAtCaption - 69)) | (1 << (truefalseParser.OpAtLicense - 69)) | (1 << (truefalseParser.OpAtCopyright - 69)) | (1 << (truefalseParser.OpAtSearch - 69)))) !== 0))) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 722;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 85, this._ctx);
				while (_alt !== 1 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1 + 1) {
						{
						{
						this.state = 719;
						this.matchWildcard();
						}
						}
					}
					this.state = 724;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 85, this._ctx);
				}
				this.state = 725;
				this.match(truefalseParser.CL);
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
		this.enterRule(_localctx, 100, truefalseParser.RULE_audiobit);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 728;
			this.audio_one();
			this.state = 732;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 87, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 729;
					this.resource_chained();
					}
					}
				}
				this.state = 734;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 87, this._ctx);
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
		this.enterRule(_localctx, 102, truefalseParser.RULE_audio_one);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 735;
			this.op_audio_format();
			this.state = 736;
			this.match(truefalseParser.COLON);
			this.state = 737;
			this.url();
			this.state = 738;
			this.match(truefalseParser.CL);
			this.state = 743;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 88, this._ctx) ) {
			case 1:
				{
				this.state = 739;
				this.match(truefalseParser.OPATALT);
				this.state = 740;
				this.words();
				this.state = 741;
				this.match(truefalseParser.CL);
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
		this.enterRule(_localctx, 104, truefalseParser.RULE_audio_format);
		let _la: number;
		try {
			this.state = 755;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case truefalseParser.AmpAudio:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 745;
				this.match(truefalseParser.AmpAudio);
				this.state = 748;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === truefalseParser.COLON) {
					{
					this.state = 746;
					this.match(truefalseParser.COLON);
					this.state = 747;
					this.match(truefalseParser.Audio_type);
					}
				}

				}
				break;
			case truefalseParser.AmpAudioLink:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 750;
				this.match(truefalseParser.AmpAudioLink);
				this.state = 753;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === truefalseParser.COLON) {
					{
					this.state = 751;
					this.match(truefalseParser.COLON);
					this.state = 752;
					this.match(truefalseParser.Audio_type);
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
		this.enterRule(_localctx, 106, truefalseParser.RULE_op_audio_format);
		try {
			this.state = 772;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case truefalseParser.OpAmpAudio:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 757;
				this.match(truefalseParser.OpAmpAudio);
				this.state = 760;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 92, this._ctx) ) {
				case 1:
					{
					this.state = 758;
					this.match(truefalseParser.COLON);
					this.state = 759;
					this.match(truefalseParser.Audio_type);
					}
					break;
				}
				}
				break;
			case truefalseParser.OpAmpAudioLink:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 762;
				this.match(truefalseParser.OpAmpAudioLink);
				this.state = 765;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 93, this._ctx) ) {
				case 1:
					{
					this.state = 763;
					this.match(truefalseParser.COLON);
					this.state = 764;
					this.match(truefalseParser.Audio_type);
					}
					break;
				}
				}
				break;
			case truefalseParser.OpAmpAudioEmbed:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 767;
				this.match(truefalseParser.OpAmpAudioEmbed);
				this.state = 770;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 94, this._ctx) ) {
				case 1:
					{
					this.state = 768;
					this.match(truefalseParser.COLON);
					this.state = 769;
					this.match(truefalseParser.Audio_type);
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
		this.enterRule(_localctx, 108, truefalseParser.RULE_resource_chained);
		let _la: number;
		try {
			let _alt: number;
			this.state = 805;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case truefalseParser.OPA:
			case truefalseParser.AtSrc:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 777;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case truefalseParser.OPA:
					{
					this.state = 774;
					this.match(truefalseParser.OPA);
					this.state = 775;
					this.s_and_w();
					}
					break;
				case truefalseParser.AtSrc:
					{
					this.state = 776;
					this.match(truefalseParser.AtSrc);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 779;
				this.match(truefalseParser.COLON);
				this.state = 783;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 97, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 780;
						this.match(truefalseParser.S);
						}
						}
					}
					this.state = 785;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 97, this._ctx);
				}
				this.state = 788;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					this.state = 788;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case truefalseParser.S:
					case truefalseParser.OPS:
					case truefalseParser.COLON:
					case truefalseParser.AMP:
					case truefalseParser.DBLCOLON:
					case truefalseParser.Greater:
					case truefalseParser.Less:
					case truefalseParser.DBLEQ:
					case truefalseParser.RightAngle:
					case truefalseParser.RightArrow:
					case truefalseParser.NUMERIC:
					case truefalseParser.STRING:
					case truefalseParser.NOTBITMARK:
					case truefalseParser.ELIPSIS:
					case truefalseParser.SENTENCE:
					case truefalseParser.BARSTRING:
					case truefalseParser.URL:
						{
						this.state = 786;
						this.s_and_w();
						}
						break;
					case truefalseParser.NL:
						{
						this.state = 787;
						this.match(truefalseParser.NL);
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					}
					this.state = 790;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << truefalseParser.S) | (1 << truefalseParser.OPS) | (1 << truefalseParser.COLON) | (1 << truefalseParser.AMP) | (1 << truefalseParser.DBLCOLON) | (1 << truefalseParser.Greater) | (1 << truefalseParser.Less) | (1 << truefalseParser.DBLEQ) | (1 << truefalseParser.RightAngle) | (1 << truefalseParser.RightArrow))) !== 0) || ((((_la - 43)) & ~0x1F) === 0 && ((1 << (_la - 43)) & ((1 << (truefalseParser.NUMERIC - 43)) | (1 << (truefalseParser.STRING - 43)) | (1 << (truefalseParser.NL - 43)) | (1 << (truefalseParser.NOTBITMARK - 43)) | (1 << (truefalseParser.ELIPSIS - 43)) | (1 << (truefalseParser.SENTENCE - 43)) | (1 << (truefalseParser.BARSTRING - 43)))) !== 0) || _la === truefalseParser.URL);
				this.state = 792;
				this.match(truefalseParser.CL);
				}
				break;
			case truefalseParser.AtWidth:
			case truefalseParser.AtHeight:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 793;
				_la = this._input.LA(1);
				if (!(_la === truefalseParser.AtWidth || _la === truefalseParser.AtHeight)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 794;
				this.match(truefalseParser.COLON);
				this.state = 795;
				this.match(truefalseParser.NUMERIC);
				this.state = 796;
				this.match(truefalseParser.CL);
				}
				break;
			case truefalseParser.OPATALT:
			case truefalseParser.OpAtCaption:
			case truefalseParser.OpAtLicense:
			case truefalseParser.OpAtCopyright:
			case truefalseParser.OpAtSearch:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 797;
				_la = this._input.LA(1);
				if (!(((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & ((1 << (truefalseParser.OPATALT - 69)) | (1 << (truefalseParser.OpAtCaption - 69)) | (1 << (truefalseParser.OpAtLicense - 69)) | (1 << (truefalseParser.OpAtCopyright - 69)) | (1 << (truefalseParser.OpAtSearch - 69)))) !== 0))) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 801;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 100, this._ctx);
				while (_alt !== 1 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1 + 1) {
						{
						{
						this.state = 798;
						this.matchWildcard();
						}
						}
					}
					this.state = 803;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 100, this._ctx);
				}
				this.state = 804;
				this.match(truefalseParser.CL);
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
		this.enterRule(_localctx, 110, truefalseParser.RULE_telephone);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 807;
			this.match(truefalseParser.TEL);
			this.state = 808;
			this.match(truefalseParser.PLUS);
			this.state = 809;
			this.match(truefalseParser.NUMERIC);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 112, truefalseParser.RULE_url);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 811;
			this.match(truefalseParser.URL);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 114, truefalseParser.RULE_item);
		let _la: number;
		try {
			this.state = 843;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 108, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 813;
				this.match(truefalseParser.OPC);
				this.state = 814;
				this.match(truefalseParser.CL);
				this.state = 822;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 103, this._ctx) ) {
				case 1:
					{
					this.state = 818;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === truefalseParser.S) {
						{
						{
						this.state = 815;
						this.match(truefalseParser.S);
						}
						}
						this.state = 820;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					this.state = 821;
					this.lead();
					}
					break;
				}
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 824;
				this.match(truefalseParser.OPC);
				this.state = 825;
				this.s_and_w();
				this.state = 830;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << truefalseParser.S) | (1 << truefalseParser.OPS) | (1 << truefalseParser.COLON) | (1 << truefalseParser.AMP) | (1 << truefalseParser.DBLCOLON) | (1 << truefalseParser.Greater) | (1 << truefalseParser.Less) | (1 << truefalseParser.DBLEQ) | (1 << truefalseParser.RightAngle) | (1 << truefalseParser.RightArrow))) !== 0) || ((((_la - 43)) & ~0x1F) === 0 && ((1 << (_la - 43)) & ((1 << (truefalseParser.NUMERIC - 43)) | (1 << (truefalseParser.STRING - 43)) | (1 << (truefalseParser.NOTBITMARK - 43)) | (1 << (truefalseParser.ELIPSIS - 43)) | (1 << (truefalseParser.SENTENCE - 43)) | (1 << (truefalseParser.BARSTRING - 43)))) !== 0) || _la === truefalseParser.URL) {
					{
					this.state = 828;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 104, this._ctx) ) {
					case 1:
						{
						this.state = 826;
						this.match(truefalseParser.COLON);
						}
						break;

					case 2:
						{
						this.state = 827;
						this.s_and_w();
						}
						break;
					}
					}
					this.state = 832;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 833;
				this.match(truefalseParser.CL);
				this.state = 841;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 107, this._ctx) ) {
				case 1:
					{
					this.state = 837;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === truefalseParser.S) {
						{
						{
						this.state = 834;
						this.match(truefalseParser.S);
						}
						}
						this.state = 839;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					this.state = 840;
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
		this.enterRule(_localctx, 116, truefalseParser.RULE_lead);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 845;
			this.match(truefalseParser.OPC);
			this.state = 846;
			this.s_and_w();
			this.state = 851;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << truefalseParser.S) | (1 << truefalseParser.OPS) | (1 << truefalseParser.COLON) | (1 << truefalseParser.AMP) | (1 << truefalseParser.DBLCOLON) | (1 << truefalseParser.Greater) | (1 << truefalseParser.Less) | (1 << truefalseParser.DBLEQ) | (1 << truefalseParser.RightAngle) | (1 << truefalseParser.RightArrow))) !== 0) || ((((_la - 43)) & ~0x1F) === 0 && ((1 << (_la - 43)) & ((1 << (truefalseParser.NUMERIC - 43)) | (1 << (truefalseParser.STRING - 43)) | (1 << (truefalseParser.NOTBITMARK - 43)) | (1 << (truefalseParser.ELIPSIS - 43)) | (1 << (truefalseParser.SENTENCE - 43)) | (1 << (truefalseParser.BARSTRING - 43)))) !== 0) || _la === truefalseParser.URL) {
				{
				this.state = 849;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 109, this._ctx) ) {
				case 1:
					{
					this.state = 847;
					this.match(truefalseParser.COLON);
					}
					break;

				case 2:
					{
					this.state = 848;
					this.s_and_w();
					}
					break;
				}
				}
				this.state = 853;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 854;
			this.match(truefalseParser.CL);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 118, truefalseParser.RULE_angleref);
		let _la: number;
		try {
			this.state = 866;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case truefalseParser.OPRANGLES:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 856;
				this.match(truefalseParser.OPRANGLES);
				this.state = 858;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << truefalseParser.S) | (1 << truefalseParser.OPS) | (1 << truefalseParser.COLON) | (1 << truefalseParser.AMP) | (1 << truefalseParser.DBLCOLON) | (1 << truefalseParser.Greater) | (1 << truefalseParser.Less) | (1 << truefalseParser.DBLEQ) | (1 << truefalseParser.RightAngle) | (1 << truefalseParser.RightArrow))) !== 0) || ((((_la - 43)) & ~0x1F) === 0 && ((1 << (_la - 43)) & ((1 << (truefalseParser.NUMERIC - 43)) | (1 << (truefalseParser.STRING - 43)) | (1 << (truefalseParser.NOTBITMARK - 43)) | (1 << (truefalseParser.ELIPSIS - 43)) | (1 << (truefalseParser.SENTENCE - 43)) | (1 << (truefalseParser.BARSTRING - 43)))) !== 0) || _la === truefalseParser.URL) {
					{
					this.state = 857;
					this.s_and_w();
					}
				}

				this.state = 860;
				this.match(truefalseParser.CL);
				}
				break;
			case truefalseParser.OPRANGLEL:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 861;
				this.match(truefalseParser.OPRANGLEL);
				this.state = 863;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << truefalseParser.S) | (1 << truefalseParser.OPS) | (1 << truefalseParser.COLON) | (1 << truefalseParser.AMP) | (1 << truefalseParser.DBLCOLON) | (1 << truefalseParser.Greater) | (1 << truefalseParser.Less) | (1 << truefalseParser.DBLEQ) | (1 << truefalseParser.RightAngle) | (1 << truefalseParser.RightArrow))) !== 0) || ((((_la - 43)) & ~0x1F) === 0 && ((1 << (_la - 43)) & ((1 << (truefalseParser.NUMERIC - 43)) | (1 << (truefalseParser.STRING - 43)) | (1 << (truefalseParser.NOTBITMARK - 43)) | (1 << (truefalseParser.ELIPSIS - 43)) | (1 << (truefalseParser.SENTENCE - 43)) | (1 << (truefalseParser.BARSTRING - 43)))) !== 0) || _la === truefalseParser.URL) {
					{
					this.state = 862;
					this.s_and_w();
					}
				}

				this.state = 865;
				this.match(truefalseParser.CL);
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
		this.enterRule(_localctx, 120, truefalseParser.RULE_example);
		let _la: number;
		try {
			this.state = 875;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case truefalseParser.AtExamplecl:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 868;
				this.match(truefalseParser.AtExamplecl);
				}
				break;
			case truefalseParser.AtExampleWithStr:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 869;
				this.match(truefalseParser.AtExampleWithStr);
				}
				break;
			case truefalseParser.AtExamplecol:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 870;
				this.match(truefalseParser.AtExamplecol);
				this.state = 872;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === truefalseParser.SENTENCE) {
					{
					this.state = 871;
					this.match(truefalseParser.SENTENCE);
					}
				}

				this.state = 874;
				this.match(truefalseParser.EOF);
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
		this.enterRule(_localctx, 122, truefalseParser.RULE_bracketed_text);
		let _la: number;
		try {
			let _alt: number;
			this.state = 916;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 123, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 877;
				this.match(truefalseParser.BracEnclose);
				this.state = 879;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 116, this._ctx) ) {
				case 1:
					{
					this.state = 878;
					this.s_and_w();
					}
					break;
				}
				this.state = 902;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << truefalseParser.S) | (1 << truefalseParser.OPS) | (1 << truefalseParser.COLON) | (1 << truefalseParser.AMP) | (1 << truefalseParser.DBLCOLON) | (1 << truefalseParser.Greater) | (1 << truefalseParser.Less) | (1 << truefalseParser.DBLEQ) | (1 << truefalseParser.RightAngle) | (1 << truefalseParser.RightArrow))) !== 0) || ((((_la - 43)) & ~0x1F) === 0 && ((1 << (_la - 43)) & ((1 << (truefalseParser.NUMERIC - 43)) | (1 << (truefalseParser.STRING - 43)) | (1 << (truefalseParser.NOTBITMARK - 43)) | (1 << (truefalseParser.ELIPSIS - 43)) | (1 << (truefalseParser.SENTENCE - 43)) | (1 << (truefalseParser.BARSTRING - 43)))) !== 0) || _la === truefalseParser.URL) {
					{
					{
					this.state = 881;
					this.s_and_w();
					this.state = 891;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 118, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 882;
							this.match(truefalseParser.NL);
							this.state = 886;
							this._errHandler.sync(this);
							_alt = this.interpreter.adaptivePredict(this._input, 117, this._ctx);
							while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
								if (_alt === 1) {
									{
									{
									this.state = 883;
									this.match(truefalseParser.S);
									}
									}
								}
								this.state = 888;
								this._errHandler.sync(this);
								_alt = this.interpreter.adaptivePredict(this._input, 117, this._ctx);
							}
							}
							}
						}
						this.state = 893;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 118, this._ctx);
					}
					this.state = 897;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === truefalseParser.NL) {
						{
						{
						this.state = 894;
						this.match(truefalseParser.NL);
						}
						}
						this.state = 899;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
					}
					this.state = 904;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 905;
				this.match(truefalseParser.CL);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 906;
				this.match(truefalseParser.BracEnclose);
				this.state = 912;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << truefalseParser.S) | (1 << truefalseParser.OPS) | (1 << truefalseParser.COLON) | (1 << truefalseParser.AMP) | (1 << truefalseParser.DBLCOLON) | (1 << truefalseParser.Greater) | (1 << truefalseParser.Less) | (1 << truefalseParser.DBLEQ) | (1 << truefalseParser.RightAngle) | (1 << truefalseParser.RightArrow))) !== 0) || ((((_la - 43)) & ~0x1F) === 0 && ((1 << (_la - 43)) & ((1 << (truefalseParser.NUMERIC - 43)) | (1 << (truefalseParser.STRING - 43)) | (1 << (truefalseParser.NL - 43)) | (1 << (truefalseParser.NOTBITMARK - 43)) | (1 << (truefalseParser.ELIPSIS - 43)) | (1 << (truefalseParser.SENTENCE - 43)) | (1 << (truefalseParser.BARSTRING - 43)))) !== 0) || _la === truefalseParser.URL) {
					{
					this.state = 910;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 121, this._ctx) ) {
					case 1:
						{
						this.state = 907;
						this.s_and_w();
						}
						break;

					case 2:
						{
						this.state = 908;
						this.match(truefalseParser.NL);
						}
						break;

					case 3:
						{
						this.state = 909;
						this.match(truefalseParser.S);
						}
						break;
					}
					}
					this.state = 914;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 915;
				this.match(truefalseParser.EOF);
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
		this.enterRule(_localctx, 124, truefalseParser.RULE_reference);
		let _la: number;
		try {
			this.state = 940;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 128, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 918;
				this.match(truefalseParser.AtReference);
				this.state = 923;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					this.state = 923;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 124, this._ctx) ) {
					case 1:
						{
						this.state = 919;
						this.s_and_w();
						}
						break;

					case 2:
						{
						this.state = 920;
						this.match(truefalseParser.COLON);
						}
						break;

					case 3:
						{
						this.state = 921;
						this.match(truefalseParser.URL);
						}
						break;

					case 4:
						{
						this.state = 922;
						this.match(truefalseParser.NL);
						}
						break;
					}
					}
					this.state = 925;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << truefalseParser.S) | (1 << truefalseParser.OPS) | (1 << truefalseParser.COLON) | (1 << truefalseParser.AMP) | (1 << truefalseParser.DBLCOLON) | (1 << truefalseParser.Greater) | (1 << truefalseParser.Less) | (1 << truefalseParser.DBLEQ) | (1 << truefalseParser.RightAngle) | (1 << truefalseParser.RightArrow))) !== 0) || ((((_la - 43)) & ~0x1F) === 0 && ((1 << (_la - 43)) & ((1 << (truefalseParser.NUMERIC - 43)) | (1 << (truefalseParser.STRING - 43)) | (1 << (truefalseParser.NL - 43)) | (1 << (truefalseParser.NOTBITMARK - 43)) | (1 << (truefalseParser.ELIPSIS - 43)) | (1 << (truefalseParser.SENTENCE - 43)) | (1 << (truefalseParser.BARSTRING - 43)))) !== 0) || _la === truefalseParser.URL);
				this.state = 927;
				this.match(truefalseParser.CL);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 928;
				this.match(truefalseParser.AtReference);
				this.state = 936;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << truefalseParser.S) | (1 << truefalseParser.OPS) | (1 << truefalseParser.COLON) | (1 << truefalseParser.AMP) | (1 << truefalseParser.DBLCOLON) | (1 << truefalseParser.Greater) | (1 << truefalseParser.Less) | (1 << truefalseParser.DBLEQ) | (1 << truefalseParser.RightAngle) | (1 << truefalseParser.RightArrow))) !== 0) || ((((_la - 43)) & ~0x1F) === 0 && ((1 << (_la - 43)) & ((1 << (truefalseParser.NUMERIC - 43)) | (1 << (truefalseParser.STRING - 43)) | (1 << (truefalseParser.NL - 43)) | (1 << (truefalseParser.NOTBITMARK - 43)) | (1 << (truefalseParser.ELIPSIS - 43)) | (1 << (truefalseParser.SENTENCE - 43)) | (1 << (truefalseParser.BARSTRING - 43)))) !== 0) || _la === truefalseParser.URL) {
					{
					this.state = 934;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 126, this._ctx) ) {
					case 1:
						{
						this.state = 929;
						this.s_and_w();
						}
						break;

					case 2:
						{
						this.state = 930;
						this.match(truefalseParser.COLON);
						}
						break;

					case 3:
						{
						this.state = 931;
						this.match(truefalseParser.URL);
						}
						break;

					case 4:
						{
						this.state = 932;
						this.match(truefalseParser.NL);
						}
						break;

					case 5:
						{
						this.state = 933;
						this.match(truefalseParser.S);
						}
						break;
					}
					}
					this.state = 938;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 939;
				this.match(truefalseParser.EOF);
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
		this.enterRule(_localctx, 126, truefalseParser.RULE_progress);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 942;
			this.match(truefalseParser.AtProgress);
			this.state = 943;
			this.s_and_w();
			this.state = 944;
			this.match(truefalseParser.CL);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 128, truefalseParser.RULE_dateprop);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 946;
			this.match(truefalseParser.AtDate);
			this.state = 950;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				this.state = 950;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 129, this._ctx) ) {
				case 1:
					{
					this.state = 947;
					this.s_and_w();
					}
					break;

				case 2:
					{
					this.state = 948;
					this.match(truefalseParser.COLON);
					}
					break;

				case 3:
					{
					this.state = 949;
					this.match(truefalseParser.NL);
					}
					break;
				}
				}
				this.state = 952;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << truefalseParser.S) | (1 << truefalseParser.OPS) | (1 << truefalseParser.COLON) | (1 << truefalseParser.AMP) | (1 << truefalseParser.DBLCOLON) | (1 << truefalseParser.Greater) | (1 << truefalseParser.Less) | (1 << truefalseParser.DBLEQ) | (1 << truefalseParser.RightAngle) | (1 << truefalseParser.RightArrow))) !== 0) || ((((_la - 43)) & ~0x1F) === 0 && ((1 << (_la - 43)) & ((1 << (truefalseParser.NUMERIC - 43)) | (1 << (truefalseParser.STRING - 43)) | (1 << (truefalseParser.NL - 43)) | (1 << (truefalseParser.NOTBITMARK - 43)) | (1 << (truefalseParser.ELIPSIS - 43)) | (1 << (truefalseParser.SENTENCE - 43)) | (1 << (truefalseParser.BARSTRING - 43)))) !== 0) || _la === truefalseParser.URL);
			this.state = 954;
			this.match(truefalseParser.CL);
			this.state = 956;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === truefalseParser.AtDate) {
				{
				this.state = 955;
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
		this.enterRule(_localctx, 130, truefalseParser.RULE_dateprop_chained);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 958;
			this.match(truefalseParser.AtDate);
			this.state = 962;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				this.state = 962;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 132, this._ctx) ) {
				case 1:
					{
					this.state = 959;
					this.s_and_w();
					}
					break;

				case 2:
					{
					this.state = 960;
					this.match(truefalseParser.COLON);
					}
					break;

				case 3:
					{
					this.state = 961;
					this.match(truefalseParser.NL);
					}
					break;
				}
				}
				this.state = 964;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << truefalseParser.S) | (1 << truefalseParser.OPS) | (1 << truefalseParser.COLON) | (1 << truefalseParser.AMP) | (1 << truefalseParser.DBLCOLON) | (1 << truefalseParser.Greater) | (1 << truefalseParser.Less) | (1 << truefalseParser.DBLEQ) | (1 << truefalseParser.RightAngle) | (1 << truefalseParser.RightArrow))) !== 0) || ((((_la - 43)) & ~0x1F) === 0 && ((1 << (_la - 43)) & ((1 << (truefalseParser.NUMERIC - 43)) | (1 << (truefalseParser.STRING - 43)) | (1 << (truefalseParser.NL - 43)) | (1 << (truefalseParser.NOTBITMARK - 43)) | (1 << (truefalseParser.ELIPSIS - 43)) | (1 << (truefalseParser.SENTENCE - 43)) | (1 << (truefalseParser.BARSTRING - 43)))) !== 0) || _la === truefalseParser.URL);
			this.state = 966;
			this.match(truefalseParser.CL);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 132, truefalseParser.RULE_instruction);
		let _la: number;
		try {
			let _alt: number;
			this.state = 1014;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 142, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 968;
				this.match(truefalseParser.OPB);
				this.state = 972;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 134, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 969;
						this.match(truefalseParser.NL);
						}
						}
					}
					this.state = 974;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 134, this._ctx);
				}
				this.state = 976;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 135, this._ctx) ) {
				case 1:
					{
					this.state = 975;
					this.s_and_w();
					}
					break;
				}
				this.state = 993;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 138, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 987;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						while (_la === truefalseParser.NL) {
							{
							{
							this.state = 978;
							this.match(truefalseParser.NL);
							this.state = 982;
							this._errHandler.sync(this);
							_alt = this.interpreter.adaptivePredict(this._input, 136, this._ctx);
							while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
								if (_alt === 1) {
									{
									{
									this.state = 979;
									this.match(truefalseParser.S);
									}
									}
								}
								this.state = 984;
								this._errHandler.sync(this);
								_alt = this.interpreter.adaptivePredict(this._input, 136, this._ctx);
							}
							}
							}
							this.state = 989;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
						}
						this.state = 990;
						this.s_and_w();
						}
						}
					}
					this.state = 995;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 138, this._ctx);
				}
				this.state = 999;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === truefalseParser.NL) {
					{
					{
					this.state = 996;
					this.match(truefalseParser.NL);
					}
					}
					this.state = 1001;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1002;
				this.match(truefalseParser.CL);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1003;
				this.match(truefalseParser.OPB);
				this.state = 1007;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === truefalseParser.NL) {
					{
					{
					this.state = 1004;
					this.match(truefalseParser.NL);
					}
					}
					this.state = 1009;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1011;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << truefalseParser.S) | (1 << truefalseParser.OPS) | (1 << truefalseParser.COLON) | (1 << truefalseParser.AMP) | (1 << truefalseParser.DBLCOLON) | (1 << truefalseParser.Greater) | (1 << truefalseParser.Less) | (1 << truefalseParser.DBLEQ) | (1 << truefalseParser.RightAngle) | (1 << truefalseParser.RightArrow))) !== 0) || ((((_la - 43)) & ~0x1F) === 0 && ((1 << (_la - 43)) & ((1 << (truefalseParser.NUMERIC - 43)) | (1 << (truefalseParser.STRING - 43)) | (1 << (truefalseParser.NOTBITMARK - 43)) | (1 << (truefalseParser.ELIPSIS - 43)) | (1 << (truefalseParser.SENTENCE - 43)) | (1 << (truefalseParser.BARSTRING - 43)))) !== 0) || _la === truefalseParser.URL) {
					{
					this.state = 1010;
					this.s_and_w();
					}
				}

				this.state = 1013;
				this.match(truefalseParser.EOF);
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
		this.enterRule(_localctx, 134, truefalseParser.RULE_hint);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1016;
			this.match(truefalseParser.OPQ);
			this.state = 1018;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 1017;
				_la = this._input.LA(1);
				if (_la <= 0 || (_la === truefalseParser.CL)) {
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
				this.state = 1020;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << truefalseParser.OPDOT) | (1 << truefalseParser.S) | (1 << truefalseParser.BitTruefalse1) | (1 << truefalseParser.BitTruefalse) | (1 << truefalseParser.OPDOLL) | (1 << truefalseParser.OPBUL) | (1 << truefalseParser.OPESC) | (1 << truefalseParser.OPRANGLES) | (1 << truefalseParser.OPRANGLEL) | (1 << truefalseParser.OPDANGLE) | (1 << truefalseParser.OPU) | (1 << truefalseParser.OPB) | (1 << truefalseParser.OPQ) | (1 << truefalseParser.OPA) | (1 << truefalseParser.OPP) | (1 << truefalseParser.OPM) | (1 << truefalseParser.OPS) | (1 << truefalseParser.OPR) | (1 << truefalseParser.OPC) | (1 << truefalseParser.OPHASH) | (1 << truefalseParser.COLON) | (1 << truefalseParser.AMP) | (1 << truefalseParser.DBLCOLON) | (1 << truefalseParser.PLUS) | (1 << truefalseParser.DotAt) | (1 << truefalseParser.Greater) | (1 << truefalseParser.Less) | (1 << truefalseParser.DBLEQ) | (1 << truefalseParser.RightAngle) | (1 << truefalseParser.RightArrow))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (truefalseParser.HSPL - 32)) | (1 << (truefalseParser.HSPL2 - 32)) | (1 << (truefalseParser.SSPL - 32)) | (1 << (truefalseParser.SSPL2 - 32)) | (1 << (truefalseParser.COMMENT - 32)) | (1 << (truefalseParser.DCANY - 32)) | (1 << (truefalseParser.Image_type - 32)) | (1 << (truefalseParser.Audio_type - 32)) | (1 << (truefalseParser.Video_type - 32)) | (1 << (truefalseParser.ArticleText - 32)) | (1 << (truefalseParser.NOTCL - 32)) | (1 << (truefalseParser.NUMERIC - 32)) | (1 << (truefalseParser.STRING - 32)) | (1 << (truefalseParser.NL - 32)) | (1 << (truefalseParser.NOTBITMARK - 32)) | (1 << (truefalseParser.ELIPSIS - 32)) | (1 << (truefalseParser.SENTENCE - 32)) | (1 << (truefalseParser.BARSTRING - 32)) | (1 << (truefalseParser.OPAT - 32)) | (1 << (truefalseParser.AtProgress - 32)) | (1 << (truefalseParser.AtReference - 32)) | (1 << (truefalseParser.AtWidth - 32)) | (1 << (truefalseParser.AtHeight - 32)) | (1 << (truefalseParser.AtProgressPoints - 32)) | (1 << (truefalseParser.AtShortanswer - 32)) | (1 << (truefalseParser.AtLonganswer - 32)) | (1 << (truefalseParser.AtExampleWithStr - 32)) | (1 << (truefalseParser.AtExamplecol - 32)) | (1 << (truefalseParser.AtExamplecl - 32)) | (1 << (truefalseParser.AtSampleSolution - 32)) | (1 << (truefalseParser.AtPartialAnswerS - 32)) | (1 << (truefalseParser.AtPartialAnswer - 32)))) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (truefalseParser.AtLabeltrue - 64)) | (1 << (truefalseParser.AtLabelfalse - 64)) | (1 << (truefalseParser.AtPoints - 64)) | (1 << (truefalseParser.AtSrc - 64)) | (1 << (truefalseParser.AtPartner - 64)) | (1 << (truefalseParser.OPATALT - 64)) | (1 << (truefalseParser.OPAMARK - 64)) | (1 << (truefalseParser.ShowInIndex - 64)) | (1 << (truefalseParser.OpAtCaption - 64)) | (1 << (truefalseParser.OpAtLicense - 64)) | (1 << (truefalseParser.OpAtCopyright - 64)) | (1 << (truefalseParser.OpAtSearch - 64)) | (1 << (truefalseParser.OpAtIsTracked - 64)) | (1 << (truefalseParser.OpAtIsInfoOnly - 64)) | (1 << (truefalseParser.AtDate - 64)) | (1 << (truefalseParser.Http - 64)) | (1 << (truefalseParser.Https - 64)) | (1 << (truefalseParser.AmpAudio - 64)) | (1 << (truefalseParser.AmpImage - 64)) | (1 << (truefalseParser.AmpImageZoom - 64)) | (1 << (truefalseParser.AmpVideo - 64)) | (1 << (truefalseParser.AmpArticle - 64)) | (1 << (truefalseParser.AmpDocument - 64)) | (1 << (truefalseParser.AmpApp - 64)) | (1 << (truefalseParser.AmpWebsite - 64)) | (1 << (truefalseParser.AmpStillImageFilm - 64)) | (1 << (truefalseParser.AmpPdf - 64)) | (1 << (truefalseParser.OpAmpAudio - 64)) | (1 << (truefalseParser.OpAmpImage - 64)) | (1 << (truefalseParser.OpAmpImageZoom - 64)) | (1 << (truefalseParser.OpAmpVideo - 64)) | (1 << (truefalseParser.OpAmpArticle - 64)))) !== 0) || ((((_la - 96)) & ~0x1F) === 0 && ((1 << (_la - 96)) & ((1 << (truefalseParser.OpAmpArticleAtt - 96)) | (1 << (truefalseParser.OpAmpDocument - 96)) | (1 << (truefalseParser.OpAmpApp - 96)) | (1 << (truefalseParser.OpAmpWebsite - 96)) | (1 << (truefalseParser.OpAmpStillImageFilm - 96)) | (1 << (truefalseParser.BracEnclose - 96)) | (1 << (truefalseParser.AmpAudioLink - 96)) | (1 << (truefalseParser.AmpImageLink - 96)) | (1 << (truefalseParser.AmpVideoLink - 96)) | (1 << (truefalseParser.AmpArticleLink - 96)) | (1 << (truefalseParser.AmpDocumentLink - 96)) | (1 << (truefalseParser.AmpDocumentDownload - 96)) | (1 << (truefalseParser.AmpAppLink - 96)) | (1 << (truefalseParser.AmpWebsiteLink - 96)) | (1 << (truefalseParser.AmpStillImageFilmLink - 96)) | (1 << (truefalseParser.OpAmpAudioLink - 96)) | (1 << (truefalseParser.OpAmpImageLink - 96)) | (1 << (truefalseParser.OpAmpVideoLink - 96)) | (1 << (truefalseParser.OpAmpArticleLink - 96)) | (1 << (truefalseParser.OpAmpDocumentLink - 96)) | (1 << (truefalseParser.OpAmpDocumentDownload - 96)) | (1 << (truefalseParser.OpAmpAppLink - 96)) | (1 << (truefalseParser.OpAmpWebsiteLink - 96)) | (1 << (truefalseParser.OpAmpStillImageFilmLink - 96)) | (1 << (truefalseParser.AmpImageEmbed - 96)) | (1 << (truefalseParser.AmpVideoEmbed - 96)) | (1 << (truefalseParser.AmpAudioEmbed - 96)) | (1 << (truefalseParser.AmpDocumentEmbed - 96)) | (1 << (truefalseParser.AmpStillImageFilmEmbed - 96)) | (1 << (truefalseParser.OpAmpImageEmbed - 96)) | (1 << (truefalseParser.OpAmpVideoEmbed - 96)) | (1 << (truefalseParser.OpAmpAudioEmbed - 96)))) !== 0) || ((((_la - 128)) & ~0x1F) === 0 && ((1 << (_la - 128)) & ((1 << (truefalseParser.OpAmpDocumentEmbed - 128)) | (1 << (truefalseParser.OpAmpStillImageFilmEmbed - 128)) | (1 << (truefalseParser.BitmarkMinus - 128)) | (1 << (truefalseParser.BitmarkPlus - 128)) | (1 << (truefalseParser.ColonText - 128)) | (1 << (truefalseParser.ColonJson - 128)) | (1 << (truefalseParser.Prosemirror - 128)) | (1 << (truefalseParser.Placeholder - 128)) | (1 << (truefalseParser.BASIC - 128)) | (1 << (truefalseParser.JPG - 128)) | (1 << (truefalseParser.PNG - 128)) | (1 << (truefalseParser.GIF - 128)) | (1 << (truefalseParser.SVG - 128)) | (1 << (truefalseParser.MP2 - 128)) | (1 << (truefalseParser.MP3 - 128)) | (1 << (truefalseParser.MP4 - 128)) | (1 << (truefalseParser.FLV - 128)) | (1 << (truefalseParser.WMV - 128)) | (1 << (truefalseParser.MPEG - 128)) | (1 << (truefalseParser.MPG - 128)) | (1 << (truefalseParser.TEL - 128)) | (1 << (truefalseParser.DotArticleAtt - 128)) | (1 << (truefalseParser.STAR - 128)) | (1 << (truefalseParser.URL - 128)) | (1 << (truefalseParser.LIST_LINE - 128)) | (1 << (truefalseParser.ENCLBARS - 128)) | (1 << (truefalseParser.OpAmpImageWAudio - 128)))) !== 0));
			this.state = 1022;
			this.match(truefalseParser.CL);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 136, truefalseParser.RULE_title);
		let _la: number;
		try {
			this.state = 1036;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 146, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1024;
				this.match(truefalseParser.OPHASH);
				this.state = 1027;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					this.state = 1027;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case truefalseParser.S:
					case truefalseParser.OPS:
					case truefalseParser.COLON:
					case truefalseParser.AMP:
					case truefalseParser.DBLCOLON:
					case truefalseParser.Greater:
					case truefalseParser.Less:
					case truefalseParser.DBLEQ:
					case truefalseParser.RightAngle:
					case truefalseParser.RightArrow:
					case truefalseParser.NUMERIC:
					case truefalseParser.STRING:
					case truefalseParser.NOTBITMARK:
					case truefalseParser.ELIPSIS:
					case truefalseParser.SENTENCE:
					case truefalseParser.BARSTRING:
					case truefalseParser.URL:
						{
						this.state = 1025;
						this.s_and_w();
						}
						break;
					case truefalseParser.NL:
						{
						this.state = 1026;
						this.match(truefalseParser.NL);
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					}
					this.state = 1029;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << truefalseParser.S) | (1 << truefalseParser.OPS) | (1 << truefalseParser.COLON) | (1 << truefalseParser.AMP) | (1 << truefalseParser.DBLCOLON) | (1 << truefalseParser.Greater) | (1 << truefalseParser.Less) | (1 << truefalseParser.DBLEQ) | (1 << truefalseParser.RightAngle) | (1 << truefalseParser.RightArrow))) !== 0) || ((((_la - 43)) & ~0x1F) === 0 && ((1 << (_la - 43)) & ((1 << (truefalseParser.NUMERIC - 43)) | (1 << (truefalseParser.STRING - 43)) | (1 << (truefalseParser.NL - 43)) | (1 << (truefalseParser.NOTBITMARK - 43)) | (1 << (truefalseParser.ELIPSIS - 43)) | (1 << (truefalseParser.SENTENCE - 43)) | (1 << (truefalseParser.BARSTRING - 43)))) !== 0) || _la === truefalseParser.URL);
				this.state = 1031;
				this.match(truefalseParser.CL);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1032;
				this.match(truefalseParser.OPHASH);
				this.state = 1033;
				this.s_and_w();
				this.state = 1034;
				this.match(truefalseParser.EOF);
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
		this.enterRule(_localctx, 138, truefalseParser.RULE_bool_label);
		try {
			this.state = 1046;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case truefalseParser.AtLabeltrue:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1038;
				this.match(truefalseParser.AtLabeltrue);
				this.state = 1039;
				this.s_and_w();
				this.state = 1040;
				this.match(truefalseParser.CL);
				}
				break;
			case truefalseParser.AtLabelfalse:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1042;
				this.match(truefalseParser.AtLabelfalse);
				this.state = 1043;
				this.s_and_w();
				this.state = 1044;
				this.match(truefalseParser.CL);
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
		this.enterRule(_localctx, 140, truefalseParser.RULE_progress_points);
		try {
			this.state = 1057;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 148, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1048;
				this.match(truefalseParser.AtProgressPoints);
				this.state = 1049;
				this.match(truefalseParser.COLON);
				this.state = 1050;
				this.match(truefalseParser.NUMERIC);
				this.state = 1051;
				this.match(truefalseParser.CL);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1052;
				this.match(truefalseParser.AtProgressPoints);
				this.state = 1053;
				this.match(truefalseParser.COLON);
				this.state = 1054;
				this.s_and_w();
				this.state = 1055;
				this.match(truefalseParser.CL);
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
		this.enterRule(_localctx, 142, truefalseParser.RULE_istracked);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1059;
			this.match(truefalseParser.OpAtIsTracked);
			this.state = 1060;
			this.s_and_w();
			this.state = 1061;
			this.match(truefalseParser.CL);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 144, truefalseParser.RULE_isinfoonly);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1063;
			this.match(truefalseParser.OpAtIsInfoOnly);
			this.state = 1064;
			this.s_and_w();
			this.state = 1065;
			this.match(truefalseParser.CL);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 146, truefalseParser.RULE_atdef);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1067;
			this.atdef_();
			this.state = 1077;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 150, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1071;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === truefalseParser.NL) {
						{
						{
						this.state = 1068;
						this.match(truefalseParser.NL);
						}
						}
						this.state = 1073;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					this.state = 1074;
					this.atdef_();
					}
					}
				}
				this.state = 1079;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 150, this._ctx);
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
		this.enterRule(_localctx, 148, truefalseParser.RULE_atdef_);
		let _la: number;
		try {
			let _alt: number;
			this.state = 1103;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case truefalseParser.OPA:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1080;
				this.match(truefalseParser.OPA);
				this.state = 1081;
				this.s_and_w();
				this.state = 1082;
				_la = this._input.LA(1);
				if (!(_la === truefalseParser.COLON || _la === truefalseParser.DBLCOLON)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 1083;
				this.s_and_w();
				this.state = 1089;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << truefalseParser.S) | (1 << truefalseParser.OPS) | (1 << truefalseParser.COLON) | (1 << truefalseParser.AMP) | (1 << truefalseParser.DBLCOLON) | (1 << truefalseParser.Greater) | (1 << truefalseParser.Less) | (1 << truefalseParser.DBLEQ) | (1 << truefalseParser.RightAngle) | (1 << truefalseParser.RightArrow))) !== 0) || ((((_la - 43)) & ~0x1F) === 0 && ((1 << (_la - 43)) & ((1 << (truefalseParser.NUMERIC - 43)) | (1 << (truefalseParser.STRING - 43)) | (1 << (truefalseParser.NL - 43)) | (1 << (truefalseParser.NOTBITMARK - 43)) | (1 << (truefalseParser.ELIPSIS - 43)) | (1 << (truefalseParser.SENTENCE - 43)) | (1 << (truefalseParser.BARSTRING - 43)))) !== 0) || _la === truefalseParser.URL) {
					{
					this.state = 1087;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 151, this._ctx) ) {
					case 1:
						{
						this.state = 1084;
						this.match(truefalseParser.NL);
						}
						break;

					case 2:
						{
						this.state = 1085;
						this.match(truefalseParser.COLON);
						}
						break;

					case 3:
						{
						this.state = 1086;
						this.s_and_w();
						}
						break;
					}
					}
					this.state = 1091;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1092;
				this.match(truefalseParser.CL);
				}
				break;
			case truefalseParser.OpAtCopyright:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1094;
				this.match(truefalseParser.OpAtCopyright);
				this.state = 1098;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 153, this._ctx);
				while (_alt !== 1 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1 + 1) {
						{
						{
						this.state = 1095;
						this.matchWildcard();
						}
						}
					}
					this.state = 1100;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 153, this._ctx);
				}
				this.state = 1101;
				this.match(truefalseParser.CL);
				}
				break;
			case truefalseParser.AtSampleSolution:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1102;
				this.match(truefalseParser.AtSampleSolution);
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
		this.enterRule(_localctx, 150, truefalseParser.RULE_dollarans);
		let _la: number;
		try {
			this.state = 1124;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 159, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1105;
				this.match(truefalseParser.OPDOLL);
				this.state = 1109;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					this.state = 1109;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 155, this._ctx) ) {
					case 1:
						{
						this.state = 1106;
						this.s_and_w();
						}
						break;

					case 2:
						{
						this.state = 1107;
						this.match(truefalseParser.COLON);
						}
						break;

					case 3:
						{
						this.state = 1108;
						this.match(truefalseParser.NL);
						}
						break;
					}
					}
					this.state = 1111;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << truefalseParser.S) | (1 << truefalseParser.OPS) | (1 << truefalseParser.COLON) | (1 << truefalseParser.AMP) | (1 << truefalseParser.DBLCOLON) | (1 << truefalseParser.Greater) | (1 << truefalseParser.Less) | (1 << truefalseParser.DBLEQ) | (1 << truefalseParser.RightAngle) | (1 << truefalseParser.RightArrow))) !== 0) || ((((_la - 43)) & ~0x1F) === 0 && ((1 << (_la - 43)) & ((1 << (truefalseParser.NUMERIC - 43)) | (1 << (truefalseParser.STRING - 43)) | (1 << (truefalseParser.NL - 43)) | (1 << (truefalseParser.NOTBITMARK - 43)) | (1 << (truefalseParser.ELIPSIS - 43)) | (1 << (truefalseParser.SENTENCE - 43)) | (1 << (truefalseParser.BARSTRING - 43)))) !== 0) || _la === truefalseParser.URL);
				this.state = 1113;
				this.match(truefalseParser.CL);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1114;
				this.match(truefalseParser.OPDOLL);
				this.state = 1120;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << truefalseParser.S) | (1 << truefalseParser.OPS) | (1 << truefalseParser.COLON) | (1 << truefalseParser.AMP) | (1 << truefalseParser.DBLCOLON) | (1 << truefalseParser.Greater) | (1 << truefalseParser.Less) | (1 << truefalseParser.DBLEQ) | (1 << truefalseParser.RightAngle) | (1 << truefalseParser.RightArrow))) !== 0) || ((((_la - 43)) & ~0x1F) === 0 && ((1 << (_la - 43)) & ((1 << (truefalseParser.NUMERIC - 43)) | (1 << (truefalseParser.STRING - 43)) | (1 << (truefalseParser.NL - 43)) | (1 << (truefalseParser.NOTBITMARK - 43)) | (1 << (truefalseParser.ELIPSIS - 43)) | (1 << (truefalseParser.SENTENCE - 43)) | (1 << (truefalseParser.BARSTRING - 43)))) !== 0) || _la === truefalseParser.URL) {
					{
					this.state = 1118;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 157, this._ctx) ) {
					case 1:
						{
						this.state = 1115;
						this.s_and_w();
						}
						break;

					case 2:
						{
						this.state = 1116;
						this.match(truefalseParser.COLON);
						}
						break;

					case 3:
						{
						this.state = 1117;
						this.match(truefalseParser.NL);
						}
						break;
					}
					}
					this.state = 1122;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1123;
				this.match(truefalseParser.EOF);
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
		this.enterRule(_localctx, 152, truefalseParser.RULE_anchor);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1126;
			this.match(truefalseParser.OPDANGLE);
			this.state = 1128;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << truefalseParser.S) | (1 << truefalseParser.OPS) | (1 << truefalseParser.COLON) | (1 << truefalseParser.AMP) | (1 << truefalseParser.DBLCOLON) | (1 << truefalseParser.Greater) | (1 << truefalseParser.Less) | (1 << truefalseParser.DBLEQ) | (1 << truefalseParser.RightAngle) | (1 << truefalseParser.RightArrow))) !== 0) || ((((_la - 43)) & ~0x1F) === 0 && ((1 << (_la - 43)) & ((1 << (truefalseParser.NUMERIC - 43)) | (1 << (truefalseParser.STRING - 43)) | (1 << (truefalseParser.NOTBITMARK - 43)) | (1 << (truefalseParser.ELIPSIS - 43)) | (1 << (truefalseParser.SENTENCE - 43)) | (1 << (truefalseParser.BARSTRING - 43)))) !== 0) || _la === truefalseParser.URL) {
				{
				this.state = 1127;
				this.s_and_w();
				}
			}

			this.state = 1130;
			this.match(truefalseParser.CL);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 154, truefalseParser.RULE_lines);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1136;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 1132;
				this.s_and_w();
				this.state = 1134;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === truefalseParser.NL) {
					{
					this.state = 1133;
					this.match(truefalseParser.NL);
					}
				}

				}
				}
				this.state = 1138;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << truefalseParser.S) | (1 << truefalseParser.OPS) | (1 << truefalseParser.COLON) | (1 << truefalseParser.AMP) | (1 << truefalseParser.DBLCOLON) | (1 << truefalseParser.Greater) | (1 << truefalseParser.Less) | (1 << truefalseParser.DBLEQ) | (1 << truefalseParser.RightAngle) | (1 << truefalseParser.RightArrow))) !== 0) || ((((_la - 43)) & ~0x1F) === 0 && ((1 << (_la - 43)) & ((1 << (truefalseParser.NUMERIC - 43)) | (1 << (truefalseParser.STRING - 43)) | (1 << (truefalseParser.NOTBITMARK - 43)) | (1 << (truefalseParser.ELIPSIS - 43)) | (1 << (truefalseParser.SENTENCE - 43)) | (1 << (truefalseParser.BARSTRING - 43)))) !== 0) || _la === truefalseParser.URL);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 156, truefalseParser.RULE_s_and_w);
		let _la: number;
		try {
			let _alt: number;
			this.state = 1186;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 170, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1140;
				this.match(truefalseParser.STRING);
				this.state = 1147;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 164, this._ctx) ) {
				case 1:
					{
					this.state = 1142;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					do {
						{
						{
						this.state = 1141;
						this.match(truefalseParser.S);
						}
						}
						this.state = 1144;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					} while (_la === truefalseParser.S);
					this.state = 1146;
					this.match(truefalseParser.NUMERIC);
					}
					break;
				}
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1149;
				this.words();
				this.state = 1156;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 166, this._ctx) ) {
				case 1:
					{
					this.state = 1151;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					do {
						{
						{
						this.state = 1150;
						this.match(truefalseParser.S);
						}
						}
						this.state = 1153;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					} while (_la === truefalseParser.S);
					this.state = 1155;
					this.match(truefalseParser.NUMERIC);
					}
					break;
				}
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1158;
				this.match(truefalseParser.OPS);
				this.state = 1159;
				this.s_and_w();
				this.state = 1160;
				this.match(truefalseParser.CL);
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1162;
				this.match(truefalseParser.NUMERIC);
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 1166;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === truefalseParser.S) {
					{
					{
					this.state = 1163;
					this.match(truefalseParser.S);
					}
					}
					this.state = 1168;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1169;
				this.match(truefalseParser.COLON);
				this.state = 1173;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 168, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 1170;
						this.match(truefalseParser.S);
						}
						}
					}
					this.state = 1175;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 168, this._ctx);
				}
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 1176;
				this.match(truefalseParser.AMP);
				this.state = 1180;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 169, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 1177;
						this.match(truefalseParser.S);
						}
						}
					}
					this.state = 1182;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 169, this._ctx);
				}
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 1183;
				this.match(truefalseParser.DBLCOLON);
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 1184;
				this.match(truefalseParser.DBLEQ);
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 1185;
				this.match(truefalseParser.URL);
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
		this.enterRule(_localctx, 158, truefalseParser.RULE_dclines);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1188;
			this.match(truefalseParser.DCANY);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 160, truefalseParser.RULE_clnsp);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1190;
			this.match(truefalseParser.CL);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 162, truefalseParser.RULE_sspl);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1192;
			_la = this._input.LA(1);
			if (!(_la === truefalseParser.SSPL || _la === truefalseParser.SSPL2)) {
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
		this.enterRule(_localctx, 164, truefalseParser.RULE_words);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1205;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					this.state = 1205;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case truefalseParser.SENTENCE:
						{
						this.state = 1194;
						this.match(truefalseParser.SENTENCE);
						}
						break;
					case truefalseParser.NOTBITMARK:
						{
						this.state = 1195;
						this.match(truefalseParser.NOTBITMARK);
						}
						break;
					case truefalseParser.BARSTRING:
						{
						this.state = 1196;
						this.match(truefalseParser.BARSTRING);
						}
						break;
					case truefalseParser.ELIPSIS:
						{
						this.state = 1197;
						this.match(truefalseParser.ELIPSIS);
						}
						break;
					case truefalseParser.AMP:
						{
						this.state = 1198;
						this.match(truefalseParser.AMP);
						}
						break;
					case truefalseParser.Greater:
						{
						this.state = 1199;
						this.match(truefalseParser.Greater);
						this.state = 1200;
						_la = this._input.LA(1);
						if (_la <= 0 || (_la === truefalseParser.Greater)) {
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
					case truefalseParser.Less:
						{
						this.state = 1201;
						this.match(truefalseParser.Less);
						this.state = 1202;
						_la = this._input.LA(1);
						if (_la <= 0 || (_la === truefalseParser.Less)) {
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
					case truefalseParser.RightArrow:
						{
						this.state = 1203;
						this.match(truefalseParser.RightArrow);
						}
						break;
					case truefalseParser.RightAngle:
						{
						this.state = 1204;
						this.match(truefalseParser.RightAngle);
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
				this.state = 1207;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 172, this._ctx);
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
		this.enterRule(_localctx, 166, truefalseParser.RULE_sp);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1209;
			this.match(truefalseParser.S);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
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
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\x9C\u04BE\x04" +
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
		"\x04\x03\x04\x05\x04\xC8\n\x04\x03\x05\x03\x05\x03\x05\x03\x05\x07\x05" +
		"\xCE\n\x05\f\x05\x0E\x05\xD1\v\x05\x03\x05\x03\x05\x07\x05\xD5\n\x05\f" +
		"\x05\x0E\x05\xD8\v\x05\x07\x05\xDA\n\x05\f\x05\x0E\x05\xDD\v\x05\x03\x05" +
		"\x03\x05\x03\x05\x03\x05\x06\x05\xE3\n\x05\r\x05\x0E\x05\xE4\x03\x05\x03" +
		"\x05\x07\x05\xE9\n\x05\f\x05\x0E\x05\xEC\v\x05\x07\x05\xEE\n\x05\f\x05" +
		"\x0E\x05\xF1\v\x05\x03\x05\x03\x05\x07\x05\xF5\n\x05\f\x05\x0E\x05\xF8" +
		"\v\x05\x03\x05\x03\x05\x07\x05\xFC\n\x05\f\x05\x0E\x05\xFF\v\x05\x03\x05" +
		"\x07\x05\u0102\n\x05\f\x05\x0E\x05\u0105\v\x05\x05\x05\u0107\n\x05\x05" +
		"\x05\u0109\n\x05\x03\x06\x03\x06\x03\x06\x03\x06\x07\x06\u010F\n\x06\f" +
		"\x06\x0E\x06\u0112\v\x06\x03\x06\x03\x06\x07\x06\u0116\n\x06\f\x06\x0E" +
		"\x06\u0119\v\x06\x07\x06\u011B\n\x06\f\x06\x0E\x06\u011E\v\x06\x03\x06" +
		"\x03\x06\x03\x06\x03\x06\x07\x06\u0124\n\x06\f\x06\x0E\x06\u0127\v\x06" +
		"\x03\x06\x03\x06\x07\x06\u012B\n\x06\f\x06\x0E\x06\u012E\v\x06\x07\x06" +
		"\u0130\n\x06\f\x06\x0E\x06\u0133\v\x06\x03\x06\x05\x06\u0136\n\x06\x03" +
		"\x06\x07\x06\u0139\n\x06\f\x06\x0E\x06\u013C\v\x06\x03\x06\x06\x06\u013F" +
		"\n\x06\r\x06\x0E\x06\u0140\x03\x06\x03\x06\x07\x06\u0145\n\x06\f\x06\x0E" +
		"\x06\u0148\v\x06\x03\x06\x03\x06\x07\x06\u014C\n\x06\f\x06\x0E\x06\u014F" +
		"\v\x06\x03\x06\x07\x06\u0152\n\x06\f\x06\x0E\x06\u0155\v\x06\x05\x06\u0157" +
		"\n\x06\x05\x06\u0159\n\x06\x03\x07\x03\x07\x03\b\x03\b\x03\t\x03\t\x07" +
		"\t\u0161\n\t\f\t\x0E\t\u0164\v\t\x03\n\x03\n\x05\n\u0168\n\n\x03\n\x05" +
		"\n\u016B\n\n\x03\n\x07\n\u016E\n\n\f\n\x0E\n\u0171\v\n\x03\n\x03\n\x05" +
		"\n\u0175\n\n\x07\n\u0177\n\n\f\n\x0E\n\u017A\v\n\x03\v\x03\v\x05\v\u017E" +
		"\n\v\x03\f\x03\f\x05\f\u0182\n\f\x03\r\x05\r\u0185\n\r\x03\r\x03\r\x03" +
		"\r\x06\r\u018A\n\r\r\r\x0E\r\u018B\x03\r\x03\r\x03\x0E\x05\x0E\u0191\n" +
		"\x0E\x03\x0E\x03\x0E\x03\x0E\x06\x0E\u0196\n\x0E\r\x0E\x0E\x0E\u0197\x03" +
		"\x0E\x03\x0E\x03\x0F\x05\x0F\u019D\n\x0F\x03\x0F\x03\x0F\x03\x0F\x06\x0F" +
		"\u01A2\n\x0F\r\x0F\x0E\x0F\u01A3\x03\x0F\x03\x0F\x03\x10\x03\x10\x03\x10" +
		"\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10" +
		"\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10" +
		"\x03\x10\x03\x10\x03\x10\x05\x10\u01C0\n\x10\x03\x11\x03\x11\x03\x12\x03" +
		"\x12\x03\x12\x03\x12\x03\x12\x03\x12\x07\x12\u01CA\n\x12\f\x12\x0E\x12" +
		"\u01CD\v\x12\x03\x13\x03\x13\x03\x13\x03\x13\x05\x13\u01D3\n\x13\x03\x13" +
		"\x07\x13\u01D6\n\x13\f\x13\x0E\x13\u01D9\v\x13\x03\x13\x03\x13\x03\x14" +
		"\x03\x14\x03\x14\x03\x14\x05\x14\u01E1\n\x14\x03\x15\x03\x15\x03\x15\x03" +
		"\x15\x03\x16\x07\x16\u01E8\n\x16\f\x16\x0E\x16\u01EB\v\x16\x03\x16\x03" +
		"\x16\x03\x16\x07\x16\u01F0\n\x16\f\x16\x0E\x16\u01F3\v\x16\x03\x17\x03" +
		"\x17\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03" +
		"\x18\x05\x18\u0200\n\x18\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19" +
		"\x05\x19\u0208\n\x19\x03\x1A\x03\x1A\x03\x1A\x05\x1A\u020D\n\x1A\x03\x1A" +
		"\x03\x1A\x05\x1A\u0211\n\x1A\x03\x1A\x03\x1A\x05\x1A\u0215\n\x1A\x05\x1A" +
		"\u0217\n\x1A\x03\x1B\x03\x1B\x03\x1B\x05\x1B\u021C\n\x1B\x03\x1C\x03\x1C" +
		"\x03\x1D\x03\x1D\x03\x1E\x03\x1E\x03\x1F\x03\x1F\x03 \x03 \x03!\x03!\x03" +
		"\"\x03\"\x03#\x03#\x03$\x03$\x03%\x03%\x03%\x05%\u0233\n%\x03%\x03%\x03" +
		"%\x05%\u0238\n%\x03%\x03%\x03%\x05%\u023D\n%\x05%\u023F\n%\x03&\x03&\x03" +
		"\'\x03\'\x03\'\x03\'\x03\'\x03\'\x05\'\u0249\n\'\x03(\x03(\x03(\x03(\x03" +
		"(\x03(\x03(\x03(\x05(\u0253\n(\x03)\x03)\x03)\x03)\x03)\x03)\x03)\x03" +
		")\x05)\u025D\n)\x03*\x03*\x03*\x03*\x05*\u0263\n*\x03*\x03*\x03*\x03*" +
		"\x03*\x05*\u026A\n*\x03+\x03+\x07+\u026E\n+\f+\x0E+\u0271\v+\x03,\x03" +
		",\x03,\x07,\u0276\n,\f,\x0E,\u0279\v,\x03,\x03,\x03,\x03-\x03-\x07-\u0280" +
		"\n-\f-\x0E-\u0283\v-\x03.\x03.\x03.\x03.\x03.\x03.\x03.\x03.\x05.\u028D" +
		"\n.\x03/\x03/\x07/\u0291\n/\f/\x0E/\u0294\v/\x03/\x03/\x05/\u0298\n/\x03" +
		"0\x030\x030\x070\u029D\n0\f0\x0E0\u02A0\v0\x030\x030\x030\x031\x031\x03" +
		"1\x051\u02A8\n1\x031\x031\x051\u02AC\n1\x031\x031\x051\u02B0\n1\x031\x05" +
		"1\u02B3\n1\x032\x032\x032\x032\x032\x032\x032\x032\x032\x032\x032\x07" +
		"2\u02C0\n2\f2\x0E2\u02C3\v2\x032\x052\u02C6\n2\x033\x033\x033\x033\x03" +
		"3\x033\x033\x033\x033\x033\x033\x073\u02D3\n3\f3\x0E3\u02D6\v3\x033\x05" +
		"3\u02D9\n3\x034\x034\x074\u02DD\n4\f4\x0E4\u02E0\v4\x035\x035\x035\x03" +
		"5\x035\x035\x035\x035\x055\u02EA\n5\x036\x036\x036\x056\u02EF\n6\x036" +
		"\x036\x036\x056\u02F4\n6\x056\u02F6\n6\x037\x037\x037\x057\u02FB\n7\x03" +
		"7\x037\x037\x057\u0300\n7\x037\x037\x037\x057\u0305\n7\x057\u0307\n7\x03" +
		"8\x038\x038\x058\u030C\n8\x038\x038\x078\u0310\n8\f8\x0E8\u0313\v8\x03" +
		"8\x038\x068\u0317\n8\r8\x0E8\u0318\x038\x038\x038\x038\x038\x038\x038" +
		"\x078\u0322\n8\f8\x0E8\u0325\v8\x038\x058\u0328\n8\x039\x039\x039\x03" +
		"9\x03:\x03:\x03;\x03;\x03;\x07;\u0333\n;\f;\x0E;\u0336\v;\x03;\x05;\u0339" +
		"\n;\x03;\x03;\x03;\x03;\x07;\u033F\n;\f;\x0E;\u0342\v;\x03;\x03;\x07;" +
		"\u0346\n;\f;\x0E;\u0349\v;\x03;\x05;\u034C\n;\x05;\u034E\n;\x03<\x03<" +
		"\x03<\x03<\x07<\u0354\n<\f<\x0E<\u0357\v<\x03<\x03<\x03=\x03=\x05=\u035D" +
		"\n=\x03=\x03=\x03=\x05=\u0362\n=\x03=\x05=\u0365\n=\x03>\x03>\x03>\x03" +
		">\x05>\u036B\n>\x03>\x05>\u036E\n>\x03?\x03?\x05?\u0372\n?\x03?\x03?\x03" +
		"?\x07?\u0377\n?\f?\x0E?\u037A\v?\x07?\u037C\n?\f?\x0E?\u037F\v?\x03?\x07" +
		"?\u0382\n?\f?\x0E?\u0385\v?\x07?\u0387\n?\f?\x0E?\u038A\v?\x03?\x03?\x03" +
		"?\x03?\x03?\x07?\u0391\n?\f?\x0E?\u0394\v?\x03?\x05?\u0397\n?\x03@\x03" +
		"@\x03@\x03@\x03@\x06@\u039E\n@\r@\x0E@\u039F\x03@\x03@\x03@\x03@\x03@" +
		"\x03@\x03@\x07@\u03A9\n@\f@\x0E@\u03AC\v@\x03@\x05@\u03AF\n@\x03A\x03" +
		"A\x03A\x03A\x03B\x03B\x03B\x03B\x06B\u03B9\nB\rB\x0EB\u03BA\x03B\x03B" +
		"\x05B\u03BF\nB\x03C\x03C\x03C\x03C\x06C\u03C5\nC\rC\x0EC\u03C6\x03C\x03" +
		"C\x03D\x03D\x07D\u03CD\nD\fD\x0ED\u03D0\vD\x03D\x05D\u03D3\nD\x03D\x03" +
		"D\x07D\u03D7\nD\fD\x0ED\u03DA\vD\x07D\u03DC\nD\fD\x0ED\u03DF\vD\x03D\x07" +
		"D\u03E2\nD\fD\x0ED\u03E5\vD\x03D\x07D\u03E8\nD\fD\x0ED\u03EB\vD\x03D\x03" +
		"D\x03D\x07D\u03F0\nD\fD\x0ED\u03F3\vD\x03D\x05D\u03F6\nD\x03D\x05D\u03F9" +
		"\nD\x03E\x03E\x06E\u03FD\nE\rE\x0EE\u03FE\x03E\x03E\x03F\x03F\x03F\x06" +
		"F\u0406\nF\rF\x0EF\u0407\x03F\x03F\x03F\x03F\x03F\x05F\u040F\nF\x03G\x03" +
		"G\x03G\x03G\x03G\x03G\x03G\x03G\x05G\u0419\nG\x03H\x03H\x03H\x03H\x03" +
		"H\x03H\x03H\x03H\x03H\x05H\u0424\nH\x03I\x03I\x03I\x03I\x03J\x03J\x03" +
		"J\x03J\x03K\x03K\x07K\u0430\nK\fK\x0EK\u0433\vK\x03K\x07K\u0436\nK\fK" +
		"\x0EK\u0439\vK\x03L\x03L\x03L\x03L\x03L\x03L\x03L\x07L\u0442\nL\fL\x0E" +
		"L\u0445\vL\x03L\x03L\x03L\x03L\x07L\u044B\nL\fL\x0EL\u044E\vL\x03L\x03" +
		"L\x05L\u0452\nL\x03M\x03M\x03M\x03M\x06M\u0458\nM\rM\x0EM\u0459\x03M\x03" +
		"M\x03M\x03M\x03M\x07M\u0461\nM\fM\x0EM\u0464\vM\x03M\x05M\u0467\nM\x03" +
		"N\x03N\x05N\u046B\nN\x03N\x03N\x03O\x03O\x05O\u0471\nO\x06O\u0473\nO\r" +
		"O\x0EO\u0474\x03P\x03P\x06P\u0479\nP\rP\x0EP\u047A\x03P\x05P\u047E\nP" +
		"\x03P\x03P\x06P\u0482\nP\rP\x0EP\u0483\x03P\x05P\u0487\nP\x03P\x03P\x03" +
		"P\x03P\x03P\x03P\x07P\u048F\nP\fP\x0EP\u0492\vP\x03P\x03P\x07P\u0496\n" +
		"P\fP\x0EP\u0499\vP\x03P\x03P\x07P\u049D\nP\fP\x0EP\u04A0\vP\x03P\x03P" +
		"\x03P\x05P\u04A5\nP\x03Q\x03Q\x03R\x03R\x03S\x03S\x03T\x03T\x03T\x03T" +
		"\x03T\x03T\x03T\x03T\x03T\x03T\x03T\x06T\u04B8\nT\rT\x0ET\u04B9\x03U\x03" +
		"U\x03U\x06\u02C1\u02D4\u0323\u044C\x02\x02V\x02\x02\x04\x02\x06\x02\b" +
		"\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02" +
		"\x1C\x02\x1E\x02 \x02\"\x02$\x02&\x02(\x02*\x02,\x02.\x020\x022\x024\x02" +
		"6\x028\x02:\x02<\x02>\x02@\x02B\x02D\x02F\x02H\x02J\x02L\x02N\x02P\x02" +
		"R\x02T\x02V\x02X\x02Z\x02\\\x02^\x02`\x02b\x02d\x02f\x02h\x02j\x02l\x02" +
		"n\x02p\x02r\x02t\x02v\x02x\x02z\x02|\x02~\x02\x80\x02\x82\x02\x84\x02" +
		"\x86\x02\x88\x02\x8A\x02\x8C\x02\x8E\x02\x90\x02\x92\x02\x94\x02\x96\x02" +
		"\x98\x02\x9A\x02\x9C\x02\x9E\x02\xA0\x02\xA2\x02\xA4\x02\xA6\x02\xA8\x02" +
		"\x02\x16\x03\x02\"#\b\x02WXZ[hp{~\x84\x85\x87\x89\x05\x02VVjj{{\x04\x02" +
		"WWkk\x05\x02XXlm}}\x04\x02YYnn\x04\x02ZZoo\x05\x02[[pp~~\x04\x02aatt\x05" +
		"\x02ccuv\x82\x82\x04\x02ddww\x04\x02eexx\x05\x02ffyy\x83\x83\x03\x027" +
		"8\x04\x02GGJM\x03\x02\x17\x17\x04\x02\x18\x18\x1A\x1A\x03\x02$%\x03\x02" +
		"\x1D\x1D\x03\x02\x1E\x1E\x02\u0561\x02\xB7\x03\x02\x02\x02\x04\xC3\x03" +
		"\x02\x02\x02\x06\xC7\x03\x02\x02\x02\b\u0108\x03\x02\x02\x02\n\u0158\x03" +
		"\x02\x02\x02\f\u015A\x03\x02\x02\x02\x0E\u015C\x03\x02\x02\x02\x10\u015E" +
		"\x03\x02\x02\x02\x12\u0167\x03\x02\x02\x02\x14\u017B\x03\x02\x02\x02\x16" +
		"\u017F\x03\x02\x02\x02\x18\u0184\x03\x02\x02\x02\x1A\u0190\x03\x02\x02" +
		"\x02\x1C\u019C\x03\x02\x02\x02\x1E\u01BF\x03\x02\x02\x02 \u01C1\x03\x02" +
		"\x02\x02\"\u01C3\x03\x02\x02\x02$\u01CE\x03\x02\x02\x02&\u01DC\x03\x02" +
		"\x02\x02(\u01E2\x03\x02\x02\x02*\u01E9\x03\x02\x02\x02,\u01F4\x03\x02" +
		"\x02\x02.\u01FF\x03\x02\x02\x020\u0207\x03\x02\x02\x022\u0216\x03\x02" +
		"\x02\x024\u0218\x03\x02\x02\x026\u021D\x03\x02\x02\x028\u021F\x03\x02" +
		"\x02\x02:\u0221\x03\x02\x02\x02<\u0223\x03\x02\x02\x02>\u0225\x03\x02" +
		"\x02\x02@\u0227\x03\x02\x02\x02B\u0229\x03\x02\x02\x02D\u022B\x03\x02" +
		"\x02\x02F\u022D\x03\x02\x02\x02H\u023E\x03\x02\x02\x02J\u0240\x03\x02" +
		"\x02\x02L\u0248\x03\x02\x02\x02N\u024A\x03\x02\x02\x02P\u0254\x03\x02" +
		"\x02\x02R\u025E\x03\x02\x02\x02T\u026B\x03\x02\x02\x02V\u0272\x03\x02" +
		"\x02\x02X\u027D\x03\x02\x02\x02Z\u0284\x03\x02\x02\x02\\\u028E\x03\x02" +
		"\x02\x02^\u0299\x03\x02\x02\x02`\u02B2\x03\x02\x02\x02b\u02C5\x03\x02" +
		"\x02\x02d\u02D8\x03\x02\x02\x02f\u02DA\x03\x02\x02\x02h\u02E1\x03\x02" +
		"\x02\x02j\u02F5\x03\x02\x02\x02l\u0306\x03\x02\x02\x02n\u0327\x03\x02" +
		"\x02\x02p\u0329\x03\x02\x02\x02r\u032D\x03\x02\x02\x02t\u034D\x03\x02" +
		"\x02\x02v\u034F\x03\x02\x02\x02x\u0364\x03\x02\x02\x02z\u036D\x03\x02" +
		"\x02\x02|\u0396\x03\x02\x02\x02~\u03AE\x03\x02\x02\x02\x80\u03B0\x03\x02" +
		"\x02\x02\x82\u03B4\x03\x02\x02\x02\x84\u03C0\x03\x02\x02\x02\x86\u03F8" +
		"\x03\x02\x02\x02\x88\u03FA\x03\x02\x02\x02\x8A\u040E\x03\x02\x02\x02\x8C" +
		"\u0418\x03\x02\x02\x02\x8E\u0423\x03\x02\x02\x02\x90\u0425\x03\x02\x02" +
		"\x02\x92\u0429\x03\x02\x02\x02\x94\u042D\x03\x02\x02\x02\x96\u0451\x03" +
		"\x02\x02\x02\x98\u0466\x03\x02\x02\x02\x9A\u0468\x03\x02\x02\x02\x9C\u0472" +
		"\x03\x02\x02\x02\x9E\u04A4\x03\x02\x02\x02\xA0\u04A6\x03\x02\x02\x02\xA2" +
		"\u04A8\x03\x02\x02\x02\xA4\u04AA\x03\x02\x02\x02\xA6\u04B7\x03\x02\x02" +
		"\x02\xA8\u04BB\x03\x02\x02\x02\xAA\xB4\x05\x04\x03\x02\xAB\xAD\x07\x04" +
		"\x02\x02\xAC\xAB\x03\x02\x02\x02\xAD\xB0\x03\x02\x02\x02\xAE\xAC\x03\x02" +
		"\x02\x02\xAE\xAF\x03\x02\x02\x02\xAF\xB1\x03\x02\x02\x02\xB0\xAE\x03\x02" +
		"\x02\x02\xB1\xB3\x07/\x02\x02\xB2\xAE\x03\x02\x02\x02\xB3\xB6\x03\x02" +
		"\x02\x02\xB4\xB2\x03\x02\x02\x02\xB4\xB5\x03\x02\x02\x02\xB5\xB8\x03\x02" +
		"\x02\x02\xB6\xB4\x03\x02\x02\x02\xB7\xAA\x03\x02\x02\x02\xB8\xB9\x03\x02" +
		"\x02\x02\xB9\xB7\x03\x02\x02\x02\xB9\xBA\x03\x02\x02\x02\xBA\xBE\x03\x02" +
		"\x02\x02\xBB\xBD\x07/\x02\x02\xBC\xBB\x03\x02\x02\x02\xBD\xC0\x03\x02" +
		"\x02\x02\xBE\xBC\x03\x02\x02\x02\xBE\xBF\x03\x02\x02\x02\xBF\xC1\x03\x02" +
		"\x02\x02\xC0\xBE\x03\x02\x02\x02\xC1\xC2\x07\x02\x02\x03\xC2\x03\x03\x02" +
		"\x02\x02\xC3\xC4\x05\x06\x04\x02\xC4\x05\x03\x02\x02\x02\xC5\xC8\x05\b" +
		"\x05\x02\xC6\xC8\x05\n\x06\x02\xC7\xC5\x03\x02\x02\x02\xC7\xC6\x03\x02" +
		"\x02\x02\xC8\x07\x03\x02\x02\x02\xC9\xCA\x07\x05\x02\x02\xCA\xCB\x05*" +
		"\x16\x02\xCB\xCF\x07\x17\x02\x02\xCC\xCE\x07/\x02\x02\xCD\xCC\x03\x02" +
		"\x02\x02\xCE\xD1\x03\x02\x02\x02\xCF\xCD\x03\x02\x02\x02\xCF\xD0\x03\x02" +
		"\x02\x02\xD0\xDB\x03\x02\x02\x02\xD1\xCF\x03\x02\x02\x02\xD2\xD6\x05\x1E" +
		"\x10\x02\xD3\xD5\x07/\x02\x02\xD4\xD3\x03\x02\x02\x02\xD5\xD8\x03\x02" +
		"\x02\x02\xD6\xD4\x03\x02\x02\x02\xD6\xD7\x03\x02\x02\x02\xD7\xDA\x03\x02" +
		"\x02\x02\xD8\xD6\x03\x02\x02\x02\xD9\xD2\x03\x02\x02\x02\xDA\xDD\x03\x02" +
		"\x02\x02\xDB\xD9\x03\x02\x02\x02\xDB\xDC\x03\x02\x02\x02\xDC\u0109\x03" +
		"\x02\x02\x02\xDD\xDB\x03\x02\x02\x02\xDE\xDF\x07\x05\x02\x02\xDF\xE0\x05" +
		"*\x16\x02\xE0\xE2\x07\x17\x02\x02\xE1\xE3\x07/\x02\x02\xE2\xE1\x03\x02" +
		"\x02\x02\xE3\xE4\x03\x02\x02\x02\xE4\xE2\x03\x02\x02\x02\xE4\xE5\x03\x02" +
		"\x02\x02\xE5\xEF\x03\x02\x02\x02\xE6\xEA\x05\x1E\x10\x02\xE7\xE9\x07/" +
		"\x02\x02\xE8\xE7\x03\x02\x02\x02\xE9\xEC\x03\x02\x02\x02\xEA\xE8\x03\x02" +
		"\x02\x02\xEA\xEB\x03\x02\x02\x02\xEB\xEE\x03\x02\x02\x02\xEC\xEA\x03\x02" +
		"\x02\x02\xED\xE6\x03\x02\x02\x02\xEE\xF1\x03\x02\x02\x02\xEF\xED\x03\x02" +
		"\x02\x02\xEF\xF0\x03\x02\x02\x02\xF0\xF2\x03\x02\x02\x02\xF1\xEF\x03\x02" +
		"\x02\x02\xF2\xF6\x05\x12\n\x02\xF3\xF5\x07/\x02\x02\xF4\xF3\x03\x02\x02" +
		"\x02\xF5\xF8\x03\x02\x02\x02\xF6\xF4\x03\x02\x02\x02\xF6\xF7\x03\x02\x02" +
		"\x02\xF7\u0106\x03\x02\x02\x02\xF8\xF6\x03\x02\x02\x02\xF9\u0103\x05 " +
		"\x11\x02\xFA\xFC\x07/\x02\x02\xFB\xFA\x03\x02\x02\x02\xFC\xFF\x03\x02" +
		"\x02\x02\xFD\xFB\x03\x02\x02\x02\xFD\xFE\x03\x02\x02\x02\xFE\u0100\x03" +
		"\x02\x02\x02\xFF\xFD\x03\x02\x02\x02\u0100\u0102\x05 \x11\x02\u0101\xFD" +
		"\x03\x02\x02\x02\u0102\u0105\x03\x02\x02\x02\u0103\u0101\x03\x02\x02\x02" +
		"\u0103\u0104\x03\x02\x02\x02\u0104\u0107\x03\x02\x02\x02\u0105\u0103\x03" +
		"\x02\x02\x02\u0106\xF9\x03\x02\x02\x02\u0106\u0107\x03\x02\x02\x02\u0107" +
		"\u0109\x03\x02\x02\x02\u0108\xC9\x03\x02\x02\x02\u0108\xDE\x03\x02\x02" +
		"\x02\u0109\t\x03\x02\x02\x02\u010A\u010B\x07\x06\x02\x02\u010B\u010C\x05" +
		"*\x16\x02\u010C\u0110\x07\x17\x02\x02\u010D\u010F\x07/\x02\x02\u010E\u010D" +
		"\x03\x02\x02\x02\u010F\u0112\x03\x02\x02\x02\u0110\u010E\x03\x02\x02\x02" +
		"\u0110\u0111\x03\x02\x02\x02\u0111\u011C\x03\x02\x02\x02\u0112\u0110\x03" +
		"\x02\x02\x02\u0113\u0117\x05\x1E\x10\x02\u0114\u0116\x07/\x02\x02\u0115" +
		"\u0114\x03\x02\x02\x02\u0116\u0119\x03\x02\x02\x02\u0117\u0115\x03\x02" +
		"\x02\x02\u0117\u0118\x03\x02\x02\x02\u0118\u011B\x03\x02\x02\x02\u0119" +
		"\u0117\x03\x02\x02\x02\u011A\u0113\x03\x02\x02\x02\u011B\u011E\x03\x02" +
		"\x02\x02\u011C\u011A\x03\x02\x02\x02\u011C\u011D\x03\x02\x02\x02\u011D" +
		"\u0159\x03\x02\x02\x02\u011E\u011C\x03\x02\x02\x02\u011F\u0120\x07\x06" +
		"\x02\x02\u0120\u0121\x05*\x16\x02\u0121\u0125\x07\x17\x02\x02\u0122\u0124" +
		"\x07/\x02\x02\u0123\u0122\x03\x02\x02\x02\u0124\u0127\x03\x02\x02\x02" +
		"\u0125\u0123\x03\x02\x02\x02\u0125\u0126\x03\x02\x02\x02\u0126\u0131\x03" +
		"\x02\x02\x02\u0127\u0125\x03\x02\x02\x02\u0128\u012C\x05\x1E\x10\x02\u0129" +
		"\u012B\x07/\x02\x02\u012A\u0129\x03\x02\x02\x02\u012B\u012E\x03\x02\x02" +
		"\x02\u012C\u012A\x03\x02\x02\x02\u012C\u012D\x03\x02\x02\x02\u012D\u0130" +
		"\x03\x02\x02\x02\u012E\u012C\x03\x02\x02\x02\u012F\u0128\x03\x02\x02\x02" +
		"\u0130\u0133\x03\x02\x02\x02\u0131\u012F\x03\x02\x02\x02\u0131\u0132\x03" +
		"\x02\x02\x02\u0132\u013E\x03\x02\x02\x02\u0133\u0131\x03\x02\x02\x02\u0134" +
		"\u0136\x05\f\x07\x02\u0135\u0134\x03\x02\x02\x02\u0135\u0136\x03\x02\x02" +
		"\x02\u0136\u013A\x03\x02\x02\x02\u0137\u0139\x05\x10\t\x02\u0138\u0137" +
		"\x03\x02\x02\x02\u0139\u013C\x03\x02\x02\x02\u013A\u0138\x03\x02\x02\x02" +
		"\u013A\u013B\x03\x02\x02\x02\u013B\u013D\x03\x02\x02\x02\u013C\u013A\x03" +
		"\x02\x02\x02\u013D\u013F\x05\x12\n\x02\u013E\u0135\x03\x02\x02\x02\u013F" +
		"\u0140\x03\x02\x02\x02\u0140\u013E\x03\x02\x02\x02\u0140\u0141\x03\x02" +
		"\x02\x02\u0141\u0142\x03\x02\x02\x02\u0142\u0146\x05\x0E\b\x02\u0143\u0145" +
		"\x07/\x02\x02\u0144\u0143\x03\x02\x02\x02\u0145\u0148\x03\x02\x02\x02" +
		"\u0146\u0144\x03\x02\x02\x02\u0146\u0147\x03\x02\x02\x02\u0147\u0156\x03" +
		"\x02\x02\x02\u0148\u0146\x03\x02\x02\x02\u0149\u0153\x05 \x11\x02\u014A" +
		"\u014C\x07/\x02\x02\u014B\u014A\x03\x02\x02\x02\u014C\u014F\x03\x02\x02" +
		"\x02\u014D\u014B\x03\x02\x02\x02\u014D\u014E\x03\x02\x02\x02\u014E\u0150" +
		"\x03\x02\x02\x02\u014F\u014D\x03\x02\x02\x02\u0150\u0152\x05 \x11\x02" +
		"\u0151\u014D\x03\x02\x02\x02\u0152\u0155\x03\x02\x02\x02\u0153\u0151\x03" +
		"\x02\x02\x02\u0153\u0154\x03\x02\x02\x02\u0154\u0157\x03\x02\x02\x02\u0155" +
		"\u0153\x03\x02\x02\x02\u0156\u0149\x03\x02\x02\x02\u0156\u0157\x03\x02" +
		"\x02\x02\u0157\u0159\x03\x02\x02\x02\u0158\u010A\x03\x02\x02\x02\u0158" +
		"\u011F\x03\x02\x02\x02\u0159\v\x03\x02\x02\x02\u015A\u015B\t\x02\x02\x02" +
		"\u015B\r\x03\x02\x02\x02\u015C\u015D\t\x02\x02\x02\u015D\x0F\x03\x02\x02" +
		"\x02\u015E\u0162\x05\x1E\x10\x02\u015F\u0161\x07/\x02\x02\u0160\u015F" +
		"\x03\x02\x02\x02\u0161\u0164\x03\x02\x02\x02\u0162\u0160\x03\x02\x02\x02" +
		"\u0162\u0163\x03\x02\x02\x02\u0163\x11\x03\x02\x02\x02\u0164\u0162\x03" +
		"\x02\x02\x02\u0165\u0168\x05\x14\v\x02\u0166\u0168\x05\x16\f\x02\u0167" +
		"\u0165\x03\x02\x02\x02\u0167\u0166\x03\x02\x02\x02\u0168\u0178\x03\x02" +
		"\x02\x02\u0169\u016B\x07/\x02\x02\u016A\u0169\x03\x02\x02\x02\u016A\u016B" +
		"\x03\x02\x02\x02\u016B\u016F\x03\x02\x02\x02\u016C\u016E\x07\x04\x02\x02" +
		"\u016D\u016C\x03\x02\x02\x02\u016E\u0171\x03\x02\x02\x02\u016F\u016D\x03" +
		"\x02\x02\x02\u016F\u0170\x03\x02\x02\x02\u0170\u0174\x03\x02\x02\x02\u0171" +
		"\u016F\x03\x02\x02\x02\u0172\u0175\x05\x14\v\x02\u0173\u0175\x05\x16\f" +
		"\x02\u0174\u0172\x03\x02\x02\x02\u0174\u0173\x03\x02\x02\x02\u0175\u0177" +
		"\x03\x02\x02\x02\u0176\u016A\x03\x02\x02\x02\u0177\u017A\x03\x02\x02\x02" +
		"\u0178\u0176\x03\x02\x02\x02\u0178\u0179\x03\x02\x02\x02\u0179\x13\x03" +
		"\x02\x02\x02\u017A\u0178\x03\x02\x02\x02\u017B\u017D\x05\x18\r\x02\u017C" +
		"\u017E\x05z>\x02\u017D\u017C\x03\x02\x02\x02\u017D\u017E\x03\x02\x02\x02" +
		"\u017E\x15\x03\x02\x02\x02\u017F\u0181\x05\x1A\x0E\x02\u0180\u0182\x05" +
		"z>\x02\u0181\u0180\x03\x02\x02\x02\u0181\u0182";
	private static readonly _serializedATNSegment1: string =
		"\x03\x02\x02\x02\u0182\x17\x03\x02\x02\x02\u0183\u0185\x05t;\x02\u0184" +
		"\u0183\x03\x02\x02\x02\u0184\u0185\x03\x02\x02\x02\u0185\u0186\x03\x02" +
		"\x02\x02\u0186\u0189\x07\x11\x02\x02\u0187\u018A\x05\x9EP\x02\u0188\u018A" +
		"\x07/\x02\x02\u0189\u0187\x03\x02\x02\x02\u0189\u0188\x03\x02\x02\x02" +
		"\u018A\u018B\x03\x02\x02\x02\u018B\u0189\x03\x02\x02\x02\u018B\u018C\x03" +
		"\x02\x02\x02\u018C\u018D\x03\x02\x02\x02\u018D\u018E\x07\x17\x02\x02\u018E" +
		"\x19\x03\x02\x02\x02\u018F\u0191\x05t;\x02\u0190\u018F\x03\x02\x02\x02" +
		"\u0190\u0191\x03\x02\x02\x02\u0191\u0192\x03\x02\x02\x02\u0192\u0195\x07" +
		"\x12\x02\x02\u0193\u0196\x05\x9EP\x02\u0194\u0196\x07/\x02\x02\u0195\u0193" +
		"\x03\x02\x02\x02\u0195\u0194\x03\x02\x02\x02\u0196\u0197\x03\x02\x02\x02" +
		"\u0197\u0195\x03\x02\x02\x02\u0197\u0198\x03\x02\x02\x02\u0198\u0199\x03" +
		"\x02\x02\x02\u0199\u019A\x07\x17\x02\x02\u019A\x1B\x03\x02\x02\x02\u019B" +
		"\u019D\x05t;\x02\u019C\u019B\x03\x02\x02\x02\u019C\u019D\x03\x02\x02\x02" +
		"\u019D\u019E\x03\x02\x02\x02\u019E\u01A1\x07\x14\x02\x02\u019F\u01A2\x05" +
		"\x9EP\x02\u01A0\u01A2\x07/\x02\x02\u01A1\u019F\x03\x02\x02\x02\u01A1\u01A0" +
		"\x03\x02\x02\x02\u01A2\u01A3\x03\x02\x02\x02\u01A3\u01A1\x03\x02\x02\x02" +
		"\u01A3\u01A4\x03\x02\x02\x02\u01A4\u01A5\x03\x02\x02\x02\u01A5\u01A6\x07" +
		"\x17\x02\x02\u01A6\x1D\x03\x02\x02\x02\u01A7\u01C0\x07\x9A\x02\x02\u01A8" +
		"\u01C0\x070\x02\x02\u01A9\u01C0\x05\xA0Q\x02\u01AA\u01C0\x05\"\x12\x02" +
		"\u01AB\u01C0\x05\x94K\x02\u01AC\u01C0\x05~@\x02\u01AD\u01C0\x05t;\x02" +
		"\u01AE\u01C0\x05\x8AF\x02\u01AF\u01C0\x05\x86D\x02\u01B0\u01C0\x05\x88" +
		"E\x02\u01B1\u01C0\x05\x9EP\x02\u01B2\u01C0\x05z>\x02\u01B3\u01C0\x05\x8C" +
		"G\x02\u01B4\u01C0\x05\\/\x02\u01B5\u01C0\x05f4\x02\u01B6\u01C0\x05X-\x02" +
		"\u01B7\u01C0\x05L\'\x02\u01B8\u01C0\x05N(\x02\u01B9\u01C0\x05R*\x02\u01BA" +
		"\u01C0\x05P)\x02\u01BB\u01C0\x05T+\x02\u01BC\u01C0\x05x=\x02\u01BD\u01C0" +
		"\x05\x9AN\x02\u01BE\u01C0\x05\xA8U\x02\u01BF\u01A7\x03\x02\x02\x02\u01BF" +
		"\u01A8\x03\x02\x02\x02\u01BF\u01A9\x03\x02\x02\x02\u01BF\u01AA\x03\x02" +
		"\x02\x02\u01BF\u01AB\x03\x02\x02\x02\u01BF\u01AC\x03\x02\x02\x02\u01BF" +
		"\u01AD\x03\x02\x02\x02\u01BF\u01AE\x03\x02\x02\x02\u01BF\u01AF\x03\x02" +
		"\x02\x02\u01BF\u01B0\x03\x02\x02\x02\u01BF\u01B1\x03\x02\x02\x02\u01BF" +
		"\u01B2\x03\x02\x02\x02\u01BF\u01B3\x03\x02\x02\x02\u01BF\u01B4\x03\x02" +
		"\x02\x02\u01BF\u01B5\x03\x02\x02\x02\u01BF\u01B6\x03\x02\x02\x02\u01BF" +
		"\u01B7\x03\x02\x02\x02\u01BF\u01B8\x03\x02\x02\x02\u01BF\u01B9\x03\x02" +
		"\x02\x02\u01BF\u01BA\x03\x02\x02\x02\u01BF\u01BB\x03\x02\x02\x02\u01BF" +
		"\u01BC\x03\x02\x02\x02\u01BF\u01BD\x03\x02\x02\x02\u01BF\u01BE\x03\x02" +
		"\x02\x02\u01C0\x1F\x03\x02\x02\x02\u01C1\u01C2\x05\x1E\x10\x02\u01C2!" +
		"\x03\x02\x02\x02\u01C3\u01CB\x05$\x13\x02\u01C4\u01CA\x05$\x13\x02\u01C5" +
		"\u01CA\x05\x86D\x02\u01C6\u01CA\x05\x88E\x02\u01C7\u01CA\x05t;\x02\u01C8" +
		"\u01CA\x05z>\x02\u01C9\u01C4\x03\x02\x02\x02\u01C9\u01C5\x03\x02\x02\x02" +
		"\u01C9\u01C6\x03\x02\x02\x02\u01C9\u01C7\x03\x02\x02\x02\u01C9\u01C8\x03" +
		"\x02\x02\x02\u01CA\u01CD\x03\x02\x02\x02\u01CB\u01C9\x03\x02\x02\x02\u01CB" +
		"\u01CC\x03\x02\x02\x02\u01CC#\x03\x02\x02\x02\u01CD\u01CB\x03\x02\x02" +
		"\x02\u01CE\u01D2\x07\r\x02\x02\u01CF\u01D3\x07-\x02\x02\u01D0\u01D3\x07" +
		".\x02\x02\u01D1\u01D3\x03\x02\x02\x02\u01D2\u01CF\x03\x02\x02\x02\u01D2" +
		"\u01D0\x03\x02\x02\x02\u01D2\u01D1\x03\x02\x02\x02\u01D3\u01D7\x03\x02" +
		"\x02\x02\u01D4\u01D6\x05\x9EP\x02\u01D5\u01D4\x03\x02\x02\x02\u01D6\u01D9" +
		"\x03\x02\x02\x02\u01D7\u01D5\x03\x02\x02\x02\u01D7\u01D8\x03\x02\x02\x02" +
		"\u01D8\u01DA\x03\x02\x02\x02\u01D9\u01D7\x03\x02\x02\x02\u01DA\u01DB\x05" +
		"\xA2R\x02\u01DB%\x03\x02\x02\x02\u01DC\u01DD\x07\b\x02\x02\u01DD\u01DE" +
		"\x05\x9EP\x02\u01DE\u01E0\x07\x17\x02\x02\u01DF\u01E1\x05(\x15\x02\u01E0" +
		"\u01DF\x03\x02\x02\x02\u01E0\u01E1\x03\x02\x02\x02\u01E1\'\x03\x02\x02" +
		"\x02\u01E2\u01E3\x07D\x02\x02\u01E3\u01E4\x07-\x02\x02\u01E4\u01E5\x07" +
		"\x17\x02\x02\u01E5)\x03\x02\x02\x02\u01E6\u01E8\x05,\x17\x02\u01E7\u01E6" +
		"\x03\x02\x02\x02\u01E8\u01EB\x03\x02\x02\x02\u01E9\u01E7\x03\x02\x02\x02" +
		"\u01E9\u01EA\x03\x02\x02\x02\u01EA\u01F1\x03\x02\x02\x02\u01EB\u01E9\x03" +
		"\x02\x02\x02\u01EC\u01F0\x07\x86\x02\x02\u01ED\u01F0\x07\x87\x02\x02\u01EE" +
		"\u01F0\x05.\x18\x02\u01EF\u01EC\x03\x02\x02\x02\u01EF\u01ED\x03\x02\x02" +
		"\x02\u01EF\u01EE\x03\x02\x02\x02\u01F0\u01F3\x03\x02\x02\x02\u01F1\u01EF" +
		"\x03\x02\x02\x02\u01F1\u01F2\x03\x02\x02\x02\u01F2+\x03\x02\x02\x02\u01F3" +
		"\u01F1\x03\x02\x02\x02\u01F4\u01F5\t\x03\x02\x02\u01F5-\x03\x02\x02\x02" +
		"\u01F6\u0200\x052\x1A\x02\u01F7\u0200\x05j6\x02\u01F8\u0200\x054\x1B\x02" +
		"\u01F9\u0200\x056\x1C\x02\u01FA\u0200\x058\x1D\x02\u01FB\u0200\x05:\x1E" +
		"\x02\u01FC\u0200\x05<\x1F\x02\u01FD\u0200\x05> \x02\u01FE\u0200\x07\\" +
		"\x02\x02\u01FF\u01F6\x03\x02\x02\x02\u01FF\u01F7\x03\x02\x02\x02\u01FF" +
		"\u01F8\x03\x02\x02\x02\u01FF\u01F9\x03\x02\x02\x02\u01FF\u01FA\x03\x02" +
		"\x02\x02\u01FF\u01FB\x03\x02\x02\x02\u01FF\u01FC\x03\x02\x02\x02\u01FF" +
		"\u01FD\x03\x02\x02\x02\u01FF\u01FE\x03\x02\x02\x02\u0200/\x03\x02\x02" +
		"\x02\u0201\u0208\x07\x84\x02\x02\u0202\u0208\x07\x85\x02\x02\u0203\u0208" +
		"\x07\x86\x02\x02\u0204\u0208\x07\x89\x02\x02\u0205\u0208\x07\x87\x02\x02" +
		"\u0206\u0208\x03\x02\x02\x02\u0207\u0201\x03\x02\x02\x02\u0207\u0202\x03" +
		"\x02\x02\x02\u0207\u0203\x03\x02\x02\x02\u0207\u0204\x03\x02\x02\x02\u0207" +
		"\u0205\x03\x02\x02\x02\u0207\u0206\x03\x02\x02\x02\u02081\x03\x02\x02" +
		"\x02\u0209\u020C\x07T\x02\x02\u020A\u020D\x07(\x02\x02\u020B\u020D\x07" +
		"\x97\x02\x02\u020C\u020A\x03\x02\x02\x02\u020C\u020B\x03\x02\x02\x02\u020C" +
		"\u020D\x03\x02\x02\x02\u020D\u0217\x03\x02\x02\x02\u020E\u0210\x07i\x02" +
		"\x02\u020F\u0211\x07(\x02\x02\u0210\u020F\x03\x02\x02\x02\u0210\u0211" +
		"\x03\x02\x02\x02\u0211\u0217\x03\x02\x02\x02\u0212\u0214\x07U\x02\x02" +
		"\u0213\u0215\x07(\x02\x02\u0214\u0213\x03\x02\x02\x02\u0214\u0215\x03" +
		"\x02\x02\x02\u0215\u0217\x03\x02\x02\x02\u0216\u0209\x03\x02\x02\x02\u0216" +
		"\u020E\x03\x02\x02\x02\u0216\u0212\x03\x02\x02\x02\u02173\x03\x02\x02" +
		"\x02\u0218\u021B\t\x04\x02\x02\u0219\u021A\x07\x18\x02\x02\u021A\u021C" +
		"\x07*\x02\x02\u021B\u0219\x03\x02\x02\x02\u021B\u021C\x03\x02\x02\x02" +
		"\u021C5\x03\x02\x02\x02\u021D\u021E\t\x05\x02\x02\u021E7\x03\x02\x02\x02" +
		"\u021F\u0220\t\x06\x02\x02\u02209\x03\x02\x02\x02\u0221\u0222\t\x07\x02" +
		"\x02\u0222;\x03\x02\x02\x02\u0223\u0224\t\b\x02\x02\u0224=\x03\x02\x02" +
		"\x02\u0225\u0226\t\t\x02\x02\u0226?\x03\x02\x02\x02\u0227\u0228\t\n\x02" +
		"\x02\u0228A\x03\x02\x02\x02\u0229\u022A\t\v\x02\x02\u022AC\x03\x02\x02" +
		"\x02\u022B\u022C\t\f\x02\x02\u022CE\x03\x02\x02\x02\u022D\u022E\t\r\x02" +
		"\x02\u022EG\x03\x02\x02\x02\u022F\u0232\x07`\x02\x02\u0230\u0231\x07\x18" +
		"\x02\x02\u0231\u0233\x07*\x02\x02\u0232\u0230\x03\x02\x02\x02\u0232\u0233" +
		"\x03\x02\x02\x02\u0233\u023F\x03\x02\x02\x02\u0234\u0237\x07s\x02\x02" +
		"\u0235\u0236\x07\x18\x02\x02\u0236\u0238\x07*\x02\x02\u0237\u0235\x03" +
		"\x02\x02\x02\u0237\u0238\x03\x02\x02\x02\u0238\u023F\x03\x02\x02\x02\u0239" +
		"\u023C\x07\x80\x02\x02\u023A\u023B\x07\x18\x02\x02\u023B\u023D\x07*\x02" +
		"\x02\u023C\u023A\x03\x02\x02\x02\u023C\u023D\x03\x02\x02\x02\u023D\u023F" +
		"\x03\x02\x02\x02\u023E\u022F\x03\x02\x02\x02\u023E\u0234\x03\x02\x02\x02" +
		"\u023E\u0239\x03\x02\x02\x02\u023FI\x03\x02\x02\x02\u0240\u0241\t\x0E" +
		"\x02\x02\u0241K\x03\x02\x02\x02\u0242\u0243\x05@!\x02\u0243\u0244\x07" +
		"\x18\x02\x02\u0244\u0245\x05r:\x02\u0245\u0246\x07\x17\x02\x02\u0246\u0249" +
		"\x03\x02\x02\x02\u0247\u0249\x07+\x02\x02\u0248\u0242\x03\x02\x02\x02" +
		"\u0248\u0247\x03\x02\x02\x02\u0249M\x03\x02\x02\x02\u024A\u024B\x05B\"" +
		"\x02\u024B\u024C\x07\x18\x02\x02\u024C\u024D\x05r:\x02\u024D\u0252\x07" +
		"\x17\x02\x02\u024E\u024F\x07G\x02\x02\u024F\u0250\x05\xA6T\x02\u0250\u0251" +
		"\x07\x17\x02\x02\u0251\u0253\x03\x02\x02\x02\u0252\u024E\x03\x02\x02\x02" +
		"\u0252\u0253\x03\x02\x02\x02\u0253O\x03\x02\x02\x02\u0254\u0255\x05F$" +
		"\x02\u0255\u0256\x07\x18\x02\x02\u0256\u0257\x05r:\x02\u0257\u025C\x07" +
		"\x17\x02\x02\u0258\u0259\x07G\x02\x02\u0259\u025A\x05\xA6T\x02\u025A\u025B" +
		"\x07\x17\x02\x02\u025B\u025D\x03\x02\x02\x02\u025C\u0258\x03\x02\x02\x02" +
		"\u025C\u025D\x03\x02\x02\x02\u025DQ\x03\x02\x02\x02\u025E\u025F\x05D#" +
		"\x02\u025F\u0262\x07\x18\x02\x02\u0260\u0263\x05r:\x02\u0261\u0263\x05" +
		"p9\x02\u0262\u0260\x03\x02\x02\x02\u0262\u0261\x03\x02\x02\x02\u0263\u0264" +
		"\x03\x02\x02\x02\u0264\u0269\x07\x17\x02\x02\u0265\u0266\x07G\x02\x02" +
		"\u0266\u0267\x05\xA6T\x02\u0267\u0268\x07\x17\x02\x02\u0268\u026A\x03" +
		"\x02\x02\x02\u0269\u0265\x03\x02\x02\x02\u0269\u026A\x03\x02\x02\x02\u026A" +
		"S\x03\x02\x02\x02\u026B\u026F\x05V,\x02\u026C\u026E\x05n8\x02\u026D\u026C" +
		"\x03\x02\x02\x02\u026E\u0271\x03\x02\x02\x02\u026F\u026D\x03\x02\x02\x02" +
		"\u026F\u0270\x03\x02\x02\x02\u0270U\x03\x02\x02\x02\u0271\u026F\x03\x02" +
		"\x02\x02\u0272\u0273\x05J&\x02\u0273\u0277\x07\x18\x02\x02\u0274\u0276" +
		"\x07\x04\x02\x02\u0275\u0274\x03\x02\x02\x02\u0276\u0279\x03\x02\x02\x02" +
		"\u0277\u0275\x03\x02\x02\x02\u0277\u0278\x03\x02\x02\x02\u0278\u027A\x03" +
		"\x02\x02\x02\u0279\u0277\x03\x02\x02\x02\u027A\u027B\x05r:\x02\u027B\u027C" +
		"\x07\x17\x02\x02\u027CW\x03\x02\x02\x02\u027D\u0281\x05Z.\x02\u027E\u0280" +
		"\x05n8\x02\u027F\u027E\x03\x02\x02\x02\u0280\u0283\x03\x02\x02\x02\u0281" +
		"\u027F\x03\x02\x02\x02\u0281\u0282\x03\x02\x02\x02\u0282Y\x03\x02\x02" +
		"\x02\u0283\u0281\x03\x02\x02\x02\u0284\u0285\x05H%\x02\u0285\u0286\x07" +
		"\x18\x02\x02\u0286\u0287\x05r:\x02\u0287\u028C\x07\x17\x02\x02\u0288\u0289" +
		"\x07G\x02\x02\u0289\u028A\x05\xA6T\x02\u028A\u028B\x07\x17\x02\x02\u028B" +
		"\u028D\x03\x02\x02\x02\u028C\u0288\x03\x02\x02\x02\u028C\u028D\x03\x02" +
		"\x02\x02\u028D[\x03\x02\x02\x02\u028E\u0292\x05^0\x02\u028F\u0291\x05" +
		"b2\x02\u0290\u028F\x03\x02\x02\x02\u0291\u0294\x03\x02\x02\x02\u0292\u0290" +
		"\x03\x02\x02\x02\u0292\u0293\x03\x02\x02\x02\u0293\u0297\x03\x02\x02\x02" +
		"\u0294\u0292\x03\x02\x02\x02\u0295\u0296\x07/\x02\x02\u0296\u0298\x07" +
		"I\x02\x02\u0297\u0295\x03\x02\x02\x02\u0297\u0298\x03\x02\x02\x02\u0298" +
		"]\x03\x02\x02\x02\u0299\u029A\x05`1\x02\u029A\u029E\x07\x18\x02\x02\u029B" +
		"\u029D\x07\x04\x02\x02\u029C\u029B\x03\x02\x02\x02\u029D\u02A0\x03\x02" +
		"\x02\x02\u029E\u029C\x03\x02\x02\x02\u029E\u029F\x03\x02\x02\x02\u029F" +
		"\u02A1\x03\x02\x02\x02\u02A0\u029E\x03\x02\x02\x02\u02A1\u02A2\x05r:\x02" +
		"\u02A2\u02A3\x07\x17\x02\x02\u02A3_\x03\x02\x02\x02\u02A4\u02A7\x07^\x02" +
		"\x02\u02A5\u02A8\x07(\x02\x02\u02A6\u02A8\x07\x97\x02\x02\u02A7\u02A5" +
		"\x03\x02\x02\x02\u02A7\u02A6\x03\x02\x02\x02\u02A7\u02A8\x03\x02\x02\x02" +
		"\u02A8\u02B3\x03\x02\x02\x02\u02A9\u02AB\x07r\x02\x02\u02AA\u02AC\x07" +
		"(\x02\x02\u02AB\u02AA\x03\x02\x02\x02\u02AB\u02AC\x03\x02\x02\x02\u02AC" +
		"\u02B3\x03\x02\x02\x02\u02AD\u02AF\x07_\x02\x02\u02AE\u02B0\x07(\x02\x02" +
		"\u02AF\u02AE\x03\x02\x02\x02\u02AF\u02B0\x03\x02\x02\x02\u02B0\u02B3\x03" +
		"\x02\x02\x02\u02B1\u02B3\x07\x9C\x02\x02\u02B2\u02A4\x03\x02\x02\x02\u02B2" +
		"\u02A9\x03\x02\x02\x02\u02B2\u02AD\x03\x02\x02\x02\u02B2\u02B1\x03\x02" +
		"\x02\x02\u02B3a\x03\x02\x02\x02\u02B4\u02B5\x07E\x02\x02\u02B5\u02B6\x07" +
		"\x18\x02\x02\u02B6\u02B7\x05r:\x02\u02B7\u02B8\x07\x17\x02\x02\u02B8\u02C6" +
		"\x03\x02\x02\x02\u02B9\u02BA\t\x0F\x02\x02\u02BA\u02BB\x07\x18\x02\x02" +
		"\u02BB\u02BC\x07-\x02\x02\u02BC\u02C6\x07\x17\x02\x02\u02BD\u02C1\t\x10" +
		"\x02\x02\u02BE\u02C0\v\x02\x02\x02\u02BF\u02BE\x03\x02\x02\x02\u02C0\u02C3" +
		"\x03\x02\x02\x02\u02C1\u02C2\x03\x02\x02\x02\u02C1\u02BF\x03\x02\x02\x02" +
		"\u02C2\u02C4\x03\x02\x02\x02\u02C3\u02C1\x03\x02\x02\x02\u02C4\u02C6\x07" +
		"\x17\x02\x02\u02C5\u02B4\x03\x02\x02\x02\u02C5\u02B9\x03\x02\x02\x02\u02C5" +
		"\u02BD\x03\x02\x02\x02\u02C6c\x03\x02\x02\x02\u02C7\u02C8\x07E\x02\x02" +
		"\u02C8\u02C9\x07\x18\x02\x02\u02C9\u02CA\x05r:\x02\u02CA\u02CB\x07\x17" +
		"\x02\x02\u02CB\u02D9\x03\x02\x02\x02\u02CC\u02CD\t\x0F\x02\x02\u02CD\u02CE" +
		"\x07\x18\x02\x02\u02CE\u02CF\x07-\x02\x02\u02CF\u02D9\x07\x17\x02\x02" +
		"\u02D0\u02D4\t\x10\x02\x02\u02D1\u02D3\v\x02\x02\x02\u02D2\u02D1\x03\x02" +
		"\x02\x02\u02D3\u02D6\x03\x02\x02\x02\u02D4\u02D5\x03\x02\x02\x02\u02D4" +
		"\u02D2\x03\x02\x02\x02\u02D5\u02D7\x03\x02\x02\x02\u02D6\u02D4\x03\x02" +
		"\x02\x02\u02D7\u02D9\x07\x17\x02\x02\u02D8\u02C7\x03\x02\x02\x02\u02D8" +
		"\u02CC\x03\x02\x02\x02\u02D8\u02D0\x03\x02\x02\x02\u02D9e\x03\x02\x02" +
		"\x02\u02DA\u02DE\x05h5\x02\u02DB\u02DD\x05n8\x02\u02DC\u02DB\x03\x02\x02" +
		"\x02\u02DD\u02E0\x03\x02\x02\x02\u02DE\u02DC\x03\x02\x02\x02\u02DE\u02DF" +
		"\x03\x02\x02\x02\u02DFg\x03\x02\x02\x02\u02E0\u02DE\x03\x02\x02\x02\u02E1" +
		"\u02E2\x05l7\x02\u02E2\u02E3\x07\x18\x02\x02\u02E3\u02E4\x05r:\x02\u02E4" +
		"\u02E9\x07\x17\x02\x02\u02E5\u02E6\x07G\x02\x02\u02E6\u02E7\x05\xA6T\x02" +
		"\u02E7\u02E8\x07\x17\x02\x02\u02E8\u02EA\x03\x02\x02\x02\u02E9\u02E5\x03" +
		"\x02\x02\x02\u02E9\u02EA\x03\x02\x02\x02\u02EAi\x03\x02\x02\x02\u02EB" +
		"\u02EE\x07S\x02\x02\u02EC\u02ED\x07\x18\x02\x02\u02ED\u02EF\x07)\x02\x02" +
		"\u02EE\u02EC\x03\x02\x02\x02\u02EE\u02EF\x03\x02\x02\x02\u02EF\u02F6\x03" +
		"\x02\x02\x02\u02F0\u02F3\x07h\x02\x02\u02F1\u02F2\x07\x18\x02\x02\u02F2" +
		"\u02F4\x07)\x02\x02\u02F3\u02F1\x03\x02\x02\x02\u02F3\u02F4\x03\x02\x02" +
		"\x02\u02F4\u02F6\x03\x02\x02\x02\u02F5\u02EB\x03\x02\x02\x02\u02F5\u02F0" +
		"\x03\x02\x02\x02\u02F6k\x03\x02\x02\x02\u02F7\u02FA\x07]\x02\x02\u02F8" +
		"\u02F9\x07\x18\x02\x02\u02F9\u02FB\x07)\x02\x02\u02FA\u02F8\x03\x02\x02" +
		"\x02\u02FA\u02FB\x03\x02\x02\x02\u02FB\u0307\x03\x02\x02\x02\u02FC\u02FF" +
		"\x07q\x02\x02\u02FD\u02FE\x07\x18\x02\x02\u02FE\u0300\x07)\x02\x02\u02FF" +
		"\u02FD\x03\x02\x02\x02\u02FF\u0300\x03\x02\x02\x02\u0300\u0307\x03\x02" +
		"\x02\x02\u0301\u0304\x07\x81\x02\x02\u0302\u0303\x07\x18\x02\x02\u0303" +
		"\u0305\x07)\x02\x02\u0304\u0302\x03\x02\x02\x02\u0304\u0305\x03\x02\x02" +
		"\x02\u0305\u0307\x03\x02\x02\x02\u0306\u02F7\x03\x02\x02\x02\u0306\u02FC" +
		"\x03\x02\x02\x02\u0306\u0301\x03\x02\x02\x02\u0307m\x03\x02\x02\x02\u0308" +
		"\u0309\x07\x10\x02\x02\u0309\u030C\x05\x9EP\x02\u030A\u030C\x07E\x02\x02" +
		"\u030B\u0308\x03\x02\x02\x02\u030B\u030A\x03\x02\x02\x02\u030C\u030D\x03" +
		"\x02\x02\x02\u030D\u0311\x07\x18\x02\x02\u030E\u0310\x07\x04\x02\x02\u030F" +
		"\u030E\x03\x02\x02\x02\u0310\u0313\x03\x02\x02\x02\u0311\u030F\x03\x02" +
		"\x02\x02\u0311\u0312\x03\x02\x02\x02\u0312\u0316\x03\x02\x02\x02\u0313" +
		"\u0311\x03\x02\x02\x02\u0314\u0317\x05\x9EP\x02\u0315\u0317\x07/\x02\x02" +
		"\u0316\u0314\x03\x02\x02\x02\u0316\u0315\x03\x02\x02\x02\u0317\u0318\x03" +
		"\x02\x02\x02\u0318\u0316\x03\x02\x02\x02\u0318\u0319\x03\x02\x02\x02\u0319" +
		"\u031A\x03\x02\x02\x02\u031A\u0328\x07\x17\x02\x02\u031B\u031C\t\x0F\x02" +
		"\x02\u031C\u031D\x07\x18\x02\x02\u031D\u031E\x07-\x02\x02\u031E\u0328" +
		"\x07\x17\x02\x02\u031F\u0323\t\x10\x02\x02\u0320\u0322\v\x02\x02\x02\u0321" +
		"\u0320\x03\x02\x02\x02\u0322\u0325\x03\x02\x02\x02\u0323\u0324\x03\x02" +
		"\x02\x02\u0323\u0321\x03\x02\x02\x02\u0324\u0326\x03\x02\x02\x02\u0325" +
		"\u0323\x03\x02\x02\x02\u0326\u0328\x07\x17\x02\x02\u0327\u030B\x03\x02" +
		"\x02\x02\u0327\u031B\x03\x02\x02\x02\u0327\u031F\x03\x02\x02\x02\u0328" +
		"o\x03\x02\x02\x02\u0329\u032A\x07\x96\x02\x02\u032A\u032B\x07\x1B\x02" +
		"\x02\u032B\u032C\x07-\x02\x02\u032Cq\x03\x02\x02\x02\u032D\u032E\x07\x99" +
		"\x02\x02\u032Es\x03\x02\x02\x02\u032F\u0330\x07\x15\x02\x02\u0330\u0338" +
		"\x07\x17\x02\x02\u0331\u0333\x07\x04\x02\x02\u0332\u0331\x03\x02\x02\x02" +
		"\u0333\u0336\x03\x02\x02\x02\u0334\u0332\x03\x02\x02\x02\u0334\u0335\x03" +
		"\x02\x02\x02\u0335\u0337\x03\x02\x02\x02\u0336\u0334\x03\x02\x02\x02\u0337" +
		"\u0339\x05v<\x02\u0338\u0334\x03\x02\x02\x02\u0338\u0339\x03\x02\x02\x02" +
		"\u0339\u034E\x03\x02\x02\x02\u033A\u033B\x07\x15\x02\x02\u033B\u0340\x05" +
		"\x9EP\x02\u033C\u033F\x07\x18\x02\x02\u033D\u033F\x05\x9EP\x02\u033E\u033C" +
		"\x03\x02\x02\x02\u033E\u033D\x03\x02\x02\x02\u033F\u0342\x03\x02\x02\x02" +
		"\u0340\u033E\x03\x02\x02\x02\u0340\u0341\x03\x02\x02\x02\u0341\u0343\x03" +
		"\x02\x02\x02\u0342\u0340\x03\x02\x02\x02\u0343\u034B\x07\x17\x02\x02\u0344" +
		"\u0346\x07\x04\x02\x02\u0345\u0344\x03\x02\x02\x02\u0346\u0349\x03\x02" +
		"\x02\x02\u0347\u0345\x03\x02\x02\x02\u0347\u0348\x03\x02\x02\x02\u0348" +
		"\u034A\x03\x02\x02\x02\u0349\u0347\x03\x02\x02\x02\u034A\u034C\x05v<\x02" +
		"\u034B\u0347\x03\x02\x02\x02\u034B\u034C\x03\x02\x02\x02\u034C\u034E\x03" +
		"\x02\x02\x02\u034D\u032F\x03\x02\x02\x02\u034D\u033A\x03\x02\x02\x02\u034E" +
		"u\x03\x02\x02\x02\u034F\u0350\x07\x15\x02\x02\u0350\u0355\x05\x9EP\x02" +
		"\u0351\u0354\x07\x18\x02\x02\u0352\u0354\x05\x9EP\x02\u0353\u0351\x03" +
		"\x02\x02\x02\u0353\u0352\x03\x02\x02\x02\u0354\u0357\x03\x02\x02\x02\u0355" +
		"\u0353\x03\x02\x02\x02\u0355\u0356\x03\x02\x02\x02\u0356\u0358\x03\x02" +
		"\x02\x02\u0357\u0355\x03\x02\x02\x02\u0358\u0359\x07\x17\x02\x02\u0359" +
		"w\x03\x02\x02\x02\u035A\u035C\x07\n\x02\x02\u035B\u035D\x05\x9EP\x02\u035C" +
		"\u035B\x03\x02\x02\x02\u035C\u035D\x03\x02\x02\x02\u035D\u035E\x03\x02" +
		"\x02\x02\u035E\u0365\x07\x17\x02\x02\u035F\u0361\x07\v\x02\x02\u0360\u0362" +
		"\x05\x9EP\x02\u0361\u0360\x03\x02\x02\x02\u0361\u0362\x03\x02\x02\x02" +
		"\u0362\u0363\x03\x02\x02\x02\u0363\u0365\x07\x17\x02\x02\u0364\u035A\x03" +
		"\x02\x02\x02\u0364\u035F\x03\x02\x02\x02\u0365y\x03\x02\x02\x02\u0366" +
		"\u036E\x07>\x02\x02\u0367\u036E\x07<\x02\x02\u0368\u036A\x07=\x02\x02" +
		"\u0369\u036B\x072\x02\x02\u036A\u0369\x03\x02\x02\x02\u036A\u036B\x03" +
		"\x02\x02\x02\u036B\u036C\x03\x02\x02\x02\u036C\u036E\x07\x02\x02\x03\u036D" +
		"\u0366\x03\x02\x02\x02\u036D\u0367\x03\x02\x02\x02\u036D\u0368\x03\x02" +
		"\x02\x02\u036E{\x03\x02\x02\x02\u036F\u0371\x07g\x02\x02\u0370\u0372\x05" +
		"\x9EP\x02\u0371\u0370\x03\x02\x02\x02\u0371\u0372\x03\x02\x02\x02\u0372" +
		"\u0388\x03\x02\x02\x02\u0373\u037D\x05\x9EP\x02\u0374\u0378\x07/\x02\x02" +
		"\u0375\u0377\x07\x04\x02\x02\u0376\u0375\x03\x02\x02\x02\u0377\u037A\x03" +
		"\x02\x02\x02\u0378\u0376\x03\x02\x02\x02\u0378\u0379\x03\x02\x02\x02\u0379" +
		"\u037C\x03\x02\x02\x02\u037A\u0378\x03\x02\x02\x02\u037B\u0374\x03\x02" +
		"\x02\x02\u037C\u037F\x03\x02\x02\x02\u037D\u037B\x03\x02\x02\x02\u037D" +
		"\u037E\x03\x02\x02\x02\u037E\u0383\x03\x02\x02\x02\u037F\u037D\x03\x02" +
		"\x02\x02\u0380\u0382\x07/\x02\x02\u0381\u0380\x03\x02\x02\x02\u0382\u0385" +
		"\x03\x02\x02\x02\u0383\u0381\x03\x02\x02\x02\u0383\u0384\x03\x02\x02\x02" +
		"\u0384\u0387\x03\x02\x02\x02\u0385\u0383\x03\x02\x02\x02\u0386\u0373\x03" +
		"\x02\x02\x02\u0387\u038A\x03\x02\x02\x02\u0388\u0386\x03\x02\x02\x02\u0388" +
		"\u0389\x03\x02\x02\x02\u0389\u038B\x03\x02\x02\x02\u038A\u0388\x03\x02" +
		"\x02\x02\u038B\u0397\x07\x17\x02\x02\u038C\u0392\x07g\x02\x02\u038D\u0391" +
		"\x05\x9EP\x02\u038E\u0391\x07/\x02\x02\u038F\u0391\x07\x04\x02\x02\u0390" +
		"\u038D\x03\x02\x02\x02\u0390\u038E\x03\x02\x02\x02\u0390\u038F\x03\x02" +
		"\x02\x02\u0391\u0394\x03\x02\x02\x02\u0392\u0390\x03\x02\x02\x02\u0392" +
		"\u0393\x03\x02\x02\x02\u0393\u0395\x03\x02\x02\x02\u0394\u0392\x03\x02" +
		"\x02\x02\u0395\u0397\x07\x02\x02\x03\u0396\u036F\x03\x02\x02\x02\u0396" +
		"\u038C\x03\x02\x02\x02\u0397}\x03\x02\x02\x02\u0398\u039D\x076\x02\x02" +
		"\u0399\u039E\x05\x9EP\x02\u039A\u039E\x07\x18\x02\x02\u039B\u039E\x07" +
		"\x99\x02\x02\u039C\u039E\x07/\x02\x02\u039D\u0399\x03\x02\x02\x02\u039D" +
		"\u039A\x03\x02\x02\x02\u039D\u039B\x03\x02\x02\x02\u039D\u039C\x03\x02" +
		"\x02\x02\u039E\u039F\x03\x02\x02\x02\u039F\u039D\x03\x02\x02\x02\u039F" +
		"\u03A0\x03\x02\x02\x02\u03A0\u03A1\x03\x02\x02\x02\u03A1\u03AF\x07\x17" +
		"\x02\x02\u03A2\u03AA\x076\x02\x02\u03A3\u03A9\x05\x9EP\x02\u03A4\u03A9" +
		"\x07\x18\x02\x02\u03A5\u03A9\x07\x99\x02\x02\u03A6\u03A9\x07/\x02\x02" +
		"\u03A7\u03A9\x07\x04\x02\x02\u03A8\u03A3\x03\x02\x02\x02\u03A8\u03A4\x03" +
		"\x02\x02\x02\u03A8\u03A5\x03\x02\x02\x02\u03A8\u03A6\x03\x02\x02\x02\u03A8" +
		"\u03A7\x03\x02\x02\x02\u03A9\u03AC\x03\x02\x02\x02\u03AA\u03A8\x03\x02" +
		"\x02\x02\u03AA\u03AB\x03\x02\x02\x02\u03AB\u03AD\x03\x02\x02\x02\u03AC" +
		"\u03AA\x03\x02\x02\x02\u03AD\u03AF\x07\x02\x02\x03\u03AE\u0398\x03\x02" +
		"\x02\x02\u03AE\u03A2\x03\x02\x02\x02\u03AF\x7F\x03\x02\x02\x02\u03B0\u03B1" +
		"\x075\x02\x02\u03B1\u03B2\x05\x9EP\x02\u03B2\u03B3\x07\x17\x02\x02\u03B3" +
		"\x81\x03\x02\x02\x02\u03B4\u03B8\x07P\x02\x02\u03B5\u03B9\x05\x9EP\x02" +
		"\u03B6\u03B9\x07\x18\x02\x02\u03B7\u03B9\x07/\x02\x02\u03B8\u03B5\x03" +
		"\x02\x02\x02\u03B8\u03B6\x03\x02\x02\x02\u03B8\u03B7\x03\x02\x02\x02\u03B9" +
		"\u03BA\x03\x02\x02\x02\u03BA\u03B8\x03\x02\x02\x02\u03BA\u03BB\x03\x02" +
		"\x02\x02\u03BB\u03BC\x03\x02\x02\x02\u03BC\u03BE\x07\x17\x02\x02\u03BD" +
		"\u03BF\x05\x84C\x02\u03BE\u03BD\x03\x02\x02\x02\u03BE\u03BF\x03\x02\x02" +
		"\x02\u03BF\x83\x03\x02\x02\x02\u03C0\u03C4\x07P\x02\x02\u03C1\u03C5\x05" +
		"\x9EP\x02\u03C2\u03C5\x07\x18\x02\x02\u03C3\u03C5\x07/\x02\x02\u03C4\u03C1" +
		"\x03\x02\x02\x02\u03C4\u03C2\x03\x02\x02\x02\u03C4\u03C3\x03\x02\x02\x02" +
		"\u03C5\u03C6\x03\x02\x02\x02\u03C6\u03C4\x03\x02\x02\x02\u03C6\u03C7\x03" +
		"\x02\x02\x02\u03C7\u03C8\x03\x02\x02\x02\u03C8\u03C9\x07\x17\x02\x02\u03C9" +
		"\x85\x03\x02\x02\x02\u03CA\u03CE\x07\x0E\x02\x02\u03CB\u03CD\x07/\x02" +
		"\x02\u03CC\u03CB\x03\x02\x02\x02\u03CD\u03D0\x03\x02\x02\x02\u03CE\u03CC" +
		"\x03\x02\x02\x02\u03CE\u03CF\x03\x02\x02\x02\u03CF\u03D2\x03\x02\x02\x02" +
		"\u03D0\u03CE\x03\x02\x02\x02\u03D1\u03D3\x05\x9EP\x02\u03D2\u03D1\x03" +
		"\x02\x02\x02\u03D2\u03D3\x03\x02\x02\x02\u03D3\u03E3\x03\x02\x02\x02\u03D4" +
		"\u03D8\x07/\x02\x02\u03D5\u03D7\x07\x04\x02\x02\u03D6\u03D5\x03\x02\x02" +
		"\x02\u03D7\u03DA\x03\x02\x02\x02\u03D8\u03D6\x03\x02\x02\x02\u03D8\u03D9" +
		"\x03\x02\x02\x02\u03D9\u03DC\x03\x02\x02\x02\u03DA\u03D8\x03\x02\x02\x02" +
		"\u03DB\u03D4\x03\x02\x02\x02\u03DC\u03DF\x03\x02\x02\x02\u03DD\u03DB\x03" +
		"\x02\x02\x02\u03DD\u03DE\x03\x02\x02\x02\u03DE\u03E0\x03\x02\x02\x02\u03DF" +
		"\u03DD\x03\x02\x02\x02\u03E0\u03E2\x05\x9EP\x02\u03E1\u03DD\x03\x02\x02" +
		"\x02\u03E2\u03E5\x03\x02\x02\x02\u03E3\u03E1\x03\x02\x02\x02\u03E3\u03E4" +
		"\x03\x02\x02\x02\u03E4\u03E9\x03\x02\x02\x02\u03E5\u03E3\x03\x02\x02\x02" +
		"\u03E6\u03E8\x07/\x02\x02\u03E7\u03E6\x03\x02\x02\x02\u03E8\u03EB\x03" +
		"\x02\x02\x02\u03E9\u03E7\x03\x02\x02\x02\u03E9\u03EA\x03\x02\x02\x02\u03EA" +
		"\u03EC\x03\x02\x02\x02\u03EB\u03E9\x03\x02\x02\x02\u03EC\u03F9\x07\x17" +
		"\x02\x02\u03ED\u03F1\x07\x0E\x02\x02\u03EE\u03F0\x07/\x02\x02\u03EF\u03EE" +
		"\x03\x02\x02\x02\u03F0\u03F3\x03\x02\x02\x02\u03F1\u03EF\x03\x02\x02\x02" +
		"\u03F1\u03F2\x03\x02\x02\x02\u03F2\u03F5\x03\x02\x02\x02\u03F3\u03F1\x03" +
		"\x02\x02\x02\u03F4\u03F6\x05\x9EP\x02\u03F5\u03F4\x03\x02\x02\x02\u03F5" +
		"\u03F6\x03\x02\x02\x02\u03F6\u03F7\x03\x02\x02\x02\u03F7\u03F9\x07\x02" +
		"\x02\x03\u03F8\u03CA\x03\x02\x02\x02\u03F8\u03ED\x03\x02\x02\x02\u03F9" +
		"\x87\x03\x02\x02\x02\u03FA\u03FC\x07\x0F\x02\x02\u03FB\u03FD\n\x11\x02" +
		"\x02\u03FC\u03FB\x03\x02\x02\x02\u03FD\u03FE\x03\x02\x02\x02\u03FE\u03FC" +
		"\x03\x02\x02\x02\u03FE\u03FF\x03\x02\x02\x02\u03FF\u0400\x03\x02\x02\x02" +
		"\u0400\u0401\x07\x17\x02\x02\u0401\x89\x03\x02\x02\x02\u0402\u0405\x07" +
		"\x16\x02\x02\u0403\u0406\x05\x9EP\x02\u0404\u0406\x07/\x02\x02\u0405\u0403" +
		"\x03\x02\x02\x02\u0405\u0404\x03\x02\x02\x02\u0406\u0407\x03\x02\x02\x02" +
		"\u0407\u0405\x03\x02\x02\x02\u0407\u0408\x03\x02\x02\x02\u0408\u0409\x03" +
		"\x02\x02\x02\u0409\u040F\x07\x17\x02\x02\u040A\u040B\x07\x16\x02\x02\u040B" +
		"\u040C\x05\x9EP\x02\u040C\u040D\x07\x02\x02\x03\u040D\u040F\x03\x02\x02" +
		"\x02\u040E\u0402\x03\x02\x02\x02\u040E\u040A\x03\x02\x02\x02\u040F\x8B" +
		"\x03\x02\x02\x02\u0410\u0411\x07B\x02\x02\u0411\u0412\x05\x9EP\x02\u0412" +
		"\u0413\x07\x17\x02\x02\u0413\u0419\x03\x02\x02\x02\u0414\u0415\x07C\x02" +
		"\x02\u0415\u0416\x05\x9EP\x02\u0416\u0417\x07\x17\x02\x02\u0417\u0419" +
		"\x03\x02\x02\x02\u0418\u0410\x03\x02\x02\x02\u0418\u0414\x03\x02\x02\x02" +
		"\u0419\x8D\x03\x02\x02\x02\u041A\u041B\x079\x02\x02\u041B\u041C\x07\x18";
	private static readonly _serializedATNSegment2: string =
		"\x02\x02\u041C\u041D\x07-\x02\x02\u041D\u0424\x07\x17\x02\x02\u041E\u041F" +
		"\x079\x02\x02\u041F\u0420\x07\x18\x02\x02\u0420\u0421\x05\x9EP\x02\u0421" +
		"\u0422\x07\x17\x02\x02\u0422\u0424\x03\x02\x02\x02\u0423\u041A\x03\x02" +
		"\x02\x02\u0423\u041E\x03\x02\x02\x02\u0424\x8F\x03\x02\x02\x02\u0425\u0426" +
		"\x07N\x02\x02\u0426\u0427\x05\x9EP\x02\u0427\u0428\x07\x17\x02\x02\u0428" +
		"\x91\x03\x02\x02\x02\u0429\u042A\x07O\x02\x02\u042A\u042B\x05\x9EP\x02" +
		"\u042B\u042C\x07\x17\x02\x02\u042C\x93\x03\x02\x02\x02\u042D\u0437\x05" +
		"\x96L\x02\u042E\u0430\x07/\x02\x02\u042F\u042E\x03\x02\x02\x02\u0430\u0433" +
		"\x03\x02\x02\x02\u0431\u042F\x03\x02\x02\x02\u0431\u0432\x03\x02\x02\x02" +
		"\u0432\u0434\x03\x02\x02\x02\u0433\u0431\x03\x02\x02\x02\u0434\u0436\x05" +
		"\x96L\x02\u0435\u0431\x03\x02\x02\x02\u0436\u0439\x03\x02\x02\x02\u0437" +
		"\u0435\x03\x02\x02\x02\u0437\u0438\x03\x02\x02\x02\u0438\x95\x03\x02\x02" +
		"\x02\u0439\u0437\x03\x02\x02\x02\u043A\u043B\x07\x10\x02\x02\u043B\u043C" +
		"\x05\x9EP\x02\u043C\u043D\t\x12\x02\x02\u043D\u0443\x05\x9EP\x02\u043E" +
		"\u0442\x07/\x02\x02\u043F\u0442\x07\x18\x02\x02\u0440\u0442\x05\x9EP\x02" +
		"\u0441\u043E\x03\x02\x02\x02\u0441\u043F\x03\x02\x02\x02\u0441\u0440\x03" +
		"\x02\x02\x02\u0442\u0445\x03\x02\x02\x02\u0443\u0441\x03\x02\x02\x02\u0443" +
		"\u0444\x03\x02\x02\x02\u0444\u0446\x03\x02\x02\x02\u0445\u0443\x03\x02" +
		"\x02\x02\u0446\u0447\x07\x17\x02\x02\u0447\u0452\x03\x02\x02\x02\u0448" +
		"\u044C\x07L\x02\x02\u0449\u044B\v\x02\x02\x02\u044A\u0449\x03\x02\x02" +
		"\x02\u044B\u044E\x03\x02\x02\x02\u044C\u044D\x03\x02\x02\x02\u044C\u044A" +
		"\x03\x02\x02\x02\u044D\u044F\x03\x02\x02\x02\u044E\u044C\x03\x02\x02\x02" +
		"\u044F\u0452\x07\x17\x02\x02\u0450\u0452\x07?\x02\x02\u0451\u043A\x03" +
		"\x02\x02\x02\u0451\u0448\x03\x02\x02\x02\u0451\u0450\x03\x02\x02\x02\u0452" +
		"\x97\x03\x02\x02\x02\u0453\u0457\x07\x07\x02\x02\u0454\u0458\x05\x9EP" +
		"\x02\u0455\u0458\x07\x18\x02\x02\u0456\u0458\x07/\x02\x02\u0457\u0454" +
		"\x03\x02\x02\x02\u0457\u0455\x03\x02\x02\x02\u0457\u0456\x03\x02\x02\x02" +
		"\u0458\u0459\x03\x02\x02\x02\u0459\u0457\x03\x02\x02\x02\u0459\u045A\x03" +
		"\x02\x02\x02\u045A\u045B\x03\x02\x02\x02\u045B\u0467\x07\x17\x02\x02\u045C" +
		"\u0462\x07\x07\x02\x02\u045D\u0461\x05\x9EP\x02\u045E\u0461\x07\x18\x02" +
		"\x02\u045F\u0461\x07/\x02\x02\u0460\u045D\x03\x02\x02\x02\u0460\u045E" +
		"\x03\x02\x02\x02\u0460\u045F\x03\x02\x02\x02\u0461\u0464\x03\x02\x02\x02" +
		"\u0462\u0460\x03\x02\x02\x02\u0462\u0463\x03\x02\x02\x02\u0463\u0465\x03" +
		"\x02\x02\x02\u0464\u0462\x03\x02\x02\x02\u0465\u0467\x07\x02\x02\x03\u0466" +
		"\u0453\x03\x02\x02\x02\u0466\u045C\x03\x02\x02\x02\u0467\x99\x03\x02\x02" +
		"\x02\u0468\u046A\x07\f\x02\x02\u0469\u046B\x05\x9EP\x02\u046A\u0469\x03" +
		"\x02\x02\x02\u046A\u046B\x03\x02\x02\x02\u046B\u046C\x03\x02\x02\x02\u046C" +
		"\u046D\x07\x17\x02\x02\u046D\x9B\x03\x02\x02\x02\u046E\u0470\x05\x9EP" +
		"\x02\u046F\u0471\x07/\x02\x02\u0470\u046F\x03\x02\x02\x02\u0470\u0471" +
		"\x03\x02\x02\x02\u0471\u0473\x03\x02\x02\x02\u0472\u046E\x03\x02\x02\x02" +
		"\u0473\u0474\x03\x02\x02\x02\u0474\u0472\x03\x02\x02\x02\u0474\u0475\x03" +
		"\x02\x02\x02\u0475\x9D\x03\x02\x02\x02\u0476\u047D\x07.\x02\x02\u0477" +
		"\u0479\x07\x04\x02\x02\u0478\u0477\x03\x02\x02\x02\u0479\u047A\x03\x02" +
		"\x02\x02\u047A\u0478\x03\x02\x02\x02\u047A\u047B\x03\x02\x02\x02\u047B" +
		"\u047C\x03\x02\x02\x02\u047C\u047E\x07-\x02\x02\u047D\u0478\x03\x02\x02" +
		"\x02\u047D\u047E\x03\x02\x02\x02\u047E\u04A5\x03\x02\x02\x02\u047F\u0486" +
		"\x05\xA6T\x02\u0480\u0482\x07\x04\x02\x02\u0481\u0480\x03\x02\x02\x02" +
		"\u0482\u0483\x03\x02\x02\x02\u0483\u0481\x03\x02\x02\x02\u0483\u0484\x03" +
		"\x02\x02\x02\u0484\u0485\x03\x02\x02\x02\u0485\u0487\x07-\x02\x02\u0486" +
		"\u0481\x03\x02\x02\x02\u0486\u0487\x03\x02\x02\x02\u0487\u04A5\x03\x02" +
		"\x02\x02\u0488\u0489\x07\x13\x02\x02\u0489\u048A\x05\x9EP\x02\u048A\u048B" +
		"\x07\x17\x02\x02\u048B\u04A5\x03\x02\x02\x02\u048C\u04A5\x07-\x02\x02" +
		"\u048D\u048F\x07\x04\x02\x02\u048E\u048D\x03\x02\x02\x02\u048F\u0492\x03" +
		"\x02\x02\x02\u0490\u048E\x03\x02\x02\x02\u0490\u0491\x03\x02\x02\x02\u0491" +
		"\u0493\x03\x02\x02\x02\u0492\u0490\x03\x02\x02\x02\u0493\u0497\x07\x18" +
		"\x02\x02\u0494\u0496\x07\x04\x02\x02\u0495\u0494\x03\x02\x02\x02\u0496" +
		"\u0499\x03\x02\x02\x02\u0497\u0495\x03\x02\x02\x02\u0497\u0498\x03\x02" +
		"\x02\x02\u0498\u04A5\x03\x02\x02\x02\u0499\u0497\x03\x02\x02\x02\u049A" +
		"\u049E\x07\x19\x02\x02\u049B\u049D\x07\x04\x02\x02\u049C\u049B\x03\x02" +
		"\x02\x02\u049D\u04A0\x03\x02\x02\x02\u049E\u049C\x03\x02\x02\x02\u049E" +
		"\u049F\x03\x02\x02\x02\u049F\u04A5\x03\x02\x02\x02\u04A0\u049E\x03\x02" +
		"\x02\x02\u04A1\u04A5\x07\x1A\x02\x02\u04A2\u04A5\x07\x1F\x02\x02\u04A3" +
		"\u04A5\x07\x99\x02\x02\u04A4\u0476\x03\x02\x02\x02\u04A4\u047F\x03\x02" +
		"\x02\x02\u04A4\u0488\x03\x02\x02\x02\u04A4\u048C\x03\x02\x02\x02\u04A4" +
		"\u0490\x03\x02\x02\x02\u04A4\u049A\x03\x02\x02\x02\u04A4\u04A1\x03\x02" +
		"\x02\x02\u04A4\u04A2\x03\x02\x02\x02\u04A4\u04A3\x03\x02\x02\x02\u04A5" +
		"\x9F\x03\x02\x02\x02\u04A6\u04A7\x07\'\x02\x02\u04A7\xA1\x03\x02\x02\x02" +
		"\u04A8\u04A9\x07\x17\x02\x02\u04A9\xA3\x03\x02\x02\x02\u04AA\u04AB\t\x13" +
		"\x02\x02\u04AB\xA5\x03\x02\x02\x02\u04AC\u04B8\x072\x02\x02\u04AD\u04B8" +
		"\x070\x02\x02\u04AE\u04B8\x073\x02\x02\u04AF\u04B8\x071\x02\x02\u04B0" +
		"\u04B8\x07\x19\x02\x02\u04B1\u04B2\x07\x1D\x02\x02\u04B2\u04B8\n\x14\x02" +
		"\x02\u04B3\u04B4\x07\x1E\x02\x02\u04B4\u04B8\n\x15\x02\x02\u04B5\u04B8" +
		"\x07!\x02\x02\u04B6\u04B8\x07 \x02\x02\u04B7\u04AC\x03\x02\x02\x02\u04B7" +
		"\u04AD\x03\x02\x02\x02\u04B7\u04AE\x03\x02\x02\x02\u04B7\u04AF\x03\x02" +
		"\x02\x02\u04B7\u04B0\x03\x02\x02\x02\u04B7\u04B1\x03\x02\x02\x02\u04B7" +
		"\u04B3\x03\x02\x02\x02\u04B7\u04B5\x03\x02\x02\x02\u04B7\u04B6\x03\x02" +
		"\x02\x02\u04B8\u04B9\x03\x02\x02\x02\u04B9\u04B7\x03\x02\x02\x02\u04B9" +
		"\u04BA\x03\x02\x02\x02\u04BA\xA7\x03\x02\x02\x02\u04BB\u04BC\x07\x04\x02" +
		"\x02\u04BC\xA9\x03\x02\x02\x02\xAF\xAE\xB4\xB9\xBE\xC7\xCF\xD6\xDB\xE4" +
		"\xEA\xEF\xF6\xFD\u0103\u0106\u0108\u0110\u0117\u011C\u0125\u012C\u0131" +
		"\u0135\u013A\u0140\u0146\u014D\u0153\u0156\u0158\u0162\u0167\u016A\u016F" +
		"\u0174\u0178\u017D\u0181\u0184\u0189\u018B\u0190\u0195\u0197\u019C\u01A1" +
		"\u01A3\u01BF\u01C9\u01CB\u01D2\u01D7\u01E0\u01E9\u01EF\u01F1\u01FF\u0207" +
		"\u020C\u0210\u0214\u0216\u021B\u0232\u0237\u023C\u023E\u0248\u0252\u025C" +
		"\u0262\u0269\u026F\u0277\u0281\u028C\u0292\u0297\u029E\u02A7\u02AB\u02AF" +
		"\u02B2\u02C1\u02C5\u02D4\u02D8\u02DE\u02E9\u02EE\u02F3\u02F5\u02FA\u02FF" +
		"\u0304\u0306\u030B\u0311\u0316\u0318\u0323\u0327\u0334\u0338\u033E\u0340" +
		"\u0347\u034B\u034D\u0353\u0355\u035C\u0361\u0364\u036A\u036D\u0371\u0378" +
		"\u037D\u0383\u0388\u0390\u0392\u0396\u039D\u039F\u03A8\u03AA\u03AE\u03B8" +
		"\u03BA\u03BE\u03C4\u03C6\u03CE\u03D2\u03D8\u03DD\u03E3\u03E9\u03F1\u03F5" +
		"\u03F8\u03FE\u0405\u0407\u040E\u0418\u0423\u0431\u0437\u0441\u0443\u044C" +
		"\u0451\u0457\u0459\u0460\u0462\u0466\u046A\u0470\u0474\u047A\u047D\u0483" +
		"\u0486\u0490\u0497\u049E\u04A4\u04B7\u04B9";
	public static readonly _serializedATN: string = Utils.join(
		[
			truefalseParser._serializedATNSegment0,
			truefalseParser._serializedATNSegment1,
			truefalseParser._serializedATNSegment2,
		],
		"",
	);
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!truefalseParser.__ATN) {
			truefalseParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(truefalseParser._serializedATN));
		}

		return truefalseParser.__ATN;
	}

}

export class BitmarkContext extends ParserRuleContext {
	public EOF(): TerminalNode { return this.getToken(truefalseParser.EOF, 0); }
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
			return this.getTokens(truefalseParser.NL);
		} else {
			return this.getToken(truefalseParser.NL, i);
		}
	}
	public S(): TerminalNode[];
	public S(i: number): TerminalNode;
	public S(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(truefalseParser.S);
		} else {
			return this.getToken(truefalseParser.S, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return truefalseParser.RULE_bitmark; }
	// @Override
	public enterRule(listener: truefalseParserListener): void {
		if (listener.enterBitmark) {
			listener.enterBitmark(this);
		}
	}
	// @Override
	public exitRule(listener: truefalseParserListener): void {
		if (listener.exitBitmark) {
			listener.exitBitmark(this);
		}
	}
}


export class Bitmark_Context extends ParserRuleContext {
	public truefalses(): TruefalsesContext {
		return this.getRuleContext(0, TruefalsesContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return truefalseParser.RULE_bitmark_; }
	// @Override
	public enterRule(listener: truefalseParserListener): void {
		if (listener.enterBitmark_) {
			listener.enterBitmark_(this);
		}
	}
	// @Override
	public exitRule(listener: truefalseParserListener): void {
		if (listener.exitBitmark_) {
			listener.exitBitmark_(this);
		}
	}
}


export class TruefalsesContext extends ParserRuleContext {
	public true_false_1(): True_false_1Context | undefined {
		return this.tryGetRuleContext(0, True_false_1Context);
	}
	public true_false(): True_falseContext | undefined {
		return this.tryGetRuleContext(0, True_falseContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return truefalseParser.RULE_truefalses; }
	// @Override
	public enterRule(listener: truefalseParserListener): void {
		if (listener.enterTruefalses) {
			listener.enterTruefalses(this);
		}
	}
	// @Override
	public exitRule(listener: truefalseParserListener): void {
		if (listener.exitTruefalses) {
			listener.exitTruefalses(this);
		}
	}
}


export class True_false_1Context extends ParserRuleContext {
	public BitTruefalse1(): TerminalNode { return this.getToken(truefalseParser.BitTruefalse1, 0); }
	public format(): FormatContext {
		return this.getRuleContext(0, FormatContext);
	}
	public CL(): TerminalNode { return this.getToken(truefalseParser.CL, 0); }
	public NL(): TerminalNode[];
	public NL(i: number): TerminalNode;
	public NL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(truefalseParser.NL);
		} else {
			return this.getToken(truefalseParser.NL, i);
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
	public choices(): ChoicesContext | undefined {
		return this.tryGetRuleContext(0, ChoicesContext);
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
	public get ruleIndex(): number { return truefalseParser.RULE_true_false_1; }
	// @Override
	public enterRule(listener: truefalseParserListener): void {
		if (listener.enterTrue_false_1) {
			listener.enterTrue_false_1(this);
		}
	}
	// @Override
	public exitRule(listener: truefalseParserListener): void {
		if (listener.exitTrue_false_1) {
			listener.exitTrue_false_1(this);
		}
	}
}


export class True_falseContext extends ParserRuleContext {
	public BitTruefalse(): TerminalNode { return this.getToken(truefalseParser.BitTruefalse, 0); }
	public format(): FormatContext {
		return this.getRuleContext(0, FormatContext);
	}
	public CL(): TerminalNode { return this.getToken(truefalseParser.CL, 0); }
	public NL(): TerminalNode[];
	public NL(i: number): TerminalNode;
	public NL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(truefalseParser.NL);
		} else {
			return this.getToken(truefalseParser.NL, i);
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
	public mcrsep_end(): Mcrsep_endContext | undefined {
		return this.tryGetRuleContext(0, Mcrsep_endContext);
	}
	public choices(): ChoicesContext[];
	public choices(i: number): ChoicesContext;
	public choices(i?: number): ChoicesContext | ChoicesContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ChoicesContext);
		} else {
			return this.getRuleContext(i, ChoicesContext);
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
	public mcrsep(): McrsepContext[];
	public mcrsep(i: number): McrsepContext;
	public mcrsep(i?: number): McrsepContext | McrsepContext[] {
		if (i === undefined) {
			return this.getRuleContexts(McrsepContext);
		} else {
			return this.getRuleContext(i, McrsepContext);
		}
	}
	public tfmisc(): TfmiscContext[];
	public tfmisc(i: number): TfmiscContext;
	public tfmisc(i?: number): TfmiscContext | TfmiscContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TfmiscContext);
		} else {
			return this.getRuleContext(i, TfmiscContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return truefalseParser.RULE_true_false; }
	// @Override
	public enterRule(listener: truefalseParserListener): void {
		if (listener.enterTrue_false) {
			listener.enterTrue_false(this);
		}
	}
	// @Override
	public exitRule(listener: truefalseParserListener): void {
		if (listener.exitTrue_false) {
			listener.exitTrue_false(this);
		}
	}
}


export class McrsepContext extends ParserRuleContext {
	public HSPL(): TerminalNode | undefined { return this.tryGetToken(truefalseParser.HSPL, 0); }
	public HSPL2(): TerminalNode | undefined { return this.tryGetToken(truefalseParser.HSPL2, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return truefalseParser.RULE_mcrsep; }
	// @Override
	public enterRule(listener: truefalseParserListener): void {
		if (listener.enterMcrsep) {
			listener.enterMcrsep(this);
		}
	}
	// @Override
	public exitRule(listener: truefalseParserListener): void {
		if (listener.exitMcrsep) {
			listener.exitMcrsep(this);
		}
	}
}


export class Mcrsep_endContext extends ParserRuleContext {
	public HSPL(): TerminalNode | undefined { return this.tryGetToken(truefalseParser.HSPL, 0); }
	public HSPL2(): TerminalNode | undefined { return this.tryGetToken(truefalseParser.HSPL2, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return truefalseParser.RULE_mcrsep_end; }
	// @Override
	public enterRule(listener: truefalseParserListener): void {
		if (listener.enterMcrsep_end) {
			listener.enterMcrsep_end(this);
		}
	}
	// @Override
	public exitRule(listener: truefalseParserListener): void {
		if (listener.exitMcrsep_end) {
			listener.exitMcrsep_end(this);
		}
	}
}


export class TfmiscContext extends ParserRuleContext {
	public bitElem(): BitElemContext | undefined {
		return this.tryGetRuleContext(0, BitElemContext);
	}
	public NL(): TerminalNode[];
	public NL(i: number): TerminalNode;
	public NL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(truefalseParser.NL);
		} else {
			return this.getToken(truefalseParser.NL, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return truefalseParser.RULE_tfmisc; }
	// @Override
	public enterRule(listener: truefalseParserListener): void {
		if (listener.enterTfmisc) {
			listener.enterTfmisc(this);
		}
	}
	// @Override
	public exitRule(listener: truefalseParserListener): void {
		if (listener.exitTfmisc) {
			listener.exitTfmisc(this);
		}
	}
}


export class ChoicesContext extends ParserRuleContext {
	public cplus(): CplusContext[];
	public cplus(i: number): CplusContext;
	public cplus(i?: number): CplusContext | CplusContext[] {
		if (i === undefined) {
			return this.getRuleContexts(CplusContext);
		} else {
			return this.getRuleContext(i, CplusContext);
		}
	}
	public cminus(): CminusContext[];
	public cminus(i: number): CminusContext;
	public cminus(i?: number): CminusContext | CminusContext[] {
		if (i === undefined) {
			return this.getRuleContexts(CminusContext);
		} else {
			return this.getRuleContext(i, CminusContext);
		}
	}
	public NL(): TerminalNode[];
	public NL(i: number): TerminalNode;
	public NL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(truefalseParser.NL);
		} else {
			return this.getToken(truefalseParser.NL, i);
		}
	}
	public S(): TerminalNode[];
	public S(i: number): TerminalNode;
	public S(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(truefalseParser.S);
		} else {
			return this.getToken(truefalseParser.S, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return truefalseParser.RULE_choices; }
	// @Override
	public enterRule(listener: truefalseParserListener): void {
		if (listener.enterChoices) {
			listener.enterChoices(this);
		}
	}
	// @Override
	public exitRule(listener: truefalseParserListener): void {
		if (listener.exitChoices) {
			listener.exitChoices(this);
		}
	}
}


export class CplusContext extends ParserRuleContext {
	public choice_plus(): Choice_plusContext {
		return this.getRuleContext(0, Choice_plusContext);
	}
	public example(): ExampleContext | undefined {
		return this.tryGetRuleContext(0, ExampleContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return truefalseParser.RULE_cplus; }
	// @Override
	public enterRule(listener: truefalseParserListener): void {
		if (listener.enterCplus) {
			listener.enterCplus(this);
		}
	}
	// @Override
	public exitRule(listener: truefalseParserListener): void {
		if (listener.exitCplus) {
			listener.exitCplus(this);
		}
	}
}


export class CminusContext extends ParserRuleContext {
	public choice_minus(): Choice_minusContext {
		return this.getRuleContext(0, Choice_minusContext);
	}
	public example(): ExampleContext | undefined {
		return this.tryGetRuleContext(0, ExampleContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return truefalseParser.RULE_cminus; }
	// @Override
	public enterRule(listener: truefalseParserListener): void {
		if (listener.enterCminus) {
			listener.enterCminus(this);
		}
	}
	// @Override
	public exitRule(listener: truefalseParserListener): void {
		if (listener.exitCminus) {
			listener.exitCminus(this);
		}
	}
}


export class Choice_plusContext extends ParserRuleContext {
	public OPP(): TerminalNode { return this.getToken(truefalseParser.OPP, 0); }
	public CL(): TerminalNode { return this.getToken(truefalseParser.CL, 0); }
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
	public NL(): TerminalNode[];
	public NL(i: number): TerminalNode;
	public NL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(truefalseParser.NL);
		} else {
			return this.getToken(truefalseParser.NL, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return truefalseParser.RULE_choice_plus; }
	// @Override
	public enterRule(listener: truefalseParserListener): void {
		if (listener.enterChoice_plus) {
			listener.enterChoice_plus(this);
		}
	}
	// @Override
	public exitRule(listener: truefalseParserListener): void {
		if (listener.exitChoice_plus) {
			listener.exitChoice_plus(this);
		}
	}
}


export class Choice_minusContext extends ParserRuleContext {
	public OPM(): TerminalNode { return this.getToken(truefalseParser.OPM, 0); }
	public CL(): TerminalNode { return this.getToken(truefalseParser.CL, 0); }
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
	public NL(): TerminalNode[];
	public NL(i: number): TerminalNode;
	public NL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(truefalseParser.NL);
		} else {
			return this.getToken(truefalseParser.NL, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return truefalseParser.RULE_choice_minus; }
	// @Override
	public enterRule(listener: truefalseParserListener): void {
		if (listener.enterChoice_minus) {
			listener.enterChoice_minus(this);
		}
	}
	// @Override
	public exitRule(listener: truefalseParserListener): void {
		if (listener.exitChoice_minus) {
			listener.exitChoice_minus(this);
		}
	}
}


export class Choice_starContext extends ParserRuleContext {
	public OPR(): TerminalNode { return this.getToken(truefalseParser.OPR, 0); }
	public CL(): TerminalNode { return this.getToken(truefalseParser.CL, 0); }
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
	public NL(): TerminalNode[];
	public NL(i: number): TerminalNode;
	public NL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(truefalseParser.NL);
		} else {
			return this.getToken(truefalseParser.NL, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return truefalseParser.RULE_choice_star; }
	// @Override
	public enterRule(listener: truefalseParserListener): void {
		if (listener.enterChoice_star) {
			listener.enterChoice_star(this);
		}
	}
	// @Override
	public exitRule(listener: truefalseParserListener): void {
		if (listener.exitChoice_star) {
			listener.exitChoice_star(this);
		}
	}
}


export class BitElemContext extends ParserRuleContext {
	public LIST_LINE(): TerminalNode | undefined { return this.tryGetToken(truefalseParser.LIST_LINE, 0); }
	public NOTBITMARK(): TerminalNode | undefined { return this.tryGetToken(truefalseParser.NOTBITMARK, 0); }
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
	public get ruleIndex(): number { return truefalseParser.RULE_bitElem; }
	// @Override
	public enterRule(listener: truefalseParserListener): void {
		if (listener.enterBitElem) {
			listener.enterBitElem(this);
		}
	}
	// @Override
	public exitRule(listener: truefalseParserListener): void {
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
	public get ruleIndex(): number { return truefalseParser.RULE_resource; }
	// @Override
	public enterRule(listener: truefalseParserListener): void {
		if (listener.enterResource) {
			listener.enterResource(this);
		}
	}
	// @Override
	public exitRule(listener: truefalseParserListener): void {
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
	public get ruleIndex(): number { return truefalseParser.RULE_gap; }
	// @Override
	public enterRule(listener: truefalseParserListener): void {
		if (listener.enterGap) {
			listener.enterGap(this);
		}
	}
	// @Override
	public exitRule(listener: truefalseParserListener): void {
		if (listener.exitGap) {
			listener.exitGap(this);
		}
	}
}


export class Single_gapContext extends ParserRuleContext {
	public OPU(): TerminalNode { return this.getToken(truefalseParser.OPU, 0); }
	public clnsp(): ClnspContext {
		return this.getRuleContext(0, ClnspContext);
	}
	public NUMERIC(): TerminalNode | undefined { return this.tryGetToken(truefalseParser.NUMERIC, 0); }
	public STRING(): TerminalNode | undefined { return this.tryGetToken(truefalseParser.STRING, 0); }
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
	public get ruleIndex(): number { return truefalseParser.RULE_single_gap; }
	// @Override
	public enterRule(listener: truefalseParserListener): void {
		if (listener.enterSingle_gap) {
			listener.enterSingle_gap(this);
		}
	}
	// @Override
	public exitRule(listener: truefalseParserListener): void {
		if (listener.exitSingle_gap) {
			listener.exitSingle_gap(this);
		}
	}
}


export class Bullet_itemContext extends ParserRuleContext {
	public OPBUL(): TerminalNode { return this.getToken(truefalseParser.OPBUL, 0); }
	public s_and_w(): S_and_wContext {
		return this.getRuleContext(0, S_and_wContext);
	}
	public CL(): TerminalNode { return this.getToken(truefalseParser.CL, 0); }
	public atpoint(): AtpointContext | undefined {
		return this.tryGetRuleContext(0, AtpointContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return truefalseParser.RULE_bullet_item; }
	// @Override
	public enterRule(listener: truefalseParserListener): void {
		if (listener.enterBullet_item) {
			listener.enterBullet_item(this);
		}
	}
	// @Override
	public exitRule(listener: truefalseParserListener): void {
		if (listener.exitBullet_item) {
			listener.exitBullet_item(this);
		}
	}
}


export class AtpointContext extends ParserRuleContext {
	public AtPoints(): TerminalNode { return this.getToken(truefalseParser.AtPoints, 0); }
	public NUMERIC(): TerminalNode { return this.getToken(truefalseParser.NUMERIC, 0); }
	public CL(): TerminalNode { return this.getToken(truefalseParser.CL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return truefalseParser.RULE_atpoint; }
	// @Override
	public enterRule(listener: truefalseParserListener): void {
		if (listener.enterAtpoint) {
			listener.enterAtpoint(this);
		}
	}
	// @Override
	public exitRule(listener: truefalseParserListener): void {
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
			return this.getTokens(truefalseParser.ColonText);
		} else {
			return this.getToken(truefalseParser.ColonText, i);
		}
	}
	public ColonJson(): TerminalNode[];
	public ColonJson(i: number): TerminalNode;
	public ColonJson(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(truefalseParser.ColonJson);
		} else {
			return this.getToken(truefalseParser.ColonJson, i);
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
	public get ruleIndex(): number { return truefalseParser.RULE_format; }
	// @Override
	public enterRule(listener: truefalseParserListener): void {
		if (listener.enterFormat) {
			listener.enterFormat(this);
		}
	}
	// @Override
	public exitRule(listener: truefalseParserListener): void {
		if (listener.exitFormat) {
			listener.exitFormat(this);
		}
	}
}


export class Resource_formatContext extends ParserRuleContext {
	public BitmarkMinus(): TerminalNode | undefined { return this.tryGetToken(truefalseParser.BitmarkMinus, 0); }
	public BitmarkPlus(): TerminalNode | undefined { return this.tryGetToken(truefalseParser.BitmarkPlus, 0); }
	public Prosemirror(): TerminalNode | undefined { return this.tryGetToken(truefalseParser.Prosemirror, 0); }
	public Placeholder(): TerminalNode | undefined { return this.tryGetToken(truefalseParser.Placeholder, 0); }
	public ColonJson(): TerminalNode | undefined { return this.tryGetToken(truefalseParser.ColonJson, 0); }
	public AmpArticle(): TerminalNode | undefined { return this.tryGetToken(truefalseParser.AmpArticle, 0); }
	public AmpDocument(): TerminalNode | undefined { return this.tryGetToken(truefalseParser.AmpDocument, 0); }
	public AmpWebsite(): TerminalNode | undefined { return this.tryGetToken(truefalseParser.AmpWebsite, 0); }
	public AmpStillImageFilm(): TerminalNode | undefined { return this.tryGetToken(truefalseParser.AmpStillImageFilm, 0); }
	public AmpAudioLink(): TerminalNode | undefined { return this.tryGetToken(truefalseParser.AmpAudioLink, 0); }
	public AmpImageLink(): TerminalNode | undefined { return this.tryGetToken(truefalseParser.AmpImageLink, 0); }
	public AmpVideoLink(): TerminalNode | undefined { return this.tryGetToken(truefalseParser.AmpVideoLink, 0); }
	public AmpArticleLink(): TerminalNode | undefined { return this.tryGetToken(truefalseParser.AmpArticleLink, 0); }
	public AmpDocumentLink(): TerminalNode | undefined { return this.tryGetToken(truefalseParser.AmpDocumentLink, 0); }
	public AmpAppLink(): TerminalNode | undefined { return this.tryGetToken(truefalseParser.AmpAppLink, 0); }
	public AmpWebsiteLink(): TerminalNode | undefined { return this.tryGetToken(truefalseParser.AmpWebsiteLink, 0); }
	public AmpStillImageFilmLink(): TerminalNode | undefined { return this.tryGetToken(truefalseParser.AmpStillImageFilmLink, 0); }
	public AmpVideoEmbed(): TerminalNode | undefined { return this.tryGetToken(truefalseParser.AmpVideoEmbed, 0); }
	public AmpAudioEmbed(): TerminalNode | undefined { return this.tryGetToken(truefalseParser.AmpAudioEmbed, 0); }
	public AmpDocumentEmbed(): TerminalNode | undefined { return this.tryGetToken(truefalseParser.AmpDocumentEmbed, 0); }
	public AmpStillImageFilmEmbed(): TerminalNode | undefined { return this.tryGetToken(truefalseParser.AmpStillImageFilmEmbed, 0); }
	public AmpDocumentDownload(): TerminalNode | undefined { return this.tryGetToken(truefalseParser.AmpDocumentDownload, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return truefalseParser.RULE_resource_format; }
	// @Override
	public enterRule(listener: truefalseParserListener): void {
		if (listener.enterResource_format) {
			listener.enterResource_format(this);
		}
	}
	// @Override
	public exitRule(listener: truefalseParserListener): void {
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
	public AmpPdf(): TerminalNode | undefined { return this.tryGetToken(truefalseParser.AmpPdf, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return truefalseParser.RULE_resource_format_extra; }
	// @Override
	public enterRule(listener: truefalseParserListener): void {
		if (listener.enterResource_format_extra) {
			listener.enterResource_format_extra(this);
		}
	}
	// @Override
	public exitRule(listener: truefalseParserListener): void {
		if (listener.exitResource_format_extra) {
			listener.exitResource_format_extra(this);
		}
	}
}


export class Format2Context extends ParserRuleContext {
	public BitmarkMinus(): TerminalNode | undefined { return this.tryGetToken(truefalseParser.BitmarkMinus, 0); }
	public BitmarkPlus(): TerminalNode | undefined { return this.tryGetToken(truefalseParser.BitmarkPlus, 0); }
	public ColonText(): TerminalNode | undefined { return this.tryGetToken(truefalseParser.ColonText, 0); }
	public Placeholder(): TerminalNode | undefined { return this.tryGetToken(truefalseParser.Placeholder, 0); }
	public ColonJson(): TerminalNode | undefined { return this.tryGetToken(truefalseParser.ColonJson, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return truefalseParser.RULE_format2; }
	// @Override
	public enterRule(listener: truefalseParserListener): void {
		if (listener.enterFormat2) {
			listener.enterFormat2(this);
		}
	}
	// @Override
	public exitRule(listener: truefalseParserListener): void {
		if (listener.exitFormat2) {
			listener.exitFormat2(this);
		}
	}
}


export class Image_formatContext extends ParserRuleContext {
	public AmpImage(): TerminalNode | undefined { return this.tryGetToken(truefalseParser.AmpImage, 0); }
	public Image_type(): TerminalNode | undefined { return this.tryGetToken(truefalseParser.Image_type, 0); }
	public DotArticleAtt(): TerminalNode | undefined { return this.tryGetToken(truefalseParser.DotArticleAtt, 0); }
	public AmpImageLink(): TerminalNode | undefined { return this.tryGetToken(truefalseParser.AmpImageLink, 0); }
	public AmpImageZoom(): TerminalNode | undefined { return this.tryGetToken(truefalseParser.AmpImageZoom, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return truefalseParser.RULE_image_format; }
	// @Override
	public enterRule(listener: truefalseParserListener): void {
		if (listener.enterImage_format) {
			listener.enterImage_format(this);
		}
	}
	// @Override
	public exitRule(listener: truefalseParserListener): void {
		if (listener.exitImage_format) {
			listener.exitImage_format(this);
		}
	}
}


export class Video_formatContext extends ParserRuleContext {
	public AmpVideo(): TerminalNode | undefined { return this.tryGetToken(truefalseParser.AmpVideo, 0); }
	public AmpVideoLink(): TerminalNode | undefined { return this.tryGetToken(truefalseParser.AmpVideoLink, 0); }
	public AmpVideoEmbed(): TerminalNode | undefined { return this.tryGetToken(truefalseParser.AmpVideoEmbed, 0); }
	public COLON(): TerminalNode | undefined { return this.tryGetToken(truefalseParser.COLON, 0); }
	public Video_type(): TerminalNode | undefined { return this.tryGetToken(truefalseParser.Video_type, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return truefalseParser.RULE_video_format; }
	// @Override
	public enterRule(listener: truefalseParserListener): void {
		if (listener.enterVideo_format) {
			listener.enterVideo_format(this);
		}
	}
	// @Override
	public exitRule(listener: truefalseParserListener): void {
		if (listener.exitVideo_format) {
			listener.exitVideo_format(this);
		}
	}
}


export class Article_formatContext extends ParserRuleContext {
	public AmpArticle(): TerminalNode | undefined { return this.tryGetToken(truefalseParser.AmpArticle, 0); }
	public AmpArticleLink(): TerminalNode | undefined { return this.tryGetToken(truefalseParser.AmpArticleLink, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return truefalseParser.RULE_article_format; }
	// @Override
	public enterRule(listener: truefalseParserListener): void {
		if (listener.enterArticle_format) {
			listener.enterArticle_format(this);
		}
	}
	// @Override
	public exitRule(listener: truefalseParserListener): void {
		if (listener.exitArticle_format) {
			listener.exitArticle_format(this);
		}
	}
}


export class Document_formatContext extends ParserRuleContext {
	public AmpDocument(): TerminalNode | undefined { return this.tryGetToken(truefalseParser.AmpDocument, 0); }
	public AmpDocumentLink(): TerminalNode | undefined { return this.tryGetToken(truefalseParser.AmpDocumentLink, 0); }
	public AmpDocumentDownload(): TerminalNode | undefined { return this.tryGetToken(truefalseParser.AmpDocumentDownload, 0); }
	public AmpDocumentEmbed(): TerminalNode | undefined { return this.tryGetToken(truefalseParser.AmpDocumentEmbed, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return truefalseParser.RULE_document_format; }
	// @Override
	public enterRule(listener: truefalseParserListener): void {
		if (listener.enterDocument_format) {
			listener.enterDocument_format(this);
		}
	}
	// @Override
	public exitRule(listener: truefalseParserListener): void {
		if (listener.exitDocument_format) {
			listener.exitDocument_format(this);
		}
	}
}


export class App_formatContext extends ParserRuleContext {
	public AmpApp(): TerminalNode | undefined { return this.tryGetToken(truefalseParser.AmpApp, 0); }
	public AmpAppLink(): TerminalNode | undefined { return this.tryGetToken(truefalseParser.AmpAppLink, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return truefalseParser.RULE_app_format; }
	// @Override
	public enterRule(listener: truefalseParserListener): void {
		if (listener.enterApp_format) {
			listener.enterApp_format(this);
		}
	}
	// @Override
	public exitRule(listener: truefalseParserListener): void {
		if (listener.exitApp_format) {
			listener.exitApp_format(this);
		}
	}
}


export class Website_formatContext extends ParserRuleContext {
	public AmpWebsite(): TerminalNode | undefined { return this.tryGetToken(truefalseParser.AmpWebsite, 0); }
	public AmpWebsiteLink(): TerminalNode | undefined { return this.tryGetToken(truefalseParser.AmpWebsiteLink, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return truefalseParser.RULE_website_format; }
	// @Override
	public enterRule(listener: truefalseParserListener): void {
		if (listener.enterWebsite_format) {
			listener.enterWebsite_format(this);
		}
	}
	// @Override
	public exitRule(listener: truefalseParserListener): void {
		if (listener.exitWebsite_format) {
			listener.exitWebsite_format(this);
		}
	}
}


export class Stillimagefilm_formatContext extends ParserRuleContext {
	public AmpStillImageFilm(): TerminalNode | undefined { return this.tryGetToken(truefalseParser.AmpStillImageFilm, 0); }
	public AmpStillImageFilmLink(): TerminalNode | undefined { return this.tryGetToken(truefalseParser.AmpStillImageFilmLink, 0); }
	public AmpStillImageFilmEmbed(): TerminalNode | undefined { return this.tryGetToken(truefalseParser.AmpStillImageFilmEmbed, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return truefalseParser.RULE_stillimagefilm_format; }
	// @Override
	public enterRule(listener: truefalseParserListener): void {
		if (listener.enterStillimagefilm_format) {
			listener.enterStillimagefilm_format(this);
		}
	}
	// @Override
	public exitRule(listener: truefalseParserListener): void {
		if (listener.exitStillimagefilm_format) {
			listener.exitStillimagefilm_format(this);
		}
	}
}


export class Op_article_formatContext extends ParserRuleContext {
	public OpAmpArticleLink(): TerminalNode | undefined { return this.tryGetToken(truefalseParser.OpAmpArticleLink, 0); }
	public OpAmpArticle(): TerminalNode | undefined { return this.tryGetToken(truefalseParser.OpAmpArticle, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return truefalseParser.RULE_op_article_format; }
	// @Override
	public enterRule(listener: truefalseParserListener): void {
		if (listener.enterOp_article_format) {
			listener.enterOp_article_format(this);
		}
	}
	// @Override
	public exitRule(listener: truefalseParserListener): void {
		if (listener.exitOp_article_format) {
			listener.exitOp_article_format(this);
		}
	}
}


export class Op_document_formatContext extends ParserRuleContext {
	public OpAmpDocumentLink(): TerminalNode | undefined { return this.tryGetToken(truefalseParser.OpAmpDocumentLink, 0); }
	public OpAmpDocument(): TerminalNode | undefined { return this.tryGetToken(truefalseParser.OpAmpDocument, 0); }
	public OpAmpDocumentDownload(): TerminalNode | undefined { return this.tryGetToken(truefalseParser.OpAmpDocumentDownload, 0); }
	public OpAmpDocumentEmbed(): TerminalNode | undefined { return this.tryGetToken(truefalseParser.OpAmpDocumentEmbed, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return truefalseParser.RULE_op_document_format; }
	// @Override
	public enterRule(listener: truefalseParserListener): void {
		if (listener.enterOp_document_format) {
			listener.enterOp_document_format(this);
		}
	}
	// @Override
	public exitRule(listener: truefalseParserListener): void {
		if (listener.exitOp_document_format) {
			listener.exitOp_document_format(this);
		}
	}
}


export class Op_app_formatContext extends ParserRuleContext {
	public OpAmpApp(): TerminalNode | undefined { return this.tryGetToken(truefalseParser.OpAmpApp, 0); }
	public OpAmpAppLink(): TerminalNode | undefined { return this.tryGetToken(truefalseParser.OpAmpAppLink, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return truefalseParser.RULE_op_app_format; }
	// @Override
	public enterRule(listener: truefalseParserListener): void {
		if (listener.enterOp_app_format) {
			listener.enterOp_app_format(this);
		}
	}
	// @Override
	public exitRule(listener: truefalseParserListener): void {
		if (listener.exitOp_app_format) {
			listener.exitOp_app_format(this);
		}
	}
}


export class Op_website_formatContext extends ParserRuleContext {
	public OpAmpWebsite(): TerminalNode | undefined { return this.tryGetToken(truefalseParser.OpAmpWebsite, 0); }
	public OpAmpWebsiteLink(): TerminalNode | undefined { return this.tryGetToken(truefalseParser.OpAmpWebsiteLink, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return truefalseParser.RULE_op_website_format; }
	// @Override
	public enterRule(listener: truefalseParserListener): void {
		if (listener.enterOp_website_format) {
			listener.enterOp_website_format(this);
		}
	}
	// @Override
	public exitRule(listener: truefalseParserListener): void {
		if (listener.exitOp_website_format) {
			listener.exitOp_website_format(this);
		}
	}
}


export class Op_video_formatContext extends ParserRuleContext {
	public OpAmpVideo(): TerminalNode | undefined { return this.tryGetToken(truefalseParser.OpAmpVideo, 0); }
	public COLON(): TerminalNode | undefined { return this.tryGetToken(truefalseParser.COLON, 0); }
	public Video_type(): TerminalNode | undefined { return this.tryGetToken(truefalseParser.Video_type, 0); }
	public OpAmpVideoLink(): TerminalNode | undefined { return this.tryGetToken(truefalseParser.OpAmpVideoLink, 0); }
	public OpAmpVideoEmbed(): TerminalNode | undefined { return this.tryGetToken(truefalseParser.OpAmpVideoEmbed, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return truefalseParser.RULE_op_video_format; }
	// @Override
	public enterRule(listener: truefalseParserListener): void {
		if (listener.enterOp_video_format) {
			listener.enterOp_video_format(this);
		}
	}
	// @Override
	public exitRule(listener: truefalseParserListener): void {
		if (listener.exitOp_video_format) {
			listener.exitOp_video_format(this);
		}
	}
}


export class Op_stillimagefilm_formatContext extends ParserRuleContext {
	public OpAmpStillImageFilm(): TerminalNode | undefined { return this.tryGetToken(truefalseParser.OpAmpStillImageFilm, 0); }
	public OpAmpStillImageFilmLink(): TerminalNode | undefined { return this.tryGetToken(truefalseParser.OpAmpStillImageFilmLink, 0); }
	public OpAmpStillImageFilmEmbed(): TerminalNode | undefined { return this.tryGetToken(truefalseParser.OpAmpStillImageFilmEmbed, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return truefalseParser.RULE_op_stillimagefilm_format; }
	// @Override
	public enterRule(listener: truefalseParserListener): void {
		if (listener.enterOp_stillimagefilm_format) {
			listener.enterOp_stillimagefilm_format(this);
		}
	}
	// @Override
	public exitRule(listener: truefalseParserListener): void {
		if (listener.exitOp_stillimagefilm_format) {
			listener.exitOp_stillimagefilm_format(this);
		}
	}
}


export class ArticlebitContext extends ParserRuleContext {
	public op_article_format(): Op_article_formatContext | undefined {
		return this.tryGetRuleContext(0, Op_article_formatContext);
	}
	public COLON(): TerminalNode | undefined { return this.tryGetToken(truefalseParser.COLON, 0); }
	public url(): UrlContext | undefined {
		return this.tryGetRuleContext(0, UrlContext);
	}
	public CL(): TerminalNode | undefined { return this.tryGetToken(truefalseParser.CL, 0); }
	public ArticleText(): TerminalNode | undefined { return this.tryGetToken(truefalseParser.ArticleText, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return truefalseParser.RULE_articlebit; }
	// @Override
	public enterRule(listener: truefalseParserListener): void {
		if (listener.enterArticlebit) {
			listener.enterArticlebit(this);
		}
	}
	// @Override
	public exitRule(listener: truefalseParserListener): void {
		if (listener.exitArticlebit) {
			listener.exitArticlebit(this);
		}
	}
}


export class DocumentbitContext extends ParserRuleContext {
	public op_document_format(): Op_document_formatContext {
		return this.getRuleContext(0, Op_document_formatContext);
	}
	public COLON(): TerminalNode { return this.getToken(truefalseParser.COLON, 0); }
	public url(): UrlContext {
		return this.getRuleContext(0, UrlContext);
	}
	public CL(): TerminalNode[];
	public CL(i: number): TerminalNode;
	public CL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(truefalseParser.CL);
		} else {
			return this.getToken(truefalseParser.CL, i);
		}
	}
	public OPATALT(): TerminalNode | undefined { return this.tryGetToken(truefalseParser.OPATALT, 0); }
	public words(): WordsContext | undefined {
		return this.tryGetRuleContext(0, WordsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return truefalseParser.RULE_documentbit; }
	// @Override
	public enterRule(listener: truefalseParserListener): void {
		if (listener.enterDocumentbit) {
			listener.enterDocumentbit(this);
		}
	}
	// @Override
	public exitRule(listener: truefalseParserListener): void {
		if (listener.exitDocumentbit) {
			listener.exitDocumentbit(this);
		}
	}
}


export class WebsitebitContext extends ParserRuleContext {
	public op_website_format(): Op_website_formatContext {
		return this.getRuleContext(0, Op_website_formatContext);
	}
	public COLON(): TerminalNode { return this.getToken(truefalseParser.COLON, 0); }
	public url(): UrlContext {
		return this.getRuleContext(0, UrlContext);
	}
	public CL(): TerminalNode[];
	public CL(i: number): TerminalNode;
	public CL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(truefalseParser.CL);
		} else {
			return this.getToken(truefalseParser.CL, i);
		}
	}
	public OPATALT(): TerminalNode | undefined { return this.tryGetToken(truefalseParser.OPATALT, 0); }
	public words(): WordsContext | undefined {
		return this.tryGetRuleContext(0, WordsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return truefalseParser.RULE_websitebit; }
	// @Override
	public enterRule(listener: truefalseParserListener): void {
		if (listener.enterWebsitebit) {
			listener.enterWebsitebit(this);
		}
	}
	// @Override
	public exitRule(listener: truefalseParserListener): void {
		if (listener.exitWebsitebit) {
			listener.exitWebsitebit(this);
		}
	}
}


export class AppbitContext extends ParserRuleContext {
	public op_app_format(): Op_app_formatContext {
		return this.getRuleContext(0, Op_app_formatContext);
	}
	public COLON(): TerminalNode { return this.getToken(truefalseParser.COLON, 0); }
	public CL(): TerminalNode[];
	public CL(i: number): TerminalNode;
	public CL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(truefalseParser.CL);
		} else {
			return this.getToken(truefalseParser.CL, i);
		}
	}
	public url(): UrlContext | undefined {
		return this.tryGetRuleContext(0, UrlContext);
	}
	public telephone(): TelephoneContext | undefined {
		return this.tryGetRuleContext(0, TelephoneContext);
	}
	public OPATALT(): TerminalNode | undefined { return this.tryGetToken(truefalseParser.OPATALT, 0); }
	public words(): WordsContext | undefined {
		return this.tryGetRuleContext(0, WordsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return truefalseParser.RULE_appbit; }
	// @Override
	public enterRule(listener: truefalseParserListener): void {
		if (listener.enterAppbit) {
			listener.enterAppbit(this);
		}
	}
	// @Override
	public exitRule(listener: truefalseParserListener): void {
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
	public get ruleIndex(): number { return truefalseParser.RULE_stillimagefilmbit; }
	// @Override
	public enterRule(listener: truefalseParserListener): void {
		if (listener.enterStillimagefilmbit) {
			listener.enterStillimagefilmbit(this);
		}
	}
	// @Override
	public exitRule(listener: truefalseParserListener): void {
		if (listener.exitStillimagefilmbit) {
			listener.exitStillimagefilmbit(this);
		}
	}
}


export class Stillimg_oneContext extends ParserRuleContext {
	public op_stillimagefilm_format(): Op_stillimagefilm_formatContext {
		return this.getRuleContext(0, Op_stillimagefilm_formatContext);
	}
	public COLON(): TerminalNode { return this.getToken(truefalseParser.COLON, 0); }
	public url(): UrlContext {
		return this.getRuleContext(0, UrlContext);
	}
	public CL(): TerminalNode { return this.getToken(truefalseParser.CL, 0); }
	public S(): TerminalNode[];
	public S(i: number): TerminalNode;
	public S(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(truefalseParser.S);
		} else {
			return this.getToken(truefalseParser.S, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return truefalseParser.RULE_stillimg_one; }
	// @Override
	public enterRule(listener: truefalseParserListener): void {
		if (listener.enterStillimg_one) {
			listener.enterStillimg_one(this);
		}
	}
	// @Override
	public exitRule(listener: truefalseParserListener): void {
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
	public get ruleIndex(): number { return truefalseParser.RULE_videobit; }
	// @Override
	public enterRule(listener: truefalseParserListener): void {
		if (listener.enterVideobit) {
			listener.enterVideobit(this);
		}
	}
	// @Override
	public exitRule(listener: truefalseParserListener): void {
		if (listener.exitVideobit) {
			listener.exitVideobit(this);
		}
	}
}


export class Video_oneContext extends ParserRuleContext {
	public op_video_format(): Op_video_formatContext {
		return this.getRuleContext(0, Op_video_formatContext);
	}
	public COLON(): TerminalNode { return this.getToken(truefalseParser.COLON, 0); }
	public url(): UrlContext {
		return this.getRuleContext(0, UrlContext);
	}
	public CL(): TerminalNode[];
	public CL(i: number): TerminalNode;
	public CL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(truefalseParser.CL);
		} else {
			return this.getToken(truefalseParser.CL, i);
		}
	}
	public OPATALT(): TerminalNode | undefined { return this.tryGetToken(truefalseParser.OPATALT, 0); }
	public words(): WordsContext | undefined {
		return this.tryGetRuleContext(0, WordsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return truefalseParser.RULE_video_one; }
	// @Override
	public enterRule(listener: truefalseParserListener): void {
		if (listener.enterVideo_one) {
			listener.enterVideo_one(this);
		}
	}
	// @Override
	public exitRule(listener: truefalseParserListener): void {
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
	public NL(): TerminalNode | undefined { return this.tryGetToken(truefalseParser.NL, 0); }
	public ShowInIndex(): TerminalNode | undefined { return this.tryGetToken(truefalseParser.ShowInIndex, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return truefalseParser.RULE_imagebit; }
	// @Override
	public enterRule(listener: truefalseParserListener): void {
		if (listener.enterImagebit) {
			listener.enterImagebit(this);
		}
	}
	// @Override
	public exitRule(listener: truefalseParserListener): void {
		if (listener.exitImagebit) {
			listener.exitImagebit(this);
		}
	}
}


export class Image_oneContext extends ParserRuleContext {
	public op_image_format(): Op_image_formatContext {
		return this.getRuleContext(0, Op_image_formatContext);
	}
	public COLON(): TerminalNode { return this.getToken(truefalseParser.COLON, 0); }
	public url(): UrlContext {
		return this.getRuleContext(0, UrlContext);
	}
	public CL(): TerminalNode { return this.getToken(truefalseParser.CL, 0); }
	public S(): TerminalNode[];
	public S(i: number): TerminalNode;
	public S(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(truefalseParser.S);
		} else {
			return this.getToken(truefalseParser.S, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return truefalseParser.RULE_image_one; }
	// @Override
	public enterRule(listener: truefalseParserListener): void {
		if (listener.enterImage_one) {
			listener.enterImage_one(this);
		}
	}
	// @Override
	public exitRule(listener: truefalseParserListener): void {
		if (listener.exitImage_one) {
			listener.exitImage_one(this);
		}
	}
}


export class Op_image_formatContext extends ParserRuleContext {
	public OpAmpImage(): TerminalNode | undefined { return this.tryGetToken(truefalseParser.OpAmpImage, 0); }
	public Image_type(): TerminalNode | undefined { return this.tryGetToken(truefalseParser.Image_type, 0); }
	public DotArticleAtt(): TerminalNode | undefined { return this.tryGetToken(truefalseParser.DotArticleAtt, 0); }
	public OpAmpImageLink(): TerminalNode | undefined { return this.tryGetToken(truefalseParser.OpAmpImageLink, 0); }
	public OpAmpImageZoom(): TerminalNode | undefined { return this.tryGetToken(truefalseParser.OpAmpImageZoom, 0); }
	public OpAmpImageWAudio(): TerminalNode | undefined { return this.tryGetToken(truefalseParser.OpAmpImageWAudio, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return truefalseParser.RULE_op_image_format; }
	// @Override
	public enterRule(listener: truefalseParserListener): void {
		if (listener.enterOp_image_format) {
			listener.enterOp_image_format(this);
		}
	}
	// @Override
	public exitRule(listener: truefalseParserListener): void {
		if (listener.exitOp_image_format) {
			listener.exitOp_image_format(this);
		}
	}
}


export class Image_chainedContext extends ParserRuleContext {
	public AtSrc(): TerminalNode | undefined { return this.tryGetToken(truefalseParser.AtSrc, 0); }
	public COLON(): TerminalNode | undefined { return this.tryGetToken(truefalseParser.COLON, 0); }
	public url(): UrlContext | undefined {
		return this.tryGetRuleContext(0, UrlContext);
	}
	public CL(): TerminalNode { return this.getToken(truefalseParser.CL, 0); }
	public NUMERIC(): TerminalNode | undefined { return this.tryGetToken(truefalseParser.NUMERIC, 0); }
	public AtWidth(): TerminalNode | undefined { return this.tryGetToken(truefalseParser.AtWidth, 0); }
	public AtHeight(): TerminalNode | undefined { return this.tryGetToken(truefalseParser.AtHeight, 0); }
	public OPATALT(): TerminalNode | undefined { return this.tryGetToken(truefalseParser.OPATALT, 0); }
	public OpAtCaption(): TerminalNode | undefined { return this.tryGetToken(truefalseParser.OpAtCaption, 0); }
	public OpAtSearch(): TerminalNode | undefined { return this.tryGetToken(truefalseParser.OpAtSearch, 0); }
	public OpAtLicense(): TerminalNode | undefined { return this.tryGetToken(truefalseParser.OpAtLicense, 0); }
	public OpAtCopyright(): TerminalNode | undefined { return this.tryGetToken(truefalseParser.OpAtCopyright, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return truefalseParser.RULE_image_chained; }
	// @Override
	public enterRule(listener: truefalseParserListener): void {
		if (listener.enterImage_chained) {
			listener.enterImage_chained(this);
		}
	}
	// @Override
	public exitRule(listener: truefalseParserListener): void {
		if (listener.exitImage_chained) {
			listener.exitImage_chained(this);
		}
	}
}


export class Image_chained4matchContext extends ParserRuleContext {
	public AtSrc(): TerminalNode | undefined { return this.tryGetToken(truefalseParser.AtSrc, 0); }
	public COLON(): TerminalNode | undefined { return this.tryGetToken(truefalseParser.COLON, 0); }
	public url(): UrlContext | undefined {
		return this.tryGetRuleContext(0, UrlContext);
	}
	public CL(): TerminalNode { return this.getToken(truefalseParser.CL, 0); }
	public NUMERIC(): TerminalNode | undefined { return this.tryGetToken(truefalseParser.NUMERIC, 0); }
	public AtWidth(): TerminalNode | undefined { return this.tryGetToken(truefalseParser.AtWidth, 0); }
	public AtHeight(): TerminalNode | undefined { return this.tryGetToken(truefalseParser.AtHeight, 0); }
	public OPATALT(): TerminalNode | undefined { return this.tryGetToken(truefalseParser.OPATALT, 0); }
	public OpAtCaption(): TerminalNode | undefined { return this.tryGetToken(truefalseParser.OpAtCaption, 0); }
	public OpAtSearch(): TerminalNode | undefined { return this.tryGetToken(truefalseParser.OpAtSearch, 0); }
	public OpAtLicense(): TerminalNode | undefined { return this.tryGetToken(truefalseParser.OpAtLicense, 0); }
	public OpAtCopyright(): TerminalNode | undefined { return this.tryGetToken(truefalseParser.OpAtCopyright, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return truefalseParser.RULE_image_chained4match; }
	// @Override
	public enterRule(listener: truefalseParserListener): void {
		if (listener.enterImage_chained4match) {
			listener.enterImage_chained4match(this);
		}
	}
	// @Override
	public exitRule(listener: truefalseParserListener): void {
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
	public get ruleIndex(): number { return truefalseParser.RULE_audiobit; }
	// @Override
	public enterRule(listener: truefalseParserListener): void {
		if (listener.enterAudiobit) {
			listener.enterAudiobit(this);
		}
	}
	// @Override
	public exitRule(listener: truefalseParserListener): void {
		if (listener.exitAudiobit) {
			listener.exitAudiobit(this);
		}
	}
}


export class Audio_oneContext extends ParserRuleContext {
	public op_audio_format(): Op_audio_formatContext {
		return this.getRuleContext(0, Op_audio_formatContext);
	}
	public COLON(): TerminalNode { return this.getToken(truefalseParser.COLON, 0); }
	public url(): UrlContext {
		return this.getRuleContext(0, UrlContext);
	}
	public CL(): TerminalNode[];
	public CL(i: number): TerminalNode;
	public CL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(truefalseParser.CL);
		} else {
			return this.getToken(truefalseParser.CL, i);
		}
	}
	public OPATALT(): TerminalNode | undefined { return this.tryGetToken(truefalseParser.OPATALT, 0); }
	public words(): WordsContext | undefined {
		return this.tryGetRuleContext(0, WordsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return truefalseParser.RULE_audio_one; }
	// @Override
	public enterRule(listener: truefalseParserListener): void {
		if (listener.enterAudio_one) {
			listener.enterAudio_one(this);
		}
	}
	// @Override
	public exitRule(listener: truefalseParserListener): void {
		if (listener.exitAudio_one) {
			listener.exitAudio_one(this);
		}
	}
}


export class Audio_formatContext extends ParserRuleContext {
	public AmpAudio(): TerminalNode | undefined { return this.tryGetToken(truefalseParser.AmpAudio, 0); }
	public COLON(): TerminalNode | undefined { return this.tryGetToken(truefalseParser.COLON, 0); }
	public Audio_type(): TerminalNode | undefined { return this.tryGetToken(truefalseParser.Audio_type, 0); }
	public AmpAudioLink(): TerminalNode | undefined { return this.tryGetToken(truefalseParser.AmpAudioLink, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return truefalseParser.RULE_audio_format; }
	// @Override
	public enterRule(listener: truefalseParserListener): void {
		if (listener.enterAudio_format) {
			listener.enterAudio_format(this);
		}
	}
	// @Override
	public exitRule(listener: truefalseParserListener): void {
		if (listener.exitAudio_format) {
			listener.exitAudio_format(this);
		}
	}
}


export class Op_audio_formatContext extends ParserRuleContext {
	public OpAmpAudio(): TerminalNode | undefined { return this.tryGetToken(truefalseParser.OpAmpAudio, 0); }
	public COLON(): TerminalNode | undefined { return this.tryGetToken(truefalseParser.COLON, 0); }
	public Audio_type(): TerminalNode | undefined { return this.tryGetToken(truefalseParser.Audio_type, 0); }
	public OpAmpAudioLink(): TerminalNode | undefined { return this.tryGetToken(truefalseParser.OpAmpAudioLink, 0); }
	public OpAmpAudioEmbed(): TerminalNode | undefined { return this.tryGetToken(truefalseParser.OpAmpAudioEmbed, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return truefalseParser.RULE_op_audio_format; }
	// @Override
	public enterRule(listener: truefalseParserListener): void {
		if (listener.enterOp_audio_format) {
			listener.enterOp_audio_format(this);
		}
	}
	// @Override
	public exitRule(listener: truefalseParserListener): void {
		if (listener.exitOp_audio_format) {
			listener.exitOp_audio_format(this);
		}
	}
}


export class Resource_chainedContext extends ParserRuleContext {
	public COLON(): TerminalNode | undefined { return this.tryGetToken(truefalseParser.COLON, 0); }
	public CL(): TerminalNode { return this.getToken(truefalseParser.CL, 0); }
	public OPA(): TerminalNode | undefined { return this.tryGetToken(truefalseParser.OPA, 0); }
	public s_and_w(): S_and_wContext[];
	public s_and_w(i: number): S_and_wContext;
	public s_and_w(i?: number): S_and_wContext | S_and_wContext[] {
		if (i === undefined) {
			return this.getRuleContexts(S_and_wContext);
		} else {
			return this.getRuleContext(i, S_and_wContext);
		}
	}
	public AtSrc(): TerminalNode | undefined { return this.tryGetToken(truefalseParser.AtSrc, 0); }
	public S(): TerminalNode[];
	public S(i: number): TerminalNode;
	public S(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(truefalseParser.S);
		} else {
			return this.getToken(truefalseParser.S, i);
		}
	}
	public NL(): TerminalNode[];
	public NL(i: number): TerminalNode;
	public NL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(truefalseParser.NL);
		} else {
			return this.getToken(truefalseParser.NL, i);
		}
	}
	public NUMERIC(): TerminalNode | undefined { return this.tryGetToken(truefalseParser.NUMERIC, 0); }
	public AtWidth(): TerminalNode | undefined { return this.tryGetToken(truefalseParser.AtWidth, 0); }
	public AtHeight(): TerminalNode | undefined { return this.tryGetToken(truefalseParser.AtHeight, 0); }
	public OPATALT(): TerminalNode | undefined { return this.tryGetToken(truefalseParser.OPATALT, 0); }
	public OpAtCaption(): TerminalNode | undefined { return this.tryGetToken(truefalseParser.OpAtCaption, 0); }
	public OpAtSearch(): TerminalNode | undefined { return this.tryGetToken(truefalseParser.OpAtSearch, 0); }
	public OpAtLicense(): TerminalNode | undefined { return this.tryGetToken(truefalseParser.OpAtLicense, 0); }
	public OpAtCopyright(): TerminalNode | undefined { return this.tryGetToken(truefalseParser.OpAtCopyright, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return truefalseParser.RULE_resource_chained; }
	// @Override
	public enterRule(listener: truefalseParserListener): void {
		if (listener.enterResource_chained) {
			listener.enterResource_chained(this);
		}
	}
	// @Override
	public exitRule(listener: truefalseParserListener): void {
		if (listener.exitResource_chained) {
			listener.exitResource_chained(this);
		}
	}
}


export class TelephoneContext extends ParserRuleContext {
	public TEL(): TerminalNode { return this.getToken(truefalseParser.TEL, 0); }
	public PLUS(): TerminalNode { return this.getToken(truefalseParser.PLUS, 0); }
	public NUMERIC(): TerminalNode { return this.getToken(truefalseParser.NUMERIC, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return truefalseParser.RULE_telephone; }
	// @Override
	public enterRule(listener: truefalseParserListener): void {
		if (listener.enterTelephone) {
			listener.enterTelephone(this);
		}
	}
	// @Override
	public exitRule(listener: truefalseParserListener): void {
		if (listener.exitTelephone) {
			listener.exitTelephone(this);
		}
	}
}


export class UrlContext extends ParserRuleContext {
	public URL(): TerminalNode { return this.getToken(truefalseParser.URL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return truefalseParser.RULE_url; }
	// @Override
	public enterRule(listener: truefalseParserListener): void {
		if (listener.enterUrl) {
			listener.enterUrl(this);
		}
	}
	// @Override
	public exitRule(listener: truefalseParserListener): void {
		if (listener.exitUrl) {
			listener.exitUrl(this);
		}
	}
}


export class ItemContext extends ParserRuleContext {
	public OPC(): TerminalNode { return this.getToken(truefalseParser.OPC, 0); }
	public CL(): TerminalNode { return this.getToken(truefalseParser.CL, 0); }
	public lead(): LeadContext | undefined {
		return this.tryGetRuleContext(0, LeadContext);
	}
	public S(): TerminalNode[];
	public S(i: number): TerminalNode;
	public S(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(truefalseParser.S);
		} else {
			return this.getToken(truefalseParser.S, i);
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
	public COLON(): TerminalNode[];
	public COLON(i: number): TerminalNode;
	public COLON(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(truefalseParser.COLON);
		} else {
			return this.getToken(truefalseParser.COLON, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return truefalseParser.RULE_item; }
	// @Override
	public enterRule(listener: truefalseParserListener): void {
		if (listener.enterItem) {
			listener.enterItem(this);
		}
	}
	// @Override
	public exitRule(listener: truefalseParserListener): void {
		if (listener.exitItem) {
			listener.exitItem(this);
		}
	}
}


export class LeadContext extends ParserRuleContext {
	public OPC(): TerminalNode { return this.getToken(truefalseParser.OPC, 0); }
	public s_and_w(): S_and_wContext[];
	public s_and_w(i: number): S_and_wContext;
	public s_and_w(i?: number): S_and_wContext | S_and_wContext[] {
		if (i === undefined) {
			return this.getRuleContexts(S_and_wContext);
		} else {
			return this.getRuleContext(i, S_and_wContext);
		}
	}
	public CL(): TerminalNode { return this.getToken(truefalseParser.CL, 0); }
	public COLON(): TerminalNode[];
	public COLON(i: number): TerminalNode;
	public COLON(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(truefalseParser.COLON);
		} else {
			return this.getToken(truefalseParser.COLON, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return truefalseParser.RULE_lead; }
	// @Override
	public enterRule(listener: truefalseParserListener): void {
		if (listener.enterLead) {
			listener.enterLead(this);
		}
	}
	// @Override
	public exitRule(listener: truefalseParserListener): void {
		if (listener.exitLead) {
			listener.exitLead(this);
		}
	}
}


export class AnglerefContext extends ParserRuleContext {
	public OPRANGLES(): TerminalNode | undefined { return this.tryGetToken(truefalseParser.OPRANGLES, 0); }
	public CL(): TerminalNode { return this.getToken(truefalseParser.CL, 0); }
	public s_and_w(): S_and_wContext | undefined {
		return this.tryGetRuleContext(0, S_and_wContext);
	}
	public OPRANGLEL(): TerminalNode | undefined { return this.tryGetToken(truefalseParser.OPRANGLEL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return truefalseParser.RULE_angleref; }
	// @Override
	public enterRule(listener: truefalseParserListener): void {
		if (listener.enterAngleref) {
			listener.enterAngleref(this);
		}
	}
	// @Override
	public exitRule(listener: truefalseParserListener): void {
		if (listener.exitAngleref) {
			listener.exitAngleref(this);
		}
	}
}


export class ExampleContext extends ParserRuleContext {
	public AtExamplecl(): TerminalNode | undefined { return this.tryGetToken(truefalseParser.AtExamplecl, 0); }
	public AtExampleWithStr(): TerminalNode | undefined { return this.tryGetToken(truefalseParser.AtExampleWithStr, 0); }
	public AtExamplecol(): TerminalNode | undefined { return this.tryGetToken(truefalseParser.AtExamplecol, 0); }
	public EOF(): TerminalNode | undefined { return this.tryGetToken(truefalseParser.EOF, 0); }
	public SENTENCE(): TerminalNode | undefined { return this.tryGetToken(truefalseParser.SENTENCE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return truefalseParser.RULE_example; }
	// @Override
	public enterRule(listener: truefalseParserListener): void {
		if (listener.enterExample) {
			listener.enterExample(this);
		}
	}
	// @Override
	public exitRule(listener: truefalseParserListener): void {
		if (listener.exitExample) {
			listener.exitExample(this);
		}
	}
}


export class Bracketed_textContext extends ParserRuleContext {
	public BracEnclose(): TerminalNode { return this.getToken(truefalseParser.BracEnclose, 0); }
	public CL(): TerminalNode | undefined { return this.tryGetToken(truefalseParser.CL, 0); }
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
			return this.getTokens(truefalseParser.NL);
		} else {
			return this.getToken(truefalseParser.NL, i);
		}
	}
	public S(): TerminalNode[];
	public S(i: number): TerminalNode;
	public S(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(truefalseParser.S);
		} else {
			return this.getToken(truefalseParser.S, i);
		}
	}
	public EOF(): TerminalNode | undefined { return this.tryGetToken(truefalseParser.EOF, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return truefalseParser.RULE_bracketed_text; }
	// @Override
	public enterRule(listener: truefalseParserListener): void {
		if (listener.enterBracketed_text) {
			listener.enterBracketed_text(this);
		}
	}
	// @Override
	public exitRule(listener: truefalseParserListener): void {
		if (listener.exitBracketed_text) {
			listener.exitBracketed_text(this);
		}
	}
}


export class ReferenceContext extends ParserRuleContext {
	public AtReference(): TerminalNode { return this.getToken(truefalseParser.AtReference, 0); }
	public CL(): TerminalNode | undefined { return this.tryGetToken(truefalseParser.CL, 0); }
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
			return this.getTokens(truefalseParser.COLON);
		} else {
			return this.getToken(truefalseParser.COLON, i);
		}
	}
	public URL(): TerminalNode[];
	public URL(i: number): TerminalNode;
	public URL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(truefalseParser.URL);
		} else {
			return this.getToken(truefalseParser.URL, i);
		}
	}
	public NL(): TerminalNode[];
	public NL(i: number): TerminalNode;
	public NL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(truefalseParser.NL);
		} else {
			return this.getToken(truefalseParser.NL, i);
		}
	}
	public EOF(): TerminalNode | undefined { return this.tryGetToken(truefalseParser.EOF, 0); }
	public S(): TerminalNode[];
	public S(i: number): TerminalNode;
	public S(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(truefalseParser.S);
		} else {
			return this.getToken(truefalseParser.S, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return truefalseParser.RULE_reference; }
	// @Override
	public enterRule(listener: truefalseParserListener): void {
		if (listener.enterReference) {
			listener.enterReference(this);
		}
	}
	// @Override
	public exitRule(listener: truefalseParserListener): void {
		if (listener.exitReference) {
			listener.exitReference(this);
		}
	}
}


export class ProgressContext extends ParserRuleContext {
	public AtProgress(): TerminalNode { return this.getToken(truefalseParser.AtProgress, 0); }
	public s_and_w(): S_and_wContext {
		return this.getRuleContext(0, S_and_wContext);
	}
	public CL(): TerminalNode { return this.getToken(truefalseParser.CL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return truefalseParser.RULE_progress; }
	// @Override
	public enterRule(listener: truefalseParserListener): void {
		if (listener.enterProgress) {
			listener.enterProgress(this);
		}
	}
	// @Override
	public exitRule(listener: truefalseParserListener): void {
		if (listener.exitProgress) {
			listener.exitProgress(this);
		}
	}
}


export class DatepropContext extends ParserRuleContext {
	public AtDate(): TerminalNode { return this.getToken(truefalseParser.AtDate, 0); }
	public CL(): TerminalNode { return this.getToken(truefalseParser.CL, 0); }
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
			return this.getTokens(truefalseParser.COLON);
		} else {
			return this.getToken(truefalseParser.COLON, i);
		}
	}
	public NL(): TerminalNode[];
	public NL(i: number): TerminalNode;
	public NL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(truefalseParser.NL);
		} else {
			return this.getToken(truefalseParser.NL, i);
		}
	}
	public dateprop_chained(): Dateprop_chainedContext | undefined {
		return this.tryGetRuleContext(0, Dateprop_chainedContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return truefalseParser.RULE_dateprop; }
	// @Override
	public enterRule(listener: truefalseParserListener): void {
		if (listener.enterDateprop) {
			listener.enterDateprop(this);
		}
	}
	// @Override
	public exitRule(listener: truefalseParserListener): void {
		if (listener.exitDateprop) {
			listener.exitDateprop(this);
		}
	}
}


export class Dateprop_chainedContext extends ParserRuleContext {
	public AtDate(): TerminalNode { return this.getToken(truefalseParser.AtDate, 0); }
	public CL(): TerminalNode { return this.getToken(truefalseParser.CL, 0); }
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
			return this.getTokens(truefalseParser.COLON);
		} else {
			return this.getToken(truefalseParser.COLON, i);
		}
	}
	public NL(): TerminalNode[];
	public NL(i: number): TerminalNode;
	public NL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(truefalseParser.NL);
		} else {
			return this.getToken(truefalseParser.NL, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return truefalseParser.RULE_dateprop_chained; }
	// @Override
	public enterRule(listener: truefalseParserListener): void {
		if (listener.enterDateprop_chained) {
			listener.enterDateprop_chained(this);
		}
	}
	// @Override
	public exitRule(listener: truefalseParserListener): void {
		if (listener.exitDateprop_chained) {
			listener.exitDateprop_chained(this);
		}
	}
}


export class InstructionContext extends ParserRuleContext {
	public OPB(): TerminalNode { return this.getToken(truefalseParser.OPB, 0); }
	public CL(): TerminalNode | undefined { return this.tryGetToken(truefalseParser.CL, 0); }
	public NL(): TerminalNode[];
	public NL(i: number): TerminalNode;
	public NL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(truefalseParser.NL);
		} else {
			return this.getToken(truefalseParser.NL, i);
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
			return this.getTokens(truefalseParser.S);
		} else {
			return this.getToken(truefalseParser.S, i);
		}
	}
	public EOF(): TerminalNode | undefined { return this.tryGetToken(truefalseParser.EOF, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return truefalseParser.RULE_instruction; }
	// @Override
	public enterRule(listener: truefalseParserListener): void {
		if (listener.enterInstruction) {
			listener.enterInstruction(this);
		}
	}
	// @Override
	public exitRule(listener: truefalseParserListener): void {
		if (listener.exitInstruction) {
			listener.exitInstruction(this);
		}
	}
}


export class HintContext extends ParserRuleContext {
	public OPQ(): TerminalNode { return this.getToken(truefalseParser.OPQ, 0); }
	public CL(): TerminalNode[];
	public CL(i: number): TerminalNode;
	public CL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(truefalseParser.CL);
		} else {
			return this.getToken(truefalseParser.CL, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return truefalseParser.RULE_hint; }
	// @Override
	public enterRule(listener: truefalseParserListener): void {
		if (listener.enterHint) {
			listener.enterHint(this);
		}
	}
	// @Override
	public exitRule(listener: truefalseParserListener): void {
		if (listener.exitHint) {
			listener.exitHint(this);
		}
	}
}


export class TitleContext extends ParserRuleContext {
	public OPHASH(): TerminalNode { return this.getToken(truefalseParser.OPHASH, 0); }
	public CL(): TerminalNode | undefined { return this.tryGetToken(truefalseParser.CL, 0); }
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
			return this.getTokens(truefalseParser.NL);
		} else {
			return this.getToken(truefalseParser.NL, i);
		}
	}
	public EOF(): TerminalNode | undefined { return this.tryGetToken(truefalseParser.EOF, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return truefalseParser.RULE_title; }
	// @Override
	public enterRule(listener: truefalseParserListener): void {
		if (listener.enterTitle) {
			listener.enterTitle(this);
		}
	}
	// @Override
	public exitRule(listener: truefalseParserListener): void {
		if (listener.exitTitle) {
			listener.exitTitle(this);
		}
	}
}


export class Bool_labelContext extends ParserRuleContext {
	public AtLabeltrue(): TerminalNode | undefined { return this.tryGetToken(truefalseParser.AtLabeltrue, 0); }
	public s_and_w(): S_and_wContext {
		return this.getRuleContext(0, S_and_wContext);
	}
	public CL(): TerminalNode { return this.getToken(truefalseParser.CL, 0); }
	public AtLabelfalse(): TerminalNode | undefined { return this.tryGetToken(truefalseParser.AtLabelfalse, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return truefalseParser.RULE_bool_label; }
	// @Override
	public enterRule(listener: truefalseParserListener): void {
		if (listener.enterBool_label) {
			listener.enterBool_label(this);
		}
	}
	// @Override
	public exitRule(listener: truefalseParserListener): void {
		if (listener.exitBool_label) {
			listener.exitBool_label(this);
		}
	}
}


export class Progress_pointsContext extends ParserRuleContext {
	public AtProgressPoints(): TerminalNode { return this.getToken(truefalseParser.AtProgressPoints, 0); }
	public COLON(): TerminalNode { return this.getToken(truefalseParser.COLON, 0); }
	public NUMERIC(): TerminalNode | undefined { return this.tryGetToken(truefalseParser.NUMERIC, 0); }
	public CL(): TerminalNode { return this.getToken(truefalseParser.CL, 0); }
	public s_and_w(): S_and_wContext | undefined {
		return this.tryGetRuleContext(0, S_and_wContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return truefalseParser.RULE_progress_points; }
	// @Override
	public enterRule(listener: truefalseParserListener): void {
		if (listener.enterProgress_points) {
			listener.enterProgress_points(this);
		}
	}
	// @Override
	public exitRule(listener: truefalseParserListener): void {
		if (listener.exitProgress_points) {
			listener.exitProgress_points(this);
		}
	}
}


export class IstrackedContext extends ParserRuleContext {
	public OpAtIsTracked(): TerminalNode { return this.getToken(truefalseParser.OpAtIsTracked, 0); }
	public s_and_w(): S_and_wContext {
		return this.getRuleContext(0, S_and_wContext);
	}
	public CL(): TerminalNode { return this.getToken(truefalseParser.CL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return truefalseParser.RULE_istracked; }
	// @Override
	public enterRule(listener: truefalseParserListener): void {
		if (listener.enterIstracked) {
			listener.enterIstracked(this);
		}
	}
	// @Override
	public exitRule(listener: truefalseParserListener): void {
		if (listener.exitIstracked) {
			listener.exitIstracked(this);
		}
	}
}


export class IsinfoonlyContext extends ParserRuleContext {
	public OpAtIsInfoOnly(): TerminalNode { return this.getToken(truefalseParser.OpAtIsInfoOnly, 0); }
	public s_and_w(): S_and_wContext {
		return this.getRuleContext(0, S_and_wContext);
	}
	public CL(): TerminalNode { return this.getToken(truefalseParser.CL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return truefalseParser.RULE_isinfoonly; }
	// @Override
	public enterRule(listener: truefalseParserListener): void {
		if (listener.enterIsinfoonly) {
			listener.enterIsinfoonly(this);
		}
	}
	// @Override
	public exitRule(listener: truefalseParserListener): void {
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
			return this.getTokens(truefalseParser.NL);
		} else {
			return this.getToken(truefalseParser.NL, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return truefalseParser.RULE_atdef; }
	// @Override
	public enterRule(listener: truefalseParserListener): void {
		if (listener.enterAtdef) {
			listener.enterAtdef(this);
		}
	}
	// @Override
	public exitRule(listener: truefalseParserListener): void {
		if (listener.exitAtdef) {
			listener.exitAtdef(this);
		}
	}
}


export class Atdef_Context extends ParserRuleContext {
	public OPA(): TerminalNode | undefined { return this.tryGetToken(truefalseParser.OPA, 0); }
	public s_and_w(): S_and_wContext[];
	public s_and_w(i: number): S_and_wContext;
	public s_and_w(i?: number): S_and_wContext | S_and_wContext[] {
		if (i === undefined) {
			return this.getRuleContexts(S_and_wContext);
		} else {
			return this.getRuleContext(i, S_and_wContext);
		}
	}
	public CL(): TerminalNode | undefined { return this.tryGetToken(truefalseParser.CL, 0); }
	public COLON(): TerminalNode[];
	public COLON(i: number): TerminalNode;
	public COLON(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(truefalseParser.COLON);
		} else {
			return this.getToken(truefalseParser.COLON, i);
		}
	}
	public DBLCOLON(): TerminalNode | undefined { return this.tryGetToken(truefalseParser.DBLCOLON, 0); }
	public NL(): TerminalNode[];
	public NL(i: number): TerminalNode;
	public NL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(truefalseParser.NL);
		} else {
			return this.getToken(truefalseParser.NL, i);
		}
	}
	public OpAtCopyright(): TerminalNode | undefined { return this.tryGetToken(truefalseParser.OpAtCopyright, 0); }
	public AtSampleSolution(): TerminalNode | undefined { return this.tryGetToken(truefalseParser.AtSampleSolution, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return truefalseParser.RULE_atdef_; }
	// @Override
	public enterRule(listener: truefalseParserListener): void {
		if (listener.enterAtdef_) {
			listener.enterAtdef_(this);
		}
	}
	// @Override
	public exitRule(listener: truefalseParserListener): void {
		if (listener.exitAtdef_) {
			listener.exitAtdef_(this);
		}
	}
}


export class DollaransContext extends ParserRuleContext {
	public OPDOLL(): TerminalNode { return this.getToken(truefalseParser.OPDOLL, 0); }
	public CL(): TerminalNode | undefined { return this.tryGetToken(truefalseParser.CL, 0); }
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
			return this.getTokens(truefalseParser.COLON);
		} else {
			return this.getToken(truefalseParser.COLON, i);
		}
	}
	public NL(): TerminalNode[];
	public NL(i: number): TerminalNode;
	public NL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(truefalseParser.NL);
		} else {
			return this.getToken(truefalseParser.NL, i);
		}
	}
	public EOF(): TerminalNode | undefined { return this.tryGetToken(truefalseParser.EOF, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return truefalseParser.RULE_dollarans; }
	// @Override
	public enterRule(listener: truefalseParserListener): void {
		if (listener.enterDollarans) {
			listener.enterDollarans(this);
		}
	}
	// @Override
	public exitRule(listener: truefalseParserListener): void {
		if (listener.exitDollarans) {
			listener.exitDollarans(this);
		}
	}
}


export class AnchorContext extends ParserRuleContext {
	public OPDANGLE(): TerminalNode { return this.getToken(truefalseParser.OPDANGLE, 0); }
	public CL(): TerminalNode { return this.getToken(truefalseParser.CL, 0); }
	public s_and_w(): S_and_wContext | undefined {
		return this.tryGetRuleContext(0, S_and_wContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return truefalseParser.RULE_anchor; }
	// @Override
	public enterRule(listener: truefalseParserListener): void {
		if (listener.enterAnchor) {
			listener.enterAnchor(this);
		}
	}
	// @Override
	public exitRule(listener: truefalseParserListener): void {
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
			return this.getTokens(truefalseParser.NL);
		} else {
			return this.getToken(truefalseParser.NL, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return truefalseParser.RULE_lines; }
	// @Override
	public enterRule(listener: truefalseParserListener): void {
		if (listener.enterLines) {
			listener.enterLines(this);
		}
	}
	// @Override
	public exitRule(listener: truefalseParserListener): void {
		if (listener.exitLines) {
			listener.exitLines(this);
		}
	}
}


export class S_and_wContext extends ParserRuleContext {
	public STRING(): TerminalNode | undefined { return this.tryGetToken(truefalseParser.STRING, 0); }
	public NUMERIC(): TerminalNode | undefined { return this.tryGetToken(truefalseParser.NUMERIC, 0); }
	public S(): TerminalNode[];
	public S(i: number): TerminalNode;
	public S(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(truefalseParser.S);
		} else {
			return this.getToken(truefalseParser.S, i);
		}
	}
	public words(): WordsContext | undefined {
		return this.tryGetRuleContext(0, WordsContext);
	}
	public OPS(): TerminalNode | undefined { return this.tryGetToken(truefalseParser.OPS, 0); }
	public s_and_w(): S_and_wContext | undefined {
		return this.tryGetRuleContext(0, S_and_wContext);
	}
	public CL(): TerminalNode | undefined { return this.tryGetToken(truefalseParser.CL, 0); }
	public COLON(): TerminalNode | undefined { return this.tryGetToken(truefalseParser.COLON, 0); }
	public AMP(): TerminalNode | undefined { return this.tryGetToken(truefalseParser.AMP, 0); }
	public DBLCOLON(): TerminalNode | undefined { return this.tryGetToken(truefalseParser.DBLCOLON, 0); }
	public DBLEQ(): TerminalNode | undefined { return this.tryGetToken(truefalseParser.DBLEQ, 0); }
	public URL(): TerminalNode | undefined { return this.tryGetToken(truefalseParser.URL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return truefalseParser.RULE_s_and_w; }
	// @Override
	public enterRule(listener: truefalseParserListener): void {
		if (listener.enterS_and_w) {
			listener.enterS_and_w(this);
		}
	}
	// @Override
	public exitRule(listener: truefalseParserListener): void {
		if (listener.exitS_and_w) {
			listener.exitS_and_w(this);
		}
	}
}


export class DclinesContext extends ParserRuleContext {
	public DCANY(): TerminalNode { return this.getToken(truefalseParser.DCANY, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return truefalseParser.RULE_dclines; }
	// @Override
	public enterRule(listener: truefalseParserListener): void {
		if (listener.enterDclines) {
			listener.enterDclines(this);
		}
	}
	// @Override
	public exitRule(listener: truefalseParserListener): void {
		if (listener.exitDclines) {
			listener.exitDclines(this);
		}
	}
}


export class ClnspContext extends ParserRuleContext {
	public CL(): TerminalNode { return this.getToken(truefalseParser.CL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return truefalseParser.RULE_clnsp; }
	// @Override
	public enterRule(listener: truefalseParserListener): void {
		if (listener.enterClnsp) {
			listener.enterClnsp(this);
		}
	}
	// @Override
	public exitRule(listener: truefalseParserListener): void {
		if (listener.exitClnsp) {
			listener.exitClnsp(this);
		}
	}
}


export class SsplContext extends ParserRuleContext {
	public SSPL(): TerminalNode | undefined { return this.tryGetToken(truefalseParser.SSPL, 0); }
	public SSPL2(): TerminalNode | undefined { return this.tryGetToken(truefalseParser.SSPL2, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return truefalseParser.RULE_sspl; }
	// @Override
	public enterRule(listener: truefalseParserListener): void {
		if (listener.enterSspl) {
			listener.enterSspl(this);
		}
	}
	// @Override
	public exitRule(listener: truefalseParserListener): void {
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
			return this.getTokens(truefalseParser.SENTENCE);
		} else {
			return this.getToken(truefalseParser.SENTENCE, i);
		}
	}
	public NOTBITMARK(): TerminalNode[];
	public NOTBITMARK(i: number): TerminalNode;
	public NOTBITMARK(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(truefalseParser.NOTBITMARK);
		} else {
			return this.getToken(truefalseParser.NOTBITMARK, i);
		}
	}
	public BARSTRING(): TerminalNode[];
	public BARSTRING(i: number): TerminalNode;
	public BARSTRING(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(truefalseParser.BARSTRING);
		} else {
			return this.getToken(truefalseParser.BARSTRING, i);
		}
	}
	public ELIPSIS(): TerminalNode[];
	public ELIPSIS(i: number): TerminalNode;
	public ELIPSIS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(truefalseParser.ELIPSIS);
		} else {
			return this.getToken(truefalseParser.ELIPSIS, i);
		}
	}
	public AMP(): TerminalNode[];
	public AMP(i: number): TerminalNode;
	public AMP(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(truefalseParser.AMP);
		} else {
			return this.getToken(truefalseParser.AMP, i);
		}
	}
	public Greater(): TerminalNode[];
	public Greater(i: number): TerminalNode;
	public Greater(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(truefalseParser.Greater);
		} else {
			return this.getToken(truefalseParser.Greater, i);
		}
	}
	public Less(): TerminalNode[];
	public Less(i: number): TerminalNode;
	public Less(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(truefalseParser.Less);
		} else {
			return this.getToken(truefalseParser.Less, i);
		}
	}
	public RightArrow(): TerminalNode[];
	public RightArrow(i: number): TerminalNode;
	public RightArrow(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(truefalseParser.RightArrow);
		} else {
			return this.getToken(truefalseParser.RightArrow, i);
		}
	}
	public RightAngle(): TerminalNode[];
	public RightAngle(i: number): TerminalNode;
	public RightAngle(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(truefalseParser.RightAngle);
		} else {
			return this.getToken(truefalseParser.RightAngle, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return truefalseParser.RULE_words; }
	// @Override
	public enterRule(listener: truefalseParserListener): void {
		if (listener.enterWords) {
			listener.enterWords(this);
		}
	}
	// @Override
	public exitRule(listener: truefalseParserListener): void {
		if (listener.exitWords) {
			listener.exitWords(this);
		}
	}
}


export class SpContext extends ParserRuleContext {
	public S(): TerminalNode { return this.getToken(truefalseParser.S, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return truefalseParser.RULE_sp; }
	// @Override
	public enterRule(listener: truefalseParserListener): void {
		if (listener.enterSp) {
			listener.enterSp(this);
		}
	}
	// @Override
	public exitRule(listener: truefalseParserListener): void {
		if (listener.exitSp) {
			listener.exitSp(this);
		}
	}
}


