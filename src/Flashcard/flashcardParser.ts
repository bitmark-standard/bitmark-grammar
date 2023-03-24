// Generated from ./Flashcard/flashcardParser.g4 by ANTLR 4.9.0-SNAPSHOT


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

import { flashcardParserListener } from "./flashcardParserListener";

export class flashcardParser extends Parser {
	public static readonly OPDOT = 1;
	public static readonly S = 2;
	public static readonly BitFlash1 = 3;
	public static readonly BitFlash = 4;
	public static readonly BitFlashcardset = 5;
	public static readonly BitFlashcardlangset = 6;
	public static readonly BitFlashcardlang1 = 7;
	public static readonly BitVocabulary = 8;
	public static readonly BitVocabulary_1 = 9;
	public static readonly COMMENT = 10;
	public static readonly Image_type = 11;
	public static readonly Audio_type = 12;
	public static readonly Video_type = 13;
	public static readonly OPDOLL = 14;
	public static readonly OPBUL = 15;
	public static readonly OPESC = 16;
	public static readonly OPRANGLES = 17;
	public static readonly OPRANGLEL = 18;
	public static readonly OPDANGLE = 19;
	public static readonly OPU = 20;
	public static readonly OPB = 21;
	public static readonly OPQ = 22;
	public static readonly OPA = 23;
	public static readonly OPP = 24;
	public static readonly OPM = 25;
	public static readonly OPS = 26;
	public static readonly OPR = 27;
	public static readonly OPC = 28;
	public static readonly OPHASH = 29;
	public static readonly CL = 30;
	public static readonly COLON = 31;
	public static readonly AMP = 32;
	public static readonly DBLCOLON = 33;
	public static readonly PLUS = 34;
	public static readonly DotAt = 35;
	public static readonly Greater = 36;
	public static readonly Less = 37;
	public static readonly DBLEQ = 38;
	public static readonly RightAngle = 39;
	public static readonly RightArrow = 40;
	public static readonly EQ = 41;
	public static readonly EQ2 = 42;
	public static readonly OR = 43;
	public static readonly HSPL = 44;
	public static readonly HSPL2 = 45;
	public static readonly SSPL = 46;
	public static readonly SSPL2 = 47;
	public static readonly DCANY = 48;
	public static readonly ArticleText = 49;
	public static readonly NOTCL = 50;
	public static readonly NUMERIC = 51;
	public static readonly STRING = 52;
	public static readonly NL = 53;
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
	public static readonly AtPartialAnswerS = 67;
	public static readonly AtPartialAnswer = 68;
	public static readonly AtLabeltrue = 69;
	public static readonly AtLabelfalse = 70;
	public static readonly AtPoints = 71;
	public static readonly AtSrc = 72;
	public static readonly OPATALT = 73;
	public static readonly OPAMARK = 74;
	public static readonly ShowInIndex = 75;
	public static readonly OpAtCaption = 76;
	public static readonly OpAtLicense = 77;
	public static readonly OpAtCopyright = 78;
	public static readonly OpAtSearch = 79;
	public static readonly OpAtIsTracked = 80;
	public static readonly OpAtIsInfoOnly = 81;
	public static readonly AtDate = 82;
	public static readonly Http = 83;
	public static readonly Https = 84;
	public static readonly AmpAudio = 85;
	public static readonly AmpImage = 86;
	public static readonly AmpImageZoom = 87;
	public static readonly AmpImageWAudio = 88;
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
	public static readonly OpAmpImageWAudio = 99;
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
	public static readonly AmpAppLink = 113;
	public static readonly AmpWebsiteLink = 114;
	public static readonly AmpStillImageFilmLink = 115;
	public static readonly OpAmpAudioLink = 116;
	public static readonly OpAmpImageLink = 117;
	public static readonly OpAmpVideoLink = 118;
	public static readonly OpAmpArticleLink = 119;
	public static readonly OpAmpDocumentLink = 120;
	public static readonly OpAmpAppLink = 121;
	public static readonly OpAmpWebsiteLink = 122;
	public static readonly OpAmpStillImageFilmLink = 123;
	public static readonly AmpImageEmbed = 124;
	public static readonly AmpVideoEmbed = 125;
	public static readonly AmpAudioEmbed = 126;
	public static readonly AmpDocumentEmbed = 127;
	public static readonly AmpStillImageFilmEmbed = 128;
	public static readonly OpAmpImageEmbed = 129;
	public static readonly OpAmpVideoEmbed = 130;
	public static readonly OpAmpAudioEmbed = 131;
	public static readonly OpAmpDocumentEmbed = 132;
	public static readonly OpAmpStillImageFilmEmbed = 133;
	public static readonly BitmarkMinus = 134;
	public static readonly BitmarkPlus = 135;
	public static readonly ColonText = 136;
	public static readonly ColonJson = 137;
	public static readonly Prosemirror = 138;
	public static readonly Placeholder = 139;
	public static readonly BASIC = 140;
	public static readonly JPG = 141;
	public static readonly PNG = 142;
	public static readonly GIF = 143;
	public static readonly SVG = 144;
	public static readonly MP2 = 145;
	public static readonly MP3 = 146;
	public static readonly MP4 = 147;
	public static readonly FLV = 148;
	public static readonly WMV = 149;
	public static readonly MPEG = 150;
	public static readonly MPG = 151;
	public static readonly TEL = 152;
	public static readonly DotArticleAtt = 153;
	public static readonly STAR = 154;
	public static readonly URL = 155;
	public static readonly LIST_LINE = 156;
	public static readonly ENCLBARS = 157;
	public static readonly RULE_bitmark = 0;
	public static readonly RULE_bitmark_ = 1;
	public static readonly RULE_flashcards = 2;
	public static readonly RULE_flashcard_1 = 3;
	public static readonly RULE_flashcard = 4;
	public static readonly RULE_flashcard_set = 5;
	public static readonly RULE_flashcard_language_set = 6;
	public static readonly RULE_flashcard_language_1 = 7;
	public static readonly RULE_vocab = 8;
	public static readonly RULE_vocab_1 = 9;
	public static readonly RULE_sx = 10;
	public static readonly RULE_sidex = 11;
	public static readonly RULE_sidex_NL = 12;
	public static readonly RULE_side = 13;
	public static readonly RULE_side_NL = 14;
	public static readonly RULE_vside = 15;
	public static readonly RULE_bitElem = 16;
	public static readonly RULE_resource = 17;
	public static readonly RULE_gap = 18;
	public static readonly RULE_single_gap = 19;
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
	public static readonly RULE_lines = 80;
	public static readonly RULE_s_and_w = 81;
	public static readonly RULE_bracket_escaped = 82;
	public static readonly RULE_clnsp = 83;
	public static readonly RULE_sspl = 84;
	public static readonly RULE_words = 85;
	public static readonly RULE_sp = 86;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"bitmark", "bitmark_", "flashcards", "flashcard_1", "flashcard", "flashcard_set", 
		"flashcard_language_set", "flashcard_language_1", "vocab", "vocab_1", 
		"sx", "sidex", "sidex_NL", "side", "side_NL", "vside", "bitElem", "resource", 
		"gap", "single_gap", "bullet_item", "atpoint", "format", "resource_format", 
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
		"isinfoonly", "atdef", "atdef_", "dollarans", "anchor", "dcolon", "lines", 
		"s_and_w", "bracket_escaped", "clnsp", "sspl", "words", "sp",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'[.'", undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, "'[^'", undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, "'[#'", "']'", "':'", "'&'", "'::'", "'+'", "'.@'", "'>'", 
		"'<'", "'=='", "'\u25BA'", "'\u2192'", undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, "'[@'", undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, "'http://'", "'https://'", 
		"'&audio'", "'&image'", "'&image-zoom'", "'&image-with-audio'", "'&video'", 
		"'&article'", "'&document'", "'&app'", "'&website'", "'&still-image-film'", 
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
		undefined, "OPDOT", "S", "BitFlash1", "BitFlash", "BitFlashcardset", "BitFlashcardlangset", 
		"BitFlashcardlang1", "BitVocabulary", "BitVocabulary_1", "COMMENT", "Image_type", 
		"Audio_type", "Video_type", "OPDOLL", "OPBUL", "OPESC", "OPRANGLES", "OPRANGLEL", 
		"OPDANGLE", "OPU", "OPB", "OPQ", "OPA", "OPP", "OPM", "OPS", "OPR", "OPC", 
		"OPHASH", "CL", "COLON", "AMP", "DBLCOLON", "PLUS", "DotAt", "Greater", 
		"Less", "DBLEQ", "RightAngle", "RightArrow", "EQ", "EQ2", "OR", "HSPL", 
		"HSPL2", "SSPL", "SSPL2", "DCANY", "ArticleText", "NOTCL", "NUMERIC", 
		"STRING", "NL", "SENTENCE", "BARSTRING", "OPAT", "AtProgress", "AtReference", 
		"AtWidth", "AtHeight", "AtProgressPoints", "AtShortanswer", "AtLonganswer", 
		"AtExampleWithStr", "AtExamplecol", "AtExamplecl", "AtPartialAnswerS", 
		"AtPartialAnswer", "AtLabeltrue", "AtLabelfalse", "AtPoints", "AtSrc", 
		"OPATALT", "OPAMARK", "ShowInIndex", "OpAtCaption", "OpAtLicense", "OpAtCopyright", 
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
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(flashcardParser._LITERAL_NAMES, flashcardParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return flashcardParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "flashcardParser.g4"; }

