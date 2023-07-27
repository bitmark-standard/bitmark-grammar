// Generated from ./antlr/matchParser.g4 by ANTLR 4.9.0-SNAPSHOT


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

import { matchParserListener } from "./matchParserListener";

export class matchParser extends Parser {
	public static readonly OPDOT = 1;
	public static readonly S = 2;
	public static readonly OP = 3;
	public static readonly BitMatch = 4;
	public static readonly BitMatchmatrix = 5;
	public static readonly BitMatchall = 6;
	public static readonly BitMatchrev = 7;
	public static readonly BitMatchallrev = 8;
	public static readonly BitMatchpic = 9;
	public static readonly BitMatchaudio = 10;
	public static readonly BitMatchsolgrp = 11;
	public static readonly OPDOLL = 12;
	public static readonly OPBUL = 13;
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
	public static readonly DOT = 35;
	public static readonly RightAngle = 36;
	public static readonly RightArrow = 37;
	public static readonly EQ = 38;
	public static readonly HSPL = 39;
	public static readonly OR = 40;
	public static readonly TENSE = 41;
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
	public static readonly OpAmpImageWAudio = 160;
	public static readonly RULE_bitmark = 0;
	public static readonly RULE_bitmark_ = 1;
	public static readonly RULE_matches = 2;
	public static readonly RULE_match_ = 3;
	public static readonly RULE_match_matrix = 4;
	public static readonly RULE_match_solution_grouped = 5;
	public static readonly RULE_match_reverse = 6;
	public static readonly RULE_match_all_reverse = 7;
	public static readonly RULE_match_picture = 8;
	public static readonly RULE_match_audio = 9;
	public static readonly RULE_match_all = 10;
	public static readonly RULE_bitElem = 11;
	public static readonly RULE_gap = 12;
	public static readonly RULE_single_gap = 13;
	public static readonly RULE_ml_example = 14;
	public static readonly RULE_longans = 15;
	public static readonly RULE_shortans = 16;
	public static readonly RULE_resource = 17;
	public static readonly RULE_pair_heading = 18;
	public static readonly RULE_pair_heading_multi = 19;
	public static readonly RULE_key_title = 20;
	public static readonly RULE_value_title = 21;
	public static readonly RULE_value_title_multi = 22;
	public static readonly RULE_pairs = 23;
	public static readonly RULE_pqpair = 24;
	public static readonly RULE_pquery = 25;
	public static readonly RULE_pquery__ = 26;
	public static readonly RULE_tense = 27;
	public static readonly RULE_panswer = 28;
	public static readonly RULE_panswer__ = 29;
	public static readonly RULE_pair_images = 30;
	public static readonly RULE_pair_image = 31;
	public static readonly RULE_pair_audios = 32;
	public static readonly RULE_pair_audio = 33;
	public static readonly RULE_pair_multivals = 34;
	public static readonly RULE_pair_multival = 35;
	public static readonly RULE_pairmultival_image = 36;
	public static readonly RULE_pairmultival_audio = 37;
	public static readonly RULE_mpquery = 38;
	public static readonly RULE_mpquery__ = 39;
	public static readonly RULE_mpanswer = 40;
	public static readonly RULE_mpanswer__ = 41;
	public static readonly RULE_pimagebit = 42;
	public static readonly RULE_pimage_one = 43;
	public static readonly RULE_paudiobit = 44;
	public static readonly RULE_bullet_item = 45;
	public static readonly RULE_atpoint = 46;
	public static readonly RULE_format = 47;
	public static readonly RULE_resource_format = 48;
	public static readonly RULE_resource_format_extra = 49;
	public static readonly RULE_format2 = 50;
	public static readonly RULE_image_format = 51;
	public static readonly RULE_video_format = 52;
	public static readonly RULE_article_format = 53;
	public static readonly RULE_document_format = 54;
	public static readonly RULE_app_format = 55;
	public static readonly RULE_website_format = 56;
	public static readonly RULE_stillimagefilm_format = 57;
	public static readonly RULE_op_article_format = 58;
	public static readonly RULE_op_document_format = 59;
	public static readonly RULE_op_app_format = 60;
	public static readonly RULE_op_website_format = 61;
	public static readonly RULE_op_video_format = 62;
	public static readonly RULE_op_stillimagefilm_format = 63;
	public static readonly RULE_articlebit = 64;
	public static readonly RULE_documentbit = 65;
	public static readonly RULE_websitebit = 66;
	public static readonly RULE_appbit = 67;
	public static readonly RULE_stillimagefilmbit = 68;
	public static readonly RULE_stillimg_one = 69;
	public static readonly RULE_videobit = 70;
	public static readonly RULE_video_one = 71;
	public static readonly RULE_imagebit = 72;
	public static readonly RULE_image_one = 73;
	public static readonly RULE_op_image_format = 74;
	public static readonly RULE_image_chained = 75;
	public static readonly RULE_image_chained4match = 76;
	public static readonly RULE_audiobit = 77;
	public static readonly RULE_audio_one = 78;
	public static readonly RULE_audio_format = 79;
	public static readonly RULE_op_audio_format = 80;
	public static readonly RULE_resource_chained = 81;
	public static readonly RULE_telephone = 82;
	public static readonly RULE_url = 83;
	public static readonly RULE_item = 84;
	public static readonly RULE_lead = 85;
	public static readonly RULE_angleref = 86;
	public static readonly RULE_example = 87;
	public static readonly RULE_bracketed_text = 88;
	public static readonly RULE_reference = 89;
	public static readonly RULE_progress = 90;
	public static readonly RULE_dateprop = 91;
	public static readonly RULE_dateprop_chained = 92;
	public static readonly RULE_instruction = 93;
	public static readonly RULE_hint = 94;
	public static readonly RULE_title = 95;
	public static readonly RULE_bool_label = 96;
	public static readonly RULE_progress_points = 97;
	public static readonly RULE_istracked = 98;
	public static readonly RULE_isinfoonly = 99;
	public static readonly RULE_atdef = 100;
	public static readonly RULE_atdef_ = 101;
	public static readonly RULE_dollarans = 102;
	public static readonly RULE_anchor = 103;
	public static readonly RULE_dcolon = 104;
	public static readonly RULE_colcoltext = 105;
	public static readonly RULE_lines = 106;
	public static readonly RULE_list_line = 107;
	public static readonly RULE_s_and_w = 108;
	public static readonly RULE_dclines = 109;
	public static readonly RULE_opdoll = 110;
	public static readonly RULE_opu = 111;
	public static readonly RULE_opb = 112;
	public static readonly RULE_opq = 113;
	public static readonly RULE_opa = 114;
	public static readonly RULE_opp = 115;
	public static readonly RULE_opm = 116;
	public static readonly RULE_ops = 117;
	public static readonly RULE_opr = 118;
	public static readonly RULE_opc = 119;
	public static readonly RULE_clnsp = 120;
	public static readonly RULE_or_ = 121;
	public static readonly RULE_words = 122;
	public static readonly RULE_sp = 123;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"bitmark", "bitmark_", "matches", "match_", "match_matrix", "match_solution_grouped", 
		"match_reverse", "match_all_reverse", "match_picture", "match_audio", 
		"match_all", "bitElem", "gap", "single_gap", "ml_example", "longans", 
		"shortans", "resource", "pair_heading", "pair_heading_multi", "key_title", 
		"value_title", "value_title_multi", "pairs", "pqpair", "pquery", "pquery__", 
		"tense", "panswer", "panswer__", "pair_images", "pair_image", "pair_audios", 
		"pair_audio", "pair_multivals", "pair_multival", "pairmultival_image", 
		"pairmultival_audio", "mpquery", "mpquery__", "mpanswer", "mpanswer__", 
		"pimagebit", "pimage_one", "paudiobit", "bullet_item", "atpoint", "format", 
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
		"isinfoonly", "atdef", "atdef_", "dollarans", "anchor", "dcolon", "colcoltext", 
		"lines", "list_line", "s_and_w", "dclines", "opdoll", "opu", "opb", "opq", 
		"opa", "opp", "opm", "ops", "opr", "opc", "clnsp", "or_", "words", "sp",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'[.'", undefined, "'['", undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, "'[#'", "']'", 
		"':'", "'&'", "'::'", "'+'", "'.@'", "'>'", "'<'", "'.'", "'\u25BA'", 
		"'\u2192'", "'=='", "'==='", undefined, undefined, undefined, undefined, 
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
		undefined, "OPDOT", "S", "OP", "BitMatch", "BitMatchmatrix", "BitMatchall", 
		"BitMatchrev", "BitMatchallrev", "BitMatchpic", "BitMatchaudio", "BitMatchsolgrp", 
		"OPDOLL", "OPBUL", "OPRANGLES", "OPRANGLEL", "OPDANGLE", "OPU", "OPB", 
		"OPQ", "OPA", "OPP", "OPM", "OPS", "OPR", "OPC", "OPHASH", "CL", "COLON", 
		"AMP", "DBLCOLON", "PLUS", "DotAt", "Greater", "Less", "DOT", "RightAngle", 
		"RightArrow", "EQ", "HSPL", "OR", "TENSE", "COMMENT", "DCANY", "Image_type", 
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
		"TEL", "DotArticleAtt", "STAR", "URL", "LIST_LINE", "ENCLBARS", "OpAmpImageWAudio",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(matchParser._LITERAL_NAMES, matchParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return matchParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "matchParser.g4"; }

	// @Override
	public get ruleNames(): string[] { return matchParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return matchParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(matchParser._ATN, this);
	}
	// @RuleVersion(0)
	public bitmark(): BitmarkContext {
		let _localctx: BitmarkContext = new BitmarkContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, matchParser.RULE_bitmark);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 261;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 248;
				this.bitmark_();
				this.state = 258;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === matchParser.S || _la === matchParser.NL) {
					{
					{
					this.state = 252;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === matchParser.S) {
						{
						{
						this.state = 249;
						this.match(matchParser.S);
						}
						}
						this.state = 254;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					this.state = 255;
					this.match(matchParser.NL);
					}
					}
					this.state = 260;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
				}
				this.state = 263;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << matchParser.BitMatch) | (1 << matchParser.BitMatchmatrix) | (1 << matchParser.BitMatchall) | (1 << matchParser.BitMatchrev) | (1 << matchParser.BitMatchallrev) | (1 << matchParser.BitMatchpic) | (1 << matchParser.BitMatchaudio) | (1 << matchParser.BitMatchsolgrp))) !== 0));
			this.state = 265;
			this.match(matchParser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 2, matchParser.RULE_bitmark_);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 267;
			this.matches();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public matches(): MatchesContext {
		let _localctx: MatchesContext = new MatchesContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, matchParser.RULE_matches);
		try {
			this.state = 277;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case matchParser.BitMatch:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 269;
				this.match_();
				}
				break;
			case matchParser.BitMatchmatrix:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 270;
				this.match_matrix();
				}
				break;
			case matchParser.BitMatchall:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 271;
				this.match_all();
				}
				break;
			case matchParser.BitMatchallrev:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 272;
				this.match_all_reverse();
				}
				break;
			case matchParser.BitMatchrev:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 273;
				this.match_reverse();
				}
				break;
			case matchParser.BitMatchpic:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 274;
				this.match_picture();
				}
				break;
			case matchParser.BitMatchaudio:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 275;
				this.match_audio();
				}
				break;
			case matchParser.BitMatchsolgrp:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 276;
				this.match_solution_grouped();
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
	public match_(): Match_Context {
		let _localctx: Match_Context = new Match_Context(this._ctx, this.state);
		this.enterRule(_localctx, 6, matchParser.RULE_match_);
		let _la: number;
		try {
			let _alt: number;
			this.state = 348;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 15, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 279;
				this.match(matchParser.BitMatch);
				this.state = 280;
				this.format();
				this.state = 281;
				this.match(matchParser.CL);
				this.state = 285;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 4, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 282;
						this.match(matchParser.NL);
						}
						}
					}
					this.state = 287;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 4, this._ctx);
				}
				this.state = 297;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 6, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 288;
						this.bitElem();
						this.state = 292;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 5, this._ctx);
						while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
							if (_alt === 1) {
								{
								{
								this.state = 289;
								this.match(matchParser.NL);
								}
								}
							}
							this.state = 294;
							this._errHandler.sync(this);
							_alt = this.interpreter.adaptivePredict(this._input, 5, this._ctx);
						}
						}
						}
					}
					this.state = 299;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 6, this._ctx);
				}
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 300;
				this.match(matchParser.BitMatch);
				this.state = 301;
				this.format();
				this.state = 302;
				this.match(matchParser.CL);
				this.state = 304;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 303;
					this.match(matchParser.NL);
					}
					}
					this.state = 306;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la === matchParser.NL);
				this.state = 317;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << matchParser.S) | (1 << matchParser.OPDOLL) | (1 << matchParser.OPRANGLES) | (1 << matchParser.OPRANGLEL) | (1 << matchParser.OPDANGLE) | (1 << matchParser.OPU) | (1 << matchParser.OPB) | (1 << matchParser.OPQ) | (1 << matchParser.OPA) | (1 << matchParser.OPS) | (1 << matchParser.OPC) | (1 << matchParser.CL) | (1 << matchParser.COLON) | (1 << matchParser.AMP) | (1 << matchParser.DBLCOLON))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (matchParser.Greater - 33)) | (1 << (matchParser.Less - 33)) | (1 << (matchParser.RightAngle - 33)) | (1 << (matchParser.RightArrow - 33)) | (1 << (matchParser.DCANY - 33)) | (1 << (matchParser.ArticleText - 33)) | (1 << (matchParser.NUMERIC - 33)) | (1 << (matchParser.STRING - 33)) | (1 << (matchParser.NOTBITMARK - 33)) | (1 << (matchParser.ELIPSIS - 33)) | (1 << (matchParser.SENTENCE - 33)) | (1 << (matchParser.BARSTRING - 33)) | (1 << (matchParser.AtReference - 33)) | (1 << (matchParser.AtExampleWithStr - 33)))) !== 0) || ((((_la - 65)) & ~0x1F) === 0 && ((1 << (_la - 65)) & ((1 << (matchParser.AtExamplecol - 65)) | (1 << (matchParser.AtExamplecl - 65)) | (1 << (matchParser.AtSampleSolution - 65)) | (1 << (matchParser.AtLabeltrue - 65)) | (1 << (matchParser.AtLabelfalse - 65)) | (1 << (matchParser.OpAtCopyright - 65)))) !== 0) || ((((_la - 97)) & ~0x1F) === 0 && ((1 << (_la - 97)) & ((1 << (matchParser.OpAmpAudio - 97)) | (1 << (matchParser.OpAmpImage - 97)) | (1 << (matchParser.OpAmpImageZoom - 97)) | (1 << (matchParser.OpAmpVideo - 97)) | (1 << (matchParser.OpAmpArticle - 97)) | (1 << (matchParser.OpAmpDocument - 97)) | (1 << (matchParser.OpAmpApp - 97)) | (1 << (matchParser.OpAmpWebsite - 97)) | (1 << (matchParser.OpAmpStillImageFilm - 97)) | (1 << (matchParser.BracEnclose - 97)) | (1 << (matchParser.OpAmpAudioLink - 97)) | (1 << (matchParser.OpAmpImageLink - 97)) | (1 << (matchParser.OpAmpVideoLink - 97)) | (1 << (matchParser.OpAmpArticleLink - 97)) | (1 << (matchParser.OpAmpDocumentLink - 97)) | (1 << (matchParser.OpAmpDocumentDownload - 97)) | (1 << (matchParser.OpAmpAppLink - 97)) | (1 << (matchParser.OpAmpWebsiteLink - 97)) | (1 << (matchParser.OpAmpStillImageFilmLink - 97)))) !== 0) || ((((_la - 132)) & ~0x1F) === 0 && ((1 << (_la - 132)) & ((1 << (matchParser.OpAmpVideoEmbed - 132)) | (1 << (matchParser.OpAmpAudioEmbed - 132)) | (1 << (matchParser.OpAmpDocumentEmbed - 132)) | (1 << (matchParser.OpAmpStillImageFilmEmbed - 132)) | (1 << (matchParser.LIST_LINE - 132)) | (1 << (matchParser.OpAmpImageWAudio - 132)))) !== 0)) {
					{
					{
					this.state = 308;
					this.bitElem();
					this.state = 312;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === matchParser.NL) {
						{
						{
						this.state = 309;
						this.match(matchParser.NL);
						}
						}
						this.state = 314;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
					}
					this.state = 319;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 324;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 10, this._ctx) ) {
				case 1:
					{
					{
					this.state = 320;
					this.match(matchParser.HSPL);
					this.state = 321;
					this.match(matchParser.NL);
					}
					this.state = 323;
					this.pair_heading();
					}
					break;
				}
				this.state = 326;
				this.pairs();
				this.state = 330;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 11, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 327;
						this.match(matchParser.NL);
						}
						}
					}
					this.state = 332;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 11, this._ctx);
				}
				this.state = 346;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 14, this._ctx) ) {
				case 1:
					{
					this.state = 333;
					this.resource();
					this.state = 343;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 13, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 337;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
							while (_la === matchParser.NL) {
								{
								{
								this.state = 334;
								this.match(matchParser.NL);
								}
								}
								this.state = 339;
								this._errHandler.sync(this);
								_la = this._input.LA(1);
							}
							this.state = 340;
							this.resource();
							}
							}
						}
						this.state = 345;
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
	public match_matrix(): Match_matrixContext {
		let _localctx: Match_matrixContext = new Match_matrixContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, matchParser.RULE_match_matrix);
		let _la: number;
		try {
			let _alt: number;
			this.state = 419;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 27, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 350;
				this.match(matchParser.BitMatchmatrix);
				this.state = 351;
				this.format();
				this.state = 352;
				this.match(matchParser.CL);
				this.state = 356;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 16, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 353;
						this.match(matchParser.NL);
						}
						}
					}
					this.state = 358;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 16, this._ctx);
				}
				this.state = 368;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 18, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 359;
						this.bitElem();
						this.state = 363;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 17, this._ctx);
						while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
							if (_alt === 1) {
								{
								{
								this.state = 360;
								this.match(matchParser.NL);
								}
								}
							}
							this.state = 365;
							this._errHandler.sync(this);
							_alt = this.interpreter.adaptivePredict(this._input, 17, this._ctx);
						}
						}
						}
					}
					this.state = 370;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 18, this._ctx);
				}
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 371;
				this.match(matchParser.BitMatchmatrix);
				this.state = 372;
				this.format();
				this.state = 373;
				this.match(matchParser.CL);
				this.state = 375;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 374;
					this.match(matchParser.NL);
					}
					}
					this.state = 377;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la === matchParser.NL);
				this.state = 388;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << matchParser.S) | (1 << matchParser.OPDOLL) | (1 << matchParser.OPRANGLES) | (1 << matchParser.OPRANGLEL) | (1 << matchParser.OPDANGLE) | (1 << matchParser.OPU) | (1 << matchParser.OPB) | (1 << matchParser.OPQ) | (1 << matchParser.OPA) | (1 << matchParser.OPS) | (1 << matchParser.OPC) | (1 << matchParser.CL) | (1 << matchParser.COLON) | (1 << matchParser.AMP) | (1 << matchParser.DBLCOLON))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (matchParser.Greater - 33)) | (1 << (matchParser.Less - 33)) | (1 << (matchParser.RightAngle - 33)) | (1 << (matchParser.RightArrow - 33)) | (1 << (matchParser.DCANY - 33)) | (1 << (matchParser.ArticleText - 33)) | (1 << (matchParser.NUMERIC - 33)) | (1 << (matchParser.STRING - 33)) | (1 << (matchParser.NOTBITMARK - 33)) | (1 << (matchParser.ELIPSIS - 33)) | (1 << (matchParser.SENTENCE - 33)) | (1 << (matchParser.BARSTRING - 33)) | (1 << (matchParser.AtReference - 33)) | (1 << (matchParser.AtExampleWithStr - 33)))) !== 0) || ((((_la - 65)) & ~0x1F) === 0 && ((1 << (_la - 65)) & ((1 << (matchParser.AtExamplecol - 65)) | (1 << (matchParser.AtExamplecl - 65)) | (1 << (matchParser.AtSampleSolution - 65)) | (1 << (matchParser.AtLabeltrue - 65)) | (1 << (matchParser.AtLabelfalse - 65)) | (1 << (matchParser.OpAtCopyright - 65)))) !== 0) || ((((_la - 97)) & ~0x1F) === 0 && ((1 << (_la - 97)) & ((1 << (matchParser.OpAmpAudio - 97)) | (1 << (matchParser.OpAmpImage - 97)) | (1 << (matchParser.OpAmpImageZoom - 97)) | (1 << (matchParser.OpAmpVideo - 97)) | (1 << (matchParser.OpAmpArticle - 97)) | (1 << (matchParser.OpAmpDocument - 97)) | (1 << (matchParser.OpAmpApp - 97)) | (1 << (matchParser.OpAmpWebsite - 97)) | (1 << (matchParser.OpAmpStillImageFilm - 97)) | (1 << (matchParser.BracEnclose - 97)) | (1 << (matchParser.OpAmpAudioLink - 97)) | (1 << (matchParser.OpAmpImageLink - 97)) | (1 << (matchParser.OpAmpVideoLink - 97)) | (1 << (matchParser.OpAmpArticleLink - 97)) | (1 << (matchParser.OpAmpDocumentLink - 97)) | (1 << (matchParser.OpAmpDocumentDownload - 97)) | (1 << (matchParser.OpAmpAppLink - 97)) | (1 << (matchParser.OpAmpWebsiteLink - 97)) | (1 << (matchParser.OpAmpStillImageFilmLink - 97)))) !== 0) || ((((_la - 132)) & ~0x1F) === 0 && ((1 << (_la - 132)) & ((1 << (matchParser.OpAmpVideoEmbed - 132)) | (1 << (matchParser.OpAmpAudioEmbed - 132)) | (1 << (matchParser.OpAmpDocumentEmbed - 132)) | (1 << (matchParser.OpAmpStillImageFilmEmbed - 132)) | (1 << (matchParser.LIST_LINE - 132)) | (1 << (matchParser.OpAmpImageWAudio - 132)))) !== 0)) {
					{
					{
					this.state = 379;
					this.bitElem();
					this.state = 383;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === matchParser.NL) {
						{
						{
						this.state = 380;
						this.match(matchParser.NL);
						}
						}
						this.state = 385;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
					}
					this.state = 390;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 395;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 22, this._ctx) ) {
				case 1:
					{
					{
					this.state = 391;
					this.match(matchParser.HSPL);
					this.state = 392;
					this.match(matchParser.NL);
					}
					this.state = 394;
					this.pair_heading_multi();
					}
					break;
				}
				this.state = 397;
				this.pair_multivals();
				this.state = 401;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 23, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 398;
						this.match(matchParser.NL);
						}
						}
					}
					this.state = 403;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 23, this._ctx);
				}
				this.state = 417;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 26, this._ctx) ) {
				case 1:
					{
					this.state = 404;
					this.resource();
					this.state = 414;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 25, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 408;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
							while (_la === matchParser.NL) {
								{
								{
								this.state = 405;
								this.match(matchParser.NL);
								}
								}
								this.state = 410;
								this._errHandler.sync(this);
								_la = this._input.LA(1);
							}
							this.state = 411;
							this.resource();
							}
							}
						}
						this.state = 416;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 25, this._ctx);
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
	public match_solution_grouped(): Match_solution_groupedContext {
		let _localctx: Match_solution_groupedContext = new Match_solution_groupedContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, matchParser.RULE_match_solution_grouped);
		let _la: number;
		try {
			let _alt: number;
			this.state = 490;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 39, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 421;
				this.match(matchParser.BitMatchsolgrp);
				this.state = 422;
				this.format();
				this.state = 423;
				this.match(matchParser.CL);
				this.state = 427;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 28, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 424;
						this.match(matchParser.NL);
						}
						}
					}
					this.state = 429;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 28, this._ctx);
				}
				this.state = 439;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 30, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 430;
						this.bitElem();
						this.state = 434;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 29, this._ctx);
						while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
							if (_alt === 1) {
								{
								{
								this.state = 431;
								this.match(matchParser.NL);
								}
								}
							}
							this.state = 436;
							this._errHandler.sync(this);
							_alt = this.interpreter.adaptivePredict(this._input, 29, this._ctx);
						}
						}
						}
					}
					this.state = 441;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 30, this._ctx);
				}
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 442;
				this.match(matchParser.BitMatchsolgrp);
				this.state = 443;
				this.format();
				this.state = 444;
				this.match(matchParser.CL);
				this.state = 446;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 445;
					this.match(matchParser.NL);
					}
					}
					this.state = 448;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la === matchParser.NL);
				this.state = 459;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << matchParser.S) | (1 << matchParser.OPDOLL) | (1 << matchParser.OPRANGLES) | (1 << matchParser.OPRANGLEL) | (1 << matchParser.OPDANGLE) | (1 << matchParser.OPU) | (1 << matchParser.OPB) | (1 << matchParser.OPQ) | (1 << matchParser.OPA) | (1 << matchParser.OPS) | (1 << matchParser.OPC) | (1 << matchParser.CL) | (1 << matchParser.COLON) | (1 << matchParser.AMP) | (1 << matchParser.DBLCOLON))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (matchParser.Greater - 33)) | (1 << (matchParser.Less - 33)) | (1 << (matchParser.RightAngle - 33)) | (1 << (matchParser.RightArrow - 33)) | (1 << (matchParser.DCANY - 33)) | (1 << (matchParser.ArticleText - 33)) | (1 << (matchParser.NUMERIC - 33)) | (1 << (matchParser.STRING - 33)) | (1 << (matchParser.NOTBITMARK - 33)) | (1 << (matchParser.ELIPSIS - 33)) | (1 << (matchParser.SENTENCE - 33)) | (1 << (matchParser.BARSTRING - 33)) | (1 << (matchParser.AtReference - 33)) | (1 << (matchParser.AtExampleWithStr - 33)))) !== 0) || ((((_la - 65)) & ~0x1F) === 0 && ((1 << (_la - 65)) & ((1 << (matchParser.AtExamplecol - 65)) | (1 << (matchParser.AtExamplecl - 65)) | (1 << (matchParser.AtSampleSolution - 65)) | (1 << (matchParser.AtLabeltrue - 65)) | (1 << (matchParser.AtLabelfalse - 65)) | (1 << (matchParser.OpAtCopyright - 65)))) !== 0) || ((((_la - 97)) & ~0x1F) === 0 && ((1 << (_la - 97)) & ((1 << (matchParser.OpAmpAudio - 97)) | (1 << (matchParser.OpAmpImage - 97)) | (1 << (matchParser.OpAmpImageZoom - 97)) | (1 << (matchParser.OpAmpVideo - 97)) | (1 << (matchParser.OpAmpArticle - 97)) | (1 << (matchParser.OpAmpDocument - 97)) | (1 << (matchParser.OpAmpApp - 97)) | (1 << (matchParser.OpAmpWebsite - 97)) | (1 << (matchParser.OpAmpStillImageFilm - 97)) | (1 << (matchParser.BracEnclose - 97)) | (1 << (matchParser.OpAmpAudioLink - 97)) | (1 << (matchParser.OpAmpImageLink - 97)) | (1 << (matchParser.OpAmpVideoLink - 97)) | (1 << (matchParser.OpAmpArticleLink - 97)) | (1 << (matchParser.OpAmpDocumentLink - 97)) | (1 << (matchParser.OpAmpDocumentDownload - 97)) | (1 << (matchParser.OpAmpAppLink - 97)) | (1 << (matchParser.OpAmpWebsiteLink - 97)) | (1 << (matchParser.OpAmpStillImageFilmLink - 97)))) !== 0) || ((((_la - 132)) & ~0x1F) === 0 && ((1 << (_la - 132)) & ((1 << (matchParser.OpAmpVideoEmbed - 132)) | (1 << (matchParser.OpAmpAudioEmbed - 132)) | (1 << (matchParser.OpAmpDocumentEmbed - 132)) | (1 << (matchParser.OpAmpStillImageFilmEmbed - 132)) | (1 << (matchParser.LIST_LINE - 132)) | (1 << (matchParser.OpAmpImageWAudio - 132)))) !== 0)) {
					{
					{
					this.state = 450;
					this.bitElem();
					this.state = 454;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === matchParser.NL) {
						{
						{
						this.state = 451;
						this.match(matchParser.NL);
						}
						}
						this.state = 456;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
					}
					this.state = 461;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 466;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 34, this._ctx) ) {
				case 1:
					{
					{
					this.state = 462;
					this.match(matchParser.HSPL);
					this.state = 463;
					this.match(matchParser.NL);
					}
					this.state = 465;
					this.pair_heading();
					}
					break;
				}
				this.state = 468;
				this.pairs();
				this.state = 472;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 35, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 469;
						this.match(matchParser.NL);
						}
						}
					}
					this.state = 474;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 35, this._ctx);
				}
				this.state = 488;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 38, this._ctx) ) {
				case 1:
					{
					this.state = 475;
					this.resource();
					this.state = 485;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 37, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 479;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
							while (_la === matchParser.NL) {
								{
								{
								this.state = 476;
								this.match(matchParser.NL);
								}
								}
								this.state = 481;
								this._errHandler.sync(this);
								_la = this._input.LA(1);
							}
							this.state = 482;
							this.resource();
							}
							}
						}
						this.state = 487;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 37, this._ctx);
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
	public match_reverse(): Match_reverseContext {
		let _localctx: Match_reverseContext = new Match_reverseContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, matchParser.RULE_match_reverse);
		let _la: number;
		try {
			let _alt: number;
			this.state = 561;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 51, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 492;
				this.match(matchParser.BitMatchrev);
				this.state = 493;
				this.format();
				this.state = 494;
				this.match(matchParser.CL);
				this.state = 498;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 40, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 495;
						this.match(matchParser.NL);
						}
						}
					}
					this.state = 500;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 40, this._ctx);
				}
				this.state = 510;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 42, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 501;
						this.bitElem();
						this.state = 505;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 41, this._ctx);
						while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
							if (_alt === 1) {
								{
								{
								this.state = 502;
								this.match(matchParser.NL);
								}
								}
							}
							this.state = 507;
							this._errHandler.sync(this);
							_alt = this.interpreter.adaptivePredict(this._input, 41, this._ctx);
						}
						}
						}
					}
					this.state = 512;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 42, this._ctx);
				}
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 513;
				this.match(matchParser.BitMatchrev);
				this.state = 514;
				this.format();
				this.state = 515;
				this.match(matchParser.CL);
				this.state = 517;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 516;
					this.match(matchParser.NL);
					}
					}
					this.state = 519;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la === matchParser.NL);
				this.state = 530;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << matchParser.S) | (1 << matchParser.OPDOLL) | (1 << matchParser.OPRANGLES) | (1 << matchParser.OPRANGLEL) | (1 << matchParser.OPDANGLE) | (1 << matchParser.OPU) | (1 << matchParser.OPB) | (1 << matchParser.OPQ) | (1 << matchParser.OPA) | (1 << matchParser.OPS) | (1 << matchParser.OPC) | (1 << matchParser.CL) | (1 << matchParser.COLON) | (1 << matchParser.AMP) | (1 << matchParser.DBLCOLON))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (matchParser.Greater - 33)) | (1 << (matchParser.Less - 33)) | (1 << (matchParser.RightAngle - 33)) | (1 << (matchParser.RightArrow - 33)) | (1 << (matchParser.DCANY - 33)) | (1 << (matchParser.ArticleText - 33)) | (1 << (matchParser.NUMERIC - 33)) | (1 << (matchParser.STRING - 33)) | (1 << (matchParser.NOTBITMARK - 33)) | (1 << (matchParser.ELIPSIS - 33)) | (1 << (matchParser.SENTENCE - 33)) | (1 << (matchParser.BARSTRING - 33)) | (1 << (matchParser.AtReference - 33)) | (1 << (matchParser.AtExampleWithStr - 33)))) !== 0) || ((((_la - 65)) & ~0x1F) === 0 && ((1 << (_la - 65)) & ((1 << (matchParser.AtExamplecol - 65)) | (1 << (matchParser.AtExamplecl - 65)) | (1 << (matchParser.AtSampleSolution - 65)) | (1 << (matchParser.AtLabeltrue - 65)) | (1 << (matchParser.AtLabelfalse - 65)) | (1 << (matchParser.OpAtCopyright - 65)))) !== 0) || ((((_la - 97)) & ~0x1F) === 0 && ((1 << (_la - 97)) & ((1 << (matchParser.OpAmpAudio - 97)) | (1 << (matchParser.OpAmpImage - 97)) | (1 << (matchParser.OpAmpImageZoom - 97)) | (1 << (matchParser.OpAmpVideo - 97)) | (1 << (matchParser.OpAmpArticle - 97)) | (1 << (matchParser.OpAmpDocument - 97)) | (1 << (matchParser.OpAmpApp - 97)) | (1 << (matchParser.OpAmpWebsite - 97)) | (1 << (matchParser.OpAmpStillImageFilm - 97)) | (1 << (matchParser.BracEnclose - 97)) | (1 << (matchParser.OpAmpAudioLink - 97)) | (1 << (matchParser.OpAmpImageLink - 97)) | (1 << (matchParser.OpAmpVideoLink - 97)) | (1 << (matchParser.OpAmpArticleLink - 97)) | (1 << (matchParser.OpAmpDocumentLink - 97)) | (1 << (matchParser.OpAmpDocumentDownload - 97)) | (1 << (matchParser.OpAmpAppLink - 97)) | (1 << (matchParser.OpAmpWebsiteLink - 97)) | (1 << (matchParser.OpAmpStillImageFilmLink - 97)))) !== 0) || ((((_la - 132)) & ~0x1F) === 0 && ((1 << (_la - 132)) & ((1 << (matchParser.OpAmpVideoEmbed - 132)) | (1 << (matchParser.OpAmpAudioEmbed - 132)) | (1 << (matchParser.OpAmpDocumentEmbed - 132)) | (1 << (matchParser.OpAmpStillImageFilmEmbed - 132)) | (1 << (matchParser.LIST_LINE - 132)) | (1 << (matchParser.OpAmpImageWAudio - 132)))) !== 0)) {
					{
					{
					this.state = 521;
					this.bitElem();
					this.state = 525;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === matchParser.NL) {
						{
						{
						this.state = 522;
						this.match(matchParser.NL);
						}
						}
						this.state = 527;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
					}
					this.state = 532;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 537;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 46, this._ctx) ) {
				case 1:
					{
					{
					this.state = 533;
					this.match(matchParser.HSPL);
					this.state = 534;
					this.match(matchParser.NL);
					}
					this.state = 536;
					this.pair_heading();
					}
					break;
				}
				this.state = 539;
				this.pairs();
				this.state = 543;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 47, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 540;
						this.match(matchParser.NL);
						}
						}
					}
					this.state = 545;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 47, this._ctx);
				}
				this.state = 559;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 50, this._ctx) ) {
				case 1:
					{
					this.state = 546;
					this.resource();
					this.state = 556;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 49, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 550;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
							while (_la === matchParser.NL) {
								{
								{
								this.state = 547;
								this.match(matchParser.NL);
								}
								}
								this.state = 552;
								this._errHandler.sync(this);
								_la = this._input.LA(1);
							}
							this.state = 553;
							this.resource();
							}
							}
						}
						this.state = 558;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 49, this._ctx);
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
	public match_all_reverse(): Match_all_reverseContext {
		let _localctx: Match_all_reverseContext = new Match_all_reverseContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, matchParser.RULE_match_all_reverse);
		let _la: number;
		try {
			let _alt: number;
			this.state = 632;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 63, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 563;
				this.match(matchParser.BitMatchallrev);
				this.state = 564;
				this.format();
				this.state = 565;
				this.match(matchParser.CL);
				this.state = 569;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 52, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 566;
						this.match(matchParser.NL);
						}
						}
					}
					this.state = 571;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 52, this._ctx);
				}
				this.state = 581;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 54, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 572;
						this.bitElem();
						this.state = 576;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 53, this._ctx);
						while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
							if (_alt === 1) {
								{
								{
								this.state = 573;
								this.match(matchParser.NL);
								}
								}
							}
							this.state = 578;
							this._errHandler.sync(this);
							_alt = this.interpreter.adaptivePredict(this._input, 53, this._ctx);
						}
						}
						}
					}
					this.state = 583;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 54, this._ctx);
				}
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 584;
				this.match(matchParser.BitMatchallrev);
				this.state = 585;
				this.format();
				this.state = 586;
				this.match(matchParser.CL);
				this.state = 588;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 587;
					this.match(matchParser.NL);
					}
					}
					this.state = 590;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la === matchParser.NL);
				this.state = 601;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << matchParser.S) | (1 << matchParser.OPDOLL) | (1 << matchParser.OPRANGLES) | (1 << matchParser.OPRANGLEL) | (1 << matchParser.OPDANGLE) | (1 << matchParser.OPU) | (1 << matchParser.OPB) | (1 << matchParser.OPQ) | (1 << matchParser.OPA) | (1 << matchParser.OPS) | (1 << matchParser.OPC) | (1 << matchParser.CL) | (1 << matchParser.COLON) | (1 << matchParser.AMP) | (1 << matchParser.DBLCOLON))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (matchParser.Greater - 33)) | (1 << (matchParser.Less - 33)) | (1 << (matchParser.RightAngle - 33)) | (1 << (matchParser.RightArrow - 33)) | (1 << (matchParser.DCANY - 33)) | (1 << (matchParser.ArticleText - 33)) | (1 << (matchParser.NUMERIC - 33)) | (1 << (matchParser.STRING - 33)) | (1 << (matchParser.NOTBITMARK - 33)) | (1 << (matchParser.ELIPSIS - 33)) | (1 << (matchParser.SENTENCE - 33)) | (1 << (matchParser.BARSTRING - 33)) | (1 << (matchParser.AtReference - 33)) | (1 << (matchParser.AtExampleWithStr - 33)))) !== 0) || ((((_la - 65)) & ~0x1F) === 0 && ((1 << (_la - 65)) & ((1 << (matchParser.AtExamplecol - 65)) | (1 << (matchParser.AtExamplecl - 65)) | (1 << (matchParser.AtSampleSolution - 65)) | (1 << (matchParser.AtLabeltrue - 65)) | (1 << (matchParser.AtLabelfalse - 65)) | (1 << (matchParser.OpAtCopyright - 65)))) !== 0) || ((((_la - 97)) & ~0x1F) === 0 && ((1 << (_la - 97)) & ((1 << (matchParser.OpAmpAudio - 97)) | (1 << (matchParser.OpAmpImage - 97)) | (1 << (matchParser.OpAmpImageZoom - 97)) | (1 << (matchParser.OpAmpVideo - 97)) | (1 << (matchParser.OpAmpArticle - 97)) | (1 << (matchParser.OpAmpDocument - 97)) | (1 << (matchParser.OpAmpApp - 97)) | (1 << (matchParser.OpAmpWebsite - 97)) | (1 << (matchParser.OpAmpStillImageFilm - 97)) | (1 << (matchParser.BracEnclose - 97)) | (1 << (matchParser.OpAmpAudioLink - 97)) | (1 << (matchParser.OpAmpImageLink - 97)) | (1 << (matchParser.OpAmpVideoLink - 97)) | (1 << (matchParser.OpAmpArticleLink - 97)) | (1 << (matchParser.OpAmpDocumentLink - 97)) | (1 << (matchParser.OpAmpDocumentDownload - 97)) | (1 << (matchParser.OpAmpAppLink - 97)) | (1 << (matchParser.OpAmpWebsiteLink - 97)) | (1 << (matchParser.OpAmpStillImageFilmLink - 97)))) !== 0) || ((((_la - 132)) & ~0x1F) === 0 && ((1 << (_la - 132)) & ((1 << (matchParser.OpAmpVideoEmbed - 132)) | (1 << (matchParser.OpAmpAudioEmbed - 132)) | (1 << (matchParser.OpAmpDocumentEmbed - 132)) | (1 << (matchParser.OpAmpStillImageFilmEmbed - 132)) | (1 << (matchParser.LIST_LINE - 132)) | (1 << (matchParser.OpAmpImageWAudio - 132)))) !== 0)) {
					{
					{
					this.state = 592;
					this.bitElem();
					this.state = 596;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === matchParser.NL) {
						{
						{
						this.state = 593;
						this.match(matchParser.NL);
						}
						}
						this.state = 598;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
					}
					this.state = 603;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 608;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 58, this._ctx) ) {
				case 1:
					{
					{
					this.state = 604;
					this.match(matchParser.HSPL);
					this.state = 605;
					this.match(matchParser.NL);
					}
					this.state = 607;
					this.pair_heading();
					}
					break;
				}
				this.state = 610;
				this.pairs();
				this.state = 614;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 59, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 611;
						this.match(matchParser.NL);
						}
						}
					}
					this.state = 616;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 59, this._ctx);
				}
				this.state = 630;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 62, this._ctx) ) {
				case 1:
					{
					this.state = 617;
					this.resource();
					this.state = 627;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 61, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 621;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
							while (_la === matchParser.NL) {
								{
								{
								this.state = 618;
								this.match(matchParser.NL);
								}
								}
								this.state = 623;
								this._errHandler.sync(this);
								_la = this._input.LA(1);
							}
							this.state = 624;
							this.resource();
							}
							}
						}
						this.state = 629;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 61, this._ctx);
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
	public match_picture(): Match_pictureContext {
		let _localctx: Match_pictureContext = new Match_pictureContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, matchParser.RULE_match_picture);
		let _la: number;
		try {
			let _alt: number;
			this.state = 703;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 75, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 634;
				this.match(matchParser.BitMatchpic);
				this.state = 635;
				this.format();
				this.state = 636;
				this.match(matchParser.CL);
				this.state = 640;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 64, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 637;
						this.match(matchParser.NL);
						}
						}
					}
					this.state = 642;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 64, this._ctx);
				}
				this.state = 652;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 66, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 643;
						this.bitElem();
						this.state = 647;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 65, this._ctx);
						while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
							if (_alt === 1) {
								{
								{
								this.state = 644;
								this.match(matchParser.NL);
								}
								}
							}
							this.state = 649;
							this._errHandler.sync(this);
							_alt = this.interpreter.adaptivePredict(this._input, 65, this._ctx);
						}
						}
						}
					}
					this.state = 654;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 66, this._ctx);
				}
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 655;
				this.match(matchParser.BitMatchpic);
				this.state = 656;
				this.format();
				this.state = 657;
				this.match(matchParser.CL);
				this.state = 659;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 658;
					this.match(matchParser.NL);
					}
					}
					this.state = 661;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la === matchParser.NL);
				this.state = 672;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << matchParser.S) | (1 << matchParser.OPDOLL) | (1 << matchParser.OPRANGLES) | (1 << matchParser.OPRANGLEL) | (1 << matchParser.OPDANGLE) | (1 << matchParser.OPU) | (1 << matchParser.OPB) | (1 << matchParser.OPQ) | (1 << matchParser.OPA) | (1 << matchParser.OPS) | (1 << matchParser.OPC) | (1 << matchParser.CL) | (1 << matchParser.COLON) | (1 << matchParser.AMP) | (1 << matchParser.DBLCOLON))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (matchParser.Greater - 33)) | (1 << (matchParser.Less - 33)) | (1 << (matchParser.RightAngle - 33)) | (1 << (matchParser.RightArrow - 33)) | (1 << (matchParser.DCANY - 33)) | (1 << (matchParser.ArticleText - 33)) | (1 << (matchParser.NUMERIC - 33)) | (1 << (matchParser.STRING - 33)) | (1 << (matchParser.NOTBITMARK - 33)) | (1 << (matchParser.ELIPSIS - 33)) | (1 << (matchParser.SENTENCE - 33)) | (1 << (matchParser.BARSTRING - 33)) | (1 << (matchParser.AtReference - 33)) | (1 << (matchParser.AtExampleWithStr - 33)))) !== 0) || ((((_la - 65)) & ~0x1F) === 0 && ((1 << (_la - 65)) & ((1 << (matchParser.AtExamplecol - 65)) | (1 << (matchParser.AtExamplecl - 65)) | (1 << (matchParser.AtSampleSolution - 65)) | (1 << (matchParser.AtLabeltrue - 65)) | (1 << (matchParser.AtLabelfalse - 65)) | (1 << (matchParser.OpAtCopyright - 65)))) !== 0) || ((((_la - 97)) & ~0x1F) === 0 && ((1 << (_la - 97)) & ((1 << (matchParser.OpAmpAudio - 97)) | (1 << (matchParser.OpAmpImage - 97)) | (1 << (matchParser.OpAmpImageZoom - 97)) | (1 << (matchParser.OpAmpVideo - 97)) | (1 << (matchParser.OpAmpArticle - 97)) | (1 << (matchParser.OpAmpDocument - 97)) | (1 << (matchParser.OpAmpApp - 97)) | (1 << (matchParser.OpAmpWebsite - 97)) | (1 << (matchParser.OpAmpStillImageFilm - 97)) | (1 << (matchParser.BracEnclose - 97)) | (1 << (matchParser.OpAmpAudioLink - 97)) | (1 << (matchParser.OpAmpImageLink - 97)) | (1 << (matchParser.OpAmpVideoLink - 97)) | (1 << (matchParser.OpAmpArticleLink - 97)) | (1 << (matchParser.OpAmpDocumentLink - 97)) | (1 << (matchParser.OpAmpDocumentDownload - 97)) | (1 << (matchParser.OpAmpAppLink - 97)) | (1 << (matchParser.OpAmpWebsiteLink - 97)) | (1 << (matchParser.OpAmpStillImageFilmLink - 97)))) !== 0) || ((((_la - 132)) & ~0x1F) === 0 && ((1 << (_la - 132)) & ((1 << (matchParser.OpAmpVideoEmbed - 132)) | (1 << (matchParser.OpAmpAudioEmbed - 132)) | (1 << (matchParser.OpAmpDocumentEmbed - 132)) | (1 << (matchParser.OpAmpStillImageFilmEmbed - 132)) | (1 << (matchParser.LIST_LINE - 132)) | (1 << (matchParser.OpAmpImageWAudio - 132)))) !== 0)) {
					{
					{
					this.state = 663;
					this.bitElem();
					this.state = 667;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === matchParser.NL) {
						{
						{
						this.state = 664;
						this.match(matchParser.NL);
						}
						}
						this.state = 669;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
					}
					this.state = 674;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 679;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 70, this._ctx) ) {
				case 1:
					{
					{
					this.state = 675;
					this.match(matchParser.HSPL);
					this.state = 676;
					this.match(matchParser.NL);
					}
					this.state = 678;
					this.pair_heading();
					}
					break;
				}
				this.state = 681;
				this.pair_images();
				this.state = 685;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 71, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 682;
						this.match(matchParser.NL);
						}
						}
					}
					this.state = 687;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 71, this._ctx);
				}
				this.state = 701;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 74, this._ctx) ) {
				case 1:
					{
					this.state = 688;
					this.resource();
					this.state = 698;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 73, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 692;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
							while (_la === matchParser.NL) {
								{
								{
								this.state = 689;
								this.match(matchParser.NL);
								}
								}
								this.state = 694;
								this._errHandler.sync(this);
								_la = this._input.LA(1);
							}
							this.state = 695;
							this.resource();
							}
							}
						}
						this.state = 700;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 73, this._ctx);
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
	public match_audio(): Match_audioContext {
		let _localctx: Match_audioContext = new Match_audioContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, matchParser.RULE_match_audio);
		let _la: number;
		try {
			let _alt: number;
			this.state = 774;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 87, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 705;
				this.match(matchParser.BitMatchaudio);
				this.state = 706;
				this.format();
				this.state = 707;
				this.match(matchParser.CL);
				this.state = 711;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 76, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 708;
						this.match(matchParser.NL);
						}
						}
					}
					this.state = 713;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 76, this._ctx);
				}
				this.state = 723;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 78, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 714;
						this.bitElem();
						this.state = 718;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 77, this._ctx);
						while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
							if (_alt === 1) {
								{
								{
								this.state = 715;
								this.match(matchParser.NL);
								}
								}
							}
							this.state = 720;
							this._errHandler.sync(this);
							_alt = this.interpreter.adaptivePredict(this._input, 77, this._ctx);
						}
						}
						}
					}
					this.state = 725;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 78, this._ctx);
				}
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 726;
				this.match(matchParser.BitMatchaudio);
				this.state = 727;
				this.format();
				this.state = 728;
				this.match(matchParser.CL);
				this.state = 730;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 729;
					this.match(matchParser.NL);
					}
					}
					this.state = 732;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la === matchParser.NL);
				this.state = 743;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << matchParser.S) | (1 << matchParser.OPDOLL) | (1 << matchParser.OPRANGLES) | (1 << matchParser.OPRANGLEL) | (1 << matchParser.OPDANGLE) | (1 << matchParser.OPU) | (1 << matchParser.OPB) | (1 << matchParser.OPQ) | (1 << matchParser.OPA) | (1 << matchParser.OPS) | (1 << matchParser.OPC) | (1 << matchParser.CL) | (1 << matchParser.COLON) | (1 << matchParser.AMP) | (1 << matchParser.DBLCOLON))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (matchParser.Greater - 33)) | (1 << (matchParser.Less - 33)) | (1 << (matchParser.RightAngle - 33)) | (1 << (matchParser.RightArrow - 33)) | (1 << (matchParser.DCANY - 33)) | (1 << (matchParser.ArticleText - 33)) | (1 << (matchParser.NUMERIC - 33)) | (1 << (matchParser.STRING - 33)) | (1 << (matchParser.NOTBITMARK - 33)) | (1 << (matchParser.ELIPSIS - 33)) | (1 << (matchParser.SENTENCE - 33)) | (1 << (matchParser.BARSTRING - 33)) | (1 << (matchParser.AtReference - 33)) | (1 << (matchParser.AtExampleWithStr - 33)))) !== 0) || ((((_la - 65)) & ~0x1F) === 0 && ((1 << (_la - 65)) & ((1 << (matchParser.AtExamplecol - 65)) | (1 << (matchParser.AtExamplecl - 65)) | (1 << (matchParser.AtSampleSolution - 65)) | (1 << (matchParser.AtLabeltrue - 65)) | (1 << (matchParser.AtLabelfalse - 65)) | (1 << (matchParser.OpAtCopyright - 65)))) !== 0) || ((((_la - 97)) & ~0x1F) === 0 && ((1 << (_la - 97)) & ((1 << (matchParser.OpAmpAudio - 97)) | (1 << (matchParser.OpAmpImage - 97)) | (1 << (matchParser.OpAmpImageZoom - 97)) | (1 << (matchParser.OpAmpVideo - 97)) | (1 << (matchParser.OpAmpArticle - 97)) | (1 << (matchParser.OpAmpDocument - 97)) | (1 << (matchParser.OpAmpApp - 97)) | (1 << (matchParser.OpAmpWebsite - 97)) | (1 << (matchParser.OpAmpStillImageFilm - 97)) | (1 << (matchParser.BracEnclose - 97)) | (1 << (matchParser.OpAmpAudioLink - 97)) | (1 << (matchParser.OpAmpImageLink - 97)) | (1 << (matchParser.OpAmpVideoLink - 97)) | (1 << (matchParser.OpAmpArticleLink - 97)) | (1 << (matchParser.OpAmpDocumentLink - 97)) | (1 << (matchParser.OpAmpDocumentDownload - 97)) | (1 << (matchParser.OpAmpAppLink - 97)) | (1 << (matchParser.OpAmpWebsiteLink - 97)) | (1 << (matchParser.OpAmpStillImageFilmLink - 97)))) !== 0) || ((((_la - 132)) & ~0x1F) === 0 && ((1 << (_la - 132)) & ((1 << (matchParser.OpAmpVideoEmbed - 132)) | (1 << (matchParser.OpAmpAudioEmbed - 132)) | (1 << (matchParser.OpAmpDocumentEmbed - 132)) | (1 << (matchParser.OpAmpStillImageFilmEmbed - 132)) | (1 << (matchParser.LIST_LINE - 132)) | (1 << (matchParser.OpAmpImageWAudio - 132)))) !== 0)) {
					{
					{
					this.state = 734;
					this.bitElem();
					this.state = 738;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === matchParser.NL) {
						{
						{
						this.state = 735;
						this.match(matchParser.NL);
						}
						}
						this.state = 740;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
					}
					this.state = 745;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 750;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 82, this._ctx) ) {
				case 1:
					{
					{
					this.state = 746;
					this.match(matchParser.HSPL);
					this.state = 747;
					this.match(matchParser.NL);
					}
					this.state = 749;
					this.pair_heading();
					}
					break;
				}
				this.state = 752;
				this.pair_audios();
				this.state = 756;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 83, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 753;
						this.match(matchParser.NL);
						}
						}
					}
					this.state = 758;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 83, this._ctx);
				}
				this.state = 772;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 86, this._ctx) ) {
				case 1:
					{
					this.state = 759;
					this.resource();
					this.state = 769;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 85, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 763;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
							while (_la === matchParser.NL) {
								{
								{
								this.state = 760;
								this.match(matchParser.NL);
								}
								}
								this.state = 765;
								this._errHandler.sync(this);
								_la = this._input.LA(1);
							}
							this.state = 766;
							this.resource();
							}
							}
						}
						this.state = 771;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 85, this._ctx);
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
	public match_all(): Match_allContext {
		let _localctx: Match_allContext = new Match_allContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, matchParser.RULE_match_all);
		let _la: number;
		try {
			let _alt: number;
			this.state = 845;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 99, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 776;
				this.match(matchParser.BitMatchall);
				this.state = 777;
				this.format();
				this.state = 778;
				this.match(matchParser.CL);
				this.state = 782;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 88, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 779;
						this.match(matchParser.NL);
						}
						}
					}
					this.state = 784;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 88, this._ctx);
				}
				this.state = 794;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 90, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 785;
						this.bitElem();
						this.state = 789;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 89, this._ctx);
						while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
							if (_alt === 1) {
								{
								{
								this.state = 786;
								this.match(matchParser.NL);
								}
								}
							}
							this.state = 791;
							this._errHandler.sync(this);
							_alt = this.interpreter.adaptivePredict(this._input, 89, this._ctx);
						}
						}
						}
					}
					this.state = 796;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 90, this._ctx);
				}
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 797;
				this.match(matchParser.BitMatchall);
				this.state = 798;
				this.format();
				this.state = 799;
				this.match(matchParser.CL);
				this.state = 801;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 800;
					this.match(matchParser.NL);
					}
					}
					this.state = 803;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la === matchParser.NL);
				this.state = 814;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << matchParser.S) | (1 << matchParser.OPDOLL) | (1 << matchParser.OPRANGLES) | (1 << matchParser.OPRANGLEL) | (1 << matchParser.OPDANGLE) | (1 << matchParser.OPU) | (1 << matchParser.OPB) | (1 << matchParser.OPQ) | (1 << matchParser.OPA) | (1 << matchParser.OPS) | (1 << matchParser.OPC) | (1 << matchParser.CL) | (1 << matchParser.COLON) | (1 << matchParser.AMP) | (1 << matchParser.DBLCOLON))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (matchParser.Greater - 33)) | (1 << (matchParser.Less - 33)) | (1 << (matchParser.RightAngle - 33)) | (1 << (matchParser.RightArrow - 33)) | (1 << (matchParser.DCANY - 33)) | (1 << (matchParser.ArticleText - 33)) | (1 << (matchParser.NUMERIC - 33)) | (1 << (matchParser.STRING - 33)) | (1 << (matchParser.NOTBITMARK - 33)) | (1 << (matchParser.ELIPSIS - 33)) | (1 << (matchParser.SENTENCE - 33)) | (1 << (matchParser.BARSTRING - 33)) | (1 << (matchParser.AtReference - 33)) | (1 << (matchParser.AtExampleWithStr - 33)))) !== 0) || ((((_la - 65)) & ~0x1F) === 0 && ((1 << (_la - 65)) & ((1 << (matchParser.AtExamplecol - 65)) | (1 << (matchParser.AtExamplecl - 65)) | (1 << (matchParser.AtSampleSolution - 65)) | (1 << (matchParser.AtLabeltrue - 65)) | (1 << (matchParser.AtLabelfalse - 65)) | (1 << (matchParser.OpAtCopyright - 65)))) !== 0) || ((((_la - 97)) & ~0x1F) === 0 && ((1 << (_la - 97)) & ((1 << (matchParser.OpAmpAudio - 97)) | (1 << (matchParser.OpAmpImage - 97)) | (1 << (matchParser.OpAmpImageZoom - 97)) | (1 << (matchParser.OpAmpVideo - 97)) | (1 << (matchParser.OpAmpArticle - 97)) | (1 << (matchParser.OpAmpDocument - 97)) | (1 << (matchParser.OpAmpApp - 97)) | (1 << (matchParser.OpAmpWebsite - 97)) | (1 << (matchParser.OpAmpStillImageFilm - 97)) | (1 << (matchParser.BracEnclose - 97)) | (1 << (matchParser.OpAmpAudioLink - 97)) | (1 << (matchParser.OpAmpImageLink - 97)) | (1 << (matchParser.OpAmpVideoLink - 97)) | (1 << (matchParser.OpAmpArticleLink - 97)) | (1 << (matchParser.OpAmpDocumentLink - 97)) | (1 << (matchParser.OpAmpDocumentDownload - 97)) | (1 << (matchParser.OpAmpAppLink - 97)) | (1 << (matchParser.OpAmpWebsiteLink - 97)) | (1 << (matchParser.OpAmpStillImageFilmLink - 97)))) !== 0) || ((((_la - 132)) & ~0x1F) === 0 && ((1 << (_la - 132)) & ((1 << (matchParser.OpAmpVideoEmbed - 132)) | (1 << (matchParser.OpAmpAudioEmbed - 132)) | (1 << (matchParser.OpAmpDocumentEmbed - 132)) | (1 << (matchParser.OpAmpStillImageFilmEmbed - 132)) | (1 << (matchParser.LIST_LINE - 132)) | (1 << (matchParser.OpAmpImageWAudio - 132)))) !== 0)) {
					{
					{
					this.state = 805;
					this.bitElem();
					this.state = 809;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === matchParser.NL) {
						{
						{
						this.state = 806;
						this.match(matchParser.NL);
						}
						}
						this.state = 811;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
					}
					this.state = 816;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 821;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 94, this._ctx) ) {
				case 1:
					{
					{
					this.state = 817;
					this.match(matchParser.HSPL);
					this.state = 818;
					this.match(matchParser.NL);
					}
					this.state = 820;
					this.pair_heading();
					}
					break;
				}
				this.state = 823;
				this.pairs();
				this.state = 827;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 95, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 824;
						this.match(matchParser.NL);
						}
						}
					}
					this.state = 829;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 95, this._ctx);
				}
				this.state = 843;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 98, this._ctx) ) {
				case 1:
					{
					this.state = 830;
					this.resource();
					this.state = 840;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 97, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 834;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
							while (_la === matchParser.NL) {
								{
								{
								this.state = 831;
								this.match(matchParser.NL);
								}
								}
								this.state = 836;
								this._errHandler.sync(this);
								_la = this._input.LA(1);
							}
							this.state = 837;
							this.resource();
							}
							}
						}
						this.state = 842;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 97, this._ctx);
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
	public bitElem(): BitElemContext {
		let _localctx: BitElemContext = new BitElemContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, matchParser.RULE_bitElem);
		try {
			this.state = 873;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 100, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 847;
				this.match(matchParser.NOTBITMARK);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 848;
				this.list_line();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 849;
				this.dclines();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 850;
				this.colcoltext();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 851;
				this.gap();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 852;
				this.atdef();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 853;
				this.dollarans();
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 854;
				this.reference();
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 855;
				this.item();
				}
				break;

			case 10:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 856;
				this.instruction();
				}
				break;

			case 11:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 857;
				this.hint();
				}
				break;

			case 12:
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 858;
				this.s_and_w();
				}
				break;

			case 13:
				this.enterOuterAlt(_localctx, 13);
				{
				this.state = 859;
				this.example();
				}
				break;

			case 14:
				this.enterOuterAlt(_localctx, 14);
				{
				this.state = 860;
				this.bool_label();
				}
				break;

			case 15:
				this.enterOuterAlt(_localctx, 15);
				{
				this.state = 861;
				this.imagebit();
				}
				break;

			case 16:
				this.enterOuterAlt(_localctx, 16);
				{
				this.state = 862;
				this.audiobit();
				}
				break;

			case 17:
				this.enterOuterAlt(_localctx, 17);
				{
				this.state = 863;
				this.videobit();
				}
				break;

			case 18:
				this.enterOuterAlt(_localctx, 18);
				{
				this.state = 864;
				this.articlebit();
				}
				break;

			case 19:
				this.enterOuterAlt(_localctx, 19);
				{
				this.state = 865;
				this.documentbit();
				}
				break;

			case 20:
				this.enterOuterAlt(_localctx, 20);
				{
				this.state = 866;
				this.appbit();
				}
				break;

			case 21:
				this.enterOuterAlt(_localctx, 21);
				{
				this.state = 867;
				this.websitebit();
				}
				break;

			case 22:
				this.enterOuterAlt(_localctx, 22);
				{
				this.state = 868;
				this.stillimagefilmbit();
				}
				break;

			case 23:
				this.enterOuterAlt(_localctx, 23);
				{
				this.state = 869;
				this.angleref();
				}
				break;

			case 24:
				this.enterOuterAlt(_localctx, 24);
				{
				this.state = 870;
				this.anchor();
				}
				break;

			case 25:
				this.enterOuterAlt(_localctx, 25);
				{
				this.state = 871;
				this.bracketed_text();
				}
				break;

			case 26:
				this.enterOuterAlt(_localctx, 26);
				{
				this.state = 872;
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
		this.enterRule(_localctx, 24, matchParser.RULE_gap);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 875;
			this.single_gap();
			this.state = 883;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 102, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					this.state = 881;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case matchParser.OPU:
						{
						this.state = 876;
						this.single_gap();
						}
						break;
					case matchParser.OPB:
						{
						this.state = 877;
						this.instruction();
						}
						break;
					case matchParser.OPQ:
						{
						this.state = 878;
						this.hint();
						}
						break;
					case matchParser.OPC:
						{
						this.state = 879;
						this.item();
						}
						break;
					case matchParser.AtExampleWithStr:
					case matchParser.AtExamplecol:
					case matchParser.AtExamplecl:
						{
						this.state = 880;
						this.example();
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					}
				}
				this.state = 885;
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
	public single_gap(): Single_gapContext {
		let _localctx: Single_gapContext = new Single_gapContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, matchParser.RULE_single_gap);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 886;
			this.match(matchParser.OPU);
			this.state = 890;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 103, this._ctx) ) {
			case 1:
				{
				this.state = 887;
				this.match(matchParser.NUMERIC);
				}
				break;

			case 2:
				{
				this.state = 888;
				this.match(matchParser.STRING);
				}
				break;

			case 3:
				// tslint:disable-next-line:no-empty
				{
				}
				break;
			}
			this.state = 895;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 104, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 892;
					this.s_and_w();
					}
					}
				}
				this.state = 897;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 104, this._ctx);
			}
			this.state = 898;
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
	public ml_example(): Ml_exampleContext {
		let _localctx: Ml_exampleContext = new Ml_exampleContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, matchParser.RULE_ml_example);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 900;
			this.match(matchParser.AtExamplecol);
			this.state = 908;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 107, this._ctx) ) {
			case 1:
				{
				this.state = 902;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === matchParser.NL) {
					{
					this.state = 901;
					this.match(matchParser.NL);
					}
				}

				this.state = 904;
				this.lines();
				this.state = 906;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === matchParser.NL) {
					{
					this.state = 905;
					this.match(matchParser.NL);
					}
				}

				}
				break;
			}
			this.state = 910;
			this.match(matchParser.CL);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 30, matchParser.RULE_longans);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 912;
			this.match(matchParser.AtLonganswer);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 32, matchParser.RULE_shortans);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 914;
			this.match(matchParser.AtShortanswer);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 34, matchParser.RULE_resource);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 916;
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
	public pair_heading(): Pair_headingContext {
		let _localctx: Pair_headingContext = new Pair_headingContext(this._ctx, this.state);
		this.enterRule(_localctx, 36, matchParser.RULE_pair_heading);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 918;
			this.key_title();
			{
			this.state = 922;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === matchParser.NL) {
				{
				{
				this.state = 919;
				this.match(matchParser.NL);
				}
				}
				this.state = 924;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 925;
			this.match(matchParser.EQ);
			this.state = 929;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === matchParser.NL) {
				{
				{
				this.state = 926;
				this.match(matchParser.NL);
				}
				}
				this.state = 931;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
			this.state = 932;
			this.value_title();
			this.state = 933;
			this.match(matchParser.NL);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public pair_heading_multi(): Pair_heading_multiContext {
		let _localctx: Pair_heading_multiContext = new Pair_heading_multiContext(this._ctx, this.state);
		this.enterRule(_localctx, 38, matchParser.RULE_pair_heading_multi);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 935;
			this.key_title();
			this.state = 949;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					{
					this.state = 937;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					do {
						{
						{
						this.state = 936;
						this.match(matchParser.NL);
						}
						}
						this.state = 939;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					} while (_la === matchParser.NL);
					this.state = 941;
					this.match(matchParser.EQ);
					this.state = 945;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === matchParser.NL) {
						{
						{
						this.state = 942;
						this.match(matchParser.NL);
						}
						}
						this.state = 947;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
					this.state = 948;
					this.value_title_multi();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 951;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 112, this._ctx);
			} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
			this.state = 953;
			this.match(matchParser.NL);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 40, matchParser.RULE_key_title);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 955;
			this.match(matchParser.OPHASH);
			this.state = 957;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 113, this._ctx) ) {
			case 1:
				{
				this.state = 956;
				this.s_and_w();
				}
				break;
			}
			this.state = 959;
			this.match(matchParser.CL);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 42, matchParser.RULE_value_title);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 961;
			this.match(matchParser.OPHASH);
			this.state = 965;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 114, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 962;
					this.s_and_w();
					}
					}
				}
				this.state = 967;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 114, this._ctx);
			}
			this.state = 968;
			this.match(matchParser.CL);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public value_title_multi(): Value_title_multiContext {
		let _localctx: Value_title_multiContext = new Value_title_multiContext(this._ctx, this.state);
		this.enterRule(_localctx, 44, matchParser.RULE_value_title_multi);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 970;
			this.match(matchParser.OPHASH);
			this.state = 974;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 115, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 971;
					this.s_and_w();
					}
					}
				}
				this.state = 976;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 115, this._ctx);
			}
			this.state = 977;
			this.match(matchParser.CL);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public pairs(): PairsContext {
		let _localctx: PairsContext = new PairsContext(this._ctx, this.state);
		this.enterRule(_localctx, 46, matchParser.RULE_pairs);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 979;
			this.match(matchParser.HSPL);
			this.state = 980;
			this.match(matchParser.NL);
			this.state = 982;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 981;
					this.pqpair();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 984;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 116, this._ctx);
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
	public pqpair(): PqpairContext {
		let _localctx: PqpairContext = new PqpairContext(this._ctx, this.state);
		this.enterRule(_localctx, 48, matchParser.RULE_pqpair);
		let _la: number;
		try {
			let _alt: number;
			this.state = 1060;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 126, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 986;
				this.pquery();
				{
				this.state = 987;
				this.match(matchParser.NL);
				this.state = 988;
				this.match(matchParser.EQ);
				this.state = 989;
				this.match(matchParser.NL);
				}
				this.state = 991;
				this.panswer();
				this.state = 997;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === matchParser.OR) {
					{
					{
					this.state = 992;
					this.or_();
					this.state = 993;
					this.panswer();
					}
					}
					this.state = 999;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				{
				this.state = 1003;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === matchParser.NL) {
					{
					{
					this.state = 1000;
					this.match(matchParser.NL);
					}
					}
					this.state = 1005;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1006;
				this.match(matchParser.HSPL);
				this.state = 1010;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 119, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 1007;
						this.match(matchParser.NL);
						}
						}
					}
					this.state = 1012;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 119, this._ctx);
				}
				}
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1013;
				this.pquery();
				{
				this.state = 1014;
				this.match(matchParser.NL);
				this.state = 1015;
				this.match(matchParser.EQ);
				this.state = 1019;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === matchParser.NL) {
					{
					{
					this.state = 1016;
					this.match(matchParser.NL);
					}
					}
					this.state = 1021;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
				{
				this.state = 1022;
				this.match(matchParser.HSPL);
				this.state = 1026;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 121, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 1023;
						this.match(matchParser.NL);
						}
						}
					}
					this.state = 1028;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 121, this._ctx);
				}
				}
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				{
				this.state = 1032;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === matchParser.NL) {
					{
					{
					this.state = 1029;
					this.match(matchParser.NL);
					}
					}
					this.state = 1034;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1035;
				this.match(matchParser.EQ);
				this.state = 1039;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 123, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 1036;
						this.match(matchParser.NL);
						}
						}
					}
					this.state = 1041;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 123, this._ctx);
				}
				}
				{
				this.state = 1042;
				this.match(matchParser.NL);
				this.state = 1043;
				this.match(matchParser.EQ);
				this.state = 1044;
				this.match(matchParser.NL);
				}
				this.state = 1046;
				this.panswer();
				{
				this.state = 1050;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === matchParser.NL) {
					{
					{
					this.state = 1047;
					this.match(matchParser.NL);
					}
					}
					this.state = 1052;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1053;
				this.match(matchParser.HSPL);
				this.state = 1057;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 125, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 1054;
						this.match(matchParser.NL);
						}
						}
					}
					this.state = 1059;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 125, this._ctx);
				}
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
	public pquery(): PqueryContext {
		let _localctx: PqueryContext = new PqueryContext(this._ctx, this.state);
		this.enterRule(_localctx, 50, matchParser.RULE_pquery);
		try {
			let _alt: number;
			this.state = 1070;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 128, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1062;
				this.pquery__();
				this.state = 1066;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 127, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 1063;
						this.pquery__();
						}
						}
					}
					this.state = 1068;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 127, this._ctx);
				}
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				// tslint:disable-next-line:no-empty
				{
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
	public pquery__(): Pquery__Context {
		let _localctx: Pquery__Context = new Pquery__Context(this._ctx, this.state);
		this.enterRule(_localctx, 52, matchParser.RULE_pquery__);
		let _la: number;
		try {
			let _alt: number;
			this.state = 1112;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 137, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1075;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === matchParser.NL) {
					{
					{
					this.state = 1072;
					this.match(matchParser.NL);
					}
					}
					this.state = 1077;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1081;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 130, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 1078;
						this.match(matchParser.S);
						}
						}
					}
					this.state = 1083;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 130, this._ctx);
				}
				this.state = 1087;
				this._errHandler.sync(this);
				_alt = 1;
				do {
					switch (_alt) {
					case 1:
						{
						this.state = 1087;
						this._errHandler.sync(this);
						switch ( this.interpreter.adaptivePredict(this._input, 131, this._ctx) ) {
						case 1:
							{
							this.state = 1084;
							this.item();
							}
							break;

						case 2:
							{
							this.state = 1085;
							this.s_and_w();
							}
							break;

						case 3:
							{
							this.state = 1086;
							this.match(matchParser.COLON);
							}
							break;
						}
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					this.state = 1089;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 132, this._ctx);
				} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
				this.state = 1098;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 134, this._ctx) ) {
				case 1:
					{
					this.state = 1094;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === matchParser.S) {
						{
						{
						this.state = 1091;
						this.match(matchParser.S);
						}
						}
						this.state = 1096;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					{
					this.state = 1097;
					this.example();
					}
					}
					break;
				}
				this.state = 1103;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case matchParser.AtLonganswer:
					{
					this.state = 1100;
					this.longans();
					}
					break;
				case matchParser.AtShortanswer:
					{
					this.state = 1101;
					this.shortans();
					}
					break;
				case matchParser.TENSE:
					{
					this.state = 1102;
					this.tense();
					}
					break;
				case matchParser.S:
				case matchParser.OPB:
				case matchParser.OPS:
				case matchParser.OPC:
				case matchParser.CL:
				case matchParser.COLON:
				case matchParser.AMP:
				case matchParser.DBLCOLON:
				case matchParser.Greater:
				case matchParser.Less:
				case matchParser.RightAngle:
				case matchParser.RightArrow:
				case matchParser.NUMERIC:
				case matchParser.STRING:
				case matchParser.NL:
				case matchParser.NOTBITMARK:
				case matchParser.ELIPSIS:
				case matchParser.SENTENCE:
				case matchParser.BARSTRING:
				case matchParser.LIST_LINE:
					break;
				default:
					break;
				}
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1108;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === matchParser.NL) {
					{
					{
					this.state = 1105;
					this.match(matchParser.NL);
					}
					}
					this.state = 1110;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1111;
				this.instruction();
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
	public tense(): TenseContext {
		let _localctx: TenseContext = new TenseContext(this._ctx, this.state);
		this.enterRule(_localctx, 54, matchParser.RULE_tense);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1114;
			this.match(matchParser.TENSE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public panswer(): PanswerContext {
		let _localctx: PanswerContext = new PanswerContext(this._ctx, this.state);
		this.enterRule(_localctx, 56, matchParser.RULE_panswer);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1116;
			this.panswer__();
			this.state = 1120;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case matchParser.AtLonganswer:
				{
				this.state = 1117;
				this.longans();
				}
				break;
			case matchParser.AtShortanswer:
				{
				this.state = 1118;
				this.shortans();
				}
				break;
			case matchParser.AtExampleWithStr:
			case matchParser.AtExamplecol:
			case matchParser.AtExamplecl:
				{
				this.state = 1119;
				this.example();
				}
				break;
			case matchParser.HSPL:
			case matchParser.OR:
			case matchParser.NL:
				break;
			default:
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
	public panswer__(): Panswer__Context {
		let _localctx: Panswer__Context = new Panswer__Context(this._ctx, this.state);
		this.enterRule(_localctx, 58, matchParser.RULE_panswer__);
		let _la: number;
		try {
			let _alt: number;
			this.state = 1189;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 154, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1123;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (matchParser.AtExampleWithStr - 64)) | (1 << (matchParser.AtExamplecol - 64)) | (1 << (matchParser.AtExamplecl - 64)))) !== 0)) {
					{
					this.state = 1122;
					this.example();
					}
				}

				this.state = 1126;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === matchParser.OPC) {
					{
					this.state = 1125;
					this.item();
					}
				}

				this.state = 1134;
				this._errHandler.sync(this);
				_alt = 1;
				do {
					switch (_alt) {
					case 1:
						{
						this.state = 1134;
						this._errHandler.sync(this);
						switch ( this.interpreter.adaptivePredict(this._input, 141, this._ctx) ) {
						case 1:
							{
							this.state = 1128;
							this.s_and_w();
							}
							break;

						case 2:
							{
							this.state = 1129;
							this.match(matchParser.NL);
							}
							break;

						case 3:
							{
							this.state = 1130;
							this.match(matchParser.S);
							}
							break;

						case 4:
							{
							this.state = 1131;
							this.match(matchParser.OP);
							}
							break;

						case 5:
							{
							this.state = 1132;
							this.match(matchParser.CL);
							}
							break;

						case 6:
							{
							this.state = 1133;
							this.match(matchParser.DBLCOLON);
							}
							break;
						}
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					this.state = 1136;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 142, this._ctx);
				} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
				this.state = 1145;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 144, this._ctx) ) {
				case 1:
					{
					this.state = 1141;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === matchParser.S) {
						{
						{
						this.state = 1138;
						this.match(matchParser.S);
						}
						}
						this.state = 1143;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					this.state = 1144;
					this.example();
					}
					break;
				}
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				// tslint:disable-next-line:no-empty
				{
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1148;
				this.example();
				this.state = 1150;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << matchParser.S) | (1 << matchParser.OPS) | (1 << matchParser.CL) | (1 << matchParser.COLON) | (1 << matchParser.AMP) | (1 << matchParser.DBLCOLON))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (matchParser.Greater - 33)) | (1 << (matchParser.Less - 33)) | (1 << (matchParser.RightAngle - 33)) | (1 << (matchParser.RightArrow - 33)) | (1 << (matchParser.NUMERIC - 33)) | (1 << (matchParser.STRING - 33)) | (1 << (matchParser.NOTBITMARK - 33)) | (1 << (matchParser.ELIPSIS - 33)) | (1 << (matchParser.SENTENCE - 33)) | (1 << (matchParser.BARSTRING - 33)))) !== 0) || _la === matchParser.LIST_LINE) {
					{
					this.state = 1149;
					this.s_and_w();
					}
				}

				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1152;
				this.s_and_w();
				this.state = 1154;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 146, this._ctx) ) {
				case 1:
					{
					this.state = 1153;
					this.match(matchParser.NL);
					}
					break;
				}
				this.state = 1161;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 148, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						this.state = 1159;
						this._errHandler.sync(this);
						switch (this._input.LA(1)) {
						case matchParser.AtExampleWithStr:
						case matchParser.AtExamplecol:
						case matchParser.AtExamplecl:
							{
							this.state = 1156;
							this.example();
							}
							break;
						case matchParser.OPQ:
							{
							this.state = 1157;
							this.hint();
							}
							break;
						case matchParser.OPB:
							{
							this.state = 1158;
							this.instruction();
							}
							break;
						default:
							throw new NoViableAltException(this);
						}
						}
					}
					this.state = 1163;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 148, this._ctx);
				}
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 1164;
				this.s_and_w();
				this.state = 1165;
				this.match(matchParser.NL);
				this.state = 1166;
				this.instruction();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 1169;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === matchParser.OPB) {
					{
					this.state = 1168;
					this.instruction();
					}
				}

				this.state = 1171;
				this.opdoll();
				this.state = 1176;
				this._errHandler.sync(this);
				_alt = 1;
				do {
					switch (_alt) {
					case 1:
						{
						this.state = 1176;
						this._errHandler.sync(this);
						switch ( this.interpreter.adaptivePredict(this._input, 150, this._ctx) ) {
						case 1:
							{
							this.state = 1172;
							this.s_and_w();
							}
							break;

						case 2:
							{
							this.state = 1173;
							this.match(matchParser.NL);
							}
							break;

						case 3:
							{
							this.state = 1174;
							this.match(matchParser.DOT);
							}
							break;

						case 4:
							{
							this.state = 1175;
							this.match(matchParser.COLON);
							}
							break;
						}
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					this.state = 1178;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 151, this._ctx);
				} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
				this.state = 1180;
				this.match(matchParser.CL);
				this.state = 1182;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 152, this._ctx) ) {
				case 1:
					{
					this.state = 1181;
					this.example();
					}
					break;
				}
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 1184;
				this.instruction();
				this.state = 1185;
				this.s_and_w();
				this.state = 1187;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 153, this._ctx) ) {
				case 1:
					{
					this.state = 1186;
					this.example();
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
	public pair_images(): Pair_imagesContext {
		let _localctx: Pair_imagesContext = new Pair_imagesContext(this._ctx, this.state);
		this.enterRule(_localctx, 60, matchParser.RULE_pair_images);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1191;
			this.match(matchParser.HSPL);
			this.state = 1192;
			this.match(matchParser.NL);
			this.state = 1194;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 1193;
					this.pair_image();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 1196;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 155, this._ctx);
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
	public pair_image(): Pair_imageContext {
		let _localctx: Pair_imageContext = new Pair_imageContext(this._ctx, this.state);
		this.enterRule(_localctx, 62, matchParser.RULE_pair_image);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1198;
			this.pimagebit();
			{
			this.state = 1199;
			this.match(matchParser.NL);
			this.state = 1200;
			this.match(matchParser.EQ);
			this.state = 1201;
			this.match(matchParser.NL);
			}
			this.state = 1203;
			this.panswer();
			{
			this.state = 1207;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === matchParser.NL) {
				{
				{
				this.state = 1204;
				this.match(matchParser.NL);
				}
				}
				this.state = 1209;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1210;
			this.match(matchParser.HSPL);
			this.state = 1214;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 157, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1211;
					this.match(matchParser.NL);
					}
					}
				}
				this.state = 1216;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 157, this._ctx);
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
	public pair_audios(): Pair_audiosContext {
		let _localctx: Pair_audiosContext = new Pair_audiosContext(this._ctx, this.state);
		this.enterRule(_localctx, 64, matchParser.RULE_pair_audios);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1217;
			this.match(matchParser.HSPL);
			this.state = 1218;
			this.match(matchParser.NL);
			this.state = 1220;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 1219;
					this.pair_audio();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 1222;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 158, this._ctx);
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
	public pair_audio(): Pair_audioContext {
		let _localctx: Pair_audioContext = new Pair_audioContext(this._ctx, this.state);
		this.enterRule(_localctx, 66, matchParser.RULE_pair_audio);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1224;
			this.paudiobit();
			{
			this.state = 1225;
			this.match(matchParser.NL);
			this.state = 1226;
			this.match(matchParser.EQ);
			this.state = 1227;
			this.match(matchParser.NL);
			}
			this.state = 1229;
			this.panswer();
			{
			this.state = 1233;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === matchParser.NL) {
				{
				{
				this.state = 1230;
				this.match(matchParser.NL);
				}
				}
				this.state = 1235;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1236;
			this.match(matchParser.HSPL);
			this.state = 1240;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 160, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1237;
					this.match(matchParser.NL);
					}
					}
				}
				this.state = 1242;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 160, this._ctx);
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
	public pair_multivals(): Pair_multivalsContext {
		let _localctx: Pair_multivalsContext = new Pair_multivalsContext(this._ctx, this.state);
		this.enterRule(_localctx, 68, matchParser.RULE_pair_multivals);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1243;
			this.match(matchParser.HSPL);
			this.state = 1244;
			this.match(matchParser.NL);
			this.state = 1246;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 1245;
					this.pair_multival();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 1248;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 161, this._ctx);
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
	public pair_multival(): Pair_multivalContext {
		let _localctx: Pair_multivalContext = new Pair_multivalContext(this._ctx, this.state);
		this.enterRule(_localctx, 70, matchParser.RULE_pair_multival);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1250;
			this.mpquery();
			this.state = 1256;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					{
					this.state = 1251;
					this.match(matchParser.NL);
					this.state = 1252;
					this.match(matchParser.EQ);
					this.state = 1253;
					this.match(matchParser.NL);
					}
					this.state = 1255;
					this.mpanswer();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 1258;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 162, this._ctx);
			} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
			{
			this.state = 1263;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === matchParser.NL) {
				{
				{
				this.state = 1260;
				this.match(matchParser.NL);
				}
				}
				this.state = 1265;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1266;
			this.match(matchParser.HSPL);
			this.state = 1270;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 164, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1267;
					this.match(matchParser.NL);
					}
					}
				}
				this.state = 1272;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 164, this._ctx);
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
	public pairmultival_image(): Pairmultival_imageContext {
		let _localctx: Pairmultival_imageContext = new Pairmultival_imageContext(this._ctx, this.state);
		this.enterRule(_localctx, 72, matchParser.RULE_pairmultival_image);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 1273;
			this.match(matchParser.HSPL);
			this.state = 1274;
			this.imagebit();
			this.state = 1275;
			this.match(matchParser.EQ);
			this.state = 1276;
			this.mpanswer();
			this.state = 1281;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === matchParser.EQ) {
				{
				{
				this.state = 1277;
				this.match(matchParser.EQ);
				this.state = 1278;
				this.mpanswer();
				}
				}
				this.state = 1283;
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
	public pairmultival_audio(): Pairmultival_audioContext {
		let _localctx: Pairmultival_audioContext = new Pairmultival_audioContext(this._ctx, this.state);
		this.enterRule(_localctx, 74, matchParser.RULE_pairmultival_audio);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1295;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 1284;
				this.match(matchParser.HSPL);
				this.state = 1285;
				this.audiobit();
				this.state = 1286;
				this.match(matchParser.EQ);
				this.state = 1287;
				this.mpanswer();
				this.state = 1292;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === matchParser.EQ) {
					{
					{
					this.state = 1288;
					this.match(matchParser.EQ);
					this.state = 1289;
					this.mpanswer();
					}
					}
					this.state = 1294;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
				}
				this.state = 1297;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === matchParser.HSPL);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public mpquery(): MpqueryContext {
		let _localctx: MpqueryContext = new MpqueryContext(this._ctx, this.state);
		this.enterRule(_localctx, 76, matchParser.RULE_mpquery);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1299;
			this.mpquery__();
			this.state = 1304;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 168, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1300;
					this.match(matchParser.NL);
					this.state = 1301;
					this.mpquery__();
					}
					}
				}
				this.state = 1306;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 168, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public mpquery__(): Mpquery__Context {
		let _localctx: Mpquery__Context = new Mpquery__Context(this._ctx, this.state);
		this.enterRule(_localctx, 78, matchParser.RULE_mpquery__);
		let _la: number;
		try {
			this.state = 1330;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 174, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1310;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === matchParser.NL) {
					{
					{
					this.state = 1307;
					this.match(matchParser.NL);
					}
					}
					this.state = 1312;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1316;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					this.state = 1316;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 170, this._ctx) ) {
					case 1:
						{
						this.state = 1313;
						this.item();
						}
						break;

					case 2:
						{
						this.state = 1314;
						this.s_and_w();
						}
						break;

					case 3:
						{
						this.state = 1315;
						this.match(matchParser.COLON);
						}
						break;
					}
					}
					this.state = 1318;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << matchParser.S) | (1 << matchParser.OPS) | (1 << matchParser.OPC) | (1 << matchParser.CL) | (1 << matchParser.COLON) | (1 << matchParser.AMP) | (1 << matchParser.DBLCOLON))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (matchParser.Greater - 33)) | (1 << (matchParser.Less - 33)) | (1 << (matchParser.RightAngle - 33)) | (1 << (matchParser.RightArrow - 33)) | (1 << (matchParser.NUMERIC - 33)) | (1 << (matchParser.STRING - 33)) | (1 << (matchParser.NOTBITMARK - 33)) | (1 << (matchParser.ELIPSIS - 33)) | (1 << (matchParser.SENTENCE - 33)) | (1 << (matchParser.BARSTRING - 33)))) !== 0) || _la === matchParser.LIST_LINE);
				this.state = 1321;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (matchParser.AtExampleWithStr - 64)) | (1 << (matchParser.AtExamplecol - 64)) | (1 << (matchParser.AtExamplecl - 64)))) !== 0)) {
					{
					this.state = 1320;
					this.example();
					}
				}

				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1326;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === matchParser.NL) {
					{
					{
					this.state = 1323;
					this.match(matchParser.NL);
					}
					}
					this.state = 1328;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1329;
				this.match(matchParser.LIST_LINE);
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
	public mpanswer(): MpanswerContext {
		let _localctx: MpanswerContext = new MpanswerContext(this._ctx, this.state);
		this.enterRule(_localctx, 80, matchParser.RULE_mpanswer);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1332;
			this.mpanswer__();
			this.state = 1335;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case matchParser.AtLonganswer:
				{
				this.state = 1333;
				this.longans();
				}
				break;
			case matchParser.AtShortanswer:
				{
				this.state = 1334;
				this.shortans();
				}
				break;
			case matchParser.EOF:
			case matchParser.EQ:
			case matchParser.HSPL:
			case matchParser.OR:
			case matchParser.NL:
				break;
			default:
				break;
			}
			this.state = 1348;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 178, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1339;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case matchParser.OR:
						{
						this.state = 1337;
						this.or_();
						}
						break;
					case matchParser.NL:
						{
						this.state = 1338;
						this.match(matchParser.NL);
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					this.state = 1341;
					this.mpanswer__();
					this.state = 1344;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case matchParser.AtLonganswer:
						{
						this.state = 1342;
						this.longans();
						}
						break;
					case matchParser.AtShortanswer:
						{
						this.state = 1343;
						this.shortans();
						}
						break;
					case matchParser.EOF:
					case matchParser.EQ:
					case matchParser.HSPL:
					case matchParser.OR:
					case matchParser.NL:
						break;
					default:
						break;
					}
					}
					}
				}
				this.state = 1350;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 178, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public mpanswer__(): Mpanswer__Context {
		let _localctx: Mpanswer__Context = new Mpanswer__Context(this._ctx, this.state);
		this.enterRule(_localctx, 82, matchParser.RULE_mpanswer__);
		let _la: number;
		try {
			let _alt: number;
			this.state = 1418;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 194, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1352;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (matchParser.AtExampleWithStr - 64)) | (1 << (matchParser.AtExamplecol - 64)) | (1 << (matchParser.AtExamplecl - 64)))) !== 0)) {
					{
					this.state = 1351;
					this.example();
					}
				}

				this.state = 1355;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === matchParser.OPC) {
					{
					this.state = 1354;
					this.item();
					}
				}

				this.state = 1363;
				this._errHandler.sync(this);
				_alt = 1;
				do {
					switch (_alt) {
					case 1:
						{
						this.state = 1363;
						this._errHandler.sync(this);
						switch ( this.interpreter.adaptivePredict(this._input, 181, this._ctx) ) {
						case 1:
							{
							this.state = 1357;
							this.s_and_w();
							}
							break;

						case 2:
							{
							this.state = 1358;
							this.match(matchParser.NL);
							}
							break;

						case 3:
							{
							this.state = 1359;
							this.match(matchParser.S);
							}
							break;

						case 4:
							{
							this.state = 1360;
							this.match(matchParser.OP);
							}
							break;

						case 5:
							{
							this.state = 1361;
							this.match(matchParser.CL);
							}
							break;

						case 6:
							{
							this.state = 1362;
							this.match(matchParser.DBLCOLON);
							}
							break;
						}
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					this.state = 1365;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 182, this._ctx);
				} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
				this.state = 1374;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === matchParser.S || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (matchParser.AtExampleWithStr - 64)) | (1 << (matchParser.AtExamplecol - 64)) | (1 << (matchParser.AtExamplecl - 64)))) !== 0)) {
					{
					this.state = 1370;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === matchParser.S) {
						{
						{
						this.state = 1367;
						this.match(matchParser.S);
						}
						}
						this.state = 1372;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					this.state = 1373;
					this.example();
					}
				}

				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1377;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === matchParser.OPB) {
					{
					this.state = 1376;
					this.instruction();
					}
				}

				this.state = 1379;
				this.opdoll();
				this.state = 1384;
				this._errHandler.sync(this);
				_alt = 1;
				do {
					switch (_alt) {
					case 1:
						{
						this.state = 1384;
						this._errHandler.sync(this);
						switch ( this.interpreter.adaptivePredict(this._input, 186, this._ctx) ) {
						case 1:
							{
							this.state = 1380;
							this.s_and_w();
							}
							break;

						case 2:
							{
							this.state = 1381;
							this.match(matchParser.NL);
							}
							break;

						case 3:
							{
							this.state = 1382;
							this.match(matchParser.DOT);
							}
							break;

						case 4:
							{
							this.state = 1383;
							this.match(matchParser.COLON);
							}
							break;
						}
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					this.state = 1386;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 187, this._ctx);
				} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
				this.state = 1388;
				this.match(matchParser.CL);
				this.state = 1390;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (matchParser.AtExampleWithStr - 64)) | (1 << (matchParser.AtExamplecol - 64)) | (1 << (matchParser.AtExamplecl - 64)))) !== 0)) {
					{
					this.state = 1389;
					this.example();
					}
				}

				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1392;
				this.instruction();
				this.state = 1393;
				this.s_and_w();
				this.state = 1395;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (matchParser.AtExampleWithStr - 64)) | (1 << (matchParser.AtExamplecol - 64)) | (1 << (matchParser.AtExamplecl - 64)))) !== 0)) {
					{
					this.state = 1394;
					this.example();
					}
				}

				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				// tslint:disable-next-line:no-empty
				{
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 1398;
				this.example();
				this.state = 1400;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << matchParser.S) | (1 << matchParser.OPS) | (1 << matchParser.CL) | (1 << matchParser.COLON) | (1 << matchParser.AMP) | (1 << matchParser.DBLCOLON))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (matchParser.Greater - 33)) | (1 << (matchParser.Less - 33)) | (1 << (matchParser.RightAngle - 33)) | (1 << (matchParser.RightArrow - 33)) | (1 << (matchParser.NUMERIC - 33)) | (1 << (matchParser.STRING - 33)) | (1 << (matchParser.NOTBITMARK - 33)) | (1 << (matchParser.ELIPSIS - 33)) | (1 << (matchParser.SENTENCE - 33)) | (1 << (matchParser.BARSTRING - 33)))) !== 0) || _la === matchParser.LIST_LINE) {
					{
					this.state = 1399;
					this.s_and_w();
					}
				}

				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 1402;
				this.s_and_w();
				this.state = 1404;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 191, this._ctx) ) {
				case 1:
					{
					this.state = 1403;
					this.match(matchParser.NL);
					}
					break;
				}
				this.state = 1411;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === matchParser.OPB || _la === matchParser.OPQ || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (matchParser.AtExampleWithStr - 64)) | (1 << (matchParser.AtExamplecol - 64)) | (1 << (matchParser.AtExamplecl - 64)))) !== 0)) {
					{
					this.state = 1409;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case matchParser.AtExampleWithStr:
					case matchParser.AtExamplecol:
					case matchParser.AtExamplecl:
						{
						this.state = 1406;
						this.example();
						}
						break;
					case matchParser.OPQ:
						{
						this.state = 1407;
						this.hint();
						}
						break;
					case matchParser.OPB:
						{
						this.state = 1408;
						this.instruction();
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					}
					this.state = 1413;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 1414;
				this.s_and_w();
				this.state = 1415;
				this.match(matchParser.NL);
				this.state = 1416;
				this.instruction();
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
	public pimagebit(): PimagebitContext {
		let _localctx: PimagebitContext = new PimagebitContext(this._ctx, this.state);
		this.enterRule(_localctx, 84, matchParser.RULE_pimagebit);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1420;
			this.pimage_one();
			this.state = 1424;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 195, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1421;
					this.image_chained4match();
					}
					}
				}
				this.state = 1426;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 195, this._ctx);
			}
			this.state = 1431;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === matchParser.OPATALT) {
				{
				this.state = 1427;
				this.match(matchParser.OPATALT);
				this.state = 1428;
				this.words();
				this.state = 1429;
				this.match(matchParser.CL);
				}
			}

			this.state = 1441;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === matchParser.OpAtCaption) {
				{
				this.state = 1433;
				this.match(matchParser.OpAtCaption);
				this.state = 1437;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 197, this._ctx);
				while (_alt !== 1 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1 + 1) {
						{
						{
						this.state = 1434;
						this.matchWildcard();
						}
						}
					}
					this.state = 1439;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 197, this._ctx);
				}
				this.state = 1440;
				this.match(matchParser.CL);
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
	public pimage_one(): Pimage_oneContext {
		let _localctx: Pimage_oneContext = new Pimage_oneContext(this._ctx, this.state);
		this.enterRule(_localctx, 86, matchParser.RULE_pimage_one);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1443;
			this.image_one();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public paudiobit(): PaudiobitContext {
		let _localctx: PaudiobitContext = new PaudiobitContext(this._ctx, this.state);
		this.enterRule(_localctx, 88, matchParser.RULE_paudiobit);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1445;
			this.op_audio_format();
			this.state = 1446;
			this.match(matchParser.COLON);
			this.state = 1447;
			this.url();
			this.state = 1448;
			this.match(matchParser.CL);
			this.state = 1453;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === matchParser.OPATALT) {
				{
				this.state = 1449;
				this.match(matchParser.OPATALT);
				this.state = 1450;
				this.words();
				this.state = 1451;
				this.match(matchParser.CL);
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
	public bullet_item(): Bullet_itemContext {
		let _localctx: Bullet_itemContext = new Bullet_itemContext(this._ctx, this.state);
		this.enterRule(_localctx, 90, matchParser.RULE_bullet_item);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1455;
			this.match(matchParser.OPBUL);
			this.state = 1456;
			this.s_and_w();
			this.state = 1457;
			this.match(matchParser.CL);
			this.state = 1459;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === matchParser.AtPoints) {
				{
				this.state = 1458;
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
		this.enterRule(_localctx, 92, matchParser.RULE_atpoint);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1461;
			this.match(matchParser.AtPoints);
			this.state = 1462;
			this.match(matchParser.NUMERIC);
			this.state = 1463;
			this.match(matchParser.CL);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 94, matchParser.RULE_format);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1468;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 201, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1465;
					this.resource_format();
					}
					}
				}
				this.state = 1470;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 201, this._ctx);
			}
			this.state = 1476;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 87)) & ~0x1F) === 0 && ((1 << (_la - 87)) & ((1 << (matchParser.AmpAudio - 87)) | (1 << (matchParser.AmpImage - 87)) | (1 << (matchParser.AmpImageZoom - 87)) | (1 << (matchParser.AmpVideo - 87)) | (1 << (matchParser.AmpArticle - 87)) | (1 << (matchParser.AmpDocument - 87)) | (1 << (matchParser.AmpApp - 87)) | (1 << (matchParser.AmpWebsite - 87)) | (1 << (matchParser.AmpStillImageFilm - 87)) | (1 << (matchParser.AmpPdf - 87)) | (1 << (matchParser.AmpAudioLink - 87)) | (1 << (matchParser.AmpImageLink - 87)) | (1 << (matchParser.AmpVideoLink - 87)) | (1 << (matchParser.AmpArticleLink - 87)) | (1 << (matchParser.AmpDocumentLink - 87)) | (1 << (matchParser.AmpDocumentDownload - 87)) | (1 << (matchParser.AmpAppLink - 87)) | (1 << (matchParser.AmpWebsiteLink - 87)) | (1 << (matchParser.AmpStillImageFilmLink - 87)))) !== 0) || ((((_la - 127)) & ~0x1F) === 0 && ((1 << (_la - 127)) & ((1 << (matchParser.AmpVideoEmbed - 127)) | (1 << (matchParser.AmpDocumentEmbed - 127)) | (1 << (matchParser.AmpStillImageFilmEmbed - 127)) | (1 << (matchParser.ColonText - 127)) | (1 << (matchParser.ColonJson - 127)))) !== 0)) {
				{
				this.state = 1474;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case matchParser.ColonText:
					{
					this.state = 1471;
					this.match(matchParser.ColonText);
					}
					break;
				case matchParser.ColonJson:
					{
					this.state = 1472;
					this.match(matchParser.ColonJson);
					}
					break;
				case matchParser.AmpAudio:
				case matchParser.AmpImage:
				case matchParser.AmpImageZoom:
				case matchParser.AmpVideo:
				case matchParser.AmpArticle:
				case matchParser.AmpDocument:
				case matchParser.AmpApp:
				case matchParser.AmpWebsite:
				case matchParser.AmpStillImageFilm:
				case matchParser.AmpPdf:
				case matchParser.AmpAudioLink:
				case matchParser.AmpImageLink:
				case matchParser.AmpVideoLink:
				case matchParser.AmpArticleLink:
				case matchParser.AmpDocumentLink:
				case matchParser.AmpDocumentDownload:
				case matchParser.AmpAppLink:
				case matchParser.AmpWebsiteLink:
				case matchParser.AmpStillImageFilmLink:
				case matchParser.AmpVideoEmbed:
				case matchParser.AmpDocumentEmbed:
				case matchParser.AmpStillImageFilmEmbed:
					{
					this.state = 1473;
					this.resource_format_extra();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				this.state = 1478;
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
		this.enterRule(_localctx, 96, matchParser.RULE_resource_format);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1479;
			_la = this._input.LA(1);
			if (!(((((_la - 91)) & ~0x1F) === 0 && ((1 << (_la - 91)) & ((1 << (matchParser.AmpArticle - 91)) | (1 << (matchParser.AmpDocument - 91)) | (1 << (matchParser.AmpWebsite - 91)) | (1 << (matchParser.AmpStillImageFilm - 91)) | (1 << (matchParser.AmpAudioLink - 91)) | (1 << (matchParser.AmpImageLink - 91)) | (1 << (matchParser.AmpVideoLink - 91)) | (1 << (matchParser.AmpArticleLink - 91)) | (1 << (matchParser.AmpDocumentLink - 91)) | (1 << (matchParser.AmpDocumentDownload - 91)) | (1 << (matchParser.AmpAppLink - 91)) | (1 << (matchParser.AmpWebsiteLink - 91)) | (1 << (matchParser.AmpStillImageFilmLink - 91)))) !== 0) || ((((_la - 127)) & ~0x1F) === 0 && ((1 << (_la - 127)) & ((1 << (matchParser.AmpVideoEmbed - 127)) | (1 << (matchParser.AmpAudioEmbed - 127)) | (1 << (matchParser.AmpDocumentEmbed - 127)) | (1 << (matchParser.AmpStillImageFilmEmbed - 127)) | (1 << (matchParser.BitmarkMinus - 127)) | (1 << (matchParser.BitmarkPlus - 127)) | (1 << (matchParser.ColonJson - 127)) | (1 << (matchParser.Prosemirror - 127)) | (1 << (matchParser.Placeholder - 127)))) !== 0))) {
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
		this.enterRule(_localctx, 98, matchParser.RULE_resource_format_extra);
		try {
			this.state = 1490;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case matchParser.AmpImage:
			case matchParser.AmpImageZoom:
			case matchParser.AmpImageLink:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1481;
				this.image_format();
				}
				break;
			case matchParser.AmpAudio:
			case matchParser.AmpAudioLink:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1482;
				this.audio_format();
				}
				break;
			case matchParser.AmpVideo:
			case matchParser.AmpVideoLink:
			case matchParser.AmpVideoEmbed:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1483;
				this.video_format();
				}
				break;
			case matchParser.AmpArticle:
			case matchParser.AmpArticleLink:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1484;
				this.article_format();
				}
				break;
			case matchParser.AmpDocument:
			case matchParser.AmpDocumentLink:
			case matchParser.AmpDocumentDownload:
			case matchParser.AmpDocumentEmbed:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 1485;
				this.document_format();
				}
				break;
			case matchParser.AmpApp:
			case matchParser.AmpAppLink:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 1486;
				this.app_format();
				}
				break;
			case matchParser.AmpWebsite:
			case matchParser.AmpWebsiteLink:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 1487;
				this.website_format();
				}
				break;
			case matchParser.AmpStillImageFilm:
			case matchParser.AmpStillImageFilmLink:
			case matchParser.AmpStillImageFilmEmbed:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 1488;
				this.stillimagefilm_format();
				}
				break;
			case matchParser.AmpPdf:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 1489;
				this.match(matchParser.AmpPdf);
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
		this.enterRule(_localctx, 100, matchParser.RULE_format2);
		try {
			this.state = 1498;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case matchParser.BitmarkMinus:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1492;
				this.match(matchParser.BitmarkMinus);
				}
				break;
			case matchParser.BitmarkPlus:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1493;
				this.match(matchParser.BitmarkPlus);
				}
				break;
			case matchParser.ColonText:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1494;
				this.match(matchParser.ColonText);
				}
				break;
			case matchParser.Placeholder:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1495;
				this.match(matchParser.Placeholder);
				}
				break;
			case matchParser.ColonJson:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 1496;
				this.match(matchParser.ColonJson);
				}
				break;
			case matchParser.EOF:
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
		this.enterRule(_localctx, 102, matchParser.RULE_image_format);
		let _la: number;
		try {
			this.state = 1513;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case matchParser.AmpImage:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1500;
				this.match(matchParser.AmpImage);
				this.state = 1503;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case matchParser.Image_type:
					{
					{
					this.state = 1501;
					this.match(matchParser.Image_type);
					}
					}
					break;
				case matchParser.DotArticleAtt:
					{
					{
					this.state = 1502;
					this.match(matchParser.DotArticleAtt);
					}
					}
					break;
				case matchParser.CL:
				case matchParser.AmpAudio:
				case matchParser.AmpImage:
				case matchParser.AmpImageZoom:
				case matchParser.AmpVideo:
				case matchParser.AmpArticle:
				case matchParser.AmpDocument:
				case matchParser.AmpApp:
				case matchParser.AmpWebsite:
				case matchParser.AmpStillImageFilm:
				case matchParser.AmpPdf:
				case matchParser.AmpAudioLink:
				case matchParser.AmpImageLink:
				case matchParser.AmpVideoLink:
				case matchParser.AmpArticleLink:
				case matchParser.AmpDocumentLink:
				case matchParser.AmpDocumentDownload:
				case matchParser.AmpAppLink:
				case matchParser.AmpWebsiteLink:
				case matchParser.AmpStillImageFilmLink:
				case matchParser.AmpVideoEmbed:
				case matchParser.AmpDocumentEmbed:
				case matchParser.AmpStillImageFilmEmbed:
				case matchParser.ColonText:
				case matchParser.ColonJson:
					break;
				default:
					break;
				}
				}
				break;
			case matchParser.AmpImageLink:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1505;
				this.match(matchParser.AmpImageLink);
				this.state = 1507;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === matchParser.Image_type) {
					{
					this.state = 1506;
					this.match(matchParser.Image_type);
					}
				}

				}
				break;
			case matchParser.AmpImageZoom:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1509;
				this.match(matchParser.AmpImageZoom);
				this.state = 1511;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === matchParser.Image_type) {
					{
					this.state = 1510;
					this.match(matchParser.Image_type);
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
		this.enterRule(_localctx, 104, matchParser.RULE_video_format);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1515;
			_la = this._input.LA(1);
			if (!(_la === matchParser.AmpVideo || _la === matchParser.AmpVideoLink || _la === matchParser.AmpVideoEmbed)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 1518;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === matchParser.COLON) {
				{
				this.state = 1516;
				this.match(matchParser.COLON);
				this.state = 1517;
				this.match(matchParser.Video_type);
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
		this.enterRule(_localctx, 106, matchParser.RULE_article_format);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1520;
			_la = this._input.LA(1);
			if (!(_la === matchParser.AmpArticle || _la === matchParser.AmpArticleLink)) {
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
		this.enterRule(_localctx, 108, matchParser.RULE_document_format);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1522;
			_la = this._input.LA(1);
			if (!(((((_la - 92)) & ~0x1F) === 0 && ((1 << (_la - 92)) & ((1 << (matchParser.AmpDocument - 92)) | (1 << (matchParser.AmpDocumentLink - 92)) | (1 << (matchParser.AmpDocumentDownload - 92)))) !== 0) || _la === matchParser.AmpDocumentEmbed)) {
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
		this.enterRule(_localctx, 110, matchParser.RULE_app_format);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1524;
			_la = this._input.LA(1);
			if (!(_la === matchParser.AmpApp || _la === matchParser.AmpAppLink)) {
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
		this.enterRule(_localctx, 112, matchParser.RULE_website_format);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1526;
			_la = this._input.LA(1);
			if (!(_la === matchParser.AmpWebsite || _la === matchParser.AmpWebsiteLink)) {
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
		this.enterRule(_localctx, 114, matchParser.RULE_stillimagefilm_format);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1528;
			_la = this._input.LA(1);
			if (!(_la === matchParser.AmpStillImageFilm || _la === matchParser.AmpStillImageFilmLink || _la === matchParser.AmpStillImageFilmEmbed)) {
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
		this.enterRule(_localctx, 116, matchParser.RULE_op_article_format);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1530;
			_la = this._input.LA(1);
			if (!(_la === matchParser.OpAmpArticle || _la === matchParser.OpAmpArticleLink)) {
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
		this.enterRule(_localctx, 118, matchParser.RULE_op_document_format);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1532;
			_la = this._input.LA(1);
			if (!(((((_la - 103)) & ~0x1F) === 0 && ((1 << (_la - 103)) & ((1 << (matchParser.OpAmpDocument - 103)) | (1 << (matchParser.OpAmpDocumentLink - 103)) | (1 << (matchParser.OpAmpDocumentDownload - 103)) | (1 << (matchParser.OpAmpDocumentEmbed - 103)))) !== 0))) {
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
		this.enterRule(_localctx, 120, matchParser.RULE_op_app_format);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1534;
			_la = this._input.LA(1);
			if (!(_la === matchParser.OpAmpApp || _la === matchParser.OpAmpAppLink)) {
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
		this.enterRule(_localctx, 122, matchParser.RULE_op_website_format);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1536;
			_la = this._input.LA(1);
			if (!(_la === matchParser.OpAmpWebsite || _la === matchParser.OpAmpWebsiteLink)) {
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
		this.enterRule(_localctx, 124, matchParser.RULE_op_video_format);
		try {
			this.state = 1553;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case matchParser.OpAmpVideo:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1538;
				this.match(matchParser.OpAmpVideo);
				this.state = 1541;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 211, this._ctx) ) {
				case 1:
					{
					this.state = 1539;
					this.match(matchParser.COLON);
					this.state = 1540;
					this.match(matchParser.Video_type);
					}
					break;
				}
				}
				break;
			case matchParser.OpAmpVideoLink:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1543;
				this.match(matchParser.OpAmpVideoLink);
				this.state = 1546;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 212, this._ctx) ) {
				case 1:
					{
					this.state = 1544;
					this.match(matchParser.COLON);
					this.state = 1545;
					this.match(matchParser.Video_type);
					}
					break;
				}
				}
				break;
			case matchParser.OpAmpVideoEmbed:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1548;
				this.match(matchParser.OpAmpVideoEmbed);
				this.state = 1551;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 213, this._ctx) ) {
				case 1:
					{
					this.state = 1549;
					this.match(matchParser.COLON);
					this.state = 1550;
					this.match(matchParser.Video_type);
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
		this.enterRule(_localctx, 126, matchParser.RULE_op_stillimagefilm_format);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1555;
			_la = this._input.LA(1);
			if (!(((((_la - 106)) & ~0x1F) === 0 && ((1 << (_la - 106)) & ((1 << (matchParser.OpAmpStillImageFilm - 106)) | (1 << (matchParser.OpAmpStillImageFilmLink - 106)) | (1 << (matchParser.OpAmpStillImageFilmEmbed - 106)))) !== 0))) {
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
		this.enterRule(_localctx, 128, matchParser.RULE_articlebit);
		try {
			this.state = 1563;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case matchParser.OpAmpArticle:
			case matchParser.OpAmpArticleLink:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1557;
				this.op_article_format();
				this.state = 1558;
				this.match(matchParser.COLON);
				this.state = 1559;
				this.url();
				this.state = 1560;
				this.match(matchParser.CL);
				}
				break;
			case matchParser.ArticleText:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1562;
				this.match(matchParser.ArticleText);
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
		this.enterRule(_localctx, 130, matchParser.RULE_documentbit);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1565;
			this.op_document_format();
			this.state = 1566;
			this.match(matchParser.COLON);
			this.state = 1567;
			this.url();
			this.state = 1568;
			this.match(matchParser.CL);
			this.state = 1573;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === matchParser.OPATALT) {
				{
				this.state = 1569;
				this.match(matchParser.OPATALT);
				this.state = 1570;
				this.words();
				this.state = 1571;
				this.match(matchParser.CL);
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
		this.enterRule(_localctx, 132, matchParser.RULE_websitebit);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1575;
			this.op_website_format();
			this.state = 1576;
			this.match(matchParser.COLON);
			this.state = 1577;
			this.url();
			this.state = 1578;
			this.match(matchParser.CL);
			this.state = 1583;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === matchParser.OPATALT) {
				{
				this.state = 1579;
				this.match(matchParser.OPATALT);
				this.state = 1580;
				this.words();
				this.state = 1581;
				this.match(matchParser.CL);
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
		this.enterRule(_localctx, 134, matchParser.RULE_appbit);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1585;
			this.op_app_format();
			this.state = 1586;
			this.match(matchParser.COLON);
			this.state = 1589;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case matchParser.URL:
				{
				this.state = 1587;
				this.url();
				}
				break;
			case matchParser.TEL:
				{
				this.state = 1588;
				this.telephone();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 1591;
			this.match(matchParser.CL);
			this.state = 1596;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === matchParser.OPATALT) {
				{
				this.state = 1592;
				this.match(matchParser.OPATALT);
				this.state = 1593;
				this.words();
				this.state = 1594;
				this.match(matchParser.CL);
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
		this.enterRule(_localctx, 136, matchParser.RULE_stillimagefilmbit);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1598;
			this.stillimg_one();
			this.state = 1602;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 220, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1599;
					this.resource_chained();
					}
					}
				}
				this.state = 1604;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 220, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 138, matchParser.RULE_stillimg_one);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1605;
			this.op_stillimagefilm_format();
			this.state = 1606;
			this.match(matchParser.COLON);
			this.state = 1610;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === matchParser.S) {
				{
				{
				this.state = 1607;
				this.match(matchParser.S);
				}
				}
				this.state = 1612;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1613;
			this.url();
			this.state = 1614;
			this.match(matchParser.CL);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 140, matchParser.RULE_videobit);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1616;
			this.video_one();
			this.state = 1620;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 222, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1617;
					this.resource_chained();
					}
					}
				}
				this.state = 1622;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 222, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 142, matchParser.RULE_video_one);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1623;
			this.op_video_format();
			this.state = 1624;
			this.match(matchParser.COLON);
			this.state = 1625;
			this.url();
			this.state = 1626;
			this.match(matchParser.CL);
			this.state = 1631;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 223, this._ctx) ) {
			case 1:
				{
				this.state = 1627;
				this.match(matchParser.OPATALT);
				this.state = 1628;
				this.words();
				this.state = 1629;
				this.match(matchParser.CL);
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
		this.enterRule(_localctx, 144, matchParser.RULE_imagebit);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1633;
			this.image_one();
			this.state = 1637;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 224, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1634;
					this.image_chained();
					}
					}
				}
				this.state = 1639;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 224, this._ctx);
			}
			this.state = 1642;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 225, this._ctx) ) {
			case 1:
				{
				this.state = 1640;
				this.match(matchParser.NL);
				this.state = 1641;
				this.match(matchParser.ShowInIndex);
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
		this.enterRule(_localctx, 146, matchParser.RULE_image_one);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1644;
			this.op_image_format();
			this.state = 1645;
			this.match(matchParser.COLON);
			this.state = 1649;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === matchParser.S) {
				{
				{
				this.state = 1646;
				this.match(matchParser.S);
				}
				}
				this.state = 1651;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1652;
			this.url();
			this.state = 1653;
			this.match(matchParser.CL);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 148, matchParser.RULE_op_image_format);
		let _la: number;
		try {
			this.state = 1669;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case matchParser.OpAmpImage:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1655;
				this.match(matchParser.OpAmpImage);
				this.state = 1658;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case matchParser.Image_type:
					{
					{
					this.state = 1656;
					this.match(matchParser.Image_type);
					}
					}
					break;
				case matchParser.DotArticleAtt:
					{
					{
					this.state = 1657;
					this.match(matchParser.DotArticleAtt);
					}
					}
					break;
				case matchParser.COLON:
					break;
				default:
					break;
				}
				}
				break;
			case matchParser.OpAmpImageLink:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1660;
				this.match(matchParser.OpAmpImageLink);
				this.state = 1662;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === matchParser.Image_type) {
					{
					this.state = 1661;
					this.match(matchParser.Image_type);
					}
				}

				}
				break;
			case matchParser.OpAmpImageZoom:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1664;
				this.match(matchParser.OpAmpImageZoom);
				this.state = 1666;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === matchParser.Image_type) {
					{
					this.state = 1665;
					this.match(matchParser.Image_type);
					}
				}

				}
				break;
			case matchParser.OpAmpImageWAudio:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1668;
				this.match(matchParser.OpAmpImageWAudio);
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
		this.enterRule(_localctx, 150, matchParser.RULE_image_chained);
		let _la: number;
		try {
			let _alt: number;
			this.state = 1688;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case matchParser.AtSrc:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1671;
				this.match(matchParser.AtSrc);
				this.state = 1672;
				this.match(matchParser.COLON);
				this.state = 1673;
				this.url();
				this.state = 1674;
				this.match(matchParser.CL);
				}
				break;
			case matchParser.AtWidth:
			case matchParser.AtHeight:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1676;
				_la = this._input.LA(1);
				if (!(_la === matchParser.AtWidth || _la === matchParser.AtHeight)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 1677;
				this.match(matchParser.COLON);
				this.state = 1678;
				this.match(matchParser.NUMERIC);
				this.state = 1679;
				this.match(matchParser.CL);
				}
				break;
			case matchParser.OPATALT:
			case matchParser.OpAtCaption:
			case matchParser.OpAtLicense:
			case matchParser.OpAtCopyright:
			case matchParser.OpAtSearch:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1680;
				_la = this._input.LA(1);
				if (!(((((_la - 75)) & ~0x1F) === 0 && ((1 << (_la - 75)) & ((1 << (matchParser.OPATALT - 75)) | (1 << (matchParser.OpAtCaption - 75)) | (1 << (matchParser.OpAtLicense - 75)) | (1 << (matchParser.OpAtCopyright - 75)) | (1 << (matchParser.OpAtSearch - 75)))) !== 0))) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 1684;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 231, this._ctx);
				while (_alt !== 1 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1 + 1) {
						{
						{
						this.state = 1681;
						this.matchWildcard();
						}
						}
					}
					this.state = 1686;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 231, this._ctx);
				}
				this.state = 1687;
				this.match(matchParser.CL);
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
		this.enterRule(_localctx, 152, matchParser.RULE_image_chained4match);
		let _la: number;
		try {
			let _alt: number;
			this.state = 1707;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case matchParser.AtSrc:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1690;
				this.match(matchParser.AtSrc);
				this.state = 1691;
				this.match(matchParser.COLON);
				this.state = 1692;
				this.url();
				this.state = 1693;
				this.match(matchParser.CL);
				}
				break;
			case matchParser.AtWidth:
			case matchParser.AtHeight:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1695;
				_la = this._input.LA(1);
				if (!(_la === matchParser.AtWidth || _la === matchParser.AtHeight)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 1696;
				this.match(matchParser.COLON);
				this.state = 1697;
				this.match(matchParser.NUMERIC);
				this.state = 1698;
				this.match(matchParser.CL);
				}
				break;
			case matchParser.OPATALT:
			case matchParser.OpAtCaption:
			case matchParser.OpAtLicense:
			case matchParser.OpAtCopyright:
			case matchParser.OpAtSearch:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1699;
				_la = this._input.LA(1);
				if (!(((((_la - 75)) & ~0x1F) === 0 && ((1 << (_la - 75)) & ((1 << (matchParser.OPATALT - 75)) | (1 << (matchParser.OpAtCaption - 75)) | (1 << (matchParser.OpAtLicense - 75)) | (1 << (matchParser.OpAtCopyright - 75)) | (1 << (matchParser.OpAtSearch - 75)))) !== 0))) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 1703;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 233, this._ctx);
				while (_alt !== 1 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1 + 1) {
						{
						{
						this.state = 1700;
						this.matchWildcard();
						}
						}
					}
					this.state = 1705;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 233, this._ctx);
				}
				this.state = 1706;
				this.match(matchParser.CL);
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
		this.enterRule(_localctx, 154, matchParser.RULE_audiobit);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1709;
			this.audio_one();
			this.state = 1713;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 235, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1710;
					this.resource_chained();
					}
					}
				}
				this.state = 1715;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 235, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 156, matchParser.RULE_audio_one);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1716;
			this.op_audio_format();
			this.state = 1717;
			this.match(matchParser.COLON);
			this.state = 1718;
			this.url();
			this.state = 1719;
			this.match(matchParser.CL);
			this.state = 1724;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 236, this._ctx) ) {
			case 1:
				{
				this.state = 1720;
				this.match(matchParser.OPATALT);
				this.state = 1721;
				this.words();
				this.state = 1722;
				this.match(matchParser.CL);
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
		this.enterRule(_localctx, 158, matchParser.RULE_audio_format);
		let _la: number;
		try {
			this.state = 1736;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case matchParser.AmpAudio:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1726;
				this.match(matchParser.AmpAudio);
				this.state = 1729;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === matchParser.COLON) {
					{
					this.state = 1727;
					this.match(matchParser.COLON);
					this.state = 1728;
					this.match(matchParser.Audio_type);
					}
				}

				}
				break;
			case matchParser.AmpAudioLink:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1731;
				this.match(matchParser.AmpAudioLink);
				this.state = 1734;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === matchParser.COLON) {
					{
					this.state = 1732;
					this.match(matchParser.COLON);
					this.state = 1733;
					this.match(matchParser.Audio_type);
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
		this.enterRule(_localctx, 160, matchParser.RULE_op_audio_format);
		try {
			this.state = 1753;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case matchParser.OpAmpAudio:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1738;
				this.match(matchParser.OpAmpAudio);
				this.state = 1741;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 240, this._ctx) ) {
				case 1:
					{
					this.state = 1739;
					this.match(matchParser.COLON);
					this.state = 1740;
					this.match(matchParser.Audio_type);
					}
					break;
				}
				}
				break;
			case matchParser.OpAmpAudioLink:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1743;
				this.match(matchParser.OpAmpAudioLink);
				this.state = 1746;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 241, this._ctx) ) {
				case 1:
					{
					this.state = 1744;
					this.match(matchParser.COLON);
					this.state = 1745;
					this.match(matchParser.Audio_type);
					}
					break;
				}
				}
				break;
			case matchParser.OpAmpAudioEmbed:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1748;
				this.match(matchParser.OpAmpAudioEmbed);
				this.state = 1751;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 242, this._ctx) ) {
				case 1:
					{
					this.state = 1749;
					this.match(matchParser.COLON);
					this.state = 1750;
					this.match(matchParser.Audio_type);
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
		this.enterRule(_localctx, 162, matchParser.RULE_resource_chained);
		let _la: number;
		try {
			let _alt: number;
			this.state = 1786;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case matchParser.OPA:
			case matchParser.AtSrc:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1758;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case matchParser.OPA:
					{
					this.state = 1755;
					this.match(matchParser.OPA);
					this.state = 1756;
					this.s_and_w();
					}
					break;
				case matchParser.AtSrc:
					{
					this.state = 1757;
					this.match(matchParser.AtSrc);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 1760;
				this.match(matchParser.COLON);
				this.state = 1764;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 245, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 1761;
						this.match(matchParser.S);
						}
						}
					}
					this.state = 1766;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 245, this._ctx);
				}
				this.state = 1769;
				this._errHandler.sync(this);
				_alt = 1;
				do {
					switch (_alt) {
					case 1:
						{
						this.state = 1769;
						this._errHandler.sync(this);
						switch (this._input.LA(1)) {
						case matchParser.S:
						case matchParser.OPS:
						case matchParser.CL:
						case matchParser.COLON:
						case matchParser.AMP:
						case matchParser.DBLCOLON:
						case matchParser.Greater:
						case matchParser.Less:
						case matchParser.RightAngle:
						case matchParser.RightArrow:
						case matchParser.NUMERIC:
						case matchParser.STRING:
						case matchParser.NOTBITMARK:
						case matchParser.ELIPSIS:
						case matchParser.SENTENCE:
						case matchParser.BARSTRING:
						case matchParser.LIST_LINE:
							{
							this.state = 1767;
							this.s_and_w();
							}
							break;
						case matchParser.NL:
							{
							this.state = 1768;
							this.match(matchParser.NL);
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
					this.state = 1771;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 247, this._ctx);
				} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
				this.state = 1773;
				this.match(matchParser.CL);
				}
				break;
			case matchParser.AtWidth:
			case matchParser.AtHeight:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1774;
				_la = this._input.LA(1);
				if (!(_la === matchParser.AtWidth || _la === matchParser.AtHeight)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 1775;
				this.match(matchParser.COLON);
				this.state = 1776;
				this.match(matchParser.NUMERIC);
				this.state = 1777;
				this.match(matchParser.CL);
				}
				break;
			case matchParser.OPATALT:
			case matchParser.OpAtCaption:
			case matchParser.OpAtLicense:
			case matchParser.OpAtCopyright:
			case matchParser.OpAtSearch:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1778;
				_la = this._input.LA(1);
				if (!(((((_la - 75)) & ~0x1F) === 0 && ((1 << (_la - 75)) & ((1 << (matchParser.OPATALT - 75)) | (1 << (matchParser.OpAtCaption - 75)) | (1 << (matchParser.OpAtLicense - 75)) | (1 << (matchParser.OpAtCopyright - 75)) | (1 << (matchParser.OpAtSearch - 75)))) !== 0))) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 1782;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 248, this._ctx);
				while (_alt !== 1 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1 + 1) {
						{
						{
						this.state = 1779;
						this.matchWildcard();
						}
						}
					}
					this.state = 1784;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 248, this._ctx);
				}
				this.state = 1785;
				this.match(matchParser.CL);
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
		this.enterRule(_localctx, 164, matchParser.RULE_telephone);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1788;
			this.match(matchParser.TEL);
			this.state = 1789;
			this.match(matchParser.PLUS);
			this.state = 1790;
			this.match(matchParser.NUMERIC);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 166, matchParser.RULE_url);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1792;
			this.match(matchParser.URL);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 168, matchParser.RULE_item);
		let _la: number;
		try {
			let _alt: number;
			this.state = 1824;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 256, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1794;
				this.match(matchParser.OPC);
				this.state = 1795;
				this.match(matchParser.CL);
				this.state = 1803;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 251, this._ctx) ) {
				case 1:
					{
					this.state = 1799;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === matchParser.S) {
						{
						{
						this.state = 1796;
						this.match(matchParser.S);
						}
						}
						this.state = 1801;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					this.state = 1802;
					this.lead();
					}
					break;
				}
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1805;
				this.match(matchParser.OPC);
				this.state = 1806;
				this.s_and_w();
				this.state = 1811;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 253, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						this.state = 1809;
						this._errHandler.sync(this);
						switch ( this.interpreter.adaptivePredict(this._input, 252, this._ctx) ) {
						case 1:
							{
							this.state = 1807;
							this.match(matchParser.COLON);
							}
							break;

						case 2:
							{
							this.state = 1808;
							this.s_and_w();
							}
							break;
						}
						}
					}
					this.state = 1813;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 253, this._ctx);
				}
				this.state = 1814;
				this.match(matchParser.CL);
				this.state = 1822;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 255, this._ctx) ) {
				case 1:
					{
					this.state = 1818;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === matchParser.S) {
						{
						{
						this.state = 1815;
						this.match(matchParser.S);
						}
						}
						this.state = 1820;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					this.state = 1821;
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
		this.enterRule(_localctx, 170, matchParser.RULE_lead);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1826;
			this.match(matchParser.OPC);
			this.state = 1827;
			this.s_and_w();
			this.state = 1832;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 258, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					this.state = 1830;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 257, this._ctx) ) {
					case 1:
						{
						this.state = 1828;
						this.match(matchParser.COLON);
						}
						break;

					case 2:
						{
						this.state = 1829;
						this.s_and_w();
						}
						break;
					}
					}
				}
				this.state = 1834;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 258, this._ctx);
			}
			this.state = 1835;
			this.match(matchParser.CL);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 172, matchParser.RULE_angleref);
		try {
			this.state = 1847;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case matchParser.OPRANGLES:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1837;
				this.match(matchParser.OPRANGLES);
				this.state = 1839;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 259, this._ctx) ) {
				case 1:
					{
					this.state = 1838;
					this.s_and_w();
					}
					break;
				}
				this.state = 1841;
				this.match(matchParser.CL);
				}
				break;
			case matchParser.OPRANGLEL:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1842;
				this.match(matchParser.OPRANGLEL);
				this.state = 1844;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 260, this._ctx) ) {
				case 1:
					{
					this.state = 1843;
					this.s_and_w();
					}
					break;
				}
				this.state = 1846;
				this.match(matchParser.CL);
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
		this.enterRule(_localctx, 174, matchParser.RULE_example);
		let _la: number;
		try {
			this.state = 1856;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case matchParser.AtExamplecl:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1849;
				this.match(matchParser.AtExamplecl);
				}
				break;
			case matchParser.AtExampleWithStr:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1850;
				this.match(matchParser.AtExampleWithStr);
				}
				break;
			case matchParser.AtExamplecol:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1851;
				this.match(matchParser.AtExamplecol);
				this.state = 1853;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === matchParser.SENTENCE) {
					{
					this.state = 1852;
					this.match(matchParser.SENTENCE);
					}
				}

				this.state = 1855;
				this.match(matchParser.EOF);
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
		this.enterRule(_localctx, 176, matchParser.RULE_bracketed_text);
		let _la: number;
		try {
			let _alt: number;
			this.state = 1897;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 271, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1858;
				this.match(matchParser.BracEnclose);
				this.state = 1860;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 264, this._ctx) ) {
				case 1:
					{
					this.state = 1859;
					this.s_and_w();
					}
					break;
				}
				this.state = 1883;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 268, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 1862;
						this.s_and_w();
						this.state = 1872;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 266, this._ctx);
						while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
							if (_alt === 1) {
								{
								{
								this.state = 1863;
								this.match(matchParser.NL);
								this.state = 1867;
								this._errHandler.sync(this);
								_alt = this.interpreter.adaptivePredict(this._input, 265, this._ctx);
								while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
									if (_alt === 1) {
										{
										{
										this.state = 1864;
										this.match(matchParser.S);
										}
										}
									}
									this.state = 1869;
									this._errHandler.sync(this);
									_alt = this.interpreter.adaptivePredict(this._input, 265, this._ctx);
								}
								}
								}
							}
							this.state = 1874;
							this._errHandler.sync(this);
							_alt = this.interpreter.adaptivePredict(this._input, 266, this._ctx);
						}
						this.state = 1878;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						while (_la === matchParser.NL) {
							{
							{
							this.state = 1875;
							this.match(matchParser.NL);
							}
							}
							this.state = 1880;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
						}
						}
						}
					}
					this.state = 1885;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 268, this._ctx);
				}
				this.state = 1886;
				this.match(matchParser.CL);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1887;
				this.match(matchParser.BracEnclose);
				this.state = 1893;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << matchParser.S) | (1 << matchParser.OPS) | (1 << matchParser.CL) | (1 << matchParser.COLON) | (1 << matchParser.AMP) | (1 << matchParser.DBLCOLON))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (matchParser.Greater - 33)) | (1 << (matchParser.Less - 33)) | (1 << (matchParser.RightAngle - 33)) | (1 << (matchParser.RightArrow - 33)) | (1 << (matchParser.NUMERIC - 33)) | (1 << (matchParser.STRING - 33)) | (1 << (matchParser.NL - 33)) | (1 << (matchParser.NOTBITMARK - 33)) | (1 << (matchParser.ELIPSIS - 33)) | (1 << (matchParser.SENTENCE - 33)) | (1 << (matchParser.BARSTRING - 33)))) !== 0) || _la === matchParser.LIST_LINE) {
					{
					this.state = 1891;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 269, this._ctx) ) {
					case 1:
						{
						this.state = 1888;
						this.s_and_w();
						}
						break;

					case 2:
						{
						this.state = 1889;
						this.match(matchParser.NL);
						}
						break;

					case 3:
						{
						this.state = 1890;
						this.match(matchParser.S);
						}
						break;
					}
					}
					this.state = 1895;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1896;
				this.match(matchParser.EOF);
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
		this.enterRule(_localctx, 178, matchParser.RULE_reference);
		let _la: number;
		try {
			let _alt: number;
			this.state = 1921;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 276, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1899;
				this.match(matchParser.AtReference);
				this.state = 1904;
				this._errHandler.sync(this);
				_alt = 1;
				do {
					switch (_alt) {
					case 1:
						{
						this.state = 1904;
						this._errHandler.sync(this);
						switch ( this.interpreter.adaptivePredict(this._input, 272, this._ctx) ) {
						case 1:
							{
							this.state = 1900;
							this.s_and_w();
							}
							break;

						case 2:
							{
							this.state = 1901;
							this.match(matchParser.COLON);
							}
							break;

						case 3:
							{
							this.state = 1902;
							this.match(matchParser.URL);
							}
							break;

						case 4:
							{
							this.state = 1903;
							this.match(matchParser.NL);
							}
							break;
						}
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					this.state = 1906;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 273, this._ctx);
				} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
				this.state = 1908;
				this.match(matchParser.CL);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1909;
				this.match(matchParser.AtReference);
				this.state = 1917;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << matchParser.S) | (1 << matchParser.OPS) | (1 << matchParser.CL) | (1 << matchParser.COLON) | (1 << matchParser.AMP) | (1 << matchParser.DBLCOLON))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (matchParser.Greater - 33)) | (1 << (matchParser.Less - 33)) | (1 << (matchParser.RightAngle - 33)) | (1 << (matchParser.RightArrow - 33)) | (1 << (matchParser.NUMERIC - 33)) | (1 << (matchParser.STRING - 33)) | (1 << (matchParser.NL - 33)) | (1 << (matchParser.NOTBITMARK - 33)) | (1 << (matchParser.ELIPSIS - 33)) | (1 << (matchParser.SENTENCE - 33)) | (1 << (matchParser.BARSTRING - 33)))) !== 0) || _la === matchParser.URL || _la === matchParser.LIST_LINE) {
					{
					this.state = 1915;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 274, this._ctx) ) {
					case 1:
						{
						this.state = 1910;
						this.s_and_w();
						}
						break;

					case 2:
						{
						this.state = 1911;
						this.match(matchParser.COLON);
						}
						break;

					case 3:
						{
						this.state = 1912;
						this.match(matchParser.URL);
						}
						break;

					case 4:
						{
						this.state = 1913;
						this.match(matchParser.NL);
						}
						break;

					case 5:
						{
						this.state = 1914;
						this.match(matchParser.S);
						}
						break;
					}
					}
					this.state = 1919;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1920;
				this.match(matchParser.EOF);
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
		this.enterRule(_localctx, 180, matchParser.RULE_progress);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1923;
			this.match(matchParser.AtProgress);
			this.state = 1924;
			this.s_and_w();
			this.state = 1925;
			this.match(matchParser.CL);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 182, matchParser.RULE_dateprop);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1927;
			this.match(matchParser.AtDate);
			this.state = 1931;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					this.state = 1931;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 277, this._ctx) ) {
					case 1:
						{
						this.state = 1928;
						this.s_and_w();
						}
						break;

					case 2:
						{
						this.state = 1929;
						this.match(matchParser.COLON);
						}
						break;

					case 3:
						{
						this.state = 1930;
						this.match(matchParser.NL);
						}
						break;
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 1933;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 278, this._ctx);
			} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
			this.state = 1935;
			this.match(matchParser.CL);
			this.state = 1937;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === matchParser.AtDate) {
				{
				this.state = 1936;
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
		this.enterRule(_localctx, 184, matchParser.RULE_dateprop_chained);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1939;
			this.match(matchParser.AtDate);
			this.state = 1943;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					this.state = 1943;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 280, this._ctx) ) {
					case 1:
						{
						this.state = 1940;
						this.s_and_w();
						}
						break;

					case 2:
						{
						this.state = 1941;
						this.match(matchParser.COLON);
						}
						break;

					case 3:
						{
						this.state = 1942;
						this.match(matchParser.NL);
						}
						break;
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 1945;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 281, this._ctx);
			} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
			this.state = 1947;
			this.match(matchParser.CL);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 186, matchParser.RULE_instruction);
		let _la: number;
		try {
			let _alt: number;
			this.state = 1995;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 290, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1949;
				this.match(matchParser.OPB);
				this.state = 1953;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 282, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 1950;
						this.match(matchParser.NL);
						}
						}
					}
					this.state = 1955;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 282, this._ctx);
				}
				this.state = 1957;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 283, this._ctx) ) {
				case 1:
					{
					this.state = 1956;
					this.s_and_w();
					}
					break;
				}
				this.state = 1974;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 286, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 1968;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						while (_la === matchParser.NL) {
							{
							{
							this.state = 1959;
							this.match(matchParser.NL);
							this.state = 1963;
							this._errHandler.sync(this);
							_alt = this.interpreter.adaptivePredict(this._input, 284, this._ctx);
							while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
								if (_alt === 1) {
									{
									{
									this.state = 1960;
									this.match(matchParser.S);
									}
									}
								}
								this.state = 1965;
								this._errHandler.sync(this);
								_alt = this.interpreter.adaptivePredict(this._input, 284, this._ctx);
							}
							}
							}
							this.state = 1970;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
						}
						this.state = 1971;
						this.s_and_w();
						}
						}
					}
					this.state = 1976;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 286, this._ctx);
				}
				this.state = 1980;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === matchParser.NL) {
					{
					{
					this.state = 1977;
					this.match(matchParser.NL);
					}
					}
					this.state = 1982;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1983;
				this.match(matchParser.CL);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1984;
				this.match(matchParser.OPB);
				this.state = 1988;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === matchParser.NL) {
					{
					{
					this.state = 1985;
					this.match(matchParser.NL);
					}
					}
					this.state = 1990;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1992;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << matchParser.S) | (1 << matchParser.OPS) | (1 << matchParser.CL) | (1 << matchParser.COLON) | (1 << matchParser.AMP) | (1 << matchParser.DBLCOLON))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (matchParser.Greater - 33)) | (1 << (matchParser.Less - 33)) | (1 << (matchParser.RightAngle - 33)) | (1 << (matchParser.RightArrow - 33)) | (1 << (matchParser.NUMERIC - 33)) | (1 << (matchParser.STRING - 33)) | (1 << (matchParser.NOTBITMARK - 33)) | (1 << (matchParser.ELIPSIS - 33)) | (1 << (matchParser.SENTENCE - 33)) | (1 << (matchParser.BARSTRING - 33)))) !== 0) || _la === matchParser.LIST_LINE) {
					{
					this.state = 1991;
					this.s_and_w();
					}
				}

				this.state = 1994;
				this.match(matchParser.EOF);
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
		this.enterRule(_localctx, 188, matchParser.RULE_hint);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1997;
			this.match(matchParser.OPQ);
			this.state = 1999;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 1998;
				_la = this._input.LA(1);
				if (_la <= 0 || (_la === matchParser.CL)) {
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
				this.state = 2001;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (((((_la - 1)) & ~0x1F) === 0 && ((1 << (_la - 1)) & ((1 << (matchParser.OPDOT - 1)) | (1 << (matchParser.S - 1)) | (1 << (matchParser.OP - 1)) | (1 << (matchParser.BitMatch - 1)) | (1 << (matchParser.BitMatchmatrix - 1)) | (1 << (matchParser.BitMatchall - 1)) | (1 << (matchParser.BitMatchrev - 1)) | (1 << (matchParser.BitMatchallrev - 1)) | (1 << (matchParser.BitMatchpic - 1)) | (1 << (matchParser.BitMatchaudio - 1)) | (1 << (matchParser.BitMatchsolgrp - 1)) | (1 << (matchParser.OPDOLL - 1)) | (1 << (matchParser.OPBUL - 1)) | (1 << (matchParser.OPRANGLES - 1)) | (1 << (matchParser.OPRANGLEL - 1)) | (1 << (matchParser.OPDANGLE - 1)) | (1 << (matchParser.OPU - 1)) | (1 << (matchParser.OPB - 1)) | (1 << (matchParser.OPQ - 1)) | (1 << (matchParser.OPA - 1)) | (1 << (matchParser.OPP - 1)) | (1 << (matchParser.OPM - 1)) | (1 << (matchParser.OPS - 1)) | (1 << (matchParser.OPR - 1)) | (1 << (matchParser.OPC - 1)) | (1 << (matchParser.OPHASH - 1)) | (1 << (matchParser.COLON - 1)) | (1 << (matchParser.AMP - 1)) | (1 << (matchParser.DBLCOLON - 1)) | (1 << (matchParser.PLUS - 1)) | (1 << (matchParser.DotAt - 1)))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (matchParser.Greater - 33)) | (1 << (matchParser.Less - 33)) | (1 << (matchParser.DOT - 33)) | (1 << (matchParser.RightAngle - 33)) | (1 << (matchParser.RightArrow - 33)) | (1 << (matchParser.EQ - 33)) | (1 << (matchParser.HSPL - 33)) | (1 << (matchParser.OR - 33)) | (1 << (matchParser.TENSE - 33)) | (1 << (matchParser.COMMENT - 33)) | (1 << (matchParser.DCANY - 33)) | (1 << (matchParser.Image_type - 33)) | (1 << (matchParser.Audio_type - 33)) | (1 << (matchParser.Video_type - 33)) | (1 << (matchParser.ArticleText - 33)) | (1 << (matchParser.NOTCL - 33)) | (1 << (matchParser.NUMERIC - 33)) | (1 << (matchParser.STRING - 33)) | (1 << (matchParser.NL - 33)) | (1 << (matchParser.NOTBITMARK - 33)) | (1 << (matchParser.ELIPSIS - 33)) | (1 << (matchParser.SENTENCE - 33)) | (1 << (matchParser.BARSTRING - 33)) | (1 << (matchParser.OPAT - 33)) | (1 << (matchParser.AtProgress - 33)) | (1 << (matchParser.AtReference - 33)) | (1 << (matchParser.AtWidth - 33)) | (1 << (matchParser.AtHeight - 33)) | (1 << (matchParser.AtProgressPoints - 33)) | (1 << (matchParser.AtShortanswer - 33)) | (1 << (matchParser.AtLonganswer - 33)) | (1 << (matchParser.AtExampleWithStr - 33)))) !== 0) || ((((_la - 65)) & ~0x1F) === 0 && ((1 << (_la - 65)) & ((1 << (matchParser.AtExamplecol - 65)) | (1 << (matchParser.AtExamplecl - 65)) | (1 << (matchParser.AtSampleSolution - 65)) | (1 << (matchParser.AtPartialAnswerS - 65)) | (1 << (matchParser.AtPartialAnswer - 65)) | (1 << (matchParser.AtLabeltrue - 65)) | (1 << (matchParser.AtLabelfalse - 65)) | (1 << (matchParser.AtPoints - 65)) | (1 << (matchParser.AtSrc - 65)) | (1 << (matchParser.AtPartner - 65)) | (1 << (matchParser.OPATALT - 65)) | (1 << (matchParser.OPAMARK - 65)) | (1 << (matchParser.ShowInIndex - 65)) | (1 << (matchParser.OpAtCaption - 65)) | (1 << (matchParser.OpAtLicense - 65)) | (1 << (matchParser.OpAtCopyright - 65)) | (1 << (matchParser.OpAtSearch - 65)) | (1 << (matchParser.OpAtIsTracked - 65)) | (1 << (matchParser.OpAtIsInfoOnly - 65)) | (1 << (matchParser.AtDate - 65)) | (1 << (matchParser.Http - 65)) | (1 << (matchParser.Https - 65)) | (1 << (matchParser.AmpAudio - 65)) | (1 << (matchParser.AmpImage - 65)) | (1 << (matchParser.AmpImageZoom - 65)) | (1 << (matchParser.AmpVideo - 65)) | (1 << (matchParser.AmpArticle - 65)) | (1 << (matchParser.AmpDocument - 65)) | (1 << (matchParser.AmpApp - 65)) | (1 << (matchParser.AmpWebsite - 65)) | (1 << (matchParser.AmpStillImageFilm - 65)) | (1 << (matchParser.AmpPdf - 65)))) !== 0) || ((((_la - 97)) & ~0x1F) === 0 && ((1 << (_la - 97)) & ((1 << (matchParser.OpAmpAudio - 97)) | (1 << (matchParser.OpAmpImage - 97)) | (1 << (matchParser.OpAmpImageZoom - 97)) | (1 << (matchParser.OpAmpVideo - 97)) | (1 << (matchParser.OpAmpArticle - 97)) | (1 << (matchParser.OpAmpArticleAtt - 97)) | (1 << (matchParser.OpAmpDocument - 97)) | (1 << (matchParser.OpAmpApp - 97)) | (1 << (matchParser.OpAmpWebsite - 97)) | (1 << (matchParser.OpAmpStillImageFilm - 97)) | (1 << (matchParser.BracEnclose - 97)) | (1 << (matchParser.AmpAudioLink - 97)) | (1 << (matchParser.AmpImageLink - 97)) | (1 << (matchParser.AmpVideoLink - 97)) | (1 << (matchParser.AmpArticleLink - 97)) | (1 << (matchParser.AmpDocumentLink - 97)) | (1 << (matchParser.AmpDocumentDownload - 97)) | (1 << (matchParser.AmpAppLink - 97)) | (1 << (matchParser.AmpWebsiteLink - 97)) | (1 << (matchParser.AmpStillImageFilmLink - 97)) | (1 << (matchParser.OpAmpAudioLink - 97)) | (1 << (matchParser.OpAmpImageLink - 97)) | (1 << (matchParser.OpAmpVideoLink - 97)) | (1 << (matchParser.OpAmpArticleLink - 97)) | (1 << (matchParser.OpAmpDocumentLink - 97)) | (1 << (matchParser.OpAmpDocumentDownload - 97)) | (1 << (matchParser.OpAmpAppLink - 97)) | (1 << (matchParser.OpAmpWebsiteLink - 97)) | (1 << (matchParser.OpAmpStillImageFilmLink - 97)) | (1 << (matchParser.AmpImageEmbed - 97)) | (1 << (matchParser.AmpVideoEmbed - 97)) | (1 << (matchParser.AmpAudioEmbed - 97)))) !== 0) || ((((_la - 129)) & ~0x1F) === 0 && ((1 << (_la - 129)) & ((1 << (matchParser.AmpDocumentEmbed - 129)) | (1 << (matchParser.AmpStillImageFilmEmbed - 129)) | (1 << (matchParser.OpAmpImageEmbed - 129)) | (1 << (matchParser.OpAmpVideoEmbed - 129)) | (1 << (matchParser.OpAmpAudioEmbed - 129)) | (1 << (matchParser.OpAmpDocumentEmbed - 129)) | (1 << (matchParser.OpAmpStillImageFilmEmbed - 129)) | (1 << (matchParser.BitmarkMinus - 129)) | (1 << (matchParser.BitmarkPlus - 129)) | (1 << (matchParser.ColonText - 129)) | (1 << (matchParser.ColonJson - 129)) | (1 << (matchParser.Prosemirror - 129)) | (1 << (matchParser.Placeholder - 129)) | (1 << (matchParser.BASIC - 129)) | (1 << (matchParser.JPG - 129)) | (1 << (matchParser.PNG - 129)) | (1 << (matchParser.GIF - 129)) | (1 << (matchParser.SVG - 129)) | (1 << (matchParser.MP2 - 129)) | (1 << (matchParser.MP3 - 129)) | (1 << (matchParser.MP4 - 129)) | (1 << (matchParser.FLV - 129)) | (1 << (matchParser.WMV - 129)) | (1 << (matchParser.MPEG - 129)) | (1 << (matchParser.MPG - 129)) | (1 << (matchParser.TEL - 129)) | (1 << (matchParser.DotArticleAtt - 129)) | (1 << (matchParser.STAR - 129)) | (1 << (matchParser.URL - 129)) | (1 << (matchParser.LIST_LINE - 129)) | (1 << (matchParser.ENCLBARS - 129)) | (1 << (matchParser.OpAmpImageWAudio - 129)))) !== 0));
			this.state = 2003;
			this.match(matchParser.CL);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 190, matchParser.RULE_title);
		try {
			let _alt: number;
			this.state = 2017;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 294, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2005;
				this.match(matchParser.OPHASH);
				this.state = 2008;
				this._errHandler.sync(this);
				_alt = 1;
				do {
					switch (_alt) {
					case 1:
						{
						this.state = 2008;
						this._errHandler.sync(this);
						switch (this._input.LA(1)) {
						case matchParser.S:
						case matchParser.OPS:
						case matchParser.CL:
						case matchParser.COLON:
						case matchParser.AMP:
						case matchParser.DBLCOLON:
						case matchParser.Greater:
						case matchParser.Less:
						case matchParser.RightAngle:
						case matchParser.RightArrow:
						case matchParser.NUMERIC:
						case matchParser.STRING:
						case matchParser.NOTBITMARK:
						case matchParser.ELIPSIS:
						case matchParser.SENTENCE:
						case matchParser.BARSTRING:
						case matchParser.LIST_LINE:
							{
							this.state = 2006;
							this.s_and_w();
							}
							break;
						case matchParser.NL:
							{
							this.state = 2007;
							this.match(matchParser.NL);
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
					this.state = 2010;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 293, this._ctx);
				} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
				this.state = 2012;
				this.match(matchParser.CL);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2013;
				this.match(matchParser.OPHASH);
				this.state = 2014;
				this.s_and_w();
				this.state = 2015;
				this.match(matchParser.EOF);
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
		this.enterRule(_localctx, 192, matchParser.RULE_bool_label);
		try {
			this.state = 2027;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case matchParser.AtLabeltrue:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2019;
				this.match(matchParser.AtLabeltrue);
				this.state = 2020;
				this.s_and_w();
				this.state = 2021;
				this.match(matchParser.CL);
				}
				break;
			case matchParser.AtLabelfalse:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2023;
				this.match(matchParser.AtLabelfalse);
				this.state = 2024;
				this.s_and_w();
				this.state = 2025;
				this.match(matchParser.CL);
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
		this.enterRule(_localctx, 194, matchParser.RULE_progress_points);
		try {
			this.state = 2038;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 296, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2029;
				this.match(matchParser.AtProgressPoints);
				this.state = 2030;
				this.match(matchParser.COLON);
				this.state = 2031;
				this.match(matchParser.NUMERIC);
				this.state = 2032;
				this.match(matchParser.CL);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2033;
				this.match(matchParser.AtProgressPoints);
				this.state = 2034;
				this.match(matchParser.COLON);
				this.state = 2035;
				this.s_and_w();
				this.state = 2036;
				this.match(matchParser.CL);
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
		this.enterRule(_localctx, 196, matchParser.RULE_istracked);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2040;
			this.match(matchParser.OpAtIsTracked);
			this.state = 2041;
			this.s_and_w();
			this.state = 2042;
			this.match(matchParser.CL);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 198, matchParser.RULE_isinfoonly);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2044;
			this.match(matchParser.OpAtIsInfoOnly);
			this.state = 2045;
			this.s_and_w();
			this.state = 2046;
			this.match(matchParser.CL);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 200, matchParser.RULE_atdef);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2048;
			this.atdef_();
			this.state = 2058;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 298, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 2052;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === matchParser.NL) {
						{
						{
						this.state = 2049;
						this.match(matchParser.NL);
						}
						}
						this.state = 2054;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					this.state = 2055;
					this.atdef_();
					}
					}
				}
				this.state = 2060;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 298, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 202, matchParser.RULE_atdef_);
		let _la: number;
		try {
			let _alt: number;
			this.state = 2084;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case matchParser.OPA:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2061;
				this.match(matchParser.OPA);
				this.state = 2062;
				this.s_and_w();
				this.state = 2063;
				_la = this._input.LA(1);
				if (!(_la === matchParser.COLON || _la === matchParser.DBLCOLON)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 2064;
				this.s_and_w();
				this.state = 2070;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 300, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						this.state = 2068;
						this._errHandler.sync(this);
						switch ( this.interpreter.adaptivePredict(this._input, 299, this._ctx) ) {
						case 1:
							{
							this.state = 2065;
							this.match(matchParser.NL);
							}
							break;

						case 2:
							{
							this.state = 2066;
							this.match(matchParser.COLON);
							}
							break;

						case 3:
							{
							this.state = 2067;
							this.s_and_w();
							}
							break;
						}
						}
					}
					this.state = 2072;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 300, this._ctx);
				}
				this.state = 2073;
				this.match(matchParser.CL);
				}
				break;
			case matchParser.OpAtCopyright:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2075;
				this.match(matchParser.OpAtCopyright);
				this.state = 2079;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 301, this._ctx);
				while (_alt !== 1 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1 + 1) {
						{
						{
						this.state = 2076;
						this.matchWildcard();
						}
						}
					}
					this.state = 2081;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 301, this._ctx);
				}
				this.state = 2082;
				this.match(matchParser.CL);
				}
				break;
			case matchParser.AtSampleSolution:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 2083;
				this.match(matchParser.AtSampleSolution);
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
		this.enterRule(_localctx, 204, matchParser.RULE_dollarans);
		let _la: number;
		try {
			let _alt: number;
			this.state = 2105;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 307, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2086;
				this.match(matchParser.OPDOLL);
				this.state = 2090;
				this._errHandler.sync(this);
				_alt = 1;
				do {
					switch (_alt) {
					case 1:
						{
						this.state = 2090;
						this._errHandler.sync(this);
						switch ( this.interpreter.adaptivePredict(this._input, 303, this._ctx) ) {
						case 1:
							{
							this.state = 2087;
							this.s_and_w();
							}
							break;

						case 2:
							{
							this.state = 2088;
							this.match(matchParser.COLON);
							}
							break;

						case 3:
							{
							this.state = 2089;
							this.match(matchParser.NL);
							}
							break;
						}
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					this.state = 2092;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 304, this._ctx);
				} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
				this.state = 2094;
				this.match(matchParser.CL);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2095;
				this.match(matchParser.OPDOLL);
				this.state = 2101;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << matchParser.S) | (1 << matchParser.OPS) | (1 << matchParser.CL) | (1 << matchParser.COLON) | (1 << matchParser.AMP) | (1 << matchParser.DBLCOLON))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (matchParser.Greater - 33)) | (1 << (matchParser.Less - 33)) | (1 << (matchParser.RightAngle - 33)) | (1 << (matchParser.RightArrow - 33)) | (1 << (matchParser.NUMERIC - 33)) | (1 << (matchParser.STRING - 33)) | (1 << (matchParser.NL - 33)) | (1 << (matchParser.NOTBITMARK - 33)) | (1 << (matchParser.ELIPSIS - 33)) | (1 << (matchParser.SENTENCE - 33)) | (1 << (matchParser.BARSTRING - 33)))) !== 0) || _la === matchParser.LIST_LINE) {
					{
					this.state = 2099;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 305, this._ctx) ) {
					case 1:
						{
						this.state = 2096;
						this.s_and_w();
						}
						break;

					case 2:
						{
						this.state = 2097;
						this.match(matchParser.COLON);
						}
						break;

					case 3:
						{
						this.state = 2098;
						this.match(matchParser.NL);
						}
						break;
					}
					}
					this.state = 2103;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 2104;
				this.match(matchParser.EOF);
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
		this.enterRule(_localctx, 206, matchParser.RULE_anchor);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2107;
			this.match(matchParser.OPDANGLE);
			this.state = 2109;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 308, this._ctx) ) {
			case 1:
				{
				this.state = 2108;
				this.s_and_w();
				}
				break;
			}
			this.state = 2111;
			this.match(matchParser.CL);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 208, matchParser.RULE_dcolon);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2113;
			this.match(matchParser.DBLCOLON);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public colcoltext(): ColcoltextContext {
		let _localctx: ColcoltextContext = new ColcoltextContext(this._ctx, this.state);
		this.enterRule(_localctx, 210, matchParser.RULE_colcoltext);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2115;
			this.dcolon();
			this.state = 2116;
			this.match(matchParser.STRING);
			this.state = 2117;
			this.dcolon();
			this.state = 2119;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 2118;
				_la = this._input.LA(1);
				if (_la <= 0 || (_la === matchParser.DBLCOLON)) {
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
				this.state = 2121;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (((((_la - 1)) & ~0x1F) === 0 && ((1 << (_la - 1)) & ((1 << (matchParser.OPDOT - 1)) | (1 << (matchParser.S - 1)) | (1 << (matchParser.OP - 1)) | (1 << (matchParser.BitMatch - 1)) | (1 << (matchParser.BitMatchmatrix - 1)) | (1 << (matchParser.BitMatchall - 1)) | (1 << (matchParser.BitMatchrev - 1)) | (1 << (matchParser.BitMatchallrev - 1)) | (1 << (matchParser.BitMatchpic - 1)) | (1 << (matchParser.BitMatchaudio - 1)) | (1 << (matchParser.BitMatchsolgrp - 1)) | (1 << (matchParser.OPDOLL - 1)) | (1 << (matchParser.OPBUL - 1)) | (1 << (matchParser.OPRANGLES - 1)) | (1 << (matchParser.OPRANGLEL - 1)) | (1 << (matchParser.OPDANGLE - 1)) | (1 << (matchParser.OPU - 1)) | (1 << (matchParser.OPB - 1)) | (1 << (matchParser.OPQ - 1)) | (1 << (matchParser.OPA - 1)) | (1 << (matchParser.OPP - 1)) | (1 << (matchParser.OPM - 1)) | (1 << (matchParser.OPS - 1)) | (1 << (matchParser.OPR - 1)) | (1 << (matchParser.OPC - 1)) | (1 << (matchParser.OPHASH - 1)) | (1 << (matchParser.CL - 1)) | (1 << (matchParser.COLON - 1)) | (1 << (matchParser.AMP - 1)) | (1 << (matchParser.PLUS - 1)) | (1 << (matchParser.DotAt - 1)))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (matchParser.Greater - 33)) | (1 << (matchParser.Less - 33)) | (1 << (matchParser.DOT - 33)) | (1 << (matchParser.RightAngle - 33)) | (1 << (matchParser.RightArrow - 33)) | (1 << (matchParser.EQ - 33)) | (1 << (matchParser.HSPL - 33)) | (1 << (matchParser.OR - 33)) | (1 << (matchParser.TENSE - 33)) | (1 << (matchParser.COMMENT - 33)) | (1 << (matchParser.DCANY - 33)) | (1 << (matchParser.Image_type - 33)) | (1 << (matchParser.Audio_type - 33)) | (1 << (matchParser.Video_type - 33)) | (1 << (matchParser.ArticleText - 33)) | (1 << (matchParser.NOTCL - 33)) | (1 << (matchParser.NUMERIC - 33)) | (1 << (matchParser.STRING - 33)) | (1 << (matchParser.NL - 33)) | (1 << (matchParser.NOTBITMARK - 33)) | (1 << (matchParser.ELIPSIS - 33)) | (1 << (matchParser.SENTENCE - 33)) | (1 << (matchParser.BARSTRING - 33)) | (1 << (matchParser.OPAT - 33)) | (1 << (matchParser.AtProgress - 33)) | (1 << (matchParser.AtReference - 33)) | (1 << (matchParser.AtWidth - 33)) | (1 << (matchParser.AtHeight - 33)) | (1 << (matchParser.AtProgressPoints - 33)) | (1 << (matchParser.AtShortanswer - 33)) | (1 << (matchParser.AtLonganswer - 33)) | (1 << (matchParser.AtExampleWithStr - 33)))) !== 0) || ((((_la - 65)) & ~0x1F) === 0 && ((1 << (_la - 65)) & ((1 << (matchParser.AtExamplecol - 65)) | (1 << (matchParser.AtExamplecl - 65)) | (1 << (matchParser.AtSampleSolution - 65)) | (1 << (matchParser.AtPartialAnswerS - 65)) | (1 << (matchParser.AtPartialAnswer - 65)) | (1 << (matchParser.AtLabeltrue - 65)) | (1 << (matchParser.AtLabelfalse - 65)) | (1 << (matchParser.AtPoints - 65)) | (1 << (matchParser.AtSrc - 65)) | (1 << (matchParser.AtPartner - 65)) | (1 << (matchParser.OPATALT - 65)) | (1 << (matchParser.OPAMARK - 65)) | (1 << (matchParser.ShowInIndex - 65)) | (1 << (matchParser.OpAtCaption - 65)) | (1 << (matchParser.OpAtLicense - 65)) | (1 << (matchParser.OpAtCopyright - 65)) | (1 << (matchParser.OpAtSearch - 65)) | (1 << (matchParser.OpAtIsTracked - 65)) | (1 << (matchParser.OpAtIsInfoOnly - 65)) | (1 << (matchParser.AtDate - 65)) | (1 << (matchParser.Http - 65)) | (1 << (matchParser.Https - 65)) | (1 << (matchParser.AmpAudio - 65)) | (1 << (matchParser.AmpImage - 65)) | (1 << (matchParser.AmpImageZoom - 65)) | (1 << (matchParser.AmpVideo - 65)) | (1 << (matchParser.AmpArticle - 65)) | (1 << (matchParser.AmpDocument - 65)) | (1 << (matchParser.AmpApp - 65)) | (1 << (matchParser.AmpWebsite - 65)) | (1 << (matchParser.AmpStillImageFilm - 65)) | (1 << (matchParser.AmpPdf - 65)))) !== 0) || ((((_la - 97)) & ~0x1F) === 0 && ((1 << (_la - 97)) & ((1 << (matchParser.OpAmpAudio - 97)) | (1 << (matchParser.OpAmpImage - 97)) | (1 << (matchParser.OpAmpImageZoom - 97)) | (1 << (matchParser.OpAmpVideo - 97)) | (1 << (matchParser.OpAmpArticle - 97)) | (1 << (matchParser.OpAmpArticleAtt - 97)) | (1 << (matchParser.OpAmpDocument - 97)) | (1 << (matchParser.OpAmpApp - 97)) | (1 << (matchParser.OpAmpWebsite - 97)) | (1 << (matchParser.OpAmpStillImageFilm - 97)) | (1 << (matchParser.BracEnclose - 97)) | (1 << (matchParser.AmpAudioLink - 97)) | (1 << (matchParser.AmpImageLink - 97)) | (1 << (matchParser.AmpVideoLink - 97)) | (1 << (matchParser.AmpArticleLink - 97)) | (1 << (matchParser.AmpDocumentLink - 97)) | (1 << (matchParser.AmpDocumentDownload - 97)) | (1 << (matchParser.AmpAppLink - 97)) | (1 << (matchParser.AmpWebsiteLink - 97)) | (1 << (matchParser.AmpStillImageFilmLink - 97)) | (1 << (matchParser.OpAmpAudioLink - 97)) | (1 << (matchParser.OpAmpImageLink - 97)) | (1 << (matchParser.OpAmpVideoLink - 97)) | (1 << (matchParser.OpAmpArticleLink - 97)) | (1 << (matchParser.OpAmpDocumentLink - 97)) | (1 << (matchParser.OpAmpDocumentDownload - 97)) | (1 << (matchParser.OpAmpAppLink - 97)) | (1 << (matchParser.OpAmpWebsiteLink - 97)) | (1 << (matchParser.OpAmpStillImageFilmLink - 97)) | (1 << (matchParser.AmpImageEmbed - 97)) | (1 << (matchParser.AmpVideoEmbed - 97)) | (1 << (matchParser.AmpAudioEmbed - 97)))) !== 0) || ((((_la - 129)) & ~0x1F) === 0 && ((1 << (_la - 129)) & ((1 << (matchParser.AmpDocumentEmbed - 129)) | (1 << (matchParser.AmpStillImageFilmEmbed - 129)) | (1 << (matchParser.OpAmpImageEmbed - 129)) | (1 << (matchParser.OpAmpVideoEmbed - 129)) | (1 << (matchParser.OpAmpAudioEmbed - 129)) | (1 << (matchParser.OpAmpDocumentEmbed - 129)) | (1 << (matchParser.OpAmpStillImageFilmEmbed - 129)) | (1 << (matchParser.BitmarkMinus - 129)) | (1 << (matchParser.BitmarkPlus - 129)) | (1 << (matchParser.ColonText - 129)) | (1 << (matchParser.ColonJson - 129)) | (1 << (matchParser.Prosemirror - 129)) | (1 << (matchParser.Placeholder - 129)) | (1 << (matchParser.BASIC - 129)) | (1 << (matchParser.JPG - 129)) | (1 << (matchParser.PNG - 129)) | (1 << (matchParser.GIF - 129)) | (1 << (matchParser.SVG - 129)) | (1 << (matchParser.MP2 - 129)) | (1 << (matchParser.MP3 - 129)) | (1 << (matchParser.MP4 - 129)) | (1 << (matchParser.FLV - 129)) | (1 << (matchParser.WMV - 129)) | (1 << (matchParser.MPEG - 129)) | (1 << (matchParser.MPG - 129)) | (1 << (matchParser.TEL - 129)) | (1 << (matchParser.DotArticleAtt - 129)) | (1 << (matchParser.STAR - 129)) | (1 << (matchParser.URL - 129)) | (1 << (matchParser.LIST_LINE - 129)) | (1 << (matchParser.ENCLBARS - 129)) | (1 << (matchParser.OpAmpImageWAudio - 129)))) !== 0));
			this.state = 2123;
			this.dcolon();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 212, matchParser.RULE_lines);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2129;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 2125;
					this.s_and_w();
					this.state = 2127;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 310, this._ctx) ) {
					case 1:
						{
						this.state = 2126;
						this.match(matchParser.NL);
						}
						break;
					}
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 2131;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 311, this._ctx);
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
	public list_line(): List_lineContext {
		let _localctx: List_lineContext = new List_lineContext(this._ctx, this.state);
		this.enterRule(_localctx, 214, matchParser.RULE_list_line);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2133;
			this.match(matchParser.LIST_LINE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 216, matchParser.RULE_s_and_w);
		let _la: number;
		try {
			let _alt: number;
			this.state = 2182;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 319, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2135;
				this.match(matchParser.STRING);
				this.state = 2142;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 313, this._ctx) ) {
				case 1:
					{
					this.state = 2137;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					do {
						{
						{
						this.state = 2136;
						this.match(matchParser.S);
						}
						}
						this.state = 2139;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					} while (_la === matchParser.S);
					this.state = 2141;
					this.match(matchParser.NUMERIC);
					}
					break;
				}
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2144;
				this.words();
				this.state = 2151;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 315, this._ctx) ) {
				case 1:
					{
					this.state = 2146;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					do {
						{
						{
						this.state = 2145;
						this.match(matchParser.S);
						}
						}
						this.state = 2148;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					} while (_la === matchParser.S);
					this.state = 2150;
					this.match(matchParser.NUMERIC);
					}
					break;
				}
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 2153;
				this.match(matchParser.OPS);
				this.state = 2154;
				this.s_and_w();
				this.state = 2155;
				this.match(matchParser.CL);
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 2157;
				this.match(matchParser.NUMERIC);
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 2161;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === matchParser.S) {
					{
					{
					this.state = 2158;
					this.match(matchParser.S);
					}
					}
					this.state = 2163;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 2164;
				this.match(matchParser.COLON);
				this.state = 2168;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 317, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 2165;
						this.match(matchParser.S);
						}
						}
					}
					this.state = 2170;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 317, this._ctx);
				}
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 2171;
				this.match(matchParser.AMP);
				this.state = 2175;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 318, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 2172;
						this.match(matchParser.S);
						}
						}
					}
					this.state = 2177;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 318, this._ctx);
				}
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 2178;
				this.match(matchParser.CL);
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 2179;
				this.match(matchParser.DBLCOLON);
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 2180;
				this.match(matchParser.LIST_LINE);
				}
				break;

			case 10:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 2181;
				this.colcoltext();
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
		this.enterRule(_localctx, 218, matchParser.RULE_dclines);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2184;
			this.match(matchParser.DCANY);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public opdoll(): OpdollContext {
		let _localctx: OpdollContext = new OpdollContext(this._ctx, this.state);
		this.enterRule(_localctx, 220, matchParser.RULE_opdoll);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2186;
			this.match(matchParser.OPDOLL);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 222, matchParser.RULE_opu);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2188;
			this.match(matchParser.OPU);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 224, matchParser.RULE_opb);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2190;
			this.match(matchParser.OPB);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 226, matchParser.RULE_opq);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2192;
			this.match(matchParser.OPQ);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 228, matchParser.RULE_opa);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2194;
			this.match(matchParser.OPA);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 230, matchParser.RULE_opp);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2196;
			this.match(matchParser.OPP);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 232, matchParser.RULE_opm);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2198;
			this.match(matchParser.OPM);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 234, matchParser.RULE_ops);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2200;
			this.match(matchParser.OPS);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 236, matchParser.RULE_opr);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2202;
			this.match(matchParser.OPR);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 238, matchParser.RULE_opc);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2204;
			this.match(matchParser.OPC);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 240, matchParser.RULE_clnsp);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2206;
			this.match(matchParser.CL);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public or_(): Or_Context {
		let _localctx: Or_Context = new Or_Context(this._ctx, this.state);
		this.enterRule(_localctx, 242, matchParser.RULE_or_);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2208;
			this.match(matchParser.OR);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 244, matchParser.RULE_words);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2221;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					this.state = 2221;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case matchParser.SENTENCE:
						{
						this.state = 2210;
						this.match(matchParser.SENTENCE);
						}
						break;
					case matchParser.NOTBITMARK:
						{
						this.state = 2211;
						this.match(matchParser.NOTBITMARK);
						}
						break;
					case matchParser.BARSTRING:
						{
						this.state = 2212;
						this.match(matchParser.BARSTRING);
						}
						break;
					case matchParser.ELIPSIS:
						{
						this.state = 2213;
						this.match(matchParser.ELIPSIS);
						}
						break;
					case matchParser.AMP:
						{
						this.state = 2214;
						this.match(matchParser.AMP);
						}
						break;
					case matchParser.Greater:
						{
						this.state = 2215;
						this.match(matchParser.Greater);
						this.state = 2216;
						_la = this._input.LA(1);
						if (_la <= 0 || (_la === matchParser.Greater)) {
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
					case matchParser.Less:
						{
						this.state = 2217;
						this.match(matchParser.Less);
						this.state = 2218;
						_la = this._input.LA(1);
						if (_la <= 0 || (_la === matchParser.Less)) {
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
					case matchParser.RightArrow:
						{
						this.state = 2219;
						this.match(matchParser.RightArrow);
						}
						break;
					case matchParser.RightAngle:
						{
						this.state = 2220;
						this.match(matchParser.RightAngle);
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
				this.state = 2223;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 321, this._ctx);
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
		this.enterRule(_localctx, 246, matchParser.RULE_sp);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2225;
			this.match(matchParser.S);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	private static readonly _serializedATNSegments: number = 5;
	private static readonly _serializedATNSegment0: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\xA2\u08B6\x04" +
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
		"`\x04a\ta\x04b\tb\x04c\tc\x04d\td\x04e\te\x04f\tf\x04g\tg\x04h\th\x04" +
		"i\ti\x04j\tj\x04k\tk\x04l\tl\x04m\tm\x04n\tn\x04o\to\x04p\tp\x04q\tq\x04" +
		"r\tr\x04s\ts\x04t\tt\x04u\tu\x04v\tv\x04w\tw\x04x\tx\x04y\ty\x04z\tz\x04" +
		"{\t{\x04|\t|\x04}\t}\x03\x02\x03\x02\x07\x02\xFD\n\x02\f\x02\x0E\x02\u0100" +
		"\v\x02\x03\x02\x07\x02\u0103\n\x02\f\x02\x0E\x02\u0106\v\x02\x06\x02\u0108" +
		"\n\x02\r\x02\x0E\x02\u0109\x03\x02\x03\x02\x03\x03\x03\x03\x03\x04\x03" +
		"\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x05\x04\u0118\n\x04" +
		"\x03\x05\x03\x05\x03\x05\x03\x05\x07\x05\u011E\n\x05\f\x05\x0E\x05\u0121" +
		"\v\x05\x03\x05\x03\x05\x07\x05\u0125\n\x05\f\x05\x0E\x05\u0128\v\x05\x07" +
		"\x05\u012A\n\x05\f\x05\x0E\x05\u012D\v\x05\x03\x05\x03\x05\x03\x05\x03" +
		"\x05\x06\x05\u0133\n\x05\r\x05\x0E\x05\u0134\x03\x05\x03\x05\x07\x05\u0139" +
		"\n\x05\f\x05\x0E\x05\u013C\v\x05\x07\x05\u013E\n\x05\f\x05\x0E\x05\u0141" +
		"\v\x05\x03\x05\x03\x05\x03\x05\x03\x05\x05\x05\u0147\n\x05\x03\x05\x03" +
		"\x05\x07\x05\u014B\n\x05\f\x05\x0E\x05\u014E\v\x05\x03\x05\x03\x05\x07" +
		"\x05\u0152\n\x05\f\x05\x0E\x05\u0155\v\x05\x03\x05\x07\x05\u0158\n\x05" +
		"\f\x05\x0E\x05\u015B\v\x05\x05\x05\u015D\n\x05\x05\x05\u015F\n\x05\x03" +
		"\x06\x03\x06\x03\x06\x03\x06\x07\x06\u0165\n\x06\f\x06\x0E\x06\u0168\v" +
		"\x06\x03\x06\x03\x06\x07\x06\u016C\n\x06\f\x06\x0E\x06\u016F\v\x06\x07" +
		"\x06\u0171\n\x06\f\x06\x0E\x06\u0174\v\x06\x03\x06\x03\x06\x03\x06\x03" +
		"\x06\x06\x06\u017A\n\x06\r\x06\x0E\x06\u017B\x03\x06\x03\x06\x07\x06\u0180" +
		"\n\x06\f\x06\x0E\x06\u0183\v\x06\x07\x06\u0185\n\x06\f\x06\x0E\x06\u0188" +
		"\v\x06\x03\x06\x03\x06\x03\x06\x03\x06\x05\x06\u018E\n\x06\x03\x06\x03" +
		"\x06\x07\x06\u0192\n\x06\f\x06\x0E\x06\u0195\v\x06\x03\x06\x03\x06\x07" +
		"\x06\u0199\n\x06\f\x06\x0E\x06\u019C\v\x06\x03\x06\x07\x06\u019F\n\x06" +
		"\f\x06\x0E\x06\u01A2\v\x06\x05\x06\u01A4\n\x06\x05\x06\u01A6\n\x06\x03" +
		"\x07\x03\x07\x03\x07\x03\x07\x07\x07\u01AC\n\x07\f\x07\x0E\x07\u01AF\v" +
		"\x07\x03\x07\x03\x07\x07\x07\u01B3\n\x07\f\x07\x0E\x07\u01B6\v\x07\x07" +
		"\x07\u01B8\n\x07\f\x07\x0E\x07\u01BB\v\x07\x03\x07\x03\x07\x03\x07\x03" +
		"\x07\x06\x07\u01C1\n\x07\r\x07\x0E\x07\u01C2\x03\x07\x03\x07\x07\x07\u01C7" +
		"\n\x07\f\x07\x0E\x07\u01CA\v\x07\x07\x07\u01CC\n\x07\f\x07\x0E\x07\u01CF" +
		"\v\x07\x03\x07\x03\x07\x03\x07\x03\x07\x05\x07\u01D5\n\x07\x03\x07\x03" +
		"\x07\x07\x07\u01D9\n\x07\f\x07\x0E\x07\u01DC\v\x07\x03\x07\x03\x07\x07" +
		"\x07\u01E0\n\x07\f\x07\x0E\x07\u01E3\v\x07\x03\x07\x07\x07\u01E6\n\x07" +
		"\f\x07\x0E\x07\u01E9\v\x07\x05\x07\u01EB\n\x07\x05\x07\u01ED\n\x07\x03" +
		"\b\x03\b\x03\b\x03\b\x07\b\u01F3\n\b\f\b\x0E\b\u01F6\v\b\x03\b\x03\b\x07" +
		"\b\u01FA\n\b\f\b\x0E\b\u01FD\v\b\x07\b\u01FF\n\b\f\b\x0E\b\u0202\v\b\x03" +
		"\b\x03\b\x03\b\x03\b\x06\b\u0208\n\b\r\b\x0E\b\u0209\x03\b\x03\b\x07\b" +
		"\u020E\n\b\f\b\x0E\b\u0211\v\b\x07\b\u0213\n\b\f\b\x0E\b\u0216\v\b\x03" +
		"\b\x03\b\x03\b\x03\b\x05\b\u021C\n\b\x03\b\x03\b\x07\b\u0220\n\b\f\b\x0E" +
		"\b\u0223\v\b\x03\b\x03\b\x07\b\u0227\n\b\f\b\x0E\b\u022A\v\b\x03\b\x07" +
		"\b\u022D\n\b\f\b\x0E\b\u0230\v\b\x05\b\u0232\n\b\x05\b\u0234\n\b\x03\t" +
		"\x03\t\x03\t\x03\t\x07\t\u023A\n\t\f\t\x0E\t\u023D\v\t\x03\t\x03\t\x07" +
		"\t\u0241\n\t\f\t\x0E\t\u0244\v\t\x07\t\u0246\n\t\f\t\x0E\t\u0249\v\t\x03" +
		"\t\x03\t\x03\t\x03\t\x06\t\u024F\n\t\r\t\x0E\t\u0250\x03\t\x03\t\x07\t" +
		"\u0255\n\t\f\t\x0E\t\u0258\v\t\x07\t\u025A\n\t\f\t\x0E\t\u025D\v\t\x03" +
		"\t\x03\t\x03\t\x03\t\x05\t\u0263\n\t\x03\t\x03\t\x07\t\u0267\n\t\f\t\x0E" +
		"\t\u026A\v\t\x03\t\x03\t\x07\t\u026E\n\t\f\t\x0E\t\u0271\v\t\x03\t\x07" +
		"\t\u0274\n\t\f\t\x0E\t\u0277\v\t\x05\t\u0279\n\t\x05\t\u027B\n\t\x03\n" +
		"\x03\n\x03\n\x03\n\x07\n\u0281\n\n\f\n\x0E\n\u0284\v\n\x03\n\x03\n\x07" +
		"\n\u0288\n\n\f\n\x0E\n\u028B\v\n\x07\n\u028D\n\n\f\n\x0E\n\u0290\v\n\x03" +
		"\n\x03\n\x03\n\x03\n\x06\n\u0296\n\n\r\n\x0E\n\u0297\x03\n\x03\n\x07\n" +
		"\u029C\n\n\f\n\x0E\n\u029F\v\n\x07\n\u02A1\n\n\f\n\x0E\n\u02A4\v\n\x03" +
		"\n\x03\n\x03\n\x03\n\x05\n\u02AA\n\n\x03\n\x03\n\x07\n\u02AE\n\n\f\n\x0E" +
		"\n\u02B1\v\n\x03\n\x03\n\x07\n\u02B5\n\n\f\n\x0E\n\u02B8\v\n\x03\n\x07" +
		"\n\u02BB\n\n\f\n\x0E\n\u02BE\v\n\x05\n\u02C0\n\n\x05\n\u02C2\n\n\x03\v" +
		"\x03\v\x03\v\x03\v\x07\v\u02C8\n\v\f\v\x0E\v\u02CB\v\v\x03\v\x03\v\x07" +
		"\v\u02CF\n\v\f\v\x0E\v\u02D2\v\v\x07\v\u02D4\n\v\f\v\x0E\v\u02D7\v\v\x03" +
		"\v\x03\v\x03\v\x03\v\x06\v\u02DD\n\v\r\v\x0E\v\u02DE\x03\v\x03\v\x07\v" +
		"\u02E3\n\v\f\v\x0E\v\u02E6\v\v\x07\v\u02E8\n\v\f\v\x0E\v\u02EB\v\v\x03" +
		"\v\x03\v\x03\v\x03\v\x05\v\u02F1\n\v\x03\v\x03\v\x07\v\u02F5\n\v\f\v\x0E" +
		"\v\u02F8\v\v\x03\v\x03\v\x07\v\u02FC\n\v\f\v\x0E\v\u02FF\v\v\x03\v\x07" +
		"\v\u0302\n\v\f\v\x0E\v\u0305\v\v\x05\v\u0307\n\v\x05\v\u0309\n\v\x03\f" +
		"\x03\f\x03\f\x03\f\x07\f\u030F\n\f\f\f\x0E\f\u0312\v\f\x03\f\x03\f\x07" +
		"\f\u0316\n\f\f\f\x0E\f\u0319\v\f\x07\f\u031B\n\f\f\f\x0E\f\u031E\v\f\x03" +
		"\f\x03\f\x03\f\x03\f\x06\f\u0324\n\f\r\f\x0E\f\u0325\x03\f\x03\f\x07\f" +
		"\u032A\n\f\f\f\x0E\f\u032D\v\f\x07\f\u032F\n\f\f\f\x0E\f\u0332\v\f\x03" +
		"\f\x03\f\x03\f\x03\f\x05\f\u0338\n\f\x03\f\x03\f\x07\f\u033C\n\f\f\f\x0E" +
		"\f\u033F\v\f\x03\f\x03\f\x07\f\u0343\n\f\f\f\x0E\f\u0346\v\f\x03\f\x07" +
		"\f\u0349\n\f\f\f\x0E\f\u034C\v\f\x05\f\u034E\n\f\x05\f\u0350\n\f\x03\r" +
		"\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03" +
		"\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03" +
		"\r\x03\r\x05\r\u036C\n\r\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E" +
		"\x07\x0E\u0374\n\x0E\f\x0E\x0E\x0E\u0377\v\x0E\x03\x0F\x03\x0F\x03\x0F" +
		"\x03\x0F\x05\x0F\u037D\n\x0F\x03\x0F\x07\x0F\u0380\n\x0F\f\x0F\x0E\x0F" +
		"\u0383\v\x0F\x03\x0F\x03\x0F\x03\x10\x03\x10\x05\x10\u0389\n\x10\x03\x10" +
		"\x03\x10\x05\x10\u038D\n\x10\x05\x10\u038F\n\x10\x03\x10\x03\x10\x03\x11" +
		"\x03\x11\x03\x12\x03\x12\x03\x13\x03\x13\x03\x14\x03\x14\x07\x14\u039B" +
		"\n\x14\f\x14\x0E\x14\u039E\v\x14\x03\x14\x03\x14\x07\x14\u03A2\n\x14\f" +
		"\x14\x0E\x14\u03A5\v\x14\x03\x14\x03\x14\x03\x14\x03\x15\x03\x15\x06\x15" +
		"\u03AC\n\x15\r\x15\x0E\x15\u03AD\x03\x15\x03\x15\x07\x15\u03B2\n\x15\f" +
		"\x15\x0E\x15\u03B5\v\x15\x03\x15\x06\x15\u03B8\n\x15\r\x15\x0E\x15\u03B9" +
		"\x03\x15\x03\x15\x03\x16\x03\x16\x05\x16\u03C0\n\x16\x03\x16\x03\x16\x03" +
		"\x17\x03\x17\x07\x17\u03C6\n\x17\f\x17\x0E\x17\u03C9\v\x17\x03\x17\x03" +
		"\x17\x03\x18\x03\x18\x07\x18\u03CF\n\x18\f\x18\x0E\x18\u03D2\v\x18\x03" +
		"\x18\x03\x18\x03\x19\x03\x19\x03\x19\x06\x19\u03D9\n\x19\r\x19\x0E\x19" +
		"\u03DA\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A" +
		"\x03\x1A\x07\x1A\u03E6\n\x1A\f\x1A\x0E\x1A\u03E9\v\x1A\x03\x1A\x07\x1A" +
		"\u03EC\n\x1A\f\x1A\x0E\x1A\u03EF\v\x1A\x03\x1A\x03\x1A\x07\x1A\u03F3\n" +
		"\x1A\f\x1A\x0E\x1A\u03F6\v\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x07\x1A" +
		"\u03FC\n\x1A\f\x1A\x0E\x1A\u03FF\v\x1A\x03\x1A\x03\x1A\x07\x1A\u0403\n" +
		"\x1A\f\x1A\x0E\x1A\u0406\v\x1A\x03\x1A\x07\x1A\u0409\n\x1A\f\x1A\x0E\x1A" +
		"\u040C\v\x1A\x03\x1A\x03\x1A\x07\x1A\u0410\n\x1A\f\x1A\x0E\x1A\u0413\v" +
		"\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x07\x1A\u041B\n\x1A" +
		"\f\x1A\x0E\x1A\u041E\v\x1A\x03\x1A\x03\x1A\x07\x1A\u0422\n\x1A\f\x1A\x0E" +
		"\x1A\u0425\v\x1A\x05\x1A\u0427\n\x1A\x03\x1B\x03\x1B\x07\x1B\u042B\n\x1B" +
		"\f\x1B\x0E\x1B\u042E\v\x1B\x03\x1B\x05\x1B\u0431\n\x1B\x03\x1C\x07\x1C" +
		"\u0434\n\x1C\f\x1C\x0E\x1C\u0437\v\x1C\x03\x1C\x07\x1C\u043A\n\x1C\f\x1C" +
		"\x0E\x1C\u043D\v\x1C\x03\x1C\x03\x1C\x03\x1C\x06\x1C\u0442\n\x1C\r\x1C" +
		"\x0E\x1C\u0443\x03\x1C\x07\x1C\u0447\n\x1C\f\x1C\x0E\x1C\u044A\v\x1C\x03" +
		"\x1C\x05\x1C\u044D\n\x1C\x03\x1C\x03\x1C\x03\x1C\x05\x1C\u0452\n\x1C\x03" +
		"\x1C\x07\x1C\u0455\n\x1C\f\x1C\x0E\x1C\u0458\v\x1C\x03\x1C\x05\x1C\u045B" +
		"\n\x1C\x03\x1D\x03\x1D\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x05\x1E\u0463\n" +
		"\x1E\x03\x1F\x05\x1F\u0466\n\x1F\x03\x1F\x05\x1F\u0469\n\x1F\x03\x1F\x03" +
		"\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x06\x1F\u0471\n\x1F\r\x1F\x0E\x1F" +
		"\u0472\x03\x1F\x07\x1F\u0476\n\x1F\f\x1F\x0E\x1F\u0479\v\x1F\x03\x1F\x05" +
		"\x1F\u047C\n\x1F\x03\x1F\x03\x1F\x03\x1F\x05\x1F\u0481\n\x1F\x03\x1F\x03" +
		"\x1F\x05\x1F\u0485\n\x1F\x03\x1F\x03\x1F\x03\x1F\x07\x1F\u048A\n\x1F\f" +
		"\x1F\x0E\x1F\u048D\v\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x05\x1F" +
		"\u0494\n\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x06\x1F\u049B\n\x1F" +
		"\r\x1F\x0E\x1F\u049C\x03\x1F\x03\x1F\x05\x1F\u04A1\n\x1F\x03\x1F\x03\x1F" +
		"\x03\x1F\x05\x1F\u04A6\n\x1F\x05\x1F\u04A8\n\x1F\x03 \x03 \x03 \x06 \u04AD" +
		"\n \r \x0E \u04AE\x03!\x03!\x03!\x03!\x03!\x03!\x03!\x07!\u04B8\n!\f!" +
		"\x0E!\u04BB\v!\x03!\x03!\x07!\u04BF\n!\f!\x0E!\u04C2\v!\x03\"\x03\"\x03" +
		"\"\x06\"\u04C7\n\"\r\"\x0E\"\u04C8\x03#\x03#\x03#\x03#\x03#\x03#\x03#" +
		"\x07#\u04D2\n#\f#\x0E#\u04D5\v#\x03#\x03#\x07#\u04D9\n#\f#\x0E#\u04DC" +
		"\v#\x03$\x03$\x03$\x06$\u04E1\n$\r$\x0E$\u04E2\x03%\x03%\x03%\x03%\x03" +
		"%\x03%\x06%\u04EB\n%\r%\x0E%\u04EC\x03%\x07%\u04F0\n%\f%\x0E%\u04F3\v" +
		"%\x03%\x03%\x07%\u04F7\n%\f%\x0E%\u04FA\v%\x03&\x03&\x03&\x03&\x03&\x03" +
		"&\x07&\u0502\n&\f&\x0E&\u0505\v&\x03\'\x03\'\x03\'\x03\'\x03\'\x03\'\x07" +
		"\'\u050D\n\'\f\'\x0E\'\u0510\v\'\x06\'\u0512\n\'\r\'\x0E\'\u0513\x03(" +
		"\x03(\x03(\x07(\u0519\n(\f(\x0E(\u051C\v(\x03)\x07)\u051F\n)\f)\x0E)\u0522" +
		"\v)\x03)\x03)\x03)\x06)\u0527\n)\r)\x0E)\u0528\x03)\x05)\u052C\n)\x03" +
		")\x07)\u052F\n)\f)\x0E)\u0532\v)\x03)\x05)\u0535\n)\x03*\x03*\x03*\x05" +
		"*\u053A\n*\x03*\x03*\x05*\u053E\n*\x03*\x03*\x03*\x05*\u0543\n*\x07*\u0545" +
		"\n*\f*\x0E*\u0548\v*\x03+\x05+\u054B\n+\x03+\x05+\u054E\n+\x03+\x03+\x03" +
		"+\x03+\x03+\x03+\x06+\u0556\n+\r+\x0E+\u0557\x03+\x07+\u055B\n+\f+\x0E" +
		"+\u055E\v+\x03+\x05+\u0561\n+\x03+\x05+\u0564\n+\x03+\x03+\x03+\x03+\x03" +
		"+\x06+\u056B\n+\r+\x0E+\u056C\x03+\x03+\x05+\u0571\n+\x03+\x03+\x03+\x05" +
		"+\u0576\n+\x03+\x03+\x03+\x05+\u057B\n+\x03+\x03+\x05+\u057F\n+\x03+\x03" +
		"+\x03+\x07+\u0584\n+\f+\x0E+\u0587\v+\x03+\x03+\x03+\x03+\x05+\u058D\n" +
		"+\x03,\x03,\x07,\u0591\n,\f,\x0E,\u0594\v,\x03,\x03,\x03,\x03,\x05,\u059A" +
		"\n,\x03,\x03,\x07,\u059E\n,\f,\x0E,\u05A1\v,\x03,\x05,\u05A4\n,\x03-\x03" +
		"-\x03.\x03.\x03.\x03.\x03.\x03.\x03.\x03.\x05.\u05B0\n.\x03/\x03/\x03" +
		"/\x03/\x05/\u05B6\n/\x030\x030\x030\x030\x031\x071\u05BD\n1\f1\x0E1\u05C0" +
		"\v1\x031\x031\x031\x071\u05C5\n1\f1\x0E1\u05C8\v1\x032\x032\x033\x033" +
		"\x033\x033\x033\x033\x033\x033\x033\x053\u05D5\n3\x034\x034\x034\x034" +
		"\x034\x034\x054\u05DD\n4\x035\x035\x035\x055\u05E2\n5\x035\x035\x055\u05E6" +
		"\n5\x035\x035\x055\u05EA\n5\x055\u05EC\n5\x036\x036\x036\x056\u05F1\n" +
		"6\x037\x037\x038\x038\x039\x039\x03:\x03:\x03;\x03;\x03<\x03<\x03=\x03" +
		"=\x03>\x03>\x03?\x03?\x03@\x03@\x03@\x05@\u0608\n@\x03@\x03@\x03@\x05" +
		"@\u060D\n@\x03@\x03@\x03@\x05@\u0612\n@\x05@\u0614\n@\x03A\x03A\x03B\x03" +
		"B\x03B\x03B\x03B\x03B\x05B\u061E\nB\x03C\x03C\x03C\x03C\x03C\x03C\x03" +
		"C\x03C\x05C\u0628\nC\x03D\x03D\x03D\x03D\x03D\x03D\x03D\x03D\x05D\u0632" +
		"\nD\x03E\x03E\x03E\x03E\x05E\u0638\nE\x03E\x03E\x03E\x03E\x03E\x05E\u063F" +
		"\nE\x03F\x03F\x07F\u0643\nF\fF\x0EF\u0646\vF\x03G\x03G\x03G\x07G\u064B" +
		"\nG\fG\x0EG\u064E\vG\x03G\x03G\x03G\x03H\x03H\x07H\u0655\nH\fH\x0EH\u0658" +
		"\vH\x03I\x03I\x03I\x03I\x03I\x03I\x03I\x03I\x05I\u0662\nI\x03J\x03J\x07" +
		"J\u0666\nJ\fJ\x0EJ\u0669\vJ\x03J\x03J\x05J\u066D\nJ\x03K\x03K\x03K\x07" +
		"K\u0672\nK\fK\x0EK\u0675\vK\x03K\x03K\x03K\x03L\x03L\x03L\x05L\u067D\n" +
		"L\x03L\x03L\x05L\u0681\nL\x03L\x03L\x05L\u0685\nL\x03L\x05L\u0688\nL\x03" +
		"M\x03M\x03M\x03M\x03M\x03M\x03M\x03M\x03M\x03M\x03M\x07M\u0695\nM\fM\x0E" +
		"M\u0698\vM\x03M\x05M\u069B\nM\x03N\x03N\x03N\x03N\x03N\x03N\x03N\x03N" +
		"\x03N\x03N\x03N\x07N\u06A8\nN\fN\x0EN\u06AB\vN\x03N\x05N\u06AE\nN\x03" +
		"O\x03O\x07O\u06B2\nO\fO\x0EO\u06B5\vO\x03P\x03P\x03P\x03P\x03P\x03P\x03" +
		"P\x03P\x05P\u06BF\nP\x03Q\x03Q\x03Q\x05Q\u06C4\nQ\x03Q\x03Q\x03Q\x05Q" +
		"\u06C9\nQ\x05Q\u06CB\nQ\x03R\x03R\x03R\x05R\u06D0\nR\x03R\x03R\x03R\x05" +
		"R\u06D5\nR\x03R\x03R\x03R\x05R\u06DA\nR\x05R\u06DC\nR\x03S\x03S\x03S\x05" +
		"S\u06E1\nS\x03S\x03S\x07S\u06E5\nS\fS\x0ES\u06E8\vS\x03S\x03S\x06S\u06EC" +
		"\nS\rS\x0ES\u06ED\x03S\x03S\x03S\x03S\x03S\x03S\x03S\x07S\u06F7\nS\fS" +
		"\x0ES\u06FA\vS\x03S\x05S\u06FD\nS\x03T\x03T\x03T\x03T\x03U\x03U\x03V\x03" +
		"V\x03V\x07V\u0708\nV\fV\x0EV\u070B\vV\x03V\x05V\u070E\nV\x03V\x03V\x03" +
		"V\x03V\x07V\u0714\nV\fV\x0EV\u0717\vV\x03V\x03V\x07V\u071B\nV\fV\x0EV" +
		"\u071E\vV\x03V\x05V\u0721\nV\x05V\u0723\nV\x03W\x03W\x03W\x03W\x07W\u0729" +
		"\nW\fW\x0EW\u072C\vW\x03W\x03W\x03X\x03X\x05X\u0732\nX\x03X\x03X\x03X" +
		"\x05X\u0737\nX\x03X\x05X\u073A\nX\x03Y\x03Y\x03Y\x03Y\x05Y\u0740\nY\x03" +
		"Y\x05Y\u0743\nY\x03Z\x03Z\x05Z\u0747\nZ\x03Z\x03Z\x03Z\x07Z\u074C\nZ\f" +
		"Z\x0EZ\u074F\vZ\x07Z\u0751\nZ\fZ\x0EZ\u0754\vZ\x03Z\x07Z\u0757\nZ\fZ\x0E" +
		"Z\u075A\vZ\x07Z\u075C\nZ\fZ\x0EZ\u075F\vZ\x03Z\x03Z\x03Z\x03Z\x03Z\x07" +
		"Z\u0766\nZ\fZ\x0EZ\u0769\vZ\x03Z\x05Z\u076C\nZ\x03[\x03[\x03[\x03[\x03" +
		"[\x06[\u0773\n[\r[\x0E[\u0774\x03[\x03[\x03[\x03[\x03[\x03[\x03[\x07[" +
		"\u077E\n[\f[\x0E[\u0781\v[\x03[\x05[\u0784\n[\x03\\\x03\\\x03\\\x03\\" +
		"\x03]\x03]\x03]\x03]\x06]\u078E\n]\r]\x0E]\u078F\x03]\x03]\x05]\u0794" +
		"\n]\x03^\x03^\x03^\x03^\x06^\u079A\n^\r^\x0E^\u079B\x03^\x03^\x03_\x03" +
		"_\x07_\u07A2\n_\f_\x0E_\u07A5\v_\x03_\x05_\u07A8\n_\x03_\x03_\x07_\u07AC" +
		"\n_\f_\x0E_\u07AF\v_\x07_\u07B1\n_\f_\x0E_\u07B4\v_\x03_\x07_\u07B7\n" +
		"_\f_\x0E_\u07BA\v_\x03_\x07_\u07BD\n_\f_\x0E_\u07C0\v_\x03_\x03_\x03_" +
		"\x07_\u07C5\n_\f_\x0E_\u07C8\v_\x03_\x05_\u07CB\n_\x03_\x05_\u07CE\n_" +
		"\x03`\x03`\x06`\u07D2\n`\r`\x0E`\u07D3\x03`\x03`\x03a\x03a\x03a\x06a\u07DB" +
		"\na\ra\x0Ea\u07DC\x03a\x03a\x03a\x03a\x03a\x05a\u07E4\na\x03b\x03b\x03" +
		"b\x03b\x03b\x03b\x03b\x03b\x05b\u07EE\nb\x03c\x03c\x03c\x03c\x03c\x03" +
		"c\x03c\x03c\x03c\x05c\u07F9\nc\x03d\x03d\x03d\x03d\x03e\x03e\x03e\x03" +
		"e\x03f\x03f\x07f\u0805\nf\ff\x0Ef\u0808\vf\x03f\x07f\u080B\nf\ff\x0Ef" +
		"\u080E\vf\x03g\x03g\x03g\x03g\x03g\x03g\x03g\x07g\u0817\ng\fg\x0Eg\u081A" +
		"\vg\x03g\x03g\x03g\x03g\x07g\u0820\ng\fg\x0Eg\u0823\vg\x03g\x03g\x05g" +
		"\u0827\ng\x03h\x03h\x03h\x03h\x06h\u082D\nh\rh\x0Eh\u082E\x03h\x03h\x03" +
		"h\x03h\x03h\x07h\u0836\nh\fh\x0Eh\u0839\vh\x03h\x05h\u083C\nh\x03i\x03" +
		"i\x05i\u0840\ni\x03i\x03i\x03j\x03j\x03k\x03k\x03k\x03k\x06k\u084A\nk" +
		"\rk\x0Ek\u084B\x03k\x03k\x03l\x03l\x05l\u0852\nl\x06l\u0854\nl\rl\x0E" +
		"l\u0855\x03m\x03m\x03n\x03n\x06n\u085C\nn\rn\x0En\u085D\x03n\x05n\u0861" +
		"\nn\x03n\x03n\x06n\u0865\nn\rn\x0En\u0866\x03n\x05n\u086A\nn\x03n\x03" +
		"n\x03n\x03n\x03n\x03n\x07n\u0872\nn\fn\x0En\u0875\vn\x03n\x03n\x07n\u0879" +
		"\nn\fn\x0En\u087C\vn\x03n\x03n\x07n\u0880\nn\fn\x0En\u0883\vn\x03n\x03" +
		"n\x03n\x03n\x05n\u0889\nn\x03o\x03o\x03p\x03p\x03q\x03q\x03r\x03r\x03" +
		"s\x03s\x03t\x03t\x03u\x03u\x03v\x03v\x03w\x03w\x03x\x03x\x03y\x03y\x03" +
		"z\x03z\x03{\x03{\x03|\x03|\x03|\x03|\x03|\x03|\x03|\x03|\x03|\x03|\x03" +
		"|\x06|\u08B0\n|\r|\x0E|\u08B1\x03}\x03}\x03}\x07\u059F\u0696\u06A9\u06F8" +
		"\u0821\x02\x02~\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10" +
		"\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02" +
		"$\x02&\x02(\x02*\x02,\x02.\x020\x02";
	private static readonly _serializedATNSegment1: string =
		"2\x024\x026\x028\x02:\x02<\x02>\x02@\x02B\x02D\x02F\x02H\x02J\x02L\x02" +
		"N\x02P\x02R\x02T\x02V\x02X\x02Z\x02\\\x02^\x02`\x02b\x02d\x02f\x02h\x02" +
		"j\x02l\x02n\x02p\x02r\x02t\x02v\x02x\x02z\x02|\x02~\x02\x80\x02\x82\x02" +
		"\x84\x02\x86\x02\x88\x02\x8A\x02\x8C\x02\x8E\x02\x90\x02\x92\x02\x94\x02" +
		"\x96\x02\x98\x02\x9A\x02\x9C\x02\x9E\x02\xA0\x02\xA2\x02\xA4\x02\xA6\x02" +
		"\xA8\x02\xAA\x02\xAC\x02\xAE\x02\xB0\x02\xB2\x02\xB4\x02\xB6\x02\xB8\x02" +
		"\xBA\x02\xBC\x02\xBE\x02\xC0\x02\xC2\x02\xC4\x02\xC6\x02\xC8\x02\xCA\x02" +
		"\xCC\x02\xCE\x02\xD0\x02\xD2\x02\xD4\x02\xD6\x02\xD8\x02\xDA\x02\xDC\x02" +
		"\xDE\x02\xE0\x02\xE2\x02\xE4\x02\xE6\x02\xE8\x02\xEA\x02\xEC\x02\xEE\x02" +
		"\xF0\x02\xF2\x02\xF4\x02\xF6\x02\xF8\x02\x02\x15\b\x02]^`anv\x81\x84\x8A" +
		"\x8B\x8D\x8F\x05\x02\\\\pp\x81\x81\x04\x02]]qq\x05\x02^^rs\x83\x83\x04" +
		"\x02__tt\x04\x02``uu\x05\x02aavv\x84\x84\x04\x02ggzz\x05\x02ii{|\x88\x88" +
		"\x04\x02jj}}\x04\x02kk~~\x05\x02ll\x7F\x7F\x89\x89\x03\x02=>\x04\x02M" +
		"MPS\x03\x02\x1D\x1D\x04\x02\x1E\x1E  \x03\x02  \x03\x02##\x03\x02$$\x02" +
		"\u09F0\x02\u0107\x03\x02\x02\x02\x04\u010D\x03\x02\x02\x02\x06\u0117\x03" +
		"\x02\x02\x02\b\u015E\x03\x02\x02\x02\n\u01A5\x03\x02\x02\x02\f\u01EC\x03" +
		"\x02\x02\x02\x0E\u0233\x03\x02\x02\x02\x10\u027A\x03\x02\x02\x02\x12\u02C1" +
		"\x03\x02\x02\x02\x14\u0308\x03\x02\x02\x02\x16\u034F\x03\x02\x02\x02\x18" +
		"\u036B\x03\x02\x02\x02\x1A\u036D\x03\x02\x02\x02\x1C\u0378\x03\x02\x02" +
		"\x02\x1E\u0386\x03\x02\x02\x02 \u0392\x03\x02\x02\x02\"\u0394\x03\x02" +
		"\x02\x02$\u0396\x03\x02\x02\x02&\u0398\x03\x02\x02\x02(\u03A9\x03\x02" +
		"\x02\x02*\u03BD\x03\x02\x02\x02,\u03C3\x03\x02\x02\x02.\u03CC\x03\x02" +
		"\x02\x020\u03D5\x03\x02\x02\x022\u0426\x03\x02\x02\x024\u0430\x03\x02" +
		"\x02\x026\u045A\x03\x02\x02\x028\u045C\x03\x02\x02\x02:\u045E\x03\x02" +
		"\x02\x02<\u04A7\x03\x02\x02\x02>\u04A9\x03\x02\x02\x02@\u04B0\x03\x02" +
		"\x02\x02B\u04C3\x03\x02\x02\x02D\u04CA\x03\x02\x02\x02F\u04DD\x03\x02" +
		"\x02\x02H\u04E4\x03\x02\x02\x02J\u04FB\x03\x02\x02\x02L\u0511\x03\x02" +
		"\x02\x02N\u0515\x03\x02\x02\x02P\u0534\x03\x02\x02\x02R\u0536\x03\x02" +
		"\x02\x02T\u058C\x03\x02\x02\x02V\u058E\x03\x02\x02\x02X\u05A5\x03\x02" +
		"\x02\x02Z\u05A7\x03\x02\x02\x02\\\u05B1\x03\x02\x02\x02^\u05B7\x03\x02" +
		"\x02\x02`\u05BE\x03\x02\x02\x02b\u05C9\x03\x02\x02\x02d\u05D4\x03\x02" +
		"\x02\x02f\u05DC\x03\x02\x02\x02h\u05EB\x03\x02\x02\x02j\u05ED\x03\x02" +
		"\x02\x02l\u05F2\x03\x02\x02\x02n\u05F4\x03\x02\x02\x02p\u05F6\x03\x02" +
		"\x02\x02r\u05F8\x03\x02\x02\x02t\u05FA\x03\x02\x02\x02v\u05FC\x03\x02" +
		"\x02\x02x\u05FE\x03\x02\x02\x02z\u0600\x03\x02\x02\x02|\u0602\x03\x02" +
		"\x02\x02~\u0613\x03\x02\x02\x02\x80\u0615\x03\x02\x02\x02\x82\u061D\x03" +
		"\x02\x02\x02\x84\u061F\x03\x02\x02\x02\x86\u0629\x03\x02\x02\x02\x88\u0633" +
		"\x03\x02\x02\x02\x8A\u0640\x03\x02\x02\x02\x8C\u0647\x03\x02\x02\x02\x8E" +
		"\u0652\x03\x02\x02\x02\x90\u0659\x03\x02\x02\x02\x92\u0663\x03\x02\x02" +
		"\x02\x94\u066E\x03\x02\x02\x02\x96\u0687\x03\x02\x02\x02\x98\u069A\x03" +
		"\x02\x02\x02\x9A\u06AD\x03\x02\x02\x02\x9C\u06AF\x03\x02\x02\x02\x9E\u06B6" +
		"\x03\x02\x02\x02\xA0\u06CA\x03\x02\x02\x02\xA2\u06DB\x03\x02\x02\x02\xA4" +
		"\u06FC\x03\x02\x02\x02\xA6\u06FE\x03\x02\x02\x02\xA8\u0702\x03\x02\x02" +
		"\x02\xAA\u0722\x03\x02\x02\x02\xAC\u0724\x03\x02\x02\x02\xAE\u0739\x03" +
		"\x02\x02\x02\xB0\u0742\x03\x02\x02\x02\xB2\u076B\x03\x02\x02\x02\xB4\u0783" +
		"\x03\x02\x02\x02\xB6\u0785\x03\x02\x02\x02\xB8\u0789\x03\x02\x02\x02\xBA" +
		"\u0795\x03\x02\x02\x02\xBC\u07CD\x03\x02\x02\x02\xBE\u07CF\x03\x02\x02" +
		"\x02\xC0\u07E3\x03\x02\x02\x02\xC2\u07ED\x03\x02\x02\x02\xC4\u07F8\x03" +
		"\x02\x02\x02\xC6\u07FA\x03\x02\x02\x02\xC8\u07FE\x03\x02\x02\x02\xCA\u0802" +
		"\x03\x02\x02\x02\xCC\u0826\x03\x02\x02\x02\xCE\u083B\x03\x02\x02\x02\xD0" +
		"\u083D\x03\x02\x02\x02\xD2\u0843\x03\x02\x02\x02\xD4\u0845\x03\x02\x02" +
		"\x02\xD6\u0853\x03\x02\x02\x02\xD8\u0857\x03\x02\x02\x02\xDA\u0888\x03" +
		"\x02\x02\x02\xDC\u088A\x03\x02\x02\x02\xDE\u088C\x03\x02\x02\x02\xE0\u088E" +
		"\x03\x02\x02\x02\xE2\u0890\x03\x02\x02\x02\xE4\u0892\x03\x02\x02\x02\xE6" +
		"\u0894\x03\x02\x02\x02\xE8\u0896\x03\x02\x02\x02\xEA\u0898\x03\x02\x02" +
		"\x02\xEC\u089A\x03\x02\x02\x02\xEE\u089C\x03\x02\x02\x02\xF0\u089E\x03" +
		"\x02\x02\x02\xF2\u08A0\x03\x02\x02\x02\xF4\u08A2\x03\x02\x02\x02\xF6\u08AF" +
		"\x03\x02\x02\x02\xF8\u08B3\x03\x02\x02\x02\xFA\u0104\x05\x04\x03\x02\xFB" +
		"\xFD\x07\x04\x02\x02\xFC\xFB\x03\x02\x02\x02\xFD\u0100\x03\x02\x02\x02" +
		"\xFE\xFC\x03\x02\x02\x02\xFE\xFF\x03\x02\x02\x02\xFF\u0101\x03\x02\x02" +
		"\x02\u0100\xFE\x03\x02\x02\x02\u0101\u0103\x075\x02\x02\u0102\xFE\x03" +
		"\x02\x02\x02\u0103\u0106\x03\x02\x02\x02\u0104\u0102\x03\x02\x02\x02\u0104" +
		"\u0105\x03\x02\x02\x02\u0105\u0108\x03\x02\x02\x02\u0106\u0104\x03\x02" +
		"\x02\x02\u0107\xFA\x03\x02\x02\x02\u0108\u0109\x03\x02\x02\x02\u0109\u0107" +
		"\x03\x02\x02\x02\u0109\u010A\x03\x02\x02\x02\u010A\u010B\x03\x02\x02\x02" +
		"\u010B\u010C\x07\x02\x02\x03\u010C\x03\x03\x02\x02\x02\u010D\u010E\x05" +
		"\x06\x04\x02\u010E\x05\x03\x02\x02\x02\u010F\u0118\x05\b\x05\x02\u0110" +
		"\u0118\x05\n\x06\x02\u0111\u0118\x05\x16\f\x02\u0112\u0118\x05\x10\t\x02" +
		"\u0113\u0118\x05\x0E\b\x02\u0114\u0118\x05\x12\n\x02\u0115\u0118\x05\x14" +
		"\v\x02\u0116\u0118\x05\f\x07\x02\u0117\u010F\x03\x02\x02\x02\u0117\u0110" +
		"\x03\x02\x02\x02\u0117\u0111\x03\x02\x02\x02\u0117\u0112\x03\x02\x02\x02" +
		"\u0117\u0113\x03\x02\x02\x02\u0117\u0114\x03\x02\x02\x02\u0117\u0115\x03" +
		"\x02\x02\x02\u0117\u0116\x03\x02\x02\x02\u0118\x07\x03\x02\x02\x02\u0119" +
		"\u011A\x07\x06\x02\x02\u011A\u011B\x05`1\x02\u011B\u011F\x07\x1D\x02\x02" +
		"\u011C\u011E\x075\x02\x02\u011D\u011C\x03\x02\x02\x02\u011E\u0121\x03" +
		"\x02\x02\x02\u011F\u011D\x03\x02\x02\x02\u011F\u0120\x03\x02\x02\x02\u0120" +
		"\u012B\x03\x02\x02\x02\u0121\u011F\x03\x02\x02\x02\u0122\u0126\x05\x18" +
		"\r\x02\u0123\u0125\x075\x02\x02\u0124\u0123\x03\x02\x02\x02\u0125\u0128" +
		"\x03\x02\x02\x02\u0126\u0124\x03\x02\x02\x02\u0126\u0127\x03\x02\x02\x02" +
		"\u0127\u012A\x03\x02\x02\x02\u0128\u0126\x03\x02\x02\x02\u0129\u0122\x03" +
		"\x02\x02\x02\u012A\u012D\x03\x02\x02\x02\u012B\u0129\x03\x02\x02\x02\u012B" +
		"\u012C\x03\x02\x02\x02\u012C\u015F\x03\x02\x02\x02\u012D\u012B\x03\x02" +
		"\x02\x02\u012E\u012F\x07\x06\x02\x02\u012F\u0130\x05`1\x02\u0130\u0132" +
		"\x07\x1D\x02\x02\u0131\u0133\x075\x02\x02\u0132\u0131\x03\x02\x02\x02" +
		"\u0133\u0134\x03\x02\x02\x02\u0134\u0132\x03\x02\x02\x02\u0134\u0135\x03" +
		"\x02\x02\x02\u0135\u013F\x03\x02\x02\x02\u0136\u013A\x05\x18\r\x02\u0137" +
		"\u0139\x075\x02\x02\u0138\u0137\x03\x02\x02\x02\u0139\u013C\x03\x02\x02" +
		"\x02\u013A\u0138\x03\x02\x02\x02\u013A\u013B\x03\x02\x02\x02\u013B\u013E" +
		"\x03\x02\x02\x02\u013C\u013A\x03\x02\x02\x02\u013D\u0136\x03\x02\x02\x02" +
		"\u013E\u0141\x03\x02\x02\x02\u013F\u013D\x03\x02\x02\x02\u013F\u0140\x03" +
		"\x02\x02\x02\u0140\u0146\x03\x02\x02\x02\u0141\u013F\x03\x02\x02\x02\u0142" +
		"\u0143\x07)\x02\x02\u0143\u0144\x075\x02\x02\u0144\u0145\x03\x02\x02\x02" +
		"\u0145\u0147\x05&\x14\x02\u0146\u0142\x03\x02\x02\x02\u0146\u0147\x03" +
		"\x02\x02\x02\u0147\u0148\x03\x02\x02\x02\u0148\u014C\x050\x19\x02\u0149" +
		"\u014B\x075\x02\x02\u014A\u0149\x03\x02\x02\x02\u014B\u014E\x03\x02\x02" +
		"\x02\u014C\u014A\x03\x02\x02\x02\u014C\u014D\x03\x02\x02\x02\u014D\u015C" +
		"\x03\x02\x02\x02\u014E\u014C\x03\x02\x02\x02\u014F\u0159\x05$\x13\x02" +
		"\u0150\u0152\x075\x02\x02\u0151\u0150\x03\x02\x02\x02\u0152\u0155\x03" +
		"\x02\x02\x02\u0153\u0151\x03\x02\x02\x02\u0153\u0154\x03\x02\x02\x02\u0154" +
		"\u0156\x03\x02\x02\x02\u0155\u0153\x03\x02\x02\x02\u0156\u0158\x05$\x13" +
		"\x02\u0157\u0153\x03\x02\x02\x02\u0158\u015B\x03\x02\x02\x02\u0159\u0157" +
		"\x03\x02\x02\x02\u0159\u015A\x03\x02\x02\x02\u015A\u015D\x03\x02\x02\x02" +
		"\u015B\u0159\x03\x02\x02\x02\u015C\u014F\x03\x02\x02\x02\u015C\u015D\x03" +
		"\x02\x02\x02\u015D\u015F\x03\x02\x02\x02\u015E\u0119\x03\x02\x02\x02\u015E" +
		"\u012E\x03\x02\x02\x02\u015F\t\x03\x02\x02\x02\u0160\u0161\x07\x07\x02" +
		"\x02\u0161\u0162\x05`1\x02\u0162\u0166\x07\x1D\x02\x02\u0163\u0165\x07" +
		"5\x02\x02\u0164\u0163\x03\x02\x02\x02\u0165\u0168\x03\x02\x02\x02\u0166" +
		"\u0164\x03\x02\x02\x02\u0166\u0167\x03\x02\x02\x02\u0167\u0172\x03\x02" +
		"\x02\x02\u0168\u0166\x03\x02\x02\x02\u0169\u016D\x05\x18\r\x02\u016A\u016C" +
		"\x075\x02\x02\u016B\u016A\x03\x02\x02\x02\u016C\u016F\x03\x02\x02\x02" +
		"\u016D\u016B\x03\x02\x02\x02\u016D\u016E\x03\x02\x02\x02\u016E\u0171\x03" +
		"\x02\x02\x02\u016F\u016D\x03\x02\x02\x02\u0170\u0169\x03\x02\x02\x02\u0171" +
		"\u0174\x03\x02\x02\x02\u0172\u0170\x03\x02\x02\x02\u0172\u0173\x03\x02" +
		"\x02\x02\u0173\u01A6\x03\x02\x02\x02\u0174\u0172\x03\x02\x02\x02\u0175" +
		"\u0176\x07\x07\x02\x02\u0176\u0177\x05`1\x02\u0177\u0179\x07\x1D\x02\x02" +
		"\u0178\u017A\x075\x02\x02\u0179\u0178\x03\x02\x02\x02\u017A\u017B\x03" +
		"\x02\x02\x02\u017B\u0179\x03\x02\x02\x02\u017B\u017C\x03\x02\x02\x02\u017C" +
		"\u0186\x03\x02\x02\x02\u017D\u0181\x05\x18\r\x02\u017E\u0180\x075\x02" +
		"\x02\u017F\u017E\x03\x02\x02\x02\u0180\u0183\x03\x02\x02\x02\u0181\u017F" +
		"\x03\x02\x02\x02\u0181\u0182\x03\x02\x02\x02\u0182\u0185\x03\x02\x02\x02" +
		"\u0183\u0181\x03\x02\x02\x02\u0184\u017D\x03\x02\x02\x02\u0185\u0188\x03" +
		"\x02\x02\x02\u0186\u0184\x03\x02\x02\x02\u0186\u0187\x03\x02\x02\x02\u0187" +
		"\u018D\x03\x02\x02\x02\u0188\u0186\x03\x02\x02\x02\u0189\u018A\x07)\x02" +
		"\x02\u018A\u018B\x075\x02\x02\u018B\u018C\x03\x02\x02\x02\u018C\u018E" +
		"\x05(\x15\x02\u018D\u0189\x03\x02\x02\x02\u018D\u018E\x03\x02\x02\x02" +
		"\u018E\u018F\x03\x02\x02\x02\u018F\u0193\x05F$\x02\u0190\u0192\x075\x02" +
		"\x02\u0191\u0190\x03\x02\x02\x02\u0192\u0195\x03\x02\x02\x02\u0193\u0191" +
		"\x03\x02\x02\x02\u0193\u0194\x03\x02\x02\x02\u0194\u01A3\x03\x02\x02\x02" +
		"\u0195\u0193\x03\x02\x02\x02\u0196\u01A0\x05$\x13\x02\u0197\u0199\x07" +
		"5\x02\x02\u0198\u0197\x03\x02\x02\x02\u0199\u019C\x03\x02\x02\x02\u019A" +
		"\u0198\x03\x02\x02\x02\u019A\u019B\x03\x02\x02\x02\u019B\u019D\x03\x02" +
		"\x02\x02\u019C\u019A\x03\x02\x02\x02\u019D\u019F\x05$\x13\x02\u019E\u019A" +
		"\x03\x02\x02\x02\u019F\u01A2\x03\x02\x02\x02\u01A0\u019E\x03\x02\x02\x02" +
		"\u01A0\u01A1\x03\x02\x02\x02\u01A1\u01A4\x03\x02\x02\x02\u01A2\u01A0\x03" +
		"\x02\x02\x02\u01A3\u0196\x03\x02\x02\x02\u01A3\u01A4\x03\x02\x02\x02\u01A4" +
		"\u01A6\x03\x02\x02\x02\u01A5\u0160\x03\x02\x02\x02\u01A5\u0175\x03\x02" +
		"\x02\x02\u01A6\v\x03\x02\x02\x02\u01A7\u01A8\x07\r\x02\x02\u01A8\u01A9" +
		"\x05`1\x02\u01A9\u01AD\x07\x1D\x02\x02\u01AA\u01AC\x075\x02\x02\u01AB" +
		"\u01AA\x03\x02\x02\x02\u01AC\u01AF\x03\x02\x02\x02\u01AD\u01AB\x03\x02" +
		"\x02\x02\u01AD\u01AE\x03\x02\x02\x02\u01AE\u01B9\x03\x02\x02\x02\u01AF" +
		"\u01AD\x03\x02\x02\x02\u01B0\u01B4\x05\x18\r\x02\u01B1\u01B3\x075\x02" +
		"\x02\u01B2\u01B1\x03\x02\x02\x02\u01B3\u01B6\x03\x02\x02\x02\u01B4\u01B2" +
		"\x03\x02\x02\x02\u01B4\u01B5\x03\x02\x02\x02\u01B5\u01B8\x03\x02\x02\x02" +
		"\u01B6\u01B4\x03\x02\x02\x02\u01B7\u01B0\x03\x02\x02\x02\u01B8\u01BB\x03" +
		"\x02\x02\x02\u01B9\u01B7\x03\x02\x02\x02\u01B9\u01BA\x03\x02\x02\x02\u01BA" +
		"\u01ED\x03\x02\x02\x02\u01BB\u01B9\x03\x02\x02\x02\u01BC\u01BD\x07\r\x02" +
		"\x02\u01BD\u01BE\x05`1\x02\u01BE\u01C0\x07\x1D\x02\x02\u01BF\u01C1\x07" +
		"5\x02\x02\u01C0\u01BF\x03\x02\x02\x02\u01C1\u01C2\x03\x02\x02\x02\u01C2" +
		"\u01C0\x03\x02\x02\x02\u01C2\u01C3\x03\x02\x02\x02\u01C3\u01CD\x03\x02" +
		"\x02\x02\u01C4\u01C8\x05\x18\r\x02\u01C5\u01C7\x075\x02\x02\u01C6\u01C5" +
		"\x03\x02\x02\x02\u01C7\u01CA\x03\x02\x02\x02\u01C8\u01C6\x03\x02\x02\x02" +
		"\u01C8\u01C9\x03\x02\x02\x02\u01C9\u01CC\x03\x02\x02\x02\u01CA\u01C8\x03" +
		"\x02\x02\x02\u01CB\u01C4\x03\x02\x02\x02\u01CC\u01CF\x03\x02\x02\x02\u01CD" +
		"\u01CB\x03\x02\x02\x02\u01CD\u01CE\x03\x02\x02\x02\u01CE\u01D4\x03\x02" +
		"\x02\x02\u01CF\u01CD\x03\x02\x02\x02\u01D0\u01D1\x07)\x02\x02\u01D1\u01D2" +
		"\x075\x02\x02\u01D2\u01D3\x03\x02\x02\x02\u01D3\u01D5\x05&\x14\x02\u01D4" +
		"\u01D0\x03\x02\x02\x02\u01D4\u01D5\x03\x02\x02\x02\u01D5\u01D6\x03\x02" +
		"\x02\x02\u01D6\u01DA\x050\x19\x02\u01D7\u01D9\x075\x02\x02\u01D8\u01D7" +
		"\x03\x02\x02\x02\u01D9\u01DC\x03\x02\x02\x02\u01DA\u01D8\x03\x02\x02\x02" +
		"\u01DA\u01DB\x03\x02\x02\x02\u01DB\u01EA\x03\x02\x02\x02\u01DC\u01DA\x03" +
		"\x02\x02\x02\u01DD\u01E7\x05$\x13\x02\u01DE\u01E0\x075\x02\x02\u01DF\u01DE" +
		"\x03\x02\x02\x02\u01E0\u01E3\x03\x02\x02\x02\u01E1\u01DF\x03\x02\x02\x02" +
		"\u01E1\u01E2\x03\x02\x02\x02\u01E2\u01E4\x03\x02\x02\x02\u01E3\u01E1\x03" +
		"\x02\x02\x02\u01E4\u01E6\x05$\x13\x02\u01E5\u01E1\x03\x02\x02\x02\u01E6" +
		"\u01E9\x03\x02\x02\x02\u01E7\u01E5\x03\x02\x02\x02\u01E7\u01E8\x03\x02" +
		"\x02\x02\u01E8\u01EB\x03\x02\x02\x02\u01E9\u01E7\x03\x02\x02\x02\u01EA" +
		"\u01DD\x03\x02\x02\x02\u01EA\u01EB\x03\x02\x02\x02\u01EB\u01ED\x03\x02" +
		"\x02\x02\u01EC\u01A7\x03\x02\x02\x02\u01EC\u01BC\x03\x02\x02\x02\u01ED" +
		"\r\x03\x02\x02\x02\u01EE\u01EF\x07\t\x02\x02\u01EF\u01F0\x05`1\x02\u01F0" +
		"\u01F4\x07\x1D\x02\x02\u01F1\u01F3\x075\x02\x02\u01F2\u01F1\x03\x02\x02" +
		"\x02\u01F3\u01F6\x03\x02\x02\x02\u01F4\u01F2\x03\x02\x02\x02\u01F4\u01F5" +
		"\x03\x02\x02\x02\u01F5\u0200\x03\x02\x02\x02\u01F6\u01F4\x03\x02\x02\x02" +
		"\u01F7\u01FB\x05\x18\r\x02\u01F8\u01FA\x075\x02\x02\u01F9\u01F8\x03\x02" +
		"\x02\x02\u01FA\u01FD\x03\x02\x02\x02\u01FB\u01F9\x03\x02\x02\x02\u01FB" +
		"\u01FC\x03\x02\x02\x02\u01FC\u01FF\x03\x02\x02\x02\u01FD\u01FB\x03\x02" +
		"\x02\x02\u01FE\u01F7\x03\x02\x02\x02\u01FF\u0202\x03\x02\x02\x02\u0200" +
		"\u01FE\x03\x02\x02\x02\u0200\u0201\x03\x02\x02\x02\u0201\u0234\x03\x02" +
		"\x02\x02\u0202\u0200\x03\x02\x02\x02\u0203\u0204\x07\t\x02\x02\u0204\u0205" +
		"\x05`1\x02\u0205\u0207\x07\x1D\x02\x02\u0206\u0208\x075\x02\x02\u0207" +
		"\u0206\x03\x02\x02\x02\u0208\u0209\x03\x02\x02\x02\u0209\u0207\x03\x02" +
		"\x02\x02\u0209\u020A\x03\x02\x02\x02\u020A\u0214\x03\x02\x02\x02\u020B" +
		"\u020F\x05\x18\r\x02\u020C\u020E\x075\x02\x02\u020D\u020C\x03\x02\x02" +
		"\x02\u020E\u0211\x03\x02\x02\x02\u020F\u020D\x03\x02\x02\x02\u020F\u0210" +
		"\x03\x02\x02\x02\u0210\u0213\x03\x02\x02\x02\u0211\u020F\x03\x02\x02\x02" +
		"\u0212\u020B\x03\x02\x02\x02\u0213\u0216\x03\x02\x02\x02\u0214\u0212\x03" +
		"\x02\x02\x02\u0214\u0215\x03\x02\x02\x02\u0215\u021B\x03\x02\x02\x02\u0216" +
		"\u0214\x03\x02\x02\x02\u0217\u0218\x07)\x02\x02\u0218\u0219\x075\x02\x02" +
		"\u0219\u021A\x03\x02\x02\x02\u021A\u021C\x05&\x14\x02\u021B\u0217\x03" +
		"\x02\x02\x02\u021B\u021C\x03\x02\x02\x02\u021C\u021D\x03\x02\x02\x02\u021D" +
		"\u0221\x050\x19\x02\u021E\u0220\x075\x02\x02\u021F\u021E\x03\x02\x02\x02" +
		"\u0220\u0223\x03\x02\x02\x02\u0221\u021F\x03\x02\x02\x02\u0221\u0222\x03" +
		"\x02\x02\x02\u0222\u0231\x03\x02\x02\x02\u0223\u0221\x03\x02\x02\x02\u0224" +
		"\u022E\x05$\x13\x02\u0225\u0227\x075\x02\x02\u0226\u0225\x03\x02\x02\x02" +
		"\u0227\u022A\x03\x02\x02\x02\u0228\u0226\x03\x02\x02\x02\u0228\u0229\x03" +
		"\x02\x02\x02\u0229\u022B\x03\x02\x02\x02\u022A\u0228\x03\x02\x02\x02\u022B" +
		"\u022D\x05$\x13\x02\u022C\u0228\x03\x02\x02\x02\u022D\u0230\x03\x02\x02" +
		"\x02\u022E\u022C\x03\x02\x02\x02\u022E\u022F\x03\x02\x02\x02\u022F\u0232" +
		"\x03\x02\x02\x02\u0230\u022E\x03\x02\x02\x02\u0231\u0224\x03\x02\x02\x02" +
		"\u0231\u0232\x03\x02\x02\x02\u0232\u0234\x03\x02\x02\x02\u0233\u01EE\x03" +
		"\x02\x02\x02\u0233\u0203\x03\x02\x02\x02\u0234\x0F\x03\x02\x02\x02\u0235" +
		"\u0236\x07\n\x02\x02\u0236\u0237\x05`1\x02\u0237\u023B\x07\x1D\x02\x02" +
		"\u0238\u023A\x075\x02\x02\u0239\u0238\x03\x02\x02\x02\u023A\u023D\x03" +
		"\x02\x02\x02\u023B\u0239\x03\x02\x02\x02\u023B\u023C\x03\x02\x02\x02\u023C" +
		"\u0247\x03\x02\x02\x02\u023D\u023B\x03\x02\x02\x02\u023E\u0242\x05\x18" +
		"\r\x02\u023F\u0241\x075\x02\x02\u0240\u023F\x03\x02\x02\x02\u0241\u0244" +
		"\x03\x02\x02\x02\u0242\u0240\x03\x02\x02\x02\u0242\u0243\x03\x02\x02\x02" +
		"\u0243\u0246\x03\x02\x02\x02\u0244\u0242\x03\x02\x02\x02\u0245\u023E\x03" +
		"\x02\x02\x02\u0246\u0249\x03\x02\x02\x02\u0247\u0245\x03\x02\x02\x02\u0247" +
		"\u0248\x03\x02\x02\x02\u0248\u027B\x03\x02\x02\x02\u0249\u0247\x03\x02" +
		"\x02\x02\u024A\u024B\x07\n\x02\x02\u024B\u024C\x05`1\x02\u024C\u024E\x07" +
		"\x1D\x02\x02\u024D\u024F\x075\x02\x02\u024E\u024D\x03\x02\x02\x02\u024F" +
		"\u0250\x03\x02\x02\x02\u0250\u024E\x03\x02\x02\x02\u0250\u0251\x03\x02" +
		"\x02\x02\u0251\u025B\x03\x02\x02\x02\u0252\u0256\x05\x18\r\x02\u0253\u0255" +
		"\x075\x02\x02\u0254\u0253\x03\x02\x02\x02\u0255\u0258\x03\x02\x02\x02" +
		"\u0256\u0254\x03\x02\x02\x02\u0256\u0257\x03\x02\x02\x02\u0257\u025A\x03" +
		"\x02\x02\x02\u0258\u0256\x03\x02\x02\x02\u0259\u0252\x03\x02\x02\x02\u025A" +
		"\u025D\x03\x02\x02\x02\u025B\u0259\x03\x02\x02\x02\u025B\u025C\x03\x02" +
		"\x02\x02\u025C\u0262\x03\x02\x02\x02\u025D\u025B\x03\x02\x02\x02\u025E" +
		"\u025F\x07)\x02\x02\u025F\u0260\x075\x02\x02\u0260\u0261\x03\x02\x02\x02" +
		"\u0261\u0263\x05&\x14\x02\u0262\u025E\x03\x02\x02\x02\u0262\u0263\x03" +
		"\x02\x02\x02\u0263\u0264\x03\x02\x02\x02\u0264\u0268\x050\x19\x02\u0265" +
		"\u0267\x075\x02\x02\u0266\u0265\x03\x02\x02\x02\u0267\u026A\x03\x02\x02" +
		"\x02\u0268\u0266\x03\x02\x02\x02\u0268\u0269\x03\x02\x02\x02\u0269\u0278" +
		"\x03\x02\x02\x02\u026A\u0268\x03\x02\x02\x02\u026B\u0275\x05$\x13\x02" +
		"\u026C\u026E\x075\x02\x02\u026D\u026C\x03\x02\x02\x02\u026E\u0271\x03" +
		"\x02\x02\x02\u026F\u026D\x03\x02\x02\x02\u026F\u0270\x03\x02\x02\x02\u0270" +
		"\u0272\x03\x02\x02\x02\u0271\u026F\x03\x02\x02\x02\u0272\u0274\x05$\x13" +
		"\x02\u0273\u026F\x03\x02\x02\x02\u0274\u0277\x03\x02\x02\x02\u0275\u0273" +
		"\x03\x02\x02\x02\u0275\u0276\x03\x02\x02\x02\u0276\u0279\x03\x02\x02\x02" +
		"\u0277\u0275\x03\x02\x02\x02\u0278\u026B\x03\x02\x02\x02\u0278\u0279\x03" +
		"\x02\x02\x02\u0279\u027B\x03\x02\x02\x02\u027A\u0235\x03\x02\x02\x02\u027A" +
		"\u024A\x03\x02\x02\x02\u027B\x11\x03\x02\x02\x02\u027C\u027D\x07\v\x02" +
		"\x02\u027D\u027E\x05`1\x02\u027E\u0282\x07\x1D\x02\x02\u027F\u0281\x07" +
		"5\x02\x02\u0280\u027F\x03\x02\x02\x02\u0281\u0284\x03\x02\x02\x02\u0282" +
		"\u0280\x03\x02\x02\x02\u0282\u0283\x03\x02\x02\x02\u0283\u028E\x03\x02" +
		"\x02\x02\u0284\u0282\x03\x02\x02\x02\u0285\u0289\x05\x18\r\x02\u0286\u0288" +
		"\x075\x02\x02\u0287\u0286\x03\x02\x02\x02\u0288\u028B\x03\x02\x02\x02" +
		"\u0289\u0287\x03\x02\x02\x02\u0289\u028A\x03\x02\x02\x02\u028A\u028D\x03" +
		"\x02\x02\x02\u028B\u0289\x03\x02\x02\x02\u028C\u0285\x03\x02\x02\x02\u028D" +
		"\u0290\x03\x02\x02\x02\u028E\u028C\x03\x02\x02\x02\u028E\u028F\x03\x02" +
		"\x02\x02\u028F\u02C2\x03\x02\x02\x02\u0290\u028E\x03\x02\x02\x02\u0291" +
		"\u0292\x07\v\x02\x02\u0292\u0293\x05`1\x02\u0293\u0295\x07\x1D\x02\x02" +
		"\u0294\u0296\x075\x02\x02\u0295\u0294\x03\x02\x02\x02\u0296\u0297\x03" +
		"\x02\x02\x02\u0297\u0295\x03\x02\x02\x02\u0297\u0298\x03\x02\x02\x02\u0298" +
		"\u02A2\x03\x02\x02\x02\u0299\u029D\x05\x18\r\x02\u029A\u029C\x075\x02" +
		"\x02\u029B\u029A\x03\x02\x02\x02\u029C\u029F\x03\x02\x02\x02\u029D\u029B" +
		"\x03\x02\x02\x02\u029D\u029E\x03\x02\x02\x02\u029E\u02A1\x03\x02\x02\x02" +
		"\u029F\u029D\x03\x02\x02\x02\u02A0\u0299\x03\x02\x02\x02\u02A1\u02A4\x03" +
		"\x02\x02\x02\u02A2\u02A0\x03\x02\x02\x02\u02A2\u02A3\x03\x02\x02\x02\u02A3" +
		"\u02A9\x03\x02\x02\x02\u02A4\u02A2\x03\x02\x02\x02\u02A5\u02A6\x07)\x02" +
		"\x02\u02A6\u02A7\x075\x02\x02\u02A7\u02A8\x03\x02\x02\x02\u02A8\u02AA" +
		"\x05&\x14\x02\u02A9\u02A5\x03\x02\x02\x02\u02A9\u02AA\x03\x02\x02\x02" +
		"\u02AA\u02AB\x03\x02\x02\x02\u02AB\u02AF\x05> \x02\u02AC\u02AE\x075\x02" +
		"\x02\u02AD\u02AC\x03\x02\x02\x02\u02AE\u02B1\x03\x02\x02\x02\u02AF\u02AD" +
		"\x03\x02\x02\x02\u02AF\u02B0\x03\x02\x02\x02\u02B0\u02BF\x03\x02\x02\x02" +
		"\u02B1\u02AF\x03\x02\x02\x02\u02B2\u02BC\x05$\x13\x02\u02B3\u02B5\x07" +
		"5\x02\x02\u02B4\u02B3\x03\x02\x02\x02\u02B5\u02B8\x03\x02\x02\x02\u02B6" +
		"\u02B4\x03\x02\x02\x02\u02B6\u02B7\x03\x02\x02\x02\u02B7\u02B9\x03\x02" +
		"\x02\x02\u02B8\u02B6\x03\x02\x02\x02\u02B9\u02BB\x05$\x13\x02\u02BA\u02B6" +
		"\x03\x02\x02\x02\u02BB\u02BE\x03\x02\x02\x02\u02BC\u02BA\x03\x02\x02\x02" +
		"\u02BC\u02BD\x03\x02\x02\x02\u02BD\u02C0\x03\x02\x02\x02\u02BE\u02BC\x03" +
		"\x02\x02\x02\u02BF\u02B2\x03\x02\x02\x02\u02BF\u02C0\x03\x02\x02\x02\u02C0" +
		"\u02C2\x03\x02\x02\x02\u02C1\u027C\x03\x02\x02\x02\u02C1\u0291\x03\x02" +
		"\x02\x02\u02C2\x13\x03\x02\x02\x02\u02C3\u02C4\x07\f\x02\x02\u02C4\u02C5" +
		"\x05`1\x02\u02C5\u02C9\x07\x1D\x02\x02\u02C6\u02C8\x075\x02\x02\u02C7" +
		"\u02C6\x03\x02\x02\x02\u02C8\u02CB\x03\x02\x02\x02\u02C9\u02C7\x03\x02" +
		"\x02\x02\u02C9\u02CA\x03\x02\x02\x02\u02CA\u02D5\x03\x02\x02\x02\u02CB" +
		"\u02C9\x03\x02\x02\x02\u02CC\u02D0\x05\x18\r\x02\u02CD\u02CF\x075\x02" +
		"\x02\u02CE\u02CD\x03\x02\x02\x02\u02CF\u02D2\x03\x02\x02\x02\u02D0\u02CE" +
		"\x03\x02\x02\x02\u02D0\u02D1\x03\x02\x02\x02\u02D1\u02D4\x03\x02\x02\x02" +
		"\u02D2\u02D0\x03\x02\x02\x02\u02D3\u02CC\x03\x02\x02\x02\u02D4\u02D7\x03" +
		"\x02\x02\x02\u02D5\u02D3\x03\x02\x02\x02\u02D5\u02D6\x03\x02\x02\x02\u02D6" +
		"\u0309\x03\x02\x02\x02\u02D7\u02D5\x03\x02\x02\x02\u02D8\u02D9\x07\f\x02" +
		"\x02\u02D9\u02DA\x05`1\x02\u02DA\u02DC\x07\x1D\x02\x02\u02DB\u02DD\x07" +
		"5\x02\x02\u02DC\u02DB\x03\x02\x02\x02\u02DD\u02DE\x03\x02\x02\x02\u02DE" +
		"\u02DC\x03\x02\x02\x02\u02DE\u02DF\x03\x02\x02\x02\u02DF\u02E9\x03\x02" +
		"\x02\x02\u02E0\u02E4\x05\x18\r\x02\u02E1\u02E3\x075\x02\x02\u02E2\u02E1" +
		"\x03\x02\x02\x02\u02E3\u02E6\x03\x02\x02\x02\u02E4\u02E2\x03\x02\x02\x02" +
		"\u02E4\u02E5\x03\x02\x02\x02\u02E5\u02E8\x03\x02\x02\x02\u02E6\u02E4\x03" +
		"\x02\x02\x02\u02E7\u02E0\x03\x02\x02\x02\u02E8\u02EB\x03\x02\x02\x02\u02E9" +
		"\u02E7\x03\x02\x02\x02\u02E9\u02EA\x03\x02\x02\x02\u02EA\u02F0\x03\x02" +
		"\x02\x02\u02EB\u02E9\x03\x02\x02\x02\u02EC\u02ED\x07)\x02\x02\u02ED\u02EE" +
		"\x075\x02\x02\u02EE\u02EF\x03\x02\x02\x02\u02EF\u02F1\x05&\x14\x02\u02F0" +
		"\u02EC\x03\x02\x02\x02\u02F0\u02F1\x03\x02\x02\x02\u02F1\u02F2\x03\x02" +
		"\x02\x02\u02F2\u02F6\x05B\"\x02\u02F3\u02F5\x075\x02\x02\u02F4\u02F3\x03" +
		"\x02\x02\x02\u02F5\u02F8\x03\x02\x02\x02\u02F6\u02F4\x03\x02\x02\x02\u02F6" +
		"\u02F7\x03\x02\x02\x02\u02F7\u0306\x03\x02\x02\x02\u02F8\u02F6\x03\x02" +
		"\x02\x02\u02F9\u0303\x05$\x13\x02\u02FA\u02FC\x075\x02\x02\u02FB\u02FA" +
		"\x03\x02\x02\x02\u02FC\u02FF\x03\x02\x02\x02\u02FD\u02FB\x03\x02\x02\x02" +
		"\u02FD\u02FE\x03\x02\x02\x02\u02FE\u0300\x03\x02\x02\x02\u02FF\u02FD\x03" +
		"\x02\x02\x02\u0300\u0302\x05$\x13\x02\u0301\u02FD\x03\x02\x02\x02\u0302" +
		"\u0305\x03\x02\x02\x02\u0303\u0301\x03\x02\x02\x02\u0303\u0304\x03\x02" +
		"\x02\x02\u0304\u0307\x03\x02\x02\x02\u0305\u0303\x03\x02\x02\x02\u0306" +
		"\u02F9\x03\x02\x02\x02\u0306\u0307\x03\x02\x02\x02\u0307\u0309\x03\x02" +
		"\x02\x02\u0308\u02C3\x03\x02\x02\x02\u0308\u02D8\x03\x02\x02\x02\u0309" +
		"\x15\x03\x02\x02\x02\u030A\u030B\x07\b\x02\x02\u030B\u030C\x05`1\x02\u030C" +
		"\u0310\x07\x1D\x02\x02\u030D\u030F\x075\x02\x02\u030E\u030D\x03\x02\x02" +
		"\x02\u030F\u0312\x03\x02\x02\x02\u0310\u030E\x03\x02\x02\x02\u0310\u0311" +
		"\x03\x02\x02\x02\u0311\u031C\x03\x02\x02\x02\u0312\u0310\x03\x02\x02\x02" +
		"\u0313\u0317\x05\x18\r\x02\u0314\u0316\x075\x02\x02\u0315\u0314\x03\x02" +
		"\x02\x02\u0316\u0319\x03\x02\x02\x02\u0317\u0315\x03\x02\x02\x02\u0317" +
		"\u0318\x03\x02\x02\x02\u0318\u031B\x03\x02\x02\x02\u0319\u0317\x03\x02" +
		"\x02\x02\u031A\u0313\x03\x02\x02\x02\u031B\u031E\x03\x02\x02\x02\u031C" +
		"\u031A\x03\x02\x02\x02\u031C\u031D\x03\x02\x02\x02\u031D\u0350\x03\x02" +
		"\x02\x02\u031E\u031C\x03\x02\x02\x02\u031F\u0320\x07\b\x02\x02\u0320\u0321" +
		"\x05`1\x02\u0321\u0323\x07\x1D\x02\x02\u0322\u0324\x075\x02\x02\u0323" +
		"\u0322\x03\x02\x02\x02\u0324\u0325\x03\x02\x02\x02\u0325\u0323\x03\x02" +
		"\x02\x02\u0325\u0326\x03\x02\x02\x02\u0326\u0330\x03\x02\x02\x02";
	private static readonly _serializedATNSegment2: string =
		"\u0327\u032B\x05\x18\r\x02\u0328\u032A\x075\x02\x02\u0329\u0328\x03\x02" +
		"\x02\x02\u032A\u032D\x03\x02\x02\x02\u032B\u0329\x03\x02\x02\x02\u032B" +
		"\u032C\x03\x02\x02\x02\u032C\u032F\x03\x02\x02\x02\u032D\u032B\x03\x02" +
		"\x02\x02\u032E\u0327\x03\x02\x02\x02\u032F\u0332\x03\x02\x02\x02\u0330" +
		"\u032E\x03\x02\x02\x02\u0330\u0331\x03\x02\x02\x02\u0331\u0337\x03\x02" +
		"\x02\x02\u0332\u0330\x03\x02\x02\x02\u0333\u0334\x07)\x02\x02\u0334\u0335" +
		"\x075\x02\x02\u0335\u0336\x03\x02\x02\x02\u0336\u0338\x05&\x14\x02\u0337" +
		"\u0333\x03\x02\x02\x02\u0337\u0338\x03\x02\x02\x02\u0338\u0339\x03\x02" +
		"\x02\x02\u0339\u033D\x050\x19\x02\u033A\u033C\x075\x02\x02\u033B\u033A" +
		"\x03\x02\x02\x02\u033C\u033F\x03\x02\x02\x02\u033D\u033B\x03\x02\x02\x02" +
		"\u033D\u033E\x03\x02\x02\x02\u033E\u034D\x03\x02\x02\x02\u033F\u033D\x03" +
		"\x02\x02\x02\u0340\u034A\x05$\x13\x02\u0341\u0343\x075\x02\x02\u0342\u0341" +
		"\x03\x02\x02\x02\u0343\u0346\x03\x02\x02\x02\u0344\u0342\x03\x02\x02\x02" +
		"\u0344\u0345\x03\x02\x02\x02\u0345\u0347\x03\x02\x02\x02\u0346\u0344\x03" +
		"\x02\x02\x02\u0347\u0349\x05$\x13\x02\u0348\u0344\x03\x02\x02\x02\u0349" +
		"\u034C\x03\x02\x02\x02\u034A\u0348\x03\x02\x02\x02\u034A\u034B\x03\x02" +
		"\x02\x02\u034B\u034E\x03\x02\x02\x02\u034C\u034A\x03\x02\x02\x02\u034D" +
		"\u0340\x03\x02\x02\x02\u034D\u034E\x03\x02\x02\x02\u034E\u0350\x03\x02" +
		"\x02\x02\u034F\u030A\x03\x02\x02\x02\u034F\u031F\x03\x02\x02\x02\u0350" +
		"\x17\x03\x02\x02\x02\u0351\u036C\x076\x02\x02\u0352\u036C\x05\xD8m\x02" +
		"\u0353\u036C\x05\xDCo\x02\u0354\u036C\x05\xD4k\x02\u0355\u036C\x05\x1A" +
		"\x0E\x02\u0356\u036C\x05\xCAf\x02\u0357\u036C\x05\xCEh\x02\u0358\u036C" +
		"\x05\xB4[\x02\u0359\u036C\x05\xAAV\x02\u035A\u036C\x05\xBC_\x02\u035B" +
		"\u036C\x05\xBE`\x02\u035C\u036C\x05\xDAn\x02\u035D\u036C\x05\xB0Y\x02" +
		"\u035E\u036C\x05\xC2b\x02\u035F\u036C\x05\x92J\x02\u0360\u036C\x05\x9C" +
		"O\x02\u0361\u036C\x05\x8EH\x02\u0362\u036C\x05\x82B\x02\u0363\u036C\x05" +
		"\x84C\x02\u0364\u036C\x05\x88E\x02\u0365\u036C\x05\x86D\x02\u0366\u036C" +
		"\x05\x8AF\x02\u0367\u036C\x05\xAEX\x02\u0368\u036C\x05\xD0i\x02\u0369" +
		"\u036C\x05\xB2Z\x02\u036A\u036C\x05\xF8}\x02\u036B\u0351\x03\x02\x02\x02" +
		"\u036B\u0352\x03\x02\x02\x02\u036B\u0353\x03\x02\x02\x02\u036B\u0354\x03" +
		"\x02\x02\x02\u036B\u0355\x03\x02\x02\x02\u036B\u0356\x03\x02\x02\x02\u036B" +
		"\u0357\x03\x02\x02\x02\u036B\u0358\x03\x02\x02\x02\u036B\u0359\x03\x02" +
		"\x02\x02\u036B\u035A\x03\x02\x02\x02\u036B\u035B\x03\x02\x02\x02\u036B" +
		"\u035C\x03\x02\x02\x02\u036B\u035D\x03\x02\x02\x02\u036B\u035E\x03\x02" +
		"\x02\x02\u036B\u035F\x03\x02\x02\x02\u036B\u0360\x03\x02\x02\x02\u036B" +
		"\u0361\x03\x02\x02\x02\u036B\u0362\x03\x02\x02\x02\u036B\u0363\x03\x02" +
		"\x02\x02\u036B\u0364\x03\x02\x02\x02\u036B\u0365\x03\x02\x02\x02\u036B" +
		"\u0366\x03\x02\x02\x02\u036B\u0367\x03\x02\x02\x02\u036B\u0368\x03\x02" +
		"\x02\x02\u036B\u0369\x03\x02\x02\x02\u036B\u036A\x03\x02\x02\x02\u036C" +
		"\x19\x03\x02\x02\x02\u036D\u0375\x05\x1C\x0F\x02\u036E\u0374\x05\x1C\x0F" +
		"\x02\u036F\u0374\x05\xBC_\x02\u0370\u0374\x05\xBE`\x02\u0371\u0374\x05" +
		"\xAAV\x02\u0372\u0374\x05\xB0Y\x02\u0373\u036E\x03\x02\x02\x02\u0373\u036F" +
		"\x03\x02\x02\x02\u0373\u0370\x03\x02\x02\x02\u0373\u0371\x03\x02\x02\x02" +
		"\u0373\u0372\x03\x02\x02\x02\u0374\u0377\x03\x02\x02\x02\u0375\u0373\x03" +
		"\x02\x02\x02\u0375\u0376\x03\x02\x02\x02\u0376\x1B\x03\x02\x02\x02\u0377" +
		"\u0375\x03\x02\x02\x02\u0378\u037C\x07\x13\x02\x02\u0379\u037D\x073\x02" +
		"\x02\u037A\u037D\x074\x02\x02\u037B\u037D\x03\x02\x02\x02\u037C\u0379" +
		"\x03\x02\x02\x02\u037C\u037A\x03\x02\x02\x02\u037C\u037B\x03\x02\x02\x02" +
		"\u037D\u0381\x03\x02\x02\x02\u037E\u0380\x05\xDAn\x02\u037F\u037E\x03" +
		"\x02\x02\x02\u0380\u0383\x03\x02\x02\x02\u0381\u037F\x03\x02\x02\x02\u0381" +
		"\u0382\x03\x02\x02\x02\u0382\u0384\x03\x02\x02\x02\u0383\u0381\x03\x02" +
		"\x02\x02\u0384\u0385\x05\xF2z\x02\u0385\x1D\x03\x02\x02\x02\u0386\u038E" +
		"\x07C\x02\x02\u0387\u0389\x075\x02\x02\u0388\u0387\x03\x02\x02\x02\u0388" +
		"\u0389\x03\x02\x02\x02\u0389\u038A\x03\x02\x02\x02\u038A\u038C\x05\xD6" +
		"l\x02\u038B\u038D\x075\x02\x02\u038C\u038B\x03\x02\x02\x02\u038C\u038D" +
		"\x03\x02\x02\x02\u038D\u038F\x03\x02\x02\x02\u038E\u0388\x03\x02\x02\x02" +
		"\u038E\u038F\x03\x02\x02\x02\u038F\u0390\x03\x02\x02\x02\u0390\u0391\x07" +
		"\x1D\x02\x02\u0391\x1F\x03\x02\x02\x02\u0392\u0393\x07A\x02\x02\u0393" +
		"!\x03\x02\x02\x02\u0394\u0395\x07@\x02\x02\u0395#\x03\x02\x02\x02\u0396" +
		"\u0397\x05\x18\r\x02\u0397%\x03\x02\x02\x02\u0398\u039C\x05*\x16\x02\u0399" +
		"\u039B\x075\x02\x02\u039A\u0399\x03\x02\x02\x02\u039B\u039E\x03\x02\x02" +
		"\x02\u039C\u039A\x03\x02\x02\x02\u039C\u039D\x03\x02\x02\x02\u039D\u039F" +
		"\x03\x02\x02\x02\u039E\u039C\x03\x02\x02\x02\u039F\u03A3\x07(\x02\x02" +
		"\u03A0\u03A2\x075\x02\x02\u03A1\u03A0\x03\x02\x02\x02\u03A2\u03A5\x03" +
		"\x02\x02\x02\u03A3\u03A1\x03\x02\x02\x02\u03A3\u03A4\x03\x02\x02\x02\u03A4" +
		"\u03A6\x03\x02\x02\x02\u03A5\u03A3\x03\x02\x02\x02\u03A6\u03A7\x05,\x17" +
		"\x02\u03A7\u03A8\x075\x02\x02\u03A8\'\x03\x02\x02\x02\u03A9\u03B7\x05" +
		"*\x16\x02\u03AA\u03AC\x075\x02\x02\u03AB\u03AA\x03\x02\x02\x02\u03AC\u03AD" +
		"\x03\x02\x02\x02\u03AD\u03AB\x03\x02\x02\x02\u03AD\u03AE\x03\x02\x02\x02" +
		"\u03AE\u03AF\x03\x02\x02\x02\u03AF\u03B3\x07(\x02\x02\u03B0\u03B2\x07" +
		"5\x02\x02\u03B1\u03B0\x03\x02\x02\x02\u03B2\u03B5\x03\x02\x02\x02\u03B3" +
		"\u03B1\x03\x02\x02\x02\u03B3\u03B4\x03\x02\x02\x02\u03B4\u03B6\x03\x02" +
		"\x02\x02\u03B5\u03B3\x03\x02\x02\x02\u03B6\u03B8\x05.\x18\x02\u03B7\u03AB" +
		"\x03\x02\x02\x02\u03B8\u03B9\x03\x02\x02\x02\u03B9\u03B7\x03\x02\x02\x02" +
		"\u03B9\u03BA\x03\x02\x02\x02\u03BA\u03BB\x03\x02\x02\x02\u03BB\u03BC\x07" +
		"5\x02\x02\u03BC)\x03\x02\x02\x02\u03BD\u03BF\x07\x1C\x02\x02\u03BE\u03C0" +
		"\x05\xDAn\x02\u03BF\u03BE\x03\x02\x02\x02\u03BF\u03C0\x03\x02\x02\x02" +
		"\u03C0\u03C1\x03\x02\x02\x02\u03C1\u03C2\x07\x1D\x02\x02\u03C2+\x03\x02" +
		"\x02\x02\u03C3\u03C7\x07\x1C\x02\x02\u03C4\u03C6\x05\xDAn\x02\u03C5\u03C4" +
		"\x03\x02\x02\x02\u03C6\u03C9\x03\x02\x02\x02\u03C7\u03C5\x03\x02\x02\x02" +
		"\u03C7\u03C8\x03\x02\x02\x02\u03C8\u03CA\x03\x02\x02\x02\u03C9\u03C7\x03" +
		"\x02\x02\x02\u03CA\u03CB\x07\x1D\x02\x02\u03CB-\x03\x02\x02\x02\u03CC" +
		"\u03D0\x07\x1C\x02\x02\u03CD\u03CF\x05\xDAn\x02\u03CE\u03CD\x03\x02\x02" +
		"\x02\u03CF\u03D2\x03\x02\x02\x02\u03D0\u03CE\x03\x02\x02\x02\u03D0\u03D1" +
		"\x03\x02\x02\x02\u03D1\u03D3\x03\x02\x02\x02\u03D2\u03D0\x03\x02\x02\x02" +
		"\u03D3\u03D4\x07\x1D\x02\x02\u03D4/\x03\x02\x02\x02\u03D5\u03D6\x07)\x02" +
		"\x02\u03D6\u03D8\x075\x02\x02\u03D7\u03D9\x052\x1A\x02\u03D8\u03D7\x03" +
		"\x02\x02\x02\u03D9\u03DA\x03\x02\x02\x02\u03DA\u03D8\x03\x02\x02\x02\u03DA" +
		"\u03DB\x03\x02\x02\x02\u03DB1\x03\x02\x02\x02\u03DC\u03DD\x054\x1B\x02" +
		"\u03DD\u03DE\x075\x02\x02\u03DE\u03DF\x07(\x02\x02\u03DF\u03E0\x075\x02" +
		"\x02\u03E0\u03E1\x03\x02\x02\x02\u03E1\u03E7\x05:\x1E\x02\u03E2\u03E3" +
		"\x05\xF4{\x02\u03E3\u03E4\x05:\x1E\x02\u03E4\u03E6\x03\x02\x02\x02\u03E5" +
		"\u03E2\x03\x02\x02\x02\u03E6\u03E9\x03\x02\x02\x02\u03E7\u03E5\x03\x02" +
		"\x02\x02\u03E7\u03E8\x03\x02\x02\x02\u03E8\u03ED\x03\x02\x02\x02\u03E9" +
		"\u03E7\x03\x02\x02\x02\u03EA\u03EC\x075\x02\x02\u03EB\u03EA\x03\x02\x02" +
		"\x02\u03EC\u03EF\x03\x02\x02\x02\u03ED\u03EB\x03\x02\x02\x02\u03ED\u03EE" +
		"\x03\x02\x02\x02\u03EE\u03F0\x03\x02\x02\x02\u03EF\u03ED\x03\x02\x02\x02" +
		"\u03F0\u03F4\x07)\x02\x02\u03F1\u03F3\x075\x02\x02\u03F2\u03F1\x03\x02" +
		"\x02\x02\u03F3\u03F6\x03\x02\x02\x02\u03F4\u03F2\x03\x02\x02\x02\u03F4" +
		"\u03F5\x03\x02\x02\x02\u03F5\u0427\x03\x02\x02\x02\u03F6\u03F4\x03\x02" +
		"\x02\x02\u03F7\u03F8\x054\x1B\x02\u03F8\u03F9\x075\x02\x02\u03F9\u03FD" +
		"\x07(\x02\x02\u03FA\u03FC\x075\x02\x02\u03FB\u03FA\x03\x02\x02\x02\u03FC" +
		"\u03FF\x03\x02\x02\x02\u03FD\u03FB\x03\x02\x02\x02\u03FD\u03FE\x03\x02" +
		"\x02\x02\u03FE\u0400\x03\x02\x02\x02\u03FF\u03FD\x03\x02\x02\x02\u0400" +
		"\u0404\x07)\x02\x02\u0401\u0403\x075\x02\x02\u0402\u0401\x03\x02\x02\x02" +
		"\u0403\u0406\x03\x02\x02\x02\u0404\u0402\x03\x02\x02\x02\u0404\u0405\x03" +
		"\x02\x02\x02\u0405\u0427\x03\x02\x02\x02\u0406\u0404\x03\x02\x02\x02\u0407" +
		"\u0409\x075\x02\x02\u0408\u0407\x03\x02\x02\x02\u0409\u040C\x03\x02\x02" +
		"\x02\u040A\u0408\x03\x02\x02\x02\u040A\u040B\x03\x02\x02\x02\u040B\u040D" +
		"\x03\x02\x02\x02\u040C\u040A\x03\x02\x02\x02\u040D\u0411\x07(\x02\x02" +
		"\u040E\u0410\x075\x02\x02\u040F\u040E\x03\x02\x02\x02\u0410\u0413\x03" +
		"\x02\x02\x02\u0411\u040F\x03\x02\x02\x02\u0411\u0412\x03\x02\x02\x02\u0412" +
		"\u0414\x03\x02\x02\x02\u0413\u0411\x03\x02\x02\x02\u0414\u0415\x075\x02" +
		"\x02\u0415\u0416\x07(\x02\x02\u0416\u0417\x075\x02\x02\u0417\u0418\x03" +
		"\x02\x02\x02\u0418\u041C\x05:\x1E\x02\u0419\u041B\x075\x02\x02\u041A\u0419" +
		"\x03\x02\x02\x02\u041B\u041E\x03\x02\x02\x02\u041C\u041A\x03\x02\x02\x02" +
		"\u041C\u041D\x03\x02\x02\x02\u041D\u041F\x03\x02\x02\x02\u041E\u041C\x03" +
		"\x02\x02\x02\u041F\u0423\x07)\x02\x02\u0420\u0422\x075\x02\x02\u0421\u0420" +
		"\x03\x02\x02\x02\u0422\u0425\x03\x02\x02\x02\u0423\u0421\x03\x02\x02\x02" +
		"\u0423\u0424\x03\x02\x02\x02\u0424\u0427\x03\x02\x02\x02\u0425\u0423\x03" +
		"\x02\x02\x02\u0426\u03DC\x03\x02\x02\x02\u0426\u03F7\x03\x02\x02\x02\u0426" +
		"\u040A\x03\x02\x02\x02\u04273\x03\x02\x02\x02\u0428\u042C\x056\x1C\x02" +
		"\u0429\u042B\x056\x1C\x02\u042A\u0429\x03\x02\x02\x02\u042B\u042E\x03" +
		"\x02\x02\x02\u042C\u042A\x03\x02\x02\x02\u042C\u042D\x03\x02\x02\x02\u042D" +
		"\u0431\x03\x02\x02\x02\u042E\u042C\x03\x02\x02\x02\u042F\u0431\x03\x02" +
		"\x02\x02\u0430\u0428\x03\x02\x02\x02\u0430\u042F\x03\x02\x02\x02\u0431" +
		"5\x03\x02\x02\x02\u0432\u0434\x075\x02\x02\u0433\u0432\x03\x02\x02\x02" +
		"\u0434\u0437\x03\x02\x02\x02\u0435\u0433\x03\x02\x02\x02\u0435\u0436\x03" +
		"\x02\x02\x02\u0436\u043B\x03\x02\x02\x02\u0437\u0435\x03\x02\x02\x02\u0438" +
		"\u043A\x07\x04\x02\x02\u0439\u0438\x03\x02\x02\x02\u043A\u043D\x03\x02" +
		"\x02\x02\u043B\u0439\x03\x02\x02\x02\u043B\u043C\x03\x02\x02\x02\u043C" +
		"\u0441\x03\x02\x02\x02\u043D\u043B\x03\x02\x02\x02\u043E\u0442\x05\xAA" +
		"V\x02\u043F\u0442\x05\xDAn\x02\u0440\u0442\x07\x1E\x02\x02\u0441\u043E" +
		"\x03\x02\x02\x02\u0441\u043F\x03\x02\x02\x02\u0441\u0440\x03\x02\x02\x02" +
		"\u0442\u0443\x03\x02\x02\x02\u0443\u0441\x03\x02\x02\x02\u0443\u0444\x03" +
		"\x02\x02\x02\u0444\u044C\x03\x02\x02\x02\u0445\u0447\x07\x04\x02\x02\u0446" +
		"\u0445\x03\x02\x02\x02\u0447\u044A\x03\x02\x02\x02\u0448\u0446\x03\x02" +
		"\x02\x02\u0448\u0449\x03\x02\x02\x02\u0449\u044B\x03\x02\x02\x02\u044A" +
		"\u0448\x03\x02\x02\x02\u044B\u044D\x05\xB0Y\x02\u044C\u0448\x03\x02\x02" +
		"\x02\u044C\u044D\x03\x02\x02\x02\u044D\u0451\x03\x02\x02\x02\u044E\u0452" +
		"\x05 \x11\x02\u044F\u0452\x05\"\x12\x02\u0450\u0452\x058\x1D\x02\u0451" +
		"\u044E\x03\x02\x02\x02\u0451\u044F\x03\x02\x02\x02\u0451\u0450\x03\x02" +
		"\x02\x02\u0451\u0452\x03\x02\x02\x02\u0452\u045B\x03\x02\x02\x02\u0453" +
		"\u0455\x075\x02\x02\u0454\u0453\x03\x02\x02\x02\u0455\u0458\x03\x02\x02" +
		"\x02\u0456\u0454\x03\x02\x02\x02\u0456\u0457\x03\x02\x02\x02\u0457\u0459" +
		"\x03\x02\x02\x02\u0458\u0456\x03\x02\x02\x02\u0459\u045B\x05\xBC_\x02" +
		"\u045A\u0435\x03\x02\x02\x02\u045A\u0456\x03\x02\x02\x02\u045B7\x03\x02" +
		"\x02\x02\u045C\u045D\x07+\x02\x02\u045D9\x03\x02\x02\x02\u045E\u0462\x05" +
		"<\x1F\x02\u045F\u0463\x05 \x11\x02\u0460\u0463\x05\"\x12\x02\u0461\u0463" +
		"\x05\xB0Y\x02\u0462\u045F\x03\x02\x02\x02\u0462\u0460\x03\x02\x02\x02" +
		"\u0462\u0461\x03\x02\x02\x02\u0462\u0463\x03\x02\x02\x02\u0463;\x03\x02" +
		"\x02\x02\u0464\u0466\x05\xB0Y\x02\u0465\u0464\x03\x02\x02\x02\u0465\u0466" +
		"\x03\x02\x02\x02\u0466\u0468\x03\x02\x02\x02\u0467\u0469\x05\xAAV\x02" +
		"\u0468\u0467\x03\x02\x02\x02\u0468\u0469\x03\x02\x02\x02\u0469\u0470\x03" +
		"\x02\x02\x02\u046A\u0471\x05\xDAn\x02\u046B\u0471\x075\x02\x02\u046C\u0471" +
		"\x07\x04\x02\x02\u046D\u0471\x07\x05\x02\x02\u046E\u0471\x07\x1D\x02\x02" +
		"\u046F\u0471\x07 \x02\x02\u0470\u046A\x03\x02\x02\x02\u0470\u046B\x03" +
		"\x02\x02\x02\u0470\u046C\x03\x02\x02\x02\u0470\u046D\x03\x02\x02\x02\u0470" +
		"\u046E\x03\x02\x02\x02\u0470\u046F\x03\x02\x02\x02\u0471\u0472\x03\x02" +
		"\x02\x02\u0472\u0470\x03\x02\x02\x02\u0472\u0473\x03\x02\x02\x02\u0473" +
		"\u047B\x03\x02\x02\x02\u0474\u0476\x07\x04\x02\x02\u0475\u0474\x03\x02" +
		"\x02\x02\u0476\u0479\x03\x02\x02\x02\u0477\u0475\x03\x02\x02\x02\u0477" +
		"\u0478\x03\x02\x02\x02\u0478\u047A\x03\x02\x02\x02\u0479\u0477\x03\x02" +
		"\x02\x02\u047A\u047C\x05\xB0Y\x02\u047B\u0477\x03\x02\x02\x02\u047B\u047C" +
		"\x03\x02\x02\x02\u047C\u04A8\x03\x02\x02\x02\u047D\u04A8\x03\x02\x02\x02" +
		"\u047E\u0480\x05\xB0Y\x02\u047F\u0481\x05\xDAn\x02\u0480\u047F\x03\x02" +
		"\x02\x02\u0480\u0481\x03\x02\x02\x02\u0481\u04A8\x03\x02\x02\x02\u0482" +
		"\u0484\x05\xDAn\x02\u0483\u0485\x075\x02\x02\u0484\u0483\x03\x02\x02\x02" +
		"\u0484\u0485\x03\x02\x02\x02\u0485\u048B\x03\x02\x02\x02\u0486\u048A\x05" +
		"\xB0Y\x02\u0487\u048A\x05\xBE`\x02\u0488\u048A\x05\xBC_\x02\u0489\u0486" +
		"\x03\x02\x02\x02\u0489\u0487\x03\x02\x02\x02\u0489\u0488\x03\x02\x02\x02" +
		"\u048A\u048D\x03\x02\x02\x02\u048B\u0489\x03\x02\x02\x02\u048B\u048C\x03" +
		"\x02\x02\x02\u048C\u04A8\x03\x02\x02\x02\u048D\u048B\x03\x02\x02\x02\u048E" +
		"\u048F\x05\xDAn\x02\u048F\u0490\x075\x02\x02\u0490\u0491\x05\xBC_\x02" +
		"\u0491\u04A8\x03\x02\x02\x02\u0492\u0494\x05\xBC_\x02\u0493\u0492\x03" +
		"\x02\x02\x02\u0493\u0494\x03\x02\x02\x02\u0494\u0495\x03\x02\x02\x02\u0495" +
		"\u049A\x05\xDEp\x02\u0496\u049B\x05\xDAn\x02\u0497\u049B\x075\x02\x02" +
		"\u0498\u049B\x07%\x02\x02\u0499\u049B\x07\x1E\x02\x02\u049A\u0496\x03" +
		"\x02\x02\x02\u049A\u0497\x03\x02\x02\x02\u049A\u0498\x03\x02\x02\x02\u049A" +
		"\u0499\x03\x02\x02\x02\u049B\u049C\x03\x02\x02\x02\u049C\u049A\x03\x02" +
		"\x02\x02\u049C\u049D\x03\x02\x02\x02\u049D\u049E\x03\x02\x02\x02\u049E" +
		"\u04A0\x07\x1D\x02\x02\u049F\u04A1\x05\xB0Y\x02\u04A0\u049F\x03\x02\x02" +
		"\x02\u04A0\u04A1\x03\x02\x02\x02\u04A1\u04A8\x03\x02\x02\x02\u04A2\u04A3" +
		"\x05\xBC_\x02\u04A3\u04A5\x05\xDAn\x02\u04A4\u04A6\x05\xB0Y\x02\u04A5" +
		"\u04A4\x03\x02\x02\x02\u04A5\u04A6\x03\x02\x02\x02\u04A6\u04A8\x03\x02" +
		"\x02\x02\u04A7\u0465\x03\x02\x02\x02\u04A7\u047D\x03\x02\x02\x02\u04A7" +
		"\u047E\x03\x02\x02\x02\u04A7\u0482\x03\x02\x02\x02\u04A7\u048E\x03\x02" +
		"\x02\x02\u04A7\u0493\x03\x02\x02\x02\u04A7\u04A2\x03\x02\x02\x02\u04A8" +
		"=\x03\x02\x02\x02\u04A9\u04AA\x07)\x02\x02\u04AA\u04AC\x075\x02\x02\u04AB" +
		"\u04AD\x05@!\x02\u04AC\u04AB\x03\x02\x02\x02\u04AD\u04AE\x03\x02\x02\x02" +
		"\u04AE\u04AC\x03\x02\x02\x02\u04AE\u04AF\x03\x02\x02\x02\u04AF?\x03\x02" +
		"\x02\x02\u04B0\u04B1\x05V,\x02\u04B1\u04B2\x075\x02\x02\u04B2\u04B3\x07" +
		"(\x02\x02\u04B3\u04B4\x075\x02\x02\u04B4\u04B5\x03\x02\x02\x02\u04B5\u04B9" +
		"\x05:\x1E\x02\u04B6\u04B8\x075\x02\x02\u04B7\u04B6\x03\x02\x02\x02\u04B8" +
		"\u04BB\x03\x02\x02\x02\u04B9\u04B7\x03\x02\x02\x02\u04B9\u04BA\x03\x02" +
		"\x02\x02\u04BA\u04BC\x03\x02\x02\x02\u04BB\u04B9\x03\x02\x02\x02\u04BC" +
		"\u04C0\x07)\x02\x02\u04BD\u04BF\x075\x02\x02\u04BE\u04BD\x03\x02\x02\x02" +
		"\u04BF\u04C2\x03\x02\x02\x02\u04C0\u04BE\x03\x02\x02\x02\u04C0\u04C1\x03" +
		"\x02\x02\x02\u04C1A\x03\x02\x02\x02\u04C2\u04C0\x03\x02\x02\x02\u04C3" +
		"\u04C4\x07)\x02\x02\u04C4\u04C6\x075\x02\x02\u04C5\u04C7\x05D#\x02\u04C6" +
		"\u04C5\x03\x02\x02\x02\u04C7\u04C8\x03\x02\x02\x02\u04C8\u04C6\x03\x02" +
		"\x02\x02\u04C8\u04C9\x03\x02\x02\x02\u04C9C\x03\x02\x02\x02\u04CA\u04CB" +
		"\x05Z.\x02\u04CB\u04CC\x075\x02\x02\u04CC\u04CD\x07(\x02\x02\u04CD\u04CE" +
		"\x075\x02\x02\u04CE\u04CF\x03\x02\x02\x02\u04CF\u04D3\x05:\x1E\x02\u04D0" +
		"\u04D2\x075\x02\x02\u04D1\u04D0\x03\x02\x02\x02\u04D2\u04D5\x03\x02\x02" +
		"\x02\u04D3\u04D1\x03\x02\x02\x02\u04D3\u04D4\x03\x02\x02\x02\u04D4\u04D6" +
		"\x03\x02\x02\x02\u04D5\u04D3\x03\x02\x02\x02\u04D6\u04DA\x07)\x02\x02" +
		"\u04D7\u04D9\x075\x02\x02\u04D8\u04D7\x03\x02\x02\x02\u04D9\u04DC\x03" +
		"\x02\x02\x02\u04DA\u04D8\x03\x02\x02\x02\u04DA\u04DB\x03\x02\x02\x02\u04DB" +
		"E\x03\x02\x02\x02\u04DC\u04DA\x03\x02\x02\x02\u04DD\u04DE\x07)\x02\x02" +
		"\u04DE\u04E0\x075\x02\x02\u04DF\u04E1\x05H%\x02\u04E0\u04DF\x03\x02\x02" +
		"\x02\u04E1\u04E2\x03\x02\x02\x02\u04E2\u04E0\x03\x02\x02\x02\u04E2\u04E3" +
		"\x03\x02\x02\x02\u04E3G\x03\x02\x02\x02\u04E4\u04EA\x05N(\x02\u04E5\u04E6" +
		"\x075\x02\x02\u04E6\u04E7\x07(\x02\x02\u04E7\u04E8\x075\x02\x02\u04E8" +
		"\u04E9\x03\x02\x02\x02\u04E9\u04EB\x05R*\x02\u04EA\u04E5\x03\x02\x02\x02" +
		"\u04EB\u04EC\x03\x02\x02\x02\u04EC\u04EA\x03\x02\x02\x02\u04EC\u04ED\x03" +
		"\x02\x02\x02\u04ED\u04F1\x03\x02\x02\x02\u04EE\u04F0\x075\x02\x02\u04EF" +
		"\u04EE\x03\x02\x02\x02\u04F0\u04F3\x03\x02\x02\x02\u04F1\u04EF\x03\x02" +
		"\x02\x02\u04F1\u04F2\x03\x02\x02\x02\u04F2\u04F4\x03\x02\x02\x02\u04F3" +
		"\u04F1\x03\x02\x02\x02\u04F4\u04F8\x07)\x02\x02\u04F5\u04F7\x075\x02\x02" +
		"\u04F6\u04F5\x03\x02\x02\x02\u04F7\u04FA\x03\x02\x02\x02\u04F8\u04F6\x03" +
		"\x02\x02\x02\u04F8\u04F9\x03\x02\x02\x02\u04F9I\x03\x02\x02\x02\u04FA" +
		"\u04F8\x03\x02\x02\x02\u04FB\u04FC\x07)\x02\x02\u04FC\u04FD\x05\x92J\x02" +
		"\u04FD\u04FE\x07(\x02\x02\u04FE\u0503\x05R*\x02\u04FF\u0500\x07(\x02\x02" +
		"\u0500\u0502\x05R*\x02\u0501\u04FF\x03\x02\x02\x02\u0502\u0505\x03\x02" +
		"\x02\x02\u0503\u0501\x03\x02\x02\x02\u0503\u0504\x03\x02\x02\x02\u0504" +
		"K\x03\x02\x02\x02\u0505\u0503\x03\x02\x02\x02\u0506\u0507\x07)\x02\x02" +
		"\u0507\u0508\x05\x9CO\x02\u0508\u0509\x07(\x02\x02\u0509\u050E\x05R*\x02" +
		"\u050A\u050B\x07(\x02\x02\u050B\u050D\x05R*\x02\u050C\u050A\x03\x02\x02" +
		"\x02\u050D\u0510\x03\x02\x02\x02\u050E\u050C\x03\x02\x02\x02\u050E\u050F" +
		"\x03\x02\x02\x02\u050F\u0512\x03\x02\x02\x02\u0510\u050E\x03\x02\x02\x02" +
		"\u0511\u0506\x03\x02\x02\x02\u0512\u0513\x03\x02\x02\x02\u0513\u0511\x03" +
		"\x02\x02\x02\u0513\u0514\x03\x02\x02\x02\u0514M\x03\x02\x02\x02\u0515" +
		"\u051A\x05P)\x02\u0516\u0517\x075\x02\x02\u0517\u0519\x05P)\x02\u0518" +
		"\u0516\x03\x02\x02\x02\u0519\u051C\x03\x02\x02\x02\u051A\u0518\x03\x02" +
		"\x02\x02\u051A\u051B\x03\x02\x02\x02\u051BO\x03\x02\x02\x02\u051C\u051A" +
		"\x03\x02\x02\x02\u051D\u051F\x075\x02\x02\u051E\u051D\x03\x02\x02\x02" +
		"\u051F\u0522\x03\x02\x02\x02\u0520\u051E\x03\x02\x02\x02\u0520\u0521\x03" +
		"\x02\x02\x02\u0521\u0526\x03\x02\x02\x02\u0522\u0520\x03\x02\x02\x02\u0523" +
		"\u0527\x05\xAAV\x02\u0524\u0527\x05\xDAn\x02\u0525\u0527\x07\x1E\x02\x02" +
		"\u0526\u0523\x03\x02\x02\x02\u0526\u0524\x03\x02\x02\x02\u0526\u0525\x03" +
		"\x02\x02\x02\u0527\u0528\x03\x02\x02\x02\u0528\u0526\x03\x02\x02\x02\u0528" +
		"\u0529\x03\x02\x02\x02\u0529\u052B\x03\x02\x02\x02\u052A\u052C\x05\xB0" +
		"Y\x02\u052B\u052A\x03\x02\x02\x02\u052B\u052C\x03\x02\x02\x02\u052C\u0535" +
		"\x03\x02\x02\x02\u052D\u052F\x075\x02\x02\u052E\u052D\x03\x02\x02\x02" +
		"\u052F\u0532\x03\x02\x02\x02\u0530\u052E\x03\x02\x02\x02\u0530\u0531\x03" +
		"\x02\x02\x02\u0531\u0533\x03\x02\x02\x02\u0532\u0530\x03\x02\x02\x02\u0533" +
		"\u0535\x07\xA0\x02\x02\u0534\u0520\x03\x02\x02\x02\u0534\u0530\x03\x02" +
		"\x02\x02\u0535Q\x03\x02\x02\x02\u0536\u0539\x05T+\x02\u0537\u053A\x05" +
		" \x11\x02\u0538\u053A\x05\"\x12\x02\u0539\u0537\x03\x02\x02\x02\u0539" +
		"\u0538\x03\x02\x02\x02\u0539\u053A\x03\x02\x02\x02\u053A\u0546\x03\x02" +
		"\x02\x02\u053B\u053E\x05\xF4{\x02\u053C\u053E\x075\x02\x02\u053D\u053B" +
		"\x03\x02\x02\x02\u053D\u053C\x03\x02\x02\x02\u053E\u053F\x03\x02\x02\x02" +
		"\u053F\u0542\x05T+\x02\u0540\u0543\x05 \x11\x02\u0541\u0543\x05\"\x12" +
		"\x02\u0542\u0540\x03\x02\x02\x02\u0542\u0541\x03\x02\x02\x02\u0542\u0543" +
		"\x03\x02\x02\x02\u0543\u0545\x03\x02\x02\x02\u0544\u053D\x03\x02\x02\x02" +
		"\u0545\u0548\x03\x02\x02\x02\u0546\u0544\x03\x02\x02\x02\u0546\u0547\x03" +
		"\x02\x02\x02\u0547S\x03\x02\x02\x02\u0548\u0546\x03\x02\x02\x02\u0549" +
		"\u054B\x05\xB0Y\x02\u054A\u0549\x03\x02\x02\x02\u054A\u054B\x03\x02\x02" +
		"\x02\u054B\u054D\x03\x02\x02\x02\u054C\u054E\x05\xAAV\x02\u054D\u054C" +
		"\x03\x02\x02\x02\u054D\u054E\x03\x02\x02\x02\u054E\u0555\x03\x02\x02\x02" +
		"\u054F\u0556\x05\xDAn\x02\u0550\u0556\x075\x02\x02\u0551\u0556\x07\x04" +
		"\x02\x02\u0552\u0556\x07\x05\x02\x02\u0553\u0556\x07\x1D\x02\x02\u0554" +
		"\u0556\x07 \x02\x02\u0555\u054F\x03\x02\x02\x02\u0555\u0550\x03\x02\x02" +
		"\x02\u0555\u0551\x03\x02\x02\x02\u0555\u0552\x03\x02\x02\x02\u0555\u0553" +
		"\x03\x02\x02\x02\u0555\u0554\x03\x02\x02\x02\u0556\u0557\x03\x02\x02\x02" +
		"\u0557\u0555\x03\x02\x02\x02\u0557\u0558\x03\x02\x02\x02\u0558\u0560\x03" +
		"\x02\x02\x02\u0559\u055B\x07\x04\x02\x02\u055A\u0559\x03\x02\x02\x02\u055B" +
		"\u055E\x03\x02\x02\x02\u055C\u055A\x03\x02\x02\x02\u055C\u055D\x03\x02" +
		"\x02\x02\u055D\u055F\x03\x02\x02\x02\u055E\u055C\x03\x02\x02\x02\u055F" +
		"\u0561\x05\xB0Y\x02\u0560\u055C\x03\x02\x02\x02\u0560\u0561\x03\x02\x02" +
		"\x02\u0561\u058D\x03\x02\x02\x02\u0562\u0564\x05\xBC_\x02\u0563\u0562" +
		"\x03\x02\x02\x02\u0563\u0564\x03\x02\x02\x02\u0564\u0565\x03\x02\x02\x02" +
		"\u0565\u056A\x05\xDEp\x02\u0566\u056B\x05\xDAn\x02\u0567\u056B\x075\x02" +
		"\x02\u0568\u056B\x07%\x02\x02\u0569\u056B\x07\x1E\x02\x02\u056A\u0566" +
		"\x03\x02\x02\x02\u056A\u0567\x03\x02\x02\x02\u056A\u0568\x03\x02\x02\x02" +
		"\u056A\u0569\x03\x02\x02\x02\u056B\u056C\x03\x02\x02\x02\u056C\u056A\x03" +
		"\x02\x02\x02\u056C\u056D\x03\x02\x02\x02\u056D\u056E\x03\x02\x02\x02\u056E" +
		"\u0570\x07\x1D\x02\x02\u056F\u0571\x05\xB0Y\x02\u0570\u056F\x03\x02\x02" +
		"\x02\u0570\u0571\x03\x02\x02\x02\u0571\u058D\x03\x02\x02\x02\u0572\u0573" +
		"\x05\xBC_\x02\u0573\u0575\x05\xDAn\x02\u0574\u0576\x05\xB0Y\x02\u0575" +
		"\u0574\x03\x02\x02\x02\u0575\u0576\x03\x02\x02\x02\u0576\u058D\x03\x02" +
		"\x02\x02\u0577\u058D\x03\x02\x02\x02\u0578\u057A\x05\xB0Y\x02\u0579\u057B" +
		"\x05\xDAn\x02\u057A\u0579\x03\x02\x02\x02\u057A\u057B\x03\x02\x02\x02" +
		"\u057B\u058D\x03\x02\x02\x02\u057C\u057E\x05\xDAn\x02\u057D\u057F\x07" +
		"5\x02\x02\u057E\u057D\x03\x02\x02\x02\u057E\u057F\x03\x02\x02\x02\u057F" +
		"\u0585\x03\x02\x02\x02\u0580\u0584\x05\xB0Y\x02\u0581\u0584\x05\xBE`\x02" +
		"\u0582\u0584\x05\xBC_\x02\u0583\u0580\x03\x02\x02\x02\u0583\u0581\x03" +
		"\x02\x02\x02\u0583\u0582\x03\x02\x02\x02\u0584\u0587\x03\x02\x02\x02\u0585" +
		"\u0583\x03\x02\x02\x02\u0585\u0586\x03\x02\x02\x02\u0586\u058D\x03\x02" +
		"\x02\x02\u0587\u0585\x03\x02\x02\x02\u0588\u0589\x05\xDAn\x02\u0589\u058A" +
		"\x075\x02\x02\u058A\u058B\x05\xBC_\x02\u058B\u058D\x03\x02\x02\x02\u058C" +
		"\u054A\x03\x02\x02\x02\u058C\u0563\x03\x02\x02\x02\u058C\u0572\x03\x02" +
		"\x02\x02\u058C\u0577\x03\x02\x02\x02\u058C\u0578\x03\x02\x02\x02\u058C" +
		"\u057C\x03\x02\x02\x02\u058C\u0588\x03\x02\x02\x02\u058DU\x03\x02\x02" +
		"\x02\u058E\u0592\x05X-\x02\u058F\u0591\x05\x9AN\x02\u0590\u058F\x03\x02" +
		"\x02\x02\u0591\u0594\x03\x02\x02\x02\u0592\u0590\x03\x02\x02\x02\u0592" +
		"\u0593\x03\x02\x02\x02\u0593\u0599\x03\x02\x02\x02\u0594\u0592\x03\x02" +
		"\x02\x02\u0595\u0596\x07M\x02\x02\u0596\u0597\x05\xF6|\x02\u0597\u0598" +
		"\x07\x1D\x02\x02\u0598\u059A\x03\x02\x02\x02\u0599\u0595\x03\x02\x02\x02" +
		"\u0599\u059A\x03\x02\x02\x02\u059A\u05A3\x03\x02\x02\x02\u059B\u059F\x07" +
		"P\x02\x02\u059C\u059E\v\x02\x02\x02\u059D\u059C\x03\x02\x02\x02\u059E" +
		"\u05A1\x03\x02\x02\x02\u059F\u05A0\x03\x02\x02\x02\u059F\u059D\x03\x02" +
		"\x02\x02\u05A0\u05A2\x03\x02\x02\x02\u05A1\u059F\x03\x02\x02\x02\u05A2" +
		"\u05A4\x07\x1D\x02\x02\u05A3\u059B\x03\x02\x02\x02\u05A3\u05A4\x03\x02" +
		"\x02\x02\u05A4W\x03\x02\x02\x02\u05A5\u05A6\x05\x94K\x02\u05A6Y\x03\x02" +
		"\x02\x02\u05A7\u05A8\x05\xA2R\x02\u05A8\u05A9\x07\x1E\x02\x02\u05A9\u05AA" +
		"\x05\xA8U\x02\u05AA\u05AF\x07\x1D\x02\x02\u05AB\u05AC\x07M\x02\x02\u05AC" +
		"\u05AD\x05\xF6|\x02\u05AD\u05AE\x07\x1D\x02\x02\u05AE\u05B0\x03\x02\x02" +
		"\x02\u05AF\u05AB\x03\x02\x02\x02\u05AF\u05B0\x03\x02\x02\x02\u05B0[\x03" +
		"\x02\x02\x02\u05B1\u05B2\x07\x0F\x02\x02\u05B2\u05B3\x05\xDAn\x02\u05B3" +
		"\u05B5\x07\x1D\x02\x02\u05B4\u05B6\x05^0\x02\u05B5\u05B4\x03\x02\x02\x02" +
		"\u05B5\u05B6\x03\x02\x02\x02\u05B6]\x03\x02\x02\x02\u05B7\u05B8\x07J\x02" +
		"\x02\u05B8\u05B9\x073\x02\x02\u05B9\u05BA\x07\x1D\x02\x02\u05BA_\x03\x02" +
		"\x02\x02\u05BB\u05BD\x05b2\x02\u05BC\u05BB\x03\x02\x02\x02\u05BD\u05C0" +
		"\x03\x02\x02\x02\u05BE\u05BC";
	private static readonly _serializedATNSegment3: string =
		"\x03\x02\x02\x02\u05BE\u05BF\x03\x02\x02\x02\u05BF\u05C6\x03\x02\x02\x02" +
		"\u05C0\u05BE\x03\x02\x02\x02\u05C1\u05C5\x07\x8C\x02\x02\u05C2\u05C5\x07" +
		"\x8D\x02\x02\u05C3\u05C5\x05d3\x02\u05C4\u05C1\x03\x02\x02\x02\u05C4\u05C2" +
		"\x03\x02\x02\x02\u05C4\u05C3\x03\x02\x02\x02\u05C5\u05C8\x03\x02\x02\x02" +
		"\u05C6\u05C4\x03\x02\x02\x02\u05C6\u05C7\x03\x02\x02\x02\u05C7a\x03\x02" +
		"\x02\x02\u05C8\u05C6\x03\x02\x02\x02\u05C9\u05CA\t\x02\x02\x02\u05CAc" +
		"\x03\x02\x02\x02\u05CB\u05D5\x05h5\x02\u05CC\u05D5\x05\xA0Q\x02\u05CD" +
		"\u05D5\x05j6\x02\u05CE\u05D5\x05l7\x02\u05CF\u05D5\x05n8\x02\u05D0\u05D5" +
		"\x05p9\x02\u05D1\u05D5\x05r:\x02\u05D2\u05D5\x05t;\x02\u05D3\u05D5\x07" +
		"b\x02\x02\u05D4\u05CB\x03\x02\x02\x02\u05D4\u05CC\x03\x02\x02\x02\u05D4" +
		"\u05CD\x03\x02\x02\x02\u05D4\u05CE\x03\x02\x02\x02\u05D4\u05CF\x03\x02" +
		"\x02\x02\u05D4\u05D0\x03\x02\x02\x02\u05D4\u05D1\x03\x02\x02\x02\u05D4" +
		"\u05D2\x03\x02\x02\x02\u05D4\u05D3\x03\x02\x02\x02\u05D5e\x03\x02\x02" +
		"\x02\u05D6\u05DD\x07\x8A\x02\x02\u05D7\u05DD\x07\x8B\x02\x02\u05D8\u05DD" +
		"\x07\x8C\x02\x02\u05D9\u05DD\x07\x8F\x02\x02\u05DA\u05DD\x07\x8D\x02\x02" +
		"\u05DB\u05DD\x03\x02\x02\x02\u05DC\u05D6\x03\x02\x02\x02\u05DC\u05D7\x03" +
		"\x02\x02\x02\u05DC\u05D8\x03\x02\x02\x02\u05DC\u05D9\x03\x02\x02\x02\u05DC" +
		"\u05DA\x03\x02\x02\x02\u05DC\u05DB\x03\x02\x02\x02\u05DDg\x03\x02\x02" +
		"\x02\u05DE\u05E1\x07Z\x02\x02\u05DF\u05E2\x07.\x02\x02\u05E0\u05E2\x07" +
		"\x9D\x02\x02\u05E1\u05DF\x03\x02\x02\x02\u05E1\u05E0\x03\x02\x02\x02\u05E1" +
		"\u05E2\x03\x02\x02\x02\u05E2\u05EC\x03\x02\x02\x02\u05E3\u05E5\x07o\x02" +
		"\x02\u05E4\u05E6\x07.\x02\x02\u05E5\u05E4\x03\x02\x02\x02\u05E5\u05E6" +
		"\x03\x02\x02\x02\u05E6\u05EC\x03\x02\x02\x02\u05E7\u05E9\x07[\x02\x02" +
		"\u05E8\u05EA\x07.\x02\x02\u05E9\u05E8\x03\x02\x02\x02\u05E9\u05EA\x03" +
		"\x02\x02\x02\u05EA\u05EC\x03\x02\x02\x02\u05EB\u05DE\x03\x02\x02\x02\u05EB" +
		"\u05E3\x03\x02\x02\x02\u05EB\u05E7\x03\x02\x02\x02\u05ECi\x03\x02\x02" +
		"\x02\u05ED\u05F0\t\x03\x02\x02\u05EE\u05EF\x07\x1E\x02\x02\u05EF\u05F1" +
		"\x070\x02\x02\u05F0\u05EE\x03\x02\x02\x02\u05F0\u05F1\x03\x02\x02\x02" +
		"\u05F1k\x03\x02\x02\x02\u05F2\u05F3\t\x04\x02\x02\u05F3m\x03\x02\x02\x02" +
		"\u05F4\u05F5\t\x05\x02\x02\u05F5o\x03\x02\x02\x02\u05F6\u05F7\t\x06\x02" +
		"\x02\u05F7q\x03\x02\x02\x02\u05F8\u05F9\t\x07\x02\x02\u05F9s\x03\x02\x02" +
		"\x02\u05FA\u05FB\t\b\x02\x02\u05FBu\x03\x02\x02\x02\u05FC\u05FD\t\t\x02" +
		"\x02\u05FDw\x03\x02\x02\x02\u05FE\u05FF\t\n\x02\x02\u05FFy\x03\x02\x02" +
		"\x02\u0600\u0601\t\v\x02\x02\u0601{\x03\x02\x02\x02\u0602\u0603\t\f\x02" +
		"\x02\u0603}\x03\x02\x02\x02\u0604\u0607\x07f\x02\x02\u0605\u0606\x07\x1E" +
		"\x02\x02\u0606\u0608\x070\x02\x02\u0607\u0605\x03\x02\x02\x02\u0607\u0608" +
		"\x03\x02\x02\x02\u0608\u0614\x03\x02\x02\x02\u0609\u060C\x07y\x02\x02" +
		"\u060A\u060B\x07\x1E\x02\x02\u060B\u060D\x070\x02\x02\u060C\u060A\x03" +
		"\x02\x02\x02\u060C\u060D\x03\x02\x02\x02\u060D\u0614\x03\x02\x02\x02\u060E" +
		"\u0611\x07\x86\x02\x02\u060F\u0610\x07\x1E\x02\x02\u0610\u0612\x070\x02" +
		"\x02\u0611\u060F\x03\x02\x02\x02\u0611\u0612\x03\x02\x02\x02\u0612\u0614" +
		"\x03\x02\x02\x02\u0613\u0604\x03\x02\x02\x02\u0613\u0609\x03\x02\x02\x02" +
		"\u0613\u060E\x03\x02\x02\x02\u0614\x7F\x03\x02\x02\x02\u0615\u0616\t\r" +
		"\x02\x02\u0616\x81\x03\x02\x02\x02\u0617\u0618\x05v<\x02\u0618\u0619\x07" +
		"\x1E\x02\x02\u0619\u061A\x05\xA8U\x02\u061A\u061B\x07\x1D\x02\x02\u061B" +
		"\u061E\x03\x02\x02\x02\u061C\u061E\x071\x02\x02\u061D\u0617\x03\x02\x02" +
		"\x02\u061D\u061C\x03\x02\x02\x02\u061E\x83\x03\x02\x02\x02\u061F\u0620" +
		"\x05x=\x02\u0620\u0621\x07\x1E\x02\x02\u0621\u0622\x05\xA8U\x02\u0622" +
		"\u0627\x07\x1D\x02\x02\u0623\u0624\x07M\x02\x02\u0624\u0625\x05\xF6|\x02" +
		"\u0625\u0626\x07\x1D\x02\x02\u0626\u0628\x03\x02\x02\x02\u0627\u0623\x03" +
		"\x02\x02\x02\u0627\u0628\x03\x02\x02\x02\u0628\x85\x03\x02\x02\x02\u0629" +
		"\u062A\x05|?\x02\u062A\u062B\x07\x1E\x02\x02\u062B\u062C\x05\xA8U\x02" +
		"\u062C\u0631\x07\x1D\x02\x02\u062D\u062E\x07M\x02\x02\u062E\u062F\x05" +
		"\xF6|\x02\u062F\u0630\x07\x1D\x02\x02\u0630\u0632\x03\x02\x02\x02\u0631" +
		"\u062D\x03\x02\x02\x02\u0631\u0632\x03\x02\x02\x02\u0632\x87\x03\x02\x02" +
		"\x02\u0633\u0634\x05z>\x02\u0634\u0637\x07\x1E\x02\x02\u0635\u0638\x05" +
		"\xA8U\x02\u0636\u0638\x05\xA6T\x02\u0637\u0635\x03\x02\x02\x02\u0637\u0636" +
		"\x03\x02\x02\x02\u0638\u0639\x03\x02\x02\x02\u0639\u063E\x07\x1D\x02\x02" +
		"\u063A\u063B\x07M\x02\x02\u063B\u063C\x05\xF6|\x02\u063C\u063D\x07\x1D" +
		"\x02\x02\u063D\u063F\x03\x02\x02\x02\u063E\u063A\x03\x02\x02\x02\u063E" +
		"\u063F\x03\x02\x02\x02\u063F\x89\x03\x02\x02\x02\u0640\u0644\x05\x8CG" +
		"\x02\u0641\u0643\x05\xA4S\x02\u0642\u0641\x03\x02\x02\x02\u0643\u0646" +
		"\x03\x02\x02\x02\u0644\u0642\x03\x02\x02\x02\u0644\u0645\x03\x02\x02\x02" +
		"\u0645\x8B\x03\x02\x02\x02\u0646\u0644\x03\x02\x02\x02\u0647\u0648\x05" +
		"\x80A\x02\u0648\u064C\x07\x1E\x02\x02\u0649\u064B\x07\x04\x02\x02\u064A" +
		"\u0649\x03\x02\x02\x02\u064B\u064E\x03\x02\x02\x02\u064C\u064A\x03\x02" +
		"\x02\x02\u064C\u064D\x03\x02\x02\x02\u064D\u064F\x03\x02\x02\x02\u064E" +
		"\u064C\x03\x02\x02\x02\u064F\u0650\x05\xA8U\x02\u0650\u0651\x07\x1D\x02" +
		"\x02\u0651\x8D\x03\x02\x02\x02\u0652\u0656\x05\x90I\x02\u0653\u0655\x05" +
		"\xA4S\x02\u0654\u0653\x03\x02\x02\x02\u0655\u0658\x03\x02\x02\x02\u0656" +
		"\u0654\x03\x02\x02\x02\u0656\u0657\x03\x02\x02\x02\u0657\x8F\x03\x02\x02" +
		"\x02\u0658\u0656\x03\x02\x02\x02\u0659\u065A\x05~@\x02\u065A\u065B\x07" +
		"\x1E\x02\x02\u065B\u065C\x05\xA8U\x02\u065C\u0661\x07\x1D\x02\x02\u065D" +
		"\u065E\x07M\x02\x02\u065E\u065F\x05\xF6|\x02\u065F\u0660\x07\x1D\x02\x02" +
		"\u0660\u0662\x03\x02\x02\x02\u0661\u065D\x03\x02\x02\x02\u0661\u0662\x03" +
		"\x02\x02\x02\u0662\x91\x03\x02\x02\x02\u0663\u0667\x05\x94K\x02\u0664" +
		"\u0666\x05\x98M\x02\u0665\u0664\x03\x02\x02\x02\u0666\u0669\x03\x02\x02" +
		"\x02\u0667\u0665\x03\x02\x02\x02\u0667\u0668\x03\x02\x02\x02\u0668\u066C" +
		"\x03\x02\x02\x02\u0669\u0667\x03\x02\x02\x02\u066A\u066B\x075\x02\x02" +
		"\u066B\u066D\x07O\x02\x02\u066C\u066A\x03\x02\x02\x02\u066C\u066D\x03" +
		"\x02\x02\x02\u066D\x93\x03\x02\x02\x02\u066E\u066F\x05\x96L\x02\u066F" +
		"\u0673\x07\x1E\x02\x02\u0670\u0672\x07\x04\x02\x02\u0671\u0670\x03\x02" +
		"\x02\x02\u0672\u0675\x03\x02\x02\x02\u0673\u0671\x03\x02\x02\x02\u0673" +
		"\u0674\x03\x02\x02\x02\u0674\u0676\x03\x02\x02\x02\u0675\u0673\x03\x02" +
		"\x02\x02\u0676\u0677\x05\xA8U\x02\u0677\u0678\x07\x1D\x02\x02\u0678\x95" +
		"\x03\x02\x02\x02\u0679\u067C\x07d\x02\x02\u067A\u067D\x07.\x02\x02\u067B" +
		"\u067D\x07\x9D\x02\x02\u067C\u067A\x03\x02\x02\x02\u067C\u067B\x03\x02" +
		"\x02\x02\u067C\u067D\x03\x02\x02\x02\u067D\u0688\x03\x02\x02\x02\u067E" +
		"\u0680\x07x\x02\x02\u067F\u0681\x07.\x02\x02\u0680\u067F\x03\x02\x02\x02" +
		"\u0680\u0681\x03\x02\x02\x02\u0681\u0688\x03\x02\x02\x02\u0682\u0684\x07" +
		"e\x02\x02\u0683\u0685\x07.\x02\x02\u0684\u0683\x03\x02\x02\x02\u0684\u0685" +
		"\x03\x02\x02\x02\u0685\u0688\x03\x02\x02\x02\u0686\u0688\x07\xA2\x02\x02" +
		"\u0687\u0679\x03\x02\x02\x02\u0687\u067E\x03\x02\x02\x02\u0687\u0682\x03" +
		"\x02\x02\x02\u0687\u0686\x03\x02\x02\x02\u0688\x97\x03\x02\x02\x02\u0689" +
		"\u068A\x07K\x02\x02\u068A\u068B\x07\x1E\x02\x02\u068B\u068C\x05\xA8U\x02" +
		"\u068C\u068D\x07\x1D\x02\x02\u068D\u069B\x03\x02\x02\x02\u068E\u068F\t" +
		"\x0E\x02\x02\u068F\u0690\x07\x1E\x02\x02\u0690\u0691\x073\x02\x02\u0691" +
		"\u069B\x07\x1D\x02\x02\u0692\u0696\t\x0F\x02\x02\u0693\u0695\v\x02\x02" +
		"\x02\u0694\u0693\x03\x02\x02\x02\u0695\u0698\x03\x02\x02\x02\u0696\u0697" +
		"\x03\x02\x02\x02\u0696\u0694\x03\x02\x02\x02\u0697\u0699\x03\x02\x02\x02" +
		"\u0698\u0696\x03\x02\x02\x02\u0699\u069B\x07\x1D\x02\x02\u069A\u0689\x03" +
		"\x02\x02\x02\u069A\u068E\x03\x02\x02\x02\u069A\u0692\x03\x02\x02\x02\u069B" +
		"\x99\x03\x02\x02\x02\u069C\u069D\x07K\x02\x02\u069D\u069E\x07\x1E\x02" +
		"\x02\u069E\u069F\x05\xA8U\x02\u069F\u06A0\x07\x1D\x02\x02\u06A0\u06AE" +
		"\x03\x02\x02\x02\u06A1\u06A2\t\x0E\x02\x02\u06A2\u06A3\x07\x1E\x02\x02" +
		"\u06A3\u06A4\x073\x02\x02\u06A4\u06AE\x07\x1D\x02\x02\u06A5\u06A9\t\x0F" +
		"\x02\x02\u06A6\u06A8\v\x02\x02\x02\u06A7\u06A6\x03\x02\x02\x02\u06A8\u06AB" +
		"\x03\x02\x02\x02\u06A9\u06AA\x03\x02\x02\x02\u06A9\u06A7\x03\x02\x02\x02" +
		"\u06AA\u06AC\x03\x02\x02\x02\u06AB\u06A9\x03\x02\x02\x02\u06AC\u06AE\x07" +
		"\x1D\x02\x02\u06AD\u069C\x03\x02\x02\x02\u06AD\u06A1\x03\x02\x02\x02\u06AD" +
		"\u06A5\x03\x02\x02\x02\u06AE\x9B\x03\x02\x02\x02\u06AF\u06B3\x05\x9EP" +
		"\x02\u06B0\u06B2\x05\xA4S\x02\u06B1\u06B0\x03\x02\x02\x02\u06B2\u06B5" +
		"\x03\x02\x02\x02\u06B3\u06B1\x03\x02\x02\x02\u06B3\u06B4\x03\x02\x02\x02" +
		"\u06B4\x9D\x03\x02\x02\x02\u06B5\u06B3\x03\x02\x02\x02\u06B6\u06B7\x05" +
		"\xA2R\x02\u06B7\u06B8\x07\x1E\x02\x02\u06B8\u06B9\x05\xA8U\x02\u06B9\u06BE" +
		"\x07\x1D\x02\x02\u06BA\u06BB\x07M\x02\x02\u06BB\u06BC\x05\xF6|\x02\u06BC" +
		"\u06BD\x07\x1D\x02\x02\u06BD\u06BF\x03\x02\x02\x02\u06BE\u06BA\x03\x02" +
		"\x02\x02\u06BE\u06BF\x03\x02\x02\x02\u06BF\x9F\x03\x02\x02\x02\u06C0\u06C3" +
		"\x07Y\x02\x02\u06C1\u06C2\x07\x1E\x02\x02\u06C2\u06C4\x07/\x02\x02\u06C3" +
		"\u06C1\x03\x02\x02\x02\u06C3\u06C4\x03\x02\x02\x02\u06C4\u06CB\x03\x02" +
		"\x02\x02\u06C5\u06C8\x07n\x02\x02\u06C6\u06C7\x07\x1E\x02\x02\u06C7\u06C9" +
		"\x07/\x02\x02\u06C8\u06C6\x03\x02\x02\x02\u06C8\u06C9\x03\x02\x02\x02" +
		"\u06C9\u06CB\x03\x02\x02\x02\u06CA\u06C0\x03\x02\x02\x02\u06CA\u06C5\x03" +
		"\x02\x02\x02\u06CB\xA1\x03\x02\x02\x02\u06CC\u06CF\x07c\x02\x02\u06CD" +
		"\u06CE\x07\x1E\x02\x02\u06CE\u06D0\x07/\x02\x02\u06CF\u06CD\x03\x02\x02" +
		"\x02\u06CF\u06D0\x03\x02\x02\x02\u06D0\u06DC\x03\x02\x02\x02\u06D1\u06D4" +
		"\x07w\x02\x02\u06D2\u06D3\x07\x1E\x02\x02\u06D3\u06D5\x07/\x02\x02\u06D4" +
		"\u06D2\x03\x02\x02\x02\u06D4\u06D5\x03\x02\x02\x02\u06D5\u06DC\x03\x02" +
		"\x02\x02\u06D6\u06D9\x07\x87\x02\x02\u06D7\u06D8\x07\x1E\x02\x02\u06D8" +
		"\u06DA\x07/\x02\x02\u06D9\u06D7\x03\x02\x02\x02\u06D9\u06DA\x03\x02\x02" +
		"\x02\u06DA\u06DC\x03\x02\x02\x02\u06DB\u06CC\x03\x02\x02\x02\u06DB\u06D1" +
		"\x03\x02\x02\x02\u06DB\u06D6\x03\x02\x02\x02\u06DC\xA3\x03\x02\x02\x02" +
		"\u06DD\u06DE\x07\x16\x02\x02\u06DE\u06E1\x05\xDAn\x02\u06DF\u06E1\x07" +
		"K\x02\x02\u06E0\u06DD\x03\x02\x02\x02\u06E0\u06DF\x03\x02\x02\x02\u06E1" +
		"\u06E2\x03\x02\x02\x02\u06E2\u06E6\x07\x1E\x02\x02\u06E3\u06E5\x07\x04" +
		"\x02\x02\u06E4\u06E3\x03\x02\x02\x02\u06E5\u06E8\x03\x02\x02\x02\u06E6" +
		"\u06E4\x03\x02\x02\x02\u06E6\u06E7\x03\x02\x02\x02\u06E7\u06EB\x03\x02" +
		"\x02\x02\u06E8\u06E6\x03\x02\x02\x02\u06E9\u06EC\x05\xDAn\x02\u06EA\u06EC" +
		"\x075\x02\x02\u06EB\u06E9\x03\x02\x02\x02\u06EB\u06EA\x03\x02\x02\x02" +
		"\u06EC\u06ED\x03\x02\x02\x02\u06ED\u06EB\x03\x02\x02\x02\u06ED\u06EE\x03" +
		"\x02\x02\x02\u06EE\u06EF\x03\x02\x02\x02\u06EF\u06FD\x07\x1D\x02\x02\u06F0" +
		"\u06F1\t\x0E\x02\x02\u06F1\u06F2\x07\x1E\x02\x02\u06F2\u06F3\x073\x02" +
		"\x02\u06F3\u06FD\x07\x1D\x02\x02\u06F4\u06F8\t\x0F\x02\x02\u06F5\u06F7" +
		"\v\x02\x02\x02\u06F6\u06F5\x03\x02\x02\x02\u06F7\u06FA\x03\x02\x02\x02" +
		"\u06F8\u06F9\x03\x02\x02\x02\u06F8\u06F6\x03\x02\x02\x02\u06F9\u06FB\x03" +
		"\x02\x02\x02\u06FA\u06F8\x03\x02\x02\x02\u06FB\u06FD\x07\x1D\x02\x02\u06FC" +
		"\u06E0\x03\x02\x02\x02\u06FC\u06F0\x03\x02\x02\x02\u06FC\u06F4\x03\x02" +
		"\x02\x02\u06FD\xA5\x03\x02\x02\x02\u06FE\u06FF\x07\x9C\x02\x02\u06FF\u0700" +
		"\x07!\x02\x02\u0700\u0701\x073\x02\x02\u0701\xA7\x03\x02\x02\x02\u0702" +
		"\u0703\x07\x9F\x02\x02\u0703\xA9\x03\x02\x02\x02\u0704\u0705\x07\x1B\x02" +
		"\x02\u0705\u070D\x07\x1D\x02\x02\u0706\u0708\x07\x04\x02\x02\u0707\u0706" +
		"\x03\x02\x02\x02\u0708\u070B\x03\x02\x02\x02\u0709\u0707\x03\x02\x02\x02" +
		"\u0709\u070A\x03\x02\x02\x02\u070A\u070C\x03\x02\x02\x02\u070B\u0709\x03" +
		"\x02\x02\x02\u070C\u070E\x05\xACW\x02\u070D\u0709\x03\x02\x02\x02\u070D" +
		"\u070E\x03\x02\x02\x02\u070E\u0723\x03\x02\x02\x02\u070F\u0710\x07\x1B" +
		"\x02\x02\u0710\u0715\x05\xDAn\x02\u0711\u0714\x07\x1E\x02\x02\u0712\u0714" +
		"\x05\xDAn\x02\u0713\u0711\x03\x02\x02\x02\u0713\u0712\x03\x02\x02\x02" +
		"\u0714\u0717\x03\x02\x02\x02\u0715\u0713\x03\x02\x02\x02\u0715\u0716\x03" +
		"\x02\x02\x02\u0716\u0718\x03\x02\x02\x02\u0717\u0715\x03\x02\x02\x02\u0718" +
		"\u0720\x07\x1D\x02\x02\u0719\u071B\x07\x04\x02\x02\u071A\u0719\x03\x02" +
		"\x02\x02\u071B\u071E\x03\x02\x02\x02\u071C\u071A\x03\x02\x02\x02\u071C" +
		"\u071D\x03\x02\x02\x02\u071D\u071F\x03\x02\x02\x02\u071E\u071C\x03\x02" +
		"\x02\x02\u071F\u0721\x05\xACW\x02\u0720\u071C\x03\x02\x02\x02\u0720\u0721" +
		"\x03\x02\x02\x02\u0721\u0723\x03\x02\x02\x02\u0722\u0704\x03\x02\x02\x02" +
		"\u0722\u070F\x03\x02\x02\x02\u0723\xAB\x03\x02\x02\x02\u0724\u0725\x07" +
		"\x1B\x02\x02\u0725\u072A\x05\xDAn\x02\u0726\u0729\x07\x1E\x02\x02\u0727" +
		"\u0729\x05\xDAn\x02\u0728\u0726\x03\x02\x02\x02\u0728\u0727\x03\x02\x02" +
		"\x02\u0729\u072C\x03\x02\x02\x02\u072A\u0728\x03\x02\x02\x02\u072A\u072B" +
		"\x03\x02\x02\x02\u072B\u072D\x03\x02\x02\x02\u072C\u072A\x03\x02\x02\x02" +
		"\u072D\u072E\x07\x1D\x02\x02\u072E\xAD\x03\x02\x02\x02\u072F\u0731\x07" +
		"\x10\x02\x02\u0730\u0732\x05\xDAn\x02\u0731\u0730\x03\x02\x02\x02\u0731" +
		"\u0732\x03\x02\x02\x02\u0732\u0733\x03\x02\x02\x02\u0733\u073A\x07\x1D" +
		"\x02\x02\u0734\u0736\x07\x11\x02\x02\u0735\u0737\x05\xDAn\x02\u0736\u0735" +
		"\x03\x02\x02\x02\u0736\u0737\x03\x02\x02\x02\u0737\u0738\x03\x02\x02\x02" +
		"\u0738\u073A\x07\x1D\x02\x02\u0739\u072F\x03\x02\x02\x02\u0739\u0734\x03" +
		"\x02\x02\x02\u073A\xAF\x03\x02\x02\x02\u073B\u0743\x07D\x02\x02\u073C" +
		"\u0743\x07B\x02\x02\u073D\u073F\x07C\x02\x02\u073E\u0740\x078\x02\x02" +
		"\u073F\u073E\x03\x02\x02\x02\u073F\u0740\x03\x02\x02\x02\u0740\u0741\x03" +
		"\x02\x02\x02\u0741\u0743\x07\x02\x02\x03\u0742\u073B\x03\x02\x02\x02\u0742" +
		"\u073C\x03\x02\x02\x02\u0742\u073D\x03\x02\x02\x02\u0743\xB1\x03\x02\x02" +
		"\x02\u0744\u0746\x07m\x02\x02\u0745\u0747\x05\xDAn\x02\u0746\u0745\x03" +
		"\x02\x02\x02\u0746\u0747\x03\x02\x02\x02\u0747\u075D\x03\x02\x02\x02\u0748" +
		"\u0752\x05\xDAn\x02\u0749\u074D\x075\x02\x02\u074A\u074C\x07\x04\x02\x02" +
		"\u074B\u074A\x03\x02\x02\x02\u074C\u074F\x03\x02\x02\x02\u074D\u074B\x03" +
		"\x02\x02\x02\u074D\u074E\x03\x02\x02\x02\u074E\u0751\x03\x02\x02\x02\u074F" +
		"\u074D\x03\x02\x02\x02\u0750\u0749\x03\x02\x02\x02\u0751\u0754\x03\x02" +
		"\x02\x02\u0752\u0750\x03\x02\x02\x02\u0752\u0753\x03\x02\x02\x02\u0753" +
		"\u0758\x03\x02\x02\x02\u0754\u0752\x03\x02\x02\x02\u0755\u0757\x075\x02" +
		"\x02\u0756\u0755\x03\x02\x02\x02\u0757\u075A\x03\x02\x02\x02\u0758\u0756" +
		"\x03\x02\x02\x02\u0758\u0759\x03\x02\x02\x02\u0759\u075C\x03\x02\x02\x02" +
		"\u075A\u0758\x03\x02\x02\x02\u075B\u0748\x03\x02\x02\x02\u075C\u075F\x03" +
		"\x02\x02\x02\u075D\u075B\x03\x02\x02\x02\u075D\u075E\x03\x02\x02\x02\u075E" +
		"\u0760\x03\x02\x02\x02\u075F\u075D\x03\x02\x02\x02\u0760\u076C\x07\x1D" +
		"\x02\x02\u0761\u0767\x07m\x02\x02\u0762\u0766\x05\xDAn\x02\u0763\u0766" +
		"\x075\x02\x02\u0764\u0766\x07\x04\x02\x02\u0765\u0762\x03\x02\x02\x02" +
		"\u0765\u0763\x03\x02\x02\x02\u0765\u0764\x03\x02\x02\x02\u0766\u0769\x03" +
		"\x02\x02\x02\u0767\u0765\x03\x02\x02\x02\u0767\u0768\x03\x02\x02\x02\u0768" +
		"\u076A\x03\x02\x02\x02\u0769\u0767\x03\x02\x02\x02\u076A\u076C\x07\x02" +
		"\x02\x03\u076B\u0744\x03\x02\x02\x02\u076B\u0761\x03\x02\x02\x02\u076C" +
		"\xB3\x03\x02\x02\x02\u076D\u0772\x07<\x02\x02\u076E\u0773\x05\xDAn\x02" +
		"\u076F\u0773\x07\x1E\x02\x02\u0770\u0773\x07\x9F\x02\x02\u0771\u0773\x07" +
		"5\x02\x02\u0772\u076E\x03\x02\x02\x02\u0772\u076F\x03\x02\x02\x02\u0772" +
		"\u0770\x03\x02\x02\x02\u0772\u0771\x03\x02\x02\x02\u0773\u0774\x03\x02" +
		"\x02\x02\u0774\u0772\x03\x02\x02\x02\u0774\u0775\x03\x02\x02\x02\u0775" +
		"\u0776\x03\x02\x02\x02\u0776\u0784\x07\x1D\x02\x02\u0777\u077F\x07<\x02" +
		"\x02\u0778\u077E\x05\xDAn\x02\u0779\u077E\x07\x1E\x02\x02\u077A\u077E" +
		"\x07\x9F\x02\x02\u077B\u077E\x075\x02\x02\u077C\u077E\x07\x04\x02\x02" +
		"\u077D\u0778\x03\x02\x02\x02\u077D\u0779\x03\x02\x02\x02\u077D\u077A\x03" +
		"\x02\x02\x02\u077D\u077B\x03\x02\x02\x02\u077D\u077C\x03\x02\x02\x02\u077E" +
		"\u0781\x03\x02\x02\x02\u077F\u077D\x03\x02\x02\x02\u077F\u0780\x03\x02" +
		"\x02\x02\u0780\u0782\x03\x02\x02\x02\u0781\u077F\x03\x02\x02\x02\u0782" +
		"\u0784\x07\x02\x02\x03\u0783\u076D\x03\x02\x02\x02\u0783\u0777\x03\x02" +
		"\x02\x02\u0784\xB5\x03\x02\x02\x02\u0785\u0786\x07;\x02\x02\u0786\u0787" +
		"\x05\xDAn\x02\u0787\u0788\x07\x1D\x02\x02\u0788\xB7\x03\x02\x02\x02\u0789" +
		"\u078D\x07V\x02\x02\u078A\u078E\x05\xDAn\x02\u078B\u078E\x07\x1E\x02\x02" +
		"\u078C\u078E\x075\x02\x02\u078D\u078A\x03\x02\x02\x02\u078D\u078B\x03" +
		"\x02\x02\x02\u078D\u078C\x03\x02\x02\x02\u078E\u078F\x03\x02\x02\x02\u078F" +
		"\u078D\x03\x02\x02\x02\u078F\u0790\x03\x02\x02\x02\u0790\u0791\x03\x02" +
		"\x02\x02\u0791\u0793\x07\x1D\x02\x02\u0792\u0794\x05\xBA^\x02\u0793\u0792" +
		"\x03\x02\x02\x02\u0793\u0794\x03\x02\x02\x02\u0794\xB9\x03\x02\x02\x02" +
		"\u0795\u0799\x07V\x02\x02\u0796\u079A\x05\xDAn\x02\u0797\u079A\x07\x1E" +
		"\x02\x02\u0798\u079A\x075\x02\x02\u0799\u0796\x03\x02\x02\x02\u0799\u0797" +
		"\x03\x02\x02\x02\u0799\u0798\x03\x02\x02\x02\u079A\u079B\x03\x02\x02\x02" +
		"\u079B\u0799\x03\x02\x02\x02\u079B\u079C\x03\x02\x02\x02\u079C\u079D\x03" +
		"\x02\x02\x02\u079D\u079E\x07\x1D\x02\x02\u079E\xBB\x03\x02\x02\x02\u079F" +
		"\u07A3\x07\x14\x02\x02\u07A0\u07A2\x075\x02\x02\u07A1\u07A0\x03\x02\x02" +
		"\x02\u07A2\u07A5\x03\x02\x02\x02\u07A3\u07A1\x03\x02\x02\x02\u07A3\u07A4" +
		"\x03\x02\x02\x02\u07A4\u07A7\x03\x02\x02\x02\u07A5\u07A3\x03\x02\x02\x02" +
		"\u07A6\u07A8\x05\xDAn\x02\u07A7\u07A6\x03\x02\x02\x02\u07A7\u07A8\x03" +
		"\x02\x02\x02\u07A8\u07B8\x03\x02\x02\x02\u07A9\u07AD\x075\x02\x02\u07AA" +
		"\u07AC\x07\x04\x02\x02\u07AB\u07AA\x03\x02\x02\x02\u07AC\u07AF\x03\x02" +
		"\x02\x02\u07AD\u07AB\x03\x02\x02\x02\u07AD\u07AE\x03\x02\x02\x02\u07AE" +
		"\u07B1\x03\x02\x02\x02\u07AF\u07AD\x03\x02\x02\x02\u07B0\u07A9\x03\x02" +
		"\x02\x02\u07B1\u07B4\x03\x02\x02\x02\u07B2\u07B0\x03\x02\x02\x02\u07B2" +
		"\u07B3\x03\x02\x02\x02\u07B3\u07B5\x03\x02\x02\x02\u07B4\u07B2\x03\x02" +
		"\x02\x02\u07B5\u07B7\x05\xDAn\x02\u07B6\u07B2\x03\x02\x02\x02\u07B7\u07BA" +
		"\x03\x02\x02\x02\u07B8\u07B6\x03\x02\x02\x02\u07B8\u07B9\x03\x02\x02\x02" +
		"\u07B9\u07BE\x03\x02\x02\x02\u07BA\u07B8\x03\x02\x02\x02\u07BB\u07BD\x07" +
		"5\x02\x02\u07BC\u07BB\x03\x02\x02\x02\u07BD\u07C0\x03\x02\x02\x02\u07BE" +
		"\u07BC\x03\x02\x02\x02\u07BE\u07BF\x03\x02\x02\x02\u07BF\u07C1\x03\x02" +
		"\x02\x02\u07C0\u07BE\x03\x02\x02\x02\u07C1\u07CE\x07\x1D\x02\x02\u07C2" +
		"\u07C6\x07\x14\x02\x02\u07C3\u07C5\x075\x02\x02\u07C4\u07C3\x03\x02\x02" +
		"\x02\u07C5\u07C8\x03\x02\x02\x02\u07C6\u07C4\x03\x02\x02\x02\u07C6\u07C7" +
		"\x03\x02\x02\x02\u07C7\u07CA\x03\x02\x02\x02\u07C8\u07C6\x03\x02\x02\x02" +
		"\u07C9\u07CB\x05\xDAn\x02\u07CA\u07C9\x03\x02\x02\x02\u07CA\u07CB\x03" +
		"\x02\x02\x02\u07CB\u07CC\x03\x02\x02\x02\u07CC\u07CE\x07\x02\x02\x03\u07CD" +
		"\u079F\x03\x02\x02\x02\u07CD\u07C2\x03\x02\x02\x02\u07CE\xBD\x03\x02\x02" +
		"\x02\u07CF\u07D1\x07\x15\x02\x02\u07D0\u07D2\n\x10\x02\x02\u07D1\u07D0" +
		"\x03\x02\x02\x02\u07D2\u07D3\x03\x02\x02\x02\u07D3\u07D1\x03\x02\x02\x02" +
		"\u07D3\u07D4\x03\x02\x02\x02\u07D4\u07D5\x03\x02\x02\x02\u07D5\u07D6\x07" +
		"\x1D\x02\x02\u07D6\xBF\x03\x02\x02\x02\u07D7\u07DA\x07\x1C\x02\x02\u07D8" +
		"\u07DB\x05\xDAn\x02\u07D9\u07DB\x075\x02\x02\u07DA\u07D8\x03\x02\x02\x02" +
		"\u07DA\u07D9\x03\x02\x02\x02\u07DB\u07DC\x03\x02\x02\x02\u07DC\u07DA\x03" +
		"\x02\x02\x02\u07DC\u07DD\x03\x02\x02\x02\u07DD\u07DE\x03\x02\x02\x02\u07DE" +
		"\u07E4\x07\x1D\x02\x02\u07DF\u07E0\x07\x1C\x02\x02\u07E0\u07E1\x05\xDA" +
		"n\x02\u07E1\u07E2\x07\x02\x02\x03\u07E2\u07E4\x03\x02\x02\x02\u07E3\u07D7" +
		"\x03\x02\x02\x02\u07E3\u07DF\x03\x02\x02\x02\u07E4\xC1\x03\x02\x02\x02" +
		"\u07E5\u07E6\x07H\x02\x02\u07E6\u07E7\x05\xDAn\x02\u07E7\u07E8\x07\x1D" +
		"\x02\x02\u07E8\u07EE\x03\x02\x02\x02\u07E9\u07EA\x07I\x02\x02\u07EA\u07EB" +
		"\x05\xDAn\x02\u07EB\u07EC\x07\x1D\x02\x02\u07EC\u07EE\x03\x02\x02\x02" +
		"\u07ED\u07E5\x03\x02\x02\x02\u07ED\u07E9\x03\x02\x02\x02\u07EE\xC3\x03" +
		"\x02\x02\x02\u07EF\u07F0\x07?\x02\x02\u07F0\u07F1\x07\x1E\x02\x02\u07F1" +
		"\u07F2\x073\x02\x02\u07F2\u07F9\x07\x1D\x02\x02\u07F3\u07F4\x07?\x02\x02" +
		"\u07F4\u07F5\x07\x1E\x02\x02\u07F5\u07F6\x05\xDAn\x02\u07F6\u07F7\x07" +
		"\x1D\x02\x02\u07F7\u07F9\x03\x02\x02\x02\u07F8\u07EF\x03\x02\x02\x02\u07F8" +
		"\u07F3\x03\x02\x02\x02\u07F9\xC5\x03\x02\x02\x02\u07FA\u07FB\x07T\x02" +
		"\x02\u07FB\u07FC\x05\xDAn\x02\u07FC\u07FD\x07\x1D\x02\x02\u07FD\xC7\x03" +
		"\x02\x02\x02\u07FE\u07FF\x07U\x02\x02\u07FF\u0800\x05\xDAn\x02\u0800\u0801" +
		"\x07\x1D\x02\x02\u0801\xC9\x03\x02\x02\x02\u0802\u080C\x05\xCCg\x02\u0803" +
		"\u0805\x075\x02\x02\u0804\u0803\x03\x02\x02\x02\u0805\u0808\x03\x02\x02" +
		"\x02\u0806\u0804\x03\x02\x02\x02\u0806\u0807\x03\x02\x02\x02\u0807\u0809" +
		"\x03\x02\x02\x02\u0808\u0806\x03\x02\x02\x02\u0809\u080B\x05\xCCg\x02" +
		"\u080A\u0806\x03\x02\x02\x02\u080B\u080E\x03\x02\x02\x02\u080C\u080A\x03" +
		"\x02\x02\x02\u080C\u080D\x03\x02\x02\x02\u080D\xCB\x03\x02\x02\x02\u080E" +
		"\u080C\x03\x02\x02\x02\u080F\u0810\x07\x16\x02\x02\u0810\u0811\x05\xDA" +
		"n\x02\u0811\u0812\t\x11\x02\x02\u0812\u0818\x05\xDAn\x02\u0813\u0817\x07" +
		"5\x02\x02\u0814\u0817\x07\x1E\x02\x02\u0815\u0817\x05\xDAn\x02\u0816\u0813" +
		"\x03\x02\x02\x02\u0816\u0814\x03\x02\x02\x02\u0816\u0815\x03\x02\x02\x02" +
		"\u0817\u081A\x03\x02\x02\x02\u0818\u0816\x03\x02\x02\x02\u0818\u0819\x03" +
		"\x02\x02\x02\u0819\u081B\x03\x02\x02\x02\u081A\u0818\x03\x02\x02\x02\u081B" +
		"\u081C\x07\x1D\x02\x02\u081C\u0827\x03\x02\x02\x02\u081D\u0821\x07R\x02" +
		"\x02\u081E\u0820\v\x02\x02\x02\u081F\u081E\x03\x02\x02\x02\u0820\u0823" +
		"\x03\x02\x02\x02\u0821\u0822\x03\x02\x02\x02\u0821\u081F\x03\x02\x02\x02" +
		"\u0822\u0824\x03\x02\x02\x02\u0823\u0821\x03\x02\x02\x02\u0824\u0827\x07" +
		"\x1D\x02\x02\u0825\u0827\x07E\x02\x02\u0826\u080F\x03\x02\x02\x02\u0826" +
		"\u081D\x03\x02\x02\x02\u0826\u0825\x03\x02\x02\x02\u0827\xCD\x03\x02\x02" +
		"\x02\u0828\u082C\x07\x0E\x02\x02\u0829\u082D\x05\xDAn\x02\u082A\u082D" +
		"\x07\x1E\x02\x02\u082B\u082D\x075\x02\x02\u082C\u0829\x03\x02\x02\x02" +
		"\u082C\u082A\x03\x02\x02\x02\u082C\u082B\x03\x02\x02\x02\u082D\u082E\x03" +
		"\x02\x02\x02\u082E\u082C\x03\x02\x02\x02\u082E\u082F\x03\x02\x02\x02\u082F" +
		"\u0830\x03\x02\x02\x02\u0830\u083C\x07\x1D\x02\x02\u0831\u0837\x07\x0E" +
		"\x02\x02\u0832\u0836\x05\xDAn\x02\u0833\u0836\x07\x1E\x02\x02\u0834\u0836" +
		"\x075\x02\x02\u0835\u0832\x03\x02\x02\x02\u0835\u0833\x03\x02\x02\x02" +
		"\u0835\u0834\x03\x02\x02\x02\u0836\u0839\x03\x02\x02\x02\u0837\u0835\x03" +
		"\x02\x02\x02\u0837\u0838\x03\x02\x02\x02\u0838\u083A\x03\x02\x02\x02\u0839" +
		"\u0837\x03\x02\x02\x02\u083A\u083C\x07\x02\x02\x03\u083B\u0828\x03\x02" +
		"\x02\x02\u083B\u0831\x03\x02\x02\x02\u083C\xCF\x03\x02\x02\x02\u083D\u083F" +
		"\x07\x12\x02\x02\u083E\u0840\x05\xDAn\x02\u083F\u083E\x03\x02\x02\x02" +
		"\u083F\u0840\x03\x02\x02\x02\u0840\u0841\x03\x02\x02\x02\u0841\u0842\x07" +
		"\x1D\x02\x02\u0842\xD1\x03\x02\x02\x02\u0843\u0844\x07 \x02\x02\u0844" +
		"\xD3\x03\x02\x02\x02\u0845\u0846\x05\xD2j\x02\u0846\u0847\x074\x02\x02" +
		"\u0847\u0849\x05\xD2j\x02\u0848\u084A\n\x12\x02\x02\u0849\u0848\x03\x02" +
		"\x02\x02\u084A\u084B\x03\x02\x02\x02\u084B\u0849\x03\x02\x02\x02\u084B" +
		"\u084C\x03\x02\x02\x02\u084C\u084D\x03\x02\x02\x02\u084D\u084E\x05\xD2" +
		"j\x02\u084E\xD5\x03\x02\x02\x02\u084F\u0851\x05\xDAn\x02\u0850\u0852\x07" +
		"5\x02\x02\u0851\u0850\x03\x02\x02\x02\u0851\u0852\x03\x02\x02\x02\u0852" +
		"\u0854\x03\x02\x02\x02\u0853\u084F\x03\x02\x02\x02\u0854\u0855\x03\x02" +
		"\x02\x02\u0855\u0853\x03\x02\x02\x02\u0855\u0856\x03\x02\x02\x02\u0856" +
		"\xD7\x03\x02\x02\x02\u0857\u0858\x07\xA0\x02\x02\u0858\xD9\x03\x02\x02" +
		"\x02\u0859\u0860\x074\x02\x02\u085A\u085C\x07\x04\x02\x02\u085B\u085A" +
		"\x03\x02\x02\x02\u085C\u085D\x03\x02\x02\x02\u085D\u085B\x03\x02\x02\x02" +
		"\u085D\u085E\x03\x02\x02\x02\u085E\u085F\x03\x02\x02\x02\u085F\u0861\x07" +
		"3\x02\x02\u0860\u085B\x03\x02\x02\x02\u0860\u0861\x03\x02\x02\x02\u0861" +
		"\u0889\x03\x02\x02\x02\u0862\u0869\x05\xF6|\x02\u0863\u0865\x07\x04\x02" +
		"\x02\u0864\u0863\x03\x02\x02\x02\u0865\u0866\x03\x02\x02\x02\u0866\u0864" +
		"\x03\x02\x02\x02\u0866\u0867\x03\x02\x02\x02\u0867\u0868\x03\x02\x02\x02" +
		"\u0868\u086A\x073\x02\x02\u0869\u0864\x03\x02\x02\x02\u0869\u086A\x03" +
		"\x02";
	private static readonly _serializedATNSegment4: string =
		"\x02\x02\u086A\u0889\x03\x02\x02\x02\u086B\u086C\x07\x19\x02\x02\u086C" +
		"\u086D\x05\xDAn\x02\u086D\u086E\x07\x1D\x02\x02\u086E\u0889\x03\x02\x02" +
		"\x02\u086F\u0889\x073\x02\x02\u0870\u0872\x07\x04\x02\x02\u0871\u0870" +
		"\x03\x02\x02\x02\u0872\u0875\x03\x02\x02\x02\u0873\u0871\x03\x02\x02\x02" +
		"\u0873\u0874\x03\x02\x02\x02\u0874\u0876\x03\x02\x02\x02\u0875\u0873\x03" +
		"\x02\x02\x02\u0876\u087A\x07\x1E\x02\x02\u0877\u0879\x07\x04\x02\x02\u0878" +
		"\u0877\x03\x02\x02\x02\u0879\u087C\x03\x02\x02\x02\u087A\u0878\x03\x02" +
		"\x02\x02\u087A\u087B\x03\x02\x02\x02\u087B\u0889\x03\x02\x02\x02\u087C" +
		"\u087A\x03\x02\x02\x02\u087D\u0881\x07\x1F\x02\x02\u087E\u0880\x07\x04" +
		"\x02\x02\u087F\u087E\x03\x02\x02\x02\u0880\u0883\x03\x02\x02\x02\u0881" +
		"\u087F\x03\x02\x02\x02\u0881\u0882\x03\x02\x02\x02\u0882\u0889\x03\x02" +
		"\x02\x02\u0883\u0881\x03\x02\x02\x02\u0884\u0889\x07\x1D\x02\x02\u0885" +
		"\u0889\x07 \x02\x02\u0886\u0889\x07\xA0\x02\x02\u0887\u0889\x05\xD4k\x02" +
		"\u0888\u0859\x03\x02\x02\x02\u0888\u0862\x03\x02\x02\x02\u0888\u086B\x03" +
		"\x02\x02\x02\u0888\u086F\x03\x02\x02\x02\u0888\u0873\x03\x02\x02\x02\u0888" +
		"\u087D\x03\x02\x02\x02\u0888\u0884\x03\x02\x02\x02\u0888\u0885\x03\x02" +
		"\x02\x02\u0888\u0886\x03\x02\x02\x02\u0888\u0887\x03\x02\x02\x02\u0889" +
		"\xDB\x03\x02\x02\x02\u088A\u088B\x07-\x02\x02\u088B\xDD\x03\x02\x02\x02" +
		"\u088C\u088D\x07\x0E\x02\x02\u088D\xDF\x03\x02\x02\x02\u088E\u088F\x07" +
		"\x13\x02\x02\u088F\xE1\x03\x02\x02\x02\u0890\u0891\x07\x14\x02\x02\u0891" +
		"\xE3\x03\x02\x02\x02\u0892\u0893\x07\x15\x02\x02\u0893\xE5\x03\x02\x02" +
		"\x02\u0894\u0895\x07\x16\x02\x02\u0895\xE7\x03\x02\x02\x02\u0896\u0897" +
		"\x07\x17\x02\x02\u0897\xE9\x03\x02\x02\x02\u0898\u0899\x07\x18\x02\x02" +
		"\u0899\xEB\x03\x02\x02\x02\u089A\u089B\x07\x19\x02\x02\u089B\xED\x03\x02" +
		"\x02\x02\u089C\u089D\x07\x1A\x02\x02\u089D\xEF\x03\x02\x02\x02\u089E\u089F" +
		"\x07\x1B\x02\x02\u089F\xF1\x03\x02\x02\x02\u08A0\u08A1\x07\x1D\x02\x02" +
		"\u08A1\xF3\x03\x02\x02\x02\u08A2\u08A3\x07*\x02\x02\u08A3\xF5\x03\x02" +
		"\x02\x02\u08A4\u08B0\x078\x02\x02\u08A5\u08B0\x076\x02\x02\u08A6\u08B0" +
		"\x079\x02\x02\u08A7\u08B0\x077\x02\x02\u08A8\u08B0\x07\x1F\x02\x02\u08A9" +
		"\u08AA\x07#\x02\x02\u08AA\u08B0\n\x13\x02\x02\u08AB\u08AC\x07$\x02\x02" +
		"\u08AC\u08B0\n\x14\x02\x02\u08AD\u08B0\x07\'\x02\x02\u08AE\u08B0\x07&" +
		"\x02\x02\u08AF\u08A4\x03\x02\x02\x02\u08AF\u08A5\x03\x02\x02\x02\u08AF" +
		"\u08A6\x03\x02\x02\x02\u08AF\u08A7\x03\x02\x02\x02\u08AF\u08A8\x03\x02" +
		"\x02\x02\u08AF\u08A9\x03\x02\x02\x02\u08AF\u08AB\x03\x02\x02\x02\u08AF" +
		"\u08AD\x03\x02\x02\x02\u08AF\u08AE\x03\x02\x02\x02\u08B0\u08B1\x03\x02" +
		"\x02\x02\u08B1\u08AF\x03\x02\x02\x02\u08B1\u08B2\x03\x02\x02\x02\u08B2" +
		"\xF7\x03\x02\x02\x02\u08B3\u08B4\x07\x04\x02\x02\u08B4\xF9\x03\x02\x02" +
		"\x02\u0144\xFE\u0104\u0109\u0117\u011F\u0126\u012B\u0134\u013A\u013F\u0146" +
		"\u014C\u0153\u0159\u015C\u015E\u0166\u016D\u0172\u017B\u0181\u0186\u018D" +
		"\u0193\u019A\u01A0\u01A3\u01A5\u01AD\u01B4\u01B9\u01C2\u01C8\u01CD\u01D4" +
		"\u01DA\u01E1\u01E7\u01EA\u01EC\u01F4\u01FB\u0200\u0209\u020F\u0214\u021B" +
		"\u0221\u0228\u022E\u0231\u0233\u023B\u0242\u0247\u0250\u0256\u025B\u0262" +
		"\u0268\u026F\u0275\u0278\u027A\u0282\u0289\u028E\u0297\u029D\u02A2\u02A9" +
		"\u02AF\u02B6\u02BC\u02BF\u02C1\u02C9\u02D0\u02D5\u02DE\u02E4\u02E9\u02F0" +
		"\u02F6\u02FD\u0303\u0306\u0308\u0310\u0317\u031C\u0325\u032B\u0330\u0337" +
		"\u033D\u0344\u034A\u034D\u034F\u036B\u0373\u0375\u037C\u0381\u0388\u038C" +
		"\u038E\u039C\u03A3\u03AD\u03B3\u03B9\u03BF\u03C7\u03D0\u03DA\u03E7\u03ED" +
		"\u03F4\u03FD\u0404\u040A\u0411\u041C\u0423\u0426\u042C\u0430\u0435\u043B" +
		"\u0441\u0443\u0448\u044C\u0451\u0456\u045A\u0462\u0465\u0468\u0470\u0472" +
		"\u0477\u047B\u0480\u0484\u0489\u048B\u0493\u049A\u049C\u04A0\u04A5\u04A7" +
		"\u04AE\u04B9\u04C0\u04C8\u04D3\u04DA\u04E2\u04EC\u04F1\u04F8\u0503\u050E" +
		"\u0513\u051A\u0520\u0526\u0528\u052B\u0530\u0534\u0539\u053D\u0542\u0546" +
		"\u054A\u054D\u0555\u0557\u055C\u0560\u0563\u056A\u056C\u0570\u0575\u057A" +
		"\u057E\u0583\u0585\u058C\u0592\u0599\u059F\u05A3\u05AF\u05B5\u05BE\u05C4" +
		"\u05C6\u05D4\u05DC\u05E1\u05E5\u05E9\u05EB\u05F0\u0607\u060C\u0611\u0613" +
		"\u061D\u0627\u0631\u0637\u063E\u0644\u064C\u0656\u0661\u0667\u066C\u0673" +
		"\u067C\u0680\u0684\u0687\u0696\u069A\u06A9\u06AD\u06B3\u06BE\u06C3\u06C8" +
		"\u06CA\u06CF\u06D4\u06D9\u06DB\u06E0\u06E6\u06EB\u06ED\u06F8\u06FC\u0709" +
		"\u070D\u0713\u0715\u071C\u0720\u0722\u0728\u072A\u0731\u0736\u0739\u073F" +
		"\u0742\u0746\u074D\u0752\u0758\u075D\u0765\u0767\u076B\u0772\u0774\u077D" +
		"\u077F\u0783\u078D\u078F\u0793\u0799\u079B\u07A3\u07A7\u07AD\u07B2\u07B8" +
		"\u07BE\u07C6\u07CA\u07CD\u07D3\u07DA\u07DC\u07E3\u07ED\u07F8\u0806\u080C" +
		"\u0816\u0818\u0821\u0826\u082C\u082E\u0835\u0837\u083B\u083F\u084B\u0851" +
		"\u0855\u085D\u0860\u0866\u0869\u0873\u087A\u0881\u0888\u08AF\u08B1";
	public static readonly _serializedATN: string = Utils.join(
		[
			matchParser._serializedATNSegment0,
			matchParser._serializedATNSegment1,
			matchParser._serializedATNSegment2,
			matchParser._serializedATNSegment3,
			matchParser._serializedATNSegment4,
		],
		"",
	);
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!matchParser.__ATN) {
			matchParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(matchParser._serializedATN));
		}

		return matchParser.__ATN;
	}

}

export class BitmarkContext extends ParserRuleContext {
	public EOF(): TerminalNode { return this.getToken(matchParser.EOF, 0); }
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
			return this.getTokens(matchParser.NL);
		} else {
			return this.getToken(matchParser.NL, i);
		}
	}
	public S(): TerminalNode[];
	public S(i: number): TerminalNode;
	public S(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(matchParser.S);
		} else {
			return this.getToken(matchParser.S, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return matchParser.RULE_bitmark; }
	// @Override
	public enterRule(listener: matchParserListener): void {
		if (listener.enterBitmark) {
			listener.enterBitmark(this);
		}
	}
	// @Override
	public exitRule(listener: matchParserListener): void {
		if (listener.exitBitmark) {
			listener.exitBitmark(this);
		}
	}
}


export class Bitmark_Context extends ParserRuleContext {
	public matches(): MatchesContext {
		return this.getRuleContext(0, MatchesContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return matchParser.RULE_bitmark_; }
	// @Override
	public enterRule(listener: matchParserListener): void {
		if (listener.enterBitmark_) {
			listener.enterBitmark_(this);
		}
	}
	// @Override
	public exitRule(listener: matchParserListener): void {
		if (listener.exitBitmark_) {
			listener.exitBitmark_(this);
		}
	}
}


export class MatchesContext extends ParserRuleContext {
	public match_(): Match_Context | undefined {
		return this.tryGetRuleContext(0, Match_Context);
	}
	public match_matrix(): Match_matrixContext | undefined {
		return this.tryGetRuleContext(0, Match_matrixContext);
	}
	public match_all(): Match_allContext | undefined {
		return this.tryGetRuleContext(0, Match_allContext);
	}
	public match_all_reverse(): Match_all_reverseContext | undefined {
		return this.tryGetRuleContext(0, Match_all_reverseContext);
	}
	public match_reverse(): Match_reverseContext | undefined {
		return this.tryGetRuleContext(0, Match_reverseContext);
	}
	public match_picture(): Match_pictureContext | undefined {
		return this.tryGetRuleContext(0, Match_pictureContext);
	}
	public match_audio(): Match_audioContext | undefined {
		return this.tryGetRuleContext(0, Match_audioContext);
	}
	public match_solution_grouped(): Match_solution_groupedContext | undefined {
		return this.tryGetRuleContext(0, Match_solution_groupedContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return matchParser.RULE_matches; }
	// @Override
	public enterRule(listener: matchParserListener): void {
		if (listener.enterMatches) {
			listener.enterMatches(this);
		}
	}
	// @Override
	public exitRule(listener: matchParserListener): void {
		if (listener.exitMatches) {
			listener.exitMatches(this);
		}
	}
}


export class Match_Context extends ParserRuleContext {
	public BitMatch(): TerminalNode { return this.getToken(matchParser.BitMatch, 0); }
	public format(): FormatContext {
		return this.getRuleContext(0, FormatContext);
	}
	public CL(): TerminalNode { return this.getToken(matchParser.CL, 0); }
	public NL(): TerminalNode[];
	public NL(i: number): TerminalNode;
	public NL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(matchParser.NL);
		} else {
			return this.getToken(matchParser.NL, i);
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
	public pairs(): PairsContext | undefined {
		return this.tryGetRuleContext(0, PairsContext);
	}
	public pair_heading(): Pair_headingContext | undefined {
		return this.tryGetRuleContext(0, Pair_headingContext);
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
	public HSPL(): TerminalNode | undefined { return this.tryGetToken(matchParser.HSPL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return matchParser.RULE_match_; }
	// @Override
	public enterRule(listener: matchParserListener): void {
		if (listener.enterMatch_) {
			listener.enterMatch_(this);
		}
	}
	// @Override
	public exitRule(listener: matchParserListener): void {
		if (listener.exitMatch_) {
			listener.exitMatch_(this);
		}
	}
}


export class Match_matrixContext extends ParserRuleContext {
	public BitMatchmatrix(): TerminalNode { return this.getToken(matchParser.BitMatchmatrix, 0); }
	public format(): FormatContext {
		return this.getRuleContext(0, FormatContext);
	}
	public CL(): TerminalNode { return this.getToken(matchParser.CL, 0); }
	public NL(): TerminalNode[];
	public NL(i: number): TerminalNode;
	public NL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(matchParser.NL);
		} else {
			return this.getToken(matchParser.NL, i);
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
	public pair_multivals(): Pair_multivalsContext | undefined {
		return this.tryGetRuleContext(0, Pair_multivalsContext);
	}
	public pair_heading_multi(): Pair_heading_multiContext | undefined {
		return this.tryGetRuleContext(0, Pair_heading_multiContext);
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
	public HSPL(): TerminalNode | undefined { return this.tryGetToken(matchParser.HSPL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return matchParser.RULE_match_matrix; }
	// @Override
	public enterRule(listener: matchParserListener): void {
		if (listener.enterMatch_matrix) {
			listener.enterMatch_matrix(this);
		}
	}
	// @Override
	public exitRule(listener: matchParserListener): void {
		if (listener.exitMatch_matrix) {
			listener.exitMatch_matrix(this);
		}
	}
}


export class Match_solution_groupedContext extends ParserRuleContext {
	public BitMatchsolgrp(): TerminalNode { return this.getToken(matchParser.BitMatchsolgrp, 0); }
	public format(): FormatContext {
		return this.getRuleContext(0, FormatContext);
	}
	public CL(): TerminalNode { return this.getToken(matchParser.CL, 0); }
	public NL(): TerminalNode[];
	public NL(i: number): TerminalNode;
	public NL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(matchParser.NL);
		} else {
			return this.getToken(matchParser.NL, i);
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
	public pairs(): PairsContext | undefined {
		return this.tryGetRuleContext(0, PairsContext);
	}
	public pair_heading(): Pair_headingContext | undefined {
		return this.tryGetRuleContext(0, Pair_headingContext);
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
	public HSPL(): TerminalNode | undefined { return this.tryGetToken(matchParser.HSPL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return matchParser.RULE_match_solution_grouped; }
	// @Override
	public enterRule(listener: matchParserListener): void {
		if (listener.enterMatch_solution_grouped) {
			listener.enterMatch_solution_grouped(this);
		}
	}
	// @Override
	public exitRule(listener: matchParserListener): void {
		if (listener.exitMatch_solution_grouped) {
			listener.exitMatch_solution_grouped(this);
		}
	}
}


export class Match_reverseContext extends ParserRuleContext {
	public BitMatchrev(): TerminalNode { return this.getToken(matchParser.BitMatchrev, 0); }
	public format(): FormatContext {
		return this.getRuleContext(0, FormatContext);
	}
	public CL(): TerminalNode { return this.getToken(matchParser.CL, 0); }
	public NL(): TerminalNode[];
	public NL(i: number): TerminalNode;
	public NL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(matchParser.NL);
		} else {
			return this.getToken(matchParser.NL, i);
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
	public pairs(): PairsContext | undefined {
		return this.tryGetRuleContext(0, PairsContext);
	}
	public pair_heading(): Pair_headingContext | undefined {
		return this.tryGetRuleContext(0, Pair_headingContext);
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
	public HSPL(): TerminalNode | undefined { return this.tryGetToken(matchParser.HSPL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return matchParser.RULE_match_reverse; }
	// @Override
	public enterRule(listener: matchParserListener): void {
		if (listener.enterMatch_reverse) {
			listener.enterMatch_reverse(this);
		}
	}
	// @Override
	public exitRule(listener: matchParserListener): void {
		if (listener.exitMatch_reverse) {
			listener.exitMatch_reverse(this);
		}
	}
}


export class Match_all_reverseContext extends ParserRuleContext {
	public BitMatchallrev(): TerminalNode { return this.getToken(matchParser.BitMatchallrev, 0); }
	public format(): FormatContext {
		return this.getRuleContext(0, FormatContext);
	}
	public CL(): TerminalNode { return this.getToken(matchParser.CL, 0); }
	public NL(): TerminalNode[];
	public NL(i: number): TerminalNode;
	public NL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(matchParser.NL);
		} else {
			return this.getToken(matchParser.NL, i);
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
	public pairs(): PairsContext | undefined {
		return this.tryGetRuleContext(0, PairsContext);
	}
	public pair_heading(): Pair_headingContext | undefined {
		return this.tryGetRuleContext(0, Pair_headingContext);
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
	public HSPL(): TerminalNode | undefined { return this.tryGetToken(matchParser.HSPL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return matchParser.RULE_match_all_reverse; }
	// @Override
	public enterRule(listener: matchParserListener): void {
		if (listener.enterMatch_all_reverse) {
			listener.enterMatch_all_reverse(this);
		}
	}
	// @Override
	public exitRule(listener: matchParserListener): void {
		if (listener.exitMatch_all_reverse) {
			listener.exitMatch_all_reverse(this);
		}
	}
}


export class Match_pictureContext extends ParserRuleContext {
	public BitMatchpic(): TerminalNode { return this.getToken(matchParser.BitMatchpic, 0); }
	public format(): FormatContext {
		return this.getRuleContext(0, FormatContext);
	}
	public CL(): TerminalNode { return this.getToken(matchParser.CL, 0); }
	public NL(): TerminalNode[];
	public NL(i: number): TerminalNode;
	public NL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(matchParser.NL);
		} else {
			return this.getToken(matchParser.NL, i);
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
	public pair_images(): Pair_imagesContext | undefined {
		return this.tryGetRuleContext(0, Pair_imagesContext);
	}
	public pair_heading(): Pair_headingContext | undefined {
		return this.tryGetRuleContext(0, Pair_headingContext);
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
	public HSPL(): TerminalNode | undefined { return this.tryGetToken(matchParser.HSPL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return matchParser.RULE_match_picture; }
	// @Override
	public enterRule(listener: matchParserListener): void {
		if (listener.enterMatch_picture) {
			listener.enterMatch_picture(this);
		}
	}
	// @Override
	public exitRule(listener: matchParserListener): void {
		if (listener.exitMatch_picture) {
			listener.exitMatch_picture(this);
		}
	}
}


export class Match_audioContext extends ParserRuleContext {
	public BitMatchaudio(): TerminalNode { return this.getToken(matchParser.BitMatchaudio, 0); }
	public format(): FormatContext {
		return this.getRuleContext(0, FormatContext);
	}
	public CL(): TerminalNode { return this.getToken(matchParser.CL, 0); }
	public NL(): TerminalNode[];
	public NL(i: number): TerminalNode;
	public NL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(matchParser.NL);
		} else {
			return this.getToken(matchParser.NL, i);
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
	public pair_audios(): Pair_audiosContext | undefined {
		return this.tryGetRuleContext(0, Pair_audiosContext);
	}
	public pair_heading(): Pair_headingContext | undefined {
		return this.tryGetRuleContext(0, Pair_headingContext);
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
	public HSPL(): TerminalNode | undefined { return this.tryGetToken(matchParser.HSPL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return matchParser.RULE_match_audio; }
	// @Override
	public enterRule(listener: matchParserListener): void {
		if (listener.enterMatch_audio) {
			listener.enterMatch_audio(this);
		}
	}
	// @Override
	public exitRule(listener: matchParserListener): void {
		if (listener.exitMatch_audio) {
			listener.exitMatch_audio(this);
		}
	}
}


export class Match_allContext extends ParserRuleContext {
	public BitMatchall(): TerminalNode { return this.getToken(matchParser.BitMatchall, 0); }
	public format(): FormatContext {
		return this.getRuleContext(0, FormatContext);
	}
	public CL(): TerminalNode { return this.getToken(matchParser.CL, 0); }
	public NL(): TerminalNode[];
	public NL(i: number): TerminalNode;
	public NL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(matchParser.NL);
		} else {
			return this.getToken(matchParser.NL, i);
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
	public pairs(): PairsContext | undefined {
		return this.tryGetRuleContext(0, PairsContext);
	}
	public pair_heading(): Pair_headingContext | undefined {
		return this.tryGetRuleContext(0, Pair_headingContext);
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
	public HSPL(): TerminalNode | undefined { return this.tryGetToken(matchParser.HSPL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return matchParser.RULE_match_all; }
	// @Override
	public enterRule(listener: matchParserListener): void {
		if (listener.enterMatch_all) {
			listener.enterMatch_all(this);
		}
	}
	// @Override
	public exitRule(listener: matchParserListener): void {
		if (listener.exitMatch_all) {
			listener.exitMatch_all(this);
		}
	}
}


export class BitElemContext extends ParserRuleContext {
	public NOTBITMARK(): TerminalNode | undefined { return this.tryGetToken(matchParser.NOTBITMARK, 0); }
	public list_line(): List_lineContext | undefined {
		return this.tryGetRuleContext(0, List_lineContext);
	}
	public dclines(): DclinesContext | undefined {
		return this.tryGetRuleContext(0, DclinesContext);
	}
	public colcoltext(): ColcoltextContext | undefined {
		return this.tryGetRuleContext(0, ColcoltextContext);
	}
	public gap(): GapContext | undefined {
		return this.tryGetRuleContext(0, GapContext);
	}
	public atdef(): AtdefContext | undefined {
		return this.tryGetRuleContext(0, AtdefContext);
	}
	public dollarans(): DollaransContext | undefined {
		return this.tryGetRuleContext(0, DollaransContext);
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
	public get ruleIndex(): number { return matchParser.RULE_bitElem; }
	// @Override
	public enterRule(listener: matchParserListener): void {
		if (listener.enterBitElem) {
			listener.enterBitElem(this);
		}
	}
	// @Override
	public exitRule(listener: matchParserListener): void {
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
	public get ruleIndex(): number { return matchParser.RULE_gap; }
	// @Override
	public enterRule(listener: matchParserListener): void {
		if (listener.enterGap) {
			listener.enterGap(this);
		}
	}
	// @Override
	public exitRule(listener: matchParserListener): void {
		if (listener.exitGap) {
			listener.exitGap(this);
		}
	}
}


export class Single_gapContext extends ParserRuleContext {
	public OPU(): TerminalNode { return this.getToken(matchParser.OPU, 0); }
	public clnsp(): ClnspContext {
		return this.getRuleContext(0, ClnspContext);
	}
	public NUMERIC(): TerminalNode | undefined { return this.tryGetToken(matchParser.NUMERIC, 0); }
	public STRING(): TerminalNode | undefined { return this.tryGetToken(matchParser.STRING, 0); }
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
	public get ruleIndex(): number { return matchParser.RULE_single_gap; }
	// @Override
	public enterRule(listener: matchParserListener): void {
		if (listener.enterSingle_gap) {
			listener.enterSingle_gap(this);
		}
	}
	// @Override
	public exitRule(listener: matchParserListener): void {
		if (listener.exitSingle_gap) {
			listener.exitSingle_gap(this);
		}
	}
}


export class Ml_exampleContext extends ParserRuleContext {
	public AtExamplecol(): TerminalNode { return this.getToken(matchParser.AtExamplecol, 0); }
	public CL(): TerminalNode { return this.getToken(matchParser.CL, 0); }
	public lines(): LinesContext | undefined {
		return this.tryGetRuleContext(0, LinesContext);
	}
	public NL(): TerminalNode[];
	public NL(i: number): TerminalNode;
	public NL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(matchParser.NL);
		} else {
			return this.getToken(matchParser.NL, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return matchParser.RULE_ml_example; }
	// @Override
	public enterRule(listener: matchParserListener): void {
		if (listener.enterMl_example) {
			listener.enterMl_example(this);
		}
	}
	// @Override
	public exitRule(listener: matchParserListener): void {
		if (listener.exitMl_example) {
			listener.exitMl_example(this);
		}
	}
}


export class LongansContext extends ParserRuleContext {
	public AtLonganswer(): TerminalNode { return this.getToken(matchParser.AtLonganswer, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return matchParser.RULE_longans; }
	// @Override
	public enterRule(listener: matchParserListener): void {
		if (listener.enterLongans) {
			listener.enterLongans(this);
		}
	}
	// @Override
	public exitRule(listener: matchParserListener): void {
		if (listener.exitLongans) {
			listener.exitLongans(this);
		}
	}
}


export class ShortansContext extends ParserRuleContext {
	public AtShortanswer(): TerminalNode { return this.getToken(matchParser.AtShortanswer, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return matchParser.RULE_shortans; }
	// @Override
	public enterRule(listener: matchParserListener): void {
		if (listener.enterShortans) {
			listener.enterShortans(this);
		}
	}
	// @Override
	public exitRule(listener: matchParserListener): void {
		if (listener.exitShortans) {
			listener.exitShortans(this);
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
	public get ruleIndex(): number { return matchParser.RULE_resource; }
	// @Override
	public enterRule(listener: matchParserListener): void {
		if (listener.enterResource) {
			listener.enterResource(this);
		}
	}
	// @Override
	public exitRule(listener: matchParserListener): void {
		if (listener.exitResource) {
			listener.exitResource(this);
		}
	}
}


export class Pair_headingContext extends ParserRuleContext {
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
			return this.getTokens(matchParser.NL);
		} else {
			return this.getToken(matchParser.NL, i);
		}
	}
	public EQ(): TerminalNode | undefined { return this.tryGetToken(matchParser.EQ, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return matchParser.RULE_pair_heading; }
	// @Override
	public enterRule(listener: matchParserListener): void {
		if (listener.enterPair_heading) {
			listener.enterPair_heading(this);
		}
	}
	// @Override
	public exitRule(listener: matchParserListener): void {
		if (listener.exitPair_heading) {
			listener.exitPair_heading(this);
		}
	}
}


export class Pair_heading_multiContext extends ParserRuleContext {
	public key_title(): Key_titleContext {
		return this.getRuleContext(0, Key_titleContext);
	}
	public NL(): TerminalNode[];
	public NL(i: number): TerminalNode;
	public NL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(matchParser.NL);
		} else {
			return this.getToken(matchParser.NL, i);
		}
	}
	public value_title_multi(): Value_title_multiContext[];
	public value_title_multi(i: number): Value_title_multiContext;
	public value_title_multi(i?: number): Value_title_multiContext | Value_title_multiContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Value_title_multiContext);
		} else {
			return this.getRuleContext(i, Value_title_multiContext);
		}
	}
	public EQ(): TerminalNode[];
	public EQ(i: number): TerminalNode;
	public EQ(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(matchParser.EQ);
		} else {
			return this.getToken(matchParser.EQ, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return matchParser.RULE_pair_heading_multi; }
	// @Override
	public enterRule(listener: matchParserListener): void {
		if (listener.enterPair_heading_multi) {
			listener.enterPair_heading_multi(this);
		}
	}
	// @Override
	public exitRule(listener: matchParserListener): void {
		if (listener.exitPair_heading_multi) {
			listener.exitPair_heading_multi(this);
		}
	}
}


export class Key_titleContext extends ParserRuleContext {
	public OPHASH(): TerminalNode { return this.getToken(matchParser.OPHASH, 0); }
	public CL(): TerminalNode { return this.getToken(matchParser.CL, 0); }
	public s_and_w(): S_and_wContext | undefined {
		return this.tryGetRuleContext(0, S_and_wContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return matchParser.RULE_key_title; }
	// @Override
	public enterRule(listener: matchParserListener): void {
		if (listener.enterKey_title) {
			listener.enterKey_title(this);
		}
	}
	// @Override
	public exitRule(listener: matchParserListener): void {
		if (listener.exitKey_title) {
			listener.exitKey_title(this);
		}
	}
}


export class Value_titleContext extends ParserRuleContext {
	public OPHASH(): TerminalNode { return this.getToken(matchParser.OPHASH, 0); }
	public CL(): TerminalNode { return this.getToken(matchParser.CL, 0); }
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
	public get ruleIndex(): number { return matchParser.RULE_value_title; }
	// @Override
	public enterRule(listener: matchParserListener): void {
		if (listener.enterValue_title) {
			listener.enterValue_title(this);
		}
	}
	// @Override
	public exitRule(listener: matchParserListener): void {
		if (listener.exitValue_title) {
			listener.exitValue_title(this);
		}
	}
}


export class Value_title_multiContext extends ParserRuleContext {
	public OPHASH(): TerminalNode { return this.getToken(matchParser.OPHASH, 0); }
	public CL(): TerminalNode { return this.getToken(matchParser.CL, 0); }
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
	public get ruleIndex(): number { return matchParser.RULE_value_title_multi; }
	// @Override
	public enterRule(listener: matchParserListener): void {
		if (listener.enterValue_title_multi) {
			listener.enterValue_title_multi(this);
		}
	}
	// @Override
	public exitRule(listener: matchParserListener): void {
		if (listener.exitValue_title_multi) {
			listener.exitValue_title_multi(this);
		}
	}
}


export class PairsContext extends ParserRuleContext {
	public HSPL(): TerminalNode { return this.getToken(matchParser.HSPL, 0); }
	public NL(): TerminalNode { return this.getToken(matchParser.NL, 0); }
	public pqpair(): PqpairContext[];
	public pqpair(i: number): PqpairContext;
	public pqpair(i?: number): PqpairContext | PqpairContext[] {
		if (i === undefined) {
			return this.getRuleContexts(PqpairContext);
		} else {
			return this.getRuleContext(i, PqpairContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return matchParser.RULE_pairs; }
	// @Override
	public enterRule(listener: matchParserListener): void {
		if (listener.enterPairs) {
			listener.enterPairs(this);
		}
	}
	// @Override
	public exitRule(listener: matchParserListener): void {
		if (listener.exitPairs) {
			listener.exitPairs(this);
		}
	}
}


export class PqpairContext extends ParserRuleContext {
	public pquery(): PqueryContext | undefined {
		return this.tryGetRuleContext(0, PqueryContext);
	}
	public panswer(): PanswerContext[];
	public panswer(i: number): PanswerContext;
	public panswer(i?: number): PanswerContext | PanswerContext[] {
		if (i === undefined) {
			return this.getRuleContexts(PanswerContext);
		} else {
			return this.getRuleContext(i, PanswerContext);
		}
	}
	public NL(): TerminalNode[];
	public NL(i: number): TerminalNode;
	public NL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(matchParser.NL);
		} else {
			return this.getToken(matchParser.NL, i);
		}
	}
	public EQ(): TerminalNode[];
	public EQ(i: number): TerminalNode;
	public EQ(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(matchParser.EQ);
		} else {
			return this.getToken(matchParser.EQ, i);
		}
	}
	public HSPL(): TerminalNode | undefined { return this.tryGetToken(matchParser.HSPL, 0); }
	public or_(): Or_Context[];
	public or_(i: number): Or_Context;
	public or_(i?: number): Or_Context | Or_Context[] {
		if (i === undefined) {
			return this.getRuleContexts(Or_Context);
		} else {
			return this.getRuleContext(i, Or_Context);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return matchParser.RULE_pqpair; }
	// @Override
	public enterRule(listener: matchParserListener): void {
		if (listener.enterPqpair) {
			listener.enterPqpair(this);
		}
	}
	// @Override
	public exitRule(listener: matchParserListener): void {
		if (listener.exitPqpair) {
			listener.exitPqpair(this);
		}
	}
}


export class PqueryContext extends ParserRuleContext {
	public pquery__(): Pquery__Context[];
	public pquery__(i: number): Pquery__Context;
	public pquery__(i?: number): Pquery__Context | Pquery__Context[] {
		if (i === undefined) {
			return this.getRuleContexts(Pquery__Context);
		} else {
			return this.getRuleContext(i, Pquery__Context);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return matchParser.RULE_pquery; }
	// @Override
	public enterRule(listener: matchParserListener): void {
		if (listener.enterPquery) {
			listener.enterPquery(this);
		}
	}
	// @Override
	public exitRule(listener: matchParserListener): void {
		if (listener.exitPquery) {
			listener.exitPquery(this);
		}
	}
}


export class Pquery__Context extends ParserRuleContext {
	public NL(): TerminalNode[];
	public NL(i: number): TerminalNode;
	public NL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(matchParser.NL);
		} else {
			return this.getToken(matchParser.NL, i);
		}
	}
	public S(): TerminalNode[];
	public S(i: number): TerminalNode;
	public S(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(matchParser.S);
		} else {
			return this.getToken(matchParser.S, i);
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
			return this.getTokens(matchParser.COLON);
		} else {
			return this.getToken(matchParser.COLON, i);
		}
	}
	public longans(): LongansContext | undefined {
		return this.tryGetRuleContext(0, LongansContext);
	}
	public shortans(): ShortansContext | undefined {
		return this.tryGetRuleContext(0, ShortansContext);
	}
	public tense(): TenseContext | undefined {
		return this.tryGetRuleContext(0, TenseContext);
	}
	public example(): ExampleContext | undefined {
		return this.tryGetRuleContext(0, ExampleContext);
	}
	public instruction(): InstructionContext | undefined {
		return this.tryGetRuleContext(0, InstructionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return matchParser.RULE_pquery__; }
	// @Override
	public enterRule(listener: matchParserListener): void {
		if (listener.enterPquery__) {
			listener.enterPquery__(this);
		}
	}
	// @Override
	public exitRule(listener: matchParserListener): void {
		if (listener.exitPquery__) {
			listener.exitPquery__(this);
		}
	}
}


export class TenseContext extends ParserRuleContext {
	public TENSE(): TerminalNode { return this.getToken(matchParser.TENSE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return matchParser.RULE_tense; }
	// @Override
	public enterRule(listener: matchParserListener): void {
		if (listener.enterTense) {
			listener.enterTense(this);
		}
	}
	// @Override
	public exitRule(listener: matchParserListener): void {
		if (listener.exitTense) {
			listener.exitTense(this);
		}
	}
}


export class PanswerContext extends ParserRuleContext {
	public panswer__(): Panswer__Context {
		return this.getRuleContext(0, Panswer__Context);
	}
	public longans(): LongansContext | undefined {
		return this.tryGetRuleContext(0, LongansContext);
	}
	public shortans(): ShortansContext | undefined {
		return this.tryGetRuleContext(0, ShortansContext);
	}
	public example(): ExampleContext | undefined {
		return this.tryGetRuleContext(0, ExampleContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return matchParser.RULE_panswer; }
	// @Override
	public enterRule(listener: matchParserListener): void {
		if (listener.enterPanswer) {
			listener.enterPanswer(this);
		}
	}
	// @Override
	public exitRule(listener: matchParserListener): void {
		if (listener.exitPanswer) {
			listener.exitPanswer(this);
		}
	}
}


export class Panswer__Context extends ParserRuleContext {
	public example(): ExampleContext[];
	public example(i: number): ExampleContext;
	public example(i?: number): ExampleContext | ExampleContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExampleContext);
		} else {
			return this.getRuleContext(i, ExampleContext);
		}
	}
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
			return this.getTokens(matchParser.NL);
		} else {
			return this.getToken(matchParser.NL, i);
		}
	}
	public S(): TerminalNode[];
	public S(i: number): TerminalNode;
	public S(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(matchParser.S);
		} else {
			return this.getToken(matchParser.S, i);
		}
	}
	public OP(): TerminalNode[];
	public OP(i: number): TerminalNode;
	public OP(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(matchParser.OP);
		} else {
			return this.getToken(matchParser.OP, i);
		}
	}
	public CL(): TerminalNode[];
	public CL(i: number): TerminalNode;
	public CL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(matchParser.CL);
		} else {
			return this.getToken(matchParser.CL, i);
		}
	}
	public DBLCOLON(): TerminalNode[];
	public DBLCOLON(i: number): TerminalNode;
	public DBLCOLON(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(matchParser.DBLCOLON);
		} else {
			return this.getToken(matchParser.DBLCOLON, i);
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
	public instruction(): InstructionContext[];
	public instruction(i: number): InstructionContext;
	public instruction(i?: number): InstructionContext | InstructionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(InstructionContext);
		} else {
			return this.getRuleContext(i, InstructionContext);
		}
	}
	public opdoll(): OpdollContext | undefined {
		return this.tryGetRuleContext(0, OpdollContext);
	}
	public DOT(): TerminalNode[];
	public DOT(i: number): TerminalNode;
	public DOT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(matchParser.DOT);
		} else {
			return this.getToken(matchParser.DOT, i);
		}
	}
	public COLON(): TerminalNode[];
	public COLON(i: number): TerminalNode;
	public COLON(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(matchParser.COLON);
		} else {
			return this.getToken(matchParser.COLON, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return matchParser.RULE_panswer__; }
	// @Override
	public enterRule(listener: matchParserListener): void {
		if (listener.enterPanswer__) {
			listener.enterPanswer__(this);
		}
	}
	// @Override
	public exitRule(listener: matchParserListener): void {
		if (listener.exitPanswer__) {
			listener.exitPanswer__(this);
		}
	}
}


export class Pair_imagesContext extends ParserRuleContext {
	public HSPL(): TerminalNode { return this.getToken(matchParser.HSPL, 0); }
	public NL(): TerminalNode { return this.getToken(matchParser.NL, 0); }
	public pair_image(): Pair_imageContext[];
	public pair_image(i: number): Pair_imageContext;
	public pair_image(i?: number): Pair_imageContext | Pair_imageContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Pair_imageContext);
		} else {
			return this.getRuleContext(i, Pair_imageContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return matchParser.RULE_pair_images; }
	// @Override
	public enterRule(listener: matchParserListener): void {
		if (listener.enterPair_images) {
			listener.enterPair_images(this);
		}
	}
	// @Override
	public exitRule(listener: matchParserListener): void {
		if (listener.exitPair_images) {
			listener.exitPair_images(this);
		}
	}
}


export class Pair_imageContext extends ParserRuleContext {
	public pimagebit(): PimagebitContext {
		return this.getRuleContext(0, PimagebitContext);
	}
	public panswer(): PanswerContext {
		return this.getRuleContext(0, PanswerContext);
	}
	public NL(): TerminalNode[];
	public NL(i: number): TerminalNode;
	public NL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(matchParser.NL);
		} else {
			return this.getToken(matchParser.NL, i);
		}
	}
	public EQ(): TerminalNode | undefined { return this.tryGetToken(matchParser.EQ, 0); }
	public HSPL(): TerminalNode | undefined { return this.tryGetToken(matchParser.HSPL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return matchParser.RULE_pair_image; }
	// @Override
	public enterRule(listener: matchParserListener): void {
		if (listener.enterPair_image) {
			listener.enterPair_image(this);
		}
	}
	// @Override
	public exitRule(listener: matchParserListener): void {
		if (listener.exitPair_image) {
			listener.exitPair_image(this);
		}
	}
}


export class Pair_audiosContext extends ParserRuleContext {
	public HSPL(): TerminalNode { return this.getToken(matchParser.HSPL, 0); }
	public NL(): TerminalNode { return this.getToken(matchParser.NL, 0); }
	public pair_audio(): Pair_audioContext[];
	public pair_audio(i: number): Pair_audioContext;
	public pair_audio(i?: number): Pair_audioContext | Pair_audioContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Pair_audioContext);
		} else {
			return this.getRuleContext(i, Pair_audioContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return matchParser.RULE_pair_audios; }
	// @Override
	public enterRule(listener: matchParserListener): void {
		if (listener.enterPair_audios) {
			listener.enterPair_audios(this);
		}
	}
	// @Override
	public exitRule(listener: matchParserListener): void {
		if (listener.exitPair_audios) {
			listener.exitPair_audios(this);
		}
	}
}


export class Pair_audioContext extends ParserRuleContext {
	public paudiobit(): PaudiobitContext {
		return this.getRuleContext(0, PaudiobitContext);
	}
	public panswer(): PanswerContext {
		return this.getRuleContext(0, PanswerContext);
	}
	public NL(): TerminalNode[];
	public NL(i: number): TerminalNode;
	public NL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(matchParser.NL);
		} else {
			return this.getToken(matchParser.NL, i);
		}
	}
	public EQ(): TerminalNode | undefined { return this.tryGetToken(matchParser.EQ, 0); }
	public HSPL(): TerminalNode | undefined { return this.tryGetToken(matchParser.HSPL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return matchParser.RULE_pair_audio; }
	// @Override
	public enterRule(listener: matchParserListener): void {
		if (listener.enterPair_audio) {
			listener.enterPair_audio(this);
		}
	}
	// @Override
	public exitRule(listener: matchParserListener): void {
		if (listener.exitPair_audio) {
			listener.exitPair_audio(this);
		}
	}
}


export class Pair_multivalsContext extends ParserRuleContext {
	public HSPL(): TerminalNode { return this.getToken(matchParser.HSPL, 0); }
	public NL(): TerminalNode { return this.getToken(matchParser.NL, 0); }
	public pair_multival(): Pair_multivalContext[];
	public pair_multival(i: number): Pair_multivalContext;
	public pair_multival(i?: number): Pair_multivalContext | Pair_multivalContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Pair_multivalContext);
		} else {
			return this.getRuleContext(i, Pair_multivalContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return matchParser.RULE_pair_multivals; }
	// @Override
	public enterRule(listener: matchParserListener): void {
		if (listener.enterPair_multivals) {
			listener.enterPair_multivals(this);
		}
	}
	// @Override
	public exitRule(listener: matchParserListener): void {
		if (listener.exitPair_multivals) {
			listener.exitPair_multivals(this);
		}
	}
}


export class Pair_multivalContext extends ParserRuleContext {
	public mpquery(): MpqueryContext {
		return this.getRuleContext(0, MpqueryContext);
	}
	public HSPL(): TerminalNode | undefined { return this.tryGetToken(matchParser.HSPL, 0); }
	public mpanswer(): MpanswerContext[];
	public mpanswer(i: number): MpanswerContext;
	public mpanswer(i?: number): MpanswerContext | MpanswerContext[] {
		if (i === undefined) {
			return this.getRuleContexts(MpanswerContext);
		} else {
			return this.getRuleContext(i, MpanswerContext);
		}
	}
	public NL(): TerminalNode[];
	public NL(i: number): TerminalNode;
	public NL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(matchParser.NL);
		} else {
			return this.getToken(matchParser.NL, i);
		}
	}
	public EQ(): TerminalNode[];
	public EQ(i: number): TerminalNode;
	public EQ(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(matchParser.EQ);
		} else {
			return this.getToken(matchParser.EQ, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return matchParser.RULE_pair_multival; }
	// @Override
	public enterRule(listener: matchParserListener): void {
		if (listener.enterPair_multival) {
			listener.enterPair_multival(this);
		}
	}
	// @Override
	public exitRule(listener: matchParserListener): void {
		if (listener.exitPair_multival) {
			listener.exitPair_multival(this);
		}
	}
}


export class Pairmultival_imageContext extends ParserRuleContext {
	public HSPL(): TerminalNode | undefined { return this.tryGetToken(matchParser.HSPL, 0); }
	public imagebit(): ImagebitContext | undefined {
		return this.tryGetRuleContext(0, ImagebitContext);
	}
	public EQ(): TerminalNode[];
	public EQ(i: number): TerminalNode;
	public EQ(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(matchParser.EQ);
		} else {
			return this.getToken(matchParser.EQ, i);
		}
	}
	public mpanswer(): MpanswerContext[];
	public mpanswer(i: number): MpanswerContext;
	public mpanswer(i?: number): MpanswerContext | MpanswerContext[] {
		if (i === undefined) {
			return this.getRuleContexts(MpanswerContext);
		} else {
			return this.getRuleContext(i, MpanswerContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return matchParser.RULE_pairmultival_image; }
	// @Override
	public enterRule(listener: matchParserListener): void {
		if (listener.enterPairmultival_image) {
			listener.enterPairmultival_image(this);
		}
	}
	// @Override
	public exitRule(listener: matchParserListener): void {
		if (listener.exitPairmultival_image) {
			listener.exitPairmultival_image(this);
		}
	}
}


export class Pairmultival_audioContext extends ParserRuleContext {
	public HSPL(): TerminalNode[];
	public HSPL(i: number): TerminalNode;
	public HSPL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(matchParser.HSPL);
		} else {
			return this.getToken(matchParser.HSPL, i);
		}
	}
	public audiobit(): AudiobitContext[];
	public audiobit(i: number): AudiobitContext;
	public audiobit(i?: number): AudiobitContext | AudiobitContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AudiobitContext);
		} else {
			return this.getRuleContext(i, AudiobitContext);
		}
	}
	public EQ(): TerminalNode[];
	public EQ(i: number): TerminalNode;
	public EQ(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(matchParser.EQ);
		} else {
			return this.getToken(matchParser.EQ, i);
		}
	}
	public mpanswer(): MpanswerContext[];
	public mpanswer(i: number): MpanswerContext;
	public mpanswer(i?: number): MpanswerContext | MpanswerContext[] {
		if (i === undefined) {
			return this.getRuleContexts(MpanswerContext);
		} else {
			return this.getRuleContext(i, MpanswerContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return matchParser.RULE_pairmultival_audio; }
	// @Override
	public enterRule(listener: matchParserListener): void {
		if (listener.enterPairmultival_audio) {
			listener.enterPairmultival_audio(this);
		}
	}
	// @Override
	public exitRule(listener: matchParserListener): void {
		if (listener.exitPairmultival_audio) {
			listener.exitPairmultival_audio(this);
		}
	}
}


export class MpqueryContext extends ParserRuleContext {
	public mpquery__(): Mpquery__Context[];
	public mpquery__(i: number): Mpquery__Context;
	public mpquery__(i?: number): Mpquery__Context | Mpquery__Context[] {
		if (i === undefined) {
			return this.getRuleContexts(Mpquery__Context);
		} else {
			return this.getRuleContext(i, Mpquery__Context);
		}
	}
	public NL(): TerminalNode[];
	public NL(i: number): TerminalNode;
	public NL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(matchParser.NL);
		} else {
			return this.getToken(matchParser.NL, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return matchParser.RULE_mpquery; }
	// @Override
	public enterRule(listener: matchParserListener): void {
		if (listener.enterMpquery) {
			listener.enterMpquery(this);
		}
	}
	// @Override
	public exitRule(listener: matchParserListener): void {
		if (listener.exitMpquery) {
			listener.exitMpquery(this);
		}
	}
}


export class Mpquery__Context extends ParserRuleContext {
	public NL(): TerminalNode[];
	public NL(i: number): TerminalNode;
	public NL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(matchParser.NL);
		} else {
			return this.getToken(matchParser.NL, i);
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
			return this.getTokens(matchParser.COLON);
		} else {
			return this.getToken(matchParser.COLON, i);
		}
	}
	public example(): ExampleContext | undefined {
		return this.tryGetRuleContext(0, ExampleContext);
	}
	public LIST_LINE(): TerminalNode | undefined { return this.tryGetToken(matchParser.LIST_LINE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return matchParser.RULE_mpquery__; }
	// @Override
	public enterRule(listener: matchParserListener): void {
		if (listener.enterMpquery__) {
			listener.enterMpquery__(this);
		}
	}
	// @Override
	public exitRule(listener: matchParserListener): void {
		if (listener.exitMpquery__) {
			listener.exitMpquery__(this);
		}
	}
}


export class MpanswerContext extends ParserRuleContext {
	public mpanswer__(): Mpanswer__Context[];
	public mpanswer__(i: number): Mpanswer__Context;
	public mpanswer__(i?: number): Mpanswer__Context | Mpanswer__Context[] {
		if (i === undefined) {
			return this.getRuleContexts(Mpanswer__Context);
		} else {
			return this.getRuleContext(i, Mpanswer__Context);
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
	public shortans(): ShortansContext[];
	public shortans(i: number): ShortansContext;
	public shortans(i?: number): ShortansContext | ShortansContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ShortansContext);
		} else {
			return this.getRuleContext(i, ShortansContext);
		}
	}
	public or_(): Or_Context[];
	public or_(i: number): Or_Context;
	public or_(i?: number): Or_Context | Or_Context[] {
		if (i === undefined) {
			return this.getRuleContexts(Or_Context);
		} else {
			return this.getRuleContext(i, Or_Context);
		}
	}
	public NL(): TerminalNode[];
	public NL(i: number): TerminalNode;
	public NL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(matchParser.NL);
		} else {
			return this.getToken(matchParser.NL, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return matchParser.RULE_mpanswer; }
	// @Override
	public enterRule(listener: matchParserListener): void {
		if (listener.enterMpanswer) {
			listener.enterMpanswer(this);
		}
	}
	// @Override
	public exitRule(listener: matchParserListener): void {
		if (listener.exitMpanswer) {
			listener.exitMpanswer(this);
		}
	}
}


export class Mpanswer__Context extends ParserRuleContext {
	public example(): ExampleContext[];
	public example(i: number): ExampleContext;
	public example(i?: number): ExampleContext | ExampleContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExampleContext);
		} else {
			return this.getRuleContext(i, ExampleContext);
		}
	}
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
			return this.getTokens(matchParser.NL);
		} else {
			return this.getToken(matchParser.NL, i);
		}
	}
	public S(): TerminalNode[];
	public S(i: number): TerminalNode;
	public S(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(matchParser.S);
		} else {
			return this.getToken(matchParser.S, i);
		}
	}
	public OP(): TerminalNode[];
	public OP(i: number): TerminalNode;
	public OP(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(matchParser.OP);
		} else {
			return this.getToken(matchParser.OP, i);
		}
	}
	public CL(): TerminalNode[];
	public CL(i: number): TerminalNode;
	public CL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(matchParser.CL);
		} else {
			return this.getToken(matchParser.CL, i);
		}
	}
	public DBLCOLON(): TerminalNode[];
	public DBLCOLON(i: number): TerminalNode;
	public DBLCOLON(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(matchParser.DBLCOLON);
		} else {
			return this.getToken(matchParser.DBLCOLON, i);
		}
	}
	public opdoll(): OpdollContext | undefined {
		return this.tryGetRuleContext(0, OpdollContext);
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
	public DOT(): TerminalNode[];
	public DOT(i: number): TerminalNode;
	public DOT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(matchParser.DOT);
		} else {
			return this.getToken(matchParser.DOT, i);
		}
	}
	public COLON(): TerminalNode[];
	public COLON(i: number): TerminalNode;
	public COLON(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(matchParser.COLON);
		} else {
			return this.getToken(matchParser.COLON, i);
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
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return matchParser.RULE_mpanswer__; }
	// @Override
	public enterRule(listener: matchParserListener): void {
		if (listener.enterMpanswer__) {
			listener.enterMpanswer__(this);
		}
	}
	// @Override
	public exitRule(listener: matchParserListener): void {
		if (listener.exitMpanswer__) {
			listener.exitMpanswer__(this);
		}
	}
}


export class PimagebitContext extends ParserRuleContext {
	public pimage_one(): Pimage_oneContext {
		return this.getRuleContext(0, Pimage_oneContext);
	}
	public image_chained4match(): Image_chained4matchContext[];
	public image_chained4match(i: number): Image_chained4matchContext;
	public image_chained4match(i?: number): Image_chained4matchContext | Image_chained4matchContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Image_chained4matchContext);
		} else {
			return this.getRuleContext(i, Image_chained4matchContext);
		}
	}
	public OPATALT(): TerminalNode | undefined { return this.tryGetToken(matchParser.OPATALT, 0); }
	public words(): WordsContext | undefined {
		return this.tryGetRuleContext(0, WordsContext);
	}
	public CL(): TerminalNode[];
	public CL(i: number): TerminalNode;
	public CL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(matchParser.CL);
		} else {
			return this.getToken(matchParser.CL, i);
		}
	}
	public OpAtCaption(): TerminalNode | undefined { return this.tryGetToken(matchParser.OpAtCaption, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return matchParser.RULE_pimagebit; }
	// @Override
	public enterRule(listener: matchParserListener): void {
		if (listener.enterPimagebit) {
			listener.enterPimagebit(this);
		}
	}
	// @Override
	public exitRule(listener: matchParserListener): void {
		if (listener.exitPimagebit) {
			listener.exitPimagebit(this);
		}
	}
}


export class Pimage_oneContext extends ParserRuleContext {
	public image_one(): Image_oneContext {
		return this.getRuleContext(0, Image_oneContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return matchParser.RULE_pimage_one; }
	// @Override
	public enterRule(listener: matchParserListener): void {
		if (listener.enterPimage_one) {
			listener.enterPimage_one(this);
		}
	}
	// @Override
	public exitRule(listener: matchParserListener): void {
		if (listener.exitPimage_one) {
			listener.exitPimage_one(this);
		}
	}
}


export class PaudiobitContext extends ParserRuleContext {
	public op_audio_format(): Op_audio_formatContext {
		return this.getRuleContext(0, Op_audio_formatContext);
	}
	public COLON(): TerminalNode { return this.getToken(matchParser.COLON, 0); }
	public url(): UrlContext {
		return this.getRuleContext(0, UrlContext);
	}
	public CL(): TerminalNode[];
	public CL(i: number): TerminalNode;
	public CL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(matchParser.CL);
		} else {
			return this.getToken(matchParser.CL, i);
		}
	}
	public OPATALT(): TerminalNode | undefined { return this.tryGetToken(matchParser.OPATALT, 0); }
	public words(): WordsContext | undefined {
		return this.tryGetRuleContext(0, WordsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return matchParser.RULE_paudiobit; }
	// @Override
	public enterRule(listener: matchParserListener): void {
		if (listener.enterPaudiobit) {
			listener.enterPaudiobit(this);
		}
	}
	// @Override
	public exitRule(listener: matchParserListener): void {
		if (listener.exitPaudiobit) {
			listener.exitPaudiobit(this);
		}
	}
}


export class Bullet_itemContext extends ParserRuleContext {
	public OPBUL(): TerminalNode { return this.getToken(matchParser.OPBUL, 0); }
	public s_and_w(): S_and_wContext {
		return this.getRuleContext(0, S_and_wContext);
	}
	public CL(): TerminalNode { return this.getToken(matchParser.CL, 0); }
	public atpoint(): AtpointContext | undefined {
		return this.tryGetRuleContext(0, AtpointContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return matchParser.RULE_bullet_item; }
	// @Override
	public enterRule(listener: matchParserListener): void {
		if (listener.enterBullet_item) {
			listener.enterBullet_item(this);
		}
	}
	// @Override
	public exitRule(listener: matchParserListener): void {
		if (listener.exitBullet_item) {
			listener.exitBullet_item(this);
		}
	}
}


export class AtpointContext extends ParserRuleContext {
	public AtPoints(): TerminalNode { return this.getToken(matchParser.AtPoints, 0); }
	public NUMERIC(): TerminalNode { return this.getToken(matchParser.NUMERIC, 0); }
	public CL(): TerminalNode { return this.getToken(matchParser.CL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return matchParser.RULE_atpoint; }
	// @Override
	public enterRule(listener: matchParserListener): void {
		if (listener.enterAtpoint) {
			listener.enterAtpoint(this);
		}
	}
	// @Override
	public exitRule(listener: matchParserListener): void {
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
			return this.getTokens(matchParser.ColonText);
		} else {
			return this.getToken(matchParser.ColonText, i);
		}
	}
	public ColonJson(): TerminalNode[];
	public ColonJson(i: number): TerminalNode;
	public ColonJson(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(matchParser.ColonJson);
		} else {
			return this.getToken(matchParser.ColonJson, i);
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
	public get ruleIndex(): number { return matchParser.RULE_format; }
	// @Override
	public enterRule(listener: matchParserListener): void {
		if (listener.enterFormat) {
			listener.enterFormat(this);
		}
	}
	// @Override
	public exitRule(listener: matchParserListener): void {
		if (listener.exitFormat) {
			listener.exitFormat(this);
		}
	}
}


export class Resource_formatContext extends ParserRuleContext {
	public BitmarkMinus(): TerminalNode | undefined { return this.tryGetToken(matchParser.BitmarkMinus, 0); }
	public BitmarkPlus(): TerminalNode | undefined { return this.tryGetToken(matchParser.BitmarkPlus, 0); }
	public Prosemirror(): TerminalNode | undefined { return this.tryGetToken(matchParser.Prosemirror, 0); }
	public Placeholder(): TerminalNode | undefined { return this.tryGetToken(matchParser.Placeholder, 0); }
	public ColonJson(): TerminalNode | undefined { return this.tryGetToken(matchParser.ColonJson, 0); }
	public AmpArticle(): TerminalNode | undefined { return this.tryGetToken(matchParser.AmpArticle, 0); }
	public AmpDocument(): TerminalNode | undefined { return this.tryGetToken(matchParser.AmpDocument, 0); }
	public AmpWebsite(): TerminalNode | undefined { return this.tryGetToken(matchParser.AmpWebsite, 0); }
	public AmpStillImageFilm(): TerminalNode | undefined { return this.tryGetToken(matchParser.AmpStillImageFilm, 0); }
	public AmpAudioLink(): TerminalNode | undefined { return this.tryGetToken(matchParser.AmpAudioLink, 0); }
	public AmpImageLink(): TerminalNode | undefined { return this.tryGetToken(matchParser.AmpImageLink, 0); }
	public AmpVideoLink(): TerminalNode | undefined { return this.tryGetToken(matchParser.AmpVideoLink, 0); }
	public AmpArticleLink(): TerminalNode | undefined { return this.tryGetToken(matchParser.AmpArticleLink, 0); }
	public AmpDocumentLink(): TerminalNode | undefined { return this.tryGetToken(matchParser.AmpDocumentLink, 0); }
	public AmpAppLink(): TerminalNode | undefined { return this.tryGetToken(matchParser.AmpAppLink, 0); }
	public AmpWebsiteLink(): TerminalNode | undefined { return this.tryGetToken(matchParser.AmpWebsiteLink, 0); }
	public AmpStillImageFilmLink(): TerminalNode | undefined { return this.tryGetToken(matchParser.AmpStillImageFilmLink, 0); }
	public AmpVideoEmbed(): TerminalNode | undefined { return this.tryGetToken(matchParser.AmpVideoEmbed, 0); }
	public AmpAudioEmbed(): TerminalNode | undefined { return this.tryGetToken(matchParser.AmpAudioEmbed, 0); }
	public AmpDocumentEmbed(): TerminalNode | undefined { return this.tryGetToken(matchParser.AmpDocumentEmbed, 0); }
	public AmpStillImageFilmEmbed(): TerminalNode | undefined { return this.tryGetToken(matchParser.AmpStillImageFilmEmbed, 0); }
	public AmpDocumentDownload(): TerminalNode | undefined { return this.tryGetToken(matchParser.AmpDocumentDownload, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return matchParser.RULE_resource_format; }
	// @Override
	public enterRule(listener: matchParserListener): void {
		if (listener.enterResource_format) {
			listener.enterResource_format(this);
		}
	}
	// @Override
	public exitRule(listener: matchParserListener): void {
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
	public AmpPdf(): TerminalNode | undefined { return this.tryGetToken(matchParser.AmpPdf, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return matchParser.RULE_resource_format_extra; }
	// @Override
	public enterRule(listener: matchParserListener): void {
		if (listener.enterResource_format_extra) {
			listener.enterResource_format_extra(this);
		}
	}
	// @Override
	public exitRule(listener: matchParserListener): void {
		if (listener.exitResource_format_extra) {
			listener.exitResource_format_extra(this);
		}
	}
}


export class Format2Context extends ParserRuleContext {
	public BitmarkMinus(): TerminalNode | undefined { return this.tryGetToken(matchParser.BitmarkMinus, 0); }
	public BitmarkPlus(): TerminalNode | undefined { return this.tryGetToken(matchParser.BitmarkPlus, 0); }
	public ColonText(): TerminalNode | undefined { return this.tryGetToken(matchParser.ColonText, 0); }
	public Placeholder(): TerminalNode | undefined { return this.tryGetToken(matchParser.Placeholder, 0); }
	public ColonJson(): TerminalNode | undefined { return this.tryGetToken(matchParser.ColonJson, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return matchParser.RULE_format2; }
	// @Override
	public enterRule(listener: matchParserListener): void {
		if (listener.enterFormat2) {
			listener.enterFormat2(this);
		}
	}
	// @Override
	public exitRule(listener: matchParserListener): void {
		if (listener.exitFormat2) {
			listener.exitFormat2(this);
		}
	}
}


export class Image_formatContext extends ParserRuleContext {
	public AmpImage(): TerminalNode | undefined { return this.tryGetToken(matchParser.AmpImage, 0); }
	public Image_type(): TerminalNode | undefined { return this.tryGetToken(matchParser.Image_type, 0); }
	public DotArticleAtt(): TerminalNode | undefined { return this.tryGetToken(matchParser.DotArticleAtt, 0); }
	public AmpImageLink(): TerminalNode | undefined { return this.tryGetToken(matchParser.AmpImageLink, 0); }
	public AmpImageZoom(): TerminalNode | undefined { return this.tryGetToken(matchParser.AmpImageZoom, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return matchParser.RULE_image_format; }
	// @Override
	public enterRule(listener: matchParserListener): void {
		if (listener.enterImage_format) {
			listener.enterImage_format(this);
		}
	}
	// @Override
	public exitRule(listener: matchParserListener): void {
		if (listener.exitImage_format) {
			listener.exitImage_format(this);
		}
	}
}


export class Video_formatContext extends ParserRuleContext {
	public AmpVideo(): TerminalNode | undefined { return this.tryGetToken(matchParser.AmpVideo, 0); }
	public AmpVideoLink(): TerminalNode | undefined { return this.tryGetToken(matchParser.AmpVideoLink, 0); }
	public AmpVideoEmbed(): TerminalNode | undefined { return this.tryGetToken(matchParser.AmpVideoEmbed, 0); }
	public COLON(): TerminalNode | undefined { return this.tryGetToken(matchParser.COLON, 0); }
	public Video_type(): TerminalNode | undefined { return this.tryGetToken(matchParser.Video_type, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return matchParser.RULE_video_format; }
	// @Override
	public enterRule(listener: matchParserListener): void {
		if (listener.enterVideo_format) {
			listener.enterVideo_format(this);
		}
	}
	// @Override
	public exitRule(listener: matchParserListener): void {
		if (listener.exitVideo_format) {
			listener.exitVideo_format(this);
		}
	}
}


export class Article_formatContext extends ParserRuleContext {
	public AmpArticle(): TerminalNode | undefined { return this.tryGetToken(matchParser.AmpArticle, 0); }
	public AmpArticleLink(): TerminalNode | undefined { return this.tryGetToken(matchParser.AmpArticleLink, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return matchParser.RULE_article_format; }
	// @Override
	public enterRule(listener: matchParserListener): void {
		if (listener.enterArticle_format) {
			listener.enterArticle_format(this);
		}
	}
	// @Override
	public exitRule(listener: matchParserListener): void {
		if (listener.exitArticle_format) {
			listener.exitArticle_format(this);
		}
	}
}


export class Document_formatContext extends ParserRuleContext {
	public AmpDocument(): TerminalNode | undefined { return this.tryGetToken(matchParser.AmpDocument, 0); }
	public AmpDocumentLink(): TerminalNode | undefined { return this.tryGetToken(matchParser.AmpDocumentLink, 0); }
	public AmpDocumentDownload(): TerminalNode | undefined { return this.tryGetToken(matchParser.AmpDocumentDownload, 0); }
	public AmpDocumentEmbed(): TerminalNode | undefined { return this.tryGetToken(matchParser.AmpDocumentEmbed, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return matchParser.RULE_document_format; }
	// @Override
	public enterRule(listener: matchParserListener): void {
		if (listener.enterDocument_format) {
			listener.enterDocument_format(this);
		}
	}
	// @Override
	public exitRule(listener: matchParserListener): void {
		if (listener.exitDocument_format) {
			listener.exitDocument_format(this);
		}
	}
}


export class App_formatContext extends ParserRuleContext {
	public AmpApp(): TerminalNode | undefined { return this.tryGetToken(matchParser.AmpApp, 0); }
	public AmpAppLink(): TerminalNode | undefined { return this.tryGetToken(matchParser.AmpAppLink, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return matchParser.RULE_app_format; }
	// @Override
	public enterRule(listener: matchParserListener): void {
		if (listener.enterApp_format) {
			listener.enterApp_format(this);
		}
	}
	// @Override
	public exitRule(listener: matchParserListener): void {
		if (listener.exitApp_format) {
			listener.exitApp_format(this);
		}
	}
}


export class Website_formatContext extends ParserRuleContext {
	public AmpWebsite(): TerminalNode | undefined { return this.tryGetToken(matchParser.AmpWebsite, 0); }
	public AmpWebsiteLink(): TerminalNode | undefined { return this.tryGetToken(matchParser.AmpWebsiteLink, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return matchParser.RULE_website_format; }
	// @Override
	public enterRule(listener: matchParserListener): void {
		if (listener.enterWebsite_format) {
			listener.enterWebsite_format(this);
		}
	}
	// @Override
	public exitRule(listener: matchParserListener): void {
		if (listener.exitWebsite_format) {
			listener.exitWebsite_format(this);
		}
	}
}


export class Stillimagefilm_formatContext extends ParserRuleContext {
	public AmpStillImageFilm(): TerminalNode | undefined { return this.tryGetToken(matchParser.AmpStillImageFilm, 0); }
	public AmpStillImageFilmLink(): TerminalNode | undefined { return this.tryGetToken(matchParser.AmpStillImageFilmLink, 0); }
	public AmpStillImageFilmEmbed(): TerminalNode | undefined { return this.tryGetToken(matchParser.AmpStillImageFilmEmbed, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return matchParser.RULE_stillimagefilm_format; }
	// @Override
	public enterRule(listener: matchParserListener): void {
		if (listener.enterStillimagefilm_format) {
			listener.enterStillimagefilm_format(this);
		}
	}
	// @Override
	public exitRule(listener: matchParserListener): void {
		if (listener.exitStillimagefilm_format) {
			listener.exitStillimagefilm_format(this);
		}
	}
}


export class Op_article_formatContext extends ParserRuleContext {
	public OpAmpArticleLink(): TerminalNode | undefined { return this.tryGetToken(matchParser.OpAmpArticleLink, 0); }
	public OpAmpArticle(): TerminalNode | undefined { return this.tryGetToken(matchParser.OpAmpArticle, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return matchParser.RULE_op_article_format; }
	// @Override
	public enterRule(listener: matchParserListener): void {
		if (listener.enterOp_article_format) {
			listener.enterOp_article_format(this);
		}
	}
	// @Override
	public exitRule(listener: matchParserListener): void {
		if (listener.exitOp_article_format) {
			listener.exitOp_article_format(this);
		}
	}
}


export class Op_document_formatContext extends ParserRuleContext {
	public OpAmpDocumentLink(): TerminalNode | undefined { return this.tryGetToken(matchParser.OpAmpDocumentLink, 0); }
	public OpAmpDocument(): TerminalNode | undefined { return this.tryGetToken(matchParser.OpAmpDocument, 0); }
	public OpAmpDocumentDownload(): TerminalNode | undefined { return this.tryGetToken(matchParser.OpAmpDocumentDownload, 0); }
	public OpAmpDocumentEmbed(): TerminalNode | undefined { return this.tryGetToken(matchParser.OpAmpDocumentEmbed, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return matchParser.RULE_op_document_format; }
	// @Override
	public enterRule(listener: matchParserListener): void {
		if (listener.enterOp_document_format) {
			listener.enterOp_document_format(this);
		}
	}
	// @Override
	public exitRule(listener: matchParserListener): void {
		if (listener.exitOp_document_format) {
			listener.exitOp_document_format(this);
		}
	}
}


export class Op_app_formatContext extends ParserRuleContext {
	public OpAmpApp(): TerminalNode | undefined { return this.tryGetToken(matchParser.OpAmpApp, 0); }
	public OpAmpAppLink(): TerminalNode | undefined { return this.tryGetToken(matchParser.OpAmpAppLink, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return matchParser.RULE_op_app_format; }
	// @Override
	public enterRule(listener: matchParserListener): void {
		if (listener.enterOp_app_format) {
			listener.enterOp_app_format(this);
		}
	}
	// @Override
	public exitRule(listener: matchParserListener): void {
		if (listener.exitOp_app_format) {
			listener.exitOp_app_format(this);
		}
	}
}


export class Op_website_formatContext extends ParserRuleContext {
	public OpAmpWebsite(): TerminalNode | undefined { return this.tryGetToken(matchParser.OpAmpWebsite, 0); }
	public OpAmpWebsiteLink(): TerminalNode | undefined { return this.tryGetToken(matchParser.OpAmpWebsiteLink, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return matchParser.RULE_op_website_format; }
	// @Override
	public enterRule(listener: matchParserListener): void {
		if (listener.enterOp_website_format) {
			listener.enterOp_website_format(this);
		}
	}
	// @Override
	public exitRule(listener: matchParserListener): void {
		if (listener.exitOp_website_format) {
			listener.exitOp_website_format(this);
		}
	}
}


export class Op_video_formatContext extends ParserRuleContext {
	public OpAmpVideo(): TerminalNode | undefined { return this.tryGetToken(matchParser.OpAmpVideo, 0); }
	public COLON(): TerminalNode | undefined { return this.tryGetToken(matchParser.COLON, 0); }
	public Video_type(): TerminalNode | undefined { return this.tryGetToken(matchParser.Video_type, 0); }
	public OpAmpVideoLink(): TerminalNode | undefined { return this.tryGetToken(matchParser.OpAmpVideoLink, 0); }
	public OpAmpVideoEmbed(): TerminalNode | undefined { return this.tryGetToken(matchParser.OpAmpVideoEmbed, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return matchParser.RULE_op_video_format; }
	// @Override
	public enterRule(listener: matchParserListener): void {
		if (listener.enterOp_video_format) {
			listener.enterOp_video_format(this);
		}
	}
	// @Override
	public exitRule(listener: matchParserListener): void {
		if (listener.exitOp_video_format) {
			listener.exitOp_video_format(this);
		}
	}
}


export class Op_stillimagefilm_formatContext extends ParserRuleContext {
	public OpAmpStillImageFilm(): TerminalNode | undefined { return this.tryGetToken(matchParser.OpAmpStillImageFilm, 0); }
	public OpAmpStillImageFilmLink(): TerminalNode | undefined { return this.tryGetToken(matchParser.OpAmpStillImageFilmLink, 0); }
	public OpAmpStillImageFilmEmbed(): TerminalNode | undefined { return this.tryGetToken(matchParser.OpAmpStillImageFilmEmbed, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return matchParser.RULE_op_stillimagefilm_format; }
	// @Override
	public enterRule(listener: matchParserListener): void {
		if (listener.enterOp_stillimagefilm_format) {
			listener.enterOp_stillimagefilm_format(this);
		}
	}
	// @Override
	public exitRule(listener: matchParserListener): void {
		if (listener.exitOp_stillimagefilm_format) {
			listener.exitOp_stillimagefilm_format(this);
		}
	}
}


export class ArticlebitContext extends ParserRuleContext {
	public op_article_format(): Op_article_formatContext | undefined {
		return this.tryGetRuleContext(0, Op_article_formatContext);
	}
	public COLON(): TerminalNode | undefined { return this.tryGetToken(matchParser.COLON, 0); }
	public url(): UrlContext | undefined {
		return this.tryGetRuleContext(0, UrlContext);
	}
	public CL(): TerminalNode | undefined { return this.tryGetToken(matchParser.CL, 0); }
	public ArticleText(): TerminalNode | undefined { return this.tryGetToken(matchParser.ArticleText, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return matchParser.RULE_articlebit; }
	// @Override
	public enterRule(listener: matchParserListener): void {
		if (listener.enterArticlebit) {
			listener.enterArticlebit(this);
		}
	}
	// @Override
	public exitRule(listener: matchParserListener): void {
		if (listener.exitArticlebit) {
			listener.exitArticlebit(this);
		}
	}
}


export class DocumentbitContext extends ParserRuleContext {
	public op_document_format(): Op_document_formatContext {
		return this.getRuleContext(0, Op_document_formatContext);
	}
	public COLON(): TerminalNode { return this.getToken(matchParser.COLON, 0); }
	public url(): UrlContext {
		return this.getRuleContext(0, UrlContext);
	}
	public CL(): TerminalNode[];
	public CL(i: number): TerminalNode;
	public CL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(matchParser.CL);
		} else {
			return this.getToken(matchParser.CL, i);
		}
	}
	public OPATALT(): TerminalNode | undefined { return this.tryGetToken(matchParser.OPATALT, 0); }
	public words(): WordsContext | undefined {
		return this.tryGetRuleContext(0, WordsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return matchParser.RULE_documentbit; }
	// @Override
	public enterRule(listener: matchParserListener): void {
		if (listener.enterDocumentbit) {
			listener.enterDocumentbit(this);
		}
	}
	// @Override
	public exitRule(listener: matchParserListener): void {
		if (listener.exitDocumentbit) {
			listener.exitDocumentbit(this);
		}
	}
}


export class WebsitebitContext extends ParserRuleContext {
	public op_website_format(): Op_website_formatContext {
		return this.getRuleContext(0, Op_website_formatContext);
	}
	public COLON(): TerminalNode { return this.getToken(matchParser.COLON, 0); }
	public url(): UrlContext {
		return this.getRuleContext(0, UrlContext);
	}
	public CL(): TerminalNode[];
	public CL(i: number): TerminalNode;
	public CL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(matchParser.CL);
		} else {
			return this.getToken(matchParser.CL, i);
		}
	}
	public OPATALT(): TerminalNode | undefined { return this.tryGetToken(matchParser.OPATALT, 0); }
	public words(): WordsContext | undefined {
		return this.tryGetRuleContext(0, WordsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return matchParser.RULE_websitebit; }
	// @Override
	public enterRule(listener: matchParserListener): void {
		if (listener.enterWebsitebit) {
			listener.enterWebsitebit(this);
		}
	}
	// @Override
	public exitRule(listener: matchParserListener): void {
		if (listener.exitWebsitebit) {
			listener.exitWebsitebit(this);
		}
	}
}


export class AppbitContext extends ParserRuleContext {
	public op_app_format(): Op_app_formatContext {
		return this.getRuleContext(0, Op_app_formatContext);
	}
	public COLON(): TerminalNode { return this.getToken(matchParser.COLON, 0); }
	public CL(): TerminalNode[];
	public CL(i: number): TerminalNode;
	public CL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(matchParser.CL);
		} else {
			return this.getToken(matchParser.CL, i);
		}
	}
	public url(): UrlContext | undefined {
		return this.tryGetRuleContext(0, UrlContext);
	}
	public telephone(): TelephoneContext | undefined {
		return this.tryGetRuleContext(0, TelephoneContext);
	}
	public OPATALT(): TerminalNode | undefined { return this.tryGetToken(matchParser.OPATALT, 0); }
	public words(): WordsContext | undefined {
		return this.tryGetRuleContext(0, WordsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return matchParser.RULE_appbit; }
	// @Override
	public enterRule(listener: matchParserListener): void {
		if (listener.enterAppbit) {
			listener.enterAppbit(this);
		}
	}
	// @Override
	public exitRule(listener: matchParserListener): void {
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
	public get ruleIndex(): number { return matchParser.RULE_stillimagefilmbit; }
	// @Override
	public enterRule(listener: matchParserListener): void {
		if (listener.enterStillimagefilmbit) {
			listener.enterStillimagefilmbit(this);
		}
	}
	// @Override
	public exitRule(listener: matchParserListener): void {
		if (listener.exitStillimagefilmbit) {
			listener.exitStillimagefilmbit(this);
		}
	}
}


export class Stillimg_oneContext extends ParserRuleContext {
	public op_stillimagefilm_format(): Op_stillimagefilm_formatContext {
		return this.getRuleContext(0, Op_stillimagefilm_formatContext);
	}
	public COLON(): TerminalNode { return this.getToken(matchParser.COLON, 0); }
	public url(): UrlContext {
		return this.getRuleContext(0, UrlContext);
	}
	public CL(): TerminalNode { return this.getToken(matchParser.CL, 0); }
	public S(): TerminalNode[];
	public S(i: number): TerminalNode;
	public S(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(matchParser.S);
		} else {
			return this.getToken(matchParser.S, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return matchParser.RULE_stillimg_one; }
	// @Override
	public enterRule(listener: matchParserListener): void {
		if (listener.enterStillimg_one) {
			listener.enterStillimg_one(this);
		}
	}
	// @Override
	public exitRule(listener: matchParserListener): void {
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
	public get ruleIndex(): number { return matchParser.RULE_videobit; }
	// @Override
	public enterRule(listener: matchParserListener): void {
		if (listener.enterVideobit) {
			listener.enterVideobit(this);
		}
	}
	// @Override
	public exitRule(listener: matchParserListener): void {
		if (listener.exitVideobit) {
			listener.exitVideobit(this);
		}
	}
}


export class Video_oneContext extends ParserRuleContext {
	public op_video_format(): Op_video_formatContext {
		return this.getRuleContext(0, Op_video_formatContext);
	}
	public COLON(): TerminalNode { return this.getToken(matchParser.COLON, 0); }
	public url(): UrlContext {
		return this.getRuleContext(0, UrlContext);
	}
	public CL(): TerminalNode[];
	public CL(i: number): TerminalNode;
	public CL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(matchParser.CL);
		} else {
			return this.getToken(matchParser.CL, i);
		}
	}
	public OPATALT(): TerminalNode | undefined { return this.tryGetToken(matchParser.OPATALT, 0); }
	public words(): WordsContext | undefined {
		return this.tryGetRuleContext(0, WordsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return matchParser.RULE_video_one; }
	// @Override
	public enterRule(listener: matchParserListener): void {
		if (listener.enterVideo_one) {
			listener.enterVideo_one(this);
		}
	}
	// @Override
	public exitRule(listener: matchParserListener): void {
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
	public NL(): TerminalNode | undefined { return this.tryGetToken(matchParser.NL, 0); }
	public ShowInIndex(): TerminalNode | undefined { return this.tryGetToken(matchParser.ShowInIndex, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return matchParser.RULE_imagebit; }
	// @Override
	public enterRule(listener: matchParserListener): void {
		if (listener.enterImagebit) {
			listener.enterImagebit(this);
		}
	}
	// @Override
	public exitRule(listener: matchParserListener): void {
		if (listener.exitImagebit) {
			listener.exitImagebit(this);
		}
	}
}


export class Image_oneContext extends ParserRuleContext {
	public op_image_format(): Op_image_formatContext {
		return this.getRuleContext(0, Op_image_formatContext);
	}
	public COLON(): TerminalNode { return this.getToken(matchParser.COLON, 0); }
	public url(): UrlContext {
		return this.getRuleContext(0, UrlContext);
	}
	public CL(): TerminalNode { return this.getToken(matchParser.CL, 0); }
	public S(): TerminalNode[];
	public S(i: number): TerminalNode;
	public S(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(matchParser.S);
		} else {
			return this.getToken(matchParser.S, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return matchParser.RULE_image_one; }
	// @Override
	public enterRule(listener: matchParserListener): void {
		if (listener.enterImage_one) {
			listener.enterImage_one(this);
		}
	}
	// @Override
	public exitRule(listener: matchParserListener): void {
		if (listener.exitImage_one) {
			listener.exitImage_one(this);
		}
	}
}


export class Op_image_formatContext extends ParserRuleContext {
	public OpAmpImage(): TerminalNode | undefined { return this.tryGetToken(matchParser.OpAmpImage, 0); }
	public Image_type(): TerminalNode | undefined { return this.tryGetToken(matchParser.Image_type, 0); }
	public DotArticleAtt(): TerminalNode | undefined { return this.tryGetToken(matchParser.DotArticleAtt, 0); }
	public OpAmpImageLink(): TerminalNode | undefined { return this.tryGetToken(matchParser.OpAmpImageLink, 0); }
	public OpAmpImageZoom(): TerminalNode | undefined { return this.tryGetToken(matchParser.OpAmpImageZoom, 0); }
	public OpAmpImageWAudio(): TerminalNode | undefined { return this.tryGetToken(matchParser.OpAmpImageWAudio, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return matchParser.RULE_op_image_format; }
	// @Override
	public enterRule(listener: matchParserListener): void {
		if (listener.enterOp_image_format) {
			listener.enterOp_image_format(this);
		}
	}
	// @Override
	public exitRule(listener: matchParserListener): void {
		if (listener.exitOp_image_format) {
			listener.exitOp_image_format(this);
		}
	}
}


export class Image_chainedContext extends ParserRuleContext {
	public AtSrc(): TerminalNode | undefined { return this.tryGetToken(matchParser.AtSrc, 0); }
	public COLON(): TerminalNode | undefined { return this.tryGetToken(matchParser.COLON, 0); }
	public url(): UrlContext | undefined {
		return this.tryGetRuleContext(0, UrlContext);
	}
	public CL(): TerminalNode { return this.getToken(matchParser.CL, 0); }
	public NUMERIC(): TerminalNode | undefined { return this.tryGetToken(matchParser.NUMERIC, 0); }
	public AtWidth(): TerminalNode | undefined { return this.tryGetToken(matchParser.AtWidth, 0); }
	public AtHeight(): TerminalNode | undefined { return this.tryGetToken(matchParser.AtHeight, 0); }
	public OPATALT(): TerminalNode | undefined { return this.tryGetToken(matchParser.OPATALT, 0); }
	public OpAtCaption(): TerminalNode | undefined { return this.tryGetToken(matchParser.OpAtCaption, 0); }
	public OpAtSearch(): TerminalNode | undefined { return this.tryGetToken(matchParser.OpAtSearch, 0); }
	public OpAtLicense(): TerminalNode | undefined { return this.tryGetToken(matchParser.OpAtLicense, 0); }
	public OpAtCopyright(): TerminalNode | undefined { return this.tryGetToken(matchParser.OpAtCopyright, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return matchParser.RULE_image_chained; }
	// @Override
	public enterRule(listener: matchParserListener): void {
		if (listener.enterImage_chained) {
			listener.enterImage_chained(this);
		}
	}
	// @Override
	public exitRule(listener: matchParserListener): void {
		if (listener.exitImage_chained) {
			listener.exitImage_chained(this);
		}
	}
}


export class Image_chained4matchContext extends ParserRuleContext {
	public AtSrc(): TerminalNode | undefined { return this.tryGetToken(matchParser.AtSrc, 0); }
	public COLON(): TerminalNode | undefined { return this.tryGetToken(matchParser.COLON, 0); }
	public url(): UrlContext | undefined {
		return this.tryGetRuleContext(0, UrlContext);
	}
	public CL(): TerminalNode { return this.getToken(matchParser.CL, 0); }
	public NUMERIC(): TerminalNode | undefined { return this.tryGetToken(matchParser.NUMERIC, 0); }
	public AtWidth(): TerminalNode | undefined { return this.tryGetToken(matchParser.AtWidth, 0); }
	public AtHeight(): TerminalNode | undefined { return this.tryGetToken(matchParser.AtHeight, 0); }
	public OPATALT(): TerminalNode | undefined { return this.tryGetToken(matchParser.OPATALT, 0); }
	public OpAtCaption(): TerminalNode | undefined { return this.tryGetToken(matchParser.OpAtCaption, 0); }
	public OpAtSearch(): TerminalNode | undefined { return this.tryGetToken(matchParser.OpAtSearch, 0); }
	public OpAtLicense(): TerminalNode | undefined { return this.tryGetToken(matchParser.OpAtLicense, 0); }
	public OpAtCopyright(): TerminalNode | undefined { return this.tryGetToken(matchParser.OpAtCopyright, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return matchParser.RULE_image_chained4match; }
	// @Override
	public enterRule(listener: matchParserListener): void {
		if (listener.enterImage_chained4match) {
			listener.enterImage_chained4match(this);
		}
	}
	// @Override
	public exitRule(listener: matchParserListener): void {
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
	public get ruleIndex(): number { return matchParser.RULE_audiobit; }
	// @Override
	public enterRule(listener: matchParserListener): void {
		if (listener.enterAudiobit) {
			listener.enterAudiobit(this);
		}
	}
	// @Override
	public exitRule(listener: matchParserListener): void {
		if (listener.exitAudiobit) {
			listener.exitAudiobit(this);
		}
	}
}


export class Audio_oneContext extends ParserRuleContext {
	public op_audio_format(): Op_audio_formatContext {
		return this.getRuleContext(0, Op_audio_formatContext);
	}
	public COLON(): TerminalNode { return this.getToken(matchParser.COLON, 0); }
	public url(): UrlContext {
		return this.getRuleContext(0, UrlContext);
	}
	public CL(): TerminalNode[];
	public CL(i: number): TerminalNode;
	public CL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(matchParser.CL);
		} else {
			return this.getToken(matchParser.CL, i);
		}
	}
	public OPATALT(): TerminalNode | undefined { return this.tryGetToken(matchParser.OPATALT, 0); }
	public words(): WordsContext | undefined {
		return this.tryGetRuleContext(0, WordsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return matchParser.RULE_audio_one; }
	// @Override
	public enterRule(listener: matchParserListener): void {
		if (listener.enterAudio_one) {
			listener.enterAudio_one(this);
		}
	}
	// @Override
	public exitRule(listener: matchParserListener): void {
		if (listener.exitAudio_one) {
			listener.exitAudio_one(this);
		}
	}
}


export class Audio_formatContext extends ParserRuleContext {
	public AmpAudio(): TerminalNode | undefined { return this.tryGetToken(matchParser.AmpAudio, 0); }
	public COLON(): TerminalNode | undefined { return this.tryGetToken(matchParser.COLON, 0); }
	public Audio_type(): TerminalNode | undefined { return this.tryGetToken(matchParser.Audio_type, 0); }
	public AmpAudioLink(): TerminalNode | undefined { return this.tryGetToken(matchParser.AmpAudioLink, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return matchParser.RULE_audio_format; }
	// @Override
	public enterRule(listener: matchParserListener): void {
		if (listener.enterAudio_format) {
			listener.enterAudio_format(this);
		}
	}
	// @Override
	public exitRule(listener: matchParserListener): void {
		if (listener.exitAudio_format) {
			listener.exitAudio_format(this);
		}
	}
}


export class Op_audio_formatContext extends ParserRuleContext {
	public OpAmpAudio(): TerminalNode | undefined { return this.tryGetToken(matchParser.OpAmpAudio, 0); }
	public COLON(): TerminalNode | undefined { return this.tryGetToken(matchParser.COLON, 0); }
	public Audio_type(): TerminalNode | undefined { return this.tryGetToken(matchParser.Audio_type, 0); }
	public OpAmpAudioLink(): TerminalNode | undefined { return this.tryGetToken(matchParser.OpAmpAudioLink, 0); }
	public OpAmpAudioEmbed(): TerminalNode | undefined { return this.tryGetToken(matchParser.OpAmpAudioEmbed, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return matchParser.RULE_op_audio_format; }
	// @Override
	public enterRule(listener: matchParserListener): void {
		if (listener.enterOp_audio_format) {
			listener.enterOp_audio_format(this);
		}
	}
	// @Override
	public exitRule(listener: matchParserListener): void {
		if (listener.exitOp_audio_format) {
			listener.exitOp_audio_format(this);
		}
	}
}


export class Resource_chainedContext extends ParserRuleContext {
	public COLON(): TerminalNode | undefined { return this.tryGetToken(matchParser.COLON, 0); }
	public CL(): TerminalNode { return this.getToken(matchParser.CL, 0); }
	public OPA(): TerminalNode | undefined { return this.tryGetToken(matchParser.OPA, 0); }
	public s_and_w(): S_and_wContext[];
	public s_and_w(i: number): S_and_wContext;
	public s_and_w(i?: number): S_and_wContext | S_and_wContext[] {
		if (i === undefined) {
			return this.getRuleContexts(S_and_wContext);
		} else {
			return this.getRuleContext(i, S_and_wContext);
		}
	}
	public AtSrc(): TerminalNode | undefined { return this.tryGetToken(matchParser.AtSrc, 0); }
	public S(): TerminalNode[];
	public S(i: number): TerminalNode;
	public S(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(matchParser.S);
		} else {
			return this.getToken(matchParser.S, i);
		}
	}
	public NL(): TerminalNode[];
	public NL(i: number): TerminalNode;
	public NL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(matchParser.NL);
		} else {
			return this.getToken(matchParser.NL, i);
		}
	}
	public NUMERIC(): TerminalNode | undefined { return this.tryGetToken(matchParser.NUMERIC, 0); }
	public AtWidth(): TerminalNode | undefined { return this.tryGetToken(matchParser.AtWidth, 0); }
	public AtHeight(): TerminalNode | undefined { return this.tryGetToken(matchParser.AtHeight, 0); }
	public OPATALT(): TerminalNode | undefined { return this.tryGetToken(matchParser.OPATALT, 0); }
	public OpAtCaption(): TerminalNode | undefined { return this.tryGetToken(matchParser.OpAtCaption, 0); }
	public OpAtSearch(): TerminalNode | undefined { return this.tryGetToken(matchParser.OpAtSearch, 0); }
	public OpAtLicense(): TerminalNode | undefined { return this.tryGetToken(matchParser.OpAtLicense, 0); }
	public OpAtCopyright(): TerminalNode | undefined { return this.tryGetToken(matchParser.OpAtCopyright, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return matchParser.RULE_resource_chained; }
	// @Override
	public enterRule(listener: matchParserListener): void {
		if (listener.enterResource_chained) {
			listener.enterResource_chained(this);
		}
	}
	// @Override
	public exitRule(listener: matchParserListener): void {
		if (listener.exitResource_chained) {
			listener.exitResource_chained(this);
		}
	}
}


export class TelephoneContext extends ParserRuleContext {
	public TEL(): TerminalNode { return this.getToken(matchParser.TEL, 0); }
	public PLUS(): TerminalNode { return this.getToken(matchParser.PLUS, 0); }
	public NUMERIC(): TerminalNode { return this.getToken(matchParser.NUMERIC, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return matchParser.RULE_telephone; }
	// @Override
	public enterRule(listener: matchParserListener): void {
		if (listener.enterTelephone) {
			listener.enterTelephone(this);
		}
	}
	// @Override
	public exitRule(listener: matchParserListener): void {
		if (listener.exitTelephone) {
			listener.exitTelephone(this);
		}
	}
}


export class UrlContext extends ParserRuleContext {
	public URL(): TerminalNode { return this.getToken(matchParser.URL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return matchParser.RULE_url; }
	// @Override
	public enterRule(listener: matchParserListener): void {
		if (listener.enterUrl) {
			listener.enterUrl(this);
		}
	}
	// @Override
	public exitRule(listener: matchParserListener): void {
		if (listener.exitUrl) {
			listener.exitUrl(this);
		}
	}
}


export class ItemContext extends ParserRuleContext {
	public OPC(): TerminalNode { return this.getToken(matchParser.OPC, 0); }
	public CL(): TerminalNode { return this.getToken(matchParser.CL, 0); }
	public lead(): LeadContext | undefined {
		return this.tryGetRuleContext(0, LeadContext);
	}
	public S(): TerminalNode[];
	public S(i: number): TerminalNode;
	public S(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(matchParser.S);
		} else {
			return this.getToken(matchParser.S, i);
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
			return this.getTokens(matchParser.COLON);
		} else {
			return this.getToken(matchParser.COLON, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return matchParser.RULE_item; }
	// @Override
	public enterRule(listener: matchParserListener): void {
		if (listener.enterItem) {
			listener.enterItem(this);
		}
	}
	// @Override
	public exitRule(listener: matchParserListener): void {
		if (listener.exitItem) {
			listener.exitItem(this);
		}
	}
}


export class LeadContext extends ParserRuleContext {
	public OPC(): TerminalNode { return this.getToken(matchParser.OPC, 0); }
	public s_and_w(): S_and_wContext[];
	public s_and_w(i: number): S_and_wContext;
	public s_and_w(i?: number): S_and_wContext | S_and_wContext[] {
		if (i === undefined) {
			return this.getRuleContexts(S_and_wContext);
		} else {
			return this.getRuleContext(i, S_and_wContext);
		}
	}
	public CL(): TerminalNode { return this.getToken(matchParser.CL, 0); }
	public COLON(): TerminalNode[];
	public COLON(i: number): TerminalNode;
	public COLON(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(matchParser.COLON);
		} else {
			return this.getToken(matchParser.COLON, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return matchParser.RULE_lead; }
	// @Override
	public enterRule(listener: matchParserListener): void {
		if (listener.enterLead) {
			listener.enterLead(this);
		}
	}
	// @Override
	public exitRule(listener: matchParserListener): void {
		if (listener.exitLead) {
			listener.exitLead(this);
		}
	}
}


export class AnglerefContext extends ParserRuleContext {
	public OPRANGLES(): TerminalNode | undefined { return this.tryGetToken(matchParser.OPRANGLES, 0); }
	public CL(): TerminalNode { return this.getToken(matchParser.CL, 0); }
	public s_and_w(): S_and_wContext | undefined {
		return this.tryGetRuleContext(0, S_and_wContext);
	}
	public OPRANGLEL(): TerminalNode | undefined { return this.tryGetToken(matchParser.OPRANGLEL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return matchParser.RULE_angleref; }
	// @Override
	public enterRule(listener: matchParserListener): void {
		if (listener.enterAngleref) {
			listener.enterAngleref(this);
		}
	}
	// @Override
	public exitRule(listener: matchParserListener): void {
		if (listener.exitAngleref) {
			listener.exitAngleref(this);
		}
	}
}


export class ExampleContext extends ParserRuleContext {
	public AtExamplecl(): TerminalNode | undefined { return this.tryGetToken(matchParser.AtExamplecl, 0); }
	public AtExampleWithStr(): TerminalNode | undefined { return this.tryGetToken(matchParser.AtExampleWithStr, 0); }
	public AtExamplecol(): TerminalNode | undefined { return this.tryGetToken(matchParser.AtExamplecol, 0); }
	public EOF(): TerminalNode | undefined { return this.tryGetToken(matchParser.EOF, 0); }
	public SENTENCE(): TerminalNode | undefined { return this.tryGetToken(matchParser.SENTENCE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return matchParser.RULE_example; }
	// @Override
	public enterRule(listener: matchParserListener): void {
		if (listener.enterExample) {
			listener.enterExample(this);
		}
	}
	// @Override
	public exitRule(listener: matchParserListener): void {
		if (listener.exitExample) {
			listener.exitExample(this);
		}
	}
}


export class Bracketed_textContext extends ParserRuleContext {
	public BracEnclose(): TerminalNode { return this.getToken(matchParser.BracEnclose, 0); }
	public CL(): TerminalNode | undefined { return this.tryGetToken(matchParser.CL, 0); }
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
			return this.getTokens(matchParser.NL);
		} else {
			return this.getToken(matchParser.NL, i);
		}
	}
	public S(): TerminalNode[];
	public S(i: number): TerminalNode;
	public S(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(matchParser.S);
		} else {
			return this.getToken(matchParser.S, i);
		}
	}
	public EOF(): TerminalNode | undefined { return this.tryGetToken(matchParser.EOF, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return matchParser.RULE_bracketed_text; }
	// @Override
	public enterRule(listener: matchParserListener): void {
		if (listener.enterBracketed_text) {
			listener.enterBracketed_text(this);
		}
	}
	// @Override
	public exitRule(listener: matchParserListener): void {
		if (listener.exitBracketed_text) {
			listener.exitBracketed_text(this);
		}
	}
}


export class ReferenceContext extends ParserRuleContext {
	public AtReference(): TerminalNode { return this.getToken(matchParser.AtReference, 0); }
	public CL(): TerminalNode | undefined { return this.tryGetToken(matchParser.CL, 0); }
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
			return this.getTokens(matchParser.COLON);
		} else {
			return this.getToken(matchParser.COLON, i);
		}
	}
	public URL(): TerminalNode[];
	public URL(i: number): TerminalNode;
	public URL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(matchParser.URL);
		} else {
			return this.getToken(matchParser.URL, i);
		}
	}
	public NL(): TerminalNode[];
	public NL(i: number): TerminalNode;
	public NL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(matchParser.NL);
		} else {
			return this.getToken(matchParser.NL, i);
		}
	}
	public EOF(): TerminalNode | undefined { return this.tryGetToken(matchParser.EOF, 0); }
	public S(): TerminalNode[];
	public S(i: number): TerminalNode;
	public S(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(matchParser.S);
		} else {
			return this.getToken(matchParser.S, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return matchParser.RULE_reference; }
	// @Override
	public enterRule(listener: matchParserListener): void {
		if (listener.enterReference) {
			listener.enterReference(this);
		}
	}
	// @Override
	public exitRule(listener: matchParserListener): void {
		if (listener.exitReference) {
			listener.exitReference(this);
		}
	}
}


export class ProgressContext extends ParserRuleContext {
	public AtProgress(): TerminalNode { return this.getToken(matchParser.AtProgress, 0); }
	public s_and_w(): S_and_wContext {
		return this.getRuleContext(0, S_and_wContext);
	}
	public CL(): TerminalNode { return this.getToken(matchParser.CL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return matchParser.RULE_progress; }
	// @Override
	public enterRule(listener: matchParserListener): void {
		if (listener.enterProgress) {
			listener.enterProgress(this);
		}
	}
	// @Override
	public exitRule(listener: matchParserListener): void {
		if (listener.exitProgress) {
			listener.exitProgress(this);
		}
	}
}


export class DatepropContext extends ParserRuleContext {
	public AtDate(): TerminalNode { return this.getToken(matchParser.AtDate, 0); }
	public CL(): TerminalNode { return this.getToken(matchParser.CL, 0); }
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
			return this.getTokens(matchParser.COLON);
		} else {
			return this.getToken(matchParser.COLON, i);
		}
	}
	public NL(): TerminalNode[];
	public NL(i: number): TerminalNode;
	public NL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(matchParser.NL);
		} else {
			return this.getToken(matchParser.NL, i);
		}
	}
	public dateprop_chained(): Dateprop_chainedContext | undefined {
		return this.tryGetRuleContext(0, Dateprop_chainedContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return matchParser.RULE_dateprop; }
	// @Override
	public enterRule(listener: matchParserListener): void {
		if (listener.enterDateprop) {
			listener.enterDateprop(this);
		}
	}
	// @Override
	public exitRule(listener: matchParserListener): void {
		if (listener.exitDateprop) {
			listener.exitDateprop(this);
		}
	}
}


export class Dateprop_chainedContext extends ParserRuleContext {
	public AtDate(): TerminalNode { return this.getToken(matchParser.AtDate, 0); }
	public CL(): TerminalNode { return this.getToken(matchParser.CL, 0); }
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
			return this.getTokens(matchParser.COLON);
		} else {
			return this.getToken(matchParser.COLON, i);
		}
	}
	public NL(): TerminalNode[];
	public NL(i: number): TerminalNode;
	public NL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(matchParser.NL);
		} else {
			return this.getToken(matchParser.NL, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return matchParser.RULE_dateprop_chained; }
	// @Override
	public enterRule(listener: matchParserListener): void {
		if (listener.enterDateprop_chained) {
			listener.enterDateprop_chained(this);
		}
	}
	// @Override
	public exitRule(listener: matchParserListener): void {
		if (listener.exitDateprop_chained) {
			listener.exitDateprop_chained(this);
		}
	}
}


export class InstructionContext extends ParserRuleContext {
	public OPB(): TerminalNode { return this.getToken(matchParser.OPB, 0); }
	public CL(): TerminalNode | undefined { return this.tryGetToken(matchParser.CL, 0); }
	public NL(): TerminalNode[];
	public NL(i: number): TerminalNode;
	public NL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(matchParser.NL);
		} else {
			return this.getToken(matchParser.NL, i);
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
			return this.getTokens(matchParser.S);
		} else {
			return this.getToken(matchParser.S, i);
		}
	}
	public EOF(): TerminalNode | undefined { return this.tryGetToken(matchParser.EOF, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return matchParser.RULE_instruction; }
	// @Override
	public enterRule(listener: matchParserListener): void {
		if (listener.enterInstruction) {
			listener.enterInstruction(this);
		}
	}
	// @Override
	public exitRule(listener: matchParserListener): void {
		if (listener.exitInstruction) {
			listener.exitInstruction(this);
		}
	}
}


export class HintContext extends ParserRuleContext {
	public OPQ(): TerminalNode { return this.getToken(matchParser.OPQ, 0); }
	public CL(): TerminalNode[];
	public CL(i: number): TerminalNode;
	public CL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(matchParser.CL);
		} else {
			return this.getToken(matchParser.CL, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return matchParser.RULE_hint; }
	// @Override
	public enterRule(listener: matchParserListener): void {
		if (listener.enterHint) {
			listener.enterHint(this);
		}
	}
	// @Override
	public exitRule(listener: matchParserListener): void {
		if (listener.exitHint) {
			listener.exitHint(this);
		}
	}
}


export class TitleContext extends ParserRuleContext {
	public OPHASH(): TerminalNode { return this.getToken(matchParser.OPHASH, 0); }
	public CL(): TerminalNode | undefined { return this.tryGetToken(matchParser.CL, 0); }
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
			return this.getTokens(matchParser.NL);
		} else {
			return this.getToken(matchParser.NL, i);
		}
	}
	public EOF(): TerminalNode | undefined { return this.tryGetToken(matchParser.EOF, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return matchParser.RULE_title; }
	// @Override
	public enterRule(listener: matchParserListener): void {
		if (listener.enterTitle) {
			listener.enterTitle(this);
		}
	}
	// @Override
	public exitRule(listener: matchParserListener): void {
		if (listener.exitTitle) {
			listener.exitTitle(this);
		}
	}
}


export class Bool_labelContext extends ParserRuleContext {
	public AtLabeltrue(): TerminalNode | undefined { return this.tryGetToken(matchParser.AtLabeltrue, 0); }
	public s_and_w(): S_and_wContext {
		return this.getRuleContext(0, S_and_wContext);
	}
	public CL(): TerminalNode { return this.getToken(matchParser.CL, 0); }
	public AtLabelfalse(): TerminalNode | undefined { return this.tryGetToken(matchParser.AtLabelfalse, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return matchParser.RULE_bool_label; }
	// @Override
	public enterRule(listener: matchParserListener): void {
		if (listener.enterBool_label) {
			listener.enterBool_label(this);
		}
	}
	// @Override
	public exitRule(listener: matchParserListener): void {
		if (listener.exitBool_label) {
			listener.exitBool_label(this);
		}
	}
}


export class Progress_pointsContext extends ParserRuleContext {
	public AtProgressPoints(): TerminalNode { return this.getToken(matchParser.AtProgressPoints, 0); }
	public COLON(): TerminalNode { return this.getToken(matchParser.COLON, 0); }
	public NUMERIC(): TerminalNode | undefined { return this.tryGetToken(matchParser.NUMERIC, 0); }
	public CL(): TerminalNode { return this.getToken(matchParser.CL, 0); }
	public s_and_w(): S_and_wContext | undefined {
		return this.tryGetRuleContext(0, S_and_wContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return matchParser.RULE_progress_points; }
	// @Override
	public enterRule(listener: matchParserListener): void {
		if (listener.enterProgress_points) {
			listener.enterProgress_points(this);
		}
	}
	// @Override
	public exitRule(listener: matchParserListener): void {
		if (listener.exitProgress_points) {
			listener.exitProgress_points(this);
		}
	}
}


export class IstrackedContext extends ParserRuleContext {
	public OpAtIsTracked(): TerminalNode { return this.getToken(matchParser.OpAtIsTracked, 0); }
	public s_and_w(): S_and_wContext {
		return this.getRuleContext(0, S_and_wContext);
	}
	public CL(): TerminalNode { return this.getToken(matchParser.CL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return matchParser.RULE_istracked; }
	// @Override
	public enterRule(listener: matchParserListener): void {
		if (listener.enterIstracked) {
			listener.enterIstracked(this);
		}
	}
	// @Override
	public exitRule(listener: matchParserListener): void {
		if (listener.exitIstracked) {
			listener.exitIstracked(this);
		}
	}
}


export class IsinfoonlyContext extends ParserRuleContext {
	public OpAtIsInfoOnly(): TerminalNode { return this.getToken(matchParser.OpAtIsInfoOnly, 0); }
	public s_and_w(): S_and_wContext {
		return this.getRuleContext(0, S_and_wContext);
	}
	public CL(): TerminalNode { return this.getToken(matchParser.CL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return matchParser.RULE_isinfoonly; }
	// @Override
	public enterRule(listener: matchParserListener): void {
		if (listener.enterIsinfoonly) {
			listener.enterIsinfoonly(this);
		}
	}
	// @Override
	public exitRule(listener: matchParserListener): void {
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
			return this.getTokens(matchParser.NL);
		} else {
			return this.getToken(matchParser.NL, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return matchParser.RULE_atdef; }
	// @Override
	public enterRule(listener: matchParserListener): void {
		if (listener.enterAtdef) {
			listener.enterAtdef(this);
		}
	}
	// @Override
	public exitRule(listener: matchParserListener): void {
		if (listener.exitAtdef) {
			listener.exitAtdef(this);
		}
	}
}


export class Atdef_Context extends ParserRuleContext {
	public OPA(): TerminalNode | undefined { return this.tryGetToken(matchParser.OPA, 0); }
	public s_and_w(): S_and_wContext[];
	public s_and_w(i: number): S_and_wContext;
	public s_and_w(i?: number): S_and_wContext | S_and_wContext[] {
		if (i === undefined) {
			return this.getRuleContexts(S_and_wContext);
		} else {
			return this.getRuleContext(i, S_and_wContext);
		}
	}
	public CL(): TerminalNode | undefined { return this.tryGetToken(matchParser.CL, 0); }
	public COLON(): TerminalNode[];
	public COLON(i: number): TerminalNode;
	public COLON(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(matchParser.COLON);
		} else {
			return this.getToken(matchParser.COLON, i);
		}
	}
	public DBLCOLON(): TerminalNode | undefined { return this.tryGetToken(matchParser.DBLCOLON, 0); }
	public NL(): TerminalNode[];
	public NL(i: number): TerminalNode;
	public NL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(matchParser.NL);
		} else {
			return this.getToken(matchParser.NL, i);
		}
	}
	public OpAtCopyright(): TerminalNode | undefined { return this.tryGetToken(matchParser.OpAtCopyright, 0); }
	public AtSampleSolution(): TerminalNode | undefined { return this.tryGetToken(matchParser.AtSampleSolution, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return matchParser.RULE_atdef_; }
	// @Override
	public enterRule(listener: matchParserListener): void {
		if (listener.enterAtdef_) {
			listener.enterAtdef_(this);
		}
	}
	// @Override
	public exitRule(listener: matchParserListener): void {
		if (listener.exitAtdef_) {
			listener.exitAtdef_(this);
		}
	}
}


export class DollaransContext extends ParserRuleContext {
	public OPDOLL(): TerminalNode { return this.getToken(matchParser.OPDOLL, 0); }
	public CL(): TerminalNode | undefined { return this.tryGetToken(matchParser.CL, 0); }
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
			return this.getTokens(matchParser.COLON);
		} else {
			return this.getToken(matchParser.COLON, i);
		}
	}
	public NL(): TerminalNode[];
	public NL(i: number): TerminalNode;
	public NL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(matchParser.NL);
		} else {
			return this.getToken(matchParser.NL, i);
		}
	}
	public EOF(): TerminalNode | undefined { return this.tryGetToken(matchParser.EOF, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return matchParser.RULE_dollarans; }
	// @Override
	public enterRule(listener: matchParserListener): void {
		if (listener.enterDollarans) {
			listener.enterDollarans(this);
		}
	}
	// @Override
	public exitRule(listener: matchParserListener): void {
		if (listener.exitDollarans) {
			listener.exitDollarans(this);
		}
	}
}


export class AnchorContext extends ParserRuleContext {
	public OPDANGLE(): TerminalNode { return this.getToken(matchParser.OPDANGLE, 0); }
	public CL(): TerminalNode { return this.getToken(matchParser.CL, 0); }
	public s_and_w(): S_and_wContext | undefined {
		return this.tryGetRuleContext(0, S_and_wContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return matchParser.RULE_anchor; }
	// @Override
	public enterRule(listener: matchParserListener): void {
		if (listener.enterAnchor) {
			listener.enterAnchor(this);
		}
	}
	// @Override
	public exitRule(listener: matchParserListener): void {
		if (listener.exitAnchor) {
			listener.exitAnchor(this);
		}
	}
}


export class DcolonContext extends ParserRuleContext {
	public DBLCOLON(): TerminalNode { return this.getToken(matchParser.DBLCOLON, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return matchParser.RULE_dcolon; }
	// @Override
	public enterRule(listener: matchParserListener): void {
		if (listener.enterDcolon) {
			listener.enterDcolon(this);
		}
	}
	// @Override
	public exitRule(listener: matchParserListener): void {
		if (listener.exitDcolon) {
			listener.exitDcolon(this);
		}
	}
}


export class ColcoltextContext extends ParserRuleContext {
	public dcolon(): DcolonContext[];
	public dcolon(i: number): DcolonContext;
	public dcolon(i?: number): DcolonContext | DcolonContext[] {
		if (i === undefined) {
			return this.getRuleContexts(DcolonContext);
		} else {
			return this.getRuleContext(i, DcolonContext);
		}
	}
	public STRING(): TerminalNode { return this.getToken(matchParser.STRING, 0); }
	public DBLCOLON(): TerminalNode[];
	public DBLCOLON(i: number): TerminalNode;
	public DBLCOLON(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(matchParser.DBLCOLON);
		} else {
			return this.getToken(matchParser.DBLCOLON, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return matchParser.RULE_colcoltext; }
	// @Override
	public enterRule(listener: matchParserListener): void {
		if (listener.enterColcoltext) {
			listener.enterColcoltext(this);
		}
	}
	// @Override
	public exitRule(listener: matchParserListener): void {
		if (listener.exitColcoltext) {
			listener.exitColcoltext(this);
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
			return this.getTokens(matchParser.NL);
		} else {
			return this.getToken(matchParser.NL, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return matchParser.RULE_lines; }
	// @Override
	public enterRule(listener: matchParserListener): void {
		if (listener.enterLines) {
			listener.enterLines(this);
		}
	}
	// @Override
	public exitRule(listener: matchParserListener): void {
		if (listener.exitLines) {
			listener.exitLines(this);
		}
	}
}


export class List_lineContext extends ParserRuleContext {
	public LIST_LINE(): TerminalNode { return this.getToken(matchParser.LIST_LINE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return matchParser.RULE_list_line; }
	// @Override
	public enterRule(listener: matchParserListener): void {
		if (listener.enterList_line) {
			listener.enterList_line(this);
		}
	}
	// @Override
	public exitRule(listener: matchParserListener): void {
		if (listener.exitList_line) {
			listener.exitList_line(this);
		}
	}
}


export class S_and_wContext extends ParserRuleContext {
	public STRING(): TerminalNode | undefined { return this.tryGetToken(matchParser.STRING, 0); }
	public NUMERIC(): TerminalNode | undefined { return this.tryGetToken(matchParser.NUMERIC, 0); }
	public S(): TerminalNode[];
	public S(i: number): TerminalNode;
	public S(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(matchParser.S);
		} else {
			return this.getToken(matchParser.S, i);
		}
	}
	public words(): WordsContext | undefined {
		return this.tryGetRuleContext(0, WordsContext);
	}
	public OPS(): TerminalNode | undefined { return this.tryGetToken(matchParser.OPS, 0); }
	public s_and_w(): S_and_wContext | undefined {
		return this.tryGetRuleContext(0, S_and_wContext);
	}
	public CL(): TerminalNode | undefined { return this.tryGetToken(matchParser.CL, 0); }
	public COLON(): TerminalNode | undefined { return this.tryGetToken(matchParser.COLON, 0); }
	public AMP(): TerminalNode | undefined { return this.tryGetToken(matchParser.AMP, 0); }
	public DBLCOLON(): TerminalNode | undefined { return this.tryGetToken(matchParser.DBLCOLON, 0); }
	public LIST_LINE(): TerminalNode | undefined { return this.tryGetToken(matchParser.LIST_LINE, 0); }
	public colcoltext(): ColcoltextContext | undefined {
		return this.tryGetRuleContext(0, ColcoltextContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return matchParser.RULE_s_and_w; }
	// @Override
	public enterRule(listener: matchParserListener): void {
		if (listener.enterS_and_w) {
			listener.enterS_and_w(this);
		}
	}
	// @Override
	public exitRule(listener: matchParserListener): void {
		if (listener.exitS_and_w) {
			listener.exitS_and_w(this);
		}
	}
}


export class DclinesContext extends ParserRuleContext {
	public DCANY(): TerminalNode { return this.getToken(matchParser.DCANY, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return matchParser.RULE_dclines; }
	// @Override
	public enterRule(listener: matchParserListener): void {
		if (listener.enterDclines) {
			listener.enterDclines(this);
		}
	}
	// @Override
	public exitRule(listener: matchParserListener): void {
		if (listener.exitDclines) {
			listener.exitDclines(this);
		}
	}
}


export class OpdollContext extends ParserRuleContext {
	public OPDOLL(): TerminalNode { return this.getToken(matchParser.OPDOLL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return matchParser.RULE_opdoll; }
	// @Override
	public enterRule(listener: matchParserListener): void {
		if (listener.enterOpdoll) {
			listener.enterOpdoll(this);
		}
	}
	// @Override
	public exitRule(listener: matchParserListener): void {
		if (listener.exitOpdoll) {
			listener.exitOpdoll(this);
		}
	}
}


export class OpuContext extends ParserRuleContext {
	public OPU(): TerminalNode { return this.getToken(matchParser.OPU, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return matchParser.RULE_opu; }
	// @Override
	public enterRule(listener: matchParserListener): void {
		if (listener.enterOpu) {
			listener.enterOpu(this);
		}
	}
	// @Override
	public exitRule(listener: matchParserListener): void {
		if (listener.exitOpu) {
			listener.exitOpu(this);
		}
	}
}


export class OpbContext extends ParserRuleContext {
	public OPB(): TerminalNode { return this.getToken(matchParser.OPB, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return matchParser.RULE_opb; }
	// @Override
	public enterRule(listener: matchParserListener): void {
		if (listener.enterOpb) {
			listener.enterOpb(this);
		}
	}
	// @Override
	public exitRule(listener: matchParserListener): void {
		if (listener.exitOpb) {
			listener.exitOpb(this);
		}
	}
}


export class OpqContext extends ParserRuleContext {
	public OPQ(): TerminalNode { return this.getToken(matchParser.OPQ, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return matchParser.RULE_opq; }
	// @Override
	public enterRule(listener: matchParserListener): void {
		if (listener.enterOpq) {
			listener.enterOpq(this);
		}
	}
	// @Override
	public exitRule(listener: matchParserListener): void {
		if (listener.exitOpq) {
			listener.exitOpq(this);
		}
	}
}


export class OpaContext extends ParserRuleContext {
	public OPA(): TerminalNode { return this.getToken(matchParser.OPA, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return matchParser.RULE_opa; }
	// @Override
	public enterRule(listener: matchParserListener): void {
		if (listener.enterOpa) {
			listener.enterOpa(this);
		}
	}
	// @Override
	public exitRule(listener: matchParserListener): void {
		if (listener.exitOpa) {
			listener.exitOpa(this);
		}
	}
}


export class OppContext extends ParserRuleContext {
	public OPP(): TerminalNode { return this.getToken(matchParser.OPP, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return matchParser.RULE_opp; }
	// @Override
	public enterRule(listener: matchParserListener): void {
		if (listener.enterOpp) {
			listener.enterOpp(this);
		}
	}
	// @Override
	public exitRule(listener: matchParserListener): void {
		if (listener.exitOpp) {
			listener.exitOpp(this);
		}
	}
}


export class OpmContext extends ParserRuleContext {
	public OPM(): TerminalNode { return this.getToken(matchParser.OPM, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return matchParser.RULE_opm; }
	// @Override
	public enterRule(listener: matchParserListener): void {
		if (listener.enterOpm) {
			listener.enterOpm(this);
		}
	}
	// @Override
	public exitRule(listener: matchParserListener): void {
		if (listener.exitOpm) {
			listener.exitOpm(this);
		}
	}
}


export class OpsContext extends ParserRuleContext {
	public OPS(): TerminalNode { return this.getToken(matchParser.OPS, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return matchParser.RULE_ops; }
	// @Override
	public enterRule(listener: matchParserListener): void {
		if (listener.enterOps) {
			listener.enterOps(this);
		}
	}
	// @Override
	public exitRule(listener: matchParserListener): void {
		if (listener.exitOps) {
			listener.exitOps(this);
		}
	}
}


export class OprContext extends ParserRuleContext {
	public OPR(): TerminalNode { return this.getToken(matchParser.OPR, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return matchParser.RULE_opr; }
	// @Override
	public enterRule(listener: matchParserListener): void {
		if (listener.enterOpr) {
			listener.enterOpr(this);
		}
	}
	// @Override
	public exitRule(listener: matchParserListener): void {
		if (listener.exitOpr) {
			listener.exitOpr(this);
		}
	}
}


export class OpcContext extends ParserRuleContext {
	public OPC(): TerminalNode { return this.getToken(matchParser.OPC, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return matchParser.RULE_opc; }
	// @Override
	public enterRule(listener: matchParserListener): void {
		if (listener.enterOpc) {
			listener.enterOpc(this);
		}
	}
	// @Override
	public exitRule(listener: matchParserListener): void {
		if (listener.exitOpc) {
			listener.exitOpc(this);
		}
	}
}


export class ClnspContext extends ParserRuleContext {
	public CL(): TerminalNode { return this.getToken(matchParser.CL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return matchParser.RULE_clnsp; }
	// @Override
	public enterRule(listener: matchParserListener): void {
		if (listener.enterClnsp) {
			listener.enterClnsp(this);
		}
	}
	// @Override
	public exitRule(listener: matchParserListener): void {
		if (listener.exitClnsp) {
			listener.exitClnsp(this);
		}
	}
}


export class Or_Context extends ParserRuleContext {
	public OR(): TerminalNode { return this.getToken(matchParser.OR, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return matchParser.RULE_or_; }
	// @Override
	public enterRule(listener: matchParserListener): void {
		if (listener.enterOr_) {
			listener.enterOr_(this);
		}
	}
	// @Override
	public exitRule(listener: matchParserListener): void {
		if (listener.exitOr_) {
			listener.exitOr_(this);
		}
	}
}


export class WordsContext extends ParserRuleContext {
	public SENTENCE(): TerminalNode[];
	public SENTENCE(i: number): TerminalNode;
	public SENTENCE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(matchParser.SENTENCE);
		} else {
			return this.getToken(matchParser.SENTENCE, i);
		}
	}
	public NOTBITMARK(): TerminalNode[];
	public NOTBITMARK(i: number): TerminalNode;
	public NOTBITMARK(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(matchParser.NOTBITMARK);
		} else {
			return this.getToken(matchParser.NOTBITMARK, i);
		}
	}
	public BARSTRING(): TerminalNode[];
	public BARSTRING(i: number): TerminalNode;
	public BARSTRING(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(matchParser.BARSTRING);
		} else {
			return this.getToken(matchParser.BARSTRING, i);
		}
	}
	public ELIPSIS(): TerminalNode[];
	public ELIPSIS(i: number): TerminalNode;
	public ELIPSIS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(matchParser.ELIPSIS);
		} else {
			return this.getToken(matchParser.ELIPSIS, i);
		}
	}
	public AMP(): TerminalNode[];
	public AMP(i: number): TerminalNode;
	public AMP(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(matchParser.AMP);
		} else {
			return this.getToken(matchParser.AMP, i);
		}
	}
	public Greater(): TerminalNode[];
	public Greater(i: number): TerminalNode;
	public Greater(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(matchParser.Greater);
		} else {
			return this.getToken(matchParser.Greater, i);
		}
	}
	public Less(): TerminalNode[];
	public Less(i: number): TerminalNode;
	public Less(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(matchParser.Less);
		} else {
			return this.getToken(matchParser.Less, i);
		}
	}
	public RightArrow(): TerminalNode[];
	public RightArrow(i: number): TerminalNode;
	public RightArrow(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(matchParser.RightArrow);
		} else {
			return this.getToken(matchParser.RightArrow, i);
		}
	}
	public RightAngle(): TerminalNode[];
	public RightAngle(i: number): TerminalNode;
	public RightAngle(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(matchParser.RightAngle);
		} else {
			return this.getToken(matchParser.RightAngle, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return matchParser.RULE_words; }
	// @Override
	public enterRule(listener: matchParserListener): void {
		if (listener.enterWords) {
			listener.enterWords(this);
		}
	}
	// @Override
	public exitRule(listener: matchParserListener): void {
		if (listener.exitWords) {
			listener.exitWords(this);
		}
	}
}


export class SpContext extends ParserRuleContext {
	public S(): TerminalNode { return this.getToken(matchParser.S, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return matchParser.RULE_sp; }
	// @Override
	public enterRule(listener: matchParserListener): void {
		if (listener.enterSp) {
			listener.enterSp(this);
		}
	}
	// @Override
	public exitRule(listener: matchParserListener): void {
		if (listener.exitSp) {
			listener.exitSp(this);
		}
	}
}


