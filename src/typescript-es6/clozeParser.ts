// Generated from ./Cloze/clozeParser.g4 by ANTLR 4.9.0-SNAPSHOT


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

import { clozeParserListener } from "./clozeParserListener";

export class clozeParser extends Parser {
	public static readonly S = 1;
	public static readonly OPDOT = 2;
	public static readonly BitCloze = 3;
	public static readonly BitClozeinstgrp = 4;
	public static readonly BitClozesolgrp = 5;
	public static readonly BitClozeandmulti = 6;
	public static readonly OPSP = 7;
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
	public static readonly DBLEQ = 32;
	public static readonly RightAngle = 33;
	public static readonly RightArrow = 34;
	public static readonly OP_N_ETC = 35;
	public static readonly UNSCO = 36;
	public static readonly COMMENT = 37;
	public static readonly DCANY = 38;
	public static readonly Image_type = 39;
	public static readonly Audio_type = 40;
	public static readonly Video_type = 41;
	public static readonly ArticleText = 42;
	public static readonly NOTCL = 43;
	public static readonly NUMERIC = 44;
	public static readonly STRING = 45;
	public static readonly NL = 46;
	public static readonly NOTBITMARK = 47;
	public static readonly ELIPSIS = 48;
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
	public static readonly AtSampleSolution = 62;
	public static readonly AtPartialAnswerS = 63;
	public static readonly AtPartialAnswer = 64;
	public static readonly AtLabeltrue = 65;
	public static readonly AtLabelfalse = 66;
	public static readonly AtPoints = 67;
	public static readonly AtSrc = 68;
	public static readonly AtPartner = 69;
	public static readonly OPATALT = 70;
	public static readonly OPAMARK = 71;
	public static readonly ShowInIndex = 72;
	public static readonly OpAtCaption = 73;
	public static readonly OpAtLicense = 74;
	public static readonly OpAtCopyright = 75;
	public static readonly OpAtSearch = 76;
	public static readonly OpAtIsTracked = 77;
	public static readonly OpAtIsInfoOnly = 78;
	public static readonly AtDate = 79;
	public static readonly Http = 80;
	public static readonly Https = 81;
	public static readonly AmpAudio = 82;
	public static readonly AmpImage = 83;
	public static readonly AmpImageZoom = 84;
	public static readonly AmpImageWAudio = 85;
	public static readonly AmpVideo = 86;
	public static readonly AmpArticle = 87;
	public static readonly AmpDocument = 88;
	public static readonly AmpApp = 89;
	public static readonly AmpWebsite = 90;
	public static readonly AmpStillImageFilm = 91;
	public static readonly AmpPdf = 92;
	public static readonly OpAmpAudio = 93;
	public static readonly OpAmpImage = 94;
	public static readonly OpAmpImageZoom = 95;
	public static readonly OpAmpImageWAudio = 96;
	public static readonly OpAmpVideo = 97;
	public static readonly OpAmpArticle = 98;
	public static readonly OpAmpArticleAtt = 99;
	public static readonly OpAmpDocument = 100;
	public static readonly OpAmpApp = 101;
	public static readonly OpAmpWebsite = 102;
	public static readonly OpAmpStillImageFilm = 103;
	public static readonly BracEnclose = 104;
	public static readonly AmpAudioLink = 105;
	public static readonly AmpImageLink = 106;
	public static readonly AmpVideoLink = 107;
	public static readonly AmpArticleLink = 108;
	public static readonly AmpDocumentLink = 109;
	public static readonly AmpDocumentDownload = 110;
	public static readonly AmpAppLink = 111;
	public static readonly AmpWebsiteLink = 112;
	public static readonly AmpStillImageFilmLink = 113;
	public static readonly OpAmpAudioLink = 114;
	public static readonly OpAmpImageLink = 115;
	public static readonly OpAmpVideoLink = 116;
	public static readonly OpAmpArticleLink = 117;
	public static readonly OpAmpDocumentLink = 118;
	public static readonly OpAmpDocumentDownload = 119;
	public static readonly OpAmpAppLink = 120;
	public static readonly OpAmpWebsiteLink = 121;
	public static readonly OpAmpStillImageFilmLink = 122;
	public static readonly AmpImageEmbed = 123;
	public static readonly AmpVideoEmbed = 124;
	public static readonly AmpAudioEmbed = 125;
	public static readonly AmpDocumentEmbed = 126;
	public static readonly AmpStillImageFilmEmbed = 127;
	public static readonly OpAmpImageEmbed = 128;
	public static readonly OpAmpVideoEmbed = 129;
	public static readonly OpAmpAudioEmbed = 130;
	public static readonly OpAmpDocumentEmbed = 131;
	public static readonly OpAmpStillImageFilmEmbed = 132;
	public static readonly BitmarkMinus = 133;
	public static readonly BitmarkPlus = 134;
	public static readonly ColonText = 135;
	public static readonly ColonJson = 136;
	public static readonly Prosemirror = 137;
	public static readonly Placeholder = 138;
	public static readonly BASIC = 139;
	public static readonly JPG = 140;
	public static readonly PNG = 141;
	public static readonly GIF = 142;
	public static readonly SVG = 143;
	public static readonly MP2 = 144;
	public static readonly MP3 = 145;
	public static readonly MP4 = 146;
	public static readonly FLV = 147;
	public static readonly WMV = 148;
	public static readonly MPEG = 149;
	public static readonly MPG = 150;
	public static readonly TEL = 151;
	public static readonly DotArticleAtt = 152;
	public static readonly STAR = 153;
	public static readonly URL = 154;
	public static readonly LIST_LINE = 155;
	public static readonly ENCLBARS = 156;
	public static readonly RULE_bitmark = 0;
	public static readonly RULE_bitmark_ = 1;
	public static readonly RULE_clozes = 2;
	public static readonly RULE_bitElem = 3;
	public static readonly RULE_resource = 4;
	public static readonly RULE_cloze = 5;
	public static readonly RULE_cloze_instruction_grouped = 6;
	public static readonly RULE_cloze_solution_grouped = 7;
	public static readonly RULE_gap = 8;
	public static readonly RULE_single_gap = 9;
	public static readonly RULE_cloze_and_multiple_choice_text = 10;
	public static readonly RULE_headed_inline_choices = 11;
	public static readonly RULE_choice_head = 12;
	public static readonly RULE_inline_choices = 13;
	public static readonly RULE_choice_plus = 14;
	public static readonly RULE_choice_minus = 15;
	public static readonly RULE_choice_star = 16;
	public static readonly RULE_pimagebit = 17;
	public static readonly RULE_atpoint = 18;
	public static readonly RULE_format = 19;
	public static readonly RULE_resource_format = 20;
	public static readonly RULE_resource_format_extra = 21;
	public static readonly RULE_format2 = 22;
	public static readonly RULE_image_format = 23;
	public static readonly RULE_video_format = 24;
	public static readonly RULE_article_format = 25;
	public static readonly RULE_document_format = 26;
	public static readonly RULE_app_format = 27;
	public static readonly RULE_website_format = 28;
	public static readonly RULE_stillimagefilm_format = 29;
	public static readonly RULE_op_article_format = 30;
	public static readonly RULE_op_document_format = 31;
	public static readonly RULE_op_app_format = 32;
	public static readonly RULE_op_website_format = 33;
	public static readonly RULE_op_video_format = 34;
	public static readonly RULE_op_stillimagefilm_format = 35;
	public static readonly RULE_articlebit = 36;
	public static readonly RULE_documentbit = 37;
	public static readonly RULE_websitebit = 38;
	public static readonly RULE_appbit = 39;
	public static readonly RULE_stillimagefilmbit = 40;
	public static readonly RULE_stillimg_one = 41;
	public static readonly RULE_videobit = 42;
	public static readonly RULE_video_one = 43;
	public static readonly RULE_imagebit = 44;
	public static readonly RULE_image_one = 45;
	public static readonly RULE_op_image_format = 46;
	public static readonly RULE_image_chained = 47;
	public static readonly RULE_image_chained4match = 48;
	public static readonly RULE_audiobit = 49;
	public static readonly RULE_audio_one = 50;
	public static readonly RULE_audio_format = 51;
	public static readonly RULE_op_audio_format = 52;
	public static readonly RULE_resource_chained = 53;
	public static readonly RULE_telephone = 54;
	public static readonly RULE_url = 55;
	public static readonly RULE_item = 56;
	public static readonly RULE_lead = 57;
	public static readonly RULE_angleref = 58;
	public static readonly RULE_example = 59;
	public static readonly RULE_bracketed_text = 60;
	public static readonly RULE_reference = 61;
	public static readonly RULE_progress = 62;
	public static readonly RULE_dateprop = 63;
	public static readonly RULE_dateprop_chained = 64;
	public static readonly RULE_instruction = 65;
	public static readonly RULE_hint = 66;
	public static readonly RULE_title = 67;
	public static readonly RULE_bool_label = 68;
	public static readonly RULE_progress_points = 69;
	public static readonly RULE_istracked = 70;
	public static readonly RULE_isinfoonly = 71;
	public static readonly RULE_atdef = 72;
	public static readonly RULE_atdef_ = 73;
	public static readonly RULE_dollarans = 74;
	public static readonly RULE_anchor = 75;
	public static readonly RULE_lines = 76;
	public static readonly RULE_s_and_w = 77;
	public static readonly RULE_dclines = 78;
	public static readonly RULE_opu = 79;
	public static readonly RULE_opb = 80;
	public static readonly RULE_opq = 81;
	public static readonly RULE_opa = 82;
	public static readonly RULE_opp = 83;
	public static readonly RULE_opm = 84;
	public static readonly RULE_ops = 85;
	public static readonly RULE_opr = 86;
	public static readonly RULE_opc = 87;
	public static readonly RULE_cl = 88;
	public static readonly RULE_clnsp = 89;
	public static readonly RULE_nl = 90;
	public static readonly RULE_listline_ = 91;
	public static readonly RULE_numeric = 92;
	public static readonly RULE_string = 93;
	public static readonly RULE_words = 94;
	public static readonly RULE_sp = 95;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"bitmark", "bitmark_", "clozes", "bitElem", "resource", "cloze", "cloze_instruction_grouped", 
		"cloze_solution_grouped", "gap", "single_gap", "cloze_and_multiple_choice_text", 
		"headed_inline_choices", "choice_head", "inline_choices", "choice_plus", 
		"choice_minus", "choice_star", "pimagebit", "atpoint", "format", "resource_format", 
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
		"dclines", "opu", "opb", "opq", "opa", "opp", "opm", "ops", "opr", "opc", 
		"cl", "clnsp", "nl", "listline_", "numeric", "string", "words", "sp",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, undefined, "'[.'", undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, "'[^'", undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, "'[#'", undefined, "':'", "'&'", "'::'", "'+'", 
		"'.@'", "'>'", "'<'", "'=='", "'\u25BA'", "'\u2192'", undefined, "'_'", 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		"'[@'", undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, "'http://'", "'https://'", "'&audio'", "'&image'", "'&image-zoom'", 
		"'&image-with-audio'", "'&video'", "'&article'", "'&document'", "'&app'", 
		"'&website'", "'&still-image-film'", "'&pdf'", undefined, undefined, undefined, 
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
		undefined, "S", "OPDOT", "BitCloze", "BitClozeinstgrp", "BitClozesolgrp", 
		"BitClozeandmulti", "OPSP", "OPDOLL", "OPBUL", "OPESC", "OPRANGLES", "OPRANGLEL", 
		"OPDANGLE", "OPU", "OPB", "OPQ", "OPA", "OPP", "OPM", "OPS", "OPR", "OPC", 
		"OPHASH", "CL", "COLON", "AMP", "DBLCOLON", "PLUS", "DotAt", "Greater", 
		"Less", "DBLEQ", "RightAngle", "RightArrow", "OP_N_ETC", "UNSCO", "COMMENT", 
		"DCANY", "Image_type", "Audio_type", "Video_type", "ArticleText", "NOTCL", 
		"NUMERIC", "STRING", "NL", "NOTBITMARK", "ELIPSIS", "SENTENCE", "BARSTRING", 
		"OPAT", "AtProgress", "AtReference", "AtWidth", "AtHeight", "AtProgressPoints", 
		"AtShortanswer", "AtLonganswer", "AtExampleWithStr", "AtExamplecol", "AtExamplecl", 
		"AtSampleSolution", "AtPartialAnswerS", "AtPartialAnswer", "AtLabeltrue", 
		"AtLabelfalse", "AtPoints", "AtSrc", "AtPartner", "OPATALT", "OPAMARK", 
		"ShowInIndex", "OpAtCaption", "OpAtLicense", "OpAtCopyright", "OpAtSearch", 
		"OpAtIsTracked", "OpAtIsInfoOnly", "AtDate", "Http", "Https", "AmpAudio", 
		"AmpImage", "AmpImageZoom", "AmpImageWAudio", "AmpVideo", "AmpArticle", 
		"AmpDocument", "AmpApp", "AmpWebsite", "AmpStillImageFilm", "AmpPdf", 
		"OpAmpAudio", "OpAmpImage", "OpAmpImageZoom", "OpAmpImageWAudio", "OpAmpVideo", 
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
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(clozeParser._LITERAL_NAMES, clozeParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return clozeParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "clozeParser.g4"; }