	// @Override
	public get ruleNames(): string[] { return flashcardParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return flashcardParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(flashcardParser._ATN, this);
	}
	// @RuleVersion(0)
	public bitmark(): BitmarkContext {
		let _localctx: BitmarkContext = new BitmarkContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, flashcardParser.RULE_bitmark);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 187;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 174;
				this.bitmark_();
				this.state = 184;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 1, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 178;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						while (_la === flashcardParser.S) {
							{
							{
							this.state = 175;
							this.match(flashcardParser.S);
							}
							}
							this.state = 180;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
						}
						this.state = 181;
						this.match(flashcardParser.NL);
						}
						}
					}
					this.state = 186;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 1, this._ctx);
				}
				}
				}
				this.state = 189;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << flashcardParser.BitFlash1) | (1 << flashcardParser.BitFlash) | (1 << flashcardParser.BitFlashcardset) | (1 << flashcardParser.BitFlashcardlangset) | (1 << flashcardParser.BitFlashcardlang1) | (1 << flashcardParser.BitVocabulary) | (1 << flashcardParser.BitVocabulary_1))) !== 0));
			this.state = 194;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === flashcardParser.NL) {
				{
				{
				this.state = 191;
				this.match(flashcardParser.NL);
				}
				}
				this.state = 196;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 197;
			this.match(flashcardParser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 2, flashcardParser.RULE_bitmark_);
		try {
			this.state = 202;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case flashcardParser.BitFlash1:
			case flashcardParser.BitFlash:
			case flashcardParser.BitFlashcardset:
			case flashcardParser.BitFlashcardlangset:
			case flashcardParser.BitFlashcardlang1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 199;
				this.flashcards();
				}
				break;
			case flashcardParser.BitVocabulary:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 200;
				this.vocab();
				}
				break;
			case flashcardParser.BitVocabulary_1:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 201;
				this.vocab_1();
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
	public flashcards(): FlashcardsContext {
		let _localctx: FlashcardsContext = new FlashcardsContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, flashcardParser.RULE_flashcards);
		try {
			this.state = 209;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case flashcardParser.BitFlash:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 204;
				this.flashcard();
				}
				break;
			case flashcardParser.BitFlash1:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 205;
				this.flashcard_1();
				}
				break;
			case flashcardParser.BitFlashcardset:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 206;
				this.flashcard_set();
				}
				break;
			case flashcardParser.BitFlashcardlangset:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 207;
				this.flashcard_language_set();
				}
				break;
			case flashcardParser.BitFlashcardlang1:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 208;
				this.flashcard_language_1();
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
	public flashcard_1(): Flashcard_1Context {
		let _localctx: Flashcard_1Context = new Flashcard_1Context(this._ctx, this.state);
		this.enterRule(_localctx, 6, flashcardParser.RULE_flashcard_1);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 211;
			this.match(flashcardParser.BitFlash1);
			this.state = 212;
			this.format();
			this.state = 213;
			this.match(flashcardParser.CL);
			this.state = 214;
			this.match(flashcardParser.NL);
			this.state = 215;
			this.side();
			this.state = 216;
			_la = this._input.LA(1);
			if (!(_la === flashcardParser.EQ || _la === flashcardParser.EQ2)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 217;
			this.side();
			this.state = 221;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 6, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 218;
					this.match(flashcardParser.NL);
					}
					}
				}
				this.state = 223;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 6, this._ctx);
			}
			this.state = 237;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 9, this._ctx) ) {
			case 1:
				{
				this.state = 224;
				this.resource();
				this.state = 234;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 8, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 228;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						while (_la === flashcardParser.NL) {
							{
							{
							this.state = 225;
							this.match(flashcardParser.NL);
							}
							}
							this.state = 230;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
						}
						this.state = 231;
						this.resource();
						}
						}
					}
					this.state = 236;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 8, this._ctx);
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
	public flashcard(): FlashcardContext {
		let _localctx: FlashcardContext = new FlashcardContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, flashcardParser.RULE_flashcard);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 239;
			this.match(flashcardParser.BitFlash);
			this.state = 240;
			this.format();
			this.state = 241;
			this.match(flashcardParser.CL);
			this.state = 245;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === flashcardParser.NL) {
				{
				{
				this.state = 242;
				this.match(flashcardParser.NL);
				}
				}
				this.state = 247;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 248;
			_la = this._input.LA(1);
			if (!(_la === flashcardParser.HSPL || _la === flashcardParser.HSPL2)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 249;
			this.side();
			this.state = 250;
			_la = this._input.LA(1);
			if (!(_la === flashcardParser.EQ || _la === flashcardParser.EQ2)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 251;
			this.side();
			this.state = 259;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 11, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 252;
					_la = this._input.LA(1);
					if (!(_la === flashcardParser.HSPL || _la === flashcardParser.HSPL2)) {
					this._errHandler.recoverInline(this);
					} else {
						if (this._input.LA(1) === Token.EOF) {
							this.matchedEOF = true;
						}

						this._errHandler.reportMatch(this);
						this.consume();
					}
					this.state = 253;
					this.side();
					this.state = 254;
					_la = this._input.LA(1);
					if (!(_la === flashcardParser.EQ || _la === flashcardParser.EQ2)) {
					this._errHandler.recoverInline(this);
					} else {
						if (this._input.LA(1) === Token.EOF) {
							this.matchedEOF = true;
						}

						this._errHandler.reportMatch(this);
						this.consume();
					}
					this.state = 255;
					this.side();
					}
					}
				}
				this.state = 261;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 11, this._ctx);
			}
			this.state = 262;
			_la = this._input.LA(1);
			if (!(_la === flashcardParser.HSPL || _la === flashcardParser.HSPL2)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 266;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 12, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 263;
					this.match(flashcardParser.NL);
					}
					}
				}
				this.state = 268;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 12, this._ctx);
			}
			this.state = 282;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 15, this._ctx) ) {
			case 1:
				{
				this.state = 269;
				this.resource();
				this.state = 279;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 14, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 273;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						while (_la === flashcardParser.NL) {
							{
							{
							this.state = 270;
							this.match(flashcardParser.NL);
							}
							}
							this.state = 275;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
						}
						this.state = 276;
						this.resource();
						}
						}
					}
					this.state = 281;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 14, this._ctx);
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
	public flashcard_set(): Flashcard_setContext {
		let _localctx: Flashcard_setContext = new Flashcard_setContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, flashcardParser.RULE_flashcard_set);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 284;
			this.match(flashcardParser.BitFlashcardset);
			this.state = 285;
			this.format();
			this.state = 286;
			this.match(flashcardParser.CL);
			this.state = 290;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === flashcardParser.NL) {
				{
				{
				this.state = 287;
				this.match(flashcardParser.NL);
				}
				}
				this.state = 292;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 298;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 17, this._ctx) ) {
			case 1:
				{
				this.state = 293;
				_la = this._input.LA(1);
				if (!(_la === flashcardParser.HSPL || _la === flashcardParser.HSPL2)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 294;
				this.side();
				this.state = 295;
				_la = this._input.LA(1);
				if (!(_la === flashcardParser.EQ || _la === flashcardParser.EQ2)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 296;
				this.side();
				}
				break;
			}
			this.state = 314;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 19, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 300;
					_la = this._input.LA(1);
					if (!(_la === flashcardParser.HSPL || _la === flashcardParser.HSPL2)) {
					this._errHandler.recoverInline(this);
					} else {
						if (this._input.LA(1) === Token.EOF) {
							this.matchedEOF = true;
						}

						this._errHandler.reportMatch(this);
						this.consume();
					}
					this.state = 301;
					this.side();
					this.state = 302;
					_la = this._input.LA(1);
					if (!(_la === flashcardParser.EQ || _la === flashcardParser.EQ2)) {
					this._errHandler.recoverInline(this);
					} else {
						if (this._input.LA(1) === Token.EOF) {
							this.matchedEOF = true;
						}

						this._errHandler.reportMatch(this);
						this.consume();
					}
					this.state = 303;
					this.side();
					this.state = 309;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === flashcardParser.NL) {
						{
						{
						this.state = 304;
						this.match(flashcardParser.NL);
						this.state = 305;
						this.match(flashcardParser.OR);
						this.state = 306;
						this.side();
						}
						}
						this.state = 311;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
					}
				}
				this.state = 316;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 19, this._ctx);
			}
			this.state = 317;
			_la = this._input.LA(1);
			if (!(_la === flashcardParser.HSPL || _la === flashcardParser.HSPL2)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 321;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 20, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 318;
					this.match(flashcardParser.NL);
					}
					}
				}
				this.state = 323;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 20, this._ctx);
			}
			this.state = 337;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 23, this._ctx) ) {
			case 1:
				{
				this.state = 324;
				this.resource();
				this.state = 334;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 22, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 328;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						while (_la === flashcardParser.NL) {
							{
							{
							this.state = 325;
							this.match(flashcardParser.NL);
							}
							}
							this.state = 330;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
						}
						this.state = 331;
						this.resource();
						}
						}
					}
					this.state = 336;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 22, this._ctx);
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
	public flashcard_language_set(): Flashcard_language_setContext {
		let _localctx: Flashcard_language_setContext = new Flashcard_language_setContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, flashcardParser.RULE_flashcard_language_set);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 339;
			this.match(flashcardParser.BitFlashcardlangset);
			this.state = 340;
			this.format();
			this.state = 341;
			this.match(flashcardParser.CL);
			this.state = 345;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === flashcardParser.NL) {
				{
				{
				this.state = 342;
				this.match(flashcardParser.NL);
				}
				}
				this.state = 347;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 348;
			this.sidex_NL();
			this.state = 360;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 349;
					_la = this._input.LA(1);
					if (!(_la === flashcardParser.HSPL || _la === flashcardParser.HSPL2)) {
					this._errHandler.recoverInline(this);
					} else {
						if (this._input.LA(1) === Token.EOF) {
							this.matchedEOF = true;
						}

						this._errHandler.reportMatch(this);
						this.consume();
					}
					this.state = 350;
					this.sidex();
					{
					this.state = 351;
					this.match(flashcardParser.NL);
					this.state = 352;
					this.sidex_NL();
					}
					this.state = 356;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					do {
						{
						{
						this.state = 354;
						_la = this._input.LA(1);
						if (!(_la === flashcardParser.EQ || _la === flashcardParser.EQ2)) {
						this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 355;
						this.sidex_NL();
						}
						}
						this.state = 358;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					} while (_la === flashcardParser.EQ || _la === flashcardParser.EQ2);
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 362;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 26, this._ctx);
			} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
			this.state = 364;
			_la = this._input.LA(1);
			if (!(_la === flashcardParser.HSPL || _la === flashcardParser.HSPL2)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 368;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 27, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 365;
					this.match(flashcardParser.NL);
					}
					}
				}
				this.state = 370;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 27, this._ctx);
			}
			this.state = 384;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 30, this._ctx) ) {
			case 1:
				{
				this.state = 371;
				this.resource();
				this.state = 381;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 29, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 375;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						while (_la === flashcardParser.NL) {
							{
							{
							this.state = 372;
							this.match(flashcardParser.NL);
							}
							}
							this.state = 377;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
						}
						this.state = 378;
						this.resource();
						}
						}
					}
					this.state = 383;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 29, this._ctx);
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
	public flashcard_language_1(): Flashcard_language_1Context {
		let _localctx: Flashcard_language_1Context = new Flashcard_language_1Context(this._ctx, this.state);
		this.enterRule(_localctx, 14, flashcardParser.RULE_flashcard_language_1);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 386;
			this.match(flashcardParser.BitFlashcardlang1);
			this.state = 387;
			this.format();
			this.state = 388;
			this.match(flashcardParser.CL);
			this.state = 392;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === flashcardParser.NL) {
				{
				{
				this.state = 389;
				this.match(flashcardParser.NL);
				}
				}
				this.state = 394;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 395;
			this.sidex_NL();
			this.state = 396;
			_la = this._input.LA(1);
			if (!(_la === flashcardParser.EQ || _la === flashcardParser.EQ2)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 397;
			this.sidex();
			{
			this.state = 398;
			this.match(flashcardParser.NL);
			this.state = 399;
			this.sidex_NL();
			}
			this.state = 403;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 401;
				this.match(flashcardParser.OR);
				this.state = 402;
				this.sidex_NL();
				}
				}
				this.state = 405;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === flashcardParser.OR);
			this.state = 410;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 33, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 407;
					this.match(flashcardParser.NL);
					}
					}
				}
				this.state = 412;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 33, this._ctx);
			}
			this.state = 426;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 36, this._ctx) ) {
			case 1:
				{
				this.state = 413;
				this.resource();
				this.state = 423;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 35, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 417;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						while (_la === flashcardParser.NL) {
							{
							{
							this.state = 414;
							this.match(flashcardParser.NL);
							}
							}
							this.state = 419;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
						}
						this.state = 420;
						this.resource();
						}
						}
					}
					this.state = 425;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 35, this._ctx);
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
	public vocab(): VocabContext {
		let _localctx: VocabContext = new VocabContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, flashcardParser.RULE_vocab);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 428;
			this.match(flashcardParser.BitVocabulary);
			this.state = 429;
			this.format();
			this.state = 430;
			this.match(flashcardParser.CL);
			this.state = 434;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === flashcardParser.NL) {
				{
				{
				this.state = 431;
				this.match(flashcardParser.NL);
				}
				}
				this.state = 436;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 446;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << flashcardParser.S) | (1 << flashcardParser.OPRANGLES) | (1 << flashcardParser.OPRANGLEL) | (1 << flashcardParser.OPDANGLE) | (1 << flashcardParser.OPU) | (1 << flashcardParser.OPB) | (1 << flashcardParser.OPQ) | (1 << flashcardParser.OPA) | (1 << flashcardParser.OPS) | (1 << flashcardParser.OPC) | (1 << flashcardParser.OPHASH) | (1 << flashcardParser.COLON))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (flashcardParser.AMP - 32)) | (1 << (flashcardParser.Greater - 32)) | (1 << (flashcardParser.Less - 32)) | (1 << (flashcardParser.RightAngle - 32)) | (1 << (flashcardParser.RightArrow - 32)) | (1 << (flashcardParser.ArticleText - 32)) | (1 << (flashcardParser.NUMERIC - 32)) | (1 << (flashcardParser.STRING - 32)) | (1 << (flashcardParser.SENTENCE - 32)) | (1 << (flashcardParser.BARSTRING - 32)) | (1 << (flashcardParser.AtReference - 32)))) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (flashcardParser.AtExampleWithStr - 64)) | (1 << (flashcardParser.AtExamplecol - 64)) | (1 << (flashcardParser.AtExamplecl - 64)) | (1 << (flashcardParser.AtLabeltrue - 64)) | (1 << (flashcardParser.AtLabelfalse - 64)) | (1 << (flashcardParser.OpAtCopyright - 64)))) !== 0) || ((((_la - 96)) & ~0x1F) === 0 && ((1 << (_la - 96)) & ((1 << (flashcardParser.OpAmpAudio - 96)) | (1 << (flashcardParser.OpAmpImage - 96)) | (1 << (flashcardParser.OpAmpImageZoom - 96)) | (1 << (flashcardParser.OpAmpImageWAudio - 96)) | (1 << (flashcardParser.OpAmpVideo - 96)) | (1 << (flashcardParser.OpAmpArticle - 96)) | (1 << (flashcardParser.OpAmpDocument - 96)) | (1 << (flashcardParser.OpAmpApp - 96)) | (1 << (flashcardParser.OpAmpWebsite - 96)) | (1 << (flashcardParser.OpAmpStillImageFilm - 96)) | (1 << (flashcardParser.OpAmpAudioLink - 96)) | (1 << (flashcardParser.OpAmpImageLink - 96)) | (1 << (flashcardParser.OpAmpVideoLink - 96)) | (1 << (flashcardParser.OpAmpArticleLink - 96)) | (1 << (flashcardParser.OpAmpDocumentLink - 96)) | (1 << (flashcardParser.OpAmpAppLink - 96)) | (1 << (flashcardParser.OpAmpWebsiteLink - 96)) | (1 << (flashcardParser.OpAmpStillImageFilmLink - 96)))) !== 0) || ((((_la - 130)) & ~0x1F) === 0 && ((1 << (_la - 130)) & ((1 << (flashcardParser.OpAmpVideoEmbed - 130)) | (1 << (flashcardParser.OpAmpAudioEmbed - 130)) | (1 << (flashcardParser.OpAmpDocumentEmbed - 130)) | (1 << (flashcardParser.OpAmpStillImageFilmEmbed - 130)) | (1 << (flashcardParser.URL - 130)) | (1 << (flashcardParser.LIST_LINE - 130)))) !== 0)) {
				{
				{
				this.state = 437;
				this.bitElem();
				this.state = 441;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === flashcardParser.NL) {
					{
					{
					this.state = 438;
					this.match(flashcardParser.NL);
					}
					}
					this.state = 443;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
				}
				this.state = 448;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 466;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 449;
					_la = this._input.LA(1);
					if (!(_la === flashcardParser.HSPL || _la === flashcardParser.HSPL2)) {
					this._errHandler.recoverInline(this);
					} else {
						if (this._input.LA(1) === Token.EOF) {
							this.matchedEOF = true;
						}

						this._errHandler.reportMatch(this);
						this.consume();
					}
					this.state = 451;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					do {
						{
						{
						this.state = 450;
						this.vside();
						}
						}
						this.state = 453;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << flashcardParser.S) | (1 << flashcardParser.OPRANGLES) | (1 << flashcardParser.OPRANGLEL) | (1 << flashcardParser.OPDANGLE) | (1 << flashcardParser.OPU) | (1 << flashcardParser.OPB) | (1 << flashcardParser.OPQ) | (1 << flashcardParser.OPA) | (1 << flashcardParser.OPS) | (1 << flashcardParser.OPC) | (1 << flashcardParser.OPHASH) | (1 << flashcardParser.COLON))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (flashcardParser.AMP - 32)) | (1 << (flashcardParser.Greater - 32)) | (1 << (flashcardParser.Less - 32)) | (1 << (flashcardParser.RightAngle - 32)) | (1 << (flashcardParser.RightArrow - 32)) | (1 << (flashcardParser.ArticleText - 32)) | (1 << (flashcardParser.NUMERIC - 32)) | (1 << (flashcardParser.STRING - 32)) | (1 << (flashcardParser.SENTENCE - 32)) | (1 << (flashcardParser.BARSTRING - 32)) | (1 << (flashcardParser.AtReference - 32)))) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (flashcardParser.AtExampleWithStr - 64)) | (1 << (flashcardParser.AtExamplecol - 64)) | (1 << (flashcardParser.AtExamplecl - 64)) | (1 << (flashcardParser.AtLabeltrue - 64)) | (1 << (flashcardParser.AtLabelfalse - 64)) | (1 << (flashcardParser.OpAtCopyright - 64)))) !== 0) || ((((_la - 96)) & ~0x1F) === 0 && ((1 << (_la - 96)) & ((1 << (flashcardParser.OpAmpAudio - 96)) | (1 << (flashcardParser.OpAmpImage - 96)) | (1 << (flashcardParser.OpAmpImageZoom - 96)) | (1 << (flashcardParser.OpAmpImageWAudio - 96)) | (1 << (flashcardParser.OpAmpVideo - 96)) | (1 << (flashcardParser.OpAmpArticle - 96)) | (1 << (flashcardParser.OpAmpDocument - 96)) | (1 << (flashcardParser.OpAmpApp - 96)) | (1 << (flashcardParser.OpAmpWebsite - 96)) | (1 << (flashcardParser.OpAmpStillImageFilm - 96)) | (1 << (flashcardParser.OpAmpAudioLink - 96)) | (1 << (flashcardParser.OpAmpImageLink - 96)) | (1 << (flashcardParser.OpAmpVideoLink - 96)) | (1 << (flashcardParser.OpAmpArticleLink - 96)) | (1 << (flashcardParser.OpAmpDocumentLink - 96)) | (1 << (flashcardParser.OpAmpAppLink - 96)) | (1 << (flashcardParser.OpAmpWebsiteLink - 96)) | (1 << (flashcardParser.OpAmpStillImageFilmLink - 96)))) !== 0) || ((((_la - 130)) & ~0x1F) === 0 && ((1 << (_la - 130)) & ((1 << (flashcardParser.OpAmpVideoEmbed - 130)) | (1 << (flashcardParser.OpAmpAudioEmbed - 130)) | (1 << (flashcardParser.OpAmpDocumentEmbed - 130)) | (1 << (flashcardParser.OpAmpStillImageFilmEmbed - 130)) | (1 << (flashcardParser.URL - 130)) | (1 << (flashcardParser.LIST_LINE - 130)))) !== 0));
					this.state = 463;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === flashcardParser.EQ || _la === flashcardParser.EQ2) {
						{
						{
						this.state = 455;
						_la = this._input.LA(1);
						if (!(_la === flashcardParser.EQ || _la === flashcardParser.EQ2)) {
						this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 457;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						do {
							{
							{
							this.state = 456;
							this.vside();
							}
							}
							this.state = 459;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
						} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << flashcardParser.S) | (1 << flashcardParser.OPRANGLES) | (1 << flashcardParser.OPRANGLEL) | (1 << flashcardParser.OPDANGLE) | (1 << flashcardParser.OPU) | (1 << flashcardParser.OPB) | (1 << flashcardParser.OPQ) | (1 << flashcardParser.OPA) | (1 << flashcardParser.OPS) | (1 << flashcardParser.OPC) | (1 << flashcardParser.OPHASH) | (1 << flashcardParser.COLON))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (flashcardParser.AMP - 32)) | (1 << (flashcardParser.Greater - 32)) | (1 << (flashcardParser.Less - 32)) | (1 << (flashcardParser.RightAngle - 32)) | (1 << (flashcardParser.RightArrow - 32)) | (1 << (flashcardParser.ArticleText - 32)) | (1 << (flashcardParser.NUMERIC - 32)) | (1 << (flashcardParser.STRING - 32)) | (1 << (flashcardParser.SENTENCE - 32)) | (1 << (flashcardParser.BARSTRING - 32)) | (1 << (flashcardParser.AtReference - 32)))) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (flashcardParser.AtExampleWithStr - 64)) | (1 << (flashcardParser.AtExamplecol - 64)) | (1 << (flashcardParser.AtExamplecl - 64)) | (1 << (flashcardParser.AtLabeltrue - 64)) | (1 << (flashcardParser.AtLabelfalse - 64)) | (1 << (flashcardParser.OpAtCopyright - 64)))) !== 0) || ((((_la - 96)) & ~0x1F) === 0 && ((1 << (_la - 96)) & ((1 << (flashcardParser.OpAmpAudio - 96)) | (1 << (flashcardParser.OpAmpImage - 96)) | (1 << (flashcardParser.OpAmpImageZoom - 96)) | (1 << (flashcardParser.OpAmpImageWAudio - 96)) | (1 << (flashcardParser.OpAmpVideo - 96)) | (1 << (flashcardParser.OpAmpArticle - 96)) | (1 << (flashcardParser.OpAmpDocument - 96)) | (1 << (flashcardParser.OpAmpApp - 96)) | (1 << (flashcardParser.OpAmpWebsite - 96)) | (1 << (flashcardParser.OpAmpStillImageFilm - 96)) | (1 << (flashcardParser.OpAmpAudioLink - 96)) | (1 << (flashcardParser.OpAmpImageLink - 96)) | (1 << (flashcardParser.OpAmpVideoLink - 96)) | (1 << (flashcardParser.OpAmpArticleLink - 96)) | (1 << (flashcardParser.OpAmpDocumentLink - 96)) | (1 << (flashcardParser.OpAmpAppLink - 96)) | (1 << (flashcardParser.OpAmpWebsiteLink - 96)) | (1 << (flashcardParser.OpAmpStillImageFilmLink - 96)))) !== 0) || ((((_la - 130)) & ~0x1F) === 0 && ((1 << (_la - 130)) & ((1 << (flashcardParser.OpAmpVideoEmbed - 130)) | (1 << (flashcardParser.OpAmpAudioEmbed - 130)) | (1 << (flashcardParser.OpAmpDocumentEmbed - 130)) | (1 << (flashcardParser.OpAmpStillImageFilmEmbed - 130)) | (1 << (flashcardParser.URL - 130)) | (1 << (flashcardParser.LIST_LINE - 130)))) !== 0));
						}
						}
						this.state = 465;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 468;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 43, this._ctx);
			} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
			this.state = 470;
			_la = this._input.LA(1);
			if (!(_la === flashcardParser.HSPL || _la === flashcardParser.HSPL2)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 474;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 44, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 471;
					this.match(flashcardParser.NL);
					}
					}
				}
				this.state = 476;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 44, this._ctx);
			}
			this.state = 490;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 47, this._ctx) ) {
			case 1:
				{
				this.state = 477;
				this.resource();
				this.state = 487;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 46, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 481;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						while (_la === flashcardParser.NL) {
							{
							{
							this.state = 478;
							this.match(flashcardParser.NL);
							}
							}
							this.state = 483;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
						}
						this.state = 484;
						this.resource();
						}
						}
					}
					this.state = 489;
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
	public vocab_1(): Vocab_1Context {
		let _localctx: Vocab_1Context = new Vocab_1Context(this._ctx, this.state);
		this.enterRule(_localctx, 18, flashcardParser.RULE_vocab_1);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 492;
			this.match(flashcardParser.BitVocabulary_1);
			this.state = 493;
			this.format();
			this.state = 494;
			this.match(flashcardParser.CL);
			this.state = 498;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === flashcardParser.NL) {
				{
				{
				this.state = 495;
				this.match(flashcardParser.NL);
				}
				}
				this.state = 500;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 510;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << flashcardParser.S) | (1 << flashcardParser.OPRANGLES) | (1 << flashcardParser.OPRANGLEL) | (1 << flashcardParser.OPDANGLE) | (1 << flashcardParser.OPU) | (1 << flashcardParser.OPB) | (1 << flashcardParser.OPQ) | (1 << flashcardParser.OPA) | (1 << flashcardParser.OPS) | (1 << flashcardParser.OPC) | (1 << flashcardParser.OPHASH) | (1 << flashcardParser.COLON))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (flashcardParser.AMP - 32)) | (1 << (flashcardParser.Greater - 32)) | (1 << (flashcardParser.Less - 32)) | (1 << (flashcardParser.RightAngle - 32)) | (1 << (flashcardParser.RightArrow - 32)) | (1 << (flashcardParser.ArticleText - 32)) | (1 << (flashcardParser.NUMERIC - 32)) | (1 << (flashcardParser.STRING - 32)) | (1 << (flashcardParser.SENTENCE - 32)) | (1 << (flashcardParser.BARSTRING - 32)) | (1 << (flashcardParser.AtReference - 32)))) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (flashcardParser.AtExampleWithStr - 64)) | (1 << (flashcardParser.AtExamplecol - 64)) | (1 << (flashcardParser.AtExamplecl - 64)) | (1 << (flashcardParser.AtLabeltrue - 64)) | (1 << (flashcardParser.AtLabelfalse - 64)) | (1 << (flashcardParser.OpAtCopyright - 64)))) !== 0) || ((((_la - 96)) & ~0x1F) === 0 && ((1 << (_la - 96)) & ((1 << (flashcardParser.OpAmpAudio - 96)) | (1 << (flashcardParser.OpAmpImage - 96)) | (1 << (flashcardParser.OpAmpImageZoom - 96)) | (1 << (flashcardParser.OpAmpImageWAudio - 96)) | (1 << (flashcardParser.OpAmpVideo - 96)) | (1 << (flashcardParser.OpAmpArticle - 96)) | (1 << (flashcardParser.OpAmpDocument - 96)) | (1 << (flashcardParser.OpAmpApp - 96)) | (1 << (flashcardParser.OpAmpWebsite - 96)) | (1 << (flashcardParser.OpAmpStillImageFilm - 96)) | (1 << (flashcardParser.OpAmpAudioLink - 96)) | (1 << (flashcardParser.OpAmpImageLink - 96)) | (1 << (flashcardParser.OpAmpVideoLink - 96)) | (1 << (flashcardParser.OpAmpArticleLink - 96)) | (1 << (flashcardParser.OpAmpDocumentLink - 96)) | (1 << (flashcardParser.OpAmpAppLink - 96)) | (1 << (flashcardParser.OpAmpWebsiteLink - 96)) | (1 << (flashcardParser.OpAmpStillImageFilmLink - 96)))) !== 0) || ((((_la - 130)) & ~0x1F) === 0 && ((1 << (_la - 130)) & ((1 << (flashcardParser.OpAmpVideoEmbed - 130)) | (1 << (flashcardParser.OpAmpAudioEmbed - 130)) | (1 << (flashcardParser.OpAmpDocumentEmbed - 130)) | (1 << (flashcardParser.OpAmpStillImageFilmEmbed - 130)) | (1 << (flashcardParser.URL - 130)) | (1 << (flashcardParser.LIST_LINE - 130)))) !== 0)) {
				{
				{
				this.state = 501;
				this.bitElem();
				this.state = 505;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === flashcardParser.NL) {
					{
					{
					this.state = 502;
					this.match(flashcardParser.NL);
					}
					}
					this.state = 507;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
				}
				this.state = 512;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 513;
			_la = this._input.LA(1);
			if (!(_la === flashcardParser.EQ || _la === flashcardParser.EQ2)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 515;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 514;
					this.vside();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 517;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 51, this._ctx);
			} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
			this.state = 527;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 53, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 519;
					this.match(flashcardParser.OR);
					this.state = 521;
					this._errHandler.sync(this);
					_alt = 1;
					do {
						switch (_alt) {
						case 1:
							{
							{
							this.state = 520;
							this.vside();
							}
							}
							break;
						default:
							throw new NoViableAltException(this);
						}
						this.state = 523;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 52, this._ctx);
					} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
					}
					}
				}
				this.state = 529;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 53, this._ctx);
			}
			this.state = 544;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === flashcardParser.OR) {
				{
				this.state = 530;
				this.match(flashcardParser.OR);
				this.state = 531;
				this.resource();
				this.state = 541;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 55, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 535;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						while (_la === flashcardParser.NL) {
							{
							{
							this.state = 532;
							this.match(flashcardParser.NL);
							}
							}
							this.state = 537;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
						}
						this.state = 538;
						this.resource();
						}
						}
					}
					this.state = 543;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 55, this._ctx);
				}
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
	public sx(): SxContext {
		let _localctx: SxContext = new SxContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, flashcardParser.RULE_sx);
		try {
			this.state = 551;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case flashcardParser.OPA:
			case flashcardParser.OpAtCopyright:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 546;
				this.atdef();
				}
				break;
			case flashcardParser.S:
			case flashcardParser.OPS:
			case flashcardParser.COLON:
			case flashcardParser.AMP:
			case flashcardParser.Greater:
			case flashcardParser.Less:
			case flashcardParser.RightAngle:
			case flashcardParser.RightArrow:
			case flashcardParser.NUMERIC:
			case flashcardParser.STRING:
			case flashcardParser.SENTENCE:
			case flashcardParser.BARSTRING:
			case flashcardParser.URL:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 547;
				this.s_and_w();
				}
				break;
			case flashcardParser.OPB:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 548;
				this.instruction();
				}
				break;
			case flashcardParser.OpAmpImage:
			case flashcardParser.OpAmpImageZoom:
			case flashcardParser.OpAmpImageWAudio:
			case flashcardParser.OpAmpImageLink:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 549;
				this.imagebit();
				}
				break;
			case flashcardParser.OpAmpAudio:
			case flashcardParser.OpAmpAudioLink:
			case flashcardParser.OpAmpAudioEmbed:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 550;
				this.audiobit();
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
	public sidex(): SidexContext {
		let _localctx: SidexContext = new SidexContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, flashcardParser.RULE_sidex);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 553;
			this.sx();
			this.state = 560;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 59, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 555;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === flashcardParser.NL) {
						{
						this.state = 554;
						this.match(flashcardParser.NL);
						}
					}

					this.state = 557;
					this.sx();
					}
					}
				}
				this.state = 562;
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
	public sidex_NL(): Sidex_NLContext {
		let _localctx: Sidex_NLContext = new Sidex_NLContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, flashcardParser.RULE_sidex_NL);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 563;
			this.bitElem();
			this.state = 567;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 60, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 564;
					this.match(flashcardParser.NL);
					}
					}
				}
				this.state = 569;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 60, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public side(): SideContext {
		let _localctx: SideContext = new SideContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, flashcardParser.RULE_side);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 570;
			this.sidex();
			this.state = 575;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === flashcardParser.OR) {
				{
				{
				this.state = 571;
				this.match(flashcardParser.OR);
				this.state = 572;
				this.sidex();
				}
				}
				this.state = 577;
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
	public side_NL(): Side_NLContext {
		let _localctx: Side_NLContext = new Side_NLContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, flashcardParser.RULE_side_NL);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 578;
			this.sidex_NL();
			this.state = 583;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === flashcardParser.OR) {
				{
				{
				this.state = 579;
				this.match(flashcardParser.OR);
				this.state = 580;
				this.sidex_NL();
				}
				}
				this.state = 585;
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
	public vside(): VsideContext {
		let _localctx: VsideContext = new VsideContext(this._ctx, this.state);
		this.enterRule(_localctx, 30, flashcardParser.RULE_vside);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 586;
			this.sidex_NL();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 32, flashcardParser.RULE_bitElem);
		try {
			this.state = 610;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 63, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 588;
				this.match(flashcardParser.LIST_LINE);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 589;
				this.gap();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 590;
				this.atdef();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 591;
				this.reference();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 592;
				this.item();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 593;
				this.title();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 594;
				this.instruction();
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 595;
				this.hint();
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 596;
				this.s_and_w();
				}
				break;

			case 10:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 597;
				this.example();
				}
				break;

			case 11:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 598;
				this.bool_label();
				}
				break;

			case 12:
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 599;
				this.imagebit();
				}
				break;

			case 13:
				this.enterOuterAlt(_localctx, 13);
				{
				this.state = 600;
				this.audiobit();
				}
				break;

			case 14:
				this.enterOuterAlt(_localctx, 14);
				{
				this.state = 601;
				this.videobit();
				}
				break;

			case 15:
				this.enterOuterAlt(_localctx, 15);
				{
				this.state = 602;
				this.articlebit();
				}
				break;

			case 16:
				this.enterOuterAlt(_localctx, 16);
				{
				this.state = 603;
				this.documentbit();
				}
				break;

			case 17:
				this.enterOuterAlt(_localctx, 17);
				{
				this.state = 604;
				this.appbit();
				}
				break;

			case 18:
				this.enterOuterAlt(_localctx, 18);
				{
				this.state = 605;
				this.websitebit();
				}
				break;

			case 19:
				this.enterOuterAlt(_localctx, 19);
				{
				this.state = 606;
				this.stillimagefilmbit();
				}
				break;

			case 20:
				this.enterOuterAlt(_localctx, 20);
				{
				this.state = 607;
				this.angleref();
				}
				break;

			case 21:
				this.enterOuterAlt(_localctx, 21);
				{
				this.state = 608;
				this.anchor();
				}
				break;

			case 22:
				this.enterOuterAlt(_localctx, 22);
				{
				this.state = 609;
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
		this.enterRule(_localctx, 34, flashcardParser.RULE_resource);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 612;
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
		this.enterRule(_localctx, 36, flashcardParser.RULE_gap);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 614;
			this.single_gap();
			this.state = 622;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 65, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					this.state = 620;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case flashcardParser.OPU:
						{
						this.state = 615;
						this.single_gap();
						}
						break;
					case flashcardParser.OPB:
						{
						this.state = 616;
						this.instruction();
						}
						break;
					case flashcardParser.OPQ:
						{
						this.state = 617;
						this.hint();
						}
						break;
					case flashcardParser.OPC:
						{
						this.state = 618;
						this.item();
						}
						break;
					case flashcardParser.AtExampleWithStr:
					case flashcardParser.AtExamplecol:
					case flashcardParser.AtExamplecl:
						{
						this.state = 619;
						this.example();
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					}
				}
				this.state = 624;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 65, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 38, flashcardParser.RULE_single_gap);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 625;
			this.match(flashcardParser.OPU);
			this.state = 629;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 66, this._ctx) ) {
			case 1:
				{
				this.state = 626;
				this.match(flashcardParser.NUMERIC);
				}
				break;

			case 2:
				{
				this.state = 627;
				this.match(flashcardParser.STRING);
				}
				break;

			case 3:
				// tslint:disable-next-line:no-empty
				{
				}
				break;
			}
			this.state = 634;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << flashcardParser.S) | (1 << flashcardParser.OPS) | (1 << flashcardParser.COLON))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (flashcardParser.AMP - 32)) | (1 << (flashcardParser.Greater - 32)) | (1 << (flashcardParser.Less - 32)) | (1 << (flashcardParser.RightAngle - 32)) | (1 << (flashcardParser.RightArrow - 32)) | (1 << (flashcardParser.NUMERIC - 32)) | (1 << (flashcardParser.STRING - 32)) | (1 << (flashcardParser.SENTENCE - 32)) | (1 << (flashcardParser.BARSTRING - 32)))) !== 0) || _la === flashcardParser.URL) {
				{
				{
				this.state = 631;
				this.s_and_w();
				}
				}
				this.state = 636;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 637;
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
		this.enterRule(_localctx, 40, flashcardParser.RULE_bullet_item);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 639;
			this.match(flashcardParser.OPBUL);
			this.state = 640;
			this.s_and_w();
			this.state = 641;
			this.match(flashcardParser.CL);
			this.state = 643;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === flashcardParser.AtPoints) {
				{
				this.state = 642;
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
		this.enterRule(_localctx, 42, flashcardParser.RULE_atpoint);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 645;
			this.match(flashcardParser.AtPoints);
			this.state = 646;
			this.match(flashcardParser.NUMERIC);
			this.state = 647;
			this.match(flashcardParser.CL);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 44, flashcardParser.RULE_format);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 652;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 69, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 649;
					this.resource_format();
					}
					}
				}
				this.state = 654;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 69, this._ctx);
			}
			this.state = 660;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 85)) & ~0x1F) === 0 && ((1 << (_la - 85)) & ((1 << (flashcardParser.AmpAudio - 85)) | (1 << (flashcardParser.AmpImage - 85)) | (1 << (flashcardParser.AmpImageZoom - 85)) | (1 << (flashcardParser.AmpImageWAudio - 85)) | (1 << (flashcardParser.AmpVideo - 85)) | (1 << (flashcardParser.AmpArticle - 85)) | (1 << (flashcardParser.AmpDocument - 85)) | (1 << (flashcardParser.AmpApp - 85)) | (1 << (flashcardParser.AmpWebsite - 85)) | (1 << (flashcardParser.AmpStillImageFilm - 85)) | (1 << (flashcardParser.AmpPdf - 85)) | (1 << (flashcardParser.AmpAudioLink - 85)) | (1 << (flashcardParser.AmpImageLink - 85)) | (1 << (flashcardParser.AmpVideoLink - 85)) | (1 << (flashcardParser.AmpArticleLink - 85)) | (1 << (flashcardParser.AmpDocumentLink - 85)) | (1 << (flashcardParser.AmpAppLink - 85)) | (1 << (flashcardParser.AmpWebsiteLink - 85)) | (1 << (flashcardParser.AmpStillImageFilmLink - 85)))) !== 0) || ((((_la - 125)) & ~0x1F) === 0 && ((1 << (_la - 125)) & ((1 << (flashcardParser.AmpVideoEmbed - 125)) | (1 << (flashcardParser.AmpDocumentEmbed - 125)) | (1 << (flashcardParser.AmpStillImageFilmEmbed - 125)) | (1 << (flashcardParser.ColonText - 125)) | (1 << (flashcardParser.ColonJson - 125)))) !== 0)) {
				{
				this.state = 658;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case flashcardParser.ColonText:
					{
					this.state = 655;
					this.match(flashcardParser.ColonText);
					}
					break;
				case flashcardParser.ColonJson:
					{
					this.state = 656;
					this.match(flashcardParser.ColonJson);
					}
					break;
				case flashcardParser.AmpAudio:
				case flashcardParser.AmpImage:
				case flashcardParser.AmpImageZoom:
				case flashcardParser.AmpImageWAudio:
				case flashcardParser.AmpVideo:
				case flashcardParser.AmpArticle:
				case flashcardParser.AmpDocument:
				case flashcardParser.AmpApp:
				case flashcardParser.AmpWebsite:
				case flashcardParser.AmpStillImageFilm:
				case flashcardParser.AmpPdf:
				case flashcardParser.AmpAudioLink:
				case flashcardParser.AmpImageLink:
				case flashcardParser.AmpVideoLink:
				case flashcardParser.AmpArticleLink:
				case flashcardParser.AmpDocumentLink:
				case flashcardParser.AmpAppLink:
				case flashcardParser.AmpWebsiteLink:
				case flashcardParser.AmpStillImageFilmLink:
				case flashcardParser.AmpVideoEmbed:
				case flashcardParser.AmpDocumentEmbed:
				case flashcardParser.AmpStillImageFilmEmbed:
					{
					this.state = 657;
					this.resource_format_extra();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				this.state = 662;
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
		this.enterRule(_localctx, 46, flashcardParser.RULE_resource_format);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 663;
			_la = this._input.LA(1);
			if (!(((((_la - 90)) & ~0x1F) === 0 && ((1 << (_la - 90)) & ((1 << (flashcardParser.AmpArticle - 90)) | (1 << (flashcardParser.AmpDocument - 90)) | (1 << (flashcardParser.AmpWebsite - 90)) | (1 << (flashcardParser.AmpStillImageFilm - 90)) | (1 << (flashcardParser.AmpAudioLink - 90)) | (1 << (flashcardParser.AmpImageLink - 90)) | (1 << (flashcardParser.AmpVideoLink - 90)) | (1 << (flashcardParser.AmpArticleLink - 90)) | (1 << (flashcardParser.AmpDocumentLink - 90)) | (1 << (flashcardParser.AmpAppLink - 90)) | (1 << (flashcardParser.AmpWebsiteLink - 90)) | (1 << (flashcardParser.AmpStillImageFilmLink - 90)))) !== 0) || ((((_la - 125)) & ~0x1F) === 0 && ((1 << (_la - 125)) & ((1 << (flashcardParser.AmpVideoEmbed - 125)) | (1 << (flashcardParser.AmpAudioEmbed - 125)) | (1 << (flashcardParser.AmpDocumentEmbed - 125)) | (1 << (flashcardParser.AmpStillImageFilmEmbed - 125)) | (1 << (flashcardParser.BitmarkMinus - 125)) | (1 << (flashcardParser.BitmarkPlus - 125)) | (1 << (flashcardParser.ColonJson - 125)) | (1 << (flashcardParser.Prosemirror - 125)) | (1 << (flashcardParser.Placeholder - 125)))) !== 0))) {
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
		this.enterRule(_localctx, 48, flashcardParser.RULE_resource_format_extra);
		try {
			this.state = 674;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case flashcardParser.AmpImage:
			case flashcardParser.AmpImageZoom:
			case flashcardParser.AmpImageWAudio:
			case flashcardParser.AmpImageLink:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 665;
				this.image_format();
				}
				break;
			case flashcardParser.AmpAudio:
			case flashcardParser.AmpAudioLink:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 666;
				this.audio_format();
				}
				break;
			case flashcardParser.AmpVideo:
			case flashcardParser.AmpVideoLink:
			case flashcardParser.AmpVideoEmbed:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 667;
				this.video_format();
				}
				break;
			case flashcardParser.AmpArticle:
			case flashcardParser.AmpArticleLink:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 668;
				this.article_format();
				}
				break;
			case flashcardParser.AmpDocument:
			case flashcardParser.AmpDocumentLink:
			case flashcardParser.AmpDocumentEmbed:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 669;
				this.document_format();
				}
				break;
			case flashcardParser.AmpApp:
			case flashcardParser.AmpAppLink:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 670;
				this.app_format();
				}
				break;
			case flashcardParser.AmpWebsite:
			case flashcardParser.AmpWebsiteLink:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 671;
				this.website_format();
				}
				break;
			case flashcardParser.AmpStillImageFilm:
			case flashcardParser.AmpStillImageFilmLink:
			case flashcardParser.AmpStillImageFilmEmbed:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 672;
				this.stillimagefilm_format();
				}
				break;
			case flashcardParser.AmpPdf:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 673;
				this.match(flashcardParser.AmpPdf);
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
		this.enterRule(_localctx, 50, flashcardParser.RULE_format2);
		try {
			this.state = 681;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case flashcardParser.BitmarkMinus:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 676;
				this.match(flashcardParser.BitmarkMinus);
				}
				break;
			case flashcardParser.BitmarkPlus:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 677;
				this.match(flashcardParser.BitmarkPlus);
				}
				break;
			case flashcardParser.ColonText:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 678;
				this.match(flashcardParser.ColonText);
				}
				break;
			case flashcardParser.ColonJson:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 679;
				this.match(flashcardParser.ColonJson);
				}
				break;
			case flashcardParser.EOF:
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
		this.enterRule(_localctx, 52, flashcardParser.RULE_image_format);
		let _la: number;
		try {
			this.state = 697;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case flashcardParser.AmpImage:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 683;
				this.match(flashcardParser.AmpImage);
				this.state = 686;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case flashcardParser.Image_type:
					{
					{
					this.state = 684;
					this.match(flashcardParser.Image_type);
					}
					}
					break;
				case flashcardParser.DotArticleAtt:
					{
					{
					this.state = 685;
					this.match(flashcardParser.DotArticleAtt);
					}
					}
					break;
				case flashcardParser.CL:
				case flashcardParser.AmpAudio:
				case flashcardParser.AmpImage:
				case flashcardParser.AmpImageZoom:
				case flashcardParser.AmpImageWAudio:
				case flashcardParser.AmpVideo:
				case flashcardParser.AmpArticle:
				case flashcardParser.AmpDocument:
				case flashcardParser.AmpApp:
				case flashcardParser.AmpWebsite:
				case flashcardParser.AmpStillImageFilm:
				case flashcardParser.AmpPdf:
				case flashcardParser.AmpAudioLink:
				case flashcardParser.AmpImageLink:
				case flashcardParser.AmpVideoLink:
				case flashcardParser.AmpArticleLink:
				case flashcardParser.AmpDocumentLink:
				case flashcardParser.AmpAppLink:
				case flashcardParser.AmpWebsiteLink:
				case flashcardParser.AmpStillImageFilmLink:
				case flashcardParser.AmpVideoEmbed:
				case flashcardParser.AmpDocumentEmbed:
				case flashcardParser.AmpStillImageFilmEmbed:
				case flashcardParser.ColonText:
				case flashcardParser.ColonJson:
					break;
				default:
					break;
				}
				}
				break;
			case flashcardParser.AmpImageLink:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 688;
				this.match(flashcardParser.AmpImageLink);
				this.state = 690;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === flashcardParser.Image_type) {
					{
					this.state = 689;
					this.match(flashcardParser.Image_type);
					}
				}

				}
				break;
			case flashcardParser.AmpImageZoom:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 692;
				this.match(flashcardParser.AmpImageZoom);
				this.state = 694;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === flashcardParser.Image_type) {
					{
					this.state = 693;
					this.match(flashcardParser.Image_type);
					}
				}

				}
				break;
			case flashcardParser.AmpImageWAudio:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 696;
				this.match(flashcardParser.AmpImageWAudio);
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
		this.enterRule(_localctx, 54, flashcardParser.RULE_video_format);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 699;
			_la = this._input.LA(1);
			if (!(_la === flashcardParser.AmpVideo || _la === flashcardParser.AmpVideoLink || _la === flashcardParser.AmpVideoEmbed)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 702;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === flashcardParser.COLON) {
				{
				this.state = 700;
				this.match(flashcardParser.COLON);
				this.state = 701;
				this.match(flashcardParser.Video_type);
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
		this.enterRule(_localctx, 56, flashcardParser.RULE_article_format);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 704;
			_la = this._input.LA(1);
			if (!(_la === flashcardParser.AmpArticle || _la === flashcardParser.AmpArticleLink)) {
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
		this.enterRule(_localctx, 58, flashcardParser.RULE_document_format);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 706;
			_la = this._input.LA(1);
			if (!(_la === flashcardParser.AmpDocument || _la === flashcardParser.AmpDocumentLink || _la === flashcardParser.AmpDocumentEmbed)) {
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
		this.enterRule(_localctx, 60, flashcardParser.RULE_app_format);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 708;
			_la = this._input.LA(1);
			if (!(_la === flashcardParser.AmpApp || _la === flashcardParser.AmpAppLink)) {
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
		this.enterRule(_localctx, 62, flashcardParser.RULE_website_format);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 710;
			_la = this._input.LA(1);
			if (!(_la === flashcardParser.AmpWebsite || _la === flashcardParser.AmpWebsiteLink)) {
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
		this.enterRule(_localctx, 64, flashcardParser.RULE_stillimagefilm_format);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 712;
			_la = this._input.LA(1);
			if (!(_la === flashcardParser.AmpStillImageFilm || _la === flashcardParser.AmpStillImageFilmLink || _la === flashcardParser.AmpStillImageFilmEmbed)) {
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
		this.enterRule(_localctx, 66, flashcardParser.RULE_op_article_format);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 714;
			_la = this._input.LA(1);
			if (!(_la === flashcardParser.OpAmpArticle || _la === flashcardParser.OpAmpArticleLink)) {
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
		this.enterRule(_localctx, 68, flashcardParser.RULE_op_document_format);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 716;
			_la = this._input.LA(1);
			if (!(((((_la - 103)) & ~0x1F) === 0 && ((1 << (_la - 103)) & ((1 << (flashcardParser.OpAmpDocument - 103)) | (1 << (flashcardParser.OpAmpDocumentLink - 103)) | (1 << (flashcardParser.OpAmpDocumentEmbed - 103)))) !== 0))) {
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
		this.enterRule(_localctx, 70, flashcardParser.RULE_op_app_format);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 718;
			_la = this._input.LA(1);
			if (!(_la === flashcardParser.OpAmpApp || _la === flashcardParser.OpAmpAppLink)) {
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
		this.enterRule(_localctx, 72, flashcardParser.RULE_op_website_format);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 720;
			_la = this._input.LA(1);
			if (!(_la === flashcardParser.OpAmpWebsite || _la === flashcardParser.OpAmpWebsiteLink)) {
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
		this.enterRule(_localctx, 74, flashcardParser.RULE_op_video_format);
		try {
			this.state = 737;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case flashcardParser.OpAmpVideo:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 722;
				this.match(flashcardParser.OpAmpVideo);
				this.state = 725;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 79, this._ctx) ) {
				case 1:
					{
					this.state = 723;
					this.match(flashcardParser.COLON);
					this.state = 724;
					this.match(flashcardParser.Video_type);
					}
					break;
				}
				}
				break;
			case flashcardParser.OpAmpVideoLink:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 727;
				this.match(flashcardParser.OpAmpVideoLink);
				this.state = 730;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 80, this._ctx) ) {
				case 1:
					{
					this.state = 728;
					this.match(flashcardParser.COLON);
					this.state = 729;
					this.match(flashcardParser.Video_type);
					}
					break;
				}
				}
				break;
			case flashcardParser.OpAmpVideoEmbed:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 732;
				this.match(flashcardParser.OpAmpVideoEmbed);
				this.state = 735;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 81, this._ctx) ) {
				case 1:
					{
					this.state = 733;
					this.match(flashcardParser.COLON);
					this.state = 734;
					this.match(flashcardParser.Video_type);
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
		this.enterRule(_localctx, 76, flashcardParser.RULE_op_stillimagefilm_format);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 739;
			_la = this._input.LA(1);
			if (!(((((_la - 106)) & ~0x1F) === 0 && ((1 << (_la - 106)) & ((1 << (flashcardParser.OpAmpStillImageFilm - 106)) | (1 << (flashcardParser.OpAmpStillImageFilmLink - 106)) | (1 << (flashcardParser.OpAmpStillImageFilmEmbed - 106)))) !== 0))) {
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
		this.enterRule(_localctx, 78, flashcardParser.RULE_articlebit);
		try {
			this.state = 747;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case flashcardParser.OpAmpArticle:
			case flashcardParser.OpAmpArticleLink:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 741;
				this.op_article_format();
				this.state = 742;
				this.match(flashcardParser.COLON);
				this.state = 743;
				this.url();
				this.state = 744;
				this.match(flashcardParser.CL);
				}
				break;
			case flashcardParser.ArticleText:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 746;
				this.match(flashcardParser.ArticleText);
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
		this.enterRule(_localctx, 80, flashcardParser.RULE_documentbit);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 749;
			this.op_document_format();
			this.state = 750;
			this.match(flashcardParser.COLON);
			this.state = 751;
			this.url();
			this.state = 752;
			this.match(flashcardParser.CL);
			this.state = 757;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === flashcardParser.OPATALT) {
				{
				this.state = 753;
				this.match(flashcardParser.OPATALT);
				this.state = 754;
				this.words();
				this.state = 755;
				this.match(flashcardParser.CL);
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
		this.enterRule(_localctx, 82, flashcardParser.RULE_websitebit);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 759;
			this.op_website_format();
			this.state = 760;
			this.match(flashcardParser.COLON);
			this.state = 761;
			this.url();
			this.state = 762;
			this.match(flashcardParser.CL);
			this.state = 767;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === flashcardParser.OPATALT) {
				{
				this.state = 763;
				this.match(flashcardParser.OPATALT);
				this.state = 764;
				this.words();
				this.state = 765;
				this.match(flashcardParser.CL);
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
		this.enterRule(_localctx, 84, flashcardParser.RULE_appbit);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 769;
			this.op_app_format();
			this.state = 770;
			this.match(flashcardParser.COLON);
			this.state = 773;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case flashcardParser.URL:
				{
				this.state = 771;
				this.url();
				}
				break;
			case flashcardParser.TEL:
				{
				this.state = 772;
				this.telephone();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 775;
			this.match(flashcardParser.CL);
			this.state = 780;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === flashcardParser.OPATALT) {
				{
				this.state = 776;
				this.match(flashcardParser.OPATALT);
				this.state = 777;
				this.words();
				this.state = 778;
				this.match(flashcardParser.CL);
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
		this.enterRule(_localctx, 86, flashcardParser.RULE_stillimagefilmbit);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 782;
			this.stillimg_one();
			this.state = 786;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 88, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 783;
					this.resource_chained();
					}
					}
				}
				this.state = 788;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 88, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 88, flashcardParser.RULE_stillimg_one);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 789;
			this.op_stillimagefilm_format();
			this.state = 790;
			this.match(flashcardParser.COLON);
			this.state = 794;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === flashcardParser.S) {
				{
				{
				this.state = 791;
				this.match(flashcardParser.S);
				}
				}
				this.state = 796;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 797;
			this.url();
			this.state = 798;
			this.match(flashcardParser.CL);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 90, flashcardParser.RULE_videobit);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 800;
			this.video_one();
			this.state = 804;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 90, this._ctx);
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
				_alt = this.interpreter.adaptivePredict(this._input, 90, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 92, flashcardParser.RULE_video_one);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 807;
			this.op_video_format();
			this.state = 808;
			this.match(flashcardParser.COLON);
			this.state = 809;
			this.url();
			this.state = 810;
			this.match(flashcardParser.CL);
			this.state = 815;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 91, this._ctx) ) {
			case 1:
				{
				this.state = 811;
				this.match(flashcardParser.OPATALT);
				this.state = 812;
				this.words();
				this.state = 813;
				this.match(flashcardParser.CL);
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
		this.enterRule(_localctx, 94, flashcardParser.RULE_imagebit);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 817;
			this.image_one();
			this.state = 821;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 92, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 818;
					this.image_chained();
					}
					}
				}
				this.state = 823;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 92, this._ctx);
			}
			this.state = 826;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 93, this._ctx) ) {
			case 1:
				{
				this.state = 824;
				this.match(flashcardParser.NL);
				this.state = 825;
				this.match(flashcardParser.ShowInIndex);
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
		this.enterRule(_localctx, 96, flashcardParser.RULE_image_one);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 828;
			this.op_image_format();
			this.state = 829;
			this.match(flashcardParser.COLON);
			this.state = 833;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === flashcardParser.S) {
				{
				{
				this.state = 830;
				this.match(flashcardParser.S);
				}
				}
				this.state = 835;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 836;
			this.url();
			this.state = 837;
			this.match(flashcardParser.CL);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 98, flashcardParser.RULE_op_image_format);
		let _la: number;
		try {
			this.state = 853;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case flashcardParser.OpAmpImage:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 839;
				this.match(flashcardParser.OpAmpImage);
				this.state = 842;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case flashcardParser.Image_type:
					{
					{
					this.state = 840;
					this.match(flashcardParser.Image_type);
					}
					}
					break;
				case flashcardParser.DotArticleAtt:
					{
					{
					this.state = 841;
					this.match(flashcardParser.DotArticleAtt);
					}
					}
					break;
				case flashcardParser.COLON:
					break;
				default:
					break;
				}
				}
				break;
			case flashcardParser.OpAmpImageLink:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 844;
				this.match(flashcardParser.OpAmpImageLink);
				this.state = 846;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === flashcardParser.Image_type) {
					{
					this.state = 845;
					this.match(flashcardParser.Image_type);
					}
				}

				}
				break;
			case flashcardParser.OpAmpImageZoom:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 848;
				this.match(flashcardParser.OpAmpImageZoom);
				this.state = 850;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === flashcardParser.Image_type) {
					{
					this.state = 849;
					this.match(flashcardParser.Image_type);
					}
				}

				}
				break;
			case flashcardParser.OpAmpImageWAudio:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 852;
				this.match(flashcardParser.OpAmpImageWAudio);
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
		this.enterRule(_localctx, 100, flashcardParser.RULE_image_chained);
		let _la: number;
		try {
			let _alt: number;
			this.state = 872;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case flashcardParser.AtSrc:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 855;
				this.match(flashcardParser.AtSrc);
				this.state = 856;
				this.match(flashcardParser.COLON);
				this.state = 857;
				this.url();
				this.state = 858;
				this.match(flashcardParser.CL);
				}
				break;
			case flashcardParser.AtWidth:
			case flashcardParser.AtHeight:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 860;
				_la = this._input.LA(1);
				if (!(_la === flashcardParser.AtWidth || _la === flashcardParser.AtHeight)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 861;
				this.match(flashcardParser.COLON);
				this.state = 862;
				this.match(flashcardParser.NUMERIC);
				this.state = 863;
				this.match(flashcardParser.CL);
				}
				break;
			case flashcardParser.OPATALT:
			case flashcardParser.OpAtCaption:
			case flashcardParser.OpAtLicense:
			case flashcardParser.OpAtCopyright:
			case flashcardParser.OpAtSearch:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 864;
				_la = this._input.LA(1);
				if (!(((((_la - 73)) & ~0x1F) === 0 && ((1 << (_la - 73)) & ((1 << (flashcardParser.OPATALT - 73)) | (1 << (flashcardParser.OpAtCaption - 73)) | (1 << (flashcardParser.OpAtLicense - 73)) | (1 << (flashcardParser.OpAtCopyright - 73)) | (1 << (flashcardParser.OpAtSearch - 73)))) !== 0))) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 868;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 99, this._ctx);
				while (_alt !== 1 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1 + 1) {
						{
						{
						this.state = 865;
						this.matchWildcard();
						}
						}
					}
					this.state = 870;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 99, this._ctx);
				}
				this.state = 871;
				this.match(flashcardParser.CL);
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
		this.enterRule(_localctx, 102, flashcardParser.RULE_image_chained4match);
		let _la: number;
		try {
			let _alt: number;
			this.state = 891;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case flashcardParser.AtSrc:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 874;
				this.match(flashcardParser.AtSrc);
				this.state = 875;
				this.match(flashcardParser.COLON);
				this.state = 876;
				this.url();
				this.state = 877;
				this.match(flashcardParser.CL);
				}
				break;
			case flashcardParser.AtWidth:
			case flashcardParser.AtHeight:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 879;
				_la = this._input.LA(1);
				if (!(_la === flashcardParser.AtWidth || _la === flashcardParser.AtHeight)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 880;
				this.match(flashcardParser.COLON);
				this.state = 881;
				this.match(flashcardParser.NUMERIC);
				this.state = 882;
				this.match(flashcardParser.CL);
				}
				break;
			case flashcardParser.OPATALT:
			case flashcardParser.OpAtCaption:
			case flashcardParser.OpAtLicense:
			case flashcardParser.OpAtCopyright:
			case flashcardParser.OpAtSearch:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 883;
				_la = this._input.LA(1);
				if (!(((((_la - 73)) & ~0x1F) === 0 && ((1 << (_la - 73)) & ((1 << (flashcardParser.OPATALT - 73)) | (1 << (flashcardParser.OpAtCaption - 73)) | (1 << (flashcardParser.OpAtLicense - 73)) | (1 << (flashcardParser.OpAtCopyright - 73)) | (1 << (flashcardParser.OpAtSearch - 73)))) !== 0))) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 887;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 101, this._ctx);
				while (_alt !== 1 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1 + 1) {
						{
						{
						this.state = 884;
						this.matchWildcard();
						}
						}
					}
					this.state = 889;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 101, this._ctx);
				}
				this.state = 890;
				this.match(flashcardParser.CL);
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
		this.enterRule(_localctx, 104, flashcardParser.RULE_audiobit);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 893;
			this.audio_one();
			this.state = 897;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 103, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 894;
					this.resource_chained();
					}
					}
				}
				this.state = 899;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 103, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 106, flashcardParser.RULE_audio_one);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 900;
			this.op_audio_format();
			this.state = 901;
			this.match(flashcardParser.COLON);
			this.state = 902;
			this.url();
			this.state = 903;
			this.match(flashcardParser.CL);
			this.state = 908;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 104, this._ctx) ) {
			case 1:
				{
				this.state = 904;
				this.match(flashcardParser.OPATALT);
				this.state = 905;
				this.words();
				this.state = 906;
				this.match(flashcardParser.CL);
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
		this.enterRule(_localctx, 108, flashcardParser.RULE_audio_format);
		let _la: number;
		try {
			this.state = 920;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case flashcardParser.AmpAudio:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 910;
				this.match(flashcardParser.AmpAudio);
				this.state = 913;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === flashcardParser.COLON) {
					{
					this.state = 911;
					this.match(flashcardParser.COLON);
					this.state = 912;
					this.match(flashcardParser.Audio_type);
					}
				}

				}
				break;
			case flashcardParser.AmpAudioLink:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 915;
				this.match(flashcardParser.AmpAudioLink);
				this.state = 918;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === flashcardParser.COLON) {
					{
					this.state = 916;
					this.match(flashcardParser.COLON);
					this.state = 917;
					this.match(flashcardParser.Audio_type);
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
		this.enterRule(_localctx, 110, flashcardParser.RULE_op_audio_format);
		try {
			this.state = 937;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case flashcardParser.OpAmpAudio:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 922;
				this.match(flashcardParser.OpAmpAudio);
				this.state = 925;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 108, this._ctx) ) {
				case 1:
					{
					this.state = 923;
					this.match(flashcardParser.COLON);
					this.state = 924;
					this.match(flashcardParser.Audio_type);
					}
					break;
				}
				}
				break;
			case flashcardParser.OpAmpAudioLink:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 927;
				this.match(flashcardParser.OpAmpAudioLink);
				this.state = 930;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 109, this._ctx) ) {
				case 1:
					{
					this.state = 928;
					this.match(flashcardParser.COLON);
					this.state = 929;
					this.match(flashcardParser.Audio_type);
					}
					break;
				}
				}
				break;
			case flashcardParser.OpAmpAudioEmbed:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 932;
				this.match(flashcardParser.OpAmpAudioEmbed);
				this.state = 935;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 110, this._ctx) ) {
				case 1:
					{
					this.state = 933;
					this.match(flashcardParser.COLON);
					this.state = 934;
					this.match(flashcardParser.Audio_type);
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
		this.enterRule(_localctx, 112, flashcardParser.RULE_resource_chained);
		let _la: number;
		try {
			let _alt: number;
			this.state = 970;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case flashcardParser.OPA:
			case flashcardParser.AtSrc:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 942;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case flashcardParser.OPA:
					{
					this.state = 939;
					this.match(flashcardParser.OPA);
					this.state = 940;
					this.s_and_w();
					}
					break;
				case flashcardParser.AtSrc:
					{
					this.state = 941;
					this.match(flashcardParser.AtSrc);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 944;
				this.match(flashcardParser.COLON);
				this.state = 948;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 113, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 945;
						this.match(flashcardParser.S);
						}
						}
					}
					this.state = 950;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 113, this._ctx);
				}
				this.state = 953;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					this.state = 953;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case flashcardParser.S:
					case flashcardParser.OPS:
					case flashcardParser.COLON:
					case flashcardParser.AMP:
					case flashcardParser.Greater:
					case flashcardParser.Less:
					case flashcardParser.RightAngle:
					case flashcardParser.RightArrow:
					case flashcardParser.NUMERIC:
					case flashcardParser.STRING:
					case flashcardParser.SENTENCE:
					case flashcardParser.BARSTRING:
					case flashcardParser.URL:
						{
						this.state = 951;
						this.s_and_w();
						}
						break;
					case flashcardParser.NL:
						{
						this.state = 952;
						this.match(flashcardParser.NL);
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					}
					this.state = 955;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << flashcardParser.S) | (1 << flashcardParser.OPS) | (1 << flashcardParser.COLON))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (flashcardParser.AMP - 32)) | (1 << (flashcardParser.Greater - 32)) | (1 << (flashcardParser.Less - 32)) | (1 << (flashcardParser.RightAngle - 32)) | (1 << (flashcardParser.RightArrow - 32)) | (1 << (flashcardParser.NUMERIC - 32)) | (1 << (flashcardParser.STRING - 32)) | (1 << (flashcardParser.NL - 32)) | (1 << (flashcardParser.SENTENCE - 32)) | (1 << (flashcardParser.BARSTRING - 32)))) !== 0) || _la === flashcardParser.URL);
				this.state = 957;
				this.match(flashcardParser.CL);
				}
				break;
			case flashcardParser.AtWidth:
			case flashcardParser.AtHeight:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 958;
				_la = this._input.LA(1);
				if (!(_la === flashcardParser.AtWidth || _la === flashcardParser.AtHeight)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 959;
				this.match(flashcardParser.COLON);
				this.state = 960;
				this.match(flashcardParser.NUMERIC);
				this.state = 961;
				this.match(flashcardParser.CL);
				}
				break;
			case flashcardParser.OPATALT:
			case flashcardParser.OpAtCaption:
			case flashcardParser.OpAtLicense:
			case flashcardParser.OpAtCopyright:
			case flashcardParser.OpAtSearch:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 962;
				_la = this._input.LA(1);
				if (!(((((_la - 73)) & ~0x1F) === 0 && ((1 << (_la - 73)) & ((1 << (flashcardParser.OPATALT - 73)) | (1 << (flashcardParser.OpAtCaption - 73)) | (1 << (flashcardParser.OpAtLicense - 73)) | (1 << (flashcardParser.OpAtCopyright - 73)) | (1 << (flashcardParser.OpAtSearch - 73)))) !== 0))) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 966;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 116, this._ctx);
				while (_alt !== 1 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1 + 1) {
						{
						{
						this.state = 963;
						this.matchWildcard();
						}
						}
					}
					this.state = 968;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 116, this._ctx);
				}
				this.state = 969;
				this.match(flashcardParser.CL);
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
		this.enterRule(_localctx, 114, flashcardParser.RULE_telephone);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 972;
			this.match(flashcardParser.TEL);
			this.state = 973;
			this.match(flashcardParser.PLUS);
			this.state = 974;
			this.match(flashcardParser.NUMERIC);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 116, flashcardParser.RULE_url);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 976;
			this.match(flashcardParser.URL);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 118, flashcardParser.RULE_item);
		let _la: number;
		try {
			this.state = 1008;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 124, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 978;
				this.match(flashcardParser.OPC);
				this.state = 979;
				this.match(flashcardParser.CL);
				this.state = 987;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 119, this._ctx) ) {
				case 1:
					{
					this.state = 983;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === flashcardParser.S) {
						{
						{
						this.state = 980;
						this.match(flashcardParser.S);
						}
						}
						this.state = 985;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					this.state = 986;
					this.lead();
					}
					break;
				}
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 989;
				this.match(flashcardParser.OPC);
				this.state = 990;
				this.s_and_w();
				this.state = 995;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (((((_la - 31)) & ~0x1F) === 0 && ((1 << (_la - 31)) & ((1 << (flashcardParser.COLON - 31)) | (1 << (flashcardParser.AMP - 31)) | (1 << (flashcardParser.Greater - 31)) | (1 << (flashcardParser.Less - 31)) | (1 << (flashcardParser.RightAngle - 31)) | (1 << (flashcardParser.RightArrow - 31)) | (1 << (flashcardParser.SENTENCE - 31)) | (1 << (flashcardParser.BARSTRING - 31)))) !== 0)) {
					{
					this.state = 993;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case flashcardParser.COLON:
						{
						this.state = 991;
						this.match(flashcardParser.COLON);
						}
						break;
					case flashcardParser.AMP:
					case flashcardParser.Greater:
					case flashcardParser.Less:
					case flashcardParser.RightAngle:
					case flashcardParser.RightArrow:
					case flashcardParser.SENTENCE:
					case flashcardParser.BARSTRING:
						{
						this.state = 992;
						this.words();
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					}
					this.state = 997;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 998;
				this.match(flashcardParser.CL);
				this.state = 1006;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 123, this._ctx) ) {
				case 1:
					{
					this.state = 1002;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === flashcardParser.S) {
						{
						{
						this.state = 999;
						this.match(flashcardParser.S);
						}
						}
						this.state = 1004;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					this.state = 1005;
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
		this.enterRule(_localctx, 120, flashcardParser.RULE_lead);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1010;
			this.match(flashcardParser.OPC);
			this.state = 1011;
			this.s_and_w();
			this.state = 1016;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 31)) & ~0x1F) === 0 && ((1 << (_la - 31)) & ((1 << (flashcardParser.COLON - 31)) | (1 << (flashcardParser.AMP - 31)) | (1 << (flashcardParser.Greater - 31)) | (1 << (flashcardParser.Less - 31)) | (1 << (flashcardParser.RightAngle - 31)) | (1 << (flashcardParser.RightArrow - 31)) | (1 << (flashcardParser.SENTENCE - 31)) | (1 << (flashcardParser.BARSTRING - 31)))) !== 0)) {
				{
				this.state = 1014;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case flashcardParser.COLON:
					{
					this.state = 1012;
					this.match(flashcardParser.COLON);
					}
					break;
				case flashcardParser.AMP:
				case flashcardParser.Greater:
				case flashcardParser.Less:
				case flashcardParser.RightAngle:
				case flashcardParser.RightArrow:
				case flashcardParser.SENTENCE:
				case flashcardParser.BARSTRING:
					{
					this.state = 1013;
					this.words();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				this.state = 1018;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1019;
			this.match(flashcardParser.CL);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 122, flashcardParser.RULE_angleref);
		let _la: number;
		try {
			this.state = 1031;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case flashcardParser.OPRANGLES:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1021;
				this.match(flashcardParser.OPRANGLES);
				this.state = 1023;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << flashcardParser.S) | (1 << flashcardParser.OPS) | (1 << flashcardParser.COLON))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (flashcardParser.AMP - 32)) | (1 << (flashcardParser.Greater - 32)) | (1 << (flashcardParser.Less - 32)) | (1 << (flashcardParser.RightAngle - 32)) | (1 << (flashcardParser.RightArrow - 32)) | (1 << (flashcardParser.NUMERIC - 32)) | (1 << (flashcardParser.STRING - 32)) | (1 << (flashcardParser.SENTENCE - 32)) | (1 << (flashcardParser.BARSTRING - 32)))) !== 0) || _la === flashcardParser.URL) {
					{
					this.state = 1022;
					this.s_and_w();
					}
				}

				this.state = 1025;
				this.match(flashcardParser.CL);
				}
				break;
			case flashcardParser.OPRANGLEL:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1026;
				this.match(flashcardParser.OPRANGLEL);
				this.state = 1028;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << flashcardParser.S) | (1 << flashcardParser.OPS) | (1 << flashcardParser.COLON))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (flashcardParser.AMP - 32)) | (1 << (flashcardParser.Greater - 32)) | (1 << (flashcardParser.Less - 32)) | (1 << (flashcardParser.RightAngle - 32)) | (1 << (flashcardParser.RightArrow - 32)) | (1 << (flashcardParser.NUMERIC - 32)) | (1 << (flashcardParser.STRING - 32)) | (1 << (flashcardParser.SENTENCE - 32)) | (1 << (flashcardParser.BARSTRING - 32)))) !== 0) || _la === flashcardParser.URL) {
					{
					this.state = 1027;
					this.s_and_w();
					}
				}

				this.state = 1030;
				this.match(flashcardParser.CL);
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
		this.enterRule(_localctx, 124, flashcardParser.RULE_example);
		let _la: number;
		try {
			this.state = 1040;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case flashcardParser.AtExamplecl:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1033;
				this.match(flashcardParser.AtExamplecl);
				}
				break;
			case flashcardParser.AtExampleWithStr:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1034;
				this.match(flashcardParser.AtExampleWithStr);
				}
				break;
			case flashcardParser.AtExamplecol:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1035;
				this.match(flashcardParser.AtExamplecol);
				this.state = 1037;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === flashcardParser.SENTENCE) {
					{
					this.state = 1036;
					this.match(flashcardParser.SENTENCE);
					}
				}

				this.state = 1039;
				this.match(flashcardParser.EOF);
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
		this.enterRule(_localctx, 126, flashcardParser.RULE_bracketed_text);
		let _la: number;
		try {
			let _alt: number;
			this.state = 1081;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 139, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1042;
				this.match(flashcardParser.BracEnclose);
				this.state = 1044;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 132, this._ctx) ) {
				case 1:
					{
					this.state = 1043;
					this.s_and_w();
					}
					break;
				}
				this.state = 1067;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << flashcardParser.S) | (1 << flashcardParser.OPS) | (1 << flashcardParser.COLON))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (flashcardParser.AMP - 32)) | (1 << (flashcardParser.Greater - 32)) | (1 << (flashcardParser.Less - 32)) | (1 << (flashcardParser.RightAngle - 32)) | (1 << (flashcardParser.RightArrow - 32)) | (1 << (flashcardParser.NUMERIC - 32)) | (1 << (flashcardParser.STRING - 32)) | (1 << (flashcardParser.SENTENCE - 32)) | (1 << (flashcardParser.BARSTRING - 32)))) !== 0) || _la === flashcardParser.URL) {
					{
					{
					this.state = 1046;
					this.s_and_w();
					this.state = 1056;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 134, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 1047;
							this.match(flashcardParser.NL);
							this.state = 1051;
							this._errHandler.sync(this);
							_alt = this.interpreter.adaptivePredict(this._input, 133, this._ctx);
							while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
								if (_alt === 1) {
									{
									{
									this.state = 1048;
									this.match(flashcardParser.S);
									}
									}
								}
								this.state = 1053;
								this._errHandler.sync(this);
								_alt = this.interpreter.adaptivePredict(this._input, 133, this._ctx);
							}
							}
							}
						}
						this.state = 1058;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 134, this._ctx);
					}
					this.state = 1062;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === flashcardParser.NL) {
						{
						{
						this.state = 1059;
						this.match(flashcardParser.NL);
						}
						}
						this.state = 1064;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
					}
					this.state = 1069;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1070;
				this.match(flashcardParser.CL);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1071;
				this.match(flashcardParser.BracEnclose);
				this.state = 1077;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << flashcardParser.S) | (1 << flashcardParser.OPS) | (1 << flashcardParser.COLON))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (flashcardParser.AMP - 32)) | (1 << (flashcardParser.Greater - 32)) | (1 << (flashcardParser.Less - 32)) | (1 << (flashcardParser.RightAngle - 32)) | (1 << (flashcardParser.RightArrow - 32)) | (1 << (flashcardParser.NUMERIC - 32)) | (1 << (flashcardParser.STRING - 32)) | (1 << (flashcardParser.NL - 32)) | (1 << (flashcardParser.SENTENCE - 32)) | (1 << (flashcardParser.BARSTRING - 32)))) !== 0) || _la === flashcardParser.URL) {
					{
					this.state = 1075;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 137, this._ctx) ) {
					case 1:
						{
						this.state = 1072;
						this.s_and_w();
						}
						break;

					case 2:
						{
						this.state = 1073;
						this.match(flashcardParser.NL);
						}
						break;

					case 3:
						{
						this.state = 1074;
						this.match(flashcardParser.S);
						}
						break;
					}
					}
					this.state = 1079;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1080;
				this.match(flashcardParser.EOF);
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
		this.enterRule(_localctx, 128, flashcardParser.RULE_reference);
		let _la: number;
		try {
			this.state = 1105;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 144, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1083;
				this.match(flashcardParser.AtReference);
				this.state = 1088;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					this.state = 1088;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 140, this._ctx) ) {
					case 1:
						{
						this.state = 1084;
						this.s_and_w();
						}
						break;

					case 2:
						{
						this.state = 1085;
						this.match(flashcardParser.COLON);
						}
						break;

					case 3:
						{
						this.state = 1086;
						this.match(flashcardParser.URL);
						}
						break;

					case 4:
						{
						this.state = 1087;
						this.match(flashcardParser.NL);
						}
						break;
					}
					}
					this.state = 1090;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << flashcardParser.S) | (1 << flashcardParser.OPS) | (1 << flashcardParser.COLON))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (flashcardParser.AMP - 32)) | (1 << (flashcardParser.Greater - 32)) | (1 << (flashcardParser.Less - 32)) | (1 << (flashcardParser.RightAngle - 32)) | (1 << (flashcardParser.RightArrow - 32)) | (1 << (flashcardParser.NUMERIC - 32)) | (1 << (flashcardParser.STRING - 32)) | (1 << (flashcardParser.NL - 32)) | (1 << (flashcardParser.SENTENCE - 32)) | (1 << (flashcardParser.BARSTRING - 32)))) !== 0) || _la === flashcardParser.URL);
				this.state = 1092;
				this.match(flashcardParser.CL);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1093;
				this.match(flashcardParser.AtReference);
				this.state = 1101;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << flashcardParser.S) | (1 << flashcardParser.OPS) | (1 << flashcardParser.COLON))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (flashcardParser.AMP - 32)) | (1 << (flashcardParser.Greater - 32)) | (1 << (flashcardParser.Less - 32)) | (1 << (flashcardParser.RightAngle - 32)) | (1 << (flashcardParser.RightArrow - 32)) | (1 << (flashcardParser.NUMERIC - 32)) | (1 << (flashcardParser.STRING - 32)) | (1 << (flashcardParser.NL - 32)) | (1 << (flashcardParser.SENTENCE - 32)) | (1 << (flashcardParser.BARSTRING - 32)))) !== 0) || _la === flashcardParser.URL) {
					{
					this.state = 1099;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 142, this._ctx) ) {
					case 1:
						{
						this.state = 1094;
						this.s_and_w();
						}
						break;

					case 2:
						{
						this.state = 1095;
						this.match(flashcardParser.COLON);
						}
						break;

					case 3:
						{
						this.state = 1096;
						this.match(flashcardParser.URL);
						}
						break;

					case 4:
						{
						this.state = 1097;
						this.match(flashcardParser.NL);
						}
						break;

					case 5:
						{
						this.state = 1098;
						this.match(flashcardParser.S);
						}
						break;
					}
					}
					this.state = 1103;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1104;
				this.match(flashcardParser.EOF);
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
		this.enterRule(_localctx, 130, flashcardParser.RULE_progress);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1107;
			this.match(flashcardParser.AtProgress);
			this.state = 1108;
			this.s_and_w();
			this.state = 1109;
			this.match(flashcardParser.CL);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 132, flashcardParser.RULE_dateprop);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1111;
			this.match(flashcardParser.AtDate);
			this.state = 1115;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				this.state = 1115;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 145, this._ctx) ) {
				case 1:
					{
					this.state = 1112;
					this.s_and_w();
					}
					break;

				case 2:
					{
					this.state = 1113;
					this.match(flashcardParser.COLON);
					}
					break;

				case 3:
					{
					this.state = 1114;
					this.match(flashcardParser.NL);
					}
					break;
				}
				}
				this.state = 1117;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << flashcardParser.S) | (1 << flashcardParser.OPS) | (1 << flashcardParser.COLON))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (flashcardParser.AMP - 32)) | (1 << (flashcardParser.Greater - 32)) | (1 << (flashcardParser.Less - 32)) | (1 << (flashcardParser.RightAngle - 32)) | (1 << (flashcardParser.RightArrow - 32)) | (1 << (flashcardParser.NUMERIC - 32)) | (1 << (flashcardParser.STRING - 32)) | (1 << (flashcardParser.NL - 32)) | (1 << (flashcardParser.SENTENCE - 32)) | (1 << (flashcardParser.BARSTRING - 32)))) !== 0) || _la === flashcardParser.URL);
			this.state = 1119;
			this.match(flashcardParser.CL);
			this.state = 1121;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === flashcardParser.AtDate) {
				{
				this.state = 1120;
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
		this.enterRule(_localctx, 134, flashcardParser.RULE_dateprop_chained);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1123;
			this.match(flashcardParser.AtDate);
			this.state = 1127;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				this.state = 1127;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 148, this._ctx) ) {
				case 1:
					{
					this.state = 1124;
					this.s_and_w();
					}
					break;

				case 2:
					{
					this.state = 1125;
					this.match(flashcardParser.COLON);
					}
					break;

				case 3:
					{
					this.state = 1126;
					this.match(flashcardParser.NL);
					}
					break;
				}
				}
				this.state = 1129;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << flashcardParser.S) | (1 << flashcardParser.OPS) | (1 << flashcardParser.COLON))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (flashcardParser.AMP - 32)) | (1 << (flashcardParser.Greater - 32)) | (1 << (flashcardParser.Less - 32)) | (1 << (flashcardParser.RightAngle - 32)) | (1 << (flashcardParser.RightArrow - 32)) | (1 << (flashcardParser.NUMERIC - 32)) | (1 << (flashcardParser.STRING - 32)) | (1 << (flashcardParser.NL - 32)) | (1 << (flashcardParser.SENTENCE - 32)) | (1 << (flashcardParser.BARSTRING - 32)))) !== 0) || _la === flashcardParser.URL);
			this.state = 1131;
			this.match(flashcardParser.CL);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 136, flashcardParser.RULE_instruction);
		let _la: number;
		try {
			let _alt: number;
			this.state = 1179;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 158, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1133;
				this.match(flashcardParser.OPB);
				this.state = 1137;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === flashcardParser.NL) {
					{
					{
					this.state = 1134;
					this.match(flashcardParser.NL);
					}
					}
					this.state = 1139;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1141;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 151, this._ctx) ) {
				case 1:
					{
					this.state = 1140;
					this.s_and_w();
					}
					break;
				}
				this.state = 1164;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << flashcardParser.S) | (1 << flashcardParser.OPS) | (1 << flashcardParser.COLON))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (flashcardParser.AMP - 32)) | (1 << (flashcardParser.Greater - 32)) | (1 << (flashcardParser.Less - 32)) | (1 << (flashcardParser.RightAngle - 32)) | (1 << (flashcardParser.RightArrow - 32)) | (1 << (flashcardParser.NUMERIC - 32)) | (1 << (flashcardParser.STRING - 32)) | (1 << (flashcardParser.SENTENCE - 32)) | (1 << (flashcardParser.BARSTRING - 32)))) !== 0) || _la === flashcardParser.URL) {
					{
					{
					this.state = 1143;
					this.s_and_w();
					this.state = 1153;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 153, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 1144;
							this.match(flashcardParser.NL);
							this.state = 1148;
							this._errHandler.sync(this);
							_alt = this.interpreter.adaptivePredict(this._input, 152, this._ctx);
							while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
								if (_alt === 1) {
									{
									{
									this.state = 1145;
									this.match(flashcardParser.S);
									}
									}
								}
								this.state = 1150;
								this._errHandler.sync(this);
								_alt = this.interpreter.adaptivePredict(this._input, 152, this._ctx);
							}
							}
							}
						}
						this.state = 1155;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 153, this._ctx);
					}
					this.state = 1159;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === flashcardParser.NL) {
						{
						{
						this.state = 1156;
						this.match(flashcardParser.NL);
						}
						}
						this.state = 1161;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
					}
					this.state = 1166;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1167;
				this.match(flashcardParser.CL);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1168;
				this.match(flashcardParser.OPB);
				this.state = 1172;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === flashcardParser.NL) {
					{
					{
					this.state = 1169;
					this.match(flashcardParser.NL);
					}
					}
					this.state = 1174;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1176;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << flashcardParser.S) | (1 << flashcardParser.OPS) | (1 << flashcardParser.COLON))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (flashcardParser.AMP - 32)) | (1 << (flashcardParser.Greater - 32)) | (1 << (flashcardParser.Less - 32)) | (1 << (flashcardParser.RightAngle - 32)) | (1 << (flashcardParser.RightArrow - 32)) | (1 << (flashcardParser.NUMERIC - 32)) | (1 << (flashcardParser.STRING - 32)) | (1 << (flashcardParser.SENTENCE - 32)) | (1 << (flashcardParser.BARSTRING - 32)))) !== 0) || _la === flashcardParser.URL) {
					{
					this.state = 1175;
					this.s_and_w();
					}
				}

				this.state = 1178;
				this.match(flashcardParser.EOF);
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
		this.enterRule(_localctx, 138, flashcardParser.RULE_hint);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1181;
			this.match(flashcardParser.OPQ);
			this.state = 1183;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 1182;
				_la = this._input.LA(1);
				if (_la <= 0 || (_la === flashcardParser.CL)) {
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
				this.state = 1185;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << flashcardParser.OPDOT) | (1 << flashcardParser.S) | (1 << flashcardParser.BitFlash1) | (1 << flashcardParser.BitFlash) | (1 << flashcardParser.BitFlashcardset) | (1 << flashcardParser.BitFlashcardlangset) | (1 << flashcardParser.BitFlashcardlang1) | (1 << flashcardParser.BitVocabulary) | (1 << flashcardParser.BitVocabulary_1) | (1 << flashcardParser.COMMENT) | (1 << flashcardParser.Image_type) | (1 << flashcardParser.Audio_type) | (1 << flashcardParser.Video_type) | (1 << flashcardParser.OPDOLL) | (1 << flashcardParser.OPBUL) | (1 << flashcardParser.OPESC) | (1 << flashcardParser.OPRANGLES) | (1 << flashcardParser.OPRANGLEL) | (1 << flashcardParser.OPDANGLE) | (1 << flashcardParser.OPU) | (1 << flashcardParser.OPB) | (1 << flashcardParser.OPQ) | (1 << flashcardParser.OPA) | (1 << flashcardParser.OPP) | (1 << flashcardParser.OPM) | (1 << flashcardParser.OPS) | (1 << flashcardParser.OPR) | (1 << flashcardParser.OPC) | (1 << flashcardParser.OPHASH) | (1 << flashcardParser.COLON))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (flashcardParser.AMP - 32)) | (1 << (flashcardParser.DBLCOLON - 32)) | (1 << (flashcardParser.PLUS - 32)) | (1 << (flashcardParser.DotAt - 32)) | (1 << (flashcardParser.Greater - 32)) | (1 << (flashcardParser.Less - 32)) | (1 << (flashcardParser.DBLEQ - 32)) | (1 << (flashcardParser.RightAngle - 32)) | (1 << (flashcardParser.RightArrow - 32)) | (1 << (flashcardParser.EQ - 32)) | (1 << (flashcardParser.EQ2 - 32)) | (1 << (flashcardParser.OR - 32)) | (1 << (flashcardParser.HSPL - 32)) | (1 << (flashcardParser.HSPL2 - 32)) | (1 << (flashcardParser.SSPL - 32)) | (1 << (flashcardParser.SSPL2 - 32)) | (1 << (flashcardParser.DCANY - 32)) | (1 << (flashcardParser.ArticleText - 32)) | (1 << (flashcardParser.NOTCL - 32)) | (1 << (flashcardParser.NUMERIC - 32)) | (1 << (flashcardParser.STRING - 32)) | (1 << (flashcardParser.NL - 32)) | (1 << (flashcardParser.SENTENCE - 32)) | (1 << (flashcardParser.BARSTRING - 32)) | (1 << (flashcardParser.OPAT - 32)) | (1 << (flashcardParser.AtProgress - 32)) | (1 << (flashcardParser.AtReference - 32)) | (1 << (flashcardParser.AtWidth - 32)) | (1 << (flashcardParser.AtHeight - 32)) | (1 << (flashcardParser.AtProgressPoints - 32)) | (1 << (flashcardParser.AtShortanswer - 32)) | (1 << (flashcardParser.AtLonganswer - 32)))) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (flashcardParser.AtExampleWithStr - 64)) | (1 << (flashcardParser.AtExamplecol - 64)) | (1 << (flashcardParser.AtExamplecl - 64)) | (1 << (flashcardParser.AtPartialAnswerS - 64)) | (1 << (flashcardParser.AtPartialAnswer - 64)) | (1 << (flashcardParser.AtLabeltrue - 64)) | (1 << (flashcardParser.AtLabelfalse - 64)) | (1 << (flashcardParser.AtPoints - 64)) | (1 << (flashcardParser.AtSrc - 64)) | (1 << (flashcardParser.OPATALT - 64)) | (1 << (flashcardParser.OPAMARK - 64)) | (1 << (flashcardParser.ShowInIndex - 64)) | (1 << (flashcardParser.OpAtCaption - 64)) | (1 << (flashcardParser.OpAtLicense - 64)) | (1 << (flashcardParser.OpAtCopyright - 64)) | (1 << (flashcardParser.OpAtSearch - 64)) | (1 << (flashcardParser.OpAtIsTracked - 64)) | (1 << (flashcardParser.OpAtIsInfoOnly - 64)) | (1 << (flashcardParser.AtDate - 64)) | (1 << (flashcardParser.Http - 64)) | (1 << (flashcardParser.Https - 64)) | (1 << (flashcardParser.AmpAudio - 64)) | (1 << (flashcardParser.AmpImage - 64)) | (1 << (flashcardParser.AmpImageZoom - 64)) | (1 << (flashcardParser.AmpImageWAudio - 64)) | (1 << (flashcardParser.AmpVideo - 64)) | (1 << (flashcardParser.AmpArticle - 64)) | (1 << (flashcardParser.AmpDocument - 64)) | (1 << (flashcardParser.AmpApp - 64)) | (1 << (flashcardParser.AmpWebsite - 64)) | (1 << (flashcardParser.AmpStillImageFilm - 64)) | (1 << (flashcardParser.AmpPdf - 64)))) !== 0) || ((((_la - 96)) & ~0x1F) === 0 && ((1 << (_la - 96)) & ((1 << (flashcardParser.OpAmpAudio - 96)) | (1 << (flashcardParser.OpAmpImage - 96)) | (1 << (flashcardParser.OpAmpImageZoom - 96)) | (1 << (flashcardParser.OpAmpImageWAudio - 96)) | (1 << (flashcardParser.OpAmpVideo - 96)) | (1 << (flashcardParser.OpAmpArticle - 96)) | (1 << (flashcardParser.OpAmpArticleAtt - 96)) | (1 << (flashcardParser.OpAmpDocument - 96)) | (1 << (flashcardParser.OpAmpApp - 96)) | (1 << (flashcardParser.OpAmpWebsite - 96)) | (1 << (flashcardParser.OpAmpStillImageFilm - 96)) | (1 << (flashcardParser.BracEnclose - 96)) | (1 << (flashcardParser.AmpAudioLink - 96)) | (1 << (flashcardParser.AmpImageLink - 96)) | (1 << (flashcardParser.AmpVideoLink - 96)) | (1 << (flashcardParser.AmpArticleLink - 96)) | (1 << (flashcardParser.AmpDocumentLink - 96)) | (1 << (flashcardParser.AmpAppLink - 96)) | (1 << (flashcardParser.AmpWebsiteLink - 96)) | (1 << (flashcardParser.AmpStillImageFilmLink - 96)) | (1 << (flashcardParser.OpAmpAudioLink - 96)) | (1 << (flashcardParser.OpAmpImageLink - 96)) | (1 << (flashcardParser.OpAmpVideoLink - 96)) | (1 << (flashcardParser.OpAmpArticleLink - 96)) | (1 << (flashcardParser.OpAmpDocumentLink - 96)) | (1 << (flashcardParser.OpAmpAppLink - 96)) | (1 << (flashcardParser.OpAmpWebsiteLink - 96)) | (1 << (flashcardParser.OpAmpStillImageFilmLink - 96)) | (1 << (flashcardParser.AmpImageEmbed - 96)) | (1 << (flashcardParser.AmpVideoEmbed - 96)) | (1 << (flashcardParser.AmpAudioEmbed - 96)) | (1 << (flashcardParser.AmpDocumentEmbed - 96)))) !== 0) || ((((_la - 128)) & ~0x1F) === 0 && ((1 << (_la - 128)) & ((1 << (flashcardParser.AmpStillImageFilmEmbed - 128)) | (1 << (flashcardParser.OpAmpImageEmbed - 128)) | (1 << (flashcardParser.OpAmpVideoEmbed - 128)) | (1 << (flashcardParser.OpAmpAudioEmbed - 128)) | (1 << (flashcardParser.OpAmpDocumentEmbed - 128)) | (1 << (flashcardParser.OpAmpStillImageFilmEmbed - 128)) | (1 << (flashcardParser.BitmarkMinus - 128)) | (1 << (flashcardParser.BitmarkPlus - 128)) | (1 << (flashcardParser.ColonText - 128)) | (1 << (flashcardParser.ColonJson - 128)) | (1 << (flashcardParser.Prosemirror - 128)) | (1 << (flashcardParser.Placeholder - 128)) | (1 << (flashcardParser.BASIC - 128)) | (1 << (flashcardParser.JPG - 128)) | (1 << (flashcardParser.PNG - 128)) | (1 << (flashcardParser.GIF - 128)) | (1 << (flashcardParser.SVG - 128)) | (1 << (flashcardParser.MP2 - 128)) | (1 << (flashcardParser.MP3 - 128)) | (1 << (flashcardParser.MP4 - 128)) | (1 << (flashcardParser.FLV - 128)) | (1 << (flashcardParser.WMV - 128)) | (1 << (flashcardParser.MPEG - 128)) | (1 << (flashcardParser.MPG - 128)) | (1 << (flashcardParser.TEL - 128)) | (1 << (flashcardParser.DotArticleAtt - 128)) | (1 << (flashcardParser.STAR - 128)) | (1 << (flashcardParser.URL - 128)) | (1 << (flashcardParser.LIST_LINE - 128)) | (1 << (flashcardParser.ENCLBARS - 128)))) !== 0));
			this.state = 1187;
			this.match(flashcardParser.CL);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 140, flashcardParser.RULE_title);
		let _la: number;
		try {
			this.state = 1201;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 162, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1189;
				this.match(flashcardParser.OPHASH);
				this.state = 1192;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					this.state = 1192;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case flashcardParser.S:
					case flashcardParser.OPS:
					case flashcardParser.COLON:
					case flashcardParser.AMP:
					case flashcardParser.Greater:
					case flashcardParser.Less:
					case flashcardParser.RightAngle:
					case flashcardParser.RightArrow:
					case flashcardParser.NUMERIC:
					case flashcardParser.STRING:
					case flashcardParser.SENTENCE:
					case flashcardParser.BARSTRING:
					case flashcardParser.URL:
						{
						this.state = 1190;
						this.s_and_w();
						}
						break;
					case flashcardParser.NL:
						{
						this.state = 1191;
						this.match(flashcardParser.NL);
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					}
					this.state = 1194;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << flashcardParser.S) | (1 << flashcardParser.OPS) | (1 << flashcardParser.COLON))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (flashcardParser.AMP - 32)) | (1 << (flashcardParser.Greater - 32)) | (1 << (flashcardParser.Less - 32)) | (1 << (flashcardParser.RightAngle - 32)) | (1 << (flashcardParser.RightArrow - 32)) | (1 << (flashcardParser.NUMERIC - 32)) | (1 << (flashcardParser.STRING - 32)) | (1 << (flashcardParser.NL - 32)) | (1 << (flashcardParser.SENTENCE - 32)) | (1 << (flashcardParser.BARSTRING - 32)))) !== 0) || _la === flashcardParser.URL);
				this.state = 1196;
				this.match(flashcardParser.CL);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1197;
				this.match(flashcardParser.OPHASH);
				this.state = 1198;
				this.s_and_w();
				this.state = 1199;
				this.match(flashcardParser.EOF);
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
		this.enterRule(_localctx, 142, flashcardParser.RULE_bool_label);
		try {
			this.state = 1211;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case flashcardParser.AtLabeltrue:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1203;
				this.match(flashcardParser.AtLabeltrue);
				this.state = 1204;
				this.s_and_w();
				this.state = 1205;
				this.match(flashcardParser.CL);
				}
				break;
			case flashcardParser.AtLabelfalse:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1207;
				this.match(flashcardParser.AtLabelfalse);
				this.state = 1208;
				this.s_and_w();
				this.state = 1209;
				this.match(flashcardParser.CL);
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
		this.enterRule(_localctx, 144, flashcardParser.RULE_progress_points);
		try {
			this.state = 1222;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 164, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1213;
				this.match(flashcardParser.AtProgressPoints);
				this.state = 1214;
				this.match(flashcardParser.COLON);
				this.state = 1215;
				this.match(flashcardParser.NUMERIC);
				this.state = 1216;
				this.match(flashcardParser.CL);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1217;
				this.match(flashcardParser.AtProgressPoints);
				this.state = 1218;
				this.match(flashcardParser.COLON);
				this.state = 1219;
				this.s_and_w();
				this.state = 1220;
				this.match(flashcardParser.CL);
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
		this.enterRule(_localctx, 146, flashcardParser.RULE_istracked);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1224;
			this.match(flashcardParser.OpAtIsTracked);
			this.state = 1225;
			this.s_and_w();
			this.state = 1226;
			this.match(flashcardParser.CL);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 148, flashcardParser.RULE_isinfoonly);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1228;
			this.match(flashcardParser.OpAtIsInfoOnly);
			this.state = 1229;
			this.s_and_w();
			this.state = 1230;
			this.match(flashcardParser.CL);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 150, flashcardParser.RULE_atdef);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1232;
			this.atdef_();
			this.state = 1242;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 166, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1236;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === flashcardParser.NL) {
						{
						{
						this.state = 1233;
						this.match(flashcardParser.NL);
						}
						}
						this.state = 1238;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					this.state = 1239;
					this.atdef_();
					}
					}
				}
				this.state = 1244;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 166, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 152, flashcardParser.RULE_atdef_);
		let _la: number;
		try {
			let _alt: number;
			this.state = 1267;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case flashcardParser.OPA:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1245;
				this.match(flashcardParser.OPA);
				this.state = 1246;
				this.s_and_w();
				this.state = 1247;
				_la = this._input.LA(1);
				if (!(_la === flashcardParser.COLON || _la === flashcardParser.DBLCOLON)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 1248;
				this.s_and_w();
				this.state = 1254;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << flashcardParser.S) | (1 << flashcardParser.OPS) | (1 << flashcardParser.COLON))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (flashcardParser.AMP - 32)) | (1 << (flashcardParser.Greater - 32)) | (1 << (flashcardParser.Less - 32)) | (1 << (flashcardParser.RightAngle - 32)) | (1 << (flashcardParser.RightArrow - 32)) | (1 << (flashcardParser.NUMERIC - 32)) | (1 << (flashcardParser.STRING - 32)) | (1 << (flashcardParser.NL - 32)) | (1 << (flashcardParser.SENTENCE - 32)) | (1 << (flashcardParser.BARSTRING - 32)))) !== 0) || _la === flashcardParser.URL) {
					{
					this.state = 1252;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 167, this._ctx) ) {
					case 1:
						{
						this.state = 1249;
						this.match(flashcardParser.NL);
						}
						break;

					case 2:
						{
						this.state = 1250;
						this.match(flashcardParser.COLON);
						}
						break;

					case 3:
						{
						this.state = 1251;
						this.s_and_w();
						}
						break;
					}
					}
					this.state = 1256;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1257;
				this.match(flashcardParser.CL);
				}
				break;
			case flashcardParser.OpAtCopyright:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1259;
				this.match(flashcardParser.OpAtCopyright);
				this.state = 1263;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 169, this._ctx);
				while (_alt !== 1 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1 + 1) {
						{
						{
						this.state = 1260;
						this.matchWildcard();
						}
						}
					}
					this.state = 1265;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 169, this._ctx);
				}
				this.state = 1266;
				this.match(flashcardParser.CL);
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
		this.enterRule(_localctx, 154, flashcardParser.RULE_dollarans);
		let _la: number;
		try {
			this.state = 1288;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 175, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1269;
				this.match(flashcardParser.OPDOLL);
				this.state = 1273;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					this.state = 1273;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 171, this._ctx) ) {
					case 1:
						{
						this.state = 1270;
						this.s_and_w();
						}
						break;

					case 2:
						{
						this.state = 1271;
						this.match(flashcardParser.COLON);
						}
						break;

					case 3:
						{
						this.state = 1272;
						this.match(flashcardParser.NL);
						}
						break;
					}
					}
					this.state = 1275;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << flashcardParser.S) | (1 << flashcardParser.OPS) | (1 << flashcardParser.COLON))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (flashcardParser.AMP - 32)) | (1 << (flashcardParser.Greater - 32)) | (1 << (flashcardParser.Less - 32)) | (1 << (flashcardParser.RightAngle - 32)) | (1 << (flashcardParser.RightArrow - 32)) | (1 << (flashcardParser.NUMERIC - 32)) | (1 << (flashcardParser.STRING - 32)) | (1 << (flashcardParser.NL - 32)) | (1 << (flashcardParser.SENTENCE - 32)) | (1 << (flashcardParser.BARSTRING - 32)))) !== 0) || _la === flashcardParser.URL);
				this.state = 1277;
				this.match(flashcardParser.CL);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1278;
				this.match(flashcardParser.OPDOLL);
				this.state = 1284;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << flashcardParser.S) | (1 << flashcardParser.OPS) | (1 << flashcardParser.COLON))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (flashcardParser.AMP - 32)) | (1 << (flashcardParser.Greater - 32)) | (1 << (flashcardParser.Less - 32)) | (1 << (flashcardParser.RightAngle - 32)) | (1 << (flashcardParser.RightArrow - 32)) | (1 << (flashcardParser.NUMERIC - 32)) | (1 << (flashcardParser.STRING - 32)) | (1 << (flashcardParser.NL - 32)) | (1 << (flashcardParser.SENTENCE - 32)) | (1 << (flashcardParser.BARSTRING - 32)))) !== 0) || _la === flashcardParser.URL) {
					{
					this.state = 1282;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 173, this._ctx) ) {
					case 1:
						{
						this.state = 1279;
						this.s_and_w();
						}
						break;

					case 2:
						{
						this.state = 1280;
						this.match(flashcardParser.COLON);
						}
						break;

					case 3:
						{
						this.state = 1281;
						this.match(flashcardParser.NL);
						}
						break;
					}
					}
					this.state = 1286;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1287;
				this.match(flashcardParser.EOF);
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
		this.enterRule(_localctx, 156, flashcardParser.RULE_anchor);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1290;
			this.match(flashcardParser.OPDANGLE);
			this.state = 1292;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << flashcardParser.S) | (1 << flashcardParser.OPS) | (1 << flashcardParser.COLON))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (flashcardParser.AMP - 32)) | (1 << (flashcardParser.Greater - 32)) | (1 << (flashcardParser.Less - 32)) | (1 << (flashcardParser.RightAngle - 32)) | (1 << (flashcardParser.RightArrow - 32)) | (1 << (flashcardParser.NUMERIC - 32)) | (1 << (flashcardParser.STRING - 32)) | (1 << (flashcardParser.SENTENCE - 32)) | (1 << (flashcardParser.BARSTRING - 32)))) !== 0) || _la === flashcardParser.URL) {
				{
				this.state = 1291;
				this.s_and_w();
				}
			}

			this.state = 1294;
			this.match(flashcardParser.CL);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 158, flashcardParser.RULE_dcolon);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1296;
			this.match(flashcardParser.DBLCOLON);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 160, flashcardParser.RULE_lines);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1302;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 1298;
				this.s_and_w();
				this.state = 1300;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === flashcardParser.NL) {
					{
					this.state = 1299;
					this.match(flashcardParser.NL);
					}
				}

				}
				}
				this.state = 1304;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << flashcardParser.S) | (1 << flashcardParser.OPS) | (1 << flashcardParser.COLON))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (flashcardParser.AMP - 32)) | (1 << (flashcardParser.Greater - 32)) | (1 << (flashcardParser.Less - 32)) | (1 << (flashcardParser.RightAngle - 32)) | (1 << (flashcardParser.RightArrow - 32)) | (1 << (flashcardParser.NUMERIC - 32)) | (1 << (flashcardParser.STRING - 32)) | (1 << (flashcardParser.SENTENCE - 32)) | (1 << (flashcardParser.BARSTRING - 32)))) !== 0) || _la === flashcardParser.URL);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 162, flashcardParser.RULE_s_and_w);
		let _la: number;
		try {
			let _alt: number;
			this.state = 1350;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 186, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1306;
				this.match(flashcardParser.STRING);
				this.state = 1313;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 180, this._ctx) ) {
				case 1:
					{
					this.state = 1308;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					do {
						{
						{
						this.state = 1307;
						this.match(flashcardParser.S);
						}
						}
						this.state = 1310;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					} while (_la === flashcardParser.S);
					this.state = 1312;
					this.match(flashcardParser.NUMERIC);
					}
					break;
				}
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1315;
				this.words();
				this.state = 1322;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 182, this._ctx) ) {
				case 1:
					{
					this.state = 1317;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					do {
						{
						{
						this.state = 1316;
						this.match(flashcardParser.S);
						}
						}
						this.state = 1319;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					} while (_la === flashcardParser.S);
					this.state = 1321;
					this.match(flashcardParser.NUMERIC);
					}
					break;
				}
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1324;
				this.match(flashcardParser.OPS);
				this.state = 1325;
				this.s_and_w();
				this.state = 1326;
				this.match(flashcardParser.CL);
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1328;
				this.match(flashcardParser.NUMERIC);
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 1332;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === flashcardParser.S) {
					{
					{
					this.state = 1329;
					this.match(flashcardParser.S);
					}
					}
					this.state = 1334;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1335;
				this.match(flashcardParser.COLON);
				this.state = 1339;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 184, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 1336;
						this.match(flashcardParser.S);
						}
						}
					}
					this.state = 1341;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 184, this._ctx);
				}
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 1342;
				this.match(flashcardParser.AMP);
				this.state = 1346;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 185, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 1343;
						this.match(flashcardParser.S);
						}
						}
					}
					this.state = 1348;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 185, this._ctx);
				}
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 1349;
				this.match(flashcardParser.URL);
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
		this.enterRule(_localctx, 164, flashcardParser.RULE_bracket_escaped);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1352;
			this.match(flashcardParser.OPESC);
			this.state = 1353;
			this.s_and_w();
			this.state = 1354;
			this.match(flashcardParser.CL);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 166, flashcardParser.RULE_clnsp);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1356;
			this.match(flashcardParser.CL);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 168, flashcardParser.RULE_sspl);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1358;
			_la = this._input.LA(1);
			if (!(_la === flashcardParser.SSPL || _la === flashcardParser.SSPL2)) {
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
		this.enterRule(_localctx, 170, flashcardParser.RULE_words);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1369;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					this.state = 1369;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case flashcardParser.SENTENCE:
						{
						this.state = 1360;
						this.match(flashcardParser.SENTENCE);
						}
						break;
					case flashcardParser.BARSTRING:
						{
						this.state = 1361;
						this.match(flashcardParser.BARSTRING);
						}
						break;
					case flashcardParser.AMP:
						{
						this.state = 1362;
						this.match(flashcardParser.AMP);
						}
						break;
					case flashcardParser.Greater:
						{
						this.state = 1363;
						this.match(flashcardParser.Greater);
						this.state = 1364;
						_la = this._input.LA(1);
						if (_la <= 0 || (_la === flashcardParser.Greater)) {
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
					case flashcardParser.Less:
						{
						this.state = 1365;
						this.match(flashcardParser.Less);
						this.state = 1366;
						_la = this._input.LA(1);
						if (_la <= 0 || (_la === flashcardParser.Less)) {
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
					case flashcardParser.RightArrow:
						{
						this.state = 1367;
						this.match(flashcardParser.RightArrow);
						}
						break;
					case flashcardParser.RightAngle:
						{
						this.state = 1368;
						this.match(flashcardParser.RightAngle);
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
				this.state = 1371;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 188, this._ctx);
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
		this.enterRule(_localctx, 172, flashcardParser.RULE_sp);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1373;
			this.match(flashcardParser.S);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
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
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\x9F\u0562\x04" +
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
		"X\tX\x03\x02\x03\x02\x07\x02\xB3\n\x02\f\x02\x0E\x02\xB6\v\x02\x03\x02" +
		"\x07\x02\xB9\n\x02\f\x02\x0E\x02\xBC\v\x02\x06\x02\xBE\n\x02\r\x02\x0E" +
		"\x02\xBF\x03\x02\x07\x02\xC3\n\x02\f\x02\x0E\x02\xC6\v\x02\x03\x02\x03" +
		"\x02\x03\x03\x03\x03\x03\x03\x05\x03\xCD\n\x03\x03\x04\x03\x04\x03\x04" +
		"\x03\x04\x03\x04\x05\x04\xD4\n\x04\x03\x05\x03\x05\x03\x05\x03\x05\x03" +
		"\x05\x03\x05\x03\x05\x03\x05\x07\x05\xDE\n\x05\f\x05\x0E\x05\xE1\v\x05" +
		"\x03\x05\x03\x05\x07\x05\xE5\n\x05\f\x05\x0E\x05\xE8\v\x05\x03\x05\x07" +
		"\x05\xEB\n\x05\f\x05\x0E\x05\xEE\v\x05\x05\x05\xF0\n\x05\x03\x06\x03\x06" +
		"\x03\x06\x03\x06\x07\x06\xF6\n\x06\f\x06\x0E\x06\xF9\v\x06\x03\x06\x03" +
		"\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x07\x06\u0104" +
		"\n\x06\f\x06\x0E\x06\u0107\v\x06\x03\x06\x03\x06\x07\x06\u010B\n\x06\f" +
		"\x06\x0E\x06\u010E\v\x06\x03\x06\x03\x06\x07\x06\u0112\n\x06\f\x06\x0E" +
		"\x06\u0115\v\x06\x03\x06\x07\x06\u0118\n\x06\f\x06\x0E\x06\u011B\v\x06" +
		"\x05\x06\u011D\n\x06\x03\x07\x03\x07\x03\x07\x03\x07\x07\x07\u0123\n\x07" +
		"\f\x07\x0E\x07\u0126\v\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x05" +
		"\x07\u012D\n\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07" +
		"\x07\x07\u0136\n\x07\f\x07\x0E\x07\u0139\v\x07\x07\x07\u013B\n\x07\f\x07" +
		"\x0E\x07\u013E\v\x07\x03\x07\x03\x07\x07\x07\u0142\n\x07\f\x07\x0E\x07" +
		"\u0145\v\x07\x03\x07\x03\x07\x07\x07\u0149\n\x07\f\x07\x0E\x07\u014C\v" +
		"\x07\x03\x07\x07\x07\u014F\n\x07\f\x07\x0E\x07\u0152\v\x07\x05\x07\u0154" +
		"\n\x07\x03\b\x03\b\x03\b\x03\b\x07\b\u015A\n\b\f\b\x0E\b\u015D\v\b\x03" +
		"\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x06\b\u0167\n\b\r\b\x0E\b" +
		"\u0168\x06\b\u016B\n\b\r\b\x0E\b\u016C\x03\b\x03\b\x07\b\u0171\n\b\f\b" +
		"\x0E\b\u0174\v\b\x03\b\x03\b\x07\b\u0178\n\b\f\b\x0E\b\u017B\v\b\x03\b" +
		"\x07\b\u017E\n\b\f\b\x0E\b\u0181\v\b\x05\b\u0183\n\b\x03\t\x03\t\x03\t" +
		"\x03\t\x07\t\u0189\n\t\f\t\x0E\t\u018C\v\t\x03\t\x03\t\x03\t\x03\t\x03" +
		"\t\x03\t\x03\t\x03\t\x06\t\u0196\n\t\r\t\x0E\t\u0197\x03\t\x07\t\u019B" +
		"\n\t\f\t\x0E\t\u019E\v\t\x03\t\x03\t\x07\t\u01A2\n\t\f\t\x0E\t\u01A5\v" +
		"\t\x03\t\x07\t\u01A8\n\t\f\t\x0E\t\u01AB\v\t\x05\t\u01AD\n\t\x03\n\x03" +
		"\n\x03\n\x03\n\x07\n\u01B3\n\n\f\n\x0E\n\u01B6\v\n\x03\n\x03\n\x07\n\u01BA" +
		"\n\n\f\n\x0E\n\u01BD\v\n\x07\n\u01BF\n\n\f\n\x0E\n\u01C2\v\n\x03\n\x03" +
		"\n\x06\n\u01C6\n\n\r\n\x0E\n\u01C7\x03\n\x03\n\x06\n\u01CC\n\n\r\n\x0E" +
		"\n\u01CD\x07\n\u01D0\n\n\f\n\x0E\n\u01D3\v\n\x06\n\u01D5\n\n\r\n\x0E\n" +
		"\u01D6\x03\n\x03\n\x07\n\u01DB\n\n\f\n\x0E\n\u01DE\v\n\x03\n\x03\n\x07" +
		"\n\u01E2\n\n\f\n\x0E\n\u01E5\v\n\x03\n\x07\n\u01E8\n\n\f\n\x0E\n\u01EB" +
		"\v\n\x05\n\u01ED\n\n\x03\v\x03\v\x03\v\x03\v\x07\v\u01F3\n\v\f\v\x0E\v" +
		"\u01F6\v\v\x03\v\x03\v\x07\v\u01FA\n\v\f\v\x0E\v\u01FD\v\v\x07\v\u01FF" +
		"\n\v\f\v\x0E\v\u0202\v\v\x03\v\x03\v\x06\v\u0206\n\v\r\v\x0E\v\u0207\x03" +
		"\v\x03\v\x06\v\u020C\n\v\r\v\x0E\v\u020D\x07\v\u0210\n\v\f\v\x0E\v\u0213" +
		"\v\v\x03\v\x03\v\x03\v\x07\v\u0218\n\v\f\v\x0E\v\u021B\v\v\x03\v\x07\v" +
		"\u021E\n\v\f\v\x0E\v\u0221\v\v\x05\v\u0223\n\v\x03\f\x03\f\x03\f\x03\f" +
		"\x03\f\x05\f\u022A\n\f\x03\r\x03\r\x05\r\u022E\n\r\x03\r\x07\r\u0231\n" +
		"\r\f\r\x0E\r\u0234\v\r\x03\x0E\x03\x0E\x07\x0E\u0238\n\x0E\f\x0E\x0E\x0E" +
		"\u023B\v\x0E\x03\x0F\x03\x0F\x03\x0F\x07\x0F\u0240\n\x0F\f\x0F\x0E\x0F" +
		"\u0243\v\x0F\x03\x10\x03\x10\x03\x10\x07\x10\u0248\n\x10\f\x10\x0E\x10" +
		"\u024B\v\x10\x03\x11\x03\x11\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03" +
		"\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03" +
		"\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x05\x12\u0265" +
		"\n\x12\x03\x13\x03\x13\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14" +
		"\x07\x14\u026F\n\x14\f\x14\x0E\x14\u0272\v\x14\x03\x15\x03\x15\x03\x15" +
		"\x03\x15\x05\x15\u0278\n\x15\x03\x15\x07\x15\u027B\n\x15\f\x15\x0E\x15" +
		"\u027E\v\x15\x03\x15\x03\x15\x03\x16\x03\x16\x03\x16\x03\x16\x05\x16\u0286" +
		"\n\x16\x03\x17\x03\x17\x03\x17\x03\x17\x03\x18\x07\x18\u028D\n\x18\f\x18" +
		"\x0E\x18\u0290\v\x18\x03\x18\x03\x18\x03\x18\x07\x18\u0295\n\x18\f\x18" +
		"\x0E\x18\u0298\v\x18\x03\x19\x03\x19\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03" +
		"\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x05\x1A\u02A5\n\x1A\x03\x1B\x03\x1B" +
		"\x03\x1B\x03\x1B\x03\x1B\x05\x1B\u02AC\n\x1B\x03\x1C\x03\x1C\x03\x1C\x05" +
		"\x1C\u02B1\n\x1C\x03\x1C\x03\x1C\x05\x1C\u02B5\n\x1C\x03\x1C\x03\x1C\x05" +
		"\x1C\u02B9\n\x1C\x03\x1C\x05\x1C\u02BC\n\x1C\x03\x1D\x03\x1D\x03\x1D\x05" +
		"\x1D\u02C1\n\x1D\x03\x1E\x03\x1E\x03\x1F\x03\x1F\x03 \x03 \x03!\x03!\x03" +
		"\"\x03\"\x03#\x03#\x03$\x03$\x03%\x03%\x03&\x03&\x03\'\x03\'\x03\'\x05" +
		"\'\u02D8\n\'\x03\'\x03\'\x03\'\x05\'\u02DD\n\'\x03\'\x03\'\x03\'\x05\'" +
		"\u02E2\n\'\x05\'\u02E4\n\'\x03(\x03(\x03)\x03)\x03)\x03)\x03)\x03)\x05" +
		")\u02EE\n)\x03*\x03*\x03*\x03*\x03*\x03*\x03*\x03*\x05*\u02F8\n*\x03+" +
		"\x03+\x03+\x03+\x03+\x03+\x03+\x03+\x05+\u0302\n+\x03,\x03,\x03,\x03," +
		"\x05,\u0308\n,\x03,\x03,\x03,\x03,\x03,\x05,\u030F\n,\x03-\x03-\x07-\u0313" +
		"\n-\f-\x0E-\u0316\v-\x03.\x03.\x03.\x07.\u031B\n.\f.\x0E.\u031E\v.\x03" +
		".\x03.\x03.\x03/\x03/\x07/\u0325\n/\f/\x0E/\u0328\v/\x030\x030\x030\x03" +
		"0\x030\x030\x030\x030\x050\u0332\n0\x031\x031\x071\u0336\n1\f1\x0E1\u0339" +
		"\v1\x031\x031\x051\u033D\n1\x032\x032\x032\x072\u0342\n2\f2\x0E2\u0345" +
		"\v2\x032\x032\x032\x033\x033\x033\x053\u034D\n3\x033\x033\x053\u0351\n" +
		"3\x033\x033\x053\u0355\n3\x033\x053\u0358\n3\x034\x034\x034\x034\x034" +
		"\x034\x034\x034\x034\x034\x034\x074\u0365\n4\f4\x0E4\u0368\v4\x034\x05" +
		"4\u036B\n4\x035\x035\x035\x035\x035\x035\x035\x035\x035\x035\x035\x07" +
		"5\u0378\n5\f5\x0E5\u037B\v5\x035\x055\u037E\n5\x036\x036\x076\u0382\n" +
		"6\f6\x0E6\u0385\v6\x037\x037\x037\x037\x037\x037\x037\x037\x057\u038F" +
		"\n7\x038\x038\x038\x058\u0394\n8\x038\x038\x038\x058\u0399\n8\x058\u039B" +
		"\n8\x039\x039\x039\x059\u03A0\n9\x039\x039\x039\x059\u03A5\n9\x039\x03" +
		"9\x039\x059\u03AA\n9\x059\u03AC\n9\x03:\x03:\x03:\x05:\u03B1\n:\x03:\x03" +
		":\x07:\u03B5\n:\f:\x0E:\u03B8\v:\x03:\x03:\x06:\u03BC\n:\r:\x0E:\u03BD" +
		"\x03:\x03:\x03:\x03:\x03:\x03:\x03:\x07:\u03C7\n:\f:\x0E:\u03CA\v:\x03" +
		":\x05:\u03CD\n:\x03;\x03;\x03;\x03;\x03<\x03<\x03=\x03=\x03=\x07=\u03D8" +
		"\n=\f=\x0E=\u03DB\v=\x03=\x05=\u03DE\n=\x03=\x03=\x03=\x03=\x07=\u03E4" +
		"\n=\f=\x0E=\u03E7\v=\x03=\x03=\x07=\u03EB\n=\f=\x0E=\u03EE\v=\x03=\x05" +
		"=\u03F1\n=\x05=\u03F3\n=\x03>\x03>\x03>\x03>\x07>\u03F9\n>\f>\x0E>\u03FC" +
		"\v>\x03>\x03>\x03?\x03?\x05?\u0402\n?\x03?\x03?\x03?\x05?\u0407\n?\x03" +
		"?\x05?\u040A\n?\x03@\x03@\x03@\x03@\x05@\u0410\n@\x03@\x05@\u0413\n@\x03" +
		"A\x03A\x05A\u0417\nA\x03A\x03A\x03A\x07A\u041C\nA\fA\x0EA\u041F\vA\x07" +
		"A\u0421\nA\fA\x0EA\u0424\vA\x03A\x07A\u0427\nA\fA\x0EA\u042A\vA\x07A\u042C" +
		"\nA\fA\x0EA\u042F\vA\x03A\x03A\x03A\x03A\x03A\x07A\u0436\nA\fA\x0EA\u0439" +
		"\vA\x03A\x05A\u043C\nA\x03B\x03B\x03B\x03B\x03B\x06B\u0443\nB\rB\x0EB" +
		"\u0444\x03B\x03B\x03B\x03B\x03B\x03B\x03B\x07B\u044E\nB\fB\x0EB\u0451" +
		"\vB\x03B\x05B\u0454\nB\x03C\x03C\x03C\x03C\x03D\x03D\x03D\x03D\x06D\u045E" +
		"\nD\rD\x0ED\u045F\x03D\x03D\x05D\u0464\nD\x03E\x03E\x03E\x03E\x06E\u046A" +
		"\nE\rE\x0EE\u046B\x03E\x03E\x03F\x03F\x07F\u0472\nF\fF\x0EF\u0475\vF\x03" +
		"F\x05F\u0478\nF\x03F\x03F\x03F\x07F\u047D\nF\fF\x0EF\u0480\vF\x07F\u0482" +
		"\nF\fF\x0EF\u0485\vF\x03F\x07F\u0488\nF\fF\x0EF\u048B\vF\x07F\u048D\n" +
		"F\fF\x0EF\u0490\vF\x03F\x03F\x03F\x07F\u0495\nF\fF\x0EF\u0498\vF\x03F" +
		"\x05F\u049B\nF\x03F\x05F\u049E\nF\x03G\x03G\x06G\u04A2\nG\rG\x0EG\u04A3" +
		"\x03G\x03G\x03H\x03H\x03H\x06H\u04AB\nH\rH\x0EH\u04AC\x03H\x03H\x03H\x03" +
		"H\x03H\x05H\u04B4\nH\x03I\x03I\x03I\x03I\x03I\x03I\x03I\x03I\x05I\u04BE" +
		"\nI\x03J\x03J\x03J\x03J\x03J\x03J\x03J\x03J\x03J\x05J\u04C9\nJ\x03K\x03" +
		"K\x03K\x03K\x03L\x03L\x03L\x03L\x03M\x03M\x07M\u04D5\nM\fM\x0EM\u04D8" +
		"\vM\x03M\x07M\u04DB\nM\fM\x0EM\u04DE\vM\x03N\x03N\x03N\x03N\x03N\x03N" +
		"\x03N\x07N\u04E7\nN\fN\x0EN\u04EA\vN\x03N\x03N\x03N\x03N\x07N\u04F0\n" +
		"N\fN\x0EN\u04F3\vN\x03N\x05N\u04F6\nN\x03O\x03O\x03O\x03O\x06O\u04FC\n" +
		"O\rO\x0EO\u04FD\x03O\x03O\x03O\x03O\x03O\x07O\u0505\nO\fO\x0EO\u0508\v" +
		"O\x03O\x05O\u050B\nO\x03P\x03P\x05P\u050F\nP\x03P\x03P\x03Q\x03Q\x03R" +
		"\x03R\x05R\u0517\nR\x06R\u0519\nR\rR\x0ER\u051A\x03S\x03S\x06S\u051F\n" +
		"S\rS\x0ES\u0520\x03S\x05S\u0524\nS\x03S\x03S\x06S\u0528\nS\rS\x0ES\u0529" +
		"\x03S\x05S\u052D\nS\x03S\x03S\x03S\x03S\x03S\x03S\x07S\u0535\nS\fS\x0E" +
		"S\u0538\vS\x03S\x03S\x07S\u053C\nS\fS\x0ES\u053F\vS\x03S\x03S\x07S\u0543" +
		"\nS\fS\x0ES\u0546\vS\x03S\x05S\u0549\nS\x03T\x03T\x03T\x03T\x03U\x03U" +
		"\x03V\x03V\x03W\x03W\x03W\x03W\x03W\x03W\x03W\x03W\x03W\x06W\u055C\nW" +
		"\rW\x0EW\u055D\x03X\x03X\x03X\x06\u0366\u0379\u03C8\u04F1\x02\x02Y\x02" +
		"\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02" +
		"\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02$\x02&\x02(\x02*\x02" +
		",\x02.\x020\x022\x024\x026\x028\x02:\x02<\x02>\x02@\x02B\x02D\x02F\x02" +
		"H\x02J\x02L\x02N\x02P\x02R\x02T\x02V\x02X\x02Z\x02\\\x02^\x02`\x02b\x02" +
		"d\x02f\x02h\x02j\x02l\x02n\x02p\x02r\x02t\x02v\x02x\x02z\x02|\x02~\x02" +
		"\x80\x02\x82\x02\x84\x02\x86\x02\x88\x02\x8A\x02\x8C\x02\x8E\x02\x90\x02" +
		"\x92\x02\x94\x02\x96\x02\x98\x02\x9A\x02\x9C\x02\x9E\x02\xA0\x02\xA2\x02" +
		"\xA4\x02\xA6\x02\xA8\x02\xAA\x02\xAC\x02\xAE\x02\x02\x17\x03\x02+,\x03" +
		"\x02./\b\x02\\]_`nu\x7F\x82\x88\x89\x8B\x8D\x05\x02[[pp\x7F\x7F\x04\x02" +
		"\\\\qq\x05\x02]]rr\x81\x81\x04\x02^^ss\x04\x02__tt\x05\x02``uu\x82\x82" +
		"\x04\x02ggyy\x05\x02iizz\x86\x86\x04\x02jj{{\x04\x02kk||\x05\x02ll}}\x87" +
		"\x87\x03\x02=>\x04\x02KKNQ\x03\x02  \x04\x02!!##\x03\x0201\x03\x02&&\x03" +
		"\x02\'\'\x02\u0612\x02\xBD\x03\x02\x02\x02\x04\xCC\x03\x02\x02\x02\x06" +
		"\xD3\x03\x02\x02\x02\b\xD5\x03\x02\x02\x02\n\xF1\x03\x02\x02\x02\f\u011E" +
		"\x03\x02\x02\x02\x0E\u0155\x03\x02\x02\x02\x10\u0184\x03\x02\x02\x02\x12" +
		"\u01AE\x03\x02\x02\x02\x14\u01EE\x03\x02\x02\x02\x16\u0229\x03\x02\x02" +
		"\x02\x18\u022B\x03\x02\x02\x02\x1A\u0235\x03\x02\x02\x02\x1C\u023C\x03" +
		"\x02\x02\x02\x1E\u0244\x03\x02\x02\x02 \u024C\x03\x02\x02\x02\"\u0264" +
		"\x03\x02\x02\x02$\u0266\x03\x02\x02\x02&\u0268\x03\x02\x02\x02(\u0273" +
		"\x03\x02\x02\x02*\u0281\x03\x02\x02\x02,\u0287\x03\x02\x02\x02.\u028E" +
		"\x03\x02\x02\x020\u0299\x03\x02\x02\x022\u02A4\x03\x02\x02\x024\u02AB" +
		"\x03\x02\x02\x026\u02BB\x03\x02\x02\x028\u02BD\x03\x02\x02\x02:\u02C2" +
		"\x03\x02\x02\x02<\u02C4\x03\x02\x02\x02>\u02C6\x03\x02\x02\x02@\u02C8" +
		"\x03\x02\x02\x02B\u02CA\x03\x02\x02\x02D\u02CC\x03\x02\x02\x02F\u02CE" +
		"\x03\x02\x02\x02H\u02D0\x03\x02\x02\x02J\u02D2\x03\x02\x02\x02L\u02E3" +
		"\x03\x02\x02\x02N\u02E5\x03\x02\x02\x02P\u02ED\x03\x02\x02\x02R\u02EF" +
		"\x03\x02\x02\x02T\u02F9\x03\x02\x02\x02V\u0303\x03\x02\x02\x02X\u0310" +
		"\x03\x02\x02\x02Z\u0317\x03\x02\x02\x02\\\u0322\x03\x02\x02\x02^\u0329" +
		"\x03\x02\x02\x02`\u0333\x03\x02\x02\x02b\u033E\x03\x02\x02\x02d\u0357" +
		"\x03\x02\x02\x02f\u036A\x03\x02\x02\x02h\u037D\x03\x02\x02\x02j\u037F" +
		"\x03\x02\x02\x02l\u0386\x03\x02\x02\x02n\u039A\x03\x02\x02\x02p\u03AB" +
		"\x03\x02\x02\x02r\u03CC\x03\x02\x02\x02t\u03CE\x03\x02\x02\x02v\u03D2" +
		"\x03\x02\x02\x02x\u03F2\x03\x02\x02\x02z\u03F4\x03\x02\x02\x02|\u0409" +
		"\x03\x02\x02\x02~\u0412\x03\x02\x02\x02\x80\u043B\x03\x02\x02\x02\x82" +
		"\u0453\x03\x02\x02\x02\x84\u0455\x03\x02\x02\x02\x86\u0459\x03\x02\x02" +
		"\x02\x88\u0465\x03\x02\x02\x02\x8A\u049D\x03\x02\x02\x02\x8C\u049F\x03" +
		"\x02\x02\x02\x8E\u04B3\x03\x02\x02\x02\x90\u04BD\x03\x02\x02\x02\x92\u04C8" +
		"\x03\x02\x02\x02\x94\u04CA\x03\x02\x02\x02\x96\u04CE\x03\x02\x02\x02\x98" +
		"\u04D2\x03\x02\x02\x02\x9A\u04F5\x03\x02\x02\x02\x9C\u050A\x03\x02\x02" +
		"\x02\x9E\u050C\x03\x02\x02\x02\xA0\u0512\x03\x02\x02\x02\xA2\u0518\x03" +
		"\x02\x02\x02\xA4\u0548\x03\x02\x02\x02\xA6\u054A\x03\x02\x02\x02\xA8\u054E" +
		"\x03\x02\x02\x02\xAA\u0550\x03\x02\x02\x02\xAC\u055B\x03\x02\x02\x02\xAE" +
		"\u055F\x03\x02\x02\x02\xB0\xBA\x05\x04\x03\x02\xB1\xB3\x07\x04\x02\x02" +
		"\xB2\xB1\x03\x02\x02\x02\xB3\xB6\x03\x02\x02\x02\xB4\xB2\x03\x02\x02\x02" +
		"\xB4\xB5\x03\x02\x02\x02\xB5\xB7\x03\x02\x02\x02\xB6\xB4\x03\x02\x02\x02" +
		"\xB7\xB9\x077\x02\x02\xB8\xB4\x03\x02\x02\x02\xB9\xBC\x03\x02\x02\x02" +
		"\xBA\xB8\x03\x02\x02\x02\xBA\xBB\x03\x02\x02\x02\xBB\xBE\x03\x02\x02\x02" +
		"\xBC\xBA\x03\x02\x02\x02\xBD\xB0\x03\x02\x02\x02\xBE\xBF\x03\x02\x02\x02" +
		"\xBF\xBD\x03\x02\x02\x02\xBF\xC0\x03\x02\x02\x02\xC0\xC4\x03\x02\x02\x02" +
		"\xC1\xC3\x077\x02\x02\xC2\xC1\x03\x02\x02\x02\xC3\xC6\x03\x02\x02\x02" +
		"\xC4\xC2\x03\x02\x02\x02\xC4\xC5\x03\x02\x02\x02\xC5\xC7\x03\x02\x02\x02" +
		"\xC6\xC4\x03\x02\x02\x02\xC7\xC8\x07\x02\x02\x03\xC8\x03\x03\x02\x02\x02" +
		"\xC9\xCD\x05\x06\x04\x02\xCA\xCD\x05\x12\n\x02\xCB\xCD\x05\x14\v\x02\xCC" +
		"\xC9\x03\x02\x02\x02\xCC\xCA\x03\x02\x02\x02\xCC\xCB\x03\x02\x02\x02\xCD" +
		"\x05\x03\x02\x02\x02\xCE\xD4\x05\n\x06\x02\xCF\xD4\x05\b\x05\x02\xD0\xD4" +
		"\x05\f\x07\x02\xD1\xD4\x05\x0E\b\x02\xD2\xD4\x05\x10\t\x02\xD3\xCE\x03" +
		"\x02\x02\x02\xD3\xCF\x03\x02\x02\x02\xD3\xD0\x03\x02\x02\x02\xD3\xD1\x03" +
		"\x02\x02\x02\xD3\xD2\x03\x02\x02\x02\xD4\x07\x03\x02\x02\x02\xD5\xD6\x07" +
		"\x05\x02\x02\xD6\xD7\x05.\x18\x02\xD7\xD8\x07 \x02\x02\xD8\xD9\x077\x02" +
		"\x02\xD9\xDA\x05\x1C\x0F\x02\xDA\xDB\t\x02\x02\x02\xDB\xDF\x05\x1C\x0F" +
		"\x02\xDC\xDE\x077\x02\x02\xDD\xDC\x03\x02\x02\x02\xDE\xE1\x03\x02\x02" +
		"\x02\xDF\xDD\x03\x02\x02\x02\xDF\xE0\x03\x02\x02\x02\xE0\xEF\x03\x02\x02" +
		"\x02\xE1\xDF\x03\x02\x02\x02\xE2\xEC\x05$\x13\x02\xE3\xE5\x077\x02\x02" +
		"\xE4\xE3\x03\x02\x02\x02\xE5\xE8\x03\x02\x02\x02\xE6\xE4\x03\x02\x02\x02" +
		"\xE6\xE7\x03\x02\x02\x02\xE7\xE9\x03\x02\x02\x02\xE8\xE6\x03\x02\x02\x02" +
		"\xE9\xEB\x05$\x13\x02\xEA\xE6\x03\x02\x02\x02\xEB\xEE\x03\x02\x02\x02" +
		"\xEC\xEA\x03\x02\x02\x02\xEC\xED\x03\x02\x02\x02\xED\xF0\x03\x02\x02\x02" +
		"\xEE\xEC\x03\x02\x02\x02\xEF\xE2\x03\x02\x02\x02\xEF\xF0\x03\x02\x02\x02" +
		"\xF0\t\x03\x02\x02\x02\xF1\xF2\x07\x06\x02\x02\xF2\xF3\x05.\x18\x02\xF3" +
		"\xF7\x07 \x02\x02\xF4\xF6\x077\x02\x02\xF5\xF4\x03\x02\x02\x02\xF6\xF9" +
		"\x03\x02\x02\x02\xF7\xF5\x03\x02\x02\x02\xF7\xF8\x03\x02\x02\x02\xF8\xFA" +
		"\x03\x02\x02\x02\xF9\xF7\x03\x02\x02\x02\xFA\xFB\t\x03\x02\x02\xFB\xFC" +
		"\x05\x1C\x0F\x02\xFC\xFD\t\x02\x02\x02\xFD\u0105\x05\x1C\x0F\x02\xFE\xFF" +
		"\t\x03\x02\x02\xFF\u0100\x05\x1C\x0F\x02\u0100\u0101\t\x02\x02\x02\u0101" +
		"\u0102\x05\x1C\x0F\x02\u0102\u0104\x03\x02\x02\x02\u0103\xFE\x03\x02\x02" +
		"\x02\u0104\u0107\x03\x02\x02\x02\u0105\u0103\x03\x02\x02\x02\u0105\u0106" +
		"\x03\x02\x02\x02\u0106\u0108\x03\x02\x02\x02\u0107\u0105\x03\x02\x02\x02" +
		"\u0108\u010C\t\x03\x02\x02\u0109\u010B\x077\x02\x02\u010A\u0109\x03\x02" +
		"\x02\x02\u010B\u010E\x03\x02\x02\x02\u010C\u010A\x03\x02\x02\x02\u010C" +
		"\u010D\x03\x02\x02\x02\u010D\u011C\x03\x02\x02\x02\u010E\u010C\x03\x02" +
		"\x02\x02\u010F\u0119\x05$\x13\x02\u0110\u0112\x077\x02\x02\u0111\u0110" +
		"\x03\x02\x02\x02\u0112\u0115\x03\x02\x02\x02\u0113\u0111\x03\x02\x02\x02" +
		"\u0113\u0114\x03\x02\x02\x02\u0114\u0116\x03\x02\x02\x02\u0115\u0113\x03" +
		"\x02\x02\x02\u0116\u0118\x05$\x13\x02\u0117\u0113\x03\x02\x02\x02\u0118" +
		"\u011B\x03\x02\x02\x02\u0119\u0117\x03\x02\x02\x02\u0119\u011A\x03\x02" +
		"\x02\x02\u011A\u011D\x03\x02\x02\x02\u011B\u0119\x03\x02\x02\x02\u011C" +
		"\u010F\x03\x02\x02\x02\u011C\u011D\x03\x02\x02\x02\u011D\v\x03\x02\x02" +
		"\x02\u011E\u011F\x07\x07\x02\x02\u011F\u0120\x05.\x18\x02\u0120\u0124" +
		"\x07 \x02\x02\u0121\u0123\x077\x02\x02\u0122\u0121\x03\x02\x02\x02\u0123" +
		"\u0126\x03\x02\x02\x02\u0124\u0122\x03\x02\x02\x02\u0124\u0125\x03\x02" +
		"\x02\x02\u0125\u012C\x03\x02\x02\x02\u0126\u0124\x03\x02\x02\x02\u0127" +
		"\u0128\t\x03\x02\x02\u0128\u0129\x05\x1C\x0F\x02\u0129\u012A\t\x02\x02" +
		"\x02\u012A\u012B\x05\x1C\x0F\x02\u012B\u012D\x03\x02\x02\x02\u012C\u0127" +
		"\x03\x02\x02\x02\u012C\u012D\x03\x02\x02\x02\u012D\u013C\x03\x02\x02\x02" +
		"\u012E\u012F\t\x03\x02\x02\u012F\u0130\x05\x1C\x0F\x02\u0130\u0131\t\x02" +
		"\x02\x02\u0131\u0137\x05\x1C\x0F\x02\u0132\u0133\x077\x02\x02\u0133\u0134" +
		"\x07-\x02\x02\u0134\u0136\x05\x1C\x0F\x02\u0135\u0132\x03\x02\x02\x02" +
		"\u0136\u0139\x03\x02\x02\x02\u0137\u0135\x03\x02\x02\x02\u0137\u0138\x03" +
		"\x02\x02\x02\u0138\u013B\x03\x02\x02\x02\u0139\u0137\x03\x02\x02\x02\u013A" +
		"\u012E\x03\x02\x02\x02\u013B\u013E\x03\x02\x02\x02\u013C\u013A\x03\x02" +
		"\x02\x02\u013C\u013D\x03\x02\x02\x02\u013D\u013F\x03\x02\x02\x02\u013E" +
		"\u013C\x03\x02\x02\x02\u013F\u0143\t\x03\x02\x02\u0140\u0142\x077\x02" +
		"\x02\u0141\u0140\x03\x02\x02\x02\u0142\u0145\x03\x02\x02\x02\u0143\u0141" +
		"\x03\x02\x02\x02\u0143\u0144\x03\x02\x02\x02\u0144\u0153\x03\x02\x02\x02" +
		"\u0145\u0143\x03\x02\x02\x02\u0146\u0150\x05$\x13\x02\u0147\u0149\x07" +
		"7\x02\x02\u0148\u0147\x03\x02\x02\x02\u0149\u014C\x03\x02\x02\x02\u014A" +
		"\u0148\x03\x02\x02\x02\u014A\u014B\x03\x02\x02\x02\u014B\u014D\x03\x02" +
		"\x02\x02\u014C\u014A\x03\x02\x02\x02\u014D\u014F\x05$\x13\x02\u014E\u014A" +
		"\x03\x02\x02\x02\u014F\u0152\x03\x02\x02\x02\u0150\u014E\x03\x02\x02\x02" +
		"\u0150\u0151";
	private static readonly _serializedATNSegment1: string =
		"\x03\x02\x02\x02\u0151\u0154\x03\x02\x02\x02\u0152\u0150\x03\x02\x02\x02" +
		"\u0153\u0146\x03\x02\x02\x02\u0153\u0154\x03\x02\x02\x02\u0154\r\x03\x02" +
		"\x02\x02\u0155\u0156\x07\b\x02\x02\u0156\u0157\x05.\x18\x02\u0157\u015B" +
		"\x07 \x02\x02\u0158\u015A\x077\x02\x02\u0159\u0158\x03\x02\x02\x02\u015A" +
		"\u015D\x03\x02\x02\x02\u015B\u0159\x03\x02\x02\x02\u015B\u015C\x03\x02" +
		"\x02\x02\u015C\u015E\x03\x02\x02\x02\u015D\u015B\x03\x02\x02\x02\u015E" +
		"\u016A\x05\x1A\x0E\x02\u015F\u0160\t\x03\x02\x02\u0160\u0161\x05\x18\r" +
		"\x02\u0161\u0162\x077\x02\x02\u0162\u0163\x05\x1A\x0E\x02\u0163\u0166" +
		"\x03\x02\x02\x02\u0164\u0165\t\x02\x02\x02\u0165\u0167\x05\x1A\x0E\x02" +
		"\u0166\u0164\x03\x02\x02\x02\u0167\u0168\x03\x02\x02\x02\u0168\u0166\x03" +
		"\x02\x02\x02\u0168\u0169\x03\x02\x02\x02\u0169\u016B\x03\x02\x02\x02\u016A" +
		"\u015F\x03\x02\x02\x02\u016B\u016C\x03\x02\x02\x02\u016C\u016A\x03\x02" +
		"\x02\x02\u016C\u016D\x03\x02\x02\x02\u016D\u016E\x03\x02\x02\x02\u016E" +
		"\u0172\t\x03\x02\x02\u016F\u0171\x077\x02\x02\u0170\u016F\x03\x02\x02" +
		"\x02\u0171\u0174\x03\x02\x02\x02\u0172\u0170\x03\x02\x02\x02\u0172\u0173" +
		"\x03\x02\x02\x02\u0173\u0182\x03\x02\x02\x02\u0174\u0172\x03\x02\x02\x02" +
		"\u0175\u017F\x05$\x13\x02\u0176\u0178\x077\x02\x02\u0177\u0176\x03\x02" +
		"\x02\x02\u0178\u017B\x03\x02\x02\x02\u0179\u0177\x03\x02\x02\x02\u0179" +
		"\u017A\x03\x02\x02\x02\u017A\u017C\x03\x02\x02\x02\u017B\u0179\x03\x02" +
		"\x02\x02\u017C\u017E\x05$\x13\x02\u017D\u0179\x03\x02\x02\x02\u017E\u0181" +
		"\x03\x02\x02\x02\u017F\u017D\x03\x02\x02\x02\u017F\u0180\x03\x02\x02\x02" +
		"\u0180\u0183\x03\x02\x02\x02\u0181\u017F\x03\x02\x02\x02\u0182\u0175\x03" +
		"\x02\x02\x02\u0182\u0183\x03\x02\x02\x02\u0183\x0F\x03\x02\x02\x02\u0184" +
		"\u0185\x07\t\x02\x02\u0185\u0186\x05.\x18\x02\u0186\u018A\x07 \x02\x02" +
		"\u0187\u0189\x077\x02\x02\u0188\u0187\x03\x02\x02\x02\u0189\u018C\x03" +
		"\x02\x02\x02\u018A\u0188\x03\x02\x02\x02\u018A\u018B\x03\x02\x02\x02\u018B" +
		"\u018D\x03\x02\x02\x02\u018C\u018A\x03\x02\x02\x02\u018D\u018E\x05\x1A" +
		"\x0E\x02\u018E\u018F\t\x02\x02\x02\u018F\u0190\x05\x18\r\x02\u0190\u0191" +
		"\x077\x02\x02\u0191\u0192\x05\x1A\x0E\x02\u0192\u0195\x03\x02\x02\x02" +
		"\u0193\u0194\x07-\x02\x02\u0194\u0196\x05\x1A\x0E\x02\u0195\u0193\x03" +
		"\x02\x02\x02\u0196\u0197\x03\x02\x02\x02\u0197\u0195\x03\x02\x02\x02\u0197" +
		"\u0198\x03\x02\x02\x02\u0198\u019C\x03\x02\x02\x02\u0199\u019B\x077\x02" +
		"\x02\u019A\u0199\x03\x02\x02\x02\u019B\u019E\x03\x02\x02\x02\u019C\u019A" +
		"\x03\x02\x02\x02\u019C\u019D\x03\x02\x02\x02\u019D\u01AC\x03\x02\x02\x02" +
		"\u019E\u019C\x03\x02\x02\x02\u019F\u01A9\x05$\x13\x02\u01A0\u01A2\x07" +
		"7\x02\x02\u01A1\u01A0\x03\x02\x02\x02\u01A2\u01A5\x03\x02\x02\x02\u01A3" +
		"\u01A1\x03\x02\x02\x02\u01A3\u01A4\x03\x02\x02\x02\u01A4\u01A6\x03\x02" +
		"\x02\x02\u01A5\u01A3\x03\x02\x02\x02\u01A6\u01A8\x05$\x13\x02\u01A7\u01A3" +
		"\x03\x02\x02\x02\u01A8\u01AB\x03\x02\x02\x02\u01A9\u01A7\x03\x02\x02\x02" +
		"\u01A9\u01AA\x03\x02\x02\x02\u01AA\u01AD\x03\x02\x02\x02\u01AB\u01A9\x03" +
		"\x02\x02\x02\u01AC\u019F\x03\x02\x02\x02\u01AC\u01AD\x03\x02\x02\x02\u01AD" +
		"\x11\x03\x02\x02\x02\u01AE\u01AF\x07\n\x02\x02\u01AF\u01B0\x05.\x18\x02" +
		"\u01B0\u01B4\x07 \x02\x02\u01B1\u01B3\x077\x02\x02\u01B2\u01B1\x03\x02" +
		"\x02\x02\u01B3\u01B6\x03\x02\x02\x02\u01B4\u01B2\x03\x02\x02\x02\u01B4" +
		"\u01B5\x03\x02\x02\x02\u01B5\u01C0\x03\x02\x02\x02\u01B6\u01B4\x03\x02" +
		"\x02\x02\u01B7\u01BB\x05\"\x12\x02\u01B8\u01BA\x077\x02\x02\u01B9\u01B8" +
		"\x03\x02\x02\x02\u01BA\u01BD\x03\x02\x02\x02\u01BB\u01B9\x03\x02\x02\x02" +
		"\u01BB\u01BC\x03\x02\x02\x02\u01BC\u01BF\x03\x02\x02\x02\u01BD\u01BB\x03" +
		"\x02\x02\x02\u01BE\u01B7\x03\x02\x02\x02\u01BF\u01C2\x03\x02\x02\x02\u01C0" +
		"\u01BE\x03\x02\x02\x02\u01C0\u01C1\x03\x02\x02\x02\u01C1\u01D4\x03\x02" +
		"\x02\x02\u01C2\u01C0\x03\x02\x02\x02\u01C3\u01C5\t\x03\x02\x02\u01C4\u01C6" +
		"\x05 \x11\x02\u01C5\u01C4\x03\x02\x02\x02\u01C6\u01C7\x03\x02\x02\x02" +
		"\u01C7\u01C5\x03\x02\x02\x02\u01C7\u01C8\x03\x02\x02\x02\u01C8\u01D1\x03" +
		"\x02\x02\x02\u01C9\u01CB\t\x02\x02\x02\u01CA\u01CC\x05 \x11\x02\u01CB" +
		"\u01CA\x03\x02\x02\x02\u01CC\u01CD\x03\x02\x02\x02\u01CD\u01CB\x03\x02" +
		"\x02\x02\u01CD\u01CE\x03\x02\x02\x02\u01CE\u01D0\x03\x02\x02\x02\u01CF" +
		"\u01C9\x03\x02\x02\x02\u01D0\u01D3\x03\x02\x02\x02\u01D1\u01CF\x03\x02" +
		"\x02\x02\u01D1\u01D2\x03\x02\x02\x02\u01D2\u01D5\x03\x02\x02\x02\u01D3" +
		"\u01D1\x03\x02\x02\x02\u01D4\u01C3\x03\x02\x02\x02\u01D5\u01D6\x03\x02" +
		"\x02\x02\u01D6\u01D4\x03\x02\x02\x02\u01D6\u01D7\x03\x02\x02\x02\u01D7" +
		"\u01D8\x03\x02\x02\x02\u01D8\u01DC\t\x03\x02\x02\u01D9\u01DB\x077\x02" +
		"\x02\u01DA\u01D9\x03\x02\x02\x02\u01DB\u01DE\x03\x02\x02\x02\u01DC\u01DA" +
		"\x03\x02\x02\x02\u01DC\u01DD\x03\x02\x02\x02\u01DD\u01EC\x03\x02\x02\x02" +
		"\u01DE\u01DC\x03\x02\x02\x02\u01DF\u01E9\x05$\x13\x02\u01E0\u01E2\x07" +
		"7\x02\x02\u01E1\u01E0\x03\x02\x02\x02\u01E2\u01E5\x03\x02\x02\x02\u01E3" +
		"\u01E1\x03\x02\x02\x02\u01E3\u01E4\x03\x02\x02\x02\u01E4\u01E6\x03\x02" +
		"\x02\x02\u01E5\u01E3\x03\x02\x02\x02\u01E6\u01E8\x05$\x13\x02\u01E7\u01E3" +
		"\x03\x02\x02\x02\u01E8\u01EB\x03\x02\x02\x02\u01E9\u01E7\x03\x02\x02\x02" +
		"\u01E9\u01EA\x03\x02\x02\x02\u01EA\u01ED\x03\x02\x02\x02\u01EB\u01E9\x03" +
		"\x02\x02\x02\u01EC\u01DF\x03\x02\x02\x02\u01EC\u01ED\x03\x02\x02\x02\u01ED" +
		"\x13\x03\x02\x02\x02\u01EE\u01EF\x07\v\x02\x02\u01EF\u01F0\x05.\x18\x02" +
		"\u01F0\u01F4\x07 \x02\x02\u01F1\u01F3\x077\x02\x02\u01F2\u01F1\x03\x02" +
		"\x02\x02\u01F3\u01F6\x03\x02\x02\x02\u01F4\u01F2\x03\x02\x02\x02\u01F4" +
		"\u01F5\x03\x02\x02\x02\u01F5\u0200\x03\x02\x02\x02\u01F6\u01F4\x03\x02" +
		"\x02\x02\u01F7\u01FB\x05\"\x12\x02\u01F8\u01FA\x077\x02\x02\u01F9\u01F8" +
		"\x03\x02\x02\x02\u01FA\u01FD\x03\x02\x02\x02\u01FB\u01F9\x03\x02\x02\x02" +
		"\u01FB\u01FC\x03\x02\x02\x02\u01FC\u01FF\x03\x02\x02\x02\u01FD\u01FB\x03" +
		"\x02\x02\x02\u01FE\u01F7\x03\x02\x02\x02\u01FF\u0202\x03\x02\x02\x02\u0200" +
		"\u01FE\x03\x02\x02\x02\u0200\u0201\x03\x02\x02\x02\u0201\u0203\x03\x02" +
		"\x02\x02\u0202\u0200\x03\x02\x02\x02\u0203\u0205\t\x02\x02\x02\u0204\u0206" +
		"\x05 \x11\x02\u0205\u0204\x03\x02\x02\x02\u0206\u0207\x03\x02\x02\x02" +
		"\u0207\u0205\x03\x02\x02\x02\u0207\u0208\x03\x02\x02\x02\u0208\u0211\x03" +
		"\x02\x02\x02\u0209\u020B\x07-\x02\x02\u020A\u020C\x05 \x11\x02\u020B\u020A" +
		"\x03\x02\x02\x02\u020C\u020D\x03\x02\x02\x02\u020D\u020B\x03\x02\x02\x02" +
		"\u020D\u020E\x03\x02\x02\x02\u020E\u0210\x03\x02\x02\x02\u020F\u0209\x03" +
		"\x02\x02\x02\u0210\u0213\x03\x02\x02\x02\u0211\u020F\x03\x02\x02\x02\u0211" +
		"\u0212\x03\x02\x02\x02\u0212\u0222\x03\x02\x02\x02\u0213\u0211\x03\x02" +
		"\x02\x02\u0214\u0215\x07-\x02\x02\u0215\u021F\x05$\x13\x02\u0216\u0218" +
		"\x077\x02\x02\u0217\u0216\x03\x02\x02\x02\u0218\u021B\x03\x02\x02\x02" +
		"\u0219\u0217\x03\x02\x02\x02\u0219\u021A\x03\x02\x02\x02\u021A\u021C\x03" +
		"\x02\x02\x02\u021B\u0219\x03\x02\x02\x02\u021C\u021E\x05$\x13\x02\u021D" +
		"\u0219\x03\x02\x02\x02\u021E\u0221\x03\x02\x02\x02\u021F\u021D\x03\x02" +
		"\x02\x02\u021F\u0220\x03\x02\x02\x02\u0220\u0223\x03\x02\x02\x02\u0221" +
		"\u021F\x03\x02\x02\x02\u0222\u0214\x03\x02\x02\x02\u0222\u0223\x03\x02" +
		"\x02\x02\u0223\x15\x03\x02\x02\x02\u0224\u022A\x05\x98M\x02\u0225\u022A" +
		"\x05\xA4S\x02\u0226\u022A\x05\x8AF\x02\u0227\u022A\x05`1\x02\u0228\u022A" +
		"\x05j6\x02\u0229\u0224\x03\x02\x02\x02\u0229\u0225\x03\x02\x02\x02\u0229" +
		"\u0226\x03\x02\x02\x02\u0229\u0227\x03\x02\x02\x02\u0229\u0228\x03\x02" +
		"\x02\x02\u022A\x17\x03\x02\x02\x02\u022B\u0232\x05\x16\f\x02\u022C\u022E" +
		"\x077\x02\x02\u022D\u022C\x03\x02\x02\x02\u022D\u022E\x03\x02\x02\x02" +
		"\u022E\u022F\x03\x02\x02\x02\u022F\u0231\x05\x16\f\x02\u0230\u022D\x03" +
		"\x02\x02\x02\u0231\u0234\x03\x02\x02\x02\u0232\u0230\x03\x02\x02\x02\u0232" +
		"\u0233\x03\x02\x02\x02\u0233\x19\x03\x02\x02\x02\u0234\u0232\x03\x02\x02" +
		"\x02\u0235\u0239\x05\"\x12\x02\u0236\u0238\x077\x02\x02\u0237\u0236\x03" +
		"\x02\x02\x02\u0238\u023B\x03\x02\x02\x02\u0239\u0237\x03\x02\x02\x02\u0239" +
		"\u023A\x03\x02\x02\x02\u023A\x1B\x03\x02\x02\x02\u023B\u0239\x03\x02\x02" +
		"\x02\u023C\u0241\x05\x18\r\x02\u023D\u023E\x07-\x02\x02\u023E\u0240\x05" +
		"\x18\r\x02\u023F\u023D\x03\x02\x02\x02\u0240\u0243\x03\x02\x02\x02\u0241" +
		"\u023F\x03\x02\x02\x02\u0241\u0242\x03\x02\x02\x02\u0242\x1D\x03\x02\x02" +
		"\x02\u0243\u0241\x03\x02\x02\x02\u0244\u0249\x05\x1A\x0E\x02\u0245\u0246" +
		"\x07-\x02\x02\u0246\u0248\x05\x1A\x0E\x02\u0247\u0245\x03\x02\x02\x02" +
		"\u0248\u024B\x03\x02\x02\x02\u0249\u0247\x03\x02\x02\x02\u0249\u024A\x03" +
		"\x02\x02\x02\u024A\x1F\x03\x02\x02\x02\u024B\u0249\x03\x02\x02\x02\u024C" +
		"\u024D\x05\x1A\x0E\x02\u024D!\x03\x02\x02\x02\u024E\u0265\x07\x9E\x02" +
		"\x02\u024F\u0265\x05&\x14\x02\u0250\u0265\x05\x98M\x02\u0251\u0265\x05" +
		"\x82B\x02\u0252\u0265\x05x=\x02\u0253\u0265\x05\x8EH\x02\u0254\u0265\x05" +
		"\x8AF\x02\u0255\u0265\x05\x8CG\x02\u0256\u0265\x05\xA4S\x02\u0257\u0265" +
		"\x05~@\x02\u0258\u0265\x05\x90I\x02\u0259\u0265\x05`1\x02\u025A\u0265" +
		"\x05j6\x02\u025B\u0265\x05\\/\x02\u025C\u0265\x05P)\x02\u025D\u0265\x05" +
		"R*\x02\u025E\u0265\x05V,\x02\u025F\u0265\x05T+\x02\u0260\u0265\x05X-\x02" +
		"\u0261\u0265\x05|?\x02\u0262\u0265\x05\x9EP\x02\u0263\u0265\x05\xAEX\x02" +
		"\u0264\u024E\x03\x02\x02\x02\u0264\u024F\x03\x02\x02\x02\u0264\u0250\x03" +
		"\x02\x02\x02\u0264\u0251\x03\x02\x02\x02\u0264\u0252\x03\x02\x02\x02\u0264" +
		"\u0253\x03\x02\x02\x02\u0264\u0254\x03\x02\x02\x02\u0264\u0255\x03\x02" +
		"\x02\x02\u0264\u0256\x03\x02\x02\x02\u0264\u0257\x03\x02\x02\x02\u0264" +
		"\u0258\x03\x02\x02\x02\u0264\u0259\x03\x02\x02\x02\u0264\u025A\x03\x02" +
		"\x02\x02\u0264\u025B\x03\x02\x02\x02\u0264\u025C\x03\x02\x02\x02\u0264" +
		"\u025D\x03\x02\x02\x02\u0264\u025E\x03\x02\x02\x02\u0264\u025F\x03\x02" +
		"\x02\x02\u0264\u0260\x03\x02\x02\x02\u0264\u0261\x03\x02\x02\x02\u0264" +
		"\u0262\x03\x02\x02\x02\u0264\u0263\x03\x02\x02\x02\u0265#\x03\x02\x02" +
		"\x02\u0266\u0267\x05\"\x12\x02\u0267%\x03\x02\x02\x02\u0268\u0270\x05" +
		"(\x15\x02\u0269\u026F\x05(\x15\x02\u026A\u026F\x05\x8AF\x02\u026B\u026F" +
		"\x05\x8CG\x02\u026C\u026F\x05x=\x02\u026D\u026F\x05~@\x02\u026E\u0269" +
		"\x03\x02\x02\x02\u026E\u026A\x03\x02\x02\x02\u026E\u026B\x03\x02\x02\x02" +
		"\u026E\u026C\x03\x02\x02\x02\u026E\u026D\x03\x02\x02\x02\u026F\u0272\x03" +
		"\x02\x02\x02\u0270\u026E\x03\x02\x02\x02\u0270\u0271\x03\x02\x02\x02\u0271" +
		"\'\x03\x02\x02\x02\u0272\u0270\x03\x02\x02\x02\u0273\u0277\x07\x16\x02" +
		"\x02\u0274\u0278\x075\x02\x02\u0275\u0278\x076\x02\x02\u0276\u0278\x03" +
		"\x02\x02\x02\u0277\u0274\x03\x02\x02\x02\u0277\u0275\x03\x02\x02\x02\u0277" +
		"\u0276\x03\x02\x02\x02\u0278\u027C\x03\x02\x02\x02\u0279\u027B\x05\xA4" +
		"S\x02\u027A\u0279\x03\x02\x02\x02\u027B\u027E\x03\x02\x02\x02\u027C\u027A" +
		"\x03\x02\x02\x02\u027C\u027D\x03\x02\x02\x02\u027D\u027F\x03\x02\x02\x02" +
		"\u027E\u027C\x03\x02\x02\x02\u027F\u0280\x05\xA8U\x02\u0280)\x03\x02\x02" +
		"\x02\u0281\u0282\x07\x11\x02\x02\u0282\u0283\x05\xA4S\x02\u0283\u0285" +
		"\x07 \x02\x02\u0284\u0286\x05,\x17\x02\u0285\u0284\x03\x02\x02\x02\u0285" +
		"\u0286\x03\x02\x02\x02\u0286+\x03\x02\x02\x02\u0287\u0288\x07I\x02\x02" +
		"\u0288\u0289\x075\x02\x02\u0289\u028A\x07 \x02\x02\u028A-\x03\x02\x02" +
		"\x02\u028B\u028D\x050\x19\x02\u028C\u028B\x03\x02\x02\x02\u028D\u0290" +
		"\x03\x02\x02\x02\u028E\u028C\x03\x02\x02\x02\u028E\u028F\x03\x02\x02\x02" +
		"\u028F\u0296\x03\x02\x02\x02\u0290\u028E\x03\x02\x02\x02\u0291\u0295\x07" +
		"\x8A\x02\x02\u0292\u0295\x07\x8B\x02\x02\u0293\u0295\x052\x1A\x02\u0294" +
		"\u0291\x03\x02\x02\x02\u0294\u0292\x03\x02\x02\x02\u0294\u0293\x03\x02" +
		"\x02\x02\u0295\u0298\x03\x02\x02\x02\u0296\u0294\x03\x02\x02\x02\u0296" +
		"\u0297\x03\x02\x02\x02\u0297/\x03\x02\x02\x02\u0298\u0296\x03\x02\x02" +
		"\x02\u0299\u029A\t\x04\x02\x02\u029A1\x03\x02\x02\x02\u029B\u02A5\x05" +
		"6\x1C\x02\u029C\u02A5\x05n8\x02\u029D\u02A5\x058\x1D\x02\u029E\u02A5\x05" +
		":\x1E\x02\u029F\u02A5\x05<\x1F\x02\u02A0\u02A5\x05> \x02\u02A1\u02A5\x05" +
		"@!\x02\u02A2\u02A5\x05B\"\x02\u02A3\u02A5\x07a\x02\x02\u02A4\u029B\x03" +
		"\x02\x02\x02\u02A4\u029C\x03\x02\x02\x02\u02A4\u029D\x03\x02\x02\x02\u02A4" +
		"\u029E\x03\x02\x02\x02\u02A4\u029F\x03\x02\x02\x02\u02A4\u02A0\x03\x02" +
		"\x02\x02\u02A4\u02A1\x03\x02\x02\x02\u02A4\u02A2\x03\x02\x02\x02\u02A4" +
		"\u02A3\x03\x02\x02\x02\u02A53\x03\x02\x02\x02\u02A6\u02AC\x07\x88\x02" +
		"\x02\u02A7\u02AC\x07\x89\x02\x02\u02A8\u02AC\x07\x8A\x02\x02\u02A9\u02AC" +
		"\x07\x8B\x02\x02\u02AA\u02AC\x03\x02\x02\x02\u02AB\u02A6\x03\x02\x02\x02" +
		"\u02AB\u02A7\x03\x02\x02\x02\u02AB\u02A8\x03\x02\x02\x02\u02AB\u02A9\x03" +
		"\x02\x02\x02\u02AB\u02AA\x03\x02\x02\x02\u02AC5\x03\x02\x02\x02\u02AD" +
		"\u02B0\x07X\x02\x02\u02AE\u02B1\x07\r\x02\x02\u02AF\u02B1\x07\x9B\x02" +
		"\x02\u02B0\u02AE\x03\x02\x02\x02\u02B0\u02AF\x03\x02\x02\x02\u02B0\u02B1" +
		"\x03\x02\x02\x02\u02B1\u02BC\x03\x02\x02\x02\u02B2\u02B4\x07o\x02\x02" +
		"\u02B3\u02B5\x07\r\x02\x02\u02B4\u02B3\x03\x02\x02\x02\u02B4\u02B5\x03" +
		"\x02\x02\x02\u02B5\u02BC\x03\x02\x02\x02\u02B6\u02B8\x07Y\x02\x02\u02B7" +
		"\u02B9\x07\r\x02\x02\u02B8\u02B7\x03\x02\x02\x02\u02B8\u02B9\x03\x02\x02" +
		"\x02\u02B9\u02BC\x03\x02\x02\x02\u02BA\u02BC\x07Z\x02\x02\u02BB\u02AD" +
		"\x03\x02\x02\x02\u02BB\u02B2\x03\x02\x02\x02\u02BB\u02B6\x03\x02\x02\x02" +
		"\u02BB\u02BA\x03\x02\x02\x02\u02BC7\x03\x02\x02\x02\u02BD\u02C0\t\x05" +
		"\x02\x02\u02BE\u02BF\x07!\x02\x02\u02BF\u02C1\x07\x0F\x02\x02\u02C0\u02BE" +
		"\x03\x02\x02\x02\u02C0\u02C1\x03\x02\x02\x02\u02C19\x03\x02\x02\x02\u02C2" +
		"\u02C3\t\x06\x02\x02\u02C3;\x03\x02\x02\x02\u02C4\u02C5\t\x07\x02\x02" +
		"\u02C5=\x03\x02\x02\x02\u02C6\u02C7\t\b\x02\x02\u02C7?\x03\x02\x02\x02" +
		"\u02C8\u02C9\t\t\x02\x02\u02C9A\x03\x02\x02\x02\u02CA\u02CB\t\n\x02\x02" +
		"\u02CBC\x03\x02\x02\x02\u02CC\u02CD\t\v\x02\x02\u02CDE\x03\x02\x02\x02" +
		"\u02CE\u02CF\t\f\x02\x02\u02CFG\x03\x02\x02\x02\u02D0\u02D1\t\r\x02\x02" +
		"\u02D1I\x03\x02\x02\x02\u02D2\u02D3\t\x0E\x02\x02\u02D3K\x03\x02\x02\x02" +
		"\u02D4\u02D7\x07f\x02\x02\u02D5\u02D6\x07!\x02\x02\u02D6\u02D8\x07\x0F" +
		"\x02\x02\u02D7\u02D5\x03\x02\x02\x02\u02D7\u02D8\x03\x02\x02\x02\u02D8" +
		"\u02E4\x03\x02\x02\x02\u02D9\u02DC\x07x\x02\x02\u02DA\u02DB\x07!\x02\x02" +
		"\u02DB\u02DD\x07\x0F\x02\x02\u02DC\u02DA\x03\x02\x02\x02\u02DC\u02DD\x03" +
		"\x02\x02\x02\u02DD\u02E4\x03\x02\x02\x02\u02DE\u02E1\x07\x84\x02\x02\u02DF" +
		"\u02E0\x07!\x02\x02\u02E0\u02E2\x07\x0F\x02\x02\u02E1\u02DF\x03\x02\x02" +
		"\x02\u02E1\u02E2\x03\x02\x02\x02\u02E2\u02E4\x03\x02\x02\x02\u02E3\u02D4" +
		"\x03\x02\x02\x02\u02E3\u02D9\x03\x02\x02\x02\u02E3\u02DE\x03\x02\x02\x02" +
		"\u02E4M\x03\x02\x02\x02\u02E5\u02E6\t\x0F\x02\x02\u02E6O\x03\x02\x02\x02" +
		"\u02E7\u02E8\x05D#\x02\u02E8\u02E9\x07!\x02\x02\u02E9\u02EA\x05v<\x02" +
		"\u02EA\u02EB\x07 \x02\x02\u02EB\u02EE\x03\x02\x02\x02\u02EC\u02EE\x07" +
		"3\x02\x02\u02ED\u02E7\x03\x02\x02\x02\u02ED\u02EC\x03\x02\x02\x02\u02EE" +
		"Q\x03\x02\x02\x02\u02EF\u02F0\x05F$\x02\u02F0\u02F1\x07!\x02\x02\u02F1" +
		"\u02F2\x05v<\x02\u02F2\u02F7\x07 \x02\x02\u02F3\u02F4\x07K\x02\x02\u02F4" +
		"\u02F5\x05\xACW\x02\u02F5\u02F6\x07 \x02\x02\u02F6\u02F8\x03\x02\x02\x02" +
		"\u02F7\u02F3\x03\x02\x02\x02\u02F7\u02F8\x03\x02\x02\x02\u02F8S\x03\x02" +
		"\x02\x02\u02F9\u02FA\x05J&\x02\u02FA\u02FB\x07!\x02\x02\u02FB\u02FC\x05" +
		"v<\x02\u02FC\u0301\x07 \x02\x02\u02FD\u02FE\x07K\x02\x02\u02FE\u02FF\x05" +
		"\xACW\x02\u02FF\u0300\x07 \x02\x02\u0300\u0302\x03\x02\x02\x02\u0301\u02FD" +
		"\x03\x02\x02\x02\u0301\u0302\x03\x02\x02\x02\u0302U\x03\x02\x02\x02\u0303" +
		"\u0304\x05H%\x02\u0304\u0307\x07!\x02\x02\u0305\u0308\x05v<\x02\u0306" +
		"\u0308\x05t;\x02\u0307\u0305\x03\x02\x02\x02\u0307\u0306\x03\x02\x02\x02" +
		"\u0308\u0309\x03\x02\x02\x02\u0309\u030E\x07 \x02\x02\u030A\u030B\x07" +
		"K\x02\x02\u030B\u030C\x05\xACW\x02\u030C\u030D\x07 \x02\x02\u030D\u030F" +
		"\x03\x02\x02\x02\u030E\u030A\x03\x02\x02\x02\u030E\u030F\x03\x02\x02\x02" +
		"\u030FW\x03\x02\x02\x02\u0310\u0314\x05Z.\x02\u0311\u0313\x05r:\x02\u0312" +
		"\u0311\x03\x02\x02\x02\u0313\u0316\x03\x02\x02\x02\u0314\u0312\x03\x02" +
		"\x02\x02\u0314\u0315\x03\x02\x02\x02\u0315Y\x03\x02\x02\x02\u0316\u0314" +
		"\x03\x02\x02\x02\u0317\u0318\x05N(\x02\u0318\u031C\x07!\x02\x02\u0319" +
		"\u031B\x07\x04\x02\x02\u031A\u0319\x03\x02\x02\x02\u031B\u031E\x03\x02" +
		"\x02\x02\u031C\u031A\x03\x02\x02\x02\u031C\u031D\x03\x02\x02\x02\u031D" +
		"\u031F\x03\x02\x02\x02\u031E\u031C\x03\x02\x02\x02\u031F\u0320\x05v<\x02" +
		"\u0320\u0321\x07 \x02\x02\u0321[\x03\x02\x02\x02\u0322\u0326\x05^0\x02" +
		"\u0323\u0325\x05r:\x02\u0324\u0323\x03\x02\x02\x02\u0325\u0328\x03\x02" +
		"\x02\x02\u0326\u0324\x03\x02\x02\x02\u0326\u0327\x03\x02\x02\x02\u0327" +
		"]\x03\x02\x02\x02\u0328\u0326\x03\x02\x02\x02\u0329\u032A\x05L\'\x02\u032A" +
		"\u032B\x07!\x02\x02\u032B\u032C\x05v<\x02\u032C\u0331\x07 \x02\x02\u032D" +
		"\u032E\x07K\x02\x02\u032E\u032F\x05\xACW\x02\u032F\u0330\x07 \x02\x02" +
		"\u0330\u0332\x03\x02\x02\x02\u0331\u032D\x03\x02\x02\x02\u0331\u0332\x03" +
		"\x02\x02\x02\u0332_\x03\x02\x02\x02\u0333\u0337\x05b2\x02\u0334\u0336" +
		"\x05f4\x02\u0335\u0334\x03\x02\x02\x02\u0336\u0339\x03\x02\x02\x02\u0337" +
		"\u0335\x03\x02\x02\x02\u0337\u0338\x03\x02\x02\x02\u0338\u033C\x03\x02" +
		"\x02\x02\u0339\u0337\x03\x02\x02\x02\u033A\u033B\x077\x02\x02\u033B\u033D" +
		"\x07M\x02\x02\u033C\u033A\x03\x02\x02\x02\u033C\u033D\x03\x02\x02\x02" +
		"\u033Da\x03\x02\x02\x02\u033E\u033F\x05d3\x02\u033F\u0343\x07!\x02\x02" +
		"\u0340\u0342\x07\x04\x02\x02\u0341\u0340\x03\x02\x02\x02\u0342\u0345\x03" +
		"\x02\x02\x02\u0343\u0341\x03\x02\x02\x02\u0343\u0344\x03\x02\x02\x02\u0344" +
		"\u0346\x03\x02\x02\x02\u0345\u0343\x03\x02\x02\x02\u0346\u0347\x05v<\x02" +
		"\u0347\u0348\x07 \x02\x02\u0348c\x03\x02\x02\x02\u0349\u034C\x07c\x02" +
		"\x02\u034A\u034D\x07\r\x02\x02\u034B\u034D\x07\x9B\x02\x02\u034C\u034A" +
		"\x03\x02\x02\x02\u034C\u034B\x03\x02\x02\x02\u034C\u034D\x03\x02\x02\x02" +
		"\u034D\u0358\x03\x02\x02\x02\u034E\u0350\x07w\x02\x02\u034F\u0351\x07" +
		"\r\x02\x02\u0350\u034F\x03\x02\x02\x02\u0350\u0351\x03\x02\x02\x02\u0351" +
		"\u0358\x03\x02\x02\x02\u0352\u0354\x07d\x02\x02\u0353\u0355\x07\r\x02" +
		"\x02\u0354\u0353\x03\x02\x02\x02\u0354\u0355\x03\x02\x02\x02\u0355\u0358" +
		"\x03\x02\x02\x02\u0356\u0358\x07e\x02\x02\u0357\u0349\x03\x02\x02\x02" +
		"\u0357\u034E\x03\x02\x02\x02\u0357\u0352\x03\x02\x02\x02\u0357\u0356\x03" +
		"\x02\x02\x02\u0358e\x03\x02\x02\x02\u0359\u035A\x07J\x02\x02\u035A\u035B" +
		"\x07!\x02\x02\u035B\u035C\x05v<\x02\u035C\u035D\x07 \x02\x02\u035D\u036B" +
		"\x03\x02\x02\x02\u035E\u035F\t\x10\x02\x02\u035F\u0360\x07!\x02\x02\u0360" +
		"\u0361\x075\x02\x02\u0361\u036B\x07 \x02\x02\u0362\u0366\t\x11\x02\x02" +
		"\u0363\u0365\v\x02\x02\x02\u0364\u0363\x03\x02\x02\x02\u0365\u0368\x03" +
		"\x02\x02\x02\u0366\u0367\x03\x02\x02\x02\u0366\u0364\x03\x02\x02\x02\u0367" +
		"\u0369\x03\x02\x02\x02\u0368\u0366\x03\x02\x02\x02\u0369\u036B\x07 \x02" +
		"\x02\u036A\u0359\x03\x02\x02\x02\u036A\u035E\x03\x02\x02\x02\u036A\u0362" +
		"\x03\x02\x02\x02\u036Bg\x03\x02\x02\x02\u036C\u036D\x07J\x02\x02\u036D" +
		"\u036E\x07!\x02\x02\u036E\u036F\x05v<\x02\u036F\u0370\x07 \x02\x02\u0370" +
		"\u037E\x03\x02\x02\x02\u0371\u0372\t\x10\x02\x02\u0372\u0373\x07!\x02" +
		"\x02\u0373\u0374\x075\x02\x02\u0374\u037E\x07 \x02\x02\u0375\u0379\t\x11" +
		"\x02\x02\u0376\u0378\v\x02\x02\x02\u0377\u0376\x03\x02\x02\x02\u0378\u037B" +
		"\x03\x02\x02\x02\u0379\u037A\x03\x02\x02\x02\u0379\u0377\x03\x02\x02\x02" +
		"\u037A\u037C\x03\x02\x02\x02\u037B\u0379\x03\x02\x02\x02\u037C\u037E\x07" +
		" \x02\x02\u037D\u036C\x03\x02\x02\x02\u037D\u0371\x03\x02\x02\x02\u037D" +
		"\u0375\x03\x02\x02\x02\u037Ei\x03\x02\x02\x02\u037F\u0383\x05l7\x02\u0380" +
		"\u0382\x05r:\x02\u0381\u0380\x03\x02\x02\x02\u0382\u0385\x03\x02\x02\x02" +
		"\u0383\u0381\x03\x02\x02\x02\u0383\u0384\x03\x02\x02\x02\u0384k\x03\x02" +
		"\x02\x02\u0385\u0383\x03\x02\x02\x02\u0386\u0387\x05p9\x02\u0387\u0388" +
		"\x07!\x02\x02\u0388\u0389\x05v<\x02\u0389\u038E\x07 \x02\x02\u038A\u038B" +
		"\x07K\x02\x02\u038B\u038C\x05\xACW\x02\u038C\u038D\x07 \x02\x02\u038D" +
		"\u038F\x03\x02\x02\x02\u038E\u038A\x03\x02\x02\x02\u038E\u038F\x03\x02" +
		"\x02\x02\u038Fm\x03\x02\x02\x02\u0390\u0393\x07W\x02\x02\u0391\u0392\x07" +
		"!\x02\x02\u0392\u0394\x07\x0E\x02\x02\u0393\u0391\x03\x02\x02\x02\u0393" +
		"\u0394\x03\x02\x02\x02\u0394\u039B\x03\x02\x02\x02\u0395\u0398\x07n\x02" +
		"\x02\u0396\u0397\x07!\x02\x02\u0397\u0399\x07\x0E\x02\x02\u0398\u0396" +
		"\x03\x02\x02\x02\u0398\u0399\x03\x02\x02\x02\u0399\u039B\x03\x02\x02\x02" +
		"\u039A\u0390\x03\x02\x02\x02\u039A\u0395\x03\x02\x02\x02\u039Bo\x03\x02" +
		"\x02\x02\u039C\u039F\x07b\x02\x02\u039D\u039E\x07!\x02\x02\u039E\u03A0" +
		"\x07\x0E\x02\x02\u039F\u039D\x03\x02\x02\x02\u039F\u03A0\x03\x02\x02\x02" +
		"\u03A0\u03AC\x03\x02\x02\x02\u03A1\u03A4\x07v\x02\x02\u03A2\u03A3\x07" +
		"!\x02\x02\u03A3\u03A5\x07\x0E\x02\x02\u03A4\u03A2\x03\x02\x02\x02\u03A4" +
		"\u03A5\x03\x02\x02\x02\u03A5\u03AC\x03\x02\x02\x02\u03A6\u03A9\x07\x85" +
		"\x02\x02\u03A7\u03A8\x07!\x02\x02\u03A8\u03AA\x07\x0E\x02\x02\u03A9\u03A7" +
		"\x03\x02\x02\x02\u03A9\u03AA\x03\x02\x02\x02\u03AA\u03AC\x03\x02\x02\x02" +
		"\u03AB\u039C\x03\x02\x02\x02\u03AB\u03A1\x03\x02\x02\x02\u03AB\u03A6\x03" +
		"\x02\x02\x02\u03ACq\x03\x02\x02\x02\u03AD\u03AE\x07\x19\x02\x02\u03AE" +
		"\u03B1\x05\xA4S\x02\u03AF\u03B1\x07J\x02\x02\u03B0\u03AD\x03\x02\x02\x02" +
		"\u03B0\u03AF\x03\x02\x02\x02\u03B1\u03B2\x03\x02\x02\x02\u03B2\u03B6\x07" +
		"!\x02\x02\u03B3\u03B5\x07\x04\x02\x02\u03B4\u03B3\x03\x02\x02\x02\u03B5" +
		"\u03B8\x03\x02\x02\x02\u03B6\u03B4\x03\x02\x02\x02\u03B6\u03B7\x03\x02" +
		"\x02\x02\u03B7\u03BB\x03\x02\x02\x02\u03B8\u03B6\x03\x02\x02\x02\u03B9" +
		"\u03BC\x05\xA4S\x02\u03BA\u03BC\x077\x02\x02\u03BB\u03B9\x03\x02\x02\x02" +
		"\u03BB\u03BA\x03\x02\x02\x02\u03BC\u03BD\x03\x02\x02\x02\u03BD\u03BB\x03" +
		"\x02\x02\x02\u03BD\u03BE\x03\x02\x02\x02\u03BE\u03BF\x03\x02\x02\x02\u03BF" +
		"\u03CD\x07 \x02\x02\u03C0\u03C1\t\x10\x02\x02\u03C1\u03C2\x07!\x02\x02" +
		"\u03C2\u03C3\x075\x02\x02\u03C3\u03CD\x07 \x02\x02\u03C4\u03C8\t\x11\x02" +
		"\x02\u03C5\u03C7\v\x02\x02\x02\u03C6\u03C5\x03\x02\x02\x02\u03C7\u03CA" +
		"\x03\x02\x02\x02\u03C8\u03C9\x03\x02\x02\x02\u03C8\u03C6\x03\x02\x02\x02" +
		"\u03C9\u03CB\x03\x02\x02\x02\u03CA\u03C8\x03\x02\x02\x02\u03CB\u03CD\x07" +
		" \x02\x02\u03CC\u03B0\x03\x02\x02\x02\u03CC\u03C0\x03\x02\x02\x02\u03CC" +
		"\u03C4\x03\x02\x02\x02\u03CDs\x03\x02\x02\x02\u03CE\u03CF\x07\x9A\x02" +
		"\x02\u03CF\u03D0\x07$\x02\x02\u03D0\u03D1\x075\x02\x02\u03D1u\x03\x02" +
		"\x02\x02\u03D2\u03D3\x07\x9D\x02\x02\u03D3w\x03\x02\x02\x02\u03D4\u03D5" +
		"\x07\x1E\x02\x02\u03D5\u03DD\x07 \x02\x02\u03D6\u03D8\x07\x04\x02\x02" +
		"\u03D7\u03D6\x03\x02\x02\x02\u03D8\u03DB\x03\x02\x02\x02\u03D9\u03D7\x03" +
		"\x02\x02\x02\u03D9\u03DA\x03\x02\x02\x02\u03DA\u03DC\x03\x02\x02\x02\u03DB" +
		"\u03D9\x03\x02\x02\x02\u03DC\u03DE\x05z>\x02\u03DD\u03D9\x03\x02\x02\x02" +
		"\u03DD\u03DE\x03\x02\x02\x02\u03DE\u03F3\x03\x02\x02\x02\u03DF\u03E0\x07" +
		"\x1E\x02\x02\u03E0\u03E5\x05\xA4S\x02\u03E1\u03E4\x07!\x02\x02\u03E2\u03E4" +
		"\x05\xACW\x02\u03E3\u03E1\x03\x02\x02\x02\u03E3\u03E2\x03\x02\x02\x02" +
		"\u03E4\u03E7\x03\x02\x02\x02\u03E5\u03E3\x03\x02\x02\x02\u03E5\u03E6\x03" +
		"\x02\x02\x02\u03E6\u03E8\x03\x02\x02\x02\u03E7\u03E5\x03\x02\x02\x02\u03E8" +
		"\u03F0\x07 \x02\x02\u03E9\u03EB\x07\x04\x02\x02\u03EA\u03E9\x03\x02\x02" +
		"\x02\u03EB\u03EE\x03\x02\x02\x02\u03EC\u03EA\x03\x02\x02\x02\u03EC\u03ED" +
		"\x03\x02\x02\x02\u03ED\u03EF\x03\x02\x02\x02\u03EE\u03EC\x03\x02\x02\x02" +
		"\u03EF\u03F1\x05z>\x02\u03F0\u03EC\x03\x02\x02\x02\u03F0\u03F1\x03\x02" +
		"\x02\x02\u03F1\u03F3\x03\x02\x02\x02\u03F2\u03D4\x03\x02\x02\x02\u03F2" +
		"\u03DF\x03\x02\x02\x02\u03F3y\x03\x02\x02\x02\u03F4\u03F5\x07\x1E\x02" +
		"\x02\u03F5\u03FA\x05\xA4S\x02\u03F6\u03F9\x07!\x02\x02\u03F7\u03F9\x05" +
		"\xACW\x02\u03F8\u03F6\x03\x02\x02\x02\u03F8\u03F7\x03\x02\x02\x02\u03F9" +
		"\u03FC\x03\x02";
	private static readonly _serializedATNSegment2: string =
		"\x02\x02\u03FA\u03F8\x03\x02\x02\x02\u03FA\u03FB\x03\x02\x02\x02\u03FB" +
		"\u03FD\x03\x02\x02\x02\u03FC\u03FA\x03\x02\x02\x02\u03FD\u03FE\x07 \x02" +
		"\x02\u03FE{\x03\x02\x02\x02\u03FF\u0401\x07\x13\x02\x02\u0400\u0402\x05" +
		"\xA4S\x02\u0401\u0400\x03\x02\x02\x02\u0401\u0402\x03\x02\x02\x02\u0402" +
		"\u0403\x03\x02\x02\x02\u0403\u040A\x07 \x02\x02\u0404\u0406\x07\x14\x02" +
		"\x02\u0405\u0407\x05\xA4S\x02\u0406\u0405\x03\x02\x02\x02\u0406\u0407" +
		"\x03\x02\x02\x02\u0407\u0408\x03\x02\x02\x02\u0408\u040A\x07 \x02\x02" +
		"\u0409\u03FF\x03\x02\x02\x02\u0409\u0404\x03\x02\x02\x02\u040A}\x03\x02" +
		"\x02\x02\u040B\u0413\x07D\x02\x02\u040C\u0413\x07B\x02\x02\u040D\u040F" +
		"\x07C\x02\x02\u040E\u0410\x078\x02\x02\u040F\u040E\x03\x02\x02\x02\u040F" +
		"\u0410\x03\x02\x02\x02\u0410\u0411\x03\x02\x02\x02\u0411\u0413\x07\x02" +
		"\x02\x03\u0412\u040B\x03\x02\x02\x02\u0412\u040C\x03\x02\x02\x02\u0412" +
		"\u040D\x03\x02\x02\x02\u0413\x7F\x03\x02\x02\x02\u0414\u0416\x07m\x02" +
		"\x02\u0415\u0417\x05\xA4S\x02\u0416\u0415\x03\x02\x02\x02\u0416\u0417" +
		"\x03\x02\x02\x02\u0417\u042D\x03\x02\x02\x02\u0418\u0422\x05\xA4S\x02" +
		"\u0419\u041D\x077\x02\x02\u041A\u041C\x07\x04\x02\x02\u041B\u041A\x03" +
		"\x02\x02\x02\u041C\u041F\x03\x02\x02\x02\u041D\u041B\x03\x02\x02\x02\u041D" +
		"\u041E\x03\x02\x02\x02\u041E\u0421\x03\x02\x02\x02\u041F\u041D\x03\x02" +
		"\x02\x02\u0420\u0419\x03\x02\x02\x02\u0421\u0424\x03\x02\x02\x02\u0422" +
		"\u0420\x03\x02\x02\x02\u0422\u0423\x03\x02\x02\x02\u0423\u0428\x03\x02" +
		"\x02\x02\u0424\u0422\x03\x02\x02\x02\u0425\u0427\x077\x02\x02\u0426\u0425" +
		"\x03\x02\x02\x02\u0427\u042A\x03\x02\x02\x02\u0428\u0426\x03\x02\x02\x02" +
		"\u0428\u0429\x03\x02\x02\x02\u0429\u042C\x03\x02\x02\x02\u042A\u0428\x03" +
		"\x02\x02\x02\u042B\u0418\x03\x02\x02\x02\u042C\u042F\x03\x02\x02\x02\u042D" +
		"\u042B\x03\x02\x02\x02\u042D\u042E\x03\x02\x02\x02\u042E\u0430\x03\x02" +
		"\x02\x02\u042F\u042D\x03\x02\x02\x02\u0430\u043C\x07 \x02\x02\u0431\u0437" +
		"\x07m\x02\x02\u0432\u0436\x05\xA4S\x02\u0433\u0436\x077\x02\x02\u0434" +
		"\u0436\x07\x04\x02\x02\u0435\u0432\x03\x02\x02\x02\u0435\u0433\x03\x02" +
		"\x02\x02\u0435\u0434\x03\x02\x02\x02\u0436\u0439\x03\x02\x02\x02\u0437" +
		"\u0435\x03\x02\x02\x02\u0437\u0438\x03\x02\x02\x02\u0438\u043A\x03\x02" +
		"\x02\x02\u0439\u0437\x03\x02\x02\x02\u043A\u043C\x07\x02\x02\x03\u043B" +
		"\u0414\x03\x02\x02\x02\u043B\u0431\x03\x02\x02\x02\u043C\x81\x03\x02\x02" +
		"\x02\u043D\u0442\x07<\x02\x02\u043E\u0443\x05\xA4S\x02\u043F\u0443\x07" +
		"!\x02\x02\u0440\u0443\x07\x9D\x02\x02\u0441\u0443\x077\x02\x02\u0442\u043E" +
		"\x03\x02\x02\x02\u0442\u043F\x03\x02\x02\x02\u0442\u0440\x03\x02\x02\x02" +
		"\u0442\u0441\x03\x02\x02\x02\u0443\u0444\x03\x02\x02\x02\u0444\u0442\x03" +
		"\x02\x02\x02\u0444\u0445\x03\x02\x02\x02\u0445\u0446\x03\x02\x02\x02\u0446" +
		"\u0454\x07 \x02\x02\u0447\u044F\x07<\x02\x02\u0448\u044E\x05\xA4S\x02" +
		"\u0449\u044E\x07!\x02\x02\u044A\u044E\x07\x9D\x02\x02\u044B\u044E\x07" +
		"7\x02\x02\u044C\u044E\x07\x04\x02\x02\u044D\u0448\x03\x02\x02\x02\u044D" +
		"\u0449\x03\x02\x02\x02\u044D\u044A\x03\x02\x02\x02\u044D\u044B\x03\x02" +
		"\x02\x02\u044D\u044C\x03\x02\x02\x02\u044E\u0451\x03\x02\x02\x02\u044F" +
		"\u044D\x03\x02\x02\x02\u044F\u0450\x03\x02\x02\x02\u0450\u0452\x03\x02" +
		"\x02\x02\u0451\u044F\x03\x02\x02\x02\u0452\u0454\x07\x02\x02\x03\u0453" +
		"\u043D\x03\x02\x02\x02\u0453\u0447\x03\x02\x02\x02\u0454\x83\x03\x02\x02" +
		"\x02\u0455\u0456\x07;\x02\x02\u0456\u0457\x05\xA4S\x02\u0457\u0458\x07" +
		" \x02\x02\u0458\x85\x03\x02\x02\x02\u0459\u045D\x07T\x02\x02\u045A\u045E" +
		"\x05\xA4S\x02\u045B\u045E\x07!\x02\x02\u045C\u045E\x077\x02\x02\u045D" +
		"\u045A\x03\x02\x02\x02\u045D\u045B\x03\x02\x02\x02\u045D\u045C\x03\x02" +
		"\x02\x02\u045E\u045F\x03\x02\x02\x02\u045F\u045D\x03\x02\x02\x02\u045F" +
		"\u0460\x03\x02\x02\x02\u0460\u0461\x03\x02\x02\x02\u0461\u0463\x07 \x02" +
		"\x02\u0462\u0464\x05\x88E\x02\u0463\u0462\x03\x02\x02\x02\u0463\u0464" +
		"\x03\x02\x02\x02\u0464\x87\x03\x02\x02\x02\u0465\u0469\x07T\x02\x02\u0466" +
		"\u046A\x05\xA4S\x02\u0467\u046A\x07!\x02\x02\u0468\u046A\x077\x02\x02" +
		"\u0469\u0466\x03\x02\x02\x02\u0469\u0467\x03\x02\x02\x02\u0469\u0468\x03" +
		"\x02\x02\x02\u046A\u046B\x03\x02\x02\x02\u046B\u0469\x03\x02\x02\x02\u046B" +
		"\u046C\x03\x02\x02\x02\u046C\u046D\x03\x02\x02\x02\u046D\u046E\x07 \x02" +
		"\x02\u046E\x89\x03\x02\x02\x02\u046F\u0473\x07\x17\x02\x02\u0470\u0472" +
		"\x077\x02\x02\u0471\u0470\x03\x02\x02\x02\u0472\u0475\x03\x02\x02\x02" +
		"\u0473\u0471\x03\x02\x02\x02\u0473\u0474\x03\x02\x02\x02\u0474\u0477\x03" +
		"\x02\x02\x02\u0475\u0473\x03\x02\x02\x02\u0476\u0478\x05\xA4S\x02\u0477" +
		"\u0476\x03\x02\x02\x02\u0477\u0478\x03\x02\x02\x02\u0478\u048E\x03\x02" +
		"\x02\x02\u0479\u0483\x05\xA4S\x02\u047A\u047E\x077\x02\x02\u047B\u047D" +
		"\x07\x04\x02\x02\u047C\u047B\x03\x02\x02\x02\u047D\u0480\x03\x02\x02\x02" +
		"\u047E\u047C\x03\x02\x02\x02\u047E\u047F\x03\x02\x02\x02\u047F\u0482\x03" +
		"\x02\x02\x02\u0480\u047E\x03\x02\x02\x02\u0481\u047A\x03\x02\x02\x02\u0482" +
		"\u0485\x03\x02\x02\x02\u0483\u0481\x03\x02\x02\x02\u0483\u0484\x03\x02" +
		"\x02\x02\u0484\u0489\x03\x02\x02\x02\u0485\u0483\x03\x02\x02\x02\u0486" +
		"\u0488\x077\x02\x02\u0487\u0486\x03\x02\x02\x02\u0488\u048B\x03\x02\x02" +
		"\x02\u0489\u0487\x03\x02\x02\x02\u0489\u048A\x03\x02\x02\x02\u048A\u048D" +
		"\x03\x02\x02\x02\u048B\u0489\x03\x02\x02\x02\u048C\u0479\x03\x02\x02\x02" +
		"\u048D\u0490\x03\x02\x02\x02\u048E\u048C\x03\x02\x02\x02\u048E\u048F\x03" +
		"\x02\x02\x02\u048F\u0491\x03\x02\x02\x02\u0490\u048E\x03\x02\x02\x02\u0491" +
		"\u049E\x07 \x02\x02\u0492\u0496\x07\x17\x02\x02\u0493\u0495\x077\x02\x02" +
		"\u0494\u0493\x03\x02\x02\x02\u0495\u0498\x03\x02\x02\x02\u0496\u0494\x03" +
		"\x02\x02\x02\u0496\u0497\x03\x02\x02\x02\u0497\u049A\x03\x02\x02\x02\u0498" +
		"\u0496\x03\x02\x02\x02\u0499\u049B\x05\xA4S\x02\u049A\u0499\x03\x02\x02" +
		"\x02\u049A\u049B\x03\x02\x02\x02\u049B\u049C\x03\x02\x02\x02\u049C\u049E" +
		"\x07\x02\x02\x03\u049D\u046F\x03\x02\x02\x02\u049D\u0492\x03\x02\x02\x02" +
		"\u049E\x8B\x03\x02\x02\x02\u049F\u04A1\x07\x18\x02\x02\u04A0\u04A2\n\x12" +
		"\x02\x02\u04A1\u04A0\x03\x02\x02\x02\u04A2\u04A3\x03\x02\x02\x02\u04A3" +
		"\u04A1\x03\x02\x02\x02\u04A3\u04A4\x03\x02\x02\x02\u04A4\u04A5\x03\x02" +
		"\x02\x02\u04A5\u04A6\x07 \x02\x02\u04A6\x8D\x03\x02\x02\x02\u04A7\u04AA" +
		"\x07\x1F\x02\x02\u04A8\u04AB\x05\xA4S\x02\u04A9\u04AB\x077\x02\x02\u04AA" +
		"\u04A8\x03\x02\x02\x02\u04AA\u04A9\x03\x02\x02\x02\u04AB\u04AC\x03\x02" +
		"\x02\x02\u04AC\u04AA\x03\x02\x02\x02\u04AC\u04AD\x03\x02\x02\x02\u04AD" +
		"\u04AE\x03\x02\x02\x02\u04AE\u04B4\x07 \x02\x02\u04AF\u04B0\x07\x1F\x02" +
		"\x02\u04B0\u04B1\x05\xA4S\x02\u04B1\u04B2\x07\x02\x02\x03\u04B2\u04B4" +
		"\x03\x02\x02\x02\u04B3\u04A7\x03\x02\x02\x02\u04B3\u04AF\x03\x02\x02\x02" +
		"\u04B4\x8F\x03\x02\x02\x02\u04B5\u04B6\x07G\x02\x02\u04B6\u04B7\x05\xA4" +
		"S\x02\u04B7\u04B8\x07 \x02\x02\u04B8\u04BE\x03\x02\x02\x02\u04B9\u04BA" +
		"\x07H\x02\x02\u04BA\u04BB\x05\xA4S\x02\u04BB\u04BC\x07 \x02\x02\u04BC" +
		"\u04BE\x03\x02\x02\x02\u04BD\u04B5\x03\x02\x02\x02\u04BD\u04B9\x03\x02" +
		"\x02\x02\u04BE\x91\x03\x02\x02\x02\u04BF\u04C0\x07?\x02\x02\u04C0\u04C1" +
		"\x07!\x02\x02\u04C1\u04C2\x075\x02\x02\u04C2\u04C9\x07 \x02\x02\u04C3" +
		"\u04C4\x07?\x02\x02\u04C4\u04C5\x07!\x02\x02\u04C5\u04C6\x05\xA4S\x02" +
		"\u04C6\u04C7\x07 \x02\x02\u04C7\u04C9\x03\x02\x02\x02\u04C8\u04BF\x03" +
		"\x02\x02\x02\u04C8\u04C3\x03\x02\x02\x02\u04C9\x93\x03\x02\x02\x02\u04CA" +
		"\u04CB\x07R\x02\x02\u04CB\u04CC\x05\xA4S\x02\u04CC\u04CD\x07 \x02\x02" +
		"\u04CD\x95\x03\x02\x02\x02\u04CE\u04CF\x07S\x02\x02\u04CF\u04D0\x05\xA4" +
		"S\x02\u04D0\u04D1\x07 \x02\x02\u04D1\x97\x03\x02\x02\x02\u04D2\u04DC\x05" +
		"\x9AN\x02\u04D3\u04D5\x077\x02\x02\u04D4\u04D3\x03\x02\x02\x02\u04D5\u04D8" +
		"\x03\x02\x02\x02\u04D6\u04D4\x03\x02\x02\x02\u04D6\u04D7\x03\x02\x02\x02" +
		"\u04D7\u04D9\x03\x02\x02\x02\u04D8\u04D6\x03\x02\x02\x02\u04D9\u04DB\x05" +
		"\x9AN\x02\u04DA\u04D6\x03\x02\x02\x02\u04DB\u04DE\x03\x02\x02\x02\u04DC" +
		"\u04DA\x03\x02\x02\x02\u04DC\u04DD\x03\x02\x02\x02\u04DD\x99\x03\x02\x02" +
		"\x02\u04DE\u04DC\x03\x02\x02\x02\u04DF\u04E0\x07\x19\x02\x02\u04E0\u04E1" +
		"\x05\xA4S\x02\u04E1\u04E2\t\x13\x02\x02\u04E2\u04E8\x05\xA4S\x02\u04E3" +
		"\u04E7\x077\x02\x02\u04E4\u04E7\x07!\x02\x02\u04E5\u04E7\x05\xA4S\x02" +
		"\u04E6\u04E3\x03\x02\x02\x02\u04E6\u04E4\x03\x02\x02\x02\u04E6\u04E5\x03" +
		"\x02\x02\x02\u04E7\u04EA\x03\x02\x02\x02\u04E8\u04E6\x03\x02\x02\x02\u04E8" +
		"\u04E9\x03\x02\x02\x02\u04E9\u04EB\x03\x02\x02\x02\u04EA\u04E8\x03\x02" +
		"\x02\x02\u04EB\u04EC\x07 \x02\x02\u04EC\u04F6\x03\x02\x02\x02\u04ED\u04F1" +
		"\x07P\x02\x02\u04EE\u04F0\v\x02\x02\x02\u04EF\u04EE\x03\x02\x02\x02\u04F0" +
		"\u04F3\x03\x02\x02\x02\u04F1\u04F2\x03\x02\x02\x02\u04F1\u04EF\x03\x02" +
		"\x02\x02\u04F2\u04F4\x03\x02\x02\x02\u04F3\u04F1\x03\x02\x02\x02\u04F4" +
		"\u04F6\x07 \x02\x02\u04F5\u04DF\x03\x02\x02\x02\u04F5\u04ED\x03\x02\x02" +
		"\x02\u04F6\x9B\x03\x02\x02\x02\u04F7\u04FB\x07\x10\x02\x02\u04F8\u04FC" +
		"\x05\xA4S\x02\u04F9\u04FC\x07!\x02\x02\u04FA\u04FC\x077\x02\x02\u04FB" +
		"\u04F8\x03\x02\x02\x02\u04FB\u04F9\x03\x02\x02\x02\u04FB\u04FA\x03\x02" +
		"\x02\x02\u04FC\u04FD\x03\x02\x02\x02\u04FD\u04FB\x03\x02\x02\x02\u04FD" +
		"\u04FE\x03\x02\x02\x02\u04FE\u04FF\x03\x02\x02\x02\u04FF\u050B\x07 \x02" +
		"\x02\u0500\u0506\x07\x10\x02\x02\u0501\u0505\x05\xA4S\x02\u0502\u0505" +
		"\x07!\x02\x02\u0503\u0505\x077\x02\x02\u0504\u0501\x03\x02\x02\x02\u0504" +
		"\u0502\x03\x02\x02\x02\u0504\u0503\x03\x02\x02\x02\u0505\u0508\x03\x02" +
		"\x02\x02\u0506\u0504\x03\x02\x02\x02\u0506\u0507\x03\x02\x02\x02\u0507" +
		"\u0509\x03\x02\x02\x02\u0508\u0506\x03\x02\x02\x02\u0509\u050B\x07\x02" +
		"\x02\x03\u050A\u04F7\x03\x02\x02\x02\u050A\u0500\x03\x02\x02\x02\u050B" +
		"\x9D\x03\x02\x02\x02\u050C\u050E\x07\x15\x02\x02\u050D\u050F\x05\xA4S" +
		"\x02\u050E\u050D\x03\x02\x02\x02\u050E\u050F\x03\x02\x02\x02\u050F\u0510" +
		"\x03\x02\x02\x02\u0510\u0511\x07 \x02\x02\u0511\x9F\x03\x02\x02\x02\u0512" +
		"\u0513\x07#\x02\x02\u0513\xA1\x03\x02\x02\x02\u0514\u0516\x05\xA4S\x02" +
		"\u0515\u0517\x077\x02\x02\u0516\u0515\x03\x02\x02\x02\u0516\u0517\x03" +
		"\x02\x02\x02\u0517\u0519\x03\x02\x02\x02\u0518\u0514\x03\x02\x02\x02\u0519" +
		"\u051A\x03\x02\x02\x02\u051A\u0518\x03\x02\x02\x02\u051A\u051B\x03\x02" +
		"\x02\x02\u051B\xA3\x03\x02\x02\x02\u051C\u0523\x076\x02\x02\u051D\u051F" +
		"\x07\x04\x02\x02\u051E\u051D\x03\x02\x02\x02\u051F\u0520\x03\x02\x02\x02" +
		"\u0520\u051E\x03\x02\x02\x02\u0520\u0521\x03\x02\x02\x02\u0521\u0522\x03" +
		"\x02\x02\x02\u0522\u0524\x075\x02\x02\u0523\u051E\x03\x02\x02\x02\u0523" +
		"\u0524\x03\x02\x02\x02\u0524\u0549\x03\x02\x02\x02\u0525\u052C\x05\xAC" +
		"W\x02\u0526\u0528\x07\x04\x02\x02\u0527\u0526\x03\x02\x02\x02\u0528\u0529" +
		"\x03\x02\x02\x02\u0529\u0527\x03\x02\x02\x02\u0529\u052A\x03\x02\x02\x02" +
		"\u052A\u052B\x03\x02\x02\x02\u052B\u052D\x075\x02\x02\u052C\u0527\x03" +
		"\x02\x02\x02\u052C\u052D\x03\x02\x02\x02\u052D\u0549\x03\x02\x02\x02\u052E" +
		"\u052F\x07\x1C\x02\x02\u052F\u0530\x05\xA4S\x02\u0530\u0531\x07 \x02\x02" +
		"\u0531\u0549\x03\x02\x02\x02\u0532\u0549\x075\x02\x02\u0533\u0535\x07" +
		"\x04\x02\x02\u0534\u0533\x03\x02\x02\x02\u0535\u0538\x03\x02\x02\x02\u0536" +
		"\u0534\x03\x02\x02\x02\u0536\u0537\x03\x02\x02\x02\u0537\u0539\x03\x02" +
		"\x02\x02\u0538\u0536\x03\x02\x02\x02\u0539\u053D\x07!\x02\x02\u053A\u053C" +
		"\x07\x04\x02\x02\u053B\u053A\x03\x02\x02\x02\u053C\u053F\x03\x02\x02\x02" +
		"\u053D\u053B\x03\x02\x02\x02\u053D\u053E\x03\x02\x02\x02\u053E\u0549\x03" +
		"\x02\x02\x02\u053F\u053D\x03\x02\x02\x02\u0540\u0544\x07\"\x02\x02\u0541" +
		"\u0543\x07\x04\x02\x02\u0542\u0541\x03\x02\x02\x02\u0543\u0546\x03\x02" +
		"\x02\x02\u0544\u0542\x03\x02\x02\x02\u0544\u0545\x03\x02\x02\x02\u0545" +
		"\u0549\x03\x02\x02\x02\u0546\u0544\x03\x02\x02\x02\u0547\u0549\x07\x9D" +
		"\x02\x02\u0548\u051C\x03\x02\x02\x02\u0548\u0525\x03\x02\x02\x02\u0548" +
		"\u052E\x03\x02\x02\x02\u0548\u0532\x03\x02\x02\x02\u0548\u0536\x03\x02" +
		"\x02\x02\u0548\u0540\x03\x02\x02\x02\u0548\u0547\x03\x02\x02\x02\u0549" +
		"\xA5\x03\x02\x02\x02\u054A\u054B\x07\x12\x02\x02\u054B\u054C\x05\xA4S" +
		"\x02\u054C\u054D\x07 \x02\x02\u054D\xA7\x03\x02\x02\x02\u054E\u054F\x07" +
		" \x02\x02\u054F\xA9\x03\x02\x02\x02\u0550\u0551\t\x14\x02\x02\u0551\xAB" +
		"\x03\x02\x02\x02\u0552\u055C\x078\x02\x02\u0553\u055C\x079\x02\x02\u0554" +
		"\u055C\x07\"\x02\x02\u0555\u0556\x07&\x02\x02\u0556\u055C\n\x15\x02\x02" +
		"\u0557\u0558\x07\'\x02\x02\u0558\u055C\n\x16\x02\x02\u0559\u055C\x07*" +
		"\x02\x02\u055A\u055C\x07)\x02\x02\u055B\u0552\x03\x02\x02\x02\u055B\u0553" +
		"\x03\x02\x02\x02\u055B\u0554\x03\x02\x02\x02\u055B\u0555\x03\x02\x02\x02" +
		"\u055B\u0557\x03\x02\x02\x02\u055B\u0559\x03\x02\x02\x02\u055B\u055A\x03" +
		"\x02\x02\x02\u055C\u055D\x03\x02\x02\x02\u055D\u055B\x03\x02\x02\x02\u055D" +
		"\u055E\x03\x02\x02\x02\u055E\xAD\x03\x02\x02\x02\u055F\u0560\x07\x04\x02" +
		"\x02\u0560\xAF\x03\x02\x02\x02\xBF\xB4\xBA\xBF\xC4\xCC\xD3\xDF\xE6\xEC" +
		"\xEF\xF7\u0105\u010C\u0113\u0119\u011C\u0124\u012C\u0137\u013C\u0143\u014A" +
		"\u0150\u0153\u015B\u0168\u016C\u0172\u0179\u017F\u0182\u018A\u0197\u019C" +
		"\u01A3\u01A9\u01AC\u01B4\u01BB\u01C0\u01C7\u01CD\u01D1\u01D6\u01DC\u01E3" +
		"\u01E9\u01EC\u01F4\u01FB\u0200\u0207\u020D\u0211\u0219\u021F\u0222\u0229" +
		"\u022D\u0232\u0239\u0241\u0249\u0264\u026E\u0270\u0277\u027C\u0285\u028E" +
		"\u0294\u0296\u02A4\u02AB\u02B0\u02B4\u02B8\u02BB\u02C0\u02D7\u02DC\u02E1" +
		"\u02E3\u02ED\u02F7\u0301\u0307\u030E\u0314\u031C\u0326\u0331\u0337\u033C" +
		"\u0343\u034C\u0350\u0354\u0357\u0366\u036A\u0379\u037D\u0383\u038E\u0393" +
		"\u0398\u039A\u039F\u03A4\u03A9\u03AB\u03B0\u03B6\u03BB\u03BD\u03C8\u03CC" +
		"\u03D9\u03DD\u03E3\u03E5\u03EC\u03F0\u03F2\u03F8\u03FA\u0401\u0406\u0409" +
		"\u040F\u0412\u0416\u041D\u0422\u0428\u042D\u0435\u0437\u043B\u0442\u0444" +
		"\u044D\u044F\u0453\u045D\u045F\u0463\u0469\u046B\u0473\u0477\u047E\u0483" +
		"\u0489\u048E\u0496\u049A\u049D\u04A3\u04AA\u04AC\u04B3\u04BD\u04C8\u04D6" +
		"\u04DC\u04E6\u04E8\u04F1\u04F5\u04FB\u04FD\u0504\u0506\u050A\u050E\u0516" +
		"\u051A\u0520\u0523\u0529\u052C\u0536\u053D\u0544\u0548\u055B\u055D";
	public static readonly _serializedATN: string = Utils.join(
		[
			flashcardParser._serializedATNSegment0,
			flashcardParser._serializedATNSegment1,
			flashcardParser._serializedATNSegment2,
		],
		"",
	);
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!flashcardParser.__ATN) {
			flashcardParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(flashcardParser._serializedATN));
		}

		return flashcardParser.__ATN;
	}

}

export class BitmarkContext extends ParserRuleContext {
	public EOF(): TerminalNode { return this.getToken(flashcardParser.EOF, 0); }
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
			return this.getTokens(flashcardParser.NL);
		} else {
			return this.getToken(flashcardParser.NL, i);
		}
	}
	public S(): TerminalNode[];
	public S(i: number): TerminalNode;
	public S(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(flashcardParser.S);
		} else {
			return this.getToken(flashcardParser.S, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return flashcardParser.RULE_bitmark; }
	// @Override
	public enterRule(listener: flashcardParserListener): void {
		if (listener.enterBitmark) {
			listener.enterBitmark(this);
		}
	}
	// @Override
	public exitRule(listener: flashcardParserListener): void {
		if (listener.exitBitmark) {
			listener.exitBitmark(this);
		}
	}
}


