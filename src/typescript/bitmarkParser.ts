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
	public static readonly BitSampleSolution = 15;
	public static readonly BitTakeAudio = 16;
	public static readonly CLOZE = 17;
	public static readonly MATCH = 18;
	public static readonly BitArticle = 19;
	public static readonly BitPage = 20;
	public static readonly BitEssay = 21;
	public static readonly BitMessage = 22;
	public static readonly BitCorrection = 23;
	public static readonly BitMark = 24;
	public static readonly BitDocup = 25;
	public static readonly BitTakepic = 26;
	public static readonly BitRecaud = 27;
	public static readonly BitPrepnote = 28;
	public static readonly BitAssign = 29;
	public static readonly BitBotint = 30;
	public static readonly BitSelfassess = 31;
	public static readonly BitRating = 32;
	public static readonly BitSurvey = 33;
	public static readonly BitSurvey1 = 34;
	public static readonly BitSurveyanon = 35;
	public static readonly BitSurveyanon1 = 36;
	public static readonly BitVocabulary = 37;
	public static readonly BitVocabulary1 = 38;
	public static readonly BitNote = 39;
	public static readonly BitInfo = 40;
	public static readonly BitWarning = 41;
	public static readonly BitRemark = 42;
	public static readonly BitHint = 43;
	public static readonly BitHelp = 44;
	public static readonly BitDanger = 45;
	public static readonly BitBug = 46;
	public static readonly BitSidenote = 47;
	public static readonly BitStickynote = 48;
	public static readonly BitQuote = 49;
	public static readonly BitFootnote = 50;
	public static readonly BitExample = 51;
	public static readonly BitButtonCopytext = 52;
	public static readonly BitWbtContinue = 53;
	public static readonly BitLearningPathDetails = 54;
	public static readonly BitLearningPathLti = 55;
	public static readonly BitLearningPathStep = 56;
	public static readonly BitLearningPathBook = 57;
	public static readonly BitLearningPathSign = 58;
	public static readonly BitLearningPathVideoCall = 59;
	public static readonly BitLearningPathLearningGoal = 60;
	public static readonly BitLearningPathClosing = 61;
	public static readonly BitLearningPathFeedback = 62;
	public static readonly BitLearningPathBotTraining = 63;
	public static readonly BitLearningPathExternalLink = 64;
	public static readonly BitLearningPathClassroomTraining = 65;
	public static readonly BitLearningPathClassroomEvent = 66;
	public static readonly BitBotActionSend = 67;
	public static readonly BitBotActionAnnounce = 68;
	public static readonly BitBotActionSave = 69;
	public static readonly BitBotActionRemind = 70;
	public static readonly BitVendorPadletEmbed = 71;
	public static readonly BitScorm = 72;
	public static readonly BitImage = 73;
	public static readonly BitImageLink = 74;
	public static readonly BitImageZoom = 75;
	public static readonly BitAudio = 76;
	public static readonly BitAudioLink = 77;
	public static readonly BitAudioEmbed = 78;
	public static readonly BitVideo = 79;
	public static readonly BitVideoLink = 80;
	public static readonly BitVideoEmbed = 81;
	public static readonly BitStillImageFilm = 82;
	public static readonly BitStillImageFilmLink = 83;
	public static readonly BitStillImageFilmEmbed = 84;
	public static readonly BitWebsiteLink = 85;
	public static readonly BitDocument = 86;
	public static readonly BitDocumentLink = 87;
	public static readonly BitDocumentEmbed = 88;
	public static readonly BitDocumentDownload = 89;
	public static readonly BitAppLink = 90;
	public static readonly BitEditorial = 91;
	public static readonly COMMENT = 92;
	public static readonly Image_type = 93;
	public static readonly Audio_type = 94;
	public static readonly Video_type = 95;
	public static readonly OPDOLL = 96;
	public static readonly OPBUL = 97;
	public static readonly OPESC = 98;
	public static readonly OPRANGLES = 99;
	public static readonly OPRANGLEL = 100;
	public static readonly OPDANGLE = 101;
	public static readonly OPU = 102;
	public static readonly OPB = 103;
	public static readonly OPQ = 104;
	public static readonly OPA = 105;
	public static readonly OPP = 106;
	public static readonly OPM = 107;
	public static readonly OPS = 108;
	public static readonly OPR = 109;
	public static readonly OPHASH = 110;
	public static readonly OPC = 111;
	public static readonly CL = 112;
	public static readonly COLON = 113;
	public static readonly AMP = 114;
	public static readonly DBLCOLON = 115;
	public static readonly PLUS = 116;
	public static readonly DotAt = 117;
	public static readonly Greater = 118;
	public static readonly Less = 119;
	public static readonly RightAngle = 120;
	public static readonly RightArrow = 121;
	public static readonly DBLEQ = 122;
	public static readonly HSPL = 123;
	public static readonly HSPL2 = 124;
	public static readonly SSPL = 125;
	public static readonly SSPL2 = 126;
	public static readonly QUOTE_INDEX = 127;
	public static readonly DCANY = 128;
	public static readonly ArticleText = 129;
	public static readonly NOTCL = 130;
	public static readonly NUMERIC = 131;
	public static readonly STRING = 132;
	public static readonly NL = 133;
	public static readonly SENTENCE = 134;
	public static readonly OPAT = 135;
	public static readonly AtProgress = 136;
	public static readonly AtReference = 137;
	public static readonly AtWidth = 138;
	public static readonly AtHeight = 139;
	public static readonly AtProgressPoints = 140;
	public static readonly AtShortanswer = 141;
	public static readonly AtLonganswer = 142;
	public static readonly AtExampleWithStr = 143;
	public static readonly AtExamplecol = 144;
	public static readonly AtExamplecl = 145;
	public static readonly AtPartialAnswerS = 146;
	public static readonly AtPartialAnswer = 147;
	public static readonly AtLabeltrue = 148;
	public static readonly AtLabelfalse = 149;
	public static readonly AtPoints = 150;
	public static readonly AtSrc = 151;
	public static readonly OPATALT = 152;
	public static readonly OPAMARK = 153;
	public static readonly ShowInIndex = 154;
	public static readonly OpAtCaption = 155;
	public static readonly OpAtLicense = 156;
	public static readonly OpAtCopyright = 157;
	public static readonly OpAtSearch = 158;
	public static readonly OpAtIsTracked = 159;
	public static readonly OpAtIsInfoOnly = 160;
	public static readonly AtDate = 161;
	public static readonly Http = 162;
	public static readonly Https = 163;
	public static readonly AmpAudio = 164;
	public static readonly AmpImage = 165;
	public static readonly AmpImageZoom = 166;
	public static readonly AmpImageWAudio = 167;
	public static readonly AmpVideo = 168;
	public static readonly AmpArticle = 169;
	public static readonly AmpDocument = 170;
	public static readonly AmpApp = 171;
	public static readonly AmpWebsite = 172;
	public static readonly AmpStillImageFilm = 173;
	public static readonly AmpPdf = 174;
	public static readonly OpAmpAudio = 175;
	public static readonly OpAmpImage = 176;
	public static readonly OpAmpImageZoom = 177;
	public static readonly OpAmpImageWAudio = 178;
	public static readonly OpAmpVideo = 179;
	public static readonly OpAmpArticle = 180;
	public static readonly OpAmpArticleAtt = 181;
	public static readonly OpAmpDocument = 182;
	public static readonly OpAmpApp = 183;
	public static readonly OpAmpWebsite = 184;
	public static readonly OpAmpStillImageFilm = 185;
	public static readonly BracEnclose = 186;
	public static readonly AmpAudioLink = 187;
	public static readonly AmpImageLink = 188;
	public static readonly AmpVideoLink = 189;
	public static readonly AmpArticleLink = 190;
	public static readonly AmpDocumentLink = 191;
	public static readonly AmpAppLink = 192;
	public static readonly AmpWebsiteLink = 193;
	public static readonly AmpStillImageFilmLink = 194;
	public static readonly OpAmpAudioLink = 195;
	public static readonly OpAmpImageLink = 196;
	public static readonly OpAmpVideoLink = 197;
	public static readonly OpAmpArticleLink = 198;
	public static readonly OpAmpDocumentLink = 199;
	public static readonly OpAmpAppLink = 200;
	public static readonly OpAmpWebsiteLink = 201;
	public static readonly OpAmpStillImageFilmLink = 202;
	public static readonly BitmarkMinus = 203;
	public static readonly BitmarkPlus = 204;
	public static readonly ColonText = 205;
	public static readonly Prosemirror = 206;
	public static readonly Placeholder = 207;
	public static readonly BASIC = 208;
	public static readonly JPG = 209;
	public static readonly PNG = 210;
	public static readonly GIF = 211;
	public static readonly SVG = 212;
	public static readonly MP2 = 213;
	public static readonly MP3 = 214;
	public static readonly MP4 = 215;
	public static readonly FLV = 216;
	public static readonly WMV = 217;
	public static readonly MPEG = 218;
	public static readonly MPG = 219;
	public static readonly TEL = 220;
	public static readonly DotArticleAtt = 221;
	public static readonly STAR = 222;
	public static readonly URL = 223;
	public static readonly LIST_LINE = 224;
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
	public static readonly RULE_take_audio = 44;
	public static readonly RULE_take_picture = 45;
	public static readonly RULE_record_audio = 46;
	public static readonly RULE_preparation_note = 47;
	public static readonly RULE_assignment = 48;
	public static readonly RULE_article = 49;
	public static readonly RULE_statement = 50;
	public static readonly RULE_details = 51;
	public static readonly RULE_sample_solution = 52;
	public static readonly RULE_buttoncopytext = 53;
	public static readonly RULE_wbtcontinue = 54;
	public static readonly RULE_learningpathdetails = 55;
	public static readonly RULE_page = 56;
	public static readonly RULE_note = 57;
	public static readonly RULE_info = 58;
	public static readonly RULE_warning = 59;
	public static readonly RULE_remark = 60;
	public static readonly RULE_help = 61;
	public static readonly RULE_danger = 62;
	public static readonly RULE_bug = 63;
	public static readonly RULE_sidenote = 64;
	public static readonly RULE_stickynote = 65;
	public static readonly RULE_quote = 66;
	public static readonly RULE_footnote = 67;
	public static readonly RULE_hintbit = 68;
	public static readonly RULE_examplebit = 69;
	public static readonly RULE_vendor_padlet_embed = 70;
	public static readonly RULE_scorm = 71;
	public static readonly RULE_bit_image = 72;
	public static readonly RULE_bit_imageLink = 73;
	public static readonly RULE_bit_imageZoom = 74;
	public static readonly RULE_bit_audio = 75;
	public static readonly RULE_bit_audioLink = 76;
	public static readonly RULE_bit_audioEmbed = 77;
	public static readonly RULE_bit_video = 78;
	public static readonly RULE_bit_videoLink = 79;
	public static readonly RULE_bit_videoEmbed = 80;
	public static readonly RULE_bit_stillImageFilm = 81;
	public static readonly RULE_bit_stillImageFilmLink = 82;
	public static readonly RULE_bit_stillImageFilmEmbed = 83;
	public static readonly RULE_bit_websiteLink = 84;
	public static readonly RULE_bit_document = 85;
	public static readonly RULE_bit_documentLink = 86;
	public static readonly RULE_bit_documentEmbed = 87;
	public static readonly RULE_bit_documentDownload = 88;
	public static readonly RULE_bit_appLink = 89;
	public static readonly RULE_bit_editorial = 90;
	public static readonly RULE_message = 91;
	public static readonly RULE_bot_interview = 92;
	public static readonly RULE_bot_choice = 93;
	public static readonly RULE_rating = 94;
	public static readonly RULE_bullet_item = 95;
	public static readonly RULE_survey = 96;
	public static readonly RULE_survey_1 = 97;
	public static readonly RULE_survey_anonymous = 98;
	public static readonly RULE_survey_anonymous_1 = 99;
	public static readonly RULE_self_assessment = 100;
	public static readonly RULE_self_assess_s_and_w = 101;
	public static readonly RULE_atpoint = 102;
	public static readonly RULE_format = 103;
	public static readonly RULE_resource_format = 104;
	public static readonly RULE_resource_format_extra = 105;
	public static readonly RULE_format2 = 106;
	public static readonly RULE_image_format = 107;
	public static readonly RULE_video_format = 108;
	public static readonly RULE_article_format = 109;
	public static readonly RULE_document_format = 110;
	public static readonly RULE_app_format = 111;
	public static readonly RULE_website_format = 112;
	public static readonly RULE_stillimagefilm_format = 113;
	public static readonly RULE_op_article_format = 114;
	public static readonly RULE_op_document_format = 115;
	public static readonly RULE_op_app_format = 116;
	public static readonly RULE_op_website_format = 117;
	public static readonly RULE_op_video_format = 118;
	public static readonly RULE_op_stillimagefilm_format = 119;
	public static readonly RULE_articlebit = 120;
	public static readonly RULE_documentbit = 121;
	public static readonly RULE_websitebit = 122;
	public static readonly RULE_appbit = 123;
	public static readonly RULE_stillimagefilmbit = 124;
	public static readonly RULE_stillimg_one = 125;
	public static readonly RULE_videobit = 126;
	public static readonly RULE_video_one = 127;
	public static readonly RULE_imagebit = 128;
	public static readonly RULE_image_one = 129;
	public static readonly RULE_op_image_format = 130;
	public static readonly RULE_image_chained = 131;
	public static readonly RULE_image_chained4match = 132;
	public static readonly RULE_audiobit = 133;
	public static readonly RULE_audio_one = 134;
	public static readonly RULE_audio_format = 135;
	public static readonly RULE_op_audio_format = 136;
	public static readonly RULE_resource_chained = 137;
	public static readonly RULE_telephone = 138;
	public static readonly RULE_url = 139;
	public static readonly RULE_item = 140;
	public static readonly RULE_lead = 141;
	public static readonly RULE_angleref = 142;
	public static readonly RULE_example = 143;
	public static readonly RULE_bracketed_text = 144;
	public static readonly RULE_reference = 145;
	public static readonly RULE_progress = 146;
	public static readonly RULE_dateprop = 147;
	public static readonly RULE_dateprop_chained = 148;
	public static readonly RULE_instruction = 149;
	public static readonly RULE_hint = 150;
	public static readonly RULE_title = 151;
	public static readonly RULE_bool_label = 152;
	public static readonly RULE_progress_points = 153;
	public static readonly RULE_istracked = 154;
	public static readonly RULE_isinfoonly = 155;
	public static readonly RULE_atdef = 156;
	public static readonly RULE_atdef_ = 157;
	public static readonly RULE_dollarans = 158;
	public static readonly RULE_anchor = 159;
	public static readonly RULE_lines = 160;
	public static readonly RULE_s_and_w = 161;
	public static readonly RULE_dclines = 162;
	public static readonly RULE_bracket_escaped = 163;
	public static readonly RULE_clnsp = 164;
	public static readonly RULE_sspl = 165;
	public static readonly RULE_words = 166;
	public static readonly RULE_sp = 167;
	public static readonly RULE_sentence = 168;
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
		"document_upload", "take_audio", "take_picture", "record_audio", "preparation_note", 
		"assignment", "article", "statement", "details", "sample_solution", "buttoncopytext", 
		"wbtcontinue", "learningpathdetails", "page", "note", "info", "warning", 
		"remark", "help", "danger", "bug", "sidenote", "stickynote", "quote", 
		"footnote", "hintbit", "examplebit", "vendor_padlet_embed", "scorm", "bit_image", 
		"bit_imageLink", "bit_imageZoom", "bit_audio", "bit_audioLink", "bit_audioEmbed", 
		"bit_video", "bit_videoLink", "bit_videoEmbed", "bit_stillImageFilm", 
		"bit_stillImageFilmLink", "bit_stillImageFilmEmbed", "bit_websiteLink", 
		"bit_document", "bit_documentLink", "bit_documentEmbed", "bit_documentDownload", 
		"bit_appLink", "bit_editorial", "message", "bot_interview", "bot_choice", 
		"rating", "bullet_item", "survey", "survey_1", "survey_anonymous", "survey_anonymous_1", 
		"self_assessment", "self_assess_s_and_w", "atpoint", "format", "resource_format", 
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
		"dclines", "bracket_escaped", "clnsp", "sspl", "words", "sp", "sentence",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'[.'", undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, "'CLOZE'", "'MATCH'", undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, "':'", "'&'", "'::'", "'+'", "'.@'", "'>'", "'<'", "'\u25BA'", 
		"'\u2192'", "'=='", undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		"'[@'", undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, "'http://'", 
		"'https://'", "'&audio'", "'&image'", "'&image-zoom'", "'&imageWithAudio'", 
		"'&video'", "'&article'", "'&document'", "'&app'", "'&website'", "'&stillImageFilm'", 
		"'&pdf'", undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, "'&audioLink'", 
		"'&imageLink'", "'&videoLink'", "'&articleLink'", "'&documentLink'", "'&appLink'", 
		"'&websiteLink'", "'&stillImageFilmLink'", undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, "':bitmark--'", 
		"':bitmark++'", "':text'", "':prosemirror'", "':placeholder'", "':basic'", 
		"':jpg'", "':png'", "':gif'", "':svg'", "':mp2'", "':mp3'", "':mp4'", 
		"':flv'", "':wmv'", "':mpeg'", "':mpg'", "'tel:'", "'.article-attachment'", 
		"'*'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "OPDOT", "S", "BitBook", "BitChapter", "BitToc", "BitSummary", 
		"BitIntlink", "BitIntRef", "BitAlias", "BitGroups", "BitGroupt", "BitPlaceholder", 
		"BitStatement", "BitDetails", "BitSampleSolution", "BitTakeAudio", "CLOZE", 
		"MATCH", "BitArticle", "BitPage", "BitEssay", "BitMessage", "BitCorrection", 
		"BitMark", "BitDocup", "BitTakepic", "BitRecaud", "BitPrepnote", "BitAssign", 
		"BitBotint", "BitSelfassess", "BitRating", "BitSurvey", "BitSurvey1", 
		"BitSurveyanon", "BitSurveyanon1", "BitVocabulary", "BitVocabulary1", 
		"BitNote", "BitInfo", "BitWarning", "BitRemark", "BitHint", "BitHelp", 
		"BitDanger", "BitBug", "BitSidenote", "BitStickynote", "BitQuote", "BitFootnote", 
		"BitExample", "BitButtonCopytext", "BitWbtContinue", "BitLearningPathDetails", 
		"BitLearningPathLti", "BitLearningPathStep", "BitLearningPathBook", "BitLearningPathSign", 
		"BitLearningPathVideoCall", "BitLearningPathLearningGoal", "BitLearningPathClosing", 
		"BitLearningPathFeedback", "BitLearningPathBotTraining", "BitLearningPathExternalLink", 
		"BitLearningPathClassroomTraining", "BitLearningPathClassroomEvent", "BitBotActionSend", 
		"BitBotActionAnnounce", "BitBotActionSave", "BitBotActionRemind", "BitVendorPadletEmbed", 
		"BitScorm", "BitImage", "BitImageLink", "BitImageZoom", "BitAudio", "BitAudioLink", 
		"BitAudioEmbed", "BitVideo", "BitVideoLink", "BitVideoEmbed", "BitStillImageFilm", 
		"BitStillImageFilmLink", "BitStillImageFilmEmbed", "BitWebsiteLink", "BitDocument", 
		"BitDocumentLink", "BitDocumentEmbed", "BitDocumentDownload", "BitAppLink", 
		"BitEditorial", "COMMENT", "Image_type", "Audio_type", "Video_type", "OPDOLL", 
		"OPBUL", "OPESC", "OPRANGLES", "OPRANGLEL", "OPDANGLE", "OPU", "OPB", 
		"OPQ", "OPA", "OPP", "OPM", "OPS", "OPR", "OPHASH", "OPC", "CL", "COLON", 
		"AMP", "DBLCOLON", "PLUS", "DotAt", "Greater", "Less", "RightAngle", "RightArrow", 
		"DBLEQ", "HSPL", "HSPL2", "SSPL", "SSPL2", "QUOTE_INDEX", "DCANY", "ArticleText", 
		"NOTCL", "NUMERIC", "STRING", "NL", "SENTENCE", "OPAT", "AtProgress", 
		"AtReference", "AtWidth", "AtHeight", "AtProgressPoints", "AtShortanswer", 
		"AtLonganswer", "AtExampleWithStr", "AtExamplecol", "AtExamplecl", "AtPartialAnswerS", 
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
		"OpAmpWebsiteLink", "OpAmpStillImageFilmLink", "BitmarkMinus", "BitmarkPlus", 
		"ColonText", "Prosemirror", "Placeholder", "BASIC", "JPG", "PNG", "GIF", 
		"SVG", "MP2", "MP3", "MP4", "FLV", "WMV", "MPEG", "MPG", "TEL", "DotArticleAtt", 
		"STAR", "URL", "LIST_LINE",
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
			this.state = 351;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 338;
				this.bitmark_();
				this.state = 348;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 1, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 342;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						while (_la === bitmarkParser.S) {
							{
							{
							this.state = 339;
							this.match(bitmarkParser.S);
							}
							}
							this.state = 344;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
						}
						this.state = 345;
						this.match(bitmarkParser.NL);
						}
						}
					}
					this.state = 350;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 1, this._ctx);
				}
				}
				}
				this.state = 353;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << bitmarkParser.S) | (1 << bitmarkParser.BitBook) | (1 << bitmarkParser.BitChapter) | (1 << bitmarkParser.BitToc) | (1 << bitmarkParser.BitSummary) | (1 << bitmarkParser.BitIntlink) | (1 << bitmarkParser.BitIntRef) | (1 << bitmarkParser.BitAlias) | (1 << bitmarkParser.BitGroups) | (1 << bitmarkParser.BitGroupt) | (1 << bitmarkParser.BitStatement) | (1 << bitmarkParser.BitDetails) | (1 << bitmarkParser.BitSampleSolution) | (1 << bitmarkParser.BitTakeAudio) | (1 << bitmarkParser.BitArticle) | (1 << bitmarkParser.BitPage) | (1 << bitmarkParser.BitEssay) | (1 << bitmarkParser.BitMessage) | (1 << bitmarkParser.BitCorrection) | (1 << bitmarkParser.BitMark) | (1 << bitmarkParser.BitDocup) | (1 << bitmarkParser.BitTakepic) | (1 << bitmarkParser.BitRecaud) | (1 << bitmarkParser.BitPrepnote) | (1 << bitmarkParser.BitAssign) | (1 << bitmarkParser.BitBotint) | (1 << bitmarkParser.BitSelfassess))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (bitmarkParser.BitRating - 32)) | (1 << (bitmarkParser.BitSurvey - 32)) | (1 << (bitmarkParser.BitSurvey1 - 32)) | (1 << (bitmarkParser.BitSurveyanon - 32)) | (1 << (bitmarkParser.BitSurveyanon1 - 32)) | (1 << (bitmarkParser.BitNote - 32)) | (1 << (bitmarkParser.BitInfo - 32)) | (1 << (bitmarkParser.BitWarning - 32)) | (1 << (bitmarkParser.BitRemark - 32)) | (1 << (bitmarkParser.BitHint - 32)) | (1 << (bitmarkParser.BitHelp - 32)) | (1 << (bitmarkParser.BitDanger - 32)) | (1 << (bitmarkParser.BitBug - 32)) | (1 << (bitmarkParser.BitSidenote - 32)) | (1 << (bitmarkParser.BitStickynote - 32)) | (1 << (bitmarkParser.BitQuote - 32)) | (1 << (bitmarkParser.BitFootnote - 32)) | (1 << (bitmarkParser.BitExample - 32)) | (1 << (bitmarkParser.BitButtonCopytext - 32)) | (1 << (bitmarkParser.BitWbtContinue - 32)) | (1 << (bitmarkParser.BitLearningPathDetails - 32)) | (1 << (bitmarkParser.BitLearningPathLti - 32)) | (1 << (bitmarkParser.BitLearningPathStep - 32)) | (1 << (bitmarkParser.BitLearningPathBook - 32)) | (1 << (bitmarkParser.BitLearningPathSign - 32)) | (1 << (bitmarkParser.BitLearningPathVideoCall - 32)) | (1 << (bitmarkParser.BitLearningPathLearningGoal - 32)) | (1 << (bitmarkParser.BitLearningPathClosing - 32)) | (1 << (bitmarkParser.BitLearningPathFeedback - 32)) | (1 << (bitmarkParser.BitLearningPathBotTraining - 32)))) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (bitmarkParser.BitLearningPathExternalLink - 64)) | (1 << (bitmarkParser.BitLearningPathClassroomTraining - 64)) | (1 << (bitmarkParser.BitLearningPathClassroomEvent - 64)) | (1 << (bitmarkParser.BitBotActionSend - 64)) | (1 << (bitmarkParser.BitBotActionAnnounce - 64)) | (1 << (bitmarkParser.BitBotActionSave - 64)) | (1 << (bitmarkParser.BitBotActionRemind - 64)) | (1 << (bitmarkParser.BitVendorPadletEmbed - 64)) | (1 << (bitmarkParser.BitScorm - 64)) | (1 << (bitmarkParser.BitImage - 64)) | (1 << (bitmarkParser.BitImageLink - 64)) | (1 << (bitmarkParser.BitImageZoom - 64)) | (1 << (bitmarkParser.BitAudio - 64)) | (1 << (bitmarkParser.BitAudioLink - 64)) | (1 << (bitmarkParser.BitAudioEmbed - 64)) | (1 << (bitmarkParser.BitVideo - 64)) | (1 << (bitmarkParser.BitVideoLink - 64)) | (1 << (bitmarkParser.BitVideoEmbed - 64)) | (1 << (bitmarkParser.BitStillImageFilm - 64)) | (1 << (bitmarkParser.BitStillImageFilmLink - 64)) | (1 << (bitmarkParser.BitStillImageFilmEmbed - 64)) | (1 << (bitmarkParser.BitWebsiteLink - 64)) | (1 << (bitmarkParser.BitDocument - 64)) | (1 << (bitmarkParser.BitDocumentLink - 64)) | (1 << (bitmarkParser.BitDocumentEmbed - 64)) | (1 << (bitmarkParser.BitDocumentDownload - 64)) | (1 << (bitmarkParser.BitAppLink - 64)) | (1 << (bitmarkParser.BitEditorial - 64)))) !== 0) || ((((_la - 98)) & ~0x1F) === 0 && ((1 << (_la - 98)) & ((1 << (bitmarkParser.OPESC - 98)) | (1 << (bitmarkParser.OPDANGLE - 98)) | (1 << (bitmarkParser.OPQ - 98)) | (1 << (bitmarkParser.OPS - 98)) | (1 << (bitmarkParser.COLON - 98)) | (1 << (bitmarkParser.AMP - 98)) | (1 << (bitmarkParser.Greater - 98)) | (1 << (bitmarkParser.Less - 98)) | (1 << (bitmarkParser.RightAngle - 98)) | (1 << (bitmarkParser.RightArrow - 98)) | (1 << (bitmarkParser.DBLEQ - 98)) | (1 << (bitmarkParser.QUOTE_INDEX - 98)))) !== 0) || ((((_la - 131)) & ~0x1F) === 0 && ((1 << (_la - 131)) & ((1 << (bitmarkParser.NUMERIC - 131)) | (1 << (bitmarkParser.STRING - 131)) | (1 << (bitmarkParser.SENTENCE - 131)))) !== 0) || ((((_la - 164)) & ~0x1F) === 0 && ((1 << (_la - 164)) & ((1 << (bitmarkParser.AmpAudio - 164)) | (1 << (bitmarkParser.AmpImage - 164)) | (1 << (bitmarkParser.AmpVideo - 164)) | (1 << (bitmarkParser.AmpArticle - 164)) | (1 << (bitmarkParser.AmpDocument - 164)) | (1 << (bitmarkParser.AmpApp - 164)) | (1 << (bitmarkParser.AmpWebsite - 164)) | (1 << (bitmarkParser.AmpStillImageFilm - 164)) | (1 << (bitmarkParser.AmpAudioLink - 164)) | (1 << (bitmarkParser.AmpImageLink - 164)) | (1 << (bitmarkParser.AmpVideoLink - 164)) | (1 << (bitmarkParser.AmpArticleLink - 164)) | (1 << (bitmarkParser.AmpDocumentLink - 164)) | (1 << (bitmarkParser.AmpAppLink - 164)) | (1 << (bitmarkParser.AmpWebsiteLink - 164)) | (1 << (bitmarkParser.AmpStillImageFilmLink - 164)))) !== 0) || ((((_la - 203)) & ~0x1F) === 0 && ((1 << (_la - 203)) & ((1 << (bitmarkParser.BitmarkMinus - 203)) | (1 << (bitmarkParser.BitmarkPlus - 203)) | (1 << (bitmarkParser.URL - 203)))) !== 0));
			this.state = 358;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === bitmarkParser.NL) {
				{
				{
				this.state = 355;
				this.match(bitmarkParser.NL);
				}
				}
				this.state = 360;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 361;
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
			this.state = 365;
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
			case bitmarkParser.BitSampleSolution:
			case bitmarkParser.BitTakeAudio:
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
			case bitmarkParser.BitVendorPadletEmbed:
			case bitmarkParser.BitScorm:
			case bitmarkParser.BitImage:
			case bitmarkParser.BitImageLink:
			case bitmarkParser.BitImageZoom:
			case bitmarkParser.BitAudio:
			case bitmarkParser.BitAudioLink:
			case bitmarkParser.BitAudioEmbed:
			case bitmarkParser.BitVideo:
			case bitmarkParser.BitVideoLink:
			case bitmarkParser.BitVideoEmbed:
			case bitmarkParser.BitStillImageFilm:
			case bitmarkParser.BitStillImageFilmLink:
			case bitmarkParser.BitStillImageFilmEmbed:
			case bitmarkParser.BitWebsiteLink:
			case bitmarkParser.BitDocument:
			case bitmarkParser.BitDocumentLink:
			case bitmarkParser.BitDocumentEmbed:
			case bitmarkParser.BitDocumentDownload:
			case bitmarkParser.BitAppLink:
			case bitmarkParser.BitEditorial:
			case bitmarkParser.OPDANGLE:
			case bitmarkParser.OPQ:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 363;
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
				this.state = 364;
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
			this.state = 452;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case bitmarkParser.BitBook:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 367;
				this.book();
				}
				break;
			case bitmarkParser.BitChapter:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 368;
				this.chapter();
				}
				break;
			case bitmarkParser.BitSummary:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 369;
				this.summary();
				}
				break;
			case bitmarkParser.BitToc:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 370;
				this.toc();
				}
				break;
			case bitmarkParser.BitAlias:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 371;
				this.bit_alias();
				}
				break;
			case bitmarkParser.BitIntlink:
			case bitmarkParser.BitIntRef:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 372;
				this.internal_link();
				}
				break;
			case bitmarkParser.OPDANGLE:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 373;
				this.anchor();
				}
				break;
			case bitmarkParser.BitGroups:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 374;
				this.group_born();
				}
				break;
			case bitmarkParser.BitGroupt:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 375;
				this.group_died();
				}
				break;
			case bitmarkParser.BitEssay:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 376;
				this.essay();
				}
				break;
			case bitmarkParser.BitCorrection:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 377;
				this.correction();
				}
				break;
			case bitmarkParser.BitMark:
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 378;
				this.mark_();
				}
				break;
			case bitmarkParser.BitDocup:
				this.enterOuterAlt(_localctx, 13);
				{
				this.state = 379;
				this.document_upload();
				}
				break;
			case bitmarkParser.BitTakepic:
				this.enterOuterAlt(_localctx, 14);
				{
				this.state = 380;
				this.take_picture();
				}
				break;
			case bitmarkParser.BitTakeAudio:
				this.enterOuterAlt(_localctx, 15);
				{
				this.state = 381;
				this.take_audio();
				}
				break;
			case bitmarkParser.BitRecaud:
				this.enterOuterAlt(_localctx, 16);
				{
				this.state = 382;
				this.record_audio();
				}
				break;
			case bitmarkParser.BitPrepnote:
				this.enterOuterAlt(_localctx, 17);
				{
				this.state = 383;
				this.preparation_note();
				}
				break;
			case bitmarkParser.BitAssign:
				this.enterOuterAlt(_localctx, 18);
				{
				this.state = 384;
				this.assignment();
				}
				break;
			case bitmarkParser.BitArticle:
				this.enterOuterAlt(_localctx, 19);
				{
				this.state = 385;
				this.article();
				}
				break;
			case bitmarkParser.BitStatement:
				this.enterOuterAlt(_localctx, 20);
				{
				this.state = 386;
				this.statement();
				}
				break;
			case bitmarkParser.BitDetails:
				this.enterOuterAlt(_localctx, 21);
				{
				this.state = 387;
				this.details();
				}
				break;
			case bitmarkParser.BitSampleSolution:
				this.enterOuterAlt(_localctx, 22);
				{
				this.state = 388;
				this.sample_solution();
				}
				break;
			case bitmarkParser.BitButtonCopytext:
				this.enterOuterAlt(_localctx, 23);
				{
				this.state = 389;
				this.buttoncopytext();
				}
				break;
			case bitmarkParser.BitWbtContinue:
				this.enterOuterAlt(_localctx, 24);
				{
				this.state = 390;
				this.wbtcontinue();
				}
				break;
			case bitmarkParser.BitLearningPathDetails:
				this.enterOuterAlt(_localctx, 25);
				{
				this.state = 391;
				this.learningpathdetails();
				}
				break;
			case bitmarkParser.BitNote:
				this.enterOuterAlt(_localctx, 26);
				{
				this.state = 392;
				this.note();
				}
				break;
			case bitmarkParser.BitInfo:
				this.enterOuterAlt(_localctx, 27);
				{
				this.state = 393;
				this.info();
				}
				break;
			case bitmarkParser.BitWarning:
				this.enterOuterAlt(_localctx, 28);
				{
				this.state = 394;
				this.warning();
				}
				break;
			case bitmarkParser.BitRemark:
				this.enterOuterAlt(_localctx, 29);
				{
				this.state = 395;
				this.remark();
				}
				break;
			case bitmarkParser.BitHint:
				this.enterOuterAlt(_localctx, 30);
				{
				this.state = 396;
				this.hintbit();
				}
				break;
			case bitmarkParser.BitHelp:
				this.enterOuterAlt(_localctx, 31);
				{
				this.state = 397;
				this.help();
				}
				break;
			case bitmarkParser.BitDanger:
				this.enterOuterAlt(_localctx, 32);
				{
				this.state = 398;
				this.danger();
				}
				break;
			case bitmarkParser.BitBug:
				this.enterOuterAlt(_localctx, 33);
				{
				this.state = 399;
				this.bug();
				}
				break;
			case bitmarkParser.BitSidenote:
				this.enterOuterAlt(_localctx, 34);
				{
				this.state = 400;
				this.sidenote();
				}
				break;
			case bitmarkParser.BitStickynote:
				this.enterOuterAlt(_localctx, 35);
				{
				this.state = 401;
				this.stickynote();
				}
				break;
			case bitmarkParser.BitQuote:
				this.enterOuterAlt(_localctx, 36);
				{
				this.state = 402;
				this.quote();
				}
				break;
			case bitmarkParser.BitFootnote:
				this.enterOuterAlt(_localctx, 37);
				{
				this.state = 403;
				this.footnote();
				}
				break;
			case bitmarkParser.BitExample:
				this.enterOuterAlt(_localctx, 38);
				{
				this.state = 404;
				this.examplebit();
				}
				break;
			case bitmarkParser.BitPage:
				this.enterOuterAlt(_localctx, 39);
				{
				this.state = 405;
				this.page();
				}
				break;
			case bitmarkParser.BitMessage:
				this.enterOuterAlt(_localctx, 40);
				{
				this.state = 406;
				this.message();
				}
				break;
			case bitmarkParser.BitBotint:
				this.enterOuterAlt(_localctx, 41);
				{
				this.state = 407;
				this.bot_interview();
				}
				break;
			case bitmarkParser.BitSelfassess:
				this.enterOuterAlt(_localctx, 42);
				{
				this.state = 408;
				this.self_assessment();
				}
				break;
			case bitmarkParser.BitRating:
				this.enterOuterAlt(_localctx, 43);
				{
				this.state = 409;
				this.rating();
				}
				break;
			case bitmarkParser.BitSurvey:
				this.enterOuterAlt(_localctx, 44);
				{
				this.state = 410;
				this.survey();
				}
				break;
			case bitmarkParser.BitSurvey1:
				this.enterOuterAlt(_localctx, 45);
				{
				this.state = 411;
				this.survey_1();
				}
				break;
			case bitmarkParser.BitSurveyanon:
				this.enterOuterAlt(_localctx, 46);
				{
				this.state = 412;
				this.survey_anonymous();
				}
				break;
			case bitmarkParser.BitSurveyanon1:
				this.enterOuterAlt(_localctx, 47);
				{
				this.state = 413;
				this.survey_anonymous_1();
				}
				break;
			case bitmarkParser.OPQ:
				this.enterOuterAlt(_localctx, 48);
				{
				this.state = 414;
				this.hint();
				}
				break;
			case bitmarkParser.BitVendorPadletEmbed:
				this.enterOuterAlt(_localctx, 49);
				{
				this.state = 415;
				this.vendor_padlet_embed();
				}
				break;
			case bitmarkParser.BitScorm:
				this.enterOuterAlt(_localctx, 50);
				{
				this.state = 416;
				this.scorm();
				}
				break;
			case bitmarkParser.BitLearningPathLti:
				this.enterOuterAlt(_localctx, 51);
				{
				this.state = 417;
				this.learning_path_lti();
				}
				break;
			case bitmarkParser.BitLearningPathStep:
				this.enterOuterAlt(_localctx, 52);
				{
				this.state = 418;
				this.learning_path_step();
				}
				break;
			case bitmarkParser.BitLearningPathBook:
				this.enterOuterAlt(_localctx, 53);
				{
				this.state = 419;
				this.learning_path_book();
				}
				break;
			case bitmarkParser.BitLearningPathSign:
				this.enterOuterAlt(_localctx, 54);
				{
				this.state = 420;
				this.learning_path_sign();
				}
				break;
			case bitmarkParser.BitLearningPathVideoCall:
				this.enterOuterAlt(_localctx, 55);
				{
				this.state = 421;
				this.learning_path_video_call();
				}
				break;
			case bitmarkParser.BitLearningPathLearningGoal:
				this.enterOuterAlt(_localctx, 56);
				{
				this.state = 422;
				this.learning_path_learning_goal();
				}
				break;
			case bitmarkParser.BitLearningPathClosing:
				this.enterOuterAlt(_localctx, 57);
				{
				this.state = 423;
				this.learning_path_closing();
				}
				break;
			case bitmarkParser.BitLearningPathFeedback:
				this.enterOuterAlt(_localctx, 58);
				{
				this.state = 424;
				this.learning_path_feedback();
				}
				break;
			case bitmarkParser.BitLearningPathBotTraining:
				this.enterOuterAlt(_localctx, 59);
				{
				this.state = 425;
				this.learning_path_bot_training();
				}
				break;
			case bitmarkParser.BitLearningPathExternalLink:
				this.enterOuterAlt(_localctx, 60);
				{
				this.state = 426;
				this.learning_path_external_link();
				}
				break;
			case bitmarkParser.BitLearningPathClassroomTraining:
				this.enterOuterAlt(_localctx, 61);
				{
				this.state = 427;
				this.learning_path_classroom_training();
				}
				break;
			case bitmarkParser.BitLearningPathClassroomEvent:
				this.enterOuterAlt(_localctx, 62);
				{
				this.state = 428;
				this.learning_path_classroom_event();
				}
				break;
			case bitmarkParser.BitBotActionSend:
				this.enterOuterAlt(_localctx, 63);
				{
				this.state = 429;
				this.bot_action_send();
				}
				break;
			case bitmarkParser.BitBotActionAnnounce:
				this.enterOuterAlt(_localctx, 64);
				{
				this.state = 430;
				this.bot_action_announce();
				}
				break;
			case bitmarkParser.BitBotActionSave:
				this.enterOuterAlt(_localctx, 65);
				{
				this.state = 431;
				this.bot_action_save();
				}
				break;
			case bitmarkParser.BitBotActionRemind:
				this.enterOuterAlt(_localctx, 66);
				{
				this.state = 432;
				this.bot_action_remind();
				}
				break;
			case bitmarkParser.BitImage:
				this.enterOuterAlt(_localctx, 67);
				{
				this.state = 433;
				this.bit_image();
				}
				break;
			case bitmarkParser.BitImageLink:
				this.enterOuterAlt(_localctx, 68);
				{
				this.state = 434;
				this.bit_imageLink();
				}
				break;
			case bitmarkParser.BitImageZoom:
				this.enterOuterAlt(_localctx, 69);
				{
				this.state = 435;
				this.bit_imageZoom();
				}
				break;
			case bitmarkParser.BitAudio:
				this.enterOuterAlt(_localctx, 70);
				{
				this.state = 436;
				this.bit_audio();
				}
				break;
			case bitmarkParser.BitAudioLink:
				this.enterOuterAlt(_localctx, 71);
				{
				this.state = 437;
				this.bit_audioLink();
				}
				break;
			case bitmarkParser.BitAudioEmbed:
				this.enterOuterAlt(_localctx, 72);
				{
				this.state = 438;
				this.bit_audioEmbed();
				}
				break;
			case bitmarkParser.BitVideo:
				this.enterOuterAlt(_localctx, 73);
				{
				this.state = 439;
				this.bit_video();
				}
				break;
			case bitmarkParser.BitVideoLink:
				this.enterOuterAlt(_localctx, 74);
				{
				this.state = 440;
				this.bit_videoLink();
				}
				break;
			case bitmarkParser.BitVideoEmbed:
				this.enterOuterAlt(_localctx, 75);
				{
				this.state = 441;
				this.bit_videoEmbed();
				}
				break;
			case bitmarkParser.BitStillImageFilm:
				this.enterOuterAlt(_localctx, 76);
				{
				this.state = 442;
				this.bit_stillImageFilm();
				}
				break;
			case bitmarkParser.BitStillImageFilmLink:
				this.enterOuterAlt(_localctx, 77);
				{
				this.state = 443;
				this.bit_stillImageFilmLink();
				}
				break;
			case bitmarkParser.BitStillImageFilmEmbed:
				this.enterOuterAlt(_localctx, 78);
				{
				this.state = 444;
				this.bit_stillImageFilmEmbed();
				}
				break;
			case bitmarkParser.BitDocument:
				this.enterOuterAlt(_localctx, 79);
				{
				this.state = 445;
				this.bit_document();
				}
				break;
			case bitmarkParser.BitDocumentLink:
				this.enterOuterAlt(_localctx, 80);
				{
				this.state = 446;
				this.bit_documentLink();
				}
				break;
			case bitmarkParser.BitDocumentEmbed:
				this.enterOuterAlt(_localctx, 81);
				{
				this.state = 447;
				this.bit_documentEmbed();
				}
				break;
			case bitmarkParser.BitDocumentDownload:
				this.enterOuterAlt(_localctx, 82);
				{
				this.state = 448;
				this.bit_documentDownload();
				}
				break;
			case bitmarkParser.BitWebsiteLink:
				this.enterOuterAlt(_localctx, 83);
				{
				this.state = 449;
				this.bit_websiteLink();
				}
				break;
			case bitmarkParser.BitAppLink:
				this.enterOuterAlt(_localctx, 84);
				{
				this.state = 450;
				this.bit_appLink();
				}
				break;
			case bitmarkParser.BitEditorial:
				this.enterOuterAlt(_localctx, 85);
				{
				this.state = 451;
				this.bit_editorial();
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
			this.state = 454;
			this.match(bitmarkParser.BitBook);
			this.state = 456;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 6, this._ctx) ) {
			case 1:
				{
				this.state = 455;
				this.format();
				}
				break;
			}
			this.state = 458;
			this.match(bitmarkParser.CL);
			this.state = 466;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 462;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === bitmarkParser.NL) {
						{
						{
						this.state = 459;
						this.match(bitmarkParser.NL);
						}
						}
						this.state = 464;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					this.state = 465;
					this.bitElem();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 468;
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
			this.state = 470;
			this.match(bitmarkParser.BitChapter);
			this.state = 472;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 9, this._ctx) ) {
			case 1:
				{
				this.state = 471;
				this.format();
				}
				break;
			}
			this.state = 474;
			this.match(bitmarkParser.CL);
			this.state = 478;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === bitmarkParser.NL) {
				{
				{
				this.state = 475;
				this.match(bitmarkParser.NL);
				}
				}
				this.state = 480;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 484;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 11, this._ctx) ) {
			case 1:
				{
				this.state = 481;
				this.anchor();
				this.state = 482;
				this.match(bitmarkParser.NL);
				}
				break;
			}
			this.state = 486;
			this.resource();
			this.state = 496;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 13, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 490;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === bitmarkParser.NL) {
						{
						{
						this.state = 487;
						this.match(bitmarkParser.NL);
						}
						}
						this.state = 492;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					this.state = 493;
					this.resource();
					}
					}
				}
				this.state = 498;
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
			this.state = 499;
			this.match(bitmarkParser.BitToc);
			this.state = 501;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === bitmarkParser.S || ((((_la - 98)) & ~0x1F) === 0 && ((1 << (_la - 98)) & ((1 << (bitmarkParser.OPESC - 98)) | (1 << (bitmarkParser.OPS - 98)) | (1 << (bitmarkParser.COLON - 98)) | (1 << (bitmarkParser.AMP - 98)) | (1 << (bitmarkParser.Greater - 98)) | (1 << (bitmarkParser.Less - 98)) | (1 << (bitmarkParser.RightAngle - 98)) | (1 << (bitmarkParser.RightArrow - 98)) | (1 << (bitmarkParser.DBLEQ - 98)) | (1 << (bitmarkParser.QUOTE_INDEX - 98)))) !== 0) || ((((_la - 131)) & ~0x1F) === 0 && ((1 << (_la - 131)) & ((1 << (bitmarkParser.NUMERIC - 131)) | (1 << (bitmarkParser.STRING - 131)) | (1 << (bitmarkParser.SENTENCE - 131)))) !== 0) || ((((_la - 164)) & ~0x1F) === 0 && ((1 << (_la - 164)) & ((1 << (bitmarkParser.AmpAudio - 164)) | (1 << (bitmarkParser.AmpImage - 164)) | (1 << (bitmarkParser.AmpVideo - 164)) | (1 << (bitmarkParser.AmpArticle - 164)) | (1 << (bitmarkParser.AmpDocument - 164)) | (1 << (bitmarkParser.AmpApp - 164)) | (1 << (bitmarkParser.AmpWebsite - 164)) | (1 << (bitmarkParser.AmpStillImageFilm - 164)) | (1 << (bitmarkParser.AmpAudioLink - 164)) | (1 << (bitmarkParser.AmpImageLink - 164)) | (1 << (bitmarkParser.AmpVideoLink - 164)) | (1 << (bitmarkParser.AmpArticleLink - 164)) | (1 << (bitmarkParser.AmpDocumentLink - 164)) | (1 << (bitmarkParser.AmpAppLink - 164)) | (1 << (bitmarkParser.AmpWebsiteLink - 164)) | (1 << (bitmarkParser.AmpStillImageFilmLink - 164)))) !== 0) || ((((_la - 203)) & ~0x1F) === 0 && ((1 << (_la - 203)) & ((1 << (bitmarkParser.BitmarkMinus - 203)) | (1 << (bitmarkParser.BitmarkPlus - 203)) | (1 << (bitmarkParser.URL - 203)))) !== 0)) {
				{
				this.state = 500;
				this.s_and_w();
				}
			}

			this.state = 503;
			this.match(bitmarkParser.CL);
			this.state = 504;
			this.match(bitmarkParser.NL);
			this.state = 508;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === bitmarkParser.OPA || _la === bitmarkParser.OpAtCopyright) {
				{
				this.state = 505;
				this.atdef();
				this.state = 506;
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
			this.state = 510;
			this.match(bitmarkParser.BitSummary);
			this.state = 511;
			this.match(bitmarkParser.CL);
			this.state = 515;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 16, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 512;
					this.match(bitmarkParser.NL);
					}
					}
				}
				this.state = 517;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 16, this._ctx);
			}
			this.state = 518;
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
			this.state = 520;
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
			this.state = 522;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === bitmarkParser.BitmarkMinus || _la === bitmarkParser.BitmarkPlus) {
				{
				this.state = 521;
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

			this.state = 524;
			this.match(bitmarkParser.CL);
			this.state = 534;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 19, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 528;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === bitmarkParser.NL) {
						{
						{
						this.state = 525;
						this.match(bitmarkParser.NL);
						}
						}
						this.state = 530;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					this.state = 531;
					this.bitElem();
					}
					}
				}
				this.state = 536;
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
			this.state = 537;
			this.match(bitmarkParser.BitAlias);
			this.state = 538;
			this.match(bitmarkParser.CL);
			this.state = 539;
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
			this.state = 555;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 22, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 542;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === bitmarkParser.NL) {
						{
						this.state = 541;
						this.match(bitmarkParser.NL);
						}
					}

					this.state = 551;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case bitmarkParser.OPHASH:
						{
						this.state = 544;
						this.title();
						}
						break;
					case bitmarkParser.OPA:
					case bitmarkParser.OpAtCopyright:
						{
						this.state = 545;
						this.atdef();
						}
						break;
					case bitmarkParser.OPC:
						{
						this.state = 546;
						this.item();
						}
						break;
					case bitmarkParser.OPB:
						{
						this.state = 547;
						this.instruction();
						}
						break;
					case bitmarkParser.OPRANGLES:
					case bitmarkParser.OPRANGLEL:
						{
						this.state = 548;
						this.angleref();
						}
						break;
					case bitmarkParser.OPDANGLE:
						{
						this.state = 549;
						this.anchor();
						}
						break;
					case bitmarkParser.AtProgress:
						{
						this.state = 550;
						this.progress();
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					}
					}
				}
				this.state = 557;
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
			this.state = 558;
			this.match(bitmarkParser.BitGroups);
			this.state = 559;
			this.match(bitmarkParser.CL);
			this.state = 569;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 560;
					this.match(bitmarkParser.NL);
					this.state = 561;
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
					this.state = 564;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					do {
						{
						this.state = 564;
						this._errHandler.sync(this);
						switch ( this.interpreter.adaptivePredict(this._input, 23, this._ctx) ) {
						case 1:
							{
							this.state = 562;
							this.s_and_w();
							}
							break;

						case 2:
							{
							this.state = 563;
							this.match(bitmarkParser.COLON);
							}
							break;
						}
						}
						this.state = 566;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					} while (_la === bitmarkParser.S || ((((_la - 98)) & ~0x1F) === 0 && ((1 << (_la - 98)) & ((1 << (bitmarkParser.OPESC - 98)) | (1 << (bitmarkParser.OPS - 98)) | (1 << (bitmarkParser.COLON - 98)) | (1 << (bitmarkParser.AMP - 98)) | (1 << (bitmarkParser.Greater - 98)) | (1 << (bitmarkParser.Less - 98)) | (1 << (bitmarkParser.RightAngle - 98)) | (1 << (bitmarkParser.RightArrow - 98)) | (1 << (bitmarkParser.DBLEQ - 98)) | (1 << (bitmarkParser.QUOTE_INDEX - 98)))) !== 0) || ((((_la - 131)) & ~0x1F) === 0 && ((1 << (_la - 131)) & ((1 << (bitmarkParser.NUMERIC - 131)) | (1 << (bitmarkParser.STRING - 131)) | (1 << (bitmarkParser.SENTENCE - 131)))) !== 0) || ((((_la - 164)) & ~0x1F) === 0 && ((1 << (_la - 164)) & ((1 << (bitmarkParser.AmpAudio - 164)) | (1 << (bitmarkParser.AmpImage - 164)) | (1 << (bitmarkParser.AmpVideo - 164)) | (1 << (bitmarkParser.AmpArticle - 164)) | (1 << (bitmarkParser.AmpDocument - 164)) | (1 << (bitmarkParser.AmpApp - 164)) | (1 << (bitmarkParser.AmpWebsite - 164)) | (1 << (bitmarkParser.AmpStillImageFilm - 164)) | (1 << (bitmarkParser.AmpAudioLink - 164)) | (1 << (bitmarkParser.AmpImageLink - 164)) | (1 << (bitmarkParser.AmpVideoLink - 164)) | (1 << (bitmarkParser.AmpArticleLink - 164)) | (1 << (bitmarkParser.AmpDocumentLink - 164)) | (1 << (bitmarkParser.AmpAppLink - 164)) | (1 << (bitmarkParser.AmpWebsiteLink - 164)) | (1 << (bitmarkParser.AmpStillImageFilmLink - 164)))) !== 0) || ((((_la - 203)) & ~0x1F) === 0 && ((1 << (_la - 203)) & ((1 << (bitmarkParser.BitmarkMinus - 203)) | (1 << (bitmarkParser.BitmarkPlus - 203)) | (1 << (bitmarkParser.URL - 203)))) !== 0));
					this.state = 568;
					this.match(bitmarkParser.CL);
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 571;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 25, this._ctx);
			} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
			this.state = 573;
			this.match(bitmarkParser.NL);
			this.state = 577;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 26, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 574;
					this.lines();
					}
					}
				}
				this.state = 579;
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
			this.state = 580;
			this.match(bitmarkParser.BitGroupt);
			this.state = 581;
			this.match(bitmarkParser.CL);
			this.state = 591;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 582;
					this.match(bitmarkParser.NL);
					this.state = 583;
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
					this.state = 586;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					do {
						{
						this.state = 586;
						this._errHandler.sync(this);
						switch ( this.interpreter.adaptivePredict(this._input, 27, this._ctx) ) {
						case 1:
							{
							this.state = 584;
							this.s_and_w();
							}
							break;

						case 2:
							{
							this.state = 585;
							this.match(bitmarkParser.COLON);
							}
							break;
						}
						}
						this.state = 588;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					} while (_la === bitmarkParser.S || ((((_la - 98)) & ~0x1F) === 0 && ((1 << (_la - 98)) & ((1 << (bitmarkParser.OPESC - 98)) | (1 << (bitmarkParser.OPS - 98)) | (1 << (bitmarkParser.COLON - 98)) | (1 << (bitmarkParser.AMP - 98)) | (1 << (bitmarkParser.Greater - 98)) | (1 << (bitmarkParser.Less - 98)) | (1 << (bitmarkParser.RightAngle - 98)) | (1 << (bitmarkParser.RightArrow - 98)) | (1 << (bitmarkParser.DBLEQ - 98)) | (1 << (bitmarkParser.QUOTE_INDEX - 98)))) !== 0) || ((((_la - 131)) & ~0x1F) === 0 && ((1 << (_la - 131)) & ((1 << (bitmarkParser.NUMERIC - 131)) | (1 << (bitmarkParser.STRING - 131)) | (1 << (bitmarkParser.SENTENCE - 131)))) !== 0) || ((((_la - 164)) & ~0x1F) === 0 && ((1 << (_la - 164)) & ((1 << (bitmarkParser.AmpAudio - 164)) | (1 << (bitmarkParser.AmpImage - 164)) | (1 << (bitmarkParser.AmpVideo - 164)) | (1 << (bitmarkParser.AmpArticle - 164)) | (1 << (bitmarkParser.AmpDocument - 164)) | (1 << (bitmarkParser.AmpApp - 164)) | (1 << (bitmarkParser.AmpWebsite - 164)) | (1 << (bitmarkParser.AmpStillImageFilm - 164)) | (1 << (bitmarkParser.AmpAudioLink - 164)) | (1 << (bitmarkParser.AmpImageLink - 164)) | (1 << (bitmarkParser.AmpVideoLink - 164)) | (1 << (bitmarkParser.AmpArticleLink - 164)) | (1 << (bitmarkParser.AmpDocumentLink - 164)) | (1 << (bitmarkParser.AmpAppLink - 164)) | (1 << (bitmarkParser.AmpWebsiteLink - 164)) | (1 << (bitmarkParser.AmpStillImageFilmLink - 164)))) !== 0) || ((((_la - 203)) & ~0x1F) === 0 && ((1 << (_la - 203)) & ((1 << (bitmarkParser.BitmarkMinus - 203)) | (1 << (bitmarkParser.BitmarkPlus - 203)) | (1 << (bitmarkParser.URL - 203)))) !== 0));
					this.state = 590;
					this.match(bitmarkParser.CL);
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 593;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 29, this._ctx);
			} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
			this.state = 595;
			this.match(bitmarkParser.NL);
			this.state = 599;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 30, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 596;
					this.lines();
					}
					}
				}
				this.state = 601;
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
			this.state = 602;
			this.match(bitmarkParser.BitLearningPathLti);
			this.state = 603;
			this.format();
			this.state = 604;
			this.match(bitmarkParser.CL);
			this.state = 608;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === bitmarkParser.NL) {
				{
				{
				this.state = 605;
				this.match(bitmarkParser.NL);
				}
				}
				this.state = 610;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 618;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 611;
					this.bitElem();
					this.state = 615;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 32, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 612;
							this.match(bitmarkParser.NL);
							}
							}
						}
						this.state = 617;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 32, this._ctx);
					}
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 620;
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
			this.state = 622;
			this.match(bitmarkParser.BitLearningPathStep);
			this.state = 623;
			this.format();
			this.state = 624;
			this.match(bitmarkParser.CL);
			this.state = 628;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === bitmarkParser.NL) {
				{
				{
				this.state = 625;
				this.match(bitmarkParser.NL);
				}
				}
				this.state = 630;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 638;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 631;
					this.bitElem();
					this.state = 635;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 35, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 632;
							this.match(bitmarkParser.NL);
							}
							}
						}
						this.state = 637;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 35, this._ctx);
					}
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 640;
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
			this.state = 642;
			this.match(bitmarkParser.BitLearningPathBook);
			this.state = 643;
			this.format();
			this.state = 644;
			this.match(bitmarkParser.CL);
			this.state = 648;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === bitmarkParser.NL) {
				{
				{
				this.state = 645;
				this.match(bitmarkParser.NL);
				}
				}
				this.state = 650;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 658;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 651;
					this.bitElem();
					this.state = 655;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 38, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 652;
							this.match(bitmarkParser.NL);
							}
							}
						}
						this.state = 657;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 38, this._ctx);
					}
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 660;
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
			this.state = 662;
			this.match(bitmarkParser.BitLearningPathSign);
			this.state = 663;
			this.format();
			this.state = 664;
			this.match(bitmarkParser.CL);
			this.state = 668;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === bitmarkParser.NL) {
				{
				{
				this.state = 665;
				this.match(bitmarkParser.NL);
				}
				}
				this.state = 670;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 678;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 671;
					this.bitElem();
					this.state = 675;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 41, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 672;
							this.match(bitmarkParser.NL);
							}
							}
						}
						this.state = 677;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 41, this._ctx);
					}
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 680;
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
			this.state = 682;
			this.match(bitmarkParser.BitLearningPathVideoCall);
			this.state = 683;
			this.format();
			this.state = 684;
			this.match(bitmarkParser.CL);
			this.state = 688;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === bitmarkParser.NL) {
				{
				{
				this.state = 685;
				this.match(bitmarkParser.NL);
				}
				}
				this.state = 690;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 698;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 691;
					this.bitElem();
					this.state = 695;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 44, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 692;
							this.match(bitmarkParser.NL);
							}
							}
						}
						this.state = 697;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 44, this._ctx);
					}
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 700;
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
			this.state = 702;
			this.match(bitmarkParser.BitLearningPathLearningGoal);
			this.state = 703;
			this.format();
			this.state = 704;
			this.match(bitmarkParser.CL);
			this.state = 708;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === bitmarkParser.NL) {
				{
				{
				this.state = 705;
				this.match(bitmarkParser.NL);
				}
				}
				this.state = 710;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 718;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 711;
					this.bitElem();
					this.state = 715;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 47, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 712;
							this.match(bitmarkParser.NL);
							}
							}
						}
						this.state = 717;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 47, this._ctx);
					}
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 720;
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
			this.state = 722;
			this.match(bitmarkParser.BitLearningPathClosing);
			this.state = 723;
			this.format();
			this.state = 724;
			this.match(bitmarkParser.CL);
			this.state = 728;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === bitmarkParser.NL) {
				{
				{
				this.state = 725;
				this.match(bitmarkParser.NL);
				}
				}
				this.state = 730;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 738;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 731;
					this.bitElem();
					this.state = 735;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 50, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 732;
							this.match(bitmarkParser.NL);
							}
							}
						}
						this.state = 737;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 50, this._ctx);
					}
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 740;
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
			this.state = 742;
			this.match(bitmarkParser.BitLearningPathFeedback);
			this.state = 743;
			this.format();
			this.state = 744;
			this.match(bitmarkParser.CL);
			this.state = 748;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === bitmarkParser.NL) {
				{
				{
				this.state = 745;
				this.match(bitmarkParser.NL);
				}
				}
				this.state = 750;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 758;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 751;
					this.bitElem();
					this.state = 755;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 53, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 752;
							this.match(bitmarkParser.NL);
							}
							}
						}
						this.state = 757;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 53, this._ctx);
					}
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 760;
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
			this.state = 762;
			this.match(bitmarkParser.BitLearningPathBotTraining);
			this.state = 763;
			this.format();
			this.state = 764;
			this.match(bitmarkParser.CL);
			this.state = 768;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === bitmarkParser.NL) {
				{
				{
				this.state = 765;
				this.match(bitmarkParser.NL);
				}
				}
				this.state = 770;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 778;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 771;
					this.bitElem();
					this.state = 775;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 56, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 772;
							this.match(bitmarkParser.NL);
							}
							}
						}
						this.state = 777;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 56, this._ctx);
					}
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 780;
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
			this.state = 782;
			this.match(bitmarkParser.BitLearningPathExternalLink);
			this.state = 783;
			this.format();
			this.state = 784;
			this.match(bitmarkParser.CL);
			this.state = 788;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === bitmarkParser.NL) {
				{
				{
				this.state = 785;
				this.match(bitmarkParser.NL);
				}
				}
				this.state = 790;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 798;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 791;
					this.bitElem();
					this.state = 795;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 59, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 792;
							this.match(bitmarkParser.NL);
							}
							}
						}
						this.state = 797;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 59, this._ctx);
					}
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 800;
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
			this.state = 802;
			this.match(bitmarkParser.BitLearningPathClassroomTraining);
			this.state = 803;
			this.format();
			this.state = 804;
			this.match(bitmarkParser.CL);
			this.state = 808;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === bitmarkParser.NL) {
				{
				{
				this.state = 805;
				this.match(bitmarkParser.NL);
				}
				}
				this.state = 810;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 818;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 811;
					this.bitElem();
					this.state = 815;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 62, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 812;
							this.match(bitmarkParser.NL);
							}
							}
						}
						this.state = 817;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 62, this._ctx);
					}
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 820;
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
			this.state = 822;
			this.match(bitmarkParser.BitLearningPathClassroomEvent);
			this.state = 823;
			this.format();
			this.state = 824;
			this.match(bitmarkParser.CL);
			this.state = 828;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === bitmarkParser.NL) {
				{
				{
				this.state = 825;
				this.match(bitmarkParser.NL);
				}
				}
				this.state = 830;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 838;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 831;
					this.bitElem();
					this.state = 835;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 65, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 832;
							this.match(bitmarkParser.NL);
							}
							}
						}
						this.state = 837;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 65, this._ctx);
					}
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 840;
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
			this.state = 842;
			this.match(bitmarkParser.BitBotActionSend);
			this.state = 843;
			this.format();
			this.state = 844;
			this.match(bitmarkParser.CL);
			this.state = 848;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === bitmarkParser.NL) {
				{
				{
				this.state = 845;
				this.match(bitmarkParser.NL);
				}
				}
				this.state = 850;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 858;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 851;
					this.bitElem();
					this.state = 855;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 68, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 852;
							this.match(bitmarkParser.NL);
							}
							}
						}
						this.state = 857;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 68, this._ctx);
					}
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 860;
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
			this.state = 862;
			this.match(bitmarkParser.BitBotActionAnnounce);
			this.state = 863;
			this.format();
			this.state = 864;
			this.match(bitmarkParser.CL);
			this.state = 868;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === bitmarkParser.NL) {
				{
				{
				this.state = 865;
				this.match(bitmarkParser.NL);
				}
				}
				this.state = 870;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 878;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 871;
					this.bitElem();
					this.state = 875;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 71, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 872;
							this.match(bitmarkParser.NL);
							}
							}
						}
						this.state = 877;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 71, this._ctx);
					}
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 880;
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
			this.state = 882;
			this.match(bitmarkParser.BitBotActionSave);
			this.state = 883;
			this.format();
			this.state = 884;
			this.match(bitmarkParser.CL);
			this.state = 888;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === bitmarkParser.NL) {
				{
				{
				this.state = 885;
				this.match(bitmarkParser.NL);
				}
				}
				this.state = 890;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 898;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 891;
					this.bitElem();
					this.state = 895;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 74, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 892;
							this.match(bitmarkParser.NL);
							}
							}
						}
						this.state = 897;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 74, this._ctx);
					}
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 900;
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
			this.state = 902;
			this.match(bitmarkParser.BitBotActionRemind);
			this.state = 903;
			this.format();
			this.state = 904;
			this.match(bitmarkParser.CL);
			this.state = 908;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === bitmarkParser.NL) {
				{
				{
				this.state = 905;
				this.match(bitmarkParser.NL);
				}
				}
				this.state = 910;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 918;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 911;
					this.bitElem();
					this.state = 915;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 77, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 912;
							this.match(bitmarkParser.NL);
							}
							}
						}
						this.state = 917;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 77, this._ctx);
					}
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 920;
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
			this.state = 953;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 79, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 922;
				this.match(bitmarkParser.LIST_LINE);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 923;
				this.dclines();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 924;
				this.gap();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 925;
				this.reference();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 926;
				this.dateprop();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 927;
				this.progress();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 928;
				this.atdef();
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 929;
				this.dollarans();
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 930;
				this.partans();
				}
				break;

			case 10:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 931;
				this.item();
				}
				break;

			case 11:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 932;
				this.title();
				}
				break;

			case 12:
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 933;
				this.instruction();
				}
				break;

			case 13:
				this.enterOuterAlt(_localctx, 13);
				{
				this.state = 934;
				this.hint();
				}
				break;

			case 14:
				this.enterOuterAlt(_localctx, 14);
				{
				this.state = 935;
				this.s_and_w();
				}
				break;

			case 15:
				this.enterOuterAlt(_localctx, 15);
				{
				this.state = 936;
				this.example();
				}
				break;

			case 16:
				this.enterOuterAlt(_localctx, 16);
				{
				this.state = 937;
				this.bool_label();
				}
				break;

			case 17:
				this.enterOuterAlt(_localctx, 17);
				{
				this.state = 938;
				this.progress_points();
				}
				break;

			case 18:
				this.enterOuterAlt(_localctx, 18);
				{
				this.state = 939;
				this.istracked();
				}
				break;

			case 19:
				this.enterOuterAlt(_localctx, 19);
				{
				this.state = 940;
				this.isinfoonly();
				}
				break;

			case 20:
				this.enterOuterAlt(_localctx, 20);
				{
				this.state = 941;
				this.imagebit();
				}
				break;

			case 21:
				this.enterOuterAlt(_localctx, 21);
				{
				this.state = 942;
				this.audiobit();
				}
				break;

			case 22:
				this.enterOuterAlt(_localctx, 22);
				{
				this.state = 943;
				this.videobit();
				}
				break;

			case 23:
				this.enterOuterAlt(_localctx, 23);
				{
				this.state = 944;
				this.articlebit();
				}
				break;

			case 24:
				this.enterOuterAlt(_localctx, 24);
				{
				this.state = 945;
				this.documentbit();
				}
				break;

			case 25:
				this.enterOuterAlt(_localctx, 25);
				{
				this.state = 946;
				this.appbit();
				}
				break;

			case 26:
				this.enterOuterAlt(_localctx, 26);
				{
				this.state = 947;
				this.websitebit();
				}
				break;

			case 27:
				this.enterOuterAlt(_localctx, 27);
				{
				this.state = 948;
				this.stillimagefilmbit();
				}
				break;

			case 28:
				this.enterOuterAlt(_localctx, 28);
				{
				this.state = 949;
				this.angleref();
				}
				break;

			case 29:
				this.enterOuterAlt(_localctx, 29);
				{
				this.state = 950;
				this.anchor();
				}
				break;

			case 30:
				this.enterOuterAlt(_localctx, 30);
				{
				this.state = 951;
				this.bracketed_text();
				}
				break;

			case 31:
				this.enterOuterAlt(_localctx, 31);
				{
				this.state = 952;
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
			this.state = 955;
			this.single_gap();
			this.state = 963;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 81, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					this.state = 961;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case bitmarkParser.OPU:
						{
						this.state = 956;
						this.single_gap();
						}
						break;
					case bitmarkParser.OPB:
						{
						this.state = 957;
						this.instruction();
						}
						break;
					case bitmarkParser.OPQ:
						{
						this.state = 958;
						this.hint();
						}
						break;
					case bitmarkParser.OPC:
						{
						this.state = 959;
						this.item();
						}
						break;
					case bitmarkParser.AtExampleWithStr:
					case bitmarkParser.AtExamplecol:
					case bitmarkParser.AtExamplecl:
						{
						this.state = 960;
						this.example();
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					}
				}
				this.state = 965;
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
			this.state = 966;
			this.match(bitmarkParser.OPU);
			this.state = 970;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 82, this._ctx) ) {
			case 1:
				{
				this.state = 967;
				this.match(bitmarkParser.NUMERIC);
				}
				break;

			case 2:
				{
				this.state = 968;
				this.match(bitmarkParser.STRING);
				}
				break;

			case 3:
				// tslint:disable-next-line:no-empty
				{
				}
				break;
			}
			this.state = 975;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === bitmarkParser.S || ((((_la - 98)) & ~0x1F) === 0 && ((1 << (_la - 98)) & ((1 << (bitmarkParser.OPESC - 98)) | (1 << (bitmarkParser.OPS - 98)) | (1 << (bitmarkParser.COLON - 98)) | (1 << (bitmarkParser.AMP - 98)) | (1 << (bitmarkParser.Greater - 98)) | (1 << (bitmarkParser.Less - 98)) | (1 << (bitmarkParser.RightAngle - 98)) | (1 << (bitmarkParser.RightArrow - 98)) | (1 << (bitmarkParser.DBLEQ - 98)) | (1 << (bitmarkParser.QUOTE_INDEX - 98)))) !== 0) || ((((_la - 131)) & ~0x1F) === 0 && ((1 << (_la - 131)) & ((1 << (bitmarkParser.NUMERIC - 131)) | (1 << (bitmarkParser.STRING - 131)) | (1 << (bitmarkParser.SENTENCE - 131)))) !== 0) || ((((_la - 164)) & ~0x1F) === 0 && ((1 << (_la - 164)) & ((1 << (bitmarkParser.AmpAudio - 164)) | (1 << (bitmarkParser.AmpImage - 164)) | (1 << (bitmarkParser.AmpVideo - 164)) | (1 << (bitmarkParser.AmpArticle - 164)) | (1 << (bitmarkParser.AmpDocument - 164)) | (1 << (bitmarkParser.AmpApp - 164)) | (1 << (bitmarkParser.AmpWebsite - 164)) | (1 << (bitmarkParser.AmpStillImageFilm - 164)) | (1 << (bitmarkParser.AmpAudioLink - 164)) | (1 << (bitmarkParser.AmpImageLink - 164)) | (1 << (bitmarkParser.AmpVideoLink - 164)) | (1 << (bitmarkParser.AmpArticleLink - 164)) | (1 << (bitmarkParser.AmpDocumentLink - 164)) | (1 << (bitmarkParser.AmpAppLink - 164)) | (1 << (bitmarkParser.AmpWebsiteLink - 164)) | (1 << (bitmarkParser.AmpStillImageFilmLink - 164)))) !== 0) || ((((_la - 203)) & ~0x1F) === 0 && ((1 << (_la - 203)) & ((1 << (bitmarkParser.BitmarkMinus - 203)) | (1 << (bitmarkParser.BitmarkPlus - 203)) | (1 << (bitmarkParser.URL - 203)))) !== 0)) {
				{
				{
				this.state = 972;
				this.s_and_w();
				}
				}
				this.state = 977;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 978;
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
			this.state = 981;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === bitmarkParser.OPC) {
				{
				this.state = 980;
				this.item();
				}
			}

			this.state = 983;
			this.match(bitmarkParser.OPP);
			this.state = 985;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 984;
				this.s_and_w();
				}
				}
				this.state = 987;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === bitmarkParser.S || ((((_la - 98)) & ~0x1F) === 0 && ((1 << (_la - 98)) & ((1 << (bitmarkParser.OPESC - 98)) | (1 << (bitmarkParser.OPS - 98)) | (1 << (bitmarkParser.COLON - 98)) | (1 << (bitmarkParser.AMP - 98)) | (1 << (bitmarkParser.Greater - 98)) | (1 << (bitmarkParser.Less - 98)) | (1 << (bitmarkParser.RightAngle - 98)) | (1 << (bitmarkParser.RightArrow - 98)) | (1 << (bitmarkParser.DBLEQ - 98)) | (1 << (bitmarkParser.QUOTE_INDEX - 98)))) !== 0) || ((((_la - 131)) & ~0x1F) === 0 && ((1 << (_la - 131)) & ((1 << (bitmarkParser.NUMERIC - 131)) | (1 << (bitmarkParser.STRING - 131)) | (1 << (bitmarkParser.SENTENCE - 131)))) !== 0) || ((((_la - 164)) & ~0x1F) === 0 && ((1 << (_la - 164)) & ((1 << (bitmarkParser.AmpAudio - 164)) | (1 << (bitmarkParser.AmpImage - 164)) | (1 << (bitmarkParser.AmpVideo - 164)) | (1 << (bitmarkParser.AmpArticle - 164)) | (1 << (bitmarkParser.AmpDocument - 164)) | (1 << (bitmarkParser.AmpApp - 164)) | (1 << (bitmarkParser.AmpWebsite - 164)) | (1 << (bitmarkParser.AmpStillImageFilm - 164)) | (1 << (bitmarkParser.AmpAudioLink - 164)) | (1 << (bitmarkParser.AmpImageLink - 164)) | (1 << (bitmarkParser.AmpVideoLink - 164)) | (1 << (bitmarkParser.AmpArticleLink - 164)) | (1 << (bitmarkParser.AmpDocumentLink - 164)) | (1 << (bitmarkParser.AmpAppLink - 164)) | (1 << (bitmarkParser.AmpWebsiteLink - 164)) | (1 << (bitmarkParser.AmpStillImageFilmLink - 164)))) !== 0) || ((((_la - 203)) & ~0x1F) === 0 && ((1 << (_la - 203)) & ((1 << (bitmarkParser.BitmarkMinus - 203)) | (1 << (bitmarkParser.BitmarkPlus - 203)) | (1 << (bitmarkParser.URL - 203)))) !== 0));
			this.state = 989;
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
			this.state = 992;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === bitmarkParser.OPC) {
				{
				this.state = 991;
				this.item();
				}
			}

			this.state = 994;
			this.match(bitmarkParser.OPM);
			this.state = 996;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 995;
				this.s_and_w();
				}
				}
				this.state = 998;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === bitmarkParser.S || ((((_la - 98)) & ~0x1F) === 0 && ((1 << (_la - 98)) & ((1 << (bitmarkParser.OPESC - 98)) | (1 << (bitmarkParser.OPS - 98)) | (1 << (bitmarkParser.COLON - 98)) | (1 << (bitmarkParser.AMP - 98)) | (1 << (bitmarkParser.Greater - 98)) | (1 << (bitmarkParser.Less - 98)) | (1 << (bitmarkParser.RightAngle - 98)) | (1 << (bitmarkParser.RightArrow - 98)) | (1 << (bitmarkParser.DBLEQ - 98)) | (1 << (bitmarkParser.QUOTE_INDEX - 98)))) !== 0) || ((((_la - 131)) & ~0x1F) === 0 && ((1 << (_la - 131)) & ((1 << (bitmarkParser.NUMERIC - 131)) | (1 << (bitmarkParser.STRING - 131)) | (1 << (bitmarkParser.SENTENCE - 131)))) !== 0) || ((((_la - 164)) & ~0x1F) === 0 && ((1 << (_la - 164)) & ((1 << (bitmarkParser.AmpAudio - 164)) | (1 << (bitmarkParser.AmpImage - 164)) | (1 << (bitmarkParser.AmpVideo - 164)) | (1 << (bitmarkParser.AmpArticle - 164)) | (1 << (bitmarkParser.AmpDocument - 164)) | (1 << (bitmarkParser.AmpApp - 164)) | (1 << (bitmarkParser.AmpWebsite - 164)) | (1 << (bitmarkParser.AmpStillImageFilm - 164)) | (1 << (bitmarkParser.AmpAudioLink - 164)) | (1 << (bitmarkParser.AmpImageLink - 164)) | (1 << (bitmarkParser.AmpVideoLink - 164)) | (1 << (bitmarkParser.AmpArticleLink - 164)) | (1 << (bitmarkParser.AmpDocumentLink - 164)) | (1 << (bitmarkParser.AmpAppLink - 164)) | (1 << (bitmarkParser.AmpWebsiteLink - 164)) | (1 << (bitmarkParser.AmpStillImageFilmLink - 164)))) !== 0) || ((((_la - 203)) & ~0x1F) === 0 && ((1 << (_la - 203)) & ((1 << (bitmarkParser.BitmarkMinus - 203)) | (1 << (bitmarkParser.BitmarkPlus - 203)) | (1 << (bitmarkParser.URL - 203)))) !== 0));
			this.state = 1000;
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
			this.state = 1003;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === bitmarkParser.OPC) {
				{
				this.state = 1002;
				this.item();
				}
			}

			this.state = 1005;
			this.match(bitmarkParser.OPR);
			this.state = 1007;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 1006;
				this.s_and_w();
				}
				}
				this.state = 1009;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === bitmarkParser.S || ((((_la - 98)) & ~0x1F) === 0 && ((1 << (_la - 98)) & ((1 << (bitmarkParser.OPESC - 98)) | (1 << (bitmarkParser.OPS - 98)) | (1 << (bitmarkParser.COLON - 98)) | (1 << (bitmarkParser.AMP - 98)) | (1 << (bitmarkParser.Greater - 98)) | (1 << (bitmarkParser.Less - 98)) | (1 << (bitmarkParser.RightAngle - 98)) | (1 << (bitmarkParser.RightArrow - 98)) | (1 << (bitmarkParser.DBLEQ - 98)) | (1 << (bitmarkParser.QUOTE_INDEX - 98)))) !== 0) || ((((_la - 131)) & ~0x1F) === 0 && ((1 << (_la - 131)) & ((1 << (bitmarkParser.NUMERIC - 131)) | (1 << (bitmarkParser.STRING - 131)) | (1 << (bitmarkParser.SENTENCE - 131)))) !== 0) || ((((_la - 164)) & ~0x1F) === 0 && ((1 << (_la - 164)) & ((1 << (bitmarkParser.AmpAudio - 164)) | (1 << (bitmarkParser.AmpImage - 164)) | (1 << (bitmarkParser.AmpVideo - 164)) | (1 << (bitmarkParser.AmpArticle - 164)) | (1 << (bitmarkParser.AmpDocument - 164)) | (1 << (bitmarkParser.AmpApp - 164)) | (1 << (bitmarkParser.AmpWebsite - 164)) | (1 << (bitmarkParser.AmpStillImageFilm - 164)) | (1 << (bitmarkParser.AmpAudioLink - 164)) | (1 << (bitmarkParser.AmpImageLink - 164)) | (1 << (bitmarkParser.AmpVideoLink - 164)) | (1 << (bitmarkParser.AmpArticleLink - 164)) | (1 << (bitmarkParser.AmpDocumentLink - 164)) | (1 << (bitmarkParser.AmpAppLink - 164)) | (1 << (bitmarkParser.AmpWebsiteLink - 164)) | (1 << (bitmarkParser.AmpStillImageFilmLink - 164)))) !== 0) || ((((_la - 203)) & ~0x1F) === 0 && ((1 << (_la - 203)) & ((1 << (bitmarkParser.BitmarkMinus - 203)) | (1 << (bitmarkParser.BitmarkPlus - 203)) | (1 << (bitmarkParser.URL - 203)))) !== 0));
			this.state = 1011;
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
			this.state = 1013;
			this.match(bitmarkParser.BitEssay);
			this.state = 1014;
			this.format();
			this.state = 1015;
			this.match(bitmarkParser.CL);
			this.state = 1016;
			this.match(bitmarkParser.NL);
			this.state = 1026;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 91, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					{
					this.state = 1017;
					this.bitElem();
					}
					this.state = 1021;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 90, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 1018;
							this.match(bitmarkParser.NL);
							}
							}
						}
						this.state = 1023;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 90, this._ctx);
					}
					}
					}
				}
				this.state = 1028;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 91, this._ctx);
			}
			this.state = 1038;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 93, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1032;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === bitmarkParser.NL) {
						{
						{
						this.state = 1029;
						this.match(bitmarkParser.NL);
						}
						}
						this.state = 1034;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					{
					this.state = 1035;
					this.ml_example();
					}
					}
					}
				}
				this.state = 1040;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 93, this._ctx);
			}
			this.state = 1044;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 94, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1041;
					this.match(bitmarkParser.NL);
					}
					}
				}
				this.state = 1046;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 94, this._ctx);
			}
			this.state = 1060;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 97, this._ctx) ) {
			case 1:
				{
				this.state = 1047;
				this.resource();
				this.state = 1057;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 96, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 1051;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						while (_la === bitmarkParser.NL) {
							{
							{
							this.state = 1048;
							this.match(bitmarkParser.NL);
							}
							}
							this.state = 1053;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
						}
						this.state = 1054;
						this.resource();
						}
						}
					}
					this.state = 1059;
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
			this.state = 1062;
			this.match(bitmarkParser.AtExamplecol);
			this.state = 1070;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === bitmarkParser.S || ((((_la - 98)) & ~0x1F) === 0 && ((1 << (_la - 98)) & ((1 << (bitmarkParser.OPESC - 98)) | (1 << (bitmarkParser.OPS - 98)) | (1 << (bitmarkParser.COLON - 98)) | (1 << (bitmarkParser.AMP - 98)) | (1 << (bitmarkParser.Greater - 98)) | (1 << (bitmarkParser.Less - 98)) | (1 << (bitmarkParser.RightAngle - 98)) | (1 << (bitmarkParser.RightArrow - 98)) | (1 << (bitmarkParser.DBLEQ - 98)) | (1 << (bitmarkParser.QUOTE_INDEX - 98)))) !== 0) || ((((_la - 131)) & ~0x1F) === 0 && ((1 << (_la - 131)) & ((1 << (bitmarkParser.NUMERIC - 131)) | (1 << (bitmarkParser.STRING - 131)) | (1 << (bitmarkParser.NL - 131)) | (1 << (bitmarkParser.SENTENCE - 131)))) !== 0) || ((((_la - 164)) & ~0x1F) === 0 && ((1 << (_la - 164)) & ((1 << (bitmarkParser.AmpAudio - 164)) | (1 << (bitmarkParser.AmpImage - 164)) | (1 << (bitmarkParser.AmpVideo - 164)) | (1 << (bitmarkParser.AmpArticle - 164)) | (1 << (bitmarkParser.AmpDocument - 164)) | (1 << (bitmarkParser.AmpApp - 164)) | (1 << (bitmarkParser.AmpWebsite - 164)) | (1 << (bitmarkParser.AmpStillImageFilm - 164)) | (1 << (bitmarkParser.AmpAudioLink - 164)) | (1 << (bitmarkParser.AmpImageLink - 164)) | (1 << (bitmarkParser.AmpVideoLink - 164)) | (1 << (bitmarkParser.AmpArticleLink - 164)) | (1 << (bitmarkParser.AmpDocumentLink - 164)) | (1 << (bitmarkParser.AmpAppLink - 164)) | (1 << (bitmarkParser.AmpWebsiteLink - 164)) | (1 << (bitmarkParser.AmpStillImageFilmLink - 164)))) !== 0) || ((((_la - 203)) & ~0x1F) === 0 && ((1 << (_la - 203)) & ((1 << (bitmarkParser.BitmarkMinus - 203)) | (1 << (bitmarkParser.BitmarkPlus - 203)) | (1 << (bitmarkParser.URL - 203)))) !== 0)) {
				{
				this.state = 1064;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === bitmarkParser.NL) {
					{
					this.state = 1063;
					this.match(bitmarkParser.NL);
					}
				}

				this.state = 1066;
				this.lines();
				this.state = 1068;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === bitmarkParser.NL) {
					{
					this.state = 1067;
					this.match(bitmarkParser.NL);
					}
				}

				}
			}

			this.state = 1072;
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
			this.state = 1074;
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
			this.state = 1076;
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
			this.state = 1078;
			this.match(bitmarkParser.BitCorrection);
			this.state = 1079;
			this.format();
			this.state = 1080;
			this.match(bitmarkParser.CL);
			this.state = 1081;
			this.match(bitmarkParser.NL);
			this.state = 1091;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 102, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1082;
					this.bitElem();
					this.state = 1086;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 101, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 1083;
							this.match(bitmarkParser.NL);
							}
							}
						}
						this.state = 1088;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 101, this._ctx);
					}
					}
					}
				}
				this.state = 1093;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 102, this._ctx);
			}
			this.state = 1097;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === bitmarkParser.OPP || _la === bitmarkParser.OPM) {
				{
				{
				this.state = 1094;
				this.corrs();
				}
				}
				this.state = 1099;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1103;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 104, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1100;
					this.match(bitmarkParser.NL);
					}
					}
				}
				this.state = 1105;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 104, this._ctx);
			}
			this.state = 1119;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 107, this._ctx) ) {
			case 1:
				{
				this.state = 1106;
				this.resource();
				this.state = 1116;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 106, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 1110;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						while (_la === bitmarkParser.NL) {
							{
							{
							this.state = 1107;
							this.match(bitmarkParser.NL);
							}
							}
							this.state = 1112;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
						}
						this.state = 1113;
						this.resource();
						}
						}
					}
					this.state = 1118;
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
			this.state = 1139;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case bitmarkParser.OPM:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1121;
				this.match(bitmarkParser.OPM);
				this.state = 1125;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 108, this._ctx);
				while (_alt !== 1 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1 + 1) {
						{
						{
						this.state = 1122;
						this.matchWildcard();
						}
						}
					}
					this.state = 1127;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 108, this._ctx);
				}
				this.state = 1128;
				this.match(bitmarkParser.CL);
				this.state = 1129;
				this.match(bitmarkParser.NL);
				}
				break;
			case bitmarkParser.OPP:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1130;
				this.match(bitmarkParser.OPP);
				this.state = 1134;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 109, this._ctx);
				while (_alt !== 1 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1 + 1) {
						{
						{
						this.state = 1131;
						this.matchWildcard();
						}
						}
					}
					this.state = 1136;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 109, this._ctx);
				}
				this.state = 1137;
				this.match(bitmarkParser.CL);
				this.state = 1138;
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
			this.state = 1141;
			this.match(bitmarkParser.BitMark);
			this.state = 1142;
			this.format();
			this.state = 1143;
			this.match(bitmarkParser.CL);
			this.state = 1144;
			this.match(bitmarkParser.NL);
			this.state = 1157;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 113, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1147;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 111, this._ctx) ) {
					case 1:
						{
						this.state = 1145;
						this.bitElem();
						}
						break;

					case 2:
						{
						this.state = 1146;
						this.mark_text();
						}
						break;
					}
					this.state = 1152;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 112, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 1149;
							this.match(bitmarkParser.NL);
							}
							}
						}
						this.state = 1154;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 112, this._ctx);
					}
					}
					}
				}
				this.state = 1159;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 113, this._ctx);
			}
			this.state = 1163;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 114, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1160;
					this.match(bitmarkParser.NL);
					}
					}
				}
				this.state = 1165;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 114, this._ctx);
			}
			this.state = 1179;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 117, this._ctx) ) {
			case 1:
				{
				this.state = 1166;
				this.resource();
				this.state = 1176;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 116, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 1170;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						while (_la === bitmarkParser.NL) {
							{
							{
							this.state = 1167;
							this.match(bitmarkParser.NL);
							}
							}
							this.state = 1172;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
						}
						this.state = 1173;
						this.resource();
						}
						}
					}
					this.state = 1178;
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
			this.state = 1181;
			this.match(bitmarkParser.OPS);
			this.state = 1182;
			this.s_and_w();
			this.state = 1183;
			this.match(bitmarkParser.CL);
			this.state = 1185;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === bitmarkParser.OPAMARK) {
				{
				this.state = 1184;
				this.mark_color();
				}
			}

			this.state = 1192;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 120, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					this.state = 1190;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case bitmarkParser.OPQ:
						{
						this.state = 1187;
						this.hint();
						}
						break;
					case bitmarkParser.OPC:
						{
						this.state = 1188;
						this.item();
						}
						break;
					case bitmarkParser.OPB:
						{
						this.state = 1189;
						this.instruction();
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					}
				}
				this.state = 1194;
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
			this.state = 1195;
			this.match(bitmarkParser.OPAMARK);
			this.state = 1199;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === bitmarkParser.S) {
				{
				{
				this.state = 1196;
				this.match(bitmarkParser.S);
				}
				}
				this.state = 1201;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1202;
			this.match(bitmarkParser.STRING);
			this.state = 1206;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === bitmarkParser.S) {
				{
				{
				this.state = 1203;
				this.match(bitmarkParser.S);
				}
				}
				this.state = 1208;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1209;
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
			this.state = 1211;
			this.match(bitmarkParser.BitDocup);
			this.state = 1213;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 93)) & ~0x1F) === 0 && ((1 << (_la - 93)) & ((1 << (bitmarkParser.Image_type - 93)) | (1 << (bitmarkParser.Audio_type - 93)) | (1 << (bitmarkParser.Video_type - 93)))) !== 0)) {
				{
				this.state = 1212;
				_la = this._input.LA(1);
				if (!(((((_la - 93)) & ~0x1F) === 0 && ((1 << (_la - 93)) & ((1 << (bitmarkParser.Image_type - 93)) | (1 << (bitmarkParser.Audio_type - 93)) | (1 << (bitmarkParser.Video_type - 93)))) !== 0))) {
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

			this.state = 1215;
			this.match(bitmarkParser.CL);
			this.state = 1216;
			this.match(bitmarkParser.NL);
			this.state = 1226;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 125, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1217;
					this.bitElem();
					this.state = 1221;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 124, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 1218;
							this.match(bitmarkParser.NL);
							}
							}
						}
						this.state = 1223;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 124, this._ctx);
					}
					}
					}
				}
				this.state = 1228;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 125, this._ctx);
			}
			this.state = 1232;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 126, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1229;
					this.match(bitmarkParser.NL);
					}
					}
				}
				this.state = 1234;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 126, this._ctx);
			}
			this.state = 1248;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 129, this._ctx) ) {
			case 1:
				{
				this.state = 1235;
				this.resource();
				this.state = 1245;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 128, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 1239;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						while (_la === bitmarkParser.NL) {
							{
							{
							this.state = 1236;
							this.match(bitmarkParser.NL);
							}
							}
							this.state = 1241;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
						}
						this.state = 1242;
						this.resource();
						}
						}
					}
					this.state = 1247;
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
	public take_audio(): Take_audioContext {
		let _localctx: Take_audioContext = new Take_audioContext(this._ctx, this.state);
		this.enterRule(_localctx, 88, bitmarkParser.RULE_take_audio);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1250;
			this.match(bitmarkParser.BitTakeAudio);
			this.state = 1251;
			this.format();
			this.state = 1252;
			this.match(bitmarkParser.CL);
			this.state = 1253;
			this.match(bitmarkParser.NL);
			this.state = 1263;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 131, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1254;
					this.bitElem();
					this.state = 1258;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 130, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 1255;
							this.match(bitmarkParser.NL);
							}
							}
						}
						this.state = 1260;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 130, this._ctx);
					}
					}
					}
				}
				this.state = 1265;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 131, this._ctx);
			}
			this.state = 1269;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 132, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1266;
					this.match(bitmarkParser.NL);
					}
					}
				}
				this.state = 1271;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 132, this._ctx);
			}
			this.state = 1285;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 135, this._ctx) ) {
			case 1:
				{
				this.state = 1272;
				this.resource();
				this.state = 1282;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 134, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 1276;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						while (_la === bitmarkParser.NL) {
							{
							{
							this.state = 1273;
							this.match(bitmarkParser.NL);
							}
							}
							this.state = 1278;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
						}
						this.state = 1279;
						this.resource();
						}
						}
					}
					this.state = 1284;
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
	public take_picture(): Take_pictureContext {
		let _localctx: Take_pictureContext = new Take_pictureContext(this._ctx, this.state);
		this.enterRule(_localctx, 90, bitmarkParser.RULE_take_picture);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1287;
			this.match(bitmarkParser.BitTakepic);
			this.state = 1288;
			this.format();
			this.state = 1289;
			this.match(bitmarkParser.CL);
			this.state = 1290;
			this.match(bitmarkParser.NL);
			this.state = 1300;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 137, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1291;
					this.bitElem();
					this.state = 1295;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 136, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 1292;
							this.match(bitmarkParser.NL);
							}
							}
						}
						this.state = 1297;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 136, this._ctx);
					}
					}
					}
				}
				this.state = 1302;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 137, this._ctx);
			}
			this.state = 1306;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 138, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1303;
					this.match(bitmarkParser.NL);
					}
					}
				}
				this.state = 1308;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 138, this._ctx);
			}
			this.state = 1322;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 141, this._ctx) ) {
			case 1:
				{
				this.state = 1309;
				this.resource();
				this.state = 1319;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 140, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 1313;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						while (_la === bitmarkParser.NL) {
							{
							{
							this.state = 1310;
							this.match(bitmarkParser.NL);
							}
							}
							this.state = 1315;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
						}
						this.state = 1316;
						this.resource();
						}
						}
					}
					this.state = 1321;
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
	public record_audio(): Record_audioContext {
		let _localctx: Record_audioContext = new Record_audioContext(this._ctx, this.state);
		this.enterRule(_localctx, 92, bitmarkParser.RULE_record_audio);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1324;
			this.match(bitmarkParser.BitRecaud);
			this.state = 1325;
			this.format();
			this.state = 1326;
			this.match(bitmarkParser.CL);
			this.state = 1327;
			this.match(bitmarkParser.NL);
			this.state = 1337;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 143, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1328;
					this.bitElem();
					this.state = 1332;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 142, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 1329;
							this.match(bitmarkParser.NL);
							}
							}
						}
						this.state = 1334;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 142, this._ctx);
					}
					}
					}
				}
				this.state = 1339;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 143, this._ctx);
			}
			this.state = 1343;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 144, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1340;
					this.match(bitmarkParser.NL);
					}
					}
				}
				this.state = 1345;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 144, this._ctx);
			}
			this.state = 1359;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 147, this._ctx) ) {
			case 1:
				{
				this.state = 1346;
				this.resource();
				this.state = 1356;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 146, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 1350;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						while (_la === bitmarkParser.NL) {
							{
							{
							this.state = 1347;
							this.match(bitmarkParser.NL);
							}
							}
							this.state = 1352;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
						}
						this.state = 1353;
						this.resource();
						}
						}
					}
					this.state = 1358;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 146, this._ctx);
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
		this.enterRule(_localctx, 94, bitmarkParser.RULE_preparation_note);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1361;
			this.match(bitmarkParser.BitPrepnote);
			this.state = 1362;
			this.format();
			this.state = 1363;
			this.match(bitmarkParser.CL);
			this.state = 1367;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 148, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1364;
					this.match(bitmarkParser.NL);
					}
					}
				}
				this.state = 1369;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 148, this._ctx);
			}
			this.state = 1379;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 150, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1370;
					this.bitElem();
					this.state = 1374;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 149, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 1371;
							this.match(bitmarkParser.NL);
							}
							}
						}
						this.state = 1376;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 149, this._ctx);
					}
					}
					}
				}
				this.state = 1381;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 150, this._ctx);
			}
			this.state = 1383;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 151, this._ctx) ) {
			case 1:
				{
				this.state = 1382;
				this.lines();
				}
				break;
			}
			this.state = 1388;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 152, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1385;
					this.match(bitmarkParser.NL);
					}
					}
				}
				this.state = 1390;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 152, this._ctx);
			}
			this.state = 1404;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 155, this._ctx) ) {
			case 1:
				{
				this.state = 1391;
				this.resource();
				this.state = 1401;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 154, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 1395;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						while (_la === bitmarkParser.NL) {
							{
							{
							this.state = 1392;
							this.match(bitmarkParser.NL);
							}
							}
							this.state = 1397;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
						}
						this.state = 1398;
						this.resource();
						}
						}
					}
					this.state = 1403;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 154, this._ctx);
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
		this.enterRule(_localctx, 96, bitmarkParser.RULE_assignment);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1406;
			this.match(bitmarkParser.BitAssign);
			this.state = 1407;
			this.format();
			this.state = 1408;
			this.match(bitmarkParser.CL);
			this.state = 1410;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 1409;
					this.match(bitmarkParser.NL);
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 1412;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 156, this._ctx);
			} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
			this.state = 1423;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 158, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1414;
					this.bitElem();
					this.state = 1418;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 157, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 1415;
							this.match(bitmarkParser.NL);
							}
							}
						}
						this.state = 1420;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 157, this._ctx);
					}
					}
					}
				}
				this.state = 1425;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 158, this._ctx);
			}
			this.state = 1427;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 159, this._ctx) ) {
			case 1:
				{
				this.state = 1426;
				this.lines();
				}
				break;
			}
			this.state = 1432;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 160, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1429;
					this.match(bitmarkParser.NL);
					}
					}
				}
				this.state = 1434;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 160, this._ctx);
			}
			this.state = 1448;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 163, this._ctx) ) {
			case 1:
				{
				this.state = 1435;
				this.resource();
				this.state = 1445;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 162, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 1439;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						while (_la === bitmarkParser.NL) {
							{
							{
							this.state = 1436;
							this.match(bitmarkParser.NL);
							}
							}
							this.state = 1441;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
						}
						this.state = 1442;
						this.resource();
						}
						}
					}
					this.state = 1447;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 162, this._ctx);
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
		this.enterRule(_localctx, 98, bitmarkParser.RULE_article);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1450;
			this.match(bitmarkParser.BitArticle);
			this.state = 1451;
			this.format();
			this.state = 1452;
			this.match(bitmarkParser.CL);
			this.state = 1456;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === bitmarkParser.NL) {
				{
				{
				this.state = 1453;
				this.match(bitmarkParser.NL);
				}
				}
				this.state = 1458;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1466;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 1459;
					this.bitElem();
					this.state = 1463;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 165, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 1460;
							this.match(bitmarkParser.NL);
							}
							}
						}
						this.state = 1465;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 165, this._ctx);
					}
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 1468;
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
	public statement(): StatementContext {
		let _localctx: StatementContext = new StatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 100, bitmarkParser.RULE_statement);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1470;
			this.match(bitmarkParser.BitStatement);
			this.state = 1471;
			this.format();
			this.state = 1472;
			this.match(bitmarkParser.CL);
			this.state = 1476;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === bitmarkParser.NL) {
				{
				{
				this.state = 1473;
				this.match(bitmarkParser.NL);
				}
				}
				this.state = 1478;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1486;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 1479;
					this.bitElem();
					this.state = 1483;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 168, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 1480;
							this.match(bitmarkParser.NL);
							}
							}
						}
						this.state = 1485;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 168, this._ctx);
					}
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 1488;
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
	public details(): DetailsContext {
		let _localctx: DetailsContext = new DetailsContext(this._ctx, this.state);
		this.enterRule(_localctx, 102, bitmarkParser.RULE_details);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1490;
			this.match(bitmarkParser.BitDetails);
			this.state = 1491;
			this.format();
			this.state = 1492;
			this.match(bitmarkParser.CL);
			this.state = 1496;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === bitmarkParser.NL) {
				{
				{
				this.state = 1493;
				this.match(bitmarkParser.NL);
				}
				}
				this.state = 1498;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1506;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 1499;
					this.bitElem();
					this.state = 1503;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 171, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 1500;
							this.match(bitmarkParser.NL);
							}
							}
						}
						this.state = 1505;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 171, this._ctx);
					}
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 1508;
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
	public sample_solution(): Sample_solutionContext {
		let _localctx: Sample_solutionContext = new Sample_solutionContext(this._ctx, this.state);
		this.enterRule(_localctx, 104, bitmarkParser.RULE_sample_solution);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1510;
			this.match(bitmarkParser.BitSampleSolution);
			this.state = 1511;
			this.format();
			this.state = 1512;
			this.match(bitmarkParser.CL);
			this.state = 1516;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === bitmarkParser.NL) {
				{
				{
				this.state = 1513;
				this.match(bitmarkParser.NL);
				}
				}
				this.state = 1518;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1526;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 1519;
					this.bitElem();
					this.state = 1523;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 174, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 1520;
							this.match(bitmarkParser.NL);
							}
							}
						}
						this.state = 1525;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 174, this._ctx);
					}
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 1528;
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
	public buttoncopytext(): ButtoncopytextContext {
		let _localctx: ButtoncopytextContext = new ButtoncopytextContext(this._ctx, this.state);
		this.enterRule(_localctx, 106, bitmarkParser.RULE_buttoncopytext);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1530;
			this.match(bitmarkParser.BitButtonCopytext);
			this.state = 1531;
			this.format();
			this.state = 1532;
			this.match(bitmarkParser.CL);
			this.state = 1536;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === bitmarkParser.NL) {
				{
				{
				this.state = 1533;
				this.match(bitmarkParser.NL);
				}
				}
				this.state = 1538;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1546;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 1539;
					this.bitElem();
					this.state = 1543;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 177, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 1540;
							this.match(bitmarkParser.NL);
							}
							}
						}
						this.state = 1545;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 177, this._ctx);
					}
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 1548;
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
	public wbtcontinue(): WbtcontinueContext {
		let _localctx: WbtcontinueContext = new WbtcontinueContext(this._ctx, this.state);
		this.enterRule(_localctx, 108, bitmarkParser.RULE_wbtcontinue);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1550;
			this.match(bitmarkParser.BitWbtContinue);
			this.state = 1551;
			this.format();
			this.state = 1552;
			this.match(bitmarkParser.CL);
			this.state = 1556;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === bitmarkParser.NL) {
				{
				{
				this.state = 1553;
				this.match(bitmarkParser.NL);
				}
				}
				this.state = 1558;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1566;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 1559;
					this.bitElem();
					this.state = 1563;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 180, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 1560;
							this.match(bitmarkParser.NL);
							}
							}
						}
						this.state = 1565;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 180, this._ctx);
					}
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 1568;
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
	public learningpathdetails(): LearningpathdetailsContext {
		let _localctx: LearningpathdetailsContext = new LearningpathdetailsContext(this._ctx, this.state);
		this.enterRule(_localctx, 110, bitmarkParser.RULE_learningpathdetails);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1570;
			this.match(bitmarkParser.BitLearningPathDetails);
			this.state = 1571;
			this.format();
			this.state = 1572;
			this.match(bitmarkParser.CL);
			this.state = 1576;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === bitmarkParser.NL) {
				{
				{
				this.state = 1573;
				this.match(bitmarkParser.NL);
				}
				}
				this.state = 1578;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1586;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 1579;
					this.bitElem();
					this.state = 1583;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 183, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 1580;
							this.match(bitmarkParser.NL);
							}
							}
						}
						this.state = 1585;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 183, this._ctx);
					}
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 1588;
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
	public page(): PageContext {
		let _localctx: PageContext = new PageContext(this._ctx, this.state);
		this.enterRule(_localctx, 112, bitmarkParser.RULE_page);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1590;
			this.match(bitmarkParser.BitPage);
			this.state = 1591;
			this.format();
			this.state = 1592;
			this.match(bitmarkParser.CL);
			this.state = 1596;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === bitmarkParser.NL) {
				{
				{
				this.state = 1593;
				this.match(bitmarkParser.NL);
				}
				}
				this.state = 1598;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1606;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 1599;
					this.bitElem();
					this.state = 1603;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 186, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 1600;
							this.match(bitmarkParser.NL);
							}
							}
						}
						this.state = 1605;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 186, this._ctx);
					}
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 1608;
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
	public note(): NoteContext {
		let _localctx: NoteContext = new NoteContext(this._ctx, this.state);
		this.enterRule(_localctx, 114, bitmarkParser.RULE_note);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1610;
			this.match(bitmarkParser.BitNote);
			this.state = 1611;
			this.format();
			this.state = 1612;
			this.match(bitmarkParser.CL);
			this.state = 1616;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === bitmarkParser.NL) {
				{
				{
				this.state = 1613;
				this.match(bitmarkParser.NL);
				}
				}
				this.state = 1618;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1626;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 1619;
					this.bitElem();
					this.state = 1623;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 189, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 1620;
							this.match(bitmarkParser.NL);
							}
							}
						}
						this.state = 1625;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 189, this._ctx);
					}
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 1628;
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
	public info(): InfoContext {
		let _localctx: InfoContext = new InfoContext(this._ctx, this.state);
		this.enterRule(_localctx, 116, bitmarkParser.RULE_info);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1630;
			this.match(bitmarkParser.BitInfo);
			this.state = 1631;
			this.format();
			this.state = 1632;
			this.match(bitmarkParser.CL);
			this.state = 1636;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === bitmarkParser.NL) {
				{
				{
				this.state = 1633;
				this.match(bitmarkParser.NL);
				}
				}
				this.state = 1638;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1646;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 1639;
					this.bitElem();
					this.state = 1643;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 192, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 1640;
							this.match(bitmarkParser.NL);
							}
							}
						}
						this.state = 1645;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 192, this._ctx);
					}
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 1648;
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
	public warning(): WarningContext {
		let _localctx: WarningContext = new WarningContext(this._ctx, this.state);
		this.enterRule(_localctx, 118, bitmarkParser.RULE_warning);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1650;
			this.match(bitmarkParser.BitWarning);
			this.state = 1651;
			this.format();
			this.state = 1652;
			this.match(bitmarkParser.CL);
			this.state = 1656;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === bitmarkParser.NL) {
				{
				{
				this.state = 1653;
				this.match(bitmarkParser.NL);
				}
				}
				this.state = 1658;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1666;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 1659;
					this.bitElem();
					this.state = 1663;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 195, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 1660;
							this.match(bitmarkParser.NL);
							}
							}
						}
						this.state = 1665;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 195, this._ctx);
					}
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 1668;
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
	public remark(): RemarkContext {
		let _localctx: RemarkContext = new RemarkContext(this._ctx, this.state);
		this.enterRule(_localctx, 120, bitmarkParser.RULE_remark);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1670;
			this.match(bitmarkParser.BitRemark);
			this.state = 1671;
			this.format();
			this.state = 1672;
			this.match(bitmarkParser.CL);
			this.state = 1676;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === bitmarkParser.NL) {
				{
				{
				this.state = 1673;
				this.match(bitmarkParser.NL);
				}
				}
				this.state = 1678;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1686;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 1679;
					this.bitElem();
					this.state = 1683;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 198, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 1680;
							this.match(bitmarkParser.NL);
							}
							}
						}
						this.state = 1685;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 198, this._ctx);
					}
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 1688;
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
	public help(): HelpContext {
		let _localctx: HelpContext = new HelpContext(this._ctx, this.state);
		this.enterRule(_localctx, 122, bitmarkParser.RULE_help);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1690;
			this.match(bitmarkParser.BitHelp);
			this.state = 1691;
			this.format();
			this.state = 1692;
			this.match(bitmarkParser.CL);
			this.state = 1696;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === bitmarkParser.NL) {
				{
				{
				this.state = 1693;
				this.match(bitmarkParser.NL);
				}
				}
				this.state = 1698;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1706;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 1699;
					this.bitElem();
					this.state = 1703;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 201, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 1700;
							this.match(bitmarkParser.NL);
							}
							}
						}
						this.state = 1705;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 201, this._ctx);
					}
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 1708;
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
	public danger(): DangerContext {
		let _localctx: DangerContext = new DangerContext(this._ctx, this.state);
		this.enterRule(_localctx, 124, bitmarkParser.RULE_danger);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1710;
			this.match(bitmarkParser.BitDanger);
			this.state = 1711;
			this.format();
			this.state = 1712;
			this.match(bitmarkParser.CL);
			this.state = 1716;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === bitmarkParser.NL) {
				{
				{
				this.state = 1713;
				this.match(bitmarkParser.NL);
				}
				}
				this.state = 1718;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1726;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 1719;
					this.bitElem();
					this.state = 1723;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 204, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 1720;
							this.match(bitmarkParser.NL);
							}
							}
						}
						this.state = 1725;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 204, this._ctx);
					}
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 1728;
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
	public bug(): BugContext {
		let _localctx: BugContext = new BugContext(this._ctx, this.state);
		this.enterRule(_localctx, 126, bitmarkParser.RULE_bug);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1730;
			this.match(bitmarkParser.BitBug);
			this.state = 1731;
			this.format();
			this.state = 1732;
			this.match(bitmarkParser.CL);
			this.state = 1736;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === bitmarkParser.NL) {
				{
				{
				this.state = 1733;
				this.match(bitmarkParser.NL);
				}
				}
				this.state = 1738;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1746;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 1739;
					this.bitElem();
					this.state = 1743;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 207, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 1740;
							this.match(bitmarkParser.NL);
							}
							}
						}
						this.state = 1745;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 207, this._ctx);
					}
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 1748;
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
	public sidenote(): SidenoteContext {
		let _localctx: SidenoteContext = new SidenoteContext(this._ctx, this.state);
		this.enterRule(_localctx, 128, bitmarkParser.RULE_sidenote);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1750;
			this.match(bitmarkParser.BitSidenote);
			this.state = 1751;
			this.format();
			this.state = 1752;
			this.match(bitmarkParser.CL);
			this.state = 1756;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === bitmarkParser.NL) {
				{
				{
				this.state = 1753;
				this.match(bitmarkParser.NL);
				}
				}
				this.state = 1758;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1766;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 1759;
					this.bitElem();
					this.state = 1763;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 210, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 1760;
							this.match(bitmarkParser.NL);
							}
							}
						}
						this.state = 1765;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 210, this._ctx);
					}
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 1768;
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
	public stickynote(): StickynoteContext {
		let _localctx: StickynoteContext = new StickynoteContext(this._ctx, this.state);
		this.enterRule(_localctx, 130, bitmarkParser.RULE_stickynote);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1770;
			this.match(bitmarkParser.BitStickynote);
			this.state = 1771;
			this.format();
			this.state = 1772;
			this.match(bitmarkParser.CL);
			this.state = 1776;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === bitmarkParser.NL) {
				{
				{
				this.state = 1773;
				this.match(bitmarkParser.NL);
				}
				}
				this.state = 1778;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1786;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 1779;
					this.bitElem();
					this.state = 1783;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 213, this._ctx);
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
						_alt = this.interpreter.adaptivePredict(this._input, 213, this._ctx);
					}
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 1788;
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
	public quote(): QuoteContext {
		let _localctx: QuoteContext = new QuoteContext(this._ctx, this.state);
		this.enterRule(_localctx, 132, bitmarkParser.RULE_quote);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1790;
			this.match(bitmarkParser.BitQuote);
			this.state = 1791;
			this.format();
			this.state = 1792;
			this.match(bitmarkParser.CL);
			this.state = 1796;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === bitmarkParser.NL) {
				{
				{
				this.state = 1793;
				this.match(bitmarkParser.NL);
				}
				}
				this.state = 1798;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1806;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 1799;
					this.bitElem();
					this.state = 1803;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 216, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 1800;
							this.match(bitmarkParser.NL);
							}
							}
						}
						this.state = 1805;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 216, this._ctx);
					}
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 1808;
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
	public footnote(): FootnoteContext {
		let _localctx: FootnoteContext = new FootnoteContext(this._ctx, this.state);
		this.enterRule(_localctx, 134, bitmarkParser.RULE_footnote);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1810;
			this.match(bitmarkParser.BitFootnote);
			this.state = 1811;
			this.format();
			this.state = 1812;
			this.match(bitmarkParser.CL);
			this.state = 1816;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === bitmarkParser.NL) {
				{
				{
				this.state = 1813;
				this.match(bitmarkParser.NL);
				}
				}
				this.state = 1818;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1826;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 1819;
					this.bitElem();
					this.state = 1823;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 219, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 1820;
							this.match(bitmarkParser.NL);
							}
							}
						}
						this.state = 1825;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 219, this._ctx);
					}
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 1828;
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
	public hintbit(): HintbitContext {
		let _localctx: HintbitContext = new HintbitContext(this._ctx, this.state);
		this.enterRule(_localctx, 136, bitmarkParser.RULE_hintbit);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1830;
			this.match(bitmarkParser.BitHint);
			this.state = 1831;
			this.format();
			this.state = 1832;
			this.match(bitmarkParser.CL);
			this.state = 1836;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === bitmarkParser.NL) {
				{
				{
				this.state = 1833;
				this.match(bitmarkParser.NL);
				}
				}
				this.state = 1838;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1846;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 1839;
					this.bitElem();
					this.state = 1843;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 222, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 1840;
							this.match(bitmarkParser.NL);
							}
							}
						}
						this.state = 1845;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 222, this._ctx);
					}
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 1848;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 223, this._ctx);
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
		this.enterRule(_localctx, 138, bitmarkParser.RULE_examplebit);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1850;
			this.match(bitmarkParser.BitExample);
			this.state = 1851;
			this.format();
			this.state = 1852;
			this.match(bitmarkParser.CL);
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
			this.state = 1866;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 1859;
					this.bitElem();
					this.state = 1863;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 225, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 1860;
							this.match(bitmarkParser.NL);
							}
							}
						}
						this.state = 1865;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 225, this._ctx);
					}
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 1868;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 226, this._ctx);
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
	public vendor_padlet_embed(): Vendor_padlet_embedContext {
		let _localctx: Vendor_padlet_embedContext = new Vendor_padlet_embedContext(this._ctx, this.state);
		this.enterRule(_localctx, 140, bitmarkParser.RULE_vendor_padlet_embed);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1870;
			this.match(bitmarkParser.BitVendorPadletEmbed);
			this.state = 1871;
			this.format();
			this.state = 1872;
			this.match(bitmarkParser.CL);
			this.state = 1876;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === bitmarkParser.NL) {
				{
				{
				this.state = 1873;
				this.match(bitmarkParser.NL);
				}
				}
				this.state = 1878;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1886;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 1879;
					this.bitElem();
					this.state = 1883;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 228, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 1880;
							this.match(bitmarkParser.NL);
							}
							}
						}
						this.state = 1885;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 228, this._ctx);
					}
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 1888;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 229, this._ctx);
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
	public scorm(): ScormContext {
		let _localctx: ScormContext = new ScormContext(this._ctx, this.state);
		this.enterRule(_localctx, 142, bitmarkParser.RULE_scorm);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1890;
			this.match(bitmarkParser.BitScorm);
			this.state = 1891;
			this.format();
			this.state = 1892;
			this.match(bitmarkParser.CL);
			this.state = 1896;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === bitmarkParser.NL) {
				{
				{
				this.state = 1893;
				this.match(bitmarkParser.NL);
				}
				}
				this.state = 1898;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1906;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 1899;
					this.bitElem();
					this.state = 1903;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 231, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 1900;
							this.match(bitmarkParser.NL);
							}
							}
						}
						this.state = 1905;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 231, this._ctx);
					}
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 1908;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 232, this._ctx);
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
	public bit_image(): Bit_imageContext {
		let _localctx: Bit_imageContext = new Bit_imageContext(this._ctx, this.state);
		this.enterRule(_localctx, 144, bitmarkParser.RULE_bit_image);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1910;
			this.match(bitmarkParser.BitImage);
			this.state = 1911;
			this.format2();
			this.state = 1912;
			this.match(bitmarkParser.CL);
			this.state = 1916;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === bitmarkParser.NL) {
				{
				{
				this.state = 1913;
				this.match(bitmarkParser.NL);
				}
				}
				this.state = 1918;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1926;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 1919;
					this.bitElem();
					this.state = 1923;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 234, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 1920;
							this.match(bitmarkParser.NL);
							}
							}
						}
						this.state = 1925;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 234, this._ctx);
					}
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 1928;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 235, this._ctx);
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
	public bit_imageLink(): Bit_imageLinkContext {
		let _localctx: Bit_imageLinkContext = new Bit_imageLinkContext(this._ctx, this.state);
		this.enterRule(_localctx, 146, bitmarkParser.RULE_bit_imageLink);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1930;
			this.match(bitmarkParser.BitImageLink);
			this.state = 1931;
			this.format2();
			this.state = 1932;
			this.match(bitmarkParser.CL);
			this.state = 1936;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === bitmarkParser.NL) {
				{
				{
				this.state = 1933;
				this.match(bitmarkParser.NL);
				}
				}
				this.state = 1938;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1946;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 1939;
					this.bitElem();
					this.state = 1943;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 237, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 1940;
							this.match(bitmarkParser.NL);
							}
							}
						}
						this.state = 1945;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 237, this._ctx);
					}
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 1948;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 238, this._ctx);
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
	public bit_imageZoom(): Bit_imageZoomContext {
		let _localctx: Bit_imageZoomContext = new Bit_imageZoomContext(this._ctx, this.state);
		this.enterRule(_localctx, 148, bitmarkParser.RULE_bit_imageZoom);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1950;
			this.match(bitmarkParser.BitImageZoom);
			this.state = 1951;
			this.format2();
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
			this.state = 1966;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 1959;
					this.bitElem();
					this.state = 1963;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 240, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 1960;
							this.match(bitmarkParser.NL);
							}
							}
						}
						this.state = 1965;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 240, this._ctx);
					}
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 1968;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 241, this._ctx);
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
	public bit_audio(): Bit_audioContext {
		let _localctx: Bit_audioContext = new Bit_audioContext(this._ctx, this.state);
		this.enterRule(_localctx, 150, bitmarkParser.RULE_bit_audio);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1970;
			this.match(bitmarkParser.BitAudio);
			this.state = 1971;
			this.format2();
			this.state = 1972;
			this.match(bitmarkParser.CL);
			this.state = 1976;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === bitmarkParser.NL) {
				{
				{
				this.state = 1973;
				this.match(bitmarkParser.NL);
				}
				}
				this.state = 1978;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1986;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 1979;
					this.bitElem();
					this.state = 1983;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 243, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 1980;
							this.match(bitmarkParser.NL);
							}
							}
						}
						this.state = 1985;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 243, this._ctx);
					}
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 1988;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 244, this._ctx);
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
	public bit_audioLink(): Bit_audioLinkContext {
		let _localctx: Bit_audioLinkContext = new Bit_audioLinkContext(this._ctx, this.state);
		this.enterRule(_localctx, 152, bitmarkParser.RULE_bit_audioLink);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1990;
			this.match(bitmarkParser.BitAudioLink);
			this.state = 1991;
			this.format2();
			this.state = 1992;
			this.match(bitmarkParser.CL);
			this.state = 1996;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === bitmarkParser.NL) {
				{
				{
				this.state = 1993;
				this.match(bitmarkParser.NL);
				}
				}
				this.state = 1998;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 2006;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 1999;
					this.bitElem();
					this.state = 2003;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 246, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 2000;
							this.match(bitmarkParser.NL);
							}
							}
						}
						this.state = 2005;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 246, this._ctx);
					}
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 2008;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 247, this._ctx);
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
	public bit_audioEmbed(): Bit_audioEmbedContext {
		let _localctx: Bit_audioEmbedContext = new Bit_audioEmbedContext(this._ctx, this.state);
		this.enterRule(_localctx, 154, bitmarkParser.RULE_bit_audioEmbed);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2010;
			this.match(bitmarkParser.BitAudioEmbed);
			this.state = 2011;
			this.format2();
			this.state = 2012;
			this.match(bitmarkParser.CL);
			this.state = 2016;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === bitmarkParser.NL) {
				{
				{
				this.state = 2013;
				this.match(bitmarkParser.NL);
				}
				}
				this.state = 2018;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 2026;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 2019;
					this.bitElem();
					this.state = 2023;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 249, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 2020;
							this.match(bitmarkParser.NL);
							}
							}
						}
						this.state = 2025;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 249, this._ctx);
					}
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 2028;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 250, this._ctx);
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
	public bit_video(): Bit_videoContext {
		let _localctx: Bit_videoContext = new Bit_videoContext(this._ctx, this.state);
		this.enterRule(_localctx, 156, bitmarkParser.RULE_bit_video);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2030;
			this.match(bitmarkParser.BitVideo);
			this.state = 2031;
			this.format2();
			this.state = 2032;
			this.match(bitmarkParser.CL);
			this.state = 2036;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === bitmarkParser.NL) {
				{
				{
				this.state = 2033;
				this.match(bitmarkParser.NL);
				}
				}
				this.state = 2038;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 2046;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 2039;
					this.bitElem();
					this.state = 2043;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 252, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 2040;
							this.match(bitmarkParser.NL);
							}
							}
						}
						this.state = 2045;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 252, this._ctx);
					}
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 2048;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 253, this._ctx);
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
	public bit_videoLink(): Bit_videoLinkContext {
		let _localctx: Bit_videoLinkContext = new Bit_videoLinkContext(this._ctx, this.state);
		this.enterRule(_localctx, 158, bitmarkParser.RULE_bit_videoLink);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2050;
			this.match(bitmarkParser.BitVideoLink);
			this.state = 2051;
			this.format2();
			this.state = 2052;
			this.match(bitmarkParser.CL);
			this.state = 2056;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === bitmarkParser.NL) {
				{
				{
				this.state = 2053;
				this.match(bitmarkParser.NL);
				}
				}
				this.state = 2058;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 2066;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 2059;
					this.bitElem();
					this.state = 2063;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 255, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 2060;
							this.match(bitmarkParser.NL);
							}
							}
						}
						this.state = 2065;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 255, this._ctx);
					}
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 2068;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 256, this._ctx);
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
	public bit_videoEmbed(): Bit_videoEmbedContext {
		let _localctx: Bit_videoEmbedContext = new Bit_videoEmbedContext(this._ctx, this.state);
		this.enterRule(_localctx, 160, bitmarkParser.RULE_bit_videoEmbed);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2070;
			this.match(bitmarkParser.BitVideoEmbed);
			this.state = 2071;
			this.format2();
			this.state = 2072;
			this.match(bitmarkParser.CL);
			this.state = 2076;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === bitmarkParser.NL) {
				{
				{
				this.state = 2073;
				this.match(bitmarkParser.NL);
				}
				}
				this.state = 2078;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 2086;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 2079;
					this.bitElem();
					this.state = 2083;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 258, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 2080;
							this.match(bitmarkParser.NL);
							}
							}
						}
						this.state = 2085;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 258, this._ctx);
					}
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 2088;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 259, this._ctx);
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
	public bit_stillImageFilm(): Bit_stillImageFilmContext {
		let _localctx: Bit_stillImageFilmContext = new Bit_stillImageFilmContext(this._ctx, this.state);
		this.enterRule(_localctx, 162, bitmarkParser.RULE_bit_stillImageFilm);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2090;
			this.match(bitmarkParser.BitStillImageFilm);
			this.state = 2091;
			this.format2();
			this.state = 2092;
			this.match(bitmarkParser.CL);
			this.state = 2096;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === bitmarkParser.NL) {
				{
				{
				this.state = 2093;
				this.match(bitmarkParser.NL);
				}
				}
				this.state = 2098;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 2106;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 2099;
					this.bitElem();
					this.state = 2103;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 261, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 2100;
							this.match(bitmarkParser.NL);
							}
							}
						}
						this.state = 2105;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 261, this._ctx);
					}
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 2108;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 262, this._ctx);
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
	public bit_stillImageFilmLink(): Bit_stillImageFilmLinkContext {
		let _localctx: Bit_stillImageFilmLinkContext = new Bit_stillImageFilmLinkContext(this._ctx, this.state);
		this.enterRule(_localctx, 164, bitmarkParser.RULE_bit_stillImageFilmLink);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2110;
			this.match(bitmarkParser.BitStillImageFilmLink);
			this.state = 2111;
			this.format2();
			this.state = 2112;
			this.match(bitmarkParser.CL);
			this.state = 2116;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === bitmarkParser.NL) {
				{
				{
				this.state = 2113;
				this.match(bitmarkParser.NL);
				}
				}
				this.state = 2118;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 2126;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 2119;
					this.bitElem();
					this.state = 2123;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 264, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 2120;
							this.match(bitmarkParser.NL);
							}
							}
						}
						this.state = 2125;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 264, this._ctx);
					}
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 2128;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 265, this._ctx);
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
	public bit_stillImageFilmEmbed(): Bit_stillImageFilmEmbedContext {
		let _localctx: Bit_stillImageFilmEmbedContext = new Bit_stillImageFilmEmbedContext(this._ctx, this.state);
		this.enterRule(_localctx, 166, bitmarkParser.RULE_bit_stillImageFilmEmbed);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2130;
			this.match(bitmarkParser.BitStillImageFilmEmbed);
			this.state = 2131;
			this.format2();
			this.state = 2132;
			this.match(bitmarkParser.CL);
			this.state = 2136;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === bitmarkParser.NL) {
				{
				{
				this.state = 2133;
				this.match(bitmarkParser.NL);
				}
				}
				this.state = 2138;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 2146;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 2139;
					this.bitElem();
					this.state = 2143;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 267, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 2140;
							this.match(bitmarkParser.NL);
							}
							}
						}
						this.state = 2145;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 267, this._ctx);
					}
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 2148;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 268, this._ctx);
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
	public bit_websiteLink(): Bit_websiteLinkContext {
		let _localctx: Bit_websiteLinkContext = new Bit_websiteLinkContext(this._ctx, this.state);
		this.enterRule(_localctx, 168, bitmarkParser.RULE_bit_websiteLink);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2150;
			this.match(bitmarkParser.BitWebsiteLink);
			this.state = 2151;
			this.format2();
			this.state = 2152;
			this.match(bitmarkParser.CL);
			this.state = 2156;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === bitmarkParser.NL) {
				{
				{
				this.state = 2153;
				this.match(bitmarkParser.NL);
				}
				}
				this.state = 2158;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 2166;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 2159;
					this.bitElem();
					this.state = 2163;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 270, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 2160;
							this.match(bitmarkParser.NL);
							}
							}
						}
						this.state = 2165;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 270, this._ctx);
					}
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 2168;
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
	public bit_document(): Bit_documentContext {
		let _localctx: Bit_documentContext = new Bit_documentContext(this._ctx, this.state);
		this.enterRule(_localctx, 170, bitmarkParser.RULE_bit_document);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2170;
			this.match(bitmarkParser.BitDocument);
			this.state = 2171;
			this.format2();
			this.state = 2172;
			this.match(bitmarkParser.CL);
			this.state = 2176;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === bitmarkParser.NL) {
				{
				{
				this.state = 2173;
				this.match(bitmarkParser.NL);
				}
				}
				this.state = 2178;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 2186;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 2179;
					this.bitElem();
					this.state = 2183;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 273, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 2180;
							this.match(bitmarkParser.NL);
							}
							}
						}
						this.state = 2185;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 273, this._ctx);
					}
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 2188;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 274, this._ctx);
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
	public bit_documentLink(): Bit_documentLinkContext {
		let _localctx: Bit_documentLinkContext = new Bit_documentLinkContext(this._ctx, this.state);
		this.enterRule(_localctx, 172, bitmarkParser.RULE_bit_documentLink);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2190;
			this.match(bitmarkParser.BitDocumentLink);
			this.state = 2191;
			this.format2();
			this.state = 2192;
			this.match(bitmarkParser.CL);
			this.state = 2196;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === bitmarkParser.NL) {
				{
				{
				this.state = 2193;
				this.match(bitmarkParser.NL);
				}
				}
				this.state = 2198;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 2206;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 2199;
					this.bitElem();
					this.state = 2203;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 276, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 2200;
							this.match(bitmarkParser.NL);
							}
							}
						}
						this.state = 2205;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 276, this._ctx);
					}
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 2208;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 277, this._ctx);
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
	public bit_documentEmbed(): Bit_documentEmbedContext {
		let _localctx: Bit_documentEmbedContext = new Bit_documentEmbedContext(this._ctx, this.state);
		this.enterRule(_localctx, 174, bitmarkParser.RULE_bit_documentEmbed);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2210;
			this.match(bitmarkParser.BitDocumentEmbed);
			this.state = 2211;
			this.format2();
			this.state = 2212;
			this.match(bitmarkParser.CL);
			this.state = 2216;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === bitmarkParser.NL) {
				{
				{
				this.state = 2213;
				this.match(bitmarkParser.NL);
				}
				}
				this.state = 2218;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 2226;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 2219;
					this.bitElem();
					this.state = 2223;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 279, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 2220;
							this.match(bitmarkParser.NL);
							}
							}
						}
						this.state = 2225;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 279, this._ctx);
					}
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 2228;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 280, this._ctx);
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
	public bit_documentDownload(): Bit_documentDownloadContext {
		let _localctx: Bit_documentDownloadContext = new Bit_documentDownloadContext(this._ctx, this.state);
		this.enterRule(_localctx, 176, bitmarkParser.RULE_bit_documentDownload);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2230;
			this.match(bitmarkParser.BitDocumentDownload);
			this.state = 2231;
			this.format2();
			this.state = 2232;
			this.match(bitmarkParser.CL);
			this.state = 2236;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === bitmarkParser.NL) {
				{
				{
				this.state = 2233;
				this.match(bitmarkParser.NL);
				}
				}
				this.state = 2238;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 2246;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 2239;
					this.bitElem();
					this.state = 2243;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 282, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 2240;
							this.match(bitmarkParser.NL);
							}
							}
						}
						this.state = 2245;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 282, this._ctx);
					}
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 2248;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 283, this._ctx);
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
	public bit_appLink(): Bit_appLinkContext {
		let _localctx: Bit_appLinkContext = new Bit_appLinkContext(this._ctx, this.state);
		this.enterRule(_localctx, 178, bitmarkParser.RULE_bit_appLink);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2250;
			this.match(bitmarkParser.BitAppLink);
			this.state = 2251;
			this.format2();
			this.state = 2252;
			this.match(bitmarkParser.CL);
			this.state = 2256;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === bitmarkParser.NL) {
				{
				{
				this.state = 2253;
				this.match(bitmarkParser.NL);
				}
				}
				this.state = 2258;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 2266;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 2259;
					this.bitElem();
					this.state = 2263;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 285, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 2260;
							this.match(bitmarkParser.NL);
							}
							}
						}
						this.state = 2265;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 285, this._ctx);
					}
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 2268;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 286, this._ctx);
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
	public bit_editorial(): Bit_editorialContext {
		let _localctx: Bit_editorialContext = new Bit_editorialContext(this._ctx, this.state);
		this.enterRule(_localctx, 180, bitmarkParser.RULE_bit_editorial);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2270;
			this.match(bitmarkParser.BitEditorial);
			this.state = 2271;
			this.format2();
			this.state = 2272;
			this.match(bitmarkParser.CL);
			this.state = 2276;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === bitmarkParser.NL) {
				{
				{
				this.state = 2273;
				this.match(bitmarkParser.NL);
				}
				}
				this.state = 2278;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 2286;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 2279;
					this.bitElem();
					this.state = 2283;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 288, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 2280;
							this.match(bitmarkParser.NL);
							}
							}
						}
						this.state = 2285;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 288, this._ctx);
					}
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 2288;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 289, this._ctx);
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
		this.enterRule(_localctx, 182, bitmarkParser.RULE_message);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2290;
			this.match(bitmarkParser.BitMessage);
			this.state = 2291;
			this.format();
			this.state = 2292;
			this.match(bitmarkParser.CL);
			this.state = 2296;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === bitmarkParser.NL) {
				{
				{
				this.state = 2293;
				this.match(bitmarkParser.NL);
				}
				}
				this.state = 2298;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 2306;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 2299;
					this.bitElem();
					this.state = 2303;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 291, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 2300;
							this.match(bitmarkParser.NL);
							}
							}
						}
						this.state = 2305;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 291, this._ctx);
					}
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 2308;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 292, this._ctx);
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
		this.enterRule(_localctx, 184, bitmarkParser.RULE_bot_interview);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2310;
			this.match(bitmarkParser.BitBotint);
			this.state = 2311;
			this.format();
			this.state = 2312;
			this.match(bitmarkParser.CL);
			this.state = 2323;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 2313;
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
					this.state = 2314;
					this.bot_choice();
					this.state = 2320;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === bitmarkParser.SSPL || _la === bitmarkParser.SSPL2) {
						{
						{
						this.state = 2315;
						this.sspl();
						this.state = 2316;
						this.bot_choice();
						}
						}
						this.state = 2322;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 2325;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 294, this._ctx);
			} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
			this.state = 2327;
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
			this.state = 2331;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 295, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 2328;
					this.match(bitmarkParser.NL);
					}
					}
				}
				this.state = 2333;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 295, this._ctx);
			}
			this.state = 2347;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 298, this._ctx) ) {
			case 1:
				{
				this.state = 2334;
				this.resource();
				this.state = 2344;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 297, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 2338;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						while (_la === bitmarkParser.NL) {
							{
							{
							this.state = 2335;
							this.match(bitmarkParser.NL);
							}
							}
							this.state = 2340;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
						}
						this.state = 2341;
						this.resource();
						}
						}
					}
					this.state = 2346;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 297, this._ctx);
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
		this.enterRule(_localctx, 186, bitmarkParser.RULE_bot_choice);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2356;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				this.state = 2356;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 299, this._ctx) ) {
				case 1:
					{
					this.state = 2349;
					this.words();
					}
					break;

				case 2:
					{
					this.state = 2350;
					this.instruction();
					}
					break;

				case 3:
					{
					this.state = 2351;
					this.audiobit();
					}
					break;

				case 4:
					{
					this.state = 2352;
					this.gap();
					}
					break;

				case 5:
					{
					this.state = 2353;
					this.choice_plus();
					}
					break;

				case 6:
					{
					this.state = 2354;
					this.choice_minus();
					}
					break;

				case 7:
					{
					this.state = 2355;
					this.choice_star();
					}
					break;
				}
				}
				this.state = 2358;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (((((_la - 102)) & ~0x1F) === 0 && ((1 << (_la - 102)) & ((1 << (bitmarkParser.OPU - 102)) | (1 << (bitmarkParser.OPB - 102)) | (1 << (bitmarkParser.OPP - 102)) | (1 << (bitmarkParser.OPM - 102)) | (1 << (bitmarkParser.OPR - 102)) | (1 << (bitmarkParser.OPC - 102)) | (1 << (bitmarkParser.AMP - 102)) | (1 << (bitmarkParser.Greater - 102)) | (1 << (bitmarkParser.Less - 102)) | (1 << (bitmarkParser.RightAngle - 102)) | (1 << (bitmarkParser.RightArrow - 102)) | (1 << (bitmarkParser.QUOTE_INDEX - 102)))) !== 0) || ((((_la - 134)) & ~0x1F) === 0 && ((1 << (_la - 134)) & ((1 << (bitmarkParser.SENTENCE - 134)) | (1 << (bitmarkParser.AmpAudio - 134)) | (1 << (bitmarkParser.AmpImage - 134)))) !== 0) || ((((_la - 168)) & ~0x1F) === 0 && ((1 << (_la - 168)) & ((1 << (bitmarkParser.AmpVideo - 168)) | (1 << (bitmarkParser.AmpArticle - 168)) | (1 << (bitmarkParser.AmpDocument - 168)) | (1 << (bitmarkParser.AmpApp - 168)) | (1 << (bitmarkParser.AmpWebsite - 168)) | (1 << (bitmarkParser.AmpStillImageFilm - 168)) | (1 << (bitmarkParser.OpAmpAudio - 168)) | (1 << (bitmarkParser.AmpAudioLink - 168)) | (1 << (bitmarkParser.AmpImageLink - 168)) | (1 << (bitmarkParser.AmpVideoLink - 168)) | (1 << (bitmarkParser.AmpArticleLink - 168)) | (1 << (bitmarkParser.AmpDocumentLink - 168)) | (1 << (bitmarkParser.AmpAppLink - 168)) | (1 << (bitmarkParser.AmpWebsiteLink - 168)) | (1 << (bitmarkParser.AmpStillImageFilmLink - 168)) | (1 << (bitmarkParser.OpAmpAudioLink - 168)))) !== 0) || _la === bitmarkParser.BitmarkMinus || _la === bitmarkParser.BitmarkPlus);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 188, bitmarkParser.RULE_rating);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2360;
			this.match(bitmarkParser.BitRating);
			this.state = 2361;
			this.format();
			this.state = 2362;
			this.match(bitmarkParser.CL);
			this.state = 2366;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === bitmarkParser.NL) {
				{
				{
				this.state = 2363;
				this.match(bitmarkParser.NL);
				}
				}
				this.state = 2368;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 2378;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === bitmarkParser.S || ((((_la - 96)) & ~0x1F) === 0 && ((1 << (_la - 96)) & ((1 << (bitmarkParser.OPDOLL - 96)) | (1 << (bitmarkParser.OPESC - 96)) | (1 << (bitmarkParser.OPRANGLES - 96)) | (1 << (bitmarkParser.OPRANGLEL - 96)) | (1 << (bitmarkParser.OPDANGLE - 96)) | (1 << (bitmarkParser.OPU - 96)) | (1 << (bitmarkParser.OPB - 96)) | (1 << (bitmarkParser.OPQ - 96)) | (1 << (bitmarkParser.OPA - 96)) | (1 << (bitmarkParser.OPS - 96)) | (1 << (bitmarkParser.OPHASH - 96)) | (1 << (bitmarkParser.OPC - 96)) | (1 << (bitmarkParser.COLON - 96)) | (1 << (bitmarkParser.AMP - 96)) | (1 << (bitmarkParser.Greater - 96)) | (1 << (bitmarkParser.Less - 96)) | (1 << (bitmarkParser.RightAngle - 96)) | (1 << (bitmarkParser.RightArrow - 96)) | (1 << (bitmarkParser.DBLEQ - 96)) | (1 << (bitmarkParser.QUOTE_INDEX - 96)))) !== 0) || ((((_la - 128)) & ~0x1F) === 0 && ((1 << (_la - 128)) & ((1 << (bitmarkParser.DCANY - 128)) | (1 << (bitmarkParser.ArticleText - 128)) | (1 << (bitmarkParser.NUMERIC - 128)) | (1 << (bitmarkParser.STRING - 128)) | (1 << (bitmarkParser.SENTENCE - 128)) | (1 << (bitmarkParser.AtProgress - 128)) | (1 << (bitmarkParser.AtReference - 128)) | (1 << (bitmarkParser.AtProgressPoints - 128)) | (1 << (bitmarkParser.AtExampleWithStr - 128)) | (1 << (bitmarkParser.AtExamplecol - 128)) | (1 << (bitmarkParser.AtExamplecl - 128)) | (1 << (bitmarkParser.AtPartialAnswerS - 128)) | (1 << (bitmarkParser.AtPartialAnswer - 128)) | (1 << (bitmarkParser.AtLabeltrue - 128)) | (1 << (bitmarkParser.AtLabelfalse - 128)) | (1 << (bitmarkParser.OpAtCopyright - 128)) | (1 << (bitmarkParser.OpAtIsTracked - 128)))) !== 0) || ((((_la - 160)) & ~0x1F) === 0 && ((1 << (_la - 160)) & ((1 << (bitmarkParser.OpAtIsInfoOnly - 160)) | (1 << (bitmarkParser.AtDate - 160)) | (1 << (bitmarkParser.AmpAudio - 160)) | (1 << (bitmarkParser.AmpImage - 160)) | (1 << (bitmarkParser.AmpVideo - 160)) | (1 << (bitmarkParser.AmpArticle - 160)) | (1 << (bitmarkParser.AmpDocument - 160)) | (1 << (bitmarkParser.AmpApp - 160)) | (1 << (bitmarkParser.AmpWebsite - 160)) | (1 << (bitmarkParser.AmpStillImageFilm - 160)) | (1 << (bitmarkParser.OpAmpAudio - 160)) | (1 << (bitmarkParser.OpAmpImage - 160)) | (1 << (bitmarkParser.OpAmpImageZoom - 160)) | (1 << (bitmarkParser.OpAmpImageWAudio - 160)) | (1 << (bitmarkParser.OpAmpVideo - 160)) | (1 << (bitmarkParser.OpAmpArticle - 160)) | (1 << (bitmarkParser.OpAmpDocument - 160)) | (1 << (bitmarkParser.OpAmpApp - 160)) | (1 << (bitmarkParser.OpAmpWebsite - 160)) | (1 << (bitmarkParser.OpAmpStillImageFilm - 160)) | (1 << (bitmarkParser.BracEnclose - 160)) | (1 << (bitmarkParser.AmpAudioLink - 160)) | (1 << (bitmarkParser.AmpImageLink - 160)) | (1 << (bitmarkParser.AmpVideoLink - 160)) | (1 << (bitmarkParser.AmpArticleLink - 160)) | (1 << (bitmarkParser.AmpDocumentLink - 160)))) !== 0) || ((((_la - 192)) & ~0x1F) === 0 && ((1 << (_la - 192)) & ((1 << (bitmarkParser.AmpAppLink - 192)) | (1 << (bitmarkParser.AmpWebsiteLink - 192)) | (1 << (bitmarkParser.AmpStillImageFilmLink - 192)) | (1 << (bitmarkParser.OpAmpAudioLink - 192)) | (1 << (bitmarkParser.OpAmpImageLink - 192)) | (1 << (bitmarkParser.OpAmpVideoLink - 192)) | (1 << (bitmarkParser.OpAmpArticleLink - 192)) | (1 << (bitmarkParser.OpAmpDocumentLink - 192)) | (1 << (bitmarkParser.OpAmpAppLink - 192)) | (1 << (bitmarkParser.OpAmpWebsiteLink - 192)) | (1 << (bitmarkParser.OpAmpStillImageFilmLink - 192)) | (1 << (bitmarkParser.BitmarkMinus - 192)) | (1 << (bitmarkParser.BitmarkPlus - 192)) | (1 << (bitmarkParser.URL - 192)))) !== 0) || _la === bitmarkParser.LIST_LINE) {
				{
				{
				this.state = 2369;
				this.bitElem();
				this.state = 2373;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === bitmarkParser.NL) {
					{
					{
					this.state = 2370;
					this.match(bitmarkParser.NL);
					}
					}
					this.state = 2375;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
				}
				this.state = 2380;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 2389;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 2381;
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
					this.state = 2382;
					this.s_and_w();
					this.state = 2385;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					do {
						{
						{
						this.state = 2383;
						this.match(bitmarkParser.NL);
						this.state = 2384;
						this.bullet_item();
						}
						}
						this.state = 2387;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					} while (_la === bitmarkParser.NL);
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 2391;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 305, this._ctx);
			} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
			this.state = 2393;
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
			this.state = 2397;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 306, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 2394;
					this.match(bitmarkParser.NL);
					}
					}
				}
				this.state = 2399;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 306, this._ctx);
			}
			this.state = 2413;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 309, this._ctx) ) {
			case 1:
				{
				this.state = 2400;
				this.resource();
				this.state = 2410;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 308, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 2404;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						while (_la === bitmarkParser.NL) {
							{
							{
							this.state = 2401;
							this.match(bitmarkParser.NL);
							}
							}
							this.state = 2406;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
						}
						this.state = 2407;
						this.resource();
						}
						}
					}
					this.state = 2412;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 308, this._ctx);
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
		this.enterRule(_localctx, 190, bitmarkParser.RULE_bullet_item);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2415;
			this.match(bitmarkParser.OPBUL);
			this.state = 2416;
			this.s_and_w();
			this.state = 2417;
			this.match(bitmarkParser.CL);
			this.state = 2419;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === bitmarkParser.AtPoints) {
				{
				this.state = 2418;
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
		this.enterRule(_localctx, 192, bitmarkParser.RULE_survey);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2421;
			this.match(bitmarkParser.BitSurvey);
			this.state = 2422;
			this.format();
			this.state = 2423;
			this.match(bitmarkParser.CL);
			this.state = 2427;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === bitmarkParser.NL) {
				{
				{
				this.state = 2424;
				this.match(bitmarkParser.NL);
				}
				}
				this.state = 2429;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 2439;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === bitmarkParser.S || ((((_la - 96)) & ~0x1F) === 0 && ((1 << (_la - 96)) & ((1 << (bitmarkParser.OPDOLL - 96)) | (1 << (bitmarkParser.OPESC - 96)) | (1 << (bitmarkParser.OPRANGLES - 96)) | (1 << (bitmarkParser.OPRANGLEL - 96)) | (1 << (bitmarkParser.OPDANGLE - 96)) | (1 << (bitmarkParser.OPU - 96)) | (1 << (bitmarkParser.OPB - 96)) | (1 << (bitmarkParser.OPQ - 96)) | (1 << (bitmarkParser.OPA - 96)) | (1 << (bitmarkParser.OPS - 96)) | (1 << (bitmarkParser.OPHASH - 96)) | (1 << (bitmarkParser.OPC - 96)) | (1 << (bitmarkParser.COLON - 96)) | (1 << (bitmarkParser.AMP - 96)) | (1 << (bitmarkParser.Greater - 96)) | (1 << (bitmarkParser.Less - 96)) | (1 << (bitmarkParser.RightAngle - 96)) | (1 << (bitmarkParser.RightArrow - 96)) | (1 << (bitmarkParser.DBLEQ - 96)) | (1 << (bitmarkParser.QUOTE_INDEX - 96)))) !== 0) || ((((_la - 128)) & ~0x1F) === 0 && ((1 << (_la - 128)) & ((1 << (bitmarkParser.DCANY - 128)) | (1 << (bitmarkParser.ArticleText - 128)) | (1 << (bitmarkParser.NUMERIC - 128)) | (1 << (bitmarkParser.STRING - 128)) | (1 << (bitmarkParser.SENTENCE - 128)) | (1 << (bitmarkParser.AtProgress - 128)) | (1 << (bitmarkParser.AtReference - 128)) | (1 << (bitmarkParser.AtProgressPoints - 128)) | (1 << (bitmarkParser.AtExampleWithStr - 128)) | (1 << (bitmarkParser.AtExamplecol - 128)) | (1 << (bitmarkParser.AtExamplecl - 128)) | (1 << (bitmarkParser.AtPartialAnswerS - 128)) | (1 << (bitmarkParser.AtPartialAnswer - 128)) | (1 << (bitmarkParser.AtLabeltrue - 128)) | (1 << (bitmarkParser.AtLabelfalse - 128)) | (1 << (bitmarkParser.OpAtCopyright - 128)) | (1 << (bitmarkParser.OpAtIsTracked - 128)))) !== 0) || ((((_la - 160)) & ~0x1F) === 0 && ((1 << (_la - 160)) & ((1 << (bitmarkParser.OpAtIsInfoOnly - 160)) | (1 << (bitmarkParser.AtDate - 160)) | (1 << (bitmarkParser.AmpAudio - 160)) | (1 << (bitmarkParser.AmpImage - 160)) | (1 << (bitmarkParser.AmpVideo - 160)) | (1 << (bitmarkParser.AmpArticle - 160)) | (1 << (bitmarkParser.AmpDocument - 160)) | (1 << (bitmarkParser.AmpApp - 160)) | (1 << (bitmarkParser.AmpWebsite - 160)) | (1 << (bitmarkParser.AmpStillImageFilm - 160)) | (1 << (bitmarkParser.OpAmpAudio - 160)) | (1 << (bitmarkParser.OpAmpImage - 160)) | (1 << (bitmarkParser.OpAmpImageZoom - 160)) | (1 << (bitmarkParser.OpAmpImageWAudio - 160)) | (1 << (bitmarkParser.OpAmpVideo - 160)) | (1 << (bitmarkParser.OpAmpArticle - 160)) | (1 << (bitmarkParser.OpAmpDocument - 160)) | (1 << (bitmarkParser.OpAmpApp - 160)) | (1 << (bitmarkParser.OpAmpWebsite - 160)) | (1 << (bitmarkParser.OpAmpStillImageFilm - 160)) | (1 << (bitmarkParser.BracEnclose - 160)) | (1 << (bitmarkParser.AmpAudioLink - 160)) | (1 << (bitmarkParser.AmpImageLink - 160)) | (1 << (bitmarkParser.AmpVideoLink - 160)) | (1 << (bitmarkParser.AmpArticleLink - 160)) | (1 << (bitmarkParser.AmpDocumentLink - 160)))) !== 0) || ((((_la - 192)) & ~0x1F) === 0 && ((1 << (_la - 192)) & ((1 << (bitmarkParser.AmpAppLink - 192)) | (1 << (bitmarkParser.AmpWebsiteLink - 192)) | (1 << (bitmarkParser.AmpStillImageFilmLink - 192)) | (1 << (bitmarkParser.OpAmpAudioLink - 192)) | (1 << (bitmarkParser.OpAmpImageLink - 192)) | (1 << (bitmarkParser.OpAmpVideoLink - 192)) | (1 << (bitmarkParser.OpAmpArticleLink - 192)) | (1 << (bitmarkParser.OpAmpDocumentLink - 192)) | (1 << (bitmarkParser.OpAmpAppLink - 192)) | (1 << (bitmarkParser.OpAmpWebsiteLink - 192)) | (1 << (bitmarkParser.OpAmpStillImageFilmLink - 192)) | (1 << (bitmarkParser.BitmarkMinus - 192)) | (1 << (bitmarkParser.BitmarkPlus - 192)) | (1 << (bitmarkParser.URL - 192)))) !== 0) || _la === bitmarkParser.LIST_LINE) {
				{
				{
				this.state = 2430;
				this.bitElem();
				this.state = 2434;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === bitmarkParser.NL) {
					{
					{
					this.state = 2431;
					this.match(bitmarkParser.NL);
					}
					}
					this.state = 2436;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
				}
				this.state = 2441;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 2457;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 2442;
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
					this.state = 2444;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === bitmarkParser.S || ((((_la - 98)) & ~0x1F) === 0 && ((1 << (_la - 98)) & ((1 << (bitmarkParser.OPESC - 98)) | (1 << (bitmarkParser.OPS - 98)) | (1 << (bitmarkParser.COLON - 98)) | (1 << (bitmarkParser.AMP - 98)) | (1 << (bitmarkParser.Greater - 98)) | (1 << (bitmarkParser.Less - 98)) | (1 << (bitmarkParser.RightAngle - 98)) | (1 << (bitmarkParser.RightArrow - 98)) | (1 << (bitmarkParser.DBLEQ - 98)) | (1 << (bitmarkParser.QUOTE_INDEX - 98)))) !== 0) || ((((_la - 131)) & ~0x1F) === 0 && ((1 << (_la - 131)) & ((1 << (bitmarkParser.NUMERIC - 131)) | (1 << (bitmarkParser.STRING - 131)) | (1 << (bitmarkParser.SENTENCE - 131)))) !== 0) || ((((_la - 164)) & ~0x1F) === 0 && ((1 << (_la - 164)) & ((1 << (bitmarkParser.AmpAudio - 164)) | (1 << (bitmarkParser.AmpImage - 164)) | (1 << (bitmarkParser.AmpVideo - 164)) | (1 << (bitmarkParser.AmpArticle - 164)) | (1 << (bitmarkParser.AmpDocument - 164)) | (1 << (bitmarkParser.AmpApp - 164)) | (1 << (bitmarkParser.AmpWebsite - 164)) | (1 << (bitmarkParser.AmpStillImageFilm - 164)) | (1 << (bitmarkParser.AmpAudioLink - 164)) | (1 << (bitmarkParser.AmpImageLink - 164)) | (1 << (bitmarkParser.AmpVideoLink - 164)) | (1 << (bitmarkParser.AmpArticleLink - 164)) | (1 << (bitmarkParser.AmpDocumentLink - 164)) | (1 << (bitmarkParser.AmpAppLink - 164)) | (1 << (bitmarkParser.AmpWebsiteLink - 164)) | (1 << (bitmarkParser.AmpStillImageFilmLink - 164)))) !== 0) || ((((_la - 203)) & ~0x1F) === 0 && ((1 << (_la - 203)) & ((1 << (bitmarkParser.BitmarkMinus - 203)) | (1 << (bitmarkParser.BitmarkPlus - 203)) | (1 << (bitmarkParser.URL - 203)))) !== 0)) {
						{
						this.state = 2443;
						this.s_and_w();
						}
					}

					this.state = 2453;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					do {
						{
						{
						this.state = 2449;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						while (_la === bitmarkParser.NL) {
							{
							{
							this.state = 2446;
							this.match(bitmarkParser.NL);
							}
							}
							this.state = 2451;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
						}
						this.state = 2452;
						this.bullet_item();
						}
						}
						this.state = 2455;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					} while (_la === bitmarkParser.OPBUL || _la === bitmarkParser.NL);
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 2459;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 317, this._ctx);
			} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
			this.state = 2461;
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
		this.enterRule(_localctx, 194, bitmarkParser.RULE_survey_1);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2463;
			this.match(bitmarkParser.BitSurvey1);
			this.state = 2464;
			this.format();
			this.state = 2465;
			this.match(bitmarkParser.CL);
			this.state = 2469;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === bitmarkParser.NL) {
				{
				{
				this.state = 2466;
				this.match(bitmarkParser.NL);
				}
				}
				this.state = 2471;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 2481;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === bitmarkParser.S || ((((_la - 96)) & ~0x1F) === 0 && ((1 << (_la - 96)) & ((1 << (bitmarkParser.OPDOLL - 96)) | (1 << (bitmarkParser.OPESC - 96)) | (1 << (bitmarkParser.OPRANGLES - 96)) | (1 << (bitmarkParser.OPRANGLEL - 96)) | (1 << (bitmarkParser.OPDANGLE - 96)) | (1 << (bitmarkParser.OPU - 96)) | (1 << (bitmarkParser.OPB - 96)) | (1 << (bitmarkParser.OPQ - 96)) | (1 << (bitmarkParser.OPA - 96)) | (1 << (bitmarkParser.OPS - 96)) | (1 << (bitmarkParser.OPHASH - 96)) | (1 << (bitmarkParser.OPC - 96)) | (1 << (bitmarkParser.COLON - 96)) | (1 << (bitmarkParser.AMP - 96)) | (1 << (bitmarkParser.Greater - 96)) | (1 << (bitmarkParser.Less - 96)) | (1 << (bitmarkParser.RightAngle - 96)) | (1 << (bitmarkParser.RightArrow - 96)) | (1 << (bitmarkParser.DBLEQ - 96)) | (1 << (bitmarkParser.QUOTE_INDEX - 96)))) !== 0) || ((((_la - 128)) & ~0x1F) === 0 && ((1 << (_la - 128)) & ((1 << (bitmarkParser.DCANY - 128)) | (1 << (bitmarkParser.ArticleText - 128)) | (1 << (bitmarkParser.NUMERIC - 128)) | (1 << (bitmarkParser.STRING - 128)) | (1 << (bitmarkParser.SENTENCE - 128)) | (1 << (bitmarkParser.AtProgress - 128)) | (1 << (bitmarkParser.AtReference - 128)) | (1 << (bitmarkParser.AtProgressPoints - 128)) | (1 << (bitmarkParser.AtExampleWithStr - 128)) | (1 << (bitmarkParser.AtExamplecol - 128)) | (1 << (bitmarkParser.AtExamplecl - 128)) | (1 << (bitmarkParser.AtPartialAnswerS - 128)) | (1 << (bitmarkParser.AtPartialAnswer - 128)) | (1 << (bitmarkParser.AtLabeltrue - 128)) | (1 << (bitmarkParser.AtLabelfalse - 128)) | (1 << (bitmarkParser.OpAtCopyright - 128)) | (1 << (bitmarkParser.OpAtIsTracked - 128)))) !== 0) || ((((_la - 160)) & ~0x1F) === 0 && ((1 << (_la - 160)) & ((1 << (bitmarkParser.OpAtIsInfoOnly - 160)) | (1 << (bitmarkParser.AtDate - 160)) | (1 << (bitmarkParser.AmpAudio - 160)) | (1 << (bitmarkParser.AmpImage - 160)) | (1 << (bitmarkParser.AmpVideo - 160)) | (1 << (bitmarkParser.AmpArticle - 160)) | (1 << (bitmarkParser.AmpDocument - 160)) | (1 << (bitmarkParser.AmpApp - 160)) | (1 << (bitmarkParser.AmpWebsite - 160)) | (1 << (bitmarkParser.AmpStillImageFilm - 160)) | (1 << (bitmarkParser.OpAmpAudio - 160)) | (1 << (bitmarkParser.OpAmpImage - 160)) | (1 << (bitmarkParser.OpAmpImageZoom - 160)) | (1 << (bitmarkParser.OpAmpImageWAudio - 160)) | (1 << (bitmarkParser.OpAmpVideo - 160)) | (1 << (bitmarkParser.OpAmpArticle - 160)) | (1 << (bitmarkParser.OpAmpDocument - 160)) | (1 << (bitmarkParser.OpAmpApp - 160)) | (1 << (bitmarkParser.OpAmpWebsite - 160)) | (1 << (bitmarkParser.OpAmpStillImageFilm - 160)) | (1 << (bitmarkParser.BracEnclose - 160)) | (1 << (bitmarkParser.AmpAudioLink - 160)) | (1 << (bitmarkParser.AmpImageLink - 160)) | (1 << (bitmarkParser.AmpVideoLink - 160)) | (1 << (bitmarkParser.AmpArticleLink - 160)) | (1 << (bitmarkParser.AmpDocumentLink - 160)))) !== 0) || ((((_la - 192)) & ~0x1F) === 0 && ((1 << (_la - 192)) & ((1 << (bitmarkParser.AmpAppLink - 192)) | (1 << (bitmarkParser.AmpWebsiteLink - 192)) | (1 << (bitmarkParser.AmpStillImageFilmLink - 192)) | (1 << (bitmarkParser.OpAmpAudioLink - 192)) | (1 << (bitmarkParser.OpAmpImageLink - 192)) | (1 << (bitmarkParser.OpAmpVideoLink - 192)) | (1 << (bitmarkParser.OpAmpArticleLink - 192)) | (1 << (bitmarkParser.OpAmpDocumentLink - 192)) | (1 << (bitmarkParser.OpAmpAppLink - 192)) | (1 << (bitmarkParser.OpAmpWebsiteLink - 192)) | (1 << (bitmarkParser.OpAmpStillImageFilmLink - 192)) | (1 << (bitmarkParser.BitmarkMinus - 192)) | (1 << (bitmarkParser.BitmarkPlus - 192)) | (1 << (bitmarkParser.URL - 192)))) !== 0) || _la === bitmarkParser.LIST_LINE) {
				{
				{
				this.state = 2472;
				this.bitElem();
				this.state = 2476;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === bitmarkParser.NL) {
					{
					{
					this.state = 2473;
					this.match(bitmarkParser.NL);
					}
					}
					this.state = 2478;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
				}
				this.state = 2483;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 2492;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 2484;
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
					this.state = 2485;
					this.s_and_w();
					this.state = 2488;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					do {
						{
						{
						this.state = 2486;
						this.match(bitmarkParser.NL);
						this.state = 2487;
						this.bullet_item();
						}
						}
						this.state = 2490;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					} while (_la === bitmarkParser.NL);
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 2494;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 322, this._ctx);
			} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
			this.state = 2496;
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
		this.enterRule(_localctx, 196, bitmarkParser.RULE_survey_anonymous);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2498;
			this.match(bitmarkParser.BitSurveyanon);
			this.state = 2499;
			this.format();
			this.state = 2500;
			this.match(bitmarkParser.CL);
			this.state = 2504;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === bitmarkParser.NL) {
				{
				{
				this.state = 2501;
				this.match(bitmarkParser.NL);
				}
				}
				this.state = 2506;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 2516;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === bitmarkParser.S || ((((_la - 96)) & ~0x1F) === 0 && ((1 << (_la - 96)) & ((1 << (bitmarkParser.OPDOLL - 96)) | (1 << (bitmarkParser.OPESC - 96)) | (1 << (bitmarkParser.OPRANGLES - 96)) | (1 << (bitmarkParser.OPRANGLEL - 96)) | (1 << (bitmarkParser.OPDANGLE - 96)) | (1 << (bitmarkParser.OPU - 96)) | (1 << (bitmarkParser.OPB - 96)) | (1 << (bitmarkParser.OPQ - 96)) | (1 << (bitmarkParser.OPA - 96)) | (1 << (bitmarkParser.OPS - 96)) | (1 << (bitmarkParser.OPHASH - 96)) | (1 << (bitmarkParser.OPC - 96)) | (1 << (bitmarkParser.COLON - 96)) | (1 << (bitmarkParser.AMP - 96)) | (1 << (bitmarkParser.Greater - 96)) | (1 << (bitmarkParser.Less - 96)) | (1 << (bitmarkParser.RightAngle - 96)) | (1 << (bitmarkParser.RightArrow - 96)) | (1 << (bitmarkParser.DBLEQ - 96)) | (1 << (bitmarkParser.QUOTE_INDEX - 96)))) !== 0) || ((((_la - 128)) & ~0x1F) === 0 && ((1 << (_la - 128)) & ((1 << (bitmarkParser.DCANY - 128)) | (1 << (bitmarkParser.ArticleText - 128)) | (1 << (bitmarkParser.NUMERIC - 128)) | (1 << (bitmarkParser.STRING - 128)) | (1 << (bitmarkParser.SENTENCE - 128)) | (1 << (bitmarkParser.AtProgress - 128)) | (1 << (bitmarkParser.AtReference - 128)) | (1 << (bitmarkParser.AtProgressPoints - 128)) | (1 << (bitmarkParser.AtExampleWithStr - 128)) | (1 << (bitmarkParser.AtExamplecol - 128)) | (1 << (bitmarkParser.AtExamplecl - 128)) | (1 << (bitmarkParser.AtPartialAnswerS - 128)) | (1 << (bitmarkParser.AtPartialAnswer - 128)) | (1 << (bitmarkParser.AtLabeltrue - 128)) | (1 << (bitmarkParser.AtLabelfalse - 128)) | (1 << (bitmarkParser.OpAtCopyright - 128)) | (1 << (bitmarkParser.OpAtIsTracked - 128)))) !== 0) || ((((_la - 160)) & ~0x1F) === 0 && ((1 << (_la - 160)) & ((1 << (bitmarkParser.OpAtIsInfoOnly - 160)) | (1 << (bitmarkParser.AtDate - 160)) | (1 << (bitmarkParser.AmpAudio - 160)) | (1 << (bitmarkParser.AmpImage - 160)) | (1 << (bitmarkParser.AmpVideo - 160)) | (1 << (bitmarkParser.AmpArticle - 160)) | (1 << (bitmarkParser.AmpDocument - 160)) | (1 << (bitmarkParser.AmpApp - 160)) | (1 << (bitmarkParser.AmpWebsite - 160)) | (1 << (bitmarkParser.AmpStillImageFilm - 160)) | (1 << (bitmarkParser.OpAmpAudio - 160)) | (1 << (bitmarkParser.OpAmpImage - 160)) | (1 << (bitmarkParser.OpAmpImageZoom - 160)) | (1 << (bitmarkParser.OpAmpImageWAudio - 160)) | (1 << (bitmarkParser.OpAmpVideo - 160)) | (1 << (bitmarkParser.OpAmpArticle - 160)) | (1 << (bitmarkParser.OpAmpDocument - 160)) | (1 << (bitmarkParser.OpAmpApp - 160)) | (1 << (bitmarkParser.OpAmpWebsite - 160)) | (1 << (bitmarkParser.OpAmpStillImageFilm - 160)) | (1 << (bitmarkParser.BracEnclose - 160)) | (1 << (bitmarkParser.AmpAudioLink - 160)) | (1 << (bitmarkParser.AmpImageLink - 160)) | (1 << (bitmarkParser.AmpVideoLink - 160)) | (1 << (bitmarkParser.AmpArticleLink - 160)) | (1 << (bitmarkParser.AmpDocumentLink - 160)))) !== 0) || ((((_la - 192)) & ~0x1F) === 0 && ((1 << (_la - 192)) & ((1 << (bitmarkParser.AmpAppLink - 192)) | (1 << (bitmarkParser.AmpWebsiteLink - 192)) | (1 << (bitmarkParser.AmpStillImageFilmLink - 192)) | (1 << (bitmarkParser.OpAmpAudioLink - 192)) | (1 << (bitmarkParser.OpAmpImageLink - 192)) | (1 << (bitmarkParser.OpAmpVideoLink - 192)) | (1 << (bitmarkParser.OpAmpArticleLink - 192)) | (1 << (bitmarkParser.OpAmpDocumentLink - 192)) | (1 << (bitmarkParser.OpAmpAppLink - 192)) | (1 << (bitmarkParser.OpAmpWebsiteLink - 192)) | (1 << (bitmarkParser.OpAmpStillImageFilmLink - 192)) | (1 << (bitmarkParser.BitmarkMinus - 192)) | (1 << (bitmarkParser.BitmarkPlus - 192)) | (1 << (bitmarkParser.URL - 192)))) !== 0) || _la === bitmarkParser.LIST_LINE) {
				{
				{
				this.state = 2507;
				this.bitElem();
				this.state = 2511;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === bitmarkParser.NL) {
					{
					{
					this.state = 2508;
					this.match(bitmarkParser.NL);
					}
					}
					this.state = 2513;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
				}
				this.state = 2518;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 2527;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 2519;
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
					this.state = 2520;
					this.s_and_w();
					this.state = 2523;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					do {
						{
						{
						this.state = 2521;
						this.match(bitmarkParser.NL);
						this.state = 2522;
						this.bullet_item();
						}
						}
						this.state = 2525;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					} while (_la === bitmarkParser.NL);
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 2529;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 327, this._ctx);
			} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
			this.state = 2531;
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
		this.enterRule(_localctx, 198, bitmarkParser.RULE_survey_anonymous_1);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2533;
			this.match(bitmarkParser.BitSurveyanon1);
			this.state = 2534;
			this.format();
			this.state = 2535;
			this.match(bitmarkParser.CL);
			this.state = 2539;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === bitmarkParser.NL) {
				{
				{
				this.state = 2536;
				this.match(bitmarkParser.NL);
				}
				}
				this.state = 2541;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 2551;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === bitmarkParser.S || ((((_la - 96)) & ~0x1F) === 0 && ((1 << (_la - 96)) & ((1 << (bitmarkParser.OPDOLL - 96)) | (1 << (bitmarkParser.OPESC - 96)) | (1 << (bitmarkParser.OPRANGLES - 96)) | (1 << (bitmarkParser.OPRANGLEL - 96)) | (1 << (bitmarkParser.OPDANGLE - 96)) | (1 << (bitmarkParser.OPU - 96)) | (1 << (bitmarkParser.OPB - 96)) | (1 << (bitmarkParser.OPQ - 96)) | (1 << (bitmarkParser.OPA - 96)) | (1 << (bitmarkParser.OPS - 96)) | (1 << (bitmarkParser.OPHASH - 96)) | (1 << (bitmarkParser.OPC - 96)) | (1 << (bitmarkParser.COLON - 96)) | (1 << (bitmarkParser.AMP - 96)) | (1 << (bitmarkParser.Greater - 96)) | (1 << (bitmarkParser.Less - 96)) | (1 << (bitmarkParser.RightAngle - 96)) | (1 << (bitmarkParser.RightArrow - 96)) | (1 << (bitmarkParser.DBLEQ - 96)) | (1 << (bitmarkParser.QUOTE_INDEX - 96)))) !== 0) || ((((_la - 128)) & ~0x1F) === 0 && ((1 << (_la - 128)) & ((1 << (bitmarkParser.DCANY - 128)) | (1 << (bitmarkParser.ArticleText - 128)) | (1 << (bitmarkParser.NUMERIC - 128)) | (1 << (bitmarkParser.STRING - 128)) | (1 << (bitmarkParser.SENTENCE - 128)) | (1 << (bitmarkParser.AtProgress - 128)) | (1 << (bitmarkParser.AtReference - 128)) | (1 << (bitmarkParser.AtProgressPoints - 128)) | (1 << (bitmarkParser.AtExampleWithStr - 128)) | (1 << (bitmarkParser.AtExamplecol - 128)) | (1 << (bitmarkParser.AtExamplecl - 128)) | (1 << (bitmarkParser.AtPartialAnswerS - 128)) | (1 << (bitmarkParser.AtPartialAnswer - 128)) | (1 << (bitmarkParser.AtLabeltrue - 128)) | (1 << (bitmarkParser.AtLabelfalse - 128)) | (1 << (bitmarkParser.OpAtCopyright - 128)) | (1 << (bitmarkParser.OpAtIsTracked - 128)))) !== 0) || ((((_la - 160)) & ~0x1F) === 0 && ((1 << (_la - 160)) & ((1 << (bitmarkParser.OpAtIsInfoOnly - 160)) | (1 << (bitmarkParser.AtDate - 160)) | (1 << (bitmarkParser.AmpAudio - 160)) | (1 << (bitmarkParser.AmpImage - 160)) | (1 << (bitmarkParser.AmpVideo - 160)) | (1 << (bitmarkParser.AmpArticle - 160)) | (1 << (bitmarkParser.AmpDocument - 160)) | (1 << (bitmarkParser.AmpApp - 160)) | (1 << (bitmarkParser.AmpWebsite - 160)) | (1 << (bitmarkParser.AmpStillImageFilm - 160)) | (1 << (bitmarkParser.OpAmpAudio - 160)) | (1 << (bitmarkParser.OpAmpImage - 160)) | (1 << (bitmarkParser.OpAmpImageZoom - 160)) | (1 << (bitmarkParser.OpAmpImageWAudio - 160)) | (1 << (bitmarkParser.OpAmpVideo - 160)) | (1 << (bitmarkParser.OpAmpArticle - 160)) | (1 << (bitmarkParser.OpAmpDocument - 160)) | (1 << (bitmarkParser.OpAmpApp - 160)) | (1 << (bitmarkParser.OpAmpWebsite - 160)) | (1 << (bitmarkParser.OpAmpStillImageFilm - 160)) | (1 << (bitmarkParser.BracEnclose - 160)) | (1 << (bitmarkParser.AmpAudioLink - 160)) | (1 << (bitmarkParser.AmpImageLink - 160)) | (1 << (bitmarkParser.AmpVideoLink - 160)) | (1 << (bitmarkParser.AmpArticleLink - 160)) | (1 << (bitmarkParser.AmpDocumentLink - 160)))) !== 0) || ((((_la - 192)) & ~0x1F) === 0 && ((1 << (_la - 192)) & ((1 << (bitmarkParser.AmpAppLink - 192)) | (1 << (bitmarkParser.AmpWebsiteLink - 192)) | (1 << (bitmarkParser.AmpStillImageFilmLink - 192)) | (1 << (bitmarkParser.OpAmpAudioLink - 192)) | (1 << (bitmarkParser.OpAmpImageLink - 192)) | (1 << (bitmarkParser.OpAmpVideoLink - 192)) | (1 << (bitmarkParser.OpAmpArticleLink - 192)) | (1 << (bitmarkParser.OpAmpDocumentLink - 192)) | (1 << (bitmarkParser.OpAmpAppLink - 192)) | (1 << (bitmarkParser.OpAmpWebsiteLink - 192)) | (1 << (bitmarkParser.OpAmpStillImageFilmLink - 192)) | (1 << (bitmarkParser.BitmarkMinus - 192)) | (1 << (bitmarkParser.BitmarkPlus - 192)) | (1 << (bitmarkParser.URL - 192)))) !== 0) || _la === bitmarkParser.LIST_LINE) {
				{
				{
				this.state = 2542;
				this.bitElem();
				this.state = 2546;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === bitmarkParser.NL) {
					{
					{
					this.state = 2543;
					this.match(bitmarkParser.NL);
					}
					}
					this.state = 2548;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
				}
				this.state = 2553;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 2562;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 2554;
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
					this.state = 2555;
					this.s_and_w();
					this.state = 2558;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					do {
						{
						{
						this.state = 2556;
						this.match(bitmarkParser.NL);
						this.state = 2557;
						this.bullet_item();
						}
						}
						this.state = 2560;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					} while (_la === bitmarkParser.NL);
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 2564;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 332, this._ctx);
			} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
			this.state = 2566;
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
		this.enterRule(_localctx, 200, bitmarkParser.RULE_self_assessment);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2568;
			this.match(bitmarkParser.BitSelfassess);
			this.state = 2569;
			this.format();
			this.state = 2570;
			this.match(bitmarkParser.CL);
			this.state = 2574;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === bitmarkParser.NL) {
				{
				{
				this.state = 2571;
				this.match(bitmarkParser.NL);
				}
				}
				this.state = 2576;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 2586;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === bitmarkParser.S || ((((_la - 96)) & ~0x1F) === 0 && ((1 << (_la - 96)) & ((1 << (bitmarkParser.OPDOLL - 96)) | (1 << (bitmarkParser.OPESC - 96)) | (1 << (bitmarkParser.OPRANGLES - 96)) | (1 << (bitmarkParser.OPRANGLEL - 96)) | (1 << (bitmarkParser.OPDANGLE - 96)) | (1 << (bitmarkParser.OPU - 96)) | (1 << (bitmarkParser.OPB - 96)) | (1 << (bitmarkParser.OPQ - 96)) | (1 << (bitmarkParser.OPA - 96)) | (1 << (bitmarkParser.OPS - 96)) | (1 << (bitmarkParser.OPHASH - 96)) | (1 << (bitmarkParser.OPC - 96)) | (1 << (bitmarkParser.COLON - 96)) | (1 << (bitmarkParser.AMP - 96)) | (1 << (bitmarkParser.Greater - 96)) | (1 << (bitmarkParser.Less - 96)) | (1 << (bitmarkParser.RightAngle - 96)) | (1 << (bitmarkParser.RightArrow - 96)) | (1 << (bitmarkParser.DBLEQ - 96)) | (1 << (bitmarkParser.QUOTE_INDEX - 96)))) !== 0) || ((((_la - 128)) & ~0x1F) === 0 && ((1 << (_la - 128)) & ((1 << (bitmarkParser.DCANY - 128)) | (1 << (bitmarkParser.ArticleText - 128)) | (1 << (bitmarkParser.NUMERIC - 128)) | (1 << (bitmarkParser.STRING - 128)) | (1 << (bitmarkParser.SENTENCE - 128)) | (1 << (bitmarkParser.AtProgress - 128)) | (1 << (bitmarkParser.AtReference - 128)) | (1 << (bitmarkParser.AtProgressPoints - 128)) | (1 << (bitmarkParser.AtExampleWithStr - 128)) | (1 << (bitmarkParser.AtExamplecol - 128)) | (1 << (bitmarkParser.AtExamplecl - 128)) | (1 << (bitmarkParser.AtPartialAnswerS - 128)) | (1 << (bitmarkParser.AtPartialAnswer - 128)) | (1 << (bitmarkParser.AtLabeltrue - 128)) | (1 << (bitmarkParser.AtLabelfalse - 128)) | (1 << (bitmarkParser.OpAtCopyright - 128)) | (1 << (bitmarkParser.OpAtIsTracked - 128)))) !== 0) || ((((_la - 160)) & ~0x1F) === 0 && ((1 << (_la - 160)) & ((1 << (bitmarkParser.OpAtIsInfoOnly - 160)) | (1 << (bitmarkParser.AtDate - 160)) | (1 << (bitmarkParser.AmpAudio - 160)) | (1 << (bitmarkParser.AmpImage - 160)) | (1 << (bitmarkParser.AmpVideo - 160)) | (1 << (bitmarkParser.AmpArticle - 160)) | (1 << (bitmarkParser.AmpDocument - 160)) | (1 << (bitmarkParser.AmpApp - 160)) | (1 << (bitmarkParser.AmpWebsite - 160)) | (1 << (bitmarkParser.AmpStillImageFilm - 160)) | (1 << (bitmarkParser.OpAmpAudio - 160)) | (1 << (bitmarkParser.OpAmpImage - 160)) | (1 << (bitmarkParser.OpAmpImageZoom - 160)) | (1 << (bitmarkParser.OpAmpImageWAudio - 160)) | (1 << (bitmarkParser.OpAmpVideo - 160)) | (1 << (bitmarkParser.OpAmpArticle - 160)) | (1 << (bitmarkParser.OpAmpDocument - 160)) | (1 << (bitmarkParser.OpAmpApp - 160)) | (1 << (bitmarkParser.OpAmpWebsite - 160)) | (1 << (bitmarkParser.OpAmpStillImageFilm - 160)) | (1 << (bitmarkParser.BracEnclose - 160)) | (1 << (bitmarkParser.AmpAudioLink - 160)) | (1 << (bitmarkParser.AmpImageLink - 160)) | (1 << (bitmarkParser.AmpVideoLink - 160)) | (1 << (bitmarkParser.AmpArticleLink - 160)) | (1 << (bitmarkParser.AmpDocumentLink - 160)))) !== 0) || ((((_la - 192)) & ~0x1F) === 0 && ((1 << (_la - 192)) & ((1 << (bitmarkParser.AmpAppLink - 192)) | (1 << (bitmarkParser.AmpWebsiteLink - 192)) | (1 << (bitmarkParser.AmpStillImageFilmLink - 192)) | (1 << (bitmarkParser.OpAmpAudioLink - 192)) | (1 << (bitmarkParser.OpAmpImageLink - 192)) | (1 << (bitmarkParser.OpAmpVideoLink - 192)) | (1 << (bitmarkParser.OpAmpArticleLink - 192)) | (1 << (bitmarkParser.OpAmpDocumentLink - 192)) | (1 << (bitmarkParser.OpAmpAppLink - 192)) | (1 << (bitmarkParser.OpAmpWebsiteLink - 192)) | (1 << (bitmarkParser.OpAmpStillImageFilmLink - 192)) | (1 << (bitmarkParser.BitmarkMinus - 192)) | (1 << (bitmarkParser.BitmarkPlus - 192)) | (1 << (bitmarkParser.URL - 192)))) !== 0) || _la === bitmarkParser.LIST_LINE) {
				{
				{
				this.state = 2577;
				this.bitElem();
				this.state = 2581;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === bitmarkParser.NL) {
					{
					{
					this.state = 2578;
					this.match(bitmarkParser.NL);
					}
					}
					this.state = 2583;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
				}
				this.state = 2588;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 2602;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 2589;
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
					this.state = 2590;
					this.self_assess_s_and_w();
					this.state = 2598;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					do {
						{
						{
						this.state = 2594;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						while (_la === bitmarkParser.NL) {
							{
							{
							this.state = 2591;
							this.match(bitmarkParser.NL);
							}
							}
							this.state = 2596;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
						}
						this.state = 2597;
						this.bullet_item();
						}
						}
						this.state = 2600;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					} while (_la === bitmarkParser.OPBUL || _la === bitmarkParser.NL);
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 2604;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 338, this._ctx);
			} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
			this.state = 2606;
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
			this.state = 2610;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 339, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 2607;
					this.match(bitmarkParser.NL);
					}
					}
				}
				this.state = 2612;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 339, this._ctx);
			}
			this.state = 2626;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 342, this._ctx) ) {
			case 1:
				{
				this.state = 2613;
				this.resource();
				this.state = 2623;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 341, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 2617;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						while (_la === bitmarkParser.NL) {
							{
							{
							this.state = 2614;
							this.match(bitmarkParser.NL);
							}
							}
							this.state = 2619;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
						}
						this.state = 2620;
						this.resource();
						}
						}
					}
					this.state = 2625;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 341, this._ctx);
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
		this.enterRule(_localctx, 202, bitmarkParser.RULE_self_assess_s_and_w);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2629;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 2628;
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
				this.state = 2631;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 343, this._ctx);
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
		this.enterRule(_localctx, 204, bitmarkParser.RULE_atpoint);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2633;
			this.match(bitmarkParser.AtPoints);
			this.state = 2634;
			this.match(bitmarkParser.NUMERIC);
			this.state = 2635;
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
		this.enterRule(_localctx, 206, bitmarkParser.RULE_format);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2640;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 344, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 2637;
					this.resource_format();
					}
					}
				}
				this.state = 2642;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 344, this._ctx);
			}
			this.state = 2647;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 164)) & ~0x1F) === 0 && ((1 << (_la - 164)) & ((1 << (bitmarkParser.AmpAudio - 164)) | (1 << (bitmarkParser.AmpImage - 164)) | (1 << (bitmarkParser.AmpImageZoom - 164)) | (1 << (bitmarkParser.AmpImageWAudio - 164)) | (1 << (bitmarkParser.AmpVideo - 164)) | (1 << (bitmarkParser.AmpArticle - 164)) | (1 << (bitmarkParser.AmpDocument - 164)) | (1 << (bitmarkParser.AmpApp - 164)) | (1 << (bitmarkParser.AmpWebsite - 164)) | (1 << (bitmarkParser.AmpStillImageFilm - 164)) | (1 << (bitmarkParser.AmpPdf - 164)) | (1 << (bitmarkParser.AmpAudioLink - 164)) | (1 << (bitmarkParser.AmpImageLink - 164)) | (1 << (bitmarkParser.AmpVideoLink - 164)) | (1 << (bitmarkParser.AmpArticleLink - 164)) | (1 << (bitmarkParser.AmpDocumentLink - 164)) | (1 << (bitmarkParser.AmpAppLink - 164)) | (1 << (bitmarkParser.AmpWebsiteLink - 164)) | (1 << (bitmarkParser.AmpStillImageFilmLink - 164)))) !== 0) || _la === bitmarkParser.ColonText) {
				{
				this.state = 2645;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case bitmarkParser.ColonText:
					{
					this.state = 2643;
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
					this.state = 2644;
					this.resource_format_extra();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				this.state = 2649;
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
		this.enterRule(_localctx, 208, bitmarkParser.RULE_resource_format);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2650;
			_la = this._input.LA(1);
			if (!(((((_la - 169)) & ~0x1F) === 0 && ((1 << (_la - 169)) & ((1 << (bitmarkParser.AmpArticle - 169)) | (1 << (bitmarkParser.AmpDocument - 169)) | (1 << (bitmarkParser.AmpWebsite - 169)) | (1 << (bitmarkParser.AmpStillImageFilm - 169)) | (1 << (bitmarkParser.AmpAudioLink - 169)) | (1 << (bitmarkParser.AmpImageLink - 169)) | (1 << (bitmarkParser.AmpVideoLink - 169)) | (1 << (bitmarkParser.AmpArticleLink - 169)) | (1 << (bitmarkParser.AmpDocumentLink - 169)) | (1 << (bitmarkParser.AmpAppLink - 169)) | (1 << (bitmarkParser.AmpWebsiteLink - 169)) | (1 << (bitmarkParser.AmpStillImageFilmLink - 169)))) !== 0) || ((((_la - 203)) & ~0x1F) === 0 && ((1 << (_la - 203)) & ((1 << (bitmarkParser.BitmarkMinus - 203)) | (1 << (bitmarkParser.BitmarkPlus - 203)) | (1 << (bitmarkParser.Prosemirror - 203)) | (1 << (bitmarkParser.Placeholder - 203)))) !== 0))) {
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
		this.enterRule(_localctx, 210, bitmarkParser.RULE_resource_format_extra);
		try {
			this.state = 2661;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case bitmarkParser.AmpImage:
			case bitmarkParser.AmpImageZoom:
			case bitmarkParser.AmpImageWAudio:
			case bitmarkParser.AmpImageLink:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2652;
				this.image_format();
				}
				break;
			case bitmarkParser.AmpAudio:
			case bitmarkParser.AmpAudioLink:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2653;
				this.audio_format();
				}
				break;
			case bitmarkParser.AmpVideo:
			case bitmarkParser.AmpVideoLink:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 2654;
				this.video_format();
				}
				break;
			case bitmarkParser.AmpArticle:
			case bitmarkParser.AmpArticleLink:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 2655;
				this.article_format();
				}
				break;
			case bitmarkParser.AmpDocument:
			case bitmarkParser.AmpDocumentLink:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 2656;
				this.document_format();
				}
				break;
			case bitmarkParser.AmpApp:
			case bitmarkParser.AmpAppLink:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 2657;
				this.app_format();
				}
				break;
			case bitmarkParser.AmpWebsite:
			case bitmarkParser.AmpWebsiteLink:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 2658;
				this.website_format();
				}
				break;
			case bitmarkParser.AmpStillImageFilm:
			case bitmarkParser.AmpStillImageFilmLink:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 2659;
				this.stillimagefilm_format();
				}
				break;
			case bitmarkParser.AmpPdf:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 2660;
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
	public format2(): Format2Context {
		let _localctx: Format2Context = new Format2Context(this._ctx, this.state);
		this.enterRule(_localctx, 212, bitmarkParser.RULE_format2);
		try {
			this.state = 2667;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case bitmarkParser.BitmarkMinus:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2663;
				this.match(bitmarkParser.BitmarkMinus);
				}
				break;
			case bitmarkParser.BitmarkPlus:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2664;
				this.match(bitmarkParser.BitmarkPlus);
				}
				break;
			case bitmarkParser.ColonText:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 2665;
				this.match(bitmarkParser.ColonText);
				}
				break;
			case bitmarkParser.CL:
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
		this.enterRule(_localctx, 214, bitmarkParser.RULE_image_format);
		let _la: number;
		try {
			this.state = 2683;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case bitmarkParser.AmpImage:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2669;
				this.match(bitmarkParser.AmpImage);
				this.state = 2672;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case bitmarkParser.Image_type:
					{
					{
					this.state = 2670;
					this.match(bitmarkParser.Image_type);
					}
					}
					break;
				case bitmarkParser.DotArticleAtt:
					{
					{
					this.state = 2671;
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
				this.state = 2674;
				this.match(bitmarkParser.AmpImageLink);
				this.state = 2676;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === bitmarkParser.Image_type) {
					{
					this.state = 2675;
					this.match(bitmarkParser.Image_type);
					}
				}

				}
				break;
			case bitmarkParser.AmpImageZoom:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 2678;
				this.match(bitmarkParser.AmpImageZoom);
				this.state = 2680;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === bitmarkParser.Image_type) {
					{
					this.state = 2679;
					this.match(bitmarkParser.Image_type);
					}
				}

				}
				break;
			case bitmarkParser.AmpImageWAudio:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 2682;
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
		this.enterRule(_localctx, 216, bitmarkParser.RULE_video_format);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2685;
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
			this.state = 2688;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === bitmarkParser.COLON) {
				{
				this.state = 2686;
				this.match(bitmarkParser.COLON);
				this.state = 2687;
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
		this.enterRule(_localctx, 218, bitmarkParser.RULE_article_format);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2690;
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
		this.enterRule(_localctx, 220, bitmarkParser.RULE_document_format);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2692;
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
		this.enterRule(_localctx, 222, bitmarkParser.RULE_app_format);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2694;
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
		this.enterRule(_localctx, 224, bitmarkParser.RULE_website_format);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2696;
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
		this.enterRule(_localctx, 226, bitmarkParser.RULE_stillimagefilm_format);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2698;
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
		this.enterRule(_localctx, 228, bitmarkParser.RULE_op_article_format);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2700;
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
		this.enterRule(_localctx, 230, bitmarkParser.RULE_op_document_format);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2702;
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
		this.enterRule(_localctx, 232, bitmarkParser.RULE_op_app_format);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2704;
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
		this.enterRule(_localctx, 234, bitmarkParser.RULE_op_website_format);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2706;
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
		this.enterRule(_localctx, 236, bitmarkParser.RULE_op_video_format);
		try {
			this.state = 2718;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case bitmarkParser.OpAmpVideo:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2708;
				this.match(bitmarkParser.OpAmpVideo);
				this.state = 2711;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 354, this._ctx) ) {
				case 1:
					{
					this.state = 2709;
					this.match(bitmarkParser.COLON);
					this.state = 2710;
					this.match(bitmarkParser.Video_type);
					}
					break;
				}
				}
				break;
			case bitmarkParser.OpAmpVideoLink:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2713;
				this.match(bitmarkParser.OpAmpVideoLink);
				this.state = 2716;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 355, this._ctx) ) {
				case 1:
					{
					this.state = 2714;
					this.match(bitmarkParser.COLON);
					this.state = 2715;
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
		this.enterRule(_localctx, 238, bitmarkParser.RULE_op_stillimagefilm_format);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2720;
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
		this.enterRule(_localctx, 240, bitmarkParser.RULE_articlebit);
		try {
			this.state = 2728;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case bitmarkParser.OpAmpArticle:
			case bitmarkParser.OpAmpArticleLink:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2722;
				this.op_article_format();
				this.state = 2723;
				this.match(bitmarkParser.COLON);
				this.state = 2724;
				this.url();
				this.state = 2725;
				this.match(bitmarkParser.CL);
				}
				break;
			case bitmarkParser.ArticleText:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2727;
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
		this.enterRule(_localctx, 242, bitmarkParser.RULE_documentbit);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2730;
			this.op_document_format();
			this.state = 2731;
			this.match(bitmarkParser.COLON);
			this.state = 2732;
			this.url();
			this.state = 2733;
			this.match(bitmarkParser.CL);
			this.state = 2738;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === bitmarkParser.OPATALT) {
				{
				this.state = 2734;
				this.match(bitmarkParser.OPATALT);
				this.state = 2735;
				this.words();
				this.state = 2736;
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
		this.enterRule(_localctx, 244, bitmarkParser.RULE_websitebit);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2740;
			this.op_website_format();
			this.state = 2741;
			this.match(bitmarkParser.COLON);
			this.state = 2742;
			this.url();
			this.state = 2743;
			this.match(bitmarkParser.CL);
			this.state = 2748;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === bitmarkParser.OPATALT) {
				{
				this.state = 2744;
				this.match(bitmarkParser.OPATALT);
				this.state = 2745;
				this.words();
				this.state = 2746;
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
		this.enterRule(_localctx, 246, bitmarkParser.RULE_appbit);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2750;
			this.op_app_format();
			this.state = 2751;
			this.match(bitmarkParser.COLON);
			this.state = 2754;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case bitmarkParser.URL:
				{
				this.state = 2752;
				this.url();
				}
				break;
			case bitmarkParser.TEL:
				{
				this.state = 2753;
				this.telephone();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 2756;
			this.match(bitmarkParser.CL);
			this.state = 2761;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === bitmarkParser.OPATALT) {
				{
				this.state = 2757;
				this.match(bitmarkParser.OPATALT);
				this.state = 2758;
				this.words();
				this.state = 2759;
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
		this.enterRule(_localctx, 248, bitmarkParser.RULE_stillimagefilmbit);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2763;
			this.stillimg_one();
			this.state = 2767;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 362, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 2764;
					this.resource_chained();
					}
					}
				}
				this.state = 2769;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 362, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 250, bitmarkParser.RULE_stillimg_one);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2770;
			this.op_stillimagefilm_format();
			this.state = 2771;
			this.match(bitmarkParser.COLON);
			this.state = 2775;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === bitmarkParser.S) {
				{
				{
				this.state = 2772;
				this.match(bitmarkParser.S);
				}
				}
				this.state = 2777;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 2778;
			this.url();
			this.state = 2779;
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
		this.enterRule(_localctx, 252, bitmarkParser.RULE_videobit);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2781;
			this.video_one();
			this.state = 2785;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 364, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 2782;
					this.resource_chained();
					}
					}
				}
				this.state = 2787;
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
	public video_one(): Video_oneContext {
		let _localctx: Video_oneContext = new Video_oneContext(this._ctx, this.state);
		this.enterRule(_localctx, 254, bitmarkParser.RULE_video_one);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2788;
			this.op_video_format();
			this.state = 2789;
			this.match(bitmarkParser.COLON);
			this.state = 2790;
			this.url();
			this.state = 2791;
			this.match(bitmarkParser.CL);
			this.state = 2796;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 365, this._ctx) ) {
			case 1:
				{
				this.state = 2792;
				this.match(bitmarkParser.OPATALT);
				this.state = 2793;
				this.words();
				this.state = 2794;
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
		this.enterRule(_localctx, 256, bitmarkParser.RULE_imagebit);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2798;
			this.image_one();
			this.state = 2802;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 366, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 2799;
					this.image_chained();
					}
					}
				}
				this.state = 2804;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 366, this._ctx);
			}
			this.state = 2807;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 367, this._ctx) ) {
			case 1:
				{
				this.state = 2805;
				this.match(bitmarkParser.NL);
				this.state = 2806;
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
		this.enterRule(_localctx, 258, bitmarkParser.RULE_image_one);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2809;
			this.op_image_format();
			this.state = 2810;
			this.match(bitmarkParser.COLON);
			this.state = 2814;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === bitmarkParser.S) {
				{
				{
				this.state = 2811;
				this.match(bitmarkParser.S);
				}
				}
				this.state = 2816;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 2817;
			this.url();
			this.state = 2818;
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
		this.enterRule(_localctx, 260, bitmarkParser.RULE_op_image_format);
		let _la: number;
		try {
			this.state = 2834;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case bitmarkParser.OpAmpImage:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2820;
				this.match(bitmarkParser.OpAmpImage);
				this.state = 2823;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case bitmarkParser.Image_type:
					{
					{
					this.state = 2821;
					this.match(bitmarkParser.Image_type);
					}
					}
					break;
				case bitmarkParser.DotArticleAtt:
					{
					{
					this.state = 2822;
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
				this.state = 2825;
				this.match(bitmarkParser.OpAmpImageLink);
				this.state = 2827;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === bitmarkParser.Image_type) {
					{
					this.state = 2826;
					this.match(bitmarkParser.Image_type);
					}
				}

				}
				break;
			case bitmarkParser.OpAmpImageZoom:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 2829;
				this.match(bitmarkParser.OpAmpImageZoom);
				this.state = 2831;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === bitmarkParser.Image_type) {
					{
					this.state = 2830;
					this.match(bitmarkParser.Image_type);
					}
				}

				}
				break;
			case bitmarkParser.OpAmpImageWAudio:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 2833;
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
		this.enterRule(_localctx, 262, bitmarkParser.RULE_image_chained);
		let _la: number;
		try {
			let _alt: number;
			this.state = 2853;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case bitmarkParser.AtSrc:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2836;
				this.match(bitmarkParser.AtSrc);
				this.state = 2837;
				this.match(bitmarkParser.COLON);
				this.state = 2838;
				this.url();
				this.state = 2839;
				this.match(bitmarkParser.CL);
				}
				break;
			case bitmarkParser.AtWidth:
			case bitmarkParser.AtHeight:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2841;
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
				this.state = 2842;
				this.match(bitmarkParser.COLON);
				this.state = 2843;
				this.match(bitmarkParser.NUMERIC);
				this.state = 2844;
				this.match(bitmarkParser.CL);
				}
				break;
			case bitmarkParser.OPATALT:
			case bitmarkParser.OpAtCaption:
			case bitmarkParser.OpAtLicense:
			case bitmarkParser.OpAtCopyright:
			case bitmarkParser.OpAtSearch:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 2845;
				_la = this._input.LA(1);
				if (!(((((_la - 152)) & ~0x1F) === 0 && ((1 << (_la - 152)) & ((1 << (bitmarkParser.OPATALT - 152)) | (1 << (bitmarkParser.OpAtCaption - 152)) | (1 << (bitmarkParser.OpAtLicense - 152)) | (1 << (bitmarkParser.OpAtCopyright - 152)) | (1 << (bitmarkParser.OpAtSearch - 152)))) !== 0))) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 2849;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 373, this._ctx);
				while (_alt !== 1 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1 + 1) {
						{
						{
						this.state = 2846;
						this.matchWildcard();
						}
						}
					}
					this.state = 2851;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 373, this._ctx);
				}
				this.state = 2852;
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
		this.enterRule(_localctx, 264, bitmarkParser.RULE_image_chained4match);
		let _la: number;
		try {
			let _alt: number;
			this.state = 2872;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case bitmarkParser.AtSrc:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2855;
				this.match(bitmarkParser.AtSrc);
				this.state = 2856;
				this.match(bitmarkParser.COLON);
				this.state = 2857;
				this.url();
				this.state = 2858;
				this.match(bitmarkParser.CL);
				}
				break;
			case bitmarkParser.AtWidth:
			case bitmarkParser.AtHeight:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2860;
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
				this.state = 2861;
				this.match(bitmarkParser.COLON);
				this.state = 2862;
				this.match(bitmarkParser.NUMERIC);
				this.state = 2863;
				this.match(bitmarkParser.CL);
				}
				break;
			case bitmarkParser.OPATALT:
			case bitmarkParser.OpAtCaption:
			case bitmarkParser.OpAtLicense:
			case bitmarkParser.OpAtCopyright:
			case bitmarkParser.OpAtSearch:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 2864;
				_la = this._input.LA(1);
				if (!(((((_la - 152)) & ~0x1F) === 0 && ((1 << (_la - 152)) & ((1 << (bitmarkParser.OPATALT - 152)) | (1 << (bitmarkParser.OpAtCaption - 152)) | (1 << (bitmarkParser.OpAtLicense - 152)) | (1 << (bitmarkParser.OpAtCopyright - 152)) | (1 << (bitmarkParser.OpAtSearch - 152)))) !== 0))) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 2868;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 375, this._ctx);
				while (_alt !== 1 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1 + 1) {
						{
						{
						this.state = 2865;
						this.matchWildcard();
						}
						}
					}
					this.state = 2870;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 375, this._ctx);
				}
				this.state = 2871;
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
		this.enterRule(_localctx, 266, bitmarkParser.RULE_audiobit);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2874;
			this.audio_one();
			this.state = 2878;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 377, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 2875;
					this.resource_chained();
					}
					}
				}
				this.state = 2880;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 377, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 268, bitmarkParser.RULE_audio_one);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2881;
			this.op_audio_format();
			this.state = 2882;
			this.match(bitmarkParser.COLON);
			this.state = 2883;
			this.url();
			this.state = 2884;
			this.match(bitmarkParser.CL);
			this.state = 2889;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 378, this._ctx) ) {
			case 1:
				{
				this.state = 2885;
				this.match(bitmarkParser.OPATALT);
				this.state = 2886;
				this.words();
				this.state = 2887;
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
		this.enterRule(_localctx, 270, bitmarkParser.RULE_audio_format);
		let _la: number;
		try {
			this.state = 2901;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case bitmarkParser.AmpAudio:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2891;
				this.match(bitmarkParser.AmpAudio);
				this.state = 2894;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === bitmarkParser.COLON) {
					{
					this.state = 2892;
					this.match(bitmarkParser.COLON);
					this.state = 2893;
					this.match(bitmarkParser.Audio_type);
					}
				}

				}
				break;
			case bitmarkParser.AmpAudioLink:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2896;
				this.match(bitmarkParser.AmpAudioLink);
				this.state = 2899;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === bitmarkParser.COLON) {
					{
					this.state = 2897;
					this.match(bitmarkParser.COLON);
					this.state = 2898;
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
		this.enterRule(_localctx, 272, bitmarkParser.RULE_op_audio_format);
		try {
			this.state = 2913;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case bitmarkParser.OpAmpAudio:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2903;
				this.match(bitmarkParser.OpAmpAudio);
				this.state = 2906;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 382, this._ctx) ) {
				case 1:
					{
					this.state = 2904;
					this.match(bitmarkParser.COLON);
					this.state = 2905;
					this.match(bitmarkParser.Audio_type);
					}
					break;
				}
				}
				break;
			case bitmarkParser.OpAmpAudioLink:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2908;
				this.match(bitmarkParser.OpAmpAudioLink);
				this.state = 2911;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 383, this._ctx) ) {
				case 1:
					{
					this.state = 2909;
					this.match(bitmarkParser.COLON);
					this.state = 2910;
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
		this.enterRule(_localctx, 274, bitmarkParser.RULE_resource_chained);
		let _la: number;
		try {
			let _alt: number;
			this.state = 2946;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case bitmarkParser.OPA:
			case bitmarkParser.AtSrc:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2918;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case bitmarkParser.OPA:
					{
					this.state = 2915;
					this.match(bitmarkParser.OPA);
					this.state = 2916;
					this.s_and_w();
					}
					break;
				case bitmarkParser.AtSrc:
					{
					this.state = 2917;
					this.match(bitmarkParser.AtSrc);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 2920;
				this.match(bitmarkParser.COLON);
				this.state = 2924;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 386, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 2921;
						this.match(bitmarkParser.S);
						}
						}
					}
					this.state = 2926;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 386, this._ctx);
				}
				this.state = 2929;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					this.state = 2929;
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
						this.state = 2927;
						this.s_and_w();
						}
						break;
					case bitmarkParser.NL:
						{
						this.state = 2928;
						this.match(bitmarkParser.NL);
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					}
					this.state = 2931;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la === bitmarkParser.S || ((((_la - 98)) & ~0x1F) === 0 && ((1 << (_la - 98)) & ((1 << (bitmarkParser.OPESC - 98)) | (1 << (bitmarkParser.OPS - 98)) | (1 << (bitmarkParser.COLON - 98)) | (1 << (bitmarkParser.AMP - 98)) | (1 << (bitmarkParser.Greater - 98)) | (1 << (bitmarkParser.Less - 98)) | (1 << (bitmarkParser.RightAngle - 98)) | (1 << (bitmarkParser.RightArrow - 98)) | (1 << (bitmarkParser.DBLEQ - 98)) | (1 << (bitmarkParser.QUOTE_INDEX - 98)))) !== 0) || ((((_la - 131)) & ~0x1F) === 0 && ((1 << (_la - 131)) & ((1 << (bitmarkParser.NUMERIC - 131)) | (1 << (bitmarkParser.STRING - 131)) | (1 << (bitmarkParser.NL - 131)) | (1 << (bitmarkParser.SENTENCE - 131)))) !== 0) || ((((_la - 164)) & ~0x1F) === 0 && ((1 << (_la - 164)) & ((1 << (bitmarkParser.AmpAudio - 164)) | (1 << (bitmarkParser.AmpImage - 164)) | (1 << (bitmarkParser.AmpVideo - 164)) | (1 << (bitmarkParser.AmpArticle - 164)) | (1 << (bitmarkParser.AmpDocument - 164)) | (1 << (bitmarkParser.AmpApp - 164)) | (1 << (bitmarkParser.AmpWebsite - 164)) | (1 << (bitmarkParser.AmpStillImageFilm - 164)) | (1 << (bitmarkParser.AmpAudioLink - 164)) | (1 << (bitmarkParser.AmpImageLink - 164)) | (1 << (bitmarkParser.AmpVideoLink - 164)) | (1 << (bitmarkParser.AmpArticleLink - 164)) | (1 << (bitmarkParser.AmpDocumentLink - 164)) | (1 << (bitmarkParser.AmpAppLink - 164)) | (1 << (bitmarkParser.AmpWebsiteLink - 164)) | (1 << (bitmarkParser.AmpStillImageFilmLink - 164)))) !== 0) || ((((_la - 203)) & ~0x1F) === 0 && ((1 << (_la - 203)) & ((1 << (bitmarkParser.BitmarkMinus - 203)) | (1 << (bitmarkParser.BitmarkPlus - 203)) | (1 << (bitmarkParser.URL - 203)))) !== 0));
				this.state = 2933;
				this.match(bitmarkParser.CL);
				}
				break;
			case bitmarkParser.AtWidth:
			case bitmarkParser.AtHeight:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2934;
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
				this.state = 2935;
				this.match(bitmarkParser.COLON);
				this.state = 2936;
				this.match(bitmarkParser.NUMERIC);
				this.state = 2937;
				this.match(bitmarkParser.CL);
				}
				break;
			case bitmarkParser.OPATALT:
			case bitmarkParser.OpAtCaption:
			case bitmarkParser.OpAtLicense:
			case bitmarkParser.OpAtCopyright:
			case bitmarkParser.OpAtSearch:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 2938;
				_la = this._input.LA(1);
				if (!(((((_la - 152)) & ~0x1F) === 0 && ((1 << (_la - 152)) & ((1 << (bitmarkParser.OPATALT - 152)) | (1 << (bitmarkParser.OpAtCaption - 152)) | (1 << (bitmarkParser.OpAtLicense - 152)) | (1 << (bitmarkParser.OpAtCopyright - 152)) | (1 << (bitmarkParser.OpAtSearch - 152)))) !== 0))) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 2942;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 389, this._ctx);
				while (_alt !== 1 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1 + 1) {
						{
						{
						this.state = 2939;
						this.matchWildcard();
						}
						}
					}
					this.state = 2944;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 389, this._ctx);
				}
				this.state = 2945;
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
		this.enterRule(_localctx, 276, bitmarkParser.RULE_telephone);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2948;
			this.match(bitmarkParser.TEL);
			this.state = 2949;
			this.match(bitmarkParser.PLUS);
			this.state = 2950;
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
		this.enterRule(_localctx, 278, bitmarkParser.RULE_url);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2952;
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
		this.enterRule(_localctx, 280, bitmarkParser.RULE_item);
		let _la: number;
		try {
			this.state = 2984;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 397, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2954;
				this.match(bitmarkParser.OPC);
				this.state = 2955;
				this.match(bitmarkParser.CL);
				this.state = 2963;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 392, this._ctx) ) {
				case 1:
					{
					this.state = 2959;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === bitmarkParser.S) {
						{
						{
						this.state = 2956;
						this.match(bitmarkParser.S);
						}
						}
						this.state = 2961;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					this.state = 2962;
					this.lead();
					}
					break;
				}
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2965;
				this.match(bitmarkParser.OPC);
				this.state = 2966;
				this.s_and_w();
				this.state = 2971;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (((((_la - 113)) & ~0x1F) === 0 && ((1 << (_la - 113)) & ((1 << (bitmarkParser.COLON - 113)) | (1 << (bitmarkParser.AMP - 113)) | (1 << (bitmarkParser.Greater - 113)) | (1 << (bitmarkParser.Less - 113)) | (1 << (bitmarkParser.RightAngle - 113)) | (1 << (bitmarkParser.RightArrow - 113)) | (1 << (bitmarkParser.QUOTE_INDEX - 113)) | (1 << (bitmarkParser.SENTENCE - 113)))) !== 0) || ((((_la - 164)) & ~0x1F) === 0 && ((1 << (_la - 164)) & ((1 << (bitmarkParser.AmpAudio - 164)) | (1 << (bitmarkParser.AmpImage - 164)) | (1 << (bitmarkParser.AmpVideo - 164)) | (1 << (bitmarkParser.AmpArticle - 164)) | (1 << (bitmarkParser.AmpDocument - 164)) | (1 << (bitmarkParser.AmpApp - 164)) | (1 << (bitmarkParser.AmpWebsite - 164)) | (1 << (bitmarkParser.AmpStillImageFilm - 164)) | (1 << (bitmarkParser.AmpAudioLink - 164)) | (1 << (bitmarkParser.AmpImageLink - 164)) | (1 << (bitmarkParser.AmpVideoLink - 164)) | (1 << (bitmarkParser.AmpArticleLink - 164)) | (1 << (bitmarkParser.AmpDocumentLink - 164)) | (1 << (bitmarkParser.AmpAppLink - 164)) | (1 << (bitmarkParser.AmpWebsiteLink - 164)) | (1 << (bitmarkParser.AmpStillImageFilmLink - 164)))) !== 0) || _la === bitmarkParser.BitmarkMinus || _la === bitmarkParser.BitmarkPlus) {
					{
					this.state = 2969;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case bitmarkParser.COLON:
						{
						this.state = 2967;
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
						this.state = 2968;
						this.words();
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					}
					this.state = 2973;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 2974;
				this.match(bitmarkParser.CL);
				this.state = 2982;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 396, this._ctx) ) {
				case 1:
					{
					this.state = 2978;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === bitmarkParser.S) {
						{
						{
						this.state = 2975;
						this.match(bitmarkParser.S);
						}
						}
						this.state = 2980;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					this.state = 2981;
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
		this.enterRule(_localctx, 282, bitmarkParser.RULE_lead);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2986;
			this.match(bitmarkParser.OPC);
			this.state = 2987;
			this.s_and_w();
			this.state = 2992;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 113)) & ~0x1F) === 0 && ((1 << (_la - 113)) & ((1 << (bitmarkParser.COLON - 113)) | (1 << (bitmarkParser.AMP - 113)) | (1 << (bitmarkParser.Greater - 113)) | (1 << (bitmarkParser.Less - 113)) | (1 << (bitmarkParser.RightAngle - 113)) | (1 << (bitmarkParser.RightArrow - 113)) | (1 << (bitmarkParser.QUOTE_INDEX - 113)) | (1 << (bitmarkParser.SENTENCE - 113)))) !== 0) || ((((_la - 164)) & ~0x1F) === 0 && ((1 << (_la - 164)) & ((1 << (bitmarkParser.AmpAudio - 164)) | (1 << (bitmarkParser.AmpImage - 164)) | (1 << (bitmarkParser.AmpVideo - 164)) | (1 << (bitmarkParser.AmpArticle - 164)) | (1 << (bitmarkParser.AmpDocument - 164)) | (1 << (bitmarkParser.AmpApp - 164)) | (1 << (bitmarkParser.AmpWebsite - 164)) | (1 << (bitmarkParser.AmpStillImageFilm - 164)) | (1 << (bitmarkParser.AmpAudioLink - 164)) | (1 << (bitmarkParser.AmpImageLink - 164)) | (1 << (bitmarkParser.AmpVideoLink - 164)) | (1 << (bitmarkParser.AmpArticleLink - 164)) | (1 << (bitmarkParser.AmpDocumentLink - 164)) | (1 << (bitmarkParser.AmpAppLink - 164)) | (1 << (bitmarkParser.AmpWebsiteLink - 164)) | (1 << (bitmarkParser.AmpStillImageFilmLink - 164)))) !== 0) || _la === bitmarkParser.BitmarkMinus || _la === bitmarkParser.BitmarkPlus) {
				{
				this.state = 2990;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case bitmarkParser.COLON:
					{
					this.state = 2988;
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
					this.state = 2989;
					this.words();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				this.state = 2994;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 2995;
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
		this.enterRule(_localctx, 284, bitmarkParser.RULE_angleref);
		let _la: number;
		try {
			this.state = 3007;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case bitmarkParser.OPRANGLES:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2997;
				this.match(bitmarkParser.OPRANGLES);
				this.state = 2999;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === bitmarkParser.S || ((((_la - 98)) & ~0x1F) === 0 && ((1 << (_la - 98)) & ((1 << (bitmarkParser.OPESC - 98)) | (1 << (bitmarkParser.OPS - 98)) | (1 << (bitmarkParser.COLON - 98)) | (1 << (bitmarkParser.AMP - 98)) | (1 << (bitmarkParser.Greater - 98)) | (1 << (bitmarkParser.Less - 98)) | (1 << (bitmarkParser.RightAngle - 98)) | (1 << (bitmarkParser.RightArrow - 98)) | (1 << (bitmarkParser.DBLEQ - 98)) | (1 << (bitmarkParser.QUOTE_INDEX - 98)))) !== 0) || ((((_la - 131)) & ~0x1F) === 0 && ((1 << (_la - 131)) & ((1 << (bitmarkParser.NUMERIC - 131)) | (1 << (bitmarkParser.STRING - 131)) | (1 << (bitmarkParser.SENTENCE - 131)))) !== 0) || ((((_la - 164)) & ~0x1F) === 0 && ((1 << (_la - 164)) & ((1 << (bitmarkParser.AmpAudio - 164)) | (1 << (bitmarkParser.AmpImage - 164)) | (1 << (bitmarkParser.AmpVideo - 164)) | (1 << (bitmarkParser.AmpArticle - 164)) | (1 << (bitmarkParser.AmpDocument - 164)) | (1 << (bitmarkParser.AmpApp - 164)) | (1 << (bitmarkParser.AmpWebsite - 164)) | (1 << (bitmarkParser.AmpStillImageFilm - 164)) | (1 << (bitmarkParser.AmpAudioLink - 164)) | (1 << (bitmarkParser.AmpImageLink - 164)) | (1 << (bitmarkParser.AmpVideoLink - 164)) | (1 << (bitmarkParser.AmpArticleLink - 164)) | (1 << (bitmarkParser.AmpDocumentLink - 164)) | (1 << (bitmarkParser.AmpAppLink - 164)) | (1 << (bitmarkParser.AmpWebsiteLink - 164)) | (1 << (bitmarkParser.AmpStillImageFilmLink - 164)))) !== 0) || ((((_la - 203)) & ~0x1F) === 0 && ((1 << (_la - 203)) & ((1 << (bitmarkParser.BitmarkMinus - 203)) | (1 << (bitmarkParser.BitmarkPlus - 203)) | (1 << (bitmarkParser.URL - 203)))) !== 0)) {
					{
					this.state = 2998;
					this.s_and_w();
					}
				}

				this.state = 3001;
				this.match(bitmarkParser.CL);
				}
				break;
			case bitmarkParser.OPRANGLEL:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 3002;
				this.match(bitmarkParser.OPRANGLEL);
				this.state = 3004;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === bitmarkParser.S || ((((_la - 98)) & ~0x1F) === 0 && ((1 << (_la - 98)) & ((1 << (bitmarkParser.OPESC - 98)) | (1 << (bitmarkParser.OPS - 98)) | (1 << (bitmarkParser.COLON - 98)) | (1 << (bitmarkParser.AMP - 98)) | (1 << (bitmarkParser.Greater - 98)) | (1 << (bitmarkParser.Less - 98)) | (1 << (bitmarkParser.RightAngle - 98)) | (1 << (bitmarkParser.RightArrow - 98)) | (1 << (bitmarkParser.DBLEQ - 98)) | (1 << (bitmarkParser.QUOTE_INDEX - 98)))) !== 0) || ((((_la - 131)) & ~0x1F) === 0 && ((1 << (_la - 131)) & ((1 << (bitmarkParser.NUMERIC - 131)) | (1 << (bitmarkParser.STRING - 131)) | (1 << (bitmarkParser.SENTENCE - 131)))) !== 0) || ((((_la - 164)) & ~0x1F) === 0 && ((1 << (_la - 164)) & ((1 << (bitmarkParser.AmpAudio - 164)) | (1 << (bitmarkParser.AmpImage - 164)) | (1 << (bitmarkParser.AmpVideo - 164)) | (1 << (bitmarkParser.AmpArticle - 164)) | (1 << (bitmarkParser.AmpDocument - 164)) | (1 << (bitmarkParser.AmpApp - 164)) | (1 << (bitmarkParser.AmpWebsite - 164)) | (1 << (bitmarkParser.AmpStillImageFilm - 164)) | (1 << (bitmarkParser.AmpAudioLink - 164)) | (1 << (bitmarkParser.AmpImageLink - 164)) | (1 << (bitmarkParser.AmpVideoLink - 164)) | (1 << (bitmarkParser.AmpArticleLink - 164)) | (1 << (bitmarkParser.AmpDocumentLink - 164)) | (1 << (bitmarkParser.AmpAppLink - 164)) | (1 << (bitmarkParser.AmpWebsiteLink - 164)) | (1 << (bitmarkParser.AmpStillImageFilmLink - 164)))) !== 0) || ((((_la - 203)) & ~0x1F) === 0 && ((1 << (_la - 203)) & ((1 << (bitmarkParser.BitmarkMinus - 203)) | (1 << (bitmarkParser.BitmarkPlus - 203)) | (1 << (bitmarkParser.URL - 203)))) !== 0)) {
					{
					this.state = 3003;
					this.s_and_w();
					}
				}

				this.state = 3006;
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
		this.enterRule(_localctx, 286, bitmarkParser.RULE_example);
		let _la: number;
		try {
			this.state = 3016;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case bitmarkParser.AtExamplecl:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 3009;
				this.match(bitmarkParser.AtExamplecl);
				}
				break;
			case bitmarkParser.AtExampleWithStr:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 3010;
				this.match(bitmarkParser.AtExampleWithStr);
				}
				break;
			case bitmarkParser.AtExamplecol:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 3011;
				this.match(bitmarkParser.AtExamplecol);
				this.state = 3013;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === bitmarkParser.SENTENCE) {
					{
					this.state = 3012;
					this.match(bitmarkParser.SENTENCE);
					}
				}

				this.state = 3015;
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
		this.enterRule(_localctx, 288, bitmarkParser.RULE_bracketed_text);
		let _la: number;
		try {
			let _alt: number;
			this.state = 3057;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 412, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 3018;
				this.match(bitmarkParser.BracEnclose);
				this.state = 3020;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 405, this._ctx) ) {
				case 1:
					{
					this.state = 3019;
					this.s_and_w();
					}
					break;
				}
				this.state = 3043;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === bitmarkParser.S || ((((_la - 98)) & ~0x1F) === 0 && ((1 << (_la - 98)) & ((1 << (bitmarkParser.OPESC - 98)) | (1 << (bitmarkParser.OPS - 98)) | (1 << (bitmarkParser.COLON - 98)) | (1 << (bitmarkParser.AMP - 98)) | (1 << (bitmarkParser.Greater - 98)) | (1 << (bitmarkParser.Less - 98)) | (1 << (bitmarkParser.RightAngle - 98)) | (1 << (bitmarkParser.RightArrow - 98)) | (1 << (bitmarkParser.DBLEQ - 98)) | (1 << (bitmarkParser.QUOTE_INDEX - 98)))) !== 0) || ((((_la - 131)) & ~0x1F) === 0 && ((1 << (_la - 131)) & ((1 << (bitmarkParser.NUMERIC - 131)) | (1 << (bitmarkParser.STRING - 131)) | (1 << (bitmarkParser.SENTENCE - 131)))) !== 0) || ((((_la - 164)) & ~0x1F) === 0 && ((1 << (_la - 164)) & ((1 << (bitmarkParser.AmpAudio - 164)) | (1 << (bitmarkParser.AmpImage - 164)) | (1 << (bitmarkParser.AmpVideo - 164)) | (1 << (bitmarkParser.AmpArticle - 164)) | (1 << (bitmarkParser.AmpDocument - 164)) | (1 << (bitmarkParser.AmpApp - 164)) | (1 << (bitmarkParser.AmpWebsite - 164)) | (1 << (bitmarkParser.AmpStillImageFilm - 164)) | (1 << (bitmarkParser.AmpAudioLink - 164)) | (1 << (bitmarkParser.AmpImageLink - 164)) | (1 << (bitmarkParser.AmpVideoLink - 164)) | (1 << (bitmarkParser.AmpArticleLink - 164)) | (1 << (bitmarkParser.AmpDocumentLink - 164)) | (1 << (bitmarkParser.AmpAppLink - 164)) | (1 << (bitmarkParser.AmpWebsiteLink - 164)) | (1 << (bitmarkParser.AmpStillImageFilmLink - 164)))) !== 0) || ((((_la - 203)) & ~0x1F) === 0 && ((1 << (_la - 203)) & ((1 << (bitmarkParser.BitmarkMinus - 203)) | (1 << (bitmarkParser.BitmarkPlus - 203)) | (1 << (bitmarkParser.URL - 203)))) !== 0)) {
					{
					{
					this.state = 3022;
					this.s_and_w();
					this.state = 3032;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 407, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 3023;
							this.match(bitmarkParser.NL);
							this.state = 3027;
							this._errHandler.sync(this);
							_alt = this.interpreter.adaptivePredict(this._input, 406, this._ctx);
							while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
								if (_alt === 1) {
									{
									{
									this.state = 3024;
									this.match(bitmarkParser.S);
									}
									}
								}
								this.state = 3029;
								this._errHandler.sync(this);
								_alt = this.interpreter.adaptivePredict(this._input, 406, this._ctx);
							}
							}
							}
						}
						this.state = 3034;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 407, this._ctx);
					}
					this.state = 3038;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === bitmarkParser.NL) {
						{
						{
						this.state = 3035;
						this.match(bitmarkParser.NL);
						}
						}
						this.state = 3040;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
					}
					this.state = 3045;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 3046;
				this.match(bitmarkParser.CL);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 3047;
				this.match(bitmarkParser.BracEnclose);
				this.state = 3053;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === bitmarkParser.S || ((((_la - 98)) & ~0x1F) === 0 && ((1 << (_la - 98)) & ((1 << (bitmarkParser.OPESC - 98)) | (1 << (bitmarkParser.OPS - 98)) | (1 << (bitmarkParser.COLON - 98)) | (1 << (bitmarkParser.AMP - 98)) | (1 << (bitmarkParser.Greater - 98)) | (1 << (bitmarkParser.Less - 98)) | (1 << (bitmarkParser.RightAngle - 98)) | (1 << (bitmarkParser.RightArrow - 98)) | (1 << (bitmarkParser.DBLEQ - 98)) | (1 << (bitmarkParser.QUOTE_INDEX - 98)))) !== 0) || ((((_la - 131)) & ~0x1F) === 0 && ((1 << (_la - 131)) & ((1 << (bitmarkParser.NUMERIC - 131)) | (1 << (bitmarkParser.STRING - 131)) | (1 << (bitmarkParser.NL - 131)) | (1 << (bitmarkParser.SENTENCE - 131)))) !== 0) || ((((_la - 164)) & ~0x1F) === 0 && ((1 << (_la - 164)) & ((1 << (bitmarkParser.AmpAudio - 164)) | (1 << (bitmarkParser.AmpImage - 164)) | (1 << (bitmarkParser.AmpVideo - 164)) | (1 << (bitmarkParser.AmpArticle - 164)) | (1 << (bitmarkParser.AmpDocument - 164)) | (1 << (bitmarkParser.AmpApp - 164)) | (1 << (bitmarkParser.AmpWebsite - 164)) | (1 << (bitmarkParser.AmpStillImageFilm - 164)) | (1 << (bitmarkParser.AmpAudioLink - 164)) | (1 << (bitmarkParser.AmpImageLink - 164)) | (1 << (bitmarkParser.AmpVideoLink - 164)) | (1 << (bitmarkParser.AmpArticleLink - 164)) | (1 << (bitmarkParser.AmpDocumentLink - 164)) | (1 << (bitmarkParser.AmpAppLink - 164)) | (1 << (bitmarkParser.AmpWebsiteLink - 164)) | (1 << (bitmarkParser.AmpStillImageFilmLink - 164)))) !== 0) || ((((_la - 203)) & ~0x1F) === 0 && ((1 << (_la - 203)) & ((1 << (bitmarkParser.BitmarkMinus - 203)) | (1 << (bitmarkParser.BitmarkPlus - 203)) | (1 << (bitmarkParser.URL - 203)))) !== 0)) {
					{
					this.state = 3051;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 410, this._ctx) ) {
					case 1:
						{
						this.state = 3048;
						this.s_and_w();
						}
						break;

					case 2:
						{
						this.state = 3049;
						this.match(bitmarkParser.NL);
						}
						break;

					case 3:
						{
						this.state = 3050;
						this.match(bitmarkParser.S);
						}
						break;
					}
					}
					this.state = 3055;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 3056;
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
		this.enterRule(_localctx, 290, bitmarkParser.RULE_reference);
		let _la: number;
		try {
			this.state = 3081;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 417, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 3059;
				this.match(bitmarkParser.AtReference);
				this.state = 3064;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					this.state = 3064;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 413, this._ctx) ) {
					case 1:
						{
						this.state = 3060;
						this.s_and_w();
						}
						break;

					case 2:
						{
						this.state = 3061;
						this.match(bitmarkParser.COLON);
						}
						break;

					case 3:
						{
						this.state = 3062;
						this.match(bitmarkParser.URL);
						}
						break;

					case 4:
						{
						this.state = 3063;
						this.match(bitmarkParser.NL);
						}
						break;
					}
					}
					this.state = 3066;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la === bitmarkParser.S || ((((_la - 98)) & ~0x1F) === 0 && ((1 << (_la - 98)) & ((1 << (bitmarkParser.OPESC - 98)) | (1 << (bitmarkParser.OPS - 98)) | (1 << (bitmarkParser.COLON - 98)) | (1 << (bitmarkParser.AMP - 98)) | (1 << (bitmarkParser.Greater - 98)) | (1 << (bitmarkParser.Less - 98)) | (1 << (bitmarkParser.RightAngle - 98)) | (1 << (bitmarkParser.RightArrow - 98)) | (1 << (bitmarkParser.DBLEQ - 98)) | (1 << (bitmarkParser.QUOTE_INDEX - 98)))) !== 0) || ((((_la - 131)) & ~0x1F) === 0 && ((1 << (_la - 131)) & ((1 << (bitmarkParser.NUMERIC - 131)) | (1 << (bitmarkParser.STRING - 131)) | (1 << (bitmarkParser.NL - 131)) | (1 << (bitmarkParser.SENTENCE - 131)))) !== 0) || ((((_la - 164)) & ~0x1F) === 0 && ((1 << (_la - 164)) & ((1 << (bitmarkParser.AmpAudio - 164)) | (1 << (bitmarkParser.AmpImage - 164)) | (1 << (bitmarkParser.AmpVideo - 164)) | (1 << (bitmarkParser.AmpArticle - 164)) | (1 << (bitmarkParser.AmpDocument - 164)) | (1 << (bitmarkParser.AmpApp - 164)) | (1 << (bitmarkParser.AmpWebsite - 164)) | (1 << (bitmarkParser.AmpStillImageFilm - 164)) | (1 << (bitmarkParser.AmpAudioLink - 164)) | (1 << (bitmarkParser.AmpImageLink - 164)) | (1 << (bitmarkParser.AmpVideoLink - 164)) | (1 << (bitmarkParser.AmpArticleLink - 164)) | (1 << (bitmarkParser.AmpDocumentLink - 164)) | (1 << (bitmarkParser.AmpAppLink - 164)) | (1 << (bitmarkParser.AmpWebsiteLink - 164)) | (1 << (bitmarkParser.AmpStillImageFilmLink - 164)))) !== 0) || ((((_la - 203)) & ~0x1F) === 0 && ((1 << (_la - 203)) & ((1 << (bitmarkParser.BitmarkMinus - 203)) | (1 << (bitmarkParser.BitmarkPlus - 203)) | (1 << (bitmarkParser.URL - 203)))) !== 0));
				this.state = 3068;
				this.match(bitmarkParser.CL);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 3069;
				this.match(bitmarkParser.AtReference);
				this.state = 3077;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === bitmarkParser.S || ((((_la - 98)) & ~0x1F) === 0 && ((1 << (_la - 98)) & ((1 << (bitmarkParser.OPESC - 98)) | (1 << (bitmarkParser.OPS - 98)) | (1 << (bitmarkParser.COLON - 98)) | (1 << (bitmarkParser.AMP - 98)) | (1 << (bitmarkParser.Greater - 98)) | (1 << (bitmarkParser.Less - 98)) | (1 << (bitmarkParser.RightAngle - 98)) | (1 << (bitmarkParser.RightArrow - 98)) | (1 << (bitmarkParser.DBLEQ - 98)) | (1 << (bitmarkParser.QUOTE_INDEX - 98)))) !== 0) || ((((_la - 131)) & ~0x1F) === 0 && ((1 << (_la - 131)) & ((1 << (bitmarkParser.NUMERIC - 131)) | (1 << (bitmarkParser.STRING - 131)) | (1 << (bitmarkParser.NL - 131)) | (1 << (bitmarkParser.SENTENCE - 131)))) !== 0) || ((((_la - 164)) & ~0x1F) === 0 && ((1 << (_la - 164)) & ((1 << (bitmarkParser.AmpAudio - 164)) | (1 << (bitmarkParser.AmpImage - 164)) | (1 << (bitmarkParser.AmpVideo - 164)) | (1 << (bitmarkParser.AmpArticle - 164)) | (1 << (bitmarkParser.AmpDocument - 164)) | (1 << (bitmarkParser.AmpApp - 164)) | (1 << (bitmarkParser.AmpWebsite - 164)) | (1 << (bitmarkParser.AmpStillImageFilm - 164)) | (1 << (bitmarkParser.AmpAudioLink - 164)) | (1 << (bitmarkParser.AmpImageLink - 164)) | (1 << (bitmarkParser.AmpVideoLink - 164)) | (1 << (bitmarkParser.AmpArticleLink - 164)) | (1 << (bitmarkParser.AmpDocumentLink - 164)) | (1 << (bitmarkParser.AmpAppLink - 164)) | (1 << (bitmarkParser.AmpWebsiteLink - 164)) | (1 << (bitmarkParser.AmpStillImageFilmLink - 164)))) !== 0) || ((((_la - 203)) & ~0x1F) === 0 && ((1 << (_la - 203)) & ((1 << (bitmarkParser.BitmarkMinus - 203)) | (1 << (bitmarkParser.BitmarkPlus - 203)) | (1 << (bitmarkParser.URL - 203)))) !== 0)) {
					{
					this.state = 3075;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 415, this._ctx) ) {
					case 1:
						{
						this.state = 3070;
						this.s_and_w();
						}
						break;

					case 2:
						{
						this.state = 3071;
						this.match(bitmarkParser.COLON);
						}
						break;

					case 3:
						{
						this.state = 3072;
						this.match(bitmarkParser.URL);
						}
						break;

					case 4:
						{
						this.state = 3073;
						this.match(bitmarkParser.NL);
						}
						break;

					case 5:
						{
						this.state = 3074;
						this.match(bitmarkParser.S);
						}
						break;
					}
					}
					this.state = 3079;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 3080;
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
		this.enterRule(_localctx, 292, bitmarkParser.RULE_progress);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 3083;
			this.match(bitmarkParser.AtProgress);
			this.state = 3084;
			this.s_and_w();
			this.state = 3085;
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
		this.enterRule(_localctx, 294, bitmarkParser.RULE_dateprop);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 3087;
			this.match(bitmarkParser.AtDate);
			this.state = 3091;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				this.state = 3091;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 418, this._ctx) ) {
				case 1:
					{
					this.state = 3088;
					this.s_and_w();
					}
					break;

				case 2:
					{
					this.state = 3089;
					this.match(bitmarkParser.COLON);
					}
					break;

				case 3:
					{
					this.state = 3090;
					this.match(bitmarkParser.NL);
					}
					break;
				}
				}
				this.state = 3093;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === bitmarkParser.S || ((((_la - 98)) & ~0x1F) === 0 && ((1 << (_la - 98)) & ((1 << (bitmarkParser.OPESC - 98)) | (1 << (bitmarkParser.OPS - 98)) | (1 << (bitmarkParser.COLON - 98)) | (1 << (bitmarkParser.AMP - 98)) | (1 << (bitmarkParser.Greater - 98)) | (1 << (bitmarkParser.Less - 98)) | (1 << (bitmarkParser.RightAngle - 98)) | (1 << (bitmarkParser.RightArrow - 98)) | (1 << (bitmarkParser.DBLEQ - 98)) | (1 << (bitmarkParser.QUOTE_INDEX - 98)))) !== 0) || ((((_la - 131)) & ~0x1F) === 0 && ((1 << (_la - 131)) & ((1 << (bitmarkParser.NUMERIC - 131)) | (1 << (bitmarkParser.STRING - 131)) | (1 << (bitmarkParser.NL - 131)) | (1 << (bitmarkParser.SENTENCE - 131)))) !== 0) || ((((_la - 164)) & ~0x1F) === 0 && ((1 << (_la - 164)) & ((1 << (bitmarkParser.AmpAudio - 164)) | (1 << (bitmarkParser.AmpImage - 164)) | (1 << (bitmarkParser.AmpVideo - 164)) | (1 << (bitmarkParser.AmpArticle - 164)) | (1 << (bitmarkParser.AmpDocument - 164)) | (1 << (bitmarkParser.AmpApp - 164)) | (1 << (bitmarkParser.AmpWebsite - 164)) | (1 << (bitmarkParser.AmpStillImageFilm - 164)) | (1 << (bitmarkParser.AmpAudioLink - 164)) | (1 << (bitmarkParser.AmpImageLink - 164)) | (1 << (bitmarkParser.AmpVideoLink - 164)) | (1 << (bitmarkParser.AmpArticleLink - 164)) | (1 << (bitmarkParser.AmpDocumentLink - 164)) | (1 << (bitmarkParser.AmpAppLink - 164)) | (1 << (bitmarkParser.AmpWebsiteLink - 164)) | (1 << (bitmarkParser.AmpStillImageFilmLink - 164)))) !== 0) || ((((_la - 203)) & ~0x1F) === 0 && ((1 << (_la - 203)) & ((1 << (bitmarkParser.BitmarkMinus - 203)) | (1 << (bitmarkParser.BitmarkPlus - 203)) | (1 << (bitmarkParser.URL - 203)))) !== 0));
			this.state = 3095;
			this.match(bitmarkParser.CL);
			this.state = 3097;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 420, this._ctx) ) {
			case 1:
				{
				this.state = 3096;
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
		this.enterRule(_localctx, 296, bitmarkParser.RULE_dateprop_chained);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 3099;
			this.match(bitmarkParser.AtDate);
			this.state = 3103;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				this.state = 3103;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 421, this._ctx) ) {
				case 1:
					{
					this.state = 3100;
					this.s_and_w();
					}
					break;

				case 2:
					{
					this.state = 3101;
					this.match(bitmarkParser.COLON);
					}
					break;

				case 3:
					{
					this.state = 3102;
					this.match(bitmarkParser.NL);
					}
					break;
				}
				}
				this.state = 3105;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === bitmarkParser.S || ((((_la - 98)) & ~0x1F) === 0 && ((1 << (_la - 98)) & ((1 << (bitmarkParser.OPESC - 98)) | (1 << (bitmarkParser.OPS - 98)) | (1 << (bitmarkParser.COLON - 98)) | (1 << (bitmarkParser.AMP - 98)) | (1 << (bitmarkParser.Greater - 98)) | (1 << (bitmarkParser.Less - 98)) | (1 << (bitmarkParser.RightAngle - 98)) | (1 << (bitmarkParser.RightArrow - 98)) | (1 << (bitmarkParser.DBLEQ - 98)) | (1 << (bitmarkParser.QUOTE_INDEX - 98)))) !== 0) || ((((_la - 131)) & ~0x1F) === 0 && ((1 << (_la - 131)) & ((1 << (bitmarkParser.NUMERIC - 131)) | (1 << (bitmarkParser.STRING - 131)) | (1 << (bitmarkParser.NL - 131)) | (1 << (bitmarkParser.SENTENCE - 131)))) !== 0) || ((((_la - 164)) & ~0x1F) === 0 && ((1 << (_la - 164)) & ((1 << (bitmarkParser.AmpAudio - 164)) | (1 << (bitmarkParser.AmpImage - 164)) | (1 << (bitmarkParser.AmpVideo - 164)) | (1 << (bitmarkParser.AmpArticle - 164)) | (1 << (bitmarkParser.AmpDocument - 164)) | (1 << (bitmarkParser.AmpApp - 164)) | (1 << (bitmarkParser.AmpWebsite - 164)) | (1 << (bitmarkParser.AmpStillImageFilm - 164)) | (1 << (bitmarkParser.AmpAudioLink - 164)) | (1 << (bitmarkParser.AmpImageLink - 164)) | (1 << (bitmarkParser.AmpVideoLink - 164)) | (1 << (bitmarkParser.AmpArticleLink - 164)) | (1 << (bitmarkParser.AmpDocumentLink - 164)) | (1 << (bitmarkParser.AmpAppLink - 164)) | (1 << (bitmarkParser.AmpWebsiteLink - 164)) | (1 << (bitmarkParser.AmpStillImageFilmLink - 164)))) !== 0) || ((((_la - 203)) & ~0x1F) === 0 && ((1 << (_la - 203)) & ((1 << (bitmarkParser.BitmarkMinus - 203)) | (1 << (bitmarkParser.BitmarkPlus - 203)) | (1 << (bitmarkParser.URL - 203)))) !== 0));
			this.state = 3107;
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
		this.enterRule(_localctx, 298, bitmarkParser.RULE_instruction);
		let _la: number;
		try {
			let _alt: number;
			this.state = 3143;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 429, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 3109;
				this.match(bitmarkParser.OPB);
				this.state = 3111;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 423, this._ctx) ) {
				case 1:
					{
					this.state = 3110;
					this.s_and_w();
					}
					break;
				}
				this.state = 3134;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === bitmarkParser.S || ((((_la - 98)) & ~0x1F) === 0 && ((1 << (_la - 98)) & ((1 << (bitmarkParser.OPESC - 98)) | (1 << (bitmarkParser.OPS - 98)) | (1 << (bitmarkParser.COLON - 98)) | (1 << (bitmarkParser.AMP - 98)) | (1 << (bitmarkParser.Greater - 98)) | (1 << (bitmarkParser.Less - 98)) | (1 << (bitmarkParser.RightAngle - 98)) | (1 << (bitmarkParser.RightArrow - 98)) | (1 << (bitmarkParser.DBLEQ - 98)) | (1 << (bitmarkParser.QUOTE_INDEX - 98)))) !== 0) || ((((_la - 131)) & ~0x1F) === 0 && ((1 << (_la - 131)) & ((1 << (bitmarkParser.NUMERIC - 131)) | (1 << (bitmarkParser.STRING - 131)) | (1 << (bitmarkParser.SENTENCE - 131)))) !== 0) || ((((_la - 164)) & ~0x1F) === 0 && ((1 << (_la - 164)) & ((1 << (bitmarkParser.AmpAudio - 164)) | (1 << (bitmarkParser.AmpImage - 164)) | (1 << (bitmarkParser.AmpVideo - 164)) | (1 << (bitmarkParser.AmpArticle - 164)) | (1 << (bitmarkParser.AmpDocument - 164)) | (1 << (bitmarkParser.AmpApp - 164)) | (1 << (bitmarkParser.AmpWebsite - 164)) | (1 << (bitmarkParser.AmpStillImageFilm - 164)) | (1 << (bitmarkParser.AmpAudioLink - 164)) | (1 << (bitmarkParser.AmpImageLink - 164)) | (1 << (bitmarkParser.AmpVideoLink - 164)) | (1 << (bitmarkParser.AmpArticleLink - 164)) | (1 << (bitmarkParser.AmpDocumentLink - 164)) | (1 << (bitmarkParser.AmpAppLink - 164)) | (1 << (bitmarkParser.AmpWebsiteLink - 164)) | (1 << (bitmarkParser.AmpStillImageFilmLink - 164)))) !== 0) || ((((_la - 203)) & ~0x1F) === 0 && ((1 << (_la - 203)) & ((1 << (bitmarkParser.BitmarkMinus - 203)) | (1 << (bitmarkParser.BitmarkPlus - 203)) | (1 << (bitmarkParser.URL - 203)))) !== 0)) {
					{
					{
					this.state = 3113;
					this.s_and_w();
					this.state = 3123;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 425, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 3114;
							this.match(bitmarkParser.NL);
							this.state = 3118;
							this._errHandler.sync(this);
							_alt = this.interpreter.adaptivePredict(this._input, 424, this._ctx);
							while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
								if (_alt === 1) {
									{
									{
									this.state = 3115;
									this.match(bitmarkParser.S);
									}
									}
								}
								this.state = 3120;
								this._errHandler.sync(this);
								_alt = this.interpreter.adaptivePredict(this._input, 424, this._ctx);
							}
							}
							}
						}
						this.state = 3125;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 425, this._ctx);
					}
					this.state = 3129;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === bitmarkParser.NL) {
						{
						{
						this.state = 3126;
						this.match(bitmarkParser.NL);
						}
						}
						this.state = 3131;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
					}
					this.state = 3136;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 3137;
				this.match(bitmarkParser.CL);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 3138;
				this.match(bitmarkParser.OPB);
				this.state = 3140;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === bitmarkParser.S || ((((_la - 98)) & ~0x1F) === 0 && ((1 << (_la - 98)) & ((1 << (bitmarkParser.OPESC - 98)) | (1 << (bitmarkParser.OPS - 98)) | (1 << (bitmarkParser.COLON - 98)) | (1 << (bitmarkParser.AMP - 98)) | (1 << (bitmarkParser.Greater - 98)) | (1 << (bitmarkParser.Less - 98)) | (1 << (bitmarkParser.RightAngle - 98)) | (1 << (bitmarkParser.RightArrow - 98)) | (1 << (bitmarkParser.DBLEQ - 98)) | (1 << (bitmarkParser.QUOTE_INDEX - 98)))) !== 0) || ((((_la - 131)) & ~0x1F) === 0 && ((1 << (_la - 131)) & ((1 << (bitmarkParser.NUMERIC - 131)) | (1 << (bitmarkParser.STRING - 131)) | (1 << (bitmarkParser.SENTENCE - 131)))) !== 0) || ((((_la - 164)) & ~0x1F) === 0 && ((1 << (_la - 164)) & ((1 << (bitmarkParser.AmpAudio - 164)) | (1 << (bitmarkParser.AmpImage - 164)) | (1 << (bitmarkParser.AmpVideo - 164)) | (1 << (bitmarkParser.AmpArticle - 164)) | (1 << (bitmarkParser.AmpDocument - 164)) | (1 << (bitmarkParser.AmpApp - 164)) | (1 << (bitmarkParser.AmpWebsite - 164)) | (1 << (bitmarkParser.AmpStillImageFilm - 164)) | (1 << (bitmarkParser.AmpAudioLink - 164)) | (1 << (bitmarkParser.AmpImageLink - 164)) | (1 << (bitmarkParser.AmpVideoLink - 164)) | (1 << (bitmarkParser.AmpArticleLink - 164)) | (1 << (bitmarkParser.AmpDocumentLink - 164)) | (1 << (bitmarkParser.AmpAppLink - 164)) | (1 << (bitmarkParser.AmpWebsiteLink - 164)) | (1 << (bitmarkParser.AmpStillImageFilmLink - 164)))) !== 0) || ((((_la - 203)) & ~0x1F) === 0 && ((1 << (_la - 203)) & ((1 << (bitmarkParser.BitmarkMinus - 203)) | (1 << (bitmarkParser.BitmarkPlus - 203)) | (1 << (bitmarkParser.URL - 203)))) !== 0)) {
					{
					this.state = 3139;
					this.s_and_w();
					}
				}

				this.state = 3142;
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
		this.enterRule(_localctx, 300, bitmarkParser.RULE_hint);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 3145;
			this.match(bitmarkParser.OPQ);
			this.state = 3147;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 3146;
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
				this.state = 3149;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (((((_la - 1)) & ~0x1F) === 0 && ((1 << (_la - 1)) & ((1 << (bitmarkParser.OPDOT - 1)) | (1 << (bitmarkParser.S - 1)) | (1 << (bitmarkParser.BitBook - 1)) | (1 << (bitmarkParser.BitChapter - 1)) | (1 << (bitmarkParser.BitToc - 1)) | (1 << (bitmarkParser.BitSummary - 1)) | (1 << (bitmarkParser.BitIntlink - 1)) | (1 << (bitmarkParser.BitIntRef - 1)) | (1 << (bitmarkParser.BitAlias - 1)) | (1 << (bitmarkParser.BitGroups - 1)) | (1 << (bitmarkParser.BitGroupt - 1)) | (1 << (bitmarkParser.BitPlaceholder - 1)) | (1 << (bitmarkParser.BitStatement - 1)) | (1 << (bitmarkParser.BitDetails - 1)) | (1 << (bitmarkParser.BitSampleSolution - 1)) | (1 << (bitmarkParser.BitTakeAudio - 1)) | (1 << (bitmarkParser.CLOZE - 1)) | (1 << (bitmarkParser.MATCH - 1)) | (1 << (bitmarkParser.BitArticle - 1)) | (1 << (bitmarkParser.BitPage - 1)) | (1 << (bitmarkParser.BitEssay - 1)) | (1 << (bitmarkParser.BitMessage - 1)) | (1 << (bitmarkParser.BitCorrection - 1)) | (1 << (bitmarkParser.BitMark - 1)) | (1 << (bitmarkParser.BitDocup - 1)) | (1 << (bitmarkParser.BitTakepic - 1)) | (1 << (bitmarkParser.BitRecaud - 1)) | (1 << (bitmarkParser.BitPrepnote - 1)) | (1 << (bitmarkParser.BitAssign - 1)) | (1 << (bitmarkParser.BitBotint - 1)) | (1 << (bitmarkParser.BitSelfassess - 1)) | (1 << (bitmarkParser.BitRating - 1)))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (bitmarkParser.BitSurvey - 33)) | (1 << (bitmarkParser.BitSurvey1 - 33)) | (1 << (bitmarkParser.BitSurveyanon - 33)) | (1 << (bitmarkParser.BitSurveyanon1 - 33)) | (1 << (bitmarkParser.BitVocabulary - 33)) | (1 << (bitmarkParser.BitVocabulary1 - 33)) | (1 << (bitmarkParser.BitNote - 33)) | (1 << (bitmarkParser.BitInfo - 33)) | (1 << (bitmarkParser.BitWarning - 33)) | (1 << (bitmarkParser.BitRemark - 33)) | (1 << (bitmarkParser.BitHint - 33)) | (1 << (bitmarkParser.BitHelp - 33)) | (1 << (bitmarkParser.BitDanger - 33)) | (1 << (bitmarkParser.BitBug - 33)) | (1 << (bitmarkParser.BitSidenote - 33)) | (1 << (bitmarkParser.BitStickynote - 33)) | (1 << (bitmarkParser.BitQuote - 33)) | (1 << (bitmarkParser.BitFootnote - 33)) | (1 << (bitmarkParser.BitExample - 33)) | (1 << (bitmarkParser.BitButtonCopytext - 33)) | (1 << (bitmarkParser.BitWbtContinue - 33)) | (1 << (bitmarkParser.BitLearningPathDetails - 33)) | (1 << (bitmarkParser.BitLearningPathLti - 33)) | (1 << (bitmarkParser.BitLearningPathStep - 33)) | (1 << (bitmarkParser.BitLearningPathBook - 33)) | (1 << (bitmarkParser.BitLearningPathSign - 33)) | (1 << (bitmarkParser.BitLearningPathVideoCall - 33)) | (1 << (bitmarkParser.BitLearningPathLearningGoal - 33)) | (1 << (bitmarkParser.BitLearningPathClosing - 33)) | (1 << (bitmarkParser.BitLearningPathFeedback - 33)) | (1 << (bitmarkParser.BitLearningPathBotTraining - 33)) | (1 << (bitmarkParser.BitLearningPathExternalLink - 33)))) !== 0) || ((((_la - 65)) & ~0x1F) === 0 && ((1 << (_la - 65)) & ((1 << (bitmarkParser.BitLearningPathClassroomTraining - 65)) | (1 << (bitmarkParser.BitLearningPathClassroomEvent - 65)) | (1 << (bitmarkParser.BitBotActionSend - 65)) | (1 << (bitmarkParser.BitBotActionAnnounce - 65)) | (1 << (bitmarkParser.BitBotActionSave - 65)) | (1 << (bitmarkParser.BitBotActionRemind - 65)) | (1 << (bitmarkParser.BitVendorPadletEmbed - 65)) | (1 << (bitmarkParser.BitScorm - 65)) | (1 << (bitmarkParser.BitImage - 65)) | (1 << (bitmarkParser.BitImageLink - 65)) | (1 << (bitmarkParser.BitImageZoom - 65)) | (1 << (bitmarkParser.BitAudio - 65)) | (1 << (bitmarkParser.BitAudioLink - 65)) | (1 << (bitmarkParser.BitAudioEmbed - 65)) | (1 << (bitmarkParser.BitVideo - 65)) | (1 << (bitmarkParser.BitVideoLink - 65)) | (1 << (bitmarkParser.BitVideoEmbed - 65)) | (1 << (bitmarkParser.BitStillImageFilm - 65)) | (1 << (bitmarkParser.BitStillImageFilmLink - 65)) | (1 << (bitmarkParser.BitStillImageFilmEmbed - 65)) | (1 << (bitmarkParser.BitWebsiteLink - 65)) | (1 << (bitmarkParser.BitDocument - 65)) | (1 << (bitmarkParser.BitDocumentLink - 65)) | (1 << (bitmarkParser.BitDocumentEmbed - 65)) | (1 << (bitmarkParser.BitDocumentDownload - 65)) | (1 << (bitmarkParser.BitAppLink - 65)) | (1 << (bitmarkParser.BitEditorial - 65)) | (1 << (bitmarkParser.COMMENT - 65)) | (1 << (bitmarkParser.Image_type - 65)) | (1 << (bitmarkParser.Audio_type - 65)) | (1 << (bitmarkParser.Video_type - 65)) | (1 << (bitmarkParser.OPDOLL - 65)))) !== 0) || ((((_la - 97)) & ~0x1F) === 0 && ((1 << (_la - 97)) & ((1 << (bitmarkParser.OPBUL - 97)) | (1 << (bitmarkParser.OPESC - 97)) | (1 << (bitmarkParser.OPRANGLES - 97)) | (1 << (bitmarkParser.OPRANGLEL - 97)) | (1 << (bitmarkParser.OPDANGLE - 97)) | (1 << (bitmarkParser.OPU - 97)) | (1 << (bitmarkParser.OPB - 97)) | (1 << (bitmarkParser.OPQ - 97)) | (1 << (bitmarkParser.OPA - 97)) | (1 << (bitmarkParser.OPP - 97)) | (1 << (bitmarkParser.OPM - 97)) | (1 << (bitmarkParser.OPS - 97)) | (1 << (bitmarkParser.OPR - 97)) | (1 << (bitmarkParser.OPHASH - 97)) | (1 << (bitmarkParser.OPC - 97)) | (1 << (bitmarkParser.COLON - 97)) | (1 << (bitmarkParser.AMP - 97)) | (1 << (bitmarkParser.DBLCOLON - 97)) | (1 << (bitmarkParser.PLUS - 97)) | (1 << (bitmarkParser.DotAt - 97)) | (1 << (bitmarkParser.Greater - 97)) | (1 << (bitmarkParser.Less - 97)) | (1 << (bitmarkParser.RightAngle - 97)) | (1 << (bitmarkParser.RightArrow - 97)) | (1 << (bitmarkParser.DBLEQ - 97)) | (1 << (bitmarkParser.HSPL - 97)) | (1 << (bitmarkParser.HSPL2 - 97)) | (1 << (bitmarkParser.SSPL - 97)) | (1 << (bitmarkParser.SSPL2 - 97)) | (1 << (bitmarkParser.QUOTE_INDEX - 97)) | (1 << (bitmarkParser.DCANY - 97)))) !== 0) || ((((_la - 129)) & ~0x1F) === 0 && ((1 << (_la - 129)) & ((1 << (bitmarkParser.ArticleText - 129)) | (1 << (bitmarkParser.NOTCL - 129)) | (1 << (bitmarkParser.NUMERIC - 129)) | (1 << (bitmarkParser.STRING - 129)) | (1 << (bitmarkParser.NL - 129)) | (1 << (bitmarkParser.SENTENCE - 129)) | (1 << (bitmarkParser.OPAT - 129)) | (1 << (bitmarkParser.AtProgress - 129)) | (1 << (bitmarkParser.AtReference - 129)) | (1 << (bitmarkParser.AtWidth - 129)) | (1 << (bitmarkParser.AtHeight - 129)) | (1 << (bitmarkParser.AtProgressPoints - 129)) | (1 << (bitmarkParser.AtShortanswer - 129)) | (1 << (bitmarkParser.AtLonganswer - 129)) | (1 << (bitmarkParser.AtExampleWithStr - 129)) | (1 << (bitmarkParser.AtExamplecol - 129)) | (1 << (bitmarkParser.AtExamplecl - 129)) | (1 << (bitmarkParser.AtPartialAnswerS - 129)) | (1 << (bitmarkParser.AtPartialAnswer - 129)) | (1 << (bitmarkParser.AtLabeltrue - 129)) | (1 << (bitmarkParser.AtLabelfalse - 129)) | (1 << (bitmarkParser.AtPoints - 129)) | (1 << (bitmarkParser.AtSrc - 129)) | (1 << (bitmarkParser.OPATALT - 129)) | (1 << (bitmarkParser.OPAMARK - 129)) | (1 << (bitmarkParser.ShowInIndex - 129)) | (1 << (bitmarkParser.OpAtCaption - 129)) | (1 << (bitmarkParser.OpAtLicense - 129)) | (1 << (bitmarkParser.OpAtCopyright - 129)) | (1 << (bitmarkParser.OpAtSearch - 129)) | (1 << (bitmarkParser.OpAtIsTracked - 129)) | (1 << (bitmarkParser.OpAtIsInfoOnly - 129)))) !== 0) || ((((_la - 161)) & ~0x1F) === 0 && ((1 << (_la - 161)) & ((1 << (bitmarkParser.AtDate - 161)) | (1 << (bitmarkParser.Http - 161)) | (1 << (bitmarkParser.Https - 161)) | (1 << (bitmarkParser.AmpAudio - 161)) | (1 << (bitmarkParser.AmpImage - 161)) | (1 << (bitmarkParser.AmpImageZoom - 161)) | (1 << (bitmarkParser.AmpImageWAudio - 161)) | (1 << (bitmarkParser.AmpVideo - 161)) | (1 << (bitmarkParser.AmpArticle - 161)) | (1 << (bitmarkParser.AmpDocument - 161)) | (1 << (bitmarkParser.AmpApp - 161)) | (1 << (bitmarkParser.AmpWebsite - 161)) | (1 << (bitmarkParser.AmpStillImageFilm - 161)) | (1 << (bitmarkParser.AmpPdf - 161)) | (1 << (bitmarkParser.OpAmpAudio - 161)) | (1 << (bitmarkParser.OpAmpImage - 161)) | (1 << (bitmarkParser.OpAmpImageZoom - 161)) | (1 << (bitmarkParser.OpAmpImageWAudio - 161)) | (1 << (bitmarkParser.OpAmpVideo - 161)) | (1 << (bitmarkParser.OpAmpArticle - 161)) | (1 << (bitmarkParser.OpAmpArticleAtt - 161)) | (1 << (bitmarkParser.OpAmpDocument - 161)) | (1 << (bitmarkParser.OpAmpApp - 161)) | (1 << (bitmarkParser.OpAmpWebsite - 161)) | (1 << (bitmarkParser.OpAmpStillImageFilm - 161)) | (1 << (bitmarkParser.BracEnclose - 161)) | (1 << (bitmarkParser.AmpAudioLink - 161)) | (1 << (bitmarkParser.AmpImageLink - 161)) | (1 << (bitmarkParser.AmpVideoLink - 161)) | (1 << (bitmarkParser.AmpArticleLink - 161)) | (1 << (bitmarkParser.AmpDocumentLink - 161)) | (1 << (bitmarkParser.AmpAppLink - 161)))) !== 0) || ((((_la - 193)) & ~0x1F) === 0 && ((1 << (_la - 193)) & ((1 << (bitmarkParser.AmpWebsiteLink - 193)) | (1 << (bitmarkParser.AmpStillImageFilmLink - 193)) | (1 << (bitmarkParser.OpAmpAudioLink - 193)) | (1 << (bitmarkParser.OpAmpImageLink - 193)) | (1 << (bitmarkParser.OpAmpVideoLink - 193)) | (1 << (bitmarkParser.OpAmpArticleLink - 193)) | (1 << (bitmarkParser.OpAmpDocumentLink - 193)) | (1 << (bitmarkParser.OpAmpAppLink - 193)) | (1 << (bitmarkParser.OpAmpWebsiteLink - 193)) | (1 << (bitmarkParser.OpAmpStillImageFilmLink - 193)) | (1 << (bitmarkParser.BitmarkMinus - 193)) | (1 << (bitmarkParser.BitmarkPlus - 193)) | (1 << (bitmarkParser.ColonText - 193)) | (1 << (bitmarkParser.Prosemirror - 193)) | (1 << (bitmarkParser.Placeholder - 193)) | (1 << (bitmarkParser.BASIC - 193)) | (1 << (bitmarkParser.JPG - 193)) | (1 << (bitmarkParser.PNG - 193)) | (1 << (bitmarkParser.GIF - 193)) | (1 << (bitmarkParser.SVG - 193)) | (1 << (bitmarkParser.MP2 - 193)) | (1 << (bitmarkParser.MP3 - 193)) | (1 << (bitmarkParser.MP4 - 193)) | (1 << (bitmarkParser.FLV - 193)) | (1 << (bitmarkParser.WMV - 193)) | (1 << (bitmarkParser.MPEG - 193)) | (1 << (bitmarkParser.MPG - 193)) | (1 << (bitmarkParser.TEL - 193)) | (1 << (bitmarkParser.DotArticleAtt - 193)) | (1 << (bitmarkParser.STAR - 193)) | (1 << (bitmarkParser.URL - 193)) | (1 << (bitmarkParser.LIST_LINE - 193)))) !== 0));
			this.state = 3151;
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
		this.enterRule(_localctx, 302, bitmarkParser.RULE_title);
		let _la: number;
		try {
			this.state = 3165;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 433, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 3153;
				this.match(bitmarkParser.OPHASH);
				this.state = 3156;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					this.state = 3156;
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
						this.state = 3154;
						this.s_and_w();
						}
						break;
					case bitmarkParser.NL:
						{
						this.state = 3155;
						this.match(bitmarkParser.NL);
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					}
					this.state = 3158;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la === bitmarkParser.S || ((((_la - 98)) & ~0x1F) === 0 && ((1 << (_la - 98)) & ((1 << (bitmarkParser.OPESC - 98)) | (1 << (bitmarkParser.OPS - 98)) | (1 << (bitmarkParser.COLON - 98)) | (1 << (bitmarkParser.AMP - 98)) | (1 << (bitmarkParser.Greater - 98)) | (1 << (bitmarkParser.Less - 98)) | (1 << (bitmarkParser.RightAngle - 98)) | (1 << (bitmarkParser.RightArrow - 98)) | (1 << (bitmarkParser.DBLEQ - 98)) | (1 << (bitmarkParser.QUOTE_INDEX - 98)))) !== 0) || ((((_la - 131)) & ~0x1F) === 0 && ((1 << (_la - 131)) & ((1 << (bitmarkParser.NUMERIC - 131)) | (1 << (bitmarkParser.STRING - 131)) | (1 << (bitmarkParser.NL - 131)) | (1 << (bitmarkParser.SENTENCE - 131)))) !== 0) || ((((_la - 164)) & ~0x1F) === 0 && ((1 << (_la - 164)) & ((1 << (bitmarkParser.AmpAudio - 164)) | (1 << (bitmarkParser.AmpImage - 164)) | (1 << (bitmarkParser.AmpVideo - 164)) | (1 << (bitmarkParser.AmpArticle - 164)) | (1 << (bitmarkParser.AmpDocument - 164)) | (1 << (bitmarkParser.AmpApp - 164)) | (1 << (bitmarkParser.AmpWebsite - 164)) | (1 << (bitmarkParser.AmpStillImageFilm - 164)) | (1 << (bitmarkParser.AmpAudioLink - 164)) | (1 << (bitmarkParser.AmpImageLink - 164)) | (1 << (bitmarkParser.AmpVideoLink - 164)) | (1 << (bitmarkParser.AmpArticleLink - 164)) | (1 << (bitmarkParser.AmpDocumentLink - 164)) | (1 << (bitmarkParser.AmpAppLink - 164)) | (1 << (bitmarkParser.AmpWebsiteLink - 164)) | (1 << (bitmarkParser.AmpStillImageFilmLink - 164)))) !== 0) || ((((_la - 203)) & ~0x1F) === 0 && ((1 << (_la - 203)) & ((1 << (bitmarkParser.BitmarkMinus - 203)) | (1 << (bitmarkParser.BitmarkPlus - 203)) | (1 << (bitmarkParser.URL - 203)))) !== 0));
				this.state = 3160;
				this.match(bitmarkParser.CL);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 3161;
				this.match(bitmarkParser.OPHASH);
				this.state = 3162;
				this.s_and_w();
				this.state = 3163;
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
		this.enterRule(_localctx, 304, bitmarkParser.RULE_bool_label);
		try {
			this.state = 3175;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case bitmarkParser.AtLabeltrue:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 3167;
				this.match(bitmarkParser.AtLabeltrue);
				this.state = 3168;
				this.s_and_w();
				this.state = 3169;
				this.match(bitmarkParser.CL);
				}
				break;
			case bitmarkParser.AtLabelfalse:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 3171;
				this.match(bitmarkParser.AtLabelfalse);
				this.state = 3172;
				this.s_and_w();
				this.state = 3173;
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
		this.enterRule(_localctx, 306, bitmarkParser.RULE_progress_points);
		try {
			this.state = 3186;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 435, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 3177;
				this.match(bitmarkParser.AtProgressPoints);
				this.state = 3178;
				this.match(bitmarkParser.COLON);
				this.state = 3179;
				this.match(bitmarkParser.NUMERIC);
				this.state = 3180;
				this.match(bitmarkParser.CL);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 3181;
				this.match(bitmarkParser.AtProgressPoints);
				this.state = 3182;
				this.match(bitmarkParser.COLON);
				this.state = 3183;
				this.s_and_w();
				this.state = 3184;
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
		this.enterRule(_localctx, 308, bitmarkParser.RULE_istracked);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 3188;
			this.match(bitmarkParser.OpAtIsTracked);
			this.state = 3189;
			this.s_and_w();
			this.state = 3190;
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
		this.enterRule(_localctx, 310, bitmarkParser.RULE_isinfoonly);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 3192;
			this.match(bitmarkParser.OpAtIsInfoOnly);
			this.state = 3193;
			this.s_and_w();
			this.state = 3194;
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
		this.enterRule(_localctx, 312, bitmarkParser.RULE_atdef);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 3196;
			this.atdef_();
			this.state = 3206;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 437, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 3200;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === bitmarkParser.NL) {
						{
						{
						this.state = 3197;
						this.match(bitmarkParser.NL);
						}
						}
						this.state = 3202;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					this.state = 3203;
					this.atdef_();
					}
					}
				}
				this.state = 3208;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 437, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 314, bitmarkParser.RULE_atdef_);
		let _la: number;
		try {
			let _alt: number;
			this.state = 3231;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case bitmarkParser.OPA:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 3209;
				this.match(bitmarkParser.OPA);
				this.state = 3210;
				this.s_and_w();
				this.state = 3211;
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
				this.state = 3212;
				this.s_and_w();
				this.state = 3218;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === bitmarkParser.S || ((((_la - 98)) & ~0x1F) === 0 && ((1 << (_la - 98)) & ((1 << (bitmarkParser.OPESC - 98)) | (1 << (bitmarkParser.OPS - 98)) | (1 << (bitmarkParser.COLON - 98)) | (1 << (bitmarkParser.AMP - 98)) | (1 << (bitmarkParser.Greater - 98)) | (1 << (bitmarkParser.Less - 98)) | (1 << (bitmarkParser.RightAngle - 98)) | (1 << (bitmarkParser.RightArrow - 98)) | (1 << (bitmarkParser.DBLEQ - 98)) | (1 << (bitmarkParser.QUOTE_INDEX - 98)))) !== 0) || ((((_la - 131)) & ~0x1F) === 0 && ((1 << (_la - 131)) & ((1 << (bitmarkParser.NUMERIC - 131)) | (1 << (bitmarkParser.STRING - 131)) | (1 << (bitmarkParser.NL - 131)) | (1 << (bitmarkParser.SENTENCE - 131)))) !== 0) || ((((_la - 164)) & ~0x1F) === 0 && ((1 << (_la - 164)) & ((1 << (bitmarkParser.AmpAudio - 164)) | (1 << (bitmarkParser.AmpImage - 164)) | (1 << (bitmarkParser.AmpVideo - 164)) | (1 << (bitmarkParser.AmpArticle - 164)) | (1 << (bitmarkParser.AmpDocument - 164)) | (1 << (bitmarkParser.AmpApp - 164)) | (1 << (bitmarkParser.AmpWebsite - 164)) | (1 << (bitmarkParser.AmpStillImageFilm - 164)) | (1 << (bitmarkParser.AmpAudioLink - 164)) | (1 << (bitmarkParser.AmpImageLink - 164)) | (1 << (bitmarkParser.AmpVideoLink - 164)) | (1 << (bitmarkParser.AmpArticleLink - 164)) | (1 << (bitmarkParser.AmpDocumentLink - 164)) | (1 << (bitmarkParser.AmpAppLink - 164)) | (1 << (bitmarkParser.AmpWebsiteLink - 164)) | (1 << (bitmarkParser.AmpStillImageFilmLink - 164)))) !== 0) || ((((_la - 203)) & ~0x1F) === 0 && ((1 << (_la - 203)) & ((1 << (bitmarkParser.BitmarkMinus - 203)) | (1 << (bitmarkParser.BitmarkPlus - 203)) | (1 << (bitmarkParser.URL - 203)))) !== 0)) {
					{
					this.state = 3216;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 438, this._ctx) ) {
					case 1:
						{
						this.state = 3213;
						this.match(bitmarkParser.NL);
						}
						break;

					case 2:
						{
						this.state = 3214;
						this.match(bitmarkParser.COLON);
						}
						break;

					case 3:
						{
						this.state = 3215;
						this.s_and_w();
						}
						break;
					}
					}
					this.state = 3220;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 3221;
				this.match(bitmarkParser.CL);
				}
				break;
			case bitmarkParser.OpAtCopyright:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 3223;
				this.match(bitmarkParser.OpAtCopyright);
				this.state = 3227;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 440, this._ctx);
				while (_alt !== 1 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1 + 1) {
						{
						{
						this.state = 3224;
						this.matchWildcard();
						}
						}
					}
					this.state = 3229;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 440, this._ctx);
				}
				this.state = 3230;
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
		this.enterRule(_localctx, 316, bitmarkParser.RULE_dollarans);
		let _la: number;
		try {
			this.state = 3252;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 446, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 3233;
				this.match(bitmarkParser.OPDOLL);
				this.state = 3237;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					this.state = 3237;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 442, this._ctx) ) {
					case 1:
						{
						this.state = 3234;
						this.s_and_w();
						}
						break;

					case 2:
						{
						this.state = 3235;
						this.match(bitmarkParser.COLON);
						}
						break;

					case 3:
						{
						this.state = 3236;
						this.match(bitmarkParser.NL);
						}
						break;
					}
					}
					this.state = 3239;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la === bitmarkParser.S || ((((_la - 98)) & ~0x1F) === 0 && ((1 << (_la - 98)) & ((1 << (bitmarkParser.OPESC - 98)) | (1 << (bitmarkParser.OPS - 98)) | (1 << (bitmarkParser.COLON - 98)) | (1 << (bitmarkParser.AMP - 98)) | (1 << (bitmarkParser.Greater - 98)) | (1 << (bitmarkParser.Less - 98)) | (1 << (bitmarkParser.RightAngle - 98)) | (1 << (bitmarkParser.RightArrow - 98)) | (1 << (bitmarkParser.DBLEQ - 98)) | (1 << (bitmarkParser.QUOTE_INDEX - 98)))) !== 0) || ((((_la - 131)) & ~0x1F) === 0 && ((1 << (_la - 131)) & ((1 << (bitmarkParser.NUMERIC - 131)) | (1 << (bitmarkParser.STRING - 131)) | (1 << (bitmarkParser.NL - 131)) | (1 << (bitmarkParser.SENTENCE - 131)))) !== 0) || ((((_la - 164)) & ~0x1F) === 0 && ((1 << (_la - 164)) & ((1 << (bitmarkParser.AmpAudio - 164)) | (1 << (bitmarkParser.AmpImage - 164)) | (1 << (bitmarkParser.AmpVideo - 164)) | (1 << (bitmarkParser.AmpArticle - 164)) | (1 << (bitmarkParser.AmpDocument - 164)) | (1 << (bitmarkParser.AmpApp - 164)) | (1 << (bitmarkParser.AmpWebsite - 164)) | (1 << (bitmarkParser.AmpStillImageFilm - 164)) | (1 << (bitmarkParser.AmpAudioLink - 164)) | (1 << (bitmarkParser.AmpImageLink - 164)) | (1 << (bitmarkParser.AmpVideoLink - 164)) | (1 << (bitmarkParser.AmpArticleLink - 164)) | (1 << (bitmarkParser.AmpDocumentLink - 164)) | (1 << (bitmarkParser.AmpAppLink - 164)) | (1 << (bitmarkParser.AmpWebsiteLink - 164)) | (1 << (bitmarkParser.AmpStillImageFilmLink - 164)))) !== 0) || ((((_la - 203)) & ~0x1F) === 0 && ((1 << (_la - 203)) & ((1 << (bitmarkParser.BitmarkMinus - 203)) | (1 << (bitmarkParser.BitmarkPlus - 203)) | (1 << (bitmarkParser.URL - 203)))) !== 0));
				this.state = 3241;
				this.match(bitmarkParser.CL);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 3242;
				this.match(bitmarkParser.OPDOLL);
				this.state = 3248;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === bitmarkParser.S || ((((_la - 98)) & ~0x1F) === 0 && ((1 << (_la - 98)) & ((1 << (bitmarkParser.OPESC - 98)) | (1 << (bitmarkParser.OPS - 98)) | (1 << (bitmarkParser.COLON - 98)) | (1 << (bitmarkParser.AMP - 98)) | (1 << (bitmarkParser.Greater - 98)) | (1 << (bitmarkParser.Less - 98)) | (1 << (bitmarkParser.RightAngle - 98)) | (1 << (bitmarkParser.RightArrow - 98)) | (1 << (bitmarkParser.DBLEQ - 98)) | (1 << (bitmarkParser.QUOTE_INDEX - 98)))) !== 0) || ((((_la - 131)) & ~0x1F) === 0 && ((1 << (_la - 131)) & ((1 << (bitmarkParser.NUMERIC - 131)) | (1 << (bitmarkParser.STRING - 131)) | (1 << (bitmarkParser.NL - 131)) | (1 << (bitmarkParser.SENTENCE - 131)))) !== 0) || ((((_la - 164)) & ~0x1F) === 0 && ((1 << (_la - 164)) & ((1 << (bitmarkParser.AmpAudio - 164)) | (1 << (bitmarkParser.AmpImage - 164)) | (1 << (bitmarkParser.AmpVideo - 164)) | (1 << (bitmarkParser.AmpArticle - 164)) | (1 << (bitmarkParser.AmpDocument - 164)) | (1 << (bitmarkParser.AmpApp - 164)) | (1 << (bitmarkParser.AmpWebsite - 164)) | (1 << (bitmarkParser.AmpStillImageFilm - 164)) | (1 << (bitmarkParser.AmpAudioLink - 164)) | (1 << (bitmarkParser.AmpImageLink - 164)) | (1 << (bitmarkParser.AmpVideoLink - 164)) | (1 << (bitmarkParser.AmpArticleLink - 164)) | (1 << (bitmarkParser.AmpDocumentLink - 164)) | (1 << (bitmarkParser.AmpAppLink - 164)) | (1 << (bitmarkParser.AmpWebsiteLink - 164)) | (1 << (bitmarkParser.AmpStillImageFilmLink - 164)))) !== 0) || ((((_la - 203)) & ~0x1F) === 0 && ((1 << (_la - 203)) & ((1 << (bitmarkParser.BitmarkMinus - 203)) | (1 << (bitmarkParser.BitmarkPlus - 203)) | (1 << (bitmarkParser.URL - 203)))) !== 0)) {
					{
					this.state = 3246;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 444, this._ctx) ) {
					case 1:
						{
						this.state = 3243;
						this.s_and_w();
						}
						break;

					case 2:
						{
						this.state = 3244;
						this.match(bitmarkParser.COLON);
						}
						break;

					case 3:
						{
						this.state = 3245;
						this.match(bitmarkParser.NL);
						}
						break;
					}
					}
					this.state = 3250;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 3251;
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
		this.enterRule(_localctx, 318, bitmarkParser.RULE_anchor);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 3254;
			this.match(bitmarkParser.OPDANGLE);
			this.state = 3256;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === bitmarkParser.S || ((((_la - 98)) & ~0x1F) === 0 && ((1 << (_la - 98)) & ((1 << (bitmarkParser.OPESC - 98)) | (1 << (bitmarkParser.OPS - 98)) | (1 << (bitmarkParser.COLON - 98)) | (1 << (bitmarkParser.AMP - 98)) | (1 << (bitmarkParser.Greater - 98)) | (1 << (bitmarkParser.Less - 98)) | (1 << (bitmarkParser.RightAngle - 98)) | (1 << (bitmarkParser.RightArrow - 98)) | (1 << (bitmarkParser.DBLEQ - 98)) | (1 << (bitmarkParser.QUOTE_INDEX - 98)))) !== 0) || ((((_la - 131)) & ~0x1F) === 0 && ((1 << (_la - 131)) & ((1 << (bitmarkParser.NUMERIC - 131)) | (1 << (bitmarkParser.STRING - 131)) | (1 << (bitmarkParser.SENTENCE - 131)))) !== 0) || ((((_la - 164)) & ~0x1F) === 0 && ((1 << (_la - 164)) & ((1 << (bitmarkParser.AmpAudio - 164)) | (1 << (bitmarkParser.AmpImage - 164)) | (1 << (bitmarkParser.AmpVideo - 164)) | (1 << (bitmarkParser.AmpArticle - 164)) | (1 << (bitmarkParser.AmpDocument - 164)) | (1 << (bitmarkParser.AmpApp - 164)) | (1 << (bitmarkParser.AmpWebsite - 164)) | (1 << (bitmarkParser.AmpStillImageFilm - 164)) | (1 << (bitmarkParser.AmpAudioLink - 164)) | (1 << (bitmarkParser.AmpImageLink - 164)) | (1 << (bitmarkParser.AmpVideoLink - 164)) | (1 << (bitmarkParser.AmpArticleLink - 164)) | (1 << (bitmarkParser.AmpDocumentLink - 164)) | (1 << (bitmarkParser.AmpAppLink - 164)) | (1 << (bitmarkParser.AmpWebsiteLink - 164)) | (1 << (bitmarkParser.AmpStillImageFilmLink - 164)))) !== 0) || ((((_la - 203)) & ~0x1F) === 0 && ((1 << (_la - 203)) & ((1 << (bitmarkParser.BitmarkMinus - 203)) | (1 << (bitmarkParser.BitmarkPlus - 203)) | (1 << (bitmarkParser.URL - 203)))) !== 0)) {
				{
				this.state = 3255;
				this.s_and_w();
				}
			}

			this.state = 3258;
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
		this.enterRule(_localctx, 320, bitmarkParser.RULE_lines);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 3264;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 3260;
					this.s_and_w();
					this.state = 3262;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 448, this._ctx) ) {
					case 1:
						{
						this.state = 3261;
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
				this.state = 3266;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 449, this._ctx);
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
		this.enterRule(_localctx, 322, bitmarkParser.RULE_s_and_w);
		let _la: number;
		try {
			let _alt: number;
			this.state = 3314;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 457, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 3268;
				this.match(bitmarkParser.STRING);
				this.state = 3275;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 451, this._ctx) ) {
				case 1:
					{
					this.state = 3270;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					do {
						{
						{
						this.state = 3269;
						this.match(bitmarkParser.S);
						}
						}
						this.state = 3272;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					} while (_la === bitmarkParser.S);
					this.state = 3274;
					this.match(bitmarkParser.NUMERIC);
					}
					break;
				}
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 3277;
				this.words();
				this.state = 3284;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 453, this._ctx) ) {
				case 1:
					{
					this.state = 3279;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					do {
						{
						{
						this.state = 3278;
						this.match(bitmarkParser.S);
						}
						}
						this.state = 3281;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					} while (_la === bitmarkParser.S);
					this.state = 3283;
					this.match(bitmarkParser.NUMERIC);
					}
					break;
				}
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 3286;
				this.match(bitmarkParser.NUMERIC);
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 3287;
				this.match(bitmarkParser.OPS);
				this.state = 3288;
				this.s_and_w();
				this.state = 3289;
				this.match(bitmarkParser.CL);
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 3294;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === bitmarkParser.S) {
					{
					{
					this.state = 3291;
					this.match(bitmarkParser.S);
					}
					}
					this.state = 3296;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 3297;
				this.match(bitmarkParser.COLON);
				this.state = 3301;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 455, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 3298;
						this.match(bitmarkParser.S);
						}
						}
					}
					this.state = 3303;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 455, this._ctx);
				}
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 3304;
				this.match(bitmarkParser.AMP);
				this.state = 3308;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 456, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 3305;
						this.match(bitmarkParser.S);
						}
						}
					}
					this.state = 3310;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 456, this._ctx);
				}
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 3311;
				this.match(bitmarkParser.DBLEQ);
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 3312;
				this.match(bitmarkParser.URL);
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 3313;
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
		this.enterRule(_localctx, 324, bitmarkParser.RULE_dclines);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 3316;
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
		this.enterRule(_localctx, 326, bitmarkParser.RULE_bracket_escaped);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 3318;
			this.match(bitmarkParser.OPESC);
			this.state = 3320;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 3319;
					this.s_and_w();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 3322;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 458, this._ctx);
			} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
			this.state = 3325;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 459, this._ctx) ) {
			case 1:
				{
				this.state = 3324;
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
		this.enterRule(_localctx, 328, bitmarkParser.RULE_clnsp);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 3327;
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
		this.enterRule(_localctx, 330, bitmarkParser.RULE_sspl);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 3329;
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
		this.enterRule(_localctx, 332, bitmarkParser.RULE_words);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 3358;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					this.state = 3358;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case bitmarkParser.SENTENCE:
						{
						this.state = 3331;
						this.sentence();
						}
						break;
					case bitmarkParser.AMP:
						{
						this.state = 3332;
						this.match(bitmarkParser.AMP);
						}
						break;
					case bitmarkParser.Greater:
						{
						this.state = 3333;
						this.match(bitmarkParser.Greater);
						this.state = 3334;
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
						this.state = 3335;
						this.match(bitmarkParser.Less);
						this.state = 3336;
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
						this.state = 3337;
						this.match(bitmarkParser.RightArrow);
						}
						break;
					case bitmarkParser.RightAngle:
						{
						this.state = 3338;
						this.match(bitmarkParser.RightAngle);
						}
						break;
					case bitmarkParser.AmpArticle:
						{
						this.state = 3339;
						this.match(bitmarkParser.AmpArticle);
						}
						break;
					case bitmarkParser.AmpArticleLink:
						{
						this.state = 3340;
						this.match(bitmarkParser.AmpArticleLink);
						}
						break;
					case bitmarkParser.AmpDocument:
						{
						this.state = 3341;
						this.match(bitmarkParser.AmpDocument);
						}
						break;
					case bitmarkParser.AmpDocumentLink:
						{
						this.state = 3342;
						this.match(bitmarkParser.AmpDocumentLink);
						}
						break;
					case bitmarkParser.AmpWebsite:
						{
						this.state = 3343;
						this.match(bitmarkParser.AmpWebsite);
						}
						break;
					case bitmarkParser.AmpWebsiteLink:
						{
						this.state = 3344;
						this.match(bitmarkParser.AmpWebsiteLink);
						}
						break;
					case bitmarkParser.AmpImage:
						{
						this.state = 3345;
						this.match(bitmarkParser.AmpImage);
						}
						break;
					case bitmarkParser.AmpImageLink:
						{
						this.state = 3346;
						this.match(bitmarkParser.AmpImageLink);
						}
						break;
					case bitmarkParser.AmpAudio:
						{
						this.state = 3347;
						this.match(bitmarkParser.AmpAudio);
						}
						break;
					case bitmarkParser.AmpAudioLink:
						{
						this.state = 3348;
						this.match(bitmarkParser.AmpAudioLink);
						}
						break;
					case bitmarkParser.AmpVideo:
						{
						this.state = 3349;
						this.match(bitmarkParser.AmpVideo);
						}
						break;
					case bitmarkParser.AmpVideoLink:
						{
						this.state = 3350;
						this.match(bitmarkParser.AmpVideoLink);
						}
						break;
					case bitmarkParser.AmpApp:
						{
						this.state = 3351;
						this.match(bitmarkParser.AmpApp);
						}
						break;
					case bitmarkParser.AmpAppLink:
						{
						this.state = 3352;
						this.match(bitmarkParser.AmpAppLink);
						}
						break;
					case bitmarkParser.AmpStillImageFilm:
						{
						this.state = 3353;
						this.match(bitmarkParser.AmpStillImageFilm);
						}
						break;
					case bitmarkParser.AmpStillImageFilmLink:
						{
						this.state = 3354;
						this.match(bitmarkParser.AmpStillImageFilmLink);
						}
						break;
					case bitmarkParser.BitmarkMinus:
						{
						this.state = 3355;
						this.match(bitmarkParser.BitmarkMinus);
						}
						break;
					case bitmarkParser.BitmarkPlus:
						{
						this.state = 3356;
						this.match(bitmarkParser.BitmarkPlus);
						}
						break;
					case bitmarkParser.QUOTE_INDEX:
						{
						this.state = 3357;
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
				this.state = 3360;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 461, this._ctx);
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
		this.enterRule(_localctx, 334, bitmarkParser.RULE_sp);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 3362;
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
		this.enterRule(_localctx, 336, bitmarkParser.RULE_sentence);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 3364;
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

	private static readonly _serializedATNSegments: number = 7;
	private static readonly _serializedATNSegment0: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\xE2\u0D29\x04" +
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
		"\x04\x91\t\x91\x04\x92\t\x92\x04\x93\t\x93\x04\x94\t\x94\x04\x95\t\x95" +
		"\x04\x96\t\x96\x04\x97\t\x97\x04\x98\t\x98\x04\x99\t\x99\x04\x9A\t\x9A" +
		"\x04\x9B\t\x9B\x04\x9C\t\x9C\x04\x9D\t\x9D\x04\x9E\t\x9E\x04\x9F\t\x9F" +
		"\x04\xA0\t\xA0\x04\xA1\t\xA1\x04\xA2\t\xA2\x04\xA3\t\xA3\x04\xA4\t\xA4" +
		"\x04\xA5\t\xA5\x04\xA6\t\xA6\x04\xA7\t\xA7\x04\xA8\t\xA8\x04\xA9\t\xA9" +
		"\x04\xAA\t\xAA\x03\x02\x03\x02\x07\x02\u0157\n\x02\f\x02\x0E\x02\u015A" +
		"\v\x02\x03\x02\x07\x02\u015D\n\x02\f\x02\x0E\x02\u0160\v\x02\x06\x02\u0162" +
		"\n\x02\r\x02\x0E\x02\u0163\x03\x02\x07\x02\u0167\n\x02\f\x02\x0E\x02\u016A" +
		"\v\x02\x03\x02\x03\x02\x03\x03\x03\x03\x05\x03\u0170\n\x03\x03\x04\x03" +
		"\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03" +
		"\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03" +
		"\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03" +
		"\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03" +
		"\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03" +
		"\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03" +
		"\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03" +
		"\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03" +
		"\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03" +
		"\x04\x03\x04\x03\x04\x05\x04\u01C7\n\x04\x03\x05\x03\x05\x05\x05\u01CB" +
		"\n\x05\x03\x05\x03\x05\x07\x05\u01CF\n\x05\f\x05\x0E\x05\u01D2\v\x05\x03" +
		"\x05\x06\x05\u01D5\n\x05\r\x05\x0E\x05\u01D6\x03\x06\x03\x06\x05\x06\u01DB" +
		"\n\x06\x03\x06\x03\x06\x07\x06\u01DF\n\x06\f\x06\x0E\x06\u01E2\v\x06\x03" +
		"\x06\x03\x06\x03\x06\x05\x06\u01E7\n\x06\x03\x06\x03\x06\x07\x06\u01EB" +
		"\n\x06\f\x06\x0E\x06\u01EE\v\x06\x03\x06\x07\x06\u01F1\n\x06\f\x06\x0E" +
		"\x06\u01F4\v\x06\x03\x07\x03\x07\x05\x07\u01F8\n\x07\x03\x07\x03\x07\x03" +
		"\x07\x03\x07\x03\x07\x05\x07\u01FF\n\x07\x03\b\x03\b\x03\b\x07\b\u0204" +
		"\n\b\f\b\x0E\b\u0207\v\b\x03\b\x03\b\x03\t\x03\t\x05\t\u020D\n\t\x03\t" +
		"\x03\t\x07\t\u0211\n\t\f\t\x0E\t\u0214\v\t\x03\t\x07\t\u0217\n\t\f\t\x0E" +
		"\t\u021A\v\t\x03\n\x03\n\x03\n\x03\n\x03\v\x05\v\u0221\n\v\x03\v\x03\v" +
		"\x03\v\x03\v\x03\v\x03\v\x03\v\x05\v\u022A\n\v\x07\v\u022C\n\v\f\v\x0E" +
		"\v\u022F\v\v\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x06\f\u0237\n\f\r\f\x0E" +
		"\f\u0238\x03\f\x06\f\u023C\n\f\r\f\x0E\f\u023D\x03\f\x03\f\x07\f\u0242" +
		"\n\f\f\f\x0E\f\u0245\v\f\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x06\r\u024D" +
		"\n\r\r\r\x0E\r\u024E\x03\r\x06\r\u0252\n\r\r\r\x0E\r\u0253\x03\r\x03\r" +
		"\x07\r\u0258\n\r\f\r\x0E\r\u025B\v\r\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x07" +
		"\x0E\u0261\n\x0E\f\x0E\x0E\x0E\u0264\v\x0E\x03\x0E\x03\x0E\x07\x0E\u0268" +
		"\n\x0E\f\x0E\x0E\x0E\u026B\v\x0E\x06\x0E\u026D\n\x0E\r\x0E\x0E\x0E\u026E" +
		"\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x07\x0F\u0275\n\x0F\f\x0F\x0E\x0F\u0278" +
		"\v\x0F\x03\x0F\x03\x0F\x07\x0F\u027C\n\x0F\f\x0F\x0E\x0F\u027F\v\x0F\x06" +
		"\x0F\u0281\n\x0F\r\x0F\x0E\x0F\u0282\x03\x10\x03\x10\x03\x10\x03\x10\x07" +
		"\x10\u0289\n\x10\f\x10\x0E\x10\u028C\v\x10\x03\x10\x03\x10\x07\x10\u0290" +
		"\n\x10\f\x10\x0E\x10\u0293\v\x10\x06\x10\u0295\n\x10\r\x10\x0E\x10\u0296" +
		"\x03\x11\x03\x11\x03\x11\x03\x11\x07\x11\u029D\n\x11\f\x11\x0E\x11\u02A0" +
		"\v\x11\x03\x11\x03\x11\x07\x11\u02A4\n\x11\f\x11\x0E\x11\u02A7\v\x11\x06" +
		"\x11\u02A9\n\x11\r\x11\x0E\x11\u02AA\x03\x12\x03\x12\x03\x12\x03\x12\x07" +
		"\x12\u02B1\n\x12\f\x12\x0E\x12\u02B4\v\x12\x03\x12\x03\x12\x07\x12\u02B8" +
		"\n\x12\f\x12\x0E\x12\u02BB\v\x12\x06\x12\u02BD\n\x12\r\x12\x0E\x12\u02BE" +
		"\x03\x13\x03\x13\x03\x13\x03\x13\x07\x13\u02C5\n\x13\f\x13\x0E\x13\u02C8" +
		"\v\x13\x03\x13\x03\x13\x07\x13\u02CC\n\x13\f\x13\x0E\x13\u02CF\v\x13\x06" +
		"\x13\u02D1\n\x13\r\x13\x0E\x13\u02D2\x03\x14\x03\x14\x03\x14\x03\x14\x07" +
		"\x14\u02D9\n\x14\f\x14\x0E\x14\u02DC\v\x14\x03\x14\x03\x14\x07\x14\u02E0" +
		"\n\x14\f\x14\x0E\x14\u02E3\v\x14\x06\x14\u02E5\n\x14\r\x14\x0E\x14\u02E6" +
		"\x03\x15\x03\x15\x03\x15\x03\x15\x07\x15\u02ED\n\x15\f\x15\x0E\x15\u02F0" +
		"\v\x15\x03\x15\x03\x15\x07\x15\u02F4\n\x15\f\x15\x0E\x15\u02F7\v\x15\x06" +
		"\x15\u02F9\n\x15\r\x15\x0E\x15\u02FA\x03\x16\x03\x16\x03\x16\x03\x16\x07" +
		"\x16\u0301\n\x16\f\x16\x0E\x16\u0304\v\x16\x03\x16\x03\x16\x07\x16\u0308" +
		"\n\x16\f\x16\x0E\x16\u030B\v\x16\x06\x16\u030D\n\x16\r\x16\x0E\x16\u030E" +
		"\x03\x17\x03\x17\x03\x17\x03\x17\x07\x17\u0315\n\x17\f\x17\x0E\x17\u0318" +
		"\v\x17\x03\x17\x03\x17\x07\x17\u031C\n\x17\f\x17\x0E\x17\u031F\v\x17\x06" +
		"\x17\u0321\n\x17\r\x17\x0E\x17\u0322\x03\x18\x03\x18\x03\x18\x03\x18\x07" +
		"\x18\u0329\n\x18\f\x18\x0E\x18\u032C\v\x18\x03\x18\x03\x18\x07\x18\u0330" +
		"\n\x18\f\x18\x0E\x18\u0333\v\x18\x06\x18\u0335\n\x18\r\x18\x0E\x18\u0336" +
		"\x03\x19\x03\x19\x03\x19\x03\x19\x07\x19\u033D\n\x19\f\x19\x0E\x19\u0340" +
		"\v\x19\x03\x19\x03\x19\x07\x19\u0344\n\x19\f\x19\x0E\x19\u0347\v\x19\x06" +
		"\x19\u0349\n\x19\r\x19\x0E\x19\u034A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x07" +
		"\x1A\u0351\n\x1A\f\x1A\x0E\x1A\u0354\v\x1A\x03\x1A\x03\x1A\x07\x1A\u0358" +
		"\n\x1A\f\x1A\x0E\x1A\u035B\v\x1A\x06\x1A\u035D\n\x1A\r\x1A\x0E\x1A\u035E" +
		"\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x07\x1B\u0365\n\x1B\f\x1B\x0E\x1B\u0368" +
		"\v\x1B\x03\x1B\x03\x1B\x07\x1B\u036C\n\x1B\f\x1B\x0E\x1B\u036F\v\x1B\x06" +
		"\x1B\u0371\n\x1B\r\x1B\x0E\x1B\u0372\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x07" +
		"\x1C\u0379\n\x1C\f\x1C\x0E\x1C\u037C\v\x1C\x03\x1C\x03\x1C\x07\x1C\u0380" +
		"\n\x1C\f\x1C\x0E\x1C\u0383\v\x1C\x06\x1C\u0385\n\x1C\r\x1C\x0E\x1C\u0386" +
		"\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x07\x1D\u038D\n\x1D\f\x1D\x0E\x1D\u0390" +
		"\v\x1D\x03\x1D\x03\x1D\x07\x1D\u0394\n\x1D\f\x1D\x0E\x1D\u0397\v\x1D\x06" +
		"\x1D\u0399\n\x1D\r\x1D\x0E\x1D\u039A\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03" +
		"\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03" +
		"\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03" +
		"\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x05" +
		"\x1E\u03BC\n\x1E\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x07\x1F" +
		"\u03C4\n\x1F\f\x1F\x0E\x1F\u03C7\v\x1F\x03 \x03 \x03 \x03 \x05 \u03CD" +
		"\n \x03 \x07 \u03D0\n \f \x0E \u03D3\v \x03 \x03 \x03!\x05!\u03D8\n!\x03" +
		"!\x03!\x06!\u03DC\n!\r!\x0E!\u03DD\x03!\x03!\x03\"\x05\"\u03E3\n\"\x03" +
		"\"\x03\"\x06\"\u03E7\n\"\r\"\x0E\"\u03E8\x03\"\x03\"\x03#\x05#\u03EE\n" +
		"#\x03#\x03#\x06#\u03F2\n#\r#\x0E#\u03F3\x03#\x03#\x03$\x03$\x03$\x03$" +
		"\x03$\x03$\x07$\u03FE\n$\f$\x0E$\u0401\v$\x07$\u0403\n$\f$\x0E$\u0406" +
		"\v$\x03$\x07$\u0409\n$\f$\x0E$\u040C\v$\x03$\x07$\u040F\n$\f$\x0E$\u0412" +
		"\v$\x03$\x07$\u0415\n$\f$\x0E$\u0418\v$\x03$\x03$\x07$\u041C\n$\f$\x0E" +
		"$\u041F\v$\x03$\x07$\u0422\n$\f$\x0E$\u0425\v$\x05$\u0427\n$\x03%\x03" +
		"%\x05%\u042B\n%\x03%\x03%\x05%\u042F\n%\x05%\u0431\n%\x03%\x03%\x03&\x03" +
		"&\x03\'\x03\'\x03(\x03(\x03(\x03(\x03(\x03(\x07(\u043F\n(\f(\x0E(\u0442" +
		"\v(\x07(\u0444\n(\f(\x0E(\u0447\v(\x03(\x07(\u044A\n(\f(\x0E(\u044D\v" +
		"(\x03(\x07(\u0450\n(\f(\x0E(\u0453\v(\x03(\x03(\x07(\u0457\n(\f(\x0E(" +
		"\u045A\v(\x03(\x07(\u045D\n(\f(\x0E(\u0460\v(\x05(\u0462\n(\x03)\x03)" +
		"\x07)\u0466\n)\f)\x0E)\u0469\v)\x03)\x03)\x03)\x03)\x07)\u046F\n)\f)\x0E" +
		")\u0472\v)\x03)\x03)\x05)\u0476\n)\x03*\x03*\x03*\x03*\x03*\x03*\x05*" +
		"\u047E\n*\x03*\x07*\u0481\n*\f*\x0E*\u0484\v*\x07*\u0486\n*\f*\x0E*\u0489" +
		"\v*\x03*\x07*\u048C\n*\f*\x0E*\u048F\v*\x03*\x03*\x07*\u0493\n*\f*\x0E" +
		"*\u0496\v*\x03*\x07*\u0499\n*\f*\x0E*\u049C\v*\x05*\u049E\n*\x03+\x03" +
		"+\x03+\x03+\x05+\u04A4\n+\x03+\x03+\x03+\x07+\u04A9\n+\f+\x0E+\u04AC\v" +
		"+\x03,\x03,\x07,\u04B0\n,\f,\x0E,\u04B3\v,\x03,\x03,\x07,\u04B7\n,\f," +
		"\x0E,\u04BA\v,\x03,\x03,\x03-\x03-\x05-\u04C0\n-\x03-\x03-\x03-\x03-\x07" +
		"-\u04C6\n-\f-\x0E-\u04C9\v-\x07-\u04CB\n-\f-\x0E-\u04CE\v-\x03-\x07-\u04D1" +
		"\n-\f-\x0E-\u04D4\v-\x03-\x03-\x07-\u04D8\n-\f-\x0E-\u04DB\v-\x03-\x07" +
		"-\u04DE\n-\f-\x0E-\u04E1\v-\x05-\u04E3\n-\x03.\x03.\x03.\x03.\x03.\x03" +
		".\x07.\u04EB\n.\f.\x0E.\u04EE\v.\x07.\u04F0\n.\f.\x0E.\u04F3\v.\x03.\x07" +
		".\u04F6\n.\f.\x0E.\u04F9\v.\x03.\x03.\x07.\u04FD\n.\f.\x0E.\u0500\v.\x03" +
		".\x07.\u0503\n.\f.\x0E.\u0506\v.\x05.\u0508\n.\x03/\x03/\x03/\x03/\x03" +
		"/\x03/\x07/\u0510\n/\f/\x0E/\u0513\v/\x07/\u0515\n/\f/\x0E/\u0518\v/\x03" +
		"/\x07/\u051B\n/\f/\x0E/\u051E\v/\x03/\x03/\x07/\u0522\n/\f/\x0E/\u0525" +
		"\v/\x03/\x07/\u0528\n/\f/\x0E/\u052B\v/\x05/\u052D\n/\x030\x030\x030\x03" +
		"0\x030\x030\x070\u0535\n0\f0\x0E0\u0538\v0\x070\u053A\n0\f0\x0E0\u053D" +
		"\v0\x030\x070\u0540\n0\f0\x0E0\u0543\v0\x030\x030\x070\u0547\n0\f0\x0E" +
		"0\u054A\v0\x030\x070\u054D\n0\f0\x0E0\u0550\v0\x050\u0552\n0\x031\x03" +
		"1\x031\x031\x071\u0558\n1\f1\x0E1\u055B\v1\x031\x031\x071\u055F\n1\f1" +
		"\x0E1\u0562\v1\x071\u0564\n1\f1\x0E1\u0567\v1\x031\x051\u056A\n1\x031" +
		"\x071\u056D\n1\f1\x0E1\u0570\v1\x031\x031\x071\u0574\n1\f1\x0E1\u0577" +
		"\v1\x031\x071\u057A\n1\f1\x0E1\u057D\v1\x051\u057F\n1\x032\x032\x032\x03" +
		"2\x062\u0585\n2\r2\x0E2\u0586\x032\x032\x072\u058B\n2\f2\x0E2\u058E\v" +
		"2\x072\u0590\n2\f2\x0E2\u0593\v2\x032\x052\u0596\n2\x032\x072\u0599\n" +
		"2\f2\x0E2\u059C\v2\x032\x032\x072\u05A0\n2\f2\x0E2\u05A3\v2\x032\x072" +
		"\u05A6\n2\f2\x0E2\u05A9\v2\x052\u05AB\n2\x033\x033\x033\x033\x073\u05B1" +
		"\n3\f3\x0E3\u05B4\v3\x033\x033\x073\u05B8\n3\f3\x0E3\u05BB\v3\x063\u05BD" +
		"\n3\r3\x0E3\u05BE\x034\x034\x034\x034\x074\u05C5\n4\f4\x0E4\u05C8\v4\x03" +
		"4\x034\x074\u05CC\n4\f4\x0E4\u05CF\v4\x064\u05D1\n4\r4\x0E4\u05D2\x03" +
		"5\x035\x035\x035\x075\u05D9\n5\f5\x0E5\u05DC\v5\x035\x035\x075\u05E0\n" +
		"5\f5\x0E5\u05E3\v5\x065\u05E5\n5\r5\x0E5\u05E6\x036\x036\x036\x036\x07" +
		"6\u05ED\n6\f6\x0E6\u05F0\v6\x036\x036\x076\u05F4\n6\f6\x0E6\u05F7\v6\x06" +
		"6\u05F9\n6\r6\x0E6\u05FA\x037\x037\x037\x037\x077\u0601\n7\f7\x0E7\u0604" +
		"\v7\x037\x037\x077\u0608\n7\f7\x0E7\u060B\v7\x067\u060D\n7\r7\x0E7\u060E" +
		"\x038\x038\x038\x038\x078\u0615\n8\f8\x0E8\u0618\v8\x038\x038\x078\u061C" +
		"\n8\f8\x0E8\u061F\v8\x068\u0621\n8\r8\x0E8\u0622\x039\x039\x039\x039\x07" +
		"9\u0629\n9\f9\x0E9\u062C\v9\x039\x039\x079\u0630\n9\f9\x0E9\u0633\v9\x06" +
		"9\u0635\n9\r9\x0E9\u0636\x03:\x03:\x03:\x03:\x07:\u063D\n:\f:\x0E:\u0640" +
		"\v:\x03:\x03:\x07:\u0644\n:\f:\x0E:\u0647\v:\x06:\u0649\n:\r:\x0E:\u064A" +
		"\x03;\x03;\x03;\x03;\x07;\u0651\n;\f;\x0E;\u0654\v;\x03;\x03;\x07;\u0658" +
		"\n;\f;\x0E;\u065B\v;\x06;\u065D\n;\r;\x0E;\u065E\x03<\x03<\x03<\x03<\x07" +
		"<\u0665\n<\f<\x0E<\u0668\v<\x03<\x03<\x07<\u066C\n<\f<\x0E<\u066F\v<\x06" +
		"<\u0671\n<\r<\x0E<\u0672\x03=\x03=\x03=\x03=\x07=\u0679\n=\f=\x0E=\u067C" +
		"\v=\x03=\x03=\x07=\u0680\n=\f=\x0E=\u0683\v=\x06=\u0685\n=\r=\x0E=\u0686" +
		"\x03>\x03>\x03>\x03>\x07>\u068D\n>\f>\x0E>\u0690\v>\x03>\x03>\x07>\u0694" +
		"\n>\f>\x0E>\u0697\v>\x06>\u0699\n>\r>\x0E>\u069A\x03?\x03?\x03?\x03?\x07" +
		"?\u06A1\n?\f?\x0E?\u06A4\v?\x03?\x03?\x07?\u06A8\n?\f?\x0E?\u06AB\v?\x06" +
		"?\u06AD\n?\r?\x0E?\u06AE\x03@\x03@\x03@\x03@\x07@\u06B5\n@\f@\x0E@\u06B8" +
		"\v@\x03@\x03@\x07@\u06BC\n@\f@\x0E@\u06BF\v@\x06@\u06C1\n@\r@\x0E@\u06C2" +
		"\x03A\x03A\x03A\x03A\x07A\u06C9\nA\fA\x0EA\u06CC\vA\x03A\x03A\x07A\u06D0" +
		"\nA\fA\x0EA\u06D3\vA\x06A\u06D5\nA\rA\x0EA\u06D6\x03B\x03B\x03B\x03B\x07" +
		"B\u06DD\nB\fB\x0EB\u06E0\vB\x03B\x03B\x07B\u06E4\nB\fB\x0EB\u06E7\vB\x06" +
		"B\u06E9\nB\rB\x0EB\u06EA\x03C\x03C\x03C\x03C\x07C\u06F1\nC\fC\x0EC\u06F4" +
		"\vC\x03C\x03C\x07C\u06F8\nC\fC\x0EC\u06FB\vC\x06C\u06FD\nC\rC\x0EC\u06FE" +
		"\x03D\x03D\x03D\x03D\x07D\u0705\nD\fD\x0ED\u0708\vD\x03D\x03D\x07D\u070C" +
		"\nD\fD\x0ED\u070F\vD\x06D\u0711\nD\rD\x0ED\u0712\x03E\x03E\x03E\x03E\x07" +
		"E\u0719\nE\fE\x0EE\u071C\vE\x03E\x03E\x07E\u0720\nE\fE\x0EE\u0723\vE\x06" +
		"E\u0725\nE\rE\x0EE\u0726\x03F\x03F\x03F\x03F\x07F\u072D\nF\fF\x0EF\u0730" +
		"\vF\x03F\x03F\x07F\u0734\nF\fF\x0EF\u0737\vF\x06F\u0739\nF\rF\x0EF\u073A" +
		"\x03G\x03G\x03G\x03G\x07G\u0741\nG\fG\x0EG\u0744\vG\x03G\x03G\x07G\u0748" +
		"\nG\fG\x0EG\u074B\vG\x06G\u074D\nG\rG\x0EG\u074E\x03H\x03H\x03H\x03H\x07" +
		"H\u0755\nH\fH\x0EH\u0758\vH\x03H\x03H\x07H\u075C\nH\fH\x0EH\u075F\vH\x06" +
		"H\u0761\nH\rH\x0EH\u0762\x03I\x03I\x03I\x03I\x07I\u0769\nI\fI\x0EI\u076C" +
		"\vI\x03I\x03I\x07I\u0770\nI\fI\x0EI\u0773\vI\x06I\u0775\nI\rI\x0EI\u0776" +
		"\x03J\x03J\x03J\x03J\x07J\u077D\nJ\fJ\x0EJ\u0780\vJ\x03J\x03J\x07J\u0784" +
		"\nJ\fJ\x0EJ\u0787\vJ\x06J\u0789\nJ\rJ\x0EJ\u078A\x03K\x03K\x03K\x03K\x07" +
		"K\u0791\nK\fK\x0EK\u0794\vK\x03K\x03K\x07K\u0798\nK\fK\x0EK\u079B\vK\x06" +
		"K\u079D\nK\rK\x0EK\u079E\x03L\x03L\x03L\x03L\x07L\u07A5\nL\fL\x0EL\u07A8" +
		"\vL\x03L\x03L\x07L\u07AC\nL\fL\x0EL\u07AF\vL\x06L\u07B1\nL\rL\x0EL\u07B2" +
		"\x03M\x03M\x03M\x03M\x07M\u07B9\nM\fM\x0EM\u07BC\vM\x03M\x03M\x07M\u07C0" +
		"\nM\fM\x0EM\u07C3\vM\x06M\u07C5\nM\rM\x0EM\u07C6\x03N\x03N\x03N\x03N\x07" +
		"N\u07CD\nN\fN\x0EN\u07D0\vN\x03N\x03N\x07N\u07D4\nN\fN\x0EN\u07D7\vN\x06" +
		"N\u07D9\nN\rN\x0EN\u07DA\x03O\x03O\x03O\x03O\x07O\u07E1\nO\fO\x0EO\u07E4" +
		"\vO\x03O\x03O\x07O\u07E8\nO\fO\x0EO\u07EB\vO\x06O\u07ED\nO\rO\x0EO\u07EE" +
		"\x03P\x03P\x03P\x03P\x07P\u07F5\nP\fP\x0EP\u07F8\vP\x03P\x03P\x07P\u07FC" +
		"\nP\fP\x0EP\u07FF\vP\x06P\u0801\nP\rP\x0EP\u0802\x03Q\x03Q\x03Q\x03Q\x07" +
		"Q\u0809\nQ\fQ\x0EQ\u080C\vQ\x03Q\x03Q\x07Q\u0810\nQ\fQ\x0EQ\u0813\vQ\x06" +
		"Q\u0815\nQ\rQ\x0EQ\u0816\x03R\x03R\x03R\x03R\x07R\u081D\nR\fR\x0ER\u0820" +
		"\vR\x03R\x03R\x07R\u0824\nR\fR\x0ER\u0827\vR\x06R\u0829\nR\rR\x0ER\u082A" +
		"\x03S\x03S\x03S\x03S\x07S\u0831\nS\fS\x0ES\u0834\vS\x03S\x03S\x07S\u0838" +
		"\nS\fS\x0ES\u083B\vS\x06S\u083D\nS\rS\x0ES\u083E\x03T\x03T\x03T\x03T\x07" +
		"T\u0845\nT\fT\x0ET\u0848\vT\x03T\x03T\x07T\u084C\nT\fT\x0ET\u084F\vT\x06" +
		"T\u0851\nT\rT\x0ET\u0852\x03U\x03U\x03U\x03U\x07U\u0859\nU\fU\x0EU\u085C" +
		"\vU\x03U\x03U\x07U\u0860\nU\fU\x0EU\u0863\vU\x06U\u0865\nU\rU\x0EU\u0866" +
		"\x03V\x03V\x03V\x03V\x07V\u086D\nV\fV\x0EV\u0870\vV\x03V\x03V\x07V\u0874" +
		"\nV\fV\x0EV\u0877\vV\x06V\u0879\nV\rV\x0EV\u087A\x03W\x03W\x03W\x03W\x07" +
		"W\u0881\nW\fW\x0EW\u0884\vW\x03W\x03W\x07W\u0888\nW\fW\x0EW\u088B\vW\x06" +
		"W\u088D\nW\rW\x0EW\u088E\x03X\x03X\x03X\x03X\x07X\u0895\nX\fX\x0EX\u0898" +
		"\vX\x03X\x03X\x07X\u089C\nX\fX\x0EX\u089F\vX\x06X\u08A1\nX\rX\x0EX\u08A2" +
		"\x03Y\x03Y\x03Y\x03Y\x07Y\u08A9\nY\fY\x0EY\u08AC\vY\x03Y\x03Y\x07Y\u08B0" +
		"\nY\fY\x0EY\u08B3\vY\x06Y\u08B5\nY\rY\x0EY\u08B6\x03Z\x03Z\x03Z\x03";
	private static readonly _serializedATNSegment1: string =
		"Z\x07Z\u08BD\nZ\fZ\x0EZ\u08C0\vZ\x03Z\x03Z\x07Z\u08C4\nZ\fZ\x0EZ\u08C7" +
		"\vZ\x06Z\u08C9\nZ\rZ\x0EZ\u08CA\x03[\x03[\x03[\x03[\x07[\u08D1\n[\f[\x0E" +
		"[\u08D4\v[\x03[\x03[\x07[\u08D8\n[\f[\x0E[\u08DB\v[\x06[\u08DD\n[\r[\x0E" +
		"[\u08DE\x03\\\x03\\\x03\\\x03\\\x07\\\u08E5\n\\\f\\\x0E\\\u08E8\v\\\x03" +
		"\\\x03\\\x07\\\u08EC\n\\\f\\\x0E\\\u08EF\v\\\x06\\\u08F1\n\\\r\\\x0E\\" +
		"\u08F2\x03]\x03]\x03]\x03]\x07]\u08F9\n]\f]\x0E]\u08FC\v]\x03]\x03]\x07" +
		"]\u0900\n]\f]\x0E]\u0903\v]\x06]\u0905\n]\r]\x0E]\u0906\x03^\x03^\x03" +
		"^\x03^\x03^\x03^\x03^\x03^\x07^\u0911\n^\f^\x0E^\u0914\v^\x06^\u0916\n" +
		"^\r^\x0E^\u0917\x03^\x03^\x07^\u091C\n^\f^\x0E^\u091F\v^\x03^\x03^\x07" +
		"^\u0923\n^\f^\x0E^\u0926\v^\x03^\x07^\u0929\n^\f^\x0E^\u092C\v^\x05^\u092E" +
		"\n^\x03_\x03_\x03_\x03_\x03_\x03_\x03_\x06_\u0937\n_\r_\x0E_\u0938\x03" +
		"`\x03`\x03`\x03`\x07`\u093F\n`\f`\x0E`\u0942\v`\x03`\x03`\x07`\u0946\n" +
		"`\f`\x0E`\u0949\v`\x07`\u094B\n`\f`\x0E`\u094E\v`\x03`\x03`\x03`\x03`" +
		"\x06`\u0954\n`\r`\x0E`\u0955\x06`\u0958\n`\r`\x0E`\u0959\x03`\x03`\x07" +
		"`\u095E\n`\f`\x0E`\u0961\v`\x03`\x03`\x07`\u0965\n`\f`\x0E`\u0968\v`\x03" +
		"`\x07`\u096B\n`\f`\x0E`\u096E\v`\x05`\u0970\n`\x03a\x03a\x03a\x03a\x05" +
		"a\u0976\na\x03b\x03b\x03b\x03b\x07b\u097C\nb\fb\x0Eb\u097F\vb\x03b\x03" +
		"b\x07b\u0983\nb\fb\x0Eb\u0986\vb\x07b\u0988\nb\fb\x0Eb\u098B\vb\x03b\x03" +
		"b\x05b\u098F\nb\x03b\x07b\u0992\nb\fb\x0Eb\u0995\vb\x03b\x06b\u0998\n" +
		"b\rb\x0Eb\u0999\x06b\u099C\nb\rb\x0Eb\u099D\x03b\x03b\x03c\x03c\x03c\x03" +
		"c\x07c\u09A6\nc\fc\x0Ec\u09A9\vc\x03c\x03c\x07c\u09AD\nc\fc\x0Ec\u09B0" +
		"\vc\x07c\u09B2\nc\fc\x0Ec\u09B5\vc\x03c\x03c\x03c\x03c\x06c\u09BB\nc\r" +
		"c\x0Ec\u09BC\x06c\u09BF\nc\rc\x0Ec\u09C0\x03c\x03c\x03d\x03d\x03d\x03" +
		"d\x07d\u09C9\nd\fd\x0Ed\u09CC\vd\x03d\x03d\x07d\u09D0\nd\fd\x0Ed\u09D3" +
		"\vd\x07d\u09D5\nd\fd\x0Ed\u09D8\vd\x03d\x03d\x03d\x03d\x06d\u09DE\nd\r" +
		"d\x0Ed\u09DF\x06d\u09E2\nd\rd\x0Ed\u09E3\x03d\x03d\x03e\x03e\x03e\x03" +
		"e\x07e\u09EC\ne\fe\x0Ee\u09EF\ve\x03e\x03e\x07e\u09F3\ne\fe\x0Ee\u09F6" +
		"\ve\x07e\u09F8\ne\fe\x0Ee\u09FB\ve\x03e\x03e\x03e\x03e\x06e\u0A01\ne\r" +
		"e\x0Ee\u0A02\x06e\u0A05\ne\re\x0Ee\u0A06\x03e\x03e\x03f\x03f\x03f\x03" +
		"f\x07f\u0A0F\nf\ff\x0Ef\u0A12\vf\x03f\x03f\x07f\u0A16\nf\ff\x0Ef\u0A19" +
		"\vf\x07f\u0A1B\nf\ff\x0Ef\u0A1E\vf\x03f\x03f\x03f\x07f\u0A23\nf\ff\x0E" +
		"f\u0A26\vf\x03f\x06f\u0A29\nf\rf\x0Ef\u0A2A\x06f\u0A2D\nf\rf\x0Ef\u0A2E" +
		"\x03f\x03f\x07f\u0A33\nf\ff\x0Ef\u0A36\vf\x03f\x03f\x07f\u0A3A\nf\ff\x0E" +
		"f\u0A3D\vf\x03f\x07f\u0A40\nf\ff\x0Ef\u0A43\vf\x05f\u0A45\nf\x03g\x06" +
		"g\u0A48\ng\rg\x0Eg\u0A49\x03h\x03h\x03h\x03h\x03i\x07i\u0A51\ni\fi\x0E" +
		"i\u0A54\vi\x03i\x03i\x07i\u0A58\ni\fi\x0Ei\u0A5B\vi\x03j\x03j\x03k\x03" +
		"k\x03k\x03k\x03k\x03k\x03k\x03k\x03k\x05k\u0A68\nk\x03l\x03l\x03l\x03" +
		"l\x05l\u0A6E\nl\x03m\x03m\x03m\x05m\u0A73\nm\x03m\x03m\x05m\u0A77\nm\x03" +
		"m\x03m\x05m\u0A7B\nm\x03m\x05m\u0A7E\nm\x03n\x03n\x03n\x05n\u0A83\nn\x03" +
		"o\x03o\x03p\x03p\x03q\x03q\x03r\x03r\x03s\x03s\x03t\x03t\x03u\x03u\x03" +
		"v\x03v\x03w\x03w\x03x\x03x\x03x\x05x\u0A9A\nx\x03x\x03x\x03x\x05x\u0A9F" +
		"\nx\x05x\u0AA1\nx\x03y\x03y\x03z\x03z\x03z\x03z\x03z\x03z\x05z\u0AAB\n" +
		"z\x03{\x03{\x03{\x03{\x03{\x03{\x03{\x03{\x05{\u0AB5\n{\x03|\x03|\x03" +
		"|\x03|\x03|\x03|\x03|\x03|\x05|\u0ABF\n|\x03}\x03}\x03}\x03}\x05}\u0AC5" +
		"\n}\x03}\x03}\x03}\x03}\x03}\x05}\u0ACC\n}\x03~\x03~\x07~\u0AD0\n~\f~" +
		"\x0E~\u0AD3\v~\x03\x7F\x03\x7F\x03\x7F\x07\x7F\u0AD8\n\x7F\f\x7F\x0E\x7F" +
		"\u0ADB\v\x7F\x03\x7F\x03\x7F\x03\x7F\x03\x80\x03\x80\x07\x80\u0AE2\n\x80" +
		"\f\x80\x0E\x80\u0AE5\v\x80\x03\x81\x03\x81\x03\x81\x03\x81\x03\x81\x03" +
		"\x81\x03\x81\x03\x81\x05\x81\u0AEF\n\x81\x03\x82\x03\x82\x07\x82\u0AF3" +
		"\n\x82\f\x82\x0E\x82\u0AF6\v\x82\x03\x82\x03\x82\x05\x82\u0AFA\n\x82\x03" +
		"\x83\x03\x83\x03\x83\x07\x83\u0AFF\n\x83\f\x83\x0E\x83\u0B02\v\x83\x03" +
		"\x83\x03\x83\x03\x83\x03\x84\x03\x84\x03\x84\x05\x84\u0B0A\n\x84\x03\x84" +
		"\x03\x84\x05\x84\u0B0E\n\x84\x03\x84\x03\x84\x05\x84\u0B12\n\x84\x03\x84" +
		"\x05\x84\u0B15\n\x84\x03\x85\x03\x85\x03\x85\x03\x85\x03\x85\x03\x85\x03" +
		"\x85\x03\x85\x03\x85\x03\x85\x03\x85\x07\x85\u0B22\n\x85\f\x85\x0E\x85" +
		"\u0B25\v\x85\x03\x85\x05\x85\u0B28\n\x85\x03\x86\x03\x86\x03\x86\x03\x86" +
		"\x03\x86\x03\x86\x03\x86\x03\x86\x03\x86\x03\x86\x03\x86\x07\x86\u0B35" +
		"\n\x86\f\x86\x0E\x86\u0B38\v\x86\x03\x86\x05\x86\u0B3B\n\x86\x03\x87\x03" +
		"\x87\x07\x87\u0B3F\n\x87\f\x87\x0E\x87\u0B42\v\x87\x03\x88\x03\x88\x03" +
		"\x88\x03\x88\x03\x88\x03\x88\x03\x88\x03\x88\x05\x88\u0B4C\n\x88\x03\x89" +
		"\x03\x89\x03\x89\x05\x89\u0B51\n\x89\x03\x89\x03\x89\x03\x89\x05\x89\u0B56" +
		"\n\x89\x05\x89\u0B58\n\x89\x03\x8A\x03\x8A\x03\x8A\x05\x8A\u0B5D\n\x8A" +
		"\x03\x8A\x03\x8A\x03\x8A\x05\x8A\u0B62\n\x8A\x05\x8A\u0B64\n\x8A\x03\x8B" +
		"\x03\x8B\x03\x8B\x05\x8B\u0B69\n\x8B\x03\x8B\x03\x8B\x07\x8B\u0B6D\n\x8B" +
		"\f\x8B\x0E\x8B\u0B70\v\x8B\x03\x8B\x03\x8B\x06\x8B\u0B74\n\x8B\r\x8B\x0E" +
		"\x8B\u0B75\x03\x8B\x03\x8B\x03\x8B\x03\x8B\x03\x8B\x03\x8B\x03\x8B\x07" +
		"\x8B\u0B7F\n\x8B\f\x8B\x0E\x8B\u0B82\v\x8B\x03\x8B\x05\x8B\u0B85\n\x8B" +
		"\x03\x8C\x03\x8C\x03\x8C\x03\x8C\x03\x8D\x03\x8D\x03\x8E\x03\x8E\x03\x8E" +
		"\x07\x8E\u0B90\n\x8E\f\x8E\x0E\x8E\u0B93\v\x8E\x03\x8E\x05\x8E\u0B96\n" +
		"\x8E\x03\x8E\x03\x8E\x03\x8E\x03\x8E\x07\x8E\u0B9C\n\x8E\f\x8E\x0E\x8E" +
		"\u0B9F\v\x8E\x03\x8E\x03\x8E\x07\x8E\u0BA3\n\x8E\f\x8E\x0E\x8E\u0BA6\v" +
		"\x8E\x03\x8E\x05\x8E\u0BA9\n\x8E\x05\x8E\u0BAB\n\x8E\x03\x8F\x03\x8F\x03" +
		"\x8F\x03\x8F\x07\x8F\u0BB1\n\x8F\f\x8F\x0E\x8F\u0BB4\v\x8F\x03\x8F\x03" +
		"\x8F\x03\x90\x03\x90\x05\x90\u0BBA\n\x90\x03\x90\x03\x90\x03\x90\x05\x90" +
		"\u0BBF\n\x90\x03\x90\x05\x90\u0BC2\n\x90\x03\x91\x03\x91\x03\x91\x03\x91" +
		"\x05\x91\u0BC8\n\x91\x03\x91\x05\x91\u0BCB\n\x91\x03\x92\x03\x92\x05\x92" +
		"\u0BCF\n\x92\x03\x92\x03\x92\x03\x92\x07\x92\u0BD4\n\x92\f\x92\x0E\x92" +
		"\u0BD7\v\x92\x07\x92\u0BD9\n\x92\f\x92\x0E\x92\u0BDC\v\x92\x03\x92\x07" +
		"\x92\u0BDF\n\x92\f\x92\x0E\x92\u0BE2\v\x92\x07\x92\u0BE4\n\x92\f\x92\x0E" +
		"\x92\u0BE7\v\x92\x03\x92\x03\x92\x03\x92\x03\x92\x03\x92\x07\x92\u0BEE" +
		"\n\x92\f\x92\x0E\x92\u0BF1\v\x92\x03\x92\x05\x92\u0BF4\n\x92\x03\x93\x03" +
		"\x93\x03\x93\x03\x93\x03\x93\x06\x93\u0BFB\n\x93\r\x93\x0E\x93\u0BFC\x03" +
		"\x93\x03\x93\x03\x93\x03\x93\x03\x93\x03\x93\x03\x93\x07\x93\u0C06\n\x93" +
		"\f\x93\x0E\x93\u0C09\v\x93\x03\x93\x05\x93\u0C0C\n\x93\x03\x94\x03\x94" +
		"\x03\x94\x03\x94\x03\x95\x03\x95\x03\x95\x03\x95\x06\x95\u0C16\n\x95\r" +
		"\x95\x0E\x95\u0C17\x03\x95\x03\x95\x05\x95\u0C1C\n\x95\x03\x96\x03\x96" +
		"\x03\x96\x03\x96\x06\x96\u0C22\n\x96\r\x96\x0E\x96\u0C23\x03\x96\x03\x96" +
		"\x03\x97\x03\x97\x05\x97\u0C2A\n\x97\x03\x97\x03\x97\x03\x97\x07\x97\u0C2F" +
		"\n\x97\f\x97\x0E\x97\u0C32\v\x97\x07\x97\u0C34\n\x97\f\x97\x0E\x97\u0C37" +
		"\v\x97\x03\x97\x07\x97\u0C3A\n\x97\f\x97\x0E\x97\u0C3D\v\x97\x07\x97\u0C3F" +
		"\n\x97\f\x97\x0E\x97\u0C42\v\x97\x03\x97\x03\x97\x03\x97\x05\x97\u0C47" +
		"\n\x97\x03\x97\x05\x97\u0C4A\n\x97\x03\x98\x03\x98\x06\x98\u0C4E\n\x98" +
		"\r\x98\x0E\x98\u0C4F\x03\x98\x03\x98\x03\x99\x03\x99\x03\x99\x06\x99\u0C57" +
		"\n\x99\r\x99\x0E\x99\u0C58\x03\x99\x03\x99\x03\x99\x03\x99\x03\x99\x05" +
		"\x99\u0C60\n\x99\x03\x9A\x03\x9A\x03\x9A\x03\x9A\x03\x9A\x03\x9A\x03\x9A" +
		"\x03\x9A\x05\x9A\u0C6A\n\x9A\x03\x9B\x03\x9B\x03\x9B\x03\x9B\x03\x9B\x03" +
		"\x9B\x03\x9B\x03\x9B\x03\x9B\x05\x9B\u0C75\n\x9B\x03\x9C\x03\x9C\x03\x9C" +
		"\x03\x9C\x03\x9D\x03\x9D\x03\x9D\x03\x9D\x03\x9E\x03\x9E\x07\x9E\u0C81" +
		"\n\x9E\f\x9E\x0E\x9E\u0C84\v\x9E\x03\x9E\x07\x9E\u0C87\n\x9E\f\x9E\x0E" +
		"\x9E\u0C8A\v\x9E\x03\x9F\x03\x9F\x03\x9F\x03\x9F\x03\x9F\x03\x9F\x03\x9F" +
		"\x07\x9F\u0C93\n\x9F\f\x9F\x0E\x9F\u0C96\v\x9F\x03\x9F\x03\x9F\x03\x9F" +
		"\x03\x9F\x07\x9F\u0C9C\n\x9F\f\x9F\x0E\x9F\u0C9F\v\x9F\x03\x9F\x05\x9F" +
		"\u0CA2\n\x9F\x03\xA0\x03\xA0\x03\xA0\x03\xA0\x06\xA0\u0CA8\n\xA0\r\xA0" +
		"\x0E\xA0\u0CA9\x03\xA0\x03\xA0\x03\xA0\x03\xA0\x03\xA0\x07\xA0\u0CB1\n" +
		"\xA0\f\xA0\x0E\xA0\u0CB4\v\xA0\x03\xA0\x05\xA0\u0CB7\n\xA0\x03\xA1\x03" +
		"\xA1\x05\xA1\u0CBB\n\xA1\x03\xA1\x03\xA1\x03\xA2\x03\xA2\x05\xA2\u0CC1" +
		"\n\xA2\x06\xA2\u0CC3\n\xA2\r\xA2\x0E\xA2\u0CC4\x03\xA3\x03\xA3\x06\xA3" +
		"\u0CC9\n\xA3\r\xA3\x0E\xA3\u0CCA\x03\xA3\x05\xA3\u0CCE\n\xA3\x03\xA3\x03" +
		"\xA3\x06\xA3\u0CD2\n\xA3\r\xA3\x0E\xA3\u0CD3\x03\xA3\x05\xA3\u0CD7\n\xA3" +
		"\x03\xA3\x03\xA3\x03\xA3\x03\xA3\x03\xA3\x03\xA3\x07\xA3\u0CDF\n\xA3\f" +
		"\xA3\x0E\xA3\u0CE2\v\xA3\x03\xA3\x03\xA3\x07\xA3\u0CE6\n\xA3\f\xA3\x0E" +
		"\xA3\u0CE9\v\xA3\x03\xA3\x03\xA3\x07\xA3\u0CED\n\xA3\f\xA3\x0E\xA3\u0CF0" +
		"\v\xA3\x03\xA3\x03\xA3\x03\xA3\x05\xA3\u0CF5\n\xA3\x03\xA4\x03\xA4\x03" +
		"\xA5\x03\xA5\x06\xA5\u0CFB\n\xA5\r\xA5\x0E\xA5\u0CFC\x03\xA5\x05\xA5\u0D00" +
		"\n\xA5\x03\xA6\x03\xA6\x03\xA7\x03\xA7\x03\xA8\x03\xA8\x03\xA8\x03\xA8" +
		"\x03\xA8\x03\xA8\x03\xA8\x03\xA8\x03\xA8\x03\xA8\x03\xA8\x03\xA8\x03\xA8" +
		"\x03\xA8\x03\xA8\x03\xA8\x03\xA8\x03\xA8\x03\xA8\x03\xA8\x03\xA8\x03\xA8" +
		"\x03\xA8\x03\xA8\x03\xA8\x03\xA8\x03\xA8\x06\xA8\u0D21\n\xA8\r\xA8\x0E" +
		"\xA8\u0D22\x03\xA9\x03\xA9\x03\xAA\x03\xAA\x03\xAA\b\u0467\u0470\u0B23" +
		"\u0B36\u0B80\u0C9D\x02\x02\xAB\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02" +
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
		"\u0122\x02\u0124\x02\u0126\x02\u0128\x02\u012A\x02\u012C\x02\u012E\x02" +
		"\u0130\x02\u0132\x02\u0134\x02\u0136\x02\u0138\x02\u013A\x02\u013C\x02" +
		"\u013E\x02\u0140\x02\u0142\x02\u0144\x02\u0146\x02\u0148\x02\u014A\x02" +
		"\u014C\x02\u014E\x02\u0150\x02\u0152\x02\x02\x1C\x03\x02\t\n\x03\x02\xCD" +
		"\xCE\x03\x02op\x03\x02\x94\x95\x03\x02_a\x03\x02}~\x03\x02cc\x07\x02\xAB" +
		"\xAC\xAE\xAF\xBD\xC4\xCD\xCE\xD0\xD1\x04\x02\xAA\xAA\xBF\xBF\x04\x02\xAB" +
		"\xAB\xC0\xC0\x04\x02\xAC\xAC\xC1\xC1\x04\x02\xAD\xAD\xC2\xC2\x04\x02\xAE" +
		"\xAE\xC3\xC3\x04\x02\xAF\xAF\xC4\xC4\x04\x02\xB6\xB6\xC8\xC8\x04\x02\xB8" +
		"\xB8\xC9\xC9\x04\x02\xB9\xB9\xCA\xCA\x04\x02\xBA\xBA\xCB\xCB\x04\x02\xBB" +
		"\xBB\xCC\xCC\x03\x02\x8C\x8D\x04\x02\x9A\x9A\x9D\xA0\x03\x02rr\x04\x02" +
		"ssuu\x03\x02\x7F\x80\x03\x02xx\x03\x02yy\x02\u0F08\x02\u0161\x03\x02\x02" +
		"\x02\x04\u016F\x03\x02\x02\x02\x06\u01C6\x03\x02\x02\x02\b\u01C8\x03\x02" +
		"\x02\x02\n\u01D8\x03\x02\x02\x02\f\u01F5\x03\x02\x02\x02\x0E\u0200\x03" +
		"\x02\x02\x02\x10\u020A\x03\x02\x02\x02\x12\u021B\x03\x02\x02\x02\x14\u022D" +
		"\x03\x02\x02\x02\x16\u0230\x03\x02\x02\x02\x18\u0246\x03\x02\x02\x02\x1A" +
		"\u025C\x03\x02\x02\x02\x1C\u0270\x03\x02\x02\x02\x1E\u0284\x03\x02\x02" +
		"\x02 \u0298\x03\x02\x02\x02\"\u02AC\x03\x02\x02\x02$\u02C0\x03\x02\x02" +
		"\x02&\u02D4\x03\x02\x02\x02(\u02E8\x03\x02\x02\x02*\u02FC\x03\x02\x02" +
		"\x02,\u0310\x03\x02\x02\x02.\u0324\x03\x02\x02\x020\u0338\x03\x02\x02" +
		"\x022\u034C\x03\x02\x02\x024\u0360\x03\x02\x02\x026\u0374\x03\x02\x02" +
		"\x028\u0388\x03\x02\x02\x02:\u03BB\x03\x02\x02\x02<\u03BD\x03\x02\x02" +
		"\x02>\u03C8\x03\x02\x02\x02@\u03D7\x03\x02\x02\x02B\u03E2\x03\x02\x02" +
		"\x02D\u03ED\x03\x02\x02\x02F\u03F7\x03\x02\x02\x02H\u0428\x03\x02\x02" +
		"\x02J\u0434\x03\x02\x02\x02L\u0436\x03\x02\x02\x02N\u0438\x03\x02\x02" +
		"\x02P\u0475\x03\x02\x02\x02R\u0477\x03\x02\x02\x02T\u049F\x03\x02\x02" +
		"\x02V\u04AD\x03\x02\x02\x02X\u04BD\x03\x02\x02\x02Z\u04E4\x03\x02\x02" +
		"\x02\\\u0509\x03\x02\x02\x02^\u052E\x03\x02\x02\x02`\u0553\x03\x02\x02" +
		"\x02b\u0580\x03\x02\x02\x02d\u05AC\x03\x02\x02\x02f\u05C0\x03\x02\x02" +
		"\x02h\u05D4\x03\x02\x02\x02j\u05E8\x03\x02\x02\x02l\u05FC\x03\x02\x02" +
		"\x02n\u0610\x03\x02\x02\x02p\u0624\x03\x02\x02\x02r\u0638\x03\x02\x02" +
		"\x02t\u064C\x03\x02\x02\x02v\u0660\x03\x02\x02\x02x\u0674\x03\x02\x02" +
		"\x02z\u0688\x03\x02\x02\x02|\u069C\x03\x02\x02\x02~\u06B0\x03\x02\x02" +
		"\x02\x80\u06C4\x03\x02\x02\x02\x82\u06D8\x03\x02\x02\x02\x84\u06EC\x03" +
		"\x02\x02\x02\x86\u0700\x03\x02\x02\x02\x88\u0714\x03\x02\x02\x02\x8A\u0728" +
		"\x03\x02\x02\x02\x8C\u073C\x03\x02\x02\x02\x8E\u0750\x03\x02\x02\x02\x90" +
		"\u0764\x03\x02\x02\x02\x92\u0778\x03\x02\x02\x02\x94\u078C\x03\x02\x02" +
		"\x02\x96\u07A0\x03\x02\x02\x02\x98\u07B4\x03\x02\x02\x02\x9A\u07C8\x03" +
		"\x02\x02\x02\x9C\u07DC\x03\x02\x02\x02\x9E\u07F0\x03\x02\x02\x02\xA0\u0804" +
		"\x03\x02\x02\x02\xA2\u0818\x03\x02\x02\x02\xA4\u082C\x03\x02\x02\x02\xA6" +
		"\u0840\x03\x02\x02\x02\xA8\u0854\x03\x02\x02\x02\xAA\u0868\x03\x02\x02" +
		"\x02\xAC\u087C\x03\x02\x02\x02\xAE\u0890\x03\x02\x02\x02\xB0\u08A4\x03" +
		"\x02\x02\x02\xB2\u08B8\x03\x02\x02\x02\xB4\u08CC\x03\x02\x02\x02\xB6\u08E0" +
		"\x03\x02\x02\x02\xB8\u08F4\x03\x02\x02\x02\xBA\u0908\x03\x02\x02\x02\xBC" +
		"\u0936\x03\x02\x02\x02\xBE\u093A\x03\x02\x02\x02\xC0\u0971\x03\x02\x02" +
		"\x02\xC2\u0977\x03\x02\x02\x02\xC4\u09A1\x03\x02\x02\x02\xC6\u09C4\x03" +
		"\x02\x02\x02\xC8\u09E7\x03\x02\x02\x02\xCA\u0A0A\x03\x02\x02\x02\xCC\u0A47" +
		"\x03\x02\x02\x02\xCE\u0A4B\x03\x02\x02\x02\xD0\u0A52\x03\x02\x02\x02\xD2" +
		"\u0A5C\x03\x02\x02\x02\xD4\u0A67\x03\x02\x02\x02\xD6\u0A6D\x03\x02\x02" +
		"\x02\xD8\u0A7D\x03\x02\x02\x02\xDA\u0A7F\x03\x02\x02\x02\xDC\u0A84\x03" +
		"\x02\x02\x02\xDE\u0A86\x03\x02\x02\x02\xE0\u0A88\x03\x02\x02\x02\xE2\u0A8A" +
		"\x03\x02\x02\x02\xE4\u0A8C\x03\x02\x02\x02\xE6\u0A8E\x03\x02\x02\x02\xE8" +
		"\u0A90\x03\x02\x02\x02\xEA\u0A92\x03\x02\x02\x02\xEC\u0A94\x03\x02\x02" +
		"\x02\xEE\u0AA0\x03\x02\x02\x02\xF0\u0AA2\x03\x02\x02\x02\xF2\u0AAA\x03" +
		"\x02\x02\x02\xF4\u0AAC\x03\x02\x02\x02\xF6\u0AB6\x03\x02\x02\x02\xF8\u0AC0" +
		"\x03\x02\x02\x02\xFA\u0ACD\x03\x02\x02\x02\xFC\u0AD4\x03\x02\x02\x02\xFE" +
		"\u0ADF\x03\x02\x02\x02\u0100\u0AE6\x03\x02\x02\x02\u0102\u0AF0\x03\x02" +
		"\x02\x02\u0104\u0AFB\x03\x02\x02\x02\u0106\u0B14\x03\x02\x02\x02\u0108" +
		"\u0B27\x03\x02\x02\x02\u010A\u0B3A\x03\x02\x02\x02\u010C\u0B3C\x03\x02" +
		"\x02\x02\u010E\u0B43\x03\x02\x02\x02\u0110\u0B57\x03\x02\x02\x02\u0112" +
		"\u0B63\x03\x02\x02\x02\u0114\u0B84\x03\x02\x02\x02\u0116\u0B86\x03\x02" +
		"\x02\x02\u0118\u0B8A\x03\x02\x02\x02\u011A\u0BAA\x03\x02\x02\x02\u011C" +
		"\u0BAC\x03\x02\x02\x02\u011E\u0BC1\x03\x02\x02\x02\u0120\u0BCA\x03\x02" +
		"\x02\x02\u0122\u0BF3\x03\x02\x02\x02\u0124\u0C0B\x03\x02\x02\x02\u0126" +
		"\u0C0D\x03\x02\x02\x02\u0128\u0C11\x03\x02\x02\x02\u012A\u0C1D\x03\x02" +
		"\x02\x02\u012C\u0C49\x03\x02\x02\x02\u012E\u0C4B\x03\x02\x02\x02\u0130" +
		"\u0C5F\x03\x02\x02\x02\u0132\u0C69\x03\x02\x02\x02\u0134\u0C74\x03\x02" +
		"\x02\x02\u0136\u0C76\x03\x02\x02\x02\u0138\u0C7A\x03\x02\x02\x02\u013A" +
		"\u0C7E\x03\x02\x02\x02\u013C\u0CA1\x03\x02\x02\x02\u013E\u0CB6\x03\x02" +
		"\x02\x02\u0140\u0CB8\x03\x02\x02\x02\u0142\u0CC2\x03\x02\x02\x02\u0144" +
		"\u0CF4\x03\x02\x02\x02\u0146\u0CF6\x03\x02\x02\x02\u0148\u0CF8\x03\x02" +
		"\x02\x02\u014A\u0D01\x03\x02\x02\x02\u014C\u0D03\x03\x02\x02\x02\u014E" +
		"\u0D20\x03\x02\x02\x02\u0150\u0D24\x03\x02\x02\x02\u0152\u0D26\x03\x02" +
		"\x02\x02\u0154\u015E\x05\x04\x03\x02\u0155\u0157\x07\x04\x02\x02\u0156" +
		"\u0155\x03\x02\x02\x02\u0157\u015A\x03\x02\x02\x02\u0158\u0156\x03\x02" +
		"\x02\x02\u0158\u0159\x03\x02\x02\x02\u0159\u015B\x03\x02\x02\x02\u015A" +
		"\u0158\x03\x02\x02\x02\u015B\u015D\x07\x87\x02\x02\u015C\u0158\x03\x02" +
		"\x02\x02\u015D\u0160\x03\x02\x02\x02\u015E\u015C\x03\x02\x02\x02\u015E" +
		"\u015F\x03\x02\x02\x02\u015F\u0162\x03\x02\x02\x02\u0160\u015E\x03\x02" +
		"\x02\x02\u0161\u0154\x03\x02\x02\x02\u0162\u0163\x03\x02\x02\x02\u0163" +
		"\u0161\x03\x02\x02\x02\u0163\u0164\x03\x02\x02\x02\u0164\u0168\x03\x02" +
		"\x02\x02\u0165\u0167\x07\x87\x02\x02\u0166\u0165\x03\x02\x02\x02\u0167" +
		"\u016A\x03\x02\x02\x02\u0168\u0166\x03\x02\x02\x02\u0168\u0169\x03\x02" +
		"\x02\x02\u0169\u016B\x03\x02\x02\x02\u016A\u0168\x03\x02\x02\x02\u016B" +
		"\u016C\x07\x02\x02\x03\u016C\x03\x03\x02\x02\x02\u016D\u0170\x05\x06\x04" +
		"\x02\u016E\u0170\x05\u0142\xA2\x02\u016F\u016D\x03\x02\x02\x02\u016F\u016E" +
		"\x03\x02\x02\x02\u0170\x05\x03\x02\x02\x02\u0171\u01C7\x05\b\x05\x02\u0172" +
		"\u01C7\x05\n\x06\x02\u0173\u01C7\x05\x0E\b\x02\u0174\u01C7\x05\f\x07\x02" +
		"\u0175\u01C7\x05\x12\n\x02\u0176\u01C7\x05\x10\t\x02\u0177\u01C7\x05\u0140" +
		"\xA1\x02\u0178\u01C7\x05\x16\f\x02\u0179\u01C7\x05\x18\r\x02\u017A\u01C7" +
		"\x05F$\x02\u017B\u01C7\x05N(\x02\u017C\u01C7\x05R*\x02\u017D\u01C7\x05" +
		"X-\x02\u017E\u01C7\x05\\/\x02\u017F\u01C7\x05Z.\x02\u0180\u01C7\x05^0" +
		"\x02\u0181\u01C7\x05`1\x02\u0182\u01C7\x05b2\x02\u0183\u01C7\x05d3\x02" +
		"\u0184\u01C7\x05f4\x02\u0185\u01C7\x05h5\x02\u0186\u01C7\x05j6\x02\u0187" +
		"\u01C7\x05l7\x02\u0188\u01C7\x05n8\x02\u0189\u01C7\x05p9\x02\u018A\u01C7" +
		"\x05t;\x02\u018B\u01C7\x05v<\x02\u018C\u01C7\x05x=\x02\u018D\u01C7\x05" +
		"z>\x02\u018E\u01C7\x05\x8AF\x02\u018F\u01C7\x05|?\x02\u0190\u01C7\x05" +
		"~@\x02\u0191\u01C7\x05\x80A\x02\u0192\u01C7\x05\x82B\x02\u0193\u01C7\x05" +
		"\x84C\x02\u0194\u01C7\x05\x86D\x02\u0195\u01C7\x05\x88E\x02\u0196\u01C7" +
		"\x05\x8CG\x02\u0197\u01C7\x05r:\x02\u0198\u01C7\x05\xB8]\x02\u0199\u01C7" +
		"\x05\xBA^\x02\u019A\u01C7\x05\xCAf\x02\u019B\u01C7\x05\xBE`\x02\u019C" +
		"\u01C7\x05\xC2b\x02\u019D\u01C7\x05\xC4c\x02\u019E\u01C7\x05\xC6d\x02" +
		"\u019F\u01C7\x05\xC8e\x02\u01A0\u01C7\x05\u012E\x98\x02\u01A1\u01C7\x05" +
		"\x8EH\x02\u01A2\u01C7\x05\x90I\x02\u01A3\u01C7\x05\x1A\x0E\x02\u01A4\u01C7" +
		"\x05\x1C\x0F\x02\u01A5\u01C7\x05\x1E\x10\x02\u01A6\u01C7\x05 \x11\x02" +
		"\u01A7\u01C7\x05\"\x12\x02\u01A8\u01C7\x05$\x13\x02\u01A9\u01C7\x05&\x14" +
		"\x02\u01AA\u01C7\x05(\x15\x02\u01AB\u01C7\x05*\x16\x02\u01AC\u01C7\x05" +
		",\x17\x02\u01AD\u01C7\x05.\x18\x02\u01AE\u01C7\x050\x19\x02\u01AF\u01C7" +
		"\x052\x1A\x02\u01B0\u01C7\x054\x1B\x02\u01B1\u01C7\x056\x1C\x02\u01B2" +
		"\u01C7\x058\x1D\x02\u01B3\u01C7\x05\x92J\x02\u01B4\u01C7\x05\x94K\x02" +
		"\u01B5\u01C7\x05\x96L\x02\u01B6\u01C7\x05\x98M\x02\u01B7\u01C7\x05\x9A" +
		"N\x02\u01B8\u01C7\x05\x9CO\x02\u01B9\u01C7\x05\x9EP\x02\u01BA\u01C7\x05" +
		"\xA0Q\x02\u01BB\u01C7\x05\xA2R\x02\u01BC\u01C7\x05\xA4S\x02\u01BD\u01C7" +
		"\x05\xA6T\x02\u01BE\u01C7\x05\xA8U\x02\u01BF\u01C7\x05\xACW\x02\u01C0" +
		"\u01C7\x05\xAEX\x02\u01C1\u01C7\x05\xB0Y\x02\u01C2\u01C7\x05\xB2Z\x02" +
		"\u01C3\u01C7\x05\xAAV\x02\u01C4\u01C7\x05\xB4[\x02\u01C5\u01C7\x05\xB6" +
		"\\\x02\u01C6\u0171\x03\x02\x02\x02\u01C6\u0172\x03\x02\x02\x02\u01C6\u0173" +
		"\x03\x02\x02\x02\u01C6\u0174\x03\x02\x02\x02\u01C6\u0175\x03\x02\x02\x02" +
		"\u01C6\u0176\x03\x02\x02\x02\u01C6\u0177\x03\x02\x02\x02\u01C6\u0178\x03" +
		"\x02\x02\x02\u01C6\u0179\x03\x02\x02\x02\u01C6\u017A\x03\x02\x02\x02\u01C6" +
		"\u017B\x03\x02\x02\x02\u01C6\u017C\x03\x02\x02\x02\u01C6\u017D\x03\x02" +
		"\x02\x02\u01C6\u017E\x03\x02\x02\x02\u01C6\u017F\x03\x02\x02\x02\u01C6" +
		"\u0180\x03\x02\x02\x02\u01C6\u0181\x03\x02\x02\x02\u01C6\u0182\x03\x02" +
		"\x02\x02\u01C6\u0183\x03\x02\x02\x02\u01C6\u0184\x03\x02\x02\x02\u01C6" +
		"\u0185\x03\x02\x02\x02\u01C6\u0186\x03\x02\x02\x02\u01C6\u0187\x03\x02" +
		"\x02\x02\u01C6\u0188\x03\x02\x02\x02\u01C6\u0189\x03\x02\x02\x02\u01C6" +
		"\u018A\x03\x02\x02\x02\u01C6\u018B\x03\x02\x02\x02\u01C6\u018C\x03\x02" +
		"\x02\x02\u01C6\u018D\x03\x02\x02\x02\u01C6\u018E\x03\x02\x02\x02\u01C6" +
		"\u018F\x03\x02\x02\x02\u01C6\u0190\x03\x02\x02\x02\u01C6\u0191\x03\x02" +
		"\x02\x02\u01C6\u0192\x03\x02\x02\x02\u01C6\u0193\x03\x02\x02\x02\u01C6" +
		"\u0194\x03\x02\x02\x02\u01C6\u0195\x03\x02\x02\x02\u01C6\u0196\x03\x02" +
		"\x02\x02\u01C6\u0197\x03\x02\x02\x02\u01C6\u0198\x03\x02\x02\x02\u01C6" +
		"\u0199\x03\x02\x02\x02";
	private static readonly _serializedATNSegment2: string =
		"\u01C6\u019A\x03\x02\x02\x02\u01C6\u019B\x03\x02\x02\x02\u01C6\u019C\x03" +
		"\x02\x02\x02\u01C6\u019D\x03\x02\x02\x02\u01C6\u019E\x03\x02\x02\x02\u01C6" +
		"\u019F\x03\x02\x02\x02\u01C6\u01A0\x03\x02\x02\x02\u01C6\u01A1\x03\x02" +
		"\x02\x02\u01C6\u01A2\x03\x02\x02\x02\u01C6\u01A3\x03\x02\x02\x02\u01C6" +
		"\u01A4\x03\x02\x02\x02\u01C6\u01A5\x03\x02\x02\x02\u01C6\u01A6\x03\x02" +
		"\x02\x02\u01C6\u01A7\x03\x02\x02\x02\u01C6\u01A8\x03\x02\x02\x02\u01C6" +
		"\u01A9\x03\x02\x02\x02\u01C6\u01AA\x03\x02\x02\x02\u01C6\u01AB\x03\x02" +
		"\x02\x02\u01C6\u01AC\x03\x02\x02\x02\u01C6\u01AD\x03\x02\x02\x02\u01C6" +
		"\u01AE\x03\x02\x02\x02\u01C6\u01AF\x03\x02\x02\x02\u01C6\u01B0\x03\x02" +
		"\x02\x02\u01C6\u01B1\x03\x02\x02\x02\u01C6\u01B2\x03\x02\x02\x02\u01C6" +
		"\u01B3\x03\x02\x02\x02\u01C6\u01B4\x03\x02\x02\x02\u01C6\u01B5\x03\x02" +
		"\x02\x02\u01C6\u01B6\x03\x02\x02\x02\u01C6\u01B7\x03\x02\x02\x02\u01C6" +
		"\u01B8\x03\x02\x02\x02\u01C6\u01B9\x03\x02\x02\x02\u01C6\u01BA\x03\x02" +
		"\x02\x02\u01C6\u01BB\x03\x02\x02\x02\u01C6\u01BC\x03\x02\x02\x02\u01C6" +
		"\u01BD\x03\x02\x02\x02\u01C6\u01BE\x03\x02\x02\x02\u01C6\u01BF\x03\x02" +
		"\x02\x02\u01C6\u01C0\x03\x02\x02\x02\u01C6\u01C1\x03\x02\x02\x02\u01C6" +
		"\u01C2\x03\x02\x02\x02\u01C6\u01C3\x03\x02\x02\x02\u01C6\u01C4\x03\x02" +
		"\x02\x02\u01C6\u01C5\x03\x02\x02\x02\u01C7\x07\x03\x02\x02\x02\u01C8\u01CA" +
		"\x07\x05\x02\x02\u01C9\u01CB\x05\xD0i\x02\u01CA\u01C9\x03\x02\x02\x02" +
		"\u01CA\u01CB\x03\x02\x02\x02\u01CB\u01CC\x03\x02\x02\x02\u01CC\u01D4\x07" +
		"r\x02\x02\u01CD\u01CF\x07\x87\x02\x02\u01CE\u01CD\x03\x02\x02\x02\u01CF" +
		"\u01D2\x03\x02\x02\x02\u01D0\u01CE\x03\x02\x02\x02\u01D0\u01D1\x03\x02" +
		"\x02\x02\u01D1\u01D3\x03\x02\x02\x02\u01D2\u01D0\x03\x02\x02\x02\u01D3" +
		"\u01D5\x05:\x1E\x02\u01D4\u01D0\x03\x02\x02\x02\u01D5\u01D6\x03\x02\x02" +
		"\x02\u01D6\u01D4\x03\x02\x02\x02\u01D6\u01D7\x03\x02\x02\x02\u01D7\t\x03" +
		"\x02\x02\x02\u01D8\u01DA\x07\x06\x02\x02\u01D9\u01DB\x05\xD0i\x02\u01DA" +
		"\u01D9\x03\x02\x02\x02\u01DA\u01DB\x03\x02\x02\x02\u01DB\u01DC\x03\x02" +
		"\x02\x02\u01DC\u01E0\x07r\x02\x02\u01DD\u01DF\x07\x87\x02\x02\u01DE\u01DD" +
		"\x03\x02\x02\x02\u01DF\u01E2\x03\x02\x02\x02\u01E0\u01DE\x03\x02\x02\x02" +
		"\u01E0\u01E1\x03\x02\x02\x02\u01E1\u01E6\x03\x02\x02\x02\u01E2\u01E0\x03" +
		"\x02\x02\x02\u01E3\u01E4\x05\u0140\xA1\x02\u01E4\u01E5\x07\x87\x02\x02" +
		"\u01E5\u01E7\x03\x02\x02\x02\u01E6\u01E3\x03\x02\x02\x02\u01E6\u01E7\x03" +
		"\x02\x02\x02\u01E7\u01E8\x03\x02\x02\x02\u01E8\u01F2\x05L\'\x02\u01E9" +
		"\u01EB\x07\x87\x02\x02\u01EA\u01E9\x03\x02\x02\x02\u01EB\u01EE\x03\x02" +
		"\x02\x02\u01EC\u01EA\x03\x02\x02\x02\u01EC\u01ED\x03\x02\x02\x02\u01ED" +
		"\u01EF\x03\x02\x02\x02\u01EE\u01EC\x03\x02\x02\x02\u01EF\u01F1\x05L\'" +
		"\x02\u01F0\u01EC\x03\x02\x02\x02\u01F1\u01F4\x03\x02\x02\x02\u01F2\u01F0" +
		"\x03\x02\x02\x02\u01F2\u01F3\x03\x02\x02\x02\u01F3\v\x03\x02\x02\x02\u01F4" +
		"\u01F2\x03\x02\x02\x02\u01F5\u01F7\x07\x07\x02\x02\u01F6\u01F8\x05\u0144" +
		"\xA3\x02\u01F7\u01F6\x03\x02\x02\x02\u01F7\u01F8\x03\x02\x02\x02\u01F8" +
		"\u01F9\x03\x02\x02\x02\u01F9\u01FA\x07r\x02\x02\u01FA\u01FE\x07\x87\x02" +
		"\x02\u01FB\u01FC\x05\u013A\x9E\x02\u01FC\u01FD\x07\x87\x02\x02\u01FD\u01FF" +
		"\x03\x02\x02\x02\u01FE\u01FB\x03\x02\x02\x02\u01FE\u01FF\x03\x02\x02\x02" +
		"\u01FF\r\x03\x02\x02\x02\u0200\u0201\x07\b\x02\x02\u0201\u0205\x07r\x02" +
		"\x02\u0202\u0204\x07\x87\x02\x02\u0203\u0202\x03\x02\x02\x02\u0204\u0207" +
		"\x03\x02\x02\x02\u0205\u0203\x03\x02\x02\x02\u0205\u0206\x03\x02\x02\x02" +
		"\u0206\u0208\x03\x02\x02\x02\u0207\u0205\x03\x02\x02\x02\u0208\u0209\x05" +
		"\x14\v\x02\u0209\x0F\x03\x02\x02\x02\u020A\u020C\t\x02\x02\x02\u020B\u020D" +
		"\t\x03\x02\x02\u020C\u020B\x03\x02\x02\x02\u020C\u020D\x03\x02\x02\x02" +
		"\u020D\u020E\x03\x02\x02\x02\u020E\u0218\x07r\x02\x02\u020F\u0211\x07" +
		"\x87\x02\x02\u0210\u020F\x03\x02\x02\x02\u0211\u0214\x03\x02\x02\x02\u0212" +
		"\u0210\x03\x02\x02\x02\u0212\u0213\x03\x02\x02\x02\u0213\u0215\x03\x02" +
		"\x02\x02\u0214\u0212\x03\x02\x02\x02\u0215\u0217\x05:\x1E\x02\u0216\u0212" +
		"\x03\x02\x02\x02\u0217\u021A\x03\x02\x02\x02\u0218\u0216\x03\x02\x02\x02" +
		"\u0218\u0219\x03\x02\x02\x02\u0219\x11\x03\x02\x02\x02\u021A\u0218\x03" +
		"\x02\x02\x02\u021B\u021C\x07\v\x02\x02\u021C\u021D\x07r\x02\x02\u021D" +
		"\u021E\x05\u011E\x90\x02\u021E\x13\x03\x02\x02\x02\u021F\u0221\x07\x87" +
		"\x02\x02\u0220\u021F\x03\x02\x02\x02\u0220\u0221\x03\x02\x02\x02\u0221" +
		"\u0229\x03\x02\x02\x02\u0222\u022A\x05\u0130\x99\x02\u0223\u022A\x05\u013A" +
		"\x9E\x02\u0224\u022A\x05\u011A\x8E\x02\u0225\u022A\x05\u012C\x97\x02\u0226" +
		"\u022A\x05\u011E\x90\x02\u0227\u022A\x05\u0140\xA1\x02\u0228\u022A\x05" +
		"\u0126\x94\x02\u0229\u0222\x03\x02\x02\x02\u0229\u0223\x03\x02\x02\x02" +
		"\u0229\u0224\x03\x02\x02\x02\u0229\u0225\x03\x02\x02\x02\u0229\u0226\x03" +
		"\x02\x02\x02\u0229\u0227\x03\x02\x02\x02\u0229\u0228\x03\x02\x02\x02\u022A" +
		"\u022C\x03\x02\x02\x02\u022B\u0220\x03\x02\x02\x02\u022C\u022F\x03\x02" +
		"\x02\x02\u022D\u022B\x03\x02\x02\x02\u022D\u022E\x03\x02\x02\x02\u022E" +
		"\x15\x03\x02\x02\x02\u022F\u022D\x03\x02\x02\x02\u0230\u0231\x07\f\x02" +
		"\x02\u0231\u023B\x07r\x02\x02\u0232\u0233\x07\x87\x02\x02\u0233\u0236" +
		"\t\x04\x02\x02\u0234\u0237\x05\u0144\xA3\x02\u0235\u0237\x07s\x02\x02" +
		"\u0236\u0234\x03\x02\x02\x02\u0236\u0235\x03\x02\x02\x02\u0237\u0238\x03" +
		"\x02\x02\x02\u0238\u0236\x03\x02\x02\x02\u0238\u0239\x03\x02\x02\x02\u0239" +
		"\u023A\x03\x02\x02\x02\u023A\u023C\x07r\x02\x02\u023B\u0232\x03\x02\x02" +
		"\x02\u023C\u023D\x03\x02\x02\x02\u023D\u023B\x03\x02\x02\x02\u023D\u023E" +
		"\x03\x02\x02\x02\u023E\u023F\x03\x02\x02\x02\u023F\u0243\x07\x87\x02\x02" +
		"\u0240\u0242\x05\u0142\xA2\x02\u0241\u0240\x03\x02\x02\x02\u0242\u0245" +
		"\x03\x02\x02\x02\u0243\u0241\x03\x02\x02\x02\u0243\u0244\x03\x02\x02\x02" +
		"\u0244\x17\x03\x02\x02\x02\u0245\u0243\x03\x02\x02\x02\u0246\u0247\x07" +
		"\r\x02\x02\u0247\u0251\x07r\x02\x02\u0248\u0249\x07\x87\x02\x02\u0249" +
		"\u024C\t\x04\x02\x02\u024A\u024D\x05\u0144\xA3\x02\u024B\u024D\x07s\x02" +
		"\x02\u024C\u024A\x03\x02\x02\x02\u024C\u024B\x03\x02\x02\x02\u024D\u024E" +
		"\x03\x02\x02\x02\u024E\u024C\x03\x02\x02\x02\u024E\u024F\x03\x02\x02\x02" +
		"\u024F\u0250\x03\x02\x02\x02\u0250\u0252\x07r\x02\x02\u0251\u0248\x03" +
		"\x02\x02\x02\u0252\u0253\x03\x02\x02\x02\u0253\u0251\x03\x02\x02\x02\u0253" +
		"\u0254\x03\x02\x02\x02\u0254\u0255\x03\x02\x02\x02\u0255\u0259\x07\x87" +
		"\x02\x02\u0256\u0258\x05\u0142\xA2\x02\u0257\u0256\x03\x02\x02\x02\u0258" +
		"\u025B\x03\x02\x02\x02\u0259\u0257\x03\x02\x02\x02\u0259\u025A\x03\x02" +
		"\x02\x02\u025A\x19\x03\x02\x02\x02\u025B\u0259\x03\x02\x02\x02\u025C\u025D" +
		"\x079\x02\x02\u025D\u025E\x05\xD0i\x02\u025E\u0262\x07r\x02\x02\u025F" +
		"\u0261\x07\x87\x02\x02\u0260\u025F\x03\x02\x02\x02\u0261\u0264\x03\x02" +
		"\x02\x02\u0262\u0260\x03\x02\x02\x02\u0262\u0263\x03\x02\x02\x02\u0263" +
		"\u026C\x03\x02\x02\x02\u0264\u0262\x03\x02\x02\x02\u0265\u0269\x05:\x1E" +
		"\x02\u0266\u0268\x07\x87\x02\x02\u0267\u0266\x03\x02\x02\x02\u0268\u026B" +
		"\x03\x02\x02\x02\u0269\u0267\x03\x02\x02\x02\u0269\u026A\x03\x02\x02\x02" +
		"\u026A\u026D\x03\x02\x02\x02\u026B\u0269\x03\x02\x02\x02\u026C\u0265\x03" +
		"\x02\x02\x02\u026D\u026E\x03\x02\x02\x02\u026E\u026C\x03\x02\x02\x02\u026E" +
		"\u026F\x03\x02\x02\x02\u026F\x1B\x03\x02\x02\x02\u0270\u0271\x07:\x02" +
		"\x02\u0271\u0272\x05\xD0i\x02\u0272\u0276\x07r\x02\x02\u0273\u0275\x07" +
		"\x87\x02\x02\u0274\u0273\x03\x02\x02\x02\u0275\u0278\x03\x02\x02\x02\u0276" +
		"\u0274\x03\x02\x02\x02\u0276\u0277\x03\x02\x02\x02\u0277\u0280\x03\x02" +
		"\x02\x02\u0278\u0276\x03\x02\x02\x02\u0279\u027D\x05:\x1E\x02\u027A\u027C" +
		"\x07\x87\x02\x02\u027B\u027A\x03\x02\x02\x02\u027C\u027F\x03\x02\x02\x02" +
		"\u027D\u027B\x03\x02\x02\x02\u027D\u027E\x03\x02\x02\x02\u027E\u0281\x03" +
		"\x02\x02\x02\u027F\u027D\x03\x02\x02\x02\u0280\u0279\x03\x02\x02\x02\u0281" +
		"\u0282\x03\x02\x02\x02\u0282\u0280\x03\x02\x02\x02\u0282\u0283\x03\x02" +
		"\x02\x02\u0283\x1D\x03\x02\x02\x02\u0284\u0285\x07;\x02\x02\u0285\u0286" +
		"\x05\xD0i\x02\u0286\u028A\x07r\x02\x02\u0287\u0289\x07\x87\x02\x02\u0288" +
		"\u0287\x03\x02\x02\x02\u0289\u028C\x03\x02\x02\x02\u028A\u0288\x03\x02" +
		"\x02\x02\u028A\u028B\x03\x02\x02\x02\u028B\u0294\x03\x02\x02\x02\u028C" +
		"\u028A\x03\x02\x02\x02\u028D\u0291\x05:\x1E\x02\u028E\u0290\x07\x87\x02" +
		"\x02\u028F\u028E\x03\x02\x02\x02\u0290\u0293\x03\x02\x02\x02\u0291\u028F" +
		"\x03\x02\x02\x02\u0291\u0292\x03\x02\x02\x02\u0292\u0295\x03\x02\x02\x02" +
		"\u0293\u0291\x03\x02\x02\x02\u0294\u028D\x03\x02\x02\x02\u0295\u0296\x03" +
		"\x02\x02\x02\u0296\u0294\x03\x02\x02\x02\u0296\u0297\x03\x02\x02\x02\u0297" +
		"\x1F\x03\x02\x02\x02\u0298\u0299\x07<\x02\x02\u0299\u029A\x05\xD0i\x02" +
		"\u029A\u029E\x07r\x02\x02\u029B\u029D\x07\x87\x02\x02\u029C\u029B\x03" +
		"\x02\x02\x02\u029D\u02A0\x03\x02\x02\x02\u029E\u029C\x03\x02\x02\x02\u029E" +
		"\u029F\x03\x02\x02\x02\u029F\u02A8\x03\x02\x02\x02\u02A0\u029E\x03\x02" +
		"\x02\x02\u02A1\u02A5\x05:\x1E\x02\u02A2\u02A4\x07\x87\x02\x02\u02A3\u02A2" +
		"\x03\x02\x02\x02\u02A4\u02A7\x03\x02\x02\x02\u02A5\u02A3\x03\x02\x02\x02" +
		"\u02A5\u02A6\x03\x02\x02\x02\u02A6\u02A9\x03\x02\x02\x02\u02A7\u02A5\x03" +
		"\x02\x02\x02\u02A8\u02A1\x03\x02\x02\x02\u02A9\u02AA\x03\x02\x02\x02\u02AA" +
		"\u02A8\x03\x02\x02\x02\u02AA\u02AB\x03\x02\x02\x02\u02AB!\x03\x02\x02" +
		"\x02\u02AC\u02AD\x07=\x02\x02\u02AD\u02AE\x05\xD0i\x02\u02AE\u02B2\x07" +
		"r\x02\x02\u02AF\u02B1\x07\x87\x02\x02\u02B0\u02AF\x03\x02\x02\x02\u02B1" +
		"\u02B4\x03\x02\x02\x02\u02B2\u02B0\x03\x02\x02\x02\u02B2\u02B3\x03\x02" +
		"\x02\x02\u02B3\u02BC\x03\x02\x02\x02\u02B4\u02B2\x03\x02\x02\x02\u02B5" +
		"\u02B9\x05:\x1E\x02\u02B6\u02B8\x07\x87\x02\x02\u02B7\u02B6\x03\x02\x02" +
		"\x02\u02B8\u02BB\x03\x02\x02\x02\u02B9\u02B7\x03\x02\x02\x02\u02B9\u02BA" +
		"\x03\x02\x02\x02\u02BA\u02BD\x03\x02\x02\x02\u02BB\u02B9\x03\x02\x02\x02" +
		"\u02BC\u02B5\x03\x02\x02\x02\u02BD\u02BE\x03\x02\x02\x02\u02BE\u02BC\x03" +
		"\x02\x02\x02\u02BE\u02BF\x03\x02\x02\x02\u02BF#\x03\x02\x02\x02\u02C0" +
		"\u02C1\x07>\x02\x02\u02C1\u02C2\x05\xD0i\x02\u02C2\u02C6\x07r\x02\x02" +
		"\u02C3\u02C5\x07\x87\x02\x02\u02C4\u02C3\x03\x02\x02\x02\u02C5\u02C8\x03" +
		"\x02\x02\x02\u02C6\u02C4\x03\x02\x02\x02\u02C6\u02C7\x03\x02\x02\x02\u02C7" +
		"\u02D0\x03\x02\x02\x02\u02C8\u02C6\x03\x02\x02\x02\u02C9\u02CD\x05:\x1E" +
		"\x02\u02CA\u02CC\x07\x87\x02\x02\u02CB\u02CA\x03\x02\x02\x02\u02CC\u02CF" +
		"\x03\x02\x02\x02\u02CD\u02CB\x03\x02\x02\x02\u02CD\u02CE\x03\x02\x02\x02" +
		"\u02CE\u02D1\x03\x02\x02\x02\u02CF\u02CD\x03\x02\x02\x02\u02D0\u02C9\x03" +
		"\x02\x02\x02\u02D1\u02D2\x03\x02\x02\x02\u02D2\u02D0\x03\x02\x02\x02\u02D2" +
		"\u02D3\x03\x02\x02\x02\u02D3%\x03\x02\x02\x02\u02D4\u02D5\x07?\x02\x02" +
		"\u02D5\u02D6\x05\xD0i\x02\u02D6\u02DA\x07r\x02\x02\u02D7\u02D9\x07\x87" +
		"\x02\x02\u02D8\u02D7\x03\x02\x02\x02\u02D9\u02DC\x03\x02\x02\x02\u02DA" +
		"\u02D8\x03\x02\x02\x02\u02DA\u02DB\x03\x02\x02\x02\u02DB\u02E4\x03\x02" +
		"\x02\x02\u02DC\u02DA\x03\x02\x02\x02\u02DD\u02E1\x05:\x1E\x02\u02DE\u02E0" +
		"\x07\x87\x02\x02\u02DF\u02DE\x03\x02\x02\x02\u02E0\u02E3\x03\x02\x02\x02" +
		"\u02E1\u02DF\x03\x02\x02\x02\u02E1\u02E2\x03\x02\x02\x02\u02E2\u02E5\x03" +
		"\x02\x02\x02\u02E3\u02E1\x03\x02\x02\x02\u02E4\u02DD\x03\x02\x02\x02\u02E5" +
		"\u02E6\x03\x02\x02\x02\u02E6\u02E4\x03\x02\x02\x02\u02E6\u02E7\x03\x02" +
		"\x02\x02\u02E7\'\x03\x02\x02\x02\u02E8\u02E9\x07@\x02\x02\u02E9\u02EA" +
		"\x05\xD0i\x02\u02EA\u02EE\x07r\x02\x02\u02EB\u02ED\x07\x87\x02\x02\u02EC" +
		"\u02EB\x03\x02\x02\x02\u02ED\u02F0\x03\x02\x02\x02\u02EE\u02EC\x03\x02" +
		"\x02\x02\u02EE\u02EF\x03\x02\x02\x02\u02EF\u02F8\x03\x02\x02\x02\u02F0" +
		"\u02EE\x03\x02\x02\x02\u02F1\u02F5\x05:\x1E\x02\u02F2\u02F4\x07\x87\x02" +
		"\x02\u02F3\u02F2\x03\x02\x02\x02\u02F4\u02F7\x03\x02\x02\x02\u02F5\u02F3" +
		"\x03\x02\x02\x02\u02F5\u02F6\x03\x02\x02\x02\u02F6\u02F9\x03\x02\x02\x02" +
		"\u02F7\u02F5\x03\x02\x02\x02\u02F8\u02F1\x03\x02\x02\x02\u02F9\u02FA\x03" +
		"\x02\x02\x02\u02FA\u02F8\x03\x02\x02\x02\u02FA\u02FB\x03\x02\x02\x02\u02FB" +
		")\x03\x02\x02\x02\u02FC\u02FD\x07A\x02\x02\u02FD\u02FE\x05\xD0i\x02\u02FE" +
		"\u0302\x07r\x02\x02\u02FF\u0301\x07\x87\x02\x02\u0300\u02FF\x03\x02\x02" +
		"\x02\u0301\u0304\x03\x02\x02\x02\u0302\u0300\x03\x02\x02\x02\u0302\u0303" +
		"\x03\x02\x02\x02\u0303\u030C\x03\x02\x02\x02\u0304\u0302\x03\x02\x02\x02" +
		"\u0305\u0309\x05:\x1E\x02\u0306\u0308\x07\x87\x02\x02\u0307\u0306\x03" +
		"\x02\x02\x02\u0308\u030B\x03\x02\x02\x02\u0309\u0307\x03\x02\x02\x02\u0309" +
		"\u030A\x03\x02\x02\x02\u030A\u030D\x03\x02\x02\x02\u030B\u0309\x03\x02" +
		"\x02\x02\u030C\u0305\x03\x02\x02\x02\u030D\u030E\x03\x02\x02\x02\u030E" +
		"\u030C\x03\x02\x02\x02\u030E\u030F\x03\x02\x02\x02\u030F+\x03\x02\x02" +
		"\x02\u0310\u0311\x07B\x02\x02\u0311\u0312\x05\xD0i\x02\u0312\u0316\x07" +
		"r\x02\x02\u0313\u0315\x07\x87\x02\x02\u0314\u0313\x03\x02\x02\x02\u0315" +
		"\u0318\x03\x02\x02\x02\u0316\u0314\x03\x02\x02\x02\u0316\u0317\x03\x02" +
		"\x02\x02\u0317\u0320\x03\x02\x02\x02\u0318\u0316\x03\x02\x02\x02\u0319" +
		"\u031D\x05:\x1E\x02\u031A\u031C\x07\x87\x02\x02\u031B\u031A\x03\x02\x02" +
		"\x02\u031C\u031F\x03\x02\x02\x02\u031D\u031B\x03\x02\x02\x02\u031D\u031E" +
		"\x03\x02\x02\x02\u031E\u0321\x03\x02\x02\x02\u031F\u031D\x03\x02\x02\x02" +
		"\u0320\u0319\x03\x02\x02\x02\u0321\u0322\x03\x02\x02\x02\u0322\u0320\x03" +
		"\x02\x02\x02\u0322\u0323\x03\x02\x02\x02\u0323-\x03\x02\x02\x02\u0324" +
		"\u0325\x07C\x02\x02\u0325\u0326\x05\xD0i\x02\u0326\u032A\x07r\x02\x02" +
		"\u0327\u0329\x07\x87\x02\x02\u0328\u0327\x03\x02\x02\x02\u0329\u032C\x03" +
		"\x02\x02\x02\u032A\u0328\x03\x02\x02\x02\u032A\u032B\x03\x02\x02\x02\u032B" +
		"\u0334\x03\x02\x02\x02\u032C\u032A\x03\x02\x02\x02\u032D\u0331\x05:\x1E" +
		"\x02\u032E\u0330\x07\x87\x02\x02\u032F\u032E\x03\x02\x02\x02\u0330\u0333" +
		"\x03\x02\x02\x02\u0331\u032F\x03\x02\x02\x02\u0331\u0332\x03\x02\x02\x02" +
		"\u0332\u0335\x03\x02\x02\x02\u0333\u0331\x03\x02\x02\x02\u0334\u032D\x03" +
		"\x02\x02\x02\u0335\u0336\x03\x02\x02\x02\u0336\u0334\x03\x02\x02\x02\u0336" +
		"\u0337\x03\x02\x02\x02\u0337/\x03\x02\x02\x02\u0338\u0339\x07D\x02\x02" +
		"\u0339\u033A\x05\xD0i\x02\u033A\u033E\x07r\x02\x02\u033B\u033D\x07\x87" +
		"\x02\x02\u033C\u033B\x03\x02\x02\x02\u033D\u0340\x03\x02\x02\x02\u033E" +
		"\u033C\x03\x02\x02\x02\u033E\u033F\x03\x02\x02\x02\u033F\u0348\x03\x02" +
		"\x02\x02\u0340\u033E\x03\x02\x02\x02\u0341\u0345\x05:\x1E\x02\u0342\u0344" +
		"\x07\x87\x02\x02\u0343\u0342\x03\x02\x02\x02\u0344\u0347\x03\x02\x02\x02" +
		"\u0345\u0343\x03\x02\x02\x02\u0345\u0346\x03\x02\x02\x02\u0346\u0349\x03" +
		"\x02\x02\x02\u0347\u0345\x03\x02\x02\x02\u0348\u0341\x03\x02\x02\x02\u0349" +
		"\u034A\x03\x02\x02\x02\u034A\u0348\x03\x02\x02\x02\u034A\u034B\x03\x02" +
		"\x02\x02\u034B1\x03\x02\x02\x02\u034C\u034D\x07E\x02\x02\u034D\u034E\x05" +
		"\xD0i\x02\u034E\u0352\x07r\x02\x02\u034F\u0351\x07\x87\x02\x02\u0350\u034F" +
		"\x03\x02\x02\x02\u0351\u0354\x03\x02\x02\x02\u0352\u0350\x03\x02\x02\x02" +
		"\u0352\u0353\x03\x02\x02\x02\u0353\u035C\x03\x02\x02\x02\u0354\u0352\x03" +
		"\x02\x02\x02\u0355\u0359\x05:\x1E\x02\u0356\u0358\x07\x87\x02\x02\u0357" +
		"\u0356\x03\x02\x02\x02\u0358\u035B\x03\x02\x02\x02\u0359\u0357\x03\x02" +
		"\x02\x02\u0359\u035A\x03\x02\x02\x02\u035A\u035D\x03\x02\x02\x02\u035B" +
		"\u0359\x03\x02\x02\x02\u035C\u0355\x03\x02\x02\x02\u035D\u035E\x03\x02" +
		"\x02\x02\u035E\u035C\x03\x02\x02\x02\u035E\u035F\x03\x02\x02\x02\u035F" +
		"3\x03\x02\x02\x02\u0360\u0361\x07F\x02\x02\u0361\u0362\x05\xD0i\x02\u0362" +
		"\u0366\x07r\x02\x02\u0363\u0365\x07\x87\x02\x02\u0364\u0363\x03\x02\x02" +
		"\x02\u0365\u0368\x03\x02\x02\x02\u0366\u0364\x03\x02\x02\x02\u0366\u0367" +
		"\x03\x02\x02\x02\u0367\u0370\x03\x02\x02\x02\u0368\u0366\x03\x02\x02\x02" +
		"\u0369\u036D\x05:\x1E\x02\u036A\u036C\x07\x87\x02\x02\u036B\u036A\x03" +
		"\x02\x02\x02\u036C\u036F\x03\x02\x02\x02\u036D\u036B\x03\x02\x02\x02\u036D" +
		"\u036E\x03\x02\x02\x02\u036E\u0371\x03\x02\x02\x02\u036F\u036D\x03\x02" +
		"\x02\x02\u0370\u0369\x03\x02\x02\x02\u0371\u0372\x03\x02\x02\x02\u0372" +
		"\u0370\x03\x02\x02\x02\u0372\u0373\x03\x02\x02\x02\u03735\x03\x02\x02" +
		"\x02\u0374\u0375\x07G\x02\x02\u0375\u0376\x05\xD0i\x02\u0376\u037A\x07" +
		"r\x02\x02\u0377\u0379\x07\x87\x02\x02\u0378\u0377\x03\x02\x02\x02\u0379" +
		"\u037C\x03\x02\x02\x02\u037A\u0378\x03\x02\x02\x02\u037A\u037B\x03\x02" +
		"\x02\x02\u037B\u0384\x03\x02\x02\x02\u037C\u037A\x03\x02\x02\x02\u037D" +
		"\u0381\x05:\x1E\x02\u037E\u0380\x07\x87\x02\x02\u037F\u037E\x03\x02\x02" +
		"\x02\u0380\u0383\x03\x02\x02\x02\u0381\u037F\x03\x02\x02\x02\u0381\u0382" +
		"\x03\x02\x02\x02\u0382\u0385\x03\x02\x02\x02\u0383\u0381\x03\x02\x02\x02" +
		"\u0384\u037D\x03\x02\x02\x02\u0385\u0386\x03\x02\x02\x02\u0386\u0384\x03" +
		"\x02\x02\x02\u0386\u0387\x03\x02\x02\x02\u03877\x03\x02\x02\x02\u0388" +
		"\u0389\x07H\x02\x02\u0389\u038A\x05\xD0i\x02\u038A\u038E\x07r\x02\x02" +
		"\u038B\u038D\x07\x87\x02\x02\u038C\u038B\x03\x02\x02\x02\u038D\u0390\x03" +
		"\x02\x02\x02\u038E\u038C\x03\x02\x02\x02\u038E\u038F\x03\x02\x02\x02\u038F" +
		"\u0398\x03\x02\x02\x02\u0390\u038E\x03\x02\x02\x02\u0391\u0395\x05:\x1E" +
		"\x02\u0392\u0394\x07\x87\x02\x02\u0393\u0392\x03\x02\x02\x02\u0394\u0397" +
		"\x03\x02\x02\x02\u0395\u0393\x03\x02\x02\x02\u0395\u0396\x03\x02\x02\x02" +
		"\u0396\u0399\x03\x02\x02\x02\u0397\u0395\x03\x02\x02\x02\u0398\u0391\x03" +
		"\x02\x02\x02\u0399\u039A\x03\x02\x02\x02\u039A\u0398\x03\x02\x02\x02\u039A" +
		"\u039B\x03\x02\x02\x02\u039B9\x03\x02\x02\x02\u039C\u03BC\x07\xE2\x02" +
		"\x02\u039D\u03BC\x05\u0146\xA4\x02\u039E\u03BC\x05<\x1F\x02\u039F\u03BC" +
		"\x05\u0124\x93\x02\u03A0\u03BC\x05\u0128\x95\x02\u03A1\u03BC\x05\u0126" +
		"\x94\x02\u03A2\u03BC\x05\u013A\x9E\x02\u03A3\u03BC\x05\u013E\xA0\x02\u03A4" +
		"\u03BC\x05J&\x02\u03A5\u03BC\x05\u011A\x8E\x02\u03A6\u03BC\x05\u0130\x99" +
		"\x02\u03A7\u03BC\x05\u012C\x97\x02\u03A8\u03BC\x05\u012E\x98\x02\u03A9" +
		"\u03BC\x05\u0144\xA3\x02\u03AA\u03BC\x05\u0120\x91\x02\u03AB\u03BC\x05" +
		"\u0132\x9A\x02\u03AC\u03BC\x05\u0134\x9B\x02\u03AD\u03BC\x05\u0136\x9C" +
		"\x02\u03AE\u03BC\x05\u0138\x9D\x02\u03AF\u03BC\x05\u0102\x82\x02\u03B0" +
		"\u03BC\x05\u010C\x87\x02\u03B1\u03BC\x05\xFE\x80\x02\u03B2\u03BC\x05\xF2" +
		"z\x02\u03B3\u03BC\x05\xF4{\x02\u03B4\u03BC\x05\xF8}\x02\u03B5\u03BC\x05" +
		"\xF6|\x02\u03B6\u03BC\x05\xFA~\x02\u03B7\u03BC\x05\u011E\x90\x02\u03B8" +
		"\u03BC\x05\u0140\xA1\x02\u03B9\u03BC\x05\u0122\x92\x02\u03BA\u03BC\x05" +
		"\u0150\xA9\x02\u03BB\u039C\x03\x02\x02\x02\u03BB\u039D\x03\x02\x02\x02" +
		"\u03BB\u039E\x03\x02\x02\x02\u03BB\u039F\x03\x02\x02\x02\u03BB\u03A0\x03" +
		"\x02\x02\x02\u03BB\u03A1\x03\x02\x02\x02\u03BB\u03A2\x03\x02\x02\x02\u03BB" +
		"\u03A3\x03\x02\x02\x02\u03BB\u03A4\x03\x02\x02\x02\u03BB\u03A5\x03\x02" +
		"\x02\x02\u03BB\u03A6\x03\x02\x02\x02\u03BB\u03A7\x03\x02\x02\x02\u03BB" +
		"\u03A8\x03\x02\x02\x02\u03BB\u03A9\x03\x02\x02\x02\u03BB\u03AA\x03\x02" +
		"\x02\x02\u03BB\u03AB\x03\x02\x02\x02\u03BB\u03AC\x03\x02\x02\x02\u03BB" +
		"\u03AD\x03\x02\x02\x02\u03BB\u03AE\x03\x02\x02\x02\u03BB\u03AF\x03\x02" +
		"\x02\x02\u03BB\u03B0\x03\x02\x02\x02\u03BB\u03B1\x03\x02\x02\x02\u03BB" +
		"\u03B2\x03\x02\x02\x02\u03BB\u03B3\x03\x02\x02\x02\u03BB\u03B4\x03\x02" +
		"\x02\x02\u03BB\u03B5\x03\x02\x02\x02\u03BB\u03B6\x03\x02\x02\x02\u03BB" +
		"\u03B7\x03\x02\x02\x02\u03BB\u03B8\x03\x02\x02\x02\u03BB\u03B9\x03\x02" +
		"\x02\x02\u03BB\u03BA\x03\x02\x02\x02\u03BC;\x03\x02\x02\x02\u03BD\u03C5" +
		"\x05> \x02\u03BE\u03C4\x05> \x02\u03BF\u03C4\x05\u012C\x97\x02\u03C0\u03C4" +
		"\x05\u012E\x98\x02\u03C1\u03C4\x05\u011A\x8E\x02\u03C2\u03C4\x05\u0120" +
		"\x91\x02\u03C3\u03BE\x03\x02\x02\x02\u03C3\u03BF\x03\x02\x02\x02\u03C3" +
		"\u03C0\x03\x02\x02\x02\u03C3\u03C1\x03\x02\x02\x02\u03C3\u03C2\x03\x02" +
		"\x02\x02\u03C4\u03C7\x03\x02\x02\x02\u03C5\u03C3\x03\x02\x02\x02\u03C5" +
		"\u03C6\x03\x02\x02\x02\u03C6=\x03\x02\x02\x02\u03C7\u03C5\x03\x02\x02" +
		"\x02\u03C8\u03CC\x07h\x02\x02\u03C9\u03CD\x07\x85\x02\x02\u03CA\u03CD" +
		"\x07\x86\x02\x02\u03CB\u03CD\x03\x02\x02\x02\u03CC\u03C9\x03\x02\x02\x02" +
		"\u03CC\u03CA\x03\x02\x02\x02\u03CC\u03CB\x03\x02\x02\x02\u03CD\u03D1\x03" +
		"\x02\x02\x02\u03CE\u03D0\x05\u0144\xA3\x02\u03CF\u03CE\x03\x02\x02\x02" +
		"\u03D0\u03D3\x03\x02\x02\x02\u03D1\u03CF\x03\x02\x02\x02\u03D1\u03D2\x03" +
		"\x02\x02\x02\u03D2\u03D4\x03\x02\x02\x02\u03D3\u03D1\x03\x02\x02\x02\u03D4" +
		"\u03D5\x05\u014A\xA6\x02\u03D5?\x03\x02\x02\x02\u03D6\u03D8\x05\u011A" +
		"\x8E\x02\u03D7\u03D6\x03\x02\x02\x02\u03D7\u03D8\x03\x02\x02\x02\u03D8" +
		"\u03D9\x03\x02\x02\x02\u03D9\u03DB\x07l\x02\x02\u03DA\u03DC\x05\u0144" +
		"\xA3\x02\u03DB\u03DA\x03\x02\x02\x02\u03DC\u03DD\x03\x02\x02\x02\u03DD" +
		"\u03DB\x03\x02\x02\x02\u03DD\u03DE\x03\x02\x02\x02\u03DE\u03DF\x03\x02" +
		"\x02\x02\u03DF\u03E0\x07r\x02\x02\u03E0A\x03\x02\x02\x02\u03E1\u03E3\x05" +
		"\u011A\x8E\x02\u03E2\u03E1\x03\x02\x02\x02\u03E2\u03E3\x03\x02\x02\x02" +
		"\u03E3\u03E4\x03\x02\x02\x02\u03E4\u03E6\x07m\x02\x02\u03E5\u03E7\x05" +
		"\u0144\xA3\x02\u03E6\u03E5\x03\x02\x02\x02\u03E7\u03E8\x03\x02\x02\x02" +
		"\u03E8\u03E6\x03\x02\x02\x02\u03E8\u03E9\x03\x02\x02\x02\u03E9\u03EA\x03" +
		"\x02\x02\x02\u03EA\u03EB\x07r\x02\x02\u03EBC\x03\x02\x02\x02\u03EC\u03EE" +
		"\x05\u011A\x8E\x02\u03ED\u03EC\x03\x02\x02\x02\u03ED\u03EE\x03\x02\x02" +
		"\x02\u03EE\u03EF\x03\x02\x02\x02\u03EF\u03F1\x07o\x02\x02\u03F0\u03F2" +
		"\x05\u0144\xA3\x02\u03F1\u03F0\x03\x02\x02\x02\u03F2\u03F3\x03\x02\x02" +
		"\x02\u03F3\u03F1\x03\x02\x02\x02\u03F3\u03F4\x03\x02\x02\x02\u03F4\u03F5" +
		"\x03\x02\x02\x02\u03F5\u03F6\x07r\x02\x02\u03F6E\x03\x02\x02\x02\u03F7" +
		"\u03F8\x07\x17\x02\x02\u03F8\u03F9\x05\xD0i\x02\u03F9\u03FA\x07r\x02\x02" +
		"\u03FA\u0404\x07\x87\x02\x02\u03FB\u03FF\x05:\x1E\x02\u03FC\u03FE\x07" +
		"\x87\x02\x02\u03FD\u03FC\x03\x02\x02\x02\u03FE\u0401\x03\x02\x02\x02\u03FF" +
		"\u03FD\x03\x02\x02\x02\u03FF\u0400\x03\x02\x02\x02\u0400\u0403\x03\x02" +
		"\x02\x02\u0401\u03FF\x03\x02\x02\x02\u0402\u03FB\x03\x02\x02\x02\u0403" +
		"\u0406\x03\x02\x02\x02\u0404\u0402\x03\x02\x02\x02\u0404\u0405\x03\x02" +
		"\x02\x02\u0405\u0410\x03\x02\x02\x02\u0406\u0404\x03\x02\x02\x02\u0407" +
		"\u0409\x07\x87\x02\x02\u0408\u0407\x03\x02\x02\x02\u0409\u040C\x03\x02" +
		"\x02\x02\u040A\u0408\x03\x02\x02\x02\u040A\u040B\x03\x02\x02\x02\u040B" +
		"\u040D\x03\x02\x02\x02\u040C\u040A\x03\x02\x02\x02\u040D\u040F\x05H%\x02" +
		"\u040E\u040A\x03\x02\x02\x02\u040F\u0412\x03\x02\x02\x02\u0410\u040E\x03" +
		"\x02\x02\x02\u0410\u0411\x03\x02\x02\x02\u0411\u0416\x03\x02\x02\x02\u0412" +
		"\u0410\x03\x02\x02\x02\u0413\u0415\x07\x87\x02\x02\u0414\u0413\x03\x02" +
		"\x02\x02\u0415\u0418\x03\x02\x02\x02\u0416\u0414\x03\x02\x02\x02\u0416" +
		"\u0417\x03\x02\x02\x02\u0417\u0426\x03\x02\x02\x02\u0418\u0416\x03\x02" +
		"\x02\x02\u0419\u0423\x05L\'\x02\u041A\u041C\x07\x87\x02\x02\u041B\u041A" +
		"\x03\x02\x02\x02\u041C\u041F\x03\x02\x02\x02\u041D\u041B\x03\x02\x02\x02" +
		"\u041D\u041E\x03\x02\x02\x02\u041E\u0420\x03\x02\x02\x02\u041F\u041D\x03" +
		"\x02\x02\x02\u0420\u0422\x05L\'\x02\u0421\u041D\x03\x02\x02\x02\u0422" +
		"\u0425\x03\x02\x02\x02\u0423\u0421\x03\x02\x02\x02\u0423\u0424\x03\x02" +
		"\x02\x02\u0424\u0427\x03\x02\x02\x02\u0425\u0423\x03\x02\x02\x02\u0426" +
		"\u0419\x03\x02\x02\x02\u0426\u0427\x03\x02\x02\x02\u0427G\x03\x02\x02" +
		"\x02\u0428\u0430\x07\x92\x02\x02\u0429\u042B\x07\x87\x02\x02\u042A\u0429" +
		"\x03\x02\x02\x02\u042A\u042B\x03\x02\x02\x02\u042B\u042C\x03\x02\x02\x02" +
		"\u042C\u042E\x05\u0142\xA2\x02\u042D\u042F\x07\x87\x02\x02\u042E\u042D" +
		"\x03\x02\x02\x02\u042E\u042F\x03\x02\x02\x02\u042F\u0431\x03\x02\x02\x02" +
		"\u0430\u042A\x03\x02\x02\x02\u0430\u0431\x03\x02\x02\x02\u0431\u0432\x03" +
		"\x02\x02\x02\u0432\u0433\x07r\x02\x02\u0433I\x03\x02\x02\x02\u0434\u0435" +
		"\t\x05\x02\x02\u0435K\x03\x02\x02\x02\u0436\u0437\x05:\x1E\x02\u0437M" +
		"\x03\x02\x02\x02\u0438\u0439\x07\x19\x02\x02\u0439\u043A\x05\xD0i\x02" +
		"\u043A\u043B\x07r\x02\x02\u043B\u0445\x07\x87\x02\x02\u043C\u0440\x05" +
		":\x1E\x02\u043D\u043F\x07\x87\x02\x02\u043E\u043D\x03\x02\x02\x02\u043F" +
		"\u0442\x03\x02\x02\x02\u0440\u043E\x03\x02\x02\x02\u0440\u0441\x03\x02" +
		"\x02\x02\u0441\u0444\x03\x02\x02\x02\u0442\u0440\x03\x02\x02\x02\u0443" +
		"\u043C\x03\x02\x02\x02\u0444\u0447\x03\x02\x02\x02\u0445\u0443\x03\x02" +
		"\x02\x02\u0445\u0446\x03\x02\x02\x02\u0446\u044B\x03\x02\x02\x02\u0447" +
		"\u0445\x03\x02\x02\x02\u0448\u044A\x05P)\x02\u0449\u0448\x03\x02\x02\x02" +
		"\u044A\u044D\x03\x02\x02\x02\u044B\u0449\x03\x02\x02\x02\u044B\u044C\x03" +
		"\x02\x02\x02\u044C\u0451\x03\x02\x02\x02\u044D\u044B\x03\x02\x02\x02\u044E" +
		"\u0450\x07\x87\x02\x02\u044F\u044E\x03\x02\x02\x02\u0450\u0453\x03\x02" +
		"\x02\x02\u0451\u044F\x03\x02\x02\x02\u0451\u0452\x03\x02\x02\x02\u0452" +
		"\u0461\x03\x02\x02\x02\u0453\u0451";
	private static readonly _serializedATNSegment3: string =
		"\x03\x02\x02\x02\u0454\u045E\x05L\'\x02\u0455\u0457\x07\x87\x02\x02\u0456" +
		"\u0455\x03\x02\x02\x02\u0457\u045A\x03\x02\x02\x02\u0458\u0456\x03\x02" +
		"\x02\x02\u0458\u0459\x03\x02\x02\x02\u0459\u045B\x03\x02\x02\x02\u045A" +
		"\u0458\x03\x02\x02\x02\u045B\u045D\x05L\'\x02\u045C\u0458\x03\x02\x02" +
		"\x02\u045D\u0460\x03\x02\x02\x02\u045E\u045C\x03\x02\x02\x02\u045E\u045F" +
		"\x03\x02\x02\x02\u045F\u0462\x03\x02\x02\x02\u0460\u045E\x03\x02\x02\x02" +
		"\u0461\u0454\x03\x02\x02\x02\u0461\u0462\x03\x02\x02\x02\u0462O\x03\x02" +
		"\x02\x02\u0463\u0467\x07m\x02\x02\u0464\u0466\v\x02\x02\x02\u0465\u0464" +
		"\x03\x02\x02\x02\u0466\u0469\x03\x02\x02\x02\u0467\u0468\x03\x02\x02\x02" +
		"\u0467\u0465\x03\x02\x02\x02\u0468\u046A\x03\x02\x02\x02\u0469\u0467\x03" +
		"\x02\x02\x02\u046A\u046B\x07r\x02\x02\u046B\u0476\x07\x87\x02\x02\u046C" +
		"\u0470\x07l\x02\x02\u046D\u046F\v\x02\x02\x02\u046E\u046D\x03\x02\x02" +
		"\x02\u046F\u0472\x03\x02\x02\x02\u0470\u0471\x03\x02\x02\x02\u0470\u046E" +
		"\x03\x02\x02\x02\u0471\u0473\x03\x02\x02\x02\u0472\u0470\x03\x02\x02\x02" +
		"\u0473\u0474\x07r\x02\x02\u0474\u0476\x07\x87\x02\x02\u0475\u0463\x03" +
		"\x02\x02\x02\u0475\u046C\x03\x02\x02\x02\u0476Q\x03\x02\x02\x02\u0477" +
		"\u0478\x07\x1A\x02\x02\u0478\u0479\x05\xD0i\x02\u0479\u047A\x07r\x02\x02" +
		"\u047A\u0487\x07\x87\x02\x02\u047B\u047E\x05:\x1E\x02\u047C\u047E\x05" +
		"T+\x02\u047D\u047B\x03\x02\x02\x02\u047D\u047C\x03\x02\x02\x02\u047E\u0482" +
		"\x03\x02\x02\x02\u047F\u0481\x07\x87\x02\x02\u0480\u047F\x03\x02\x02\x02" +
		"\u0481\u0484\x03\x02\x02\x02\u0482\u0480\x03\x02\x02\x02\u0482\u0483\x03" +
		"\x02\x02\x02\u0483\u0486\x03\x02\x02\x02\u0484\u0482\x03\x02\x02\x02\u0485" +
		"\u047D\x03\x02\x02\x02\u0486\u0489\x03\x02\x02\x02\u0487\u0485\x03\x02" +
		"\x02\x02\u0487\u0488\x03\x02\x02\x02\u0488\u048D\x03\x02\x02\x02\u0489" +
		"\u0487\x03\x02\x02\x02\u048A\u048C\x07\x87\x02\x02\u048B\u048A\x03\x02" +
		"\x02\x02\u048C\u048F\x03\x02\x02\x02\u048D\u048B\x03\x02\x02\x02\u048D" +
		"\u048E\x03\x02\x02\x02\u048E\u049D\x03\x02\x02\x02\u048F\u048D\x03\x02" +
		"\x02\x02\u0490\u049A\x05L\'\x02\u0491\u0493\x07\x87\x02\x02\u0492\u0491" +
		"\x03\x02\x02\x02\u0493\u0496\x03\x02\x02\x02\u0494\u0492\x03\x02\x02\x02" +
		"\u0494\u0495\x03\x02\x02\x02\u0495\u0497\x03\x02\x02\x02\u0496\u0494\x03" +
		"\x02\x02\x02\u0497\u0499\x05L\'\x02\u0498\u0494\x03\x02\x02\x02\u0499" +
		"\u049C\x03\x02\x02\x02\u049A\u0498\x03\x02\x02\x02\u049A\u049B\x03\x02" +
		"\x02\x02\u049B\u049E\x03\x02\x02\x02\u049C\u049A\x03\x02\x02\x02\u049D" +
		"\u0490\x03\x02\x02\x02\u049D\u049E\x03\x02\x02\x02\u049ES\x03\x02\x02" +
		"\x02\u049F\u04A0\x07n\x02\x02\u04A0\u04A1\x05\u0144\xA3\x02\u04A1\u04A3" +
		"\x07r\x02\x02\u04A2\u04A4\x05V,\x02\u04A3\u04A2\x03\x02\x02\x02\u04A3" +
		"\u04A4\x03\x02\x02\x02\u04A4\u04AA\x03\x02\x02\x02\u04A5\u04A9\x05\u012E" +
		"\x98\x02\u04A6\u04A9\x05\u011A\x8E\x02\u04A7\u04A9\x05\u012C\x97\x02\u04A8" +
		"\u04A5\x03\x02\x02\x02\u04A8\u04A6\x03\x02\x02\x02\u04A8\u04A7\x03\x02" +
		"\x02\x02\u04A9\u04AC\x03\x02\x02\x02\u04AA\u04A8\x03\x02\x02\x02\u04AA" +
		"\u04AB\x03\x02\x02\x02\u04ABU\x03\x02\x02\x02\u04AC\u04AA\x03\x02\x02" +
		"\x02\u04AD\u04B1\x07\x9B\x02\x02\u04AE\u04B0\x07\x04\x02\x02\u04AF\u04AE" +
		"\x03\x02\x02\x02\u04B0\u04B3\x03\x02\x02\x02\u04B1\u04AF\x03\x02\x02\x02" +
		"\u04B1\u04B2\x03\x02\x02\x02\u04B2\u04B4\x03\x02\x02\x02\u04B3\u04B1\x03" +
		"\x02\x02\x02\u04B4\u04B8\x07\x86\x02\x02\u04B5\u04B7\x07\x04\x02\x02\u04B6" +
		"\u04B5\x03\x02\x02\x02\u04B7\u04BA\x03\x02\x02\x02\u04B8\u04B6\x03\x02" +
		"\x02\x02\u04B8\u04B9\x03\x02\x02\x02\u04B9\u04BB\x03\x02\x02\x02\u04BA" +
		"\u04B8\x03\x02\x02\x02\u04BB\u04BC\x07r\x02\x02\u04BCW\x03\x02\x02\x02" +
		"\u04BD\u04BF\x07\x1B\x02\x02\u04BE\u04C0\t\x06\x02\x02\u04BF\u04BE\x03" +
		"\x02\x02\x02\u04BF\u04C0\x03\x02\x02\x02\u04C0\u04C1\x03\x02\x02\x02\u04C1" +
		"\u04C2\x07r\x02\x02\u04C2\u04CC\x07\x87\x02\x02\u04C3\u04C7\x05:\x1E\x02" +
		"\u04C4\u04C6\x07\x87\x02\x02\u04C5\u04C4\x03\x02\x02\x02\u04C6\u04C9\x03" +
		"\x02\x02\x02\u04C7\u04C5\x03\x02\x02\x02\u04C7\u04C8\x03\x02\x02\x02\u04C8" +
		"\u04CB\x03\x02\x02\x02\u04C9\u04C7\x03\x02\x02\x02\u04CA\u04C3\x03\x02" +
		"\x02\x02\u04CB\u04CE\x03\x02\x02\x02\u04CC\u04CA\x03\x02\x02\x02\u04CC" +
		"\u04CD\x03\x02\x02\x02\u04CD\u04D2\x03\x02\x02\x02\u04CE\u04CC\x03\x02" +
		"\x02\x02\u04CF\u04D1\x07\x87\x02\x02\u04D0\u04CF\x03\x02\x02\x02\u04D1" +
		"\u04D4\x03\x02\x02\x02\u04D2\u04D0\x03\x02\x02\x02\u04D2\u04D3\x03\x02" +
		"\x02\x02\u04D3\u04E2\x03\x02\x02\x02\u04D4\u04D2\x03\x02\x02\x02\u04D5" +
		"\u04DF\x05L\'\x02\u04D6\u04D8\x07\x87\x02\x02\u04D7\u04D6\x03\x02\x02" +
		"\x02\u04D8\u04DB\x03\x02\x02\x02\u04D9\u04D7\x03\x02\x02\x02\u04D9\u04DA" +
		"\x03\x02\x02\x02\u04DA\u04DC\x03\x02\x02\x02\u04DB\u04D9\x03\x02\x02\x02" +
		"\u04DC\u04DE\x05L\'\x02\u04DD\u04D9\x03\x02\x02\x02\u04DE\u04E1\x03\x02" +
		"\x02\x02\u04DF\u04DD\x03\x02\x02\x02\u04DF\u04E0\x03\x02\x02\x02\u04E0" +
		"\u04E3\x03\x02\x02\x02\u04E1\u04DF\x03\x02\x02\x02\u04E2\u04D5\x03\x02" +
		"\x02\x02\u04E2\u04E3\x03\x02\x02\x02\u04E3Y\x03\x02\x02\x02\u04E4\u04E5" +
		"\x07\x12\x02\x02\u04E5\u04E6\x05\xD0i\x02\u04E6\u04E7\x07r\x02\x02\u04E7" +
		"\u04F1\x07\x87\x02\x02\u04E8\u04EC\x05:\x1E\x02\u04E9\u04EB\x07\x87\x02" +
		"\x02\u04EA\u04E9\x03\x02\x02\x02\u04EB\u04EE\x03\x02\x02\x02\u04EC\u04EA" +
		"\x03\x02\x02\x02\u04EC\u04ED\x03\x02\x02\x02\u04ED\u04F0\x03\x02\x02\x02" +
		"\u04EE\u04EC\x03\x02\x02\x02\u04EF\u04E8\x03\x02\x02\x02\u04F0\u04F3\x03" +
		"\x02\x02\x02\u04F1\u04EF\x03\x02\x02\x02\u04F1\u04F2\x03\x02\x02\x02\u04F2" +
		"\u04F7\x03\x02\x02\x02\u04F3\u04F1\x03\x02\x02\x02\u04F4\u04F6\x07\x87" +
		"\x02\x02\u04F5\u04F4\x03\x02\x02\x02\u04F6\u04F9\x03\x02\x02\x02\u04F7" +
		"\u04F5\x03\x02\x02\x02\u04F7\u04F8\x03\x02\x02\x02\u04F8\u0507\x03\x02" +
		"\x02\x02\u04F9\u04F7\x03\x02\x02\x02\u04FA\u0504\x05L\'\x02\u04FB\u04FD" +
		"\x07\x87\x02\x02\u04FC\u04FB\x03\x02\x02\x02\u04FD\u0500\x03\x02\x02\x02" +
		"\u04FE\u04FC\x03\x02\x02\x02\u04FE\u04FF\x03\x02\x02\x02\u04FF\u0501\x03" +
		"\x02\x02\x02\u0500\u04FE\x03\x02\x02\x02\u0501\u0503\x05L\'\x02\u0502" +
		"\u04FE\x03\x02\x02\x02\u0503\u0506\x03\x02\x02\x02\u0504\u0502\x03\x02" +
		"\x02\x02\u0504\u0505\x03\x02\x02\x02\u0505\u0508\x03\x02\x02\x02\u0506" +
		"\u0504\x03\x02\x02\x02\u0507\u04FA\x03\x02\x02\x02\u0507\u0508\x03\x02" +
		"\x02\x02\u0508[\x03\x02\x02\x02\u0509\u050A\x07\x1C\x02\x02\u050A\u050B" +
		"\x05\xD0i\x02\u050B\u050C\x07r\x02\x02\u050C\u0516\x07\x87\x02\x02\u050D" +
		"\u0511\x05:\x1E\x02\u050E\u0510\x07\x87\x02\x02\u050F\u050E\x03\x02\x02" +
		"\x02\u0510\u0513\x03\x02\x02\x02\u0511\u050F\x03\x02\x02\x02\u0511\u0512" +
		"\x03\x02\x02\x02\u0512\u0515\x03\x02\x02\x02\u0513\u0511\x03\x02\x02\x02" +
		"\u0514\u050D\x03\x02\x02\x02\u0515\u0518\x03\x02\x02\x02\u0516\u0514\x03" +
		"\x02\x02\x02\u0516\u0517\x03\x02\x02\x02\u0517\u051C\x03\x02\x02\x02\u0518" +
		"\u0516\x03\x02\x02\x02\u0519\u051B\x07\x87\x02\x02\u051A\u0519\x03\x02" +
		"\x02\x02\u051B\u051E\x03\x02\x02\x02\u051C\u051A\x03\x02\x02\x02\u051C" +
		"\u051D\x03\x02\x02\x02\u051D\u052C\x03\x02\x02\x02\u051E\u051C\x03\x02" +
		"\x02\x02\u051F\u0529\x05L\'\x02\u0520\u0522\x07\x87\x02\x02\u0521\u0520" +
		"\x03\x02\x02\x02\u0522\u0525\x03\x02\x02\x02\u0523\u0521\x03\x02\x02\x02" +
		"\u0523\u0524\x03\x02\x02\x02\u0524\u0526\x03\x02\x02\x02\u0525\u0523\x03" +
		"\x02\x02\x02\u0526\u0528\x05L\'\x02\u0527\u0523\x03\x02\x02\x02\u0528" +
		"\u052B\x03\x02\x02\x02\u0529\u0527\x03\x02\x02\x02\u0529\u052A\x03\x02" +
		"\x02\x02\u052A\u052D\x03\x02\x02\x02\u052B\u0529\x03\x02\x02\x02\u052C" +
		"\u051F\x03\x02\x02\x02\u052C\u052D\x03\x02\x02\x02\u052D]\x03\x02\x02" +
		"\x02\u052E\u052F\x07\x1D\x02\x02\u052F\u0530\x05\xD0i\x02\u0530\u0531" +
		"\x07r\x02\x02\u0531\u053B\x07\x87\x02\x02\u0532\u0536\x05:\x1E\x02\u0533" +
		"\u0535\x07\x87\x02\x02\u0534\u0533\x03\x02\x02\x02\u0535\u0538\x03\x02" +
		"\x02\x02\u0536\u0534\x03\x02\x02\x02\u0536\u0537\x03\x02\x02\x02\u0537" +
		"\u053A\x03\x02\x02\x02\u0538\u0536\x03\x02\x02\x02\u0539\u0532\x03\x02" +
		"\x02\x02\u053A\u053D\x03\x02\x02\x02\u053B\u0539\x03\x02\x02\x02\u053B" +
		"\u053C\x03\x02\x02\x02\u053C\u0541\x03\x02\x02\x02\u053D\u053B\x03\x02" +
		"\x02\x02\u053E\u0540\x07\x87\x02\x02\u053F\u053E\x03\x02\x02\x02\u0540" +
		"\u0543\x03\x02\x02\x02\u0541\u053F\x03\x02\x02\x02\u0541\u0542\x03\x02" +
		"\x02\x02\u0542\u0551\x03\x02\x02\x02\u0543\u0541\x03\x02\x02\x02\u0544" +
		"\u054E\x05L\'\x02\u0545\u0547\x07\x87\x02\x02\u0546\u0545\x03\x02\x02" +
		"\x02\u0547\u054A\x03\x02\x02\x02\u0548\u0546\x03\x02\x02\x02\u0548\u0549" +
		"\x03\x02\x02\x02\u0549\u054B\x03\x02\x02\x02\u054A\u0548\x03\x02\x02\x02" +
		"\u054B\u054D\x05L\'\x02\u054C\u0548\x03\x02\x02\x02\u054D\u0550\x03\x02" +
		"\x02\x02\u054E\u054C\x03\x02\x02\x02\u054E\u054F\x03\x02\x02\x02\u054F" +
		"\u0552\x03\x02\x02\x02\u0550\u054E\x03\x02\x02\x02\u0551\u0544\x03\x02" +
		"\x02\x02\u0551\u0552\x03\x02\x02\x02\u0552_\x03\x02\x02\x02\u0553\u0554" +
		"\x07\x1E\x02\x02\u0554\u0555\x05\xD0i\x02\u0555\u0559\x07r\x02\x02\u0556" +
		"\u0558\x07\x87\x02\x02\u0557\u0556\x03\x02\x02\x02\u0558\u055B\x03\x02" +
		"\x02\x02\u0559\u0557\x03\x02\x02\x02\u0559\u055A\x03\x02\x02\x02\u055A" +
		"\u0565\x03\x02\x02\x02\u055B\u0559\x03\x02\x02\x02\u055C\u0560\x05:\x1E" +
		"\x02\u055D\u055F\x07\x87\x02\x02\u055E\u055D\x03\x02\x02\x02\u055F\u0562" +
		"\x03\x02\x02\x02\u0560\u055E\x03\x02\x02\x02\u0560\u0561\x03\x02\x02\x02" +
		"\u0561\u0564\x03\x02\x02\x02\u0562\u0560\x03\x02\x02\x02\u0563\u055C\x03" +
		"\x02\x02\x02\u0564\u0567\x03\x02\x02\x02\u0565\u0563\x03\x02\x02\x02\u0565" +
		"\u0566\x03\x02\x02\x02\u0566\u0569\x03\x02\x02\x02\u0567\u0565\x03\x02" +
		"\x02\x02\u0568\u056A\x05\u0142\xA2\x02\u0569\u0568\x03\x02\x02\x02\u0569" +
		"\u056A\x03\x02\x02\x02\u056A\u056E\x03\x02\x02\x02\u056B\u056D\x07\x87" +
		"\x02\x02\u056C\u056B\x03\x02\x02\x02\u056D\u0570\x03\x02\x02\x02\u056E" +
		"\u056C\x03\x02\x02\x02\u056E\u056F\x03\x02\x02\x02\u056F\u057E\x03\x02" +
		"\x02\x02\u0570\u056E\x03\x02\x02\x02\u0571\u057B\x05L\'\x02\u0572\u0574" +
		"\x07\x87\x02\x02\u0573\u0572\x03\x02\x02\x02\u0574\u0577\x03\x02\x02\x02" +
		"\u0575\u0573\x03\x02\x02\x02\u0575\u0576\x03\x02\x02\x02\u0576\u0578\x03" +
		"\x02\x02\x02\u0577\u0575\x03\x02\x02\x02\u0578\u057A\x05L\'\x02\u0579" +
		"\u0575\x03\x02\x02\x02\u057A\u057D\x03\x02\x02\x02\u057B\u0579\x03\x02" +
		"\x02\x02\u057B\u057C\x03\x02\x02\x02\u057C\u057F\x03\x02\x02\x02\u057D" +
		"\u057B\x03\x02\x02\x02\u057E\u0571\x03\x02\x02\x02\u057E\u057F\x03\x02" +
		"\x02\x02\u057Fa\x03\x02\x02\x02\u0580\u0581\x07\x1F\x02\x02\u0581\u0582" +
		"\x05\xD0i\x02\u0582\u0584\x07r\x02\x02\u0583\u0585\x07\x87\x02\x02\u0584" +
		"\u0583\x03\x02\x02\x02\u0585\u0586\x03\x02\x02\x02\u0586\u0584\x03\x02" +
		"\x02\x02\u0586\u0587\x03\x02\x02\x02\u0587\u0591\x03\x02\x02\x02\u0588" +
		"\u058C\x05:\x1E\x02\u0589\u058B\x07\x87\x02\x02\u058A\u0589\x03\x02\x02" +
		"\x02\u058B\u058E\x03\x02\x02\x02\u058C\u058A\x03\x02\x02\x02\u058C\u058D" +
		"\x03\x02\x02\x02\u058D\u0590\x03\x02\x02\x02\u058E\u058C\x03\x02\x02\x02" +
		"\u058F\u0588\x03\x02\x02\x02\u0590\u0593\x03\x02\x02\x02\u0591\u058F\x03" +
		"\x02\x02\x02\u0591\u0592\x03\x02\x02\x02\u0592\u0595\x03\x02\x02\x02\u0593" +
		"\u0591\x03\x02\x02\x02\u0594\u0596\x05\u0142\xA2\x02\u0595\u0594\x03\x02" +
		"\x02\x02\u0595\u0596\x03\x02\x02\x02\u0596\u059A\x03\x02\x02\x02\u0597" +
		"\u0599\x07\x87\x02\x02\u0598\u0597\x03\x02\x02\x02\u0599\u059C\x03\x02" +
		"\x02\x02\u059A\u0598\x03\x02\x02\x02\u059A\u059B\x03\x02\x02\x02\u059B" +
		"\u05AA\x03\x02\x02\x02\u059C\u059A\x03\x02\x02\x02\u059D\u05A7\x05L\'" +
		"\x02\u059E\u05A0\x07\x87\x02\x02\u059F\u059E\x03\x02\x02\x02\u05A0\u05A3" +
		"\x03\x02\x02\x02\u05A1\u059F\x03\x02\x02\x02\u05A1\u05A2\x03\x02\x02\x02" +
		"\u05A2\u05A4\x03\x02\x02\x02\u05A3\u05A1\x03\x02\x02\x02\u05A4\u05A6\x05" +
		"L\'\x02\u05A5\u05A1\x03\x02\x02\x02\u05A6\u05A9\x03\x02\x02\x02\u05A7" +
		"\u05A5\x03\x02\x02\x02\u05A7\u05A8\x03\x02\x02\x02\u05A8\u05AB\x03\x02" +
		"\x02\x02\u05A9\u05A7\x03\x02\x02\x02\u05AA\u059D\x03\x02\x02\x02\u05AA" +
		"\u05AB\x03\x02\x02\x02\u05ABc\x03\x02\x02\x02\u05AC\u05AD\x07\x15\x02" +
		"\x02\u05AD\u05AE\x05\xD0i\x02\u05AE\u05B2\x07r\x02\x02\u05AF\u05B1\x07" +
		"\x87\x02\x02\u05B0\u05AF\x03\x02\x02\x02\u05B1\u05B4\x03\x02\x02\x02\u05B2" +
		"\u05B0\x03\x02\x02\x02\u05B2\u05B3\x03\x02\x02\x02\u05B3\u05BC\x03\x02" +
		"\x02\x02\u05B4\u05B2\x03\x02\x02\x02\u05B5\u05B9\x05:\x1E\x02\u05B6\u05B8" +
		"\x07\x87\x02\x02\u05B7\u05B6\x03\x02\x02\x02\u05B8\u05BB\x03\x02\x02\x02" +
		"\u05B9\u05B7\x03\x02\x02\x02\u05B9\u05BA\x03\x02\x02\x02\u05BA\u05BD\x03" +
		"\x02\x02\x02\u05BB\u05B9\x03\x02\x02\x02\u05BC\u05B5\x03\x02\x02\x02\u05BD" +
		"\u05BE\x03\x02\x02\x02\u05BE\u05BC\x03\x02\x02\x02\u05BE\u05BF\x03\x02" +
		"\x02\x02\u05BFe\x03\x02\x02\x02\u05C0\u05C1\x07\x0F\x02\x02\u05C1\u05C2" +
		"\x05\xD0i\x02\u05C2\u05C6\x07r\x02\x02\u05C3\u05C5\x07\x87\x02\x02\u05C4" +
		"\u05C3\x03\x02\x02\x02\u05C5\u05C8\x03\x02\x02\x02\u05C6\u05C4\x03\x02" +
		"\x02\x02\u05C6\u05C7\x03\x02\x02\x02\u05C7\u05D0\x03\x02\x02\x02\u05C8" +
		"\u05C6\x03\x02\x02\x02\u05C9\u05CD\x05:\x1E\x02\u05CA\u05CC\x07\x87\x02" +
		"\x02\u05CB\u05CA\x03\x02\x02\x02\u05CC\u05CF\x03\x02\x02\x02\u05CD\u05CB" +
		"\x03\x02\x02\x02\u05CD\u05CE\x03\x02\x02\x02\u05CE\u05D1\x03\x02\x02\x02" +
		"\u05CF\u05CD\x03\x02\x02\x02\u05D0\u05C9\x03\x02\x02\x02\u05D1\u05D2\x03" +
		"\x02\x02\x02\u05D2\u05D0\x03\x02\x02\x02\u05D2\u05D3\x03\x02\x02\x02\u05D3" +
		"g\x03\x02\x02\x02\u05D4\u05D5\x07\x10\x02\x02\u05D5\u05D6\x05\xD0i\x02" +
		"\u05D6\u05DA\x07r\x02\x02\u05D7\u05D9\x07\x87\x02\x02\u05D8\u05D7\x03" +
		"\x02\x02\x02\u05D9\u05DC\x03\x02\x02\x02\u05DA\u05D8\x03\x02\x02\x02\u05DA" +
		"\u05DB\x03\x02\x02\x02\u05DB\u05E4\x03\x02\x02\x02\u05DC\u05DA\x03\x02" +
		"\x02\x02\u05DD\u05E1\x05:\x1E\x02\u05DE\u05E0\x07\x87\x02\x02\u05DF\u05DE" +
		"\x03\x02\x02\x02\u05E0\u05E3\x03\x02\x02\x02\u05E1\u05DF\x03\x02\x02\x02" +
		"\u05E1\u05E2\x03\x02\x02\x02\u05E2\u05E5\x03\x02\x02\x02\u05E3\u05E1\x03" +
		"\x02\x02\x02\u05E4\u05DD\x03\x02\x02\x02\u05E5\u05E6\x03\x02\x02\x02\u05E6" +
		"\u05E4\x03\x02\x02\x02\u05E6\u05E7\x03\x02\x02\x02\u05E7i\x03\x02\x02" +
		"\x02\u05E8\u05E9\x07\x11\x02\x02\u05E9\u05EA\x05\xD0i\x02\u05EA\u05EE" +
		"\x07r\x02\x02\u05EB\u05ED\x07\x87\x02\x02\u05EC\u05EB\x03\x02\x02\x02" +
		"\u05ED\u05F0\x03\x02\x02\x02\u05EE\u05EC\x03\x02\x02\x02\u05EE\u05EF\x03" +
		"\x02\x02\x02\u05EF\u05F8\x03\x02\x02\x02\u05F0\u05EE\x03\x02\x02\x02\u05F1" +
		"\u05F5\x05:\x1E\x02\u05F2\u05F4\x07\x87\x02\x02\u05F3\u05F2\x03\x02\x02" +
		"\x02\u05F4\u05F7\x03\x02\x02\x02\u05F5\u05F3\x03\x02\x02\x02\u05F5\u05F6" +
		"\x03\x02\x02\x02\u05F6\u05F9\x03\x02\x02\x02\u05F7\u05F5\x03\x02\x02\x02" +
		"\u05F8\u05F1\x03\x02\x02\x02\u05F9\u05FA\x03\x02\x02\x02\u05FA\u05F8\x03" +
		"\x02\x02\x02\u05FA\u05FB\x03\x02\x02\x02\u05FBk\x03\x02\x02\x02\u05FC" +
		"\u05FD\x076\x02\x02\u05FD\u05FE\x05\xD0i\x02\u05FE\u0602\x07r\x02\x02" +
		"\u05FF\u0601\x07\x87\x02\x02\u0600\u05FF\x03\x02\x02\x02\u0601\u0604\x03" +
		"\x02\x02\x02\u0602\u0600\x03\x02\x02\x02\u0602\u0603\x03\x02\x02\x02\u0603" +
		"\u060C\x03\x02\x02\x02\u0604\u0602\x03\x02\x02\x02\u0605\u0609\x05:\x1E" +
		"\x02\u0606\u0608\x07\x87\x02\x02\u0607\u0606\x03\x02\x02\x02\u0608\u060B" +
		"\x03\x02\x02\x02\u0609\u0607\x03\x02\x02\x02\u0609\u060A\x03\x02\x02\x02" +
		"\u060A\u060D\x03\x02\x02\x02\u060B\u0609\x03\x02\x02\x02\u060C\u0605\x03" +
		"\x02\x02\x02\u060D\u060E\x03\x02\x02\x02\u060E\u060C\x03\x02\x02\x02\u060E" +
		"\u060F\x03\x02\x02\x02\u060Fm\x03\x02\x02\x02\u0610\u0611\x077\x02\x02" +
		"\u0611\u0612\x05\xD0i\x02\u0612\u0616\x07r\x02\x02\u0613\u0615\x07\x87" +
		"\x02\x02\u0614\u0613\x03\x02\x02\x02\u0615\u0618\x03\x02\x02\x02\u0616" +
		"\u0614\x03\x02\x02\x02\u0616\u0617\x03\x02\x02\x02\u0617\u0620\x03\x02" +
		"\x02\x02\u0618\u0616\x03\x02\x02\x02\u0619\u061D\x05:\x1E\x02\u061A\u061C" +
		"\x07\x87\x02\x02\u061B\u061A\x03\x02\x02\x02\u061C\u061F\x03\x02\x02\x02" +
		"\u061D\u061B\x03\x02\x02\x02\u061D\u061E\x03\x02\x02\x02\u061E\u0621\x03" +
		"\x02\x02\x02\u061F\u061D\x03\x02\x02\x02\u0620\u0619\x03\x02\x02\x02\u0621" +
		"\u0622\x03\x02\x02\x02\u0622\u0620\x03\x02\x02\x02\u0622\u0623\x03\x02" +
		"\x02\x02\u0623o\x03\x02\x02\x02\u0624\u0625\x078\x02\x02\u0625\u0626\x05" +
		"\xD0i\x02\u0626\u062A\x07r\x02\x02\u0627\u0629\x07\x87\x02\x02\u0628\u0627" +
		"\x03\x02\x02\x02\u0629\u062C\x03\x02\x02\x02\u062A\u0628\x03\x02\x02\x02" +
		"\u062A\u062B\x03\x02\x02\x02\u062B\u0634\x03\x02\x02\x02\u062C\u062A\x03" +
		"\x02\x02\x02\u062D\u0631\x05:\x1E\x02\u062E\u0630\x07\x87\x02\x02\u062F" +
		"\u062E\x03\x02\x02\x02\u0630\u0633\x03\x02\x02\x02\u0631\u062F\x03\x02" +
		"\x02\x02\u0631\u0632\x03\x02\x02\x02\u0632\u0635\x03\x02\x02\x02\u0633" +
		"\u0631\x03\x02\x02\x02\u0634\u062D\x03\x02\x02\x02\u0635\u0636\x03\x02" +
		"\x02\x02\u0636\u0634\x03\x02\x02\x02\u0636\u0637\x03\x02\x02\x02\u0637" +
		"q\x03\x02\x02\x02\u0638\u0639\x07\x16\x02\x02\u0639\u063A\x05\xD0i\x02" +
		"\u063A\u063E\x07r\x02\x02\u063B\u063D\x07\x87\x02\x02\u063C\u063B\x03" +
		"\x02\x02\x02\u063D\u0640\x03\x02\x02\x02\u063E\u063C\x03\x02\x02\x02\u063E" +
		"\u063F\x03\x02\x02\x02\u063F\u0648\x03\x02\x02\x02\u0640\u063E\x03\x02" +
		"\x02\x02\u0641\u0645\x05:\x1E\x02\u0642\u0644\x07\x87\x02\x02\u0643\u0642" +
		"\x03\x02\x02\x02\u0644\u0647\x03\x02\x02\x02\u0645\u0643\x03\x02\x02\x02" +
		"\u0645\u0646\x03\x02\x02\x02\u0646\u0649\x03\x02\x02\x02\u0647\u0645\x03" +
		"\x02\x02\x02\u0648\u0641\x03\x02\x02\x02\u0649\u064A\x03\x02\x02\x02\u064A" +
		"\u0648\x03\x02\x02\x02\u064A\u064B\x03\x02\x02\x02\u064Bs\x03\x02\x02" +
		"\x02\u064C\u064D\x07)\x02\x02\u064D\u064E\x05\xD0i\x02\u064E\u0652\x07" +
		"r\x02\x02\u064F\u0651\x07\x87\x02\x02\u0650\u064F\x03\x02\x02\x02\u0651" +
		"\u0654\x03\x02\x02\x02\u0652\u0650\x03\x02\x02\x02\u0652\u0653\x03\x02" +
		"\x02\x02\u0653\u065C\x03\x02\x02\x02\u0654\u0652\x03\x02\x02\x02\u0655" +
		"\u0659\x05:\x1E\x02\u0656\u0658\x07\x87\x02\x02\u0657\u0656\x03\x02\x02" +
		"\x02\u0658\u065B\x03\x02\x02\x02\u0659\u0657\x03\x02\x02\x02\u0659\u065A" +
		"\x03\x02\x02\x02\u065A\u065D\x03\x02\x02\x02\u065B\u0659\x03\x02\x02\x02" +
		"\u065C\u0655\x03\x02\x02\x02\u065D\u065E\x03\x02\x02\x02\u065E\u065C\x03" +
		"\x02\x02\x02\u065E\u065F\x03\x02\x02\x02\u065Fu\x03\x02\x02\x02\u0660" +
		"\u0661\x07*\x02\x02\u0661\u0662\x05\xD0i\x02\u0662\u0666\x07r\x02\x02" +
		"\u0663\u0665\x07\x87\x02\x02\u0664\u0663\x03\x02\x02\x02\u0665\u0668\x03" +
		"\x02\x02\x02\u0666\u0664\x03\x02\x02\x02\u0666\u0667\x03\x02\x02\x02\u0667" +
		"\u0670\x03\x02\x02\x02\u0668\u0666\x03\x02\x02\x02\u0669\u066D\x05:\x1E" +
		"\x02\u066A\u066C\x07\x87\x02\x02\u066B\u066A\x03\x02\x02\x02\u066C\u066F" +
		"\x03\x02\x02\x02\u066D\u066B\x03\x02\x02\x02\u066D\u066E\x03\x02\x02\x02" +
		"\u066E\u0671\x03\x02\x02\x02\u066F\u066D\x03\x02\x02\x02\u0670\u0669\x03" +
		"\x02\x02\x02\u0671\u0672\x03\x02\x02\x02\u0672\u0670\x03\x02\x02\x02\u0672" +
		"\u0673\x03\x02\x02\x02\u0673w\x03\x02\x02\x02\u0674\u0675\x07+\x02\x02" +
		"\u0675\u0676\x05\xD0i\x02\u0676\u067A\x07r\x02\x02\u0677\u0679\x07\x87" +
		"\x02\x02\u0678\u0677\x03\x02\x02\x02\u0679\u067C\x03\x02\x02\x02\u067A" +
		"\u0678\x03\x02\x02\x02\u067A\u067B\x03\x02\x02\x02\u067B\u0684\x03\x02" +
		"\x02\x02\u067C\u067A\x03\x02\x02\x02\u067D\u0681\x05:\x1E\x02\u067E\u0680" +
		"\x07\x87\x02\x02\u067F\u067E\x03\x02\x02\x02\u0680\u0683\x03\x02\x02\x02" +
		"\u0681\u067F\x03\x02\x02\x02\u0681\u0682\x03\x02\x02\x02\u0682\u0685\x03" +
		"\x02\x02\x02\u0683\u0681\x03\x02\x02\x02\u0684\u067D\x03\x02\x02\x02\u0685" +
		"\u0686\x03\x02\x02\x02\u0686\u0684\x03\x02\x02\x02\u0686\u0687\x03\x02" +
		"\x02\x02\u0687y\x03\x02\x02\x02\u0688\u0689\x07,\x02\x02\u0689\u068A\x05" +
		"\xD0i\x02\u068A\u068E\x07r\x02\x02\u068B\u068D\x07\x87\x02\x02\u068C\u068B" +
		"\x03\x02\x02\x02\u068D\u0690\x03\x02\x02\x02\u068E\u068C\x03\x02\x02\x02" +
		"\u068E\u068F\x03\x02\x02\x02\u068F\u0698\x03\x02\x02\x02\u0690\u068E\x03" +
		"\x02\x02\x02\u0691\u0695\x05:\x1E\x02\u0692\u0694\x07\x87\x02\x02\u0693" +
		"\u0692\x03\x02\x02\x02\u0694\u0697\x03\x02\x02\x02\u0695\u0693\x03\x02" +
		"\x02\x02\u0695\u0696\x03\x02\x02\x02\u0696\u0699\x03\x02\x02\x02\u0697" +
		"\u0695\x03\x02\x02\x02\u0698\u0691\x03\x02\x02\x02\u0699\u069A\x03\x02" +
		"\x02\x02\u069A\u0698\x03\x02\x02\x02\u069A\u069B\x03\x02\x02\x02\u069B" +
		"{\x03\x02\x02\x02\u069C\u069D\x07.\x02\x02\u069D\u069E\x05\xD0i\x02\u069E" +
		"\u06A2\x07r\x02\x02\u069F\u06A1\x07\x87\x02\x02\u06A0\u069F\x03\x02\x02" +
		"\x02\u06A1\u06A4\x03\x02\x02\x02\u06A2\u06A0\x03\x02\x02\x02\u06A2\u06A3" +
		"\x03\x02\x02\x02\u06A3\u06AC\x03\x02\x02\x02\u06A4\u06A2\x03\x02\x02\x02" +
		"\u06A5\u06A9\x05:\x1E\x02\u06A6\u06A8\x07\x87\x02\x02\u06A7\u06A6\x03" +
		"\x02\x02\x02\u06A8\u06AB\x03\x02\x02\x02\u06A9\u06A7\x03\x02\x02\x02\u06A9" +
		"\u06AA\x03\x02\x02\x02\u06AA\u06AD\x03\x02\x02\x02\u06AB\u06A9\x03\x02" +
		"\x02\x02\u06AC\u06A5\x03\x02\x02\x02\u06AD\u06AE\x03\x02\x02\x02\u06AE" +
		"\u06AC\x03\x02\x02\x02\u06AE\u06AF\x03\x02\x02\x02\u06AF}\x03\x02\x02" +
		"\x02\u06B0\u06B1\x07/\x02\x02\u06B1\u06B2\x05\xD0i\x02\u06B2\u06B6\x07" +
		"r\x02\x02\u06B3\u06B5\x07\x87\x02\x02\u06B4\u06B3\x03\x02\x02\x02\u06B5" +
		"\u06B8\x03\x02\x02\x02\u06B6\u06B4\x03\x02\x02\x02\u06B6\u06B7\x03\x02" +
		"\x02\x02\u06B7\u06C0\x03\x02\x02\x02\u06B8\u06B6\x03\x02\x02\x02\u06B9" +
		"\u06BD\x05:\x1E\x02\u06BA\u06BC\x07\x87\x02\x02\u06BB\u06BA\x03\x02\x02" +
		"\x02\u06BC\u06BF\x03\x02\x02\x02\u06BD\u06BB\x03\x02\x02\x02\u06BD\u06BE" +
		"\x03\x02\x02\x02\u06BE\u06C1\x03\x02\x02\x02\u06BF\u06BD\x03\x02\x02\x02" +
		"\u06C0\u06B9\x03\x02\x02\x02\u06C1\u06C2\x03\x02\x02\x02\u06C2\u06C0\x03" +
		"\x02\x02\x02\u06C2\u06C3\x03\x02\x02\x02\u06C3\x7F\x03\x02\x02\x02\u06C4" +
		"\u06C5\x070\x02\x02\u06C5\u06C6\x05\xD0i\x02\u06C6\u06CA\x07r\x02\x02" +
		"\u06C7\u06C9\x07\x87\x02\x02\u06C8\u06C7\x03\x02\x02\x02\u06C9\u06CC\x03" +
		"\x02\x02\x02\u06CA\u06C8\x03\x02\x02\x02\u06CA\u06CB\x03\x02\x02\x02\u06CB" +
		"\u06D4\x03\x02\x02\x02\u06CC\u06CA\x03\x02\x02\x02\u06CD\u06D1\x05:\x1E" +
		"\x02\u06CE\u06D0\x07\x87\x02\x02\u06CF\u06CE\x03\x02\x02\x02\u06D0\u06D3" +
		"\x03\x02\x02\x02\u06D1\u06CF\x03\x02\x02\x02\u06D1\u06D2\x03\x02\x02\x02" +
		"\u06D2\u06D5\x03\x02\x02\x02\u06D3\u06D1\x03\x02\x02\x02\u06D4\u06CD\x03" +
		"\x02\x02\x02\u06D5\u06D6\x03\x02\x02\x02\u06D6\u06D4\x03\x02\x02\x02\u06D6" +
		"\u06D7\x03\x02\x02\x02\u06D7\x81\x03\x02\x02\x02\u06D8\u06D9\x071\x02" +
		"\x02\u06D9\u06DA\x05\xD0i\x02\u06DA\u06DE\x07r\x02\x02\u06DB\u06DD\x07" +
		"\x87\x02\x02\u06DC\u06DB\x03\x02\x02\x02\u06DD\u06E0\x03\x02\x02\x02\u06DE" +
		"\u06DC\x03\x02\x02\x02\u06DE\u06DF\x03\x02\x02\x02\u06DF\u06E8\x03\x02" +
		"\x02\x02\u06E0\u06DE\x03\x02\x02\x02\u06E1\u06E5\x05:\x1E\x02\u06E2\u06E4" +
		"\x07\x87\x02\x02\u06E3\u06E2\x03\x02\x02\x02\u06E4\u06E7\x03\x02\x02\x02" +
		"\u06E5\u06E3\x03\x02\x02\x02\u06E5\u06E6\x03\x02\x02\x02\u06E6\u06E9\x03" +
		"\x02\x02\x02\u06E7\u06E5\x03\x02\x02\x02\u06E8\u06E1\x03\x02\x02\x02\u06E9" +
		"\u06EA\x03\x02\x02\x02\u06EA\u06E8\x03\x02\x02\x02\u06EA\u06EB\x03\x02" +
		"\x02\x02\u06EB\x83\x03\x02\x02\x02\u06EC\u06ED\x072\x02\x02\u06ED\u06EE" +
		"\x05\xD0i\x02\u06EE\u06F2\x07r\x02\x02\u06EF\u06F1\x07\x87\x02\x02\u06F0" +
		"\u06EF\x03\x02\x02\x02\u06F1\u06F4\x03\x02\x02\x02\u06F2\u06F0\x03\x02" +
		"\x02\x02\u06F2\u06F3\x03\x02\x02\x02\u06F3\u06FC\x03\x02\x02\x02\u06F4" +
		"\u06F2\x03\x02\x02\x02\u06F5\u06F9\x05:\x1E\x02\u06F6\u06F8\x07\x87\x02" +
		"\x02\u06F7\u06F6\x03\x02\x02\x02\u06F8\u06FB\x03\x02\x02\x02\u06F9\u06F7" +
		"\x03\x02\x02\x02\u06F9\u06FA\x03\x02\x02\x02\u06FA\u06FD\x03\x02\x02\x02" +
		"\u06FB\u06F9\x03\x02\x02\x02\u06FC\u06F5\x03\x02\x02\x02\u06FD\u06FE\x03" +
		"\x02\x02\x02\u06FE\u06FC\x03\x02\x02\x02\u06FE\u06FF\x03\x02\x02\x02\u06FF" +
		"\x85\x03\x02\x02\x02\u0700\u0701\x073\x02\x02\u0701\u0702\x05\xD0i\x02" +
		"\u0702\u0706\x07r\x02\x02\u0703\u0705\x07\x87\x02\x02\u0704\u0703\x03" +
		"\x02\x02\x02\u0705\u0708\x03\x02\x02\x02\u0706\u0704\x03\x02\x02\x02\u0706" +
		"\u0707\x03\x02\x02\x02\u0707\u0710\x03\x02\x02\x02\u0708\u0706\x03\x02" +
		"\x02\x02\u0709\u070D\x05:\x1E\x02\u070A\u070C\x07\x87\x02\x02\u070B\u070A" +
		"\x03\x02\x02\x02\u070C\u070F\x03\x02\x02\x02\u070D\u070B\x03\x02\x02\x02" +
		"\u070D\u070E\x03\x02\x02\x02\u070E\u0711\x03\x02\x02\x02\u070F\u070D\x03" +
		"\x02\x02\x02\u0710\u0709\x03\x02\x02\x02\u0711\u0712\x03\x02\x02\x02\u0712" +
		"\u0710\x03\x02\x02\x02\u0712\u0713\x03\x02\x02\x02\u0713\x87\x03\x02\x02" +
		"\x02\u0714\u0715\x074\x02\x02\u0715\u0716\x05\xD0i\x02\u0716\u071A\x07" +
		"r\x02\x02\u0717\u0719\x07\x87\x02\x02\u0718\u0717\x03\x02\x02\x02\u0719" +
		"\u071C\x03\x02\x02\x02\u071A\u0718\x03\x02\x02\x02\u071A\u071B\x03\x02" +
		"\x02\x02\u071B\u0724\x03\x02\x02\x02\u071C\u071A\x03\x02\x02\x02\u071D" +
		"\u0721\x05:\x1E\x02\u071E\u0720\x07\x87\x02\x02\u071F\u071E\x03\x02\x02" +
		"\x02\u0720\u0723\x03\x02\x02\x02\u0721\u071F\x03\x02";
	private static readonly _serializedATNSegment4: string =
		"\x02\x02\u0721\u0722\x03\x02\x02\x02\u0722\u0725\x03\x02\x02\x02\u0723" +
		"\u0721\x03\x02\x02\x02\u0724\u071D\x03\x02\x02\x02\u0725\u0726\x03\x02" +
		"\x02\x02\u0726\u0724\x03\x02\x02\x02\u0726\u0727\x03\x02\x02\x02\u0727" +
		"\x89\x03\x02\x02\x02\u0728\u0729\x07-\x02\x02\u0729\u072A\x05\xD0i\x02" +
		"\u072A\u072E\x07r\x02\x02\u072B\u072D\x07\x87\x02\x02\u072C\u072B\x03" +
		"\x02\x02\x02\u072D\u0730\x03\x02\x02\x02\u072E\u072C\x03\x02\x02\x02\u072E" +
		"\u072F\x03\x02\x02\x02\u072F\u0738\x03\x02\x02\x02\u0730\u072E\x03\x02" +
		"\x02\x02\u0731\u0735\x05:\x1E\x02\u0732\u0734\x07\x87\x02\x02\u0733\u0732" +
		"\x03\x02\x02\x02\u0734\u0737\x03\x02\x02\x02\u0735\u0733\x03\x02\x02\x02" +
		"\u0735\u0736\x03\x02\x02\x02\u0736\u0739\x03\x02\x02\x02\u0737\u0735\x03" +
		"\x02\x02\x02\u0738\u0731\x03\x02\x02\x02\u0739\u073A\x03\x02\x02\x02\u073A" +
		"\u0738\x03\x02\x02\x02\u073A\u073B\x03\x02\x02\x02\u073B\x8B\x03\x02\x02" +
		"\x02\u073C\u073D\x075\x02\x02\u073D\u073E\x05\xD0i\x02\u073E\u0742\x07" +
		"r\x02\x02\u073F\u0741\x07\x87\x02\x02\u0740\u073F\x03\x02\x02\x02\u0741" +
		"\u0744\x03\x02\x02\x02\u0742\u0740\x03\x02\x02\x02\u0742\u0743\x03\x02" +
		"\x02\x02\u0743\u074C\x03\x02\x02\x02\u0744\u0742\x03\x02\x02\x02\u0745" +
		"\u0749\x05:\x1E\x02\u0746\u0748\x07\x87\x02\x02\u0747\u0746\x03\x02\x02" +
		"\x02\u0748\u074B\x03\x02\x02\x02\u0749\u0747\x03\x02\x02\x02\u0749\u074A" +
		"\x03\x02\x02\x02\u074A\u074D\x03\x02\x02\x02\u074B\u0749\x03\x02\x02\x02" +
		"\u074C\u0745\x03\x02\x02\x02\u074D\u074E\x03\x02\x02\x02\u074E\u074C\x03" +
		"\x02\x02\x02\u074E\u074F\x03\x02\x02\x02\u074F\x8D\x03\x02\x02\x02\u0750" +
		"\u0751\x07I\x02\x02\u0751\u0752\x05\xD0i\x02\u0752\u0756\x07r\x02\x02" +
		"\u0753\u0755\x07\x87\x02\x02\u0754\u0753\x03\x02\x02\x02\u0755\u0758\x03" +
		"\x02\x02\x02\u0756\u0754\x03\x02\x02\x02\u0756\u0757\x03\x02\x02\x02\u0757" +
		"\u0760\x03\x02\x02\x02\u0758\u0756\x03\x02\x02\x02\u0759\u075D\x05:\x1E" +
		"\x02\u075A\u075C\x07\x87\x02\x02\u075B\u075A\x03\x02\x02\x02\u075C\u075F" +
		"\x03\x02\x02\x02\u075D\u075B\x03\x02\x02\x02\u075D\u075E\x03\x02\x02\x02" +
		"\u075E\u0761\x03\x02\x02\x02\u075F\u075D\x03\x02\x02\x02\u0760\u0759\x03" +
		"\x02\x02\x02\u0761\u0762\x03\x02\x02\x02\u0762\u0760\x03\x02\x02\x02\u0762" +
		"\u0763\x03\x02\x02\x02\u0763\x8F\x03\x02\x02\x02\u0764\u0765\x07J\x02" +
		"\x02\u0765\u0766\x05\xD0i\x02\u0766\u076A\x07r\x02\x02\u0767\u0769\x07" +
		"\x87\x02\x02\u0768\u0767\x03\x02\x02\x02\u0769\u076C\x03\x02\x02\x02\u076A" +
		"\u0768\x03\x02\x02\x02\u076A\u076B\x03\x02\x02\x02\u076B\u0774\x03\x02" +
		"\x02\x02\u076C\u076A\x03\x02\x02\x02\u076D\u0771\x05:\x1E\x02\u076E\u0770" +
		"\x07\x87\x02\x02\u076F\u076E\x03\x02\x02\x02\u0770\u0773\x03\x02\x02\x02" +
		"\u0771\u076F\x03\x02\x02\x02\u0771\u0772\x03\x02\x02\x02\u0772\u0775\x03" +
		"\x02\x02\x02\u0773\u0771\x03\x02\x02\x02\u0774\u076D\x03\x02\x02\x02\u0775" +
		"\u0776\x03\x02\x02\x02\u0776\u0774\x03\x02\x02\x02\u0776\u0777\x03\x02" +
		"\x02\x02\u0777\x91\x03\x02\x02\x02\u0778\u0779\x07K\x02\x02\u0779\u077A" +
		"\x05\xD6l\x02\u077A\u077E\x07r\x02\x02\u077B\u077D\x07\x87\x02\x02\u077C" +
		"\u077B\x03\x02\x02\x02\u077D\u0780\x03\x02\x02\x02\u077E\u077C\x03\x02" +
		"\x02\x02\u077E\u077F\x03\x02\x02\x02\u077F\u0788\x03\x02\x02\x02\u0780" +
		"\u077E\x03\x02\x02\x02\u0781\u0785\x05:\x1E\x02\u0782\u0784\x07\x87\x02" +
		"\x02\u0783\u0782\x03\x02\x02\x02\u0784\u0787\x03\x02\x02\x02\u0785\u0783" +
		"\x03\x02\x02\x02\u0785\u0786\x03\x02\x02\x02\u0786\u0789\x03\x02\x02\x02" +
		"\u0787\u0785\x03\x02\x02\x02\u0788\u0781\x03\x02\x02\x02\u0789\u078A\x03" +
		"\x02\x02\x02\u078A\u0788\x03\x02\x02\x02\u078A\u078B\x03\x02\x02\x02\u078B" +
		"\x93\x03\x02\x02\x02\u078C\u078D\x07L\x02\x02\u078D\u078E\x05\xD6l\x02" +
		"\u078E\u0792\x07r\x02\x02\u078F\u0791\x07\x87\x02\x02\u0790\u078F\x03" +
		"\x02\x02\x02\u0791\u0794\x03\x02\x02\x02\u0792\u0790\x03\x02\x02\x02\u0792" +
		"\u0793\x03\x02\x02\x02\u0793\u079C\x03\x02\x02\x02\u0794\u0792\x03\x02" +
		"\x02\x02\u0795\u0799\x05:\x1E\x02\u0796\u0798\x07\x87\x02\x02\u0797\u0796" +
		"\x03\x02\x02\x02\u0798\u079B\x03\x02\x02\x02\u0799\u0797\x03\x02\x02\x02" +
		"\u0799\u079A\x03\x02\x02\x02\u079A\u079D\x03\x02\x02\x02\u079B\u0799\x03" +
		"\x02\x02\x02\u079C\u0795\x03\x02\x02\x02\u079D\u079E\x03\x02\x02\x02\u079E" +
		"\u079C\x03\x02\x02\x02\u079E\u079F\x03\x02\x02\x02\u079F\x95\x03\x02\x02" +
		"\x02\u07A0\u07A1\x07M\x02\x02\u07A1\u07A2\x05\xD6l\x02\u07A2\u07A6\x07" +
		"r\x02\x02\u07A3\u07A5\x07\x87\x02\x02\u07A4\u07A3\x03\x02\x02\x02\u07A5" +
		"\u07A8\x03\x02\x02\x02\u07A6\u07A4\x03\x02\x02\x02\u07A6\u07A7\x03\x02" +
		"\x02\x02\u07A7\u07B0\x03\x02\x02\x02\u07A8\u07A6\x03\x02\x02\x02\u07A9" +
		"\u07AD\x05:\x1E\x02\u07AA\u07AC\x07\x87\x02\x02\u07AB\u07AA\x03\x02\x02" +
		"\x02\u07AC\u07AF\x03\x02\x02\x02\u07AD\u07AB\x03\x02\x02\x02\u07AD\u07AE" +
		"\x03\x02\x02\x02\u07AE\u07B1\x03\x02\x02\x02\u07AF\u07AD\x03\x02\x02\x02" +
		"\u07B0\u07A9\x03\x02\x02\x02\u07B1\u07B2\x03\x02\x02\x02\u07B2\u07B0\x03" +
		"\x02\x02\x02\u07B2\u07B3\x03\x02\x02\x02\u07B3\x97\x03\x02\x02\x02\u07B4" +
		"\u07B5\x07N\x02\x02\u07B5\u07B6\x05\xD6l\x02\u07B6\u07BA\x07r\x02\x02" +
		"\u07B7\u07B9\x07\x87\x02\x02\u07B8\u07B7\x03\x02\x02\x02\u07B9\u07BC\x03" +
		"\x02\x02\x02\u07BA\u07B8\x03\x02\x02\x02\u07BA\u07BB\x03\x02\x02\x02\u07BB" +
		"\u07C4\x03\x02\x02\x02\u07BC\u07BA\x03\x02\x02\x02\u07BD\u07C1\x05:\x1E" +
		"\x02\u07BE\u07C0\x07\x87\x02\x02\u07BF\u07BE\x03\x02\x02\x02\u07C0\u07C3" +
		"\x03\x02\x02\x02\u07C1\u07BF\x03\x02\x02\x02\u07C1\u07C2\x03\x02\x02\x02" +
		"\u07C2\u07C5\x03\x02\x02\x02\u07C3\u07C1\x03\x02\x02\x02\u07C4\u07BD\x03" +
		"\x02\x02\x02\u07C5\u07C6\x03\x02\x02\x02\u07C6\u07C4\x03\x02\x02\x02\u07C6" +
		"\u07C7\x03\x02\x02\x02\u07C7\x99\x03\x02\x02\x02\u07C8\u07C9\x07O\x02" +
		"\x02\u07C9\u07CA\x05\xD6l\x02\u07CA\u07CE\x07r\x02\x02\u07CB\u07CD\x07" +
		"\x87\x02\x02\u07CC\u07CB\x03\x02\x02\x02\u07CD\u07D0\x03\x02\x02\x02\u07CE" +
		"\u07CC\x03\x02\x02\x02\u07CE\u07CF\x03\x02\x02\x02\u07CF\u07D8\x03\x02" +
		"\x02\x02\u07D0\u07CE\x03\x02\x02\x02\u07D1\u07D5\x05:\x1E\x02\u07D2\u07D4" +
		"\x07\x87\x02\x02\u07D3\u07D2\x03\x02\x02\x02\u07D4\u07D7\x03\x02\x02\x02" +
		"\u07D5\u07D3\x03\x02\x02\x02\u07D5\u07D6\x03\x02\x02\x02\u07D6\u07D9\x03" +
		"\x02\x02\x02\u07D7\u07D5\x03\x02\x02\x02\u07D8\u07D1\x03\x02\x02\x02\u07D9" +
		"\u07DA\x03\x02\x02\x02\u07DA\u07D8\x03\x02\x02\x02\u07DA\u07DB\x03\x02" +
		"\x02\x02\u07DB\x9B\x03\x02\x02\x02\u07DC\u07DD\x07P\x02\x02\u07DD\u07DE" +
		"\x05\xD6l\x02\u07DE\u07E2\x07r\x02\x02\u07DF\u07E1\x07\x87\x02\x02\u07E0" +
		"\u07DF\x03\x02\x02\x02\u07E1\u07E4\x03\x02\x02\x02\u07E2\u07E0\x03\x02" +
		"\x02\x02\u07E2\u07E3\x03\x02\x02\x02\u07E3\u07EC\x03\x02\x02\x02\u07E4" +
		"\u07E2\x03\x02\x02\x02\u07E5\u07E9\x05:\x1E\x02\u07E6\u07E8\x07\x87\x02" +
		"\x02\u07E7\u07E6\x03\x02\x02\x02\u07E8\u07EB\x03\x02\x02\x02\u07E9\u07E7" +
		"\x03\x02\x02\x02\u07E9\u07EA\x03\x02\x02\x02\u07EA\u07ED\x03\x02\x02\x02" +
		"\u07EB\u07E9\x03\x02\x02\x02\u07EC\u07E5\x03\x02\x02\x02\u07ED\u07EE\x03" +
		"\x02\x02\x02\u07EE\u07EC\x03\x02\x02\x02\u07EE\u07EF\x03\x02\x02\x02\u07EF" +
		"\x9D\x03\x02\x02\x02\u07F0\u07F1\x07Q\x02\x02\u07F1\u07F2\x05\xD6l\x02" +
		"\u07F2\u07F6\x07r\x02\x02\u07F3\u07F5\x07\x87\x02\x02\u07F4\u07F3\x03" +
		"\x02\x02\x02\u07F5\u07F8\x03\x02\x02\x02\u07F6\u07F4\x03\x02\x02\x02\u07F6" +
		"\u07F7\x03\x02\x02\x02\u07F7\u0800\x03\x02\x02\x02\u07F8\u07F6\x03\x02" +
		"\x02\x02\u07F9\u07FD\x05:\x1E\x02\u07FA\u07FC\x07\x87\x02\x02\u07FB\u07FA" +
		"\x03\x02\x02\x02\u07FC\u07FF\x03\x02\x02\x02\u07FD\u07FB\x03\x02\x02\x02" +
		"\u07FD\u07FE\x03\x02\x02\x02\u07FE\u0801\x03\x02\x02\x02\u07FF\u07FD\x03" +
		"\x02\x02\x02\u0800\u07F9\x03\x02\x02\x02\u0801\u0802\x03\x02\x02\x02\u0802" +
		"\u0800\x03\x02\x02\x02\u0802\u0803\x03\x02\x02\x02\u0803\x9F\x03\x02\x02" +
		"\x02\u0804\u0805\x07R\x02\x02\u0805\u0806\x05\xD6l\x02\u0806\u080A\x07" +
		"r\x02\x02\u0807\u0809\x07\x87\x02\x02\u0808\u0807\x03\x02\x02\x02\u0809" +
		"\u080C\x03\x02\x02\x02\u080A\u0808\x03\x02\x02\x02\u080A\u080B\x03\x02" +
		"\x02\x02\u080B\u0814\x03\x02\x02\x02\u080C\u080A\x03\x02\x02\x02\u080D" +
		"\u0811\x05:\x1E\x02\u080E\u0810\x07\x87\x02\x02\u080F\u080E\x03\x02\x02" +
		"\x02\u0810\u0813\x03\x02\x02\x02\u0811\u080F\x03\x02\x02\x02\u0811\u0812" +
		"\x03\x02\x02\x02\u0812\u0815\x03\x02\x02\x02\u0813\u0811\x03\x02\x02\x02" +
		"\u0814\u080D\x03\x02\x02\x02\u0815\u0816\x03\x02\x02\x02\u0816\u0814\x03" +
		"\x02\x02\x02\u0816\u0817\x03\x02\x02\x02\u0817\xA1\x03\x02\x02\x02\u0818" +
		"\u0819\x07S\x02\x02\u0819\u081A\x05\xD6l\x02\u081A\u081E\x07r\x02\x02" +
		"\u081B\u081D\x07\x87\x02\x02\u081C\u081B\x03\x02\x02\x02\u081D\u0820\x03" +
		"\x02\x02\x02\u081E\u081C\x03\x02\x02\x02\u081E\u081F\x03\x02\x02\x02\u081F" +
		"\u0828\x03\x02\x02\x02\u0820\u081E\x03\x02\x02\x02\u0821\u0825\x05:\x1E" +
		"\x02\u0822\u0824\x07\x87\x02\x02\u0823\u0822\x03\x02\x02\x02\u0824\u0827" +
		"\x03\x02\x02\x02\u0825\u0823\x03\x02\x02\x02\u0825\u0826\x03\x02\x02\x02" +
		"\u0826\u0829\x03\x02\x02\x02\u0827\u0825\x03\x02\x02\x02\u0828\u0821\x03" +
		"\x02\x02\x02\u0829\u082A\x03\x02\x02\x02\u082A\u0828\x03\x02\x02\x02\u082A" +
		"\u082B\x03\x02\x02\x02\u082B\xA3\x03\x02\x02\x02\u082C\u082D\x07T\x02" +
		"\x02\u082D\u082E\x05\xD6l\x02\u082E\u0832\x07r\x02\x02\u082F\u0831\x07" +
		"\x87\x02\x02\u0830\u082F\x03\x02\x02\x02\u0831\u0834\x03\x02\x02\x02\u0832" +
		"\u0830\x03\x02\x02\x02\u0832\u0833\x03\x02\x02\x02\u0833\u083C\x03\x02" +
		"\x02\x02\u0834\u0832\x03\x02\x02\x02\u0835\u0839\x05:\x1E\x02\u0836\u0838" +
		"\x07\x87\x02\x02\u0837\u0836\x03\x02\x02\x02\u0838\u083B\x03\x02\x02\x02" +
		"\u0839\u0837\x03\x02\x02\x02\u0839\u083A\x03\x02\x02\x02\u083A\u083D\x03" +
		"\x02\x02\x02\u083B\u0839\x03\x02\x02\x02\u083C\u0835\x03\x02\x02\x02\u083D" +
		"\u083E\x03\x02\x02\x02\u083E\u083C\x03\x02\x02\x02\u083E\u083F\x03\x02" +
		"\x02\x02\u083F\xA5\x03\x02\x02\x02\u0840\u0841\x07U\x02\x02\u0841\u0842" +
		"\x05\xD6l\x02\u0842\u0846\x07r\x02\x02\u0843\u0845\x07\x87\x02\x02\u0844" +
		"\u0843\x03\x02\x02\x02\u0845\u0848\x03\x02\x02\x02\u0846\u0844\x03\x02" +
		"\x02\x02\u0846\u0847\x03\x02\x02\x02\u0847\u0850\x03\x02\x02\x02\u0848" +
		"\u0846\x03\x02\x02\x02\u0849\u084D\x05:\x1E\x02\u084A\u084C\x07\x87\x02" +
		"\x02\u084B\u084A\x03\x02\x02\x02\u084C\u084F\x03\x02\x02\x02\u084D\u084B" +
		"\x03\x02\x02\x02\u084D\u084E\x03\x02\x02\x02\u084E\u0851\x03\x02\x02\x02" +
		"\u084F\u084D\x03\x02\x02\x02\u0850\u0849\x03\x02\x02\x02\u0851\u0852\x03" +
		"\x02\x02\x02\u0852\u0850\x03\x02\x02\x02\u0852\u0853\x03\x02\x02\x02\u0853" +
		"\xA7\x03\x02\x02\x02\u0854\u0855\x07V\x02\x02\u0855\u0856\x05\xD6l\x02" +
		"\u0856\u085A\x07r\x02\x02\u0857\u0859\x07\x87\x02\x02\u0858\u0857\x03" +
		"\x02\x02\x02\u0859\u085C\x03\x02\x02\x02\u085A\u0858\x03\x02\x02\x02\u085A" +
		"\u085B\x03\x02\x02\x02\u085B\u0864\x03\x02\x02\x02\u085C\u085A\x03\x02" +
		"\x02\x02\u085D\u0861\x05:\x1E\x02\u085E\u0860\x07\x87\x02\x02\u085F\u085E" +
		"\x03\x02\x02\x02\u0860\u0863\x03\x02\x02\x02\u0861\u085F\x03\x02\x02\x02" +
		"\u0861\u0862\x03\x02\x02\x02\u0862\u0865\x03\x02\x02\x02\u0863\u0861\x03" +
		"\x02\x02\x02\u0864\u085D\x03\x02\x02\x02\u0865\u0866\x03\x02\x02\x02\u0866" +
		"\u0864\x03\x02\x02\x02\u0866\u0867\x03\x02\x02\x02\u0867\xA9\x03\x02\x02" +
		"\x02\u0868\u0869\x07W\x02\x02\u0869\u086A\x05\xD6l\x02\u086A\u086E\x07" +
		"r\x02\x02\u086B\u086D\x07\x87\x02\x02\u086C\u086B\x03\x02\x02\x02\u086D" +
		"\u0870\x03\x02\x02\x02\u086E\u086C\x03\x02\x02\x02\u086E\u086F\x03\x02" +
		"\x02\x02\u086F\u0878\x03\x02\x02\x02\u0870\u086E\x03\x02\x02\x02\u0871" +
		"\u0875\x05:\x1E\x02\u0872\u0874\x07\x87\x02\x02\u0873\u0872\x03\x02\x02" +
		"\x02\u0874\u0877\x03\x02\x02\x02\u0875\u0873\x03\x02\x02\x02\u0875\u0876" +
		"\x03\x02\x02\x02\u0876\u0879\x03\x02\x02\x02\u0877\u0875\x03\x02\x02\x02" +
		"\u0878\u0871\x03\x02\x02\x02\u0879\u087A\x03\x02\x02\x02\u087A\u0878\x03" +
		"\x02\x02\x02\u087A\u087B\x03\x02\x02\x02\u087B\xAB\x03\x02\x02\x02\u087C" +
		"\u087D\x07X\x02\x02\u087D\u087E\x05\xD6l\x02\u087E\u0882\x07r\x02\x02" +
		"\u087F\u0881\x07\x87\x02\x02\u0880\u087F\x03\x02\x02\x02\u0881\u0884\x03" +
		"\x02\x02\x02\u0882\u0880\x03\x02\x02\x02\u0882\u0883\x03\x02\x02\x02\u0883" +
		"\u088C\x03\x02\x02\x02\u0884\u0882\x03\x02\x02\x02\u0885\u0889\x05:\x1E" +
		"\x02\u0886\u0888\x07\x87\x02\x02\u0887\u0886\x03\x02\x02\x02\u0888\u088B" +
		"\x03\x02\x02\x02\u0889\u0887\x03\x02\x02\x02\u0889\u088A\x03\x02\x02\x02" +
		"\u088A\u088D\x03\x02\x02\x02\u088B\u0889\x03\x02\x02\x02\u088C\u0885\x03" +
		"\x02\x02\x02\u088D\u088E\x03\x02\x02\x02\u088E\u088C\x03\x02\x02\x02\u088E" +
		"\u088F\x03\x02\x02\x02\u088F\xAD\x03\x02\x02\x02\u0890\u0891\x07Y\x02" +
		"\x02\u0891\u0892\x05\xD6l\x02\u0892\u0896\x07r\x02\x02\u0893\u0895\x07" +
		"\x87\x02\x02\u0894\u0893\x03\x02\x02\x02\u0895\u0898\x03\x02\x02\x02\u0896" +
		"\u0894\x03\x02\x02\x02\u0896\u0897\x03\x02\x02\x02\u0897\u08A0\x03\x02" +
		"\x02\x02\u0898\u0896\x03\x02\x02\x02\u0899\u089D\x05:\x1E\x02\u089A\u089C" +
		"\x07\x87\x02\x02\u089B\u089A\x03\x02\x02\x02\u089C\u089F\x03\x02\x02\x02" +
		"\u089D\u089B\x03\x02\x02\x02\u089D\u089E\x03\x02\x02\x02\u089E\u08A1\x03" +
		"\x02\x02\x02\u089F\u089D\x03\x02\x02\x02\u08A0\u0899\x03\x02\x02\x02\u08A1" +
		"\u08A2\x03\x02\x02\x02\u08A2\u08A0\x03\x02\x02\x02\u08A2\u08A3\x03\x02" +
		"\x02\x02\u08A3\xAF\x03\x02\x02\x02\u08A4\u08A5\x07Z\x02\x02\u08A5\u08A6" +
		"\x05\xD6l\x02\u08A6\u08AA\x07r\x02\x02\u08A7\u08A9\x07\x87\x02\x02\u08A8" +
		"\u08A7\x03\x02\x02\x02\u08A9\u08AC\x03\x02\x02\x02\u08AA\u08A8\x03\x02" +
		"\x02\x02\u08AA\u08AB\x03\x02\x02\x02\u08AB\u08B4\x03\x02\x02\x02\u08AC" +
		"\u08AA\x03\x02\x02\x02\u08AD\u08B1\x05:\x1E\x02\u08AE\u08B0\x07\x87\x02" +
		"\x02\u08AF\u08AE\x03\x02\x02\x02\u08B0\u08B3\x03\x02\x02\x02\u08B1\u08AF" +
		"\x03\x02\x02\x02\u08B1\u08B2\x03\x02\x02\x02\u08B2\u08B5\x03\x02\x02\x02" +
		"\u08B3\u08B1\x03\x02\x02\x02\u08B4\u08AD\x03\x02\x02\x02\u08B5\u08B6\x03" +
		"\x02\x02\x02\u08B6\u08B4\x03\x02\x02\x02\u08B6\u08B7\x03\x02\x02\x02\u08B7" +
		"\xB1\x03\x02\x02\x02\u08B8\u08B9\x07[\x02\x02\u08B9\u08BA\x05\xD6l\x02" +
		"\u08BA\u08BE\x07r\x02\x02\u08BB\u08BD\x07\x87\x02\x02\u08BC\u08BB\x03" +
		"\x02\x02\x02\u08BD\u08C0\x03\x02\x02\x02\u08BE\u08BC\x03\x02\x02\x02\u08BE" +
		"\u08BF\x03\x02\x02\x02\u08BF\u08C8\x03\x02\x02\x02\u08C0\u08BE\x03\x02" +
		"\x02\x02\u08C1\u08C5\x05:\x1E\x02\u08C2\u08C4\x07\x87\x02\x02\u08C3\u08C2" +
		"\x03\x02\x02\x02\u08C4\u08C7\x03\x02\x02\x02\u08C5\u08C3\x03\x02\x02\x02" +
		"\u08C5\u08C6\x03\x02\x02\x02\u08C6\u08C9\x03\x02\x02\x02\u08C7\u08C5\x03" +
		"\x02\x02\x02\u08C8\u08C1\x03\x02\x02\x02\u08C9\u08CA\x03\x02\x02\x02\u08CA" +
		"\u08C8\x03\x02\x02\x02\u08CA\u08CB\x03\x02\x02\x02\u08CB\xB3\x03\x02\x02" +
		"\x02\u08CC\u08CD\x07\\\x02\x02\u08CD\u08CE\x05\xD6l\x02\u08CE\u08D2\x07" +
		"r\x02\x02\u08CF\u08D1\x07\x87\x02\x02\u08D0\u08CF\x03\x02\x02\x02\u08D1" +
		"\u08D4\x03\x02\x02\x02\u08D2\u08D0\x03\x02\x02\x02\u08D2\u08D3\x03\x02" +
		"\x02\x02\u08D3\u08DC\x03\x02\x02\x02\u08D4\u08D2\x03\x02\x02\x02\u08D5" +
		"\u08D9\x05:\x1E\x02\u08D6\u08D8\x07\x87\x02\x02\u08D7\u08D6\x03\x02\x02" +
		"\x02\u08D8\u08DB\x03\x02\x02\x02\u08D9\u08D7\x03\x02\x02\x02\u08D9\u08DA" +
		"\x03\x02\x02\x02\u08DA\u08DD\x03\x02\x02\x02\u08DB\u08D9\x03\x02\x02\x02" +
		"\u08DC\u08D5\x03\x02\x02\x02\u08DD\u08DE\x03\x02\x02\x02\u08DE\u08DC\x03" +
		"\x02\x02\x02\u08DE\u08DF\x03\x02\x02\x02\u08DF\xB5\x03\x02\x02\x02\u08E0" +
		"\u08E1\x07]\x02\x02\u08E1\u08E2\x05\xD6l\x02\u08E2\u08E6\x07r\x02\x02" +
		"\u08E3\u08E5\x07\x87\x02\x02\u08E4\u08E3\x03\x02\x02\x02\u08E5\u08E8\x03" +
		"\x02\x02\x02\u08E6\u08E4\x03\x02\x02\x02\u08E6\u08E7\x03\x02\x02\x02\u08E7" +
		"\u08F0\x03\x02\x02\x02\u08E8\u08E6\x03\x02\x02\x02\u08E9\u08ED\x05:\x1E" +
		"\x02\u08EA\u08EC\x07\x87\x02\x02\u08EB\u08EA\x03\x02\x02\x02\u08EC\u08EF" +
		"\x03\x02\x02\x02\u08ED\u08EB\x03\x02\x02\x02\u08ED\u08EE\x03\x02\x02\x02" +
		"\u08EE\u08F1\x03\x02\x02\x02\u08EF\u08ED\x03\x02\x02\x02\u08F0\u08E9\x03" +
		"\x02\x02\x02\u08F1\u08F2\x03\x02\x02\x02\u08F2\u08F0\x03\x02\x02\x02\u08F2" +
		"\u08F3\x03\x02\x02\x02\u08F3\xB7\x03\x02\x02\x02\u08F4\u08F5\x07\x18\x02" +
		"\x02\u08F5\u08F6\x05\xD0i\x02\u08F6\u08FA\x07r\x02\x02\u08F7\u08F9\x07" +
		"\x87\x02\x02\u08F8\u08F7\x03\x02\x02\x02\u08F9\u08FC\x03\x02\x02\x02\u08FA" +
		"\u08F8\x03\x02\x02\x02\u08FA\u08FB\x03\x02\x02\x02\u08FB\u0904\x03\x02" +
		"\x02\x02\u08FC\u08FA\x03\x02\x02\x02\u08FD\u0901\x05:\x1E\x02\u08FE\u0900" +
		"\x07\x87\x02\x02\u08FF\u08FE\x03\x02\x02\x02\u0900\u0903\x03\x02\x02\x02" +
		"\u0901\u08FF\x03\x02\x02\x02\u0901\u0902\x03\x02\x02\x02\u0902\u0905\x03" +
		"\x02\x02\x02\u0903\u0901\x03\x02\x02\x02\u0904\u08FD\x03\x02\x02\x02\u0905" +
		"\u0906\x03\x02\x02\x02\u0906\u0904\x03\x02\x02\x02\u0906\u0907\x03\x02" +
		"\x02\x02\u0907\xB9\x03\x02\x02\x02\u0908\u0909\x07 \x02\x02\u0909\u090A" +
		"\x05\xD0i\x02\u090A\u0915\x07r\x02\x02\u090B\u090C\t\x07\x02\x02\u090C" +
		"\u0912\x05\xBC_\x02\u090D\u090E\x05\u014C\xA7\x02\u090E\u090F\x05\xBC" +
		"_\x02\u090F\u0911\x03\x02\x02\x02\u0910\u090D\x03\x02\x02\x02\u0911\u0914" +
		"\x03\x02\x02\x02\u0912\u0910\x03\x02\x02\x02\u0912\u0913\x03\x02\x02\x02" +
		"\u0913\u0916\x03\x02\x02\x02\u0914\u0912\x03\x02\x02\x02\u0915\u090B\x03" +
		"\x02\x02\x02\u0916\u0917\x03\x02\x02\x02\u0917\u0915\x03\x02\x02\x02\u0917" +
		"\u0918\x03\x02\x02\x02\u0918\u0919\x03\x02\x02\x02\u0919\u091D\t\x07\x02" +
		"\x02\u091A\u091C\x07\x87\x02\x02\u091B\u091A\x03\x02\x02\x02\u091C\u091F" +
		"\x03\x02\x02\x02\u091D\u091B\x03\x02\x02\x02\u091D\u091E\x03\x02\x02\x02" +
		"\u091E\u092D\x03\x02\x02\x02\u091F\u091D\x03\x02\x02\x02\u0920\u092A\x05" +
		"L\'\x02\u0921\u0923\x07\x87\x02\x02\u0922\u0921\x03\x02\x02\x02\u0923" +
		"\u0926\x03\x02\x02\x02\u0924\u0922\x03\x02\x02\x02\u0924\u0925\x03\x02" +
		"\x02\x02\u0925\u0927\x03\x02\x02\x02\u0926\u0924\x03\x02\x02\x02\u0927" +
		"\u0929\x05L\'\x02\u0928\u0924\x03\x02\x02\x02\u0929\u092C\x03\x02\x02" +
		"\x02\u092A\u0928\x03\x02\x02\x02\u092A\u092B\x03\x02\x02\x02\u092B\u092E" +
		"\x03\x02\x02\x02\u092C\u092A\x03\x02\x02\x02\u092D\u0920\x03\x02\x02\x02" +
		"\u092D\u092E\x03\x02\x02\x02\u092E\xBB\x03\x02\x02\x02\u092F\u0937\x05" +
		"\u014E\xA8\x02\u0930\u0937\x05\u012C\x97\x02\u0931\u0937\x05\u010C\x87" +
		"\x02\u0932\u0937\x05<\x1F\x02\u0933\u0937\x05@!\x02\u0934\u0937\x05B\"" +
		"\x02\u0935\u0937\x05D#\x02\u0936\u092F\x03\x02\x02\x02\u0936\u0930\x03" +
		"\x02\x02\x02\u0936\u0931\x03\x02\x02\x02\u0936\u0932\x03\x02\x02\x02\u0936" +
		"\u0933\x03\x02\x02\x02\u0936\u0934\x03\x02\x02\x02\u0936\u0935\x03\x02" +
		"\x02\x02\u0937\u0938\x03\x02\x02\x02\u0938\u0936\x03\x02\x02\x02\u0938" +
		"\u0939\x03\x02\x02\x02\u0939\xBD\x03\x02\x02\x02\u093A\u093B\x07\"\x02" +
		"\x02\u093B\u093C\x05\xD0i\x02\u093C\u0940\x07r\x02\x02\u093D\u093F\x07" +
		"\x87\x02\x02\u093E\u093D\x03\x02\x02\x02\u093F\u0942\x03\x02\x02\x02\u0940" +
		"\u093E\x03\x02\x02\x02\u0940\u0941\x03\x02\x02\x02\u0941\u094C\x03\x02" +
		"\x02\x02\u0942\u0940\x03\x02\x02\x02\u0943\u0947\x05:\x1E\x02\u0944\u0946" +
		"\x07\x87\x02\x02\u0945\u0944\x03\x02\x02\x02\u0946\u0949\x03\x02\x02\x02" +
		"\u0947\u0945\x03\x02\x02\x02\u0947\u0948\x03\x02\x02\x02\u0948\u094B\x03" +
		"\x02\x02\x02\u0949\u0947\x03\x02\x02\x02\u094A\u0943\x03\x02\x02\x02\u094B" +
		"\u094E\x03\x02\x02\x02\u094C\u094A\x03\x02\x02\x02\u094C\u094D\x03\x02" +
		"\x02\x02\u094D\u0957\x03\x02\x02\x02\u094E\u094C\x03\x02\x02\x02\u094F" +
		"\u0950\t\x07\x02\x02\u0950\u0953\x05\u0144\xA3\x02\u0951\u0952\x07\x87" +
		"\x02\x02\u0952\u0954\x05\xC0a\x02\u0953\u0951\x03\x02\x02\x02\u0954\u0955" +
		"\x03\x02\x02\x02\u0955\u0953\x03\x02\x02\x02\u0955\u0956\x03\x02\x02\x02" +
		"\u0956\u0958\x03\x02\x02\x02\u0957\u094F\x03\x02\x02\x02\u0958\u0959\x03" +
		"\x02\x02\x02\u0959\u0957\x03\x02\x02\x02\u0959\u095A\x03\x02\x02\x02\u095A" +
		"\u095B\x03\x02\x02\x02\u095B\u095F\t\x07\x02\x02\u095C\u095E\x07\x87\x02" +
		"\x02\u095D\u095C\x03\x02\x02\x02\u095E\u0961\x03\x02\x02\x02\u095F\u095D" +
		"\x03\x02\x02\x02\u095F\u0960\x03\x02\x02\x02\u0960\u096F\x03\x02\x02\x02" +
		"\u0961\u095F\x03\x02\x02\x02\u0962\u096C\x05L\'\x02\u0963\u0965\x07\x87" +
		"\x02\x02\u0964\u0963\x03\x02\x02\x02\u0965\u0968\x03\x02\x02\x02\u0966" +
		"\u0964\x03\x02\x02\x02\u0966\u0967\x03\x02\x02\x02\u0967\u0969\x03\x02" +
		"\x02\x02\u0968\u0966\x03\x02\x02\x02\u0969\u096B\x05L\'\x02\u096A\u0966" +
		"\x03\x02\x02\x02\u096B\u096E\x03\x02\x02\x02\u096C\u096A\x03\x02\x02\x02" +
		"\u096C\u096D\x03\x02\x02\x02\u096D\u0970\x03\x02\x02\x02\u096E\u096C\x03" +
		"\x02\x02\x02\u096F\u0962\x03\x02\x02\x02\u096F\u0970\x03\x02\x02\x02\u0970" +
		"\xBF\x03\x02\x02\x02\u0971\u0972\x07c\x02\x02\u0972\u0973\x05\u0144\xA3" +
		"\x02\u0973\u0975\x07r\x02\x02\u0974\u0976\x05\xCEh\x02\u0975\u0974\x03" +
		"\x02\x02\x02\u0975\u0976\x03\x02\x02\x02\u0976\xC1\x03\x02\x02\x02\u0977" +
		"\u0978\x07#\x02\x02\u0978\u0979\x05\xD0i\x02\u0979\u097D\x07r\x02\x02" +
		"\u097A\u097C\x07\x87\x02\x02\u097B\u097A\x03\x02\x02\x02\u097C\u097F\x03" +
		"\x02\x02\x02\u097D\u097B\x03\x02\x02\x02\u097D\u097E\x03\x02\x02\x02\u097E" +
		"\u0989\x03\x02\x02\x02\u097F\u097D\x03\x02\x02\x02\u0980\u0984\x05:\x1E" +
		"\x02\u0981\u0983\x07\x87\x02\x02\u0982\u0981\x03\x02\x02\x02\u0983\u0986" +
		"\x03\x02\x02\x02\u0984\u0982\x03\x02\x02\x02\u0984\u0985\x03\x02\x02\x02" +
		"\u0985\u0988\x03\x02\x02\x02\u0986\u0984\x03\x02\x02\x02\u0987\u0980\x03" +
		"\x02\x02\x02\u0988\u098B\x03\x02\x02\x02\u0989\u0987\x03\x02\x02\x02\u0989" +
		"\u098A\x03\x02\x02\x02\u098A\u099B\x03\x02\x02\x02\u098B\u0989\x03\x02" +
		"\x02\x02\u098C\u098E\t\x07\x02\x02\u098D\u098F\x05\u0144\xA3\x02\u098E" +
		"\u098D\x03\x02\x02\x02\u098E\u098F\x03\x02\x02\x02\u098F\u0997\x03\x02" +
		"\x02\x02\u0990\u0992\x07\x87\x02\x02\u0991\u0990\x03\x02\x02\x02\u0992" +
		"\u0995\x03\x02\x02\x02\u0993\u0991\x03\x02\x02\x02\u0993\u0994\x03\x02" +
		"\x02\x02\u0994\u0996\x03\x02\x02\x02\u0995\u0993\x03\x02\x02\x02\u0996" +
		"\u0998\x05\xC0a\x02\u0997\u0993\x03\x02\x02\x02\u0998\u0999\x03\x02\x02" +
		"\x02\u0999\u0997\x03\x02\x02\x02\u0999\u099A\x03\x02\x02\x02\u099A\u099C" +
		"\x03\x02\x02\x02\u099B\u098C\x03\x02\x02\x02\u099C\u099D\x03\x02\x02\x02" +
		"\u099D\u099B\x03\x02\x02\x02\u099D\u099E\x03\x02\x02\x02\u099E\u099F\x03" +
		"\x02\x02\x02\u099F\u09A0\t\x07\x02\x02\u09A0\xC3\x03\x02\x02\x02\u09A1" +
		"\u09A2\x07$\x02\x02\u09A2\u09A3\x05\xD0i\x02\u09A3\u09A7\x07r\x02\x02" +
		"\u09A4\u09A6\x07\x87\x02\x02\u09A5\u09A4\x03\x02\x02\x02\u09A6\u09A9\x03" +
		"\x02\x02\x02\u09A7\u09A5\x03\x02\x02\x02\u09A7\u09A8\x03\x02\x02\x02\u09A8" +
		"\u09B3\x03\x02\x02\x02\u09A9\u09A7\x03\x02\x02\x02\u09AA\u09AE\x05:\x1E" +
		"\x02\u09AB\u09AD\x07\x87\x02\x02\u09AC\u09AB\x03\x02\x02\x02\u09AD\u09B0" +
		"\x03\x02\x02\x02\u09AE\u09AC\x03\x02\x02\x02\u09AE\u09AF\x03\x02\x02\x02" +
		"\u09AF\u09B2\x03\x02\x02\x02\u09B0\u09AE\x03\x02\x02\x02\u09B1\u09AA\x03" +
		"\x02\x02\x02\u09B2\u09B5\x03\x02\x02\x02\u09B3\u09B1\x03\x02\x02\x02\u09B3" +
		"\u09B4\x03\x02\x02\x02\u09B4\u09BE\x03\x02\x02\x02\u09B5\u09B3\x03\x02" +
		"\x02\x02\u09B6\u09B7\t\x07\x02\x02\u09B7\u09BA\x05\u0144\xA3\x02\u09B8" +
		"\u09B9\x07\x87\x02\x02\u09B9\u09BB\x05\xC0a\x02\u09BA\u09B8\x03\x02\x02" +
		"\x02\u09BB\u09BC\x03\x02\x02\x02\u09BC\u09BA\x03\x02\x02\x02\u09BC\u09BD" +
		"\x03\x02\x02\x02\u09BD\u09BF\x03\x02\x02\x02\u09BE\u09B6\x03\x02\x02\x02" +
		"\u09BF\u09C0\x03\x02\x02\x02\u09C0\u09BE\x03\x02\x02\x02\u09C0\u09C1\x03" +
		"\x02\x02\x02\u09C1\u09C2\x03\x02\x02\x02\u09C2\u09C3\t\x07\x02\x02\u09C3" +
		"\xC5\x03\x02\x02\x02\u09C4\u09C5\x07%\x02\x02\u09C5\u09C6\x05\xD0i\x02" +
		"\u09C6\u09CA\x07r\x02\x02\u09C7\u09C9\x07\x87\x02\x02\u09C8\u09C7\x03" +
		"\x02\x02\x02\u09C9\u09CC\x03\x02\x02\x02\u09CA\u09C8\x03\x02\x02\x02\u09CA" +
		"\u09CB\x03\x02\x02\x02\u09CB\u09D6\x03\x02\x02\x02\u09CC\u09CA\x03\x02" +
		"\x02\x02\u09CD\u09D1\x05:\x1E\x02\u09CE\u09D0\x07\x87\x02\x02\u09CF\u09CE" +
		"\x03\x02\x02\x02\u09D0\u09D3\x03\x02\x02\x02\u09D1\u09CF\x03\x02\x02\x02" +
		"\u09D1\u09D2\x03\x02\x02\x02\u09D2\u09D5\x03\x02\x02\x02\u09D3\u09D1\x03" +
		"\x02\x02\x02\u09D4\u09CD\x03\x02\x02\x02\u09D5\u09D8\x03\x02\x02\x02\u09D6" +
		"\u09D4\x03\x02\x02\x02\u09D6\u09D7\x03\x02\x02\x02\u09D7\u09E1\x03\x02" +
		"\x02\x02\u09D8\u09D6\x03\x02\x02\x02\u09D9\u09DA\t\x07\x02\x02\u09DA\u09DD" +
		"\x05\u0144\xA3\x02\u09DB\u09DC\x07\x87\x02\x02\u09DC\u09DE\x05\xC0a\x02" +
		"\u09DD\u09DB\x03\x02\x02\x02\u09DE\u09DF\x03\x02\x02\x02\u09DF\u09DD\x03" +
		"\x02\x02\x02\u09DF\u09E0\x03\x02\x02\x02\u09E0\u09E2\x03\x02\x02\x02\u09E1" +
		"\u09D9\x03\x02\x02\x02\u09E2\u09E3\x03\x02\x02\x02\u09E3\u09E1\x03\x02" +
		"\x02\x02\u09E3\u09E4\x03\x02\x02\x02\u09E4\u09E5\x03\x02\x02\x02\u09E5" +
		"\u09E6\t\x07\x02\x02\u09E6\xC7\x03\x02\x02\x02\u09E7\u09E8\x07&\x02\x02" +
		"\u09E8\u09E9\x05\xD0i\x02\u09E9\u09ED\x07r\x02\x02\u09EA\u09EC\x07\x87" +
		"\x02\x02\u09EB\u09EA\x03\x02\x02\x02\u09EC\u09EF\x03\x02\x02\x02\u09ED" +
		"\u09EB\x03\x02\x02\x02\u09ED\u09EE\x03\x02\x02\x02\u09EE\u09F9\x03\x02" +
		"\x02\x02\u09EF\u09ED\x03\x02\x02\x02";
	private static readonly _serializedATNSegment5: string =
		"\u09F0\u09F4\x05:\x1E\x02\u09F1\u09F3\x07\x87\x02\x02\u09F2\u09F1\x03" +
		"\x02\x02\x02\u09F3\u09F6\x03\x02\x02\x02\u09F4\u09F2\x03\x02\x02\x02\u09F4" +
		"\u09F5\x03\x02\x02\x02\u09F5\u09F8\x03\x02\x02\x02\u09F6\u09F4\x03\x02" +
		"\x02\x02\u09F7\u09F0\x03\x02\x02\x02\u09F8\u09FB\x03\x02\x02\x02\u09F9" +
		"\u09F7\x03\x02\x02\x02\u09F9\u09FA\x03\x02\x02\x02\u09FA\u0A04\x03\x02" +
		"\x02\x02\u09FB\u09F9\x03\x02\x02\x02\u09FC\u09FD\t\x07\x02\x02\u09FD\u0A00" +
		"\x05\u0144\xA3\x02\u09FE\u09FF\x07\x87\x02\x02\u09FF\u0A01\x05\xC0a\x02" +
		"\u0A00\u09FE\x03\x02\x02\x02\u0A01\u0A02\x03\x02\x02\x02\u0A02\u0A00\x03" +
		"\x02\x02\x02\u0A02\u0A03\x03\x02\x02\x02\u0A03\u0A05\x03\x02\x02\x02\u0A04" +
		"\u09FC\x03\x02\x02\x02\u0A05\u0A06\x03\x02\x02\x02\u0A06\u0A04\x03\x02" +
		"\x02\x02\u0A06\u0A07\x03\x02\x02\x02\u0A07\u0A08\x03\x02\x02\x02\u0A08" +
		"\u0A09\t\x07\x02\x02\u0A09\xC9\x03\x02\x02\x02\u0A0A\u0A0B\x07!\x02\x02" +
		"\u0A0B\u0A0C\x05\xD0i\x02\u0A0C\u0A10\x07r\x02\x02\u0A0D\u0A0F\x07\x87" +
		"\x02\x02\u0A0E\u0A0D\x03\x02\x02\x02\u0A0F\u0A12\x03\x02\x02\x02\u0A10" +
		"\u0A0E\x03\x02\x02\x02\u0A10\u0A11\x03\x02\x02\x02\u0A11\u0A1C\x03\x02" +
		"\x02\x02\u0A12\u0A10\x03\x02\x02\x02\u0A13\u0A17\x05:\x1E\x02\u0A14\u0A16" +
		"\x07\x87\x02\x02\u0A15\u0A14\x03\x02\x02\x02\u0A16\u0A19\x03\x02\x02\x02" +
		"\u0A17\u0A15\x03\x02\x02\x02\u0A17\u0A18\x03\x02\x02\x02\u0A18\u0A1B\x03" +
		"\x02\x02\x02\u0A19\u0A17\x03\x02\x02\x02\u0A1A\u0A13\x03\x02\x02\x02\u0A1B" +
		"\u0A1E\x03\x02\x02\x02\u0A1C\u0A1A\x03\x02\x02\x02\u0A1C\u0A1D\x03\x02" +
		"\x02\x02\u0A1D\u0A2C\x03\x02\x02\x02\u0A1E\u0A1C\x03\x02\x02\x02\u0A1F" +
		"\u0A20\t\x07\x02\x02\u0A20\u0A28\x05\xCCg\x02\u0A21\u0A23\x07\x87\x02" +
		"\x02\u0A22\u0A21\x03\x02\x02\x02\u0A23\u0A26\x03\x02\x02\x02\u0A24\u0A22" +
		"\x03\x02\x02\x02\u0A24\u0A25\x03\x02\x02\x02\u0A25\u0A27\x03\x02\x02\x02" +
		"\u0A26\u0A24\x03\x02\x02\x02\u0A27\u0A29\x05\xC0a\x02\u0A28\u0A24\x03" +
		"\x02\x02\x02\u0A29\u0A2A\x03\x02\x02\x02\u0A2A\u0A28\x03\x02\x02\x02\u0A2A" +
		"\u0A2B\x03\x02\x02\x02\u0A2B\u0A2D\x03\x02\x02\x02\u0A2C\u0A1F\x03\x02" +
		"\x02\x02\u0A2D\u0A2E\x03\x02\x02\x02\u0A2E\u0A2C\x03\x02\x02\x02\u0A2E" +
		"\u0A2F\x03\x02\x02\x02\u0A2F\u0A30\x03\x02\x02\x02\u0A30\u0A34\t\x07\x02" +
		"\x02\u0A31\u0A33\x07\x87\x02\x02\u0A32\u0A31\x03\x02\x02\x02\u0A33\u0A36" +
		"\x03\x02\x02\x02\u0A34\u0A32\x03\x02\x02\x02\u0A34\u0A35\x03\x02\x02\x02" +
		"\u0A35\u0A44\x03\x02\x02\x02\u0A36\u0A34\x03\x02\x02\x02\u0A37\u0A41\x05" +
		"L\'\x02\u0A38\u0A3A\x07\x87\x02\x02\u0A39\u0A38\x03\x02\x02\x02\u0A3A" +
		"\u0A3D\x03\x02\x02\x02\u0A3B\u0A39\x03\x02\x02\x02\u0A3B\u0A3C\x03\x02" +
		"\x02\x02\u0A3C\u0A3E\x03\x02\x02\x02\u0A3D\u0A3B\x03\x02\x02\x02\u0A3E" +
		"\u0A40\x05L\'\x02\u0A3F\u0A3B\x03\x02\x02\x02\u0A40\u0A43\x03\x02\x02" +
		"\x02\u0A41\u0A3F\x03\x02\x02\x02\u0A41\u0A42\x03\x02\x02\x02\u0A42\u0A45" +
		"\x03\x02\x02\x02\u0A43\u0A41\x03\x02\x02\x02\u0A44\u0A37\x03\x02\x02\x02" +
		"\u0A44\u0A45\x03\x02\x02\x02\u0A45\xCB\x03\x02\x02\x02\u0A46\u0A48\n\b" +
		"\x02\x02\u0A47\u0A46\x03\x02\x02\x02\u0A48\u0A49\x03\x02\x02\x02\u0A49" +
		"\u0A47\x03\x02\x02\x02\u0A49\u0A4A\x03\x02\x02\x02\u0A4A\xCD\x03\x02\x02" +
		"\x02\u0A4B\u0A4C\x07\x98\x02\x02\u0A4C\u0A4D\x07\x85\x02\x02\u0A4D\u0A4E" +
		"\x07r\x02\x02\u0A4E\xCF\x03\x02\x02\x02\u0A4F\u0A51\x05\xD2j\x02\u0A50" +
		"\u0A4F\x03\x02\x02\x02\u0A51\u0A54\x03\x02\x02\x02\u0A52\u0A50\x03\x02" +
		"\x02\x02\u0A52\u0A53\x03\x02\x02\x02\u0A53\u0A59\x03\x02\x02\x02\u0A54" +
		"\u0A52\x03\x02\x02\x02\u0A55\u0A58\x07\xCF\x02\x02\u0A56\u0A58\x05\xD4" +
		"k\x02\u0A57\u0A55\x03\x02\x02\x02\u0A57\u0A56\x03\x02\x02\x02\u0A58\u0A5B" +
		"\x03\x02\x02\x02\u0A59\u0A57\x03\x02\x02\x02\u0A59\u0A5A\x03\x02\x02\x02" +
		"\u0A5A\xD1\x03\x02\x02\x02\u0A5B\u0A59\x03\x02\x02\x02\u0A5C\u0A5D\t\t" +
		"\x02\x02\u0A5D\xD3\x03\x02\x02\x02\u0A5E\u0A68\x05\xD8m\x02\u0A5F\u0A68" +
		"\x05\u0110\x89\x02\u0A60\u0A68\x05\xDAn\x02\u0A61\u0A68\x05\xDCo\x02\u0A62" +
		"\u0A68\x05\xDEp\x02\u0A63\u0A68\x05\xE0q\x02\u0A64\u0A68\x05\xE2r\x02" +
		"\u0A65\u0A68\x05\xE4s\x02\u0A66\u0A68\x07\xB0\x02\x02\u0A67\u0A5E\x03" +
		"\x02\x02\x02\u0A67\u0A5F\x03\x02\x02\x02\u0A67\u0A60\x03\x02\x02\x02\u0A67" +
		"\u0A61\x03\x02\x02\x02\u0A67\u0A62\x03\x02\x02\x02\u0A67\u0A63\x03\x02" +
		"\x02\x02\u0A67\u0A64\x03\x02\x02\x02\u0A67\u0A65\x03\x02\x02\x02\u0A67" +
		"\u0A66\x03\x02\x02\x02\u0A68\xD5\x03\x02\x02\x02\u0A69\u0A6E\x07\xCD\x02" +
		"\x02\u0A6A\u0A6E\x07\xCE\x02\x02\u0A6B\u0A6E\x07\xCF\x02\x02\u0A6C\u0A6E" +
		"\x03\x02\x02\x02\u0A6D\u0A69\x03\x02\x02\x02\u0A6D\u0A6A\x03\x02\x02\x02" +
		"\u0A6D\u0A6B\x03\x02\x02\x02\u0A6D\u0A6C\x03\x02\x02\x02\u0A6E\xD7\x03" +
		"\x02\x02\x02\u0A6F\u0A72\x07\xA7\x02\x02\u0A70\u0A73\x07_\x02\x02\u0A71" +
		"\u0A73\x07\xDF\x02\x02\u0A72\u0A70\x03\x02\x02\x02\u0A72\u0A71\x03\x02" +
		"\x02\x02\u0A72\u0A73\x03\x02\x02\x02\u0A73\u0A7E\x03\x02\x02\x02\u0A74" +
		"\u0A76\x07\xBE\x02\x02\u0A75\u0A77\x07_\x02\x02\u0A76\u0A75\x03\x02\x02" +
		"\x02\u0A76\u0A77\x03\x02\x02\x02\u0A77\u0A7E\x03\x02\x02\x02\u0A78\u0A7A" +
		"\x07\xA8\x02\x02\u0A79\u0A7B\x07_\x02\x02\u0A7A\u0A79\x03\x02\x02\x02" +
		"\u0A7A\u0A7B\x03\x02\x02\x02\u0A7B\u0A7E\x03\x02\x02\x02\u0A7C\u0A7E\x07" +
		"\xA9\x02\x02\u0A7D\u0A6F\x03\x02\x02\x02\u0A7D\u0A74\x03\x02\x02\x02\u0A7D" +
		"\u0A78\x03\x02\x02\x02\u0A7D\u0A7C\x03\x02\x02\x02\u0A7E\xD9\x03\x02\x02" +
		"\x02\u0A7F\u0A82\t\n\x02\x02\u0A80\u0A81\x07s\x02\x02\u0A81\u0A83\x07" +
		"a\x02\x02\u0A82\u0A80\x03\x02\x02\x02\u0A82\u0A83\x03\x02\x02\x02\u0A83" +
		"\xDB\x03\x02\x02\x02\u0A84\u0A85\t\v\x02\x02\u0A85\xDD\x03\x02\x02\x02" +
		"\u0A86\u0A87\t\f\x02\x02\u0A87\xDF\x03\x02\x02\x02\u0A88\u0A89\t\r\x02" +
		"\x02\u0A89\xE1\x03\x02\x02\x02\u0A8A\u0A8B\t\x0E\x02\x02\u0A8B\xE3\x03" +
		"\x02\x02\x02\u0A8C\u0A8D\t\x0F\x02\x02\u0A8D\xE5\x03\x02\x02\x02\u0A8E" +
		"\u0A8F\t\x10\x02\x02\u0A8F\xE7\x03\x02\x02\x02\u0A90\u0A91\t\x11\x02\x02" +
		"\u0A91\xE9\x03\x02\x02\x02\u0A92\u0A93\t\x12\x02\x02\u0A93\xEB\x03\x02" +
		"\x02\x02\u0A94\u0A95\t\x13\x02\x02\u0A95\xED\x03\x02\x02\x02\u0A96\u0A99" +
		"\x07\xB5\x02\x02\u0A97\u0A98\x07s\x02\x02\u0A98\u0A9A\x07a\x02\x02\u0A99" +
		"\u0A97\x03\x02\x02\x02\u0A99\u0A9A\x03\x02\x02\x02\u0A9A\u0AA1\x03\x02" +
		"\x02\x02\u0A9B\u0A9E\x07\xC7\x02\x02\u0A9C\u0A9D\x07s\x02\x02\u0A9D\u0A9F" +
		"\x07a\x02\x02\u0A9E\u0A9C\x03\x02\x02\x02\u0A9E\u0A9F\x03\x02\x02\x02" +
		"\u0A9F\u0AA1\x03\x02\x02\x02\u0AA0\u0A96\x03\x02\x02\x02\u0AA0\u0A9B\x03" +
		"\x02\x02\x02\u0AA1\xEF\x03\x02\x02\x02\u0AA2\u0AA3\t\x14\x02\x02\u0AA3" +
		"\xF1\x03\x02\x02\x02\u0AA4\u0AA5\x05\xE6t\x02\u0AA5\u0AA6\x07s\x02\x02" +
		"\u0AA6\u0AA7\x05\u0118\x8D\x02\u0AA7\u0AA8\x07r\x02\x02\u0AA8\u0AAB\x03" +
		"\x02\x02\x02\u0AA9\u0AAB\x07\x83\x02\x02\u0AAA\u0AA4\x03\x02\x02\x02\u0AAA" +
		"\u0AA9\x03\x02\x02\x02\u0AAB\xF3\x03\x02\x02\x02\u0AAC\u0AAD\x05\xE8u" +
		"\x02\u0AAD\u0AAE\x07s\x02\x02\u0AAE\u0AAF\x05\u0118\x8D\x02\u0AAF\u0AB4" +
		"\x07r\x02\x02\u0AB0\u0AB1\x07\x9A\x02\x02\u0AB1\u0AB2\x05\u014E\xA8\x02" +
		"\u0AB2\u0AB3\x07r\x02\x02\u0AB3\u0AB5\x03\x02\x02\x02\u0AB4\u0AB0\x03" +
		"\x02\x02\x02\u0AB4\u0AB5\x03\x02\x02\x02\u0AB5\xF5\x03\x02\x02\x02\u0AB6" +
		"\u0AB7\x05\xECw\x02\u0AB7\u0AB8\x07s\x02\x02\u0AB8\u0AB9\x05\u0118\x8D" +
		"\x02\u0AB9\u0ABE\x07r\x02\x02\u0ABA\u0ABB\x07\x9A\x02\x02\u0ABB\u0ABC" +
		"\x05\u014E\xA8\x02\u0ABC\u0ABD\x07r\x02\x02\u0ABD\u0ABF\x03\x02\x02\x02" +
		"\u0ABE\u0ABA\x03\x02\x02\x02\u0ABE\u0ABF\x03\x02\x02\x02\u0ABF\xF7\x03" +
		"\x02\x02\x02\u0AC0\u0AC1\x05\xEAv\x02\u0AC1\u0AC4\x07s\x02\x02\u0AC2\u0AC5" +
		"\x05\u0118\x8D\x02\u0AC3\u0AC5\x05\u0116\x8C\x02\u0AC4\u0AC2\x03\x02\x02" +
		"\x02\u0AC4\u0AC3\x03\x02\x02\x02\u0AC5\u0AC6\x03\x02\x02\x02\u0AC6\u0ACB" +
		"\x07r\x02\x02\u0AC7\u0AC8\x07\x9A\x02\x02\u0AC8\u0AC9\x05\u014E\xA8\x02" +
		"\u0AC9\u0ACA\x07r\x02\x02\u0ACA\u0ACC\x03\x02\x02\x02\u0ACB\u0AC7\x03" +
		"\x02\x02\x02\u0ACB\u0ACC\x03\x02\x02\x02\u0ACC\xF9\x03\x02\x02\x02\u0ACD" +
		"\u0AD1\x05\xFC\x7F\x02\u0ACE\u0AD0\x05\u0114\x8B\x02\u0ACF\u0ACE\x03\x02" +
		"\x02\x02\u0AD0\u0AD3\x03\x02\x02\x02\u0AD1\u0ACF\x03\x02\x02\x02\u0AD1" +
		"\u0AD2\x03\x02\x02\x02\u0AD2\xFB\x03\x02\x02\x02\u0AD3\u0AD1\x03\x02\x02" +
		"\x02\u0AD4\u0AD5\x05\xF0y\x02\u0AD5\u0AD9\x07s\x02\x02\u0AD6\u0AD8\x07" +
		"\x04\x02\x02\u0AD7\u0AD6\x03\x02\x02\x02\u0AD8\u0ADB\x03\x02\x02\x02\u0AD9" +
		"\u0AD7\x03\x02\x02\x02\u0AD9\u0ADA\x03\x02\x02\x02\u0ADA\u0ADC\x03\x02" +
		"\x02\x02\u0ADB\u0AD9\x03\x02\x02\x02\u0ADC\u0ADD\x05\u0118\x8D\x02\u0ADD" +
		"\u0ADE\x07r\x02\x02\u0ADE\xFD\x03\x02\x02\x02\u0ADF\u0AE3\x05\u0100\x81" +
		"\x02\u0AE0\u0AE2\x05\u0114\x8B\x02\u0AE1\u0AE0\x03\x02\x02\x02\u0AE2\u0AE5" +
		"\x03\x02\x02\x02\u0AE3\u0AE1\x03\x02\x02\x02\u0AE3\u0AE4\x03\x02\x02\x02" +
		"\u0AE4\xFF\x03\x02\x02\x02\u0AE5\u0AE3\x03\x02\x02\x02\u0AE6\u0AE7\x05" +
		"\xEEx\x02\u0AE7\u0AE8\x07s\x02\x02\u0AE8\u0AE9\x05\u0118\x8D\x02\u0AE9" +
		"\u0AEE\x07r\x02\x02\u0AEA\u0AEB\x07\x9A\x02\x02\u0AEB\u0AEC\x05\u014E" +
		"\xA8\x02\u0AEC\u0AED\x07r\x02\x02\u0AED\u0AEF\x03\x02\x02\x02\u0AEE\u0AEA" +
		"\x03\x02\x02\x02\u0AEE\u0AEF\x03\x02\x02\x02\u0AEF\u0101\x03\x02\x02\x02" +
		"\u0AF0\u0AF4\x05\u0104\x83\x02\u0AF1\u0AF3\x05\u0108\x85\x02\u0AF2\u0AF1" +
		"\x03\x02\x02\x02\u0AF3\u0AF6\x03\x02\x02\x02\u0AF4\u0AF2\x03\x02\x02\x02" +
		"\u0AF4\u0AF5\x03\x02\x02\x02\u0AF5\u0AF9\x03\x02\x02\x02\u0AF6\u0AF4\x03" +
		"\x02\x02\x02\u0AF7\u0AF8\x07\x87\x02\x02\u0AF8\u0AFA\x07\x9C\x02\x02\u0AF9" +
		"\u0AF7\x03\x02\x02\x02\u0AF9\u0AFA\x03\x02\x02\x02\u0AFA\u0103\x03\x02" +
		"\x02\x02\u0AFB\u0AFC\x05\u0106\x84\x02\u0AFC\u0B00\x07s\x02\x02\u0AFD" +
		"\u0AFF\x07\x04\x02\x02\u0AFE\u0AFD\x03\x02\x02\x02\u0AFF\u0B02\x03\x02" +
		"\x02\x02\u0B00\u0AFE\x03\x02\x02\x02\u0B00\u0B01\x03\x02\x02\x02\u0B01" +
		"\u0B03\x03\x02\x02\x02\u0B02\u0B00\x03\x02\x02\x02\u0B03\u0B04\x05\u0118" +
		"\x8D\x02\u0B04\u0B05\x07r\x02\x02\u0B05\u0105\x03\x02\x02\x02\u0B06\u0B09" +
		"\x07\xB2\x02\x02\u0B07\u0B0A\x07_\x02\x02\u0B08\u0B0A\x07\xDF\x02\x02" +
		"\u0B09\u0B07\x03\x02\x02\x02\u0B09\u0B08\x03\x02\x02\x02\u0B09\u0B0A\x03" +
		"\x02\x02\x02\u0B0A\u0B15\x03\x02\x02\x02\u0B0B\u0B0D\x07\xC6\x02\x02\u0B0C" +
		"\u0B0E\x07_\x02\x02\u0B0D\u0B0C\x03\x02\x02\x02\u0B0D\u0B0E\x03\x02\x02" +
		"\x02\u0B0E\u0B15\x03\x02\x02\x02\u0B0F\u0B11\x07\xB3\x02\x02\u0B10\u0B12" +
		"\x07_\x02\x02\u0B11\u0B10\x03\x02\x02\x02\u0B11\u0B12\x03\x02\x02\x02" +
		"\u0B12\u0B15\x03\x02\x02\x02\u0B13\u0B15\x07\xB4\x02\x02\u0B14\u0B06\x03" +
		"\x02\x02\x02\u0B14\u0B0B\x03\x02\x02\x02\u0B14\u0B0F\x03\x02\x02\x02\u0B14" +
		"\u0B13\x03\x02\x02\x02\u0B15\u0107\x03\x02\x02\x02\u0B16\u0B17\x07\x99" +
		"\x02\x02\u0B17\u0B18\x07s\x02\x02\u0B18\u0B19\x05\u0118\x8D\x02\u0B19" +
		"\u0B1A\x07r\x02\x02\u0B1A\u0B28\x03\x02\x02\x02\u0B1B\u0B1C\t\x15\x02" +
		"\x02\u0B1C\u0B1D\x07s\x02\x02\u0B1D\u0B1E\x07\x85\x02\x02\u0B1E\u0B28" +
		"\x07r\x02\x02\u0B1F\u0B23\t\x16\x02\x02\u0B20\u0B22\v\x02\x02\x02\u0B21" +
		"\u0B20\x03\x02\x02\x02\u0B22\u0B25\x03\x02\x02\x02\u0B23\u0B24\x03\x02" +
		"\x02\x02\u0B23\u0B21\x03\x02\x02\x02\u0B24\u0B26\x03\x02\x02\x02\u0B25" +
		"\u0B23\x03\x02\x02\x02\u0B26\u0B28\x07r\x02\x02\u0B27\u0B16\x03\x02\x02" +
		"\x02\u0B27\u0B1B\x03\x02\x02\x02\u0B27\u0B1F\x03\x02\x02\x02\u0B28\u0109" +
		"\x03\x02\x02\x02\u0B29\u0B2A\x07\x99\x02\x02\u0B2A\u0B2B\x07s\x02\x02" +
		"\u0B2B\u0B2C\x05\u0118\x8D\x02\u0B2C\u0B2D\x07r\x02\x02\u0B2D\u0B3B\x03" +
		"\x02\x02\x02\u0B2E\u0B2F\t\x15\x02\x02\u0B2F\u0B30\x07s\x02\x02\u0B30" +
		"\u0B31\x07\x85\x02\x02\u0B31\u0B3B\x07r\x02\x02\u0B32\u0B36\t\x16\x02" +
		"\x02\u0B33\u0B35\v\x02\x02\x02\u0B34\u0B33\x03\x02\x02\x02\u0B35\u0B38" +
		"\x03\x02\x02\x02\u0B36\u0B37\x03\x02\x02\x02\u0B36\u0B34\x03\x02\x02\x02" +
		"\u0B37\u0B39\x03\x02\x02\x02\u0B38\u0B36\x03\x02\x02\x02\u0B39\u0B3B\x07" +
		"r\x02\x02\u0B3A\u0B29\x03\x02\x02\x02\u0B3A\u0B2E\x03\x02\x02\x02\u0B3A" +
		"\u0B32\x03\x02\x02\x02\u0B3B\u010B\x03\x02\x02\x02\u0B3C\u0B40\x05\u010E" +
		"\x88\x02\u0B3D\u0B3F\x05\u0114\x8B\x02\u0B3E\u0B3D\x03\x02\x02\x02\u0B3F" +
		"\u0B42\x03\x02\x02\x02\u0B40\u0B3E\x03\x02\x02\x02\u0B40\u0B41\x03\x02" +
		"\x02\x02\u0B41\u010D\x03\x02\x02\x02\u0B42\u0B40\x03\x02\x02\x02\u0B43" +
		"\u0B44\x05\u0112\x8A\x02\u0B44\u0B45\x07s\x02\x02\u0B45\u0B46\x05\u0118" +
		"\x8D\x02\u0B46\u0B4B\x07r\x02\x02\u0B47\u0B48\x07\x9A\x02\x02\u0B48\u0B49" +
		"\x05\u014E\xA8\x02\u0B49\u0B4A\x07r\x02\x02\u0B4A\u0B4C\x03\x02\x02\x02" +
		"\u0B4B\u0B47\x03\x02\x02\x02\u0B4B\u0B4C\x03\x02\x02\x02\u0B4C\u010F\x03" +
		"\x02\x02\x02\u0B4D\u0B50\x07\xA6\x02\x02\u0B4E\u0B4F\x07s\x02\x02\u0B4F" +
		"\u0B51\x07`\x02\x02\u0B50\u0B4E\x03\x02\x02\x02\u0B50\u0B51\x03\x02\x02" +
		"\x02\u0B51\u0B58\x03\x02\x02\x02\u0B52\u0B55\x07\xBD\x02\x02\u0B53\u0B54" +
		"\x07s\x02\x02\u0B54\u0B56\x07`\x02\x02\u0B55\u0B53\x03\x02\x02\x02\u0B55" +
		"\u0B56\x03\x02\x02\x02\u0B56\u0B58\x03\x02\x02\x02\u0B57\u0B4D\x03\x02" +
		"\x02\x02\u0B57\u0B52\x03\x02\x02\x02\u0B58\u0111\x03\x02\x02\x02\u0B59" +
		"\u0B5C\x07\xB1\x02\x02\u0B5A\u0B5B\x07s\x02\x02\u0B5B\u0B5D\x07`\x02\x02" +
		"\u0B5C\u0B5A\x03\x02\x02\x02\u0B5C\u0B5D\x03\x02\x02\x02\u0B5D\u0B64\x03" +
		"\x02\x02\x02\u0B5E\u0B61\x07\xC5\x02\x02\u0B5F\u0B60\x07s\x02\x02\u0B60" +
		"\u0B62\x07`\x02\x02\u0B61\u0B5F\x03\x02\x02\x02\u0B61\u0B62\x03\x02\x02" +
		"\x02\u0B62\u0B64\x03\x02\x02\x02\u0B63\u0B59\x03\x02\x02\x02\u0B63\u0B5E" +
		"\x03\x02\x02\x02\u0B64\u0113\x03\x02\x02\x02\u0B65\u0B66\x07k\x02\x02" +
		"\u0B66\u0B69\x05\u0144\xA3\x02\u0B67\u0B69\x07\x99\x02\x02\u0B68\u0B65" +
		"\x03\x02\x02\x02\u0B68\u0B67\x03\x02\x02\x02\u0B69\u0B6A\x03\x02\x02\x02" +
		"\u0B6A\u0B6E\x07s\x02\x02\u0B6B\u0B6D\x07\x04\x02\x02\u0B6C\u0B6B\x03" +
		"\x02\x02\x02\u0B6D\u0B70\x03\x02\x02\x02\u0B6E\u0B6C\x03\x02\x02\x02\u0B6E" +
		"\u0B6F\x03\x02\x02\x02\u0B6F\u0B73\x03\x02\x02\x02\u0B70\u0B6E\x03\x02" +
		"\x02\x02\u0B71\u0B74\x05\u0144\xA3\x02\u0B72\u0B74\x07\x87\x02\x02\u0B73" +
		"\u0B71\x03\x02\x02\x02\u0B73\u0B72\x03\x02\x02\x02\u0B74\u0B75\x03\x02" +
		"\x02\x02\u0B75\u0B73\x03\x02\x02\x02\u0B75\u0B76\x03\x02\x02\x02\u0B76" +
		"\u0B77\x03\x02\x02\x02\u0B77\u0B85\x07r\x02\x02\u0B78\u0B79\t\x15\x02" +
		"\x02\u0B79\u0B7A\x07s\x02\x02\u0B7A\u0B7B\x07\x85\x02\x02\u0B7B\u0B85" +
		"\x07r\x02\x02\u0B7C\u0B80\t\x16\x02\x02\u0B7D\u0B7F\v\x02\x02\x02\u0B7E" +
		"\u0B7D\x03\x02\x02\x02\u0B7F\u0B82\x03\x02\x02\x02\u0B80\u0B81\x03\x02" +
		"\x02\x02\u0B80\u0B7E\x03\x02\x02\x02\u0B81\u0B83\x03\x02\x02\x02\u0B82" +
		"\u0B80\x03\x02\x02\x02\u0B83\u0B85\x07r\x02\x02\u0B84\u0B68\x03\x02\x02" +
		"\x02\u0B84\u0B78\x03\x02\x02\x02\u0B84\u0B7C\x03\x02\x02\x02\u0B85\u0115" +
		"\x03\x02\x02\x02\u0B86\u0B87\x07\xDE\x02\x02\u0B87\u0B88\x07v\x02\x02" +
		"\u0B88\u0B89\x07\x85\x02\x02\u0B89\u0117\x03\x02\x02\x02\u0B8A\u0B8B\x07" +
		"\xE1\x02\x02\u0B8B\u0119\x03\x02\x02\x02\u0B8C\u0B8D\x07q\x02\x02\u0B8D" +
		"\u0B95\x07r\x02\x02\u0B8E\u0B90\x07\x04\x02\x02\u0B8F\u0B8E\x03\x02\x02" +
		"\x02\u0B90\u0B93\x03\x02\x02\x02\u0B91\u0B8F\x03\x02\x02\x02\u0B91\u0B92" +
		"\x03\x02\x02\x02\u0B92\u0B94\x03\x02\x02\x02\u0B93\u0B91\x03\x02\x02\x02" +
		"\u0B94\u0B96\x05\u011C\x8F\x02\u0B95\u0B91\x03\x02\x02\x02\u0B95\u0B96" +
		"\x03\x02\x02\x02\u0B96\u0BAB\x03\x02\x02\x02\u0B97\u0B98\x07q\x02\x02" +
		"\u0B98\u0B9D\x05\u0144\xA3\x02\u0B99\u0B9C\x07s\x02\x02\u0B9A\u0B9C\x05" +
		"\u014E\xA8\x02\u0B9B\u0B99\x03\x02\x02\x02\u0B9B\u0B9A\x03\x02\x02\x02" +
		"\u0B9C\u0B9F\x03\x02\x02\x02\u0B9D\u0B9B\x03\x02\x02\x02\u0B9D\u0B9E\x03" +
		"\x02\x02\x02\u0B9E\u0BA0\x03\x02\x02\x02\u0B9F\u0B9D\x03\x02\x02\x02\u0BA0" +
		"\u0BA8\x07r\x02\x02\u0BA1\u0BA3\x07\x04\x02\x02\u0BA2\u0BA1\x03\x02\x02" +
		"\x02\u0BA3\u0BA6\x03\x02\x02\x02\u0BA4\u0BA2\x03\x02\x02\x02\u0BA4\u0BA5" +
		"\x03\x02\x02\x02\u0BA5\u0BA7\x03\x02\x02\x02\u0BA6\u0BA4\x03\x02\x02\x02" +
		"\u0BA7\u0BA9\x05\u011C\x8F\x02\u0BA8\u0BA4\x03\x02\x02\x02\u0BA8\u0BA9" +
		"\x03\x02\x02\x02\u0BA9\u0BAB\x03\x02\x02\x02\u0BAA\u0B8C\x03\x02\x02\x02" +
		"\u0BAA\u0B97\x03\x02\x02\x02\u0BAB\u011B\x03\x02\x02\x02\u0BAC\u0BAD\x07" +
		"q\x02\x02\u0BAD\u0BB2\x05\u0144\xA3\x02\u0BAE\u0BB1\x07s\x02\x02\u0BAF" +
		"\u0BB1\x05\u014E\xA8\x02\u0BB0\u0BAE\x03\x02\x02\x02\u0BB0\u0BAF\x03\x02" +
		"\x02\x02\u0BB1\u0BB4\x03\x02\x02\x02\u0BB2\u0BB0\x03\x02\x02\x02\u0BB2" +
		"\u0BB3\x03\x02\x02\x02\u0BB3\u0BB5\x03\x02\x02\x02\u0BB4\u0BB2\x03\x02" +
		"\x02\x02\u0BB5\u0BB6\x07r\x02\x02\u0BB6\u011D\x03\x02\x02\x02\u0BB7\u0BB9" +
		"\x07e\x02\x02\u0BB8\u0BBA\x05\u0144\xA3\x02\u0BB9\u0BB8\x03\x02\x02\x02" +
		"\u0BB9\u0BBA\x03\x02\x02\x02\u0BBA\u0BBB\x03\x02\x02\x02\u0BBB\u0BC2\x07" +
		"r\x02\x02\u0BBC\u0BBE\x07f\x02\x02\u0BBD\u0BBF\x05\u0144\xA3\x02\u0BBE" +
		"\u0BBD\x03\x02\x02\x02\u0BBE\u0BBF\x03\x02\x02\x02\u0BBF\u0BC0\x03\x02" +
		"\x02\x02\u0BC0\u0BC2\x07r\x02\x02\u0BC1\u0BB7\x03\x02\x02\x02\u0BC1\u0BBC" +
		"\x03\x02\x02\x02\u0BC2\u011F\x03\x02\x02\x02\u0BC3\u0BCB\x07\x93\x02\x02" +
		"\u0BC4\u0BCB\x07\x91\x02\x02\u0BC5\u0BC7\x07\x92\x02\x02\u0BC6\u0BC8\x07" +
		"\x88\x02\x02\u0BC7\u0BC6\x03\x02\x02\x02\u0BC7\u0BC8\x03\x02\x02\x02\u0BC8" +
		"\u0BC9\x03\x02\x02\x02\u0BC9\u0BCB\x07\x02\x02\x03\u0BCA\u0BC3\x03\x02" +
		"\x02\x02\u0BCA\u0BC4\x03\x02\x02\x02\u0BCA\u0BC5\x03\x02\x02\x02\u0BCB" +
		"\u0121\x03\x02\x02\x02\u0BCC\u0BCE\x07\xBC\x02\x02\u0BCD\u0BCF\x05\u0144" +
		"\xA3\x02\u0BCE\u0BCD\x03\x02\x02\x02\u0BCE\u0BCF\x03\x02\x02\x02\u0BCF" +
		"\u0BE5\x03\x02\x02\x02\u0BD0\u0BDA\x05\u0144\xA3\x02\u0BD1\u0BD5\x07\x87" +
		"\x02\x02\u0BD2\u0BD4\x07\x04\x02\x02\u0BD3\u0BD2\x03\x02\x02\x02\u0BD4" +
		"\u0BD7\x03\x02\x02\x02\u0BD5\u0BD3\x03\x02\x02\x02\u0BD5\u0BD6\x03\x02" +
		"\x02\x02\u0BD6\u0BD9\x03\x02\x02\x02\u0BD7\u0BD5\x03\x02\x02\x02\u0BD8" +
		"\u0BD1\x03\x02\x02\x02\u0BD9\u0BDC\x03\x02\x02\x02\u0BDA\u0BD8\x03\x02" +
		"\x02\x02\u0BDA\u0BDB\x03\x02\x02\x02\u0BDB\u0BE0\x03\x02\x02\x02\u0BDC" +
		"\u0BDA\x03\x02\x02\x02\u0BDD\u0BDF\x07\x87\x02\x02\u0BDE\u0BDD\x03\x02" +
		"\x02\x02\u0BDF\u0BE2\x03\x02\x02\x02\u0BE0\u0BDE\x03\x02\x02\x02\u0BE0" +
		"\u0BE1\x03\x02\x02\x02\u0BE1\u0BE4\x03\x02\x02\x02\u0BE2\u0BE0\x03\x02" +
		"\x02\x02\u0BE3\u0BD0\x03\x02\x02\x02\u0BE4\u0BE7\x03\x02\x02\x02\u0BE5" +
		"\u0BE3\x03\x02\x02\x02\u0BE5\u0BE6\x03\x02\x02\x02\u0BE6\u0BE8\x03\x02" +
		"\x02\x02\u0BE7\u0BE5\x03\x02\x02\x02\u0BE8\u0BF4\x07r\x02\x02\u0BE9\u0BEF" +
		"\x07\xBC\x02\x02\u0BEA\u0BEE\x05\u0144\xA3\x02\u0BEB\u0BEE\x07\x87\x02" +
		"\x02\u0BEC\u0BEE\x07\x04\x02\x02\u0BED\u0BEA\x03\x02\x02\x02\u0BED\u0BEB" +
		"\x03\x02\x02\x02\u0BED\u0BEC\x03\x02\x02\x02\u0BEE\u0BF1\x03\x02\x02\x02" +
		"\u0BEF\u0BED\x03\x02\x02\x02\u0BEF\u0BF0\x03\x02\x02\x02\u0BF0\u0BF2\x03" +
		"\x02\x02\x02\u0BF1\u0BEF\x03\x02\x02\x02\u0BF2\u0BF4\x07\x02\x02\x03\u0BF3" +
		"\u0BCC\x03\x02\x02\x02\u0BF3\u0BE9\x03\x02\x02\x02\u0BF4\u0123\x03\x02" +
		"\x02\x02\u0BF5\u0BFA\x07\x8B\x02\x02\u0BF6\u0BFB\x05\u0144\xA3\x02\u0BF7" +
		"\u0BFB\x07s\x02\x02\u0BF8\u0BFB\x07\xE1\x02\x02\u0BF9\u0BFB\x07\x87\x02" +
		"\x02\u0BFA\u0BF6\x03\x02\x02\x02\u0BFA\u0BF7\x03\x02\x02\x02\u0BFA\u0BF8" +
		"\x03\x02\x02\x02\u0BFA\u0BF9\x03\x02\x02\x02\u0BFB\u0BFC\x03\x02\x02\x02" +
		"\u0BFC\u0BFA\x03\x02\x02\x02\u0BFC\u0BFD\x03\x02\x02\x02\u0BFD\u0BFE\x03" +
		"\x02\x02\x02\u0BFE\u0C0C\x07r\x02\x02\u0BFF\u0C07\x07\x8B\x02\x02\u0C00" +
		"\u0C06\x05\u0144\xA3\x02\u0C01\u0C06\x07s\x02\x02\u0C02\u0C06\x07\xE1" +
		"\x02\x02\u0C03\u0C06\x07\x87\x02\x02\u0C04\u0C06\x07\x04\x02\x02\u0C05" +
		"\u0C00\x03\x02\x02\x02\u0C05\u0C01\x03\x02\x02\x02\u0C05\u0C02\x03\x02" +
		"\x02\x02\u0C05\u0C03\x03\x02\x02\x02\u0C05\u0C04\x03\x02\x02\x02\u0C06" +
		"\u0C09\x03\x02\x02\x02\u0C07\u0C05\x03\x02\x02\x02\u0C07\u0C08\x03\x02" +
		"\x02\x02\u0C08\u0C0A\x03\x02\x02\x02\u0C09\u0C07\x03\x02\x02\x02\u0C0A" +
		"\u0C0C\x07\x02\x02\x03\u0C0B\u0BF5\x03\x02\x02\x02\u0C0B\u0BFF\x03\x02" +
		"\x02\x02\u0C0C\u0125\x03\x02\x02\x02\u0C0D\u0C0E\x07\x8A\x02\x02\u0C0E" +
		"\u0C0F\x05\u0144\xA3\x02\u0C0F\u0C10\x07r\x02\x02\u0C10\u0127\x03\x02" +
		"\x02\x02\u0C11\u0C15\x07\xA3\x02\x02\u0C12\u0C16\x05\u0144\xA3\x02\u0C13" +
		"\u0C16\x07s\x02\x02\u0C14\u0C16\x07\x87\x02\x02\u0C15\u0C12\x03\x02\x02" +
		"\x02\u0C15\u0C13\x03\x02\x02\x02\u0C15\u0C14\x03\x02\x02\x02\u0C16\u0C17" +
		"\x03\x02\x02\x02\u0C17\u0C15\x03\x02\x02\x02\u0C17\u0C18\x03\x02\x02\x02" +
		"\u0C18\u0C19\x03\x02\x02\x02\u0C19\u0C1B\x07r\x02\x02\u0C1A\u0C1C\x05" +
		"\u012A\x96\x02\u0C1B\u0C1A\x03\x02\x02\x02\u0C1B\u0C1C\x03\x02\x02\x02" +
		"\u0C1C\u0129\x03\x02\x02\x02\u0C1D\u0C21\x07\xA3\x02\x02\u0C1E\u0C22\x05" +
		"\u0144\xA3\x02\u0C1F\u0C22\x07s\x02\x02\u0C20\u0C22\x07\x87\x02\x02\u0C21" +
		"\u0C1E\x03\x02\x02\x02\u0C21\u0C1F\x03\x02\x02\x02\u0C21\u0C20\x03\x02" +
		"\x02\x02\u0C22\u0C23\x03\x02\x02\x02\u0C23\u0C21\x03\x02\x02\x02\u0C23" +
		"\u0C24\x03\x02\x02\x02\u0C24\u0C25\x03\x02\x02\x02\u0C25\u0C26\x07r\x02" +
		"\x02\u0C26\u012B\x03\x02\x02\x02\u0C27\u0C29\x07i\x02\x02\u0C28\u0C2A" +
		"\x05\u0144\xA3\x02\u0C29\u0C28\x03\x02\x02\x02\u0C29\u0C2A\x03\x02\x02" +
		"\x02\u0C2A\u0C40\x03\x02\x02\x02\u0C2B\u0C35\x05\u0144\xA3\x02\u0C2C\u0C30" +
		"\x07\x87\x02\x02\u0C2D\u0C2F\x07\x04\x02\x02\u0C2E\u0C2D\x03\x02\x02\x02" +
		"\u0C2F\u0C32\x03\x02\x02\x02\u0C30\u0C2E\x03\x02\x02\x02\u0C30\u0C31\x03" +
		"\x02\x02\x02\u0C31\u0C34\x03\x02\x02\x02\u0C32\u0C30\x03\x02\x02\x02\u0C33" +
		"\u0C2C\x03\x02\x02\x02\u0C34\u0C37\x03\x02\x02\x02\u0C35\u0C33\x03\x02" +
		"\x02\x02\u0C35\u0C36\x03\x02\x02\x02\u0C36\u0C3B\x03\x02\x02\x02\u0C37" +
		"\u0C35\x03\x02\x02\x02\u0C38\u0C3A\x07\x87\x02\x02\u0C39\u0C38\x03\x02" +
		"\x02\x02\u0C3A\u0C3D\x03\x02\x02\x02\u0C3B\u0C39\x03\x02\x02\x02\u0C3B" +
		"\u0C3C\x03\x02\x02\x02\u0C3C\u0C3F\x03\x02\x02\x02\u0C3D\u0C3B\x03\x02" +
		"\x02\x02\u0C3E\u0C2B\x03\x02\x02\x02\u0C3F\u0C42\x03\x02\x02\x02\u0C40" +
		"\u0C3E\x03\x02\x02\x02\u0C40\u0C41\x03\x02\x02\x02\u0C41\u0C43\x03\x02" +
		"\x02\x02\u0C42\u0C40\x03\x02\x02\x02\u0C43\u0C4A\x07r\x02\x02\u0C44\u0C46" +
		"\x07i\x02\x02\u0C45\u0C47\x05\u0144\xA3\x02\u0C46\u0C45\x03\x02\x02\x02" +
		"\u0C46\u0C47\x03\x02\x02\x02\u0C47\u0C48\x03\x02\x02\x02\u0C48\u0C4A\x07" +
		"\x02\x02\x03\u0C49\u0C27\x03\x02\x02\x02\u0C49\u0C44\x03\x02\x02\x02\u0C4A" +
		"\u012D\x03\x02\x02\x02\u0C4B\u0C4D\x07j\x02\x02\u0C4C\u0C4E\n\x17\x02" +
		"\x02\u0C4D\u0C4C\x03\x02\x02\x02\u0C4E\u0C4F\x03\x02\x02\x02\u0C4F\u0C4D" +
		"\x03\x02\x02\x02\u0C4F\u0C50\x03\x02\x02\x02\u0C50\u0C51\x03\x02\x02\x02" +
		"\u0C51\u0C52\x07r\x02\x02\u0C52\u012F\x03\x02\x02\x02\u0C53\u0C56\x07" +
		"p\x02\x02\u0C54\u0C57\x05\u0144\xA3\x02\u0C55\u0C57\x07\x87\x02\x02\u0C56" +
		"\u0C54\x03\x02\x02\x02\u0C56\u0C55\x03\x02\x02\x02\u0C57\u0C58\x03\x02" +
		"\x02\x02\u0C58\u0C56\x03\x02\x02\x02\u0C58\u0C59\x03\x02\x02\x02\u0C59" +
		"\u0C5A\x03\x02\x02\x02\u0C5A\u0C60\x07r\x02\x02\u0C5B\u0C5C\x07p\x02\x02" +
		"\u0C5C\u0C5D\x05\u0144\xA3\x02\u0C5D\u0C5E\x07\x02\x02\x03\u0C5E\u0C60" +
		"\x03\x02\x02\x02\u0C5F\u0C53\x03\x02\x02\x02\u0C5F\u0C5B\x03\x02\x02\x02" +
		"\u0C60\u0131\x03\x02\x02\x02\u0C61\u0C62\x07\x96\x02\x02\u0C62\u0C63\x05" +
		"\u0144\xA3\x02\u0C63\u0C64\x07r\x02\x02\u0C64\u0C6A\x03\x02\x02\x02\u0C65" +
		"\u0C66\x07\x97\x02\x02\u0C66\u0C67\x05\u0144\xA3\x02\u0C67\u0C68\x07r" +
		"\x02\x02\u0C68\u0C6A\x03\x02\x02\x02\u0C69\u0C61\x03\x02\x02\x02\u0C69" +
		"\u0C65\x03\x02\x02\x02\u0C6A\u0133\x03\x02\x02\x02\u0C6B\u0C6C\x07\x8E" +
		"\x02\x02\u0C6C\u0C6D\x07s\x02\x02\u0C6D\u0C6E\x07\x85\x02\x02\u0C6E\u0C75" +
		"\x07r\x02\x02\u0C6F\u0C70\x07\x8E\x02\x02\u0C70\u0C71\x07s\x02\x02\u0C71" +
		"\u0C72\x05\u0144\xA3\x02\u0C72\u0C73\x07r\x02\x02\u0C73\u0C75\x03\x02" +
		"\x02\x02\u0C74\u0C6B\x03\x02\x02\x02\u0C74\u0C6F\x03\x02\x02\x02\u0C75" +
		"\u0135\x03\x02\x02\x02\u0C76\u0C77\x07\xA1\x02\x02\u0C77\u0C78\x05\u0144" +
		"\xA3\x02\u0C78\u0C79\x07r\x02\x02\u0C79\u0137\x03\x02\x02\x02\u0C7A\u0C7B" +
		"\x07\xA2\x02\x02\u0C7B\u0C7C\x05\u0144\xA3\x02\u0C7C\u0C7D\x07r\x02\x02" +
		"\u0C7D\u0139\x03\x02\x02\x02\u0C7E\u0C88\x05\u013C\x9F\x02\u0C7F\u0C81" +
		"\x07\x87\x02\x02\u0C80\u0C7F\x03\x02\x02\x02\u0C81\u0C84\x03\x02\x02\x02" +
		"\u0C82\u0C80\x03\x02\x02\x02\u0C82\u0C83\x03\x02\x02\x02\u0C83\u0C85\x03" +
		"\x02\x02\x02\u0C84\u0C82\x03\x02\x02\x02\u0C85\u0C87\x05\u013C\x9F\x02" +
		"\u0C86\u0C82\x03\x02\x02\x02\u0C87\u0C8A\x03\x02\x02\x02\u0C88\u0C86\x03" +
		"\x02\x02\x02\u0C88\u0C89\x03\x02\x02\x02\u0C89\u013B\x03\x02\x02\x02\u0C8A" +
		"\u0C88\x03\x02\x02\x02\u0C8B\u0C8C\x07k\x02\x02\u0C8C\u0C8D\x05\u0144" +
		"\xA3\x02\u0C8D\u0C8E\t\x18\x02\x02\u0C8E\u0C94\x05\u0144\xA3\x02\u0C8F" +
		"\u0C93\x07\x87\x02\x02\u0C90\u0C93\x07s\x02\x02\u0C91\u0C93\x05\u0144" +
		"\xA3\x02\u0C92\u0C8F\x03\x02\x02\x02\u0C92\u0C90\x03\x02\x02\x02\u0C92" +
		"\u0C91\x03\x02\x02\x02\u0C93\u0C96\x03\x02\x02\x02\u0C94\u0C92\x03\x02" +
		"\x02\x02\u0C94\u0C95\x03\x02\x02\x02\u0C95\u0C97\x03\x02\x02\x02\u0C96" +
		"\u0C94\x03\x02\x02\x02\u0C97\u0C98\x07r\x02\x02\u0C98\u0CA2\x03\x02\x02" +
		"\x02\u0C99\u0C9D\x07\x9F\x02\x02\u0C9A\u0C9C\v\x02\x02\x02\u0C9B\u0C9A" +
		"\x03\x02\x02\x02\u0C9C\u0C9F\x03\x02\x02\x02\u0C9D\u0C9E\x03\x02\x02\x02" +
		"\u0C9D\u0C9B\x03\x02\x02\x02\u0C9E\u0CA0\x03\x02\x02\x02\u0C9F\u0C9D\x03" +
		"\x02\x02\x02\u0CA0\u0CA2\x07r\x02\x02\u0CA1\u0C8B\x03\x02\x02\x02\u0CA1" +
		"\u0C99\x03\x02\x02\x02\u0CA2\u013D\x03\x02\x02\x02\u0CA3\u0CA7\x07b\x02" +
		"\x02\u0CA4\u0CA8";
	private static readonly _serializedATNSegment6: string =
		"\x05\u0144\xA3\x02\u0CA5\u0CA8\x07s\x02\x02\u0CA6\u0CA8\x07\x87\x02\x02" +
		"\u0CA7\u0CA4\x03\x02\x02\x02\u0CA7\u0CA5\x03\x02\x02\x02\u0CA7\u0CA6\x03" +
		"\x02\x02\x02\u0CA8\u0CA9\x03\x02\x02\x02\u0CA9\u0CA7\x03\x02\x02\x02\u0CA9" +
		"\u0CAA\x03\x02\x02\x02\u0CAA\u0CAB\x03\x02\x02\x02\u0CAB\u0CB7\x07r\x02" +
		"\x02\u0CAC\u0CB2\x07b\x02\x02\u0CAD\u0CB1\x05\u0144\xA3\x02\u0CAE\u0CB1" +
		"\x07s\x02\x02\u0CAF\u0CB1\x07\x87\x02\x02\u0CB0\u0CAD\x03\x02\x02\x02" +
		"\u0CB0\u0CAE\x03\x02\x02\x02\u0CB0\u0CAF\x03\x02\x02\x02\u0CB1\u0CB4\x03" +
		"\x02\x02\x02\u0CB2\u0CB0\x03\x02\x02\x02\u0CB2\u0CB3\x03\x02\x02\x02\u0CB3" +
		"\u0CB5\x03\x02\x02\x02\u0CB4\u0CB2\x03\x02\x02\x02\u0CB5\u0CB7\x07\x02" +
		"\x02\x03\u0CB6\u0CA3\x03\x02\x02\x02\u0CB6\u0CAC\x03\x02\x02\x02\u0CB7" +
		"\u013F\x03\x02\x02\x02\u0CB8\u0CBA\x07g\x02\x02\u0CB9\u0CBB\x05\u0144" +
		"\xA3\x02\u0CBA\u0CB9\x03\x02\x02\x02\u0CBA\u0CBB\x03\x02\x02\x02\u0CBB" +
		"\u0CBC\x03\x02\x02\x02\u0CBC\u0CBD\x07r\x02\x02\u0CBD\u0141\x03\x02\x02" +
		"\x02\u0CBE\u0CC0\x05\u0144\xA3\x02\u0CBF\u0CC1\x07\x87\x02\x02\u0CC0\u0CBF" +
		"\x03\x02\x02\x02\u0CC0\u0CC1\x03\x02\x02\x02\u0CC1\u0CC3\x03\x02\x02\x02" +
		"\u0CC2\u0CBE\x03\x02\x02\x02\u0CC3\u0CC4\x03\x02\x02\x02\u0CC4\u0CC2\x03" +
		"\x02\x02\x02\u0CC4\u0CC5\x03\x02\x02\x02\u0CC5\u0143\x03\x02\x02\x02\u0CC6" +
		"\u0CCD\x07\x86\x02\x02\u0CC7\u0CC9\x07\x04\x02\x02\u0CC8\u0CC7\x03\x02" +
		"\x02\x02\u0CC9\u0CCA\x03\x02\x02\x02\u0CCA\u0CC8\x03\x02\x02\x02\u0CCA" +
		"\u0CCB\x03\x02\x02\x02\u0CCB\u0CCC\x03\x02\x02\x02\u0CCC\u0CCE\x07\x85" +
		"\x02\x02\u0CCD\u0CC8\x03\x02\x02\x02\u0CCD\u0CCE\x03\x02\x02\x02\u0CCE" +
		"\u0CF5\x03\x02\x02\x02\u0CCF\u0CD6\x05\u014E\xA8\x02\u0CD0\u0CD2\x07\x04" +
		"\x02\x02\u0CD1\u0CD0\x03\x02\x02\x02\u0CD2\u0CD3\x03\x02\x02\x02\u0CD3" +
		"\u0CD1\x03\x02\x02\x02\u0CD3\u0CD4\x03\x02\x02\x02\u0CD4\u0CD5\x03\x02" +
		"\x02\x02\u0CD5\u0CD7\x07\x85\x02\x02\u0CD6\u0CD1\x03\x02\x02\x02\u0CD6" +
		"\u0CD7\x03\x02\x02\x02\u0CD7\u0CF5\x03\x02\x02\x02\u0CD8\u0CF5\x07\x85" +
		"\x02\x02\u0CD9\u0CDA\x07n\x02\x02\u0CDA\u0CDB\x05\u0144\xA3\x02\u0CDB" +
		"\u0CDC\x07r\x02\x02\u0CDC\u0CF5\x03\x02\x02\x02\u0CDD\u0CDF\x07\x04\x02" +
		"\x02\u0CDE\u0CDD\x03\x02\x02\x02\u0CDF\u0CE2\x03\x02\x02\x02\u0CE0\u0CDE" +
		"\x03\x02\x02\x02\u0CE0\u0CE1\x03\x02\x02\x02\u0CE1\u0CE3\x03\x02\x02\x02" +
		"\u0CE2\u0CE0\x03\x02\x02\x02\u0CE3\u0CE7\x07s\x02\x02\u0CE4\u0CE6\x07" +
		"\x04\x02\x02\u0CE5\u0CE4\x03\x02\x02\x02\u0CE6\u0CE9\x03\x02\x02\x02\u0CE7" +
		"\u0CE5\x03\x02\x02\x02\u0CE7\u0CE8\x03\x02\x02\x02\u0CE8\u0CF5\x03\x02" +
		"\x02\x02\u0CE9\u0CE7\x03\x02\x02\x02\u0CEA\u0CEE\x07t\x02\x02\u0CEB\u0CED" +
		"\x07\x04\x02\x02\u0CEC\u0CEB\x03\x02\x02\x02\u0CED\u0CF0\x03\x02\x02\x02" +
		"\u0CEE\u0CEC\x03\x02\x02\x02\u0CEE\u0CEF\x03\x02\x02\x02\u0CEF\u0CF5\x03" +
		"\x02\x02\x02\u0CF0\u0CEE\x03\x02\x02\x02\u0CF1\u0CF5\x07|\x02\x02\u0CF2" +
		"\u0CF5\x07\xE1\x02\x02\u0CF3\u0CF5\x05\u0148\xA5\x02\u0CF4\u0CC6\x03\x02" +
		"\x02\x02\u0CF4\u0CCF\x03\x02\x02\x02\u0CF4\u0CD8\x03\x02\x02\x02\u0CF4" +
		"\u0CD9\x03\x02\x02\x02\u0CF4\u0CE0\x03\x02\x02\x02\u0CF4\u0CEA\x03\x02" +
		"\x02\x02\u0CF4\u0CF1\x03\x02\x02\x02\u0CF4\u0CF2\x03\x02\x02\x02\u0CF4" +
		"\u0CF3\x03\x02\x02\x02\u0CF5\u0145\x03\x02\x02\x02\u0CF6\u0CF7\x07\x82" +
		"\x02\x02\u0CF7\u0147\x03\x02\x02\x02\u0CF8\u0CFA\x07d\x02\x02\u0CF9\u0CFB" +
		"\x05\u0144\xA3\x02\u0CFA\u0CF9\x03\x02\x02\x02\u0CFB\u0CFC\x03\x02\x02" +
		"\x02\u0CFC\u0CFA\x03\x02\x02\x02\u0CFC\u0CFD\x03\x02\x02\x02\u0CFD\u0CFF" +
		"\x03\x02\x02\x02\u0CFE\u0D00\x07r\x02\x02\u0CFF\u0CFE\x03\x02\x02\x02" +
		"\u0CFF\u0D00\x03\x02\x02\x02\u0D00\u0149\x03\x02\x02\x02\u0D01\u0D02\x07" +
		"r\x02\x02\u0D02\u014B\x03\x02\x02\x02\u0D03\u0D04\t\x19\x02\x02\u0D04" +
		"\u014D\x03\x02\x02\x02\u0D05\u0D21\x05\u0152\xAA\x02\u0D06\u0D21\x07t" +
		"\x02\x02\u0D07\u0D08\x07x\x02\x02\u0D08\u0D21\n\x1A\x02\x02\u0D09\u0D0A" +
		"\x07y\x02\x02\u0D0A\u0D21\n\x1B\x02\x02\u0D0B\u0D21\x07{\x02\x02\u0D0C" +
		"\u0D21\x07z\x02\x02\u0D0D\u0D21\x07\xAB\x02\x02\u0D0E\u0D21\x07\xC0\x02" +
		"\x02\u0D0F\u0D21\x07\xAC\x02\x02\u0D10\u0D21\x07\xC1\x02\x02\u0D11\u0D21" +
		"\x07\xAE\x02\x02\u0D12\u0D21\x07\xC3\x02\x02\u0D13\u0D21\x07\xA7\x02\x02" +
		"\u0D14\u0D21\x07\xBE\x02\x02\u0D15\u0D21\x07\xA6\x02\x02\u0D16\u0D21\x07" +
		"\xBD\x02\x02\u0D17\u0D21\x07\xAA\x02\x02\u0D18\u0D21\x07\xBF\x02\x02\u0D19" +
		"\u0D21\x07\xAD\x02\x02\u0D1A\u0D21\x07\xC2\x02\x02\u0D1B\u0D21\x07\xAF" +
		"\x02\x02\u0D1C\u0D21\x07\xC4\x02\x02\u0D1D\u0D21\x07\xCD\x02\x02\u0D1E" +
		"\u0D21\x07\xCE\x02\x02\u0D1F\u0D21\x07\x81\x02\x02\u0D20\u0D05\x03\x02" +
		"\x02\x02\u0D20\u0D06\x03\x02\x02\x02\u0D20\u0D07\x03\x02\x02\x02\u0D20" +
		"\u0D09\x03\x02\x02\x02\u0D20\u0D0B\x03\x02\x02\x02\u0D20\u0D0C\x03\x02" +
		"\x02\x02\u0D20\u0D0D\x03\x02\x02\x02\u0D20\u0D0E\x03\x02\x02\x02\u0D20" +
		"\u0D0F\x03\x02\x02\x02\u0D20\u0D10\x03\x02\x02\x02\u0D20\u0D11\x03\x02" +
		"\x02\x02\u0D20\u0D12\x03\x02\x02\x02\u0D20\u0D13\x03\x02\x02\x02\u0D20" +
		"\u0D14\x03\x02\x02\x02\u0D20\u0D15\x03\x02\x02\x02\u0D20\u0D16\x03\x02" +
		"\x02\x02\u0D20\u0D17\x03\x02\x02\x02\u0D20\u0D18\x03\x02\x02\x02\u0D20" +
		"\u0D19\x03\x02\x02\x02\u0D20\u0D1A\x03\x02\x02\x02\u0D20\u0D1B\x03\x02" +
		"\x02\x02\u0D20\u0D1C\x03\x02\x02\x02\u0D20\u0D1D\x03\x02\x02\x02\u0D20" +
		"\u0D1E\x03\x02\x02\x02\u0D20\u0D1F\x03\x02\x02\x02\u0D21\u0D22\x03\x02" +
		"\x02\x02\u0D22\u0D20\x03\x02\x02\x02\u0D22\u0D23\x03\x02\x02\x02\u0D23" +
		"\u014F\x03\x02\x02\x02\u0D24\u0D25\x07\x04\x02\x02\u0D25\u0151\x03\x02" +
		"\x02\x02\u0D26\u0D27\x07\x88\x02\x02\u0D27\u0153\x03\x02\x02\x02\u01D0" +
		"\u0158\u015E\u0163\u0168\u016F\u01C6\u01CA\u01D0\u01D6\u01DA\u01E0\u01E6" +
		"\u01EC\u01F2\u01F7\u01FE\u0205\u020C\u0212\u0218\u0220\u0229\u022D\u0236" +
		"\u0238\u023D\u0243\u024C\u024E\u0253\u0259\u0262\u0269\u026E\u0276\u027D" +
		"\u0282\u028A\u0291\u0296\u029E\u02A5\u02AA\u02B2\u02B9\u02BE\u02C6\u02CD" +
		"\u02D2\u02DA\u02E1\u02E6\u02EE\u02F5\u02FA\u0302\u0309\u030E\u0316\u031D" +
		"\u0322\u032A\u0331\u0336\u033E\u0345\u034A\u0352\u0359\u035E\u0366\u036D" +
		"\u0372\u037A\u0381\u0386\u038E\u0395\u039A\u03BB\u03C3\u03C5\u03CC\u03D1" +
		"\u03D7\u03DD\u03E2\u03E8\u03ED\u03F3\u03FF\u0404\u040A\u0410\u0416\u041D" +
		"\u0423\u0426\u042A\u042E\u0430\u0440\u0445\u044B\u0451\u0458\u045E\u0461" +
		"\u0467\u0470\u0475\u047D\u0482\u0487\u048D\u0494\u049A\u049D\u04A3\u04A8" +
		"\u04AA\u04B1\u04B8\u04BF\u04C7\u04CC\u04D2\u04D9\u04DF\u04E2\u04EC\u04F1" +
		"\u04F7\u04FE\u0504\u0507\u0511\u0516\u051C\u0523\u0529\u052C\u0536\u053B" +
		"\u0541\u0548\u054E\u0551\u0559\u0560\u0565\u0569\u056E\u0575\u057B\u057E" +
		"\u0586\u058C\u0591\u0595\u059A\u05A1\u05A7\u05AA\u05B2\u05B9\u05BE\u05C6" +
		"\u05CD\u05D2\u05DA\u05E1\u05E6\u05EE\u05F5\u05FA\u0602\u0609\u060E\u0616" +
		"\u061D\u0622\u062A\u0631\u0636\u063E\u0645\u064A\u0652\u0659\u065E\u0666" +
		"\u066D\u0672\u067A\u0681\u0686\u068E\u0695\u069A\u06A2\u06A9\u06AE\u06B6" +
		"\u06BD\u06C2\u06CA\u06D1\u06D6\u06DE\u06E5\u06EA\u06F2\u06F9\u06FE\u0706" +
		"\u070D\u0712\u071A\u0721\u0726\u072E\u0735\u073A\u0742\u0749\u074E\u0756" +
		"\u075D\u0762\u076A\u0771\u0776\u077E\u0785\u078A\u0792\u0799\u079E\u07A6" +
		"\u07AD\u07B2\u07BA\u07C1\u07C6\u07CE\u07D5\u07DA\u07E2\u07E9\u07EE\u07F6" +
		"\u07FD\u0802\u080A\u0811\u0816\u081E\u0825\u082A\u0832\u0839\u083E\u0846" +
		"\u084D\u0852\u085A\u0861\u0866\u086E\u0875\u087A\u0882\u0889\u088E\u0896" +
		"\u089D\u08A2\u08AA\u08B1\u08B6\u08BE\u08C5\u08CA\u08D2\u08D9\u08DE\u08E6" +
		"\u08ED\u08F2\u08FA\u0901\u0906\u0912\u0917\u091D\u0924\u092A\u092D\u0936" +
		"\u0938\u0940\u0947\u094C\u0955\u0959\u095F\u0966\u096C\u096F\u0975\u097D" +
		"\u0984\u0989\u098E\u0993\u0999\u099D\u09A7\u09AE\u09B3\u09BC\u09C0\u09CA" +
		"\u09D1\u09D6\u09DF\u09E3\u09ED\u09F4\u09F9\u0A02\u0A06\u0A10\u0A17\u0A1C" +
		"\u0A24\u0A2A\u0A2E\u0A34\u0A3B\u0A41\u0A44\u0A49\u0A52\u0A57\u0A59\u0A67" +
		"\u0A6D\u0A72\u0A76\u0A7A\u0A7D\u0A82\u0A99\u0A9E\u0AA0\u0AAA\u0AB4\u0ABE" +
		"\u0AC4\u0ACB\u0AD1\u0AD9\u0AE3\u0AEE\u0AF4\u0AF9\u0B00\u0B09\u0B0D\u0B11" +
		"\u0B14\u0B23\u0B27\u0B36\u0B3A\u0B40\u0B4B\u0B50\u0B55\u0B57\u0B5C\u0B61" +
		"\u0B63\u0B68\u0B6E\u0B73\u0B75\u0B80\u0B84\u0B91\u0B95\u0B9B\u0B9D\u0BA4" +
		"\u0BA8\u0BAA\u0BB0\u0BB2\u0BB9\u0BBE\u0BC1\u0BC7\u0BCA\u0BCE\u0BD5\u0BDA" +
		"\u0BE0\u0BE5\u0BED\u0BEF\u0BF3\u0BFA\u0BFC\u0C05\u0C07\u0C0B\u0C15\u0C17" +
		"\u0C1B\u0C21\u0C23\u0C29\u0C30\u0C35\u0C3B\u0C40\u0C46\u0C49\u0C4F\u0C56" +
		"\u0C58\u0C5F\u0C69\u0C74\u0C82\u0C88\u0C92\u0C94\u0C9D\u0CA1\u0CA7\u0CA9" +
		"\u0CB0\u0CB2\u0CB6\u0CBA\u0CC0\u0CC4\u0CCA\u0CCD\u0CD3\u0CD6\u0CE0\u0CE7" +
		"\u0CEE\u0CF4\u0CFC\u0CFF\u0D20\u0D22";
	public static readonly _serializedATN: string = Utils.join(
		[
			bitmarkParser._serializedATNSegment0,
			bitmarkParser._serializedATNSegment1,
			bitmarkParser._serializedATNSegment2,
			bitmarkParser._serializedATNSegment3,
			bitmarkParser._serializedATNSegment4,
			bitmarkParser._serializedATNSegment5,
			bitmarkParser._serializedATNSegment6,
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
	public take_audio(): Take_audioContext | undefined {
		return this.tryGetRuleContext(0, Take_audioContext);
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
	public sample_solution(): Sample_solutionContext | undefined {
		return this.tryGetRuleContext(0, Sample_solutionContext);
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
	public vendor_padlet_embed(): Vendor_padlet_embedContext | undefined {
		return this.tryGetRuleContext(0, Vendor_padlet_embedContext);
	}
	public scorm(): ScormContext | undefined {
		return this.tryGetRuleContext(0, ScormContext);
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
	public bit_image(): Bit_imageContext | undefined {
		return this.tryGetRuleContext(0, Bit_imageContext);
	}
	public bit_imageLink(): Bit_imageLinkContext | undefined {
		return this.tryGetRuleContext(0, Bit_imageLinkContext);
	}
	public bit_imageZoom(): Bit_imageZoomContext | undefined {
		return this.tryGetRuleContext(0, Bit_imageZoomContext);
	}
	public bit_audio(): Bit_audioContext | undefined {
		return this.tryGetRuleContext(0, Bit_audioContext);
	}
	public bit_audioLink(): Bit_audioLinkContext | undefined {
		return this.tryGetRuleContext(0, Bit_audioLinkContext);
	}
	public bit_audioEmbed(): Bit_audioEmbedContext | undefined {
		return this.tryGetRuleContext(0, Bit_audioEmbedContext);
	}
	public bit_video(): Bit_videoContext | undefined {
		return this.tryGetRuleContext(0, Bit_videoContext);
	}
	public bit_videoLink(): Bit_videoLinkContext | undefined {
		return this.tryGetRuleContext(0, Bit_videoLinkContext);
	}
	public bit_videoEmbed(): Bit_videoEmbedContext | undefined {
		return this.tryGetRuleContext(0, Bit_videoEmbedContext);
	}
	public bit_stillImageFilm(): Bit_stillImageFilmContext | undefined {
		return this.tryGetRuleContext(0, Bit_stillImageFilmContext);
	}
	public bit_stillImageFilmLink(): Bit_stillImageFilmLinkContext | undefined {
		return this.tryGetRuleContext(0, Bit_stillImageFilmLinkContext);
	}
	public bit_stillImageFilmEmbed(): Bit_stillImageFilmEmbedContext | undefined {
		return this.tryGetRuleContext(0, Bit_stillImageFilmEmbedContext);
	}
	public bit_document(): Bit_documentContext | undefined {
		return this.tryGetRuleContext(0, Bit_documentContext);
	}
	public bit_documentLink(): Bit_documentLinkContext | undefined {
		return this.tryGetRuleContext(0, Bit_documentLinkContext);
	}
	public bit_documentEmbed(): Bit_documentEmbedContext | undefined {
		return this.tryGetRuleContext(0, Bit_documentEmbedContext);
	}
	public bit_documentDownload(): Bit_documentDownloadContext | undefined {
		return this.tryGetRuleContext(0, Bit_documentDownloadContext);
	}
	public bit_websiteLink(): Bit_websiteLinkContext | undefined {
		return this.tryGetRuleContext(0, Bit_websiteLinkContext);
	}
	public bit_appLink(): Bit_appLinkContext | undefined {
		return this.tryGetRuleContext(0, Bit_appLinkContext);
	}
	public bit_editorial(): Bit_editorialContext | undefined {
		return this.tryGetRuleContext(0, Bit_editorialContext);
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


export class Take_audioContext extends ParserRuleContext {
	public BitTakeAudio(): TerminalNode { return this.getToken(bitmarkParser.BitTakeAudio, 0); }
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
	public get ruleIndex(): number { return bitmarkParser.RULE_take_audio; }
	// @Override
	public enterRule(listener: bitmarkParserListener): void {
		if (listener.enterTake_audio) {
			listener.enterTake_audio(this);
		}
	}
	// @Override
	public exitRule(listener: bitmarkParserListener): void {
		if (listener.exitTake_audio) {
			listener.exitTake_audio(this);
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


export class Sample_solutionContext extends ParserRuleContext {
	public BitSampleSolution(): TerminalNode { return this.getToken(bitmarkParser.BitSampleSolution, 0); }
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
	public get ruleIndex(): number { return bitmarkParser.RULE_sample_solution; }
	// @Override
	public enterRule(listener: bitmarkParserListener): void {
		if (listener.enterSample_solution) {
			listener.enterSample_solution(this);
		}
	}
	// @Override
	public exitRule(listener: bitmarkParserListener): void {
		if (listener.exitSample_solution) {
			listener.exitSample_solution(this);
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


export class Vendor_padlet_embedContext extends ParserRuleContext {
	public BitVendorPadletEmbed(): TerminalNode { return this.getToken(bitmarkParser.BitVendorPadletEmbed, 0); }
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
	public get ruleIndex(): number { return bitmarkParser.RULE_vendor_padlet_embed; }
	// @Override
	public enterRule(listener: bitmarkParserListener): void {
		if (listener.enterVendor_padlet_embed) {
			listener.enterVendor_padlet_embed(this);
		}
	}
	// @Override
	public exitRule(listener: bitmarkParserListener): void {
		if (listener.exitVendor_padlet_embed) {
			listener.exitVendor_padlet_embed(this);
		}
	}
}


export class ScormContext extends ParserRuleContext {
	public BitScorm(): TerminalNode { return this.getToken(bitmarkParser.BitScorm, 0); }
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
	public get ruleIndex(): number { return bitmarkParser.RULE_scorm; }
	// @Override
	public enterRule(listener: bitmarkParserListener): void {
		if (listener.enterScorm) {
			listener.enterScorm(this);
		}
	}
	// @Override
	public exitRule(listener: bitmarkParserListener): void {
		if (listener.exitScorm) {
			listener.exitScorm(this);
		}
	}
}


export class Bit_imageContext extends ParserRuleContext {
	public BitImage(): TerminalNode { return this.getToken(bitmarkParser.BitImage, 0); }
	public format2(): Format2Context {
		return this.getRuleContext(0, Format2Context);
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
	public get ruleIndex(): number { return bitmarkParser.RULE_bit_image; }
	// @Override
	public enterRule(listener: bitmarkParserListener): void {
		if (listener.enterBit_image) {
			listener.enterBit_image(this);
		}
	}
	// @Override
	public exitRule(listener: bitmarkParserListener): void {
		if (listener.exitBit_image) {
			listener.exitBit_image(this);
		}
	}
}


export class Bit_imageLinkContext extends ParserRuleContext {
	public BitImageLink(): TerminalNode { return this.getToken(bitmarkParser.BitImageLink, 0); }
	public format2(): Format2Context {
		return this.getRuleContext(0, Format2Context);
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
	public get ruleIndex(): number { return bitmarkParser.RULE_bit_imageLink; }
	// @Override
	public enterRule(listener: bitmarkParserListener): void {
		if (listener.enterBit_imageLink) {
			listener.enterBit_imageLink(this);
		}
	}
	// @Override
	public exitRule(listener: bitmarkParserListener): void {
		if (listener.exitBit_imageLink) {
			listener.exitBit_imageLink(this);
		}
	}
}


export class Bit_imageZoomContext extends ParserRuleContext {
	public BitImageZoom(): TerminalNode { return this.getToken(bitmarkParser.BitImageZoom, 0); }
	public format2(): Format2Context {
		return this.getRuleContext(0, Format2Context);
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
	public get ruleIndex(): number { return bitmarkParser.RULE_bit_imageZoom; }
	// @Override
	public enterRule(listener: bitmarkParserListener): void {
		if (listener.enterBit_imageZoom) {
			listener.enterBit_imageZoom(this);
		}
	}
	// @Override
	public exitRule(listener: bitmarkParserListener): void {
		if (listener.exitBit_imageZoom) {
			listener.exitBit_imageZoom(this);
		}
	}
}


export class Bit_audioContext extends ParserRuleContext {
	public BitAudio(): TerminalNode { return this.getToken(bitmarkParser.BitAudio, 0); }
	public format2(): Format2Context {
		return this.getRuleContext(0, Format2Context);
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
	public get ruleIndex(): number { return bitmarkParser.RULE_bit_audio; }
	// @Override
	public enterRule(listener: bitmarkParserListener): void {
		if (listener.enterBit_audio) {
			listener.enterBit_audio(this);
		}
	}
	// @Override
	public exitRule(listener: bitmarkParserListener): void {
		if (listener.exitBit_audio) {
			listener.exitBit_audio(this);
		}
	}
}


export class Bit_audioLinkContext extends ParserRuleContext {
	public BitAudioLink(): TerminalNode { return this.getToken(bitmarkParser.BitAudioLink, 0); }
	public format2(): Format2Context {
		return this.getRuleContext(0, Format2Context);
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
	public get ruleIndex(): number { return bitmarkParser.RULE_bit_audioLink; }
	// @Override
	public enterRule(listener: bitmarkParserListener): void {
		if (listener.enterBit_audioLink) {
			listener.enterBit_audioLink(this);
		}
	}
	// @Override
	public exitRule(listener: bitmarkParserListener): void {
		if (listener.exitBit_audioLink) {
			listener.exitBit_audioLink(this);
		}
	}
}


export class Bit_audioEmbedContext extends ParserRuleContext {
	public BitAudioEmbed(): TerminalNode { return this.getToken(bitmarkParser.BitAudioEmbed, 0); }
	public format2(): Format2Context {
		return this.getRuleContext(0, Format2Context);
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
	public get ruleIndex(): number { return bitmarkParser.RULE_bit_audioEmbed; }
	// @Override
	public enterRule(listener: bitmarkParserListener): void {
		if (listener.enterBit_audioEmbed) {
			listener.enterBit_audioEmbed(this);
		}
	}
	// @Override
	public exitRule(listener: bitmarkParserListener): void {
		if (listener.exitBit_audioEmbed) {
			listener.exitBit_audioEmbed(this);
		}
	}
}


export class Bit_videoContext extends ParserRuleContext {
	public BitVideo(): TerminalNode { return this.getToken(bitmarkParser.BitVideo, 0); }
	public format2(): Format2Context {
		return this.getRuleContext(0, Format2Context);
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
	public get ruleIndex(): number { return bitmarkParser.RULE_bit_video; }
	// @Override
	public enterRule(listener: bitmarkParserListener): void {
		if (listener.enterBit_video) {
			listener.enterBit_video(this);
		}
	}
	// @Override
	public exitRule(listener: bitmarkParserListener): void {
		if (listener.exitBit_video) {
			listener.exitBit_video(this);
		}
	}
}


export class Bit_videoLinkContext extends ParserRuleContext {
	public BitVideoLink(): TerminalNode { return this.getToken(bitmarkParser.BitVideoLink, 0); }
	public format2(): Format2Context {
		return this.getRuleContext(0, Format2Context);
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
	public get ruleIndex(): number { return bitmarkParser.RULE_bit_videoLink; }
	// @Override
	public enterRule(listener: bitmarkParserListener): void {
		if (listener.enterBit_videoLink) {
			listener.enterBit_videoLink(this);
		}
	}
	// @Override
	public exitRule(listener: bitmarkParserListener): void {
		if (listener.exitBit_videoLink) {
			listener.exitBit_videoLink(this);
		}
	}
}


export class Bit_videoEmbedContext extends ParserRuleContext {
	public BitVideoEmbed(): TerminalNode { return this.getToken(bitmarkParser.BitVideoEmbed, 0); }
	public format2(): Format2Context {
		return this.getRuleContext(0, Format2Context);
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
	public get ruleIndex(): number { return bitmarkParser.RULE_bit_videoEmbed; }
	// @Override
	public enterRule(listener: bitmarkParserListener): void {
		if (listener.enterBit_videoEmbed) {
			listener.enterBit_videoEmbed(this);
		}
	}
	// @Override
	public exitRule(listener: bitmarkParserListener): void {
		if (listener.exitBit_videoEmbed) {
			listener.exitBit_videoEmbed(this);
		}
	}
}


export class Bit_stillImageFilmContext extends ParserRuleContext {
	public BitStillImageFilm(): TerminalNode { return this.getToken(bitmarkParser.BitStillImageFilm, 0); }
	public format2(): Format2Context {
		return this.getRuleContext(0, Format2Context);
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
	public get ruleIndex(): number { return bitmarkParser.RULE_bit_stillImageFilm; }
	// @Override
	public enterRule(listener: bitmarkParserListener): void {
		if (listener.enterBit_stillImageFilm) {
			listener.enterBit_stillImageFilm(this);
		}
	}
	// @Override
	public exitRule(listener: bitmarkParserListener): void {
		if (listener.exitBit_stillImageFilm) {
			listener.exitBit_stillImageFilm(this);
		}
	}
}


export class Bit_stillImageFilmLinkContext extends ParserRuleContext {
	public BitStillImageFilmLink(): TerminalNode { return this.getToken(bitmarkParser.BitStillImageFilmLink, 0); }
	public format2(): Format2Context {
		return this.getRuleContext(0, Format2Context);
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
	public get ruleIndex(): number { return bitmarkParser.RULE_bit_stillImageFilmLink; }
	// @Override
	public enterRule(listener: bitmarkParserListener): void {
		if (listener.enterBit_stillImageFilmLink) {
			listener.enterBit_stillImageFilmLink(this);
		}
	}
	// @Override
	public exitRule(listener: bitmarkParserListener): void {
		if (listener.exitBit_stillImageFilmLink) {
			listener.exitBit_stillImageFilmLink(this);
		}
	}
}


export class Bit_stillImageFilmEmbedContext extends ParserRuleContext {
	public BitStillImageFilmEmbed(): TerminalNode { return this.getToken(bitmarkParser.BitStillImageFilmEmbed, 0); }
	public format2(): Format2Context {
		return this.getRuleContext(0, Format2Context);
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
	public get ruleIndex(): number { return bitmarkParser.RULE_bit_stillImageFilmEmbed; }
	// @Override
	public enterRule(listener: bitmarkParserListener): void {
		if (listener.enterBit_stillImageFilmEmbed) {
			listener.enterBit_stillImageFilmEmbed(this);
		}
	}
	// @Override
	public exitRule(listener: bitmarkParserListener): void {
		if (listener.exitBit_stillImageFilmEmbed) {
			listener.exitBit_stillImageFilmEmbed(this);
		}
	}
}


export class Bit_websiteLinkContext extends ParserRuleContext {
	public BitWebsiteLink(): TerminalNode { return this.getToken(bitmarkParser.BitWebsiteLink, 0); }
	public format2(): Format2Context {
		return this.getRuleContext(0, Format2Context);
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
	public get ruleIndex(): number { return bitmarkParser.RULE_bit_websiteLink; }
	// @Override
	public enterRule(listener: bitmarkParserListener): void {
		if (listener.enterBit_websiteLink) {
			listener.enterBit_websiteLink(this);
		}
	}
	// @Override
	public exitRule(listener: bitmarkParserListener): void {
		if (listener.exitBit_websiteLink) {
			listener.exitBit_websiteLink(this);
		}
	}
}


export class Bit_documentContext extends ParserRuleContext {
	public BitDocument(): TerminalNode { return this.getToken(bitmarkParser.BitDocument, 0); }
	public format2(): Format2Context {
		return this.getRuleContext(0, Format2Context);
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
	public get ruleIndex(): number { return bitmarkParser.RULE_bit_document; }
	// @Override
	public enterRule(listener: bitmarkParserListener): void {
		if (listener.enterBit_document) {
			listener.enterBit_document(this);
		}
	}
	// @Override
	public exitRule(listener: bitmarkParserListener): void {
		if (listener.exitBit_document) {
			listener.exitBit_document(this);
		}
	}
}


export class Bit_documentLinkContext extends ParserRuleContext {
	public BitDocumentLink(): TerminalNode { return this.getToken(bitmarkParser.BitDocumentLink, 0); }
	public format2(): Format2Context {
		return this.getRuleContext(0, Format2Context);
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
	public get ruleIndex(): number { return bitmarkParser.RULE_bit_documentLink; }
	// @Override
	public enterRule(listener: bitmarkParserListener): void {
		if (listener.enterBit_documentLink) {
			listener.enterBit_documentLink(this);
		}
	}
	// @Override
	public exitRule(listener: bitmarkParserListener): void {
		if (listener.exitBit_documentLink) {
			listener.exitBit_documentLink(this);
		}
	}
}


export class Bit_documentEmbedContext extends ParserRuleContext {
	public BitDocumentEmbed(): TerminalNode { return this.getToken(bitmarkParser.BitDocumentEmbed, 0); }
	public format2(): Format2Context {
		return this.getRuleContext(0, Format2Context);
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
	public get ruleIndex(): number { return bitmarkParser.RULE_bit_documentEmbed; }
	// @Override
	public enterRule(listener: bitmarkParserListener): void {
		if (listener.enterBit_documentEmbed) {
			listener.enterBit_documentEmbed(this);
		}
	}
	// @Override
	public exitRule(listener: bitmarkParserListener): void {
		if (listener.exitBit_documentEmbed) {
			listener.exitBit_documentEmbed(this);
		}
	}
}


export class Bit_documentDownloadContext extends ParserRuleContext {
	public BitDocumentDownload(): TerminalNode { return this.getToken(bitmarkParser.BitDocumentDownload, 0); }
	public format2(): Format2Context {
		return this.getRuleContext(0, Format2Context);
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
	public get ruleIndex(): number { return bitmarkParser.RULE_bit_documentDownload; }
	// @Override
	public enterRule(listener: bitmarkParserListener): void {
		if (listener.enterBit_documentDownload) {
			listener.enterBit_documentDownload(this);
		}
	}
	// @Override
	public exitRule(listener: bitmarkParserListener): void {
		if (listener.exitBit_documentDownload) {
			listener.exitBit_documentDownload(this);
		}
	}
}


export class Bit_appLinkContext extends ParserRuleContext {
	public BitAppLink(): TerminalNode { return this.getToken(bitmarkParser.BitAppLink, 0); }
	public format2(): Format2Context {
		return this.getRuleContext(0, Format2Context);
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
	public get ruleIndex(): number { return bitmarkParser.RULE_bit_appLink; }
	// @Override
	public enterRule(listener: bitmarkParserListener): void {
		if (listener.enterBit_appLink) {
			listener.enterBit_appLink(this);
		}
	}
	// @Override
	public exitRule(listener: bitmarkParserListener): void {
		if (listener.exitBit_appLink) {
			listener.exitBit_appLink(this);
		}
	}
}


export class Bit_editorialContext extends ParserRuleContext {
	public BitEditorial(): TerminalNode { return this.getToken(bitmarkParser.BitEditorial, 0); }
	public format2(): Format2Context {
		return this.getRuleContext(0, Format2Context);
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
	public get ruleIndex(): number { return bitmarkParser.RULE_bit_editorial; }
	// @Override
	public enterRule(listener: bitmarkParserListener): void {
		if (listener.enterBit_editorial) {
			listener.enterBit_editorial(this);
		}
	}
	// @Override
	public exitRule(listener: bitmarkParserListener): void {
		if (listener.exitBit_editorial) {
			listener.exitBit_editorial(this);
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
	public Prosemirror(): TerminalNode | undefined { return this.tryGetToken(bitmarkParser.Prosemirror, 0); }
	public Placeholder(): TerminalNode | undefined { return this.tryGetToken(bitmarkParser.Placeholder, 0); }
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


export class Format2Context extends ParserRuleContext {
	public BitmarkMinus(): TerminalNode | undefined { return this.tryGetToken(bitmarkParser.BitmarkMinus, 0); }
	public BitmarkPlus(): TerminalNode | undefined { return this.tryGetToken(bitmarkParser.BitmarkPlus, 0); }
	public ColonText(): TerminalNode | undefined { return this.tryGetToken(bitmarkParser.ColonText, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return bitmarkParser.RULE_format2; }
	// @Override
	public enterRule(listener: bitmarkParserListener): void {
		if (listener.enterFormat2) {
			listener.enterFormat2(this);
		}
	}
	// @Override
	public exitRule(listener: bitmarkParserListener): void {
		if (listener.exitFormat2) {
			listener.exitFormat2(this);
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
	public OpAtSearch(): TerminalNode | undefined { return this.tryGetToken(bitmarkParser.OpAtSearch, 0); }
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
	public OpAtSearch(): TerminalNode | undefined { return this.tryGetToken(bitmarkParser.OpAtSearch, 0); }
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
	public OpAtSearch(): TerminalNode | undefined { return this.tryGetToken(bitmarkParser.OpAtSearch, 0); }
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


