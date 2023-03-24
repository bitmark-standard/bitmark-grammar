// Generated from ./Sequence/sequenceParser.g4 by ANTLR 4.9.0-SNAPSHOT


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
	public static readonly COMMENT = 4;
	public static readonly Image_type = 5;
	public static readonly Audio_type = 6;
	public static readonly Video_type = 7;
	public static readonly OPDOLL = 8;
	public static readonly OPBUL = 9;
	public static readonly OPESC = 10;
	public static readonly OPRANGLES = 11;
	public static readonly OPRANGLEL = 12;
	public static readonly OPDANGLE = 13;
	public static readonly OPU = 14;
	public static readonly OPB = 15;
	public static readonly OPQ = 16;
	public static readonly OPA = 17;
	public static readonly OPP = 18;
	public static readonly OPM = 19;
	public static readonly OPS = 20;
	public static readonly OPR = 21;
	public static readonly OPC = 22;
	public static readonly OPHASH = 23;
	public static readonly CL = 24;
	public static readonly COLON = 25;
	public static readonly AMP = 26;
	public static readonly DBLCOLON = 27;
	public static readonly PLUS = 28;
	public static readonly DotAt = 29;
	public static readonly Greater = 30;
	public static readonly Less = 31;
	public static readonly RightAngle = 32;
	public static readonly RightArrow = 33;
	public static readonly Dot = 34;
	public static readonly DBLEQ = 35;
	public static readonly DBLMI = 36;
	public static readonly HSPL = 37;
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
	public static readonly AmpImageEmbed = 116;
	public static readonly AmpVideoEmbed = 117;
	public static readonly AmpAudioEmbed = 118;
	public static readonly AmpDocumentEmbed = 119;
	public static readonly AmpStillImageFilmEmbed = 120;
	public static readonly OpAmpImageEmbed = 121;
	public static readonly OpAmpVideoEmbed = 122;
	public static readonly OpAmpAudioEmbed = 123;
	public static readonly OpAmpDocumentEmbed = 124;
	public static readonly OpAmpStillImageFilmEmbed = 125;
	public static readonly BitmarkMinus = 126;
	public static readonly BitmarkPlus = 127;
	public static readonly ColonText = 128;
	public static readonly ColonJson = 129;
	public static readonly Prosemirror = 130;
	public static readonly Placeholder = 131;
	public static readonly BASIC = 132;
	public static readonly JPG = 133;
	public static readonly PNG = 134;
	public static readonly GIF = 135;
	public static readonly SVG = 136;
	public static readonly MP2 = 137;
	public static readonly MP3 = 138;
	public static readonly MP4 = 139;
	public static readonly FLV = 140;
	public static readonly WMV = 141;
	public static readonly MPEG = 142;
	public static readonly MPG = 143;
	public static readonly TEL = 144;
	public static readonly DotArticleAtt = 145;
	public static readonly STAR = 146;
	public static readonly URL = 147;
	public static readonly LIST_LINE = 148;
	public static readonly ENCLBARS = 149;
	public static readonly RULE_bitmark = 0;
	public static readonly RULE_bitmark_ = 1;
	public static readonly RULE_bit = 2;
	public static readonly RULE_sequence = 3;
	public static readonly RULE_seqstr = 4;
	public static readonly RULE_mmm = 5;
	public static readonly RULE_bitElem = 6;
	public static readonly RULE_gap = 7;
	public static readonly RULE_single_gap = 8;
	public static readonly RULE_choice_plus = 9;
	public static readonly RULE_choice_minus = 10;
	public static readonly RULE_choice_star = 11;
	public static readonly RULE_resource = 12;
	public static readonly RULE_bullet_item = 13;
	public static readonly RULE_atpoint = 14;
	public static readonly RULE_format = 15;
	public static readonly RULE_resource_format = 16;
	public static readonly RULE_resource_format_extra = 17;
	public static readonly RULE_format2 = 18;
	public static readonly RULE_image_format = 19;
	public static readonly RULE_video_format = 20;
	public static readonly RULE_article_format = 21;
	public static readonly RULE_document_format = 22;
	public static readonly RULE_app_format = 23;
	public static readonly RULE_website_format = 24;
	public static readonly RULE_stillimagefilm_format = 25;
	public static readonly RULE_op_article_format = 26;
	public static readonly RULE_op_document_format = 27;
	public static readonly RULE_op_app_format = 28;
	public static readonly RULE_op_website_format = 29;
	public static readonly RULE_op_video_format = 30;
	public static readonly RULE_op_stillimagefilm_format = 31;
	public static readonly RULE_articlebit = 32;
	public static readonly RULE_documentbit = 33;
	public static readonly RULE_websitebit = 34;
	public static readonly RULE_appbit = 35;
	public static readonly RULE_stillimagefilmbit = 36;
	public static readonly RULE_stillimg_one = 37;
	public static readonly RULE_videobit = 38;
	public static readonly RULE_video_one = 39;
	public static readonly RULE_imagebit = 40;
	public static readonly RULE_image_one = 41;
	public static readonly RULE_op_image_format = 42;
	public static readonly RULE_image_chained = 43;
	public static readonly RULE_image_chained4match = 44;
	public static readonly RULE_audiobit = 45;
	public static readonly RULE_audio_one = 46;
	public static readonly RULE_audio_format = 47;
	public static readonly RULE_op_audio_format = 48;
	public static readonly RULE_resource_chained = 49;
	public static readonly RULE_telephone = 50;
	public static readonly RULE_url = 51;
	public static readonly RULE_item = 52;
	public static readonly RULE_lead = 53;
	public static readonly RULE_angleref = 54;
	public static readonly RULE_example = 55;
	public static readonly RULE_bracketed_text = 56;
	public static readonly RULE_reference = 57;
	public static readonly RULE_progress = 58;
	public static readonly RULE_dateprop = 59;
	public static readonly RULE_dateprop_chained = 60;
	public static readonly RULE_instruction = 61;
	public static readonly RULE_hint = 62;
	public static readonly RULE_title = 63;
	public static readonly RULE_bool_label = 64;
	public static readonly RULE_progress_points = 65;
	public static readonly RULE_istracked = 66;
	public static readonly RULE_isinfoonly = 67;
	public static readonly RULE_atdef = 68;
	public static readonly RULE_atdef_ = 69;
	public static readonly RULE_dollarans = 70;
	public static readonly RULE_anchor = 71;
	public static readonly RULE_dcolon = 72;
	public static readonly RULE_s_and_w = 73;
	public static readonly RULE_dclines = 74;
	public static readonly RULE_bracket_escaped = 75;
	public static readonly RULE_clnsp = 76;
	public static readonly RULE_sspl = 77;
	public static readonly RULE_words = 78;
	public static readonly RULE_sp = 79;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"bitmark", "bitmark_", "bit", "sequence", "seqstr", "mmm", "bitElem", 
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
		"bracket_escaped", "clnsp", "sspl", "words", "sp",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'[.'", undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, "'[#'", "']'", "':'", "'&'", "'::'", "'+'", "'.@'", 
		"'>'", "'<'", "'\u25BA'", "'\u2192'", "'.'", "'=='", undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, "'[@'", undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, "'http://'", "'https://'", "'&audio'", "'&image'", 
		"'&image-zoom'", "'&image-with-audio'", "'&video'", "'&article'", "'&document'", 
		"'&app'", "'&website'", "'&still-image-film'", "'&pdf'", undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, "'&audio-link'", "'&image-link'", "'&video-link'", 
		"'&article-link'", "'&document-link'", "'&app-link'", "'&website-link'", 
		"'&still-image-film-link'", undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, "'&image-embed'", "'&video-embed'", 
		"'&daudio-embed'", "'&document-embed'", "'&still-image-film-embed'", undefined, 
		undefined, undefined, undefined, undefined, "':bitmark--'", "':bitmark++'", 
		"':text'", "':json'", "':prosemirror'", "':placeholder'", "':basic'", 
		"':jpg'", "':png'", "':gif'", "':svg'", "':mp2'", "':mp3'", "':mp4'", 
		"':flv'", "':wmv'", "':mpeg'", "':mpg'", "'tel:'", "'.article-attachment'", 
		"'*'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "OPDOT", "S", "BitSequence", "COMMENT", "Image_type", "Audio_type", 
		"Video_type", "OPDOLL", "OPBUL", "OPESC", "OPRANGLES", "OPRANGLEL", "OPDANGLE", 
		"OPU", "OPB", "OPQ", "OPA", "OPP", "OPM", "OPS", "OPR", "OPC", "OPHASH", 
		"CL", "COLON", "AMP", "DBLCOLON", "PLUS", "DotAt", "Greater", "Less", 
		"RightAngle", "RightArrow", "Dot", "DBLEQ", "DBLMI", "HSPL", "SSPL", "SSPL2", 
		"DCANY", "ArticleText", "NOTCL", "NUMERIC", "STRING", "NL", "SENTENCE", 
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
		"OpAmpStillImageFilmLink", "AmpImageEmbed", "AmpVideoEmbed", "AmpAudioEmbed", 
		"AmpDocumentEmbed", "AmpStillImageFilmEmbed", "OpAmpImageEmbed", "OpAmpVideoEmbed", 
		"OpAmpAudioEmbed", "OpAmpDocumentEmbed", "OpAmpStillImageFilmEmbed", "BitmarkMinus", 
		"BitmarkPlus", "ColonText", "ColonJson", "Prosemirror", "Placeholder", 
		"BASIC", "JPG", "PNG", "GIF", "SVG", "MP2", "MP3", "MP4", "FLV", "WMV", 
		"MPEG", "MPG", "TEL", "DotArticleAtt", "STAR", "URL", "LIST_LINE", "ENCLBARS",
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
						while (_la === sequenceParser.S) {
							{
							{
							this.state = 161;
							this.match(sequenceParser.S);
							}
							}
							this.state = 166;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
						}
						this.state = 167;
						this.match(sequenceParser.NL);
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
			} while (_la === sequenceParser.BitSequence);
			this.state = 180;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === sequenceParser.NL) {
				{
				{
				this.state = 177;
				this.match(sequenceParser.NL);
				}
				}
				this.state = 182;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 183;
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
			this.state = 185;
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
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 187;
			this.sequence();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 189;
			this.match(sequenceParser.BitSequence);
			this.state = 190;
			this.format();
			this.state = 191;
			this.match(sequenceParser.CL);
			this.state = 201;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 5, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 195;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === sequenceParser.NL) {
						{
						{
						this.state = 192;
						this.match(sequenceParser.NL);
						}
						}
						this.state = 197;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					this.state = 198;
					this.bitElem();
					}
					}
				}
				this.state = 203;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 5, this._ctx);
			}
			this.state = 207;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === sequenceParser.NL) {
				{
				{
				this.state = 204;
				this.match(sequenceParser.NL);
				}
				}
				this.state = 209;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 210;
			this.match(sequenceParser.HSPL);
			this.state = 216;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 7, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 211;
					this.seqstr();
					this.state = 212;
					this.mmm();
					}
					}
				}
				this.state = 218;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 7, this._ctx);
			}
			this.state = 219;
			this.seqstr();
			this.state = 220;
			this.match(sequenceParser.HSPL);
			this.state = 234;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 10, this._ctx) ) {
			case 1:
				{
				this.state = 221;
				this.resource();
				this.state = 231;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 9, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 225;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						while (_la === sequenceParser.NL) {
							{
							{
							this.state = 222;
							this.match(sequenceParser.NL);
							}
							}
							this.state = 227;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
						}
						this.state = 228;
						this.resource();
						}
						}
					}
					this.state = 233;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 9, this._ctx);
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
	public seqstr(): SeqstrContext {
		let _localctx: SeqstrContext = new SeqstrContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, sequenceParser.RULE_seqstr);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 242;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 12, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 236;
					this.bitElem();
					this.state = 238;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === sequenceParser.NL) {
						{
						this.state = 237;
						this.match(sequenceParser.NL);
						}
					}

					}
					}
				}
				this.state = 244;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 12, this._ctx);
			}
			this.state = 245;
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
	public mmm(): MmmContext {
		let _localctx: MmmContext = new MmmContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, sequenceParser.RULE_mmm);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 247;
			this.match(sequenceParser.DBLMI);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 12, sequenceParser.RULE_bitElem);
		try {
			this.state = 274;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 13, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 249;
				this.match(sequenceParser.LIST_LINE);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 250;
				this.dclines();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 251;
				this.gap();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 252;
				this.atdef();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 253;
				this.reference();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 254;
				this.dollarans();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 255;
				this.item();
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 256;
				this.title();
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 257;
				this.instruction();
				}
				break;

			case 10:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 258;
				this.hint();
				}
				break;

			case 11:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 259;
				this.s_and_w();
				}
				break;

			case 12:
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 260;
				this.example();
				}
				break;

			case 13:
				this.enterOuterAlt(_localctx, 13);
				{
				this.state = 261;
				this.bool_label();
				}
				break;

			case 14:
				this.enterOuterAlt(_localctx, 14);
				{
				this.state = 262;
				this.imagebit();
				}
				break;

			case 15:
				this.enterOuterAlt(_localctx, 15);
				{
				this.state = 263;
				this.audiobit();
				}
				break;

			case 16:
				this.enterOuterAlt(_localctx, 16);
				{
				this.state = 264;
				this.videobit();
				}
				break;

			case 17:
				this.enterOuterAlt(_localctx, 17);
				{
				this.state = 265;
				this.articlebit();
				}
				break;

			case 18:
				this.enterOuterAlt(_localctx, 18);
				{
				this.state = 266;
				this.documentbit();
				}
				break;

			case 19:
				this.enterOuterAlt(_localctx, 19);
				{
				this.state = 267;
				this.appbit();
				}
				break;

			case 20:
				this.enterOuterAlt(_localctx, 20);
				{
				this.state = 268;
				this.websitebit();
				}
				break;

			case 21:
				this.enterOuterAlt(_localctx, 21);
				{
				this.state = 269;
				this.stillimagefilmbit();
				}
				break;

			case 22:
				this.enterOuterAlt(_localctx, 22);
				{
				this.state = 270;
				this.angleref();
				}
				break;

			case 23:
				this.enterOuterAlt(_localctx, 23);
				{
				this.state = 271;
				this.anchor();
				}
				break;

			case 24:
				this.enterOuterAlt(_localctx, 24);
				{
				this.state = 272;
				this.bracketed_text();
				}
				break;

			case 25:
				this.enterOuterAlt(_localctx, 25);
				{
				this.state = 273;
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
		this.enterRule(_localctx, 14, sequenceParser.RULE_gap);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 276;
			this.single_gap();
			this.state = 284;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 15, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					this.state = 282;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case sequenceParser.OPU:
						{
						this.state = 277;
						this.single_gap();
						}
						break;
					case sequenceParser.OPB:
						{
						this.state = 278;
						this.instruction();
						}
						break;
					case sequenceParser.OPQ:
						{
						this.state = 279;
						this.hint();
						}
						break;
					case sequenceParser.OPC:
						{
						this.state = 280;
						this.item();
						}
						break;
					case sequenceParser.AtExampleWithStr:
					case sequenceParser.AtExamplecol:
					case sequenceParser.AtExamplecl:
						{
						this.state = 281;
						this.example();
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					}
				}
				this.state = 286;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 15, this._ctx);
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
		this.enterRule(_localctx, 16, sequenceParser.RULE_single_gap);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 287;
			this.match(sequenceParser.OPU);
			this.state = 291;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 16, this._ctx) ) {
			case 1:
				{
				this.state = 288;
				this.match(sequenceParser.NUMERIC);
				}
				break;

			case 2:
				{
				this.state = 289;
				this.match(sequenceParser.STRING);
				}
				break;

			case 3:
				// tslint:disable-next-line:no-empty
				{
				}
				break;
			}
			this.state = 296;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << sequenceParser.S) | (1 << sequenceParser.OPESC) | (1 << sequenceParser.OPS) | (1 << sequenceParser.COLON) | (1 << sequenceParser.AMP) | (1 << sequenceParser.Greater) | (1 << sequenceParser.Less))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (sequenceParser.RightAngle - 32)) | (1 << (sequenceParser.RightArrow - 32)) | (1 << (sequenceParser.DBLEQ - 32)) | (1 << (sequenceParser.NUMERIC - 32)) | (1 << (sequenceParser.STRING - 32)) | (1 << (sequenceParser.SENTENCE - 32)) | (1 << (sequenceParser.BARSTRING - 32)))) !== 0) || ((((_la - 77)) & ~0x1F) === 0 && ((1 << (_la - 77)) & ((1 << (sequenceParser.AmpAudio - 77)) | (1 << (sequenceParser.AmpImage - 77)) | (1 << (sequenceParser.AmpVideo - 77)) | (1 << (sequenceParser.AmpArticle - 77)) | (1 << (sequenceParser.AmpDocument - 77)) | (1 << (sequenceParser.AmpApp - 77)) | (1 << (sequenceParser.AmpWebsite - 77)) | (1 << (sequenceParser.AmpAudioLink - 77)) | (1 << (sequenceParser.AmpImageLink - 77)) | (1 << (sequenceParser.AmpArticleLink - 77)) | (1 << (sequenceParser.AmpDocumentLink - 77)))) !== 0) || ((((_la - 126)) & ~0x1F) === 0 && ((1 << (_la - 126)) & ((1 << (sequenceParser.BitmarkMinus - 126)) | (1 << (sequenceParser.BitmarkPlus - 126)) | (1 << (sequenceParser.URL - 126)) | (1 << (sequenceParser.LIST_LINE - 126)))) !== 0)) {
				{
				{
				this.state = 293;
				this.s_and_w();
				}
				}
				this.state = 298;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 299;
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
		this.enterRule(_localctx, 18, sequenceParser.RULE_choice_plus);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 302;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === sequenceParser.OPC) {
				{
				this.state = 301;
				this.item();
				}
			}

			this.state = 304;
			this.match(sequenceParser.OPP);
			this.state = 306;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 305;
				this.s_and_w();
				}
				}
				this.state = 308;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << sequenceParser.S) | (1 << sequenceParser.OPESC) | (1 << sequenceParser.OPS) | (1 << sequenceParser.COLON) | (1 << sequenceParser.AMP) | (1 << sequenceParser.Greater) | (1 << sequenceParser.Less))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (sequenceParser.RightAngle - 32)) | (1 << (sequenceParser.RightArrow - 32)) | (1 << (sequenceParser.DBLEQ - 32)) | (1 << (sequenceParser.NUMERIC - 32)) | (1 << (sequenceParser.STRING - 32)) | (1 << (sequenceParser.SENTENCE - 32)) | (1 << (sequenceParser.BARSTRING - 32)))) !== 0) || ((((_la - 77)) & ~0x1F) === 0 && ((1 << (_la - 77)) & ((1 << (sequenceParser.AmpAudio - 77)) | (1 << (sequenceParser.AmpImage - 77)) | (1 << (sequenceParser.AmpVideo - 77)) | (1 << (sequenceParser.AmpArticle - 77)) | (1 << (sequenceParser.AmpDocument - 77)) | (1 << (sequenceParser.AmpApp - 77)) | (1 << (sequenceParser.AmpWebsite - 77)) | (1 << (sequenceParser.AmpAudioLink - 77)) | (1 << (sequenceParser.AmpImageLink - 77)) | (1 << (sequenceParser.AmpArticleLink - 77)) | (1 << (sequenceParser.AmpDocumentLink - 77)))) !== 0) || ((((_la - 126)) & ~0x1F) === 0 && ((1 << (_la - 126)) & ((1 << (sequenceParser.BitmarkMinus - 126)) | (1 << (sequenceParser.BitmarkPlus - 126)) | (1 << (sequenceParser.URL - 126)) | (1 << (sequenceParser.LIST_LINE - 126)))) !== 0));
			this.state = 310;
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
		this.enterRule(_localctx, 20, sequenceParser.RULE_choice_minus);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 313;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === sequenceParser.OPC) {
				{
				this.state = 312;
				this.item();
				}
			}

			this.state = 315;
			this.match(sequenceParser.OPM);
			this.state = 317;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 316;
				this.s_and_w();
				}
				}
				this.state = 319;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << sequenceParser.S) | (1 << sequenceParser.OPESC) | (1 << sequenceParser.OPS) | (1 << sequenceParser.COLON) | (1 << sequenceParser.AMP) | (1 << sequenceParser.Greater) | (1 << sequenceParser.Less))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (sequenceParser.RightAngle - 32)) | (1 << (sequenceParser.RightArrow - 32)) | (1 << (sequenceParser.DBLEQ - 32)) | (1 << (sequenceParser.NUMERIC - 32)) | (1 << (sequenceParser.STRING - 32)) | (1 << (sequenceParser.SENTENCE - 32)) | (1 << (sequenceParser.BARSTRING - 32)))) !== 0) || ((((_la - 77)) & ~0x1F) === 0 && ((1 << (_la - 77)) & ((1 << (sequenceParser.AmpAudio - 77)) | (1 << (sequenceParser.AmpImage - 77)) | (1 << (sequenceParser.AmpVideo - 77)) | (1 << (sequenceParser.AmpArticle - 77)) | (1 << (sequenceParser.AmpDocument - 77)) | (1 << (sequenceParser.AmpApp - 77)) | (1 << (sequenceParser.AmpWebsite - 77)) | (1 << (sequenceParser.AmpAudioLink - 77)) | (1 << (sequenceParser.AmpImageLink - 77)) | (1 << (sequenceParser.AmpArticleLink - 77)) | (1 << (sequenceParser.AmpDocumentLink - 77)))) !== 0) || ((((_la - 126)) & ~0x1F) === 0 && ((1 << (_la - 126)) & ((1 << (sequenceParser.BitmarkMinus - 126)) | (1 << (sequenceParser.BitmarkPlus - 126)) | (1 << (sequenceParser.URL - 126)) | (1 << (sequenceParser.LIST_LINE - 126)))) !== 0));
			this.state = 321;
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
		this.enterRule(_localctx, 22, sequenceParser.RULE_choice_star);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 324;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === sequenceParser.OPC) {
				{
				this.state = 323;
				this.item();
				}
			}

			this.state = 326;
			this.match(sequenceParser.OPR);
			this.state = 328;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 327;
				this.s_and_w();
				}
				}
				this.state = 330;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << sequenceParser.S) | (1 << sequenceParser.OPESC) | (1 << sequenceParser.OPS) | (1 << sequenceParser.COLON) | (1 << sequenceParser.AMP) | (1 << sequenceParser.Greater) | (1 << sequenceParser.Less))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (sequenceParser.RightAngle - 32)) | (1 << (sequenceParser.RightArrow - 32)) | (1 << (sequenceParser.DBLEQ - 32)) | (1 << (sequenceParser.NUMERIC - 32)) | (1 << (sequenceParser.STRING - 32)) | (1 << (sequenceParser.SENTENCE - 32)) | (1 << (sequenceParser.BARSTRING - 32)))) !== 0) || ((((_la - 77)) & ~0x1F) === 0 && ((1 << (_la - 77)) & ((1 << (sequenceParser.AmpAudio - 77)) | (1 << (sequenceParser.AmpImage - 77)) | (1 << (sequenceParser.AmpVideo - 77)) | (1 << (sequenceParser.AmpArticle - 77)) | (1 << (sequenceParser.AmpDocument - 77)) | (1 << (sequenceParser.AmpApp - 77)) | (1 << (sequenceParser.AmpWebsite - 77)) | (1 << (sequenceParser.AmpAudioLink - 77)) | (1 << (sequenceParser.AmpImageLink - 77)) | (1 << (sequenceParser.AmpArticleLink - 77)) | (1 << (sequenceParser.AmpDocumentLink - 77)))) !== 0) || ((((_la - 126)) & ~0x1F) === 0 && ((1 << (_la - 126)) & ((1 << (sequenceParser.BitmarkMinus - 126)) | (1 << (sequenceParser.BitmarkPlus - 126)) | (1 << (sequenceParser.URL - 126)) | (1 << (sequenceParser.LIST_LINE - 126)))) !== 0));
			this.state = 332;
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
		this.enterRule(_localctx, 24, sequenceParser.RULE_resource);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 334;
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
		this.enterRule(_localctx, 26, sequenceParser.RULE_bullet_item);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 336;
			this.match(sequenceParser.OPBUL);
			this.state = 337;
			this.s_and_w();
			this.state = 338;
			this.match(sequenceParser.CL);
			this.state = 340;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === sequenceParser.AtPoints) {
				{
				this.state = 339;
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
		this.enterRule(_localctx, 28, sequenceParser.RULE_atpoint);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 342;
			this.match(sequenceParser.AtPoints);
			this.state = 343;
			this.match(sequenceParser.NUMERIC);
			this.state = 344;
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
		this.enterRule(_localctx, 30, sequenceParser.RULE_format);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 349;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 25, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 346;
					this.resource_format();
					}
					}
				}
				this.state = 351;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 25, this._ctx);
			}
			this.state = 357;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 77)) & ~0x1F) === 0 && ((1 << (_la - 77)) & ((1 << (sequenceParser.AmpAudio - 77)) | (1 << (sequenceParser.AmpImage - 77)) | (1 << (sequenceParser.AmpImageZoom - 77)) | (1 << (sequenceParser.AmpImageWAudio - 77)) | (1 << (sequenceParser.AmpVideo - 77)) | (1 << (sequenceParser.AmpArticle - 77)) | (1 << (sequenceParser.AmpDocument - 77)) | (1 << (sequenceParser.AmpApp - 77)) | (1 << (sequenceParser.AmpWebsite - 77)) | (1 << (sequenceParser.AmpStillImageFilm - 77)) | (1 << (sequenceParser.AmpPdf - 77)) | (1 << (sequenceParser.AmpAudioLink - 77)) | (1 << (sequenceParser.AmpImageLink - 77)) | (1 << (sequenceParser.AmpVideoLink - 77)) | (1 << (sequenceParser.AmpArticleLink - 77)) | (1 << (sequenceParser.AmpDocumentLink - 77)) | (1 << (sequenceParser.AmpAppLink - 77)) | (1 << (sequenceParser.AmpWebsiteLink - 77)) | (1 << (sequenceParser.AmpStillImageFilmLink - 77)))) !== 0) || ((((_la - 117)) & ~0x1F) === 0 && ((1 << (_la - 117)) & ((1 << (sequenceParser.AmpVideoEmbed - 117)) | (1 << (sequenceParser.AmpDocumentEmbed - 117)) | (1 << (sequenceParser.AmpStillImageFilmEmbed - 117)) | (1 << (sequenceParser.ColonText - 117)) | (1 << (sequenceParser.ColonJson - 117)))) !== 0)) {
				{
				this.state = 355;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case sequenceParser.ColonText:
					{
					this.state = 352;
					this.match(sequenceParser.ColonText);
					}
					break;
				case sequenceParser.ColonJson:
					{
					this.state = 353;
					this.match(sequenceParser.ColonJson);
					}
					break;
				case sequenceParser.AmpAudio:
				case sequenceParser.AmpImage:
				case sequenceParser.AmpImageZoom:
				case sequenceParser.AmpImageWAudio:
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
				case sequenceParser.AmpAppLink:
				case sequenceParser.AmpWebsiteLink:
				case sequenceParser.AmpStillImageFilmLink:
				case sequenceParser.AmpVideoEmbed:
				case sequenceParser.AmpDocumentEmbed:
				case sequenceParser.AmpStillImageFilmEmbed:
					{
					this.state = 354;
					this.resource_format_extra();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				this.state = 359;
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
		this.enterRule(_localctx, 32, sequenceParser.RULE_resource_format);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 360;
			_la = this._input.LA(1);
			if (!(((((_la - 82)) & ~0x1F) === 0 && ((1 << (_la - 82)) & ((1 << (sequenceParser.AmpArticle - 82)) | (1 << (sequenceParser.AmpDocument - 82)) | (1 << (sequenceParser.AmpWebsite - 82)) | (1 << (sequenceParser.AmpStillImageFilm - 82)) | (1 << (sequenceParser.AmpAudioLink - 82)) | (1 << (sequenceParser.AmpImageLink - 82)) | (1 << (sequenceParser.AmpVideoLink - 82)) | (1 << (sequenceParser.AmpArticleLink - 82)) | (1 << (sequenceParser.AmpDocumentLink - 82)) | (1 << (sequenceParser.AmpAppLink - 82)) | (1 << (sequenceParser.AmpWebsiteLink - 82)) | (1 << (sequenceParser.AmpStillImageFilmLink - 82)))) !== 0) || ((((_la - 117)) & ~0x1F) === 0 && ((1 << (_la - 117)) & ((1 << (sequenceParser.AmpVideoEmbed - 117)) | (1 << (sequenceParser.AmpAudioEmbed - 117)) | (1 << (sequenceParser.AmpDocumentEmbed - 117)) | (1 << (sequenceParser.AmpStillImageFilmEmbed - 117)) | (1 << (sequenceParser.BitmarkMinus - 117)) | (1 << (sequenceParser.BitmarkPlus - 117)) | (1 << (sequenceParser.ColonJson - 117)) | (1 << (sequenceParser.Prosemirror - 117)) | (1 << (sequenceParser.Placeholder - 117)))) !== 0))) {
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
		this.enterRule(_localctx, 34, sequenceParser.RULE_resource_format_extra);
		try {
			this.state = 371;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case sequenceParser.AmpImage:
			case sequenceParser.AmpImageZoom:
			case sequenceParser.AmpImageWAudio:
			case sequenceParser.AmpImageLink:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 362;
				this.image_format();
				}
				break;
			case sequenceParser.AmpAudio:
			case sequenceParser.AmpAudioLink:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 363;
				this.audio_format();
				}
				break;
			case sequenceParser.AmpVideo:
			case sequenceParser.AmpVideoLink:
			case sequenceParser.AmpVideoEmbed:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 364;
				this.video_format();
				}
				break;
			case sequenceParser.AmpArticle:
			case sequenceParser.AmpArticleLink:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 365;
				this.article_format();
				}
				break;
			case sequenceParser.AmpDocument:
			case sequenceParser.AmpDocumentLink:
			case sequenceParser.AmpDocumentEmbed:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 366;
				this.document_format();
				}
				break;
			case sequenceParser.AmpApp:
			case sequenceParser.AmpAppLink:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 367;
				this.app_format();
				}
				break;
			case sequenceParser.AmpWebsite:
			case sequenceParser.AmpWebsiteLink:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 368;
				this.website_format();
				}
				break;
			case sequenceParser.AmpStillImageFilm:
			case sequenceParser.AmpStillImageFilmLink:
			case sequenceParser.AmpStillImageFilmEmbed:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 369;
				this.stillimagefilm_format();
				}
				break;
			case sequenceParser.AmpPdf:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 370;
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
		this.enterRule(_localctx, 36, sequenceParser.RULE_format2);
		try {
			this.state = 378;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case sequenceParser.BitmarkMinus:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 373;
				this.match(sequenceParser.BitmarkMinus);
				}
				break;
			case sequenceParser.BitmarkPlus:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 374;
				this.match(sequenceParser.BitmarkPlus);
				}
				break;
			case sequenceParser.ColonText:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 375;
				this.match(sequenceParser.ColonText);
				}
				break;
			case sequenceParser.ColonJson:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 376;
				this.match(sequenceParser.ColonJson);
				}
				break;
			case sequenceParser.EOF:
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
		this.enterRule(_localctx, 38, sequenceParser.RULE_image_format);
		let _la: number;
		try {
			this.state = 394;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case sequenceParser.AmpImage:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 380;
				this.match(sequenceParser.AmpImage);
				this.state = 383;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case sequenceParser.Image_type:
					{
					{
					this.state = 381;
					this.match(sequenceParser.Image_type);
					}
					}
					break;
				case sequenceParser.DotArticleAtt:
					{
					{
					this.state = 382;
					this.match(sequenceParser.DotArticleAtt);
					}
					}
					break;
				case sequenceParser.CL:
				case sequenceParser.AmpAudio:
				case sequenceParser.AmpImage:
				case sequenceParser.AmpImageZoom:
				case sequenceParser.AmpImageWAudio:
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
				this.state = 385;
				this.match(sequenceParser.AmpImageLink);
				this.state = 387;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === sequenceParser.Image_type) {
					{
					this.state = 386;
					this.match(sequenceParser.Image_type);
					}
				}

				}
				break;
			case sequenceParser.AmpImageZoom:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 389;
				this.match(sequenceParser.AmpImageZoom);
				this.state = 391;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === sequenceParser.Image_type) {
					{
					this.state = 390;
					this.match(sequenceParser.Image_type);
					}
				}

				}
				break;
			case sequenceParser.AmpImageWAudio:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 393;
				this.match(sequenceParser.AmpImageWAudio);
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
		this.enterRule(_localctx, 40, sequenceParser.RULE_video_format);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 396;
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
			this.state = 399;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === sequenceParser.COLON) {
				{
				this.state = 397;
				this.match(sequenceParser.COLON);
				this.state = 398;
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
		this.enterRule(_localctx, 42, sequenceParser.RULE_article_format);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 401;
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
		this.enterRule(_localctx, 44, sequenceParser.RULE_document_format);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 403;
			_la = this._input.LA(1);
			if (!(_la === sequenceParser.AmpDocument || _la === sequenceParser.AmpDocumentLink || _la === sequenceParser.AmpDocumentEmbed)) {
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
		this.enterRule(_localctx, 46, sequenceParser.RULE_app_format);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 405;
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
		this.enterRule(_localctx, 48, sequenceParser.RULE_website_format);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 407;
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
		this.enterRule(_localctx, 50, sequenceParser.RULE_stillimagefilm_format);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 409;
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
		this.enterRule(_localctx, 52, sequenceParser.RULE_op_article_format);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 411;
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
		this.enterRule(_localctx, 54, sequenceParser.RULE_op_document_format);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 413;
			_la = this._input.LA(1);
			if (!(((((_la - 95)) & ~0x1F) === 0 && ((1 << (_la - 95)) & ((1 << (sequenceParser.OpAmpDocument - 95)) | (1 << (sequenceParser.OpAmpDocumentLink - 95)) | (1 << (sequenceParser.OpAmpDocumentEmbed - 95)))) !== 0))) {
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
		this.enterRule(_localctx, 56, sequenceParser.RULE_op_app_format);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 415;
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
		this.enterRule(_localctx, 58, sequenceParser.RULE_op_website_format);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 417;
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
		this.enterRule(_localctx, 60, sequenceParser.RULE_op_video_format);
		try {
			this.state = 434;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case sequenceParser.OpAmpVideo:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 419;
				this.match(sequenceParser.OpAmpVideo);
				this.state = 422;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 35, this._ctx) ) {
				case 1:
					{
					this.state = 420;
					this.match(sequenceParser.COLON);
					this.state = 421;
					this.match(sequenceParser.Video_type);
					}
					break;
				}
				}
				break;
			case sequenceParser.OpAmpVideoLink:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 424;
				this.match(sequenceParser.OpAmpVideoLink);
				this.state = 427;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 36, this._ctx) ) {
				case 1:
					{
					this.state = 425;
					this.match(sequenceParser.COLON);
					this.state = 426;
					this.match(sequenceParser.Video_type);
					}
					break;
				}
				}
				break;
			case sequenceParser.OpAmpVideoEmbed:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 429;
				this.match(sequenceParser.OpAmpVideoEmbed);
				this.state = 432;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 37, this._ctx) ) {
				case 1:
					{
					this.state = 430;
					this.match(sequenceParser.COLON);
					this.state = 431;
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
		this.enterRule(_localctx, 62, sequenceParser.RULE_op_stillimagefilm_format);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 436;
			_la = this._input.LA(1);
			if (!(((((_la - 98)) & ~0x1F) === 0 && ((1 << (_la - 98)) & ((1 << (sequenceParser.OpAmpStillImageFilm - 98)) | (1 << (sequenceParser.OpAmpStillImageFilmLink - 98)) | (1 << (sequenceParser.OpAmpStillImageFilmEmbed - 98)))) !== 0))) {
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
		this.enterRule(_localctx, 64, sequenceParser.RULE_articlebit);
		try {
			this.state = 444;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case sequenceParser.OpAmpArticle:
			case sequenceParser.OpAmpArticleLink:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 438;
				this.op_article_format();
				this.state = 439;
				this.match(sequenceParser.COLON);
				this.state = 440;
				this.url();
				this.state = 441;
				this.match(sequenceParser.CL);
				}
				break;
			case sequenceParser.ArticleText:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 443;
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
		this.enterRule(_localctx, 66, sequenceParser.RULE_documentbit);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 446;
			this.op_document_format();
			this.state = 447;
			this.match(sequenceParser.COLON);
			this.state = 448;
			this.url();
			this.state = 449;
			this.match(sequenceParser.CL);
			this.state = 454;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === sequenceParser.OPATALT) {
				{
				this.state = 450;
				this.match(sequenceParser.OPATALT);
				this.state = 451;
				this.words();
				this.state = 452;
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
		this.enterRule(_localctx, 68, sequenceParser.RULE_websitebit);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 456;
			this.op_website_format();
			this.state = 457;
			this.match(sequenceParser.COLON);
			this.state = 458;
			this.url();
			this.state = 459;
			this.match(sequenceParser.CL);
			this.state = 464;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === sequenceParser.OPATALT) {
				{
				this.state = 460;
				this.match(sequenceParser.OPATALT);
				this.state = 461;
				this.words();
				this.state = 462;
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
		this.enterRule(_localctx, 70, sequenceParser.RULE_appbit);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 466;
			this.op_app_format();
			this.state = 467;
			this.match(sequenceParser.COLON);
			this.state = 470;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case sequenceParser.URL:
				{
				this.state = 468;
				this.url();
				}
				break;
			case sequenceParser.TEL:
				{
				this.state = 469;
				this.telephone();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 472;
			this.match(sequenceParser.CL);
			this.state = 477;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === sequenceParser.OPATALT) {
				{
				this.state = 473;
				this.match(sequenceParser.OPATALT);
				this.state = 474;
				this.words();
				this.state = 475;
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
		this.enterRule(_localctx, 72, sequenceParser.RULE_stillimagefilmbit);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 479;
			this.stillimg_one();
			this.state = 483;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 44, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 480;
					this.resource_chained();
					}
					}
				}
				this.state = 485;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 44, this._ctx);
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
		this.enterRule(_localctx, 74, sequenceParser.RULE_stillimg_one);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 486;
			this.op_stillimagefilm_format();
			this.state = 487;
			this.match(sequenceParser.COLON);
			this.state = 491;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === sequenceParser.S) {
				{
				{
				this.state = 488;
				this.match(sequenceParser.S);
				}
				}
				this.state = 493;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 494;
			this.url();
			this.state = 495;
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
		this.enterRule(_localctx, 76, sequenceParser.RULE_videobit);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 497;
			this.video_one();
			this.state = 501;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 46, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 498;
					this.resource_chained();
					}
					}
				}
				this.state = 503;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 46, this._ctx);
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
		this.enterRule(_localctx, 78, sequenceParser.RULE_video_one);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 504;
			this.op_video_format();
			this.state = 505;
			this.match(sequenceParser.COLON);
			this.state = 506;
			this.url();
			this.state = 507;
			this.match(sequenceParser.CL);
			this.state = 512;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 47, this._ctx) ) {
			case 1:
				{
				this.state = 508;
				this.match(sequenceParser.OPATALT);
				this.state = 509;
				this.words();
				this.state = 510;
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
		this.enterRule(_localctx, 80, sequenceParser.RULE_imagebit);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 514;
			this.image_one();
			this.state = 518;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 48, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 515;
					this.image_chained();
					}
					}
				}
				this.state = 520;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 48, this._ctx);
			}
			this.state = 523;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 49, this._ctx) ) {
			case 1:
				{
				this.state = 521;
				this.match(sequenceParser.NL);
				this.state = 522;
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
		this.enterRule(_localctx, 82, sequenceParser.RULE_image_one);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 525;
			this.op_image_format();
			this.state = 526;
			this.match(sequenceParser.COLON);
			this.state = 530;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === sequenceParser.S) {
				{
				{
				this.state = 527;
				this.match(sequenceParser.S);
				}
				}
				this.state = 532;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 533;
			this.url();
			this.state = 534;
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
		this.enterRule(_localctx, 84, sequenceParser.RULE_op_image_format);
		let _la: number;
		try {
			this.state = 550;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case sequenceParser.OpAmpImage:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 536;
				this.match(sequenceParser.OpAmpImage);
				this.state = 539;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case sequenceParser.Image_type:
					{
					{
					this.state = 537;
					this.match(sequenceParser.Image_type);
					}
					}
					break;
				case sequenceParser.DotArticleAtt:
					{
					{
					this.state = 538;
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
				this.state = 541;
				this.match(sequenceParser.OpAmpImageLink);
				this.state = 543;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === sequenceParser.Image_type) {
					{
					this.state = 542;
					this.match(sequenceParser.Image_type);
					}
				}

				}
				break;
			case sequenceParser.OpAmpImageZoom:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 545;
				this.match(sequenceParser.OpAmpImageZoom);
				this.state = 547;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === sequenceParser.Image_type) {
					{
					this.state = 546;
					this.match(sequenceParser.Image_type);
					}
				}

				}
				break;
			case sequenceParser.OpAmpImageWAudio:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 549;
				this.match(sequenceParser.OpAmpImageWAudio);
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
		this.enterRule(_localctx, 86, sequenceParser.RULE_image_chained);
		let _la: number;
		try {
			let _alt: number;
			this.state = 569;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case sequenceParser.AtSrc:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 552;
				this.match(sequenceParser.AtSrc);
				this.state = 553;
				this.match(sequenceParser.COLON);
				this.state = 554;
				this.url();
				this.state = 555;
				this.match(sequenceParser.CL);
				}
				break;
			case sequenceParser.AtWidth:
			case sequenceParser.AtHeight:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 557;
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
				this.state = 558;
				this.match(sequenceParser.COLON);
				this.state = 559;
				this.match(sequenceParser.NUMERIC);
				this.state = 560;
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
				this.state = 561;
				_la = this._input.LA(1);
				if (!(((((_la - 65)) & ~0x1F) === 0 && ((1 << (_la - 65)) & ((1 << (sequenceParser.OPATALT - 65)) | (1 << (sequenceParser.OpAtCaption - 65)) | (1 << (sequenceParser.OpAtLicense - 65)) | (1 << (sequenceParser.OpAtCopyright - 65)) | (1 << (sequenceParser.OpAtSearch - 65)))) !== 0))) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 565;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 55, this._ctx);
				while (_alt !== 1 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1 + 1) {
						{
						{
						this.state = 562;
						this.matchWildcard();
						}
						}
					}
					this.state = 567;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 55, this._ctx);
				}
				this.state = 568;
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
		this.enterRule(_localctx, 88, sequenceParser.RULE_image_chained4match);
		let _la: number;
		try {
			let _alt: number;
			this.state = 588;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case sequenceParser.AtSrc:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 571;
				this.match(sequenceParser.AtSrc);
				this.state = 572;
				this.match(sequenceParser.COLON);
				this.state = 573;
				this.url();
				this.state = 574;
				this.match(sequenceParser.CL);
				}
				break;
			case sequenceParser.AtWidth:
			case sequenceParser.AtHeight:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 576;
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
				this.state = 577;
				this.match(sequenceParser.COLON);
				this.state = 578;
				this.match(sequenceParser.NUMERIC);
				this.state = 579;
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
				this.state = 580;
				_la = this._input.LA(1);
				if (!(((((_la - 65)) & ~0x1F) === 0 && ((1 << (_la - 65)) & ((1 << (sequenceParser.OPATALT - 65)) | (1 << (sequenceParser.OpAtCaption - 65)) | (1 << (sequenceParser.OpAtLicense - 65)) | (1 << (sequenceParser.OpAtCopyright - 65)) | (1 << (sequenceParser.OpAtSearch - 65)))) !== 0))) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 584;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 57, this._ctx);
				while (_alt !== 1 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1 + 1) {
						{
						{
						this.state = 581;
						this.matchWildcard();
						}
						}
					}
					this.state = 586;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 57, this._ctx);
				}
				this.state = 587;
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
		this.enterRule(_localctx, 90, sequenceParser.RULE_audiobit);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 590;
			this.audio_one();
			this.state = 594;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 59, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 591;
					this.resource_chained();
					}
					}
				}
				this.state = 596;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 59, this._ctx);
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
		this.enterRule(_localctx, 92, sequenceParser.RULE_audio_one);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 597;
			this.op_audio_format();
			this.state = 598;
			this.match(sequenceParser.COLON);
			this.state = 599;
			this.url();
			this.state = 600;
			this.match(sequenceParser.CL);
			this.state = 605;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 60, this._ctx) ) {
			case 1:
				{
				this.state = 601;
				this.match(sequenceParser.OPATALT);
				this.state = 602;
				this.words();
				this.state = 603;
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
		this.enterRule(_localctx, 94, sequenceParser.RULE_audio_format);
		let _la: number;
		try {
			this.state = 617;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case sequenceParser.AmpAudio:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 607;
				this.match(sequenceParser.AmpAudio);
				this.state = 610;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === sequenceParser.COLON) {
					{
					this.state = 608;
					this.match(sequenceParser.COLON);
					this.state = 609;
					this.match(sequenceParser.Audio_type);
					}
				}

				}
				break;
			case sequenceParser.AmpAudioLink:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 612;
				this.match(sequenceParser.AmpAudioLink);
				this.state = 615;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === sequenceParser.COLON) {
					{
					this.state = 613;
					this.match(sequenceParser.COLON);
					this.state = 614;
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
		this.enterRule(_localctx, 96, sequenceParser.RULE_op_audio_format);
		try {
			this.state = 634;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case sequenceParser.OpAmpAudio:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 619;
				this.match(sequenceParser.OpAmpAudio);
				this.state = 622;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 64, this._ctx) ) {
				case 1:
					{
					this.state = 620;
					this.match(sequenceParser.COLON);
					this.state = 621;
					this.match(sequenceParser.Audio_type);
					}
					break;
				}
				}
				break;
			case sequenceParser.OpAmpAudioLink:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 624;
				this.match(sequenceParser.OpAmpAudioLink);
				this.state = 627;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 65, this._ctx) ) {
				case 1:
					{
					this.state = 625;
					this.match(sequenceParser.COLON);
					this.state = 626;
					this.match(sequenceParser.Audio_type);
					}
					break;
				}
				}
				break;
			case sequenceParser.OpAmpAudioEmbed:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 629;
				this.match(sequenceParser.OpAmpAudioEmbed);
				this.state = 632;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 66, this._ctx) ) {
				case 1:
					{
					this.state = 630;
					this.match(sequenceParser.COLON);
					this.state = 631;
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
		this.enterRule(_localctx, 98, sequenceParser.RULE_resource_chained);
		let _la: number;
		try {
			let _alt: number;
			this.state = 667;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case sequenceParser.OPA:
			case sequenceParser.AtSrc:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 639;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case sequenceParser.OPA:
					{
					this.state = 636;
					this.match(sequenceParser.OPA);
					this.state = 637;
					this.s_and_w();
					}
					break;
				case sequenceParser.AtSrc:
					{
					this.state = 638;
					this.match(sequenceParser.AtSrc);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 641;
				this.match(sequenceParser.COLON);
				this.state = 645;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 69, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 642;
						this.match(sequenceParser.S);
						}
						}
					}
					this.state = 647;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 69, this._ctx);
				}
				this.state = 650;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					this.state = 650;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case sequenceParser.S:
					case sequenceParser.OPESC:
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
						this.state = 648;
						this.s_and_w();
						}
						break;
					case sequenceParser.NL:
						{
						this.state = 649;
						this.match(sequenceParser.NL);
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					}
					this.state = 652;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << sequenceParser.S) | (1 << sequenceParser.OPESC) | (1 << sequenceParser.OPS) | (1 << sequenceParser.COLON) | (1 << sequenceParser.AMP) | (1 << sequenceParser.Greater) | (1 << sequenceParser.Less))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (sequenceParser.RightAngle - 32)) | (1 << (sequenceParser.RightArrow - 32)) | (1 << (sequenceParser.DBLEQ - 32)) | (1 << (sequenceParser.NUMERIC - 32)) | (1 << (sequenceParser.STRING - 32)) | (1 << (sequenceParser.NL - 32)) | (1 << (sequenceParser.SENTENCE - 32)) | (1 << (sequenceParser.BARSTRING - 32)))) !== 0) || ((((_la - 77)) & ~0x1F) === 0 && ((1 << (_la - 77)) & ((1 << (sequenceParser.AmpAudio - 77)) | (1 << (sequenceParser.AmpImage - 77)) | (1 << (sequenceParser.AmpVideo - 77)) | (1 << (sequenceParser.AmpArticle - 77)) | (1 << (sequenceParser.AmpDocument - 77)) | (1 << (sequenceParser.AmpApp - 77)) | (1 << (sequenceParser.AmpWebsite - 77)) | (1 << (sequenceParser.AmpAudioLink - 77)) | (1 << (sequenceParser.AmpImageLink - 77)) | (1 << (sequenceParser.AmpArticleLink - 77)) | (1 << (sequenceParser.AmpDocumentLink - 77)))) !== 0) || ((((_la - 126)) & ~0x1F) === 0 && ((1 << (_la - 126)) & ((1 << (sequenceParser.BitmarkMinus - 126)) | (1 << (sequenceParser.BitmarkPlus - 126)) | (1 << (sequenceParser.URL - 126)) | (1 << (sequenceParser.LIST_LINE - 126)))) !== 0));
				this.state = 654;
				this.match(sequenceParser.CL);
				}
				break;
			case sequenceParser.AtWidth:
			case sequenceParser.AtHeight:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 655;
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
				this.state = 656;
				this.match(sequenceParser.COLON);
				this.state = 657;
				this.match(sequenceParser.NUMERIC);
				this.state = 658;
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
				this.state = 659;
				_la = this._input.LA(1);
				if (!(((((_la - 65)) & ~0x1F) === 0 && ((1 << (_la - 65)) & ((1 << (sequenceParser.OPATALT - 65)) | (1 << (sequenceParser.OpAtCaption - 65)) | (1 << (sequenceParser.OpAtLicense - 65)) | (1 << (sequenceParser.OpAtCopyright - 65)) | (1 << (sequenceParser.OpAtSearch - 65)))) !== 0))) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 663;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 72, this._ctx);
				while (_alt !== 1 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1 + 1) {
						{
						{
						this.state = 660;
						this.matchWildcard();
						}
						}
					}
					this.state = 665;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 72, this._ctx);
				}
				this.state = 666;
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
		this.enterRule(_localctx, 100, sequenceParser.RULE_telephone);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 669;
			this.match(sequenceParser.TEL);
			this.state = 670;
			this.match(sequenceParser.PLUS);
			this.state = 671;
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
		this.enterRule(_localctx, 102, sequenceParser.RULE_url);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 673;
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
		this.enterRule(_localctx, 104, sequenceParser.RULE_item);
		let _la: number;
		try {
			this.state = 705;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 80, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 675;
				this.match(sequenceParser.OPC);
				this.state = 676;
				this.match(sequenceParser.CL);
				this.state = 684;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 75, this._ctx) ) {
				case 1:
					{
					this.state = 680;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === sequenceParser.S) {
						{
						{
						this.state = 677;
						this.match(sequenceParser.S);
						}
						}
						this.state = 682;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					this.state = 683;
					this.lead();
					}
					break;
				}
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 686;
				this.match(sequenceParser.OPC);
				this.state = 687;
				this.s_and_w();
				this.state = 692;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (((((_la - 25)) & ~0x1F) === 0 && ((1 << (_la - 25)) & ((1 << (sequenceParser.COLON - 25)) | (1 << (sequenceParser.AMP - 25)) | (1 << (sequenceParser.Greater - 25)) | (1 << (sequenceParser.Less - 25)) | (1 << (sequenceParser.RightAngle - 25)) | (1 << (sequenceParser.RightArrow - 25)) | (1 << (sequenceParser.SENTENCE - 25)) | (1 << (sequenceParser.BARSTRING - 25)))) !== 0) || ((((_la - 77)) & ~0x1F) === 0 && ((1 << (_la - 77)) & ((1 << (sequenceParser.AmpAudio - 77)) | (1 << (sequenceParser.AmpImage - 77)) | (1 << (sequenceParser.AmpVideo - 77)) | (1 << (sequenceParser.AmpArticle - 77)) | (1 << (sequenceParser.AmpDocument - 77)) | (1 << (sequenceParser.AmpApp - 77)) | (1 << (sequenceParser.AmpWebsite - 77)) | (1 << (sequenceParser.AmpAudioLink - 77)) | (1 << (sequenceParser.AmpImageLink - 77)) | (1 << (sequenceParser.AmpArticleLink - 77)) | (1 << (sequenceParser.AmpDocumentLink - 77)))) !== 0) || ((((_la - 126)) & ~0x1F) === 0 && ((1 << (_la - 126)) & ((1 << (sequenceParser.BitmarkMinus - 126)) | (1 << (sequenceParser.BitmarkPlus - 126)) | (1 << (sequenceParser.LIST_LINE - 126)))) !== 0)) {
					{
					this.state = 690;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case sequenceParser.COLON:
						{
						this.state = 688;
						this.match(sequenceParser.COLON);
						}
						break;
					case sequenceParser.AMP:
					case sequenceParser.Greater:
					case sequenceParser.Less:
					case sequenceParser.RightAngle:
					case sequenceParser.RightArrow:
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
					case sequenceParser.LIST_LINE:
						{
						this.state = 689;
						this.words();
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					}
					this.state = 694;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 695;
				this.match(sequenceParser.CL);
				this.state = 703;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 79, this._ctx) ) {
				case 1:
					{
					this.state = 699;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === sequenceParser.S) {
						{
						{
						this.state = 696;
						this.match(sequenceParser.S);
						}
						}
						this.state = 701;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					this.state = 702;
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
		this.enterRule(_localctx, 106, sequenceParser.RULE_lead);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 707;
			this.match(sequenceParser.OPC);
			this.state = 708;
			this.s_and_w();
			this.state = 713;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 25)) & ~0x1F) === 0 && ((1 << (_la - 25)) & ((1 << (sequenceParser.COLON - 25)) | (1 << (sequenceParser.AMP - 25)) | (1 << (sequenceParser.Greater - 25)) | (1 << (sequenceParser.Less - 25)) | (1 << (sequenceParser.RightAngle - 25)) | (1 << (sequenceParser.RightArrow - 25)) | (1 << (sequenceParser.SENTENCE - 25)) | (1 << (sequenceParser.BARSTRING - 25)))) !== 0) || ((((_la - 77)) & ~0x1F) === 0 && ((1 << (_la - 77)) & ((1 << (sequenceParser.AmpAudio - 77)) | (1 << (sequenceParser.AmpImage - 77)) | (1 << (sequenceParser.AmpVideo - 77)) | (1 << (sequenceParser.AmpArticle - 77)) | (1 << (sequenceParser.AmpDocument - 77)) | (1 << (sequenceParser.AmpApp - 77)) | (1 << (sequenceParser.AmpWebsite - 77)) | (1 << (sequenceParser.AmpAudioLink - 77)) | (1 << (sequenceParser.AmpImageLink - 77)) | (1 << (sequenceParser.AmpArticleLink - 77)) | (1 << (sequenceParser.AmpDocumentLink - 77)))) !== 0) || ((((_la - 126)) & ~0x1F) === 0 && ((1 << (_la - 126)) & ((1 << (sequenceParser.BitmarkMinus - 126)) | (1 << (sequenceParser.BitmarkPlus - 126)) | (1 << (sequenceParser.LIST_LINE - 126)))) !== 0)) {
				{
				this.state = 711;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case sequenceParser.COLON:
					{
					this.state = 709;
					this.match(sequenceParser.COLON);
					}
					break;
				case sequenceParser.AMP:
				case sequenceParser.Greater:
				case sequenceParser.Less:
				case sequenceParser.RightAngle:
				case sequenceParser.RightArrow:
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
				case sequenceParser.LIST_LINE:
					{
					this.state = 710;
					this.words();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				this.state = 715;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 716;
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
	public angleref(): AnglerefContext {
		let _localctx: AnglerefContext = new AnglerefContext(this._ctx, this.state);
		this.enterRule(_localctx, 108, sequenceParser.RULE_angleref);
		let _la: number;
		try {
			this.state = 728;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case sequenceParser.OPRANGLES:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 718;
				this.match(sequenceParser.OPRANGLES);
				this.state = 720;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << sequenceParser.S) | (1 << sequenceParser.OPESC) | (1 << sequenceParser.OPS) | (1 << sequenceParser.COLON) | (1 << sequenceParser.AMP) | (1 << sequenceParser.Greater) | (1 << sequenceParser.Less))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (sequenceParser.RightAngle - 32)) | (1 << (sequenceParser.RightArrow - 32)) | (1 << (sequenceParser.DBLEQ - 32)) | (1 << (sequenceParser.NUMERIC - 32)) | (1 << (sequenceParser.STRING - 32)) | (1 << (sequenceParser.SENTENCE - 32)) | (1 << (sequenceParser.BARSTRING - 32)))) !== 0) || ((((_la - 77)) & ~0x1F) === 0 && ((1 << (_la - 77)) & ((1 << (sequenceParser.AmpAudio - 77)) | (1 << (sequenceParser.AmpImage - 77)) | (1 << (sequenceParser.AmpVideo - 77)) | (1 << (sequenceParser.AmpArticle - 77)) | (1 << (sequenceParser.AmpDocument - 77)) | (1 << (sequenceParser.AmpApp - 77)) | (1 << (sequenceParser.AmpWebsite - 77)) | (1 << (sequenceParser.AmpAudioLink - 77)) | (1 << (sequenceParser.AmpImageLink - 77)) | (1 << (sequenceParser.AmpArticleLink - 77)) | (1 << (sequenceParser.AmpDocumentLink - 77)))) !== 0) || ((((_la - 126)) & ~0x1F) === 0 && ((1 << (_la - 126)) & ((1 << (sequenceParser.BitmarkMinus - 126)) | (1 << (sequenceParser.BitmarkPlus - 126)) | (1 << (sequenceParser.URL - 126)) | (1 << (sequenceParser.LIST_LINE - 126)))) !== 0)) {
					{
					this.state = 719;
					this.s_and_w();
					}
				}

				this.state = 722;
				this.match(sequenceParser.CL);
				}
				break;
			case sequenceParser.OPRANGLEL:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 723;
				this.match(sequenceParser.OPRANGLEL);
				this.state = 725;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << sequenceParser.S) | (1 << sequenceParser.OPESC) | (1 << sequenceParser.OPS) | (1 << sequenceParser.COLON) | (1 << sequenceParser.AMP) | (1 << sequenceParser.Greater) | (1 << sequenceParser.Less))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (sequenceParser.RightAngle - 32)) | (1 << (sequenceParser.RightArrow - 32)) | (1 << (sequenceParser.DBLEQ - 32)) | (1 << (sequenceParser.NUMERIC - 32)) | (1 << (sequenceParser.STRING - 32)) | (1 << (sequenceParser.SENTENCE - 32)) | (1 << (sequenceParser.BARSTRING - 32)))) !== 0) || ((((_la - 77)) & ~0x1F) === 0 && ((1 << (_la - 77)) & ((1 << (sequenceParser.AmpAudio - 77)) | (1 << (sequenceParser.AmpImage - 77)) | (1 << (sequenceParser.AmpVideo - 77)) | (1 << (sequenceParser.AmpArticle - 77)) | (1 << (sequenceParser.AmpDocument - 77)) | (1 << (sequenceParser.AmpApp - 77)) | (1 << (sequenceParser.AmpWebsite - 77)) | (1 << (sequenceParser.AmpAudioLink - 77)) | (1 << (sequenceParser.AmpImageLink - 77)) | (1 << (sequenceParser.AmpArticleLink - 77)) | (1 << (sequenceParser.AmpDocumentLink - 77)))) !== 0) || ((((_la - 126)) & ~0x1F) === 0 && ((1 << (_la - 126)) & ((1 << (sequenceParser.BitmarkMinus - 126)) | (1 << (sequenceParser.BitmarkPlus - 126)) | (1 << (sequenceParser.URL - 126)) | (1 << (sequenceParser.LIST_LINE - 126)))) !== 0)) {
					{
					this.state = 724;
					this.s_and_w();
					}
				}

				this.state = 727;
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
		this.enterRule(_localctx, 110, sequenceParser.RULE_example);
		let _la: number;
		try {
			this.state = 737;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case sequenceParser.AtExamplecl:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 730;
				this.match(sequenceParser.AtExamplecl);
				}
				break;
			case sequenceParser.AtExampleWithStr:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 731;
				this.match(sequenceParser.AtExampleWithStr);
				}
				break;
			case sequenceParser.AtExamplecol:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 732;
				this.match(sequenceParser.AtExamplecol);
				this.state = 734;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === sequenceParser.SENTENCE) {
					{
					this.state = 733;
					this.match(sequenceParser.SENTENCE);
					}
				}

				this.state = 736;
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
		this.enterRule(_localctx, 112, sequenceParser.RULE_bracketed_text);
		let _la: number;
		try {
			let _alt: number;
			this.state = 778;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 95, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 739;
				this.match(sequenceParser.BracEnclose);
				this.state = 741;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 88, this._ctx) ) {
				case 1:
					{
					this.state = 740;
					this.s_and_w();
					}
					break;
				}
				this.state = 764;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << sequenceParser.S) | (1 << sequenceParser.OPESC) | (1 << sequenceParser.OPS) | (1 << sequenceParser.COLON) | (1 << sequenceParser.AMP) | (1 << sequenceParser.Greater) | (1 << sequenceParser.Less))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (sequenceParser.RightAngle - 32)) | (1 << (sequenceParser.RightArrow - 32)) | (1 << (sequenceParser.DBLEQ - 32)) | (1 << (sequenceParser.NUMERIC - 32)) | (1 << (sequenceParser.STRING - 32)) | (1 << (sequenceParser.SENTENCE - 32)) | (1 << (sequenceParser.BARSTRING - 32)))) !== 0) || ((((_la - 77)) & ~0x1F) === 0 && ((1 << (_la - 77)) & ((1 << (sequenceParser.AmpAudio - 77)) | (1 << (sequenceParser.AmpImage - 77)) | (1 << (sequenceParser.AmpVideo - 77)) | (1 << (sequenceParser.AmpArticle - 77)) | (1 << (sequenceParser.AmpDocument - 77)) | (1 << (sequenceParser.AmpApp - 77)) | (1 << (sequenceParser.AmpWebsite - 77)) | (1 << (sequenceParser.AmpAudioLink - 77)) | (1 << (sequenceParser.AmpImageLink - 77)) | (1 << (sequenceParser.AmpArticleLink - 77)) | (1 << (sequenceParser.AmpDocumentLink - 77)))) !== 0) || ((((_la - 126)) & ~0x1F) === 0 && ((1 << (_la - 126)) & ((1 << (sequenceParser.BitmarkMinus - 126)) | (1 << (sequenceParser.BitmarkPlus - 126)) | (1 << (sequenceParser.URL - 126)) | (1 << (sequenceParser.LIST_LINE - 126)))) !== 0)) {
					{
					{
					this.state = 743;
					this.s_and_w();
					this.state = 753;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 90, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 744;
							this.match(sequenceParser.NL);
							this.state = 748;
							this._errHandler.sync(this);
							_alt = this.interpreter.adaptivePredict(this._input, 89, this._ctx);
							while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
								if (_alt === 1) {
									{
									{
									this.state = 745;
									this.match(sequenceParser.S);
									}
									}
								}
								this.state = 750;
								this._errHandler.sync(this);
								_alt = this.interpreter.adaptivePredict(this._input, 89, this._ctx);
							}
							}
							}
						}
						this.state = 755;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 90, this._ctx);
					}
					this.state = 759;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === sequenceParser.NL) {
						{
						{
						this.state = 756;
						this.match(sequenceParser.NL);
						}
						}
						this.state = 761;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
					}
					this.state = 766;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 767;
				this.match(sequenceParser.CL);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 768;
				this.match(sequenceParser.BracEnclose);
				this.state = 774;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << sequenceParser.S) | (1 << sequenceParser.OPESC) | (1 << sequenceParser.OPS) | (1 << sequenceParser.COLON) | (1 << sequenceParser.AMP) | (1 << sequenceParser.Greater) | (1 << sequenceParser.Less))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (sequenceParser.RightAngle - 32)) | (1 << (sequenceParser.RightArrow - 32)) | (1 << (sequenceParser.DBLEQ - 32)) | (1 << (sequenceParser.NUMERIC - 32)) | (1 << (sequenceParser.STRING - 32)) | (1 << (sequenceParser.NL - 32)) | (1 << (sequenceParser.SENTENCE - 32)) | (1 << (sequenceParser.BARSTRING - 32)))) !== 0) || ((((_la - 77)) & ~0x1F) === 0 && ((1 << (_la - 77)) & ((1 << (sequenceParser.AmpAudio - 77)) | (1 << (sequenceParser.AmpImage - 77)) | (1 << (sequenceParser.AmpVideo - 77)) | (1 << (sequenceParser.AmpArticle - 77)) | (1 << (sequenceParser.AmpDocument - 77)) | (1 << (sequenceParser.AmpApp - 77)) | (1 << (sequenceParser.AmpWebsite - 77)) | (1 << (sequenceParser.AmpAudioLink - 77)) | (1 << (sequenceParser.AmpImageLink - 77)) | (1 << (sequenceParser.AmpArticleLink - 77)) | (1 << (sequenceParser.AmpDocumentLink - 77)))) !== 0) || ((((_la - 126)) & ~0x1F) === 0 && ((1 << (_la - 126)) & ((1 << (sequenceParser.BitmarkMinus - 126)) | (1 << (sequenceParser.BitmarkPlus - 126)) | (1 << (sequenceParser.URL - 126)) | (1 << (sequenceParser.LIST_LINE - 126)))) !== 0)) {
					{
					this.state = 772;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 93, this._ctx) ) {
					case 1:
						{
						this.state = 769;
						this.s_and_w();
						}
						break;

					case 2:
						{
						this.state = 770;
						this.match(sequenceParser.NL);
						}
						break;

					case 3:
						{
						this.state = 771;
						this.match(sequenceParser.S);
						}
						break;
					}
					}
					this.state = 776;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 777;
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
		this.enterRule(_localctx, 114, sequenceParser.RULE_reference);
		let _la: number;
		try {
			this.state = 802;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 100, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 780;
				this.match(sequenceParser.AtReference);
				this.state = 785;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					this.state = 785;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 96, this._ctx) ) {
					case 1:
						{
						this.state = 781;
						this.s_and_w();
						}
						break;

					case 2:
						{
						this.state = 782;
						this.match(sequenceParser.COLON);
						}
						break;

					case 3:
						{
						this.state = 783;
						this.match(sequenceParser.URL);
						}
						break;

					case 4:
						{
						this.state = 784;
						this.match(sequenceParser.NL);
						}
						break;
					}
					}
					this.state = 787;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << sequenceParser.S) | (1 << sequenceParser.OPESC) | (1 << sequenceParser.OPS) | (1 << sequenceParser.COLON) | (1 << sequenceParser.AMP) | (1 << sequenceParser.Greater) | (1 << sequenceParser.Less))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (sequenceParser.RightAngle - 32)) | (1 << (sequenceParser.RightArrow - 32)) | (1 << (sequenceParser.DBLEQ - 32)) | (1 << (sequenceParser.NUMERIC - 32)) | (1 << (sequenceParser.STRING - 32)) | (1 << (sequenceParser.NL - 32)) | (1 << (sequenceParser.SENTENCE - 32)) | (1 << (sequenceParser.BARSTRING - 32)))) !== 0) || ((((_la - 77)) & ~0x1F) === 0 && ((1 << (_la - 77)) & ((1 << (sequenceParser.AmpAudio - 77)) | (1 << (sequenceParser.AmpImage - 77)) | (1 << (sequenceParser.AmpVideo - 77)) | (1 << (sequenceParser.AmpArticle - 77)) | (1 << (sequenceParser.AmpDocument - 77)) | (1 << (sequenceParser.AmpApp - 77)) | (1 << (sequenceParser.AmpWebsite - 77)) | (1 << (sequenceParser.AmpAudioLink - 77)) | (1 << (sequenceParser.AmpImageLink - 77)) | (1 << (sequenceParser.AmpArticleLink - 77)) | (1 << (sequenceParser.AmpDocumentLink - 77)))) !== 0) || ((((_la - 126)) & ~0x1F) === 0 && ((1 << (_la - 126)) & ((1 << (sequenceParser.BitmarkMinus - 126)) | (1 << (sequenceParser.BitmarkPlus - 126)) | (1 << (sequenceParser.URL - 126)) | (1 << (sequenceParser.LIST_LINE - 126)))) !== 0));
				this.state = 789;
				this.match(sequenceParser.CL);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 790;
				this.match(sequenceParser.AtReference);
				this.state = 798;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << sequenceParser.S) | (1 << sequenceParser.OPESC) | (1 << sequenceParser.OPS) | (1 << sequenceParser.COLON) | (1 << sequenceParser.AMP) | (1 << sequenceParser.Greater) | (1 << sequenceParser.Less))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (sequenceParser.RightAngle - 32)) | (1 << (sequenceParser.RightArrow - 32)) | (1 << (sequenceParser.DBLEQ - 32)) | (1 << (sequenceParser.NUMERIC - 32)) | (1 << (sequenceParser.STRING - 32)) | (1 << (sequenceParser.NL - 32)) | (1 << (sequenceParser.SENTENCE - 32)) | (1 << (sequenceParser.BARSTRING - 32)))) !== 0) || ((((_la - 77)) & ~0x1F) === 0 && ((1 << (_la - 77)) & ((1 << (sequenceParser.AmpAudio - 77)) | (1 << (sequenceParser.AmpImage - 77)) | (1 << (sequenceParser.AmpVideo - 77)) | (1 << (sequenceParser.AmpArticle - 77)) | (1 << (sequenceParser.AmpDocument - 77)) | (1 << (sequenceParser.AmpApp - 77)) | (1 << (sequenceParser.AmpWebsite - 77)) | (1 << (sequenceParser.AmpAudioLink - 77)) | (1 << (sequenceParser.AmpImageLink - 77)) | (1 << (sequenceParser.AmpArticleLink - 77)) | (1 << (sequenceParser.AmpDocumentLink - 77)))) !== 0) || ((((_la - 126)) & ~0x1F) === 0 && ((1 << (_la - 126)) & ((1 << (sequenceParser.BitmarkMinus - 126)) | (1 << (sequenceParser.BitmarkPlus - 126)) | (1 << (sequenceParser.URL - 126)) | (1 << (sequenceParser.LIST_LINE - 126)))) !== 0)) {
					{
					this.state = 796;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 98, this._ctx) ) {
					case 1:
						{
						this.state = 791;
						this.s_and_w();
						}
						break;

					case 2:
						{
						this.state = 792;
						this.match(sequenceParser.COLON);
						}
						break;

					case 3:
						{
						this.state = 793;
						this.match(sequenceParser.URL);
						}
						break;

					case 4:
						{
						this.state = 794;
						this.match(sequenceParser.NL);
						}
						break;

					case 5:
						{
						this.state = 795;
						this.match(sequenceParser.S);
						}
						break;
					}
					}
					this.state = 800;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 801;
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
		this.enterRule(_localctx, 116, sequenceParser.RULE_progress);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 804;
			this.match(sequenceParser.AtProgress);
			this.state = 805;
			this.s_and_w();
			this.state = 806;
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
		this.enterRule(_localctx, 118, sequenceParser.RULE_dateprop);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 808;
			this.match(sequenceParser.AtDate);
			this.state = 812;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				this.state = 812;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 101, this._ctx) ) {
				case 1:
					{
					this.state = 809;
					this.s_and_w();
					}
					break;

				case 2:
					{
					this.state = 810;
					this.match(sequenceParser.COLON);
					}
					break;

				case 3:
					{
					this.state = 811;
					this.match(sequenceParser.NL);
					}
					break;
				}
				}
				this.state = 814;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << sequenceParser.S) | (1 << sequenceParser.OPESC) | (1 << sequenceParser.OPS) | (1 << sequenceParser.COLON) | (1 << sequenceParser.AMP) | (1 << sequenceParser.Greater) | (1 << sequenceParser.Less))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (sequenceParser.RightAngle - 32)) | (1 << (sequenceParser.RightArrow - 32)) | (1 << (sequenceParser.DBLEQ - 32)) | (1 << (sequenceParser.NUMERIC - 32)) | (1 << (sequenceParser.STRING - 32)) | (1 << (sequenceParser.NL - 32)) | (1 << (sequenceParser.SENTENCE - 32)) | (1 << (sequenceParser.BARSTRING - 32)))) !== 0) || ((((_la - 77)) & ~0x1F) === 0 && ((1 << (_la - 77)) & ((1 << (sequenceParser.AmpAudio - 77)) | (1 << (sequenceParser.AmpImage - 77)) | (1 << (sequenceParser.AmpVideo - 77)) | (1 << (sequenceParser.AmpArticle - 77)) | (1 << (sequenceParser.AmpDocument - 77)) | (1 << (sequenceParser.AmpApp - 77)) | (1 << (sequenceParser.AmpWebsite - 77)) | (1 << (sequenceParser.AmpAudioLink - 77)) | (1 << (sequenceParser.AmpImageLink - 77)) | (1 << (sequenceParser.AmpArticleLink - 77)) | (1 << (sequenceParser.AmpDocumentLink - 77)))) !== 0) || ((((_la - 126)) & ~0x1F) === 0 && ((1 << (_la - 126)) & ((1 << (sequenceParser.BitmarkMinus - 126)) | (1 << (sequenceParser.BitmarkPlus - 126)) | (1 << (sequenceParser.URL - 126)) | (1 << (sequenceParser.LIST_LINE - 126)))) !== 0));
			this.state = 816;
			this.match(sequenceParser.CL);
			this.state = 818;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === sequenceParser.AtDate) {
				{
				this.state = 817;
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
		this.enterRule(_localctx, 120, sequenceParser.RULE_dateprop_chained);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 820;
			this.match(sequenceParser.AtDate);
			this.state = 824;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				this.state = 824;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 104, this._ctx) ) {
				case 1:
					{
					this.state = 821;
					this.s_and_w();
					}
					break;

				case 2:
					{
					this.state = 822;
					this.match(sequenceParser.COLON);
					}
					break;

				case 3:
					{
					this.state = 823;
					this.match(sequenceParser.NL);
					}
					break;
				}
				}
				this.state = 826;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << sequenceParser.S) | (1 << sequenceParser.OPESC) | (1 << sequenceParser.OPS) | (1 << sequenceParser.COLON) | (1 << sequenceParser.AMP) | (1 << sequenceParser.Greater) | (1 << sequenceParser.Less))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (sequenceParser.RightAngle - 32)) | (1 << (sequenceParser.RightArrow - 32)) | (1 << (sequenceParser.DBLEQ - 32)) | (1 << (sequenceParser.NUMERIC - 32)) | (1 << (sequenceParser.STRING - 32)) | (1 << (sequenceParser.NL - 32)) | (1 << (sequenceParser.SENTENCE - 32)) | (1 << (sequenceParser.BARSTRING - 32)))) !== 0) || ((((_la - 77)) & ~0x1F) === 0 && ((1 << (_la - 77)) & ((1 << (sequenceParser.AmpAudio - 77)) | (1 << (sequenceParser.AmpImage - 77)) | (1 << (sequenceParser.AmpVideo - 77)) | (1 << (sequenceParser.AmpArticle - 77)) | (1 << (sequenceParser.AmpDocument - 77)) | (1 << (sequenceParser.AmpApp - 77)) | (1 << (sequenceParser.AmpWebsite - 77)) | (1 << (sequenceParser.AmpAudioLink - 77)) | (1 << (sequenceParser.AmpImageLink - 77)) | (1 << (sequenceParser.AmpArticleLink - 77)) | (1 << (sequenceParser.AmpDocumentLink - 77)))) !== 0) || ((((_la - 126)) & ~0x1F) === 0 && ((1 << (_la - 126)) & ((1 << (sequenceParser.BitmarkMinus - 126)) | (1 << (sequenceParser.BitmarkPlus - 126)) | (1 << (sequenceParser.URL - 126)) | (1 << (sequenceParser.LIST_LINE - 126)))) !== 0));
			this.state = 828;
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
		this.enterRule(_localctx, 122, sequenceParser.RULE_instruction);
		let _la: number;
		try {
			let _alt: number;
			this.state = 876;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 114, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 830;
				this.match(sequenceParser.OPB);
				this.state = 834;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === sequenceParser.NL) {
					{
					{
					this.state = 831;
					this.match(sequenceParser.NL);
					}
					}
					this.state = 836;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 838;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 107, this._ctx) ) {
				case 1:
					{
					this.state = 837;
					this.s_and_w();
					}
					break;
				}
				this.state = 861;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << sequenceParser.S) | (1 << sequenceParser.OPESC) | (1 << sequenceParser.OPS) | (1 << sequenceParser.COLON) | (1 << sequenceParser.AMP) | (1 << sequenceParser.Greater) | (1 << sequenceParser.Less))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (sequenceParser.RightAngle - 32)) | (1 << (sequenceParser.RightArrow - 32)) | (1 << (sequenceParser.DBLEQ - 32)) | (1 << (sequenceParser.NUMERIC - 32)) | (1 << (sequenceParser.STRING - 32)) | (1 << (sequenceParser.SENTENCE - 32)) | (1 << (sequenceParser.BARSTRING - 32)))) !== 0) || ((((_la - 77)) & ~0x1F) === 0 && ((1 << (_la - 77)) & ((1 << (sequenceParser.AmpAudio - 77)) | (1 << (sequenceParser.AmpImage - 77)) | (1 << (sequenceParser.AmpVideo - 77)) | (1 << (sequenceParser.AmpArticle - 77)) | (1 << (sequenceParser.AmpDocument - 77)) | (1 << (sequenceParser.AmpApp - 77)) | (1 << (sequenceParser.AmpWebsite - 77)) | (1 << (sequenceParser.AmpAudioLink - 77)) | (1 << (sequenceParser.AmpImageLink - 77)) | (1 << (sequenceParser.AmpArticleLink - 77)) | (1 << (sequenceParser.AmpDocumentLink - 77)))) !== 0) || ((((_la - 126)) & ~0x1F) === 0 && ((1 << (_la - 126)) & ((1 << (sequenceParser.BitmarkMinus - 126)) | (1 << (sequenceParser.BitmarkPlus - 126)) | (1 << (sequenceParser.URL - 126)) | (1 << (sequenceParser.LIST_LINE - 126)))) !== 0)) {
					{
					{
					this.state = 840;
					this.s_and_w();
					this.state = 850;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 109, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 841;
							this.match(sequenceParser.NL);
							this.state = 845;
							this._errHandler.sync(this);
							_alt = this.interpreter.adaptivePredict(this._input, 108, this._ctx);
							while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
								if (_alt === 1) {
									{
									{
									this.state = 842;
									this.match(sequenceParser.S);
									}
									}
								}
								this.state = 847;
								this._errHandler.sync(this);
								_alt = this.interpreter.adaptivePredict(this._input, 108, this._ctx);
							}
							}
							}
						}
						this.state = 852;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 109, this._ctx);
					}
					this.state = 856;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === sequenceParser.NL) {
						{
						{
						this.state = 853;
						this.match(sequenceParser.NL);
						}
						}
						this.state = 858;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
					}
					this.state = 863;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 864;
				this.match(sequenceParser.CL);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 865;
				this.match(sequenceParser.OPB);
				this.state = 869;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === sequenceParser.NL) {
					{
					{
					this.state = 866;
					this.match(sequenceParser.NL);
					}
					}
					this.state = 871;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 873;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << sequenceParser.S) | (1 << sequenceParser.OPESC) | (1 << sequenceParser.OPS) | (1 << sequenceParser.COLON) | (1 << sequenceParser.AMP) | (1 << sequenceParser.Greater) | (1 << sequenceParser.Less))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (sequenceParser.RightAngle - 32)) | (1 << (sequenceParser.RightArrow - 32)) | (1 << (sequenceParser.DBLEQ - 32)) | (1 << (sequenceParser.NUMERIC - 32)) | (1 << (sequenceParser.STRING - 32)) | (1 << (sequenceParser.SENTENCE - 32)) | (1 << (sequenceParser.BARSTRING - 32)))) !== 0) || ((((_la - 77)) & ~0x1F) === 0 && ((1 << (_la - 77)) & ((1 << (sequenceParser.AmpAudio - 77)) | (1 << (sequenceParser.AmpImage - 77)) | (1 << (sequenceParser.AmpVideo - 77)) | (1 << (sequenceParser.AmpArticle - 77)) | (1 << (sequenceParser.AmpDocument - 77)) | (1 << (sequenceParser.AmpApp - 77)) | (1 << (sequenceParser.AmpWebsite - 77)) | (1 << (sequenceParser.AmpAudioLink - 77)) | (1 << (sequenceParser.AmpImageLink - 77)) | (1 << (sequenceParser.AmpArticleLink - 77)) | (1 << (sequenceParser.AmpDocumentLink - 77)))) !== 0) || ((((_la - 126)) & ~0x1F) === 0 && ((1 << (_la - 126)) & ((1 << (sequenceParser.BitmarkMinus - 126)) | (1 << (sequenceParser.BitmarkPlus - 126)) | (1 << (sequenceParser.URL - 126)) | (1 << (sequenceParser.LIST_LINE - 126)))) !== 0)) {
					{
					this.state = 872;
					this.s_and_w();
					}
				}

				this.state = 875;
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
		this.enterRule(_localctx, 124, sequenceParser.RULE_hint);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 878;
			this.match(sequenceParser.OPQ);
			this.state = 880;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 879;
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
				this.state = 882;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << sequenceParser.OPDOT) | (1 << sequenceParser.S) | (1 << sequenceParser.BitSequence) | (1 << sequenceParser.COMMENT) | (1 << sequenceParser.Image_type) | (1 << sequenceParser.Audio_type) | (1 << sequenceParser.Video_type) | (1 << sequenceParser.OPDOLL) | (1 << sequenceParser.OPBUL) | (1 << sequenceParser.OPESC) | (1 << sequenceParser.OPRANGLES) | (1 << sequenceParser.OPRANGLEL) | (1 << sequenceParser.OPDANGLE) | (1 << sequenceParser.OPU) | (1 << sequenceParser.OPB) | (1 << sequenceParser.OPQ) | (1 << sequenceParser.OPA) | (1 << sequenceParser.OPP) | (1 << sequenceParser.OPM) | (1 << sequenceParser.OPS) | (1 << sequenceParser.OPR) | (1 << sequenceParser.OPC) | (1 << sequenceParser.OPHASH) | (1 << sequenceParser.COLON) | (1 << sequenceParser.AMP) | (1 << sequenceParser.DBLCOLON) | (1 << sequenceParser.PLUS) | (1 << sequenceParser.DotAt) | (1 << sequenceParser.Greater) | (1 << sequenceParser.Less))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (sequenceParser.RightAngle - 32)) | (1 << (sequenceParser.RightArrow - 32)) | (1 << (sequenceParser.Dot - 32)) | (1 << (sequenceParser.DBLEQ - 32)) | (1 << (sequenceParser.DBLMI - 32)) | (1 << (sequenceParser.HSPL - 32)) | (1 << (sequenceParser.SSPL - 32)) | (1 << (sequenceParser.SSPL2 - 32)) | (1 << (sequenceParser.DCANY - 32)) | (1 << (sequenceParser.ArticleText - 32)) | (1 << (sequenceParser.NOTCL - 32)) | (1 << (sequenceParser.NUMERIC - 32)) | (1 << (sequenceParser.STRING - 32)) | (1 << (sequenceParser.NL - 32)) | (1 << (sequenceParser.SENTENCE - 32)) | (1 << (sequenceParser.BARSTRING - 32)) | (1 << (sequenceParser.OPAT - 32)) | (1 << (sequenceParser.AtProgress - 32)) | (1 << (sequenceParser.AtReference - 32)) | (1 << (sequenceParser.AtWidth - 32)) | (1 << (sequenceParser.AtHeight - 32)) | (1 << (sequenceParser.AtProgressPoints - 32)) | (1 << (sequenceParser.AtShortanswer - 32)) | (1 << (sequenceParser.AtLonganswer - 32)) | (1 << (sequenceParser.AtExampleWithStr - 32)) | (1 << (sequenceParser.AtExamplecol - 32)) | (1 << (sequenceParser.AtExamplecl - 32)) | (1 << (sequenceParser.AtPartialAnswerS - 32)) | (1 << (sequenceParser.AtPartialAnswer - 32)) | (1 << (sequenceParser.AtLabeltrue - 32)) | (1 << (sequenceParser.AtLabelfalse - 32)) | (1 << (sequenceParser.AtPoints - 32)))) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (sequenceParser.AtSrc - 64)) | (1 << (sequenceParser.OPATALT - 64)) | (1 << (sequenceParser.OPAMARK - 64)) | (1 << (sequenceParser.ShowInIndex - 64)) | (1 << (sequenceParser.OpAtCaption - 64)) | (1 << (sequenceParser.OpAtLicense - 64)) | (1 << (sequenceParser.OpAtCopyright - 64)) | (1 << (sequenceParser.OpAtSearch - 64)) | (1 << (sequenceParser.OpAtIsTracked - 64)) | (1 << (sequenceParser.OpAtIsInfoOnly - 64)) | (1 << (sequenceParser.AtDate - 64)) | (1 << (sequenceParser.Http - 64)) | (1 << (sequenceParser.Https - 64)) | (1 << (sequenceParser.AmpAudio - 64)) | (1 << (sequenceParser.AmpImage - 64)) | (1 << (sequenceParser.AmpImageZoom - 64)) | (1 << (sequenceParser.AmpImageWAudio - 64)) | (1 << (sequenceParser.AmpVideo - 64)) | (1 << (sequenceParser.AmpArticle - 64)) | (1 << (sequenceParser.AmpDocument - 64)) | (1 << (sequenceParser.AmpApp - 64)) | (1 << (sequenceParser.AmpWebsite - 64)) | (1 << (sequenceParser.AmpStillImageFilm - 64)) | (1 << (sequenceParser.AmpPdf - 64)) | (1 << (sequenceParser.OpAmpAudio - 64)) | (1 << (sequenceParser.OpAmpImage - 64)) | (1 << (sequenceParser.OpAmpImageZoom - 64)) | (1 << (sequenceParser.OpAmpImageWAudio - 64)) | (1 << (sequenceParser.OpAmpVideo - 64)) | (1 << (sequenceParser.OpAmpArticle - 64)) | (1 << (sequenceParser.OpAmpArticleAtt - 64)) | (1 << (sequenceParser.OpAmpDocument - 64)))) !== 0) || ((((_la - 96)) & ~0x1F) === 0 && ((1 << (_la - 96)) & ((1 << (sequenceParser.OpAmpApp - 96)) | (1 << (sequenceParser.OpAmpWebsite - 96)) | (1 << (sequenceParser.OpAmpStillImageFilm - 96)) | (1 << (sequenceParser.BracEnclose - 96)) | (1 << (sequenceParser.AmpAudioLink - 96)) | (1 << (sequenceParser.AmpImageLink - 96)) | (1 << (sequenceParser.AmpVideoLink - 96)) | (1 << (sequenceParser.AmpArticleLink - 96)) | (1 << (sequenceParser.AmpDocumentLink - 96)) | (1 << (sequenceParser.AmpAppLink - 96)) | (1 << (sequenceParser.AmpWebsiteLink - 96)) | (1 << (sequenceParser.AmpStillImageFilmLink - 96)) | (1 << (sequenceParser.OpAmpAudioLink - 96)) | (1 << (sequenceParser.OpAmpImageLink - 96)) | (1 << (sequenceParser.OpAmpVideoLink - 96)) | (1 << (sequenceParser.OpAmpArticleLink - 96)) | (1 << (sequenceParser.OpAmpDocumentLink - 96)) | (1 << (sequenceParser.OpAmpAppLink - 96)) | (1 << (sequenceParser.OpAmpWebsiteLink - 96)) | (1 << (sequenceParser.OpAmpStillImageFilmLink - 96)) | (1 << (sequenceParser.AmpImageEmbed - 96)) | (1 << (sequenceParser.AmpVideoEmbed - 96)) | (1 << (sequenceParser.AmpAudioEmbed - 96)) | (1 << (sequenceParser.AmpDocumentEmbed - 96)) | (1 << (sequenceParser.AmpStillImageFilmEmbed - 96)) | (1 << (sequenceParser.OpAmpImageEmbed - 96)) | (1 << (sequenceParser.OpAmpVideoEmbed - 96)) | (1 << (sequenceParser.OpAmpAudioEmbed - 96)) | (1 << (sequenceParser.OpAmpDocumentEmbed - 96)) | (1 << (sequenceParser.OpAmpStillImageFilmEmbed - 96)) | (1 << (sequenceParser.BitmarkMinus - 96)) | (1 << (sequenceParser.BitmarkPlus - 96)))) !== 0) || ((((_la - 128)) & ~0x1F) === 0 && ((1 << (_la - 128)) & ((1 << (sequenceParser.ColonText - 128)) | (1 << (sequenceParser.ColonJson - 128)) | (1 << (sequenceParser.Prosemirror - 128)) | (1 << (sequenceParser.Placeholder - 128)) | (1 << (sequenceParser.BASIC - 128)) | (1 << (sequenceParser.JPG - 128)) | (1 << (sequenceParser.PNG - 128)) | (1 << (sequenceParser.GIF - 128)) | (1 << (sequenceParser.SVG - 128)) | (1 << (sequenceParser.MP2 - 128)) | (1 << (sequenceParser.MP3 - 128)) | (1 << (sequenceParser.MP4 - 128)) | (1 << (sequenceParser.FLV - 128)) | (1 << (sequenceParser.WMV - 128)) | (1 << (sequenceParser.MPEG - 128)) | (1 << (sequenceParser.MPG - 128)) | (1 << (sequenceParser.TEL - 128)) | (1 << (sequenceParser.DotArticleAtt - 128)) | (1 << (sequenceParser.STAR - 128)) | (1 << (sequenceParser.URL - 128)) | (1 << (sequenceParser.LIST_LINE - 128)) | (1 << (sequenceParser.ENCLBARS - 128)))) !== 0));
			this.state = 884;
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
		this.enterRule(_localctx, 126, sequenceParser.RULE_title);
		let _la: number;
		try {
			this.state = 898;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 118, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 886;
				this.match(sequenceParser.OPHASH);
				this.state = 889;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					this.state = 889;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case sequenceParser.S:
					case sequenceParser.OPESC:
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
						this.state = 887;
						this.s_and_w();
						}
						break;
					case sequenceParser.NL:
						{
						this.state = 888;
						this.match(sequenceParser.NL);
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					}
					this.state = 891;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << sequenceParser.S) | (1 << sequenceParser.OPESC) | (1 << sequenceParser.OPS) | (1 << sequenceParser.COLON) | (1 << sequenceParser.AMP) | (1 << sequenceParser.Greater) | (1 << sequenceParser.Less))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (sequenceParser.RightAngle - 32)) | (1 << (sequenceParser.RightArrow - 32)) | (1 << (sequenceParser.DBLEQ - 32)) | (1 << (sequenceParser.NUMERIC - 32)) | (1 << (sequenceParser.STRING - 32)) | (1 << (sequenceParser.NL - 32)) | (1 << (sequenceParser.SENTENCE - 32)) | (1 << (sequenceParser.BARSTRING - 32)))) !== 0) || ((((_la - 77)) & ~0x1F) === 0 && ((1 << (_la - 77)) & ((1 << (sequenceParser.AmpAudio - 77)) | (1 << (sequenceParser.AmpImage - 77)) | (1 << (sequenceParser.AmpVideo - 77)) | (1 << (sequenceParser.AmpArticle - 77)) | (1 << (sequenceParser.AmpDocument - 77)) | (1 << (sequenceParser.AmpApp - 77)) | (1 << (sequenceParser.AmpWebsite - 77)) | (1 << (sequenceParser.AmpAudioLink - 77)) | (1 << (sequenceParser.AmpImageLink - 77)) | (1 << (sequenceParser.AmpArticleLink - 77)) | (1 << (sequenceParser.AmpDocumentLink - 77)))) !== 0) || ((((_la - 126)) & ~0x1F) === 0 && ((1 << (_la - 126)) & ((1 << (sequenceParser.BitmarkMinus - 126)) | (1 << (sequenceParser.BitmarkPlus - 126)) | (1 << (sequenceParser.URL - 126)) | (1 << (sequenceParser.LIST_LINE - 126)))) !== 0));
				this.state = 893;
				this.match(sequenceParser.CL);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 894;
				this.match(sequenceParser.OPHASH);
				this.state = 895;
				this.s_and_w();
				this.state = 896;
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
		this.enterRule(_localctx, 128, sequenceParser.RULE_bool_label);
		try {
			this.state = 908;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case sequenceParser.AtLabeltrue:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 900;
				this.match(sequenceParser.AtLabeltrue);
				this.state = 901;
				this.s_and_w();
				this.state = 902;
				this.match(sequenceParser.CL);
				}
				break;
			case sequenceParser.AtLabelfalse:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 904;
				this.match(sequenceParser.AtLabelfalse);
				this.state = 905;
				this.s_and_w();
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
	public progress_points(): Progress_pointsContext {
		let _localctx: Progress_pointsContext = new Progress_pointsContext(this._ctx, this.state);
		this.enterRule(_localctx, 130, sequenceParser.RULE_progress_points);
		try {
			this.state = 919;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 120, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 910;
				this.match(sequenceParser.AtProgressPoints);
				this.state = 911;
				this.match(sequenceParser.COLON);
				this.state = 912;
				this.match(sequenceParser.NUMERIC);
				this.state = 913;
				this.match(sequenceParser.CL);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 914;
				this.match(sequenceParser.AtProgressPoints);
				this.state = 915;
				this.match(sequenceParser.COLON);
				this.state = 916;
				this.s_and_w();
				this.state = 917;
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
		this.enterRule(_localctx, 132, sequenceParser.RULE_istracked);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 921;
			this.match(sequenceParser.OpAtIsTracked);
			this.state = 922;
			this.s_and_w();
			this.state = 923;
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
		this.enterRule(_localctx, 134, sequenceParser.RULE_isinfoonly);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 925;
			this.match(sequenceParser.OpAtIsInfoOnly);
			this.state = 926;
			this.s_and_w();
			this.state = 927;
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
		this.enterRule(_localctx, 136, sequenceParser.RULE_atdef);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 929;
			this.atdef_();
			this.state = 939;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 122, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 933;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === sequenceParser.NL) {
						{
						{
						this.state = 930;
						this.match(sequenceParser.NL);
						}
						}
						this.state = 935;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					this.state = 936;
					this.atdef_();
					}
					}
				}
				this.state = 941;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 122, this._ctx);
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
		this.enterRule(_localctx, 138, sequenceParser.RULE_atdef_);
		let _la: number;
		try {
			let _alt: number;
			this.state = 964;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case sequenceParser.OPA:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 942;
				this.match(sequenceParser.OPA);
				this.state = 943;
				this.s_and_w();
				this.state = 944;
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
				this.state = 945;
				this.s_and_w();
				this.state = 951;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << sequenceParser.S) | (1 << sequenceParser.OPESC) | (1 << sequenceParser.OPS) | (1 << sequenceParser.COLON) | (1 << sequenceParser.AMP) | (1 << sequenceParser.Greater) | (1 << sequenceParser.Less))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (sequenceParser.RightAngle - 32)) | (1 << (sequenceParser.RightArrow - 32)) | (1 << (sequenceParser.DBLEQ - 32)) | (1 << (sequenceParser.NUMERIC - 32)) | (1 << (sequenceParser.STRING - 32)) | (1 << (sequenceParser.NL - 32)) | (1 << (sequenceParser.SENTENCE - 32)) | (1 << (sequenceParser.BARSTRING - 32)))) !== 0) || ((((_la - 77)) & ~0x1F) === 0 && ((1 << (_la - 77)) & ((1 << (sequenceParser.AmpAudio - 77)) | (1 << (sequenceParser.AmpImage - 77)) | (1 << (sequenceParser.AmpVideo - 77)) | (1 << (sequenceParser.AmpArticle - 77)) | (1 << (sequenceParser.AmpDocument - 77)) | (1 << (sequenceParser.AmpApp - 77)) | (1 << (sequenceParser.AmpWebsite - 77)) | (1 << (sequenceParser.AmpAudioLink - 77)) | (1 << (sequenceParser.AmpImageLink - 77)) | (1 << (sequenceParser.AmpArticleLink - 77)) | (1 << (sequenceParser.AmpDocumentLink - 77)))) !== 0) || ((((_la - 126)) & ~0x1F) === 0 && ((1 << (_la - 126)) & ((1 << (sequenceParser.BitmarkMinus - 126)) | (1 << (sequenceParser.BitmarkPlus - 126)) | (1 << (sequenceParser.URL - 126)) | (1 << (sequenceParser.LIST_LINE - 126)))) !== 0)) {
					{
					this.state = 949;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 123, this._ctx) ) {
					case 1:
						{
						this.state = 946;
						this.match(sequenceParser.NL);
						}
						break;

					case 2:
						{
						this.state = 947;
						this.match(sequenceParser.COLON);
						}
						break;

					case 3:
						{
						this.state = 948;
						this.s_and_w();
						}
						break;
					}
					}
					this.state = 953;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 954;
				this.match(sequenceParser.CL);
				}
				break;
			case sequenceParser.OpAtCopyright:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 956;
				this.match(sequenceParser.OpAtCopyright);
				this.state = 960;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 125, this._ctx);
				while (_alt !== 1 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1 + 1) {
						{
						{
						this.state = 957;
						this.matchWildcard();
						}
						}
					}
					this.state = 962;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 125, this._ctx);
				}
				this.state = 963;
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
	public dollarans(): DollaransContext {
		let _localctx: DollaransContext = new DollaransContext(this._ctx, this.state);
		this.enterRule(_localctx, 140, sequenceParser.RULE_dollarans);
		let _la: number;
		try {
			this.state = 985;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 131, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 966;
				this.match(sequenceParser.OPDOLL);
				this.state = 970;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					this.state = 970;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 127, this._ctx) ) {
					case 1:
						{
						this.state = 967;
						this.s_and_w();
						}
						break;

					case 2:
						{
						this.state = 968;
						this.match(sequenceParser.COLON);
						}
						break;

					case 3:
						{
						this.state = 969;
						this.match(sequenceParser.NL);
						}
						break;
					}
					}
					this.state = 972;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << sequenceParser.S) | (1 << sequenceParser.OPESC) | (1 << sequenceParser.OPS) | (1 << sequenceParser.COLON) | (1 << sequenceParser.AMP) | (1 << sequenceParser.Greater) | (1 << sequenceParser.Less))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (sequenceParser.RightAngle - 32)) | (1 << (sequenceParser.RightArrow - 32)) | (1 << (sequenceParser.DBLEQ - 32)) | (1 << (sequenceParser.NUMERIC - 32)) | (1 << (sequenceParser.STRING - 32)) | (1 << (sequenceParser.NL - 32)) | (1 << (sequenceParser.SENTENCE - 32)) | (1 << (sequenceParser.BARSTRING - 32)))) !== 0) || ((((_la - 77)) & ~0x1F) === 0 && ((1 << (_la - 77)) & ((1 << (sequenceParser.AmpAudio - 77)) | (1 << (sequenceParser.AmpImage - 77)) | (1 << (sequenceParser.AmpVideo - 77)) | (1 << (sequenceParser.AmpArticle - 77)) | (1 << (sequenceParser.AmpDocument - 77)) | (1 << (sequenceParser.AmpApp - 77)) | (1 << (sequenceParser.AmpWebsite - 77)) | (1 << (sequenceParser.AmpAudioLink - 77)) | (1 << (sequenceParser.AmpImageLink - 77)) | (1 << (sequenceParser.AmpArticleLink - 77)) | (1 << (sequenceParser.AmpDocumentLink - 77)))) !== 0) || ((((_la - 126)) & ~0x1F) === 0 && ((1 << (_la - 126)) & ((1 << (sequenceParser.BitmarkMinus - 126)) | (1 << (sequenceParser.BitmarkPlus - 126)) | (1 << (sequenceParser.URL - 126)) | (1 << (sequenceParser.LIST_LINE - 126)))) !== 0));
				this.state = 974;
				this.match(sequenceParser.CL);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 975;
				this.match(sequenceParser.OPDOLL);
				this.state = 981;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << sequenceParser.S) | (1 << sequenceParser.OPESC) | (1 << sequenceParser.OPS) | (1 << sequenceParser.COLON) | (1 << sequenceParser.AMP) | (1 << sequenceParser.Greater) | (1 << sequenceParser.Less))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (sequenceParser.RightAngle - 32)) | (1 << (sequenceParser.RightArrow - 32)) | (1 << (sequenceParser.DBLEQ - 32)) | (1 << (sequenceParser.NUMERIC - 32)) | (1 << (sequenceParser.STRING - 32)) | (1 << (sequenceParser.NL - 32)) | (1 << (sequenceParser.SENTENCE - 32)) | (1 << (sequenceParser.BARSTRING - 32)))) !== 0) || ((((_la - 77)) & ~0x1F) === 0 && ((1 << (_la - 77)) & ((1 << (sequenceParser.AmpAudio - 77)) | (1 << (sequenceParser.AmpImage - 77)) | (1 << (sequenceParser.AmpVideo - 77)) | (1 << (sequenceParser.AmpArticle - 77)) | (1 << (sequenceParser.AmpDocument - 77)) | (1 << (sequenceParser.AmpApp - 77)) | (1 << (sequenceParser.AmpWebsite - 77)) | (1 << (sequenceParser.AmpAudioLink - 77)) | (1 << (sequenceParser.AmpImageLink - 77)) | (1 << (sequenceParser.AmpArticleLink - 77)) | (1 << (sequenceParser.AmpDocumentLink - 77)))) !== 0) || ((((_la - 126)) & ~0x1F) === 0 && ((1 << (_la - 126)) & ((1 << (sequenceParser.BitmarkMinus - 126)) | (1 << (sequenceParser.BitmarkPlus - 126)) | (1 << (sequenceParser.URL - 126)) | (1 << (sequenceParser.LIST_LINE - 126)))) !== 0)) {
					{
					this.state = 979;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 129, this._ctx) ) {
					case 1:
						{
						this.state = 976;
						this.s_and_w();
						}
						break;

					case 2:
						{
						this.state = 977;
						this.match(sequenceParser.COLON);
						}
						break;

					case 3:
						{
						this.state = 978;
						this.match(sequenceParser.NL);
						}
						break;
					}
					}
					this.state = 983;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 984;
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
		this.enterRule(_localctx, 142, sequenceParser.RULE_anchor);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 987;
			this.match(sequenceParser.OPDANGLE);
			this.state = 989;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << sequenceParser.S) | (1 << sequenceParser.OPESC) | (1 << sequenceParser.OPS) | (1 << sequenceParser.COLON) | (1 << sequenceParser.AMP) | (1 << sequenceParser.Greater) | (1 << sequenceParser.Less))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (sequenceParser.RightAngle - 32)) | (1 << (sequenceParser.RightArrow - 32)) | (1 << (sequenceParser.DBLEQ - 32)) | (1 << (sequenceParser.NUMERIC - 32)) | (1 << (sequenceParser.STRING - 32)) | (1 << (sequenceParser.SENTENCE - 32)) | (1 << (sequenceParser.BARSTRING - 32)))) !== 0) || ((((_la - 77)) & ~0x1F) === 0 && ((1 << (_la - 77)) & ((1 << (sequenceParser.AmpAudio - 77)) | (1 << (sequenceParser.AmpImage - 77)) | (1 << (sequenceParser.AmpVideo - 77)) | (1 << (sequenceParser.AmpArticle - 77)) | (1 << (sequenceParser.AmpDocument - 77)) | (1 << (sequenceParser.AmpApp - 77)) | (1 << (sequenceParser.AmpWebsite - 77)) | (1 << (sequenceParser.AmpAudioLink - 77)) | (1 << (sequenceParser.AmpImageLink - 77)) | (1 << (sequenceParser.AmpArticleLink - 77)) | (1 << (sequenceParser.AmpDocumentLink - 77)))) !== 0) || ((((_la - 126)) & ~0x1F) === 0 && ((1 << (_la - 126)) & ((1 << (sequenceParser.BitmarkMinus - 126)) | (1 << (sequenceParser.BitmarkPlus - 126)) | (1 << (sequenceParser.URL - 126)) | (1 << (sequenceParser.LIST_LINE - 126)))) !== 0)) {
				{
				this.state = 988;
				this.s_and_w();
				}
			}

			this.state = 991;
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
		this.enterRule(_localctx, 144, sequenceParser.RULE_dcolon);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 993;
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
		this.enterRule(_localctx, 146, sequenceParser.RULE_s_and_w);
		let _la: number;
		try {
			let _alt: number;
			this.state = 1041;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 140, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 995;
				this.match(sequenceParser.STRING);
				this.state = 1002;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 134, this._ctx) ) {
				case 1:
					{
					this.state = 997;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					do {
						{
						{
						this.state = 996;
						this.match(sequenceParser.S);
						}
						}
						this.state = 999;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					} while (_la === sequenceParser.S);
					this.state = 1001;
					this.match(sequenceParser.NUMERIC);
					}
					break;
				}
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1004;
				this.words();
				this.state = 1011;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 136, this._ctx) ) {
				case 1:
					{
					this.state = 1006;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					do {
						{
						{
						this.state = 1005;
						this.match(sequenceParser.S);
						}
						}
						this.state = 1008;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					} while (_la === sequenceParser.S);
					this.state = 1010;
					this.match(sequenceParser.NUMERIC);
					}
					break;
				}
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1013;
				this.match(sequenceParser.OPS);
				this.state = 1014;
				this.s_and_w();
				this.state = 1015;
				this.match(sequenceParser.CL);
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1017;
				this.match(sequenceParser.NUMERIC);
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 1021;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === sequenceParser.S) {
					{
					{
					this.state = 1018;
					this.match(sequenceParser.S);
					}
					}
					this.state = 1023;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1024;
				this.match(sequenceParser.COLON);
				this.state = 1028;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 138, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 1025;
						this.match(sequenceParser.S);
						}
						}
					}
					this.state = 1030;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 138, this._ctx);
				}
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 1031;
				this.match(sequenceParser.AMP);
				this.state = 1035;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 139, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 1032;
						this.match(sequenceParser.S);
						}
						}
					}
					this.state = 1037;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 139, this._ctx);
				}
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 1038;
				this.match(sequenceParser.DBLEQ);
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 1039;
				this.match(sequenceParser.URL);
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 1040;
				this.bracket_escaped();
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
		this.enterRule(_localctx, 148, sequenceParser.RULE_dclines);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1043;
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
	public bracket_escaped(): Bracket_escapedContext {
		let _localctx: Bracket_escapedContext = new Bracket_escapedContext(this._ctx, this.state);
		this.enterRule(_localctx, 150, sequenceParser.RULE_bracket_escaped);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1045;
			this.match(sequenceParser.OPESC);
			this.state = 1047;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 1046;
					this.s_and_w();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 1049;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 141, this._ctx);
			} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
			this.state = 1052;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 142, this._ctx) ) {
			case 1:
				{
				this.state = 1051;
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
	public clnsp(): ClnspContext {
		let _localctx: ClnspContext = new ClnspContext(this._ctx, this.state);
		this.enterRule(_localctx, 152, sequenceParser.RULE_clnsp);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1054;
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
		this.enterRule(_localctx, 154, sequenceParser.RULE_sspl);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1056;
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
		this.enterRule(_localctx, 156, sequenceParser.RULE_words);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1082;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					this.state = 1082;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 143, this._ctx) ) {
					case 1:
						{
						this.state = 1058;
						this.match(sequenceParser.SENTENCE);
						}
						break;

					case 2:
						{
						this.state = 1059;
						this.match(sequenceParser.BARSTRING);
						}
						break;

					case 3:
						{
						this.state = 1060;
						this.match(sequenceParser.LIST_LINE);
						}
						break;

					case 4:
						{
						this.state = 1061;
						this.match(sequenceParser.AMP);
						}
						break;

					case 5:
						{
						this.state = 1062;
						this.match(sequenceParser.Greater);
						this.state = 1063;
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

					case 6:
						{
						this.state = 1064;
						this.match(sequenceParser.Less);
						this.state = 1065;
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

					case 7:
						{
						this.state = 1066;
						this.match(sequenceParser.RightArrow);
						}
						break;

					case 8:
						{
						this.state = 1067;
						this.match(sequenceParser.RightAngle);
						}
						break;

					case 9:
						{
						this.state = 1068;
						this.match(sequenceParser.AmpArticle);
						}
						break;

					case 10:
						{
						this.state = 1069;
						this.match(sequenceParser.AmpDocument);
						}
						break;

					case 11:
						{
						this.state = 1070;
						this.match(sequenceParser.AmpDocumentLink);
						}
						break;

					case 12:
						{
						this.state = 1071;
						this.match(sequenceParser.AmpWebsite);
						}
						break;

					case 13:
						{
						this.state = 1072;
						this.match(sequenceParser.AmpImage);
						}
						break;

					case 14:
						{
						this.state = 1073;
						this.match(sequenceParser.AmpAudio);
						}
						break;

					case 15:
						{
						this.state = 1074;
						this.match(sequenceParser.AmpVideo);
						}
						break;

					case 16:
						{
						this.state = 1075;
						this.match(sequenceParser.AmpApp);
						}
						break;

					case 17:
						{
						this.state = 1076;
						this.match(sequenceParser.AmpArticleLink);
						}
						break;

					case 18:
						{
						this.state = 1077;
						this.match(sequenceParser.AmpAudioLink);
						}
						break;

					case 19:
						{
						this.state = 1078;
						this.match(sequenceParser.AmpImageLink);
						}
						break;

					case 20:
						{
						this.state = 1079;
						this.match(sequenceParser.AmpDocumentLink);
						}
						break;

					case 21:
						{
						this.state = 1080;
						this.match(sequenceParser.BitmarkMinus);
						}
						break;

					case 22:
						{
						this.state = 1081;
						this.match(sequenceParser.BitmarkPlus);
						}
						break;
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 1084;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 144, this._ctx);
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
		this.enterRule(_localctx, 158, sequenceParser.RULE_sp);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1086;
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
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\x97\u0443\x04" +
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
		"\x03\x02\x03\x02\x03\x03\x03\x03\x03\x04\x03\x04\x03\x05\x03\x05\x03\x05" +
		"\x03\x05\x07\x05\xC4\n\x05\f\x05\x0E\x05\xC7\v\x05\x03\x05\x07\x05\xCA" +
		"\n\x05\f\x05\x0E\x05\xCD\v\x05\x03\x05\x07\x05\xD0\n\x05\f\x05\x0E\x05" +
		"\xD3\v\x05\x03\x05\x03\x05\x03\x05\x03\x05\x07\x05\xD9\n\x05\f\x05\x0E" +
		"\x05\xDC\v\x05\x03\x05\x03\x05\x03\x05\x03\x05\x07\x05\xE2\n\x05\f\x05" +
		"\x0E\x05\xE5\v\x05\x03\x05\x07\x05\xE8\n\x05\f\x05\x0E\x05\xEB\v\x05\x05" +
		"\x05\xED\n\x05\x03\x06\x03\x06\x05\x06\xF1\n\x06\x07\x06\xF3\n\x06\f\x06" +
		"\x0E\x06\xF6\v\x06\x03\x06\x03\x06\x03\x07\x03\x07\x03\b\x03\b\x03\b\x03" +
		"\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03" +
		"\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x05\b\u0115\n" +
		"\b\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x07\t\u011D\n\t\f\t\x0E\t\u0120" +
		"\v\t\x03\n\x03\n\x03\n\x03\n\x05\n\u0126\n\n\x03\n\x07\n\u0129\n\n\f\n" +
		"\x0E\n\u012C\v\n\x03\n\x03\n\x03\v\x05\v\u0131\n\v\x03\v\x03\v\x06\v\u0135" +
		"\n\v\r\v\x0E\v\u0136\x03\v\x03\v\x03\f\x05\f\u013C\n\f\x03\f\x03\f\x06" +
		"\f\u0140\n\f\r\f\x0E\f\u0141\x03\f\x03\f\x03\r\x05\r\u0147\n\r\x03\r\x03" +
		"\r\x06\r\u014B\n\r\r\r\x0E\r\u014C\x03\r\x03\r\x03\x0E\x03\x0E\x03\x0F" +
		"\x03\x0F\x03\x0F\x03\x0F\x05\x0F\u0157\n\x0F\x03\x10\x03\x10\x03\x10\x03" +
		"\x10\x03\x11\x07\x11\u015E\n\x11\f\x11\x0E\x11\u0161\v\x11\x03\x11\x03" +
		"\x11\x03\x11\x07\x11\u0166\n\x11\f\x11\x0E\x11\u0169\v\x11\x03\x12\x03" +
		"\x12\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03" +
		"\x13\x05\x13\u0176\n\x13\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x05\x14" +
		"\u017D\n\x14\x03\x15\x03\x15\x03\x15\x05\x15\u0182\n\x15\x03\x15\x03\x15" +
		"\x05\x15\u0186\n\x15\x03\x15\x03\x15\x05\x15\u018A\n\x15\x03\x15\x05\x15" +
		"\u018D\n\x15\x03\x16\x03\x16\x03\x16\x05\x16\u0192\n\x16\x03\x17\x03\x17" +
		"\x03\x18\x03\x18\x03\x19\x03\x19\x03\x1A\x03\x1A\x03\x1B\x03\x1B\x03\x1C" +
		"\x03\x1C\x03\x1D\x03\x1D\x03\x1E\x03\x1E\x03\x1F\x03\x1F\x03 \x03 \x03" +
		" \x05 \u01A9\n \x03 \x03 \x03 \x05 \u01AE\n \x03 \x03 \x03 \x05 \u01B3" +
		"\n \x05 \u01B5\n \x03!\x03!\x03\"\x03\"\x03\"\x03\"\x03\"\x03\"\x05\"" +
		"\u01BF\n\"\x03#\x03#\x03#\x03#\x03#\x03#\x03#\x03#\x05#\u01C9\n#\x03$" +
		"\x03$\x03$\x03$\x03$\x03$\x03$\x03$\x05$\u01D3\n$\x03%\x03%\x03%\x03%" +
		"\x05%\u01D9\n%\x03%\x03%\x03%\x03%\x03%\x05%\u01E0\n%\x03&\x03&\x07&\u01E4" +
		"\n&\f&\x0E&\u01E7\v&\x03\'\x03\'\x03\'\x07\'\u01EC\n\'\f\'\x0E\'\u01EF" +
		"\v\'\x03\'\x03\'\x03\'\x03(\x03(\x07(\u01F6\n(\f(\x0E(\u01F9\v(\x03)\x03" +
		")\x03)\x03)\x03)\x03)\x03)\x03)\x05)\u0203\n)\x03*\x03*\x07*\u0207\n*" +
		"\f*\x0E*\u020A\v*\x03*\x03*\x05*\u020E\n*\x03+\x03+\x03+\x07+\u0213\n" +
		"+\f+\x0E+\u0216\v+\x03+\x03+\x03+\x03,\x03,\x03,\x05,\u021E\n,\x03,\x03" +
		",\x05,\u0222\n,\x03,\x03,\x05,\u0226\n,\x03,\x05,\u0229\n,\x03-\x03-\x03" +
		"-\x03-\x03-\x03-\x03-\x03-\x03-\x03-\x03-\x07-\u0236\n-\f-\x0E-\u0239" +
		"\v-\x03-\x05-\u023C\n-\x03.\x03.\x03.\x03.\x03.\x03.\x03.\x03.\x03.\x03" +
		".\x03.\x07.\u0249\n.\f.\x0E.\u024C\v.\x03.\x05.\u024F\n.\x03/\x03/\x07" +
		"/\u0253\n/\f/\x0E/\u0256\v/\x030\x030\x030\x030\x030\x030\x030\x030\x05" +
		"0\u0260\n0\x031\x031\x031\x051\u0265\n1\x031\x031\x031\x051\u026A\n1\x05" +
		"1\u026C\n1\x032\x032\x032\x052\u0271\n2\x032\x032\x032\x052\u0276\n2\x03" +
		"2\x032\x032\x052\u027B\n2\x052\u027D\n2\x033\x033\x033\x053\u0282\n3\x03" +
		"3\x033\x073\u0286\n3\f3\x0E3\u0289\v3\x033\x033\x063\u028D\n3\r3\x0E3" +
		"\u028E\x033\x033\x033\x033\x033\x033\x033\x073\u0298\n3\f3\x0E3\u029B" +
		"\v3\x033\x053\u029E\n3\x034\x034\x034\x034\x035\x035\x036\x036\x036\x07" +
		"6\u02A9\n6\f6\x0E6\u02AC\v6\x036\x056\u02AF\n6\x036\x036\x036\x036\x07" +
		"6\u02B5\n6\f6\x0E6\u02B8\v6\x036\x036\x076\u02BC\n6\f6\x0E6\u02BF\v6\x03" +
		"6\x056\u02C2\n6\x056\u02C4\n6\x037\x037\x037\x037\x077\u02CA\n7\f7\x0E" +
		"7\u02CD\v7\x037\x037\x038\x038\x058\u02D3\n8\x038\x038\x038\x058\u02D8" +
		"\n8\x038\x058\u02DB\n8\x039\x039\x039\x039\x059\u02E1\n9\x039\x059\u02E4" +
		"\n9\x03:\x03:\x05:\u02E8\n:\x03:\x03:\x03:\x07:\u02ED\n:\f:\x0E:\u02F0" +
		"\v:\x07:\u02F2\n:\f:\x0E:\u02F5\v:\x03:\x07:\u02F8\n:\f:\x0E:\u02FB\v" +
		":\x07:\u02FD\n:\f:\x0E:\u0300\v:\x03:\x03:\x03:\x03:\x03:\x07:\u0307\n" +
		":\f:\x0E:\u030A\v:\x03:\x05:\u030D\n:\x03;\x03;\x03;\x03;\x03;\x06;\u0314" +
		"\n;\r;\x0E;\u0315\x03;\x03;\x03;\x03;\x03;\x03;\x03;\x07;\u031F\n;\f;" +
		"\x0E;\u0322\v;\x03;\x05;\u0325\n;\x03<\x03<\x03<\x03<\x03=\x03=\x03=\x03" +
		"=\x06=\u032F\n=\r=\x0E=\u0330\x03=\x03=\x05=\u0335\n=\x03>\x03>\x03>\x03" +
		">\x06>\u033B\n>\r>\x0E>\u033C\x03>\x03>\x03?\x03?\x07?\u0343\n?\f?\x0E" +
		"?\u0346\v?\x03?\x05?\u0349\n?\x03?\x03?\x03?\x07?\u034E\n?\f?\x0E?\u0351" +
		"\v?\x07?\u0353\n?\f?\x0E?\u0356\v?\x03?\x07?\u0359\n?\f?\x0E?\u035C\v" +
		"?\x07?\u035E\n?\f?\x0E?\u0361\v?\x03?\x03?\x03?\x07?\u0366\n?\f?\x0E?" +
		"\u0369\v?\x03?\x05?\u036C\n?\x03?\x05?\u036F\n?\x03@\x03@\x06@\u0373\n" +
		"@\r@\x0E@\u0374\x03@\x03@\x03A\x03A\x03A\x06A\u037C\nA\rA\x0EA\u037D\x03" +
		"A\x03A\x03A\x03A\x03A\x05A\u0385\nA\x03B\x03B\x03B\x03B\x03B\x03B\x03" +
		"B\x03B\x05B\u038F\nB\x03C\x03C\x03C\x03C\x03C\x03C\x03C\x03C\x03C\x05" +
		"C\u039A\nC\x03D\x03D\x03D\x03D\x03E\x03E\x03E\x03E\x03F\x03F\x07F\u03A6" +
		"\nF\fF\x0EF\u03A9\vF\x03F\x07F\u03AC\nF\fF\x0EF\u03AF\vF\x03G\x03G\x03" +
		"G\x03G\x03G\x03G\x03G\x07G\u03B8\nG\fG\x0EG\u03BB\vG\x03G\x03G\x03G\x03" +
		"G\x07G\u03C1\nG\fG\x0EG\u03C4\vG\x03G\x05G\u03C7\nG\x03H\x03H\x03H\x03" +
		"H\x06H\u03CD\nH\rH\x0EH\u03CE\x03H\x03H\x03H\x03H\x03H\x07H\u03D6\nH\f" +
		"H\x0EH\u03D9\vH\x03H\x05H\u03DC\nH\x03I\x03I\x05I\u03E0\nI\x03I\x03I\x03" +
		"J\x03J\x03K\x03K\x06K\u03E8\nK\rK\x0EK\u03E9\x03K\x05K\u03ED\nK\x03K\x03" +
		"K\x06K\u03F1\nK\rK\x0EK\u03F2\x03K\x05K\u03F6\nK\x03K\x03K\x03K\x03K\x03" +
		"K\x03K\x07K\u03FE\nK\fK\x0EK\u0401\vK\x03K\x03K\x07K\u0405\nK\fK\x0EK" +
		"\u0408\vK\x03K\x03K\x07K\u040C\nK\fK\x0EK\u040F\vK\x03K\x03K\x03K\x05" +
		"K\u0414\nK\x03L\x03L\x03M\x03M\x06M\u041A\nM\rM\x0EM\u041B\x03M\x05M\u041F" +
		"\nM\x03N\x03N\x03O\x03O\x03P\x03P\x03P\x03P\x03P\x03P\x03P\x03P\x03P\x03" +
		"P\x03P\x03P\x03P\x03P\x03P\x03P\x03P\x03P\x03P\x03P\x03P\x03P\x03P\x03" +
		"P\x06P\u043D\nP\rP\x0EP\u043E\x03Q\x03Q\x03Q\x06\u0237\u024A\u0299\u03C2" +
		"\x02\x02R\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12" +
		"\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02$\x02&" +
		"\x02(\x02*\x02,\x02.\x020\x022\x024\x026\x028\x02:\x02<\x02>\x02@\x02" +
		"B\x02D\x02F\x02H\x02J\x02L\x02N\x02P\x02R\x02T\x02V\x02X\x02Z\x02\\\x02" +
		"^\x02`\x02b\x02d\x02f\x02h\x02j\x02l\x02n\x02p\x02r\x02t\x02v\x02x\x02" +
		"z\x02|\x02~\x02\x80\x02\x82\x02\x84\x02\x86\x02\x88\x02\x8A\x02\x8C\x02" +
		"\x8E\x02\x90\x02\x92\x02\x94\x02\x96\x02\x98\x02\x9A\x02\x9C\x02\x9E\x02" +
		"\xA0\x02\x02\x15\b\x02TUWXfmwz\x80\x81\x83\x85\x05\x02SShhww\x04\x02T" +
		"Tii\x05\x02UUjjyy\x04\x02VVkk\x04\x02WWll\x05\x02XXmmzz\x04\x02__qq\x05" +
		"\x02aarr~~\x04\x02bbss\x04\x02cctt\x05\x02dduu\x7F\x7F\x03\x0256\x04\x02" +
		"CCFI\x03\x02\x1A\x1A\x04\x02\x1B\x1B\x1D\x1D\x03\x02()\x03\x02  \x03\x02" +
		"!!\x02\u04DB\x02\xAF\x03\x02\x02\x02\x04\xBB\x03\x02\x02\x02\x06\xBD\x03" +
		"\x02\x02\x02\b\xBF\x03\x02\x02\x02\n\xF4\x03\x02\x02\x02\f\xF9\x03\x02" +
		"\x02\x02\x0E\u0114\x03\x02\x02\x02\x10\u0116\x03\x02\x02\x02\x12\u0121" +
		"\x03\x02\x02\x02\x14\u0130\x03\x02\x02\x02\x16\u013B\x03\x02\x02\x02\x18" +
		"\u0146\x03\x02\x02\x02\x1A\u0150\x03\x02\x02\x02\x1C\u0152\x03\x02\x02" +
		"\x02\x1E\u0158\x03\x02\x02\x02 \u015F\x03\x02\x02\x02\"\u016A\x03\x02" +
		"\x02\x02$\u0175\x03\x02\x02\x02&\u017C\x03\x02\x02\x02(\u018C\x03\x02" +
		"\x02\x02*\u018E\x03\x02\x02\x02,\u0193\x03\x02\x02\x02.\u0195\x03\x02" +
		"\x02\x020\u0197\x03\x02\x02\x022\u0199\x03\x02\x02\x024\u019B\x03\x02" +
		"\x02\x026\u019D\x03\x02\x02\x028\u019F\x03\x02\x02\x02:\u01A1\x03\x02" +
		"\x02\x02<\u01A3\x03\x02\x02\x02>\u01B4\x03\x02\x02\x02@\u01B6\x03\x02" +
		"\x02\x02B\u01BE\x03\x02\x02\x02D\u01C0\x03\x02\x02\x02F\u01CA\x03\x02" +
		"\x02\x02H\u01D4\x03\x02\x02\x02J\u01E1\x03\x02\x02\x02L\u01E8\x03\x02" +
		"\x02\x02N\u01F3\x03\x02\x02\x02P\u01FA\x03\x02\x02\x02R\u0204\x03\x02" +
		"\x02\x02T\u020F\x03\x02\x02\x02V\u0228\x03\x02\x02\x02X\u023B\x03\x02" +
		"\x02\x02Z\u024E\x03\x02\x02\x02\\\u0250\x03\x02\x02\x02^\u0257\x03\x02" +
		"\x02\x02`\u026B\x03\x02\x02\x02b\u027C\x03\x02\x02\x02d\u029D\x03\x02" +
		"\x02\x02f\u029F\x03\x02\x02\x02h\u02A3\x03\x02\x02\x02j\u02C3\x03\x02" +
		"\x02\x02l\u02C5\x03\x02\x02\x02n\u02DA\x03\x02\x02\x02p\u02E3\x03\x02" +
		"\x02\x02r\u030C\x03\x02\x02\x02t\u0324\x03\x02\x02\x02v\u0326\x03\x02" +
		"\x02\x02x\u032A\x03\x02\x02\x02z\u0336\x03\x02\x02\x02|\u036E\x03\x02" +
		"\x02\x02~\u0370\x03\x02\x02\x02\x80\u0384\x03\x02\x02\x02\x82\u038E\x03" +
		"\x02\x02\x02\x84\u0399\x03\x02\x02\x02\x86\u039B\x03\x02\x02\x02\x88\u039F" +
		"\x03\x02\x02\x02\x8A\u03A3\x03\x02\x02\x02\x8C\u03C6\x03\x02\x02\x02\x8E" +
		"\u03DB\x03\x02\x02\x02\x90\u03DD\x03\x02\x02\x02\x92\u03E3\x03\x02\x02" +
		"\x02\x94\u0413\x03\x02\x02\x02\x96\u0415\x03\x02\x02\x02\x98\u0417\x03" +
		"\x02\x02\x02\x9A\u0420\x03\x02\x02\x02\x9C\u0422\x03\x02\x02\x02\x9E\u043C" +
		"\x03\x02\x02\x02\xA0\u0440\x03\x02\x02\x02\xA2\xAC\x05\x04\x03\x02\xA3" +
		"\xA5\x07\x04\x02\x02\xA4\xA3\x03\x02\x02\x02\xA5\xA8\x03\x02\x02\x02\xA6" +
		"\xA4\x03\x02\x02\x02\xA6\xA7\x03\x02\x02\x02\xA7\xA9\x03\x02\x02\x02\xA8" +
		"\xA6\x03\x02\x02\x02\xA9\xAB\x07/\x02\x02\xAA\xA6\x03\x02\x02\x02\xAB" +
		"\xAE\x03\x02\x02\x02\xAC\xAA\x03\x02\x02\x02\xAC\xAD\x03\x02\x02\x02\xAD" +
		"\xB0\x03\x02\x02\x02\xAE\xAC\x03\x02\x02\x02\xAF\xA2\x03\x02\x02\x02\xB0" +
		"\xB1\x03\x02\x02\x02\xB1\xAF\x03\x02\x02\x02\xB1\xB2\x03\x02\x02\x02\xB2" +
		"\xB6\x03\x02\x02\x02\xB3\xB5\x07/\x02\x02\xB4\xB3\x03\x02\x02\x02\xB5" +
		"\xB8\x03\x02\x02\x02\xB6\xB4\x03\x02\x02\x02\xB6\xB7\x03\x02\x02\x02\xB7" +
		"\xB9\x03\x02\x02\x02\xB8\xB6\x03\x02\x02\x02\xB9\xBA\x07\x02\x02\x03\xBA" +
		"\x03\x03\x02\x02\x02\xBB\xBC\x05\x06\x04\x02\xBC\x05\x03\x02\x02\x02\xBD" +
		"\xBE\x05\b\x05\x02\xBE\x07\x03\x02\x02\x02\xBF\xC0\x07\x05\x02\x02\xC0" +
		"\xC1\x05 \x11\x02\xC1\xCB\x07\x1A\x02\x02\xC2\xC4\x07/\x02\x02\xC3\xC2" +
		"\x03\x02\x02\x02\xC4\xC7\x03\x02\x02\x02\xC5\xC3\x03\x02\x02\x02\xC5\xC6" +
		"\x03\x02\x02\x02\xC6\xC8\x03\x02\x02\x02\xC7\xC5\x03\x02\x02\x02\xC8\xCA" +
		"\x05\x0E\b\x02\xC9\xC5\x03\x02\x02\x02\xCA\xCD\x03\x02\x02\x02\xCB\xC9" +
		"\x03\x02\x02\x02\xCB\xCC\x03\x02\x02\x02\xCC\xD1\x03\x02\x02\x02\xCD\xCB" +
		"\x03\x02\x02\x02\xCE\xD0\x07/\x02\x02\xCF\xCE\x03\x02\x02\x02\xD0\xD3" +
		"\x03\x02\x02\x02\xD1\xCF\x03\x02\x02\x02\xD1\xD2\x03\x02\x02\x02\xD2\xD4" +
		"\x03\x02\x02\x02\xD3\xD1\x03\x02\x02\x02\xD4\xDA\x07\'\x02\x02\xD5\xD6" +
		"\x05\n\x06\x02\xD6\xD7\x05\f\x07\x02\xD7\xD9\x03\x02\x02\x02\xD8\xD5\x03" +
		"\x02\x02\x02\xD9\xDC\x03\x02\x02\x02\xDA\xD8\x03\x02\x02\x02\xDA\xDB\x03" +
		"\x02\x02\x02\xDB\xDD\x03\x02\x02\x02\xDC\xDA\x03\x02\x02\x02\xDD\xDE\x05" +
		"\n\x06\x02\xDE\xEC\x07\'\x02\x02\xDF\xE9\x05\x1A\x0E\x02\xE0\xE2\x07/" +
		"\x02\x02\xE1\xE0\x03\x02\x02\x02\xE2\xE5\x03\x02\x02\x02\xE3\xE1\x03\x02" +
		"\x02\x02\xE3\xE4\x03\x02\x02\x02\xE4\xE6\x03\x02\x02\x02\xE5\xE3\x03\x02" +
		"\x02\x02\xE6\xE8\x05\x1A\x0E\x02\xE7\xE3\x03\x02\x02\x02\xE8\xEB\x03\x02" +
		"\x02\x02\xE9\xE7\x03\x02\x02\x02\xE9\xEA\x03\x02\x02\x02\xEA\xED\x03\x02" +
		"\x02\x02\xEB\xE9\x03\x02\x02\x02\xEC\xDF\x03\x02\x02\x02\xEC\xED\x03\x02" +
		"\x02\x02\xED\t\x03\x02\x02\x02\xEE\xF0\x05\x0E\b\x02\xEF\xF1\x07/\x02" +
		"\x02\xF0\xEF\x03\x02\x02\x02\xF0\xF1\x03\x02\x02\x02\xF1\xF3\x03\x02\x02" +
		"\x02\xF2\xEE\x03\x02\x02\x02\xF3\xF6\x03\x02\x02\x02\xF4\xF2\x03\x02\x02" +
		"\x02\xF4\xF5\x03\x02\x02\x02\xF5\xF7\x03\x02\x02\x02\xF6\xF4\x03\x02\x02" +
		"\x02\xF7\xF8\x05\x94K\x02\xF8\v\x03\x02\x02\x02\xF9\xFA\x07&\x02\x02\xFA" +
		"\r\x03\x02\x02\x02\xFB\u0115\x07\x96\x02\x02\xFC\u0115\x05\x96L\x02\xFD" +
		"\u0115\x05\x10\t\x02\xFE\u0115\x05\x8AF\x02\xFF\u0115\x05t;\x02\u0100" +
		"\u0115\x05\x8EH\x02\u0101\u0115\x05j6\x02\u0102\u0115\x05\x80A\x02\u0103" +
		"\u0115\x05|?\x02\u0104\u0115\x05~@\x02\u0105\u0115\x05\x94K\x02\u0106" +
		"\u0115\x05p9\x02\u0107\u0115\x05\x82B\x02\u0108\u0115\x05R*\x02\u0109" +
		"\u0115\x05\\/\x02\u010A\u0115\x05N(\x02\u010B\u0115\x05B\"\x02\u010C\u0115" +
		"\x05D#\x02\u010D\u0115\x05H%\x02\u010E\u0115\x05F$\x02\u010F\u0115\x05" +
		"J&\x02\u0110\u0115\x05n8\x02\u0111\u0115\x05\x90I\x02\u0112\u0115\x05" +
		"r:\x02\u0113\u0115\x05\xA0Q\x02\u0114\xFB\x03\x02\x02\x02\u0114\xFC\x03" +
		"\x02\x02\x02\u0114\xFD\x03\x02\x02\x02\u0114\xFE\x03\x02\x02\x02\u0114" +
		"\xFF\x03\x02\x02\x02\u0114\u0100\x03\x02\x02\x02\u0114\u0101\x03\x02\x02" +
		"\x02\u0114\u0102\x03\x02\x02\x02\u0114\u0103\x03\x02\x02\x02\u0114\u0104" +
		"\x03\x02\x02\x02\u0114\u0105\x03\x02\x02\x02\u0114\u0106\x03\x02\x02\x02" +
		"\u0114\u0107\x03\x02\x02\x02\u0114\u0108\x03\x02\x02\x02\u0114\u0109\x03" +
		"\x02\x02\x02\u0114\u010A\x03\x02\x02\x02\u0114\u010B\x03\x02\x02\x02\u0114" +
		"\u010C\x03\x02\x02\x02\u0114\u010D\x03\x02\x02\x02\u0114\u010E\x03\x02" +
		"\x02\x02\u0114\u010F\x03\x02\x02\x02\u0114\u0110\x03\x02\x02\x02\u0114" +
		"\u0111\x03\x02\x02\x02\u0114\u0112\x03\x02\x02\x02\u0114\u0113\x03\x02" +
		"\x02\x02\u0115\x0F\x03\x02\x02\x02\u0116\u011E\x05\x12\n\x02\u0117\u011D" +
		"\x05\x12\n\x02\u0118\u011D\x05|?\x02\u0119\u011D\x05~@\x02\u011A\u011D" +
		"\x05j6\x02\u011B\u011D\x05p9\x02\u011C\u0117\x03\x02\x02\x02\u011C\u0118" +
		"\x03\x02\x02\x02\u011C\u0119\x03\x02\x02\x02\u011C\u011A\x03\x02\x02\x02" +
		"\u011C\u011B\x03\x02\x02\x02\u011D\u0120\x03\x02\x02\x02\u011E\u011C\x03" +
		"\x02\x02\x02\u011E\u011F\x03\x02\x02\x02\u011F\x11\x03\x02\x02\x02\u0120" +
		"\u011E\x03\x02\x02\x02\u0121\u0125\x07\x10\x02\x02\u0122\u0126\x07-\x02" +
		"\x02\u0123\u0126\x07.\x02\x02\u0124\u0126\x03\x02\x02\x02\u0125\u0122" +
		"\x03\x02\x02\x02\u0125\u0123\x03\x02\x02\x02\u0125\u0124\x03\x02\x02\x02" +
		"\u0126\u012A\x03\x02\x02\x02\u0127\u0129\x05\x94K\x02\u0128\u0127\x03" +
		"\x02\x02\x02\u0129\u012C\x03\x02\x02\x02\u012A\u0128\x03\x02\x02\x02\u012A" +
		"\u012B\x03\x02\x02\x02\u012B\u012D\x03\x02\x02\x02\u012C\u012A\x03\x02" +
		"\x02\x02\u012D\u012E\x05\x9AN\x02\u012E\x13\x03\x02\x02\x02\u012F\u0131" +
		"\x05j6\x02\u0130\u012F\x03\x02\x02\x02\u0130\u0131\x03\x02\x02\x02\u0131" +
		"\u0132\x03\x02\x02\x02\u0132\u0134\x07\x14\x02\x02\u0133\u0135\x05\x94" +
		"K\x02\u0134\u0133\x03\x02\x02\x02\u0135\u0136\x03\x02\x02\x02\u0136\u0134" +
		"\x03\x02\x02\x02\u0136\u0137\x03\x02\x02\x02\u0137\u0138\x03\x02\x02\x02" +
		"\u0138\u0139\x07\x1A\x02\x02\u0139\x15\x03\x02\x02\x02\u013A\u013C\x05" +
		"j6\x02\u013B\u013A\x03\x02\x02\x02\u013B\u013C\x03\x02\x02\x02\u013C\u013D" +
		"\x03\x02\x02\x02\u013D\u013F\x07\x15\x02\x02\u013E\u0140\x05\x94K\x02" +
		"\u013F\u013E\x03\x02\x02\x02\u0140\u0141\x03\x02\x02\x02\u0141\u013F\x03" +
		"\x02\x02\x02\u0141\u0142\x03\x02\x02\x02\u0142\u0143\x03\x02\x02\x02\u0143" +
		"\u0144\x07\x1A\x02\x02\u0144\x17\x03\x02\x02\x02\u0145\u0147\x05j6\x02" +
		"\u0146\u0145\x03\x02\x02\x02\u0146\u0147\x03\x02\x02\x02\u0147\u0148\x03" +
		"\x02\x02\x02\u0148\u014A\x07\x17\x02\x02\u0149\u014B\x05\x94K\x02\u014A" +
		"\u0149\x03\x02\x02\x02\u014B\u014C\x03\x02\x02\x02\u014C\u014A\x03\x02" +
		"\x02\x02\u014C\u014D\x03\x02\x02\x02\u014D\u014E\x03\x02\x02\x02\u014E" +
		"\u014F\x07\x1A\x02\x02\u014F\x19\x03\x02\x02\x02\u0150\u0151\x05\x0E\b" +
		"\x02\u0151\x1B\x03\x02\x02\x02\u0152\u0153\x07\v\x02\x02\u0153\u0154\x05" +
		"\x94K\x02\u0154\u0156\x07\x1A\x02\x02\u0155\u0157\x05\x1E\x10\x02\u0156" +
		"\u0155\x03\x02\x02\x02\u0156\u0157\x03\x02\x02\x02\u0157\x1D\x03\x02\x02" +
		"\x02\u0158\u0159\x07A\x02\x02\u0159\u015A\x07-\x02\x02\u015A\u015B\x07" +
		"\x1A\x02\x02\u015B\x1F\x03\x02\x02\x02\u015C\u015E\x05\"\x12\x02\u015D" +
		"\u015C\x03\x02\x02\x02\u015E\u0161\x03\x02\x02\x02\u015F\u015D\x03\x02" +
		"\x02\x02\u015F\u0160\x03\x02\x02\x02\u0160\u0167\x03\x02\x02\x02\u0161" +
		"\u015F\x03\x02\x02\x02\u0162\u0166\x07\x82\x02\x02\u0163\u0166\x07\x83" +
		"\x02\x02\u0164\u0166\x05$\x13\x02\u0165\u0162\x03\x02\x02\x02\u0165\u0163" +
		"\x03\x02\x02\x02\u0165\u0164\x03\x02\x02\x02\u0166\u0169\x03\x02\x02\x02" +
		"\u0167\u0165\x03\x02\x02\x02\u0167\u0168\x03\x02\x02\x02\u0168!\x03\x02" +
		"\x02\x02\u0169\u0167\x03\x02\x02\x02\u016A\u016B\t\x02\x02\x02\u016B#" +
		"\x03\x02\x02\x02\u016C\u0176\x05(\x15\x02\u016D\u0176\x05`1\x02\u016E" +
		"\u0176\x05*\x16\x02\u016F\u0176\x05,\x17\x02\u0170\u0176\x05.\x18\x02" +
		"\u0171\u0176\x050\x19\x02\u0172\u0176\x052\x1A\x02\u0173\u0176\x054\x1B" +
		"\x02\u0174\u0176\x07Y\x02\x02\u0175\u016C\x03\x02\x02\x02\u0175\u016D" +
		"\x03\x02\x02\x02\u0175\u016E\x03\x02\x02\x02\u0175\u016F\x03\x02\x02\x02" +
		"\u0175\u0170\x03\x02\x02\x02\u0175\u0171\x03\x02\x02\x02\u0175\u0172\x03" +
		"\x02\x02\x02\u0175\u0173\x03\x02\x02\x02\u0175\u0174\x03\x02\x02\x02\u0176" +
		"%\x03\x02\x02\x02\u0177\u017D\x07\x80\x02\x02\u0178\u017D\x07\x81\x02" +
		"\x02\u0179\u017D\x07\x82\x02\x02\u017A\u017D\x07\x83\x02\x02\u017B\u017D" +
		"\x03\x02\x02\x02\u017C\u0177\x03\x02\x02\x02\u017C\u0178\x03\x02\x02\x02" +
		"\u017C\u0179\x03\x02\x02\x02\u017C\u017A\x03\x02\x02\x02\u017C\u017B\x03" +
		"\x02\x02\x02\u017D\'\x03\x02\x02\x02\u017E\u0181\x07P\x02\x02\u017F\u0182" +
		"\x07\x07\x02\x02\u0180\u0182\x07\x93\x02\x02\u0181\u017F\x03\x02\x02\x02" +
		"\u0181\u0180\x03\x02\x02\x02\u0181\u0182\x03\x02\x02\x02\u0182\u018D\x03" +
		"\x02\x02\x02\u0183\u0185\x07g\x02\x02\u0184\u0186\x07\x07\x02\x02\u0185" +
		"\u0184\x03\x02\x02\x02\u0185\u0186\x03\x02\x02\x02\u0186\u018D\x03\x02" +
		"\x02\x02\u0187\u0189\x07Q\x02\x02\u0188\u018A\x07\x07\x02\x02\u0189\u0188" +
		"\x03\x02\x02\x02\u0189\u018A\x03\x02\x02\x02\u018A\u018D\x03\x02\x02\x02" +
		"\u018B\u018D\x07R\x02\x02\u018C\u017E\x03\x02\x02\x02\u018C";
	private static readonly _serializedATNSegment1: string =
		"\u0183\x03\x02\x02\x02\u018C\u0187\x03\x02\x02\x02\u018C\u018B\x03\x02" +
		"\x02\x02\u018D)\x03\x02\x02\x02\u018E\u0191\t\x03\x02\x02\u018F\u0190" +
		"\x07\x1B\x02\x02\u0190\u0192\x07\t\x02\x02\u0191\u018F\x03\x02\x02\x02" +
		"\u0191\u0192\x03\x02\x02\x02\u0192+\x03\x02\x02\x02\u0193\u0194\t\x04" +
		"\x02\x02\u0194-\x03\x02\x02\x02\u0195\u0196\t\x05\x02\x02\u0196/\x03\x02" +
		"\x02\x02\u0197\u0198\t\x06\x02\x02\u01981\x03\x02\x02\x02\u0199\u019A" +
		"\t\x07\x02\x02\u019A3\x03\x02\x02\x02\u019B\u019C\t\b\x02\x02\u019C5\x03" +
		"\x02\x02\x02\u019D\u019E\t\t\x02\x02\u019E7\x03\x02\x02\x02\u019F\u01A0" +
		"\t\n\x02\x02\u01A09\x03\x02\x02\x02\u01A1\u01A2\t\v\x02\x02\u01A2;\x03" +
		"\x02\x02\x02\u01A3\u01A4\t\f\x02\x02\u01A4=\x03\x02\x02\x02\u01A5\u01A8" +
		"\x07^\x02\x02\u01A6\u01A7\x07\x1B\x02\x02\u01A7\u01A9\x07\t\x02\x02\u01A8" +
		"\u01A6\x03\x02\x02\x02\u01A8\u01A9\x03\x02\x02\x02\u01A9\u01B5\x03\x02" +
		"\x02\x02\u01AA\u01AD\x07p\x02\x02\u01AB\u01AC\x07\x1B\x02\x02\u01AC\u01AE" +
		"\x07\t\x02\x02\u01AD\u01AB\x03\x02\x02\x02\u01AD\u01AE\x03\x02\x02\x02" +
		"\u01AE\u01B5\x03\x02\x02\x02\u01AF\u01B2\x07|\x02\x02\u01B0\u01B1\x07" +
		"\x1B\x02\x02\u01B1\u01B3\x07\t\x02\x02\u01B2\u01B0\x03\x02\x02\x02\u01B2" +
		"\u01B3\x03\x02\x02\x02\u01B3\u01B5\x03\x02\x02\x02\u01B4\u01A5\x03\x02" +
		"\x02\x02\u01B4\u01AA\x03\x02\x02\x02\u01B4\u01AF\x03\x02\x02\x02\u01B5" +
		"?\x03\x02\x02\x02\u01B6\u01B7\t\r\x02\x02\u01B7A\x03\x02\x02\x02\u01B8" +
		"\u01B9\x056\x1C\x02\u01B9\u01BA\x07\x1B\x02\x02\u01BA\u01BB\x05h5\x02" +
		"\u01BB\u01BC\x07\x1A\x02\x02\u01BC\u01BF\x03\x02\x02\x02\u01BD\u01BF\x07" +
		"+\x02\x02\u01BE\u01B8\x03\x02\x02\x02\u01BE\u01BD\x03\x02\x02\x02\u01BF" +
		"C\x03\x02\x02\x02\u01C0\u01C1\x058\x1D\x02\u01C1\u01C2\x07\x1B\x02\x02" +
		"\u01C2\u01C3\x05h5\x02\u01C3\u01C8\x07\x1A\x02\x02\u01C4\u01C5\x07C\x02" +
		"\x02\u01C5\u01C6\x05\x9EP\x02\u01C6\u01C7\x07\x1A\x02\x02\u01C7\u01C9" +
		"\x03\x02\x02\x02\u01C8\u01C4\x03\x02\x02\x02\u01C8\u01C9\x03\x02\x02\x02" +
		"\u01C9E\x03\x02\x02\x02\u01CA\u01CB\x05<\x1F\x02\u01CB\u01CC\x07\x1B\x02" +
		"\x02\u01CC\u01CD\x05h5\x02\u01CD\u01D2\x07\x1A\x02\x02\u01CE\u01CF\x07" +
		"C\x02\x02\u01CF\u01D0\x05\x9EP\x02\u01D0\u01D1\x07\x1A\x02\x02\u01D1\u01D3" +
		"\x03\x02\x02\x02\u01D2\u01CE\x03\x02\x02\x02\u01D2\u01D3\x03\x02\x02\x02" +
		"\u01D3G\x03\x02\x02\x02\u01D4\u01D5\x05:\x1E\x02\u01D5\u01D8\x07\x1B\x02" +
		"\x02\u01D6\u01D9\x05h5\x02\u01D7\u01D9\x05f4\x02\u01D8\u01D6\x03\x02\x02" +
		"\x02\u01D8\u01D7\x03\x02\x02\x02\u01D9\u01DA\x03\x02\x02\x02\u01DA\u01DF" +
		"\x07\x1A\x02\x02\u01DB\u01DC\x07C\x02\x02\u01DC\u01DD\x05\x9EP\x02\u01DD" +
		"\u01DE\x07\x1A\x02\x02\u01DE\u01E0\x03\x02\x02\x02\u01DF\u01DB\x03\x02" +
		"\x02\x02\u01DF\u01E0\x03\x02\x02\x02\u01E0I\x03\x02\x02\x02\u01E1\u01E5" +
		"\x05L\'\x02\u01E2\u01E4\x05d3\x02\u01E3\u01E2\x03\x02\x02\x02\u01E4\u01E7" +
		"\x03\x02\x02\x02\u01E5\u01E3\x03\x02\x02\x02\u01E5\u01E6\x03\x02\x02\x02" +
		"\u01E6K\x03\x02\x02\x02\u01E7\u01E5\x03\x02\x02\x02\u01E8\u01E9\x05@!" +
		"\x02\u01E9\u01ED\x07\x1B\x02\x02\u01EA\u01EC\x07\x04\x02\x02\u01EB\u01EA" +
		"\x03\x02\x02\x02\u01EC\u01EF\x03\x02\x02\x02\u01ED\u01EB\x03\x02\x02\x02" +
		"\u01ED\u01EE\x03\x02\x02\x02\u01EE\u01F0\x03\x02\x02\x02\u01EF\u01ED\x03" +
		"\x02\x02\x02\u01F0\u01F1\x05h5\x02\u01F1\u01F2\x07\x1A\x02\x02\u01F2M" +
		"\x03\x02\x02\x02\u01F3\u01F7\x05P)\x02\u01F4\u01F6\x05d3\x02\u01F5\u01F4" +
		"\x03\x02\x02\x02\u01F6\u01F9\x03\x02\x02\x02\u01F7\u01F5\x03\x02\x02\x02" +
		"\u01F7\u01F8\x03\x02\x02\x02\u01F8O\x03\x02\x02\x02\u01F9\u01F7\x03\x02" +
		"\x02\x02\u01FA\u01FB\x05> \x02\u01FB\u01FC\x07\x1B\x02\x02\u01FC\u01FD" +
		"\x05h5\x02\u01FD\u0202\x07\x1A\x02\x02\u01FE\u01FF\x07C\x02\x02\u01FF" +
		"\u0200\x05\x9EP\x02\u0200\u0201\x07\x1A\x02\x02\u0201\u0203\x03\x02\x02" +
		"\x02\u0202\u01FE\x03\x02\x02\x02\u0202\u0203\x03\x02\x02\x02\u0203Q\x03" +
		"\x02\x02\x02\u0204\u0208\x05T+\x02\u0205\u0207\x05X-\x02\u0206\u0205\x03" +
		"\x02\x02\x02\u0207\u020A\x03\x02\x02\x02\u0208\u0206\x03\x02\x02\x02\u0208" +
		"\u0209\x03\x02\x02\x02\u0209\u020D\x03\x02\x02\x02\u020A\u0208\x03\x02" +
		"\x02\x02\u020B\u020C\x07/\x02\x02\u020C\u020E\x07E\x02\x02\u020D\u020B" +
		"\x03\x02\x02\x02\u020D\u020E\x03\x02\x02\x02\u020ES\x03\x02\x02\x02\u020F" +
		"\u0210\x05V,\x02\u0210\u0214\x07\x1B\x02\x02\u0211\u0213\x07\x04\x02\x02" +
		"\u0212\u0211\x03\x02\x02\x02\u0213\u0216\x03\x02\x02\x02\u0214\u0212\x03" +
		"\x02\x02\x02\u0214\u0215\x03\x02\x02\x02\u0215\u0217\x03\x02\x02\x02\u0216" +
		"\u0214\x03\x02\x02\x02\u0217\u0218\x05h5\x02\u0218\u0219\x07\x1A\x02\x02" +
		"\u0219U\x03\x02\x02\x02\u021A\u021D\x07[\x02\x02\u021B\u021E\x07\x07\x02" +
		"\x02\u021C\u021E\x07\x93\x02\x02\u021D\u021B\x03\x02\x02\x02\u021D\u021C" +
		"\x03\x02\x02\x02\u021D\u021E\x03\x02\x02\x02\u021E\u0229\x03\x02\x02\x02" +
		"\u021F\u0221\x07o\x02\x02\u0220\u0222\x07\x07\x02\x02\u0221\u0220\x03" +
		"\x02\x02\x02\u0221\u0222\x03\x02\x02\x02\u0222\u0229\x03\x02\x02\x02\u0223" +
		"\u0225\x07\\\x02\x02\u0224\u0226\x07\x07\x02\x02\u0225\u0224\x03\x02\x02" +
		"\x02\u0225\u0226\x03\x02\x02\x02\u0226\u0229\x03\x02\x02\x02\u0227\u0229" +
		"\x07]\x02\x02\u0228\u021A\x03\x02\x02\x02\u0228\u021F\x03\x02\x02\x02" +
		"\u0228\u0223\x03\x02\x02\x02\u0228\u0227\x03\x02\x02\x02\u0229W\x03\x02" +
		"\x02\x02\u022A\u022B\x07B\x02\x02\u022B\u022C\x07\x1B\x02\x02\u022C\u022D" +
		"\x05h5\x02\u022D\u022E\x07\x1A\x02\x02\u022E\u023C\x03\x02\x02\x02\u022F" +
		"\u0230\t\x0E\x02\x02\u0230\u0231\x07\x1B\x02\x02\u0231\u0232\x07-\x02" +
		"\x02\u0232\u023C\x07\x1A\x02\x02\u0233\u0237\t\x0F\x02\x02\u0234\u0236" +
		"\v\x02\x02\x02\u0235\u0234\x03\x02\x02\x02\u0236\u0239\x03\x02\x02\x02" +
		"\u0237\u0238\x03\x02\x02\x02\u0237\u0235\x03\x02\x02\x02\u0238\u023A\x03" +
		"\x02\x02\x02\u0239\u0237\x03\x02\x02\x02\u023A\u023C\x07\x1A\x02\x02\u023B" +
		"\u022A\x03\x02\x02\x02\u023B\u022F\x03\x02\x02\x02\u023B\u0233\x03\x02" +
		"\x02\x02\u023CY\x03\x02\x02\x02\u023D\u023E\x07B\x02\x02\u023E\u023F\x07" +
		"\x1B\x02\x02\u023F\u0240\x05h5\x02\u0240\u0241\x07\x1A\x02\x02\u0241\u024F" +
		"\x03\x02\x02\x02\u0242\u0243\t\x0E\x02\x02\u0243\u0244\x07\x1B\x02\x02" +
		"\u0244\u0245\x07-\x02\x02\u0245\u024F\x07\x1A\x02\x02\u0246\u024A\t\x0F" +
		"\x02\x02\u0247\u0249\v\x02\x02\x02\u0248\u0247\x03\x02\x02\x02\u0249\u024C" +
		"\x03\x02\x02\x02\u024A\u024B\x03\x02\x02\x02\u024A\u0248\x03\x02\x02\x02" +
		"\u024B\u024D\x03\x02\x02\x02\u024C\u024A\x03\x02\x02\x02\u024D\u024F\x07" +
		"\x1A\x02\x02\u024E\u023D\x03\x02\x02\x02\u024E\u0242\x03\x02\x02\x02\u024E" +
		"\u0246\x03\x02\x02\x02\u024F[\x03\x02\x02\x02\u0250\u0254\x05^0\x02\u0251" +
		"\u0253\x05d3\x02\u0252\u0251\x03\x02\x02\x02\u0253\u0256\x03\x02\x02\x02" +
		"\u0254\u0252\x03\x02\x02\x02\u0254\u0255\x03\x02\x02\x02\u0255]\x03\x02" +
		"\x02\x02\u0256\u0254\x03\x02\x02\x02\u0257\u0258\x05b2\x02\u0258\u0259" +
		"\x07\x1B\x02\x02\u0259\u025A\x05h5\x02\u025A\u025F\x07\x1A\x02\x02\u025B" +
		"\u025C\x07C\x02\x02\u025C\u025D\x05\x9EP\x02\u025D\u025E\x07\x1A\x02\x02" +
		"\u025E\u0260\x03\x02\x02\x02\u025F\u025B\x03\x02\x02\x02\u025F\u0260\x03" +
		"\x02\x02\x02\u0260_\x03\x02\x02\x02\u0261\u0264\x07O\x02\x02\u0262\u0263" +
		"\x07\x1B\x02\x02\u0263\u0265\x07\b\x02\x02\u0264\u0262\x03\x02\x02\x02" +
		"\u0264\u0265\x03\x02\x02\x02\u0265\u026C\x03\x02\x02\x02\u0266\u0269\x07" +
		"f\x02\x02\u0267\u0268\x07\x1B\x02\x02\u0268\u026A\x07\b\x02\x02\u0269" +
		"\u0267\x03\x02\x02\x02\u0269\u026A\x03\x02\x02\x02\u026A\u026C\x03\x02" +
		"\x02\x02\u026B\u0261\x03\x02\x02\x02\u026B\u0266\x03\x02\x02\x02\u026C" +
		"a\x03\x02\x02\x02\u026D\u0270\x07Z\x02\x02\u026E\u026F\x07\x1B\x02\x02" +
		"\u026F\u0271\x07\b\x02\x02\u0270\u026E\x03\x02\x02\x02\u0270\u0271\x03" +
		"\x02\x02\x02\u0271\u027D\x03\x02\x02\x02\u0272\u0275\x07n\x02\x02\u0273" +
		"\u0274\x07\x1B\x02\x02\u0274\u0276\x07\b\x02\x02\u0275\u0273\x03\x02\x02" +
		"\x02\u0275\u0276\x03\x02\x02\x02\u0276\u027D\x03\x02\x02\x02\u0277\u027A" +
		"\x07}\x02\x02\u0278\u0279\x07\x1B\x02\x02\u0279\u027B\x07\b\x02\x02\u027A" +
		"\u0278\x03\x02\x02\x02\u027A\u027B\x03\x02\x02\x02\u027B\u027D\x03\x02" +
		"\x02\x02\u027C\u026D\x03\x02\x02\x02\u027C\u0272\x03\x02\x02\x02\u027C" +
		"\u0277\x03\x02\x02\x02\u027Dc\x03\x02\x02\x02\u027E\u027F\x07\x13\x02" +
		"\x02\u027F\u0282\x05\x94K\x02\u0280\u0282\x07B\x02\x02\u0281\u027E\x03" +
		"\x02\x02\x02\u0281\u0280\x03\x02\x02\x02\u0282\u0283\x03\x02\x02\x02\u0283" +
		"\u0287\x07\x1B\x02\x02\u0284\u0286\x07\x04\x02\x02\u0285\u0284\x03\x02" +
		"\x02\x02\u0286\u0289\x03\x02\x02\x02\u0287\u0285\x03\x02\x02\x02\u0287" +
		"\u0288\x03\x02\x02\x02\u0288\u028C\x03\x02\x02\x02\u0289\u0287\x03\x02" +
		"\x02\x02\u028A\u028D\x05\x94K\x02\u028B\u028D\x07/\x02\x02\u028C\u028A" +
		"\x03\x02\x02\x02\u028C\u028B\x03\x02\x02\x02\u028D\u028E\x03\x02\x02\x02" +
		"\u028E\u028C\x03\x02\x02\x02\u028E\u028F\x03\x02\x02\x02\u028F\u0290\x03" +
		"\x02\x02\x02\u0290\u029E\x07\x1A\x02\x02\u0291\u0292\t\x0E\x02\x02\u0292" +
		"\u0293\x07\x1B\x02\x02\u0293\u0294\x07-\x02\x02\u0294\u029E\x07\x1A\x02" +
		"\x02\u0295\u0299\t\x0F\x02\x02\u0296\u0298\v\x02\x02\x02\u0297\u0296\x03" +
		"\x02\x02\x02\u0298\u029B\x03\x02\x02\x02\u0299\u029A\x03\x02\x02\x02\u0299" +
		"\u0297\x03\x02\x02\x02\u029A\u029C\x03\x02\x02\x02\u029B\u0299\x03\x02" +
		"\x02\x02\u029C\u029E\x07\x1A\x02\x02\u029D\u0281\x03\x02\x02\x02\u029D" +
		"\u0291\x03\x02\x02\x02\u029D\u0295\x03\x02\x02\x02\u029Ee\x03\x02\x02" +
		"\x02\u029F\u02A0\x07\x92\x02\x02\u02A0\u02A1\x07\x1E\x02\x02\u02A1\u02A2" +
		"\x07-\x02\x02\u02A2g\x03\x02\x02\x02\u02A3\u02A4\x07\x95\x02\x02\u02A4" +
		"i\x03\x02\x02\x02\u02A5\u02A6\x07\x18\x02\x02\u02A6\u02AE\x07\x1A\x02" +
		"\x02\u02A7\u02A9\x07\x04\x02\x02\u02A8\u02A7\x03\x02\x02\x02\u02A9\u02AC" +
		"\x03\x02\x02\x02\u02AA\u02A8\x03\x02\x02\x02\u02AA\u02AB\x03\x02\x02\x02" +
		"\u02AB\u02AD\x03\x02\x02\x02\u02AC\u02AA\x03\x02\x02\x02\u02AD\u02AF\x05" +
		"l7\x02\u02AE\u02AA\x03\x02\x02\x02\u02AE\u02AF\x03\x02\x02\x02\u02AF\u02C4" +
		"\x03\x02\x02\x02\u02B0\u02B1\x07\x18\x02\x02\u02B1\u02B6\x05\x94K\x02" +
		"\u02B2\u02B5\x07\x1B\x02\x02\u02B3\u02B5\x05\x9EP\x02\u02B4\u02B2\x03" +
		"\x02\x02\x02\u02B4\u02B3\x03\x02\x02\x02\u02B5\u02B8\x03\x02\x02\x02\u02B6" +
		"\u02B4\x03\x02\x02\x02\u02B6\u02B7\x03\x02\x02\x02\u02B7\u02B9\x03\x02" +
		"\x02\x02\u02B8\u02B6\x03\x02\x02\x02\u02B9\u02C1\x07\x1A\x02\x02\u02BA" +
		"\u02BC\x07\x04\x02\x02\u02BB\u02BA\x03\x02\x02\x02\u02BC\u02BF\x03\x02" +
		"\x02\x02\u02BD\u02BB\x03\x02\x02\x02\u02BD\u02BE\x03\x02\x02\x02\u02BE" +
		"\u02C0\x03\x02\x02\x02\u02BF\u02BD\x03\x02\x02\x02\u02C0\u02C2\x05l7\x02" +
		"\u02C1\u02BD\x03\x02\x02\x02\u02C1\u02C2\x03\x02\x02\x02\u02C2\u02C4\x03" +
		"\x02\x02\x02\u02C3\u02A5\x03\x02\x02\x02\u02C3\u02B0\x03\x02\x02\x02\u02C4" +
		"k\x03\x02\x02\x02\u02C5\u02C6\x07\x18\x02\x02\u02C6\u02CB\x05\x94K\x02" +
		"\u02C7\u02CA\x07\x1B\x02\x02\u02C8\u02CA\x05\x9EP\x02\u02C9\u02C7\x03" +
		"\x02\x02\x02\u02C9\u02C8\x03\x02\x02\x02\u02CA\u02CD\x03\x02\x02\x02\u02CB" +
		"\u02C9\x03\x02\x02\x02\u02CB\u02CC\x03\x02\x02\x02\u02CC\u02CE\x03\x02" +
		"\x02\x02\u02CD\u02CB\x03\x02\x02\x02\u02CE\u02CF\x07\x1A\x02\x02\u02CF" +
		"m\x03\x02\x02\x02\u02D0\u02D2\x07\r\x02\x02\u02D1\u02D3\x05\x94K\x02\u02D2" +
		"\u02D1\x03\x02\x02\x02\u02D2\u02D3\x03\x02\x02\x02\u02D3\u02D4\x03\x02" +
		"\x02\x02\u02D4\u02DB\x07\x1A\x02\x02\u02D5\u02D7\x07\x0E\x02\x02\u02D6" +
		"\u02D8\x05\x94K\x02\u02D7\u02D6\x03\x02\x02\x02\u02D7\u02D8\x03\x02\x02" +
		"\x02\u02D8\u02D9\x03\x02\x02\x02\u02D9\u02DB\x07\x1A\x02\x02\u02DA\u02D0" +
		"\x03\x02\x02\x02\u02DA\u02D5\x03\x02\x02\x02\u02DBo\x03\x02\x02\x02\u02DC" +
		"\u02E4\x07<\x02\x02\u02DD\u02E4\x07:\x02\x02\u02DE\u02E0\x07;\x02\x02" +
		"\u02DF\u02E1\x070\x02\x02\u02E0\u02DF\x03\x02\x02\x02\u02E0\u02E1\x03" +
		"\x02\x02\x02\u02E1\u02E2\x03\x02\x02\x02\u02E2\u02E4\x07\x02\x02\x03\u02E3" +
		"\u02DC\x03\x02\x02\x02\u02E3\u02DD\x03\x02\x02\x02\u02E3\u02DE\x03\x02" +
		"\x02\x02\u02E4q\x03\x02\x02\x02\u02E5\u02E7\x07e\x02\x02\u02E6\u02E8\x05" +
		"\x94K\x02\u02E7\u02E6\x03\x02\x02\x02\u02E7\u02E8\x03\x02\x02\x02\u02E8" +
		"\u02FE\x03\x02\x02\x02\u02E9\u02F3\x05\x94K\x02\u02EA\u02EE\x07/\x02\x02" +
		"\u02EB\u02ED\x07\x04\x02\x02\u02EC\u02EB\x03\x02\x02\x02\u02ED\u02F0\x03" +
		"\x02\x02\x02\u02EE\u02EC\x03\x02\x02\x02\u02EE\u02EF\x03\x02\x02\x02\u02EF" +
		"\u02F2\x03\x02\x02\x02\u02F0\u02EE\x03\x02\x02\x02\u02F1\u02EA\x03\x02" +
		"\x02\x02\u02F2\u02F5\x03\x02\x02\x02\u02F3\u02F1\x03\x02\x02\x02\u02F3" +
		"\u02F4\x03\x02\x02\x02\u02F4\u02F9\x03\x02\x02\x02\u02F5\u02F3\x03\x02" +
		"\x02\x02\u02F6\u02F8\x07/\x02\x02\u02F7\u02F6\x03\x02\x02\x02\u02F8\u02FB" +
		"\x03\x02\x02\x02\u02F9\u02F7\x03\x02\x02\x02\u02F9\u02FA\x03\x02\x02\x02" +
		"\u02FA\u02FD\x03\x02\x02\x02\u02FB\u02F9\x03\x02\x02\x02\u02FC\u02E9\x03" +
		"\x02\x02\x02\u02FD\u0300\x03\x02\x02\x02\u02FE\u02FC\x03\x02\x02\x02\u02FE" +
		"\u02FF\x03\x02\x02\x02\u02FF\u0301\x03\x02\x02\x02\u0300\u02FE\x03\x02" +
		"\x02\x02\u0301\u030D\x07\x1A\x02\x02\u0302\u0308\x07e\x02\x02\u0303\u0307" +
		"\x05\x94K\x02\u0304\u0307\x07/\x02\x02\u0305\u0307\x07\x04\x02\x02\u0306" +
		"\u0303\x03\x02\x02\x02\u0306\u0304\x03\x02\x02\x02\u0306\u0305\x03\x02" +
		"\x02\x02\u0307\u030A\x03\x02\x02\x02\u0308\u0306\x03\x02\x02\x02\u0308" +
		"\u0309\x03\x02\x02\x02\u0309\u030B\x03\x02\x02\x02\u030A\u0308\x03\x02" +
		"\x02\x02\u030B\u030D\x07\x02\x02\x03\u030C\u02E5\x03\x02\x02\x02\u030C" +
		"\u0302\x03\x02\x02\x02\u030Ds\x03\x02\x02\x02\u030E\u0313\x074\x02\x02" +
		"\u030F\u0314\x05\x94K\x02\u0310\u0314\x07\x1B\x02\x02\u0311\u0314\x07" +
		"\x95\x02\x02\u0312\u0314\x07/\x02\x02\u0313\u030F\x03\x02\x02\x02\u0313" +
		"\u0310\x03\x02\x02\x02\u0313\u0311\x03\x02\x02\x02\u0313\u0312\x03\x02" +
		"\x02\x02\u0314\u0315\x03\x02\x02\x02\u0315\u0313\x03\x02\x02\x02\u0315" +
		"\u0316\x03\x02\x02\x02\u0316\u0317\x03\x02\x02\x02\u0317\u0325\x07\x1A" +
		"\x02\x02\u0318\u0320\x074\x02\x02\u0319\u031F\x05\x94K\x02\u031A\u031F" +
		"\x07\x1B\x02\x02\u031B\u031F\x07\x95\x02\x02\u031C\u031F\x07/\x02\x02" +
		"\u031D\u031F\x07\x04\x02\x02\u031E\u0319\x03\x02\x02\x02\u031E\u031A\x03" +
		"\x02\x02\x02\u031E\u031B\x03\x02\x02\x02\u031E\u031C\x03\x02\x02\x02\u031E" +
		"\u031D\x03\x02\x02\x02\u031F\u0322\x03\x02\x02\x02\u0320\u031E\x03\x02" +
		"\x02\x02\u0320\u0321\x03\x02\x02\x02\u0321\u0323\x03\x02\x02\x02\u0322" +
		"\u0320\x03\x02\x02\x02\u0323\u0325\x07\x02\x02\x03\u0324\u030E\x03\x02" +
		"\x02\x02\u0324\u0318\x03\x02\x02\x02\u0325u\x03\x02\x02\x02\u0326\u0327" +
		"\x073\x02\x02\u0327\u0328\x05\x94K\x02\u0328\u0329\x07\x1A\x02\x02\u0329" +
		"w\x03\x02\x02\x02\u032A\u032E\x07L\x02\x02\u032B\u032F\x05\x94K\x02\u032C" +
		"\u032F\x07\x1B\x02\x02\u032D\u032F\x07/\x02\x02\u032E\u032B\x03\x02\x02" +
		"\x02\u032E\u032C\x03\x02\x02\x02\u032E\u032D\x03\x02\x02\x02\u032F\u0330" +
		"\x03\x02\x02\x02\u0330\u032E\x03\x02\x02\x02\u0330\u0331\x03\x02\x02\x02" +
		"\u0331\u0332\x03\x02\x02\x02\u0332\u0334\x07\x1A\x02\x02\u0333\u0335\x05" +
		"z>\x02\u0334\u0333\x03\x02\x02\x02\u0334\u0335\x03\x02\x02\x02\u0335y" +
		"\x03\x02\x02\x02\u0336\u033A\x07L\x02\x02\u0337\u033B\x05\x94K\x02\u0338" +
		"\u033B\x07\x1B\x02\x02\u0339\u033B\x07/\x02\x02\u033A\u0337\x03\x02\x02" +
		"\x02\u033A\u0338\x03\x02\x02\x02\u033A\u0339\x03\x02\x02\x02\u033B\u033C" +
		"\x03\x02\x02\x02\u033C\u033A\x03\x02\x02\x02\u033C\u033D\x03\x02\x02\x02" +
		"\u033D\u033E\x03\x02\x02\x02\u033E\u033F\x07\x1A\x02\x02\u033F{\x03\x02" +
		"\x02\x02\u0340\u0344\x07\x11\x02\x02\u0341\u0343\x07/\x02\x02\u0342\u0341" +
		"\x03\x02\x02\x02\u0343\u0346\x03\x02\x02\x02\u0344\u0342\x03\x02\x02\x02" +
		"\u0344\u0345\x03\x02\x02\x02\u0345\u0348\x03\x02\x02\x02\u0346\u0344\x03" +
		"\x02\x02\x02\u0347\u0349\x05\x94K\x02\u0348\u0347\x03\x02\x02\x02\u0348" +
		"\u0349\x03\x02\x02\x02\u0349\u035F\x03\x02\x02\x02\u034A\u0354\x05\x94" +
		"K\x02\u034B\u034F\x07/\x02\x02\u034C\u034E\x07\x04\x02\x02\u034D\u034C" +
		"\x03\x02\x02\x02\u034E\u0351\x03\x02\x02\x02\u034F\u034D\x03\x02\x02\x02" +
		"\u034F\u0350\x03\x02\x02\x02\u0350\u0353\x03\x02\x02\x02\u0351\u034F\x03" +
		"\x02\x02\x02\u0352\u034B\x03\x02\x02\x02\u0353\u0356\x03\x02\x02\x02\u0354" +
		"\u0352\x03\x02\x02\x02\u0354\u0355\x03\x02\x02\x02\u0355\u035A\x03\x02" +
		"\x02\x02\u0356\u0354\x03\x02\x02\x02\u0357\u0359\x07/\x02\x02\u0358\u0357" +
		"\x03\x02\x02\x02\u0359\u035C\x03\x02\x02\x02\u035A\u0358\x03\x02\x02\x02" +
		"\u035A\u035B\x03\x02\x02\x02\u035B\u035E\x03\x02\x02\x02\u035C\u035A\x03" +
		"\x02\x02\x02\u035D\u034A\x03\x02\x02\x02\u035E\u0361\x03\x02\x02\x02\u035F" +
		"\u035D\x03\x02\x02\x02\u035F\u0360\x03\x02\x02\x02\u0360\u0362\x03\x02" +
		"\x02\x02\u0361\u035F\x03\x02\x02\x02\u0362\u036F\x07\x1A\x02\x02\u0363" +
		"\u0367\x07\x11\x02\x02\u0364\u0366\x07/\x02\x02\u0365\u0364\x03\x02\x02" +
		"\x02\u0366\u0369\x03\x02\x02\x02\u0367\u0365\x03\x02\x02\x02\u0367\u0368" +
		"\x03\x02\x02\x02\u0368\u036B\x03\x02\x02\x02\u0369\u0367\x03\x02\x02\x02" +
		"\u036A\u036C\x05\x94K\x02\u036B\u036A\x03\x02\x02\x02\u036B\u036C\x03" +
		"\x02\x02\x02\u036C\u036D\x03\x02\x02\x02\u036D\u036F\x07\x02\x02\x03\u036E" +
		"\u0340\x03\x02\x02\x02\u036E\u0363\x03\x02\x02\x02\u036F}\x03\x02\x02" +
		"\x02\u0370\u0372\x07\x12\x02\x02\u0371\u0373\n\x10\x02\x02\u0372\u0371" +
		"\x03\x02\x02\x02\u0373\u0374\x03\x02\x02\x02\u0374\u0372\x03\x02\x02\x02" +
		"\u0374\u0375\x03\x02\x02\x02\u0375\u0376\x03\x02\x02\x02\u0376\u0377\x07" +
		"\x1A\x02\x02\u0377\x7F\x03\x02\x02\x02\u0378\u037B\x07\x19\x02\x02\u0379" +
		"\u037C\x05\x94K\x02\u037A\u037C\x07/\x02\x02\u037B\u0379\x03\x02\x02\x02" +
		"\u037B\u037A\x03\x02\x02\x02\u037C\u037D\x03\x02\x02\x02\u037D\u037B\x03" +
		"\x02\x02\x02\u037D\u037E\x03\x02\x02\x02\u037E\u037F\x03\x02\x02\x02\u037F" +
		"\u0385\x07\x1A\x02\x02\u0380\u0381\x07\x19\x02\x02\u0381\u0382\x05\x94" +
		"K\x02\u0382\u0383\x07\x02\x02\x03\u0383\u0385\x03\x02\x02\x02\u0384\u0378" +
		"\x03\x02\x02\x02\u0384\u0380\x03\x02\x02\x02\u0385\x81\x03\x02\x02\x02" +
		"\u0386\u0387\x07?\x02\x02\u0387\u0388\x05\x94K\x02\u0388\u0389\x07\x1A" +
		"\x02\x02\u0389\u038F\x03\x02\x02\x02\u038A\u038B\x07@\x02\x02\u038B\u038C" +
		"\x05\x94K\x02\u038C\u038D\x07\x1A\x02\x02\u038D\u038F\x03\x02\x02\x02" +
		"\u038E\u0386\x03\x02\x02\x02\u038E\u038A\x03\x02\x02\x02\u038F\x83\x03" +
		"\x02\x02\x02\u0390\u0391\x077\x02\x02\u0391\u0392\x07\x1B\x02\x02\u0392" +
		"\u0393\x07-\x02\x02\u0393\u039A\x07\x1A\x02\x02\u0394\u0395\x077\x02\x02" +
		"\u0395\u0396\x07\x1B\x02\x02\u0396\u0397\x05\x94K\x02\u0397\u0398\x07" +
		"\x1A\x02\x02\u0398\u039A\x03\x02\x02\x02\u0399\u0390\x03\x02\x02\x02\u0399" +
		"\u0394\x03\x02\x02\x02\u039A\x85\x03\x02\x02\x02\u039B\u039C\x07J\x02" +
		"\x02\u039C\u039D\x05\x94K\x02\u039D\u039E\x07\x1A\x02\x02\u039E\x87\x03" +
		"\x02\x02\x02\u039F\u03A0\x07K\x02\x02\u03A0\u03A1\x05\x94K\x02\u03A1\u03A2" +
		"\x07\x1A\x02\x02\u03A2\x89\x03\x02\x02\x02\u03A3\u03AD\x05\x8CG\x02\u03A4" +
		"\u03A6\x07/\x02\x02\u03A5\u03A4\x03\x02\x02\x02\u03A6\u03A9\x03\x02\x02" +
		"\x02\u03A7\u03A5\x03\x02\x02\x02\u03A7\u03A8\x03\x02\x02\x02\u03A8\u03AA" +
		"\x03\x02\x02\x02\u03A9\u03A7\x03\x02\x02\x02\u03AA\u03AC\x05\x8CG\x02" +
		"\u03AB\u03A7\x03\x02\x02\x02\u03AC\u03AF\x03\x02\x02\x02\u03AD\u03AB\x03" +
		"\x02\x02\x02\u03AD\u03AE\x03\x02\x02\x02\u03AE\x8B\x03\x02\x02\x02\u03AF" +
		"\u03AD\x03\x02\x02\x02\u03B0\u03B1\x07\x13\x02\x02\u03B1\u03B2\x05\x94" +
		"K\x02\u03B2\u03B3\t\x11\x02\x02\u03B3\u03B9\x05\x94K\x02\u03B4\u03B8\x07" +
		"/\x02\x02\u03B5\u03B8\x07\x1B\x02\x02\u03B6\u03B8\x05\x94K\x02\u03B7\u03B4" +
		"\x03\x02\x02\x02\u03B7\u03B5\x03\x02\x02\x02\u03B7\u03B6\x03\x02\x02\x02" +
		"\u03B8\u03BB\x03\x02\x02\x02\u03B9\u03B7\x03\x02\x02\x02\u03B9\u03BA\x03" +
		"\x02\x02\x02\u03BA\u03BC\x03\x02\x02\x02\u03BB\u03B9\x03\x02\x02\x02\u03BC" +
		"\u03BD\x07\x1A\x02\x02\u03BD\u03C7\x03\x02\x02\x02\u03BE\u03C2\x07H\x02" +
		"\x02\u03BF\u03C1\v\x02\x02\x02\u03C0\u03BF\x03\x02\x02\x02\u03C1\u03C4" +
		"\x03\x02\x02\x02\u03C2\u03C3\x03\x02\x02\x02\u03C2\u03C0\x03\x02\x02\x02" +
		"\u03C3\u03C5\x03\x02\x02\x02\u03C4\u03C2\x03\x02\x02\x02\u03C5\u03C7\x07" +
		"\x1A\x02\x02\u03C6\u03B0\x03\x02\x02\x02\u03C6\u03BE\x03\x02\x02\x02\u03C7" +
		"\x8D\x03\x02\x02\x02\u03C8\u03CC\x07\n\x02\x02\u03C9\u03CD\x05\x94K\x02" +
		"\u03CA\u03CD\x07\x1B\x02\x02\u03CB\u03CD\x07/\x02\x02\u03CC\u03C9\x03" +
		"\x02\x02\x02\u03CC\u03CA\x03\x02\x02\x02\u03CC\u03CB\x03\x02\x02\x02\u03CD" +
		"\u03CE\x03\x02\x02\x02\u03CE\u03CC\x03\x02\x02\x02\u03CE\u03CF\x03\x02" +
		"\x02\x02\u03CF\u03D0\x03\x02\x02\x02\u03D0\u03DC\x07\x1A\x02\x02\u03D1" +
		"\u03D7\x07\n\x02\x02\u03D2\u03D6\x05\x94K\x02\u03D3\u03D6\x07\x1B\x02" +
		"\x02\u03D4\u03D6\x07/\x02\x02\u03D5\u03D2\x03\x02\x02\x02\u03D5\u03D3" +
		"\x03\x02\x02\x02\u03D5\u03D4\x03\x02\x02\x02\u03D6\u03D9\x03\x02\x02\x02" +
		"\u03D7\u03D5\x03\x02\x02\x02\u03D7\u03D8\x03\x02\x02\x02\u03D8\u03DA\x03" +
		"\x02\x02\x02\u03D9\u03D7\x03\x02\x02\x02\u03DA\u03DC\x07\x02\x02\x03\u03DB" +
		"\u03C8\x03\x02\x02\x02\u03DB\u03D1\x03\x02\x02\x02\u03DC\x8F\x03\x02\x02" +
		"\x02\u03DD\u03DF\x07\x0F\x02\x02\u03DE\u03E0\x05\x94K\x02\u03DF\u03DE" +
		"\x03\x02\x02\x02\u03DF\u03E0\x03\x02\x02\x02\u03E0\u03E1\x03\x02\x02\x02" +
		"\u03E1\u03E2\x07\x1A\x02\x02\u03E2\x91\x03\x02\x02\x02\u03E3\u03E4\x07" +
		"\x1D\x02\x02\u03E4\x93\x03\x02\x02\x02\u03E5\u03EC\x07.\x02\x02\u03E6" +
		"\u03E8\x07\x04\x02\x02\u03E7\u03E6\x03\x02\x02\x02\u03E8\u03E9\x03\x02" +
		"\x02\x02\u03E9\u03E7\x03\x02\x02\x02\u03E9\u03EA\x03\x02\x02\x02\u03EA" +
		"\u03EB\x03\x02\x02\x02\u03EB\u03ED\x07-\x02\x02\u03EC\u03E7\x03\x02\x02" +
		"\x02\u03EC\u03ED\x03\x02\x02\x02\u03ED\u0414\x03\x02\x02\x02\u03EE\u03F5" +
		"\x05\x9EP\x02\u03EF\u03F1\x07\x04\x02\x02\u03F0\u03EF\x03\x02\x02\x02" +
		"\u03F1\u03F2\x03\x02\x02\x02\u03F2\u03F0\x03\x02\x02\x02\u03F2\u03F3\x03" +
		"\x02\x02\x02\u03F3\u03F4\x03\x02\x02\x02\u03F4\u03F6\x07-\x02\x02\u03F5" +
		"\u03F0\x03\x02\x02\x02\u03F5\u03F6\x03\x02\x02\x02\u03F6\u0414\x03\x02" +
		"\x02\x02\u03F7\u03F8\x07\x16\x02\x02\u03F8\u03F9\x05\x94K\x02\u03F9\u03FA" +
		"\x07\x1A\x02\x02\u03FA\u0414\x03\x02\x02\x02\u03FB\u0414\x07-\x02\x02" +
		"\u03FC\u03FE\x07\x04\x02\x02\u03FD\u03FC\x03\x02\x02\x02\u03FE\u0401\x03" +
		"\x02\x02\x02\u03FF\u03FD\x03\x02\x02\x02\u03FF\u0400\x03\x02\x02\x02\u0400" +
		"\u0402\x03\x02\x02\x02\u0401\u03FF\x03\x02\x02\x02\u0402\u0406\x07\x1B" +
		"\x02\x02\u0403\u0405\x07\x04\x02\x02\u0404\u0403\x03\x02\x02\x02\u0405" +
		"\u0408\x03\x02\x02\x02\u0406\u0404\x03\x02\x02\x02\u0406\u0407\x03\x02" +
		"\x02\x02\u0407\u0414\x03\x02\x02\x02\u0408\u0406\x03\x02\x02\x02\u0409" +
		"\u040D\x07\x1C\x02\x02\u040A\u040C\x07\x04\x02\x02\u040B\u040A\x03\x02" +
		"\x02\x02\u040C\u040F\x03\x02\x02\x02\u040D\u040B\x03\x02\x02\x02\u040D" +
		"\u040E\x03\x02\x02\x02\u040E\u0414\x03\x02\x02\x02\u040F\u040D\x03\x02" +
		"\x02\x02\u0410\u0414\x07%\x02\x02\u0411\u0414\x07\x95\x02\x02\u0412\u0414" +
		"\x05\x98M\x02\u0413\u03E5\x03\x02\x02\x02\u0413\u03EE\x03\x02\x02\x02" +
		"\u0413\u03F7\x03\x02\x02\x02\u0413\u03FB\x03\x02\x02\x02\u0413\u03FF\x03" +
		"\x02\x02\x02\u0413\u0409\x03\x02\x02\x02\u0413\u0410\x03\x02\x02\x02\u0413" +
		"\u0411\x03\x02\x02\x02\u0413\u0412\x03\x02\x02\x02\u0414\x95\x03\x02\x02" +
		"\x02\u0415\u0416\x07*\x02\x02\u0416\x97\x03\x02\x02\x02\u0417\u0419\x07" +
		"\f\x02\x02\u0418\u041A\x05\x94K\x02\u0419\u0418\x03\x02\x02\x02\u041A" +
		"\u041B\x03\x02\x02\x02\u041B\u0419\x03\x02\x02\x02\u041B\u041C\x03\x02" +
		"\x02\x02\u041C\u041E\x03\x02\x02\x02\u041D\u041F\x07\x1A\x02\x02\u041E" +
		"\u041D\x03\x02\x02\x02\u041E\u041F\x03\x02\x02\x02\u041F\x99\x03\x02\x02" +
		"\x02\u0420\u0421\x07\x1A\x02\x02\u0421\x9B\x03\x02\x02\x02\u0422\u0423" +
		"\t\x12\x02\x02\u0423\x9D\x03\x02\x02\x02\u0424\u043D\x070\x02\x02\u0425" +
		"\u043D\x071\x02\x02\u0426\u043D\x07\x96\x02\x02\u0427\u043D\x07\x1C\x02" +
		"\x02\u0428\u0429\x07 \x02\x02\u0429\u043D\n\x13\x02\x02\u042A\u042B\x07" +
		"!\x02\x02\u042B\u043D\n\x14\x02\x02\u042C\u043D\x07#\x02\x02\u042D\u043D" +
		"\x07\"\x02\x02\u042E\u043D\x07T\x02\x02\u042F\u043D\x07U\x02\x02\u0430" +
		"\u043D\x07j\x02\x02\u0431\u043D\x07W\x02\x02\u0432\u043D\x07P\x02\x02" +
		"\u0433\u043D\x07O\x02\x02\u0434\u043D\x07S\x02\x02\u0435\u043D\x07V\x02" +
		"\x02\u0436\u043D\x07i\x02\x02\u0437\u043D\x07f\x02\x02\u0438\u043D\x07" +
		"g\x02\x02\u0439\u043D\x07j\x02\x02\u043A\u043D\x07\x80\x02\x02\u043B\u043D" +
		"\x07\x81\x02\x02\u043C\u0424\x03\x02\x02\x02\u043C\u0425\x03\x02\x02\x02" +
		"\u043C\u0426\x03\x02\x02\x02\u043C\u0427\x03\x02\x02\x02\u043C\u0428\x03" +
		"\x02\x02\x02\u043C\u042A\x03\x02\x02\x02\u043C\u042C\x03\x02\x02\x02\u043C" +
		"\u042D\x03";
	private static readonly _serializedATNSegment2: string =
		"\x02\x02\x02\u043C\u042E\x03\x02\x02\x02\u043C\u042F\x03\x02\x02\x02\u043C" +
		"\u0430\x03\x02\x02\x02\u043C\u0431\x03\x02\x02\x02\u043C\u0432\x03\x02" +
		"\x02\x02\u043C\u0433\x03\x02\x02\x02\u043C\u0434\x03\x02\x02\x02\u043C" +
		"\u0435\x03\x02\x02\x02\u043C\u0436\x03\x02\x02\x02\u043C\u0437\x03\x02" +
		"\x02\x02\u043C\u0438\x03\x02\x02\x02\u043C\u0439\x03\x02\x02\x02\u043C" +
		"\u043A\x03\x02\x02\x02\u043C\u043B\x03\x02\x02\x02\u043D\u043E\x03\x02" +
		"\x02\x02\u043E\u043C\x03\x02\x02\x02\u043E\u043F\x03\x02\x02\x02\u043F" +
		"\x9F\x03\x02\x02\x02\u0440\u0441\x07\x04\x02\x02\u0441\xA1\x03\x02\x02" +
		"\x02\x93\xA6\xAC\xB1\xB6\xC5\xCB\xD1\xDA\xE3\xE9\xEC\xF0\xF4\u0114\u011C" +
		"\u011E\u0125\u012A\u0130\u0136\u013B\u0141\u0146\u014C\u0156\u015F\u0165" +
		"\u0167\u0175\u017C\u0181\u0185\u0189\u018C\u0191\u01A8\u01AD\u01B2\u01B4" +
		"\u01BE\u01C8\u01D2\u01D8\u01DF\u01E5\u01ED\u01F7\u0202\u0208\u020D\u0214" +
		"\u021D\u0221\u0225\u0228\u0237\u023B\u024A\u024E\u0254\u025F\u0264\u0269" +
		"\u026B\u0270\u0275\u027A\u027C\u0281\u0287\u028C\u028E\u0299\u029D\u02AA" +
		"\u02AE\u02B4\u02B6\u02BD\u02C1\u02C3\u02C9\u02CB\u02D2\u02D7\u02DA\u02E0" +
		"\u02E3\u02E7\u02EE\u02F3\u02F9\u02FE\u0306\u0308\u030C\u0313\u0315\u031E" +
		"\u0320\u0324\u032E\u0330\u0334\u033A\u033C\u0344\u0348\u034F\u0354\u035A" +
		"\u035F\u0367\u036B\u036E\u0374\u037B\u037D\u0384\u038E\u0399\u03A7\u03AD" +
		"\u03B7\u03B9\u03C2\u03C6\u03CC\u03CE\u03D5\u03D7\u03DB\u03DF\u03E9\u03EC" +
		"\u03F2\u03F5\u03FF\u0406\u040D\u0413\u041B\u041E\u043C\u043E";
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
	public sequence(): SequenceContext {
		return this.getRuleContext(0, SequenceContext);
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
	public mmm(): MmmContext[];
	public mmm(i: number): MmmContext;
	public mmm(i?: number): MmmContext | MmmContext[] {
		if (i === undefined) {
			return this.getRuleContexts(MmmContext);
		} else {
			return this.getRuleContext(i, MmmContext);
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


export class MmmContext extends ParserRuleContext {
	public DBLMI(): TerminalNode { return this.getToken(sequenceParser.DBLMI, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return sequenceParser.RULE_mmm; }
	// @Override
	public enterRule(listener: sequenceParserListener): void {
		if (listener.enterMmm) {
			listener.enterMmm(this);
		}
	}
	// @Override
	public exitRule(listener: sequenceParserListener): void {
		if (listener.exitMmm) {
			listener.exitMmm(this);
		}
	}
}


export class BitElemContext extends ParserRuleContext {
	public LIST_LINE(): TerminalNode | undefined { return this.tryGetToken(sequenceParser.LIST_LINE, 0); }
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
	public AmpImageWAudio(): TerminalNode | undefined { return this.tryGetToken(sequenceParser.AmpImageWAudio, 0); }
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
	public OpAmpImageWAudio(): TerminalNode | undefined { return this.tryGetToken(sequenceParser.OpAmpImageWAudio, 0); }
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
	public OPC(): TerminalNode { return this.getToken(sequenceParser.OPC, 0); }
	public CL(): TerminalNode { return this.getToken(sequenceParser.CL, 0); }
	public lead(): LeadContext | undefined {
		return this.tryGetRuleContext(0, LeadContext);
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
	public s_and_w(): S_and_wContext | undefined {
		return this.tryGetRuleContext(0, S_and_wContext);
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
	public OPC(): TerminalNode { return this.getToken(sequenceParser.OPC, 0); }
	public s_and_w(): S_and_wContext {
		return this.getRuleContext(0, S_and_wContext);
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
	public bracket_escaped(): Bracket_escapedContext | undefined {
		return this.tryGetRuleContext(0, Bracket_escapedContext);
	}
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


export class Bracket_escapedContext extends ParserRuleContext {
	public OPESC(): TerminalNode { return this.getToken(sequenceParser.OPESC, 0); }
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
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return sequenceParser.RULE_bracket_escaped; }
	// @Override
	public enterRule(listener: sequenceParserListener): void {
		if (listener.enterBracket_escaped) {
			listener.enterBracket_escaped(this);
		}
	}
	// @Override
	public exitRule(listener: sequenceParserListener): void {
		if (listener.exitBracket_escaped) {
			listener.exitBracket_escaped(this);
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
	public BARSTRING(): TerminalNode[];
	public BARSTRING(i: number): TerminalNode;
	public BARSTRING(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(sequenceParser.BARSTRING);
		} else {
			return this.getToken(sequenceParser.BARSTRING, i);
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