export class Bitmark_Context extends ParserRuleContext {
	public flashcards(): FlashcardsContext | undefined {
		return this.tryGetRuleContext(0, FlashcardsContext);
	}
	public vocab(): VocabContext | undefined {
		return this.tryGetRuleContext(0, VocabContext);
	}
	public vocab_1(): Vocab_1Context | undefined {
		return this.tryGetRuleContext(0, Vocab_1Context);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return flashcardParser.RULE_bitmark_; }
	// @Override
	public enterRule(listener: flashcardParserListener): void {
		if (listener.enterBitmark_) {
			listener.enterBitmark_(this);
		}
	}
	// @Override
	public exitRule(listener: flashcardParserListener): void {
		if (listener.exitBitmark_) {
			listener.exitBitmark_(this);
		}
	}
}


export class FlashcardsContext extends ParserRuleContext {
	public flashcard(): FlashcardContext | undefined {
		return this.tryGetRuleContext(0, FlashcardContext);
	}
	public flashcard_1(): Flashcard_1Context | undefined {
		return this.tryGetRuleContext(0, Flashcard_1Context);
	}
	public flashcard_set(): Flashcard_setContext | undefined {
		return this.tryGetRuleContext(0, Flashcard_setContext);
	}
	public flashcard_language_set(): Flashcard_language_setContext | undefined {
		return this.tryGetRuleContext(0, Flashcard_language_setContext);
	}
	public flashcard_language_1(): Flashcard_language_1Context | undefined {
		return this.tryGetRuleContext(0, Flashcard_language_1Context);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return flashcardParser.RULE_flashcards; }
	// @Override
	public enterRule(listener: flashcardParserListener): void {
		if (listener.enterFlashcards) {
			listener.enterFlashcards(this);
		}
	}
	// @Override
	public exitRule(listener: flashcardParserListener): void {
		if (listener.exitFlashcards) {
			listener.exitFlashcards(this);
		}
	}
}


