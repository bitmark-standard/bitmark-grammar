// Generated from ./antlr/interviewParser.g4 by ANTLR 4.9.0-SNAPSHOT


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

import { interviewParserListener } from "./interviewParserListener";

export class interviewParser extends Parser {
	public static readonly OPDOT = 1;
	public static readonly S = 2;
	public static readonly BitInterview = 3;
	public static readonly BitInterviewinstgrp = 4;
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
	public static readonly DBLEQ = 35;
	public static readonly OR = 36;
	public static readonly HSPL = 37;
	public static readonly HSPL2 = 38;
	public static readonly SSPL = 39;
	public static readonly SSPL2 = 40;
	public static readonly BULLET = 41;
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
	public static readonly OpAmpVideo = 100;
	public static readonly OpAmpArticle = 101;
	public static readonly OpAmpArticleAtt = 102;
	public static readonly OpAmpDocument = 103;
	public static readonly OpAmpApp = 104;
	public static readonly OpAmpWebsite = 105;
	public static readonly OpAmpStillImageFilm = 106;
	public static readonly BracEnclose = 107;
	public static readonly AmpAudioLink = 108;
	public static readonly AmpImageLink = 109;
	public static readonly AmpVideoLink = 110;
	public static readonly AmpArticleLink = 111;
	public static readonly AmpDocumentLink = 112;
	public static readonly AmpDocumentDownload = 113;
	public static readonly AmpAppLink = 114;
	public static readonly AmpWebsiteLink = 115;
	public static readonly AmpStillImageFilmLink = 116;
	public static readonly OpAmpAudioLink = 117;
	public static readonly OpAmpImageLink = 118;
	public static readonly OpAmpVideoLink = 119;
	public static readonly OpAmpArticleLink = 120;
	public static readonly OpAmpDocumentLink = 121;
	public static readonly OpAmpDocumentDownload = 122;
	public static readonly OpAmpAppLink = 123;
	public static readonly OpAmpWebsiteLink = 124;
	public static readonly OpAmpStillImageFilmLink = 125;
	public static readonly AmpImageEmbed = 126;
	public static readonly AmpVideoEmbed = 127;
	public static readonly AmpAudioEmbed = 128;
	public static readonly AmpDocumentEmbed = 129;
	public static readonly AmpStillImageFilmEmbed = 130;
	public static readonly OpAmpImageEmbed = 131;
	public static readonly OpAmpVideoEmbed = 132;
	public static readonly OpAmpAudioEmbed = 133;
	public static readonly OpAmpDocumentEmbed = 134;
	public static readonly OpAmpStillImageFilmEmbed = 135;
	public static readonly BitmarkMinus = 136;
	public static readonly BitmarkPlus = 137;
	public static readonly ColonText = 138;
	public static readonly ColonJson = 139;
	public static readonly Prosemirror = 140;
	public static readonly Placeholder = 141;
	public static readonly BASIC = 142;
	public static readonly JPG = 143;
	public static readonly PNG = 144;
	public static readonly GIF = 145;
	public static readonly SVG = 146;
	public static readonly MP2 = 147;
	public static readonly MP3 = 148;
	public static readonly MP4 = 149;
	public static readonly FLV = 150;
	public static readonly WMV = 151;
	public static readonly MPEG = 152;
	public static readonly MPG = 153;
	public static readonly TEL = 154;
	public static readonly DotArticleAtt = 155;
	public static readonly STAR = 156;
	public static readonly URL = 157;
	public static readonly LIST_LINE = 158;
	public static readonly ENCLBARS = 159;
	public static readonly RULE_bitmark = 0;
	public static readonly RULE_bitmark_ = 1;
	public static readonly RULE_interviews = 2;
	public static readonly RULE_interview = 3;
	public static readonly RULE_interview_instruction_grouped = 4;
	public static readonly RULE_mcrsep = 5;
	public static readonly RULE_mcrsep_end = 6;
	public static readonly RULE_mcrmisc = 7;
	public static readonly RULE_interview_qanda = 8;
	public static readonly RULE_interview_qanda__ = 9;
	public static readonly RULE_interview_sometext = 10;
	public static readonly RULE_interview_text = 11;
	public static readonly RULE_interview_answer = 12;
	public static readonly RULE_longans = 13;
	public static readonly RULE_shortans = 14;
	public static readonly RULE_partans = 15;
	public static readonly RULE_sample_soln_prop = 16;
	public static readonly RULE_mark_text = 17;
	public static readonly RULE_query = 18;
	public static readonly RULE_answer = 19;
	public static readonly RULE_heading = 20;
	public static readonly RULE_key_title = 21;
	public static readonly RULE_value_title = 22;
	public static readonly RULE_ml_example = 23;
	public static readonly RULE_bitElem = 24;
	public static readonly RULE_interview_footer = 25;
	public static readonly RULE_footer_resource = 26;
	public static readonly RULE_footer_text = 27;
	public static readonly RULE_gap = 28;
	public static readonly RULE_single_gap = 29;
	public static readonly RULE_atpoint = 30;
	public static readonly RULE_format = 31;
	public static readonly RULE_resource_format = 32;
	public static readonly RULE_resource_format_extra = 33;
	public static readonly RULE_format2 = 34;
	public static readonly RULE_image_format = 35;
	public static readonly RULE_video_format = 36;
	public static readonly RULE_article_format = 37;
	public static readonly RULE_document_format = 38;
	public static readonly RULE_app_format = 39;
	public static readonly RULE_website_format = 40;
	public static readonly RULE_stillimagefilm_format = 41;
	public static readonly RULE_op_article_format = 42;
	public static readonly RULE_op_document_format = 43;
	public static readonly RULE_op_app_format = 44;
	public static readonly RULE_op_website_format = 45;
	public static readonly RULE_op_video_format = 46;
	public static readonly RULE_op_stillimagefilm_format = 47;
	public static readonly RULE_articlebit = 48;
	public static readonly RULE_documentbit = 49;
	public static readonly RULE_websitebit = 50;
	public static readonly RULE_appbit = 51;
	public static readonly RULE_stillimagefilmbit = 52;
	public static readonly RULE_stillimg_one = 53;
	public static readonly RULE_videobit = 54;
	public static readonly RULE_video_one = 55;
	public static readonly RULE_imagebit = 56;
	public static readonly RULE_image_one = 57;
	public static readonly RULE_op_image_format = 58;
	public static readonly RULE_image_chained = 59;
	public static readonly RULE_image_chained4match = 60;
	public static readonly RULE_audiobit = 61;
	public static readonly RULE_audio_one = 62;
	public static readonly RULE_audio_format = 63;
	public static readonly RULE_op_audio_format = 64;
	public static readonly RULE_resource_chained = 65;
	public static readonly RULE_telephone = 66;
	public static readonly RULE_url = 67;
	public static readonly RULE_item = 68;
	public static readonly RULE_lead = 69;
	public static readonly RULE_angleref = 70;
	public static readonly RULE_example = 71;
	public static readonly RULE_bracketed_text = 72;
	public static readonly RULE_reference = 73;
	public static readonly RULE_progress = 74;
	public static readonly RULE_dateprop = 75;
	public static readonly RULE_dateprop_chained = 76;
	public static readonly RULE_instruction = 77;
	public static readonly RULE_hint = 78;
	public static readonly RULE_title = 79;
	public static readonly RULE_bool_label = 80;
	public static readonly RULE_progress_points = 81;
	public static readonly RULE_istracked = 82;
	public static readonly RULE_isinfoonly = 83;
	public static readonly RULE_atdef = 84;
	public static readonly RULE_atdef_ = 85;
	public static readonly RULE_dollarans = 86;
	public static readonly RULE_anchor = 87;
	public static readonly RULE_dcolon = 88;
	public static readonly RULE_lines = 89;
	public static readonly RULE_s_and_w = 90;
	public static readonly RULE_clnsp = 91;
	public static readonly RULE_sspl = 92;
	public static readonly RULE_words = 93;
	public static readonly RULE_sp = 94;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"bitmark", "bitmark_", "interviews", "interview", "interview_instruction_grouped", 
		"mcrsep", "mcrsep_end", "mcrmisc", "interview_qanda", "interview_qanda__", 
		"interview_sometext", "interview_text", "interview_answer", "longans", 
		"shortans", "partans", "sample_soln_prop", "mark_text", "query", "answer", 
		"heading", "key_title", "value_title", "ml_example", "bitElem", "interview_footer", 
		"footer_resource", "footer_text", "gap", "single_gap", "atpoint", "format", 
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
		"isinfoonly", "atdef", "atdef_", "dollarans", "anchor", "dcolon", "lines", 
		"s_and_w", "clnsp", "sspl", "words", "sp",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'[.'", undefined, undefined, undefined, undefined, undefined, 
		"'[^'", undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, "'[#'", "']'", "':'", "'&'", "'::'", 
		"'+'", "'.@'", "'>'", "'<'", "'\u25BA'", "'\u2192'", "'=='", undefined, 
		undefined, undefined, undefined, undefined, "'\u2022'", undefined, undefined, 
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
		undefined, "OPDOT", "S", "BitInterview", "BitInterviewinstgrp", "OPDOLL", 
		"OPBUL", "OPESC", "OPRANGLES", "OPRANGLEL", "OPDANGLE", "OPU", "OPB", 
		"OPQ", "OPA", "OPP", "OPM", "OPS", "OPR", "OPC", "OPITEM", "OPLEAD", "OPPAGENUMBER", 
		"OPMARGINNUMBER", "OPHASH", "CL", "COLON", "AMP", "DBLCOLON", "PLUS", 
		"DotAt", "Greater", "Less", "RightAngle", "RightArrow", "DBLEQ", "OR", 
		"HSPL", "HSPL2", "SSPL", "SSPL2", "BULLET", "COMMENT", "DCANY", "Image_type", 
		"Audio_type", "Video_type", "ArticleText", "NOTCL", "NUMERIC", "STRING", 
		"NL", "NOTBITMARK", "ELIPSIS", "SENTENCE", "BARSTRING", "OPAT", "AtProgress", 
		"AtReference", "AtWidth", "AtHeight", "AtProgressPoints", "AtShortanswer", 
		"AtLonganswer", "AtExampleWithStr", "AtExamplecol", "AtExamplecl", "AtSampleSolution", 
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
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(interviewParser._LITERAL_NAMES, interviewParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return interviewParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "interviewParser.g4"; }

	// @Override
	public get ruleNames(): string[] { return interviewParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return interviewParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(interviewParser._ATN, this);
	}
	// @RuleVersion(0)
	public bitmark(): BitmarkContext {
		let _localctx: BitmarkContext = new BitmarkContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, interviewParser.RULE_bitmark);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 203;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 190;
				this.bitmark_();
				this.state = 200;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 1, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 194;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						while (_la === interviewParser.S) {
							{
							{
							this.state = 191;
							this.match(interviewParser.S);
							}
							}
							this.state = 196;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
						}
						this.state = 197;
						this.match(interviewParser.NL);
						}
						}
					}
					this.state = 202;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 1, this._ctx);
				}
				}
				}
				this.state = 205;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === interviewParser.BitInterview || _la === interviewParser.BitInterviewinstgrp);
			this.state = 210;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === interviewParser.NL) {
				{
				{
				this.state = 207;
				this.match(interviewParser.NL);
				}
				}
				this.state = 212;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 213;
			this.match(interviewParser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 2, interviewParser.RULE_bitmark_);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 215;
			this.interviews();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public interviews(): InterviewsContext {
		let _localctx: InterviewsContext = new InterviewsContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, interviewParser.RULE_interviews);
		try {
			this.state = 219;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case interviewParser.BitInterview:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 217;
				this.interview();
				}
				break;
			case interviewParser.BitInterviewinstgrp:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 218;
				this.interview_instruction_grouped();
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
	public interview(): InterviewContext {
		let _localctx: InterviewContext = new InterviewContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, interviewParser.RULE_interview);
		try {
			let _alt: number;
			this.state = 293;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 17, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 221;
				this.match(interviewParser.BitInterview);
				this.state = 222;
				this.format();
				this.state = 223;
				this.match(interviewParser.CL);
				this.state = 227;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 5, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 224;
						this.match(interviewParser.NL);
						}
						}
					}
					this.state = 229;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 5, this._ctx);
				}
				this.state = 239;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 7, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 230;
						this.bitElem();
						this.state = 234;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 6, this._ctx);
						while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
							if (_alt === 1) {
								{
								{
								this.state = 231;
								this.match(interviewParser.NL);
								}
								}
							}
							this.state = 236;
							this._errHandler.sync(this);
							_alt = this.interpreter.adaptivePredict(this._input, 6, this._ctx);
						}
						}
						}
					}
					this.state = 241;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 7, this._ctx);
				}
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 242;
				this.match(interviewParser.BitInterview);
				this.state = 243;
				this.format();
				this.state = 244;
				this.match(interviewParser.CL);
				this.state = 248;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 8, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 245;
						this.match(interviewParser.NL);
						}
						}
					}
					this.state = 250;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 8, this._ctx);
				}
				this.state = 260;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 10, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 251;
						this.bitElem();
						this.state = 255;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 9, this._ctx);
						while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
							if (_alt === 1) {
								{
								{
								this.state = 252;
								this.match(interviewParser.NL);
								}
								}
							}
							this.state = 257;
							this._errHandler.sync(this);
							_alt = this.interpreter.adaptivePredict(this._input, 9, this._ctx);
						}
						}
						}
					}
					this.state = 262;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 10, this._ctx);
				}
				this.state = 279;
				this._errHandler.sync(this);
				_alt = 1;
				do {
					switch (_alt) {
					case 1:
						{
						{
						this.state = 263;
						this.mcrsep();
						this.state = 267;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 11, this._ctx);
						while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
							if (_alt === 1) {
								{
								{
								this.state = 264;
								this.match(interviewParser.NL);
								}
								}
							}
							this.state = 269;
							this._errHandler.sync(this);
							_alt = this.interpreter.adaptivePredict(this._input, 11, this._ctx);
						}
						this.state = 277;
						this._errHandler.sync(this);
						switch ( this.interpreter.adaptivePredict(this._input, 13, this._ctx) ) {
						case 1:
							{
							this.state = 270;
							this.interview_qanda();
							this.state = 274;
							this._errHandler.sync(this);
							_alt = this.interpreter.adaptivePredict(this._input, 12, this._ctx);
							while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
								if (_alt === 1) {
									{
									{
									this.state = 271;
									this.match(interviewParser.NL);
									}
									}
								}
								this.state = 276;
								this._errHandler.sync(this);
								_alt = this.interpreter.adaptivePredict(this._input, 12, this._ctx);
							}
							}
							break;
						}
						}
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					this.state = 281;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 14, this._ctx);
				} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
				this.state = 283;
				this.mcrsep_end();
				this.state = 287;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 15, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 284;
						this.match(interviewParser.NL);
						}
						}
					}
					this.state = 289;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 15, this._ctx);
				}
				this.state = 291;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 16, this._ctx) ) {
				case 1:
					{
					this.state = 290;
					this.interview_footer();
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
	public interview_instruction_grouped(): Interview_instruction_groupedContext {
		let _localctx: Interview_instruction_groupedContext = new Interview_instruction_groupedContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, interviewParser.RULE_interview_instruction_grouped);
		try {
			let _alt: number;
			this.state = 360;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 28, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 295;
				this.match(interviewParser.BitInterviewinstgrp);
				this.state = 296;
				this.format();
				this.state = 297;
				this.match(interviewParser.CL);
				this.state = 301;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 18, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 298;
						this.match(interviewParser.NL);
						}
						}
					}
					this.state = 303;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 18, this._ctx);
				}
				this.state = 313;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 20, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 304;
						this.bitElem();
						this.state = 308;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 19, this._ctx);
						while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
							if (_alt === 1) {
								{
								{
								this.state = 305;
								this.match(interviewParser.NL);
								}
								}
							}
							this.state = 310;
							this._errHandler.sync(this);
							_alt = this.interpreter.adaptivePredict(this._input, 19, this._ctx);
						}
						}
						}
					}
					this.state = 315;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 20, this._ctx);
				}
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 316;
				this.match(interviewParser.BitInterviewinstgrp);
				this.state = 317;
				this.format();
				this.state = 318;
				this.match(interviewParser.CL);
				this.state = 322;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 21, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 319;
						this.match(interviewParser.NL);
						}
						}
					}
					this.state = 324;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 21, this._ctx);
				}
				this.state = 334;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 23, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 325;
						this.bitElem();
						this.state = 329;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 22, this._ctx);
						while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
							if (_alt === 1) {
								{
								{
								this.state = 326;
								this.match(interviewParser.NL);
								}
								}
							}
							this.state = 331;
							this._errHandler.sync(this);
							_alt = this.interpreter.adaptivePredict(this._input, 22, this._ctx);
						}
						}
						}
					}
					this.state = 336;
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
						this.state = 337;
						this.mcrsep();
						{
						this.state = 338;
						this.interview_qanda();
						this.state = 342;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 24, this._ctx);
						while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
							if (_alt === 1) {
								{
								{
								this.state = 339;
								this.match(interviewParser.NL);
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
					}
					this.state = 349;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 25, this._ctx);
				}
				this.state = 350;
				this.mcrsep_end();
				this.state = 354;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 26, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 351;
						this.match(interviewParser.NL);
						}
						}
					}
					this.state = 356;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 26, this._ctx);
				}
				this.state = 358;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 27, this._ctx) ) {
				case 1:
					{
					this.state = 357;
					this.interview_footer();
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
		this.enterRule(_localctx, 10, interviewParser.RULE_mcrsep);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 364;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case interviewParser.HSPL:
			case interviewParser.HSPL2:
				{
				this.state = 362;
				_la = this._input.LA(1);
				if (!(_la === interviewParser.HSPL || _la === interviewParser.HSPL2)) {
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
			case interviewParser.NL:
				{
				this.state = 363;
				this.match(interviewParser.NL);
				}
				break;
			default:
				throw new NoViableAltException(this);
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
		this.enterRule(_localctx, 12, interviewParser.RULE_mcrsep_end);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 366;
			_la = this._input.LA(1);
			if (!(_la === interviewParser.HSPL || _la === interviewParser.HSPL2)) {
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
	public mcrmisc(): McrmiscContext {
		let _localctx: McrmiscContext = new McrmiscContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, interviewParser.RULE_mcrmisc);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 368;
			this.interview_qanda();
			this.state = 369;
			this.match(interviewParser.NL);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public interview_qanda(): Interview_qandaContext {
		let _localctx: Interview_qandaContext = new Interview_qandaContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, interviewParser.RULE_interview_qanda);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 371;
			this.interview_qanda__();
			this.state = 380;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 31, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 373;
					this._errHandler.sync(this);
					_alt = 1;
					do {
						switch (_alt) {
						case 1:
							{
							{
							this.state = 372;
							this.match(interviewParser.NL);
							}
							}
							break;
						default:
							throw new NoViableAltException(this);
						}
						this.state = 375;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 30, this._ctx);
					} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
					this.state = 377;
					this.interview_qanda__();
					}
					}
				}
				this.state = 382;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 31, this._ctx);
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
	public interview_qanda__(): Interview_qanda__Context {
		let _localctx: Interview_qanda__Context = new Interview_qanda__Context(this._ctx, this.state);
		this.enterRule(_localctx, 18, interviewParser.RULE_interview_qanda__);
		let _la: number;
		try {
			let _alt: number;
			this.state = 470;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 48, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 384;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === interviewParser.OPC || _la === interviewParser.OPITEM) {
					{
					this.state = 383;
					this.item();
					}
				}

				this.state = 386;
				this.interview_text();
				this.state = 390;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 33, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 387;
						this.match(interviewParser.S);
						}
						}
					}
					this.state = 392;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 33, this._ctx);
				}
				this.state = 406;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 35, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						this.state = 404;
						this._errHandler.sync(this);
						switch ( this.interpreter.adaptivePredict(this._input, 34, this._ctx) ) {
						case 1:
							{
							this.state = 393;
							this.item();
							}
							break;

						case 2:
							{
							this.state = 394;
							this.instruction();
							}
							break;

						case 3:
							{
							this.state = 395;
							this.example();
							}
							break;

						case 4:
							{
							this.state = 396;
							this.shortans();
							}
							break;

						case 5:
							{
							this.state = 397;
							this.longans();
							}
							break;

						case 6:
							{
							this.state = 398;
							this.dollarans();
							}
							break;

						case 7:
							{
							this.state = 399;
							this.partans();
							}
							break;

						case 8:
							{
							this.state = 400;
							this.single_gap();
							}
							break;

						case 9:
							{
							this.state = 401;
							this.mark_text();
							}
							break;

						case 10:
							{
							this.state = 402;
							this.hint();
							}
							break;

						case 11:
							{
							this.state = 403;
							this.interview_sometext();
							}
							break;
						}
						}
					}
					this.state = 408;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 35, this._ctx);
				}
				this.state = 430;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 40, this._ctx) ) {
				case 1:
					{
					this.state = 409;
					this.match(interviewParser.NL);
					this.state = 411;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (((((_la - 27)) & ~0x1F) === 0 && ((1 << (_la - 27)) & ((1 << (interviewParser.AMP - 27)) | (1 << (interviewParser.Greater - 27)) | (1 << (interviewParser.Less - 27)) | (1 << (interviewParser.RightAngle - 27)) | (1 << (interviewParser.RightArrow - 27)) | (1 << (interviewParser.STRING - 27)) | (1 << (interviewParser.NOTBITMARK - 27)) | (1 << (interviewParser.ELIPSIS - 27)) | (1 << (interviewParser.SENTENCE - 27)) | (1 << (interviewParser.BARSTRING - 27)))) !== 0)) {
						{
						this.state = 410;
						this.interview_answer();
						}
					}

					this.state = 416;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === interviewParser.S) {
						{
						{
						this.state = 413;
						this.match(interviewParser.S);
						}
						}
						this.state = 418;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					this.state = 427;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === interviewParser.OPDOLL || ((((_la - 62)) & ~0x1F) === 0 && ((1 << (_la - 62)) & ((1 << (interviewParser.AtShortanswer - 62)) | (1 << (interviewParser.AtLonganswer - 62)) | (1 << (interviewParser.AtExampleWithStr - 62)) | (1 << (interviewParser.AtExamplecol - 62)) | (1 << (interviewParser.AtExamplecl - 62)) | (1 << (interviewParser.AtSampleSolution - 62)) | (1 << (interviewParser.AtPartialAnswerS - 62)) | (1 << (interviewParser.AtPartialAnswer - 62)))) !== 0)) {
						{
						this.state = 425;
						this._errHandler.sync(this);
						switch (this._input.LA(1)) {
						case interviewParser.AtExampleWithStr:
						case interviewParser.AtExamplecol:
						case interviewParser.AtExamplecl:
							{
							this.state = 419;
							this.example();
							}
							break;
						case interviewParser.AtShortanswer:
							{
							this.state = 420;
							this.shortans();
							}
							break;
						case interviewParser.AtLonganswer:
							{
							this.state = 421;
							this.longans();
							}
							break;
						case interviewParser.OPDOLL:
							{
							this.state = 422;
							this.dollarans();
							}
							break;
						case interviewParser.AtPartialAnswerS:
						case interviewParser.AtPartialAnswer:
							{
							this.state = 423;
							this.partans();
							}
							break;
						case interviewParser.AtSampleSolution:
							{
							this.state = 424;
							this.sample_soln_prop();
							}
							break;
						default:
							throw new NoViableAltException(this);
						}
						}
						this.state = 429;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
					break;
				}
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 443;
				this._errHandler.sync(this);
				_alt = 1;
				do {
					switch (_alt) {
					case 1:
						{
						this.state = 443;
						this._errHandler.sync(this);
						switch ( this.interpreter.adaptivePredict(this._input, 41, this._ctx) ) {
						case 1:
							{
							this.state = 432;
							this.item();
							}
							break;

						case 2:
							{
							this.state = 433;
							this.instruction();
							}
							break;

						case 3:
							{
							this.state = 434;
							this.example();
							}
							break;

						case 4:
							{
							this.state = 435;
							this.shortans();
							}
							break;

						case 5:
							{
							this.state = 436;
							this.longans();
							}
							break;

						case 6:
							{
							this.state = 437;
							this.dollarans();
							}
							break;

						case 7:
							{
							this.state = 438;
							this.partans();
							}
							break;

						case 8:
							{
							this.state = 439;
							this.single_gap();
							}
							break;

						case 9:
							{
							this.state = 440;
							this.mark_text();
							}
							break;

						case 10:
							{
							this.state = 441;
							this.hint();
							}
							break;

						case 11:
							{
							this.state = 442;
							this.interview_sometext();
							}
							break;
						}
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					this.state = 445;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 42, this._ctx);
				} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
				this.state = 468;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 47, this._ctx) ) {
				case 1:
					{
					this.state = 447;
					this.match(interviewParser.NL);
					this.state = 449;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (((((_la - 27)) & ~0x1F) === 0 && ((1 << (_la - 27)) & ((1 << (interviewParser.AMP - 27)) | (1 << (interviewParser.Greater - 27)) | (1 << (interviewParser.Less - 27)) | (1 << (interviewParser.RightAngle - 27)) | (1 << (interviewParser.RightArrow - 27)) | (1 << (interviewParser.STRING - 27)) | (1 << (interviewParser.NOTBITMARK - 27)) | (1 << (interviewParser.ELIPSIS - 27)) | (1 << (interviewParser.SENTENCE - 27)) | (1 << (interviewParser.BARSTRING - 27)))) !== 0)) {
						{
						this.state = 448;
						this.interview_answer();
						}
					}

					this.state = 454;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === interviewParser.S) {
						{
						{
						this.state = 451;
						this.match(interviewParser.S);
						}
						}
						this.state = 456;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					this.state = 465;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === interviewParser.OPDOLL || ((((_la - 62)) & ~0x1F) === 0 && ((1 << (_la - 62)) & ((1 << (interviewParser.AtShortanswer - 62)) | (1 << (interviewParser.AtLonganswer - 62)) | (1 << (interviewParser.AtExampleWithStr - 62)) | (1 << (interviewParser.AtExamplecol - 62)) | (1 << (interviewParser.AtExamplecl - 62)) | (1 << (interviewParser.AtSampleSolution - 62)) | (1 << (interviewParser.AtPartialAnswerS - 62)) | (1 << (interviewParser.AtPartialAnswer - 62)))) !== 0)) {
						{
						this.state = 463;
						this._errHandler.sync(this);
						switch (this._input.LA(1)) {
						case interviewParser.AtExampleWithStr:
						case interviewParser.AtExamplecol:
						case interviewParser.AtExamplecl:
							{
							this.state = 457;
							this.example();
							}
							break;
						case interviewParser.AtShortanswer:
							{
							this.state = 458;
							this.shortans();
							}
							break;
						case interviewParser.AtLonganswer:
							{
							this.state = 459;
							this.longans();
							}
							break;
						case interviewParser.OPDOLL:
							{
							this.state = 460;
							this.dollarans();
							}
							break;
						case interviewParser.AtPartialAnswerS:
						case interviewParser.AtPartialAnswer:
							{
							this.state = 461;
							this.partans();
							}
							break;
						case interviewParser.AtSampleSolution:
							{
							this.state = 462;
							this.sample_soln_prop();
							}
							break;
						default:
							throw new NoViableAltException(this);
						}
						}
						this.state = 467;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
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
	public interview_sometext(): Interview_sometextContext {
		let _localctx: Interview_sometextContext = new Interview_sometextContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, interviewParser.RULE_interview_sometext);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 473;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 472;
					this.s_and_w();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 475;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 49, this._ctx);
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
	public interview_text(): Interview_textContext {
		let _localctx: Interview_textContext = new Interview_textContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, interviewParser.RULE_interview_text);
		try {
			let _alt: number;
			this.state = 496;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case interviewParser.AMP:
			case interviewParser.Greater:
			case interviewParser.Less:
			case interviewParser.RightAngle:
			case interviewParser.RightArrow:
			case interviewParser.STRING:
			case interviewParser.NOTBITMARK:
			case interviewParser.ELIPSIS:
			case interviewParser.SENTENCE:
			case interviewParser.BARSTRING:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 479;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 50, this._ctx) ) {
				case 1:
					{
					this.state = 477;
					this.match(interviewParser.STRING);
					this.state = 478;
					this.match(interviewParser.CL);
					}
					break;
				}
				this.state = 491;
				this._errHandler.sync(this);
				_alt = 1;
				do {
					switch (_alt) {
					case 1:
						{
						{
						this.state = 481;
						this.words();
						this.state = 483;
						this._errHandler.sync(this);
						switch ( this.interpreter.adaptivePredict(this._input, 51, this._ctx) ) {
						case 1:
							{
							this.state = 482;
							this.match(interviewParser.COLON);
							}
							break;
						}
						this.state = 488;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 52, this._ctx);
						while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
							if (_alt === 1) {
								{
								{
								this.state = 485;
								this.match(interviewParser.NL);
								}
								}
							}
							this.state = 490;
							this._errHandler.sync(this);
							_alt = this.interpreter.adaptivePredict(this._input, 52, this._ctx);
						}
						}
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					this.state = 493;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 53, this._ctx);
				} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
				}
				break;
			case interviewParser.LIST_LINE:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 495;
				this.match(interviewParser.LIST_LINE);
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
	public interview_answer(): Interview_answerContext {
		let _localctx: Interview_answerContext = new Interview_answerContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, interviewParser.RULE_interview_answer);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 502;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 498;
				this.words();
				this.state = 500;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === interviewParser.COLON) {
					{
					this.state = 499;
					this.match(interviewParser.COLON);
					}
				}

				}
				}
				this.state = 504;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (((((_la - 27)) & ~0x1F) === 0 && ((1 << (_la - 27)) & ((1 << (interviewParser.AMP - 27)) | (1 << (interviewParser.Greater - 27)) | (1 << (interviewParser.Less - 27)) | (1 << (interviewParser.RightAngle - 27)) | (1 << (interviewParser.RightArrow - 27)) | (1 << (interviewParser.STRING - 27)) | (1 << (interviewParser.NOTBITMARK - 27)) | (1 << (interviewParser.ELIPSIS - 27)) | (1 << (interviewParser.SENTENCE - 27)) | (1 << (interviewParser.BARSTRING - 27)))) !== 0));
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public longans(): LongansContext {
		let _localctx: LongansContext = new LongansContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, interviewParser.RULE_longans);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 506;
			this.match(interviewParser.AtLonganswer);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public shortans(): ShortansContext {
		let _localctx: ShortansContext = new ShortansContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, interviewParser.RULE_shortans);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 508;
			this.match(interviewParser.AtShortanswer);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public partans(): PartansContext {
		let _localctx: PartansContext = new PartansContext(this._ctx, this.state);
		this.enterRule(_localctx, 30, interviewParser.RULE_partans);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 510;
			_la = this._input.LA(1);
			if (!(_la === interviewParser.AtPartialAnswerS || _la === interviewParser.AtPartialAnswer)) {
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
	public sample_soln_prop(): Sample_soln_propContext {
		let _localctx: Sample_soln_propContext = new Sample_soln_propContext(this._ctx, this.state);
		this.enterRule(_localctx, 32, interviewParser.RULE_sample_soln_prop);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 512;
			this.match(interviewParser.AtSampleSolution);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public mark_text(): Mark_textContext {
		let _localctx: Mark_textContext = new Mark_textContext(this._ctx, this.state);
		this.enterRule(_localctx, 34, interviewParser.RULE_mark_text);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 514;
			this.match(interviewParser.OPS);
			this.state = 518;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 57, this._ctx);
			while (_alt !== 1 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1 + 1) {
					{
					{
					this.state = 515;
					this.matchWildcard();
					}
					}
				}
				this.state = 520;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 57, this._ctx);
			}
			this.state = 521;
			this.match(interviewParser.CL);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public query(): QueryContext {
		let _localctx: QueryContext = new QueryContext(this._ctx, this.state);
		this.enterRule(_localctx, 36, interviewParser.RULE_query);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 524;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 523;
				this.s_and_w();
				}
				}
				this.state = 526;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << interviewParser.S) | (1 << interviewParser.OPS) | (1 << interviewParser.COLON) | (1 << interviewParser.AMP) | (1 << interviewParser.DBLCOLON) | (1 << interviewParser.Greater))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (interviewParser.Less - 32)) | (1 << (interviewParser.RightAngle - 32)) | (1 << (interviewParser.RightArrow - 32)) | (1 << (interviewParser.DBLEQ - 32)) | (1 << (interviewParser.NUMERIC - 32)) | (1 << (interviewParser.STRING - 32)) | (1 << (interviewParser.NL - 32)) | (1 << (interviewParser.NOTBITMARK - 32)) | (1 << (interviewParser.ELIPSIS - 32)) | (1 << (interviewParser.SENTENCE - 32)) | (1 << (interviewParser.BARSTRING - 32)))) !== 0) || _la === interviewParser.URL);
			this.state = 529;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === interviewParser.AtExamplecl) {
				{
				this.state = 528;
				this.match(interviewParser.AtExamplecl);
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
	public answer(): AnswerContext {
		let _localctx: AnswerContext = new AnswerContext(this._ctx, this.state);
		this.enterRule(_localctx, 38, interviewParser.RULE_answer);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 532;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 531;
					this.s_and_w();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 534;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 60, this._ctx);
			} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
			this.state = 542;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === interviewParser.OR) {
				{
				this.state = 536;
				this.match(interviewParser.OR);
				this.state = 538;
				this._errHandler.sync(this);
				_alt = 1;
				do {
					switch (_alt) {
					case 1:
						{
						{
						this.state = 537;
						this.s_and_w();
						}
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					this.state = 540;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 61, this._ctx);
				} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
				}
			}

			this.state = 551;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === interviewParser.S || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (interviewParser.AtExampleWithStr - 64)) | (1 << (interviewParser.AtExamplecol - 64)) | (1 << (interviewParser.AtExamplecl - 64)))) !== 0)) {
				{
				this.state = 547;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === interviewParser.S) {
					{
					{
					this.state = 544;
					this.match(interviewParser.S);
					}
					}
					this.state = 549;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 550;
				this.example();
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
	public heading(): HeadingContext {
		let _localctx: HeadingContext = new HeadingContext(this._ctx, this.state);
		this.enterRule(_localctx, 40, interviewParser.RULE_heading);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 553;
			this.key_title();
			this.state = 555;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 554;
				this.match(interviewParser.NL);
				}
				}
				this.state = 557;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === interviewParser.NL);
			this.state = 559;
			this.value_title();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public key_title(): Key_titleContext {
		let _localctx: Key_titleContext = new Key_titleContext(this._ctx, this.state);
		this.enterRule(_localctx, 42, interviewParser.RULE_key_title);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 561;
			this.match(interviewParser.OPHASH);
			this.state = 563;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 562;
				this.s_and_w();
				}
				}
				this.state = 565;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << interviewParser.S) | (1 << interviewParser.OPS) | (1 << interviewParser.COLON) | (1 << interviewParser.AMP) | (1 << interviewParser.DBLCOLON) | (1 << interviewParser.Greater))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (interviewParser.Less - 32)) | (1 << (interviewParser.RightAngle - 32)) | (1 << (interviewParser.RightArrow - 32)) | (1 << (interviewParser.DBLEQ - 32)) | (1 << (interviewParser.NUMERIC - 32)) | (1 << (interviewParser.STRING - 32)) | (1 << (interviewParser.NL - 32)) | (1 << (interviewParser.NOTBITMARK - 32)) | (1 << (interviewParser.ELIPSIS - 32)) | (1 << (interviewParser.SENTENCE - 32)) | (1 << (interviewParser.BARSTRING - 32)))) !== 0) || _la === interviewParser.URL);
			this.state = 567;
			this.match(interviewParser.CL);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public value_title(): Value_titleContext {
		let _localctx: Value_titleContext = new Value_titleContext(this._ctx, this.state);
		this.enterRule(_localctx, 44, interviewParser.RULE_value_title);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 569;
			this.match(interviewParser.OPHASH);
			this.state = 571;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 570;
				this.s_and_w();
				}
				}
				this.state = 573;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << interviewParser.S) | (1 << interviewParser.OPS) | (1 << interviewParser.COLON) | (1 << interviewParser.AMP) | (1 << interviewParser.DBLCOLON) | (1 << interviewParser.Greater))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (interviewParser.Less - 32)) | (1 << (interviewParser.RightAngle - 32)) | (1 << (interviewParser.RightArrow - 32)) | (1 << (interviewParser.DBLEQ - 32)) | (1 << (interviewParser.NUMERIC - 32)) | (1 << (interviewParser.STRING - 32)) | (1 << (interviewParser.NL - 32)) | (1 << (interviewParser.NOTBITMARK - 32)) | (1 << (interviewParser.ELIPSIS - 32)) | (1 << (interviewParser.SENTENCE - 32)) | (1 << (interviewParser.BARSTRING - 32)))) !== 0) || _la === interviewParser.URL);
			this.state = 575;
			this.match(interviewParser.CL);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public ml_example(): Ml_exampleContext {
		let _localctx: Ml_exampleContext = new Ml_exampleContext(this._ctx, this.state);
		this.enterRule(_localctx, 46, interviewParser.RULE_ml_example);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 577;
			this.match(interviewParser.AtExamplecol);
			this.state = 585;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << interviewParser.S) | (1 << interviewParser.OPS) | (1 << interviewParser.COLON) | (1 << interviewParser.AMP) | (1 << interviewParser.DBLCOLON) | (1 << interviewParser.Greater))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (interviewParser.Less - 32)) | (1 << (interviewParser.RightAngle - 32)) | (1 << (interviewParser.RightArrow - 32)) | (1 << (interviewParser.DBLEQ - 32)) | (1 << (interviewParser.NUMERIC - 32)) | (1 << (interviewParser.STRING - 32)) | (1 << (interviewParser.NL - 32)) | (1 << (interviewParser.NOTBITMARK - 32)) | (1 << (interviewParser.ELIPSIS - 32)) | (1 << (interviewParser.SENTENCE - 32)) | (1 << (interviewParser.BARSTRING - 32)))) !== 0) || _la === interviewParser.URL) {
				{
				this.state = 579;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 68, this._ctx) ) {
				case 1:
					{
					this.state = 578;
					this.match(interviewParser.NL);
					}
					break;
				}
				this.state = 581;
				this.lines();
				this.state = 583;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === interviewParser.NL) {
					{
					this.state = 582;
					this.match(interviewParser.NL);
					}
				}

				}
			}

			this.state = 587;
			this.match(interviewParser.CL);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 48, interviewParser.RULE_bitElem);
		try {
			this.state = 611;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 71, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 589;
				this.match(interviewParser.NOTBITMARK);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 590;
				this.item();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 591;
				this.atdef();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 592;
				this.reference();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 593;
				this.title();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 594;
				this.instruction();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 595;
				this.hint();
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 596;
				this.gap();
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 597;
				this.s_and_w();
				}
				break;

			case 10:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 598;
				this.example();
				}
				break;

			case 11:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 599;
				this.bool_label();
				}
				break;

			case 12:
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 600;
				this.imagebit();
				}
				break;

			case 13:
				this.enterOuterAlt(_localctx, 13);
				{
				this.state = 601;
				this.audiobit();
				}
				break;

			case 14:
				this.enterOuterAlt(_localctx, 14);
				{
				this.state = 602;
				this.videobit();
				}
				break;

			case 15:
				this.enterOuterAlt(_localctx, 15);
				{
				this.state = 603;
				this.articlebit();
				}
				break;

			case 16:
				this.enterOuterAlt(_localctx, 16);
				{
				this.state = 604;
				this.documentbit();
				}
				break;

			case 17:
				this.enterOuterAlt(_localctx, 17);
				{
				this.state = 605;
				this.appbit();
				}
				break;

			case 18:
				this.enterOuterAlt(_localctx, 18);
				{
				this.state = 606;
				this.websitebit();
				}
				break;

			case 19:
				this.enterOuterAlt(_localctx, 19);
				{
				this.state = 607;
				this.stillimagefilmbit();
				}
				break;

			case 20:
				this.enterOuterAlt(_localctx, 20);
				{
				this.state = 608;
				this.angleref();
				}
				break;

			case 21:
				this.enterOuterAlt(_localctx, 21);
				{
				this.state = 609;
				this.anchor();
				}
				break;

			case 22:
				this.enterOuterAlt(_localctx, 22);
				{
				this.state = 610;
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
	public interview_footer(): Interview_footerContext {
		let _localctx: Interview_footerContext = new Interview_footerContext(this._ctx, this.state);
		this.enterRule(_localctx, 50, interviewParser.RULE_interview_footer);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 616;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 72, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 613;
					this.match(interviewParser.NL);
					}
					}
				}
				this.state = 618;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 72, this._ctx);
			}
			this.state = 619;
			this.footer_resource();
			this.state = 623;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 73, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 620;
					this.footer_resource();
					}
					}
				}
				this.state = 625;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 73, this._ctx);
			}
			this.state = 629;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 74, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 626;
					this.match(interviewParser.NL);
					}
					}
				}
				this.state = 631;
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
	public footer_resource(): Footer_resourceContext {
		let _localctx: Footer_resourceContext = new Footer_resourceContext(this._ctx, this.state);
		this.enterRule(_localctx, 52, interviewParser.RULE_footer_resource);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 642;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case interviewParser.S:
			case interviewParser.OPS:
			case interviewParser.COLON:
			case interviewParser.AMP:
			case interviewParser.DBLCOLON:
			case interviewParser.Greater:
			case interviewParser.Less:
			case interviewParser.RightAngle:
			case interviewParser.RightArrow:
			case interviewParser.DBLEQ:
			case interviewParser.NUMERIC:
			case interviewParser.STRING:
			case interviewParser.NL:
			case interviewParser.NOTBITMARK:
			case interviewParser.ELIPSIS:
			case interviewParser.SENTENCE:
			case interviewParser.BARSTRING:
			case interviewParser.URL:
			case interviewParser.LIST_LINE:
				{
				this.state = 632;
				this.footer_text();
				}
				break;
			case interviewParser.OpAmpImage:
			case interviewParser.OpAmpImageZoom:
			case interviewParser.OpAmpImageLink:
				{
				this.state = 633;
				this.imagebit();
				}
				break;
			case interviewParser.OpAmpAudio:
			case interviewParser.OpAmpAudioLink:
			case interviewParser.OpAmpAudioEmbed:
				{
				this.state = 634;
				this.audiobit();
				}
				break;
			case interviewParser.OpAmpVideo:
			case interviewParser.OpAmpVideoLink:
			case interviewParser.OpAmpVideoEmbed:
				{
				this.state = 635;
				this.videobit();
				}
				break;
			case interviewParser.ArticleText:
			case interviewParser.OpAmpArticle:
			case interviewParser.OpAmpArticleLink:
				{
				this.state = 636;
				this.articlebit();
				}
				break;
			case interviewParser.OpAmpDocument:
			case interviewParser.OpAmpDocumentLink:
			case interviewParser.OpAmpDocumentDownload:
			case interviewParser.OpAmpDocumentEmbed:
				{
				this.state = 637;
				this.documentbit();
				}
				break;
			case interviewParser.OpAmpApp:
			case interviewParser.OpAmpAppLink:
				{
				this.state = 638;
				this.appbit();
				}
				break;
			case interviewParser.OpAmpWebsite:
			case interviewParser.OpAmpWebsiteLink:
				{
				this.state = 639;
				this.websitebit();
				}
				break;
			case interviewParser.AtReference:
				{
				this.state = 640;
				this.reference();
				}
				break;
			case interviewParser.OPQ:
				{
				this.state = 641;
				this.hint();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 647;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 76, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 644;
					this.match(interviewParser.NL);
					}
					}
				}
				this.state = 649;
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
	public footer_text(): Footer_textContext {
		let _localctx: Footer_textContext = new Footer_textContext(this._ctx, this.state);
		this.enterRule(_localctx, 54, interviewParser.RULE_footer_text);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 652;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					this.state = 652;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case interviewParser.LIST_LINE:
						{
						this.state = 650;
						this.match(interviewParser.LIST_LINE);
						}
						break;
					case interviewParser.S:
					case interviewParser.OPS:
					case interviewParser.COLON:
					case interviewParser.AMP:
					case interviewParser.DBLCOLON:
					case interviewParser.Greater:
					case interviewParser.Less:
					case interviewParser.RightAngle:
					case interviewParser.RightArrow:
					case interviewParser.DBLEQ:
					case interviewParser.NUMERIC:
					case interviewParser.STRING:
					case interviewParser.NL:
					case interviewParser.NOTBITMARK:
					case interviewParser.ELIPSIS:
					case interviewParser.SENTENCE:
					case interviewParser.BARSTRING:
					case interviewParser.URL:
						{
						this.state = 651;
						this.s_and_w();
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
				this.state = 654;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 78, this._ctx);
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
	public gap(): GapContext {
		let _localctx: GapContext = new GapContext(this._ctx, this.state);
		this.enterRule(_localctx, 56, interviewParser.RULE_gap);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 656;
			this.single_gap();
			this.state = 664;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 80, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					this.state = 662;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case interviewParser.OPU:
						{
						this.state = 657;
						this.single_gap();
						}
						break;
					case interviewParser.OPB:
						{
						this.state = 658;
						this.instruction();
						}
						break;
					case interviewParser.OPQ:
						{
						this.state = 659;
						this.hint();
						}
						break;
					case interviewParser.OPC:
					case interviewParser.OPITEM:
						{
						this.state = 660;
						this.item();
						}
						break;
					case interviewParser.AtExampleWithStr:
					case interviewParser.AtExamplecol:
					case interviewParser.AtExamplecl:
						{
						this.state = 661;
						this.example();
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					}
				}
				this.state = 666;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 80, this._ctx);
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
		this.enterRule(_localctx, 58, interviewParser.RULE_single_gap);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 667;
			this.match(interviewParser.OPU);
			this.state = 671;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 81, this._ctx) ) {
			case 1:
				{
				this.state = 668;
				this.match(interviewParser.NUMERIC);
				}
				break;

			case 2:
				{
				this.state = 669;
				this.match(interviewParser.STRING);
				}
				break;

			case 3:
				// tslint:disable-next-line:no-empty
				{
				}
				break;
			}
			this.state = 676;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << interviewParser.S) | (1 << interviewParser.OPS) | (1 << interviewParser.COLON) | (1 << interviewParser.AMP) | (1 << interviewParser.DBLCOLON) | (1 << interviewParser.Greater))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (interviewParser.Less - 32)) | (1 << (interviewParser.RightAngle - 32)) | (1 << (interviewParser.RightArrow - 32)) | (1 << (interviewParser.DBLEQ - 32)) | (1 << (interviewParser.NUMERIC - 32)) | (1 << (interviewParser.STRING - 32)) | (1 << (interviewParser.NL - 32)) | (1 << (interviewParser.NOTBITMARK - 32)) | (1 << (interviewParser.ELIPSIS - 32)) | (1 << (interviewParser.SENTENCE - 32)) | (1 << (interviewParser.BARSTRING - 32)))) !== 0) || _la === interviewParser.URL) {
				{
				{
				this.state = 673;
				this.s_and_w();
				}
				}
				this.state = 678;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 679;
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
	public atpoint(): AtpointContext {
		let _localctx: AtpointContext = new AtpointContext(this._ctx, this.state);
		this.enterRule(_localctx, 60, interviewParser.RULE_atpoint);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 681;
			this.match(interviewParser.AtPoints);
			this.state = 682;
			this.match(interviewParser.NUMERIC);
			this.state = 683;
			this.match(interviewParser.CL);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 62, interviewParser.RULE_format);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 688;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 83, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 685;
					this.resource_format();
					}
					}
				}
				this.state = 690;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 83, this._ctx);
			}
			this.state = 696;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 87)) & ~0x1F) === 0 && ((1 << (_la - 87)) & ((1 << (interviewParser.AmpAudio - 87)) | (1 << (interviewParser.AmpImage - 87)) | (1 << (interviewParser.AmpImageZoom - 87)) | (1 << (interviewParser.AmpVideo - 87)) | (1 << (interviewParser.AmpArticle - 87)) | (1 << (interviewParser.AmpDocument - 87)) | (1 << (interviewParser.AmpApp - 87)) | (1 << (interviewParser.AmpWebsite - 87)) | (1 << (interviewParser.AmpStillImageFilm - 87)) | (1 << (interviewParser.AmpPdf - 87)) | (1 << (interviewParser.AmpAudioLink - 87)) | (1 << (interviewParser.AmpImageLink - 87)) | (1 << (interviewParser.AmpVideoLink - 87)) | (1 << (interviewParser.AmpArticleLink - 87)) | (1 << (interviewParser.AmpDocumentLink - 87)) | (1 << (interviewParser.AmpDocumentDownload - 87)) | (1 << (interviewParser.AmpAppLink - 87)) | (1 << (interviewParser.AmpWebsiteLink - 87)) | (1 << (interviewParser.AmpStillImageFilmLink - 87)))) !== 0) || ((((_la - 127)) & ~0x1F) === 0 && ((1 << (_la - 127)) & ((1 << (interviewParser.AmpVideoEmbed - 127)) | (1 << (interviewParser.AmpDocumentEmbed - 127)) | (1 << (interviewParser.AmpStillImageFilmEmbed - 127)) | (1 << (interviewParser.ColonText - 127)) | (1 << (interviewParser.ColonJson - 127)))) !== 0)) {
				{
				this.state = 694;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case interviewParser.ColonText:
					{
					this.state = 691;
					this.match(interviewParser.ColonText);
					}
					break;
				case interviewParser.ColonJson:
					{
					this.state = 692;
					this.match(interviewParser.ColonJson);
					}
					break;
				case interviewParser.AmpAudio:
				case interviewParser.AmpImage:
				case interviewParser.AmpImageZoom:
				case interviewParser.AmpVideo:
				case interviewParser.AmpArticle:
				case interviewParser.AmpDocument:
				case interviewParser.AmpApp:
				case interviewParser.AmpWebsite:
				case interviewParser.AmpStillImageFilm:
				case interviewParser.AmpPdf:
				case interviewParser.AmpAudioLink:
				case interviewParser.AmpImageLink:
				case interviewParser.AmpVideoLink:
				case interviewParser.AmpArticleLink:
				case interviewParser.AmpDocumentLink:
				case interviewParser.AmpDocumentDownload:
				case interviewParser.AmpAppLink:
				case interviewParser.AmpWebsiteLink:
				case interviewParser.AmpStillImageFilmLink:
				case interviewParser.AmpVideoEmbed:
				case interviewParser.AmpDocumentEmbed:
				case interviewParser.AmpStillImageFilmEmbed:
					{
					this.state = 693;
					this.resource_format_extra();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				this.state = 698;
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
		this.enterRule(_localctx, 64, interviewParser.RULE_resource_format);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 699;
			_la = this._input.LA(1);
			if (!(((((_la - 91)) & ~0x1F) === 0 && ((1 << (_la - 91)) & ((1 << (interviewParser.AmpArticle - 91)) | (1 << (interviewParser.AmpDocument - 91)) | (1 << (interviewParser.AmpWebsite - 91)) | (1 << (interviewParser.AmpStillImageFilm - 91)) | (1 << (interviewParser.AmpAudioLink - 91)) | (1 << (interviewParser.AmpImageLink - 91)) | (1 << (interviewParser.AmpVideoLink - 91)) | (1 << (interviewParser.AmpArticleLink - 91)) | (1 << (interviewParser.AmpDocumentLink - 91)) | (1 << (interviewParser.AmpDocumentDownload - 91)) | (1 << (interviewParser.AmpAppLink - 91)) | (1 << (interviewParser.AmpWebsiteLink - 91)) | (1 << (interviewParser.AmpStillImageFilmLink - 91)))) !== 0) || ((((_la - 127)) & ~0x1F) === 0 && ((1 << (_la - 127)) & ((1 << (interviewParser.AmpVideoEmbed - 127)) | (1 << (interviewParser.AmpAudioEmbed - 127)) | (1 << (interviewParser.AmpDocumentEmbed - 127)) | (1 << (interviewParser.AmpStillImageFilmEmbed - 127)) | (1 << (interviewParser.BitmarkMinus - 127)) | (1 << (interviewParser.BitmarkPlus - 127)) | (1 << (interviewParser.ColonJson - 127)) | (1 << (interviewParser.Prosemirror - 127)) | (1 << (interviewParser.Placeholder - 127)))) !== 0))) {
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
		this.enterRule(_localctx, 66, interviewParser.RULE_resource_format_extra);
		try {
			this.state = 710;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case interviewParser.AmpImage:
			case interviewParser.AmpImageZoom:
			case interviewParser.AmpImageLink:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 701;
				this.image_format();
				}
				break;
			case interviewParser.AmpAudio:
			case interviewParser.AmpAudioLink:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 702;
				this.audio_format();
				}
				break;
			case interviewParser.AmpVideo:
			case interviewParser.AmpVideoLink:
			case interviewParser.AmpVideoEmbed:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 703;
				this.video_format();
				}
				break;
			case interviewParser.AmpArticle:
			case interviewParser.AmpArticleLink:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 704;
				this.article_format();
				}
				break;
			case interviewParser.AmpDocument:
			case interviewParser.AmpDocumentLink:
			case interviewParser.AmpDocumentDownload:
			case interviewParser.AmpDocumentEmbed:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 705;
				this.document_format();
				}
				break;
			case interviewParser.AmpApp:
			case interviewParser.AmpAppLink:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 706;
				this.app_format();
				}
				break;
			case interviewParser.AmpWebsite:
			case interviewParser.AmpWebsiteLink:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 707;
				this.website_format();
				}
				break;
			case interviewParser.AmpStillImageFilm:
			case interviewParser.AmpStillImageFilmLink:
			case interviewParser.AmpStillImageFilmEmbed:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 708;
				this.stillimagefilm_format();
				}
				break;
			case interviewParser.AmpPdf:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 709;
				this.match(interviewParser.AmpPdf);
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
		this.enterRule(_localctx, 68, interviewParser.RULE_format2);
		try {
			this.state = 718;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case interviewParser.BitmarkMinus:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 712;
				this.match(interviewParser.BitmarkMinus);
				}
				break;
			case interviewParser.BitmarkPlus:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 713;
				this.match(interviewParser.BitmarkPlus);
				}
				break;
			case interviewParser.ColonText:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 714;
				this.match(interviewParser.ColonText);
				}
				break;
			case interviewParser.Placeholder:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 715;
				this.match(interviewParser.Placeholder);
				}
				break;
			case interviewParser.ColonJson:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 716;
				this.match(interviewParser.ColonJson);
				}
				break;
			case interviewParser.EOF:
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
		this.enterRule(_localctx, 70, interviewParser.RULE_image_format);
		let _la: number;
		try {
			this.state = 733;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case interviewParser.AmpImage:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 720;
				this.match(interviewParser.AmpImage);
				this.state = 723;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case interviewParser.Image_type:
					{
					{
					this.state = 721;
					this.match(interviewParser.Image_type);
					}
					}
					break;
				case interviewParser.DotArticleAtt:
					{
					{
					this.state = 722;
					this.match(interviewParser.DotArticleAtt);
					}
					}
					break;
				case interviewParser.CL:
				case interviewParser.AmpAudio:
				case interviewParser.AmpImage:
				case interviewParser.AmpImageZoom:
				case interviewParser.AmpVideo:
				case interviewParser.AmpArticle:
				case interviewParser.AmpDocument:
				case interviewParser.AmpApp:
				case interviewParser.AmpWebsite:
				case interviewParser.AmpStillImageFilm:
				case interviewParser.AmpPdf:
				case interviewParser.AmpAudioLink:
				case interviewParser.AmpImageLink:
				case interviewParser.AmpVideoLink:
				case interviewParser.AmpArticleLink:
				case interviewParser.AmpDocumentLink:
				case interviewParser.AmpDocumentDownload:
				case interviewParser.AmpAppLink:
				case interviewParser.AmpWebsiteLink:
				case interviewParser.AmpStillImageFilmLink:
				case interviewParser.AmpVideoEmbed:
				case interviewParser.AmpDocumentEmbed:
				case interviewParser.AmpStillImageFilmEmbed:
				case interviewParser.ColonText:
				case interviewParser.ColonJson:
					break;
				default:
					break;
				}
				}
				break;
			case interviewParser.AmpImageLink:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 725;
				this.match(interviewParser.AmpImageLink);
				this.state = 727;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === interviewParser.Image_type) {
					{
					this.state = 726;
					this.match(interviewParser.Image_type);
					}
				}

				}
				break;
			case interviewParser.AmpImageZoom:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 729;
				this.match(interviewParser.AmpImageZoom);
				this.state = 731;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === interviewParser.Image_type) {
					{
					this.state = 730;
					this.match(interviewParser.Image_type);
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
		this.enterRule(_localctx, 72, interviewParser.RULE_video_format);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 735;
			_la = this._input.LA(1);
			if (!(_la === interviewParser.AmpVideo || _la === interviewParser.AmpVideoLink || _la === interviewParser.AmpVideoEmbed)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 738;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === interviewParser.COLON) {
				{
				this.state = 736;
				this.match(interviewParser.COLON);
				this.state = 737;
				this.match(interviewParser.Video_type);
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
		this.enterRule(_localctx, 74, interviewParser.RULE_article_format);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 740;
			_la = this._input.LA(1);
			if (!(_la === interviewParser.AmpArticle || _la === interviewParser.AmpArticleLink)) {
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
		this.enterRule(_localctx, 76, interviewParser.RULE_document_format);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 742;
			_la = this._input.LA(1);
			if (!(((((_la - 92)) & ~0x1F) === 0 && ((1 << (_la - 92)) & ((1 << (interviewParser.AmpDocument - 92)) | (1 << (interviewParser.AmpDocumentLink - 92)) | (1 << (interviewParser.AmpDocumentDownload - 92)))) !== 0) || _la === interviewParser.AmpDocumentEmbed)) {
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
		this.enterRule(_localctx, 78, interviewParser.RULE_app_format);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 744;
			_la = this._input.LA(1);
			if (!(_la === interviewParser.AmpApp || _la === interviewParser.AmpAppLink)) {
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
		this.enterRule(_localctx, 80, interviewParser.RULE_website_format);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 746;
			_la = this._input.LA(1);
			if (!(_la === interviewParser.AmpWebsite || _la === interviewParser.AmpWebsiteLink)) {
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
		this.enterRule(_localctx, 82, interviewParser.RULE_stillimagefilm_format);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 748;
			_la = this._input.LA(1);
			if (!(_la === interviewParser.AmpStillImageFilm || _la === interviewParser.AmpStillImageFilmLink || _la === interviewParser.AmpStillImageFilmEmbed)) {
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
		this.enterRule(_localctx, 84, interviewParser.RULE_op_article_format);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 750;
			_la = this._input.LA(1);
			if (!(_la === interviewParser.OpAmpArticle || _la === interviewParser.OpAmpArticleLink)) {
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
		this.enterRule(_localctx, 86, interviewParser.RULE_op_document_format);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 752;
			_la = this._input.LA(1);
			if (!(((((_la - 103)) & ~0x1F) === 0 && ((1 << (_la - 103)) & ((1 << (interviewParser.OpAmpDocument - 103)) | (1 << (interviewParser.OpAmpDocumentLink - 103)) | (1 << (interviewParser.OpAmpDocumentDownload - 103)) | (1 << (interviewParser.OpAmpDocumentEmbed - 103)))) !== 0))) {
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
		this.enterRule(_localctx, 88, interviewParser.RULE_op_app_format);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 754;
			_la = this._input.LA(1);
			if (!(_la === interviewParser.OpAmpApp || _la === interviewParser.OpAmpAppLink)) {
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
		this.enterRule(_localctx, 90, interviewParser.RULE_op_website_format);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 756;
			_la = this._input.LA(1);
			if (!(_la === interviewParser.OpAmpWebsite || _la === interviewParser.OpAmpWebsiteLink)) {
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
		this.enterRule(_localctx, 92, interviewParser.RULE_op_video_format);
		try {
			this.state = 773;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case interviewParser.OpAmpVideo:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 758;
				this.match(interviewParser.OpAmpVideo);
				this.state = 761;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 93, this._ctx) ) {
				case 1:
					{
					this.state = 759;
					this.match(interviewParser.COLON);
					this.state = 760;
					this.match(interviewParser.Video_type);
					}
					break;
				}
				}
				break;
			case interviewParser.OpAmpVideoLink:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 763;
				this.match(interviewParser.OpAmpVideoLink);
				this.state = 766;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 94, this._ctx) ) {
				case 1:
					{
					this.state = 764;
					this.match(interviewParser.COLON);
					this.state = 765;
					this.match(interviewParser.Video_type);
					}
					break;
				}
				}
				break;
			case interviewParser.OpAmpVideoEmbed:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 768;
				this.match(interviewParser.OpAmpVideoEmbed);
				this.state = 771;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 95, this._ctx) ) {
				case 1:
					{
					this.state = 769;
					this.match(interviewParser.COLON);
					this.state = 770;
					this.match(interviewParser.Video_type);
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
		this.enterRule(_localctx, 94, interviewParser.RULE_op_stillimagefilm_format);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 775;
			_la = this._input.LA(1);
			if (!(((((_la - 106)) & ~0x1F) === 0 && ((1 << (_la - 106)) & ((1 << (interviewParser.OpAmpStillImageFilm - 106)) | (1 << (interviewParser.OpAmpStillImageFilmLink - 106)) | (1 << (interviewParser.OpAmpStillImageFilmEmbed - 106)))) !== 0))) {
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
		this.enterRule(_localctx, 96, interviewParser.RULE_articlebit);
		try {
			this.state = 783;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case interviewParser.OpAmpArticle:
			case interviewParser.OpAmpArticleLink:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 777;
				this.op_article_format();
				this.state = 778;
				this.match(interviewParser.COLON);
				this.state = 779;
				this.url();
				this.state = 780;
				this.match(interviewParser.CL);
				}
				break;
			case interviewParser.ArticleText:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 782;
				this.match(interviewParser.ArticleText);
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
		this.enterRule(_localctx, 98, interviewParser.RULE_documentbit);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 785;
			this.op_document_format();
			this.state = 786;
			this.match(interviewParser.COLON);
			this.state = 787;
			this.url();
			this.state = 788;
			this.match(interviewParser.CL);
			this.state = 793;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === interviewParser.OPATALT) {
				{
				this.state = 789;
				this.match(interviewParser.OPATALT);
				this.state = 790;
				this.words();
				this.state = 791;
				this.match(interviewParser.CL);
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
		this.enterRule(_localctx, 100, interviewParser.RULE_websitebit);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 795;
			this.op_website_format();
			this.state = 796;
			this.match(interviewParser.COLON);
			this.state = 797;
			this.url();
			this.state = 798;
			this.match(interviewParser.CL);
			this.state = 803;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === interviewParser.OPATALT) {
				{
				this.state = 799;
				this.match(interviewParser.OPATALT);
				this.state = 800;
				this.words();
				this.state = 801;
				this.match(interviewParser.CL);
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
		this.enterRule(_localctx, 102, interviewParser.RULE_appbit);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 805;
			this.op_app_format();
			this.state = 806;
			this.match(interviewParser.COLON);
			this.state = 809;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case interviewParser.URL:
				{
				this.state = 807;
				this.url();
				}
				break;
			case interviewParser.TEL:
				{
				this.state = 808;
				this.telephone();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 811;
			this.match(interviewParser.CL);
			this.state = 816;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === interviewParser.OPATALT) {
				{
				this.state = 812;
				this.match(interviewParser.OPATALT);
				this.state = 813;
				this.words();
				this.state = 814;
				this.match(interviewParser.CL);
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
		this.enterRule(_localctx, 104, interviewParser.RULE_stillimagefilmbit);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 818;
			this.stillimg_one();
			this.state = 822;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 102, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 819;
					this.resource_chained();
					}
					}
				}
				this.state = 824;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 102, this._ctx);
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
		this.enterRule(_localctx, 106, interviewParser.RULE_stillimg_one);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 825;
			this.op_stillimagefilm_format();
			this.state = 826;
			this.match(interviewParser.COLON);
			this.state = 830;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === interviewParser.S) {
				{
				{
				this.state = 827;
				this.match(interviewParser.S);
				}
				}
				this.state = 832;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 833;
			this.url();
			this.state = 834;
			this.match(interviewParser.CL);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 108, interviewParser.RULE_videobit);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 836;
			this.video_one();
			this.state = 840;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 104, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 837;
					this.resource_chained();
					}
					}
				}
				this.state = 842;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 104, this._ctx);
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
		this.enterRule(_localctx, 110, interviewParser.RULE_video_one);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 843;
			this.op_video_format();
			this.state = 844;
			this.match(interviewParser.COLON);
			this.state = 845;
			this.url();
			this.state = 846;
			this.match(interviewParser.CL);
			this.state = 851;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 105, this._ctx) ) {
			case 1:
				{
				this.state = 847;
				this.match(interviewParser.OPATALT);
				this.state = 848;
				this.words();
				this.state = 849;
				this.match(interviewParser.CL);
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
		this.enterRule(_localctx, 112, interviewParser.RULE_imagebit);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 853;
			this.image_one();
			this.state = 857;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 106, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 854;
					this.image_chained();
					}
					}
				}
				this.state = 859;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 106, this._ctx);
			}
			this.state = 862;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 107, this._ctx) ) {
			case 1:
				{
				this.state = 860;
				this.match(interviewParser.NL);
				this.state = 861;
				this.match(interviewParser.ShowInIndex);
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
		this.enterRule(_localctx, 114, interviewParser.RULE_image_one);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 864;
			this.op_image_format();
			this.state = 865;
			this.match(interviewParser.COLON);
			this.state = 869;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === interviewParser.S) {
				{
				{
				this.state = 866;
				this.match(interviewParser.S);
				}
				}
				this.state = 871;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 872;
			this.url();
			this.state = 873;
			this.match(interviewParser.CL);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 116, interviewParser.RULE_op_image_format);
		let _la: number;
		try {
			this.state = 888;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case interviewParser.OpAmpImage:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 875;
				this.match(interviewParser.OpAmpImage);
				this.state = 878;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case interviewParser.Image_type:
					{
					{
					this.state = 876;
					this.match(interviewParser.Image_type);
					}
					}
					break;
				case interviewParser.DotArticleAtt:
					{
					{
					this.state = 877;
					this.match(interviewParser.DotArticleAtt);
					}
					}
					break;
				case interviewParser.COLON:
					break;
				default:
					break;
				}
				}
				break;
			case interviewParser.OpAmpImageLink:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 880;
				this.match(interviewParser.OpAmpImageLink);
				this.state = 882;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === interviewParser.Image_type) {
					{
					this.state = 881;
					this.match(interviewParser.Image_type);
					}
				}

				}
				break;
			case interviewParser.OpAmpImageZoom:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 884;
				this.match(interviewParser.OpAmpImageZoom);
				this.state = 886;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === interviewParser.Image_type) {
					{
					this.state = 885;
					this.match(interviewParser.Image_type);
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
		this.enterRule(_localctx, 118, interviewParser.RULE_image_chained);
		let _la: number;
		try {
			let _alt: number;
			this.state = 907;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case interviewParser.AtSrc:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 890;
				this.match(interviewParser.AtSrc);
				this.state = 891;
				this.match(interviewParser.COLON);
				this.state = 892;
				this.url();
				this.state = 893;
				this.match(interviewParser.CL);
				}
				break;
			case interviewParser.AtWidth:
			case interviewParser.AtHeight:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 895;
				_la = this._input.LA(1);
				if (!(_la === interviewParser.AtWidth || _la === interviewParser.AtHeight)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 896;
				this.match(interviewParser.COLON);
				this.state = 897;
				this.match(interviewParser.NUMERIC);
				this.state = 898;
				this.match(interviewParser.CL);
				}
				break;
			case interviewParser.OPATALT:
			case interviewParser.OpAtCaption:
			case interviewParser.OpAtLicense:
			case interviewParser.OpAtCopyright:
			case interviewParser.OpAtSearch:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 899;
				_la = this._input.LA(1);
				if (!(((((_la - 75)) & ~0x1F) === 0 && ((1 << (_la - 75)) & ((1 << (interviewParser.OPATALT - 75)) | (1 << (interviewParser.OpAtCaption - 75)) | (1 << (interviewParser.OpAtLicense - 75)) | (1 << (interviewParser.OpAtCopyright - 75)) | (1 << (interviewParser.OpAtSearch - 75)))) !== 0))) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 903;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 113, this._ctx);
				while (_alt !== 1 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1 + 1) {
						{
						{
						this.state = 900;
						this.matchWildcard();
						}
						}
					}
					this.state = 905;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 113, this._ctx);
				}
				this.state = 906;
				this.match(interviewParser.CL);
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
		this.enterRule(_localctx, 120, interviewParser.RULE_image_chained4match);
		let _la: number;
		try {
			let _alt: number;
			this.state = 926;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case interviewParser.AtSrc:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 909;
				this.match(interviewParser.AtSrc);
				this.state = 910;
				this.match(interviewParser.COLON);
				this.state = 911;
				this.url();
				this.state = 912;
				this.match(interviewParser.CL);
				}
				break;
			case interviewParser.AtWidth:
			case interviewParser.AtHeight:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 914;
				_la = this._input.LA(1);
				if (!(_la === interviewParser.AtWidth || _la === interviewParser.AtHeight)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 915;
				this.match(interviewParser.COLON);
				this.state = 916;
				this.match(interviewParser.NUMERIC);
				this.state = 917;
				this.match(interviewParser.CL);
				}
				break;
			case interviewParser.OPATALT:
			case interviewParser.OpAtCaption:
			case interviewParser.OpAtLicense:
			case interviewParser.OpAtCopyright:
			case interviewParser.OpAtSearch:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 918;
				_la = this._input.LA(1);
				if (!(((((_la - 75)) & ~0x1F) === 0 && ((1 << (_la - 75)) & ((1 << (interviewParser.OPATALT - 75)) | (1 << (interviewParser.OpAtCaption - 75)) | (1 << (interviewParser.OpAtLicense - 75)) | (1 << (interviewParser.OpAtCopyright - 75)) | (1 << (interviewParser.OpAtSearch - 75)))) !== 0))) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 922;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 115, this._ctx);
				while (_alt !== 1 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1 + 1) {
						{
						{
						this.state = 919;
						this.matchWildcard();
						}
						}
					}
					this.state = 924;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 115, this._ctx);
				}
				this.state = 925;
				this.match(interviewParser.CL);
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
		this.enterRule(_localctx, 122, interviewParser.RULE_audiobit);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 928;
			this.audio_one();
			this.state = 932;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 117, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 929;
					this.resource_chained();
					}
					}
				}
				this.state = 934;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 117, this._ctx);
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
		this.enterRule(_localctx, 124, interviewParser.RULE_audio_one);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 935;
			this.op_audio_format();
			this.state = 936;
			this.match(interviewParser.COLON);
			this.state = 937;
			this.url();
			this.state = 938;
			this.match(interviewParser.CL);
			this.state = 943;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 118, this._ctx) ) {
			case 1:
				{
				this.state = 939;
				this.match(interviewParser.OPATALT);
				this.state = 940;
				this.words();
				this.state = 941;
				this.match(interviewParser.CL);
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
		this.enterRule(_localctx, 126, interviewParser.RULE_audio_format);
		let _la: number;
		try {
			this.state = 955;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case interviewParser.AmpAudio:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 945;
				this.match(interviewParser.AmpAudio);
				this.state = 948;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === interviewParser.COLON) {
					{
					this.state = 946;
					this.match(interviewParser.COLON);
					this.state = 947;
					this.match(interviewParser.Audio_type);
					}
				}

				}
				break;
			case interviewParser.AmpAudioLink:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 950;
				this.match(interviewParser.AmpAudioLink);
				this.state = 953;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === interviewParser.COLON) {
					{
					this.state = 951;
					this.match(interviewParser.COLON);
					this.state = 952;
					this.match(interviewParser.Audio_type);
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
		this.enterRule(_localctx, 128, interviewParser.RULE_op_audio_format);
		try {
			this.state = 972;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case interviewParser.OpAmpAudio:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 957;
				this.match(interviewParser.OpAmpAudio);
				this.state = 960;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 122, this._ctx) ) {
				case 1:
					{
					this.state = 958;
					this.match(interviewParser.COLON);
					this.state = 959;
					this.match(interviewParser.Audio_type);
					}
					break;
				}
				}
				break;
			case interviewParser.OpAmpAudioLink:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 962;
				this.match(interviewParser.OpAmpAudioLink);
				this.state = 965;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 123, this._ctx) ) {
				case 1:
					{
					this.state = 963;
					this.match(interviewParser.COLON);
					this.state = 964;
					this.match(interviewParser.Audio_type);
					}
					break;
				}
				}
				break;
			case interviewParser.OpAmpAudioEmbed:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 967;
				this.match(interviewParser.OpAmpAudioEmbed);
				this.state = 970;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 124, this._ctx) ) {
				case 1:
					{
					this.state = 968;
					this.match(interviewParser.COLON);
					this.state = 969;
					this.match(interviewParser.Audio_type);
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
		this.enterRule(_localctx, 130, interviewParser.RULE_resource_chained);
		let _la: number;
		try {
			let _alt: number;
			this.state = 1005;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case interviewParser.OPA:
			case interviewParser.AtSrc:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 977;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case interviewParser.OPA:
					{
					this.state = 974;
					this.match(interviewParser.OPA);
					this.state = 975;
					this.s_and_w();
					}
					break;
				case interviewParser.AtSrc:
					{
					this.state = 976;
					this.match(interviewParser.AtSrc);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 979;
				this.match(interviewParser.COLON);
				this.state = 983;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 127, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 980;
						this.match(interviewParser.S);
						}
						}
					}
					this.state = 985;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 127, this._ctx);
				}
				this.state = 988;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					this.state = 988;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 128, this._ctx) ) {
					case 1:
						{
						this.state = 986;
						this.s_and_w();
						}
						break;

					case 2:
						{
						this.state = 987;
						this.match(interviewParser.NL);
						}
						break;
					}
					}
					this.state = 990;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << interviewParser.S) | (1 << interviewParser.OPS) | (1 << interviewParser.COLON) | (1 << interviewParser.AMP) | (1 << interviewParser.DBLCOLON) | (1 << interviewParser.Greater))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (interviewParser.Less - 32)) | (1 << (interviewParser.RightAngle - 32)) | (1 << (interviewParser.RightArrow - 32)) | (1 << (interviewParser.DBLEQ - 32)) | (1 << (interviewParser.NUMERIC - 32)) | (1 << (interviewParser.STRING - 32)) | (1 << (interviewParser.NL - 32)) | (1 << (interviewParser.NOTBITMARK - 32)) | (1 << (interviewParser.ELIPSIS - 32)) | (1 << (interviewParser.SENTENCE - 32)) | (1 << (interviewParser.BARSTRING - 32)))) !== 0) || _la === interviewParser.URL);
				this.state = 992;
				this.match(interviewParser.CL);
				}
				break;
			case interviewParser.AtWidth:
			case interviewParser.AtHeight:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 993;
				_la = this._input.LA(1);
				if (!(_la === interviewParser.AtWidth || _la === interviewParser.AtHeight)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 994;
				this.match(interviewParser.COLON);
				this.state = 995;
				this.match(interviewParser.NUMERIC);
				this.state = 996;
				this.match(interviewParser.CL);
				}
				break;
			case interviewParser.OPATALT:
			case interviewParser.OpAtCaption:
			case interviewParser.OpAtLicense:
			case interviewParser.OpAtCopyright:
			case interviewParser.OpAtSearch:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 997;
				_la = this._input.LA(1);
				if (!(((((_la - 75)) & ~0x1F) === 0 && ((1 << (_la - 75)) & ((1 << (interviewParser.OPATALT - 75)) | (1 << (interviewParser.OpAtCaption - 75)) | (1 << (interviewParser.OpAtLicense - 75)) | (1 << (interviewParser.OpAtCopyright - 75)) | (1 << (interviewParser.OpAtSearch - 75)))) !== 0))) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 1001;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 130, this._ctx);
				while (_alt !== 1 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1 + 1) {
						{
						{
						this.state = 998;
						this.matchWildcard();
						}
						}
					}
					this.state = 1003;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 130, this._ctx);
				}
				this.state = 1004;
				this.match(interviewParser.CL);
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
		this.enterRule(_localctx, 132, interviewParser.RULE_telephone);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1007;
			this.match(interviewParser.TEL);
			this.state = 1008;
			this.match(interviewParser.PLUS);
			this.state = 1009;
			this.match(interviewParser.NUMERIC);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 134, interviewParser.RULE_url);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1011;
			this.match(interviewParser.URL);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 136, interviewParser.RULE_item);
		let _la: number;
		try {
			let _alt: number;
			this.state = 1051;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case interviewParser.OPITEM:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1013;
				this.match(interviewParser.OPITEM);
				this.state = 1018;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << interviewParser.S) | (1 << interviewParser.OPS) | (1 << interviewParser.COLON) | (1 << interviewParser.AMP) | (1 << interviewParser.DBLCOLON) | (1 << interviewParser.Greater))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (interviewParser.Less - 32)) | (1 << (interviewParser.RightAngle - 32)) | (1 << (interviewParser.RightArrow - 32)) | (1 << (interviewParser.DBLEQ - 32)) | (1 << (interviewParser.NUMERIC - 32)) | (1 << (interviewParser.STRING - 32)) | (1 << (interviewParser.NL - 32)) | (1 << (interviewParser.NOTBITMARK - 32)) | (1 << (interviewParser.ELIPSIS - 32)) | (1 << (interviewParser.SENTENCE - 32)) | (1 << (interviewParser.BARSTRING - 32)))) !== 0) || _la === interviewParser.URL) {
					{
					this.state = 1016;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 132, this._ctx) ) {
					case 1:
						{
						this.state = 1014;
						this.match(interviewParser.COLON);
						}
						break;

					case 2:
						{
						this.state = 1015;
						this.s_and_w();
						}
						break;
					}
					}
					this.state = 1020;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1021;
				this.match(interviewParser.CL);
				this.state = 1031;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 135, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 1025;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						while (_la === interviewParser.S) {
							{
							{
							this.state = 1022;
							this.match(interviewParser.S);
							}
							}
							this.state = 1027;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
						}
						this.state = 1028;
						this.lead();
						}
						}
					}
					this.state = 1033;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 135, this._ctx);
				}
				}
				break;
			case interviewParser.OPC:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1034;
				this.match(interviewParser.OPC);
				this.state = 1036;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << interviewParser.S) | (1 << interviewParser.OPS) | (1 << interviewParser.COLON) | (1 << interviewParser.AMP) | (1 << interviewParser.DBLCOLON) | (1 << interviewParser.Greater))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (interviewParser.Less - 32)) | (1 << (interviewParser.RightAngle - 32)) | (1 << (interviewParser.RightArrow - 32)) | (1 << (interviewParser.DBLEQ - 32)) | (1 << (interviewParser.NUMERIC - 32)) | (1 << (interviewParser.STRING - 32)) | (1 << (interviewParser.NL - 32)) | (1 << (interviewParser.NOTBITMARK - 32)) | (1 << (interviewParser.ELIPSIS - 32)) | (1 << (interviewParser.SENTENCE - 32)) | (1 << (interviewParser.BARSTRING - 32)))) !== 0) || _la === interviewParser.URL) {
					{
					this.state = 1035;
					this.s_and_w();
					}
				}

				this.state = 1038;
				this.match(interviewParser.CL);
				this.state = 1048;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 138, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 1042;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						while (_la === interviewParser.S) {
							{
							{
							this.state = 1039;
							this.match(interviewParser.S);
							}
							}
							this.state = 1044;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
						}
						this.state = 1045;
						this.lead();
						}
						}
					}
					this.state = 1050;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 138, this._ctx);
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
		this.enterRule(_localctx, 138, interviewParser.RULE_lead);
		let _la: number;
		try {
			this.state = 1098;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case interviewParser.OPLEAD:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1053;
				this.match(interviewParser.OPLEAD);
				this.state = 1054;
				this.s_and_w();
				this.state = 1059;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << interviewParser.S) | (1 << interviewParser.OPS) | (1 << interviewParser.COLON) | (1 << interviewParser.AMP) | (1 << interviewParser.DBLCOLON) | (1 << interviewParser.Greater))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (interviewParser.Less - 32)) | (1 << (interviewParser.RightAngle - 32)) | (1 << (interviewParser.RightArrow - 32)) | (1 << (interviewParser.DBLEQ - 32)) | (1 << (interviewParser.NUMERIC - 32)) | (1 << (interviewParser.STRING - 32)) | (1 << (interviewParser.NL - 32)) | (1 << (interviewParser.NOTBITMARK - 32)) | (1 << (interviewParser.ELIPSIS - 32)) | (1 << (interviewParser.SENTENCE - 32)) | (1 << (interviewParser.BARSTRING - 32)))) !== 0) || _la === interviewParser.URL) {
					{
					this.state = 1057;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 140, this._ctx) ) {
					case 1:
						{
						this.state = 1055;
						this.match(interviewParser.COLON);
						}
						break;

					case 2:
						{
						this.state = 1056;
						this.s_and_w();
						}
						break;
					}
					}
					this.state = 1061;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1062;
				this.match(interviewParser.CL);
				}
				break;
			case interviewParser.OPPAGENUMBER:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1064;
				this.match(interviewParser.OPPAGENUMBER);
				this.state = 1065;
				this.s_and_w();
				this.state = 1070;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << interviewParser.S) | (1 << interviewParser.OPS) | (1 << interviewParser.COLON) | (1 << interviewParser.AMP) | (1 << interviewParser.DBLCOLON) | (1 << interviewParser.Greater))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (interviewParser.Less - 32)) | (1 << (interviewParser.RightAngle - 32)) | (1 << (interviewParser.RightArrow - 32)) | (1 << (interviewParser.DBLEQ - 32)) | (1 << (interviewParser.NUMERIC - 32)) | (1 << (interviewParser.STRING - 32)) | (1 << (interviewParser.NL - 32)) | (1 << (interviewParser.NOTBITMARK - 32)) | (1 << (interviewParser.ELIPSIS - 32)) | (1 << (interviewParser.SENTENCE - 32)) | (1 << (interviewParser.BARSTRING - 32)))) !== 0) || _la === interviewParser.URL) {
					{
					this.state = 1068;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 142, this._ctx) ) {
					case 1:
						{
						this.state = 1066;
						this.match(interviewParser.COLON);
						}
						break;

					case 2:
						{
						this.state = 1067;
						this.s_and_w();
						}
						break;
					}
					}
					this.state = 1072;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1073;
				this.match(interviewParser.CL);
				}
				break;
			case interviewParser.OPMARGINNUMBER:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1075;
				this.match(interviewParser.OPMARGINNUMBER);
				this.state = 1076;
				this.s_and_w();
				this.state = 1081;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << interviewParser.S) | (1 << interviewParser.OPS) | (1 << interviewParser.COLON) | (1 << interviewParser.AMP) | (1 << interviewParser.DBLCOLON) | (1 << interviewParser.Greater))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (interviewParser.Less - 32)) | (1 << (interviewParser.RightAngle - 32)) | (1 << (interviewParser.RightArrow - 32)) | (1 << (interviewParser.DBLEQ - 32)) | (1 << (interviewParser.NUMERIC - 32)) | (1 << (interviewParser.STRING - 32)) | (1 << (interviewParser.NL - 32)) | (1 << (interviewParser.NOTBITMARK - 32)) | (1 << (interviewParser.ELIPSIS - 32)) | (1 << (interviewParser.SENTENCE - 32)) | (1 << (interviewParser.BARSTRING - 32)))) !== 0) || _la === interviewParser.URL) {
					{
					this.state = 1079;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 144, this._ctx) ) {
					case 1:
						{
						this.state = 1077;
						this.match(interviewParser.COLON);
						}
						break;

					case 2:
						{
						this.state = 1078;
						this.s_and_w();
						}
						break;
					}
					}
					this.state = 1083;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1084;
				this.match(interviewParser.CL);
				}
				break;
			case interviewParser.OPC:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1086;
				this.match(interviewParser.OPC);
				this.state = 1088;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 146, this._ctx) ) {
				case 1:
					{
					this.state = 1087;
					this.s_and_w();
					}
					break;
				}
				this.state = 1094;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << interviewParser.S) | (1 << interviewParser.OPS) | (1 << interviewParser.COLON) | (1 << interviewParser.AMP) | (1 << interviewParser.DBLCOLON) | (1 << interviewParser.Greater))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (interviewParser.Less - 32)) | (1 << (interviewParser.RightAngle - 32)) | (1 << (interviewParser.RightArrow - 32)) | (1 << (interviewParser.DBLEQ - 32)) | (1 << (interviewParser.NUMERIC - 32)) | (1 << (interviewParser.STRING - 32)) | (1 << (interviewParser.NL - 32)) | (1 << (interviewParser.NOTBITMARK - 32)) | (1 << (interviewParser.ELIPSIS - 32)) | (1 << (interviewParser.SENTENCE - 32)) | (1 << (interviewParser.BARSTRING - 32)))) !== 0) || _la === interviewParser.URL) {
					{
					this.state = 1092;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 147, this._ctx) ) {
					case 1:
						{
						this.state = 1090;
						this.match(interviewParser.COLON);
						}
						break;

					case 2:
						{
						this.state = 1091;
						this.s_and_w();
						}
						break;
					}
					}
					this.state = 1096;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1097;
				this.match(interviewParser.CL);
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
		this.enterRule(_localctx, 140, interviewParser.RULE_angleref);
		let _la: number;
		try {
			this.state = 1110;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case interviewParser.OPRANGLES:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1100;
				this.match(interviewParser.OPRANGLES);
				this.state = 1102;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << interviewParser.S) | (1 << interviewParser.OPS) | (1 << interviewParser.COLON) | (1 << interviewParser.AMP) | (1 << interviewParser.DBLCOLON) | (1 << interviewParser.Greater))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (interviewParser.Less - 32)) | (1 << (interviewParser.RightAngle - 32)) | (1 << (interviewParser.RightArrow - 32)) | (1 << (interviewParser.DBLEQ - 32)) | (1 << (interviewParser.NUMERIC - 32)) | (1 << (interviewParser.STRING - 32)) | (1 << (interviewParser.NL - 32)) | (1 << (interviewParser.NOTBITMARK - 32)) | (1 << (interviewParser.ELIPSIS - 32)) | (1 << (interviewParser.SENTENCE - 32)) | (1 << (interviewParser.BARSTRING - 32)))) !== 0) || _la === interviewParser.URL) {
					{
					this.state = 1101;
					this.s_and_w();
					}
				}

				this.state = 1104;
				this.match(interviewParser.CL);
				}
				break;
			case interviewParser.OPRANGLEL:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1105;
				this.match(interviewParser.OPRANGLEL);
				this.state = 1107;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << interviewParser.S) | (1 << interviewParser.OPS) | (1 << interviewParser.COLON) | (1 << interviewParser.AMP) | (1 << interviewParser.DBLCOLON) | (1 << interviewParser.Greater))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (interviewParser.Less - 32)) | (1 << (interviewParser.RightAngle - 32)) | (1 << (interviewParser.RightArrow - 32)) | (1 << (interviewParser.DBLEQ - 32)) | (1 << (interviewParser.NUMERIC - 32)) | (1 << (interviewParser.STRING - 32)) | (1 << (interviewParser.NL - 32)) | (1 << (interviewParser.NOTBITMARK - 32)) | (1 << (interviewParser.ELIPSIS - 32)) | (1 << (interviewParser.SENTENCE - 32)) | (1 << (interviewParser.BARSTRING - 32)))) !== 0) || _la === interviewParser.URL) {
					{
					this.state = 1106;
					this.s_and_w();
					}
				}

				this.state = 1109;
				this.match(interviewParser.CL);
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
		this.enterRule(_localctx, 142, interviewParser.RULE_example);
		let _la: number;
		try {
			this.state = 1119;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case interviewParser.AtExamplecl:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1112;
				this.match(interviewParser.AtExamplecl);
				}
				break;
			case interviewParser.AtExampleWithStr:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1113;
				this.match(interviewParser.AtExampleWithStr);
				}
				break;
			case interviewParser.AtExamplecol:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1114;
				this.match(interviewParser.AtExamplecol);
				this.state = 1116;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === interviewParser.SENTENCE) {
					{
					this.state = 1115;
					this.match(interviewParser.SENTENCE);
					}
				}

				this.state = 1118;
				this.match(interviewParser.EOF);
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
		this.enterRule(_localctx, 144, interviewParser.RULE_bracketed_text);
		let _la: number;
		try {
			let _alt: number;
			this.state = 1160;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 162, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1121;
				this.match(interviewParser.BracEnclose);
				this.state = 1123;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 155, this._ctx) ) {
				case 1:
					{
					this.state = 1122;
					this.s_and_w();
					}
					break;
				}
				this.state = 1146;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << interviewParser.S) | (1 << interviewParser.OPS) | (1 << interviewParser.COLON) | (1 << interviewParser.AMP) | (1 << interviewParser.DBLCOLON) | (1 << interviewParser.Greater))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (interviewParser.Less - 32)) | (1 << (interviewParser.RightAngle - 32)) | (1 << (interviewParser.RightArrow - 32)) | (1 << (interviewParser.DBLEQ - 32)) | (1 << (interviewParser.NUMERIC - 32)) | (1 << (interviewParser.STRING - 32)) | (1 << (interviewParser.NL - 32)) | (1 << (interviewParser.NOTBITMARK - 32)) | (1 << (interviewParser.ELIPSIS - 32)) | (1 << (interviewParser.SENTENCE - 32)) | (1 << (interviewParser.BARSTRING - 32)))) !== 0) || _la === interviewParser.URL) {
					{
					{
					this.state = 1125;
					this.s_and_w();
					this.state = 1135;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 157, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 1126;
							this.match(interviewParser.NL);
							this.state = 1130;
							this._errHandler.sync(this);
							_alt = this.interpreter.adaptivePredict(this._input, 156, this._ctx);
							while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
								if (_alt === 1) {
									{
									{
									this.state = 1127;
									this.match(interviewParser.S);
									}
									}
								}
								this.state = 1132;
								this._errHandler.sync(this);
								_alt = this.interpreter.adaptivePredict(this._input, 156, this._ctx);
							}
							}
							}
						}
						this.state = 1137;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 157, this._ctx);
					}
					this.state = 1141;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 158, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 1138;
							this.match(interviewParser.NL);
							}
							}
						}
						this.state = 1143;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 158, this._ctx);
					}
					}
					}
					this.state = 1148;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1149;
				this.match(interviewParser.CL);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1150;
				this.match(interviewParser.BracEnclose);
				this.state = 1156;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << interviewParser.S) | (1 << interviewParser.OPS) | (1 << interviewParser.COLON) | (1 << interviewParser.AMP) | (1 << interviewParser.DBLCOLON) | (1 << interviewParser.Greater))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (interviewParser.Less - 32)) | (1 << (interviewParser.RightAngle - 32)) | (1 << (interviewParser.RightArrow - 32)) | (1 << (interviewParser.DBLEQ - 32)) | (1 << (interviewParser.NUMERIC - 32)) | (1 << (interviewParser.STRING - 32)) | (1 << (interviewParser.NL - 32)) | (1 << (interviewParser.NOTBITMARK - 32)) | (1 << (interviewParser.ELIPSIS - 32)) | (1 << (interviewParser.SENTENCE - 32)) | (1 << (interviewParser.BARSTRING - 32)))) !== 0) || _la === interviewParser.URL) {
					{
					this.state = 1154;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 160, this._ctx) ) {
					case 1:
						{
						this.state = 1151;
						this.s_and_w();
						}
						break;

					case 2:
						{
						this.state = 1152;
						this.match(interviewParser.NL);
						}
						break;

					case 3:
						{
						this.state = 1153;
						this.match(interviewParser.S);
						}
						break;
					}
					}
					this.state = 1158;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1159;
				this.match(interviewParser.EOF);
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
		this.enterRule(_localctx, 146, interviewParser.RULE_reference);
		let _la: number;
		try {
			this.state = 1184;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 167, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1162;
				this.match(interviewParser.AtReference);
				this.state = 1167;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					this.state = 1167;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 163, this._ctx) ) {
					case 1:
						{
						this.state = 1163;
						this.s_and_w();
						}
						break;

					case 2:
						{
						this.state = 1164;
						this.match(interviewParser.COLON);
						}
						break;

					case 3:
						{
						this.state = 1165;
						this.match(interviewParser.URL);
						}
						break;

					case 4:
						{
						this.state = 1166;
						this.match(interviewParser.NL);
						}
						break;
					}
					}
					this.state = 1169;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << interviewParser.S) | (1 << interviewParser.OPS) | (1 << interviewParser.COLON) | (1 << interviewParser.AMP) | (1 << interviewParser.DBLCOLON) | (1 << interviewParser.Greater))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (interviewParser.Less - 32)) | (1 << (interviewParser.RightAngle - 32)) | (1 << (interviewParser.RightArrow - 32)) | (1 << (interviewParser.DBLEQ - 32)) | (1 << (interviewParser.NUMERIC - 32)) | (1 << (interviewParser.STRING - 32)) | (1 << (interviewParser.NL - 32)) | (1 << (interviewParser.NOTBITMARK - 32)) | (1 << (interviewParser.ELIPSIS - 32)) | (1 << (interviewParser.SENTENCE - 32)) | (1 << (interviewParser.BARSTRING - 32)))) !== 0) || _la === interviewParser.URL);
				this.state = 1171;
				this.match(interviewParser.CL);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1172;
				this.match(interviewParser.AtReference);
				this.state = 1180;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << interviewParser.S) | (1 << interviewParser.OPS) | (1 << interviewParser.COLON) | (1 << interviewParser.AMP) | (1 << interviewParser.DBLCOLON) | (1 << interviewParser.Greater))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (interviewParser.Less - 32)) | (1 << (interviewParser.RightAngle - 32)) | (1 << (interviewParser.RightArrow - 32)) | (1 << (interviewParser.DBLEQ - 32)) | (1 << (interviewParser.NUMERIC - 32)) | (1 << (interviewParser.STRING - 32)) | (1 << (interviewParser.NL - 32)) | (1 << (interviewParser.NOTBITMARK - 32)) | (1 << (interviewParser.ELIPSIS - 32)) | (1 << (interviewParser.SENTENCE - 32)) | (1 << (interviewParser.BARSTRING - 32)))) !== 0) || _la === interviewParser.URL) {
					{
					this.state = 1178;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 165, this._ctx) ) {
					case 1:
						{
						this.state = 1173;
						this.s_and_w();
						}
						break;

					case 2:
						{
						this.state = 1174;
						this.match(interviewParser.COLON);
						}
						break;

					case 3:
						{
						this.state = 1175;
						this.match(interviewParser.URL);
						}
						break;

					case 4:
						{
						this.state = 1176;
						this.match(interviewParser.NL);
						}
						break;

					case 5:
						{
						this.state = 1177;
						this.match(interviewParser.S);
						}
						break;
					}
					}
					this.state = 1182;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1183;
				this.match(interviewParser.EOF);
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
		this.enterRule(_localctx, 148, interviewParser.RULE_progress);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1186;
			this.match(interviewParser.AtProgress);
			this.state = 1187;
			this.s_and_w();
			this.state = 1188;
			this.match(interviewParser.CL);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 150, interviewParser.RULE_dateprop);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1190;
			this.match(interviewParser.AtDate);
			this.state = 1194;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				this.state = 1194;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 168, this._ctx) ) {
				case 1:
					{
					this.state = 1191;
					this.s_and_w();
					}
					break;

				case 2:
					{
					this.state = 1192;
					this.match(interviewParser.COLON);
					}
					break;

				case 3:
					{
					this.state = 1193;
					this.match(interviewParser.NL);
					}
					break;
				}
				}
				this.state = 1196;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << interviewParser.S) | (1 << interviewParser.OPS) | (1 << interviewParser.COLON) | (1 << interviewParser.AMP) | (1 << interviewParser.DBLCOLON) | (1 << interviewParser.Greater))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (interviewParser.Less - 32)) | (1 << (interviewParser.RightAngle - 32)) | (1 << (interviewParser.RightArrow - 32)) | (1 << (interviewParser.DBLEQ - 32)) | (1 << (interviewParser.NUMERIC - 32)) | (1 << (interviewParser.STRING - 32)) | (1 << (interviewParser.NL - 32)) | (1 << (interviewParser.NOTBITMARK - 32)) | (1 << (interviewParser.ELIPSIS - 32)) | (1 << (interviewParser.SENTENCE - 32)) | (1 << (interviewParser.BARSTRING - 32)))) !== 0) || _la === interviewParser.URL);
			this.state = 1198;
			this.match(interviewParser.CL);
			this.state = 1200;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === interviewParser.AtDate) {
				{
				this.state = 1199;
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
		this.enterRule(_localctx, 152, interviewParser.RULE_dateprop_chained);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1202;
			this.match(interviewParser.AtDate);
			this.state = 1206;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				this.state = 1206;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 171, this._ctx) ) {
				case 1:
					{
					this.state = 1203;
					this.s_and_w();
					}
					break;

				case 2:
					{
					this.state = 1204;
					this.match(interviewParser.COLON);
					}
					break;

				case 3:
					{
					this.state = 1205;
					this.match(interviewParser.NL);
					}
					break;
				}
				}
				this.state = 1208;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << interviewParser.S) | (1 << interviewParser.OPS) | (1 << interviewParser.COLON) | (1 << interviewParser.AMP) | (1 << interviewParser.DBLCOLON) | (1 << interviewParser.Greater))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (interviewParser.Less - 32)) | (1 << (interviewParser.RightAngle - 32)) | (1 << (interviewParser.RightArrow - 32)) | (1 << (interviewParser.DBLEQ - 32)) | (1 << (interviewParser.NUMERIC - 32)) | (1 << (interviewParser.STRING - 32)) | (1 << (interviewParser.NL - 32)) | (1 << (interviewParser.NOTBITMARK - 32)) | (1 << (interviewParser.ELIPSIS - 32)) | (1 << (interviewParser.SENTENCE - 32)) | (1 << (interviewParser.BARSTRING - 32)))) !== 0) || _la === interviewParser.URL);
			this.state = 1210;
			this.match(interviewParser.CL);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 154, interviewParser.RULE_instruction);
		let _la: number;
		try {
			let _alt: number;
			this.state = 1258;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 181, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1212;
				this.match(interviewParser.OPB);
				this.state = 1216;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 173, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 1213;
						this.match(interviewParser.NL);
						}
						}
					}
					this.state = 1218;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 173, this._ctx);
				}
				this.state = 1220;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 174, this._ctx) ) {
				case 1:
					{
					this.state = 1219;
					this.s_and_w();
					}
					break;
				}
				this.state = 1237;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 177, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 1231;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 176, this._ctx);
						while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
							if (_alt === 1) {
								{
								{
								this.state = 1222;
								this.match(interviewParser.NL);
								this.state = 1226;
								this._errHandler.sync(this);
								_alt = this.interpreter.adaptivePredict(this._input, 175, this._ctx);
								while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
									if (_alt === 1) {
										{
										{
										this.state = 1223;
										this.match(interviewParser.S);
										}
										}
									}
									this.state = 1228;
									this._errHandler.sync(this);
									_alt = this.interpreter.adaptivePredict(this._input, 175, this._ctx);
								}
								}
								}
							}
							this.state = 1233;
							this._errHandler.sync(this);
							_alt = this.interpreter.adaptivePredict(this._input, 176, this._ctx);
						}
						this.state = 1234;
						this.s_and_w();
						}
						}
					}
					this.state = 1239;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 177, this._ctx);
				}
				this.state = 1243;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === interviewParser.NL) {
					{
					{
					this.state = 1240;
					this.match(interviewParser.NL);
					}
					}
					this.state = 1245;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1246;
				this.match(interviewParser.CL);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1247;
				this.match(interviewParser.OPB);
				this.state = 1251;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 179, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 1248;
						this.match(interviewParser.NL);
						}
						}
					}
					this.state = 1253;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 179, this._ctx);
				}
				this.state = 1255;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << interviewParser.S) | (1 << interviewParser.OPS) | (1 << interviewParser.COLON) | (1 << interviewParser.AMP) | (1 << interviewParser.DBLCOLON) | (1 << interviewParser.Greater))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (interviewParser.Less - 32)) | (1 << (interviewParser.RightAngle - 32)) | (1 << (interviewParser.RightArrow - 32)) | (1 << (interviewParser.DBLEQ - 32)) | (1 << (interviewParser.NUMERIC - 32)) | (1 << (interviewParser.STRING - 32)) | (1 << (interviewParser.NL - 32)) | (1 << (interviewParser.NOTBITMARK - 32)) | (1 << (interviewParser.ELIPSIS - 32)) | (1 << (interviewParser.SENTENCE - 32)) | (1 << (interviewParser.BARSTRING - 32)))) !== 0) || _la === interviewParser.URL) {
					{
					this.state = 1254;
					this.s_and_w();
					}
				}

				this.state = 1257;
				this.match(interviewParser.EOF);
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
		this.enterRule(_localctx, 156, interviewParser.RULE_hint);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1260;
			this.match(interviewParser.OPQ);
			this.state = 1262;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 1261;
				_la = this._input.LA(1);
				if (_la <= 0 || (_la === interviewParser.CL)) {
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
				this.state = 1264;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << interviewParser.OPDOT) | (1 << interviewParser.S) | (1 << interviewParser.BitInterview) | (1 << interviewParser.BitInterviewinstgrp) | (1 << interviewParser.OPDOLL) | (1 << interviewParser.OPBUL) | (1 << interviewParser.OPESC) | (1 << interviewParser.OPRANGLES) | (1 << interviewParser.OPRANGLEL) | (1 << interviewParser.OPDANGLE) | (1 << interviewParser.OPU) | (1 << interviewParser.OPB) | (1 << interviewParser.OPQ) | (1 << interviewParser.OPA) | (1 << interviewParser.OPP) | (1 << interviewParser.OPM) | (1 << interviewParser.OPS) | (1 << interviewParser.OPR) | (1 << interviewParser.OPC) | (1 << interviewParser.OPITEM) | (1 << interviewParser.OPLEAD) | (1 << interviewParser.OPPAGENUMBER) | (1 << interviewParser.OPMARGINNUMBER) | (1 << interviewParser.OPHASH) | (1 << interviewParser.COLON) | (1 << interviewParser.AMP) | (1 << interviewParser.DBLCOLON) | (1 << interviewParser.PLUS) | (1 << interviewParser.DotAt) | (1 << interviewParser.Greater))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (interviewParser.Less - 32)) | (1 << (interviewParser.RightAngle - 32)) | (1 << (interviewParser.RightArrow - 32)) | (1 << (interviewParser.DBLEQ - 32)) | (1 << (interviewParser.OR - 32)) | (1 << (interviewParser.HSPL - 32)) | (1 << (interviewParser.HSPL2 - 32)) | (1 << (interviewParser.SSPL - 32)) | (1 << (interviewParser.SSPL2 - 32)) | (1 << (interviewParser.BULLET - 32)) | (1 << (interviewParser.COMMENT - 32)) | (1 << (interviewParser.DCANY - 32)) | (1 << (interviewParser.Image_type - 32)) | (1 << (interviewParser.Audio_type - 32)) | (1 << (interviewParser.Video_type - 32)) | (1 << (interviewParser.ArticleText - 32)) | (1 << (interviewParser.NOTCL - 32)) | (1 << (interviewParser.NUMERIC - 32)) | (1 << (interviewParser.STRING - 32)) | (1 << (interviewParser.NL - 32)) | (1 << (interviewParser.NOTBITMARK - 32)) | (1 << (interviewParser.ELIPSIS - 32)) | (1 << (interviewParser.SENTENCE - 32)) | (1 << (interviewParser.BARSTRING - 32)) | (1 << (interviewParser.OPAT - 32)) | (1 << (interviewParser.AtProgress - 32)) | (1 << (interviewParser.AtReference - 32)) | (1 << (interviewParser.AtWidth - 32)) | (1 << (interviewParser.AtHeight - 32)) | (1 << (interviewParser.AtProgressPoints - 32)) | (1 << (interviewParser.AtShortanswer - 32)) | (1 << (interviewParser.AtLonganswer - 32)))) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (interviewParser.AtExampleWithStr - 64)) | (1 << (interviewParser.AtExamplecol - 64)) | (1 << (interviewParser.AtExamplecl - 64)) | (1 << (interviewParser.AtSampleSolution - 64)) | (1 << (interviewParser.AtPartialAnswerS - 64)) | (1 << (interviewParser.AtPartialAnswer - 64)) | (1 << (interviewParser.AtLabeltrue - 64)) | (1 << (interviewParser.AtLabelfalse - 64)) | (1 << (interviewParser.AtPoints - 64)) | (1 << (interviewParser.AtSrc - 64)) | (1 << (interviewParser.AtPartner - 64)) | (1 << (interviewParser.OPATALT - 64)) | (1 << (interviewParser.OPAMARK - 64)) | (1 << (interviewParser.ShowInIndex - 64)) | (1 << (interviewParser.OpAtCaption - 64)) | (1 << (interviewParser.OpAtLicense - 64)) | (1 << (interviewParser.OpAtCopyright - 64)) | (1 << (interviewParser.OpAtSearch - 64)) | (1 << (interviewParser.OpAtIsTracked - 64)) | (1 << (interviewParser.OpAtIsInfoOnly - 64)) | (1 << (interviewParser.AtDate - 64)) | (1 << (interviewParser.Http - 64)) | (1 << (interviewParser.Https - 64)) | (1 << (interviewParser.AmpAudio - 64)) | (1 << (interviewParser.AmpImage - 64)) | (1 << (interviewParser.AmpImageZoom - 64)) | (1 << (interviewParser.AmpVideo - 64)) | (1 << (interviewParser.AmpArticle - 64)) | (1 << (interviewParser.AmpDocument - 64)) | (1 << (interviewParser.AmpApp - 64)) | (1 << (interviewParser.AmpWebsite - 64)) | (1 << (interviewParser.AmpStillImageFilm - 64)))) !== 0) || ((((_la - 96)) & ~0x1F) === 0 && ((1 << (_la - 96)) & ((1 << (interviewParser.AmpPdf - 96)) | (1 << (interviewParser.OpAmpAudio - 96)) | (1 << (interviewParser.OpAmpImage - 96)) | (1 << (interviewParser.OpAmpImageZoom - 96)) | (1 << (interviewParser.OpAmpVideo - 96)) | (1 << (interviewParser.OpAmpArticle - 96)) | (1 << (interviewParser.OpAmpArticleAtt - 96)) | (1 << (interviewParser.OpAmpDocument - 96)) | (1 << (interviewParser.OpAmpApp - 96)) | (1 << (interviewParser.OpAmpWebsite - 96)) | (1 << (interviewParser.OpAmpStillImageFilm - 96)) | (1 << (interviewParser.BracEnclose - 96)) | (1 << (interviewParser.AmpAudioLink - 96)) | (1 << (interviewParser.AmpImageLink - 96)) | (1 << (interviewParser.AmpVideoLink - 96)) | (1 << (interviewParser.AmpArticleLink - 96)) | (1 << (interviewParser.AmpDocumentLink - 96)) | (1 << (interviewParser.AmpDocumentDownload - 96)) | (1 << (interviewParser.AmpAppLink - 96)) | (1 << (interviewParser.AmpWebsiteLink - 96)) | (1 << (interviewParser.AmpStillImageFilmLink - 96)) | (1 << (interviewParser.OpAmpAudioLink - 96)) | (1 << (interviewParser.OpAmpImageLink - 96)) | (1 << (interviewParser.OpAmpVideoLink - 96)) | (1 << (interviewParser.OpAmpArticleLink - 96)) | (1 << (interviewParser.OpAmpDocumentLink - 96)) | (1 << (interviewParser.OpAmpDocumentDownload - 96)) | (1 << (interviewParser.OpAmpAppLink - 96)) | (1 << (interviewParser.OpAmpWebsiteLink - 96)) | (1 << (interviewParser.OpAmpStillImageFilmLink - 96)) | (1 << (interviewParser.AmpImageEmbed - 96)) | (1 << (interviewParser.AmpVideoEmbed - 96)))) !== 0) || ((((_la - 128)) & ~0x1F) === 0 && ((1 << (_la - 128)) & ((1 << (interviewParser.AmpAudioEmbed - 128)) | (1 << (interviewParser.AmpDocumentEmbed - 128)) | (1 << (interviewParser.AmpStillImageFilmEmbed - 128)) | (1 << (interviewParser.OpAmpImageEmbed - 128)) | (1 << (interviewParser.OpAmpVideoEmbed - 128)) | (1 << (interviewParser.OpAmpAudioEmbed - 128)) | (1 << (interviewParser.OpAmpDocumentEmbed - 128)) | (1 << (interviewParser.OpAmpStillImageFilmEmbed - 128)) | (1 << (interviewParser.BitmarkMinus - 128)) | (1 << (interviewParser.BitmarkPlus - 128)) | (1 << (interviewParser.ColonText - 128)) | (1 << (interviewParser.ColonJson - 128)) | (1 << (interviewParser.Prosemirror - 128)) | (1 << (interviewParser.Placeholder - 128)) | (1 << (interviewParser.BASIC - 128)) | (1 << (interviewParser.JPG - 128)) | (1 << (interviewParser.PNG - 128)) | (1 << (interviewParser.GIF - 128)) | (1 << (interviewParser.SVG - 128)) | (1 << (interviewParser.MP2 - 128)) | (1 << (interviewParser.MP3 - 128)) | (1 << (interviewParser.MP4 - 128)) | (1 << (interviewParser.FLV - 128)) | (1 << (interviewParser.WMV - 128)) | (1 << (interviewParser.MPEG - 128)) | (1 << (interviewParser.MPG - 128)) | (1 << (interviewParser.TEL - 128)) | (1 << (interviewParser.DotArticleAtt - 128)) | (1 << (interviewParser.STAR - 128)) | (1 << (interviewParser.URL - 128)) | (1 << (interviewParser.LIST_LINE - 128)) | (1 << (interviewParser.ENCLBARS - 128)))) !== 0));
			this.state = 1266;
			this.match(interviewParser.CL);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 158, interviewParser.RULE_title);
		let _la: number;
		try {
			this.state = 1280;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 185, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1268;
				this.match(interviewParser.OPHASH);
				this.state = 1271;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					this.state = 1271;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 183, this._ctx) ) {
					case 1:
						{
						this.state = 1269;
						this.s_and_w();
						}
						break;

					case 2:
						{
						this.state = 1270;
						this.match(interviewParser.NL);
						}
						break;
					}
					}
					this.state = 1273;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << interviewParser.S) | (1 << interviewParser.OPS) | (1 << interviewParser.COLON) | (1 << interviewParser.AMP) | (1 << interviewParser.DBLCOLON) | (1 << interviewParser.Greater))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (interviewParser.Less - 32)) | (1 << (interviewParser.RightAngle - 32)) | (1 << (interviewParser.RightArrow - 32)) | (1 << (interviewParser.DBLEQ - 32)) | (1 << (interviewParser.NUMERIC - 32)) | (1 << (interviewParser.STRING - 32)) | (1 << (interviewParser.NL - 32)) | (1 << (interviewParser.NOTBITMARK - 32)) | (1 << (interviewParser.ELIPSIS - 32)) | (1 << (interviewParser.SENTENCE - 32)) | (1 << (interviewParser.BARSTRING - 32)))) !== 0) || _la === interviewParser.URL);
				this.state = 1275;
				this.match(interviewParser.CL);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1276;
				this.match(interviewParser.OPHASH);
				this.state = 1277;
				this.s_and_w();
				this.state = 1278;
				this.match(interviewParser.EOF);
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
		this.enterRule(_localctx, 160, interviewParser.RULE_bool_label);
		try {
			this.state = 1290;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case interviewParser.AtLabeltrue:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1282;
				this.match(interviewParser.AtLabeltrue);
				this.state = 1283;
				this.s_and_w();
				this.state = 1284;
				this.match(interviewParser.CL);
				}
				break;
			case interviewParser.AtLabelfalse:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1286;
				this.match(interviewParser.AtLabelfalse);
				this.state = 1287;
				this.s_and_w();
				this.state = 1288;
				this.match(interviewParser.CL);
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
		this.enterRule(_localctx, 162, interviewParser.RULE_progress_points);
		try {
			this.state = 1301;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 187, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1292;
				this.match(interviewParser.AtProgressPoints);
				this.state = 1293;
				this.match(interviewParser.COLON);
				this.state = 1294;
				this.match(interviewParser.NUMERIC);
				this.state = 1295;
				this.match(interviewParser.CL);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1296;
				this.match(interviewParser.AtProgressPoints);
				this.state = 1297;
				this.match(interviewParser.COLON);
				this.state = 1298;
				this.s_and_w();
				this.state = 1299;
				this.match(interviewParser.CL);
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
		this.enterRule(_localctx, 164, interviewParser.RULE_istracked);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1303;
			this.match(interviewParser.OpAtIsTracked);
			this.state = 1304;
			this.s_and_w();
			this.state = 1305;
			this.match(interviewParser.CL);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 166, interviewParser.RULE_isinfoonly);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1307;
			this.match(interviewParser.OpAtIsInfoOnly);
			this.state = 1308;
			this.s_and_w();
			this.state = 1309;
			this.match(interviewParser.CL);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 168, interviewParser.RULE_atdef);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1311;
			this.atdef_();
			this.state = 1321;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 189, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1315;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === interviewParser.NL) {
						{
						{
						this.state = 1312;
						this.match(interviewParser.NL);
						}
						}
						this.state = 1317;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					this.state = 1318;
					this.atdef_();
					}
					}
				}
				this.state = 1323;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 189, this._ctx);
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
		this.enterRule(_localctx, 170, interviewParser.RULE_atdef_);
		let _la: number;
		try {
			let _alt: number;
			this.state = 1347;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case interviewParser.OPA:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1324;
				this.match(interviewParser.OPA);
				this.state = 1325;
				this.s_and_w();
				this.state = 1326;
				_la = this._input.LA(1);
				if (!(_la === interviewParser.COLON || _la === interviewParser.DBLCOLON)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 1327;
				this.s_and_w();
				this.state = 1333;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << interviewParser.S) | (1 << interviewParser.OPS) | (1 << interviewParser.COLON) | (1 << interviewParser.AMP) | (1 << interviewParser.DBLCOLON) | (1 << interviewParser.Greater))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (interviewParser.Less - 32)) | (1 << (interviewParser.RightAngle - 32)) | (1 << (interviewParser.RightArrow - 32)) | (1 << (interviewParser.DBLEQ - 32)) | (1 << (interviewParser.NUMERIC - 32)) | (1 << (interviewParser.STRING - 32)) | (1 << (interviewParser.NL - 32)) | (1 << (interviewParser.NOTBITMARK - 32)) | (1 << (interviewParser.ELIPSIS - 32)) | (1 << (interviewParser.SENTENCE - 32)) | (1 << (interviewParser.BARSTRING - 32)))) !== 0) || _la === interviewParser.URL) {
					{
					this.state = 1331;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 190, this._ctx) ) {
					case 1:
						{
						this.state = 1328;
						this.match(interviewParser.NL);
						}
						break;

					case 2:
						{
						this.state = 1329;
						this.match(interviewParser.COLON);
						}
						break;

					case 3:
						{
						this.state = 1330;
						this.s_and_w();
						}
						break;
					}
					}
					this.state = 1335;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1336;
				this.match(interviewParser.CL);
				}
				break;
			case interviewParser.OpAtCopyright:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1338;
				this.match(interviewParser.OpAtCopyright);
				this.state = 1342;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 192, this._ctx);
				while (_alt !== 1 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1 + 1) {
						{
						{
						this.state = 1339;
						this.matchWildcard();
						}
						}
					}
					this.state = 1344;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 192, this._ctx);
				}
				this.state = 1345;
				this.match(interviewParser.CL);
				}
				break;
			case interviewParser.AtSampleSolution:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1346;
				this.match(interviewParser.AtSampleSolution);
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
		this.enterRule(_localctx, 172, interviewParser.RULE_dollarans);
		let _la: number;
		try {
			this.state = 1368;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 198, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1349;
				this.match(interviewParser.OPDOLL);
				this.state = 1353;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					this.state = 1353;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 194, this._ctx) ) {
					case 1:
						{
						this.state = 1350;
						this.s_and_w();
						}
						break;

					case 2:
						{
						this.state = 1351;
						this.match(interviewParser.COLON);
						}
						break;

					case 3:
						{
						this.state = 1352;
						this.match(interviewParser.NL);
						}
						break;
					}
					}
					this.state = 1355;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << interviewParser.S) | (1 << interviewParser.OPS) | (1 << interviewParser.COLON) | (1 << interviewParser.AMP) | (1 << interviewParser.DBLCOLON) | (1 << interviewParser.Greater))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (interviewParser.Less - 32)) | (1 << (interviewParser.RightAngle - 32)) | (1 << (interviewParser.RightArrow - 32)) | (1 << (interviewParser.DBLEQ - 32)) | (1 << (interviewParser.NUMERIC - 32)) | (1 << (interviewParser.STRING - 32)) | (1 << (interviewParser.NL - 32)) | (1 << (interviewParser.NOTBITMARK - 32)) | (1 << (interviewParser.ELIPSIS - 32)) | (1 << (interviewParser.SENTENCE - 32)) | (1 << (interviewParser.BARSTRING - 32)))) !== 0) || _la === interviewParser.URL);
				this.state = 1357;
				this.match(interviewParser.CL);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1358;
				this.match(interviewParser.OPDOLL);
				this.state = 1364;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << interviewParser.S) | (1 << interviewParser.OPS) | (1 << interviewParser.COLON) | (1 << interviewParser.AMP) | (1 << interviewParser.DBLCOLON) | (1 << interviewParser.Greater))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (interviewParser.Less - 32)) | (1 << (interviewParser.RightAngle - 32)) | (1 << (interviewParser.RightArrow - 32)) | (1 << (interviewParser.DBLEQ - 32)) | (1 << (interviewParser.NUMERIC - 32)) | (1 << (interviewParser.STRING - 32)) | (1 << (interviewParser.NL - 32)) | (1 << (interviewParser.NOTBITMARK - 32)) | (1 << (interviewParser.ELIPSIS - 32)) | (1 << (interviewParser.SENTENCE - 32)) | (1 << (interviewParser.BARSTRING - 32)))) !== 0) || _la === interviewParser.URL) {
					{
					this.state = 1362;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 196, this._ctx) ) {
					case 1:
						{
						this.state = 1359;
						this.s_and_w();
						}
						break;

					case 2:
						{
						this.state = 1360;
						this.match(interviewParser.COLON);
						}
						break;

					case 3:
						{
						this.state = 1361;
						this.match(interviewParser.NL);
						}
						break;
					}
					}
					this.state = 1366;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1367;
				this.match(interviewParser.EOF);
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
		this.enterRule(_localctx, 174, interviewParser.RULE_anchor);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1370;
			this.match(interviewParser.OPDANGLE);
			this.state = 1372;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << interviewParser.S) | (1 << interviewParser.OPS) | (1 << interviewParser.COLON) | (1 << interviewParser.AMP) | (1 << interviewParser.DBLCOLON) | (1 << interviewParser.Greater))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (interviewParser.Less - 32)) | (1 << (interviewParser.RightAngle - 32)) | (1 << (interviewParser.RightArrow - 32)) | (1 << (interviewParser.DBLEQ - 32)) | (1 << (interviewParser.NUMERIC - 32)) | (1 << (interviewParser.STRING - 32)) | (1 << (interviewParser.NL - 32)) | (1 << (interviewParser.NOTBITMARK - 32)) | (1 << (interviewParser.ELIPSIS - 32)) | (1 << (interviewParser.SENTENCE - 32)) | (1 << (interviewParser.BARSTRING - 32)))) !== 0) || _la === interviewParser.URL) {
				{
				this.state = 1371;
				this.s_and_w();
				}
			}

			this.state = 1374;
			this.match(interviewParser.CL);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 176, interviewParser.RULE_dcolon);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1376;
			this.match(interviewParser.DBLCOLON);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 178, interviewParser.RULE_lines);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1382;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 1378;
					this.s_and_w();
					this.state = 1380;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 200, this._ctx) ) {
					case 1:
						{
						this.state = 1379;
						this.match(interviewParser.NL);
						}
						break;
					}
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 1384;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 201, this._ctx);
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
	public s_and_w(): S_and_wContext {
		let _localctx: S_and_wContext = new S_and_wContext(this._ctx, this.state);
		this.enterRule(_localctx, 180, interviewParser.RULE_s_and_w);
		let _la: number;
		try {
			let _alt: number;
			this.state = 1433;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 209, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1386;
				this.match(interviewParser.STRING);
				this.state = 1393;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 203, this._ctx) ) {
				case 1:
					{
					this.state = 1388;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					do {
						{
						{
						this.state = 1387;
						this.match(interviewParser.S);
						}
						}
						this.state = 1390;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					} while (_la === interviewParser.S);
					this.state = 1392;
					this.match(interviewParser.NUMERIC);
					}
					break;
				}
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1395;
				this.words();
				this.state = 1402;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 205, this._ctx) ) {
				case 1:
					{
					this.state = 1397;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					do {
						{
						{
						this.state = 1396;
						this.match(interviewParser.S);
						}
						}
						this.state = 1399;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					} while (_la === interviewParser.S);
					this.state = 1401;
					this.match(interviewParser.NUMERIC);
					}
					break;
				}
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1404;
				this.match(interviewParser.NUMERIC);
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1405;
				this.match(interviewParser.OPS);
				this.state = 1406;
				this.s_and_w();
				this.state = 1407;
				this.match(interviewParser.CL);
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 1409;
				this.match(interviewParser.NL);
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 1413;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === interviewParser.S) {
					{
					{
					this.state = 1410;
					this.match(interviewParser.S);
					}
					}
					this.state = 1415;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1416;
				this.match(interviewParser.COLON);
				this.state = 1420;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 207, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 1417;
						this.match(interviewParser.S);
						}
						}
					}
					this.state = 1422;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 207, this._ctx);
				}
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 1423;
				this.match(interviewParser.AMP);
				this.state = 1427;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 208, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 1424;
						this.match(interviewParser.S);
						}
						}
					}
					this.state = 1429;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 208, this._ctx);
				}
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 1430;
				this.match(interviewParser.DBLCOLON);
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 1431;
				this.match(interviewParser.DBLEQ);
				}
				break;

			case 10:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 1432;
				this.match(interviewParser.URL);
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
		this.enterRule(_localctx, 182, interviewParser.RULE_clnsp);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1435;
			this.match(interviewParser.CL);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 184, interviewParser.RULE_sspl);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1437;
			_la = this._input.LA(1);
			if (!(_la === interviewParser.SSPL || _la === interviewParser.SSPL2)) {
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
		this.enterRule(_localctx, 186, interviewParser.RULE_words);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1451;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					this.state = 1451;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case interviewParser.STRING:
						{
						this.state = 1439;
						this.match(interviewParser.STRING);
						}
						break;
					case interviewParser.SENTENCE:
						{
						this.state = 1440;
						this.match(interviewParser.SENTENCE);
						}
						break;
					case interviewParser.NOTBITMARK:
						{
						this.state = 1441;
						this.match(interviewParser.NOTBITMARK);
						}
						break;
					case interviewParser.ELIPSIS:
						{
						this.state = 1442;
						this.match(interviewParser.ELIPSIS);
						}
						break;
					case interviewParser.BARSTRING:
						{
						this.state = 1443;
						this.match(interviewParser.BARSTRING);
						}
						break;
					case interviewParser.AMP:
						{
						this.state = 1444;
						this.match(interviewParser.AMP);
						}
						break;
					case interviewParser.Greater:
						{
						this.state = 1445;
						this.match(interviewParser.Greater);
						this.state = 1446;
						_la = this._input.LA(1);
						if (_la <= 0 || (_la === interviewParser.Greater)) {
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
					case interviewParser.Less:
						{
						this.state = 1447;
						this.match(interviewParser.Less);
						this.state = 1448;
						_la = this._input.LA(1);
						if (_la <= 0 || (_la === interviewParser.Less)) {
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
					case interviewParser.RightArrow:
						{
						this.state = 1449;
						this.match(interviewParser.RightArrow);
						}
						break;
					case interviewParser.RightAngle:
						{
						this.state = 1450;
						this.match(interviewParser.RightAngle);
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
				this.state = 1453;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 211, this._ctx);
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
		this.enterRule(_localctx, 188, interviewParser.RULE_sp);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1455;
			this.match(interviewParser.S);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
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
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\xA1\u05B4\x04" +
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
		"`\x03\x02\x03\x02\x07\x02\xC3\n\x02\f\x02\x0E\x02\xC6\v\x02\x03\x02\x07" +
		"\x02\xC9\n\x02\f\x02\x0E\x02\xCC\v\x02\x06\x02\xCE\n\x02\r\x02\x0E\x02" +
		"\xCF\x03\x02\x07\x02\xD3\n\x02\f\x02\x0E\x02\xD6\v\x02\x03\x02\x03\x02" +
		"\x03\x03\x03\x03\x03\x04\x03\x04\x05\x04\xDE\n\x04\x03\x05\x03\x05\x03" +
		"\x05\x03\x05\x07\x05\xE4\n\x05\f\x05\x0E\x05\xE7\v\x05\x03\x05\x03\x05" +
		"\x07\x05\xEB\n\x05\f\x05\x0E\x05\xEE\v\x05\x07\x05\xF0\n\x05\f\x05\x0E" +
		"\x05\xF3\v\x05\x03\x05\x03\x05\x03\x05\x03\x05\x07\x05\xF9\n\x05\f\x05" +
		"\x0E\x05\xFC\v\x05\x03\x05\x03\x05\x07\x05\u0100\n\x05\f\x05\x0E\x05\u0103" +
		"\v\x05\x07\x05\u0105\n\x05\f\x05\x0E\x05\u0108\v\x05\x03\x05\x03\x05\x07" +
		"\x05\u010C\n\x05\f\x05\x0E\x05\u010F\v\x05\x03\x05\x03\x05\x07\x05\u0113" +
		"\n\x05\f\x05\x0E\x05\u0116\v\x05\x05\x05\u0118\n\x05\x06\x05\u011A\n\x05" +
		"\r\x05\x0E\x05\u011B\x03\x05\x03\x05\x07\x05\u0120\n\x05\f\x05\x0E\x05" +
		"\u0123\v\x05\x03\x05\x05\x05\u0126\n\x05\x05\x05\u0128\n\x05\x03\x06\x03" +
		"\x06\x03\x06\x03\x06\x07\x06\u012E\n\x06\f\x06\x0E\x06\u0131\v\x06\x03" +
		"\x06\x03\x06\x07\x06\u0135\n\x06\f\x06\x0E\x06\u0138\v\x06\x07\x06\u013A" +
		"\n\x06\f\x06\x0E\x06\u013D\v\x06\x03\x06\x03\x06\x03\x06\x03\x06\x07\x06" +
		"\u0143\n\x06\f\x06\x0E\x06\u0146\v\x06\x03\x06\x03\x06\x07\x06\u014A\n" +
		"\x06\f\x06\x0E\x06\u014D\v\x06\x07\x06\u014F\n\x06\f\x06\x0E\x06\u0152" +
		"\v\x06\x03\x06\x03\x06\x03\x06\x07\x06\u0157\n\x06\f\x06\x0E\x06\u015A" +
		"\v\x06\x07\x06\u015C\n\x06\f\x06\x0E\x06\u015F\v\x06\x03\x06\x03\x06\x07" +
		"\x06\u0163\n\x06\f\x06\x0E\x06\u0166\v\x06\x03\x06\x05\x06\u0169\n\x06" +
		"\x05\x06\u016B\n\x06\x03\x07\x03\x07\x05\x07\u016F\n\x07\x03\b\x03\b\x03" +
		"\t\x03\t\x03\t\x03\n\x03\n\x06\n\u0178\n\n\r\n\x0E\n\u0179\x03\n\x07\n" +
		"\u017D\n\n\f\n\x0E\n\u0180\v\n\x03\v\x05\v\u0183\n\v\x03\v\x03\v\x07\v" +
		"\u0187\n\v\f\v\x0E\v\u018A\v\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03" +
		"\v\x03\v\x03\v\x03\v\x03\v\x07\v\u0197\n\v\f\v\x0E\v\u019A\v\v\x03\v\x03" +
		"\v\x05\v\u019E\n\v\x03\v\x07\v\u01A1\n\v\f\v\x0E\v\u01A4\v\v\x03\v\x03" +
		"\v\x03\v\x03\v\x03\v\x03\v\x07\v\u01AC\n\v\f\v\x0E\v\u01AF\v\v\x05\v\u01B1" +
		"\n\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v" +
		"\x06\v\u01BE\n\v\r\v\x0E\v\u01BF\x03\v\x03\v\x05\v\u01C4\n\v\x03\v\x07" +
		"\v\u01C7\n\v\f\v\x0E\v\u01CA\v\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x07" +
		"\v\u01D2\n\v\f\v\x0E\v\u01D5\v\v\x05\v\u01D7\n\v\x05\v\u01D9\n\v\x03\f" +
		"\x06\f\u01DC\n\f\r\f\x0E\f\u01DD\x03\r\x03\r\x05\r\u01E2\n\r\x03\r\x03" +
		"\r\x05\r\u01E6\n\r\x03\r\x07\r\u01E9\n\r\f\r\x0E\r\u01EC\v\r\x06\r\u01EE" +
		"\n\r\r\r\x0E\r\u01EF\x03\r\x05\r\u01F3\n\r\x03\x0E\x03\x0E\x05\x0E\u01F7" +
		"\n\x0E\x06\x0E\u01F9\n\x0E\r\x0E\x0E\x0E\u01FA\x03\x0F\x03\x0F\x03\x10" +
		"\x03\x10\x03\x11\x03\x11\x03\x12\x03\x12\x03\x13\x03\x13\x07\x13\u0207" +
		"\n\x13\f\x13\x0E\x13\u020A\v\x13\x03\x13\x03\x13\x03\x14\x06\x14\u020F" +
		"\n\x14\r\x14\x0E\x14\u0210\x03\x14\x05\x14\u0214\n\x14\x03\x15\x06\x15" +
		"\u0217\n\x15\r\x15\x0E\x15\u0218\x03\x15\x03\x15\x06\x15\u021D\n\x15\r" +
		"\x15\x0E\x15\u021E\x05\x15\u0221\n\x15\x03\x15\x07\x15\u0224\n\x15\f\x15" +
		"\x0E\x15\u0227\v\x15\x03\x15\x05\x15\u022A\n\x15\x03\x16\x03\x16\x06\x16" +
		"\u022E\n\x16\r\x16\x0E\x16\u022F\x03\x16\x03\x16\x03\x17\x03\x17\x06\x17" +
		"\u0236\n\x17\r\x17\x0E\x17\u0237\x03\x17\x03\x17\x03\x18\x03\x18\x06\x18" +
		"\u023E\n\x18\r\x18\x0E\x18\u023F\x03\x18\x03\x18\x03\x19\x03\x19\x05\x19" +
		"\u0246\n\x19\x03\x19\x03\x19\x05\x19\u024A\n\x19\x05\x19\u024C\n\x19\x03" +
		"\x19\x03\x19\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03" +
		"\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03" +
		"\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x05\x1A\u0266\n\x1A\x03\x1B" +
		"\x07\x1B\u0269\n\x1B\f\x1B\x0E\x1B\u026C\v\x1B\x03\x1B\x03\x1B\x07\x1B" +
		"\u0270\n\x1B\f\x1B\x0E\x1B\u0273\v\x1B\x03\x1B\x07\x1B\u0276\n\x1B\f\x1B" +
		"\x0E\x1B\u0279\v\x1B\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03" +
		"\x1C\x03\x1C\x03\x1C\x03\x1C\x05\x1C\u0285\n\x1C\x03\x1C\x07\x1C\u0288" +
		"\n\x1C\f\x1C\x0E\x1C\u028B\v\x1C\x03\x1D\x03\x1D\x06\x1D\u028F\n\x1D\r" +
		"\x1D\x0E\x1D\u0290\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x07" +
		"\x1E\u0299\n\x1E\f\x1E\x0E\x1E\u029C\v\x1E\x03\x1F\x03\x1F\x03\x1F\x03" +
		"\x1F\x05\x1F\u02A2\n\x1F\x03\x1F\x07\x1F\u02A5\n\x1F\f\x1F\x0E\x1F\u02A8" +
		"\v\x1F\x03\x1F\x03\x1F\x03 \x03 \x03 \x03 \x03!\x07!\u02B1\n!\f!\x0E!" +
		"\u02B4\v!\x03!\x03!\x03!\x07!\u02B9\n!\f!\x0E!\u02BC\v!\x03\"\x03\"\x03" +
		"#\x03#\x03#\x03#\x03#\x03#\x03#\x03#\x03#\x05#\u02C9\n#\x03$\x03$\x03" +
		"$\x03$\x03$\x03$\x05$\u02D1\n$\x03%\x03%\x03%\x05%\u02D6\n%\x03%\x03%" +
		"\x05%\u02DA\n%\x03%\x03%\x05%\u02DE\n%\x05%\u02E0\n%\x03&\x03&\x03&\x05" +
		"&\u02E5\n&\x03\'\x03\'\x03(\x03(\x03)\x03)\x03*\x03*\x03+\x03+\x03,\x03" +
		",\x03-\x03-\x03.\x03.\x03/\x03/\x030\x030\x030\x050\u02FC\n0\x030\x03" +
		"0\x030\x050\u0301\n0\x030\x030\x030\x050\u0306\n0\x050\u0308\n0\x031\x03" +
		"1\x032\x032\x032\x032\x032\x032\x052\u0312\n2\x033\x033\x033\x033\x03" +
		"3\x033\x033\x033\x053\u031C\n3\x034\x034\x034\x034\x034\x034\x034\x03" +
		"4\x054\u0326\n4\x035\x035\x035\x035\x055\u032C\n5\x035\x035\x035\x035" +
		"\x035\x055\u0333\n5\x036\x036\x076\u0337\n6\f6\x0E6\u033A\v6\x037\x03" +
		"7\x037\x077\u033F\n7\f7\x0E7\u0342\v7\x037\x037\x037\x038\x038\x078\u0349" +
		"\n8\f8\x0E8\u034C\v8\x039\x039\x039\x039\x039\x039\x039\x039\x059\u0356" +
		"\n9\x03:\x03:\x07:\u035A\n:\f:\x0E:\u035D\v:\x03:\x03:\x05:\u0361\n:\x03" +
		";\x03;\x03;\x07;\u0366\n;\f;\x0E;\u0369\v;\x03;\x03;\x03;\x03<\x03<\x03" +
		"<\x05<\u0371\n<\x03<\x03<\x05<\u0375\n<\x03<\x03<\x05<\u0379\n<\x05<\u037B" +
		"\n<\x03=\x03=\x03=\x03=\x03=\x03=\x03=\x03=\x03=\x03=\x03=\x07=\u0388" +
		"\n=\f=\x0E=\u038B\v=\x03=\x05=\u038E\n=\x03>\x03>\x03>\x03>\x03>\x03>" +
		"\x03>\x03>\x03>\x03>\x03>\x07>\u039B\n>\f>\x0E>\u039E\v>\x03>\x05>\u03A1" +
		"\n>\x03?\x03?\x07?\u03A5\n?\f?\x0E?\u03A8\v?\x03@\x03@\x03@\x03@\x03@" +
		"\x03@\x03@\x03@\x05@\u03B2\n@\x03A\x03A\x03A\x05A\u03B7\nA\x03A\x03A\x03" +
		"A\x05A\u03BC\nA\x05A\u03BE\nA\x03B\x03B\x03B\x05B\u03C3\nB\x03B\x03B\x03" +
		"B\x05B\u03C8\nB\x03B\x03B\x03B\x05B\u03CD\nB\x05B\u03CF\nB\x03C\x03C\x03" +
		"C\x05C\u03D4\nC\x03C\x03C\x07C\u03D8\nC\fC\x0EC\u03DB\vC\x03C\x03C\x06" +
		"C\u03DF\nC\rC\x0EC\u03E0\x03C\x03C\x03C\x03C\x03C\x03C\x03C\x07C\u03EA" +
		"\nC\fC\x0EC\u03ED\vC\x03C\x05C\u03F0\nC\x03D\x03D\x03D\x03D\x03E\x03E" +
		"\x03F\x03F\x03F\x07F\u03FB\nF\fF\x0EF\u03FE\vF\x03F\x03F\x07F\u0402\n" +
		"F\fF\x0EF\u0405\vF\x03F\x07F\u0408\nF\fF\x0EF\u040B\vF\x03F\x03F\x05F" +
		"\u040F\nF\x03F\x03F\x07F\u0413\nF\fF\x0EF\u0416\vF\x03F\x07F\u0419\nF" +
		"\fF\x0EF\u041C\vF\x05F\u041E\nF\x03G\x03G\x03G\x03G\x07G\u0424\nG\fG\x0E" +
		"G\u0427\vG\x03G\x03G\x03G\x03G\x03G\x03G\x07G\u042F\nG\fG\x0EG\u0432\v" +
		"G\x03G\x03G\x03G\x03G\x03G\x03G\x07G\u043A\nG\fG\x0EG\u043D\vG\x03G\x03" +
		"G\x03G\x03G\x05G\u0443\nG\x03G\x03G\x07G\u0447\nG\fG\x0EG\u044A\vG\x03" +
		"G\x05G\u044D\nG\x03H\x03H\x05H\u0451\nH\x03H\x03H\x03H\x05H\u0456\nH\x03" +
		"H\x05H\u0459\nH\x03I\x03I\x03I\x03I\x05I\u045F\nI\x03I\x05I\u0462\nI\x03" +
		"J\x03J\x05J\u0466\nJ\x03J\x03J\x03J\x07J\u046B\nJ\fJ\x0EJ\u046E\vJ\x07" +
		"J\u0470\nJ\fJ\x0EJ\u0473\vJ\x03J\x07J\u0476\nJ\fJ\x0EJ\u0479\vJ\x07J\u047B" +
		"\nJ\fJ\x0EJ\u047E\vJ\x03J\x03J\x03J\x03J\x03J\x07J\u0485\nJ\fJ\x0EJ\u0488" +
		"\vJ\x03J\x05J\u048B\nJ\x03K\x03K\x03K\x03K\x03K\x06K\u0492\nK\rK\x0EK" +
		"\u0493\x03K\x03K\x03K\x03K\x03K\x03K\x03K\x07K\u049D\nK\fK\x0EK\u04A0" +
		"\vK\x03K\x05K\u04A3\nK\x03L\x03L\x03L\x03L\x03M\x03M\x03M\x03M\x06M\u04AD" +
		"\nM\rM\x0EM\u04AE\x03M\x03M\x05M\u04B3\nM\x03N\x03N\x03N\x03N\x06N\u04B9" +
		"\nN\rN\x0EN\u04BA\x03N\x03N\x03O\x03O\x07O\u04C1\nO\fO\x0EO\u04C4\vO\x03" +
		"O\x05O\u04C7\nO\x03O\x03O\x07O\u04CB\nO\fO\x0EO\u04CE\vO\x07O\u04D0\n" +
		"O\fO\x0EO\u04D3\vO\x03O\x07O\u04D6\nO\fO\x0EO\u04D9\vO\x03O\x07O\u04DC" +
		"\nO\fO\x0EO\u04DF\vO\x03O\x03O\x03O\x07O\u04E4\nO\fO\x0EO\u04E7\vO\x03" +
		"O\x05O\u04EA\nO\x03O\x05O\u04ED\nO\x03P\x03P\x06P\u04F1\nP\rP\x0EP\u04F2" +
		"\x03P\x03P\x03Q\x03Q\x03Q\x06Q\u04FA\nQ\rQ\x0EQ\u04FB\x03Q\x03Q\x03Q\x03" +
		"Q\x03Q\x05Q\u0503\nQ\x03R\x03R\x03R\x03R\x03R\x03R\x03R\x03R\x05R\u050D" +
		"\nR\x03S\x03S\x03S\x03S\x03S\x03S\x03S\x03S\x03S\x05S\u0518\nS\x03T\x03" +
		"T\x03T\x03T\x03U\x03U\x03U\x03U\x03V\x03V\x07V\u0524\nV\fV\x0EV\u0527" +
		"\vV\x03V\x07V\u052A\nV\fV\x0EV\u052D\vV\x03W\x03W\x03W\x03W\x03W\x03W" +
		"\x03W\x07W\u0536\nW\fW\x0EW\u0539\vW\x03W\x03W\x03W\x03W\x07W\u053F\n" +
		"W\fW\x0EW\u0542\vW\x03W\x03W\x05W\u0546\nW\x03X\x03X\x03X\x03X\x06X\u054C" +
		"\nX\rX\x0EX\u054D\x03X\x03X\x03X\x03X\x03X\x07X\u0555\nX\fX\x0EX\u0558" +
		"\vX\x03X\x05X\u055B\nX\x03Y\x03Y\x05Y\u055F\nY\x03Y\x03Y\x03Z\x03Z\x03" +
		"[\x03[\x05[\u0567\n[\x06[\u0569\n[\r[\x0E[\u056A\x03\\\x03\\\x06\\\u056F" +
		"\n\\\r\\\x0E\\\u0570\x03\\\x05\\\u0574\n\\\x03\\\x03\\\x06\\\u0578\n\\" +
		"\r\\\x0E\\\u0579\x03\\\x05\\\u057D\n\\\x03\\\x03\\\x03\\\x03\\\x03\\\x03" +
		"\\\x03\\\x07\\\u0586\n\\\f\\\x0E\\\u0589\v\\\x03\\\x03\\\x07\\\u058D\n" +
		"\\\f\\\x0E\\\u0590\v\\\x03\\\x03\\\x07\\\u0594\n\\\f\\\x0E\\\u0597\v\\" +
		"\x03\\\x03\\\x03\\\x05\\\u059C\n\\\x03]\x03]\x03^\x03^\x03_\x03_\x03_" +
		"\x03_\x03_\x03_\x03_\x03_\x03_\x03_\x03_\x03_\x06_\u05AE\n_\r_\x0E_\u05AF" +
		"\x03`\x03`\x03`\x07\u0208\u0389\u039C\u03EB\u0540\x02\x02a\x02\x02\x04" +
		"\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02" +
		"\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02$\x02&\x02(\x02*\x02,\x02." +
		"\x020\x022\x024\x026\x028\x02:\x02<\x02>\x02@\x02B\x02D\x02F\x02H\x02" +
		"J\x02L\x02N\x02P\x02R\x02T\x02V\x02X\x02Z\x02\\\x02^\x02`\x02b\x02d\x02" +
		"f\x02h\x02j\x02l\x02n\x02p\x02r\x02t\x02v\x02x\x02z\x02|\x02~\x02\x80" +
		"\x02\x82\x02\x84\x02\x86\x02\x88\x02\x8A\x02\x8C\x02\x8E\x02\x90\x02\x92" +
		"\x02\x94\x02\x96\x02\x98\x02\x9A\x02\x9C\x02\x9E\x02\xA0\x02\xA2\x02\xA4" +
		"\x02\xA6\x02\xA8\x02\xAA\x02\xAC\x02\xAE\x02\xB0\x02\xB2\x02\xB4\x02\xB6" +
		"\x02\xB8\x02\xBA\x02\xBC\x02\xBE\x02\x02\x17\x03\x02\'(\x03\x02FG\b\x02" +
		"]^`anv\x81\x84\x8A\x8B\x8D\x8F\x05\x02\\\\pp\x81\x81\x04\x02]]qq\x05\x02" +
		"^^rs\x83\x83\x04\x02__tt\x04\x02``uu\x05\x02aavv\x84\x84\x04\x02ggzz\x05" +
		"\x02ii{|\x88\x88\x04\x02jj}}\x04\x02kk~~\x05\x02ll\x7F\x7F\x89\x89\x03" +
		"\x02=>\x04\x02MMPS\x03\x02\x1B\x1B\x04\x02\x1C\x1C\x1E\x1E\x03\x02)*\x03" +
		"\x02!!\x03\x02\"\"\x02\u0696\x02\xCD\x03\x02\x02\x02\x04\xD9\x03\x02\x02" +
		"\x02\x06\xDD\x03\x02\x02\x02\b\u0127\x03\x02\x02\x02\n\u016A\x03\x02\x02" +
		"\x02\f\u016E\x03\x02\x02\x02\x0E\u0170\x03\x02\x02\x02\x10\u0172\x03\x02" +
		"\x02\x02\x12\u0175\x03\x02\x02\x02\x14\u01D8\x03\x02\x02\x02\x16\u01DB" +
		"\x03\x02\x02\x02\x18\u01F2\x03\x02\x02\x02\x1A\u01F8\x03\x02\x02\x02\x1C" +
		"\u01FC\x03\x02\x02\x02\x1E\u01FE\x03\x02\x02\x02 \u0200\x03\x02\x02\x02" +
		"\"\u0202\x03\x02\x02\x02$\u0204\x03\x02\x02\x02&\u020E\x03\x02\x02\x02" +
		"(\u0216\x03\x02\x02\x02*\u022B\x03\x02\x02\x02,\u0233\x03\x02\x02\x02" +
		".\u023B\x03\x02\x02\x020\u0243\x03\x02\x02\x022\u0265\x03\x02\x02\x02" +
		"4\u026A\x03\x02\x02\x026\u0284\x03\x02\x02\x028\u028E\x03\x02\x02\x02" +
		":\u0292\x03\x02\x02\x02<\u029D\x03\x02\x02\x02>\u02AB\x03\x02\x02\x02" +
		"@\u02B2\x03\x02\x02\x02B\u02BD\x03\x02\x02\x02D\u02C8\x03\x02\x02\x02" +
		"F\u02D0\x03\x02\x02\x02H\u02DF\x03\x02\x02\x02J\u02E1\x03\x02\x02\x02" +
		"L\u02E6\x03\x02\x02\x02N\u02E8\x03\x02\x02\x02P\u02EA\x03\x02\x02\x02" +
		"R\u02EC\x03\x02\x02\x02T\u02EE\x03\x02\x02\x02V\u02F0\x03\x02\x02\x02" +
		"X\u02F2\x03\x02\x02\x02Z\u02F4\x03\x02\x02\x02\\\u02F6\x03\x02\x02\x02" +
		"^\u0307\x03\x02\x02\x02`\u0309\x03\x02\x02\x02b\u0311\x03\x02\x02\x02" +
		"d\u0313\x03\x02\x02\x02f\u031D\x03\x02\x02\x02h\u0327\x03\x02\x02\x02" +
		"j\u0334\x03\x02\x02\x02l\u033B\x03\x02\x02\x02n\u0346\x03\x02\x02\x02" +
		"p\u034D\x03\x02\x02\x02r\u0357\x03\x02\x02\x02t\u0362\x03\x02\x02\x02" +
		"v\u037A\x03\x02\x02\x02x\u038D\x03\x02\x02\x02z\u03A0\x03\x02\x02\x02" +
		"|\u03A2\x03\x02\x02\x02~\u03A9\x03\x02\x02\x02\x80\u03BD\x03\x02\x02\x02" +
		"\x82\u03CE\x03\x02\x02\x02\x84\u03EF\x03\x02\x02\x02\x86\u03F1\x03\x02" +
		"\x02\x02\x88\u03F5\x03\x02\x02\x02\x8A\u041D\x03\x02\x02\x02\x8C\u044C" +
		"\x03\x02\x02\x02\x8E\u0458\x03\x02\x02\x02\x90\u0461\x03\x02\x02\x02\x92" +
		"\u048A\x03\x02\x02\x02\x94\u04A2\x03\x02\x02\x02\x96\u04A4\x03\x02\x02" +
		"\x02\x98\u04A8\x03\x02\x02\x02\x9A\u04B4\x03\x02\x02\x02\x9C\u04EC\x03" +
		"\x02\x02\x02\x9E\u04EE\x03\x02\x02\x02\xA0\u0502\x03\x02\x02\x02\xA2\u050C" +
		"\x03\x02\x02\x02\xA4\u0517\x03\x02\x02\x02\xA6\u0519\x03\x02\x02\x02\xA8" +
		"\u051D\x03\x02\x02\x02\xAA\u0521\x03\x02\x02\x02\xAC\u0545\x03\x02\x02" +
		"\x02\xAE\u055A\x03\x02\x02\x02\xB0\u055C\x03\x02\x02\x02\xB2\u0562\x03" +
		"\x02\x02\x02\xB4\u0568\x03\x02\x02\x02\xB6\u059B\x03\x02\x02\x02\xB8\u059D" +
		"\x03\x02\x02\x02\xBA\u059F\x03\x02\x02\x02\xBC\u05AD\x03\x02\x02\x02\xBE" +
		"\u05B1\x03\x02\x02\x02\xC0\xCA\x05\x04\x03\x02\xC1\xC3\x07\x04\x02\x02" +
		"\xC2\xC1\x03\x02\x02\x02\xC3\xC6\x03\x02\x02\x02\xC4\xC2\x03\x02\x02\x02" +
		"\xC4\xC5\x03\x02\x02\x02\xC5\xC7\x03\x02\x02\x02\xC6\xC4\x03\x02\x02\x02" +
		"\xC7\xC9\x075\x02\x02\xC8\xC4\x03\x02\x02\x02\xC9\xCC\x03\x02\x02\x02" +
		"\xCA\xC8\x03\x02\x02\x02\xCA\xCB\x03\x02\x02\x02\xCB\xCE\x03\x02\x02\x02" +
		"\xCC\xCA\x03\x02\x02\x02\xCD\xC0\x03\x02\x02\x02\xCE\xCF\x03\x02\x02\x02" +
		"\xCF\xCD\x03\x02\x02\x02\xCF\xD0\x03\x02\x02\x02\xD0\xD4\x03\x02\x02\x02" +
		"\xD1\xD3\x075\x02\x02\xD2\xD1\x03\x02\x02\x02\xD3\xD6\x03\x02\x02\x02" +
		"\xD4\xD2\x03\x02\x02\x02\xD4\xD5\x03\x02\x02\x02\xD5\xD7\x03\x02\x02\x02" +
		"\xD6\xD4\x03\x02\x02\x02\xD7\xD8\x07\x02\x02\x03\xD8\x03\x03\x02\x02\x02" +
		"\xD9\xDA\x05\x06\x04\x02\xDA\x05\x03\x02\x02\x02\xDB\xDE\x05\b\x05\x02" +
		"\xDC\xDE\x05\n\x06\x02\xDD\xDB\x03\x02\x02\x02\xDD\xDC\x03\x02\x02\x02" +
		"\xDE\x07\x03\x02\x02\x02\xDF\xE0\x07\x05\x02\x02\xE0\xE1\x05@!\x02\xE1" +
		"\xE5\x07\x1B\x02\x02\xE2\xE4\x075\x02\x02\xE3\xE2\x03\x02\x02\x02\xE4" +
		"\xE7\x03\x02\x02\x02\xE5\xE3\x03\x02\x02\x02\xE5\xE6\x03\x02\x02\x02\xE6" +
		"\xF1\x03\x02\x02\x02\xE7\xE5\x03\x02\x02\x02\xE8\xEC\x052\x1A\x02\xE9" +
		"\xEB\x075\x02\x02\xEA\xE9\x03\x02\x02\x02\xEB\xEE\x03\x02\x02\x02\xEC" +
		"\xEA\x03\x02\x02\x02\xEC\xED\x03\x02\x02\x02\xED\xF0\x03\x02\x02\x02\xEE" +
		"\xEC\x03\x02\x02\x02\xEF\xE8\x03\x02\x02\x02\xF0\xF3\x03\x02\x02\x02\xF1" +
		"\xEF\x03\x02\x02\x02\xF1\xF2\x03\x02\x02\x02\xF2\u0128\x03\x02\x02\x02" +
		"\xF3\xF1\x03\x02\x02\x02\xF4\xF5\x07\x05\x02\x02\xF5\xF6\x05@!\x02\xF6" +
		"\xFA\x07\x1B\x02\x02\xF7\xF9\x075\x02\x02\xF8\xF7\x03\x02\x02\x02\xF9" +
		"\xFC\x03\x02\x02\x02\xFA\xF8\x03\x02\x02\x02\xFA\xFB\x03\x02\x02\x02\xFB" +
		"\u0106\x03\x02\x02\x02\xFC\xFA\x03\x02\x02\x02\xFD\u0101\x052\x1A\x02" +
		"\xFE\u0100\x075\x02\x02\xFF\xFE\x03\x02\x02\x02\u0100\u0103\x03\x02\x02" +
		"\x02\u0101\xFF\x03\x02\x02\x02\u0101\u0102\x03\x02\x02\x02\u0102\u0105" +
		"\x03\x02\x02\x02\u0103\u0101\x03\x02\x02\x02\u0104\xFD\x03\x02\x02\x02" +
		"\u0105\u0108\x03\x02\x02\x02\u0106\u0104\x03\x02\x02\x02\u0106\u0107\x03" +
		"\x02\x02\x02\u0107\u0119\x03\x02\x02\x02\u0108\u0106\x03\x02\x02\x02\u0109" +
		"\u010D\x05\f\x07\x02\u010A\u010C\x075\x02\x02\u010B\u010A\x03\x02\x02" +
		"\x02\u010C\u010F\x03\x02\x02\x02\u010D\u010B\x03\x02\x02\x02\u010D\u010E" +
		"\x03\x02\x02\x02\u010E\u0117\x03\x02\x02\x02\u010F\u010D\x03\x02\x02\x02" +
		"\u0110\u0114\x05\x12\n\x02\u0111\u0113\x075\x02\x02\u0112\u0111\x03\x02" +
		"\x02\x02\u0113\u0116\x03\x02\x02\x02\u0114\u0112\x03\x02\x02\x02\u0114" +
		"\u0115\x03\x02\x02\x02\u0115\u0118\x03\x02\x02\x02\u0116\u0114\x03\x02" +
		"\x02\x02\u0117\u0110\x03\x02\x02\x02\u0117\u0118\x03\x02\x02\x02\u0118" +
		"\u011A\x03\x02\x02\x02\u0119\u0109\x03\x02\x02\x02\u011A\u011B\x03\x02" +
		"\x02\x02\u011B\u0119\x03\x02\x02\x02\u011B\u011C\x03\x02\x02\x02\u011C" +
		"\u011D\x03\x02\x02\x02\u011D\u0121\x05\x0E\b\x02\u011E\u0120\x075\x02" +
		"\x02\u011F\u011E\x03\x02\x02\x02\u0120\u0123\x03\x02\x02\x02\u0121\u011F" +
		"\x03\x02\x02\x02\u0121\u0122\x03\x02\x02\x02\u0122\u0125\x03\x02\x02\x02" +
		"\u0123\u0121\x03\x02\x02\x02\u0124\u0126\x054\x1B\x02\u0125\u0124\x03" +
		"\x02\x02\x02\u0125\u0126\x03\x02\x02\x02\u0126\u0128\x03\x02\x02\x02\u0127" +
		"\xDF\x03\x02\x02\x02\u0127\xF4\x03\x02\x02\x02\u0128\t\x03\x02\x02\x02" +
		"\u0129\u012A\x07\x06\x02\x02\u012A\u012B\x05@!\x02\u012B\u012F\x07\x1B" +
		"\x02\x02\u012C\u012E\x075\x02\x02\u012D\u012C\x03\x02\x02\x02\u012E\u0131" +
		"\x03\x02\x02\x02\u012F\u012D\x03\x02\x02\x02\u012F\u0130\x03\x02\x02\x02" +
		"\u0130\u013B\x03\x02\x02\x02\u0131\u012F\x03\x02\x02\x02\u0132\u0136\x05" +
		"2\x1A\x02\u0133\u0135\x075\x02\x02\u0134\u0133\x03\x02\x02\x02\u0135\u0138" +
		"\x03\x02\x02\x02\u0136\u0134\x03\x02\x02\x02\u0136\u0137\x03\x02\x02\x02" +
		"\u0137\u013A\x03\x02\x02\x02\u0138\u0136\x03\x02\x02\x02\u0139\u0132\x03" +
		"\x02\x02\x02\u013A\u013D\x03\x02\x02\x02\u013B\u0139\x03\x02\x02\x02\u013B" +
		"\u013C\x03\x02\x02\x02\u013C\u016B\x03\x02\x02\x02\u013D";
	private static readonly _serializedATNSegment1: string =
		"\u013B\x03\x02\x02\x02\u013E\u013F\x07\x06\x02\x02\u013F\u0140\x05@!\x02" +
		"\u0140\u0144\x07\x1B\x02\x02\u0141\u0143\x075\x02\x02\u0142\u0141\x03" +
		"\x02\x02\x02\u0143\u0146\x03\x02\x02\x02\u0144\u0142\x03\x02\x02\x02\u0144" +
		"\u0145\x03\x02\x02\x02\u0145\u0150\x03\x02\x02\x02\u0146\u0144\x03\x02" +
		"\x02\x02\u0147\u014B\x052\x1A\x02\u0148\u014A\x075\x02\x02\u0149\u0148" +
		"\x03\x02\x02\x02\u014A\u014D\x03\x02\x02\x02\u014B\u0149\x03\x02\x02\x02" +
		"\u014B\u014C\x03\x02\x02\x02\u014C\u014F\x03\x02\x02\x02\u014D\u014B\x03" +
		"\x02\x02\x02\u014E\u0147\x03\x02\x02\x02\u014F\u0152\x03\x02\x02\x02\u0150" +
		"\u014E\x03\x02\x02\x02\u0150\u0151\x03\x02\x02\x02\u0151\u015D\x03\x02" +
		"\x02\x02\u0152\u0150\x03\x02\x02\x02\u0153\u0154\x05\f\x07\x02\u0154\u0158" +
		"\x05\x12\n\x02\u0155\u0157\x075\x02\x02\u0156\u0155\x03\x02\x02\x02\u0157" +
		"\u015A\x03\x02\x02\x02\u0158\u0156\x03\x02\x02\x02\u0158\u0159\x03\x02" +
		"\x02\x02\u0159\u015C\x03\x02\x02\x02\u015A\u0158\x03\x02\x02\x02\u015B" +
		"\u0153\x03\x02\x02\x02\u015C\u015F\x03\x02\x02\x02\u015D\u015B\x03\x02" +
		"\x02\x02\u015D\u015E\x03\x02\x02\x02\u015E\u0160\x03\x02\x02\x02\u015F" +
		"\u015D\x03\x02\x02\x02\u0160\u0164\x05\x0E\b\x02\u0161\u0163\x075\x02" +
		"\x02\u0162\u0161\x03\x02\x02\x02\u0163\u0166\x03\x02\x02\x02\u0164\u0162" +
		"\x03\x02\x02\x02\u0164\u0165\x03\x02\x02\x02\u0165\u0168\x03\x02\x02\x02" +
		"\u0166\u0164\x03\x02\x02\x02\u0167\u0169\x054\x1B\x02\u0168\u0167\x03" +
		"\x02\x02\x02\u0168\u0169\x03\x02\x02\x02\u0169\u016B\x03\x02\x02\x02\u016A" +
		"\u0129\x03\x02\x02\x02\u016A\u013E\x03\x02\x02\x02\u016B\v\x03\x02\x02" +
		"\x02\u016C\u016F\t\x02\x02\x02\u016D\u016F\x075\x02\x02\u016E\u016C\x03" +
		"\x02\x02\x02\u016E\u016D\x03\x02\x02\x02\u016F\r\x03\x02\x02\x02\u0170" +
		"\u0171\t\x02\x02\x02\u0171\x0F\x03\x02\x02\x02\u0172\u0173\x05\x12\n\x02" +
		"\u0173\u0174\x075\x02\x02\u0174\x11\x03\x02\x02\x02\u0175\u017E\x05\x14" +
		"\v\x02\u0176\u0178\x075\x02\x02\u0177\u0176\x03\x02\x02\x02\u0178\u0179" +
		"\x03\x02\x02\x02\u0179\u0177\x03\x02\x02\x02\u0179\u017A\x03\x02\x02\x02" +
		"\u017A\u017B\x03\x02\x02\x02\u017B\u017D\x05\x14\v\x02\u017C\u0177\x03" +
		"\x02\x02\x02\u017D\u0180\x03\x02\x02\x02\u017E\u017C\x03\x02\x02\x02\u017E" +
		"\u017F\x03\x02\x02\x02\u017F\x13\x03\x02\x02\x02\u0180\u017E\x03\x02\x02" +
		"\x02\u0181\u0183\x05\x8AF\x02\u0182\u0181\x03\x02\x02\x02\u0182\u0183" +
		"\x03\x02\x02\x02\u0183\u0184\x03\x02\x02\x02\u0184\u0188\x05\x18\r\x02" +
		"\u0185\u0187\x07\x04\x02\x02\u0186\u0185\x03\x02\x02\x02\u0187\u018A\x03" +
		"\x02\x02\x02\u0188\u0186\x03\x02\x02\x02\u0188\u0189\x03\x02\x02\x02\u0189" +
		"\u0198\x03\x02\x02\x02\u018A\u0188\x03\x02\x02\x02\u018B\u0197\x05\x8A" +
		"F\x02\u018C\u0197\x05\x9CO\x02\u018D\u0197\x05\x90I\x02\u018E\u0197\x05" +
		"\x1E\x10\x02\u018F\u0197\x05\x1C\x0F\x02\u0190\u0197\x05\xAEX\x02\u0191" +
		"\u0197\x05 \x11\x02\u0192\u0197\x05<\x1F\x02\u0193\u0197\x05$\x13\x02" +
		"\u0194\u0197\x05\x9EP\x02\u0195\u0197\x05\x16\f\x02\u0196\u018B\x03\x02" +
		"\x02\x02\u0196\u018C\x03\x02\x02\x02\u0196\u018D\x03\x02\x02\x02\u0196" +
		"\u018E\x03\x02\x02\x02\u0196\u018F\x03\x02\x02\x02\u0196\u0190\x03\x02" +
		"\x02\x02\u0196\u0191\x03\x02\x02\x02\u0196\u0192\x03\x02\x02\x02\u0196" +
		"\u0193\x03\x02\x02\x02\u0196\u0194\x03\x02\x02\x02\u0196\u0195\x03\x02" +
		"\x02\x02\u0197\u019A\x03\x02\x02\x02\u0198\u0196\x03\x02\x02\x02\u0198" +
		"\u0199\x03\x02\x02\x02\u0199\u01B0\x03\x02\x02\x02\u019A\u0198\x03\x02" +
		"\x02\x02\u019B\u019D\x075\x02\x02\u019C\u019E\x05\x1A\x0E\x02\u019D\u019C" +
		"\x03\x02\x02\x02\u019D\u019E\x03\x02\x02\x02\u019E\u01A2\x03\x02\x02\x02" +
		"\u019F\u01A1\x07\x04\x02\x02\u01A0\u019F\x03\x02\x02\x02\u01A1\u01A4\x03" +
		"\x02\x02\x02\u01A2\u01A0\x03\x02\x02\x02\u01A2\u01A3\x03\x02\x02\x02\u01A3" +
		"\u01AD\x03\x02\x02\x02\u01A4\u01A2\x03\x02\x02\x02\u01A5\u01AC\x05\x90" +
		"I\x02\u01A6\u01AC\x05\x1E\x10\x02\u01A7\u01AC\x05\x1C\x0F\x02\u01A8\u01AC" +
		"\x05\xAEX\x02\u01A9\u01AC\x05 \x11\x02\u01AA\u01AC\x05\"\x12\x02\u01AB" +
		"\u01A5\x03\x02\x02\x02\u01AB\u01A6\x03\x02\x02\x02\u01AB\u01A7\x03\x02" +
		"\x02\x02\u01AB\u01A8\x03\x02\x02\x02\u01AB\u01A9\x03\x02\x02\x02\u01AB" +
		"\u01AA\x03\x02\x02\x02\u01AC\u01AF\x03\x02\x02\x02\u01AD\u01AB\x03\x02" +
		"\x02\x02\u01AD\u01AE\x03\x02\x02\x02\u01AE\u01B1\x03\x02\x02\x02\u01AF" +
		"\u01AD\x03\x02\x02\x02\u01B0\u019B\x03\x02\x02\x02\u01B0\u01B1\x03\x02" +
		"\x02\x02\u01B1\u01D9\x03\x02\x02\x02\u01B2\u01BE\x05\x8AF\x02\u01B3\u01BE" +
		"\x05\x9CO\x02\u01B4\u01BE\x05\x90I\x02\u01B5\u01BE\x05\x1E\x10\x02\u01B6" +
		"\u01BE\x05\x1C\x0F\x02\u01B7\u01BE\x05\xAEX\x02\u01B8\u01BE\x05 \x11\x02" +
		"\u01B9\u01BE\x05<\x1F\x02\u01BA\u01BE\x05$\x13\x02\u01BB\u01BE\x05\x9E" +
		"P\x02\u01BC\u01BE\x05\x16\f\x02\u01BD\u01B2\x03\x02\x02\x02\u01BD\u01B3" +
		"\x03\x02\x02\x02\u01BD\u01B4\x03\x02\x02\x02\u01BD\u01B5\x03\x02\x02\x02" +
		"\u01BD\u01B6\x03\x02\x02\x02\u01BD\u01B7\x03\x02\x02\x02\u01BD\u01B8\x03" +
		"\x02\x02\x02\u01BD\u01B9\x03\x02\x02\x02\u01BD\u01BA\x03\x02\x02\x02\u01BD" +
		"\u01BB\x03\x02\x02\x02\u01BD\u01BC\x03\x02\x02\x02\u01BE\u01BF\x03\x02" +
		"\x02\x02\u01BF\u01BD\x03\x02\x02\x02\u01BF\u01C0\x03\x02\x02\x02\u01C0" +
		"\u01D6\x03\x02\x02\x02\u01C1\u01C3\x075\x02\x02\u01C2\u01C4\x05\x1A\x0E" +
		"\x02\u01C3\u01C2\x03\x02\x02\x02\u01C3\u01C4\x03\x02\x02\x02\u01C4\u01C8" +
		"\x03\x02\x02\x02\u01C5\u01C7\x07\x04\x02\x02\u01C6\u01C5\x03\x02\x02\x02" +
		"\u01C7\u01CA\x03\x02\x02\x02\u01C8\u01C6\x03\x02\x02\x02\u01C8\u01C9\x03" +
		"\x02\x02\x02\u01C9\u01D3\x03\x02\x02\x02\u01CA\u01C8\x03\x02\x02\x02\u01CB" +
		"\u01D2\x05\x90I\x02\u01CC\u01D2\x05\x1E\x10\x02\u01CD\u01D2\x05\x1C\x0F" +
		"\x02\u01CE\u01D2\x05\xAEX\x02\u01CF\u01D2\x05 \x11\x02\u01D0\u01D2\x05" +
		"\"\x12\x02\u01D1\u01CB\x03\x02\x02\x02\u01D1\u01CC\x03\x02\x02\x02\u01D1" +
		"\u01CD\x03\x02\x02\x02\u01D1\u01CE\x03\x02\x02\x02\u01D1\u01CF\x03\x02" +
		"\x02\x02\u01D1\u01D0\x03\x02\x02\x02\u01D2\u01D5\x03\x02\x02\x02\u01D3" +
		"\u01D1\x03\x02\x02\x02\u01D3\u01D4\x03\x02\x02\x02\u01D4\u01D7\x03\x02" +
		"\x02\x02\u01D5\u01D3\x03\x02\x02\x02\u01D6\u01C1\x03\x02\x02\x02\u01D6" +
		"\u01D7\x03\x02\x02\x02\u01D7\u01D9\x03\x02\x02\x02\u01D8\u0182\x03\x02" +
		"\x02\x02\u01D8\u01BD\x03\x02\x02\x02\u01D9\x15\x03\x02\x02\x02\u01DA\u01DC" +
		"\x05\xB6\\\x02\u01DB\u01DA\x03\x02\x02\x02\u01DC\u01DD\x03\x02\x02\x02" +
		"\u01DD\u01DB\x03\x02\x02\x02\u01DD\u01DE\x03\x02\x02\x02\u01DE\x17\x03" +
		"\x02\x02\x02\u01DF\u01E0\x074\x02\x02\u01E0\u01E2\x07\x1B\x02\x02\u01E1" +
		"\u01DF\x03\x02\x02\x02\u01E1\u01E2\x03\x02\x02\x02\u01E2\u01ED\x03\x02" +
		"\x02\x02\u01E3\u01E5\x05\xBC_\x02\u01E4\u01E6\x07\x1C\x02\x02\u01E5\u01E4" +
		"\x03\x02\x02\x02\u01E5\u01E6\x03\x02\x02\x02\u01E6\u01EA\x03\x02\x02\x02" +
		"\u01E7\u01E9\x075\x02\x02\u01E8\u01E7\x03\x02\x02\x02\u01E9\u01EC\x03" +
		"\x02\x02\x02\u01EA\u01E8\x03\x02\x02\x02\u01EA\u01EB\x03\x02\x02\x02\u01EB" +
		"\u01EE\x03\x02\x02\x02\u01EC\u01EA\x03\x02\x02\x02\u01ED\u01E3\x03\x02" +
		"\x02\x02\u01EE\u01EF\x03\x02\x02\x02\u01EF\u01ED\x03\x02\x02\x02\u01EF" +
		"\u01F0\x03\x02\x02\x02\u01F0\u01F3\x03\x02\x02\x02\u01F1\u01F3\x07\xA0" +
		"\x02\x02\u01F2\u01E1\x03\x02\x02\x02\u01F2\u01F1\x03\x02\x02\x02\u01F3" +
		"\x19\x03\x02\x02\x02\u01F4\u01F6\x05\xBC_\x02\u01F5\u01F7\x07\x1C\x02" +
		"\x02\u01F6\u01F5\x03\x02\x02\x02\u01F6\u01F7\x03\x02\x02\x02\u01F7\u01F9" +
		"\x03\x02\x02\x02\u01F8\u01F4\x03\x02\x02\x02\u01F9\u01FA\x03\x02\x02\x02" +
		"\u01FA\u01F8\x03\x02\x02\x02\u01FA\u01FB\x03\x02\x02\x02\u01FB\x1B\x03" +
		"\x02\x02\x02\u01FC\u01FD\x07A\x02\x02\u01FD\x1D\x03\x02\x02\x02\u01FE" +
		"\u01FF\x07@\x02\x02\u01FF\x1F\x03\x02\x02\x02\u0200\u0201\t\x03\x02\x02" +
		"\u0201!\x03\x02\x02\x02\u0202\u0203\x07E\x02\x02\u0203#\x03\x02\x02\x02" +
		"\u0204\u0208\x07\x13\x02\x02\u0205\u0207\v\x02\x02\x02\u0206\u0205\x03" +
		"\x02\x02\x02\u0207\u020A\x03\x02\x02\x02\u0208\u0209\x03\x02\x02\x02\u0208" +
		"\u0206\x03\x02\x02\x02\u0209\u020B\x03\x02\x02\x02\u020A\u0208\x03\x02" +
		"\x02\x02\u020B\u020C\x07\x1B\x02\x02\u020C%\x03\x02\x02\x02\u020D\u020F" +
		"\x05\xB6\\\x02\u020E\u020D\x03\x02\x02\x02\u020F\u0210\x03\x02\x02\x02" +
		"\u0210\u020E\x03\x02\x02\x02\u0210\u0211\x03\x02\x02\x02\u0211\u0213\x03" +
		"\x02\x02\x02\u0212\u0214\x07D\x02\x02\u0213\u0212\x03\x02\x02\x02\u0213" +
		"\u0214\x03\x02\x02\x02\u0214\'\x03\x02\x02\x02\u0215\u0217\x05\xB6\\\x02" +
		"\u0216\u0215\x03\x02\x02\x02\u0217\u0218\x03\x02\x02\x02\u0218\u0216\x03" +
		"\x02\x02\x02\u0218\u0219\x03\x02\x02\x02\u0219\u0220\x03\x02\x02\x02\u021A" +
		"\u021C\x07&\x02\x02\u021B\u021D\x05\xB6\\\x02\u021C\u021B\x03\x02\x02" +
		"\x02\u021D\u021E\x03\x02\x02\x02\u021E\u021C\x03\x02\x02\x02\u021E\u021F" +
		"\x03\x02\x02\x02\u021F\u0221\x03\x02\x02\x02\u0220\u021A\x03\x02\x02\x02" +
		"\u0220\u0221\x03\x02\x02\x02\u0221\u0229\x03\x02\x02\x02\u0222\u0224\x07" +
		"\x04\x02\x02\u0223\u0222\x03\x02\x02\x02\u0224\u0227\x03\x02\x02\x02\u0225" +
		"\u0223\x03\x02\x02\x02\u0225\u0226\x03\x02\x02\x02\u0226\u0228\x03\x02" +
		"\x02\x02\u0227\u0225\x03\x02\x02\x02\u0228\u022A\x05\x90I\x02\u0229\u0225" +
		"\x03\x02\x02\x02\u0229\u022A\x03\x02\x02\x02\u022A)\x03\x02\x02\x02\u022B" +
		"\u022D\x05,\x17\x02\u022C\u022E\x075\x02\x02\u022D\u022C\x03\x02\x02\x02" +
		"\u022E\u022F\x03\x02\x02\x02\u022F\u022D\x03\x02\x02\x02\u022F\u0230\x03" +
		"\x02\x02\x02\u0230\u0231\x03\x02\x02\x02\u0231\u0232\x05.\x18\x02\u0232" +
		"+\x03\x02\x02\x02\u0233\u0235\x07\x1A\x02\x02\u0234\u0236\x05\xB6\\\x02" +
		"\u0235\u0234\x03\x02\x02\x02\u0236\u0237\x03\x02\x02\x02\u0237\u0235\x03" +
		"\x02\x02\x02\u0237\u0238\x03\x02\x02\x02\u0238\u0239\x03\x02\x02\x02\u0239" +
		"\u023A\x07\x1B\x02\x02\u023A-\x03\x02\x02\x02\u023B\u023D\x07\x1A\x02" +
		"\x02\u023C\u023E\x05\xB6\\\x02\u023D\u023C\x03\x02\x02\x02\u023E\u023F" +
		"\x03\x02\x02\x02\u023F\u023D\x03\x02\x02\x02\u023F\u0240\x03\x02\x02\x02" +
		"\u0240\u0241\x03\x02\x02\x02\u0241\u0242\x07\x1B\x02\x02\u0242/\x03\x02" +
		"\x02\x02\u0243\u024B\x07C\x02\x02\u0244\u0246\x075\x02\x02\u0245\u0244" +
		"\x03\x02\x02\x02\u0245\u0246\x03\x02\x02\x02\u0246\u0247\x03\x02\x02\x02" +
		"\u0247\u0249\x05\xB4[\x02\u0248\u024A\x075\x02\x02\u0249\u0248\x03\x02" +
		"\x02\x02\u0249\u024A\x03\x02\x02\x02\u024A\u024C\x03\x02\x02\x02\u024B" +
		"\u0245\x03\x02\x02\x02\u024B\u024C\x03\x02\x02\x02\u024C\u024D\x03\x02" +
		"\x02\x02\u024D\u024E\x07\x1B\x02\x02\u024E1\x03\x02\x02\x02\u024F\u0266" +
		"\x076\x02\x02\u0250\u0266\x05\x8AF\x02\u0251\u0266\x05\xAAV\x02\u0252" +
		"\u0266\x05\x94K\x02\u0253\u0266\x05\xA0Q\x02\u0254\u0266\x05\x9CO\x02" +
		"\u0255\u0266\x05\x9EP\x02\u0256\u0266\x05:\x1E\x02\u0257\u0266\x05\xB6" +
		"\\\x02\u0258\u0266\x05\x90I\x02\u0259\u0266\x05\xA2R\x02\u025A\u0266\x05" +
		"r:\x02\u025B\u0266\x05|?\x02\u025C\u0266\x05n8\x02\u025D\u0266\x05b2\x02" +
		"\u025E\u0266\x05d3\x02\u025F\u0266\x05h5\x02\u0260\u0266\x05f4\x02\u0261" +
		"\u0266\x05j6\x02\u0262\u0266\x05\x8EH\x02\u0263\u0266\x05\xB0Y\x02\u0264" +
		"\u0266\x05\xBE`\x02\u0265\u024F\x03\x02\x02\x02\u0265\u0250\x03\x02\x02" +
		"\x02\u0265\u0251\x03\x02\x02\x02\u0265\u0252\x03\x02\x02\x02\u0265\u0253" +
		"\x03\x02\x02\x02\u0265\u0254\x03\x02\x02\x02\u0265\u0255\x03\x02\x02\x02" +
		"\u0265\u0256\x03\x02\x02\x02\u0265\u0257\x03\x02\x02\x02\u0265\u0258\x03" +
		"\x02\x02\x02\u0265\u0259\x03\x02\x02\x02\u0265\u025A\x03\x02\x02\x02\u0265" +
		"\u025B\x03\x02\x02\x02\u0265\u025C\x03\x02\x02\x02\u0265\u025D\x03\x02" +
		"\x02\x02\u0265\u025E\x03\x02\x02\x02\u0265\u025F\x03\x02\x02\x02\u0265" +
		"\u0260\x03\x02\x02\x02\u0265\u0261\x03\x02\x02\x02\u0265\u0262\x03\x02" +
		"\x02\x02\u0265\u0263\x03\x02\x02\x02\u0265\u0264\x03\x02\x02\x02\u0266" +
		"3\x03\x02\x02\x02\u0267\u0269\x075\x02\x02\u0268\u0267\x03\x02\x02\x02" +
		"\u0269\u026C\x03\x02\x02\x02\u026A\u0268\x03\x02\x02\x02\u026A\u026B\x03" +
		"\x02\x02\x02\u026B\u026D\x03\x02\x02\x02\u026C\u026A\x03\x02\x02\x02\u026D" +
		"\u0271\x056\x1C\x02\u026E\u0270\x056\x1C\x02\u026F\u026E\x03\x02\x02\x02" +
		"\u0270\u0273\x03\x02\x02\x02\u0271\u026F\x03\x02\x02\x02\u0271\u0272\x03" +
		"\x02\x02\x02\u0272\u0277\x03\x02\x02\x02\u0273\u0271\x03\x02\x02\x02\u0274" +
		"\u0276\x075\x02\x02\u0275\u0274\x03\x02\x02\x02\u0276\u0279\x03\x02\x02" +
		"\x02\u0277\u0275\x03\x02\x02\x02\u0277\u0278\x03\x02\x02\x02\u02785\x03" +
		"\x02\x02\x02\u0279\u0277\x03\x02\x02\x02\u027A\u0285\x058\x1D\x02\u027B" +
		"\u0285\x05r:\x02\u027C\u0285\x05|?\x02\u027D\u0285\x05n8\x02\u027E\u0285" +
		"\x05b2\x02\u027F\u0285\x05d3\x02\u0280\u0285\x05h5\x02\u0281\u0285\x05" +
		"f4\x02\u0282\u0285\x05\x94K\x02\u0283\u0285\x05\x9EP\x02\u0284\u027A\x03" +
		"\x02\x02\x02\u0284\u027B\x03\x02\x02\x02\u0284\u027C\x03\x02\x02\x02\u0284" +
		"\u027D\x03\x02\x02\x02\u0284\u027E\x03\x02\x02\x02\u0284\u027F\x03\x02" +
		"\x02\x02\u0284\u0280\x03\x02\x02\x02\u0284\u0281\x03\x02\x02\x02\u0284" +
		"\u0282\x03\x02\x02\x02\u0284\u0283\x03\x02\x02\x02\u0285\u0289\x03\x02" +
		"\x02\x02\u0286\u0288\x075\x02\x02\u0287\u0286\x03\x02\x02\x02\u0288\u028B" +
		"\x03\x02\x02\x02\u0289\u0287\x03\x02\x02\x02\u0289\u028A\x03\x02\x02\x02" +
		"\u028A7\x03\x02\x02\x02\u028B\u0289\x03\x02\x02\x02\u028C\u028F\x07\xA0" +
		"\x02\x02\u028D\u028F\x05\xB6\\\x02\u028E\u028C\x03\x02\x02\x02\u028E\u028D" +
		"\x03\x02\x02\x02\u028F\u0290\x03\x02\x02\x02\u0290\u028E\x03\x02\x02\x02" +
		"\u0290\u0291\x03\x02\x02\x02\u02919\x03\x02\x02\x02\u0292\u029A\x05<\x1F" +
		"\x02\u0293\u0299\x05<\x1F\x02\u0294\u0299\x05\x9CO\x02\u0295\u0299\x05" +
		"\x9EP\x02\u0296\u0299\x05\x8AF\x02\u0297\u0299\x05\x90I\x02\u0298\u0293" +
		"\x03\x02\x02\x02\u0298\u0294\x03\x02\x02\x02\u0298\u0295\x03\x02\x02\x02" +
		"\u0298\u0296\x03\x02\x02\x02\u0298\u0297\x03\x02\x02\x02\u0299\u029C\x03" +
		"\x02\x02\x02\u029A\u0298\x03\x02\x02\x02\u029A\u029B\x03\x02\x02\x02\u029B" +
		";\x03\x02\x02\x02\u029C\u029A\x03\x02\x02\x02\u029D\u02A1\x07\r\x02\x02" +
		"\u029E\u02A2\x073\x02\x02\u029F\u02A2\x074\x02\x02\u02A0\u02A2\x03\x02" +
		"\x02\x02\u02A1\u029E\x03\x02\x02\x02\u02A1\u029F\x03\x02\x02\x02\u02A1" +
		"\u02A0\x03\x02\x02\x02\u02A2\u02A6\x03\x02\x02\x02\u02A3\u02A5\x05\xB6" +
		"\\\x02\u02A4\u02A3\x03\x02\x02\x02\u02A5\u02A8\x03\x02\x02\x02\u02A6\u02A4" +
		"\x03\x02\x02\x02\u02A6\u02A7\x03\x02\x02\x02\u02A7\u02A9\x03\x02\x02\x02" +
		"\u02A8\u02A6\x03\x02\x02\x02\u02A9\u02AA\x05\xB8]\x02\u02AA=\x03\x02\x02" +
		"\x02\u02AB\u02AC\x07J\x02\x02\u02AC\u02AD\x073\x02\x02\u02AD\u02AE\x07" +
		"\x1B\x02\x02\u02AE?\x03\x02\x02\x02\u02AF\u02B1\x05B\"\x02\u02B0\u02AF" +
		"\x03\x02\x02\x02\u02B1\u02B4\x03\x02\x02\x02\u02B2\u02B0\x03\x02\x02\x02" +
		"\u02B2\u02B3\x03\x02\x02\x02\u02B3\u02BA\x03\x02\x02\x02\u02B4\u02B2\x03" +
		"\x02\x02\x02\u02B5\u02B9\x07\x8C\x02\x02\u02B6\u02B9\x07\x8D\x02\x02\u02B7" +
		"\u02B9\x05D#\x02\u02B8\u02B5\x03\x02\x02\x02\u02B8\u02B6\x03\x02\x02\x02" +
		"\u02B8\u02B7\x03\x02\x02\x02\u02B9\u02BC\x03\x02\x02\x02\u02BA\u02B8\x03" +
		"\x02\x02\x02\u02BA\u02BB\x03\x02\x02\x02\u02BBA\x03\x02\x02\x02\u02BC" +
		"\u02BA\x03\x02\x02\x02\u02BD\u02BE\t\x04\x02\x02\u02BEC\x03\x02\x02\x02" +
		"\u02BF\u02C9\x05H%\x02\u02C0\u02C9\x05\x80A\x02\u02C1\u02C9\x05J&\x02" +
		"\u02C2\u02C9\x05L\'\x02\u02C3\u02C9\x05N(\x02\u02C4\u02C9\x05P)\x02\u02C5" +
		"\u02C9\x05R*\x02\u02C6\u02C9\x05T+\x02\u02C7\u02C9\x07b\x02\x02\u02C8" +
		"\u02BF\x03\x02\x02\x02\u02C8\u02C0\x03\x02\x02\x02\u02C8\u02C1\x03\x02" +
		"\x02\x02\u02C8\u02C2\x03\x02\x02\x02\u02C8\u02C3\x03\x02\x02\x02\u02C8" +
		"\u02C4\x03\x02\x02\x02\u02C8\u02C5\x03\x02\x02\x02\u02C8\u02C6\x03\x02" +
		"\x02\x02\u02C8\u02C7\x03\x02\x02\x02\u02C9E\x03\x02\x02\x02\u02CA\u02D1" +
		"\x07\x8A\x02\x02\u02CB\u02D1\x07\x8B\x02\x02\u02CC\u02D1\x07\x8C\x02\x02" +
		"\u02CD\u02D1\x07\x8F\x02\x02\u02CE\u02D1\x07\x8D\x02\x02\u02CF\u02D1\x03" +
		"\x02\x02\x02\u02D0\u02CA\x03\x02\x02\x02\u02D0\u02CB\x03\x02\x02\x02\u02D0" +
		"\u02CC\x03\x02\x02\x02\u02D0\u02CD\x03\x02\x02\x02\u02D0\u02CE\x03\x02" +
		"\x02\x02\u02D0\u02CF\x03\x02\x02\x02\u02D1G\x03\x02\x02\x02\u02D2\u02D5" +
		"\x07Z\x02\x02\u02D3\u02D6\x07.\x02\x02\u02D4\u02D6\x07\x9D\x02\x02\u02D5" +
		"\u02D3\x03\x02\x02\x02\u02D5\u02D4\x03\x02\x02\x02\u02D5\u02D6\x03\x02" +
		"\x02\x02\u02D6\u02E0\x03\x02\x02\x02\u02D7\u02D9\x07o\x02\x02\u02D8\u02DA" +
		"\x07.\x02\x02\u02D9\u02D8\x03\x02\x02\x02\u02D9\u02DA\x03\x02\x02\x02" +
		"\u02DA\u02E0\x03\x02\x02\x02\u02DB\u02DD\x07[\x02\x02\u02DC\u02DE\x07" +
		".\x02\x02\u02DD\u02DC\x03\x02\x02\x02\u02DD\u02DE\x03\x02\x02\x02\u02DE" +
		"\u02E0\x03\x02\x02\x02\u02DF\u02D2\x03\x02\x02\x02\u02DF\u02D7\x03\x02" +
		"\x02\x02\u02DF\u02DB\x03\x02\x02\x02\u02E0I\x03\x02\x02\x02\u02E1\u02E4" +
		"\t\x05\x02\x02\u02E2\u02E3\x07\x1C\x02\x02\u02E3\u02E5\x070\x02\x02\u02E4" +
		"\u02E2\x03\x02\x02\x02\u02E4\u02E5\x03\x02\x02\x02\u02E5K\x03\x02\x02" +
		"\x02\u02E6\u02E7\t\x06\x02\x02\u02E7M\x03\x02\x02\x02\u02E8\u02E9\t\x07" +
		"\x02\x02\u02E9O\x03\x02\x02\x02\u02EA\u02EB\t\b\x02\x02\u02EBQ\x03\x02" +
		"\x02\x02\u02EC\u02ED\t\t\x02\x02\u02EDS\x03\x02\x02\x02\u02EE\u02EF\t" +
		"\n\x02\x02\u02EFU\x03\x02\x02\x02\u02F0\u02F1\t\v\x02\x02\u02F1W\x03\x02" +
		"\x02\x02\u02F2\u02F3\t\f\x02\x02\u02F3Y\x03\x02\x02\x02\u02F4\u02F5\t" +
		"\r\x02\x02\u02F5[\x03\x02\x02\x02\u02F6\u02F7\t\x0E\x02\x02\u02F7]\x03" +
		"\x02\x02\x02\u02F8\u02FB\x07f\x02\x02\u02F9\u02FA\x07\x1C\x02\x02\u02FA" +
		"\u02FC\x070\x02\x02\u02FB\u02F9\x03\x02\x02\x02\u02FB\u02FC\x03\x02\x02" +
		"\x02\u02FC\u0308\x03\x02\x02\x02\u02FD\u0300\x07y\x02\x02\u02FE\u02FF" +
		"\x07\x1C\x02\x02\u02FF\u0301\x070\x02\x02\u0300\u02FE\x03\x02\x02\x02" +
		"\u0300\u0301\x03\x02\x02\x02\u0301\u0308\x03\x02\x02\x02\u0302\u0305\x07" +
		"\x86\x02\x02\u0303\u0304\x07\x1C\x02\x02\u0304\u0306\x070\x02\x02\u0305" +
		"\u0303\x03\x02\x02\x02\u0305\u0306\x03\x02\x02\x02\u0306\u0308\x03\x02" +
		"\x02\x02\u0307\u02F8\x03\x02\x02\x02\u0307\u02FD\x03\x02\x02\x02\u0307" +
		"\u0302\x03\x02\x02\x02\u0308_\x03\x02\x02\x02\u0309\u030A\t\x0F\x02\x02" +
		"\u030Aa\x03\x02\x02\x02\u030B\u030C\x05V,\x02\u030C\u030D\x07\x1C\x02" +
		"\x02\u030D\u030E\x05\x88E\x02\u030E\u030F\x07\x1B\x02\x02\u030F\u0312" +
		"\x03\x02\x02\x02\u0310\u0312\x071\x02\x02\u0311\u030B\x03\x02\x02\x02" +
		"\u0311\u0310\x03\x02\x02\x02\u0312c\x03\x02\x02\x02\u0313\u0314\x05X-" +
		"\x02\u0314\u0315\x07\x1C\x02\x02\u0315\u0316\x05\x88E\x02\u0316\u031B" +
		"\x07\x1B\x02\x02\u0317\u0318\x07M\x02\x02\u0318\u0319\x05\xBC_\x02\u0319" +
		"\u031A\x07\x1B\x02\x02\u031A\u031C\x03\x02\x02\x02\u031B\u0317\x03\x02" +
		"\x02\x02\u031B\u031C\x03\x02\x02\x02\u031Ce\x03\x02\x02\x02\u031D\u031E" +
		"\x05\\/\x02\u031E\u031F\x07\x1C\x02\x02\u031F\u0320\x05\x88E\x02\u0320" +
		"\u0325\x07\x1B\x02\x02\u0321\u0322\x07M\x02\x02\u0322\u0323\x05\xBC_\x02" +
		"\u0323\u0324\x07\x1B\x02\x02\u0324\u0326\x03\x02\x02\x02\u0325\u0321\x03" +
		"\x02\x02\x02\u0325\u0326\x03\x02\x02\x02\u0326g\x03\x02\x02\x02\u0327" +
		"\u0328\x05Z.\x02\u0328\u032B\x07\x1C\x02\x02\u0329\u032C\x05\x88E\x02" +
		"\u032A\u032C\x05\x86D\x02\u032B\u0329\x03\x02\x02\x02\u032B\u032A\x03" +
		"\x02\x02\x02\u032C\u032D\x03\x02\x02\x02\u032D\u0332\x07\x1B\x02\x02\u032E" +
		"\u032F\x07M\x02\x02\u032F\u0330\x05\xBC_\x02\u0330\u0331\x07\x1B\x02\x02" +
		"\u0331\u0333\x03\x02\x02\x02\u0332\u032E\x03\x02\x02\x02\u0332\u0333\x03" +
		"\x02\x02\x02\u0333i\x03\x02\x02\x02\u0334\u0338\x05l7\x02\u0335\u0337" +
		"\x05\x84C\x02\u0336\u0335\x03\x02\x02\x02\u0337\u033A\x03\x02\x02\x02" +
		"\u0338\u0336\x03\x02\x02\x02\u0338\u0339\x03\x02\x02\x02\u0339k\x03\x02" +
		"\x02\x02\u033A\u0338\x03\x02\x02\x02\u033B\u033C\x05`1\x02\u033C\u0340" +
		"\x07\x1C\x02\x02\u033D\u033F\x07\x04\x02\x02\u033E\u033D\x03\x02\x02\x02" +
		"\u033F\u0342\x03\x02\x02\x02\u0340\u033E\x03\x02\x02\x02\u0340\u0341\x03" +
		"\x02\x02\x02\u0341\u0343\x03\x02\x02\x02\u0342\u0340\x03\x02\x02\x02\u0343" +
		"\u0344\x05\x88E\x02\u0344\u0345\x07\x1B\x02\x02\u0345m\x03\x02\x02\x02" +
		"\u0346\u034A\x05p9\x02\u0347\u0349\x05\x84C\x02\u0348\u0347\x03\x02\x02" +
		"\x02\u0349\u034C\x03\x02\x02\x02\u034A\u0348\x03\x02\x02\x02\u034A\u034B" +
		"\x03\x02\x02\x02\u034Bo\x03\x02\x02\x02\u034C\u034A\x03\x02\x02\x02\u034D" +
		"\u034E\x05^0\x02\u034E\u034F\x07\x1C\x02\x02\u034F\u0350\x05\x88E\x02" +
		"\u0350\u0355\x07\x1B\x02\x02\u0351\u0352\x07M\x02\x02\u0352\u0353\x05" +
		"\xBC_\x02\u0353\u0354\x07\x1B\x02\x02\u0354\u0356\x03\x02\x02\x02\u0355" +
		"\u0351\x03\x02\x02\x02\u0355\u0356\x03\x02\x02\x02\u0356q\x03\x02\x02" +
		"\x02\u0357\u035B\x05t;\x02\u0358\u035A\x05x=\x02\u0359\u0358\x03\x02\x02" +
		"\x02\u035A\u035D\x03\x02\x02\x02\u035B\u0359\x03\x02\x02\x02\u035B\u035C" +
		"\x03\x02\x02\x02\u035C\u0360\x03\x02\x02\x02\u035D\u035B\x03\x02\x02\x02" +
		"\u035E\u035F\x075\x02\x02\u035F\u0361\x07O\x02\x02\u0360\u035E\x03\x02" +
		"\x02\x02\u0360\u0361\x03\x02\x02\x02\u0361s\x03\x02\x02\x02\u0362\u0363" +
		"\x05v<\x02\u0363\u0367\x07\x1C\x02\x02\u0364\u0366\x07\x04\x02\x02\u0365" +
		"\u0364\x03\x02\x02\x02\u0366\u0369\x03\x02\x02\x02\u0367\u0365\x03\x02" +
		"\x02\x02\u0367\u0368\x03\x02\x02\x02\u0368\u036A\x03\x02\x02\x02\u0369" +
		"\u0367\x03\x02\x02\x02\u036A\u036B\x05\x88E\x02\u036B\u036C\x07\x1B\x02" +
		"\x02\u036Cu\x03\x02\x02\x02\u036D\u0370\x07d\x02\x02\u036E\u0371\x07." +
		"\x02\x02\u036F\u0371\x07\x9D\x02\x02\u0370\u036E\x03\x02\x02\x02\u0370" +
		"\u036F\x03\x02\x02\x02\u0370\u0371\x03\x02\x02\x02\u0371\u037B\x03\x02" +
		"\x02\x02\u0372\u0374\x07x\x02\x02\u0373\u0375\x07.\x02\x02\u0374\u0373" +
		"\x03\x02\x02\x02\u0374\u0375\x03\x02\x02\x02\u0375\u037B\x03\x02\x02\x02" +
		"\u0376\u0378\x07e\x02\x02\u0377\u0379\x07.\x02\x02\u0378\u0377\x03\x02" +
		"\x02\x02\u0378\u0379\x03\x02\x02\x02\u0379\u037B\x03\x02\x02\x02\u037A" +
		"\u036D\x03\x02\x02\x02\u037A\u0372\x03\x02\x02\x02\u037A\u0376\x03\x02" +
		"\x02\x02\u037Bw\x03\x02\x02\x02\u037C\u037D\x07K\x02\x02\u037D\u037E\x07" +
		"\x1C\x02\x02\u037E\u037F\x05\x88E\x02\u037F\u0380\x07\x1B\x02\x02\u0380" +
		"\u038E\x03\x02\x02\x02\u0381\u0382\t\x10\x02\x02\u0382\u0383\x07\x1C\x02" +
		"\x02\u0383\u0384\x073\x02\x02\u0384\u038E\x07\x1B\x02\x02\u0385\u0389" +
		"\t\x11\x02\x02\u0386\u0388\v\x02\x02\x02\u0387\u0386\x03\x02\x02\x02\u0388" +
		"\u038B\x03\x02\x02\x02\u0389\u038A\x03\x02\x02\x02\u0389\u0387\x03\x02" +
		"\x02\x02\u038A\u038C\x03\x02\x02\x02\u038B\u0389\x03\x02\x02\x02\u038C" +
		"\u038E\x07\x1B\x02\x02\u038D\u037C\x03\x02\x02\x02\u038D\u0381\x03\x02" +
		"\x02\x02\u038D\u0385\x03\x02\x02\x02\u038Ey\x03\x02\x02\x02\u038F\u0390" +
		"\x07K\x02\x02\u0390\u0391\x07\x1C\x02\x02\u0391\u0392\x05\x88E\x02\u0392" +
		"\u0393\x07\x1B\x02\x02\u0393\u03A1\x03\x02\x02\x02\u0394\u0395\t\x10\x02" +
		"\x02\u0395\u0396\x07\x1C\x02\x02\u0396\u0397\x073\x02\x02\u0397\u03A1" +
		"\x07\x1B\x02\x02\u0398\u039C\t\x11\x02\x02\u0399\u039B\v\x02\x02\x02\u039A" +
		"\u0399\x03\x02\x02\x02\u039B\u039E\x03\x02\x02\x02\u039C\u039D\x03\x02" +
		"\x02\x02\u039C\u039A\x03\x02\x02\x02\u039D\u039F\x03\x02\x02\x02\u039E" +
		"\u039C\x03\x02\x02\x02\u039F\u03A1\x07\x1B\x02\x02\u03A0\u038F\x03\x02" +
		"\x02\x02\u03A0\u0394\x03\x02\x02\x02\u03A0\u0398\x03\x02\x02\x02\u03A1" +
		"{\x03\x02\x02\x02\u03A2\u03A6\x05~@\x02\u03A3\u03A5\x05\x84C\x02\u03A4" +
		"\u03A3\x03\x02\x02\x02\u03A5\u03A8\x03\x02\x02\x02\u03A6\u03A4\x03\x02" +
		"\x02\x02\u03A6\u03A7\x03\x02\x02\x02\u03A7}\x03\x02\x02\x02\u03A8\u03A6" +
		"\x03\x02\x02\x02\u03A9\u03AA\x05\x82B\x02\u03AA\u03AB\x07\x1C\x02\x02" +
		"\u03AB\u03AC\x05\x88E\x02\u03AC\u03B1\x07\x1B\x02\x02\u03AD\u03AE\x07" +
		"M\x02\x02\u03AE\u03AF\x05\xBC_\x02\u03AF\u03B0\x07\x1B\x02\x02\u03B0\u03B2" +
		"\x03\x02\x02\x02\u03B1\u03AD\x03\x02\x02\x02\u03B1\u03B2\x03\x02\x02\x02" +
		"\u03B2\x7F\x03\x02\x02\x02\u03B3\u03B6\x07Y\x02\x02\u03B4\u03B5\x07\x1C" +
		"\x02\x02\u03B5\u03B7\x07/\x02\x02\u03B6\u03B4\x03\x02\x02\x02\u03B6\u03B7" +
		"\x03\x02\x02\x02\u03B7\u03BE\x03\x02\x02\x02\u03B8\u03BB\x07n\x02\x02" +
		"\u03B9\u03BA\x07\x1C\x02\x02\u03BA\u03BC\x07/\x02\x02\u03BB\u03B9\x03" +
		"\x02\x02\x02\u03BB\u03BC\x03\x02\x02\x02\u03BC\u03BE\x03\x02\x02\x02\u03BD" +
		"\u03B3\x03\x02\x02\x02\u03BD\u03B8\x03\x02\x02\x02\u03BE\x81\x03\x02\x02" +
		"\x02\u03BF\u03C2\x07c\x02\x02\u03C0\u03C1\x07\x1C\x02\x02\u03C1\u03C3" +
		"\x07/\x02\x02\u03C2\u03C0\x03\x02\x02\x02\u03C2\u03C3\x03\x02\x02\x02" +
		"\u03C3\u03CF\x03\x02\x02\x02\u03C4\u03C7\x07w\x02\x02\u03C5\u03C6\x07" +
		"\x1C\x02\x02\u03C6\u03C8\x07/\x02\x02\u03C7\u03C5\x03\x02\x02\x02\u03C7" +
		"\u03C8\x03\x02\x02\x02\u03C8\u03CF\x03\x02\x02\x02\u03C9\u03CC\x07\x87" +
		"\x02\x02\u03CA\u03CB\x07";
	private static readonly _serializedATNSegment2: string =
		"\x1C\x02\x02\u03CB\u03CD\x07/\x02\x02\u03CC\u03CA\x03\x02\x02\x02\u03CC" +
		"\u03CD\x03\x02\x02\x02\u03CD\u03CF\x03\x02\x02\x02\u03CE\u03BF\x03\x02" +
		"\x02\x02\u03CE\u03C4\x03\x02\x02\x02\u03CE\u03C9\x03\x02\x02\x02\u03CF" +
		"\x83\x03\x02\x02\x02\u03D0\u03D1\x07\x10\x02\x02\u03D1\u03D4\x05\xB6\\" +
		"\x02\u03D2\u03D4\x07K\x02\x02\u03D3\u03D0\x03\x02\x02\x02\u03D3\u03D2" +
		"\x03\x02\x02\x02\u03D4\u03D5\x03\x02\x02\x02\u03D5\u03D9\x07\x1C\x02\x02" +
		"\u03D6\u03D8\x07\x04\x02\x02\u03D7\u03D6\x03\x02\x02\x02\u03D8\u03DB\x03" +
		"\x02\x02\x02\u03D9\u03D7\x03\x02\x02\x02\u03D9\u03DA\x03\x02\x02\x02\u03DA" +
		"\u03DE\x03\x02\x02\x02\u03DB\u03D9\x03\x02\x02\x02\u03DC\u03DF\x05\xB6" +
		"\\\x02\u03DD\u03DF\x075\x02\x02\u03DE\u03DC\x03\x02\x02\x02\u03DE\u03DD" +
		"\x03\x02\x02\x02\u03DF\u03E0\x03\x02\x02\x02\u03E0\u03DE\x03\x02\x02\x02" +
		"\u03E0\u03E1\x03\x02\x02\x02\u03E1\u03E2\x03\x02\x02\x02\u03E2\u03F0\x07" +
		"\x1B\x02\x02\u03E3\u03E4\t\x10\x02\x02\u03E4\u03E5\x07\x1C\x02\x02\u03E5" +
		"\u03E6\x073\x02\x02\u03E6\u03F0\x07\x1B\x02\x02\u03E7\u03EB\t\x11\x02" +
		"\x02\u03E8\u03EA\v\x02\x02\x02\u03E9\u03E8\x03\x02\x02\x02\u03EA\u03ED" +
		"\x03\x02\x02\x02\u03EB\u03EC\x03\x02\x02\x02\u03EB\u03E9\x03\x02\x02\x02" +
		"\u03EC\u03EE\x03\x02\x02\x02\u03ED\u03EB\x03\x02\x02\x02\u03EE\u03F0\x07" +
		"\x1B\x02\x02\u03EF\u03D3\x03\x02\x02\x02\u03EF\u03E3\x03\x02\x02\x02\u03EF" +
		"\u03E7\x03\x02\x02\x02\u03F0\x85\x03\x02\x02\x02\u03F1\u03F2\x07\x9C\x02" +
		"\x02\u03F2\u03F3\x07\x1F\x02\x02\u03F3\u03F4\x073\x02\x02\u03F4\x87\x03" +
		"\x02\x02\x02\u03F5\u03F6\x07\x9F\x02\x02\u03F6\x89\x03\x02\x02\x02\u03F7" +
		"\u03FC\x07\x16\x02\x02\u03F8\u03FB\x07\x1C\x02\x02\u03F9\u03FB\x05\xB6" +
		"\\\x02\u03FA\u03F8\x03\x02\x02\x02\u03FA\u03F9\x03\x02\x02\x02\u03FB\u03FE" +
		"\x03\x02\x02\x02\u03FC\u03FA\x03\x02\x02\x02\u03FC\u03FD\x03\x02\x02\x02" +
		"\u03FD\u03FF\x03\x02\x02\x02\u03FE\u03FC\x03\x02\x02\x02\u03FF\u0409\x07" +
		"\x1B\x02\x02\u0400\u0402\x07\x04\x02\x02\u0401\u0400\x03\x02\x02\x02\u0402" +
		"\u0405\x03\x02\x02\x02\u0403\u0401\x03\x02\x02\x02\u0403\u0404\x03\x02" +
		"\x02\x02\u0404\u0406\x03\x02\x02\x02\u0405\u0403\x03\x02\x02\x02\u0406" +
		"\u0408\x05\x8CG\x02\u0407\u0403\x03\x02\x02\x02\u0408\u040B\x03\x02\x02" +
		"\x02\u0409\u0407\x03\x02\x02\x02\u0409\u040A\x03\x02\x02\x02\u040A\u041E" +
		"\x03\x02\x02\x02\u040B\u0409\x03\x02\x02\x02\u040C\u040E\x07\x15\x02\x02" +
		"\u040D\u040F\x05\xB6\\\x02\u040E\u040D\x03\x02\x02\x02\u040E\u040F\x03" +
		"\x02\x02\x02\u040F\u0410\x03\x02\x02\x02\u0410\u041A\x07\x1B\x02\x02\u0411" +
		"\u0413\x07\x04\x02\x02\u0412\u0411\x03\x02\x02\x02\u0413\u0416\x03\x02" +
		"\x02\x02\u0414\u0412\x03\x02\x02\x02\u0414\u0415\x03\x02\x02\x02\u0415" +
		"\u0417\x03\x02\x02\x02\u0416\u0414\x03\x02\x02\x02\u0417\u0419\x05\x8C" +
		"G\x02\u0418\u0414\x03\x02\x02\x02\u0419\u041C\x03\x02\x02\x02\u041A\u0418" +
		"\x03\x02\x02\x02\u041A\u041B\x03\x02\x02\x02\u041B\u041E\x03\x02\x02\x02" +
		"\u041C\u041A\x03\x02\x02\x02\u041D\u03F7\x03\x02\x02\x02\u041D\u040C\x03" +
		"\x02\x02\x02\u041E\x8B\x03\x02\x02\x02\u041F\u0420\x07\x17\x02\x02\u0420" +
		"\u0425\x05\xB6\\\x02\u0421\u0424\x07\x1C\x02\x02\u0422\u0424\x05\xB6\\" +
		"\x02\u0423\u0421\x03\x02\x02\x02\u0423\u0422\x03\x02\x02\x02\u0424\u0427" +
		"\x03\x02\x02\x02\u0425\u0423\x03\x02\x02\x02\u0425\u0426\x03\x02\x02\x02" +
		"\u0426\u0428\x03\x02\x02\x02\u0427\u0425\x03\x02\x02\x02\u0428\u0429\x07" +
		"\x1B\x02\x02\u0429\u044D\x03\x02\x02\x02\u042A\u042B\x07\x18\x02\x02\u042B" +
		"\u0430\x05\xB6\\\x02\u042C\u042F\x07\x1C\x02\x02\u042D\u042F\x05\xB6\\" +
		"\x02\u042E\u042C\x03\x02\x02\x02\u042E\u042D\x03\x02\x02\x02\u042F\u0432" +
		"\x03\x02\x02\x02\u0430\u042E\x03\x02\x02\x02\u0430\u0431\x03\x02\x02\x02" +
		"\u0431\u0433\x03\x02\x02\x02\u0432\u0430\x03\x02\x02\x02\u0433\u0434\x07" +
		"\x1B\x02\x02\u0434\u044D\x03\x02\x02\x02\u0435\u0436\x07\x19\x02\x02\u0436" +
		"\u043B\x05\xB6\\\x02\u0437\u043A\x07\x1C\x02\x02\u0438\u043A\x05\xB6\\" +
		"\x02\u0439\u0437\x03\x02\x02\x02\u0439\u0438\x03\x02\x02\x02\u043A\u043D" +
		"\x03\x02\x02\x02\u043B\u0439\x03\x02\x02\x02\u043B\u043C\x03\x02\x02\x02" +
		"\u043C\u043E\x03\x02\x02\x02\u043D\u043B\x03\x02\x02\x02\u043E\u043F\x07" +
		"\x1B\x02\x02\u043F\u044D\x03\x02\x02\x02\u0440\u0442\x07\x15\x02\x02\u0441" +
		"\u0443\x05\xB6\\\x02\u0442\u0441\x03\x02\x02\x02\u0442\u0443\x03\x02\x02" +
		"\x02\u0443\u0448\x03\x02\x02\x02\u0444\u0447\x07\x1C\x02\x02\u0445\u0447" +
		"\x05\xB6\\\x02\u0446\u0444\x03\x02\x02\x02\u0446\u0445\x03\x02\x02\x02" +
		"\u0447\u044A\x03\x02\x02\x02\u0448\u0446\x03\x02\x02\x02\u0448\u0449\x03" +
		"\x02\x02\x02\u0449\u044B\x03\x02\x02\x02\u044A\u0448\x03\x02\x02\x02\u044B" +
		"\u044D\x07\x1B\x02\x02\u044C\u041F\x03\x02\x02\x02\u044C\u042A\x03\x02" +
		"\x02\x02\u044C\u0435\x03\x02\x02\x02\u044C\u0440\x03\x02\x02\x02\u044D" +
		"\x8D\x03\x02\x02\x02\u044E\u0450\x07\n\x02\x02\u044F\u0451\x05\xB6\\\x02" +
		"\u0450\u044F\x03\x02\x02\x02\u0450\u0451\x03\x02\x02\x02\u0451\u0452\x03" +
		"\x02\x02\x02\u0452\u0459\x07\x1B\x02\x02\u0453\u0455\x07\v\x02\x02\u0454" +
		"\u0456\x05\xB6\\\x02\u0455\u0454\x03\x02\x02\x02\u0455\u0456\x03\x02\x02" +
		"\x02\u0456\u0457\x03\x02\x02\x02\u0457\u0459\x07\x1B\x02\x02\u0458\u044E" +
		"\x03\x02\x02\x02\u0458\u0453\x03\x02\x02\x02\u0459\x8F\x03\x02\x02\x02" +
		"\u045A\u0462\x07D\x02\x02\u045B\u0462\x07B\x02\x02\u045C\u045E\x07C\x02" +
		"\x02\u045D\u045F\x078\x02\x02\u045E\u045D\x03\x02\x02\x02\u045E\u045F" +
		"\x03\x02\x02\x02\u045F\u0460\x03\x02\x02\x02\u0460\u0462\x07\x02\x02\x03" +
		"\u0461\u045A\x03\x02\x02\x02\u0461\u045B\x03\x02\x02\x02\u0461\u045C\x03" +
		"\x02\x02\x02\u0462\x91\x03\x02\x02\x02\u0463\u0465\x07m\x02\x02\u0464" +
		"\u0466\x05\xB6\\\x02\u0465\u0464\x03\x02\x02\x02\u0465\u0466\x03\x02\x02" +
		"\x02\u0466\u047C\x03\x02\x02\x02\u0467\u0471\x05\xB6\\\x02\u0468\u046C" +
		"\x075\x02\x02\u0469\u046B\x07\x04\x02\x02\u046A\u0469\x03\x02\x02\x02" +
		"\u046B\u046E\x03\x02\x02\x02\u046C\u046A\x03\x02\x02\x02\u046C\u046D\x03" +
		"\x02\x02\x02\u046D\u0470\x03\x02\x02\x02\u046E\u046C\x03\x02\x02\x02\u046F" +
		"\u0468\x03\x02\x02\x02\u0470\u0473\x03\x02\x02\x02\u0471\u046F\x03\x02" +
		"\x02\x02\u0471\u0472\x03\x02\x02\x02\u0472\u0477\x03\x02\x02\x02\u0473" +
		"\u0471\x03\x02\x02\x02\u0474\u0476\x075\x02\x02\u0475\u0474\x03\x02\x02" +
		"\x02\u0476\u0479\x03\x02\x02\x02\u0477\u0475\x03\x02\x02\x02\u0477\u0478" +
		"\x03\x02\x02\x02\u0478\u047B\x03\x02\x02\x02\u0479\u0477\x03\x02\x02\x02" +
		"\u047A\u0467\x03\x02\x02\x02\u047B\u047E\x03\x02\x02\x02\u047C\u047A\x03" +
		"\x02\x02\x02\u047C\u047D\x03\x02\x02\x02\u047D\u047F\x03\x02\x02\x02\u047E" +
		"\u047C\x03\x02\x02\x02\u047F\u048B\x07\x1B\x02\x02\u0480\u0486\x07m\x02" +
		"\x02\u0481\u0485\x05\xB6\\\x02\u0482\u0485\x075\x02\x02\u0483\u0485\x07" +
		"\x04\x02\x02\u0484\u0481\x03\x02\x02\x02\u0484\u0482\x03\x02\x02\x02\u0484" +
		"\u0483\x03\x02\x02\x02\u0485\u0488\x03\x02\x02\x02\u0486\u0484\x03\x02" +
		"\x02\x02\u0486\u0487\x03\x02\x02\x02\u0487\u0489\x03\x02\x02\x02\u0488" +
		"\u0486\x03\x02\x02\x02\u0489\u048B\x07\x02\x02\x03\u048A\u0463\x03\x02" +
		"\x02\x02\u048A\u0480\x03\x02\x02\x02\u048B\x93\x03\x02\x02\x02\u048C\u0491" +
		"\x07<\x02\x02\u048D\u0492\x05\xB6\\\x02\u048E\u0492\x07\x1C\x02\x02\u048F" +
		"\u0492\x07\x9F\x02\x02\u0490\u0492\x075\x02\x02\u0491\u048D\x03\x02\x02" +
		"\x02\u0491\u048E\x03\x02\x02\x02\u0491\u048F\x03\x02\x02\x02\u0491\u0490" +
		"\x03\x02\x02\x02\u0492\u0493\x03\x02\x02\x02\u0493\u0491\x03\x02\x02\x02" +
		"\u0493\u0494\x03\x02\x02\x02\u0494\u0495\x03\x02\x02\x02\u0495\u04A3\x07" +
		"\x1B\x02\x02\u0496\u049E\x07<\x02\x02\u0497\u049D\x05\xB6\\\x02\u0498" +
		"\u049D\x07\x1C\x02\x02\u0499\u049D\x07\x9F\x02\x02\u049A\u049D\x075\x02" +
		"\x02\u049B\u049D\x07\x04\x02\x02\u049C\u0497\x03\x02\x02\x02\u049C\u0498" +
		"\x03\x02\x02\x02\u049C\u0499\x03\x02\x02\x02\u049C\u049A\x03\x02\x02\x02" +
		"\u049C\u049B\x03\x02\x02\x02\u049D\u04A0\x03\x02\x02\x02\u049E\u049C\x03" +
		"\x02\x02\x02\u049E\u049F\x03\x02\x02\x02\u049F\u04A1\x03\x02\x02\x02\u04A0" +
		"\u049E\x03\x02\x02\x02\u04A1\u04A3\x07\x02\x02\x03\u04A2\u048C\x03\x02" +
		"\x02\x02\u04A2\u0496\x03\x02\x02\x02\u04A3\x95\x03\x02\x02\x02\u04A4\u04A5" +
		"\x07;\x02\x02\u04A5\u04A6\x05\xB6\\\x02\u04A6\u04A7\x07\x1B\x02\x02\u04A7" +
		"\x97\x03\x02\x02\x02\u04A8\u04AC\x07V\x02\x02\u04A9\u04AD\x05\xB6\\\x02" +
		"\u04AA\u04AD\x07\x1C\x02\x02\u04AB\u04AD\x075\x02\x02\u04AC\u04A9\x03" +
		"\x02\x02\x02\u04AC\u04AA\x03\x02\x02\x02\u04AC\u04AB\x03\x02\x02\x02\u04AD" +
		"\u04AE\x03\x02\x02\x02\u04AE\u04AC\x03\x02\x02\x02\u04AE\u04AF\x03\x02" +
		"\x02\x02\u04AF\u04B0\x03\x02\x02\x02\u04B0\u04B2\x07\x1B\x02\x02\u04B1" +
		"\u04B3\x05\x9AN\x02\u04B2\u04B1\x03\x02\x02\x02\u04B2\u04B3\x03\x02\x02" +
		"\x02\u04B3\x99\x03\x02\x02\x02\u04B4\u04B8\x07V\x02\x02\u04B5\u04B9\x05" +
		"\xB6\\\x02\u04B6\u04B9\x07\x1C\x02\x02\u04B7\u04B9\x075\x02\x02\u04B8" +
		"\u04B5\x03\x02\x02\x02\u04B8\u04B6\x03\x02\x02\x02\u04B8\u04B7\x03\x02" +
		"\x02\x02\u04B9\u04BA\x03\x02\x02\x02\u04BA\u04B8\x03\x02\x02\x02\u04BA" +
		"\u04BB\x03\x02\x02\x02\u04BB\u04BC\x03\x02\x02\x02\u04BC\u04BD\x07\x1B" +
		"\x02\x02\u04BD\x9B\x03\x02\x02\x02\u04BE\u04C2\x07\x0E\x02\x02\u04BF\u04C1" +
		"\x075\x02\x02\u04C0\u04BF\x03\x02\x02\x02\u04C1\u04C4\x03\x02\x02\x02" +
		"\u04C2\u04C0\x03\x02\x02\x02\u04C2\u04C3\x03\x02\x02\x02\u04C3\u04C6\x03" +
		"\x02\x02\x02\u04C4\u04C2\x03\x02\x02\x02\u04C5\u04C7\x05\xB6\\\x02\u04C6" +
		"\u04C5\x03\x02\x02\x02\u04C6\u04C7\x03\x02\x02\x02\u04C7\u04D7\x03\x02" +
		"\x02\x02\u04C8\u04CC\x075\x02\x02\u04C9\u04CB\x07\x04\x02\x02\u04CA\u04C9" +
		"\x03\x02\x02\x02\u04CB\u04CE\x03\x02\x02\x02\u04CC\u04CA\x03\x02\x02\x02" +
		"\u04CC\u04CD\x03\x02\x02\x02\u04CD\u04D0\x03\x02\x02\x02\u04CE\u04CC\x03" +
		"\x02\x02\x02\u04CF\u04C8\x03\x02\x02\x02\u04D0\u04D3\x03\x02\x02\x02\u04D1" +
		"\u04CF\x03\x02\x02\x02\u04D1\u04D2\x03\x02\x02\x02\u04D2\u04D4\x03\x02" +
		"\x02\x02\u04D3\u04D1\x03\x02\x02\x02\u04D4\u04D6\x05\xB6\\\x02\u04D5\u04D1" +
		"\x03\x02\x02\x02\u04D6\u04D9\x03\x02\x02\x02\u04D7\u04D5\x03\x02\x02\x02" +
		"\u04D7\u04D8\x03\x02\x02\x02\u04D8\u04DD\x03\x02\x02\x02\u04D9\u04D7\x03" +
		"\x02\x02\x02\u04DA\u04DC\x075\x02\x02\u04DB\u04DA\x03\x02\x02\x02\u04DC" +
		"\u04DF\x03\x02\x02\x02\u04DD\u04DB\x03\x02\x02\x02\u04DD\u04DE\x03\x02" +
		"\x02\x02\u04DE\u04E0\x03\x02\x02\x02\u04DF\u04DD\x03\x02\x02\x02\u04E0" +
		"\u04ED\x07\x1B\x02\x02\u04E1\u04E5\x07\x0E\x02\x02\u04E2\u04E4\x075\x02" +
		"\x02\u04E3\u04E2\x03\x02\x02\x02\u04E4\u04E7\x03\x02\x02\x02\u04E5\u04E3" +
		"\x03\x02\x02\x02\u04E5\u04E6\x03\x02\x02\x02\u04E6\u04E9\x03\x02\x02\x02" +
		"\u04E7\u04E5\x03\x02\x02\x02\u04E8\u04EA\x05\xB6\\\x02\u04E9\u04E8\x03" +
		"\x02\x02\x02\u04E9\u04EA\x03\x02\x02\x02\u04EA\u04EB\x03\x02\x02\x02\u04EB" +
		"\u04ED\x07\x02\x02\x03\u04EC\u04BE\x03\x02\x02\x02\u04EC\u04E1\x03\x02" +
		"\x02\x02\u04ED\x9D\x03\x02\x02\x02\u04EE\u04F0\x07\x0F\x02\x02\u04EF\u04F1" +
		"\n\x12\x02\x02\u04F0\u04EF\x03\x02\x02\x02\u04F1\u04F2\x03\x02\x02\x02" +
		"\u04F2\u04F0\x03\x02\x02\x02\u04F2\u04F3\x03\x02\x02\x02\u04F3\u04F4\x03" +
		"\x02\x02\x02\u04F4\u04F5\x07\x1B\x02\x02\u04F5\x9F\x03\x02\x02\x02\u04F6" +
		"\u04F9\x07\x1A\x02\x02\u04F7\u04FA\x05\xB6\\\x02\u04F8\u04FA\x075\x02" +
		"\x02\u04F9\u04F7\x03\x02\x02\x02\u04F9\u04F8\x03\x02\x02\x02\u04FA\u04FB" +
		"\x03\x02\x02\x02\u04FB\u04F9\x03\x02\x02\x02\u04FB\u04FC\x03\x02\x02\x02" +
		"\u04FC\u04FD\x03\x02\x02\x02\u04FD\u0503\x07\x1B\x02\x02\u04FE\u04FF\x07" +
		"\x1A\x02\x02\u04FF\u0500\x05\xB6\\\x02\u0500\u0501\x07\x02\x02\x03\u0501" +
		"\u0503\x03\x02\x02\x02\u0502\u04F6\x03\x02\x02\x02\u0502\u04FE\x03\x02" +
		"\x02\x02\u0503\xA1\x03\x02\x02\x02\u0504\u0505\x07H\x02\x02\u0505\u0506" +
		"\x05\xB6\\\x02\u0506\u0507\x07\x1B\x02\x02\u0507\u050D\x03\x02\x02\x02" +
		"\u0508\u0509\x07I\x02\x02\u0509\u050A\x05\xB6\\\x02\u050A\u050B\x07\x1B" +
		"\x02\x02\u050B\u050D\x03\x02\x02\x02\u050C\u0504\x03\x02\x02\x02\u050C" +
		"\u0508\x03\x02\x02\x02\u050D\xA3\x03\x02\x02\x02\u050E\u050F\x07?\x02" +
		"\x02\u050F\u0510\x07\x1C\x02\x02\u0510\u0511\x073\x02\x02\u0511\u0518" +
		"\x07\x1B\x02\x02\u0512\u0513\x07?\x02\x02\u0513\u0514\x07\x1C\x02\x02" +
		"\u0514\u0515\x05\xB6\\\x02\u0515\u0516\x07\x1B\x02\x02\u0516\u0518\x03" +
		"\x02\x02\x02\u0517\u050E\x03\x02\x02\x02\u0517\u0512\x03\x02\x02\x02\u0518" +
		"\xA5\x03\x02\x02\x02\u0519\u051A\x07T\x02\x02\u051A\u051B\x05\xB6\\\x02" +
		"\u051B\u051C\x07\x1B\x02\x02\u051C\xA7\x03\x02\x02\x02\u051D\u051E\x07" +
		"U\x02\x02\u051E\u051F\x05\xB6\\\x02\u051F\u0520\x07\x1B\x02\x02\u0520" +
		"\xA9\x03\x02\x02\x02\u0521\u052B\x05\xACW\x02\u0522\u0524\x075\x02\x02" +
		"\u0523\u0522\x03\x02\x02\x02\u0524\u0527\x03\x02\x02\x02\u0525\u0523\x03" +
		"\x02\x02\x02\u0525\u0526\x03\x02\x02\x02\u0526\u0528\x03\x02\x02\x02\u0527" +
		"\u0525\x03\x02\x02\x02\u0528\u052A\x05\xACW\x02\u0529\u0525\x03\x02\x02" +
		"\x02\u052A\u052D\x03\x02\x02\x02\u052B\u0529\x03\x02\x02\x02\u052B\u052C" +
		"\x03\x02\x02\x02\u052C\xAB\x03\x02\x02\x02\u052D\u052B\x03\x02\x02\x02" +
		"\u052E\u052F\x07\x10\x02\x02\u052F\u0530\x05\xB6\\\x02\u0530\u0531\t\x13" +
		"\x02\x02\u0531\u0537\x05\xB6\\\x02\u0532\u0536\x075\x02\x02\u0533\u0536" +
		"\x07\x1C\x02\x02\u0534\u0536\x05\xB6\\\x02\u0535\u0532\x03\x02\x02\x02" +
		"\u0535\u0533\x03\x02\x02\x02\u0535\u0534\x03\x02\x02\x02\u0536\u0539\x03" +
		"\x02\x02\x02\u0537\u0535\x03\x02\x02\x02\u0537\u0538\x03\x02\x02\x02\u0538" +
		"\u053A\x03\x02\x02\x02\u0539\u0537\x03\x02\x02\x02\u053A\u053B\x07\x1B" +
		"\x02\x02\u053B\u0546\x03\x02\x02\x02\u053C\u0540\x07R\x02\x02\u053D\u053F" +
		"\v\x02\x02\x02\u053E\u053D\x03\x02\x02\x02\u053F\u0542\x03\x02\x02\x02" +
		"\u0540\u0541\x03\x02\x02\x02\u0540\u053E\x03\x02\x02\x02\u0541\u0543\x03" +
		"\x02\x02\x02\u0542\u0540\x03\x02\x02\x02\u0543\u0546\x07\x1B\x02\x02\u0544" +
		"\u0546\x07E\x02\x02\u0545\u052E\x03\x02\x02\x02\u0545\u053C\x03\x02\x02" +
		"\x02\u0545\u0544\x03\x02\x02\x02\u0546\xAD\x03\x02\x02\x02\u0547\u054B" +
		"\x07\x07\x02\x02\u0548\u054C\x05\xB6\\\x02\u0549\u054C\x07\x1C\x02\x02" +
		"\u054A\u054C\x075\x02\x02\u054B\u0548\x03\x02\x02\x02\u054B\u0549\x03" +
		"\x02\x02\x02\u054B\u054A\x03\x02\x02\x02\u054C\u054D\x03\x02\x02\x02\u054D" +
		"\u054B\x03\x02\x02\x02\u054D\u054E\x03\x02\x02\x02\u054E\u054F\x03\x02" +
		"\x02\x02\u054F\u055B\x07\x1B\x02\x02\u0550\u0556\x07\x07\x02\x02\u0551" +
		"\u0555\x05\xB6\\\x02\u0552\u0555\x07\x1C\x02\x02\u0553\u0555\x075\x02" +
		"\x02\u0554\u0551\x03\x02\x02\x02\u0554\u0552\x03\x02\x02\x02\u0554\u0553" +
		"\x03\x02\x02\x02\u0555\u0558\x03\x02\x02\x02\u0556\u0554\x03\x02\x02\x02" +
		"\u0556\u0557\x03\x02\x02\x02\u0557\u0559\x03\x02\x02\x02\u0558\u0556\x03" +
		"\x02\x02\x02\u0559\u055B\x07\x02\x02\x03\u055A\u0547\x03\x02\x02\x02\u055A" +
		"\u0550\x03\x02\x02\x02\u055B\xAF\x03\x02\x02\x02\u055C\u055E\x07\f\x02" +
		"\x02\u055D\u055F\x05\xB6\\\x02\u055E\u055D\x03\x02\x02\x02\u055E\u055F" +
		"\x03\x02\x02\x02\u055F\u0560\x03\x02\x02\x02\u0560\u0561\x07\x1B\x02\x02" +
		"\u0561\xB1\x03\x02\x02\x02\u0562\u0563\x07\x1E\x02\x02\u0563\xB3\x03\x02" +
		"\x02\x02\u0564\u0566\x05\xB6\\\x02\u0565\u0567\x075\x02\x02\u0566\u0565" +
		"\x03\x02\x02\x02\u0566\u0567\x03\x02\x02\x02\u0567\u0569\x03\x02\x02\x02" +
		"\u0568\u0564\x03\x02\x02\x02\u0569\u056A\x03\x02\x02\x02\u056A\u0568\x03" +
		"\x02\x02\x02\u056A\u056B\x03\x02\x02\x02\u056B\xB5\x03\x02\x02\x02\u056C" +
		"\u0573\x074\x02\x02\u056D\u056F\x07\x04\x02\x02\u056E\u056D\x03\x02\x02" +
		"\x02\u056F\u0570\x03\x02\x02\x02\u0570\u056E\x03\x02\x02\x02\u0570\u0571" +
		"\x03\x02\x02\x02\u0571\u0572\x03\x02\x02\x02\u0572\u0574\x073\x02\x02" +
		"\u0573\u056E\x03\x02\x02\x02\u0573\u0574\x03\x02\x02\x02\u0574\u059C\x03" +
		"\x02\x02\x02\u0575\u057C\x05\xBC_\x02\u0576\u0578\x07\x04\x02\x02\u0577" +
		"\u0576\x03\x02\x02\x02\u0578\u0579\x03\x02\x02\x02\u0579\u0577\x03\x02" +
		"\x02\x02\u0579\u057A\x03\x02\x02\x02\u057A\u057B\x03\x02\x02\x02\u057B" +
		"\u057D\x073\x02\x02\u057C\u0577\x03\x02\x02\x02\u057C\u057D\x03\x02\x02" +
		"\x02\u057D\u059C\x03\x02\x02\x02\u057E\u059C\x073\x02\x02\u057F\u0580" +
		"\x07\x13\x02\x02\u0580\u0581\x05\xB6\\\x02\u0581\u0582\x07\x1B\x02\x02" +
		"\u0582\u059C\x03\x02\x02\x02\u0583\u059C\x075\x02\x02\u0584\u0586\x07" +
		"\x04\x02\x02\u0585\u0584\x03\x02\x02\x02\u0586\u0589\x03\x02\x02\x02\u0587" +
		"\u0585\x03\x02\x02\x02\u0587\u0588\x03\x02\x02\x02\u0588\u058A\x03\x02" +
		"\x02\x02\u0589\u0587\x03\x02\x02\x02\u058A\u058E\x07\x1C\x02\x02\u058B" +
		"\u058D\x07\x04\x02\x02\u058C\u058B\x03\x02\x02\x02\u058D\u0590\x03\x02" +
		"\x02\x02\u058E\u058C\x03\x02\x02\x02\u058E\u058F\x03\x02\x02\x02\u058F" +
		"\u059C\x03\x02\x02\x02\u0590\u058E\x03\x02\x02\x02\u0591\u0595\x07\x1D" +
		"\x02\x02\u0592\u0594\x07\x04\x02\x02\u0593\u0592\x03\x02\x02\x02\u0594" +
		"\u0597\x03\x02\x02\x02\u0595\u0593\x03\x02\x02\x02\u0595\u0596\x03\x02" +
		"\x02\x02\u0596\u059C\x03\x02\x02\x02\u0597\u0595\x03\x02\x02\x02\u0598" +
		"\u059C\x07\x1E\x02\x02\u0599\u059C\x07%\x02\x02\u059A\u059C\x07\x9F\x02" +
		"\x02\u059B\u056C\x03\x02\x02\x02\u059B\u0575\x03\x02\x02\x02\u059B\u057E" +
		"\x03\x02\x02\x02\u059B\u057F\x03\x02\x02\x02\u059B\u0583\x03\x02\x02\x02" +
		"\u059B\u0587\x03\x02\x02\x02\u059B\u0591\x03\x02\x02\x02\u059B\u0598\x03" +
		"\x02\x02\x02\u059B\u0599\x03\x02\x02\x02\u059B\u059A\x03\x02\x02\x02\u059C" +
		"\xB7\x03\x02\x02\x02\u059D\u059E\x07\x1B\x02\x02\u059E\xB9\x03\x02\x02" +
		"\x02\u059F\u05A0\t\x14\x02\x02\u05A0\xBB\x03\x02\x02\x02\u05A1\u05AE\x07" +
		"4\x02\x02\u05A2\u05AE\x078\x02\x02\u05A3\u05AE\x076\x02\x02\u05A4\u05AE" +
		"\x077\x02\x02\u05A5\u05AE\x079\x02\x02\u05A6\u05AE\x07\x1D\x02\x02\u05A7" +
		"\u05A8\x07!\x02\x02\u05A8\u05AE\n\x15\x02\x02\u05A9\u05AA\x07\"\x02\x02" +
		"\u05AA\u05AE\n\x16\x02\x02\u05AB\u05AE\x07$\x02\x02\u05AC\u05AE\x07#\x02" +
		"\x02\u05AD\u05A1\x03\x02\x02\x02\u05AD\u05A2\x03\x02\x02\x02\u05AD\u05A3" +
		"\x03\x02\x02\x02\u05AD\u05A4\x03\x02\x02\x02\u05AD\u05A5\x03\x02\x02\x02" +
		"\u05AD\u05A6\x03\x02\x02\x02\u05AD\u05A7\x03\x02\x02\x02\u05AD\u05A9\x03" +
		"\x02\x02\x02\u05AD\u05AB\x03\x02\x02\x02\u05AD\u05AC\x03\x02\x02\x02\u05AE" +
		"\u05AF\x03\x02\x02\x02\u05AF\u05AD\x03\x02\x02\x02\u05AF\u05B0\x03\x02" +
		"\x02\x02\u05B0\xBD\x03\x02\x02\x02\u05B1\u05B2\x07\x04\x02\x02\u05B2\xBF" +
		"\x03\x02\x02\x02\xD6\xC4\xCA\xCF\xD4\xDD\xE5\xEC\xF1\xFA\u0101\u0106\u010D" +
		"\u0114\u0117\u011B\u0121\u0125\u0127\u012F\u0136\u013B\u0144\u014B\u0150" +
		"\u0158\u015D\u0164\u0168\u016A\u016E\u0179\u017E\u0182\u0188\u0196\u0198" +
		"\u019D\u01A2\u01AB\u01AD\u01B0\u01BD\u01BF\u01C3\u01C8\u01D1\u01D3\u01D6" +
		"\u01D8\u01DD\u01E1\u01E5\u01EA\u01EF\u01F2\u01F6\u01FA\u0208\u0210\u0213" +
		"\u0218\u021E\u0220\u0225\u0229\u022F\u0237\u023F\u0245\u0249\u024B\u0265" +
		"\u026A\u0271\u0277\u0284\u0289\u028E\u0290\u0298\u029A\u02A1\u02A6\u02B2" +
		"\u02B8\u02BA\u02C8\u02D0\u02D5\u02D9\u02DD\u02DF\u02E4\u02FB\u0300\u0305" +
		"\u0307\u0311\u031B\u0325\u032B\u0332\u0338\u0340\u034A\u0355\u035B\u0360" +
		"\u0367\u0370\u0374\u0378\u037A\u0389\u038D\u039C\u03A0\u03A6\u03B1\u03B6" +
		"\u03BB\u03BD\u03C2\u03C7\u03CC\u03CE\u03D3\u03D9\u03DE\u03E0\u03EB\u03EF" +
		"\u03FA\u03FC\u0403\u0409\u040E\u0414\u041A\u041D\u0423\u0425\u042E\u0430" +
		"\u0439\u043B\u0442\u0446\u0448\u044C\u0450\u0455\u0458\u045E\u0461\u0465" +
		"\u046C\u0471\u0477\u047C\u0484\u0486\u048A\u0491\u0493\u049C\u049E\u04A2" +
		"\u04AC\u04AE\u04B2\u04B8\u04BA\u04C2\u04C6\u04CC\u04D1\u04D7\u04DD\u04E5" +
		"\u04E9\u04EC\u04F2\u04F9\u04FB\u0502\u050C\u0517\u0525\u052B\u0535\u0537" +
		"\u0540\u0545\u054B\u054D\u0554\u0556\u055A\u055E\u0566\u056A\u0570\u0573" +
		"\u0579\u057C\u0587\u058E\u0595\u059B\u05AD\u05AF";
	public static readonly _serializedATN: string = Utils.join(
		[
			interviewParser._serializedATNSegment0,
			interviewParser._serializedATNSegment1,
			interviewParser._serializedATNSegment2,
		],
		"",
	);
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!interviewParser.__ATN) {
			interviewParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(interviewParser._serializedATN));
		}

		return interviewParser.__ATN;
	}

}

export class BitmarkContext extends ParserRuleContext {
	public EOF(): TerminalNode { return this.getToken(interviewParser.EOF, 0); }
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
			return this.getTokens(interviewParser.NL);
		} else {
			return this.getToken(interviewParser.NL, i);
		}
	}
	public S(): TerminalNode[];
	public S(i: number): TerminalNode;
	public S(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(interviewParser.S);
		} else {
			return this.getToken(interviewParser.S, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return interviewParser.RULE_bitmark; }
	// @Override
	public enterRule(listener: interviewParserListener): void {
		if (listener.enterBitmark) {
			listener.enterBitmark(this);
		}
	}
	// @Override
	public exitRule(listener: interviewParserListener): void {
		if (listener.exitBitmark) {
			listener.exitBitmark(this);
		}
	}
}


export class Bitmark_Context extends ParserRuleContext {
	public interviews(): InterviewsContext {
		return this.getRuleContext(0, InterviewsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return interviewParser.RULE_bitmark_; }
	// @Override
	public enterRule(listener: interviewParserListener): void {
		if (listener.enterBitmark_) {
			listener.enterBitmark_(this);
		}
	}
	// @Override
	public exitRule(listener: interviewParserListener): void {
		if (listener.exitBitmark_) {
			listener.exitBitmark_(this);
		}
	}
}


export class InterviewsContext extends ParserRuleContext {
	public interview(): InterviewContext | undefined {
		return this.tryGetRuleContext(0, InterviewContext);
	}
	public interview_instruction_grouped(): Interview_instruction_groupedContext | undefined {
		return this.tryGetRuleContext(0, Interview_instruction_groupedContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return interviewParser.RULE_interviews; }
	// @Override
	public enterRule(listener: interviewParserListener): void {
		if (listener.enterInterviews) {
			listener.enterInterviews(this);
		}
	}
	// @Override
	public exitRule(listener: interviewParserListener): void {
		if (listener.exitInterviews) {
			listener.exitInterviews(this);
		}
	}
}


export class InterviewContext extends ParserRuleContext {
	public BitInterview(): TerminalNode { return this.getToken(interviewParser.BitInterview, 0); }
	public format(): FormatContext {
		return this.getRuleContext(0, FormatContext);
	}
	public CL(): TerminalNode { return this.getToken(interviewParser.CL, 0); }
	public NL(): TerminalNode[];
	public NL(i: number): TerminalNode;
	public NL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(interviewParser.NL);
		} else {
			return this.getToken(interviewParser.NL, i);
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
	public mcrsep(): McrsepContext[];
	public mcrsep(i: number): McrsepContext;
	public mcrsep(i?: number): McrsepContext | McrsepContext[] {
		if (i === undefined) {
			return this.getRuleContexts(McrsepContext);
		} else {
			return this.getRuleContext(i, McrsepContext);
		}
	}
	public interview_footer(): Interview_footerContext | undefined {
		return this.tryGetRuleContext(0, Interview_footerContext);
	}
	public interview_qanda(): Interview_qandaContext[];
	public interview_qanda(i: number): Interview_qandaContext;
	public interview_qanda(i?: number): Interview_qandaContext | Interview_qandaContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Interview_qandaContext);
		} else {
			return this.getRuleContext(i, Interview_qandaContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return interviewParser.RULE_interview; }
	// @Override
	public enterRule(listener: interviewParserListener): void {
		if (listener.enterInterview) {
			listener.enterInterview(this);
		}
	}
	// @Override
	public exitRule(listener: interviewParserListener): void {
		if (listener.exitInterview) {
			listener.exitInterview(this);
		}
	}
}


export class Interview_instruction_groupedContext extends ParserRuleContext {
	public BitInterviewinstgrp(): TerminalNode { return this.getToken(interviewParser.BitInterviewinstgrp, 0); }
	public format(): FormatContext {
		return this.getRuleContext(0, FormatContext);
	}
	public CL(): TerminalNode { return this.getToken(interviewParser.CL, 0); }
	public NL(): TerminalNode[];
	public NL(i: number): TerminalNode;
	public NL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(interviewParser.NL);
		} else {
			return this.getToken(interviewParser.NL, i);
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
	public mcrsep(): McrsepContext[];
	public mcrsep(i: number): McrsepContext;
	public mcrsep(i?: number): McrsepContext | McrsepContext[] {
		if (i === undefined) {
			return this.getRuleContexts(McrsepContext);
		} else {
			return this.getRuleContext(i, McrsepContext);
		}
	}
	public interview_footer(): Interview_footerContext | undefined {
		return this.tryGetRuleContext(0, Interview_footerContext);
	}
	public interview_qanda(): Interview_qandaContext[];
	public interview_qanda(i: number): Interview_qandaContext;
	public interview_qanda(i?: number): Interview_qandaContext | Interview_qandaContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Interview_qandaContext);
		} else {
			return this.getRuleContext(i, Interview_qandaContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return interviewParser.RULE_interview_instruction_grouped; }
	// @Override
	public enterRule(listener: interviewParserListener): void {
		if (listener.enterInterview_instruction_grouped) {
			listener.enterInterview_instruction_grouped(this);
		}
	}
	// @Override
	public exitRule(listener: interviewParserListener): void {
		if (listener.exitInterview_instruction_grouped) {
			listener.exitInterview_instruction_grouped(this);
		}
	}
}


export class McrsepContext extends ParserRuleContext {
	public NL(): TerminalNode | undefined { return this.tryGetToken(interviewParser.NL, 0); }
	public HSPL(): TerminalNode | undefined { return this.tryGetToken(interviewParser.HSPL, 0); }
	public HSPL2(): TerminalNode | undefined { return this.tryGetToken(interviewParser.HSPL2, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return interviewParser.RULE_mcrsep; }
	// @Override
	public enterRule(listener: interviewParserListener): void {
		if (listener.enterMcrsep) {
			listener.enterMcrsep(this);
		}
	}
	// @Override
	public exitRule(listener: interviewParserListener): void {
		if (listener.exitMcrsep) {
			listener.exitMcrsep(this);
		}
	}
}


export class Mcrsep_endContext extends ParserRuleContext {
	public HSPL(): TerminalNode | undefined { return this.tryGetToken(interviewParser.HSPL, 0); }
	public HSPL2(): TerminalNode | undefined { return this.tryGetToken(interviewParser.HSPL2, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return interviewParser.RULE_mcrsep_end; }
	// @Override
	public enterRule(listener: interviewParserListener): void {
		if (listener.enterMcrsep_end) {
			listener.enterMcrsep_end(this);
		}
	}
	// @Override
	public exitRule(listener: interviewParserListener): void {
		if (listener.exitMcrsep_end) {
			listener.exitMcrsep_end(this);
		}
	}
}


export class McrmiscContext extends ParserRuleContext {
	public interview_qanda(): Interview_qandaContext {
		return this.getRuleContext(0, Interview_qandaContext);
	}
	public NL(): TerminalNode { return this.getToken(interviewParser.NL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return interviewParser.RULE_mcrmisc; }
	// @Override
	public enterRule(listener: interviewParserListener): void {
		if (listener.enterMcrmisc) {
			listener.enterMcrmisc(this);
		}
	}
	// @Override
	public exitRule(listener: interviewParserListener): void {
		if (listener.exitMcrmisc) {
			listener.exitMcrmisc(this);
		}
	}
}


export class Interview_qandaContext extends ParserRuleContext {
	public interview_qanda__(): Interview_qanda__Context[];
	public interview_qanda__(i: number): Interview_qanda__Context;
	public interview_qanda__(i?: number): Interview_qanda__Context | Interview_qanda__Context[] {
		if (i === undefined) {
			return this.getRuleContexts(Interview_qanda__Context);
		} else {
			return this.getRuleContext(i, Interview_qanda__Context);
		}
	}
	public NL(): TerminalNode[];
	public NL(i: number): TerminalNode;
	public NL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(interviewParser.NL);
		} else {
			return this.getToken(interviewParser.NL, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return interviewParser.RULE_interview_qanda; }
	// @Override
	public enterRule(listener: interviewParserListener): void {
		if (listener.enterInterview_qanda) {
			listener.enterInterview_qanda(this);
		}
	}
	// @Override
	public exitRule(listener: interviewParserListener): void {
		if (listener.exitInterview_qanda) {
			listener.exitInterview_qanda(this);
		}
	}
}


export class Interview_qanda__Context extends ParserRuleContext {
	public interview_text(): Interview_textContext | undefined {
		return this.tryGetRuleContext(0, Interview_textContext);
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
	public S(): TerminalNode[];
	public S(i: number): TerminalNode;
	public S(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(interviewParser.S);
		} else {
			return this.getToken(interviewParser.S, i);
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
	public example(): ExampleContext[];
	public example(i: number): ExampleContext;
	public example(i?: number): ExampleContext | ExampleContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExampleContext);
		} else {
			return this.getRuleContext(i, ExampleContext);
		}
	}
	public shortans(): ShortansContext[];
	public shortans(i: number): ShortansContext;
	public shortans(i?: number): ShortansContext | ShortansContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ShortansContext);
		} else {
			return this.getRuleContext(i, ShortansContext);
		}
	}
	public longans(): LongansContext[];
	public longans(i: number): LongansContext;
	public longans(i?: number): LongansContext | LongansContext[] {
		if (i === undefined) {
			return this.getRuleContexts(LongansContext);
		} else {
			return this.getRuleContext(i, LongansContext);
		}
	}
	public dollarans(): DollaransContext[];
	public dollarans(i: number): DollaransContext;
	public dollarans(i?: number): DollaransContext | DollaransContext[] {
		if (i === undefined) {
			return this.getRuleContexts(DollaransContext);
		} else {
			return this.getRuleContext(i, DollaransContext);
		}
	}
	public partans(): PartansContext[];
	public partans(i: number): PartansContext;
	public partans(i?: number): PartansContext | PartansContext[] {
		if (i === undefined) {
			return this.getRuleContexts(PartansContext);
		} else {
			return this.getRuleContext(i, PartansContext);
		}
	}
	public single_gap(): Single_gapContext[];
	public single_gap(i: number): Single_gapContext;
	public single_gap(i?: number): Single_gapContext | Single_gapContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Single_gapContext);
		} else {
			return this.getRuleContext(i, Single_gapContext);
		}
	}
	public mark_text(): Mark_textContext[];
	public mark_text(i: number): Mark_textContext;
	public mark_text(i?: number): Mark_textContext | Mark_textContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Mark_textContext);
		} else {
			return this.getRuleContext(i, Mark_textContext);
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
	public interview_sometext(): Interview_sometextContext[];
	public interview_sometext(i: number): Interview_sometextContext;
	public interview_sometext(i?: number): Interview_sometextContext | Interview_sometextContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Interview_sometextContext);
		} else {
			return this.getRuleContext(i, Interview_sometextContext);
		}
	}
	public NL(): TerminalNode | undefined { return this.tryGetToken(interviewParser.NL, 0); }
	public interview_answer(): Interview_answerContext | undefined {
		return this.tryGetRuleContext(0, Interview_answerContext);
	}
	public sample_soln_prop(): Sample_soln_propContext[];
	public sample_soln_prop(i: number): Sample_soln_propContext;
	public sample_soln_prop(i?: number): Sample_soln_propContext | Sample_soln_propContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Sample_soln_propContext);
		} else {
			return this.getRuleContext(i, Sample_soln_propContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return interviewParser.RULE_interview_qanda__; }
	// @Override
	public enterRule(listener: interviewParserListener): void {
		if (listener.enterInterview_qanda__) {
			listener.enterInterview_qanda__(this);
		}
	}
	// @Override
	public exitRule(listener: interviewParserListener): void {
		if (listener.exitInterview_qanda__) {
			listener.exitInterview_qanda__(this);
		}
	}
}


export class Interview_sometextContext extends ParserRuleContext {
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
	public get ruleIndex(): number { return interviewParser.RULE_interview_sometext; }
	// @Override
	public enterRule(listener: interviewParserListener): void {
		if (listener.enterInterview_sometext) {
			listener.enterInterview_sometext(this);
		}
	}
	// @Override
	public exitRule(listener: interviewParserListener): void {
		if (listener.exitInterview_sometext) {
			listener.exitInterview_sometext(this);
		}
	}
}


export class Interview_textContext extends ParserRuleContext {
	public STRING(): TerminalNode | undefined { return this.tryGetToken(interviewParser.STRING, 0); }
	public CL(): TerminalNode | undefined { return this.tryGetToken(interviewParser.CL, 0); }
	public words(): WordsContext[];
	public words(i: number): WordsContext;
	public words(i?: number): WordsContext | WordsContext[] {
		if (i === undefined) {
			return this.getRuleContexts(WordsContext);
		} else {
			return this.getRuleContext(i, WordsContext);
		}
	}
	public COLON(): TerminalNode[];
	public COLON(i: number): TerminalNode;
	public COLON(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(interviewParser.COLON);
		} else {
			return this.getToken(interviewParser.COLON, i);
		}
	}
	public NL(): TerminalNode[];
	public NL(i: number): TerminalNode;
	public NL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(interviewParser.NL);
		} else {
			return this.getToken(interviewParser.NL, i);
		}
	}
	public LIST_LINE(): TerminalNode | undefined { return this.tryGetToken(interviewParser.LIST_LINE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return interviewParser.RULE_interview_text; }
	// @Override
	public enterRule(listener: interviewParserListener): void {
		if (listener.enterInterview_text) {
			listener.enterInterview_text(this);
		}
	}
	// @Override
	public exitRule(listener: interviewParserListener): void {
		if (listener.exitInterview_text) {
			listener.exitInterview_text(this);
		}
	}
}


export class Interview_answerContext extends ParserRuleContext {
	public words(): WordsContext[];
	public words(i: number): WordsContext;
	public words(i?: number): WordsContext | WordsContext[] {
		if (i === undefined) {
			return this.getRuleContexts(WordsContext);
		} else {
			return this.getRuleContext(i, WordsContext);
		}
	}
	public COLON(): TerminalNode[];
	public COLON(i: number): TerminalNode;
	public COLON(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(interviewParser.COLON);
		} else {
			return this.getToken(interviewParser.COLON, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return interviewParser.RULE_interview_answer; }
	// @Override
	public enterRule(listener: interviewParserListener): void {
		if (listener.enterInterview_answer) {
			listener.enterInterview_answer(this);
		}
	}
	// @Override
	public exitRule(listener: interviewParserListener): void {
		if (listener.exitInterview_answer) {
			listener.exitInterview_answer(this);
		}
	}
}


export class LongansContext extends ParserRuleContext {
	public AtLonganswer(): TerminalNode { return this.getToken(interviewParser.AtLonganswer, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return interviewParser.RULE_longans; }
	// @Override
	public enterRule(listener: interviewParserListener): void {
		if (listener.enterLongans) {
			listener.enterLongans(this);
		}
	}
	// @Override
	public exitRule(listener: interviewParserListener): void {
		if (listener.exitLongans) {
			listener.exitLongans(this);
		}
	}
}


export class ShortansContext extends ParserRuleContext {
	public AtShortanswer(): TerminalNode { return this.getToken(interviewParser.AtShortanswer, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return interviewParser.RULE_shortans; }
	// @Override
	public enterRule(listener: interviewParserListener): void {
		if (listener.enterShortans) {
			listener.enterShortans(this);
		}
	}
	// @Override
	public exitRule(listener: interviewParserListener): void {
		if (listener.exitShortans) {
			listener.exitShortans(this);
		}
	}
}


export class PartansContext extends ParserRuleContext {
	public AtPartialAnswer(): TerminalNode | undefined { return this.tryGetToken(interviewParser.AtPartialAnswer, 0); }
	public AtPartialAnswerS(): TerminalNode | undefined { return this.tryGetToken(interviewParser.AtPartialAnswerS, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return interviewParser.RULE_partans; }
	// @Override
	public enterRule(listener: interviewParserListener): void {
		if (listener.enterPartans) {
			listener.enterPartans(this);
		}
	}
	// @Override
	public exitRule(listener: interviewParserListener): void {
		if (listener.exitPartans) {
			listener.exitPartans(this);
		}
	}
}


export class Sample_soln_propContext extends ParserRuleContext {
	public AtSampleSolution(): TerminalNode { return this.getToken(interviewParser.AtSampleSolution, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return interviewParser.RULE_sample_soln_prop; }
	// @Override
	public enterRule(listener: interviewParserListener): void {
		if (listener.enterSample_soln_prop) {
			listener.enterSample_soln_prop(this);
		}
	}
	// @Override
	public exitRule(listener: interviewParserListener): void {
		if (listener.exitSample_soln_prop) {
			listener.exitSample_soln_prop(this);
		}
	}
}


export class Mark_textContext extends ParserRuleContext {
	public OPS(): TerminalNode { return this.getToken(interviewParser.OPS, 0); }
	public CL(): TerminalNode { return this.getToken(interviewParser.CL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return interviewParser.RULE_mark_text; }
	// @Override
	public enterRule(listener: interviewParserListener): void {
		if (listener.enterMark_text) {
			listener.enterMark_text(this);
		}
	}
	// @Override
	public exitRule(listener: interviewParserListener): void {
		if (listener.exitMark_text) {
			listener.exitMark_text(this);
		}
	}
}


export class QueryContext extends ParserRuleContext {
	public s_and_w(): S_and_wContext[];
	public s_and_w(i: number): S_and_wContext;
	public s_and_w(i?: number): S_and_wContext | S_and_wContext[] {
		if (i === undefined) {
			return this.getRuleContexts(S_and_wContext);
		} else {
			return this.getRuleContext(i, S_and_wContext);
		}
	}
	public AtExamplecl(): TerminalNode | undefined { return this.tryGetToken(interviewParser.AtExamplecl, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return interviewParser.RULE_query; }
	// @Override
	public enterRule(listener: interviewParserListener): void {
		if (listener.enterQuery) {
			listener.enterQuery(this);
		}
	}
	// @Override
	public exitRule(listener: interviewParserListener): void {
		if (listener.exitQuery) {
			listener.exitQuery(this);
		}
	}
}


export class AnswerContext extends ParserRuleContext {
	public s_and_w(): S_and_wContext[];
	public s_and_w(i: number): S_and_wContext;
	public s_and_w(i?: number): S_and_wContext | S_and_wContext[] {
		if (i === undefined) {
			return this.getRuleContexts(S_and_wContext);
		} else {
			return this.getRuleContext(i, S_and_wContext);
		}
	}
	public OR(): TerminalNode | undefined { return this.tryGetToken(interviewParser.OR, 0); }
	public example(): ExampleContext | undefined {
		return this.tryGetRuleContext(0, ExampleContext);
	}
	public S(): TerminalNode[];
	public S(i: number): TerminalNode;
	public S(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(interviewParser.S);
		} else {
			return this.getToken(interviewParser.S, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return interviewParser.RULE_answer; }
	// @Override
	public enterRule(listener: interviewParserListener): void {
		if (listener.enterAnswer) {
			listener.enterAnswer(this);
		}
	}
	// @Override
	public exitRule(listener: interviewParserListener): void {
		if (listener.exitAnswer) {
			listener.exitAnswer(this);
		}
	}
}


export class HeadingContext extends ParserRuleContext {
	public key_title(): Key_titleContext {
		return this.getRuleContext(0, Key_titleContext);
	}
	public value_title(): Value_titleContext {
		return this.getRuleContext(0, Value_titleContext);
	}
	public NL(): TerminalNode[];
	public NL(i: number): TerminalNode;
	public NL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(interviewParser.NL);
		} else {
			return this.getToken(interviewParser.NL, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return interviewParser.RULE_heading; }
	// @Override
	public enterRule(listener: interviewParserListener): void {
		if (listener.enterHeading) {
			listener.enterHeading(this);
		}
	}
	// @Override
	public exitRule(listener: interviewParserListener): void {
		if (listener.exitHeading) {
			listener.exitHeading(this);
		}
	}
}


export class Key_titleContext extends ParserRuleContext {
	public OPHASH(): TerminalNode { return this.getToken(interviewParser.OPHASH, 0); }
	public CL(): TerminalNode { return this.getToken(interviewParser.CL, 0); }
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
	public get ruleIndex(): number { return interviewParser.RULE_key_title; }
	// @Override
	public enterRule(listener: interviewParserListener): void {
		if (listener.enterKey_title) {
			listener.enterKey_title(this);
		}
	}
	// @Override
	public exitRule(listener: interviewParserListener): void {
		if (listener.exitKey_title) {
			listener.exitKey_title(this);
		}
	}
}


export class Value_titleContext extends ParserRuleContext {
	public OPHASH(): TerminalNode { return this.getToken(interviewParser.OPHASH, 0); }
	public CL(): TerminalNode { return this.getToken(interviewParser.CL, 0); }
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
	public get ruleIndex(): number { return interviewParser.RULE_value_title; }
	// @Override
	public enterRule(listener: interviewParserListener): void {
		if (listener.enterValue_title) {
			listener.enterValue_title(this);
		}
	}
	// @Override
	public exitRule(listener: interviewParserListener): void {
		if (listener.exitValue_title) {
			listener.exitValue_title(this);
		}
	}
}


export class Ml_exampleContext extends ParserRuleContext {
	public AtExamplecol(): TerminalNode { return this.getToken(interviewParser.AtExamplecol, 0); }
	public CL(): TerminalNode { return this.getToken(interviewParser.CL, 0); }
	public lines(): LinesContext | undefined {
		return this.tryGetRuleContext(0, LinesContext);
	}
	public NL(): TerminalNode[];
	public NL(i: number): TerminalNode;
	public NL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(interviewParser.NL);
		} else {
			return this.getToken(interviewParser.NL, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return interviewParser.RULE_ml_example; }
	// @Override
	public enterRule(listener: interviewParserListener): void {
		if (listener.enterMl_example) {
			listener.enterMl_example(this);
		}
	}
	// @Override
	public exitRule(listener: interviewParserListener): void {
		if (listener.exitMl_example) {
			listener.exitMl_example(this);
		}
	}
}


export class BitElemContext extends ParserRuleContext {
	public NOTBITMARK(): TerminalNode | undefined { return this.tryGetToken(interviewParser.NOTBITMARK, 0); }
	public item(): ItemContext | undefined {
		return this.tryGetRuleContext(0, ItemContext);
	}
	public atdef(): AtdefContext | undefined {
		return this.tryGetRuleContext(0, AtdefContext);
	}
	public reference(): ReferenceContext | undefined {
		return this.tryGetRuleContext(0, ReferenceContext);
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
	public gap(): GapContext | undefined {
		return this.tryGetRuleContext(0, GapContext);
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
	public get ruleIndex(): number { return interviewParser.RULE_bitElem; }
	// @Override
	public enterRule(listener: interviewParserListener): void {
		if (listener.enterBitElem) {
			listener.enterBitElem(this);
		}
	}
	// @Override
	public exitRule(listener: interviewParserListener): void {
		if (listener.exitBitElem) {
			listener.exitBitElem(this);
		}
	}
}


export class Interview_footerContext extends ParserRuleContext {
	public footer_resource(): Footer_resourceContext[];
	public footer_resource(i: number): Footer_resourceContext;
	public footer_resource(i?: number): Footer_resourceContext | Footer_resourceContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Footer_resourceContext);
		} else {
			return this.getRuleContext(i, Footer_resourceContext);
		}
	}
	public NL(): TerminalNode[];
	public NL(i: number): TerminalNode;
	public NL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(interviewParser.NL);
		} else {
			return this.getToken(interviewParser.NL, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return interviewParser.RULE_interview_footer; }
	// @Override
	public enterRule(listener: interviewParserListener): void {
		if (listener.enterInterview_footer) {
			listener.enterInterview_footer(this);
		}
	}
	// @Override
	public exitRule(listener: interviewParserListener): void {
		if (listener.exitInterview_footer) {
			listener.exitInterview_footer(this);
		}
	}
}


export class Footer_resourceContext extends ParserRuleContext {
	public footer_text(): Footer_textContext | undefined {
		return this.tryGetRuleContext(0, Footer_textContext);
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
	public reference(): ReferenceContext | undefined {
		return this.tryGetRuleContext(0, ReferenceContext);
	}
	public hint(): HintContext | undefined {
		return this.tryGetRuleContext(0, HintContext);
	}
	public NL(): TerminalNode[];
	public NL(i: number): TerminalNode;
	public NL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(interviewParser.NL);
		} else {
			return this.getToken(interviewParser.NL, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return interviewParser.RULE_footer_resource; }
	// @Override
	public enterRule(listener: interviewParserListener): void {
		if (listener.enterFooter_resource) {
			listener.enterFooter_resource(this);
		}
	}
	// @Override
	public exitRule(listener: interviewParserListener): void {
		if (listener.exitFooter_resource) {
			listener.exitFooter_resource(this);
		}
	}
}


export class Footer_textContext extends ParserRuleContext {
	public LIST_LINE(): TerminalNode[];
	public LIST_LINE(i: number): TerminalNode;
	public LIST_LINE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(interviewParser.LIST_LINE);
		} else {
			return this.getToken(interviewParser.LIST_LINE, i);
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
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return interviewParser.RULE_footer_text; }
	// @Override
	public enterRule(listener: interviewParserListener): void {
		if (listener.enterFooter_text) {
			listener.enterFooter_text(this);
		}
	}
	// @Override
	public exitRule(listener: interviewParserListener): void {
		if (listener.exitFooter_text) {
			listener.exitFooter_text(this);
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
	public get ruleIndex(): number { return interviewParser.RULE_gap; }
	// @Override
	public enterRule(listener: interviewParserListener): void {
		if (listener.enterGap) {
			listener.enterGap(this);
		}
	}
	// @Override
	public exitRule(listener: interviewParserListener): void {
		if (listener.exitGap) {
			listener.exitGap(this);
		}
	}
}


export class Single_gapContext extends ParserRuleContext {
	public OPU(): TerminalNode { return this.getToken(interviewParser.OPU, 0); }
	public clnsp(): ClnspContext {
		return this.getRuleContext(0, ClnspContext);
	}
	public NUMERIC(): TerminalNode | undefined { return this.tryGetToken(interviewParser.NUMERIC, 0); }
	public STRING(): TerminalNode | undefined { return this.tryGetToken(interviewParser.STRING, 0); }
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
	public get ruleIndex(): number { return interviewParser.RULE_single_gap; }
	// @Override
	public enterRule(listener: interviewParserListener): void {
		if (listener.enterSingle_gap) {
			listener.enterSingle_gap(this);
		}
	}
	// @Override
	public exitRule(listener: interviewParserListener): void {
		if (listener.exitSingle_gap) {
			listener.exitSingle_gap(this);
		}
	}
}


export class AtpointContext extends ParserRuleContext {
	public AtPoints(): TerminalNode { return this.getToken(interviewParser.AtPoints, 0); }
	public NUMERIC(): TerminalNode { return this.getToken(interviewParser.NUMERIC, 0); }
	public CL(): TerminalNode { return this.getToken(interviewParser.CL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return interviewParser.RULE_atpoint; }
	// @Override
	public enterRule(listener: interviewParserListener): void {
		if (listener.enterAtpoint) {
			listener.enterAtpoint(this);
		}
	}
	// @Override
	public exitRule(listener: interviewParserListener): void {
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
			return this.getTokens(interviewParser.ColonText);
		} else {
			return this.getToken(interviewParser.ColonText, i);
		}
	}
	public ColonJson(): TerminalNode[];
	public ColonJson(i: number): TerminalNode;
	public ColonJson(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(interviewParser.ColonJson);
		} else {
			return this.getToken(interviewParser.ColonJson, i);
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
	public get ruleIndex(): number { return interviewParser.RULE_format; }
	// @Override
	public enterRule(listener: interviewParserListener): void {
		if (listener.enterFormat) {
			listener.enterFormat(this);
		}
	}
	// @Override
	public exitRule(listener: interviewParserListener): void {
		if (listener.exitFormat) {
			listener.exitFormat(this);
		}
	}
}


export class Resource_formatContext extends ParserRuleContext {
	public BitmarkMinus(): TerminalNode | undefined { return this.tryGetToken(interviewParser.BitmarkMinus, 0); }
	public BitmarkPlus(): TerminalNode | undefined { return this.tryGetToken(interviewParser.BitmarkPlus, 0); }
	public Prosemirror(): TerminalNode | undefined { return this.tryGetToken(interviewParser.Prosemirror, 0); }
	public Placeholder(): TerminalNode | undefined { return this.tryGetToken(interviewParser.Placeholder, 0); }
	public ColonJson(): TerminalNode | undefined { return this.tryGetToken(interviewParser.ColonJson, 0); }
	public AmpArticle(): TerminalNode | undefined { return this.tryGetToken(interviewParser.AmpArticle, 0); }
	public AmpDocument(): TerminalNode | undefined { return this.tryGetToken(interviewParser.AmpDocument, 0); }
	public AmpWebsite(): TerminalNode | undefined { return this.tryGetToken(interviewParser.AmpWebsite, 0); }
	public AmpStillImageFilm(): TerminalNode | undefined { return this.tryGetToken(interviewParser.AmpStillImageFilm, 0); }
	public AmpAudioLink(): TerminalNode | undefined { return this.tryGetToken(interviewParser.AmpAudioLink, 0); }
	public AmpImageLink(): TerminalNode | undefined { return this.tryGetToken(interviewParser.AmpImageLink, 0); }
	public AmpVideoLink(): TerminalNode | undefined { return this.tryGetToken(interviewParser.AmpVideoLink, 0); }
	public AmpArticleLink(): TerminalNode | undefined { return this.tryGetToken(interviewParser.AmpArticleLink, 0); }
	public AmpDocumentLink(): TerminalNode | undefined { return this.tryGetToken(interviewParser.AmpDocumentLink, 0); }
	public AmpAppLink(): TerminalNode | undefined { return this.tryGetToken(interviewParser.AmpAppLink, 0); }
	public AmpWebsiteLink(): TerminalNode | undefined { return this.tryGetToken(interviewParser.AmpWebsiteLink, 0); }
	public AmpStillImageFilmLink(): TerminalNode | undefined { return this.tryGetToken(interviewParser.AmpStillImageFilmLink, 0); }
	public AmpVideoEmbed(): TerminalNode | undefined { return this.tryGetToken(interviewParser.AmpVideoEmbed, 0); }
	public AmpAudioEmbed(): TerminalNode | undefined { return this.tryGetToken(interviewParser.AmpAudioEmbed, 0); }
	public AmpDocumentEmbed(): TerminalNode | undefined { return this.tryGetToken(interviewParser.AmpDocumentEmbed, 0); }
	public AmpStillImageFilmEmbed(): TerminalNode | undefined { return this.tryGetToken(interviewParser.AmpStillImageFilmEmbed, 0); }
	public AmpDocumentDownload(): TerminalNode | undefined { return this.tryGetToken(interviewParser.AmpDocumentDownload, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return interviewParser.RULE_resource_format; }
	// @Override
	public enterRule(listener: interviewParserListener): void {
		if (listener.enterResource_format) {
			listener.enterResource_format(this);
		}
	}
	// @Override
	public exitRule(listener: interviewParserListener): void {
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
	public AmpPdf(): TerminalNode | undefined { return this.tryGetToken(interviewParser.AmpPdf, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return interviewParser.RULE_resource_format_extra; }
	// @Override
	public enterRule(listener: interviewParserListener): void {
		if (listener.enterResource_format_extra) {
			listener.enterResource_format_extra(this);
		}
	}
	// @Override
	public exitRule(listener: interviewParserListener): void {
		if (listener.exitResource_format_extra) {
			listener.exitResource_format_extra(this);
		}
	}
}


export class Format2Context extends ParserRuleContext {
	public BitmarkMinus(): TerminalNode | undefined { return this.tryGetToken(interviewParser.BitmarkMinus, 0); }
	public BitmarkPlus(): TerminalNode | undefined { return this.tryGetToken(interviewParser.BitmarkPlus, 0); }
	public ColonText(): TerminalNode | undefined { return this.tryGetToken(interviewParser.ColonText, 0); }
	public Placeholder(): TerminalNode | undefined { return this.tryGetToken(interviewParser.Placeholder, 0); }
	public ColonJson(): TerminalNode | undefined { return this.tryGetToken(interviewParser.ColonJson, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return interviewParser.RULE_format2; }
	// @Override
	public enterRule(listener: interviewParserListener): void {
		if (listener.enterFormat2) {
			listener.enterFormat2(this);
		}
	}
	// @Override
	public exitRule(listener: interviewParserListener): void {
		if (listener.exitFormat2) {
			listener.exitFormat2(this);
		}
	}
}


export class Image_formatContext extends ParserRuleContext {
	public AmpImage(): TerminalNode | undefined { return this.tryGetToken(interviewParser.AmpImage, 0); }
	public Image_type(): TerminalNode | undefined { return this.tryGetToken(interviewParser.Image_type, 0); }
	public DotArticleAtt(): TerminalNode | undefined { return this.tryGetToken(interviewParser.DotArticleAtt, 0); }
	public AmpImageLink(): TerminalNode | undefined { return this.tryGetToken(interviewParser.AmpImageLink, 0); }
	public AmpImageZoom(): TerminalNode | undefined { return this.tryGetToken(interviewParser.AmpImageZoom, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return interviewParser.RULE_image_format; }
	// @Override
	public enterRule(listener: interviewParserListener): void {
		if (listener.enterImage_format) {
			listener.enterImage_format(this);
		}
	}
	// @Override
	public exitRule(listener: interviewParserListener): void {
		if (listener.exitImage_format) {
			listener.exitImage_format(this);
		}
	}
}


export class Video_formatContext extends ParserRuleContext {
	public AmpVideo(): TerminalNode | undefined { return this.tryGetToken(interviewParser.AmpVideo, 0); }
	public AmpVideoLink(): TerminalNode | undefined { return this.tryGetToken(interviewParser.AmpVideoLink, 0); }
	public AmpVideoEmbed(): TerminalNode | undefined { return this.tryGetToken(interviewParser.AmpVideoEmbed, 0); }
	public COLON(): TerminalNode | undefined { return this.tryGetToken(interviewParser.COLON, 0); }
	public Video_type(): TerminalNode | undefined { return this.tryGetToken(interviewParser.Video_type, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return interviewParser.RULE_video_format; }
	// @Override
	public enterRule(listener: interviewParserListener): void {
		if (listener.enterVideo_format) {
			listener.enterVideo_format(this);
		}
	}
	// @Override
	public exitRule(listener: interviewParserListener): void {
		if (listener.exitVideo_format) {
			listener.exitVideo_format(this);
		}
	}
}


export class Article_formatContext extends ParserRuleContext {
	public AmpArticle(): TerminalNode | undefined { return this.tryGetToken(interviewParser.AmpArticle, 0); }
	public AmpArticleLink(): TerminalNode | undefined { return this.tryGetToken(interviewParser.AmpArticleLink, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return interviewParser.RULE_article_format; }
	// @Override
	public enterRule(listener: interviewParserListener): void {
		if (listener.enterArticle_format) {
			listener.enterArticle_format(this);
		}
	}
	// @Override
	public exitRule(listener: interviewParserListener): void {
		if (listener.exitArticle_format) {
			listener.exitArticle_format(this);
		}
	}
}


export class Document_formatContext extends ParserRuleContext {
	public AmpDocument(): TerminalNode | undefined { return this.tryGetToken(interviewParser.AmpDocument, 0); }
	public AmpDocumentLink(): TerminalNode | undefined { return this.tryGetToken(interviewParser.AmpDocumentLink, 0); }
	public AmpDocumentDownload(): TerminalNode | undefined { return this.tryGetToken(interviewParser.AmpDocumentDownload, 0); }
	public AmpDocumentEmbed(): TerminalNode | undefined { return this.tryGetToken(interviewParser.AmpDocumentEmbed, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return interviewParser.RULE_document_format; }
	// @Override
	public enterRule(listener: interviewParserListener): void {
		if (listener.enterDocument_format) {
			listener.enterDocument_format(this);
		}
	}
	// @Override
	public exitRule(listener: interviewParserListener): void {
		if (listener.exitDocument_format) {
			listener.exitDocument_format(this);
		}
	}
}


export class App_formatContext extends ParserRuleContext {
	public AmpApp(): TerminalNode | undefined { return this.tryGetToken(interviewParser.AmpApp, 0); }
	public AmpAppLink(): TerminalNode | undefined { return this.tryGetToken(interviewParser.AmpAppLink, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return interviewParser.RULE_app_format; }
	// @Override
	public enterRule(listener: interviewParserListener): void {
		if (listener.enterApp_format) {
			listener.enterApp_format(this);
		}
	}
	// @Override
	public exitRule(listener: interviewParserListener): void {
		if (listener.exitApp_format) {
			listener.exitApp_format(this);
		}
	}
}


export class Website_formatContext extends ParserRuleContext {
	public AmpWebsite(): TerminalNode | undefined { return this.tryGetToken(interviewParser.AmpWebsite, 0); }
	public AmpWebsiteLink(): TerminalNode | undefined { return this.tryGetToken(interviewParser.AmpWebsiteLink, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return interviewParser.RULE_website_format; }
	// @Override
	public enterRule(listener: interviewParserListener): void {
		if (listener.enterWebsite_format) {
			listener.enterWebsite_format(this);
		}
	}
	// @Override
	public exitRule(listener: interviewParserListener): void {
		if (listener.exitWebsite_format) {
			listener.exitWebsite_format(this);
		}
	}
}


export class Stillimagefilm_formatContext extends ParserRuleContext {
	public AmpStillImageFilm(): TerminalNode | undefined { return this.tryGetToken(interviewParser.AmpStillImageFilm, 0); }
	public AmpStillImageFilmLink(): TerminalNode | undefined { return this.tryGetToken(interviewParser.AmpStillImageFilmLink, 0); }
	public AmpStillImageFilmEmbed(): TerminalNode | undefined { return this.tryGetToken(interviewParser.AmpStillImageFilmEmbed, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return interviewParser.RULE_stillimagefilm_format; }
	// @Override
	public enterRule(listener: interviewParserListener): void {
		if (listener.enterStillimagefilm_format) {
			listener.enterStillimagefilm_format(this);
		}
	}
	// @Override
	public exitRule(listener: interviewParserListener): void {
		if (listener.exitStillimagefilm_format) {
			listener.exitStillimagefilm_format(this);
		}
	}
}


export class Op_article_formatContext extends ParserRuleContext {
	public OpAmpArticleLink(): TerminalNode | undefined { return this.tryGetToken(interviewParser.OpAmpArticleLink, 0); }
	public OpAmpArticle(): TerminalNode | undefined { return this.tryGetToken(interviewParser.OpAmpArticle, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return interviewParser.RULE_op_article_format; }
	// @Override
	public enterRule(listener: interviewParserListener): void {
		if (listener.enterOp_article_format) {
			listener.enterOp_article_format(this);
		}
	}
	// @Override
	public exitRule(listener: interviewParserListener): void {
		if (listener.exitOp_article_format) {
			listener.exitOp_article_format(this);
		}
	}
}


export class Op_document_formatContext extends ParserRuleContext {
	public OpAmpDocumentLink(): TerminalNode | undefined { return this.tryGetToken(interviewParser.OpAmpDocumentLink, 0); }
	public OpAmpDocument(): TerminalNode | undefined { return this.tryGetToken(interviewParser.OpAmpDocument, 0); }
	public OpAmpDocumentDownload(): TerminalNode | undefined { return this.tryGetToken(interviewParser.OpAmpDocumentDownload, 0); }
	public OpAmpDocumentEmbed(): TerminalNode | undefined { return this.tryGetToken(interviewParser.OpAmpDocumentEmbed, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return interviewParser.RULE_op_document_format; }
	// @Override
	public enterRule(listener: interviewParserListener): void {
		if (listener.enterOp_document_format) {
			listener.enterOp_document_format(this);
		}
	}
	// @Override
	public exitRule(listener: interviewParserListener): void {
		if (listener.exitOp_document_format) {
			listener.exitOp_document_format(this);
		}
	}
}


export class Op_app_formatContext extends ParserRuleContext {
	public OpAmpApp(): TerminalNode | undefined { return this.tryGetToken(interviewParser.OpAmpApp, 0); }
	public OpAmpAppLink(): TerminalNode | undefined { return this.tryGetToken(interviewParser.OpAmpAppLink, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return interviewParser.RULE_op_app_format; }
	// @Override
	public enterRule(listener: interviewParserListener): void {
		if (listener.enterOp_app_format) {
			listener.enterOp_app_format(this);
		}
	}
	// @Override
	public exitRule(listener: interviewParserListener): void {
		if (listener.exitOp_app_format) {
			listener.exitOp_app_format(this);
		}
	}
}


export class Op_website_formatContext extends ParserRuleContext {
	public OpAmpWebsite(): TerminalNode | undefined { return this.tryGetToken(interviewParser.OpAmpWebsite, 0); }
	public OpAmpWebsiteLink(): TerminalNode | undefined { return this.tryGetToken(interviewParser.OpAmpWebsiteLink, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return interviewParser.RULE_op_website_format; }
	// @Override
	public enterRule(listener: interviewParserListener): void {
		if (listener.enterOp_website_format) {
			listener.enterOp_website_format(this);
		}
	}
	// @Override
	public exitRule(listener: interviewParserListener): void {
		if (listener.exitOp_website_format) {
			listener.exitOp_website_format(this);
		}
	}
}


export class Op_video_formatContext extends ParserRuleContext {
	public OpAmpVideo(): TerminalNode | undefined { return this.tryGetToken(interviewParser.OpAmpVideo, 0); }
	public COLON(): TerminalNode | undefined { return this.tryGetToken(interviewParser.COLON, 0); }
	public Video_type(): TerminalNode | undefined { return this.tryGetToken(interviewParser.Video_type, 0); }
	public OpAmpVideoLink(): TerminalNode | undefined { return this.tryGetToken(interviewParser.OpAmpVideoLink, 0); }
	public OpAmpVideoEmbed(): TerminalNode | undefined { return this.tryGetToken(interviewParser.OpAmpVideoEmbed, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return interviewParser.RULE_op_video_format; }
	// @Override
	public enterRule(listener: interviewParserListener): void {
		if (listener.enterOp_video_format) {
			listener.enterOp_video_format(this);
		}
	}
	// @Override
	public exitRule(listener: interviewParserListener): void {
		if (listener.exitOp_video_format) {
			listener.exitOp_video_format(this);
		}
	}
}


export class Op_stillimagefilm_formatContext extends ParserRuleContext {
	public OpAmpStillImageFilm(): TerminalNode | undefined { return this.tryGetToken(interviewParser.OpAmpStillImageFilm, 0); }
	public OpAmpStillImageFilmLink(): TerminalNode | undefined { return this.tryGetToken(interviewParser.OpAmpStillImageFilmLink, 0); }
	public OpAmpStillImageFilmEmbed(): TerminalNode | undefined { return this.tryGetToken(interviewParser.OpAmpStillImageFilmEmbed, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return interviewParser.RULE_op_stillimagefilm_format; }
	// @Override
	public enterRule(listener: interviewParserListener): void {
		if (listener.enterOp_stillimagefilm_format) {
			listener.enterOp_stillimagefilm_format(this);
		}
	}
	// @Override
	public exitRule(listener: interviewParserListener): void {
		if (listener.exitOp_stillimagefilm_format) {
			listener.exitOp_stillimagefilm_format(this);
		}
	}
}


export class ArticlebitContext extends ParserRuleContext {
	public op_article_format(): Op_article_formatContext | undefined {
		return this.tryGetRuleContext(0, Op_article_formatContext);
	}
	public COLON(): TerminalNode | undefined { return this.tryGetToken(interviewParser.COLON, 0); }
	public url(): UrlContext | undefined {
		return this.tryGetRuleContext(0, UrlContext);
	}
	public CL(): TerminalNode | undefined { return this.tryGetToken(interviewParser.CL, 0); }
	public ArticleText(): TerminalNode | undefined { return this.tryGetToken(interviewParser.ArticleText, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return interviewParser.RULE_articlebit; }
	// @Override
	public enterRule(listener: interviewParserListener): void {
		if (listener.enterArticlebit) {
			listener.enterArticlebit(this);
		}
	}
	// @Override
	public exitRule(listener: interviewParserListener): void {
		if (listener.exitArticlebit) {
			listener.exitArticlebit(this);
		}
	}
}


export class DocumentbitContext extends ParserRuleContext {
	public op_document_format(): Op_document_formatContext {
		return this.getRuleContext(0, Op_document_formatContext);
	}
	public COLON(): TerminalNode { return this.getToken(interviewParser.COLON, 0); }
	public url(): UrlContext {
		return this.getRuleContext(0, UrlContext);
	}
	public CL(): TerminalNode[];
	public CL(i: number): TerminalNode;
	public CL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(interviewParser.CL);
		} else {
			return this.getToken(interviewParser.CL, i);
		}
	}
	public OPATALT(): TerminalNode | undefined { return this.tryGetToken(interviewParser.OPATALT, 0); }
	public words(): WordsContext | undefined {
		return this.tryGetRuleContext(0, WordsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return interviewParser.RULE_documentbit; }
	// @Override
	public enterRule(listener: interviewParserListener): void {
		if (listener.enterDocumentbit) {
			listener.enterDocumentbit(this);
		}
	}
	// @Override
	public exitRule(listener: interviewParserListener): void {
		if (listener.exitDocumentbit) {
			listener.exitDocumentbit(this);
		}
	}
}


export class WebsitebitContext extends ParserRuleContext {
	public op_website_format(): Op_website_formatContext {
		return this.getRuleContext(0, Op_website_formatContext);
	}
	public COLON(): TerminalNode { return this.getToken(interviewParser.COLON, 0); }
	public url(): UrlContext {
		return this.getRuleContext(0, UrlContext);
	}
	public CL(): TerminalNode[];
	public CL(i: number): TerminalNode;
	public CL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(interviewParser.CL);
		} else {
			return this.getToken(interviewParser.CL, i);
		}
	}
	public OPATALT(): TerminalNode | undefined { return this.tryGetToken(interviewParser.OPATALT, 0); }
	public words(): WordsContext | undefined {
		return this.tryGetRuleContext(0, WordsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return interviewParser.RULE_websitebit; }
	// @Override
	public enterRule(listener: interviewParserListener): void {
		if (listener.enterWebsitebit) {
			listener.enterWebsitebit(this);
		}
	}
	// @Override
	public exitRule(listener: interviewParserListener): void {
		if (listener.exitWebsitebit) {
			listener.exitWebsitebit(this);
		}
	}
}


export class AppbitContext extends ParserRuleContext {
	public op_app_format(): Op_app_formatContext {
		return this.getRuleContext(0, Op_app_formatContext);
	}
	public COLON(): TerminalNode { return this.getToken(interviewParser.COLON, 0); }
	public CL(): TerminalNode[];
	public CL(i: number): TerminalNode;
	public CL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(interviewParser.CL);
		} else {
			return this.getToken(interviewParser.CL, i);
		}
	}
	public url(): UrlContext | undefined {
		return this.tryGetRuleContext(0, UrlContext);
	}
	public telephone(): TelephoneContext | undefined {
		return this.tryGetRuleContext(0, TelephoneContext);
	}
	public OPATALT(): TerminalNode | undefined { return this.tryGetToken(interviewParser.OPATALT, 0); }
	public words(): WordsContext | undefined {
		return this.tryGetRuleContext(0, WordsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return interviewParser.RULE_appbit; }
	// @Override
	public enterRule(listener: interviewParserListener): void {
		if (listener.enterAppbit) {
			listener.enterAppbit(this);
		}
	}
	// @Override
	public exitRule(listener: interviewParserListener): void {
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
	public get ruleIndex(): number { return interviewParser.RULE_stillimagefilmbit; }
	// @Override
	public enterRule(listener: interviewParserListener): void {
		if (listener.enterStillimagefilmbit) {
			listener.enterStillimagefilmbit(this);
		}
	}
	// @Override
	public exitRule(listener: interviewParserListener): void {
		if (listener.exitStillimagefilmbit) {
			listener.exitStillimagefilmbit(this);
		}
	}
}


export class Stillimg_oneContext extends ParserRuleContext {
	public op_stillimagefilm_format(): Op_stillimagefilm_formatContext {
		return this.getRuleContext(0, Op_stillimagefilm_formatContext);
	}
	public COLON(): TerminalNode { return this.getToken(interviewParser.COLON, 0); }
	public url(): UrlContext {
		return this.getRuleContext(0, UrlContext);
	}
	public CL(): TerminalNode { return this.getToken(interviewParser.CL, 0); }
	public S(): TerminalNode[];
	public S(i: number): TerminalNode;
	public S(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(interviewParser.S);
		} else {
			return this.getToken(interviewParser.S, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return interviewParser.RULE_stillimg_one; }
	// @Override
	public enterRule(listener: interviewParserListener): void {
		if (listener.enterStillimg_one) {
			listener.enterStillimg_one(this);
		}
	}
	// @Override
	public exitRule(listener: interviewParserListener): void {
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
	public get ruleIndex(): number { return interviewParser.RULE_videobit; }
	// @Override
	public enterRule(listener: interviewParserListener): void {
		if (listener.enterVideobit) {
			listener.enterVideobit(this);
		}
	}
	// @Override
	public exitRule(listener: interviewParserListener): void {
		if (listener.exitVideobit) {
			listener.exitVideobit(this);
		}
	}
}


export class Video_oneContext extends ParserRuleContext {
	public op_video_format(): Op_video_formatContext {
		return this.getRuleContext(0, Op_video_formatContext);
	}
	public COLON(): TerminalNode { return this.getToken(interviewParser.COLON, 0); }
	public url(): UrlContext {
		return this.getRuleContext(0, UrlContext);
	}
	public CL(): TerminalNode[];
	public CL(i: number): TerminalNode;
	public CL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(interviewParser.CL);
		} else {
			return this.getToken(interviewParser.CL, i);
		}
	}
	public OPATALT(): TerminalNode | undefined { return this.tryGetToken(interviewParser.OPATALT, 0); }
	public words(): WordsContext | undefined {
		return this.tryGetRuleContext(0, WordsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return interviewParser.RULE_video_one; }
	// @Override
	public enterRule(listener: interviewParserListener): void {
		if (listener.enterVideo_one) {
			listener.enterVideo_one(this);
		}
	}
	// @Override
	public exitRule(listener: interviewParserListener): void {
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
	public NL(): TerminalNode | undefined { return this.tryGetToken(interviewParser.NL, 0); }
	public ShowInIndex(): TerminalNode | undefined { return this.tryGetToken(interviewParser.ShowInIndex, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return interviewParser.RULE_imagebit; }
	// @Override
	public enterRule(listener: interviewParserListener): void {
		if (listener.enterImagebit) {
			listener.enterImagebit(this);
		}
	}
	// @Override
	public exitRule(listener: interviewParserListener): void {
		if (listener.exitImagebit) {
			listener.exitImagebit(this);
		}
	}
}


export class Image_oneContext extends ParserRuleContext {
	public op_image_format(): Op_image_formatContext {
		return this.getRuleContext(0, Op_image_formatContext);
	}
	public COLON(): TerminalNode { return this.getToken(interviewParser.COLON, 0); }
	public url(): UrlContext {
		return this.getRuleContext(0, UrlContext);
	}
	public CL(): TerminalNode { return this.getToken(interviewParser.CL, 0); }
	public S(): TerminalNode[];
	public S(i: number): TerminalNode;
	public S(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(interviewParser.S);
		} else {
			return this.getToken(interviewParser.S, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return interviewParser.RULE_image_one; }
	// @Override
	public enterRule(listener: interviewParserListener): void {
		if (listener.enterImage_one) {
			listener.enterImage_one(this);
		}
	}
	// @Override
	public exitRule(listener: interviewParserListener): void {
		if (listener.exitImage_one) {
			listener.exitImage_one(this);
		}
	}
}


export class Op_image_formatContext extends ParserRuleContext {
	public OpAmpImage(): TerminalNode | undefined { return this.tryGetToken(interviewParser.OpAmpImage, 0); }
	public Image_type(): TerminalNode | undefined { return this.tryGetToken(interviewParser.Image_type, 0); }
	public DotArticleAtt(): TerminalNode | undefined { return this.tryGetToken(interviewParser.DotArticleAtt, 0); }
	public OpAmpImageLink(): TerminalNode | undefined { return this.tryGetToken(interviewParser.OpAmpImageLink, 0); }
	public OpAmpImageZoom(): TerminalNode | undefined { return this.tryGetToken(interviewParser.OpAmpImageZoom, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return interviewParser.RULE_op_image_format; }
	// @Override
	public enterRule(listener: interviewParserListener): void {
		if (listener.enterOp_image_format) {
			listener.enterOp_image_format(this);
		}
	}
	// @Override
	public exitRule(listener: interviewParserListener): void {
		if (listener.exitOp_image_format) {
			listener.exitOp_image_format(this);
		}
	}
}


export class Image_chainedContext extends ParserRuleContext {
	public AtSrc(): TerminalNode | undefined { return this.tryGetToken(interviewParser.AtSrc, 0); }
	public COLON(): TerminalNode | undefined { return this.tryGetToken(interviewParser.COLON, 0); }
	public url(): UrlContext | undefined {
		return this.tryGetRuleContext(0, UrlContext);
	}
	public CL(): TerminalNode { return this.getToken(interviewParser.CL, 0); }
	public NUMERIC(): TerminalNode | undefined { return this.tryGetToken(interviewParser.NUMERIC, 0); }
	public AtWidth(): TerminalNode | undefined { return this.tryGetToken(interviewParser.AtWidth, 0); }
	public AtHeight(): TerminalNode | undefined { return this.tryGetToken(interviewParser.AtHeight, 0); }
	public OPATALT(): TerminalNode | undefined { return this.tryGetToken(interviewParser.OPATALT, 0); }
	public OpAtCaption(): TerminalNode | undefined { return this.tryGetToken(interviewParser.OpAtCaption, 0); }
	public OpAtSearch(): TerminalNode | undefined { return this.tryGetToken(interviewParser.OpAtSearch, 0); }
	public OpAtLicense(): TerminalNode | undefined { return this.tryGetToken(interviewParser.OpAtLicense, 0); }
	public OpAtCopyright(): TerminalNode | undefined { return this.tryGetToken(interviewParser.OpAtCopyright, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return interviewParser.RULE_image_chained; }
	// @Override
	public enterRule(listener: interviewParserListener): void {
		if (listener.enterImage_chained) {
			listener.enterImage_chained(this);
		}
	}
	// @Override
	public exitRule(listener: interviewParserListener): void {
		if (listener.exitImage_chained) {
			listener.exitImage_chained(this);
		}
	}
}


export class Image_chained4matchContext extends ParserRuleContext {
	public AtSrc(): TerminalNode | undefined { return this.tryGetToken(interviewParser.AtSrc, 0); }
	public COLON(): TerminalNode | undefined { return this.tryGetToken(interviewParser.COLON, 0); }
	public url(): UrlContext | undefined {
		return this.tryGetRuleContext(0, UrlContext);
	}
	public CL(): TerminalNode { return this.getToken(interviewParser.CL, 0); }
	public NUMERIC(): TerminalNode | undefined { return this.tryGetToken(interviewParser.NUMERIC, 0); }
	public AtWidth(): TerminalNode | undefined { return this.tryGetToken(interviewParser.AtWidth, 0); }
	public AtHeight(): TerminalNode | undefined { return this.tryGetToken(interviewParser.AtHeight, 0); }
	public OPATALT(): TerminalNode | undefined { return this.tryGetToken(interviewParser.OPATALT, 0); }
	public OpAtCaption(): TerminalNode | undefined { return this.tryGetToken(interviewParser.OpAtCaption, 0); }
	public OpAtSearch(): TerminalNode | undefined { return this.tryGetToken(interviewParser.OpAtSearch, 0); }
	public OpAtLicense(): TerminalNode | undefined { return this.tryGetToken(interviewParser.OpAtLicense, 0); }
	public OpAtCopyright(): TerminalNode | undefined { return this.tryGetToken(interviewParser.OpAtCopyright, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return interviewParser.RULE_image_chained4match; }
	// @Override
	public enterRule(listener: interviewParserListener): void {
		if (listener.enterImage_chained4match) {
			listener.enterImage_chained4match(this);
		}
	}
	// @Override
	public exitRule(listener: interviewParserListener): void {
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
	public get ruleIndex(): number { return interviewParser.RULE_audiobit; }
	// @Override
	public enterRule(listener: interviewParserListener): void {
		if (listener.enterAudiobit) {
			listener.enterAudiobit(this);
		}
	}
	// @Override
	public exitRule(listener: interviewParserListener): void {
		if (listener.exitAudiobit) {
			listener.exitAudiobit(this);
		}
	}
}


export class Audio_oneContext extends ParserRuleContext {
	public op_audio_format(): Op_audio_formatContext {
		return this.getRuleContext(0, Op_audio_formatContext);
	}
	public COLON(): TerminalNode { return this.getToken(interviewParser.COLON, 0); }
	public url(): UrlContext {
		return this.getRuleContext(0, UrlContext);
	}
	public CL(): TerminalNode[];
	public CL(i: number): TerminalNode;
	public CL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(interviewParser.CL);
		} else {
			return this.getToken(interviewParser.CL, i);
		}
	}
	public OPATALT(): TerminalNode | undefined { return this.tryGetToken(interviewParser.OPATALT, 0); }
	public words(): WordsContext | undefined {
		return this.tryGetRuleContext(0, WordsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return interviewParser.RULE_audio_one; }
	// @Override
	public enterRule(listener: interviewParserListener): void {
		if (listener.enterAudio_one) {
			listener.enterAudio_one(this);
		}
	}
	// @Override
	public exitRule(listener: interviewParserListener): void {
		if (listener.exitAudio_one) {
			listener.exitAudio_one(this);
		}
	}
}


export class Audio_formatContext extends ParserRuleContext {
	public AmpAudio(): TerminalNode | undefined { return this.tryGetToken(interviewParser.AmpAudio, 0); }
	public COLON(): TerminalNode | undefined { return this.tryGetToken(interviewParser.COLON, 0); }
	public Audio_type(): TerminalNode | undefined { return this.tryGetToken(interviewParser.Audio_type, 0); }
	public AmpAudioLink(): TerminalNode | undefined { return this.tryGetToken(interviewParser.AmpAudioLink, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return interviewParser.RULE_audio_format; }
	// @Override
	public enterRule(listener: interviewParserListener): void {
		if (listener.enterAudio_format) {
			listener.enterAudio_format(this);
		}
	}
	// @Override
	public exitRule(listener: interviewParserListener): void {
		if (listener.exitAudio_format) {
			listener.exitAudio_format(this);
		}
	}
}


export class Op_audio_formatContext extends ParserRuleContext {
	public OpAmpAudio(): TerminalNode | undefined { return this.tryGetToken(interviewParser.OpAmpAudio, 0); }
	public COLON(): TerminalNode | undefined { return this.tryGetToken(interviewParser.COLON, 0); }
	public Audio_type(): TerminalNode | undefined { return this.tryGetToken(interviewParser.Audio_type, 0); }
	public OpAmpAudioLink(): TerminalNode | undefined { return this.tryGetToken(interviewParser.OpAmpAudioLink, 0); }
	public OpAmpAudioEmbed(): TerminalNode | undefined { return this.tryGetToken(interviewParser.OpAmpAudioEmbed, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return interviewParser.RULE_op_audio_format; }
	// @Override
	public enterRule(listener: interviewParserListener): void {
		if (listener.enterOp_audio_format) {
			listener.enterOp_audio_format(this);
		}
	}
	// @Override
	public exitRule(listener: interviewParserListener): void {
		if (listener.exitOp_audio_format) {
			listener.exitOp_audio_format(this);
		}
	}
}


export class Resource_chainedContext extends ParserRuleContext {
	public COLON(): TerminalNode | undefined { return this.tryGetToken(interviewParser.COLON, 0); }
	public CL(): TerminalNode { return this.getToken(interviewParser.CL, 0); }
	public OPA(): TerminalNode | undefined { return this.tryGetToken(interviewParser.OPA, 0); }
	public s_and_w(): S_and_wContext[];
	public s_and_w(i: number): S_and_wContext;
	public s_and_w(i?: number): S_and_wContext | S_and_wContext[] {
		if (i === undefined) {
			return this.getRuleContexts(S_and_wContext);
		} else {
			return this.getRuleContext(i, S_and_wContext);
		}
	}
	public AtSrc(): TerminalNode | undefined { return this.tryGetToken(interviewParser.AtSrc, 0); }
	public S(): TerminalNode[];
	public S(i: number): TerminalNode;
	public S(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(interviewParser.S);
		} else {
			return this.getToken(interviewParser.S, i);
		}
	}
	public NL(): TerminalNode[];
	public NL(i: number): TerminalNode;
	public NL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(interviewParser.NL);
		} else {
			return this.getToken(interviewParser.NL, i);
		}
	}
	public NUMERIC(): TerminalNode | undefined { return this.tryGetToken(interviewParser.NUMERIC, 0); }
	public AtWidth(): TerminalNode | undefined { return this.tryGetToken(interviewParser.AtWidth, 0); }
	public AtHeight(): TerminalNode | undefined { return this.tryGetToken(interviewParser.AtHeight, 0); }
	public OPATALT(): TerminalNode | undefined { return this.tryGetToken(interviewParser.OPATALT, 0); }
	public OpAtCaption(): TerminalNode | undefined { return this.tryGetToken(interviewParser.OpAtCaption, 0); }
	public OpAtSearch(): TerminalNode | undefined { return this.tryGetToken(interviewParser.OpAtSearch, 0); }
	public OpAtLicense(): TerminalNode | undefined { return this.tryGetToken(interviewParser.OpAtLicense, 0); }
	public OpAtCopyright(): TerminalNode | undefined { return this.tryGetToken(interviewParser.OpAtCopyright, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return interviewParser.RULE_resource_chained; }
	// @Override
	public enterRule(listener: interviewParserListener): void {
		if (listener.enterResource_chained) {
			listener.enterResource_chained(this);
		}
	}
	// @Override
	public exitRule(listener: interviewParserListener): void {
		if (listener.exitResource_chained) {
			listener.exitResource_chained(this);
		}
	}
}


export class TelephoneContext extends ParserRuleContext {
	public TEL(): TerminalNode { return this.getToken(interviewParser.TEL, 0); }
	public PLUS(): TerminalNode { return this.getToken(interviewParser.PLUS, 0); }
	public NUMERIC(): TerminalNode { return this.getToken(interviewParser.NUMERIC, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return interviewParser.RULE_telephone; }
	// @Override
	public enterRule(listener: interviewParserListener): void {
		if (listener.enterTelephone) {
			listener.enterTelephone(this);
		}
	}
	// @Override
	public exitRule(listener: interviewParserListener): void {
		if (listener.exitTelephone) {
			listener.exitTelephone(this);
		}
	}
}


export class UrlContext extends ParserRuleContext {
	public URL(): TerminalNode { return this.getToken(interviewParser.URL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return interviewParser.RULE_url; }
	// @Override
	public enterRule(listener: interviewParserListener): void {
		if (listener.enterUrl) {
			listener.enterUrl(this);
		}
	}
	// @Override
	public exitRule(listener: interviewParserListener): void {
		if (listener.exitUrl) {
			listener.exitUrl(this);
		}
	}
}


export class ItemContext extends ParserRuleContext {
	public OPITEM(): TerminalNode | undefined { return this.tryGetToken(interviewParser.OPITEM, 0); }
	public CL(): TerminalNode { return this.getToken(interviewParser.CL, 0); }
	public COLON(): TerminalNode[];
	public COLON(i: number): TerminalNode;
	public COLON(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(interviewParser.COLON);
		} else {
			return this.getToken(interviewParser.COLON, i);
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
			return this.getTokens(interviewParser.S);
		} else {
			return this.getToken(interviewParser.S, i);
		}
	}
	public OPC(): TerminalNode | undefined { return this.tryGetToken(interviewParser.OPC, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return interviewParser.RULE_item; }
	// @Override
	public enterRule(listener: interviewParserListener): void {
		if (listener.enterItem) {
			listener.enterItem(this);
		}
	}
	// @Override
	public exitRule(listener: interviewParserListener): void {
		if (listener.exitItem) {
			listener.exitItem(this);
		}
	}
}


export class LeadContext extends ParserRuleContext {
	public OPLEAD(): TerminalNode | undefined { return this.tryGetToken(interviewParser.OPLEAD, 0); }
	public s_and_w(): S_and_wContext[];
	public s_and_w(i: number): S_and_wContext;
	public s_and_w(i?: number): S_and_wContext | S_and_wContext[] {
		if (i === undefined) {
			return this.getRuleContexts(S_and_wContext);
		} else {
			return this.getRuleContext(i, S_and_wContext);
		}
	}
	public CL(): TerminalNode { return this.getToken(interviewParser.CL, 0); }
	public COLON(): TerminalNode[];
	public COLON(i: number): TerminalNode;
	public COLON(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(interviewParser.COLON);
		} else {
			return this.getToken(interviewParser.COLON, i);
		}
	}
	public OPPAGENUMBER(): TerminalNode | undefined { return this.tryGetToken(interviewParser.OPPAGENUMBER, 0); }
	public OPMARGINNUMBER(): TerminalNode | undefined { return this.tryGetToken(interviewParser.OPMARGINNUMBER, 0); }
	public OPC(): TerminalNode | undefined { return this.tryGetToken(interviewParser.OPC, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return interviewParser.RULE_lead; }
	// @Override
	public enterRule(listener: interviewParserListener): void {
		if (listener.enterLead) {
			listener.enterLead(this);
		}
	}
	// @Override
	public exitRule(listener: interviewParserListener): void {
		if (listener.exitLead) {
			listener.exitLead(this);
		}
	}
}


export class AnglerefContext extends ParserRuleContext {
	public OPRANGLES(): TerminalNode | undefined { return this.tryGetToken(interviewParser.OPRANGLES, 0); }
	public CL(): TerminalNode { return this.getToken(interviewParser.CL, 0); }
	public s_and_w(): S_and_wContext | undefined {
		return this.tryGetRuleContext(0, S_and_wContext);
	}
	public OPRANGLEL(): TerminalNode | undefined { return this.tryGetToken(interviewParser.OPRANGLEL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return interviewParser.RULE_angleref; }
	// @Override
	public enterRule(listener: interviewParserListener): void {
		if (listener.enterAngleref) {
			listener.enterAngleref(this);
		}
	}
	// @Override
	public exitRule(listener: interviewParserListener): void {
		if (listener.exitAngleref) {
			listener.exitAngleref(this);
		}
	}
}


export class ExampleContext extends ParserRuleContext {
	public AtExamplecl(): TerminalNode | undefined { return this.tryGetToken(interviewParser.AtExamplecl, 0); }
	public AtExampleWithStr(): TerminalNode | undefined { return this.tryGetToken(interviewParser.AtExampleWithStr, 0); }
	public AtExamplecol(): TerminalNode | undefined { return this.tryGetToken(interviewParser.AtExamplecol, 0); }
	public EOF(): TerminalNode | undefined { return this.tryGetToken(interviewParser.EOF, 0); }
	public SENTENCE(): TerminalNode | undefined { return this.tryGetToken(interviewParser.SENTENCE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return interviewParser.RULE_example; }
	// @Override
	public enterRule(listener: interviewParserListener): void {
		if (listener.enterExample) {
			listener.enterExample(this);
		}
	}
	// @Override
	public exitRule(listener: interviewParserListener): void {
		if (listener.exitExample) {
			listener.exitExample(this);
		}
	}
}


export class Bracketed_textContext extends ParserRuleContext {
	public BracEnclose(): TerminalNode { return this.getToken(interviewParser.BracEnclose, 0); }
	public CL(): TerminalNode | undefined { return this.tryGetToken(interviewParser.CL, 0); }
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
			return this.getTokens(interviewParser.NL);
		} else {
			return this.getToken(interviewParser.NL, i);
		}
	}
	public S(): TerminalNode[];
	public S(i: number): TerminalNode;
	public S(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(interviewParser.S);
		} else {
			return this.getToken(interviewParser.S, i);
		}
	}
	public EOF(): TerminalNode | undefined { return this.tryGetToken(interviewParser.EOF, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return interviewParser.RULE_bracketed_text; }
	// @Override
	public enterRule(listener: interviewParserListener): void {
		if (listener.enterBracketed_text) {
			listener.enterBracketed_text(this);
		}
	}
	// @Override
	public exitRule(listener: interviewParserListener): void {
		if (listener.exitBracketed_text) {
			listener.exitBracketed_text(this);
		}
	}
}


export class ReferenceContext extends ParserRuleContext {
	public AtReference(): TerminalNode { return this.getToken(interviewParser.AtReference, 0); }
	public CL(): TerminalNode | undefined { return this.tryGetToken(interviewParser.CL, 0); }
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
			return this.getTokens(interviewParser.COLON);
		} else {
			return this.getToken(interviewParser.COLON, i);
		}
	}
	public URL(): TerminalNode[];
	public URL(i: number): TerminalNode;
	public URL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(interviewParser.URL);
		} else {
			return this.getToken(interviewParser.URL, i);
		}
	}
	public NL(): TerminalNode[];
	public NL(i: number): TerminalNode;
	public NL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(interviewParser.NL);
		} else {
			return this.getToken(interviewParser.NL, i);
		}
	}
	public EOF(): TerminalNode | undefined { return this.tryGetToken(interviewParser.EOF, 0); }
	public S(): TerminalNode[];
	public S(i: number): TerminalNode;
	public S(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(interviewParser.S);
		} else {
			return this.getToken(interviewParser.S, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return interviewParser.RULE_reference; }
	// @Override
	public enterRule(listener: interviewParserListener): void {
		if (listener.enterReference) {
			listener.enterReference(this);
		}
	}
	// @Override
	public exitRule(listener: interviewParserListener): void {
		if (listener.exitReference) {
			listener.exitReference(this);
		}
	}
}


export class ProgressContext extends ParserRuleContext {
	public AtProgress(): TerminalNode { return this.getToken(interviewParser.AtProgress, 0); }
	public s_and_w(): S_and_wContext {
		return this.getRuleContext(0, S_and_wContext);
	}
	public CL(): TerminalNode { return this.getToken(interviewParser.CL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return interviewParser.RULE_progress; }
	// @Override
	public enterRule(listener: interviewParserListener): void {
		if (listener.enterProgress) {
			listener.enterProgress(this);
		}
	}
	// @Override
	public exitRule(listener: interviewParserListener): void {
		if (listener.exitProgress) {
			listener.exitProgress(this);
		}
	}
}


export class DatepropContext extends ParserRuleContext {
	public AtDate(): TerminalNode { return this.getToken(interviewParser.AtDate, 0); }
	public CL(): TerminalNode { return this.getToken(interviewParser.CL, 0); }
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
			return this.getTokens(interviewParser.COLON);
		} else {
			return this.getToken(interviewParser.COLON, i);
		}
	}
	public NL(): TerminalNode[];
	public NL(i: number): TerminalNode;
	public NL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(interviewParser.NL);
		} else {
			return this.getToken(interviewParser.NL, i);
		}
	}
	public dateprop_chained(): Dateprop_chainedContext | undefined {
		return this.tryGetRuleContext(0, Dateprop_chainedContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return interviewParser.RULE_dateprop; }
	// @Override
	public enterRule(listener: interviewParserListener): void {
		if (listener.enterDateprop) {
			listener.enterDateprop(this);
		}
	}
	// @Override
	public exitRule(listener: interviewParserListener): void {
		if (listener.exitDateprop) {
			listener.exitDateprop(this);
		}
	}
}


export class Dateprop_chainedContext extends ParserRuleContext {
	public AtDate(): TerminalNode { return this.getToken(interviewParser.AtDate, 0); }
	public CL(): TerminalNode { return this.getToken(interviewParser.CL, 0); }
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
			return this.getTokens(interviewParser.COLON);
		} else {
			return this.getToken(interviewParser.COLON, i);
		}
	}
	public NL(): TerminalNode[];
	public NL(i: number): TerminalNode;
	public NL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(interviewParser.NL);
		} else {
			return this.getToken(interviewParser.NL, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return interviewParser.RULE_dateprop_chained; }
	// @Override
	public enterRule(listener: interviewParserListener): void {
		if (listener.enterDateprop_chained) {
			listener.enterDateprop_chained(this);
		}
	}
	// @Override
	public exitRule(listener: interviewParserListener): void {
		if (listener.exitDateprop_chained) {
			listener.exitDateprop_chained(this);
		}
	}
}


export class InstructionContext extends ParserRuleContext {
	public OPB(): TerminalNode { return this.getToken(interviewParser.OPB, 0); }
	public CL(): TerminalNode | undefined { return this.tryGetToken(interviewParser.CL, 0); }
	public NL(): TerminalNode[];
	public NL(i: number): TerminalNode;
	public NL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(interviewParser.NL);
		} else {
			return this.getToken(interviewParser.NL, i);
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
			return this.getTokens(interviewParser.S);
		} else {
			return this.getToken(interviewParser.S, i);
		}
	}
	public EOF(): TerminalNode | undefined { return this.tryGetToken(interviewParser.EOF, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return interviewParser.RULE_instruction; }
	// @Override
	public enterRule(listener: interviewParserListener): void {
		if (listener.enterInstruction) {
			listener.enterInstruction(this);
		}
	}
	// @Override
	public exitRule(listener: interviewParserListener): void {
		if (listener.exitInstruction) {
			listener.exitInstruction(this);
		}
	}
}


export class HintContext extends ParserRuleContext {
	public OPQ(): TerminalNode { return this.getToken(interviewParser.OPQ, 0); }
	public CL(): TerminalNode[];
	public CL(i: number): TerminalNode;
	public CL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(interviewParser.CL);
		} else {
			return this.getToken(interviewParser.CL, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return interviewParser.RULE_hint; }
	// @Override
	public enterRule(listener: interviewParserListener): void {
		if (listener.enterHint) {
			listener.enterHint(this);
		}
	}
	// @Override
	public exitRule(listener: interviewParserListener): void {
		if (listener.exitHint) {
			listener.exitHint(this);
		}
	}
}


export class TitleContext extends ParserRuleContext {
	public OPHASH(): TerminalNode { return this.getToken(interviewParser.OPHASH, 0); }
	public CL(): TerminalNode | undefined { return this.tryGetToken(interviewParser.CL, 0); }
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
			return this.getTokens(interviewParser.NL);
		} else {
			return this.getToken(interviewParser.NL, i);
		}
	}
	public EOF(): TerminalNode | undefined { return this.tryGetToken(interviewParser.EOF, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return interviewParser.RULE_title; }
	// @Override
	public enterRule(listener: interviewParserListener): void {
		if (listener.enterTitle) {
			listener.enterTitle(this);
		}
	}
	// @Override
	public exitRule(listener: interviewParserListener): void {
		if (listener.exitTitle) {
			listener.exitTitle(this);
		}
	}
}


export class Bool_labelContext extends ParserRuleContext {
	public AtLabeltrue(): TerminalNode | undefined { return this.tryGetToken(interviewParser.AtLabeltrue, 0); }
	public s_and_w(): S_and_wContext {
		return this.getRuleContext(0, S_and_wContext);
	}
	public CL(): TerminalNode { return this.getToken(interviewParser.CL, 0); }
	public AtLabelfalse(): TerminalNode | undefined { return this.tryGetToken(interviewParser.AtLabelfalse, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return interviewParser.RULE_bool_label; }
	// @Override
	public enterRule(listener: interviewParserListener): void {
		if (listener.enterBool_label) {
			listener.enterBool_label(this);
		}
	}
	// @Override
	public exitRule(listener: interviewParserListener): void {
		if (listener.exitBool_label) {
			listener.exitBool_label(this);
		}
	}
}


export class Progress_pointsContext extends ParserRuleContext {
	public AtProgressPoints(): TerminalNode { return this.getToken(interviewParser.AtProgressPoints, 0); }
	public COLON(): TerminalNode { return this.getToken(interviewParser.COLON, 0); }
	public NUMERIC(): TerminalNode | undefined { return this.tryGetToken(interviewParser.NUMERIC, 0); }
	public CL(): TerminalNode { return this.getToken(interviewParser.CL, 0); }
	public s_and_w(): S_and_wContext | undefined {
		return this.tryGetRuleContext(0, S_and_wContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return interviewParser.RULE_progress_points; }
	// @Override
	public enterRule(listener: interviewParserListener): void {
		if (listener.enterProgress_points) {
			listener.enterProgress_points(this);
		}
	}
	// @Override
	public exitRule(listener: interviewParserListener): void {
		if (listener.exitProgress_points) {
			listener.exitProgress_points(this);
		}
	}
}


export class IstrackedContext extends ParserRuleContext {
	public OpAtIsTracked(): TerminalNode { return this.getToken(interviewParser.OpAtIsTracked, 0); }
	public s_and_w(): S_and_wContext {
		return this.getRuleContext(0, S_and_wContext);
	}
	public CL(): TerminalNode { return this.getToken(interviewParser.CL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return interviewParser.RULE_istracked; }
	// @Override
	public enterRule(listener: interviewParserListener): void {
		if (listener.enterIstracked) {
			listener.enterIstracked(this);
		}
	}
	// @Override
	public exitRule(listener: interviewParserListener): void {
		if (listener.exitIstracked) {
			listener.exitIstracked(this);
		}
	}
}


export class IsinfoonlyContext extends ParserRuleContext {
	public OpAtIsInfoOnly(): TerminalNode { return this.getToken(interviewParser.OpAtIsInfoOnly, 0); }
	public s_and_w(): S_and_wContext {
		return this.getRuleContext(0, S_and_wContext);
	}
	public CL(): TerminalNode { return this.getToken(interviewParser.CL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return interviewParser.RULE_isinfoonly; }
	// @Override
	public enterRule(listener: interviewParserListener): void {
		if (listener.enterIsinfoonly) {
			listener.enterIsinfoonly(this);
		}
	}
	// @Override
	public exitRule(listener: interviewParserListener): void {
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
			return this.getTokens(interviewParser.NL);
		} else {
			return this.getToken(interviewParser.NL, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return interviewParser.RULE_atdef; }
	// @Override
	public enterRule(listener: interviewParserListener): void {
		if (listener.enterAtdef) {
			listener.enterAtdef(this);
		}
	}
	// @Override
	public exitRule(listener: interviewParserListener): void {
		if (listener.exitAtdef) {
			listener.exitAtdef(this);
		}
	}
}


export class Atdef_Context extends ParserRuleContext {
	public OPA(): TerminalNode | undefined { return this.tryGetToken(interviewParser.OPA, 0); }
	public s_and_w(): S_and_wContext[];
	public s_and_w(i: number): S_and_wContext;
	public s_and_w(i?: number): S_and_wContext | S_and_wContext[] {
		if (i === undefined) {
			return this.getRuleContexts(S_and_wContext);
		} else {
			return this.getRuleContext(i, S_and_wContext);
		}
	}
	public CL(): TerminalNode | undefined { return this.tryGetToken(interviewParser.CL, 0); }
	public COLON(): TerminalNode[];
	public COLON(i: number): TerminalNode;
	public COLON(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(interviewParser.COLON);
		} else {
			return this.getToken(interviewParser.COLON, i);
		}
	}
	public DBLCOLON(): TerminalNode | undefined { return this.tryGetToken(interviewParser.DBLCOLON, 0); }
	public NL(): TerminalNode[];
	public NL(i: number): TerminalNode;
	public NL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(interviewParser.NL);
		} else {
			return this.getToken(interviewParser.NL, i);
		}
	}
	public OpAtCopyright(): TerminalNode | undefined { return this.tryGetToken(interviewParser.OpAtCopyright, 0); }
	public AtSampleSolution(): TerminalNode | undefined { return this.tryGetToken(interviewParser.AtSampleSolution, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return interviewParser.RULE_atdef_; }
	// @Override
	public enterRule(listener: interviewParserListener): void {
		if (listener.enterAtdef_) {
			listener.enterAtdef_(this);
		}
	}
	// @Override
	public exitRule(listener: interviewParserListener): void {
		if (listener.exitAtdef_) {
			listener.exitAtdef_(this);
		}
	}
}


export class DollaransContext extends ParserRuleContext {
	public OPDOLL(): TerminalNode { return this.getToken(interviewParser.OPDOLL, 0); }
	public CL(): TerminalNode | undefined { return this.tryGetToken(interviewParser.CL, 0); }
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
			return this.getTokens(interviewParser.COLON);
		} else {
			return this.getToken(interviewParser.COLON, i);
		}
	}
	public NL(): TerminalNode[];
	public NL(i: number): TerminalNode;
	public NL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(interviewParser.NL);
		} else {
			return this.getToken(interviewParser.NL, i);
		}
	}
	public EOF(): TerminalNode | undefined { return this.tryGetToken(interviewParser.EOF, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return interviewParser.RULE_dollarans; }
	// @Override
	public enterRule(listener: interviewParserListener): void {
		if (listener.enterDollarans) {
			listener.enterDollarans(this);
		}
	}
	// @Override
	public exitRule(listener: interviewParserListener): void {
		if (listener.exitDollarans) {
			listener.exitDollarans(this);
		}
	}
}


export class AnchorContext extends ParserRuleContext {
	public OPDANGLE(): TerminalNode { return this.getToken(interviewParser.OPDANGLE, 0); }
	public CL(): TerminalNode { return this.getToken(interviewParser.CL, 0); }
	public s_and_w(): S_and_wContext | undefined {
		return this.tryGetRuleContext(0, S_and_wContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return interviewParser.RULE_anchor; }
	// @Override
	public enterRule(listener: interviewParserListener): void {
		if (listener.enterAnchor) {
			listener.enterAnchor(this);
		}
	}
	// @Override
	public exitRule(listener: interviewParserListener): void {
		if (listener.exitAnchor) {
			listener.exitAnchor(this);
		}
	}
}


export class DcolonContext extends ParserRuleContext {
	public DBLCOLON(): TerminalNode { return this.getToken(interviewParser.DBLCOLON, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return interviewParser.RULE_dcolon; }
	// @Override
	public enterRule(listener: interviewParserListener): void {
		if (listener.enterDcolon) {
			listener.enterDcolon(this);
		}
	}
	// @Override
	public exitRule(listener: interviewParserListener): void {
		if (listener.exitDcolon) {
			listener.exitDcolon(this);
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
			return this.getTokens(interviewParser.NL);
		} else {
			return this.getToken(interviewParser.NL, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return interviewParser.RULE_lines; }
	// @Override
	public enterRule(listener: interviewParserListener): void {
		if (listener.enterLines) {
			listener.enterLines(this);
		}
	}
	// @Override
	public exitRule(listener: interviewParserListener): void {
		if (listener.exitLines) {
			listener.exitLines(this);
		}
	}
}


export class S_and_wContext extends ParserRuleContext {
	public STRING(): TerminalNode | undefined { return this.tryGetToken(interviewParser.STRING, 0); }
	public NUMERIC(): TerminalNode | undefined { return this.tryGetToken(interviewParser.NUMERIC, 0); }
	public S(): TerminalNode[];
	public S(i: number): TerminalNode;
	public S(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(interviewParser.S);
		} else {
			return this.getToken(interviewParser.S, i);
		}
	}
	public words(): WordsContext | undefined {
		return this.tryGetRuleContext(0, WordsContext);
	}
	public OPS(): TerminalNode | undefined { return this.tryGetToken(interviewParser.OPS, 0); }
	public s_and_w(): S_and_wContext | undefined {
		return this.tryGetRuleContext(0, S_and_wContext);
	}
	public CL(): TerminalNode | undefined { return this.tryGetToken(interviewParser.CL, 0); }
	public NL(): TerminalNode | undefined { return this.tryGetToken(interviewParser.NL, 0); }
	public COLON(): TerminalNode | undefined { return this.tryGetToken(interviewParser.COLON, 0); }
	public AMP(): TerminalNode | undefined { return this.tryGetToken(interviewParser.AMP, 0); }
	public DBLCOLON(): TerminalNode | undefined { return this.tryGetToken(interviewParser.DBLCOLON, 0); }
	public DBLEQ(): TerminalNode | undefined { return this.tryGetToken(interviewParser.DBLEQ, 0); }
	public URL(): TerminalNode | undefined { return this.tryGetToken(interviewParser.URL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return interviewParser.RULE_s_and_w; }
	// @Override
	public enterRule(listener: interviewParserListener): void {
		if (listener.enterS_and_w) {
			listener.enterS_and_w(this);
		}
	}
	// @Override
	public exitRule(listener: interviewParserListener): void {
		if (listener.exitS_and_w) {
			listener.exitS_and_w(this);
		}
	}
}


export class ClnspContext extends ParserRuleContext {
	public CL(): TerminalNode { return this.getToken(interviewParser.CL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return interviewParser.RULE_clnsp; }
	// @Override
	public enterRule(listener: interviewParserListener): void {
		if (listener.enterClnsp) {
			listener.enterClnsp(this);
		}
	}
	// @Override
	public exitRule(listener: interviewParserListener): void {
		if (listener.exitClnsp) {
			listener.exitClnsp(this);
		}
	}
}


export class SsplContext extends ParserRuleContext {
	public SSPL(): TerminalNode | undefined { return this.tryGetToken(interviewParser.SSPL, 0); }
	public SSPL2(): TerminalNode | undefined { return this.tryGetToken(interviewParser.SSPL2, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return interviewParser.RULE_sspl; }
	// @Override
	public enterRule(listener: interviewParserListener): void {
		if (listener.enterSspl) {
			listener.enterSspl(this);
		}
	}
	// @Override
	public exitRule(listener: interviewParserListener): void {
		if (listener.exitSspl) {
			listener.exitSspl(this);
		}
	}
}


export class WordsContext extends ParserRuleContext {
	public STRING(): TerminalNode[];
	public STRING(i: number): TerminalNode;
	public STRING(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(interviewParser.STRING);
		} else {
			return this.getToken(interviewParser.STRING, i);
		}
	}
	public SENTENCE(): TerminalNode[];
	public SENTENCE(i: number): TerminalNode;
	public SENTENCE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(interviewParser.SENTENCE);
		} else {
			return this.getToken(interviewParser.SENTENCE, i);
		}
	}
	public NOTBITMARK(): TerminalNode[];
	public NOTBITMARK(i: number): TerminalNode;
	public NOTBITMARK(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(interviewParser.NOTBITMARK);
		} else {
			return this.getToken(interviewParser.NOTBITMARK, i);
		}
	}
	public ELIPSIS(): TerminalNode[];
	public ELIPSIS(i: number): TerminalNode;
	public ELIPSIS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(interviewParser.ELIPSIS);
		} else {
			return this.getToken(interviewParser.ELIPSIS, i);
		}
	}
	public BARSTRING(): TerminalNode[];
	public BARSTRING(i: number): TerminalNode;
	public BARSTRING(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(interviewParser.BARSTRING);
		} else {
			return this.getToken(interviewParser.BARSTRING, i);
		}
	}
	public AMP(): TerminalNode[];
	public AMP(i: number): TerminalNode;
	public AMP(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(interviewParser.AMP);
		} else {
			return this.getToken(interviewParser.AMP, i);
		}
	}
	public Greater(): TerminalNode[];
	public Greater(i: number): TerminalNode;
	public Greater(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(interviewParser.Greater);
		} else {
			return this.getToken(interviewParser.Greater, i);
		}
	}
	public Less(): TerminalNode[];
	public Less(i: number): TerminalNode;
	public Less(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(interviewParser.Less);
		} else {
			return this.getToken(interviewParser.Less, i);
		}
	}
	public RightArrow(): TerminalNode[];
	public RightArrow(i: number): TerminalNode;
	public RightArrow(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(interviewParser.RightArrow);
		} else {
			return this.getToken(interviewParser.RightArrow, i);
		}
	}
	public RightAngle(): TerminalNode[];
	public RightAngle(i: number): TerminalNode;
	public RightAngle(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(interviewParser.RightAngle);
		} else {
			return this.getToken(interviewParser.RightAngle, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return interviewParser.RULE_words; }
	// @Override
	public enterRule(listener: interviewParserListener): void {
		if (listener.enterWords) {
			listener.enterWords(this);
		}
	}
	// @Override
	public exitRule(listener: interviewParserListener): void {
		if (listener.exitWords) {
			listener.exitWords(this);
		}
	}
}


export class SpContext extends ParserRuleContext {
	public S(): TerminalNode { return this.getToken(interviewParser.S, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return interviewParser.RULE_sp; }
	// @Override
	public enterRule(listener: interviewParserListener): void {
		if (listener.enterSp) {
			listener.enterSp(this);
		}
	}
	// @Override
	public exitRule(listener: interviewParserListener): void {
		if (listener.exitSp) {
			listener.exitSp(this);
		}
	}
}