	// @Override
	public get ruleNames(): string[] { return clozeParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return clozeParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(clozeParser._ATN, this);
	}
	// @RuleVersion(0)
	public bitmark(): BitmarkContext {
		let _localctx: BitmarkContext = new BitmarkContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, clozeParser.RULE_bitmark);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 205;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 192;
				this.bitmark_();
				this.state = 202;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === clozeParser.S || _la === clozeParser.NL) {
					{
					{
					this.state = 196;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === clozeParser.S) {
						{
						{
						this.state = 193;
						this.match(clozeParser.S);
						}
						}
						this.state = 198;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					this.state = 199;
					this.nl();
					}
					}
					this.state = 204;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
				}
				this.state = 207;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << clozeParser.BitCloze) | (1 << clozeParser.BitClozeinstgrp) | (1 << clozeParser.BitClozesolgrp) | (1 << clozeParser.BitClozeandmulti))) !== 0));
			this.state = 209;
			this.match(clozeParser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 2, clozeParser.RULE_bitmark_);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 211;
			this.clozes();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public clozes(): ClozesContext {
		let _localctx: ClozesContext = new ClozesContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, clozeParser.RULE_clozes);
		try {
			this.state = 217;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case clozeParser.BitCloze:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 213;
				this.cloze();
				}
				break;
			case clozeParser.BitClozeinstgrp:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 214;
				this.cloze_instruction_grouped();
				}
				break;
			case clozeParser.BitClozesolgrp:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 215;
				this.cloze_solution_grouped();
				}
				break;
			case clozeParser.BitClozeandmulti:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 216;
				this.cloze_and_multiple_choice_text();
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
	public bitElem(): BitElemContext {
		let _localctx: BitElemContext = new BitElemContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, clozeParser.RULE_bitElem);
		try {
			let _alt: number;
			this.state = 260;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 7, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 219;
				this.match(clozeParser.LIST_LINE);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 220;
				this.match(clozeParser.NOTBITMARK);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 221;
				this.dclines();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 222;
				this.gap();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 223;
				this.atdef();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 224;
				this.reference();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 225;
				this.item();
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 226;
				this.instruction();
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 227;
				this.hint();
				}
				break;

			case 10:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 228;
				this.s_and_w();
				}
				break;

			case 11:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 229;
				this.example();
				}
				break;

			case 12:
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 230;
				this.bool_label();
				}
				break;

			case 13:
				this.enterOuterAlt(_localctx, 13);
				{
				this.state = 231;
				this.imagebit();
				this.state = 235;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 4, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 232;
						this.nl();
						}
						}
					}
					this.state = 237;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 4, this._ctx);
				}
				}
				break;

			case 14:
				this.enterOuterAlt(_localctx, 14);
				{
				this.state = 238;
				this.audiobit();
				this.state = 242;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 5, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 239;
						this.nl();
						}
						}
					}
					this.state = 244;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 5, this._ctx);
				}
				}
				break;

			case 15:
				this.enterOuterAlt(_localctx, 15);
				{
				this.state = 245;
				this.videobit();
				this.state = 249;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 6, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 246;
						this.nl();
						}
						}
					}
					this.state = 251;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 6, this._ctx);
				}
				}
				break;

			case 16:
				this.enterOuterAlt(_localctx, 16);
				{
				this.state = 252;
				this.articlebit();
				}
				break;

			case 17:
				this.enterOuterAlt(_localctx, 17);
				{
				this.state = 253;
				this.documentbit();
				}
				break;

			case 18:
				this.enterOuterAlt(_localctx, 18);
				{
				this.state = 254;
				this.appbit();
				}
				break;

			case 19:
				this.enterOuterAlt(_localctx, 19);
				{
				this.state = 255;
				this.websitebit();
				}
				break;

			case 20:
				this.enterOuterAlt(_localctx, 20);
				{
				this.state = 256;
				this.stillimagefilmbit();
				}
				break;

			case 21:
				this.enterOuterAlt(_localctx, 21);
				{
				this.state = 257;
				this.angleref();
				}
				break;

			case 22:
				this.enterOuterAlt(_localctx, 22);
				{
				this.state = 258;
				this.anchor();
				}
				break;

			case 23:
				this.enterOuterAlt(_localctx, 23);
				{
				this.state = 259;
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
		this.enterRule(_localctx, 8, clozeParser.RULE_resource);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 262;
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
	public cloze(): ClozeContext {
		let _localctx: ClozeContext = new ClozeContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, clozeParser.RULE_cloze);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 264;
			this.match(clozeParser.BitCloze);
			this.state = 265;
			this.format();
			this.state = 266;
			this.match(clozeParser.CL);
			this.state = 270;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === clozeParser.NL) {
				{
				{
				this.state = 267;
				this.nl();
				}
				}
				this.state = 272;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 280;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 273;
					this.bitElem();
					this.state = 277;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 9, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 274;
							this.nl();
							}
							}
						}
						this.state = 279;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 9, this._ctx);
					}
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 282;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 10, this._ctx);
			} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
			this.state = 287;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 11, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 284;
					this.match(clozeParser.NL);
					}
					}
				}
				this.state = 289;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 11, this._ctx);
			}
			this.state = 303;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 14, this._ctx) ) {
			case 1:
				{
				this.state = 290;
				this.resource();
				this.state = 300;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 13, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 294;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						while (_la === clozeParser.NL) {
							{
							{
							this.state = 291;
							this.match(clozeParser.NL);
							}
							}
							this.state = 296;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
						}
						this.state = 297;
						this.resource();
						}
						}
					}
					this.state = 302;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 13, this._ctx);
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
	public cloze_instruction_grouped(): Cloze_instruction_groupedContext {
		let _localctx: Cloze_instruction_groupedContext = new Cloze_instruction_groupedContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, clozeParser.RULE_cloze_instruction_grouped);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 305;
			this.match(clozeParser.BitClozeinstgrp);
			this.state = 306;
			this.format();
			this.state = 307;
			this.match(clozeParser.CL);
			this.state = 309;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 15, this._ctx) ) {
			case 1:
				{
				this.state = 308;
				this.nl();
				}
				break;
			}
			this.state = 314;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 16, this._ctx) ) {
			case 1:
				{
				this.state = 311;
				this.item();
				this.state = 312;
				this.nl();
				}
				break;
			}
			this.state = 317;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 17, this._ctx) ) {
			case 1:
				{
				this.state = 316;
				this.instruction();
				}
				break;
			}
			this.state = 322;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 18, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 319;
					this.nl();
					}
					}
				}
				this.state = 324;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 18, this._ctx);
			}
			this.state = 334;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 20, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					{
					this.state = 325;
					this.bitElem();
					this.state = 329;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 19, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 326;
							this.nl();
							}
							}
						}
						this.state = 331;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 19, this._ctx);
					}
					}
					}
					}
				}
				this.state = 336;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 20, this._ctx);
			}
			this.state = 340;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 21, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 337;
					this.match(clozeParser.NL);
					}
					}
				}
				this.state = 342;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 21, this._ctx);
			}
			this.state = 356;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 24, this._ctx) ) {
			case 1:
				{
				this.state = 343;
				this.resource();
				this.state = 353;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 23, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 347;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						while (_la === clozeParser.NL) {
							{
							{
							this.state = 344;
							this.match(clozeParser.NL);
							}
							}
							this.state = 349;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
						}
						this.state = 350;
						this.resource();
						}
						}
					}
					this.state = 355;
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
	public cloze_solution_grouped(): Cloze_solution_groupedContext {
		let _localctx: Cloze_solution_groupedContext = new Cloze_solution_groupedContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, clozeParser.RULE_cloze_solution_grouped);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 358;
			this.match(clozeParser.BitClozesolgrp);
			this.state = 359;
			this.format();
			this.state = 360;
			this.match(clozeParser.CL);
			this.state = 362;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 25, this._ctx) ) {
			case 1:
				{
				this.state = 361;
				this.nl();
				}
				break;
			}
			this.state = 367;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 26, this._ctx) ) {
			case 1:
				{
				this.state = 364;
				this.item();
				this.state = 365;
				this.nl();
				}
				break;
			}
			this.state = 370;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 27, this._ctx) ) {
			case 1:
				{
				this.state = 369;
				this.instruction();
				}
				break;
			}
			this.state = 375;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 28, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 372;
					this.nl();
					}
					}
				}
				this.state = 377;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 28, this._ctx);
			}
			this.state = 387;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 30, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					{
					this.state = 378;
					this.bitElem();
					this.state = 382;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 29, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 379;
							this.nl();
							}
							}
						}
						this.state = 384;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 29, this._ctx);
					}
					}
					}
					}
				}
				this.state = 389;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 30, this._ctx);
			}
			this.state = 393;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 31, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 390;
					this.match(clozeParser.NL);
					}
					}
				}
				this.state = 395;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 31, this._ctx);
			}
			this.state = 409;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 34, this._ctx) ) {
			case 1:
				{
				this.state = 396;
				this.resource();
				this.state = 406;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 33, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 400;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						while (_la === clozeParser.NL) {
							{
							{
							this.state = 397;
							this.match(clozeParser.NL);
							}
							}
							this.state = 402;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
						}
						this.state = 403;
						this.resource();
						}
						}
					}
					this.state = 408;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 33, this._ctx);
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
	public gap(): GapContext {
		let _localctx: GapContext = new GapContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, clozeParser.RULE_gap);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 411;
			this.single_gap();
			this.state = 419;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 36, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					this.state = 417;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case clozeParser.OPU:
						{
						this.state = 412;
						this.single_gap();
						}
						break;
					case clozeParser.OPB:
						{
						this.state = 413;
						this.instruction();
						}
						break;
					case clozeParser.OPQ:
						{
						this.state = 414;
						this.hint();
						}
						break;
					case clozeParser.OPC:
						{
						this.state = 415;
						this.item();
						}
						break;
					case clozeParser.AtExampleWithStr:
					case clozeParser.AtExamplecol:
					case clozeParser.AtExamplecl:
						{
						this.state = 416;
						this.example();
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					}
				}
				this.state = 421;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 36, this._ctx);
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
		this.enterRule(_localctx, 18, clozeParser.RULE_single_gap);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 422;
			this.match(clozeParser.OPU);
			this.state = 426;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 37, this._ctx) ) {
			case 1:
				{
				this.state = 423;
				this.numeric();
				}
				break;

			case 2:
				{
				this.state = 424;
				this.string();
				}
				break;

			case 3:
				// tslint:disable-next-line:no-empty
				{
				}
				break;
			}
			this.state = 431;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 38, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 428;
					this.s_and_w();
					}
					}
				}
				this.state = 433;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 38, this._ctx);
			}
			this.state = 434;
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
	public cloze_and_multiple_choice_text(): Cloze_and_multiple_choice_textContext {
		let _localctx: Cloze_and_multiple_choice_textContext = new Cloze_and_multiple_choice_textContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, clozeParser.RULE_cloze_and_multiple_choice_text);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 436;
			this.match(clozeParser.BitClozeandmulti);
			this.state = 437;
			this.format();
			this.state = 438;
			this.match(clozeParser.CL);
			this.state = 442;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === clozeParser.NL) {
				{
				{
				this.state = 439;
				this.nl();
				}
				}
				this.state = 444;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 459;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					this.state = 459;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 42, this._ctx) ) {
					case 1:
						{
						this.state = 445;
						this.bitElem();
						this.state = 449;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 40, this._ctx);
						while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
							if (_alt === 1) {
								{
								{
								this.state = 446;
								this.nl();
								}
								}
							}
							this.state = 451;
							this._errHandler.sync(this);
							_alt = this.interpreter.adaptivePredict(this._input, 40, this._ctx);
						}
						}
						break;

					case 2:
						{
						this.state = 452;
						this.headed_inline_choices();
						this.state = 456;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 41, this._ctx);
						while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
							if (_alt === 1) {
								{
								{
								this.state = 453;
								this.nl();
								}
								}
							}
							this.state = 458;
							this._errHandler.sync(this);
							_alt = this.interpreter.adaptivePredict(this._input, 41, this._ctx);
						}
						}
						break;
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 461;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 43, this._ctx);
			} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
			this.state = 466;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 44, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 463;
					this.match(clozeParser.NL);
					}
					}
				}
				this.state = 468;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 44, this._ctx);
			}
			this.state = 482;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 47, this._ctx) ) {
			case 1:
				{
				this.state = 469;
				this.resource();
				this.state = 479;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 46, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 473;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						while (_la === clozeParser.NL) {
							{
							{
							this.state = 470;
							this.match(clozeParser.NL);
							}
							}
							this.state = 475;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
						}
						this.state = 476;
						this.resource();
						}
						}
					}
					this.state = 481;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 46, this._ctx);
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
	public headed_inline_choices(): Headed_inline_choicesContext {
		let _localctx: Headed_inline_choicesContext = new Headed_inline_choicesContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, clozeParser.RULE_headed_inline_choices);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 485;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === clozeParser.OPS) {
				{
				this.state = 484;
				this.choice_head();
				}
			}

			this.state = 487;
			this.inline_choices();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public choice_head(): Choice_headContext {
		let _localctx: Choice_headContext = new Choice_headContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, clozeParser.RULE_choice_head);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 489;
			this.match(clozeParser.OPS);
			this.state = 490;
			this.s_and_w();
			this.state = 491;
			this.match(clozeParser.CL);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public inline_choices(): Inline_choicesContext {
		let _localctx: Inline_choicesContext = new Inline_choicesContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, clozeParser.RULE_inline_choices);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 496;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 49, this._ctx) ) {
			case 1:
				{
				this.state = 493;
				this.choice_plus();
				}
				break;

			case 2:
				{
				this.state = 494;
				this.choice_minus();
				}
				break;

			case 3:
				{
				this.state = 495;
				this.choice_star();
				}
				break;
			}
			this.state = 503;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 51, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					this.state = 501;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 50, this._ctx) ) {
					case 1:
						{
						this.state = 498;
						this.choice_plus();
						}
						break;

					case 2:
						{
						this.state = 499;
						this.choice_minus();
						}
						break;

					case 3:
						{
						this.state = 500;
						this.choice_star();
						}
						break;
					}
					}
				}
				this.state = 505;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 51, this._ctx);
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
		this.enterRule(_localctx, 28, clozeParser.RULE_choice_plus);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 507;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === clozeParser.OPC) {
				{
				this.state = 506;
				this.item();
				}
			}

			this.state = 509;
			this.match(clozeParser.OPP);
			this.state = 511;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 510;
					this.s_and_w();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 513;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 53, this._ctx);
			} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
			this.state = 515;
			this.match(clozeParser.CL);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 30, clozeParser.RULE_choice_minus);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 518;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === clozeParser.OPC) {
				{
				this.state = 517;
				this.item();
				}
			}

			this.state = 520;
			this.match(clozeParser.OPM);
			this.state = 522;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 521;
					this.s_and_w();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 524;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 55, this._ctx);
			} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
			this.state = 526;
			this.match(clozeParser.CL);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 32, clozeParser.RULE_choice_star);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 529;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === clozeParser.OPC) {
				{
				this.state = 528;
				this.item();
				}
			}

			this.state = 531;
			this.match(clozeParser.OPR);
			this.state = 533;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 532;
					this.s_and_w();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 535;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 57, this._ctx);
			} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
			this.state = 537;
			this.match(clozeParser.CL);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public pimagebit(): PimagebitContext {
		let _localctx: PimagebitContext = new PimagebitContext(this._ctx, this.state);
		this.enterRule(_localctx, 34, clozeParser.RULE_pimagebit);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 539;
			this.image_one();
			this.state = 543;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 58, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 540;
					this.image_chained();
					}
					}
				}
				this.state = 545;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 58, this._ctx);
			}
			this.state = 550;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === clozeParser.OPATALT) {
				{
				this.state = 546;
				this.match(clozeParser.OPATALT);
				this.state = 547;
				this.words();
				this.state = 548;
				this.match(clozeParser.CL);
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
		this.enterRule(_localctx, 36, clozeParser.RULE_atpoint);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 552;
			this.match(clozeParser.AtPoints);
			this.state = 553;
			this.match(clozeParser.NUMERIC);
			this.state = 554;
			this.match(clozeParser.CL);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 38, clozeParser.RULE_format);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 559;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 60, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 556;
					this.resource_format();
					}
					}
				}
				this.state = 561;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 60, this._ctx);
			}
			this.state = 567;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 82)) & ~0x1F) === 0 && ((1 << (_la - 82)) & ((1 << (clozeParser.AmpAudio - 82)) | (1 << (clozeParser.AmpImage - 82)) | (1 << (clozeParser.AmpImageZoom - 82)) | (1 << (clozeParser.AmpImageWAudio - 82)) | (1 << (clozeParser.AmpVideo - 82)) | (1 << (clozeParser.AmpArticle - 82)) | (1 << (clozeParser.AmpDocument - 82)) | (1 << (clozeParser.AmpApp - 82)) | (1 << (clozeParser.AmpWebsite - 82)) | (1 << (clozeParser.AmpStillImageFilm - 82)) | (1 << (clozeParser.AmpPdf - 82)) | (1 << (clozeParser.AmpAudioLink - 82)) | (1 << (clozeParser.AmpImageLink - 82)) | (1 << (clozeParser.AmpVideoLink - 82)) | (1 << (clozeParser.AmpArticleLink - 82)) | (1 << (clozeParser.AmpDocumentLink - 82)) | (1 << (clozeParser.AmpDocumentDownload - 82)) | (1 << (clozeParser.AmpAppLink - 82)) | (1 << (clozeParser.AmpWebsiteLink - 82)) | (1 << (clozeParser.AmpStillImageFilmLink - 82)))) !== 0) || ((((_la - 124)) & ~0x1F) === 0 && ((1 << (_la - 124)) & ((1 << (clozeParser.AmpVideoEmbed - 124)) | (1 << (clozeParser.AmpDocumentEmbed - 124)) | (1 << (clozeParser.AmpStillImageFilmEmbed - 124)) | (1 << (clozeParser.ColonText - 124)) | (1 << (clozeParser.ColonJson - 124)))) !== 0)) {
				{
				this.state = 565;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case clozeParser.ColonText:
					{
					this.state = 562;
					this.match(clozeParser.ColonText);
					}
					break;
				case clozeParser.ColonJson:
					{
					this.state = 563;
					this.match(clozeParser.ColonJson);
					}
					break;
				case clozeParser.AmpAudio:
				case clozeParser.AmpImage:
				case clozeParser.AmpImageZoom:
				case clozeParser.AmpImageWAudio:
				case clozeParser.AmpVideo:
				case clozeParser.AmpArticle:
				case clozeParser.AmpDocument:
				case clozeParser.AmpApp:
				case clozeParser.AmpWebsite:
				case clozeParser.AmpStillImageFilm:
				case clozeParser.AmpPdf:
				case clozeParser.AmpAudioLink:
				case clozeParser.AmpImageLink:
				case clozeParser.AmpVideoLink:
				case clozeParser.AmpArticleLink:
				case clozeParser.AmpDocumentLink:
				case clozeParser.AmpDocumentDownload:
				case clozeParser.AmpAppLink:
				case clozeParser.AmpWebsiteLink:
				case clozeParser.AmpStillImageFilmLink:
				case clozeParser.AmpVideoEmbed:
				case clozeParser.AmpDocumentEmbed:
				case clozeParser.AmpStillImageFilmEmbed:
					{
					this.state = 564;
					this.resource_format_extra();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				this.state = 569;
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
		this.enterRule(_localctx, 40, clozeParser.RULE_resource_format);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 570;
			_la = this._input.LA(1);
			if (!(((((_la - 87)) & ~0x1F) === 0 && ((1 << (_la - 87)) & ((1 << (clozeParser.AmpArticle - 87)) | (1 << (clozeParser.AmpDocument - 87)) | (1 << (clozeParser.AmpWebsite - 87)) | (1 << (clozeParser.AmpStillImageFilm - 87)) | (1 << (clozeParser.AmpAudioLink - 87)) | (1 << (clozeParser.AmpImageLink - 87)) | (1 << (clozeParser.AmpVideoLink - 87)) | (1 << (clozeParser.AmpArticleLink - 87)) | (1 << (clozeParser.AmpDocumentLink - 87)) | (1 << (clozeParser.AmpDocumentDownload - 87)) | (1 << (clozeParser.AmpAppLink - 87)) | (1 << (clozeParser.AmpWebsiteLink - 87)) | (1 << (clozeParser.AmpStillImageFilmLink - 87)))) !== 0) || ((((_la - 124)) & ~0x1F) === 0 && ((1 << (_la - 124)) & ((1 << (clozeParser.AmpVideoEmbed - 124)) | (1 << (clozeParser.AmpAudioEmbed - 124)) | (1 << (clozeParser.AmpDocumentEmbed - 124)) | (1 << (clozeParser.AmpStillImageFilmEmbed - 124)) | (1 << (clozeParser.BitmarkMinus - 124)) | (1 << (clozeParser.BitmarkPlus - 124)) | (1 << (clozeParser.ColonJson - 124)) | (1 << (clozeParser.Prosemirror - 124)) | (1 << (clozeParser.Placeholder - 124)))) !== 0))) {
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
		this.enterRule(_localctx, 42, clozeParser.RULE_resource_format_extra);
		try {
			this.state = 581;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case clozeParser.AmpImage:
			case clozeParser.AmpImageZoom:
			case clozeParser.AmpImageWAudio:
			case clozeParser.AmpImageLink:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 572;
				this.image_format();
				}
				break;
			case clozeParser.AmpAudio:
			case clozeParser.AmpAudioLink:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 573;
				this.audio_format();
				}
				break;
			case clozeParser.AmpVideo:
			case clozeParser.AmpVideoLink:
			case clozeParser.AmpVideoEmbed:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 574;
				this.video_format();
				}
				break;
			case clozeParser.AmpArticle:
			case clozeParser.AmpArticleLink:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 575;
				this.article_format();
				}
				break;
			case clozeParser.AmpDocument:
			case clozeParser.AmpDocumentLink:
			case clozeParser.AmpDocumentDownload:
			case clozeParser.AmpDocumentEmbed:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 576;
				this.document_format();
				}
				break;
			case clozeParser.AmpApp:
			case clozeParser.AmpAppLink:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 577;
				this.app_format();
				}
				break;
			case clozeParser.AmpWebsite:
			case clozeParser.AmpWebsiteLink:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 578;
				this.website_format();
				}
				break;
			case clozeParser.AmpStillImageFilm:
			case clozeParser.AmpStillImageFilmLink:
			case clozeParser.AmpStillImageFilmEmbed:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 579;
				this.stillimagefilm_format();
				}
				break;
			case clozeParser.AmpPdf:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 580;
				this.match(clozeParser.AmpPdf);
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
		this.enterRule(_localctx, 44, clozeParser.RULE_format2);
		try {
			this.state = 588;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case clozeParser.BitmarkMinus:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 583;
				this.match(clozeParser.BitmarkMinus);
				}
				break;
			case clozeParser.BitmarkPlus:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 584;
				this.match(clozeParser.BitmarkPlus);
				}
				break;
			case clozeParser.ColonText:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 585;
				this.match(clozeParser.ColonText);
				}
				break;
			case clozeParser.ColonJson:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 586;
				this.match(clozeParser.ColonJson);
				}
				break;
			case clozeParser.EOF:
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
		this.enterRule(_localctx, 46, clozeParser.RULE_image_format);
		let _la: number;
		try {
			this.state = 604;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case clozeParser.AmpImage:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 590;
				this.match(clozeParser.AmpImage);
				this.state = 593;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case clozeParser.Image_type:
					{
					{
					this.state = 591;
					this.match(clozeParser.Image_type);
					}
					}
					break;
				case clozeParser.DotArticleAtt:
					{
					{
					this.state = 592;
					this.match(clozeParser.DotArticleAtt);
					}
					}
					break;
				case clozeParser.CL:
				case clozeParser.AmpAudio:
				case clozeParser.AmpImage:
				case clozeParser.AmpImageZoom:
				case clozeParser.AmpImageWAudio:
				case clozeParser.AmpVideo:
				case clozeParser.AmpArticle:
				case clozeParser.AmpDocument:
				case clozeParser.AmpApp:
				case clozeParser.AmpWebsite:
				case clozeParser.AmpStillImageFilm:
				case clozeParser.AmpPdf:
				case clozeParser.AmpAudioLink:
				case clozeParser.AmpImageLink:
				case clozeParser.AmpVideoLink:
				case clozeParser.AmpArticleLink:
				case clozeParser.AmpDocumentLink:
				case clozeParser.AmpDocumentDownload:
				case clozeParser.AmpAppLink:
				case clozeParser.AmpWebsiteLink:
				case clozeParser.AmpStillImageFilmLink:
				case clozeParser.AmpVideoEmbed:
				case clozeParser.AmpDocumentEmbed:
				case clozeParser.AmpStillImageFilmEmbed:
				case clozeParser.ColonText:
				case clozeParser.ColonJson:
					break;
				default:
					break;
				}
				}
				break;
			case clozeParser.AmpImageLink:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 595;
				this.match(clozeParser.AmpImageLink);
				this.state = 597;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === clozeParser.Image_type) {
					{
					this.state = 596;
					this.match(clozeParser.Image_type);
					}
				}

				}
				break;
			case clozeParser.AmpImageZoom:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 599;
				this.match(clozeParser.AmpImageZoom);
				this.state = 601;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === clozeParser.Image_type) {
					{
					this.state = 600;
					this.match(clozeParser.Image_type);
					}
				}

				}
				break;
			case clozeParser.AmpImageWAudio:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 603;
				this.match(clozeParser.AmpImageWAudio);
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
		this.enterRule(_localctx, 48, clozeParser.RULE_video_format);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 606;
			_la = this._input.LA(1);
			if (!(_la === clozeParser.AmpVideo || _la === clozeParser.AmpVideoLink || _la === clozeParser.AmpVideoEmbed)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 609;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === clozeParser.COLON) {
				{
				this.state = 607;
				this.match(clozeParser.COLON);
				this.state = 608;
				this.match(clozeParser.Video_type);
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
		this.enterRule(_localctx, 50, clozeParser.RULE_article_format);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 611;
			_la = this._input.LA(1);
			if (!(_la === clozeParser.AmpArticle || _la === clozeParser.AmpArticleLink)) {
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
		this.enterRule(_localctx, 52, clozeParser.RULE_document_format);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 613;
			_la = this._input.LA(1);
			if (!(((((_la - 88)) & ~0x1F) === 0 && ((1 << (_la - 88)) & ((1 << (clozeParser.AmpDocument - 88)) | (1 << (clozeParser.AmpDocumentLink - 88)) | (1 << (clozeParser.AmpDocumentDownload - 88)))) !== 0) || _la === clozeParser.AmpDocumentEmbed)) {
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
		this.enterRule(_localctx, 54, clozeParser.RULE_app_format);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 615;
			_la = this._input.LA(1);
			if (!(_la === clozeParser.AmpApp || _la === clozeParser.AmpAppLink)) {
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
		this.enterRule(_localctx, 56, clozeParser.RULE_website_format);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 617;
			_la = this._input.LA(1);
			if (!(_la === clozeParser.AmpWebsite || _la === clozeParser.AmpWebsiteLink)) {
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
		this.enterRule(_localctx, 58, clozeParser.RULE_stillimagefilm_format);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 619;
			_la = this._input.LA(1);
			if (!(_la === clozeParser.AmpStillImageFilm || _la === clozeParser.AmpStillImageFilmLink || _la === clozeParser.AmpStillImageFilmEmbed)) {
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
		this.enterRule(_localctx, 60, clozeParser.RULE_op_article_format);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 621;
			_la = this._input.LA(1);
			if (!(_la === clozeParser.OpAmpArticle || _la === clozeParser.OpAmpArticleLink)) {
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
		this.enterRule(_localctx, 62, clozeParser.RULE_op_document_format);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 623;
			_la = this._input.LA(1);
			if (!(((((_la - 100)) & ~0x1F) === 0 && ((1 << (_la - 100)) & ((1 << (clozeParser.OpAmpDocument - 100)) | (1 << (clozeParser.OpAmpDocumentLink - 100)) | (1 << (clozeParser.OpAmpDocumentDownload - 100)) | (1 << (clozeParser.OpAmpDocumentEmbed - 100)))) !== 0))) {
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
		this.enterRule(_localctx, 64, clozeParser.RULE_op_app_format);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 625;
			_la = this._input.LA(1);
			if (!(_la === clozeParser.OpAmpApp || _la === clozeParser.OpAmpAppLink)) {
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
		this.enterRule(_localctx, 66, clozeParser.RULE_op_website_format);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 627;
			_la = this._input.LA(1);
			if (!(_la === clozeParser.OpAmpWebsite || _la === clozeParser.OpAmpWebsiteLink)) {
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
		this.enterRule(_localctx, 68, clozeParser.RULE_op_video_format);
		try {
			this.state = 644;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case clozeParser.OpAmpVideo:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 629;
				this.match(clozeParser.OpAmpVideo);
				this.state = 632;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 70, this._ctx) ) {
				case 1:
					{
					this.state = 630;
					this.match(clozeParser.COLON);
					this.state = 631;
					this.match(clozeParser.Video_type);
					}
					break;
				}
				}
				break;
			case clozeParser.OpAmpVideoLink:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 634;
				this.match(clozeParser.OpAmpVideoLink);
				this.state = 637;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 71, this._ctx) ) {
				case 1:
					{
					this.state = 635;
					this.match(clozeParser.COLON);
					this.state = 636;
					this.match(clozeParser.Video_type);
					}
					break;
				}
				}
				break;
			case clozeParser.OpAmpVideoEmbed:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 639;
				this.match(clozeParser.OpAmpVideoEmbed);
				this.state = 642;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 72, this._ctx) ) {
				case 1:
					{
					this.state = 640;
					this.match(clozeParser.COLON);
					this.state = 641;
					this.match(clozeParser.Video_type);
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
		this.enterRule(_localctx, 70, clozeParser.RULE_op_stillimagefilm_format);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 646;
			_la = this._input.LA(1);
			if (!(((((_la - 103)) & ~0x1F) === 0 && ((1 << (_la - 103)) & ((1 << (clozeParser.OpAmpStillImageFilm - 103)) | (1 << (clozeParser.OpAmpStillImageFilmLink - 103)) | (1 << (clozeParser.OpAmpStillImageFilmEmbed - 103)))) !== 0))) {
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
		this.enterRule(_localctx, 72, clozeParser.RULE_articlebit);
		try {
			this.state = 654;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case clozeParser.OpAmpArticle:
			case clozeParser.OpAmpArticleLink:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 648;
				this.op_article_format();
				this.state = 649;
				this.match(clozeParser.COLON);
				this.state = 650;
				this.url();
				this.state = 651;
				this.match(clozeParser.CL);
				}
				break;
			case clozeParser.ArticleText:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 653;
				this.match(clozeParser.ArticleText);
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
		this.enterRule(_localctx, 74, clozeParser.RULE_documentbit);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 656;
			this.op_document_format();
			this.state = 657;
			this.match(clozeParser.COLON);
			this.state = 658;
			this.url();
			this.state = 659;
			this.match(clozeParser.CL);
			this.state = 664;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === clozeParser.OPATALT) {
				{
				this.state = 660;
				this.match(clozeParser.OPATALT);
				this.state = 661;
				this.words();
				this.state = 662;
				this.match(clozeParser.CL);
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
		this.enterRule(_localctx, 76, clozeParser.RULE_websitebit);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 666;
			this.op_website_format();
			this.state = 667;
			this.match(clozeParser.COLON);
			this.state = 668;
			this.url();
			this.state = 669;
			this.match(clozeParser.CL);
			this.state = 674;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === clozeParser.OPATALT) {
				{
				this.state = 670;
				this.match(clozeParser.OPATALT);
				this.state = 671;
				this.words();
				this.state = 672;
				this.match(clozeParser.CL);
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
		this.enterRule(_localctx, 78, clozeParser.RULE_appbit);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 676;
			this.op_app_format();
			this.state = 677;
			this.match(clozeParser.COLON);
			this.state = 680;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case clozeParser.URL:
				{
				this.state = 678;
				this.url();
				}
				break;
			case clozeParser.TEL:
				{
				this.state = 679;
				this.telephone();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 682;
			this.match(clozeParser.CL);
			this.state = 687;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === clozeParser.OPATALT) {
				{
				this.state = 683;
				this.match(clozeParser.OPATALT);
				this.state = 684;
				this.words();
				this.state = 685;
				this.match(clozeParser.CL);
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
		this.enterRule(_localctx, 80, clozeParser.RULE_stillimagefilmbit);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 689;
			this.stillimg_one();
			this.state = 693;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 79, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 690;
					this.resource_chained();
					}
					}
				}
				this.state = 695;
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
	public stillimg_one(): Stillimg_oneContext {
		let _localctx: Stillimg_oneContext = new Stillimg_oneContext(this._ctx, this.state);
		this.enterRule(_localctx, 82, clozeParser.RULE_stillimg_one);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 696;
			this.op_stillimagefilm_format();
			this.state = 697;
			this.match(clozeParser.COLON);
			this.state = 701;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === clozeParser.S) {
				{
				{
				this.state = 698;
				this.match(clozeParser.S);
				}
				}
				this.state = 703;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 704;
			this.url();
			this.state = 705;
			this.match(clozeParser.CL);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 84, clozeParser.RULE_videobit);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 707;
			this.video_one();
			this.state = 711;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 81, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 708;
					this.resource_chained();
					}
					}
				}
				this.state = 713;
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
	public video_one(): Video_oneContext {
		let _localctx: Video_oneContext = new Video_oneContext(this._ctx, this.state);
		this.enterRule(_localctx, 86, clozeParser.RULE_video_one);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 714;
			this.op_video_format();
			this.state = 715;
			this.match(clozeParser.COLON);
			this.state = 716;
			this.url();
			this.state = 717;
			this.match(clozeParser.CL);
			this.state = 722;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 82, this._ctx) ) {
			case 1:
				{
				this.state = 718;
				this.match(clozeParser.OPATALT);
				this.state = 719;
				this.words();
				this.state = 720;
				this.match(clozeParser.CL);
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
		this.enterRule(_localctx, 88, clozeParser.RULE_imagebit);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 724;
			this.image_one();
			this.state = 728;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 83, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 725;
					this.image_chained();
					}
					}
				}
				this.state = 730;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 83, this._ctx);
			}
			this.state = 733;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 84, this._ctx) ) {
			case 1:
				{
				this.state = 731;
				this.match(clozeParser.NL);
				this.state = 732;
				this.match(clozeParser.ShowInIndex);
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
		this.enterRule(_localctx, 90, clozeParser.RULE_image_one);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 735;
			this.op_image_format();
			this.state = 736;
			this.match(clozeParser.COLON);
			this.state = 740;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === clozeParser.S) {
				{
				{
				this.state = 737;
				this.match(clozeParser.S);
				}
				}
				this.state = 742;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 743;
			this.url();
			this.state = 744;
			this.match(clozeParser.CL);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 92, clozeParser.RULE_op_image_format);
		let _la: number;
		try {
			this.state = 760;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case clozeParser.OpAmpImage:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 746;
				this.match(clozeParser.OpAmpImage);
				this.state = 749;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case clozeParser.Image_type:
					{
					{
					this.state = 747;
					this.match(clozeParser.Image_type);
					}
					}
					break;
				case clozeParser.DotArticleAtt:
					{
					{
					this.state = 748;
					this.match(clozeParser.DotArticleAtt);
					}
					}
					break;
				case clozeParser.COLON:
					break;
				default:
					break;
				}
				}
				break;
			case clozeParser.OpAmpImageLink:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 751;
				this.match(clozeParser.OpAmpImageLink);
				this.state = 753;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === clozeParser.Image_type) {
					{
					this.state = 752;
					this.match(clozeParser.Image_type);
					}
				}

				}
				break;
			case clozeParser.OpAmpImageZoom:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 755;
				this.match(clozeParser.OpAmpImageZoom);
				this.state = 757;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === clozeParser.Image_type) {
					{
					this.state = 756;
					this.match(clozeParser.Image_type);
					}
				}

				}
				break;
			case clozeParser.OpAmpImageWAudio:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 759;
				this.match(clozeParser.OpAmpImageWAudio);
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
		this.enterRule(_localctx, 94, clozeParser.RULE_image_chained);
		let _la: number;
		try {
			let _alt: number;
			this.state = 779;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case clozeParser.AtSrc:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 762;
				this.match(clozeParser.AtSrc);
				this.state = 763;
				this.match(clozeParser.COLON);
				this.state = 764;
				this.url();
				this.state = 765;
				this.match(clozeParser.CL);
				}
				break;
			case clozeParser.AtWidth:
			case clozeParser.AtHeight:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 767;
				_la = this._input.LA(1);
				if (!(_la === clozeParser.AtWidth || _la === clozeParser.AtHeight)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 768;
				this.match(clozeParser.COLON);
				this.state = 769;
				this.match(clozeParser.NUMERIC);
				this.state = 770;
				this.match(clozeParser.CL);
				}
				break;
			case clozeParser.OPATALT:
			case clozeParser.OpAtCaption:
			case clozeParser.OpAtLicense:
			case clozeParser.OpAtCopyright:
			case clozeParser.OpAtSearch:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 771;
				_la = this._input.LA(1);
				if (!(((((_la - 70)) & ~0x1F) === 0 && ((1 << (_la - 70)) & ((1 << (clozeParser.OPATALT - 70)) | (1 << (clozeParser.OpAtCaption - 70)) | (1 << (clozeParser.OpAtLicense - 70)) | (1 << (clozeParser.OpAtCopyright - 70)) | (1 << (clozeParser.OpAtSearch - 70)))) !== 0))) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 775;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 90, this._ctx);
				while (_alt !== 1 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1 + 1) {
						{
						{
						this.state = 772;
						this.matchWildcard();
						}
						}
					}
					this.state = 777;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 90, this._ctx);
				}
				this.state = 778;
				this.match(clozeParser.CL);
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
		this.enterRule(_localctx, 96, clozeParser.RULE_image_chained4match);
		let _la: number;
		try {
			let _alt: number;
			this.state = 798;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case clozeParser.AtSrc:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 781;
				this.match(clozeParser.AtSrc);
				this.state = 782;
				this.match(clozeParser.COLON);
				this.state = 783;
				this.url();
				this.state = 784;
				this.match(clozeParser.CL);
				}
				break;
			case clozeParser.AtWidth:
			case clozeParser.AtHeight:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 786;
				_la = this._input.LA(1);
				if (!(_la === clozeParser.AtWidth || _la === clozeParser.AtHeight)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 787;
				this.match(clozeParser.COLON);
				this.state = 788;
				this.match(clozeParser.NUMERIC);
				this.state = 789;
				this.match(clozeParser.CL);
				}
				break;
			case clozeParser.OPATALT:
			case clozeParser.OpAtCaption:
			case clozeParser.OpAtLicense:
			case clozeParser.OpAtCopyright:
			case clozeParser.OpAtSearch:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 790;
				_la = this._input.LA(1);
				if (!(((((_la - 70)) & ~0x1F) === 0 && ((1 << (_la - 70)) & ((1 << (clozeParser.OPATALT - 70)) | (1 << (clozeParser.OpAtCaption - 70)) | (1 << (clozeParser.OpAtLicense - 70)) | (1 << (clozeParser.OpAtCopyright - 70)) | (1 << (clozeParser.OpAtSearch - 70)))) !== 0))) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 794;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 92, this._ctx);
				while (_alt !== 1 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1 + 1) {
						{
						{
						this.state = 791;
						this.matchWildcard();
						}
						}
					}
					this.state = 796;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 92, this._ctx);
				}
				this.state = 797;
				this.match(clozeParser.CL);
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
		this.enterRule(_localctx, 98, clozeParser.RULE_audiobit);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 800;
			this.audio_one();
			this.state = 804;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 94, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 801;
					this.resource_chained();
					}
					}
				}
				this.state = 806;
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
	public audio_one(): Audio_oneContext {
		let _localctx: Audio_oneContext = new Audio_oneContext(this._ctx, this.state);
		this.enterRule(_localctx, 100, clozeParser.RULE_audio_one);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 807;
			this.op_audio_format();
			this.state = 808;
			this.match(clozeParser.COLON);
			this.state = 809;
			this.url();
			this.state = 810;
			this.match(clozeParser.CL);
			this.state = 815;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 95, this._ctx) ) {
			case 1:
				{
				this.state = 811;
				this.match(clozeParser.OPATALT);
				this.state = 812;
				this.words();
				this.state = 813;
				this.match(clozeParser.CL);
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
		this.enterRule(_localctx, 102, clozeParser.RULE_audio_format);
		let _la: number;
		try {
			this.state = 827;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case clozeParser.AmpAudio:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 817;
				this.match(clozeParser.AmpAudio);
				this.state = 820;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === clozeParser.COLON) {
					{
					this.state = 818;
					this.match(clozeParser.COLON);
					this.state = 819;
					this.match(clozeParser.Audio_type);
					}
				}

				}
				break;
			case clozeParser.AmpAudioLink:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 822;
				this.match(clozeParser.AmpAudioLink);
				this.state = 825;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === clozeParser.COLON) {
					{
					this.state = 823;
					this.match(clozeParser.COLON);
					this.state = 824;
					this.match(clozeParser.Audio_type);
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
		this.enterRule(_localctx, 104, clozeParser.RULE_op_audio_format);
		try {
			this.state = 844;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case clozeParser.OpAmpAudio:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 829;
				this.match(clozeParser.OpAmpAudio);
				this.state = 832;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 99, this._ctx) ) {
				case 1:
					{
					this.state = 830;
					this.match(clozeParser.COLON);
					this.state = 831;
					this.match(clozeParser.Audio_type);
					}
					break;
				}
				}
				break;
			case clozeParser.OpAmpAudioLink:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 834;
				this.match(clozeParser.OpAmpAudioLink);
				this.state = 837;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 100, this._ctx) ) {
				case 1:
					{
					this.state = 835;
					this.match(clozeParser.COLON);
					this.state = 836;
					this.match(clozeParser.Audio_type);
					}
					break;
				}
				}
				break;
			case clozeParser.OpAmpAudioEmbed:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 839;
				this.match(clozeParser.OpAmpAudioEmbed);
				this.state = 842;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 101, this._ctx) ) {
				case 1:
					{
					this.state = 840;
					this.match(clozeParser.COLON);
					this.state = 841;
					this.match(clozeParser.Audio_type);
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
		this.enterRule(_localctx, 106, clozeParser.RULE_resource_chained);
		let _la: number;
		try {
			let _alt: number;
			this.state = 877;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case clozeParser.OPA:
			case clozeParser.AtSrc:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 849;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case clozeParser.OPA:
					{
					this.state = 846;
					this.match(clozeParser.OPA);
					this.state = 847;
					this.s_and_w();
					}
					break;
				case clozeParser.AtSrc:
					{
					this.state = 848;
					this.match(clozeParser.AtSrc);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 851;
				this.match(clozeParser.COLON);
				this.state = 855;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 104, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 852;
						this.match(clozeParser.S);
						}
						}
					}
					this.state = 857;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 104, this._ctx);
				}
				this.state = 860;
				this._errHandler.sync(this);
				_alt = 1;
				do {
					switch (_alt) {
					case 1:
						{
						this.state = 860;
						this._errHandler.sync(this);
						switch (this._input.LA(1)) {
						case clozeParser.S:
						case clozeParser.OPS:
						case clozeParser.CL:
						case clozeParser.COLON:
						case clozeParser.AMP:
						case clozeParser.Greater:
						case clozeParser.Less:
						case clozeParser.DBLEQ:
						case clozeParser.RightAngle:
						case clozeParser.RightArrow:
						case clozeParser.OP_N_ETC:
						case clozeParser.NUMERIC:
						case clozeParser.STRING:
						case clozeParser.NOTBITMARK:
						case clozeParser.ELIPSIS:
						case clozeParser.SENTENCE:
						case clozeParser.BARSTRING:
						case clozeParser.URL:
							{
							this.state = 858;
							this.s_and_w();
							}
							break;
						case clozeParser.NL:
							{
							this.state = 859;
							this.match(clozeParser.NL);
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
					this.state = 862;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 106, this._ctx);
				} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
				this.state = 864;
				this.match(clozeParser.CL);
				}
				break;
			case clozeParser.AtWidth:
			case clozeParser.AtHeight:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 865;
				_la = this._input.LA(1);
				if (!(_la === clozeParser.AtWidth || _la === clozeParser.AtHeight)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 866;
				this.match(clozeParser.COLON);
				this.state = 867;
				this.match(clozeParser.NUMERIC);
				this.state = 868;
				this.match(clozeParser.CL);
				}
				break;
			case clozeParser.OPATALT:
			case clozeParser.OpAtCaption:
			case clozeParser.OpAtLicense:
			case clozeParser.OpAtCopyright:
			case clozeParser.OpAtSearch:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 869;
				_la = this._input.LA(1);
				if (!(((((_la - 70)) & ~0x1F) === 0 && ((1 << (_la - 70)) & ((1 << (clozeParser.OPATALT - 70)) | (1 << (clozeParser.OpAtCaption - 70)) | (1 << (clozeParser.OpAtLicense - 70)) | (1 << (clozeParser.OpAtCopyright - 70)) | (1 << (clozeParser.OpAtSearch - 70)))) !== 0))) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 873;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 107, this._ctx);
				while (_alt !== 1 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1 + 1) {
						{
						{
						this.state = 870;
						this.matchWildcard();
						}
						}
					}
					this.state = 875;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 107, this._ctx);
				}
				this.state = 876;
				this.match(clozeParser.CL);
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
		this.enterRule(_localctx, 108, clozeParser.RULE_telephone);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 879;
			this.match(clozeParser.TEL);
			this.state = 880;
			this.match(clozeParser.PLUS);
			this.state = 881;
			this.match(clozeParser.NUMERIC);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 110, clozeParser.RULE_url);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 883;
			this.match(clozeParser.URL);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 112, clozeParser.RULE_item);
		let _la: number;
		try {
			this.state = 915;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 115, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 885;
				this.match(clozeParser.OPC);
				this.state = 886;
				this.match(clozeParser.CL);
				this.state = 894;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 110, this._ctx) ) {
				case 1:
					{
					this.state = 890;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === clozeParser.S) {
						{
						{
						this.state = 887;
						this.match(clozeParser.S);
						}
						}
						this.state = 892;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					this.state = 893;
					this.lead();
					}
					break;
				}
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 896;
				this.match(clozeParser.OPC);
				this.state = 897;
				this.s_and_w();
				this.state = 902;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (((((_la - 25)) & ~0x1F) === 0 && ((1 << (_la - 25)) & ((1 << (clozeParser.COLON - 25)) | (1 << (clozeParser.AMP - 25)) | (1 << (clozeParser.Greater - 25)) | (1 << (clozeParser.Less - 25)) | (1 << (clozeParser.RightAngle - 25)) | (1 << (clozeParser.RightArrow - 25)) | (1 << (clozeParser.NOTBITMARK - 25)) | (1 << (clozeParser.ELIPSIS - 25)) | (1 << (clozeParser.SENTENCE - 25)) | (1 << (clozeParser.BARSTRING - 25)))) !== 0)) {
					{
					this.state = 900;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case clozeParser.COLON:
						{
						this.state = 898;
						this.match(clozeParser.COLON);
						}
						break;
					case clozeParser.AMP:
					case clozeParser.Greater:
					case clozeParser.Less:
					case clozeParser.RightAngle:
					case clozeParser.RightArrow:
					case clozeParser.NOTBITMARK:
					case clozeParser.ELIPSIS:
					case clozeParser.SENTENCE:
					case clozeParser.BARSTRING:
						{
						this.state = 899;
						this.words();
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					}
					this.state = 904;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 905;
				this.match(clozeParser.CL);
				this.state = 913;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 114, this._ctx) ) {
				case 1:
					{
					this.state = 909;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === clozeParser.S) {
						{
						{
						this.state = 906;
						this.match(clozeParser.S);
						}
						}
						this.state = 911;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					this.state = 912;
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
		this.enterRule(_localctx, 114, clozeParser.RULE_lead);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 917;
			this.match(clozeParser.OPC);
			this.state = 918;
			this.s_and_w();
			this.state = 923;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 25)) & ~0x1F) === 0 && ((1 << (_la - 25)) & ((1 << (clozeParser.COLON - 25)) | (1 << (clozeParser.AMP - 25)) | (1 << (clozeParser.Greater - 25)) | (1 << (clozeParser.Less - 25)) | (1 << (clozeParser.RightAngle - 25)) | (1 << (clozeParser.RightArrow - 25)) | (1 << (clozeParser.NOTBITMARK - 25)) | (1 << (clozeParser.ELIPSIS - 25)) | (1 << (clozeParser.SENTENCE - 25)) | (1 << (clozeParser.BARSTRING - 25)))) !== 0)) {
				{
				this.state = 921;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case clozeParser.COLON:
					{
					this.state = 919;
					this.match(clozeParser.COLON);
					}
					break;
				case clozeParser.AMP:
				case clozeParser.Greater:
				case clozeParser.Less:
				case clozeParser.RightAngle:
				case clozeParser.RightArrow:
				case clozeParser.NOTBITMARK:
				case clozeParser.ELIPSIS:
				case clozeParser.SENTENCE:
				case clozeParser.BARSTRING:
					{
					this.state = 920;
					this.words();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				this.state = 925;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 926;
			this.match(clozeParser.CL);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 116, clozeParser.RULE_angleref);
		try {
			this.state = 938;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case clozeParser.OPRANGLES:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 928;
				this.match(clozeParser.OPRANGLES);
				this.state = 930;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 118, this._ctx) ) {
				case 1:
					{
					this.state = 929;
					this.s_and_w();
					}
					break;
				}
				this.state = 932;
				this.match(clozeParser.CL);
				}
				break;
			case clozeParser.OPRANGLEL:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 933;
				this.match(clozeParser.OPRANGLEL);
				this.state = 935;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 119, this._ctx) ) {
				case 1:
					{
					this.state = 934;
					this.s_and_w();
					}
					break;
				}
				this.state = 937;
				this.match(clozeParser.CL);
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
		this.enterRule(_localctx, 118, clozeParser.RULE_example);
		let _la: number;
		try {
			this.state = 947;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case clozeParser.AtExamplecl:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 940;
				this.match(clozeParser.AtExamplecl);
				}
				break;
			case clozeParser.AtExampleWithStr:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 941;
				this.match(clozeParser.AtExampleWithStr);
				}
				break;
			case clozeParser.AtExamplecol:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 942;
				this.match(clozeParser.AtExamplecol);
				this.state = 944;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === clozeParser.SENTENCE) {
					{
					this.state = 943;
					this.match(clozeParser.SENTENCE);
					}
				}

				this.state = 946;
				this.match(clozeParser.EOF);
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
		this.enterRule(_localctx, 120, clozeParser.RULE_bracketed_text);
		let _la: number;
		try {
			let _alt: number;
			this.state = 988;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 130, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 949;
				this.match(clozeParser.BracEnclose);
				this.state = 951;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 123, this._ctx) ) {
				case 1:
					{
					this.state = 950;
					this.s_and_w();
					}
					break;
				}
				this.state = 974;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 127, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 953;
						this.s_and_w();
						this.state = 963;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 125, this._ctx);
						while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
							if (_alt === 1) {
								{
								{
								this.state = 954;
								this.match(clozeParser.NL);
								this.state = 958;
								this._errHandler.sync(this);
								_alt = this.interpreter.adaptivePredict(this._input, 124, this._ctx);
								while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
									if (_alt === 1) {
										{
										{
										this.state = 955;
										this.match(clozeParser.S);
										}
										}
									}
									this.state = 960;
									this._errHandler.sync(this);
									_alt = this.interpreter.adaptivePredict(this._input, 124, this._ctx);
								}
								}
								}
							}
							this.state = 965;
							this._errHandler.sync(this);
							_alt = this.interpreter.adaptivePredict(this._input, 125, this._ctx);
						}
						this.state = 969;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						while (_la === clozeParser.NL) {
							{
							{
							this.state = 966;
							this.match(clozeParser.NL);
							}
							}
							this.state = 971;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
						}
						}
						}
					}
					this.state = 976;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 127, this._ctx);
				}
				this.state = 977;
				this.match(clozeParser.CL);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 978;
				this.match(clozeParser.BracEnclose);
				this.state = 984;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << clozeParser.S) | (1 << clozeParser.OPS) | (1 << clozeParser.CL) | (1 << clozeParser.COLON) | (1 << clozeParser.AMP) | (1 << clozeParser.Greater) | (1 << clozeParser.Less))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (clozeParser.DBLEQ - 32)) | (1 << (clozeParser.RightAngle - 32)) | (1 << (clozeParser.RightArrow - 32)) | (1 << (clozeParser.OP_N_ETC - 32)) | (1 << (clozeParser.NUMERIC - 32)) | (1 << (clozeParser.STRING - 32)) | (1 << (clozeParser.NL - 32)) | (1 << (clozeParser.NOTBITMARK - 32)) | (1 << (clozeParser.ELIPSIS - 32)) | (1 << (clozeParser.SENTENCE - 32)) | (1 << (clozeParser.BARSTRING - 32)))) !== 0) || _la === clozeParser.URL) {
					{
					this.state = 982;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 128, this._ctx) ) {
					case 1:
						{
						this.state = 979;
						this.s_and_w();
						}
						break;

					case 2:
						{
						this.state = 980;
						this.match(clozeParser.NL);
						}
						break;

					case 3:
						{
						this.state = 981;
						this.match(clozeParser.S);
						}
						break;
					}
					}
					this.state = 986;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 987;
				this.match(clozeParser.EOF);
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
		this.enterRule(_localctx, 122, clozeParser.RULE_reference);
		let _la: number;
		try {
			let _alt: number;
			this.state = 1012;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 135, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 990;
				this.match(clozeParser.AtReference);
				this.state = 995;
				this._errHandler.sync(this);
				_alt = 1;
				do {
					switch (_alt) {
					case 1:
						{
						this.state = 995;
						this._errHandler.sync(this);
						switch ( this.interpreter.adaptivePredict(this._input, 131, this._ctx) ) {
						case 1:
							{
							this.state = 991;
							this.s_and_w();
							}
							break;

						case 2:
							{
							this.state = 992;
							this.match(clozeParser.COLON);
							}
							break;

						case 3:
							{
							this.state = 993;
							this.match(clozeParser.URL);
							}
							break;

						case 4:
							{
							this.state = 994;
							this.match(clozeParser.NL);
							}
							break;
						}
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					this.state = 997;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 132, this._ctx);
				} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
				this.state = 999;
				this.match(clozeParser.CL);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1000;
				this.match(clozeParser.AtReference);
				this.state = 1008;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << clozeParser.S) | (1 << clozeParser.OPS) | (1 << clozeParser.CL) | (1 << clozeParser.COLON) | (1 << clozeParser.AMP) | (1 << clozeParser.Greater) | (1 << clozeParser.Less))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (clozeParser.DBLEQ - 32)) | (1 << (clozeParser.RightAngle - 32)) | (1 << (clozeParser.RightArrow - 32)) | (1 << (clozeParser.OP_N_ETC - 32)) | (1 << (clozeParser.NUMERIC - 32)) | (1 << (clozeParser.STRING - 32)) | (1 << (clozeParser.NL - 32)) | (1 << (clozeParser.NOTBITMARK - 32)) | (1 << (clozeParser.ELIPSIS - 32)) | (1 << (clozeParser.SENTENCE - 32)) | (1 << (clozeParser.BARSTRING - 32)))) !== 0) || _la === clozeParser.URL) {
					{
					this.state = 1006;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 133, this._ctx) ) {
					case 1:
						{
						this.state = 1001;
						this.s_and_w();
						}
						break;

					case 2:
						{
						this.state = 1002;
						this.match(clozeParser.COLON);
						}
						break;

					case 3:
						{
						this.state = 1003;
						this.match(clozeParser.URL);
						}
						break;

					case 4:
						{
						this.state = 1004;
						this.match(clozeParser.NL);
						}
						break;

					case 5:
						{
						this.state = 1005;
						this.match(clozeParser.S);
						}
						break;
					}
					}
					this.state = 1010;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1011;
				this.match(clozeParser.EOF);
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
		this.enterRule(_localctx, 124, clozeParser.RULE_progress);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1014;
			this.match(clozeParser.AtProgress);
			this.state = 1015;
			this.s_and_w();
			this.state = 1016;
			this.match(clozeParser.CL);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 126, clozeParser.RULE_dateprop);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1018;
			this.match(clozeParser.AtDate);
			this.state = 1022;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					this.state = 1022;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 136, this._ctx) ) {
					case 1:
						{
						this.state = 1019;
						this.s_and_w();
						}
						break;

					case 2:
						{
						this.state = 1020;
						this.match(clozeParser.COLON);
						}
						break;

					case 3:
						{
						this.state = 1021;
						this.match(clozeParser.NL);
						}
						break;
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 1024;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 137, this._ctx);
			} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
			this.state = 1026;
			this.match(clozeParser.CL);
			this.state = 1028;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === clozeParser.AtDate) {
				{
				this.state = 1027;
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
		this.enterRule(_localctx, 128, clozeParser.RULE_dateprop_chained);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1030;
			this.match(clozeParser.AtDate);
			this.state = 1034;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					this.state = 1034;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 139, this._ctx) ) {
					case 1:
						{
						this.state = 1031;
						this.s_and_w();
						}
						break;

					case 2:
						{
						this.state = 1032;
						this.match(clozeParser.COLON);
						}
						break;

					case 3:
						{
						this.state = 1033;
						this.match(clozeParser.NL);
						}
						break;
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 1036;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 140, this._ctx);
			} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
			this.state = 1038;
			this.match(clozeParser.CL);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 130, clozeParser.RULE_instruction);
		let _la: number;
		try {
			let _alt: number;
			this.state = 1086;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 149, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1040;
				this.match(clozeParser.OPB);
				this.state = 1044;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === clozeParser.NL) {
					{
					{
					this.state = 1041;
					this.match(clozeParser.NL);
					}
					}
					this.state = 1046;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1048;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 142, this._ctx) ) {
				case 1:
					{
					this.state = 1047;
					this.s_and_w();
					}
					break;
				}
				this.state = 1071;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 146, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 1050;
						this.s_and_w();
						this.state = 1060;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 144, this._ctx);
						while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
							if (_alt === 1) {
								{
								{
								this.state = 1051;
								this.match(clozeParser.NL);
								this.state = 1055;
								this._errHandler.sync(this);
								_alt = this.interpreter.adaptivePredict(this._input, 143, this._ctx);
								while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
									if (_alt === 1) {
										{
										{
										this.state = 1052;
										this.match(clozeParser.S);
										}
										}
									}
									this.state = 1057;
									this._errHandler.sync(this);
									_alt = this.interpreter.adaptivePredict(this._input, 143, this._ctx);
								}
								}
								}
							}
							this.state = 1062;
							this._errHandler.sync(this);
							_alt = this.interpreter.adaptivePredict(this._input, 144, this._ctx);
						}
						this.state = 1066;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						while (_la === clozeParser.NL) {
							{
							{
							this.state = 1063;
							this.match(clozeParser.NL);
							}
							}
							this.state = 1068;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
						}
						}
						}
					}
					this.state = 1073;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 146, this._ctx);
				}
				this.state = 1074;
				this.match(clozeParser.CL);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1075;
				this.match(clozeParser.OPB);
				this.state = 1079;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === clozeParser.NL) {
					{
					{
					this.state = 1076;
					this.match(clozeParser.NL);
					}
					}
					this.state = 1081;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1083;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << clozeParser.S) | (1 << clozeParser.OPS) | (1 << clozeParser.CL) | (1 << clozeParser.COLON) | (1 << clozeParser.AMP) | (1 << clozeParser.Greater) | (1 << clozeParser.Less))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (clozeParser.DBLEQ - 32)) | (1 << (clozeParser.RightAngle - 32)) | (1 << (clozeParser.RightArrow - 32)) | (1 << (clozeParser.OP_N_ETC - 32)) | (1 << (clozeParser.NUMERIC - 32)) | (1 << (clozeParser.STRING - 32)) | (1 << (clozeParser.NOTBITMARK - 32)) | (1 << (clozeParser.ELIPSIS - 32)) | (1 << (clozeParser.SENTENCE - 32)) | (1 << (clozeParser.BARSTRING - 32)))) !== 0) || _la === clozeParser.URL) {
					{
					this.state = 1082;
					this.s_and_w();
					}
				}

				this.state = 1085;
				this.match(clozeParser.EOF);
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
		this.enterRule(_localctx, 132, clozeParser.RULE_hint);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1088;
			this.match(clozeParser.OPQ);
			this.state = 1090;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 1089;
				_la = this._input.LA(1);
				if (_la <= 0 || (_la === clozeParser.CL)) {
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
				this.state = 1092;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << clozeParser.S) | (1 << clozeParser.OPDOT) | (1 << clozeParser.BitCloze) | (1 << clozeParser.BitClozeinstgrp) | (1 << clozeParser.BitClozesolgrp) | (1 << clozeParser.BitClozeandmulti) | (1 << clozeParser.OPSP) | (1 << clozeParser.OPDOLL) | (1 << clozeParser.OPBUL) | (1 << clozeParser.OPESC) | (1 << clozeParser.OPRANGLES) | (1 << clozeParser.OPRANGLEL) | (1 << clozeParser.OPDANGLE) | (1 << clozeParser.OPU) | (1 << clozeParser.OPB) | (1 << clozeParser.OPQ) | (1 << clozeParser.OPA) | (1 << clozeParser.OPP) | (1 << clozeParser.OPM) | (1 << clozeParser.OPS) | (1 << clozeParser.OPR) | (1 << clozeParser.OPC) | (1 << clozeParser.OPHASH) | (1 << clozeParser.COLON) | (1 << clozeParser.AMP) | (1 << clozeParser.DBLCOLON) | (1 << clozeParser.PLUS) | (1 << clozeParser.DotAt) | (1 << clozeParser.Greater) | (1 << clozeParser.Less))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (clozeParser.DBLEQ - 32)) | (1 << (clozeParser.RightAngle - 32)) | (1 << (clozeParser.RightArrow - 32)) | (1 << (clozeParser.OP_N_ETC - 32)) | (1 << (clozeParser.UNSCO - 32)) | (1 << (clozeParser.COMMENT - 32)) | (1 << (clozeParser.DCANY - 32)) | (1 << (clozeParser.Image_type - 32)) | (1 << (clozeParser.Audio_type - 32)) | (1 << (clozeParser.Video_type - 32)) | (1 << (clozeParser.ArticleText - 32)) | (1 << (clozeParser.NOTCL - 32)) | (1 << (clozeParser.NUMERIC - 32)) | (1 << (clozeParser.STRING - 32)) | (1 << (clozeParser.NL - 32)) | (1 << (clozeParser.NOTBITMARK - 32)) | (1 << (clozeParser.ELIPSIS - 32)) | (1 << (clozeParser.SENTENCE - 32)) | (1 << (clozeParser.BARSTRING - 32)) | (1 << (clozeParser.OPAT - 32)) | (1 << (clozeParser.AtProgress - 32)) | (1 << (clozeParser.AtReference - 32)) | (1 << (clozeParser.AtWidth - 32)) | (1 << (clozeParser.AtHeight - 32)) | (1 << (clozeParser.AtProgressPoints - 32)) | (1 << (clozeParser.AtShortanswer - 32)) | (1 << (clozeParser.AtLonganswer - 32)) | (1 << (clozeParser.AtExampleWithStr - 32)) | (1 << (clozeParser.AtExamplecol - 32)) | (1 << (clozeParser.AtExamplecl - 32)) | (1 << (clozeParser.AtSampleSolution - 32)) | (1 << (clozeParser.AtPartialAnswerS - 32)))) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (clozeParser.AtPartialAnswer - 64)) | (1 << (clozeParser.AtLabeltrue - 64)) | (1 << (clozeParser.AtLabelfalse - 64)) | (1 << (clozeParser.AtPoints - 64)) | (1 << (clozeParser.AtSrc - 64)) | (1 << (clozeParser.AtPartner - 64)) | (1 << (clozeParser.OPATALT - 64)) | (1 << (clozeParser.OPAMARK - 64)) | (1 << (clozeParser.ShowInIndex - 64)) | (1 << (clozeParser.OpAtCaption - 64)) | (1 << (clozeParser.OpAtLicense - 64)) | (1 << (clozeParser.OpAtCopyright - 64)) | (1 << (clozeParser.OpAtSearch - 64)) | (1 << (clozeParser.OpAtIsTracked - 64)) | (1 << (clozeParser.OpAtIsInfoOnly - 64)) | (1 << (clozeParser.AtDate - 64)) | (1 << (clozeParser.Http - 64)) | (1 << (clozeParser.Https - 64)) | (1 << (clozeParser.AmpAudio - 64)) | (1 << (clozeParser.AmpImage - 64)) | (1 << (clozeParser.AmpImageZoom - 64)) | (1 << (clozeParser.AmpImageWAudio - 64)) | (1 << (clozeParser.AmpVideo - 64)) | (1 << (clozeParser.AmpArticle - 64)) | (1 << (clozeParser.AmpDocument - 64)) | (1 << (clozeParser.AmpApp - 64)) | (1 << (clozeParser.AmpWebsite - 64)) | (1 << (clozeParser.AmpStillImageFilm - 64)) | (1 << (clozeParser.AmpPdf - 64)) | (1 << (clozeParser.OpAmpAudio - 64)) | (1 << (clozeParser.OpAmpImage - 64)) | (1 << (clozeParser.OpAmpImageZoom - 64)))) !== 0) || ((((_la - 96)) & ~0x1F) === 0 && ((1 << (_la - 96)) & ((1 << (clozeParser.OpAmpImageWAudio - 96)) | (1 << (clozeParser.OpAmpVideo - 96)) | (1 << (clozeParser.OpAmpArticle - 96)) | (1 << (clozeParser.OpAmpArticleAtt - 96)) | (1 << (clozeParser.OpAmpDocument - 96)) | (1 << (clozeParser.OpAmpApp - 96)) | (1 << (clozeParser.OpAmpWebsite - 96)) | (1 << (clozeParser.OpAmpStillImageFilm - 96)) | (1 << (clozeParser.BracEnclose - 96)) | (1 << (clozeParser.AmpAudioLink - 96)) | (1 << (clozeParser.AmpImageLink - 96)) | (1 << (clozeParser.AmpVideoLink - 96)) | (1 << (clozeParser.AmpArticleLink - 96)) | (1 << (clozeParser.AmpDocumentLink - 96)) | (1 << (clozeParser.AmpDocumentDownload - 96)) | (1 << (clozeParser.AmpAppLink - 96)) | (1 << (clozeParser.AmpWebsiteLink - 96)) | (1 << (clozeParser.AmpStillImageFilmLink - 96)) | (1 << (clozeParser.OpAmpAudioLink - 96)) | (1 << (clozeParser.OpAmpImageLink - 96)) | (1 << (clozeParser.OpAmpVideoLink - 96)) | (1 << (clozeParser.OpAmpArticleLink - 96)) | (1 << (clozeParser.OpAmpDocumentLink - 96)) | (1 << (clozeParser.OpAmpDocumentDownload - 96)) | (1 << (clozeParser.OpAmpAppLink - 96)) | (1 << (clozeParser.OpAmpWebsiteLink - 96)) | (1 << (clozeParser.OpAmpStillImageFilmLink - 96)) | (1 << (clozeParser.AmpImageEmbed - 96)) | (1 << (clozeParser.AmpVideoEmbed - 96)) | (1 << (clozeParser.AmpAudioEmbed - 96)) | (1 << (clozeParser.AmpDocumentEmbed - 96)) | (1 << (clozeParser.AmpStillImageFilmEmbed - 96)))) !== 0) || ((((_la - 128)) & ~0x1F) === 0 && ((1 << (_la - 128)) & ((1 << (clozeParser.OpAmpImageEmbed - 128)) | (1 << (clozeParser.OpAmpVideoEmbed - 128)) | (1 << (clozeParser.OpAmpAudioEmbed - 128)) | (1 << (clozeParser.OpAmpDocumentEmbed - 128)) | (1 << (clozeParser.OpAmpStillImageFilmEmbed - 128)) | (1 << (clozeParser.BitmarkMinus - 128)) | (1 << (clozeParser.BitmarkPlus - 128)) | (1 << (clozeParser.ColonText - 128)) | (1 << (clozeParser.ColonJson - 128)) | (1 << (clozeParser.Prosemirror - 128)) | (1 << (clozeParser.Placeholder - 128)) | (1 << (clozeParser.BASIC - 128)) | (1 << (clozeParser.JPG - 128)) | (1 << (clozeParser.PNG - 128)) | (1 << (clozeParser.GIF - 128)) | (1 << (clozeParser.SVG - 128)) | (1 << (clozeParser.MP2 - 128)) | (1 << (clozeParser.MP3 - 128)) | (1 << (clozeParser.MP4 - 128)) | (1 << (clozeParser.FLV - 128)) | (1 << (clozeParser.WMV - 128)) | (1 << (clozeParser.MPEG - 128)) | (1 << (clozeParser.MPG - 128)) | (1 << (clozeParser.TEL - 128)) | (1 << (clozeParser.DotArticleAtt - 128)) | (1 << (clozeParser.STAR - 128)) | (1 << (clozeParser.URL - 128)) | (1 << (clozeParser.LIST_LINE - 128)) | (1 << (clozeParser.ENCLBARS - 128)))) !== 0));
			this.state = 1094;
			this.match(clozeParser.CL);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 134, clozeParser.RULE_title);
		try {
			let _alt: number;
			this.state = 1108;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 153, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1096;
				this.match(clozeParser.OPHASH);
				this.state = 1099;
				this._errHandler.sync(this);
				_alt = 1;
				do {
					switch (_alt) {
					case 1:
						{
						this.state = 1099;
						this._errHandler.sync(this);
						switch (this._input.LA(1)) {
						case clozeParser.S:
						case clozeParser.OPS:
						case clozeParser.CL:
						case clozeParser.COLON:
						case clozeParser.AMP:
						case clozeParser.Greater:
						case clozeParser.Less:
						case clozeParser.DBLEQ:
						case clozeParser.RightAngle:
						case clozeParser.RightArrow:
						case clozeParser.OP_N_ETC:
						case clozeParser.NUMERIC:
						case clozeParser.STRING:
						case clozeParser.NOTBITMARK:
						case clozeParser.ELIPSIS:
						case clozeParser.SENTENCE:
						case clozeParser.BARSTRING:
						case clozeParser.URL:
							{
							this.state = 1097;
							this.s_and_w();
							}
							break;
						case clozeParser.NL:
							{
							this.state = 1098;
							this.match(clozeParser.NL);
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
					this.state = 1101;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 152, this._ctx);
				} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
				this.state = 1103;
				this.match(clozeParser.CL);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1104;
				this.match(clozeParser.OPHASH);
				this.state = 1105;
				this.s_and_w();
				this.state = 1106;
				this.match(clozeParser.EOF);
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
		this.enterRule(_localctx, 136, clozeParser.RULE_bool_label);
		try {
			this.state = 1118;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case clozeParser.AtLabeltrue:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1110;
				this.match(clozeParser.AtLabeltrue);
				this.state = 1111;
				this.s_and_w();
				this.state = 1112;
				this.match(clozeParser.CL);
				}
				break;
			case clozeParser.AtLabelfalse:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1114;
				this.match(clozeParser.AtLabelfalse);
				this.state = 1115;
				this.s_and_w();
				this.state = 1116;
				this.match(clozeParser.CL);
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
		this.enterRule(_localctx, 138, clozeParser.RULE_progress_points);
		try {
			this.state = 1129;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 155, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1120;
				this.match(clozeParser.AtProgressPoints);
				this.state = 1121;
				this.match(clozeParser.COLON);
				this.state = 1122;
				this.match(clozeParser.NUMERIC);
				this.state = 1123;
				this.match(clozeParser.CL);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1124;
				this.match(clozeParser.AtProgressPoints);
				this.state = 1125;
				this.match(clozeParser.COLON);
				this.state = 1126;
				this.s_and_w();
				this.state = 1127;
				this.match(clozeParser.CL);
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
		this.enterRule(_localctx, 140, clozeParser.RULE_istracked);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1131;
			this.match(clozeParser.OpAtIsTracked);
			this.state = 1132;
			this.s_and_w();
			this.state = 1133;
			this.match(clozeParser.CL);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 142, clozeParser.RULE_isinfoonly);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1135;
			this.match(clozeParser.OpAtIsInfoOnly);
			this.state = 1136;
			this.s_and_w();
			this.state = 1137;
			this.match(clozeParser.CL);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 144, clozeParser.RULE_atdef);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1139;
			this.atdef_();
			this.state = 1149;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 157, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1143;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === clozeParser.NL) {
						{
						{
						this.state = 1140;
						this.match(clozeParser.NL);
						}
						}
						this.state = 1145;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					this.state = 1146;
					this.atdef_();
					}
					}
				}
				this.state = 1151;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 157, this._ctx);
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
		this.enterRule(_localctx, 146, clozeParser.RULE_atdef_);
		let _la: number;
		try {
			let _alt: number;
			this.state = 1174;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case clozeParser.OPA:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1152;
				this.match(clozeParser.OPA);
				this.state = 1153;
				this.s_and_w();
				this.state = 1154;
				_la = this._input.LA(1);
				if (!(_la === clozeParser.COLON || _la === clozeParser.DBLCOLON)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 1155;
				this.s_and_w();
				this.state = 1161;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 159, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						this.state = 1159;
						this._errHandler.sync(this);
						switch ( this.interpreter.adaptivePredict(this._input, 158, this._ctx) ) {
						case 1:
							{
							this.state = 1156;
							this.match(clozeParser.NL);
							}
							break;

						case 2:
							{
							this.state = 1157;
							this.match(clozeParser.COLON);
							}
							break;

						case 3:
							{
							this.state = 1158;
							this.s_and_w();
							}
							break;
						}
						}
					}
					this.state = 1163;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 159, this._ctx);
				}
				this.state = 1164;
				this.match(clozeParser.CL);
				}
				break;
			case clozeParser.OpAtCopyright:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1166;
				this.match(clozeParser.OpAtCopyright);
				this.state = 1170;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 160, this._ctx);
				while (_alt !== 1 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1 + 1) {
						{
						{
						this.state = 1167;
						this.matchWildcard();
						}
						}
					}
					this.state = 1172;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 160, this._ctx);
				}
				this.state = 1173;
				this.match(clozeParser.CL);
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
		this.enterRule(_localctx, 148, clozeParser.RULE_dollarans);
		let _la: number;
		try {
			let _alt: number;
			this.state = 1195;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 166, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1176;
				this.match(clozeParser.OPDOLL);
				this.state = 1180;
				this._errHandler.sync(this);
				_alt = 1;
				do {
					switch (_alt) {
					case 1:
						{
						this.state = 1180;
						this._errHandler.sync(this);
						switch ( this.interpreter.adaptivePredict(this._input, 162, this._ctx) ) {
						case 1:
							{
							this.state = 1177;
							this.s_and_w();
							}
							break;

						case 2:
							{
							this.state = 1178;
							this.match(clozeParser.COLON);
							}
							break;

						case 3:
							{
							this.state = 1179;
							this.match(clozeParser.NL);
							}
							break;
						}
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					this.state = 1182;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 163, this._ctx);
				} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
				this.state = 1184;
				this.match(clozeParser.CL);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1185;
				this.match(clozeParser.OPDOLL);
				this.state = 1191;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << clozeParser.S) | (1 << clozeParser.OPS) | (1 << clozeParser.CL) | (1 << clozeParser.COLON) | (1 << clozeParser.AMP) | (1 << clozeParser.Greater) | (1 << clozeParser.Less))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (clozeParser.DBLEQ - 32)) | (1 << (clozeParser.RightAngle - 32)) | (1 << (clozeParser.RightArrow - 32)) | (1 << (clozeParser.OP_N_ETC - 32)) | (1 << (clozeParser.NUMERIC - 32)) | (1 << (clozeParser.STRING - 32)) | (1 << (clozeParser.NL - 32)) | (1 << (clozeParser.NOTBITMARK - 32)) | (1 << (clozeParser.ELIPSIS - 32)) | (1 << (clozeParser.SENTENCE - 32)) | (1 << (clozeParser.BARSTRING - 32)))) !== 0) || _la === clozeParser.URL) {
					{
					this.state = 1189;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 164, this._ctx) ) {
					case 1:
						{
						this.state = 1186;
						this.s_and_w();
						}
						break;

					case 2:
						{
						this.state = 1187;
						this.match(clozeParser.COLON);
						}
						break;

					case 3:
						{
						this.state = 1188;
						this.match(clozeParser.NL);
						}
						break;
					}
					}
					this.state = 1193;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1194;
				this.match(clozeParser.EOF);
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
		this.enterRule(_localctx, 150, clozeParser.RULE_anchor);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1197;
			this.match(clozeParser.OPDANGLE);
			this.state = 1199;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 167, this._ctx) ) {
			case 1:
				{
				this.state = 1198;
				this.s_and_w();
				}
				break;
			}
			this.state = 1201;
			this.match(clozeParser.CL);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 152, clozeParser.RULE_lines);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1207;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 1203;
				this.s_and_w();
				this.state = 1205;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === clozeParser.NL) {
					{
					this.state = 1204;
					this.nl();
					}
				}

				}
				}
				this.state = 1209;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << clozeParser.S) | (1 << clozeParser.OPS) | (1 << clozeParser.CL) | (1 << clozeParser.COLON) | (1 << clozeParser.AMP) | (1 << clozeParser.Greater) | (1 << clozeParser.Less))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (clozeParser.DBLEQ - 32)) | (1 << (clozeParser.RightAngle - 32)) | (1 << (clozeParser.RightArrow - 32)) | (1 << (clozeParser.OP_N_ETC - 32)) | (1 << (clozeParser.NUMERIC - 32)) | (1 << (clozeParser.STRING - 32)) | (1 << (clozeParser.NOTBITMARK - 32)) | (1 << (clozeParser.ELIPSIS - 32)) | (1 << (clozeParser.SENTENCE - 32)) | (1 << (clozeParser.BARSTRING - 32)))) !== 0) || _la === clozeParser.URL);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 154, clozeParser.RULE_s_and_w);
		let _la: number;
		try {
			let _alt: number;
			this.state = 1258;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 177, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1211;
				this.match(clozeParser.STRING);
				this.state = 1218;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 171, this._ctx) ) {
				case 1:
					{
					this.state = 1213;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					do {
						{
						{
						this.state = 1212;
						this.match(clozeParser.S);
						}
						}
						this.state = 1215;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					} while (_la === clozeParser.S);
					this.state = 1217;
					this.numeric();
					}
					break;
				}
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1220;
				this.words();
				this.state = 1227;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 173, this._ctx) ) {
				case 1:
					{
					this.state = 1222;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					do {
						{
						{
						this.state = 1221;
						this.match(clozeParser.S);
						}
						}
						this.state = 1224;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					} while (_la === clozeParser.S);
					this.state = 1226;
					this.numeric();
					}
					break;
				}
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1229;
				this.match(clozeParser.OPS);
				this.state = 1230;
				this.s_and_w();
				this.state = 1231;
				this.match(clozeParser.CL);
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1233;
				this.match(clozeParser.NUMERIC);
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 1237;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === clozeParser.S) {
					{
					{
					this.state = 1234;
					this.match(clozeParser.S);
					}
					}
					this.state = 1239;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1240;
				this.match(clozeParser.COLON);
				this.state = 1244;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 175, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 1241;
						this.match(clozeParser.S);
						}
						}
					}
					this.state = 1246;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 175, this._ctx);
				}
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 1247;
				this.match(clozeParser.AMP);
				this.state = 1251;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 176, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 1248;
						this.match(clozeParser.S);
						}
						}
					}
					this.state = 1253;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 176, this._ctx);
				}
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 1254;
				this.match(clozeParser.CL);
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 1255;
				this.match(clozeParser.OP_N_ETC);
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 1256;
				this.match(clozeParser.DBLEQ);
				}
				break;

			case 10:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 1257;
				this.match(clozeParser.URL);
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
		this.enterRule(_localctx, 156, clozeParser.RULE_dclines);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1260;
			this.match(clozeParser.DCANY);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public opu(): OpuContext {
		let _localctx: OpuContext = new OpuContext(this._ctx, this.state);
		this.enterRule(_localctx, 158, clozeParser.RULE_opu);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1262;
			this.match(clozeParser.OPU);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public opb(): OpbContext {
		let _localctx: OpbContext = new OpbContext(this._ctx, this.state);
		this.enterRule(_localctx, 160, clozeParser.RULE_opb);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1264;
			this.match(clozeParser.OPB);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public opq(): OpqContext {
		let _localctx: OpqContext = new OpqContext(this._ctx, this.state);
		this.enterRule(_localctx, 162, clozeParser.RULE_opq);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1266;
			this.match(clozeParser.OPQ);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public opa(): OpaContext {
		let _localctx: OpaContext = new OpaContext(this._ctx, this.state);
		this.enterRule(_localctx, 164, clozeParser.RULE_opa);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1268;
			this.match(clozeParser.OPA);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public opp(): OppContext {
		let _localctx: OppContext = new OppContext(this._ctx, this.state);
		this.enterRule(_localctx, 166, clozeParser.RULE_opp);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1270;
			this.match(clozeParser.OPP);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public opm(): OpmContext {
		let _localctx: OpmContext = new OpmContext(this._ctx, this.state);
		this.enterRule(_localctx, 168, clozeParser.RULE_opm);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1272;
			this.match(clozeParser.OPM);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public ops(): OpsContext {
		let _localctx: OpsContext = new OpsContext(this._ctx, this.state);
		this.enterRule(_localctx, 170, clozeParser.RULE_ops);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1274;
			this.match(clozeParser.OPS);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public opr(): OprContext {
		let _localctx: OprContext = new OprContext(this._ctx, this.state);
		this.enterRule(_localctx, 172, clozeParser.RULE_opr);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1276;
			this.match(clozeParser.OPR);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public opc(): OpcContext {
		let _localctx: OpcContext = new OpcContext(this._ctx, this.state);
		this.enterRule(_localctx, 174, clozeParser.RULE_opc);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1278;
			this.match(clozeParser.OPC);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public cl(): ClContext {
		let _localctx: ClContext = new ClContext(this._ctx, this.state);
		this.enterRule(_localctx, 176, clozeParser.RULE_cl);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1280;
			this.match(clozeParser.CL);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 178, clozeParser.RULE_clnsp);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1282;
			this.match(clozeParser.CL);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public nl(): NlContext {
		let _localctx: NlContext = new NlContext(this._ctx, this.state);
		this.enterRule(_localctx, 180, clozeParser.RULE_nl);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1284;
			this.match(clozeParser.NL);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public listline_(): Listline_Context {
		let _localctx: Listline_Context = new Listline_Context(this._ctx, this.state);
		this.enterRule(_localctx, 182, clozeParser.RULE_listline_);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1286;
			this.match(clozeParser.LIST_LINE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public numeric(): NumericContext {
		let _localctx: NumericContext = new NumericContext(this._ctx, this.state);
		this.enterRule(_localctx, 184, clozeParser.RULE_numeric);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1288;
			this.match(clozeParser.NUMERIC);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public string(): StringContext {
		let _localctx: StringContext = new StringContext(this._ctx, this.state);
		this.enterRule(_localctx, 186, clozeParser.RULE_string);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1290;
			this.match(clozeParser.STRING);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 188, clozeParser.RULE_words);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1303;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					this.state = 1303;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case clozeParser.SENTENCE:
						{
						this.state = 1292;
						this.match(clozeParser.SENTENCE);
						}
						break;
					case clozeParser.NOTBITMARK:
						{
						this.state = 1293;
						this.match(clozeParser.NOTBITMARK);
						}
						break;
					case clozeParser.BARSTRING:
						{
						this.state = 1294;
						this.match(clozeParser.BARSTRING);
						}
						break;
					case clozeParser.ELIPSIS:
						{
						this.state = 1295;
						this.match(clozeParser.ELIPSIS);
						}
						break;
					case clozeParser.AMP:
						{
						this.state = 1296;
						this.match(clozeParser.AMP);
						}
						break;
					case clozeParser.Greater:
						{
						this.state = 1297;
						this.match(clozeParser.Greater);
						this.state = 1298;
						_la = this._input.LA(1);
						if (_la <= 0 || (_la === clozeParser.Greater)) {
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
					case clozeParser.Less:
						{
						this.state = 1299;
						this.match(clozeParser.Less);
						this.state = 1300;
						_la = this._input.LA(1);
						if (_la <= 0 || (_la === clozeParser.Less)) {
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
					case clozeParser.RightArrow:
						{
						this.state = 1301;
						this.match(clozeParser.RightArrow);
						}
						break;
					case clozeParser.RightAngle:
						{
						this.state = 1302;
						this.match(clozeParser.RightAngle);
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
				this.state = 1305;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 179, this._ctx);
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
		this.enterRule(_localctx, 190, clozeParser.RULE_sp);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1307;
			this.match(clozeParser.S);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
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
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\x9E\u0520\x04" +
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
		"X\tX\x04Y\tY\x04Z\tZ\x04[\t[\x04\\\t\\\x04]\t]\x04^\t^\x04_\t_\x04`\t" +
		"`\x04a\ta\x03\x02\x03\x02\x07\x02\xC5\n\x02\f\x02\x0E\x02\xC8\v\x02\x03" +
		"\x02\x07\x02\xCB\n\x02\f\x02\x0E\x02\xCE\v\x02\x06\x02\xD0\n\x02\r\x02" +
		"\x0E\x02\xD1\x03\x02\x03\x02\x03\x03\x03\x03\x03\x04\x03\x04\x03\x04\x03" +
		"\x04\x05\x04\xDC\n\x04\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05" +
		"\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x07\x05" +
		"\xEC\n\x05\f\x05\x0E\x05\xEF\v\x05\x03\x05\x03\x05\x07\x05\xF3\n\x05\f" +
		"\x05\x0E\x05\xF6\v\x05\x03\x05\x03\x05\x07\x05\xFA\n\x05\f\x05\x0E\x05" +
		"\xFD\v\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03" +
		"\x05\x05\x05\u0107\n\x05\x03\x06\x03\x06\x03\x07\x03\x07\x03\x07\x03\x07" +
		"\x07\x07\u010F\n\x07\f\x07\x0E\x07\u0112\v\x07\x03\x07\x03\x07\x07\x07" +
		"\u0116\n\x07\f\x07\x0E\x07\u0119\v\x07\x06\x07\u011B\n\x07\r\x07\x0E\x07" +
		"\u011C\x03\x07\x07\x07\u0120\n\x07\f\x07\x0E\x07\u0123\v\x07\x03\x07\x03" +
		"\x07\x07\x07\u0127\n\x07\f\x07\x0E\x07\u012A\v\x07\x03\x07\x07\x07\u012D" +
		"\n\x07\f\x07\x0E\x07\u0130\v\x07\x05\x07\u0132\n\x07\x03\b\x03\b\x03\b" +
		"\x03\b\x05\b\u0138\n\b\x03\b\x03\b\x03\b\x05\b\u013D\n\b\x03\b\x05\b\u0140" +
		"\n\b\x03\b\x07\b\u0143\n\b\f\b\x0E\b\u0146\v\b\x03\b\x03\b\x07\b\u014A" +
		"\n\b\f\b\x0E\b\u014D\v\b\x07\b\u014F\n\b\f\b\x0E\b\u0152\v\b\x03\b\x07" +
		"\b\u0155\n\b\f\b\x0E\b\u0158\v\b\x03\b\x03\b\x07\b\u015C\n\b\f\b\x0E\b" +
		"\u015F\v\b\x03\b\x07\b\u0162\n\b\f\b\x0E\b\u0165\v\b\x05\b\u0167\n\b\x03" +
		"\t\x03\t\x03\t\x03\t\x05\t\u016D\n\t\x03\t\x03\t\x03\t\x05\t\u0172\n\t" +
		"\x03\t\x05\t\u0175\n\t\x03\t\x07\t\u0178\n\t\f\t\x0E\t\u017B\v\t\x03\t" +
		"\x03\t\x07\t\u017F\n\t\f\t\x0E\t\u0182\v\t\x07\t\u0184\n\t\f\t\x0E\t\u0187" +
		"\v\t\x03\t\x07\t\u018A\n\t\f\t\x0E\t\u018D\v\t\x03\t\x03\t\x07\t\u0191" +
		"\n\t\f\t\x0E\t\u0194\v\t\x03\t\x07\t\u0197\n\t\f\t\x0E\t\u019A\v\t\x05" +
		"\t\u019C\n\t\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x07\n\u01A4\n\n\f\n\x0E" +
		"\n\u01A7\v\n\x03\v\x03\v\x03\v\x03\v\x05\v\u01AD\n\v\x03\v\x07\v\u01B0" +
		"\n\v\f\v\x0E\v\u01B3\v\v\x03\v\x03\v\x03\f\x03\f\x03\f\x03\f\x07\f\u01BB" +
		"\n\f\f\f\x0E\f\u01BE\v\f\x03\f\x03\f\x07\f\u01C2\n\f\f\f\x0E\f\u01C5\v" +
		"\f\x03\f\x03\f\x07\f\u01C9\n\f\f\f\x0E\f\u01CC\v\f\x06\f\u01CE\n\f\r\f" +
		"\x0E\f\u01CF\x03\f\x07\f\u01D3\n\f\f\f\x0E\f\u01D6\v\f\x03\f\x03\f\x07" +
		"\f\u01DA\n\f\f\f\x0E\f\u01DD\v\f\x03\f\x07\f\u01E0\n\f\f\f\x0E\f\u01E3" +
		"\v\f\x05\f\u01E5\n\f\x03\r\x05\r\u01E8\n\r\x03\r\x03\r\x03\x0E\x03\x0E" +
		"\x03\x0E\x03\x0E\x03\x0F\x03\x0F\x03\x0F\x05\x0F\u01F3\n\x0F\x03\x0F\x03" +
		"\x0F\x03\x0F\x07\x0F\u01F8\n\x0F\f\x0F\x0E\x0F\u01FB\v\x0F\x03\x10\x05" +
		"\x10\u01FE\n\x10\x03\x10\x03\x10\x06\x10\u0202\n\x10\r\x10\x0E\x10\u0203" +
		"\x03\x10\x03\x10\x03\x11\x05\x11\u0209\n\x11\x03\x11\x03\x11\x06\x11\u020D" +
		"\n\x11\r\x11\x0E\x11\u020E\x03\x11\x03\x11\x03\x12\x05\x12\u0214\n\x12" +
		"\x03\x12\x03\x12\x06\x12\u0218\n\x12\r\x12\x0E\x12\u0219\x03\x12\x03\x12" +
		"\x03\x13\x03\x13\x07\x13\u0220\n\x13\f\x13\x0E\x13\u0223\v\x13\x03\x13" +
		"\x03\x13\x03\x13\x03\x13\x05\x13\u0229\n\x13\x03\x14\x03\x14\x03\x14\x03" +
		"\x14\x03\x15\x07\x15\u0230\n\x15\f\x15\x0E\x15\u0233\v\x15\x03\x15\x03" +
		"\x15\x03\x15\x07\x15\u0238\n\x15\f\x15\x0E\x15\u023B\v\x15\x03\x16\x03" +
		"\x16\x03\x17\x03\x17\x03\x17\x03\x17\x03\x17\x03\x17\x03\x17\x03\x17\x03" +
		"\x17\x05\x17\u0248\n\x17\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x05\x18" +
		"\u024F\n\x18\x03\x19\x03\x19\x03\x19\x05\x19\u0254\n\x19\x03\x19\x03\x19" +
		"\x05\x19\u0258\n\x19\x03\x19\x03\x19\x05\x19\u025C\n\x19\x03\x19\x05\x19" +
		"\u025F\n\x19\x03\x1A\x03\x1A\x03\x1A\x05\x1A\u0264\n\x1A\x03\x1B\x03\x1B" +
		"\x03\x1C\x03\x1C\x03\x1D\x03\x1D\x03\x1E\x03\x1E\x03\x1F\x03\x1F\x03 " +
		"\x03 \x03!\x03!\x03\"\x03\"\x03#\x03#\x03$\x03$\x03$\x05$\u027B\n$\x03" +
		"$\x03$\x03$\x05$\u0280\n$\x03$\x03$\x03$\x05$\u0285\n$\x05$\u0287\n$\x03" +
		"%\x03%\x03&\x03&\x03&\x03&\x03&\x03&\x05&\u0291\n&\x03\'\x03\'\x03\'\x03" +
		"\'\x03\'\x03\'\x03\'\x03\'\x05\'\u029B\n\'\x03(\x03(\x03(\x03(\x03(\x03" +
		"(\x03(\x03(\x05(\u02A5\n(\x03)\x03)\x03)\x03)\x05)\u02AB\n)\x03)\x03)" +
		"\x03)\x03)\x03)\x05)\u02B2\n)\x03*\x03*\x07*\u02B6\n*\f*\x0E*\u02B9\v" +
		"*\x03+\x03+\x03+\x07+\u02BE\n+\f+\x0E+\u02C1\v+\x03+\x03+\x03+\x03,\x03" +
		",\x07,\u02C8\n,\f,\x0E,\u02CB\v,\x03-\x03-\x03-\x03-\x03-\x03-\x03-\x03" +
		"-\x05-\u02D5\n-\x03.\x03.\x07.\u02D9\n.\f.\x0E.\u02DC\v.\x03.\x03.\x05" +
		".\u02E0\n.\x03/\x03/\x03/\x07/\u02E5\n/\f/\x0E/\u02E8\v/\x03/\x03/\x03" +
		"/\x030\x030\x030\x050\u02F0\n0\x030\x030\x050\u02F4\n0\x030\x030\x050" +
		"\u02F8\n0\x030\x050\u02FB\n0\x031\x031\x031\x031\x031\x031\x031\x031\x03" +
		"1\x031\x031\x071\u0308\n1\f1\x0E1\u030B\v1\x031\x051\u030E\n1\x032\x03" +
		"2\x032\x032\x032\x032\x032\x032\x032\x032\x032\x072\u031B\n2\f2\x0E2\u031E" +
		"\v2\x032\x052\u0321\n2\x033\x033\x073\u0325\n3\f3\x0E3\u0328\v3\x034\x03" +
		"4\x034\x034\x034\x034\x034\x034\x054\u0332\n4\x035\x035\x035\x055\u0337" +
		"\n5\x035\x035\x035\x055\u033C\n5\x055\u033E\n5\x036\x036\x036\x056\u0343" +
		"\n6\x036\x036\x036\x056\u0348\n6\x036\x036\x036\x056\u034D\n6\x056\u034F" +
		"\n6\x037\x037\x037\x057\u0354\n7\x037\x037\x077\u0358\n7\f7\x0E7\u035B" +
		"\v7\x037\x037\x067\u035F\n7\r7\x0E7\u0360\x037\x037\x037\x037\x037\x03" +
		"7\x037\x077\u036A\n7\f7\x0E7\u036D\v7\x037\x057\u0370\n7\x038\x038\x03" +
		"8\x038\x039\x039\x03:\x03:\x03:\x07:\u037B\n:\f:\x0E:\u037E\v:\x03:\x05" +
		":\u0381\n:\x03:\x03:\x03:\x03:\x07:\u0387\n:\f:\x0E:\u038A\v:\x03:\x03" +
		":\x07:\u038E\n:\f:\x0E:\u0391\v:\x03:\x05:\u0394\n:\x05:\u0396\n:\x03" +
		";\x03;\x03;\x03;\x07;\u039C\n;\f;\x0E;\u039F\v;\x03;\x03;\x03<\x03<\x05" +
		"<\u03A5\n<\x03<\x03<\x03<\x05<\u03AA\n<\x03<\x05<\u03AD\n<\x03=\x03=\x03" +
		"=\x03=\x05=\u03B3\n=\x03=\x05=\u03B6\n=\x03>\x03>\x05>\u03BA\n>\x03>\x03" +
		">\x03>\x07>\u03BF\n>\f>\x0E>\u03C2\v>\x07>\u03C4\n>\f>\x0E>\u03C7\v>\x03" +
		">\x07>\u03CA\n>\f>\x0E>\u03CD\v>\x07>\u03CF\n>\f>\x0E>\u03D2\v>\x03>\x03" +
		">\x03>\x03>\x03>\x07>\u03D9\n>\f>\x0E>\u03DC\v>\x03>\x05>\u03DF\n>\x03" +
		"?\x03?\x03?\x03?\x03?\x06?\u03E6\n?\r?\x0E?\u03E7\x03?\x03?\x03?\x03?" +
		"\x03?\x03?\x03?\x07?\u03F1\n?\f?\x0E?\u03F4\v?\x03?\x05?\u03F7\n?\x03" +
		"@\x03@\x03@\x03@\x03A\x03A\x03A\x03A\x06A\u0401\nA\rA\x0EA\u0402\x03A" +
		"\x03A\x05A\u0407\nA\x03B\x03B\x03B\x03B\x06B\u040D\nB\rB\x0EB\u040E\x03" +
		"B\x03B\x03C\x03C\x07C\u0415\nC\fC\x0EC\u0418\vC\x03C\x05C\u041B\nC\x03" +
		"C\x03C\x03C\x07C\u0420\nC\fC\x0EC\u0423\vC\x07C\u0425\nC\fC\x0EC\u0428" +
		"\vC\x03C\x07C\u042B\nC\fC\x0EC\u042E\vC\x07C\u0430\nC\fC\x0EC\u0433\v" +
		"C\x03C\x03C\x03C\x07C\u0438\nC\fC\x0EC\u043B\vC\x03C\x05C\u043E\nC\x03" +
		"C\x05C\u0441\nC\x03D\x03D\x06D\u0445\nD\rD\x0ED\u0446\x03D\x03D\x03E\x03" +
		"E\x03E\x06E\u044E\nE\rE\x0EE\u044F\x03E\x03E\x03E\x03E\x03E\x05E\u0457" +
		"\nE\x03F\x03F\x03F\x03F\x03F\x03F\x03F\x03F\x05F\u0461\nF\x03G\x03G\x03" +
		"G\x03G\x03G\x03G\x03G\x03G\x03G\x05G\u046C\nG\x03H\x03H\x03H\x03H\x03" +
		"I\x03I\x03I\x03I\x03J\x03J\x07J\u0478\nJ\fJ\x0EJ\u047B\vJ\x03J\x07J\u047E" +
		"\nJ\fJ\x0EJ\u0481\vJ\x03K\x03K\x03K\x03K\x03K\x03K\x03K\x07K\u048A\nK" +
		"\fK\x0EK\u048D\vK\x03K\x03K\x03K\x03K\x07K\u0493\nK\fK\x0EK\u0496\vK\x03" +
		"K\x05K\u0499\nK\x03L\x03L\x03L\x03L\x06L\u049F\nL\rL\x0EL\u04A0\x03L\x03" +
		"L\x03L\x03L\x03L\x07L\u04A8\nL\fL\x0EL\u04AB\vL\x03L\x05L\u04AE\nL\x03" +
		"M\x03M\x05M\u04B2\nM\x03M\x03M\x03N\x03N\x05N\u04B8\nN\x06N\u04BA\nN\r" +
		"N\x0EN\u04BB\x03O\x03O\x06O\u04C0\nO\rO\x0EO\u04C1\x03O\x05O\u04C5\nO" +
		"\x03O\x03O\x06O\u04C9\nO\rO\x0EO\u04CA\x03O\x05O\u04CE\nO\x03O\x03O\x03" +
		"O\x03O\x03O\x03O\x07O\u04D6\nO\fO\x0EO\u04D9\vO\x03O\x03O\x07O\u04DD\n" +
		"O\fO\x0EO\u04E0\vO\x03O\x03O\x07O\u04E4\nO\fO\x0EO\u04E7\vO\x03O\x03O" +
		"\x03O\x03O\x05O\u04ED\nO\x03P\x03P\x03Q\x03Q\x03R\x03R\x03S\x03S\x03T" +
		"\x03T\x03U\x03U\x03V\x03V\x03W\x03W\x03X\x03X\x03Y\x03Y\x03Z\x03Z\x03" +
		"[\x03[\x03\\\x03\\\x03]\x03]\x03^\x03^\x03_\x03_\x03`\x03`\x03`\x03`\x03" +
		"`\x03`\x03`\x03`\x03`\x03`\x03`\x06`\u051A\n`\r`\x0E`\u051B\x03a\x03a" +
		"\x03a\x06\u0309\u031C\u036B\u0494\x02\x02b\x02\x02\x04\x02\x06\x02\b\x02" +
		"\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C" +
		"\x02\x1E\x02 \x02\"\x02$\x02&\x02(\x02*\x02,\x02.\x020\x022\x024\x026" +
		"\x028\x02:\x02<\x02>\x02@\x02B\x02D\x02F\x02H\x02J\x02L\x02N\x02P\x02" +
		"R\x02T\x02V\x02X\x02Z\x02\\\x02^\x02`\x02b\x02d\x02f\x02h\x02j\x02l\x02" +
		"n\x02p\x02r\x02t\x02v\x02x\x02z\x02|\x02~\x02\x80\x02\x82\x02\x84\x02" +
		"\x86\x02\x88\x02\x8A\x02\x8C\x02\x8E\x02\x90\x02\x92\x02\x94\x02\x96\x02" +
		"\x98\x02\x9A\x02\x9C\x02\x9E\x02\xA0\x02\xA2\x02\xA4\x02\xA6\x02\xA8\x02" +
		"\xAA\x02\xAC\x02\xAE\x02\xB0\x02\xB2\x02\xB4\x02\xB6\x02\xB8\x02\xBA\x02" +
		"\xBC\x02\xBE\x02\xC0\x02\x02\x14\b\x02YZ\\]ks~\x81\x87\x88\x8A\x8C\x05" +
		"\x02XXmm~~\x04\x02YYnn\x05\x02ZZop\x80\x80\x04\x02[[qq\x04\x02\\\\rr\x05" +
		"\x02]]ss\x81\x81\x04\x02ddww\x05\x02ffxy\x85\x85\x04\x02ggzz\x04\x02h" +
		"h{{\x05\x02ii||\x86\x86\x03\x0289\x04\x02HHKN\x03\x02\x1A\x1A\x04\x02" +
		"\x1B\x1B\x1D\x1D\x03\x02  \x03\x02!!\x02\u05C1\x02\xCF\x03\x02\x02\x02" +
		"\x04\xD5\x03\x02\x02\x02\x06\xDB\x03\x02\x02\x02\b\u0106\x03\x02\x02\x02" +
		"\n\u0108\x03\x02\x02\x02\f\u010A\x03\x02\x02\x02\x0E\u0133\x03\x02\x02" +
		"\x02\x10\u0168\x03\x02\x02\x02\x12\u019D\x03\x02\x02\x02\x14\u01A8\x03" +
		"\x02\x02\x02\x16\u01B6\x03\x02\x02\x02\x18\u01E7\x03\x02\x02\x02\x1A\u01EB" +
		"\x03\x02\x02\x02\x1C\u01F2\x03\x02\x02\x02\x1E\u01FD\x03\x02\x02\x02 " +
		"\u0208\x03\x02\x02\x02\"\u0213\x03\x02\x02\x02$\u021D\x03\x02\x02\x02" +
		"&\u022A\x03\x02\x02\x02(\u0231\x03\x02\x02\x02*\u023C\x03\x02\x02\x02" +
		",\u0247\x03\x02\x02\x02.\u024E\x03\x02\x02\x020\u025E\x03\x02\x02\x02" +
		"2\u0260\x03\x02\x02\x024\u0265\x03\x02\x02\x026\u0267\x03\x02\x02\x02" +
		"8\u0269\x03\x02\x02\x02:\u026B\x03\x02\x02\x02<\u026D\x03\x02\x02\x02" +
		">\u026F\x03\x02\x02\x02@\u0271\x03\x02\x02\x02B\u0273\x03\x02\x02\x02" +
		"D\u0275\x03\x02\x02\x02F\u0286\x03\x02\x02\x02H\u0288\x03\x02\x02\x02" +
		"J\u0290\x03\x02\x02\x02L\u0292\x03\x02\x02\x02N\u029C\x03\x02\x02\x02" +
		"P\u02A6\x03\x02\x02\x02R\u02B3\x03\x02\x02\x02T\u02BA\x03\x02\x02\x02" +
		"V\u02C5\x03\x02\x02\x02X\u02CC\x03\x02\x02\x02Z\u02D6\x03\x02\x02\x02" +
		"\\\u02E1\x03\x02\x02\x02^\u02FA\x03\x02\x02\x02`\u030D\x03\x02\x02\x02" +
		"b\u0320\x03\x02\x02\x02d\u0322\x03\x02\x02\x02f\u0329\x03\x02\x02\x02" +
		"h\u033D\x03\x02\x02\x02j\u034E\x03\x02\x02\x02l\u036F\x03\x02\x02\x02" +
		"n\u0371\x03\x02\x02\x02p\u0375\x03\x02\x02\x02r\u0395\x03\x02\x02\x02" +
		"t\u0397\x03\x02\x02\x02v\u03AC\x03\x02\x02\x02x\u03B5\x03\x02\x02\x02" +
		"z\u03DE\x03\x02\x02\x02|\u03F6\x03\x02\x02\x02~\u03F8\x03\x02\x02\x02" +
		"\x80\u03FC\x03\x02\x02\x02\x82\u0408\x03\x02\x02\x02\x84\u0440\x03\x02" +
		"\x02\x02\x86\u0442\x03\x02\x02\x02\x88\u0456\x03\x02\x02\x02\x8A\u0460" +
		"\x03\x02\x02\x02\x8C\u046B\x03\x02\x02\x02\x8E\u046D\x03\x02\x02\x02\x90" +
		"\u0471\x03\x02\x02\x02\x92\u0475\x03\x02\x02\x02\x94\u0498\x03\x02\x02" +
		"\x02\x96\u04AD\x03\x02\x02\x02\x98\u04AF\x03\x02\x02\x02\x9A\u04B9\x03" +
		"\x02\x02\x02\x9C\u04EC\x03\x02\x02\x02\x9E\u04EE\x03\x02\x02\x02\xA0\u04F0" +
		"\x03\x02\x02\x02\xA2\u04F2\x03\x02\x02\x02\xA4\u04F4\x03\x02\x02\x02\xA6" +
		"\u04F6\x03\x02\x02\x02\xA8\u04F8\x03\x02\x02\x02\xAA\u04FA\x03\x02\x02" +
		"\x02\xAC\u04FC\x03\x02\x02\x02\xAE\u04FE\x03\x02\x02\x02\xB0\u0500\x03" +
		"\x02\x02\x02\xB2\u0502\x03\x02\x02\x02\xB4\u0504\x03\x02\x02\x02\xB6\u0506" +
		"\x03\x02\x02\x02\xB8\u0508\x03\x02\x02\x02\xBA\u050A\x03\x02\x02\x02\xBC" +
		"\u050C\x03\x02\x02\x02\xBE\u0519\x03\x02\x02\x02\xC0\u051D\x03\x02\x02" +
		"\x02\xC2\xCC\x05\x04\x03\x02\xC3\xC5\x07\x03\x02\x02\xC4\xC3\x03\x02\x02" +
		"\x02\xC5\xC8\x03\x02\x02\x02\xC6\xC4\x03\x02\x02\x02\xC6\xC7\x03\x02\x02" +
		"\x02\xC7\xC9\x03\x02\x02\x02\xC8\xC6\x03\x02\x02\x02\xC9\xCB\x05\xB6\\" +
		"\x02\xCA\xC6\x03\x02\x02\x02\xCB\xCE\x03\x02\x02\x02\xCC\xCA\x03\x02\x02" +
		"\x02\xCC\xCD\x03\x02\x02\x02\xCD\xD0\x03\x02\x02\x02\xCE\xCC\x03\x02\x02" +
		"\x02\xCF\xC2\x03\x02\x02\x02\xD0\xD1\x03\x02\x02\x02\xD1\xCF\x03\x02\x02" +
		"\x02\xD1\xD2\x03\x02\x02\x02\xD2\xD3\x03\x02\x02\x02\xD3\xD4\x07\x02\x02" +
		"\x03\xD4\x03\x03\x02\x02\x02\xD5\xD6\x05\x06\x04\x02\xD6\x05\x03\x02\x02" +
		"\x02\xD7\xDC\x05\f\x07\x02\xD8\xDC\x05\x0E\b\x02\xD9\xDC\x05\x10\t\x02" +
		"\xDA\xDC\x05\x16\f\x02\xDB\xD7\x03\x02\x02\x02\xDB\xD8\x03\x02\x02\x02" +
		"\xDB\xD9\x03\x02\x02\x02\xDB\xDA\x03\x02\x02\x02\xDC\x07\x03\x02\x02\x02" +
		"\xDD\u0107\x07\x9D\x02\x02\xDE\u0107\x071\x02\x02\xDF\u0107\x05\x9EP\x02" +
		"\xE0\u0107\x05\x12\n\x02\xE1\u0107\x05\x92J\x02\xE2\u0107\x05|?\x02\xE3" +
		"\u0107\x05r:\x02\xE4\u0107\x05\x84C\x02\xE5\u0107\x05\x86D\x02\xE6\u0107" +
		"\x05\x9CO\x02\xE7\u0107\x05x=\x02\xE8\u0107\x05\x8AF\x02\xE9\xED\x05Z" +
		".\x02\xEA\xEC\x05\xB6\\\x02\xEB\xEA\x03\x02\x02\x02\xEC\xEF\x03\x02\x02" +
		"\x02\xED\xEB\x03\x02\x02\x02\xED\xEE\x03\x02\x02\x02\xEE\u0107\x03\x02" +
		"\x02\x02\xEF\xED\x03\x02\x02\x02\xF0\xF4\x05d3\x02\xF1\xF3\x05\xB6\\\x02" +
		"\xF2\xF1\x03\x02\x02\x02\xF3\xF6\x03\x02\x02\x02\xF4\xF2\x03\x02\x02\x02" +
		"\xF4\xF5\x03\x02\x02\x02\xF5\u0107\x03\x02\x02\x02\xF6\xF4\x03\x02\x02" +
		"\x02\xF7\xFB\x05V,\x02\xF8\xFA\x05\xB6\\\x02\xF9\xF8\x03\x02\x02\x02\xFA" +
		"\xFD\x03\x02\x02\x02\xFB\xF9\x03\x02\x02\x02\xFB\xFC\x03\x02\x02\x02\xFC" +
		"\u0107\x03\x02\x02\x02\xFD\xFB\x03\x02\x02\x02\xFE\u0107\x05J&\x02\xFF" +
		"\u0107\x05L\'\x02\u0100\u0107\x05P)\x02\u0101\u0107\x05N(\x02\u0102\u0107" +
		"\x05R*\x02\u0103\u0107\x05v<\x02\u0104\u0107\x05\x98M\x02\u0105\u0107" +
		"\x05\xC0a\x02\u0106\xDD\x03\x02\x02\x02\u0106\xDE\x03\x02\x02\x02\u0106" +
		"\xDF\x03\x02\x02\x02\u0106\xE0\x03\x02\x02\x02\u0106\xE1\x03\x02\x02\x02" +
		"\u0106\xE2\x03\x02\x02\x02\u0106\xE3\x03\x02\x02\x02\u0106\xE4\x03\x02" +
		"\x02\x02\u0106\xE5\x03\x02\x02\x02\u0106\xE6\x03\x02\x02\x02\u0106\xE7" +
		"\x03\x02\x02\x02\u0106\xE8\x03\x02\x02\x02\u0106\xE9\x03\x02\x02\x02\u0106" +
		"\xF0\x03\x02\x02\x02\u0106\xF7\x03\x02\x02\x02\u0106\xFE\x03\x02\x02\x02" +
		"\u0106\xFF\x03\x02\x02\x02\u0106\u0100\x03\x02\x02\x02\u0106\u0101\x03" +
		"\x02\x02\x02\u0106\u0102\x03\x02\x02\x02\u0106\u0103\x03\x02\x02\x02\u0106" +
		"\u0104\x03\x02\x02\x02\u0106\u0105\x03\x02\x02\x02\u0107\t\x03\x02\x02" +
		"\x02\u0108\u0109\x05\b\x05\x02\u0109\v\x03\x02\x02\x02\u010A\u010B\x07" +
		"\x05\x02\x02\u010B\u010C\x05(\x15\x02\u010C\u0110\x07\x1A\x02\x02\u010D" +
		"\u010F\x05\xB6\\\x02\u010E\u010D\x03\x02\x02\x02\u010F\u0112\x03\x02\x02" +
		"\x02\u0110\u010E\x03\x02\x02\x02\u0110\u0111\x03\x02\x02\x02\u0111\u011A" +
		"\x03\x02\x02\x02\u0112\u0110\x03\x02\x02\x02\u0113\u0117\x05\b\x05\x02" +
		"\u0114\u0116\x05\xB6\\\x02\u0115\u0114\x03\x02\x02\x02\u0116\u0119\x03" +
		"\x02\x02\x02\u0117\u0115\x03\x02\x02\x02\u0117\u0118\x03\x02\x02\x02\u0118" +
		"\u011B\x03\x02\x02\x02\u0119\u0117\x03\x02\x02\x02\u011A\u0113\x03\x02" +
		"\x02\x02\u011B\u011C\x03\x02\x02\x02\u011C\u011A\x03\x02\x02\x02\u011C" +
		"\u011D\x03\x02\x02\x02\u011D\u0121\x03\x02\x02\x02\u011E\u0120\x070\x02" +
		"\x02\u011F\u011E\x03\x02\x02\x02\u0120\u0123\x03\x02\x02\x02\u0121\u011F" +
		"\x03\x02\x02\x02\u0121\u0122\x03\x02\x02\x02\u0122\u0131\x03\x02\x02\x02" +
		"\u0123\u0121\x03\x02\x02\x02\u0124\u012E\x05\n\x06\x02\u0125\u0127\x07" +
		"0\x02\x02\u0126\u0125\x03\x02\x02\x02\u0127\u012A\x03\x02\x02\x02\u0128" +
		"\u0126\x03\x02\x02\x02\u0128\u0129\x03\x02\x02\x02\u0129\u012B\x03\x02" +
		"\x02\x02\u012A\u0128\x03\x02\x02\x02\u012B\u012D\x05\n\x06\x02\u012C\u0128" +
		"\x03\x02\x02\x02\u012D\u0130\x03\x02\x02\x02\u012E\u012C\x03\x02\x02\x02" +
		"\u012E\u012F\x03\x02\x02\x02\u012F\u0132\x03\x02\x02\x02\u0130\u012E\x03" +
		"\x02\x02\x02\u0131\u0124\x03\x02\x02\x02\u0131\u0132\x03\x02\x02\x02\u0132" +
		"\r\x03\x02\x02\x02\u0133\u0134\x07\x06\x02\x02\u0134\u0135\x05(\x15\x02" +
		"\u0135\u0137\x07\x1A\x02\x02\u0136\u0138\x05\xB6\\\x02\u0137\u0136\x03" +
		"\x02\x02\x02\u0137\u0138\x03\x02\x02\x02\u0138\u013C\x03\x02\x02\x02\u0139" +
		"\u013A\x05r:\x02\u013A\u013B\x05\xB6\\\x02\u013B\u013D\x03\x02\x02\x02" +
		"\u013C\u0139\x03\x02\x02\x02\u013C\u013D\x03\x02\x02\x02\u013D\u013F\x03" +
		"\x02\x02\x02\u013E\u0140\x05\x84C\x02\u013F\u013E\x03\x02\x02\x02\u013F" +
		"\u0140\x03\x02\x02\x02\u0140\u0144\x03\x02\x02\x02\u0141\u0143\x05\xB6" +
		"\\\x02\u0142\u0141\x03\x02\x02\x02\u0143\u0146\x03\x02\x02\x02\u0144\u0142" +
		"\x03\x02\x02\x02\u0144\u0145\x03\x02\x02\x02\u0145\u0150\x03\x02\x02\x02" +
		"\u0146\u0144\x03\x02\x02\x02\u0147\u014B\x05\b\x05\x02\u0148\u014A\x05" +
		"\xB6\\\x02\u0149\u0148\x03\x02\x02\x02\u014A\u014D\x03\x02\x02\x02\u014B" +
		"\u0149\x03\x02\x02\x02\u014B\u014C\x03\x02\x02\x02\u014C\u014F\x03\x02" +
		"\x02\x02\u014D\u014B\x03\x02\x02\x02\u014E\u0147\x03\x02\x02\x02\u014F" +
		"\u0152\x03\x02\x02\x02\u0150\u014E\x03\x02\x02\x02\u0150\u0151\x03\x02" +
		"\x02\x02\u0151\u0156\x03\x02\x02\x02\u0152\u0150\x03\x02\x02\x02\u0153" +
		"\u0155\x070\x02\x02\u0154\u0153\x03\x02\x02\x02\u0155\u0158\x03\x02\x02" +
		"\x02\u0156\u0154\x03\x02\x02\x02\u0156\u0157\x03\x02\x02\x02\u0157\u0166" +
		"\x03\x02\x02\x02\u0158\u0156\x03\x02\x02\x02\u0159\u0163\x05\n\x06\x02" +
		"\u015A\u015C\x070\x02\x02\u015B\u015A\x03\x02\x02\x02\u015C\u015F\x03" +
		"\x02\x02\x02\u015D\u015B\x03\x02\x02\x02\u015D\u015E\x03\x02\x02\x02\u015E" +
		"\u0160\x03\x02\x02\x02\u015F\u015D\x03\x02";
	private static readonly _serializedATNSegment1: string =
		"\x02\x02\u0160\u0162\x05\n\x06\x02\u0161\u015D\x03\x02\x02\x02\u0162\u0165" +
		"\x03\x02\x02\x02\u0163\u0161\x03\x02\x02\x02\u0163\u0164\x03\x02\x02\x02" +
		"\u0164\u0167\x03\x02\x02\x02\u0165\u0163\x03\x02\x02\x02\u0166\u0159\x03" +
		"\x02\x02\x02\u0166\u0167\x03\x02\x02\x02\u0167\x0F\x03\x02\x02\x02\u0168" +
		"\u0169\x07\x07\x02\x02\u0169\u016A\x05(\x15\x02\u016A\u016C\x07\x1A\x02" +
		"\x02\u016B\u016D\x05\xB6\\\x02\u016C\u016B\x03\x02\x02\x02\u016C\u016D" +
		"\x03\x02\x02\x02\u016D\u0171\x03\x02\x02\x02\u016E\u016F\x05r:\x02\u016F" +
		"\u0170\x05\xB6\\\x02\u0170\u0172\x03\x02\x02\x02\u0171\u016E\x03\x02\x02" +
		"\x02\u0171\u0172\x03\x02\x02\x02\u0172\u0174\x03\x02\x02\x02\u0173\u0175" +
		"\x05\x84C\x02\u0174\u0173\x03\x02\x02\x02\u0174\u0175\x03\x02\x02\x02" +
		"\u0175\u0179\x03\x02\x02\x02\u0176\u0178\x05\xB6\\\x02\u0177\u0176\x03" +
		"\x02\x02\x02\u0178\u017B\x03\x02\x02\x02\u0179\u0177\x03\x02\x02\x02\u0179" +
		"\u017A\x03\x02\x02\x02\u017A\u0185\x03\x02\x02\x02\u017B\u0179\x03\x02" +
		"\x02\x02\u017C\u0180\x05\b\x05\x02\u017D\u017F\x05\xB6\\\x02\u017E\u017D" +
		"\x03\x02\x02\x02\u017F\u0182\x03\x02\x02\x02\u0180\u017E\x03\x02\x02\x02" +
		"\u0180\u0181\x03\x02\x02\x02\u0181\u0184\x03\x02\x02\x02\u0182\u0180\x03" +
		"\x02\x02\x02\u0183\u017C\x03\x02\x02\x02\u0184\u0187\x03\x02\x02\x02\u0185" +
		"\u0183\x03\x02\x02\x02\u0185\u0186\x03\x02\x02\x02\u0186\u018B\x03\x02" +
		"\x02\x02\u0187\u0185\x03\x02\x02\x02\u0188\u018A\x070\x02\x02\u0189\u0188" +
		"\x03\x02\x02\x02\u018A\u018D\x03\x02\x02\x02\u018B\u0189\x03\x02\x02\x02" +
		"\u018B\u018C\x03\x02\x02\x02\u018C\u019B\x03\x02\x02\x02\u018D\u018B\x03" +
		"\x02\x02\x02\u018E\u0198\x05\n\x06\x02\u018F\u0191\x070\x02\x02\u0190" +
		"\u018F\x03\x02\x02\x02\u0191\u0194\x03\x02\x02\x02\u0192\u0190\x03\x02" +
		"\x02\x02\u0192\u0193\x03\x02\x02\x02\u0193\u0195\x03\x02\x02\x02\u0194" +
		"\u0192\x03\x02\x02\x02\u0195\u0197\x05\n\x06\x02\u0196\u0192\x03\x02\x02" +
		"\x02\u0197\u019A\x03\x02\x02\x02\u0198\u0196\x03\x02\x02\x02\u0198\u0199" +
		"\x03\x02\x02\x02\u0199\u019C\x03\x02\x02\x02\u019A\u0198\x03\x02\x02\x02" +
		"\u019B\u018E\x03\x02\x02\x02\u019B\u019C\x03\x02\x02\x02\u019C\x11\x03" +
		"\x02\x02\x02\u019D\u01A5\x05\x14\v\x02\u019E\u01A4\x05\x14\v\x02\u019F" +
		"\u01A4\x05\x84C\x02\u01A0\u01A4\x05\x86D\x02\u01A1\u01A4\x05r:\x02\u01A2" +
		"\u01A4\x05x=\x02\u01A3\u019E\x03\x02\x02\x02\u01A3\u019F\x03\x02\x02\x02" +
		"\u01A3\u01A0\x03\x02\x02\x02\u01A3\u01A1\x03\x02\x02\x02\u01A3\u01A2\x03" +
		"\x02\x02\x02\u01A4\u01A7\x03\x02\x02\x02\u01A5\u01A3\x03\x02\x02\x02\u01A5" +
		"\u01A6\x03\x02\x02\x02\u01A6\x13\x03\x02\x02\x02\u01A7\u01A5\x03\x02\x02" +
		"\x02\u01A8\u01AC\x07\x10\x02\x02\u01A9\u01AD\x05\xBA^\x02\u01AA\u01AD" +
		"\x05\xBC_\x02\u01AB\u01AD\x03\x02\x02\x02\u01AC\u01A9\x03\x02\x02\x02" +
		"\u01AC\u01AA\x03\x02\x02\x02\u01AC\u01AB\x03\x02\x02\x02\u01AD\u01B1\x03" +
		"\x02\x02\x02\u01AE\u01B0\x05\x9CO\x02\u01AF\u01AE\x03\x02\x02\x02\u01B0" +
		"\u01B3\x03\x02\x02\x02\u01B1\u01AF\x03\x02\x02\x02\u01B1\u01B2\x03\x02" +
		"\x02\x02\u01B2\u01B4\x03\x02\x02\x02\u01B3\u01B1\x03\x02\x02\x02\u01B4" +
		"\u01B5\x05\xB4[\x02\u01B5\x15\x03\x02\x02\x02\u01B6\u01B7\x07\b\x02\x02" +
		"\u01B7\u01B8\x05(\x15\x02\u01B8\u01BC\x07\x1A\x02\x02\u01B9\u01BB\x05" +
		"\xB6\\\x02\u01BA\u01B9\x03\x02\x02\x02\u01BB\u01BE\x03\x02\x02\x02\u01BC" +
		"\u01BA\x03\x02\x02\x02\u01BC\u01BD\x03\x02\x02\x02\u01BD\u01CD\x03\x02" +
		"\x02\x02\u01BE\u01BC\x03\x02\x02\x02\u01BF\u01C3\x05\b\x05\x02\u01C0\u01C2" +
		"\x05\xB6\\\x02\u01C1\u01C0\x03\x02\x02\x02\u01C2\u01C5\x03\x02\x02\x02" +
		"\u01C3\u01C1\x03\x02\x02\x02\u01C3\u01C4\x03\x02\x02\x02\u01C4\u01CE\x03" +
		"\x02\x02\x02\u01C5\u01C3\x03\x02\x02\x02\u01C6\u01CA\x05\x18\r\x02\u01C7" +
		"\u01C9\x05\xB6\\\x02\u01C8\u01C7\x03\x02\x02\x02\u01C9\u01CC\x03\x02\x02" +
		"\x02\u01CA\u01C8\x03\x02\x02\x02\u01CA\u01CB\x03\x02\x02\x02\u01CB\u01CE" +
		"\x03\x02\x02\x02\u01CC\u01CA\x03\x02\x02\x02\u01CD\u01BF\x03\x02\x02\x02" +
		"\u01CD\u01C6\x03\x02\x02\x02\u01CE\u01CF\x03\x02\x02\x02\u01CF\u01CD\x03" +
		"\x02\x02\x02\u01CF\u01D0\x03\x02\x02\x02\u01D0\u01D4\x03\x02\x02\x02\u01D1" +
		"\u01D3\x070\x02\x02\u01D2\u01D1\x03\x02\x02\x02\u01D3\u01D6\x03\x02\x02" +
		"\x02\u01D4\u01D2\x03\x02\x02\x02\u01D4\u01D5\x03\x02\x02\x02\u01D5\u01E4" +
		"\x03\x02\x02\x02\u01D6\u01D4\x03\x02\x02\x02\u01D7\u01E1\x05\n\x06\x02" +
		"\u01D8\u01DA\x070\x02\x02\u01D9\u01D8\x03\x02\x02\x02\u01DA\u01DD\x03" +
		"\x02\x02\x02\u01DB\u01D9\x03\x02\x02\x02\u01DB\u01DC\x03\x02\x02\x02\u01DC" +
		"\u01DE\x03\x02\x02\x02\u01DD\u01DB\x03\x02\x02\x02\u01DE\u01E0\x05\n\x06" +
		"\x02\u01DF\u01DB\x03\x02\x02\x02\u01E0\u01E3\x03\x02\x02\x02\u01E1\u01DF" +
		"\x03\x02\x02\x02\u01E1\u01E2\x03\x02\x02\x02\u01E2\u01E5\x03\x02\x02\x02" +
		"\u01E3\u01E1\x03\x02\x02\x02\u01E4\u01D7\x03\x02\x02\x02\u01E4\u01E5\x03" +
		"\x02\x02\x02\u01E5\x17\x03\x02\x02\x02\u01E6\u01E8\x05\x1A\x0E\x02\u01E7" +
		"\u01E6\x03\x02\x02\x02\u01E7\u01E8\x03\x02\x02\x02\u01E8\u01E9\x03\x02" +
		"\x02\x02\u01E9\u01EA\x05\x1C\x0F\x02\u01EA\x19\x03\x02\x02\x02\u01EB\u01EC" +
		"\x07\x16\x02\x02\u01EC\u01ED\x05\x9CO\x02\u01ED\u01EE\x07\x1A\x02\x02" +
		"\u01EE\x1B\x03\x02\x02\x02\u01EF\u01F3\x05\x1E\x10\x02\u01F0\u01F3\x05" +
		" \x11\x02\u01F1\u01F3\x05\"\x12\x02\u01F2\u01EF\x03\x02\x02\x02\u01F2" +
		"\u01F0\x03\x02\x02\x02\u01F2\u01F1\x03\x02\x02\x02\u01F3\u01F9\x03\x02" +
		"\x02\x02\u01F4\u01F8\x05\x1E\x10\x02\u01F5\u01F8\x05 \x11\x02\u01F6\u01F8" +
		"\x05\"\x12\x02\u01F7\u01F4\x03\x02\x02\x02\u01F7\u01F5\x03\x02\x02\x02" +
		"\u01F7\u01F6\x03\x02\x02\x02\u01F8\u01FB\x03\x02\x02\x02\u01F9\u01F7\x03" +
		"\x02\x02\x02\u01F9\u01FA\x03\x02\x02\x02\u01FA\x1D\x03\x02\x02\x02\u01FB" +
		"\u01F9\x03\x02\x02\x02\u01FC\u01FE\x05r:\x02\u01FD\u01FC\x03\x02\x02\x02" +
		"\u01FD\u01FE\x03\x02\x02\x02\u01FE\u01FF\x03\x02\x02\x02\u01FF\u0201\x07" +
		"\x14\x02\x02\u0200\u0202\x05\x9CO\x02\u0201\u0200\x03\x02\x02\x02\u0202" +
		"\u0203\x03\x02\x02\x02\u0203\u0201\x03\x02\x02\x02\u0203\u0204\x03\x02" +
		"\x02\x02\u0204\u0205\x03\x02\x02\x02\u0205\u0206\x07\x1A\x02\x02\u0206" +
		"\x1F\x03\x02\x02\x02\u0207\u0209\x05r:\x02\u0208\u0207\x03\x02\x02\x02" +
		"\u0208\u0209\x03\x02\x02\x02\u0209\u020A\x03\x02\x02\x02\u020A\u020C\x07" +
		"\x15\x02\x02\u020B\u020D\x05\x9CO\x02\u020C\u020B\x03\x02\x02\x02\u020D" +
		"\u020E\x03\x02\x02\x02\u020E\u020C\x03\x02\x02\x02\u020E\u020F\x03\x02" +
		"\x02\x02\u020F\u0210\x03\x02\x02\x02\u0210\u0211\x07\x1A\x02\x02\u0211" +
		"!\x03\x02\x02\x02\u0212\u0214\x05r:\x02\u0213\u0212\x03\x02\x02\x02\u0213" +
		"\u0214\x03\x02\x02\x02\u0214\u0215\x03\x02\x02\x02\u0215\u0217\x07\x17" +
		"\x02\x02\u0216\u0218\x05\x9CO\x02\u0217\u0216\x03\x02\x02\x02\u0218\u0219" +
		"\x03\x02\x02\x02\u0219\u0217\x03\x02\x02\x02\u0219\u021A\x03\x02\x02\x02" +
		"\u021A\u021B\x03\x02\x02\x02\u021B\u021C\x07\x1A\x02\x02\u021C#\x03\x02" +
		"\x02\x02\u021D\u0221\x05\\/\x02\u021E\u0220\x05`1\x02\u021F\u021E\x03" +
		"\x02\x02\x02\u0220\u0223\x03\x02\x02\x02\u0221\u021F\x03\x02\x02\x02\u0221" +
		"\u0222\x03\x02\x02\x02\u0222\u0228\x03\x02\x02\x02\u0223\u0221\x03\x02" +
		"\x02\x02\u0224\u0225\x07H\x02\x02\u0225\u0226\x05\xBE`\x02\u0226\u0227" +
		"\x07\x1A\x02\x02\u0227\u0229\x03\x02\x02\x02\u0228\u0224\x03\x02\x02\x02" +
		"\u0228\u0229\x03\x02\x02\x02\u0229%\x03\x02\x02\x02\u022A\u022B\x07E\x02" +
		"\x02\u022B\u022C\x07.\x02\x02\u022C\u022D\x07\x1A\x02\x02\u022D\'\x03" +
		"\x02\x02\x02\u022E\u0230\x05*\x16\x02\u022F\u022E\x03\x02\x02\x02\u0230" +
		"\u0233\x03\x02\x02\x02\u0231\u022F\x03\x02\x02\x02\u0231\u0232\x03\x02" +
		"\x02\x02\u0232\u0239\x03\x02\x02\x02\u0233\u0231\x03\x02\x02\x02\u0234" +
		"\u0238\x07\x89\x02\x02\u0235\u0238\x07\x8A\x02\x02\u0236\u0238\x05,\x17" +
		"\x02\u0237\u0234\x03\x02\x02\x02\u0237\u0235\x03\x02\x02\x02\u0237\u0236" +
		"\x03\x02\x02\x02\u0238\u023B\x03\x02\x02\x02\u0239\u0237\x03\x02\x02\x02" +
		"\u0239\u023A\x03\x02\x02\x02\u023A)\x03\x02\x02\x02\u023B\u0239\x03\x02" +
		"\x02\x02\u023C\u023D\t\x02\x02\x02\u023D+\x03\x02\x02\x02\u023E\u0248" +
		"\x050\x19\x02\u023F\u0248\x05h5\x02\u0240\u0248\x052\x1A\x02\u0241\u0248" +
		"\x054\x1B\x02\u0242\u0248\x056\x1C\x02\u0243\u0248\x058\x1D\x02\u0244" +
		"\u0248\x05:\x1E\x02\u0245\u0248\x05<\x1F\x02\u0246\u0248\x07^\x02\x02" +
		"\u0247\u023E\x03\x02\x02\x02\u0247\u023F\x03\x02\x02\x02\u0247\u0240\x03" +
		"\x02\x02\x02\u0247\u0241\x03\x02\x02\x02\u0247\u0242\x03\x02\x02\x02\u0247" +
		"\u0243\x03\x02\x02\x02\u0247\u0244\x03\x02\x02\x02\u0247\u0245\x03\x02" +
		"\x02\x02\u0247\u0246\x03\x02\x02\x02\u0248-\x03\x02\x02\x02\u0249\u024F" +
		"\x07\x87\x02\x02\u024A\u024F\x07\x88\x02\x02\u024B\u024F\x07\x89\x02\x02" +
		"\u024C\u024F\x07\x8A\x02\x02\u024D\u024F\x03\x02\x02\x02\u024E\u0249\x03" +
		"\x02\x02\x02\u024E\u024A\x03\x02\x02\x02\u024E\u024B\x03\x02\x02\x02\u024E" +
		"\u024C\x03\x02\x02\x02\u024E\u024D\x03\x02\x02\x02\u024F/\x03\x02\x02" +
		"\x02\u0250\u0253\x07U\x02\x02\u0251\u0254\x07)\x02\x02\u0252\u0254\x07" +
		"\x9A\x02\x02\u0253\u0251\x03\x02\x02\x02\u0253\u0252\x03\x02\x02\x02\u0253" +
		"\u0254\x03\x02\x02\x02\u0254\u025F\x03\x02\x02\x02\u0255\u0257\x07l\x02" +
		"\x02\u0256\u0258\x07)\x02\x02\u0257\u0256\x03\x02\x02\x02\u0257\u0258" +
		"\x03\x02\x02\x02\u0258\u025F\x03\x02\x02\x02\u0259\u025B\x07V\x02\x02" +
		"\u025A\u025C\x07)\x02\x02\u025B\u025A\x03\x02\x02\x02\u025B\u025C\x03" +
		"\x02\x02\x02\u025C\u025F\x03\x02\x02\x02\u025D\u025F\x07W\x02\x02\u025E" +
		"\u0250\x03\x02\x02\x02\u025E\u0255\x03\x02\x02\x02\u025E\u0259\x03\x02" +
		"\x02\x02\u025E\u025D\x03\x02\x02\x02\u025F1\x03\x02\x02\x02\u0260\u0263" +
		"\t\x03\x02\x02\u0261\u0262\x07\x1B\x02\x02\u0262\u0264\x07+\x02\x02\u0263" +
		"\u0261\x03\x02\x02\x02\u0263\u0264\x03\x02\x02\x02\u02643\x03\x02\x02" +
		"\x02\u0265\u0266\t\x04\x02\x02\u02665\x03\x02\x02\x02\u0267\u0268\t\x05" +
		"\x02\x02\u02687\x03\x02\x02\x02\u0269\u026A\t\x06\x02\x02\u026A9\x03\x02" +
		"\x02\x02\u026B\u026C\t\x07\x02\x02\u026C;\x03\x02\x02\x02\u026D\u026E" +
		"\t\b\x02\x02\u026E=\x03\x02\x02\x02\u026F\u0270\t\t\x02\x02\u0270?\x03" +
		"\x02\x02\x02\u0271\u0272\t\n\x02\x02\u0272A\x03\x02\x02\x02\u0273\u0274" +
		"\t\v\x02\x02\u0274C\x03\x02\x02\x02\u0275\u0276\t\f\x02\x02\u0276E\x03" +
		"\x02\x02\x02\u0277\u027A\x07c\x02\x02\u0278\u0279\x07\x1B\x02\x02\u0279" +
		"\u027B\x07+\x02\x02\u027A\u0278\x03\x02\x02\x02\u027A\u027B\x03\x02\x02" +
		"\x02\u027B\u0287\x03\x02\x02\x02\u027C\u027F\x07v\x02\x02\u027D\u027E" +
		"\x07\x1B\x02\x02\u027E\u0280\x07+\x02\x02\u027F\u027D\x03\x02\x02\x02" +
		"\u027F\u0280\x03\x02\x02\x02\u0280\u0287\x03\x02\x02\x02\u0281\u0284\x07" +
		"\x83\x02\x02\u0282\u0283\x07\x1B\x02\x02\u0283\u0285\x07+\x02\x02\u0284" +
		"\u0282\x03\x02\x02\x02\u0284\u0285\x03\x02\x02\x02\u0285\u0287\x03\x02" +
		"\x02\x02\u0286\u0277\x03\x02\x02\x02\u0286\u027C\x03\x02\x02\x02\u0286" +
		"\u0281\x03\x02\x02\x02\u0287G\x03\x02\x02\x02\u0288\u0289\t\r\x02\x02" +
		"\u0289I\x03\x02\x02\x02\u028A\u028B\x05> \x02\u028B\u028C\x07\x1B\x02" +
		"\x02\u028C\u028D\x05p9\x02\u028D\u028E\x07\x1A\x02\x02\u028E\u0291\x03" +
		"\x02\x02\x02\u028F\u0291\x07,\x02\x02\u0290\u028A\x03\x02\x02\x02\u0290" +
		"\u028F\x03\x02\x02\x02\u0291K\x03\x02\x02\x02\u0292\u0293\x05@!\x02\u0293" +
		"\u0294\x07\x1B\x02\x02\u0294\u0295\x05p9\x02\u0295\u029A\x07\x1A\x02\x02" +
		"\u0296\u0297\x07H\x02\x02\u0297\u0298\x05\xBE`\x02\u0298\u0299\x07\x1A" +
		"\x02\x02\u0299\u029B\x03\x02\x02\x02\u029A\u0296\x03\x02\x02\x02\u029A" +
		"\u029B\x03\x02\x02\x02\u029BM\x03\x02\x02\x02\u029C\u029D\x05D#\x02\u029D" +
		"\u029E\x07\x1B\x02\x02\u029E\u029F\x05p9\x02\u029F\u02A4\x07\x1A\x02\x02" +
		"\u02A0\u02A1\x07H\x02\x02\u02A1\u02A2\x05\xBE`\x02\u02A2\u02A3\x07\x1A" +
		"\x02\x02\u02A3\u02A5\x03\x02\x02\x02\u02A4\u02A0\x03\x02\x02\x02\u02A4" +
		"\u02A5\x03\x02\x02\x02\u02A5O\x03\x02\x02\x02\u02A6\u02A7\x05B\"\x02\u02A7" +
		"\u02AA\x07\x1B\x02\x02\u02A8\u02AB\x05p9\x02\u02A9\u02AB\x05n8\x02\u02AA" +
		"\u02A8\x03\x02\x02\x02\u02AA\u02A9\x03\x02\x02\x02\u02AB\u02AC\x03\x02" +
		"\x02\x02\u02AC\u02B1\x07\x1A\x02\x02\u02AD\u02AE\x07H\x02\x02\u02AE\u02AF" +
		"\x05\xBE`\x02\u02AF\u02B0\x07\x1A\x02\x02\u02B0\u02B2\x03\x02\x02\x02" +
		"\u02B1\u02AD\x03\x02\x02\x02\u02B1\u02B2\x03\x02\x02\x02\u02B2Q\x03\x02" +
		"\x02\x02\u02B3\u02B7\x05T+\x02\u02B4\u02B6\x05l7\x02\u02B5\u02B4\x03\x02" +
		"\x02\x02\u02B6\u02B9\x03\x02\x02\x02\u02B7\u02B5\x03\x02\x02\x02\u02B7" +
		"\u02B8\x03\x02\x02\x02\u02B8S\x03\x02\x02\x02\u02B9\u02B7\x03\x02\x02" +
		"\x02\u02BA\u02BB\x05H%\x02\u02BB\u02BF\x07\x1B\x02\x02\u02BC\u02BE\x07" +
		"\x03\x02\x02\u02BD\u02BC\x03\x02\x02\x02\u02BE\u02C1\x03\x02\x02\x02\u02BF" +
		"\u02BD\x03\x02\x02\x02\u02BF\u02C0\x03\x02\x02\x02\u02C0\u02C2\x03\x02" +
		"\x02\x02\u02C1\u02BF\x03\x02\x02\x02\u02C2\u02C3\x05p9\x02\u02C3\u02C4" +
		"\x07\x1A\x02\x02\u02C4U\x03\x02\x02\x02\u02C5\u02C9\x05X-\x02\u02C6\u02C8" +
		"\x05l7\x02\u02C7\u02C6\x03\x02\x02\x02\u02C8\u02CB\x03\x02\x02\x02\u02C9" +
		"\u02C7\x03\x02\x02\x02\u02C9\u02CA\x03\x02\x02\x02\u02CAW\x03\x02\x02" +
		"\x02\u02CB\u02C9\x03\x02\x02\x02\u02CC\u02CD\x05F$\x02\u02CD\u02CE\x07" +
		"\x1B\x02\x02\u02CE\u02CF\x05p9\x02\u02CF\u02D4\x07\x1A\x02\x02\u02D0\u02D1" +
		"\x07H\x02\x02\u02D1\u02D2\x05\xBE`\x02\u02D2\u02D3\x07\x1A\x02\x02\u02D3" +
		"\u02D5\x03\x02\x02\x02\u02D4\u02D0\x03\x02\x02\x02\u02D4\u02D5\x03\x02" +
		"\x02\x02\u02D5Y\x03\x02\x02\x02\u02D6\u02DA\x05\\/\x02\u02D7\u02D9\x05" +
		"`1\x02\u02D8\u02D7\x03\x02\x02\x02\u02D9\u02DC\x03\x02\x02\x02\u02DA\u02D8" +
		"\x03\x02\x02\x02\u02DA\u02DB\x03\x02\x02\x02\u02DB\u02DF\x03\x02\x02\x02" +
		"\u02DC\u02DA\x03\x02\x02\x02\u02DD\u02DE\x070\x02\x02\u02DE\u02E0\x07" +
		"J\x02\x02\u02DF\u02DD\x03\x02\x02\x02\u02DF\u02E0\x03\x02\x02\x02\u02E0" +
		"[\x03\x02\x02\x02\u02E1\u02E2\x05^0\x02\u02E2\u02E6\x07\x1B\x02\x02\u02E3" +
		"\u02E5\x07\x03\x02\x02\u02E4\u02E3\x03\x02\x02\x02\u02E5\u02E8\x03\x02" +
		"\x02\x02\u02E6\u02E4\x03\x02\x02\x02\u02E6\u02E7\x03\x02\x02\x02\u02E7" +
		"\u02E9\x03\x02\x02\x02\u02E8\u02E6\x03\x02\x02\x02\u02E9\u02EA\x05p9\x02" +
		"\u02EA\u02EB\x07\x1A\x02\x02\u02EB]\x03\x02\x02\x02\u02EC\u02EF\x07`\x02" +
		"\x02\u02ED\u02F0\x07)\x02\x02\u02EE\u02F0\x07\x9A\x02\x02\u02EF\u02ED" +
		"\x03\x02\x02\x02\u02EF\u02EE\x03\x02\x02\x02\u02EF\u02F0\x03\x02\x02\x02" +
		"\u02F0\u02FB\x03\x02\x02\x02\u02F1\u02F3\x07u\x02\x02\u02F2\u02F4\x07" +
		")\x02\x02\u02F3\u02F2\x03\x02\x02\x02\u02F3\u02F4\x03\x02\x02\x02\u02F4" +
		"\u02FB\x03\x02\x02\x02\u02F5\u02F7\x07a\x02\x02\u02F6\u02F8\x07)\x02\x02" +
		"\u02F7\u02F6\x03\x02\x02\x02\u02F7\u02F8\x03\x02\x02\x02\u02F8\u02FB\x03" +
		"\x02\x02\x02\u02F9\u02FB\x07b\x02\x02\u02FA\u02EC\x03\x02\x02\x02\u02FA" +
		"\u02F1\x03\x02\x02\x02\u02FA\u02F5\x03\x02\x02\x02\u02FA\u02F9\x03\x02" +
		"\x02\x02\u02FB_\x03\x02\x02\x02\u02FC\u02FD\x07F\x02\x02\u02FD\u02FE\x07" +
		"\x1B\x02\x02\u02FE\u02FF\x05p9\x02\u02FF\u0300\x07\x1A\x02\x02\u0300\u030E" +
		"\x03\x02\x02\x02\u0301\u0302\t\x0E\x02\x02\u0302\u0303\x07\x1B\x02\x02" +
		"\u0303\u0304\x07.\x02\x02\u0304\u030E\x07\x1A\x02\x02\u0305\u0309\t\x0F" +
		"\x02\x02\u0306\u0308\v\x02\x02\x02\u0307\u0306\x03\x02\x02\x02\u0308\u030B" +
		"\x03\x02\x02\x02\u0309\u030A\x03\x02\x02\x02\u0309\u0307\x03\x02\x02\x02" +
		"\u030A\u030C\x03\x02\x02\x02\u030B\u0309\x03\x02\x02\x02\u030C\u030E\x07" +
		"\x1A\x02\x02\u030D\u02FC\x03\x02\x02\x02\u030D\u0301\x03\x02\x02\x02\u030D" +
		"\u0305\x03\x02\x02\x02\u030Ea\x03\x02\x02\x02\u030F\u0310\x07F\x02\x02" +
		"\u0310\u0311\x07\x1B\x02\x02\u0311\u0312\x05p9\x02\u0312\u0313\x07\x1A" +
		"\x02\x02\u0313\u0321\x03\x02\x02\x02\u0314\u0315\t\x0E\x02\x02\u0315\u0316" +
		"\x07\x1B\x02\x02\u0316\u0317\x07.\x02\x02\u0317\u0321\x07\x1A\x02\x02" +
		"\u0318\u031C\t\x0F\x02\x02\u0319\u031B\v\x02\x02\x02\u031A\u0319\x03\x02" +
		"\x02\x02\u031B\u031E\x03\x02\x02\x02\u031C\u031D\x03\x02\x02\x02\u031C" +
		"\u031A\x03\x02\x02\x02\u031D\u031F\x03\x02\x02\x02\u031E\u031C\x03\x02" +
		"\x02\x02\u031F\u0321\x07\x1A\x02\x02\u0320\u030F\x03\x02\x02\x02\u0320" +
		"\u0314\x03\x02\x02\x02\u0320\u0318\x03\x02\x02\x02\u0321c\x03\x02\x02" +
		"\x02\u0322\u0326\x05f4\x02\u0323\u0325\x05l7\x02\u0324\u0323\x03\x02\x02" +
		"\x02\u0325\u0328\x03\x02\x02\x02\u0326\u0324\x03\x02\x02\x02\u0326\u0327" +
		"\x03\x02\x02\x02\u0327e\x03\x02\x02\x02\u0328\u0326\x03\x02\x02\x02\u0329" +
		"\u032A\x05j6\x02\u032A\u032B\x07\x1B\x02\x02\u032B\u032C\x05p9\x02\u032C" +
		"\u0331\x07\x1A\x02\x02\u032D\u032E\x07H\x02\x02\u032E\u032F\x05\xBE`\x02" +
		"\u032F\u0330\x07\x1A\x02\x02\u0330\u0332\x03\x02\x02\x02\u0331\u032D\x03" +
		"\x02\x02\x02\u0331\u0332\x03\x02\x02\x02\u0332g\x03\x02\x02\x02\u0333" +
		"\u0336\x07T\x02\x02\u0334\u0335\x07\x1B\x02\x02\u0335\u0337\x07*\x02\x02" +
		"\u0336\u0334\x03\x02\x02\x02\u0336\u0337\x03\x02\x02\x02\u0337\u033E\x03" +
		"\x02\x02\x02\u0338\u033B\x07k\x02\x02\u0339\u033A\x07\x1B\x02\x02\u033A" +
		"\u033C\x07*\x02\x02\u033B\u0339\x03\x02\x02\x02\u033B\u033C\x03\x02\x02" +
		"\x02\u033C\u033E\x03\x02\x02\x02\u033D\u0333\x03\x02\x02\x02\u033D\u0338" +
		"\x03\x02\x02\x02\u033Ei\x03\x02\x02\x02\u033F\u0342\x07_\x02\x02\u0340" +
		"\u0341\x07\x1B\x02\x02\u0341\u0343\x07*\x02\x02\u0342\u0340\x03\x02\x02" +
		"\x02\u0342\u0343\x03\x02\x02\x02\u0343\u034F\x03\x02\x02\x02\u0344\u0347" +
		"\x07t\x02\x02\u0345\u0346\x07\x1B\x02\x02\u0346\u0348\x07*\x02\x02\u0347" +
		"\u0345\x03\x02\x02\x02\u0347\u0348\x03\x02\x02\x02\u0348\u034F\x03\x02" +
		"\x02\x02\u0349\u034C\x07\x84\x02\x02\u034A\u034B\x07\x1B\x02\x02\u034B" +
		"\u034D\x07*\x02\x02\u034C\u034A\x03\x02\x02\x02\u034C\u034D\x03\x02\x02" +
		"\x02\u034D\u034F\x03\x02\x02\x02\u034E\u033F\x03\x02\x02\x02\u034E\u0344" +
		"\x03\x02\x02\x02\u034E\u0349\x03\x02\x02\x02\u034Fk\x03\x02\x02\x02\u0350" +
		"\u0351\x07\x13\x02\x02\u0351\u0354\x05\x9CO\x02\u0352\u0354\x07F\x02\x02" +
		"\u0353\u0350\x03\x02\x02\x02\u0353\u0352\x03\x02\x02\x02\u0354\u0355\x03" +
		"\x02\x02\x02\u0355\u0359\x07\x1B\x02\x02\u0356\u0358\x07\x03\x02\x02\u0357" +
		"\u0356\x03\x02\x02\x02\u0358\u035B\x03\x02\x02\x02\u0359\u0357\x03\x02" +
		"\x02\x02\u0359\u035A\x03\x02\x02\x02\u035A\u035E\x03\x02\x02\x02\u035B" +
		"\u0359\x03\x02\x02\x02\u035C\u035F\x05\x9CO\x02\u035D\u035F\x070\x02\x02" +
		"\u035E\u035C\x03\x02\x02\x02\u035E\u035D\x03\x02\x02\x02\u035F\u0360\x03" +
		"\x02\x02\x02\u0360\u035E\x03\x02\x02\x02\u0360\u0361\x03\x02\x02\x02\u0361" +
		"\u0362\x03\x02\x02\x02\u0362\u0370\x07\x1A\x02\x02\u0363\u0364\t\x0E\x02" +
		"\x02\u0364\u0365\x07\x1B\x02\x02\u0365\u0366\x07.\x02\x02\u0366\u0370" +
		"\x07\x1A\x02\x02\u0367\u036B\t\x0F\x02\x02\u0368\u036A\v\x02\x02\x02\u0369" +
		"\u0368\x03\x02\x02\x02\u036A\u036D\x03\x02\x02\x02\u036B\u036C\x03\x02" +
		"\x02\x02\u036B\u0369\x03\x02\x02\x02\u036C\u036E\x03\x02\x02\x02\u036D" +
		"\u036B\x03\x02\x02\x02\u036E\u0370\x07\x1A\x02\x02\u036F\u0353\x03\x02" +
		"\x02\x02\u036F\u0363\x03\x02\x02\x02\u036F\u0367\x03\x02\x02\x02\u0370" +
		"m\x03\x02\x02\x02\u0371\u0372\x07\x99\x02\x02\u0372\u0373\x07\x1E\x02" +
		"\x02\u0373\u0374\x07.\x02\x02\u0374o\x03\x02\x02\x02\u0375\u0376\x07\x9C" +
		"\x02\x02\u0376q\x03\x02\x02\x02\u0377\u0378\x07\x18\x02\x02\u0378\u0380" +
		"\x07\x1A\x02\x02\u0379\u037B\x07\x03\x02\x02\u037A\u0379\x03\x02\x02\x02" +
		"\u037B\u037E\x03\x02\x02\x02\u037C\u037A\x03\x02\x02\x02\u037C\u037D\x03" +
		"\x02\x02\x02\u037D\u037F\x03\x02\x02\x02\u037E\u037C\x03\x02\x02\x02\u037F" +
		"\u0381\x05t;\x02\u0380\u037C\x03\x02\x02\x02\u0380\u0381\x03\x02\x02\x02" +
		"\u0381\u0396\x03\x02\x02\x02\u0382\u0383\x07\x18\x02\x02\u0383\u0388\x05" +
		"\x9CO\x02\u0384\u0387\x07\x1B\x02\x02\u0385\u0387\x05\xBE`\x02\u0386\u0384" +
		"\x03\x02\x02\x02\u0386\u0385\x03\x02\x02\x02\u0387\u038A\x03\x02\x02\x02" +
		"\u0388\u0386\x03\x02\x02\x02\u0388\u0389\x03\x02\x02\x02\u0389\u038B\x03" +
		"\x02\x02\x02\u038A\u0388\x03\x02\x02\x02\u038B\u0393\x07\x1A\x02\x02\u038C" +
		"\u038E\x07\x03\x02\x02\u038D\u038C\x03\x02\x02\x02\u038E\u0391\x03\x02" +
		"\x02\x02\u038F\u038D\x03\x02\x02\x02\u038F\u0390\x03\x02\x02\x02\u0390" +
		"\u0392\x03\x02\x02\x02\u0391\u038F\x03\x02\x02\x02\u0392\u0394\x05t;\x02" +
		"\u0393\u038F\x03\x02\x02\x02\u0393\u0394\x03\x02\x02\x02\u0394\u0396\x03" +
		"\x02\x02\x02\u0395\u0377\x03\x02\x02\x02\u0395\u0382\x03\x02\x02\x02\u0396" +
		"s\x03\x02\x02\x02\u0397\u0398\x07\x18\x02\x02\u0398\u039D\x05\x9CO\x02" +
		"\u0399\u039C\x07\x1B\x02\x02\u039A\u039C\x05\xBE`\x02\u039B\u0399\x03" +
		"\x02\x02\x02\u039B\u039A\x03\x02\x02\x02\u039C\u039F\x03\x02\x02\x02\u039D" +
		"\u039B\x03\x02\x02\x02\u039D\u039E\x03\x02\x02\x02\u039E\u03A0\x03\x02" +
		"\x02\x02\u039F\u039D\x03\x02\x02\x02\u03A0\u03A1\x07\x1A\x02\x02\u03A1" +
		"u\x03\x02\x02\x02\u03A2\u03A4\x07\r\x02\x02\u03A3\u03A5\x05\x9CO\x02\u03A4" +
		"\u03A3\x03\x02\x02\x02\u03A4\u03A5\x03\x02\x02\x02\u03A5\u03A6\x03\x02" +
		"\x02\x02\u03A6\u03AD\x07\x1A\x02\x02\u03A7\u03A9\x07\x0E\x02\x02\u03A8" +
		"\u03AA\x05\x9CO\x02\u03A9\u03A8\x03\x02\x02\x02\u03A9\u03AA\x03\x02\x02" +
		"\x02\u03AA\u03AB\x03\x02\x02\x02\u03AB\u03AD\x07\x1A\x02\x02\u03AC\u03A2" +
		"\x03\x02\x02\x02\u03AC\u03A7\x03\x02\x02\x02\u03ADw\x03\x02\x02\x02\u03AE" +
		"\u03B6\x07?\x02\x02\u03AF\u03B6\x07=\x02\x02\u03B0\u03B2\x07>\x02\x02" +
		"\u03B1\u03B3\x073\x02\x02\u03B2\u03B1\x03\x02\x02\x02\u03B2\u03B3\x03" +
		"\x02\x02\x02\u03B3\u03B4\x03\x02\x02\x02\u03B4\u03B6\x07\x02\x02\x03\u03B5" +
		"\u03AE\x03\x02\x02\x02\u03B5\u03AF\x03\x02\x02\x02\u03B5\u03B0\x03\x02" +
		"\x02\x02\u03B6y\x03\x02\x02\x02\u03B7\u03B9\x07j\x02\x02\u03B8\u03BA\x05" +
		"\x9CO\x02\u03B9\u03B8\x03\x02\x02\x02\u03B9\u03BA\x03\x02\x02\x02\u03BA" +
		"\u03D0\x03\x02\x02\x02\u03BB\u03C5\x05\x9CO\x02\u03BC\u03C0\x070\x02\x02" +
		"\u03BD\u03BF\x07\x03\x02\x02\u03BE\u03BD\x03\x02\x02\x02\u03BF\u03C2\x03" +
		"\x02\x02\x02\u03C0\u03BE\x03\x02\x02\x02\u03C0\u03C1\x03\x02\x02\x02\u03C1" +
		"\u03C4\x03\x02\x02\x02\u03C2\u03C0\x03\x02\x02\x02\u03C3\u03BC\x03\x02" +
		"\x02\x02\u03C4\u03C7\x03\x02\x02\x02\u03C5\u03C3\x03\x02\x02\x02\u03C5" +
		"\u03C6\x03\x02\x02\x02\u03C6\u03CB\x03\x02\x02\x02\u03C7\u03C5\x03\x02" +
		"\x02\x02\u03C8\u03CA\x070\x02\x02\u03C9\u03C8\x03\x02\x02\x02\u03CA\u03CD" +
		"\x03\x02\x02\x02\u03CB\u03C9\x03\x02\x02\x02\u03CB\u03CC\x03\x02\x02\x02" +
		"\u03CC\u03CF\x03\x02\x02\x02\u03CD\u03CB\x03\x02\x02\x02\u03CE\u03BB\x03" +
		"\x02\x02\x02\u03CF\u03D2\x03\x02\x02\x02\u03D0\u03CE\x03\x02\x02\x02\u03D0" +
		"\u03D1\x03\x02\x02\x02\u03D1\u03D3\x03\x02\x02\x02\u03D2\u03D0\x03\x02" +
		"\x02\x02\u03D3\u03DF\x07\x1A\x02\x02\u03D4\u03DA\x07j\x02\x02\u03D5\u03D9" +
		"\x05\x9CO\x02\u03D6\u03D9\x070\x02\x02\u03D7\u03D9\x07\x03\x02\x02\u03D8" +
		"\u03D5\x03\x02\x02\x02\u03D8\u03D6\x03\x02\x02\x02\u03D8\u03D7\x03\x02" +
		"\x02\x02\u03D9\u03DC\x03\x02\x02\x02\u03DA\u03D8\x03\x02\x02\x02\u03DA" +
		"\u03DB\x03\x02\x02\x02\u03DB\u03DD\x03\x02\x02\x02\u03DC\u03DA\x03\x02" +
		"\x02\x02\u03DD\u03DF\x07\x02\x02\x03\u03DE\u03B7\x03\x02\x02\x02\u03DE" +
		"\u03D4\x03\x02\x02\x02\u03DF{\x03\x02\x02\x02\u03E0\u03E5\x077\x02\x02" +
		"\u03E1\u03E6\x05\x9CO\x02\u03E2\u03E6\x07\x1B\x02\x02\u03E3\u03E6\x07" +
		"\x9C\x02\x02\u03E4\u03E6\x070\x02\x02\u03E5\u03E1\x03\x02\x02\x02\u03E5" +
		"\u03E2\x03\x02\x02\x02\u03E5\u03E3\x03\x02\x02\x02\u03E5\u03E4\x03\x02" +
		"\x02\x02\u03E6\u03E7\x03\x02\x02\x02\u03E7\u03E5\x03\x02\x02\x02\u03E7" +
		"\u03E8\x03\x02\x02\x02\u03E8\u03E9\x03\x02\x02\x02\u03E9\u03F7\x07\x1A" +
		"\x02\x02\u03EA\u03F2\x077\x02\x02\u03EB\u03F1\x05\x9CO\x02\u03EC\u03F1" +
		"\x07\x1B\x02\x02\u03ED\u03F1\x07\x9C\x02\x02\u03EE\u03F1\x070\x02\x02" +
		"\u03EF\u03F1\x07\x03\x02\x02\u03F0\u03EB\x03\x02\x02\x02\u03F0\u03EC\x03" +
		"\x02\x02\x02\u03F0\u03ED\x03\x02\x02\x02\u03F0\u03EE\x03\x02\x02\x02\u03F0" +
		"\u03EF\x03\x02\x02\x02\u03F1\u03F4\x03\x02\x02\x02\u03F2\u03F0\x03\x02" +
		"\x02\x02\u03F2\u03F3\x03\x02\x02\x02\u03F3\u03F5\x03\x02\x02\x02\u03F4" +
		"\u03F2\x03\x02\x02\x02\u03F5\u03F7\x07\x02\x02\x03\u03F6\u03E0\x03\x02" +
		"\x02\x02\u03F6\u03EA\x03\x02\x02\x02\u03F7}\x03\x02\x02\x02\u03F8\u03F9" +
		"\x076\x02\x02\u03F9\u03FA\x05\x9CO\x02\u03FA\u03FB\x07\x1A\x02\x02\u03FB" +
		"\x7F\x03\x02\x02\x02\u03FC\u0400\x07Q\x02\x02\u03FD\u0401\x05\x9CO\x02" +
		"\u03FE\u0401\x07\x1B\x02\x02\u03FF\u0401\x070\x02\x02\u0400\u03FD\x03" +
		"\x02\x02\x02\u0400\u03FE\x03\x02\x02\x02\u0400\u03FF\x03\x02\x02\x02\u0401" +
		"\u0402\x03\x02\x02\x02\u0402\u0400\x03\x02\x02\x02\u0402\u0403\x03\x02" +
		"\x02\x02\u0403\u0404\x03\x02\x02\x02\u0404\u0406\x07\x1A\x02\x02\u0405" +
		"\u0407\x05\x82B\x02\u0406\u0405\x03\x02\x02\x02\u0406\u0407\x03\x02\x02" +
		"\x02\u0407\x81\x03\x02\x02\x02\u0408\u040C\x07Q\x02\x02";
	private static readonly _serializedATNSegment2: string =
		"\u0409\u040D\x05\x9CO\x02\u040A\u040D\x07\x1B\x02\x02\u040B\u040D\x07" +
		"0\x02\x02\u040C\u0409\x03\x02\x02\x02\u040C\u040A\x03\x02\x02\x02\u040C" +
		"\u040B\x03\x02\x02\x02\u040D\u040E\x03\x02\x02\x02\u040E\u040C\x03\x02" +
		"\x02\x02\u040E\u040F\x03\x02\x02\x02\u040F\u0410\x03\x02\x02\x02\u0410" +
		"\u0411\x07\x1A\x02\x02\u0411\x83\x03\x02\x02\x02\u0412\u0416\x07\x11\x02" +
		"\x02\u0413\u0415\x070\x02\x02\u0414\u0413\x03\x02\x02\x02\u0415\u0418" +
		"\x03\x02\x02\x02\u0416\u0414\x03\x02\x02\x02\u0416\u0417\x03\x02\x02\x02" +
		"\u0417\u041A\x03\x02\x02\x02\u0418\u0416\x03\x02\x02\x02\u0419\u041B\x05" +
		"\x9CO\x02\u041A\u0419\x03\x02\x02\x02\u041A\u041B\x03\x02\x02\x02\u041B" +
		"\u0431\x03\x02\x02\x02\u041C\u0426\x05\x9CO\x02\u041D\u0421\x070\x02\x02" +
		"\u041E\u0420\x07\x03\x02\x02\u041F\u041E\x03\x02\x02\x02\u0420\u0423\x03" +
		"\x02\x02\x02\u0421\u041F\x03\x02\x02\x02\u0421\u0422\x03\x02\x02\x02\u0422" +
		"\u0425\x03\x02\x02\x02\u0423\u0421\x03\x02\x02\x02\u0424\u041D\x03\x02" +
		"\x02\x02\u0425\u0428\x03\x02\x02\x02\u0426\u0424\x03\x02\x02\x02\u0426" +
		"\u0427\x03\x02\x02\x02\u0427\u042C\x03\x02\x02\x02\u0428\u0426\x03\x02" +
		"\x02\x02\u0429\u042B\x070\x02\x02\u042A\u0429\x03\x02\x02\x02\u042B\u042E" +
		"\x03\x02\x02\x02\u042C\u042A\x03\x02\x02\x02\u042C\u042D\x03\x02\x02\x02" +
		"\u042D\u0430\x03\x02\x02\x02\u042E\u042C\x03\x02\x02\x02\u042F\u041C\x03" +
		"\x02\x02\x02\u0430\u0433\x03\x02\x02\x02\u0431\u042F\x03\x02\x02\x02\u0431" +
		"\u0432\x03\x02\x02\x02\u0432\u0434\x03\x02\x02\x02\u0433\u0431\x03\x02" +
		"\x02\x02\u0434\u0441\x07\x1A\x02\x02\u0435\u0439\x07\x11\x02\x02\u0436" +
		"\u0438\x070\x02\x02\u0437\u0436\x03\x02\x02\x02\u0438\u043B\x03\x02\x02" +
		"\x02\u0439\u0437\x03\x02\x02\x02\u0439\u043A\x03\x02\x02\x02\u043A\u043D" +
		"\x03\x02\x02\x02\u043B\u0439\x03\x02\x02\x02\u043C\u043E\x05\x9CO\x02" +
		"\u043D\u043C\x03\x02\x02\x02\u043D\u043E\x03\x02\x02\x02\u043E\u043F\x03" +
		"\x02\x02\x02\u043F\u0441\x07\x02\x02\x03\u0440\u0412\x03\x02\x02\x02\u0440" +
		"\u0435\x03\x02\x02\x02\u0441\x85\x03\x02\x02\x02\u0442\u0444\x07\x12\x02" +
		"\x02\u0443\u0445\n\x10\x02\x02\u0444\u0443\x03\x02\x02\x02\u0445\u0446" +
		"\x03\x02\x02\x02\u0446\u0444\x03\x02\x02\x02\u0446\u0447\x03\x02\x02\x02" +
		"\u0447\u0448\x03\x02\x02\x02\u0448\u0449\x07\x1A\x02\x02\u0449\x87\x03" +
		"\x02\x02\x02\u044A\u044D\x07\x19\x02\x02\u044B\u044E\x05\x9CO\x02\u044C" +
		"\u044E\x070\x02\x02\u044D\u044B\x03\x02\x02\x02\u044D\u044C\x03\x02\x02" +
		"\x02\u044E\u044F\x03\x02\x02\x02\u044F\u044D\x03\x02\x02\x02\u044F\u0450" +
		"\x03\x02\x02\x02\u0450\u0451\x03\x02\x02\x02\u0451\u0457\x07\x1A\x02\x02" +
		"\u0452\u0453\x07\x19\x02\x02\u0453\u0454\x05\x9CO\x02\u0454\u0455\x07" +
		"\x02\x02\x03\u0455\u0457\x03\x02\x02\x02\u0456\u044A\x03\x02\x02\x02\u0456" +
		"\u0452\x03\x02\x02\x02\u0457\x89\x03\x02\x02\x02\u0458\u0459\x07C\x02" +
		"\x02\u0459\u045A\x05\x9CO\x02\u045A\u045B\x07\x1A\x02\x02\u045B\u0461" +
		"\x03\x02\x02\x02\u045C\u045D\x07D\x02\x02\u045D\u045E\x05\x9CO\x02\u045E" +
		"\u045F\x07\x1A\x02\x02\u045F\u0461\x03\x02\x02\x02\u0460\u0458\x03\x02" +
		"\x02\x02\u0460\u045C\x03\x02\x02\x02\u0461\x8B\x03\x02\x02\x02\u0462\u0463" +
		"\x07:\x02\x02\u0463\u0464\x07\x1B\x02\x02\u0464\u0465\x07.\x02\x02\u0465" +
		"\u046C\x07\x1A\x02\x02\u0466\u0467\x07:\x02\x02\u0467\u0468\x07\x1B\x02" +
		"\x02\u0468\u0469\x05\x9CO\x02\u0469\u046A\x07\x1A\x02\x02\u046A\u046C" +
		"\x03\x02\x02\x02\u046B\u0462\x03\x02\x02\x02\u046B\u0466\x03\x02\x02\x02" +
		"\u046C\x8D\x03\x02\x02\x02\u046D\u046E\x07O\x02\x02\u046E\u046F\x05\x9C" +
		"O\x02\u046F\u0470\x07\x1A\x02\x02\u0470\x8F\x03\x02\x02\x02\u0471\u0472" +
		"\x07P\x02\x02\u0472\u0473\x05\x9CO\x02\u0473\u0474\x07\x1A\x02\x02\u0474" +
		"\x91\x03\x02\x02\x02\u0475\u047F\x05\x94K\x02\u0476\u0478\x070\x02\x02" +
		"\u0477\u0476\x03\x02\x02\x02\u0478\u047B\x03\x02\x02\x02\u0479\u0477\x03" +
		"\x02\x02\x02\u0479\u047A\x03\x02\x02\x02\u047A\u047C\x03\x02\x02\x02\u047B" +
		"\u0479\x03\x02\x02\x02\u047C\u047E\x05\x94K\x02\u047D\u0479\x03\x02\x02" +
		"\x02\u047E\u0481\x03\x02\x02\x02\u047F\u047D\x03\x02\x02\x02\u047F\u0480" +
		"\x03\x02\x02\x02\u0480\x93\x03\x02\x02\x02\u0481\u047F\x03\x02\x02\x02" +
		"\u0482\u0483\x07\x13\x02\x02\u0483\u0484\x05\x9CO\x02\u0484\u0485\t\x11" +
		"\x02\x02\u0485\u048B\x05\x9CO\x02\u0486\u048A\x070\x02\x02\u0487\u048A" +
		"\x07\x1B\x02\x02\u0488\u048A\x05\x9CO\x02\u0489\u0486\x03\x02\x02\x02" +
		"\u0489\u0487\x03\x02\x02\x02\u0489\u0488\x03\x02\x02\x02\u048A\u048D\x03" +
		"\x02\x02\x02\u048B\u0489\x03\x02\x02\x02\u048B\u048C\x03\x02\x02\x02\u048C" +
		"\u048E\x03\x02\x02\x02\u048D\u048B\x03\x02\x02\x02\u048E\u048F\x07\x1A" +
		"\x02\x02\u048F\u0499\x03\x02\x02\x02\u0490\u0494\x07M\x02\x02\u0491\u0493" +
		"\v\x02\x02\x02\u0492\u0491\x03\x02\x02\x02\u0493\u0496\x03\x02\x02\x02" +
		"\u0494\u0495\x03\x02\x02\x02\u0494\u0492\x03\x02\x02\x02\u0495\u0497\x03" +
		"\x02\x02\x02\u0496\u0494\x03\x02\x02\x02\u0497\u0499\x07\x1A\x02\x02\u0498" +
		"\u0482\x03\x02\x02\x02\u0498\u0490\x03\x02\x02\x02\u0499\x95\x03\x02\x02" +
		"\x02\u049A\u049E\x07\n\x02\x02\u049B\u049F\x05\x9CO\x02\u049C\u049F\x07" +
		"\x1B\x02\x02\u049D\u049F\x070\x02\x02\u049E\u049B\x03\x02\x02\x02\u049E" +
		"\u049C\x03\x02\x02\x02\u049E\u049D\x03\x02\x02\x02\u049F\u04A0\x03\x02" +
		"\x02\x02\u04A0\u049E\x03\x02\x02\x02\u04A0\u04A1\x03\x02\x02\x02\u04A1" +
		"\u04A2\x03\x02\x02\x02\u04A2\u04AE\x07\x1A\x02\x02\u04A3\u04A9\x07\n\x02" +
		"\x02\u04A4\u04A8\x05\x9CO\x02\u04A5\u04A8\x07\x1B\x02\x02\u04A6\u04A8" +
		"\x070\x02\x02\u04A7\u04A4\x03\x02\x02\x02\u04A7\u04A5\x03\x02\x02\x02" +
		"\u04A7\u04A6\x03\x02\x02\x02\u04A8\u04AB\x03\x02\x02\x02\u04A9\u04A7\x03" +
		"\x02\x02\x02\u04A9\u04AA\x03\x02\x02\x02\u04AA\u04AC\x03\x02\x02\x02\u04AB" +
		"\u04A9\x03\x02\x02\x02\u04AC\u04AE\x07\x02\x02\x03\u04AD\u049A\x03\x02" +
		"\x02\x02\u04AD\u04A3\x03\x02\x02\x02\u04AE\x97\x03\x02\x02\x02\u04AF\u04B1" +
		"\x07\x0F\x02\x02\u04B0\u04B2\x05\x9CO\x02\u04B1\u04B0\x03\x02\x02\x02" +
		"\u04B1\u04B2\x03\x02\x02\x02\u04B2\u04B3\x03\x02\x02\x02\u04B3\u04B4\x07" +
		"\x1A\x02\x02\u04B4\x99\x03\x02\x02\x02\u04B5\u04B7\x05\x9CO\x02\u04B6" +
		"\u04B8\x05\xB6\\\x02\u04B7\u04B6\x03\x02\x02\x02\u04B7\u04B8\x03\x02\x02" +
		"\x02\u04B8\u04BA\x03\x02\x02\x02\u04B9\u04B5\x03\x02\x02\x02\u04BA\u04BB" +
		"\x03\x02\x02\x02\u04BB\u04B9\x03\x02\x02\x02\u04BB\u04BC\x03\x02\x02\x02" +
		"\u04BC\x9B\x03\x02\x02\x02\u04BD\u04C4\x07/\x02\x02\u04BE\u04C0\x07\x03" +
		"\x02\x02\u04BF\u04BE\x03\x02\x02\x02\u04C0\u04C1\x03\x02\x02\x02\u04C1" +
		"\u04BF\x03\x02\x02\x02\u04C1\u04C2\x03\x02\x02\x02\u04C2\u04C3\x03\x02" +
		"\x02\x02\u04C3\u04C5\x05\xBA^\x02\u04C4\u04BF\x03\x02\x02\x02\u04C4\u04C5" +
		"\x03\x02\x02\x02\u04C5\u04ED\x03\x02\x02\x02\u04C6\u04CD\x05\xBE`\x02" +
		"\u04C7\u04C9\x07\x03\x02\x02\u04C8\u04C7\x03\x02\x02\x02\u04C9\u04CA\x03" +
		"\x02\x02\x02\u04CA\u04C8\x03\x02\x02\x02\u04CA\u04CB\x03\x02\x02\x02\u04CB" +
		"\u04CC\x03\x02\x02\x02\u04CC\u04CE\x05\xBA^\x02\u04CD\u04C8\x03\x02\x02" +
		"\x02\u04CD\u04CE\x03\x02\x02\x02\u04CE\u04ED\x03\x02\x02\x02\u04CF\u04D0" +
		"\x07\x16\x02\x02\u04D0\u04D1\x05\x9CO\x02\u04D1\u04D2\x07\x1A\x02\x02" +
		"\u04D2\u04ED\x03\x02\x02\x02\u04D3\u04ED\x07.\x02\x02\u04D4\u04D6\x07" +
		"\x03\x02\x02\u04D5\u04D4\x03\x02\x02\x02\u04D6\u04D9\x03\x02\x02\x02\u04D7" +
		"\u04D5\x03\x02\x02\x02\u04D7\u04D8\x03\x02\x02\x02\u04D8\u04DA\x03\x02" +
		"\x02\x02\u04D9\u04D7\x03\x02\x02\x02\u04DA\u04DE\x07\x1B\x02\x02\u04DB" +
		"\u04DD\x07\x03\x02\x02\u04DC\u04DB\x03\x02\x02\x02\u04DD\u04E0\x03\x02" +
		"\x02\x02\u04DE\u04DC\x03\x02\x02\x02\u04DE\u04DF\x03\x02\x02\x02\u04DF" +
		"\u04ED\x03\x02\x02\x02\u04E0\u04DE\x03\x02\x02\x02\u04E1\u04E5\x07\x1C" +
		"\x02\x02\u04E2\u04E4\x07\x03\x02\x02\u04E3\u04E2\x03\x02\x02\x02\u04E4" +
		"\u04E7\x03\x02\x02\x02\u04E5\u04E3\x03\x02\x02\x02\u04E5\u04E6\x03\x02" +
		"\x02\x02\u04E6\u04ED\x03\x02\x02\x02\u04E7\u04E5\x03\x02\x02\x02\u04E8" +
		"\u04ED\x07\x1A\x02\x02\u04E9\u04ED\x07%\x02\x02\u04EA\u04ED\x07\"\x02" +
		"\x02\u04EB\u04ED\x07\x9C\x02\x02\u04EC\u04BD\x03\x02\x02\x02\u04EC\u04C6" +
		"\x03\x02\x02\x02\u04EC\u04CF\x03\x02\x02\x02\u04EC\u04D3\x03\x02\x02\x02" +
		"\u04EC\u04D7\x03\x02\x02\x02\u04EC\u04E1\x03\x02\x02\x02\u04EC\u04E8\x03" +
		"\x02\x02\x02\u04EC\u04E9\x03\x02\x02\x02\u04EC\u04EA\x03\x02\x02\x02\u04EC" +
		"\u04EB\x03\x02\x02\x02\u04ED\x9D\x03\x02\x02\x02\u04EE\u04EF\x07(\x02" +
		"\x02\u04EF\x9F\x03\x02\x02\x02\u04F0\u04F1\x07\x10\x02\x02\u04F1\xA1\x03" +
		"\x02\x02\x02\u04F2\u04F3\x07\x11\x02\x02\u04F3\xA3\x03\x02\x02\x02\u04F4" +
		"\u04F5\x07\x12\x02\x02\u04F5\xA5\x03\x02\x02\x02\u04F6\u04F7\x07\x13\x02" +
		"\x02\u04F7\xA7\x03\x02\x02\x02\u04F8\u04F9\x07\x14\x02\x02\u04F9\xA9\x03" +
		"\x02\x02\x02\u04FA\u04FB\x07\x15\x02\x02\u04FB\xAB\x03\x02\x02\x02\u04FC" +
		"\u04FD\x07\x16\x02\x02\u04FD\xAD\x03\x02\x02\x02\u04FE\u04FF\x07\x17\x02" +
		"\x02\u04FF\xAF\x03\x02\x02\x02\u0500\u0501\x07\x18\x02\x02\u0501\xB1\x03" +
		"\x02\x02\x02\u0502\u0503\x07\x1A\x02\x02\u0503\xB3\x03\x02\x02\x02\u0504" +
		"\u0505\x07\x1A\x02\x02\u0505\xB5\x03\x02\x02\x02\u0506\u0507\x070\x02" +
		"\x02\u0507\xB7\x03\x02\x02\x02\u0508\u0509\x07\x9D\x02\x02\u0509\xB9\x03" +
		"\x02\x02\x02\u050A\u050B\x07.\x02\x02\u050B\xBB\x03\x02\x02\x02\u050C" +
		"\u050D\x07/\x02\x02\u050D\xBD\x03\x02\x02\x02\u050E\u051A\x073\x02\x02" +
		"\u050F\u051A\x071\x02\x02\u0510\u051A\x074\x02\x02\u0511\u051A\x072\x02" +
		"\x02\u0512\u051A\x07\x1C\x02\x02\u0513\u0514\x07 \x02\x02\u0514\u051A" +
		"\n\x12\x02\x02\u0515\u0516\x07!\x02\x02\u0516\u051A\n\x13\x02\x02\u0517" +
		"\u051A\x07$\x02\x02\u0518\u051A\x07#\x02\x02\u0519\u050E\x03\x02\x02\x02" +
		"\u0519\u050F\x03\x02\x02\x02\u0519\u0510\x03\x02\x02\x02\u0519\u0511\x03" +
		"\x02\x02\x02\u0519\u0512\x03\x02\x02\x02\u0519\u0513\x03\x02\x02\x02\u0519" +
		"\u0515\x03\x02\x02\x02\u0519\u0517\x03\x02\x02\x02\u0519\u0518\x03\x02" +
		"\x02\x02\u051A\u051B\x03\x02\x02\x02\u051B\u0519\x03\x02\x02\x02\u051B" +
		"\u051C\x03\x02\x02\x02\u051C\xBF\x03\x02\x02\x02\u051D\u051E\x07\x03\x02" +
		"\x02\u051E\xC1\x03\x02\x02\x02\xB6\xC6\xCC\xD1\xDB\xED\xF4\xFB\u0106\u0110" +
		"\u0117\u011C\u0121\u0128\u012E\u0131\u0137\u013C\u013F\u0144\u014B\u0150" +
		"\u0156\u015D\u0163\u0166\u016C\u0171\u0174\u0179\u0180\u0185\u018B\u0192" +
		"\u0198\u019B\u01A3\u01A5\u01AC\u01B1\u01BC\u01C3\u01CA\u01CD\u01CF\u01D4" +
		"\u01DB\u01E1\u01E4\u01E7\u01F2\u01F7\u01F9\u01FD\u0203\u0208\u020E\u0213" +
		"\u0219\u0221\u0228\u0231\u0237\u0239\u0247\u024E\u0253\u0257\u025B\u025E" +
		"\u0263\u027A\u027F\u0284\u0286\u0290\u029A\u02A4\u02AA\u02B1\u02B7\u02BF" +
		"\u02C9\u02D4\u02DA\u02DF\u02E6\u02EF\u02F3\u02F7\u02FA\u0309\u030D\u031C" +
		"\u0320\u0326\u0331\u0336\u033B\u033D\u0342\u0347\u034C\u034E\u0353\u0359" +
		"\u035E\u0360\u036B\u036F\u037C\u0380\u0386\u0388\u038F\u0393\u0395\u039B" +
		"\u039D\u03A4\u03A9\u03AC\u03B2\u03B5\u03B9\u03C0\u03C5\u03CB\u03D0\u03D8" +
		"\u03DA\u03DE\u03E5\u03E7\u03F0\u03F2\u03F6\u0400\u0402\u0406\u040C\u040E" +
		"\u0416\u041A\u0421\u0426\u042C\u0431\u0439\u043D\u0440\u0446\u044D\u044F" +
		"\u0456\u0460\u046B\u0479\u047F\u0489\u048B\u0494\u0498\u049E\u04A0\u04A7" +
		"\u04A9\u04AD\u04B1\u04B7\u04BB\u04C1\u04C4\u04CA\u04CD\u04D7\u04DE\u04E5" +
		"\u04EC\u0519\u051B";
	public static readonly _serializedATN: string = Utils.join(
		[
			clozeParser._serializedATNSegment0,
			clozeParser._serializedATNSegment1,
			clozeParser._serializedATNSegment2,
		],
		"",
	);
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!clozeParser.__ATN) {
			clozeParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(clozeParser._serializedATN));
		}

		return clozeParser.__ATN;
	}

}

export class BitmarkContext extends ParserRuleContext {
	public EOF(): TerminalNode { return this.getToken(clozeParser.EOF, 0); }
	public bitmark_(): Bitmark_Context[];
	public bitmark_(i: number): Bitmark_Context;
	public bitmark_(i?: number): Bitmark_Context | Bitmark_Context[] {
		if (i === undefined) {
			return this.getRuleContexts(Bitmark_Context);
		} else {
			return this.getRuleContext(i, Bitmark_Context);
		}
	}
	public nl(): NlContext[];
	public nl(i: number): NlContext;
	public nl(i?: number): NlContext | NlContext[] {
		if (i === undefined) {
			return this.getRuleContexts(NlContext);
		} else {
			return this.getRuleContext(i, NlContext);
		}
	}
	public S(): TerminalNode[];
	public S(i: number): TerminalNode;
	public S(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(clozeParser.S);
		} else {
			return this.getToken(clozeParser.S, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return clozeParser.RULE_bitmark; }
	// @Override
	public enterRule(listener: clozeParserListener): void {
		if (listener.enterBitmark) {
			listener.enterBitmark(this);
		}
	}
	// @Override
	public exitRule(listener: clozeParserListener): void {
		if (listener.exitBitmark) {
			listener.exitBitmark(this);
		}
	}
}


export class Bitmark_Context extends ParserRuleContext {
	public clozes(): ClozesContext {
		return this.getRuleContext(0, ClozesContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return clozeParser.RULE_bitmark_; }
	// @Override
	public enterRule(listener: clozeParserListener): void {
		if (listener.enterBitmark_) {
			listener.enterBitmark_(this);
		}
	}
	// @Override
	public exitRule(listener: clozeParserListener): void {
		if (listener.exitBitmark_) {
			listener.exitBitmark_(this);
		}
	}
}


export class ClozesContext extends ParserRuleContext {
	public cloze(): ClozeContext | undefined {
		return this.tryGetRuleContext(0, ClozeContext);
	}
	public cloze_instruction_grouped(): Cloze_instruction_groupedContext | undefined {
		return this.tryGetRuleContext(0, Cloze_instruction_groupedContext);
	}
	public cloze_solution_grouped(): Cloze_solution_groupedContext | undefined {
		return this.tryGetRuleContext(0, Cloze_solution_groupedContext);
	}
	public cloze_and_multiple_choice_text(): Cloze_and_multiple_choice_textContext | undefined {
		return this.tryGetRuleContext(0, Cloze_and_multiple_choice_textContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return clozeParser.RULE_clozes; }
	// @Override
	public enterRule(listener: clozeParserListener): void {
		if (listener.enterClozes) {
			listener.enterClozes(this);
		}
	}
	// @Override
	public exitRule(listener: clozeParserListener): void {
		if (listener.exitClozes) {
			listener.exitClozes(this);
		}
	}
}


export class BitElemContext extends ParserRuleContext {
	public LIST_LINE(): TerminalNode | undefined { return this.tryGetToken(clozeParser.LIST_LINE, 0); }
	public NOTBITMARK(): TerminalNode | undefined { return this.tryGetToken(clozeParser.NOTBITMARK, 0); }
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
	public nl(): NlContext[];
	public nl(i: number): NlContext;
	public nl(i?: number): NlContext | NlContext[] {
		if (i === undefined) {
			return this.getRuleContexts(NlContext);
		} else {
			return this.getRuleContext(i, NlContext);
		}
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
	public get ruleIndex(): number { return clozeParser.RULE_bitElem; }
	// @Override
	public enterRule(listener: clozeParserListener): void {
		if (listener.enterBitElem) {
			listener.enterBitElem(this);
		}
	}
	// @Override
	public exitRule(listener: clozeParserListener): void {
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
	public get ruleIndex(): number { return clozeParser.RULE_resource; }
	// @Override
	public enterRule(listener: clozeParserListener): void {
		if (listener.enterResource) {
			listener.enterResource(this);
		}
	}
	// @Override
	public exitRule(listener: clozeParserListener): void {
		if (listener.exitResource) {
			listener.exitResource(this);
		}
	}
}


export class ClozeContext extends ParserRuleContext {
	public BitCloze(): TerminalNode { return this.getToken(clozeParser.BitCloze, 0); }
	public format(): FormatContext {
		return this.getRuleContext(0, FormatContext);
	}
	public CL(): TerminalNode { return this.getToken(clozeParser.CL, 0); }
	public nl(): NlContext[];
	public nl(i: number): NlContext;
	public nl(i?: number): NlContext | NlContext[] {
		if (i === undefined) {
			return this.getRuleContexts(NlContext);
		} else {
			return this.getRuleContext(i, NlContext);
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
			return this.getTokens(clozeParser.NL);
		} else {
			return this.getToken(clozeParser.NL, i);
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
	public get ruleIndex(): number { return clozeParser.RULE_cloze; }
	// @Override
	public enterRule(listener: clozeParserListener): void {
		if (listener.enterCloze) {
			listener.enterCloze(this);
		}
	}
	// @Override
	public exitRule(listener: clozeParserListener): void {
		if (listener.exitCloze) {
			listener.exitCloze(this);
		}
	}
}


export class Cloze_instruction_groupedContext extends ParserRuleContext {
	public BitClozeinstgrp(): TerminalNode { return this.getToken(clozeParser.BitClozeinstgrp, 0); }
	public format(): FormatContext {
		return this.getRuleContext(0, FormatContext);
	}
	public CL(): TerminalNode { return this.getToken(clozeParser.CL, 0); }
	public nl(): NlContext[];
	public nl(i: number): NlContext;
	public nl(i?: number): NlContext | NlContext[] {
		if (i === undefined) {
			return this.getRuleContexts(NlContext);
		} else {
			return this.getRuleContext(i, NlContext);
		}
	}
	public item(): ItemContext | undefined {
		return this.tryGetRuleContext(0, ItemContext);
	}
	public instruction(): InstructionContext | undefined {
		return this.tryGetRuleContext(0, InstructionContext);
	}
	public NL(): TerminalNode[];
	public NL(i: number): TerminalNode;
	public NL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(clozeParser.NL);
		} else {
			return this.getToken(clozeParser.NL, i);
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
	public get ruleIndex(): number { return clozeParser.RULE_cloze_instruction_grouped; }
	// @Override
	public enterRule(listener: clozeParserListener): void {
		if (listener.enterCloze_instruction_grouped) {
			listener.enterCloze_instruction_grouped(this);
		}
	}
	// @Override
	public exitRule(listener: clozeParserListener): void {
		if (listener.exitCloze_instruction_grouped) {
			listener.exitCloze_instruction_grouped(this);
		}
	}
}


export class Cloze_solution_groupedContext extends ParserRuleContext {
	public BitClozesolgrp(): TerminalNode { return this.getToken(clozeParser.BitClozesolgrp, 0); }
	public format(): FormatContext {
		return this.getRuleContext(0, FormatContext);
	}
	public CL(): TerminalNode { return this.getToken(clozeParser.CL, 0); }
	public nl(): NlContext[];
	public nl(i: number): NlContext;
	public nl(i?: number): NlContext | NlContext[] {
		if (i === undefined) {
			return this.getRuleContexts(NlContext);
		} else {
			return this.getRuleContext(i, NlContext);
		}
	}
	public item(): ItemContext | undefined {
		return this.tryGetRuleContext(0, ItemContext);
	}
	public instruction(): InstructionContext | undefined {
		return this.tryGetRuleContext(0, InstructionContext);
	}
	public NL(): TerminalNode[];
	public NL(i: number): TerminalNode;
	public NL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(clozeParser.NL);
		} else {
			return this.getToken(clozeParser.NL, i);
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
	public get ruleIndex(): number { return clozeParser.RULE_cloze_solution_grouped; }
	// @Override
	public enterRule(listener: clozeParserListener): void {
		if (listener.enterCloze_solution_grouped) {
			listener.enterCloze_solution_grouped(this);
		}
	}
	// @Override
	public exitRule(listener: clozeParserListener): void {
		if (listener.exitCloze_solution_grouped) {
			listener.exitCloze_solution_grouped(this);
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
	public get ruleIndex(): number { return clozeParser.RULE_gap; }
	// @Override
	public enterRule(listener: clozeParserListener): void {
		if (listener.enterGap) {
			listener.enterGap(this);
		}
	}
	// @Override
	public exitRule(listener: clozeParserListener): void {
		if (listener.exitGap) {
			listener.exitGap(this);
		}
	}
}


export class Single_gapContext extends ParserRuleContext {
	public OPU(): TerminalNode { return this.getToken(clozeParser.OPU, 0); }
	public clnsp(): ClnspContext {
		return this.getRuleContext(0, ClnspContext);
	}
	public numeric(): NumericContext | undefined {
		return this.tryGetRuleContext(0, NumericContext);
	}
	public string(): StringContext | undefined {
		return this.tryGetRuleContext(0, StringContext);
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
	public get ruleIndex(): number { return clozeParser.RULE_single_gap; }
	// @Override
	public enterRule(listener: clozeParserListener): void {
		if (listener.enterSingle_gap) {
			listener.enterSingle_gap(this);
		}
	}
	// @Override
	public exitRule(listener: clozeParserListener): void {
		if (listener.exitSingle_gap) {
			listener.exitSingle_gap(this);
		}
	}
}


export class Cloze_and_multiple_choice_textContext extends ParserRuleContext {
	public BitClozeandmulti(): TerminalNode { return this.getToken(clozeParser.BitClozeandmulti, 0); }
	public format(): FormatContext {
		return this.getRuleContext(0, FormatContext);
	}
	public CL(): TerminalNode { return this.getToken(clozeParser.CL, 0); }
	public nl(): NlContext[];
	public nl(i: number): NlContext;
	public nl(i?: number): NlContext | NlContext[] {
		if (i === undefined) {
			return this.getRuleContexts(NlContext);
		} else {
			return this.getRuleContext(i, NlContext);
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
	public headed_inline_choices(): Headed_inline_choicesContext[];
	public headed_inline_choices(i: number): Headed_inline_choicesContext;
	public headed_inline_choices(i?: number): Headed_inline_choicesContext | Headed_inline_choicesContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Headed_inline_choicesContext);
		} else {
			return this.getRuleContext(i, Headed_inline_choicesContext);
		}
	}
	public NL(): TerminalNode[];
	public NL(i: number): TerminalNode;
	public NL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(clozeParser.NL);
		} else {
			return this.getToken(clozeParser.NL, i);
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
	public get ruleIndex(): number { return clozeParser.RULE_cloze_and_multiple_choice_text; }
	// @Override
	public enterRule(listener: clozeParserListener): void {
		if (listener.enterCloze_and_multiple_choice_text) {
			listener.enterCloze_and_multiple_choice_text(this);
		}
	}
	// @Override
	public exitRule(listener: clozeParserListener): void {
		if (listener.exitCloze_and_multiple_choice_text) {
			listener.exitCloze_and_multiple_choice_text(this);
		}
	}
}


export class Headed_inline_choicesContext extends ParserRuleContext {
	public inline_choices(): Inline_choicesContext {
		return this.getRuleContext(0, Inline_choicesContext);
	}
	public choice_head(): Choice_headContext | undefined {
		return this.tryGetRuleContext(0, Choice_headContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return clozeParser.RULE_headed_inline_choices; }
	// @Override
	public enterRule(listener: clozeParserListener): void {
		if (listener.enterHeaded_inline_choices) {
			listener.enterHeaded_inline_choices(this);
		}
	}
	// @Override
	public exitRule(listener: clozeParserListener): void {
		if (listener.exitHeaded_inline_choices) {
			listener.exitHeaded_inline_choices(this);
		}
	}
}


export class Choice_headContext extends ParserRuleContext {
	public OPS(): TerminalNode { return this.getToken(clozeParser.OPS, 0); }
	public s_and_w(): S_and_wContext {
		return this.getRuleContext(0, S_and_wContext);
	}
	public CL(): TerminalNode { return this.getToken(clozeParser.CL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return clozeParser.RULE_choice_head; }
	// @Override
	public enterRule(listener: clozeParserListener): void {
		if (listener.enterChoice_head) {
			listener.enterChoice_head(this);
		}
	}
	// @Override
	public exitRule(listener: clozeParserListener): void {
		if (listener.exitChoice_head) {
			listener.exitChoice_head(this);
		}
	}
}


export class Inline_choicesContext extends ParserRuleContext {
	public choice_plus(): Choice_plusContext[];
	public choice_plus(i: number): Choice_plusContext;
	public choice_plus(i?: number): Choice_plusContext | Choice_plusContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Choice_plusContext);
		} else {
			return this.getRuleContext(i, Choice_plusContext);
		}
	}
	public choice_minus(): Choice_minusContext[];
	public choice_minus(i: number): Choice_minusContext;
	public choice_minus(i?: number): Choice_minusContext | Choice_minusContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Choice_minusContext);
		} else {
			return this.getRuleContext(i, Choice_minusContext);
		}
	}
	public choice_star(): Choice_starContext[];
	public choice_star(i: number): Choice_starContext;
	public choice_star(i?: number): Choice_starContext | Choice_starContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Choice_starContext);
		} else {
			return this.getRuleContext(i, Choice_starContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return clozeParser.RULE_inline_choices; }
	// @Override
	public enterRule(listener: clozeParserListener): void {
		if (listener.enterInline_choices) {
			listener.enterInline_choices(this);
		}
	}
	// @Override
	public exitRule(listener: clozeParserListener): void {
		if (listener.exitInline_choices) {
			listener.exitInline_choices(this);
		}
	}
}


export class Choice_plusContext extends ParserRuleContext {
	public OPP(): TerminalNode { return this.getToken(clozeParser.OPP, 0); }
	public CL(): TerminalNode { return this.getToken(clozeParser.CL, 0); }
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
	public get ruleIndex(): number { return clozeParser.RULE_choice_plus; }
	// @Override
	public enterRule(listener: clozeParserListener): void {
		if (listener.enterChoice_plus) {
			listener.enterChoice_plus(this);
		}
	}
	// @Override
	public exitRule(listener: clozeParserListener): void {
		if (listener.exitChoice_plus) {
			listener.exitChoice_plus(this);
		}
	}
}


export class Choice_minusContext extends ParserRuleContext {
	public OPM(): TerminalNode { return this.getToken(clozeParser.OPM, 0); }
	public CL(): TerminalNode { return this.getToken(clozeParser.CL, 0); }
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
	public get ruleIndex(): number { return clozeParser.RULE_choice_minus; }
	// @Override
	public enterRule(listener: clozeParserListener): void {
		if (listener.enterChoice_minus) {
			listener.enterChoice_minus(this);
		}
	}
	// @Override
	public exitRule(listener: clozeParserListener): void {
		if (listener.exitChoice_minus) {
			listener.exitChoice_minus(this);
		}
	}
}


export class Choice_starContext extends ParserRuleContext {
	public OPR(): TerminalNode { return this.getToken(clozeParser.OPR, 0); }
	public CL(): TerminalNode { return this.getToken(clozeParser.CL, 0); }
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
	public get ruleIndex(): number { return clozeParser.RULE_choice_star; }
	// @Override
	public enterRule(listener: clozeParserListener): void {
		if (listener.enterChoice_star) {
			listener.enterChoice_star(this);
		}
	}
	// @Override
	public exitRule(listener: clozeParserListener): void {
		if (listener.exitChoice_star) {
			listener.exitChoice_star(this);
		}
	}
}


export class PimagebitContext extends ParserRuleContext {
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
	public OPATALT(): TerminalNode | undefined { return this.tryGetToken(clozeParser.OPATALT, 0); }
	public words(): WordsContext | undefined {
		return this.tryGetRuleContext(0, WordsContext);
	}
	public CL(): TerminalNode | undefined { return this.tryGetToken(clozeParser.CL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return clozeParser.RULE_pimagebit; }
	// @Override
	public enterRule(listener: clozeParserListener): void {
		if (listener.enterPimagebit) {
			listener.enterPimagebit(this);
		}
	}
	// @Override
	public exitRule(listener: clozeParserListener): void {
		if (listener.exitPimagebit) {
			listener.exitPimagebit(this);
		}
	}
}


export class AtpointContext extends ParserRuleContext {
	public AtPoints(): TerminalNode { return this.getToken(clozeParser.AtPoints, 0); }
	public NUMERIC(): TerminalNode { return this.getToken(clozeParser.NUMERIC, 0); }
	public CL(): TerminalNode { return this.getToken(clozeParser.CL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return clozeParser.RULE_atpoint; }
	// @Override
	public enterRule(listener: clozeParserListener): void {
		if (listener.enterAtpoint) {
			listener.enterAtpoint(this);
		}
	}
	// @Override
	public exitRule(listener: clozeParserListener): void {
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
			return this.getTokens(clozeParser.ColonText);
		} else {
			return this.getToken(clozeParser.ColonText, i);
		}
	}
	public ColonJson(): TerminalNode[];
	public ColonJson(i: number): TerminalNode;
	public ColonJson(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(clozeParser.ColonJson);
		} else {
			return this.getToken(clozeParser.ColonJson, i);
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
	public get ruleIndex(): number { return clozeParser.RULE_format; }
	// @Override
	public enterRule(listener: clozeParserListener): void {
		if (listener.enterFormat) {
			listener.enterFormat(this);
		}
	}
	// @Override
	public exitRule(listener: clozeParserListener): void {
		if (listener.exitFormat) {
			listener.exitFormat(this);
		}
	}
}


export class Resource_formatContext extends ParserRuleContext {
	public BitmarkMinus(): TerminalNode | undefined { return this.tryGetToken(clozeParser.BitmarkMinus, 0); }
	public BitmarkPlus(): TerminalNode | undefined { return this.tryGetToken(clozeParser.BitmarkPlus, 0); }
	public Prosemirror(): TerminalNode | undefined { return this.tryGetToken(clozeParser.Prosemirror, 0); }
	public Placeholder(): TerminalNode | undefined { return this.tryGetToken(clozeParser.Placeholder, 0); }
	public ColonJson(): TerminalNode | undefined { return this.tryGetToken(clozeParser.ColonJson, 0); }
	public AmpArticle(): TerminalNode | undefined { return this.tryGetToken(clozeParser.AmpArticle, 0); }
	public AmpDocument(): TerminalNode | undefined { return this.tryGetToken(clozeParser.AmpDocument, 0); }
	public AmpWebsite(): TerminalNode | undefined { return this.tryGetToken(clozeParser.AmpWebsite, 0); }
	public AmpStillImageFilm(): TerminalNode | undefined { return this.tryGetToken(clozeParser.AmpStillImageFilm, 0); }
	public AmpAudioLink(): TerminalNode | undefined { return this.tryGetToken(clozeParser.AmpAudioLink, 0); }
	public AmpImageLink(): TerminalNode | undefined { return this.tryGetToken(clozeParser.AmpImageLink, 0); }
	public AmpVideoLink(): TerminalNode | undefined { return this.tryGetToken(clozeParser.AmpVideoLink, 0); }
	public AmpArticleLink(): TerminalNode | undefined { return this.tryGetToken(clozeParser.AmpArticleLink, 0); }
	public AmpDocumentLink(): TerminalNode | undefined { return this.tryGetToken(clozeParser.AmpDocumentLink, 0); }
	public AmpAppLink(): TerminalNode | undefined { return this.tryGetToken(clozeParser.AmpAppLink, 0); }
	public AmpWebsiteLink(): TerminalNode | undefined { return this.tryGetToken(clozeParser.AmpWebsiteLink, 0); }
	public AmpStillImageFilmLink(): TerminalNode | undefined { return this.tryGetToken(clozeParser.AmpStillImageFilmLink, 0); }
	public AmpVideoEmbed(): TerminalNode | undefined { return this.tryGetToken(clozeParser.AmpVideoEmbed, 0); }
	public AmpAudioEmbed(): TerminalNode | undefined { return this.tryGetToken(clozeParser.AmpAudioEmbed, 0); }
	public AmpDocumentEmbed(): TerminalNode | undefined { return this.tryGetToken(clozeParser.AmpDocumentEmbed, 0); }
	public AmpStillImageFilmEmbed(): TerminalNode | undefined { return this.tryGetToken(clozeParser.AmpStillImageFilmEmbed, 0); }
	public AmpDocumentDownload(): TerminalNode | undefined { return this.tryGetToken(clozeParser.AmpDocumentDownload, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return clozeParser.RULE_resource_format; }
	// @Override
	public enterRule(listener: clozeParserListener): void {
		if (listener.enterResource_format) {
			listener.enterResource_format(this);
		}
	}
	// @Override
	public exitRule(listener: clozeParserListener): void {
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
	public AmpPdf(): TerminalNode | undefined { return this.tryGetToken(clozeParser.AmpPdf, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return clozeParser.RULE_resource_format_extra; }
	// @Override
	public enterRule(listener: clozeParserListener): void {
		if (listener.enterResource_format_extra) {
			listener.enterResource_format_extra(this);
		}
	}
	// @Override
	public exitRule(listener: clozeParserListener): void {
		if (listener.exitResource_format_extra) {
			listener.exitResource_format_extra(this);
		}
	}
}


export class Format2Context extends ParserRuleContext {
	public BitmarkMinus(): TerminalNode | undefined { return this.tryGetToken(clozeParser.BitmarkMinus, 0); }
	public BitmarkPlus(): TerminalNode | undefined { return this.tryGetToken(clozeParser.BitmarkPlus, 0); }
	public ColonText(): TerminalNode | undefined { return this.tryGetToken(clozeParser.ColonText, 0); }
	public ColonJson(): TerminalNode | undefined { return this.tryGetToken(clozeParser.ColonJson, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return clozeParser.RULE_format2; }
	// @Override
	public enterRule(listener: clozeParserListener): void {
		if (listener.enterFormat2) {
			listener.enterFormat2(this);
		}
	}
	// @Override
	public exitRule(listener: clozeParserListener): void {
		if (listener.exitFormat2) {
			listener.exitFormat2(this);
		}
	}
}


export class Image_formatContext extends ParserRuleContext {
	public AmpImage(): TerminalNode | undefined { return this.tryGetToken(clozeParser.AmpImage, 0); }
	public Image_type(): TerminalNode | undefined { return this.tryGetToken(clozeParser.Image_type, 0); }
	public DotArticleAtt(): TerminalNode | undefined { return this.tryGetToken(clozeParser.DotArticleAtt, 0); }
	public AmpImageLink(): TerminalNode | undefined { return this.tryGetToken(clozeParser.AmpImageLink, 0); }
	public AmpImageZoom(): TerminalNode | undefined { return this.tryGetToken(clozeParser.AmpImageZoom, 0); }
	public AmpImageWAudio(): TerminalNode | undefined { return this.tryGetToken(clozeParser.AmpImageWAudio, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return clozeParser.RULE_image_format; }
	// @Override
	public enterRule(listener: clozeParserListener): void {
		if (listener.enterImage_format) {
			listener.enterImage_format(this);
		}
	}
	// @Override
	public exitRule(listener: clozeParserListener): void {
		if (listener.exitImage_format) {
			listener.exitImage_format(this);
		}
	}
}


export class Video_formatContext extends ParserRuleContext {
	public AmpVideo(): TerminalNode | undefined { return this.tryGetToken(clozeParser.AmpVideo, 0); }
	public AmpVideoLink(): TerminalNode | undefined { return this.tryGetToken(clozeParser.AmpVideoLink, 0); }
	public AmpVideoEmbed(): TerminalNode | undefined { return this.tryGetToken(clozeParser.AmpVideoEmbed, 0); }
	public COLON(): TerminalNode | undefined { return this.tryGetToken(clozeParser.COLON, 0); }
	public Video_type(): TerminalNode | undefined { return this.tryGetToken(clozeParser.Video_type, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return clozeParser.RULE_video_format; }
	// @Override
	public enterRule(listener: clozeParserListener): void {
		if (listener.enterVideo_format) {
			listener.enterVideo_format(this);
		}
	}
	// @Override
	public exitRule(listener: clozeParserListener): void {
		if (listener.exitVideo_format) {
			listener.exitVideo_format(this);
		}
	}
}


export class Article_formatContext extends ParserRuleContext {
	public AmpArticle(): TerminalNode | undefined { return this.tryGetToken(clozeParser.AmpArticle, 0); }
	public AmpArticleLink(): TerminalNode | undefined { return this.tryGetToken(clozeParser.AmpArticleLink, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return clozeParser.RULE_article_format; }
	// @Override
	public enterRule(listener: clozeParserListener): void {
		if (listener.enterArticle_format) {
			listener.enterArticle_format(this);
		}
	}
	// @Override
	public exitRule(listener: clozeParserListener): void {
		if (listener.exitArticle_format) {
			listener.exitArticle_format(this);
		}
	}
}


export class Document_formatContext extends ParserRuleContext {
	public AmpDocument(): TerminalNode | undefined { return this.tryGetToken(clozeParser.AmpDocument, 0); }
	public AmpDocumentLink(): TerminalNode | undefined { return this.tryGetToken(clozeParser.AmpDocumentLink, 0); }
	public AmpDocumentDownload(): TerminalNode | undefined { return this.tryGetToken(clozeParser.AmpDocumentDownload, 0); }
	public AmpDocumentEmbed(): TerminalNode | undefined { return this.tryGetToken(clozeParser.AmpDocumentEmbed, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return clozeParser.RULE_document_format; }
	// @Override
	public enterRule(listener: clozeParserListener): void {
		if (listener.enterDocument_format) {
			listener.enterDocument_format(this);
		}
	}
	// @Override
	public exitRule(listener: clozeParserListener): void {
		if (listener.exitDocument_format) {
			listener.exitDocument_format(this);
		}
	}
}


export class App_formatContext extends ParserRuleContext {
	public AmpApp(): TerminalNode | undefined { return this.tryGetToken(clozeParser.AmpApp, 0); }
	public AmpAppLink(): TerminalNode | undefined { return this.tryGetToken(clozeParser.AmpAppLink, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return clozeParser.RULE_app_format; }
	// @Override
	public enterRule(listener: clozeParserListener): void {
		if (listener.enterApp_format) {
			listener.enterApp_format(this);
		}
	}
	// @Override
	public exitRule(listener: clozeParserListener): void {
		if (listener.exitApp_format) {
			listener.exitApp_format(this);
		}
	}
}


export class Website_formatContext extends ParserRuleContext {
	public AmpWebsite(): TerminalNode | undefined { return this.tryGetToken(clozeParser.AmpWebsite, 0); }
	public AmpWebsiteLink(): TerminalNode | undefined { return this.tryGetToken(clozeParser.AmpWebsiteLink, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return clozeParser.RULE_website_format; }
	// @Override
	public enterRule(listener: clozeParserListener): void {
		if (listener.enterWebsite_format) {
			listener.enterWebsite_format(this);
		}
	}
	// @Override
	public exitRule(listener: clozeParserListener): void {
		if (listener.exitWebsite_format) {
			listener.exitWebsite_format(this);
		}
	}
}


export class Stillimagefilm_formatContext extends ParserRuleContext {
	public AmpStillImageFilm(): TerminalNode | undefined { return this.tryGetToken(clozeParser.AmpStillImageFilm, 0); }
	public AmpStillImageFilmLink(): TerminalNode | undefined { return this.tryGetToken(clozeParser.AmpStillImageFilmLink, 0); }
	public AmpStillImageFilmEmbed(): TerminalNode | undefined { return this.tryGetToken(clozeParser.AmpStillImageFilmEmbed, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return clozeParser.RULE_stillimagefilm_format; }
	// @Override
	public enterRule(listener: clozeParserListener): void {
		if (listener.enterStillimagefilm_format) {
			listener.enterStillimagefilm_format(this);
		}
	}
	// @Override
	public exitRule(listener: clozeParserListener): void {
		if (listener.exitStillimagefilm_format) {
			listener.exitStillimagefilm_format(this);
		}
	}
}


export class Op_article_formatContext extends ParserRuleContext {
	public OpAmpArticleLink(): TerminalNode | undefined { return this.tryGetToken(clozeParser.OpAmpArticleLink, 0); }
	public OpAmpArticle(): TerminalNode | undefined { return this.tryGetToken(clozeParser.OpAmpArticle, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return clozeParser.RULE_op_article_format; }
	// @Override
	public enterRule(listener: clozeParserListener): void {
		if (listener.enterOp_article_format) {
			listener.enterOp_article_format(this);
		}
	}
	// @Override
	public exitRule(listener: clozeParserListener): void {
		if (listener.exitOp_article_format) {
			listener.exitOp_article_format(this);
		}
	}
}


export class Op_document_formatContext extends ParserRuleContext {
	public OpAmpDocumentLink(): TerminalNode | undefined { return this.tryGetToken(clozeParser.OpAmpDocumentLink, 0); }
	public OpAmpDocument(): TerminalNode | undefined { return this.tryGetToken(clozeParser.OpAmpDocument, 0); }
	public OpAmpDocumentDownload(): TerminalNode | undefined { return this.tryGetToken(clozeParser.OpAmpDocumentDownload, 0); }
	public OpAmpDocumentEmbed(): TerminalNode | undefined { return this.tryGetToken(clozeParser.OpAmpDocumentEmbed, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return clozeParser.RULE_op_document_format; }
	// @Override
	public enterRule(listener: clozeParserListener): void {
		if (listener.enterOp_document_format) {
			listener.enterOp_document_format(this);
		}
	}
	// @Override
	public exitRule(listener: clozeParserListener): void {
		if (listener.exitOp_document_format) {
			listener.exitOp_document_format(this);
		}
	}
}


export class Op_app_formatContext extends ParserRuleContext {
	public OpAmpApp(): TerminalNode | undefined { return this.tryGetToken(clozeParser.OpAmpApp, 0); }
	public OpAmpAppLink(): TerminalNode | undefined { return this.tryGetToken(clozeParser.OpAmpAppLink, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return clozeParser.RULE_op_app_format; }
	// @Override
	public enterRule(listener: clozeParserListener): void {
		if (listener.enterOp_app_format) {
			listener.enterOp_app_format(this);
		}
	}
	// @Override
	public exitRule(listener: clozeParserListener): void {
		if (listener.exitOp_app_format) {
			listener.exitOp_app_format(this);
		}
	}
}


export class Op_website_formatContext extends ParserRuleContext {
	public OpAmpWebsite(): TerminalNode | undefined { return this.tryGetToken(clozeParser.OpAmpWebsite, 0); }
	public OpAmpWebsiteLink(): TerminalNode | undefined { return this.tryGetToken(clozeParser.OpAmpWebsiteLink, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return clozeParser.RULE_op_website_format; }
	// @Override
	public enterRule(listener: clozeParserListener): void {
		if (listener.enterOp_website_format) {
			listener.enterOp_website_format(this);
		}
	}
	// @Override
	public exitRule(listener: clozeParserListener): void {
		if (listener.exitOp_website_format) {
			listener.exitOp_website_format(this);
		}
	}
}


export class Op_video_formatContext extends ParserRuleContext {
	public OpAmpVideo(): TerminalNode | undefined { return this.tryGetToken(clozeParser.OpAmpVideo, 0); }
	public COLON(): TerminalNode | undefined { return this.tryGetToken(clozeParser.COLON, 0); }
	public Video_type(): TerminalNode | undefined { return this.tryGetToken(clozeParser.Video_type, 0); }
	public OpAmpVideoLink(): TerminalNode | undefined { return this.tryGetToken(clozeParser.OpAmpVideoLink, 0); }
	public OpAmpVideoEmbed(): TerminalNode | undefined { return this.tryGetToken(clozeParser.OpAmpVideoEmbed, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return clozeParser.RULE_op_video_format; }
	// @Override
	public enterRule(listener: clozeParserListener): void {
		if (listener.enterOp_video_format) {
			listener.enterOp_video_format(this);
		}
	}
	// @Override
	public exitRule(listener: clozeParserListener): void {
		if (listener.exitOp_video_format) {
			listener.exitOp_video_format(this);
		}
	}
}


export class Op_stillimagefilm_formatContext extends ParserRuleContext {
	public OpAmpStillImageFilm(): TerminalNode | undefined { return this.tryGetToken(clozeParser.OpAmpStillImageFilm, 0); }
	public OpAmpStillImageFilmLink(): TerminalNode | undefined { return this.tryGetToken(clozeParser.OpAmpStillImageFilmLink, 0); }
	public OpAmpStillImageFilmEmbed(): TerminalNode | undefined { return this.tryGetToken(clozeParser.OpAmpStillImageFilmEmbed, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return clozeParser.RULE_op_stillimagefilm_format; }
	// @Override
	public enterRule(listener: clozeParserListener): void {
		if (listener.enterOp_stillimagefilm_format) {
			listener.enterOp_stillimagefilm_format(this);
		}
	}
	// @Override
	public exitRule(listener: clozeParserListener): void {
		if (listener.exitOp_stillimagefilm_format) {
			listener.exitOp_stillimagefilm_format(this);
		}
	}
}


export class ArticlebitContext extends ParserRuleContext {
	public op_article_format(): Op_article_formatContext | undefined {
		return this.tryGetRuleContext(0, Op_article_formatContext);
	}
	public COLON(): TerminalNode | undefined { return this.tryGetToken(clozeParser.COLON, 0); }
	public url(): UrlContext | undefined {
		return this.tryGetRuleContext(0, UrlContext);
	}
	public CL(): TerminalNode | undefined { return this.tryGetToken(clozeParser.CL, 0); }
	public ArticleText(): TerminalNode | undefined { return this.tryGetToken(clozeParser.ArticleText, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return clozeParser.RULE_articlebit; }
	// @Override
	public enterRule(listener: clozeParserListener): void {
		if (listener.enterArticlebit) {
			listener.enterArticlebit(this);
		}
	}
	// @Override
	public exitRule(listener: clozeParserListener): void {
		if (listener.exitArticlebit) {
			listener.exitArticlebit(this);
		}
	}
}


export class DocumentbitContext extends ParserRuleContext {
	public op_document_format(): Op_document_formatContext {
		return this.getRuleContext(0, Op_document_formatContext);
	}
	public COLON(): TerminalNode { return this.getToken(clozeParser.COLON, 0); }
	public url(): UrlContext {
		return this.getRuleContext(0, UrlContext);
	}
	public CL(): TerminalNode[];
	public CL(i: number): TerminalNode;
	public CL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(clozeParser.CL);
		} else {
			return this.getToken(clozeParser.CL, i);
		}
	}
	public OPATALT(): TerminalNode | undefined { return this.tryGetToken(clozeParser.OPATALT, 0); }
	public words(): WordsContext | undefined {
		return this.tryGetRuleContext(0, WordsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return clozeParser.RULE_documentbit; }
	// @Override
	public enterRule(listener: clozeParserListener): void {
		if (listener.enterDocumentbit) {
			listener.enterDocumentbit(this);
		}
	}
	// @Override
	public exitRule(listener: clozeParserListener): void {
		if (listener.exitDocumentbit) {
			listener.exitDocumentbit(this);
		}
	}
}


export class WebsitebitContext extends ParserRuleContext {
	public op_website_format(): Op_website_formatContext {
		return this.getRuleContext(0, Op_website_formatContext);
	}
	public COLON(): TerminalNode { return this.getToken(clozeParser.COLON, 0); }
	public url(): UrlContext {
		return this.getRuleContext(0, UrlContext);
	}
	public CL(): TerminalNode[];
	public CL(i: number): TerminalNode;
	public CL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(clozeParser.CL);
		} else {
			return this.getToken(clozeParser.CL, i);
		}
	}
	public OPATALT(): TerminalNode | undefined { return this.tryGetToken(clozeParser.OPATALT, 0); }
	public words(): WordsContext | undefined {
		return this.tryGetRuleContext(0, WordsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return clozeParser.RULE_websitebit; }
	// @Override
	public enterRule(listener: clozeParserListener): void {
		if (listener.enterWebsitebit) {
			listener.enterWebsitebit(this);
		}
	}
	// @Override
	public exitRule(listener: clozeParserListener): void {
		if (listener.exitWebsitebit) {
			listener.exitWebsitebit(this);
		}
	}
}


export class AppbitContext extends ParserRuleContext {
	public op_app_format(): Op_app_formatContext {
		return this.getRuleContext(0, Op_app_formatContext);
	}
	public COLON(): TerminalNode { return this.getToken(clozeParser.COLON, 0); }
	public CL(): TerminalNode[];
	public CL(i: number): TerminalNode;
	public CL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(clozeParser.CL);
		} else {
			return this.getToken(clozeParser.CL, i);
		}
	}
	public url(): UrlContext | undefined {
		return this.tryGetRuleContext(0, UrlContext);
	}
	public telephone(): TelephoneContext | undefined {
		return this.tryGetRuleContext(0, TelephoneContext);
	}
	public OPATALT(): TerminalNode | undefined { return this.tryGetToken(clozeParser.OPATALT, 0); }
	public words(): WordsContext | undefined {
		return this.tryGetRuleContext(0, WordsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return clozeParser.RULE_appbit; }
	// @Override
	public enterRule(listener: clozeParserListener): void {
		if (listener.enterAppbit) {
			listener.enterAppbit(this);
		}
	}
	// @Override
	public exitRule(listener: clozeParserListener): void {
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
	public get ruleIndex(): number { return clozeParser.RULE_stillimagefilmbit; }
	// @Override
	public enterRule(listener: clozeParserListener): void {
		if (listener.enterStillimagefilmbit) {
			listener.enterStillimagefilmbit(this);
		}
	}
	// @Override
	public exitRule(listener: clozeParserListener): void {
		if (listener.exitStillimagefilmbit) {
			listener.exitStillimagefilmbit(this);
		}
	}
}


export class Stillimg_oneContext extends ParserRuleContext {
	public op_stillimagefilm_format(): Op_stillimagefilm_formatContext {
		return this.getRuleContext(0, Op_stillimagefilm_formatContext);
	}
	public COLON(): TerminalNode { return this.getToken(clozeParser.COLON, 0); }
	public url(): UrlContext {
		return this.getRuleContext(0, UrlContext);
	}
	public CL(): TerminalNode { return this.getToken(clozeParser.CL, 0); }
	public S(): TerminalNode[];
	public S(i: number): TerminalNode;
	public S(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(clozeParser.S);
		} else {
			return this.getToken(clozeParser.S, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return clozeParser.RULE_stillimg_one; }
	// @Override
	public enterRule(listener: clozeParserListener): void {
		if (listener.enterStillimg_one) {
			listener.enterStillimg_one(this);
		}
	}
	// @Override
	public exitRule(listener: clozeParserListener): void {
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
	public get ruleIndex(): number { return clozeParser.RULE_videobit; }
	// @Override
	public enterRule(listener: clozeParserListener): void {
		if (listener.enterVideobit) {
			listener.enterVideobit(this);
		}
	}
	// @Override
	public exitRule(listener: clozeParserListener): void {
		if (listener.exitVideobit) {
			listener.exitVideobit(this);
		}
	}
}


export class Video_oneContext extends ParserRuleContext {
	public op_video_format(): Op_video_formatContext {
		return this.getRuleContext(0, Op_video_formatContext);
	}
	public COLON(): TerminalNode { return this.getToken(clozeParser.COLON, 0); }
	public url(): UrlContext {
		return this.getRuleContext(0, UrlContext);
	}
	public CL(): TerminalNode[];
	public CL(i: number): TerminalNode;
	public CL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(clozeParser.CL);
		} else {
			return this.getToken(clozeParser.CL, i);
		}
	}
	public OPATALT(): TerminalNode | undefined { return this.tryGetToken(clozeParser.OPATALT, 0); }
	public words(): WordsContext | undefined {
		return this.tryGetRuleContext(0, WordsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return clozeParser.RULE_video_one; }
	// @Override
	public enterRule(listener: clozeParserListener): void {
		if (listener.enterVideo_one) {
			listener.enterVideo_one(this);
		}
	}
	// @Override
	public exitRule(listener: clozeParserListener): void {
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
	public NL(): TerminalNode | undefined { return this.tryGetToken(clozeParser.NL, 0); }
	public ShowInIndex(): TerminalNode | undefined { return this.tryGetToken(clozeParser.ShowInIndex, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return clozeParser.RULE_imagebit; }
	// @Override
	public enterRule(listener: clozeParserListener): void {
		if (listener.enterImagebit) {
			listener.enterImagebit(this);
		}
	}
	// @Override
	public exitRule(listener: clozeParserListener): void {
		if (listener.exitImagebit) {
			listener.exitImagebit(this);
		}
	}
}


export class Image_oneContext extends ParserRuleContext {
	public op_image_format(): Op_image_formatContext {
		return this.getRuleContext(0, Op_image_formatContext);
	}
	public COLON(): TerminalNode { return this.getToken(clozeParser.COLON, 0); }
	public url(): UrlContext {
		return this.getRuleContext(0, UrlContext);
	}
	public CL(): TerminalNode { return this.getToken(clozeParser.CL, 0); }
	public S(): TerminalNode[];
	public S(i: number): TerminalNode;
	public S(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(clozeParser.S);
		} else {
			return this.getToken(clozeParser.S, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return clozeParser.RULE_image_one; }
	// @Override
	public enterRule(listener: clozeParserListener): void {
		if (listener.enterImage_one) {
			listener.enterImage_one(this);
		}
	}
	// @Override
	public exitRule(listener: clozeParserListener): void {
		if (listener.exitImage_one) {
			listener.exitImage_one(this);
		}
	}
}


export class Op_image_formatContext extends ParserRuleContext {
	public OpAmpImage(): TerminalNode | undefined { return this.tryGetToken(clozeParser.OpAmpImage, 0); }
	public Image_type(): TerminalNode | undefined { return this.tryGetToken(clozeParser.Image_type, 0); }
	public DotArticleAtt(): TerminalNode | undefined { return this.tryGetToken(clozeParser.DotArticleAtt, 0); }
	public OpAmpImageLink(): TerminalNode | undefined { return this.tryGetToken(clozeParser.OpAmpImageLink, 0); }
	public OpAmpImageZoom(): TerminalNode | undefined { return this.tryGetToken(clozeParser.OpAmpImageZoom, 0); }
	public OpAmpImageWAudio(): TerminalNode | undefined { return this.tryGetToken(clozeParser.OpAmpImageWAudio, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return clozeParser.RULE_op_image_format; }
	// @Override
	public enterRule(listener: clozeParserListener): void {
		if (listener.enterOp_image_format) {
			listener.enterOp_image_format(this);
		}
	}
	// @Override
	public exitRule(listener: clozeParserListener): void {
		if (listener.exitOp_image_format) {
			listener.exitOp_image_format(this);
		}
	}
}


export class Image_chainedContext extends ParserRuleContext {
	public AtSrc(): TerminalNode | undefined { return this.tryGetToken(clozeParser.AtSrc, 0); }
	public COLON(): TerminalNode | undefined { return this.tryGetToken(clozeParser.COLON, 0); }
	public url(): UrlContext | undefined {
		return this.tryGetRuleContext(0, UrlContext);
	}
	public CL(): TerminalNode { return this.getToken(clozeParser.CL, 0); }
	public NUMERIC(): TerminalNode | undefined { return this.tryGetToken(clozeParser.NUMERIC, 0); }
	public AtWidth(): TerminalNode | undefined { return this.tryGetToken(clozeParser.AtWidth, 0); }
	public AtHeight(): TerminalNode | undefined { return this.tryGetToken(clozeParser.AtHeight, 0); }
	public OPATALT(): TerminalNode | undefined { return this.tryGetToken(clozeParser.OPATALT, 0); }
	public OpAtCaption(): TerminalNode | undefined { return this.tryGetToken(clozeParser.OpAtCaption, 0); }
	public OpAtSearch(): TerminalNode | undefined { return this.tryGetToken(clozeParser.OpAtSearch, 0); }
	public OpAtLicense(): TerminalNode | undefined { return this.tryGetToken(clozeParser.OpAtLicense, 0); }
	public OpAtCopyright(): TerminalNode | undefined { return this.tryGetToken(clozeParser.OpAtCopyright, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return clozeParser.RULE_image_chained; }
	// @Override
	public enterRule(listener: clozeParserListener): void {
		if (listener.enterImage_chained) {
			listener.enterImage_chained(this);
		}
	}
	// @Override
	public exitRule(listener: clozeParserListener): void {
		if (listener.exitImage_chained) {
			listener.exitImage_chained(this);
		}
	}
}


export class Image_chained4matchContext extends ParserRuleContext {
	public AtSrc(): TerminalNode | undefined { return this.tryGetToken(clozeParser.AtSrc, 0); }
	public COLON(): TerminalNode | undefined { return this.tryGetToken(clozeParser.COLON, 0); }
	public url(): UrlContext | undefined {
		return this.tryGetRuleContext(0, UrlContext);
	}
	public CL(): TerminalNode { return this.getToken(clozeParser.CL, 0); }
	public NUMERIC(): TerminalNode | undefined { return this.tryGetToken(clozeParser.NUMERIC, 0); }
	public AtWidth(): TerminalNode | undefined { return this.tryGetToken(clozeParser.AtWidth, 0); }
	public AtHeight(): TerminalNode | undefined { return this.tryGetToken(clozeParser.AtHeight, 0); }
	public OPATALT(): TerminalNode | undefined { return this.tryGetToken(clozeParser.OPATALT, 0); }
	public OpAtCaption(): TerminalNode | undefined { return this.tryGetToken(clozeParser.OpAtCaption, 0); }
	public OpAtSearch(): TerminalNode | undefined { return this.tryGetToken(clozeParser.OpAtSearch, 0); }
	public OpAtLicense(): TerminalNode | undefined { return this.tryGetToken(clozeParser.OpAtLicense, 0); }
	public OpAtCopyright(): TerminalNode | undefined { return this.tryGetToken(clozeParser.OpAtCopyright, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return clozeParser.RULE_image_chained4match; }
	// @Override
	public enterRule(listener: clozeParserListener): void {
		if (listener.enterImage_chained4match) {
			listener.enterImage_chained4match(this);
		}
	}
	// @Override
	public exitRule(listener: clozeParserListener): void {
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
	public get ruleIndex(): number { return clozeParser.RULE_audiobit; }
	// @Override
	public enterRule(listener: clozeParserListener): void {
		if (listener.enterAudiobit) {
			listener.enterAudiobit(this);
		}
	}
	// @Override
	public exitRule(listener: clozeParserListener): void {
		if (listener.exitAudiobit) {
			listener.exitAudiobit(this);
		}
	}
}


export class Audio_oneContext extends ParserRuleContext {
	public op_audio_format(): Op_audio_formatContext {
		return this.getRuleContext(0, Op_audio_formatContext);
	}
	public COLON(): TerminalNode { return this.getToken(clozeParser.COLON, 0); }
	public url(): UrlContext {
		return this.getRuleContext(0, UrlContext);
	}
	public CL(): TerminalNode[];
	public CL(i: number): TerminalNode;
	public CL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(clozeParser.CL);
		} else {
			return this.getToken(clozeParser.CL, i);
		}
	}
	public OPATALT(): TerminalNode | undefined { return this.tryGetToken(clozeParser.OPATALT, 0); }
	public words(): WordsContext | undefined {
		return this.tryGetRuleContext(0, WordsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return clozeParser.RULE_audio_one; }
	// @Override
	public enterRule(listener: clozeParserListener): void {
		if (listener.enterAudio_one) {
			listener.enterAudio_one(this);
		}
	}
	// @Override
	public exitRule(listener: clozeParserListener): void {
		if (listener.exitAudio_one) {
			listener.exitAudio_one(this);
		}
	}
}


export class Audio_formatContext extends ParserRuleContext {
	public AmpAudio(): TerminalNode | undefined { return this.tryGetToken(clozeParser.AmpAudio, 0); }
	public COLON(): TerminalNode | undefined { return this.tryGetToken(clozeParser.COLON, 0); }
	public Audio_type(): TerminalNode | undefined { return this.tryGetToken(clozeParser.Audio_type, 0); }
	public AmpAudioLink(): TerminalNode | undefined { return this.tryGetToken(clozeParser.AmpAudioLink, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return clozeParser.RULE_audio_format; }
	// @Override
	public enterRule(listener: clozeParserListener): void {
		if (listener.enterAudio_format) {
			listener.enterAudio_format(this);
		}
	}
	// @Override
	public exitRule(listener: clozeParserListener): void {
		if (listener.exitAudio_format) {
			listener.exitAudio_format(this);
		}
	}
}


export class Op_audio_formatContext extends ParserRuleContext {
	public OpAmpAudio(): TerminalNode | undefined { return this.tryGetToken(clozeParser.OpAmpAudio, 0); }
	public COLON(): TerminalNode | undefined { return this.tryGetToken(clozeParser.COLON, 0); }
	public Audio_type(): TerminalNode | undefined { return this.tryGetToken(clozeParser.Audio_type, 0); }
	public OpAmpAudioLink(): TerminalNode | undefined { return this.tryGetToken(clozeParser.OpAmpAudioLink, 0); }
	public OpAmpAudioEmbed(): TerminalNode | undefined { return this.tryGetToken(clozeParser.OpAmpAudioEmbed, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return clozeParser.RULE_op_audio_format; }
	// @Override
	public enterRule(listener: clozeParserListener): void {
		if (listener.enterOp_audio_format) {
			listener.enterOp_audio_format(this);
		}
	}
	// @Override
	public exitRule(listener: clozeParserListener): void {
		if (listener.exitOp_audio_format) {
			listener.exitOp_audio_format(this);
		}
	}
}


export class Resource_chainedContext extends ParserRuleContext {
	public COLON(): TerminalNode | undefined { return this.tryGetToken(clozeParser.COLON, 0); }
	public CL(): TerminalNode { return this.getToken(clozeParser.CL, 0); }
	public OPA(): TerminalNode | undefined { return this.tryGetToken(clozeParser.OPA, 0); }
	public s_and_w(): S_and_wContext[];
	public s_and_w(i: number): S_and_wContext;
	public s_and_w(i?: number): S_and_wContext | S_and_wContext[] {
		if (i === undefined) {
			return this.getRuleContexts(S_and_wContext);
		} else {
			return this.getRuleContext(i, S_and_wContext);
		}
	}
	public AtSrc(): TerminalNode | undefined { return this.tryGetToken(clozeParser.AtSrc, 0); }
	public S(): TerminalNode[];
	public S(i: number): TerminalNode;
	public S(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(clozeParser.S);
		} else {
			return this.getToken(clozeParser.S, i);
		}
	}
	public NL(): TerminalNode[];
	public NL(i: number): TerminalNode;
	public NL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(clozeParser.NL);
		} else {
			return this.getToken(clozeParser.NL, i);
		}
	}
	public NUMERIC(): TerminalNode | undefined { return this.tryGetToken(clozeParser.NUMERIC, 0); }
	public AtWidth(): TerminalNode | undefined { return this.tryGetToken(clozeParser.AtWidth, 0); }
	public AtHeight(): TerminalNode | undefined { return this.tryGetToken(clozeParser.AtHeight, 0); }
	public OPATALT(): TerminalNode | undefined { return this.tryGetToken(clozeParser.OPATALT, 0); }
	public OpAtCaption(): TerminalNode | undefined { return this.tryGetToken(clozeParser.OpAtCaption, 0); }
	public OpAtSearch(): TerminalNode | undefined { return this.tryGetToken(clozeParser.OpAtSearch, 0); }
	public OpAtLicense(): TerminalNode | undefined { return this.tryGetToken(clozeParser.OpAtLicense, 0); }
	public OpAtCopyright(): TerminalNode | undefined { return this.tryGetToken(clozeParser.OpAtCopyright, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return clozeParser.RULE_resource_chained; }
	// @Override
	public enterRule(listener: clozeParserListener): void {
		if (listener.enterResource_chained) {
			listener.enterResource_chained(this);
		}
	}
	// @Override
	public exitRule(listener: clozeParserListener): void {
		if (listener.exitResource_chained) {
			listener.exitResource_chained(this);
		}
	}
}


export class TelephoneContext extends ParserRuleContext {
	public TEL(): TerminalNode { return this.getToken(clozeParser.TEL, 0); }
	public PLUS(): TerminalNode { return this.getToken(clozeParser.PLUS, 0); }
	public NUMERIC(): TerminalNode { return this.getToken(clozeParser.NUMERIC, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return clozeParser.RULE_telephone; }
	// @Override
	public enterRule(listener: clozeParserListener): void {
		if (listener.enterTelephone) {
			listener.enterTelephone(this);
		}
	}
	// @Override
	public exitRule(listener: clozeParserListener): void {
		if (listener.exitTelephone) {
			listener.exitTelephone(this);
		}
	}
}


export class UrlContext extends ParserRuleContext {
	public URL(): TerminalNode { return this.getToken(clozeParser.URL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return clozeParser.RULE_url; }
	// @Override
	public enterRule(listener: clozeParserListener): void {
		if (listener.enterUrl) {
			listener.enterUrl(this);
		}
	}
	// @Override
	public exitRule(listener: clozeParserListener): void {
		if (listener.exitUrl) {
			listener.exitUrl(this);
		}
	}
}


export class ItemContext extends ParserRuleContext {
	public OPC(): TerminalNode { return this.getToken(clozeParser.OPC, 0); }
	public CL(): TerminalNode { return this.getToken(clozeParser.CL, 0); }
	public lead(): LeadContext | undefined {
		return this.tryGetRuleContext(0, LeadContext);
	}
	public S(): TerminalNode[];
	public S(i: number): TerminalNode;
	public S(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(clozeParser.S);
		} else {
			return this.getToken(clozeParser.S, i);
		}
	}
	public s_and_w(): S_and_wContext | undefined {
		return this.tryGetRuleContext(0, S_and_wContext);
	}
	public COLON(): TerminalNode[];
	public COLON(i: number): TerminalNode;
	public COLON(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(clozeParser.COLON);
		} else {
			return this.getToken(clozeParser.COLON, i);
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
	public get ruleIndex(): number { return clozeParser.RULE_item; }
	// @Override
	public enterRule(listener: clozeParserListener): void {
		if (listener.enterItem) {
			listener.enterItem(this);
		}
	}
	// @Override
	public exitRule(listener: clozeParserListener): void {
		if (listener.exitItem) {
			listener.exitItem(this);
		}
	}
}


export class LeadContext extends ParserRuleContext {
	public OPC(): TerminalNode { return this.getToken(clozeParser.OPC, 0); }
	public s_and_w(): S_and_wContext {
		return this.getRuleContext(0, S_and_wContext);
	}
	public CL(): TerminalNode { return this.getToken(clozeParser.CL, 0); }
	public COLON(): TerminalNode[];
	public COLON(i: number): TerminalNode;
	public COLON(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(clozeParser.COLON);
		} else {
			return this.getToken(clozeParser.COLON, i);
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
	public get ruleIndex(): number { return clozeParser.RULE_lead; }
	// @Override
	public enterRule(listener: clozeParserListener): void {
		if (listener.enterLead) {
			listener.enterLead(this);
		}
	}
	// @Override
	public exitRule(listener: clozeParserListener): void {
		if (listener.exitLead) {
			listener.exitLead(this);
		}
	}
}


export class AnglerefContext extends ParserRuleContext {
	public OPRANGLES(): TerminalNode | undefined { return this.tryGetToken(clozeParser.OPRANGLES, 0); }
	public CL(): TerminalNode { return this.getToken(clozeParser.CL, 0); }
	public s_and_w(): S_and_wContext | undefined {
		return this.tryGetRuleContext(0, S_and_wContext);
	}
	public OPRANGLEL(): TerminalNode | undefined { return this.tryGetToken(clozeParser.OPRANGLEL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return clozeParser.RULE_angleref; }
	// @Override
	public enterRule(listener: clozeParserListener): void {
		if (listener.enterAngleref) {
			listener.enterAngleref(this);
		}
	}
	// @Override
	public exitRule(listener: clozeParserListener): void {
		if (listener.exitAngleref) {
			listener.exitAngleref(this);
		}
	}
}


export class ExampleContext extends ParserRuleContext {
	public AtExamplecl(): TerminalNode | undefined { return this.tryGetToken(clozeParser.AtExamplecl, 0); }
	public AtExampleWithStr(): TerminalNode | undefined { return this.tryGetToken(clozeParser.AtExampleWithStr, 0); }
	public AtExamplecol(): TerminalNode | undefined { return this.tryGetToken(clozeParser.AtExamplecol, 0); }
	public EOF(): TerminalNode | undefined { return this.tryGetToken(clozeParser.EOF, 0); }
	public SENTENCE(): TerminalNode | undefined { return this.tryGetToken(clozeParser.SENTENCE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return clozeParser.RULE_example; }
	// @Override
	public enterRule(listener: clozeParserListener): void {
		if (listener.enterExample) {
			listener.enterExample(this);
		}
	}
	// @Override
	public exitRule(listener: clozeParserListener): void {
		if (listener.exitExample) {
			listener.exitExample(this);
		}
	}
}


export class Bracketed_textContext extends ParserRuleContext {
	public BracEnclose(): TerminalNode { return this.getToken(clozeParser.BracEnclose, 0); }
	public CL(): TerminalNode | undefined { return this.tryGetToken(clozeParser.CL, 0); }
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
			return this.getTokens(clozeParser.NL);
		} else {
			return this.getToken(clozeParser.NL, i);
		}
	}
	public S(): TerminalNode[];
	public S(i: number): TerminalNode;
	public S(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(clozeParser.S);
		} else {
			return this.getToken(clozeParser.S, i);
		}
	}
	public EOF(): TerminalNode | undefined { return this.tryGetToken(clozeParser.EOF, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return clozeParser.RULE_bracketed_text; }
	// @Override
	public enterRule(listener: clozeParserListener): void {
		if (listener.enterBracketed_text) {
			listener.enterBracketed_text(this);
		}
	}
	// @Override
	public exitRule(listener: clozeParserListener): void {
		if (listener.exitBracketed_text) {
			listener.exitBracketed_text(this);
		}
	}
}


export class ReferenceContext extends ParserRuleContext {
	public AtReference(): TerminalNode { return this.getToken(clozeParser.AtReference, 0); }
	public CL(): TerminalNode | undefined { return this.tryGetToken(clozeParser.CL, 0); }
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
			return this.getTokens(clozeParser.COLON);
		} else {
			return this.getToken(clozeParser.COLON, i);
		}
	}
	public URL(): TerminalNode[];
	public URL(i: number): TerminalNode;
	public URL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(clozeParser.URL);
		} else {
			return this.getToken(clozeParser.URL, i);
		}
	}
	public NL(): TerminalNode[];
	public NL(i: number): TerminalNode;
	public NL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(clozeParser.NL);
		} else {
			return this.getToken(clozeParser.NL, i);
		}
	}
	public EOF(): TerminalNode | undefined { return this.tryGetToken(clozeParser.EOF, 0); }
	public S(): TerminalNode[];
	public S(i: number): TerminalNode;
	public S(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(clozeParser.S);
		} else {
			return this.getToken(clozeParser.S, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return clozeParser.RULE_reference; }
	// @Override
	public enterRule(listener: clozeParserListener): void {
		if (listener.enterReference) {
			listener.enterReference(this);
		}
	}
	// @Override
	public exitRule(listener: clozeParserListener): void {
		if (listener.exitReference) {
			listener.exitReference(this);
		}
	}
}


export class ProgressContext extends ParserRuleContext {
	public AtProgress(): TerminalNode { return this.getToken(clozeParser.AtProgress, 0); }
	public s_and_w(): S_and_wContext {
		return this.getRuleContext(0, S_and_wContext);
	}
	public CL(): TerminalNode { return this.getToken(clozeParser.CL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return clozeParser.RULE_progress; }
	// @Override
	public enterRule(listener: clozeParserListener): void {
		if (listener.enterProgress) {
			listener.enterProgress(this);
		}
	}
	// @Override
	public exitRule(listener: clozeParserListener): void {
		if (listener.exitProgress) {
			listener.exitProgress(this);
		}
	}
}


export class DatepropContext extends ParserRuleContext {
	public AtDate(): TerminalNode { return this.getToken(clozeParser.AtDate, 0); }
	public CL(): TerminalNode { return this.getToken(clozeParser.CL, 0); }
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
			return this.getTokens(clozeParser.COLON);
		} else {
			return this.getToken(clozeParser.COLON, i);
		}
	}
	public NL(): TerminalNode[];
	public NL(i: number): TerminalNode;
	public NL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(clozeParser.NL);
		} else {
			return this.getToken(clozeParser.NL, i);
		}
	}
	public dateprop_chained(): Dateprop_chainedContext | undefined {
		return this.tryGetRuleContext(0, Dateprop_chainedContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return clozeParser.RULE_dateprop; }
	// @Override
	public enterRule(listener: clozeParserListener): void {
		if (listener.enterDateprop) {
			listener.enterDateprop(this);
		}
	}
	// @Override
	public exitRule(listener: clozeParserListener): void {
		if (listener.exitDateprop) {
			listener.exitDateprop(this);
		}
	}
}


export class Dateprop_chainedContext extends ParserRuleContext {
	public AtDate(): TerminalNode { return this.getToken(clozeParser.AtDate, 0); }
	public CL(): TerminalNode { return this.getToken(clozeParser.CL, 0); }
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
			return this.getTokens(clozeParser.COLON);
		} else {
			return this.getToken(clozeParser.COLON, i);
		}
	}
	public NL(): TerminalNode[];
	public NL(i: number): TerminalNode;
	public NL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(clozeParser.NL);
		} else {
			return this.getToken(clozeParser.NL, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return clozeParser.RULE_dateprop_chained; }
	// @Override
	public enterRule(listener: clozeParserListener): void {
		if (listener.enterDateprop_chained) {
			listener.enterDateprop_chained(this);
		}
	}
	// @Override
	public exitRule(listener: clozeParserListener): void {
		if (listener.exitDateprop_chained) {
			listener.exitDateprop_chained(this);
		}
	}
}


export class InstructionContext extends ParserRuleContext {
	public OPB(): TerminalNode { return this.getToken(clozeParser.OPB, 0); }
	public CL(): TerminalNode | undefined { return this.tryGetToken(clozeParser.CL, 0); }
	public NL(): TerminalNode[];
	public NL(i: number): TerminalNode;
	public NL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(clozeParser.NL);
		} else {
			return this.getToken(clozeParser.NL, i);
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
			return this.getTokens(clozeParser.S);
		} else {
			return this.getToken(clozeParser.S, i);
		}
	}
	public EOF(): TerminalNode | undefined { return this.tryGetToken(clozeParser.EOF, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return clozeParser.RULE_instruction; }
	// @Override
	public enterRule(listener: clozeParserListener): void {
		if (listener.enterInstruction) {
			listener.enterInstruction(this);
		}
	}
	// @Override
	public exitRule(listener: clozeParserListener): void {
		if (listener.exitInstruction) {
			listener.exitInstruction(this);
		}
	}
}


export class HintContext extends ParserRuleContext {
	public OPQ(): TerminalNode { return this.getToken(clozeParser.OPQ, 0); }
	public CL(): TerminalNode[];
	public CL(i: number): TerminalNode;
	public CL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(clozeParser.CL);
		} else {
			return this.getToken(clozeParser.CL, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return clozeParser.RULE_hint; }
	// @Override
	public enterRule(listener: clozeParserListener): void {
		if (listener.enterHint) {
			listener.enterHint(this);
		}
	}
	// @Override
	public exitRule(listener: clozeParserListener): void {
		if (listener.exitHint) {
			listener.exitHint(this);
		}
	}
}


export class TitleContext extends ParserRuleContext {
	public OPHASH(): TerminalNode { return this.getToken(clozeParser.OPHASH, 0); }
	public CL(): TerminalNode | undefined { return this.tryGetToken(clozeParser.CL, 0); }
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
			return this.getTokens(clozeParser.NL);
		} else {
			return this.getToken(clozeParser.NL, i);
		}
	}
	public EOF(): TerminalNode | undefined { return this.tryGetToken(clozeParser.EOF, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return clozeParser.RULE_title; }
	// @Override
	public enterRule(listener: clozeParserListener): void {
		if (listener.enterTitle) {
			listener.enterTitle(this);
		}
	}
	// @Override
	public exitRule(listener: clozeParserListener): void {
		if (listener.exitTitle) {
			listener.exitTitle(this);
		}
	}
}


export class Bool_labelContext extends ParserRuleContext {
	public AtLabeltrue(): TerminalNode | undefined { return this.tryGetToken(clozeParser.AtLabeltrue, 0); }
	public s_and_w(): S_and_wContext {
		return this.getRuleContext(0, S_and_wContext);
	}
	public CL(): TerminalNode { return this.getToken(clozeParser.CL, 0); }
	public AtLabelfalse(): TerminalNode | undefined { return this.tryGetToken(clozeParser.AtLabelfalse, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return clozeParser.RULE_bool_label; }
	// @Override
	public enterRule(listener: clozeParserListener): void {
		if (listener.enterBool_label) {
			listener.enterBool_label(this);
		}
	}
	// @Override
	public exitRule(listener: clozeParserListener): void {
		if (listener.exitBool_label) {
			listener.exitBool_label(this);
		}
	}
}


export class Progress_pointsContext extends ParserRuleContext {
	public AtProgressPoints(): TerminalNode { return this.getToken(clozeParser.AtProgressPoints, 0); }
	public COLON(): TerminalNode { return this.getToken(clozeParser.COLON, 0); }
	public NUMERIC(): TerminalNode | undefined { return this.tryGetToken(clozeParser.NUMERIC, 0); }
	public CL(): TerminalNode { return this.getToken(clozeParser.CL, 0); }
	public s_and_w(): S_and_wContext | undefined {
		return this.tryGetRuleContext(0, S_and_wContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return clozeParser.RULE_progress_points; }
	// @Override
	public enterRule(listener: clozeParserListener): void {
		if (listener.enterProgress_points) {
			listener.enterProgress_points(this);
		}
	}
	// @Override
	public exitRule(listener: clozeParserListener): void {
		if (listener.exitProgress_points) {
			listener.exitProgress_points(this);
		}
	}
}


export class IstrackedContext extends ParserRuleContext {
	public OpAtIsTracked(): TerminalNode { return this.getToken(clozeParser.OpAtIsTracked, 0); }
	public s_and_w(): S_and_wContext {
		return this.getRuleContext(0, S_and_wContext);
	}
	public CL(): TerminalNode { return this.getToken(clozeParser.CL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return clozeParser.RULE_istracked; }
	// @Override
	public enterRule(listener: clozeParserListener): void {
		if (listener.enterIstracked) {
			listener.enterIstracked(this);
		}
	}
	// @Override
	public exitRule(listener: clozeParserListener): void {
		if (listener.exitIstracked) {
			listener.exitIstracked(this);
		}
	}
}


export class IsinfoonlyContext extends ParserRuleContext {
	public OpAtIsInfoOnly(): TerminalNode { return this.getToken(clozeParser.OpAtIsInfoOnly, 0); }
	public s_and_w(): S_and_wContext {
		return this.getRuleContext(0, S_and_wContext);
	}
	public CL(): TerminalNode { return this.getToken(clozeParser.CL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return clozeParser.RULE_isinfoonly; }
	// @Override
	public enterRule(listener: clozeParserListener): void {
		if (listener.enterIsinfoonly) {
			listener.enterIsinfoonly(this);
		}
	}
	// @Override
	public exitRule(listener: clozeParserListener): void {
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
			return this.getTokens(clozeParser.NL);
		} else {
			return this.getToken(clozeParser.NL, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return clozeParser.RULE_atdef; }
	// @Override
	public enterRule(listener: clozeParserListener): void {
		if (listener.enterAtdef) {
			listener.enterAtdef(this);
		}
	}
	// @Override
	public exitRule(listener: clozeParserListener): void {
		if (listener.exitAtdef) {
			listener.exitAtdef(this);
		}
	}
}


export class Atdef_Context extends ParserRuleContext {
	public OPA(): TerminalNode | undefined { return this.tryGetToken(clozeParser.OPA, 0); }
	public s_and_w(): S_and_wContext[];
	public s_and_w(i: number): S_and_wContext;
	public s_and_w(i?: number): S_and_wContext | S_and_wContext[] {
		if (i === undefined) {
			return this.getRuleContexts(S_and_wContext);
		} else {
			return this.getRuleContext(i, S_and_wContext);
		}
	}
	public CL(): TerminalNode { return this.getToken(clozeParser.CL, 0); }
	public COLON(): TerminalNode[];
	public COLON(i: number): TerminalNode;
	public COLON(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(clozeParser.COLON);
		} else {
			return this.getToken(clozeParser.COLON, i);
		}
	}
	public DBLCOLON(): TerminalNode | undefined { return this.tryGetToken(clozeParser.DBLCOLON, 0); }
	public NL(): TerminalNode[];
	public NL(i: number): TerminalNode;
	public NL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(clozeParser.NL);
		} else {
			return this.getToken(clozeParser.NL, i);
		}
	}
	public OpAtCopyright(): TerminalNode | undefined { return this.tryGetToken(clozeParser.OpAtCopyright, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return clozeParser.RULE_atdef_; }
	// @Override
	public enterRule(listener: clozeParserListener): void {
		if (listener.enterAtdef_) {
			listener.enterAtdef_(this);
		}
	}
	// @Override
	public exitRule(listener: clozeParserListener): void {
		if (listener.exitAtdef_) {
			listener.exitAtdef_(this);
		}
	}
}


export class DollaransContext extends ParserRuleContext {
	public OPDOLL(): TerminalNode { return this.getToken(clozeParser.OPDOLL, 0); }
	public CL(): TerminalNode | undefined { return this.tryGetToken(clozeParser.CL, 0); }
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
			return this.getTokens(clozeParser.COLON);
		} else {
			return this.getToken(clozeParser.COLON, i);
		}
	}
	public NL(): TerminalNode[];
	public NL(i: number): TerminalNode;
	public NL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(clozeParser.NL);
		} else {
			return this.getToken(clozeParser.NL, i);
		}
	}
	public EOF(): TerminalNode | undefined { return this.tryGetToken(clozeParser.EOF, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return clozeParser.RULE_dollarans; }
	// @Override
	public enterRule(listener: clozeParserListener): void {
		if (listener.enterDollarans) {
			listener.enterDollarans(this);
		}
	}
	// @Override
	public exitRule(listener: clozeParserListener): void {
		if (listener.exitDollarans) {
			listener.exitDollarans(this);
		}
	}
}


export class AnchorContext extends ParserRuleContext {
	public OPDANGLE(): TerminalNode { return this.getToken(clozeParser.OPDANGLE, 0); }
	public CL(): TerminalNode { return this.getToken(clozeParser.CL, 0); }
	public s_and_w(): S_and_wContext | undefined {
		return this.tryGetRuleContext(0, S_and_wContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return clozeParser.RULE_anchor; }
	// @Override
	public enterRule(listener: clozeParserListener): void {
		if (listener.enterAnchor) {
			listener.enterAnchor(this);
		}
	}
	// @Override
	public exitRule(listener: clozeParserListener): void {
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
	public nl(): NlContext[];
	public nl(i: number): NlContext;
	public nl(i?: number): NlContext | NlContext[] {
		if (i === undefined) {
			return this.getRuleContexts(NlContext);
		} else {
			return this.getRuleContext(i, NlContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return clozeParser.RULE_lines; }
	// @Override
	public enterRule(listener: clozeParserListener): void {
		if (listener.enterLines) {
			listener.enterLines(this);
		}
	}
	// @Override
	public exitRule(listener: clozeParserListener): void {
		if (listener.exitLines) {
			listener.exitLines(this);
		}
	}
}


export class S_and_wContext extends ParserRuleContext {
	public STRING(): TerminalNode | undefined { return this.tryGetToken(clozeParser.STRING, 0); }
	public numeric(): NumericContext | undefined {
		return this.tryGetRuleContext(0, NumericContext);
	}
	public S(): TerminalNode[];
	public S(i: number): TerminalNode;
	public S(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(clozeParser.S);
		} else {
			return this.getToken(clozeParser.S, i);
		}
	}
	public words(): WordsContext | undefined {
		return this.tryGetRuleContext(0, WordsContext);
	}
	public OPS(): TerminalNode | undefined { return this.tryGetToken(clozeParser.OPS, 0); }
	public s_and_w(): S_and_wContext | undefined {
		return this.tryGetRuleContext(0, S_and_wContext);
	}
	public CL(): TerminalNode | undefined { return this.tryGetToken(clozeParser.CL, 0); }
	public NUMERIC(): TerminalNode | undefined { return this.tryGetToken(clozeParser.NUMERIC, 0); }
	public COLON(): TerminalNode | undefined { return this.tryGetToken(clozeParser.COLON, 0); }
	public AMP(): TerminalNode | undefined { return this.tryGetToken(clozeParser.AMP, 0); }
	public OP_N_ETC(): TerminalNode | undefined { return this.tryGetToken(clozeParser.OP_N_ETC, 0); }
	public DBLEQ(): TerminalNode | undefined { return this.tryGetToken(clozeParser.DBLEQ, 0); }
	public URL(): TerminalNode | undefined { return this.tryGetToken(clozeParser.URL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return clozeParser.RULE_s_and_w; }
	// @Override
	public enterRule(listener: clozeParserListener): void {
		if (listener.enterS_and_w) {
			listener.enterS_and_w(this);
		}
	}
	// @Override
	public exitRule(listener: clozeParserListener): void {
		if (listener.exitS_and_w) {
			listener.exitS_and_w(this);
		}
	}
}


export class DclinesContext extends ParserRuleContext {
	public DCANY(): TerminalNode { return this.getToken(clozeParser.DCANY, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return clozeParser.RULE_dclines; }
	// @Override
	public enterRule(listener: clozeParserListener): void {
		if (listener.enterDclines) {
			listener.enterDclines(this);
		}
	}
	// @Override
	public exitRule(listener: clozeParserListener): void {
		if (listener.exitDclines) {
			listener.exitDclines(this);
		}
	}
}


export class OpuContext extends ParserRuleContext {
	public OPU(): TerminalNode { return this.getToken(clozeParser.OPU, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return clozeParser.RULE_opu; }
	// @Override
	public enterRule(listener: clozeParserListener): void {
		if (listener.enterOpu) {
			listener.enterOpu(this);
		}
	}
	// @Override
	public exitRule(listener: clozeParserListener): void {
		if (listener.exitOpu) {
			listener.exitOpu(this);
		}
	}
}


export class OpbContext extends ParserRuleContext {
	public OPB(): TerminalNode { return this.getToken(clozeParser.OPB, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return clozeParser.RULE_opb; }
	// @Override
	public enterRule(listener: clozeParserListener): void {
		if (listener.enterOpb) {
			listener.enterOpb(this);
		}
	}
	// @Override
	public exitRule(listener: clozeParserListener): void {
		if (listener.exitOpb) {
			listener.exitOpb(this);
		}
	}
}


export class OpqContext extends ParserRuleContext {
	public OPQ(): TerminalNode { return this.getToken(clozeParser.OPQ, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return clozeParser.RULE_opq; }
	// @Override
	public enterRule(listener: clozeParserListener): void {
		if (listener.enterOpq) {
			listener.enterOpq(this);
		}
	}
	// @Override
	public exitRule(listener: clozeParserListener): void {
		if (listener.exitOpq) {
			listener.exitOpq(this);
		}
	}
}


export class OpaContext extends ParserRuleContext {
	public OPA(): TerminalNode { return this.getToken(clozeParser.OPA, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return clozeParser.RULE_opa; }
	// @Override
	public enterRule(listener: clozeParserListener): void {
		if (listener.enterOpa) {
			listener.enterOpa(this);
		}
	}
	// @Override
	public exitRule(listener: clozeParserListener): void {
		if (listener.exitOpa) {
			listener.exitOpa(this);
		}
	}
}


export class OppContext extends ParserRuleContext {
	public OPP(): TerminalNode { return this.getToken(clozeParser.OPP, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return clozeParser.RULE_opp; }
	// @Override
	public enterRule(listener: clozeParserListener): void {
		if (listener.enterOpp) {
			listener.enterOpp(this);
		}
	}
	// @Override
	public exitRule(listener: clozeParserListener): void {
		if (listener.exitOpp) {
			listener.exitOpp(this);
		}
	}
}


export class OpmContext extends ParserRuleContext {
	public OPM(): TerminalNode { return this.getToken(clozeParser.OPM, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return clozeParser.RULE_opm; }
	// @Override
	public enterRule(listener: clozeParserListener): void {
		if (listener.enterOpm) {
			listener.enterOpm(this);
		}
	}
	// @Override
	public exitRule(listener: clozeParserListener): void {
		if (listener.exitOpm) {
			listener.exitOpm(this);
		}
	}
}


export class OpsContext extends ParserRuleContext {
	public OPS(): TerminalNode { return this.getToken(clozeParser.OPS, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return clozeParser.RULE_ops; }
	// @Override
	public enterRule(listener: clozeParserListener): void {
		if (listener.enterOps) {
			listener.enterOps(this);
		}
	}
	// @Override
	public exitRule(listener: clozeParserListener): void {
		if (listener.exitOps) {
			listener.exitOps(this);
		}
	}
}


export class OprContext extends ParserRuleContext {
	public OPR(): TerminalNode { return this.getToken(clozeParser.OPR, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return clozeParser.RULE_opr; }
	// @Override
	public enterRule(listener: clozeParserListener): void {
		if (listener.enterOpr) {
			listener.enterOpr(this);
		}
	}
	// @Override
	public exitRule(listener: clozeParserListener): void {
		if (listener.exitOpr) {
			listener.exitOpr(this);
		}
	}
}


export class OpcContext extends ParserRuleContext {
	public OPC(): TerminalNode { return this.getToken(clozeParser.OPC, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return clozeParser.RULE_opc; }
	// @Override
	public enterRule(listener: clozeParserListener): void {
		if (listener.enterOpc) {
			listener.enterOpc(this);
		}
	}
	// @Override
	public exitRule(listener: clozeParserListener): void {
		if (listener.exitOpc) {
			listener.exitOpc(this);
		}
	}
}


export class ClContext extends ParserRuleContext {
	public CL(): TerminalNode { return this.getToken(clozeParser.CL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return clozeParser.RULE_cl; }
	// @Override
	public enterRule(listener: clozeParserListener): void {
		if (listener.enterCl) {
			listener.enterCl(this);
		}
	}
	// @Override
	public exitRule(listener: clozeParserListener): void {
		if (listener.exitCl) {
			listener.exitCl(this);
		}
	}
}


export class ClnspContext extends ParserRuleContext {
	public CL(): TerminalNode { return this.getToken(clozeParser.CL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return clozeParser.RULE_clnsp; }
	// @Override
	public enterRule(listener: clozeParserListener): void {
		if (listener.enterClnsp) {
			listener.enterClnsp(this);
		}
	}
	// @Override
	public exitRule(listener: clozeParserListener): void {
		if (listener.exitClnsp) {
			listener.exitClnsp(this);
		}
	}
}


export class NlContext extends ParserRuleContext {
	public NL(): TerminalNode { return this.getToken(clozeParser.NL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return clozeParser.RULE_nl; }
	// @Override
	public enterRule(listener: clozeParserListener): void {
		if (listener.enterNl) {
			listener.enterNl(this);
		}
	}
	// @Override
	public exitRule(listener: clozeParserListener): void {
		if (listener.exitNl) {
			listener.exitNl(this);
		}
	}
}


export class Listline_Context extends ParserRuleContext {
	public LIST_LINE(): TerminalNode { return this.getToken(clozeParser.LIST_LINE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return clozeParser.RULE_listline_; }
	// @Override
	public enterRule(listener: clozeParserListener): void {
		if (listener.enterListline_) {
			listener.enterListline_(this);
		}
	}
	// @Override
	public exitRule(listener: clozeParserListener): void {
		if (listener.exitListline_) {
			listener.exitListline_(this);
		}
	}
}


export class NumericContext extends ParserRuleContext {
	public NUMERIC(): TerminalNode { return this.getToken(clozeParser.NUMERIC, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return clozeParser.RULE_numeric; }
	// @Override
	public enterRule(listener: clozeParserListener): void {
		if (listener.enterNumeric) {
			listener.enterNumeric(this);
		}
	}
	// @Override
	public exitRule(listener: clozeParserListener): void {
		if (listener.exitNumeric) {
			listener.exitNumeric(this);
		}
	}
}


export class StringContext extends ParserRuleContext {
	public STRING(): TerminalNode { return this.getToken(clozeParser.STRING, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return clozeParser.RULE_string; }
	// @Override
	public enterRule(listener: clozeParserListener): void {
		if (listener.enterString) {
			listener.enterString(this);
		}
	}
	// @Override
	public exitRule(listener: clozeParserListener): void {
		if (listener.exitString) {
			listener.exitString(this);
		}
	}
}


export class WordsContext extends ParserRuleContext {
	public SENTENCE(): TerminalNode[];
	public SENTENCE(i: number): TerminalNode;
	public SENTENCE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(clozeParser.SENTENCE);
		} else {
			return this.getToken(clozeParser.SENTENCE, i);
		}
	}
	public NOTBITMARK(): TerminalNode[];
	public NOTBITMARK(i: number): TerminalNode;
	public NOTBITMARK(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(clozeParser.NOTBITMARK);
		} else {
			return this.getToken(clozeParser.NOTBITMARK, i);
		}
	}
	public BARSTRING(): TerminalNode[];
	public BARSTRING(i: number): TerminalNode;
	public BARSTRING(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(clozeParser.BARSTRING);
		} else {
			return this.getToken(clozeParser.BARSTRING, i);
		}
	}
	public ELIPSIS(): TerminalNode[];
	public ELIPSIS(i: number): TerminalNode;
	public ELIPSIS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(clozeParser.ELIPSIS);
		} else {
			return this.getToken(clozeParser.ELIPSIS, i);
		}
	}
	public AMP(): TerminalNode[];
	public AMP(i: number): TerminalNode;
	public AMP(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(clozeParser.AMP);
		} else {
			return this.getToken(clozeParser.AMP, i);
		}
	}
	public Greater(): TerminalNode[];
	public Greater(i: number): TerminalNode;
	public Greater(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(clozeParser.Greater);
		} else {
			return this.getToken(clozeParser.Greater, i);
		}
	}
	public Less(): TerminalNode[];
	public Less(i: number): TerminalNode;
	public Less(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(clozeParser.Less);
		} else {
			return this.getToken(clozeParser.Less, i);
		}
	}
	public RightArrow(): TerminalNode[];
	public RightArrow(i: number): TerminalNode;
	public RightArrow(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(clozeParser.RightArrow);
		} else {
			return this.getToken(clozeParser.RightArrow, i);
		}
	}
	public RightAngle(): TerminalNode[];
	public RightAngle(i: number): TerminalNode;
	public RightAngle(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(clozeParser.RightAngle);
		} else {
			return this.getToken(clozeParser.RightAngle, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return clozeParser.RULE_words; }
	// @Override
	public enterRule(listener: clozeParserListener): void {
		if (listener.enterWords) {
			listener.enterWords(this);
		}
	}
	// @Override
	public exitRule(listener: clozeParserListener): void {
		if (listener.exitWords) {
			listener.exitWords(this);
		}
	}
}


export class SpContext extends ParserRuleContext {
	public S(): TerminalNode { return this.getToken(clozeParser.S, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return clozeParser.RULE_sp; }
	// @Override
	public enterRule(listener: clozeParserListener): void {
		if (listener.enterSp) {
			listener.enterSp(this);
		}
	}
	// @Override
	public exitRule(listener: clozeParserListener): void {
		if (listener.exitSp) {
			listener.exitSp(this);
		}
	}
}