export class Flashcard_1Context extends ParserRuleContext {
	public BitFlash1(): TerminalNode { return this.getToken(flashcardParser.BitFlash1, 0); }
	public format(): FormatContext {
		return this.getRuleContext(0, FormatContext);
	}
	public CL(): TerminalNode { return this.getToken(flashcardParser.CL, 0); }
	public NL(): TerminalNode[];
	public NL(i: number): TerminalNode;
	public NL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(flashcardParser.NL);
		} else {
			return this.getToken(flashcardParser.NL, i);
		}
	}
	public side(): SideContext[];
	public side(i: number): SideContext;
	public side(i?: number): SideContext | SideContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SideContext);
		} else {
			return this.getRuleContext(i, SideContext);
		}
	}
	public EQ(): TerminalNode | undefined { return this.tryGetToken(flashcardParser.EQ, 0); }
	public EQ2(): TerminalNode | undefined { return this.tryGetToken(flashcardParser.EQ2, 0); }
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
	public get ruleIndex(): number { return flashcardParser.RULE_flashcard_1; }
	// @Override
	public enterRule(listener: flashcardParserListener): void {
		if (listener.enterFlashcard_1) {
			listener.enterFlashcard_1(this);
		}
	}
	// @Override
	public exitRule(listener: flashcardParserListener): void {
		if (listener.exitFlashcard_1) {
			listener.exitFlashcard_1(this);
		}
	}
}


