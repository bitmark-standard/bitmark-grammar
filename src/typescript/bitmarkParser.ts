// Generated from ./typescript//bitmarkParser.g4 by ANTLR 4.7.3-SNAPSHOT


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

import { bitmarkParserListener } from "./bitmarkParserListener";

export class bitmarkParser extends Parser {
	public static readonly OPDOT = 1;
	public static readonly S = 2;
	public static readonly BitBook = 3;
	public static readonly BitChapter = 4;
	public static readonly BitToc = 5;
	public static readonly BitSummary = 6;
	public static readonly BitIntlink = 7;
	public static readonly BitIntRef = 8;
	public static readonly BitAlias = 9;
	public static readonly BitGroups = 10;
	public static readonly BitGroupt = 11;
	public static readonly BitPlaceholder = 12;
	public static readonly BitStatement = 13;
	public static readonly BitDetails = 14;
	public static readonly CLOZE = 15;
	public static readonly MATCH = 16;
	public static readonly BitArticle = 17;
	public static readonly BitPage = 18;
	public static readonly BitEssay = 19;
	public static readonly BitMessage = 20;
	public static readonly BitCorrection = 21;
	public static readonly BitMark = 22;
	public static readonly BitDocup = 23;
	public static readonly BitTakepic = 24;
	public static readonly BitRecaud = 25;
	public static readonly BitPrepnote = 26;
	public static readonly BitAssign = 27;
	public static readonly BitBotint = 28;
	public static readonly BitSelfassess = 29;
	public static readonly BitRating = 30;
	public static readonly BitSurvey = 31;
	public static readonly BitSurvey1 = 32;
	public static readonly BitSurveyanon = 33;
	public static readonly BitSurveyanon1 = 34;
	public static readonly BitVocabulary = 35;
	public static readonly BitVocabulary1 = 36;
	public static readonly BitNote = 37;
	public static readonly BitInfo = 38;
	public static readonly BitWarning = 39;
	public static readonly BitRemark = 40;
	public static readonly BitHint = 41;
	public static readonly BitHelp = 42;
	public static readonly BitDanger = 43;
	public static readonly BitBug = 44;
	public static readonly BitSidenote = 45;
	public static readonly BitStickynote = 46;
	public static readonly BitQuote = 47;
	public static readonly BitFootnote = 48;
	public static readonly BitExample = 49;
	public static readonly BitButtonCopytext = 50;
	public static readonly BitWbtContinue = 51;
	public static readonly BitLearningPathDetails = 52;
	public static readonly BitLearningPathLti = 53;
	public static readonly BitLearningPathStep = 54;
	public static readonly BitLearningPathBook = 55;
	public static readonly BitLearningPathSign = 56;
	public static readonly BitLearningPathVideoCall = 57;
	public static readonly BitLearningPathLearningGoal = 58;
	public static readonly BitLearningPathClosing = 59;
	public static readonly BitLearningPathFeedback = 60;
	public static readonly BitLearningPathBotTraining = 61;
	public static readonly BitLearningPathExternalLink = 62;
	public static readonly BitLearningPathClassroomTraining = 63;
	public static readonly BitLearningPathClassroomEvent = 64;
	public static readonly BitBotActionSend = 65;
	public static readonly BitBotActionAnnounce = 66;
	public static readonly BitBotActionSave = 67;
	public static readonly BitBotActionRemind = 68;
	public static readonly COMMENT = 69;
	public static readonly Image_type = 70;
	public static readonly Audio_type = 71;
	public static readonly Video_type = 72;
	public static readonly OPDOLL = 73;
	public static readonly OPBUL = 74;
	public static readonly OPESC = 75;
	public static readonly OPRANGLES = 76;
	public static readonly OPRANGLEL = 77;
	public static readonly OPDANGLE = 78;
	public static readonly OPU = 79;
	public static readonly OPB = 80;
	public static readonly OPQ = 81;
	public static readonly OPA = 82;
	public static readonly OPP = 83;
	public static readonly OPM = 84;
	public static readonly OPS = 85;
	public static readonly OPR = 86;
	public static readonly OPHASH = 87;
	public static readonly OPC = 88;
	public static readonly CL = 89;
	public static readonly COLON = 90;
	public static readonly AMP = 91;
	public static readonly DBLCOLON = 92;
	public static readonly PLUS = 93;
	public static readonly DotAt = 94;
	public static readonly Greater = 95;
	public static readonly Less = 96;
	public static readonly RightAngle = 97;
	public static readonly RightArrow = 98;
	public static readonly DBLEQ = 99;
	public static readonly HSPL = 100;
	public static readonly HSPL2 = 101;
	public static readonly SSPL = 102;
	public static readonly SSPL2 = 103;
	public static readonly QUOTE_INDEX = 104;
	public static readonly DCANY = 105;
	public static readonly ArticleText = 106;
	public static readonly NOTCL = 107;
	public static readonly NUMERIC = 108;
	public static readonly STRING = 109;
	public static readonly NL = 110;
	public static readonly SENTENCE = 111;
	public static readonly OPAT = 112;
	public static readonly AtProgress = 113;
	public static readonly AtReference = 114;
	public static readonly AtWidth = 115;
	public static readonly AtHeight = 116;
	public static readonly AtProgressPoints = 117;
	public static readonly AtShortanswer = 118;
	public static readonly AtLonganswer = 119;
	public static readonly AtExampleWithStr = 120;
	public static readonly AtExamplecol = 121;
	public static readonly AtExamplecl = 122;
	public static readonly AtPartialAnswerS = 123;
	public static readonly AtPartialAnswer = 124;
	public static readonly AtLabeltrue = 125;
	public static readonly AtLabelfalse = 126;
	public static readonly AtPoints = 127;
	public static readonly AtSrc = 128;
	public static readonly OPATALT = 129;
	public static readonly OPAMARK = 130;
	public static readonly ShowInIndex = 131;
	public static readonly OpAtCaption = 132;
	public static readonly OpAtLicense = 133;
	public static readonly OpAtCopyright = 134;
	public static readonly OpAtIsTracked = 135;
	public static readonly OpAtIsInfoOnly = 136;
	public static readonly AtDate = 137;
	public static readonly Http = 138;
	public static readonly Https = 139;
	public static readonly AmpAudio = 140;
	public static readonly AmpImage = 141;
	public static readonly AmpImageZoom = 142;
	public static readonly AmpImageWAudio = 143;
	public static readonly AmpVideo = 144;
	public static readonly AmpArticle = 145;
	public static readonly AmpDocument = 146;
	public static readonly AmpApp = 147;
	public static readonly AmpWebsite = 148;
	public static readonly AmpStillImageFilm = 149;
	public static readonly AmpPdf = 150;
	public static readonly OpAmpAudio = 151;
	public static readonly OpAmpImage = 152;
	public static readonly OpAmpImageZoom = 153;
	public static readonly OpAmpImageWAudio = 154;
	public static readonly OpAmpVideo = 155;
	public static readonly OpAmpArticle = 156;
	public static readonly OpAmpArticleAtt = 157;
	public static readonly OpAmpDocument = 158;
	public static readonly OpAmpApp = 159;
	public static readonly OpAmpWebsite = 160;
	public static readonly OpAmpStillImageFilm = 161;
	public static readonly BracEnclose = 162;
	public static readonly AmpAudioLink = 163;
	public static readonly AmpImageLink = 164;
	public static readonly AmpVideoLink = 165;
	public static readonly AmpArticleLink = 166;
	public static readonly AmpDocumentLink = 167;
	public static readonly AmpAppLink = 168;
	public static readonly AmpWebsiteLink = 169;
	public static readonly AmpStillImageFilmLink = 170;
	public static readonly OpAmpAudioLink = 171;
	public static readonly OpAmpImageLink = 172;
	public static readonly OpAmpVideoLink = 173;
	public static readonly OpAmpArticleLink = 174;
	public static readonly OpAmpDocumentLink = 175;
	public static readonly OpAmpAppLink = 176;
	public static readonly OpAmpWebsiteLink = 177;
	public static readonly OpAmpStillImageFilmLink = 178;
	public static readonly BitmarkMinus = 179;
	public static readonly BitmarkPlus = 180;
	public static readonly ColonText = 181;
	public static readonly BASIC = 182;
	public static readonly JPG = 183;
	public static readonly PNG = 184;
	public static readonly GIF = 185;
	public static readonly SVG = 186;
	public static readonly MP2 = 187;
	public static readonly MP3 = 188;
	public static readonly MP4 = 189;
	public static readonly FLV = 190;
	public static readonly WMV = 191;
	public static readonly MPEG = 192;
	public static readonly MPG = 193;
	public static readonly TEL = 194;
	public static readonly DotArticleAtt = 195;
	public static readonly STAR = 196;
	public static readonly URL = 197;
	public static readonly LIST_LINE = 198;
	public static readonly RULE_bitmark = 0;
	public static readonly RULE_bitmark_ = 1;
	public static readonly RULE_bit = 2;
	public static readonly RULE_book = 3;
	public static readonly RULE_chapter = 4;
	public static readonly RULE_toc = 5;
	public static readonly RULE_summary = 6;
	public static readonly RULE_internal_link = 7;
	public static readonly RULE_bit_alias = 8;
	public static readonly RULE_title_etc = 9;
	public static readonly RULE_group_born = 10;
	public static readonly RULE_group_died = 11;
	public static readonly RULE_learning_path_lti = 12;
	public static readonly RULE_learning_path_step = 13;
	public static readonly RULE_learning_path_book = 14;
	public static readonly RULE_learning_path_sign = 15;
	public static readonly RULE_learning_path_video_call = 16;
	public static readonly RULE_learning_path_learning_goal = 17;
	public static readonly RULE_learning_path_closing = 18;
	public static readonly RULE_learning_path_feedback = 19;
	public static readonly RULE_learning_path_bot_training = 20;
	public static readonly RULE_learning_path_external_link = 21;
	public static readonly RULE_learning_path_classroom_training = 22;
	public static readonly RULE_learning_path_classroom_event = 23;
	public static readonly RULE_bot_action_send = 24;
	public static readonly RULE_bot_action_announce = 25;
	public static readonly RULE_bot_action_save = 26;
	public static readonly RULE_bot_action_remind = 27;
	public static readonly RULE_bitElem = 28;
	public static readonly RULE_gap = 29;
	public static readonly RULE_single_gap = 30;
	public static readonly RULE_choice_plus = 31;
	public static readonly RULE_choice_minus = 32;
	public static readonly RULE_choice_star = 33;
	public static readonly RULE_essay = 34;
	public static readonly RULE_ml_example = 35;
	public static readonly RULE_partans = 36;
	public static readonly RULE_resource = 37;
	public static readonly RULE_correction = 38;
	public static readonly RULE_corrs = 39;
	public static readonly RULE_mark_ = 40;
	public static readonly RULE_mark_text = 41;
	public static readonly RULE_mark_color = 42;
	public static readonly RULE_document_upload = 43;
	public static readonly RULE_take_picture = 44;
	public static readonly RULE_record_audio = 45;
	public static readonly RULE_preparation_note = 46;
	public static readonly RULE_assignment = 47;
	public static readonly RULE_article = 48;
	public static readonly RULE_statement = 49;
	public static readonly RULE_details = 50;
	public static readonly RULE_buttoncopytext = 51;
	public static readonly RULE_wbtcontinue = 52;
	public static readonly RULE_learningpathdetails = 53;
	public static readonly RULE_page = 54;
	public static readonly RULE_note = 55;
	public static readonly RULE_info = 56;
	public static readonly RULE_warning = 57;
	public static readonly RULE_remark = 58;
	public static readonly RULE_help = 59;
	public static readonly RULE_danger = 60;
	public static readonly RULE_bug = 61;
	public static readonly RULE_sidenote = 62;
	public static readonly RULE_stickynote = 63;
	public static readonly RULE_quote = 64;
	public static readonly RULE_footnote = 65;
	public static readonly RULE_hintbit = 66;
	public static readonly RULE_examplebit = 67;
	public static readonly RULE_message = 68;
	public static readonly RULE_bot_interview = 69;
	public static readonly RULE_bot_choice = 70;
	public static readonly RULE_rating = 71;
	public static readonly RULE_bullet_item = 72;
	public static readonly RULE_survey = 73;
	public static readonly RULE_survey_1 = 74;
	public static readonly RULE_survey_anonymous = 75;
	public static readonly RULE_survey_anonymous_1 = 76;
	public static readonly RULE_self_assessment = 77;
	public static readonly RULE_self_assess_s_and_w = 78;
	public static readonly RULE_atpoint = 79;
	public static readonly RULE_format = 80;
	public static readonly RULE_resource_format = 81;
	public static readonly RULE_resource_format_extra = 82;
	public static readonly RULE_image_format = 83;
	public static readonly RULE_video_format = 84;
	public static readonly RULE_article_format = 85;
	public static readonly RULE_document_format = 86;
	public static readonly RULE_app_format = 87;
	public static readonly RULE_website_format = 88;
	public static readonly RULE_stillimagefilm_format = 89;
	public static readonly RULE_op_article_format = 90;
	public static readonly RULE_op_document_format = 91;
	public static readonly RULE_op_app_format = 92;
	public static readonly RULE_op_website_format = 93;
	public static readonly RULE_op_video_format = 94;
	public static readonly RULE_op_stillimagefilm_format = 95;
	public static readonly RULE_articlebit = 96;
	public static readonly RULE_documentbit = 97;
	public static readonly RULE_websitebit = 98;
	public static readonly RULE_appbit = 99;
	public static readonly RULE_stillimagefilmbit = 100;
	public static readonly RULE_stillimg_one = 101;
	public static readonly RULE_videobit = 102;
	public static readonly RULE_video_one = 103;
	public static readonly RULE_imagebit = 104;
	public static readonly RULE_image_one = 105;
	public static readonly RULE_op_image_format = 106;
	public static readonly RULE_image_chained = 107;
	public static readonly RULE_image_chained4match = 108;
	public static readonly RULE_audiobit = 109;
	public static readonly RULE_audio_one = 110;
	public static readonly RULE_audio_format = 111;
	public static readonly RULE_op_audio_format = 112;
	public static readonly RULE_resource_chained = 113;
	public static readonly RULE_telephone = 114;
	public static readonly RULE_url = 115;
	public static readonly RULE_item = 116;
	public static readonly RULE_lead = 117;
	public static readonly RULE_angleref = 118;
	public static readonly RULE_example = 119;
	public static readonly RULE_bracketed_text = 120;
	public static readonly RULE_reference = 121;
	public static readonly RULE_progress = 122;
	public static readonly RULE_dateprop = 123;
	public static readonly RULE_dateprop_chained = 124;
	public static readonly RULE_instruction = 125;
	public static readonly RULE_hint = 126;
	public static readonly RULE_title = 127;
	public static readonly RULE_bool_label = 128;
	public static readonly RULE_progress_points = 129;
	public static readonly RULE_istracked = 130;
	public static readonly RULE_isinfoonly = 131;
	public static readonly RULE_atdef = 132;
	public static readonly RULE_atdef_ = 133;
	public static readonly RULE_dollarans = 134;
	public static readonly RULE_anchor = 135;
	public static readonly RULE_lines = 136;
	public static readonly RULE_s_and_w = 137;
	public static readonly RULE_dclines = 138;
	public static readonly RULE_bracket_escaped = 139;
	public static readonly RULE_clnsp = 140;
	public static readonly RULE_sspl = 141;
	public static readonly RULE_words = 142;
	public static readonly RULE_sp = 143;
	public static readonly RULE_sentence = 144;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"bitmark", "bitmark_", "bit", "book", "chapter", "toc", "summary", "internal_link", 
		"bit_alias", "title_etc", "group_born", "group_died", "learning_path_lti", 
		"learning_path_step", "learning_path_book", "learning_path_sign", "learning_path_video_call", 
		"learning_path_learning_goal", "learning_path_closing", "learning_path_feedback", 
		"learning_path_bot_training", "learning_path_external_link", "learning_path_classroom_training", 
		"learning_path_classroom_event", "bot_action_send", "bot_action_announce", 
		"bot_action_save", "bot_action_remind", "bitElem", "gap", "single_gap", 
		"choice_plus", "choice_minus", "choice_star", "essay", "ml_example", "partans", 
		"resource", "correction", "corrs", "mark_", "mark_text", "mark_color", 
		"document_upload", "take_picture", "record_audio", "preparation_note", 
		"assignment", "article", "statement", "details", "buttoncopytext", "wbtcontinue", 
		"learningpathdetails", "page", "note", "info", "warning", "remark", "help", 
		"danger", "bug", "sidenote", "stickynote", "quote", "footnote", "hintbit", 
		"examplebit", "message", "bot_interview", "bot_choice", "rating", "bullet_item", 
		"survey", "survey_1", "survey_anonymous", "survey_anonymous_1", "self_assessment", 
		"self_assess_s_and_w", "atpoint", "format", "resource_format", "resource_format_extra", 
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
		"s_and_w", "dclines", "bracket_escaped", "clnsp", "sspl", "words", "sp", 
		"sentence",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'[.'", undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, "'CLOZE'", "'MATCH'", undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, "':'", 
		"'&'", "'::'", "'+'", "'.@'", "'>'", "'<'", "'\u25BA'", "'\u2192'", "'=='", 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, "'[@'", undefined, 
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
		"':bitmark++'", "':text'", "':basic'", "':jpg'", "':png'", "':gif'", "':svg'", 
		"':mp2'", "':mp3'", "':mp4'", "':flv'", "':wmv'", "':mpeg'", "':mpg'", 
		"'tel:'", "'.article-attachment'", "'*'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "OPDOT", "S", "BitBook", "BitChapter", "BitToc", "BitSummary", 
		"BitIntlink", "BitIntRef", "BitAlias", "BitGroups", "BitGroupt", "BitPlaceholder", 
		"BitStatement", "BitDetails", "CLOZE", "MATCH", "BitArticle", "BitPage", 
		"BitEssay", "BitMessage", "BitCorrection", "BitMark", "BitDocup", "BitTakepic", 
		"BitRecaud", "BitPrepnote", "BitAssign", "BitBotint", "BitSelfassess", 
		"BitRating", "BitSurvey", "BitSurvey1", "BitSurveyanon", "BitSurveyanon1", 
		"BitVocabulary", "BitVocabulary1", "BitNote", "BitInfo", "BitWarning", 
		"BitRemark", "BitHint", "BitHelp", "BitDanger", "BitBug", "BitSidenote", 
		"BitStickynote", "BitQuote", "BitFootnote", "BitExample", "BitButtonCopytext", 
		"BitWbtContinue", "BitLearningPathDetails", "BitLearningPathLti", "BitLearningPathStep", 
		"BitLearningPathBook", "BitLearningPathSign", "BitLearningPathVideoCall", 
		"BitLearningPathLearningGoal", "BitLearningPathClosing", "BitLearningPathFeedback", 
		"BitLearningPathBotTraining", "BitLearningPathExternalLink", "BitLearningPathClassroomTraining", 
		"BitLearningPathClassroomEvent", "BitBotActionSend", "BitBotActionAnnounce", 
		"BitBotActionSave", "BitBotActionRemind", "COMMENT", "Image_type", "Audio_type", 
		"Video_type", "OPDOLL", "OPBUL", "OPESC", "OPRANGLES", "OPRANGLEL", "OPDANGLE", 
		"OPU", "OPB", "OPQ", "OPA", "OPP", "OPM", "OPS", "OPR", "OPHASH", "OPC", 
		"CL", "COLON", "AMP", "DBLCOLON", "PLUS", "DotAt", "Greater", "Less", 
		"RightAngle", "RightArrow", "DBLEQ", "HSPL", "HSPL2", "SSPL", "SSPL2", 
		"QUOTE_INDEX", "DCANY", "ArticleText", "NOTCL", "NUMERIC", "STRING", "NL", 
		"SENTENCE", "OPAT", "AtProgress", "AtReference", "AtWidth", "AtHeight", 
		"AtProgressPoints", "AtShortanswer", "AtLonganswer", "AtExampleWithStr", 
		"AtExamplecol", "AtExamplecl", "AtPartialAnswerS", "AtPartialAnswer", 
		"AtLabeltrue", "AtLabelfalse", "AtPoints", "AtSrc", "OPATALT", "OPAMARK", 
		"ShowInIndex", "OpAtCaption", "OpAtLicense", "OpAtCopyright", "OpAtIsTracked", 
		"OpAtIsInfoOnly", "AtDate", "Http", "Https", "AmpAudio", "AmpImage", "AmpImageZoom", 
		"AmpImageWAudio", "AmpVideo", "AmpArticle", "AmpDocument", "AmpApp", "AmpWebsite", 
		"AmpStillImageFilm", "AmpPdf", "OpAmpAudio", "OpAmpImage", "OpAmpImageZoom", 
		"OpAmpImageWAudio", "OpAmpVideo", "OpAmpArticle", "OpAmpArticleAtt", "OpAmpDocument", 
		"OpAmpApp", "OpAmpWebsite", "OpAmpStillImageFilm", "BracEnclose", "AmpAudioLink", 
		"AmpImageLink", "AmpVideoLink", "AmpArticleLink", "AmpDocumentLink", "AmpAppLink", 
		"AmpWebsiteLink", "AmpStillImageFilmLink", "OpAmpAudioLink", "OpAmpImageLink", 
		"OpAmpVideoLink", "OpAmpArticleLink", "OpAmpDocumentLink", "OpAmpAppLink", 
		"OpAmpWebsiteLink", "OpAmpStillImageFilmLink", "BitmarkMinus", "BitmarkPlus", 
		"ColonText", "BASIC", "JPG", "PNG", "GIF", "SVG", "MP2", "MP3", "MP4", 
		"FLV", "WMV", "MPEG", "MPG", "TEL", "DotArticleAtt", "STAR", "URL", "LIST_LINE",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(bitmarkParser._LITERAL_NAMES, bitmarkParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return bitmarkParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "bitmarkParser.g4"; }

	// @Override
	public get ruleNames(): string[] { return bitmarkParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return bitmarkParser._serializedATN; }

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(bitmarkParser._ATN, this);
	}
	// @RuleVersion(0)
	public bitmark(): BitmarkContext {
		let _localctx: BitmarkContext = new BitmarkContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, bitmarkParser.RULE_bitmark);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 303;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 290;
				this.bitmark_();
				this.state = 300;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 1, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 294;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						while (_la === bitmarkParser.S) {
							{
							{
							this.state = 291;
							this.match(bitmarkParser.S);
							}
							}
							this.state = 296;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
						}
						this.state = 297;
						this.match(bitmarkParser.NL);
						}
						}
					}
					this.state = 302;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 1, this._ctx);
				}
				}
				}
				this.state = 305;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << bitmarkParser.S) | (1 << bitmarkParser.BitBook) | (1 << bitmarkParser.BitChapter) | (1 << bitmarkParser.BitToc) | (1 << bitmarkParser.BitSummary) | (1 << bitmarkParser.BitIntlink) | (1 << bitmarkParser.BitIntRef) | (1 << bitmarkParser.BitAlias) | (1 << bitmarkParser.BitGroups) | (1 << bitmarkParser.BitGroupt) | (1 << bitmarkParser.BitStatement) | (1 << bitmarkParser.BitDetails) | (1 << bitmarkParser.BitArticle) | (1 << bitmarkParser.BitPage) | (1 << bitmarkParser.BitEssay) | (1 << bitmarkParser.BitMessage) | (1 << bitmarkParser.BitCorrection) | (1 << bitmarkParser.BitMark) | (1 << bitmarkParser.BitDocup) | (1 << bitmarkParser.BitTakepic) | (1 << bitmarkParser.BitRecaud) | (1 << bitmarkParser.BitPrepnote) | (1 << bitmarkParser.BitAssign) | (1 << bitmarkParser.BitBotint) | (1 << bitmarkParser.BitSelfassess) | (1 << bitmarkParser.BitRating) | (1 << bitmarkParser.BitSurvey))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (bitmarkParser.BitSurvey1 - 32)) | (1 << (bitmarkParser.BitSurveyanon - 32)) | (1 << (bitmarkParser.BitSurveyanon1 - 32)) | (1 << (bitmarkParser.BitNote - 32)) | (1 << (bitmarkParser.BitInfo - 32)) | (1 << (bitmarkParser.BitWarning - 32)) | (1 << (bitmarkParser.BitRemark - 32)) | (1 << (bitmarkParser.BitHint - 32)) | (1 << (bitmarkParser.BitHelp - 32)) | (1 << (bitmarkParser.BitDanger - 32)) | (1 << (bitmarkParser.BitBug - 32)) | (1 << (bitmarkParser.BitSidenote - 32)) | (1 << (bitmarkParser.BitStickynote - 32)) | (1 << (bitmarkParser.BitQuote - 32)) | (1 << (bitmarkParser.BitFootnote - 32)) | (1 << (bitmarkParser.BitExample - 32)) | (1 << (bitmarkParser.BitButtonCopytext - 32)) | (1 << (bitmarkParser.BitWbtContinue - 32)) | (1 << (bitmarkParser.BitLearningPathDetails - 32)) | (1 << (bitmarkParser.BitLearningPathLti - 32)) | (1 << (bitmarkParser.BitLearningPathStep - 32)) | (1 << (bitmarkParser.BitLearningPathBook - 32)) | (1 << (bitmarkParser.BitLearningPathSign - 32)) | (1 << (bitmarkParser.BitLearningPathVideoCall - 32)) | (1 << (bitmarkParser.BitLearningPathLearningGoal - 32)) | (1 << (bitmarkParser.BitLearningPathClosing - 32)) | (1 << (bitmarkParser.BitLearningPathFeedback - 32)) | (1 << (bitmarkParser.BitLearningPathBotTraining - 32)) | (1 << (bitmarkParser.BitLearningPathExternalLink - 32)) | (1 << (bitmarkParser.BitLearningPathClassroomTraining - 32)))) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (bitmarkParser.BitLearningPathClassroomEvent - 64)) | (1 << (bitmarkParser.BitBotActionSend - 64)) | (1 << (bitmarkParser.BitBotActionAnnounce - 64)) | (1 << (bitmarkParser.BitBotActionSave - 64)) | (1 << (bitmarkParser.BitBotActionRemind - 64)) | (1 << (bitmarkParser.OPESC - 64)) | (1 << (bitmarkParser.OPDANGLE - 64)) | (1 << (bitmarkParser.OPQ - 64)) | (1 << (bitmarkParser.OPS - 64)) | (1 << (bitmarkParser.COLON - 64)) | (1 << (bitmarkParser.AMP - 64)) | (1 << (bitmarkParser.Greater - 64)))) !== 0) || ((((_la - 96)) & ~0x1F) === 0 && ((1 << (_la - 96)) & ((1 << (bitmarkParser.Less - 96)) | (1 << (bitmarkParser.RightAngle - 96)) | (1 << (bitmarkParser.RightArrow - 96)) | (1 << (bitmarkParser.DBLEQ - 96)) | (1 << (bitmarkParser.QUOTE_INDEX - 96)) | (1 << (bitmarkParser.NUMERIC - 96)) | (1 << (bitmarkParser.STRING - 96)) | (1 << (bitmarkParser.SENTENCE - 96)))) !== 0) || ((((_la - 140)) & ~0x1F) === 0 && ((1 << (_la - 140)) & ((1 << (bitmarkParser.AmpAudio - 140)) | (1 << (bitmarkParser.AmpImage - 140)) | (1 << (bitmarkParser.AmpVideo - 140)) | (1 << (bitmarkParser.AmpArticle - 140)) | (1 << (bitmarkParser.AmpDocument - 140)) | (1 << (bitmarkParser.AmpApp - 140)) | (1 << (bitmarkParser.AmpWebsite - 140)) | (1 << (bitmarkParser.AmpStillImageFilm - 140)) | (1 << (bitmarkParser.AmpAudioLink - 140)) | (1 << (bitmarkParser.AmpImageLink - 140)) | (1 << (bitmarkParser.AmpVideoLink - 140)) | (1 << (bitmarkParser.AmpArticleLink - 140)) | (1 << (bitmarkParser.AmpDocumentLink - 140)) | (1 << (bitmarkParser.AmpAppLink - 140)) | (1 << (bitmarkParser.AmpWebsiteLink - 140)) | (1 << (bitmarkParser.AmpStillImageFilmLink - 140)))) !== 0) || ((((_la - 179)) & ~0x1F) === 0 && ((1 << (_la - 179)) & ((1 << (bitmarkParser.BitmarkMinus - 179)) | (1 << (bitmarkParser.BitmarkPlus - 179)) | (1 << (bitmarkParser.URL - 179)))) !== 0));
			this.state = 310;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === bitmarkParser.NL) {
				{
				{
				this.state = 307;
				this.match(bitmarkParser.NL);
				}
				}
				this.state = 312;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 313;
			this.match(bitmarkParser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 2, bitmarkParser.RULE_bitmark_);
		try {
			this.state = 317;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case bitmarkParser.BitBook:
			case bitmarkParser.BitChapter:
			case bitmarkParser.BitToc:
			case bitmarkParser.BitSummary:
			case bitmarkParser.BitIntlink:
			case bitmarkParser.BitIntRef:
			case bitmarkParser.BitAlias:
			case bitmarkParser.BitGroups:
			case bitmarkParser.BitGroupt:
			case bitmarkParser.BitStatement:
			case bitmarkParser.BitDetails:
			case bitmarkParser.BitArticle:
			case bitmarkParser.BitPage:
			case bitmarkParser.BitEssay:
			case bitmarkParser.BitMessage:
			case bitmarkParser.BitCorrection:
			case bitmarkParser.BitMark:
			case bitmarkParser.BitDocup:
			case bitmarkParser.BitTakepic:
			case bitmarkParser.BitRecaud:
			case bitmarkParser.BitPrepnote:
			case bitmarkParser.BitAssign:
			case bitmarkParser.BitBotint:
			case bitmarkParser.BitSelfassess:
			case bitmarkParser.BitRating:
			case bitmarkParser.BitSurvey:
			case bitmarkParser.BitSurvey1:
			case bitmarkParser.BitSurveyanon:
			case bitmarkParser.BitSurveyanon1:
			case bitmarkParser.BitNote:
			case bitmarkParser.BitInfo:
			case bitmarkParser.BitWarning:
			case bitmarkParser.BitRemark:
			case bitmarkParser.BitHint:
			case bitmarkParser.BitHelp:
			case bitmarkParser.BitDanger:
			case bitmarkParser.BitBug:
			case bitmarkParser.BitSidenote:
			case bitmarkParser.BitStickynote:
			case bitmarkParser.BitQuote:
			case bitmarkParser.BitFootnote:
			case bitmarkParser.BitExample:
			case bitmarkParser.BitButtonCopytext:
			case bitmarkParser.BitWbtContinue:
			case bitmarkParser.BitLearningPathDetails:
			case bitmarkParser.BitLearningPathLti:
			case bitmarkParser.BitLearningPathStep:
			case bitmarkParser.BitLearningPathBook:
			case bitmarkParser.BitLearningPathSign:
			case bitmarkParser.BitLearningPathVideoCall:
			case bitmarkParser.BitLearningPathLearningGoal:
			case bitmarkParser.BitLearningPathClosing:
			case bitmarkParser.BitLearningPathFeedback:
			case bitmarkParser.BitLearningPathBotTraining:
			case bitmarkParser.BitLearningPathExternalLink:
			case bitmarkParser.BitLearningPathClassroomTraining:
			case bitmarkParser.BitLearningPathClassroomEvent:
			case bitmarkParser.BitBotActionSend:
			case bitmarkParser.BitBotActionAnnounce:
			case bitmarkParser.BitBotActionSave:
			case bitmarkParser.BitBotActionRemind:
			case bitmarkParser.OPDANGLE:
			case bitmarkParser.OPQ:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 315;
				this.bit();
				}
				break;
			case bitmarkParser.S:
			case bitmarkParser.OPESC:
			case bitmarkParser.OPS:
			case bitmarkParser.COLON:
			case bitmarkParser.AMP:
			case bitmarkParser.Greater:
			case bitmarkParser.Less:
			case bitmarkParser.RightAngle:
			case bitmarkParser.RightArrow:
			case bitmarkParser.DBLEQ:
			case bitmarkParser.QUOTE_INDEX:
			case bitmarkParser.NUMERIC:
			case bitmarkParser.STRING:
			case bitmarkParser.SENTENCE:
			case bitmarkParser.AmpAudio:
			case bitmarkParser.AmpImage:
			case bitmarkParser.AmpVideo:
			case bitmarkParser.AmpArticle:
			case bitmarkParser.AmpDocument:
			case bitmarkParser.AmpApp:
			case bitmarkParser.AmpWebsite:
			case bitmarkParser.AmpStillImageFilm:
			case bitmarkParser.AmpAudioLink:
			case bitmarkParser.AmpImageLink:
			case bitmarkParser.AmpVideoLink:
			case bitmarkParser.AmpArticleLink:
			case bitmarkParser.AmpDocumentLink:
			case bitmarkParser.AmpAppLink:
			case bitmarkParser.AmpWebsiteLink:
			case bitmarkParser.AmpStillImageFilmLink:
			case bitmarkParser.BitmarkMinus:
			case bitmarkParser.BitmarkPlus:
			case bitmarkParser.URL:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 316;
				this.lines();
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
	public bit(): BitContext {
		let _localctx: BitContext = new BitContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, bitmarkParser.RULE_bit);
		try {
			this.state = 381;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case bitmarkParser.BitBook:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 319;
				this.book();
				}
				break;
			case bitmarkParser.BitChapter:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 320;
				this.chapter();
				}
				break;
			case bitmarkParser.BitSummary:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 321;
				this.summary();
				}
				break;
			case bitmarkParser.BitToc:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 322;
				this.toc();
				}
				break;
			case bitmarkParser.BitAlias:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 323;
				this.bit_alias();
				}
				break;
			case bitmarkParser.BitIntlink:
			case bitmarkParser.BitIntRef:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 324;
				this.internal_link();
				}
				break;
			case bitmarkParser.OPDANGLE:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 325;
				this.anchor();
				}
				break;
			case bitmarkParser.BitGroups:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 326;
				this.group_born();
				}
				break;
			case bitmarkParser.BitGroupt:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 327;
				this.group_died();
				}
				break;
			case bitmarkParser.BitEssay:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 328;
				this.essay();
				}
				break;
			case bitmarkParser.BitCorrection:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 329;
				this.correction();
				}
				break;
			case bitmarkParser.BitMark:
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 330;
				this.mark_();
				}
				break;
			case bitmarkParser.BitDocup:
				this.enterOuterAlt(_localctx, 13);
				{
				this.state = 331;
				this.document_upload();
				}
				break;
			case bitmarkParser.BitTakepic:
				this.enterOuterAlt(_localctx, 14);
				{
				this.state = 332;
				this.take_picture();
				}
				break;
			case bitmarkParser.BitRecaud:
				this.enterOuterAlt(_localctx, 15);
				{
				this.state = 333;
				this.record_audio();
				}
				break;
			case bitmarkParser.BitPrepnote:
				this.enterOuterAlt(_localctx, 16);
				{
				this.state = 334;
				this.preparation_note();
				}
				break;
			case bitmarkParser.BitAssign:
				this.enterOuterAlt(_localctx, 17);
				{
				this.state = 335;
				this.assignment();
				}
				break;
			case bitmarkParser.BitArticle:
				this.enterOuterAlt(_localctx, 18);
				{
				this.state = 336;
				this.article();
				}
				break;
			case bitmarkParser.BitStatement:
				this.enterOuterAlt(_localctx, 19);
				{
				this.state = 337;
				this.statement();
				}
				break;
			case bitmarkParser.BitDetails:
				this.enterOuterAlt(_localctx, 20);
				{
				this.state = 338;
				this.details();
				}
				break;
			case bitmarkParser.BitButtonCopytext:
				this.enterOuterAlt(_localctx, 21);
				{
				this.state = 339;
				this.buttoncopytext();
				}
				break;
			case bitmarkParser.BitWbtContinue:
				this.enterOuterAlt(_localctx, 22);
				{
				this.state = 340;
				this.wbtcontinue();
				}
				break;
			case bitmarkParser.BitLearningPathDetails:
				this.enterOuterAlt(_localctx, 23);
				{
				this.state = 341;
				this.learningpathdetails();
				}
				break;
			case bitmarkParser.BitNote:
				this.enterOuterAlt(_localctx, 24);
				{
				this.state = 342;
				this.note();
				}
				break;
			case bitmarkParser.BitInfo:
				this.enterOuterAlt(_localctx, 25);
				{
				this.state = 343;
				this.info();
				}
				break;
			case bitmarkParser.BitWarning:
				this.enterOuterAlt(_localctx, 26);
				{
				this.state = 344;
				this.warning();
				}
				break;
			case bitmarkParser.BitRemark:
				this.enterOuterAlt(_localctx, 27);
				{
				this.state = 345;
				this.remark();
				}
				break;
			case bitmarkParser.BitHint:
				this.enterOuterAlt(_localctx, 28);
				{
				this.state = 346;
				this.hintbit();
				}
				break;
			case bitmarkParser.BitHelp:
				this.enterOuterAlt(_localctx, 29);
				{
				this.state = 347;
				this.help();
				}
				break;
			case bitmarkParser.BitDanger:
				this.enterOuterAlt(_localctx, 30);
				{
				this.state = 348;
				this.danger();
				}
				break;
			case bitmarkParser.BitBug:
				this.enterOuterAlt(_localctx, 31);
				{
				this.state = 349;
				this.bug();
				}
				break;
			case bitmarkParser.BitSidenote:
				this.enterOuterAlt(_localctx, 32);
				{
				this.state = 350;
				this.sidenote();
				}
				break;
			case bitmarkParser.BitStickynote:
				this.enterOuterAlt(_localctx, 33);
				{
				this.state = 351;
				this.stickynote();
				}
				break;
			case bitmarkParser.BitQuote:
				this.enterOuterAlt(_localctx, 34);
				{
				this.state = 352;
				this.quote();
				}
				break;
			case bitmarkParser.BitFootnote:
				this.enterOuterAlt(_localctx, 35);
				{
				this.state = 353;
				this.footnote();
				}
				break;
			case bitmarkParser.BitExample:
				this.enterOuterAlt(_localctx, 36);
				{
				this.state = 354;
				this.examplebit();
				}
				break;
			case bitmarkParser.BitPage:
				this.enterOuterAlt(_localctx, 37);
				{
				this.state = 355;
				this.page();
				}
				break;
			case bitmarkParser.BitMessage:
				this.enterOuterAlt(_localctx, 38);
				{
				this.state = 356;
				this.message();
				}
				break;
			case bitmarkParser.BitBotint:
				this.enterOuterAlt(_localctx, 39);
				{
				this.state = 357;
				this.bot_interview();
				}
				break;
			case bitmarkParser.BitSelfassess:
				this.enterOuterAlt(_localctx, 40);
				{
				this.state = 358;
				this.self_assessment();
				}
				break;
			case bitmarkParser.BitRating:
				this.enterOuterAlt(_localctx, 41);
				{
				this.state = 359;
				this.rating();
				}
				break;
			case bitmarkParser.BitSurvey:
				this.enterOuterAlt(_localctx, 42);
				{
				this.state = 360;
				this.survey();
				}
				break;
			case bitmarkParser.BitSurvey1:
				this.enterOuterAlt(_localctx, 43);
				{
				this.state = 361;
				this.survey_1();
				}
				break;
			case bitmarkParser.BitSurveyanon:
				this.enterOuterAlt(_localctx, 44);
				{
				this.state = 362;
				this.survey_anonymous();
				}
				break;
			case bitmarkParser.BitSurveyanon1:
				this.enterOuterAlt(_localctx, 45);
				{
				this.state = 363;
				this.survey_anonymous_1();
				}
				break;
			case bitmarkParser.OPQ:
				this.enterOuterAlt(_localctx, 46);
				{
				this.state = 364;
				this.hint();
				}
				break;
			case bitmarkParser.BitLearningPathLti:
				this.enterOuterAlt(_localctx, 47);
				{
				this.state = 365;
				this.learning_path_lti();
				}
				break;
			case bitmarkParser.BitLearningPathStep:
				this.enterOuterAlt(_localctx, 48);
				{
				this.state = 366;
				this.learning_path_step();
				}
				break;
			case bitmarkParser.BitLearningPathBook:
				this.enterOuterAlt(_localctx, 49);
				{
				this.state = 367;
				this.learning_path_book();
				}
				break;
			case bitmarkParser.BitLearningPathSign:
				this.enterOuterAlt(_localctx, 50);
				{
				this.state = 368;
				this.learning_path_sign();
				}
				break;
			case bitmarkParser.BitLearningPathVideoCall:
				this.enterOuterAlt(_localctx, 51);
				{
				this.state = 369;
				this.learning_path_video_call();
				}
				break;
			case bitmarkParser.BitLearningPathLearningGoal:
				this.enterOuterAlt(_localctx, 52);
				{
				this.state = 370;
				this.learning_path_learning_goal();
				}
				break;
			case bitmarkParser.BitLearningPathClosing:
				this.enterOuterAlt(_localctx, 53);
				{
				this.state = 371;
				this.learning_path_closing();
				}
				break;
			case bitmarkParser.BitLearningPathFeedback:
				this.enterOuterAlt(_localctx, 54);
				{
				this.state = 372;
				this.learning_path_feedback();
				}
				break;
			case bitmarkParser.BitLearningPathBotTraining:
				this.enterOuterAlt(_localctx, 55);
				{
				this.state = 373;
				this.learning_path_bot_training();
				}
				break;
			case bitmarkParser.BitLearningPathExternalLink:
				this.enterOuterAlt(_localctx, 56);
				{
				this.state = 374;
				this.learning_path_external_link();
				}
				break;
			case bitmarkParser.BitLearningPathClassroomTraining:
				this.enterOuterAlt(_localctx, 57);
				{
				this.state = 375;
				this.learning_path_classroom_training();
				}
				break;
			case bitmarkParser.BitLearningPathClassroomEvent:
				this.enterOuterAlt(_localctx, 58);
				{
				this.state = 376;
				this.learning_path_classroom_event();
				}
				break;
			case bitmarkParser.BitBotActionSend:
				this.enterOuterAlt(_localctx, 59);
				{
				this.state = 377;
				this.bot_action_send();
				}
				break;
			case bitmarkParser.BitBotActionAnnounce:
				this.enterOuterAlt(_localctx, 60);
				{
				this.state = 378;
				this.bot_action_announce();
				}
				break;
			case bitmarkParser.BitBotActionSave:
				this.enterOuterAlt(_localctx, 61);
				{
				this.state = 379;
				this.bot_action_save();
				}
				break;
			case bitmarkParser.BitBotActionRemind:
				this.enterOuterAlt(_localctx, 62);
				{
				this.state = 380;
				this.bot_action_remind();
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
	public book(): BookContext {
		let _localctx: BookContext = new BookContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, bitmarkParser.RULE_book);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 383;
			this.match(bitmarkParser.BitBook);
			this.state = 385;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 6, this._ctx) ) {
			case 1:
				{
				this.state = 384;
				this.format();
				}
				break;
			}
			this.state = 387;
			this.match(bitmarkParser.CL);
			this.state = 395;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 391;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === bitmarkParser.NL) {
						{
						{
						this.state = 388;
						this.match(bitmarkParser.NL);
						}
						}
						this.state = 393;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					this.state = 394;
					this.bitElem();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 397;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 8, this._ctx);
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
	public chapter(): ChapterContext {
		let _localctx: ChapterContext = new ChapterContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, bitmarkParser.RULE_chapter);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 399;
			this.match(bitmarkParser.BitChapter);
			this.state = 401;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 9, this._ctx) ) {
			case 1:
				{
				this.state = 400;
				this.format();
				}
				break;
			}
			this.state = 403;
			this.match(bitmarkParser.CL);
			this.state = 407;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === bitmarkParser.NL) {
				{
				{
				this.state = 404;
				this.match(bitmarkParser.NL);
				}
				}
				this.state = 409;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 413;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 11, this._ctx) ) {
			case 1:
				{
				this.state = 410;
				this.anchor();
				this.state = 411;
				this.match(bitmarkParser.NL);
				}
				break;
			}
			this.state = 415;
			this.resource();
			this.state = 425;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 13, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 419;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === bitmarkParser.NL) {
						{
						{
						this.state = 416;
						this.match(bitmarkParser.NL);
						}
						}
						this.state = 421;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					this.state = 422;
					this.resource();
					}
					}
				}
				this.state = 427;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 13, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public toc(): TocContext {
		let _localctx: TocContext = new TocContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, bitmarkParser.RULE_toc);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 428;
			this.match(bitmarkParser.BitToc);
			this.state = 430;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === bitmarkParser.S || ((((_la - 75)) & ~0x1F) === 0 && ((1 << (_la - 75)) & ((1 << (bitmarkParser.OPESC - 75)) | (1 << (bitmarkParser.OPS - 75)) | (1 << (bitmarkParser.COLON - 75)) | (1 << (bitmarkParser.AMP - 75)) | (1 << (bitmarkParser.Greater - 75)) | (1 << (bitmarkParser.Less - 75)) | (1 << (bitmarkParser.RightAngle - 75)) | (1 << (bitmarkParser.RightArrow - 75)) | (1 << (bitmarkParser.DBLEQ - 75)) | (1 << (bitmarkParser.QUOTE_INDEX - 75)))) !== 0) || ((((_la - 108)) & ~0x1F) === 0 && ((1 << (_la - 108)) & ((1 << (bitmarkParser.NUMERIC - 108)) | (1 << (bitmarkParser.STRING - 108)) | (1 << (bitmarkParser.SENTENCE - 108)))) !== 0) || ((((_la - 140)) & ~0x1F) === 0 && ((1 << (_la - 140)) & ((1 << (bitmarkParser.AmpAudio - 140)) | (1 << (bitmarkParser.AmpImage - 140)) | (1 << (bitmarkParser.AmpVideo - 140)) | (1 << (bitmarkParser.AmpArticle - 140)) | (1 << (bitmarkParser.AmpDocument - 140)) | (1 << (bitmarkParser.AmpApp - 140)) | (1 << (bitmarkParser.AmpWebsite - 140)) | (1 << (bitmarkParser.AmpStillImageFilm - 140)) | (1 << (bitmarkParser.AmpAudioLink - 140)) | (1 << (bitmarkParser.AmpImageLink - 140)) | (1 << (bitmarkParser.AmpVideoLink - 140)) | (1 << (bitmarkParser.AmpArticleLink - 140)) | (1 << (bitmarkParser.AmpDocumentLink - 140)) | (1 << (bitmarkParser.AmpAppLink - 140)) | (1 << (bitmarkParser.AmpWebsiteLink - 140)) | (1 << (bitmarkParser.AmpStillImageFilmLink - 140)))) !== 0) || ((((_la - 179)) & ~0x1F) === 0 && ((1 << (_la - 179)) & ((1 << (bitmarkParser.BitmarkMinus - 179)) | (1 << (bitmarkParser.BitmarkPlus - 179)) | (1 << (bitmarkParser.URL - 179)))) !== 0)) {
				{
				this.state = 429;
				this.s_and_w();
				}
			}

			this.state = 432;
			this.match(bitmarkParser.CL);
			this.state = 433;
			this.match(bitmarkParser.NL);
			this.state = 437;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === bitmarkParser.OPA || _la === bitmarkParser.OpAtCopyright) {
				{
				this.state = 434;
				this.atdef();
				this.state = 435;
				this.match(bitmarkParser.NL);
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
	public summary(): SummaryContext {
		let _localctx: SummaryContext = new SummaryContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, bitmarkParser.RULE_summary);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 439;
			this.match(bitmarkParser.BitSummary);
			this.state = 440;
			this.match(bitmarkParser.CL);
			this.state = 444;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 16, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 441;
					this.match(bitmarkParser.NL);
					}
					}
				}
				this.state = 446;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 16, this._ctx);
			}
			this.state = 447;
			this.title_etc();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public internal_link(): Internal_linkContext {
		let _localctx: Internal_linkContext = new Internal_linkContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, bitmarkParser.RULE_internal_link);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 449;
			_la = this._input.LA(1);
			if (!(_la === bitmarkParser.BitIntlink || _la === bitmarkParser.BitIntRef)) {
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
			if (_la === bitmarkParser.BitmarkMinus || _la === bitmarkParser.BitmarkPlus) {
				{
				this.state = 450;
				_la = this._input.LA(1);
				if (!(_la === bitmarkParser.BitmarkMinus || _la === bitmarkParser.BitmarkPlus)) {
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

			this.state = 453;
			this.match(bitmarkParser.CL);
			this.state = 463;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 19, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 457;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === bitmarkParser.NL) {
						{
						{
						this.state = 454;
						this.match(bitmarkParser.NL);
						}
						}
						this.state = 459;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					this.state = 460;
					this.bitElem();
					}
					}
				}
				this.state = 465;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 19, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public bit_alias(): Bit_aliasContext {
		let _localctx: Bit_aliasContext = new Bit_aliasContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, bitmarkParser.RULE_bit_alias);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 466;
			this.match(bitmarkParser.BitAlias);
			this.state = 467;
			this.match(bitmarkParser.CL);
			this.state = 468;
			this.angleref();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public title_etc(): Title_etcContext {
		let _localctx: Title_etcContext = new Title_etcContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, bitmarkParser.RULE_title_etc);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 484;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 22, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 471;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === bitmarkParser.NL) {
						{
						this.state = 470;
						this.match(bitmarkParser.NL);
						}
					}

					this.state = 480;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case bitmarkParser.OPHASH:
						{
						this.state = 473;
						this.title();
						}
						break;
					case bitmarkParser.OPA:
					case bitmarkParser.OpAtCopyright:
						{
						this.state = 474;
						this.atdef();
						}
						break;
					case bitmarkParser.OPC:
						{
						this.state = 475;
						this.item();
						}
						break;
					case bitmarkParser.OPB:
						{
						this.state = 476;
						this.instruction();
						}
						break;
					case bitmarkParser.OPRANGLES:
					case bitmarkParser.OPRANGLEL:
						{
						this.state = 477;
						this.angleref();
						}
						break;
					case bitmarkParser.OPDANGLE:
						{
						this.state = 478;
						this.anchor();
						}
						break;
					case bitmarkParser.AtProgress:
						{
						this.state = 479;
						this.progress();
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					}
					}
				}
				this.state = 486;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 22, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public group_born(): Group_bornContext {
		let _localctx: Group_bornContext = new Group_bornContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, bitmarkParser.RULE_group_born);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 487;
			this.match(bitmarkParser.BitGroups);
			this.state = 488;
			this.match(bitmarkParser.CL);
			this.state = 498;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 489;
					this.match(bitmarkParser.NL);
					this.state = 490;
					_la = this._input.LA(1);
					if (!(_la === bitmarkParser.OPR || _la === bitmarkParser.OPHASH)) {
					this._errHandler.recoverInline(this);
					} else {
						if (this._input.LA(1) === Token.EOF) {
							this.matchedEOF = true;
						}

						this._errHandler.reportMatch(this);
						this.consume();
					}
					this.state = 493;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					do {
						{
						this.state = 493;
						this._errHandler.sync(this);
						switch ( this.interpreter.adaptivePredict(this._input, 23, this._ctx) ) {
						case 1:
							{
							this.state = 491;
							this.s_and_w();
							}
							break;

						case 2:
							{
							this.state = 492;
							this.match(bitmarkParser.COLON);
							}
							break;
						}
						}
						this.state = 495;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					} while (_la === bitmarkParser.S || ((((_la - 75)) & ~0x1F) === 0 && ((1 << (_la - 75)) & ((1 << (bitmarkParser.OPESC - 75)) | (1 << (bitmarkParser.OPS - 75)) | (1 << (bitmarkParser.COLON - 75)) | (1 << (bitmarkParser.AMP - 75)) | (1 << (bitmarkParser.Greater - 75)) | (1 << (bitmarkParser.Less - 75)) | (1 << (bitmarkParser.RightAngle - 75)) | (1 << (bitmarkParser.RightArrow - 75)) | (1 << (bitmarkParser.DBLEQ - 75)) | (1 << (bitmarkParser.QUOTE_INDEX - 75)))) !== 0) || ((((_la - 108)) & ~0x1F) === 0 && ((1 << (_la - 108)) & ((1 << (bitmarkParser.NUMERIC - 108)) | (1 << (bitmarkParser.STRING - 108)) | (1 << (bitmarkParser.SENTENCE - 108)))) !== 0) || ((((_la - 140)) & ~0x1F) === 0 && ((1 << (_la - 140)) & ((1 << (bitmarkParser.AmpAudio - 140)) | (1 << (bitmarkParser.AmpImage - 140)) | (1 << (bitmarkParser.AmpVideo - 140)) | (1 << (bitmarkParser.AmpArticle - 140)) | (1 << (bitmarkParser.AmpDocument - 140)) | (1 << (bitmarkParser.AmpApp - 140)) | (1 << (bitmarkParser.AmpWebsite - 140)) | (1 << (bitmarkParser.AmpStillImageFilm - 140)) | (1 << (bitmarkParser.AmpAudioLink - 140)) | (1 << (bitmarkParser.AmpImageLink - 140)) | (1 << (bitmarkParser.AmpVideoLink - 140)) | (1 << (bitmarkParser.AmpArticleLink - 140)) | (1 << (bitmarkParser.AmpDocumentLink - 140)) | (1 << (bitmarkParser.AmpAppLink - 140)) | (1 << (bitmarkParser.AmpWebsiteLink - 140)) | (1 << (bitmarkParser.AmpStillImageFilmLink - 140)))) !== 0) || ((((_la - 179)) & ~0x1F) === 0 && ((1 << (_la - 179)) & ((1 << (bitmarkParser.BitmarkMinus - 179)) | (1 << (bitmarkParser.BitmarkPlus - 179)) | (1 << (bitmarkParser.URL - 179)))) !== 0));
					this.state = 497;
					this.match(bitmarkParser.CL);
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 500;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 25, this._ctx);
			} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
			this.state = 502;
			this.match(bitmarkParser.NL);
			this.state = 506;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 26, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 503;
					this.lines();
					}
					}
				}
				this.state = 508;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 26, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public group_died(): Group_diedContext {
		let _localctx: Group_diedContext = new Group_diedContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, bitmarkParser.RULE_group_died);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 509;
			this.match(bitmarkParser.BitGroupt);
			this.state = 510;
			this.match(bitmarkParser.CL);
			this.state = 520;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 511;
					this.match(bitmarkParser.NL);
					this.state = 512;
					_la = this._input.LA(1);
					if (!(_la === bitmarkParser.OPR || _la === bitmarkParser.OPHASH)) {
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
					_la = this._input.LA(1);
					do {
						{
						this.state = 515;
						this._errHandler.sync(this);
						switch ( this.interpreter.adaptivePredict(this._input, 27, this._ctx) ) {
						case 1:
							{
							this.state = 513;
							this.s_and_w();
							}
							break;

						case 2:
							{
							this.state = 514;
							this.match(bitmarkParser.COLON);
							}
							break;
						}
						}
						this.state = 517;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					} while (_la === bitmarkParser.S || ((((_la - 75)) & ~0x1F) === 0 && ((1 << (_la - 75)) & ((1 << (bitmarkParser.OPESC - 75)) | (1 << (bitmarkParser.OPS - 75)) | (1 << (bitmarkParser.COLON - 75)) | (1 << (bitmarkParser.AMP - 75)) | (1 << (bitmarkParser.Greater - 75)) | (1 << (bitmarkParser.Less - 75)) | (1 << (bitmarkParser.RightAngle - 75)) | (1 << (bitmarkParser.RightArrow - 75)) | (1 << (bitmarkParser.DBLEQ - 75)) | (1 << (bitmarkParser.QUOTE_INDEX - 75)))) !== 0) || ((((_la - 108)) & ~0x1F) === 0 && ((1 << (_la - 108)) & ((1 << (bitmarkParser.NUMERIC - 108)) | (1 << (bitmarkParser.STRING - 108)) | (1 << (bitmarkParser.SENTENCE - 108)))) !== 0) || ((((_la - 140)) & ~0x1F) === 0 && ((1 << (_la - 140)) & ((1 << (bitmarkParser.AmpAudio - 140)) | (1 << (bitmarkParser.AmpImage - 140)) | (1 << (bitmarkParser.AmpVideo - 140)) | (1 << (bitmarkParser.AmpArticle - 140)) | (1 << (bitmarkParser.AmpDocument - 140)) | (1 << (bitmarkParser.AmpApp - 140)) | (1 << (bitmarkParser.AmpWebsite - 140)) | (1 << (bitmarkParser.AmpStillImageFilm - 140)) | (1 << (bitmarkParser.AmpAudioLink - 140)) | (1 << (bitmarkParser.AmpImageLink - 140)) | (1 << (bitmarkParser.AmpVideoLink - 140)) | (1 << (bitmarkParser.AmpArticleLink - 140)) | (1 << (bitmarkParser.AmpDocumentLink - 140)) | (1 << (bitmarkParser.AmpAppLink - 140)) | (1 << (bitmarkParser.AmpWebsiteLink - 140)) | (1 << (bitmarkParser.AmpStillImageFilmLink - 140)))) !== 0) || ((((_la - 179)) & ~0x1F) === 0 && ((1 << (_la - 179)) & ((1 << (bitmarkParser.BitmarkMinus - 179)) | (1 << (bitmarkParser.BitmarkPlus - 179)) | (1 << (bitmarkParser.URL - 179)))) !== 0));
					this.state = 519;
					this.match(bitmarkParser.CL);
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 522;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 29, this._ctx);
			} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
			this.state = 524;
			this.match(bitmarkParser.NL);
			this.state = 528;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 30, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 525;
					this.lines();
					}
					}
				}
				this.state = 530;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 30, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public learning_path_lti(): Learning_path_ltiContext {
		let _localctx: Learning_path_ltiContext = new Learning_path_ltiContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, bitmarkParser.RULE_learning_path_lti);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 531;
			this.match(bitmarkParser.BitLearningPathLti);
			this.state = 532;
			this.format();
			this.state = 533;
			this.match(bitmarkParser.CL);
			this.state = 537;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === bitmarkParser.NL) {
				{
				{
				this.state = 534;
				this.match(bitmarkParser.NL);
				}
				}
				this.state = 539;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 547;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 540;
					this.bitElem();
					this.state = 544;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 32, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 541;
							this.match(bitmarkParser.NL);
							}
							}
						}
						this.state = 546;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 32, this._ctx);
					}
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 549;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 33, this._ctx);
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
	public learning_path_step(): Learning_path_stepContext {
		let _localctx: Learning_path_stepContext = new Learning_path_stepContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, bitmarkParser.RULE_learning_path_step);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 551;
			this.match(bitmarkParser.BitLearningPathStep);
			this.state = 552;
			this.format();
			this.state = 553;
			this.match(bitmarkParser.CL);
			this.state = 557;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === bitmarkParser.NL) {
				{
				{
				this.state = 554;
				this.match(bitmarkParser.NL);
				}
				}
				this.state = 559;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 567;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 560;
					this.bitElem();
					this.state = 564;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 35, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 561;
							this.match(bitmarkParser.NL);
							}
							}
						}
						this.state = 566;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 35, this._ctx);
					}
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 569;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 36, this._ctx);
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
	public learning_path_book(): Learning_path_bookContext {
		let _localctx: Learning_path_bookContext = new Learning_path_bookContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, bitmarkParser.RULE_learning_path_book);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 571;
			this.match(bitmarkParser.BitLearningPathBook);
			this.state = 572;
			this.format();
			this.state = 573;
			this.match(bitmarkParser.CL);
			this.state = 577;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === bitmarkParser.NL) {
				{
				{
				this.state = 574;
				this.match(bitmarkParser.NL);
				}
				}
				this.state = 579;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 587;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 580;
					this.bitElem();
					this.state = 584;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 38, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 581;
							this.match(bitmarkParser.NL);
							}
							}
						}
						this.state = 586;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 38, this._ctx);
					}
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 589;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 39, this._ctx);
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
	public learning_path_sign(): Learning_path_signContext {
		let _localctx: Learning_path_signContext = new Learning_path_signContext(this._ctx, this.state);
		this.enterRule(_localctx, 30, bitmarkParser.RULE_learning_path_sign);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 591;
			this.match(bitmarkParser.BitLearningPathSign);
			this.state = 592;
			this.format();
			this.state = 593;
			this.match(bitmarkParser.CL);
			this.state = 597;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === bitmarkParser.NL) {
				{
				{
				this.state = 594;
				this.match(bitmarkParser.NL);
				}
				}
				this.state = 599;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 607;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 600;
					this.bitElem();
					this.state = 604;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 41, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 601;
							this.match(bitmarkParser.NL);
							}
							}
						}
						this.state = 606;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 41, this._ctx);
					}
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 609;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 42, this._ctx);
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
	public learning_path_video_call(): Learning_path_video_callContext {
		let _localctx: Learning_path_video_callContext = new Learning_path_video_callContext(this._ctx, this.state);
		this.enterRule(_localctx, 32, bitmarkParser.RULE_learning_path_video_call);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 611;
			this.match(bitmarkParser.BitLearningPathVideoCall);
			this.state = 612;
			this.format();
			this.state = 613;
			this.match(bitmarkParser.CL);
			this.state = 617;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === bitmarkParser.NL) {
				{
				{
				this.state = 614;
				this.match(bitmarkParser.NL);
				}
				}
				this.state = 619;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 627;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 620;
					this.bitElem();
					this.state = 624;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 44, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 621;
							this.match(bitmarkParser.NL);
							}
							}
						}
						this.state = 626;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 44, this._ctx);
					}
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 629;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 45, this._ctx);
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
	public learning_path_learning_goal(): Learning_path_learning_goalContext {
		let _localctx: Learning_path_learning_goalContext = new Learning_path_learning_goalContext(this._ctx, this.state);
		this.enterRule(_localctx, 34, bitmarkParser.RULE_learning_path_learning_goal);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 631;
			this.match(bitmarkParser.BitLearningPathLearningGoal);
			this.state = 632;
			this.format();
			this.state = 633;
			this.match(bitmarkParser.CL);
			this.state = 637;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === bitmarkParser.NL) {
				{
				{
				this.state = 634;
				this.match(bitmarkParser.NL);
				}
				}
				this.state = 639;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 647;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 640;
					this.bitElem();
					this.state = 644;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 47, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 641;
							this.match(bitmarkParser.NL);
							}
							}
						}
						this.state = 646;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 47, this._ctx);
					}
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 649;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 48, this._ctx);
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
	public learning_path_closing(): Learning_path_closingContext {
		let _localctx: Learning_path_closingContext = new Learning_path_closingContext(this._ctx, this.state);
		this.enterRule(_localctx, 36, bitmarkParser.RULE_learning_path_closing);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 651;
			this.match(bitmarkParser.BitLearningPathClosing);
			this.state = 652;
			this.format();
			this.state = 653;
			this.match(bitmarkParser.CL);
			this.state = 657;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === bitmarkParser.NL) {
				{
				{
				this.state = 654;
				this.match(bitmarkParser.NL);
				}
				}
				this.state = 659;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 667;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 660;
					this.bitElem();
					this.state = 664;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 50, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 661;
							this.match(bitmarkParser.NL);
							}
							}
						}
						this.state = 666;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 50, this._ctx);
					}
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 669;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 51, this._ctx);
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
	public learning_path_feedback(): Learning_path_feedbackContext {
		let _localctx: Learning_path_feedbackContext = new Learning_path_feedbackContext(this._ctx, this.state);
		this.enterRule(_localctx, 38, bitmarkParser.RULE_learning_path_feedback);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 671;
			this.match(bitmarkParser.BitLearningPathFeedback);
			this.state = 672;
			this.format();
			this.state = 673;
			this.match(bitmarkParser.CL);
			this.state = 677;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === bitmarkParser.NL) {
				{
				{
				this.state = 674;
				this.match(bitmarkParser.NL);
				}
				}
				this.state = 679;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 687;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 680;
					this.bitElem();
					this.state = 684;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 53, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 681;
							this.match(bitmarkParser.NL);
							}
							}
						}
						this.state = 686;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 53, this._ctx);
					}
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 689;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 54, this._ctx);
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
	public learning_path_bot_training(): Learning_path_bot_trainingContext {
		let _localctx: Learning_path_bot_trainingContext = new Learning_path_bot_trainingContext(this._ctx, this.state);
		this.enterRule(_localctx, 40, bitmarkParser.RULE_learning_path_bot_training);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 691;
			this.match(bitmarkParser.BitLearningPathBotTraining);
			this.state = 692;
			this.format();
			this.state = 693;
			this.match(bitmarkParser.CL);
			this.state = 697;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === bitmarkParser.NL) {
				{
				{
				this.state = 694;
				this.match(bitmarkParser.NL);
				}
				}
				this.state = 699;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 707;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 700;
					this.bitElem();
					this.state = 704;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 56, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 701;
							this.match(bitmarkParser.NL);
							}
							}
						}
						this.state = 706;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 56, this._ctx);
					}
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 709;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 57, this._ctx);
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
	public learning_path_external_link(): Learning_path_external_linkContext {
		let _localctx: Learning_path_external_linkContext = new Learning_path_external_linkContext(this._ctx, this.state);
		this.enterRule(_localctx, 42, bitmarkParser.RULE_learning_path_external_link);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 711;
			this.match(bitmarkParser.BitLearningPathExternalLink);
			this.state = 712;
			this.format();
			this.state = 713;
			this.match(bitmarkParser.CL);
			this.state = 717;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === bitmarkParser.NL) {
				{
				{
				this.state = 714;
				this.match(bitmarkParser.NL);
				}
				}
				this.state = 719;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 727;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 720;
					this.bitElem();
					this.state = 724;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 59, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 721;
							this.match(bitmarkParser.NL);
							}
							}
						}
						this.state = 726;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 59, this._ctx);
					}
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 729;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 60, this._ctx);
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
	public learning_path_classroom_training(): Learning_path_classroom_trainingContext {
		let _localctx: Learning_path_classroom_trainingContext = new Learning_path_classroom_trainingContext(this._ctx, this.state);
		this.enterRule(_localctx, 44, bitmarkParser.RULE_learning_path_classroom_training);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 731;
			this.match(bitmarkParser.BitLearningPathClassroomTraining);
			this.state = 732;
			this.format();
			this.state = 733;
			this.match(bitmarkParser.CL);
			this.state = 737;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === bitmarkParser.NL) {
				{
				{
				this.state = 734;
				this.match(bitmarkParser.NL);
				}
				}
				this.state = 739;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 747;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 740;
					this.bitElem();
					this.state = 744;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 62, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 741;
							this.match(bitmarkParser.NL);
							}
							}
						}
						this.state = 746;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 62, this._ctx);
					}
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 749;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 63, this._ctx);
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
	public learning_path_classroom_event(): Learning_path_classroom_eventContext {
		let _localctx: Learning_path_classroom_eventContext = new Learning_path_classroom_eventContext(this._ctx, this.state);
		this.enterRule(_localctx, 46, bitmarkParser.RULE_learning_path_classroom_event);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 751;
			this.match(bitmarkParser.BitLearningPathClassroomEvent);
			this.state = 752;
			this.format();
			this.state = 753;
			this.match(bitmarkParser.CL);
			this.state = 757;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === bitmarkParser.NL) {
				{
				{
				this.state = 754;
				this.match(bitmarkParser.NL);
				}
				}
				this.state = 759;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 767;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 760;
					this.bitElem();
					this.state = 764;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 65, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 761;
							this.match(bitmarkParser.NL);
							}
							}
						}
						this.state = 766;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 65, this._ctx);
					}
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 769;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 66, this._ctx);
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
	public bot_action_send(): Bot_action_sendContext {
		let _localctx: Bot_action_sendContext = new Bot_action_sendContext(this._ctx, this.state);
		this.enterRule(_localctx, 48, bitmarkParser.RULE_bot_action_send);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 771;
			this.match(bitmarkParser.BitBotActionSend);
			this.state = 772;
			this.format();
			this.state = 773;
			this.match(bitmarkParser.CL);
			this.state = 777;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === bitmarkParser.NL) {
				{
				{
				this.state = 774;
				this.match(bitmarkParser.NL);
				}
				}
				this.state = 779;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 787;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 780;
					this.bitElem();
					this.state = 784;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 68, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 781;
							this.match(bitmarkParser.NL);
							}
							}
						}
						this.state = 786;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 68, this._ctx);
					}
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 789;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 69, this._ctx);
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
	public bot_action_announce(): Bot_action_announceContext {
		let _localctx: Bot_action_announceContext = new Bot_action_announceContext(this._ctx, this.state);
		this.enterRule(_localctx, 50, bitmarkParser.RULE_bot_action_announce);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 791;
			this.match(bitmarkParser.BitBotActionAnnounce);
			this.state = 792;
			this.format();
			this.state = 793;
			this.match(bitmarkParser.CL);
			this.state = 797;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === bitmarkParser.NL) {
				{
				{
				this.state = 794;
				this.match(bitmarkParser.NL);
				}
				}
				this.state = 799;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 807;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 800;
					this.bitElem();
					this.state = 804;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 71, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 801;
							this.match(bitmarkParser.NL);
							}
							}
						}
						this.state = 806;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 71, this._ctx);
					}
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 809;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 72, this._ctx);
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
	public bot_action_save(): Bot_action_saveContext {
		let _localctx: Bot_action_saveContext = new Bot_action_saveContext(this._ctx, this.state);
		this.enterRule(_localctx, 52, bitmarkParser.RULE_bot_action_save);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 811;
			this.match(bitmarkParser.BitBotActionSave);
			this.state = 812;
			this.format();
			this.state = 813;
			this.match(bitmarkParser.CL);
			this.state = 817;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === bitmarkParser.NL) {
				{
				{
				this.state = 814;
				this.match(bitmarkParser.NL);
				}
				}
				this.state = 819;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 827;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 820;
					this.bitElem();
					this.state = 824;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 74, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 821;
							this.match(bitmarkParser.NL);
							}
							}
						}
						this.state = 826;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 74, this._ctx);
					}
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 829;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 75, this._ctx);
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
	public bot_action_remind(): Bot_action_remindContext {
		let _localctx: Bot_action_remindContext = new Bot_action_remindContext(this._ctx, this.state);
		this.enterRule(_localctx, 54, bitmarkParser.RULE_bot_action_remind);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 831;
			this.match(bitmarkParser.BitBotActionRemind);
			this.state = 832;
			this.format();
			this.state = 833;
			this.match(bitmarkParser.CL);
			this.state = 837;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === bitmarkParser.NL) {
				{
				{
				this.state = 834;
				this.match(bitmarkParser.NL);
				}
				}
				this.state = 839;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 847;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 840;
					this.bitElem();
					this.state = 844;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 77, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 841;
							this.match(bitmarkParser.NL);
							}
							}
						}
						this.state = 846;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 77, this._ctx);
					}
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 849;
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
	public bitElem(): BitElemContext {
		let _localctx: BitElemContext = new BitElemContext(this._ctx, this.state);
		this.enterRule(_localctx, 56, bitmarkParser.RULE_bitElem);
		try {
			this.state = 882;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 79, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 851;
				this.match(bitmarkParser.LIST_LINE);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 852;
				this.dclines();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 853;
				this.gap();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 854;
				this.reference();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 855;
				this.dateprop();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 856;
				this.progress();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 857;
				this.atdef();
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 858;
				this.dollarans();
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 859;
				this.partans();
				}
				break;

			case 10:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 860;
				this.item();
				}
				break;

			case 11:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 861;
				this.title();
				}
				break;

			case 12:
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 862;
				this.instruction();
				}
				break;

			case 13:
				this.enterOuterAlt(_localctx, 13);
				{
				this.state = 863;
				this.hint();
				}
				break;

			case 14:
				this.enterOuterAlt(_localctx, 14);
				{
				this.state = 864;
				this.s_and_w();
				}
				break;

			case 15:
				this.enterOuterAlt(_localctx, 15);
				{
				this.state = 865;
				this.example();
				}
				break;

			case 16:
				this.enterOuterAlt(_localctx, 16);
				{
				this.state = 866;
				this.bool_label();
				}
				break;

			case 17:
				this.enterOuterAlt(_localctx, 17);
				{
				this.state = 867;
				this.progress_points();
				}
				break;

			case 18:
				this.enterOuterAlt(_localctx, 18);
				{
				this.state = 868;
				this.istracked();
				}
				break;

			case 19:
				this.enterOuterAlt(_localctx, 19);
				{
				this.state = 869;
				this.isinfoonly();
				}
				break;

			case 20:
				this.enterOuterAlt(_localctx, 20);
				{
				this.state = 870;
				this.imagebit();
				}
				break;

			case 21:
				this.enterOuterAlt(_localctx, 21);
				{
				this.state = 871;
				this.audiobit();
				}
				break;

			case 22:
				this.enterOuterAlt(_localctx, 22);
				{
				this.state = 872;
				this.videobit();
				}
				break;

			case 23:
				this.enterOuterAlt(_localctx, 23);
				{
				this.state = 873;
				this.articlebit();
				}
				break;

			case 24:
				this.enterOuterAlt(_localctx, 24);
				{
				this.state = 874;
				this.documentbit();
				}
				break;

			case 25:
				this.enterOuterAlt(_localctx, 25);
				{
				this.state = 875;
				this.appbit();
				}
				break;

			case 26:
				this.enterOuterAlt(_localctx, 26);
				{
				this.state = 876;
				this.websitebit();
				}
				break;

			case 27:
				this.enterOuterAlt(_localctx, 27);
				{
				this.state = 877;
				this.stillimagefilmbit();
				}
				break;

			case 28:
				this.enterOuterAlt(_localctx, 28);
				{
				this.state = 878;
				this.angleref();
				}
				break;

			case 29:
				this.enterOuterAlt(_localctx, 29);
				{
				this.state = 879;
				this.anchor();
				}
				break;

			case 30:
				this.enterOuterAlt(_localctx, 30);
				{
				this.state = 880;
				this.bracketed_text();
				}
				break;

			case 31:
				this.enterOuterAlt(_localctx, 31);
				{
				this.state = 881;
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
		this.enterRule(_localctx, 58, bitmarkParser.RULE_gap);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 884;
			this.single_gap();
			this.state = 892;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 81, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					this.state = 890;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case bitmarkParser.OPU:
						{
						this.state = 885;
						this.single_gap();
						}
						break;
					case bitmarkParser.OPB:
						{
						this.state = 886;
						this.instruction();
						}
						break;
					case bitmarkParser.OPQ:
						{
						this.state = 887;
						this.hint();
						}
						break;
					case bitmarkParser.OPC:
						{
						this.state = 888;
						this.item();
						}
						break;
					case bitmarkParser.AtExampleWithStr:
					case bitmarkParser.AtExamplecol:
					case bitmarkParser.AtExamplecl:
						{
						this.state = 889;
						this.example();
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					}
				}
				this.state = 894;
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
	public single_gap(): Single_gapContext {
		let _localctx: Single_gapContext = new Single_gapContext(this._ctx, this.state);
		this.enterRule(_localctx, 60, bitmarkParser.RULE_single_gap);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 895;
			this.match(bitmarkParser.OPU);
			this.state = 899;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 82, this._ctx) ) {
			case 1:
				{
				this.state = 896;
				this.match(bitmarkParser.NUMERIC);
				}
				break;

			case 2:
				{
				this.state = 897;
				this.match(bitmarkParser.STRING);
				}
				break;

			case 3:
				// tslint:disable-next-line:no-empty
				{
				}
				break;
			}
			this.state = 904;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === bitmarkParser.S || ((((_la - 75)) & ~0x1F) === 0 && ((1 << (_la - 75)) & ((1 << (bitmarkParser.OPESC - 75)) | (1 << (bitmarkParser.OPS - 75)) | (1 << (bitmarkParser.COLON - 75)) | (1 << (bitmarkParser.AMP - 75)) | (1 << (bitmarkParser.Greater - 75)) | (1 << (bitmarkParser.Less - 75)) | (1 << (bitmarkParser.RightAngle - 75)) | (1 << (bitmarkParser.RightArrow - 75)) | (1 << (bitmarkParser.DBLEQ - 75)) | (1 << (bitmarkParser.QUOTE_INDEX - 75)))) !== 0) || ((((_la - 108)) & ~0x1F) === 0 && ((1 << (_la - 108)) & ((1 << (bitmarkParser.NUMERIC - 108)) | (1 << (bitmarkParser.STRING - 108)) | (1 << (bitmarkParser.SENTENCE - 108)))) !== 0) || ((((_la - 140)) & ~0x1F) === 0 && ((1 << (_la - 140)) & ((1 << (bitmarkParser.AmpAudio - 140)) | (1 << (bitmarkParser.AmpImage - 140)) | (1 << (bitmarkParser.AmpVideo - 140)) | (1 << (bitmarkParser.AmpArticle - 140)) | (1 << (bitmarkParser.AmpDocument - 140)) | (1 << (bitmarkParser.AmpApp - 140)) | (1 << (bitmarkParser.AmpWebsite - 140)) | (1 << (bitmarkParser.AmpStillImageFilm - 140)) | (1 << (bitmarkParser.AmpAudioLink - 140)) | (1 << (bitmarkParser.AmpImageLink - 140)) | (1 << (bitmarkParser.AmpVideoLink - 140)) | (1 << (bitmarkParser.AmpArticleLink - 140)) | (1 << (bitmarkParser.AmpDocumentLink - 140)) | (1 << (bitmarkParser.AmpAppLink - 140)) | (1 << (bitmarkParser.AmpWebsiteLink - 140)) | (1 << (bitmarkParser.AmpStillImageFilmLink - 140)))) !== 0) || ((((_la - 179)) & ~0x1F) === 0 && ((1 << (_la - 179)) & ((1 << (bitmarkParser.BitmarkMinus - 179)) | (1 << (bitmarkParser.BitmarkPlus - 179)) | (1 << (bitmarkParser.URL - 179)))) !== 0)) {
				{
				{
				this.state = 901;
				this.s_and_w();
				}
				}
				this.state = 906;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 907;
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
		this.enterRule(_localctx, 62, bitmarkParser.RULE_choice_plus);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 910;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === bitmarkParser.OPC) {
				{
				this.state = 909;
				this.item();
				}
			}

			this.state = 912;
			this.match(bitmarkParser.OPP);
			this.state = 914;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 913;
				this.s_and_w();
				}
				}
				this.state = 916;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === bitmarkParser.S || ((((_la - 75)) & ~0x1F) === 0 && ((1 << (_la - 75)) & ((1 << (bitmarkParser.OPESC - 75)) | (1 << (bitmarkParser.OPS - 75)) | (1 << (bitmarkParser.COLON - 75)) | (1 << (bitmarkParser.AMP - 75)) | (1 << (bitmarkParser.Greater - 75)) | (1 << (bitmarkParser.Less - 75)) | (1 << (bitmarkParser.RightAngle - 75)) | (1 << (bitmarkParser.RightArrow - 75)) | (1 << (bitmarkParser.DBLEQ - 75)) | (1 << (bitmarkParser.QUOTE_INDEX - 75)))) !== 0) || ((((_la - 108)) & ~0x1F) === 0 && ((1 << (_la - 108)) & ((1 << (bitmarkParser.NUMERIC - 108)) | (1 << (bitmarkParser.STRING - 108)) | (1 << (bitmarkParser.SENTENCE - 108)))) !== 0) || ((((_la - 140)) & ~0x1F) === 0 && ((1 << (_la - 140)) & ((1 << (bitmarkParser.AmpAudio - 140)) | (1 << (bitmarkParser.AmpImage - 140)) | (1 << (bitmarkParser.AmpVideo - 140)) | (1 << (bitmarkParser.AmpArticle - 140)) | (1 << (bitmarkParser.AmpDocument - 140)) | (1 << (bitmarkParser.AmpApp - 140)) | (1 << (bitmarkParser.AmpWebsite - 140)) | (1 << (bitmarkParser.AmpStillImageFilm - 140)) | (1 << (bitmarkParser.AmpAudioLink - 140)) | (1 << (bitmarkParser.AmpImageLink - 140)) | (1 << (bitmarkParser.AmpVideoLink - 140)) | (1 << (bitmarkParser.AmpArticleLink - 140)) | (1 << (bitmarkParser.AmpDocumentLink - 140)) | (1 << (bitmarkParser.AmpAppLink - 140)) | (1 << (bitmarkParser.AmpWebsiteLink - 140)) | (1 << (bitmarkParser.AmpStillImageFilmLink - 140)))) !== 0) || ((((_la - 179)) & ~0x1F) === 0 && ((1 << (_la - 179)) & ((1 << (bitmarkParser.BitmarkMinus - 179)) | (1 << (bitmarkParser.BitmarkPlus - 179)) | (1 << (bitmarkParser.URL - 179)))) !== 0));
			this.state = 918;
			this.match(bitmarkParser.CL);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 64, bitmarkParser.RULE_choice_minus);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 921;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === bitmarkParser.OPC) {
				{
				this.state = 920;
				this.item();
				}
			}

			this.state = 923;
			this.match(bitmarkParser.OPM);
			this.state = 925;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 924;
				this.s_and_w();
				}
				}
				this.state = 927;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === bitmarkParser.S || ((((_la - 75)) & ~0x1F) === 0 && ((1 << (_la - 75)) & ((1 << (bitmarkParser.OPESC - 75)) | (1 << (bitmarkParser.OPS - 75)) | (1 << (bitmarkParser.COLON - 75)) | (1 << (bitmarkParser.AMP - 75)) | (1 << (bitmarkParser.Greater - 75)) | (1 << (bitmarkParser.Less - 75)) | (1 << (bitmarkParser.RightAngle - 75)) | (1 << (bitmarkParser.RightArrow - 75)) | (1 << (bitmarkParser.DBLEQ - 75)) | (1 << (bitmarkParser.QUOTE_INDEX - 75)))) !== 0) || ((((_la - 108)) & ~0x1F) === 0 && ((1 << (_la - 108)) & ((1 << (bitmarkParser.NUMERIC - 108)) | (1 << (bitmarkParser.STRING - 108)) | (1 << (bitmarkParser.SENTENCE - 108)))) !== 0) || ((((_la - 140)) & ~0x1F) === 0 && ((1 << (_la - 140)) & ((1 << (bitmarkParser.AmpAudio - 140)) | (1 << (bitmarkParser.AmpImage - 140)) | (1 << (bitmarkParser.AmpVideo - 140)) | (1 << (bitmarkParser.AmpArticle - 140)) | (1 << (bitmarkParser.AmpDocument - 140)) | (1 << (bitmarkParser.AmpApp - 140)) | (1 << (bitmarkParser.AmpWebsite - 140)) | (1 << (bitmarkParser.AmpStillImageFilm - 140)) | (1 << (bitmarkParser.AmpAudioLink - 140)) | (1 << (bitmarkParser.AmpImageLink - 140)) | (1 << (bitmarkParser.AmpVideoLink - 140)) | (1 << (bitmarkParser.AmpArticleLink - 140)) | (1 << (bitmarkParser.AmpDocumentLink - 140)) | (1 << (bitmarkParser.AmpAppLink - 140)) | (1 << (bitmarkParser.AmpWebsiteLink - 140)) | (1 << (bitmarkParser.AmpStillImageFilmLink - 140)))) !== 0) || ((((_la - 179)) & ~0x1F) === 0 && ((1 << (_la - 179)) & ((1 << (bitmarkParser.BitmarkMinus - 179)) | (1 << (bitmarkParser.BitmarkPlus - 179)) | (1 << (bitmarkParser.URL - 179)))) !== 0));
			this.state = 929;
			this.match(bitmarkParser.CL);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 66, bitmarkParser.RULE_choice_star);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 932;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === bitmarkParser.OPC) {
				{
				this.state = 931;
				this.item();
				}
			}

			this.state = 934;
			this.match(bitmarkParser.OPR);
			this.state = 936;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 935;
				this.s_and_w();
				}
				}
				this.state = 938;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === bitmarkParser.S || ((((_la - 75)) & ~0x1F) === 0 && ((1 << (_la - 75)) & ((1 << (bitmarkParser.OPESC - 75)) | (1 << (bitmarkParser.OPS - 75)) | (1 << (bitmarkParser.COLON - 75)) | (1 << (bitmarkParser.AMP - 75)) | (1 << (bitmarkParser.Greater - 75)) | (1 << (bitmarkParser.Less - 75)) | (1 << (bitmarkParser.RightAngle - 75)) | (1 << (bitmarkParser.RightArrow - 75)) | (1 << (bitmarkParser.DBLEQ - 75)) | (1 << (bitmarkParser.QUOTE_INDEX - 75)))) !== 0) || ((((_la - 108)) & ~0x1F) === 0 && ((1 << (_la - 108)) & ((1 << (bitmarkParser.NUMERIC - 108)) | (1 << (bitmarkParser.STRING - 108)) | (1 << (bitmarkParser.SENTENCE - 108)))) !== 0) || ((((_la - 140)) & ~0x1F) === 0 && ((1 << (_la - 140)) & ((1 << (bitmarkParser.AmpAudio - 140)) | (1 << (bitmarkParser.AmpImage - 140)) | (1 << (bitmarkParser.AmpVideo - 140)) | (1 << (bitmarkParser.AmpArticle - 140)) | (1 << (bitmarkParser.AmpDocument - 140)) | (1 << (bitmarkParser.AmpApp - 140)) | (1 << (bitmarkParser.AmpWebsite - 140)) | (1 << (bitmarkParser.AmpStillImageFilm - 140)) | (1 << (bitmarkParser.AmpAudioLink - 140)) | (1 << (bitmarkParser.AmpImageLink - 140)) | (1 << (bitmarkParser.AmpVideoLink - 140)) | (1 << (bitmarkParser.AmpArticleLink - 140)) | (1 << (bitmarkParser.AmpDocumentLink - 140)) | (1 << (bitmarkParser.AmpAppLink - 140)) | (1 << (bitmarkParser.AmpWebsiteLink - 140)) | (1 << (bitmarkParser.AmpStillImageFilmLink - 140)))) !== 0) || ((((_la - 179)) & ~0x1F) === 0 && ((1 << (_la - 179)) & ((1 << (bitmarkParser.BitmarkMinus - 179)) | (1 << (bitmarkParser.BitmarkPlus - 179)) | (1 << (bitmarkParser.URL - 179)))) !== 0));
			this.state = 940;
			this.match(bitmarkParser.CL);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public essay(): EssayContext {
		let _localctx: EssayContext = new EssayContext(this._ctx, this.state);
		this.enterRule(_localctx, 68, bitmarkParser.RULE_essay);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 942;
			this.match(bitmarkParser.BitEssay);
			this.state = 943;
			this.format();
			this.state = 944;
			this.match(bitmarkParser.CL);
			this.state = 945;
			this.match(bitmarkParser.NL);
			this.state = 955;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 91, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					{
					this.state = 946;
					this.bitElem();
					}
					this.state = 950;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 90, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 947;
							this.match(bitmarkParser.NL);
							}
							}
						}
						this.state = 952;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 90, this._ctx);
					}
					}
					}
				}
				this.state = 957;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 91, this._ctx);
			}
			this.state = 967;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 93, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 961;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === bitmarkParser.NL) {
						{
						{
						this.state = 958;
						this.match(bitmarkParser.NL);
						}
						}
						this.state = 963;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					{
					this.state = 964;
					this.ml_example();
					}
					}
					}
				}
				this.state = 969;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 93, this._ctx);
			}
			this.state = 973;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 94, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 970;
					this.match(bitmarkParser.NL);
					}
					}
				}
				this.state = 975;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 94, this._ctx);
			}
			this.state = 989;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 97, this._ctx) ) {
			case 1:
				{
				this.state = 976;
				this.resource();
				this.state = 986;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 96, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 980;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						while (_la === bitmarkParser.NL) {
							{
							{
							this.state = 977;
							this.match(bitmarkParser.NL);
							}
							}
							this.state = 982;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
						}
						this.state = 983;
						this.resource();
						}
						}
					}
					this.state = 988;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 96, this._ctx);
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
	public ml_example(): Ml_exampleContext {
		let _localctx: Ml_exampleContext = new Ml_exampleContext(this._ctx, this.state);
		this.enterRule(_localctx, 70, bitmarkParser.RULE_ml_example);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 991;
			this.match(bitmarkParser.AtExamplecol);
			this.state = 999;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === bitmarkParser.S || ((((_la - 75)) & ~0x1F) === 0 && ((1 << (_la - 75)) & ((1 << (bitmarkParser.OPESC - 75)) | (1 << (bitmarkParser.OPS - 75)) | (1 << (bitmarkParser.COLON - 75)) | (1 << (bitmarkParser.AMP - 75)) | (1 << (bitmarkParser.Greater - 75)) | (1 << (bitmarkParser.Less - 75)) | (1 << (bitmarkParser.RightAngle - 75)) | (1 << (bitmarkParser.RightArrow - 75)) | (1 << (bitmarkParser.DBLEQ - 75)) | (1 << (bitmarkParser.QUOTE_INDEX - 75)))) !== 0) || ((((_la - 108)) & ~0x1F) === 0 && ((1 << (_la - 108)) & ((1 << (bitmarkParser.NUMERIC - 108)) | (1 << (bitmarkParser.STRING - 108)) | (1 << (bitmarkParser.NL - 108)) | (1 << (bitmarkParser.SENTENCE - 108)))) !== 0) || ((((_la - 140)) & ~0x1F) === 0 && ((1 << (_la - 140)) & ((1 << (bitmarkParser.AmpAudio - 140)) | (1 << (bitmarkParser.AmpImage - 140)) | (1 << (bitmarkParser.AmpVideo - 140)) | (1 << (bitmarkParser.AmpArticle - 140)) | (1 << (bitmarkParser.AmpDocument - 140)) | (1 << (bitmarkParser.AmpApp - 140)) | (1 << (bitmarkParser.AmpWebsite - 140)) | (1 << (bitmarkParser.AmpStillImageFilm - 140)) | (1 << (bitmarkParser.AmpAudioLink - 140)) | (1 << (bitmarkParser.AmpImageLink - 140)) | (1 << (bitmarkParser.AmpVideoLink - 140)) | (1 << (bitmarkParser.AmpArticleLink - 140)) | (1 << (bitmarkParser.AmpDocumentLink - 140)) | (1 << (bitmarkParser.AmpAppLink - 140)) | (1 << (bitmarkParser.AmpWebsiteLink - 140)) | (1 << (bitmarkParser.AmpStillImageFilmLink - 140)))) !== 0) || ((((_la - 179)) & ~0x1F) === 0 && ((1 << (_la - 179)) & ((1 << (bitmarkParser.BitmarkMinus - 179)) | (1 << (bitmarkParser.BitmarkPlus - 179)) | (1 << (bitmarkParser.URL - 179)))) !== 0)) {
				{
				this.state = 993;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === bitmarkParser.NL) {
					{
					this.state = 992;
					this.match(bitmarkParser.NL);
					}
				}

				this.state = 995;
				this.lines();
				this.state = 997;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === bitmarkParser.NL) {
					{
					this.state = 996;
					this.match(bitmarkParser.NL);
					}
				}

				}
			}

			this.state = 1001;
			this.match(bitmarkParser.CL);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 72, bitmarkParser.RULE_partans);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1003;
			_la = this._input.LA(1);
			if (!(_la === bitmarkParser.AtPartialAnswerS || _la === bitmarkParser.AtPartialAnswer)) {
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
	public resource(): ResourceContext {
		let _localctx: ResourceContext = new ResourceContext(this._ctx, this.state);
		this.enterRule(_localctx, 74, bitmarkParser.RULE_resource);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1005;
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
	public correction(): CorrectionContext {
		let _localctx: CorrectionContext = new CorrectionContext(this._ctx, this.state);
		this.enterRule(_localctx, 76, bitmarkParser.RULE_correction);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1007;
			this.match(bitmarkParser.BitCorrection);
			this.state = 1008;
			this.format();
			this.state = 1009;
			this.match(bitmarkParser.CL);
			this.state = 1010;
			this.match(bitmarkParser.NL);
			this.state = 1020;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 102, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1011;
					this.bitElem();
					this.state = 1015;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 101, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 1012;
							this.match(bitmarkParser.NL);
							}
							}
						}
						this.state = 1017;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 101, this._ctx);
					}
					}
					}
				}
				this.state = 1022;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 102, this._ctx);
			}
			this.state = 1026;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === bitmarkParser.OPP || _la === bitmarkParser.OPM) {
				{
				{
				this.state = 1023;
				this.corrs();
				}
				}
				this.state = 1028;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1032;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 104, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1029;
					this.match(bitmarkParser.NL);
					}
					}
				}
				this.state = 1034;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 104, this._ctx);
			}
			this.state = 1048;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 107, this._ctx) ) {
			case 1:
				{
				this.state = 1035;
				this.resource();
				this.state = 1045;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 106, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 1039;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						while (_la === bitmarkParser.NL) {
							{
							{
							this.state = 1036;
							this.match(bitmarkParser.NL);
							}
							}
							this.state = 1041;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
						}
						this.state = 1042;
						this.resource();
						}
						}
					}
					this.state = 1047;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 106, this._ctx);
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
	public corrs(): CorrsContext {
		let _localctx: CorrsContext = new CorrsContext(this._ctx, this.state);
		this.enterRule(_localctx, 78, bitmarkParser.RULE_corrs);
		try {
			let _alt: number;
			this.state = 1068;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case bitmarkParser.OPM:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1050;
				this.match(bitmarkParser.OPM);
				this.state = 1054;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 108, this._ctx);
				while (_alt !== 1 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1 + 1) {
						{
						{
						this.state = 1051;
						this.matchWildcard();
						}
						}
					}
					this.state = 1056;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 108, this._ctx);
				}
				this.state = 1057;
				this.match(bitmarkParser.CL);
				this.state = 1058;
				this.match(bitmarkParser.NL);
				}
				break;
			case bitmarkParser.OPP:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1059;
				this.match(bitmarkParser.OPP);
				this.state = 1063;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 109, this._ctx);
				while (_alt !== 1 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1 + 1) {
						{
						{
						this.state = 1060;
						this.matchWildcard();
						}
						}
					}
					this.state = 1065;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 109, this._ctx);
				}
				this.state = 1066;
				this.match(bitmarkParser.CL);
				this.state = 1067;
				this.match(bitmarkParser.NL);
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
	public mark_(): Mark_Context {
		let _localctx: Mark_Context = new Mark_Context(this._ctx, this.state);
		this.enterRule(_localctx, 80, bitmarkParser.RULE_mark_);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1070;
			this.match(bitmarkParser.BitMark);
			this.state = 1071;
			this.format();
			this.state = 1072;
			this.match(bitmarkParser.CL);
			this.state = 1073;
			this.match(bitmarkParser.NL);
			this.state = 1086;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 113, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1076;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 111, this._ctx) ) {
					case 1:
						{
						this.state = 1074;
						this.bitElem();
						}
						break;

					case 2:
						{
						this.state = 1075;
						this.mark_text();
						}
						break;
					}
					this.state = 1081;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 112, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 1078;
							this.match(bitmarkParser.NL);
							}
							}
						}
						this.state = 1083;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 112, this._ctx);
					}
					}
					}
				}
				this.state = 1088;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 113, this._ctx);
			}
			this.state = 1092;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 114, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1089;
					this.match(bitmarkParser.NL);
					}
					}
				}
				this.state = 1094;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 114, this._ctx);
			}
			this.state = 1108;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 117, this._ctx) ) {
			case 1:
				{
				this.state = 1095;
				this.resource();
				this.state = 1105;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 116, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 1099;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						while (_la === bitmarkParser.NL) {
							{
							{
							this.state = 1096;
							this.match(bitmarkParser.NL);
							}
							}
							this.state = 1101;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
						}
						this.state = 1102;
						this.resource();
						}
						}
					}
					this.state = 1107;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 116, this._ctx);
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
	public mark_text(): Mark_textContext {
		let _localctx: Mark_textContext = new Mark_textContext(this._ctx, this.state);
		this.enterRule(_localctx, 82, bitmarkParser.RULE_mark_text);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1110;
			this.match(bitmarkParser.OPS);
			this.state = 1111;
			this.s_and_w();
			this.state = 1112;
			this.match(bitmarkParser.CL);
			this.state = 1114;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === bitmarkParser.OPAMARK) {
				{
				this.state = 1113;
				this.mark_color();
				}
			}

			this.state = 1121;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 120, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					this.state = 1119;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case bitmarkParser.OPQ:
						{
						this.state = 1116;
						this.hint();
						}
						break;
					case bitmarkParser.OPC:
						{
						this.state = 1117;
						this.item();
						}
						break;
					case bitmarkParser.OPB:
						{
						this.state = 1118;
						this.instruction();
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					}
				}
				this.state = 1123;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 120, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public mark_color(): Mark_colorContext {
		let _localctx: Mark_colorContext = new Mark_colorContext(this._ctx, this.state);
		this.enterRule(_localctx, 84, bitmarkParser.RULE_mark_color);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1124;
			this.match(bitmarkParser.OPAMARK);
			this.state = 1128;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === bitmarkParser.S) {
				{
				{
				this.state = 1125;
				this.match(bitmarkParser.S);
				}
				}
				this.state = 1130;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1131;
			this.match(bitmarkParser.STRING);
			this.state = 1135;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === bitmarkParser.S) {
				{
				{
				this.state = 1132;
				this.match(bitmarkParser.S);
				}
				}
				this.state = 1137;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1138;
			this.match(bitmarkParser.CL);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public document_upload(): Document_uploadContext {
		let _localctx: Document_uploadContext = new Document_uploadContext(this._ctx, this.state);
		this.enterRule(_localctx, 86, bitmarkParser.RULE_document_upload);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1140;
			this.match(bitmarkParser.BitDocup);
			this.state = 1142;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 70)) & ~0x1F) === 0 && ((1 << (_la - 70)) & ((1 << (bitmarkParser.Image_type - 70)) | (1 << (bitmarkParser.Audio_type - 70)) | (1 << (bitmarkParser.Video_type - 70)))) !== 0)) {
				{
				this.state = 1141;
				_la = this._input.LA(1);
				if (!(((((_la - 70)) & ~0x1F) === 0 && ((1 << (_la - 70)) & ((1 << (bitmarkParser.Image_type - 70)) | (1 << (bitmarkParser.Audio_type - 70)) | (1 << (bitmarkParser.Video_type - 70)))) !== 0))) {
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

			this.state = 1144;
			this.match(bitmarkParser.CL);
			this.state = 1145;
			this.match(bitmarkParser.NL);
			this.state = 1155;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 125, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1146;
					this.bitElem();
					this.state = 1150;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 124, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 1147;
							this.match(bitmarkParser.NL);
							}
							}
						}
						this.state = 1152;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 124, this._ctx);
					}
					}
					}
				}
				this.state = 1157;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 125, this._ctx);
			}
			this.state = 1161;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 126, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1158;
					this.match(bitmarkParser.NL);
					}
					}
				}
				this.state = 1163;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 126, this._ctx);
			}
			this.state = 1177;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 129, this._ctx) ) {
			case 1:
				{
				this.state = 1164;
				this.resource();
				this.state = 1174;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 128, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 1168;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						while (_la === bitmarkParser.NL) {
							{
							{
							this.state = 1165;
							this.match(bitmarkParser.NL);
							}
							}
							this.state = 1170;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
						}
						this.state = 1171;
						this.resource();
						}
						}
					}
					this.state = 1176;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 128, this._ctx);
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
	public take_picture(): Take_pictureContext {
		let _localctx: Take_pictureContext = new Take_pictureContext(this._ctx, this.state);
		this.enterRule(_localctx, 88, bitmarkParser.RULE_take_picture);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1179;
			this.match(bitmarkParser.BitTakepic);
			this.state = 1180;
			this.format();
			this.state = 1181;
			this.match(bitmarkParser.CL);
			this.state = 1182;
			this.match(bitmarkParser.NL);
			this.state = 1192;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 131, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1183;
					this.bitElem();
					this.state = 1187;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 130, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 1184;
							this.match(bitmarkParser.NL);
							}
							}
						}
						this.state = 1189;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 130, this._ctx);
					}
					}
					}
				}
				this.state = 1194;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 131, this._ctx);
			}
			this.state = 1198;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 132, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1195;
					this.match(bitmarkParser.NL);
					}
					}
				}
				this.state = 1200;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 132, this._ctx);
			}
			this.state = 1214;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 135, this._ctx) ) {
			case 1:
				{
				this.state = 1201;
				this.resource();
				this.state = 1211;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 134, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 1205;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						while (_la === bitmarkParser.NL) {
							{
							{
							this.state = 1202;
							this.match(bitmarkParser.NL);
							}
							}
							this.state = 1207;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
						}
						this.state = 1208;
						this.resource();
						}
						}
					}
					this.state = 1213;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 134, this._ctx);
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
	public record_audio(): Record_audioContext {
		let _localctx: Record_audioContext = new Record_audioContext(this._ctx, this.state);
		this.enterRule(_localctx, 90, bitmarkParser.RULE_record_audio);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1216;
			this.match(bitmarkParser.BitRecaud);
			this.state = 1217;
			this.format();
			this.state = 1218;
			this.match(bitmarkParser.CL);
			this.state = 1219;
			this.match(bitmarkParser.NL);
			this.state = 1229;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 137, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1220;
					this.bitElem();
					this.state = 1224;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 136, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 1221;
							this.match(bitmarkParser.NL);
							}
							}
						}
						this.state = 1226;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 136, this._ctx);
					}
					}
					}
				}
				this.state = 1231;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 137, this._ctx);
			}
			this.state = 1235;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 138, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1232;
					this.match(bitmarkParser.NL);
					}
					}
				}
				this.state = 1237;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 138, this._ctx);
			}
			this.state = 1251;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 141, this._ctx) ) {
			case 1:
				{
				this.state = 1238;
				this.resource();
				this.state = 1248;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 140, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 1242;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						while (_la === bitmarkParser.NL) {
							{
							{
							this.state = 1239;
							this.match(bitmarkParser.NL);
							}
							}
							this.state = 1244;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
						}
						this.state = 1245;
						this.resource();
						}
						}
					}
					this.state = 1250;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 140, this._ctx);
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
	public preparation_note(): Preparation_noteContext {
		let _localctx: Preparation_noteContext = new Preparation_noteContext(this._ctx, this.state);
		this.enterRule(_localctx, 92, bitmarkParser.RULE_preparation_note);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1253;
			this.match(bitmarkParser.BitPrepnote);
			this.state = 1254;
			this.format();
			this.state = 1255;
			this.match(bitmarkParser.CL);
			this.state = 1259;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 142, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1256;
					this.match(bitmarkParser.NL);
					}
					}
				}
				this.state = 1261;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 142, this._ctx);
			}
			this.state = 1271;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 144, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1262;
					this.bitElem();
					this.state = 1266;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 143, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 1263;
							this.match(bitmarkParser.NL);
							}
							}
						}
						this.state = 1268;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 143, this._ctx);
					}
					}
					}
				}
				this.state = 1273;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 144, this._ctx);
			}
			this.state = 1275;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 145, this._ctx) ) {
			case 1:
				{
				this.state = 1274;
				this.lines();
				}
				break;
			}
			this.state = 1280;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 146, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1277;
					this.match(bitmarkParser.NL);
					}
					}
				}
				this.state = 1282;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 146, this._ctx);
			}
			this.state = 1296;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 149, this._ctx) ) {
			case 1:
				{
				this.state = 1283;
				this.resource();
				this.state = 1293;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 148, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 1287;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						while (_la === bitmarkParser.NL) {
							{
							{
							this.state = 1284;
							this.match(bitmarkParser.NL);
							}
							}
							this.state = 1289;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
						}
						this.state = 1290;
						this.resource();
						}
						}
					}
					this.state = 1295;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 148, this._ctx);
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
	public assignment(): AssignmentContext {
		let _localctx: AssignmentContext = new AssignmentContext(this._ctx, this.state);
		this.enterRule(_localctx, 94, bitmarkParser.RULE_assignment);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1298;
			this.match(bitmarkParser.BitAssign);
			this.state = 1299;
			this.format();
			this.state = 1300;
			this.match(bitmarkParser.CL);
			this.state = 1302;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 1301;
					this.match(bitmarkParser.NL);
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 1304;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 150, this._ctx);
			} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
			this.state = 1315;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 152, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1306;
					this.bitElem();
					this.state = 1310;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 151, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 1307;
							this.match(bitmarkParser.NL);
							}
							}
						}
						this.state = 1312;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 151, this._ctx);
					}
					}
					}
				}
				this.state = 1317;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 152, this._ctx);
			}
			this.state = 1319;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 153, this._ctx) ) {
			case 1:
				{
				this.state = 1318;
				this.lines();
				}
				break;
			}
			this.state = 1324;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 154, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1321;
					this.match(bitmarkParser.NL);
					}
					}
				}
				this.state = 1326;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 154, this._ctx);
			}
			this.state = 1340;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 157, this._ctx) ) {
			case 1:
				{
				this.state = 1327;
				this.resource();
				this.state = 1337;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 156, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 1331;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						while (_la === bitmarkParser.NL) {
							{
							{
							this.state = 1328;
							this.match(bitmarkParser.NL);
							}
							}
							this.state = 1333;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
						}
						this.state = 1334;
						this.resource();
						}
						}
					}
					this.state = 1339;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 156, this._ctx);
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
	public article(): ArticleContext {
		let _localctx: ArticleContext = new ArticleContext(this._ctx, this.state);
		this.enterRule(_localctx, 96, bitmarkParser.RULE_article);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1342;
			this.match(bitmarkParser.BitArticle);
			this.state = 1343;
			this.format();
			this.state = 1344;
			this.match(bitmarkParser.CL);
			this.state = 1348;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === bitmarkParser.NL) {
				{
				{
				this.state = 1345;
				this.match(bitmarkParser.NL);
				}
				}
				this.state = 1350;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1358;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 1351;
					this.bitElem();
					this.state = 1355;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 159, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 1352;
							this.match(bitmarkParser.NL);
							}
							}
						}
						this.state = 1357;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 159, this._ctx);
					}
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 1360;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 160, this._ctx);
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
	public statement(): StatementContext {
		let _localctx: StatementContext = new StatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 98, bitmarkParser.RULE_statement);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1362;
			this.match(bitmarkParser.BitStatement);
			this.state = 1363;
			this.format();
			this.state = 1364;
			this.match(bitmarkParser.CL);
			this.state = 1368;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === bitmarkParser.NL) {
				{
				{
				this.state = 1365;
				this.match(bitmarkParser.NL);
				}
				}
				this.state = 1370;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1378;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 1371;
					this.bitElem();
					this.state = 1375;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 162, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 1372;
							this.match(bitmarkParser.NL);
							}
							}
						}
						this.state = 1377;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 162, this._ctx);
					}
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 1380;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 163, this._ctx);
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
	public details(): DetailsContext {
		let _localctx: DetailsContext = new DetailsContext(this._ctx, this.state);
		this.enterRule(_localctx, 100, bitmarkParser.RULE_details);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1382;
			this.match(bitmarkParser.BitDetails);
			this.state = 1383;
			this.format();
			this.state = 1384;
			this.match(bitmarkParser.CL);
			this.state = 1388;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === bitmarkParser.NL) {
				{
				{
				this.state = 1385;
				this.match(bitmarkParser.NL);
				}
				}
				this.state = 1390;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1398;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 1391;
					this.bitElem();
					this.state = 1395;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 165, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 1392;
							this.match(bitmarkParser.NL);
							}
							}
						}
						this.state = 1397;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 165, this._ctx);
					}
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 1400;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 166, this._ctx);
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
	public buttoncopytext(): ButtoncopytextContext {
		let _localctx: ButtoncopytextContext = new ButtoncopytextContext(this._ctx, this.state);
		this.enterRule(_localctx, 102, bitmarkParser.RULE_buttoncopytext);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1402;
			this.match(bitmarkParser.BitButtonCopytext);
			this.state = 1403;
			this.format();
			this.state = 1404;
			this.match(bitmarkParser.CL);
			this.state = 1408;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === bitmarkParser.NL) {
				{
				{
				this.state = 1405;
				this.match(bitmarkParser.NL);
				}
				}
				this.state = 1410;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1418;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 1411;
					this.bitElem();
					this.state = 1415;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 168, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 1412;
							this.match(bitmarkParser.NL);
							}
							}
						}
						this.state = 1417;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 168, this._ctx);
					}
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 1420;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 169, this._ctx);
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
	public wbtcontinue(): WbtcontinueContext {
		let _localctx: WbtcontinueContext = new WbtcontinueContext(this._ctx, this.state);
		this.enterRule(_localctx, 104, bitmarkParser.RULE_wbtcontinue);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1422;
			this.match(bitmarkParser.BitWbtContinue);
			this.state = 1423;
			this.format();
			this.state = 1424;
			this.match(bitmarkParser.CL);
			this.state = 1428;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === bitmarkParser.NL) {
				{
				{
				this.state = 1425;
				this.match(bitmarkParser.NL);
				}
				}
				this.state = 1430;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1438;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 1431;
					this.bitElem();
					this.state = 1435;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 171, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 1432;
							this.match(bitmarkParser.NL);
							}
							}
						}
						this.state = 1437;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 171, this._ctx);
					}
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 1440;
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
	public learningpathdetails(): LearningpathdetailsContext {
		let _localctx: LearningpathdetailsContext = new LearningpathdetailsContext(this._ctx, this.state);
		this.enterRule(_localctx, 106, bitmarkParser.RULE_learningpathdetails);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1442;
			this.match(bitmarkParser.BitLearningPathDetails);
			this.state = 1443;
			this.format();
			this.state = 1444;
			this.match(bitmarkParser.CL);
			this.state = 1448;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === bitmarkParser.NL) {
				{
				{
				this.state = 1445;
				this.match(bitmarkParser.NL);
				}
				}
				this.state = 1450;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1458;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 1451;
					this.bitElem();
					this.state = 1455;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 174, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 1452;
							this.match(bitmarkParser.NL);
							}
							}
						}
						this.state = 1457;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 174, this._ctx);
					}
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 1460;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 175, this._ctx);
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
	public page(): PageContext {
		let _localctx: PageContext = new PageContext(this._ctx, this.state);
		this.enterRule(_localctx, 108, bitmarkParser.RULE_page);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1462;
			this.match(bitmarkParser.BitPage);
			this.state = 1463;
			this.format();
			this.state = 1464;
			this.match(bitmarkParser.CL);
			this.state = 1468;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === bitmarkParser.NL) {
				{
				{
				this.state = 1465;
				this.match(bitmarkParser.NL);
				}
				}
				this.state = 1470;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1478;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 1471;
					this.bitElem();
					this.state = 1475;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 177, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 1472;
							this.match(bitmarkParser.NL);
							}
							}
						}
						this.state = 1477;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 177, this._ctx);
					}
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 1480;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 178, this._ctx);
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
	public note(): NoteContext {
		let _localctx: NoteContext = new NoteContext(this._ctx, this.state);
		this.enterRule(_localctx, 110, bitmarkParser.RULE_note);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1482;
			this.match(bitmarkParser.BitNote);
			this.state = 1483;
			this.format();
			this.state = 1484;
			this.match(bitmarkParser.CL);
			this.state = 1488;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === bitmarkParser.NL) {
				{
				{
				this.state = 1485;
				this.match(bitmarkParser.NL);
				}
				}
				this.state = 1490;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1498;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 1491;
					this.bitElem();
					this.state = 1495;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 180, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 1492;
							this.match(bitmarkParser.NL);
							}
							}
						}
						this.state = 1497;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 180, this._ctx);
					}
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 1500;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 181, this._ctx);
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
	public info(): InfoContext {
		let _localctx: InfoContext = new InfoContext(this._ctx, this.state);
		this.enterRule(_localctx, 112, bitmarkParser.RULE_info);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1502;
			this.match(bitmarkParser.BitInfo);
			this.state = 1503;
			this.format();
			this.state = 1504;
			this.match(bitmarkParser.CL);
			this.state = 1508;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === bitmarkParser.NL) {
				{
				{
				this.state = 1505;
				this.match(bitmarkParser.NL);
				}
				}
				this.state = 1510;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1518;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 1511;
					this.bitElem();
					this.state = 1515;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 183, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 1512;
							this.match(bitmarkParser.NL);
							}
							}
						}
						this.state = 1517;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 183, this._ctx);
					}
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 1520;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 184, this._ctx);
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
	public warning(): WarningContext {
		let _localctx: WarningContext = new WarningContext(this._ctx, this.state);
		this.enterRule(_localctx, 114, bitmarkParser.RULE_warning);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1522;
			this.match(bitmarkParser.BitWarning);
			this.state = 1523;
			this.format();
			this.state = 1524;
			this.match(bitmarkParser.CL);
			this.state = 1528;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === bitmarkParser.NL) {
				{
				{
				this.state = 1525;
				this.match(bitmarkParser.NL);
				}
				}
				this.state = 1530;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1538;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 1531;
					this.bitElem();
					this.state = 1535;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 186, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 1532;
							this.match(bitmarkParser.NL);
							}
							}
						}
						this.state = 1537;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 186, this._ctx);
					}
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 1540;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 187, this._ctx);
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
	public remark(): RemarkContext {
		let _localctx: RemarkContext = new RemarkContext(this._ctx, this.state);
		this.enterRule(_localctx, 116, bitmarkParser.RULE_remark);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1542;
			this.match(bitmarkParser.BitRemark);
			this.state = 1543;
			this.format();
			this.state = 1544;
			this.match(bitmarkParser.CL);
			this.state = 1548;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === bitmarkParser.NL) {
				{
				{
				this.state = 1545;
				this.match(bitmarkParser.NL);
				}
				}
				this.state = 1550;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1558;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 1551;
					this.bitElem();
					this.state = 1555;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 189, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 1552;
							this.match(bitmarkParser.NL);
							}
							}
						}
						this.state = 1557;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 189, this._ctx);
					}
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 1560;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 190, this._ctx);
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
	public help(): HelpContext {
		let _localctx: HelpContext = new HelpContext(this._ctx, this.state);
		this.enterRule(_localctx, 118, bitmarkParser.RULE_help);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1562;
			this.match(bitmarkParser.BitHelp);
			this.state = 1563;
			this.format();
			this.state = 1564;
			this.match(bitmarkParser.CL);
			this.state = 1568;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === bitmarkParser.NL) {
				{
				{
				this.state = 1565;
				this.match(bitmarkParser.NL);
				}
				}
				this.state = 1570;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1578;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 1571;
					this.bitElem();
					this.state = 1575;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 192, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 1572;
							this.match(bitmarkParser.NL);
							}
							}
						}
						this.state = 1577;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 192, this._ctx);
					}
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 1580;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 193, this._ctx);
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
	public danger(): DangerContext {
		let _localctx: DangerContext = new DangerContext(this._ctx, this.state);
		this.enterRule(_localctx, 120, bitmarkParser.RULE_danger);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1582;
			this.match(bitmarkParser.BitDanger);
			this.state = 1583;
			this.format();
			this.state = 1584;
			this.match(bitmarkParser.CL);
			this.state = 1588;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === bitmarkParser.NL) {
				{
				{
				this.state = 1585;
				this.match(bitmarkParser.NL);
				}
				}
				this.state = 1590;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1598;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 1591;
					this.bitElem();
					this.state = 1595;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 195, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 1592;
							this.match(bitmarkParser.NL);
							}
							}
						}
						this.state = 1597;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 195, this._ctx);
					}
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 1600;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 196, this._ctx);
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
	public bug(): BugContext {
		let _localctx: BugContext = new BugContext(this._ctx, this.state);
		this.enterRule(_localctx, 122, bitmarkParser.RULE_bug);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1602;
			this.match(bitmarkParser.BitBug);
			this.state = 1603;
			this.format();
			this.state = 1604;
			this.match(bitmarkParser.CL);
			this.state = 1608;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === bitmarkParser.NL) {
				{
				{
				this.state = 1605;
				this.match(bitmarkParser.NL);
				}
				}
				this.state = 1610;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1618;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 1611;
					this.bitElem();
					this.state = 1615;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 198, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 1612;
							this.match(bitmarkParser.NL);
							}
							}
						}
						this.state = 1617;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 198, this._ctx);
					}
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 1620;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 199, this._ctx);
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
	public sidenote(): SidenoteContext {
		let _localctx: SidenoteContext = new SidenoteContext(this._ctx, this.state);
		this.enterRule(_localctx, 124, bitmarkParser.RULE_sidenote);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1622;
			this.match(bitmarkParser.BitSidenote);
			this.state = 1623;
			this.format();
			this.state = 1624;
			this.match(bitmarkParser.CL);
			this.state = 1628;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === bitmarkParser.NL) {
				{
				{
				this.state = 1625;
				this.match(bitmarkParser.NL);
				}
				}
				this.state = 1630;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1638;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 1631;
					this.bitElem();
					this.state = 1635;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 201, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 1632;
							this.match(bitmarkParser.NL);
							}
							}
						}
						this.state = 1637;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 201, this._ctx);
					}
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 1640;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 202, this._ctx);
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
	public stickynote(): StickynoteContext {
		let _localctx: StickynoteContext = new StickynoteContext(this._ctx, this.state);
		this.enterRule(_localctx, 126, bitmarkParser.RULE_stickynote);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1642;
			this.match(bitmarkParser.BitStickynote);
			this.state = 1643;
			this.format();
			this.state = 1644;
			this.match(bitmarkParser.CL);
			this.state = 1648;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === bitmarkParser.NL) {
				{
				{
				this.state = 1645;
				this.match(bitmarkParser.NL);
				}
				}
				this.state = 1650;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1658;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 1651;
					this.bitElem();
					this.state = 1655;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 204, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 1652;
							this.match(bitmarkParser.NL);
							}
							}
						}
						this.state = 1657;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 204, this._ctx);
					}
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 1660;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 205, this._ctx);
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
	public quote(): QuoteContext {
		let _localctx: QuoteContext = new QuoteContext(this._ctx, this.state);
		this.enterRule(_localctx, 128, bitmarkParser.RULE_quote);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1662;
			this.match(bitmarkParser.BitQuote);
			this.state = 1663;
			this.format();
			this.state = 1664;
			this.match(bitmarkParser.CL);
			this.state = 1668;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === bitmarkParser.NL) {
				{
				{
				this.state = 1665;
				this.match(bitmarkParser.NL);
				}
				}
				this.state = 1670;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1678;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 1671;
					this.bitElem();
					this.state = 1675;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 207, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 1672;
							this.match(bitmarkParser.NL);
							}
							}
						}
						this.state = 1677;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 207, this._ctx);
					}
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 1680;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 208, this._ctx);
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
	public footnote(): FootnoteContext {
		let _localctx: FootnoteContext = new FootnoteContext(this._ctx, this.state);
		this.enterRule(_localctx, 130, bitmarkParser.RULE_footnote);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1682;
			this.match(bitmarkParser.BitFootnote);
			this.state = 1683;
			this.format();
			this.state = 1684;
			this.match(bitmarkParser.CL);
			this.state = 1688;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === bitmarkParser.NL) {
				{
				{
				this.state = 1685;
				this.match(bitmarkParser.NL);
				}
				}
				this.state = 1690;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1698;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 1691;
					this.bitElem();
					this.state = 1695;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 210, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 1692;
							this.match(bitmarkParser.NL);
							}
							}
						}
						this.state = 1697;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 210, this._ctx);
					}
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 1700;
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
	public hintbit(): HintbitContext {
		let _localctx: HintbitContext = new HintbitContext(this._ctx, this.state);
		this.enterRule(_localctx, 132, bitmarkParser.RULE_hintbit);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1702;
			this.match(bitmarkParser.BitHint);
			this.state = 1703;
			this.format();
			this.state = 1704;
			this.match(bitmarkParser.CL);
			this.state = 1708;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === bitmarkParser.NL) {
				{
				{
				this.state = 1705;
				this.match(bitmarkParser.NL);
				}
				}
				this.state = 1710;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1718;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 1711;
					this.bitElem();
					this.state = 1715;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 213, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 1712;
							this.match(bitmarkParser.NL);
							}
							}
						}
						this.state = 1717;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 213, this._ctx);
					}
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 1720;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 214, this._ctx);
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
	public examplebit(): ExamplebitContext {
		let _localctx: ExamplebitContext = new ExamplebitContext(this._ctx, this.state);
		this.enterRule(_localctx, 134, bitmarkParser.RULE_examplebit);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1722;
			this.match(bitmarkParser.BitExample);
			this.state = 1723;
			this.format();
			this.state = 1724;
			this.match(bitmarkParser.CL);
			this.state = 1728;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === bitmarkParser.NL) {
				{
				{
				this.state = 1725;
				this.match(bitmarkParser.NL);
				}
				}
				this.state = 1730;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1738;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 1731;
					this.bitElem();
					this.state = 1735;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 216, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 1732;
							this.match(bitmarkParser.NL);
							}
							}
						}
						this.state = 1737;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 216, this._ctx);
					}
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 1740;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 217, this._ctx);
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
	public message(): MessageContext {
		let _localctx: MessageContext = new MessageContext(this._ctx, this.state);
		this.enterRule(_localctx, 136, bitmarkParser.RULE_message);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1742;
			this.match(bitmarkParser.BitMessage);
			this.state = 1743;
			this.format();
			this.state = 1744;
			this.match(bitmarkParser.CL);
			this.state = 1748;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === bitmarkParser.NL) {
				{
				{
				this.state = 1745;
				this.match(bitmarkParser.NL);
				}
				}
				this.state = 1750;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1758;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 1751;
					this.bitElem();
					this.state = 1755;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 219, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 1752;
							this.match(bitmarkParser.NL);
							}
							}
						}
						this.state = 1757;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 219, this._ctx);
					}
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 1760;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 220, this._ctx);
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
	public bot_interview(): Bot_interviewContext {
		let _localctx: Bot_interviewContext = new Bot_interviewContext(this._ctx, this.state);
		this.enterRule(_localctx, 138, bitmarkParser.RULE_bot_interview);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1762;
			this.match(bitmarkParser.BitBotint);
			this.state = 1763;
			this.format();
			this.state = 1764;
			this.match(bitmarkParser.CL);
			this.state = 1775;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 1765;
					_la = this._input.LA(1);
					if (!(_la === bitmarkParser.HSPL || _la === bitmarkParser.HSPL2)) {
					this._errHandler.recoverInline(this);
					} else {
						if (this._input.LA(1) === Token.EOF) {
							this.matchedEOF = true;
						}

						this._errHandler.reportMatch(this);
						this.consume();
					}
					this.state = 1766;
					this.bot_choice();
					this.state = 1772;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === bitmarkParser.SSPL || _la === bitmarkParser.SSPL2) {
						{
						{
						this.state = 1767;
						this.sspl();
						this.state = 1768;
						this.bot_choice();
						}
						}
						this.state = 1774;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 1777;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 222, this._ctx);
			} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
			this.state = 1779;
			_la = this._input.LA(1);
			if (!(_la === bitmarkParser.HSPL || _la === bitmarkParser.HSPL2)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 1783;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 223, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1780;
					this.match(bitmarkParser.NL);
					}
					}
				}
				this.state = 1785;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 223, this._ctx);
			}
			this.state = 1799;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 226, this._ctx) ) {
			case 1:
				{
				this.state = 1786;
				this.resource();
				this.state = 1796;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 225, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 1790;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						while (_la === bitmarkParser.NL) {
							{
							{
							this.state = 1787;
							this.match(bitmarkParser.NL);
							}
							}
							this.state = 1792;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
						}
						this.state = 1793;
						this.resource();
						}
						}
					}
					this.state = 1798;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 225, this._ctx);
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
	public bot_choice(): Bot_choiceContext {
		let _localctx: Bot_choiceContext = new Bot_choiceContext(this._ctx, this.state);
		this.enterRule(_localctx, 140, bitmarkParser.RULE_bot_choice);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1808;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				this.state = 1808;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 227, this._ctx) ) {
				case 1:
					{
					this.state = 1801;
					this.words();
					}
					break;

				case 2:
					{
					this.state = 1802;
					this.instruction();
					}
					break;

				case 3:
					{
					this.state = 1803;
					this.audiobit();
					}
					break;

				case 4:
					{
					this.state = 1804;
					this.gap();
					}
					break;

				case 5:
					{
					this.state = 1805;
					this.choice_plus();
					}
					break;

				case 6:
					{
					this.state = 1806;
					this.choice_minus();
					}
					break;

				case 7:
					{
					this.state = 1807;
					this.choice_star();
					}
					break;
				}
				}
				this.state = 1810;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (((((_la - 79)) & ~0x1F) === 0 && ((1 << (_la - 79)) & ((1 << (bitmarkParser.OPU - 79)) | (1 << (bitmarkParser.OPB - 79)) | (1 << (bitmarkParser.OPP - 79)) | (1 << (bitmarkParser.OPM - 79)) | (1 << (bitmarkParser.OPR - 79)) | (1 << (bitmarkParser.OPC - 79)) | (1 << (bitmarkParser.AMP - 79)) | (1 << (bitmarkParser.Greater - 79)) | (1 << (bitmarkParser.Less - 79)) | (1 << (bitmarkParser.RightAngle - 79)) | (1 << (bitmarkParser.RightArrow - 79)) | (1 << (bitmarkParser.QUOTE_INDEX - 79)))) !== 0) || ((((_la - 111)) & ~0x1F) === 0 && ((1 << (_la - 111)) & ((1 << (bitmarkParser.SENTENCE - 111)) | (1 << (bitmarkParser.AmpAudio - 111)) | (1 << (bitmarkParser.AmpImage - 111)))) !== 0) || ((((_la - 144)) & ~0x1F) === 0 && ((1 << (_la - 144)) & ((1 << (bitmarkParser.AmpVideo - 144)) | (1 << (bitmarkParser.AmpArticle - 144)) | (1 << (bitmarkParser.AmpDocument - 144)) | (1 << (bitmarkParser.AmpApp - 144)) | (1 << (bitmarkParser.AmpWebsite - 144)) | (1 << (bitmarkParser.AmpStillImageFilm - 144)) | (1 << (bitmarkParser.OpAmpAudio - 144)) | (1 << (bitmarkParser.AmpAudioLink - 144)) | (1 << (bitmarkParser.AmpImageLink - 144)) | (1 << (bitmarkParser.AmpVideoLink - 144)) | (1 << (bitmarkParser.AmpArticleLink - 144)) | (1 << (bitmarkParser.AmpDocumentLink - 144)) | (1 << (bitmarkParser.AmpAppLink - 144)) | (1 << (bitmarkParser.AmpWebsiteLink - 144)) | (1 << (bitmarkParser.AmpStillImageFilmLink - 144)) | (1 << (bitmarkParser.OpAmpAudioLink - 144)))) !== 0) || _la === bitmarkParser.BitmarkMinus || _la === bitmarkParser.BitmarkPlus);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public rating(): RatingContext {
		let _localctx: RatingContext = new RatingContext(this._ctx, this.state);
		this.enterRule(_localctx, 142, bitmarkParser.RULE_rating);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1812;
			this.match(bitmarkParser.BitRating);
			this.state = 1813;
			this.format();
			this.state = 1814;
			this.match(bitmarkParser.CL);
			this.state = 1818;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === bitmarkParser.NL) {
				{
				{
				this.state = 1815;
				this.match(bitmarkParser.NL);
				}
				}
				this.state = 1820;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1830;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === bitmarkParser.S || ((((_la - 73)) & ~0x1F) === 0 && ((1 << (_la - 73)) & ((1 << (bitmarkParser.OPDOLL - 73)) | (1 << (bitmarkParser.OPESC - 73)) | (1 << (bitmarkParser.OPRANGLES - 73)) | (1 << (bitmarkParser.OPRANGLEL - 73)) | (1 << (bitmarkParser.OPDANGLE - 73)) | (1 << (bitmarkParser.OPU - 73)) | (1 << (bitmarkParser.OPB - 73)) | (1 << (bitmarkParser.OPQ - 73)) | (1 << (bitmarkParser.OPA - 73)) | (1 << (bitmarkParser.OPS - 73)) | (1 << (bitmarkParser.OPHASH - 73)) | (1 << (bitmarkParser.OPC - 73)) | (1 << (bitmarkParser.COLON - 73)) | (1 << (bitmarkParser.AMP - 73)) | (1 << (bitmarkParser.Greater - 73)) | (1 << (bitmarkParser.Less - 73)) | (1 << (bitmarkParser.RightAngle - 73)) | (1 << (bitmarkParser.RightArrow - 73)) | (1 << (bitmarkParser.DBLEQ - 73)) | (1 << (bitmarkParser.QUOTE_INDEX - 73)))) !== 0) || ((((_la - 105)) & ~0x1F) === 0 && ((1 << (_la - 105)) & ((1 << (bitmarkParser.DCANY - 105)) | (1 << (bitmarkParser.ArticleText - 105)) | (1 << (bitmarkParser.NUMERIC - 105)) | (1 << (bitmarkParser.STRING - 105)) | (1 << (bitmarkParser.SENTENCE - 105)) | (1 << (bitmarkParser.AtProgress - 105)) | (1 << (bitmarkParser.AtReference - 105)) | (1 << (bitmarkParser.AtProgressPoints - 105)) | (1 << (bitmarkParser.AtExampleWithStr - 105)) | (1 << (bitmarkParser.AtExamplecol - 105)) | (1 << (bitmarkParser.AtExamplecl - 105)) | (1 << (bitmarkParser.AtPartialAnswerS - 105)) | (1 << (bitmarkParser.AtPartialAnswer - 105)) | (1 << (bitmarkParser.AtLabeltrue - 105)) | (1 << (bitmarkParser.AtLabelfalse - 105)) | (1 << (bitmarkParser.OpAtCopyright - 105)) | (1 << (bitmarkParser.OpAtIsTracked - 105)) | (1 << (bitmarkParser.OpAtIsInfoOnly - 105)))) !== 0) || ((((_la - 137)) & ~0x1F) === 0 && ((1 << (_la - 137)) & ((1 << (bitmarkParser.AtDate - 137)) | (1 << (bitmarkParser.AmpAudio - 137)) | (1 << (bitmarkParser.AmpImage - 137)) | (1 << (bitmarkParser.AmpVideo - 137)) | (1 << (bitmarkParser.AmpArticle - 137)) | (1 << (bitmarkParser.AmpDocument - 137)) | (1 << (bitmarkParser.AmpApp - 137)) | (1 << (bitmarkParser.AmpWebsite - 137)) | (1 << (bitmarkParser.AmpStillImageFilm - 137)) | (1 << (bitmarkParser.OpAmpAudio - 137)) | (1 << (bitmarkParser.OpAmpImage - 137)) | (1 << (bitmarkParser.OpAmpImageZoom - 137)) | (1 << (bitmarkParser.OpAmpImageWAudio - 137)) | (1 << (bitmarkParser.OpAmpVideo - 137)) | (1 << (bitmarkParser.OpAmpArticle - 137)) | (1 << (bitmarkParser.OpAmpDocument - 137)) | (1 << (bitmarkParser.OpAmpApp - 137)) | (1 << (bitmarkParser.OpAmpWebsite - 137)) | (1 << (bitmarkParser.OpAmpStillImageFilm - 137)) | (1 << (bitmarkParser.BracEnclose - 137)) | (1 << (bitmarkParser.AmpAudioLink - 137)) | (1 << (bitmarkParser.AmpImageLink - 137)) | (1 << (bitmarkParser.AmpVideoLink - 137)) | (1 << (bitmarkParser.AmpArticleLink - 137)) | (1 << (bitmarkParser.AmpDocumentLink - 137)) | (1 << (bitmarkParser.AmpAppLink - 137)))) !== 0) || ((((_la - 169)) & ~0x1F) === 0 && ((1 << (_la - 169)) & ((1 << (bitmarkParser.AmpWebsiteLink - 169)) | (1 << (bitmarkParser.AmpStillImageFilmLink - 169)) | (1 << (bitmarkParser.OpAmpAudioLink - 169)) | (1 << (bitmarkParser.OpAmpImageLink - 169)) | (1 << (bitmarkParser.OpAmpVideoLink - 169)) | (1 << (bitmarkParser.OpAmpArticleLink - 169)) | (1 << (bitmarkParser.OpAmpDocumentLink - 169)) | (1 << (bitmarkParser.OpAmpAppLink - 169)) | (1 << (bitmarkParser.OpAmpWebsiteLink - 169)) | (1 << (bitmarkParser.OpAmpStillImageFilmLink - 169)) | (1 << (bitmarkParser.BitmarkMinus - 169)) | (1 << (bitmarkParser.BitmarkPlus - 169)) | (1 << (bitmarkParser.URL - 169)) | (1 << (bitmarkParser.LIST_LINE - 169)))) !== 0)) {
				{
				{
				this.state = 1821;
				this.bitElem();
				this.state = 1825;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === bitmarkParser.NL) {
					{
					{
					this.state = 1822;
					this.match(bitmarkParser.NL);
					}
					}
					this.state = 1827;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
				}
				this.state = 1832;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1841;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 1833;
					_la = this._input.LA(1);
					if (!(_la === bitmarkParser.HSPL || _la === bitmarkParser.HSPL2)) {
					this._errHandler.recoverInline(this);
					} else {
						if (this._input.LA(1) === Token.EOF) {
							this.matchedEOF = true;
						}

						this._errHandler.reportMatch(this);
						this.consume();
					}
					this.state = 1834;
					this.s_and_w();
					this.state = 1837;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					do {
						{
						{
						this.state = 1835;
						this.match(bitmarkParser.NL);
						this.state = 1836;
						this.bullet_item();
						}
						}
						this.state = 1839;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					} while (_la === bitmarkParser.NL);
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 1843;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 233, this._ctx);
			} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
			this.state = 1845;
			_la = this._input.LA(1);
			if (!(_la === bitmarkParser.HSPL || _la === bitmarkParser.HSPL2)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 1849;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 234, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1846;
					this.match(bitmarkParser.NL);
					}
					}
				}
				this.state = 1851;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 234, this._ctx);
			}
			this.state = 1865;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 237, this._ctx) ) {
			case 1:
				{
				this.state = 1852;
				this.resource();
				this.state = 1862;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 236, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 1856;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						while (_la === bitmarkParser.NL) {
							{
							{
							this.state = 1853;
							this.match(bitmarkParser.NL);
							}
							}
							this.state = 1858;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
						}
						this.state = 1859;
						this.resource();
						}
						}
					}
					this.state = 1864;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 236, this._ctx);
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
	public bullet_item(): Bullet_itemContext {
		let _localctx: Bullet_itemContext = new Bullet_itemContext(this._ctx, this.state);
		this.enterRule(_localctx, 144, bitmarkParser.RULE_bullet_item);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1867;
			this.match(bitmarkParser.OPBUL);
			this.state = 1868;
			this.s_and_w();
			this.state = 1869;
			this.match(bitmarkParser.CL);
			this.state = 1871;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === bitmarkParser.AtPoints) {
				{
				this.state = 1870;
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
	public survey(): SurveyContext {
		let _localctx: SurveyContext = new SurveyContext(this._ctx, this.state);
		this.enterRule(_localctx, 146, bitmarkParser.RULE_survey);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1873;
			this.match(bitmarkParser.BitSurvey);
			this.state = 1874;
			this.format();
			this.state = 1875;
			this.match(bitmarkParser.CL);
			this.state = 1879;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === bitmarkParser.NL) {
				{
				{
				this.state = 1876;
				this.match(bitmarkParser.NL);
				}
				}
				this.state = 1881;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1891;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === bitmarkParser.S || ((((_la - 73)) & ~0x1F) === 0 && ((1 << (_la - 73)) & ((1 << (bitmarkParser.OPDOLL - 73)) | (1 << (bitmarkParser.OPESC - 73)) | (1 << (bitmarkParser.OPRANGLES - 73)) | (1 << (bitmarkParser.OPRANGLEL - 73)) | (1 << (bitmarkParser.OPDANGLE - 73)) | (1 << (bitmarkParser.OPU - 73)) | (1 << (bitmarkParser.OPB - 73)) | (1 << (bitmarkParser.OPQ - 73)) | (1 << (bitmarkParser.OPA - 73)) | (1 << (bitmarkParser.OPS - 73)) | (1 << (bitmarkParser.OPHASH - 73)) | (1 << (bitmarkParser.OPC - 73)) | (1 << (bitmarkParser.COLON - 73)) | (1 << (bitmarkParser.AMP - 73)) | (1 << (bitmarkParser.Greater - 73)) | (1 << (bitmarkParser.Less - 73)) | (1 << (bitmarkParser.RightAngle - 73)) | (1 << (bitmarkParser.RightArrow - 73)) | (1 << (bitmarkParser.DBLEQ - 73)) | (1 << (bitmarkParser.QUOTE_INDEX - 73)))) !== 0) || ((((_la - 105)) & ~0x1F) === 0 && ((1 << (_la - 105)) & ((1 << (bitmarkParser.DCANY - 105)) | (1 << (bitmarkParser.ArticleText - 105)) | (1 << (bitmarkParser.NUMERIC - 105)) | (1 << (bitmarkParser.STRING - 105)) | (1 << (bitmarkParser.SENTENCE - 105)) | (1 << (bitmarkParser.AtProgress - 105)) | (1 << (bitmarkParser.AtReference - 105)) | (1 << (bitmarkParser.AtProgressPoints - 105)) | (1 << (bitmarkParser.AtExampleWithStr - 105)) | (1 << (bitmarkParser.AtExamplecol - 105)) | (1 << (bitmarkParser.AtExamplecl - 105)) | (1 << (bitmarkParser.AtPartialAnswerS - 105)) | (1 << (bitmarkParser.AtPartialAnswer - 105)) | (1 << (bitmarkParser.AtLabeltrue - 105)) | (1 << (bitmarkParser.AtLabelfalse - 105)) | (1 << (bitmarkParser.OpAtCopyright - 105)) | (1 << (bitmarkParser.OpAtIsTracked - 105)) | (1 << (bitmarkParser.OpAtIsInfoOnly - 105)))) !== 0) || ((((_la - 137)) & ~0x1F) === 0 && ((1 << (_la - 137)) & ((1 << (bitmarkParser.AtDate - 137)) | (1 << (bitmarkParser.AmpAudio - 137)) | (1 << (bitmarkParser.AmpImage - 137)) | (1 << (bitmarkParser.AmpVideo - 137)) | (1 << (bitmarkParser.AmpArticle - 137)) | (1 << (bitmarkParser.AmpDocument - 137)) | (1 << (bitmarkParser.AmpApp - 137)) | (1 << (bitmarkParser.AmpWebsite - 137)) | (1 << (bitmarkParser.AmpStillImageFilm - 137)) | (1 << (bitmarkParser.OpAmpAudio - 137)) | (1 << (bitmarkParser.OpAmpImage - 137)) | (1 << (bitmarkParser.OpAmpImageZoom - 137)) | (1 << (bitmarkParser.OpAmpImageWAudio - 137)) | (1 << (bitmarkParser.OpAmpVideo - 137)) | (1 << (bitmarkParser.OpAmpArticle - 137)) | (1 << (bitmarkParser.OpAmpDocument - 137)) | (1 << (bitmarkParser.OpAmpApp - 137)) | (1 << (bitmarkParser.OpAmpWebsite - 137)) | (1 << (bitmarkParser.OpAmpStillImageFilm - 137)) | (1 << (bitmarkParser.BracEnclose - 137)) | (1 << (bitmarkParser.AmpAudioLink - 137)) | (1 << (bitmarkParser.AmpImageLink - 137)) | (1 << (bitmarkParser.AmpVideoLink - 137)) | (1 << (bitmarkParser.AmpArticleLink - 137)) | (1 << (bitmarkParser.AmpDocumentLink - 137)) | (1 << (bitmarkParser.AmpAppLink - 137)))) !== 0) || ((((_la - 169)) & ~0x1F) === 0 && ((1 << (_la - 169)) & ((1 << (bitmarkParser.AmpWebsiteLink - 169)) | (1 << (bitmarkParser.AmpStillImageFilmLink - 169)) | (1 << (bitmarkParser.OpAmpAudioLink - 169)) | (1 << (bitmarkParser.OpAmpImageLink - 169)) | (1 << (bitmarkParser.OpAmpVideoLink - 169)) | (1 << (bitmarkParser.OpAmpArticleLink - 169)) | (1 << (bitmarkParser.OpAmpDocumentLink - 169)) | (1 << (bitmarkParser.OpAmpAppLink - 169)) | (1 << (bitmarkParser.OpAmpWebsiteLink - 169)) | (1 << (bitmarkParser.OpAmpStillImageFilmLink - 169)) | (1 << (bitmarkParser.BitmarkMinus - 169)) | (1 << (bitmarkParser.BitmarkPlus - 169)) | (1 << (bitmarkParser.URL - 169)) | (1 << (bitmarkParser.LIST_LINE - 169)))) !== 0)) {
				{
				{
				this.state = 1882;
				this.bitElem();
				this.state = 1886;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === bitmarkParser.NL) {
					{
					{
					this.state = 1883;
					this.match(bitmarkParser.NL);
					}
					}
					this.state = 1888;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
				}
				this.state = 1893;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1909;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 1894;
					_la = this._input.LA(1);
					if (!(_la === bitmarkParser.HSPL || _la === bitmarkParser.HSPL2)) {
					this._errHandler.recoverInline(this);
					} else {
						if (this._input.LA(1) === Token.EOF) {
							this.matchedEOF = true;
						}

						this._errHandler.reportMatch(this);
						this.consume();
					}
					this.state = 1896;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === bitmarkParser.S || ((((_la - 75)) & ~0x1F) === 0 && ((1 << (_la - 75)) & ((1 << (bitmarkParser.OPESC - 75)) | (1 << (bitmarkParser.OPS - 75)) | (1 << (bitmarkParser.COLON - 75)) | (1 << (bitmarkParser.AMP - 75)) | (1 << (bitmarkParser.Greater - 75)) | (1 << (bitmarkParser.Less - 75)) | (1 << (bitmarkParser.RightAngle - 75)) | (1 << (bitmarkParser.RightArrow - 75)) | (1 << (bitmarkParser.DBLEQ - 75)) | (1 << (bitmarkParser.QUOTE_INDEX - 75)))) !== 0) || ((((_la - 108)) & ~0x1F) === 0 && ((1 << (_la - 108)) & ((1 << (bitmarkParser.NUMERIC - 108)) | (1 << (bitmarkParser.STRING - 108)) | (1 << (bitmarkParser.SENTENCE - 108)))) !== 0) || ((((_la - 140)) & ~0x1F) === 0 && ((1 << (_la - 140)) & ((1 << (bitmarkParser.AmpAudio - 140)) | (1 << (bitmarkParser.AmpImage - 140)) | (1 << (bitmarkParser.AmpVideo - 140)) | (1 << (bitmarkParser.AmpArticle - 140)) | (1 << (bitmarkParser.AmpDocument - 140)) | (1 << (bitmarkParser.AmpApp - 140)) | (1 << (bitmarkParser.AmpWebsite - 140)) | (1 << (bitmarkParser.AmpStillImageFilm - 140)) | (1 << (bitmarkParser.AmpAudioLink - 140)) | (1 << (bitmarkParser.AmpImageLink - 140)) | (1 << (bitmarkParser.AmpVideoLink - 140)) | (1 << (bitmarkParser.AmpArticleLink - 140)) | (1 << (bitmarkParser.AmpDocumentLink - 140)) | (1 << (bitmarkParser.AmpAppLink - 140)) | (1 << (bitmarkParser.AmpWebsiteLink - 140)) | (1 << (bitmarkParser.AmpStillImageFilmLink - 140)))) !== 0) || ((((_la - 179)) & ~0x1F) === 0 && ((1 << (_la - 179)) & ((1 << (bitmarkParser.BitmarkMinus - 179)) | (1 << (bitmarkParser.BitmarkPlus - 179)) | (1 << (bitmarkParser.URL - 179)))) !== 0)) {
						{
						this.state = 1895;
						this.s_and_w();
						}
					}

					this.state = 1905;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					do {
						{
						{
						this.state = 1901;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						while (_la === bitmarkParser.NL) {
							{
							{
							this.state = 1898;
							this.match(bitmarkParser.NL);
							}
							}
							this.state = 1903;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
						}
						this.state = 1904;
						this.bullet_item();
						}
						}
						this.state = 1907;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					} while (_la === bitmarkParser.OPBUL || _la === bitmarkParser.NL);
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 1911;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 245, this._ctx);
			} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
			this.state = 1913;
			_la = this._input.LA(1);
			if (!(_la === bitmarkParser.HSPL || _la === bitmarkParser.HSPL2)) {
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
	public survey_1(): Survey_1Context {
		let _localctx: Survey_1Context = new Survey_1Context(this._ctx, this.state);
		this.enterRule(_localctx, 148, bitmarkParser.RULE_survey_1);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1915;
			this.match(bitmarkParser.BitSurvey1);
			this.state = 1916;
			this.format();
			this.state = 1917;
			this.match(bitmarkParser.CL);
			this.state = 1921;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === bitmarkParser.NL) {
				{
				{
				this.state = 1918;
				this.match(bitmarkParser.NL);
				}
				}
				this.state = 1923;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1933;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === bitmarkParser.S || ((((_la - 73)) & ~0x1F) === 0 && ((1 << (_la - 73)) & ((1 << (bitmarkParser.OPDOLL - 73)) | (1 << (bitmarkParser.OPESC - 73)) | (1 << (bitmarkParser.OPRANGLES - 73)) | (1 << (bitmarkParser.OPRANGLEL - 73)) | (1 << (bitmarkParser.OPDANGLE - 73)) | (1 << (bitmarkParser.OPU - 73)) | (1 << (bitmarkParser.OPB - 73)) | (1 << (bitmarkParser.OPQ - 73)) | (1 << (bitmarkParser.OPA - 73)) | (1 << (bitmarkParser.OPS - 73)) | (1 << (bitmarkParser.OPHASH - 73)) | (1 << (bitmarkParser.OPC - 73)) | (1 << (bitmarkParser.COLON - 73)) | (1 << (bitmarkParser.AMP - 73)) | (1 << (bitmarkParser.Greater - 73)) | (1 << (bitmarkParser.Less - 73)) | (1 << (bitmarkParser.RightAngle - 73)) | (1 << (bitmarkParser.RightArrow - 73)) | (1 << (bitmarkParser.DBLEQ - 73)) | (1 << (bitmarkParser.QUOTE_INDEX - 73)))) !== 0) || ((((_la - 105)) & ~0x1F) === 0 && ((1 << (_la - 105)) & ((1 << (bitmarkParser.DCANY - 105)) | (1 << (bitmarkParser.ArticleText - 105)) | (1 << (bitmarkParser.NUMERIC - 105)) | (1 << (bitmarkParser.STRING - 105)) | (1 << (bitmarkParser.SENTENCE - 105)) | (1 << (bitmarkParser.AtProgress - 105)) | (1 << (bitmarkParser.AtReference - 105)) | (1 << (bitmarkParser.AtProgressPoints - 105)) | (1 << (bitmarkParser.AtExampleWithStr - 105)) | (1 << (bitmarkParser.AtExamplecol - 105)) | (1 << (bitmarkParser.AtExamplecl - 105)) | (1 << (bitmarkParser.AtPartialAnswerS - 105)) | (1 << (bitmarkParser.AtPartialAnswer - 105)) | (1 << (bitmarkParser.AtLabeltrue - 105)) | (1 << (bitmarkParser.AtLabelfalse - 105)) | (1 << (bitmarkParser.OpAtCopyright - 105)) | (1 << (bitmarkParser.OpAtIsTracked - 105)) | (1 << (bitmarkParser.OpAtIsInfoOnly - 105)))) !== 0) || ((((_la - 137)) & ~0x1F) === 0 && ((1 << (_la - 137)) & ((1 << (bitmarkParser.AtDate - 137)) | (1 << (bitmarkParser.AmpAudio - 137)) | (1 << (bitmarkParser.AmpImage - 137)) | (1 << (bitmarkParser.AmpVideo - 137)) | (1 << (bitmarkParser.AmpArticle - 137)) | (1 << (bitmarkParser.AmpDocument - 137)) | (1 << (bitmarkParser.AmpApp - 137)) | (1 << (bitmarkParser.AmpWebsite - 137)) | (1 << (bitmarkParser.AmpStillImageFilm - 137)) | (1 << (bitmarkParser.OpAmpAudio - 137)) | (1 << (bitmarkParser.OpAmpImage - 137)) | (1 << (bitmarkParser.OpAmpImageZoom - 137)) | (1 << (bitmarkParser.OpAmpImageWAudio - 137)) | (1 << (bitmarkParser.OpAmpVideo - 137)) | (1 << (bitmarkParser.OpAmpArticle - 137)) | (1 << (bitmarkParser.OpAmpDocument - 137)) | (1 << (bitmarkParser.OpAmpApp - 137)) | (1 << (bitmarkParser.OpAmpWebsite - 137)) | (1 << (bitmarkParser.OpAmpStillImageFilm - 137)) | (1 << (bitmarkParser.BracEnclose - 137)) | (1 << (bitmarkParser.AmpAudioLink - 137)) | (1 << (bitmarkParser.AmpImageLink - 137)) | (1 << (bitmarkParser.AmpVideoLink - 137)) | (1 << (bitmarkParser.AmpArticleLink - 137)) | (1 << (bitmarkParser.AmpDocumentLink - 137)) | (1 << (bitmarkParser.AmpAppLink - 137)))) !== 0) || ((((_la - 169)) & ~0x1F) === 0 && ((1 << (_la - 169)) & ((1 << (bitmarkParser.AmpWebsiteLink - 169)) | (1 << (bitmarkParser.AmpStillImageFilmLink - 169)) | (1 << (bitmarkParser.OpAmpAudioLink - 169)) | (1 << (bitmarkParser.OpAmpImageLink - 169)) | (1 << (bitmarkParser.OpAmpVideoLink - 169)) | (1 << (bitmarkParser.OpAmpArticleLink - 169)) | (1 << (bitmarkParser.OpAmpDocumentLink - 169)) | (1 << (bitmarkParser.OpAmpAppLink - 169)) | (1 << (bitmarkParser.OpAmpWebsiteLink - 169)) | (1 << (bitmarkParser.OpAmpStillImageFilmLink - 169)) | (1 << (bitmarkParser.BitmarkMinus - 169)) | (1 << (bitmarkParser.BitmarkPlus - 169)) | (1 << (bitmarkParser.URL - 169)) | (1 << (bitmarkParser.LIST_LINE - 169)))) !== 0)) {
				{
				{
				this.state = 1924;
				this.bitElem();
				this.state = 1928;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === bitmarkParser.NL) {
					{
					{
					this.state = 1925;
					this.match(bitmarkParser.NL);
					}
					}
					this.state = 1930;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
				}
				this.state = 1935;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1944;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 1936;
					_la = this._input.LA(1);
					if (!(_la === bitmarkParser.HSPL || _la === bitmarkParser.HSPL2)) {
					this._errHandler.recoverInline(this);
					} else {
						if (this._input.LA(1) === Token.EOF) {
							this.matchedEOF = true;
						}

						this._errHandler.reportMatch(this);
						this.consume();
					}
					this.state = 1937;
					this.s_and_w();
					this.state = 1940;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					do {
						{
						{
						this.state = 1938;
						this.match(bitmarkParser.NL);
						this.state = 1939;
						this.bullet_item();
						}
						}
						this.state = 1942;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					} while (_la === bitmarkParser.NL);
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 1946;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 250, this._ctx);
			} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
			this.state = 1948;
			_la = this._input.LA(1);
			if (!(_la === bitmarkParser.HSPL || _la === bitmarkParser.HSPL2)) {
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
	public survey_anonymous(): Survey_anonymousContext {
		let _localctx: Survey_anonymousContext = new Survey_anonymousContext(this._ctx, this.state);
		this.enterRule(_localctx, 150, bitmarkParser.RULE_survey_anonymous);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1950;
			this.match(bitmarkParser.BitSurveyanon);
			this.state = 1951;
			this.format();
			this.state = 1952;
			this.match(bitmarkParser.CL);
			this.state = 1956;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === bitmarkParser.NL) {
				{
				{
				this.state = 1953;
				this.match(bitmarkParser.NL);
				}
				}
				this.state = 1958;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1968;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === bitmarkParser.S || ((((_la - 73)) & ~0x1F) === 0 && ((1 << (_la - 73)) & ((1 << (bitmarkParser.OPDOLL - 73)) | (1 << (bitmarkParser.OPESC - 73)) | (1 << (bitmarkParser.OPRANGLES - 73)) | (1 << (bitmarkParser.OPRANGLEL - 73)) | (1 << (bitmarkParser.OPDANGLE - 73)) | (1 << (bitmarkParser.OPU - 73)) | (1 << (bitmarkParser.OPB - 73)) | (1 << (bitmarkParser.OPQ - 73)) | (1 << (bitmarkParser.OPA - 73)) | (1 << (bitmarkParser.OPS - 73)) | (1 << (bitmarkParser.OPHASH - 73)) | (1 << (bitmarkParser.OPC - 73)) | (1 << (bitmarkParser.COLON - 73)) | (1 << (bitmarkParser.AMP - 73)) | (1 << (bitmarkParser.Greater - 73)) | (1 << (bitmarkParser.Less - 73)) | (1 << (bitmarkParser.RightAngle - 73)) | (1 << (bitmarkParser.RightArrow - 73)) | (1 << (bitmarkParser.DBLEQ - 73)) | (1 << (bitmarkParser.QUOTE_INDEX - 73)))) !== 0) || ((((_la - 105)) & ~0x1F) === 0 && ((1 << (_la - 105)) & ((1 << (bitmarkParser.DCANY - 105)) | (1 << (bitmarkParser.ArticleText - 105)) | (1 << (bitmarkParser.NUMERIC - 105)) | (1 << (bitmarkParser.STRING - 105)) | (1 << (bitmarkParser.SENTENCE - 105)) | (1 << (bitmarkParser.AtProgress - 105)) | (1 << (bitmarkParser.AtReference - 105)) | (1 << (bitmarkParser.AtProgressPoints - 105)) | (1 << (bitmarkParser.AtExampleWithStr - 105)) | (1 << (bitmarkParser.AtExamplecol - 105)) | (1 << (bitmarkParser.AtExamplecl - 105)) | (1 << (bitmarkParser.AtPartialAnswerS - 105)) | (1 << (bitmarkParser.AtPartialAnswer - 105)) | (1 << (bitmarkParser.AtLabeltrue - 105)) | (1 << (bitmarkParser.AtLabelfalse - 105)) | (1 << (bitmarkParser.OpAtCopyright - 105)) | (1 << (bitmarkParser.OpAtIsTracked - 105)) | (1 << (bitmarkParser.OpAtIsInfoOnly - 105)))) !== 0) || ((((_la - 137)) & ~0x1F) === 0 && ((1 << (_la - 137)) & ((1 << (bitmarkParser.AtDate - 137)) | (1 << (bitmarkParser.AmpAudio - 137)) | (1 << (bitmarkParser.AmpImage - 137)) | (1 << (bitmarkParser.AmpVideo - 137)) | (1 << (bitmarkParser.AmpArticle - 137)) | (1 << (bitmarkParser.AmpDocument - 137)) | (1 << (bitmarkParser.AmpApp - 137)) | (1 << (bitmarkParser.AmpWebsite - 137)) | (1 << (bitmarkParser.AmpStillImageFilm - 137)) | (1 << (bitmarkParser.OpAmpAudio - 137)) | (1 << (bitmarkParser.OpAmpImage - 137)) | (1 << (bitmarkParser.OpAmpImageZoom - 137)) | (1 << (bitmarkParser.OpAmpImageWAudio - 137)) | (1 << (bitmarkParser.OpAmpVideo - 137)) | (1 << (bitmarkParser.OpAmpArticle - 137)) | (1 << (bitmarkParser.OpAmpDocument - 137)) | (1 << (bitmarkParser.OpAmpApp - 137)) | (1 << (bitmarkParser.OpAmpWebsite - 137)) | (1 << (bitmarkParser.OpAmpStillImageFilm - 137)) | (1 << (bitmarkParser.BracEnclose - 137)) | (1 << (bitmarkParser.AmpAudioLink - 137)) | (1 << (bitmarkParser.AmpImageLink - 137)) | (1 << (bitmarkParser.AmpVideoLink - 137)) | (1 << (bitmarkParser.AmpArticleLink - 137)) | (1 << (bitmarkParser.AmpDocumentLink - 137)) | (1 << (bitmarkParser.AmpAppLink - 137)))) !== 0) || ((((_la - 169)) & ~0x1F) === 0 && ((1 << (_la - 169)) & ((1 << (bitmarkParser.AmpWebsiteLink - 169)) | (1 << (bitmarkParser.AmpStillImageFilmLink - 169)) | (1 << (bitmarkParser.OpAmpAudioLink - 169)) | (1 << (bitmarkParser.OpAmpImageLink - 169)) | (1 << (bitmarkParser.OpAmpVideoLink - 169)) | (1 << (bitmarkParser.OpAmpArticleLink - 169)) | (1 << (bitmarkParser.OpAmpDocumentLink - 169)) | (1 << (bitmarkParser.OpAmpAppLink - 169)) | (1 << (bitmarkParser.OpAmpWebsiteLink - 169)) | (1 << (bitmarkParser.OpAmpStillImageFilmLink - 169)) | (1 << (bitmarkParser.BitmarkMinus - 169)) | (1 << (bitmarkParser.BitmarkPlus - 169)) | (1 << (bitmarkParser.URL - 169)) | (1 << (bitmarkParser.LIST_LINE - 169)))) !== 0)) {
				{
				{
				this.state = 1959;
				this.bitElem();
				this.state = 1963;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === bitmarkParser.NL) {
					{
					{
					this.state = 1960;
					this.match(bitmarkParser.NL);
					}
					}
					this.state = 1965;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
				}
				this.state = 1970;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1979;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 1971;
					_la = this._input.LA(1);
					if (!(_la === bitmarkParser.HSPL || _la === bitmarkParser.HSPL2)) {
					this._errHandler.recoverInline(this);
					} else {
						if (this._input.LA(1) === Token.EOF) {
							this.matchedEOF = true;
						}

						this._errHandler.reportMatch(this);
						this.consume();
					}
					this.state = 1972;
					this.s_and_w();
					this.state = 1975;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					do {
						{
						{
						this.state = 1973;
						this.match(bitmarkParser.NL);
						this.state = 1974;
						this.bullet_item();
						}
						}
						this.state = 1977;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					} while (_la === bitmarkParser.NL);
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 1981;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 255, this._ctx);
			} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
			this.state = 1983;
			_la = this._input.LA(1);
			if (!(_la === bitmarkParser.HSPL || _la === bitmarkParser.HSPL2)) {
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
	public survey_anonymous_1(): Survey_anonymous_1Context {
		let _localctx: Survey_anonymous_1Context = new Survey_anonymous_1Context(this._ctx, this.state);
		this.enterRule(_localctx, 152, bitmarkParser.RULE_survey_anonymous_1);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1985;
			this.match(bitmarkParser.BitSurveyanon1);
			this.state = 1986;
			this.format();
			this.state = 1987;
			this.match(bitmarkParser.CL);
			this.state = 1991;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === bitmarkParser.NL) {
				{
				{
				this.state = 1988;
				this.match(bitmarkParser.NL);
				}
				}
				this.state = 1993;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 2003;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === bitmarkParser.S || ((((_la - 73)) & ~0x1F) === 0 && ((1 << (_la - 73)) & ((1 << (bitmarkParser.OPDOLL - 73)) | (1 << (bitmarkParser.OPESC - 73)) | (1 << (bitmarkParser.OPRANGLES - 73)) | (1 << (bitmarkParser.OPRANGLEL - 73)) | (1 << (bitmarkParser.OPDANGLE - 73)) | (1 << (bitmarkParser.OPU - 73)) | (1 << (bitmarkParser.OPB - 73)) | (1 << (bitmarkParser.OPQ - 73)) | (1 << (bitmarkParser.OPA - 73)) | (1 << (bitmarkParser.OPS - 73)) | (1 << (bitmarkParser.OPHASH - 73)) | (1 << (bitmarkParser.OPC - 73)) | (1 << (bitmarkParser.COLON - 73)) | (1 << (bitmarkParser.AMP - 73)) | (1 << (bitmarkParser.Greater - 73)) | (1 << (bitmarkParser.Less - 73)) | (1 << (bitmarkParser.RightAngle - 73)) | (1 << (bitmarkParser.RightArrow - 73)) | (1 << (bitmarkParser.DBLEQ - 73)) | (1 << (bitmarkParser.QUOTE_INDEX - 73)))) !== 0) || ((((_la - 105)) & ~0x1F) === 0 && ((1 << (_la - 105)) & ((1 << (bitmarkParser.DCANY - 105)) | (1 << (bitmarkParser.ArticleText - 105)) | (1 << (bitmarkParser.NUMERIC - 105)) | (1 << (bitmarkParser.STRING - 105)) | (1 << (bitmarkParser.SENTENCE - 105)) | (1 << (bitmarkParser.AtProgress - 105)) | (1 << (bitmarkParser.AtReference - 105)) | (1 << (bitmarkParser.AtProgressPoints - 105)) | (1 << (bitmarkParser.AtExampleWithStr - 105)) | (1 << (bitmarkParser.AtExamplecol - 105)) | (1 << (bitmarkParser.AtExamplecl - 105)) | (1 << (bitmarkParser.AtPartialAnswerS - 105)) | (1 << (bitmarkParser.AtPartialAnswer - 105)) | (1 << (bitmarkParser.AtLabeltrue - 105)) | (1 << (bitmarkParser.AtLabelfalse - 105)) | (1 << (bitmarkParser.OpAtCopyright - 105)) | (1 << (bitmarkParser.OpAtIsTracked - 105)) | (1 << (bitmarkParser.OpAtIsInfoOnly - 105)))) !== 0) || ((((_la - 137)) & ~0x1F) === 0 && ((1 << (_la - 137)) & ((1 << (bitmarkParser.AtDate - 137)) | (1 << (bitmarkParser.AmpAudio - 137)) | (1 << (bitmarkParser.AmpImage - 137)) | (1 << (bitmarkParser.AmpVideo - 137)) | (1 << (bitmarkParser.AmpArticle - 137)) | (1 << (bitmarkParser.AmpDocument - 137)) | (1 << (bitmarkParser.AmpApp - 137)) | (1 << (bitmarkParser.AmpWebsite - 137)) | (1 << (bitmarkParser.AmpStillImageFilm - 137)) | (1 << (bitmarkParser.OpAmpAudio - 137)) | (1 << (bitmarkParser.OpAmpImage - 137)) | (1 << (bitmarkParser.OpAmpImageZoom - 137)) | (1 << (bitmarkParser.OpAmpImageWAudio - 137)) | (1 << (bitmarkParser.OpAmpVideo - 137)) | (1 << (bitmarkParser.OpAmpArticle - 137)) | (1 << (bitmarkParser.OpAmpDocument - 137)) | (1 << (bitmarkParser.OpAmpApp - 137)) | (1 << (bitmarkParser.OpAmpWebsite - 137)) | (1 << (bitmarkParser.OpAmpStillImageFilm - 137)) | (1 << (bitmarkParser.BracEnclose - 137)) | (1 << (bitmarkParser.AmpAudioLink - 137)) | (1 << (bitmarkParser.AmpImageLink - 137)) | (1 << (bitmarkParser.AmpVideoLink - 137)) | (1 << (bitmarkParser.AmpArticleLink - 137)) | (1 << (bitmarkParser.AmpDocumentLink - 137)) | (1 << (bitmarkParser.AmpAppLink - 137)))) !== 0) || ((((_la - 169)) & ~0x1F) === 0 && ((1 << (_la - 169)) & ((1 << (bitmarkParser.AmpWebsiteLink - 169)) | (1 << (bitmarkParser.AmpStillImageFilmLink - 169)) | (1 << (bitmarkParser.OpAmpAudioLink - 169)) | (1 << (bitmarkParser.OpAmpImageLink - 169)) | (1 << (bitmarkParser.OpAmpVideoLink - 169)) | (1 << (bitmarkParser.OpAmpArticleLink - 169)) | (1 << (bitmarkParser.OpAmpDocumentLink - 169)) | (1 << (bitmarkParser.OpAmpAppLink - 169)) | (1 << (bitmarkParser.OpAmpWebsiteLink - 169)) | (1 << (bitmarkParser.OpAmpStillImageFilmLink - 169)) | (1 << (bitmarkParser.BitmarkMinus - 169)) | (1 << (bitmarkParser.BitmarkPlus - 169)) | (1 << (bitmarkParser.URL - 169)) | (1 << (bitmarkParser.LIST_LINE - 169)))) !== 0)) {
				{
				{
				this.state = 1994;
				this.bitElem();
				this.state = 1998;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === bitmarkParser.NL) {
					{
					{
					this.state = 1995;
					this.match(bitmarkParser.NL);
					}
					}
					this.state = 2000;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
				}
				this.state = 2005;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 2014;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 2006;
					_la = this._input.LA(1);
					if (!(_la === bitmarkParser.HSPL || _la === bitmarkParser.HSPL2)) {
					this._errHandler.recoverInline(this);
					} else {
						if (this._input.LA(1) === Token.EOF) {
							this.matchedEOF = true;
						}

						this._errHandler.reportMatch(this);
						this.consume();
					}
					this.state = 2007;
					this.s_and_w();
					this.state = 2010;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					do {
						{
						{
						this.state = 2008;
						this.match(bitmarkParser.NL);
						this.state = 2009;
						this.bullet_item();
						}
						}
						this.state = 2012;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					} while (_la === bitmarkParser.NL);
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 2016;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 260, this._ctx);
			} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
			this.state = 2018;
			_la = this._input.LA(1);
			if (!(_la === bitmarkParser.HSPL || _la === bitmarkParser.HSPL2)) {
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
	public self_assessment(): Self_assessmentContext {
		let _localctx: Self_assessmentContext = new Self_assessmentContext(this._ctx, this.state);
		this.enterRule(_localctx, 154, bitmarkParser.RULE_self_assessment);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2020;
			this.match(bitmarkParser.BitSelfassess);
			this.state = 2021;
			this.format();
			this.state = 2022;
			this.match(bitmarkParser.CL);
			this.state = 2026;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === bitmarkParser.NL) {
				{
				{
				this.state = 2023;
				this.match(bitmarkParser.NL);
				}
				}
				this.state = 2028;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 2038;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === bitmarkParser.S || ((((_la - 73)) & ~0x1F) === 0 && ((1 << (_la - 73)) & ((1 << (bitmarkParser.OPDOLL - 73)) | (1 << (bitmarkParser.OPESC - 73)) | (1 << (bitmarkParser.OPRANGLES - 73)) | (1 << (bitmarkParser.OPRANGLEL - 73)) | (1 << (bitmarkParser.OPDANGLE - 73)) | (1 << (bitmarkParser.OPU - 73)) | (1 << (bitmarkParser.OPB - 73)) | (1 << (bitmarkParser.OPQ - 73)) | (1 << (bitmarkParser.OPA - 73)) | (1 << (bitmarkParser.OPS - 73)) | (1 << (bitmarkParser.OPHASH - 73)) | (1 << (bitmarkParser.OPC - 73)) | (1 << (bitmarkParser.COLON - 73)) | (1 << (bitmarkParser.AMP - 73)) | (1 << (bitmarkParser.Greater - 73)) | (1 << (bitmarkParser.Less - 73)) | (1 << (bitmarkParser.RightAngle - 73)) | (1 << (bitmarkParser.RightArrow - 73)) | (1 << (bitmarkParser.DBLEQ - 73)) | (1 << (bitmarkParser.QUOTE_INDEX - 73)))) !== 0) || ((((_la - 105)) & ~0x1F) === 0 && ((1 << (_la - 105)) & ((1 << (bitmarkParser.DCANY - 105)) | (1 << (bitmarkParser.ArticleText - 105)) | (1 << (bitmarkParser.NUMERIC - 105)) | (1 << (bitmarkParser.STRING - 105)) | (1 << (bitmarkParser.SENTENCE - 105)) | (1 << (bitmarkParser.AtProgress - 105)) | (1 << (bitmarkParser.AtReference - 105)) | (1 << (bitmarkParser.AtProgressPoints - 105)) | (1 << (bitmarkParser.AtExampleWithStr - 105)) | (1 << (bitmarkParser.AtExamplecol - 105)) | (1 << (bitmarkParser.AtExamplecl - 105)) | (1 << (bitmarkParser.AtPartialAnswerS - 105)) | (1 << (bitmarkParser.AtPartialAnswer - 105)) | (1 << (bitmarkParser.AtLabeltrue - 105)) | (1 << (bitmarkParser.AtLabelfalse - 105)) | (1 << (bitmarkParser.OpAtCopyright - 105)) | (1 << (bitmarkParser.OpAtIsTracked - 105)) | (1 << (bitmarkParser.OpAtIsInfoOnly - 105)))) !== 0) || ((((_la - 137)) & ~0x1F) === 0 && ((1 << (_la - 137)) & ((1 << (bitmarkParser.AtDate - 137)) | (1 << (bitmarkParser.AmpAudio - 137)) | (1 << (bitmarkParser.AmpImage - 137)) | (1 << (bitmarkParser.AmpVideo - 137)) | (1 << (bitmarkParser.AmpArticle - 137)) | (1 << (bitmarkParser.AmpDocument - 137)) | (1 << (bitmarkParser.AmpApp - 137)) | (1 << (bitmarkParser.AmpWebsite - 137)) | (1 << (bitmarkParser.AmpStillImageFilm - 137)) | (1 << (bitmarkParser.OpAmpAudio - 137)) | (1 << (bitmarkParser.OpAmpImage - 137)) | (1 << (bitmarkParser.OpAmpImageZoom - 137)) | (1 << (bitmarkParser.OpAmpImageWAudio - 137)) | (1 << (bitmarkParser.OpAmpVideo - 137)) | (1 << (bitmarkParser.OpAmpArticle - 137)) | (1 << (bitmarkParser.OpAmpDocument - 137)) | (1 << (bitmarkParser.OpAmpApp - 137)) | (1 << (bitmarkParser.OpAmpWebsite - 137)) | (1 << (bitmarkParser.OpAmpStillImageFilm - 137)) | (1 << (bitmarkParser.BracEnclose - 137)) | (1 << (bitmarkParser.AmpAudioLink - 137)) | (1 << (bitmarkParser.AmpImageLink - 137)) | (1 << (bitmarkParser.AmpVideoLink - 137)) | (1 << (bitmarkParser.AmpArticleLink - 137)) | (1 << (bitmarkParser.AmpDocumentLink - 137)) | (1 << (bitmarkParser.AmpAppLink - 137)))) !== 0) || ((((_la - 169)) & ~0x1F) === 0 && ((1 << (_la - 169)) & ((1 << (bitmarkParser.AmpWebsiteLink - 169)) | (1 << (bitmarkParser.AmpStillImageFilmLink - 169)) | (1 << (bitmarkParser.OpAmpAudioLink - 169)) | (1 << (bitmarkParser.OpAmpImageLink - 169)) | (1 << (bitmarkParser.OpAmpVideoLink - 169)) | (1 << (bitmarkParser.OpAmpArticleLink - 169)) | (1 << (bitmarkParser.OpAmpDocumentLink - 169)) | (1 << (bitmarkParser.OpAmpAppLink - 169)) | (1 << (bitmarkParser.OpAmpWebsiteLink - 169)) | (1 << (bitmarkParser.OpAmpStillImageFilmLink - 169)) | (1 << (bitmarkParser.BitmarkMinus - 169)) | (1 << (bitmarkParser.BitmarkPlus - 169)) | (1 << (bitmarkParser.URL - 169)) | (1 << (bitmarkParser.LIST_LINE - 169)))) !== 0)) {
				{
				{
				this.state = 2029;
				this.bitElem();
				this.state = 2033;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === bitmarkParser.NL) {
					{
					{
					this.state = 2030;
					this.match(bitmarkParser.NL);
					}
					}
					this.state = 2035;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
				}
				this.state = 2040;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 2054;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 2041;
					_la = this._input.LA(1);
					if (!(_la === bitmarkParser.HSPL || _la === bitmarkParser.HSPL2)) {
					this._errHandler.recoverInline(this);
					} else {
						if (this._input.LA(1) === Token.EOF) {
							this.matchedEOF = true;
						}

						this._errHandler.reportMatch(this);
						this.consume();
					}
					this.state = 2042;
					this.self_assess_s_and_w();
					this.state = 2050;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					do {
						{
						{
						this.state = 2046;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						while (_la === bitmarkParser.NL) {
							{
							{
							this.state = 2043;
							this.match(bitmarkParser.NL);
							}
							}
							this.state = 2048;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
						}
						this.state = 2049;
						this.bullet_item();
						}
						}
						this.state = 2052;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					} while (_la === bitmarkParser.OPBUL || _la === bitmarkParser.NL);
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 2056;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 266, this._ctx);
			} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
			this.state = 2058;
			_la = this._input.LA(1);
			if (!(_la === bitmarkParser.HSPL || _la === bitmarkParser.HSPL2)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 2062;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 267, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 2059;
					this.match(bitmarkParser.NL);
					}
					}
				}
				this.state = 2064;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 267, this._ctx);
			}
			this.state = 2078;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 270, this._ctx) ) {
			case 1:
				{
				this.state = 2065;
				this.resource();
				this.state = 2075;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 269, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 2069;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						while (_la === bitmarkParser.NL) {
							{
							{
							this.state = 2066;
							this.match(bitmarkParser.NL);
							}
							}
							this.state = 2071;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
						}
						this.state = 2072;
						this.resource();
						}
						}
					}
					this.state = 2077;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 269, this._ctx);
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
	public self_assess_s_and_w(): Self_assess_s_and_wContext {
		let _localctx: Self_assess_s_and_wContext = new Self_assess_s_and_wContext(this._ctx, this.state);
		this.enterRule(_localctx, 156, bitmarkParser.RULE_self_assess_s_and_w);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2081;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 2080;
					_la = this._input.LA(1);
					if (_la <= 0 || (_la === bitmarkParser.OPBUL)) {
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
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 2083;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 271, this._ctx);
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
	public atpoint(): AtpointContext {
		let _localctx: AtpointContext = new AtpointContext(this._ctx, this.state);
		this.enterRule(_localctx, 158, bitmarkParser.RULE_atpoint);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2085;
			this.match(bitmarkParser.AtPoints);
			this.state = 2086;
			this.match(bitmarkParser.NUMERIC);
			this.state = 2087;
			this.match(bitmarkParser.CL);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 160, bitmarkParser.RULE_format);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2092;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 272, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 2089;
					this.resource_format();
					}
					}
				}
				this.state = 2094;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 272, this._ctx);
			}
			this.state = 2099;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 140)) & ~0x1F) === 0 && ((1 << (_la - 140)) & ((1 << (bitmarkParser.AmpAudio - 140)) | (1 << (bitmarkParser.AmpImage - 140)) | (1 << (bitmarkParser.AmpImageZoom - 140)) | (1 << (bitmarkParser.AmpImageWAudio - 140)) | (1 << (bitmarkParser.AmpVideo - 140)) | (1 << (bitmarkParser.AmpArticle - 140)) | (1 << (bitmarkParser.AmpDocument - 140)) | (1 << (bitmarkParser.AmpApp - 140)) | (1 << (bitmarkParser.AmpWebsite - 140)) | (1 << (bitmarkParser.AmpStillImageFilm - 140)) | (1 << (bitmarkParser.AmpPdf - 140)) | (1 << (bitmarkParser.AmpAudioLink - 140)) | (1 << (bitmarkParser.AmpImageLink - 140)) | (1 << (bitmarkParser.AmpVideoLink - 140)) | (1 << (bitmarkParser.AmpArticleLink - 140)) | (1 << (bitmarkParser.AmpDocumentLink - 140)) | (1 << (bitmarkParser.AmpAppLink - 140)) | (1 << (bitmarkParser.AmpWebsiteLink - 140)) | (1 << (bitmarkParser.AmpStillImageFilmLink - 140)))) !== 0) || _la === bitmarkParser.ColonText) {
				{
				this.state = 2097;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case bitmarkParser.ColonText:
					{
					this.state = 2095;
					this.match(bitmarkParser.ColonText);
					}
					break;
				case bitmarkParser.AmpAudio:
				case bitmarkParser.AmpImage:
				case bitmarkParser.AmpImageZoom:
				case bitmarkParser.AmpImageWAudio:
				case bitmarkParser.AmpVideo:
				case bitmarkParser.AmpArticle:
				case bitmarkParser.AmpDocument:
				case bitmarkParser.AmpApp:
				case bitmarkParser.AmpWebsite:
				case bitmarkParser.AmpStillImageFilm:
				case bitmarkParser.AmpPdf:
				case bitmarkParser.AmpAudioLink:
				case bitmarkParser.AmpImageLink:
				case bitmarkParser.AmpVideoLink:
				case bitmarkParser.AmpArticleLink:
				case bitmarkParser.AmpDocumentLink:
				case bitmarkParser.AmpAppLink:
				case bitmarkParser.AmpWebsiteLink:
				case bitmarkParser.AmpStillImageFilmLink:
					{
					this.state = 2096;
					this.resource_format_extra();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				this.state = 2101;
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
		this.enterRule(_localctx, 162, bitmarkParser.RULE_resource_format);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2102;
			_la = this._input.LA(1);
			if (!(((((_la - 145)) & ~0x1F) === 0 && ((1 << (_la - 145)) & ((1 << (bitmarkParser.AmpArticle - 145)) | (1 << (bitmarkParser.AmpDocument - 145)) | (1 << (bitmarkParser.AmpWebsite - 145)) | (1 << (bitmarkParser.AmpStillImageFilm - 145)) | (1 << (bitmarkParser.AmpAudioLink - 145)) | (1 << (bitmarkParser.AmpImageLink - 145)) | (1 << (bitmarkParser.AmpVideoLink - 145)) | (1 << (bitmarkParser.AmpArticleLink - 145)) | (1 << (bitmarkParser.AmpDocumentLink - 145)) | (1 << (bitmarkParser.AmpAppLink - 145)) | (1 << (bitmarkParser.AmpWebsiteLink - 145)) | (1 << (bitmarkParser.AmpStillImageFilmLink - 145)))) !== 0) || _la === bitmarkParser.BitmarkMinus || _la === bitmarkParser.BitmarkPlus)) {
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
		this.enterRule(_localctx, 164, bitmarkParser.RULE_resource_format_extra);
		try {
			this.state = 2113;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case bitmarkParser.AmpImage:
			case bitmarkParser.AmpImageZoom:
			case bitmarkParser.AmpImageWAudio:
			case bitmarkParser.AmpImageLink:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2104;
				this.image_format();
				}
				break;
			case bitmarkParser.AmpAudio:
			case bitmarkParser.AmpAudioLink:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2105;
				this.audio_format();
				}
				break;
			case bitmarkParser.AmpVideo:
			case bitmarkParser.AmpVideoLink:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 2106;
				this.video_format();
				}
				break;
			case bitmarkParser.AmpArticle:
			case bitmarkParser.AmpArticleLink:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 2107;
				this.article_format();
				}
				break;
			case bitmarkParser.AmpDocument:
			case bitmarkParser.AmpDocumentLink:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 2108;
				this.document_format();
				}
				break;
			case bitmarkParser.AmpApp:
			case bitmarkParser.AmpAppLink:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 2109;
				this.app_format();
				}
				break;
			case bitmarkParser.AmpWebsite:
			case bitmarkParser.AmpWebsiteLink:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 2110;
				this.website_format();
				}
				break;
			case bitmarkParser.AmpStillImageFilm:
			case bitmarkParser.AmpStillImageFilmLink:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 2111;
				this.stillimagefilm_format();
				}
				break;
			case bitmarkParser.AmpPdf:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 2112;
				this.match(bitmarkParser.AmpPdf);
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
		this.enterRule(_localctx, 166, bitmarkParser.RULE_image_format);
		let _la: number;
		try {
			this.state = 2129;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case bitmarkParser.AmpImage:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2115;
				this.match(bitmarkParser.AmpImage);
				this.state = 2118;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case bitmarkParser.Image_type:
					{
					{
					this.state = 2116;
					this.match(bitmarkParser.Image_type);
					}
					}
					break;
				case bitmarkParser.DotArticleAtt:
					{
					{
					this.state = 2117;
					this.match(bitmarkParser.DotArticleAtt);
					}
					}
					break;
				case bitmarkParser.CL:
				case bitmarkParser.AmpAudio:
				case bitmarkParser.AmpImage:
				case bitmarkParser.AmpImageZoom:
				case bitmarkParser.AmpImageWAudio:
				case bitmarkParser.AmpVideo:
				case bitmarkParser.AmpArticle:
				case bitmarkParser.AmpDocument:
				case bitmarkParser.AmpApp:
				case bitmarkParser.AmpWebsite:
				case bitmarkParser.AmpStillImageFilm:
				case bitmarkParser.AmpPdf:
				case bitmarkParser.AmpAudioLink:
				case bitmarkParser.AmpImageLink:
				case bitmarkParser.AmpVideoLink:
				case bitmarkParser.AmpArticleLink:
				case bitmarkParser.AmpDocumentLink:
				case bitmarkParser.AmpAppLink:
				case bitmarkParser.AmpWebsiteLink:
				case bitmarkParser.AmpStillImageFilmLink:
				case bitmarkParser.ColonText:
					break;
				default:
					break;
				}
				}
				break;
			case bitmarkParser.AmpImageLink:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2120;
				this.match(bitmarkParser.AmpImageLink);
				this.state = 2122;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === bitmarkParser.Image_type) {
					{
					this.state = 2121;
					this.match(bitmarkParser.Image_type);
					}
				}

				}
				break;
			case bitmarkParser.AmpImageZoom:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 2124;
				this.match(bitmarkParser.AmpImageZoom);
				this.state = 2126;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === bitmarkParser.Image_type) {
					{
					this.state = 2125;
					this.match(bitmarkParser.Image_type);
					}
				}

				}
				break;
			case bitmarkParser.AmpImageWAudio:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 2128;
				this.match(bitmarkParser.AmpImageWAudio);
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
		this.enterRule(_localctx, 168, bitmarkParser.RULE_video_format);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2131;
			_la = this._input.LA(1);
			if (!(_la === bitmarkParser.AmpVideo || _la === bitmarkParser.AmpVideoLink)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 2134;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === bitmarkParser.COLON) {
				{
				this.state = 2132;
				this.match(bitmarkParser.COLON);
				this.state = 2133;
				this.match(bitmarkParser.Video_type);
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
		this.enterRule(_localctx, 170, bitmarkParser.RULE_article_format);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2136;
			_la = this._input.LA(1);
			if (!(_la === bitmarkParser.AmpArticle || _la === bitmarkParser.AmpArticleLink)) {
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
		this.enterRule(_localctx, 172, bitmarkParser.RULE_document_format);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2138;
			_la = this._input.LA(1);
			if (!(_la === bitmarkParser.AmpDocument || _la === bitmarkParser.AmpDocumentLink)) {
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
		this.enterRule(_localctx, 174, bitmarkParser.RULE_app_format);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2140;
			_la = this._input.LA(1);
			if (!(_la === bitmarkParser.AmpApp || _la === bitmarkParser.AmpAppLink)) {
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
		this.enterRule(_localctx, 176, bitmarkParser.RULE_website_format);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2142;
			_la = this._input.LA(1);
			if (!(_la === bitmarkParser.AmpWebsite || _la === bitmarkParser.AmpWebsiteLink)) {
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
		this.enterRule(_localctx, 178, bitmarkParser.RULE_stillimagefilm_format);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2144;
			_la = this._input.LA(1);
			if (!(_la === bitmarkParser.AmpStillImageFilm || _la === bitmarkParser.AmpStillImageFilmLink)) {
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
		this.enterRule(_localctx, 180, bitmarkParser.RULE_op_article_format);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2146;
			_la = this._input.LA(1);
			if (!(_la === bitmarkParser.OpAmpArticle || _la === bitmarkParser.OpAmpArticleLink)) {
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
		this.enterRule(_localctx, 182, bitmarkParser.RULE_op_document_format);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2148;
			_la = this._input.LA(1);
			if (!(_la === bitmarkParser.OpAmpDocument || _la === bitmarkParser.OpAmpDocumentLink)) {
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
		this.enterRule(_localctx, 184, bitmarkParser.RULE_op_app_format);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2150;
			_la = this._input.LA(1);
			if (!(_la === bitmarkParser.OpAmpApp || _la === bitmarkParser.OpAmpAppLink)) {
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
		this.enterRule(_localctx, 186, bitmarkParser.RULE_op_website_format);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2152;
			_la = this._input.LA(1);
			if (!(_la === bitmarkParser.OpAmpWebsite || _la === bitmarkParser.OpAmpWebsiteLink)) {
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
		this.enterRule(_localctx, 188, bitmarkParser.RULE_op_video_format);
		try {
			this.state = 2164;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case bitmarkParser.OpAmpVideo:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2154;
				this.match(bitmarkParser.OpAmpVideo);
				this.state = 2157;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 281, this._ctx) ) {
				case 1:
					{
					this.state = 2155;
					this.match(bitmarkParser.COLON);
					this.state = 2156;
					this.match(bitmarkParser.Video_type);
					}
					break;
				}
				}
				break;
			case bitmarkParser.OpAmpVideoLink:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2159;
				this.match(bitmarkParser.OpAmpVideoLink);
				this.state = 2162;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 282, this._ctx) ) {
				case 1:
					{
					this.state = 2160;
					this.match(bitmarkParser.COLON);
					this.state = 2161;
					this.match(bitmarkParser.Video_type);
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
		this.enterRule(_localctx, 190, bitmarkParser.RULE_op_stillimagefilm_format);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2166;
			_la = this._input.LA(1);
			if (!(_la === bitmarkParser.OpAmpStillImageFilm || _la === bitmarkParser.OpAmpStillImageFilmLink)) {
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
		this.enterRule(_localctx, 192, bitmarkParser.RULE_articlebit);
		try {
			this.state = 2174;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case bitmarkParser.OpAmpArticle:
			case bitmarkParser.OpAmpArticleLink:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2168;
				this.op_article_format();
				this.state = 2169;
				this.match(bitmarkParser.COLON);
				this.state = 2170;
				this.url();
				this.state = 2171;
				this.match(bitmarkParser.CL);
				}
				break;
			case bitmarkParser.ArticleText:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2173;
				this.match(bitmarkParser.ArticleText);
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
		this.enterRule(_localctx, 194, bitmarkParser.RULE_documentbit);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2176;
			this.op_document_format();
			this.state = 2177;
			this.match(bitmarkParser.COLON);
			this.state = 2178;
			this.url();
			this.state = 2179;
			this.match(bitmarkParser.CL);
			this.state = 2184;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === bitmarkParser.OPATALT) {
				{
				this.state = 2180;
				this.match(bitmarkParser.OPATALT);
				this.state = 2181;
				this.words();
				this.state = 2182;
				this.match(bitmarkParser.CL);
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
		this.enterRule(_localctx, 196, bitmarkParser.RULE_websitebit);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2186;
			this.op_website_format();
			this.state = 2187;
			this.match(bitmarkParser.COLON);
			this.state = 2188;
			this.url();
			this.state = 2189;
			this.match(bitmarkParser.CL);
			this.state = 2194;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === bitmarkParser.OPATALT) {
				{
				this.state = 2190;
				this.match(bitmarkParser.OPATALT);
				this.state = 2191;
				this.words();
				this.state = 2192;
				this.match(bitmarkParser.CL);
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
		this.enterRule(_localctx, 198, bitmarkParser.RULE_appbit);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2196;
			this.op_app_format();
			this.state = 2197;
			this.match(bitmarkParser.COLON);
			this.state = 2200;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case bitmarkParser.URL:
				{
				this.state = 2198;
				this.url();
				}
				break;
			case bitmarkParser.TEL:
				{
				this.state = 2199;
				this.telephone();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 2202;
			this.match(bitmarkParser.CL);
			this.state = 2207;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === bitmarkParser.OPATALT) {
				{
				this.state = 2203;
				this.match(bitmarkParser.OPATALT);
				this.state = 2204;
				this.words();
				this.state = 2205;
				this.match(bitmarkParser.CL);
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
		this.enterRule(_localctx, 200, bitmarkParser.RULE_stillimagefilmbit);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2209;
			this.stillimg_one();
			this.state = 2213;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 289, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 2210;
					this.resource_chained();
					}
					}
				}
				this.state = 2215;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 289, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 202, bitmarkParser.RULE_stillimg_one);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2216;
			this.op_stillimagefilm_format();
			this.state = 2217;
			this.match(bitmarkParser.COLON);
			this.state = 2221;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === bitmarkParser.S) {
				{
				{
				this.state = 2218;
				this.match(bitmarkParser.S);
				}
				}
				this.state = 2223;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 2224;
			this.url();
			this.state = 2225;
			this.match(bitmarkParser.CL);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 204, bitmarkParser.RULE_videobit);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2227;
			this.video_one();
			this.state = 2231;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 291, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 2228;
					this.resource_chained();
					}
					}
				}
				this.state = 2233;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 291, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 206, bitmarkParser.RULE_video_one);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2234;
			this.op_video_format();
			this.state = 2235;
			this.match(bitmarkParser.COLON);
			this.state = 2236;
			this.url();
			this.state = 2237;
			this.match(bitmarkParser.CL);
			this.state = 2242;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 292, this._ctx) ) {
			case 1:
				{
				this.state = 2238;
				this.match(bitmarkParser.OPATALT);
				this.state = 2239;
				this.words();
				this.state = 2240;
				this.match(bitmarkParser.CL);
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
		this.enterRule(_localctx, 208, bitmarkParser.RULE_imagebit);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2244;
			this.image_one();
			this.state = 2248;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 293, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 2245;
					this.image_chained();
					}
					}
				}
				this.state = 2250;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 293, this._ctx);
			}
			this.state = 2253;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 294, this._ctx) ) {
			case 1:
				{
				this.state = 2251;
				this.match(bitmarkParser.NL);
				this.state = 2252;
				this.match(bitmarkParser.ShowInIndex);
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
		this.enterRule(_localctx, 210, bitmarkParser.RULE_image_one);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2255;
			this.op_image_format();
			this.state = 2256;
			this.match(bitmarkParser.COLON);
			this.state = 2260;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === bitmarkParser.S) {
				{
				{
				this.state = 2257;
				this.match(bitmarkParser.S);
				}
				}
				this.state = 2262;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 2263;
			this.url();
			this.state = 2264;
			this.match(bitmarkParser.CL);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 212, bitmarkParser.RULE_op_image_format);
		let _la: number;
		try {
			this.state = 2280;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case bitmarkParser.OpAmpImage:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2266;
				this.match(bitmarkParser.OpAmpImage);
				this.state = 2269;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case bitmarkParser.Image_type:
					{
					{
					this.state = 2267;
					this.match(bitmarkParser.Image_type);
					}
					}
					break;
				case bitmarkParser.DotArticleAtt:
					{
					{
					this.state = 2268;
					this.match(bitmarkParser.DotArticleAtt);
					}
					}
					break;
				case bitmarkParser.COLON:
					break;
				default:
					break;
				}
				}
				break;
			case bitmarkParser.OpAmpImageLink:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2271;
				this.match(bitmarkParser.OpAmpImageLink);
				this.state = 2273;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === bitmarkParser.Image_type) {
					{
					this.state = 2272;
					this.match(bitmarkParser.Image_type);
					}
				}

				}
				break;
			case bitmarkParser.OpAmpImageZoom:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 2275;
				this.match(bitmarkParser.OpAmpImageZoom);
				this.state = 2277;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === bitmarkParser.Image_type) {
					{
					this.state = 2276;
					this.match(bitmarkParser.Image_type);
					}
				}

				}
				break;
			case bitmarkParser.OpAmpImageWAudio:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 2279;
				this.match(bitmarkParser.OpAmpImageWAudio);
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
		this.enterRule(_localctx, 214, bitmarkParser.RULE_image_chained);
		let _la: number;
		try {
			let _alt: number;
			this.state = 2299;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case bitmarkParser.AtSrc:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2282;
				this.match(bitmarkParser.AtSrc);
				this.state = 2283;
				this.match(bitmarkParser.COLON);
				this.state = 2284;
				this.url();
				this.state = 2285;
				this.match(bitmarkParser.CL);
				}
				break;
			case bitmarkParser.AtWidth:
			case bitmarkParser.AtHeight:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2287;
				_la = this._input.LA(1);
				if (!(_la === bitmarkParser.AtWidth || _la === bitmarkParser.AtHeight)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 2288;
				this.match(bitmarkParser.COLON);
				this.state = 2289;
				this.match(bitmarkParser.NUMERIC);
				this.state = 2290;
				this.match(bitmarkParser.CL);
				}
				break;
			case bitmarkParser.OPATALT:
			case bitmarkParser.OpAtCaption:
			case bitmarkParser.OpAtLicense:
			case bitmarkParser.OpAtCopyright:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 2291;
				_la = this._input.LA(1);
				if (!(((((_la - 129)) & ~0x1F) === 0 && ((1 << (_la - 129)) & ((1 << (bitmarkParser.OPATALT - 129)) | (1 << (bitmarkParser.OpAtCaption - 129)) | (1 << (bitmarkParser.OpAtLicense - 129)) | (1 << (bitmarkParser.OpAtCopyright - 129)))) !== 0))) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 2295;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 300, this._ctx);
				while (_alt !== 1 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1 + 1) {
						{
						{
						this.state = 2292;
						this.matchWildcard();
						}
						}
					}
					this.state = 2297;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 300, this._ctx);
				}
				this.state = 2298;
				this.match(bitmarkParser.CL);
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
		this.enterRule(_localctx, 216, bitmarkParser.RULE_image_chained4match);
		let _la: number;
		try {
			let _alt: number;
			this.state = 2318;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case bitmarkParser.AtSrc:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2301;
				this.match(bitmarkParser.AtSrc);
				this.state = 2302;
				this.match(bitmarkParser.COLON);
				this.state = 2303;
				this.url();
				this.state = 2304;
				this.match(bitmarkParser.CL);
				}
				break;
			case bitmarkParser.AtWidth:
			case bitmarkParser.AtHeight:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2306;
				_la = this._input.LA(1);
				if (!(_la === bitmarkParser.AtWidth || _la === bitmarkParser.AtHeight)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 2307;
				this.match(bitmarkParser.COLON);
				this.state = 2308;
				this.match(bitmarkParser.NUMERIC);
				this.state = 2309;
				this.match(bitmarkParser.CL);
				}
				break;
			case bitmarkParser.OPATALT:
			case bitmarkParser.OpAtCaption:
			case bitmarkParser.OpAtLicense:
			case bitmarkParser.OpAtCopyright:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 2310;
				_la = this._input.LA(1);
				if (!(((((_la - 129)) & ~0x1F) === 0 && ((1 << (_la - 129)) & ((1 << (bitmarkParser.OPATALT - 129)) | (1 << (bitmarkParser.OpAtCaption - 129)) | (1 << (bitmarkParser.OpAtLicense - 129)) | (1 << (bitmarkParser.OpAtCopyright - 129)))) !== 0))) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 2314;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 302, this._ctx);
				while (_alt !== 1 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1 + 1) {
						{
						{
						this.state = 2311;
						this.matchWildcard();
						}
						}
					}
					this.state = 2316;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 302, this._ctx);
				}
				this.state = 2317;
				this.match(bitmarkParser.CL);
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
		this.enterRule(_localctx, 218, bitmarkParser.RULE_audiobit);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2320;
			this.audio_one();
			this.state = 2324;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 304, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 2321;
					this.resource_chained();
					}
					}
				}
				this.state = 2326;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 304, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 220, bitmarkParser.RULE_audio_one);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2327;
			this.op_audio_format();
			this.state = 2328;
			this.match(bitmarkParser.COLON);
			this.state = 2329;
			this.url();
			this.state = 2330;
			this.match(bitmarkParser.CL);
			this.state = 2335;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 305, this._ctx) ) {
			case 1:
				{
				this.state = 2331;
				this.match(bitmarkParser.OPATALT);
				this.state = 2332;
				this.words();
				this.state = 2333;
				this.match(bitmarkParser.CL);
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
		this.enterRule(_localctx, 222, bitmarkParser.RULE_audio_format);
		let _la: number;
		try {
			this.state = 2347;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case bitmarkParser.AmpAudio:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2337;
				this.match(bitmarkParser.AmpAudio);
				this.state = 2340;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === bitmarkParser.COLON) {
					{
					this.state = 2338;
					this.match(bitmarkParser.COLON);
					this.state = 2339;
					this.match(bitmarkParser.Audio_type);
					}
				}

				}
				break;
			case bitmarkParser.AmpAudioLink:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2342;
				this.match(bitmarkParser.AmpAudioLink);
				this.state = 2345;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === bitmarkParser.COLON) {
					{
					this.state = 2343;
					this.match(bitmarkParser.COLON);
					this.state = 2344;
					this.match(bitmarkParser.Audio_type);
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
		this.enterRule(_localctx, 224, bitmarkParser.RULE_op_audio_format);
		try {
			this.state = 2359;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case bitmarkParser.OpAmpAudio:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2349;
				this.match(bitmarkParser.OpAmpAudio);
				this.state = 2352;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 309, this._ctx) ) {
				case 1:
					{
					this.state = 2350;
					this.match(bitmarkParser.COLON);
					this.state = 2351;
					this.match(bitmarkParser.Audio_type);
					}
					break;
				}
				}
				break;
			case bitmarkParser.OpAmpAudioLink:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2354;
				this.match(bitmarkParser.OpAmpAudioLink);
				this.state = 2357;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 310, this._ctx) ) {
				case 1:
					{
					this.state = 2355;
					this.match(bitmarkParser.COLON);
					this.state = 2356;
					this.match(bitmarkParser.Audio_type);
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
		this.enterRule(_localctx, 226, bitmarkParser.RULE_resource_chained);
		let _la: number;
		try {
			let _alt: number;
			this.state = 2392;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case bitmarkParser.OPA:
			case bitmarkParser.AtSrc:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2364;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case bitmarkParser.OPA:
					{
					this.state = 2361;
					this.match(bitmarkParser.OPA);
					this.state = 2362;
					this.s_and_w();
					}
					break;
				case bitmarkParser.AtSrc:
					{
					this.state = 2363;
					this.match(bitmarkParser.AtSrc);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 2366;
				this.match(bitmarkParser.COLON);
				this.state = 2370;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 313, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 2367;
						this.match(bitmarkParser.S);
						}
						}
					}
					this.state = 2372;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 313, this._ctx);
				}
				this.state = 2375;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					this.state = 2375;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case bitmarkParser.S:
					case bitmarkParser.OPESC:
					case bitmarkParser.OPS:
					case bitmarkParser.COLON:
					case bitmarkParser.AMP:
					case bitmarkParser.Greater:
					case bitmarkParser.Less:
					case bitmarkParser.RightAngle:
					case bitmarkParser.RightArrow:
					case bitmarkParser.DBLEQ:
					case bitmarkParser.QUOTE_INDEX:
					case bitmarkParser.NUMERIC:
					case bitmarkParser.STRING:
					case bitmarkParser.SENTENCE:
					case bitmarkParser.AmpAudio:
					case bitmarkParser.AmpImage:
					case bitmarkParser.AmpVideo:
					case bitmarkParser.AmpArticle:
					case bitmarkParser.AmpDocument:
					case bitmarkParser.AmpApp:
					case bitmarkParser.AmpWebsite:
					case bitmarkParser.AmpStillImageFilm:
					case bitmarkParser.AmpAudioLink:
					case bitmarkParser.AmpImageLink:
					case bitmarkParser.AmpVideoLink:
					case bitmarkParser.AmpArticleLink:
					case bitmarkParser.AmpDocumentLink:
					case bitmarkParser.AmpAppLink:
					case bitmarkParser.AmpWebsiteLink:
					case bitmarkParser.AmpStillImageFilmLink:
					case bitmarkParser.BitmarkMinus:
					case bitmarkParser.BitmarkPlus:
					case bitmarkParser.URL:
						{
						this.state = 2373;
						this.s_and_w();
						}
						break;
					case bitmarkParser.NL:
						{
						this.state = 2374;
						this.match(bitmarkParser.NL);
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					}
					this.state = 2377;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la === bitmarkParser.S || ((((_la - 75)) & ~0x1F) === 0 && ((1 << (_la - 75)) & ((1 << (bitmarkParser.OPESC - 75)) | (1 << (bitmarkParser.OPS - 75)) | (1 << (bitmarkParser.COLON - 75)) | (1 << (bitmarkParser.AMP - 75)) | (1 << (bitmarkParser.Greater - 75)) | (1 << (bitmarkParser.Less - 75)) | (1 << (bitmarkParser.RightAngle - 75)) | (1 << (bitmarkParser.RightArrow - 75)) | (1 << (bitmarkParser.DBLEQ - 75)) | (1 << (bitmarkParser.QUOTE_INDEX - 75)))) !== 0) || ((((_la - 108)) & ~0x1F) === 0 && ((1 << (_la - 108)) & ((1 << (bitmarkParser.NUMERIC - 108)) | (1 << (bitmarkParser.STRING - 108)) | (1 << (bitmarkParser.NL - 108)) | (1 << (bitmarkParser.SENTENCE - 108)))) !== 0) || ((((_la - 140)) & ~0x1F) === 0 && ((1 << (_la - 140)) & ((1 << (bitmarkParser.AmpAudio - 140)) | (1 << (bitmarkParser.AmpImage - 140)) | (1 << (bitmarkParser.AmpVideo - 140)) | (1 << (bitmarkParser.AmpArticle - 140)) | (1 << (bitmarkParser.AmpDocument - 140)) | (1 << (bitmarkParser.AmpApp - 140)) | (1 << (bitmarkParser.AmpWebsite - 140)) | (1 << (bitmarkParser.AmpStillImageFilm - 140)) | (1 << (bitmarkParser.AmpAudioLink - 140)) | (1 << (bitmarkParser.AmpImageLink - 140)) | (1 << (bitmarkParser.AmpVideoLink - 140)) | (1 << (bitmarkParser.AmpArticleLink - 140)) | (1 << (bitmarkParser.AmpDocumentLink - 140)) | (1 << (bitmarkParser.AmpAppLink - 140)) | (1 << (bitmarkParser.AmpWebsiteLink - 140)) | (1 << (bitmarkParser.AmpStillImageFilmLink - 140)))) !== 0) || ((((_la - 179)) & ~0x1F) === 0 && ((1 << (_la - 179)) & ((1 << (bitmarkParser.BitmarkMinus - 179)) | (1 << (bitmarkParser.BitmarkPlus - 179)) | (1 << (bitmarkParser.URL - 179)))) !== 0));
				this.state = 2379;
				this.match(bitmarkParser.CL);
				}
				break;
			case bitmarkParser.AtWidth:
			case bitmarkParser.AtHeight:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2380;
				_la = this._input.LA(1);
				if (!(_la === bitmarkParser.AtWidth || _la === bitmarkParser.AtHeight)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 2381;
				this.match(bitmarkParser.COLON);
				this.state = 2382;
				this.match(bitmarkParser.NUMERIC);
				this.state = 2383;
				this.match(bitmarkParser.CL);
				}
				break;
			case bitmarkParser.OPATALT:
			case bitmarkParser.OpAtCaption:
			case bitmarkParser.OpAtLicense:
			case bitmarkParser.OpAtCopyright:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 2384;
				_la = this._input.LA(1);
				if (!(((((_la - 129)) & ~0x1F) === 0 && ((1 << (_la - 129)) & ((1 << (bitmarkParser.OPATALT - 129)) | (1 << (bitmarkParser.OpAtCaption - 129)) | (1 << (bitmarkParser.OpAtLicense - 129)) | (1 << (bitmarkParser.OpAtCopyright - 129)))) !== 0))) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 2388;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 316, this._ctx);
				while (_alt !== 1 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1 + 1) {
						{
						{
						this.state = 2385;
						this.matchWildcard();
						}
						}
					}
					this.state = 2390;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 316, this._ctx);
				}
				this.state = 2391;
				this.match(bitmarkParser.CL);
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
		this.enterRule(_localctx, 228, bitmarkParser.RULE_telephone);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2394;
			this.match(bitmarkParser.TEL);
			this.state = 2395;
			this.match(bitmarkParser.PLUS);
			this.state = 2396;
			this.match(bitmarkParser.NUMERIC);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 230, bitmarkParser.RULE_url);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2398;
			this.match(bitmarkParser.URL);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 232, bitmarkParser.RULE_item);
		let _la: number;
		try {
			this.state = 2430;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 324, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2400;
				this.match(bitmarkParser.OPC);
				this.state = 2401;
				this.match(bitmarkParser.CL);
				this.state = 2409;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 319, this._ctx) ) {
				case 1:
					{
					this.state = 2405;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === bitmarkParser.S) {
						{
						{
						this.state = 2402;
						this.match(bitmarkParser.S);
						}
						}
						this.state = 2407;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					this.state = 2408;
					this.lead();
					}
					break;
				}
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2411;
				this.match(bitmarkParser.OPC);
				this.state = 2412;
				this.s_and_w();
				this.state = 2417;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (((((_la - 90)) & ~0x1F) === 0 && ((1 << (_la - 90)) & ((1 << (bitmarkParser.COLON - 90)) | (1 << (bitmarkParser.AMP - 90)) | (1 << (bitmarkParser.Greater - 90)) | (1 << (bitmarkParser.Less - 90)) | (1 << (bitmarkParser.RightAngle - 90)) | (1 << (bitmarkParser.RightArrow - 90)) | (1 << (bitmarkParser.QUOTE_INDEX - 90)) | (1 << (bitmarkParser.SENTENCE - 90)))) !== 0) || ((((_la - 140)) & ~0x1F) === 0 && ((1 << (_la - 140)) & ((1 << (bitmarkParser.AmpAudio - 140)) | (1 << (bitmarkParser.AmpImage - 140)) | (1 << (bitmarkParser.AmpVideo - 140)) | (1 << (bitmarkParser.AmpArticle - 140)) | (1 << (bitmarkParser.AmpDocument - 140)) | (1 << (bitmarkParser.AmpApp - 140)) | (1 << (bitmarkParser.AmpWebsite - 140)) | (1 << (bitmarkParser.AmpStillImageFilm - 140)) | (1 << (bitmarkParser.AmpAudioLink - 140)) | (1 << (bitmarkParser.AmpImageLink - 140)) | (1 << (bitmarkParser.AmpVideoLink - 140)) | (1 << (bitmarkParser.AmpArticleLink - 140)) | (1 << (bitmarkParser.AmpDocumentLink - 140)) | (1 << (bitmarkParser.AmpAppLink - 140)) | (1 << (bitmarkParser.AmpWebsiteLink - 140)) | (1 << (bitmarkParser.AmpStillImageFilmLink - 140)))) !== 0) || _la === bitmarkParser.BitmarkMinus || _la === bitmarkParser.BitmarkPlus) {
					{
					this.state = 2415;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case bitmarkParser.COLON:
						{
						this.state = 2413;
						this.match(bitmarkParser.COLON);
						}
						break;
					case bitmarkParser.AMP:
					case bitmarkParser.Greater:
					case bitmarkParser.Less:
					case bitmarkParser.RightAngle:
					case bitmarkParser.RightArrow:
					case bitmarkParser.QUOTE_INDEX:
					case bitmarkParser.SENTENCE:
					case bitmarkParser.AmpAudio:
					case bitmarkParser.AmpImage:
					case bitmarkParser.AmpVideo:
					case bitmarkParser.AmpArticle:
					case bitmarkParser.AmpDocument:
					case bitmarkParser.AmpApp:
					case bitmarkParser.AmpWebsite:
					case bitmarkParser.AmpStillImageFilm:
					case bitmarkParser.AmpAudioLink:
					case bitmarkParser.AmpImageLink:
					case bitmarkParser.AmpVideoLink:
					case bitmarkParser.AmpArticleLink:
					case bitmarkParser.AmpDocumentLink:
					case bitmarkParser.AmpAppLink:
					case bitmarkParser.AmpWebsiteLink:
					case bitmarkParser.AmpStillImageFilmLink:
					case bitmarkParser.BitmarkMinus:
					case bitmarkParser.BitmarkPlus:
						{
						this.state = 2414;
						this.words();
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					}
					this.state = 2419;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 2420;
				this.match(bitmarkParser.CL);
				this.state = 2428;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 323, this._ctx) ) {
				case 1:
					{
					this.state = 2424;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === bitmarkParser.S) {
						{
						{
						this.state = 2421;
						this.match(bitmarkParser.S);
						}
						}
						this.state = 2426;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					this.state = 2427;
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
		this.enterRule(_localctx, 234, bitmarkParser.RULE_lead);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2432;
			this.match(bitmarkParser.OPC);
			this.state = 2433;
			this.s_and_w();
			this.state = 2438;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 90)) & ~0x1F) === 0 && ((1 << (_la - 90)) & ((1 << (bitmarkParser.COLON - 90)) | (1 << (bitmarkParser.AMP - 90)) | (1 << (bitmarkParser.Greater - 90)) | (1 << (bitmarkParser.Less - 90)) | (1 << (bitmarkParser.RightAngle - 90)) | (1 << (bitmarkParser.RightArrow - 90)) | (1 << (bitmarkParser.QUOTE_INDEX - 90)) | (1 << (bitmarkParser.SENTENCE - 90)))) !== 0) || ((((_la - 140)) & ~0x1F) === 0 && ((1 << (_la - 140)) & ((1 << (bitmarkParser.AmpAudio - 140)) | (1 << (bitmarkParser.AmpImage - 140)) | (1 << (bitmarkParser.AmpVideo - 140)) | (1 << (bitmarkParser.AmpArticle - 140)) | (1 << (bitmarkParser.AmpDocument - 140)) | (1 << (bitmarkParser.AmpApp - 140)) | (1 << (bitmarkParser.AmpWebsite - 140)) | (1 << (bitmarkParser.AmpStillImageFilm - 140)) | (1 << (bitmarkParser.AmpAudioLink - 140)) | (1 << (bitmarkParser.AmpImageLink - 140)) | (1 << (bitmarkParser.AmpVideoLink - 140)) | (1 << (bitmarkParser.AmpArticleLink - 140)) | (1 << (bitmarkParser.AmpDocumentLink - 140)) | (1 << (bitmarkParser.AmpAppLink - 140)) | (1 << (bitmarkParser.AmpWebsiteLink - 140)) | (1 << (bitmarkParser.AmpStillImageFilmLink - 140)))) !== 0) || _la === bitmarkParser.BitmarkMinus || _la === bitmarkParser.BitmarkPlus) {
				{
				this.state = 2436;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case bitmarkParser.COLON:
					{
					this.state = 2434;
					this.match(bitmarkParser.COLON);
					}
					break;
				case bitmarkParser.AMP:
				case bitmarkParser.Greater:
				case bitmarkParser.Less:
				case bitmarkParser.RightAngle:
				case bitmarkParser.RightArrow:
				case bitmarkParser.QUOTE_INDEX:
				case bitmarkParser.SENTENCE:
				case bitmarkParser.AmpAudio:
				case bitmarkParser.AmpImage:
				case bitmarkParser.AmpVideo:
				case bitmarkParser.AmpArticle:
				case bitmarkParser.AmpDocument:
				case bitmarkParser.AmpApp:
				case bitmarkParser.AmpWebsite:
				case bitmarkParser.AmpStillImageFilm:
				case bitmarkParser.AmpAudioLink:
				case bitmarkParser.AmpImageLink:
				case bitmarkParser.AmpVideoLink:
				case bitmarkParser.AmpArticleLink:
				case bitmarkParser.AmpDocumentLink:
				case bitmarkParser.AmpAppLink:
				case bitmarkParser.AmpWebsiteLink:
				case bitmarkParser.AmpStillImageFilmLink:
				case bitmarkParser.BitmarkMinus:
				case bitmarkParser.BitmarkPlus:
					{
					this.state = 2435;
					this.words();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				this.state = 2440;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 2441;
			this.match(bitmarkParser.CL);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 236, bitmarkParser.RULE_angleref);
		let _la: number;
		try {
			this.state = 2453;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case bitmarkParser.OPRANGLES:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2443;
				this.match(bitmarkParser.OPRANGLES);
				this.state = 2445;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === bitmarkParser.S || ((((_la - 75)) & ~0x1F) === 0 && ((1 << (_la - 75)) & ((1 << (bitmarkParser.OPESC - 75)) | (1 << (bitmarkParser.OPS - 75)) | (1 << (bitmarkParser.COLON - 75)) | (1 << (bitmarkParser.AMP - 75)) | (1 << (bitmarkParser.Greater - 75)) | (1 << (bitmarkParser.Less - 75)) | (1 << (bitmarkParser.RightAngle - 75)) | (1 << (bitmarkParser.RightArrow - 75)) | (1 << (bitmarkParser.DBLEQ - 75)) | (1 << (bitmarkParser.QUOTE_INDEX - 75)))) !== 0) || ((((_la - 108)) & ~0x1F) === 0 && ((1 << (_la - 108)) & ((1 << (bitmarkParser.NUMERIC - 108)) | (1 << (bitmarkParser.STRING - 108)) | (1 << (bitmarkParser.SENTENCE - 108)))) !== 0) || ((((_la - 140)) & ~0x1F) === 0 && ((1 << (_la - 140)) & ((1 << (bitmarkParser.AmpAudio - 140)) | (1 << (bitmarkParser.AmpImage - 140)) | (1 << (bitmarkParser.AmpVideo - 140)) | (1 << (bitmarkParser.AmpArticle - 140)) | (1 << (bitmarkParser.AmpDocument - 140)) | (1 << (bitmarkParser.AmpApp - 140)) | (1 << (bitmarkParser.AmpWebsite - 140)) | (1 << (bitmarkParser.AmpStillImageFilm - 140)) | (1 << (bitmarkParser.AmpAudioLink - 140)) | (1 << (bitmarkParser.AmpImageLink - 140)) | (1 << (bitmarkParser.AmpVideoLink - 140)) | (1 << (bitmarkParser.AmpArticleLink - 140)) | (1 << (bitmarkParser.AmpDocumentLink - 140)) | (1 << (bitmarkParser.AmpAppLink - 140)) | (1 << (bitmarkParser.AmpWebsiteLink - 140)) | (1 << (bitmarkParser.AmpStillImageFilmLink - 140)))) !== 0) || ((((_la - 179)) & ~0x1F) === 0 && ((1 << (_la - 179)) & ((1 << (bitmarkParser.BitmarkMinus - 179)) | (1 << (bitmarkParser.BitmarkPlus - 179)) | (1 << (bitmarkParser.URL - 179)))) !== 0)) {
					{
					this.state = 2444;
					this.s_and_w();
					}
				}

				this.state = 2447;
				this.match(bitmarkParser.CL);
				}
				break;
			case bitmarkParser.OPRANGLEL:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2448;
				this.match(bitmarkParser.OPRANGLEL);
				this.state = 2450;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === bitmarkParser.S || ((((_la - 75)) & ~0x1F) === 0 && ((1 << (_la - 75)) & ((1 << (bitmarkParser.OPESC - 75)) | (1 << (bitmarkParser.OPS - 75)) | (1 << (bitmarkParser.COLON - 75)) | (1 << (bitmarkParser.AMP - 75)) | (1 << (bitmarkParser.Greater - 75)) | (1 << (bitmarkParser.Less - 75)) | (1 << (bitmarkParser.RightAngle - 75)) | (1 << (bitmarkParser.RightArrow - 75)) | (1 << (bitmarkParser.DBLEQ - 75)) | (1 << (bitmarkParser.QUOTE_INDEX - 75)))) !== 0) || ((((_la - 108)) & ~0x1F) === 0 && ((1 << (_la - 108)) & ((1 << (bitmarkParser.NUMERIC - 108)) | (1 << (bitmarkParser.STRING - 108)) | (1 << (bitmarkParser.SENTENCE - 108)))) !== 0) || ((((_la - 140)) & ~0x1F) === 0 && ((1 << (_la - 140)) & ((1 << (bitmarkParser.AmpAudio - 140)) | (1 << (bitmarkParser.AmpImage - 140)) | (1 << (bitmarkParser.AmpVideo - 140)) | (1 << (bitmarkParser.AmpArticle - 140)) | (1 << (bitmarkParser.AmpDocument - 140)) | (1 << (bitmarkParser.AmpApp - 140)) | (1 << (bitmarkParser.AmpWebsite - 140)) | (1 << (bitmarkParser.AmpStillImageFilm - 140)) | (1 << (bitmarkParser.AmpAudioLink - 140)) | (1 << (bitmarkParser.AmpImageLink - 140)) | (1 << (bitmarkParser.AmpVideoLink - 140)) | (1 << (bitmarkParser.AmpArticleLink - 140)) | (1 << (bitmarkParser.AmpDocumentLink - 140)) | (1 << (bitmarkParser.AmpAppLink - 140)) | (1 << (bitmarkParser.AmpWebsiteLink - 140)) | (1 << (bitmarkParser.AmpStillImageFilmLink - 140)))) !== 0) || ((((_la - 179)) & ~0x1F) === 0 && ((1 << (_la - 179)) & ((1 << (bitmarkParser.BitmarkMinus - 179)) | (1 << (bitmarkParser.BitmarkPlus - 179)) | (1 << (bitmarkParser.URL - 179)))) !== 0)) {
					{
					this.state = 2449;
					this.s_and_w();
					}
				}

				this.state = 2452;
				this.match(bitmarkParser.CL);
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
		this.enterRule(_localctx, 238, bitmarkParser.RULE_example);
		let _la: number;
		try {
			this.state = 2462;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case bitmarkParser.AtExamplecl:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2455;
				this.match(bitmarkParser.AtExamplecl);
				}
				break;
			case bitmarkParser.AtExampleWithStr:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2456;
				this.match(bitmarkParser.AtExampleWithStr);
				}
				break;
			case bitmarkParser.AtExamplecol:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 2457;
				this.match(bitmarkParser.AtExamplecol);
				this.state = 2459;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === bitmarkParser.SENTENCE) {
					{
					this.state = 2458;
					this.match(bitmarkParser.SENTENCE);
					}
				}

				this.state = 2461;
				this.match(bitmarkParser.EOF);
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
		this.enterRule(_localctx, 240, bitmarkParser.RULE_bracketed_text);
		let _la: number;
		try {
			let _alt: number;
			this.state = 2503;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 339, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2464;
				this.match(bitmarkParser.BracEnclose);
				this.state = 2466;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 332, this._ctx) ) {
				case 1:
					{
					this.state = 2465;
					this.s_and_w();
					}
					break;
				}
				this.state = 2489;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === bitmarkParser.S || ((((_la - 75)) & ~0x1F) === 0 && ((1 << (_la - 75)) & ((1 << (bitmarkParser.OPESC - 75)) | (1 << (bitmarkParser.OPS - 75)) | (1 << (bitmarkParser.COLON - 75)) | (1 << (bitmarkParser.AMP - 75)) | (1 << (bitmarkParser.Greater - 75)) | (1 << (bitmarkParser.Less - 75)) | (1 << (bitmarkParser.RightAngle - 75)) | (1 << (bitmarkParser.RightArrow - 75)) | (1 << (bitmarkParser.DBLEQ - 75)) | (1 << (bitmarkParser.QUOTE_INDEX - 75)))) !== 0) || ((((_la - 108)) & ~0x1F) === 0 && ((1 << (_la - 108)) & ((1 << (bitmarkParser.NUMERIC - 108)) | (1 << (bitmarkParser.STRING - 108)) | (1 << (bitmarkParser.SENTENCE - 108)))) !== 0) || ((((_la - 140)) & ~0x1F) === 0 && ((1 << (_la - 140)) & ((1 << (bitmarkParser.AmpAudio - 140)) | (1 << (bitmarkParser.AmpImage - 140)) | (1 << (bitmarkParser.AmpVideo - 140)) | (1 << (bitmarkParser.AmpArticle - 140)) | (1 << (bitmarkParser.AmpDocument - 140)) | (1 << (bitmarkParser.AmpApp - 140)) | (1 << (bitmarkParser.AmpWebsite - 140)) | (1 << (bitmarkParser.AmpStillImageFilm - 140)) | (1 << (bitmarkParser.AmpAudioLink - 140)) | (1 << (bitmarkParser.AmpImageLink - 140)) | (1 << (bitmarkParser.AmpVideoLink - 140)) | (1 << (bitmarkParser.AmpArticleLink - 140)) | (1 << (bitmarkParser.AmpDocumentLink - 140)) | (1 << (bitmarkParser.AmpAppLink - 140)) | (1 << (bitmarkParser.AmpWebsiteLink - 140)) | (1 << (bitmarkParser.AmpStillImageFilmLink - 140)))) !== 0) || ((((_la - 179)) & ~0x1F) === 0 && ((1 << (_la - 179)) & ((1 << (bitmarkParser.BitmarkMinus - 179)) | (1 << (bitmarkParser.BitmarkPlus - 179)) | (1 << (bitmarkParser.URL - 179)))) !== 0)) {
					{
					{
					this.state = 2468;
					this.s_and_w();
					this.state = 2478;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 334, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 2469;
							this.match(bitmarkParser.NL);
							this.state = 2473;
							this._errHandler.sync(this);
							_alt = this.interpreter.adaptivePredict(this._input, 333, this._ctx);
							while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
								if (_alt === 1) {
									{
									{
									this.state = 2470;
									this.match(bitmarkParser.S);
									}
									}
								}
								this.state = 2475;
								this._errHandler.sync(this);
								_alt = this.interpreter.adaptivePredict(this._input, 333, this._ctx);
							}
							}
							}
						}
						this.state = 2480;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 334, this._ctx);
					}
					this.state = 2484;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === bitmarkParser.NL) {
						{
						{
						this.state = 2481;
						this.match(bitmarkParser.NL);
						}
						}
						this.state = 2486;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
					}
					this.state = 2491;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 2492;
				this.match(bitmarkParser.CL);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2493;
				this.match(bitmarkParser.BracEnclose);
				this.state = 2499;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === bitmarkParser.S || ((((_la - 75)) & ~0x1F) === 0 && ((1 << (_la - 75)) & ((1 << (bitmarkParser.OPESC - 75)) | (1 << (bitmarkParser.OPS - 75)) | (1 << (bitmarkParser.COLON - 75)) | (1 << (bitmarkParser.AMP - 75)) | (1 << (bitmarkParser.Greater - 75)) | (1 << (bitmarkParser.Less - 75)) | (1 << (bitmarkParser.RightAngle - 75)) | (1 << (bitmarkParser.RightArrow - 75)) | (1 << (bitmarkParser.DBLEQ - 75)) | (1 << (bitmarkParser.QUOTE_INDEX - 75)))) !== 0) || ((((_la - 108)) & ~0x1F) === 0 && ((1 << (_la - 108)) & ((1 << (bitmarkParser.NUMERIC - 108)) | (1 << (bitmarkParser.STRING - 108)) | (1 << (bitmarkParser.NL - 108)) | (1 << (bitmarkParser.SENTENCE - 108)))) !== 0) || ((((_la - 140)) & ~0x1F) === 0 && ((1 << (_la - 140)) & ((1 << (bitmarkParser.AmpAudio - 140)) | (1 << (bitmarkParser.AmpImage - 140)) | (1 << (bitmarkParser.AmpVideo - 140)) | (1 << (bitmarkParser.AmpArticle - 140)) | (1 << (bitmarkParser.AmpDocument - 140)) | (1 << (bitmarkParser.AmpApp - 140)) | (1 << (bitmarkParser.AmpWebsite - 140)) | (1 << (bitmarkParser.AmpStillImageFilm - 140)) | (1 << (bitmarkParser.AmpAudioLink - 140)) | (1 << (bitmarkParser.AmpImageLink - 140)) | (1 << (bitmarkParser.AmpVideoLink - 140)) | (1 << (bitmarkParser.AmpArticleLink - 140)) | (1 << (bitmarkParser.AmpDocumentLink - 140)) | (1 << (bitmarkParser.AmpAppLink - 140)) | (1 << (bitmarkParser.AmpWebsiteLink - 140)) | (1 << (bitmarkParser.AmpStillImageFilmLink - 140)))) !== 0) || ((((_la - 179)) & ~0x1F) === 0 && ((1 << (_la - 179)) & ((1 << (bitmarkParser.BitmarkMinus - 179)) | (1 << (bitmarkParser.BitmarkPlus - 179)) | (1 << (bitmarkParser.URL - 179)))) !== 0)) {
					{
					this.state = 2497;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 337, this._ctx) ) {
					case 1:
						{
						this.state = 2494;
						this.s_and_w();
						}
						break;

					case 2:
						{
						this.state = 2495;
						this.match(bitmarkParser.NL);
						}
						break;

					case 3:
						{
						this.state = 2496;
						this.match(bitmarkParser.S);
						}
						break;
					}
					}
					this.state = 2501;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 2502;
				this.match(bitmarkParser.EOF);
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
		this.enterRule(_localctx, 242, bitmarkParser.RULE_reference);
		let _la: number;
		try {
			this.state = 2527;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 344, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2505;
				this.match(bitmarkParser.AtReference);
				this.state = 2510;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					this.state = 2510;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 340, this._ctx) ) {
					case 1:
						{
						this.state = 2506;
						this.s_and_w();
						}
						break;

					case 2:
						{
						this.state = 2507;
						this.match(bitmarkParser.COLON);
						}
						break;

					case 3:
						{
						this.state = 2508;
						this.match(bitmarkParser.URL);
						}
						break;

					case 4:
						{
						this.state = 2509;
						this.match(bitmarkParser.NL);
						}
						break;
					}
					}
					this.state = 2512;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la === bitmarkParser.S || ((((_la - 75)) & ~0x1F) === 0 && ((1 << (_la - 75)) & ((1 << (bitmarkParser.OPESC - 75)) | (1 << (bitmarkParser.OPS - 75)) | (1 << (bitmarkParser.COLON - 75)) | (1 << (bitmarkParser.AMP - 75)) | (1 << (bitmarkParser.Greater - 75)) | (1 << (bitmarkParser.Less - 75)) | (1 << (bitmarkParser.RightAngle - 75)) | (1 << (bitmarkParser.RightArrow - 75)) | (1 << (bitmarkParser.DBLEQ - 75)) | (1 << (bitmarkParser.QUOTE_INDEX - 75)))) !== 0) || ((((_la - 108)) & ~0x1F) === 0 && ((1 << (_la - 108)) & ((1 << (bitmarkParser.NUMERIC - 108)) | (1 << (bitmarkParser.STRING - 108)) | (1 << (bitmarkParser.NL - 108)) | (1 << (bitmarkParser.SENTENCE - 108)))) !== 0) || ((((_la - 140)) & ~0x1F) === 0 && ((1 << (_la - 140)) & ((1 << (bitmarkParser.AmpAudio - 140)) | (1 << (bitmarkParser.AmpImage - 140)) | (1 << (bitmarkParser.AmpVideo - 140)) | (1 << (bitmarkParser.AmpArticle - 140)) | (1 << (bitmarkParser.AmpDocument - 140)) | (1 << (bitmarkParser.AmpApp - 140)) | (1 << (bitmarkParser.AmpWebsite - 140)) | (1 << (bitmarkParser.AmpStillImageFilm - 140)) | (1 << (bitmarkParser.AmpAudioLink - 140)) | (1 << (bitmarkParser.AmpImageLink - 140)) | (1 << (bitmarkParser.AmpVideoLink - 140)) | (1 << (bitmarkParser.AmpArticleLink - 140)) | (1 << (bitmarkParser.AmpDocumentLink - 140)) | (1 << (bitmarkParser.AmpAppLink - 140)) | (1 << (bitmarkParser.AmpWebsiteLink - 140)) | (1 << (bitmarkParser.AmpStillImageFilmLink - 140)))) !== 0) || ((((_la - 179)) & ~0x1F) === 0 && ((1 << (_la - 179)) & ((1 << (bitmarkParser.BitmarkMinus - 179)) | (1 << (bitmarkParser.BitmarkPlus - 179)) | (1 << (bitmarkParser.URL - 179)))) !== 0));
				this.state = 2514;
				this.match(bitmarkParser.CL);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2515;
				this.match(bitmarkParser.AtReference);
				this.state = 2523;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === bitmarkParser.S || ((((_la - 75)) & ~0x1F) === 0 && ((1 << (_la - 75)) & ((1 << (bitmarkParser.OPESC - 75)) | (1 << (bitmarkParser.OPS - 75)) | (1 << (bitmarkParser.COLON - 75)) | (1 << (bitmarkParser.AMP - 75)) | (1 << (bitmarkParser.Greater - 75)) | (1 << (bitmarkParser.Less - 75)) | (1 << (bitmarkParser.RightAngle - 75)) | (1 << (bitmarkParser.RightArrow - 75)) | (1 << (bitmarkParser.DBLEQ - 75)) | (1 << (bitmarkParser.QUOTE_INDEX - 75)))) !== 0) || ((((_la - 108)) & ~0x1F) === 0 && ((1 << (_la - 108)) & ((1 << (bitmarkParser.NUMERIC - 108)) | (1 << (bitmarkParser.STRING - 108)) | (1 << (bitmarkParser.NL - 108)) | (1 << (bitmarkParser.SENTENCE - 108)))) !== 0) || ((((_la - 140)) & ~0x1F) === 0 && ((1 << (_la - 140)) & ((1 << (bitmarkParser.AmpAudio - 140)) | (1 << (bitmarkParser.AmpImage - 140)) | (1 << (bitmarkParser.AmpVideo - 140)) | (1 << (bitmarkParser.AmpArticle - 140)) | (1 << (bitmarkParser.AmpDocument - 140)) | (1 << (bitmarkParser.AmpApp - 140)) | (1 << (bitmarkParser.AmpWebsite - 140)) | (1 << (bitmarkParser.AmpStillImageFilm - 140)) | (1 << (bitmarkParser.AmpAudioLink - 140)) | (1 << (bitmarkParser.AmpImageLink - 140)) | (1 << (bitmarkParser.AmpVideoLink - 140)) | (1 << (bitmarkParser.AmpArticleLink - 140)) | (1 << (bitmarkParser.AmpDocumentLink - 140)) | (1 << (bitmarkParser.AmpAppLink - 140)) | (1 << (bitmarkParser.AmpWebsiteLink - 140)) | (1 << (bitmarkParser.AmpStillImageFilmLink - 140)))) !== 0) || ((((_la - 179)) & ~0x1F) === 0 && ((1 << (_la - 179)) & ((1 << (bitmarkParser.BitmarkMinus - 179)) | (1 << (bitmarkParser.BitmarkPlus - 179)) | (1 << (bitmarkParser.URL - 179)))) !== 0)) {
					{
					this.state = 2521;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 342, this._ctx) ) {
					case 1:
						{
						this.state = 2516;
						this.s_and_w();
						}
						break;

					case 2:
						{
						this.state = 2517;
						this.match(bitmarkParser.COLON);
						}
						break;

					case 3:
						{
						this.state = 2518;
						this.match(bitmarkParser.URL);
						}
						break;

					case 4:
						{
						this.state = 2519;
						this.match(bitmarkParser.NL);
						}
						break;

					case 5:
						{
						this.state = 2520;
						this.match(bitmarkParser.S);
						}
						break;
					}
					}
					this.state = 2525;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 2526;
				this.match(bitmarkParser.EOF);
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
		this.enterRule(_localctx, 244, bitmarkParser.RULE_progress);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2529;
			this.match(bitmarkParser.AtProgress);
			this.state = 2530;
			this.s_and_w();
			this.state = 2531;
			this.match(bitmarkParser.CL);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 246, bitmarkParser.RULE_dateprop);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2533;
			this.match(bitmarkParser.AtDate);
			this.state = 2537;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				this.state = 2537;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 345, this._ctx) ) {
				case 1:
					{
					this.state = 2534;
					this.s_and_w();
					}
					break;

				case 2:
					{
					this.state = 2535;
					this.match(bitmarkParser.COLON);
					}
					break;

				case 3:
					{
					this.state = 2536;
					this.match(bitmarkParser.NL);
					}
					break;
				}
				}
				this.state = 2539;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === bitmarkParser.S || ((((_la - 75)) & ~0x1F) === 0 && ((1 << (_la - 75)) & ((1 << (bitmarkParser.OPESC - 75)) | (1 << (bitmarkParser.OPS - 75)) | (1 << (bitmarkParser.COLON - 75)) | (1 << (bitmarkParser.AMP - 75)) | (1 << (bitmarkParser.Greater - 75)) | (1 << (bitmarkParser.Less - 75)) | (1 << (bitmarkParser.RightAngle - 75)) | (1 << (bitmarkParser.RightArrow - 75)) | (1 << (bitmarkParser.DBLEQ - 75)) | (1 << (bitmarkParser.QUOTE_INDEX - 75)))) !== 0) || ((((_la - 108)) & ~0x1F) === 0 && ((1 << (_la - 108)) & ((1 << (bitmarkParser.NUMERIC - 108)) | (1 << (bitmarkParser.STRING - 108)) | (1 << (bitmarkParser.NL - 108)) | (1 << (bitmarkParser.SENTENCE - 108)))) !== 0) || ((((_la - 140)) & ~0x1F) === 0 && ((1 << (_la - 140)) & ((1 << (bitmarkParser.AmpAudio - 140)) | (1 << (bitmarkParser.AmpImage - 140)) | (1 << (bitmarkParser.AmpVideo - 140)) | (1 << (bitmarkParser.AmpArticle - 140)) | (1 << (bitmarkParser.AmpDocument - 140)) | (1 << (bitmarkParser.AmpApp - 140)) | (1 << (bitmarkParser.AmpWebsite - 140)) | (1 << (bitmarkParser.AmpStillImageFilm - 140)) | (1 << (bitmarkParser.AmpAudioLink - 140)) | (1 << (bitmarkParser.AmpImageLink - 140)) | (1 << (bitmarkParser.AmpVideoLink - 140)) | (1 << (bitmarkParser.AmpArticleLink - 140)) | (1 << (bitmarkParser.AmpDocumentLink - 140)) | (1 << (bitmarkParser.AmpAppLink - 140)) | (1 << (bitmarkParser.AmpWebsiteLink - 140)) | (1 << (bitmarkParser.AmpStillImageFilmLink - 140)))) !== 0) || ((((_la - 179)) & ~0x1F) === 0 && ((1 << (_la - 179)) & ((1 << (bitmarkParser.BitmarkMinus - 179)) | (1 << (bitmarkParser.BitmarkPlus - 179)) | (1 << (bitmarkParser.URL - 179)))) !== 0));
			this.state = 2541;
			this.match(bitmarkParser.CL);
			this.state = 2543;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 347, this._ctx) ) {
			case 1:
				{
				this.state = 2542;
				this.dateprop_chained();
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
	public dateprop_chained(): Dateprop_chainedContext {
		let _localctx: Dateprop_chainedContext = new Dateprop_chainedContext(this._ctx, this.state);
		this.enterRule(_localctx, 248, bitmarkParser.RULE_dateprop_chained);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2545;
			this.match(bitmarkParser.AtDate);
			this.state = 2549;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				this.state = 2549;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 348, this._ctx) ) {
				case 1:
					{
					this.state = 2546;
					this.s_and_w();
					}
					break;

				case 2:
					{
					this.state = 2547;
					this.match(bitmarkParser.COLON);
					}
					break;

				case 3:
					{
					this.state = 2548;
					this.match(bitmarkParser.NL);
					}
					break;
				}
				}
				this.state = 2551;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === bitmarkParser.S || ((((_la - 75)) & ~0x1F) === 0 && ((1 << (_la - 75)) & ((1 << (bitmarkParser.OPESC - 75)) | (1 << (bitmarkParser.OPS - 75)) | (1 << (bitmarkParser.COLON - 75)) | (1 << (bitmarkParser.AMP - 75)) | (1 << (bitmarkParser.Greater - 75)) | (1 << (bitmarkParser.Less - 75)) | (1 << (bitmarkParser.RightAngle - 75)) | (1 << (bitmarkParser.RightArrow - 75)) | (1 << (bitmarkParser.DBLEQ - 75)) | (1 << (bitmarkParser.QUOTE_INDEX - 75)))) !== 0) || ((((_la - 108)) & ~0x1F) === 0 && ((1 << (_la - 108)) & ((1 << (bitmarkParser.NUMERIC - 108)) | (1 << (bitmarkParser.STRING - 108)) | (1 << (bitmarkParser.NL - 108)) | (1 << (bitmarkParser.SENTENCE - 108)))) !== 0) || ((((_la - 140)) & ~0x1F) === 0 && ((1 << (_la - 140)) & ((1 << (bitmarkParser.AmpAudio - 140)) | (1 << (bitmarkParser.AmpImage - 140)) | (1 << (bitmarkParser.AmpVideo - 140)) | (1 << (bitmarkParser.AmpArticle - 140)) | (1 << (bitmarkParser.AmpDocument - 140)) | (1 << (bitmarkParser.AmpApp - 140)) | (1 << (bitmarkParser.AmpWebsite - 140)) | (1 << (bitmarkParser.AmpStillImageFilm - 140)) | (1 << (bitmarkParser.AmpAudioLink - 140)) | (1 << (bitmarkParser.AmpImageLink - 140)) | (1 << (bitmarkParser.AmpVideoLink - 140)) | (1 << (bitmarkParser.AmpArticleLink - 140)) | (1 << (bitmarkParser.AmpDocumentLink - 140)) | (1 << (bitmarkParser.AmpAppLink - 140)) | (1 << (bitmarkParser.AmpWebsiteLink - 140)) | (1 << (bitmarkParser.AmpStillImageFilmLink - 140)))) !== 0) || ((((_la - 179)) & ~0x1F) === 0 && ((1 << (_la - 179)) & ((1 << (bitmarkParser.BitmarkMinus - 179)) | (1 << (bitmarkParser.BitmarkPlus - 179)) | (1 << (bitmarkParser.URL - 179)))) !== 0));
			this.state = 2553;
			this.match(bitmarkParser.CL);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 250, bitmarkParser.RULE_instruction);
		let _la: number;
		try {
			let _alt: number;
			this.state = 2589;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 356, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2555;
				this.match(bitmarkParser.OPB);
				this.state = 2557;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 350, this._ctx) ) {
				case 1:
					{
					this.state = 2556;
					this.s_and_w();
					}
					break;
				}
				this.state = 2580;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === bitmarkParser.S || ((((_la - 75)) & ~0x1F) === 0 && ((1 << (_la - 75)) & ((1 << (bitmarkParser.OPESC - 75)) | (1 << (bitmarkParser.OPS - 75)) | (1 << (bitmarkParser.COLON - 75)) | (1 << (bitmarkParser.AMP - 75)) | (1 << (bitmarkParser.Greater - 75)) | (1 << (bitmarkParser.Less - 75)) | (1 << (bitmarkParser.RightAngle - 75)) | (1 << (bitmarkParser.RightArrow - 75)) | (1 << (bitmarkParser.DBLEQ - 75)) | (1 << (bitmarkParser.QUOTE_INDEX - 75)))) !== 0) || ((((_la - 108)) & ~0x1F) === 0 && ((1 << (_la - 108)) & ((1 << (bitmarkParser.NUMERIC - 108)) | (1 << (bitmarkParser.STRING - 108)) | (1 << (bitmarkParser.SENTENCE - 108)))) !== 0) || ((((_la - 140)) & ~0x1F) === 0 && ((1 << (_la - 140)) & ((1 << (bitmarkParser.AmpAudio - 140)) | (1 << (bitmarkParser.AmpImage - 140)) | (1 << (bitmarkParser.AmpVideo - 140)) | (1 << (bitmarkParser.AmpArticle - 140)) | (1 << (bitmarkParser.AmpDocument - 140)) | (1 << (bitmarkParser.AmpApp - 140)) | (1 << (bitmarkParser.AmpWebsite - 140)) | (1 << (bitmarkParser.AmpStillImageFilm - 140)) | (1 << (bitmarkParser.AmpAudioLink - 140)) | (1 << (bitmarkParser.AmpImageLink - 140)) | (1 << (bitmarkParser.AmpVideoLink - 140)) | (1 << (bitmarkParser.AmpArticleLink - 140)) | (1 << (bitmarkParser.AmpDocumentLink - 140)) | (1 << (bitmarkParser.AmpAppLink - 140)) | (1 << (bitmarkParser.AmpWebsiteLink - 140)) | (1 << (bitmarkParser.AmpStillImageFilmLink - 140)))) !== 0) || ((((_la - 179)) & ~0x1F) === 0 && ((1 << (_la - 179)) & ((1 << (bitmarkParser.BitmarkMinus - 179)) | (1 << (bitmarkParser.BitmarkPlus - 179)) | (1 << (bitmarkParser.URL - 179)))) !== 0)) {
					{
					{
					this.state = 2559;
					this.s_and_w();
					this.state = 2569;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 352, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 2560;
							this.match(bitmarkParser.NL);
							this.state = 2564;
							this._errHandler.sync(this);
							_alt = this.interpreter.adaptivePredict(this._input, 351, this._ctx);
							while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
								if (_alt === 1) {
									{
									{
									this.state = 2561;
									this.match(bitmarkParser.S);
									}
									}
								}
								this.state = 2566;
								this._errHandler.sync(this);
								_alt = this.interpreter.adaptivePredict(this._input, 351, this._ctx);
							}
							}
							}
						}
						this.state = 2571;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 352, this._ctx);
					}
					this.state = 2575;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === bitmarkParser.NL) {
						{
						{
						this.state = 2572;
						this.match(bitmarkParser.NL);
						}
						}
						this.state = 2577;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
					}
					this.state = 2582;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 2583;
				this.match(bitmarkParser.CL);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2584;
				this.match(bitmarkParser.OPB);
				this.state = 2586;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === bitmarkParser.S || ((((_la - 75)) & ~0x1F) === 0 && ((1 << (_la - 75)) & ((1 << (bitmarkParser.OPESC - 75)) | (1 << (bitmarkParser.OPS - 75)) | (1 << (bitmarkParser.COLON - 75)) | (1 << (bitmarkParser.AMP - 75)) | (1 << (bitmarkParser.Greater - 75)) | (1 << (bitmarkParser.Less - 75)) | (1 << (bitmarkParser.RightAngle - 75)) | (1 << (bitmarkParser.RightArrow - 75)) | (1 << (bitmarkParser.DBLEQ - 75)) | (1 << (bitmarkParser.QUOTE_INDEX - 75)))) !== 0) || ((((_la - 108)) & ~0x1F) === 0 && ((1 << (_la - 108)) & ((1 << (bitmarkParser.NUMERIC - 108)) | (1 << (bitmarkParser.STRING - 108)) | (1 << (bitmarkParser.SENTENCE - 108)))) !== 0) || ((((_la - 140)) & ~0x1F) === 0 && ((1 << (_la - 140)) & ((1 << (bitmarkParser.AmpAudio - 140)) | (1 << (bitmarkParser.AmpImage - 140)) | (1 << (bitmarkParser.AmpVideo - 140)) | (1 << (bitmarkParser.AmpArticle - 140)) | (1 << (bitmarkParser.AmpDocument - 140)) | (1 << (bitmarkParser.AmpApp - 140)) | (1 << (bitmarkParser.AmpWebsite - 140)) | (1 << (bitmarkParser.AmpStillImageFilm - 140)) | (1 << (bitmarkParser.AmpAudioLink - 140)) | (1 << (bitmarkParser.AmpImageLink - 140)) | (1 << (bitmarkParser.AmpVideoLink - 140)) | (1 << (bitmarkParser.AmpArticleLink - 140)) | (1 << (bitmarkParser.AmpDocumentLink - 140)) | (1 << (bitmarkParser.AmpAppLink - 140)) | (1 << (bitmarkParser.AmpWebsiteLink - 140)) | (1 << (bitmarkParser.AmpStillImageFilmLink - 140)))) !== 0) || ((((_la - 179)) & ~0x1F) === 0 && ((1 << (_la - 179)) & ((1 << (bitmarkParser.BitmarkMinus - 179)) | (1 << (bitmarkParser.BitmarkPlus - 179)) | (1 << (bitmarkParser.URL - 179)))) !== 0)) {
					{
					this.state = 2585;
					this.s_and_w();
					}
				}

				this.state = 2588;
				this.match(bitmarkParser.EOF);
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
		this.enterRule(_localctx, 252, bitmarkParser.RULE_hint);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2591;
			this.match(bitmarkParser.OPQ);
			this.state = 2593;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 2592;
				_la = this._input.LA(1);
				if (_la <= 0 || (_la === bitmarkParser.CL)) {
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
				this.state = 2595;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << bitmarkParser.OPDOT) | (1 << bitmarkParser.S) | (1 << bitmarkParser.BitBook) | (1 << bitmarkParser.BitChapter) | (1 << bitmarkParser.BitToc) | (1 << bitmarkParser.BitSummary) | (1 << bitmarkParser.BitIntlink) | (1 << bitmarkParser.BitIntRef) | (1 << bitmarkParser.BitAlias) | (1 << bitmarkParser.BitGroups) | (1 << bitmarkParser.BitGroupt) | (1 << bitmarkParser.BitPlaceholder) | (1 << bitmarkParser.BitStatement) | (1 << bitmarkParser.BitDetails) | (1 << bitmarkParser.CLOZE) | (1 << bitmarkParser.MATCH) | (1 << bitmarkParser.BitArticle) | (1 << bitmarkParser.BitPage) | (1 << bitmarkParser.BitEssay) | (1 << bitmarkParser.BitMessage) | (1 << bitmarkParser.BitCorrection) | (1 << bitmarkParser.BitMark) | (1 << bitmarkParser.BitDocup) | (1 << bitmarkParser.BitTakepic) | (1 << bitmarkParser.BitRecaud) | (1 << bitmarkParser.BitPrepnote) | (1 << bitmarkParser.BitAssign) | (1 << bitmarkParser.BitBotint) | (1 << bitmarkParser.BitSelfassess) | (1 << bitmarkParser.BitRating) | (1 << bitmarkParser.BitSurvey))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (bitmarkParser.BitSurvey1 - 32)) | (1 << (bitmarkParser.BitSurveyanon - 32)) | (1 << (bitmarkParser.BitSurveyanon1 - 32)) | (1 << (bitmarkParser.BitVocabulary - 32)) | (1 << (bitmarkParser.BitVocabulary1 - 32)) | (1 << (bitmarkParser.BitNote - 32)) | (1 << (bitmarkParser.BitInfo - 32)) | (1 << (bitmarkParser.BitWarning - 32)) | (1 << (bitmarkParser.BitRemark - 32)) | (1 << (bitmarkParser.BitHint - 32)) | (1 << (bitmarkParser.BitHelp - 32)) | (1 << (bitmarkParser.BitDanger - 32)) | (1 << (bitmarkParser.BitBug - 32)) | (1 << (bitmarkParser.BitSidenote - 32)) | (1 << (bitmarkParser.BitStickynote - 32)) | (1 << (bitmarkParser.BitQuote - 32)) | (1 << (bitmarkParser.BitFootnote - 32)) | (1 << (bitmarkParser.BitExample - 32)) | (1 << (bitmarkParser.BitButtonCopytext - 32)) | (1 << (bitmarkParser.BitWbtContinue - 32)) | (1 << (bitmarkParser.BitLearningPathDetails - 32)) | (1 << (bitmarkParser.BitLearningPathLti - 32)) | (1 << (bitmarkParser.BitLearningPathStep - 32)) | (1 << (bitmarkParser.BitLearningPathBook - 32)) | (1 << (bitmarkParser.BitLearningPathSign - 32)) | (1 << (bitmarkParser.BitLearningPathVideoCall - 32)) | (1 << (bitmarkParser.BitLearningPathLearningGoal - 32)) | (1 << (bitmarkParser.BitLearningPathClosing - 32)) | (1 << (bitmarkParser.BitLearningPathFeedback - 32)) | (1 << (bitmarkParser.BitLearningPathBotTraining - 32)) | (1 << (bitmarkParser.BitLearningPathExternalLink - 32)) | (1 << (bitmarkParser.BitLearningPathClassroomTraining - 32)))) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (bitmarkParser.BitLearningPathClassroomEvent - 64)) | (1 << (bitmarkParser.BitBotActionSend - 64)) | (1 << (bitmarkParser.BitBotActionAnnounce - 64)) | (1 << (bitmarkParser.BitBotActionSave - 64)) | (1 << (bitmarkParser.BitBotActionRemind - 64)) | (1 << (bitmarkParser.COMMENT - 64)) | (1 << (bitmarkParser.Image_type - 64)) | (1 << (bitmarkParser.Audio_type - 64)) | (1 << (bitmarkParser.Video_type - 64)) | (1 << (bitmarkParser.OPDOLL - 64)) | (1 << (bitmarkParser.OPBUL - 64)) | (1 << (bitmarkParser.OPESC - 64)) | (1 << (bitmarkParser.OPRANGLES - 64)) | (1 << (bitmarkParser.OPRANGLEL - 64)) | (1 << (bitmarkParser.OPDANGLE - 64)) | (1 << (bitmarkParser.OPU - 64)) | (1 << (bitmarkParser.OPB - 64)) | (1 << (bitmarkParser.OPQ - 64)) | (1 << (bitmarkParser.OPA - 64)) | (1 << (bitmarkParser.OPP - 64)) | (1 << (bitmarkParser.OPM - 64)) | (1 << (bitmarkParser.OPS - 64)) | (1 << (bitmarkParser.OPR - 64)) | (1 << (bitmarkParser.OPHASH - 64)) | (1 << (bitmarkParser.OPC - 64)) | (1 << (bitmarkParser.COLON - 64)) | (1 << (bitmarkParser.AMP - 64)) | (1 << (bitmarkParser.DBLCOLON - 64)) | (1 << (bitmarkParser.PLUS - 64)) | (1 << (bitmarkParser.DotAt - 64)) | (1 << (bitmarkParser.Greater - 64)))) !== 0) || ((((_la - 96)) & ~0x1F) === 0 && ((1 << (_la - 96)) & ((1 << (bitmarkParser.Less - 96)) | (1 << (bitmarkParser.RightAngle - 96)) | (1 << (bitmarkParser.RightArrow - 96)) | (1 << (bitmarkParser.DBLEQ - 96)) | (1 << (bitmarkParser.HSPL - 96)) | (1 << (bitmarkParser.HSPL2 - 96)) | (1 << (bitmarkParser.SSPL - 96)) | (1 << (bitmarkParser.SSPL2 - 96)) | (1 << (bitmarkParser.QUOTE_INDEX - 96)) | (1 << (bitmarkParser.DCANY - 96)) | (1 << (bitmarkParser.ArticleText - 96)) | (1 << (bitmarkParser.NOTCL - 96)) | (1 << (bitmarkParser.NUMERIC - 96)) | (1 << (bitmarkParser.STRING - 96)) | (1 << (bitmarkParser.NL - 96)) | (1 << (bitmarkParser.SENTENCE - 96)) | (1 << (bitmarkParser.OPAT - 96)) | (1 << (bitmarkParser.AtProgress - 96)) | (1 << (bitmarkParser.AtReference - 96)) | (1 << (bitmarkParser.AtWidth - 96)) | (1 << (bitmarkParser.AtHeight - 96)) | (1 << (bitmarkParser.AtProgressPoints - 96)) | (1 << (bitmarkParser.AtShortanswer - 96)) | (1 << (bitmarkParser.AtLonganswer - 96)) | (1 << (bitmarkParser.AtExampleWithStr - 96)) | (1 << (bitmarkParser.AtExamplecol - 96)) | (1 << (bitmarkParser.AtExamplecl - 96)) | (1 << (bitmarkParser.AtPartialAnswerS - 96)) | (1 << (bitmarkParser.AtPartialAnswer - 96)) | (1 << (bitmarkParser.AtLabeltrue - 96)) | (1 << (bitmarkParser.AtLabelfalse - 96)) | (1 << (bitmarkParser.AtPoints - 96)))) !== 0) || ((((_la - 128)) & ~0x1F) === 0 && ((1 << (_la - 128)) & ((1 << (bitmarkParser.AtSrc - 128)) | (1 << (bitmarkParser.OPATALT - 128)) | (1 << (bitmarkParser.OPAMARK - 128)) | (1 << (bitmarkParser.ShowInIndex - 128)) | (1 << (bitmarkParser.OpAtCaption - 128)) | (1 << (bitmarkParser.OpAtLicense - 128)) | (1 << (bitmarkParser.OpAtCopyright - 128)) | (1 << (bitmarkParser.OpAtIsTracked - 128)) | (1 << (bitmarkParser.OpAtIsInfoOnly - 128)) | (1 << (bitmarkParser.AtDate - 128)) | (1 << (bitmarkParser.Http - 128)) | (1 << (bitmarkParser.Https - 128)) | (1 << (bitmarkParser.AmpAudio - 128)) | (1 << (bitmarkParser.AmpImage - 128)) | (1 << (bitmarkParser.AmpImageZoom - 128)) | (1 << (bitmarkParser.AmpImageWAudio - 128)) | (1 << (bitmarkParser.AmpVideo - 128)) | (1 << (bitmarkParser.AmpArticle - 128)) | (1 << (bitmarkParser.AmpDocument - 128)) | (1 << (bitmarkParser.AmpApp - 128)) | (1 << (bitmarkParser.AmpWebsite - 128)) | (1 << (bitmarkParser.AmpStillImageFilm - 128)) | (1 << (bitmarkParser.AmpPdf - 128)) | (1 << (bitmarkParser.OpAmpAudio - 128)) | (1 << (bitmarkParser.OpAmpImage - 128)) | (1 << (bitmarkParser.OpAmpImageZoom - 128)) | (1 << (bitmarkParser.OpAmpImageWAudio - 128)) | (1 << (bitmarkParser.OpAmpVideo - 128)) | (1 << (bitmarkParser.OpAmpArticle - 128)) | (1 << (bitmarkParser.OpAmpArticleAtt - 128)) | (1 << (bitmarkParser.OpAmpDocument - 128)) | (1 << (bitmarkParser.OpAmpApp - 128)))) !== 0) || ((((_la - 160)) & ~0x1F) === 0 && ((1 << (_la - 160)) & ((1 << (bitmarkParser.OpAmpWebsite - 160)) | (1 << (bitmarkParser.OpAmpStillImageFilm - 160)) | (1 << (bitmarkParser.BracEnclose - 160)) | (1 << (bitmarkParser.AmpAudioLink - 160)) | (1 << (bitmarkParser.AmpImageLink - 160)) | (1 << (bitmarkParser.AmpVideoLink - 160)) | (1 << (bitmarkParser.AmpArticleLink - 160)) | (1 << (bitmarkParser.AmpDocumentLink - 160)) | (1 << (bitmarkParser.AmpAppLink - 160)) | (1 << (bitmarkParser.AmpWebsiteLink - 160)) | (1 << (bitmarkParser.AmpStillImageFilmLink - 160)) | (1 << (bitmarkParser.OpAmpAudioLink - 160)) | (1 << (bitmarkParser.OpAmpImageLink - 160)) | (1 << (bitmarkParser.OpAmpVideoLink - 160)) | (1 << (bitmarkParser.OpAmpArticleLink - 160)) | (1 << (bitmarkParser.OpAmpDocumentLink - 160)) | (1 << (bitmarkParser.OpAmpAppLink - 160)) | (1 << (bitmarkParser.OpAmpWebsiteLink - 160)) | (1 << (bitmarkParser.OpAmpStillImageFilmLink - 160)) | (1 << (bitmarkParser.BitmarkMinus - 160)) | (1 << (bitmarkParser.BitmarkPlus - 160)) | (1 << (bitmarkParser.ColonText - 160)) | (1 << (bitmarkParser.BASIC - 160)) | (1 << (bitmarkParser.JPG - 160)) | (1 << (bitmarkParser.PNG - 160)) | (1 << (bitmarkParser.GIF - 160)) | (1 << (bitmarkParser.SVG - 160)) | (1 << (bitmarkParser.MP2 - 160)) | (1 << (bitmarkParser.MP3 - 160)) | (1 << (bitmarkParser.MP4 - 160)) | (1 << (bitmarkParser.FLV - 160)) | (1 << (bitmarkParser.WMV - 160)))) !== 0) || ((((_la - 192)) & ~0x1F) === 0 && ((1 << (_la - 192)) & ((1 << (bitmarkParser.MPEG - 192)) | (1 << (bitmarkParser.MPG - 192)) | (1 << (bitmarkParser.TEL - 192)) | (1 << (bitmarkParser.DotArticleAtt - 192)) | (1 << (bitmarkParser.STAR - 192)) | (1 << (bitmarkParser.URL - 192)) | (1 << (bitmarkParser.LIST_LINE - 192)))) !== 0));
			this.state = 2597;
			this.match(bitmarkParser.CL);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 254, bitmarkParser.RULE_title);
		let _la: number;
		try {
			this.state = 2611;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 360, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2599;
				this.match(bitmarkParser.OPHASH);
				this.state = 2602;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					this.state = 2602;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case bitmarkParser.S:
					case bitmarkParser.OPESC:
					case bitmarkParser.OPS:
					case bitmarkParser.COLON:
					case bitmarkParser.AMP:
					case bitmarkParser.Greater:
					case bitmarkParser.Less:
					case bitmarkParser.RightAngle:
					case bitmarkParser.RightArrow:
					case bitmarkParser.DBLEQ:
					case bitmarkParser.QUOTE_INDEX:
					case bitmarkParser.NUMERIC:
					case bitmarkParser.STRING:
					case bitmarkParser.SENTENCE:
					case bitmarkParser.AmpAudio:
					case bitmarkParser.AmpImage:
					case bitmarkParser.AmpVideo:
					case bitmarkParser.AmpArticle:
					case bitmarkParser.AmpDocument:
					case bitmarkParser.AmpApp:
					case bitmarkParser.AmpWebsite:
					case bitmarkParser.AmpStillImageFilm:
					case bitmarkParser.AmpAudioLink:
					case bitmarkParser.AmpImageLink:
					case bitmarkParser.AmpVideoLink:
					case bitmarkParser.AmpArticleLink:
					case bitmarkParser.AmpDocumentLink:
					case bitmarkParser.AmpAppLink:
					case bitmarkParser.AmpWebsiteLink:
					case bitmarkParser.AmpStillImageFilmLink:
					case bitmarkParser.BitmarkMinus:
					case bitmarkParser.BitmarkPlus:
					case bitmarkParser.URL:
						{
						this.state = 2600;
						this.s_and_w();
						}
						break;
					case bitmarkParser.NL:
						{
						this.state = 2601;
						this.match(bitmarkParser.NL);
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					}
					this.state = 2604;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la === bitmarkParser.S || ((((_la - 75)) & ~0x1F) === 0 && ((1 << (_la - 75)) & ((1 << (bitmarkParser.OPESC - 75)) | (1 << (bitmarkParser.OPS - 75)) | (1 << (bitmarkParser.COLON - 75)) | (1 << (bitmarkParser.AMP - 75)) | (1 << (bitmarkParser.Greater - 75)) | (1 << (bitmarkParser.Less - 75)) | (1 << (bitmarkParser.RightAngle - 75)) | (1 << (bitmarkParser.RightArrow - 75)) | (1 << (bitmarkParser.DBLEQ - 75)) | (1 << (bitmarkParser.QUOTE_INDEX - 75)))) !== 0) || ((((_la - 108)) & ~0x1F) === 0 && ((1 << (_la - 108)) & ((1 << (bitmarkParser.NUMERIC - 108)) | (1 << (bitmarkParser.STRING - 108)) | (1 << (bitmarkParser.NL - 108)) | (1 << (bitmarkParser.SENTENCE - 108)))) !== 0) || ((((_la - 140)) & ~0x1F) === 0 && ((1 << (_la - 140)) & ((1 << (bitmarkParser.AmpAudio - 140)) | (1 << (bitmarkParser.AmpImage - 140)) | (1 << (bitmarkParser.AmpVideo - 140)) | (1 << (bitmarkParser.AmpArticle - 140)) | (1 << (bitmarkParser.AmpDocument - 140)) | (1 << (bitmarkParser.AmpApp - 140)) | (1 << (bitmarkParser.AmpWebsite - 140)) | (1 << (bitmarkParser.AmpStillImageFilm - 140)) | (1 << (bitmarkParser.AmpAudioLink - 140)) | (1 << (bitmarkParser.AmpImageLink - 140)) | (1 << (bitmarkParser.AmpVideoLink - 140)) | (1 << (bitmarkParser.AmpArticleLink - 140)) | (1 << (bitmarkParser.AmpDocumentLink - 140)) | (1 << (bitmarkParser.AmpAppLink - 140)) | (1 << (bitmarkParser.AmpWebsiteLink - 140)) | (1 << (bitmarkParser.AmpStillImageFilmLink - 140)))) !== 0) || ((((_la - 179)) & ~0x1F) === 0 && ((1 << (_la - 179)) & ((1 << (bitmarkParser.BitmarkMinus - 179)) | (1 << (bitmarkParser.BitmarkPlus - 179)) | (1 << (bitmarkParser.URL - 179)))) !== 0));
				this.state = 2606;
				this.match(bitmarkParser.CL);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2607;
				this.match(bitmarkParser.OPHASH);
				this.state = 2608;
				this.s_and_w();
				this.state = 2609;
				this.match(bitmarkParser.EOF);
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
		this.enterRule(_localctx, 256, bitmarkParser.RULE_bool_label);
		try {
			this.state = 2621;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case bitmarkParser.AtLabeltrue:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2613;
				this.match(bitmarkParser.AtLabeltrue);
				this.state = 2614;
				this.s_and_w();
				this.state = 2615;
				this.match(bitmarkParser.CL);
				}
				break;
			case bitmarkParser.AtLabelfalse:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2617;
				this.match(bitmarkParser.AtLabelfalse);
				this.state = 2618;
				this.s_and_w();
				this.state = 2619;
				this.match(bitmarkParser.CL);
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
		this.enterRule(_localctx, 258, bitmarkParser.RULE_progress_points);
		try {
			this.state = 2632;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 362, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2623;
				this.match(bitmarkParser.AtProgressPoints);
				this.state = 2624;
				this.match(bitmarkParser.COLON);
				this.state = 2625;
				this.match(bitmarkParser.NUMERIC);
				this.state = 2626;
				this.match(bitmarkParser.CL);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2627;
				this.match(bitmarkParser.AtProgressPoints);
				this.state = 2628;
				this.match(bitmarkParser.COLON);
				this.state = 2629;
				this.s_and_w();
				this.state = 2630;
				this.match(bitmarkParser.CL);
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
		this.enterRule(_localctx, 260, bitmarkParser.RULE_istracked);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2634;
			this.match(bitmarkParser.OpAtIsTracked);
			this.state = 2635;
			this.s_and_w();
			this.state = 2636;
			this.match(bitmarkParser.CL);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 262, bitmarkParser.RULE_isinfoonly);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2638;
			this.match(bitmarkParser.OpAtIsInfoOnly);
			this.state = 2639;
			this.s_and_w();
			this.state = 2640;
			this.match(bitmarkParser.CL);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 264, bitmarkParser.RULE_atdef);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2642;
			this.atdef_();
			this.state = 2652;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 364, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 2646;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === bitmarkParser.NL) {
						{
						{
						this.state = 2643;
						this.match(bitmarkParser.NL);
						}
						}
						this.state = 2648;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					this.state = 2649;
					this.atdef_();
					}
					}
				}
				this.state = 2654;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 364, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 266, bitmarkParser.RULE_atdef_);
		let _la: number;
		try {
			let _alt: number;
			this.state = 2677;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case bitmarkParser.OPA:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2655;
				this.match(bitmarkParser.OPA);
				this.state = 2656;
				this.s_and_w();
				this.state = 2657;
				_la = this._input.LA(1);
				if (!(_la === bitmarkParser.COLON || _la === bitmarkParser.DBLCOLON)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 2658;
				this.s_and_w();
				this.state = 2664;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === bitmarkParser.S || ((((_la - 75)) & ~0x1F) === 0 && ((1 << (_la - 75)) & ((1 << (bitmarkParser.OPESC - 75)) | (1 << (bitmarkParser.OPS - 75)) | (1 << (bitmarkParser.COLON - 75)) | (1 << (bitmarkParser.AMP - 75)) | (1 << (bitmarkParser.Greater - 75)) | (1 << (bitmarkParser.Less - 75)) | (1 << (bitmarkParser.RightAngle - 75)) | (1 << (bitmarkParser.RightArrow - 75)) | (1 << (bitmarkParser.DBLEQ - 75)) | (1 << (bitmarkParser.QUOTE_INDEX - 75)))) !== 0) || ((((_la - 108)) & ~0x1F) === 0 && ((1 << (_la - 108)) & ((1 << (bitmarkParser.NUMERIC - 108)) | (1 << (bitmarkParser.STRING - 108)) | (1 << (bitmarkParser.NL - 108)) | (1 << (bitmarkParser.SENTENCE - 108)))) !== 0) || ((((_la - 140)) & ~0x1F) === 0 && ((1 << (_la - 140)) & ((1 << (bitmarkParser.AmpAudio - 140)) | (1 << (bitmarkParser.AmpImage - 140)) | (1 << (bitmarkParser.AmpVideo - 140)) | (1 << (bitmarkParser.AmpArticle - 140)) | (1 << (bitmarkParser.AmpDocument - 140)) | (1 << (bitmarkParser.AmpApp - 140)) | (1 << (bitmarkParser.AmpWebsite - 140)) | (1 << (bitmarkParser.AmpStillImageFilm - 140)) | (1 << (bitmarkParser.AmpAudioLink - 140)) | (1 << (bitmarkParser.AmpImageLink - 140)) | (1 << (bitmarkParser.AmpVideoLink - 140)) | (1 << (bitmarkParser.AmpArticleLink - 140)) | (1 << (bitmarkParser.AmpDocumentLink - 140)) | (1 << (bitmarkParser.AmpAppLink - 140)) | (1 << (bitmarkParser.AmpWebsiteLink - 140)) | (1 << (bitmarkParser.AmpStillImageFilmLink - 140)))) !== 0) || ((((_la - 179)) & ~0x1F) === 0 && ((1 << (_la - 179)) & ((1 << (bitmarkParser.BitmarkMinus - 179)) | (1 << (bitmarkParser.BitmarkPlus - 179)) | (1 << (bitmarkParser.URL - 179)))) !== 0)) {
					{
					this.state = 2662;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 365, this._ctx) ) {
					case 1:
						{
						this.state = 2659;
						this.match(bitmarkParser.NL);
						}
						break;

					case 2:
						{
						this.state = 2660;
						this.match(bitmarkParser.COLON);
						}
						break;

					case 3:
						{
						this.state = 2661;
						this.s_and_w();
						}
						break;
					}
					}
					this.state = 2666;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 2667;
				this.match(bitmarkParser.CL);
				}
				break;
			case bitmarkParser.OpAtCopyright:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2669;
				this.match(bitmarkParser.OpAtCopyright);
				this.state = 2673;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 367, this._ctx);
				while (_alt !== 1 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1 + 1) {
						{
						{
						this.state = 2670;
						this.matchWildcard();
						}
						}
					}
					this.state = 2675;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 367, this._ctx);
				}
				this.state = 2676;
				this.match(bitmarkParser.CL);
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
		this.enterRule(_localctx, 268, bitmarkParser.RULE_dollarans);
		let _la: number;
		try {
			this.state = 2698;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 373, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2679;
				this.match(bitmarkParser.OPDOLL);
				this.state = 2683;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					this.state = 2683;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 369, this._ctx) ) {
					case 1:
						{
						this.state = 2680;
						this.s_and_w();
						}
						break;

					case 2:
						{
						this.state = 2681;
						this.match(bitmarkParser.COLON);
						}
						break;

					case 3:
						{
						this.state = 2682;
						this.match(bitmarkParser.NL);
						}
						break;
					}
					}
					this.state = 2685;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la === bitmarkParser.S || ((((_la - 75)) & ~0x1F) === 0 && ((1 << (_la - 75)) & ((1 << (bitmarkParser.OPESC - 75)) | (1 << (bitmarkParser.OPS - 75)) | (1 << (bitmarkParser.COLON - 75)) | (1 << (bitmarkParser.AMP - 75)) | (1 << (bitmarkParser.Greater - 75)) | (1 << (bitmarkParser.Less - 75)) | (1 << (bitmarkParser.RightAngle - 75)) | (1 << (bitmarkParser.RightArrow - 75)) | (1 << (bitmarkParser.DBLEQ - 75)) | (1 << (bitmarkParser.QUOTE_INDEX - 75)))) !== 0) || ((((_la - 108)) & ~0x1F) === 0 && ((1 << (_la - 108)) & ((1 << (bitmarkParser.NUMERIC - 108)) | (1 << (bitmarkParser.STRING - 108)) | (1 << (bitmarkParser.NL - 108)) | (1 << (bitmarkParser.SENTENCE - 108)))) !== 0) || ((((_la - 140)) & ~0x1F) === 0 && ((1 << (_la - 140)) & ((1 << (bitmarkParser.AmpAudio - 140)) | (1 << (bitmarkParser.AmpImage - 140)) | (1 << (bitmarkParser.AmpVideo - 140)) | (1 << (bitmarkParser.AmpArticle - 140)) | (1 << (bitmarkParser.AmpDocument - 140)) | (1 << (bitmarkParser.AmpApp - 140)) | (1 << (bitmarkParser.AmpWebsite - 140)) | (1 << (bitmarkParser.AmpStillImageFilm - 140)) | (1 << (bitmarkParser.AmpAudioLink - 140)) | (1 << (bitmarkParser.AmpImageLink - 140)) | (1 << (bitmarkParser.AmpVideoLink - 140)) | (1 << (bitmarkParser.AmpArticleLink - 140)) | (1 << (bitmarkParser.AmpDocumentLink - 140)) | (1 << (bitmarkParser.AmpAppLink - 140)) | (1 << (bitmarkParser.AmpWebsiteLink - 140)) | (1 << (bitmarkParser.AmpStillImageFilmLink - 140)))) !== 0) || ((((_la - 179)) & ~0x1F) === 0 && ((1 << (_la - 179)) & ((1 << (bitmarkParser.BitmarkMinus - 179)) | (1 << (bitmarkParser.BitmarkPlus - 179)) | (1 << (bitmarkParser.URL - 179)))) !== 0));
				this.state = 2687;
				this.match(bitmarkParser.CL);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2688;
				this.match(bitmarkParser.OPDOLL);
				this.state = 2694;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === bitmarkParser.S || ((((_la - 75)) & ~0x1F) === 0 && ((1 << (_la - 75)) & ((1 << (bitmarkParser.OPESC - 75)) | (1 << (bitmarkParser.OPS - 75)) | (1 << (bitmarkParser.COLON - 75)) | (1 << (bitmarkParser.AMP - 75)) | (1 << (bitmarkParser.Greater - 75)) | (1 << (bitmarkParser.Less - 75)) | (1 << (bitmarkParser.RightAngle - 75)) | (1 << (bitmarkParser.RightArrow - 75)) | (1 << (bitmarkParser.DBLEQ - 75)) | (1 << (bitmarkParser.QUOTE_INDEX - 75)))) !== 0) || ((((_la - 108)) & ~0x1F) === 0 && ((1 << (_la - 108)) & ((1 << (bitmarkParser.NUMERIC - 108)) | (1 << (bitmarkParser.STRING - 108)) | (1 << (bitmarkParser.NL - 108)) | (1 << (bitmarkParser.SENTENCE - 108)))) !== 0) || ((((_la - 140)) & ~0x1F) === 0 && ((1 << (_la - 140)) & ((1 << (bitmarkParser.AmpAudio - 140)) | (1 << (bitmarkParser.AmpImage - 140)) | (1 << (bitmarkParser.AmpVideo - 140)) | (1 << (bitmarkParser.AmpArticle - 140)) | (1 << (bitmarkParser.AmpDocument - 140)) | (1 << (bitmarkParser.AmpApp - 140)) | (1 << (bitmarkParser.AmpWebsite - 140)) | (1 << (bitmarkParser.AmpStillImageFilm - 140)) | (1 << (bitmarkParser.AmpAudioLink - 140)) | (1 << (bitmarkParser.AmpImageLink - 140)) | (1 << (bitmarkParser.AmpVideoLink - 140)) | (1 << (bitmarkParser.AmpArticleLink - 140)) | (1 << (bitmarkParser.AmpDocumentLink - 140)) | (1 << (bitmarkParser.AmpAppLink - 140)) | (1 << (bitmarkParser.AmpWebsiteLink - 140)) | (1 << (bitmarkParser.AmpStillImageFilmLink - 140)))) !== 0) || ((((_la - 179)) & ~0x1F) === 0 && ((1 << (_la - 179)) & ((1 << (bitmarkParser.BitmarkMinus - 179)) | (1 << (bitmarkParser.BitmarkPlus - 179)) | (1 << (bitmarkParser.URL - 179)))) !== 0)) {
					{
					this.state = 2692;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 371, this._ctx) ) {
					case 1:
						{
						this.state = 2689;
						this.s_and_w();
						}
						break;

					case 2:
						{
						this.state = 2690;
						this.match(bitmarkParser.COLON);
						}
						break;

					case 3:
						{
						this.state = 2691;
						this.match(bitmarkParser.NL);
						}
						break;
					}
					}
					this.state = 2696;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 2697;
				this.match(bitmarkParser.EOF);
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
		this.enterRule(_localctx, 270, bitmarkParser.RULE_anchor);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2700;
			this.match(bitmarkParser.OPDANGLE);
			this.state = 2702;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === bitmarkParser.S || ((((_la - 75)) & ~0x1F) === 0 && ((1 << (_la - 75)) & ((1 << (bitmarkParser.OPESC - 75)) | (1 << (bitmarkParser.OPS - 75)) | (1 << (bitmarkParser.COLON - 75)) | (1 << (bitmarkParser.AMP - 75)) | (1 << (bitmarkParser.Greater - 75)) | (1 << (bitmarkParser.Less - 75)) | (1 << (bitmarkParser.RightAngle - 75)) | (1 << (bitmarkParser.RightArrow - 75)) | (1 << (bitmarkParser.DBLEQ - 75)) | (1 << (bitmarkParser.QUOTE_INDEX - 75)))) !== 0) || ((((_la - 108)) & ~0x1F) === 0 && ((1 << (_la - 108)) & ((1 << (bitmarkParser.NUMERIC - 108)) | (1 << (bitmarkParser.STRING - 108)) | (1 << (bitmarkParser.SENTENCE - 108)))) !== 0) || ((((_la - 140)) & ~0x1F) === 0 && ((1 << (_la - 140)) & ((1 << (bitmarkParser.AmpAudio - 140)) | (1 << (bitmarkParser.AmpImage - 140)) | (1 << (bitmarkParser.AmpVideo - 140)) | (1 << (bitmarkParser.AmpArticle - 140)) | (1 << (bitmarkParser.AmpDocument - 140)) | (1 << (bitmarkParser.AmpApp - 140)) | (1 << (bitmarkParser.AmpWebsite - 140)) | (1 << (bitmarkParser.AmpStillImageFilm - 140)) | (1 << (bitmarkParser.AmpAudioLink - 140)) | (1 << (bitmarkParser.AmpImageLink - 140)) | (1 << (bitmarkParser.AmpVideoLink - 140)) | (1 << (bitmarkParser.AmpArticleLink - 140)) | (1 << (bitmarkParser.AmpDocumentLink - 140)) | (1 << (bitmarkParser.AmpAppLink - 140)) | (1 << (bitmarkParser.AmpWebsiteLink - 140)) | (1 << (bitmarkParser.AmpStillImageFilmLink - 140)))) !== 0) || ((((_la - 179)) & ~0x1F) === 0 && ((1 << (_la - 179)) & ((1 << (bitmarkParser.BitmarkMinus - 179)) | (1 << (bitmarkParser.BitmarkPlus - 179)) | (1 << (bitmarkParser.URL - 179)))) !== 0)) {
				{
				this.state = 2701;
				this.s_and_w();
				}
			}

			this.state = 2704;
			this.match(bitmarkParser.CL);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 272, bitmarkParser.RULE_lines);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2710;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 2706;
					this.s_and_w();
					this.state = 2708;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 375, this._ctx) ) {
					case 1:
						{
						this.state = 2707;
						this.match(bitmarkParser.NL);
						}
						break;
					}
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 2712;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 376, this._ctx);
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
		this.enterRule(_localctx, 274, bitmarkParser.RULE_s_and_w);
		let _la: number;
		try {
			let _alt: number;
			this.state = 2760;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 384, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2714;
				this.match(bitmarkParser.STRING);
				this.state = 2721;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 378, this._ctx) ) {
				case 1:
					{
					this.state = 2716;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					do {
						{
						{
						this.state = 2715;
						this.match(bitmarkParser.S);
						}
						}
						this.state = 2718;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					} while (_la === bitmarkParser.S);
					this.state = 2720;
					this.match(bitmarkParser.NUMERIC);
					}
					break;
				}
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2723;
				this.words();
				this.state = 2730;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 380, this._ctx) ) {
				case 1:
					{
					this.state = 2725;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					do {
						{
						{
						this.state = 2724;
						this.match(bitmarkParser.S);
						}
						}
						this.state = 2727;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					} while (_la === bitmarkParser.S);
					this.state = 2729;
					this.match(bitmarkParser.NUMERIC);
					}
					break;
				}
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 2732;
				this.match(bitmarkParser.NUMERIC);
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 2733;
				this.match(bitmarkParser.OPS);
				this.state = 2734;
				this.s_and_w();
				this.state = 2735;
				this.match(bitmarkParser.CL);
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 2740;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === bitmarkParser.S) {
					{
					{
					this.state = 2737;
					this.match(bitmarkParser.S);
					}
					}
					this.state = 2742;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 2743;
				this.match(bitmarkParser.COLON);
				this.state = 2747;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 382, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 2744;
						this.match(bitmarkParser.S);
						}
						}
					}
					this.state = 2749;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 382, this._ctx);
				}
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 2750;
				this.match(bitmarkParser.AMP);
				this.state = 2754;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 383, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 2751;
						this.match(bitmarkParser.S);
						}
						}
					}
					this.state = 2756;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 383, this._ctx);
				}
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 2757;
				this.match(bitmarkParser.DBLEQ);
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 2758;
				this.match(bitmarkParser.URL);
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 2759;
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
		this.enterRule(_localctx, 276, bitmarkParser.RULE_dclines);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2762;
			this.match(bitmarkParser.DCANY);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 278, bitmarkParser.RULE_bracket_escaped);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2764;
			this.match(bitmarkParser.OPESC);
			this.state = 2766;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 2765;
					this.s_and_w();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 2768;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 385, this._ctx);
			} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
			this.state = 2771;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 386, this._ctx) ) {
			case 1:
				{
				this.state = 2770;
				this.match(bitmarkParser.CL);
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
		this.enterRule(_localctx, 280, bitmarkParser.RULE_clnsp);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2773;
			this.match(bitmarkParser.CL);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 282, bitmarkParser.RULE_sspl);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2775;
			_la = this._input.LA(1);
			if (!(_la === bitmarkParser.SSPL || _la === bitmarkParser.SSPL2)) {
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
		this.enterRule(_localctx, 284, bitmarkParser.RULE_words);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2804;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					this.state = 2804;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case bitmarkParser.SENTENCE:
						{
						this.state = 2777;
						this.sentence();
						}
						break;
					case bitmarkParser.AMP:
						{
						this.state = 2778;
						this.match(bitmarkParser.AMP);
						}
						break;
					case bitmarkParser.Greater:
						{
						this.state = 2779;
						this.match(bitmarkParser.Greater);
						this.state = 2780;
						_la = this._input.LA(1);
						if (_la <= 0 || (_la === bitmarkParser.Greater)) {
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
					case bitmarkParser.Less:
						{
						this.state = 2781;
						this.match(bitmarkParser.Less);
						this.state = 2782;
						_la = this._input.LA(1);
						if (_la <= 0 || (_la === bitmarkParser.Less)) {
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
					case bitmarkParser.RightArrow:
						{
						this.state = 2783;
						this.match(bitmarkParser.RightArrow);
						}
						break;
					case bitmarkParser.RightAngle:
						{
						this.state = 2784;
						this.match(bitmarkParser.RightAngle);
						}
						break;
					case bitmarkParser.AmpArticle:
						{
						this.state = 2785;
						this.match(bitmarkParser.AmpArticle);
						}
						break;
					case bitmarkParser.AmpArticleLink:
						{
						this.state = 2786;
						this.match(bitmarkParser.AmpArticleLink);
						}
						break;
					case bitmarkParser.AmpDocument:
						{
						this.state = 2787;
						this.match(bitmarkParser.AmpDocument);
						}
						break;
					case bitmarkParser.AmpDocumentLink:
						{
						this.state = 2788;
						this.match(bitmarkParser.AmpDocumentLink);
						}
						break;
					case bitmarkParser.AmpWebsite:
						{
						this.state = 2789;
						this.match(bitmarkParser.AmpWebsite);
						}
						break;
					case bitmarkParser.AmpWebsiteLink:
						{
						this.state = 2790;
						this.match(bitmarkParser.AmpWebsiteLink);
						}
						break;
					case bitmarkParser.AmpImage:
						{
						this.state = 2791;
						this.match(bitmarkParser.AmpImage);
						}
						break;
					case bitmarkParser.AmpImageLink:
						{
						this.state = 2792;
						this.match(bitmarkParser.AmpImageLink);
						}
						break;
					case bitmarkParser.AmpAudio:
						{
						this.state = 2793;
						this.match(bitmarkParser.AmpAudio);
						}
						break;
					case bitmarkParser.AmpAudioLink:
						{
						this.state = 2794;
						this.match(bitmarkParser.AmpAudioLink);
						}
						break;
					case bitmarkParser.AmpVideo:
						{
						this.state = 2795;
						this.match(bitmarkParser.AmpVideo);
						}
						break;
					case bitmarkParser.AmpVideoLink:
						{
						this.state = 2796;
						this.match(bitmarkParser.AmpVideoLink);
						}
						break;
					case bitmarkParser.AmpApp:
						{
						this.state = 2797;
						this.match(bitmarkParser.AmpApp);
						}
						break;
					case bitmarkParser.AmpAppLink:
						{
						this.state = 2798;
						this.match(bitmarkParser.AmpAppLink);
						}
						break;
					case bitmarkParser.AmpStillImageFilm:
						{
						this.state = 2799;
						this.match(bitmarkParser.AmpStillImageFilm);
						}
						break;
					case bitmarkParser.AmpStillImageFilmLink:
						{
						this.state = 2800;
						this.match(bitmarkParser.AmpStillImageFilmLink);
						}
						break;
					case bitmarkParser.BitmarkMinus:
						{
						this.state = 2801;
						this.match(bitmarkParser.BitmarkMinus);
						}
						break;
					case bitmarkParser.BitmarkPlus:
						{
						this.state = 2802;
						this.match(bitmarkParser.BitmarkPlus);
						}
						break;
					case bitmarkParser.QUOTE_INDEX:
						{
						this.state = 2803;
						this.match(bitmarkParser.QUOTE_INDEX);
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
				this.state = 2806;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 388, this._ctx);
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
		this.enterRule(_localctx, 286, bitmarkParser.RULE_sp);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2808;
			this.match(bitmarkParser.S);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public sentence(): SentenceContext {
		let _localctx: SentenceContext = new SentenceContext(this._ctx, this.state);
		this.enterRule(_localctx, 288, bitmarkParser.RULE_sentence);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2810;
			this.match(bitmarkParser.SENTENCE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	private static readonly _serializedATNSegments: number = 6;
	private static readonly _serializedATNSegment0: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\xC8\u0AFF\x04" +
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
		"{\t{\x04|\t|\x04}\t}\x04~\t~\x04\x7F\t\x7F\x04\x80\t\x80\x04\x81\t\x81" +
		"\x04\x82\t\x82\x04\x83\t\x83\x04\x84\t\x84\x04\x85\t\x85\x04\x86\t\x86" +
		"\x04\x87\t\x87\x04\x88\t\x88\x04\x89\t\x89\x04\x8A\t\x8A\x04\x8B\t\x8B" +
		"\x04\x8C\t\x8C\x04\x8D\t\x8D\x04\x8E\t\x8E\x04\x8F\t\x8F\x04\x90\t\x90" +
		"\x04\x91\t\x91\x04\x92\t\x92\x03\x02\x03\x02\x07\x02\u0127\n\x02\f\x02" +
		"\x0E\x02\u012A\v\x02\x03\x02\x07\x02\u012D\n\x02\f\x02\x0E\x02\u0130\v" +
		"\x02\x06\x02\u0132\n\x02\r\x02\x0E\x02\u0133\x03\x02\x07\x02\u0137\n\x02" +
		"\f\x02\x0E\x02\u013A\v\x02\x03\x02\x03\x02\x03\x03\x03\x03\x05\x03\u0140" +
		"\n\x03\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04" +
		"\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04" +
		"\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04" +
		"\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04" +
		"\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04" +
		"\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04" +
		"\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04" +
		"\x05\x04\u0180\n\x04\x03\x05\x03\x05\x05\x05\u0184\n\x05\x03\x05\x03\x05" +
		"\x07\x05\u0188\n\x05\f\x05\x0E\x05\u018B\v\x05\x03\x05\x06\x05\u018E\n" +
		"\x05\r\x05\x0E\x05\u018F\x03\x06\x03\x06\x05\x06\u0194\n\x06\x03\x06\x03" +
		"\x06\x07\x06\u0198\n\x06\f\x06\x0E\x06\u019B\v\x06\x03\x06\x03\x06\x03" +
		"\x06\x05\x06\u01A0\n\x06\x03\x06\x03\x06\x07\x06\u01A4\n\x06\f\x06\x0E" +
		"\x06\u01A7\v\x06\x03\x06\x07\x06\u01AA\n\x06\f\x06\x0E\x06\u01AD\v\x06" +
		"\x03\x07\x03\x07\x05\x07\u01B1\n\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03" +
		"\x07\x05\x07\u01B8\n\x07\x03\b\x03\b\x03\b\x07\b\u01BD\n\b\f\b\x0E\b\u01C0" +
		"\v\b\x03\b\x03\b\x03\t\x03\t\x05\t\u01C6\n\t\x03\t\x03\t\x07\t\u01CA\n" +
		"\t\f\t\x0E\t\u01CD\v\t\x03\t\x07\t\u01D0\n\t\f\t\x0E\t\u01D3\v\t\x03\n" +
		"\x03\n\x03\n\x03\n\x03\v\x05\v\u01DA\n\v\x03\v\x03\v\x03\v\x03\v\x03\v" +
		"\x03\v\x03\v\x05\v\u01E3\n\v\x07\v\u01E5\n\v\f\v\x0E\v\u01E8\v\v\x03\f" +
		"\x03\f\x03\f\x03\f\x03\f\x03\f\x06\f\u01F0\n\f\r\f\x0E\f\u01F1\x03\f\x06" +
		"\f\u01F5\n\f\r\f\x0E\f\u01F6\x03\f\x03\f\x07\f\u01FB\n\f\f\f\x0E\f\u01FE" +
		"\v\f\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x06\r\u0206\n\r\r\r\x0E\r\u0207" +
		"\x03\r\x06\r\u020B\n\r\r\r\x0E\r\u020C\x03\r\x03\r\x07\r\u0211\n\r\f\r" +
		"\x0E\r\u0214\v\r\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x07\x0E\u021A\n\x0E\f" +
		"\x0E\x0E\x0E\u021D\v\x0E\x03\x0E\x03\x0E\x07\x0E\u0221\n\x0E\f\x0E\x0E" +
		"\x0E\u0224\v\x0E\x06\x0E\u0226\n\x0E\r\x0E\x0E\x0E\u0227\x03\x0F\x03\x0F" +
		"\x03\x0F\x03\x0F\x07\x0F\u022E\n\x0F\f\x0F\x0E\x0F\u0231\v\x0F\x03\x0F" +
		"\x03\x0F\x07\x0F\u0235\n\x0F\f\x0F\x0E\x0F\u0238\v\x0F\x06\x0F\u023A\n" +
		"\x0F\r\x0F\x0E\x0F\u023B\x03\x10\x03\x10\x03\x10\x03\x10\x07\x10\u0242" +
		"\n\x10\f\x10\x0E\x10\u0245\v\x10\x03\x10\x03\x10\x07\x10\u0249\n\x10\f" +
		"\x10\x0E\x10\u024C\v\x10\x06\x10\u024E\n\x10\r\x10\x0E\x10\u024F\x03\x11" +
		"\x03\x11\x03\x11\x03\x11\x07\x11\u0256\n\x11\f\x11\x0E\x11\u0259\v\x11" +
		"\x03\x11\x03\x11\x07\x11\u025D\n\x11\f\x11\x0E\x11\u0260\v\x11\x06\x11" +
		"\u0262\n\x11\r\x11\x0E\x11\u0263\x03\x12\x03\x12\x03\x12\x03\x12\x07\x12" +
		"\u026A\n\x12\f\x12\x0E\x12\u026D\v\x12\x03\x12\x03\x12\x07\x12\u0271\n" +
		"\x12\f\x12\x0E\x12\u0274\v\x12\x06\x12\u0276\n\x12\r\x12\x0E\x12\u0277" +
		"\x03\x13\x03\x13\x03\x13\x03\x13\x07\x13\u027E\n\x13\f\x13\x0E\x13\u0281" +
		"\v\x13\x03\x13\x03\x13\x07\x13\u0285\n\x13\f\x13\x0E\x13\u0288\v\x13\x06" +
		"\x13\u028A\n\x13\r\x13\x0E\x13\u028B\x03\x14\x03\x14\x03\x14\x03\x14\x07" +
		"\x14\u0292\n\x14\f\x14\x0E\x14\u0295\v\x14\x03\x14\x03\x14\x07\x14\u0299" +
		"\n\x14\f\x14\x0E\x14\u029C\v\x14\x06\x14\u029E\n\x14\r\x14\x0E\x14\u029F" +
		"\x03\x15\x03\x15\x03\x15\x03\x15\x07\x15\u02A6\n\x15\f\x15\x0E\x15\u02A9" +
		"\v\x15\x03\x15\x03\x15\x07\x15\u02AD\n\x15\f\x15\x0E\x15\u02B0\v\x15\x06" +
		"\x15\u02B2\n\x15\r\x15\x0E\x15\u02B3\x03\x16\x03\x16\x03\x16\x03\x16\x07" +
		"\x16\u02BA\n\x16\f\x16\x0E\x16\u02BD\v\x16\x03\x16\x03\x16\x07\x16\u02C1" +
		"\n\x16\f\x16\x0E\x16\u02C4\v\x16\x06\x16\u02C6\n\x16\r\x16\x0E\x16\u02C7" +
		"\x03\x17\x03\x17\x03\x17\x03\x17\x07\x17\u02CE\n\x17\f\x17\x0E\x17\u02D1" +
		"\v\x17\x03\x17\x03\x17\x07\x17\u02D5\n\x17\f\x17\x0E\x17\u02D8\v\x17\x06" +
		"\x17\u02DA\n\x17\r\x17\x0E\x17\u02DB\x03\x18\x03\x18\x03\x18\x03\x18\x07" +
		"\x18\u02E2\n\x18\f\x18\x0E\x18\u02E5\v\x18\x03\x18\x03\x18\x07\x18\u02E9" +
		"\n\x18\f\x18\x0E\x18\u02EC\v\x18\x06\x18\u02EE\n\x18\r\x18\x0E\x18\u02EF" +
		"\x03\x19\x03\x19\x03\x19\x03\x19\x07\x19\u02F6\n\x19\f\x19\x0E\x19\u02F9" +
		"\v\x19\x03\x19\x03\x19\x07\x19\u02FD\n\x19\f\x19\x0E\x19\u0300\v\x19\x06" +
		"\x19\u0302\n\x19\r\x19\x0E\x19\u0303\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x07" +
		"\x1A\u030A\n\x1A\f\x1A\x0E\x1A\u030D\v\x1A\x03\x1A\x03\x1A\x07\x1A\u0311" +
		"\n\x1A\f\x1A\x0E\x1A\u0314\v\x1A\x06\x1A\u0316\n\x1A\r\x1A\x0E\x1A\u0317" +
		"\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x07\x1B\u031E\n\x1B\f\x1B\x0E\x1B\u0321" +
		"\v\x1B\x03\x1B\x03\x1B\x07\x1B\u0325\n\x1B\f\x1B\x0E\x1B\u0328\v\x1B\x06" +
		"\x1B\u032A\n\x1B\r\x1B\x0E\x1B\u032B\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x07" +
		"\x1C\u0332\n\x1C\f\x1C\x0E\x1C\u0335\v\x1C\x03\x1C\x03\x1C\x07\x1C\u0339" +
		"\n\x1C\f\x1C\x0E\x1C\u033C\v\x1C\x06\x1C\u033E\n\x1C\r\x1C\x0E\x1C\u033F" +
		"\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x07\x1D\u0346\n\x1D\f\x1D\x0E\x1D\u0349" +
		"\v\x1D\x03\x1D\x03\x1D\x07\x1D\u034D\n\x1D\f\x1D\x0E\x1D\u0350\v\x1D\x06" +
		"\x1D\u0352\n\x1D\r\x1D\x0E\x1D\u0353\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03" +
		"\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03" +
		"\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03" +
		"\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x05" +
		"\x1E\u0375\n\x1E\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x07\x1F" +
		"\u037D\n\x1F\f\x1F\x0E\x1F\u0380\v\x1F\x03 \x03 \x03 \x03 \x05 \u0386" +
		"\n \x03 \x07 \u0389\n \f \x0E \u038C\v \x03 \x03 \x03!\x05!\u0391\n!\x03" +
		"!\x03!\x06!\u0395\n!\r!\x0E!\u0396\x03!\x03!\x03\"\x05\"\u039C\n\"\x03" +
		"\"\x03\"\x06\"\u03A0\n\"\r\"\x0E\"\u03A1\x03\"\x03\"\x03#\x05#\u03A7\n" +
		"#\x03#\x03#\x06#\u03AB\n#\r#\x0E#\u03AC\x03#\x03#\x03$\x03$\x03$\x03$" +
		"\x03$\x03$\x07$\u03B7\n$\f$\x0E$\u03BA\v$\x07$\u03BC\n$\f$\x0E$\u03BF" +
		"\v$\x03$\x07$\u03C2\n$\f$\x0E$\u03C5\v$\x03$\x07$\u03C8\n$\f$\x0E$\u03CB" +
		"\v$\x03$\x07$\u03CE\n$\f$\x0E$\u03D1\v$\x03$\x03$\x07$\u03D5\n$\f$\x0E" +
		"$\u03D8\v$\x03$\x07$\u03DB\n$\f$\x0E$\u03DE\v$\x05$\u03E0\n$\x03%\x03" +
		"%\x05%\u03E4\n%\x03%\x03%\x05%\u03E8\n%\x05%\u03EA\n%\x03%\x03%\x03&\x03" +
		"&\x03\'\x03\'\x03(\x03(\x03(\x03(\x03(\x03(\x07(\u03F8\n(\f(\x0E(\u03FB" +
		"\v(\x07(\u03FD\n(\f(\x0E(\u0400\v(\x03(\x07(\u0403\n(\f(\x0E(\u0406\v" +
		"(\x03(\x07(\u0409\n(\f(\x0E(\u040C\v(\x03(\x03(\x07(\u0410\n(\f(\x0E(" +
		"\u0413\v(\x03(\x07(\u0416\n(\f(\x0E(\u0419\v(\x05(\u041B\n(\x03)\x03)" +
		"\x07)\u041F\n)\f)\x0E)\u0422\v)\x03)\x03)\x03)\x03)\x07)\u0428\n)\f)\x0E" +
		")\u042B\v)\x03)\x03)\x05)\u042F\n)\x03*\x03*\x03*\x03*\x03*\x03*\x05*" +
		"\u0437\n*\x03*\x07*\u043A\n*\f*\x0E*\u043D\v*\x07*\u043F\n*\f*\x0E*\u0442" +
		"\v*\x03*\x07*\u0445\n*\f*\x0E*\u0448\v*\x03*\x03*\x07*\u044C\n*\f*\x0E" +
		"*\u044F\v*\x03*\x07*\u0452\n*\f*\x0E*\u0455\v*\x05*\u0457\n*\x03+\x03" +
		"+\x03+\x03+\x05+\u045D\n+\x03+\x03+\x03+\x07+\u0462\n+\f+\x0E+\u0465\v" +
		"+\x03,\x03,\x07,\u0469\n,\f,\x0E,\u046C\v,\x03,\x03,\x07,\u0470\n,\f," +
		"\x0E,\u0473\v,\x03,\x03,\x03-\x03-\x05-\u0479\n-\x03-\x03-\x03-\x03-\x07" +
		"-\u047F\n-\f-\x0E-\u0482\v-\x07-\u0484\n-\f-\x0E-\u0487\v-\x03-\x07-\u048A" +
		"\n-\f-\x0E-\u048D\v-\x03-\x03-\x07-\u0491\n-\f-\x0E-\u0494\v-\x03-\x07" +
		"-\u0497\n-\f-\x0E-\u049A\v-\x05-\u049C\n-\x03.\x03.\x03.\x03.\x03.\x03" +
		".\x07.\u04A4\n.\f.\x0E.\u04A7\v.\x07.\u04A9\n.\f.\x0E.\u04AC\v.\x03.\x07" +
		".\u04AF\n.\f.\x0E.\u04B2\v.\x03.\x03.\x07.\u04B6\n.\f.\x0E.\u04B9\v.\x03" +
		".\x07.\u04BC\n.\f.\x0E.\u04BF\v.\x05.\u04C1\n.\x03/\x03/\x03/\x03/\x03" +
		"/\x03/\x07/\u04C9\n/\f/\x0E/\u04CC\v/\x07/\u04CE\n/\f/\x0E/\u04D1\v/\x03" +
		"/\x07/\u04D4\n/\f/\x0E/\u04D7\v/\x03/\x03/\x07/\u04DB\n/\f/\x0E/\u04DE" +
		"\v/\x03/\x07/\u04E1\n/\f/\x0E/\u04E4\v/\x05/\u04E6\n/\x030\x030\x030\x03" +
		"0\x070\u04EC\n0\f0\x0E0\u04EF\v0\x030\x030\x070\u04F3\n0\f0\x0E0\u04F6" +
		"\v0\x070\u04F8\n0\f0\x0E0\u04FB\v0\x030\x050\u04FE\n0\x030\x070\u0501" +
		"\n0\f0\x0E0\u0504\v0\x030\x030\x070\u0508\n0\f0\x0E0\u050B\v0\x030\x07" +
		"0\u050E\n0\f0\x0E0\u0511\v0\x050\u0513\n0\x031\x031\x031\x031\x061\u0519" +
		"\n1\r1\x0E1\u051A\x031\x031\x071\u051F\n1\f1\x0E1\u0522\v1\x071\u0524" +
		"\n1\f1\x0E1\u0527\v1\x031\x051\u052A\n1\x031\x071\u052D\n1\f1\x0E1\u0530" +
		"\v1\x031\x031\x071\u0534\n1\f1\x0E1\u0537\v1\x031\x071\u053A\n1\f1\x0E" +
		"1\u053D\v1\x051\u053F\n1\x032\x032\x032\x032\x072\u0545\n2\f2\x0E2\u0548" +
		"\v2\x032\x032\x072\u054C\n2\f2\x0E2\u054F\v2\x062\u0551\n2\r2\x0E2\u0552" +
		"\x033\x033\x033\x033\x073\u0559\n3\f3\x0E3\u055C\v3\x033\x033\x073\u0560" +
		"\n3\f3\x0E3\u0563\v3\x063\u0565\n3\r3\x0E3\u0566\x034\x034\x034\x034\x07" +
		"4\u056D\n4\f4\x0E4\u0570\v4\x034\x034\x074\u0574\n4\f4\x0E4\u0577\v4\x06" +
		"4\u0579\n4\r4\x0E4\u057A\x035\x035\x035\x035\x075\u0581\n5\f5\x0E5\u0584" +
		"\v5\x035\x035\x075\u0588\n5\f5\x0E5\u058B\v5\x065\u058D\n5\r5\x0E5\u058E" +
		"\x036\x036\x036\x036\x076\u0595\n6\f6\x0E6\u0598\v6\x036\x036\x076\u059C" +
		"\n6\f6\x0E6\u059F\v6\x066\u05A1\n6\r6\x0E6\u05A2\x037\x037\x037\x037\x07" +
		"7\u05A9\n7\f7\x0E7\u05AC\v7\x037\x037\x077\u05B0\n7\f7\x0E7\u05B3\v7\x06" +
		"7\u05B5\n7\r7\x0E7\u05B6\x038\x038\x038\x038\x078\u05BD\n8\f8\x0E8\u05C0" +
		"\v8\x038\x038\x078\u05C4\n8\f8\x0E8\u05C7\v8\x068\u05C9\n8\r8\x0E8\u05CA" +
		"\x039\x039\x039\x039\x079\u05D1\n9\f9\x0E9\u05D4\v9\x039\x039\x079\u05D8" +
		"\n9\f9\x0E9\u05DB\v9\x069\u05DD\n9\r9\x0E9\u05DE\x03:\x03:\x03:\x03:\x07" +
		":\u05E5\n:\f:\x0E:\u05E8\v:\x03:\x03:\x07:\u05EC\n:\f:\x0E:\u05EF\v:\x06" +
		":\u05F1\n:\r:\x0E:\u05F2\x03;\x03;\x03;\x03;\x07;\u05F9\n;\f;\x0E;\u05FC" +
		"\v;\x03;\x03;\x07;\u0600\n;\f;\x0E;\u0603\v;\x06;\u0605\n;\r;\x0E;\u0606" +
		"\x03<\x03<\x03<\x03<\x07<\u060D\n<\f<\x0E<\u0610\v<\x03<\x03<\x07<\u0614" +
		"\n<\f<\x0E<\u0617\v<\x06<\u0619\n<\r<\x0E<\u061A\x03=\x03=\x03=\x03=\x07" +
		"=\u0621\n=\f=\x0E=\u0624\v=\x03=\x03=\x07=\u0628\n=\f=\x0E=\u062B\v=\x06" +
		"=\u062D\n=\r=\x0E=\u062E\x03>\x03>\x03>\x03>\x07>\u0635\n>\f>\x0E>\u0638" +
		"\v>\x03>\x03>\x07>\u063C\n>\f>\x0E>\u063F\v>\x06>\u0641\n>\r>\x0E>\u0642" +
		"\x03?\x03?\x03?\x03?\x07?\u0649\n?\f?\x0E?\u064C\v?\x03?\x03?\x07?\u0650" +
		"\n?\f?\x0E?\u0653\v?\x06?\u0655\n?\r?\x0E?\u0656\x03@\x03@\x03@\x03@\x07" +
		"@\u065D\n@\f@\x0E@\u0660\v@\x03@\x03@\x07@\u0664\n@\f@\x0E@\u0667\v@\x06" +
		"@\u0669\n@\r@\x0E@\u066A\x03A\x03A\x03A\x03A\x07A\u0671\nA\fA\x0EA\u0674" +
		"\vA\x03A\x03A\x07A\u0678\nA\fA\x0EA\u067B\vA\x06A\u067D\nA\rA\x0EA\u067E" +
		"\x03B\x03B\x03B\x03B\x07B\u0685\nB\fB\x0EB\u0688\vB\x03B\x03B\x07B\u068C" +
		"\nB\fB\x0EB\u068F\vB\x06B\u0691\nB\rB\x0EB\u0692\x03C\x03C\x03C\x03C\x07" +
		"C\u0699\nC\fC\x0EC\u069C\vC\x03C\x03C\x07C\u06A0\nC\fC\x0EC\u06A3\vC\x06" +
		"C\u06A5\nC\rC\x0EC\u06A6\x03D\x03D\x03D\x03D\x07D\u06AD\nD\fD\x0ED\u06B0" +
		"\vD\x03D\x03D\x07D\u06B4\nD\fD\x0ED\u06B7\vD\x06D\u06B9\nD\rD\x0ED\u06BA" +
		"\x03E\x03E\x03E\x03E\x07E\u06C1\nE\fE\x0EE\u06C4\vE\x03E\x03E\x07E\u06C8" +
		"\nE\fE\x0EE\u06CB\vE\x06E\u06CD\nE\rE\x0EE\u06CE\x03F\x03F\x03F\x03F\x07" +
		"F\u06D5\nF\fF\x0EF\u06D8\vF\x03F\x03F\x07F\u06DC\nF\fF\x0EF\u06DF\vF\x06" +
		"F\u06E1\nF\rF\x0EF\u06E2\x03G\x03G\x03G\x03G\x03G\x03G\x03G\x03G\x07G" +
		"\u06ED\nG\fG\x0EG\u06F0\vG\x06G\u06F2\nG\rG\x0EG\u06F3\x03G\x03G\x07G" +
		"\u06F8\nG\fG\x0EG\u06FB\vG\x03G\x03G\x07G\u06FF\nG\fG\x0EG\u0702\vG\x03" +
		"G\x07G\u0705\nG\fG\x0EG\u0708\vG\x05G\u070A\nG\x03H\x03H\x03H\x03H\x03" +
		"H\x03H\x03H\x06H\u0713\nH\rH\x0EH\u0714\x03I\x03I\x03I\x03I\x07I\u071B" +
		"\nI\fI\x0EI\u071E\vI\x03I\x03I\x07I\u0722\nI\fI\x0EI\u0725\vI\x07I\u0727" +
		"\nI\fI\x0EI\u072A\vI\x03I\x03I\x03I\x03I\x06I\u0730\nI\rI\x0EI\u0731\x06" +
		"I\u0734\nI\rI\x0EI\u0735\x03I\x03I\x07I\u073A\nI\fI\x0EI\u073D\vI\x03" +
		"I\x03I\x07I\u0741\nI\fI\x0EI\u0744\vI\x03I\x07I\u0747\nI\fI\x0EI\u074A" +
		"\vI\x05I\u074C\nI\x03J\x03J\x03J\x03J\x05J\u0752\nJ\x03K\x03K\x03K\x03" +
		"K\x07K\u0758\nK\fK\x0EK\u075B\vK\x03K\x03K\x07K\u075F\nK\fK\x0EK\u0762" +
		"\vK\x07K\u0764\nK\fK\x0EK\u0767\vK\x03K\x03K\x05K\u076B\nK\x03K\x07K\u076E" +
		"\nK\fK\x0EK\u0771\vK\x03K\x06K\u0774\nK\rK\x0EK\u0775\x06K\u0778\nK\r" +
		"K\x0EK\u0779\x03K\x03K\x03L\x03L\x03L\x03L\x07L\u0782\nL\fL\x0EL\u0785" +
		"\vL\x03L\x03L\x07L\u0789\nL\fL\x0EL\u078C\vL\x07L\u078E\nL\fL\x0EL\u0791" +
		"\vL\x03L\x03L\x03L\x03L\x06L\u0797\nL\rL\x0EL\u0798\x06L\u079B\nL\rL\x0E" +
		"L\u079C\x03L\x03L\x03M\x03M\x03M\x03M\x07M\u07A5\nM\fM\x0EM\u07A8\vM\x03" +
		"M\x03M\x07M\u07AC\nM\fM\x0EM\u07AF\vM\x07M\u07B1\nM\fM\x0EM\u07B4\vM\x03" +
		"M\x03M\x03M\x03M\x06M\u07BA\nM\rM\x0EM\u07BB\x06M\u07BE\nM\rM\x0EM\u07BF" +
		"\x03M\x03M\x03N\x03N\x03N\x03N\x07N\u07C8\nN\fN\x0EN\u07CB\vN\x03N\x03" +
		"N\x07N\u07CF\nN\fN\x0EN\u07D2\vN\x07N\u07D4\nN\fN\x0EN\u07D7\vN\x03N\x03" +
		"N\x03N\x03N\x06N\u07DD\nN\rN\x0EN\u07DE\x06N\u07E1\nN\rN\x0EN\u07E2\x03" +
		"N\x03N\x03O\x03O\x03O\x03O\x07O\u07EB\nO\fO\x0EO\u07EE\vO\x03O\x03O\x07" +
		"O\u07F2\nO\fO\x0EO\u07F5\vO\x07O\u07F7\nO\fO\x0EO\u07FA\vO\x03O\x03O\x03" +
		"O\x07O\u07FF\nO\fO\x0EO\u0802\vO\x03O\x06O\u0805\nO\rO\x0EO\u0806\x06" +
		"O\u0809\nO\rO\x0EO\u080A\x03O\x03O\x07O\u080F\nO\fO\x0EO\u0812\vO\x03" +
		"O\x03O\x07O\u0816\nO\fO\x0EO\u0819\vO\x03O\x07O\u081C\nO\fO\x0EO\u081F" +
		"\vO\x05O\u0821\nO\x03P\x06P\u0824\nP\rP\x0EP\u0825\x03Q\x03Q\x03Q\x03" +
		"Q\x03R\x07R\u082D\nR\fR\x0ER\u0830\vR\x03R\x03R\x07R\u0834\nR\fR\x0ER" +
		"\u0837\vR\x03S\x03S\x03T\x03T\x03T\x03T\x03T\x03T\x03T\x03T\x03T\x05T" +
		"\u0844\nT\x03U\x03U\x03U\x05U\u0849\nU\x03U\x03U\x05U\u084D\nU\x03U\x03" +
		"U\x05U\u0851\nU\x03U\x05U\u0854\nU\x03V\x03V\x03V\x05V\u0859\nV\x03W\x03" +
		"W\x03X\x03X\x03Y\x03Y\x03Z\x03Z\x03[\x03[\x03\\\x03\\\x03]\x03]\x03^\x03" +
		"^\x03_\x03_\x03`\x03`\x03`\x05`\u0870\n`\x03`\x03`\x03`\x05`\u0875\n`" +
		"\x05`\u0877\n`\x03a\x03a\x03b\x03b\x03b\x03b\x03b\x03b\x05b\u0881\nb\x03" +
		"c\x03c\x03c\x03c\x03c\x03c\x03c\x03c\x05c\u088B\nc\x03d\x03d\x03d\x03" +
		"d\x03d\x03d\x03d\x03d\x05d\u0895\nd\x03e\x03e\x03e\x03e\x05e\u089B\ne" +
		"\x03e\x03e\x03e\x03e\x03e\x05e\u08A2\ne\x03f\x03f\x07f\u08A6\nf\ff\x0E" +
		"f\u08A9\vf\x03g\x03g\x03g\x07g\u08AE\ng\fg\x0Eg\u08B1\vg\x03g\x03g\x03" +
		"g\x03h\x03h\x07h\u08B8\nh\fh\x0Eh\u08BB\v";
	private static readonly _serializedATNSegment1: string =
		"h\x03i\x03i\x03i\x03i\x03i\x03i\x03i\x03i\x05i\u08C5\ni\x03j\x03j\x07" +
		"j\u08C9\nj\fj\x0Ej\u08CC\vj\x03j\x03j\x05j\u08D0\nj\x03k\x03k\x03k\x07" +
		"k\u08D5\nk\fk\x0Ek\u08D8\vk\x03k\x03k\x03k\x03l\x03l\x03l\x05l\u08E0\n" +
		"l\x03l\x03l\x05l\u08E4\nl\x03l\x03l\x05l\u08E8\nl\x03l\x05l\u08EB\nl\x03" +
		"m\x03m\x03m\x03m\x03m\x03m\x03m\x03m\x03m\x03m\x03m\x07m\u08F8\nm\fm\x0E" +
		"m\u08FB\vm\x03m\x05m\u08FE\nm\x03n\x03n\x03n\x03n\x03n\x03n\x03n\x03n" +
		"\x03n\x03n\x03n\x07n\u090B\nn\fn\x0En\u090E\vn\x03n\x05n\u0911\nn\x03" +
		"o\x03o\x07o\u0915\no\fo\x0Eo\u0918\vo\x03p\x03p\x03p\x03p\x03p\x03p\x03" +
		"p\x03p\x05p\u0922\np\x03q\x03q\x03q\x05q\u0927\nq\x03q\x03q\x03q\x05q" +
		"\u092C\nq\x05q\u092E\nq\x03r\x03r\x03r\x05r\u0933\nr\x03r\x03r\x03r\x05" +
		"r\u0938\nr\x05r\u093A\nr\x03s\x03s\x03s\x05s\u093F\ns\x03s\x03s\x07s\u0943" +
		"\ns\fs\x0Es\u0946\vs\x03s\x03s\x06s\u094A\ns\rs\x0Es\u094B\x03s\x03s\x03" +
		"s\x03s\x03s\x03s\x03s\x07s\u0955\ns\fs\x0Es\u0958\vs\x03s\x05s\u095B\n" +
		"s\x03t\x03t\x03t\x03t\x03u\x03u\x03v\x03v\x03v\x07v\u0966\nv\fv\x0Ev\u0969" +
		"\vv\x03v\x05v\u096C\nv\x03v\x03v\x03v\x03v\x07v\u0972\nv\fv\x0Ev\u0975" +
		"\vv\x03v\x03v\x07v\u0979\nv\fv\x0Ev\u097C\vv\x03v\x05v\u097F\nv\x05v\u0981" +
		"\nv\x03w\x03w\x03w\x03w\x07w\u0987\nw\fw\x0Ew\u098A\vw\x03w\x03w\x03x" +
		"\x03x\x05x\u0990\nx\x03x\x03x\x03x\x05x\u0995\nx\x03x\x05x\u0998\nx\x03" +
		"y\x03y\x03y\x03y\x05y\u099E\ny\x03y\x05y\u09A1\ny\x03z\x03z\x05z\u09A5" +
		"\nz\x03z\x03z\x03z\x07z\u09AA\nz\fz\x0Ez\u09AD\vz\x07z\u09AF\nz\fz\x0E" +
		"z\u09B2\vz\x03z\x07z\u09B5\nz\fz\x0Ez\u09B8\vz\x07z\u09BA\nz\fz\x0Ez\u09BD" +
		"\vz\x03z\x03z\x03z\x03z\x03z\x07z\u09C4\nz\fz\x0Ez\u09C7\vz\x03z\x05z" +
		"\u09CA\nz\x03{\x03{\x03{\x03{\x03{\x06{\u09D1\n{\r{\x0E{\u09D2\x03{\x03" +
		"{\x03{\x03{\x03{\x03{\x03{\x07{\u09DC\n{\f{\x0E{\u09DF\v{\x03{\x05{\u09E2" +
		"\n{\x03|\x03|\x03|\x03|\x03}\x03}\x03}\x03}\x06}\u09EC\n}\r}\x0E}\u09ED" +
		"\x03}\x03}\x05}\u09F2\n}\x03~\x03~\x03~\x03~\x06~\u09F8\n~\r~\x0E~\u09F9" +
		"\x03~\x03~\x03\x7F\x03\x7F\x05\x7F\u0A00\n\x7F\x03\x7F\x03\x7F\x03\x7F" +
		"\x07\x7F\u0A05\n\x7F\f\x7F\x0E\x7F\u0A08\v\x7F\x07\x7F\u0A0A\n\x7F\f\x7F" +
		"\x0E\x7F\u0A0D\v\x7F\x03\x7F\x07\x7F\u0A10\n\x7F\f\x7F\x0E\x7F\u0A13\v" +
		"\x7F\x07\x7F\u0A15\n\x7F\f\x7F\x0E\x7F\u0A18\v\x7F\x03\x7F\x03\x7F\x03" +
		"\x7F\x05\x7F\u0A1D\n\x7F\x03\x7F\x05\x7F\u0A20\n\x7F\x03\x80\x03\x80\x06" +
		"\x80\u0A24\n\x80\r\x80\x0E\x80\u0A25\x03\x80\x03\x80\x03\x81\x03\x81\x03" +
		"\x81\x06\x81\u0A2D\n\x81\r\x81\x0E\x81\u0A2E\x03\x81\x03\x81\x03\x81\x03" +
		"\x81\x03\x81\x05\x81\u0A36\n\x81\x03\x82\x03\x82\x03\x82\x03\x82\x03\x82" +
		"\x03\x82\x03\x82\x03\x82\x05\x82\u0A40\n\x82\x03\x83\x03\x83\x03\x83\x03" +
		"\x83\x03\x83\x03\x83\x03\x83\x03\x83\x03\x83\x05\x83\u0A4B\n\x83\x03\x84" +
		"\x03\x84\x03\x84\x03\x84\x03\x85\x03\x85\x03\x85\x03\x85\x03\x86\x03\x86" +
		"\x07\x86\u0A57\n\x86\f\x86\x0E\x86\u0A5A\v\x86\x03\x86\x07\x86\u0A5D\n" +
		"\x86\f\x86\x0E\x86\u0A60\v\x86\x03\x87\x03\x87\x03\x87\x03\x87\x03\x87" +
		"\x03\x87\x03\x87\x07\x87\u0A69\n\x87\f\x87\x0E\x87\u0A6C\v\x87\x03\x87" +
		"\x03\x87\x03\x87\x03\x87\x07\x87\u0A72\n\x87\f\x87\x0E\x87\u0A75\v\x87" +
		"\x03\x87\x05\x87\u0A78\n\x87\x03\x88\x03\x88\x03\x88\x03\x88\x06\x88\u0A7E" +
		"\n\x88\r\x88\x0E\x88\u0A7F\x03\x88\x03\x88\x03\x88\x03\x88\x03\x88\x07" +
		"\x88\u0A87\n\x88\f\x88\x0E\x88\u0A8A\v\x88\x03\x88\x05\x88\u0A8D\n\x88" +
		"\x03\x89\x03\x89\x05\x89\u0A91\n\x89\x03\x89\x03\x89\x03\x8A\x03\x8A\x05" +
		"\x8A\u0A97\n\x8A\x06\x8A\u0A99\n\x8A\r\x8A\x0E\x8A\u0A9A\x03\x8B\x03\x8B" +
		"\x06\x8B\u0A9F\n\x8B\r\x8B\x0E\x8B\u0AA0\x03\x8B\x05\x8B\u0AA4\n\x8B\x03" +
		"\x8B\x03\x8B\x06\x8B\u0AA8\n\x8B\r\x8B\x0E\x8B\u0AA9\x03\x8B\x05\x8B\u0AAD" +
		"\n\x8B\x03\x8B\x03\x8B\x03\x8B\x03\x8B\x03\x8B\x03\x8B\x07\x8B\u0AB5\n" +
		"\x8B\f\x8B\x0E\x8B\u0AB8\v\x8B\x03\x8B\x03\x8B\x07\x8B\u0ABC\n\x8B\f\x8B" +
		"\x0E\x8B\u0ABF\v\x8B\x03\x8B\x03\x8B\x07\x8B\u0AC3\n\x8B\f\x8B\x0E\x8B" +
		"\u0AC6\v\x8B\x03\x8B\x03\x8B\x03\x8B\x05\x8B\u0ACB\n\x8B\x03\x8C\x03\x8C" +
		"\x03\x8D\x03\x8D\x06\x8D\u0AD1\n\x8D\r\x8D\x0E\x8D\u0AD2\x03\x8D\x05\x8D" +
		"\u0AD6\n\x8D\x03\x8E\x03\x8E\x03\x8F\x03\x8F\x03\x90\x03\x90\x03\x90\x03" +
		"\x90\x03\x90\x03\x90\x03\x90\x03\x90\x03\x90\x03\x90\x03\x90\x03\x90\x03" +
		"\x90\x03\x90\x03\x90\x03\x90\x03\x90\x03\x90\x03\x90\x03\x90\x03\x90\x03" +
		"\x90\x03\x90\x03\x90\x03\x90\x03\x90\x03\x90\x06\x90\u0AF7\n\x90\r\x90" +
		"\x0E\x90\u0AF8\x03\x91\x03\x91\x03\x92\x03\x92\x03\x92\b\u0420\u0429\u08F9" +
		"\u090C\u0956\u0A73\x02\x02\x93\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02" +
		"\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02" +
		" \x02\"\x02$\x02&\x02(\x02*\x02,\x02.\x020\x022\x024\x026\x028\x02:\x02" +
		"<\x02>\x02@\x02B\x02D\x02F\x02H\x02J\x02L\x02N\x02P\x02R\x02T\x02V\x02" +
		"X\x02Z\x02\\\x02^\x02`\x02b\x02d\x02f\x02h\x02j\x02l\x02n\x02p\x02r\x02" +
		"t\x02v\x02x\x02z\x02|\x02~\x02\x80\x02\x82\x02\x84\x02\x86\x02\x88\x02" +
		"\x8A\x02\x8C\x02\x8E\x02\x90\x02\x92\x02\x94\x02\x96\x02\x98\x02\x9A\x02" +
		"\x9C\x02\x9E\x02\xA0\x02\xA2\x02\xA4\x02\xA6\x02\xA8\x02\xAA\x02\xAC\x02" +
		"\xAE\x02\xB0\x02\xB2\x02\xB4\x02\xB6\x02\xB8\x02\xBA\x02\xBC\x02\xBE\x02" +
		"\xC0\x02\xC2\x02\xC4\x02\xC6\x02\xC8\x02\xCA\x02\xCC\x02\xCE\x02\xD0\x02" +
		"\xD2\x02\xD4\x02\xD6\x02\xD8\x02\xDA\x02\xDC\x02\xDE\x02\xE0\x02\xE2\x02" +
		"\xE4\x02\xE6\x02\xE8\x02\xEA\x02\xEC\x02\xEE\x02\xF0\x02\xF2\x02\xF4\x02" +
		"\xF6\x02\xF8\x02\xFA\x02\xFC\x02\xFE\x02\u0100\x02\u0102\x02\u0104\x02" +
		"\u0106\x02\u0108\x02\u010A\x02\u010C\x02\u010E\x02\u0110\x02\u0112\x02" +
		"\u0114\x02\u0116\x02\u0118\x02\u011A\x02\u011C\x02\u011E\x02\u0120\x02" +
		"\u0122\x02\x02\x1C\x03\x02\t\n\x03\x02\xB5\xB6\x03\x02XY\x03\x02}~\x03" +
		"\x02HJ\x03\x02fg\x03\x02LL\x06\x02\x93\x94\x96\x97\xA5\xAC\xB5\xB6\x04" +
		"\x02\x92\x92\xA7\xA7\x04\x02\x93\x93\xA8\xA8\x04\x02\x94\x94\xA9\xA9\x04" +
		"\x02\x95\x95\xAA\xAA\x04\x02\x96\x96\xAB\xAB\x04\x02\x97\x97\xAC\xAC\x04" +
		"\x02\x9E\x9E\xB0\xB0\x04\x02\xA0\xA0\xB1\xB1\x04\x02\xA1\xA1\xB2\xB2\x04" +
		"\x02\xA2\xA2\xB3\xB3\x04\x02\xA3\xA3\xB4\xB4\x03\x02uv\x04\x02\x83\x83" +
		"\x86\x88\x03\x02[[\x04\x02\\\\^^\x03\x02hi\x03\x02aa\x03\x02bb\x02\u0C94" +
		"\x02\u0131\x03\x02\x02\x02\x04\u013F\x03\x02\x02\x02\x06\u017F\x03\x02" +
		"\x02\x02\b\u0181\x03\x02\x02\x02\n\u0191\x03\x02\x02\x02\f\u01AE\x03\x02" +
		"\x02\x02\x0E\u01B9\x03\x02\x02\x02\x10\u01C3\x03\x02\x02\x02\x12\u01D4" +
		"\x03\x02\x02\x02\x14\u01E6\x03\x02\x02\x02\x16\u01E9\x03\x02\x02\x02\x18" +
		"\u01FF\x03\x02\x02\x02\x1A\u0215\x03\x02\x02\x02\x1C\u0229\x03\x02\x02" +
		"\x02\x1E\u023D\x03\x02\x02\x02 \u0251\x03\x02\x02\x02\"\u0265\x03\x02" +
		"\x02\x02$\u0279\x03\x02\x02\x02&\u028D\x03\x02\x02\x02(\u02A1\x03\x02" +
		"\x02\x02*\u02B5\x03\x02\x02\x02,\u02C9\x03\x02\x02\x02.\u02DD\x03\x02" +
		"\x02\x020\u02F1\x03\x02\x02\x022\u0305\x03\x02\x02\x024\u0319\x03\x02" +
		"\x02\x026\u032D\x03\x02\x02\x028\u0341\x03\x02\x02\x02:\u0374\x03\x02" +
		"\x02\x02<\u0376\x03\x02\x02\x02>\u0381\x03\x02\x02\x02@\u0390\x03\x02" +
		"\x02\x02B\u039B\x03\x02\x02\x02D\u03A6\x03\x02\x02\x02F\u03B0\x03\x02" +
		"\x02\x02H\u03E1\x03\x02\x02\x02J\u03ED\x03\x02\x02\x02L\u03EF\x03\x02" +
		"\x02\x02N\u03F1\x03\x02\x02\x02P\u042E\x03\x02\x02\x02R\u0430\x03\x02" +
		"\x02\x02T\u0458\x03\x02\x02\x02V\u0466\x03\x02\x02\x02X\u0476\x03\x02" +
		"\x02\x02Z\u049D\x03\x02\x02\x02\\\u04C2\x03\x02\x02\x02^\u04E7\x03\x02" +
		"\x02\x02`\u0514\x03\x02\x02\x02b\u0540\x03\x02\x02\x02d\u0554\x03\x02" +
		"\x02\x02f\u0568\x03\x02\x02\x02h\u057C\x03\x02\x02\x02j\u0590\x03\x02" +
		"\x02\x02l\u05A4\x03\x02\x02\x02n\u05B8\x03\x02\x02\x02p\u05CC\x03\x02" +
		"\x02\x02r\u05E0\x03\x02\x02\x02t\u05F4\x03\x02\x02\x02v\u0608\x03\x02" +
		"\x02\x02x\u061C\x03\x02\x02\x02z\u0630\x03\x02\x02\x02|\u0644\x03\x02" +
		"\x02\x02~\u0658\x03\x02\x02\x02\x80\u066C\x03\x02\x02\x02\x82\u0680\x03" +
		"\x02\x02\x02\x84\u0694\x03\x02\x02\x02\x86\u06A8\x03\x02\x02\x02\x88\u06BC" +
		"\x03\x02\x02\x02\x8A\u06D0\x03\x02\x02\x02\x8C\u06E4\x03\x02\x02\x02\x8E" +
		"\u0712\x03\x02\x02\x02\x90\u0716\x03\x02\x02\x02\x92\u074D\x03\x02\x02" +
		"\x02\x94\u0753\x03\x02\x02\x02\x96\u077D\x03\x02\x02\x02\x98\u07A0\x03" +
		"\x02\x02\x02\x9A\u07C3\x03\x02\x02\x02\x9C\u07E6\x03\x02\x02\x02\x9E\u0823" +
		"\x03\x02\x02\x02\xA0\u0827\x03\x02\x02\x02\xA2\u082E\x03\x02\x02\x02\xA4" +
		"\u0838\x03\x02\x02\x02\xA6\u0843\x03\x02\x02\x02\xA8\u0853\x03\x02\x02" +
		"\x02\xAA\u0855\x03\x02\x02\x02\xAC\u085A\x03\x02\x02\x02\xAE\u085C\x03" +
		"\x02\x02\x02\xB0\u085E\x03\x02\x02\x02\xB2\u0860\x03\x02\x02\x02\xB4\u0862" +
		"\x03\x02\x02\x02\xB6\u0864\x03\x02\x02\x02\xB8\u0866\x03\x02\x02\x02\xBA" +
		"\u0868\x03\x02\x02\x02\xBC\u086A\x03\x02\x02\x02\xBE\u0876\x03\x02\x02" +
		"\x02\xC0\u0878\x03\x02\x02\x02\xC2\u0880\x03\x02\x02\x02\xC4\u0882\x03" +
		"\x02\x02\x02\xC6\u088C\x03\x02\x02\x02\xC8\u0896\x03\x02\x02\x02\xCA\u08A3" +
		"\x03\x02\x02\x02\xCC\u08AA\x03\x02\x02\x02\xCE\u08B5\x03\x02\x02\x02\xD0" +
		"\u08BC\x03\x02\x02\x02\xD2\u08C6\x03\x02\x02\x02\xD4\u08D1\x03\x02\x02" +
		"\x02\xD6\u08EA\x03\x02\x02\x02\xD8\u08FD\x03\x02\x02\x02\xDA\u0910\x03" +
		"\x02\x02\x02\xDC\u0912\x03\x02\x02\x02\xDE\u0919\x03\x02\x02\x02\xE0\u092D" +
		"\x03\x02\x02\x02\xE2\u0939\x03\x02\x02\x02\xE4\u095A\x03\x02\x02\x02\xE6" +
		"\u095C\x03\x02\x02\x02\xE8\u0960\x03\x02\x02\x02\xEA\u0980\x03\x02\x02" +
		"\x02\xEC\u0982\x03\x02\x02\x02\xEE\u0997\x03\x02\x02\x02\xF0\u09A0\x03" +
		"\x02\x02\x02\xF2\u09C9\x03\x02\x02\x02\xF4\u09E1\x03\x02\x02\x02\xF6\u09E3" +
		"\x03\x02\x02\x02\xF8\u09E7\x03\x02\x02\x02\xFA\u09F3\x03\x02\x02\x02\xFC" +
		"\u0A1F\x03\x02\x02\x02\xFE\u0A21\x03\x02\x02\x02\u0100\u0A35\x03\x02\x02" +
		"\x02\u0102\u0A3F\x03\x02\x02\x02\u0104\u0A4A\x03\x02\x02\x02\u0106\u0A4C" +
		"\x03\x02\x02\x02\u0108\u0A50\x03\x02\x02\x02\u010A\u0A54\x03\x02\x02\x02" +
		"\u010C\u0A77\x03\x02\x02\x02\u010E\u0A8C\x03\x02\x02\x02\u0110\u0A8E\x03" +
		"\x02\x02\x02\u0112\u0A98\x03\x02\x02\x02\u0114\u0ACA\x03\x02\x02\x02\u0116" +
		"\u0ACC\x03\x02\x02\x02\u0118\u0ACE\x03\x02\x02\x02\u011A\u0AD7\x03\x02" +
		"\x02\x02\u011C\u0AD9\x03\x02\x02\x02\u011E\u0AF6\x03\x02\x02\x02\u0120" +
		"\u0AFA\x03\x02\x02\x02\u0122\u0AFC\x03\x02\x02\x02\u0124\u012E\x05\x04" +
		"\x03\x02\u0125\u0127\x07\x04\x02\x02\u0126\u0125\x03\x02\x02\x02\u0127" +
		"\u012A\x03\x02\x02\x02\u0128\u0126\x03\x02\x02\x02\u0128\u0129\x03\x02" +
		"\x02\x02\u0129\u012B\x03\x02\x02\x02\u012A\u0128\x03\x02\x02\x02\u012B" +
		"\u012D\x07p\x02\x02\u012C\u0128\x03\x02\x02\x02\u012D\u0130\x03\x02\x02" +
		"\x02\u012E\u012C\x03\x02\x02\x02\u012E\u012F\x03\x02\x02\x02\u012F\u0132" +
		"\x03\x02\x02\x02\u0130\u012E\x03\x02\x02\x02\u0131\u0124\x03\x02\x02\x02" +
		"\u0132\u0133\x03\x02\x02\x02\u0133\u0131\x03\x02\x02\x02\u0133\u0134\x03" +
		"\x02\x02\x02\u0134\u0138\x03\x02\x02\x02\u0135\u0137\x07p\x02\x02\u0136" +
		"\u0135\x03\x02\x02\x02\u0137\u013A\x03\x02\x02\x02\u0138\u0136\x03\x02" +
		"\x02\x02\u0138\u0139\x03\x02\x02\x02\u0139\u013B\x03\x02\x02\x02\u013A" +
		"\u0138\x03\x02\x02\x02\u013B\u013C\x07\x02\x02\x03\u013C\x03\x03\x02\x02" +
		"\x02\u013D\u0140\x05\x06\x04\x02\u013E\u0140\x05\u0112\x8A\x02\u013F\u013D" +
		"\x03\x02\x02\x02\u013F\u013E\x03\x02\x02\x02\u0140\x05\x03\x02\x02\x02" +
		"\u0141\u0180\x05\b\x05\x02\u0142\u0180\x05\n\x06\x02\u0143\u0180\x05\x0E" +
		"\b\x02\u0144\u0180\x05\f\x07\x02\u0145\u0180\x05\x12\n\x02\u0146\u0180" +
		"\x05\x10\t\x02\u0147\u0180\x05\u0110\x89\x02\u0148\u0180\x05\x16\f\x02" +
		"\u0149\u0180\x05\x18\r\x02\u014A\u0180\x05F$\x02\u014B\u0180\x05N(\x02" +
		"\u014C\u0180\x05R*\x02\u014D\u0180\x05X-\x02\u014E\u0180\x05Z.\x02\u014F" +
		"\u0180\x05\\/\x02\u0150\u0180\x05^0\x02\u0151\u0180\x05`1\x02\u0152\u0180" +
		"\x05b2\x02\u0153\u0180\x05d3\x02\u0154\u0180\x05f4\x02\u0155\u0180\x05" +
		"h5\x02\u0156\u0180\x05j6\x02\u0157\u0180\x05l7\x02\u0158\u0180\x05p9\x02" +
		"\u0159\u0180\x05r:\x02\u015A\u0180\x05t;\x02\u015B\u0180\x05v<\x02\u015C" +
		"\u0180\x05\x86D\x02\u015D\u0180\x05x=\x02\u015E\u0180\x05z>\x02\u015F" +
		"\u0180\x05|?\x02\u0160\u0180\x05~@\x02\u0161\u0180\x05\x80A\x02\u0162" +
		"\u0180\x05\x82B\x02\u0163\u0180\x05\x84C\x02\u0164\u0180\x05\x88E\x02" +
		"\u0165\u0180\x05n8\x02\u0166\u0180\x05\x8AF\x02\u0167\u0180\x05\x8CG\x02" +
		"\u0168\u0180\x05\x9CO\x02\u0169\u0180\x05\x90I\x02\u016A\u0180\x05\x94" +
		"K\x02\u016B\u0180\x05\x96L\x02\u016C\u0180\x05\x98M\x02\u016D\u0180\x05" +
		"\x9AN\x02\u016E\u0180\x05\xFE\x80\x02\u016F\u0180\x05\x1A\x0E\x02\u0170" +
		"\u0180\x05\x1C\x0F\x02\u0171\u0180\x05\x1E\x10\x02\u0172\u0180\x05 \x11" +
		"\x02\u0173\u0180\x05\"\x12\x02\u0174\u0180\x05$\x13\x02\u0175\u0180\x05" +
		"&\x14\x02\u0176\u0180\x05(\x15\x02\u0177\u0180\x05*\x16\x02\u0178\u0180" +
		"\x05,\x17\x02\u0179\u0180\x05.\x18\x02\u017A\u0180\x050\x19\x02\u017B" +
		"\u0180\x052\x1A\x02\u017C\u0180\x054\x1B\x02\u017D\u0180\x056\x1C\x02" +
		"\u017E\u0180\x058\x1D\x02\u017F\u0141\x03\x02\x02\x02\u017F\u0142\x03" +
		"\x02\x02\x02\u017F\u0143\x03\x02\x02\x02\u017F\u0144\x03\x02\x02\x02\u017F" +
		"\u0145\x03\x02\x02\x02\u017F\u0146\x03\x02\x02\x02\u017F\u0147\x03\x02" +
		"\x02\x02\u017F\u0148\x03\x02\x02\x02\u017F\u0149\x03\x02\x02\x02\u017F" +
		"\u014A\x03\x02\x02\x02\u017F\u014B\x03\x02\x02\x02\u017F\u014C\x03\x02" +
		"\x02\x02\u017F\u014D\x03\x02\x02\x02\u017F\u014E\x03\x02\x02\x02\u017F" +
		"\u014F\x03\x02\x02\x02\u017F\u0150\x03\x02\x02\x02\u017F\u0151\x03\x02" +
		"\x02\x02\u017F\u0152\x03\x02\x02\x02\u017F\u0153\x03\x02\x02\x02\u017F" +
		"\u0154\x03\x02\x02\x02\u017F\u0155\x03\x02\x02\x02\u017F\u0156\x03\x02" +
		"\x02\x02\u017F\u0157\x03\x02\x02\x02\u017F\u0158\x03\x02\x02\x02\u017F" +
		"\u0159\x03\x02\x02\x02\u017F\u015A\x03\x02\x02\x02\u017F\u015B\x03\x02" +
		"\x02\x02\u017F\u015C\x03\x02\x02\x02\u017F\u015D\x03\x02\x02\x02\u017F" +
		"\u015E\x03\x02\x02\x02\u017F\u015F\x03\x02\x02\x02\u017F\u0160\x03\x02" +
		"\x02\x02\u017F\u0161\x03\x02\x02\x02\u017F\u0162\x03\x02\x02\x02\u017F" +
		"\u0163\x03\x02\x02\x02\u017F\u0164\x03\x02\x02\x02\u017F\u0165\x03\x02" +
		"\x02\x02\u017F\u0166\x03\x02\x02\x02\u017F\u0167\x03\x02\x02\x02\u017F" +
		"\u0168\x03\x02\x02\x02\u017F\u0169\x03\x02\x02\x02\u017F\u016A\x03\x02" +
		"\x02\x02\u017F\u016B\x03\x02\x02\x02\u017F\u016C\x03\x02\x02\x02\u017F" +
		"\u016D\x03\x02\x02\x02\u017F\u016E\x03\x02\x02\x02\u017F\u016F\x03\x02" +
		"\x02\x02\u017F\u0170\x03\x02\x02\x02\u017F\u0171\x03\x02\x02\x02\u017F" +
		"\u0172\x03\x02\x02\x02\u017F\u0173\x03\x02\x02\x02\u017F\u0174\x03\x02" +
		"\x02\x02\u017F\u0175\x03\x02\x02\x02\u017F\u0176\x03\x02\x02\x02\u017F" +
		"\u0177\x03\x02\x02\x02\u017F\u0178\x03\x02\x02\x02\u017F\u0179\x03\x02" +
		"\x02\x02\u017F\u017A\x03\x02\x02\x02\u017F\u017B\x03\x02\x02\x02\u017F" +
		"\u017C\x03\x02\x02\x02\u017F\u017D\x03\x02\x02\x02\u017F\u017E\x03\x02" +
		"\x02\x02\u0180\x07\x03\x02\x02\x02\u0181\u0183\x07\x05\x02\x02\u0182\u0184" +
		"\x05\xA2R\x02\u0183\u0182\x03\x02\x02\x02\u0183\u0184\x03\x02\x02\x02" +
		"\u0184\u0185\x03\x02\x02\x02\u0185\u018D\x07[\x02\x02\u0186\u0188\x07" +
		"p\x02\x02\u0187\u0186\x03\x02\x02\x02\u0188\u018B\x03\x02\x02\x02\u0189" +
		"\u0187\x03\x02\x02\x02\u0189\u018A\x03\x02\x02\x02\u018A\u018C\x03\x02" +
		"\x02\x02\u018B\u0189\x03\x02\x02\x02\u018C\u018E\x05:\x1E\x02\u018D\u0189" +
		"\x03\x02\x02\x02\u018E\u018F\x03\x02\x02\x02\u018F\u018D\x03\x02\x02\x02" +
		"\u018F\u0190\x03\x02\x02\x02\u0190\t\x03\x02\x02\x02\u0191\u0193\x07\x06" +
		"\x02\x02\u0192\u0194\x05\xA2R\x02\u0193\u0192\x03\x02\x02\x02\u0193\u0194" +
		"\x03\x02\x02\x02\u0194\u0195\x03\x02\x02\x02\u0195\u0199\x07[\x02\x02" +
		"\u0196\u0198\x07p\x02\x02\u0197\u0196\x03\x02\x02\x02\u0198\u019B\x03" +
		"\x02\x02\x02\u0199\u0197\x03\x02\x02\x02\u0199\u019A\x03\x02\x02\x02\u019A" +
		"\u019F\x03\x02\x02\x02\u019B\u0199\x03\x02\x02\x02\u019C\u019D\x05\u0110" +
		"\x89\x02\u019D\u019E\x07p\x02\x02\u019E\u01A0\x03\x02\x02\x02\u019F\u019C" +
		"\x03\x02\x02\x02\u019F\u01A0\x03\x02\x02\x02\u01A0\u01A1\x03\x02\x02\x02" +
		"\u01A1\u01AB\x05L\'\x02\u01A2\u01A4\x07p\x02\x02\u01A3\u01A2\x03\x02\x02" +
		"\x02\u01A4\u01A7\x03\x02\x02\x02\u01A5\u01A3\x03\x02\x02\x02\u01A5\u01A6" +
		"\x03\x02\x02\x02\u01A6\u01A8\x03\x02\x02\x02\u01A7\u01A5\x03\x02\x02\x02" +
		"\u01A8\u01AA\x05L\'\x02\u01A9\u01A5\x03\x02\x02\x02\u01AA\u01AD\x03\x02" +
		"\x02\x02\u01AB\u01A9\x03\x02\x02\x02\u01AB\u01AC\x03\x02\x02\x02\u01AC" +
		"\v\x03\x02\x02\x02\u01AD\u01AB\x03\x02\x02\x02\u01AE\u01B0\x07\x07\x02" +
		"\x02\u01AF\u01B1\x05\u0114\x8B\x02\u01B0\u01AF\x03\x02\x02\x02\u01B0\u01B1" +
		"\x03\x02\x02\x02\u01B1\u01B2\x03\x02\x02\x02\u01B2\u01B3\x07[\x02\x02" +
		"\u01B3\u01B7\x07p\x02\x02\u01B4\u01B5\x05\u010A\x86\x02\u01B5\u01B6\x07" +
		"p\x02\x02\u01B6\u01B8\x03\x02\x02\x02\u01B7\u01B4\x03\x02\x02\x02\u01B7" +
		"\u01B8\x03\x02\x02\x02\u01B8\r\x03\x02\x02\x02\u01B9\u01BA\x07\b\x02\x02" +
		"\u01BA\u01BE\x07[\x02\x02\u01BB\u01BD\x07p\x02\x02\u01BC\u01BB\x03\x02" +
		"\x02\x02\u01BD\u01C0\x03\x02\x02\x02\u01BE\u01BC\x03\x02\x02\x02\u01BE" +
		"\u01BF\x03\x02\x02\x02\u01BF\u01C1\x03\x02\x02\x02\u01C0\u01BE\x03\x02" +
		"\x02\x02\u01C1\u01C2\x05\x14\v\x02\u01C2\x0F\x03\x02\x02\x02\u01C3\u01C5" +
		"\t\x02\x02\x02\u01C4\u01C6\t\x03\x02\x02\u01C5\u01C4\x03\x02\x02\x02\u01C5" +
		"\u01C6\x03\x02\x02\x02\u01C6\u01C7\x03\x02\x02\x02\u01C7\u01D1\x07[\x02" +
		"\x02\u01C8\u01CA\x07p\x02\x02\u01C9\u01C8\x03\x02\x02\x02\u01CA\u01CD" +
		"\x03\x02\x02\x02\u01CB\u01C9\x03\x02\x02\x02\u01CB\u01CC\x03\x02\x02\x02" +
		"\u01CC\u01CE\x03\x02\x02\x02\u01CD\u01CB\x03\x02\x02\x02\u01CE\u01D0\x05" +
		":\x1E\x02\u01CF\u01CB\x03\x02\x02\x02\u01D0\u01D3\x03\x02\x02\x02\u01D1" +
		"\u01CF\x03\x02\x02\x02\u01D1\u01D2\x03\x02\x02\x02\u01D2\x11\x03\x02\x02" +
		"\x02\u01D3\u01D1\x03\x02\x02\x02\u01D4\u01D5\x07\v\x02\x02\u01D5\u01D6" +
		"\x07[\x02\x02\u01D6\u01D7\x05\xEEx\x02\u01D7\x13\x03\x02\x02\x02\u01D8" +
		"\u01DA\x07p\x02\x02\u01D9\u01D8\x03\x02\x02\x02\u01D9\u01DA\x03\x02\x02" +
		"\x02\u01DA\u01E2\x03\x02\x02\x02\u01DB\u01E3\x05\u0100\x81\x02\u01DC\u01E3" +
		"\x05\u010A\x86\x02\u01DD\u01E3\x05\xEAv\x02\u01DE\u01E3\x05\xFC\x7F\x02" +
		"\u01DF\u01E3\x05\xEEx\x02\u01E0\u01E3\x05\u0110\x89\x02\u01E1\u01E3\x05" +
		"\xF6|\x02\u01E2\u01DB\x03\x02\x02\x02\u01E2\u01DC\x03\x02\x02\x02\u01E2" +
		"\u01DD\x03\x02\x02\x02\u01E2\u01DE\x03\x02\x02\x02\u01E2\u01DF\x03\x02" +
		"\x02\x02\u01E2\u01E0\x03\x02\x02\x02\u01E2\u01E1\x03\x02\x02\x02\u01E3" +
		"\u01E5\x03\x02\x02\x02\u01E4\u01D9\x03\x02\x02\x02\u01E5\u01E8\x03\x02" +
		"\x02\x02\u01E6\u01E4\x03\x02\x02\x02\u01E6\u01E7\x03\x02\x02\x02\u01E7" +
		"\x15\x03\x02\x02\x02\u01E8\u01E6\x03\x02\x02\x02\u01E9\u01EA\x07\f\x02" +
		"\x02\u01EA\u01F4\x07[\x02\x02\u01EB\u01EC\x07p\x02\x02\u01EC\u01EF\t\x04" +
		"\x02\x02\u01ED\u01F0\x05\u0114\x8B\x02\u01EE\u01F0\x07\\\x02\x02\u01EF" +
		"\u01ED\x03\x02\x02\x02\u01EF\u01EE\x03\x02\x02\x02\u01F0\u01F1\x03\x02" +
		"\x02\x02\u01F1\u01EF\x03\x02\x02\x02\u01F1\u01F2\x03\x02\x02\x02\u01F2" +
		"\u01F3\x03\x02\x02\x02\u01F3\u01F5\x07[\x02\x02\u01F4\u01EB\x03\x02\x02" +
		"\x02\u01F5\u01F6\x03\x02\x02\x02\u01F6\u01F4\x03\x02\x02\x02\u01F6\u01F7" +
		"\x03\x02\x02\x02\u01F7\u01F8\x03\x02\x02\x02\u01F8\u01FC\x07p\x02\x02" +
		"\u01F9\u01FB\x05\u0112\x8A\x02\u01FA\u01F9\x03\x02\x02\x02\u01FB\u01FE" +
		"\x03\x02\x02\x02\u01FC\u01FA\x03\x02\x02\x02\u01FC\u01FD\x03\x02\x02\x02" +
		"\u01FD\x17\x03\x02\x02\x02\u01FE\u01FC\x03\x02\x02\x02\u01FF\u0200\x07" +
		"\r\x02\x02\u0200\u020A\x07[\x02\x02\u0201\u0202\x07p\x02\x02\u0202\u0205" +
		"\t\x04\x02\x02\u0203\u0206\x05\u0114\x8B\x02\u0204\u0206\x07\\\x02\x02" +
		"\u0205\u0203\x03\x02\x02\x02\u0205\u0204\x03\x02\x02\x02\u0206\u0207\x03" +
		"\x02\x02\x02\u0207\u0205\x03\x02\x02\x02\u0207\u0208\x03\x02\x02\x02\u0208" +
		"\u0209\x03\x02\x02\x02\u0209\u020B\x07[\x02\x02\u020A\u0201\x03\x02\x02" +
		"\x02\u020B\u020C\x03\x02\x02\x02\u020C\u020A\x03\x02\x02\x02\u020C\u020D" +
		"\x03\x02\x02\x02\u020D\u020E\x03\x02\x02\x02\u020E\u0212\x07p\x02\x02" +
		"\u020F\u0211\x05\u0112\x8A\x02\u0210\u020F\x03\x02\x02\x02\u0211\u0214" +
		"\x03\x02\x02\x02\u0212\u0210\x03\x02\x02\x02\u0212\u0213\x03\x02\x02\x02" +
		"\u0213\x19\x03\x02\x02\x02\u0214\u0212\x03\x02\x02\x02\u0215\u0216\x07" +
		"7\x02\x02\u0216\u0217\x05\xA2R\x02\u0217\u021B\x07[\x02\x02\u0218\u021A" +
		"\x07p\x02\x02\u0219\u0218\x03\x02\x02\x02\u021A\u021D\x03\x02\x02\x02" +
		"\u021B\u0219\x03\x02\x02\x02\u021B\u021C\x03\x02\x02\x02\u021C\u0225\x03" +
		"\x02\x02\x02\u021D\u021B\x03\x02\x02\x02\u021E\u0222\x05:\x1E\x02\u021F" +
		"\u0221\x07p\x02\x02\u0220\u021F\x03\x02\x02\x02\u0221\u0224\x03\x02\x02" +
		"\x02\u0222\u0220\x03\x02\x02\x02\u0222\u0223\x03\x02\x02\x02\u0223\u0226" +
		"\x03\x02\x02\x02\u0224\u0222\x03\x02\x02\x02\u0225\u021E\x03\x02\x02\x02" +
		"\u0226\u0227\x03\x02\x02\x02\u0227\u0225\x03\x02\x02\x02\u0227\u0228\x03" +
		"\x02\x02\x02\u0228\x1B\x03\x02\x02\x02\u0229\u022A\x078\x02\x02\u022A" +
		"\u022B\x05\xA2R\x02\u022B\u022F\x07[\x02\x02\u022C\u022E\x07p\x02\x02" +
		"\u022D\u022C\x03\x02\x02\x02\u022E\u0231\x03\x02\x02\x02\u022F\u022D\x03" +
		"\x02\x02\x02\u022F\u0230\x03\x02\x02\x02\u0230\u0239\x03\x02\x02\x02\u0231" +
		"\u022F\x03\x02\x02\x02\u0232\u0236\x05:\x1E\x02\u0233\u0235\x07p\x02\x02" +
		"\u0234\u0233\x03\x02\x02\x02\u0235\u0238\x03\x02\x02\x02\u0236\u0234\x03" +
		"\x02\x02\x02\u0236\u0237\x03\x02\x02\x02\u0237\u023A\x03\x02\x02\x02\u0238" +
		"\u0236\x03\x02\x02\x02\u0239\u0232\x03\x02\x02\x02\u023A\u023B\x03\x02" +
		"\x02\x02\u023B\u0239\x03\x02\x02\x02\u023B\u023C\x03\x02\x02\x02\u023C" +
		"\x1D\x03\x02\x02\x02\u023D\u023E\x079\x02\x02\u023E\u023F\x05\xA2R\x02" +
		"\u023F\u0243\x07[\x02\x02\u0240\u0242\x07p\x02\x02\u0241\u0240\x03\x02" +
		"\x02\x02\u0242\u0245\x03\x02\x02\x02\u0243\u0241\x03\x02\x02\x02\u0243" +
		"\u0244\x03\x02\x02\x02\u0244\u024D\x03\x02\x02\x02\u0245\u0243\x03\x02" +
		"\x02\x02\u0246\u024A\x05:\x1E\x02\u0247\u0249\x07p\x02\x02\u0248\u0247" +
		"\x03\x02\x02\x02\u0249\u024C\x03\x02\x02\x02\u024A\u0248\x03\x02\x02\x02" +
		"\u024A\u024B\x03\x02\x02\x02\u024B\u024E\x03\x02\x02\x02\u024C\u024A\x03" +
		"\x02\x02\x02";
	private static readonly _serializedATNSegment2: string =
		"\u024D\u0246\x03\x02\x02\x02\u024E\u024F\x03\x02\x02\x02\u024F\u024D\x03" +
		"\x02\x02\x02\u024F\u0250\x03\x02\x02\x02\u0250\x1F\x03\x02\x02\x02\u0251" +
		"\u0252\x07:\x02\x02\u0252\u0253\x05\xA2R\x02\u0253\u0257\x07[\x02\x02" +
		"\u0254\u0256\x07p\x02\x02\u0255\u0254\x03\x02\x02\x02\u0256\u0259\x03" +
		"\x02\x02\x02\u0257\u0255\x03\x02\x02\x02\u0257\u0258\x03\x02\x02\x02\u0258" +
		"\u0261\x03\x02\x02\x02\u0259\u0257\x03\x02\x02\x02\u025A\u025E\x05:\x1E" +
		"\x02\u025B\u025D\x07p\x02\x02\u025C\u025B\x03\x02\x02\x02\u025D\u0260" +
		"\x03\x02\x02\x02\u025E\u025C\x03\x02\x02\x02\u025E\u025F\x03\x02\x02\x02" +
		"\u025F\u0262\x03\x02\x02\x02\u0260\u025E\x03\x02\x02\x02\u0261\u025A\x03" +
		"\x02\x02\x02\u0262\u0263\x03\x02\x02\x02\u0263\u0261\x03\x02\x02\x02\u0263" +
		"\u0264\x03\x02\x02\x02\u0264!\x03\x02\x02\x02\u0265\u0266\x07;\x02\x02" +
		"\u0266\u0267\x05\xA2R\x02\u0267\u026B\x07[\x02\x02\u0268\u026A\x07p\x02" +
		"\x02\u0269\u0268\x03\x02\x02\x02\u026A\u026D\x03\x02\x02\x02\u026B\u0269" +
		"\x03\x02\x02\x02\u026B\u026C\x03\x02\x02\x02\u026C\u0275\x03\x02\x02\x02" +
		"\u026D\u026B\x03\x02\x02\x02\u026E\u0272\x05:\x1E\x02\u026F\u0271\x07" +
		"p\x02\x02\u0270\u026F\x03\x02\x02\x02\u0271\u0274\x03\x02\x02\x02\u0272" +
		"\u0270\x03\x02\x02\x02\u0272\u0273\x03\x02\x02\x02\u0273\u0276\x03\x02" +
		"\x02\x02\u0274\u0272\x03\x02\x02\x02\u0275\u026E\x03\x02\x02\x02\u0276" +
		"\u0277\x03\x02\x02\x02\u0277\u0275\x03\x02\x02\x02\u0277\u0278\x03\x02" +
		"\x02\x02\u0278#\x03\x02\x02\x02\u0279\u027A\x07<\x02\x02\u027A\u027B\x05" +
		"\xA2R\x02\u027B\u027F\x07[\x02\x02\u027C\u027E\x07p\x02\x02\u027D\u027C" +
		"\x03\x02\x02\x02\u027E\u0281\x03\x02\x02\x02\u027F\u027D\x03\x02\x02\x02" +
		"\u027F\u0280\x03\x02\x02\x02\u0280\u0289\x03\x02\x02\x02\u0281\u027F\x03" +
		"\x02\x02\x02\u0282\u0286\x05:\x1E\x02\u0283\u0285\x07p\x02\x02\u0284\u0283" +
		"\x03\x02\x02\x02\u0285\u0288\x03\x02\x02\x02\u0286\u0284\x03\x02\x02\x02" +
		"\u0286\u0287\x03\x02\x02\x02\u0287\u028A\x03\x02\x02\x02\u0288\u0286\x03" +
		"\x02\x02\x02\u0289\u0282\x03\x02\x02\x02\u028A\u028B\x03\x02\x02\x02\u028B" +
		"\u0289\x03\x02\x02\x02\u028B\u028C\x03\x02\x02\x02\u028C%\x03\x02\x02" +
		"\x02\u028D\u028E\x07=\x02\x02\u028E\u028F\x05\xA2R\x02\u028F\u0293\x07" +
		"[\x02\x02\u0290\u0292\x07p\x02\x02\u0291\u0290\x03\x02\x02\x02\u0292\u0295" +
		"\x03\x02\x02\x02\u0293\u0291\x03\x02\x02\x02\u0293\u0294\x03\x02\x02\x02" +
		"\u0294\u029D\x03\x02\x02\x02\u0295\u0293\x03\x02\x02\x02\u0296\u029A\x05" +
		":\x1E\x02\u0297\u0299\x07p\x02\x02\u0298\u0297\x03\x02\x02\x02\u0299\u029C" +
		"\x03\x02\x02\x02\u029A\u0298\x03\x02\x02\x02\u029A\u029B\x03\x02\x02\x02" +
		"\u029B\u029E\x03\x02\x02\x02\u029C\u029A\x03\x02\x02\x02\u029D\u0296\x03" +
		"\x02\x02\x02\u029E\u029F\x03\x02\x02\x02\u029F\u029D\x03\x02\x02\x02\u029F" +
		"\u02A0\x03\x02\x02\x02\u02A0\'\x03\x02\x02\x02\u02A1\u02A2\x07>\x02\x02" +
		"\u02A2\u02A3\x05\xA2R\x02\u02A3\u02A7\x07[\x02\x02\u02A4\u02A6\x07p\x02" +
		"\x02\u02A5\u02A4\x03\x02\x02\x02\u02A6\u02A9\x03\x02\x02\x02\u02A7\u02A5" +
		"\x03\x02\x02\x02\u02A7\u02A8\x03\x02\x02\x02\u02A8\u02B1\x03\x02\x02\x02" +
		"\u02A9\u02A7\x03\x02\x02\x02\u02AA\u02AE\x05:\x1E\x02\u02AB\u02AD\x07" +
		"p\x02\x02\u02AC\u02AB\x03\x02\x02\x02\u02AD\u02B0\x03\x02\x02\x02\u02AE" +
		"\u02AC\x03\x02\x02\x02\u02AE\u02AF\x03\x02\x02\x02\u02AF\u02B2\x03\x02" +
		"\x02\x02\u02B0\u02AE\x03\x02\x02\x02\u02B1\u02AA\x03\x02\x02\x02\u02B2" +
		"\u02B3\x03\x02\x02\x02\u02B3\u02B1\x03\x02\x02\x02\u02B3\u02B4\x03\x02" +
		"\x02\x02\u02B4)\x03\x02\x02\x02\u02B5\u02B6\x07?\x02\x02\u02B6\u02B7\x05" +
		"\xA2R\x02\u02B7\u02BB\x07[\x02\x02\u02B8\u02BA\x07p\x02\x02\u02B9\u02B8" +
		"\x03\x02\x02\x02\u02BA\u02BD\x03\x02\x02\x02\u02BB\u02B9\x03\x02\x02\x02" +
		"\u02BB\u02BC\x03\x02\x02\x02\u02BC\u02C5\x03\x02\x02\x02\u02BD\u02BB\x03" +
		"\x02\x02\x02\u02BE\u02C2\x05:\x1E\x02\u02BF\u02C1\x07p\x02\x02\u02C0\u02BF" +
		"\x03\x02\x02\x02\u02C1\u02C4\x03\x02\x02\x02\u02C2\u02C0\x03\x02\x02\x02" +
		"\u02C2\u02C3\x03\x02\x02\x02\u02C3\u02C6\x03\x02\x02\x02\u02C4\u02C2\x03" +
		"\x02\x02\x02\u02C5\u02BE\x03\x02\x02\x02\u02C6\u02C7\x03\x02\x02\x02\u02C7" +
		"\u02C5\x03\x02\x02\x02\u02C7\u02C8\x03\x02\x02\x02\u02C8+\x03\x02\x02" +
		"\x02\u02C9\u02CA\x07@\x02\x02\u02CA\u02CB\x05\xA2R\x02\u02CB\u02CF\x07" +
		"[\x02\x02\u02CC\u02CE\x07p\x02\x02\u02CD\u02CC\x03\x02\x02\x02\u02CE\u02D1" +
		"\x03\x02\x02\x02\u02CF\u02CD\x03\x02\x02\x02\u02CF\u02D0\x03\x02\x02\x02" +
		"\u02D0\u02D9\x03\x02\x02\x02\u02D1\u02CF\x03\x02\x02\x02\u02D2\u02D6\x05" +
		":\x1E\x02\u02D3\u02D5\x07p\x02\x02\u02D4\u02D3\x03\x02\x02\x02\u02D5\u02D8" +
		"\x03\x02\x02\x02\u02D6\u02D4\x03\x02\x02\x02\u02D6\u02D7\x03\x02\x02\x02" +
		"\u02D7\u02DA\x03\x02\x02\x02\u02D8\u02D6\x03\x02\x02\x02\u02D9\u02D2\x03" +
		"\x02\x02\x02\u02DA\u02DB\x03\x02\x02\x02\u02DB\u02D9\x03\x02\x02\x02\u02DB" +
		"\u02DC\x03\x02\x02\x02\u02DC-\x03\x02\x02\x02\u02DD\u02DE\x07A\x02\x02" +
		"\u02DE\u02DF\x05\xA2R\x02\u02DF\u02E3\x07[\x02\x02\u02E0\u02E2\x07p\x02" +
		"\x02\u02E1\u02E0\x03\x02\x02\x02\u02E2\u02E5\x03\x02\x02\x02\u02E3\u02E1" +
		"\x03\x02\x02\x02\u02E3\u02E4\x03\x02\x02\x02\u02E4\u02ED\x03\x02\x02\x02" +
		"\u02E5\u02E3\x03\x02\x02\x02\u02E6\u02EA\x05:\x1E\x02\u02E7\u02E9\x07" +
		"p\x02\x02\u02E8\u02E7\x03\x02\x02\x02\u02E9\u02EC\x03\x02\x02\x02\u02EA" +
		"\u02E8\x03\x02\x02\x02\u02EA\u02EB\x03\x02\x02\x02\u02EB\u02EE\x03\x02" +
		"\x02\x02\u02EC\u02EA\x03\x02\x02\x02\u02ED\u02E6\x03\x02\x02\x02\u02EE" +
		"\u02EF\x03\x02\x02\x02\u02EF\u02ED\x03\x02\x02\x02\u02EF\u02F0\x03\x02" +
		"\x02\x02\u02F0/\x03\x02\x02\x02\u02F1\u02F2\x07B\x02\x02\u02F2\u02F3\x05" +
		"\xA2R\x02\u02F3\u02F7\x07[\x02\x02\u02F4\u02F6\x07p\x02\x02\u02F5\u02F4" +
		"\x03\x02\x02\x02\u02F6\u02F9\x03\x02\x02\x02\u02F7\u02F5\x03\x02\x02\x02" +
		"\u02F7\u02F8\x03\x02\x02\x02\u02F8\u0301\x03\x02\x02\x02\u02F9\u02F7\x03" +
		"\x02\x02\x02\u02FA\u02FE\x05:\x1E\x02\u02FB\u02FD\x07p\x02\x02\u02FC\u02FB" +
		"\x03\x02\x02\x02\u02FD\u0300\x03\x02\x02\x02\u02FE\u02FC\x03\x02\x02\x02" +
		"\u02FE\u02FF\x03\x02\x02\x02\u02FF\u0302\x03\x02\x02\x02\u0300\u02FE\x03" +
		"\x02\x02\x02\u0301\u02FA\x03\x02\x02\x02\u0302\u0303\x03\x02\x02\x02\u0303" +
		"\u0301\x03\x02\x02\x02\u0303\u0304\x03\x02\x02\x02\u03041\x03\x02\x02" +
		"\x02\u0305\u0306\x07C\x02\x02\u0306\u0307\x05\xA2R\x02\u0307\u030B\x07" +
		"[\x02\x02\u0308\u030A\x07p\x02\x02\u0309\u0308\x03\x02\x02\x02\u030A\u030D" +
		"\x03\x02\x02\x02\u030B\u0309\x03\x02\x02\x02\u030B\u030C\x03\x02\x02\x02" +
		"\u030C\u0315\x03\x02\x02\x02\u030D\u030B\x03\x02\x02\x02\u030E\u0312\x05" +
		":\x1E\x02\u030F\u0311\x07p\x02\x02\u0310\u030F\x03\x02\x02\x02\u0311\u0314" +
		"\x03\x02\x02\x02\u0312\u0310\x03\x02\x02\x02\u0312\u0313\x03\x02\x02\x02" +
		"\u0313\u0316\x03\x02\x02\x02\u0314\u0312\x03\x02\x02\x02\u0315\u030E\x03" +
		"\x02\x02\x02\u0316\u0317\x03\x02\x02\x02\u0317\u0315\x03\x02\x02\x02\u0317" +
		"\u0318\x03\x02\x02\x02\u03183\x03\x02\x02\x02\u0319\u031A\x07D\x02\x02" +
		"\u031A\u031B\x05\xA2R\x02\u031B\u031F\x07[\x02\x02\u031C\u031E\x07p\x02" +
		"\x02\u031D\u031C\x03\x02\x02\x02\u031E\u0321\x03\x02\x02\x02\u031F\u031D" +
		"\x03\x02\x02\x02\u031F\u0320\x03\x02\x02\x02\u0320\u0329\x03\x02\x02\x02" +
		"\u0321\u031F\x03\x02\x02\x02\u0322\u0326\x05:\x1E\x02\u0323\u0325\x07" +
		"p\x02\x02\u0324\u0323\x03\x02\x02\x02\u0325\u0328\x03\x02\x02\x02\u0326" +
		"\u0324\x03\x02\x02\x02\u0326\u0327\x03\x02\x02\x02\u0327\u032A\x03\x02" +
		"\x02\x02\u0328\u0326\x03\x02\x02\x02\u0329\u0322\x03\x02\x02\x02\u032A" +
		"\u032B\x03\x02\x02\x02\u032B\u0329\x03\x02\x02\x02\u032B\u032C\x03\x02" +
		"\x02\x02\u032C5\x03\x02\x02\x02\u032D\u032E\x07E\x02\x02\u032E\u032F\x05" +
		"\xA2R\x02\u032F\u0333\x07[\x02\x02\u0330\u0332\x07p\x02\x02\u0331\u0330" +
		"\x03\x02\x02\x02\u0332\u0335\x03\x02\x02\x02\u0333\u0331\x03\x02\x02\x02" +
		"\u0333\u0334\x03\x02\x02\x02\u0334\u033D\x03\x02\x02\x02\u0335\u0333\x03" +
		"\x02\x02\x02\u0336\u033A\x05:\x1E\x02\u0337\u0339\x07p\x02\x02\u0338\u0337" +
		"\x03\x02\x02\x02\u0339\u033C\x03\x02\x02\x02\u033A\u0338\x03\x02\x02\x02" +
		"\u033A\u033B\x03\x02\x02\x02\u033B\u033E\x03\x02\x02\x02\u033C\u033A\x03" +
		"\x02\x02\x02\u033D\u0336\x03\x02\x02\x02\u033E\u033F\x03\x02\x02\x02\u033F" +
		"\u033D\x03\x02\x02\x02\u033F\u0340\x03\x02\x02\x02\u03407\x03\x02\x02" +
		"\x02\u0341\u0342\x07F\x02\x02\u0342\u0343\x05\xA2R\x02\u0343\u0347\x07" +
		"[\x02\x02\u0344\u0346\x07p\x02\x02\u0345\u0344\x03\x02\x02\x02\u0346\u0349" +
		"\x03\x02\x02\x02\u0347\u0345\x03\x02\x02\x02\u0347\u0348\x03\x02\x02\x02" +
		"\u0348\u0351\x03\x02\x02\x02\u0349\u0347\x03\x02\x02\x02\u034A\u034E\x05" +
		":\x1E\x02\u034B\u034D\x07p\x02\x02\u034C\u034B\x03\x02\x02\x02\u034D\u0350" +
		"\x03\x02\x02\x02\u034E\u034C\x03\x02\x02\x02\u034E\u034F\x03\x02\x02\x02" +
		"\u034F\u0352\x03\x02\x02\x02\u0350\u034E\x03\x02\x02\x02\u0351\u034A\x03" +
		"\x02\x02\x02\u0352\u0353\x03\x02\x02\x02\u0353\u0351\x03\x02\x02\x02\u0353" +
		"\u0354\x03\x02\x02\x02\u03549\x03\x02\x02\x02\u0355\u0375\x07\xC8\x02" +
		"\x02\u0356\u0375\x05\u0116\x8C\x02\u0357\u0375\x05<\x1F\x02\u0358\u0375" +
		"\x05\xF4{\x02\u0359\u0375\x05\xF8}\x02\u035A\u0375\x05\xF6|\x02\u035B" +
		"\u0375\x05\u010A\x86\x02\u035C\u0375\x05\u010E\x88\x02\u035D\u0375\x05" +
		"J&\x02\u035E\u0375\x05\xEAv\x02\u035F\u0375\x05\u0100\x81\x02\u0360\u0375" +
		"\x05\xFC\x7F\x02\u0361\u0375\x05\xFE\x80\x02\u0362\u0375\x05\u0114\x8B" +
		"\x02\u0363\u0375\x05\xF0y\x02\u0364\u0375\x05\u0102\x82\x02\u0365\u0375" +
		"\x05\u0104\x83\x02\u0366\u0375\x05\u0106\x84\x02\u0367\u0375\x05\u0108" +
		"\x85\x02\u0368\u0375\x05\xD2j\x02\u0369\u0375\x05\xDCo\x02\u036A\u0375" +
		"\x05\xCEh\x02\u036B\u0375\x05\xC2b\x02\u036C\u0375\x05\xC4c\x02\u036D" +
		"\u0375\x05\xC8e\x02\u036E\u0375\x05\xC6d\x02\u036F\u0375\x05\xCAf\x02" +
		"\u0370\u0375\x05\xEEx\x02\u0371\u0375\x05\u0110\x89\x02\u0372\u0375\x05" +
		"\xF2z\x02\u0373\u0375\x05\u0120\x91\x02\u0374\u0355\x03\x02\x02\x02\u0374" +
		"\u0356\x03\x02\x02\x02\u0374\u0357\x03\x02\x02\x02\u0374\u0358\x03\x02" +
		"\x02\x02\u0374\u0359\x03\x02\x02\x02\u0374\u035A\x03\x02\x02\x02\u0374" +
		"\u035B\x03\x02\x02\x02\u0374\u035C\x03\x02\x02\x02\u0374\u035D\x03\x02" +
		"\x02\x02\u0374\u035E\x03\x02\x02\x02\u0374\u035F\x03\x02\x02\x02\u0374" +
		"\u0360\x03\x02\x02\x02\u0374\u0361\x03\x02\x02\x02\u0374\u0362\x03\x02" +
		"\x02\x02\u0374\u0363\x03\x02\x02\x02\u0374\u0364\x03\x02\x02\x02\u0374" +
		"\u0365\x03\x02\x02\x02\u0374\u0366\x03\x02\x02\x02\u0374\u0367\x03\x02" +
		"\x02\x02\u0374\u0368\x03\x02\x02\x02\u0374\u0369\x03\x02\x02\x02\u0374" +
		"\u036A\x03\x02\x02\x02\u0374\u036B\x03\x02\x02\x02\u0374\u036C\x03\x02" +
		"\x02\x02\u0374\u036D\x03\x02\x02\x02\u0374\u036E\x03\x02\x02\x02\u0374" +
		"\u036F\x03\x02\x02\x02\u0374\u0370\x03\x02\x02\x02\u0374\u0371\x03\x02" +
		"\x02\x02\u0374\u0372\x03\x02\x02\x02\u0374\u0373\x03\x02\x02\x02\u0375" +
		";\x03\x02\x02\x02\u0376\u037E\x05> \x02\u0377\u037D\x05> \x02\u0378\u037D" +
		"\x05\xFC\x7F\x02\u0379\u037D\x05\xFE\x80\x02\u037A\u037D\x05\xEAv\x02" +
		"\u037B\u037D\x05\xF0y\x02\u037C\u0377\x03\x02\x02\x02\u037C\u0378\x03" +
		"\x02\x02\x02\u037C\u0379\x03\x02\x02\x02\u037C\u037A\x03\x02\x02\x02\u037C" +
		"\u037B\x03\x02\x02\x02\u037D\u0380\x03\x02\x02\x02\u037E\u037C\x03\x02" +
		"\x02\x02\u037E\u037F\x03\x02\x02\x02\u037F=\x03\x02\x02\x02\u0380\u037E" +
		"\x03\x02\x02\x02\u0381\u0385\x07Q\x02\x02\u0382\u0386\x07n\x02\x02\u0383" +
		"\u0386\x07o\x02\x02\u0384\u0386\x03\x02\x02\x02\u0385\u0382\x03\x02\x02" +
		"\x02\u0385\u0383\x03\x02\x02\x02\u0385\u0384\x03\x02\x02\x02\u0386\u038A" +
		"\x03\x02\x02\x02\u0387\u0389\x05\u0114\x8B\x02\u0388\u0387\x03\x02\x02" +
		"\x02\u0389\u038C\x03\x02\x02\x02\u038A\u0388\x03\x02\x02\x02\u038A\u038B" +
		"\x03\x02\x02\x02\u038B\u038D\x03\x02\x02\x02\u038C\u038A\x03\x02\x02\x02" +
		"\u038D\u038E\x05\u011A\x8E\x02\u038E?\x03\x02\x02\x02\u038F\u0391\x05" +
		"\xEAv\x02\u0390\u038F\x03\x02\x02\x02\u0390\u0391\x03\x02\x02\x02\u0391" +
		"\u0392\x03\x02\x02\x02\u0392\u0394\x07U\x02\x02\u0393\u0395\x05\u0114" +
		"\x8B\x02\u0394\u0393\x03\x02\x02\x02\u0395\u0396\x03\x02\x02\x02\u0396" +
		"\u0394\x03\x02\x02\x02\u0396\u0397\x03\x02\x02\x02\u0397\u0398\x03\x02" +
		"\x02\x02\u0398\u0399\x07[\x02\x02\u0399A\x03\x02\x02\x02\u039A\u039C\x05" +
		"\xEAv\x02\u039B\u039A\x03\x02\x02\x02\u039B\u039C\x03\x02\x02\x02\u039C" +
		"\u039D\x03\x02\x02\x02\u039D\u039F\x07V\x02\x02\u039E\u03A0\x05\u0114" +
		"\x8B\x02\u039F\u039E\x03\x02\x02\x02\u03A0\u03A1\x03\x02\x02\x02\u03A1" +
		"\u039F\x03\x02\x02\x02\u03A1\u03A2\x03\x02\x02\x02\u03A2\u03A3\x03\x02" +
		"\x02\x02\u03A3\u03A4\x07[\x02\x02\u03A4C\x03\x02\x02\x02\u03A5\u03A7\x05" +
		"\xEAv\x02\u03A6\u03A5\x03\x02\x02\x02\u03A6\u03A7\x03\x02\x02\x02\u03A7" +
		"\u03A8\x03\x02\x02\x02\u03A8\u03AA\x07X\x02\x02\u03A9\u03AB\x05\u0114" +
		"\x8B\x02\u03AA\u03A9\x03\x02\x02\x02\u03AB\u03AC\x03\x02\x02\x02\u03AC" +
		"\u03AA\x03\x02\x02\x02\u03AC\u03AD\x03\x02\x02\x02\u03AD\u03AE\x03\x02" +
		"\x02\x02\u03AE\u03AF\x07[\x02\x02\u03AFE\x03\x02\x02\x02\u03B0\u03B1\x07" +
		"\x15\x02\x02\u03B1\u03B2\x05\xA2R\x02\u03B2\u03B3\x07[\x02\x02\u03B3\u03BD" +
		"\x07p\x02\x02\u03B4\u03B8\x05:\x1E\x02\u03B5\u03B7\x07p\x02\x02\u03B6" +
		"\u03B5\x03\x02\x02\x02\u03B7\u03BA\x03\x02\x02\x02\u03B8\u03B6\x03\x02" +
		"\x02\x02\u03B8\u03B9\x03\x02\x02\x02\u03B9\u03BC\x03\x02\x02\x02\u03BA" +
		"\u03B8\x03\x02\x02\x02\u03BB\u03B4\x03\x02\x02\x02\u03BC\u03BF\x03\x02" +
		"\x02\x02\u03BD\u03BB\x03\x02\x02\x02\u03BD\u03BE\x03\x02\x02\x02\u03BE" +
		"\u03C9\x03\x02\x02\x02\u03BF\u03BD\x03\x02\x02\x02\u03C0\u03C2\x07p\x02" +
		"\x02\u03C1\u03C0\x03\x02\x02\x02\u03C2\u03C5\x03\x02\x02\x02\u03C3\u03C1" +
		"\x03\x02\x02\x02\u03C3\u03C4\x03\x02\x02\x02\u03C4\u03C6\x03\x02\x02\x02" +
		"\u03C5\u03C3\x03\x02\x02\x02\u03C6\u03C8\x05H%\x02\u03C7\u03C3\x03\x02" +
		"\x02\x02\u03C8\u03CB\x03\x02\x02\x02\u03C9\u03C7\x03\x02\x02\x02\u03C9" +
		"\u03CA\x03\x02\x02\x02\u03CA\u03CF\x03\x02\x02\x02\u03CB\u03C9\x03\x02" +
		"\x02\x02\u03CC\u03CE\x07p\x02\x02\u03CD\u03CC\x03\x02\x02\x02\u03CE\u03D1" +
		"\x03\x02\x02\x02\u03CF\u03CD\x03\x02\x02\x02\u03CF\u03D0\x03\x02\x02\x02" +
		"\u03D0\u03DF\x03\x02\x02\x02\u03D1\u03CF\x03\x02\x02\x02\u03D2\u03DC\x05" +
		"L\'\x02\u03D3\u03D5\x07p\x02\x02\u03D4\u03D3\x03\x02\x02\x02\u03D5\u03D8" +
		"\x03\x02\x02\x02\u03D6\u03D4\x03\x02\x02\x02\u03D6\u03D7\x03\x02\x02\x02" +
		"\u03D7\u03D9\x03\x02\x02\x02\u03D8\u03D6\x03\x02\x02\x02\u03D9\u03DB\x05" +
		"L\'\x02\u03DA\u03D6\x03\x02\x02\x02\u03DB\u03DE\x03\x02\x02\x02\u03DC" +
		"\u03DA\x03\x02\x02\x02\u03DC\u03DD\x03\x02\x02\x02\u03DD\u03E0\x03\x02" +
		"\x02\x02\u03DE\u03DC\x03\x02\x02\x02\u03DF\u03D2\x03\x02\x02\x02\u03DF" +
		"\u03E0\x03\x02\x02\x02\u03E0G\x03\x02\x02\x02\u03E1\u03E9\x07{\x02\x02" +
		"\u03E2\u03E4\x07p\x02\x02\u03E3\u03E2\x03\x02\x02\x02\u03E3\u03E4\x03" +
		"\x02\x02\x02\u03E4\u03E5\x03\x02\x02\x02\u03E5\u03E7\x05\u0112\x8A\x02" +
		"\u03E6\u03E8\x07p\x02\x02\u03E7\u03E6\x03\x02\x02\x02\u03E7\u03E8\x03" +
		"\x02\x02\x02\u03E8\u03EA\x03\x02\x02\x02\u03E9\u03E3\x03\x02\x02\x02\u03E9" +
		"\u03EA\x03\x02\x02\x02\u03EA\u03EB\x03\x02\x02\x02\u03EB\u03EC\x07[\x02" +
		"\x02\u03ECI\x03\x02\x02\x02\u03ED\u03EE\t\x05\x02\x02\u03EEK\x03\x02\x02" +
		"\x02\u03EF\u03F0\x05:\x1E\x02\u03F0M\x03\x02\x02\x02\u03F1\u03F2\x07\x17" +
		"\x02\x02\u03F2\u03F3\x05\xA2R\x02\u03F3\u03F4\x07[\x02\x02\u03F4\u03FE" +
		"\x07p\x02\x02\u03F5\u03F9\x05:\x1E\x02\u03F6\u03F8\x07p\x02\x02\u03F7" +
		"\u03F6\x03\x02\x02\x02\u03F8\u03FB\x03\x02\x02\x02\u03F9\u03F7\x03\x02" +
		"\x02\x02\u03F9\u03FA\x03\x02\x02\x02\u03FA\u03FD\x03\x02\x02\x02\u03FB" +
		"\u03F9\x03\x02\x02\x02\u03FC\u03F5\x03\x02\x02\x02\u03FD\u0400\x03\x02" +
		"\x02\x02\u03FE\u03FC\x03\x02\x02\x02\u03FE\u03FF\x03\x02\x02\x02\u03FF" +
		"\u0404\x03\x02\x02\x02\u0400\u03FE\x03\x02\x02\x02\u0401\u0403\x05P)\x02" +
		"\u0402\u0401\x03\x02\x02\x02\u0403\u0406\x03\x02\x02\x02\u0404\u0402\x03" +
		"\x02\x02\x02\u0404\u0405\x03\x02\x02\x02\u0405\u040A\x03\x02\x02\x02\u0406" +
		"\u0404\x03\x02\x02\x02\u0407\u0409\x07p\x02\x02\u0408\u0407\x03\x02\x02" +
		"\x02\u0409\u040C\x03\x02\x02\x02\u040A\u0408\x03\x02\x02\x02\u040A\u040B" +
		"\x03\x02\x02\x02\u040B\u041A\x03\x02\x02\x02\u040C\u040A\x03\x02\x02\x02" +
		"\u040D\u0417\x05L\'\x02\u040E\u0410\x07p\x02\x02\u040F\u040E\x03\x02\x02" +
		"\x02\u0410\u0413\x03\x02\x02\x02\u0411\u040F\x03\x02\x02\x02\u0411\u0412" +
		"\x03\x02\x02\x02\u0412\u0414\x03\x02\x02\x02\u0413\u0411\x03\x02\x02\x02" +
		"\u0414\u0416\x05L\'\x02\u0415\u0411\x03\x02\x02\x02\u0416\u0419\x03\x02" +
		"\x02\x02\u0417\u0415\x03\x02\x02\x02\u0417\u0418\x03\x02\x02\x02\u0418" +
		"\u041B\x03\x02\x02\x02\u0419\u0417\x03\x02\x02\x02\u041A\u040D\x03\x02" +
		"\x02\x02\u041A\u041B\x03\x02\x02\x02\u041BO\x03\x02\x02\x02\u041C\u0420" +
		"\x07V\x02\x02\u041D\u041F\v\x02\x02\x02\u041E\u041D\x03\x02\x02\x02\u041F" +
		"\u0422\x03\x02\x02\x02\u0420\u0421\x03\x02\x02\x02\u0420\u041E\x03\x02" +
		"\x02\x02\u0421\u0423\x03\x02\x02\x02\u0422\u0420\x03\x02\x02\x02\u0423" +
		"\u0424\x07[\x02\x02\u0424\u042F\x07p\x02\x02\u0425\u0429\x07U\x02\x02" +
		"\u0426\u0428\v\x02\x02\x02\u0427\u0426\x03\x02\x02\x02\u0428\u042B\x03" +
		"\x02\x02\x02\u0429\u042A\x03\x02\x02\x02\u0429\u0427\x03\x02\x02\x02\u042A" +
		"\u042C\x03\x02\x02\x02\u042B\u0429\x03\x02\x02\x02\u042C\u042D\x07[\x02" +
		"\x02\u042D\u042F\x07p\x02\x02\u042E\u041C\x03\x02\x02\x02\u042E\u0425" +
		"\x03\x02\x02\x02\u042FQ\x03\x02\x02\x02\u0430\u0431\x07\x18\x02\x02\u0431" +
		"\u0432\x05\xA2R\x02\u0432\u0433\x07[\x02\x02\u0433\u0440\x07p\x02\x02" +
		"\u0434\u0437\x05:\x1E\x02\u0435\u0437\x05T+\x02\u0436\u0434\x03\x02\x02" +
		"\x02\u0436\u0435\x03\x02\x02\x02\u0437\u043B\x03\x02\x02\x02\u0438\u043A" +
		"\x07p\x02\x02\u0439\u0438\x03\x02\x02\x02\u043A\u043D\x03\x02\x02\x02" +
		"\u043B\u0439\x03\x02\x02\x02\u043B\u043C\x03\x02\x02\x02\u043C\u043F\x03" +
		"\x02\x02\x02\u043D\u043B\x03\x02\x02\x02\u043E\u0436\x03\x02\x02\x02\u043F" +
		"\u0442\x03\x02\x02\x02\u0440\u043E\x03\x02\x02\x02\u0440\u0441\x03\x02" +
		"\x02\x02\u0441\u0446\x03\x02\x02\x02\u0442\u0440\x03\x02\x02\x02\u0443" +
		"\u0445\x07p\x02\x02\u0444\u0443\x03\x02\x02\x02\u0445\u0448\x03\x02\x02" +
		"\x02\u0446\u0444\x03\x02\x02\x02\u0446\u0447\x03\x02\x02\x02\u0447\u0456" +
		"\x03\x02\x02\x02\u0448\u0446\x03\x02\x02\x02\u0449\u0453\x05L\'\x02\u044A" +
		"\u044C\x07p\x02\x02\u044B\u044A\x03\x02\x02\x02\u044C\u044F\x03\x02\x02" +
		"\x02\u044D\u044B\x03\x02\x02\x02\u044D\u044E\x03\x02\x02\x02\u044E\u0450" +
		"\x03\x02\x02\x02\u044F\u044D\x03\x02\x02\x02\u0450\u0452\x05L\'\x02\u0451" +
		"\u044D\x03\x02\x02\x02\u0452\u0455\x03\x02\x02\x02\u0453\u0451\x03\x02" +
		"\x02\x02\u0453\u0454\x03\x02\x02\x02\u0454\u0457\x03\x02\x02\x02\u0455" +
		"\u0453\x03\x02\x02\x02\u0456\u0449\x03\x02\x02\x02\u0456\u0457\x03\x02" +
		"\x02\x02\u0457S\x03\x02\x02\x02\u0458\u0459\x07W\x02\x02\u0459\u045A\x05" +
		"\u0114\x8B\x02\u045A\u045C\x07[\x02\x02\u045B\u045D\x05V,\x02\u045C\u045B" +
		"\x03\x02\x02\x02\u045C\u045D\x03\x02\x02\x02\u045D\u0463\x03\x02\x02\x02" +
		"\u045E\u0462\x05\xFE\x80\x02\u045F\u0462\x05\xEAv\x02\u0460\u0462\x05" +
		"\xFC\x7F\x02\u0461\u045E\x03\x02\x02\x02\u0461\u045F\x03\x02\x02\x02\u0461" +
		"\u0460\x03\x02\x02\x02\u0462\u0465\x03\x02\x02\x02\u0463\u0461\x03\x02" +
		"\x02\x02\u0463\u0464\x03\x02\x02\x02\u0464U\x03\x02\x02\x02\u0465\u0463" +
		"\x03\x02\x02\x02\u0466\u046A\x07\x84\x02\x02\u0467\u0469\x07\x04\x02\x02" +
		"\u0468\u0467\x03\x02\x02\x02\u0469\u046C\x03\x02\x02\x02\u046A\u0468\x03" +
		"\x02\x02\x02\u046A\u046B\x03\x02\x02\x02\u046B\u046D\x03\x02\x02\x02\u046C" +
		"\u046A\x03\x02\x02\x02\u046D\u0471\x07o\x02\x02\u046E\u0470\x07\x04\x02" +
		"\x02\u046F\u046E\x03\x02\x02\x02\u0470\u0473\x03\x02\x02\x02\u0471\u046F" +
		"\x03\x02\x02\x02\u0471\u0472\x03\x02\x02\x02\u0472\u0474\x03\x02\x02\x02" +
		"\u0473\u0471\x03\x02\x02\x02\u0474\u0475\x07[\x02\x02\u0475W\x03\x02\x02" +
		"\x02\u0476\u0478\x07\x19\x02\x02\u0477\u0479\t\x06\x02\x02\u0478\u0477" +
		"\x03\x02\x02\x02\u0478\u0479\x03\x02\x02\x02\u0479\u047A\x03\x02\x02\x02" +
		"\u047A\u047B\x07[\x02\x02\u047B\u0485\x07p\x02\x02\u047C\u0480\x05:\x1E" +
		"\x02\u047D\u047F\x07p\x02\x02\u047E\u047D\x03\x02\x02\x02\u047F\u0482" +
		"\x03\x02\x02\x02\u0480\u047E\x03\x02\x02\x02\u0480\u0481\x03\x02\x02\x02" +
		"\u0481\u0484\x03\x02\x02\x02\u0482\u0480\x03\x02\x02\x02\u0483\u047C\x03" +
		"\x02\x02\x02\u0484\u0487\x03\x02\x02\x02\u0485\u0483\x03\x02\x02\x02\u0485" +
		"\u0486\x03\x02\x02\x02\u0486\u048B\x03\x02\x02\x02\u0487\u0485\x03\x02" +
		"\x02\x02\u0488\u048A\x07p\x02\x02\u0489\u0488\x03\x02\x02\x02\u048A\u048D" +
		"\x03\x02\x02\x02\u048B\u0489\x03\x02\x02\x02\u048B\u048C\x03\x02\x02\x02" +
		"\u048C\u049B\x03\x02\x02\x02\u048D\u048B\x03\x02\x02\x02\u048E\u0498\x05" +
		"L\'\x02\u048F\u0491\x07p\x02\x02\u0490\u048F\x03\x02\x02\x02\u0491\u0494" +
		"\x03\x02\x02\x02\u0492\u0490\x03\x02\x02\x02\u0492\u0493\x03\x02\x02\x02" +
		"\u0493\u0495\x03\x02\x02\x02\u0494\u0492\x03\x02\x02\x02\u0495\u0497\x05" +
		"L\'\x02\u0496\u0492\x03\x02\x02\x02\u0497\u049A\x03\x02\x02\x02\u0498" +
		"\u0496\x03\x02\x02\x02\u0498\u0499\x03\x02\x02\x02\u0499\u049C\x03\x02" +
		"\x02\x02\u049A\u0498\x03\x02\x02\x02\u049B\u048E\x03\x02\x02\x02\u049B" +
		"\u049C\x03\x02\x02\x02\u049CY\x03\x02\x02\x02\u049D\u049E\x07\x1A\x02" +
		"\x02\u049E\u049F\x05\xA2R\x02\u049F\u04A0\x07[\x02\x02\u04A0\u04AA\x07" +
		"p\x02\x02\u04A1\u04A5\x05:\x1E\x02\u04A2\u04A4\x07p\x02\x02\u04A3\u04A2" +
		"\x03\x02\x02\x02\u04A4\u04A7\x03\x02\x02\x02\u04A5\u04A3\x03\x02\x02\x02" +
		"\u04A5\u04A6\x03\x02\x02\x02\u04A6\u04A9\x03\x02\x02\x02\u04A7\u04A5\x03" +
		"\x02\x02\x02\u04A8\u04A1\x03\x02\x02\x02\u04A9\u04AC\x03\x02\x02\x02\u04AA" +
		"\u04A8\x03\x02\x02\x02\u04AA\u04AB\x03\x02\x02\x02\u04AB\u04B0\x03\x02" +
		"\x02\x02\u04AC\u04AA\x03\x02\x02\x02\u04AD\u04AF\x07p\x02\x02\u04AE\u04AD" +
		"\x03\x02\x02\x02\u04AF\u04B2\x03\x02\x02\x02\u04B0\u04AE\x03\x02\x02\x02" +
		"\u04B0\u04B1\x03\x02\x02\x02\u04B1\u04C0\x03\x02\x02\x02\u04B2\u04B0\x03" +
		"\x02\x02\x02\u04B3\u04BD\x05L\'\x02\u04B4\u04B6\x07p\x02\x02\u04B5\u04B4" +
		"\x03\x02\x02\x02\u04B6\u04B9\x03\x02\x02\x02\u04B7\u04B5\x03\x02\x02\x02" +
		"\u04B7\u04B8\x03\x02\x02\x02\u04B8\u04BA\x03\x02\x02\x02\u04B9\u04B7\x03" +
		"\x02\x02\x02\u04BA\u04BC\x05L\'\x02\u04BB\u04B7\x03\x02\x02\x02\u04BC" +
		"\u04BF\x03\x02\x02\x02\u04BD\u04BB\x03\x02\x02\x02\u04BD\u04BE\x03\x02" +
		"\x02\x02\u04BE\u04C1\x03\x02\x02\x02\u04BF\u04BD\x03\x02\x02\x02\u04C0" +
		"\u04B3\x03\x02\x02\x02\u04C0\u04C1\x03\x02\x02\x02\u04C1[\x03\x02\x02" +
		"\x02\u04C2\u04C3\x07\x1B\x02\x02\u04C3\u04C4\x05\xA2R\x02\u04C4\u04C5" +
		"\x07[\x02\x02\u04C5\u04CF\x07p\x02\x02\u04C6\u04CA\x05:\x1E\x02\u04C7" +
		"\u04C9\x07p\x02\x02\u04C8\u04C7\x03\x02\x02\x02\u04C9\u04CC\x03\x02\x02" +
		"\x02\u04CA\u04C8\x03\x02\x02\x02\u04CA\u04CB\x03\x02\x02\x02\u04CB\u04CE" +
		"\x03\x02\x02\x02\u04CC\u04CA\x03\x02\x02\x02\u04CD\u04C6\x03\x02\x02\x02" +
		"\u04CE\u04D1\x03\x02\x02\x02\u04CF\u04CD\x03\x02\x02\x02\u04CF\u04D0\x03" +
		"\x02\x02\x02\u04D0\u04D5\x03\x02\x02\x02\u04D1\u04CF\x03\x02\x02\x02\u04D2" +
		"\u04D4\x07p\x02\x02\u04D3\u04D2\x03\x02\x02\x02\u04D4\u04D7\x03\x02\x02" +
		"\x02\u04D5\u04D3\x03\x02\x02\x02\u04D5\u04D6\x03\x02\x02\x02\u04D6\u04E5" +
		"\x03\x02\x02\x02\u04D7\u04D5\x03\x02\x02\x02\u04D8\u04E2\x05L\'\x02\u04D9" +
		"\u04DB\x07p\x02\x02\u04DA\u04D9\x03\x02\x02\x02\u04DB\u04DE\x03\x02\x02" +
		"\x02\u04DC\u04DA\x03\x02\x02\x02\u04DC\u04DD\x03\x02\x02\x02\u04DD\u04DF" +
		"\x03\x02\x02\x02\u04DE\u04DC\x03\x02\x02\x02\u04DF\u04E1\x05L\'\x02\u04E0" +
		"\u04DC\x03\x02\x02\x02\u04E1\u04E4\x03\x02\x02\x02\u04E2\u04E0\x03\x02" +
		"\x02\x02\u04E2\u04E3\x03\x02\x02\x02\u04E3\u04E6\x03\x02\x02\x02\u04E4" +
		"\u04E2\x03\x02\x02\x02\u04E5\u04D8\x03\x02\x02\x02\u04E5\u04E6\x03\x02" +
		"\x02\x02\u04E6]\x03\x02\x02\x02\u04E7\u04E8\x07\x1C\x02\x02\u04E8\u04E9" +
		"\x05\xA2R\x02\u04E9\u04ED\x07[\x02\x02\u04EA\u04EC\x07p\x02\x02\u04EB" +
		"\u04EA\x03\x02\x02\x02\u04EC\u04EF\x03\x02\x02\x02\u04ED\u04EB\x03\x02" +
		"\x02\x02\u04ED\u04EE\x03\x02\x02\x02\u04EE\u04F9\x03\x02\x02\x02\u04EF" +
		"\u04ED\x03\x02\x02\x02\u04F0\u04F4\x05:\x1E\x02\u04F1\u04F3\x07p\x02\x02" +
		"\u04F2\u04F1\x03\x02\x02\x02\u04F3\u04F6\x03\x02\x02\x02\u04F4\u04F2\x03" +
		"\x02\x02\x02\u04F4\u04F5\x03\x02\x02\x02\u04F5\u04F8\x03\x02\x02\x02\u04F6" +
		"\u04F4\x03\x02\x02\x02\u04F7\u04F0\x03\x02\x02\x02\u04F8\u04FB\x03\x02" +
		"\x02\x02\u04F9\u04F7\x03\x02\x02\x02\u04F9\u04FA\x03\x02\x02\x02\u04FA" +
		"\u04FD\x03\x02\x02\x02\u04FB\u04F9\x03\x02\x02\x02\u04FC\u04FE\x05\u0112" +
		"\x8A\x02\u04FD\u04FC\x03\x02\x02\x02\u04FD\u04FE\x03\x02\x02\x02\u04FE" +
		"\u0502\x03\x02\x02\x02\u04FF\u0501\x07p\x02\x02\u0500\u04FF\x03\x02\x02" +
		"\x02\u0501\u0504";
	private static readonly _serializedATNSegment3: string =
		"\x03\x02\x02\x02\u0502\u0500\x03\x02\x02\x02\u0502\u0503\x03\x02\x02\x02" +
		"\u0503\u0512\x03\x02\x02\x02\u0504\u0502\x03\x02\x02\x02\u0505\u050F\x05" +
		"L\'\x02\u0506\u0508\x07p\x02\x02\u0507\u0506\x03\x02\x02\x02\u0508\u050B" +
		"\x03\x02\x02\x02\u0509\u0507\x03\x02\x02\x02\u0509\u050A\x03\x02\x02\x02" +
		"\u050A\u050C\x03\x02\x02\x02\u050B\u0509\x03\x02\x02\x02\u050C\u050E\x05" +
		"L\'\x02\u050D\u0509\x03\x02\x02\x02\u050E\u0511\x03\x02\x02\x02\u050F" +
		"\u050D\x03\x02\x02\x02\u050F\u0510\x03\x02\x02\x02\u0510\u0513\x03\x02" +
		"\x02\x02\u0511\u050F\x03\x02\x02\x02\u0512\u0505\x03\x02\x02\x02\u0512" +
		"\u0513\x03\x02\x02\x02\u0513_\x03\x02\x02\x02\u0514\u0515\x07\x1D\x02" +
		"\x02\u0515\u0516\x05\xA2R\x02\u0516\u0518\x07[\x02\x02\u0517\u0519\x07" +
		"p\x02\x02\u0518\u0517\x03\x02\x02\x02\u0519\u051A\x03\x02\x02\x02\u051A" +
		"\u0518\x03\x02\x02\x02\u051A\u051B\x03\x02\x02\x02\u051B\u0525\x03\x02" +
		"\x02\x02\u051C\u0520\x05:\x1E\x02\u051D\u051F\x07p\x02\x02\u051E\u051D" +
		"\x03\x02\x02\x02\u051F\u0522\x03\x02\x02\x02\u0520\u051E\x03\x02\x02\x02" +
		"\u0520\u0521\x03\x02\x02\x02\u0521\u0524\x03\x02\x02\x02\u0522\u0520\x03" +
		"\x02\x02\x02\u0523\u051C\x03\x02\x02\x02\u0524\u0527\x03\x02\x02\x02\u0525" +
		"\u0523\x03\x02\x02\x02\u0525\u0526\x03\x02\x02\x02\u0526\u0529\x03\x02" +
		"\x02\x02\u0527\u0525\x03\x02\x02\x02\u0528\u052A\x05\u0112\x8A\x02\u0529" +
		"\u0528\x03\x02\x02\x02\u0529\u052A\x03\x02\x02\x02\u052A\u052E\x03\x02" +
		"\x02\x02\u052B\u052D\x07p\x02\x02\u052C\u052B\x03\x02\x02\x02\u052D\u0530" +
		"\x03\x02\x02\x02\u052E\u052C\x03\x02\x02\x02\u052E\u052F\x03\x02\x02\x02" +
		"\u052F\u053E\x03\x02\x02\x02\u0530\u052E\x03\x02\x02\x02\u0531\u053B\x05" +
		"L\'\x02\u0532\u0534\x07p\x02\x02\u0533\u0532\x03\x02\x02\x02\u0534\u0537" +
		"\x03\x02\x02\x02\u0535\u0533\x03\x02\x02\x02\u0535\u0536\x03\x02\x02\x02" +
		"\u0536\u0538\x03\x02\x02\x02\u0537\u0535\x03\x02\x02\x02\u0538\u053A\x05" +
		"L\'\x02\u0539\u0535\x03\x02\x02\x02\u053A\u053D\x03\x02\x02\x02\u053B" +
		"\u0539\x03\x02\x02\x02\u053B\u053C\x03\x02\x02\x02\u053C\u053F\x03\x02" +
		"\x02\x02\u053D\u053B\x03\x02\x02\x02\u053E\u0531\x03\x02\x02\x02\u053E" +
		"\u053F\x03\x02\x02\x02\u053Fa\x03\x02\x02\x02\u0540\u0541\x07\x13\x02" +
		"\x02\u0541\u0542\x05\xA2R\x02\u0542\u0546\x07[\x02\x02\u0543\u0545\x07" +
		"p\x02\x02\u0544\u0543\x03\x02\x02\x02\u0545\u0548\x03\x02\x02\x02\u0546" +
		"\u0544\x03\x02\x02\x02\u0546\u0547\x03\x02\x02\x02\u0547\u0550\x03\x02" +
		"\x02\x02\u0548\u0546\x03\x02\x02\x02\u0549\u054D\x05:\x1E\x02\u054A\u054C" +
		"\x07p\x02\x02\u054B\u054A\x03\x02\x02\x02\u054C\u054F\x03\x02\x02\x02" +
		"\u054D\u054B\x03\x02\x02\x02\u054D\u054E\x03\x02\x02\x02\u054E\u0551\x03" +
		"\x02\x02\x02\u054F\u054D\x03\x02\x02\x02\u0550\u0549\x03\x02\x02\x02\u0551" +
		"\u0552\x03\x02\x02\x02\u0552\u0550\x03\x02\x02\x02\u0552\u0553\x03\x02" +
		"\x02\x02\u0553c\x03\x02\x02\x02\u0554\u0555\x07\x0F\x02\x02\u0555\u0556" +
		"\x05\xA2R\x02\u0556\u055A\x07[\x02\x02\u0557\u0559\x07p\x02\x02\u0558" +
		"\u0557\x03\x02\x02\x02\u0559\u055C\x03\x02\x02\x02\u055A\u0558\x03\x02" +
		"\x02\x02\u055A\u055B\x03\x02\x02\x02\u055B\u0564\x03\x02\x02\x02\u055C" +
		"\u055A\x03\x02\x02\x02\u055D\u0561\x05:\x1E\x02\u055E\u0560\x07p\x02\x02" +
		"\u055F\u055E\x03\x02\x02\x02\u0560\u0563\x03\x02\x02\x02\u0561\u055F\x03" +
		"\x02\x02\x02\u0561\u0562\x03\x02\x02\x02\u0562\u0565\x03\x02\x02\x02\u0563" +
		"\u0561\x03\x02\x02\x02\u0564\u055D\x03\x02\x02\x02\u0565\u0566\x03\x02" +
		"\x02\x02\u0566\u0564\x03\x02\x02\x02\u0566\u0567\x03\x02\x02\x02\u0567" +
		"e\x03\x02\x02\x02\u0568\u0569\x07\x10\x02\x02\u0569\u056A\x05\xA2R\x02" +
		"\u056A\u056E\x07[\x02\x02\u056B\u056D\x07p\x02\x02\u056C\u056B\x03\x02" +
		"\x02\x02\u056D\u0570\x03\x02\x02\x02\u056E\u056C\x03\x02\x02\x02\u056E" +
		"\u056F\x03\x02\x02\x02\u056F\u0578\x03\x02\x02\x02\u0570\u056E\x03\x02" +
		"\x02\x02\u0571\u0575\x05:\x1E\x02\u0572\u0574\x07p\x02\x02\u0573\u0572" +
		"\x03\x02\x02\x02\u0574\u0577\x03\x02\x02\x02\u0575\u0573\x03\x02\x02\x02" +
		"\u0575\u0576\x03\x02\x02\x02\u0576\u0579\x03\x02\x02\x02\u0577\u0575\x03" +
		"\x02\x02\x02\u0578\u0571\x03\x02\x02\x02\u0579\u057A\x03\x02\x02\x02\u057A" +
		"\u0578\x03\x02\x02\x02\u057A\u057B\x03\x02\x02\x02\u057Bg\x03\x02\x02" +
		"\x02\u057C\u057D\x074\x02\x02\u057D\u057E\x05\xA2R\x02\u057E\u0582\x07" +
		"[\x02\x02\u057F\u0581\x07p\x02\x02\u0580\u057F\x03\x02\x02\x02\u0581\u0584" +
		"\x03\x02\x02\x02\u0582\u0580\x03\x02\x02\x02\u0582\u0583\x03\x02\x02\x02" +
		"\u0583\u058C\x03\x02\x02\x02\u0584\u0582\x03\x02\x02\x02\u0585\u0589\x05" +
		":\x1E\x02\u0586\u0588\x07p\x02\x02\u0587\u0586\x03\x02\x02\x02\u0588\u058B" +
		"\x03\x02\x02\x02\u0589\u0587\x03\x02\x02\x02\u0589\u058A\x03\x02\x02\x02" +
		"\u058A\u058D\x03\x02\x02\x02\u058B\u0589\x03\x02\x02\x02\u058C\u0585\x03" +
		"\x02\x02\x02\u058D\u058E\x03\x02\x02\x02\u058E\u058C\x03\x02\x02\x02\u058E" +
		"\u058F\x03\x02\x02\x02\u058Fi\x03\x02\x02\x02\u0590\u0591\x075\x02\x02" +
		"\u0591\u0592\x05\xA2R\x02\u0592\u0596\x07[\x02\x02\u0593\u0595\x07p\x02" +
		"\x02\u0594\u0593\x03\x02\x02\x02\u0595\u0598\x03\x02\x02\x02\u0596\u0594" +
		"\x03\x02\x02\x02\u0596\u0597\x03\x02\x02\x02\u0597\u05A0\x03\x02\x02\x02" +
		"\u0598\u0596\x03\x02\x02\x02\u0599\u059D\x05:\x1E\x02\u059A\u059C\x07" +
		"p\x02\x02\u059B\u059A\x03\x02\x02\x02\u059C\u059F\x03\x02\x02\x02\u059D" +
		"\u059B\x03\x02\x02\x02\u059D\u059E\x03\x02\x02\x02\u059E\u05A1\x03\x02" +
		"\x02\x02\u059F\u059D\x03\x02\x02\x02\u05A0\u0599\x03\x02\x02\x02\u05A1" +
		"\u05A2\x03\x02\x02\x02\u05A2\u05A0\x03\x02\x02\x02\u05A2\u05A3\x03\x02" +
		"\x02\x02\u05A3k\x03\x02\x02\x02\u05A4\u05A5\x076\x02\x02\u05A5\u05A6\x05" +
		"\xA2R\x02\u05A6\u05AA\x07[\x02\x02\u05A7\u05A9\x07p\x02\x02\u05A8\u05A7" +
		"\x03\x02\x02\x02\u05A9\u05AC\x03\x02\x02\x02\u05AA\u05A8\x03\x02\x02\x02" +
		"\u05AA\u05AB\x03\x02\x02\x02\u05AB\u05B4\x03\x02\x02\x02\u05AC\u05AA\x03" +
		"\x02\x02\x02\u05AD\u05B1\x05:\x1E\x02\u05AE\u05B0\x07p\x02\x02\u05AF\u05AE" +
		"\x03\x02\x02\x02\u05B0\u05B3\x03\x02\x02\x02\u05B1\u05AF\x03\x02\x02\x02" +
		"\u05B1\u05B2\x03\x02\x02\x02\u05B2\u05B5\x03\x02\x02\x02\u05B3\u05B1\x03" +
		"\x02\x02\x02\u05B4\u05AD\x03\x02\x02\x02\u05B5\u05B6\x03\x02\x02\x02\u05B6" +
		"\u05B4\x03\x02\x02\x02\u05B6\u05B7\x03\x02\x02\x02\u05B7m\x03\x02\x02" +
		"\x02\u05B8\u05B9\x07\x14\x02\x02\u05B9\u05BA\x05\xA2R\x02\u05BA\u05BE" +
		"\x07[\x02\x02\u05BB\u05BD\x07p\x02\x02\u05BC\u05BB\x03\x02\x02\x02\u05BD" +
		"\u05C0\x03\x02\x02\x02\u05BE\u05BC\x03\x02\x02\x02\u05BE\u05BF\x03\x02" +
		"\x02\x02\u05BF\u05C8\x03\x02\x02\x02\u05C0\u05BE\x03\x02\x02\x02\u05C1" +
		"\u05C5\x05:\x1E\x02\u05C2\u05C4\x07p\x02\x02\u05C3\u05C2\x03\x02\x02\x02" +
		"\u05C4\u05C7\x03\x02\x02\x02\u05C5\u05C3\x03\x02\x02\x02\u05C5\u05C6\x03" +
		"\x02\x02\x02\u05C6\u05C9\x03\x02\x02\x02\u05C7\u05C5\x03\x02\x02\x02\u05C8" +
		"\u05C1\x03\x02\x02\x02\u05C9\u05CA\x03\x02\x02\x02\u05CA\u05C8\x03\x02" +
		"\x02\x02\u05CA\u05CB\x03\x02\x02\x02\u05CBo\x03\x02\x02\x02\u05CC\u05CD" +
		"\x07\'\x02\x02\u05CD\u05CE\x05\xA2R\x02\u05CE\u05D2\x07[\x02\x02\u05CF" +
		"\u05D1\x07p\x02\x02\u05D0\u05CF\x03\x02\x02\x02\u05D1\u05D4\x03\x02\x02" +
		"\x02\u05D2\u05D0\x03\x02\x02\x02\u05D2\u05D3\x03\x02\x02\x02\u05D3\u05DC" +
		"\x03\x02\x02\x02\u05D4\u05D2\x03\x02\x02\x02\u05D5\u05D9\x05:\x1E\x02" +
		"\u05D6\u05D8\x07p\x02\x02\u05D7\u05D6\x03\x02\x02\x02\u05D8\u05DB\x03" +
		"\x02\x02\x02\u05D9\u05D7\x03\x02\x02\x02\u05D9\u05DA\x03\x02\x02\x02\u05DA" +
		"\u05DD\x03\x02\x02\x02\u05DB\u05D9\x03\x02\x02\x02\u05DC\u05D5\x03\x02" +
		"\x02\x02\u05DD\u05DE\x03\x02\x02\x02\u05DE\u05DC\x03\x02\x02\x02\u05DE" +
		"\u05DF\x03\x02\x02\x02\u05DFq\x03\x02\x02\x02\u05E0\u05E1\x07(\x02\x02" +
		"\u05E1\u05E2\x05\xA2R\x02\u05E2\u05E6\x07[\x02\x02\u05E3\u05E5\x07p\x02" +
		"\x02\u05E4\u05E3\x03\x02\x02\x02\u05E5\u05E8\x03\x02\x02\x02\u05E6\u05E4" +
		"\x03\x02\x02\x02\u05E6\u05E7\x03\x02\x02\x02\u05E7\u05F0\x03\x02\x02\x02" +
		"\u05E8\u05E6\x03\x02\x02\x02\u05E9\u05ED\x05:\x1E\x02\u05EA\u05EC\x07" +
		"p\x02\x02\u05EB\u05EA\x03\x02\x02\x02\u05EC\u05EF\x03\x02\x02\x02\u05ED" +
		"\u05EB\x03\x02\x02\x02\u05ED\u05EE\x03\x02\x02\x02\u05EE\u05F1\x03\x02" +
		"\x02\x02\u05EF\u05ED\x03\x02\x02\x02\u05F0\u05E9\x03\x02\x02\x02\u05F1" +
		"\u05F2\x03\x02\x02\x02\u05F2\u05F0\x03\x02\x02\x02\u05F2\u05F3\x03\x02" +
		"\x02\x02\u05F3s\x03\x02\x02\x02\u05F4\u05F5\x07)\x02\x02\u05F5\u05F6\x05" +
		"\xA2R\x02\u05F6\u05FA\x07[\x02\x02\u05F7\u05F9\x07p\x02\x02\u05F8\u05F7" +
		"\x03\x02\x02\x02\u05F9\u05FC\x03\x02\x02\x02\u05FA\u05F8\x03\x02\x02\x02" +
		"\u05FA\u05FB\x03\x02\x02\x02\u05FB\u0604\x03\x02\x02\x02\u05FC\u05FA\x03" +
		"\x02\x02\x02\u05FD\u0601\x05:\x1E\x02\u05FE\u0600\x07p\x02\x02\u05FF\u05FE" +
		"\x03\x02\x02\x02\u0600\u0603\x03\x02\x02\x02\u0601\u05FF\x03\x02\x02\x02" +
		"\u0601\u0602\x03\x02\x02\x02\u0602\u0605\x03\x02\x02\x02\u0603\u0601\x03" +
		"\x02\x02\x02\u0604\u05FD\x03\x02\x02\x02\u0605\u0606\x03\x02\x02\x02\u0606" +
		"\u0604\x03\x02\x02\x02\u0606\u0607\x03\x02\x02\x02\u0607u\x03\x02\x02" +
		"\x02\u0608\u0609\x07*\x02\x02\u0609\u060A\x05\xA2R\x02\u060A\u060E\x07" +
		"[\x02\x02\u060B\u060D\x07p\x02\x02\u060C\u060B\x03\x02\x02\x02\u060D\u0610" +
		"\x03\x02\x02\x02\u060E\u060C\x03\x02\x02\x02\u060E\u060F\x03\x02\x02\x02" +
		"\u060F\u0618\x03\x02\x02\x02\u0610\u060E\x03\x02\x02\x02\u0611\u0615\x05" +
		":\x1E\x02\u0612\u0614\x07p\x02\x02\u0613\u0612\x03\x02\x02\x02\u0614\u0617" +
		"\x03\x02\x02\x02\u0615\u0613\x03\x02\x02\x02\u0615\u0616\x03\x02\x02\x02" +
		"\u0616\u0619\x03\x02\x02\x02\u0617\u0615\x03\x02\x02\x02\u0618\u0611\x03" +
		"\x02\x02\x02\u0619\u061A\x03\x02\x02\x02\u061A\u0618\x03\x02\x02\x02\u061A" +
		"\u061B\x03\x02\x02\x02\u061Bw\x03\x02\x02\x02\u061C\u061D\x07,\x02\x02" +
		"\u061D\u061E\x05\xA2R\x02\u061E\u0622\x07[\x02\x02\u061F\u0621\x07p\x02" +
		"\x02\u0620\u061F\x03\x02\x02\x02\u0621\u0624\x03\x02\x02\x02\u0622\u0620" +
		"\x03\x02\x02\x02\u0622\u0623\x03\x02\x02\x02\u0623\u062C\x03\x02\x02\x02" +
		"\u0624\u0622\x03\x02\x02\x02\u0625\u0629\x05:\x1E\x02\u0626\u0628\x07" +
		"p\x02\x02\u0627\u0626\x03\x02\x02\x02\u0628\u062B\x03\x02\x02\x02\u0629" +
		"\u0627\x03\x02\x02\x02\u0629\u062A\x03\x02\x02\x02\u062A\u062D\x03\x02" +
		"\x02\x02\u062B\u0629\x03\x02\x02\x02\u062C\u0625\x03\x02\x02\x02\u062D" +
		"\u062E\x03\x02\x02\x02\u062E\u062C\x03\x02\x02\x02\u062E\u062F\x03\x02" +
		"\x02\x02\u062Fy\x03\x02\x02\x02\u0630\u0631\x07-\x02\x02\u0631\u0632\x05" +
		"\xA2R\x02\u0632\u0636\x07[\x02\x02\u0633\u0635\x07p\x02\x02\u0634\u0633" +
		"\x03\x02\x02\x02\u0635\u0638\x03\x02\x02\x02\u0636\u0634\x03\x02\x02\x02" +
		"\u0636\u0637\x03\x02\x02\x02\u0637\u0640\x03\x02\x02\x02\u0638\u0636\x03" +
		"\x02\x02\x02\u0639\u063D\x05:\x1E\x02\u063A\u063C\x07p\x02\x02\u063B\u063A" +
		"\x03\x02\x02\x02\u063C\u063F\x03\x02\x02\x02\u063D\u063B\x03\x02\x02\x02" +
		"\u063D\u063E\x03\x02\x02\x02\u063E\u0641\x03\x02\x02\x02\u063F\u063D\x03" +
		"\x02\x02\x02\u0640\u0639\x03\x02\x02\x02\u0641\u0642\x03\x02\x02\x02\u0642" +
		"\u0640\x03\x02\x02\x02\u0642\u0643\x03\x02\x02\x02\u0643{\x03\x02\x02" +
		"\x02\u0644\u0645\x07.\x02\x02\u0645\u0646\x05\xA2R\x02\u0646\u064A\x07" +
		"[\x02\x02\u0647\u0649\x07p\x02\x02\u0648\u0647\x03\x02\x02\x02\u0649\u064C" +
		"\x03\x02\x02\x02\u064A\u0648\x03\x02\x02\x02\u064A\u064B\x03\x02\x02\x02" +
		"\u064B\u0654\x03\x02\x02\x02\u064C\u064A\x03\x02\x02\x02\u064D\u0651\x05" +
		":\x1E\x02\u064E\u0650\x07p\x02\x02\u064F\u064E\x03\x02\x02\x02\u0650\u0653" +
		"\x03\x02\x02\x02\u0651\u064F\x03\x02\x02\x02\u0651\u0652\x03\x02\x02\x02" +
		"\u0652\u0655\x03\x02\x02\x02\u0653\u0651\x03\x02\x02\x02\u0654\u064D\x03" +
		"\x02\x02\x02\u0655\u0656\x03\x02\x02\x02\u0656\u0654\x03\x02\x02\x02\u0656" +
		"\u0657\x03\x02\x02\x02\u0657}\x03\x02\x02\x02\u0658\u0659\x07/\x02\x02" +
		"\u0659\u065A\x05\xA2R\x02\u065A\u065E\x07[\x02\x02\u065B\u065D\x07p\x02" +
		"\x02\u065C\u065B\x03\x02\x02\x02\u065D\u0660\x03\x02\x02\x02\u065E\u065C" +
		"\x03\x02\x02\x02\u065E\u065F\x03\x02\x02\x02\u065F\u0668\x03\x02\x02\x02" +
		"\u0660\u065E\x03\x02\x02\x02\u0661\u0665\x05:\x1E\x02\u0662\u0664\x07" +
		"p\x02\x02\u0663\u0662\x03\x02\x02\x02\u0664\u0667\x03\x02\x02\x02\u0665" +
		"\u0663\x03\x02\x02\x02\u0665\u0666\x03\x02\x02\x02\u0666\u0669\x03\x02" +
		"\x02\x02\u0667\u0665\x03\x02\x02\x02\u0668\u0661\x03\x02\x02\x02\u0669" +
		"\u066A\x03\x02\x02\x02\u066A\u0668\x03\x02\x02\x02\u066A\u066B\x03\x02" +
		"\x02\x02\u066B\x7F\x03\x02\x02\x02\u066C\u066D\x070\x02\x02\u066D\u066E" +
		"\x05\xA2R\x02\u066E\u0672\x07[\x02\x02\u066F\u0671\x07p\x02\x02\u0670" +
		"\u066F\x03\x02\x02\x02\u0671\u0674\x03\x02\x02\x02\u0672\u0670\x03\x02" +
		"\x02\x02\u0672\u0673\x03\x02\x02\x02\u0673\u067C\x03\x02\x02\x02\u0674" +
		"\u0672\x03\x02\x02\x02\u0675\u0679\x05:\x1E\x02\u0676\u0678\x07p\x02\x02" +
		"\u0677\u0676\x03\x02\x02\x02\u0678\u067B\x03\x02\x02\x02\u0679\u0677\x03" +
		"\x02\x02\x02\u0679\u067A\x03\x02\x02\x02\u067A\u067D\x03\x02\x02\x02\u067B" +
		"\u0679\x03\x02\x02\x02\u067C\u0675\x03\x02\x02\x02\u067D\u067E\x03\x02" +
		"\x02\x02\u067E\u067C\x03\x02\x02\x02\u067E\u067F\x03\x02\x02\x02\u067F" +
		"\x81\x03\x02\x02\x02\u0680\u0681\x071\x02\x02\u0681\u0682\x05\xA2R\x02" +
		"\u0682\u0686\x07[\x02\x02\u0683\u0685\x07p\x02\x02\u0684\u0683\x03\x02" +
		"\x02\x02\u0685\u0688\x03\x02\x02\x02\u0686\u0684\x03\x02\x02\x02\u0686" +
		"\u0687\x03\x02\x02\x02\u0687\u0690\x03\x02\x02\x02\u0688\u0686\x03\x02" +
		"\x02\x02\u0689\u068D\x05:\x1E\x02\u068A\u068C\x07p\x02\x02\u068B\u068A" +
		"\x03\x02\x02\x02\u068C\u068F\x03\x02\x02\x02\u068D\u068B\x03\x02\x02\x02" +
		"\u068D\u068E\x03\x02\x02\x02\u068E\u0691\x03\x02\x02\x02\u068F\u068D\x03" +
		"\x02\x02\x02\u0690\u0689\x03\x02\x02\x02\u0691\u0692\x03\x02\x02\x02\u0692" +
		"\u0690\x03\x02\x02\x02\u0692\u0693\x03\x02\x02\x02\u0693\x83\x03\x02\x02" +
		"\x02\u0694\u0695\x072\x02\x02\u0695\u0696\x05\xA2R\x02\u0696\u069A\x07" +
		"[\x02\x02\u0697\u0699\x07p\x02\x02\u0698\u0697\x03\x02\x02\x02\u0699\u069C" +
		"\x03\x02\x02\x02\u069A\u0698\x03\x02\x02\x02\u069A\u069B\x03\x02\x02\x02" +
		"\u069B\u06A4\x03\x02\x02\x02\u069C\u069A\x03\x02\x02\x02\u069D\u06A1\x05" +
		":\x1E\x02\u069E\u06A0\x07p\x02\x02\u069F\u069E\x03\x02\x02\x02\u06A0\u06A3" +
		"\x03\x02\x02\x02\u06A1\u069F\x03\x02\x02\x02\u06A1\u06A2\x03\x02\x02\x02" +
		"\u06A2\u06A5\x03\x02\x02\x02\u06A3\u06A1\x03\x02\x02\x02\u06A4\u069D\x03" +
		"\x02\x02\x02\u06A5\u06A6\x03\x02\x02\x02\u06A6\u06A4\x03\x02\x02\x02\u06A6" +
		"\u06A7\x03\x02\x02\x02\u06A7\x85\x03\x02\x02\x02\u06A8\u06A9\x07+\x02" +
		"\x02\u06A9\u06AA\x05\xA2R\x02\u06AA\u06AE\x07[\x02\x02\u06AB\u06AD\x07" +
		"p\x02\x02\u06AC\u06AB\x03\x02\x02\x02\u06AD\u06B0\x03\x02\x02\x02\u06AE" +
		"\u06AC\x03\x02\x02\x02\u06AE\u06AF\x03\x02\x02\x02\u06AF\u06B8\x03\x02" +
		"\x02\x02\u06B0\u06AE\x03\x02\x02\x02\u06B1\u06B5\x05:\x1E\x02\u06B2\u06B4" +
		"\x07p\x02\x02\u06B3\u06B2\x03\x02\x02\x02\u06B4\u06B7\x03\x02\x02\x02" +
		"\u06B5\u06B3\x03\x02\x02\x02\u06B5\u06B6\x03\x02\x02\x02\u06B6\u06B9\x03" +
		"\x02\x02\x02\u06B7\u06B5\x03\x02\x02\x02\u06B8\u06B1\x03\x02\x02\x02\u06B9" +
		"\u06BA\x03\x02\x02\x02\u06BA\u06B8\x03\x02\x02\x02\u06BA\u06BB\x03\x02" +
		"\x02\x02\u06BB\x87\x03\x02\x02\x02\u06BC\u06BD\x073\x02\x02\u06BD\u06BE" +
		"\x05\xA2R\x02\u06BE\u06C2\x07[\x02\x02\u06BF\u06C1\x07p\x02\x02\u06C0" +
		"\u06BF\x03\x02\x02\x02\u06C1\u06C4\x03\x02\x02\x02\u06C2\u06C0\x03\x02" +
		"\x02\x02\u06C2\u06C3\x03\x02\x02\x02\u06C3\u06CC\x03\x02\x02\x02\u06C4" +
		"\u06C2\x03\x02\x02\x02\u06C5\u06C9\x05:\x1E\x02\u06C6\u06C8\x07p\x02\x02" +
		"\u06C7\u06C6\x03\x02\x02\x02\u06C8\u06CB\x03\x02\x02\x02\u06C9\u06C7\x03" +
		"\x02\x02\x02\u06C9\u06CA\x03\x02\x02\x02\u06CA\u06CD\x03\x02\x02\x02\u06CB" +
		"\u06C9\x03\x02\x02\x02\u06CC\u06C5\x03\x02\x02\x02\u06CD\u06CE\x03\x02" +
		"\x02\x02\u06CE\u06CC\x03\x02\x02\x02\u06CE\u06CF\x03\x02\x02\x02\u06CF" +
		"\x89\x03\x02\x02\x02\u06D0\u06D1\x07\x16\x02\x02\u06D1\u06D2\x05\xA2R" +
		"\x02\u06D2\u06D6\x07[\x02\x02\u06D3\u06D5\x07p\x02\x02\u06D4\u06D3\x03" +
		"\x02\x02\x02\u06D5\u06D8\x03\x02\x02\x02\u06D6\u06D4\x03\x02\x02\x02\u06D6" +
		"\u06D7\x03\x02\x02\x02\u06D7\u06E0\x03\x02\x02\x02\u06D8\u06D6\x03\x02" +
		"\x02\x02\u06D9\u06DD\x05:\x1E\x02\u06DA\u06DC\x07p\x02\x02\u06DB\u06DA" +
		"\x03\x02\x02\x02\u06DC\u06DF\x03\x02\x02\x02\u06DD\u06DB\x03\x02\x02\x02" +
		"\u06DD\u06DE\x03\x02\x02\x02\u06DE\u06E1\x03\x02\x02\x02\u06DF\u06DD\x03" +
		"\x02\x02\x02\u06E0\u06D9\x03\x02\x02\x02\u06E1\u06E2\x03\x02\x02\x02\u06E2" +
		"\u06E0\x03\x02\x02\x02\u06E2\u06E3\x03\x02\x02\x02\u06E3\x8B\x03\x02\x02" +
		"\x02\u06E4\u06E5\x07\x1E\x02\x02\u06E5\u06E6\x05\xA2R\x02\u06E6\u06F1" +
		"\x07[\x02\x02\u06E7\u06E8\t\x07\x02\x02\u06E8\u06EE\x05\x8EH\x02\u06E9" +
		"\u06EA\x05\u011C\x8F\x02\u06EA\u06EB\x05\x8EH\x02\u06EB\u06ED\x03\x02" +
		"\x02\x02\u06EC\u06E9\x03\x02\x02\x02\u06ED\u06F0\x03\x02\x02\x02\u06EE" +
		"\u06EC\x03\x02\x02\x02\u06EE\u06EF\x03\x02\x02\x02\u06EF\u06F2\x03\x02" +
		"\x02\x02\u06F0\u06EE\x03\x02\x02\x02\u06F1\u06E7\x03\x02\x02\x02\u06F2" +
		"\u06F3\x03\x02\x02\x02\u06F3\u06F1\x03\x02\x02\x02\u06F3\u06F4\x03\x02" +
		"\x02\x02\u06F4\u06F5\x03\x02\x02\x02\u06F5\u06F9\t\x07\x02\x02\u06F6\u06F8" +
		"\x07p\x02\x02\u06F7\u06F6\x03\x02\x02\x02\u06F8\u06FB\x03\x02\x02\x02" +
		"\u06F9\u06F7\x03\x02\x02\x02\u06F9\u06FA\x03\x02\x02\x02\u06FA\u0709\x03" +
		"\x02\x02\x02\u06FB\u06F9\x03\x02\x02\x02\u06FC\u0706\x05L\'\x02\u06FD" +
		"\u06FF\x07p\x02\x02\u06FE\u06FD\x03\x02\x02\x02\u06FF\u0702\x03\x02\x02" +
		"\x02\u0700\u06FE\x03\x02\x02\x02\u0700\u0701\x03\x02\x02\x02\u0701\u0703" +
		"\x03\x02\x02\x02\u0702\u0700\x03\x02\x02\x02\u0703\u0705\x05L\'\x02\u0704" +
		"\u0700\x03\x02\x02\x02\u0705\u0708\x03\x02\x02\x02\u0706\u0704\x03\x02" +
		"\x02\x02\u0706\u0707\x03\x02\x02\x02\u0707\u070A\x03\x02\x02\x02\u0708" +
		"\u0706\x03\x02\x02\x02\u0709\u06FC\x03\x02\x02\x02\u0709\u070A\x03\x02" +
		"\x02\x02\u070A\x8D\x03\x02\x02\x02\u070B\u0713\x05\u011E\x90\x02\u070C" +
		"\u0713\x05\xFC\x7F\x02\u070D\u0713\x05\xDCo\x02\u070E\u0713\x05<\x1F\x02" +
		"\u070F\u0713\x05@!\x02\u0710\u0713\x05B\"\x02\u0711\u0713\x05D#\x02\u0712" +
		"\u070B\x03\x02\x02\x02\u0712\u070C\x03\x02\x02\x02\u0712\u070D\x03\x02" +
		"\x02\x02\u0712\u070E\x03\x02\x02\x02\u0712\u070F\x03\x02\x02\x02\u0712" +
		"\u0710\x03\x02\x02\x02\u0712\u0711\x03\x02\x02\x02\u0713\u0714\x03\x02" +
		"\x02\x02\u0714\u0712\x03\x02\x02\x02\u0714\u0715\x03\x02\x02\x02\u0715" +
		"\x8F\x03\x02\x02\x02\u0716\u0717\x07 \x02\x02\u0717\u0718\x05\xA2R\x02" +
		"\u0718\u071C\x07[\x02\x02\u0719\u071B\x07p\x02\x02\u071A\u0719\x03\x02" +
		"\x02\x02\u071B\u071E\x03\x02\x02\x02\u071C\u071A\x03\x02\x02\x02\u071C" +
		"\u071D\x03\x02\x02\x02\u071D\u0728\x03\x02\x02\x02\u071E\u071C\x03\x02" +
		"\x02\x02\u071F\u0723\x05:\x1E\x02\u0720\u0722\x07p\x02\x02\u0721\u0720" +
		"\x03\x02\x02\x02\u0722\u0725\x03\x02\x02\x02\u0723\u0721\x03\x02\x02\x02" +
		"\u0723\u0724\x03\x02\x02\x02\u0724\u0727\x03\x02\x02\x02\u0725\u0723\x03" +
		"\x02\x02\x02\u0726\u071F\x03\x02\x02\x02\u0727\u072A\x03\x02\x02\x02\u0728" +
		"\u0726\x03\x02\x02\x02\u0728\u0729\x03\x02\x02\x02\u0729\u0733\x03\x02" +
		"\x02\x02\u072A\u0728\x03\x02\x02\x02\u072B\u072C\t\x07\x02\x02\u072C\u072F" +
		"\x05\u0114\x8B\x02\u072D\u072E\x07p\x02\x02\u072E\u0730\x05\x92J\x02\u072F" +
		"\u072D\x03\x02\x02\x02\u0730\u0731\x03\x02\x02\x02\u0731\u072F\x03\x02" +
		"\x02\x02\u0731\u0732\x03\x02\x02\x02\u0732\u0734\x03\x02\x02\x02\u0733" +
		"\u072B\x03\x02\x02\x02\u0734\u0735\x03\x02\x02\x02\u0735\u0733\x03\x02" +
		"\x02\x02\u0735\u0736\x03\x02\x02\x02\u0736\u0737\x03\x02\x02\x02\u0737" +
		"\u073B\t\x07\x02\x02\u0738\u073A\x07p\x02\x02\u0739\u0738\x03\x02\x02" +
		"\x02\u073A\u073D\x03\x02\x02\x02\u073B\u0739\x03\x02\x02\x02\u073B\u073C" +
		"\x03\x02\x02\x02\u073C\u074B\x03\x02\x02\x02\u073D\u073B\x03\x02\x02\x02" +
		"\u073E\u0748\x05L\'\x02\u073F\u0741\x07p\x02\x02\u0740\u073F\x03\x02\x02" +
		"\x02\u0741\u0744\x03\x02\x02\x02\u0742\u0740\x03\x02\x02\x02\u0742\u0743" +
		"\x03\x02\x02\x02\u0743\u0745\x03\x02\x02\x02\u0744\u0742\x03\x02\x02\x02" +
		"\u0745\u0747\x05L\'\x02\u0746\u0742\x03\x02\x02\x02\u0747\u074A\x03\x02" +
		"\x02\x02\u0748\u0746\x03\x02\x02\x02\u0748\u0749\x03\x02\x02\x02\u0749" +
		"\u074C\x03\x02\x02\x02\u074A\u0748\x03\x02\x02\x02\u074B\u073E\x03\x02" +
		"\x02\x02\u074B\u074C\x03\x02\x02\x02\u074C\x91\x03\x02\x02\x02\u074D\u074E" +
		"\x07L\x02\x02\u074E\u074F\x05\u0114\x8B\x02\u074F\u0751\x07[\x02\x02\u0750" +
		"\u0752\x05\xA0Q\x02\u0751\u0750\x03\x02\x02\x02\u0751\u0752\x03\x02\x02" +
		"\x02\u0752\x93\x03\x02\x02\x02\u0753\u0754\x07!\x02\x02\u0754\u0755\x05" +
		"\xA2R\x02\u0755\u0759\x07[\x02\x02\u0756\u0758\x07p\x02\x02\u0757\u0756" +
		"\x03\x02\x02\x02\u0758\u075B\x03\x02\x02\x02\u0759\u0757\x03\x02\x02\x02" +
		"\u0759\u075A\x03\x02\x02\x02\u075A\u0765\x03\x02\x02\x02\u075B\u0759\x03" +
		"\x02\x02\x02\u075C\u0760\x05:\x1E\x02\u075D\u075F\x07p\x02\x02\u075E\u075D" +
		"\x03\x02\x02\x02\u075F\u0762\x03\x02\x02\x02\u0760\u075E\x03\x02\x02\x02" +
		"\u0760\u0761\x03\x02\x02\x02\u0761\u0764\x03\x02\x02\x02\u0762\u0760\x03" +
		"\x02\x02\x02\u0763\u075C\x03\x02\x02\x02\u0764\u0767\x03\x02\x02\x02\u0765" +
		"\u0763\x03\x02\x02\x02\u0765\u0766\x03\x02\x02\x02\u0766\u0777\x03\x02" +
		"\x02\x02\u0767\u0765\x03\x02\x02\x02\u0768\u076A\t\x07\x02\x02\u0769\u076B" +
		"\x05\u0114\x8B\x02\u076A\u0769\x03\x02\x02\x02\u076A\u076B\x03\x02\x02" +
		"\x02\u076B\u0773\x03\x02\x02\x02\u076C\u076E\x07p\x02\x02\u076D\u076C" +
		"\x03\x02\x02\x02\u076E\u0771\x03\x02\x02\x02\u076F\u076D\x03\x02\x02\x02" +
		"\u076F\u0770\x03\x02\x02\x02\u0770\u0772\x03\x02\x02\x02\u0771\u076F\x03" +
		"\x02\x02\x02\u0772\u0774\x05\x92J\x02\u0773\u076F\x03\x02\x02\x02\u0774" +
		"\u0775\x03\x02\x02\x02\u0775\u0773\x03\x02\x02\x02\u0775\u0776\x03\x02" +
		"\x02\x02\u0776\u0778\x03\x02\x02\x02\u0777\u0768\x03\x02\x02\x02\u0778" +
		"\u0779\x03\x02\x02\x02\u0779\u0777\x03\x02\x02\x02\u0779\u077A\x03\x02" +
		"\x02\x02\u077A\u077B\x03\x02\x02\x02\u077B\u077C\t\x07\x02\x02\u077C\x95" +
		"\x03\x02\x02\x02\u077D\u077E\x07\"\x02\x02\u077E\u077F\x05\xA2R\x02\u077F" +
		"\u0783\x07[\x02\x02\u0780\u0782\x07p\x02\x02\u0781\u0780\x03\x02\x02\x02" +
		"\u0782\u0785\x03\x02\x02\x02\u0783\u0781\x03\x02\x02\x02\u0783\u0784\x03" +
		"\x02\x02\x02\u0784\u078F\x03\x02\x02\x02\u0785\u0783\x03\x02\x02\x02\u0786" +
		"\u078A\x05:\x1E\x02\u0787\u0789\x07p\x02\x02\u0788\u0787\x03\x02\x02\x02" +
		"\u0789\u078C\x03\x02\x02\x02\u078A\u0788\x03\x02\x02\x02\u078A\u078B\x03" +
		"\x02\x02\x02\u078B\u078E\x03\x02\x02\x02\u078C\u078A\x03\x02\x02\x02\u078D" +
		"\u0786\x03\x02\x02\x02\u078E\u0791\x03\x02\x02\x02\u078F\u078D\x03\x02" +
		"\x02\x02\u078F\u0790\x03\x02\x02\x02\u0790\u079A\x03\x02\x02\x02\u0791" +
		"\u078F\x03\x02\x02\x02\u0792\u0793\t\x07\x02\x02\u0793\u0796\x05\u0114" +
		"\x8B\x02\u0794\u0795\x07p\x02\x02\u0795\u0797\x05\x92J\x02\u0796\u0794" +
		"\x03\x02\x02\x02\u0797\u0798\x03\x02\x02\x02\u0798\u0796\x03\x02\x02\x02" +
		"\u0798\u0799\x03\x02\x02\x02\u0799\u079B\x03\x02\x02\x02\u079A\u0792\x03" +
		"\x02\x02\x02\u079B\u079C\x03\x02\x02\x02\u079C\u079A\x03\x02\x02\x02\u079C" +
		"\u079D\x03\x02\x02\x02\u079D\u079E\x03\x02\x02\x02\u079E\u079F\t\x07\x02" +
		"\x02\u079F\x97\x03\x02\x02\x02\u07A0\u07A1\x07#\x02\x02\u07A1\u07A2\x05" +
		"\xA2R\x02\u07A2\u07A6\x07[\x02\x02\u07A3\u07A5\x07p\x02\x02\u07A4\u07A3" +
		"\x03\x02\x02\x02\u07A5\u07A8\x03\x02\x02\x02\u07A6\u07A4\x03\x02\x02\x02" +
		"\u07A6\u07A7\x03\x02\x02\x02\u07A7\u07B2\x03\x02\x02\x02\u07A8\u07A6\x03" +
		"\x02\x02\x02\u07A9\u07AD\x05:\x1E\x02\u07AA\u07AC\x07p\x02\x02\u07AB\u07AA" +
		"\x03\x02\x02\x02\u07AC\u07AF\x03\x02\x02\x02\u07AD\u07AB\x03\x02\x02\x02" +
		"\u07AD\u07AE\x03\x02\x02\x02\u07AE\u07B1\x03\x02\x02\x02\u07AF\u07AD\x03" +
		"\x02\x02\x02\u07B0\u07A9\x03\x02\x02\x02\u07B1\u07B4\x03\x02\x02\x02\u07B2" +
		"\u07B0\x03\x02\x02\x02\u07B2\u07B3\x03\x02\x02\x02\u07B3\u07BD\x03\x02" +
		"\x02\x02\u07B4\u07B2\x03\x02\x02\x02\u07B5\u07B6\t\x07\x02\x02\u07B6\u07B9" +
		"\x05\u0114\x8B\x02\u07B7\u07B8\x07p\x02\x02\u07B8\u07BA\x05\x92J\x02\u07B9" +
		"\u07B7\x03\x02\x02\x02\u07BA\u07BB\x03\x02\x02\x02\u07BB\u07B9\x03\x02" +
		"\x02\x02\u07BB\u07BC\x03\x02\x02\x02\u07BC\u07BE\x03\x02\x02\x02\u07BD" +
		"\u07B5\x03\x02\x02\x02\u07BE\u07BF\x03\x02\x02\x02\u07BF\u07BD\x03\x02" +
		"\x02\x02\u07BF\u07C0\x03\x02\x02\x02\u07C0\u07C1\x03\x02\x02\x02\u07C1" +
		"\u07C2\t\x07\x02\x02\u07C2\x99\x03\x02\x02\x02\u07C3\u07C4\x07$\x02\x02" +
		"\u07C4\u07C5\x05\xA2R\x02\u07C5\u07C9\x07[\x02\x02\u07C6\u07C8\x07p\x02" +
		"\x02\u07C7\u07C6\x03\x02\x02\x02\u07C8\u07CB\x03\x02\x02\x02\u07C9\u07C7" +
		"\x03\x02\x02\x02\u07C9\u07CA\x03\x02\x02\x02\u07CA\u07D5\x03\x02\x02\x02" +
		"\u07CB\u07C9\x03\x02\x02\x02\u07CC\u07D0\x05:\x1E\x02\u07CD\u07CF\x07" +
		"p\x02\x02\u07CE\u07CD\x03\x02";
	private static readonly _serializedATNSegment4: string =
		"\x02\x02\u07CF\u07D2\x03\x02\x02\x02\u07D0\u07CE\x03\x02\x02\x02\u07D0" +
		"\u07D1\x03\x02\x02\x02\u07D1\u07D4\x03\x02\x02\x02\u07D2\u07D0\x03\x02" +
		"\x02\x02\u07D3\u07CC\x03\x02\x02\x02\u07D4\u07D7\x03\x02\x02\x02\u07D5" +
		"\u07D3\x03\x02\x02\x02\u07D5\u07D6\x03\x02\x02\x02\u07D6\u07E0\x03\x02" +
		"\x02\x02\u07D7\u07D5\x03\x02\x02\x02\u07D8\u07D9\t\x07\x02\x02\u07D9\u07DC" +
		"\x05\u0114\x8B\x02\u07DA\u07DB\x07p\x02\x02\u07DB\u07DD\x05\x92J\x02\u07DC" +
		"\u07DA\x03\x02\x02\x02\u07DD\u07DE\x03\x02\x02\x02\u07DE\u07DC\x03\x02" +
		"\x02\x02\u07DE\u07DF\x03\x02\x02\x02\u07DF\u07E1\x03\x02\x02\x02\u07E0" +
		"\u07D8\x03\x02\x02\x02\u07E1\u07E2\x03\x02\x02\x02\u07E2\u07E0\x03\x02" +
		"\x02\x02\u07E2\u07E3\x03\x02\x02\x02\u07E3\u07E4\x03\x02\x02\x02\u07E4" +
		"\u07E5\t\x07\x02\x02\u07E5\x9B\x03\x02\x02\x02\u07E6\u07E7\x07\x1F\x02" +
		"\x02\u07E7\u07E8\x05\xA2R\x02\u07E8\u07EC\x07[\x02\x02\u07E9\u07EB\x07" +
		"p\x02\x02\u07EA\u07E9\x03\x02\x02\x02\u07EB\u07EE\x03\x02\x02\x02\u07EC" +
		"\u07EA\x03\x02\x02\x02\u07EC\u07ED\x03\x02\x02\x02\u07ED\u07F8\x03\x02" +
		"\x02\x02\u07EE\u07EC\x03\x02\x02\x02\u07EF\u07F3\x05:\x1E\x02\u07F0\u07F2" +
		"\x07p\x02\x02\u07F1\u07F0\x03\x02\x02\x02\u07F2\u07F5\x03\x02\x02\x02" +
		"\u07F3\u07F1\x03\x02\x02\x02\u07F3\u07F4\x03\x02\x02\x02\u07F4\u07F7\x03" +
		"\x02\x02\x02\u07F5\u07F3\x03\x02\x02\x02\u07F6\u07EF\x03\x02\x02\x02\u07F7" +
		"\u07FA\x03\x02\x02\x02\u07F8\u07F6\x03\x02\x02\x02\u07F8\u07F9\x03\x02" +
		"\x02\x02\u07F9\u0808\x03\x02\x02\x02\u07FA\u07F8\x03\x02\x02\x02\u07FB" +
		"\u07FC\t\x07\x02\x02\u07FC\u0804\x05\x9EP\x02\u07FD\u07FF\x07p\x02\x02" +
		"\u07FE\u07FD\x03\x02\x02\x02\u07FF\u0802\x03\x02\x02\x02\u0800\u07FE\x03" +
		"\x02\x02\x02\u0800\u0801\x03\x02\x02\x02\u0801\u0803\x03\x02\x02\x02\u0802" +
		"\u0800\x03\x02\x02\x02\u0803\u0805\x05\x92J\x02\u0804\u0800\x03\x02\x02" +
		"\x02\u0805\u0806\x03\x02\x02\x02\u0806\u0804\x03\x02\x02\x02\u0806\u0807" +
		"\x03\x02\x02\x02\u0807\u0809\x03\x02\x02\x02\u0808\u07FB\x03\x02\x02\x02" +
		"\u0809\u080A\x03\x02\x02\x02\u080A\u0808\x03\x02\x02\x02\u080A\u080B\x03" +
		"\x02\x02\x02\u080B\u080C\x03\x02\x02\x02\u080C\u0810\t\x07\x02\x02\u080D" +
		"\u080F\x07p\x02\x02\u080E\u080D\x03\x02\x02\x02\u080F\u0812\x03\x02\x02" +
		"\x02\u0810\u080E\x03\x02\x02\x02\u0810\u0811\x03\x02\x02\x02\u0811\u0820" +
		"\x03\x02\x02\x02\u0812\u0810\x03\x02\x02\x02\u0813\u081D\x05L\'\x02\u0814" +
		"\u0816\x07p\x02\x02\u0815\u0814\x03\x02\x02\x02\u0816\u0819\x03\x02\x02" +
		"\x02\u0817\u0815\x03\x02\x02\x02\u0817\u0818\x03\x02\x02\x02\u0818\u081A" +
		"\x03\x02\x02\x02\u0819\u0817\x03\x02\x02\x02\u081A\u081C\x05L\'\x02\u081B" +
		"\u0817\x03\x02\x02\x02\u081C\u081F\x03\x02\x02\x02\u081D\u081B\x03\x02" +
		"\x02\x02\u081D\u081E\x03\x02\x02\x02\u081E\u0821\x03\x02\x02\x02\u081F" +
		"\u081D\x03\x02\x02\x02\u0820\u0813\x03\x02\x02\x02\u0820\u0821\x03\x02" +
		"\x02\x02\u0821\x9D\x03\x02\x02\x02\u0822\u0824\n\b\x02\x02\u0823\u0822" +
		"\x03\x02\x02\x02\u0824\u0825\x03\x02\x02\x02\u0825\u0823\x03\x02\x02\x02" +
		"\u0825\u0826\x03\x02\x02\x02\u0826\x9F\x03\x02\x02\x02\u0827\u0828\x07" +
		"\x81\x02\x02\u0828\u0829\x07n\x02\x02\u0829\u082A\x07[\x02\x02\u082A\xA1" +
		"\x03\x02\x02\x02\u082B\u082D\x05\xA4S\x02\u082C\u082B\x03\x02\x02\x02" +
		"\u082D\u0830\x03\x02\x02\x02\u082E\u082C\x03\x02\x02\x02\u082E\u082F\x03" +
		"\x02\x02\x02\u082F\u0835\x03\x02\x02\x02\u0830\u082E\x03\x02\x02\x02\u0831" +
		"\u0834\x07\xB7\x02\x02\u0832\u0834\x05\xA6T\x02\u0833\u0831\x03\x02\x02" +
		"\x02\u0833\u0832\x03\x02\x02\x02\u0834\u0837\x03\x02\x02\x02\u0835\u0833" +
		"\x03\x02\x02\x02\u0835\u0836\x03\x02\x02\x02\u0836\xA3\x03\x02\x02\x02" +
		"\u0837\u0835\x03\x02\x02\x02\u0838\u0839\t\t\x02\x02\u0839\xA5\x03\x02" +
		"\x02\x02\u083A\u0844\x05\xA8U\x02\u083B\u0844\x05\xE0q\x02\u083C\u0844" +
		"\x05\xAAV\x02\u083D\u0844\x05\xACW\x02\u083E\u0844\x05\xAEX\x02\u083F" +
		"\u0844\x05\xB0Y\x02\u0840\u0844\x05\xB2Z\x02\u0841\u0844\x05\xB4[\x02" +
		"\u0842\u0844\x07\x98\x02\x02\u0843\u083A\x03\x02\x02\x02\u0843\u083B\x03" +
		"\x02\x02\x02\u0843\u083C\x03\x02\x02\x02\u0843\u083D\x03\x02\x02\x02\u0843" +
		"\u083E\x03\x02\x02\x02\u0843\u083F\x03\x02\x02\x02\u0843\u0840\x03\x02" +
		"\x02\x02\u0843\u0841\x03\x02\x02\x02\u0843\u0842\x03\x02\x02\x02\u0844" +
		"\xA7\x03\x02\x02\x02\u0845\u0848\x07\x8F\x02\x02\u0846\u0849\x07H\x02" +
		"\x02\u0847\u0849\x07\xC5\x02\x02\u0848\u0846\x03\x02\x02\x02\u0848\u0847" +
		"\x03\x02\x02\x02\u0848\u0849\x03\x02\x02\x02\u0849\u0854\x03\x02\x02\x02" +
		"\u084A\u084C\x07\xA6\x02\x02\u084B\u084D\x07H\x02\x02\u084C\u084B\x03" +
		"\x02\x02\x02\u084C\u084D\x03\x02\x02\x02\u084D\u0854\x03\x02\x02\x02\u084E" +
		"\u0850\x07\x90\x02\x02\u084F\u0851\x07H\x02\x02\u0850\u084F\x03\x02\x02" +
		"\x02\u0850\u0851\x03\x02\x02\x02\u0851\u0854\x03\x02\x02\x02\u0852\u0854" +
		"\x07\x91\x02\x02\u0853\u0845\x03\x02\x02\x02\u0853\u084A\x03\x02\x02\x02" +
		"\u0853\u084E\x03\x02\x02\x02\u0853\u0852\x03\x02\x02\x02\u0854\xA9\x03" +
		"\x02\x02\x02\u0855\u0858\t\n\x02\x02\u0856\u0857\x07\\\x02\x02\u0857\u0859" +
		"\x07J\x02\x02\u0858\u0856\x03\x02\x02\x02\u0858\u0859\x03\x02\x02\x02" +
		"\u0859\xAB\x03\x02\x02\x02\u085A\u085B\t\v\x02\x02\u085B\xAD\x03\x02\x02" +
		"\x02\u085C\u085D\t\f\x02\x02\u085D\xAF\x03\x02\x02\x02\u085E\u085F\t\r" +
		"\x02\x02\u085F\xB1\x03\x02\x02\x02\u0860\u0861\t\x0E\x02\x02\u0861\xB3" +
		"\x03\x02\x02\x02\u0862\u0863\t\x0F\x02\x02\u0863\xB5\x03\x02\x02\x02\u0864" +
		"\u0865\t\x10\x02\x02\u0865\xB7\x03\x02\x02\x02\u0866\u0867\t\x11\x02\x02" +
		"\u0867\xB9\x03\x02\x02\x02\u0868\u0869\t\x12\x02\x02\u0869\xBB\x03\x02" +
		"\x02\x02\u086A\u086B\t\x13\x02\x02\u086B\xBD\x03\x02\x02\x02\u086C\u086F" +
		"\x07\x9D\x02\x02\u086D\u086E\x07\\\x02\x02\u086E\u0870\x07J\x02\x02\u086F" +
		"\u086D\x03\x02\x02\x02\u086F\u0870\x03\x02\x02\x02\u0870\u0877\x03\x02" +
		"\x02\x02\u0871\u0874\x07\xAF\x02\x02\u0872\u0873\x07\\\x02\x02\u0873\u0875" +
		"\x07J\x02\x02\u0874\u0872\x03\x02\x02\x02\u0874\u0875\x03\x02\x02\x02" +
		"\u0875\u0877\x03\x02\x02\x02\u0876\u086C\x03\x02\x02\x02\u0876\u0871\x03" +
		"\x02\x02\x02\u0877\xBF\x03\x02\x02\x02\u0878\u0879\t\x14\x02\x02\u0879" +
		"\xC1\x03\x02\x02\x02\u087A\u087B\x05\xB6\\\x02\u087B\u087C\x07\\\x02\x02" +
		"\u087C\u087D\x05\xE8u\x02\u087D\u087E\x07[\x02\x02\u087E\u0881\x03\x02" +
		"\x02\x02\u087F\u0881\x07l\x02\x02\u0880\u087A\x03\x02\x02\x02\u0880\u087F" +
		"\x03\x02\x02\x02\u0881\xC3\x03\x02\x02\x02\u0882\u0883\x05\xB8]\x02\u0883" +
		"\u0884\x07\\\x02\x02\u0884\u0885\x05\xE8u\x02\u0885\u088A\x07[\x02\x02" +
		"\u0886\u0887\x07\x83\x02\x02\u0887\u0888\x05\u011E\x90\x02\u0888\u0889" +
		"\x07[\x02\x02\u0889\u088B\x03\x02\x02\x02\u088A\u0886\x03\x02\x02\x02" +
		"\u088A\u088B\x03\x02\x02\x02\u088B\xC5\x03\x02\x02\x02\u088C\u088D\x05" +
		"\xBC_\x02\u088D\u088E\x07\\\x02\x02\u088E\u088F\x05\xE8u\x02\u088F\u0894" +
		"\x07[\x02\x02\u0890\u0891\x07\x83\x02\x02\u0891\u0892\x05\u011E\x90\x02" +
		"\u0892\u0893\x07[\x02\x02\u0893\u0895\x03\x02\x02\x02\u0894\u0890\x03" +
		"\x02\x02\x02\u0894\u0895\x03\x02\x02\x02\u0895\xC7\x03\x02\x02\x02\u0896" +
		"\u0897\x05\xBA^\x02\u0897\u089A\x07\\\x02\x02\u0898\u089B\x05\xE8u\x02" +
		"\u0899\u089B\x05\xE6t\x02\u089A\u0898\x03\x02\x02\x02\u089A\u0899\x03" +
		"\x02\x02\x02\u089B\u089C\x03\x02\x02\x02\u089C\u08A1\x07[\x02\x02\u089D" +
		"\u089E\x07\x83\x02\x02\u089E\u089F\x05\u011E\x90\x02\u089F\u08A0\x07[" +
		"\x02\x02\u08A0\u08A2\x03\x02\x02\x02\u08A1\u089D\x03\x02\x02\x02\u08A1" +
		"\u08A2\x03\x02\x02\x02\u08A2\xC9\x03\x02\x02\x02\u08A3\u08A7\x05\xCCg" +
		"\x02\u08A4\u08A6\x05\xE4s\x02\u08A5\u08A4\x03\x02\x02\x02\u08A6\u08A9" +
		"\x03\x02\x02\x02\u08A7\u08A5\x03\x02\x02\x02\u08A7\u08A8\x03\x02\x02\x02" +
		"\u08A8\xCB\x03\x02\x02\x02\u08A9\u08A7\x03\x02\x02\x02\u08AA\u08AB\x05" +
		"\xC0a\x02\u08AB\u08AF\x07\\\x02\x02\u08AC\u08AE\x07\x04\x02\x02\u08AD" +
		"\u08AC\x03\x02\x02\x02\u08AE\u08B1\x03\x02\x02\x02\u08AF\u08AD\x03\x02" +
		"\x02\x02\u08AF\u08B0\x03\x02\x02\x02\u08B0\u08B2\x03\x02\x02\x02\u08B1" +
		"\u08AF\x03\x02\x02\x02\u08B2\u08B3\x05\xE8u\x02\u08B3\u08B4\x07[\x02\x02" +
		"\u08B4\xCD\x03\x02\x02\x02\u08B5\u08B9\x05\xD0i\x02\u08B6\u08B8\x05\xE4" +
		"s\x02\u08B7\u08B6\x03\x02\x02\x02\u08B8\u08BB\x03\x02\x02\x02\u08B9\u08B7" +
		"\x03\x02\x02\x02\u08B9\u08BA\x03\x02\x02\x02\u08BA\xCF\x03\x02\x02\x02" +
		"\u08BB\u08B9\x03\x02\x02\x02\u08BC\u08BD\x05\xBE`\x02\u08BD\u08BE\x07" +
		"\\\x02\x02\u08BE\u08BF\x05\xE8u\x02\u08BF\u08C4\x07[\x02\x02\u08C0\u08C1" +
		"\x07\x83\x02\x02\u08C1\u08C2\x05\u011E\x90\x02\u08C2\u08C3\x07[\x02\x02" +
		"\u08C3\u08C5\x03\x02\x02\x02\u08C4\u08C0\x03\x02\x02\x02\u08C4\u08C5\x03" +
		"\x02\x02\x02\u08C5\xD1\x03\x02\x02\x02\u08C6\u08CA\x05\xD4k\x02\u08C7" +
		"\u08C9\x05\xD8m\x02\u08C8\u08C7\x03\x02\x02\x02\u08C9\u08CC\x03\x02\x02" +
		"\x02\u08CA\u08C8\x03\x02\x02\x02\u08CA\u08CB\x03\x02\x02\x02\u08CB\u08CF" +
		"\x03\x02\x02\x02\u08CC\u08CA\x03\x02\x02\x02\u08CD\u08CE\x07p\x02\x02" +
		"\u08CE\u08D0\x07\x85\x02\x02\u08CF\u08CD\x03\x02\x02\x02\u08CF\u08D0\x03" +
		"\x02\x02\x02\u08D0\xD3\x03\x02\x02\x02\u08D1\u08D2\x05\xD6l\x02\u08D2" +
		"\u08D6\x07\\\x02\x02\u08D3\u08D5\x07\x04\x02\x02\u08D4\u08D3\x03\x02\x02" +
		"\x02\u08D5\u08D8\x03\x02\x02\x02\u08D6\u08D4\x03\x02\x02\x02\u08D6\u08D7" +
		"\x03\x02\x02\x02\u08D7\u08D9\x03\x02\x02\x02\u08D8\u08D6\x03\x02\x02\x02" +
		"\u08D9\u08DA\x05\xE8u\x02\u08DA\u08DB\x07[\x02\x02\u08DB\xD5\x03\x02\x02" +
		"\x02\u08DC\u08DF\x07\x9A\x02\x02\u08DD\u08E0\x07H\x02\x02\u08DE\u08E0" +
		"\x07\xC5\x02\x02\u08DF\u08DD\x03\x02\x02\x02\u08DF\u08DE\x03\x02\x02\x02" +
		"\u08DF\u08E0\x03\x02\x02\x02\u08E0\u08EB\x03\x02\x02\x02\u08E1\u08E3\x07" +
		"\xAE\x02\x02\u08E2\u08E4\x07H\x02\x02\u08E3\u08E2\x03\x02\x02\x02\u08E3" +
		"\u08E4\x03\x02\x02\x02\u08E4\u08EB\x03\x02\x02\x02\u08E5\u08E7\x07\x9B" +
		"\x02\x02\u08E6\u08E8\x07H\x02\x02\u08E7\u08E6\x03\x02\x02\x02\u08E7\u08E8" +
		"\x03\x02\x02\x02\u08E8\u08EB\x03\x02\x02\x02\u08E9\u08EB\x07\x9C\x02\x02" +
		"\u08EA\u08DC\x03\x02\x02\x02\u08EA\u08E1\x03\x02\x02\x02\u08EA\u08E5\x03" +
		"\x02\x02\x02\u08EA\u08E9\x03\x02\x02\x02\u08EB\xD7\x03\x02\x02\x02\u08EC" +
		"\u08ED\x07\x82\x02\x02\u08ED\u08EE\x07\\\x02\x02\u08EE\u08EF\x05\xE8u" +
		"\x02\u08EF\u08F0\x07[\x02\x02\u08F0\u08FE\x03\x02\x02\x02\u08F1\u08F2" +
		"\t\x15\x02\x02\u08F2\u08F3\x07\\\x02\x02\u08F3\u08F4\x07n\x02\x02\u08F4" +
		"\u08FE\x07[\x02\x02\u08F5\u08F9\t\x16\x02\x02\u08F6\u08F8\v\x02\x02\x02" +
		"\u08F7\u08F6\x03\x02\x02\x02\u08F8\u08FB\x03\x02\x02\x02\u08F9\u08FA\x03" +
		"\x02\x02\x02\u08F9\u08F7\x03\x02\x02\x02\u08FA\u08FC\x03\x02\x02\x02\u08FB" +
		"\u08F9\x03\x02\x02\x02\u08FC\u08FE\x07[\x02\x02\u08FD\u08EC\x03\x02\x02" +
		"\x02\u08FD\u08F1\x03\x02\x02\x02\u08FD\u08F5\x03\x02\x02\x02\u08FE\xD9" +
		"\x03\x02\x02\x02\u08FF\u0900\x07\x82\x02\x02\u0900\u0901\x07\\\x02\x02" +
		"\u0901\u0902\x05\xE8u\x02\u0902\u0903\x07[\x02\x02\u0903\u0911\x03\x02" +
		"\x02\x02\u0904\u0905\t\x15\x02\x02\u0905\u0906\x07\\\x02\x02\u0906\u0907" +
		"\x07n\x02\x02\u0907\u0911\x07[\x02\x02\u0908\u090C\t\x16\x02\x02\u0909" +
		"\u090B\v\x02\x02\x02\u090A\u0909\x03\x02\x02\x02\u090B\u090E\x03\x02\x02" +
		"\x02\u090C\u090D\x03\x02\x02\x02\u090C\u090A\x03\x02\x02\x02\u090D\u090F" +
		"\x03\x02\x02\x02\u090E\u090C\x03\x02\x02\x02\u090F\u0911\x07[\x02\x02" +
		"\u0910\u08FF\x03\x02\x02\x02\u0910\u0904\x03\x02\x02\x02\u0910\u0908\x03" +
		"\x02\x02\x02\u0911\xDB\x03\x02\x02\x02\u0912\u0916\x05\xDEp\x02\u0913" +
		"\u0915\x05\xE4s\x02\u0914\u0913\x03\x02\x02\x02\u0915\u0918\x03\x02\x02" +
		"\x02\u0916\u0914\x03\x02\x02\x02\u0916\u0917\x03\x02\x02\x02\u0917\xDD" +
		"\x03\x02\x02\x02\u0918\u0916\x03\x02\x02\x02\u0919\u091A\x05\xE2r\x02" +
		"\u091A\u091B\x07\\\x02\x02\u091B\u091C\x05\xE8u\x02\u091C\u0921\x07[\x02" +
		"\x02\u091D\u091E\x07\x83\x02\x02\u091E\u091F\x05\u011E\x90\x02\u091F\u0920" +
		"\x07[\x02\x02\u0920\u0922\x03\x02\x02\x02\u0921\u091D\x03\x02\x02\x02" +
		"\u0921\u0922\x03\x02\x02\x02\u0922\xDF\x03\x02\x02\x02\u0923\u0926\x07" +
		"\x8E\x02\x02\u0924\u0925\x07\\\x02\x02\u0925\u0927\x07I\x02\x02\u0926" +
		"\u0924\x03\x02\x02\x02\u0926\u0927\x03\x02\x02\x02\u0927\u092E\x03\x02" +
		"\x02\x02\u0928\u092B\x07\xA5\x02\x02\u0929\u092A\x07\\\x02\x02\u092A\u092C" +
		"\x07I\x02\x02\u092B\u0929\x03\x02\x02\x02\u092B\u092C\x03\x02\x02\x02" +
		"\u092C\u092E\x03\x02\x02\x02\u092D\u0923\x03\x02\x02\x02\u092D\u0928\x03" +
		"\x02\x02\x02\u092E\xE1\x03\x02\x02\x02\u092F\u0932\x07\x99\x02\x02\u0930" +
		"\u0931\x07\\\x02\x02\u0931\u0933\x07I\x02\x02\u0932\u0930\x03\x02\x02" +
		"\x02\u0932\u0933\x03\x02\x02\x02\u0933\u093A\x03\x02\x02\x02\u0934\u0937" +
		"\x07\xAD\x02\x02\u0935\u0936\x07\\\x02\x02\u0936\u0938\x07I\x02\x02\u0937" +
		"\u0935\x03\x02\x02\x02\u0937\u0938\x03\x02\x02\x02\u0938\u093A\x03\x02" +
		"\x02\x02\u0939\u092F\x03\x02\x02\x02\u0939\u0934\x03\x02\x02\x02\u093A" +
		"\xE3\x03\x02\x02\x02\u093B\u093C\x07T\x02\x02\u093C\u093F\x05\u0114\x8B" +
		"\x02\u093D\u093F\x07\x82\x02\x02\u093E\u093B\x03\x02\x02\x02\u093E\u093D" +
		"\x03\x02\x02\x02\u093F\u0940\x03\x02\x02\x02\u0940\u0944\x07\\\x02\x02" +
		"\u0941\u0943\x07\x04\x02\x02\u0942\u0941\x03\x02\x02\x02\u0943\u0946\x03" +
		"\x02\x02\x02\u0944\u0942\x03\x02\x02\x02\u0944\u0945\x03\x02\x02\x02\u0945" +
		"\u0949\x03\x02\x02\x02\u0946\u0944\x03\x02\x02\x02\u0947\u094A\x05\u0114" +
		"\x8B\x02\u0948\u094A\x07p\x02\x02\u0949\u0947\x03\x02\x02\x02\u0949\u0948" +
		"\x03\x02\x02\x02\u094A\u094B\x03\x02\x02\x02\u094B\u0949\x03\x02\x02\x02" +
		"\u094B\u094C\x03\x02\x02\x02\u094C\u094D\x03\x02\x02\x02\u094D\u095B\x07" +
		"[\x02\x02\u094E\u094F\t\x15\x02\x02\u094F\u0950\x07\\\x02\x02\u0950\u0951" +
		"\x07n\x02\x02\u0951\u095B\x07[\x02\x02\u0952\u0956\t\x16\x02\x02\u0953" +
		"\u0955\v\x02\x02\x02\u0954\u0953\x03\x02\x02\x02\u0955\u0958\x03\x02\x02" +
		"\x02\u0956\u0957\x03\x02\x02\x02\u0956\u0954\x03\x02\x02\x02\u0957\u0959" +
		"\x03\x02\x02\x02\u0958\u0956\x03\x02\x02\x02\u0959\u095B\x07[\x02\x02" +
		"\u095A\u093E\x03\x02\x02\x02\u095A\u094E\x03\x02\x02\x02\u095A\u0952\x03" +
		"\x02\x02\x02\u095B\xE5\x03\x02\x02\x02\u095C\u095D\x07\xC4\x02\x02\u095D" +
		"\u095E\x07_\x02\x02\u095E\u095F\x07n\x02\x02\u095F\xE7\x03\x02\x02\x02" +
		"\u0960\u0961\x07\xC7\x02\x02\u0961\xE9\x03\x02\x02\x02\u0962\u0963\x07" +
		"Z\x02\x02\u0963\u096B\x07[\x02\x02\u0964\u0966\x07\x04\x02\x02\u0965\u0964" +
		"\x03\x02\x02\x02\u0966\u0969\x03\x02\x02\x02\u0967\u0965\x03\x02\x02\x02" +
		"\u0967\u0968\x03\x02\x02\x02\u0968\u096A\x03\x02\x02\x02\u0969\u0967\x03" +
		"\x02\x02\x02\u096A\u096C\x05\xECw\x02\u096B\u0967\x03\x02\x02\x02\u096B" +
		"\u096C\x03\x02\x02\x02\u096C\u0981\x03\x02\x02\x02\u096D\u096E\x07Z\x02" +
		"\x02\u096E\u0973\x05\u0114\x8B\x02\u096F\u0972\x07\\\x02\x02\u0970\u0972" +
		"\x05\u011E\x90\x02\u0971\u096F\x03\x02\x02\x02\u0971\u0970\x03\x02\x02" +
		"\x02\u0972\u0975\x03\x02\x02\x02\u0973\u0971\x03\x02\x02\x02\u0973\u0974" +
		"\x03\x02\x02\x02\u0974\u0976\x03\x02\x02\x02\u0975\u0973\x03\x02\x02\x02" +
		"\u0976\u097E\x07[\x02\x02\u0977\u0979\x07\x04\x02\x02\u0978\u0977\x03" +
		"\x02\x02\x02\u0979\u097C\x03\x02\x02\x02\u097A\u0978\x03\x02\x02\x02\u097A" +
		"\u097B\x03\x02\x02\x02\u097B\u097D\x03\x02\x02\x02\u097C\u097A\x03\x02" +
		"\x02\x02\u097D\u097F\x05\xECw\x02\u097E\u097A\x03\x02\x02\x02\u097E\u097F" +
		"\x03\x02\x02\x02\u097F\u0981\x03\x02\x02\x02\u0980\u0962\x03\x02\x02\x02" +
		"\u0980\u096D\x03\x02\x02\x02\u0981\xEB\x03\x02\x02\x02\u0982\u0983\x07" +
		"Z\x02\x02\u0983\u0988\x05\u0114\x8B\x02\u0984\u0987\x07\\\x02\x02\u0985" +
		"\u0987\x05\u011E\x90\x02\u0986\u0984\x03\x02\x02\x02\u0986\u0985\x03\x02" +
		"\x02\x02\u0987\u098A\x03\x02\x02\x02\u0988\u0986\x03\x02\x02\x02\u0988" +
		"\u0989\x03\x02\x02\x02\u0989\u098B\x03\x02\x02\x02\u098A\u0988\x03\x02" +
		"\x02\x02\u098B\u098C\x07[\x02\x02\u098C\xED\x03\x02\x02\x02\u098D\u098F" +
		"\x07N\x02\x02\u098E\u0990\x05\u0114\x8B\x02\u098F\u098E\x03\x02\x02\x02" +
		"\u098F\u0990\x03\x02\x02\x02\u0990\u0991\x03\x02\x02\x02\u0991\u0998\x07" +
		"[\x02\x02\u0992\u0994\x07O\x02\x02\u0993\u0995\x05\u0114\x8B\x02\u0994" +
		"\u0993\x03\x02\x02\x02\u0994\u0995\x03\x02\x02\x02\u0995\u0996\x03\x02" +
		"\x02\x02\u0996\u0998\x07[\x02\x02\u0997\u098D\x03\x02\x02\x02\u0997\u0992" +
		"\x03\x02\x02\x02\u0998\xEF\x03\x02\x02\x02\u0999\u09A1\x07|\x02\x02\u099A" +
		"\u09A1\x07z\x02\x02\u099B\u099D\x07{\x02\x02\u099C\u099E\x07q\x02\x02" +
		"\u099D\u099C\x03\x02\x02\x02\u099D\u099E\x03\x02\x02\x02\u099E\u099F\x03" +
		"\x02\x02\x02\u099F\u09A1\x07\x02\x02\x03\u09A0\u0999\x03\x02\x02\x02\u09A0" +
		"\u099A\x03\x02\x02\x02\u09A0\u099B\x03\x02\x02\x02\u09A1\xF1\x03\x02\x02" +
		"\x02\u09A2\u09A4\x07\xA4\x02\x02\u09A3\u09A5\x05\u0114\x8B\x02\u09A4\u09A3" +
		"\x03\x02\x02\x02\u09A4\u09A5\x03\x02\x02\x02\u09A5\u09BB\x03\x02\x02\x02" +
		"\u09A6\u09B0\x05\u0114\x8B\x02\u09A7\u09AB\x07p\x02\x02\u09A8\u09AA\x07" +
		"\x04\x02\x02\u09A9\u09A8\x03\x02\x02\x02\u09AA\u09AD\x03\x02\x02\x02\u09AB" +
		"\u09A9\x03\x02\x02\x02\u09AB\u09AC\x03\x02\x02\x02\u09AC\u09AF\x03\x02" +
		"\x02\x02\u09AD\u09AB\x03\x02\x02\x02\u09AE\u09A7\x03\x02\x02\x02\u09AF" +
		"\u09B2\x03\x02\x02\x02\u09B0\u09AE\x03\x02\x02\x02\u09B0\u09B1\x03\x02" +
		"\x02\x02\u09B1\u09B6\x03\x02\x02\x02\u09B2\u09B0\x03\x02\x02\x02\u09B3" +
		"\u09B5\x07p\x02\x02\u09B4\u09B3\x03\x02\x02\x02\u09B5\u09B8\x03\x02\x02" +
		"\x02\u09B6\u09B4\x03\x02\x02\x02\u09B6\u09B7\x03\x02\x02\x02\u09B7\u09BA" +
		"\x03\x02\x02\x02\u09B8\u09B6\x03\x02\x02\x02\u09B9\u09A6\x03\x02\x02\x02" +
		"\u09BA\u09BD\x03\x02\x02\x02\u09BB\u09B9\x03\x02\x02\x02\u09BB\u09BC\x03" +
		"\x02\x02\x02\u09BC\u09BE\x03\x02\x02\x02\u09BD\u09BB\x03\x02\x02\x02\u09BE" +
		"\u09CA\x07[\x02\x02\u09BF\u09C5\x07\xA4\x02\x02\u09C0\u09C4\x05\u0114" +
		"\x8B\x02\u09C1\u09C4\x07p\x02\x02\u09C2\u09C4\x07\x04\x02\x02\u09C3\u09C0" +
		"\x03\x02\x02\x02\u09C3\u09C1\x03\x02\x02\x02\u09C3\u09C2\x03\x02\x02\x02" +
		"\u09C4\u09C7\x03\x02\x02\x02\u09C5\u09C3\x03\x02\x02\x02\u09C5\u09C6\x03" +
		"\x02\x02\x02\u09C6\u09C8\x03\x02\x02\x02\u09C7\u09C5\x03\x02\x02\x02\u09C8" +
		"\u09CA\x07\x02\x02\x03\u09C9\u09A2\x03\x02\x02\x02\u09C9\u09BF\x03\x02" +
		"\x02\x02\u09CA\xF3\x03\x02\x02\x02\u09CB\u09D0\x07t\x02\x02\u09CC\u09D1" +
		"\x05\u0114\x8B\x02\u09CD\u09D1\x07\\\x02\x02\u09CE\u09D1\x07\xC7\x02\x02" +
		"\u09CF\u09D1\x07p\x02\x02\u09D0\u09CC\x03\x02\x02\x02\u09D0\u09CD\x03" +
		"\x02\x02\x02\u09D0\u09CE\x03\x02\x02\x02\u09D0\u09CF\x03\x02\x02\x02\u09D1" +
		"\u09D2\x03\x02\x02\x02\u09D2\u09D0\x03\x02\x02\x02\u09D2\u09D3\x03\x02" +
		"\x02\x02\u09D3\u09D4\x03\x02\x02\x02\u09D4\u09E2\x07[\x02\x02\u09D5\u09DD" +
		"\x07t\x02\x02\u09D6\u09DC\x05\u0114\x8B\x02\u09D7\u09DC\x07\\\x02\x02" +
		"\u09D8\u09DC\x07\xC7\x02\x02\u09D9\u09DC\x07p\x02\x02\u09DA\u09DC\x07" +
		"\x04\x02\x02\u09DB\u09D6\x03\x02\x02\x02\u09DB\u09D7\x03\x02\x02\x02\u09DB" +
		"\u09D8\x03\x02\x02\x02\u09DB\u09D9\x03\x02\x02\x02\u09DB\u09DA\x03\x02" +
		"\x02\x02\u09DC\u09DF\x03\x02\x02\x02\u09DD\u09DB\x03\x02\x02\x02\u09DD" +
		"\u09DE\x03\x02\x02\x02\u09DE\u09E0\x03\x02\x02\x02\u09DF\u09DD\x03\x02" +
		"\x02\x02\u09E0\u09E2\x07\x02\x02\x03\u09E1\u09CB\x03\x02\x02\x02\u09E1" +
		"\u09D5\x03\x02\x02\x02\u09E2\xF5\x03\x02\x02\x02\u09E3\u09E4\x07s\x02" +
		"\x02\u09E4\u09E5\x05\u0114\x8B\x02\u09E5\u09E6\x07[\x02\x02\u09E6\xF7" +
		"\x03\x02\x02\x02\u09E7\u09EB\x07\x8B\x02\x02\u09E8\u09EC\x05\u0114\x8B" +
		"\x02\u09E9\u09EC\x07\\\x02\x02\u09EA\u09EC\x07p\x02\x02\u09EB\u09E8\x03" +
		"\x02\x02\x02\u09EB\u09E9\x03\x02\x02\x02\u09EB\u09EA\x03\x02\x02\x02\u09EC" +
		"\u09ED\x03\x02\x02\x02\u09ED\u09EB\x03\x02\x02\x02\u09ED\u09EE\x03\x02" +
		"\x02\x02\u09EE\u09EF\x03\x02\x02\x02\u09EF\u09F1\x07[\x02\x02\u09F0\u09F2" +
		"\x05\xFA~\x02\u09F1\u09F0\x03\x02\x02\x02\u09F1\u09F2\x03\x02\x02\x02" +
		"\u09F2\xF9\x03\x02\x02\x02\u09F3\u09F7\x07\x8B\x02\x02\u09F4\u09F8\x05" +
		"\u0114\x8B\x02\u09F5\u09F8\x07\\\x02\x02\u09F6\u09F8\x07p\x02\x02\u09F7" +
		"\u09F4\x03\x02\x02\x02\u09F7\u09F5\x03\x02\x02\x02\u09F7\u09F6\x03\x02" +
		"\x02\x02\u09F8\u09F9\x03\x02\x02\x02\u09F9\u09F7\x03\x02\x02\x02\u09F9" +
		"\u09FA\x03\x02\x02\x02\u09FA\u09FB\x03\x02\x02\x02\u09FB\u09FC\x07[\x02" +
		"\x02\u09FC\xFB\x03\x02\x02\x02\u09FD\u09FF\x07R\x02\x02\u09FE\u0A00\x05" +
		"\u0114\x8B\x02\u09FF\u09FE\x03\x02\x02\x02\u09FF\u0A00\x03\x02\x02\x02" +
		"\u0A00\u0A16\x03\x02\x02\x02\u0A01\u0A0B\x05\u0114\x8B\x02\u0A02\u0A06" +
		"\x07p\x02\x02\u0A03\u0A05\x07\x04\x02\x02\u0A04\u0A03\x03\x02\x02\x02" +
		"\u0A05\u0A08\x03\x02\x02\x02\u0A06\u0A04\x03\x02\x02\x02\u0A06\u0A07\x03" +
		"\x02\x02\x02\u0A07\u0A0A\x03\x02\x02\x02\u0A08\u0A06\x03\x02\x02\x02\u0A09" +
		"\u0A02\x03\x02\x02\x02\u0A0A\u0A0D\x03\x02\x02\x02\u0A0B\u0A09\x03\x02" +
		"\x02\x02\u0A0B\u0A0C\x03\x02\x02\x02\u0A0C\u0A11\x03\x02\x02\x02\u0A0D" +
		"\u0A0B\x03\x02\x02\x02\u0A0E\u0A10\x07p\x02\x02\u0A0F\u0A0E\x03\x02\x02" +
		"\x02\u0A10\u0A13\x03\x02\x02\x02\u0A11\u0A0F\x03\x02\x02\x02\u0A11\u0A12" +
		"\x03\x02\x02\x02\u0A12\u0A15\x03\x02\x02\x02\u0A13\u0A11\x03\x02\x02\x02" +
		"\u0A14\u0A01\x03\x02\x02\x02\u0A15\u0A18\x03\x02\x02\x02\u0A16\u0A14\x03" +
		"\x02\x02\x02\u0A16\u0A17\x03\x02\x02\x02\u0A17\u0A19\x03\x02\x02\x02\u0A18" +
		"\u0A16\x03\x02\x02\x02\u0A19\u0A20\x07[\x02\x02\u0A1A\u0A1C\x07R\x02\x02" +
		"\u0A1B\u0A1D\x05\u0114\x8B\x02\u0A1C\u0A1B\x03\x02\x02\x02\u0A1C\u0A1D" +
		"\x03\x02\x02\x02\u0A1D\u0A1E\x03\x02\x02\x02\u0A1E\u0A20\x07\x02\x02\x03" +
		"\u0A1F\u09FD\x03\x02\x02\x02\u0A1F\u0A1A\x03\x02\x02\x02\u0A20\xFD\x03" +
		"\x02\x02\x02\u0A21\u0A23\x07S\x02\x02\u0A22\u0A24\n\x17\x02\x02\u0A23" +
		"\u0A22\x03\x02\x02\x02\u0A24\u0A25\x03\x02\x02\x02\u0A25\u0A23\x03\x02" +
		"\x02\x02\u0A25\u0A26\x03\x02\x02\x02\u0A26\u0A27\x03\x02\x02\x02\u0A27" +
		"\u0A28\x07[\x02\x02\u0A28\xFF\x03\x02\x02\x02\u0A29\u0A2C\x07Y\x02\x02" +
		"\u0A2A\u0A2D\x05\u0114\x8B\x02\u0A2B\u0A2D\x07p\x02\x02\u0A2C\u0A2A\x03" +
		"\x02\x02\x02\u0A2C\u0A2B\x03\x02\x02\x02\u0A2D\u0A2E\x03\x02\x02\x02\u0A2E" +
		"\u0A2C\x03\x02\x02\x02\u0A2E\u0A2F\x03\x02\x02\x02\u0A2F\u0A30\x03\x02" +
		"\x02\x02\u0A30\u0A36\x07[\x02\x02\u0A31\u0A32\x07Y\x02\x02\u0A32\u0A33" +
		"\x05\u0114\x8B\x02\u0A33\u0A34\x07\x02\x02\x03\u0A34\u0A36\x03\x02\x02" +
		"\x02\u0A35\u0A29\x03\x02\x02\x02\u0A35\u0A31\x03\x02\x02\x02\u0A36\u0101" +
		"\x03\x02\x02\x02\u0A37\u0A38\x07\x7F\x02\x02\u0A38\u0A39\x05\u0114\x8B" +
		"\x02\u0A39\u0A3A\x07[\x02\x02\u0A3A\u0A40\x03\x02\x02\x02\u0A3B\u0A3C" +
		"\x07\x80\x02\x02\u0A3C\u0A3D\x05\u0114\x8B\x02\u0A3D\u0A3E\x07[\x02\x02" +
		"\u0A3E\u0A40\x03\x02\x02\x02\u0A3F\u0A37\x03\x02\x02\x02\u0A3F\u0A3B\x03" +
		"\x02\x02\x02\u0A40\u0103\x03\x02\x02\x02\u0A41\u0A42\x07w\x02\x02\u0A42" +
		"\u0A43\x07\\\x02\x02\u0A43\u0A44\x07n\x02\x02\u0A44\u0A4B\x07[\x02\x02" +
		"\u0A45\u0A46\x07w\x02\x02\u0A46\u0A47\x07\\\x02\x02\u0A47\u0A48\x05\u0114" +
		"\x8B\x02\u0A48\u0A49\x07[\x02\x02\u0A49\u0A4B\x03\x02\x02\x02\u0A4A\u0A41" +
		"\x03\x02\x02\x02\u0A4A\u0A45\x03\x02\x02\x02\u0A4B\u0105\x03\x02\x02\x02" +
		"\u0A4C\u0A4D\x07\x89\x02\x02\u0A4D\u0A4E\x05\u0114\x8B\x02\u0A4E\u0A4F" +
		"\x07[\x02\x02\u0A4F\u0107\x03\x02\x02\x02\u0A50\u0A51\x07\x8A\x02\x02" +
		"\u0A51\u0A52\x05\u0114\x8B\x02\u0A52\u0A53\x07[\x02\x02\u0A53\u0109\x03" +
		"\x02\x02\x02\u0A54\u0A5E\x05\u010C\x87\x02\u0A55\u0A57\x07p\x02\x02\u0A56" +
		"\u0A55\x03\x02\x02\x02\u0A57\u0A5A\x03\x02\x02\x02\u0A58\u0A56\x03\x02" +
		"\x02\x02\u0A58\u0A59\x03\x02\x02\x02\u0A59\u0A5B\x03\x02\x02\x02\u0A5A" +
		"\u0A58\x03\x02\x02\x02\u0A5B\u0A5D\x05\u010C\x87\x02\u0A5C\u0A58\x03\x02" +
		"\x02\x02\u0A5D\u0A60\x03\x02\x02\x02\u0A5E\u0A5C\x03\x02\x02\x02\u0A5E" +
		"\u0A5F\x03\x02\x02\x02\u0A5F\u010B\x03\x02\x02\x02\u0A60\u0A5E\x03\x02" +
		"\x02\x02\u0A61\u0A62\x07T\x02\x02\u0A62\u0A63\x05\u0114\x8B\x02\u0A63" +
		"\u0A64\t\x18\x02\x02\u0A64\u0A6A\x05\u0114\x8B\x02\u0A65\u0A69\x07p\x02" +
		"\x02\u0A66\u0A69\x07\\\x02\x02\u0A67\u0A69\x05\u0114\x8B\x02\u0A68\u0A65" +
		"\x03\x02\x02\x02\u0A68\u0A66\x03\x02\x02\x02\u0A68\u0A67\x03\x02\x02\x02" +
		"\u0A69\u0A6C\x03\x02\x02\x02\u0A6A\u0A68\x03\x02\x02\x02\u0A6A\u0A6B\x03" +
		"\x02\x02\x02\u0A6B\u0A6D\x03\x02\x02\x02\u0A6C\u0A6A\x03\x02\x02\x02\u0A6D" +
		"\u0A6E\x07[\x02\x02\u0A6E\u0A78\x03\x02\x02\x02\u0A6F\u0A73\x07\x88\x02" +
		"\x02\u0A70\u0A72\v\x02\x02\x02\u0A71\u0A70\x03\x02\x02\x02\u0A72\u0A75" +
		"\x03\x02\x02\x02\u0A73\u0A74\x03\x02\x02\x02\u0A73\u0A71\x03\x02\x02\x02" +
		"\u0A74\u0A76\x03\x02\x02\x02\u0A75\u0A73\x03\x02\x02\x02\u0A76\u0A78\x07" +
		"[\x02\x02\u0A77\u0A61\x03\x02\x02\x02\u0A77\u0A6F\x03\x02\x02\x02\u0A78" +
		"\u010D\x03\x02\x02\x02\u0A79\u0A7D\x07K\x02\x02\u0A7A\u0A7E\x05\u0114" +
		"\x8B\x02\u0A7B\u0A7E\x07\\\x02\x02\u0A7C\u0A7E\x07p\x02\x02\u0A7D\u0A7A" +
		"\x03\x02\x02\x02\u0A7D\u0A7B\x03\x02\x02\x02\u0A7D\u0A7C\x03\x02\x02\x02" +
		"\u0A7E\u0A7F\x03\x02\x02\x02\u0A7F\u0A7D\x03\x02\x02\x02\u0A7F\u0A80\x03" +
		"\x02\x02\x02\u0A80\u0A81\x03\x02\x02\x02\u0A81\u0A8D\x07[\x02\x02\u0A82" +
		"\u0A88\x07K\x02\x02";
	private static readonly _serializedATNSegment5: string =
		"\u0A83\u0A87\x05\u0114\x8B\x02\u0A84\u0A87\x07\\\x02\x02\u0A85\u0A87\x07" +
		"p\x02\x02\u0A86\u0A83\x03\x02\x02\x02\u0A86\u0A84\x03\x02\x02\x02\u0A86" +
		"\u0A85\x03\x02\x02\x02\u0A87\u0A8A\x03\x02\x02\x02\u0A88\u0A86\x03\x02" +
		"\x02\x02\u0A88\u0A89\x03\x02\x02\x02\u0A89\u0A8B\x03\x02\x02\x02\u0A8A" +
		"\u0A88\x03\x02\x02\x02\u0A8B\u0A8D\x07\x02\x02\x03\u0A8C\u0A79\x03\x02" +
		"\x02\x02\u0A8C\u0A82\x03\x02\x02\x02\u0A8D\u010F\x03\x02\x02\x02\u0A8E" +
		"\u0A90\x07P\x02\x02\u0A8F\u0A91\x05\u0114\x8B\x02\u0A90\u0A8F\x03\x02" +
		"\x02\x02\u0A90\u0A91\x03\x02\x02\x02\u0A91\u0A92\x03\x02\x02\x02\u0A92" +
		"\u0A93\x07[\x02\x02\u0A93\u0111\x03\x02\x02\x02\u0A94\u0A96\x05\u0114" +
		"\x8B\x02\u0A95\u0A97\x07p\x02\x02\u0A96\u0A95\x03\x02\x02\x02\u0A96\u0A97" +
		"\x03\x02\x02\x02\u0A97\u0A99\x03\x02\x02\x02\u0A98\u0A94\x03\x02\x02\x02" +
		"\u0A99\u0A9A\x03\x02\x02\x02\u0A9A\u0A98\x03\x02\x02\x02\u0A9A\u0A9B\x03" +
		"\x02\x02\x02\u0A9B\u0113\x03\x02\x02\x02\u0A9C\u0AA3\x07o\x02\x02\u0A9D" +
		"\u0A9F\x07\x04\x02\x02\u0A9E\u0A9D\x03\x02\x02\x02\u0A9F\u0AA0\x03\x02" +
		"\x02\x02\u0AA0\u0A9E\x03\x02\x02\x02\u0AA0\u0AA1\x03\x02\x02\x02\u0AA1" +
		"\u0AA2\x03\x02\x02\x02\u0AA2\u0AA4\x07n\x02\x02\u0AA3\u0A9E\x03\x02\x02" +
		"\x02\u0AA3\u0AA4\x03\x02\x02\x02\u0AA4\u0ACB\x03\x02\x02\x02\u0AA5\u0AAC" +
		"\x05\u011E\x90\x02\u0AA6\u0AA8\x07\x04\x02\x02\u0AA7\u0AA6\x03\x02\x02" +
		"\x02\u0AA8\u0AA9\x03\x02\x02\x02\u0AA9\u0AA7\x03\x02\x02\x02\u0AA9\u0AAA" +
		"\x03\x02\x02\x02\u0AAA\u0AAB\x03\x02\x02\x02\u0AAB\u0AAD\x07n\x02\x02" +
		"\u0AAC\u0AA7\x03\x02\x02\x02\u0AAC\u0AAD\x03\x02\x02\x02\u0AAD\u0ACB\x03" +
		"\x02\x02\x02\u0AAE\u0ACB\x07n\x02\x02\u0AAF\u0AB0\x07W\x02\x02\u0AB0\u0AB1" +
		"\x05\u0114\x8B\x02\u0AB1\u0AB2\x07[\x02\x02\u0AB2\u0ACB\x03\x02\x02\x02" +
		"\u0AB3\u0AB5\x07\x04\x02\x02\u0AB4\u0AB3\x03\x02\x02\x02\u0AB5\u0AB8\x03" +
		"\x02\x02\x02\u0AB6\u0AB4\x03\x02\x02\x02\u0AB6\u0AB7\x03\x02\x02\x02\u0AB7" +
		"\u0AB9\x03\x02\x02\x02\u0AB8\u0AB6\x03\x02\x02\x02\u0AB9\u0ABD\x07\\\x02" +
		"\x02\u0ABA\u0ABC\x07\x04\x02\x02\u0ABB\u0ABA\x03\x02\x02\x02\u0ABC\u0ABF" +
		"\x03\x02\x02\x02\u0ABD\u0ABB\x03\x02\x02\x02\u0ABD\u0ABE\x03\x02\x02\x02" +
		"\u0ABE\u0ACB\x03\x02\x02\x02\u0ABF\u0ABD\x03\x02\x02\x02\u0AC0\u0AC4\x07" +
		"]\x02\x02\u0AC1\u0AC3\x07\x04\x02\x02\u0AC2\u0AC1\x03\x02\x02\x02\u0AC3" +
		"\u0AC6\x03\x02\x02\x02\u0AC4\u0AC2\x03\x02\x02\x02\u0AC4\u0AC5\x03\x02" +
		"\x02\x02\u0AC5\u0ACB\x03\x02\x02\x02\u0AC6\u0AC4\x03\x02\x02\x02\u0AC7" +
		"\u0ACB\x07e\x02\x02\u0AC8\u0ACB\x07\xC7\x02\x02\u0AC9\u0ACB\x05\u0118" +
		"\x8D\x02\u0ACA\u0A9C\x03\x02\x02\x02\u0ACA\u0AA5\x03\x02\x02\x02\u0ACA" +
		"\u0AAE\x03\x02\x02\x02\u0ACA\u0AAF\x03\x02\x02\x02\u0ACA\u0AB6\x03\x02" +
		"\x02\x02\u0ACA\u0AC0\x03\x02\x02\x02\u0ACA\u0AC7\x03\x02\x02\x02\u0ACA" +
		"\u0AC8\x03\x02\x02\x02\u0ACA\u0AC9\x03\x02\x02\x02\u0ACB\u0115\x03\x02" +
		"\x02\x02\u0ACC\u0ACD\x07k\x02\x02\u0ACD\u0117\x03\x02\x02\x02\u0ACE\u0AD0" +
		"\x07M\x02\x02\u0ACF\u0AD1\x05\u0114\x8B\x02\u0AD0\u0ACF\x03\x02\x02\x02" +
		"\u0AD1\u0AD2\x03\x02\x02\x02\u0AD2\u0AD0\x03\x02\x02\x02\u0AD2\u0AD3\x03" +
		"\x02\x02\x02\u0AD3\u0AD5\x03\x02\x02\x02\u0AD4\u0AD6\x07[\x02\x02\u0AD5" +
		"\u0AD4\x03\x02\x02\x02\u0AD5\u0AD6\x03\x02\x02\x02\u0AD6\u0119\x03\x02" +
		"\x02\x02\u0AD7\u0AD8\x07[\x02\x02\u0AD8\u011B\x03\x02\x02\x02\u0AD9\u0ADA" +
		"\t\x19\x02\x02\u0ADA\u011D\x03\x02\x02\x02\u0ADB\u0AF7\x05\u0122\x92\x02" +
		"\u0ADC\u0AF7\x07]\x02\x02\u0ADD\u0ADE\x07a\x02\x02\u0ADE\u0AF7\n\x1A\x02" +
		"\x02\u0ADF\u0AE0\x07b\x02\x02\u0AE0\u0AF7\n\x1B\x02\x02\u0AE1\u0AF7\x07" +
		"d\x02\x02\u0AE2\u0AF7\x07c\x02\x02\u0AE3\u0AF7\x07\x93\x02\x02\u0AE4\u0AF7" +
		"\x07\xA8\x02\x02\u0AE5\u0AF7\x07\x94\x02\x02\u0AE6\u0AF7\x07\xA9\x02\x02" +
		"\u0AE7\u0AF7\x07\x96\x02\x02\u0AE8\u0AF7\x07\xAB\x02\x02\u0AE9\u0AF7\x07" +
		"\x8F\x02\x02\u0AEA\u0AF7\x07\xA6\x02\x02\u0AEB\u0AF7\x07\x8E\x02\x02\u0AEC" +
		"\u0AF7\x07\xA5\x02\x02\u0AED\u0AF7\x07\x92\x02\x02\u0AEE\u0AF7\x07\xA7" +
		"\x02\x02\u0AEF\u0AF7\x07\x95\x02\x02\u0AF0\u0AF7\x07\xAA\x02\x02\u0AF1" +
		"\u0AF7\x07\x97\x02\x02\u0AF2\u0AF7\x07\xAC\x02\x02\u0AF3\u0AF7\x07\xB5" +
		"\x02\x02\u0AF4\u0AF7\x07\xB6\x02\x02\u0AF5\u0AF7\x07j\x02\x02\u0AF6\u0ADB" +
		"\x03\x02\x02\x02\u0AF6\u0ADC\x03\x02\x02\x02\u0AF6\u0ADD\x03\x02\x02\x02" +
		"\u0AF6\u0ADF\x03\x02\x02\x02\u0AF6\u0AE1\x03\x02\x02\x02\u0AF6\u0AE2\x03" +
		"\x02\x02\x02\u0AF6\u0AE3\x03\x02\x02\x02\u0AF6\u0AE4\x03\x02\x02\x02\u0AF6" +
		"\u0AE5\x03\x02\x02\x02\u0AF6\u0AE6\x03\x02\x02\x02\u0AF6\u0AE7\x03\x02" +
		"\x02\x02\u0AF6\u0AE8\x03\x02\x02\x02\u0AF6\u0AE9\x03\x02\x02\x02\u0AF6" +
		"\u0AEA\x03\x02\x02\x02\u0AF6\u0AEB\x03\x02\x02\x02\u0AF6\u0AEC\x03\x02" +
		"\x02\x02\u0AF6\u0AED\x03\x02\x02\x02\u0AF6\u0AEE\x03\x02\x02\x02\u0AF6" +
		"\u0AEF\x03\x02\x02\x02\u0AF6\u0AF0\x03\x02\x02\x02\u0AF6\u0AF1\x03\x02" +
		"\x02\x02\u0AF6\u0AF2\x03\x02\x02\x02\u0AF6\u0AF3\x03\x02\x02\x02\u0AF6" +
		"\u0AF4\x03\x02\x02\x02\u0AF6\u0AF5\x03\x02\x02\x02\u0AF7\u0AF8\x03\x02" +
		"\x02\x02\u0AF8\u0AF6\x03\x02\x02\x02\u0AF8\u0AF9\x03\x02\x02\x02\u0AF9" +
		"\u011F\x03\x02\x02\x02\u0AFA\u0AFB\x07\x04\x02\x02\u0AFB\u0121\x03\x02" +
		"\x02\x02\u0AFC\u0AFD\x07q\x02\x02\u0AFD\u0123\x03\x02\x02\x02\u0187\u0128" +
		"\u012E\u0133\u0138\u013F\u017F\u0183\u0189\u018F\u0193\u0199\u019F\u01A5" +
		"\u01AB\u01B0\u01B7\u01BE\u01C5\u01CB\u01D1\u01D9\u01E2\u01E6\u01EF\u01F1" +
		"\u01F6\u01FC\u0205\u0207\u020C\u0212\u021B\u0222\u0227\u022F\u0236\u023B" +
		"\u0243\u024A\u024F\u0257\u025E\u0263\u026B\u0272\u0277\u027F\u0286\u028B" +
		"\u0293\u029A\u029F\u02A7\u02AE\u02B3\u02BB\u02C2\u02C7\u02CF\u02D6\u02DB" +
		"\u02E3\u02EA\u02EF\u02F7\u02FE\u0303\u030B\u0312\u0317\u031F\u0326\u032B" +
		"\u0333\u033A\u033F\u0347\u034E\u0353\u0374\u037C\u037E\u0385\u038A\u0390" +
		"\u0396\u039B\u03A1\u03A6\u03AC\u03B8\u03BD\u03C3\u03C9\u03CF\u03D6\u03DC" +
		"\u03DF\u03E3\u03E7\u03E9\u03F9\u03FE\u0404\u040A\u0411\u0417\u041A\u0420" +
		"\u0429\u042E\u0436\u043B\u0440\u0446\u044D\u0453\u0456\u045C\u0461\u0463" +
		"\u046A\u0471\u0478\u0480\u0485\u048B\u0492\u0498\u049B\u04A5\u04AA\u04B0" +
		"\u04B7\u04BD\u04C0\u04CA\u04CF\u04D5\u04DC\u04E2\u04E5\u04ED\u04F4\u04F9" +
		"\u04FD\u0502\u0509\u050F\u0512\u051A\u0520\u0525\u0529\u052E\u0535\u053B" +
		"\u053E\u0546\u054D\u0552\u055A\u0561\u0566\u056E\u0575\u057A\u0582\u0589" +
		"\u058E\u0596\u059D\u05A2\u05AA\u05B1\u05B6\u05BE\u05C5\u05CA\u05D2\u05D9" +
		"\u05DE\u05E6\u05ED\u05F2\u05FA\u0601\u0606\u060E\u0615\u061A\u0622\u0629" +
		"\u062E\u0636\u063D\u0642\u064A\u0651\u0656\u065E\u0665\u066A\u0672\u0679" +
		"\u067E\u0686\u068D\u0692\u069A\u06A1\u06A6\u06AE\u06B5\u06BA\u06C2\u06C9" +
		"\u06CE\u06D6\u06DD\u06E2\u06EE\u06F3\u06F9\u0700\u0706\u0709\u0712\u0714" +
		"\u071C\u0723\u0728\u0731\u0735\u073B\u0742\u0748\u074B\u0751\u0759\u0760" +
		"\u0765\u076A\u076F\u0775\u0779\u0783\u078A\u078F\u0798\u079C\u07A6\u07AD" +
		"\u07B2\u07BB\u07BF\u07C9\u07D0\u07D5\u07DE\u07E2\u07EC\u07F3\u07F8\u0800" +
		"\u0806\u080A\u0810\u0817\u081D\u0820\u0825\u082E\u0833\u0835\u0843\u0848" +
		"\u084C\u0850\u0853\u0858\u086F\u0874\u0876\u0880\u088A\u0894\u089A\u08A1" +
		"\u08A7\u08AF\u08B9\u08C4\u08CA\u08CF\u08D6\u08DF\u08E3\u08E7\u08EA\u08F9" +
		"\u08FD\u090C\u0910\u0916\u0921\u0926\u092B\u092D\u0932\u0937\u0939\u093E" +
		"\u0944\u0949\u094B\u0956\u095A\u0967\u096B\u0971\u0973\u097A\u097E\u0980" +
		"\u0986\u0988\u098F\u0994\u0997\u099D\u09A0\u09A4\u09AB\u09B0\u09B6\u09BB" +
		"\u09C3\u09C5\u09C9\u09D0\u09D2\u09DB\u09DD\u09E1\u09EB\u09ED\u09F1\u09F7" +
		"\u09F9\u09FF\u0A06\u0A0B\u0A11\u0A16\u0A1C\u0A1F\u0A25\u0A2C\u0A2E\u0A35" +
		"\u0A3F\u0A4A\u0A58\u0A5E\u0A68\u0A6A\u0A73\u0A77\u0A7D\u0A7F\u0A86\u0A88" +
		"\u0A8C\u0A90\u0A96\u0A9A\u0AA0\u0AA3\u0AA9\u0AAC\u0AB6\u0ABD\u0AC4\u0ACA" +
		"\u0AD2\u0AD5\u0AF6\u0AF8";
	public static readonly _serializedATN: string = Utils.join(
		[
			bitmarkParser._serializedATNSegment0,
			bitmarkParser._serializedATNSegment1,
			bitmarkParser._serializedATNSegment2,
			bitmarkParser._serializedATNSegment3,
			bitmarkParser._serializedATNSegment4,
			bitmarkParser._serializedATNSegment5,
		],
		"",
	);
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!bitmarkParser.__ATN) {
			bitmarkParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(bitmarkParser._serializedATN));
		}

		return bitmarkParser.__ATN;
	}

}

export class BitmarkContext extends ParserRuleContext {
	public EOF(): TerminalNode { return this.getToken(bitmarkParser.EOF, 0); }
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
			return this.getTokens(bitmarkParser.NL);
		} else {
			return this.getToken(bitmarkParser.NL, i);
		}
	}
	public S(): TerminalNode[];
	public S(i: number): TerminalNode;
	public S(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(bitmarkParser.S);
		} else {
			return this.getToken(bitmarkParser.S, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return bitmarkParser.RULE_bitmark; }
	// @Override
	public enterRule(listener: bitmarkParserListener): void {
		if (listener.enterBitmark) {
			listener.enterBitmark(this);
		}
	}
	// @Override
	public exitRule(listener: bitmarkParserListener): void {
		if (listener.exitBitmark) {
			listener.exitBitmark(this);
		}
	}
}


export class Bitmark_Context extends ParserRuleContext {
	public bit(): BitContext | undefined {
		return this.tryGetRuleContext(0, BitContext);
	}
	public lines(): LinesContext | undefined {
		return this.tryGetRuleContext(0, LinesContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return bitmarkParser.RULE_bitmark_; }
	// @Override
	public enterRule(listener: bitmarkParserListener): void {
		if (listener.enterBitmark_) {
			listener.enterBitmark_(this);
		}
	}
	// @Override
	public exitRule(listener: bitmarkParserListener): void {
		if (listener.exitBitmark_) {
			listener.exitBitmark_(this);
		}
	}
}


export class BitContext extends ParserRuleContext {
	public book(): BookContext | undefined {
		return this.tryGetRuleContext(0, BookContext);
	}
	public chapter(): ChapterContext | undefined {
		return this.tryGetRuleContext(0, ChapterContext);
	}
	public summary(): SummaryContext | undefined {
		return this.tryGetRuleContext(0, SummaryContext);
	}
	public toc(): TocContext | undefined {
		return this.tryGetRuleContext(0, TocContext);
	}
	public bit_alias(): Bit_aliasContext | undefined {
		return this.tryGetRuleContext(0, Bit_aliasContext);
	}
	public internal_link(): Internal_linkContext | undefined {
		return this.tryGetRuleContext(0, Internal_linkContext);
	}
	public anchor(): AnchorContext | undefined {
		return this.tryGetRuleContext(0, AnchorContext);
	}
	public group_born(): Group_bornContext | undefined {
		return this.tryGetRuleContext(0, Group_bornContext);
	}
	public group_died(): Group_diedContext | undefined {
		return this.tryGetRuleContext(0, Group_diedContext);
	}
	public essay(): EssayContext | undefined {
		return this.tryGetRuleContext(0, EssayContext);
	}
	public correction(): CorrectionContext | undefined {
		return this.tryGetRuleContext(0, CorrectionContext);
	}
	public mark_(): Mark_Context | undefined {
		return this.tryGetRuleContext(0, Mark_Context);
	}
	public document_upload(): Document_uploadContext | undefined {
		return this.tryGetRuleContext(0, Document_uploadContext);
	}
	public take_picture(): Take_pictureContext | undefined {
		return this.tryGetRuleContext(0, Take_pictureContext);
	}
	public record_audio(): Record_audioContext | undefined {
		return this.tryGetRuleContext(0, Record_audioContext);
	}
	public preparation_note(): Preparation_noteContext | undefined {
		return this.tryGetRuleContext(0, Preparation_noteContext);
	}
	public assignment(): AssignmentContext | undefined {
		return this.tryGetRuleContext(0, AssignmentContext);
	}
	public article(): ArticleContext | undefined {
		return this.tryGetRuleContext(0, ArticleContext);
	}
	public statement(): StatementContext | undefined {
		return this.tryGetRuleContext(0, StatementContext);
	}
	public details(): DetailsContext | undefined {
		return this.tryGetRuleContext(0, DetailsContext);
	}
	public buttoncopytext(): ButtoncopytextContext | undefined {
		return this.tryGetRuleContext(0, ButtoncopytextContext);
	}
	public wbtcontinue(): WbtcontinueContext | undefined {
		return this.tryGetRuleContext(0, WbtcontinueContext);
	}
	public learningpathdetails(): LearningpathdetailsContext | undefined {
		return this.tryGetRuleContext(0, LearningpathdetailsContext);
	}
	public note(): NoteContext | undefined {
		return this.tryGetRuleContext(0, NoteContext);
	}
	public info(): InfoContext | undefined {
		return this.tryGetRuleContext(0, InfoContext);
	}
	public warning(): WarningContext | undefined {
		return this.tryGetRuleContext(0, WarningContext);
	}
	public remark(): RemarkContext | undefined {
		return this.tryGetRuleContext(0, RemarkContext);
	}
	public hintbit(): HintbitContext | undefined {
		return this.tryGetRuleContext(0, HintbitContext);
	}
	public help(): HelpContext | undefined {
		return this.tryGetRuleContext(0, HelpContext);
	}
	public danger(): DangerContext | undefined {
		return this.tryGetRuleContext(0, DangerContext);
	}
	public bug(): BugContext | undefined {
		return this.tryGetRuleContext(0, BugContext);
	}
	public sidenote(): SidenoteContext | undefined {
		return this.tryGetRuleContext(0, SidenoteContext);
	}
	public stickynote(): StickynoteContext | undefined {
		return this.tryGetRuleContext(0, StickynoteContext);
	}
	public quote(): QuoteContext | undefined {
		return this.tryGetRuleContext(0, QuoteContext);
	}
	public footnote(): FootnoteContext | undefined {
		return this.tryGetRuleContext(0, FootnoteContext);
	}
	public examplebit(): ExamplebitContext | undefined {
		return this.tryGetRuleContext(0, ExamplebitContext);
	}
	public page(): PageContext | undefined {
		return this.tryGetRuleContext(0, PageContext);
	}
	public message(): MessageContext | undefined {
		return this.tryGetRuleContext(0, MessageContext);
	}
	public bot_interview(): Bot_interviewContext | undefined {
		return this.tryGetRuleContext(0, Bot_interviewContext);
	}
	public self_assessment(): Self_assessmentContext | undefined {
		return this.tryGetRuleContext(0, Self_assessmentContext);
	}
	public rating(): RatingContext | undefined {
		return this.tryGetRuleContext(0, RatingContext);
	}
	public survey(): SurveyContext | undefined {
		return this.tryGetRuleContext(0, SurveyContext);
	}
	public survey_1(): Survey_1Context | undefined {
		return this.tryGetRuleContext(0, Survey_1Context);
	}
	public survey_anonymous(): Survey_anonymousContext | undefined {
		return this.tryGetRuleContext(0, Survey_anonymousContext);
	}
	public survey_anonymous_1(): Survey_anonymous_1Context | undefined {
		return this.tryGetRuleContext(0, Survey_anonymous_1Context);
	}
	public hint(): HintContext | undefined {
		return this.tryGetRuleContext(0, HintContext);
	}
	public learning_path_lti(): Learning_path_ltiContext | undefined {
		return this.tryGetRuleContext(0, Learning_path_ltiContext);
	}
	public learning_path_step(): Learning_path_stepContext | undefined {
		return this.tryGetRuleContext(0, Learning_path_stepContext);
	}
	public learning_path_book(): Learning_path_bookContext | undefined {
		return this.tryGetRuleContext(0, Learning_path_bookContext);
	}
	public learning_path_sign(): Learning_path_signContext | undefined {
		return this.tryGetRuleContext(0, Learning_path_signContext);
	}
	public learning_path_video_call(): Learning_path_video_callContext | undefined {
		return this.tryGetRuleContext(0, Learning_path_video_callContext);
	}
	public learning_path_learning_goal(): Learning_path_learning_goalContext | undefined {
		return this.tryGetRuleContext(0, Learning_path_learning_goalContext);
	}
	public learning_path_closing(): Learning_path_closingContext | undefined {
		return this.tryGetRuleContext(0, Learning_path_closingContext);
	}
	public learning_path_feedback(): Learning_path_feedbackContext | undefined {
		return this.tryGetRuleContext(0, Learning_path_feedbackContext);
	}
	public learning_path_bot_training(): Learning_path_bot_trainingContext | undefined {
		return this.tryGetRuleContext(0, Learning_path_bot_trainingContext);
	}
	public learning_path_external_link(): Learning_path_external_linkContext | undefined {
		return this.tryGetRuleContext(0, Learning_path_external_linkContext);
	}
	public learning_path_classroom_training(): Learning_path_classroom_trainingContext | undefined {
		return this.tryGetRuleContext(0, Learning_path_classroom_trainingContext);
	}
	public learning_path_classroom_event(): Learning_path_classroom_eventContext | undefined {
		return this.tryGetRuleContext(0, Learning_path_classroom_eventContext);
	}
	public bot_action_send(): Bot_action_sendContext | undefined {
		return this.tryGetRuleContext(0, Bot_action_sendContext);
	}
	public bot_action_announce(): Bot_action_announceContext | undefined {
		return this.tryGetRuleContext(0, Bot_action_announceContext);
	}
	public bot_action_save(): Bot_action_saveContext | undefined {
		return this.tryGetRuleContext(0, Bot_action_saveContext);
	}
	public bot_action_remind(): Bot_action_remindContext | undefined {
		return this.tryGetRuleContext(0, Bot_action_remindContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return bitmarkParser.RULE_bit; }
	// @Override
	public enterRule(listener: bitmarkParserListener): void {
		if (listener.enterBit) {
			listener.enterBit(this);
		}
	}
	// @Override
	public exitRule(listener: bitmarkParserListener): void {
		if (listener.exitBit) {
			listener.exitBit(this);
		}
	}
}


export class BookContext extends ParserRuleContext {
	public BitBook(): TerminalNode { return this.getToken(bitmarkParser.BitBook, 0); }
	public CL(): TerminalNode { return this.getToken(bitmarkParser.CL, 0); }
	public format(): FormatContext | undefined {
		return this.tryGetRuleContext(0, FormatContext);
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
			return this.getTokens(bitmarkParser.NL);
		} else {
			return this.getToken(bitmarkParser.NL, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return bitmarkParser.RULE_book; }
	// @Override
	public enterRule(listener: bitmarkParserListener): void {
		if (listener.enterBook) {
			listener.enterBook(this);
		}
	}
	// @Override
	public exitRule(listener: bitmarkParserListener): void {
		if (listener.exitBook) {
			listener.exitBook(this);
		}
	}
}


export class ChapterContext extends ParserRuleContext {
	public BitChapter(): TerminalNode { return this.getToken(bitmarkParser.BitChapter, 0); }
	public CL(): TerminalNode { return this.getToken(bitmarkParser.CL, 0); }
	public resource(): ResourceContext[];
	public resource(i: number): ResourceContext;
	public resource(i?: number): ResourceContext | ResourceContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ResourceContext);
		} else {
			return this.getRuleContext(i, ResourceContext);
		}
	}
	public format(): FormatContext | undefined {
		return this.tryGetRuleContext(0, FormatContext);
	}
	public NL(): TerminalNode[];
	public NL(i: number): TerminalNode;
	public NL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(bitmarkParser.NL);
		} else {
			return this.getToken(bitmarkParser.NL, i);
		}
	}
	public anchor(): AnchorContext | undefined {
		return this.tryGetRuleContext(0, AnchorContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return bitmarkParser.RULE_chapter; }
	// @Override
	public enterRule(listener: bitmarkParserListener): void {
		if (listener.enterChapter) {
			listener.enterChapter(this);
		}
	}
	// @Override
	public exitRule(listener: bitmarkParserListener): void {
		if (listener.exitChapter) {
			listener.exitChapter(this);
		}
	}
}


export class TocContext extends ParserRuleContext {
	public BitToc(): TerminalNode { return this.getToken(bitmarkParser.BitToc, 0); }
	public CL(): TerminalNode { return this.getToken(bitmarkParser.CL, 0); }
	public NL(): TerminalNode[];
	public NL(i: number): TerminalNode;
	public NL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(bitmarkParser.NL);
		} else {
			return this.getToken(bitmarkParser.NL, i);
		}
	}
	public s_and_w(): S_and_wContext | undefined {
		return this.tryGetRuleContext(0, S_and_wContext);
	}
	public atdef(): AtdefContext | undefined {
		return this.tryGetRuleContext(0, AtdefContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return bitmarkParser.RULE_toc; }
	// @Override
	public enterRule(listener: bitmarkParserListener): void {
		if (listener.enterToc) {
			listener.enterToc(this);
		}
	}
	// @Override
	public exitRule(listener: bitmarkParserListener): void {
		if (listener.exitToc) {
			listener.exitToc(this);
		}
	}
}


export class SummaryContext extends ParserRuleContext {
	public BitSummary(): TerminalNode { return this.getToken(bitmarkParser.BitSummary, 0); }
	public CL(): TerminalNode { return this.getToken(bitmarkParser.CL, 0); }
	public title_etc(): Title_etcContext {
		return this.getRuleContext(0, Title_etcContext);
	}
	public NL(): TerminalNode[];
	public NL(i: number): TerminalNode;
	public NL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(bitmarkParser.NL);
		} else {
			return this.getToken(bitmarkParser.NL, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return bitmarkParser.RULE_summary; }
	// @Override
	public enterRule(listener: bitmarkParserListener): void {
		if (listener.enterSummary) {
			listener.enterSummary(this);
		}
	}
	// @Override
	public exitRule(listener: bitmarkParserListener): void {
		if (listener.exitSummary) {
			listener.exitSummary(this);
		}
	}
}


export class Internal_linkContext extends ParserRuleContext {
	public CL(): TerminalNode { return this.getToken(bitmarkParser.CL, 0); }
	public BitIntlink(): TerminalNode | undefined { return this.tryGetToken(bitmarkParser.BitIntlink, 0); }
	public BitIntRef(): TerminalNode | undefined { return this.tryGetToken(bitmarkParser.BitIntRef, 0); }
	public bitElem(): BitElemContext[];
	public bitElem(i: number): BitElemContext;
	public bitElem(i?: number): BitElemContext | BitElemContext[] {
		if (i === undefined) {
			return this.getRuleContexts(BitElemContext);
		} else {
			return this.getRuleContext(i, BitElemContext);
		}
	}
	public BitmarkMinus(): TerminalNode | undefined { return this.tryGetToken(bitmarkParser.BitmarkMinus, 0); }
	public BitmarkPlus(): TerminalNode | undefined { return this.tryGetToken(bitmarkParser.BitmarkPlus, 0); }
	public NL(): TerminalNode[];
	public NL(i: number): TerminalNode;
	public NL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(bitmarkParser.NL);
		} else {
			return this.getToken(bitmarkParser.NL, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return bitmarkParser.RULE_internal_link; }
	// @Override
	public enterRule(listener: bitmarkParserListener): void {
		if (listener.enterInternal_link) {
			listener.enterInternal_link(this);
		}
	}
	// @Override
	public exitRule(listener: bitmarkParserListener): void {
		if (listener.exitInternal_link) {
			listener.exitInternal_link(this);
		}
	}
}


export class Bit_aliasContext extends ParserRuleContext {
	public BitAlias(): TerminalNode { return this.getToken(bitmarkParser.BitAlias, 0); }
	public CL(): TerminalNode { return this.getToken(bitmarkParser.CL, 0); }
	public angleref(): AnglerefContext {
		return this.getRuleContext(0, AnglerefContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return bitmarkParser.RULE_bit_alias; }
	// @Override
	public enterRule(listener: bitmarkParserListener): void {
		if (listener.enterBit_alias) {
			listener.enterBit_alias(this);
		}
	}
	// @Override
	public exitRule(listener: bitmarkParserListener): void {
		if (listener.exitBit_alias) {
			listener.exitBit_alias(this);
		}
	}
}


export class Title_etcContext extends ParserRuleContext {
	public title(): TitleContext[];
	public title(i: number): TitleContext;
	public title(i?: number): TitleContext | TitleContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TitleContext);
		} else {
			return this.getRuleContext(i, TitleContext);
		}
	}
	public atdef(): AtdefContext[];
	public atdef(i: number): AtdefContext;
	public atdef(i?: number): AtdefContext | AtdefContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AtdefContext);
		} else {
			return this.getRuleContext(i, AtdefContext);
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
	public instruction(): InstructionContext[];
	public instruction(i: number): InstructionContext;
	public instruction(i?: number): InstructionContext | InstructionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(InstructionContext);
		} else {
			return this.getRuleContext(i, InstructionContext);
		}
	}
	public angleref(): AnglerefContext[];
	public angleref(i: number): AnglerefContext;
	public angleref(i?: number): AnglerefContext | AnglerefContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AnglerefContext);
		} else {
			return this.getRuleContext(i, AnglerefContext);
		}
	}
	public anchor(): AnchorContext[];
	public anchor(i: number): AnchorContext;
	public anchor(i?: number): AnchorContext | AnchorContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AnchorContext);
		} else {
			return this.getRuleContext(i, AnchorContext);
		}
	}
	public progress(): ProgressContext[];
	public progress(i: number): ProgressContext;
	public progress(i?: number): ProgressContext | ProgressContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ProgressContext);
		} else {
			return this.getRuleContext(i, ProgressContext);
		}
	}
	public NL(): TerminalNode[];
	public NL(i: number): TerminalNode;
	public NL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(bitmarkParser.NL);
		} else {
			return this.getToken(bitmarkParser.NL, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return bitmarkParser.RULE_title_etc; }
	// @Override
	public enterRule(listener: bitmarkParserListener): void {
		if (listener.enterTitle_etc) {
			listener.enterTitle_etc(this);
		}
	}
	// @Override
	public exitRule(listener: bitmarkParserListener): void {
		if (listener.exitTitle_etc) {
			listener.exitTitle_etc(this);
		}
	}
}


export class Group_bornContext extends ParserRuleContext {
	public BitGroups(): TerminalNode { return this.getToken(bitmarkParser.BitGroups, 0); }
	public CL(): TerminalNode[];
	public CL(i: number): TerminalNode;
	public CL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(bitmarkParser.CL);
		} else {
			return this.getToken(bitmarkParser.CL, i);
		}
	}
	public NL(): TerminalNode[];
	public NL(i: number): TerminalNode;
	public NL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(bitmarkParser.NL);
		} else {
			return this.getToken(bitmarkParser.NL, i);
		}
	}
	public lines(): LinesContext[];
	public lines(i: number): LinesContext;
	public lines(i?: number): LinesContext | LinesContext[] {
		if (i === undefined) {
			return this.getRuleContexts(LinesContext);
		} else {
			return this.getRuleContext(i, LinesContext);
		}
	}
	public OPR(): TerminalNode[];
	public OPR(i: number): TerminalNode;
	public OPR(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(bitmarkParser.OPR);
		} else {
			return this.getToken(bitmarkParser.OPR, i);
		}
	}
	public OPHASH(): TerminalNode[];
	public OPHASH(i: number): TerminalNode;
	public OPHASH(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(bitmarkParser.OPHASH);
		} else {
			return this.getToken(bitmarkParser.OPHASH, i);
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
			return this.getTokens(bitmarkParser.COLON);
		} else {
			return this.getToken(bitmarkParser.COLON, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return bitmarkParser.RULE_group_born; }
	// @Override
	public enterRule(listener: bitmarkParserListener): void {
		if (listener.enterGroup_born) {
			listener.enterGroup_born(this);
		}
	}
	// @Override
	public exitRule(listener: bitmarkParserListener): void {
		if (listener.exitGroup_born) {
			listener.exitGroup_born(this);
		}
	}
}


export class Group_diedContext extends ParserRuleContext {
	public BitGroupt(): TerminalNode { return this.getToken(bitmarkParser.BitGroupt, 0); }
	public CL(): TerminalNode[];
	public CL(i: number): TerminalNode;
	public CL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(bitmarkParser.CL);
		} else {
			return this.getToken(bitmarkParser.CL, i);
		}
	}
	public NL(): TerminalNode[];
	public NL(i: number): TerminalNode;
	public NL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(bitmarkParser.NL);
		} else {
			return this.getToken(bitmarkParser.NL, i);
		}
	}
	public lines(): LinesContext[];
	public lines(i: number): LinesContext;
	public lines(i?: number): LinesContext | LinesContext[] {
		if (i === undefined) {
			return this.getRuleContexts(LinesContext);
		} else {
			return this.getRuleContext(i, LinesContext);
		}
	}
	public OPR(): TerminalNode[];
	public OPR(i: number): TerminalNode;
	public OPR(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(bitmarkParser.OPR);
		} else {
			return this.getToken(bitmarkParser.OPR, i);
		}
	}
	public OPHASH(): TerminalNode[];
	public OPHASH(i: number): TerminalNode;
	public OPHASH(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(bitmarkParser.OPHASH);
		} else {
			return this.getToken(bitmarkParser.OPHASH, i);
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
			return this.getTokens(bitmarkParser.COLON);
		} else {
			return this.getToken(bitmarkParser.COLON, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return bitmarkParser.RULE_group_died; }
	// @Override
	public enterRule(listener: bitmarkParserListener): void {
		if (listener.enterGroup_died) {
			listener.enterGroup_died(this);
		}
	}
	// @Override
	public exitRule(listener: bitmarkParserListener): void {
		if (listener.exitGroup_died) {
			listener.exitGroup_died(this);
		}
	}
}


export class Learning_path_ltiContext extends ParserRuleContext {
	public BitLearningPathLti(): TerminalNode { return this.getToken(bitmarkParser.BitLearningPathLti, 0); }
	public format(): FormatContext {
		return this.getRuleContext(0, FormatContext);
	}
	public CL(): TerminalNode { return this.getToken(bitmarkParser.CL, 0); }
	public NL(): TerminalNode[];
	public NL(i: number): TerminalNode;
	public NL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(bitmarkParser.NL);
		} else {
			return this.getToken(bitmarkParser.NL, i);
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
	public get ruleIndex(): number { return bitmarkParser.RULE_learning_path_lti; }
	// @Override
	public enterRule(listener: bitmarkParserListener): void {
		if (listener.enterLearning_path_lti) {
			listener.enterLearning_path_lti(this);
		}
	}
	// @Override
	public exitRule(listener: bitmarkParserListener): void {
		if (listener.exitLearning_path_lti) {
			listener.exitLearning_path_lti(this);
		}
	}
}


export class Learning_path_stepContext extends ParserRuleContext {
	public BitLearningPathStep(): TerminalNode { return this.getToken(bitmarkParser.BitLearningPathStep, 0); }
	public format(): FormatContext {
		return this.getRuleContext(0, FormatContext);
	}
	public CL(): TerminalNode { return this.getToken(bitmarkParser.CL, 0); }
	public NL(): TerminalNode[];
	public NL(i: number): TerminalNode;
	public NL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(bitmarkParser.NL);
		} else {
			return this.getToken(bitmarkParser.NL, i);
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
	public get ruleIndex(): number { return bitmarkParser.RULE_learning_path_step; }
	// @Override
	public enterRule(listener: bitmarkParserListener): void {
		if (listener.enterLearning_path_step) {
			listener.enterLearning_path_step(this);
		}
	}
	// @Override
	public exitRule(listener: bitmarkParserListener): void {
		if (listener.exitLearning_path_step) {
			listener.exitLearning_path_step(this);
		}
	}
}


export class Learning_path_bookContext extends ParserRuleContext {
	public BitLearningPathBook(): TerminalNode { return this.getToken(bitmarkParser.BitLearningPathBook, 0); }
	public format(): FormatContext {
		return this.getRuleContext(0, FormatContext);
	}
	public CL(): TerminalNode { return this.getToken(bitmarkParser.CL, 0); }
	public NL(): TerminalNode[];
	public NL(i: number): TerminalNode;
	public NL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(bitmarkParser.NL);
		} else {
			return this.getToken(bitmarkParser.NL, i);
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
	public get ruleIndex(): number { return bitmarkParser.RULE_learning_path_book; }
	// @Override
	public enterRule(listener: bitmarkParserListener): void {
		if (listener.enterLearning_path_book) {
			listener.enterLearning_path_book(this);
		}
	}
	// @Override
	public exitRule(listener: bitmarkParserListener): void {
		if (listener.exitLearning_path_book) {
			listener.exitLearning_path_book(this);
		}
	}
}


export class Learning_path_signContext extends ParserRuleContext {
	public BitLearningPathSign(): TerminalNode { return this.getToken(bitmarkParser.BitLearningPathSign, 0); }
	public format(): FormatContext {
		return this.getRuleContext(0, FormatContext);
	}
	public CL(): TerminalNode { return this.getToken(bitmarkParser.CL, 0); }
	public NL(): TerminalNode[];
	public NL(i: number): TerminalNode;
	public NL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(bitmarkParser.NL);
		} else {
			return this.getToken(bitmarkParser.NL, i);
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
	public get ruleIndex(): number { return bitmarkParser.RULE_learning_path_sign; }
	// @Override
	public enterRule(listener: bitmarkParserListener): void {
		if (listener.enterLearning_path_sign) {
			listener.enterLearning_path_sign(this);
		}
	}
	// @Override
	public exitRule(listener: bitmarkParserListener): void {
		if (listener.exitLearning_path_sign) {
			listener.exitLearning_path_sign(this);
		}
	}
}


export class Learning_path_video_callContext extends ParserRuleContext {
	public BitLearningPathVideoCall(): TerminalNode { return this.getToken(bitmarkParser.BitLearningPathVideoCall, 0); }
	public format(): FormatContext {
		return this.getRuleContext(0, FormatContext);
	}
	public CL(): TerminalNode { return this.getToken(bitmarkParser.CL, 0); }
	public NL(): TerminalNode[];
	public NL(i: number): TerminalNode;
	public NL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(bitmarkParser.NL);
		} else {
			return this.getToken(bitmarkParser.NL, i);
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
	public get ruleIndex(): number { return bitmarkParser.RULE_learning_path_video_call; }
	// @Override
	public enterRule(listener: bitmarkParserListener): void {
		if (listener.enterLearning_path_video_call) {
			listener.enterLearning_path_video_call(this);
		}
	}
	// @Override
	public exitRule(listener: bitmarkParserListener): void {
		if (listener.exitLearning_path_video_call) {
			listener.exitLearning_path_video_call(this);
		}
	}
}


export class Learning_path_learning_goalContext extends ParserRuleContext {
	public BitLearningPathLearningGoal(): TerminalNode { return this.getToken(bitmarkParser.BitLearningPathLearningGoal, 0); }
	public format(): FormatContext {
		return this.getRuleContext(0, FormatContext);
	}
	public CL(): TerminalNode { return this.getToken(bitmarkParser.CL, 0); }
	public NL(): TerminalNode[];
	public NL(i: number): TerminalNode;
	public NL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(bitmarkParser.NL);
		} else {
			return this.getToken(bitmarkParser.NL, i);
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
	public get ruleIndex(): number { return bitmarkParser.RULE_learning_path_learning_goal; }
	// @Override
	public enterRule(listener: bitmarkParserListener): void {
		if (listener.enterLearning_path_learning_goal) {
			listener.enterLearning_path_learning_goal(this);
		}
	}
	// @Override
	public exitRule(listener: bitmarkParserListener): void {
		if (listener.exitLearning_path_learning_goal) {
			listener.exitLearning_path_learning_goal(this);
		}
	}
}


export class Learning_path_closingContext extends ParserRuleContext {
	public BitLearningPathClosing(): TerminalNode { return this.getToken(bitmarkParser.BitLearningPathClosing, 0); }
	public format(): FormatContext {
		return this.getRuleContext(0, FormatContext);
	}
	public CL(): TerminalNode { return this.getToken(bitmarkParser.CL, 0); }
	public NL(): TerminalNode[];
	public NL(i: number): TerminalNode;
	public NL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(bitmarkParser.NL);
		} else {
			return this.getToken(bitmarkParser.NL, i);
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
	public get ruleIndex(): number { return bitmarkParser.RULE_learning_path_closing; }
	// @Override
	public enterRule(listener: bitmarkParserListener): void {
		if (listener.enterLearning_path_closing) {
			listener.enterLearning_path_closing(this);
		}
	}
	// @Override
	public exitRule(listener: bitmarkParserListener): void {
		if (listener.exitLearning_path_closing) {
			listener.exitLearning_path_closing(this);
		}
	}
}


export class Learning_path_feedbackContext extends ParserRuleContext {
	public BitLearningPathFeedback(): TerminalNode { return this.getToken(bitmarkParser.BitLearningPathFeedback, 0); }
	public format(): FormatContext {
		return this.getRuleContext(0, FormatContext);
	}
	public CL(): TerminalNode { return this.getToken(bitmarkParser.CL, 0); }
	public NL(): TerminalNode[];
	public NL(i: number): TerminalNode;
	public NL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(bitmarkParser.NL);
		} else {
			return this.getToken(bitmarkParser.NL, i);
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
	public get ruleIndex(): number { return bitmarkParser.RULE_learning_path_feedback; }
	// @Override
	public enterRule(listener: bitmarkParserListener): void {
		if (listener.enterLearning_path_feedback) {
			listener.enterLearning_path_feedback(this);
		}
	}
	// @Override
	public exitRule(listener: bitmarkParserListener): void {
		if (listener.exitLearning_path_feedback) {
			listener.exitLearning_path_feedback(this);
		}
	}
}


export class Learning_path_bot_trainingContext extends ParserRuleContext {
	public BitLearningPathBotTraining(): TerminalNode { return this.getToken(bitmarkParser.BitLearningPathBotTraining, 0); }
	public format(): FormatContext {
		return this.getRuleContext(0, FormatContext);
	}
	public CL(): TerminalNode { return this.getToken(bitmarkParser.CL, 0); }
	public NL(): TerminalNode[];
	public NL(i: number): TerminalNode;
	public NL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(bitmarkParser.NL);
		} else {
			return this.getToken(bitmarkParser.NL, i);
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
	public get ruleIndex(): number { return bitmarkParser.RULE_learning_path_bot_training; }
	// @Override
	public enterRule(listener: bitmarkParserListener): void {
		if (listener.enterLearning_path_bot_training) {
			listener.enterLearning_path_bot_training(this);
		}
	}
	// @Override
	public exitRule(listener: bitmarkParserListener): void {
		if (listener.exitLearning_path_bot_training) {
			listener.exitLearning_path_bot_training(this);
		}
	}
}


export class Learning_path_external_linkContext extends ParserRuleContext {
	public BitLearningPathExternalLink(): TerminalNode { return this.getToken(bitmarkParser.BitLearningPathExternalLink, 0); }
	public format(): FormatContext {
		return this.getRuleContext(0, FormatContext);
	}
	public CL(): TerminalNode { return this.getToken(bitmarkParser.CL, 0); }
	public NL(): TerminalNode[];
	public NL(i: number): TerminalNode;
	public NL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(bitmarkParser.NL);
		} else {
			return this.getToken(bitmarkParser.NL, i);
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
	public get ruleIndex(): number { return bitmarkParser.RULE_learning_path_external_link; }
	// @Override
	public enterRule(listener: bitmarkParserListener): void {
		if (listener.enterLearning_path_external_link) {
			listener.enterLearning_path_external_link(this);
		}
	}
	// @Override
	public exitRule(listener: bitmarkParserListener): void {
		if (listener.exitLearning_path_external_link) {
			listener.exitLearning_path_external_link(this);
		}
	}
}


export class Learning_path_classroom_trainingContext extends ParserRuleContext {
	public BitLearningPathClassroomTraining(): TerminalNode { return this.getToken(bitmarkParser.BitLearningPathClassroomTraining, 0); }
	public format(): FormatContext {
		return this.getRuleContext(0, FormatContext);
	}
	public CL(): TerminalNode { return this.getToken(bitmarkParser.CL, 0); }
	public NL(): TerminalNode[];
	public NL(i: number): TerminalNode;
	public NL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(bitmarkParser.NL);
		} else {
			return this.getToken(bitmarkParser.NL, i);
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
	public get ruleIndex(): number { return bitmarkParser.RULE_learning_path_classroom_training; }
	// @Override
	public enterRule(listener: bitmarkParserListener): void {
		if (listener.enterLearning_path_classroom_training) {
			listener.enterLearning_path_classroom_training(this);
		}
	}
	// @Override
	public exitRule(listener: bitmarkParserListener): void {
		if (listener.exitLearning_path_classroom_training) {
			listener.exitLearning_path_classroom_training(this);
		}
	}
}


export class Learning_path_classroom_eventContext extends ParserRuleContext {
	public BitLearningPathClassroomEvent(): TerminalNode { return this.getToken(bitmarkParser.BitLearningPathClassroomEvent, 0); }
	public format(): FormatContext {
		return this.getRuleContext(0, FormatContext);
	}
	public CL(): TerminalNode { return this.getToken(bitmarkParser.CL, 0); }
	public NL(): TerminalNode[];
	public NL(i: number): TerminalNode;
	public NL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(bitmarkParser.NL);
		} else {
			return this.getToken(bitmarkParser.NL, i);
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
	public get ruleIndex(): number { return bitmarkParser.RULE_learning_path_classroom_event; }
	// @Override
	public enterRule(listener: bitmarkParserListener): void {
		if (listener.enterLearning_path_classroom_event) {
			listener.enterLearning_path_classroom_event(this);
		}
	}
	// @Override
	public exitRule(listener: bitmarkParserListener): void {
		if (listener.exitLearning_path_classroom_event) {
			listener.exitLearning_path_classroom_event(this);
		}
	}
}


export class Bot_action_sendContext extends ParserRuleContext {
	public BitBotActionSend(): TerminalNode { return this.getToken(bitmarkParser.BitBotActionSend, 0); }
	public format(): FormatContext {
		return this.getRuleContext(0, FormatContext);
	}
	public CL(): TerminalNode { return this.getToken(bitmarkParser.CL, 0); }
	public NL(): TerminalNode[];
	public NL(i: number): TerminalNode;
	public NL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(bitmarkParser.NL);
		} else {
			return this.getToken(bitmarkParser.NL, i);
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
	public get ruleIndex(): number { return bitmarkParser.RULE_bot_action_send; }
	// @Override
	public enterRule(listener: bitmarkParserListener): void {
		if (listener.enterBot_action_send) {
			listener.enterBot_action_send(this);
		}
	}
	// @Override
	public exitRule(listener: bitmarkParserListener): void {
		if (listener.exitBot_action_send) {
			listener.exitBot_action_send(this);
		}
	}
}


export class Bot_action_announceContext extends ParserRuleContext {
	public BitBotActionAnnounce(): TerminalNode { return this.getToken(bitmarkParser.BitBotActionAnnounce, 0); }
	public format(): FormatContext {
		return this.getRuleContext(0, FormatContext);
	}
	public CL(): TerminalNode { return this.getToken(bitmarkParser.CL, 0); }
	public NL(): TerminalNode[];
	public NL(i: number): TerminalNode;
	public NL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(bitmarkParser.NL);
		} else {
			return this.getToken(bitmarkParser.NL, i);
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
	public get ruleIndex(): number { return bitmarkParser.RULE_bot_action_announce; }
	// @Override
	public enterRule(listener: bitmarkParserListener): void {
		if (listener.enterBot_action_announce) {
			listener.enterBot_action_announce(this);
		}
	}
	// @Override
	public exitRule(listener: bitmarkParserListener): void {
		if (listener.exitBot_action_announce) {
			listener.exitBot_action_announce(this);
		}
	}
}


export class Bot_action_saveContext extends ParserRuleContext {
	public BitBotActionSave(): TerminalNode { return this.getToken(bitmarkParser.BitBotActionSave, 0); }
	public format(): FormatContext {
		return this.getRuleContext(0, FormatContext);
	}
	public CL(): TerminalNode { return this.getToken(bitmarkParser.CL, 0); }
	public NL(): TerminalNode[];
	public NL(i: number): TerminalNode;
	public NL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(bitmarkParser.NL);
		} else {
			return this.getToken(bitmarkParser.NL, i);
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
	public get ruleIndex(): number { return bitmarkParser.RULE_bot_action_save; }
	// @Override
	public enterRule(listener: bitmarkParserListener): void {
		if (listener.enterBot_action_save) {
			listener.enterBot_action_save(this);
		}
	}
	// @Override
	public exitRule(listener: bitmarkParserListener): void {
		if (listener.exitBot_action_save) {
			listener.exitBot_action_save(this);
		}
	}
}


export class Bot_action_remindContext extends ParserRuleContext {
	public BitBotActionRemind(): TerminalNode { return this.getToken(bitmarkParser.BitBotActionRemind, 0); }
	public format(): FormatContext {
		return this.getRuleContext(0, FormatContext);
	}
	public CL(): TerminalNode { return this.getToken(bitmarkParser.CL, 0); }
	public NL(): TerminalNode[];
	public NL(i: number): TerminalNode;
	public NL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(bitmarkParser.NL);
		} else {
			return this.getToken(bitmarkParser.NL, i);
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
	public get ruleIndex(): number { return bitmarkParser.RULE_bot_action_remind; }
	// @Override
	public enterRule(listener: bitmarkParserListener): void {
		if (listener.enterBot_action_remind) {
			listener.enterBot_action_remind(this);
		}
	}
	// @Override
	public exitRule(listener: bitmarkParserListener): void {
		if (listener.exitBot_action_remind) {
			listener.exitBot_action_remind(this);
		}
	}
}


export class BitElemContext extends ParserRuleContext {
	public LIST_LINE(): TerminalNode | undefined { return this.tryGetToken(bitmarkParser.LIST_LINE, 0); }
	public dclines(): DclinesContext | undefined {
		return this.tryGetRuleContext(0, DclinesContext);
	}
	public gap(): GapContext | undefined {
		return this.tryGetRuleContext(0, GapContext);
	}
	public reference(): ReferenceContext | undefined {
		return this.tryGetRuleContext(0, ReferenceContext);
	}
	public dateprop(): DatepropContext | undefined {
		return this.tryGetRuleContext(0, DatepropContext);
	}
	public progress(): ProgressContext | undefined {
		return this.tryGetRuleContext(0, ProgressContext);
	}
	public atdef(): AtdefContext | undefined {
		return this.tryGetRuleContext(0, AtdefContext);
	}
	public dollarans(): DollaransContext | undefined {
		return this.tryGetRuleContext(0, DollaransContext);
	}
	public partans(): PartansContext | undefined {
		return this.tryGetRuleContext(0, PartansContext);
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
	public progress_points(): Progress_pointsContext | undefined {
		return this.tryGetRuleContext(0, Progress_pointsContext);
	}
	public istracked(): IstrackedContext | undefined {
		return this.tryGetRuleContext(0, IstrackedContext);
	}
	public isinfoonly(): IsinfoonlyContext | undefined {
		return this.tryGetRuleContext(0, IsinfoonlyContext);
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
	public get ruleIndex(): number { return bitmarkParser.RULE_bitElem; }
	// @Override
	public enterRule(listener: bitmarkParserListener): void {
		if (listener.enterBitElem) {
			listener.enterBitElem(this);
		}
	}
	// @Override
	public exitRule(listener: bitmarkParserListener): void {
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
	public get ruleIndex(): number { return bitmarkParser.RULE_gap; }
	// @Override
	public enterRule(listener: bitmarkParserListener): void {
		if (listener.enterGap) {
			listener.enterGap(this);
		}
	}
	// @Override
	public exitRule(listener: bitmarkParserListener): void {
		if (listener.exitGap) {
			listener.exitGap(this);
		}
	}
}


export class Single_gapContext extends ParserRuleContext {
	public OPU(): TerminalNode { return this.getToken(bitmarkParser.OPU, 0); }
	public clnsp(): ClnspContext {
		return this.getRuleContext(0, ClnspContext);
	}
	public NUMERIC(): TerminalNode | undefined { return this.tryGetToken(bitmarkParser.NUMERIC, 0); }
	public STRING(): TerminalNode | undefined { return this.tryGetToken(bitmarkParser.STRING, 0); }
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
	public get ruleIndex(): number { return bitmarkParser.RULE_single_gap; }
	// @Override
	public enterRule(listener: bitmarkParserListener): void {
		if (listener.enterSingle_gap) {
			listener.enterSingle_gap(this);
		}
	}
	// @Override
	public exitRule(listener: bitmarkParserListener): void {
		if (listener.exitSingle_gap) {
			listener.exitSingle_gap(this);
		}
	}
}


export class Choice_plusContext extends ParserRuleContext {
	public OPP(): TerminalNode { return this.getToken(bitmarkParser.OPP, 0); }
	public CL(): TerminalNode { return this.getToken(bitmarkParser.CL, 0); }
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
	public get ruleIndex(): number { return bitmarkParser.RULE_choice_plus; }
	// @Override
	public enterRule(listener: bitmarkParserListener): void {
		if (listener.enterChoice_plus) {
			listener.enterChoice_plus(this);
		}
	}
	// @Override
	public exitRule(listener: bitmarkParserListener): void {
		if (listener.exitChoice_plus) {
			listener.exitChoice_plus(this);
		}
	}
}


export class Choice_minusContext extends ParserRuleContext {
	public OPM(): TerminalNode { return this.getToken(bitmarkParser.OPM, 0); }
	public CL(): TerminalNode { return this.getToken(bitmarkParser.CL, 0); }
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
	public get ruleIndex(): number { return bitmarkParser.RULE_choice_minus; }
	// @Override
	public enterRule(listener: bitmarkParserListener): void {
		if (listener.enterChoice_minus) {
			listener.enterChoice_minus(this);
		}
	}
	// @Override
	public exitRule(listener: bitmarkParserListener): void {
		if (listener.exitChoice_minus) {
			listener.exitChoice_minus(this);
		}
	}
}


export class Choice_starContext extends ParserRuleContext {
	public OPR(): TerminalNode { return this.getToken(bitmarkParser.OPR, 0); }
	public CL(): TerminalNode { return this.getToken(bitmarkParser.CL, 0); }
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
	public get ruleIndex(): number { return bitmarkParser.RULE_choice_star; }
	// @Override
	public enterRule(listener: bitmarkParserListener): void {
		if (listener.enterChoice_star) {
			listener.enterChoice_star(this);
		}
	}
	// @Override
	public exitRule(listener: bitmarkParserListener): void {
		if (listener.exitChoice_star) {
			listener.exitChoice_star(this);
		}
	}
}


export class EssayContext extends ParserRuleContext {
	public BitEssay(): TerminalNode { return this.getToken(bitmarkParser.BitEssay, 0); }
	public format(): FormatContext {
		return this.getRuleContext(0, FormatContext);
	}
	public CL(): TerminalNode { return this.getToken(bitmarkParser.CL, 0); }
	public NL(): TerminalNode[];
	public NL(i: number): TerminalNode;
	public NL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(bitmarkParser.NL);
		} else {
			return this.getToken(bitmarkParser.NL, i);
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
	public ml_example(): Ml_exampleContext[];
	public ml_example(i: number): Ml_exampleContext;
	public ml_example(i?: number): Ml_exampleContext | Ml_exampleContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Ml_exampleContext);
		} else {
			return this.getRuleContext(i, Ml_exampleContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return bitmarkParser.RULE_essay; }
	// @Override
	public enterRule(listener: bitmarkParserListener): void {
		if (listener.enterEssay) {
			listener.enterEssay(this);
		}
	}
	// @Override
	public exitRule(listener: bitmarkParserListener): void {
		if (listener.exitEssay) {
			listener.exitEssay(this);
		}
	}
}


export class Ml_exampleContext extends ParserRuleContext {
	public AtExamplecol(): TerminalNode { return this.getToken(bitmarkParser.AtExamplecol, 0); }
	public CL(): TerminalNode { return this.getToken(bitmarkParser.CL, 0); }
	public lines(): LinesContext | undefined {
		return this.tryGetRuleContext(0, LinesContext);
	}
	public NL(): TerminalNode[];
	public NL(i: number): TerminalNode;
	public NL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(bitmarkParser.NL);
		} else {
			return this.getToken(bitmarkParser.NL, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return bitmarkParser.RULE_ml_example; }
	// @Override
	public enterRule(listener: bitmarkParserListener): void {
		if (listener.enterMl_example) {
			listener.enterMl_example(this);
		}
	}
	// @Override
	public exitRule(listener: bitmarkParserListener): void {
		if (listener.exitMl_example) {
			listener.exitMl_example(this);
		}
	}
}


export class PartansContext extends ParserRuleContext {
	public AtPartialAnswerS(): TerminalNode | undefined { return this.tryGetToken(bitmarkParser.AtPartialAnswerS, 0); }
	public AtPartialAnswer(): TerminalNode | undefined { return this.tryGetToken(bitmarkParser.AtPartialAnswer, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return bitmarkParser.RULE_partans; }
	// @Override
	public enterRule(listener: bitmarkParserListener): void {
		if (listener.enterPartans) {
			listener.enterPartans(this);
		}
	}
	// @Override
	public exitRule(listener: bitmarkParserListener): void {
		if (listener.exitPartans) {
			listener.exitPartans(this);
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
	public get ruleIndex(): number { return bitmarkParser.RULE_resource; }
	// @Override
	public enterRule(listener: bitmarkParserListener): void {
		if (listener.enterResource) {
			listener.enterResource(this);
		}
	}
	// @Override
	public exitRule(listener: bitmarkParserListener): void {
		if (listener.exitResource) {
			listener.exitResource(this);
		}
	}
}


export class CorrectionContext extends ParserRuleContext {
	public BitCorrection(): TerminalNode { return this.getToken(bitmarkParser.BitCorrection, 0); }
	public format(): FormatContext {
		return this.getRuleContext(0, FormatContext);
	}
	public CL(): TerminalNode { return this.getToken(bitmarkParser.CL, 0); }
	public NL(): TerminalNode[];
	public NL(i: number): TerminalNode;
	public NL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(bitmarkParser.NL);
		} else {
			return this.getToken(bitmarkParser.NL, i);
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
	public corrs(): CorrsContext[];
	public corrs(i: number): CorrsContext;
	public corrs(i?: number): CorrsContext | CorrsContext[] {
		if (i === undefined) {
			return this.getRuleContexts(CorrsContext);
		} else {
			return this.getRuleContext(i, CorrsContext);
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
	public get ruleIndex(): number { return bitmarkParser.RULE_correction; }
	// @Override
	public enterRule(listener: bitmarkParserListener): void {
		if (listener.enterCorrection) {
			listener.enterCorrection(this);
		}
	}
	// @Override
	public exitRule(listener: bitmarkParserListener): void {
		if (listener.exitCorrection) {
			listener.exitCorrection(this);
		}
	}
}


export class CorrsContext extends ParserRuleContext {
	public OPM(): TerminalNode | undefined { return this.tryGetToken(bitmarkParser.OPM, 0); }
	public CL(): TerminalNode { return this.getToken(bitmarkParser.CL, 0); }
	public NL(): TerminalNode { return this.getToken(bitmarkParser.NL, 0); }
	public OPP(): TerminalNode | undefined { return this.tryGetToken(bitmarkParser.OPP, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return bitmarkParser.RULE_corrs; }
	// @Override
	public enterRule(listener: bitmarkParserListener): void {
		if (listener.enterCorrs) {
			listener.enterCorrs(this);
		}
	}
	// @Override
	public exitRule(listener: bitmarkParserListener): void {
		if (listener.exitCorrs) {
			listener.exitCorrs(this);
		}
	}
}


export class Mark_Context extends ParserRuleContext {
	public BitMark(): TerminalNode { return this.getToken(bitmarkParser.BitMark, 0); }
	public format(): FormatContext {
		return this.getRuleContext(0, FormatContext);
	}
	public CL(): TerminalNode { return this.getToken(bitmarkParser.CL, 0); }
	public NL(): TerminalNode[];
	public NL(i: number): TerminalNode;
	public NL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(bitmarkParser.NL);
		} else {
			return this.getToken(bitmarkParser.NL, i);
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
	public mark_text(): Mark_textContext[];
	public mark_text(i: number): Mark_textContext;
	public mark_text(i?: number): Mark_textContext | Mark_textContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Mark_textContext);
		} else {
			return this.getRuleContext(i, Mark_textContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return bitmarkParser.RULE_mark_; }
	// @Override
	public enterRule(listener: bitmarkParserListener): void {
		if (listener.enterMark_) {
			listener.enterMark_(this);
		}
	}
	// @Override
	public exitRule(listener: bitmarkParserListener): void {
		if (listener.exitMark_) {
			listener.exitMark_(this);
		}
	}
}


export class Mark_textContext extends ParserRuleContext {
	public OPS(): TerminalNode { return this.getToken(bitmarkParser.OPS, 0); }
	public s_and_w(): S_and_wContext {
		return this.getRuleContext(0, S_and_wContext);
	}
	public CL(): TerminalNode { return this.getToken(bitmarkParser.CL, 0); }
	public mark_color(): Mark_colorContext | undefined {
		return this.tryGetRuleContext(0, Mark_colorContext);
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
	public instruction(): InstructionContext[];
	public instruction(i: number): InstructionContext;
	public instruction(i?: number): InstructionContext | InstructionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(InstructionContext);
		} else {
			return this.getRuleContext(i, InstructionContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return bitmarkParser.RULE_mark_text; }
	// @Override
	public enterRule(listener: bitmarkParserListener): void {
		if (listener.enterMark_text) {
			listener.enterMark_text(this);
		}
	}
	// @Override
	public exitRule(listener: bitmarkParserListener): void {
		if (listener.exitMark_text) {
			listener.exitMark_text(this);
		}
	}
}


export class Mark_colorContext extends ParserRuleContext {
	public OPAMARK(): TerminalNode { return this.getToken(bitmarkParser.OPAMARK, 0); }
	public STRING(): TerminalNode { return this.getToken(bitmarkParser.STRING, 0); }
	public CL(): TerminalNode { return this.getToken(bitmarkParser.CL, 0); }
	public S(): TerminalNode[];
	public S(i: number): TerminalNode;
	public S(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(bitmarkParser.S);
		} else {
			return this.getToken(bitmarkParser.S, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return bitmarkParser.RULE_mark_color; }
	// @Override
	public enterRule(listener: bitmarkParserListener): void {
		if (listener.enterMark_color) {
			listener.enterMark_color(this);
		}
	}
	// @Override
	public exitRule(listener: bitmarkParserListener): void {
		if (listener.exitMark_color) {
			listener.exitMark_color(this);
		}
	}
}


export class Document_uploadContext extends ParserRuleContext {
	public BitDocup(): TerminalNode { return this.getToken(bitmarkParser.BitDocup, 0); }
	public CL(): TerminalNode { return this.getToken(bitmarkParser.CL, 0); }
	public NL(): TerminalNode[];
	public NL(i: number): TerminalNode;
	public NL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(bitmarkParser.NL);
		} else {
			return this.getToken(bitmarkParser.NL, i);
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
	public Video_type(): TerminalNode | undefined { return this.tryGetToken(bitmarkParser.Video_type, 0); }
	public Audio_type(): TerminalNode | undefined { return this.tryGetToken(bitmarkParser.Audio_type, 0); }
	public Image_type(): TerminalNode | undefined { return this.tryGetToken(bitmarkParser.Image_type, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return bitmarkParser.RULE_document_upload; }
	// @Override
	public enterRule(listener: bitmarkParserListener): void {
		if (listener.enterDocument_upload) {
			listener.enterDocument_upload(this);
		}
	}
	// @Override
	public exitRule(listener: bitmarkParserListener): void {
		if (listener.exitDocument_upload) {
			listener.exitDocument_upload(this);
		}
	}
}


export class Take_pictureContext extends ParserRuleContext {
	public BitTakepic(): TerminalNode { return this.getToken(bitmarkParser.BitTakepic, 0); }
	public format(): FormatContext {
		return this.getRuleContext(0, FormatContext);
	}
	public CL(): TerminalNode { return this.getToken(bitmarkParser.CL, 0); }
	public NL(): TerminalNode[];
	public NL(i: number): TerminalNode;
	public NL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(bitmarkParser.NL);
		} else {
			return this.getToken(bitmarkParser.NL, i);
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
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return bitmarkParser.RULE_take_picture; }
	// @Override
	public enterRule(listener: bitmarkParserListener): void {
		if (listener.enterTake_picture) {
			listener.enterTake_picture(this);
		}
	}
	// @Override
	public exitRule(listener: bitmarkParserListener): void {
		if (listener.exitTake_picture) {
			listener.exitTake_picture(this);
		}
	}
}


export class Record_audioContext extends ParserRuleContext {
	public BitRecaud(): TerminalNode { return this.getToken(bitmarkParser.BitRecaud, 0); }
	public format(): FormatContext {
		return this.getRuleContext(0, FormatContext);
	}
	public CL(): TerminalNode { return this.getToken(bitmarkParser.CL, 0); }
	public NL(): TerminalNode[];
	public NL(i: number): TerminalNode;
	public NL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(bitmarkParser.NL);
		} else {
			return this.getToken(bitmarkParser.NL, i);
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
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return bitmarkParser.RULE_record_audio; }
	// @Override
	public enterRule(listener: bitmarkParserListener): void {
		if (listener.enterRecord_audio) {
			listener.enterRecord_audio(this);
		}
	}
	// @Override
	public exitRule(listener: bitmarkParserListener): void {
		if (listener.exitRecord_audio) {
			listener.exitRecord_audio(this);
		}
	}
}


export class Preparation_noteContext extends ParserRuleContext {
	public BitPrepnote(): TerminalNode { return this.getToken(bitmarkParser.BitPrepnote, 0); }
	public format(): FormatContext {
		return this.getRuleContext(0, FormatContext);
	}
	public CL(): TerminalNode { return this.getToken(bitmarkParser.CL, 0); }
	public NL(): TerminalNode[];
	public NL(i: number): TerminalNode;
	public NL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(bitmarkParser.NL);
		} else {
			return this.getToken(bitmarkParser.NL, i);
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
	public lines(): LinesContext | undefined {
		return this.tryGetRuleContext(0, LinesContext);
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
	public get ruleIndex(): number { return bitmarkParser.RULE_preparation_note; }
	// @Override
	public enterRule(listener: bitmarkParserListener): void {
		if (listener.enterPreparation_note) {
			listener.enterPreparation_note(this);
		}
	}
	// @Override
	public exitRule(listener: bitmarkParserListener): void {
		if (listener.exitPreparation_note) {
			listener.exitPreparation_note(this);
		}
	}
}


export class AssignmentContext extends ParserRuleContext {
	public BitAssign(): TerminalNode { return this.getToken(bitmarkParser.BitAssign, 0); }
	public format(): FormatContext {
		return this.getRuleContext(0, FormatContext);
	}
	public CL(): TerminalNode { return this.getToken(bitmarkParser.CL, 0); }
	public NL(): TerminalNode[];
	public NL(i: number): TerminalNode;
	public NL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(bitmarkParser.NL);
		} else {
			return this.getToken(bitmarkParser.NL, i);
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
	public lines(): LinesContext | undefined {
		return this.tryGetRuleContext(0, LinesContext);
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
	public get ruleIndex(): number { return bitmarkParser.RULE_assignment; }
	// @Override
	public enterRule(listener: bitmarkParserListener): void {
		if (listener.enterAssignment) {
			listener.enterAssignment(this);
		}
	}
	// @Override
	public exitRule(listener: bitmarkParserListener): void {
		if (listener.exitAssignment) {
			listener.exitAssignment(this);
		}
	}
}


export class ArticleContext extends ParserRuleContext {
	public BitArticle(): TerminalNode { return this.getToken(bitmarkParser.BitArticle, 0); }
	public format(): FormatContext {
		return this.getRuleContext(0, FormatContext);
	}
	public CL(): TerminalNode { return this.getToken(bitmarkParser.CL, 0); }
	public NL(): TerminalNode[];
	public NL(i: number): TerminalNode;
	public NL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(bitmarkParser.NL);
		} else {
			return this.getToken(bitmarkParser.NL, i);
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
	public get ruleIndex(): number { return bitmarkParser.RULE_article; }
	// @Override
	public enterRule(listener: bitmarkParserListener): void {
		if (listener.enterArticle) {
			listener.enterArticle(this);
		}
	}
	// @Override
	public exitRule(listener: bitmarkParserListener): void {
		if (listener.exitArticle) {
			listener.exitArticle(this);
		}
	}
}


export class StatementContext extends ParserRuleContext {
	public BitStatement(): TerminalNode { return this.getToken(bitmarkParser.BitStatement, 0); }
	public format(): FormatContext {
		return this.getRuleContext(0, FormatContext);
	}
	public CL(): TerminalNode { return this.getToken(bitmarkParser.CL, 0); }
	public NL(): TerminalNode[];
	public NL(i: number): TerminalNode;
	public NL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(bitmarkParser.NL);
		} else {
			return this.getToken(bitmarkParser.NL, i);
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
	public get ruleIndex(): number { return bitmarkParser.RULE_statement; }
	// @Override
	public enterRule(listener: bitmarkParserListener): void {
		if (listener.enterStatement) {
			listener.enterStatement(this);
		}
	}
	// @Override
	public exitRule(listener: bitmarkParserListener): void {
		if (listener.exitStatement) {
			listener.exitStatement(this);
		}
	}
}


export class DetailsContext extends ParserRuleContext {
	public BitDetails(): TerminalNode { return this.getToken(bitmarkParser.BitDetails, 0); }
	public format(): FormatContext {
		return this.getRuleContext(0, FormatContext);
	}
	public CL(): TerminalNode { return this.getToken(bitmarkParser.CL, 0); }
	public NL(): TerminalNode[];
	public NL(i: number): TerminalNode;
	public NL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(bitmarkParser.NL);
		} else {
			return this.getToken(bitmarkParser.NL, i);
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
	public get ruleIndex(): number { return bitmarkParser.RULE_details; }
	// @Override
	public enterRule(listener: bitmarkParserListener): void {
		if (listener.enterDetails) {
			listener.enterDetails(this);
		}
	}
	// @Override
	public exitRule(listener: bitmarkParserListener): void {
		if (listener.exitDetails) {
			listener.exitDetails(this);
		}
	}
}


export class ButtoncopytextContext extends ParserRuleContext {
	public BitButtonCopytext(): TerminalNode { return this.getToken(bitmarkParser.BitButtonCopytext, 0); }
	public format(): FormatContext {
		return this.getRuleContext(0, FormatContext);
	}
	public CL(): TerminalNode { return this.getToken(bitmarkParser.CL, 0); }
	public NL(): TerminalNode[];
	public NL(i: number): TerminalNode;
	public NL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(bitmarkParser.NL);
		} else {
			return this.getToken(bitmarkParser.NL, i);
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
	public get ruleIndex(): number { return bitmarkParser.RULE_buttoncopytext; }
	// @Override
	public enterRule(listener: bitmarkParserListener): void {
		if (listener.enterButtoncopytext) {
			listener.enterButtoncopytext(this);
		}
	}
	// @Override
	public exitRule(listener: bitmarkParserListener): void {
		if (listener.exitButtoncopytext) {
			listener.exitButtoncopytext(this);
		}
	}
}


export class WbtcontinueContext extends ParserRuleContext {
	public BitWbtContinue(): TerminalNode { return this.getToken(bitmarkParser.BitWbtContinue, 0); }
	public format(): FormatContext {
		return this.getRuleContext(0, FormatContext);
	}
	public CL(): TerminalNode { return this.getToken(bitmarkParser.CL, 0); }
	public NL(): TerminalNode[];
	public NL(i: number): TerminalNode;
	public NL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(bitmarkParser.NL);
		} else {
			return this.getToken(bitmarkParser.NL, i);
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
	public get ruleIndex(): number { return bitmarkParser.RULE_wbtcontinue; }
	// @Override
	public enterRule(listener: bitmarkParserListener): void {
		if (listener.enterWbtcontinue) {
			listener.enterWbtcontinue(this);
		}
	}
	// @Override
	public exitRule(listener: bitmarkParserListener): void {
		if (listener.exitWbtcontinue) {
			listener.exitWbtcontinue(this);
		}
	}
}


export class LearningpathdetailsContext extends ParserRuleContext {
	public BitLearningPathDetails(): TerminalNode { return this.getToken(bitmarkParser.BitLearningPathDetails, 0); }
	public format(): FormatContext {
		return this.getRuleContext(0, FormatContext);
	}
	public CL(): TerminalNode { return this.getToken(bitmarkParser.CL, 0); }
	public NL(): TerminalNode[];
	public NL(i: number): TerminalNode;
	public NL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(bitmarkParser.NL);
		} else {
			return this.getToken(bitmarkParser.NL, i);
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
	public get ruleIndex(): number { return bitmarkParser.RULE_learningpathdetails; }
	// @Override
	public enterRule(listener: bitmarkParserListener): void {
		if (listener.enterLearningpathdetails) {
			listener.enterLearningpathdetails(this);
		}
	}
	// @Override
	public exitRule(listener: bitmarkParserListener): void {
		if (listener.exitLearningpathdetails) {
			listener.exitLearningpathdetails(this);
		}
	}
}


export class PageContext extends ParserRuleContext {
	public BitPage(): TerminalNode { return this.getToken(bitmarkParser.BitPage, 0); }
	public format(): FormatContext {
		return this.getRuleContext(0, FormatContext);
	}
	public CL(): TerminalNode { return this.getToken(bitmarkParser.CL, 0); }
	public NL(): TerminalNode[];
	public NL(i: number): TerminalNode;
	public NL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(bitmarkParser.NL);
		} else {
			return this.getToken(bitmarkParser.NL, i);
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
	public get ruleIndex(): number { return bitmarkParser.RULE_page; }
	// @Override
	public enterRule(listener: bitmarkParserListener): void {
		if (listener.enterPage) {
			listener.enterPage(this);
		}
	}
	// @Override
	public exitRule(listener: bitmarkParserListener): void {
		if (listener.exitPage) {
			listener.exitPage(this);
		}
	}
}


export class NoteContext extends ParserRuleContext {
	public BitNote(): TerminalNode { return this.getToken(bitmarkParser.BitNote, 0); }
	public format(): FormatContext {
		return this.getRuleContext(0, FormatContext);
	}
	public CL(): TerminalNode { return this.getToken(bitmarkParser.CL, 0); }
	public NL(): TerminalNode[];
	public NL(i: number): TerminalNode;
	public NL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(bitmarkParser.NL);
		} else {
			return this.getToken(bitmarkParser.NL, i);
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
	public get ruleIndex(): number { return bitmarkParser.RULE_note; }
	// @Override
	public enterRule(listener: bitmarkParserListener): void {
		if (listener.enterNote) {
			listener.enterNote(this);
		}
	}
	// @Override
	public exitRule(listener: bitmarkParserListener): void {
		if (listener.exitNote) {
			listener.exitNote(this);
		}
	}
}


export class InfoContext extends ParserRuleContext {
	public BitInfo(): TerminalNode { return this.getToken(bitmarkParser.BitInfo, 0); }
	public format(): FormatContext {
		return this.getRuleContext(0, FormatContext);
	}
	public CL(): TerminalNode { return this.getToken(bitmarkParser.CL, 0); }
	public NL(): TerminalNode[];
	public NL(i: number): TerminalNode;
	public NL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(bitmarkParser.NL);
		} else {
			return this.getToken(bitmarkParser.NL, i);
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
	public get ruleIndex(): number { return bitmarkParser.RULE_info; }
	// @Override
	public enterRule(listener: bitmarkParserListener): void {
		if (listener.enterInfo) {
			listener.enterInfo(this);
		}
	}
	// @Override
	public exitRule(listener: bitmarkParserListener): void {
		if (listener.exitInfo) {
			listener.exitInfo(this);
		}
	}
}


export class WarningContext extends ParserRuleContext {
	public BitWarning(): TerminalNode { return this.getToken(bitmarkParser.BitWarning, 0); }
	public format(): FormatContext {
		return this.getRuleContext(0, FormatContext);
	}
	public CL(): TerminalNode { return this.getToken(bitmarkParser.CL, 0); }
	public NL(): TerminalNode[];
	public NL(i: number): TerminalNode;
	public NL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(bitmarkParser.NL);
		} else {
			return this.getToken(bitmarkParser.NL, i);
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
	public get ruleIndex(): number { return bitmarkParser.RULE_warning; }
	// @Override
	public enterRule(listener: bitmarkParserListener): void {
		if (listener.enterWarning) {
			listener.enterWarning(this);
		}
	}
	// @Override
	public exitRule(listener: bitmarkParserListener): void {
		if (listener.exitWarning) {
			listener.exitWarning(this);
		}
	}
}


export class RemarkContext extends ParserRuleContext {
	public BitRemark(): TerminalNode { return this.getToken(bitmarkParser.BitRemark, 0); }
	public format(): FormatContext {
		return this.getRuleContext(0, FormatContext);
	}
	public CL(): TerminalNode { return this.getToken(bitmarkParser.CL, 0); }
	public NL(): TerminalNode[];
	public NL(i: number): TerminalNode;
	public NL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(bitmarkParser.NL);
		} else {
			return this.getToken(bitmarkParser.NL, i);
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
	public get ruleIndex(): number { return bitmarkParser.RULE_remark; }
	// @Override
	public enterRule(listener: bitmarkParserListener): void {
		if (listener.enterRemark) {
			listener.enterRemark(this);
		}
	}
	// @Override
	public exitRule(listener: bitmarkParserListener): void {
		if (listener.exitRemark) {
			listener.exitRemark(this);
		}
	}
}


export class HelpContext extends ParserRuleContext {
	public BitHelp(): TerminalNode { return this.getToken(bitmarkParser.BitHelp, 0); }
	public format(): FormatContext {
		return this.getRuleContext(0, FormatContext);
	}
	public CL(): TerminalNode { return this.getToken(bitmarkParser.CL, 0); }
	public NL(): TerminalNode[];
	public NL(i: number): TerminalNode;
	public NL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(bitmarkParser.NL);
		} else {
			return this.getToken(bitmarkParser.NL, i);
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
	public get ruleIndex(): number { return bitmarkParser.RULE_help; }
	// @Override
	public enterRule(listener: bitmarkParserListener): void {
		if (listener.enterHelp) {
			listener.enterHelp(this);
		}
	}
	// @Override
	public exitRule(listener: bitmarkParserListener): void {
		if (listener.exitHelp) {
			listener.exitHelp(this);
		}
	}
}


export class DangerContext extends ParserRuleContext {
	public BitDanger(): TerminalNode { return this.getToken(bitmarkParser.BitDanger, 0); }
	public format(): FormatContext {
		return this.getRuleContext(0, FormatContext);
	}
	public CL(): TerminalNode { return this.getToken(bitmarkParser.CL, 0); }
	public NL(): TerminalNode[];
	public NL(i: number): TerminalNode;
	public NL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(bitmarkParser.NL);
		} else {
			return this.getToken(bitmarkParser.NL, i);
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
	public get ruleIndex(): number { return bitmarkParser.RULE_danger; }
	// @Override
	public enterRule(listener: bitmarkParserListener): void {
		if (listener.enterDanger) {
			listener.enterDanger(this);
		}
	}
	// @Override
	public exitRule(listener: bitmarkParserListener): void {
		if (listener.exitDanger) {
			listener.exitDanger(this);
		}
	}
}


export class BugContext extends ParserRuleContext {
	public BitBug(): TerminalNode { return this.getToken(bitmarkParser.BitBug, 0); }
	public format(): FormatContext {
		return this.getRuleContext(0, FormatContext);
	}
	public CL(): TerminalNode { return this.getToken(bitmarkParser.CL, 0); }
	public NL(): TerminalNode[];
	public NL(i: number): TerminalNode;
	public NL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(bitmarkParser.NL);
		} else {
			return this.getToken(bitmarkParser.NL, i);
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
	public get ruleIndex(): number { return bitmarkParser.RULE_bug; }
	// @Override
	public enterRule(listener: bitmarkParserListener): void {
		if (listener.enterBug) {
			listener.enterBug(this);
		}
	}
	// @Override
	public exitRule(listener: bitmarkParserListener): void {
		if (listener.exitBug) {
			listener.exitBug(this);
		}
	}
}


export class SidenoteContext extends ParserRuleContext {
	public BitSidenote(): TerminalNode { return this.getToken(bitmarkParser.BitSidenote, 0); }
	public format(): FormatContext {
		return this.getRuleContext(0, FormatContext);
	}
	public CL(): TerminalNode { return this.getToken(bitmarkParser.CL, 0); }
	public NL(): TerminalNode[];
	public NL(i: number): TerminalNode;
	public NL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(bitmarkParser.NL);
		} else {
			return this.getToken(bitmarkParser.NL, i);
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
	public get ruleIndex(): number { return bitmarkParser.RULE_sidenote; }
	// @Override
	public enterRule(listener: bitmarkParserListener): void {
		if (listener.enterSidenote) {
			listener.enterSidenote(this);
		}
	}
	// @Override
	public exitRule(listener: bitmarkParserListener): void {
		if (listener.exitSidenote) {
			listener.exitSidenote(this);
		}
	}
}


export class StickynoteContext extends ParserRuleContext {
	public BitStickynote(): TerminalNode { return this.getToken(bitmarkParser.BitStickynote, 0); }
	public format(): FormatContext {
		return this.getRuleContext(0, FormatContext);
	}
	public CL(): TerminalNode { return this.getToken(bitmarkParser.CL, 0); }
	public NL(): TerminalNode[];
	public NL(i: number): TerminalNode;
	public NL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(bitmarkParser.NL);
		} else {
			return this.getToken(bitmarkParser.NL, i);
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
	public get ruleIndex(): number { return bitmarkParser.RULE_stickynote; }
	// @Override
	public enterRule(listener: bitmarkParserListener): void {
		if (listener.enterStickynote) {
			listener.enterStickynote(this);
		}
	}
	// @Override
	public exitRule(listener: bitmarkParserListener): void {
		if (listener.exitStickynote) {
			listener.exitStickynote(this);
		}
	}
}


export class QuoteContext extends ParserRuleContext {
	public BitQuote(): TerminalNode { return this.getToken(bitmarkParser.BitQuote, 0); }
	public format(): FormatContext {
		return this.getRuleContext(0, FormatContext);
	}
	public CL(): TerminalNode { return this.getToken(bitmarkParser.CL, 0); }
	public NL(): TerminalNode[];
	public NL(i: number): TerminalNode;
	public NL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(bitmarkParser.NL);
		} else {
			return this.getToken(bitmarkParser.NL, i);
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
	public get ruleIndex(): number { return bitmarkParser.RULE_quote; }
	// @Override
	public enterRule(listener: bitmarkParserListener): void {
		if (listener.enterQuote) {
			listener.enterQuote(this);
		}
	}
	// @Override
	public exitRule(listener: bitmarkParserListener): void {
		if (listener.exitQuote) {
			listener.exitQuote(this);
		}
	}
}


export class FootnoteContext extends ParserRuleContext {
	public BitFootnote(): TerminalNode { return this.getToken(bitmarkParser.BitFootnote, 0); }
	public format(): FormatContext {
		return this.getRuleContext(0, FormatContext);
	}
	public CL(): TerminalNode { return this.getToken(bitmarkParser.CL, 0); }
	public NL(): TerminalNode[];
	public NL(i: number): TerminalNode;
	public NL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(bitmarkParser.NL);
		} else {
			return this.getToken(bitmarkParser.NL, i);
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
	public get ruleIndex(): number { return bitmarkParser.RULE_footnote; }
	// @Override
	public enterRule(listener: bitmarkParserListener): void {
		if (listener.enterFootnote) {
			listener.enterFootnote(this);
		}
	}
	// @Override
	public exitRule(listener: bitmarkParserListener): void {
		if (listener.exitFootnote) {
			listener.exitFootnote(this);
		}
	}
}


export class HintbitContext extends ParserRuleContext {
	public BitHint(): TerminalNode { return this.getToken(bitmarkParser.BitHint, 0); }
	public format(): FormatContext {
		return this.getRuleContext(0, FormatContext);
	}
	public CL(): TerminalNode { return this.getToken(bitmarkParser.CL, 0); }
	public NL(): TerminalNode[];
	public NL(i: number): TerminalNode;
	public NL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(bitmarkParser.NL);
		} else {
			return this.getToken(bitmarkParser.NL, i);
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
	public get ruleIndex(): number { return bitmarkParser.RULE_hintbit; }
	// @Override
	public enterRule(listener: bitmarkParserListener): void {
		if (listener.enterHintbit) {
			listener.enterHintbit(this);
		}
	}
	// @Override
	public exitRule(listener: bitmarkParserListener): void {
		if (listener.exitHintbit) {
			listener.exitHintbit(this);
		}
	}
}


export class ExamplebitContext extends ParserRuleContext {
	public BitExample(): TerminalNode { return this.getToken(bitmarkParser.BitExample, 0); }
	public format(): FormatContext {
		return this.getRuleContext(0, FormatContext);
	}
	public CL(): TerminalNode { return this.getToken(bitmarkParser.CL, 0); }
	public NL(): TerminalNode[];
	public NL(i: number): TerminalNode;
	public NL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(bitmarkParser.NL);
		} else {
			return this.getToken(bitmarkParser.NL, i);
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
	public get ruleIndex(): number { return bitmarkParser.RULE_examplebit; }
	// @Override
	public enterRule(listener: bitmarkParserListener): void {
		if (listener.enterExamplebit) {
			listener.enterExamplebit(this);
		}
	}
	// @Override
	public exitRule(listener: bitmarkParserListener): void {
		if (listener.exitExamplebit) {
			listener.exitExamplebit(this);
		}
	}
}


export class MessageContext extends ParserRuleContext {
	public BitMessage(): TerminalNode { return this.getToken(bitmarkParser.BitMessage, 0); }
	public format(): FormatContext {
		return this.getRuleContext(0, FormatContext);
	}
	public CL(): TerminalNode { return this.getToken(bitmarkParser.CL, 0); }
	public NL(): TerminalNode[];
	public NL(i: number): TerminalNode;
	public NL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(bitmarkParser.NL);
		} else {
			return this.getToken(bitmarkParser.NL, i);
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
	public get ruleIndex(): number { return bitmarkParser.RULE_message; }
	// @Override
	public enterRule(listener: bitmarkParserListener): void {
		if (listener.enterMessage) {
			listener.enterMessage(this);
		}
	}
	// @Override
	public exitRule(listener: bitmarkParserListener): void {
		if (listener.exitMessage) {
			listener.exitMessage(this);
		}
	}
}


export class Bot_interviewContext extends ParserRuleContext {
	public BitBotint(): TerminalNode { return this.getToken(bitmarkParser.BitBotint, 0); }
	public format(): FormatContext {
		return this.getRuleContext(0, FormatContext);
	}
	public CL(): TerminalNode { return this.getToken(bitmarkParser.CL, 0); }
	public HSPL(): TerminalNode[];
	public HSPL(i: number): TerminalNode;
	public HSPL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(bitmarkParser.HSPL);
		} else {
			return this.getToken(bitmarkParser.HSPL, i);
		}
	}
	public HSPL2(): TerminalNode[];
	public HSPL2(i: number): TerminalNode;
	public HSPL2(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(bitmarkParser.HSPL2);
		} else {
			return this.getToken(bitmarkParser.HSPL2, i);
		}
	}
	public bot_choice(): Bot_choiceContext[];
	public bot_choice(i: number): Bot_choiceContext;
	public bot_choice(i?: number): Bot_choiceContext | Bot_choiceContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Bot_choiceContext);
		} else {
			return this.getRuleContext(i, Bot_choiceContext);
		}
	}
	public NL(): TerminalNode[];
	public NL(i: number): TerminalNode;
	public NL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(bitmarkParser.NL);
		} else {
			return this.getToken(bitmarkParser.NL, i);
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
	public sspl(): SsplContext[];
	public sspl(i: number): SsplContext;
	public sspl(i?: number): SsplContext | SsplContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SsplContext);
		} else {
			return this.getRuleContext(i, SsplContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return bitmarkParser.RULE_bot_interview; }
	// @Override
	public enterRule(listener: bitmarkParserListener): void {
		if (listener.enterBot_interview) {
			listener.enterBot_interview(this);
		}
	}
	// @Override
	public exitRule(listener: bitmarkParserListener): void {
		if (listener.exitBot_interview) {
			listener.exitBot_interview(this);
		}
	}
}


export class Bot_choiceContext extends ParserRuleContext {
	public words(): WordsContext[];
	public words(i: number): WordsContext;
	public words(i?: number): WordsContext | WordsContext[] {
		if (i === undefined) {
			return this.getRuleContexts(WordsContext);
		} else {
			return this.getRuleContext(i, WordsContext);
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
	public audiobit(): AudiobitContext[];
	public audiobit(i: number): AudiobitContext;
	public audiobit(i?: number): AudiobitContext | AudiobitContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AudiobitContext);
		} else {
			return this.getRuleContext(i, AudiobitContext);
		}
	}
	public gap(): GapContext[];
	public gap(i: number): GapContext;
	public gap(i?: number): GapContext | GapContext[] {
		if (i === undefined) {
			return this.getRuleContexts(GapContext);
		} else {
			return this.getRuleContext(i, GapContext);
		}
	}
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
	public get ruleIndex(): number { return bitmarkParser.RULE_bot_choice; }
	// @Override
	public enterRule(listener: bitmarkParserListener): void {
		if (listener.enterBot_choice) {
			listener.enterBot_choice(this);
		}
	}
	// @Override
	public exitRule(listener: bitmarkParserListener): void {
		if (listener.exitBot_choice) {
			listener.exitBot_choice(this);
		}
	}
}


export class RatingContext extends ParserRuleContext {
	public BitRating(): TerminalNode { return this.getToken(bitmarkParser.BitRating, 0); }
	public format(): FormatContext {
		return this.getRuleContext(0, FormatContext);
	}
	public CL(): TerminalNode { return this.getToken(bitmarkParser.CL, 0); }
	public HSPL(): TerminalNode[];
	public HSPL(i: number): TerminalNode;
	public HSPL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(bitmarkParser.HSPL);
		} else {
			return this.getToken(bitmarkParser.HSPL, i);
		}
	}
	public HSPL2(): TerminalNode[];
	public HSPL2(i: number): TerminalNode;
	public HSPL2(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(bitmarkParser.HSPL2);
		} else {
			return this.getToken(bitmarkParser.HSPL2, i);
		}
	}
	public NL(): TerminalNode[];
	public NL(i: number): TerminalNode;
	public NL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(bitmarkParser.NL);
		} else {
			return this.getToken(bitmarkParser.NL, i);
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
	public s_and_w(): S_and_wContext[];
	public s_and_w(i: number): S_and_wContext;
	public s_and_w(i?: number): S_and_wContext | S_and_wContext[] {
		if (i === undefined) {
			return this.getRuleContexts(S_and_wContext);
		} else {
			return this.getRuleContext(i, S_and_wContext);
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
	public bullet_item(): Bullet_itemContext[];
	public bullet_item(i: number): Bullet_itemContext;
	public bullet_item(i?: number): Bullet_itemContext | Bullet_itemContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Bullet_itemContext);
		} else {
			return this.getRuleContext(i, Bullet_itemContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return bitmarkParser.RULE_rating; }
	// @Override
	public enterRule(listener: bitmarkParserListener): void {
		if (listener.enterRating) {
			listener.enterRating(this);
		}
	}
	// @Override
	public exitRule(listener: bitmarkParserListener): void {
		if (listener.exitRating) {
			listener.exitRating(this);
		}
	}
}


export class Bullet_itemContext extends ParserRuleContext {
	public OPBUL(): TerminalNode { return this.getToken(bitmarkParser.OPBUL, 0); }
	public s_and_w(): S_and_wContext {
		return this.getRuleContext(0, S_and_wContext);
	}
	public CL(): TerminalNode { return this.getToken(bitmarkParser.CL, 0); }
	public atpoint(): AtpointContext | undefined {
		return this.tryGetRuleContext(0, AtpointContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return bitmarkParser.RULE_bullet_item; }
	// @Override
	public enterRule(listener: bitmarkParserListener): void {
		if (listener.enterBullet_item) {
			listener.enterBullet_item(this);
		}
	}
	// @Override
	public exitRule(listener: bitmarkParserListener): void {
		if (listener.exitBullet_item) {
			listener.exitBullet_item(this);
		}
	}
}


export class SurveyContext extends ParserRuleContext {
	public BitSurvey(): TerminalNode { return this.getToken(bitmarkParser.BitSurvey, 0); }
	public format(): FormatContext {
		return this.getRuleContext(0, FormatContext);
	}
	public CL(): TerminalNode { return this.getToken(bitmarkParser.CL, 0); }
	public HSPL(): TerminalNode[];
	public HSPL(i: number): TerminalNode;
	public HSPL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(bitmarkParser.HSPL);
		} else {
			return this.getToken(bitmarkParser.HSPL, i);
		}
	}
	public HSPL2(): TerminalNode[];
	public HSPL2(i: number): TerminalNode;
	public HSPL2(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(bitmarkParser.HSPL2);
		} else {
			return this.getToken(bitmarkParser.HSPL2, i);
		}
	}
	public NL(): TerminalNode[];
	public NL(i: number): TerminalNode;
	public NL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(bitmarkParser.NL);
		} else {
			return this.getToken(bitmarkParser.NL, i);
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
	public s_and_w(): S_and_wContext[];
	public s_and_w(i: number): S_and_wContext;
	public s_and_w(i?: number): S_and_wContext | S_and_wContext[] {
		if (i === undefined) {
			return this.getRuleContexts(S_and_wContext);
		} else {
			return this.getRuleContext(i, S_and_wContext);
		}
	}
	public bullet_item(): Bullet_itemContext[];
	public bullet_item(i: number): Bullet_itemContext;
	public bullet_item(i?: number): Bullet_itemContext | Bullet_itemContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Bullet_itemContext);
		} else {
			return this.getRuleContext(i, Bullet_itemContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return bitmarkParser.RULE_survey; }
	// @Override
	public enterRule(listener: bitmarkParserListener): void {
		if (listener.enterSurvey) {
			listener.enterSurvey(this);
		}
	}
	// @Override
	public exitRule(listener: bitmarkParserListener): void {
		if (listener.exitSurvey) {
			listener.exitSurvey(this);
		}
	}
}


export class Survey_1Context extends ParserRuleContext {
	public BitSurvey1(): TerminalNode { return this.getToken(bitmarkParser.BitSurvey1, 0); }
	public format(): FormatContext {
		return this.getRuleContext(0, FormatContext);
	}
	public CL(): TerminalNode { return this.getToken(bitmarkParser.CL, 0); }
	public HSPL(): TerminalNode[];
	public HSPL(i: number): TerminalNode;
	public HSPL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(bitmarkParser.HSPL);
		} else {
			return this.getToken(bitmarkParser.HSPL, i);
		}
	}
	public HSPL2(): TerminalNode[];
	public HSPL2(i: number): TerminalNode;
	public HSPL2(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(bitmarkParser.HSPL2);
		} else {
			return this.getToken(bitmarkParser.HSPL2, i);
		}
	}
	public NL(): TerminalNode[];
	public NL(i: number): TerminalNode;
	public NL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(bitmarkParser.NL);
		} else {
			return this.getToken(bitmarkParser.NL, i);
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
	public s_and_w(): S_and_wContext[];
	public s_and_w(i: number): S_and_wContext;
	public s_and_w(i?: number): S_and_wContext | S_and_wContext[] {
		if (i === undefined) {
			return this.getRuleContexts(S_and_wContext);
		} else {
			return this.getRuleContext(i, S_and_wContext);
		}
	}
	public bullet_item(): Bullet_itemContext[];
	public bullet_item(i: number): Bullet_itemContext;
	public bullet_item(i?: number): Bullet_itemContext | Bullet_itemContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Bullet_itemContext);
		} else {
			return this.getRuleContext(i, Bullet_itemContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return bitmarkParser.RULE_survey_1; }
	// @Override
	public enterRule(listener: bitmarkParserListener): void {
		if (listener.enterSurvey_1) {
			listener.enterSurvey_1(this);
		}
	}
	// @Override
	public exitRule(listener: bitmarkParserListener): void {
		if (listener.exitSurvey_1) {
			listener.exitSurvey_1(this);
		}
	}
}


export class Survey_anonymousContext extends ParserRuleContext {
	public BitSurveyanon(): TerminalNode { return this.getToken(bitmarkParser.BitSurveyanon, 0); }
	public format(): FormatContext {
		return this.getRuleContext(0, FormatContext);
	}
	public CL(): TerminalNode { return this.getToken(bitmarkParser.CL, 0); }
	public HSPL(): TerminalNode[];
	public HSPL(i: number): TerminalNode;
	public HSPL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(bitmarkParser.HSPL);
		} else {
			return this.getToken(bitmarkParser.HSPL, i);
		}
	}
	public HSPL2(): TerminalNode[];
	public HSPL2(i: number): TerminalNode;
	public HSPL2(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(bitmarkParser.HSPL2);
		} else {
			return this.getToken(bitmarkParser.HSPL2, i);
		}
	}
	public NL(): TerminalNode[];
	public NL(i: number): TerminalNode;
	public NL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(bitmarkParser.NL);
		} else {
			return this.getToken(bitmarkParser.NL, i);
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
	public s_and_w(): S_and_wContext[];
	public s_and_w(i: number): S_and_wContext;
	public s_and_w(i?: number): S_and_wContext | S_and_wContext[] {
		if (i === undefined) {
			return this.getRuleContexts(S_and_wContext);
		} else {
			return this.getRuleContext(i, S_and_wContext);
		}
	}
	public bullet_item(): Bullet_itemContext[];
	public bullet_item(i: number): Bullet_itemContext;
	public bullet_item(i?: number): Bullet_itemContext | Bullet_itemContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Bullet_itemContext);
		} else {
			return this.getRuleContext(i, Bullet_itemContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return bitmarkParser.RULE_survey_anonymous; }
	// @Override
	public enterRule(listener: bitmarkParserListener): void {
		if (listener.enterSurvey_anonymous) {
			listener.enterSurvey_anonymous(this);
		}
	}
	// @Override
	public exitRule(listener: bitmarkParserListener): void {
		if (listener.exitSurvey_anonymous) {
			listener.exitSurvey_anonymous(this);
		}
	}
}


export class Survey_anonymous_1Context extends ParserRuleContext {
	public BitSurveyanon1(): TerminalNode { return this.getToken(bitmarkParser.BitSurveyanon1, 0); }
	public format(): FormatContext {
		return this.getRuleContext(0, FormatContext);
	}
	public CL(): TerminalNode { return this.getToken(bitmarkParser.CL, 0); }
	public HSPL(): TerminalNode[];
	public HSPL(i: number): TerminalNode;
	public HSPL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(bitmarkParser.HSPL);
		} else {
			return this.getToken(bitmarkParser.HSPL, i);
		}
	}
	public HSPL2(): TerminalNode[];
	public HSPL2(i: number): TerminalNode;
	public HSPL2(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(bitmarkParser.HSPL2);
		} else {
			return this.getToken(bitmarkParser.HSPL2, i);
		}
	}
	public NL(): TerminalNode[];
	public NL(i: number): TerminalNode;
	public NL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(bitmarkParser.NL);
		} else {
			return this.getToken(bitmarkParser.NL, i);
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
	public s_and_w(): S_and_wContext[];
	public s_and_w(i: number): S_and_wContext;
	public s_and_w(i?: number): S_and_wContext | S_and_wContext[] {
		if (i === undefined) {
			return this.getRuleContexts(S_and_wContext);
		} else {
			return this.getRuleContext(i, S_and_wContext);
		}
	}
	public bullet_item(): Bullet_itemContext[];
	public bullet_item(i: number): Bullet_itemContext;
	public bullet_item(i?: number): Bullet_itemContext | Bullet_itemContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Bullet_itemContext);
		} else {
			return this.getRuleContext(i, Bullet_itemContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return bitmarkParser.RULE_survey_anonymous_1; }
	// @Override
	public enterRule(listener: bitmarkParserListener): void {
		if (listener.enterSurvey_anonymous_1) {
			listener.enterSurvey_anonymous_1(this);
		}
	}
	// @Override
	public exitRule(listener: bitmarkParserListener): void {
		if (listener.exitSurvey_anonymous_1) {
			listener.exitSurvey_anonymous_1(this);
		}
	}
}


export class Self_assessmentContext extends ParserRuleContext {
	public BitSelfassess(): TerminalNode { return this.getToken(bitmarkParser.BitSelfassess, 0); }
	public format(): FormatContext {
		return this.getRuleContext(0, FormatContext);
	}
	public CL(): TerminalNode { return this.getToken(bitmarkParser.CL, 0); }
	public HSPL(): TerminalNode[];
	public HSPL(i: number): TerminalNode;
	public HSPL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(bitmarkParser.HSPL);
		} else {
			return this.getToken(bitmarkParser.HSPL, i);
		}
	}
	public HSPL2(): TerminalNode[];
	public HSPL2(i: number): TerminalNode;
	public HSPL2(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(bitmarkParser.HSPL2);
		} else {
			return this.getToken(bitmarkParser.HSPL2, i);
		}
	}
	public NL(): TerminalNode[];
	public NL(i: number): TerminalNode;
	public NL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(bitmarkParser.NL);
		} else {
			return this.getToken(bitmarkParser.NL, i);
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
	public self_assess_s_and_w(): Self_assess_s_and_wContext[];
	public self_assess_s_and_w(i: number): Self_assess_s_and_wContext;
	public self_assess_s_and_w(i?: number): Self_assess_s_and_wContext | Self_assess_s_and_wContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Self_assess_s_and_wContext);
		} else {
			return this.getRuleContext(i, Self_assess_s_and_wContext);
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
	public bullet_item(): Bullet_itemContext[];
	public bullet_item(i: number): Bullet_itemContext;
	public bullet_item(i?: number): Bullet_itemContext | Bullet_itemContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Bullet_itemContext);
		} else {
			return this.getRuleContext(i, Bullet_itemContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return bitmarkParser.RULE_self_assessment; }
	// @Override
	public enterRule(listener: bitmarkParserListener): void {
		if (listener.enterSelf_assessment) {
			listener.enterSelf_assessment(this);
		}
	}
	// @Override
	public exitRule(listener: bitmarkParserListener): void {
		if (listener.exitSelf_assessment) {
			listener.exitSelf_assessment(this);
		}
	}
}


export class Self_assess_s_and_wContext extends ParserRuleContext {
	public OPBUL(): TerminalNode[];
	public OPBUL(i: number): TerminalNode;
	public OPBUL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(bitmarkParser.OPBUL);
		} else {
			return this.getToken(bitmarkParser.OPBUL, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return bitmarkParser.RULE_self_assess_s_and_w; }
	// @Override
	public enterRule(listener: bitmarkParserListener): void {
		if (listener.enterSelf_assess_s_and_w) {
			listener.enterSelf_assess_s_and_w(this);
		}
	}
	// @Override
	public exitRule(listener: bitmarkParserListener): void {
		if (listener.exitSelf_assess_s_and_w) {
			listener.exitSelf_assess_s_and_w(this);
		}
	}
}


export class AtpointContext extends ParserRuleContext {
	public AtPoints(): TerminalNode { return this.getToken(bitmarkParser.AtPoints, 0); }
	public NUMERIC(): TerminalNode { return this.getToken(bitmarkParser.NUMERIC, 0); }
	public CL(): TerminalNode { return this.getToken(bitmarkParser.CL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return bitmarkParser.RULE_atpoint; }
	// @Override
	public enterRule(listener: bitmarkParserListener): void {
		if (listener.enterAtpoint) {
			listener.enterAtpoint(this);
		}
	}
	// @Override
	public exitRule(listener: bitmarkParserListener): void {
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
			return this.getTokens(bitmarkParser.ColonText);
		} else {
			return this.getToken(bitmarkParser.ColonText, i);
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
	public get ruleIndex(): number { return bitmarkParser.RULE_format; }
	// @Override
	public enterRule(listener: bitmarkParserListener): void {
		if (listener.enterFormat) {
			listener.enterFormat(this);
		}
	}
	// @Override
	public exitRule(listener: bitmarkParserListener): void {
		if (listener.exitFormat) {
			listener.exitFormat(this);
		}
	}
}


export class Resource_formatContext extends ParserRuleContext {
	public BitmarkMinus(): TerminalNode | undefined { return this.tryGetToken(bitmarkParser.BitmarkMinus, 0); }
	public BitmarkPlus(): TerminalNode | undefined { return this.tryGetToken(bitmarkParser.BitmarkPlus, 0); }
	public AmpArticle(): TerminalNode | undefined { return this.tryGetToken(bitmarkParser.AmpArticle, 0); }
	public AmpDocument(): TerminalNode | undefined { return this.tryGetToken(bitmarkParser.AmpDocument, 0); }
	public AmpWebsite(): TerminalNode | undefined { return this.tryGetToken(bitmarkParser.AmpWebsite, 0); }
	public AmpStillImageFilm(): TerminalNode | undefined { return this.tryGetToken(bitmarkParser.AmpStillImageFilm, 0); }
	public AmpAudioLink(): TerminalNode | undefined { return this.tryGetToken(bitmarkParser.AmpAudioLink, 0); }
	public AmpImageLink(): TerminalNode | undefined { return this.tryGetToken(bitmarkParser.AmpImageLink, 0); }
	public AmpVideoLink(): TerminalNode | undefined { return this.tryGetToken(bitmarkParser.AmpVideoLink, 0); }
	public AmpArticleLink(): TerminalNode | undefined { return this.tryGetToken(bitmarkParser.AmpArticleLink, 0); }
	public AmpDocumentLink(): TerminalNode | undefined { return this.tryGetToken(bitmarkParser.AmpDocumentLink, 0); }
	public AmpAppLink(): TerminalNode | undefined { return this.tryGetToken(bitmarkParser.AmpAppLink, 0); }
	public AmpWebsiteLink(): TerminalNode | undefined { return this.tryGetToken(bitmarkParser.AmpWebsiteLink, 0); }
	public AmpStillImageFilmLink(): TerminalNode | undefined { return this.tryGetToken(bitmarkParser.AmpStillImageFilmLink, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return bitmarkParser.RULE_resource_format; }
	// @Override
	public enterRule(listener: bitmarkParserListener): void {
		if (listener.enterResource_format) {
			listener.enterResource_format(this);
		}
	}
	// @Override
	public exitRule(listener: bitmarkParserListener): void {
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
	public AmpPdf(): TerminalNode | undefined { return this.tryGetToken(bitmarkParser.AmpPdf, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return bitmarkParser.RULE_resource_format_extra; }
	// @Override
	public enterRule(listener: bitmarkParserListener): void {
		if (listener.enterResource_format_extra) {
			listener.enterResource_format_extra(this);
		}
	}
	// @Override
	public exitRule(listener: bitmarkParserListener): void {
		if (listener.exitResource_format_extra) {
			listener.exitResource_format_extra(this);
		}
	}
}


export class Image_formatContext extends ParserRuleContext {
	public AmpImage(): TerminalNode | undefined { return this.tryGetToken(bitmarkParser.AmpImage, 0); }
	public Image_type(): TerminalNode | undefined { return this.tryGetToken(bitmarkParser.Image_type, 0); }
	public DotArticleAtt(): TerminalNode | undefined { return this.tryGetToken(bitmarkParser.DotArticleAtt, 0); }
	public AmpImageLink(): TerminalNode | undefined { return this.tryGetToken(bitmarkParser.AmpImageLink, 0); }
	public AmpImageZoom(): TerminalNode | undefined { return this.tryGetToken(bitmarkParser.AmpImageZoom, 0); }
	public AmpImageWAudio(): TerminalNode | undefined { return this.tryGetToken(bitmarkParser.AmpImageWAudio, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return bitmarkParser.RULE_image_format; }
	// @Override
	public enterRule(listener: bitmarkParserListener): void {
		if (listener.enterImage_format) {
			listener.enterImage_format(this);
		}
	}
	// @Override
	public exitRule(listener: bitmarkParserListener): void {
		if (listener.exitImage_format) {
			listener.exitImage_format(this);
		}
	}
}


export class Video_formatContext extends ParserRuleContext {
	public AmpVideo(): TerminalNode | undefined { return this.tryGetToken(bitmarkParser.AmpVideo, 0); }
	public AmpVideoLink(): TerminalNode | undefined { return this.tryGetToken(bitmarkParser.AmpVideoLink, 0); }
	public COLON(): TerminalNode | undefined { return this.tryGetToken(bitmarkParser.COLON, 0); }
	public Video_type(): TerminalNode | undefined { return this.tryGetToken(bitmarkParser.Video_type, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return bitmarkParser.RULE_video_format; }
	// @Override
	public enterRule(listener: bitmarkParserListener): void {
		if (listener.enterVideo_format) {
			listener.enterVideo_format(this);
		}
	}
	// @Override
	public exitRule(listener: bitmarkParserListener): void {
		if (listener.exitVideo_format) {
			listener.exitVideo_format(this);
		}
	}
}


export class Article_formatContext extends ParserRuleContext {
	public AmpArticle(): TerminalNode | undefined { return this.tryGetToken(bitmarkParser.AmpArticle, 0); }
	public AmpArticleLink(): TerminalNode | undefined { return this.tryGetToken(bitmarkParser.AmpArticleLink, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return bitmarkParser.RULE_article_format; }
	// @Override
	public enterRule(listener: bitmarkParserListener): void {
		if (listener.enterArticle_format) {
			listener.enterArticle_format(this);
		}
	}
	// @Override
	public exitRule(listener: bitmarkParserListener): void {
		if (listener.exitArticle_format) {
			listener.exitArticle_format(this);
		}
	}
}


export class Document_formatContext extends ParserRuleContext {
	public AmpDocument(): TerminalNode | undefined { return this.tryGetToken(bitmarkParser.AmpDocument, 0); }
	public AmpDocumentLink(): TerminalNode | undefined { return this.tryGetToken(bitmarkParser.AmpDocumentLink, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return bitmarkParser.RULE_document_format; }
	// @Override
	public enterRule(listener: bitmarkParserListener): void {
		if (listener.enterDocument_format) {
			listener.enterDocument_format(this);
		}
	}
	// @Override
	public exitRule(listener: bitmarkParserListener): void {
		if (listener.exitDocument_format) {
			listener.exitDocument_format(this);
		}
	}
}


export class App_formatContext extends ParserRuleContext {
	public AmpApp(): TerminalNode | undefined { return this.tryGetToken(bitmarkParser.AmpApp, 0); }
	public AmpAppLink(): TerminalNode | undefined { return this.tryGetToken(bitmarkParser.AmpAppLink, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return bitmarkParser.RULE_app_format; }
	// @Override
	public enterRule(listener: bitmarkParserListener): void {
		if (listener.enterApp_format) {
			listener.enterApp_format(this);
		}
	}
	// @Override
	public exitRule(listener: bitmarkParserListener): void {
		if (listener.exitApp_format) {
			listener.exitApp_format(this);
		}
	}
}


export class Website_formatContext extends ParserRuleContext {
	public AmpWebsite(): TerminalNode | undefined { return this.tryGetToken(bitmarkParser.AmpWebsite, 0); }
	public AmpWebsiteLink(): TerminalNode | undefined { return this.tryGetToken(bitmarkParser.AmpWebsiteLink, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return bitmarkParser.RULE_website_format; }
	// @Override
	public enterRule(listener: bitmarkParserListener): void {
		if (listener.enterWebsite_format) {
			listener.enterWebsite_format(this);
		}
	}
	// @Override
	public exitRule(listener: bitmarkParserListener): void {
		if (listener.exitWebsite_format) {
			listener.exitWebsite_format(this);
		}
	}
}


export class Stillimagefilm_formatContext extends ParserRuleContext {
	public AmpStillImageFilm(): TerminalNode | undefined { return this.tryGetToken(bitmarkParser.AmpStillImageFilm, 0); }
	public AmpStillImageFilmLink(): TerminalNode | undefined { return this.tryGetToken(bitmarkParser.AmpStillImageFilmLink, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return bitmarkParser.RULE_stillimagefilm_format; }
	// @Override
	public enterRule(listener: bitmarkParserListener): void {
		if (listener.enterStillimagefilm_format) {
			listener.enterStillimagefilm_format(this);
		}
	}
	// @Override
	public exitRule(listener: bitmarkParserListener): void {
		if (listener.exitStillimagefilm_format) {
			listener.exitStillimagefilm_format(this);
		}
	}
}


export class Op_article_formatContext extends ParserRuleContext {
	public OpAmpArticleLink(): TerminalNode | undefined { return this.tryGetToken(bitmarkParser.OpAmpArticleLink, 0); }
	public OpAmpArticle(): TerminalNode | undefined { return this.tryGetToken(bitmarkParser.OpAmpArticle, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return bitmarkParser.RULE_op_article_format; }
	// @Override
	public enterRule(listener: bitmarkParserListener): void {
		if (listener.enterOp_article_format) {
			listener.enterOp_article_format(this);
		}
	}
	// @Override
	public exitRule(listener: bitmarkParserListener): void {
		if (listener.exitOp_article_format) {
			listener.exitOp_article_format(this);
		}
	}
}


export class Op_document_formatContext extends ParserRuleContext {
	public OpAmpDocumentLink(): TerminalNode | undefined { return this.tryGetToken(bitmarkParser.OpAmpDocumentLink, 0); }
	public OpAmpDocument(): TerminalNode | undefined { return this.tryGetToken(bitmarkParser.OpAmpDocument, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return bitmarkParser.RULE_op_document_format; }
	// @Override
	public enterRule(listener: bitmarkParserListener): void {
		if (listener.enterOp_document_format) {
			listener.enterOp_document_format(this);
		}
	}
	// @Override
	public exitRule(listener: bitmarkParserListener): void {
		if (listener.exitOp_document_format) {
			listener.exitOp_document_format(this);
		}
	}
}


export class Op_app_formatContext extends ParserRuleContext {
	public OpAmpApp(): TerminalNode | undefined { return this.tryGetToken(bitmarkParser.OpAmpApp, 0); }
	public OpAmpAppLink(): TerminalNode | undefined { return this.tryGetToken(bitmarkParser.OpAmpAppLink, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return bitmarkParser.RULE_op_app_format; }
	// @Override
	public enterRule(listener: bitmarkParserListener): void {
		if (listener.enterOp_app_format) {
			listener.enterOp_app_format(this);
		}
	}
	// @Override
	public exitRule(listener: bitmarkParserListener): void {
		if (listener.exitOp_app_format) {
			listener.exitOp_app_format(this);
		}
	}
}


export class Op_website_formatContext extends ParserRuleContext {
	public OpAmpWebsite(): TerminalNode | undefined { return this.tryGetToken(bitmarkParser.OpAmpWebsite, 0); }
	public OpAmpWebsiteLink(): TerminalNode | undefined { return this.tryGetToken(bitmarkParser.OpAmpWebsiteLink, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return bitmarkParser.RULE_op_website_format; }
	// @Override
	public enterRule(listener: bitmarkParserListener): void {
		if (listener.enterOp_website_format) {
			listener.enterOp_website_format(this);
		}
	}
	// @Override
	public exitRule(listener: bitmarkParserListener): void {
		if (listener.exitOp_website_format) {
			listener.exitOp_website_format(this);
		}
	}
}


export class Op_video_formatContext extends ParserRuleContext {
	public OpAmpVideo(): TerminalNode | undefined { return this.tryGetToken(bitmarkParser.OpAmpVideo, 0); }
	public COLON(): TerminalNode | undefined { return this.tryGetToken(bitmarkParser.COLON, 0); }
	public Video_type(): TerminalNode | undefined { return this.tryGetToken(bitmarkParser.Video_type, 0); }
	public OpAmpVideoLink(): TerminalNode | undefined { return this.tryGetToken(bitmarkParser.OpAmpVideoLink, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return bitmarkParser.RULE_op_video_format; }
	// @Override
	public enterRule(listener: bitmarkParserListener): void {
		if (listener.enterOp_video_format) {
			listener.enterOp_video_format(this);
		}
	}
	// @Override
	public exitRule(listener: bitmarkParserListener): void {
		if (listener.exitOp_video_format) {
			listener.exitOp_video_format(this);
		}
	}
}


export class Op_stillimagefilm_formatContext extends ParserRuleContext {
	public OpAmpStillImageFilm(): TerminalNode | undefined { return this.tryGetToken(bitmarkParser.OpAmpStillImageFilm, 0); }
	public OpAmpStillImageFilmLink(): TerminalNode | undefined { return this.tryGetToken(bitmarkParser.OpAmpStillImageFilmLink, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return bitmarkParser.RULE_op_stillimagefilm_format; }
	// @Override
	public enterRule(listener: bitmarkParserListener): void {
		if (listener.enterOp_stillimagefilm_format) {
			listener.enterOp_stillimagefilm_format(this);
		}
	}
	// @Override
	public exitRule(listener: bitmarkParserListener): void {
		if (listener.exitOp_stillimagefilm_format) {
			listener.exitOp_stillimagefilm_format(this);
		}
	}
}


export class ArticlebitContext extends ParserRuleContext {
	public op_article_format(): Op_article_formatContext | undefined {
		return this.tryGetRuleContext(0, Op_article_formatContext);
	}
	public COLON(): TerminalNode | undefined { return this.tryGetToken(bitmarkParser.COLON, 0); }
	public url(): UrlContext | undefined {
		return this.tryGetRuleContext(0, UrlContext);
	}
	public CL(): TerminalNode | undefined { return this.tryGetToken(bitmarkParser.CL, 0); }
	public ArticleText(): TerminalNode | undefined { return this.tryGetToken(bitmarkParser.ArticleText, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return bitmarkParser.RULE_articlebit; }
	// @Override
	public enterRule(listener: bitmarkParserListener): void {
		if (listener.enterArticlebit) {
			listener.enterArticlebit(this);
		}
	}
	// @Override
	public exitRule(listener: bitmarkParserListener): void {
		if (listener.exitArticlebit) {
			listener.exitArticlebit(this);
		}
	}
}


export class DocumentbitContext extends ParserRuleContext {
	public op_document_format(): Op_document_formatContext {
		return this.getRuleContext(0, Op_document_formatContext);
	}
	public COLON(): TerminalNode { return this.getToken(bitmarkParser.COLON, 0); }
	public url(): UrlContext {
		return this.getRuleContext(0, UrlContext);
	}
	public CL(): TerminalNode[];
	public CL(i: number): TerminalNode;
	public CL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(bitmarkParser.CL);
		} else {
			return this.getToken(bitmarkParser.CL, i);
		}
	}
	public OPATALT(): TerminalNode | undefined { return this.tryGetToken(bitmarkParser.OPATALT, 0); }
	public words(): WordsContext | undefined {
		return this.tryGetRuleContext(0, WordsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return bitmarkParser.RULE_documentbit; }
	// @Override
	public enterRule(listener: bitmarkParserListener): void {
		if (listener.enterDocumentbit) {
			listener.enterDocumentbit(this);
		}
	}
	// @Override
	public exitRule(listener: bitmarkParserListener): void {
		if (listener.exitDocumentbit) {
			listener.exitDocumentbit(this);
		}
	}
}


export class WebsitebitContext extends ParserRuleContext {
	public op_website_format(): Op_website_formatContext {
		return this.getRuleContext(0, Op_website_formatContext);
	}
	public COLON(): TerminalNode { return this.getToken(bitmarkParser.COLON, 0); }
	public url(): UrlContext {
		return this.getRuleContext(0, UrlContext);
	}
	public CL(): TerminalNode[];
	public CL(i: number): TerminalNode;
	public CL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(bitmarkParser.CL);
		} else {
			return this.getToken(bitmarkParser.CL, i);
		}
	}
	public OPATALT(): TerminalNode | undefined { return this.tryGetToken(bitmarkParser.OPATALT, 0); }
	public words(): WordsContext | undefined {
		return this.tryGetRuleContext(0, WordsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return bitmarkParser.RULE_websitebit; }
	// @Override
	public enterRule(listener: bitmarkParserListener): void {
		if (listener.enterWebsitebit) {
			listener.enterWebsitebit(this);
		}
	}
	// @Override
	public exitRule(listener: bitmarkParserListener): void {
		if (listener.exitWebsitebit) {
			listener.exitWebsitebit(this);
		}
	}
}


export class AppbitContext extends ParserRuleContext {
	public op_app_format(): Op_app_formatContext {
		return this.getRuleContext(0, Op_app_formatContext);
	}
	public COLON(): TerminalNode { return this.getToken(bitmarkParser.COLON, 0); }
	public CL(): TerminalNode[];
	public CL(i: number): TerminalNode;
	public CL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(bitmarkParser.CL);
		} else {
			return this.getToken(bitmarkParser.CL, i);
		}
	}
	public url(): UrlContext | undefined {
		return this.tryGetRuleContext(0, UrlContext);
	}
	public telephone(): TelephoneContext | undefined {
		return this.tryGetRuleContext(0, TelephoneContext);
	}
	public OPATALT(): TerminalNode | undefined { return this.tryGetToken(bitmarkParser.OPATALT, 0); }
	public words(): WordsContext | undefined {
		return this.tryGetRuleContext(0, WordsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return bitmarkParser.RULE_appbit; }
	// @Override
	public enterRule(listener: bitmarkParserListener): void {
		if (listener.enterAppbit) {
			listener.enterAppbit(this);
		}
	}
	// @Override
	public exitRule(listener: bitmarkParserListener): void {
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
	public get ruleIndex(): number { return bitmarkParser.RULE_stillimagefilmbit; }
	// @Override
	public enterRule(listener: bitmarkParserListener): void {
		if (listener.enterStillimagefilmbit) {
			listener.enterStillimagefilmbit(this);
		}
	}
	// @Override
	public exitRule(listener: bitmarkParserListener): void {
		if (listener.exitStillimagefilmbit) {
			listener.exitStillimagefilmbit(this);
		}
	}
}


export class Stillimg_oneContext extends ParserRuleContext {
	public op_stillimagefilm_format(): Op_stillimagefilm_formatContext {
		return this.getRuleContext(0, Op_stillimagefilm_formatContext);
	}
	public COLON(): TerminalNode { return this.getToken(bitmarkParser.COLON, 0); }
	public url(): UrlContext {
		return this.getRuleContext(0, UrlContext);
	}
	public CL(): TerminalNode { return this.getToken(bitmarkParser.CL, 0); }
	public S(): TerminalNode[];
	public S(i: number): TerminalNode;
	public S(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(bitmarkParser.S);
		} else {
			return this.getToken(bitmarkParser.S, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return bitmarkParser.RULE_stillimg_one; }
	// @Override
	public enterRule(listener: bitmarkParserListener): void {
		if (listener.enterStillimg_one) {
			listener.enterStillimg_one(this);
		}
	}
	// @Override
	public exitRule(listener: bitmarkParserListener): void {
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
	public get ruleIndex(): number { return bitmarkParser.RULE_videobit; }
	// @Override
	public enterRule(listener: bitmarkParserListener): void {
		if (listener.enterVideobit) {
			listener.enterVideobit(this);
		}
	}
	// @Override
	public exitRule(listener: bitmarkParserListener): void {
		if (listener.exitVideobit) {
			listener.exitVideobit(this);
		}
	}
}


export class Video_oneContext extends ParserRuleContext {
	public op_video_format(): Op_video_formatContext {
		return this.getRuleContext(0, Op_video_formatContext);
	}
	public COLON(): TerminalNode { return this.getToken(bitmarkParser.COLON, 0); }
	public url(): UrlContext {
		return this.getRuleContext(0, UrlContext);
	}
	public CL(): TerminalNode[];
	public CL(i: number): TerminalNode;
	public CL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(bitmarkParser.CL);
		} else {
			return this.getToken(bitmarkParser.CL, i);
		}
	}
	public OPATALT(): TerminalNode | undefined { return this.tryGetToken(bitmarkParser.OPATALT, 0); }
	public words(): WordsContext | undefined {
		return this.tryGetRuleContext(0, WordsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return bitmarkParser.RULE_video_one; }
	// @Override
	public enterRule(listener: bitmarkParserListener): void {
		if (listener.enterVideo_one) {
			listener.enterVideo_one(this);
		}
	}
	// @Override
	public exitRule(listener: bitmarkParserListener): void {
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
	public NL(): TerminalNode | undefined { return this.tryGetToken(bitmarkParser.NL, 0); }
	public ShowInIndex(): TerminalNode | undefined { return this.tryGetToken(bitmarkParser.ShowInIndex, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return bitmarkParser.RULE_imagebit; }
	// @Override
	public enterRule(listener: bitmarkParserListener): void {
		if (listener.enterImagebit) {
			listener.enterImagebit(this);
		}
	}
	// @Override
	public exitRule(listener: bitmarkParserListener): void {
		if (listener.exitImagebit) {
			listener.exitImagebit(this);
		}
	}
}


export class Image_oneContext extends ParserRuleContext {
	public op_image_format(): Op_image_formatContext {
		return this.getRuleContext(0, Op_image_formatContext);
	}
	public COLON(): TerminalNode { return this.getToken(bitmarkParser.COLON, 0); }
	public url(): UrlContext {
		return this.getRuleContext(0, UrlContext);
	}
	public CL(): TerminalNode { return this.getToken(bitmarkParser.CL, 0); }
	public S(): TerminalNode[];
	public S(i: number): TerminalNode;
	public S(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(bitmarkParser.S);
		} else {
			return this.getToken(bitmarkParser.S, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return bitmarkParser.RULE_image_one; }
	// @Override
	public enterRule(listener: bitmarkParserListener): void {
		if (listener.enterImage_one) {
			listener.enterImage_one(this);
		}
	}
	// @Override
	public exitRule(listener: bitmarkParserListener): void {
		if (listener.exitImage_one) {
			listener.exitImage_one(this);
		}
	}
}


export class Op_image_formatContext extends ParserRuleContext {
	public OpAmpImage(): TerminalNode | undefined { return this.tryGetToken(bitmarkParser.OpAmpImage, 0); }
	public Image_type(): TerminalNode | undefined { return this.tryGetToken(bitmarkParser.Image_type, 0); }
	public DotArticleAtt(): TerminalNode | undefined { return this.tryGetToken(bitmarkParser.DotArticleAtt, 0); }
	public OpAmpImageLink(): TerminalNode | undefined { return this.tryGetToken(bitmarkParser.OpAmpImageLink, 0); }
	public OpAmpImageZoom(): TerminalNode | undefined { return this.tryGetToken(bitmarkParser.OpAmpImageZoom, 0); }
	public OpAmpImageWAudio(): TerminalNode | undefined { return this.tryGetToken(bitmarkParser.OpAmpImageWAudio, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return bitmarkParser.RULE_op_image_format; }
	// @Override
	public enterRule(listener: bitmarkParserListener): void {
		if (listener.enterOp_image_format) {
			listener.enterOp_image_format(this);
		}
	}
	// @Override
	public exitRule(listener: bitmarkParserListener): void {
		if (listener.exitOp_image_format) {
			listener.exitOp_image_format(this);
		}
	}
}


export class Image_chainedContext extends ParserRuleContext {
	public AtSrc(): TerminalNode | undefined { return this.tryGetToken(bitmarkParser.AtSrc, 0); }
	public COLON(): TerminalNode | undefined { return this.tryGetToken(bitmarkParser.COLON, 0); }
	public url(): UrlContext | undefined {
		return this.tryGetRuleContext(0, UrlContext);
	}
	public CL(): TerminalNode { return this.getToken(bitmarkParser.CL, 0); }
	public NUMERIC(): TerminalNode | undefined { return this.tryGetToken(bitmarkParser.NUMERIC, 0); }
	public AtWidth(): TerminalNode | undefined { return this.tryGetToken(bitmarkParser.AtWidth, 0); }
	public AtHeight(): TerminalNode | undefined { return this.tryGetToken(bitmarkParser.AtHeight, 0); }
	public OPATALT(): TerminalNode | undefined { return this.tryGetToken(bitmarkParser.OPATALT, 0); }
	public OpAtCaption(): TerminalNode | undefined { return this.tryGetToken(bitmarkParser.OpAtCaption, 0); }
	public OpAtLicense(): TerminalNode | undefined { return this.tryGetToken(bitmarkParser.OpAtLicense, 0); }
	public OpAtCopyright(): TerminalNode | undefined { return this.tryGetToken(bitmarkParser.OpAtCopyright, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return bitmarkParser.RULE_image_chained; }
	// @Override
	public enterRule(listener: bitmarkParserListener): void {
		if (listener.enterImage_chained) {
			listener.enterImage_chained(this);
		}
	}
	// @Override
	public exitRule(listener: bitmarkParserListener): void {
		if (listener.exitImage_chained) {
			listener.exitImage_chained(this);
		}
	}
}


export class Image_chained4matchContext extends ParserRuleContext {
	public AtSrc(): TerminalNode | undefined { return this.tryGetToken(bitmarkParser.AtSrc, 0); }
	public COLON(): TerminalNode | undefined { return this.tryGetToken(bitmarkParser.COLON, 0); }
	public url(): UrlContext | undefined {
		return this.tryGetRuleContext(0, UrlContext);
	}
	public CL(): TerminalNode { return this.getToken(bitmarkParser.CL, 0); }
	public NUMERIC(): TerminalNode | undefined { return this.tryGetToken(bitmarkParser.NUMERIC, 0); }
	public AtWidth(): TerminalNode | undefined { return this.tryGetToken(bitmarkParser.AtWidth, 0); }
	public AtHeight(): TerminalNode | undefined { return this.tryGetToken(bitmarkParser.AtHeight, 0); }
	public OPATALT(): TerminalNode | undefined { return this.tryGetToken(bitmarkParser.OPATALT, 0); }
	public OpAtCaption(): TerminalNode | undefined { return this.tryGetToken(bitmarkParser.OpAtCaption, 0); }
	public OpAtLicense(): TerminalNode | undefined { return this.tryGetToken(bitmarkParser.OpAtLicense, 0); }
	public OpAtCopyright(): TerminalNode | undefined { return this.tryGetToken(bitmarkParser.OpAtCopyright, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return bitmarkParser.RULE_image_chained4match; }
	// @Override
	public enterRule(listener: bitmarkParserListener): void {
		if (listener.enterImage_chained4match) {
			listener.enterImage_chained4match(this);
		}
	}
	// @Override
	public exitRule(listener: bitmarkParserListener): void {
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
	public get ruleIndex(): number { return bitmarkParser.RULE_audiobit; }
	// @Override
	public enterRule(listener: bitmarkParserListener): void {
		if (listener.enterAudiobit) {
			listener.enterAudiobit(this);
		}
	}
	// @Override
	public exitRule(listener: bitmarkParserListener): void {
		if (listener.exitAudiobit) {
			listener.exitAudiobit(this);
		}
	}
}


export class Audio_oneContext extends ParserRuleContext {
	public op_audio_format(): Op_audio_formatContext {
		return this.getRuleContext(0, Op_audio_formatContext);
	}
	public COLON(): TerminalNode { return this.getToken(bitmarkParser.COLON, 0); }
	public url(): UrlContext {
		return this.getRuleContext(0, UrlContext);
	}
	public CL(): TerminalNode[];
	public CL(i: number): TerminalNode;
	public CL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(bitmarkParser.CL);
		} else {
			return this.getToken(bitmarkParser.CL, i);
		}
	}
	public OPATALT(): TerminalNode | undefined { return this.tryGetToken(bitmarkParser.OPATALT, 0); }
	public words(): WordsContext | undefined {
		return this.tryGetRuleContext(0, WordsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return bitmarkParser.RULE_audio_one; }
	// @Override
	public enterRule(listener: bitmarkParserListener): void {
		if (listener.enterAudio_one) {
			listener.enterAudio_one(this);
		}
	}
	// @Override
	public exitRule(listener: bitmarkParserListener): void {
		if (listener.exitAudio_one) {
			listener.exitAudio_one(this);
		}
	}
}


export class Audio_formatContext extends ParserRuleContext {
	public AmpAudio(): TerminalNode | undefined { return this.tryGetToken(bitmarkParser.AmpAudio, 0); }
	public COLON(): TerminalNode | undefined { return this.tryGetToken(bitmarkParser.COLON, 0); }
	public Audio_type(): TerminalNode | undefined { return this.tryGetToken(bitmarkParser.Audio_type, 0); }
	public AmpAudioLink(): TerminalNode | undefined { return this.tryGetToken(bitmarkParser.AmpAudioLink, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return bitmarkParser.RULE_audio_format; }
	// @Override
	public enterRule(listener: bitmarkParserListener): void {
		if (listener.enterAudio_format) {
			listener.enterAudio_format(this);
		}
	}
	// @Override
	public exitRule(listener: bitmarkParserListener): void {
		if (listener.exitAudio_format) {
			listener.exitAudio_format(this);
		}
	}
}


export class Op_audio_formatContext extends ParserRuleContext {
	public OpAmpAudio(): TerminalNode | undefined { return this.tryGetToken(bitmarkParser.OpAmpAudio, 0); }
	public COLON(): TerminalNode | undefined { return this.tryGetToken(bitmarkParser.COLON, 0); }
	public Audio_type(): TerminalNode | undefined { return this.tryGetToken(bitmarkParser.Audio_type, 0); }
	public OpAmpAudioLink(): TerminalNode | undefined { return this.tryGetToken(bitmarkParser.OpAmpAudioLink, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return bitmarkParser.RULE_op_audio_format; }
	// @Override
	public enterRule(listener: bitmarkParserListener): void {
		if (listener.enterOp_audio_format) {
			listener.enterOp_audio_format(this);
		}
	}
	// @Override
	public exitRule(listener: bitmarkParserListener): void {
		if (listener.exitOp_audio_format) {
			listener.exitOp_audio_format(this);
		}
	}
}


export class Resource_chainedContext extends ParserRuleContext {
	public COLON(): TerminalNode | undefined { return this.tryGetToken(bitmarkParser.COLON, 0); }
	public CL(): TerminalNode { return this.getToken(bitmarkParser.CL, 0); }
	public OPA(): TerminalNode | undefined { return this.tryGetToken(bitmarkParser.OPA, 0); }
	public s_and_w(): S_and_wContext[];
	public s_and_w(i: number): S_and_wContext;
	public s_and_w(i?: number): S_and_wContext | S_and_wContext[] {
		if (i === undefined) {
			return this.getRuleContexts(S_and_wContext);
		} else {
			return this.getRuleContext(i, S_and_wContext);
		}
	}
	public AtSrc(): TerminalNode | undefined { return this.tryGetToken(bitmarkParser.AtSrc, 0); }
	public S(): TerminalNode[];
	public S(i: number): TerminalNode;
	public S(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(bitmarkParser.S);
		} else {
			return this.getToken(bitmarkParser.S, i);
		}
	}
	public NL(): TerminalNode[];
	public NL(i: number): TerminalNode;
	public NL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(bitmarkParser.NL);
		} else {
			return this.getToken(bitmarkParser.NL, i);
		}
	}
	public NUMERIC(): TerminalNode | undefined { return this.tryGetToken(bitmarkParser.NUMERIC, 0); }
	public AtWidth(): TerminalNode | undefined { return this.tryGetToken(bitmarkParser.AtWidth, 0); }
	public AtHeight(): TerminalNode | undefined { return this.tryGetToken(bitmarkParser.AtHeight, 0); }
	public OPATALT(): TerminalNode | undefined { return this.tryGetToken(bitmarkParser.OPATALT, 0); }
	public OpAtCaption(): TerminalNode | undefined { return this.tryGetToken(bitmarkParser.OpAtCaption, 0); }
	public OpAtLicense(): TerminalNode | undefined { return this.tryGetToken(bitmarkParser.OpAtLicense, 0); }
	public OpAtCopyright(): TerminalNode | undefined { return this.tryGetToken(bitmarkParser.OpAtCopyright, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return bitmarkParser.RULE_resource_chained; }
	// @Override
	public enterRule(listener: bitmarkParserListener): void {
		if (listener.enterResource_chained) {
			listener.enterResource_chained(this);
		}
	}
	// @Override
	public exitRule(listener: bitmarkParserListener): void {
		if (listener.exitResource_chained) {
			listener.exitResource_chained(this);
		}
	}
}


export class TelephoneContext extends ParserRuleContext {
	public TEL(): TerminalNode { return this.getToken(bitmarkParser.TEL, 0); }
	public PLUS(): TerminalNode { return this.getToken(bitmarkParser.PLUS, 0); }
	public NUMERIC(): TerminalNode { return this.getToken(bitmarkParser.NUMERIC, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return bitmarkParser.RULE_telephone; }
	// @Override
	public enterRule(listener: bitmarkParserListener): void {
		if (listener.enterTelephone) {
			listener.enterTelephone(this);
		}
	}
	// @Override
	public exitRule(listener: bitmarkParserListener): void {
		if (listener.exitTelephone) {
			listener.exitTelephone(this);
		}
	}
}


export class UrlContext extends ParserRuleContext {
	public URL(): TerminalNode { return this.getToken(bitmarkParser.URL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return bitmarkParser.RULE_url; }
	// @Override
	public enterRule(listener: bitmarkParserListener): void {
		if (listener.enterUrl) {
			listener.enterUrl(this);
		}
	}
	// @Override
	public exitRule(listener: bitmarkParserListener): void {
		if (listener.exitUrl) {
			listener.exitUrl(this);
		}
	}
}


export class ItemContext extends ParserRuleContext {
	public OPC(): TerminalNode { return this.getToken(bitmarkParser.OPC, 0); }
	public CL(): TerminalNode { return this.getToken(bitmarkParser.CL, 0); }
	public lead(): LeadContext | undefined {
		return this.tryGetRuleContext(0, LeadContext);
	}
	public S(): TerminalNode[];
	public S(i: number): TerminalNode;
	public S(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(bitmarkParser.S);
		} else {
			return this.getToken(bitmarkParser.S, i);
		}
	}
	public s_and_w(): S_and_wContext | undefined {
		return this.tryGetRuleContext(0, S_and_wContext);
	}
	public COLON(): TerminalNode[];
	public COLON(i: number): TerminalNode;
	public COLON(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(bitmarkParser.COLON);
		} else {
			return this.getToken(bitmarkParser.COLON, i);
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
	public get ruleIndex(): number { return bitmarkParser.RULE_item; }
	// @Override
	public enterRule(listener: bitmarkParserListener): void {
		if (listener.enterItem) {
			listener.enterItem(this);
		}
	}
	// @Override
	public exitRule(listener: bitmarkParserListener): void {
		if (listener.exitItem) {
			listener.exitItem(this);
		}
	}
}


export class LeadContext extends ParserRuleContext {
	public OPC(): TerminalNode { return this.getToken(bitmarkParser.OPC, 0); }
	public s_and_w(): S_and_wContext {
		return this.getRuleContext(0, S_and_wContext);
	}
	public CL(): TerminalNode { return this.getToken(bitmarkParser.CL, 0); }
	public COLON(): TerminalNode[];
	public COLON(i: number): TerminalNode;
	public COLON(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(bitmarkParser.COLON);
		} else {
			return this.getToken(bitmarkParser.COLON, i);
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
	public get ruleIndex(): number { return bitmarkParser.RULE_lead; }
	// @Override
	public enterRule(listener: bitmarkParserListener): void {
		if (listener.enterLead) {
			listener.enterLead(this);
		}
	}
	// @Override
	public exitRule(listener: bitmarkParserListener): void {
		if (listener.exitLead) {
			listener.exitLead(this);
		}
	}
}


export class AnglerefContext extends ParserRuleContext {
	public OPRANGLES(): TerminalNode | undefined { return this.tryGetToken(bitmarkParser.OPRANGLES, 0); }
	public CL(): TerminalNode { return this.getToken(bitmarkParser.CL, 0); }
	public s_and_w(): S_and_wContext | undefined {
		return this.tryGetRuleContext(0, S_and_wContext);
	}
	public OPRANGLEL(): TerminalNode | undefined { return this.tryGetToken(bitmarkParser.OPRANGLEL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return bitmarkParser.RULE_angleref; }
	// @Override
	public enterRule(listener: bitmarkParserListener): void {
		if (listener.enterAngleref) {
			listener.enterAngleref(this);
		}
	}
	// @Override
	public exitRule(listener: bitmarkParserListener): void {
		if (listener.exitAngleref) {
			listener.exitAngleref(this);
		}
	}
}


export class ExampleContext extends ParserRuleContext {
	public AtExamplecl(): TerminalNode | undefined { return this.tryGetToken(bitmarkParser.AtExamplecl, 0); }
	public AtExampleWithStr(): TerminalNode | undefined { return this.tryGetToken(bitmarkParser.AtExampleWithStr, 0); }
	public AtExamplecol(): TerminalNode | undefined { return this.tryGetToken(bitmarkParser.AtExamplecol, 0); }
	public EOF(): TerminalNode | undefined { return this.tryGetToken(bitmarkParser.EOF, 0); }
	public SENTENCE(): TerminalNode | undefined { return this.tryGetToken(bitmarkParser.SENTENCE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return bitmarkParser.RULE_example; }
	// @Override
	public enterRule(listener: bitmarkParserListener): void {
		if (listener.enterExample) {
			listener.enterExample(this);
		}
	}
	// @Override
	public exitRule(listener: bitmarkParserListener): void {
		if (listener.exitExample) {
			listener.exitExample(this);
		}
	}
}


export class Bracketed_textContext extends ParserRuleContext {
	public BracEnclose(): TerminalNode { return this.getToken(bitmarkParser.BracEnclose, 0); }
	public CL(): TerminalNode | undefined { return this.tryGetToken(bitmarkParser.CL, 0); }
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
			return this.getTokens(bitmarkParser.NL);
		} else {
			return this.getToken(bitmarkParser.NL, i);
		}
	}
	public S(): TerminalNode[];
	public S(i: number): TerminalNode;
	public S(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(bitmarkParser.S);
		} else {
			return this.getToken(bitmarkParser.S, i);
		}
	}
	public EOF(): TerminalNode | undefined { return this.tryGetToken(bitmarkParser.EOF, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return bitmarkParser.RULE_bracketed_text; }
	// @Override
	public enterRule(listener: bitmarkParserListener): void {
		if (listener.enterBracketed_text) {
			listener.enterBracketed_text(this);
		}
	}
	// @Override
	public exitRule(listener: bitmarkParserListener): void {
		if (listener.exitBracketed_text) {
			listener.exitBracketed_text(this);
		}
	}
}


export class ReferenceContext extends ParserRuleContext {
	public AtReference(): TerminalNode { return this.getToken(bitmarkParser.AtReference, 0); }
	public CL(): TerminalNode | undefined { return this.tryGetToken(bitmarkParser.CL, 0); }
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
			return this.getTokens(bitmarkParser.COLON);
		} else {
			return this.getToken(bitmarkParser.COLON, i);
		}
	}
	public URL(): TerminalNode[];
	public URL(i: number): TerminalNode;
	public URL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(bitmarkParser.URL);
		} else {
			return this.getToken(bitmarkParser.URL, i);
		}
	}
	public NL(): TerminalNode[];
	public NL(i: number): TerminalNode;
	public NL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(bitmarkParser.NL);
		} else {
			return this.getToken(bitmarkParser.NL, i);
		}
	}
	public EOF(): TerminalNode | undefined { return this.tryGetToken(bitmarkParser.EOF, 0); }
	public S(): TerminalNode[];
	public S(i: number): TerminalNode;
	public S(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(bitmarkParser.S);
		} else {
			return this.getToken(bitmarkParser.S, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return bitmarkParser.RULE_reference; }
	// @Override
	public enterRule(listener: bitmarkParserListener): void {
		if (listener.enterReference) {
			listener.enterReference(this);
		}
	}
	// @Override
	public exitRule(listener: bitmarkParserListener): void {
		if (listener.exitReference) {
			listener.exitReference(this);
		}
	}
}


export class ProgressContext extends ParserRuleContext {
	public AtProgress(): TerminalNode { return this.getToken(bitmarkParser.AtProgress, 0); }
	public s_and_w(): S_and_wContext {
		return this.getRuleContext(0, S_and_wContext);
	}
	public CL(): TerminalNode { return this.getToken(bitmarkParser.CL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return bitmarkParser.RULE_progress; }
	// @Override
	public enterRule(listener: bitmarkParserListener): void {
		if (listener.enterProgress) {
			listener.enterProgress(this);
		}
	}
	// @Override
	public exitRule(listener: bitmarkParserListener): void {
		if (listener.exitProgress) {
			listener.exitProgress(this);
		}
	}
}


export class DatepropContext extends ParserRuleContext {
	public AtDate(): TerminalNode { return this.getToken(bitmarkParser.AtDate, 0); }
	public CL(): TerminalNode { return this.getToken(bitmarkParser.CL, 0); }
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
			return this.getTokens(bitmarkParser.COLON);
		} else {
			return this.getToken(bitmarkParser.COLON, i);
		}
	}
	public NL(): TerminalNode[];
	public NL(i: number): TerminalNode;
	public NL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(bitmarkParser.NL);
		} else {
			return this.getToken(bitmarkParser.NL, i);
		}
	}
	public dateprop_chained(): Dateprop_chainedContext | undefined {
		return this.tryGetRuleContext(0, Dateprop_chainedContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return bitmarkParser.RULE_dateprop; }
	// @Override
	public enterRule(listener: bitmarkParserListener): void {
		if (listener.enterDateprop) {
			listener.enterDateprop(this);
		}
	}
	// @Override
	public exitRule(listener: bitmarkParserListener): void {
		if (listener.exitDateprop) {
			listener.exitDateprop(this);
		}
	}
}


export class Dateprop_chainedContext extends ParserRuleContext {
	public AtDate(): TerminalNode { return this.getToken(bitmarkParser.AtDate, 0); }
	public CL(): TerminalNode { return this.getToken(bitmarkParser.CL, 0); }
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
			return this.getTokens(bitmarkParser.COLON);
		} else {
			return this.getToken(bitmarkParser.COLON, i);
		}
	}
	public NL(): TerminalNode[];
	public NL(i: number): TerminalNode;
	public NL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(bitmarkParser.NL);
		} else {
			return this.getToken(bitmarkParser.NL, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return bitmarkParser.RULE_dateprop_chained; }
	// @Override
	public enterRule(listener: bitmarkParserListener): void {
		if (listener.enterDateprop_chained) {
			listener.enterDateprop_chained(this);
		}
	}
	// @Override
	public exitRule(listener: bitmarkParserListener): void {
		if (listener.exitDateprop_chained) {
			listener.exitDateprop_chained(this);
		}
	}
}


export class InstructionContext extends ParserRuleContext {
	public OPB(): TerminalNode { return this.getToken(bitmarkParser.OPB, 0); }
	public CL(): TerminalNode | undefined { return this.tryGetToken(bitmarkParser.CL, 0); }
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
			return this.getTokens(bitmarkParser.NL);
		} else {
			return this.getToken(bitmarkParser.NL, i);
		}
	}
	public S(): TerminalNode[];
	public S(i: number): TerminalNode;
	public S(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(bitmarkParser.S);
		} else {
			return this.getToken(bitmarkParser.S, i);
		}
	}
	public EOF(): TerminalNode | undefined { return this.tryGetToken(bitmarkParser.EOF, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return bitmarkParser.RULE_instruction; }
	// @Override
	public enterRule(listener: bitmarkParserListener): void {
		if (listener.enterInstruction) {
			listener.enterInstruction(this);
		}
	}
	// @Override
	public exitRule(listener: bitmarkParserListener): void {
		if (listener.exitInstruction) {
			listener.exitInstruction(this);
		}
	}
}


export class HintContext extends ParserRuleContext {
	public OPQ(): TerminalNode { return this.getToken(bitmarkParser.OPQ, 0); }
	public CL(): TerminalNode[];
	public CL(i: number): TerminalNode;
	public CL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(bitmarkParser.CL);
		} else {
			return this.getToken(bitmarkParser.CL, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return bitmarkParser.RULE_hint; }
	// @Override
	public enterRule(listener: bitmarkParserListener): void {
		if (listener.enterHint) {
			listener.enterHint(this);
		}
	}
	// @Override
	public exitRule(listener: bitmarkParserListener): void {
		if (listener.exitHint) {
			listener.exitHint(this);
		}
	}
}


export class TitleContext extends ParserRuleContext {
	public OPHASH(): TerminalNode { return this.getToken(bitmarkParser.OPHASH, 0); }
	public CL(): TerminalNode | undefined { return this.tryGetToken(bitmarkParser.CL, 0); }
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
			return this.getTokens(bitmarkParser.NL);
		} else {
			return this.getToken(bitmarkParser.NL, i);
		}
	}
	public EOF(): TerminalNode | undefined { return this.tryGetToken(bitmarkParser.EOF, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return bitmarkParser.RULE_title; }
	// @Override
	public enterRule(listener: bitmarkParserListener): void {
		if (listener.enterTitle) {
			listener.enterTitle(this);
		}
	}
	// @Override
	public exitRule(listener: bitmarkParserListener): void {
		if (listener.exitTitle) {
			listener.exitTitle(this);
		}
	}
}


export class Bool_labelContext extends ParserRuleContext {
	public AtLabeltrue(): TerminalNode | undefined { return this.tryGetToken(bitmarkParser.AtLabeltrue, 0); }
	public s_and_w(): S_and_wContext {
		return this.getRuleContext(0, S_and_wContext);
	}
	public CL(): TerminalNode { return this.getToken(bitmarkParser.CL, 0); }
	public AtLabelfalse(): TerminalNode | undefined { return this.tryGetToken(bitmarkParser.AtLabelfalse, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return bitmarkParser.RULE_bool_label; }
	// @Override
	public enterRule(listener: bitmarkParserListener): void {
		if (listener.enterBool_label) {
			listener.enterBool_label(this);
		}
	}
	// @Override
	public exitRule(listener: bitmarkParserListener): void {
		if (listener.exitBool_label) {
			listener.exitBool_label(this);
		}
	}
}


export class Progress_pointsContext extends ParserRuleContext {
	public AtProgressPoints(): TerminalNode { return this.getToken(bitmarkParser.AtProgressPoints, 0); }
	public COLON(): TerminalNode { return this.getToken(bitmarkParser.COLON, 0); }
	public NUMERIC(): TerminalNode | undefined { return this.tryGetToken(bitmarkParser.NUMERIC, 0); }
	public CL(): TerminalNode { return this.getToken(bitmarkParser.CL, 0); }
	public s_and_w(): S_and_wContext | undefined {
		return this.tryGetRuleContext(0, S_and_wContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return bitmarkParser.RULE_progress_points; }
	// @Override
	public enterRule(listener: bitmarkParserListener): void {
		if (listener.enterProgress_points) {
			listener.enterProgress_points(this);
		}
	}
	// @Override
	public exitRule(listener: bitmarkParserListener): void {
		if (listener.exitProgress_points) {
			listener.exitProgress_points(this);
		}
	}
}


export class IstrackedContext extends ParserRuleContext {
	public OpAtIsTracked(): TerminalNode { return this.getToken(bitmarkParser.OpAtIsTracked, 0); }
	public s_and_w(): S_and_wContext {
		return this.getRuleContext(0, S_and_wContext);
	}
	public CL(): TerminalNode { return this.getToken(bitmarkParser.CL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return bitmarkParser.RULE_istracked; }
	// @Override
	public enterRule(listener: bitmarkParserListener): void {
		if (listener.enterIstracked) {
			listener.enterIstracked(this);
		}
	}
	// @Override
	public exitRule(listener: bitmarkParserListener): void {
		if (listener.exitIstracked) {
			listener.exitIstracked(this);
		}
	}
}


export class IsinfoonlyContext extends ParserRuleContext {
	public OpAtIsInfoOnly(): TerminalNode { return this.getToken(bitmarkParser.OpAtIsInfoOnly, 0); }
	public s_and_w(): S_and_wContext {
		return this.getRuleContext(0, S_and_wContext);
	}
	public CL(): TerminalNode { return this.getToken(bitmarkParser.CL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return bitmarkParser.RULE_isinfoonly; }
	// @Override
	public enterRule(listener: bitmarkParserListener): void {
		if (listener.enterIsinfoonly) {
			listener.enterIsinfoonly(this);
		}
	}
	// @Override
	public exitRule(listener: bitmarkParserListener): void {
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
			return this.getTokens(bitmarkParser.NL);
		} else {
			return this.getToken(bitmarkParser.NL, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return bitmarkParser.RULE_atdef; }
	// @Override
	public enterRule(listener: bitmarkParserListener): void {
		if (listener.enterAtdef) {
			listener.enterAtdef(this);
		}
	}
	// @Override
	public exitRule(listener: bitmarkParserListener): void {
		if (listener.exitAtdef) {
			listener.exitAtdef(this);
		}
	}
}


export class Atdef_Context extends ParserRuleContext {
	public OPA(): TerminalNode | undefined { return this.tryGetToken(bitmarkParser.OPA, 0); }
	public s_and_w(): S_and_wContext[];
	public s_and_w(i: number): S_and_wContext;
	public s_and_w(i?: number): S_and_wContext | S_and_wContext[] {
		if (i === undefined) {
			return this.getRuleContexts(S_and_wContext);
		} else {
			return this.getRuleContext(i, S_and_wContext);
		}
	}
	public CL(): TerminalNode { return this.getToken(bitmarkParser.CL, 0); }
	public COLON(): TerminalNode[];
	public COLON(i: number): TerminalNode;
	public COLON(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(bitmarkParser.COLON);
		} else {
			return this.getToken(bitmarkParser.COLON, i);
		}
	}
	public DBLCOLON(): TerminalNode | undefined { return this.tryGetToken(bitmarkParser.DBLCOLON, 0); }
	public NL(): TerminalNode[];
	public NL(i: number): TerminalNode;
	public NL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(bitmarkParser.NL);
		} else {
			return this.getToken(bitmarkParser.NL, i);
		}
	}
	public OpAtCopyright(): TerminalNode | undefined { return this.tryGetToken(bitmarkParser.OpAtCopyright, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return bitmarkParser.RULE_atdef_; }
	// @Override
	public enterRule(listener: bitmarkParserListener): void {
		if (listener.enterAtdef_) {
			listener.enterAtdef_(this);
		}
	}
	// @Override
	public exitRule(listener: bitmarkParserListener): void {
		if (listener.exitAtdef_) {
			listener.exitAtdef_(this);
		}
	}
}


export class DollaransContext extends ParserRuleContext {
	public OPDOLL(): TerminalNode { return this.getToken(bitmarkParser.OPDOLL, 0); }
	public CL(): TerminalNode | undefined { return this.tryGetToken(bitmarkParser.CL, 0); }
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
			return this.getTokens(bitmarkParser.COLON);
		} else {
			return this.getToken(bitmarkParser.COLON, i);
		}
	}
	public NL(): TerminalNode[];
	public NL(i: number): TerminalNode;
	public NL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(bitmarkParser.NL);
		} else {
			return this.getToken(bitmarkParser.NL, i);
		}
	}
	public EOF(): TerminalNode | undefined { return this.tryGetToken(bitmarkParser.EOF, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return bitmarkParser.RULE_dollarans; }
	// @Override
	public enterRule(listener: bitmarkParserListener): void {
		if (listener.enterDollarans) {
			listener.enterDollarans(this);
		}
	}
	// @Override
	public exitRule(listener: bitmarkParserListener): void {
		if (listener.exitDollarans) {
			listener.exitDollarans(this);
		}
	}
}


export class AnchorContext extends ParserRuleContext {
	public OPDANGLE(): TerminalNode { return this.getToken(bitmarkParser.OPDANGLE, 0); }
	public CL(): TerminalNode { return this.getToken(bitmarkParser.CL, 0); }
	public s_and_w(): S_and_wContext | undefined {
		return this.tryGetRuleContext(0, S_and_wContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return bitmarkParser.RULE_anchor; }
	// @Override
	public enterRule(listener: bitmarkParserListener): void {
		if (listener.enterAnchor) {
			listener.enterAnchor(this);
		}
	}
	// @Override
	public exitRule(listener: bitmarkParserListener): void {
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
			return this.getTokens(bitmarkParser.NL);
		} else {
			return this.getToken(bitmarkParser.NL, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return bitmarkParser.RULE_lines; }
	// @Override
	public enterRule(listener: bitmarkParserListener): void {
		if (listener.enterLines) {
			listener.enterLines(this);
		}
	}
	// @Override
	public exitRule(listener: bitmarkParserListener): void {
		if (listener.exitLines) {
			listener.exitLines(this);
		}
	}
}


export class S_and_wContext extends ParserRuleContext {
	public STRING(): TerminalNode | undefined { return this.tryGetToken(bitmarkParser.STRING, 0); }
	public NUMERIC(): TerminalNode | undefined { return this.tryGetToken(bitmarkParser.NUMERIC, 0); }
	public S(): TerminalNode[];
	public S(i: number): TerminalNode;
	public S(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(bitmarkParser.S);
		} else {
			return this.getToken(bitmarkParser.S, i);
		}
	}
	public words(): WordsContext | undefined {
		return this.tryGetRuleContext(0, WordsContext);
	}
	public OPS(): TerminalNode | undefined { return this.tryGetToken(bitmarkParser.OPS, 0); }
	public s_and_w(): S_and_wContext | undefined {
		return this.tryGetRuleContext(0, S_and_wContext);
	}
	public CL(): TerminalNode | undefined { return this.tryGetToken(bitmarkParser.CL, 0); }
	public COLON(): TerminalNode | undefined { return this.tryGetToken(bitmarkParser.COLON, 0); }
	public AMP(): TerminalNode | undefined { return this.tryGetToken(bitmarkParser.AMP, 0); }
	public DBLEQ(): TerminalNode | undefined { return this.tryGetToken(bitmarkParser.DBLEQ, 0); }
	public URL(): TerminalNode | undefined { return this.tryGetToken(bitmarkParser.URL, 0); }
	public bracket_escaped(): Bracket_escapedContext | undefined {
		return this.tryGetRuleContext(0, Bracket_escapedContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return bitmarkParser.RULE_s_and_w; }
	// @Override
	public enterRule(listener: bitmarkParserListener): void {
		if (listener.enterS_and_w) {
			listener.enterS_and_w(this);
		}
	}
	// @Override
	public exitRule(listener: bitmarkParserListener): void {
		if (listener.exitS_and_w) {
			listener.exitS_and_w(this);
		}
	}
}


export class DclinesContext extends ParserRuleContext {
	public DCANY(): TerminalNode { return this.getToken(bitmarkParser.DCANY, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return bitmarkParser.RULE_dclines; }
	// @Override
	public enterRule(listener: bitmarkParserListener): void {
		if (listener.enterDclines) {
			listener.enterDclines(this);
		}
	}
	// @Override
	public exitRule(listener: bitmarkParserListener): void {
		if (listener.exitDclines) {
			listener.exitDclines(this);
		}
	}
}


export class Bracket_escapedContext extends ParserRuleContext {
	public OPESC(): TerminalNode { return this.getToken(bitmarkParser.OPESC, 0); }
	public s_and_w(): S_and_wContext[];
	public s_and_w(i: number): S_and_wContext;
	public s_and_w(i?: number): S_and_wContext | S_and_wContext[] {
		if (i === undefined) {
			return this.getRuleContexts(S_and_wContext);
		} else {
			return this.getRuleContext(i, S_and_wContext);
		}
	}
	public CL(): TerminalNode | undefined { return this.tryGetToken(bitmarkParser.CL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return bitmarkParser.RULE_bracket_escaped; }
	// @Override
	public enterRule(listener: bitmarkParserListener): void {
		if (listener.enterBracket_escaped) {
			listener.enterBracket_escaped(this);
		}
	}
	// @Override
	public exitRule(listener: bitmarkParserListener): void {
		if (listener.exitBracket_escaped) {
			listener.exitBracket_escaped(this);
		}
	}
}


export class ClnspContext extends ParserRuleContext {
	public CL(): TerminalNode { return this.getToken(bitmarkParser.CL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return bitmarkParser.RULE_clnsp; }
	// @Override
	public enterRule(listener: bitmarkParserListener): void {
		if (listener.enterClnsp) {
			listener.enterClnsp(this);
		}
	}
	// @Override
	public exitRule(listener: bitmarkParserListener): void {
		if (listener.exitClnsp) {
			listener.exitClnsp(this);
		}
	}
}


export class SsplContext extends ParserRuleContext {
	public SSPL(): TerminalNode | undefined { return this.tryGetToken(bitmarkParser.SSPL, 0); }
	public SSPL2(): TerminalNode | undefined { return this.tryGetToken(bitmarkParser.SSPL2, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return bitmarkParser.RULE_sspl; }
	// @Override
	public enterRule(listener: bitmarkParserListener): void {
		if (listener.enterSspl) {
			listener.enterSspl(this);
		}
	}
	// @Override
	public exitRule(listener: bitmarkParserListener): void {
		if (listener.exitSspl) {
			listener.exitSspl(this);
		}
	}
}


export class WordsContext extends ParserRuleContext {
	public sentence(): SentenceContext[];
	public sentence(i: number): SentenceContext;
	public sentence(i?: number): SentenceContext | SentenceContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SentenceContext);
		} else {
			return this.getRuleContext(i, SentenceContext);
		}
	}
	public AMP(): TerminalNode[];
	public AMP(i: number): TerminalNode;
	public AMP(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(bitmarkParser.AMP);
		} else {
			return this.getToken(bitmarkParser.AMP, i);
		}
	}
	public Greater(): TerminalNode[];
	public Greater(i: number): TerminalNode;
	public Greater(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(bitmarkParser.Greater);
		} else {
			return this.getToken(bitmarkParser.Greater, i);
		}
	}
	public Less(): TerminalNode[];
	public Less(i: number): TerminalNode;
	public Less(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(bitmarkParser.Less);
		} else {
			return this.getToken(bitmarkParser.Less, i);
		}
	}
	public RightArrow(): TerminalNode[];
	public RightArrow(i: number): TerminalNode;
	public RightArrow(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(bitmarkParser.RightArrow);
		} else {
			return this.getToken(bitmarkParser.RightArrow, i);
		}
	}
	public RightAngle(): TerminalNode[];
	public RightAngle(i: number): TerminalNode;
	public RightAngle(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(bitmarkParser.RightAngle);
		} else {
			return this.getToken(bitmarkParser.RightAngle, i);
		}
	}
	public AmpArticle(): TerminalNode[];
	public AmpArticle(i: number): TerminalNode;
	public AmpArticle(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(bitmarkParser.AmpArticle);
		} else {
			return this.getToken(bitmarkParser.AmpArticle, i);
		}
	}
	public AmpArticleLink(): TerminalNode[];
	public AmpArticleLink(i: number): TerminalNode;
	public AmpArticleLink(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(bitmarkParser.AmpArticleLink);
		} else {
			return this.getToken(bitmarkParser.AmpArticleLink, i);
		}
	}
	public AmpDocument(): TerminalNode[];
	public AmpDocument(i: number): TerminalNode;
	public AmpDocument(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(bitmarkParser.AmpDocument);
		} else {
			return this.getToken(bitmarkParser.AmpDocument, i);
		}
	}
	public AmpDocumentLink(): TerminalNode[];
	public AmpDocumentLink(i: number): TerminalNode;
	public AmpDocumentLink(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(bitmarkParser.AmpDocumentLink);
		} else {
			return this.getToken(bitmarkParser.AmpDocumentLink, i);
		}
	}
	public AmpWebsite(): TerminalNode[];
	public AmpWebsite(i: number): TerminalNode;
	public AmpWebsite(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(bitmarkParser.AmpWebsite);
		} else {
			return this.getToken(bitmarkParser.AmpWebsite, i);
		}
	}
	public AmpWebsiteLink(): TerminalNode[];
	public AmpWebsiteLink(i: number): TerminalNode;
	public AmpWebsiteLink(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(bitmarkParser.AmpWebsiteLink);
		} else {
			return this.getToken(bitmarkParser.AmpWebsiteLink, i);
		}
	}
	public AmpImage(): TerminalNode[];
	public AmpImage(i: number): TerminalNode;
	public AmpImage(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(bitmarkParser.AmpImage);
		} else {
			return this.getToken(bitmarkParser.AmpImage, i);
		}
	}
	public AmpImageLink(): TerminalNode[];
	public AmpImageLink(i: number): TerminalNode;
	public AmpImageLink(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(bitmarkParser.AmpImageLink);
		} else {
			return this.getToken(bitmarkParser.AmpImageLink, i);
		}
	}
	public AmpAudio(): TerminalNode[];
	public AmpAudio(i: number): TerminalNode;
	public AmpAudio(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(bitmarkParser.AmpAudio);
		} else {
			return this.getToken(bitmarkParser.AmpAudio, i);
		}
	}
	public AmpAudioLink(): TerminalNode[];
	public AmpAudioLink(i: number): TerminalNode;
	public AmpAudioLink(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(bitmarkParser.AmpAudioLink);
		} else {
			return this.getToken(bitmarkParser.AmpAudioLink, i);
		}
	}
	public AmpVideo(): TerminalNode[];
	public AmpVideo(i: number): TerminalNode;
	public AmpVideo(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(bitmarkParser.AmpVideo);
		} else {
			return this.getToken(bitmarkParser.AmpVideo, i);
		}
	}
	public AmpVideoLink(): TerminalNode[];
	public AmpVideoLink(i: number): TerminalNode;
	public AmpVideoLink(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(bitmarkParser.AmpVideoLink);
		} else {
			return this.getToken(bitmarkParser.AmpVideoLink, i);
		}
	}
	public AmpApp(): TerminalNode[];
	public AmpApp(i: number): TerminalNode;
	public AmpApp(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(bitmarkParser.AmpApp);
		} else {
			return this.getToken(bitmarkParser.AmpApp, i);
		}
	}
	public AmpAppLink(): TerminalNode[];
	public AmpAppLink(i: number): TerminalNode;
	public AmpAppLink(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(bitmarkParser.AmpAppLink);
		} else {
			return this.getToken(bitmarkParser.AmpAppLink, i);
		}
	}
	public AmpStillImageFilm(): TerminalNode[];
	public AmpStillImageFilm(i: number): TerminalNode;
	public AmpStillImageFilm(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(bitmarkParser.AmpStillImageFilm);
		} else {
			return this.getToken(bitmarkParser.AmpStillImageFilm, i);
		}
	}
	public AmpStillImageFilmLink(): TerminalNode[];
	public AmpStillImageFilmLink(i: number): TerminalNode;
	public AmpStillImageFilmLink(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(bitmarkParser.AmpStillImageFilmLink);
		} else {
			return this.getToken(bitmarkParser.AmpStillImageFilmLink, i);
		}
	}
	public BitmarkMinus(): TerminalNode[];
	public BitmarkMinus(i: number): TerminalNode;
	public BitmarkMinus(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(bitmarkParser.BitmarkMinus);
		} else {
			return this.getToken(bitmarkParser.BitmarkMinus, i);
		}
	}
	public BitmarkPlus(): TerminalNode[];
	public BitmarkPlus(i: number): TerminalNode;
	public BitmarkPlus(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(bitmarkParser.BitmarkPlus);
		} else {
			return this.getToken(bitmarkParser.BitmarkPlus, i);
		}
	}
	public QUOTE_INDEX(): TerminalNode[];
	public QUOTE_INDEX(i: number): TerminalNode;
	public QUOTE_INDEX(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(bitmarkParser.QUOTE_INDEX);
		} else {
			return this.getToken(bitmarkParser.QUOTE_INDEX, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return bitmarkParser.RULE_words; }
	// @Override
	public enterRule(listener: bitmarkParserListener): void {
		if (listener.enterWords) {
			listener.enterWords(this);
		}
	}
	// @Override
	public exitRule(listener: bitmarkParserListener): void {
		if (listener.exitWords) {
			listener.exitWords(this);
		}
	}
}


export class SpContext extends ParserRuleContext {
	public S(): TerminalNode { return this.getToken(bitmarkParser.S, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return bitmarkParser.RULE_sp; }
	// @Override
	public enterRule(listener: bitmarkParserListener): void {
		if (listener.enterSp) {
			listener.enterSp(this);
		}
	}
	// @Override
	public exitRule(listener: bitmarkParserListener): void {
		if (listener.exitSp) {
			listener.exitSp(this);
		}
	}
}


export class SentenceContext extends ParserRuleContext {
	public SENTENCE(): TerminalNode { return this.getToken(bitmarkParser.SENTENCE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return bitmarkParser.RULE_sentence; }
	// @Override
	public enterRule(listener: bitmarkParserListener): void {
		if (listener.enterSentence) {
			listener.enterSentence(this);
		}
	}
	// @Override
	public exitRule(listener: bitmarkParserListener): void {
		if (listener.exitSentence) {
			listener.exitSentence(this);
		}
	}
}