export class FlashcardContext extends ParserRuleContext {
	public BitFlash(): TerminalNode { return this.getToken(flashcardParser.BitFlash, 0); }
	public format(): FormatContext {
		return this.getRuleContext(0, FormatContext);
	}
	public CL(): TerminalNode { return this.getToken(flashcardParser.CL, 0); }
	public side(): SideContext[];
	public side(i: number): SideContext;
	public side(i?: number): SideContext | SideContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SideContext);
		} else {
			return this.getRuleContext(i, SideContext);
		}
	}
	public HSPL(): TerminalNode[];
	public HSPL(i: number): TerminalNode;
	public HSPL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(flashcardParser.HSPL);
		} else {
			return this.getToken(flashcardParser.HSPL, i);
		}
	}
	public HSPL2(): TerminalNode[];
	public HSPL2(i: number): TerminalNode;
	public HSPL2(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(flashcardParser.HSPL2);
		} else {
			return this.getToken(flashcardParser.HSPL2, i);
		}
	}
	public EQ(): TerminalNode[];
	public EQ(i: number): TerminalNode;
	public EQ(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(flashcardParser.EQ);
		} else {
			return this.getToken(flashcardParser.EQ, i);
		}
	}
	public EQ2(): TerminalNode[];
	public EQ2(i: number): TerminalNode;
	public EQ2(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(flashcardParser.EQ2);
		} else {
			return this.getToken(flashcardParser.EQ2, i);
		}
	}
	public NL(): TerminalNode[];
	public NL(i: number): TerminalNode;
	public NL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(flashcardParser.NL);
		} else {
			return this.getToken(flashcardParser.NL, i);
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
	public get ruleIndex(): number { return flashcardParser.RULE_flashcard; }
	// @Override
	public enterRule(listener: flashcardParserListener): void {
		if (listener.enterFlashcard) {
			listener.enterFlashcard(this);
		}
	}
	// @Override
	public exitRule(listener: flashcardParserListener): void {
		if (listener.exitFlashcard) {
			listener.exitFlashcard(this);
		}
	}
}


export class Flashcard_setContext extends ParserRuleContext {
	public BitFlashcardset(): TerminalNode { return this.getToken(flashcardParser.BitFlashcardset, 0); }
	public format(): FormatContext {
		return this.getRuleContext(0, FormatContext);
	}
	public CL(): TerminalNode { return this.getToken(flashcardParser.CL, 0); }
	public HSPL(): TerminalNode[];
	public HSPL(i: number): TerminalNode;
	public HSPL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(flashcardParser.HSPL);
		} else {
			return this.getToken(flashcardParser.HSPL, i);
		}
	}
	public HSPL2(): TerminalNode[];
	public HSPL2(i: number): TerminalNode;
	public HSPL2(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(flashcardParser.HSPL2);
		} else {
			return this.getToken(flashcardParser.HSPL2, i);
		}
	}
	public NL(): TerminalNode[];
	public NL(i: number): TerminalNode;
	public NL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(flashcardParser.NL);
		} else {
			return this.getToken(flashcardParser.NL, i);
		}
	}
	public side(): SideContext[];
	public side(i: number): SideContext;
	public side(i?: number): SideContext | SideContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SideContext);
		} else {
			return this.getRuleContext(i, SideContext);
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
	public EQ(): TerminalNode[];
	public EQ(i: number): TerminalNode;
	public EQ(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(flashcardParser.EQ);
		} else {
			return this.getToken(flashcardParser.EQ, i);
		}
	}
	public EQ2(): TerminalNode[];
	public EQ2(i: number): TerminalNode;
	public EQ2(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(flashcardParser.EQ2);
		} else {
			return this.getToken(flashcardParser.EQ2, i);
		}
	}
	public OR(): TerminalNode[];
	public OR(i: number): TerminalNode;
	public OR(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(flashcardParser.OR);
		} else {
			return this.getToken(flashcardParser.OR, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return flashcardParser.RULE_flashcard_set; }
	// @Override
	public enterRule(listener: flashcardParserListener): void {
		if (listener.enterFlashcard_set) {
			listener.enterFlashcard_set(this);
		}
	}
	// @Override
	public exitRule(listener: flashcardParserListener): void {
		if (listener.exitFlashcard_set) {
			listener.exitFlashcard_set(this);
		}
	}
}


export class Flashcard_language_setContext extends ParserRuleContext {
	public BitFlashcardlangset(): TerminalNode { return this.getToken(flashcardParser.BitFlashcardlangset, 0); }
	public format(): FormatContext {
		return this.getRuleContext(0, FormatContext);
	}
	public CL(): TerminalNode { return this.getToken(flashcardParser.CL, 0); }
	public sidex_NL(): Sidex_NLContext[];
	public sidex_NL(i: number): Sidex_NLContext;
	public sidex_NL(i?: number): Sidex_NLContext | Sidex_NLContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Sidex_NLContext);
		} else {
			return this.getRuleContext(i, Sidex_NLContext);
		}
	}
	public HSPL(): TerminalNode[];
	public HSPL(i: number): TerminalNode;
	public HSPL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(flashcardParser.HSPL);
		} else {
			return this.getToken(flashcardParser.HSPL, i);
		}
	}
	public HSPL2(): TerminalNode[];
	public HSPL2(i: number): TerminalNode;
	public HSPL2(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(flashcardParser.HSPL2);
		} else {
			return this.getToken(flashcardParser.HSPL2, i);
		}
	}
	public NL(): TerminalNode[];
	public NL(i: number): TerminalNode;
	public NL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(flashcardParser.NL);
		} else {
			return this.getToken(flashcardParser.NL, i);
		}
	}
	public sidex(): SidexContext[];
	public sidex(i: number): SidexContext;
	public sidex(i?: number): SidexContext | SidexContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SidexContext);
		} else {
			return this.getRuleContext(i, SidexContext);
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
	public EQ(): TerminalNode[];
	public EQ(i: number): TerminalNode;
	public EQ(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(flashcardParser.EQ);
		} else {
			return this.getToken(flashcardParser.EQ, i);
		}
	}
	public EQ2(): TerminalNode[];
	public EQ2(i: number): TerminalNode;
	public EQ2(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(flashcardParser.EQ2);
		} else {
			return this.getToken(flashcardParser.EQ2, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return flashcardParser.RULE_flashcard_language_set; }
	// @Override
	public enterRule(listener: flashcardParserListener): void {
		if (listener.enterFlashcard_language_set) {
			listener.enterFlashcard_language_set(this);
		}
	}
	// @Override
	public exitRule(listener: flashcardParserListener): void {
		if (listener.exitFlashcard_language_set) {
			listener.exitFlashcard_language_set(this);
		}
	}
}


export class Flashcard_language_1Context extends ParserRuleContext {
	public BitFlashcardlang1(): TerminalNode { return this.getToken(flashcardParser.BitFlashcardlang1, 0); }
	public format(): FormatContext {
		return this.getRuleContext(0, FormatContext);
	}
	public CL(): TerminalNode { return this.getToken(flashcardParser.CL, 0); }
	public sidex_NL(): Sidex_NLContext[];
	public sidex_NL(i: number): Sidex_NLContext;
	public sidex_NL(i?: number): Sidex_NLContext | Sidex_NLContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Sidex_NLContext);
		} else {
			return this.getRuleContext(i, Sidex_NLContext);
		}
	}
	public sidex(): SidexContext {
		return this.getRuleContext(0, SidexContext);
	}
	public EQ(): TerminalNode | undefined { return this.tryGetToken(flashcardParser.EQ, 0); }
	public EQ2(): TerminalNode | undefined { return this.tryGetToken(flashcardParser.EQ2, 0); }
	public NL(): TerminalNode[];
	public NL(i: number): TerminalNode;
	public NL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(flashcardParser.NL);
		} else {
			return this.getToken(flashcardParser.NL, i);
		}
	}
	public OR(): TerminalNode[];
	public OR(i: number): TerminalNode;
	public OR(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(flashcardParser.OR);
		} else {
			return this.getToken(flashcardParser.OR, i);
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
	public get ruleIndex(): number { return flashcardParser.RULE_flashcard_language_1; }
	// @Override
	public enterRule(listener: flashcardParserListener): void {
		if (listener.enterFlashcard_language_1) {
			listener.enterFlashcard_language_1(this);
		}
	}
	// @Override
	public exitRule(listener: flashcardParserListener): void {
		if (listener.exitFlashcard_language_1) {
			listener.exitFlashcard_language_1(this);
		}
	}
}


export class VocabContext extends ParserRuleContext {
	public BitVocabulary(): TerminalNode { return this.getToken(flashcardParser.BitVocabulary, 0); }
	public format(): FormatContext {
		return this.getRuleContext(0, FormatContext);
	}
	public CL(): TerminalNode { return this.getToken(flashcardParser.CL, 0); }
	public HSPL(): TerminalNode[];
	public HSPL(i: number): TerminalNode;
	public HSPL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(flashcardParser.HSPL);
		} else {
			return this.getToken(flashcardParser.HSPL, i);
		}
	}
	public HSPL2(): TerminalNode[];
	public HSPL2(i: number): TerminalNode;
	public HSPL2(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(flashcardParser.HSPL2);
		} else {
			return this.getToken(flashcardParser.HSPL2, i);
		}
	}
	public NL(): TerminalNode[];
	public NL(i: number): TerminalNode;
	public NL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(flashcardParser.NL);
		} else {
			return this.getToken(flashcardParser.NL, i);
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
	public resource(): ResourceContext[];
	public resource(i: number): ResourceContext;
	public resource(i?: number): ResourceContext | ResourceContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ResourceContext);
		} else {
			return this.getRuleContext(i, ResourceContext);
		}
	}
	public vside(): VsideContext[];
	public vside(i: number): VsideContext;
	public vside(i?: number): VsideContext | VsideContext[] {
		if (i === undefined) {
			return this.getRuleContexts(VsideContext);
		} else {
			return this.getRuleContext(i, VsideContext);
		}
	}
	public EQ(): TerminalNode[];
	public EQ(i: number): TerminalNode;
	public EQ(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(flashcardParser.EQ);
		} else {
			return this.getToken(flashcardParser.EQ, i);
		}
	}
	public EQ2(): TerminalNode[];
	public EQ2(i: number): TerminalNode;
	public EQ2(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(flashcardParser.EQ2);
		} else {
			return this.getToken(flashcardParser.EQ2, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return flashcardParser.RULE_vocab; }
	// @Override
	public enterRule(listener: flashcardParserListener): void {
		if (listener.enterVocab) {
			listener.enterVocab(this);
		}
	}
	// @Override
	public exitRule(listener: flashcardParserListener): void {
		if (listener.exitVocab) {
			listener.exitVocab(this);
		}
	}
}


export class Vocab_1Context extends ParserRuleContext {
	public BitVocabulary_1(): TerminalNode { return this.getToken(flashcardParser.BitVocabulary_1, 0); }
	public format(): FormatContext {
		return this.getRuleContext(0, FormatContext);
	}
	public CL(): TerminalNode { return this.getToken(flashcardParser.CL, 0); }
	public EQ(): TerminalNode | undefined { return this.tryGetToken(flashcardParser.EQ, 0); }
	public EQ2(): TerminalNode | undefined { return this.tryGetToken(flashcardParser.EQ2, 0); }
	public NL(): TerminalNode[];
	public NL(i: number): TerminalNode;
	public NL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(flashcardParser.NL);
		} else {
			return this.getToken(flashcardParser.NL, i);
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
	public vside(): VsideContext[];
	public vside(i: number): VsideContext;
	public vside(i?: number): VsideContext | VsideContext[] {
		if (i === undefined) {
			return this.getRuleContexts(VsideContext);
		} else {
			return this.getRuleContext(i, VsideContext);
		}
	}
	public OR(): TerminalNode[];
	public OR(i: number): TerminalNode;
	public OR(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(flashcardParser.OR);
		} else {
			return this.getToken(flashcardParser.OR, i);
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
	public get ruleIndex(): number { return flashcardParser.RULE_vocab_1; }
	// @Override
	public enterRule(listener: flashcardParserListener): void {
		if (listener.enterVocab_1) {
			listener.enterVocab_1(this);
		}
	}
	// @Override
	public exitRule(listener: flashcardParserListener): void {
		if (listener.exitVocab_1) {
			listener.exitVocab_1(this);
		}
	}
}


export class SxContext extends ParserRuleContext {
	public atdef(): AtdefContext | undefined {
		return this.tryGetRuleContext(0, AtdefContext);
	}
	public s_and_w(): S_and_wContext | undefined {
		return this.tryGetRuleContext(0, S_and_wContext);
	}
	public instruction(): InstructionContext | undefined {
		return this.tryGetRuleContext(0, InstructionContext);
	}
	public imagebit(): ImagebitContext | undefined {
		return this.tryGetRuleContext(0, ImagebitContext);
	}
	public audiobit(): AudiobitContext | undefined {
		return this.tryGetRuleContext(0, AudiobitContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return flashcardParser.RULE_sx; }
	// @Override
	public enterRule(listener: flashcardParserListener): void {
		if (listener.enterSx) {
			listener.enterSx(this);
		}
	}
	// @Override
	public exitRule(listener: flashcardParserListener): void {
		if (listener.exitSx) {
			listener.exitSx(this);
		}
	}
}


export class SidexContext extends ParserRuleContext {
	public sx(): SxContext[];
	public sx(i: number): SxContext;
	public sx(i?: number): SxContext | SxContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SxContext);
		} else {
			return this.getRuleContext(i, SxContext);
		}
	}
	public NL(): TerminalNode[];
	public NL(i: number): TerminalNode;
	public NL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(flashcardParser.NL);
		} else {
			return this.getToken(flashcardParser.NL, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return flashcardParser.RULE_sidex; }
	// @Override
	public enterRule(listener: flashcardParserListener): void {
		if (listener.enterSidex) {
			listener.enterSidex(this);
		}
	}
	// @Override
	public exitRule(listener: flashcardParserListener): void {
		if (listener.exitSidex) {
			listener.exitSidex(this);
		}
	}
}


export class Sidex_NLContext extends ParserRuleContext {
	public bitElem(): BitElemContext {
		return this.getRuleContext(0, BitElemContext);
	}
	public NL(): TerminalNode[];
	public NL(i: number): TerminalNode;
	public NL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(flashcardParser.NL);
		} else {
			return this.getToken(flashcardParser.NL, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return flashcardParser.RULE_sidex_NL; }
	// @Override
	public enterRule(listener: flashcardParserListener): void {
		if (listener.enterSidex_NL) {
			listener.enterSidex_NL(this);
		}
	}
	// @Override
	public exitRule(listener: flashcardParserListener): void {
		if (listener.exitSidex_NL) {
			listener.exitSidex_NL(this);
		}
	}
}


export class SideContext extends ParserRuleContext {
	public sidex(): SidexContext[];
	public sidex(i: number): SidexContext;
	public sidex(i?: number): SidexContext | SidexContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SidexContext);
		} else {
			return this.getRuleContext(i, SidexContext);
		}
	}
	public OR(): TerminalNode[];
	public OR(i: number): TerminalNode;
	public OR(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(flashcardParser.OR);
		} else {
			return this.getToken(flashcardParser.OR, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return flashcardParser.RULE_side; }
	// @Override
	public enterRule(listener: flashcardParserListener): void {
		if (listener.enterSide) {
			listener.enterSide(this);
		}
	}
	// @Override
	public exitRule(listener: flashcardParserListener): void {
		if (listener.exitSide) {
			listener.exitSide(this);
		}
	}
}


export class Side_NLContext extends ParserRuleContext {
	public sidex_NL(): Sidex_NLContext[];
	public sidex_NL(i: number): Sidex_NLContext;
	public sidex_NL(i?: number): Sidex_NLContext | Sidex_NLContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Sidex_NLContext);
		} else {
			return this.getRuleContext(i, Sidex_NLContext);
		}
	}
	public OR(): TerminalNode[];
	public OR(i: number): TerminalNode;
	public OR(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(flashcardParser.OR);
		} else {
			return this.getToken(flashcardParser.OR, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return flashcardParser.RULE_side_NL; }
	// @Override
	public enterRule(listener: flashcardParserListener): void {
		if (listener.enterSide_NL) {
			listener.enterSide_NL(this);
		}
	}
	// @Override
	public exitRule(listener: flashcardParserListener): void {
		if (listener.exitSide_NL) {
			listener.exitSide_NL(this);
		}
	}
}


export class VsideContext extends ParserRuleContext {
	public sidex_NL(): Sidex_NLContext {
		return this.getRuleContext(0, Sidex_NLContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return flashcardParser.RULE_vside; }
	// @Override
	public enterRule(listener: flashcardParserListener): void {
		if (listener.enterVside) {
			listener.enterVside(this);
		}
	}
	// @Override
	public exitRule(listener: flashcardParserListener): void {
		if (listener.exitVside) {
			listener.exitVside(this);
		}
	}
}


export class BitElemContext extends ParserRuleContext {
	public LIST_LINE(): TerminalNode | undefined { return this.tryGetToken(flashcardParser.LIST_LINE, 0); }
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
	public get ruleIndex(): number { return flashcardParser.RULE_bitElem; }
	// @Override
	public enterRule(listener: flashcardParserListener): void {
		if (listener.enterBitElem) {
			listener.enterBitElem(this);
		}
	}
	// @Override
	public exitRule(listener: flashcardParserListener): void {
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
	public get ruleIndex(): number { return flashcardParser.RULE_resource; }
	// @Override
	public enterRule(listener: flashcardParserListener): void {
		if (listener.enterResource) {
			listener.enterResource(this);
		}
	}
	// @Override
	public exitRule(listener: flashcardParserListener): void {
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
	public get ruleIndex(): number { return flashcardParser.RULE_gap; }
	// @Override
	public enterRule(listener: flashcardParserListener): void {
		if (listener.enterGap) {
			listener.enterGap(this);
		}
	}
	// @Override
	public exitRule(listener: flashcardParserListener): void {
		if (listener.exitGap) {
			listener.exitGap(this);
		}
	}
}


export class Single_gapContext extends ParserRuleContext {
	public OPU(): TerminalNode { return this.getToken(flashcardParser.OPU, 0); }
	public clnsp(): ClnspContext {
		return this.getRuleContext(0, ClnspContext);
	}
	public NUMERIC(): TerminalNode | undefined { return this.tryGetToken(flashcardParser.NUMERIC, 0); }
	public STRING(): TerminalNode | undefined { return this.tryGetToken(flashcardParser.STRING, 0); }
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
	public get ruleIndex(): number { return flashcardParser.RULE_single_gap; }
	// @Override
	public enterRule(listener: flashcardParserListener): void {
		if (listener.enterSingle_gap) {
			listener.enterSingle_gap(this);
		}
	}
	// @Override
	public exitRule(listener: flashcardParserListener): void {
		if (listener.exitSingle_gap) {
			listener.exitSingle_gap(this);
		}
	}
}


export class Bullet_itemContext extends ParserRuleContext {
	public OPBUL(): TerminalNode { return this.getToken(flashcardParser.OPBUL, 0); }
	public s_and_w(): S_and_wContext {
		return this.getRuleContext(0, S_and_wContext);
	}
	public CL(): TerminalNode { return this.getToken(flashcardParser.CL, 0); }
	public atpoint(): AtpointContext | undefined {
		return this.tryGetRuleContext(0, AtpointContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return flashcardParser.RULE_bullet_item; }
	// @Override
	public enterRule(listener: flashcardParserListener): void {
		if (listener.enterBullet_item) {
			listener.enterBullet_item(this);
		}
	}
	// @Override
	public exitRule(listener: flashcardParserListener): void {
		if (listener.exitBullet_item) {
			listener.exitBullet_item(this);
		}
	}
}


export class AtpointContext extends ParserRuleContext {
	public AtPoints(): TerminalNode { return this.getToken(flashcardParser.AtPoints, 0); }
	public NUMERIC(): TerminalNode { return this.getToken(flashcardParser.NUMERIC, 0); }
	public CL(): TerminalNode { return this.getToken(flashcardParser.CL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return flashcardParser.RULE_atpoint; }
	// @Override
	public enterRule(listener: flashcardParserListener): void {
		if (listener.enterAtpoint) {
			listener.enterAtpoint(this);
		}
	}
	// @Override
	public exitRule(listener: flashcardParserListener): void {
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
			return this.getTokens(flashcardParser.ColonText);
		} else {
			return this.getToken(flashcardParser.ColonText, i);
		}
	}
	public ColonJson(): TerminalNode[];
	public ColonJson(i: number): TerminalNode;
	public ColonJson(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(flashcardParser.ColonJson);
		} else {
			return this.getToken(flashcardParser.ColonJson, i);
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
	public get ruleIndex(): number { return flashcardParser.RULE_format; }
	// @Override
	public enterRule(listener: flashcardParserListener): void {
		if (listener.enterFormat) {
			listener.enterFormat(this);
		}
	}
	// @Override
	public exitRule(listener: flashcardParserListener): void {
		if (listener.exitFormat) {
			listener.exitFormat(this);
		}
	}
}


export class Resource_formatContext extends ParserRuleContext {
	public BitmarkMinus(): TerminalNode | undefined { return this.tryGetToken(flashcardParser.BitmarkMinus, 0); }
	public BitmarkPlus(): TerminalNode | undefined { return this.tryGetToken(flashcardParser.BitmarkPlus, 0); }
	public Prosemirror(): TerminalNode | undefined { return this.tryGetToken(flashcardParser.Prosemirror, 0); }
	public Placeholder(): TerminalNode | undefined { return this.tryGetToken(flashcardParser.Placeholder, 0); }
	public ColonJson(): TerminalNode | undefined { return this.tryGetToken(flashcardParser.ColonJson, 0); }
	public AmpArticle(): TerminalNode | undefined { return this.tryGetToken(flashcardParser.AmpArticle, 0); }
	public AmpDocument(): TerminalNode | undefined { return this.tryGetToken(flashcardParser.AmpDocument, 0); }
	public AmpWebsite(): TerminalNode | undefined { return this.tryGetToken(flashcardParser.AmpWebsite, 0); }
	public AmpStillImageFilm(): TerminalNode | undefined { return this.tryGetToken(flashcardParser.AmpStillImageFilm, 0); }
	public AmpAudioLink(): TerminalNode | undefined { return this.tryGetToken(flashcardParser.AmpAudioLink, 0); }
	public AmpImageLink(): TerminalNode | undefined { return this.tryGetToken(flashcardParser.AmpImageLink, 0); }
	public AmpVideoLink(): TerminalNode | undefined { return this.tryGetToken(flashcardParser.AmpVideoLink, 0); }
	public AmpArticleLink(): TerminalNode | undefined { return this.tryGetToken(flashcardParser.AmpArticleLink, 0); }
	public AmpDocumentLink(): TerminalNode | undefined { return this.tryGetToken(flashcardParser.AmpDocumentLink, 0); }
	public AmpAppLink(): TerminalNode | undefined { return this.tryGetToken(flashcardParser.AmpAppLink, 0); }
	public AmpWebsiteLink(): TerminalNode | undefined { return this.tryGetToken(flashcardParser.AmpWebsiteLink, 0); }
	public AmpStillImageFilmLink(): TerminalNode | undefined { return this.tryGetToken(flashcardParser.AmpStillImageFilmLink, 0); }
	public AmpVideoEmbed(): TerminalNode | undefined { return this.tryGetToken(flashcardParser.AmpVideoEmbed, 0); }
	public AmpAudioEmbed(): TerminalNode | undefined { return this.tryGetToken(flashcardParser.AmpAudioEmbed, 0); }
	public AmpDocumentEmbed(): TerminalNode | undefined { return this.tryGetToken(flashcardParser.AmpDocumentEmbed, 0); }
	public AmpStillImageFilmEmbed(): TerminalNode | undefined { return this.tryGetToken(flashcardParser.AmpStillImageFilmEmbed, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return flashcardParser.RULE_resource_format; }
	// @Override
	public enterRule(listener: flashcardParserListener): void {
		if (listener.enterResource_format) {
			listener.enterResource_format(this);
		}
	}
	// @Override
	public exitRule(listener: flashcardParserListener): void {
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
	public AmpPdf(): TerminalNode | undefined { return this.tryGetToken(flashcardParser.AmpPdf, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return flashcardParser.RULE_resource_format_extra; }
	// @Override
	public enterRule(listener: flashcardParserListener): void {
		if (listener.enterResource_format_extra) {
			listener.enterResource_format_extra(this);
		}
	}
	// @Override
	public exitRule(listener: flashcardParserListener): void {
		if (listener.exitResource_format_extra) {
			listener.exitResource_format_extra(this);
		}
	}
}


export class Format2Context extends ParserRuleContext {
	public BitmarkMinus(): TerminalNode | undefined { return this.tryGetToken(flashcardParser.BitmarkMinus, 0); }
	public BitmarkPlus(): TerminalNode | undefined { return this.tryGetToken(flashcardParser.BitmarkPlus, 0); }
	public ColonText(): TerminalNode | undefined { return this.tryGetToken(flashcardParser.ColonText, 0); }
	public ColonJson(): TerminalNode | undefined { return this.tryGetToken(flashcardParser.ColonJson, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return flashcardParser.RULE_format2; }
	// @Override
	public enterRule(listener: flashcardParserListener): void {
		if (listener.enterFormat2) {
			listener.enterFormat2(this);
		}
	}
	// @Override
	public exitRule(listener: flashcardParserListener): void {
		if (listener.exitFormat2) {
			listener.exitFormat2(this);
		}
	}
}


export class Image_formatContext extends ParserRuleContext {
	public AmpImage(): TerminalNode | undefined { return this.tryGetToken(flashcardParser.AmpImage, 0); }
	public Image_type(): TerminalNode | undefined { return this.tryGetToken(flashcardParser.Image_type, 0); }
	public DotArticleAtt(): TerminalNode | undefined { return this.tryGetToken(flashcardParser.DotArticleAtt, 0); }
	public AmpImageLink(): TerminalNode | undefined { return this.tryGetToken(flashcardParser.AmpImageLink, 0); }
	public AmpImageZoom(): TerminalNode | undefined { return this.tryGetToken(flashcardParser.AmpImageZoom, 0); }
	public AmpImageWAudio(): TerminalNode | undefined { return this.tryGetToken(flashcardParser.AmpImageWAudio, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return flashcardParser.RULE_image_format; }
	// @Override
	public enterRule(listener: flashcardParserListener): void {
		if (listener.enterImage_format) {
			listener.enterImage_format(this);
		}
	}
	// @Override
	public exitRule(listener: flashcardParserListener): void {
		if (listener.exitImage_format) {
			listener.exitImage_format(this);
		}
	}
}


export class Video_formatContext extends ParserRuleContext {
	public AmpVideo(): TerminalNode | undefined { return this.tryGetToken(flashcardParser.AmpVideo, 0); }
	public AmpVideoLink(): TerminalNode | undefined { return this.tryGetToken(flashcardParser.AmpVideoLink, 0); }
	public AmpVideoEmbed(): TerminalNode | undefined { return this.tryGetToken(flashcardParser.AmpVideoEmbed, 0); }
	public COLON(): TerminalNode | undefined { return this.tryGetToken(flashcardParser.COLON, 0); }
	public Video_type(): TerminalNode | undefined { return this.tryGetToken(flashcardParser.Video_type, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return flashcardParser.RULE_video_format; }
	// @Override
	public enterRule(listener: flashcardParserListener): void {
		if (listener.enterVideo_format) {
			listener.enterVideo_format(this);
		}
	}
	// @Override
	public exitRule(listener: flashcardParserListener): void {
		if (listener.exitVideo_format) {
			listener.exitVideo_format(this);
		}
	}
}


export class Article_formatContext extends ParserRuleContext {
	public AmpArticle(): TerminalNode | undefined { return this.tryGetToken(flashcardParser.AmpArticle, 0); }
	public AmpArticleLink(): TerminalNode | undefined { return this.tryGetToken(flashcardParser.AmpArticleLink, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return flashcardParser.RULE_article_format; }
	// @Override
	public enterRule(listener: flashcardParserListener): void {
		if (listener.enterArticle_format) {
			listener.enterArticle_format(this);
		}
	}
	// @Override
	public exitRule(listener: flashcardParserListener): void {
		if (listener.exitArticle_format) {
			listener.exitArticle_format(this);
		}
	}
}


export class Document_formatContext extends ParserRuleContext {
	public AmpDocument(): TerminalNode | undefined { return this.tryGetToken(flashcardParser.AmpDocument, 0); }
	public AmpDocumentLink(): TerminalNode | undefined { return this.tryGetToken(flashcardParser.AmpDocumentLink, 0); }
	public AmpDocumentEmbed(): TerminalNode | undefined { return this.tryGetToken(flashcardParser.AmpDocumentEmbed, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return flashcardParser.RULE_document_format; }
	// @Override
	public enterRule(listener: flashcardParserListener): void {
		if (listener.enterDocument_format) {
			listener.enterDocument_format(this);
		}
	}
	// @Override
	public exitRule(listener: flashcardParserListener): void {
		if (listener.exitDocument_format) {
			listener.exitDocument_format(this);
		}
	}
}


export class App_formatContext extends ParserRuleContext {
	public AmpApp(): TerminalNode | undefined { return this.tryGetToken(flashcardParser.AmpApp, 0); }
	public AmpAppLink(): TerminalNode | undefined { return this.tryGetToken(flashcardParser.AmpAppLink, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return flashcardParser.RULE_app_format; }
	// @Override
	public enterRule(listener: flashcardParserListener): void {
		if (listener.enterApp_format) {
			listener.enterApp_format(this);
		}
	}
	// @Override
	public exitRule(listener: flashcardParserListener): void {
		if (listener.exitApp_format) {
			listener.exitApp_format(this);
		}
	}
}


export class Website_formatContext extends ParserRuleContext {
	public AmpWebsite(): TerminalNode | undefined { return this.tryGetToken(flashcardParser.AmpWebsite, 0); }
	public AmpWebsiteLink(): TerminalNode | undefined { return this.tryGetToken(flashcardParser.AmpWebsiteLink, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return flashcardParser.RULE_website_format; }
	// @Override
	public enterRule(listener: flashcardParserListener): void {
		if (listener.enterWebsite_format) {
			listener.enterWebsite_format(this);
		}
	}
	// @Override
	public exitRule(listener: flashcardParserListener): void {
		if (listener.exitWebsite_format) {
			listener.exitWebsite_format(this);
		}
	}
}


export class Stillimagefilm_formatContext extends ParserRuleContext {
	public AmpStillImageFilm(): TerminalNode | undefined { return this.tryGetToken(flashcardParser.AmpStillImageFilm, 0); }
	public AmpStillImageFilmLink(): TerminalNode | undefined { return this.tryGetToken(flashcardParser.AmpStillImageFilmLink, 0); }
	public AmpStillImageFilmEmbed(): TerminalNode | undefined { return this.tryGetToken(flashcardParser.AmpStillImageFilmEmbed, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return flashcardParser.RULE_stillimagefilm_format; }
	// @Override
	public enterRule(listener: flashcardParserListener): void {
		if (listener.enterStillimagefilm_format) {
			listener.enterStillimagefilm_format(this);
		}
	}
	// @Override
	public exitRule(listener: flashcardParserListener): void {
		if (listener.exitStillimagefilm_format) {
			listener.exitStillimagefilm_format(this);
		}
	}
}


export class Op_article_formatContext extends ParserRuleContext {
	public OpAmpArticleLink(): TerminalNode | undefined { return this.tryGetToken(flashcardParser.OpAmpArticleLink, 0); }
	public OpAmpArticle(): TerminalNode | undefined { return this.tryGetToken(flashcardParser.OpAmpArticle, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return flashcardParser.RULE_op_article_format; }
	// @Override
	public enterRule(listener: flashcardParserListener): void {
		if (listener.enterOp_article_format) {
			listener.enterOp_article_format(this);
		}
	}
	// @Override
	public exitRule(listener: flashcardParserListener): void {
		if (listener.exitOp_article_format) {
			listener.exitOp_article_format(this);
		}
	}
}


export class Op_document_formatContext extends ParserRuleContext {
	public OpAmpDocumentLink(): TerminalNode | undefined { return this.tryGetToken(flashcardParser.OpAmpDocumentLink, 0); }
	public OpAmpDocument(): TerminalNode | undefined { return this.tryGetToken(flashcardParser.OpAmpDocument, 0); }
	public OpAmpDocumentEmbed(): TerminalNode | undefined { return this.tryGetToken(flashcardParser.OpAmpDocumentEmbed, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return flashcardParser.RULE_op_document_format; }
	// @Override
	public enterRule(listener: flashcardParserListener): void {
		if (listener.enterOp_document_format) {
			listener.enterOp_document_format(this);
		}
	}
	// @Override
	public exitRule(listener: flashcardParserListener): void {
		if (listener.exitOp_document_format) {
			listener.exitOp_document_format(this);
		}
	}
}


export class Op_app_formatContext extends ParserRuleContext {
	public OpAmpApp(): TerminalNode | undefined { return this.tryGetToken(flashcardParser.OpAmpApp, 0); }
	public OpAmpAppLink(): TerminalNode | undefined { return this.tryGetToken(flashcardParser.OpAmpAppLink, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return flashcardParser.RULE_op_app_format; }
	// @Override
	public enterRule(listener: flashcardParserListener): void {
		if (listener.enterOp_app_format) {
			listener.enterOp_app_format(this);
		}
	}
	// @Override
	public exitRule(listener: flashcardParserListener): void {
		if (listener.exitOp_app_format) {
			listener.exitOp_app_format(this);
		}
	}
}


export class Op_website_formatContext extends ParserRuleContext {
	public OpAmpWebsite(): TerminalNode | undefined { return this.tryGetToken(flashcardParser.OpAmpWebsite, 0); }
	public OpAmpWebsiteLink(): TerminalNode | undefined { return this.tryGetToken(flashcardParser.OpAmpWebsiteLink, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return flashcardParser.RULE_op_website_format; }
	// @Override
	public enterRule(listener: flashcardParserListener): void {
		if (listener.enterOp_website_format) {
			listener.enterOp_website_format(this);
		}
	}
	// @Override
	public exitRule(listener: flashcardParserListener): void {
		if (listener.exitOp_website_format) {
			listener.exitOp_website_format(this);
		}
	}
}


export class Op_video_formatContext extends ParserRuleContext {
	public OpAmpVideo(): TerminalNode | undefined { return this.tryGetToken(flashcardParser.OpAmpVideo, 0); }
	public COLON(): TerminalNode | undefined { return this.tryGetToken(flashcardParser.COLON, 0); }
	public Video_type(): TerminalNode | undefined { return this.tryGetToken(flashcardParser.Video_type, 0); }
	public OpAmpVideoLink(): TerminalNode | undefined { return this.tryGetToken(flashcardParser.OpAmpVideoLink, 0); }
	public OpAmpVideoEmbed(): TerminalNode | undefined { return this.tryGetToken(flashcardParser.OpAmpVideoEmbed, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return flashcardParser.RULE_op_video_format; }
	// @Override
	public enterRule(listener: flashcardParserListener): void {
		if (listener.enterOp_video_format) {
			listener.enterOp_video_format(this);
		}
	}
	// @Override
	public exitRule(listener: flashcardParserListener): void {
		if (listener.exitOp_video_format) {
			listener.exitOp_video_format(this);
		}
	}
}


export class Op_stillimagefilm_formatContext extends ParserRuleContext {
	public OpAmpStillImageFilm(): TerminalNode | undefined { return this.tryGetToken(flashcardParser.OpAmpStillImageFilm, 0); }
	public OpAmpStillImageFilmLink(): TerminalNode | undefined { return this.tryGetToken(flashcardParser.OpAmpStillImageFilmLink, 0); }
	public OpAmpStillImageFilmEmbed(): TerminalNode | undefined { return this.tryGetToken(flashcardParser.OpAmpStillImageFilmEmbed, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return flashcardParser.RULE_op_stillimagefilm_format; }
	// @Override
	public enterRule(listener: flashcardParserListener): void {
		if (listener.enterOp_stillimagefilm_format) {
			listener.enterOp_stillimagefilm_format(this);
		}
	}
	// @Override
	public exitRule(listener: flashcardParserListener): void {
		if (listener.exitOp_stillimagefilm_format) {
			listener.exitOp_stillimagefilm_format(this);
		}
	}
}


export class ArticlebitContext extends ParserRuleContext {
	public op_article_format(): Op_article_formatContext | undefined {
		return this.tryGetRuleContext(0, Op_article_formatContext);
	}
	public COLON(): TerminalNode | undefined { return this.tryGetToken(flashcardParser.COLON, 0); }
	public url(): UrlContext | undefined {
		return this.tryGetRuleContext(0, UrlContext);
	}
	public CL(): TerminalNode | undefined { return this.tryGetToken(flashcardParser.CL, 0); }
	public ArticleText(): TerminalNode | undefined { return this.tryGetToken(flashcardParser.ArticleText, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return flashcardParser.RULE_articlebit; }
	// @Override
	public enterRule(listener: flashcardParserListener): void {
		if (listener.enterArticlebit) {
			listener.enterArticlebit(this);
		}
	}
	// @Override
	public exitRule(listener: flashcardParserListener): void {
		if (listener.exitArticlebit) {
			listener.exitArticlebit(this);
		}
	}
}


export class DocumentbitContext extends ParserRuleContext {
	public op_document_format(): Op_document_formatContext {
		return this.getRuleContext(0, Op_document_formatContext);
	}
	public COLON(): TerminalNode { return this.getToken(flashcardParser.COLON, 0); }
	public url(): UrlContext {
		return this.getRuleContext(0, UrlContext);
	}
	public CL(): TerminalNode[];
	public CL(i: number): TerminalNode;
	public CL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(flashcardParser.CL);
		} else {
			return this.getToken(flashcardParser.CL, i);
		}
	}
	public OPATALT(): TerminalNode | undefined { return this.tryGetToken(flashcardParser.OPATALT, 0); }
	public words(): WordsContext | undefined {
		return this.tryGetRuleContext(0, WordsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return flashcardParser.RULE_documentbit; }
	// @Override
	public enterRule(listener: flashcardParserListener): void {
		if (listener.enterDocumentbit) {
			listener.enterDocumentbit(this);
		}
	}
	// @Override
	public exitRule(listener: flashcardParserListener): void {
		if (listener.exitDocumentbit) {
			listener.exitDocumentbit(this);
		}
	}
}


export class WebsitebitContext extends ParserRuleContext {
	public op_website_format(): Op_website_formatContext {
		return this.getRuleContext(0, Op_website_formatContext);
	}
	public COLON(): TerminalNode { return this.getToken(flashcardParser.COLON, 0); }
	public url(): UrlContext {
		return this.getRuleContext(0, UrlContext);
	}
	public CL(): TerminalNode[];
	public CL(i: number): TerminalNode;
	public CL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(flashcardParser.CL);
		} else {
			return this.getToken(flashcardParser.CL, i);
		}
	}
	public OPATALT(): TerminalNode | undefined { return this.tryGetToken(flashcardParser.OPATALT, 0); }
	public words(): WordsContext | undefined {
		return this.tryGetRuleContext(0, WordsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return flashcardParser.RULE_websitebit; }
	// @Override
	public enterRule(listener: flashcardParserListener): void {
		if (listener.enterWebsitebit) {
			listener.enterWebsitebit(this);
		}
	}
	// @Override
	public exitRule(listener: flashcardParserListener): void {
		if (listener.exitWebsitebit) {
			listener.exitWebsitebit(this);
		}
	}
}


export class AppbitContext extends ParserRuleContext {
	public op_app_format(): Op_app_formatContext {
		return this.getRuleContext(0, Op_app_formatContext);
	}
	public COLON(): TerminalNode { return this.getToken(flashcardParser.COLON, 0); }
	public CL(): TerminalNode[];
	public CL(i: number): TerminalNode;
	public CL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(flashcardParser.CL);
		} else {
			return this.getToken(flashcardParser.CL, i);
		}
	}
	public url(): UrlContext | undefined {
		return this.tryGetRuleContext(0, UrlContext);
	}
	public telephone(): TelephoneContext | undefined {
		return this.tryGetRuleContext(0, TelephoneContext);
	}
	public OPATALT(): TerminalNode | undefined { return this.tryGetToken(flashcardParser.OPATALT, 0); }
	public words(): WordsContext | undefined {
		return this.tryGetRuleContext(0, WordsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return flashcardParser.RULE_appbit; }
	// @Override
	public enterRule(listener: flashcardParserListener): void {
		if (listener.enterAppbit) {
			listener.enterAppbit(this);
		}
	}
	// @Override
	public exitRule(listener: flashcardParserListener): void {
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
	public get ruleIndex(): number { return flashcardParser.RULE_stillimagefilmbit; }
	// @Override
	public enterRule(listener: flashcardParserListener): void {
		if (listener.enterStillimagefilmbit) {
			listener.enterStillimagefilmbit(this);
		}
	}
	// @Override
	public exitRule(listener: flashcardParserListener): void {
		if (listener.exitStillimagefilmbit) {
			listener.exitStillimagefilmbit(this);
		}
	}
}


export class Stillimg_oneContext extends ParserRuleContext {
	public op_stillimagefilm_format(): Op_stillimagefilm_formatContext {
		return this.getRuleContext(0, Op_stillimagefilm_formatContext);
	}
	public COLON(): TerminalNode { return this.getToken(flashcardParser.COLON, 0); }
	public url(): UrlContext {
		return this.getRuleContext(0, UrlContext);
	}
	public CL(): TerminalNode { return this.getToken(flashcardParser.CL, 0); }
	public S(): TerminalNode[];
	public S(i: number): TerminalNode;
	public S(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(flashcardParser.S);
		} else {
			return this.getToken(flashcardParser.S, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return flashcardParser.RULE_stillimg_one; }
	// @Override
	public enterRule(listener: flashcardParserListener): void {
		if (listener.enterStillimg_one) {
			listener.enterStillimg_one(this);
		}
	}
	// @Override
	public exitRule(listener: flashcardParserListener): void {
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
	public get ruleIndex(): number { return flashcardParser.RULE_videobit; }
	// @Override
	public enterRule(listener: flashcardParserListener): void {
		if (listener.enterVideobit) {
			listener.enterVideobit(this);
		}
	}
	// @Override
	public exitRule(listener: flashcardParserListener): void {
		if (listener.exitVideobit) {
			listener.exitVideobit(this);
		}
	}
}


export class Video_oneContext extends ParserRuleContext {
	public op_video_format(): Op_video_formatContext {
		return this.getRuleContext(0, Op_video_formatContext);
	}
	public COLON(): TerminalNode { return this.getToken(flashcardParser.COLON, 0); }
	public url(): UrlContext {
		return this.getRuleContext(0, UrlContext);
	}
	public CL(): TerminalNode[];
	public CL(i: number): TerminalNode;
	public CL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(flashcardParser.CL);
		} else {
			return this.getToken(flashcardParser.CL, i);
		}
	}
	public OPATALT(): TerminalNode | undefined { return this.tryGetToken(flashcardParser.OPATALT, 0); }
	public words(): WordsContext | undefined {
		return this.tryGetRuleContext(0, WordsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return flashcardParser.RULE_video_one; }
	// @Override
	public enterRule(listener: flashcardParserListener): void {
		if (listener.enterVideo_one) {
			listener.enterVideo_one(this);
		}
	}
	// @Override
	public exitRule(listener: flashcardParserListener): void {
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
	public NL(): TerminalNode | undefined { return this.tryGetToken(flashcardParser.NL, 0); }
	public ShowInIndex(): TerminalNode | undefined { return this.tryGetToken(flashcardParser.ShowInIndex, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return flashcardParser.RULE_imagebit; }
	// @Override
	public enterRule(listener: flashcardParserListener): void {
		if (listener.enterImagebit) {
			listener.enterImagebit(this);
		}
	}
	// @Override
	public exitRule(listener: flashcardParserListener): void {
		if (listener.exitImagebit) {
			listener.exitImagebit(this);
		}
	}
}


export class Image_oneContext extends ParserRuleContext {
	public op_image_format(): Op_image_formatContext {
		return this.getRuleContext(0, Op_image_formatContext);
	}
	public COLON(): TerminalNode { return this.getToken(flashcardParser.COLON, 0); }
	public url(): UrlContext {
		return this.getRuleContext(0, UrlContext);
	}
	public CL(): TerminalNode { return this.getToken(flashcardParser.CL, 0); }
	public S(): TerminalNode[];
	public S(i: number): TerminalNode;
	public S(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(flashcardParser.S);
		} else {
			return this.getToken(flashcardParser.S, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return flashcardParser.RULE_image_one; }
	// @Override
	public enterRule(listener: flashcardParserListener): void {
		if (listener.enterImage_one) {
			listener.enterImage_one(this);
		}
	}
	// @Override
	public exitRule(listener: flashcardParserListener): void {
		if (listener.exitImage_one) {
			listener.exitImage_one(this);
		}
	}
}


export class Op_image_formatContext extends ParserRuleContext {
	public OpAmpImage(): TerminalNode | undefined { return this.tryGetToken(flashcardParser.OpAmpImage, 0); }
	public Image_type(): TerminalNode | undefined { return this.tryGetToken(flashcardParser.Image_type, 0); }
	public DotArticleAtt(): TerminalNode | undefined { return this.tryGetToken(flashcardParser.DotArticleAtt, 0); }
	public OpAmpImageLink(): TerminalNode | undefined { return this.tryGetToken(flashcardParser.OpAmpImageLink, 0); }
	public OpAmpImageZoom(): TerminalNode | undefined { return this.tryGetToken(flashcardParser.OpAmpImageZoom, 0); }
	public OpAmpImageWAudio(): TerminalNode | undefined { return this.tryGetToken(flashcardParser.OpAmpImageWAudio, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return flashcardParser.RULE_op_image_format; }
	// @Override
	public enterRule(listener: flashcardParserListener): void {
		if (listener.enterOp_image_format) {
			listener.enterOp_image_format(this);
		}
	}
	// @Override
	public exitRule(listener: flashcardParserListener): void {
		if (listener.exitOp_image_format) {
			listener.exitOp_image_format(this);
		}
	}
}


export class Image_chainedContext extends ParserRuleContext {
	public AtSrc(): TerminalNode | undefined { return this.tryGetToken(flashcardParser.AtSrc, 0); }
	public COLON(): TerminalNode | undefined { return this.tryGetToken(flashcardParser.COLON, 0); }
	public url(): UrlContext | undefined {
		return this.tryGetRuleContext(0, UrlContext);
	}
	public CL(): TerminalNode { return this.getToken(flashcardParser.CL, 0); }
	public NUMERIC(): TerminalNode | undefined { return this.tryGetToken(flashcardParser.NUMERIC, 0); }
	public AtWidth(): TerminalNode | undefined { return this.tryGetToken(flashcardParser.AtWidth, 0); }
	public AtHeight(): TerminalNode | undefined { return this.tryGetToken(flashcardParser.AtHeight, 0); }
	public OPATALT(): TerminalNode | undefined { return this.tryGetToken(flashcardParser.OPATALT, 0); }
	public OpAtCaption(): TerminalNode | undefined { return this.tryGetToken(flashcardParser.OpAtCaption, 0); }
	public OpAtSearch(): TerminalNode | undefined { return this.tryGetToken(flashcardParser.OpAtSearch, 0); }
	public OpAtLicense(): TerminalNode | undefined { return this.tryGetToken(flashcardParser.OpAtLicense, 0); }
	public OpAtCopyright(): TerminalNode | undefined { return this.tryGetToken(flashcardParser.OpAtCopyright, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return flashcardParser.RULE_image_chained; }
	// @Override
	public enterRule(listener: flashcardParserListener): void {
		if (listener.enterImage_chained) {
			listener.enterImage_chained(this);
		}
	}
	// @Override
	public exitRule(listener: flashcardParserListener): void {
		if (listener.exitImage_chained) {
			listener.exitImage_chained(this);
		}
	}
}


export class Image_chained4matchContext extends ParserRuleContext {
	public AtSrc(): TerminalNode | undefined { return this.tryGetToken(flashcardParser.AtSrc, 0); }
	public COLON(): TerminalNode | undefined { return this.tryGetToken(flashcardParser.COLON, 0); }
	public url(): UrlContext | undefined {
		return this.tryGetRuleContext(0, UrlContext);
	}
	public CL(): TerminalNode { return this.getToken(flashcardParser.CL, 0); }
	public NUMERIC(): TerminalNode | undefined { return this.tryGetToken(flashcardParser.NUMERIC, 0); }
	public AtWidth(): TerminalNode | undefined { return this.tryGetToken(flashcardParser.AtWidth, 0); }
	public AtHeight(): TerminalNode | undefined { return this.tryGetToken(flashcardParser.AtHeight, 0); }
	public OPATALT(): TerminalNode | undefined { return this.tryGetToken(flashcardParser.OPATALT, 0); }
	public OpAtCaption(): TerminalNode | undefined { return this.tryGetToken(flashcardParser.OpAtCaption, 0); }
	public OpAtSearch(): TerminalNode | undefined { return this.tryGetToken(flashcardParser.OpAtSearch, 0); }
	public OpAtLicense(): TerminalNode | undefined { return this.tryGetToken(flashcardParser.OpAtLicense, 0); }
	public OpAtCopyright(): TerminalNode | undefined { return this.tryGetToken(flashcardParser.OpAtCopyright, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return flashcardParser.RULE_image_chained4match; }
	// @Override
	public enterRule(listener: flashcardParserListener): void {
		if (listener.enterImage_chained4match) {
			listener.enterImage_chained4match(this);
		}
	}
	// @Override
	public exitRule(listener: flashcardParserListener): void {
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
	public get ruleIndex(): number { return flashcardParser.RULE_audiobit; }
	// @Override
	public enterRule(listener: flashcardParserListener): void {
		if (listener.enterAudiobit) {
			listener.enterAudiobit(this);
		}
	}
	// @Override
	public exitRule(listener: flashcardParserListener): void {
		if (listener.exitAudiobit) {
			listener.exitAudiobit(this);
		}
	}
}


export class Audio_oneContext extends ParserRuleContext {
	public op_audio_format(): Op_audio_formatContext {
		return this.getRuleContext(0, Op_audio_formatContext);
	}
	public COLON(): TerminalNode { return this.getToken(flashcardParser.COLON, 0); }
	public url(): UrlContext {
		return this.getRuleContext(0, UrlContext);
	}
	public CL(): TerminalNode[];
	public CL(i: number): TerminalNode;
	public CL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(flashcardParser.CL);
		} else {
			return this.getToken(flashcardParser.CL, i);
		}
	}
	public OPATALT(): TerminalNode | undefined { return this.tryGetToken(flashcardParser.OPATALT, 0); }
	public words(): WordsContext | undefined {
		return this.tryGetRuleContext(0, WordsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return flashcardParser.RULE_audio_one; }
	// @Override
	public enterRule(listener: flashcardParserListener): void {
		if (listener.enterAudio_one) {
			listener.enterAudio_one(this);
		}
	}
	// @Override
	public exitRule(listener: flashcardParserListener): void {
		if (listener.exitAudio_one) {
			listener.exitAudio_one(this);
		}
	}
}


export class Audio_formatContext extends ParserRuleContext {
	public AmpAudio(): TerminalNode | undefined { return this.tryGetToken(flashcardParser.AmpAudio, 0); }
	public COLON(): TerminalNode | undefined { return this.tryGetToken(flashcardParser.COLON, 0); }
	public Audio_type(): TerminalNode | undefined { return this.tryGetToken(flashcardParser.Audio_type, 0); }
	public AmpAudioLink(): TerminalNode | undefined { return this.tryGetToken(flashcardParser.AmpAudioLink, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return flashcardParser.RULE_audio_format; }
	// @Override
	public enterRule(listener: flashcardParserListener): void {
		if (listener.enterAudio_format) {
			listener.enterAudio_format(this);
		}
	}
	// @Override
	public exitRule(listener: flashcardParserListener): void {
		if (listener.exitAudio_format) {
			listener.exitAudio_format(this);
		}
	}
}


export class Op_audio_formatContext extends ParserRuleContext {
	public OpAmpAudio(): TerminalNode | undefined { return this.tryGetToken(flashcardParser.OpAmpAudio, 0); }
	public COLON(): TerminalNode | undefined { return this.tryGetToken(flashcardParser.COLON, 0); }
	public Audio_type(): TerminalNode | undefined { return this.tryGetToken(flashcardParser.Audio_type, 0); }
	public OpAmpAudioLink(): TerminalNode | undefined { return this.tryGetToken(flashcardParser.OpAmpAudioLink, 0); }
	public OpAmpAudioEmbed(): TerminalNode | undefined { return this.tryGetToken(flashcardParser.OpAmpAudioEmbed, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return flashcardParser.RULE_op_audio_format; }
	// @Override
	public enterRule(listener: flashcardParserListener): void {
		if (listener.enterOp_audio_format) {
			listener.enterOp_audio_format(this);
		}
	}
	// @Override
	public exitRule(listener: flashcardParserListener): void {
		if (listener.exitOp_audio_format) {
			listener.exitOp_audio_format(this);
		}
	}
}


export class Resource_chainedContext extends ParserRuleContext {
	public COLON(): TerminalNode | undefined { return this.tryGetToken(flashcardParser.COLON, 0); }
	public CL(): TerminalNode { return this.getToken(flashcardParser.CL, 0); }
	public OPA(): TerminalNode | undefined { return this.tryGetToken(flashcardParser.OPA, 0); }
	public s_and_w(): S_and_wContext[];
	public s_and_w(i: number): S_and_wContext;
	public s_and_w(i?: number): S_and_wContext | S_and_wContext[] {
		if (i === undefined) {
			return this.getRuleContexts(S_and_wContext);
		} else {
			return this.getRuleContext(i, S_and_wContext);
		}
	}
	public AtSrc(): TerminalNode | undefined { return this.tryGetToken(flashcardParser.AtSrc, 0); }
	public S(): TerminalNode[];
	public S(i: number): TerminalNode;
	public S(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(flashcardParser.S);
		} else {
			return this.getToken(flashcardParser.S, i);
		}
	}
	public NL(): TerminalNode[];
	public NL(i: number): TerminalNode;
	public NL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(flashcardParser.NL);
		} else {
			return this.getToken(flashcardParser.NL, i);
		}
	}
	public NUMERIC(): TerminalNode | undefined { return this.tryGetToken(flashcardParser.NUMERIC, 0); }
	public AtWidth(): TerminalNode | undefined { return this.tryGetToken(flashcardParser.AtWidth, 0); }
	public AtHeight(): TerminalNode | undefined { return this.tryGetToken(flashcardParser.AtHeight, 0); }
	public OPATALT(): TerminalNode | undefined { return this.tryGetToken(flashcardParser.OPATALT, 0); }
	public OpAtCaption(): TerminalNode | undefined { return this.tryGetToken(flashcardParser.OpAtCaption, 0); }
	public OpAtSearch(): TerminalNode | undefined { return this.tryGetToken(flashcardParser.OpAtSearch, 0); }
	public OpAtLicense(): TerminalNode | undefined { return this.tryGetToken(flashcardParser.OpAtLicense, 0); }
	public OpAtCopyright(): TerminalNode | undefined { return this.tryGetToken(flashcardParser.OpAtCopyright, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return flashcardParser.RULE_resource_chained; }
	// @Override
	public enterRule(listener: flashcardParserListener): void {
		if (listener.enterResource_chained) {
			listener.enterResource_chained(this);
		}
	}
	// @Override
	public exitRule(listener: flashcardParserListener): void {
		if (listener.exitResource_chained) {
			listener.exitResource_chained(this);
		}
	}
}


export class TelephoneContext extends ParserRuleContext {
	public TEL(): TerminalNode { return this.getToken(flashcardParser.TEL, 0); }
	public PLUS(): TerminalNode { return this.getToken(flashcardParser.PLUS, 0); }
	public NUMERIC(): TerminalNode { return this.getToken(flashcardParser.NUMERIC, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return flashcardParser.RULE_telephone; }
	// @Override
	public enterRule(listener: flashcardParserListener): void {
		if (listener.enterTelephone) {
			listener.enterTelephone(this);
		}
	}
	// @Override
	public exitRule(listener: flashcardParserListener): void {
		if (listener.exitTelephone) {
			listener.exitTelephone(this);
		}
	}
}


export class UrlContext extends ParserRuleContext {
	public URL(): TerminalNode { return this.getToken(flashcardParser.URL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return flashcardParser.RULE_url; }
	// @Override
	public enterRule(listener: flashcardParserListener): void {
		if (listener.enterUrl) {
			listener.enterUrl(this);
		}
	}
	// @Override
	public exitRule(listener: flashcardParserListener): void {
		if (listener.exitUrl) {
			listener.exitUrl(this);
		}
	}
}


export class ItemContext extends ParserRuleContext {
	public OPC(): TerminalNode { return this.getToken(flashcardParser.OPC, 0); }
	public CL(): TerminalNode { return this.getToken(flashcardParser.CL, 0); }
	public lead(): LeadContext | undefined {
		return this.tryGetRuleContext(0, LeadContext);
	}
	public S(): TerminalNode[];
	public S(i: number): TerminalNode;
	public S(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(flashcardParser.S);
		} else {
			return this.getToken(flashcardParser.S, i);
		}
	}
	public s_and_w(): S_and_wContext | undefined {
		return this.tryGetRuleContext(0, S_and_wContext);
	}
	public COLON(): TerminalNode[];
	public COLON(i: number): TerminalNode;
	public COLON(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(flashcardParser.COLON);
		} else {
			return this.getToken(flashcardParser.COLON, i);
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
	public get ruleIndex(): number { return flashcardParser.RULE_item; }
	// @Override
	public enterRule(listener: flashcardParserListener): void {
		if (listener.enterItem) {
			listener.enterItem(this);
		}
	}
	// @Override
	public exitRule(listener: flashcardParserListener): void {
		if (listener.exitItem) {
			listener.exitItem(this);
		}
	}
}


export class LeadContext extends ParserRuleContext {
	public OPC(): TerminalNode { return this.getToken(flashcardParser.OPC, 0); }
	public s_and_w(): S_and_wContext {
		return this.getRuleContext(0, S_and_wContext);
	}
	public CL(): TerminalNode { return this.getToken(flashcardParser.CL, 0); }
	public COLON(): TerminalNode[];
	public COLON(i: number): TerminalNode;
	public COLON(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(flashcardParser.COLON);
		} else {
			return this.getToken(flashcardParser.COLON, i);
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
	public get ruleIndex(): number { return flashcardParser.RULE_lead; }
	// @Override
	public enterRule(listener: flashcardParserListener): void {
		if (listener.enterLead) {
			listener.enterLead(this);
		}
	}
	// @Override
	public exitRule(listener: flashcardParserListener): void {
		if (listener.exitLead) {
			listener.exitLead(this);
		}
	}
}


export class AnglerefContext extends ParserRuleContext {
	public OPRANGLES(): TerminalNode | undefined { return this.tryGetToken(flashcardParser.OPRANGLES, 0); }
	public CL(): TerminalNode { return this.getToken(flashcardParser.CL, 0); }
	public s_and_w(): S_and_wContext | undefined {
		return this.tryGetRuleContext(0, S_and_wContext);
	}
	public OPRANGLEL(): TerminalNode | undefined { return this.tryGetToken(flashcardParser.OPRANGLEL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return flashcardParser.RULE_angleref; }
	// @Override
	public enterRule(listener: flashcardParserListener): void {
		if (listener.enterAngleref) {
			listener.enterAngleref(this);
		}
	}
	// @Override
	public exitRule(listener: flashcardParserListener): void {
		if (listener.exitAngleref) {
			listener.exitAngleref(this);
		}
	}
}


export class ExampleContext extends ParserRuleContext {
	public AtExamplecl(): TerminalNode | undefined { return this.tryGetToken(flashcardParser.AtExamplecl, 0); }
	public AtExampleWithStr(): TerminalNode | undefined { return this.tryGetToken(flashcardParser.AtExampleWithStr, 0); }
	public AtExamplecol(): TerminalNode | undefined { return this.tryGetToken(flashcardParser.AtExamplecol, 0); }
	public EOF(): TerminalNode | undefined { return this.tryGetToken(flashcardParser.EOF, 0); }
	public SENTENCE(): TerminalNode | undefined { return this.tryGetToken(flashcardParser.SENTENCE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return flashcardParser.RULE_example; }
	// @Override
	public enterRule(listener: flashcardParserListener): void {
		if (listener.enterExample) {
			listener.enterExample(this);
		}
	}
	// @Override
	public exitRule(listener: flashcardParserListener): void {
		if (listener.exitExample) {
			listener.exitExample(this);
		}
	}
}


export class Bracketed_textContext extends ParserRuleContext {
	public BracEnclose(): TerminalNode { return this.getToken(flashcardParser.BracEnclose, 0); }
	public CL(): TerminalNode | undefined { return this.tryGetToken(flashcardParser.CL, 0); }
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
			return this.getTokens(flashcardParser.NL);
		} else {
			return this.getToken(flashcardParser.NL, i);
		}
	}
	public S(): TerminalNode[];
	public S(i: number): TerminalNode;
	public S(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(flashcardParser.S);
		} else {
			return this.getToken(flashcardParser.S, i);
		}
	}
	public EOF(): TerminalNode | undefined { return this.tryGetToken(flashcardParser.EOF, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return flashcardParser.RULE_bracketed_text; }
	// @Override
	public enterRule(listener: flashcardParserListener): void {
		if (listener.enterBracketed_text) {
			listener.enterBracketed_text(this);
		}
	}
	// @Override
	public exitRule(listener: flashcardParserListener): void {
		if (listener.exitBracketed_text) {
			listener.exitBracketed_text(this);
		}
	}
}


export class ReferenceContext extends ParserRuleContext {
	public AtReference(): TerminalNode { return this.getToken(flashcardParser.AtReference, 0); }
	public CL(): TerminalNode | undefined { return this.tryGetToken(flashcardParser.CL, 0); }
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
			return this.getTokens(flashcardParser.COLON);
		} else {
			return this.getToken(flashcardParser.COLON, i);
		}
	}
	public URL(): TerminalNode[];
	public URL(i: number): TerminalNode;
	public URL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(flashcardParser.URL);
		} else {
			return this.getToken(flashcardParser.URL, i);
		}
	}
	public NL(): TerminalNode[];
	public NL(i: number): TerminalNode;
	public NL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(flashcardParser.NL);
		} else {
			return this.getToken(flashcardParser.NL, i);
		}
	}
	public EOF(): TerminalNode | undefined { return this.tryGetToken(flashcardParser.EOF, 0); }
	public S(): TerminalNode[];
	public S(i: number): TerminalNode;
	public S(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(flashcardParser.S);
		} else {
			return this.getToken(flashcardParser.S, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return flashcardParser.RULE_reference; }
	// @Override
	public enterRule(listener: flashcardParserListener): void {
		if (listener.enterReference) {
			listener.enterReference(this);
		}
	}
	// @Override
	public exitRule(listener: flashcardParserListener): void {
		if (listener.exitReference) {
			listener.exitReference(this);
		}
	}
}


export class ProgressContext extends ParserRuleContext {
	public AtProgress(): TerminalNode { return this.getToken(flashcardParser.AtProgress, 0); }
	public s_and_w(): S_and_wContext {
		return this.getRuleContext(0, S_and_wContext);
	}
	public CL(): TerminalNode { return this.getToken(flashcardParser.CL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return flashcardParser.RULE_progress; }
	// @Override
	public enterRule(listener: flashcardParserListener): void {
		if (listener.enterProgress) {
			listener.enterProgress(this);
		}
	}
	// @Override
	public exitRule(listener: flashcardParserListener): void {
		if (listener.exitProgress) {
			listener.exitProgress(this);
		}
	}
}


export class DatepropContext extends ParserRuleContext {
	public AtDate(): TerminalNode { return this.getToken(flashcardParser.AtDate, 0); }
	public CL(): TerminalNode { return this.getToken(flashcardParser.CL, 0); }
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
			return this.getTokens(flashcardParser.COLON);
		} else {
			return this.getToken(flashcardParser.COLON, i);
		}
	}
	public NL(): TerminalNode[];
	public NL(i: number): TerminalNode;
	public NL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(flashcardParser.NL);
		} else {
			return this.getToken(flashcardParser.NL, i);
		}
	}
	public dateprop_chained(): Dateprop_chainedContext | undefined {
		return this.tryGetRuleContext(0, Dateprop_chainedContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return flashcardParser.RULE_dateprop; }
	// @Override
	public enterRule(listener: flashcardParserListener): void {
		if (listener.enterDateprop) {
			listener.enterDateprop(this);
		}
	}
	// @Override
	public exitRule(listener: flashcardParserListener): void {
		if (listener.exitDateprop) {
			listener.exitDateprop(this);
		}
	}
}


export class Dateprop_chainedContext extends ParserRuleContext {
	public AtDate(): TerminalNode { return this.getToken(flashcardParser.AtDate, 0); }
	public CL(): TerminalNode { return this.getToken(flashcardParser.CL, 0); }
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
			return this.getTokens(flashcardParser.COLON);
		} else {
			return this.getToken(flashcardParser.COLON, i);
		}
	}
	public NL(): TerminalNode[];
	public NL(i: number): TerminalNode;
	public NL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(flashcardParser.NL);
		} else {
			return this.getToken(flashcardParser.NL, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return flashcardParser.RULE_dateprop_chained; }
	// @Override
	public enterRule(listener: flashcardParserListener): void {
		if (listener.enterDateprop_chained) {
			listener.enterDateprop_chained(this);
		}
	}
	// @Override
	public exitRule(listener: flashcardParserListener): void {
		if (listener.exitDateprop_chained) {
			listener.exitDateprop_chained(this);
		}
	}
}


export class InstructionContext extends ParserRuleContext {
	public OPB(): TerminalNode { return this.getToken(flashcardParser.OPB, 0); }
	public CL(): TerminalNode | undefined { return this.tryGetToken(flashcardParser.CL, 0); }
	public NL(): TerminalNode[];
	public NL(i: number): TerminalNode;
	public NL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(flashcardParser.NL);
		} else {
			return this.getToken(flashcardParser.NL, i);
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
			return this.getTokens(flashcardParser.S);
		} else {
			return this.getToken(flashcardParser.S, i);
		}
	}
	public EOF(): TerminalNode | undefined { return this.tryGetToken(flashcardParser.EOF, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return flashcardParser.RULE_instruction; }
	// @Override
	public enterRule(listener: flashcardParserListener): void {
		if (listener.enterInstruction) {
			listener.enterInstruction(this);
		}
	}
	// @Override
	public exitRule(listener: flashcardParserListener): void {
		if (listener.exitInstruction) {
			listener.exitInstruction(this);
		}
	}
}


export class HintContext extends ParserRuleContext {
	public OPQ(): TerminalNode { return this.getToken(flashcardParser.OPQ, 0); }
	public CL(): TerminalNode[];
	public CL(i: number): TerminalNode;
	public CL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(flashcardParser.CL);
		} else {
			return this.getToken(flashcardParser.CL, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return flashcardParser.RULE_hint; }
	// @Override
	public enterRule(listener: flashcardParserListener): void {
		if (listener.enterHint) {
			listener.enterHint(this);
		}
	}
	// @Override
	public exitRule(listener: flashcardParserListener): void {
		if (listener.exitHint) {
			listener.exitHint(this);
		}
	}
}


export class TitleContext extends ParserRuleContext {
	public OPHASH(): TerminalNode { return this.getToken(flashcardParser.OPHASH, 0); }
	public CL(): TerminalNode | undefined { return this.tryGetToken(flashcardParser.CL, 0); }
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
			return this.getTokens(flashcardParser.NL);
		} else {
			return this.getToken(flashcardParser.NL, i);
		}
	}
	public EOF(): TerminalNode | undefined { return this.tryGetToken(flashcardParser.EOF, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return flashcardParser.RULE_title; }
	// @Override
	public enterRule(listener: flashcardParserListener): void {
		if (listener.enterTitle) {
			listener.enterTitle(this);
		}
	}
	// @Override
	public exitRule(listener: flashcardParserListener): void {
		if (listener.exitTitle) {
			listener.exitTitle(this);
		}
	}
}


export class Bool_labelContext extends ParserRuleContext {
	public AtLabeltrue(): TerminalNode | undefined { return this.tryGetToken(flashcardParser.AtLabeltrue, 0); }
	public s_and_w(): S_and_wContext {
		return this.getRuleContext(0, S_and_wContext);
	}
	public CL(): TerminalNode { return this.getToken(flashcardParser.CL, 0); }
	public AtLabelfalse(): TerminalNode | undefined { return this.tryGetToken(flashcardParser.AtLabelfalse, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return flashcardParser.RULE_bool_label; }
	// @Override
	public enterRule(listener: flashcardParserListener): void {
		if (listener.enterBool_label) {
			listener.enterBool_label(this);
		}
	}
	// @Override
	public exitRule(listener: flashcardParserListener): void {
		if (listener.exitBool_label) {
			listener.exitBool_label(this);
		}
	}
}


export class Progress_pointsContext extends ParserRuleContext {
	public AtProgressPoints(): TerminalNode { return this.getToken(flashcardParser.AtProgressPoints, 0); }
	public COLON(): TerminalNode { return this.getToken(flashcardParser.COLON, 0); }
	public NUMERIC(): TerminalNode | undefined { return this.tryGetToken(flashcardParser.NUMERIC, 0); }
	public CL(): TerminalNode { return this.getToken(flashcardParser.CL, 0); }
	public s_and_w(): S_and_wContext | undefined {
		return this.tryGetRuleContext(0, S_and_wContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return flashcardParser.RULE_progress_points; }
	// @Override
	public enterRule(listener: flashcardParserListener): void {
		if (listener.enterProgress_points) {
			listener.enterProgress_points(this);
		}
	}
	// @Override
	public exitRule(listener: flashcardParserListener): void {
		if (listener.exitProgress_points) {
			listener.exitProgress_points(this);
		}
	}
}


export class IstrackedContext extends ParserRuleContext {
	public OpAtIsTracked(): TerminalNode { return this.getToken(flashcardParser.OpAtIsTracked, 0); }
	public s_and_w(): S_and_wContext {
		return this.getRuleContext(0, S_and_wContext);
	}
	public CL(): TerminalNode { return this.getToken(flashcardParser.CL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return flashcardParser.RULE_istracked; }
	// @Override
	public enterRule(listener: flashcardParserListener): void {
		if (listener.enterIstracked) {
			listener.enterIstracked(this);
		}
	}
	// @Override
	public exitRule(listener: flashcardParserListener): void {
		if (listener.exitIstracked) {
			listener.exitIstracked(this);
		}
	}
}


export class IsinfoonlyContext extends ParserRuleContext {
	public OpAtIsInfoOnly(): TerminalNode { return this.getToken(flashcardParser.OpAtIsInfoOnly, 0); }
	public s_and_w(): S_and_wContext {
		return this.getRuleContext(0, S_and_wContext);
	}
	public CL(): TerminalNode { return this.getToken(flashcardParser.CL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return flashcardParser.RULE_isinfoonly; }
	// @Override
	public enterRule(listener: flashcardParserListener): void {
		if (listener.enterIsinfoonly) {
			listener.enterIsinfoonly(this);
		}
	}
	// @Override
	public exitRule(listener: flashcardParserListener): void {
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
			return this.getTokens(flashcardParser.NL);
		} else {
			return this.getToken(flashcardParser.NL, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return flashcardParser.RULE_atdef; }
	// @Override
	public enterRule(listener: flashcardParserListener): void {
		if (listener.enterAtdef) {
			listener.enterAtdef(this);
		}
	}
	// @Override
	public exitRule(listener: flashcardParserListener): void {
		if (listener.exitAtdef) {
			listener.exitAtdef(this);
		}
	}
}


export class Atdef_Context extends ParserRuleContext {
	public OPA(): TerminalNode | undefined { return this.tryGetToken(flashcardParser.OPA, 0); }
	public s_and_w(): S_and_wContext[];
	public s_and_w(i: number): S_and_wContext;
	public s_and_w(i?: number): S_and_wContext | S_and_wContext[] {
		if (i === undefined) {
			return this.getRuleContexts(S_and_wContext);
		} else {
			return this.getRuleContext(i, S_and_wContext);
		}
	}
	public CL(): TerminalNode { return this.getToken(flashcardParser.CL, 0); }
	public COLON(): TerminalNode[];
	public COLON(i: number): TerminalNode;
	public COLON(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(flashcardParser.COLON);
		} else {
			return this.getToken(flashcardParser.COLON, i);
		}
	}
	public DBLCOLON(): TerminalNode | undefined { return this.tryGetToken(flashcardParser.DBLCOLON, 0); }
	public NL(): TerminalNode[];
	public NL(i: number): TerminalNode;
	public NL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(flashcardParser.NL);
		} else {
			return this.getToken(flashcardParser.NL, i);
		}
	}
	public OpAtCopyright(): TerminalNode | undefined { return this.tryGetToken(flashcardParser.OpAtCopyright, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return flashcardParser.RULE_atdef_; }
	// @Override
	public enterRule(listener: flashcardParserListener): void {
		if (listener.enterAtdef_) {
			listener.enterAtdef_(this);
		}
	}
	// @Override
	public exitRule(listener: flashcardParserListener): void {
		if (listener.exitAtdef_) {
			listener.exitAtdef_(this);
		}
	}
}


export class DollaransContext extends ParserRuleContext {
	public OPDOLL(): TerminalNode { return this.getToken(flashcardParser.OPDOLL, 0); }
	public CL(): TerminalNode | undefined { return this.tryGetToken(flashcardParser.CL, 0); }
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
			return this.getTokens(flashcardParser.COLON);
		} else {
			return this.getToken(flashcardParser.COLON, i);
		}
	}
	public NL(): TerminalNode[];
	public NL(i: number): TerminalNode;
	public NL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(flashcardParser.NL);
		} else {
			return this.getToken(flashcardParser.NL, i);
		}
	}
	public EOF(): TerminalNode | undefined { return this.tryGetToken(flashcardParser.EOF, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return flashcardParser.RULE_dollarans; }
	// @Override
	public enterRule(listener: flashcardParserListener): void {
		if (listener.enterDollarans) {
			listener.enterDollarans(this);
		}
	}
	// @Override
	public exitRule(listener: flashcardParserListener): void {
		if (listener.exitDollarans) {
			listener.exitDollarans(this);
		}
	}
}


export class AnchorContext extends ParserRuleContext {
	public OPDANGLE(): TerminalNode { return this.getToken(flashcardParser.OPDANGLE, 0); }
	public CL(): TerminalNode { return this.getToken(flashcardParser.CL, 0); }
	public s_and_w(): S_and_wContext | undefined {
		return this.tryGetRuleContext(0, S_and_wContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return flashcardParser.RULE_anchor; }
	// @Override
	public enterRule(listener: flashcardParserListener): void {
		if (listener.enterAnchor) {
			listener.enterAnchor(this);
		}
	}
	// @Override
	public exitRule(listener: flashcardParserListener): void {
		if (listener.exitAnchor) {
			listener.exitAnchor(this);
		}
	}
}


export class DcolonContext extends ParserRuleContext {
	public DBLCOLON(): TerminalNode { return this.getToken(flashcardParser.DBLCOLON, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return flashcardParser.RULE_dcolon; }
	// @Override
	public enterRule(listener: flashcardParserListener): void {
		if (listener.enterDcolon) {
			listener.enterDcolon(this);
		}
	}
	// @Override
	public exitRule(listener: flashcardParserListener): void {
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
			return this.getTokens(flashcardParser.NL);
		} else {
			return this.getToken(flashcardParser.NL, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return flashcardParser.RULE_lines; }
	// @Override
	public enterRule(listener: flashcardParserListener): void {
		if (listener.enterLines) {
			listener.enterLines(this);
		}
	}
	// @Override
	public exitRule(listener: flashcardParserListener): void {
		if (listener.exitLines) {
			listener.exitLines(this);
		}
	}
}


export class S_and_wContext extends ParserRuleContext {
	public STRING(): TerminalNode | undefined { return this.tryGetToken(flashcardParser.STRING, 0); }
	public NUMERIC(): TerminalNode | undefined { return this.tryGetToken(flashcardParser.NUMERIC, 0); }
	public S(): TerminalNode[];
	public S(i: number): TerminalNode;
	public S(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(flashcardParser.S);
		} else {
			return this.getToken(flashcardParser.S, i);
		}
	}
	public words(): WordsContext | undefined {
		return this.tryGetRuleContext(0, WordsContext);
	}
	public OPS(): TerminalNode | undefined { return this.tryGetToken(flashcardParser.OPS, 0); }
	public s_and_w(): S_and_wContext | undefined {
		return this.tryGetRuleContext(0, S_and_wContext);
	}
	public CL(): TerminalNode | undefined { return this.tryGetToken(flashcardParser.CL, 0); }
	public COLON(): TerminalNode | undefined { return this.tryGetToken(flashcardParser.COLON, 0); }
	public AMP(): TerminalNode | undefined { return this.tryGetToken(flashcardParser.AMP, 0); }
	public URL(): TerminalNode | undefined { return this.tryGetToken(flashcardParser.URL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return flashcardParser.RULE_s_and_w; }
	// @Override
	public enterRule(listener: flashcardParserListener): void {
		if (listener.enterS_and_w) {
			listener.enterS_and_w(this);
		}
	}
	// @Override
	public exitRule(listener: flashcardParserListener): void {
		if (listener.exitS_and_w) {
			listener.exitS_and_w(this);
		}
	}
}


export class Bracket_escapedContext extends ParserRuleContext {
	public OPESC(): TerminalNode { return this.getToken(flashcardParser.OPESC, 0); }
	public s_and_w(): S_and_wContext {
		return this.getRuleContext(0, S_and_wContext);
	}
	public CL(): TerminalNode { return this.getToken(flashcardParser.CL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return flashcardParser.RULE_bracket_escaped; }
	// @Override
	public enterRule(listener: flashcardParserListener): void {
		if (listener.enterBracket_escaped) {
			listener.enterBracket_escaped(this);
		}
	}
	// @Override
	public exitRule(listener: flashcardParserListener): void {
		if (listener.exitBracket_escaped) {
			listener.exitBracket_escaped(this);
		}
	}
}


export class ClnspContext extends ParserRuleContext {
	public CL(): TerminalNode { return this.getToken(flashcardParser.CL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return flashcardParser.RULE_clnsp; }
	// @Override
	public enterRule(listener: flashcardParserListener): void {
		if (listener.enterClnsp) {
			listener.enterClnsp(this);
		}
	}
	// @Override
	public exitRule(listener: flashcardParserListener): void {
		if (listener.exitClnsp) {
			listener.exitClnsp(this);
		}
	}
}


export class SsplContext extends ParserRuleContext {
	public SSPL(): TerminalNode | undefined { return this.tryGetToken(flashcardParser.SSPL, 0); }
	public SSPL2(): TerminalNode | undefined { return this.tryGetToken(flashcardParser.SSPL2, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return flashcardParser.RULE_sspl; }
	// @Override
	public enterRule(listener: flashcardParserListener): void {
		if (listener.enterSspl) {
			listener.enterSspl(this);
		}
	}
	// @Override
	public exitRule(listener: flashcardParserListener): void {
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
			return this.getTokens(flashcardParser.SENTENCE);
		} else {
			return this.getToken(flashcardParser.SENTENCE, i);
		}
	}
	public BARSTRING(): TerminalNode[];
	public BARSTRING(i: number): TerminalNode;
	public BARSTRING(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(flashcardParser.BARSTRING);
		} else {
			return this.getToken(flashcardParser.BARSTRING, i);
		}
	}
	public AMP(): TerminalNode[];
	public AMP(i: number): TerminalNode;
	public AMP(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(flashcardParser.AMP);
		} else {
			return this.getToken(flashcardParser.AMP, i);
		}
	}
	public Greater(): TerminalNode[];
	public Greater(i: number): TerminalNode;
	public Greater(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(flashcardParser.Greater);
		} else {
			return this.getToken(flashcardParser.Greater, i);
		}
	}
	public Less(): TerminalNode[];
	public Less(i: number): TerminalNode;
	public Less(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(flashcardParser.Less);
		} else {
			return this.getToken(flashcardParser.Less, i);
		}
	}
	public RightArrow(): TerminalNode[];
	public RightArrow(i: number): TerminalNode;
	public RightArrow(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(flashcardParser.RightArrow);
		} else {
			return this.getToken(flashcardParser.RightArrow, i);
		}
	}
	public RightAngle(): TerminalNode[];
	public RightAngle(i: number): TerminalNode;
	public RightAngle(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(flashcardParser.RightAngle);
		} else {
			return this.getToken(flashcardParser.RightAngle, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return flashcardParser.RULE_words; }
	// @Override
	public enterRule(listener: flashcardParserListener): void {
		if (listener.enterWords) {
			listener.enterWords(this);
		}
	}
	// @Override
	public exitRule(listener: flashcardParserListener): void {
		if (listener.exitWords) {
			listener.exitWords(this);
		}
	}
}


export class SpContext extends ParserRuleContext {
	public S(): TerminalNode { return this.getToken(flashcardParser.S, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return flashcardParser.RULE_sp; }
	// @Override
	public enterRule(listener: flashcardParserListener): void {
		if (listener.enterSp) {
			listener.enterSp(this);
		}
	}
	// @Override
	public exitRule(listener: flashcardParserListener): void {
		if (listener.exitSp) {
			listener.exitSp(this);
		}
	}
}


