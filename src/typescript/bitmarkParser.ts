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
	public static readonly BitBookFrontispiece = 92;
	public static readonly BitBookTitle = 93;
	public static readonly BitBookCopyright = 94;
	public static readonly BitBookDedication = 95;
	public static readonly BitBookForword = 96;
	public static readonly BitBookPreface = 97;
	public static readonly BitBookPrologue = 98;
	public static readonly BitBookEpilogue = 99;
	public static readonly BitBookIntroduction = 100;
	public static readonly BitBookIncitingIncident = 101;
	public static readonly BitBookConclusion = 102;
	public static readonly BitBookAfterword = 103;
	public static readonly BitBookPostscript = 104;
	public static readonly BitBookappendix = 105;
	public static readonly BitBookAddendum = 106;
	public static readonly BitBookAcknowledgments = 107;
	public static readonly BitBookListOfContributors = 108;
	public static readonly BitBookBibliography = 109;
	public static readonly BitBookReferenceList = 110;
	public static readonly BitBookEndnotes = 111;
	public static readonly BitBookNotes = 112;
	public static readonly BitBookCopyrightPermissions = 113;
	public static readonly BitBookTeaser = 114;
	public static readonly BitBookAutherBio = 115;
	public static readonly BitBookRequestForABookReview = 116;
	public static readonly BitBookComingSoon = 117;
	public static readonly BitBookReadMore = 118;
	public static readonly BitBookSummary = 119;
	public static readonly BitBookEpigraph = 120;
	public static readonly COMMENT = 121;
	public static readonly Image_type = 122;
	public static readonly Audio_type = 123;
	public static readonly Video_type = 124;
	public static readonly OPDOLL = 125;
	public static readonly OPBUL = 126;
	public static readonly OPESC = 127;
	public static readonly OPRANGLES = 128;
	public static readonly OPRANGLEL = 129;
	public static readonly OPDANGLE = 130;
	public static readonly OPU = 131;
	public static readonly OPB = 132;
	public static readonly OPQ = 133;
	public static readonly OPA = 134;
	public static readonly OPP = 135;
	public static readonly OPM = 136;
	public static readonly OPS = 137;
	public static readonly OPR = 138;
	public static readonly OPHASH = 139;
	public static readonly OPC = 140;
	public static readonly CL = 141;
	public static readonly COLON = 142;
	public static readonly AMP = 143;
	public static readonly DBLCOLON = 144;
	public static readonly PLUS = 145;
	public static readonly DotAt = 146;
	public static readonly Greater = 147;
	public static readonly Less = 148;
	public static readonly RightAngle = 149;
	public static readonly RightArrow = 150;
	public static readonly DBLEQ = 151;
	public static readonly HSPL = 152;
	public static readonly HSPL2 = 153;
	public static readonly SSPL = 154;
	public static readonly SSPL2 = 155;
	public static readonly QUOTE_INDEX = 156;
	public static readonly DCANY = 157;
	public static readonly ArticleText = 158;
	public static readonly NOTCL = 159;
	public static readonly NUMERIC = 160;
	public static readonly STRING = 161;
	public static readonly NL = 162;
	public static readonly SENTENCE = 163;
	public static readonly OPAT = 164;
	public static readonly AtProgress = 165;
	public static readonly AtReference = 166;
	public static readonly AtWidth = 167;
	public static readonly AtHeight = 168;
	public static readonly AtProgressPoints = 169;
	public static readonly AtShortanswer = 170;
	public static readonly AtLonganswer = 171;
	public static readonly AtExampleWithStr = 172;
	public static readonly AtExamplecol = 173;
	public static readonly AtExamplecl = 174;
	public static readonly AtPartialAnswerS = 175;
	public static readonly AtPartialAnswer = 176;
	public static readonly AtLabeltrue = 177;
	public static readonly AtLabelfalse = 178;
	public static readonly AtPoints = 179;
	public static readonly AtSrc = 180;
	public static readonly OPATALT = 181;
	public static readonly OPAMARK = 182;
	public static readonly ShowInIndex = 183;
	public static readonly OpAtCaption = 184;
	public static readonly OpAtLicense = 185;
	public static readonly OpAtCopyright = 186;
	public static readonly OpAtSearch = 187;
	public static readonly OpAtIsTracked = 188;
	public static readonly OpAtIsInfoOnly = 189;
	public static readonly AtDate = 190;
	public static readonly Http = 191;
	public static readonly Https = 192;
	public static readonly AmpAudio = 193;
	public static readonly AmpImage = 194;
	public static readonly AmpImageZoom = 195;
	public static readonly AmpImageWAudio = 196;
	public static readonly AmpVideo = 197;
	public static readonly AmpArticle = 198;
	public static readonly AmpDocument = 199;
	public static readonly AmpApp = 200;
	public static readonly AmpWebsite = 201;
	public static readonly AmpStillImageFilm = 202;
	public static readonly AmpPdf = 203;
	public static readonly OpAmpAudio = 204;
	public static readonly OpAmpImage = 205;
	public static readonly OpAmpImageZoom = 206;
	public static readonly OpAmpImageWAudio = 207;
	public static readonly OpAmpVideo = 208;
	public static readonly OpAmpArticle = 209;
	public static readonly OpAmpArticleAtt = 210;
	public static readonly OpAmpDocument = 211;
	public static readonly OpAmpApp = 212;
	public static readonly OpAmpWebsite = 213;
	public static readonly OpAmpStillImageFilm = 214;
	public static readonly BracEnclose = 215;
	public static readonly AmpAudioLink = 216;
	public static readonly AmpImageLink = 217;
	public static readonly AmpVideoLink = 218;
	public static readonly AmpArticleLink = 219;
	public static readonly AmpDocumentLink = 220;
	public static readonly AmpAppLink = 221;
	public static readonly AmpWebsiteLink = 222;
	public static readonly AmpStillImageFilmLink = 223;
	public static readonly OpAmpAudioLink = 224;
	public static readonly OpAmpImageLink = 225;
	public static readonly OpAmpVideoLink = 226;
	public static readonly OpAmpArticleLink = 227;
	public static readonly OpAmpDocumentLink = 228;
	public static readonly OpAmpAppLink = 229;
	public static readonly OpAmpWebsiteLink = 230;
	public static readonly OpAmpStillImageFilmLink = 231;
	public static readonly BitmarkMinus = 232;
	public static readonly BitmarkPlus = 233;
	public static readonly ColonText = 234;
	public static readonly Prosemirror = 235;
	public static readonly Placeholder = 236;
	public static readonly BASIC = 237;
	public static readonly JPG = 238;
	public static readonly PNG = 239;
	public static readonly GIF = 240;
	public static readonly SVG = 241;
	public static readonly MP2 = 242;
	public static readonly MP3 = 243;
	public static readonly MP4 = 244;
	public static readonly FLV = 245;
	public static readonly WMV = 246;
	public static readonly MPEG = 247;
	public static readonly MPG = 248;
	public static readonly TEL = 249;
	public static readonly DotArticleAtt = 250;
	public static readonly STAR = 251;
	public static readonly URL = 252;
	public static readonly LIST_LINE = 253;
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
	public static readonly RULE_book_frontispiece = 91;
	public static readonly RULE_book_title = 92;
	public static readonly RULE_book_copyright = 93;
	public static readonly RULE_book_dedication = 94;
	public static readonly RULE_book_forword = 95;
	public static readonly RULE_book_preface = 96;
	public static readonly RULE_book_prologue = 97;
	public static readonly RULE_book_epilogue = 98;
	public static readonly RULE_book_introduction = 99;
	public static readonly RULE_book_inciting_incident = 100;
	public static readonly RULE_book_conclusion = 101;
	public static readonly RULE_book_afterword = 102;
	public static readonly RULE_book_postscript = 103;
	public static readonly RULE_book_appendix = 104;
	public static readonly RULE_book_addendum = 105;
	public static readonly RULE_book_acknowledgments = 106;
	public static readonly RULE_book_list_of_contributors = 107;
	public static readonly RULE_book_bibliography = 108;
	public static readonly RULE_book_reference_list = 109;
	public static readonly RULE_book_endnotes = 110;
	public static readonly RULE_book_notes = 111;
	public static readonly RULE_book_copyright_permissions = 112;
	public static readonly RULE_book_teaser = 113;
	public static readonly RULE_book_auther_bio = 114;
	public static readonly RULE_book_request_for_a_book_review = 115;
	public static readonly RULE_book_coming_soon = 116;
	public static readonly RULE_book_read_more = 117;
	public static readonly RULE_book_summary = 118;
	public static readonly RULE_book_epigraph = 119;
	public static readonly RULE_message = 120;
	public static readonly RULE_bot_interview = 121;
	public static readonly RULE_bot_choice = 122;
	public static readonly RULE_rating = 123;
	public static readonly RULE_bullet_item = 124;
	public static readonly RULE_survey = 125;
	public static readonly RULE_survey_1 = 126;
	public static readonly RULE_survey_anonymous = 127;
	public static readonly RULE_survey_anonymous_1 = 128;
	public static readonly RULE_self_assessment = 129;
	public static readonly RULE_self_assess_s_and_w = 130;
	public static readonly RULE_atpoint = 131;
	public static readonly RULE_format = 132;
	public static readonly RULE_resource_format = 133;
	public static readonly RULE_resource_format_extra = 134;
	public static readonly RULE_format2 = 135;
	public static readonly RULE_image_format = 136;
	public static readonly RULE_video_format = 137;
	public static readonly RULE_article_format = 138;
	public static readonly RULE_document_format = 139;
	public static readonly RULE_app_format = 140;
	public static readonly RULE_website_format = 141;
	public static readonly RULE_stillimagefilm_format = 142;
	public static readonly RULE_op_article_format = 143;
	public static readonly RULE_op_document_format = 144;
	public static readonly RULE_op_app_format = 145;
	public static readonly RULE_op_website_format = 146;
	public static readonly RULE_op_video_format = 147;
	public static readonly RULE_op_stillimagefilm_format = 148;
	public static readonly RULE_articlebit = 149;
	public static readonly RULE_documentbit = 150;
	public static readonly RULE_websitebit = 151;
	public static readonly RULE_appbit = 152;
	public static readonly RULE_stillimagefilmbit = 153;
	public static readonly RULE_stillimg_one = 154;
	public static readonly RULE_videobit = 155;
	public static readonly RULE_video_one = 156;
	public static readonly RULE_imagebit = 157;
	public static readonly RULE_image_one = 158;
	public static readonly RULE_op_image_format = 159;
	public static readonly RULE_image_chained = 160;
	public static readonly RULE_image_chained4match = 161;
	public static readonly RULE_audiobit = 162;
	public static readonly RULE_audio_one = 163;
	public static readonly RULE_audio_format = 164;
	public static readonly RULE_op_audio_format = 165;
	public static readonly RULE_resource_chained = 166;
	public static readonly RULE_telephone = 167;
	public static readonly RULE_url = 168;
	public static readonly RULE_item = 169;
	public static readonly RULE_lead = 170;
	public static readonly RULE_angleref = 171;
	public static readonly RULE_example = 172;
	public static readonly RULE_bracketed_text = 173;
	public static readonly RULE_reference = 174;
	public static readonly RULE_progress = 175;
	public static readonly RULE_dateprop = 176;
	public static readonly RULE_dateprop_chained = 177;
	public static readonly RULE_instruction = 178;
	public static readonly RULE_hint = 179;
	public static readonly RULE_title = 180;
	public static readonly RULE_bool_label = 181;
	public static readonly RULE_progress_points = 182;
	public static readonly RULE_istracked = 183;
	public static readonly RULE_isinfoonly = 184;
	public static readonly RULE_atdef = 185;
	public static readonly RULE_atdef_ = 186;
	public static readonly RULE_dollarans = 187;
	public static readonly RULE_anchor = 188;
	public static readonly RULE_lines = 189;
	public static readonly RULE_s_and_w = 190;
	public static readonly RULE_dclines = 191;
	public static readonly RULE_bracket_escaped = 192;
	public static readonly RULE_clnsp = 193;
	public static readonly RULE_sspl = 194;
	public static readonly RULE_words = 195;
	public static readonly RULE_sp = 196;
	public static readonly RULE_sentence = 197;
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
		"bit_appLink", "bit_editorial", "book_frontispiece", "book_title", "book_copyright", 
		"book_dedication", "book_forword", "book_preface", "book_prologue", "book_epilogue", 
		"book_introduction", "book_inciting_incident", "book_conclusion", "book_afterword", 
		"book_postscript", "book_appendix", "book_addendum", "book_acknowledgments", 
		"book_list_of_contributors", "book_bibliography", "book_reference_list", 
		"book_endnotes", "book_notes", "book_copyright_permissions", "book_teaser", 
		"book_auther_bio", "book_request_for_a_book_review", "book_coming_soon", 
		"book_read_more", "book_summary", "book_epigraph", "message", "bot_interview", 
		"bot_choice", "rating", "bullet_item", "survey", "survey_1", "survey_anonymous", 
		"survey_anonymous_1", "self_assessment", "self_assess_s_and_w", "atpoint", 
		"format", "resource_format", "resource_format_extra", "format2", "image_format", 
		"video_format", "article_format", "document_format", "app_format", "website_format", 
		"stillimagefilm_format", "op_article_format", "op_document_format", "op_app_format", 
		"op_website_format", "op_video_format", "op_stillimagefilm_format", "articlebit", 
		"documentbit", "websitebit", "appbit", "stillimagefilmbit", "stillimg_one", 
		"videobit", "video_one", "imagebit", "image_one", "op_image_format", "image_chained", 
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
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, "':'", "'&'", "'::'", "'+'", "'.@'", "'>'", "'<'", 
		"'\u25BA'", "'\u2192'", "'=='", undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, "'[@'", undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		"'http://'", "'https://'", "'&audio'", "'&image'", "'&image-zoom'", "'&imageWithAudio'", 
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
		"BitEditorial", "BitBookFrontispiece", "BitBookTitle", "BitBookCopyright", 
		"BitBookDedication", "BitBookForword", "BitBookPreface", "BitBookPrologue", 
		"BitBookEpilogue", "BitBookIntroduction", "BitBookIncitingIncident", "BitBookConclusion", 
		"BitBookAfterword", "BitBookPostscript", "BitBookappendix", "BitBookAddendum", 
		"BitBookAcknowledgments", "BitBookListOfContributors", "BitBookBibliography", 
		"BitBookReferenceList", "BitBookEndnotes", "BitBookNotes", "BitBookCopyrightPermissions", 
		"BitBookTeaser", "BitBookAutherBio", "BitBookRequestForABookReview", "BitBookComingSoon", 
		"BitBookReadMore", "BitBookSummary", "BitBookEpigraph", "COMMENT", "Image_type", 
		"Audio_type", "Video_type", "OPDOLL", "OPBUL", "OPESC", "OPRANGLES", "OPRANGLEL", 
		"OPDANGLE", "OPU", "OPB", "OPQ", "OPA", "OPP", "OPM", "OPS", "OPR", "OPHASH", 
		"OPC", "CL", "COLON", "AMP", "DBLCOLON", "PLUS", "DotAt", "Greater", "Less", 
		"RightAngle", "RightArrow", "DBLEQ", "HSPL", "HSPL2", "SSPL", "SSPL2", 
		"QUOTE_INDEX", "DCANY", "ArticleText", "NOTCL", "NUMERIC", "STRING", "NL", 
		"SENTENCE", "OPAT", "AtProgress", "AtReference", "AtWidth", "AtHeight", 
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
		"OpAmpStillImageFilmLink", "BitmarkMinus", "BitmarkPlus", "ColonText", 
		"Prosemirror", "Placeholder", "BASIC", "JPG", "PNG", "GIF", "SVG", "MP2", 
		"MP3", "MP4", "FLV", "WMV", "MPEG", "MPG", "TEL", "DotArticleAtt", "STAR", 
		"URL", "LIST_LINE",
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
			this.state = 409;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 396;
				this.bitmark_();
				this.state = 406;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 1, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 400;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						while (_la === bitmarkParser.S) {
							{
							{
							this.state = 397;
							this.match(bitmarkParser.S);
							}
							}
							this.state = 402;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
						}
						this.state = 403;
						this.match(bitmarkParser.NL);
						}
						}
					}
					this.state = 408;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 1, this._ctx);
				}
				}
				}
				this.state = 411;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << bitmarkParser.S) | (1 << bitmarkParser.BitBook) | (1 << bitmarkParser.BitChapter) | (1 << bitmarkParser.BitToc) | (1 << bitmarkParser.BitSummary) | (1 << bitmarkParser.BitIntlink) | (1 << bitmarkParser.BitIntRef) | (1 << bitmarkParser.BitAlias) | (1 << bitmarkParser.BitGroups) | (1 << bitmarkParser.BitGroupt) | (1 << bitmarkParser.BitStatement) | (1 << bitmarkParser.BitDetails) | (1 << bitmarkParser.BitSampleSolution) | (1 << bitmarkParser.BitTakeAudio) | (1 << bitmarkParser.BitArticle) | (1 << bitmarkParser.BitPage) | (1 << bitmarkParser.BitEssay) | (1 << bitmarkParser.BitMessage) | (1 << bitmarkParser.BitCorrection) | (1 << bitmarkParser.BitMark) | (1 << bitmarkParser.BitDocup) | (1 << bitmarkParser.BitTakepic) | (1 << bitmarkParser.BitRecaud) | (1 << bitmarkParser.BitPrepnote) | (1 << bitmarkParser.BitAssign) | (1 << bitmarkParser.BitBotint) | (1 << bitmarkParser.BitSelfassess))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (bitmarkParser.BitRating - 32)) | (1 << (bitmarkParser.BitSurvey - 32)) | (1 << (bitmarkParser.BitSurvey1 - 32)) | (1 << (bitmarkParser.BitSurveyanon - 32)) | (1 << (bitmarkParser.BitSurveyanon1 - 32)) | (1 << (bitmarkParser.BitNote - 32)) | (1 << (bitmarkParser.BitInfo - 32)) | (1 << (bitmarkParser.BitWarning - 32)) | (1 << (bitmarkParser.BitRemark - 32)) | (1 << (bitmarkParser.BitHint - 32)) | (1 << (bitmarkParser.BitHelp - 32)) | (1 << (bitmarkParser.BitDanger - 32)) | (1 << (bitmarkParser.BitBug - 32)) | (1 << (bitmarkParser.BitSidenote - 32)) | (1 << (bitmarkParser.BitStickynote - 32)) | (1 << (bitmarkParser.BitQuote - 32)) | (1 << (bitmarkParser.BitFootnote - 32)) | (1 << (bitmarkParser.BitExample - 32)) | (1 << (bitmarkParser.BitButtonCopytext - 32)) | (1 << (bitmarkParser.BitWbtContinue - 32)) | (1 << (bitmarkParser.BitLearningPathDetails - 32)) | (1 << (bitmarkParser.BitLearningPathLti - 32)) | (1 << (bitmarkParser.BitLearningPathStep - 32)) | (1 << (bitmarkParser.BitLearningPathBook - 32)) | (1 << (bitmarkParser.BitLearningPathSign - 32)) | (1 << (bitmarkParser.BitLearningPathVideoCall - 32)) | (1 << (bitmarkParser.BitLearningPathLearningGoal - 32)) | (1 << (bitmarkParser.BitLearningPathClosing - 32)) | (1 << (bitmarkParser.BitLearningPathFeedback - 32)) | (1 << (bitmarkParser.BitLearningPathBotTraining - 32)))) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (bitmarkParser.BitLearningPathExternalLink - 64)) | (1 << (bitmarkParser.BitLearningPathClassroomTraining - 64)) | (1 << (bitmarkParser.BitLearningPathClassroomEvent - 64)) | (1 << (bitmarkParser.BitBotActionSend - 64)) | (1 << (bitmarkParser.BitBotActionAnnounce - 64)) | (1 << (bitmarkParser.BitBotActionSave - 64)) | (1 << (bitmarkParser.BitBotActionRemind - 64)) | (1 << (bitmarkParser.BitVendorPadletEmbed - 64)) | (1 << (bitmarkParser.BitScorm - 64)) | (1 << (bitmarkParser.BitImage - 64)) | (1 << (bitmarkParser.BitImageLink - 64)) | (1 << (bitmarkParser.BitImageZoom - 64)) | (1 << (bitmarkParser.BitAudio - 64)) | (1 << (bitmarkParser.BitAudioLink - 64)) | (1 << (bitmarkParser.BitAudioEmbed - 64)) | (1 << (bitmarkParser.BitVideo - 64)) | (1 << (bitmarkParser.BitVideoLink - 64)) | (1 << (bitmarkParser.BitVideoEmbed - 64)) | (1 << (bitmarkParser.BitStillImageFilm - 64)) | (1 << (bitmarkParser.BitStillImageFilmLink - 64)) | (1 << (bitmarkParser.BitStillImageFilmEmbed - 64)) | (1 << (bitmarkParser.BitWebsiteLink - 64)) | (1 << (bitmarkParser.BitDocument - 64)) | (1 << (bitmarkParser.BitDocumentLink - 64)) | (1 << (bitmarkParser.BitDocumentEmbed - 64)) | (1 << (bitmarkParser.BitDocumentDownload - 64)) | (1 << (bitmarkParser.BitAppLink - 64)) | (1 << (bitmarkParser.BitEditorial - 64)) | (1 << (bitmarkParser.BitBookFrontispiece - 64)) | (1 << (bitmarkParser.BitBookTitle - 64)) | (1 << (bitmarkParser.BitBookCopyright - 64)) | (1 << (bitmarkParser.BitBookDedication - 64)))) !== 0) || ((((_la - 96)) & ~0x1F) === 0 && ((1 << (_la - 96)) & ((1 << (bitmarkParser.BitBookForword - 96)) | (1 << (bitmarkParser.BitBookPreface - 96)) | (1 << (bitmarkParser.BitBookPrologue - 96)) | (1 << (bitmarkParser.BitBookEpilogue - 96)) | (1 << (bitmarkParser.BitBookIntroduction - 96)) | (1 << (bitmarkParser.BitBookIncitingIncident - 96)) | (1 << (bitmarkParser.BitBookConclusion - 96)) | (1 << (bitmarkParser.BitBookAfterword - 96)) | (1 << (bitmarkParser.BitBookPostscript - 96)) | (1 << (bitmarkParser.BitBookappendix - 96)) | (1 << (bitmarkParser.BitBookAddendum - 96)) | (1 << (bitmarkParser.BitBookAcknowledgments - 96)) | (1 << (bitmarkParser.BitBookListOfContributors - 96)) | (1 << (bitmarkParser.BitBookBibliography - 96)) | (1 << (bitmarkParser.BitBookReferenceList - 96)) | (1 << (bitmarkParser.BitBookEndnotes - 96)) | (1 << (bitmarkParser.BitBookNotes - 96)) | (1 << (bitmarkParser.BitBookCopyrightPermissions - 96)) | (1 << (bitmarkParser.BitBookTeaser - 96)) | (1 << (bitmarkParser.BitBookAutherBio - 96)) | (1 << (bitmarkParser.BitBookRequestForABookReview - 96)) | (1 << (bitmarkParser.BitBookComingSoon - 96)) | (1 << (bitmarkParser.BitBookReadMore - 96)) | (1 << (bitmarkParser.BitBookSummary - 96)) | (1 << (bitmarkParser.BitBookEpigraph - 96)) | (1 << (bitmarkParser.OPESC - 96)))) !== 0) || ((((_la - 130)) & ~0x1F) === 0 && ((1 << (_la - 130)) & ((1 << (bitmarkParser.OPDANGLE - 130)) | (1 << (bitmarkParser.OPQ - 130)) | (1 << (bitmarkParser.OPS - 130)) | (1 << (bitmarkParser.COLON - 130)) | (1 << (bitmarkParser.AMP - 130)) | (1 << (bitmarkParser.Greater - 130)) | (1 << (bitmarkParser.Less - 130)) | (1 << (bitmarkParser.RightAngle - 130)) | (1 << (bitmarkParser.RightArrow - 130)) | (1 << (bitmarkParser.DBLEQ - 130)) | (1 << (bitmarkParser.QUOTE_INDEX - 130)) | (1 << (bitmarkParser.NUMERIC - 130)) | (1 << (bitmarkParser.STRING - 130)))) !== 0) || ((((_la - 163)) & ~0x1F) === 0 && ((1 << (_la - 163)) & ((1 << (bitmarkParser.SENTENCE - 163)) | (1 << (bitmarkParser.AmpAudio - 163)) | (1 << (bitmarkParser.AmpImage - 163)))) !== 0) || ((((_la - 197)) & ~0x1F) === 0 && ((1 << (_la - 197)) & ((1 << (bitmarkParser.AmpVideo - 197)) | (1 << (bitmarkParser.AmpArticle - 197)) | (1 << (bitmarkParser.AmpDocument - 197)) | (1 << (bitmarkParser.AmpApp - 197)) | (1 << (bitmarkParser.AmpWebsite - 197)) | (1 << (bitmarkParser.AmpStillImageFilm - 197)) | (1 << (bitmarkParser.AmpAudioLink - 197)) | (1 << (bitmarkParser.AmpImageLink - 197)) | (1 << (bitmarkParser.AmpVideoLink - 197)) | (1 << (bitmarkParser.AmpArticleLink - 197)) | (1 << (bitmarkParser.AmpDocumentLink - 197)) | (1 << (bitmarkParser.AmpAppLink - 197)) | (1 << (bitmarkParser.AmpWebsiteLink - 197)) | (1 << (bitmarkParser.AmpStillImageFilmLink - 197)))) !== 0) || ((((_la - 232)) & ~0x1F) === 0 && ((1 << (_la - 232)) & ((1 << (bitmarkParser.BitmarkMinus - 232)) | (1 << (bitmarkParser.BitmarkPlus - 232)) | (1 << (bitmarkParser.URL - 232)))) !== 0));
			this.state = 416;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === bitmarkParser.NL) {
				{
				{
				this.state = 413;
				this.match(bitmarkParser.NL);
				}
				}
				this.state = 418;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 419;
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
			this.state = 423;
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
			case bitmarkParser.BitBookFrontispiece:
			case bitmarkParser.BitBookTitle:
			case bitmarkParser.BitBookCopyright:
			case bitmarkParser.BitBookDedication:
			case bitmarkParser.BitBookForword:
			case bitmarkParser.BitBookPreface:
			case bitmarkParser.BitBookPrologue:
			case bitmarkParser.BitBookEpilogue:
			case bitmarkParser.BitBookIntroduction:
			case bitmarkParser.BitBookIncitingIncident:
			case bitmarkParser.BitBookConclusion:
			case bitmarkParser.BitBookAfterword:
			case bitmarkParser.BitBookPostscript:
			case bitmarkParser.BitBookappendix:
			case bitmarkParser.BitBookAddendum:
			case bitmarkParser.BitBookAcknowledgments:
			case bitmarkParser.BitBookListOfContributors:
			case bitmarkParser.BitBookBibliography:
			case bitmarkParser.BitBookReferenceList:
			case bitmarkParser.BitBookEndnotes:
			case bitmarkParser.BitBookNotes:
			case bitmarkParser.BitBookCopyrightPermissions:
			case bitmarkParser.BitBookTeaser:
			case bitmarkParser.BitBookAutherBio:
			case bitmarkParser.BitBookRequestForABookReview:
			case bitmarkParser.BitBookComingSoon:
			case bitmarkParser.BitBookReadMore:
			case bitmarkParser.BitBookSummary:
			case bitmarkParser.BitBookEpigraph:
			case bitmarkParser.OPDANGLE:
			case bitmarkParser.OPQ:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 421;
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
				this.state = 422;
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
			this.state = 539;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case bitmarkParser.BitBook:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 425;
				this.book();
				}
				break;
			case bitmarkParser.BitChapter:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 426;
				this.chapter();
				}
				break;
			case bitmarkParser.BitSummary:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 427;
				this.summary();
				}
				break;
			case bitmarkParser.BitToc:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 428;
				this.toc();
				}
				break;
			case bitmarkParser.BitAlias:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 429;
				this.bit_alias();
				}
				break;
			case bitmarkParser.BitIntlink:
			case bitmarkParser.BitIntRef:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 430;
				this.internal_link();
				}
				break;
			case bitmarkParser.OPDANGLE:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 431;
				this.anchor();
				}
				break;
			case bitmarkParser.BitGroups:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 432;
				this.group_born();
				}
				break;
			case bitmarkParser.BitGroupt:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 433;
				this.group_died();
				}
				break;
			case bitmarkParser.BitEssay:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 434;
				this.essay();
				}
				break;
			case bitmarkParser.BitCorrection:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 435;
				this.correction();
				}
				break;
			case bitmarkParser.BitMark:
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 436;
				this.mark_();
				}
				break;
			case bitmarkParser.BitDocup:
				this.enterOuterAlt(_localctx, 13);
				{
				this.state = 437;
				this.document_upload();
				}
				break;
			case bitmarkParser.BitTakepic:
				this.enterOuterAlt(_localctx, 14);
				{
				this.state = 438;
				this.take_picture();
				}
				break;
			case bitmarkParser.BitTakeAudio:
				this.enterOuterAlt(_localctx, 15);
				{
				this.state = 439;
				this.take_audio();
				}
				break;
			case bitmarkParser.BitRecaud:
				this.enterOuterAlt(_localctx, 16);
				{
				this.state = 440;
				this.record_audio();
				}
				break;
			case bitmarkParser.BitPrepnote:
				this.enterOuterAlt(_localctx, 17);
				{
				this.state = 441;
				this.preparation_note();
				}
				break;
			case bitmarkParser.BitAssign:
				this.enterOuterAlt(_localctx, 18);
				{
				this.state = 442;
				this.assignment();
				}
				break;
			case bitmarkParser.BitArticle:
				this.enterOuterAlt(_localctx, 19);
				{
				this.state = 443;
				this.article();
				}
				break;
			case bitmarkParser.BitStatement:
				this.enterOuterAlt(_localctx, 20);
				{
				this.state = 444;
				this.statement();
				}
				break;
			case bitmarkParser.BitDetails:
				this.enterOuterAlt(_localctx, 21);
				{
				this.state = 445;
				this.details();
				}
				break;
			case bitmarkParser.BitSampleSolution:
				this.enterOuterAlt(_localctx, 22);
				{
				this.state = 446;
				this.sample_solution();
				}
				break;
			case bitmarkParser.BitButtonCopytext:
				this.enterOuterAlt(_localctx, 23);
				{
				this.state = 447;
				this.buttoncopytext();
				}
				break;
			case bitmarkParser.BitWbtContinue:
				this.enterOuterAlt(_localctx, 24);
				{
				this.state = 448;
				this.wbtcontinue();
				}
				break;
			case bitmarkParser.BitLearningPathDetails:
				this.enterOuterAlt(_localctx, 25);
				{
				this.state = 449;
				this.learningpathdetails();
				}
				break;
			case bitmarkParser.BitNote:
				this.enterOuterAlt(_localctx, 26);
				{
				this.state = 450;
				this.note();
				}
				break;
			case bitmarkParser.BitInfo:
				this.enterOuterAlt(_localctx, 27);
				{
				this.state = 451;
				this.info();
				}
				break;
			case bitmarkParser.BitWarning:
				this.enterOuterAlt(_localctx, 28);
				{
				this.state = 452;
				this.warning();
				}
				break;
			case bitmarkParser.BitRemark:
				this.enterOuterAlt(_localctx, 29);
				{
				this.state = 453;
				this.remark();
				}
				break;
			case bitmarkParser.BitHint:
				this.enterOuterAlt(_localctx, 30);
				{
				this.state = 454;
				this.hintbit();
				}
				break;
			case bitmarkParser.BitHelp:
				this.enterOuterAlt(_localctx, 31);
				{
				this.state = 455;
				this.help();
				}
				break;
			case bitmarkParser.BitDanger:
				this.enterOuterAlt(_localctx, 32);
				{
				this.state = 456;
				this.danger();
				}
				break;
			case bitmarkParser.BitBug:
				this.enterOuterAlt(_localctx, 33);
				{
				this.state = 457;
				this.bug();
				}
				break;
			case bitmarkParser.BitSidenote:
				this.enterOuterAlt(_localctx, 34);
				{
				this.state = 458;
				this.sidenote();
				}
				break;
			case bitmarkParser.BitStickynote:
				this.enterOuterAlt(_localctx, 35);
				{
				this.state = 459;
				this.stickynote();
				}
				break;
			case bitmarkParser.BitQuote:
				this.enterOuterAlt(_localctx, 36);
				{
				this.state = 460;
				this.quote();
				}
				break;
			case bitmarkParser.BitFootnote:
				this.enterOuterAlt(_localctx, 37);
				{
				this.state = 461;
				this.footnote();
				}
				break;
			case bitmarkParser.BitExample:
				this.enterOuterAlt(_localctx, 38);
				{
				this.state = 462;
				this.examplebit();
				}
				break;
			case bitmarkParser.BitPage:
				this.enterOuterAlt(_localctx, 39);
				{
				this.state = 463;
				this.page();
				}
				break;
			case bitmarkParser.BitMessage:
				this.enterOuterAlt(_localctx, 40);
				{
				this.state = 464;
				this.message();
				}
				break;
			case bitmarkParser.BitBotint:
				this.enterOuterAlt(_localctx, 41);
				{
				this.state = 465;
				this.bot_interview();
				}
				break;
			case bitmarkParser.BitSelfassess:
				this.enterOuterAlt(_localctx, 42);
				{
				this.state = 466;
				this.self_assessment();
				}
				break;
			case bitmarkParser.BitRating:
				this.enterOuterAlt(_localctx, 43);
				{
				this.state = 467;
				this.rating();
				}
				break;
			case bitmarkParser.BitSurvey:
				this.enterOuterAlt(_localctx, 44);
				{
				this.state = 468;
				this.survey();
				}
				break;
			case bitmarkParser.BitSurvey1:
				this.enterOuterAlt(_localctx, 45);
				{
				this.state = 469;
				this.survey_1();
				}
				break;
			case bitmarkParser.BitSurveyanon:
				this.enterOuterAlt(_localctx, 46);
				{
				this.state = 470;
				this.survey_anonymous();
				}
				break;
			case bitmarkParser.BitSurveyanon1:
				this.enterOuterAlt(_localctx, 47);
				{
				this.state = 471;
				this.survey_anonymous_1();
				}
				break;
			case bitmarkParser.OPQ:
				this.enterOuterAlt(_localctx, 48);
				{
				this.state = 472;
				this.hint();
				}
				break;
			case bitmarkParser.BitVendorPadletEmbed:
				this.enterOuterAlt(_localctx, 49);
				{
				this.state = 473;
				this.vendor_padlet_embed();
				}
				break;
			case bitmarkParser.BitScorm:
				this.enterOuterAlt(_localctx, 50);
				{
				this.state = 474;
				this.scorm();
				}
				break;
			case bitmarkParser.BitLearningPathLti:
				this.enterOuterAlt(_localctx, 51);
				{
				this.state = 475;
				this.learning_path_lti();
				}
				break;
			case bitmarkParser.BitLearningPathStep:
				this.enterOuterAlt(_localctx, 52);
				{
				this.state = 476;
				this.learning_path_step();
				}
				break;
			case bitmarkParser.BitLearningPathBook:
				this.enterOuterAlt(_localctx, 53);
				{
				this.state = 477;
				this.learning_path_book();
				}
				break;
			case bitmarkParser.BitLearningPathSign:
				this.enterOuterAlt(_localctx, 54);
				{
				this.state = 478;
				this.learning_path_sign();
				}
				break;
			case bitmarkParser.BitLearningPathVideoCall:
				this.enterOuterAlt(_localctx, 55);
				{
				this.state = 479;
				this.learning_path_video_call();
				}
				break;
			case bitmarkParser.BitLearningPathLearningGoal:
				this.enterOuterAlt(_localctx, 56);
				{
				this.state = 480;
				this.learning_path_learning_goal();
				}
				break;
			case bitmarkParser.BitLearningPathClosing:
				this.enterOuterAlt(_localctx, 57);
				{
				this.state = 481;
				this.learning_path_closing();
				}
				break;
			case bitmarkParser.BitLearningPathFeedback:
				this.enterOuterAlt(_localctx, 58);
				{
				this.state = 482;
				this.learning_path_feedback();
				}
				break;
			case bitmarkParser.BitLearningPathBotTraining:
				this.enterOuterAlt(_localctx, 59);
				{
				this.state = 483;
				this.learning_path_bot_training();
				}
				break;
			case bitmarkParser.BitLearningPathExternalLink:
				this.enterOuterAlt(_localctx, 60);
				{
				this.state = 484;
				this.learning_path_external_link();
				}
				break;
			case bitmarkParser.BitLearningPathClassroomTraining:
				this.enterOuterAlt(_localctx, 61);
				{
				this.state = 485;
				this.learning_path_classroom_training();
				}
				break;
			case bitmarkParser.BitLearningPathClassroomEvent:
				this.enterOuterAlt(_localctx, 62);
				{
				this.state = 486;
				this.learning_path_classroom_event();
				}
				break;
			case bitmarkParser.BitBotActionSend:
				this.enterOuterAlt(_localctx, 63);
				{
				this.state = 487;
				this.bot_action_send();
				}
				break;
			case bitmarkParser.BitBotActionAnnounce:
				this.enterOuterAlt(_localctx, 64);
				{
				this.state = 488;
				this.bot_action_announce();
				}
				break;
			case bitmarkParser.BitBotActionSave:
				this.enterOuterAlt(_localctx, 65);
				{
				this.state = 489;
				this.bot_action_save();
				}
				break;
			case bitmarkParser.BitBotActionRemind:
				this.enterOuterAlt(_localctx, 66);
				{
				this.state = 490;
				this.bot_action_remind();
				}
				break;
			case bitmarkParser.BitImage:
				this.enterOuterAlt(_localctx, 67);
				{
				this.state = 491;
				this.bit_image();
				}
				break;
			case bitmarkParser.BitImageLink:
				this.enterOuterAlt(_localctx, 68);
				{
				this.state = 492;
				this.bit_imageLink();
				}
				break;
			case bitmarkParser.BitImageZoom:
				this.enterOuterAlt(_localctx, 69);
				{
				this.state = 493;
				this.bit_imageZoom();
				}
				break;
			case bitmarkParser.BitAudio:
				this.enterOuterAlt(_localctx, 70);
				{
				this.state = 494;
				this.bit_audio();
				}
				break;
			case bitmarkParser.BitAudioLink:
				this.enterOuterAlt(_localctx, 71);
				{
				this.state = 495;
				this.bit_audioLink();
				}
				break;
			case bitmarkParser.BitAudioEmbed:
				this.enterOuterAlt(_localctx, 72);
				{
				this.state = 496;
				this.bit_audioEmbed();
				}
				break;
			case bitmarkParser.BitVideo:
				this.enterOuterAlt(_localctx, 73);
				{
				this.state = 497;
				this.bit_video();
				}
				break;
			case bitmarkParser.BitVideoLink:
				this.enterOuterAlt(_localctx, 74);
				{
				this.state = 498;
				this.bit_videoLink();
				}
				break;
			case bitmarkParser.BitVideoEmbed:
				this.enterOuterAlt(_localctx, 75);
				{
				this.state = 499;
				this.bit_videoEmbed();
				}
				break;
			case bitmarkParser.BitStillImageFilm:
				this.enterOuterAlt(_localctx, 76);
				{
				this.state = 500;
				this.bit_stillImageFilm();
				}
				break;
			case bitmarkParser.BitStillImageFilmLink:
				this.enterOuterAlt(_localctx, 77);
				{
				this.state = 501;
				this.bit_stillImageFilmLink();
				}
				break;
			case bitmarkParser.BitStillImageFilmEmbed:
				this.enterOuterAlt(_localctx, 78);
				{
				this.state = 502;
				this.bit_stillImageFilmEmbed();
				}
				break;
			case bitmarkParser.BitDocument:
				this.enterOuterAlt(_localctx, 79);
				{
				this.state = 503;
				this.bit_document();
				}
				break;
			case bitmarkParser.BitDocumentLink:
				this.enterOuterAlt(_localctx, 80);
				{
				this.state = 504;
				this.bit_documentLink();
				}
				break;
			case bitmarkParser.BitDocumentEmbed:
				this.enterOuterAlt(_localctx, 81);
				{
				this.state = 505;
				this.bit_documentEmbed();
				}
				break;
			case bitmarkParser.BitDocumentDownload:
				this.enterOuterAlt(_localctx, 82);
				{
				this.state = 506;
				this.bit_documentDownload();
				}
				break;
			case bitmarkParser.BitWebsiteLink:
				this.enterOuterAlt(_localctx, 83);
				{
				this.state = 507;
				this.bit_websiteLink();
				}
				break;
			case bitmarkParser.BitAppLink:
				this.enterOuterAlt(_localctx, 84);
				{
				this.state = 508;
				this.bit_appLink();
				}
				break;
			case bitmarkParser.BitEditorial:
				this.enterOuterAlt(_localctx, 85);
				{
				this.state = 509;
				this.bit_editorial();
				}
				break;
			case bitmarkParser.BitBookFrontispiece:
				this.enterOuterAlt(_localctx, 86);
				{
				this.state = 510;
				this.book_frontispiece();
				}
				break;
			case bitmarkParser.BitBookTitle:
				this.enterOuterAlt(_localctx, 87);
				{
				this.state = 511;
				this.book_title();
				}
				break;
			case bitmarkParser.BitBookCopyright:
				this.enterOuterAlt(_localctx, 88);
				{
				this.state = 512;
				this.book_copyright();
				}
				break;
			case bitmarkParser.BitBookDedication:
				this.enterOuterAlt(_localctx, 89);
				{
				this.state = 513;
				this.book_dedication();
				}
				break;
			case bitmarkParser.BitBookForword:
				this.enterOuterAlt(_localctx, 90);
				{
				this.state = 514;
				this.book_forword();
				}
				break;
			case bitmarkParser.BitBookPreface:
				this.enterOuterAlt(_localctx, 91);
				{
				this.state = 515;
				this.book_preface();
				}
				break;
			case bitmarkParser.BitBookPrologue:
				this.enterOuterAlt(_localctx, 92);
				{
				this.state = 516;
				this.book_prologue();
				}
				break;
			case bitmarkParser.BitBookEpilogue:
				this.enterOuterAlt(_localctx, 93);
				{
				this.state = 517;
				this.book_epilogue();
				}
				break;
			case bitmarkParser.BitBookIntroduction:
				this.enterOuterAlt(_localctx, 94);
				{
				this.state = 518;
				this.book_introduction();
				}
				break;
			case bitmarkParser.BitBookIncitingIncident:
				this.enterOuterAlt(_localctx, 95);
				{
				this.state = 519;
				this.book_inciting_incident();
				}
				break;
			case bitmarkParser.BitBookConclusion:
				this.enterOuterAlt(_localctx, 96);
				{
				this.state = 520;
				this.book_conclusion();
				}
				break;
			case bitmarkParser.BitBookAfterword:
				this.enterOuterAlt(_localctx, 97);
				{
				this.state = 521;
				this.book_afterword();
				}
				break;
			case bitmarkParser.BitBookPostscript:
				this.enterOuterAlt(_localctx, 98);
				{
				this.state = 522;
				this.book_postscript();
				}
				break;
			case bitmarkParser.BitBookappendix:
				this.enterOuterAlt(_localctx, 99);
				{
				this.state = 523;
				this.book_appendix();
				}
				break;
			case bitmarkParser.BitBookAddendum:
				this.enterOuterAlt(_localctx, 100);
				{
				this.state = 524;
				this.book_addendum();
				}
				break;
			case bitmarkParser.BitBookAcknowledgments:
				this.enterOuterAlt(_localctx, 101);
				{
				this.state = 525;
				this.book_acknowledgments();
				}
				break;
			case bitmarkParser.BitBookListOfContributors:
				this.enterOuterAlt(_localctx, 102);
				{
				this.state = 526;
				this.book_list_of_contributors();
				}
				break;
			case bitmarkParser.BitBookBibliography:
				this.enterOuterAlt(_localctx, 103);
				{
				this.state = 527;
				this.book_bibliography();
				}
				break;
			case bitmarkParser.BitBookReferenceList:
				this.enterOuterAlt(_localctx, 104);
				{
				this.state = 528;
				this.book_reference_list();
				}
				break;
			case bitmarkParser.BitBookEndnotes:
				this.enterOuterAlt(_localctx, 105);
				{
				this.state = 529;
				this.book_endnotes();
				}
				break;
			case bitmarkParser.BitBookNotes:
				this.enterOuterAlt(_localctx, 106);
				{
				this.state = 530;
				this.book_notes();
				}
				break;
			case bitmarkParser.BitBookCopyrightPermissions:
				this.enterOuterAlt(_localctx, 107);
				{
				this.state = 531;
				this.book_copyright_permissions();
				}
				break;
			case bitmarkParser.BitBookTeaser:
				this.enterOuterAlt(_localctx, 108);
				{
				this.state = 532;
				this.book_teaser();
				}
				break;
			case bitmarkParser.BitBookAutherBio:
				this.enterOuterAlt(_localctx, 109);
				{
				this.state = 533;
				this.book_auther_bio();
				}
				break;
			case bitmarkParser.BitBookRequestForABookReview:
				this.enterOuterAlt(_localctx, 110);
				{
				this.state = 534;
				this.book_request_for_a_book_review();
				}
				break;
			case bitmarkParser.BitBookComingSoon:
				this.enterOuterAlt(_localctx, 111);
				{
				this.state = 535;
				this.book_coming_soon();
				}
				break;
			case bitmarkParser.BitBookReadMore:
				this.enterOuterAlt(_localctx, 112);
				{
				this.state = 536;
				this.book_read_more();
				}
				break;
			case bitmarkParser.BitBookSummary:
				this.enterOuterAlt(_localctx, 113);
				{
				this.state = 537;
				this.book_summary();
				}
				break;
			case bitmarkParser.BitBookEpigraph:
				this.enterOuterAlt(_localctx, 114);
				{
				this.state = 538;
				this.book_epigraph();
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
			this.state = 541;
			this.match(bitmarkParser.BitBook);
			this.state = 543;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 6, this._ctx) ) {
			case 1:
				{
				this.state = 542;
				this.format();
				}
				break;
			}
			this.state = 545;
			this.match(bitmarkParser.CL);
			this.state = 553;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 549;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === bitmarkParser.NL) {
						{
						{
						this.state = 546;
						this.match(bitmarkParser.NL);
						}
						}
						this.state = 551;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					this.state = 552;
					this.bitElem();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 555;
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
			this.state = 557;
			this.match(bitmarkParser.BitChapter);
			this.state = 559;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 9, this._ctx) ) {
			case 1:
				{
				this.state = 558;
				this.format();
				}
				break;
			}
			this.state = 561;
			this.match(bitmarkParser.CL);
			this.state = 565;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === bitmarkParser.NL) {
				{
				{
				this.state = 562;
				this.match(bitmarkParser.NL);
				}
				}
				this.state = 567;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 571;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 11, this._ctx) ) {
			case 1:
				{
				this.state = 568;
				this.anchor();
				this.state = 569;
				this.match(bitmarkParser.NL);
				}
				break;
			}
			this.state = 573;
			this.resource();
			this.state = 583;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 13, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
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
					this.state = 580;
					this.resource();
					}
					}
				}
				this.state = 585;
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
			this.state = 586;
			this.match(bitmarkParser.BitToc);
			this.state = 588;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === bitmarkParser.S || ((((_la - 127)) & ~0x1F) === 0 && ((1 << (_la - 127)) & ((1 << (bitmarkParser.OPESC - 127)) | (1 << (bitmarkParser.OPS - 127)) | (1 << (bitmarkParser.COLON - 127)) | (1 << (bitmarkParser.AMP - 127)) | (1 << (bitmarkParser.Greater - 127)) | (1 << (bitmarkParser.Less - 127)) | (1 << (bitmarkParser.RightAngle - 127)) | (1 << (bitmarkParser.RightArrow - 127)) | (1 << (bitmarkParser.DBLEQ - 127)) | (1 << (bitmarkParser.QUOTE_INDEX - 127)))) !== 0) || ((((_la - 160)) & ~0x1F) === 0 && ((1 << (_la - 160)) & ((1 << (bitmarkParser.NUMERIC - 160)) | (1 << (bitmarkParser.STRING - 160)) | (1 << (bitmarkParser.SENTENCE - 160)))) !== 0) || ((((_la - 193)) & ~0x1F) === 0 && ((1 << (_la - 193)) & ((1 << (bitmarkParser.AmpAudio - 193)) | (1 << (bitmarkParser.AmpImage - 193)) | (1 << (bitmarkParser.AmpVideo - 193)) | (1 << (bitmarkParser.AmpArticle - 193)) | (1 << (bitmarkParser.AmpDocument - 193)) | (1 << (bitmarkParser.AmpApp - 193)) | (1 << (bitmarkParser.AmpWebsite - 193)) | (1 << (bitmarkParser.AmpStillImageFilm - 193)) | (1 << (bitmarkParser.AmpAudioLink - 193)) | (1 << (bitmarkParser.AmpImageLink - 193)) | (1 << (bitmarkParser.AmpVideoLink - 193)) | (1 << (bitmarkParser.AmpArticleLink - 193)) | (1 << (bitmarkParser.AmpDocumentLink - 193)) | (1 << (bitmarkParser.AmpAppLink - 193)) | (1 << (bitmarkParser.AmpWebsiteLink - 193)) | (1 << (bitmarkParser.AmpStillImageFilmLink - 193)))) !== 0) || ((((_la - 232)) & ~0x1F) === 0 && ((1 << (_la - 232)) & ((1 << (bitmarkParser.BitmarkMinus - 232)) | (1 << (bitmarkParser.BitmarkPlus - 232)) | (1 << (bitmarkParser.URL - 232)))) !== 0)) {
				{
				this.state = 587;
				this.s_and_w();
				}
			}

			this.state = 590;
			this.match(bitmarkParser.CL);
			this.state = 591;
			this.match(bitmarkParser.NL);
			this.state = 595;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === bitmarkParser.OPA || _la === bitmarkParser.OpAtCopyright) {
				{
				this.state = 592;
				this.atdef();
				this.state = 593;
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
			this.state = 597;
			this.match(bitmarkParser.BitSummary);
			this.state = 598;
			this.match(bitmarkParser.CL);
			this.state = 602;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 16, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 599;
					this.match(bitmarkParser.NL);
					}
					}
				}
				this.state = 604;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 16, this._ctx);
			}
			this.state = 605;
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
			this.state = 607;
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
			this.state = 609;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === bitmarkParser.BitmarkMinus || _la === bitmarkParser.BitmarkPlus) {
				{
				this.state = 608;
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

			this.state = 611;
			this.match(bitmarkParser.CL);
			this.state = 621;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 19, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 615;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === bitmarkParser.NL) {
						{
						{
						this.state = 612;
						this.match(bitmarkParser.NL);
						}
						}
						this.state = 617;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					this.state = 618;
					this.bitElem();
					}
					}
				}
				this.state = 623;
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
			this.state = 624;
			this.match(bitmarkParser.BitAlias);
			this.state = 625;
			this.match(bitmarkParser.CL);
			this.state = 626;
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
			this.state = 642;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 22, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 629;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === bitmarkParser.NL) {
						{
						this.state = 628;
						this.match(bitmarkParser.NL);
						}
					}

					this.state = 638;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case bitmarkParser.OPHASH:
						{
						this.state = 631;
						this.title();
						}
						break;
					case bitmarkParser.OPA:
					case bitmarkParser.OpAtCopyright:
						{
						this.state = 632;
						this.atdef();
						}
						break;
					case bitmarkParser.OPC:
						{
						this.state = 633;
						this.item();
						}
						break;
					case bitmarkParser.OPB:
						{
						this.state = 634;
						this.instruction();
						}
						break;
					case bitmarkParser.OPRANGLES:
					case bitmarkParser.OPRANGLEL:
						{
						this.state = 635;
						this.angleref();
						}
						break;
					case bitmarkParser.OPDANGLE:
						{
						this.state = 636;
						this.anchor();
						}
						break;
					case bitmarkParser.AtProgress:
						{
						this.state = 637;
						this.progress();
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					}
					}
				}
				this.state = 644;
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
			this.state = 645;
			this.match(bitmarkParser.BitGroups);
			this.state = 646;
			this.match(bitmarkParser.CL);
			this.state = 656;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 647;
					this.match(bitmarkParser.NL);
					this.state = 648;
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
					this.state = 651;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					do {
						{
						this.state = 651;
						this._errHandler.sync(this);
						switch ( this.interpreter.adaptivePredict(this._input, 23, this._ctx) ) {
						case 1:
							{
							this.state = 649;
							this.s_and_w();
							}
							break;

						case 2:
							{
							this.state = 650;
							this.match(bitmarkParser.COLON);
							}
							break;
						}
						}
						this.state = 653;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					} while (_la === bitmarkParser.S || ((((_la - 127)) & ~0x1F) === 0 && ((1 << (_la - 127)) & ((1 << (bitmarkParser.OPESC - 127)) | (1 << (bitmarkParser.OPS - 127)) | (1 << (bitmarkParser.COLON - 127)) | (1 << (bitmarkParser.AMP - 127)) | (1 << (bitmarkParser.Greater - 127)) | (1 << (bitmarkParser.Less - 127)) | (1 << (bitmarkParser.RightAngle - 127)) | (1 << (bitmarkParser.RightArrow - 127)) | (1 << (bitmarkParser.DBLEQ - 127)) | (1 << (bitmarkParser.QUOTE_INDEX - 127)))) !== 0) || ((((_la - 160)) & ~0x1F) === 0 && ((1 << (_la - 160)) & ((1 << (bitmarkParser.NUMERIC - 160)) | (1 << (bitmarkParser.STRING - 160)) | (1 << (bitmarkParser.SENTENCE - 160)))) !== 0) || ((((_la - 193)) & ~0x1F) === 0 && ((1 << (_la - 193)) & ((1 << (bitmarkParser.AmpAudio - 193)) | (1 << (bitmarkParser.AmpImage - 193)) | (1 << (bitmarkParser.AmpVideo - 193)) | (1 << (bitmarkParser.AmpArticle - 193)) | (1 << (bitmarkParser.AmpDocument - 193)) | (1 << (bitmarkParser.AmpApp - 193)) | (1 << (bitmarkParser.AmpWebsite - 193)) | (1 << (bitmarkParser.AmpStillImageFilm - 193)) | (1 << (bitmarkParser.AmpAudioLink - 193)) | (1 << (bitmarkParser.AmpImageLink - 193)) | (1 << (bitmarkParser.AmpVideoLink - 193)) | (1 << (bitmarkParser.AmpArticleLink - 193)) | (1 << (bitmarkParser.AmpDocumentLink - 193)) | (1 << (bitmarkParser.AmpAppLink - 193)) | (1 << (bitmarkParser.AmpWebsiteLink - 193)) | (1 << (bitmarkParser.AmpStillImageFilmLink - 193)))) !== 0) || ((((_la - 232)) & ~0x1F) === 0 && ((1 << (_la - 232)) & ((1 << (bitmarkParser.BitmarkMinus - 232)) | (1 << (bitmarkParser.BitmarkPlus - 232)) | (1 << (bitmarkParser.URL - 232)))) !== 0));
					this.state = 655;
					this.match(bitmarkParser.CL);
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 658;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 25, this._ctx);
			} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
			this.state = 660;
			this.match(bitmarkParser.NL);
			this.state = 664;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 26, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 661;
					this.lines();
					}
					}
				}
				this.state = 666;
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
			this.state = 667;
			this.match(bitmarkParser.BitGroupt);
			this.state = 668;
			this.match(bitmarkParser.CL);
			this.state = 678;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 669;
					this.match(bitmarkParser.NL);
					this.state = 670;
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
					this.state = 673;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					do {
						{
						this.state = 673;
						this._errHandler.sync(this);
						switch ( this.interpreter.adaptivePredict(this._input, 27, this._ctx) ) {
						case 1:
							{
							this.state = 671;
							this.s_and_w();
							}
							break;

						case 2:
							{
							this.state = 672;
							this.match(bitmarkParser.COLON);
							}
							break;
						}
						}
						this.state = 675;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					} while (_la === bitmarkParser.S || ((((_la - 127)) & ~0x1F) === 0 && ((1 << (_la - 127)) & ((1 << (bitmarkParser.OPESC - 127)) | (1 << (bitmarkParser.OPS - 127)) | (1 << (bitmarkParser.COLON - 127)) | (1 << (bitmarkParser.AMP - 127)) | (1 << (bitmarkParser.Greater - 127)) | (1 << (bitmarkParser.Less - 127)) | (1 << (bitmarkParser.RightAngle - 127)) | (1 << (bitmarkParser.RightArrow - 127)) | (1 << (bitmarkParser.DBLEQ - 127)) | (1 << (bitmarkParser.QUOTE_INDEX - 127)))) !== 0) || ((((_la - 160)) & ~0x1F) === 0 && ((1 << (_la - 160)) & ((1 << (bitmarkParser.NUMERIC - 160)) | (1 << (bitmarkParser.STRING - 160)) | (1 << (bitmarkParser.SENTENCE - 160)))) !== 0) || ((((_la - 193)) & ~0x1F) === 0 && ((1 << (_la - 193)) & ((1 << (bitmarkParser.AmpAudio - 193)) | (1 << (bitmarkParser.AmpImage - 193)) | (1 << (bitmarkParser.AmpVideo - 193)) | (1 << (bitmarkParser.AmpArticle - 193)) | (1 << (bitmarkParser.AmpDocument - 193)) | (1 << (bitmarkParser.AmpApp - 193)) | (1 << (bitmarkParser.AmpWebsite - 193)) | (1 << (bitmarkParser.AmpStillImageFilm - 193)) | (1 << (bitmarkParser.AmpAudioLink - 193)) | (1 << (bitmarkParser.AmpImageLink - 193)) | (1 << (bitmarkParser.AmpVideoLink - 193)) | (1 << (bitmarkParser.AmpArticleLink - 193)) | (1 << (bitmarkParser.AmpDocumentLink - 193)) | (1 << (bitmarkParser.AmpAppLink - 193)) | (1 << (bitmarkParser.AmpWebsiteLink - 193)) | (1 << (bitmarkParser.AmpStillImageFilmLink - 193)))) !== 0) || ((((_la - 232)) & ~0x1F) === 0 && ((1 << (_la - 232)) & ((1 << (bitmarkParser.BitmarkMinus - 232)) | (1 << (bitmarkParser.BitmarkPlus - 232)) | (1 << (bitmarkParser.URL - 232)))) !== 0));
					this.state = 677;
					this.match(bitmarkParser.CL);
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 680;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 29, this._ctx);
			} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
			this.state = 682;
			this.match(bitmarkParser.NL);
			this.state = 686;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 30, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 683;
					this.lines();
					}
					}
				}
				this.state = 688;
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
			this.state = 689;
			this.match(bitmarkParser.BitLearningPathLti);
			this.state = 690;
			this.format();
			this.state = 691;
			this.match(bitmarkParser.CL);
			this.state = 695;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === bitmarkParser.NL) {
				{
				{
				this.state = 692;
				this.match(bitmarkParser.NL);
				}
				}
				this.state = 697;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 705;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 698;
					this.bitElem();
					this.state = 702;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 32, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 699;
							this.match(bitmarkParser.NL);
							}
							}
						}
						this.state = 704;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 32, this._ctx);
					}
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 707;
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
			this.state = 709;
			this.match(bitmarkParser.BitLearningPathStep);
			this.state = 710;
			this.format();
			this.state = 711;
			this.match(bitmarkParser.CL);
			this.state = 715;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === bitmarkParser.NL) {
				{
				{
				this.state = 712;
				this.match(bitmarkParser.NL);
				}
				}
				this.state = 717;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 725;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 718;
					this.bitElem();
					this.state = 722;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 35, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 719;
							this.match(bitmarkParser.NL);
							}
							}
						}
						this.state = 724;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 35, this._ctx);
					}
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 727;
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
			this.state = 729;
			this.match(bitmarkParser.BitLearningPathBook);
			this.state = 730;
			this.format();
			this.state = 731;
			this.match(bitmarkParser.CL);
			this.state = 735;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === bitmarkParser.NL) {
				{
				{
				this.state = 732;
				this.match(bitmarkParser.NL);
				}
				}
				this.state = 737;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 745;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 738;
					this.bitElem();
					this.state = 742;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 38, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 739;
							this.match(bitmarkParser.NL);
							}
							}
						}
						this.state = 744;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 38, this._ctx);
					}
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 747;
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
			this.state = 749;
			this.match(bitmarkParser.BitLearningPathSign);
			this.state = 750;
			this.format();
			this.state = 751;
			this.match(bitmarkParser.CL);
			this.state = 755;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === bitmarkParser.NL) {
				{
				{
				this.state = 752;
				this.match(bitmarkParser.NL);
				}
				}
				this.state = 757;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 765;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 758;
					this.bitElem();
					this.state = 762;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 41, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 759;
							this.match(bitmarkParser.NL);
							}
							}
						}
						this.state = 764;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 41, this._ctx);
					}
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 767;
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
			this.state = 769;
			this.match(bitmarkParser.BitLearningPathVideoCall);
			this.state = 770;
			this.format();
			this.state = 771;
			this.match(bitmarkParser.CL);
			this.state = 775;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === bitmarkParser.NL) {
				{
				{
				this.state = 772;
				this.match(bitmarkParser.NL);
				}
				}
				this.state = 777;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 785;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 778;
					this.bitElem();
					this.state = 782;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 44, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 779;
							this.match(bitmarkParser.NL);
							}
							}
						}
						this.state = 784;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 44, this._ctx);
					}
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 787;
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
			this.state = 789;
			this.match(bitmarkParser.BitLearningPathLearningGoal);
			this.state = 790;
			this.format();
			this.state = 791;
			this.match(bitmarkParser.CL);
			this.state = 795;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === bitmarkParser.NL) {
				{
				{
				this.state = 792;
				this.match(bitmarkParser.NL);
				}
				}
				this.state = 797;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 805;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 798;
					this.bitElem();
					this.state = 802;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 47, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 799;
							this.match(bitmarkParser.NL);
							}
							}
						}
						this.state = 804;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 47, this._ctx);
					}
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 807;
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
			this.state = 809;
			this.match(bitmarkParser.BitLearningPathClosing);
			this.state = 810;
			this.format();
			this.state = 811;
			this.match(bitmarkParser.CL);
			this.state = 815;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === bitmarkParser.NL) {
				{
				{
				this.state = 812;
				this.match(bitmarkParser.NL);
				}
				}
				this.state = 817;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 825;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 818;
					this.bitElem();
					this.state = 822;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 50, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 819;
							this.match(bitmarkParser.NL);
							}
							}
						}
						this.state = 824;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 50, this._ctx);
					}
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 827;
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
			this.state = 829;
			this.match(bitmarkParser.BitLearningPathFeedback);
			this.state = 830;
			this.format();
			this.state = 831;
			this.match(bitmarkParser.CL);
			this.state = 835;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === bitmarkParser.NL) {
				{
				{
				this.state = 832;
				this.match(bitmarkParser.NL);
				}
				}
				this.state = 837;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 845;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 838;
					this.bitElem();
					this.state = 842;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 53, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 839;
							this.match(bitmarkParser.NL);
							}
							}
						}
						this.state = 844;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 53, this._ctx);
					}
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 847;
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
			this.state = 849;
			this.match(bitmarkParser.BitLearningPathBotTraining);
			this.state = 850;
			this.format();
			this.state = 851;
			this.match(bitmarkParser.CL);
			this.state = 855;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === bitmarkParser.NL) {
				{
				{
				this.state = 852;
				this.match(bitmarkParser.NL);
				}
				}
				this.state = 857;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 865;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 858;
					this.bitElem();
					this.state = 862;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 56, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 859;
							this.match(bitmarkParser.NL);
							}
							}
						}
						this.state = 864;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 56, this._ctx);
					}
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 867;
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
			this.state = 869;
			this.match(bitmarkParser.BitLearningPathExternalLink);
			this.state = 870;
			this.format();
			this.state = 871;
			this.match(bitmarkParser.CL);
			this.state = 875;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === bitmarkParser.NL) {
				{
				{
				this.state = 872;
				this.match(bitmarkParser.NL);
				}
				}
				this.state = 877;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 885;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 878;
					this.bitElem();
					this.state = 882;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 59, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 879;
							this.match(bitmarkParser.NL);
							}
							}
						}
						this.state = 884;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 59, this._ctx);
					}
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 887;
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
			this.state = 889;
			this.match(bitmarkParser.BitLearningPathClassroomTraining);
			this.state = 890;
			this.format();
			this.state = 891;
			this.match(bitmarkParser.CL);
			this.state = 895;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === bitmarkParser.NL) {
				{
				{
				this.state = 892;
				this.match(bitmarkParser.NL);
				}
				}
				this.state = 897;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 905;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 898;
					this.bitElem();
					this.state = 902;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 62, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 899;
							this.match(bitmarkParser.NL);
							}
							}
						}
						this.state = 904;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 62, this._ctx);
					}
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 907;
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
			this.state = 909;
			this.match(bitmarkParser.BitLearningPathClassroomEvent);
			this.state = 910;
			this.format();
			this.state = 911;
			this.match(bitmarkParser.CL);
			this.state = 915;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === bitmarkParser.NL) {
				{
				{
				this.state = 912;
				this.match(bitmarkParser.NL);
				}
				}
				this.state = 917;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 925;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 918;
					this.bitElem();
					this.state = 922;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 65, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 919;
							this.match(bitmarkParser.NL);
							}
							}
						}
						this.state = 924;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 65, this._ctx);
					}
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 927;
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
			this.state = 929;
			this.match(bitmarkParser.BitBotActionSend);
			this.state = 930;
			this.format();
			this.state = 931;
			this.match(bitmarkParser.CL);
			this.state = 935;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === bitmarkParser.NL) {
				{
				{
				this.state = 932;
				this.match(bitmarkParser.NL);
				}
				}
				this.state = 937;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 945;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 938;
					this.bitElem();
					this.state = 942;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 68, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 939;
							this.match(bitmarkParser.NL);
							}
							}
						}
						this.state = 944;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 68, this._ctx);
					}
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 947;
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
			this.state = 949;
			this.match(bitmarkParser.BitBotActionAnnounce);
			this.state = 950;
			this.format();
			this.state = 951;
			this.match(bitmarkParser.CL);
			this.state = 955;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === bitmarkParser.NL) {
				{
				{
				this.state = 952;
				this.match(bitmarkParser.NL);
				}
				}
				this.state = 957;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 965;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 958;
					this.bitElem();
					this.state = 962;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 71, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 959;
							this.match(bitmarkParser.NL);
							}
							}
						}
						this.state = 964;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 71, this._ctx);
					}
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 967;
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
			this.state = 969;
			this.match(bitmarkParser.BitBotActionSave);
			this.state = 970;
			this.format();
			this.state = 971;
			this.match(bitmarkParser.CL);
			this.state = 975;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === bitmarkParser.NL) {
				{
				{
				this.state = 972;
				this.match(bitmarkParser.NL);
				}
				}
				this.state = 977;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 985;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 978;
					this.bitElem();
					this.state = 982;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 74, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 979;
							this.match(bitmarkParser.NL);
							}
							}
						}
						this.state = 984;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 74, this._ctx);
					}
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 987;
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
			this.state = 989;
			this.match(bitmarkParser.BitBotActionRemind);
			this.state = 990;
			this.format();
			this.state = 991;
			this.match(bitmarkParser.CL);
			this.state = 995;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === bitmarkParser.NL) {
				{
				{
				this.state = 992;
				this.match(bitmarkParser.NL);
				}
				}
				this.state = 997;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1005;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 998;
					this.bitElem();
					this.state = 1002;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 77, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 999;
							this.match(bitmarkParser.NL);
							}
							}
						}
						this.state = 1004;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 77, this._ctx);
					}
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 1007;
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
			this.state = 1040;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 79, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1009;
				this.match(bitmarkParser.LIST_LINE);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1010;
				this.dclines();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1011;
				this.gap();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1012;
				this.reference();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 1013;
				this.dateprop();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 1014;
				this.progress();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 1015;
				this.atdef();
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 1016;
				this.dollarans();
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 1017;
				this.partans();
				}
				break;

			case 10:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 1018;
				this.item();
				}
				break;

			case 11:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 1019;
				this.title();
				}
				break;

			case 12:
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 1020;
				this.instruction();
				}
				break;

			case 13:
				this.enterOuterAlt(_localctx, 13);
				{
				this.state = 1021;
				this.hint();
				}
				break;

			case 14:
				this.enterOuterAlt(_localctx, 14);
				{
				this.state = 1022;
				this.s_and_w();
				}
				break;

			case 15:
				this.enterOuterAlt(_localctx, 15);
				{
				this.state = 1023;
				this.example();
				}
				break;

			case 16:
				this.enterOuterAlt(_localctx, 16);
				{
				this.state = 1024;
				this.bool_label();
				}
				break;

			case 17:
				this.enterOuterAlt(_localctx, 17);
				{
				this.state = 1025;
				this.progress_points();
				}
				break;

			case 18:
				this.enterOuterAlt(_localctx, 18);
				{
				this.state = 1026;
				this.istracked();
				}
				break;

			case 19:
				this.enterOuterAlt(_localctx, 19);
				{
				this.state = 1027;
				this.isinfoonly();
				}
				break;

			case 20:
				this.enterOuterAlt(_localctx, 20);
				{
				this.state = 1028;
				this.imagebit();
				}
				break;

			case 21:
				this.enterOuterAlt(_localctx, 21);
				{
				this.state = 1029;
				this.audiobit();
				}
				break;

			case 22:
				this.enterOuterAlt(_localctx, 22);
				{
				this.state = 1030;
				this.videobit();
				}
				break;

			case 23:
				this.enterOuterAlt(_localctx, 23);
				{
				this.state = 1031;
				this.articlebit();
				}
				break;

			case 24:
				this.enterOuterAlt(_localctx, 24);
				{
				this.state = 1032;
				this.documentbit();
				}
				break;

			case 25:
				this.enterOuterAlt(_localctx, 25);
				{
				this.state = 1033;
				this.appbit();
				}
				break;

			case 26:
				this.enterOuterAlt(_localctx, 26);
				{
				this.state = 1034;
				this.websitebit();
				}
				break;

			case 27:
				this.enterOuterAlt(_localctx, 27);
				{
				this.state = 1035;
				this.stillimagefilmbit();
				}
				break;

			case 28:
				this.enterOuterAlt(_localctx, 28);
				{
				this.state = 1036;
				this.angleref();
				}
				break;

			case 29:
				this.enterOuterAlt(_localctx, 29);
				{
				this.state = 1037;
				this.anchor();
				}
				break;

			case 30:
				this.enterOuterAlt(_localctx, 30);
				{
				this.state = 1038;
				this.bracketed_text();
				}
				break;

			case 31:
				this.enterOuterAlt(_localctx, 31);
				{
				this.state = 1039;
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
			this.state = 1042;
			this.single_gap();
			this.state = 1050;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 81, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					this.state = 1048;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case bitmarkParser.OPU:
						{
						this.state = 1043;
						this.single_gap();
						}
						break;
					case bitmarkParser.OPB:
						{
						this.state = 1044;
						this.instruction();
						}
						break;
					case bitmarkParser.OPQ:
						{
						this.state = 1045;
						this.hint();
						}
						break;
					case bitmarkParser.OPC:
						{
						this.state = 1046;
						this.item();
						}
						break;
					case bitmarkParser.AtExampleWithStr:
					case bitmarkParser.AtExamplecol:
					case bitmarkParser.AtExamplecl:
						{
						this.state = 1047;
						this.example();
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					}
				}
				this.state = 1052;
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
			this.state = 1053;
			this.match(bitmarkParser.OPU);
			this.state = 1057;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 82, this._ctx) ) {
			case 1:
				{
				this.state = 1054;
				this.match(bitmarkParser.NUMERIC);
				}
				break;

			case 2:
				{
				this.state = 1055;
				this.match(bitmarkParser.STRING);
				}
				break;

			case 3:
				// tslint:disable-next-line:no-empty
				{
				}
				break;
			}
			this.state = 1062;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === bitmarkParser.S || ((((_la - 127)) & ~0x1F) === 0 && ((1 << (_la - 127)) & ((1 << (bitmarkParser.OPESC - 127)) | (1 << (bitmarkParser.OPS - 127)) | (1 << (bitmarkParser.COLON - 127)) | (1 << (bitmarkParser.AMP - 127)) | (1 << (bitmarkParser.Greater - 127)) | (1 << (bitmarkParser.Less - 127)) | (1 << (bitmarkParser.RightAngle - 127)) | (1 << (bitmarkParser.RightArrow - 127)) | (1 << (bitmarkParser.DBLEQ - 127)) | (1 << (bitmarkParser.QUOTE_INDEX - 127)))) !== 0) || ((((_la - 160)) & ~0x1F) === 0 && ((1 << (_la - 160)) & ((1 << (bitmarkParser.NUMERIC - 160)) | (1 << (bitmarkParser.STRING - 160)) | (1 << (bitmarkParser.SENTENCE - 160)))) !== 0) || ((((_la - 193)) & ~0x1F) === 0 && ((1 << (_la - 193)) & ((1 << (bitmarkParser.AmpAudio - 193)) | (1 << (bitmarkParser.AmpImage - 193)) | (1 << (bitmarkParser.AmpVideo - 193)) | (1 << (bitmarkParser.AmpArticle - 193)) | (1 << (bitmarkParser.AmpDocument - 193)) | (1 << (bitmarkParser.AmpApp - 193)) | (1 << (bitmarkParser.AmpWebsite - 193)) | (1 << (bitmarkParser.AmpStillImageFilm - 193)) | (1 << (bitmarkParser.AmpAudioLink - 193)) | (1 << (bitmarkParser.AmpImageLink - 193)) | (1 << (bitmarkParser.AmpVideoLink - 193)) | (1 << (bitmarkParser.AmpArticleLink - 193)) | (1 << (bitmarkParser.AmpDocumentLink - 193)) | (1 << (bitmarkParser.AmpAppLink - 193)) | (1 << (bitmarkParser.AmpWebsiteLink - 193)) | (1 << (bitmarkParser.AmpStillImageFilmLink - 193)))) !== 0) || ((((_la - 232)) & ~0x1F) === 0 && ((1 << (_la - 232)) & ((1 << (bitmarkParser.BitmarkMinus - 232)) | (1 << (bitmarkParser.BitmarkPlus - 232)) | (1 << (bitmarkParser.URL - 232)))) !== 0)) {
				{
				{
				this.state = 1059;
				this.s_and_w();
				}
				}
				this.state = 1064;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1065;
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
			this.state = 1068;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === bitmarkParser.OPC) {
				{
				this.state = 1067;
				this.item();
				}
			}

			this.state = 1070;
			this.match(bitmarkParser.OPP);
			this.state = 1072;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 1071;
				this.s_and_w();
				}
				}
				this.state = 1074;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === bitmarkParser.S || ((((_la - 127)) & ~0x1F) === 0 && ((1 << (_la - 127)) & ((1 << (bitmarkParser.OPESC - 127)) | (1 << (bitmarkParser.OPS - 127)) | (1 << (bitmarkParser.COLON - 127)) | (1 << (bitmarkParser.AMP - 127)) | (1 << (bitmarkParser.Greater - 127)) | (1 << (bitmarkParser.Less - 127)) | (1 << (bitmarkParser.RightAngle - 127)) | (1 << (bitmarkParser.RightArrow - 127)) | (1 << (bitmarkParser.DBLEQ - 127)) | (1 << (bitmarkParser.QUOTE_INDEX - 127)))) !== 0) || ((((_la - 160)) & ~0x1F) === 0 && ((1 << (_la - 160)) & ((1 << (bitmarkParser.NUMERIC - 160)) | (1 << (bitmarkParser.STRING - 160)) | (1 << (bitmarkParser.SENTENCE - 160)))) !== 0) || ((((_la - 193)) & ~0x1F) === 0 && ((1 << (_la - 193)) & ((1 << (bitmarkParser.AmpAudio - 193)) | (1 << (bitmarkParser.AmpImage - 193)) | (1 << (bitmarkParser.AmpVideo - 193)) | (1 << (bitmarkParser.AmpArticle - 193)) | (1 << (bitmarkParser.AmpDocument - 193)) | (1 << (bitmarkParser.AmpApp - 193)) | (1 << (bitmarkParser.AmpWebsite - 193)) | (1 << (bitmarkParser.AmpStillImageFilm - 193)) | (1 << (bitmarkParser.AmpAudioLink - 193)) | (1 << (bitmarkParser.AmpImageLink - 193)) | (1 << (bitmarkParser.AmpVideoLink - 193)) | (1 << (bitmarkParser.AmpArticleLink - 193)) | (1 << (bitmarkParser.AmpDocumentLink - 193)) | (1 << (bitmarkParser.AmpAppLink - 193)) | (1 << (bitmarkParser.AmpWebsiteLink - 193)) | (1 << (bitmarkParser.AmpStillImageFilmLink - 193)))) !== 0) || ((((_la - 232)) & ~0x1F) === 0 && ((1 << (_la - 232)) & ((1 << (bitmarkParser.BitmarkMinus - 232)) | (1 << (bitmarkParser.BitmarkPlus - 232)) | (1 << (bitmarkParser.URL - 232)))) !== 0));
			this.state = 1076;
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
			this.state = 1079;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === bitmarkParser.OPC) {
				{
				this.state = 1078;
				this.item();
				}
			}

			this.state = 1081;
			this.match(bitmarkParser.OPM);
			this.state = 1083;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 1082;
				this.s_and_w();
				}
				}
				this.state = 1085;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === bitmarkParser.S || ((((_la - 127)) & ~0x1F) === 0 && ((1 << (_la - 127)) & ((1 << (bitmarkParser.OPESC - 127)) | (1 << (bitmarkParser.OPS - 127)) | (1 << (bitmarkParser.COLON - 127)) | (1 << (bitmarkParser.AMP - 127)) | (1 << (bitmarkParser.Greater - 127)) | (1 << (bitmarkParser.Less - 127)) | (1 << (bitmarkParser.RightAngle - 127)) | (1 << (bitmarkParser.RightArrow - 127)) | (1 << (bitmarkParser.DBLEQ - 127)) | (1 << (bitmarkParser.QUOTE_INDEX - 127)))) !== 0) || ((((_la - 160)) & ~0x1F) === 0 && ((1 << (_la - 160)) & ((1 << (bitmarkParser.NUMERIC - 160)) | (1 << (bitmarkParser.STRING - 160)) | (1 << (bitmarkParser.SENTENCE - 160)))) !== 0) || ((((_la - 193)) & ~0x1F) === 0 && ((1 << (_la - 193)) & ((1 << (bitmarkParser.AmpAudio - 193)) | (1 << (bitmarkParser.AmpImage - 193)) | (1 << (bitmarkParser.AmpVideo - 193)) | (1 << (bitmarkParser.AmpArticle - 193)) | (1 << (bitmarkParser.AmpDocument - 193)) | (1 << (bitmarkParser.AmpApp - 193)) | (1 << (bitmarkParser.AmpWebsite - 193)) | (1 << (bitmarkParser.AmpStillImageFilm - 193)) | (1 << (bitmarkParser.AmpAudioLink - 193)) | (1 << (bitmarkParser.AmpImageLink - 193)) | (1 << (bitmarkParser.AmpVideoLink - 193)) | (1 << (bitmarkParser.AmpArticleLink - 193)) | (1 << (bitmarkParser.AmpDocumentLink - 193)) | (1 << (bitmarkParser.AmpAppLink - 193)) | (1 << (bitmarkParser.AmpWebsiteLink - 193)) | (1 << (bitmarkParser.AmpStillImageFilmLink - 193)))) !== 0) || ((((_la - 232)) & ~0x1F) === 0 && ((1 << (_la - 232)) & ((1 << (bitmarkParser.BitmarkMinus - 232)) | (1 << (bitmarkParser.BitmarkPlus - 232)) | (1 << (bitmarkParser.URL - 232)))) !== 0));
			this.state = 1087;
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
			this.state = 1090;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === bitmarkParser.OPC) {
				{
				this.state = 1089;
				this.item();
				}
			}

			this.state = 1092;
			this.match(bitmarkParser.OPR);
			this.state = 1094;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 1093;
				this.s_and_w();
				}
				}
				this.state = 1096;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === bitmarkParser.S || ((((_la - 127)) & ~0x1F) === 0 && ((1 << (_la - 127)) & ((1 << (bitmarkParser.OPESC - 127)) | (1 << (bitmarkParser.OPS - 127)) | (1 << (bitmarkParser.COLON - 127)) | (1 << (bitmarkParser.AMP - 127)) | (1 << (bitmarkParser.Greater - 127)) | (1 << (bitmarkParser.Less - 127)) | (1 << (bitmarkParser.RightAngle - 127)) | (1 << (bitmarkParser.RightArrow - 127)) | (1 << (bitmarkParser.DBLEQ - 127)) | (1 << (bitmarkParser.QUOTE_INDEX - 127)))) !== 0) || ((((_la - 160)) & ~0x1F) === 0 && ((1 << (_la - 160)) & ((1 << (bitmarkParser.NUMERIC - 160)) | (1 << (bitmarkParser.STRING - 160)) | (1 << (bitmarkParser.SENTENCE - 160)))) !== 0) || ((((_la - 193)) & ~0x1F) === 0 && ((1 << (_la - 193)) & ((1 << (bitmarkParser.AmpAudio - 193)) | (1 << (bitmarkParser.AmpImage - 193)) | (1 << (bitmarkParser.AmpVideo - 193)) | (1 << (bitmarkParser.AmpArticle - 193)) | (1 << (bitmarkParser.AmpDocument - 193)) | (1 << (bitmarkParser.AmpApp - 193)) | (1 << (bitmarkParser.AmpWebsite - 193)) | (1 << (bitmarkParser.AmpStillImageFilm - 193)) | (1 << (bitmarkParser.AmpAudioLink - 193)) | (1 << (bitmarkParser.AmpImageLink - 193)) | (1 << (bitmarkParser.AmpVideoLink - 193)) | (1 << (bitmarkParser.AmpArticleLink - 193)) | (1 << (bitmarkParser.AmpDocumentLink - 193)) | (1 << (bitmarkParser.AmpAppLink - 193)) | (1 << (bitmarkParser.AmpWebsiteLink - 193)) | (1 << (bitmarkParser.AmpStillImageFilmLink - 193)))) !== 0) || ((((_la - 232)) & ~0x1F) === 0 && ((1 << (_la - 232)) & ((1 << (bitmarkParser.BitmarkMinus - 232)) | (1 << (bitmarkParser.BitmarkPlus - 232)) | (1 << (bitmarkParser.URL - 232)))) !== 0));
			this.state = 1098;
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
			this.state = 1100;
			this.match(bitmarkParser.BitEssay);
			this.state = 1101;
			this.format();
			this.state = 1102;
			this.match(bitmarkParser.CL);
			this.state = 1103;
			this.match(bitmarkParser.NL);
			this.state = 1113;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 91, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					{
					this.state = 1104;
					this.bitElem();
					}
					this.state = 1108;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 90, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 1105;
							this.match(bitmarkParser.NL);
							}
							}
						}
						this.state = 1110;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 90, this._ctx);
					}
					}
					}
				}
				this.state = 1115;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 91, this._ctx);
			}
			this.state = 1125;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 93, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1119;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === bitmarkParser.NL) {
						{
						{
						this.state = 1116;
						this.match(bitmarkParser.NL);
						}
						}
						this.state = 1121;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					{
					this.state = 1122;
					this.ml_example();
					}
					}
					}
				}
				this.state = 1127;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 93, this._ctx);
			}
			this.state = 1131;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 94, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1128;
					this.match(bitmarkParser.NL);
					}
					}
				}
				this.state = 1133;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 94, this._ctx);
			}
			this.state = 1147;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 97, this._ctx) ) {
			case 1:
				{
				this.state = 1134;
				this.resource();
				this.state = 1144;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 96, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 1138;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						while (_la === bitmarkParser.NL) {
							{
							{
							this.state = 1135;
							this.match(bitmarkParser.NL);
							}
							}
							this.state = 1140;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
						}
						this.state = 1141;
						this.resource();
						}
						}
					}
					this.state = 1146;
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
			this.state = 1149;
			this.match(bitmarkParser.AtExamplecol);
			this.state = 1157;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === bitmarkParser.S || ((((_la - 127)) & ~0x1F) === 0 && ((1 << (_la - 127)) & ((1 << (bitmarkParser.OPESC - 127)) | (1 << (bitmarkParser.OPS - 127)) | (1 << (bitmarkParser.COLON - 127)) | (1 << (bitmarkParser.AMP - 127)) | (1 << (bitmarkParser.Greater - 127)) | (1 << (bitmarkParser.Less - 127)) | (1 << (bitmarkParser.RightAngle - 127)) | (1 << (bitmarkParser.RightArrow - 127)) | (1 << (bitmarkParser.DBLEQ - 127)) | (1 << (bitmarkParser.QUOTE_INDEX - 127)))) !== 0) || ((((_la - 160)) & ~0x1F) === 0 && ((1 << (_la - 160)) & ((1 << (bitmarkParser.NUMERIC - 160)) | (1 << (bitmarkParser.STRING - 160)) | (1 << (bitmarkParser.NL - 160)) | (1 << (bitmarkParser.SENTENCE - 160)))) !== 0) || ((((_la - 193)) & ~0x1F) === 0 && ((1 << (_la - 193)) & ((1 << (bitmarkParser.AmpAudio - 193)) | (1 << (bitmarkParser.AmpImage - 193)) | (1 << (bitmarkParser.AmpVideo - 193)) | (1 << (bitmarkParser.AmpArticle - 193)) | (1 << (bitmarkParser.AmpDocument - 193)) | (1 << (bitmarkParser.AmpApp - 193)) | (1 << (bitmarkParser.AmpWebsite - 193)) | (1 << (bitmarkParser.AmpStillImageFilm - 193)) | (1 << (bitmarkParser.AmpAudioLink - 193)) | (1 << (bitmarkParser.AmpImageLink - 193)) | (1 << (bitmarkParser.AmpVideoLink - 193)) | (1 << (bitmarkParser.AmpArticleLink - 193)) | (1 << (bitmarkParser.AmpDocumentLink - 193)) | (1 << (bitmarkParser.AmpAppLink - 193)) | (1 << (bitmarkParser.AmpWebsiteLink - 193)) | (1 << (bitmarkParser.AmpStillImageFilmLink - 193)))) !== 0) || ((((_la - 232)) & ~0x1F) === 0 && ((1 << (_la - 232)) & ((1 << (bitmarkParser.BitmarkMinus - 232)) | (1 << (bitmarkParser.BitmarkPlus - 232)) | (1 << (bitmarkParser.URL - 232)))) !== 0)) {
				{
				this.state = 1151;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === bitmarkParser.NL) {
					{
					this.state = 1150;
					this.match(bitmarkParser.NL);
					}
				}

				this.state = 1153;
				this.lines();
				this.state = 1155;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === bitmarkParser.NL) {
					{
					this.state = 1154;
					this.match(bitmarkParser.NL);
					}
				}

				}
			}

			this.state = 1159;
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
			this.state = 1161;
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
			this.state = 1163;
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
			this.state = 1165;
			this.match(bitmarkParser.BitCorrection);
			this.state = 1166;
			this.format();
			this.state = 1167;
			this.match(bitmarkParser.CL);
			this.state = 1168;
			this.match(bitmarkParser.NL);
			this.state = 1178;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 102, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1169;
					this.bitElem();
					this.state = 1173;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 101, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 1170;
							this.match(bitmarkParser.NL);
							}
							}
						}
						this.state = 1175;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 101, this._ctx);
					}
					}
					}
				}
				this.state = 1180;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 102, this._ctx);
			}
			this.state = 1184;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === bitmarkParser.OPP || _la === bitmarkParser.OPM) {
				{
				{
				this.state = 1181;
				this.corrs();
				}
				}
				this.state = 1186;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1190;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 104, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1187;
					this.match(bitmarkParser.NL);
					}
					}
				}
				this.state = 1192;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 104, this._ctx);
			}
			this.state = 1206;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 107, this._ctx) ) {
			case 1:
				{
				this.state = 1193;
				this.resource();
				this.state = 1203;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 106, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 1197;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						while (_la === bitmarkParser.NL) {
							{
							{
							this.state = 1194;
							this.match(bitmarkParser.NL);
							}
							}
							this.state = 1199;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
						}
						this.state = 1200;
						this.resource();
						}
						}
					}
					this.state = 1205;
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
			this.state = 1226;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case bitmarkParser.OPM:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1208;
				this.match(bitmarkParser.OPM);
				this.state = 1212;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 108, this._ctx);
				while (_alt !== 1 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1 + 1) {
						{
						{
						this.state = 1209;
						this.matchWildcard();
						}
						}
					}
					this.state = 1214;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 108, this._ctx);
				}
				this.state = 1215;
				this.match(bitmarkParser.CL);
				this.state = 1216;
				this.match(bitmarkParser.NL);
				}
				break;
			case bitmarkParser.OPP:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1217;
				this.match(bitmarkParser.OPP);
				this.state = 1221;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 109, this._ctx);
				while (_alt !== 1 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1 + 1) {
						{
						{
						this.state = 1218;
						this.matchWildcard();
						}
						}
					}
					this.state = 1223;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 109, this._ctx);
				}
				this.state = 1224;
				this.match(bitmarkParser.CL);
				this.state = 1225;
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
			this.state = 1228;
			this.match(bitmarkParser.BitMark);
			this.state = 1229;
			this.format();
			this.state = 1230;
			this.match(bitmarkParser.CL);
			this.state = 1231;
			this.match(bitmarkParser.NL);
			this.state = 1244;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 113, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1234;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 111, this._ctx) ) {
					case 1:
						{
						this.state = 1232;
						this.bitElem();
						}
						break;

					case 2:
						{
						this.state = 1233;
						this.mark_text();
						}
						break;
					}
					this.state = 1239;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 112, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 1236;
							this.match(bitmarkParser.NL);
							}
							}
						}
						this.state = 1241;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 112, this._ctx);
					}
					}
					}
				}
				this.state = 1246;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 113, this._ctx);
			}
			this.state = 1250;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 114, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1247;
					this.match(bitmarkParser.NL);
					}
					}
				}
				this.state = 1252;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 114, this._ctx);
			}
			this.state = 1266;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 117, this._ctx) ) {
			case 1:
				{
				this.state = 1253;
				this.resource();
				this.state = 1263;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 116, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 1257;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						while (_la === bitmarkParser.NL) {
							{
							{
							this.state = 1254;
							this.match(bitmarkParser.NL);
							}
							}
							this.state = 1259;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
						}
						this.state = 1260;
						this.resource();
						}
						}
					}
					this.state = 1265;
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
			this.state = 1268;
			this.match(bitmarkParser.OPS);
			this.state = 1269;
			this.s_and_w();
			this.state = 1270;
			this.match(bitmarkParser.CL);
			this.state = 1272;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === bitmarkParser.OPAMARK) {
				{
				this.state = 1271;
				this.mark_color();
				}
			}

			this.state = 1279;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 120, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					this.state = 1277;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case bitmarkParser.OPQ:
						{
						this.state = 1274;
						this.hint();
						}
						break;
					case bitmarkParser.OPC:
						{
						this.state = 1275;
						this.item();
						}
						break;
					case bitmarkParser.OPB:
						{
						this.state = 1276;
						this.instruction();
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					}
				}
				this.state = 1281;
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
			this.state = 1282;
			this.match(bitmarkParser.OPAMARK);
			this.state = 1286;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === bitmarkParser.S) {
				{
				{
				this.state = 1283;
				this.match(bitmarkParser.S);
				}
				}
				this.state = 1288;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1289;
			this.match(bitmarkParser.STRING);
			this.state = 1293;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === bitmarkParser.S) {
				{
				{
				this.state = 1290;
				this.match(bitmarkParser.S);
				}
				}
				this.state = 1295;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1296;
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
			this.state = 1298;
			this.match(bitmarkParser.BitDocup);
			this.state = 1300;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 122)) & ~0x1F) === 0 && ((1 << (_la - 122)) & ((1 << (bitmarkParser.Image_type - 122)) | (1 << (bitmarkParser.Audio_type - 122)) | (1 << (bitmarkParser.Video_type - 122)))) !== 0)) {
				{
				this.state = 1299;
				_la = this._input.LA(1);
				if (!(((((_la - 122)) & ~0x1F) === 0 && ((1 << (_la - 122)) & ((1 << (bitmarkParser.Image_type - 122)) | (1 << (bitmarkParser.Audio_type - 122)) | (1 << (bitmarkParser.Video_type - 122)))) !== 0))) {
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

			this.state = 1302;
			this.match(bitmarkParser.CL);
			this.state = 1303;
			this.match(bitmarkParser.NL);
			this.state = 1313;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 125, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1304;
					this.bitElem();
					this.state = 1308;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 124, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 1305;
							this.match(bitmarkParser.NL);
							}
							}
						}
						this.state = 1310;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 124, this._ctx);
					}
					}
					}
				}
				this.state = 1315;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 125, this._ctx);
			}
			this.state = 1319;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 126, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1316;
					this.match(bitmarkParser.NL);
					}
					}
				}
				this.state = 1321;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 126, this._ctx);
			}
			this.state = 1335;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 129, this._ctx) ) {
			case 1:
				{
				this.state = 1322;
				this.resource();
				this.state = 1332;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 128, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 1326;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						while (_la === bitmarkParser.NL) {
							{
							{
							this.state = 1323;
							this.match(bitmarkParser.NL);
							}
							}
							this.state = 1328;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
						}
						this.state = 1329;
						this.resource();
						}
						}
					}
					this.state = 1334;
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
			this.state = 1337;
			this.match(bitmarkParser.BitTakeAudio);
			this.state = 1338;
			this.format();
			this.state = 1339;
			this.match(bitmarkParser.CL);
			this.state = 1340;
			this.match(bitmarkParser.NL);
			this.state = 1350;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 131, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1341;
					this.bitElem();
					this.state = 1345;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 130, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 1342;
							this.match(bitmarkParser.NL);
							}
							}
						}
						this.state = 1347;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 130, this._ctx);
					}
					}
					}
				}
				this.state = 1352;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 131, this._ctx);
			}
			this.state = 1356;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 132, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1353;
					this.match(bitmarkParser.NL);
					}
					}
				}
				this.state = 1358;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 132, this._ctx);
			}
			this.state = 1372;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 135, this._ctx) ) {
			case 1:
				{
				this.state = 1359;
				this.resource();
				this.state = 1369;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 134, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 1363;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						while (_la === bitmarkParser.NL) {
							{
							{
							this.state = 1360;
							this.match(bitmarkParser.NL);
							}
							}
							this.state = 1365;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
						}
						this.state = 1366;
						this.resource();
						}
						}
					}
					this.state = 1371;
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
			this.state = 1374;
			this.match(bitmarkParser.BitTakepic);
			this.state = 1375;
			this.format();
			this.state = 1376;
			this.match(bitmarkParser.CL);
			this.state = 1377;
			this.match(bitmarkParser.NL);
			this.state = 1387;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 137, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1378;
					this.bitElem();
					this.state = 1382;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 136, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 1379;
							this.match(bitmarkParser.NL);
							}
							}
						}
						this.state = 1384;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 136, this._ctx);
					}
					}
					}
				}
				this.state = 1389;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 137, this._ctx);
			}
			this.state = 1393;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 138, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1390;
					this.match(bitmarkParser.NL);
					}
					}
				}
				this.state = 1395;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 138, this._ctx);
			}
			this.state = 1409;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 141, this._ctx) ) {
			case 1:
				{
				this.state = 1396;
				this.resource();
				this.state = 1406;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 140, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 1400;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						while (_la === bitmarkParser.NL) {
							{
							{
							this.state = 1397;
							this.match(bitmarkParser.NL);
							}
							}
							this.state = 1402;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
						}
						this.state = 1403;
						this.resource();
						}
						}
					}
					this.state = 1408;
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
			this.state = 1411;
			this.match(bitmarkParser.BitRecaud);
			this.state = 1412;
			this.format();
			this.state = 1413;
			this.match(bitmarkParser.CL);
			this.state = 1414;
			this.match(bitmarkParser.NL);
			this.state = 1424;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 143, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1415;
					this.bitElem();
					this.state = 1419;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 142, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 1416;
							this.match(bitmarkParser.NL);
							}
							}
						}
						this.state = 1421;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 142, this._ctx);
					}
					}
					}
				}
				this.state = 1426;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 143, this._ctx);
			}
			this.state = 1430;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 144, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1427;
					this.match(bitmarkParser.NL);
					}
					}
				}
				this.state = 1432;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 144, this._ctx);
			}
			this.state = 1446;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 147, this._ctx) ) {
			case 1:
				{
				this.state = 1433;
				this.resource();
				this.state = 1443;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 146, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 1437;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						while (_la === bitmarkParser.NL) {
							{
							{
							this.state = 1434;
							this.match(bitmarkParser.NL);
							}
							}
							this.state = 1439;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
						}
						this.state = 1440;
						this.resource();
						}
						}
					}
					this.state = 1445;
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
			this.state = 1448;
			this.match(bitmarkParser.BitPrepnote);
			this.state = 1449;
			this.format();
			this.state = 1450;
			this.match(bitmarkParser.CL);
			this.state = 1454;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 148, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1451;
					this.match(bitmarkParser.NL);
					}
					}
				}
				this.state = 1456;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 148, this._ctx);
			}
			this.state = 1466;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 150, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1457;
					this.bitElem();
					this.state = 1461;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 149, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 1458;
							this.match(bitmarkParser.NL);
							}
							}
						}
						this.state = 1463;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 149, this._ctx);
					}
					}
					}
				}
				this.state = 1468;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 150, this._ctx);
			}
			this.state = 1470;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 151, this._ctx) ) {
			case 1:
				{
				this.state = 1469;
				this.lines();
				}
				break;
			}
			this.state = 1475;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 152, this._ctx);
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
				_alt = this.interpreter.adaptivePredict(this._input, 152, this._ctx);
			}
			this.state = 1491;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 155, this._ctx) ) {
			case 1:
				{
				this.state = 1478;
				this.resource();
				this.state = 1488;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 154, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 1482;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						while (_la === bitmarkParser.NL) {
							{
							{
							this.state = 1479;
							this.match(bitmarkParser.NL);
							}
							}
							this.state = 1484;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
						}
						this.state = 1485;
						this.resource();
						}
						}
					}
					this.state = 1490;
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
			this.state = 1493;
			this.match(bitmarkParser.BitAssign);
			this.state = 1494;
			this.format();
			this.state = 1495;
			this.match(bitmarkParser.CL);
			this.state = 1497;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 1496;
					this.match(bitmarkParser.NL);
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 1499;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 156, this._ctx);
			} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
			this.state = 1510;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 158, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1501;
					this.bitElem();
					this.state = 1505;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 157, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 1502;
							this.match(bitmarkParser.NL);
							}
							}
						}
						this.state = 1507;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 157, this._ctx);
					}
					}
					}
				}
				this.state = 1512;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 158, this._ctx);
			}
			this.state = 1514;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 159, this._ctx) ) {
			case 1:
				{
				this.state = 1513;
				this.lines();
				}
				break;
			}
			this.state = 1519;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 160, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1516;
					this.match(bitmarkParser.NL);
					}
					}
				}
				this.state = 1521;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 160, this._ctx);
			}
			this.state = 1535;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 163, this._ctx) ) {
			case 1:
				{
				this.state = 1522;
				this.resource();
				this.state = 1532;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 162, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 1526;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						while (_la === bitmarkParser.NL) {
							{
							{
							this.state = 1523;
							this.match(bitmarkParser.NL);
							}
							}
							this.state = 1528;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
						}
						this.state = 1529;
						this.resource();
						}
						}
					}
					this.state = 1534;
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
			this.state = 1537;
			this.match(bitmarkParser.BitArticle);
			this.state = 1538;
			this.format();
			this.state = 1539;
			this.match(bitmarkParser.CL);
			this.state = 1543;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === bitmarkParser.NL) {
				{
				{
				this.state = 1540;
				this.match(bitmarkParser.NL);
				}
				}
				this.state = 1545;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1553;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 1546;
					this.bitElem();
					this.state = 1550;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 165, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 1547;
							this.match(bitmarkParser.NL);
							}
							}
						}
						this.state = 1552;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 165, this._ctx);
					}
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 1555;
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
			this.state = 1557;
			this.match(bitmarkParser.BitStatement);
			this.state = 1558;
			this.format();
			this.state = 1559;
			this.match(bitmarkParser.CL);
			this.state = 1563;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === bitmarkParser.NL) {
				{
				{
				this.state = 1560;
				this.match(bitmarkParser.NL);
				}
				}
				this.state = 1565;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1573;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 1566;
					this.bitElem();
					this.state = 1570;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 168, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 1567;
							this.match(bitmarkParser.NL);
							}
							}
						}
						this.state = 1572;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 168, this._ctx);
					}
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 1575;
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
			this.state = 1577;
			this.match(bitmarkParser.BitDetails);
			this.state = 1578;
			this.format();
			this.state = 1579;
			this.match(bitmarkParser.CL);
			this.state = 1583;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === bitmarkParser.NL) {
				{
				{
				this.state = 1580;
				this.match(bitmarkParser.NL);
				}
				}
				this.state = 1585;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1593;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 1586;
					this.bitElem();
					this.state = 1590;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 171, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 1587;
							this.match(bitmarkParser.NL);
							}
							}
						}
						this.state = 1592;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 171, this._ctx);
					}
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 1595;
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
			this.state = 1597;
			this.match(bitmarkParser.BitSampleSolution);
			this.state = 1598;
			this.format();
			this.state = 1599;
			this.match(bitmarkParser.CL);
			this.state = 1603;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === bitmarkParser.NL) {
				{
				{
				this.state = 1600;
				this.match(bitmarkParser.NL);
				}
				}
				this.state = 1605;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1613;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 1606;
					this.bitElem();
					this.state = 1610;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 174, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 1607;
							this.match(bitmarkParser.NL);
							}
							}
						}
						this.state = 1612;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 174, this._ctx);
					}
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 1615;
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
			this.state = 1617;
			this.match(bitmarkParser.BitButtonCopytext);
			this.state = 1618;
			this.format();
			this.state = 1619;
			this.match(bitmarkParser.CL);
			this.state = 1623;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === bitmarkParser.NL) {
				{
				{
				this.state = 1620;
				this.match(bitmarkParser.NL);
				}
				}
				this.state = 1625;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1633;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 1626;
					this.bitElem();
					this.state = 1630;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 177, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 1627;
							this.match(bitmarkParser.NL);
							}
							}
						}
						this.state = 1632;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 177, this._ctx);
					}
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 1635;
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
			this.state = 1637;
			this.match(bitmarkParser.BitWbtContinue);
			this.state = 1638;
			this.format();
			this.state = 1639;
			this.match(bitmarkParser.CL);
			this.state = 1643;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === bitmarkParser.NL) {
				{
				{
				this.state = 1640;
				this.match(bitmarkParser.NL);
				}
				}
				this.state = 1645;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1653;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 1646;
					this.bitElem();
					this.state = 1650;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 180, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 1647;
							this.match(bitmarkParser.NL);
							}
							}
						}
						this.state = 1652;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 180, this._ctx);
					}
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 1655;
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
			this.state = 1657;
			this.match(bitmarkParser.BitLearningPathDetails);
			this.state = 1658;
			this.format();
			this.state = 1659;
			this.match(bitmarkParser.CL);
			this.state = 1663;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === bitmarkParser.NL) {
				{
				{
				this.state = 1660;
				this.match(bitmarkParser.NL);
				}
				}
				this.state = 1665;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1673;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 1666;
					this.bitElem();
					this.state = 1670;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 183, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 1667;
							this.match(bitmarkParser.NL);
							}
							}
						}
						this.state = 1672;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 183, this._ctx);
					}
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 1675;
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
			this.state = 1677;
			this.match(bitmarkParser.BitPage);
			this.state = 1678;
			this.format();
			this.state = 1679;
			this.match(bitmarkParser.CL);
			this.state = 1683;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === bitmarkParser.NL) {
				{
				{
				this.state = 1680;
				this.match(bitmarkParser.NL);
				}
				}
				this.state = 1685;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1693;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 1686;
					this.bitElem();
					this.state = 1690;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 186, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 1687;
							this.match(bitmarkParser.NL);
							}
							}
						}
						this.state = 1692;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 186, this._ctx);
					}
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 1695;
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
			this.state = 1697;
			this.match(bitmarkParser.BitNote);
			this.state = 1698;
			this.format();
			this.state = 1699;
			this.match(bitmarkParser.CL);
			this.state = 1703;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === bitmarkParser.NL) {
				{
				{
				this.state = 1700;
				this.match(bitmarkParser.NL);
				}
				}
				this.state = 1705;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1713;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 1706;
					this.bitElem();
					this.state = 1710;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 189, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 1707;
							this.match(bitmarkParser.NL);
							}
							}
						}
						this.state = 1712;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 189, this._ctx);
					}
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 1715;
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
			this.state = 1717;
			this.match(bitmarkParser.BitInfo);
			this.state = 1718;
			this.format();
			this.state = 1719;
			this.match(bitmarkParser.CL);
			this.state = 1723;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === bitmarkParser.NL) {
				{
				{
				this.state = 1720;
				this.match(bitmarkParser.NL);
				}
				}
				this.state = 1725;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1733;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 1726;
					this.bitElem();
					this.state = 1730;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 192, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 1727;
							this.match(bitmarkParser.NL);
							}
							}
						}
						this.state = 1732;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 192, this._ctx);
					}
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 1735;
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
			this.state = 1737;
			this.match(bitmarkParser.BitWarning);
			this.state = 1738;
			this.format();
			this.state = 1739;
			this.match(bitmarkParser.CL);
			this.state = 1743;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === bitmarkParser.NL) {
				{
				{
				this.state = 1740;
				this.match(bitmarkParser.NL);
				}
				}
				this.state = 1745;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1753;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 1746;
					this.bitElem();
					this.state = 1750;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 195, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 1747;
							this.match(bitmarkParser.NL);
							}
							}
						}
						this.state = 1752;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 195, this._ctx);
					}
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 1755;
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
			this.state = 1757;
			this.match(bitmarkParser.BitRemark);
			this.state = 1758;
			this.format();
			this.state = 1759;
			this.match(bitmarkParser.CL);
			this.state = 1763;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === bitmarkParser.NL) {
				{
				{
				this.state = 1760;
				this.match(bitmarkParser.NL);
				}
				}
				this.state = 1765;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1773;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 1766;
					this.bitElem();
					this.state = 1770;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 198, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 1767;
							this.match(bitmarkParser.NL);
							}
							}
						}
						this.state = 1772;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 198, this._ctx);
					}
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 1775;
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
			this.state = 1777;
			this.match(bitmarkParser.BitHelp);
			this.state = 1778;
			this.format();
			this.state = 1779;
			this.match(bitmarkParser.CL);
			this.state = 1783;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === bitmarkParser.NL) {
				{
				{
				this.state = 1780;
				this.match(bitmarkParser.NL);
				}
				}
				this.state = 1785;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1793;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 1786;
					this.bitElem();
					this.state = 1790;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 201, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 1787;
							this.match(bitmarkParser.NL);
							}
							}
						}
						this.state = 1792;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 201, this._ctx);
					}
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 1795;
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
			this.state = 1797;
			this.match(bitmarkParser.BitDanger);
			this.state = 1798;
			this.format();
			this.state = 1799;
			this.match(bitmarkParser.CL);
			this.state = 1803;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === bitmarkParser.NL) {
				{
				{
				this.state = 1800;
				this.match(bitmarkParser.NL);
				}
				}
				this.state = 1805;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1813;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 1806;
					this.bitElem();
					this.state = 1810;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 204, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 1807;
							this.match(bitmarkParser.NL);
							}
							}
						}
						this.state = 1812;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 204, this._ctx);
					}
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 1815;
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
			this.state = 1817;
			this.match(bitmarkParser.BitBug);
			this.state = 1818;
			this.format();
			this.state = 1819;
			this.match(bitmarkParser.CL);
			this.state = 1823;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === bitmarkParser.NL) {
				{
				{
				this.state = 1820;
				this.match(bitmarkParser.NL);
				}
				}
				this.state = 1825;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1833;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 1826;
					this.bitElem();
					this.state = 1830;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 207, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 1827;
							this.match(bitmarkParser.NL);
							}
							}
						}
						this.state = 1832;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 207, this._ctx);
					}
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 1835;
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
			this.state = 1837;
			this.match(bitmarkParser.BitSidenote);
			this.state = 1838;
			this.format();
			this.state = 1839;
			this.match(bitmarkParser.CL);
			this.state = 1843;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === bitmarkParser.NL) {
				{
				{
				this.state = 1840;
				this.match(bitmarkParser.NL);
				}
				}
				this.state = 1845;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1853;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 1846;
					this.bitElem();
					this.state = 1850;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 210, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 1847;
							this.match(bitmarkParser.NL);
							}
							}
						}
						this.state = 1852;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 210, this._ctx);
					}
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 1855;
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
			this.state = 1857;
			this.match(bitmarkParser.BitStickynote);
			this.state = 1858;
			this.format();
			this.state = 1859;
			this.match(bitmarkParser.CL);
			this.state = 1863;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === bitmarkParser.NL) {
				{
				{
				this.state = 1860;
				this.match(bitmarkParser.NL);
				}
				}
				this.state = 1865;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1873;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 1866;
					this.bitElem();
					this.state = 1870;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 213, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 1867;
							this.match(bitmarkParser.NL);
							}
							}
						}
						this.state = 1872;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 213, this._ctx);
					}
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 1875;
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
			this.state = 1877;
			this.match(bitmarkParser.BitQuote);
			this.state = 1878;
			this.format();
			this.state = 1879;
			this.match(bitmarkParser.CL);
			this.state = 1883;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === bitmarkParser.NL) {
				{
				{
				this.state = 1880;
				this.match(bitmarkParser.NL);
				}
				}
				this.state = 1885;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1893;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 1886;
					this.bitElem();
					this.state = 1890;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 216, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 1887;
							this.match(bitmarkParser.NL);
							}
							}
						}
						this.state = 1892;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 216, this._ctx);
					}
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 1895;
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
			this.state = 1897;
			this.match(bitmarkParser.BitFootnote);
			this.state = 1898;
			this.format();
			this.state = 1899;
			this.match(bitmarkParser.CL);
			this.state = 1903;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === bitmarkParser.NL) {
				{
				{
				this.state = 1900;
				this.match(bitmarkParser.NL);
				}
				}
				this.state = 1905;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1913;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 1906;
					this.bitElem();
					this.state = 1910;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 219, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 1907;
							this.match(bitmarkParser.NL);
							}
							}
						}
						this.state = 1912;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 219, this._ctx);
					}
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 1915;
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
			this.state = 1917;
			this.match(bitmarkParser.BitHint);
			this.state = 1918;
			this.format();
			this.state = 1919;
			this.match(bitmarkParser.CL);
			this.state = 1923;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === bitmarkParser.NL) {
				{
				{
				this.state = 1920;
				this.match(bitmarkParser.NL);
				}
				}
				this.state = 1925;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1933;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 1926;
					this.bitElem();
					this.state = 1930;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 222, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 1927;
							this.match(bitmarkParser.NL);
							}
							}
						}
						this.state = 1932;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 222, this._ctx);
					}
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 1935;
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
			this.state = 1937;
			this.match(bitmarkParser.BitExample);
			this.state = 1938;
			this.format();
			this.state = 1939;
			this.match(bitmarkParser.CL);
			this.state = 1943;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === bitmarkParser.NL) {
				{
				{
				this.state = 1940;
				this.match(bitmarkParser.NL);
				}
				}
				this.state = 1945;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1953;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 1946;
					this.bitElem();
					this.state = 1950;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 225, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 1947;
							this.match(bitmarkParser.NL);
							}
							}
						}
						this.state = 1952;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 225, this._ctx);
					}
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 1955;
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
			this.state = 1957;
			this.match(bitmarkParser.BitVendorPadletEmbed);
			this.state = 1958;
			this.format();
			this.state = 1959;
			this.match(bitmarkParser.CL);
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
			this.state = 1973;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 1966;
					this.bitElem();
					this.state = 1970;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 228, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 1967;
							this.match(bitmarkParser.NL);
							}
							}
						}
						this.state = 1972;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 228, this._ctx);
					}
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 1975;
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
			this.state = 1977;
			this.match(bitmarkParser.BitScorm);
			this.state = 1978;
			this.format();
			this.state = 1979;
			this.match(bitmarkParser.CL);
			this.state = 1983;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === bitmarkParser.NL) {
				{
				{
				this.state = 1980;
				this.match(bitmarkParser.NL);
				}
				}
				this.state = 1985;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1993;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 1986;
					this.bitElem();
					this.state = 1990;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 231, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 1987;
							this.match(bitmarkParser.NL);
							}
							}
						}
						this.state = 1992;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 231, this._ctx);
					}
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 1995;
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
			this.state = 1997;
			this.match(bitmarkParser.BitImage);
			this.state = 1998;
			this.format2();
			this.state = 1999;
			this.match(bitmarkParser.CL);
			this.state = 2003;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === bitmarkParser.NL) {
				{
				{
				this.state = 2000;
				this.match(bitmarkParser.NL);
				}
				}
				this.state = 2005;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 2013;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 2006;
					this.bitElem();
					this.state = 2010;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 234, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 2007;
							this.match(bitmarkParser.NL);
							}
							}
						}
						this.state = 2012;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 234, this._ctx);
					}
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 2015;
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
			this.state = 2017;
			this.match(bitmarkParser.BitImageLink);
			this.state = 2018;
			this.format2();
			this.state = 2019;
			this.match(bitmarkParser.CL);
			this.state = 2023;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === bitmarkParser.NL) {
				{
				{
				this.state = 2020;
				this.match(bitmarkParser.NL);
				}
				}
				this.state = 2025;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 2033;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 2026;
					this.bitElem();
					this.state = 2030;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 237, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 2027;
							this.match(bitmarkParser.NL);
							}
							}
						}
						this.state = 2032;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 237, this._ctx);
					}
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 2035;
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
			this.state = 2037;
			this.match(bitmarkParser.BitImageZoom);
			this.state = 2038;
			this.format2();
			this.state = 2039;
			this.match(bitmarkParser.CL);
			this.state = 2043;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === bitmarkParser.NL) {
				{
				{
				this.state = 2040;
				this.match(bitmarkParser.NL);
				}
				}
				this.state = 2045;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 2053;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 2046;
					this.bitElem();
					this.state = 2050;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 240, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 2047;
							this.match(bitmarkParser.NL);
							}
							}
						}
						this.state = 2052;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 240, this._ctx);
					}
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 2055;
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
			this.state = 2057;
			this.match(bitmarkParser.BitAudio);
			this.state = 2058;
			this.format2();
			this.state = 2059;
			this.match(bitmarkParser.CL);
			this.state = 2063;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === bitmarkParser.NL) {
				{
				{
				this.state = 2060;
				this.match(bitmarkParser.NL);
				}
				}
				this.state = 2065;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 2073;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 2066;
					this.bitElem();
					this.state = 2070;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 243, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 2067;
							this.match(bitmarkParser.NL);
							}
							}
						}
						this.state = 2072;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 243, this._ctx);
					}
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 2075;
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
			this.state = 2077;
			this.match(bitmarkParser.BitAudioLink);
			this.state = 2078;
			this.format2();
			this.state = 2079;
			this.match(bitmarkParser.CL);
			this.state = 2083;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === bitmarkParser.NL) {
				{
				{
				this.state = 2080;
				this.match(bitmarkParser.NL);
				}
				}
				this.state = 2085;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 2093;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 2086;
					this.bitElem();
					this.state = 2090;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 246, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 2087;
							this.match(bitmarkParser.NL);
							}
							}
						}
						this.state = 2092;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 246, this._ctx);
					}
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 2095;
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
			this.state = 2097;
			this.match(bitmarkParser.BitAudioEmbed);
			this.state = 2098;
			this.format2();
			this.state = 2099;
			this.match(bitmarkParser.CL);
			this.state = 2103;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === bitmarkParser.NL) {
				{
				{
				this.state = 2100;
				this.match(bitmarkParser.NL);
				}
				}
				this.state = 2105;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 2113;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 2106;
					this.bitElem();
					this.state = 2110;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 249, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 2107;
							this.match(bitmarkParser.NL);
							}
							}
						}
						this.state = 2112;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 249, this._ctx);
					}
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 2115;
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
			this.state = 2117;
			this.match(bitmarkParser.BitVideo);
			this.state = 2118;
			this.format2();
			this.state = 2119;
			this.match(bitmarkParser.CL);
			this.state = 2123;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === bitmarkParser.NL) {
				{
				{
				this.state = 2120;
				this.match(bitmarkParser.NL);
				}
				}
				this.state = 2125;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 2133;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 2126;
					this.bitElem();
					this.state = 2130;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 252, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 2127;
							this.match(bitmarkParser.NL);
							}
							}
						}
						this.state = 2132;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 252, this._ctx);
					}
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 2135;
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
			this.state = 2137;
			this.match(bitmarkParser.BitVideoLink);
			this.state = 2138;
			this.format2();
			this.state = 2139;
			this.match(bitmarkParser.CL);
			this.state = 2143;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === bitmarkParser.NL) {
				{
				{
				this.state = 2140;
				this.match(bitmarkParser.NL);
				}
				}
				this.state = 2145;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 2153;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 2146;
					this.bitElem();
					this.state = 2150;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 255, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 2147;
							this.match(bitmarkParser.NL);
							}
							}
						}
						this.state = 2152;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 255, this._ctx);
					}
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 2155;
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
			this.state = 2157;
			this.match(bitmarkParser.BitVideoEmbed);
			this.state = 2158;
			this.format2();
			this.state = 2159;
			this.match(bitmarkParser.CL);
			this.state = 2163;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === bitmarkParser.NL) {
				{
				{
				this.state = 2160;
				this.match(bitmarkParser.NL);
				}
				}
				this.state = 2165;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 2173;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 2166;
					this.bitElem();
					this.state = 2170;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 258, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 2167;
							this.match(bitmarkParser.NL);
							}
							}
						}
						this.state = 2172;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 258, this._ctx);
					}
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 2175;
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
			this.state = 2177;
			this.match(bitmarkParser.BitStillImageFilm);
			this.state = 2178;
			this.format2();
			this.state = 2179;
			this.match(bitmarkParser.CL);
			this.state = 2183;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === bitmarkParser.NL) {
				{
				{
				this.state = 2180;
				this.match(bitmarkParser.NL);
				}
				}
				this.state = 2185;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 2193;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 2186;
					this.bitElem();
					this.state = 2190;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 261, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 2187;
							this.match(bitmarkParser.NL);
							}
							}
						}
						this.state = 2192;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 261, this._ctx);
					}
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 2195;
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
			this.state = 2197;
			this.match(bitmarkParser.BitStillImageFilmLink);
			this.state = 2198;
			this.format2();
			this.state = 2199;
			this.match(bitmarkParser.CL);
			this.state = 2203;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === bitmarkParser.NL) {
				{
				{
				this.state = 2200;
				this.match(bitmarkParser.NL);
				}
				}
				this.state = 2205;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 2213;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 2206;
					this.bitElem();
					this.state = 2210;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 264, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 2207;
							this.match(bitmarkParser.NL);
							}
							}
						}
						this.state = 2212;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 264, this._ctx);
					}
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 2215;
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
			this.state = 2217;
			this.match(bitmarkParser.BitStillImageFilmEmbed);
			this.state = 2218;
			this.format2();
			this.state = 2219;
			this.match(bitmarkParser.CL);
			this.state = 2223;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === bitmarkParser.NL) {
				{
				{
				this.state = 2220;
				this.match(bitmarkParser.NL);
				}
				}
				this.state = 2225;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 2233;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 2226;
					this.bitElem();
					this.state = 2230;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 267, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 2227;
							this.match(bitmarkParser.NL);
							}
							}
						}
						this.state = 2232;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 267, this._ctx);
					}
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 2235;
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
			this.state = 2237;
			this.match(bitmarkParser.BitWebsiteLink);
			this.state = 2238;
			this.format2();
			this.state = 2239;
			this.match(bitmarkParser.CL);
			this.state = 2243;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === bitmarkParser.NL) {
				{
				{
				this.state = 2240;
				this.match(bitmarkParser.NL);
				}
				}
				this.state = 2245;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 2253;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 2246;
					this.bitElem();
					this.state = 2250;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 270, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 2247;
							this.match(bitmarkParser.NL);
							}
							}
						}
						this.state = 2252;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 270, this._ctx);
					}
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 2255;
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
			this.state = 2257;
			this.match(bitmarkParser.BitDocument);
			this.state = 2258;
			this.format2();
			this.state = 2259;
			this.match(bitmarkParser.CL);
			this.state = 2263;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === bitmarkParser.NL) {
				{
				{
				this.state = 2260;
				this.match(bitmarkParser.NL);
				}
				}
				this.state = 2265;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 2273;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 2266;
					this.bitElem();
					this.state = 2270;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 273, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 2267;
							this.match(bitmarkParser.NL);
							}
							}
						}
						this.state = 2272;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 273, this._ctx);
					}
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 2275;
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
			this.state = 2277;
			this.match(bitmarkParser.BitDocumentLink);
			this.state = 2278;
			this.format2();
			this.state = 2279;
			this.match(bitmarkParser.CL);
			this.state = 2283;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === bitmarkParser.NL) {
				{
				{
				this.state = 2280;
				this.match(bitmarkParser.NL);
				}
				}
				this.state = 2285;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 2293;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 2286;
					this.bitElem();
					this.state = 2290;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 276, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 2287;
							this.match(bitmarkParser.NL);
							}
							}
						}
						this.state = 2292;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 276, this._ctx);
					}
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 2295;
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
			this.state = 2297;
			this.match(bitmarkParser.BitDocumentEmbed);
			this.state = 2298;
			this.format2();
			this.state = 2299;
			this.match(bitmarkParser.CL);
			this.state = 2303;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === bitmarkParser.NL) {
				{
				{
				this.state = 2300;
				this.match(bitmarkParser.NL);
				}
				}
				this.state = 2305;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 2313;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 2306;
					this.bitElem();
					this.state = 2310;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 279, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 2307;
							this.match(bitmarkParser.NL);
							}
							}
						}
						this.state = 2312;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 279, this._ctx);
					}
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 2315;
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
			this.state = 2317;
			this.match(bitmarkParser.BitDocumentDownload);
			this.state = 2318;
			this.format2();
			this.state = 2319;
			this.match(bitmarkParser.CL);
			this.state = 2323;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === bitmarkParser.NL) {
				{
				{
				this.state = 2320;
				this.match(bitmarkParser.NL);
				}
				}
				this.state = 2325;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 2333;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 2326;
					this.bitElem();
					this.state = 2330;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 282, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 2327;
							this.match(bitmarkParser.NL);
							}
							}
						}
						this.state = 2332;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 282, this._ctx);
					}
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 2335;
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
			this.state = 2337;
			this.match(bitmarkParser.BitAppLink);
			this.state = 2338;
			this.format2();
			this.state = 2339;
			this.match(bitmarkParser.CL);
			this.state = 2343;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === bitmarkParser.NL) {
				{
				{
				this.state = 2340;
				this.match(bitmarkParser.NL);
				}
				}
				this.state = 2345;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 2353;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 2346;
					this.bitElem();
					this.state = 2350;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 285, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 2347;
							this.match(bitmarkParser.NL);
							}
							}
						}
						this.state = 2352;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 285, this._ctx);
					}
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 2355;
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
			this.state = 2357;
			this.match(bitmarkParser.BitEditorial);
			this.state = 2358;
			this.format2();
			this.state = 2359;
			this.match(bitmarkParser.CL);
			this.state = 2363;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === bitmarkParser.NL) {
				{
				{
				this.state = 2360;
				this.match(bitmarkParser.NL);
				}
				}
				this.state = 2365;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 2373;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 2366;
					this.bitElem();
					this.state = 2370;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 288, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 2367;
							this.match(bitmarkParser.NL);
							}
							}
						}
						this.state = 2372;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 288, this._ctx);
					}
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 2375;
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
	public book_frontispiece(): Book_frontispieceContext {
		let _localctx: Book_frontispieceContext = new Book_frontispieceContext(this._ctx, this.state);
		this.enterRule(_localctx, 182, bitmarkParser.RULE_book_frontispiece);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2377;
			this.match(bitmarkParser.BitBookFrontispiece);
			this.state = 2378;
			this.format();
			this.state = 2379;
			this.match(bitmarkParser.CL);
			this.state = 2383;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === bitmarkParser.NL) {
				{
				{
				this.state = 2380;
				this.match(bitmarkParser.NL);
				}
				}
				this.state = 2385;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 2393;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 2386;
					this.bitElem();
					this.state = 2390;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 291, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 2387;
							this.match(bitmarkParser.NL);
							}
							}
						}
						this.state = 2392;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 291, this._ctx);
					}
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 2395;
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
	public book_title(): Book_titleContext {
		let _localctx: Book_titleContext = new Book_titleContext(this._ctx, this.state);
		this.enterRule(_localctx, 184, bitmarkParser.RULE_book_title);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2397;
			this.match(bitmarkParser.BitBookTitle);
			this.state = 2398;
			this.format();
			this.state = 2399;
			this.match(bitmarkParser.CL);
			this.state = 2403;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === bitmarkParser.NL) {
				{
				{
				this.state = 2400;
				this.match(bitmarkParser.NL);
				}
				}
				this.state = 2405;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 2413;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 2406;
					this.bitElem();
					this.state = 2410;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 294, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 2407;
							this.match(bitmarkParser.NL);
							}
							}
						}
						this.state = 2412;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 294, this._ctx);
					}
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 2415;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 295, this._ctx);
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
	public book_copyright(): Book_copyrightContext {
		let _localctx: Book_copyrightContext = new Book_copyrightContext(this._ctx, this.state);
		this.enterRule(_localctx, 186, bitmarkParser.RULE_book_copyright);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2417;
			this.match(bitmarkParser.BitBookCopyright);
			this.state = 2418;
			this.format();
			this.state = 2419;
			this.match(bitmarkParser.CL);
			this.state = 2423;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === bitmarkParser.NL) {
				{
				{
				this.state = 2420;
				this.match(bitmarkParser.NL);
				}
				}
				this.state = 2425;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 2433;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 2426;
					this.bitElem();
					this.state = 2430;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 297, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 2427;
							this.match(bitmarkParser.NL);
							}
							}
						}
						this.state = 2432;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 297, this._ctx);
					}
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 2435;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 298, this._ctx);
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
	public book_dedication(): Book_dedicationContext {
		let _localctx: Book_dedicationContext = new Book_dedicationContext(this._ctx, this.state);
		this.enterRule(_localctx, 188, bitmarkParser.RULE_book_dedication);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2437;
			this.match(bitmarkParser.BitBookDedication);
			this.state = 2438;
			this.format();
			this.state = 2439;
			this.match(bitmarkParser.CL);
			this.state = 2443;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === bitmarkParser.NL) {
				{
				{
				this.state = 2440;
				this.match(bitmarkParser.NL);
				}
				}
				this.state = 2445;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 2453;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 2446;
					this.bitElem();
					this.state = 2450;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 300, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 2447;
							this.match(bitmarkParser.NL);
							}
							}
						}
						this.state = 2452;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 300, this._ctx);
					}
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 2455;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 301, this._ctx);
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
	public book_forword(): Book_forwordContext {
		let _localctx: Book_forwordContext = new Book_forwordContext(this._ctx, this.state);
		this.enterRule(_localctx, 190, bitmarkParser.RULE_book_forword);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2457;
			this.match(bitmarkParser.BitBookForword);
			this.state = 2458;
			this.format();
			this.state = 2459;
			this.match(bitmarkParser.CL);
			this.state = 2463;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === bitmarkParser.NL) {
				{
				{
				this.state = 2460;
				this.match(bitmarkParser.NL);
				}
				}
				this.state = 2465;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 2473;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 2466;
					this.bitElem();
					this.state = 2470;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 303, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 2467;
							this.match(bitmarkParser.NL);
							}
							}
						}
						this.state = 2472;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 303, this._ctx);
					}
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 2475;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 304, this._ctx);
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
	public book_preface(): Book_prefaceContext {
		let _localctx: Book_prefaceContext = new Book_prefaceContext(this._ctx, this.state);
		this.enterRule(_localctx, 192, bitmarkParser.RULE_book_preface);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2477;
			this.match(bitmarkParser.BitBookPreface);
			this.state = 2478;
			this.format();
			this.state = 2479;
			this.match(bitmarkParser.CL);
			this.state = 2483;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === bitmarkParser.NL) {
				{
				{
				this.state = 2480;
				this.match(bitmarkParser.NL);
				}
				}
				this.state = 2485;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 2493;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 2486;
					this.bitElem();
					this.state = 2490;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 306, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 2487;
							this.match(bitmarkParser.NL);
							}
							}
						}
						this.state = 2492;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 306, this._ctx);
					}
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 2495;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 307, this._ctx);
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
	public book_prologue(): Book_prologueContext {
		let _localctx: Book_prologueContext = new Book_prologueContext(this._ctx, this.state);
		this.enterRule(_localctx, 194, bitmarkParser.RULE_book_prologue);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2497;
			this.match(bitmarkParser.BitBookPrologue);
			this.state = 2498;
			this.format();
			this.state = 2499;
			this.match(bitmarkParser.CL);
			this.state = 2503;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === bitmarkParser.NL) {
				{
				{
				this.state = 2500;
				this.match(bitmarkParser.NL);
				}
				}
				this.state = 2505;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 2513;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 2506;
					this.bitElem();
					this.state = 2510;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 309, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 2507;
							this.match(bitmarkParser.NL);
							}
							}
						}
						this.state = 2512;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 309, this._ctx);
					}
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 2515;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 310, this._ctx);
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
	public book_epilogue(): Book_epilogueContext {
		let _localctx: Book_epilogueContext = new Book_epilogueContext(this._ctx, this.state);
		this.enterRule(_localctx, 196, bitmarkParser.RULE_book_epilogue);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2517;
			this.match(bitmarkParser.BitBookEpilogue);
			this.state = 2518;
			this.format();
			this.state = 2519;
			this.match(bitmarkParser.CL);
			this.state = 2523;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === bitmarkParser.NL) {
				{
				{
				this.state = 2520;
				this.match(bitmarkParser.NL);
				}
				}
				this.state = 2525;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 2533;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 2526;
					this.bitElem();
					this.state = 2530;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 312, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 2527;
							this.match(bitmarkParser.NL);
							}
							}
						}
						this.state = 2532;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 312, this._ctx);
					}
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 2535;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 313, this._ctx);
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
	public book_introduction(): Book_introductionContext {
		let _localctx: Book_introductionContext = new Book_introductionContext(this._ctx, this.state);
		this.enterRule(_localctx, 198, bitmarkParser.RULE_book_introduction);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2537;
			this.match(bitmarkParser.BitBookIntroduction);
			this.state = 2538;
			this.format();
			this.state = 2539;
			this.match(bitmarkParser.CL);
			this.state = 2543;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === bitmarkParser.NL) {
				{
				{
				this.state = 2540;
				this.match(bitmarkParser.NL);
				}
				}
				this.state = 2545;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 2553;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 2546;
					this.bitElem();
					this.state = 2550;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 315, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 2547;
							this.match(bitmarkParser.NL);
							}
							}
						}
						this.state = 2552;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 315, this._ctx);
					}
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 2555;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 316, this._ctx);
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
	public book_inciting_incident(): Book_inciting_incidentContext {
		let _localctx: Book_inciting_incidentContext = new Book_inciting_incidentContext(this._ctx, this.state);
		this.enterRule(_localctx, 200, bitmarkParser.RULE_book_inciting_incident);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2557;
			this.match(bitmarkParser.BitBookIncitingIncident);
			this.state = 2558;
			this.format();
			this.state = 2559;
			this.match(bitmarkParser.CL);
			this.state = 2563;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === bitmarkParser.NL) {
				{
				{
				this.state = 2560;
				this.match(bitmarkParser.NL);
				}
				}
				this.state = 2565;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 2573;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 2566;
					this.bitElem();
					this.state = 2570;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 318, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 2567;
							this.match(bitmarkParser.NL);
							}
							}
						}
						this.state = 2572;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 318, this._ctx);
					}
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 2575;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 319, this._ctx);
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
	public book_conclusion(): Book_conclusionContext {
		let _localctx: Book_conclusionContext = new Book_conclusionContext(this._ctx, this.state);
		this.enterRule(_localctx, 202, bitmarkParser.RULE_book_conclusion);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2577;
			this.match(bitmarkParser.BitBookConclusion);
			this.state = 2578;
			this.format();
			this.state = 2579;
			this.match(bitmarkParser.CL);
			this.state = 2583;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === bitmarkParser.NL) {
				{
				{
				this.state = 2580;
				this.match(bitmarkParser.NL);
				}
				}
				this.state = 2585;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 2593;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 2586;
					this.bitElem();
					this.state = 2590;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 321, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 2587;
							this.match(bitmarkParser.NL);
							}
							}
						}
						this.state = 2592;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 321, this._ctx);
					}
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 2595;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 322, this._ctx);
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
	public book_afterword(): Book_afterwordContext {
		let _localctx: Book_afterwordContext = new Book_afterwordContext(this._ctx, this.state);
		this.enterRule(_localctx, 204, bitmarkParser.RULE_book_afterword);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2597;
			this.match(bitmarkParser.BitBookAfterword);
			this.state = 2598;
			this.format();
			this.state = 2599;
			this.match(bitmarkParser.CL);
			this.state = 2603;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === bitmarkParser.NL) {
				{
				{
				this.state = 2600;
				this.match(bitmarkParser.NL);
				}
				}
				this.state = 2605;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 2613;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 2606;
					this.bitElem();
					this.state = 2610;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 324, this._ctx);
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
						_alt = this.interpreter.adaptivePredict(this._input, 324, this._ctx);
					}
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 2615;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 325, this._ctx);
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
	public book_postscript(): Book_postscriptContext {
		let _localctx: Book_postscriptContext = new Book_postscriptContext(this._ctx, this.state);
		this.enterRule(_localctx, 206, bitmarkParser.RULE_book_postscript);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2617;
			this.match(bitmarkParser.BitBookPostscript);
			this.state = 2618;
			this.format();
			this.state = 2619;
			this.match(bitmarkParser.CL);
			this.state = 2623;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === bitmarkParser.NL) {
				{
				{
				this.state = 2620;
				this.match(bitmarkParser.NL);
				}
				}
				this.state = 2625;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 2633;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 2626;
					this.bitElem();
					this.state = 2630;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 327, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 2627;
							this.match(bitmarkParser.NL);
							}
							}
						}
						this.state = 2632;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 327, this._ctx);
					}
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 2635;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 328, this._ctx);
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
	public book_appendix(): Book_appendixContext {
		let _localctx: Book_appendixContext = new Book_appendixContext(this._ctx, this.state);
		this.enterRule(_localctx, 208, bitmarkParser.RULE_book_appendix);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2637;
			this.match(bitmarkParser.BitBookappendix);
			this.state = 2638;
			this.format();
			this.state = 2639;
			this.match(bitmarkParser.CL);
			this.state = 2643;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === bitmarkParser.NL) {
				{
				{
				this.state = 2640;
				this.match(bitmarkParser.NL);
				}
				}
				this.state = 2645;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 2653;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 2646;
					this.bitElem();
					this.state = 2650;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 330, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 2647;
							this.match(bitmarkParser.NL);
							}
							}
						}
						this.state = 2652;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 330, this._ctx);
					}
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 2655;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 331, this._ctx);
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
	public book_addendum(): Book_addendumContext {
		let _localctx: Book_addendumContext = new Book_addendumContext(this._ctx, this.state);
		this.enterRule(_localctx, 210, bitmarkParser.RULE_book_addendum);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2657;
			this.match(bitmarkParser.BitBookAddendum);
			this.state = 2658;
			this.format();
			this.state = 2659;
			this.match(bitmarkParser.CL);
			this.state = 2663;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === bitmarkParser.NL) {
				{
				{
				this.state = 2660;
				this.match(bitmarkParser.NL);
				}
				}
				this.state = 2665;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 2673;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 2666;
					this.bitElem();
					this.state = 2670;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 333, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 2667;
							this.match(bitmarkParser.NL);
							}
							}
						}
						this.state = 2672;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 333, this._ctx);
					}
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 2675;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 334, this._ctx);
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
	public book_acknowledgments(): Book_acknowledgmentsContext {
		let _localctx: Book_acknowledgmentsContext = new Book_acknowledgmentsContext(this._ctx, this.state);
		this.enterRule(_localctx, 212, bitmarkParser.RULE_book_acknowledgments);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2677;
			this.match(bitmarkParser.BitBookAcknowledgments);
			this.state = 2678;
			this.format();
			this.state = 2679;
			this.match(bitmarkParser.CL);
			this.state = 2683;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === bitmarkParser.NL) {
				{
				{
				this.state = 2680;
				this.match(bitmarkParser.NL);
				}
				}
				this.state = 2685;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 2693;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 2686;
					this.bitElem();
					this.state = 2690;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 336, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 2687;
							this.match(bitmarkParser.NL);
							}
							}
						}
						this.state = 2692;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 336, this._ctx);
					}
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 2695;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 337, this._ctx);
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
	public book_list_of_contributors(): Book_list_of_contributorsContext {
		let _localctx: Book_list_of_contributorsContext = new Book_list_of_contributorsContext(this._ctx, this.state);
		this.enterRule(_localctx, 214, bitmarkParser.RULE_book_list_of_contributors);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2697;
			this.match(bitmarkParser.BitBookListOfContributors);
			this.state = 2698;
			this.format();
			this.state = 2699;
			this.match(bitmarkParser.CL);
			this.state = 2703;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === bitmarkParser.NL) {
				{
				{
				this.state = 2700;
				this.match(bitmarkParser.NL);
				}
				}
				this.state = 2705;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 2713;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 2706;
					this.bitElem();
					this.state = 2710;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 339, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 2707;
							this.match(bitmarkParser.NL);
							}
							}
						}
						this.state = 2712;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 339, this._ctx);
					}
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 2715;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 340, this._ctx);
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
	public book_bibliography(): Book_bibliographyContext {
		let _localctx: Book_bibliographyContext = new Book_bibliographyContext(this._ctx, this.state);
		this.enterRule(_localctx, 216, bitmarkParser.RULE_book_bibliography);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2717;
			this.match(bitmarkParser.BitBookBibliography);
			this.state = 2718;
			this.format();
			this.state = 2719;
			this.match(bitmarkParser.CL);
			this.state = 2723;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === bitmarkParser.NL) {
				{
				{
				this.state = 2720;
				this.match(bitmarkParser.NL);
				}
				}
				this.state = 2725;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 2733;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 2726;
					this.bitElem();
					this.state = 2730;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 342, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 2727;
							this.match(bitmarkParser.NL);
							}
							}
						}
						this.state = 2732;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 342, this._ctx);
					}
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 2735;
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
	public book_reference_list(): Book_reference_listContext {
		let _localctx: Book_reference_listContext = new Book_reference_listContext(this._ctx, this.state);
		this.enterRule(_localctx, 218, bitmarkParser.RULE_book_reference_list);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2737;
			this.match(bitmarkParser.BitBookReferenceList);
			this.state = 2738;
			this.format();
			this.state = 2739;
			this.match(bitmarkParser.CL);
			this.state = 2743;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === bitmarkParser.NL) {
				{
				{
				this.state = 2740;
				this.match(bitmarkParser.NL);
				}
				}
				this.state = 2745;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 2753;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 2746;
					this.bitElem();
					this.state = 2750;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 345, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 2747;
							this.match(bitmarkParser.NL);
							}
							}
						}
						this.state = 2752;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 345, this._ctx);
					}
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 2755;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 346, this._ctx);
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
	public book_endnotes(): Book_endnotesContext {
		let _localctx: Book_endnotesContext = new Book_endnotesContext(this._ctx, this.state);
		this.enterRule(_localctx, 220, bitmarkParser.RULE_book_endnotes);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2757;
			this.match(bitmarkParser.BitBookEndnotes);
			this.state = 2758;
			this.format();
			this.state = 2759;
			this.match(bitmarkParser.CL);
			this.state = 2763;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === bitmarkParser.NL) {
				{
				{
				this.state = 2760;
				this.match(bitmarkParser.NL);
				}
				}
				this.state = 2765;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 2773;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 2766;
					this.bitElem();
					this.state = 2770;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 348, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 2767;
							this.match(bitmarkParser.NL);
							}
							}
						}
						this.state = 2772;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 348, this._ctx);
					}
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 2775;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 349, this._ctx);
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
	public book_notes(): Book_notesContext {
		let _localctx: Book_notesContext = new Book_notesContext(this._ctx, this.state);
		this.enterRule(_localctx, 222, bitmarkParser.RULE_book_notes);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2777;
			this.match(bitmarkParser.BitBookNotes);
			this.state = 2778;
			this.format();
			this.state = 2779;
			this.match(bitmarkParser.CL);
			this.state = 2783;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === bitmarkParser.NL) {
				{
				{
				this.state = 2780;
				this.match(bitmarkParser.NL);
				}
				}
				this.state = 2785;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 2793;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 2786;
					this.bitElem();
					this.state = 2790;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 351, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 2787;
							this.match(bitmarkParser.NL);
							}
							}
						}
						this.state = 2792;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 351, this._ctx);
					}
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 2795;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 352, this._ctx);
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
	public book_copyright_permissions(): Book_copyright_permissionsContext {
		let _localctx: Book_copyright_permissionsContext = new Book_copyright_permissionsContext(this._ctx, this.state);
		this.enterRule(_localctx, 224, bitmarkParser.RULE_book_copyright_permissions);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2797;
			this.match(bitmarkParser.BitBookCopyrightPermissions);
			this.state = 2798;
			this.format();
			this.state = 2799;
			this.match(bitmarkParser.CL);
			this.state = 2803;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === bitmarkParser.NL) {
				{
				{
				this.state = 2800;
				this.match(bitmarkParser.NL);
				}
				}
				this.state = 2805;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 2813;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 2806;
					this.bitElem();
					this.state = 2810;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 354, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 2807;
							this.match(bitmarkParser.NL);
							}
							}
						}
						this.state = 2812;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 354, this._ctx);
					}
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 2815;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 355, this._ctx);
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
	public book_teaser(): Book_teaserContext {
		let _localctx: Book_teaserContext = new Book_teaserContext(this._ctx, this.state);
		this.enterRule(_localctx, 226, bitmarkParser.RULE_book_teaser);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2817;
			this.match(bitmarkParser.BitBookTeaser);
			this.state = 2818;
			this.format();
			this.state = 2819;
			this.match(bitmarkParser.CL);
			this.state = 2823;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === bitmarkParser.NL) {
				{
				{
				this.state = 2820;
				this.match(bitmarkParser.NL);
				}
				}
				this.state = 2825;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 2833;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 2826;
					this.bitElem();
					this.state = 2830;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 357, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 2827;
							this.match(bitmarkParser.NL);
							}
							}
						}
						this.state = 2832;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 357, this._ctx);
					}
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 2835;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 358, this._ctx);
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
	public book_auther_bio(): Book_auther_bioContext {
		let _localctx: Book_auther_bioContext = new Book_auther_bioContext(this._ctx, this.state);
		this.enterRule(_localctx, 228, bitmarkParser.RULE_book_auther_bio);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2837;
			this.match(bitmarkParser.BitBookAutherBio);
			this.state = 2838;
			this.format();
			this.state = 2839;
			this.match(bitmarkParser.CL);
			this.state = 2843;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === bitmarkParser.NL) {
				{
				{
				this.state = 2840;
				this.match(bitmarkParser.NL);
				}
				}
				this.state = 2845;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 2853;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 2846;
					this.bitElem();
					this.state = 2850;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 360, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 2847;
							this.match(bitmarkParser.NL);
							}
							}
						}
						this.state = 2852;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 360, this._ctx);
					}
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 2855;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 361, this._ctx);
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
	public book_request_for_a_book_review(): Book_request_for_a_book_reviewContext {
		let _localctx: Book_request_for_a_book_reviewContext = new Book_request_for_a_book_reviewContext(this._ctx, this.state);
		this.enterRule(_localctx, 230, bitmarkParser.RULE_book_request_for_a_book_review);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2857;
			this.match(bitmarkParser.BitBookRequestForABookReview);
			this.state = 2858;
			this.format();
			this.state = 2859;
			this.match(bitmarkParser.CL);
			this.state = 2863;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === bitmarkParser.NL) {
				{
				{
				this.state = 2860;
				this.match(bitmarkParser.NL);
				}
				}
				this.state = 2865;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 2873;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 2866;
					this.bitElem();
					this.state = 2870;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 363, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 2867;
							this.match(bitmarkParser.NL);
							}
							}
						}
						this.state = 2872;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 363, this._ctx);
					}
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 2875;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 364, this._ctx);
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
	public book_coming_soon(): Book_coming_soonContext {
		let _localctx: Book_coming_soonContext = new Book_coming_soonContext(this._ctx, this.state);
		this.enterRule(_localctx, 232, bitmarkParser.RULE_book_coming_soon);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2877;
			this.match(bitmarkParser.BitBookComingSoon);
			this.state = 2878;
			this.format();
			this.state = 2879;
			this.match(bitmarkParser.CL);
			this.state = 2883;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === bitmarkParser.NL) {
				{
				{
				this.state = 2880;
				this.match(bitmarkParser.NL);
				}
				}
				this.state = 2885;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 2893;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 2886;
					this.bitElem();
					this.state = 2890;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 366, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 2887;
							this.match(bitmarkParser.NL);
							}
							}
						}
						this.state = 2892;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 366, this._ctx);
					}
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 2895;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 367, this._ctx);
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
	public book_read_more(): Book_read_moreContext {
		let _localctx: Book_read_moreContext = new Book_read_moreContext(this._ctx, this.state);
		this.enterRule(_localctx, 234, bitmarkParser.RULE_book_read_more);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2897;
			this.match(bitmarkParser.BitBookReadMore);
			this.state = 2898;
			this.format();
			this.state = 2899;
			this.match(bitmarkParser.CL);
			this.state = 2903;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === bitmarkParser.NL) {
				{
				{
				this.state = 2900;
				this.match(bitmarkParser.NL);
				}
				}
				this.state = 2905;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 2913;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 2906;
					this.bitElem();
					this.state = 2910;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 369, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 2907;
							this.match(bitmarkParser.NL);
							}
							}
						}
						this.state = 2912;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 369, this._ctx);
					}
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 2915;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 370, this._ctx);
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
	public book_summary(): Book_summaryContext {
		let _localctx: Book_summaryContext = new Book_summaryContext(this._ctx, this.state);
		this.enterRule(_localctx, 236, bitmarkParser.RULE_book_summary);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2917;
			this.match(bitmarkParser.BitBookSummary);
			this.state = 2918;
			this.format();
			this.state = 2919;
			this.match(bitmarkParser.CL);
			this.state = 2923;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === bitmarkParser.NL) {
				{
				{
				this.state = 2920;
				this.match(bitmarkParser.NL);
				}
				}
				this.state = 2925;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 2933;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 2926;
					this.bitElem();
					this.state = 2930;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 372, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 2927;
							this.match(bitmarkParser.NL);
							}
							}
						}
						this.state = 2932;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 372, this._ctx);
					}
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 2935;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 373, this._ctx);
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
	public book_epigraph(): Book_epigraphContext {
		let _localctx: Book_epigraphContext = new Book_epigraphContext(this._ctx, this.state);
		this.enterRule(_localctx, 238, bitmarkParser.RULE_book_epigraph);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2937;
			this.match(bitmarkParser.BitBookEpigraph);
			this.state = 2938;
			this.format();
			this.state = 2939;
			this.match(bitmarkParser.CL);
			this.state = 2943;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === bitmarkParser.NL) {
				{
				{
				this.state = 2940;
				this.match(bitmarkParser.NL);
				}
				}
				this.state = 2945;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 2953;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 2946;
					this.bitElem();
					this.state = 2950;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 375, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 2947;
							this.match(bitmarkParser.NL);
							}
							}
						}
						this.state = 2952;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 375, this._ctx);
					}
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 2955;
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
	public message(): MessageContext {
		let _localctx: MessageContext = new MessageContext(this._ctx, this.state);
		this.enterRule(_localctx, 240, bitmarkParser.RULE_message);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2957;
			this.match(bitmarkParser.BitMessage);
			this.state = 2958;
			this.format();
			this.state = 2959;
			this.match(bitmarkParser.CL);
			this.state = 2963;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === bitmarkParser.NL) {
				{
				{
				this.state = 2960;
				this.match(bitmarkParser.NL);
				}
				}
				this.state = 2965;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 2973;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 2966;
					this.bitElem();
					this.state = 2970;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 378, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 2967;
							this.match(bitmarkParser.NL);
							}
							}
						}
						this.state = 2972;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 378, this._ctx);
					}
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 2975;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 379, this._ctx);
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
		this.enterRule(_localctx, 242, bitmarkParser.RULE_bot_interview);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2977;
			this.match(bitmarkParser.BitBotint);
			this.state = 2978;
			this.format();
			this.state = 2979;
			this.match(bitmarkParser.CL);
			this.state = 2990;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 2980;
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
					this.state = 2981;
					this.bot_choice();
					this.state = 2987;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === bitmarkParser.SSPL || _la === bitmarkParser.SSPL2) {
						{
						{
						this.state = 2982;
						this.sspl();
						this.state = 2983;
						this.bot_choice();
						}
						}
						this.state = 2989;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 2992;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 381, this._ctx);
			} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
			this.state = 2994;
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
			this.state = 2998;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 382, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 2995;
					this.match(bitmarkParser.NL);
					}
					}
				}
				this.state = 3000;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 382, this._ctx);
			}
			this.state = 3014;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 385, this._ctx) ) {
			case 1:
				{
				this.state = 3001;
				this.resource();
				this.state = 3011;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 384, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 3005;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						while (_la === bitmarkParser.NL) {
							{
							{
							this.state = 3002;
							this.match(bitmarkParser.NL);
							}
							}
							this.state = 3007;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
						}
						this.state = 3008;
						this.resource();
						}
						}
					}
					this.state = 3013;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 384, this._ctx);
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
		this.enterRule(_localctx, 244, bitmarkParser.RULE_bot_choice);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 3023;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				this.state = 3023;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 386, this._ctx) ) {
				case 1:
					{
					this.state = 3016;
					this.words();
					}
					break;

				case 2:
					{
					this.state = 3017;
					this.instruction();
					}
					break;

				case 3:
					{
					this.state = 3018;
					this.audiobit();
					}
					break;

				case 4:
					{
					this.state = 3019;
					this.gap();
					}
					break;

				case 5:
					{
					this.state = 3020;
					this.choice_plus();
					}
					break;

				case 6:
					{
					this.state = 3021;
					this.choice_minus();
					}
					break;

				case 7:
					{
					this.state = 3022;
					this.choice_star();
					}
					break;
				}
				}
				this.state = 3025;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (((((_la - 131)) & ~0x1F) === 0 && ((1 << (_la - 131)) & ((1 << (bitmarkParser.OPU - 131)) | (1 << (bitmarkParser.OPB - 131)) | (1 << (bitmarkParser.OPP - 131)) | (1 << (bitmarkParser.OPM - 131)) | (1 << (bitmarkParser.OPR - 131)) | (1 << (bitmarkParser.OPC - 131)) | (1 << (bitmarkParser.AMP - 131)) | (1 << (bitmarkParser.Greater - 131)) | (1 << (bitmarkParser.Less - 131)) | (1 << (bitmarkParser.RightAngle - 131)) | (1 << (bitmarkParser.RightArrow - 131)) | (1 << (bitmarkParser.QUOTE_INDEX - 131)))) !== 0) || ((((_la - 163)) & ~0x1F) === 0 && ((1 << (_la - 163)) & ((1 << (bitmarkParser.SENTENCE - 163)) | (1 << (bitmarkParser.AmpAudio - 163)) | (1 << (bitmarkParser.AmpImage - 163)))) !== 0) || ((((_la - 197)) & ~0x1F) === 0 && ((1 << (_la - 197)) & ((1 << (bitmarkParser.AmpVideo - 197)) | (1 << (bitmarkParser.AmpArticle - 197)) | (1 << (bitmarkParser.AmpDocument - 197)) | (1 << (bitmarkParser.AmpApp - 197)) | (1 << (bitmarkParser.AmpWebsite - 197)) | (1 << (bitmarkParser.AmpStillImageFilm - 197)) | (1 << (bitmarkParser.OpAmpAudio - 197)) | (1 << (bitmarkParser.AmpAudioLink - 197)) | (1 << (bitmarkParser.AmpImageLink - 197)) | (1 << (bitmarkParser.AmpVideoLink - 197)) | (1 << (bitmarkParser.AmpArticleLink - 197)) | (1 << (bitmarkParser.AmpDocumentLink - 197)) | (1 << (bitmarkParser.AmpAppLink - 197)) | (1 << (bitmarkParser.AmpWebsiteLink - 197)) | (1 << (bitmarkParser.AmpStillImageFilmLink - 197)) | (1 << (bitmarkParser.OpAmpAudioLink - 197)))) !== 0) || _la === bitmarkParser.BitmarkMinus || _la === bitmarkParser.BitmarkPlus);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 246, bitmarkParser.RULE_rating);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 3027;
			this.match(bitmarkParser.BitRating);
			this.state = 3028;
			this.format();
			this.state = 3029;
			this.match(bitmarkParser.CL);
			this.state = 3033;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === bitmarkParser.NL) {
				{
				{
				this.state = 3030;
				this.match(bitmarkParser.NL);
				}
				}
				this.state = 3035;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 3045;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === bitmarkParser.S || ((((_la - 125)) & ~0x1F) === 0 && ((1 << (_la - 125)) & ((1 << (bitmarkParser.OPDOLL - 125)) | (1 << (bitmarkParser.OPESC - 125)) | (1 << (bitmarkParser.OPRANGLES - 125)) | (1 << (bitmarkParser.OPRANGLEL - 125)) | (1 << (bitmarkParser.OPDANGLE - 125)) | (1 << (bitmarkParser.OPU - 125)) | (1 << (bitmarkParser.OPB - 125)) | (1 << (bitmarkParser.OPQ - 125)) | (1 << (bitmarkParser.OPA - 125)) | (1 << (bitmarkParser.OPS - 125)) | (1 << (bitmarkParser.OPHASH - 125)) | (1 << (bitmarkParser.OPC - 125)) | (1 << (bitmarkParser.COLON - 125)) | (1 << (bitmarkParser.AMP - 125)) | (1 << (bitmarkParser.Greater - 125)) | (1 << (bitmarkParser.Less - 125)) | (1 << (bitmarkParser.RightAngle - 125)) | (1 << (bitmarkParser.RightArrow - 125)) | (1 << (bitmarkParser.DBLEQ - 125)) | (1 << (bitmarkParser.QUOTE_INDEX - 125)))) !== 0) || ((((_la - 157)) & ~0x1F) === 0 && ((1 << (_la - 157)) & ((1 << (bitmarkParser.DCANY - 157)) | (1 << (bitmarkParser.ArticleText - 157)) | (1 << (bitmarkParser.NUMERIC - 157)) | (1 << (bitmarkParser.STRING - 157)) | (1 << (bitmarkParser.SENTENCE - 157)) | (1 << (bitmarkParser.AtProgress - 157)) | (1 << (bitmarkParser.AtReference - 157)) | (1 << (bitmarkParser.AtProgressPoints - 157)) | (1 << (bitmarkParser.AtExampleWithStr - 157)) | (1 << (bitmarkParser.AtExamplecol - 157)) | (1 << (bitmarkParser.AtExamplecl - 157)) | (1 << (bitmarkParser.AtPartialAnswerS - 157)) | (1 << (bitmarkParser.AtPartialAnswer - 157)) | (1 << (bitmarkParser.AtLabeltrue - 157)) | (1 << (bitmarkParser.AtLabelfalse - 157)) | (1 << (bitmarkParser.OpAtCopyright - 157)) | (1 << (bitmarkParser.OpAtIsTracked - 157)))) !== 0) || ((((_la - 189)) & ~0x1F) === 0 && ((1 << (_la - 189)) & ((1 << (bitmarkParser.OpAtIsInfoOnly - 189)) | (1 << (bitmarkParser.AtDate - 189)) | (1 << (bitmarkParser.AmpAudio - 189)) | (1 << (bitmarkParser.AmpImage - 189)) | (1 << (bitmarkParser.AmpVideo - 189)) | (1 << (bitmarkParser.AmpArticle - 189)) | (1 << (bitmarkParser.AmpDocument - 189)) | (1 << (bitmarkParser.AmpApp - 189)) | (1 << (bitmarkParser.AmpWebsite - 189)) | (1 << (bitmarkParser.AmpStillImageFilm - 189)) | (1 << (bitmarkParser.OpAmpAudio - 189)) | (1 << (bitmarkParser.OpAmpImage - 189)) | (1 << (bitmarkParser.OpAmpImageZoom - 189)) | (1 << (bitmarkParser.OpAmpImageWAudio - 189)) | (1 << (bitmarkParser.OpAmpVideo - 189)) | (1 << (bitmarkParser.OpAmpArticle - 189)) | (1 << (bitmarkParser.OpAmpDocument - 189)) | (1 << (bitmarkParser.OpAmpApp - 189)) | (1 << (bitmarkParser.OpAmpWebsite - 189)) | (1 << (bitmarkParser.OpAmpStillImageFilm - 189)) | (1 << (bitmarkParser.BracEnclose - 189)) | (1 << (bitmarkParser.AmpAudioLink - 189)) | (1 << (bitmarkParser.AmpImageLink - 189)) | (1 << (bitmarkParser.AmpVideoLink - 189)) | (1 << (bitmarkParser.AmpArticleLink - 189)) | (1 << (bitmarkParser.AmpDocumentLink - 189)))) !== 0) || ((((_la - 221)) & ~0x1F) === 0 && ((1 << (_la - 221)) & ((1 << (bitmarkParser.AmpAppLink - 221)) | (1 << (bitmarkParser.AmpWebsiteLink - 221)) | (1 << (bitmarkParser.AmpStillImageFilmLink - 221)) | (1 << (bitmarkParser.OpAmpAudioLink - 221)) | (1 << (bitmarkParser.OpAmpImageLink - 221)) | (1 << (bitmarkParser.OpAmpVideoLink - 221)) | (1 << (bitmarkParser.OpAmpArticleLink - 221)) | (1 << (bitmarkParser.OpAmpDocumentLink - 221)) | (1 << (bitmarkParser.OpAmpAppLink - 221)) | (1 << (bitmarkParser.OpAmpWebsiteLink - 221)) | (1 << (bitmarkParser.OpAmpStillImageFilmLink - 221)) | (1 << (bitmarkParser.BitmarkMinus - 221)) | (1 << (bitmarkParser.BitmarkPlus - 221)) | (1 << (bitmarkParser.URL - 221)))) !== 0) || _la === bitmarkParser.LIST_LINE) {
				{
				{
				this.state = 3036;
				this.bitElem();
				this.state = 3040;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === bitmarkParser.NL) {
					{
					{
					this.state = 3037;
					this.match(bitmarkParser.NL);
					}
					}
					this.state = 3042;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
				}
				this.state = 3047;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 3056;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 3048;
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
					this.state = 3049;
					this.s_and_w();
					this.state = 3052;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					do {
						{
						{
						this.state = 3050;
						this.match(bitmarkParser.NL);
						this.state = 3051;
						this.bullet_item();
						}
						}
						this.state = 3054;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					} while (_la === bitmarkParser.NL);
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 3058;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 392, this._ctx);
			} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
			this.state = 3060;
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
			this.state = 3064;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 393, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 3061;
					this.match(bitmarkParser.NL);
					}
					}
				}
				this.state = 3066;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 393, this._ctx);
			}
			this.state = 3080;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 396, this._ctx) ) {
			case 1:
				{
				this.state = 3067;
				this.resource();
				this.state = 3077;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 395, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 3071;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						while (_la === bitmarkParser.NL) {
							{
							{
							this.state = 3068;
							this.match(bitmarkParser.NL);
							}
							}
							this.state = 3073;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
						}
						this.state = 3074;
						this.resource();
						}
						}
					}
					this.state = 3079;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 395, this._ctx);
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
		this.enterRule(_localctx, 248, bitmarkParser.RULE_bullet_item);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 3082;
			this.match(bitmarkParser.OPBUL);
			this.state = 3083;
			this.s_and_w();
			this.state = 3084;
			this.match(bitmarkParser.CL);
			this.state = 3086;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === bitmarkParser.AtPoints) {
				{
				this.state = 3085;
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
		this.enterRule(_localctx, 250, bitmarkParser.RULE_survey);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 3088;
			this.match(bitmarkParser.BitSurvey);
			this.state = 3089;
			this.format();
			this.state = 3090;
			this.match(bitmarkParser.CL);
			this.state = 3094;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === bitmarkParser.NL) {
				{
				{
				this.state = 3091;
				this.match(bitmarkParser.NL);
				}
				}
				this.state = 3096;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 3106;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === bitmarkParser.S || ((((_la - 125)) & ~0x1F) === 0 && ((1 << (_la - 125)) & ((1 << (bitmarkParser.OPDOLL - 125)) | (1 << (bitmarkParser.OPESC - 125)) | (1 << (bitmarkParser.OPRANGLES - 125)) | (1 << (bitmarkParser.OPRANGLEL - 125)) | (1 << (bitmarkParser.OPDANGLE - 125)) | (1 << (bitmarkParser.OPU - 125)) | (1 << (bitmarkParser.OPB - 125)) | (1 << (bitmarkParser.OPQ - 125)) | (1 << (bitmarkParser.OPA - 125)) | (1 << (bitmarkParser.OPS - 125)) | (1 << (bitmarkParser.OPHASH - 125)) | (1 << (bitmarkParser.OPC - 125)) | (1 << (bitmarkParser.COLON - 125)) | (1 << (bitmarkParser.AMP - 125)) | (1 << (bitmarkParser.Greater - 125)) | (1 << (bitmarkParser.Less - 125)) | (1 << (bitmarkParser.RightAngle - 125)) | (1 << (bitmarkParser.RightArrow - 125)) | (1 << (bitmarkParser.DBLEQ - 125)) | (1 << (bitmarkParser.QUOTE_INDEX - 125)))) !== 0) || ((((_la - 157)) & ~0x1F) === 0 && ((1 << (_la - 157)) & ((1 << (bitmarkParser.DCANY - 157)) | (1 << (bitmarkParser.ArticleText - 157)) | (1 << (bitmarkParser.NUMERIC - 157)) | (1 << (bitmarkParser.STRING - 157)) | (1 << (bitmarkParser.SENTENCE - 157)) | (1 << (bitmarkParser.AtProgress - 157)) | (1 << (bitmarkParser.AtReference - 157)) | (1 << (bitmarkParser.AtProgressPoints - 157)) | (1 << (bitmarkParser.AtExampleWithStr - 157)) | (1 << (bitmarkParser.AtExamplecol - 157)) | (1 << (bitmarkParser.AtExamplecl - 157)) | (1 << (bitmarkParser.AtPartialAnswerS - 157)) | (1 << (bitmarkParser.AtPartialAnswer - 157)) | (1 << (bitmarkParser.AtLabeltrue - 157)) | (1 << (bitmarkParser.AtLabelfalse - 157)) | (1 << (bitmarkParser.OpAtCopyright - 157)) | (1 << (bitmarkParser.OpAtIsTracked - 157)))) !== 0) || ((((_la - 189)) & ~0x1F) === 0 && ((1 << (_la - 189)) & ((1 << (bitmarkParser.OpAtIsInfoOnly - 189)) | (1 << (bitmarkParser.AtDate - 189)) | (1 << (bitmarkParser.AmpAudio - 189)) | (1 << (bitmarkParser.AmpImage - 189)) | (1 << (bitmarkParser.AmpVideo - 189)) | (1 << (bitmarkParser.AmpArticle - 189)) | (1 << (bitmarkParser.AmpDocument - 189)) | (1 << (bitmarkParser.AmpApp - 189)) | (1 << (bitmarkParser.AmpWebsite - 189)) | (1 << (bitmarkParser.AmpStillImageFilm - 189)) | (1 << (bitmarkParser.OpAmpAudio - 189)) | (1 << (bitmarkParser.OpAmpImage - 189)) | (1 << (bitmarkParser.OpAmpImageZoom - 189)) | (1 << (bitmarkParser.OpAmpImageWAudio - 189)) | (1 << (bitmarkParser.OpAmpVideo - 189)) | (1 << (bitmarkParser.OpAmpArticle - 189)) | (1 << (bitmarkParser.OpAmpDocument - 189)) | (1 << (bitmarkParser.OpAmpApp - 189)) | (1 << (bitmarkParser.OpAmpWebsite - 189)) | (1 << (bitmarkParser.OpAmpStillImageFilm - 189)) | (1 << (bitmarkParser.BracEnclose - 189)) | (1 << (bitmarkParser.AmpAudioLink - 189)) | (1 << (bitmarkParser.AmpImageLink - 189)) | (1 << (bitmarkParser.AmpVideoLink - 189)) | (1 << (bitmarkParser.AmpArticleLink - 189)) | (1 << (bitmarkParser.AmpDocumentLink - 189)))) !== 0) || ((((_la - 221)) & ~0x1F) === 0 && ((1 << (_la - 221)) & ((1 << (bitmarkParser.AmpAppLink - 221)) | (1 << (bitmarkParser.AmpWebsiteLink - 221)) | (1 << (bitmarkParser.AmpStillImageFilmLink - 221)) | (1 << (bitmarkParser.OpAmpAudioLink - 221)) | (1 << (bitmarkParser.OpAmpImageLink - 221)) | (1 << (bitmarkParser.OpAmpVideoLink - 221)) | (1 << (bitmarkParser.OpAmpArticleLink - 221)) | (1 << (bitmarkParser.OpAmpDocumentLink - 221)) | (1 << (bitmarkParser.OpAmpAppLink - 221)) | (1 << (bitmarkParser.OpAmpWebsiteLink - 221)) | (1 << (bitmarkParser.OpAmpStillImageFilmLink - 221)) | (1 << (bitmarkParser.BitmarkMinus - 221)) | (1 << (bitmarkParser.BitmarkPlus - 221)) | (1 << (bitmarkParser.URL - 221)))) !== 0) || _la === bitmarkParser.LIST_LINE) {
				{
				{
				this.state = 3097;
				this.bitElem();
				this.state = 3101;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === bitmarkParser.NL) {
					{
					{
					this.state = 3098;
					this.match(bitmarkParser.NL);
					}
					}
					this.state = 3103;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
				}
				this.state = 3108;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 3124;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 3109;
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
					this.state = 3111;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === bitmarkParser.S || ((((_la - 127)) & ~0x1F) === 0 && ((1 << (_la - 127)) & ((1 << (bitmarkParser.OPESC - 127)) | (1 << (bitmarkParser.OPS - 127)) | (1 << (bitmarkParser.COLON - 127)) | (1 << (bitmarkParser.AMP - 127)) | (1 << (bitmarkParser.Greater - 127)) | (1 << (bitmarkParser.Less - 127)) | (1 << (bitmarkParser.RightAngle - 127)) | (1 << (bitmarkParser.RightArrow - 127)) | (1 << (bitmarkParser.DBLEQ - 127)) | (1 << (bitmarkParser.QUOTE_INDEX - 127)))) !== 0) || ((((_la - 160)) & ~0x1F) === 0 && ((1 << (_la - 160)) & ((1 << (bitmarkParser.NUMERIC - 160)) | (1 << (bitmarkParser.STRING - 160)) | (1 << (bitmarkParser.SENTENCE - 160)))) !== 0) || ((((_la - 193)) & ~0x1F) === 0 && ((1 << (_la - 193)) & ((1 << (bitmarkParser.AmpAudio - 193)) | (1 << (bitmarkParser.AmpImage - 193)) | (1 << (bitmarkParser.AmpVideo - 193)) | (1 << (bitmarkParser.AmpArticle - 193)) | (1 << (bitmarkParser.AmpDocument - 193)) | (1 << (bitmarkParser.AmpApp - 193)) | (1 << (bitmarkParser.AmpWebsite - 193)) | (1 << (bitmarkParser.AmpStillImageFilm - 193)) | (1 << (bitmarkParser.AmpAudioLink - 193)) | (1 << (bitmarkParser.AmpImageLink - 193)) | (1 << (bitmarkParser.AmpVideoLink - 193)) | (1 << (bitmarkParser.AmpArticleLink - 193)) | (1 << (bitmarkParser.AmpDocumentLink - 193)) | (1 << (bitmarkParser.AmpAppLink - 193)) | (1 << (bitmarkParser.AmpWebsiteLink - 193)) | (1 << (bitmarkParser.AmpStillImageFilmLink - 193)))) !== 0) || ((((_la - 232)) & ~0x1F) === 0 && ((1 << (_la - 232)) & ((1 << (bitmarkParser.BitmarkMinus - 232)) | (1 << (bitmarkParser.BitmarkPlus - 232)) | (1 << (bitmarkParser.URL - 232)))) !== 0)) {
						{
						this.state = 3110;
						this.s_and_w();
						}
					}

					this.state = 3120;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					do {
						{
						{
						this.state = 3116;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						while (_la === bitmarkParser.NL) {
							{
							{
							this.state = 3113;
							this.match(bitmarkParser.NL);
							}
							}
							this.state = 3118;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
						}
						this.state = 3119;
						this.bullet_item();
						}
						}
						this.state = 3122;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					} while (_la === bitmarkParser.OPBUL || _la === bitmarkParser.NL);
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 3126;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 404, this._ctx);
			} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
			this.state = 3128;
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
		this.enterRule(_localctx, 252, bitmarkParser.RULE_survey_1);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 3130;
			this.match(bitmarkParser.BitSurvey1);
			this.state = 3131;
			this.format();
			this.state = 3132;
			this.match(bitmarkParser.CL);
			this.state = 3136;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === bitmarkParser.NL) {
				{
				{
				this.state = 3133;
				this.match(bitmarkParser.NL);
				}
				}
				this.state = 3138;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 3148;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === bitmarkParser.S || ((((_la - 125)) & ~0x1F) === 0 && ((1 << (_la - 125)) & ((1 << (bitmarkParser.OPDOLL - 125)) | (1 << (bitmarkParser.OPESC - 125)) | (1 << (bitmarkParser.OPRANGLES - 125)) | (1 << (bitmarkParser.OPRANGLEL - 125)) | (1 << (bitmarkParser.OPDANGLE - 125)) | (1 << (bitmarkParser.OPU - 125)) | (1 << (bitmarkParser.OPB - 125)) | (1 << (bitmarkParser.OPQ - 125)) | (1 << (bitmarkParser.OPA - 125)) | (1 << (bitmarkParser.OPS - 125)) | (1 << (bitmarkParser.OPHASH - 125)) | (1 << (bitmarkParser.OPC - 125)) | (1 << (bitmarkParser.COLON - 125)) | (1 << (bitmarkParser.AMP - 125)) | (1 << (bitmarkParser.Greater - 125)) | (1 << (bitmarkParser.Less - 125)) | (1 << (bitmarkParser.RightAngle - 125)) | (1 << (bitmarkParser.RightArrow - 125)) | (1 << (bitmarkParser.DBLEQ - 125)) | (1 << (bitmarkParser.QUOTE_INDEX - 125)))) !== 0) || ((((_la - 157)) & ~0x1F) === 0 && ((1 << (_la - 157)) & ((1 << (bitmarkParser.DCANY - 157)) | (1 << (bitmarkParser.ArticleText - 157)) | (1 << (bitmarkParser.NUMERIC - 157)) | (1 << (bitmarkParser.STRING - 157)) | (1 << (bitmarkParser.SENTENCE - 157)) | (1 << (bitmarkParser.AtProgress - 157)) | (1 << (bitmarkParser.AtReference - 157)) | (1 << (bitmarkParser.AtProgressPoints - 157)) | (1 << (bitmarkParser.AtExampleWithStr - 157)) | (1 << (bitmarkParser.AtExamplecol - 157)) | (1 << (bitmarkParser.AtExamplecl - 157)) | (1 << (bitmarkParser.AtPartialAnswerS - 157)) | (1 << (bitmarkParser.AtPartialAnswer - 157)) | (1 << (bitmarkParser.AtLabeltrue - 157)) | (1 << (bitmarkParser.AtLabelfalse - 157)) | (1 << (bitmarkParser.OpAtCopyright - 157)) | (1 << (bitmarkParser.OpAtIsTracked - 157)))) !== 0) || ((((_la - 189)) & ~0x1F) === 0 && ((1 << (_la - 189)) & ((1 << (bitmarkParser.OpAtIsInfoOnly - 189)) | (1 << (bitmarkParser.AtDate - 189)) | (1 << (bitmarkParser.AmpAudio - 189)) | (1 << (bitmarkParser.AmpImage - 189)) | (1 << (bitmarkParser.AmpVideo - 189)) | (1 << (bitmarkParser.AmpArticle - 189)) | (1 << (bitmarkParser.AmpDocument - 189)) | (1 << (bitmarkParser.AmpApp - 189)) | (1 << (bitmarkParser.AmpWebsite - 189)) | (1 << (bitmarkParser.AmpStillImageFilm - 189)) | (1 << (bitmarkParser.OpAmpAudio - 189)) | (1 << (bitmarkParser.OpAmpImage - 189)) | (1 << (bitmarkParser.OpAmpImageZoom - 189)) | (1 << (bitmarkParser.OpAmpImageWAudio - 189)) | (1 << (bitmarkParser.OpAmpVideo - 189)) | (1 << (bitmarkParser.OpAmpArticle - 189)) | (1 << (bitmarkParser.OpAmpDocument - 189)) | (1 << (bitmarkParser.OpAmpApp - 189)) | (1 << (bitmarkParser.OpAmpWebsite - 189)) | (1 << (bitmarkParser.OpAmpStillImageFilm - 189)) | (1 << (bitmarkParser.BracEnclose - 189)) | (1 << (bitmarkParser.AmpAudioLink - 189)) | (1 << (bitmarkParser.AmpImageLink - 189)) | (1 << (bitmarkParser.AmpVideoLink - 189)) | (1 << (bitmarkParser.AmpArticleLink - 189)) | (1 << (bitmarkParser.AmpDocumentLink - 189)))) !== 0) || ((((_la - 221)) & ~0x1F) === 0 && ((1 << (_la - 221)) & ((1 << (bitmarkParser.AmpAppLink - 221)) | (1 << (bitmarkParser.AmpWebsiteLink - 221)) | (1 << (bitmarkParser.AmpStillImageFilmLink - 221)) | (1 << (bitmarkParser.OpAmpAudioLink - 221)) | (1 << (bitmarkParser.OpAmpImageLink - 221)) | (1 << (bitmarkParser.OpAmpVideoLink - 221)) | (1 << (bitmarkParser.OpAmpArticleLink - 221)) | (1 << (bitmarkParser.OpAmpDocumentLink - 221)) | (1 << (bitmarkParser.OpAmpAppLink - 221)) | (1 << (bitmarkParser.OpAmpWebsiteLink - 221)) | (1 << (bitmarkParser.OpAmpStillImageFilmLink - 221)) | (1 << (bitmarkParser.BitmarkMinus - 221)) | (1 << (bitmarkParser.BitmarkPlus - 221)) | (1 << (bitmarkParser.URL - 221)))) !== 0) || _la === bitmarkParser.LIST_LINE) {
				{
				{
				this.state = 3139;
				this.bitElem();
				this.state = 3143;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === bitmarkParser.NL) {
					{
					{
					this.state = 3140;
					this.match(bitmarkParser.NL);
					}
					}
					this.state = 3145;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
				}
				this.state = 3150;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 3159;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 3151;
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
					this.state = 3152;
					this.s_and_w();
					this.state = 3155;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					do {
						{
						{
						this.state = 3153;
						this.match(bitmarkParser.NL);
						this.state = 3154;
						this.bullet_item();
						}
						}
						this.state = 3157;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					} while (_la === bitmarkParser.NL);
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 3161;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 409, this._ctx);
			} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
			this.state = 3163;
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
		this.enterRule(_localctx, 254, bitmarkParser.RULE_survey_anonymous);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 3165;
			this.match(bitmarkParser.BitSurveyanon);
			this.state = 3166;
			this.format();
			this.state = 3167;
			this.match(bitmarkParser.CL);
			this.state = 3171;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === bitmarkParser.NL) {
				{
				{
				this.state = 3168;
				this.match(bitmarkParser.NL);
				}
				}
				this.state = 3173;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 3183;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === bitmarkParser.S || ((((_la - 125)) & ~0x1F) === 0 && ((1 << (_la - 125)) & ((1 << (bitmarkParser.OPDOLL - 125)) | (1 << (bitmarkParser.OPESC - 125)) | (1 << (bitmarkParser.OPRANGLES - 125)) | (1 << (bitmarkParser.OPRANGLEL - 125)) | (1 << (bitmarkParser.OPDANGLE - 125)) | (1 << (bitmarkParser.OPU - 125)) | (1 << (bitmarkParser.OPB - 125)) | (1 << (bitmarkParser.OPQ - 125)) | (1 << (bitmarkParser.OPA - 125)) | (1 << (bitmarkParser.OPS - 125)) | (1 << (bitmarkParser.OPHASH - 125)) | (1 << (bitmarkParser.OPC - 125)) | (1 << (bitmarkParser.COLON - 125)) | (1 << (bitmarkParser.AMP - 125)) | (1 << (bitmarkParser.Greater - 125)) | (1 << (bitmarkParser.Less - 125)) | (1 << (bitmarkParser.RightAngle - 125)) | (1 << (bitmarkParser.RightArrow - 125)) | (1 << (bitmarkParser.DBLEQ - 125)) | (1 << (bitmarkParser.QUOTE_INDEX - 125)))) !== 0) || ((((_la - 157)) & ~0x1F) === 0 && ((1 << (_la - 157)) & ((1 << (bitmarkParser.DCANY - 157)) | (1 << (bitmarkParser.ArticleText - 157)) | (1 << (bitmarkParser.NUMERIC - 157)) | (1 << (bitmarkParser.STRING - 157)) | (1 << (bitmarkParser.SENTENCE - 157)) | (1 << (bitmarkParser.AtProgress - 157)) | (1 << (bitmarkParser.AtReference - 157)) | (1 << (bitmarkParser.AtProgressPoints - 157)) | (1 << (bitmarkParser.AtExampleWithStr - 157)) | (1 << (bitmarkParser.AtExamplecol - 157)) | (1 << (bitmarkParser.AtExamplecl - 157)) | (1 << (bitmarkParser.AtPartialAnswerS - 157)) | (1 << (bitmarkParser.AtPartialAnswer - 157)) | (1 << (bitmarkParser.AtLabeltrue - 157)) | (1 << (bitmarkParser.AtLabelfalse - 157)) | (1 << (bitmarkParser.OpAtCopyright - 157)) | (1 << (bitmarkParser.OpAtIsTracked - 157)))) !== 0) || ((((_la - 189)) & ~0x1F) === 0 && ((1 << (_la - 189)) & ((1 << (bitmarkParser.OpAtIsInfoOnly - 189)) | (1 << (bitmarkParser.AtDate - 189)) | (1 << (bitmarkParser.AmpAudio - 189)) | (1 << (bitmarkParser.AmpImage - 189)) | (1 << (bitmarkParser.AmpVideo - 189)) | (1 << (bitmarkParser.AmpArticle - 189)) | (1 << (bitmarkParser.AmpDocument - 189)) | (1 << (bitmarkParser.AmpApp - 189)) | (1 << (bitmarkParser.AmpWebsite - 189)) | (1 << (bitmarkParser.AmpStillImageFilm - 189)) | (1 << (bitmarkParser.OpAmpAudio - 189)) | (1 << (bitmarkParser.OpAmpImage - 189)) | (1 << (bitmarkParser.OpAmpImageZoom - 189)) | (1 << (bitmarkParser.OpAmpImageWAudio - 189)) | (1 << (bitmarkParser.OpAmpVideo - 189)) | (1 << (bitmarkParser.OpAmpArticle - 189)) | (1 << (bitmarkParser.OpAmpDocument - 189)) | (1 << (bitmarkParser.OpAmpApp - 189)) | (1 << (bitmarkParser.OpAmpWebsite - 189)) | (1 << (bitmarkParser.OpAmpStillImageFilm - 189)) | (1 << (bitmarkParser.BracEnclose - 189)) | (1 << (bitmarkParser.AmpAudioLink - 189)) | (1 << (bitmarkParser.AmpImageLink - 189)) | (1 << (bitmarkParser.AmpVideoLink - 189)) | (1 << (bitmarkParser.AmpArticleLink - 189)) | (1 << (bitmarkParser.AmpDocumentLink - 189)))) !== 0) || ((((_la - 221)) & ~0x1F) === 0 && ((1 << (_la - 221)) & ((1 << (bitmarkParser.AmpAppLink - 221)) | (1 << (bitmarkParser.AmpWebsiteLink - 221)) | (1 << (bitmarkParser.AmpStillImageFilmLink - 221)) | (1 << (bitmarkParser.OpAmpAudioLink - 221)) | (1 << (bitmarkParser.OpAmpImageLink - 221)) | (1 << (bitmarkParser.OpAmpVideoLink - 221)) | (1 << (bitmarkParser.OpAmpArticleLink - 221)) | (1 << (bitmarkParser.OpAmpDocumentLink - 221)) | (1 << (bitmarkParser.OpAmpAppLink - 221)) | (1 << (bitmarkParser.OpAmpWebsiteLink - 221)) | (1 << (bitmarkParser.OpAmpStillImageFilmLink - 221)) | (1 << (bitmarkParser.BitmarkMinus - 221)) | (1 << (bitmarkParser.BitmarkPlus - 221)) | (1 << (bitmarkParser.URL - 221)))) !== 0) || _la === bitmarkParser.LIST_LINE) {
				{
				{
				this.state = 3174;
				this.bitElem();
				this.state = 3178;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === bitmarkParser.NL) {
					{
					{
					this.state = 3175;
					this.match(bitmarkParser.NL);
					}
					}
					this.state = 3180;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
				}
				this.state = 3185;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 3194;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 3186;
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
					this.state = 3187;
					this.s_and_w();
					this.state = 3190;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					do {
						{
						{
						this.state = 3188;
						this.match(bitmarkParser.NL);
						this.state = 3189;
						this.bullet_item();
						}
						}
						this.state = 3192;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					} while (_la === bitmarkParser.NL);
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 3196;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 414, this._ctx);
			} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
			this.state = 3198;
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
		this.enterRule(_localctx, 256, bitmarkParser.RULE_survey_anonymous_1);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 3200;
			this.match(bitmarkParser.BitSurveyanon1);
			this.state = 3201;
			this.format();
			this.state = 3202;
			this.match(bitmarkParser.CL);
			this.state = 3206;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === bitmarkParser.NL) {
				{
				{
				this.state = 3203;
				this.match(bitmarkParser.NL);
				}
				}
				this.state = 3208;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 3218;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === bitmarkParser.S || ((((_la - 125)) & ~0x1F) === 0 && ((1 << (_la - 125)) & ((1 << (bitmarkParser.OPDOLL - 125)) | (1 << (bitmarkParser.OPESC - 125)) | (1 << (bitmarkParser.OPRANGLES - 125)) | (1 << (bitmarkParser.OPRANGLEL - 125)) | (1 << (bitmarkParser.OPDANGLE - 125)) | (1 << (bitmarkParser.OPU - 125)) | (1 << (bitmarkParser.OPB - 125)) | (1 << (bitmarkParser.OPQ - 125)) | (1 << (bitmarkParser.OPA - 125)) | (1 << (bitmarkParser.OPS - 125)) | (1 << (bitmarkParser.OPHASH - 125)) | (1 << (bitmarkParser.OPC - 125)) | (1 << (bitmarkParser.COLON - 125)) | (1 << (bitmarkParser.AMP - 125)) | (1 << (bitmarkParser.Greater - 125)) | (1 << (bitmarkParser.Less - 125)) | (1 << (bitmarkParser.RightAngle - 125)) | (1 << (bitmarkParser.RightArrow - 125)) | (1 << (bitmarkParser.DBLEQ - 125)) | (1 << (bitmarkParser.QUOTE_INDEX - 125)))) !== 0) || ((((_la - 157)) & ~0x1F) === 0 && ((1 << (_la - 157)) & ((1 << (bitmarkParser.DCANY - 157)) | (1 << (bitmarkParser.ArticleText - 157)) | (1 << (bitmarkParser.NUMERIC - 157)) | (1 << (bitmarkParser.STRING - 157)) | (1 << (bitmarkParser.SENTENCE - 157)) | (1 << (bitmarkParser.AtProgress - 157)) | (1 << (bitmarkParser.AtReference - 157)) | (1 << (bitmarkParser.AtProgressPoints - 157)) | (1 << (bitmarkParser.AtExampleWithStr - 157)) | (1 << (bitmarkParser.AtExamplecol - 157)) | (1 << (bitmarkParser.AtExamplecl - 157)) | (1 << (bitmarkParser.AtPartialAnswerS - 157)) | (1 << (bitmarkParser.AtPartialAnswer - 157)) | (1 << (bitmarkParser.AtLabeltrue - 157)) | (1 << (bitmarkParser.AtLabelfalse - 157)) | (1 << (bitmarkParser.OpAtCopyright - 157)) | (1 << (bitmarkParser.OpAtIsTracked - 157)))) !== 0) || ((((_la - 189)) & ~0x1F) === 0 && ((1 << (_la - 189)) & ((1 << (bitmarkParser.OpAtIsInfoOnly - 189)) | (1 << (bitmarkParser.AtDate - 189)) | (1 << (bitmarkParser.AmpAudio - 189)) | (1 << (bitmarkParser.AmpImage - 189)) | (1 << (bitmarkParser.AmpVideo - 189)) | (1 << (bitmarkParser.AmpArticle - 189)) | (1 << (bitmarkParser.AmpDocument - 189)) | (1 << (bitmarkParser.AmpApp - 189)) | (1 << (bitmarkParser.AmpWebsite - 189)) | (1 << (bitmarkParser.AmpStillImageFilm - 189)) | (1 << (bitmarkParser.OpAmpAudio - 189)) | (1 << (bitmarkParser.OpAmpImage - 189)) | (1 << (bitmarkParser.OpAmpImageZoom - 189)) | (1 << (bitmarkParser.OpAmpImageWAudio - 189)) | (1 << (bitmarkParser.OpAmpVideo - 189)) | (1 << (bitmarkParser.OpAmpArticle - 189)) | (1 << (bitmarkParser.OpAmpDocument - 189)) | (1 << (bitmarkParser.OpAmpApp - 189)) | (1 << (bitmarkParser.OpAmpWebsite - 189)) | (1 << (bitmarkParser.OpAmpStillImageFilm - 189)) | (1 << (bitmarkParser.BracEnclose - 189)) | (1 << (bitmarkParser.AmpAudioLink - 189)) | (1 << (bitmarkParser.AmpImageLink - 189)) | (1 << (bitmarkParser.AmpVideoLink - 189)) | (1 << (bitmarkParser.AmpArticleLink - 189)) | (1 << (bitmarkParser.AmpDocumentLink - 189)))) !== 0) || ((((_la - 221)) & ~0x1F) === 0 && ((1 << (_la - 221)) & ((1 << (bitmarkParser.AmpAppLink - 221)) | (1 << (bitmarkParser.AmpWebsiteLink - 221)) | (1 << (bitmarkParser.AmpStillImageFilmLink - 221)) | (1 << (bitmarkParser.OpAmpAudioLink - 221)) | (1 << (bitmarkParser.OpAmpImageLink - 221)) | (1 << (bitmarkParser.OpAmpVideoLink - 221)) | (1 << (bitmarkParser.OpAmpArticleLink - 221)) | (1 << (bitmarkParser.OpAmpDocumentLink - 221)) | (1 << (bitmarkParser.OpAmpAppLink - 221)) | (1 << (bitmarkParser.OpAmpWebsiteLink - 221)) | (1 << (bitmarkParser.OpAmpStillImageFilmLink - 221)) | (1 << (bitmarkParser.BitmarkMinus - 221)) | (1 << (bitmarkParser.BitmarkPlus - 221)) | (1 << (bitmarkParser.URL - 221)))) !== 0) || _la === bitmarkParser.LIST_LINE) {
				{
				{
				this.state = 3209;
				this.bitElem();
				this.state = 3213;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === bitmarkParser.NL) {
					{
					{
					this.state = 3210;
					this.match(bitmarkParser.NL);
					}
					}
					this.state = 3215;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
				}
				this.state = 3220;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 3229;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 3221;
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
					this.state = 3222;
					this.s_and_w();
					this.state = 3225;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					do {
						{
						{
						this.state = 3223;
						this.match(bitmarkParser.NL);
						this.state = 3224;
						this.bullet_item();
						}
						}
						this.state = 3227;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					} while (_la === bitmarkParser.NL);
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 3231;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 419, this._ctx);
			} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
			this.state = 3233;
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
		this.enterRule(_localctx, 258, bitmarkParser.RULE_self_assessment);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 3235;
			this.match(bitmarkParser.BitSelfassess);
			this.state = 3236;
			this.format();
			this.state = 3237;
			this.match(bitmarkParser.CL);
			this.state = 3241;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === bitmarkParser.NL) {
				{
				{
				this.state = 3238;
				this.match(bitmarkParser.NL);
				}
				}
				this.state = 3243;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 3253;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === bitmarkParser.S || ((((_la - 125)) & ~0x1F) === 0 && ((1 << (_la - 125)) & ((1 << (bitmarkParser.OPDOLL - 125)) | (1 << (bitmarkParser.OPESC - 125)) | (1 << (bitmarkParser.OPRANGLES - 125)) | (1 << (bitmarkParser.OPRANGLEL - 125)) | (1 << (bitmarkParser.OPDANGLE - 125)) | (1 << (bitmarkParser.OPU - 125)) | (1 << (bitmarkParser.OPB - 125)) | (1 << (bitmarkParser.OPQ - 125)) | (1 << (bitmarkParser.OPA - 125)) | (1 << (bitmarkParser.OPS - 125)) | (1 << (bitmarkParser.OPHASH - 125)) | (1 << (bitmarkParser.OPC - 125)) | (1 << (bitmarkParser.COLON - 125)) | (1 << (bitmarkParser.AMP - 125)) | (1 << (bitmarkParser.Greater - 125)) | (1 << (bitmarkParser.Less - 125)) | (1 << (bitmarkParser.RightAngle - 125)) | (1 << (bitmarkParser.RightArrow - 125)) | (1 << (bitmarkParser.DBLEQ - 125)) | (1 << (bitmarkParser.QUOTE_INDEX - 125)))) !== 0) || ((((_la - 157)) & ~0x1F) === 0 && ((1 << (_la - 157)) & ((1 << (bitmarkParser.DCANY - 157)) | (1 << (bitmarkParser.ArticleText - 157)) | (1 << (bitmarkParser.NUMERIC - 157)) | (1 << (bitmarkParser.STRING - 157)) | (1 << (bitmarkParser.SENTENCE - 157)) | (1 << (bitmarkParser.AtProgress - 157)) | (1 << (bitmarkParser.AtReference - 157)) | (1 << (bitmarkParser.AtProgressPoints - 157)) | (1 << (bitmarkParser.AtExampleWithStr - 157)) | (1 << (bitmarkParser.AtExamplecol - 157)) | (1 << (bitmarkParser.AtExamplecl - 157)) | (1 << (bitmarkParser.AtPartialAnswerS - 157)) | (1 << (bitmarkParser.AtPartialAnswer - 157)) | (1 << (bitmarkParser.AtLabeltrue - 157)) | (1 << (bitmarkParser.AtLabelfalse - 157)) | (1 << (bitmarkParser.OpAtCopyright - 157)) | (1 << (bitmarkParser.OpAtIsTracked - 157)))) !== 0) || ((((_la - 189)) & ~0x1F) === 0 && ((1 << (_la - 189)) & ((1 << (bitmarkParser.OpAtIsInfoOnly - 189)) | (1 << (bitmarkParser.AtDate - 189)) | (1 << (bitmarkParser.AmpAudio - 189)) | (1 << (bitmarkParser.AmpImage - 189)) | (1 << (bitmarkParser.AmpVideo - 189)) | (1 << (bitmarkParser.AmpArticle - 189)) | (1 << (bitmarkParser.AmpDocument - 189)) | (1 << (bitmarkParser.AmpApp - 189)) | (1 << (bitmarkParser.AmpWebsite - 189)) | (1 << (bitmarkParser.AmpStillImageFilm - 189)) | (1 << (bitmarkParser.OpAmpAudio - 189)) | (1 << (bitmarkParser.OpAmpImage - 189)) | (1 << (bitmarkParser.OpAmpImageZoom - 189)) | (1 << (bitmarkParser.OpAmpImageWAudio - 189)) | (1 << (bitmarkParser.OpAmpVideo - 189)) | (1 << (bitmarkParser.OpAmpArticle - 189)) | (1 << (bitmarkParser.OpAmpDocument - 189)) | (1 << (bitmarkParser.OpAmpApp - 189)) | (1 << (bitmarkParser.OpAmpWebsite - 189)) | (1 << (bitmarkParser.OpAmpStillImageFilm - 189)) | (1 << (bitmarkParser.BracEnclose - 189)) | (1 << (bitmarkParser.AmpAudioLink - 189)) | (1 << (bitmarkParser.AmpImageLink - 189)) | (1 << (bitmarkParser.AmpVideoLink - 189)) | (1 << (bitmarkParser.AmpArticleLink - 189)) | (1 << (bitmarkParser.AmpDocumentLink - 189)))) !== 0) || ((((_la - 221)) & ~0x1F) === 0 && ((1 << (_la - 221)) & ((1 << (bitmarkParser.AmpAppLink - 221)) | (1 << (bitmarkParser.AmpWebsiteLink - 221)) | (1 << (bitmarkParser.AmpStillImageFilmLink - 221)) | (1 << (bitmarkParser.OpAmpAudioLink - 221)) | (1 << (bitmarkParser.OpAmpImageLink - 221)) | (1 << (bitmarkParser.OpAmpVideoLink - 221)) | (1 << (bitmarkParser.OpAmpArticleLink - 221)) | (1 << (bitmarkParser.OpAmpDocumentLink - 221)) | (1 << (bitmarkParser.OpAmpAppLink - 221)) | (1 << (bitmarkParser.OpAmpWebsiteLink - 221)) | (1 << (bitmarkParser.OpAmpStillImageFilmLink - 221)) | (1 << (bitmarkParser.BitmarkMinus - 221)) | (1 << (bitmarkParser.BitmarkPlus - 221)) | (1 << (bitmarkParser.URL - 221)))) !== 0) || _la === bitmarkParser.LIST_LINE) {
				{
				{
				this.state = 3244;
				this.bitElem();
				this.state = 3248;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === bitmarkParser.NL) {
					{
					{
					this.state = 3245;
					this.match(bitmarkParser.NL);
					}
					}
					this.state = 3250;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
				}
				this.state = 3255;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 3269;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 3256;
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
					this.state = 3257;
					this.self_assess_s_and_w();
					this.state = 3265;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					do {
						{
						{
						this.state = 3261;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						while (_la === bitmarkParser.NL) {
							{
							{
							this.state = 3258;
							this.match(bitmarkParser.NL);
							}
							}
							this.state = 3263;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
						}
						this.state = 3264;
						this.bullet_item();
						}
						}
						this.state = 3267;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					} while (_la === bitmarkParser.OPBUL || _la === bitmarkParser.NL);
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 3271;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 425, this._ctx);
			} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
			this.state = 3273;
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
			this.state = 3277;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 426, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 3274;
					this.match(bitmarkParser.NL);
					}
					}
				}
				this.state = 3279;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 426, this._ctx);
			}
			this.state = 3293;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 429, this._ctx) ) {
			case 1:
				{
				this.state = 3280;
				this.resource();
				this.state = 3290;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 428, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 3284;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						while (_la === bitmarkParser.NL) {
							{
							{
							this.state = 3281;
							this.match(bitmarkParser.NL);
							}
							}
							this.state = 3286;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
						}
						this.state = 3287;
						this.resource();
						}
						}
					}
					this.state = 3292;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 428, this._ctx);
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
		this.enterRule(_localctx, 260, bitmarkParser.RULE_self_assess_s_and_w);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 3296;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 3295;
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
				this.state = 3298;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 430, this._ctx);
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
		this.enterRule(_localctx, 262, bitmarkParser.RULE_atpoint);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 3300;
			this.match(bitmarkParser.AtPoints);
			this.state = 3301;
			this.match(bitmarkParser.NUMERIC);
			this.state = 3302;
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
		this.enterRule(_localctx, 264, bitmarkParser.RULE_format);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 3307;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 431, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 3304;
					this.resource_format();
					}
					}
				}
				this.state = 3309;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 431, this._ctx);
			}
			this.state = 3314;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 193)) & ~0x1F) === 0 && ((1 << (_la - 193)) & ((1 << (bitmarkParser.AmpAudio - 193)) | (1 << (bitmarkParser.AmpImage - 193)) | (1 << (bitmarkParser.AmpImageZoom - 193)) | (1 << (bitmarkParser.AmpImageWAudio - 193)) | (1 << (bitmarkParser.AmpVideo - 193)) | (1 << (bitmarkParser.AmpArticle - 193)) | (1 << (bitmarkParser.AmpDocument - 193)) | (1 << (bitmarkParser.AmpApp - 193)) | (1 << (bitmarkParser.AmpWebsite - 193)) | (1 << (bitmarkParser.AmpStillImageFilm - 193)) | (1 << (bitmarkParser.AmpPdf - 193)) | (1 << (bitmarkParser.AmpAudioLink - 193)) | (1 << (bitmarkParser.AmpImageLink - 193)) | (1 << (bitmarkParser.AmpVideoLink - 193)) | (1 << (bitmarkParser.AmpArticleLink - 193)) | (1 << (bitmarkParser.AmpDocumentLink - 193)) | (1 << (bitmarkParser.AmpAppLink - 193)) | (1 << (bitmarkParser.AmpWebsiteLink - 193)) | (1 << (bitmarkParser.AmpStillImageFilmLink - 193)))) !== 0) || _la === bitmarkParser.ColonText) {
				{
				this.state = 3312;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case bitmarkParser.ColonText:
					{
					this.state = 3310;
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
					this.state = 3311;
					this.resource_format_extra();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				this.state = 3316;
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
		this.enterRule(_localctx, 266, bitmarkParser.RULE_resource_format);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 3317;
			_la = this._input.LA(1);
			if (!(((((_la - 198)) & ~0x1F) === 0 && ((1 << (_la - 198)) & ((1 << (bitmarkParser.AmpArticle - 198)) | (1 << (bitmarkParser.AmpDocument - 198)) | (1 << (bitmarkParser.AmpWebsite - 198)) | (1 << (bitmarkParser.AmpStillImageFilm - 198)) | (1 << (bitmarkParser.AmpAudioLink - 198)) | (1 << (bitmarkParser.AmpImageLink - 198)) | (1 << (bitmarkParser.AmpVideoLink - 198)) | (1 << (bitmarkParser.AmpArticleLink - 198)) | (1 << (bitmarkParser.AmpDocumentLink - 198)) | (1 << (bitmarkParser.AmpAppLink - 198)) | (1 << (bitmarkParser.AmpWebsiteLink - 198)) | (1 << (bitmarkParser.AmpStillImageFilmLink - 198)))) !== 0) || ((((_la - 232)) & ~0x1F) === 0 && ((1 << (_la - 232)) & ((1 << (bitmarkParser.BitmarkMinus - 232)) | (1 << (bitmarkParser.BitmarkPlus - 232)) | (1 << (bitmarkParser.Prosemirror - 232)) | (1 << (bitmarkParser.Placeholder - 232)))) !== 0))) {
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
		this.enterRule(_localctx, 268, bitmarkParser.RULE_resource_format_extra);
		try {
			this.state = 3328;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case bitmarkParser.AmpImage:
			case bitmarkParser.AmpImageZoom:
			case bitmarkParser.AmpImageWAudio:
			case bitmarkParser.AmpImageLink:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 3319;
				this.image_format();
				}
				break;
			case bitmarkParser.AmpAudio:
			case bitmarkParser.AmpAudioLink:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 3320;
				this.audio_format();
				}
				break;
			case bitmarkParser.AmpVideo:
			case bitmarkParser.AmpVideoLink:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 3321;
				this.video_format();
				}
				break;
			case bitmarkParser.AmpArticle:
			case bitmarkParser.AmpArticleLink:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 3322;
				this.article_format();
				}
				break;
			case bitmarkParser.AmpDocument:
			case bitmarkParser.AmpDocumentLink:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 3323;
				this.document_format();
				}
				break;
			case bitmarkParser.AmpApp:
			case bitmarkParser.AmpAppLink:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 3324;
				this.app_format();
				}
				break;
			case bitmarkParser.AmpWebsite:
			case bitmarkParser.AmpWebsiteLink:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 3325;
				this.website_format();
				}
				break;
			case bitmarkParser.AmpStillImageFilm:
			case bitmarkParser.AmpStillImageFilmLink:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 3326;
				this.stillimagefilm_format();
				}
				break;
			case bitmarkParser.AmpPdf:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 3327;
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
		this.enterRule(_localctx, 270, bitmarkParser.RULE_format2);
		try {
			this.state = 3334;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case bitmarkParser.BitmarkMinus:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 3330;
				this.match(bitmarkParser.BitmarkMinus);
				}
				break;
			case bitmarkParser.BitmarkPlus:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 3331;
				this.match(bitmarkParser.BitmarkPlus);
				}
				break;
			case bitmarkParser.ColonText:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 3332;
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
		this.enterRule(_localctx, 272, bitmarkParser.RULE_image_format);
		let _la: number;
		try {
			this.state = 3350;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case bitmarkParser.AmpImage:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 3336;
				this.match(bitmarkParser.AmpImage);
				this.state = 3339;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case bitmarkParser.Image_type:
					{
					{
					this.state = 3337;
					this.match(bitmarkParser.Image_type);
					}
					}
					break;
				case bitmarkParser.DotArticleAtt:
					{
					{
					this.state = 3338;
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
				this.state = 3341;
				this.match(bitmarkParser.AmpImageLink);
				this.state = 3343;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === bitmarkParser.Image_type) {
					{
					this.state = 3342;
					this.match(bitmarkParser.Image_type);
					}
				}

				}
				break;
			case bitmarkParser.AmpImageZoom:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 3345;
				this.match(bitmarkParser.AmpImageZoom);
				this.state = 3347;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === bitmarkParser.Image_type) {
					{
					this.state = 3346;
					this.match(bitmarkParser.Image_type);
					}
				}

				}
				break;
			case bitmarkParser.AmpImageWAudio:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 3349;
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
		this.enterRule(_localctx, 274, bitmarkParser.RULE_video_format);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 3352;
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
			this.state = 3355;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === bitmarkParser.COLON) {
				{
				this.state = 3353;
				this.match(bitmarkParser.COLON);
				this.state = 3354;
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
		this.enterRule(_localctx, 276, bitmarkParser.RULE_article_format);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 3357;
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
		this.enterRule(_localctx, 278, bitmarkParser.RULE_document_format);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 3359;
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
		this.enterRule(_localctx, 280, bitmarkParser.RULE_app_format);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 3361;
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
		this.enterRule(_localctx, 282, bitmarkParser.RULE_website_format);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 3363;
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
		this.enterRule(_localctx, 284, bitmarkParser.RULE_stillimagefilm_format);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 3365;
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
		this.enterRule(_localctx, 286, bitmarkParser.RULE_op_article_format);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 3367;
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
		this.enterRule(_localctx, 288, bitmarkParser.RULE_op_document_format);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 3369;
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
		this.enterRule(_localctx, 290, bitmarkParser.RULE_op_app_format);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 3371;
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
		this.enterRule(_localctx, 292, bitmarkParser.RULE_op_website_format);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 3373;
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
		this.enterRule(_localctx, 294, bitmarkParser.RULE_op_video_format);
		try {
			this.state = 3385;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case bitmarkParser.OpAmpVideo:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 3375;
				this.match(bitmarkParser.OpAmpVideo);
				this.state = 3378;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 441, this._ctx) ) {
				case 1:
					{
					this.state = 3376;
					this.match(bitmarkParser.COLON);
					this.state = 3377;
					this.match(bitmarkParser.Video_type);
					}
					break;
				}
				}
				break;
			case bitmarkParser.OpAmpVideoLink:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 3380;
				this.match(bitmarkParser.OpAmpVideoLink);
				this.state = 3383;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 442, this._ctx) ) {
				case 1:
					{
					this.state = 3381;
					this.match(bitmarkParser.COLON);
					this.state = 3382;
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
		this.enterRule(_localctx, 296, bitmarkParser.RULE_op_stillimagefilm_format);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 3387;
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
		this.enterRule(_localctx, 298, bitmarkParser.RULE_articlebit);
		try {
			this.state = 3395;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case bitmarkParser.OpAmpArticle:
			case bitmarkParser.OpAmpArticleLink:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 3389;
				this.op_article_format();
				this.state = 3390;
				this.match(bitmarkParser.COLON);
				this.state = 3391;
				this.url();
				this.state = 3392;
				this.match(bitmarkParser.CL);
				}
				break;
			case bitmarkParser.ArticleText:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 3394;
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
		this.enterRule(_localctx, 300, bitmarkParser.RULE_documentbit);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 3397;
			this.op_document_format();
			this.state = 3398;
			this.match(bitmarkParser.COLON);
			this.state = 3399;
			this.url();
			this.state = 3400;
			this.match(bitmarkParser.CL);
			this.state = 3405;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === bitmarkParser.OPATALT) {
				{
				this.state = 3401;
				this.match(bitmarkParser.OPATALT);
				this.state = 3402;
				this.words();
				this.state = 3403;
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
		this.enterRule(_localctx, 302, bitmarkParser.RULE_websitebit);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 3407;
			this.op_website_format();
			this.state = 3408;
			this.match(bitmarkParser.COLON);
			this.state = 3409;
			this.url();
			this.state = 3410;
			this.match(bitmarkParser.CL);
			this.state = 3415;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === bitmarkParser.OPATALT) {
				{
				this.state = 3411;
				this.match(bitmarkParser.OPATALT);
				this.state = 3412;
				this.words();
				this.state = 3413;
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
		this.enterRule(_localctx, 304, bitmarkParser.RULE_appbit);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 3417;
			this.op_app_format();
			this.state = 3418;
			this.match(bitmarkParser.COLON);
			this.state = 3421;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case bitmarkParser.URL:
				{
				this.state = 3419;
				this.url();
				}
				break;
			case bitmarkParser.TEL:
				{
				this.state = 3420;
				this.telephone();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 3423;
			this.match(bitmarkParser.CL);
			this.state = 3428;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === bitmarkParser.OPATALT) {
				{
				this.state = 3424;
				this.match(bitmarkParser.OPATALT);
				this.state = 3425;
				this.words();
				this.state = 3426;
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
		this.enterRule(_localctx, 306, bitmarkParser.RULE_stillimagefilmbit);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 3430;
			this.stillimg_one();
			this.state = 3434;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 449, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 3431;
					this.resource_chained();
					}
					}
				}
				this.state = 3436;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 449, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 308, bitmarkParser.RULE_stillimg_one);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 3437;
			this.op_stillimagefilm_format();
			this.state = 3438;
			this.match(bitmarkParser.COLON);
			this.state = 3442;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === bitmarkParser.S) {
				{
				{
				this.state = 3439;
				this.match(bitmarkParser.S);
				}
				}
				this.state = 3444;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 3445;
			this.url();
			this.state = 3446;
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
		this.enterRule(_localctx, 310, bitmarkParser.RULE_videobit);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 3448;
			this.video_one();
			this.state = 3452;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 451, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 3449;
					this.resource_chained();
					}
					}
				}
				this.state = 3454;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 451, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 312, bitmarkParser.RULE_video_one);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 3455;
			this.op_video_format();
			this.state = 3456;
			this.match(bitmarkParser.COLON);
			this.state = 3457;
			this.url();
			this.state = 3458;
			this.match(bitmarkParser.CL);
			this.state = 3463;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 452, this._ctx) ) {
			case 1:
				{
				this.state = 3459;
				this.match(bitmarkParser.OPATALT);
				this.state = 3460;
				this.words();
				this.state = 3461;
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
		this.enterRule(_localctx, 314, bitmarkParser.RULE_imagebit);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 3465;
			this.image_one();
			this.state = 3469;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 453, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 3466;
					this.image_chained();
					}
					}
				}
				this.state = 3471;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 453, this._ctx);
			}
			this.state = 3474;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 454, this._ctx) ) {
			case 1:
				{
				this.state = 3472;
				this.match(bitmarkParser.NL);
				this.state = 3473;
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
		this.enterRule(_localctx, 316, bitmarkParser.RULE_image_one);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 3476;
			this.op_image_format();
			this.state = 3477;
			this.match(bitmarkParser.COLON);
			this.state = 3481;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === bitmarkParser.S) {
				{
				{
				this.state = 3478;
				this.match(bitmarkParser.S);
				}
				}
				this.state = 3483;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 3484;
			this.url();
			this.state = 3485;
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
		this.enterRule(_localctx, 318, bitmarkParser.RULE_op_image_format);
		let _la: number;
		try {
			this.state = 3501;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case bitmarkParser.OpAmpImage:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 3487;
				this.match(bitmarkParser.OpAmpImage);
				this.state = 3490;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case bitmarkParser.Image_type:
					{
					{
					this.state = 3488;
					this.match(bitmarkParser.Image_type);
					}
					}
					break;
				case bitmarkParser.DotArticleAtt:
					{
					{
					this.state = 3489;
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
				this.state = 3492;
				this.match(bitmarkParser.OpAmpImageLink);
				this.state = 3494;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === bitmarkParser.Image_type) {
					{
					this.state = 3493;
					this.match(bitmarkParser.Image_type);
					}
				}

				}
				break;
			case bitmarkParser.OpAmpImageZoom:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 3496;
				this.match(bitmarkParser.OpAmpImageZoom);
				this.state = 3498;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === bitmarkParser.Image_type) {
					{
					this.state = 3497;
					this.match(bitmarkParser.Image_type);
					}
				}

				}
				break;
			case bitmarkParser.OpAmpImageWAudio:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 3500;
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
		this.enterRule(_localctx, 320, bitmarkParser.RULE_image_chained);
		let _la: number;
		try {
			let _alt: number;
			this.state = 3520;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case bitmarkParser.AtSrc:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 3503;
				this.match(bitmarkParser.AtSrc);
				this.state = 3504;
				this.match(bitmarkParser.COLON);
				this.state = 3505;
				this.url();
				this.state = 3506;
				this.match(bitmarkParser.CL);
				}
				break;
			case bitmarkParser.AtWidth:
			case bitmarkParser.AtHeight:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 3508;
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
				this.state = 3509;
				this.match(bitmarkParser.COLON);
				this.state = 3510;
				this.match(bitmarkParser.NUMERIC);
				this.state = 3511;
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
				this.state = 3512;
				_la = this._input.LA(1);
				if (!(((((_la - 181)) & ~0x1F) === 0 && ((1 << (_la - 181)) & ((1 << (bitmarkParser.OPATALT - 181)) | (1 << (bitmarkParser.OpAtCaption - 181)) | (1 << (bitmarkParser.OpAtLicense - 181)) | (1 << (bitmarkParser.OpAtCopyright - 181)) | (1 << (bitmarkParser.OpAtSearch - 181)))) !== 0))) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 3516;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 460, this._ctx);
				while (_alt !== 1 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1 + 1) {
						{
						{
						this.state = 3513;
						this.matchWildcard();
						}
						}
					}
					this.state = 3518;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 460, this._ctx);
				}
				this.state = 3519;
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
		this.enterRule(_localctx, 322, bitmarkParser.RULE_image_chained4match);
		let _la: number;
		try {
			let _alt: number;
			this.state = 3539;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case bitmarkParser.AtSrc:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 3522;
				this.match(bitmarkParser.AtSrc);
				this.state = 3523;
				this.match(bitmarkParser.COLON);
				this.state = 3524;
				this.url();
				this.state = 3525;
				this.match(bitmarkParser.CL);
				}
				break;
			case bitmarkParser.AtWidth:
			case bitmarkParser.AtHeight:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 3527;
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
				this.state = 3528;
				this.match(bitmarkParser.COLON);
				this.state = 3529;
				this.match(bitmarkParser.NUMERIC);
				this.state = 3530;
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
				this.state = 3531;
				_la = this._input.LA(1);
				if (!(((((_la - 181)) & ~0x1F) === 0 && ((1 << (_la - 181)) & ((1 << (bitmarkParser.OPATALT - 181)) | (1 << (bitmarkParser.OpAtCaption - 181)) | (1 << (bitmarkParser.OpAtLicense - 181)) | (1 << (bitmarkParser.OpAtCopyright - 181)) | (1 << (bitmarkParser.OpAtSearch - 181)))) !== 0))) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 3535;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 462, this._ctx);
				while (_alt !== 1 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1 + 1) {
						{
						{
						this.state = 3532;
						this.matchWildcard();
						}
						}
					}
					this.state = 3537;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 462, this._ctx);
				}
				this.state = 3538;
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
		this.enterRule(_localctx, 324, bitmarkParser.RULE_audiobit);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 3541;
			this.audio_one();
			this.state = 3545;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 464, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 3542;
					this.resource_chained();
					}
					}
				}
				this.state = 3547;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 464, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 326, bitmarkParser.RULE_audio_one);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 3548;
			this.op_audio_format();
			this.state = 3549;
			this.match(bitmarkParser.COLON);
			this.state = 3550;
			this.url();
			this.state = 3551;
			this.match(bitmarkParser.CL);
			this.state = 3556;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 465, this._ctx) ) {
			case 1:
				{
				this.state = 3552;
				this.match(bitmarkParser.OPATALT);
				this.state = 3553;
				this.words();
				this.state = 3554;
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
		this.enterRule(_localctx, 328, bitmarkParser.RULE_audio_format);
		let _la: number;
		try {
			this.state = 3568;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case bitmarkParser.AmpAudio:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 3558;
				this.match(bitmarkParser.AmpAudio);
				this.state = 3561;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === bitmarkParser.COLON) {
					{
					this.state = 3559;
					this.match(bitmarkParser.COLON);
					this.state = 3560;
					this.match(bitmarkParser.Audio_type);
					}
				}

				}
				break;
			case bitmarkParser.AmpAudioLink:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 3563;
				this.match(bitmarkParser.AmpAudioLink);
				this.state = 3566;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === bitmarkParser.COLON) {
					{
					this.state = 3564;
					this.match(bitmarkParser.COLON);
					this.state = 3565;
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
		this.enterRule(_localctx, 330, bitmarkParser.RULE_op_audio_format);
		try {
			this.state = 3580;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case bitmarkParser.OpAmpAudio:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 3570;
				this.match(bitmarkParser.OpAmpAudio);
				this.state = 3573;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 469, this._ctx) ) {
				case 1:
					{
					this.state = 3571;
					this.match(bitmarkParser.COLON);
					this.state = 3572;
					this.match(bitmarkParser.Audio_type);
					}
					break;
				}
				}
				break;
			case bitmarkParser.OpAmpAudioLink:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 3575;
				this.match(bitmarkParser.OpAmpAudioLink);
				this.state = 3578;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 470, this._ctx) ) {
				case 1:
					{
					this.state = 3576;
					this.match(bitmarkParser.COLON);
					this.state = 3577;
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
		this.enterRule(_localctx, 332, bitmarkParser.RULE_resource_chained);
		let _la: number;
		try {
			let _alt: number;
			this.state = 3613;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case bitmarkParser.OPA:
			case bitmarkParser.AtSrc:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 3585;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case bitmarkParser.OPA:
					{
					this.state = 3582;
					this.match(bitmarkParser.OPA);
					this.state = 3583;
					this.s_and_w();
					}
					break;
				case bitmarkParser.AtSrc:
					{
					this.state = 3584;
					this.match(bitmarkParser.AtSrc);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 3587;
				this.match(bitmarkParser.COLON);
				this.state = 3591;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 473, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 3588;
						this.match(bitmarkParser.S);
						}
						}
					}
					this.state = 3593;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 473, this._ctx);
				}
				this.state = 3596;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					this.state = 3596;
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
						this.state = 3594;
						this.s_and_w();
						}
						break;
					case bitmarkParser.NL:
						{
						this.state = 3595;
						this.match(bitmarkParser.NL);
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					}
					this.state = 3598;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la === bitmarkParser.S || ((((_la - 127)) & ~0x1F) === 0 && ((1 << (_la - 127)) & ((1 << (bitmarkParser.OPESC - 127)) | (1 << (bitmarkParser.OPS - 127)) | (1 << (bitmarkParser.COLON - 127)) | (1 << (bitmarkParser.AMP - 127)) | (1 << (bitmarkParser.Greater - 127)) | (1 << (bitmarkParser.Less - 127)) | (1 << (bitmarkParser.RightAngle - 127)) | (1 << (bitmarkParser.RightArrow - 127)) | (1 << (bitmarkParser.DBLEQ - 127)) | (1 << (bitmarkParser.QUOTE_INDEX - 127)))) !== 0) || ((((_la - 160)) & ~0x1F) === 0 && ((1 << (_la - 160)) & ((1 << (bitmarkParser.NUMERIC - 160)) | (1 << (bitmarkParser.STRING - 160)) | (1 << (bitmarkParser.NL - 160)) | (1 << (bitmarkParser.SENTENCE - 160)))) !== 0) || ((((_la - 193)) & ~0x1F) === 0 && ((1 << (_la - 193)) & ((1 << (bitmarkParser.AmpAudio - 193)) | (1 << (bitmarkParser.AmpImage - 193)) | (1 << (bitmarkParser.AmpVideo - 193)) | (1 << (bitmarkParser.AmpArticle - 193)) | (1 << (bitmarkParser.AmpDocument - 193)) | (1 << (bitmarkParser.AmpApp - 193)) | (1 << (bitmarkParser.AmpWebsite - 193)) | (1 << (bitmarkParser.AmpStillImageFilm - 193)) | (1 << (bitmarkParser.AmpAudioLink - 193)) | (1 << (bitmarkParser.AmpImageLink - 193)) | (1 << (bitmarkParser.AmpVideoLink - 193)) | (1 << (bitmarkParser.AmpArticleLink - 193)) | (1 << (bitmarkParser.AmpDocumentLink - 193)) | (1 << (bitmarkParser.AmpAppLink - 193)) | (1 << (bitmarkParser.AmpWebsiteLink - 193)) | (1 << (bitmarkParser.AmpStillImageFilmLink - 193)))) !== 0) || ((((_la - 232)) & ~0x1F) === 0 && ((1 << (_la - 232)) & ((1 << (bitmarkParser.BitmarkMinus - 232)) | (1 << (bitmarkParser.BitmarkPlus - 232)) | (1 << (bitmarkParser.URL - 232)))) !== 0));
				this.state = 3600;
				this.match(bitmarkParser.CL);
				}
				break;
			case bitmarkParser.AtWidth:
			case bitmarkParser.AtHeight:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 3601;
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
				this.state = 3602;
				this.match(bitmarkParser.COLON);
				this.state = 3603;
				this.match(bitmarkParser.NUMERIC);
				this.state = 3604;
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
				this.state = 3605;
				_la = this._input.LA(1);
				if (!(((((_la - 181)) & ~0x1F) === 0 && ((1 << (_la - 181)) & ((1 << (bitmarkParser.OPATALT - 181)) | (1 << (bitmarkParser.OpAtCaption - 181)) | (1 << (bitmarkParser.OpAtLicense - 181)) | (1 << (bitmarkParser.OpAtCopyright - 181)) | (1 << (bitmarkParser.OpAtSearch - 181)))) !== 0))) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 3609;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 476, this._ctx);
				while (_alt !== 1 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1 + 1) {
						{
						{
						this.state = 3606;
						this.matchWildcard();
						}
						}
					}
					this.state = 3611;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 476, this._ctx);
				}
				this.state = 3612;
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
		this.enterRule(_localctx, 334, bitmarkParser.RULE_telephone);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 3615;
			this.match(bitmarkParser.TEL);
			this.state = 3616;
			this.match(bitmarkParser.PLUS);
			this.state = 3617;
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
		this.enterRule(_localctx, 336, bitmarkParser.RULE_url);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 3619;
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
		this.enterRule(_localctx, 338, bitmarkParser.RULE_item);
		let _la: number;
		try {
			this.state = 3651;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 484, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 3621;
				this.match(bitmarkParser.OPC);
				this.state = 3622;
				this.match(bitmarkParser.CL);
				this.state = 3630;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 479, this._ctx) ) {
				case 1:
					{
					this.state = 3626;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === bitmarkParser.S) {
						{
						{
						this.state = 3623;
						this.match(bitmarkParser.S);
						}
						}
						this.state = 3628;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					this.state = 3629;
					this.lead();
					}
					break;
				}
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 3632;
				this.match(bitmarkParser.OPC);
				this.state = 3633;
				this.s_and_w();
				this.state = 3638;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (((((_la - 142)) & ~0x1F) === 0 && ((1 << (_la - 142)) & ((1 << (bitmarkParser.COLON - 142)) | (1 << (bitmarkParser.AMP - 142)) | (1 << (bitmarkParser.Greater - 142)) | (1 << (bitmarkParser.Less - 142)) | (1 << (bitmarkParser.RightAngle - 142)) | (1 << (bitmarkParser.RightArrow - 142)) | (1 << (bitmarkParser.QUOTE_INDEX - 142)) | (1 << (bitmarkParser.SENTENCE - 142)))) !== 0) || ((((_la - 193)) & ~0x1F) === 0 && ((1 << (_la - 193)) & ((1 << (bitmarkParser.AmpAudio - 193)) | (1 << (bitmarkParser.AmpImage - 193)) | (1 << (bitmarkParser.AmpVideo - 193)) | (1 << (bitmarkParser.AmpArticle - 193)) | (1 << (bitmarkParser.AmpDocument - 193)) | (1 << (bitmarkParser.AmpApp - 193)) | (1 << (bitmarkParser.AmpWebsite - 193)) | (1 << (bitmarkParser.AmpStillImageFilm - 193)) | (1 << (bitmarkParser.AmpAudioLink - 193)) | (1 << (bitmarkParser.AmpImageLink - 193)) | (1 << (bitmarkParser.AmpVideoLink - 193)) | (1 << (bitmarkParser.AmpArticleLink - 193)) | (1 << (bitmarkParser.AmpDocumentLink - 193)) | (1 << (bitmarkParser.AmpAppLink - 193)) | (1 << (bitmarkParser.AmpWebsiteLink - 193)) | (1 << (bitmarkParser.AmpStillImageFilmLink - 193)))) !== 0) || _la === bitmarkParser.BitmarkMinus || _la === bitmarkParser.BitmarkPlus) {
					{
					this.state = 3636;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case bitmarkParser.COLON:
						{
						this.state = 3634;
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
						this.state = 3635;
						this.words();
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					}
					this.state = 3640;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 3641;
				this.match(bitmarkParser.CL);
				this.state = 3649;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 483, this._ctx) ) {
				case 1:
					{
					this.state = 3645;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === bitmarkParser.S) {
						{
						{
						this.state = 3642;
						this.match(bitmarkParser.S);
						}
						}
						this.state = 3647;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					this.state = 3648;
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
		this.enterRule(_localctx, 340, bitmarkParser.RULE_lead);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 3653;
			this.match(bitmarkParser.OPC);
			this.state = 3654;
			this.s_and_w();
			this.state = 3659;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 142)) & ~0x1F) === 0 && ((1 << (_la - 142)) & ((1 << (bitmarkParser.COLON - 142)) | (1 << (bitmarkParser.AMP - 142)) | (1 << (bitmarkParser.Greater - 142)) | (1 << (bitmarkParser.Less - 142)) | (1 << (bitmarkParser.RightAngle - 142)) | (1 << (bitmarkParser.RightArrow - 142)) | (1 << (bitmarkParser.QUOTE_INDEX - 142)) | (1 << (bitmarkParser.SENTENCE - 142)))) !== 0) || ((((_la - 193)) & ~0x1F) === 0 && ((1 << (_la - 193)) & ((1 << (bitmarkParser.AmpAudio - 193)) | (1 << (bitmarkParser.AmpImage - 193)) | (1 << (bitmarkParser.AmpVideo - 193)) | (1 << (bitmarkParser.AmpArticle - 193)) | (1 << (bitmarkParser.AmpDocument - 193)) | (1 << (bitmarkParser.AmpApp - 193)) | (1 << (bitmarkParser.AmpWebsite - 193)) | (1 << (bitmarkParser.AmpStillImageFilm - 193)) | (1 << (bitmarkParser.AmpAudioLink - 193)) | (1 << (bitmarkParser.AmpImageLink - 193)) | (1 << (bitmarkParser.AmpVideoLink - 193)) | (1 << (bitmarkParser.AmpArticleLink - 193)) | (1 << (bitmarkParser.AmpDocumentLink - 193)) | (1 << (bitmarkParser.AmpAppLink - 193)) | (1 << (bitmarkParser.AmpWebsiteLink - 193)) | (1 << (bitmarkParser.AmpStillImageFilmLink - 193)))) !== 0) || _la === bitmarkParser.BitmarkMinus || _la === bitmarkParser.BitmarkPlus) {
				{
				this.state = 3657;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case bitmarkParser.COLON:
					{
					this.state = 3655;
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
					this.state = 3656;
					this.words();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				this.state = 3661;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 3662;
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
		this.enterRule(_localctx, 342, bitmarkParser.RULE_angleref);
		let _la: number;
		try {
			this.state = 3674;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case bitmarkParser.OPRANGLES:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 3664;
				this.match(bitmarkParser.OPRANGLES);
				this.state = 3666;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === bitmarkParser.S || ((((_la - 127)) & ~0x1F) === 0 && ((1 << (_la - 127)) & ((1 << (bitmarkParser.OPESC - 127)) | (1 << (bitmarkParser.OPS - 127)) | (1 << (bitmarkParser.COLON - 127)) | (1 << (bitmarkParser.AMP - 127)) | (1 << (bitmarkParser.Greater - 127)) | (1 << (bitmarkParser.Less - 127)) | (1 << (bitmarkParser.RightAngle - 127)) | (1 << (bitmarkParser.RightArrow - 127)) | (1 << (bitmarkParser.DBLEQ - 127)) | (1 << (bitmarkParser.QUOTE_INDEX - 127)))) !== 0) || ((((_la - 160)) & ~0x1F) === 0 && ((1 << (_la - 160)) & ((1 << (bitmarkParser.NUMERIC - 160)) | (1 << (bitmarkParser.STRING - 160)) | (1 << (bitmarkParser.SENTENCE - 160)))) !== 0) || ((((_la - 193)) & ~0x1F) === 0 && ((1 << (_la - 193)) & ((1 << (bitmarkParser.AmpAudio - 193)) | (1 << (bitmarkParser.AmpImage - 193)) | (1 << (bitmarkParser.AmpVideo - 193)) | (1 << (bitmarkParser.AmpArticle - 193)) | (1 << (bitmarkParser.AmpDocument - 193)) | (1 << (bitmarkParser.AmpApp - 193)) | (1 << (bitmarkParser.AmpWebsite - 193)) | (1 << (bitmarkParser.AmpStillImageFilm - 193)) | (1 << (bitmarkParser.AmpAudioLink - 193)) | (1 << (bitmarkParser.AmpImageLink - 193)) | (1 << (bitmarkParser.AmpVideoLink - 193)) | (1 << (bitmarkParser.AmpArticleLink - 193)) | (1 << (bitmarkParser.AmpDocumentLink - 193)) | (1 << (bitmarkParser.AmpAppLink - 193)) | (1 << (bitmarkParser.AmpWebsiteLink - 193)) | (1 << (bitmarkParser.AmpStillImageFilmLink - 193)))) !== 0) || ((((_la - 232)) & ~0x1F) === 0 && ((1 << (_la - 232)) & ((1 << (bitmarkParser.BitmarkMinus - 232)) | (1 << (bitmarkParser.BitmarkPlus - 232)) | (1 << (bitmarkParser.URL - 232)))) !== 0)) {
					{
					this.state = 3665;
					this.s_and_w();
					}
				}

				this.state = 3668;
				this.match(bitmarkParser.CL);
				}
				break;
			case bitmarkParser.OPRANGLEL:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 3669;
				this.match(bitmarkParser.OPRANGLEL);
				this.state = 3671;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === bitmarkParser.S || ((((_la - 127)) & ~0x1F) === 0 && ((1 << (_la - 127)) & ((1 << (bitmarkParser.OPESC - 127)) | (1 << (bitmarkParser.OPS - 127)) | (1 << (bitmarkParser.COLON - 127)) | (1 << (bitmarkParser.AMP - 127)) | (1 << (bitmarkParser.Greater - 127)) | (1 << (bitmarkParser.Less - 127)) | (1 << (bitmarkParser.RightAngle - 127)) | (1 << (bitmarkParser.RightArrow - 127)) | (1 << (bitmarkParser.DBLEQ - 127)) | (1 << (bitmarkParser.QUOTE_INDEX - 127)))) !== 0) || ((((_la - 160)) & ~0x1F) === 0 && ((1 << (_la - 160)) & ((1 << (bitmarkParser.NUMERIC - 160)) | (1 << (bitmarkParser.STRING - 160)) | (1 << (bitmarkParser.SENTENCE - 160)))) !== 0) || ((((_la - 193)) & ~0x1F) === 0 && ((1 << (_la - 193)) & ((1 << (bitmarkParser.AmpAudio - 193)) | (1 << (bitmarkParser.AmpImage - 193)) | (1 << (bitmarkParser.AmpVideo - 193)) | (1 << (bitmarkParser.AmpArticle - 193)) | (1 << (bitmarkParser.AmpDocument - 193)) | (1 << (bitmarkParser.AmpApp - 193)) | (1 << (bitmarkParser.AmpWebsite - 193)) | (1 << (bitmarkParser.AmpStillImageFilm - 193)) | (1 << (bitmarkParser.AmpAudioLink - 193)) | (1 << (bitmarkParser.AmpImageLink - 193)) | (1 << (bitmarkParser.AmpVideoLink - 193)) | (1 << (bitmarkParser.AmpArticleLink - 193)) | (1 << (bitmarkParser.AmpDocumentLink - 193)) | (1 << (bitmarkParser.AmpAppLink - 193)) | (1 << (bitmarkParser.AmpWebsiteLink - 193)) | (1 << (bitmarkParser.AmpStillImageFilmLink - 193)))) !== 0) || ((((_la - 232)) & ~0x1F) === 0 && ((1 << (_la - 232)) & ((1 << (bitmarkParser.BitmarkMinus - 232)) | (1 << (bitmarkParser.BitmarkPlus - 232)) | (1 << (bitmarkParser.URL - 232)))) !== 0)) {
					{
					this.state = 3670;
					this.s_and_w();
					}
				}

				this.state = 3673;
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
		this.enterRule(_localctx, 344, bitmarkParser.RULE_example);
		let _la: number;
		try {
			this.state = 3683;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case bitmarkParser.AtExamplecl:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 3676;
				this.match(bitmarkParser.AtExamplecl);
				}
				break;
			case bitmarkParser.AtExampleWithStr:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 3677;
				this.match(bitmarkParser.AtExampleWithStr);
				}
				break;
			case bitmarkParser.AtExamplecol:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 3678;
				this.match(bitmarkParser.AtExamplecol);
				this.state = 3680;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === bitmarkParser.SENTENCE) {
					{
					this.state = 3679;
					this.match(bitmarkParser.SENTENCE);
					}
				}

				this.state = 3682;
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
		this.enterRule(_localctx, 346, bitmarkParser.RULE_bracketed_text);
		let _la: number;
		try {
			let _alt: number;
			this.state = 3724;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 499, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 3685;
				this.match(bitmarkParser.BracEnclose);
				this.state = 3687;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 492, this._ctx) ) {
				case 1:
					{
					this.state = 3686;
					this.s_and_w();
					}
					break;
				}
				this.state = 3710;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === bitmarkParser.S || ((((_la - 127)) & ~0x1F) === 0 && ((1 << (_la - 127)) & ((1 << (bitmarkParser.OPESC - 127)) | (1 << (bitmarkParser.OPS - 127)) | (1 << (bitmarkParser.COLON - 127)) | (1 << (bitmarkParser.AMP - 127)) | (1 << (bitmarkParser.Greater - 127)) | (1 << (bitmarkParser.Less - 127)) | (1 << (bitmarkParser.RightAngle - 127)) | (1 << (bitmarkParser.RightArrow - 127)) | (1 << (bitmarkParser.DBLEQ - 127)) | (1 << (bitmarkParser.QUOTE_INDEX - 127)))) !== 0) || ((((_la - 160)) & ~0x1F) === 0 && ((1 << (_la - 160)) & ((1 << (bitmarkParser.NUMERIC - 160)) | (1 << (bitmarkParser.STRING - 160)) | (1 << (bitmarkParser.SENTENCE - 160)))) !== 0) || ((((_la - 193)) & ~0x1F) === 0 && ((1 << (_la - 193)) & ((1 << (bitmarkParser.AmpAudio - 193)) | (1 << (bitmarkParser.AmpImage - 193)) | (1 << (bitmarkParser.AmpVideo - 193)) | (1 << (bitmarkParser.AmpArticle - 193)) | (1 << (bitmarkParser.AmpDocument - 193)) | (1 << (bitmarkParser.AmpApp - 193)) | (1 << (bitmarkParser.AmpWebsite - 193)) | (1 << (bitmarkParser.AmpStillImageFilm - 193)) | (1 << (bitmarkParser.AmpAudioLink - 193)) | (1 << (bitmarkParser.AmpImageLink - 193)) | (1 << (bitmarkParser.AmpVideoLink - 193)) | (1 << (bitmarkParser.AmpArticleLink - 193)) | (1 << (bitmarkParser.AmpDocumentLink - 193)) | (1 << (bitmarkParser.AmpAppLink - 193)) | (1 << (bitmarkParser.AmpWebsiteLink - 193)) | (1 << (bitmarkParser.AmpStillImageFilmLink - 193)))) !== 0) || ((((_la - 232)) & ~0x1F) === 0 && ((1 << (_la - 232)) & ((1 << (bitmarkParser.BitmarkMinus - 232)) | (1 << (bitmarkParser.BitmarkPlus - 232)) | (1 << (bitmarkParser.URL - 232)))) !== 0)) {
					{
					{
					this.state = 3689;
					this.s_and_w();
					this.state = 3699;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 494, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 3690;
							this.match(bitmarkParser.NL);
							this.state = 3694;
							this._errHandler.sync(this);
							_alt = this.interpreter.adaptivePredict(this._input, 493, this._ctx);
							while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
								if (_alt === 1) {
									{
									{
									this.state = 3691;
									this.match(bitmarkParser.S);
									}
									}
								}
								this.state = 3696;
								this._errHandler.sync(this);
								_alt = this.interpreter.adaptivePredict(this._input, 493, this._ctx);
							}
							}
							}
						}
						this.state = 3701;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 494, this._ctx);
					}
					this.state = 3705;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === bitmarkParser.NL) {
						{
						{
						this.state = 3702;
						this.match(bitmarkParser.NL);
						}
						}
						this.state = 3707;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
					}
					this.state = 3712;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 3713;
				this.match(bitmarkParser.CL);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 3714;
				this.match(bitmarkParser.BracEnclose);
				this.state = 3720;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === bitmarkParser.S || ((((_la - 127)) & ~0x1F) === 0 && ((1 << (_la - 127)) & ((1 << (bitmarkParser.OPESC - 127)) | (1 << (bitmarkParser.OPS - 127)) | (1 << (bitmarkParser.COLON - 127)) | (1 << (bitmarkParser.AMP - 127)) | (1 << (bitmarkParser.Greater - 127)) | (1 << (bitmarkParser.Less - 127)) | (1 << (bitmarkParser.RightAngle - 127)) | (1 << (bitmarkParser.RightArrow - 127)) | (1 << (bitmarkParser.DBLEQ - 127)) | (1 << (bitmarkParser.QUOTE_INDEX - 127)))) !== 0) || ((((_la - 160)) & ~0x1F) === 0 && ((1 << (_la - 160)) & ((1 << (bitmarkParser.NUMERIC - 160)) | (1 << (bitmarkParser.STRING - 160)) | (1 << (bitmarkParser.NL - 160)) | (1 << (bitmarkParser.SENTENCE - 160)))) !== 0) || ((((_la - 193)) & ~0x1F) === 0 && ((1 << (_la - 193)) & ((1 << (bitmarkParser.AmpAudio - 193)) | (1 << (bitmarkParser.AmpImage - 193)) | (1 << (bitmarkParser.AmpVideo - 193)) | (1 << (bitmarkParser.AmpArticle - 193)) | (1 << (bitmarkParser.AmpDocument - 193)) | (1 << (bitmarkParser.AmpApp - 193)) | (1 << (bitmarkParser.AmpWebsite - 193)) | (1 << (bitmarkParser.AmpStillImageFilm - 193)) | (1 << (bitmarkParser.AmpAudioLink - 193)) | (1 << (bitmarkParser.AmpImageLink - 193)) | (1 << (bitmarkParser.AmpVideoLink - 193)) | (1 << (bitmarkParser.AmpArticleLink - 193)) | (1 << (bitmarkParser.AmpDocumentLink - 193)) | (1 << (bitmarkParser.AmpAppLink - 193)) | (1 << (bitmarkParser.AmpWebsiteLink - 193)) | (1 << (bitmarkParser.AmpStillImageFilmLink - 193)))) !== 0) || ((((_la - 232)) & ~0x1F) === 0 && ((1 << (_la - 232)) & ((1 << (bitmarkParser.BitmarkMinus - 232)) | (1 << (bitmarkParser.BitmarkPlus - 232)) | (1 << (bitmarkParser.URL - 232)))) !== 0)) {
					{
					this.state = 3718;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 497, this._ctx) ) {
					case 1:
						{
						this.state = 3715;
						this.s_and_w();
						}
						break;

					case 2:
						{
						this.state = 3716;
						this.match(bitmarkParser.NL);
						}
						break;

					case 3:
						{
						this.state = 3717;
						this.match(bitmarkParser.S);
						}
						break;
					}
					}
					this.state = 3722;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 3723;
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
		this.enterRule(_localctx, 348, bitmarkParser.RULE_reference);
		let _la: number;
		try {
			this.state = 3748;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 504, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 3726;
				this.match(bitmarkParser.AtReference);
				this.state = 3731;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					this.state = 3731;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 500, this._ctx) ) {
					case 1:
						{
						this.state = 3727;
						this.s_and_w();
						}
						break;

					case 2:
						{
						this.state = 3728;
						this.match(bitmarkParser.COLON);
						}
						break;

					case 3:
						{
						this.state = 3729;
						this.match(bitmarkParser.URL);
						}
						break;

					case 4:
						{
						this.state = 3730;
						this.match(bitmarkParser.NL);
						}
						break;
					}
					}
					this.state = 3733;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la === bitmarkParser.S || ((((_la - 127)) & ~0x1F) === 0 && ((1 << (_la - 127)) & ((1 << (bitmarkParser.OPESC - 127)) | (1 << (bitmarkParser.OPS - 127)) | (1 << (bitmarkParser.COLON - 127)) | (1 << (bitmarkParser.AMP - 127)) | (1 << (bitmarkParser.Greater - 127)) | (1 << (bitmarkParser.Less - 127)) | (1 << (bitmarkParser.RightAngle - 127)) | (1 << (bitmarkParser.RightArrow - 127)) | (1 << (bitmarkParser.DBLEQ - 127)) | (1 << (bitmarkParser.QUOTE_INDEX - 127)))) !== 0) || ((((_la - 160)) & ~0x1F) === 0 && ((1 << (_la - 160)) & ((1 << (bitmarkParser.NUMERIC - 160)) | (1 << (bitmarkParser.STRING - 160)) | (1 << (bitmarkParser.NL - 160)) | (1 << (bitmarkParser.SENTENCE - 160)))) !== 0) || ((((_la - 193)) & ~0x1F) === 0 && ((1 << (_la - 193)) & ((1 << (bitmarkParser.AmpAudio - 193)) | (1 << (bitmarkParser.AmpImage - 193)) | (1 << (bitmarkParser.AmpVideo - 193)) | (1 << (bitmarkParser.AmpArticle - 193)) | (1 << (bitmarkParser.AmpDocument - 193)) | (1 << (bitmarkParser.AmpApp - 193)) | (1 << (bitmarkParser.AmpWebsite - 193)) | (1 << (bitmarkParser.AmpStillImageFilm - 193)) | (1 << (bitmarkParser.AmpAudioLink - 193)) | (1 << (bitmarkParser.AmpImageLink - 193)) | (1 << (bitmarkParser.AmpVideoLink - 193)) | (1 << (bitmarkParser.AmpArticleLink - 193)) | (1 << (bitmarkParser.AmpDocumentLink - 193)) | (1 << (bitmarkParser.AmpAppLink - 193)) | (1 << (bitmarkParser.AmpWebsiteLink - 193)) | (1 << (bitmarkParser.AmpStillImageFilmLink - 193)))) !== 0) || ((((_la - 232)) & ~0x1F) === 0 && ((1 << (_la - 232)) & ((1 << (bitmarkParser.BitmarkMinus - 232)) | (1 << (bitmarkParser.BitmarkPlus - 232)) | (1 << (bitmarkParser.URL - 232)))) !== 0));
				this.state = 3735;
				this.match(bitmarkParser.CL);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 3736;
				this.match(bitmarkParser.AtReference);
				this.state = 3744;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === bitmarkParser.S || ((((_la - 127)) & ~0x1F) === 0 && ((1 << (_la - 127)) & ((1 << (bitmarkParser.OPESC - 127)) | (1 << (bitmarkParser.OPS - 127)) | (1 << (bitmarkParser.COLON - 127)) | (1 << (bitmarkParser.AMP - 127)) | (1 << (bitmarkParser.Greater - 127)) | (1 << (bitmarkParser.Less - 127)) | (1 << (bitmarkParser.RightAngle - 127)) | (1 << (bitmarkParser.RightArrow - 127)) | (1 << (bitmarkParser.DBLEQ - 127)) | (1 << (bitmarkParser.QUOTE_INDEX - 127)))) !== 0) || ((((_la - 160)) & ~0x1F) === 0 && ((1 << (_la - 160)) & ((1 << (bitmarkParser.NUMERIC - 160)) | (1 << (bitmarkParser.STRING - 160)) | (1 << (bitmarkParser.NL - 160)) | (1 << (bitmarkParser.SENTENCE - 160)))) !== 0) || ((((_la - 193)) & ~0x1F) === 0 && ((1 << (_la - 193)) & ((1 << (bitmarkParser.AmpAudio - 193)) | (1 << (bitmarkParser.AmpImage - 193)) | (1 << (bitmarkParser.AmpVideo - 193)) | (1 << (bitmarkParser.AmpArticle - 193)) | (1 << (bitmarkParser.AmpDocument - 193)) | (1 << (bitmarkParser.AmpApp - 193)) | (1 << (bitmarkParser.AmpWebsite - 193)) | (1 << (bitmarkParser.AmpStillImageFilm - 193)) | (1 << (bitmarkParser.AmpAudioLink - 193)) | (1 << (bitmarkParser.AmpImageLink - 193)) | (1 << (bitmarkParser.AmpVideoLink - 193)) | (1 << (bitmarkParser.AmpArticleLink - 193)) | (1 << (bitmarkParser.AmpDocumentLink - 193)) | (1 << (bitmarkParser.AmpAppLink - 193)) | (1 << (bitmarkParser.AmpWebsiteLink - 193)) | (1 << (bitmarkParser.AmpStillImageFilmLink - 193)))) !== 0) || ((((_la - 232)) & ~0x1F) === 0 && ((1 << (_la - 232)) & ((1 << (bitmarkParser.BitmarkMinus - 232)) | (1 << (bitmarkParser.BitmarkPlus - 232)) | (1 << (bitmarkParser.URL - 232)))) !== 0)) {
					{
					this.state = 3742;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 502, this._ctx) ) {
					case 1:
						{
						this.state = 3737;
						this.s_and_w();
						}
						break;

					case 2:
						{
						this.state = 3738;
						this.match(bitmarkParser.COLON);
						}
						break;

					case 3:
						{
						this.state = 3739;
						this.match(bitmarkParser.URL);
						}
						break;

					case 4:
						{
						this.state = 3740;
						this.match(bitmarkParser.NL);
						}
						break;

					case 5:
						{
						this.state = 3741;
						this.match(bitmarkParser.S);
						}
						break;
					}
					}
					this.state = 3746;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 3747;
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
		this.enterRule(_localctx, 350, bitmarkParser.RULE_progress);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 3750;
			this.match(bitmarkParser.AtProgress);
			this.state = 3751;
			this.s_and_w();
			this.state = 3752;
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
		this.enterRule(_localctx, 352, bitmarkParser.RULE_dateprop);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 3754;
			this.match(bitmarkParser.AtDate);
			this.state = 3758;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				this.state = 3758;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 505, this._ctx) ) {
				case 1:
					{
					this.state = 3755;
					this.s_and_w();
					}
					break;

				case 2:
					{
					this.state = 3756;
					this.match(bitmarkParser.COLON);
					}
					break;

				case 3:
					{
					this.state = 3757;
					this.match(bitmarkParser.NL);
					}
					break;
				}
				}
				this.state = 3760;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === bitmarkParser.S || ((((_la - 127)) & ~0x1F) === 0 && ((1 << (_la - 127)) & ((1 << (bitmarkParser.OPESC - 127)) | (1 << (bitmarkParser.OPS - 127)) | (1 << (bitmarkParser.COLON - 127)) | (1 << (bitmarkParser.AMP - 127)) | (1 << (bitmarkParser.Greater - 127)) | (1 << (bitmarkParser.Less - 127)) | (1 << (bitmarkParser.RightAngle - 127)) | (1 << (bitmarkParser.RightArrow - 127)) | (1 << (bitmarkParser.DBLEQ - 127)) | (1 << (bitmarkParser.QUOTE_INDEX - 127)))) !== 0) || ((((_la - 160)) & ~0x1F) === 0 && ((1 << (_la - 160)) & ((1 << (bitmarkParser.NUMERIC - 160)) | (1 << (bitmarkParser.STRING - 160)) | (1 << (bitmarkParser.NL - 160)) | (1 << (bitmarkParser.SENTENCE - 160)))) !== 0) || ((((_la - 193)) & ~0x1F) === 0 && ((1 << (_la - 193)) & ((1 << (bitmarkParser.AmpAudio - 193)) | (1 << (bitmarkParser.AmpImage - 193)) | (1 << (bitmarkParser.AmpVideo - 193)) | (1 << (bitmarkParser.AmpArticle - 193)) | (1 << (bitmarkParser.AmpDocument - 193)) | (1 << (bitmarkParser.AmpApp - 193)) | (1 << (bitmarkParser.AmpWebsite - 193)) | (1 << (bitmarkParser.AmpStillImageFilm - 193)) | (1 << (bitmarkParser.AmpAudioLink - 193)) | (1 << (bitmarkParser.AmpImageLink - 193)) | (1 << (bitmarkParser.AmpVideoLink - 193)) | (1 << (bitmarkParser.AmpArticleLink - 193)) | (1 << (bitmarkParser.AmpDocumentLink - 193)) | (1 << (bitmarkParser.AmpAppLink - 193)) | (1 << (bitmarkParser.AmpWebsiteLink - 193)) | (1 << (bitmarkParser.AmpStillImageFilmLink - 193)))) !== 0) || ((((_la - 232)) & ~0x1F) === 0 && ((1 << (_la - 232)) & ((1 << (bitmarkParser.BitmarkMinus - 232)) | (1 << (bitmarkParser.BitmarkPlus - 232)) | (1 << (bitmarkParser.URL - 232)))) !== 0));
			this.state = 3762;
			this.match(bitmarkParser.CL);
			this.state = 3764;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 507, this._ctx) ) {
			case 1:
				{
				this.state = 3763;
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
		this.enterRule(_localctx, 354, bitmarkParser.RULE_dateprop_chained);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 3766;
			this.match(bitmarkParser.AtDate);
			this.state = 3770;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				this.state = 3770;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 508, this._ctx) ) {
				case 1:
					{
					this.state = 3767;
					this.s_and_w();
					}
					break;

				case 2:
					{
					this.state = 3768;
					this.match(bitmarkParser.COLON);
					}
					break;

				case 3:
					{
					this.state = 3769;
					this.match(bitmarkParser.NL);
					}
					break;
				}
				}
				this.state = 3772;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === bitmarkParser.S || ((((_la - 127)) & ~0x1F) === 0 && ((1 << (_la - 127)) & ((1 << (bitmarkParser.OPESC - 127)) | (1 << (bitmarkParser.OPS - 127)) | (1 << (bitmarkParser.COLON - 127)) | (1 << (bitmarkParser.AMP - 127)) | (1 << (bitmarkParser.Greater - 127)) | (1 << (bitmarkParser.Less - 127)) | (1 << (bitmarkParser.RightAngle - 127)) | (1 << (bitmarkParser.RightArrow - 127)) | (1 << (bitmarkParser.DBLEQ - 127)) | (1 << (bitmarkParser.QUOTE_INDEX - 127)))) !== 0) || ((((_la - 160)) & ~0x1F) === 0 && ((1 << (_la - 160)) & ((1 << (bitmarkParser.NUMERIC - 160)) | (1 << (bitmarkParser.STRING - 160)) | (1 << (bitmarkParser.NL - 160)) | (1 << (bitmarkParser.SENTENCE - 160)))) !== 0) || ((((_la - 193)) & ~0x1F) === 0 && ((1 << (_la - 193)) & ((1 << (bitmarkParser.AmpAudio - 193)) | (1 << (bitmarkParser.AmpImage - 193)) | (1 << (bitmarkParser.AmpVideo - 193)) | (1 << (bitmarkParser.AmpArticle - 193)) | (1 << (bitmarkParser.AmpDocument - 193)) | (1 << (bitmarkParser.AmpApp - 193)) | (1 << (bitmarkParser.AmpWebsite - 193)) | (1 << (bitmarkParser.AmpStillImageFilm - 193)) | (1 << (bitmarkParser.AmpAudioLink - 193)) | (1 << (bitmarkParser.AmpImageLink - 193)) | (1 << (bitmarkParser.AmpVideoLink - 193)) | (1 << (bitmarkParser.AmpArticleLink - 193)) | (1 << (bitmarkParser.AmpDocumentLink - 193)) | (1 << (bitmarkParser.AmpAppLink - 193)) | (1 << (bitmarkParser.AmpWebsiteLink - 193)) | (1 << (bitmarkParser.AmpStillImageFilmLink - 193)))) !== 0) || ((((_la - 232)) & ~0x1F) === 0 && ((1 << (_la - 232)) & ((1 << (bitmarkParser.BitmarkMinus - 232)) | (1 << (bitmarkParser.BitmarkPlus - 232)) | (1 << (bitmarkParser.URL - 232)))) !== 0));
			this.state = 3774;
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
		this.enterRule(_localctx, 356, bitmarkParser.RULE_instruction);
		let _la: number;
		try {
			let _alt: number;
			this.state = 3810;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 516, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 3776;
				this.match(bitmarkParser.OPB);
				this.state = 3778;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 510, this._ctx) ) {
				case 1:
					{
					this.state = 3777;
					this.s_and_w();
					}
					break;
				}
				this.state = 3801;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === bitmarkParser.S || ((((_la - 127)) & ~0x1F) === 0 && ((1 << (_la - 127)) & ((1 << (bitmarkParser.OPESC - 127)) | (1 << (bitmarkParser.OPS - 127)) | (1 << (bitmarkParser.COLON - 127)) | (1 << (bitmarkParser.AMP - 127)) | (1 << (bitmarkParser.Greater - 127)) | (1 << (bitmarkParser.Less - 127)) | (1 << (bitmarkParser.RightAngle - 127)) | (1 << (bitmarkParser.RightArrow - 127)) | (1 << (bitmarkParser.DBLEQ - 127)) | (1 << (bitmarkParser.QUOTE_INDEX - 127)))) !== 0) || ((((_la - 160)) & ~0x1F) === 0 && ((1 << (_la - 160)) & ((1 << (bitmarkParser.NUMERIC - 160)) | (1 << (bitmarkParser.STRING - 160)) | (1 << (bitmarkParser.SENTENCE - 160)))) !== 0) || ((((_la - 193)) & ~0x1F) === 0 && ((1 << (_la - 193)) & ((1 << (bitmarkParser.AmpAudio - 193)) | (1 << (bitmarkParser.AmpImage - 193)) | (1 << (bitmarkParser.AmpVideo - 193)) | (1 << (bitmarkParser.AmpArticle - 193)) | (1 << (bitmarkParser.AmpDocument - 193)) | (1 << (bitmarkParser.AmpApp - 193)) | (1 << (bitmarkParser.AmpWebsite - 193)) | (1 << (bitmarkParser.AmpStillImageFilm - 193)) | (1 << (bitmarkParser.AmpAudioLink - 193)) | (1 << (bitmarkParser.AmpImageLink - 193)) | (1 << (bitmarkParser.AmpVideoLink - 193)) | (1 << (bitmarkParser.AmpArticleLink - 193)) | (1 << (bitmarkParser.AmpDocumentLink - 193)) | (1 << (bitmarkParser.AmpAppLink - 193)) | (1 << (bitmarkParser.AmpWebsiteLink - 193)) | (1 << (bitmarkParser.AmpStillImageFilmLink - 193)))) !== 0) || ((((_la - 232)) & ~0x1F) === 0 && ((1 << (_la - 232)) & ((1 << (bitmarkParser.BitmarkMinus - 232)) | (1 << (bitmarkParser.BitmarkPlus - 232)) | (1 << (bitmarkParser.URL - 232)))) !== 0)) {
					{
					{
					this.state = 3780;
					this.s_and_w();
					this.state = 3790;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 512, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 3781;
							this.match(bitmarkParser.NL);
							this.state = 3785;
							this._errHandler.sync(this);
							_alt = this.interpreter.adaptivePredict(this._input, 511, this._ctx);
							while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
								if (_alt === 1) {
									{
									{
									this.state = 3782;
									this.match(bitmarkParser.S);
									}
									}
								}
								this.state = 3787;
								this._errHandler.sync(this);
								_alt = this.interpreter.adaptivePredict(this._input, 511, this._ctx);
							}
							}
							}
						}
						this.state = 3792;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 512, this._ctx);
					}
					this.state = 3796;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === bitmarkParser.NL) {
						{
						{
						this.state = 3793;
						this.match(bitmarkParser.NL);
						}
						}
						this.state = 3798;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
					}
					this.state = 3803;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 3804;
				this.match(bitmarkParser.CL);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 3805;
				this.match(bitmarkParser.OPB);
				this.state = 3807;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === bitmarkParser.S || ((((_la - 127)) & ~0x1F) === 0 && ((1 << (_la - 127)) & ((1 << (bitmarkParser.OPESC - 127)) | (1 << (bitmarkParser.OPS - 127)) | (1 << (bitmarkParser.COLON - 127)) | (1 << (bitmarkParser.AMP - 127)) | (1 << (bitmarkParser.Greater - 127)) | (1 << (bitmarkParser.Less - 127)) | (1 << (bitmarkParser.RightAngle - 127)) | (1 << (bitmarkParser.RightArrow - 127)) | (1 << (bitmarkParser.DBLEQ - 127)) | (1 << (bitmarkParser.QUOTE_INDEX - 127)))) !== 0) || ((((_la - 160)) & ~0x1F) === 0 && ((1 << (_la - 160)) & ((1 << (bitmarkParser.NUMERIC - 160)) | (1 << (bitmarkParser.STRING - 160)) | (1 << (bitmarkParser.SENTENCE - 160)))) !== 0) || ((((_la - 193)) & ~0x1F) === 0 && ((1 << (_la - 193)) & ((1 << (bitmarkParser.AmpAudio - 193)) | (1 << (bitmarkParser.AmpImage - 193)) | (1 << (bitmarkParser.AmpVideo - 193)) | (1 << (bitmarkParser.AmpArticle - 193)) | (1 << (bitmarkParser.AmpDocument - 193)) | (1 << (bitmarkParser.AmpApp - 193)) | (1 << (bitmarkParser.AmpWebsite - 193)) | (1 << (bitmarkParser.AmpStillImageFilm - 193)) | (1 << (bitmarkParser.AmpAudioLink - 193)) | (1 << (bitmarkParser.AmpImageLink - 193)) | (1 << (bitmarkParser.AmpVideoLink - 193)) | (1 << (bitmarkParser.AmpArticleLink - 193)) | (1 << (bitmarkParser.AmpDocumentLink - 193)) | (1 << (bitmarkParser.AmpAppLink - 193)) | (1 << (bitmarkParser.AmpWebsiteLink - 193)) | (1 << (bitmarkParser.AmpStillImageFilmLink - 193)))) !== 0) || ((((_la - 232)) & ~0x1F) === 0 && ((1 << (_la - 232)) & ((1 << (bitmarkParser.BitmarkMinus - 232)) | (1 << (bitmarkParser.BitmarkPlus - 232)) | (1 << (bitmarkParser.URL - 232)))) !== 0)) {
					{
					this.state = 3806;
					this.s_and_w();
					}
				}

				this.state = 3809;
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
		this.enterRule(_localctx, 358, bitmarkParser.RULE_hint);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 3812;
			this.match(bitmarkParser.OPQ);
			this.state = 3814;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 3813;
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
				this.state = 3816;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << bitmarkParser.OPDOT) | (1 << bitmarkParser.S) | (1 << bitmarkParser.BitBook) | (1 << bitmarkParser.BitChapter) | (1 << bitmarkParser.BitToc) | (1 << bitmarkParser.BitSummary) | (1 << bitmarkParser.BitIntlink) | (1 << bitmarkParser.BitIntRef) | (1 << bitmarkParser.BitAlias) | (1 << bitmarkParser.BitGroups) | (1 << bitmarkParser.BitGroupt) | (1 << bitmarkParser.BitPlaceholder) | (1 << bitmarkParser.BitStatement) | (1 << bitmarkParser.BitDetails) | (1 << bitmarkParser.BitSampleSolution) | (1 << bitmarkParser.BitTakeAudio) | (1 << bitmarkParser.CLOZE) | (1 << bitmarkParser.MATCH) | (1 << bitmarkParser.BitArticle) | (1 << bitmarkParser.BitPage) | (1 << bitmarkParser.BitEssay) | (1 << bitmarkParser.BitMessage) | (1 << bitmarkParser.BitCorrection) | (1 << bitmarkParser.BitMark) | (1 << bitmarkParser.BitDocup) | (1 << bitmarkParser.BitTakepic) | (1 << bitmarkParser.BitRecaud) | (1 << bitmarkParser.BitPrepnote) | (1 << bitmarkParser.BitAssign) | (1 << bitmarkParser.BitBotint) | (1 << bitmarkParser.BitSelfassess))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (bitmarkParser.BitRating - 32)) | (1 << (bitmarkParser.BitSurvey - 32)) | (1 << (bitmarkParser.BitSurvey1 - 32)) | (1 << (bitmarkParser.BitSurveyanon - 32)) | (1 << (bitmarkParser.BitSurveyanon1 - 32)) | (1 << (bitmarkParser.BitVocabulary - 32)) | (1 << (bitmarkParser.BitVocabulary1 - 32)) | (1 << (bitmarkParser.BitNote - 32)) | (1 << (bitmarkParser.BitInfo - 32)) | (1 << (bitmarkParser.BitWarning - 32)) | (1 << (bitmarkParser.BitRemark - 32)) | (1 << (bitmarkParser.BitHint - 32)) | (1 << (bitmarkParser.BitHelp - 32)) | (1 << (bitmarkParser.BitDanger - 32)) | (1 << (bitmarkParser.BitBug - 32)) | (1 << (bitmarkParser.BitSidenote - 32)) | (1 << (bitmarkParser.BitStickynote - 32)) | (1 << (bitmarkParser.BitQuote - 32)) | (1 << (bitmarkParser.BitFootnote - 32)) | (1 << (bitmarkParser.BitExample - 32)) | (1 << (bitmarkParser.BitButtonCopytext - 32)) | (1 << (bitmarkParser.BitWbtContinue - 32)) | (1 << (bitmarkParser.BitLearningPathDetails - 32)) | (1 << (bitmarkParser.BitLearningPathLti - 32)) | (1 << (bitmarkParser.BitLearningPathStep - 32)) | (1 << (bitmarkParser.BitLearningPathBook - 32)) | (1 << (bitmarkParser.BitLearningPathSign - 32)) | (1 << (bitmarkParser.BitLearningPathVideoCall - 32)) | (1 << (bitmarkParser.BitLearningPathLearningGoal - 32)) | (1 << (bitmarkParser.BitLearningPathClosing - 32)) | (1 << (bitmarkParser.BitLearningPathFeedback - 32)) | (1 << (bitmarkParser.BitLearningPathBotTraining - 32)))) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (bitmarkParser.BitLearningPathExternalLink - 64)) | (1 << (bitmarkParser.BitLearningPathClassroomTraining - 64)) | (1 << (bitmarkParser.BitLearningPathClassroomEvent - 64)) | (1 << (bitmarkParser.BitBotActionSend - 64)) | (1 << (bitmarkParser.BitBotActionAnnounce - 64)) | (1 << (bitmarkParser.BitBotActionSave - 64)) | (1 << (bitmarkParser.BitBotActionRemind - 64)) | (1 << (bitmarkParser.BitVendorPadletEmbed - 64)) | (1 << (bitmarkParser.BitScorm - 64)) | (1 << (bitmarkParser.BitImage - 64)) | (1 << (bitmarkParser.BitImageLink - 64)) | (1 << (bitmarkParser.BitImageZoom - 64)) | (1 << (bitmarkParser.BitAudio - 64)) | (1 << (bitmarkParser.BitAudioLink - 64)) | (1 << (bitmarkParser.BitAudioEmbed - 64)) | (1 << (bitmarkParser.BitVideo - 64)) | (1 << (bitmarkParser.BitVideoLink - 64)) | (1 << (bitmarkParser.BitVideoEmbed - 64)) | (1 << (bitmarkParser.BitStillImageFilm - 64)) | (1 << (bitmarkParser.BitStillImageFilmLink - 64)) | (1 << (bitmarkParser.BitStillImageFilmEmbed - 64)) | (1 << (bitmarkParser.BitWebsiteLink - 64)) | (1 << (bitmarkParser.BitDocument - 64)) | (1 << (bitmarkParser.BitDocumentLink - 64)) | (1 << (bitmarkParser.BitDocumentEmbed - 64)) | (1 << (bitmarkParser.BitDocumentDownload - 64)) | (1 << (bitmarkParser.BitAppLink - 64)) | (1 << (bitmarkParser.BitEditorial - 64)) | (1 << (bitmarkParser.BitBookFrontispiece - 64)) | (1 << (bitmarkParser.BitBookTitle - 64)) | (1 << (bitmarkParser.BitBookCopyright - 64)) | (1 << (bitmarkParser.BitBookDedication - 64)))) !== 0) || ((((_la - 96)) & ~0x1F) === 0 && ((1 << (_la - 96)) & ((1 << (bitmarkParser.BitBookForword - 96)) | (1 << (bitmarkParser.BitBookPreface - 96)) | (1 << (bitmarkParser.BitBookPrologue - 96)) | (1 << (bitmarkParser.BitBookEpilogue - 96)) | (1 << (bitmarkParser.BitBookIntroduction - 96)) | (1 << (bitmarkParser.BitBookIncitingIncident - 96)) | (1 << (bitmarkParser.BitBookConclusion - 96)) | (1 << (bitmarkParser.BitBookAfterword - 96)) | (1 << (bitmarkParser.BitBookPostscript - 96)) | (1 << (bitmarkParser.BitBookappendix - 96)) | (1 << (bitmarkParser.BitBookAddendum - 96)) | (1 << (bitmarkParser.BitBookAcknowledgments - 96)) | (1 << (bitmarkParser.BitBookListOfContributors - 96)) | (1 << (bitmarkParser.BitBookBibliography - 96)) | (1 << (bitmarkParser.BitBookReferenceList - 96)) | (1 << (bitmarkParser.BitBookEndnotes - 96)) | (1 << (bitmarkParser.BitBookNotes - 96)) | (1 << (bitmarkParser.BitBookCopyrightPermissions - 96)) | (1 << (bitmarkParser.BitBookTeaser - 96)) | (1 << (bitmarkParser.BitBookAutherBio - 96)) | (1 << (bitmarkParser.BitBookRequestForABookReview - 96)) | (1 << (bitmarkParser.BitBookComingSoon - 96)) | (1 << (bitmarkParser.BitBookReadMore - 96)) | (1 << (bitmarkParser.BitBookSummary - 96)) | (1 << (bitmarkParser.BitBookEpigraph - 96)) | (1 << (bitmarkParser.COMMENT - 96)) | (1 << (bitmarkParser.Image_type - 96)) | (1 << (bitmarkParser.Audio_type - 96)) | (1 << (bitmarkParser.Video_type - 96)) | (1 << (bitmarkParser.OPDOLL - 96)) | (1 << (bitmarkParser.OPBUL - 96)) | (1 << (bitmarkParser.OPESC - 96)))) !== 0) || ((((_la - 128)) & ~0x1F) === 0 && ((1 << (_la - 128)) & ((1 << (bitmarkParser.OPRANGLES - 128)) | (1 << (bitmarkParser.OPRANGLEL - 128)) | (1 << (bitmarkParser.OPDANGLE - 128)) | (1 << (bitmarkParser.OPU - 128)) | (1 << (bitmarkParser.OPB - 128)) | (1 << (bitmarkParser.OPQ - 128)) | (1 << (bitmarkParser.OPA - 128)) | (1 << (bitmarkParser.OPP - 128)) | (1 << (bitmarkParser.OPM - 128)) | (1 << (bitmarkParser.OPS - 128)) | (1 << (bitmarkParser.OPR - 128)) | (1 << (bitmarkParser.OPHASH - 128)) | (1 << (bitmarkParser.OPC - 128)) | (1 << (bitmarkParser.COLON - 128)) | (1 << (bitmarkParser.AMP - 128)) | (1 << (bitmarkParser.DBLCOLON - 128)) | (1 << (bitmarkParser.PLUS - 128)) | (1 << (bitmarkParser.DotAt - 128)) | (1 << (bitmarkParser.Greater - 128)) | (1 << (bitmarkParser.Less - 128)) | (1 << (bitmarkParser.RightAngle - 128)) | (1 << (bitmarkParser.RightArrow - 128)) | (1 << (bitmarkParser.DBLEQ - 128)) | (1 << (bitmarkParser.HSPL - 128)) | (1 << (bitmarkParser.HSPL2 - 128)) | (1 << (bitmarkParser.SSPL - 128)) | (1 << (bitmarkParser.SSPL2 - 128)) | (1 << (bitmarkParser.QUOTE_INDEX - 128)) | (1 << (bitmarkParser.DCANY - 128)) | (1 << (bitmarkParser.ArticleText - 128)) | (1 << (bitmarkParser.NOTCL - 128)))) !== 0) || ((((_la - 160)) & ~0x1F) === 0 && ((1 << (_la - 160)) & ((1 << (bitmarkParser.NUMERIC - 160)) | (1 << (bitmarkParser.STRING - 160)) | (1 << (bitmarkParser.NL - 160)) | (1 << (bitmarkParser.SENTENCE - 160)) | (1 << (bitmarkParser.OPAT - 160)) | (1 << (bitmarkParser.AtProgress - 160)) | (1 << (bitmarkParser.AtReference - 160)) | (1 << (bitmarkParser.AtWidth - 160)) | (1 << (bitmarkParser.AtHeight - 160)) | (1 << (bitmarkParser.AtProgressPoints - 160)) | (1 << (bitmarkParser.AtShortanswer - 160)) | (1 << (bitmarkParser.AtLonganswer - 160)) | (1 << (bitmarkParser.AtExampleWithStr - 160)) | (1 << (bitmarkParser.AtExamplecol - 160)) | (1 << (bitmarkParser.AtExamplecl - 160)) | (1 << (bitmarkParser.AtPartialAnswerS - 160)) | (1 << (bitmarkParser.AtPartialAnswer - 160)) | (1 << (bitmarkParser.AtLabeltrue - 160)) | (1 << (bitmarkParser.AtLabelfalse - 160)) | (1 << (bitmarkParser.AtPoints - 160)) | (1 << (bitmarkParser.AtSrc - 160)) | (1 << (bitmarkParser.OPATALT - 160)) | (1 << (bitmarkParser.OPAMARK - 160)) | (1 << (bitmarkParser.ShowInIndex - 160)) | (1 << (bitmarkParser.OpAtCaption - 160)) | (1 << (bitmarkParser.OpAtLicense - 160)) | (1 << (bitmarkParser.OpAtCopyright - 160)) | (1 << (bitmarkParser.OpAtSearch - 160)) | (1 << (bitmarkParser.OpAtIsTracked - 160)) | (1 << (bitmarkParser.OpAtIsInfoOnly - 160)) | (1 << (bitmarkParser.AtDate - 160)) | (1 << (bitmarkParser.Http - 160)))) !== 0) || ((((_la - 192)) & ~0x1F) === 0 && ((1 << (_la - 192)) & ((1 << (bitmarkParser.Https - 192)) | (1 << (bitmarkParser.AmpAudio - 192)) | (1 << (bitmarkParser.AmpImage - 192)) | (1 << (bitmarkParser.AmpImageZoom - 192)) | (1 << (bitmarkParser.AmpImageWAudio - 192)) | (1 << (bitmarkParser.AmpVideo - 192)) | (1 << (bitmarkParser.AmpArticle - 192)) | (1 << (bitmarkParser.AmpDocument - 192)) | (1 << (bitmarkParser.AmpApp - 192)) | (1 << (bitmarkParser.AmpWebsite - 192)) | (1 << (bitmarkParser.AmpStillImageFilm - 192)) | (1 << (bitmarkParser.AmpPdf - 192)) | (1 << (bitmarkParser.OpAmpAudio - 192)) | (1 << (bitmarkParser.OpAmpImage - 192)) | (1 << (bitmarkParser.OpAmpImageZoom - 192)) | (1 << (bitmarkParser.OpAmpImageWAudio - 192)) | (1 << (bitmarkParser.OpAmpVideo - 192)) | (1 << (bitmarkParser.OpAmpArticle - 192)) | (1 << (bitmarkParser.OpAmpArticleAtt - 192)) | (1 << (bitmarkParser.OpAmpDocument - 192)) | (1 << (bitmarkParser.OpAmpApp - 192)) | (1 << (bitmarkParser.OpAmpWebsite - 192)) | (1 << (bitmarkParser.OpAmpStillImageFilm - 192)) | (1 << (bitmarkParser.BracEnclose - 192)) | (1 << (bitmarkParser.AmpAudioLink - 192)) | (1 << (bitmarkParser.AmpImageLink - 192)) | (1 << (bitmarkParser.AmpVideoLink - 192)) | (1 << (bitmarkParser.AmpArticleLink - 192)) | (1 << (bitmarkParser.AmpDocumentLink - 192)) | (1 << (bitmarkParser.AmpAppLink - 192)) | (1 << (bitmarkParser.AmpWebsiteLink - 192)) | (1 << (bitmarkParser.AmpStillImageFilmLink - 192)))) !== 0) || ((((_la - 224)) & ~0x1F) === 0 && ((1 << (_la - 224)) & ((1 << (bitmarkParser.OpAmpAudioLink - 224)) | (1 << (bitmarkParser.OpAmpImageLink - 224)) | (1 << (bitmarkParser.OpAmpVideoLink - 224)) | (1 << (bitmarkParser.OpAmpArticleLink - 224)) | (1 << (bitmarkParser.OpAmpDocumentLink - 224)) | (1 << (bitmarkParser.OpAmpAppLink - 224)) | (1 << (bitmarkParser.OpAmpWebsiteLink - 224)) | (1 << (bitmarkParser.OpAmpStillImageFilmLink - 224)) | (1 << (bitmarkParser.BitmarkMinus - 224)) | (1 << (bitmarkParser.BitmarkPlus - 224)) | (1 << (bitmarkParser.ColonText - 224)) | (1 << (bitmarkParser.Prosemirror - 224)) | (1 << (bitmarkParser.Placeholder - 224)) | (1 << (bitmarkParser.BASIC - 224)) | (1 << (bitmarkParser.JPG - 224)) | (1 << (bitmarkParser.PNG - 224)) | (1 << (bitmarkParser.GIF - 224)) | (1 << (bitmarkParser.SVG - 224)) | (1 << (bitmarkParser.MP2 - 224)) | (1 << (bitmarkParser.MP3 - 224)) | (1 << (bitmarkParser.MP4 - 224)) | (1 << (bitmarkParser.FLV - 224)) | (1 << (bitmarkParser.WMV - 224)) | (1 << (bitmarkParser.MPEG - 224)) | (1 << (bitmarkParser.MPG - 224)) | (1 << (bitmarkParser.TEL - 224)) | (1 << (bitmarkParser.DotArticleAtt - 224)) | (1 << (bitmarkParser.STAR - 224)) | (1 << (bitmarkParser.URL - 224)) | (1 << (bitmarkParser.LIST_LINE - 224)))) !== 0));
			this.state = 3818;
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
		this.enterRule(_localctx, 360, bitmarkParser.RULE_title);
		let _la: number;
		try {
			this.state = 3832;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 520, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 3820;
				this.match(bitmarkParser.OPHASH);
				this.state = 3823;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					this.state = 3823;
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
						this.state = 3821;
						this.s_and_w();
						}
						break;
					case bitmarkParser.NL:
						{
						this.state = 3822;
						this.match(bitmarkParser.NL);
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					}
					this.state = 3825;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la === bitmarkParser.S || ((((_la - 127)) & ~0x1F) === 0 && ((1 << (_la - 127)) & ((1 << (bitmarkParser.OPESC - 127)) | (1 << (bitmarkParser.OPS - 127)) | (1 << (bitmarkParser.COLON - 127)) | (1 << (bitmarkParser.AMP - 127)) | (1 << (bitmarkParser.Greater - 127)) | (1 << (bitmarkParser.Less - 127)) | (1 << (bitmarkParser.RightAngle - 127)) | (1 << (bitmarkParser.RightArrow - 127)) | (1 << (bitmarkParser.DBLEQ - 127)) | (1 << (bitmarkParser.QUOTE_INDEX - 127)))) !== 0) || ((((_la - 160)) & ~0x1F) === 0 && ((1 << (_la - 160)) & ((1 << (bitmarkParser.NUMERIC - 160)) | (1 << (bitmarkParser.STRING - 160)) | (1 << (bitmarkParser.NL - 160)) | (1 << (bitmarkParser.SENTENCE - 160)))) !== 0) || ((((_la - 193)) & ~0x1F) === 0 && ((1 << (_la - 193)) & ((1 << (bitmarkParser.AmpAudio - 193)) | (1 << (bitmarkParser.AmpImage - 193)) | (1 << (bitmarkParser.AmpVideo - 193)) | (1 << (bitmarkParser.AmpArticle - 193)) | (1 << (bitmarkParser.AmpDocument - 193)) | (1 << (bitmarkParser.AmpApp - 193)) | (1 << (bitmarkParser.AmpWebsite - 193)) | (1 << (bitmarkParser.AmpStillImageFilm - 193)) | (1 << (bitmarkParser.AmpAudioLink - 193)) | (1 << (bitmarkParser.AmpImageLink - 193)) | (1 << (bitmarkParser.AmpVideoLink - 193)) | (1 << (bitmarkParser.AmpArticleLink - 193)) | (1 << (bitmarkParser.AmpDocumentLink - 193)) | (1 << (bitmarkParser.AmpAppLink - 193)) | (1 << (bitmarkParser.AmpWebsiteLink - 193)) | (1 << (bitmarkParser.AmpStillImageFilmLink - 193)))) !== 0) || ((((_la - 232)) & ~0x1F) === 0 && ((1 << (_la - 232)) & ((1 << (bitmarkParser.BitmarkMinus - 232)) | (1 << (bitmarkParser.BitmarkPlus - 232)) | (1 << (bitmarkParser.URL - 232)))) !== 0));
				this.state = 3827;
				this.match(bitmarkParser.CL);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 3828;
				this.match(bitmarkParser.OPHASH);
				this.state = 3829;
				this.s_and_w();
				this.state = 3830;
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
		this.enterRule(_localctx, 362, bitmarkParser.RULE_bool_label);
		try {
			this.state = 3842;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case bitmarkParser.AtLabeltrue:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 3834;
				this.match(bitmarkParser.AtLabeltrue);
				this.state = 3835;
				this.s_and_w();
				this.state = 3836;
				this.match(bitmarkParser.CL);
				}
				break;
			case bitmarkParser.AtLabelfalse:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 3838;
				this.match(bitmarkParser.AtLabelfalse);
				this.state = 3839;
				this.s_and_w();
				this.state = 3840;
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
		this.enterRule(_localctx, 364, bitmarkParser.RULE_progress_points);
		try {
			this.state = 3853;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 522, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 3844;
				this.match(bitmarkParser.AtProgressPoints);
				this.state = 3845;
				this.match(bitmarkParser.COLON);
				this.state = 3846;
				this.match(bitmarkParser.NUMERIC);
				this.state = 3847;
				this.match(bitmarkParser.CL);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 3848;
				this.match(bitmarkParser.AtProgressPoints);
				this.state = 3849;
				this.match(bitmarkParser.COLON);
				this.state = 3850;
				this.s_and_w();
				this.state = 3851;
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
		this.enterRule(_localctx, 366, bitmarkParser.RULE_istracked);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 3855;
			this.match(bitmarkParser.OpAtIsTracked);
			this.state = 3856;
			this.s_and_w();
			this.state = 3857;
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
		this.enterRule(_localctx, 368, bitmarkParser.RULE_isinfoonly);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 3859;
			this.match(bitmarkParser.OpAtIsInfoOnly);
			this.state = 3860;
			this.s_and_w();
			this.state = 3861;
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
		this.enterRule(_localctx, 370, bitmarkParser.RULE_atdef);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 3863;
			this.atdef_();
			this.state = 3873;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 524, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 3867;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === bitmarkParser.NL) {
						{
						{
						this.state = 3864;
						this.match(bitmarkParser.NL);
						}
						}
						this.state = 3869;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					this.state = 3870;
					this.atdef_();
					}
					}
				}
				this.state = 3875;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 524, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 372, bitmarkParser.RULE_atdef_);
		let _la: number;
		try {
			let _alt: number;
			this.state = 3898;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case bitmarkParser.OPA:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 3876;
				this.match(bitmarkParser.OPA);
				this.state = 3877;
				this.s_and_w();
				this.state = 3878;
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
				this.state = 3879;
				this.s_and_w();
				this.state = 3885;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === bitmarkParser.S || ((((_la - 127)) & ~0x1F) === 0 && ((1 << (_la - 127)) & ((1 << (bitmarkParser.OPESC - 127)) | (1 << (bitmarkParser.OPS - 127)) | (1 << (bitmarkParser.COLON - 127)) | (1 << (bitmarkParser.AMP - 127)) | (1 << (bitmarkParser.Greater - 127)) | (1 << (bitmarkParser.Less - 127)) | (1 << (bitmarkParser.RightAngle - 127)) | (1 << (bitmarkParser.RightArrow - 127)) | (1 << (bitmarkParser.DBLEQ - 127)) | (1 << (bitmarkParser.QUOTE_INDEX - 127)))) !== 0) || ((((_la - 160)) & ~0x1F) === 0 && ((1 << (_la - 160)) & ((1 << (bitmarkParser.NUMERIC - 160)) | (1 << (bitmarkParser.STRING - 160)) | (1 << (bitmarkParser.NL - 160)) | (1 << (bitmarkParser.SENTENCE - 160)))) !== 0) || ((((_la - 193)) & ~0x1F) === 0 && ((1 << (_la - 193)) & ((1 << (bitmarkParser.AmpAudio - 193)) | (1 << (bitmarkParser.AmpImage - 193)) | (1 << (bitmarkParser.AmpVideo - 193)) | (1 << (bitmarkParser.AmpArticle - 193)) | (1 << (bitmarkParser.AmpDocument - 193)) | (1 << (bitmarkParser.AmpApp - 193)) | (1 << (bitmarkParser.AmpWebsite - 193)) | (1 << (bitmarkParser.AmpStillImageFilm - 193)) | (1 << (bitmarkParser.AmpAudioLink - 193)) | (1 << (bitmarkParser.AmpImageLink - 193)) | (1 << (bitmarkParser.AmpVideoLink - 193)) | (1 << (bitmarkParser.AmpArticleLink - 193)) | (1 << (bitmarkParser.AmpDocumentLink - 193)) | (1 << (bitmarkParser.AmpAppLink - 193)) | (1 << (bitmarkParser.AmpWebsiteLink - 193)) | (1 << (bitmarkParser.AmpStillImageFilmLink - 193)))) !== 0) || ((((_la - 232)) & ~0x1F) === 0 && ((1 << (_la - 232)) & ((1 << (bitmarkParser.BitmarkMinus - 232)) | (1 << (bitmarkParser.BitmarkPlus - 232)) | (1 << (bitmarkParser.URL - 232)))) !== 0)) {
					{
					this.state = 3883;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 525, this._ctx) ) {
					case 1:
						{
						this.state = 3880;
						this.match(bitmarkParser.NL);
						}
						break;

					case 2:
						{
						this.state = 3881;
						this.match(bitmarkParser.COLON);
						}
						break;

					case 3:
						{
						this.state = 3882;
						this.s_and_w();
						}
						break;
					}
					}
					this.state = 3887;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 3888;
				this.match(bitmarkParser.CL);
				}
				break;
			case bitmarkParser.OpAtCopyright:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 3890;
				this.match(bitmarkParser.OpAtCopyright);
				this.state = 3894;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 527, this._ctx);
				while (_alt !== 1 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1 + 1) {
						{
						{
						this.state = 3891;
						this.matchWildcard();
						}
						}
					}
					this.state = 3896;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 527, this._ctx);
				}
				this.state = 3897;
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
		this.enterRule(_localctx, 374, bitmarkParser.RULE_dollarans);
		let _la: number;
		try {
			this.state = 3919;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 533, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 3900;
				this.match(bitmarkParser.OPDOLL);
				this.state = 3904;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					this.state = 3904;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 529, this._ctx) ) {
					case 1:
						{
						this.state = 3901;
						this.s_and_w();
						}
						break;

					case 2:
						{
						this.state = 3902;
						this.match(bitmarkParser.COLON);
						}
						break;

					case 3:
						{
						this.state = 3903;
						this.match(bitmarkParser.NL);
						}
						break;
					}
					}
					this.state = 3906;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la === bitmarkParser.S || ((((_la - 127)) & ~0x1F) === 0 && ((1 << (_la - 127)) & ((1 << (bitmarkParser.OPESC - 127)) | (1 << (bitmarkParser.OPS - 127)) | (1 << (bitmarkParser.COLON - 127)) | (1 << (bitmarkParser.AMP - 127)) | (1 << (bitmarkParser.Greater - 127)) | (1 << (bitmarkParser.Less - 127)) | (1 << (bitmarkParser.RightAngle - 127)) | (1 << (bitmarkParser.RightArrow - 127)) | (1 << (bitmarkParser.DBLEQ - 127)) | (1 << (bitmarkParser.QUOTE_INDEX - 127)))) !== 0) || ((((_la - 160)) & ~0x1F) === 0 && ((1 << (_la - 160)) & ((1 << (bitmarkParser.NUMERIC - 160)) | (1 << (bitmarkParser.STRING - 160)) | (1 << (bitmarkParser.NL - 160)) | (1 << (bitmarkParser.SENTENCE - 160)))) !== 0) || ((((_la - 193)) & ~0x1F) === 0 && ((1 << (_la - 193)) & ((1 << (bitmarkParser.AmpAudio - 193)) | (1 << (bitmarkParser.AmpImage - 193)) | (1 << (bitmarkParser.AmpVideo - 193)) | (1 << (bitmarkParser.AmpArticle - 193)) | (1 << (bitmarkParser.AmpDocument - 193)) | (1 << (bitmarkParser.AmpApp - 193)) | (1 << (bitmarkParser.AmpWebsite - 193)) | (1 << (bitmarkParser.AmpStillImageFilm - 193)) | (1 << (bitmarkParser.AmpAudioLink - 193)) | (1 << (bitmarkParser.AmpImageLink - 193)) | (1 << (bitmarkParser.AmpVideoLink - 193)) | (1 << (bitmarkParser.AmpArticleLink - 193)) | (1 << (bitmarkParser.AmpDocumentLink - 193)) | (1 << (bitmarkParser.AmpAppLink - 193)) | (1 << (bitmarkParser.AmpWebsiteLink - 193)) | (1 << (bitmarkParser.AmpStillImageFilmLink - 193)))) !== 0) || ((((_la - 232)) & ~0x1F) === 0 && ((1 << (_la - 232)) & ((1 << (bitmarkParser.BitmarkMinus - 232)) | (1 << (bitmarkParser.BitmarkPlus - 232)) | (1 << (bitmarkParser.URL - 232)))) !== 0));
				this.state = 3908;
				this.match(bitmarkParser.CL);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 3909;
				this.match(bitmarkParser.OPDOLL);
				this.state = 3915;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === bitmarkParser.S || ((((_la - 127)) & ~0x1F) === 0 && ((1 << (_la - 127)) & ((1 << (bitmarkParser.OPESC - 127)) | (1 << (bitmarkParser.OPS - 127)) | (1 << (bitmarkParser.COLON - 127)) | (1 << (bitmarkParser.AMP - 127)) | (1 << (bitmarkParser.Greater - 127)) | (1 << (bitmarkParser.Less - 127)) | (1 << (bitmarkParser.RightAngle - 127)) | (1 << (bitmarkParser.RightArrow - 127)) | (1 << (bitmarkParser.DBLEQ - 127)) | (1 << (bitmarkParser.QUOTE_INDEX - 127)))) !== 0) || ((((_la - 160)) & ~0x1F) === 0 && ((1 << (_la - 160)) & ((1 << (bitmarkParser.NUMERIC - 160)) | (1 << (bitmarkParser.STRING - 160)) | (1 << (bitmarkParser.NL - 160)) | (1 << (bitmarkParser.SENTENCE - 160)))) !== 0) || ((((_la - 193)) & ~0x1F) === 0 && ((1 << (_la - 193)) & ((1 << (bitmarkParser.AmpAudio - 193)) | (1 << (bitmarkParser.AmpImage - 193)) | (1 << (bitmarkParser.AmpVideo - 193)) | (1 << (bitmarkParser.AmpArticle - 193)) | (1 << (bitmarkParser.AmpDocument - 193)) | (1 << (bitmarkParser.AmpApp - 193)) | (1 << (bitmarkParser.AmpWebsite - 193)) | (1 << (bitmarkParser.AmpStillImageFilm - 193)) | (1 << (bitmarkParser.AmpAudioLink - 193)) | (1 << (bitmarkParser.AmpImageLink - 193)) | (1 << (bitmarkParser.AmpVideoLink - 193)) | (1 << (bitmarkParser.AmpArticleLink - 193)) | (1 << (bitmarkParser.AmpDocumentLink - 193)) | (1 << (bitmarkParser.AmpAppLink - 193)) | (1 << (bitmarkParser.AmpWebsiteLink - 193)) | (1 << (bitmarkParser.AmpStillImageFilmLink - 193)))) !== 0) || ((((_la - 232)) & ~0x1F) === 0 && ((1 << (_la - 232)) & ((1 << (bitmarkParser.BitmarkMinus - 232)) | (1 << (bitmarkParser.BitmarkPlus - 232)) | (1 << (bitmarkParser.URL - 232)))) !== 0)) {
					{
					this.state = 3913;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 531, this._ctx) ) {
					case 1:
						{
						this.state = 3910;
						this.s_and_w();
						}
						break;

					case 2:
						{
						this.state = 3911;
						this.match(bitmarkParser.COLON);
						}
						break;

					case 3:
						{
						this.state = 3912;
						this.match(bitmarkParser.NL);
						}
						break;
					}
					}
					this.state = 3917;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 3918;
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
		this.enterRule(_localctx, 376, bitmarkParser.RULE_anchor);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 3921;
			this.match(bitmarkParser.OPDANGLE);
			this.state = 3923;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === bitmarkParser.S || ((((_la - 127)) & ~0x1F) === 0 && ((1 << (_la - 127)) & ((1 << (bitmarkParser.OPESC - 127)) | (1 << (bitmarkParser.OPS - 127)) | (1 << (bitmarkParser.COLON - 127)) | (1 << (bitmarkParser.AMP - 127)) | (1 << (bitmarkParser.Greater - 127)) | (1 << (bitmarkParser.Less - 127)) | (1 << (bitmarkParser.RightAngle - 127)) | (1 << (bitmarkParser.RightArrow - 127)) | (1 << (bitmarkParser.DBLEQ - 127)) | (1 << (bitmarkParser.QUOTE_INDEX - 127)))) !== 0) || ((((_la - 160)) & ~0x1F) === 0 && ((1 << (_la - 160)) & ((1 << (bitmarkParser.NUMERIC - 160)) | (1 << (bitmarkParser.STRING - 160)) | (1 << (bitmarkParser.SENTENCE - 160)))) !== 0) || ((((_la - 193)) & ~0x1F) === 0 && ((1 << (_la - 193)) & ((1 << (bitmarkParser.AmpAudio - 193)) | (1 << (bitmarkParser.AmpImage - 193)) | (1 << (bitmarkParser.AmpVideo - 193)) | (1 << (bitmarkParser.AmpArticle - 193)) | (1 << (bitmarkParser.AmpDocument - 193)) | (1 << (bitmarkParser.AmpApp - 193)) | (1 << (bitmarkParser.AmpWebsite - 193)) | (1 << (bitmarkParser.AmpStillImageFilm - 193)) | (1 << (bitmarkParser.AmpAudioLink - 193)) | (1 << (bitmarkParser.AmpImageLink - 193)) | (1 << (bitmarkParser.AmpVideoLink - 193)) | (1 << (bitmarkParser.AmpArticleLink - 193)) | (1 << (bitmarkParser.AmpDocumentLink - 193)) | (1 << (bitmarkParser.AmpAppLink - 193)) | (1 << (bitmarkParser.AmpWebsiteLink - 193)) | (1 << (bitmarkParser.AmpStillImageFilmLink - 193)))) !== 0) || ((((_la - 232)) & ~0x1F) === 0 && ((1 << (_la - 232)) & ((1 << (bitmarkParser.BitmarkMinus - 232)) | (1 << (bitmarkParser.BitmarkPlus - 232)) | (1 << (bitmarkParser.URL - 232)))) !== 0)) {
				{
				this.state = 3922;
				this.s_and_w();
				}
			}

			this.state = 3925;
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
		this.enterRule(_localctx, 378, bitmarkParser.RULE_lines);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 3931;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 3927;
					this.s_and_w();
					this.state = 3929;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 535, this._ctx) ) {
					case 1:
						{
						this.state = 3928;
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
				this.state = 3933;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 536, this._ctx);
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
		this.enterRule(_localctx, 380, bitmarkParser.RULE_s_and_w);
		let _la: number;
		try {
			let _alt: number;
			this.state = 3981;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 544, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 3935;
				this.match(bitmarkParser.STRING);
				this.state = 3942;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 538, this._ctx) ) {
				case 1:
					{
					this.state = 3937;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					do {
						{
						{
						this.state = 3936;
						this.match(bitmarkParser.S);
						}
						}
						this.state = 3939;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					} while (_la === bitmarkParser.S);
					this.state = 3941;
					this.match(bitmarkParser.NUMERIC);
					}
					break;
				}
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 3944;
				this.words();
				this.state = 3951;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 540, this._ctx) ) {
				case 1:
					{
					this.state = 3946;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					do {
						{
						{
						this.state = 3945;
						this.match(bitmarkParser.S);
						}
						}
						this.state = 3948;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					} while (_la === bitmarkParser.S);
					this.state = 3950;
					this.match(bitmarkParser.NUMERIC);
					}
					break;
				}
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 3953;
				this.match(bitmarkParser.NUMERIC);
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 3954;
				this.match(bitmarkParser.OPS);
				this.state = 3955;
				this.s_and_w();
				this.state = 3956;
				this.match(bitmarkParser.CL);
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 3961;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === bitmarkParser.S) {
					{
					{
					this.state = 3958;
					this.match(bitmarkParser.S);
					}
					}
					this.state = 3963;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 3964;
				this.match(bitmarkParser.COLON);
				this.state = 3968;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 542, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 3965;
						this.match(bitmarkParser.S);
						}
						}
					}
					this.state = 3970;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 542, this._ctx);
				}
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 3971;
				this.match(bitmarkParser.AMP);
				this.state = 3975;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 543, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 3972;
						this.match(bitmarkParser.S);
						}
						}
					}
					this.state = 3977;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 543, this._ctx);
				}
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 3978;
				this.match(bitmarkParser.DBLEQ);
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 3979;
				this.match(bitmarkParser.URL);
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 3980;
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
		this.enterRule(_localctx, 382, bitmarkParser.RULE_dclines);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 3983;
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
		this.enterRule(_localctx, 384, bitmarkParser.RULE_bracket_escaped);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 3985;
			this.match(bitmarkParser.OPESC);
			this.state = 3987;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 3986;
					this.s_and_w();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 3989;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 545, this._ctx);
			} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
			this.state = 3992;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 546, this._ctx) ) {
			case 1:
				{
				this.state = 3991;
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
		this.enterRule(_localctx, 386, bitmarkParser.RULE_clnsp);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 3994;
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
		this.enterRule(_localctx, 388, bitmarkParser.RULE_sspl);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 3996;
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
		this.enterRule(_localctx, 390, bitmarkParser.RULE_words);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 4025;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					this.state = 4025;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case bitmarkParser.SENTENCE:
						{
						this.state = 3998;
						this.sentence();
						}
						break;
					case bitmarkParser.AMP:
						{
						this.state = 3999;
						this.match(bitmarkParser.AMP);
						}
						break;
					case bitmarkParser.Greater:
						{
						this.state = 4000;
						this.match(bitmarkParser.Greater);
						this.state = 4001;
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
						this.state = 4002;
						this.match(bitmarkParser.Less);
						this.state = 4003;
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
						this.state = 4004;
						this.match(bitmarkParser.RightArrow);
						}
						break;
					case bitmarkParser.RightAngle:
						{
						this.state = 4005;
						this.match(bitmarkParser.RightAngle);
						}
						break;
					case bitmarkParser.AmpArticle:
						{
						this.state = 4006;
						this.match(bitmarkParser.AmpArticle);
						}
						break;
					case bitmarkParser.AmpArticleLink:
						{
						this.state = 4007;
						this.match(bitmarkParser.AmpArticleLink);
						}
						break;
					case bitmarkParser.AmpDocument:
						{
						this.state = 4008;
						this.match(bitmarkParser.AmpDocument);
						}
						break;
					case bitmarkParser.AmpDocumentLink:
						{
						this.state = 4009;
						this.match(bitmarkParser.AmpDocumentLink);
						}
						break;
					case bitmarkParser.AmpWebsite:
						{
						this.state = 4010;
						this.match(bitmarkParser.AmpWebsite);
						}
						break;
					case bitmarkParser.AmpWebsiteLink:
						{
						this.state = 4011;
						this.match(bitmarkParser.AmpWebsiteLink);
						}
						break;
					case bitmarkParser.AmpImage:
						{
						this.state = 4012;
						this.match(bitmarkParser.AmpImage);
						}
						break;
					case bitmarkParser.AmpImageLink:
						{
						this.state = 4013;
						this.match(bitmarkParser.AmpImageLink);
						}
						break;
					case bitmarkParser.AmpAudio:
						{
						this.state = 4014;
						this.match(bitmarkParser.AmpAudio);
						}
						break;
					case bitmarkParser.AmpAudioLink:
						{
						this.state = 4015;
						this.match(bitmarkParser.AmpAudioLink);
						}
						break;
					case bitmarkParser.AmpVideo:
						{
						this.state = 4016;
						this.match(bitmarkParser.AmpVideo);
						}
						break;
					case bitmarkParser.AmpVideoLink:
						{
						this.state = 4017;
						this.match(bitmarkParser.AmpVideoLink);
						}
						break;
					case bitmarkParser.AmpApp:
						{
						this.state = 4018;
						this.match(bitmarkParser.AmpApp);
						}
						break;
					case bitmarkParser.AmpAppLink:
						{
						this.state = 4019;
						this.match(bitmarkParser.AmpAppLink);
						}
						break;
					case bitmarkParser.AmpStillImageFilm:
						{
						this.state = 4020;
						this.match(bitmarkParser.AmpStillImageFilm);
						}
						break;
					case bitmarkParser.AmpStillImageFilmLink:
						{
						this.state = 4021;
						this.match(bitmarkParser.AmpStillImageFilmLink);
						}
						break;
					case bitmarkParser.BitmarkMinus:
						{
						this.state = 4022;
						this.match(bitmarkParser.BitmarkMinus);
						}
						break;
					case bitmarkParser.BitmarkPlus:
						{
						this.state = 4023;
						this.match(bitmarkParser.BitmarkPlus);
						}
						break;
					case bitmarkParser.QUOTE_INDEX:
						{
						this.state = 4024;
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
				this.state = 4027;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 548, this._ctx);
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
		this.enterRule(_localctx, 392, bitmarkParser.RULE_sp);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 4029;
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
		this.enterRule(_localctx, 394, bitmarkParser.RULE_sentence);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 4031;
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

	private static readonly _serializedATNSegments: number = 8;
	private static readonly _serializedATNSegment0: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\xFF\u0FC4\x04" +
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
		"\x04\xAA\t\xAA\x04\xAB\t\xAB\x04\xAC\t\xAC\x04\xAD\t\xAD\x04\xAE\t\xAE" +
		"\x04\xAF\t\xAF\x04\xB0\t\xB0\x04\xB1\t\xB1\x04\xB2\t\xB2\x04\xB3\t\xB3" +
		"\x04\xB4\t\xB4\x04\xB5\t\xB5\x04\xB6\t\xB6\x04\xB7\t\xB7\x04\xB8\t\xB8" +
		"\x04\xB9\t\xB9\x04\xBA\t\xBA\x04\xBB\t\xBB\x04\xBC\t\xBC\x04\xBD\t\xBD" +
		"\x04\xBE\t\xBE\x04\xBF\t\xBF\x04\xC0\t\xC0\x04\xC1\t\xC1\x04\xC2\t\xC2" +
		"\x04\xC3\t\xC3\x04\xC4\t\xC4\x04\xC5\t\xC5\x04\xC6\t\xC6\x04\xC7\t\xC7" +
		"\x03\x02\x03\x02\x07\x02\u0191\n\x02\f\x02\x0E\x02\u0194\v\x02\x03\x02" +
		"\x07\x02\u0197\n\x02\f\x02\x0E\x02\u019A\v\x02\x06\x02\u019C\n\x02\r\x02" +
		"\x0E\x02\u019D\x03\x02\x07\x02\u01A1\n\x02\f\x02\x0E\x02\u01A4\v\x02\x03" +
		"\x02\x03\x02\x03\x03\x03\x03\x05\x03\u01AA\n\x03\x03\x04\x03\x04\x03\x04" +
		"\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04" +
		"\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04" +
		"\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04" +
		"\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04" +
		"\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04" +
		"\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04" +
		"\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04" +
		"\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04" +
		"\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04" +
		"\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04" +
		"\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04" +
		"\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04" +
		"\x03\x04\x03\x04\x03\x04\x05\x04\u021E\n\x04\x03\x05\x03\x05\x05\x05\u0222" +
		"\n\x05\x03\x05\x03\x05\x07\x05\u0226\n\x05\f\x05\x0E\x05\u0229\v\x05\x03" +
		"\x05\x06\x05\u022C\n\x05\r\x05\x0E\x05\u022D\x03\x06\x03\x06\x05\x06\u0232" +
		"\n\x06\x03\x06\x03\x06\x07\x06\u0236\n\x06\f\x06\x0E\x06\u0239\v\x06\x03" +
		"\x06\x03\x06\x03\x06\x05\x06\u023E\n\x06\x03\x06\x03\x06\x07\x06\u0242" +
		"\n\x06\f\x06\x0E\x06\u0245\v\x06\x03\x06\x07\x06\u0248\n\x06\f\x06\x0E" +
		"\x06\u024B\v\x06\x03\x07\x03\x07\x05\x07\u024F\n\x07\x03\x07\x03\x07\x03" +
		"\x07\x03\x07\x03\x07\x05\x07\u0256\n\x07\x03\b\x03\b\x03\b\x07\b\u025B" +
		"\n\b\f\b\x0E\b\u025E\v\b\x03\b\x03\b\x03\t\x03\t\x05\t\u0264\n\t\x03\t" +
		"\x03\t\x07\t\u0268\n\t\f\t\x0E\t\u026B\v\t\x03\t\x07\t\u026E\n\t\f\t\x0E" +
		"\t\u0271\v\t\x03\n\x03\n\x03\n\x03\n\x03\v\x05\v\u0278\n\v\x03\v\x03\v" +
		"\x03\v\x03\v\x03\v\x03\v\x03\v\x05\v\u0281\n\v\x07\v\u0283\n\v\f\v\x0E" +
		"\v\u0286\v\v\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x06\f\u028E\n\f\r\f\x0E" +
		"\f\u028F\x03\f\x06\f\u0293\n\f\r\f\x0E\f\u0294\x03\f\x03\f\x07\f\u0299" +
		"\n\f\f\f\x0E\f\u029C\v\f\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x06\r\u02A4" +
		"\n\r\r\r\x0E\r\u02A5\x03\r\x06\r\u02A9\n\r\r\r\x0E\r\u02AA\x03\r\x03\r" +
		"\x07\r\u02AF\n\r\f\r\x0E\r\u02B2\v\r\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x07" +
		"\x0E\u02B8\n\x0E\f\x0E\x0E\x0E\u02BB\v\x0E\x03\x0E\x03\x0E\x07\x0E\u02BF" +
		"\n\x0E\f\x0E\x0E\x0E\u02C2\v\x0E\x06\x0E\u02C4\n\x0E\r\x0E\x0E\x0E\u02C5" +
		"\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x07\x0F\u02CC\n\x0F\f\x0F\x0E\x0F\u02CF" +
		"\v\x0F\x03\x0F\x03\x0F\x07\x0F\u02D3\n\x0F\f\x0F\x0E\x0F\u02D6\v\x0F\x06" +
		"\x0F\u02D8\n\x0F\r\x0F\x0E\x0F\u02D9\x03\x10\x03\x10\x03\x10\x03\x10\x07" +
		"\x10\u02E0\n\x10\f\x10\x0E\x10\u02E3\v\x10\x03\x10\x03\x10\x07\x10\u02E7" +
		"\n\x10\f\x10\x0E\x10\u02EA\v\x10\x06\x10\u02EC\n\x10\r\x10\x0E\x10\u02ED" +
		"\x03\x11\x03\x11\x03\x11\x03\x11\x07\x11\u02F4\n\x11\f\x11\x0E\x11\u02F7" +
		"\v\x11\x03\x11\x03\x11\x07\x11\u02FB\n\x11\f\x11\x0E\x11\u02FE\v\x11\x06" +
		"\x11\u0300\n\x11\r\x11\x0E\x11\u0301\x03\x12\x03\x12\x03\x12\x03\x12\x07" +
		"\x12\u0308\n\x12\f\x12\x0E\x12\u030B\v\x12\x03\x12\x03\x12\x07\x12\u030F" +
		"\n\x12\f\x12\x0E\x12\u0312\v\x12\x06\x12\u0314\n\x12\r\x12\x0E\x12\u0315" +
		"\x03\x13\x03\x13\x03\x13\x03\x13\x07\x13\u031C\n\x13\f\x13\x0E\x13\u031F" +
		"\v\x13\x03\x13\x03\x13\x07\x13\u0323\n\x13\f\x13\x0E\x13\u0326\v\x13\x06" +
		"\x13\u0328\n\x13\r\x13\x0E\x13\u0329\x03\x14\x03\x14\x03\x14\x03\x14\x07" +
		"\x14\u0330\n\x14\f\x14\x0E\x14\u0333\v\x14\x03\x14\x03\x14\x07\x14\u0337" +
		"\n\x14\f\x14\x0E\x14\u033A\v\x14\x06\x14\u033C\n\x14\r\x14\x0E\x14\u033D" +
		"\x03\x15\x03\x15\x03\x15\x03\x15\x07\x15\u0344\n\x15\f\x15\x0E\x15\u0347" +
		"\v\x15\x03\x15\x03\x15\x07\x15\u034B\n\x15\f\x15\x0E\x15\u034E\v\x15\x06" +
		"\x15\u0350\n\x15\r\x15\x0E\x15\u0351\x03\x16\x03\x16\x03\x16\x03\x16\x07" +
		"\x16\u0358\n\x16\f\x16\x0E\x16\u035B\v\x16\x03\x16\x03\x16\x07\x16\u035F" +
		"\n\x16\f\x16\x0E\x16\u0362\v\x16\x06\x16\u0364\n\x16\r\x16\x0E\x16\u0365" +
		"\x03\x17\x03\x17\x03\x17\x03\x17\x07\x17\u036C\n\x17\f\x17\x0E\x17\u036F" +
		"\v\x17\x03\x17\x03\x17\x07\x17\u0373\n\x17\f\x17\x0E\x17\u0376\v\x17\x06" +
		"\x17\u0378\n\x17\r\x17\x0E\x17\u0379\x03\x18\x03\x18\x03\x18\x03\x18\x07" +
		"\x18\u0380\n\x18\f\x18\x0E\x18\u0383\v\x18\x03\x18\x03\x18\x07\x18\u0387" +
		"\n\x18\f\x18\x0E\x18\u038A\v\x18\x06\x18\u038C\n\x18\r\x18\x0E\x18\u038D" +
		"\x03\x19\x03\x19\x03\x19\x03\x19\x07\x19\u0394\n\x19\f\x19\x0E\x19\u0397" +
		"\v\x19\x03\x19\x03\x19\x07\x19\u039B\n\x19\f\x19\x0E\x19\u039E\v\x19\x06" +
		"\x19\u03A0\n\x19\r\x19\x0E\x19\u03A1\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x07" +
		"\x1A\u03A8\n\x1A\f\x1A\x0E\x1A\u03AB\v\x1A\x03\x1A\x03\x1A\x07\x1A\u03AF" +
		"\n\x1A\f\x1A\x0E\x1A\u03B2\v\x1A\x06\x1A\u03B4\n\x1A\r\x1A\x0E\x1A\u03B5" +
		"\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x07\x1B\u03BC\n\x1B\f\x1B\x0E\x1B\u03BF" +
		"\v\x1B\x03\x1B\x03\x1B\x07\x1B\u03C3\n\x1B\f\x1B\x0E\x1B\u03C6\v\x1B\x06" +
		"\x1B\u03C8\n\x1B\r\x1B\x0E\x1B\u03C9\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x07" +
		"\x1C\u03D0\n\x1C\f\x1C\x0E\x1C\u03D3\v\x1C\x03\x1C\x03\x1C\x07\x1C\u03D7" +
		"\n\x1C\f\x1C\x0E\x1C\u03DA\v\x1C\x06\x1C\u03DC\n\x1C\r\x1C\x0E\x1C\u03DD" +
		"\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x07\x1D\u03E4\n\x1D\f\x1D\x0E\x1D\u03E7" +
		"\v\x1D\x03\x1D\x03\x1D\x07\x1D\u03EB\n\x1D\f\x1D\x0E\x1D\u03EE\v\x1D\x06" +
		"\x1D\u03F0\n\x1D\r\x1D\x0E\x1D\u03F1\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03" +
		"\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03" +
		"\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03" +
		"\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x05" +
		"\x1E\u0413\n\x1E\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x07\x1F" +
		"\u041B\n\x1F\f\x1F\x0E\x1F\u041E\v\x1F\x03 \x03 \x03 \x03 \x05 \u0424" +
		"\n \x03 \x07 \u0427\n \f \x0E \u042A\v \x03 \x03 \x03!\x05!\u042F\n!\x03" +
		"!\x03!\x06!\u0433\n!\r!\x0E!\u0434\x03!\x03!\x03\"\x05\"\u043A\n\"\x03" +
		"\"\x03\"\x06\"\u043E\n\"\r\"\x0E\"\u043F\x03\"\x03\"\x03#\x05#\u0445\n" +
		"#\x03#\x03#\x06#\u0449\n#\r#\x0E#\u044A\x03#\x03#\x03$\x03$\x03$\x03$" +
		"\x03$\x03$\x07$\u0455\n$\f$\x0E$\u0458\v$\x07$\u045A\n$\f$\x0E$\u045D" +
		"\v$\x03$\x07$\u0460\n$\f$\x0E$\u0463\v$\x03$\x07$\u0466\n$\f$\x0E$\u0469" +
		"\v$\x03$\x07$\u046C\n$\f$\x0E$\u046F\v$\x03$\x03$\x07$\u0473\n$\f$\x0E" +
		"$\u0476\v$\x03$\x07$\u0479\n$\f$\x0E$\u047C\v$\x05$\u047E\n$\x03%\x03" +
		"%\x05%\u0482\n%\x03%\x03%\x05%\u0486\n%\x05%\u0488\n%\x03%\x03%\x03&\x03" +
		"&\x03\'\x03\'\x03(\x03(\x03(\x03(\x03(\x03(\x07(\u0496\n(\f(\x0E(\u0499" +
		"\v(\x07(\u049B\n(\f(\x0E(\u049E\v(\x03(\x07(\u04A1\n(\f(\x0E(\u04A4\v" +
		"(\x03(\x07(\u04A7\n(\f(\x0E(\u04AA\v(\x03(\x03(\x07(\u04AE\n(\f(\x0E(" +
		"\u04B1\v(\x03(\x07(\u04B4\n(\f(\x0E(\u04B7\v(\x05(\u04B9\n(\x03)\x03)" +
		"\x07)\u04BD\n)\f)\x0E)\u04C0\v)\x03)\x03)\x03)\x03)\x07)\u04C6\n)\f)\x0E" +
		")\u04C9\v)\x03)\x03)\x05)\u04CD\n)\x03*\x03*\x03*\x03*\x03*\x03*\x05*" +
		"\u04D5\n*\x03*\x07*\u04D8\n*\f*\x0E*\u04DB\v*\x07*\u04DD\n*\f*\x0E*\u04E0" +
		"\v*\x03*\x07*\u04E3\n*\f*\x0E*\u04E6\v*\x03*\x03*\x07*\u04EA\n*\f*\x0E" +
		"*\u04ED\v*\x03*\x07*\u04F0\n*\f*\x0E*\u04F3\v*\x05*\u04F5\n*\x03+\x03" +
		"+\x03+\x03+\x05+\u04FB\n+\x03+\x03+\x03+\x07+\u0500\n+\f+\x0E+\u0503\v" +
		"+\x03,\x03,\x07,\u0507\n,\f,\x0E,\u050A\v,\x03,\x03,\x07,\u050E\n,\f," +
		"\x0E,\u0511\v,\x03,\x03,\x03-\x03-\x05-\u0517\n-\x03-\x03-\x03-\x03-\x07" +
		"-\u051D\n-\f-\x0E-\u0520\v-\x07-\u0522\n-\f-\x0E-\u0525\v-\x03-\x07-\u0528" +
		"\n-\f-\x0E-\u052B\v-\x03-\x03-\x07-\u052F\n-\f-\x0E-\u0532\v-\x03-\x07" +
		"-\u0535\n-\f-\x0E-\u0538\v-\x05-\u053A\n-\x03.\x03.\x03.\x03.\x03.\x03" +
		".\x07.\u0542\n.\f.\x0E.\u0545\v.\x07.\u0547\n.\f.\x0E.\u054A\v.\x03.\x07" +
		".\u054D\n.\f.\x0E.\u0550\v.\x03.\x03.\x07.\u0554\n.\f.\x0E.\u0557\v.\x03" +
		".\x07.\u055A\n.\f.\x0E.\u055D\v.\x05.\u055F\n.\x03/\x03/\x03/\x03/\x03" +
		"/\x03/\x07/\u0567\n/\f/\x0E/\u056A\v/\x07/\u056C\n/\f/\x0E/\u056F\v/\x03" +
		"/\x07/\u0572\n/\f/\x0E/\u0575\v/\x03/\x03/\x07/\u0579\n/\f/\x0E/\u057C" +
		"\v/\x03/\x07/\u057F\n/\f/\x0E/\u0582\v/\x05/\u0584\n/\x030\x030\x030\x03" +
		"0\x030\x030\x070\u058C\n0\f0\x0E0\u058F\v0\x070\u0591\n0\f0\x0E0\u0594" +
		"\v0\x030\x070\u0597\n0\f0\x0E0\u059A\v0\x030\x030\x070\u059E\n0\f0\x0E" +
		"0\u05A1\v0\x030\x070\u05A4\n0\f0\x0E0\u05A7\v0\x050\u05A9\n0\x031\x03" +
		"1\x031\x031\x071\u05AF\n1\f1\x0E1\u05B2\v1\x031\x031\x071\u05B6\n1\f1" +
		"\x0E1\u05B9\v1\x071\u05BB\n1\f1\x0E1\u05BE\v1\x031\x051\u05C1\n1\x031" +
		"\x071\u05C4\n1\f1\x0E1\u05C7\v1\x031\x031\x071\u05CB\n1\f1\x0E1\u05CE" +
		"\v1\x031\x071\u05D1\n1\f1\x0E1\u05D4\v1\x051\u05D6\n1\x032\x032\x032\x03" +
		"2\x062\u05DC\n2\r2\x0E2\u05DD\x032\x032\x072\u05E2\n2\f2\x0E2\u05E5\v" +
		"2\x072\u05E7\n2\f2\x0E2\u05EA\v2\x032\x052\u05ED\n2\x032\x072\u05F0\n" +
		"2\f2\x0E2\u05F3\v2\x032\x032\x072\u05F7\n2\f2\x0E2\u05FA\v2\x032\x072" +
		"\u05FD\n2\f2\x0E2\u0600\v2\x052\u0602\n2\x033\x033\x033\x033\x073\u0608" +
		"\n3\f3\x0E3\u060B\v3\x033\x033\x073\u060F\n3\f3\x0E3\u0612\v3\x063\u0614" +
		"\n3\r3\x0E3\u0615\x034\x034\x034\x034\x074\u061C\n4\f4\x0E4\u061F\v4\x03" +
		"4\x034\x074\u0623\n4\f4\x0E4\u0626\v4\x064\u0628\n4\r4\x0E4\u0629\x03" +
		"5\x035\x035\x035\x075\u0630\n5\f5\x0E5\u0633\v5\x035\x035\x075\u0637\n" +
		"5\f5\x0E5\u063A\v5\x065\u063C\n5\r5\x0E5\u063D\x036\x036\x036\x036\x07" +
		"6\u0644\n6\f6\x0E6\u0647\v6\x036\x036\x076\u064B\n6\f6\x0E6\u064E\v6\x06" +
		"6\u0650\n6\r6\x0E6\u0651\x037\x037\x037\x037\x077\u0658\n7\f7\x0E7\u065B" +
		"\v7\x037\x037\x077\u065F\n7\f7\x0E7\u0662\v7\x067\u0664\n7\r7\x0E7\u0665" +
		"\x038\x038\x038\x038\x078\u066C\n8\f8\x0E8\u066F\v8\x038\x038\x078\u0673" +
		"\n8\f8\x0E8\u0676\v8\x068\u0678\n8\r8\x0E8\u0679\x039\x039\x039\x039\x07" +
		"9\u0680\n9\f9\x0E9\u0683\v9\x039\x039\x079\u0687\n9\f9\x0E9\u068A\v9\x06" +
		"9\u068C\n9\r9\x0E9\u068D\x03:\x03:\x03:\x03:\x07:\u0694\n:\f:\x0E:\u0697" +
		"\v:\x03:\x03:\x07:\u069B\n:\f:\x0E:\u069E\v:\x06:\u06A0\n:\r:\x0E:\u06A1" +
		"\x03;\x03;\x03;\x03;\x07;\u06A8\n;\f;\x0E;\u06AB\v;\x03;\x03;\x07;\u06AF" +
		"\n;\f;\x0E;\u06B2\v;\x06;\u06B4\n;\r;\x0E;\u06B5\x03<\x03<\x03<\x03<\x07" +
		"<\u06BC\n<\f<\x0E<\u06BF\v<\x03<\x03<\x07<\u06C3\n<\f<\x0E<\u06C6\v<\x06" +
		"<\u06C8\n<\r<\x0E<\u06C9\x03=\x03=\x03=\x03=\x07=\u06D0\n=\f=\x0E=\u06D3" +
		"\v=\x03=\x03=\x07=\u06D7\n=\f=\x0E=\u06DA\v=\x06=\u06DC\n=\r=\x0E=\u06DD" +
		"\x03>\x03>\x03>\x03>\x07>\u06E4\n>\f>\x0E>\u06E7\v>\x03>\x03>\x07>\u06EB" +
		"\n>\f>\x0E>\u06EE\v>\x06>\u06F0\n>\r>\x0E>\u06F1\x03?\x03?\x03?\x03?\x07" +
		"?\u06F8\n?\f?\x0E?\u06FB\v?\x03?\x03?\x07?\u06FF\n?\f?\x0E?\u0702\v?\x06" +
		"?\u0704\n?\r?\x0E?\u0705\x03@\x03@\x03@\x03@\x07@\u070C\n@\f@\x0E@\u070F" +
		"\v@\x03@\x03@\x07@\u0713\n@\f@\x0E@\u0716\v@\x06@\u0718\n@\r@\x0E@\u0719" +
		"\x03A\x03A\x03A\x03A\x07A\u0720\nA\fA\x0EA\u0723\vA\x03A\x03A\x07A\u0727" +
		"\nA\fA\x0EA\u072A\vA\x06A\u072C\nA\rA\x0EA\u072D\x03B\x03B\x03B\x03B\x07" +
		"B\u0734\nB\fB\x0EB\u0737\vB\x03B\x03B\x07B\u073B\nB\fB\x0EB\u073E\vB\x06" +
		"B\u0740\nB\rB\x0EB\u0741\x03C\x03C\x03C\x03C\x07C\u0748\nC\fC\x0EC\u074B" +
		"\vC\x03C\x03C\x07C\u074F\nC\fC\x0EC\u0752\vC\x06C\u0754\nC\rC\x0EC\u0755" +
		"\x03D\x03D\x03D\x03D\x07D\u075C\nD\fD\x0ED\u075F\vD\x03D\x03D\x07D\u0763" +
		"\nD\fD\x0ED\u0766\vD\x06D\u0768\nD\rD\x0ED\u0769\x03E\x03E\x03E\x03E\x07" +
		"E\u0770\nE\fE\x0EE\u0773\vE\x03E\x03E\x07E\u0777\nE\fE\x0EE\u077A\vE\x06" +
		"E\u077C\nE\rE\x0EE\u077D\x03F\x03F\x03F\x03F\x07F\u0784\nF\fF\x0EF\u0787" +
		"\vF\x03F\x03F\x07F\u078B\nF\fF\x0EF\u078E\vF\x06F\u0790\nF\rF\x0EF\u0791" +
		"\x03G\x03G\x03G\x03G\x07G\u0798\nG\fG\x0EG\u079B\vG\x03G\x03G\x07G\u079F" +
		"\nG\fG\x0EG\u07A2\vG\x06G\u07A4\nG\rG\x0EG\u07A5\x03H\x03H\x03H\x03H\x07" +
		"H\u07AC\nH\fH\x0EH\u07AF\vH\x03H\x03H\x07H\u07B3\nH\fH\x0EH\u07B6\vH\x06" +
		"H\u07B8\nH\rH\x0EH\u07B9\x03I\x03I\x03I\x03I\x07I\u07C0\nI\fI\x0EI\u07C3" +
		"\vI\x03I\x03I\x07I\u07C7\nI\fI\x0EI\u07CA\vI\x06I\u07CC\nI\rI\x0EI\u07CD" +
		"\x03J\x03J\x03J\x03J\x07J\u07D4\nJ\fJ\x0EJ\u07D7\vJ\x03J\x03J\x07J\u07DB" +
		"\nJ\fJ\x0EJ\u07DE\vJ\x06J\u07E0\nJ\rJ\x0EJ\u07E1\x03K\x03K\x03K\x03K\x07" +
		"K\u07E8\nK\fK\x0EK\u07EB\vK\x03K\x03K\x07K\u07EF\nK\fK\x0EK\u07F2\vK\x06" +
		"K\u07F4\nK\rK\x0EK\u07F5\x03L\x03L\x03L\x03L\x07L\u07FC\nL\fL\x0EL\u07FF" +
		"\vL\x03L\x03L\x07L\u0803\nL\fL\x0EL\u0806\vL\x06L\u0808\nL\rL\x0EL\u0809" +
		"\x03M\x03M\x03M\x03M\x07M\u0810\nM\fM\x0EM\u0813\vM\x03M\x03M\x07M\u0817" +
		"\nM\fM\x0EM\u081A\vM\x06M\u081C\nM\rM\x0EM\u081D\x03N\x03N\x03N\x03N\x07" +
		"N\u0824\nN\fN\x0EN\u0827\vN\x03N\x03N\x07N\u082B\nN\fN\x0EN\u082E\vN\x06" +
		"N\u0830\nN\rN\x0EN\u0831\x03O\x03O\x03O\x03O\x07O\u0838\nO\fO\x0EO\u083B" +
		"\vO\x03O\x03O\x07O\u083F\nO\fO\x0EO\u0842\vO\x06O\u0844\nO\rO\x0EO\u0845" +
		"\x03P\x03P\x03P\x03P\x07P\u084C\nP\fP\x0EP\u084F\vP\x03P\x03P\x07P\u0853" +
		"\nP\fP\x0EP\u0856\vP\x06P\u0858\nP\rP\x0EP\u0859\x03Q\x03Q\x03Q\x03Q\x07" +
		"Q\u0860\nQ\fQ\x0EQ\u0863\vQ\x03Q\x03Q\x07Q\u0867\nQ\fQ\x0EQ\u086A\vQ\x06" +
		"Q\u086C\nQ\rQ\x0EQ\u086D\x03R\x03R\x03R\x03R\x07R\u0874\nR\fR\x0ER\u0877" +
		"\vR\x03R\x03R\x07R\u087B\nR\fR\x0ER\u087E\vR\x06R\u0880\nR\rR\x0ER\u0881" +
		"\x03S\x03S\x03S\x03S\x07S\u0888\nS\fS\x0ES\u088B\vS\x03S\x03S\x07S\u088F" +
		"\nS\fS\x0ES\u0892\vS\x06S\u0894\nS\rS\x0ES\u0895\x03T\x03T\x03T\x03T\x07" +
		"T\u089C\nT\fT\x0ET\u089F\vT\x03T\x03T\x07T\u08A3\nT\fT\x0ET\u08A6\vT\x06" +
		"T\u08A8\nT\rT\x0ET\u08A9\x03U\x03U\x03U\x03U\x07U\u08B0\nU\fU\x0EU\u08B3" +
		"\vU\x03U\x03U\x07U\u08B7\nU\fU\x0EU\u08BA\vU\x06U\u08BC\nU\rU\x0EU\u08BD" +
		"\x03V\x03V\x03V\x03V\x07V\u08C4\nV\fV\x0EV";
	private static readonly _serializedATNSegment1: string =
		"\u08C7\vV\x03V\x03V\x07V\u08CB\nV\fV\x0EV\u08CE\vV\x06V\u08D0\nV\rV\x0E" +
		"V\u08D1\x03W\x03W\x03W\x03W\x07W\u08D8\nW\fW\x0EW\u08DB\vW\x03W\x03W\x07" +
		"W\u08DF\nW\fW\x0EW\u08E2\vW\x06W\u08E4\nW\rW\x0EW\u08E5\x03X\x03X\x03" +
		"X\x03X\x07X\u08EC\nX\fX\x0EX\u08EF\vX\x03X\x03X\x07X\u08F3\nX\fX\x0EX" +
		"\u08F6\vX\x06X\u08F8\nX\rX\x0EX\u08F9\x03Y\x03Y\x03Y\x03Y\x07Y\u0900\n" +
		"Y\fY\x0EY\u0903\vY\x03Y\x03Y\x07Y\u0907\nY\fY\x0EY\u090A\vY\x06Y\u090C" +
		"\nY\rY\x0EY\u090D\x03Z\x03Z\x03Z\x03Z\x07Z\u0914\nZ\fZ\x0EZ\u0917\vZ\x03" +
		"Z\x03Z\x07Z\u091B\nZ\fZ\x0EZ\u091E\vZ\x06Z\u0920\nZ\rZ\x0EZ\u0921\x03" +
		"[\x03[\x03[\x03[\x07[\u0928\n[\f[\x0E[\u092B\v[\x03[\x03[\x07[\u092F\n" +
		"[\f[\x0E[\u0932\v[\x06[\u0934\n[\r[\x0E[\u0935\x03\\\x03\\\x03\\\x03\\" +
		"\x07\\\u093C\n\\\f\\\x0E\\\u093F\v\\\x03\\\x03\\\x07\\\u0943\n\\\f\\\x0E" +
		"\\\u0946\v\\\x06\\\u0948\n\\\r\\\x0E\\\u0949\x03]\x03]\x03]\x03]\x07]" +
		"\u0950\n]\f]\x0E]\u0953\v]\x03]\x03]\x07]\u0957\n]\f]\x0E]\u095A\v]\x06" +
		"]\u095C\n]\r]\x0E]\u095D\x03^\x03^\x03^\x03^\x07^\u0964\n^\f^\x0E^\u0967" +
		"\v^\x03^\x03^\x07^\u096B\n^\f^\x0E^\u096E\v^\x06^\u0970\n^\r^\x0E^\u0971" +
		"\x03_\x03_\x03_\x03_\x07_\u0978\n_\f_\x0E_\u097B\v_\x03_\x03_\x07_\u097F" +
		"\n_\f_\x0E_\u0982\v_\x06_\u0984\n_\r_\x0E_\u0985\x03`\x03`\x03`\x03`\x07" +
		"`\u098C\n`\f`\x0E`\u098F\v`\x03`\x03`\x07`\u0993\n`\f`\x0E`\u0996\v`\x06" +
		"`\u0998\n`\r`\x0E`\u0999\x03a\x03a\x03a\x03a\x07a\u09A0\na\fa\x0Ea\u09A3" +
		"\va\x03a\x03a\x07a\u09A7\na\fa\x0Ea\u09AA\va\x06a\u09AC\na\ra\x0Ea\u09AD" +
		"\x03b\x03b\x03b\x03b\x07b\u09B4\nb\fb\x0Eb\u09B7\vb\x03b\x03b\x07b\u09BB" +
		"\nb\fb\x0Eb\u09BE\vb\x06b\u09C0\nb\rb\x0Eb\u09C1\x03c\x03c\x03c\x03c\x07" +
		"c\u09C8\nc\fc\x0Ec\u09CB\vc\x03c\x03c\x07c\u09CF\nc\fc\x0Ec\u09D2\vc\x06" +
		"c\u09D4\nc\rc\x0Ec\u09D5\x03d\x03d\x03d\x03d\x07d\u09DC\nd\fd\x0Ed\u09DF" +
		"\vd\x03d\x03d\x07d\u09E3\nd\fd\x0Ed\u09E6\vd\x06d\u09E8\nd\rd\x0Ed\u09E9" +
		"\x03e\x03e\x03e\x03e\x07e\u09F0\ne\fe\x0Ee\u09F3\ve\x03e\x03e\x07e\u09F7" +
		"\ne\fe\x0Ee\u09FA\ve\x06e\u09FC\ne\re\x0Ee\u09FD\x03f\x03f\x03f\x03f\x07" +
		"f\u0A04\nf\ff\x0Ef\u0A07\vf\x03f\x03f\x07f\u0A0B\nf\ff\x0Ef\u0A0E\vf\x06" +
		"f\u0A10\nf\rf\x0Ef\u0A11\x03g\x03g\x03g\x03g\x07g\u0A18\ng\fg\x0Eg\u0A1B" +
		"\vg\x03g\x03g\x07g\u0A1F\ng\fg\x0Eg\u0A22\vg\x06g\u0A24\ng\rg\x0Eg\u0A25" +
		"\x03h\x03h\x03h\x03h\x07h\u0A2C\nh\fh\x0Eh\u0A2F\vh\x03h\x03h\x07h\u0A33" +
		"\nh\fh\x0Eh\u0A36\vh\x06h\u0A38\nh\rh\x0Eh\u0A39\x03i\x03i\x03i\x03i\x07" +
		"i\u0A40\ni\fi\x0Ei\u0A43\vi\x03i\x03i\x07i\u0A47\ni\fi\x0Ei\u0A4A\vi\x06" +
		"i\u0A4C\ni\ri\x0Ei\u0A4D\x03j\x03j\x03j\x03j\x07j\u0A54\nj\fj\x0Ej\u0A57" +
		"\vj\x03j\x03j\x07j\u0A5B\nj\fj\x0Ej\u0A5E\vj\x06j\u0A60\nj\rj\x0Ej\u0A61" +
		"\x03k\x03k\x03k\x03k\x07k\u0A68\nk\fk\x0Ek\u0A6B\vk\x03k\x03k\x07k\u0A6F" +
		"\nk\fk\x0Ek\u0A72\vk\x06k\u0A74\nk\rk\x0Ek\u0A75\x03l\x03l\x03l\x03l\x07" +
		"l\u0A7C\nl\fl\x0El\u0A7F\vl\x03l\x03l\x07l\u0A83\nl\fl\x0El\u0A86\vl\x06" +
		"l\u0A88\nl\rl\x0El\u0A89\x03m\x03m\x03m\x03m\x07m\u0A90\nm\fm\x0Em\u0A93" +
		"\vm\x03m\x03m\x07m\u0A97\nm\fm\x0Em\u0A9A\vm\x06m\u0A9C\nm\rm\x0Em\u0A9D" +
		"\x03n\x03n\x03n\x03n\x07n\u0AA4\nn\fn\x0En\u0AA7\vn\x03n\x03n\x07n\u0AAB" +
		"\nn\fn\x0En\u0AAE\vn\x06n\u0AB0\nn\rn\x0En\u0AB1\x03o\x03o\x03o\x03o\x07" +
		"o\u0AB8\no\fo\x0Eo\u0ABB\vo\x03o\x03o\x07o\u0ABF\no\fo\x0Eo\u0AC2\vo\x06" +
		"o\u0AC4\no\ro\x0Eo\u0AC5\x03p\x03p\x03p\x03p\x07p\u0ACC\np\fp\x0Ep\u0ACF" +
		"\vp\x03p\x03p\x07p\u0AD3\np\fp\x0Ep\u0AD6\vp\x06p\u0AD8\np\rp\x0Ep\u0AD9" +
		"\x03q\x03q\x03q\x03q\x07q\u0AE0\nq\fq\x0Eq\u0AE3\vq\x03q\x03q\x07q\u0AE7" +
		"\nq\fq\x0Eq\u0AEA\vq\x06q\u0AEC\nq\rq\x0Eq\u0AED\x03r\x03r\x03r\x03r\x07" +
		"r\u0AF4\nr\fr\x0Er\u0AF7\vr\x03r\x03r\x07r\u0AFB\nr\fr\x0Er\u0AFE\vr\x06" +
		"r\u0B00\nr\rr\x0Er\u0B01\x03s\x03s\x03s\x03s\x07s\u0B08\ns\fs\x0Es\u0B0B" +
		"\vs\x03s\x03s\x07s\u0B0F\ns\fs\x0Es\u0B12\vs\x06s\u0B14\ns\rs\x0Es\u0B15" +
		"\x03t\x03t\x03t\x03t\x07t\u0B1C\nt\ft\x0Et\u0B1F\vt\x03t\x03t\x07t\u0B23" +
		"\nt\ft\x0Et\u0B26\vt\x06t\u0B28\nt\rt\x0Et\u0B29\x03u\x03u\x03u\x03u\x07" +
		"u\u0B30\nu\fu\x0Eu\u0B33\vu\x03u\x03u\x07u\u0B37\nu\fu\x0Eu\u0B3A\vu\x06" +
		"u\u0B3C\nu\ru\x0Eu\u0B3D\x03v\x03v\x03v\x03v\x07v\u0B44\nv\fv\x0Ev\u0B47" +
		"\vv\x03v\x03v\x07v\u0B4B\nv\fv\x0Ev\u0B4E\vv\x06v\u0B50\nv\rv\x0Ev\u0B51" +
		"\x03w\x03w\x03w\x03w\x07w\u0B58\nw\fw\x0Ew\u0B5B\vw\x03w\x03w\x07w\u0B5F" +
		"\nw\fw\x0Ew\u0B62\vw\x06w\u0B64\nw\rw\x0Ew\u0B65\x03x\x03x\x03x\x03x\x07" +
		"x\u0B6C\nx\fx\x0Ex\u0B6F\vx\x03x\x03x\x07x\u0B73\nx\fx\x0Ex\u0B76\vx\x06" +
		"x\u0B78\nx\rx\x0Ex\u0B79\x03y\x03y\x03y\x03y\x07y\u0B80\ny\fy\x0Ey\u0B83" +
		"\vy\x03y\x03y\x07y\u0B87\ny\fy\x0Ey\u0B8A\vy\x06y\u0B8C\ny\ry\x0Ey\u0B8D" +
		"\x03z\x03z\x03z\x03z\x07z\u0B94\nz\fz\x0Ez\u0B97\vz\x03z\x03z\x07z\u0B9B" +
		"\nz\fz\x0Ez\u0B9E\vz\x06z\u0BA0\nz\rz\x0Ez\u0BA1\x03{\x03{\x03{\x03{\x03" +
		"{\x03{\x03{\x03{\x07{\u0BAC\n{\f{\x0E{\u0BAF\v{\x06{\u0BB1\n{\r{\x0E{" +
		"\u0BB2\x03{\x03{\x07{\u0BB7\n{\f{\x0E{\u0BBA\v{\x03{\x03{\x07{\u0BBE\n" +
		"{\f{\x0E{\u0BC1\v{\x03{\x07{\u0BC4\n{\f{\x0E{\u0BC7\v{\x05{\u0BC9\n{\x03" +
		"|\x03|\x03|\x03|\x03|\x03|\x03|\x06|\u0BD2\n|\r|\x0E|\u0BD3\x03}\x03}" +
		"\x03}\x03}\x07}\u0BDA\n}\f}\x0E}\u0BDD\v}\x03}\x03}\x07}\u0BE1\n}\f}\x0E" +
		"}\u0BE4\v}\x07}\u0BE6\n}\f}\x0E}\u0BE9\v}\x03}\x03}\x03}\x03}\x06}\u0BEF" +
		"\n}\r}\x0E}\u0BF0\x06}\u0BF3\n}\r}\x0E}\u0BF4\x03}\x03}\x07}\u0BF9\n}" +
		"\f}\x0E}\u0BFC\v}\x03}\x03}\x07}\u0C00\n}\f}\x0E}\u0C03\v}\x03}\x07}\u0C06" +
		"\n}\f}\x0E}\u0C09\v}\x05}\u0C0B\n}\x03~\x03~\x03~\x03~\x05~\u0C11\n~\x03" +
		"\x7F\x03\x7F\x03\x7F\x03\x7F\x07\x7F\u0C17\n\x7F\f\x7F\x0E\x7F\u0C1A\v" +
		"\x7F\x03\x7F\x03\x7F\x07\x7F\u0C1E\n\x7F\f\x7F\x0E\x7F\u0C21\v\x7F\x07" +
		"\x7F\u0C23\n\x7F\f\x7F\x0E\x7F\u0C26\v\x7F\x03\x7F\x03\x7F\x05\x7F\u0C2A" +
		"\n\x7F\x03\x7F\x07\x7F\u0C2D\n\x7F\f\x7F\x0E\x7F\u0C30\v\x7F\x03\x7F\x06" +
		"\x7F\u0C33\n\x7F\r\x7F\x0E\x7F\u0C34\x06\x7F\u0C37\n\x7F\r\x7F\x0E\x7F" +
		"\u0C38\x03\x7F\x03\x7F\x03\x80\x03\x80\x03\x80\x03\x80\x07\x80\u0C41\n" +
		"\x80\f\x80\x0E\x80\u0C44\v\x80\x03\x80\x03\x80\x07\x80\u0C48\n\x80\f\x80" +
		"\x0E\x80\u0C4B\v\x80\x07\x80\u0C4D\n\x80\f\x80\x0E\x80\u0C50\v\x80\x03" +
		"\x80\x03\x80\x03\x80\x03\x80\x06\x80\u0C56\n\x80\r\x80\x0E\x80\u0C57\x06" +
		"\x80\u0C5A\n\x80\r\x80\x0E\x80\u0C5B\x03\x80\x03\x80\x03\x81\x03\x81\x03" +
		"\x81\x03\x81\x07\x81\u0C64\n\x81\f\x81\x0E\x81\u0C67\v\x81\x03\x81\x03" +
		"\x81\x07\x81\u0C6B\n\x81\f\x81\x0E\x81\u0C6E\v\x81\x07\x81\u0C70\n\x81" +
		"\f\x81\x0E\x81\u0C73\v\x81\x03\x81\x03\x81\x03\x81\x03\x81\x06\x81\u0C79" +
		"\n\x81\r\x81\x0E\x81\u0C7A\x06\x81\u0C7D\n\x81\r\x81\x0E\x81\u0C7E\x03" +
		"\x81\x03\x81\x03\x82\x03\x82\x03\x82\x03\x82\x07\x82\u0C87\n\x82\f\x82" +
		"\x0E\x82\u0C8A\v\x82\x03\x82\x03\x82\x07\x82\u0C8E\n\x82\f\x82\x0E\x82" +
		"\u0C91\v\x82\x07\x82\u0C93\n\x82\f\x82\x0E\x82\u0C96\v\x82\x03\x82\x03" +
		"\x82\x03\x82\x03\x82\x06\x82\u0C9C\n\x82\r\x82\x0E\x82\u0C9D\x06\x82\u0CA0" +
		"\n\x82\r\x82\x0E\x82\u0CA1\x03\x82\x03\x82\x03\x83\x03\x83\x03\x83\x03" +
		"\x83\x07\x83\u0CAA\n\x83\f\x83\x0E\x83\u0CAD\v\x83\x03\x83\x03\x83\x07" +
		"\x83\u0CB1\n\x83\f\x83\x0E\x83\u0CB4\v\x83\x07\x83\u0CB6\n\x83\f\x83\x0E" +
		"\x83\u0CB9\v\x83\x03\x83\x03\x83\x03\x83\x07\x83\u0CBE\n\x83\f\x83\x0E" +
		"\x83\u0CC1\v\x83\x03\x83\x06\x83\u0CC4\n\x83\r\x83\x0E\x83\u0CC5\x06\x83" +
		"\u0CC8\n\x83\r\x83\x0E\x83\u0CC9\x03\x83\x03\x83\x07\x83\u0CCE\n\x83\f" +
		"\x83\x0E\x83\u0CD1\v\x83\x03\x83\x03\x83\x07\x83\u0CD5\n\x83\f\x83\x0E" +
		"\x83\u0CD8\v\x83\x03\x83\x07\x83\u0CDB\n\x83\f\x83\x0E\x83\u0CDE\v\x83" +
		"\x05\x83\u0CE0\n\x83\x03\x84\x06\x84\u0CE3\n\x84\r\x84\x0E\x84\u0CE4\x03" +
		"\x85\x03\x85\x03\x85\x03\x85\x03\x86\x07\x86\u0CEC\n\x86\f\x86\x0E\x86" +
		"\u0CEF\v\x86\x03\x86\x03\x86\x07\x86\u0CF3\n\x86\f\x86\x0E\x86\u0CF6\v" +
		"\x86\x03\x87\x03\x87\x03\x88\x03\x88\x03\x88\x03\x88\x03\x88\x03\x88\x03" +
		"\x88\x03\x88\x03\x88\x05\x88\u0D03\n\x88\x03\x89\x03\x89\x03\x89\x03\x89" +
		"\x05\x89\u0D09\n\x89\x03\x8A\x03\x8A\x03\x8A\x05\x8A\u0D0E\n\x8A\x03\x8A" +
		"\x03\x8A\x05\x8A\u0D12\n\x8A\x03\x8A\x03\x8A\x05\x8A\u0D16\n\x8A\x03\x8A" +
		"\x05\x8A\u0D19\n\x8A\x03\x8B\x03\x8B\x03\x8B\x05\x8B\u0D1E\n\x8B\x03\x8C" +
		"\x03\x8C\x03\x8D\x03\x8D\x03\x8E\x03\x8E\x03\x8F\x03\x8F\x03\x90\x03\x90" +
		"\x03\x91\x03\x91\x03\x92\x03\x92\x03\x93\x03\x93\x03\x94\x03\x94\x03\x95" +
		"\x03\x95\x03\x95\x05\x95\u0D35\n\x95\x03\x95\x03\x95\x03\x95\x05\x95\u0D3A" +
		"\n\x95\x05\x95\u0D3C\n\x95\x03\x96\x03\x96\x03\x97\x03\x97\x03\x97\x03" +
		"\x97\x03\x97\x03\x97\x05\x97\u0D46\n\x97\x03\x98\x03\x98\x03\x98\x03\x98" +
		"\x03\x98\x03\x98\x03\x98\x03\x98\x05\x98\u0D50\n\x98\x03\x99\x03\x99\x03" +
		"\x99\x03\x99\x03\x99\x03\x99\x03\x99\x03\x99\x05\x99\u0D5A\n\x99\x03\x9A" +
		"\x03\x9A\x03\x9A\x03\x9A\x05\x9A\u0D60\n\x9A\x03\x9A\x03\x9A\x03\x9A\x03" +
		"\x9A\x03\x9A\x05\x9A\u0D67\n\x9A\x03\x9B\x03\x9B\x07\x9B\u0D6B\n\x9B\f" +
		"\x9B\x0E\x9B\u0D6E\v\x9B\x03\x9C\x03\x9C\x03\x9C\x07\x9C\u0D73\n\x9C\f" +
		"\x9C\x0E\x9C\u0D76\v\x9C\x03\x9C\x03\x9C\x03\x9C\x03\x9D\x03\x9D\x07\x9D" +
		"\u0D7D\n\x9D\f\x9D\x0E\x9D\u0D80\v\x9D\x03\x9E\x03\x9E\x03\x9E\x03\x9E" +
		"\x03\x9E\x03\x9E\x03\x9E\x03\x9E\x05\x9E\u0D8A\n\x9E\x03\x9F\x03\x9F\x07" +
		"\x9F\u0D8E\n\x9F\f\x9F\x0E\x9F\u0D91\v\x9F\x03\x9F\x03\x9F\x05\x9F\u0D95" +
		"\n\x9F\x03\xA0\x03\xA0\x03\xA0\x07\xA0\u0D9A\n\xA0\f\xA0\x0E\xA0\u0D9D" +
		"\v\xA0\x03\xA0\x03\xA0\x03\xA0\x03\xA1\x03\xA1\x03\xA1\x05\xA1\u0DA5\n" +
		"\xA1\x03\xA1\x03\xA1\x05\xA1\u0DA9\n\xA1\x03\xA1\x03\xA1\x05\xA1\u0DAD" +
		"\n\xA1\x03\xA1\x05\xA1\u0DB0\n\xA1\x03\xA2\x03\xA2\x03\xA2\x03\xA2\x03" +
		"\xA2\x03\xA2\x03\xA2\x03\xA2\x03\xA2\x03\xA2\x03\xA2\x07\xA2\u0DBD\n\xA2" +
		"\f\xA2\x0E\xA2\u0DC0\v\xA2\x03\xA2\x05\xA2\u0DC3\n\xA2\x03\xA3\x03\xA3" +
		"\x03\xA3\x03\xA3\x03\xA3\x03\xA3\x03\xA3\x03\xA3\x03\xA3\x03\xA3\x03\xA3" +
		"\x07\xA3\u0DD0\n\xA3\f\xA3\x0E\xA3\u0DD3\v\xA3\x03\xA3\x05\xA3\u0DD6\n" +
		"\xA3\x03\xA4\x03\xA4\x07\xA4\u0DDA\n\xA4\f\xA4\x0E\xA4\u0DDD\v\xA4\x03" +
		"\xA5\x03\xA5\x03\xA5\x03\xA5\x03\xA5\x03\xA5\x03\xA5\x03\xA5\x05\xA5\u0DE7" +
		"\n\xA5\x03\xA6\x03\xA6\x03\xA6\x05\xA6\u0DEC\n\xA6\x03\xA6\x03\xA6\x03" +
		"\xA6\x05\xA6\u0DF1\n\xA6\x05\xA6\u0DF3\n\xA6\x03\xA7\x03\xA7\x03\xA7\x05" +
		"\xA7\u0DF8\n\xA7\x03\xA7\x03\xA7\x03\xA7\x05\xA7\u0DFD\n\xA7\x05\xA7\u0DFF" +
		"\n\xA7\x03\xA8\x03\xA8\x03\xA8\x05\xA8\u0E04\n\xA8\x03\xA8\x03\xA8\x07" +
		"\xA8\u0E08\n\xA8\f\xA8\x0E\xA8\u0E0B\v\xA8\x03\xA8\x03\xA8\x06\xA8\u0E0F" +
		"\n\xA8\r\xA8\x0E\xA8\u0E10\x03\xA8\x03\xA8\x03\xA8\x03\xA8\x03\xA8\x03" +
		"\xA8\x03\xA8\x07\xA8\u0E1A\n\xA8\f\xA8\x0E\xA8\u0E1D\v\xA8\x03\xA8\x05" +
		"\xA8\u0E20\n\xA8\x03\xA9\x03\xA9\x03\xA9\x03\xA9\x03\xAA\x03\xAA\x03\xAB" +
		"\x03\xAB\x03\xAB\x07\xAB\u0E2B\n\xAB\f\xAB\x0E\xAB\u0E2E\v\xAB\x03\xAB" +
		"\x05\xAB\u0E31\n\xAB\x03\xAB\x03\xAB\x03\xAB\x03\xAB\x07\xAB\u0E37\n\xAB" +
		"\f\xAB\x0E\xAB\u0E3A\v\xAB\x03\xAB\x03\xAB\x07\xAB\u0E3E\n\xAB\f\xAB\x0E" +
		"\xAB\u0E41\v\xAB\x03\xAB\x05\xAB\u0E44\n\xAB\x05\xAB\u0E46\n\xAB\x03\xAC" +
		"\x03\xAC\x03\xAC\x03\xAC\x07\xAC\u0E4C\n\xAC\f\xAC\x0E\xAC\u0E4F\v\xAC" +
		"\x03\xAC\x03\xAC\x03\xAD\x03\xAD\x05\xAD\u0E55\n\xAD\x03\xAD\x03\xAD\x03" +
		"\xAD\x05\xAD\u0E5A\n\xAD\x03\xAD\x05\xAD\u0E5D\n\xAD\x03\xAE\x03\xAE\x03" +
		"\xAE\x03\xAE\x05\xAE\u0E63\n\xAE\x03\xAE\x05\xAE\u0E66\n\xAE\x03\xAF\x03" +
		"\xAF\x05\xAF\u0E6A\n\xAF\x03\xAF\x03\xAF\x03\xAF\x07\xAF\u0E6F\n\xAF\f" +
		"\xAF\x0E\xAF\u0E72\v\xAF\x07\xAF\u0E74\n\xAF\f\xAF\x0E\xAF\u0E77\v\xAF" +
		"\x03\xAF\x07\xAF\u0E7A\n\xAF\f\xAF\x0E\xAF\u0E7D\v\xAF\x07\xAF\u0E7F\n" +
		"\xAF\f\xAF\x0E\xAF\u0E82\v\xAF\x03\xAF\x03\xAF\x03\xAF\x03\xAF\x03\xAF" +
		"\x07\xAF\u0E89\n\xAF\f\xAF\x0E\xAF\u0E8C\v\xAF\x03\xAF\x05\xAF\u0E8F\n" +
		"\xAF\x03\xB0\x03\xB0\x03\xB0\x03\xB0\x03\xB0\x06\xB0\u0E96\n\xB0\r\xB0" +
		"\x0E\xB0\u0E97\x03\xB0\x03\xB0\x03\xB0\x03\xB0\x03\xB0\x03\xB0\x03\xB0" +
		"\x07\xB0\u0EA1\n\xB0\f\xB0\x0E\xB0\u0EA4\v\xB0\x03\xB0\x05\xB0\u0EA7\n" +
		"\xB0\x03\xB1\x03\xB1\x03\xB1\x03\xB1\x03\xB2\x03\xB2\x03\xB2\x03\xB2\x06" +
		"\xB2\u0EB1\n\xB2\r\xB2\x0E\xB2\u0EB2\x03\xB2\x03\xB2\x05\xB2\u0EB7\n\xB2" +
		"\x03\xB3\x03\xB3\x03\xB3\x03\xB3\x06\xB3\u0EBD\n\xB3\r\xB3\x0E\xB3\u0EBE" +
		"\x03\xB3\x03\xB3\x03\xB4\x03\xB4\x05\xB4\u0EC5\n\xB4\x03\xB4\x03\xB4\x03" +
		"\xB4\x07\xB4\u0ECA\n\xB4\f\xB4\x0E\xB4\u0ECD\v\xB4\x07\xB4\u0ECF\n\xB4" +
		"\f\xB4\x0E\xB4\u0ED2\v\xB4\x03\xB4\x07\xB4\u0ED5\n\xB4\f\xB4\x0E\xB4\u0ED8" +
		"\v\xB4\x07\xB4\u0EDA\n\xB4\f\xB4\x0E\xB4\u0EDD\v\xB4\x03\xB4\x03\xB4\x03" +
		"\xB4\x05\xB4\u0EE2\n\xB4\x03\xB4\x05\xB4\u0EE5\n\xB4\x03\xB5\x03\xB5\x06" +
		"\xB5\u0EE9\n\xB5\r\xB5\x0E\xB5\u0EEA\x03\xB5\x03\xB5\x03\xB6\x03\xB6\x03" +
		"\xB6\x06\xB6\u0EF2\n\xB6\r\xB6\x0E\xB6\u0EF3\x03\xB6\x03\xB6\x03\xB6\x03" +
		"\xB6\x03\xB6\x05\xB6\u0EFB\n\xB6\x03\xB7\x03\xB7\x03\xB7\x03\xB7\x03\xB7" +
		"\x03\xB7\x03\xB7\x03\xB7\x05\xB7\u0F05\n\xB7\x03\xB8\x03\xB8\x03\xB8\x03" +
		"\xB8\x03\xB8\x03\xB8\x03\xB8\x03\xB8\x03\xB8\x05\xB8\u0F10\n\xB8\x03\xB9" +
		"\x03\xB9\x03\xB9\x03\xB9\x03\xBA\x03\xBA\x03\xBA\x03\xBA\x03\xBB\x03\xBB" +
		"\x07\xBB\u0F1C\n\xBB\f\xBB\x0E\xBB\u0F1F\v\xBB\x03\xBB\x07\xBB\u0F22\n" +
		"\xBB\f\xBB\x0E\xBB\u0F25\v\xBB\x03\xBC\x03\xBC\x03\xBC\x03\xBC\x03\xBC" +
		"\x03\xBC\x03\xBC\x07\xBC\u0F2E\n\xBC\f\xBC\x0E\xBC\u0F31\v\xBC\x03\xBC" +
		"\x03\xBC\x03\xBC\x03\xBC\x07\xBC\u0F37\n\xBC\f\xBC\x0E\xBC\u0F3A\v\xBC" +
		"\x03\xBC\x05\xBC\u0F3D\n\xBC\x03\xBD\x03\xBD\x03\xBD\x03\xBD\x06\xBD\u0F43" +
		"\n\xBD\r\xBD\x0E\xBD\u0F44\x03\xBD\x03\xBD\x03\xBD\x03\xBD\x03\xBD\x07" +
		"\xBD\u0F4C\n\xBD\f\xBD\x0E\xBD\u0F4F\v\xBD\x03\xBD\x05\xBD\u0F52\n\xBD" +
		"\x03\xBE\x03\xBE\x05\xBE\u0F56\n\xBE\x03\xBE\x03\xBE\x03\xBF\x03\xBF\x05" +
		"\xBF\u0F5C\n\xBF\x06\xBF\u0F5E\n\xBF\r\xBF\x0E\xBF\u0F5F\x03\xC0\x03\xC0" +
		"\x06\xC0\u0F64\n\xC0\r\xC0\x0E\xC0\u0F65\x03\xC0\x05\xC0\u0F69\n\xC0\x03" +
		"\xC0\x03\xC0\x06\xC0\u0F6D\n\xC0\r\xC0\x0E\xC0\u0F6E\x03\xC0\x05\xC0\u0F72" +
		"\n\xC0\x03\xC0\x03\xC0\x03\xC0\x03\xC0\x03\xC0\x03\xC0\x07\xC0\u0F7A\n" +
		"\xC0\f\xC0\x0E\xC0\u0F7D\v\xC0\x03\xC0\x03\xC0\x07\xC0\u0F81\n\xC0\f\xC0" +
		"\x0E\xC0\u0F84\v\xC0\x03\xC0\x03\xC0\x07\xC0\u0F88\n\xC0\f\xC0\x0E\xC0" +
		"\u0F8B\v\xC0\x03\xC0\x03\xC0\x03\xC0\x05\xC0\u0F90\n\xC0\x03\xC1\x03\xC1" +
		"\x03\xC2\x03\xC2\x06\xC2\u0F96\n\xC2\r\xC2\x0E\xC2\u0F97\x03\xC2\x05\xC2" +
		"\u0F9B\n\xC2\x03\xC3\x03\xC3\x03\xC4\x03\xC4\x03\xC5\x03\xC5\x03\xC5\x03" +
		"\xC5\x03\xC5\x03\xC5\x03\xC5\x03\xC5\x03\xC5\x03\xC5\x03\xC5\x03\xC5\x03" +
		"\xC5\x03\xC5\x03\xC5\x03\xC5\x03\xC5\x03\xC5\x03\xC5\x03\xC5\x03\xC5\x03" +
		"\xC5\x03\xC5\x03\xC5\x03\xC5\x03\xC5\x03\xC5\x06\xC5\u0FBC\n\xC5\r\xC5" +
		"\x0E\xC5\u0FBD\x03\xC6\x03\xC6\x03\xC7\x03\xC7\x03\xC7\b\u04BE\u04C7\u0DBE" +
		"\u0DD1\u0E1B\u0F38\x02\x02\xC8\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02" +
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
		"\u014C\x02\u014E\x02\u0150\x02\u0152\x02\u0154\x02\u0156\x02\u0158\x02" +
		"\u015A\x02\u015C\x02\u015E\x02\u0160\x02\u0162\x02\u0164\x02\u0166\x02" +
		"\u0168\x02\u016A\x02\u016C\x02\u016E\x02\u0170\x02\u0172\x02\u0174\x02" +
		"\u0176\x02\u0178\x02\u017A\x02\u017C\x02\u017E\x02\u0180\x02\u0182\x02" +
		"\u0184\x02\u0186\x02\u0188\x02\u018A\x02\u018C\x02\x02\x1C\x03\x02\t\n" +
		"\x03\x02\xEA\xEB\x03\x02\x8C\x8D\x03\x02\xB1\xB2\x03\x02|~\x03\x02\x9A" +
		"\x9B\x03\x02\x80\x80\x07\x02\xC8\xC9\xCB\xCC\xDA\xE1\xEA\xEB\xED\xEE\x04" +
		"\x02\xC7\xC7\xDC\xDC\x04\x02\xC8\xC8\xDD\xDD\x04\x02\xC9\xC9\xDE\xDE\x04" +
		"\x02\xCA\xCA\xDF\xDF\x04\x02\xCB\xCB\xE0\xE0\x04\x02\xCC\xCC\xE1\xE1\x04" +
		"\x02\xD3\xD3\xE5\xE5\x04\x02\xD5\xD5\xE6\xE6\x04\x02\xD6\xD6\xE7\xE7\x04" +
		"\x02\xD7\xD7\xE8\xE8\x04\x02\xD8\xD8\xE9\xE9\x03\x02\xA9\xAA\x04\x02\xB7" +
		"\xB7\xBA\xBD\x03\x02\x8F\x8F\x04\x02\x90\x90\x92\x92\x03\x02\x9C\x9D\x03" +
		"\x02\x95\x95\x03\x02\x96\x96\x02\u11FA\x02\u019B\x03\x02\x02\x02\x04\u01A9" +
		"\x03\x02\x02\x02\x06\u021D\x03\x02\x02\x02\b\u021F\x03\x02\x02\x02\n\u022F" +
		"\x03\x02\x02\x02\f\u024C\x03\x02\x02\x02\x0E\u0257\x03\x02\x02\x02\x10" +
		"\u0261\x03\x02\x02\x02\x12\u0272\x03\x02\x02\x02\x14\u0284\x03\x02\x02" +
		"\x02\x16\u0287\x03\x02\x02\x02\x18\u029D\x03\x02\x02\x02\x1A\u02B3\x03" +
		"\x02\x02\x02\x1C\u02C7\x03\x02\x02\x02\x1E\u02DB\x03\x02\x02\x02 \u02EF" +
		"\x03\x02\x02\x02\"\u0303\x03\x02\x02\x02$\u0317\x03\x02\x02\x02&\u032B" +
		"\x03\x02\x02\x02(\u033F\x03\x02\x02\x02*\u0353\x03\x02\x02\x02,\u0367" +
		"\x03\x02\x02\x02.\u037B\x03\x02\x02\x020\u038F\x03\x02\x02\x022\u03A3" +
		"\x03\x02\x02\x024\u03B7\x03\x02\x02\x026\u03CB\x03\x02\x02\x028\u03DF" +
		"\x03\x02\x02\x02:\u0412\x03\x02\x02\x02<\u0414\x03\x02\x02\x02>\u041F" +
		"\x03\x02\x02\x02@\u042E\x03\x02\x02\x02B\u0439\x03\x02\x02\x02D\u0444" +
		"\x03\x02\x02\x02F\u044E\x03\x02\x02\x02H\u047F\x03\x02\x02\x02J\u048B" +
		"\x03\x02\x02\x02L\u048D\x03\x02\x02\x02N\u048F\x03\x02\x02\x02P\u04CC" +
		"\x03\x02\x02\x02R\u04CE\x03\x02\x02\x02T\u04F6\x03\x02\x02\x02V\u0504" +
		"\x03\x02\x02\x02X\u0514\x03\x02\x02\x02Z\u053B\x03\x02\x02\x02\\\u0560" +
		"\x03\x02\x02\x02^\u0585\x03\x02\x02\x02`\u05AA\x03\x02\x02\x02b\u05D7" +
		"\x03\x02\x02\x02d\u0603\x03\x02\x02\x02f\u0617\x03\x02\x02\x02h\u062B" +
		"\x03\x02\x02\x02j\u063F\x03\x02\x02\x02l\u0653\x03\x02\x02\x02n\u0667" +
		"\x03\x02\x02\x02p\u067B\x03\x02\x02\x02r\u068F\x03\x02\x02\x02t\u06A3" +
		"\x03\x02\x02\x02v\u06B7\x03\x02\x02\x02x\u06CB\x03\x02\x02\x02z\u06DF" +
		"\x03\x02\x02\x02|\u06F3\x03\x02\x02\x02~\u0707\x03\x02\x02\x02\x80\u071B" +
		"\x03\x02\x02\x02\x82\u072F\x03\x02\x02\x02\x84\u0743\x03\x02\x02\x02\x86" +
		"\u0757\x03\x02\x02\x02\x88\u076B\x03\x02\x02\x02";
	private static readonly _serializedATNSegment2: string =
		"\x8A\u077F\x03\x02\x02\x02\x8C\u0793\x03\x02\x02\x02\x8E\u07A7\x03\x02" +
		"\x02\x02\x90\u07BB\x03\x02\x02\x02\x92\u07CF\x03\x02\x02\x02\x94\u07E3" +
		"\x03\x02\x02\x02\x96\u07F7\x03\x02\x02\x02\x98\u080B\x03\x02\x02\x02\x9A" +
		"\u081F\x03\x02\x02\x02\x9C\u0833\x03\x02\x02\x02\x9E\u0847\x03\x02\x02" +
		"\x02\xA0\u085B\x03\x02\x02\x02\xA2\u086F\x03\x02\x02\x02\xA4\u0883\x03" +
		"\x02\x02\x02\xA6\u0897\x03\x02\x02\x02\xA8\u08AB\x03\x02\x02\x02\xAA\u08BF" +
		"\x03\x02\x02\x02\xAC\u08D3\x03\x02\x02\x02\xAE\u08E7\x03\x02\x02\x02\xB0" +
		"\u08FB\x03\x02\x02\x02\xB2\u090F\x03\x02\x02\x02\xB4\u0923\x03\x02\x02" +
		"\x02\xB6\u0937\x03\x02\x02\x02\xB8\u094B\x03\x02\x02\x02\xBA\u095F\x03" +
		"\x02\x02\x02\xBC\u0973\x03\x02\x02\x02\xBE\u0987\x03\x02\x02\x02\xC0\u099B" +
		"\x03\x02\x02\x02\xC2\u09AF\x03\x02\x02\x02\xC4\u09C3\x03\x02\x02\x02\xC6" +
		"\u09D7\x03\x02\x02\x02\xC8\u09EB\x03\x02\x02\x02\xCA\u09FF\x03\x02\x02" +
		"\x02\xCC\u0A13\x03\x02\x02\x02\xCE\u0A27\x03\x02\x02\x02\xD0\u0A3B\x03" +
		"\x02\x02\x02\xD2\u0A4F\x03\x02\x02\x02\xD4\u0A63\x03\x02\x02\x02\xD6\u0A77" +
		"\x03\x02\x02\x02\xD8\u0A8B\x03\x02\x02\x02\xDA\u0A9F\x03\x02\x02\x02\xDC" +
		"\u0AB3\x03\x02\x02\x02\xDE\u0AC7\x03\x02\x02\x02\xE0\u0ADB\x03\x02\x02" +
		"\x02\xE2\u0AEF\x03\x02\x02\x02\xE4\u0B03\x03\x02\x02\x02\xE6\u0B17\x03" +
		"\x02\x02\x02\xE8\u0B2B\x03\x02\x02\x02\xEA\u0B3F\x03\x02\x02\x02\xEC\u0B53" +
		"\x03\x02\x02\x02\xEE\u0B67\x03\x02\x02\x02\xF0\u0B7B\x03\x02\x02\x02\xF2" +
		"\u0B8F\x03\x02\x02\x02\xF4\u0BA3\x03\x02\x02\x02\xF6\u0BD1\x03\x02\x02" +
		"\x02\xF8\u0BD5\x03\x02\x02\x02\xFA\u0C0C\x03\x02\x02\x02\xFC\u0C12\x03" +
		"\x02\x02\x02\xFE\u0C3C\x03\x02\x02\x02\u0100\u0C5F\x03\x02\x02\x02\u0102" +
		"\u0C82\x03\x02\x02\x02\u0104\u0CA5\x03\x02\x02\x02\u0106\u0CE2\x03\x02" +
		"\x02\x02\u0108\u0CE6\x03\x02\x02\x02\u010A\u0CED\x03\x02\x02\x02\u010C" +
		"\u0CF7\x03\x02\x02\x02\u010E\u0D02\x03\x02\x02\x02\u0110\u0D08\x03\x02" +
		"\x02\x02\u0112\u0D18\x03\x02\x02\x02\u0114\u0D1A\x03\x02\x02\x02\u0116" +
		"\u0D1F\x03\x02\x02\x02\u0118\u0D21\x03\x02\x02\x02\u011A\u0D23\x03\x02" +
		"\x02\x02\u011C\u0D25\x03\x02\x02\x02\u011E\u0D27\x03\x02\x02\x02\u0120" +
		"\u0D29\x03\x02\x02\x02\u0122\u0D2B\x03\x02\x02\x02\u0124\u0D2D\x03\x02" +
		"\x02\x02\u0126\u0D2F\x03\x02\x02\x02\u0128\u0D3B\x03\x02\x02\x02\u012A" +
		"\u0D3D\x03\x02\x02\x02\u012C\u0D45\x03\x02\x02\x02\u012E\u0D47\x03\x02" +
		"\x02\x02\u0130\u0D51\x03\x02\x02\x02\u0132\u0D5B\x03\x02\x02\x02\u0134" +
		"\u0D68\x03\x02\x02\x02\u0136\u0D6F\x03\x02\x02\x02\u0138\u0D7A\x03\x02" +
		"\x02\x02\u013A\u0D81\x03\x02\x02\x02\u013C\u0D8B\x03\x02\x02\x02\u013E" +
		"\u0D96\x03\x02\x02\x02\u0140\u0DAF\x03\x02\x02\x02\u0142\u0DC2\x03\x02" +
		"\x02\x02\u0144\u0DD5\x03\x02\x02\x02\u0146\u0DD7\x03\x02\x02\x02\u0148" +
		"\u0DDE\x03\x02\x02\x02\u014A\u0DF2\x03\x02\x02\x02\u014C\u0DFE\x03\x02" +
		"\x02\x02\u014E\u0E1F\x03\x02\x02\x02\u0150\u0E21\x03\x02\x02\x02\u0152" +
		"\u0E25\x03\x02\x02\x02\u0154\u0E45\x03\x02\x02\x02\u0156\u0E47\x03\x02" +
		"\x02\x02\u0158\u0E5C\x03\x02\x02\x02\u015A\u0E65\x03\x02\x02\x02\u015C" +
		"\u0E8E\x03\x02\x02\x02\u015E\u0EA6\x03\x02\x02\x02\u0160\u0EA8\x03\x02" +
		"\x02\x02\u0162\u0EAC\x03\x02\x02\x02\u0164\u0EB8\x03\x02\x02\x02\u0166" +
		"\u0EE4\x03\x02\x02\x02\u0168\u0EE6\x03\x02\x02\x02\u016A\u0EFA\x03\x02" +
		"\x02\x02\u016C\u0F04\x03\x02\x02\x02\u016E\u0F0F\x03\x02\x02\x02\u0170" +
		"\u0F11\x03\x02\x02\x02\u0172\u0F15\x03\x02\x02\x02\u0174\u0F19\x03\x02" +
		"\x02\x02\u0176\u0F3C\x03\x02\x02\x02\u0178\u0F51\x03\x02\x02\x02\u017A" +
		"\u0F53\x03\x02\x02\x02\u017C\u0F5D\x03\x02\x02\x02\u017E\u0F8F\x03\x02" +
		"\x02\x02\u0180\u0F91\x03\x02\x02\x02\u0182\u0F93\x03\x02\x02\x02\u0184" +
		"\u0F9C\x03\x02\x02\x02\u0186\u0F9E\x03\x02\x02\x02\u0188\u0FBB\x03\x02" +
		"\x02\x02\u018A\u0FBF\x03\x02\x02\x02\u018C\u0FC1\x03\x02\x02\x02\u018E" +
		"\u0198\x05\x04\x03\x02\u018F\u0191\x07\x04\x02\x02\u0190\u018F\x03\x02" +
		"\x02\x02\u0191\u0194\x03\x02\x02\x02\u0192\u0190\x03\x02\x02\x02\u0192" +
		"\u0193\x03\x02\x02\x02\u0193\u0195\x03\x02\x02\x02\u0194\u0192\x03\x02" +
		"\x02\x02\u0195\u0197\x07\xA4\x02\x02\u0196\u0192\x03\x02\x02\x02\u0197" +
		"\u019A\x03\x02\x02\x02\u0198\u0196\x03\x02\x02\x02\u0198\u0199\x03\x02" +
		"\x02\x02\u0199\u019C\x03\x02\x02\x02\u019A\u0198\x03\x02\x02\x02\u019B" +
		"\u018E\x03\x02\x02\x02\u019C\u019D\x03\x02\x02\x02\u019D\u019B\x03\x02" +
		"\x02\x02\u019D\u019E\x03\x02\x02\x02\u019E\u01A2\x03\x02\x02\x02\u019F" +
		"\u01A1\x07\xA4\x02\x02\u01A0\u019F\x03\x02\x02\x02\u01A1\u01A4\x03\x02" +
		"\x02\x02\u01A2\u01A0\x03\x02\x02\x02\u01A2\u01A3\x03\x02\x02\x02\u01A3" +
		"\u01A5\x03\x02\x02\x02\u01A4\u01A2\x03\x02\x02\x02\u01A5\u01A6\x07\x02" +
		"\x02\x03\u01A6\x03\x03\x02\x02\x02\u01A7\u01AA\x05\x06\x04\x02\u01A8\u01AA" +
		"\x05\u017C\xBF\x02\u01A9\u01A7\x03\x02\x02\x02\u01A9\u01A8\x03\x02\x02" +
		"\x02\u01AA\x05\x03\x02\x02\x02\u01AB\u021E\x05\b\x05\x02\u01AC\u021E\x05" +
		"\n\x06\x02\u01AD\u021E\x05\x0E\b\x02\u01AE\u021E\x05\f\x07\x02\u01AF\u021E" +
		"\x05\x12\n\x02\u01B0\u021E\x05\x10\t\x02\u01B1\u021E\x05\u017A\xBE\x02" +
		"\u01B2\u021E\x05\x16\f\x02\u01B3\u021E\x05\x18\r\x02\u01B4\u021E\x05F" +
		"$\x02\u01B5\u021E\x05N(\x02\u01B6\u021E\x05R*\x02\u01B7\u021E\x05X-\x02" +
		"\u01B8\u021E\x05\\/\x02\u01B9\u021E\x05Z.\x02\u01BA\u021E\x05^0\x02\u01BB" +
		"\u021E\x05`1\x02\u01BC\u021E\x05b2\x02\u01BD\u021E\x05d3\x02\u01BE\u021E" +
		"\x05f4\x02\u01BF\u021E\x05h5\x02\u01C0\u021E\x05j6\x02\u01C1\u021E\x05" +
		"l7\x02\u01C2\u021E\x05n8\x02\u01C3\u021E\x05p9\x02\u01C4\u021E\x05t;\x02" +
		"\u01C5\u021E\x05v<\x02\u01C6\u021E\x05x=\x02\u01C7\u021E\x05z>\x02\u01C8" +
		"\u021E\x05\x8AF\x02\u01C9\u021E\x05|?\x02\u01CA\u021E\x05~@\x02\u01CB" +
		"\u021E\x05\x80A\x02\u01CC\u021E\x05\x82B\x02\u01CD\u021E\x05\x84C\x02" +
		"\u01CE\u021E\x05\x86D\x02\u01CF\u021E\x05\x88E\x02\u01D0\u021E\x05\x8C" +
		"G\x02\u01D1\u021E\x05r:\x02\u01D2\u021E\x05\xF2z\x02\u01D3\u021E\x05\xF4" +
		"{\x02\u01D4\u021E\x05\u0104\x83\x02\u01D5\u021E\x05\xF8}\x02\u01D6\u021E" +
		"\x05\xFC\x7F\x02\u01D7\u021E\x05\xFE\x80\x02\u01D8\u021E\x05\u0100\x81" +
		"\x02\u01D9\u021E\x05\u0102\x82\x02\u01DA\u021E\x05\u0168\xB5\x02\u01DB" +
		"\u021E\x05\x8EH\x02\u01DC\u021E\x05\x90I\x02\u01DD\u021E\x05\x1A\x0E\x02" +
		"\u01DE\u021E\x05\x1C\x0F\x02\u01DF\u021E\x05\x1E\x10\x02\u01E0\u021E\x05" +
		" \x11\x02\u01E1\u021E\x05\"\x12\x02\u01E2\u021E\x05$\x13\x02\u01E3\u021E" +
		"\x05&\x14\x02\u01E4\u021E\x05(\x15\x02\u01E5\u021E\x05*\x16\x02\u01E6" +
		"\u021E\x05,\x17\x02\u01E7\u021E\x05.\x18\x02\u01E8\u021E\x050\x19\x02" +
		"\u01E9\u021E\x052\x1A\x02\u01EA\u021E\x054\x1B\x02\u01EB\u021E\x056\x1C" +
		"\x02\u01EC\u021E\x058\x1D\x02\u01ED\u021E\x05\x92J\x02\u01EE\u021E\x05" +
		"\x94K\x02\u01EF\u021E\x05\x96L\x02\u01F0\u021E\x05\x98M\x02\u01F1\u021E" +
		"\x05\x9AN\x02\u01F2\u021E\x05\x9CO\x02\u01F3\u021E\x05\x9EP\x02\u01F4" +
		"\u021E\x05\xA0Q\x02\u01F5\u021E\x05\xA2R\x02\u01F6\u021E\x05\xA4S\x02" +
		"\u01F7\u021E\x05\xA6T\x02\u01F8\u021E\x05\xA8U\x02\u01F9\u021E\x05\xAC" +
		"W\x02\u01FA\u021E\x05\xAEX\x02\u01FB\u021E\x05\xB0Y\x02\u01FC\u021E\x05" +
		"\xB2Z\x02\u01FD\u021E\x05\xAAV\x02\u01FE\u021E\x05\xB4[\x02\u01FF\u021E" +
		"\x05\xB6\\\x02\u0200\u021E\x05\xB8]\x02\u0201\u021E\x05\xBA^\x02\u0202" +
		"\u021E\x05\xBC_\x02\u0203\u021E\x05\xBE`\x02\u0204\u021E\x05\xC0a\x02" +
		"\u0205\u021E\x05\xC2b\x02\u0206\u021E\x05\xC4c\x02\u0207\u021E\x05\xC6" +
		"d\x02\u0208\u021E\x05\xC8e\x02\u0209\u021E\x05\xCAf\x02\u020A\u021E\x05" +
		"\xCCg\x02\u020B\u021E\x05\xCEh\x02\u020C\u021E\x05\xD0i\x02\u020D\u021E" +
		"\x05\xD2j\x02\u020E\u021E\x05\xD4k\x02\u020F\u021E\x05\xD6l\x02\u0210" +
		"\u021E\x05\xD8m\x02\u0211\u021E\x05\xDAn\x02\u0212\u021E\x05\xDCo\x02" +
		"\u0213\u021E\x05\xDEp\x02\u0214\u021E\x05\xE0q\x02\u0215\u021E\x05\xE2" +
		"r\x02\u0216\u021E\x05\xE4s\x02\u0217\u021E\x05\xE6t\x02\u0218\u021E\x05" +
		"\xE8u\x02\u0219\u021E\x05\xEAv\x02\u021A\u021E\x05\xECw\x02\u021B\u021E" +
		"\x05\xEEx\x02\u021C\u021E\x05\xF0y\x02\u021D\u01AB\x03\x02\x02\x02\u021D" +
		"\u01AC\x03\x02\x02\x02\u021D\u01AD\x03\x02\x02\x02\u021D\u01AE\x03\x02" +
		"\x02\x02\u021D\u01AF\x03\x02\x02\x02\u021D\u01B0\x03\x02\x02\x02\u021D" +
		"\u01B1\x03\x02\x02\x02\u021D\u01B2\x03\x02\x02\x02\u021D\u01B3\x03\x02" +
		"\x02\x02\u021D\u01B4\x03\x02\x02\x02\u021D\u01B5\x03\x02\x02\x02\u021D" +
		"\u01B6\x03\x02\x02\x02\u021D\u01B7\x03\x02\x02\x02\u021D\u01B8\x03\x02" +
		"\x02\x02\u021D\u01B9\x03\x02\x02\x02\u021D\u01BA\x03\x02\x02\x02\u021D" +
		"\u01BB\x03\x02\x02\x02\u021D\u01BC\x03\x02\x02\x02\u021D\u01BD\x03\x02" +
		"\x02\x02\u021D\u01BE\x03\x02\x02\x02\u021D\u01BF\x03\x02\x02\x02\u021D" +
		"\u01C0\x03\x02\x02\x02\u021D\u01C1\x03\x02\x02\x02\u021D\u01C2\x03\x02" +
		"\x02\x02\u021D\u01C3\x03\x02\x02\x02\u021D\u01C4\x03\x02\x02\x02\u021D" +
		"\u01C5\x03\x02\x02\x02\u021D\u01C6\x03\x02\x02\x02\u021D\u01C7\x03\x02" +
		"\x02\x02\u021D\u01C8\x03\x02\x02\x02\u021D\u01C9\x03\x02\x02\x02\u021D" +
		"\u01CA\x03\x02\x02\x02\u021D\u01CB\x03\x02\x02\x02\u021D\u01CC\x03\x02" +
		"\x02\x02\u021D\u01CD\x03\x02\x02\x02\u021D\u01CE\x03\x02\x02\x02\u021D" +
		"\u01CF\x03\x02\x02\x02\u021D\u01D0\x03\x02\x02\x02\u021D\u01D1\x03\x02" +
		"\x02\x02\u021D\u01D2\x03\x02\x02\x02\u021D\u01D3\x03\x02\x02\x02\u021D" +
		"\u01D4\x03\x02\x02\x02\u021D\u01D5\x03\x02\x02\x02\u021D\u01D6\x03\x02" +
		"\x02\x02\u021D\u01D7\x03\x02\x02\x02\u021D\u01D8\x03\x02\x02\x02\u021D" +
		"\u01D9\x03\x02\x02\x02\u021D\u01DA\x03\x02\x02\x02\u021D\u01DB\x03\x02" +
		"\x02\x02\u021D\u01DC\x03\x02\x02\x02\u021D\u01DD\x03\x02\x02\x02\u021D" +
		"\u01DE\x03\x02\x02\x02\u021D\u01DF\x03\x02\x02\x02\u021D\u01E0\x03\x02" +
		"\x02\x02\u021D\u01E1\x03\x02\x02\x02\u021D\u01E2\x03\x02\x02\x02\u021D" +
		"\u01E3\x03\x02\x02\x02\u021D\u01E4\x03\x02\x02\x02\u021D\u01E5\x03\x02" +
		"\x02\x02\u021D\u01E6\x03\x02\x02\x02\u021D\u01E7\x03\x02\x02\x02\u021D" +
		"\u01E8\x03\x02\x02\x02\u021D\u01E9\x03\x02\x02\x02\u021D\u01EA\x03\x02" +
		"\x02\x02\u021D\u01EB\x03\x02\x02\x02\u021D\u01EC\x03\x02\x02\x02\u021D" +
		"\u01ED\x03\x02\x02\x02\u021D\u01EE\x03\x02\x02\x02\u021D\u01EF\x03\x02" +
		"\x02\x02\u021D\u01F0\x03\x02\x02\x02\u021D\u01F1\x03\x02\x02\x02\u021D" +
		"\u01F2\x03\x02\x02\x02\u021D\u01F3\x03\x02\x02\x02\u021D\u01F4\x03\x02" +
		"\x02\x02\u021D\u01F5\x03\x02\x02\x02\u021D\u01F6\x03\x02\x02\x02\u021D" +
		"\u01F7\x03\x02\x02\x02\u021D\u01F8\x03\x02\x02\x02\u021D\u01F9\x03\x02" +
		"\x02\x02\u021D\u01FA\x03\x02\x02\x02\u021D\u01FB\x03\x02\x02\x02\u021D" +
		"\u01FC\x03\x02\x02\x02\u021D\u01FD\x03\x02\x02\x02\u021D\u01FE\x03\x02" +
		"\x02\x02\u021D\u01FF\x03\x02\x02\x02\u021D\u0200\x03\x02\x02\x02\u021D" +
		"\u0201\x03\x02\x02\x02\u021D\u0202\x03\x02\x02\x02\u021D\u0203\x03\x02" +
		"\x02\x02\u021D\u0204\x03\x02\x02\x02\u021D\u0205\x03\x02\x02\x02\u021D" +
		"\u0206\x03\x02\x02\x02\u021D\u0207\x03\x02\x02\x02\u021D\u0208\x03\x02" +
		"\x02\x02\u021D\u0209\x03\x02\x02\x02\u021D\u020A\x03\x02\x02\x02\u021D" +
		"\u020B\x03\x02\x02\x02\u021D\u020C\x03\x02\x02\x02\u021D\u020D\x03\x02" +
		"\x02\x02\u021D\u020E\x03\x02\x02\x02\u021D\u020F\x03\x02\x02\x02\u021D" +
		"\u0210\x03\x02\x02\x02\u021D\u0211\x03\x02\x02\x02\u021D\u0212\x03\x02" +
		"\x02\x02\u021D\u0213\x03\x02\x02\x02\u021D\u0214\x03\x02\x02\x02\u021D" +
		"\u0215\x03\x02\x02\x02\u021D\u0216\x03\x02\x02\x02\u021D\u0217\x03\x02" +
		"\x02\x02\u021D\u0218\x03\x02\x02\x02\u021D\u0219\x03\x02\x02\x02\u021D" +
		"\u021A\x03\x02\x02\x02\u021D\u021B\x03\x02\x02\x02\u021D\u021C\x03\x02" +
		"\x02\x02\u021E\x07\x03\x02\x02\x02\u021F\u0221\x07\x05\x02\x02\u0220\u0222" +
		"\x05\u010A\x86\x02\u0221\u0220\x03\x02\x02\x02\u0221\u0222\x03\x02\x02" +
		"\x02\u0222\u0223\x03\x02\x02\x02\u0223\u022B\x07\x8F\x02\x02\u0224\u0226" +
		"\x07\xA4\x02\x02\u0225\u0224\x03\x02\x02\x02\u0226\u0229\x03\x02\x02\x02" +
		"\u0227\u0225\x03\x02\x02\x02\u0227\u0228\x03\x02\x02\x02\u0228\u022A\x03" +
		"\x02\x02\x02\u0229\u0227\x03\x02\x02\x02\u022A\u022C\x05:\x1E\x02\u022B" +
		"\u0227\x03\x02\x02\x02\u022C\u022D\x03\x02\x02\x02\u022D\u022B\x03\x02" +
		"\x02\x02\u022D\u022E\x03\x02\x02\x02\u022E\t\x03\x02\x02\x02\u022F\u0231" +
		"\x07\x06\x02\x02\u0230\u0232\x05\u010A\x86\x02\u0231\u0230\x03\x02\x02" +
		"\x02\u0231\u0232\x03\x02\x02\x02\u0232\u0233\x03\x02\x02\x02\u0233\u0237" +
		"\x07\x8F\x02\x02\u0234\u0236\x07\xA4\x02\x02\u0235\u0234\x03\x02\x02\x02" +
		"\u0236\u0239\x03\x02\x02\x02\u0237\u0235\x03\x02\x02\x02\u0237\u0238\x03" +
		"\x02\x02\x02\u0238\u023D\x03\x02\x02\x02\u0239\u0237\x03\x02\x02\x02\u023A" +
		"\u023B\x05\u017A\xBE\x02\u023B\u023C\x07\xA4\x02\x02\u023C\u023E\x03\x02" +
		"\x02\x02\u023D\u023A\x03\x02\x02\x02\u023D\u023E\x03\x02\x02\x02\u023E" +
		"\u023F\x03\x02\x02\x02\u023F\u0249\x05L\'\x02\u0240\u0242\x07\xA4\x02" +
		"\x02\u0241\u0240\x03\x02\x02\x02\u0242\u0245\x03\x02\x02\x02\u0243\u0241" +
		"\x03\x02\x02\x02\u0243\u0244\x03\x02\x02\x02\u0244\u0246\x03\x02\x02\x02" +
		"\u0245\u0243\x03\x02\x02\x02\u0246\u0248\x05L\'\x02\u0247\u0243\x03\x02" +
		"\x02\x02\u0248\u024B\x03\x02\x02\x02\u0249\u0247\x03\x02\x02\x02\u0249" +
		"\u024A\x03\x02\x02\x02\u024A\v\x03\x02\x02\x02\u024B\u0249\x03\x02\x02" +
		"\x02\u024C\u024E\x07\x07\x02\x02\u024D\u024F\x05\u017E\xC0\x02\u024E\u024D" +
		"\x03\x02\x02\x02\u024E\u024F\x03\x02\x02\x02\u024F\u0250\x03\x02\x02\x02" +
		"\u0250\u0251\x07\x8F\x02\x02\u0251\u0255\x07\xA4\x02\x02\u0252\u0253\x05" +
		"\u0174\xBB\x02\u0253\u0254\x07\xA4\x02\x02\u0254\u0256\x03\x02\x02\x02" +
		"\u0255\u0252\x03\x02\x02\x02\u0255\u0256\x03\x02\x02\x02\u0256\r\x03\x02" +
		"\x02\x02\u0257\u0258\x07\b\x02\x02\u0258\u025C\x07\x8F\x02\x02\u0259\u025B" +
		"\x07\xA4\x02\x02\u025A\u0259\x03\x02\x02\x02\u025B\u025E\x03\x02\x02\x02" +
		"\u025C\u025A\x03\x02\x02\x02\u025C\u025D\x03\x02\x02\x02\u025D\u025F\x03" +
		"\x02\x02\x02\u025E\u025C\x03\x02\x02\x02\u025F\u0260\x05\x14\v\x02\u0260" +
		"\x0F\x03\x02\x02\x02\u0261\u0263\t\x02\x02\x02\u0262\u0264\t\x03\x02\x02" +
		"\u0263\u0262\x03\x02\x02\x02\u0263\u0264\x03\x02\x02\x02\u0264\u0265\x03" +
		"\x02\x02\x02\u0265\u026F\x07\x8F\x02\x02\u0266\u0268\x07\xA4\x02\x02\u0267" +
		"\u0266\x03\x02\x02\x02\u0268\u026B\x03\x02\x02\x02\u0269\u0267\x03\x02" +
		"\x02\x02\u0269\u026A\x03\x02\x02\x02\u026A\u026C\x03\x02\x02\x02\u026B" +
		"\u0269\x03\x02\x02\x02\u026C\u026E\x05:\x1E\x02\u026D\u0269\x03\x02\x02" +
		"\x02\u026E\u0271\x03\x02\x02\x02\u026F\u026D\x03\x02\x02\x02\u026F\u0270" +
		"\x03\x02\x02\x02\u0270\x11\x03\x02\x02\x02\u0271\u026F\x03\x02\x02\x02" +
		"\u0272\u0273\x07\v\x02\x02\u0273\u0274\x07\x8F\x02\x02\u0274\u0275\x05" +
		"\u0158\xAD\x02\u0275\x13\x03\x02\x02\x02\u0276\u0278\x07\xA4\x02\x02\u0277" +
		"\u0276\x03\x02\x02\x02\u0277\u0278\x03\x02\x02\x02\u0278\u0280\x03\x02" +
		"\x02\x02\u0279\u0281\x05\u016A\xB6\x02\u027A\u0281\x05\u0174\xBB\x02\u027B" +
		"\u0281\x05\u0154\xAB\x02\u027C\u0281\x05\u0166\xB4\x02\u027D\u0281\x05" +
		"\u0158\xAD\x02\u027E\u0281\x05\u017A\xBE\x02\u027F\u0281\x05\u0160\xB1" +
		"\x02\u0280\u0279\x03\x02\x02\x02\u0280\u027A\x03\x02\x02\x02\u0280\u027B" +
		"\x03\x02\x02\x02\u0280\u027C\x03\x02\x02\x02\u0280\u027D\x03\x02\x02\x02" +
		"\u0280\u027E\x03\x02\x02\x02\u0280\u027F\x03\x02\x02\x02\u0281\u0283\x03" +
		"\x02\x02\x02\u0282\u0277\x03\x02\x02\x02\u0283\u0286\x03\x02\x02\x02\u0284" +
		"\u0282\x03\x02\x02\x02\u0284\u0285\x03\x02\x02\x02\u0285\x15\x03\x02\x02" +
		"\x02\u0286\u0284\x03\x02\x02\x02\u0287\u0288\x07\f\x02\x02\u0288\u0292" +
		"\x07\x8F\x02\x02\u0289\u028A\x07\xA4\x02\x02\u028A\u028D\t\x04\x02\x02" +
		"\u028B\u028E\x05\u017E\xC0\x02\u028C\u028E\x07\x90\x02\x02\u028D\u028B" +
		"\x03\x02\x02\x02\u028D\u028C\x03\x02\x02\x02\u028E\u028F\x03\x02\x02\x02" +
		"\u028F\u028D\x03\x02\x02\x02\u028F\u0290\x03\x02\x02\x02\u0290\u0291\x03" +
		"\x02\x02\x02\u0291\u0293\x07\x8F\x02\x02\u0292\u0289\x03\x02\x02\x02\u0293" +
		"\u0294\x03\x02\x02\x02\u0294\u0292\x03\x02\x02\x02\u0294\u0295\x03\x02" +
		"\x02\x02\u0295\u0296\x03\x02\x02\x02\u0296\u029A\x07\xA4\x02\x02\u0297" +
		"\u0299\x05\u017C\xBF\x02\u0298\u0297\x03\x02\x02\x02\u0299\u029C\x03\x02" +
		"\x02\x02\u029A\u0298\x03\x02\x02\x02\u029A\u029B\x03\x02\x02\x02\u029B" +
		"\x17\x03\x02\x02\x02\u029C\u029A\x03\x02\x02\x02\u029D\u029E\x07\r\x02" +
		"\x02\u029E\u02A8\x07\x8F\x02\x02\u029F\u02A0\x07\xA4\x02\x02\u02A0\u02A3" +
		"\t\x04\x02\x02\u02A1\u02A4\x05\u017E\xC0\x02\u02A2\u02A4\x07\x90\x02\x02" +
		"\u02A3\u02A1\x03\x02\x02\x02\u02A3\u02A2\x03\x02\x02\x02\u02A4\u02A5\x03" +
		"\x02\x02\x02\u02A5\u02A3\x03\x02\x02\x02\u02A5\u02A6\x03\x02\x02\x02\u02A6" +
		"\u02A7\x03\x02\x02\x02\u02A7\u02A9\x07\x8F\x02\x02\u02A8\u029F\x03\x02" +
		"\x02\x02\u02A9\u02AA\x03\x02\x02\x02\u02AA\u02A8\x03\x02\x02\x02\u02AA" +
		"\u02AB\x03\x02\x02\x02\u02AB\u02AC\x03\x02\x02\x02\u02AC\u02B0\x07\xA4" +
		"\x02\x02\u02AD\u02AF\x05\u017C\xBF\x02\u02AE\u02AD\x03\x02\x02\x02\u02AF" +
		"\u02B2\x03\x02\x02\x02\u02B0\u02AE\x03\x02\x02\x02\u02B0\u02B1\x03\x02" +
		"\x02\x02\u02B1\x19\x03\x02\x02\x02\u02B2\u02B0\x03\x02\x02\x02\u02B3\u02B4" +
		"\x079\x02\x02\u02B4\u02B5\x05\u010A\x86\x02\u02B5\u02B9\x07\x8F\x02\x02" +
		"\u02B6\u02B8\x07\xA4\x02\x02\u02B7\u02B6\x03\x02\x02\x02\u02B8\u02BB\x03" +
		"\x02\x02\x02\u02B9\u02B7\x03\x02\x02\x02\u02B9\u02BA\x03\x02\x02\x02\u02BA" +
		"\u02C3\x03\x02\x02\x02\u02BB\u02B9\x03\x02\x02\x02\u02BC\u02C0\x05:\x1E" +
		"\x02\u02BD\u02BF\x07\xA4\x02\x02\u02BE\u02BD\x03\x02\x02\x02\u02BF\u02C2" +
		"\x03\x02\x02\x02\u02C0\u02BE\x03\x02\x02\x02\u02C0\u02C1\x03\x02\x02\x02" +
		"\u02C1\u02C4\x03\x02\x02\x02\u02C2\u02C0\x03\x02\x02\x02\u02C3\u02BC\x03" +
		"\x02\x02\x02\u02C4\u02C5\x03\x02\x02\x02\u02C5\u02C3\x03\x02\x02\x02\u02C5" +
		"\u02C6\x03\x02\x02\x02\u02C6\x1B\x03\x02\x02\x02\u02C7\u02C8\x07:\x02" +
		"\x02\u02C8\u02C9\x05\u010A\x86\x02\u02C9\u02CD\x07\x8F\x02\x02\u02CA\u02CC" +
		"\x07\xA4\x02\x02\u02CB\u02CA\x03\x02\x02\x02\u02CC\u02CF\x03\x02\x02\x02" +
		"\u02CD\u02CB\x03\x02\x02\x02\u02CD\u02CE\x03\x02\x02\x02\u02CE\u02D7\x03" +
		"\x02\x02\x02\u02CF\u02CD\x03\x02\x02\x02\u02D0\u02D4\x05:\x1E\x02\u02D1" +
		"\u02D3\x07\xA4\x02\x02\u02D2\u02D1\x03\x02\x02\x02\u02D3\u02D6\x03\x02" +
		"\x02\x02\u02D4\u02D2\x03\x02\x02\x02\u02D4\u02D5\x03\x02\x02\x02\u02D5" +
		"\u02D8\x03\x02\x02\x02\u02D6\u02D4\x03\x02\x02\x02\u02D7\u02D0\x03\x02" +
		"\x02\x02\u02D8\u02D9\x03\x02\x02\x02\u02D9\u02D7\x03\x02\x02\x02\u02D9" +
		"\u02DA\x03\x02\x02\x02\u02DA\x1D\x03\x02\x02\x02\u02DB\u02DC\x07;\x02" +
		"\x02\u02DC\u02DD\x05\u010A\x86\x02\u02DD\u02E1\x07\x8F\x02\x02\u02DE\u02E0" +
		"\x07\xA4\x02\x02\u02DF\u02DE\x03\x02\x02\x02\u02E0\u02E3\x03\x02\x02\x02" +
		"\u02E1\u02DF\x03\x02\x02\x02\u02E1\u02E2\x03\x02\x02\x02\u02E2\u02EB\x03" +
		"\x02\x02\x02\u02E3\u02E1\x03\x02\x02\x02\u02E4\u02E8\x05:\x1E\x02\u02E5" +
		"\u02E7\x07\xA4\x02\x02\u02E6\u02E5\x03\x02\x02\x02\u02E7\u02EA\x03\x02" +
		"\x02\x02\u02E8\u02E6\x03\x02\x02\x02\u02E8\u02E9\x03\x02\x02\x02\u02E9" +
		"\u02EC\x03\x02\x02\x02\u02EA\u02E8\x03\x02\x02\x02\u02EB\u02E4\x03\x02" +
		"\x02\x02\u02EC\u02ED\x03\x02\x02\x02\u02ED\u02EB\x03\x02\x02\x02\u02ED" +
		"\u02EE\x03\x02\x02\x02\u02EE\x1F\x03\x02\x02\x02\u02EF\u02F0\x07<\x02" +
		"\x02\u02F0\u02F1\x05\u010A\x86\x02\u02F1\u02F5\x07\x8F\x02\x02\u02F2\u02F4" +
		"\x07\xA4\x02\x02\u02F3\u02F2\x03\x02\x02\x02\u02F4\u02F7\x03\x02\x02\x02" +
		"\u02F5\u02F3\x03\x02\x02\x02\u02F5\u02F6\x03\x02\x02\x02\u02F6\u02FF\x03" +
		"\x02\x02\x02\u02F7\u02F5\x03\x02\x02\x02\u02F8\u02FC\x05:\x1E\x02\u02F9" +
		"\u02FB\x07\xA4\x02\x02\u02FA\u02F9\x03\x02\x02\x02\u02FB\u02FE\x03\x02" +
		"\x02\x02\u02FC\u02FA\x03\x02\x02\x02\u02FC\u02FD\x03\x02\x02\x02\u02FD" +
		"\u0300\x03\x02\x02\x02\u02FE\u02FC\x03\x02\x02\x02\u02FF\u02F8\x03\x02" +
		"\x02\x02\u0300\u0301\x03\x02\x02\x02\u0301\u02FF\x03\x02\x02\x02\u0301" +
		"\u0302\x03\x02\x02\x02\u0302!\x03\x02\x02\x02\u0303\u0304\x07=\x02\x02" +
		"\u0304\u0305\x05\u010A\x86\x02\u0305\u0309\x07\x8F\x02\x02\u0306\u0308" +
		"\x07\xA4\x02\x02\u0307\u0306\x03\x02\x02\x02\u0308\u030B\x03\x02\x02\x02" +
		"\u0309\u0307\x03\x02\x02\x02\u0309\u030A\x03\x02\x02\x02\u030A\u0313\x03" +
		"\x02\x02\x02\u030B\u0309\x03\x02\x02\x02\u030C\u0310\x05:\x1E\x02\u030D" +
		"\u030F\x07\xA4\x02\x02\u030E\u030D\x03\x02\x02\x02\u030F\u0312\x03\x02" +
		"\x02\x02\u0310\u030E\x03\x02\x02\x02\u0310\u0311\x03\x02\x02\x02\u0311" +
		"\u0314\x03\x02\x02\x02\u0312\u0310\x03\x02\x02\x02\u0313\u030C\x03\x02" +
		"\x02\x02\u0314\u0315\x03\x02\x02\x02\u0315\u0313\x03\x02\x02\x02\u0315" +
		"\u0316\x03\x02\x02\x02\u0316#\x03\x02\x02\x02\u0317\u0318\x07>\x02\x02" +
		"\u0318\u0319\x05\u010A\x86\x02\u0319\u031D\x07\x8F\x02\x02\u031A\u031C" +
		"\x07\xA4\x02\x02\u031B\u031A\x03\x02\x02\x02\u031C\u031F\x03\x02\x02\x02" +
		"\u031D\u031B\x03\x02\x02\x02\u031D\u031E\x03\x02\x02\x02\u031E\u0327\x03" +
		"\x02\x02\x02\u031F\u031D\x03\x02\x02\x02\u0320\u0324\x05:\x1E\x02\u0321" +
		"\u0323\x07\xA4\x02\x02\u0322\u0321\x03\x02\x02\x02\u0323\u0326\x03\x02" +
		"\x02\x02\u0324\u0322\x03\x02\x02\x02\u0324\u0325\x03\x02\x02\x02\u0325" +
		"\u0328\x03\x02\x02\x02\u0326\u0324\x03\x02\x02\x02\u0327\u0320\x03\x02" +
		"\x02\x02\u0328\u0329\x03\x02\x02\x02\u0329\u0327\x03\x02\x02\x02\u0329" +
		"\u032A\x03\x02\x02\x02\u032A%\x03\x02\x02\x02\u032B\u032C\x07?\x02\x02" +
		"\u032C\u032D\x05\u010A\x86\x02\u032D\u0331\x07\x8F\x02\x02\u032E\u0330" +
		"\x07\xA4\x02\x02\u032F\u032E\x03\x02\x02\x02\u0330\u0333\x03\x02\x02\x02" +
		"\u0331\u032F\x03\x02\x02\x02\u0331\u0332\x03\x02\x02\x02\u0332\u033B\x03" +
		"\x02\x02\x02\u0333\u0331\x03\x02\x02\x02\u0334\u0338\x05:\x1E\x02\u0335" +
		"\u0337\x07\xA4\x02\x02\u0336\u0335\x03\x02\x02\x02\u0337\u033A\x03\x02" +
		"\x02\x02\u0338\u0336\x03\x02\x02\x02\u0338\u0339\x03\x02\x02\x02\u0339" +
		"\u033C\x03\x02\x02\x02\u033A\u0338\x03\x02\x02\x02\u033B\u0334\x03\x02" +
		"\x02\x02\u033C\u033D\x03\x02\x02\x02\u033D\u033B\x03\x02\x02\x02\u033D" +
		"\u033E\x03\x02\x02\x02\u033E\'\x03\x02\x02\x02\u033F\u0340\x07@\x02\x02" +
		"\u0340\u0341\x05\u010A\x86\x02\u0341\u0345\x07\x8F\x02\x02\u0342\u0344" +
		"\x07\xA4\x02\x02\u0343\u0342\x03\x02\x02\x02\u0344\u0347\x03\x02\x02\x02" +
		"\u0345\u0343\x03\x02\x02\x02\u0345\u0346\x03\x02\x02\x02\u0346\u034F\x03" +
		"\x02\x02\x02\u0347\u0345\x03\x02\x02\x02\u0348\u034C\x05:\x1E\x02\u0349" +
		"\u034B\x07\xA4\x02\x02\u034A\u0349\x03\x02\x02\x02\u034B\u034E\x03\x02" +
		"\x02\x02\u034C\u034A\x03\x02\x02\x02\u034C\u034D\x03\x02\x02\x02\u034D" +
		"\u0350\x03\x02\x02\x02\u034E\u034C\x03\x02\x02\x02\u034F\u0348\x03\x02" +
		"\x02\x02\u0350\u0351\x03\x02\x02\x02\u0351\u034F\x03\x02\x02\x02\u0351" +
		"\u0352\x03\x02\x02\x02\u0352)\x03\x02\x02\x02\u0353\u0354\x07A\x02\x02" +
		"\u0354\u0355\x05\u010A\x86\x02\u0355\u0359\x07\x8F\x02\x02\u0356\u0358" +
		"\x07\xA4\x02\x02\u0357\u0356\x03\x02\x02\x02\u0358\u035B\x03\x02\x02\x02" +
		"\u0359\u0357\x03\x02\x02\x02\u0359\u035A\x03\x02\x02\x02\u035A\u0363\x03" +
		"\x02\x02\x02\u035B\u0359\x03\x02\x02\x02\u035C\u0360\x05:\x1E\x02\u035D" +
		"\u035F\x07\xA4\x02\x02\u035E\u035D\x03\x02\x02\x02\u035F\u0362\x03\x02" +
		"\x02\x02\u0360\u035E\x03\x02\x02\x02\u0360\u0361\x03\x02\x02\x02\u0361" +
		"\u0364\x03\x02\x02\x02\u0362\u0360\x03\x02\x02\x02\u0363\u035C\x03\x02" +
		"\x02\x02\u0364\u0365\x03\x02\x02\x02\u0365\u0363\x03\x02\x02\x02\u0365" +
		"\u0366\x03\x02\x02\x02\u0366+\x03\x02\x02\x02\u0367\u0368\x07B\x02\x02" +
		"\u0368\u0369\x05\u010A\x86\x02\u0369\u036D\x07\x8F\x02\x02\u036A\u036C" +
		"\x07\xA4\x02\x02\u036B\u036A\x03\x02\x02\x02\u036C\u036F\x03\x02\x02\x02" +
		"\u036D\u036B\x03\x02\x02\x02\u036D\u036E\x03\x02\x02\x02\u036E\u0377\x03" +
		"\x02\x02\x02\u036F\u036D\x03\x02\x02\x02\u0370\u0374\x05:\x1E\x02\u0371" +
		"\u0373\x07\xA4\x02\x02\u0372\u0371\x03\x02\x02\x02\u0373\u0376\x03\x02" +
		"\x02\x02\u0374\u0372\x03\x02\x02\x02\u0374\u0375\x03\x02\x02\x02\u0375" +
		"\u0378\x03\x02\x02\x02\u0376\u0374\x03\x02\x02\x02\u0377\u0370\x03\x02" +
		"\x02\x02\u0378\u0379\x03\x02\x02\x02\u0379\u0377\x03\x02\x02\x02\u0379" +
		"\u037A\x03\x02\x02\x02\u037A-\x03\x02\x02\x02\u037B\u037C\x07C\x02\x02" +
		"\u037C\u037D\x05\u010A\x86\x02\u037D\u0381\x07\x8F\x02\x02\u037E\u0380" +
		"\x07\xA4\x02\x02\u037F\u037E\x03\x02\x02\x02\u0380\u0383\x03\x02\x02\x02" +
		"\u0381\u037F\x03\x02\x02\x02\u0381\u0382\x03\x02\x02\x02\u0382\u038B\x03" +
		"\x02\x02\x02\u0383\u0381\x03\x02\x02\x02\u0384\u0388\x05:\x1E\x02\u0385" +
		"\u0387\x07\xA4\x02\x02\u0386\u0385\x03\x02\x02\x02\u0387\u038A\x03\x02" +
		"\x02\x02\u0388\u0386\x03\x02\x02\x02\u0388\u0389\x03\x02\x02\x02\u0389" +
		"\u038C\x03\x02\x02\x02\u038A\u0388\x03\x02\x02\x02\u038B\u0384\x03\x02" +
		"\x02\x02\u038C\u038D\x03\x02\x02\x02\u038D\u038B\x03\x02\x02\x02\u038D" +
		"\u038E\x03\x02\x02\x02\u038E/\x03\x02\x02\x02\u038F\u0390\x07D\x02\x02" +
		"\u0390\u0391\x05\u010A\x86\x02\u0391\u0395\x07\x8F\x02\x02\u0392\u0394" +
		"\x07\xA4\x02\x02\u0393\u0392\x03\x02\x02\x02\u0394\u0397\x03\x02\x02\x02" +
		"\u0395\u0393\x03\x02\x02\x02\u0395\u0396\x03\x02\x02\x02\u0396\u039F\x03" +
		"\x02\x02\x02\u0397\u0395";
	private static readonly _serializedATNSegment3: string =
		"\x03\x02\x02\x02\u0398\u039C\x05:\x1E\x02\u0399\u039B\x07\xA4\x02\x02" +
		"\u039A\u0399\x03\x02\x02\x02\u039B\u039E\x03\x02\x02\x02\u039C\u039A\x03" +
		"\x02\x02\x02\u039C\u039D\x03\x02\x02\x02\u039D\u03A0\x03\x02\x02\x02\u039E" +
		"\u039C\x03\x02\x02\x02\u039F\u0398\x03\x02\x02\x02\u03A0\u03A1\x03\x02" +
		"\x02\x02\u03A1\u039F\x03\x02\x02\x02\u03A1\u03A2\x03\x02\x02\x02\u03A2" +
		"1\x03\x02\x02\x02\u03A3\u03A4\x07E\x02\x02\u03A4\u03A5\x05\u010A\x86\x02" +
		"\u03A5\u03A9\x07\x8F\x02\x02\u03A6\u03A8\x07\xA4\x02\x02\u03A7\u03A6\x03" +
		"\x02\x02\x02\u03A8\u03AB\x03\x02\x02\x02\u03A9\u03A7\x03\x02\x02\x02\u03A9" +
		"\u03AA\x03\x02\x02\x02\u03AA\u03B3\x03\x02\x02\x02\u03AB\u03A9\x03\x02" +
		"\x02\x02\u03AC\u03B0\x05:\x1E\x02\u03AD\u03AF\x07\xA4\x02\x02\u03AE\u03AD" +
		"\x03\x02\x02\x02\u03AF\u03B2\x03\x02\x02\x02\u03B0\u03AE\x03\x02\x02\x02" +
		"\u03B0\u03B1\x03\x02\x02\x02\u03B1\u03B4\x03\x02\x02\x02\u03B2\u03B0\x03" +
		"\x02\x02\x02\u03B3\u03AC\x03\x02\x02\x02\u03B4\u03B5\x03\x02\x02\x02\u03B5" +
		"\u03B3\x03\x02\x02\x02\u03B5\u03B6\x03\x02\x02\x02\u03B63\x03\x02\x02" +
		"\x02\u03B7\u03B8\x07F\x02\x02\u03B8\u03B9\x05\u010A\x86\x02\u03B9\u03BD" +
		"\x07\x8F\x02\x02\u03BA\u03BC\x07\xA4\x02\x02\u03BB\u03BA\x03\x02\x02\x02" +
		"\u03BC\u03BF\x03\x02\x02\x02\u03BD\u03BB\x03\x02\x02\x02\u03BD\u03BE\x03" +
		"\x02\x02\x02\u03BE\u03C7\x03\x02\x02\x02\u03BF\u03BD\x03\x02\x02\x02\u03C0" +
		"\u03C4\x05:\x1E\x02\u03C1\u03C3\x07\xA4\x02\x02\u03C2\u03C1\x03\x02\x02" +
		"\x02\u03C3\u03C6\x03\x02\x02\x02\u03C4\u03C2\x03\x02\x02\x02\u03C4\u03C5" +
		"\x03\x02\x02\x02\u03C5\u03C8\x03\x02\x02\x02\u03C6\u03C4\x03\x02\x02\x02" +
		"\u03C7\u03C0\x03\x02\x02\x02\u03C8\u03C9\x03\x02\x02\x02\u03C9\u03C7\x03" +
		"\x02\x02\x02\u03C9\u03CA\x03\x02\x02\x02\u03CA5\x03\x02\x02\x02\u03CB" +
		"\u03CC\x07G\x02\x02\u03CC\u03CD\x05\u010A\x86\x02\u03CD\u03D1\x07\x8F" +
		"\x02\x02\u03CE\u03D0\x07\xA4\x02\x02\u03CF\u03CE\x03\x02\x02\x02\u03D0" +
		"\u03D3\x03\x02\x02\x02\u03D1\u03CF\x03\x02\x02\x02\u03D1\u03D2\x03\x02" +
		"\x02\x02\u03D2\u03DB\x03\x02\x02\x02\u03D3\u03D1\x03\x02\x02\x02\u03D4" +
		"\u03D8\x05:\x1E\x02\u03D5\u03D7\x07\xA4\x02\x02\u03D6\u03D5\x03\x02\x02" +
		"\x02\u03D7\u03DA\x03\x02\x02\x02\u03D8\u03D6\x03\x02\x02\x02\u03D8\u03D9" +
		"\x03\x02\x02\x02\u03D9\u03DC\x03\x02\x02\x02\u03DA\u03D8\x03\x02\x02\x02" +
		"\u03DB\u03D4\x03\x02\x02\x02\u03DC\u03DD\x03\x02\x02\x02\u03DD\u03DB\x03" +
		"\x02\x02\x02\u03DD\u03DE\x03\x02\x02\x02\u03DE7\x03\x02\x02\x02\u03DF" +
		"\u03E0\x07H\x02\x02\u03E0\u03E1\x05\u010A\x86\x02\u03E1\u03E5\x07\x8F" +
		"\x02\x02\u03E2\u03E4\x07\xA4\x02\x02\u03E3\u03E2\x03\x02\x02\x02\u03E4" +
		"\u03E7\x03\x02\x02\x02\u03E5\u03E3\x03\x02\x02\x02\u03E5\u03E6\x03\x02" +
		"\x02\x02\u03E6\u03EF\x03\x02\x02\x02\u03E7\u03E5\x03\x02\x02\x02\u03E8" +
		"\u03EC\x05:\x1E\x02\u03E9\u03EB\x07\xA4\x02\x02\u03EA\u03E9\x03\x02\x02" +
		"\x02\u03EB\u03EE\x03\x02\x02\x02\u03EC\u03EA\x03\x02\x02\x02\u03EC\u03ED" +
		"\x03\x02\x02\x02\u03ED\u03F0\x03\x02\x02\x02\u03EE\u03EC\x03\x02\x02\x02" +
		"\u03EF\u03E8\x03\x02\x02\x02\u03F0\u03F1\x03\x02\x02\x02\u03F1\u03EF\x03" +
		"\x02\x02\x02\u03F1\u03F2\x03\x02\x02\x02\u03F29\x03\x02\x02\x02\u03F3" +
		"\u0413\x07\xFF\x02\x02\u03F4\u0413\x05\u0180\xC1\x02\u03F5\u0413\x05<" +
		"\x1F\x02\u03F6\u0413\x05\u015E\xB0\x02\u03F7\u0413\x05\u0162\xB2\x02\u03F8" +
		"\u0413\x05\u0160\xB1\x02\u03F9\u0413\x05\u0174\xBB\x02\u03FA\u0413\x05" +
		"\u0178\xBD\x02\u03FB\u0413\x05J&\x02\u03FC\u0413\x05\u0154\xAB\x02\u03FD" +
		"\u0413\x05\u016A\xB6\x02\u03FE\u0413\x05\u0166\xB4\x02\u03FF\u0413\x05" +
		"\u0168\xB5\x02\u0400\u0413\x05\u017E\xC0\x02\u0401\u0413\x05\u015A\xAE" +
		"\x02\u0402\u0413\x05\u016C\xB7\x02\u0403\u0413\x05\u016E\xB8\x02\u0404" +
		"\u0413\x05\u0170\xB9\x02\u0405\u0413\x05\u0172\xBA\x02\u0406\u0413\x05" +
		"\u013C\x9F\x02\u0407\u0413\x05\u0146\xA4\x02\u0408\u0413\x05\u0138\x9D" +
		"\x02\u0409\u0413\x05\u012C\x97\x02\u040A\u0413\x05\u012E\x98\x02\u040B" +
		"\u0413\x05\u0132\x9A\x02\u040C\u0413\x05\u0130\x99\x02\u040D\u0413\x05" +
		"\u0134\x9B\x02\u040E\u0413\x05\u0158\xAD\x02\u040F\u0413\x05\u017A\xBE" +
		"\x02\u0410\u0413\x05\u015C\xAF\x02\u0411\u0413\x05\u018A\xC6\x02\u0412" +
		"\u03F3\x03\x02\x02\x02\u0412\u03F4\x03\x02\x02\x02\u0412\u03F5\x03\x02" +
		"\x02\x02\u0412\u03F6\x03\x02\x02\x02\u0412\u03F7\x03\x02\x02\x02\u0412" +
		"\u03F8\x03\x02\x02\x02\u0412\u03F9\x03\x02\x02\x02\u0412\u03FA\x03\x02" +
		"\x02\x02\u0412\u03FB\x03\x02\x02\x02\u0412\u03FC\x03\x02\x02\x02\u0412" +
		"\u03FD\x03\x02\x02\x02\u0412\u03FE\x03\x02\x02\x02\u0412\u03FF\x03\x02" +
		"\x02\x02\u0412\u0400\x03\x02\x02\x02\u0412\u0401\x03\x02\x02\x02\u0412" +
		"\u0402\x03\x02\x02\x02\u0412\u0403\x03\x02\x02\x02\u0412\u0404\x03\x02" +
		"\x02\x02\u0412\u0405\x03\x02\x02\x02\u0412\u0406\x03\x02\x02\x02\u0412" +
		"\u0407\x03\x02\x02\x02\u0412\u0408\x03\x02\x02\x02\u0412\u0409\x03\x02" +
		"\x02\x02\u0412\u040A\x03\x02\x02\x02\u0412\u040B\x03\x02\x02\x02\u0412" +
		"\u040C\x03\x02\x02\x02\u0412\u040D\x03\x02\x02\x02\u0412\u040E\x03\x02" +
		"\x02\x02\u0412\u040F\x03\x02\x02\x02\u0412\u0410\x03\x02\x02\x02\u0412" +
		"\u0411\x03\x02\x02\x02\u0413;\x03\x02\x02\x02\u0414\u041C\x05> \x02\u0415" +
		"\u041B\x05> \x02\u0416\u041B\x05\u0166\xB4\x02\u0417\u041B\x05\u0168\xB5" +
		"\x02\u0418\u041B\x05\u0154\xAB\x02\u0419\u041B\x05\u015A\xAE\x02\u041A" +
		"\u0415\x03\x02\x02\x02\u041A\u0416\x03\x02\x02\x02\u041A\u0417\x03\x02" +
		"\x02\x02\u041A\u0418\x03\x02\x02\x02\u041A\u0419\x03\x02\x02\x02\u041B" +
		"\u041E\x03\x02\x02\x02\u041C\u041A\x03\x02\x02\x02\u041C\u041D\x03\x02" +
		"\x02\x02\u041D=\x03\x02\x02\x02\u041E\u041C\x03\x02\x02\x02\u041F\u0423" +
		"\x07\x85\x02\x02\u0420\u0424\x07\xA2\x02\x02\u0421\u0424\x07\xA3\x02\x02" +
		"\u0422\u0424\x03\x02\x02\x02\u0423\u0420\x03\x02\x02\x02\u0423\u0421\x03" +
		"\x02\x02\x02\u0423\u0422\x03\x02\x02\x02\u0424\u0428\x03\x02\x02\x02\u0425" +
		"\u0427\x05\u017E\xC0\x02\u0426\u0425\x03\x02\x02\x02\u0427\u042A\x03\x02" +
		"\x02\x02\u0428\u0426\x03\x02\x02\x02\u0428\u0429\x03\x02\x02\x02\u0429" +
		"\u042B\x03\x02\x02\x02\u042A\u0428\x03\x02\x02\x02\u042B\u042C\x05\u0184" +
		"\xC3\x02\u042C?\x03\x02\x02\x02\u042D\u042F\x05\u0154\xAB\x02\u042E\u042D" +
		"\x03\x02\x02\x02\u042E\u042F\x03\x02\x02\x02\u042F\u0430\x03\x02\x02\x02" +
		"\u0430\u0432\x07\x89\x02\x02\u0431\u0433\x05\u017E\xC0\x02\u0432\u0431" +
		"\x03\x02\x02\x02\u0433\u0434\x03\x02\x02\x02\u0434\u0432\x03\x02\x02\x02" +
		"\u0434\u0435\x03\x02\x02\x02\u0435\u0436\x03\x02\x02\x02\u0436\u0437\x07" +
		"\x8F\x02\x02\u0437A\x03\x02\x02\x02\u0438\u043A\x05\u0154\xAB\x02\u0439" +
		"\u0438\x03\x02\x02\x02\u0439\u043A\x03\x02\x02\x02\u043A\u043B\x03\x02" +
		"\x02\x02\u043B\u043D\x07\x8A\x02\x02\u043C\u043E\x05\u017E\xC0\x02\u043D" +
		"\u043C\x03\x02\x02\x02\u043E\u043F\x03\x02\x02\x02\u043F\u043D\x03\x02" +
		"\x02\x02\u043F\u0440\x03\x02\x02\x02\u0440\u0441\x03\x02\x02\x02\u0441" +
		"\u0442\x07\x8F\x02\x02\u0442C\x03\x02\x02\x02\u0443\u0445\x05\u0154\xAB" +
		"\x02\u0444\u0443\x03\x02\x02\x02\u0444\u0445\x03\x02\x02\x02\u0445\u0446" +
		"\x03\x02\x02\x02\u0446\u0448\x07\x8C\x02\x02\u0447\u0449\x05\u017E\xC0" +
		"\x02\u0448\u0447\x03\x02\x02\x02\u0449\u044A\x03\x02\x02\x02\u044A\u0448" +
		"\x03\x02\x02\x02\u044A\u044B\x03\x02\x02\x02\u044B\u044C\x03\x02\x02\x02" +
		"\u044C\u044D\x07\x8F\x02\x02\u044DE\x03\x02\x02\x02\u044E\u044F\x07\x17" +
		"\x02\x02\u044F\u0450\x05\u010A\x86\x02\u0450\u0451\x07\x8F\x02\x02\u0451" +
		"\u045B\x07\xA4\x02\x02\u0452\u0456\x05:\x1E\x02\u0453\u0455\x07\xA4\x02" +
		"\x02\u0454\u0453\x03\x02\x02\x02\u0455\u0458\x03\x02\x02\x02\u0456\u0454" +
		"\x03\x02\x02\x02\u0456\u0457\x03\x02\x02\x02\u0457\u045A\x03\x02\x02\x02" +
		"\u0458\u0456\x03\x02\x02\x02\u0459\u0452\x03\x02\x02\x02\u045A\u045D\x03" +
		"\x02\x02\x02\u045B\u0459\x03\x02\x02\x02\u045B\u045C\x03\x02\x02\x02\u045C" +
		"\u0467\x03\x02\x02\x02\u045D\u045B\x03\x02\x02\x02\u045E\u0460\x07\xA4" +
		"\x02\x02\u045F\u045E\x03\x02\x02\x02\u0460\u0463\x03\x02\x02\x02\u0461" +
		"\u045F\x03\x02\x02\x02\u0461\u0462\x03\x02\x02\x02\u0462\u0464\x03\x02" +
		"\x02\x02\u0463\u0461\x03\x02\x02\x02\u0464\u0466\x05H%\x02\u0465\u0461" +
		"\x03\x02\x02\x02\u0466\u0469\x03\x02\x02\x02\u0467\u0465\x03\x02\x02\x02" +
		"\u0467\u0468\x03\x02\x02\x02\u0468\u046D\x03\x02\x02\x02\u0469\u0467\x03" +
		"\x02\x02\x02\u046A\u046C\x07\xA4\x02\x02\u046B\u046A\x03\x02\x02\x02\u046C" +
		"\u046F\x03\x02\x02\x02\u046D\u046B\x03\x02\x02\x02\u046D\u046E\x03\x02" +
		"\x02\x02\u046E\u047D\x03\x02\x02\x02\u046F\u046D\x03\x02\x02\x02\u0470" +
		"\u047A\x05L\'\x02\u0471\u0473\x07\xA4\x02\x02\u0472\u0471\x03\x02\x02" +
		"\x02\u0473\u0476\x03\x02\x02\x02\u0474\u0472\x03\x02\x02\x02\u0474\u0475" +
		"\x03\x02\x02\x02\u0475\u0477\x03\x02\x02\x02\u0476\u0474\x03\x02\x02\x02" +
		"\u0477\u0479\x05L\'\x02\u0478\u0474\x03\x02\x02\x02\u0479\u047C\x03\x02" +
		"\x02\x02\u047A\u0478\x03\x02\x02\x02\u047A\u047B\x03\x02\x02\x02\u047B" +
		"\u047E\x03\x02\x02\x02\u047C\u047A\x03\x02\x02\x02\u047D\u0470\x03\x02" +
		"\x02\x02\u047D\u047E\x03\x02\x02\x02\u047EG\x03\x02\x02\x02\u047F\u0487" +
		"\x07\xAF\x02\x02\u0480\u0482\x07\xA4\x02\x02\u0481\u0480\x03\x02\x02\x02" +
		"\u0481\u0482\x03\x02\x02\x02\u0482\u0483\x03\x02\x02\x02\u0483\u0485\x05" +
		"\u017C\xBF\x02\u0484\u0486\x07\xA4\x02\x02\u0485\u0484\x03\x02\x02\x02" +
		"\u0485\u0486\x03\x02\x02\x02\u0486\u0488\x03\x02\x02\x02\u0487\u0481\x03" +
		"\x02\x02\x02\u0487\u0488\x03\x02\x02\x02\u0488\u0489\x03\x02\x02\x02\u0489" +
		"\u048A\x07\x8F\x02\x02\u048AI\x03\x02\x02\x02\u048B\u048C\t\x05\x02\x02" +
		"\u048CK\x03\x02\x02\x02\u048D\u048E\x05:\x1E\x02\u048EM\x03\x02\x02\x02" +
		"\u048F\u0490\x07\x19\x02\x02\u0490\u0491\x05\u010A\x86\x02\u0491\u0492" +
		"\x07\x8F\x02\x02\u0492\u049C\x07\xA4\x02\x02\u0493\u0497\x05:\x1E\x02" +
		"\u0494\u0496\x07\xA4\x02\x02\u0495\u0494\x03\x02\x02\x02\u0496\u0499\x03" +
		"\x02\x02\x02\u0497\u0495\x03\x02\x02\x02\u0497\u0498\x03\x02\x02\x02\u0498" +
		"\u049B\x03\x02\x02\x02\u0499\u0497\x03\x02\x02\x02\u049A\u0493\x03\x02" +
		"\x02\x02\u049B\u049E\x03\x02\x02\x02\u049C\u049A\x03\x02\x02\x02\u049C" +
		"\u049D\x03\x02\x02\x02\u049D\u04A2\x03\x02\x02\x02\u049E\u049C\x03\x02" +
		"\x02\x02\u049F\u04A1\x05P)\x02\u04A0\u049F\x03\x02\x02\x02\u04A1\u04A4" +
		"\x03\x02\x02\x02\u04A2\u04A0\x03\x02\x02\x02\u04A2\u04A3\x03\x02\x02\x02" +
		"\u04A3\u04A8\x03\x02\x02\x02\u04A4\u04A2\x03\x02\x02\x02\u04A5\u04A7\x07" +
		"\xA4\x02\x02\u04A6\u04A5\x03\x02\x02\x02\u04A7\u04AA\x03\x02\x02\x02\u04A8" +
		"\u04A6\x03\x02\x02\x02\u04A8\u04A9\x03\x02\x02\x02\u04A9\u04B8\x03\x02" +
		"\x02\x02\u04AA\u04A8\x03\x02\x02\x02\u04AB\u04B5\x05L\'\x02\u04AC\u04AE" +
		"\x07\xA4\x02\x02\u04AD\u04AC\x03\x02\x02\x02\u04AE\u04B1\x03\x02\x02\x02" +
		"\u04AF\u04AD\x03\x02\x02\x02\u04AF\u04B0\x03\x02\x02\x02\u04B0\u04B2\x03" +
		"\x02\x02\x02\u04B1\u04AF\x03\x02\x02\x02\u04B2\u04B4\x05L\'\x02\u04B3" +
		"\u04AF\x03\x02\x02\x02\u04B4\u04B7\x03\x02\x02\x02\u04B5\u04B3\x03\x02" +
		"\x02\x02\u04B5\u04B6\x03\x02\x02\x02\u04B6\u04B9\x03\x02\x02\x02\u04B7" +
		"\u04B5\x03\x02\x02\x02\u04B8\u04AB\x03\x02\x02\x02\u04B8\u04B9\x03\x02" +
		"\x02\x02\u04B9O\x03\x02\x02\x02\u04BA\u04BE\x07\x8A\x02\x02\u04BB\u04BD" +
		"\v\x02\x02\x02\u04BC\u04BB\x03\x02\x02\x02\u04BD\u04C0\x03\x02\x02\x02" +
		"\u04BE\u04BF\x03\x02\x02\x02\u04BE\u04BC\x03\x02\x02\x02\u04BF\u04C1\x03" +
		"\x02\x02\x02\u04C0\u04BE\x03\x02\x02\x02\u04C1\u04C2\x07\x8F\x02\x02\u04C2" +
		"\u04CD\x07\xA4\x02\x02\u04C3\u04C7\x07\x89\x02\x02\u04C4\u04C6\v\x02\x02" +
		"\x02\u04C5\u04C4\x03\x02\x02\x02\u04C6\u04C9\x03\x02\x02\x02\u04C7\u04C8" +
		"\x03\x02\x02\x02\u04C7\u04C5\x03\x02\x02\x02\u04C8\u04CA\x03\x02\x02\x02" +
		"\u04C9\u04C7\x03\x02\x02\x02\u04CA\u04CB\x07\x8F\x02\x02\u04CB\u04CD\x07" +
		"\xA4\x02\x02\u04CC\u04BA\x03\x02\x02\x02\u04CC\u04C3\x03\x02\x02\x02\u04CD" +
		"Q\x03\x02\x02\x02\u04CE\u04CF\x07\x1A\x02\x02\u04CF\u04D0\x05\u010A\x86" +
		"\x02\u04D0\u04D1\x07\x8F\x02\x02\u04D1\u04DE\x07\xA4\x02\x02\u04D2\u04D5" +
		"\x05:\x1E\x02\u04D3\u04D5\x05T+\x02\u04D4\u04D2\x03\x02\x02\x02\u04D4" +
		"\u04D3\x03\x02\x02\x02\u04D5\u04D9\x03\x02\x02\x02\u04D6\u04D8\x07\xA4" +
		"\x02\x02\u04D7\u04D6\x03\x02\x02\x02\u04D8\u04DB\x03\x02\x02\x02\u04D9" +
		"\u04D7\x03\x02\x02\x02\u04D9\u04DA\x03\x02\x02\x02\u04DA\u04DD\x03\x02" +
		"\x02\x02\u04DB\u04D9\x03\x02\x02\x02\u04DC\u04D4\x03\x02\x02\x02\u04DD" +
		"\u04E0\x03\x02\x02\x02\u04DE\u04DC\x03\x02\x02\x02\u04DE\u04DF\x03\x02" +
		"\x02\x02\u04DF\u04E4\x03\x02\x02\x02\u04E0\u04DE\x03\x02\x02\x02\u04E1" +
		"\u04E3\x07\xA4\x02\x02\u04E2\u04E1\x03\x02\x02\x02\u04E3\u04E6\x03\x02" +
		"\x02\x02\u04E4\u04E2\x03\x02\x02\x02\u04E4\u04E5\x03\x02\x02\x02\u04E5" +
		"\u04F4\x03\x02\x02\x02\u04E6\u04E4\x03\x02\x02\x02\u04E7\u04F1\x05L\'" +
		"\x02\u04E8\u04EA\x07\xA4\x02\x02\u04E9\u04E8\x03\x02\x02\x02\u04EA\u04ED" +
		"\x03\x02\x02\x02\u04EB\u04E9\x03\x02\x02\x02\u04EB\u04EC\x03\x02\x02\x02" +
		"\u04EC\u04EE\x03\x02\x02\x02\u04ED\u04EB\x03\x02\x02\x02\u04EE\u04F0\x05" +
		"L\'\x02\u04EF\u04EB\x03\x02\x02\x02\u04F0\u04F3\x03\x02\x02\x02\u04F1" +
		"\u04EF\x03\x02\x02\x02\u04F1\u04F2\x03\x02\x02\x02\u04F2\u04F5\x03\x02" +
		"\x02\x02\u04F3\u04F1\x03\x02\x02\x02\u04F4\u04E7\x03\x02\x02\x02\u04F4" +
		"\u04F5\x03\x02\x02\x02\u04F5S\x03\x02\x02\x02\u04F6\u04F7\x07\x8B\x02" +
		"\x02\u04F7\u04F8\x05\u017E\xC0\x02\u04F8\u04FA\x07\x8F\x02\x02\u04F9\u04FB" +
		"\x05V,\x02\u04FA\u04F9\x03\x02\x02\x02\u04FA\u04FB\x03\x02\x02\x02\u04FB" +
		"\u0501\x03\x02\x02\x02\u04FC\u0500\x05\u0168\xB5\x02\u04FD\u0500\x05\u0154" +
		"\xAB\x02\u04FE\u0500\x05\u0166\xB4\x02\u04FF\u04FC\x03\x02\x02\x02\u04FF" +
		"\u04FD\x03\x02\x02\x02\u04FF\u04FE\x03\x02\x02\x02\u0500\u0503\x03\x02" +
		"\x02\x02\u0501\u04FF\x03\x02\x02\x02\u0501\u0502\x03\x02\x02\x02\u0502" +
		"U\x03\x02\x02\x02\u0503\u0501\x03\x02\x02\x02\u0504\u0508\x07\xB8\x02" +
		"\x02\u0505\u0507\x07\x04\x02\x02\u0506\u0505\x03\x02\x02\x02\u0507\u050A" +
		"\x03\x02\x02\x02\u0508\u0506\x03\x02\x02\x02\u0508\u0509\x03\x02\x02\x02" +
		"\u0509\u050B\x03\x02\x02\x02\u050A\u0508\x03\x02\x02\x02\u050B\u050F\x07" +
		"\xA3\x02\x02\u050C\u050E\x07\x04\x02\x02\u050D\u050C\x03\x02\x02\x02\u050E" +
		"\u0511\x03\x02\x02\x02\u050F\u050D\x03\x02\x02\x02\u050F\u0510\x03\x02" +
		"\x02\x02\u0510\u0512\x03\x02\x02\x02\u0511\u050F\x03\x02\x02\x02\u0512" +
		"\u0513\x07\x8F\x02\x02\u0513W\x03\x02\x02\x02\u0514\u0516\x07\x1B\x02" +
		"\x02\u0515\u0517\t\x06\x02\x02\u0516\u0515\x03\x02\x02\x02\u0516\u0517" +
		"\x03\x02\x02\x02\u0517\u0518\x03\x02\x02\x02\u0518\u0519\x07\x8F\x02\x02" +
		"\u0519\u0523\x07\xA4\x02\x02\u051A\u051E\x05:\x1E\x02\u051B\u051D\x07" +
		"\xA4\x02\x02\u051C\u051B\x03\x02\x02\x02\u051D\u0520\x03\x02\x02\x02\u051E" +
		"\u051C\x03\x02\x02\x02\u051E\u051F\x03\x02\x02\x02\u051F\u0522\x03\x02" +
		"\x02\x02\u0520\u051E\x03\x02\x02\x02\u0521\u051A\x03\x02\x02\x02\u0522" +
		"\u0525\x03\x02\x02\x02\u0523\u0521\x03\x02\x02\x02\u0523\u0524\x03\x02" +
		"\x02\x02\u0524\u0529\x03\x02\x02\x02\u0525\u0523\x03\x02\x02\x02\u0526" +
		"\u0528\x07\xA4\x02\x02\u0527\u0526\x03\x02\x02\x02\u0528\u052B\x03\x02" +
		"\x02\x02\u0529\u0527\x03\x02\x02\x02\u0529\u052A\x03\x02\x02\x02\u052A" +
		"\u0539\x03\x02\x02\x02\u052B\u0529\x03\x02\x02\x02\u052C\u0536\x05L\'" +
		"\x02\u052D\u052F\x07\xA4\x02\x02\u052E\u052D\x03\x02\x02\x02\u052F\u0532" +
		"\x03\x02\x02\x02\u0530\u052E\x03\x02\x02\x02\u0530\u0531\x03\x02\x02\x02" +
		"\u0531\u0533\x03\x02\x02\x02\u0532\u0530\x03\x02\x02\x02\u0533\u0535\x05" +
		"L\'\x02\u0534\u0530\x03\x02\x02\x02\u0535\u0538\x03\x02\x02\x02\u0536" +
		"\u0534\x03\x02\x02\x02\u0536\u0537\x03\x02\x02\x02\u0537\u053A\x03\x02" +
		"\x02\x02\u0538\u0536\x03\x02\x02\x02\u0539\u052C\x03\x02\x02\x02\u0539" +
		"\u053A\x03\x02\x02\x02\u053AY\x03\x02\x02\x02\u053B\u053C\x07\x12\x02" +
		"\x02\u053C\u053D\x05\u010A\x86\x02\u053D\u053E\x07\x8F\x02\x02\u053E\u0548" +
		"\x07\xA4\x02\x02\u053F\u0543\x05:\x1E\x02\u0540\u0542\x07\xA4\x02\x02" +
		"\u0541\u0540\x03\x02\x02\x02\u0542\u0545\x03\x02\x02\x02\u0543\u0541\x03" +
		"\x02\x02\x02\u0543\u0544\x03\x02\x02\x02\u0544\u0547\x03\x02\x02\x02\u0545" +
		"\u0543\x03\x02\x02\x02\u0546\u053F\x03\x02\x02\x02\u0547\u054A\x03\x02" +
		"\x02\x02\u0548\u0546\x03\x02\x02\x02\u0548\u0549\x03\x02\x02\x02\u0549" +
		"\u054E\x03\x02\x02\x02\u054A\u0548\x03\x02\x02\x02\u054B\u054D\x07\xA4" +
		"\x02\x02\u054C\u054B\x03\x02\x02\x02\u054D\u0550\x03\x02\x02\x02\u054E" +
		"\u054C\x03\x02\x02\x02\u054E\u054F\x03\x02\x02\x02\u054F\u055E\x03\x02" +
		"\x02\x02\u0550\u054E\x03\x02\x02\x02\u0551\u055B\x05L\'\x02\u0552\u0554" +
		"\x07\xA4\x02\x02\u0553\u0552\x03\x02\x02\x02\u0554\u0557\x03\x02\x02\x02" +
		"\u0555\u0553\x03\x02\x02\x02\u0555\u0556\x03\x02\x02\x02\u0556\u0558\x03" +
		"\x02\x02\x02\u0557\u0555\x03\x02\x02\x02\u0558\u055A\x05L\'\x02\u0559" +
		"\u0555\x03\x02\x02\x02\u055A\u055D\x03\x02\x02\x02\u055B\u0559\x03\x02" +
		"\x02\x02\u055B\u055C\x03\x02\x02\x02\u055C\u055F\x03\x02\x02\x02\u055D" +
		"\u055B\x03\x02\x02\x02\u055E\u0551\x03\x02\x02\x02\u055E\u055F\x03\x02" +
		"\x02\x02\u055F[\x03\x02\x02\x02\u0560\u0561\x07\x1C\x02\x02\u0561\u0562" +
		"\x05\u010A\x86\x02\u0562\u0563\x07\x8F\x02\x02\u0563\u056D\x07\xA4\x02" +
		"\x02\u0564\u0568\x05:\x1E\x02\u0565\u0567\x07\xA4\x02\x02\u0566\u0565" +
		"\x03\x02\x02\x02\u0567\u056A\x03\x02\x02\x02\u0568\u0566\x03\x02\x02\x02" +
		"\u0568\u0569\x03\x02\x02\x02\u0569\u056C\x03\x02\x02\x02\u056A\u0568\x03" +
		"\x02\x02\x02\u056B\u0564\x03\x02\x02\x02\u056C\u056F\x03\x02\x02\x02\u056D" +
		"\u056B\x03\x02\x02\x02\u056D\u056E\x03\x02\x02\x02\u056E\u0573\x03\x02" +
		"\x02\x02\u056F\u056D\x03\x02\x02\x02\u0570\u0572\x07\xA4\x02\x02\u0571" +
		"\u0570\x03\x02\x02\x02\u0572\u0575\x03\x02\x02\x02\u0573\u0571\x03\x02" +
		"\x02\x02\u0573\u0574\x03\x02\x02\x02\u0574\u0583\x03\x02\x02\x02\u0575" +
		"\u0573\x03\x02\x02\x02\u0576\u0580\x05L\'\x02\u0577\u0579\x07\xA4\x02" +
		"\x02\u0578\u0577\x03\x02\x02\x02\u0579\u057C\x03\x02\x02\x02\u057A\u0578" +
		"\x03\x02\x02\x02\u057A\u057B\x03\x02\x02\x02\u057B\u057D\x03\x02\x02\x02" +
		"\u057C\u057A\x03\x02\x02\x02\u057D\u057F\x05L\'\x02\u057E\u057A\x03\x02" +
		"\x02\x02\u057F\u0582\x03\x02\x02\x02\u0580\u057E\x03\x02\x02\x02\u0580" +
		"\u0581\x03\x02\x02\x02\u0581\u0584\x03\x02\x02\x02\u0582\u0580\x03\x02" +
		"\x02\x02\u0583\u0576\x03\x02\x02\x02\u0583\u0584\x03\x02\x02\x02\u0584" +
		"]\x03\x02\x02\x02\u0585\u0586\x07\x1D\x02\x02\u0586\u0587\x05\u010A\x86" +
		"\x02\u0587\u0588\x07\x8F\x02\x02\u0588\u0592\x07\xA4\x02\x02\u0589\u058D" +
		"\x05:\x1E\x02\u058A\u058C\x07\xA4\x02\x02\u058B\u058A\x03\x02\x02\x02" +
		"\u058C\u058F\x03\x02\x02\x02\u058D\u058B\x03\x02\x02\x02\u058D\u058E\x03" +
		"\x02\x02\x02\u058E\u0591\x03\x02\x02\x02\u058F\u058D\x03\x02\x02\x02\u0590" +
		"\u0589\x03\x02\x02\x02\u0591\u0594\x03\x02\x02\x02\u0592\u0590\x03\x02" +
		"\x02\x02\u0592\u0593\x03\x02\x02\x02\u0593\u0598\x03\x02\x02\x02\u0594" +
		"\u0592\x03\x02\x02\x02\u0595\u0597\x07\xA4\x02\x02\u0596\u0595\x03\x02" +
		"\x02\x02\u0597\u059A\x03\x02\x02\x02\u0598\u0596\x03\x02\x02\x02\u0598" +
		"\u0599\x03\x02\x02\x02\u0599\u05A8\x03\x02\x02\x02\u059A\u0598\x03\x02" +
		"\x02\x02\u059B\u05A5\x05L\'\x02\u059C\u059E\x07\xA4\x02\x02\u059D\u059C" +
		"\x03\x02\x02\x02\u059E\u05A1\x03\x02\x02\x02\u059F\u059D\x03\x02\x02\x02" +
		"\u059F\u05A0\x03\x02\x02\x02\u05A0\u05A2\x03\x02\x02\x02\u05A1\u059F\x03" +
		"\x02\x02\x02\u05A2\u05A4\x05L\'\x02\u05A3\u059F\x03\x02\x02\x02\u05A4" +
		"\u05A7\x03\x02\x02\x02\u05A5\u05A3\x03\x02\x02\x02\u05A5\u05A6\x03\x02" +
		"\x02\x02\u05A6\u05A9\x03\x02\x02\x02\u05A7\u05A5\x03\x02\x02\x02\u05A8" +
		"\u059B\x03\x02\x02\x02\u05A8\u05A9\x03\x02\x02\x02\u05A9_\x03\x02\x02" +
		"\x02\u05AA\u05AB\x07\x1E\x02\x02\u05AB\u05AC\x05\u010A\x86\x02\u05AC\u05B0" +
		"\x07\x8F\x02\x02\u05AD\u05AF\x07\xA4\x02\x02\u05AE\u05AD\x03\x02\x02\x02" +
		"\u05AF\u05B2\x03\x02\x02\x02\u05B0\u05AE\x03\x02\x02\x02\u05B0\u05B1\x03" +
		"\x02\x02\x02\u05B1\u05BC\x03\x02\x02\x02\u05B2\u05B0\x03\x02\x02\x02\u05B3" +
		"\u05B7\x05:\x1E\x02\u05B4\u05B6\x07\xA4\x02\x02\u05B5\u05B4\x03\x02\x02" +
		"\x02\u05B6\u05B9\x03\x02\x02\x02\u05B7\u05B5\x03\x02\x02\x02\u05B7\u05B8" +
		"\x03\x02\x02\x02\u05B8\u05BB\x03\x02\x02\x02\u05B9\u05B7\x03\x02\x02\x02" +
		"\u05BA\u05B3\x03\x02\x02\x02\u05BB\u05BE\x03\x02\x02\x02\u05BC\u05BA\x03" +
		"\x02\x02\x02\u05BC\u05BD\x03\x02\x02\x02\u05BD\u05C0\x03\x02\x02\x02\u05BE" +
		"\u05BC\x03\x02\x02\x02\u05BF\u05C1\x05\u017C\xBF\x02\u05C0\u05BF\x03\x02" +
		"\x02\x02\u05C0\u05C1\x03\x02\x02\x02\u05C1\u05C5\x03\x02\x02\x02\u05C2" +
		"\u05C4\x07\xA4\x02\x02\u05C3\u05C2\x03\x02\x02\x02\u05C4\u05C7\x03\x02" +
		"\x02\x02\u05C5\u05C3\x03\x02\x02\x02\u05C5\u05C6\x03\x02\x02\x02\u05C6" +
		"\u05D5\x03\x02\x02\x02\u05C7\u05C5\x03\x02\x02\x02\u05C8\u05D2\x05L\'" +
		"\x02\u05C9\u05CB\x07\xA4\x02\x02\u05CA\u05C9\x03\x02\x02\x02\u05CB\u05CE" +
		"\x03\x02\x02\x02\u05CC\u05CA\x03\x02\x02\x02\u05CC\u05CD\x03\x02\x02\x02" +
		"\u05CD\u05CF\x03\x02\x02\x02\u05CE\u05CC\x03\x02\x02\x02\u05CF\u05D1\x05" +
		"L\'\x02\u05D0\u05CC\x03\x02\x02\x02\u05D1\u05D4\x03\x02\x02\x02\u05D2" +
		"\u05D0\x03\x02\x02\x02\u05D2\u05D3\x03\x02\x02\x02\u05D3\u05D6\x03\x02" +
		"\x02\x02\u05D4\u05D2\x03\x02\x02\x02\u05D5\u05C8\x03\x02\x02\x02\u05D5" +
		"\u05D6\x03\x02\x02\x02\u05D6a\x03\x02\x02\x02\u05D7\u05D8\x07\x1F\x02" +
		"\x02\u05D8\u05D9\x05\u010A\x86\x02\u05D9\u05DB\x07\x8F\x02\x02\u05DA\u05DC" +
		"\x07\xA4\x02\x02\u05DB\u05DA\x03\x02\x02\x02\u05DC\u05DD\x03\x02\x02\x02" +
		"\u05DD\u05DB\x03\x02\x02\x02\u05DD\u05DE\x03\x02\x02\x02\u05DE\u05E8\x03" +
		"\x02\x02\x02\u05DF\u05E3\x05:\x1E\x02\u05E0\u05E2\x07\xA4\x02\x02\u05E1" +
		"\u05E0\x03\x02\x02\x02\u05E2\u05E5\x03\x02\x02\x02\u05E3\u05E1\x03\x02" +
		"\x02\x02\u05E3\u05E4\x03\x02\x02\x02\u05E4\u05E7\x03\x02\x02\x02\u05E5" +
		"\u05E3\x03\x02\x02\x02\u05E6\u05DF\x03\x02\x02\x02\u05E7\u05EA\x03\x02" +
		"\x02\x02\u05E8\u05E6\x03\x02\x02\x02\u05E8\u05E9\x03\x02\x02\x02\u05E9" +
		"\u05EC\x03\x02\x02\x02\u05EA\u05E8\x03\x02\x02\x02\u05EB\u05ED\x05\u017C" +
		"\xBF\x02\u05EC\u05EB\x03\x02\x02\x02\u05EC\u05ED\x03\x02\x02\x02\u05ED" +
		"\u05F1\x03\x02\x02\x02\u05EE\u05F0\x07\xA4\x02\x02\u05EF\u05EE\x03\x02" +
		"\x02\x02\u05F0\u05F3\x03\x02\x02\x02\u05F1\u05EF\x03\x02\x02\x02\u05F1" +
		"\u05F2\x03\x02\x02\x02\u05F2\u0601\x03\x02\x02\x02\u05F3\u05F1\x03\x02" +
		"\x02\x02\u05F4\u05FE\x05L\'\x02\u05F5\u05F7\x07\xA4\x02\x02\u05F6\u05F5" +
		"\x03\x02\x02\x02\u05F7\u05FA\x03\x02\x02\x02\u05F8\u05F6\x03\x02\x02\x02" +
		"\u05F8\u05F9\x03\x02\x02\x02\u05F9\u05FB\x03\x02\x02\x02\u05FA\u05F8\x03" +
		"\x02\x02\x02\u05FB\u05FD\x05L\'\x02\u05FC\u05F8\x03\x02\x02\x02\u05FD" +
		"\u0600\x03\x02\x02\x02\u05FE\u05FC\x03\x02\x02\x02\u05FE\u05FF\x03\x02" +
		"\x02\x02\u05FF\u0602\x03\x02\x02\x02\u0600\u05FE\x03\x02\x02\x02\u0601" +
		"\u05F4\x03\x02\x02\x02\u0601\u0602\x03\x02\x02\x02\u0602c\x03\x02\x02" +
		"\x02\u0603\u0604\x07\x15\x02\x02\u0604\u0605\x05\u010A\x86\x02\u0605\u0609" +
		"\x07\x8F\x02\x02\u0606\u0608\x07\xA4\x02\x02\u0607\u0606\x03\x02\x02\x02" +
		"\u0608\u060B\x03\x02\x02\x02\u0609\u0607\x03\x02\x02\x02\u0609\u060A\x03" +
		"\x02\x02\x02\u060A\u0613\x03\x02\x02\x02\u060B\u0609\x03\x02\x02\x02\u060C" +
		"\u0610\x05:\x1E\x02\u060D\u060F\x07\xA4\x02\x02\u060E\u060D\x03\x02\x02" +
		"\x02\u060F\u0612\x03\x02\x02\x02\u0610\u060E\x03\x02\x02\x02\u0610\u0611" +
		"\x03\x02\x02\x02\u0611\u0614\x03\x02\x02\x02\u0612\u0610\x03\x02\x02\x02" +
		"\u0613\u060C\x03\x02\x02\x02\u0614\u0615\x03\x02\x02\x02\u0615\u0613\x03" +
		"\x02\x02\x02\u0615\u0616\x03\x02\x02\x02\u0616e\x03\x02\x02\x02\u0617" +
		"\u0618\x07\x0F\x02\x02\u0618\u0619\x05\u010A\x86\x02\u0619\u061D\x07\x8F" +
		"\x02\x02\u061A\u061C\x07\xA4\x02\x02\u061B\u061A\x03\x02\x02\x02\u061C" +
		"\u061F\x03\x02\x02\x02\u061D\u061B\x03\x02\x02\x02\u061D\u061E\x03\x02" +
		"\x02\x02\u061E\u0627\x03\x02\x02\x02\u061F\u061D\x03\x02\x02\x02\u0620" +
		"\u0624\x05:\x1E\x02\u0621\u0623\x07\xA4\x02\x02\u0622\u0621\x03\x02\x02" +
		"\x02\u0623\u0626\x03\x02\x02\x02\u0624\u0622\x03\x02\x02\x02\u0624\u0625" +
		"\x03\x02\x02\x02\u0625\u0628\x03\x02\x02\x02\u0626\u0624\x03\x02\x02\x02" +
		"\u0627\u0620\x03\x02\x02\x02\u0628\u0629\x03\x02\x02\x02\u0629\u0627\x03" +
		"\x02\x02\x02\u0629\u062A\x03\x02\x02\x02\u062Ag\x03\x02\x02\x02\u062B" +
		"\u062C\x07\x10\x02\x02\u062C\u062D\x05\u010A\x86\x02\u062D\u0631\x07\x8F" +
		"\x02\x02\u062E\u0630\x07\xA4\x02\x02\u062F\u062E\x03\x02\x02\x02\u0630" +
		"\u0633\x03\x02\x02\x02\u0631\u062F\x03\x02\x02\x02\u0631\u0632\x03\x02" +
		"\x02\x02\u0632\u063B\x03\x02\x02\x02\u0633\u0631\x03\x02\x02\x02\u0634" +
		"\u0638\x05:\x1E\x02\u0635\u0637\x07\xA4\x02\x02\u0636\u0635\x03\x02\x02" +
		"\x02\u0637\u063A\x03\x02\x02\x02\u0638\u0636\x03\x02\x02\x02\u0638\u0639" +
		"\x03\x02\x02\x02\u0639\u063C\x03\x02\x02\x02\u063A\u0638\x03\x02\x02\x02" +
		"\u063B\u0634\x03\x02\x02\x02\u063C\u063D\x03\x02\x02\x02\u063D\u063B\x03" +
		"\x02\x02\x02\u063D\u063E\x03\x02\x02\x02\u063Ei\x03\x02\x02\x02\u063F" +
		"\u0640\x07\x11\x02\x02\u0640\u0641\x05\u010A\x86\x02\u0641\u0645\x07\x8F" +
		"\x02\x02\u0642\u0644\x07\xA4\x02\x02\u0643\u0642\x03\x02\x02\x02\u0644" +
		"\u0647\x03\x02\x02\x02\u0645\u0643\x03\x02\x02\x02\u0645\u0646\x03\x02" +
		"\x02\x02\u0646\u064F\x03\x02\x02\x02\u0647\u0645\x03\x02\x02\x02\u0648" +
		"\u064C\x05:\x1E\x02\u0649\u064B\x07\xA4";
	private static readonly _serializedATNSegment4: string =
		"\x02\x02\u064A\u0649\x03\x02\x02\x02\u064B\u064E\x03\x02\x02\x02\u064C" +
		"\u064A\x03\x02\x02\x02\u064C\u064D\x03\x02\x02\x02\u064D\u0650\x03\x02" +
		"\x02\x02\u064E\u064C\x03\x02\x02\x02\u064F\u0648\x03\x02\x02\x02\u0650" +
		"\u0651\x03\x02\x02\x02\u0651\u064F\x03\x02\x02\x02\u0651\u0652\x03\x02" +
		"\x02\x02\u0652k\x03\x02\x02\x02\u0653\u0654\x076\x02\x02\u0654\u0655\x05" +
		"\u010A\x86\x02\u0655\u0659\x07\x8F\x02\x02\u0656\u0658\x07\xA4\x02\x02" +
		"\u0657\u0656\x03\x02\x02\x02\u0658\u065B\x03\x02\x02\x02\u0659\u0657\x03" +
		"\x02\x02\x02\u0659\u065A\x03\x02\x02\x02\u065A\u0663\x03\x02\x02\x02\u065B" +
		"\u0659\x03\x02\x02\x02\u065C\u0660\x05:\x1E\x02\u065D\u065F\x07\xA4\x02" +
		"\x02\u065E\u065D\x03\x02\x02\x02\u065F\u0662\x03\x02\x02\x02\u0660\u065E" +
		"\x03\x02\x02\x02\u0660\u0661\x03\x02\x02\x02\u0661\u0664\x03\x02\x02\x02" +
		"\u0662\u0660\x03\x02\x02\x02\u0663\u065C\x03\x02\x02\x02\u0664\u0665\x03" +
		"\x02\x02\x02\u0665\u0663\x03\x02\x02\x02\u0665\u0666\x03\x02\x02\x02\u0666" +
		"m\x03\x02\x02\x02\u0667\u0668\x077\x02\x02\u0668\u0669\x05\u010A\x86\x02" +
		"\u0669\u066D\x07\x8F\x02\x02\u066A\u066C\x07\xA4\x02\x02\u066B\u066A\x03" +
		"\x02\x02\x02\u066C\u066F\x03\x02\x02\x02\u066D\u066B\x03\x02\x02\x02\u066D" +
		"\u066E\x03\x02\x02\x02\u066E\u0677\x03\x02\x02\x02\u066F\u066D\x03\x02" +
		"\x02\x02\u0670\u0674\x05:\x1E\x02\u0671\u0673\x07\xA4\x02\x02\u0672\u0671" +
		"\x03\x02\x02\x02\u0673\u0676\x03\x02\x02\x02\u0674\u0672\x03\x02\x02\x02" +
		"\u0674\u0675\x03\x02\x02\x02\u0675\u0678\x03\x02\x02\x02\u0676\u0674\x03" +
		"\x02\x02\x02\u0677\u0670\x03\x02\x02\x02\u0678\u0679\x03\x02\x02\x02\u0679" +
		"\u0677\x03\x02\x02\x02\u0679\u067A\x03\x02\x02\x02\u067Ao\x03\x02\x02" +
		"\x02\u067B\u067C\x078\x02\x02\u067C\u067D\x05\u010A\x86\x02\u067D\u0681" +
		"\x07\x8F\x02\x02\u067E\u0680\x07\xA4\x02\x02\u067F\u067E\x03\x02\x02\x02" +
		"\u0680\u0683\x03\x02\x02\x02\u0681\u067F\x03\x02\x02\x02\u0681\u0682\x03" +
		"\x02\x02\x02\u0682\u068B\x03\x02\x02\x02\u0683\u0681\x03\x02\x02\x02\u0684" +
		"\u0688\x05:\x1E\x02\u0685\u0687\x07\xA4\x02\x02\u0686\u0685\x03\x02\x02" +
		"\x02\u0687\u068A\x03\x02\x02\x02\u0688\u0686\x03\x02\x02\x02\u0688\u0689" +
		"\x03\x02\x02\x02\u0689\u068C\x03\x02\x02\x02\u068A\u0688\x03\x02\x02\x02" +
		"\u068B\u0684\x03\x02\x02\x02\u068C\u068D\x03\x02\x02\x02\u068D\u068B\x03" +
		"\x02\x02\x02\u068D\u068E\x03\x02\x02\x02\u068Eq\x03\x02\x02\x02\u068F" +
		"\u0690\x07\x16\x02\x02\u0690\u0691\x05\u010A\x86\x02\u0691\u0695\x07\x8F" +
		"\x02\x02\u0692\u0694\x07\xA4\x02\x02\u0693\u0692\x03\x02\x02\x02\u0694" +
		"\u0697\x03\x02\x02\x02\u0695\u0693\x03\x02\x02\x02\u0695\u0696\x03\x02" +
		"\x02\x02\u0696\u069F\x03\x02\x02\x02\u0697\u0695\x03\x02\x02\x02\u0698" +
		"\u069C\x05:\x1E\x02\u0699\u069B\x07\xA4\x02\x02\u069A\u0699\x03\x02\x02" +
		"\x02\u069B\u069E\x03\x02\x02\x02\u069C\u069A\x03\x02\x02\x02\u069C\u069D" +
		"\x03\x02\x02\x02\u069D\u06A0\x03\x02\x02\x02\u069E\u069C\x03\x02\x02\x02" +
		"\u069F\u0698\x03\x02\x02\x02\u06A0\u06A1\x03\x02\x02\x02\u06A1\u069F\x03" +
		"\x02\x02\x02\u06A1\u06A2\x03\x02\x02\x02\u06A2s\x03\x02\x02\x02\u06A3" +
		"\u06A4\x07)\x02\x02\u06A4\u06A5\x05\u010A\x86\x02\u06A5\u06A9\x07\x8F" +
		"\x02\x02\u06A6\u06A8\x07\xA4\x02\x02\u06A7\u06A6\x03\x02\x02\x02\u06A8" +
		"\u06AB\x03\x02\x02\x02\u06A9\u06A7\x03\x02\x02\x02\u06A9\u06AA\x03\x02" +
		"\x02\x02\u06AA\u06B3\x03\x02\x02\x02\u06AB\u06A9\x03\x02\x02\x02\u06AC" +
		"\u06B0\x05:\x1E\x02\u06AD\u06AF\x07\xA4\x02\x02\u06AE\u06AD\x03\x02\x02" +
		"\x02\u06AF\u06B2\x03\x02\x02\x02\u06B0\u06AE\x03\x02\x02\x02\u06B0\u06B1" +
		"\x03\x02\x02\x02\u06B1\u06B4\x03\x02\x02\x02\u06B2\u06B0\x03\x02\x02\x02" +
		"\u06B3\u06AC\x03\x02\x02\x02\u06B4\u06B5\x03\x02\x02\x02\u06B5\u06B3\x03" +
		"\x02\x02\x02\u06B5\u06B6\x03\x02\x02\x02\u06B6u\x03\x02\x02\x02\u06B7" +
		"\u06B8\x07*\x02\x02\u06B8\u06B9\x05\u010A\x86\x02\u06B9\u06BD\x07\x8F" +
		"\x02\x02\u06BA\u06BC\x07\xA4\x02\x02\u06BB\u06BA\x03\x02\x02\x02\u06BC" +
		"\u06BF\x03\x02\x02\x02\u06BD\u06BB\x03\x02\x02\x02\u06BD\u06BE\x03\x02" +
		"\x02\x02\u06BE\u06C7\x03\x02\x02\x02\u06BF\u06BD\x03\x02\x02\x02\u06C0" +
		"\u06C4\x05:\x1E\x02\u06C1\u06C3\x07\xA4\x02\x02\u06C2\u06C1\x03\x02\x02" +
		"\x02\u06C3\u06C6\x03\x02\x02\x02\u06C4\u06C2\x03\x02\x02\x02\u06C4\u06C5" +
		"\x03\x02\x02\x02\u06C5\u06C8\x03\x02\x02\x02\u06C6\u06C4\x03\x02\x02\x02" +
		"\u06C7\u06C0\x03\x02\x02\x02\u06C8\u06C9\x03\x02\x02\x02\u06C9\u06C7\x03" +
		"\x02\x02\x02\u06C9\u06CA\x03\x02\x02\x02\u06CAw\x03\x02\x02\x02\u06CB" +
		"\u06CC\x07+\x02\x02\u06CC\u06CD\x05\u010A\x86\x02\u06CD\u06D1\x07\x8F" +
		"\x02\x02\u06CE\u06D0\x07\xA4\x02\x02\u06CF\u06CE\x03\x02\x02\x02\u06D0" +
		"\u06D3\x03\x02\x02\x02\u06D1\u06CF\x03\x02\x02\x02\u06D1\u06D2\x03\x02" +
		"\x02\x02\u06D2\u06DB\x03\x02\x02\x02\u06D3\u06D1\x03\x02\x02\x02\u06D4" +
		"\u06D8\x05:\x1E\x02\u06D5\u06D7\x07\xA4\x02\x02\u06D6\u06D5\x03\x02\x02" +
		"\x02\u06D7\u06DA\x03\x02\x02\x02\u06D8\u06D6\x03\x02\x02\x02\u06D8\u06D9" +
		"\x03\x02\x02\x02\u06D9\u06DC\x03\x02\x02\x02\u06DA\u06D8\x03\x02\x02\x02" +
		"\u06DB\u06D4\x03\x02\x02\x02\u06DC\u06DD\x03\x02\x02\x02\u06DD\u06DB\x03" +
		"\x02\x02\x02\u06DD\u06DE\x03\x02\x02\x02\u06DEy\x03\x02\x02\x02\u06DF" +
		"\u06E0\x07,\x02\x02\u06E0\u06E1\x05\u010A\x86\x02\u06E1\u06E5\x07\x8F" +
		"\x02\x02\u06E2\u06E4\x07\xA4\x02\x02\u06E3\u06E2\x03\x02\x02\x02\u06E4" +
		"\u06E7\x03\x02\x02\x02\u06E5\u06E3\x03\x02\x02\x02\u06E5\u06E6\x03\x02" +
		"\x02\x02\u06E6\u06EF\x03\x02\x02\x02\u06E7\u06E5\x03\x02\x02\x02\u06E8" +
		"\u06EC\x05:\x1E\x02\u06E9\u06EB\x07\xA4\x02\x02\u06EA\u06E9\x03\x02\x02" +
		"\x02\u06EB\u06EE\x03\x02\x02\x02\u06EC\u06EA\x03\x02\x02\x02\u06EC\u06ED" +
		"\x03\x02\x02\x02\u06ED\u06F0\x03\x02\x02\x02\u06EE\u06EC\x03\x02\x02\x02" +
		"\u06EF\u06E8\x03\x02\x02\x02\u06F0\u06F1\x03\x02\x02\x02\u06F1\u06EF\x03" +
		"\x02\x02\x02\u06F1\u06F2\x03\x02\x02\x02\u06F2{\x03\x02\x02\x02\u06F3" +
		"\u06F4\x07.\x02\x02\u06F4\u06F5\x05\u010A\x86\x02\u06F5\u06F9\x07\x8F" +
		"\x02\x02\u06F6\u06F8\x07\xA4\x02\x02\u06F7\u06F6\x03\x02\x02\x02\u06F8" +
		"\u06FB\x03\x02\x02\x02\u06F9\u06F7\x03\x02\x02\x02\u06F9\u06FA\x03\x02" +
		"\x02\x02\u06FA\u0703\x03\x02\x02\x02\u06FB\u06F9\x03\x02\x02\x02\u06FC" +
		"\u0700\x05:\x1E\x02\u06FD\u06FF\x07\xA4\x02\x02\u06FE\u06FD\x03\x02\x02" +
		"\x02\u06FF\u0702\x03\x02\x02\x02\u0700\u06FE\x03\x02\x02\x02\u0700\u0701" +
		"\x03\x02\x02\x02\u0701\u0704\x03\x02\x02\x02\u0702\u0700\x03\x02\x02\x02" +
		"\u0703\u06FC\x03\x02\x02\x02\u0704\u0705\x03\x02\x02\x02\u0705\u0703\x03" +
		"\x02\x02\x02\u0705\u0706\x03\x02\x02\x02\u0706}\x03\x02\x02\x02\u0707" +
		"\u0708\x07/\x02\x02\u0708\u0709\x05\u010A\x86\x02\u0709\u070D\x07\x8F" +
		"\x02\x02\u070A\u070C\x07\xA4\x02\x02\u070B\u070A\x03\x02\x02\x02\u070C" +
		"\u070F\x03\x02\x02\x02\u070D\u070B\x03\x02\x02\x02\u070D\u070E\x03\x02" +
		"\x02\x02\u070E\u0717\x03\x02\x02\x02\u070F\u070D\x03\x02\x02\x02\u0710" +
		"\u0714\x05:\x1E\x02\u0711\u0713\x07\xA4\x02\x02\u0712\u0711\x03\x02\x02" +
		"\x02\u0713\u0716\x03\x02\x02\x02\u0714\u0712\x03\x02\x02\x02\u0714\u0715" +
		"\x03\x02\x02\x02\u0715\u0718\x03\x02\x02\x02\u0716\u0714\x03\x02\x02\x02" +
		"\u0717\u0710\x03\x02\x02\x02\u0718\u0719\x03\x02\x02\x02\u0719\u0717\x03" +
		"\x02\x02\x02\u0719\u071A\x03\x02\x02\x02\u071A\x7F\x03\x02\x02\x02\u071B" +
		"\u071C\x070\x02\x02\u071C\u071D\x05\u010A\x86\x02\u071D\u0721\x07\x8F" +
		"\x02\x02\u071E\u0720\x07\xA4\x02\x02\u071F\u071E\x03\x02\x02\x02\u0720" +
		"\u0723\x03\x02\x02\x02\u0721\u071F\x03\x02\x02\x02\u0721\u0722\x03\x02" +
		"\x02\x02\u0722\u072B\x03\x02\x02\x02\u0723\u0721\x03\x02\x02\x02\u0724" +
		"\u0728\x05:\x1E\x02\u0725\u0727\x07\xA4\x02\x02\u0726\u0725\x03\x02\x02" +
		"\x02\u0727\u072A\x03\x02\x02\x02\u0728\u0726\x03\x02\x02\x02\u0728\u0729" +
		"\x03\x02\x02\x02\u0729\u072C\x03\x02\x02\x02\u072A\u0728\x03\x02\x02\x02" +
		"\u072B\u0724\x03\x02\x02\x02\u072C\u072D\x03\x02\x02\x02\u072D\u072B\x03" +
		"\x02\x02\x02\u072D\u072E\x03\x02\x02\x02\u072E\x81\x03\x02\x02\x02\u072F" +
		"\u0730\x071\x02\x02\u0730\u0731\x05\u010A\x86\x02\u0731\u0735\x07\x8F" +
		"\x02\x02\u0732\u0734\x07\xA4\x02\x02\u0733\u0732\x03\x02\x02\x02\u0734" +
		"\u0737\x03\x02\x02\x02\u0735\u0733\x03\x02\x02\x02\u0735\u0736\x03\x02" +
		"\x02\x02\u0736\u073F\x03\x02\x02\x02\u0737\u0735\x03\x02\x02\x02\u0738" +
		"\u073C\x05:\x1E\x02\u0739\u073B\x07\xA4\x02\x02\u073A\u0739\x03\x02\x02" +
		"\x02\u073B\u073E\x03\x02\x02\x02\u073C\u073A\x03\x02\x02\x02\u073C\u073D" +
		"\x03\x02\x02\x02\u073D\u0740\x03\x02\x02\x02\u073E\u073C\x03\x02\x02\x02" +
		"\u073F\u0738\x03\x02\x02\x02\u0740\u0741\x03\x02\x02\x02\u0741\u073F\x03" +
		"\x02\x02\x02\u0741\u0742\x03\x02\x02\x02\u0742\x83\x03\x02\x02\x02\u0743" +
		"\u0744\x072\x02\x02\u0744\u0745\x05\u010A\x86\x02\u0745\u0749\x07\x8F" +
		"\x02\x02\u0746\u0748\x07\xA4\x02\x02\u0747\u0746\x03\x02\x02\x02\u0748" +
		"\u074B\x03\x02\x02\x02\u0749\u0747\x03\x02\x02\x02\u0749\u074A\x03\x02" +
		"\x02\x02\u074A\u0753\x03\x02\x02\x02\u074B\u0749\x03\x02\x02\x02\u074C" +
		"\u0750\x05:\x1E\x02\u074D\u074F\x07\xA4\x02\x02\u074E\u074D\x03\x02\x02" +
		"\x02\u074F\u0752\x03\x02\x02\x02\u0750\u074E\x03\x02\x02\x02\u0750\u0751" +
		"\x03\x02\x02\x02\u0751\u0754\x03\x02\x02\x02\u0752\u0750\x03\x02\x02\x02" +
		"\u0753\u074C\x03\x02\x02\x02\u0754\u0755\x03\x02\x02\x02\u0755\u0753\x03" +
		"\x02\x02\x02\u0755\u0756\x03\x02\x02\x02\u0756\x85\x03\x02\x02\x02\u0757" +
		"\u0758\x073\x02\x02\u0758\u0759\x05\u010A\x86\x02\u0759\u075D\x07\x8F" +
		"\x02\x02\u075A\u075C\x07\xA4\x02\x02\u075B\u075A\x03\x02\x02\x02\u075C" +
		"\u075F\x03\x02\x02\x02\u075D\u075B\x03\x02\x02\x02\u075D\u075E\x03\x02" +
		"\x02\x02\u075E\u0767\x03\x02\x02\x02\u075F\u075D\x03\x02\x02\x02\u0760" +
		"\u0764\x05:\x1E\x02\u0761\u0763\x07\xA4\x02\x02\u0762\u0761\x03\x02\x02" +
		"\x02\u0763\u0766\x03\x02\x02\x02\u0764\u0762\x03\x02\x02\x02\u0764\u0765" +
		"\x03\x02\x02\x02\u0765\u0768\x03\x02\x02\x02\u0766\u0764\x03\x02\x02\x02" +
		"\u0767\u0760\x03\x02\x02\x02\u0768\u0769\x03\x02\x02\x02\u0769\u0767\x03" +
		"\x02\x02\x02\u0769\u076A\x03\x02\x02\x02\u076A\x87\x03\x02\x02\x02\u076B" +
		"\u076C\x074\x02\x02\u076C\u076D\x05\u010A\x86\x02\u076D\u0771\x07\x8F" +
		"\x02\x02\u076E\u0770\x07\xA4\x02\x02\u076F\u076E\x03\x02\x02\x02\u0770" +
		"\u0773\x03\x02\x02\x02\u0771\u076F\x03\x02\x02\x02\u0771\u0772\x03\x02" +
		"\x02\x02\u0772\u077B\x03\x02\x02\x02\u0773\u0771\x03\x02\x02\x02\u0774" +
		"\u0778\x05:\x1E\x02\u0775\u0777\x07\xA4\x02\x02\u0776\u0775\x03\x02\x02" +
		"\x02\u0777\u077A\x03\x02\x02\x02\u0778\u0776\x03\x02\x02\x02\u0778\u0779" +
		"\x03\x02\x02\x02\u0779\u077C\x03\x02\x02\x02\u077A\u0778\x03\x02\x02\x02" +
		"\u077B\u0774\x03\x02\x02\x02\u077C\u077D\x03\x02\x02\x02\u077D\u077B\x03" +
		"\x02\x02\x02\u077D\u077E\x03\x02\x02\x02\u077E\x89\x03\x02\x02\x02\u077F" +
		"\u0780\x07-\x02\x02\u0780\u0781\x05\u010A\x86\x02\u0781\u0785\x07\x8F" +
		"\x02\x02\u0782\u0784\x07\xA4\x02\x02\u0783\u0782\x03\x02\x02\x02\u0784" +
		"\u0787\x03\x02\x02\x02\u0785\u0783\x03\x02\x02\x02\u0785\u0786\x03\x02" +
		"\x02\x02\u0786\u078F\x03\x02\x02\x02\u0787\u0785\x03\x02\x02\x02\u0788" +
		"\u078C\x05:\x1E\x02\u0789\u078B\x07\xA4\x02\x02\u078A\u0789\x03\x02\x02" +
		"\x02\u078B\u078E\x03\x02\x02\x02\u078C\u078A\x03\x02\x02\x02\u078C\u078D" +
		"\x03\x02\x02\x02\u078D\u0790\x03\x02\x02\x02\u078E\u078C\x03\x02\x02\x02" +
		"\u078F\u0788\x03\x02\x02\x02\u0790\u0791\x03\x02\x02\x02\u0791\u078F\x03" +
		"\x02\x02\x02\u0791\u0792\x03\x02\x02\x02\u0792\x8B\x03\x02\x02\x02\u0793" +
		"\u0794\x075\x02\x02\u0794\u0795\x05\u010A\x86\x02\u0795\u0799\x07\x8F" +
		"\x02\x02\u0796\u0798\x07\xA4\x02\x02\u0797\u0796\x03\x02\x02\x02\u0798" +
		"\u079B\x03\x02\x02\x02\u0799\u0797\x03\x02\x02\x02\u0799\u079A\x03\x02" +
		"\x02\x02\u079A\u07A3\x03\x02\x02\x02\u079B\u0799\x03\x02\x02\x02\u079C" +
		"\u07A0\x05:\x1E\x02\u079D\u079F\x07\xA4\x02\x02\u079E\u079D\x03\x02\x02" +
		"\x02\u079F\u07A2\x03\x02\x02\x02\u07A0\u079E\x03\x02\x02\x02\u07A0\u07A1" +
		"\x03\x02\x02\x02\u07A1\u07A4\x03\x02\x02\x02\u07A2\u07A0\x03\x02\x02\x02" +
		"\u07A3\u079C\x03\x02\x02\x02\u07A4\u07A5\x03\x02\x02\x02\u07A5\u07A3\x03" +
		"\x02\x02\x02\u07A5\u07A6\x03\x02\x02\x02\u07A6\x8D\x03\x02\x02\x02\u07A7" +
		"\u07A8\x07I\x02\x02\u07A8\u07A9\x05\u010A\x86\x02\u07A9\u07AD\x07\x8F" +
		"\x02\x02\u07AA\u07AC\x07\xA4\x02\x02\u07AB\u07AA\x03\x02\x02\x02\u07AC" +
		"\u07AF\x03\x02\x02\x02\u07AD\u07AB\x03\x02\x02\x02\u07AD\u07AE\x03\x02" +
		"\x02\x02\u07AE\u07B7\x03\x02\x02\x02\u07AF\u07AD\x03\x02\x02\x02\u07B0" +
		"\u07B4\x05:\x1E\x02\u07B1\u07B3\x07\xA4\x02\x02\u07B2\u07B1\x03\x02\x02" +
		"\x02\u07B3\u07B6\x03\x02\x02\x02\u07B4\u07B2\x03\x02\x02\x02\u07B4\u07B5" +
		"\x03\x02\x02\x02\u07B5\u07B8\x03\x02\x02\x02\u07B6\u07B4\x03\x02\x02\x02" +
		"\u07B7\u07B0\x03\x02\x02\x02\u07B8\u07B9\x03\x02\x02\x02\u07B9\u07B7\x03" +
		"\x02\x02\x02\u07B9\u07BA\x03\x02\x02\x02\u07BA\x8F\x03\x02\x02\x02\u07BB" +
		"\u07BC\x07J\x02\x02\u07BC\u07BD\x05\u010A\x86\x02\u07BD\u07C1\x07\x8F" +
		"\x02\x02\u07BE\u07C0\x07\xA4\x02\x02\u07BF\u07BE\x03\x02\x02\x02\u07C0" +
		"\u07C3\x03\x02\x02\x02\u07C1\u07BF\x03\x02\x02\x02\u07C1\u07C2\x03\x02" +
		"\x02\x02\u07C2\u07CB\x03\x02\x02\x02\u07C3\u07C1\x03\x02\x02\x02\u07C4" +
		"\u07C8\x05:\x1E\x02\u07C5\u07C7\x07\xA4\x02\x02\u07C6\u07C5\x03\x02\x02" +
		"\x02\u07C7\u07CA\x03\x02\x02\x02\u07C8\u07C6\x03\x02\x02\x02\u07C8\u07C9" +
		"\x03\x02\x02\x02\u07C9\u07CC\x03\x02\x02\x02\u07CA\u07C8\x03\x02\x02\x02" +
		"\u07CB\u07C4\x03\x02\x02\x02\u07CC\u07CD\x03\x02\x02\x02\u07CD\u07CB\x03" +
		"\x02\x02\x02\u07CD\u07CE\x03\x02\x02\x02\u07CE\x91\x03\x02\x02\x02\u07CF" +
		"\u07D0\x07K\x02\x02\u07D0\u07D1\x05\u0110\x89\x02\u07D1\u07D5\x07\x8F" +
		"\x02\x02\u07D2\u07D4\x07\xA4\x02\x02\u07D3\u07D2\x03\x02\x02\x02\u07D4" +
		"\u07D7\x03\x02\x02\x02\u07D5\u07D3\x03\x02\x02\x02\u07D5\u07D6\x03\x02" +
		"\x02\x02\u07D6\u07DF\x03\x02\x02\x02\u07D7\u07D5\x03\x02\x02\x02\u07D8" +
		"\u07DC\x05:\x1E\x02\u07D9\u07DB\x07\xA4\x02\x02\u07DA\u07D9\x03\x02\x02" +
		"\x02\u07DB\u07DE\x03\x02\x02\x02\u07DC\u07DA\x03\x02\x02\x02\u07DC\u07DD" +
		"\x03\x02\x02\x02\u07DD\u07E0\x03\x02\x02\x02\u07DE\u07DC\x03\x02\x02\x02" +
		"\u07DF\u07D8\x03\x02\x02\x02\u07E0\u07E1\x03\x02\x02\x02\u07E1\u07DF\x03" +
		"\x02\x02\x02\u07E1\u07E2\x03\x02\x02\x02\u07E2\x93\x03\x02\x02\x02\u07E3" +
		"\u07E4\x07L\x02\x02\u07E4\u07E5\x05\u0110\x89\x02\u07E5\u07E9\x07\x8F" +
		"\x02\x02\u07E6\u07E8\x07\xA4\x02\x02\u07E7\u07E6\x03\x02\x02\x02\u07E8" +
		"\u07EB\x03\x02\x02\x02\u07E9\u07E7\x03\x02\x02\x02\u07E9\u07EA\x03\x02" +
		"\x02\x02\u07EA\u07F3\x03\x02\x02\x02\u07EB\u07E9\x03\x02\x02\x02\u07EC" +
		"\u07F0\x05:\x1E\x02\u07ED\u07EF\x07\xA4\x02\x02\u07EE\u07ED\x03\x02\x02" +
		"\x02\u07EF\u07F2\x03\x02\x02\x02\u07F0\u07EE\x03\x02\x02\x02\u07F0\u07F1" +
		"\x03\x02\x02\x02\u07F1\u07F4\x03\x02\x02\x02\u07F2\u07F0\x03\x02\x02\x02" +
		"\u07F3\u07EC\x03\x02\x02\x02\u07F4\u07F5\x03\x02\x02\x02\u07F5\u07F3\x03" +
		"\x02\x02\x02\u07F5\u07F6\x03\x02\x02\x02\u07F6\x95\x03\x02\x02\x02\u07F7" +
		"\u07F8\x07M\x02\x02\u07F8\u07F9\x05\u0110\x89\x02\u07F9\u07FD\x07\x8F" +
		"\x02\x02\u07FA\u07FC\x07\xA4\x02\x02\u07FB\u07FA\x03\x02\x02\x02\u07FC" +
		"\u07FF\x03\x02\x02\x02\u07FD\u07FB\x03\x02\x02\x02\u07FD\u07FE\x03\x02" +
		"\x02\x02\u07FE\u0807\x03\x02\x02\x02\u07FF\u07FD\x03\x02\x02\x02\u0800" +
		"\u0804\x05:\x1E\x02\u0801\u0803\x07\xA4\x02\x02\u0802\u0801\x03\x02\x02" +
		"\x02\u0803\u0806\x03\x02\x02\x02\u0804\u0802\x03\x02\x02\x02\u0804\u0805" +
		"\x03\x02\x02\x02\u0805\u0808\x03\x02\x02\x02\u0806\u0804\x03\x02\x02\x02" +
		"\u0807\u0800\x03\x02\x02\x02\u0808\u0809\x03\x02\x02\x02\u0809\u0807\x03" +
		"\x02\x02\x02\u0809\u080A\x03\x02\x02\x02\u080A\x97\x03\x02\x02\x02\u080B" +
		"\u080C\x07N\x02\x02\u080C\u080D\x05\u0110\x89\x02\u080D\u0811\x07\x8F" +
		"\x02\x02\u080E\u0810\x07\xA4\x02\x02\u080F\u080E\x03\x02\x02\x02\u0810" +
		"\u0813\x03\x02\x02\x02\u0811\u080F\x03\x02\x02\x02\u0811\u0812\x03\x02" +
		"\x02\x02\u0812\u081B\x03\x02\x02\x02\u0813\u0811\x03\x02\x02\x02\u0814" +
		"\u0818\x05:\x1E\x02\u0815\u0817\x07\xA4\x02\x02\u0816\u0815\x03\x02\x02" +
		"\x02\u0817\u081A\x03\x02\x02\x02\u0818\u0816\x03\x02\x02\x02\u0818\u0819" +
		"\x03\x02\x02\x02\u0819\u081C\x03\x02\x02\x02\u081A\u0818\x03\x02\x02\x02" +
		"\u081B\u0814\x03\x02\x02\x02\u081C\u081D\x03\x02\x02\x02\u081D\u081B\x03" +
		"\x02\x02\x02\u081D\u081E\x03\x02\x02\x02\u081E\x99\x03\x02\x02\x02\u081F" +
		"\u0820\x07O\x02\x02\u0820\u0821\x05\u0110\x89\x02\u0821\u0825\x07\x8F" +
		"\x02\x02\u0822\u0824\x07\xA4\x02\x02\u0823\u0822\x03\x02\x02\x02\u0824" +
		"\u0827\x03\x02\x02\x02\u0825\u0823\x03\x02\x02\x02\u0825\u0826\x03\x02" +
		"\x02\x02\u0826\u082F\x03\x02\x02\x02\u0827\u0825\x03\x02\x02\x02\u0828" +
		"\u082C\x05:\x1E\x02\u0829\u082B\x07\xA4\x02\x02\u082A\u0829\x03\x02\x02" +
		"\x02\u082B\u082E\x03\x02\x02\x02\u082C\u082A\x03\x02\x02\x02\u082C\u082D" +
		"\x03\x02\x02\x02\u082D\u0830\x03\x02\x02\x02\u082E\u082C\x03\x02\x02\x02" +
		"\u082F\u0828\x03\x02\x02\x02\u0830\u0831\x03\x02\x02\x02\u0831\u082F\x03" +
		"\x02\x02\x02\u0831\u0832\x03\x02\x02\x02\u0832\x9B\x03\x02\x02\x02\u0833" +
		"\u0834\x07P\x02\x02\u0834\u0835\x05\u0110\x89\x02\u0835\u0839\x07\x8F" +
		"\x02\x02\u0836\u0838\x07\xA4\x02\x02\u0837\u0836\x03\x02\x02\x02\u0838" +
		"\u083B\x03\x02\x02\x02\u0839\u0837\x03\x02\x02\x02\u0839\u083A\x03\x02" +
		"\x02\x02\u083A\u0843\x03\x02\x02\x02\u083B\u0839\x03\x02\x02\x02\u083C" +
		"\u0840\x05:\x1E\x02\u083D\u083F\x07\xA4\x02\x02\u083E\u083D\x03\x02\x02" +
		"\x02\u083F\u0842\x03\x02\x02\x02\u0840\u083E\x03\x02\x02\x02\u0840\u0841" +
		"\x03\x02\x02\x02\u0841\u0844\x03\x02\x02\x02\u0842\u0840\x03\x02\x02\x02" +
		"\u0843\u083C\x03\x02\x02\x02\u0844\u0845\x03\x02\x02\x02\u0845\u0843\x03" +
		"\x02\x02\x02\u0845\u0846\x03\x02\x02\x02\u0846\x9D\x03\x02\x02\x02\u0847" +
		"\u0848\x07Q\x02\x02\u0848\u0849\x05\u0110\x89\x02\u0849\u084D\x07\x8F" +
		"\x02\x02\u084A\u084C\x07\xA4\x02\x02\u084B\u084A\x03\x02\x02\x02\u084C" +
		"\u084F\x03\x02\x02\x02\u084D\u084B\x03\x02\x02\x02\u084D\u084E\x03\x02" +
		"\x02\x02\u084E\u0857\x03\x02\x02\x02\u084F\u084D\x03\x02\x02\x02\u0850" +
		"\u0854\x05:\x1E\x02\u0851\u0853\x07\xA4\x02\x02\u0852\u0851\x03\x02\x02" +
		"\x02\u0853\u0856\x03\x02\x02\x02\u0854\u0852\x03\x02\x02\x02\u0854\u0855" +
		"\x03\x02\x02\x02\u0855\u0858\x03\x02\x02\x02\u0856\u0854\x03\x02\x02\x02" +
		"\u0857\u0850\x03\x02\x02\x02\u0858\u0859\x03\x02\x02\x02\u0859\u0857\x03" +
		"\x02\x02\x02\u0859\u085A\x03\x02\x02\x02\u085A\x9F\x03\x02\x02\x02\u085B" +
		"\u085C\x07R\x02\x02\u085C\u085D\x05\u0110\x89\x02\u085D\u0861\x07\x8F" +
		"\x02\x02\u085E\u0860\x07\xA4\x02\x02\u085F\u085E\x03\x02\x02\x02\u0860" +
		"\u0863\x03\x02\x02\x02\u0861\u085F\x03\x02\x02\x02\u0861\u0862\x03\x02" +
		"\x02\x02\u0862\u086B\x03\x02\x02\x02\u0863\u0861\x03\x02\x02\x02\u0864" +
		"\u0868\x05:\x1E\x02\u0865\u0867\x07\xA4\x02\x02\u0866\u0865\x03\x02\x02" +
		"\x02\u0867\u086A\x03\x02\x02\x02\u0868\u0866\x03\x02\x02\x02\u0868\u0869" +
		"\x03\x02\x02\x02\u0869\u086C\x03\x02\x02\x02\u086A\u0868\x03\x02\x02\x02" +
		"\u086B\u0864\x03\x02\x02\x02\u086C\u086D\x03\x02\x02\x02\u086D\u086B\x03" +
		"\x02\x02\x02\u086D\u086E\x03\x02\x02\x02\u086E\xA1\x03\x02\x02\x02\u086F" +
		"\u0870\x07S\x02\x02\u0870\u0871\x05\u0110\x89\x02\u0871\u0875\x07\x8F" +
		"\x02\x02\u0872\u0874\x07\xA4\x02\x02\u0873\u0872\x03\x02\x02\x02\u0874" +
		"\u0877\x03\x02\x02\x02\u0875\u0873\x03\x02\x02\x02\u0875\u0876\x03\x02" +
		"\x02\x02\u0876\u087F\x03\x02\x02\x02\u0877\u0875\x03\x02\x02\x02\u0878" +
		"\u087C\x05:\x1E\x02\u0879\u087B\x07\xA4\x02\x02\u087A\u0879\x03\x02\x02" +
		"\x02\u087B\u087E\x03\x02\x02\x02\u087C\u087A\x03\x02\x02\x02\u087C\u087D" +
		"\x03\x02\x02\x02\u087D\u0880\x03\x02\x02\x02\u087E\u087C\x03\x02\x02\x02" +
		"\u087F\u0878\x03\x02\x02\x02\u0880\u0881\x03\x02\x02\x02\u0881\u087F\x03" +
		"\x02\x02\x02\u0881\u0882\x03\x02\x02\x02\u0882\xA3\x03\x02\x02\x02\u0883" +
		"\u0884\x07T\x02\x02\u0884\u0885\x05\u0110\x89\x02\u0885\u0889\x07\x8F" +
		"\x02\x02\u0886\u0888\x07\xA4\x02\x02\u0887\u0886\x03\x02\x02\x02\u0888" +
		"\u088B\x03\x02\x02\x02\u0889\u0887\x03\x02\x02\x02\u0889\u088A\x03\x02" +
		"\x02\x02\u088A\u0893\x03\x02\x02\x02\u088B\u0889\x03\x02\x02\x02\u088C" +
		"\u0890\x05:\x1E\x02\u088D\u088F\x07\xA4\x02\x02\u088E\u088D\x03\x02\x02" +
		"\x02\u088F\u0892\x03\x02\x02\x02\u0890\u088E\x03\x02\x02\x02\u0890\u0891" +
		"\x03\x02\x02\x02\u0891\u0894\x03\x02\x02\x02\u0892\u0890\x03\x02\x02\x02" +
		"\u0893\u088C\x03\x02\x02\x02\u0894\u0895\x03\x02\x02\x02\u0895\u0893\x03" +
		"\x02\x02\x02\u0895\u0896\x03\x02\x02\x02\u0896\xA5\x03\x02\x02\x02\u0897" +
		"\u0898\x07U\x02\x02\u0898\u0899\x05\u0110\x89\x02\u0899\u089D\x07\x8F" +
		"\x02\x02\u089A\u089C\x07\xA4\x02\x02\u089B\u089A\x03\x02\x02\x02\u089C" +
		"\u089F\x03\x02\x02\x02\u089D\u089B\x03\x02\x02\x02\u089D\u089E\x03\x02" +
		"\x02\x02\u089E\u08A7\x03\x02\x02\x02\u089F\u089D\x03\x02\x02\x02\u08A0" +
		"\u08A4\x05:\x1E\x02\u08A1\u08A3\x07\xA4\x02\x02\u08A2\u08A1\x03\x02\x02" +
		"\x02\u08A3\u08A6\x03\x02\x02\x02\u08A4\u08A2\x03\x02\x02\x02\u08A4\u08A5" +
		"\x03\x02\x02\x02\u08A5\u08A8\x03\x02\x02\x02\u08A6\u08A4\x03\x02\x02\x02" +
		"\u08A7\u08A0\x03\x02\x02\x02\u08A8\u08A9\x03\x02\x02\x02\u08A9\u08A7\x03" +
		"\x02\x02\x02\u08A9\u08AA\x03\x02\x02\x02\u08AA\xA7\x03\x02\x02\x02\u08AB" +
		"\u08AC\x07V\x02\x02\u08AC\u08AD\x05\u0110\x89\x02\u08AD\u08B1\x07\x8F" +
		"\x02\x02\u08AE\u08B0\x07\xA4\x02\x02\u08AF\u08AE\x03\x02\x02\x02\u08B0" +
		"\u08B3\x03\x02\x02\x02\u08B1\u08AF\x03\x02\x02\x02\u08B1\u08B2\x03\x02" +
		"\x02\x02\u08B2\u08BB\x03\x02\x02\x02\u08B3\u08B1\x03\x02\x02\x02\u08B4" +
		"\u08B8\x05:\x1E\x02\u08B5\u08B7\x07\xA4\x02\x02\u08B6\u08B5\x03\x02\x02" +
		"\x02\u08B7\u08BA\x03\x02\x02\x02\u08B8\u08B6\x03\x02\x02\x02\u08B8\u08B9" +
		"\x03\x02\x02\x02\u08B9\u08BC\x03\x02\x02\x02\u08BA\u08B8\x03\x02\x02\x02" +
		"\u08BB\u08B4\x03\x02\x02\x02\u08BC\u08BD\x03\x02\x02\x02\u08BD\u08BB\x03" +
		"\x02\x02\x02\u08BD\u08BE\x03\x02\x02\x02\u08BE\xA9\x03\x02\x02\x02\u08BF" +
		"\u08C0\x07W\x02\x02\u08C0\u08C1\x05\u0110\x89\x02\u08C1\u08C5\x07\x8F" +
		"\x02\x02\u08C2\u08C4\x07\xA4\x02\x02\u08C3\u08C2\x03\x02\x02\x02\u08C4" +
		"\u08C7\x03\x02\x02\x02\u08C5\u08C3\x03\x02\x02\x02\u08C5\u08C6\x03\x02" +
		"\x02\x02\u08C6\u08CF\x03\x02\x02\x02\u08C7\u08C5\x03\x02\x02\x02\u08C8" +
		"\u08CC\x05:\x1E\x02\u08C9\u08CB\x07\xA4\x02\x02\u08CA\u08C9\x03\x02\x02" +
		"\x02\u08CB\u08CE\x03\x02\x02\x02\u08CC\u08CA\x03\x02\x02\x02\u08CC\u08CD" +
		"\x03\x02\x02\x02\u08CD\u08D0\x03\x02\x02\x02\u08CE\u08CC\x03\x02\x02\x02" +
		"\u08CF\u08C8\x03\x02\x02\x02\u08D0\u08D1\x03\x02\x02\x02\u08D1\u08CF\x03" +
		"\x02\x02\x02\u08D1\u08D2\x03\x02\x02\x02\u08D2\xAB\x03\x02\x02\x02\u08D3" +
		"\u08D4\x07X\x02\x02\u08D4\u08D5\x05\u0110\x89\x02\u08D5\u08D9\x07\x8F" +
		"\x02\x02\u08D6\u08D8\x07\xA4\x02\x02\u08D7\u08D6\x03\x02\x02\x02\u08D8" +
		"\u08DB\x03\x02\x02\x02\u08D9\u08D7\x03\x02\x02\x02\u08D9\u08DA\x03\x02" +
		"\x02\x02\u08DA\u08E3\x03\x02\x02\x02\u08DB\u08D9\x03\x02\x02\x02\u08DC" +
		"\u08E0\x05:\x1E\x02\u08DD\u08DF\x07\xA4\x02\x02\u08DE\u08DD\x03\x02\x02" +
		"\x02\u08DF\u08E2\x03\x02\x02\x02\u08E0\u08DE\x03\x02\x02\x02\u08E0\u08E1" +
		"\x03\x02\x02\x02\u08E1\u08E4\x03\x02\x02\x02\u08E2\u08E0\x03\x02\x02\x02" +
		"\u08E3\u08DC\x03\x02\x02\x02\u08E4\u08E5\x03\x02\x02\x02\u08E5\u08E3\x03" +
		"\x02\x02\x02\u08E5\u08E6\x03\x02\x02\x02\u08E6\xAD\x03\x02\x02\x02\u08E7" +
		"\u08E8\x07Y\x02\x02\u08E8\u08E9\x05\u0110\x89\x02\u08E9\u08ED\x07\x8F" +
		"\x02\x02\u08EA\u08EC\x07\xA4\x02\x02\u08EB\u08EA\x03\x02\x02\x02\u08EC" +
		"\u08EF\x03\x02\x02\x02\u08ED\u08EB\x03\x02\x02\x02\u08ED\u08EE\x03\x02" +
		"\x02\x02\u08EE\u08F7\x03\x02\x02\x02\u08EF\u08ED\x03\x02\x02\x02\u08F0" +
		"\u08F4\x05:\x1E\x02\u08F1\u08F3\x07\xA4\x02\x02\u08F2\u08F1\x03\x02\x02" +
		"\x02\u08F3\u08F6\x03\x02\x02\x02\u08F4\u08F2\x03\x02\x02\x02\u08F4\u08F5" +
		"\x03\x02\x02\x02\u08F5\u08F8\x03\x02\x02\x02\u08F6\u08F4\x03\x02\x02\x02" +
		"\u08F7\u08F0\x03\x02\x02\x02\u08F8\u08F9\x03\x02\x02\x02\u08F9\u08F7\x03" +
		"\x02\x02\x02\u08F9\u08FA\x03\x02\x02\x02\u08FA\xAF\x03\x02\x02\x02\u08FB" +
		"\u08FC\x07Z\x02\x02\u08FC\u08FD\x05\u0110\x89\x02\u08FD\u0901\x07\x8F" +
		"\x02\x02\u08FE\u0900\x07\xA4\x02\x02\u08FF\u08FE\x03\x02\x02\x02\u0900" +
		"\u0903\x03\x02\x02\x02\u0901\u08FF\x03\x02\x02\x02\u0901\u0902\x03\x02" +
		"\x02\x02\u0902\u090B\x03\x02\x02\x02\u0903\u0901\x03\x02\x02\x02\u0904" +
		"\u0908\x05:\x1E\x02\u0905\u0907\x07\xA4\x02\x02\u0906\u0905\x03\x02\x02" +
		"\x02\u0907\u090A\x03\x02\x02\x02\u0908\u0906\x03\x02\x02\x02\u0908\u0909" +
		"\x03\x02\x02\x02\u0909\u090C\x03\x02\x02\x02\u090A\u0908\x03\x02\x02\x02" +
		"\u090B\u0904\x03\x02\x02\x02\u090C\u090D\x03\x02\x02\x02\u090D\u090B\x03" +
		"\x02\x02\x02\u090D\u090E\x03\x02\x02\x02\u090E\xB1\x03\x02\x02\x02\u090F" +
		"\u0910\x07[\x02\x02\u0910\u0911\x05\u0110\x89\x02\u0911\u0915\x07\x8F" +
		"\x02\x02\u0912\u0914\x07\xA4\x02\x02\u0913\u0912\x03\x02\x02\x02\u0914" +
		"\u0917\x03\x02\x02\x02\u0915\u0913\x03\x02\x02\x02\u0915\u0916\x03\x02" +
		"\x02\x02\u0916\u091F\x03\x02\x02\x02\u0917\u0915\x03\x02\x02\x02\u0918" +
		"\u091C\x05:\x1E\x02\u0919\u091B\x07\xA4\x02\x02\u091A\u0919\x03\x02\x02" +
		"\x02\u091B\u091E\x03\x02\x02\x02\u091C\u091A\x03\x02\x02\x02\u091C\u091D" +
		"\x03\x02\x02\x02\u091D\u0920\x03\x02\x02\x02";
	private static readonly _serializedATNSegment5: string =
		"\u091E\u091C\x03\x02\x02\x02\u091F\u0918\x03\x02\x02\x02\u0920\u0921\x03" +
		"\x02\x02\x02\u0921\u091F\x03\x02\x02\x02\u0921\u0922\x03\x02\x02\x02\u0922" +
		"\xB3\x03\x02\x02\x02\u0923\u0924\x07\\\x02\x02\u0924\u0925\x05\u0110\x89" +
		"\x02\u0925\u0929\x07\x8F\x02\x02\u0926\u0928\x07\xA4\x02\x02\u0927\u0926" +
		"\x03\x02\x02\x02\u0928\u092B\x03\x02\x02\x02\u0929\u0927\x03\x02\x02\x02" +
		"\u0929\u092A\x03\x02\x02\x02\u092A\u0933\x03\x02\x02\x02\u092B\u0929\x03" +
		"\x02\x02\x02\u092C\u0930\x05:\x1E\x02\u092D\u092F\x07\xA4\x02\x02\u092E" +
		"\u092D\x03\x02\x02\x02\u092F\u0932\x03\x02\x02\x02\u0930\u092E\x03\x02" +
		"\x02\x02\u0930\u0931\x03\x02\x02\x02\u0931\u0934\x03\x02\x02\x02\u0932" +
		"\u0930\x03\x02\x02\x02\u0933\u092C\x03\x02\x02\x02\u0934\u0935\x03\x02" +
		"\x02\x02\u0935\u0933\x03\x02\x02\x02\u0935\u0936\x03\x02\x02\x02\u0936" +
		"\xB5\x03\x02\x02\x02\u0937\u0938\x07]\x02\x02\u0938\u0939\x05\u0110\x89" +
		"\x02\u0939\u093D\x07\x8F\x02\x02\u093A\u093C\x07\xA4\x02\x02\u093B\u093A" +
		"\x03\x02\x02\x02\u093C\u093F\x03\x02\x02\x02\u093D\u093B\x03\x02\x02\x02" +
		"\u093D\u093E\x03\x02\x02\x02\u093E\u0947\x03\x02\x02\x02\u093F\u093D\x03" +
		"\x02\x02\x02\u0940\u0944\x05:\x1E\x02\u0941\u0943\x07\xA4\x02\x02\u0942" +
		"\u0941\x03\x02\x02\x02\u0943\u0946\x03\x02\x02\x02\u0944\u0942\x03\x02" +
		"\x02\x02\u0944\u0945\x03\x02\x02\x02\u0945\u0948\x03\x02\x02\x02\u0946" +
		"\u0944\x03\x02\x02\x02\u0947\u0940\x03\x02\x02\x02\u0948\u0949\x03\x02" +
		"\x02\x02\u0949\u0947\x03\x02\x02\x02\u0949\u094A\x03\x02\x02\x02\u094A" +
		"\xB7\x03\x02\x02\x02\u094B\u094C\x07^\x02\x02\u094C\u094D\x05\u010A\x86" +
		"\x02\u094D\u0951\x07\x8F\x02\x02\u094E\u0950\x07\xA4\x02\x02\u094F\u094E" +
		"\x03\x02\x02\x02\u0950\u0953\x03\x02\x02\x02\u0951\u094F\x03\x02\x02\x02" +
		"\u0951\u0952\x03\x02\x02\x02\u0952\u095B\x03\x02\x02\x02\u0953\u0951\x03" +
		"\x02\x02\x02\u0954\u0958\x05:\x1E\x02\u0955\u0957\x07\xA4\x02\x02\u0956" +
		"\u0955\x03\x02\x02\x02\u0957\u095A\x03\x02\x02\x02\u0958\u0956\x03\x02" +
		"\x02\x02\u0958\u0959\x03\x02\x02\x02\u0959\u095C\x03\x02\x02\x02\u095A" +
		"\u0958\x03\x02\x02\x02\u095B\u0954\x03\x02\x02\x02\u095C\u095D\x03\x02" +
		"\x02\x02\u095D\u095B\x03\x02\x02\x02\u095D\u095E\x03\x02\x02\x02\u095E" +
		"\xB9\x03\x02\x02\x02\u095F\u0960\x07_\x02\x02\u0960\u0961\x05\u010A\x86" +
		"\x02\u0961\u0965\x07\x8F\x02\x02\u0962\u0964\x07\xA4\x02\x02\u0963\u0962" +
		"\x03\x02\x02\x02\u0964\u0967\x03\x02\x02\x02\u0965\u0963\x03\x02\x02\x02" +
		"\u0965\u0966\x03\x02\x02\x02\u0966\u096F\x03\x02\x02\x02\u0967\u0965\x03" +
		"\x02\x02\x02\u0968\u096C\x05:\x1E\x02\u0969\u096B\x07\xA4\x02\x02\u096A" +
		"\u0969\x03\x02\x02\x02\u096B\u096E\x03\x02\x02\x02\u096C\u096A\x03\x02" +
		"\x02\x02\u096C\u096D\x03\x02\x02\x02\u096D\u0970\x03\x02\x02\x02\u096E" +
		"\u096C\x03\x02\x02\x02\u096F\u0968\x03\x02\x02\x02\u0970\u0971\x03\x02" +
		"\x02\x02\u0971\u096F\x03\x02\x02\x02\u0971\u0972\x03\x02\x02\x02\u0972" +
		"\xBB\x03\x02\x02\x02\u0973\u0974\x07`\x02\x02\u0974\u0975\x05\u010A\x86" +
		"\x02\u0975\u0979\x07\x8F\x02\x02\u0976\u0978\x07\xA4\x02\x02\u0977\u0976" +
		"\x03\x02\x02\x02\u0978\u097B\x03\x02\x02\x02\u0979\u0977\x03\x02\x02\x02" +
		"\u0979\u097A\x03\x02\x02\x02\u097A\u0983\x03\x02\x02\x02\u097B\u0979\x03" +
		"\x02\x02\x02\u097C\u0980\x05:\x1E\x02\u097D\u097F\x07\xA4\x02\x02\u097E" +
		"\u097D\x03\x02\x02\x02\u097F\u0982\x03\x02\x02\x02\u0980\u097E\x03\x02" +
		"\x02\x02\u0980\u0981\x03\x02\x02\x02\u0981\u0984\x03\x02\x02\x02\u0982" +
		"\u0980\x03\x02\x02\x02\u0983\u097C\x03\x02\x02\x02\u0984\u0985\x03\x02" +
		"\x02\x02\u0985\u0983\x03\x02\x02\x02\u0985\u0986\x03\x02\x02\x02\u0986" +
		"\xBD\x03\x02\x02\x02\u0987\u0988\x07a\x02\x02\u0988\u0989\x05\u010A\x86" +
		"\x02\u0989\u098D\x07\x8F\x02\x02\u098A\u098C\x07\xA4\x02\x02\u098B\u098A" +
		"\x03\x02\x02\x02\u098C\u098F\x03\x02\x02\x02\u098D\u098B\x03\x02\x02\x02" +
		"\u098D\u098E\x03\x02\x02\x02\u098E\u0997\x03\x02\x02\x02\u098F\u098D\x03" +
		"\x02\x02\x02\u0990\u0994\x05:\x1E\x02\u0991\u0993\x07\xA4\x02\x02\u0992" +
		"\u0991\x03\x02\x02\x02\u0993\u0996\x03\x02\x02\x02\u0994\u0992\x03\x02" +
		"\x02\x02\u0994\u0995\x03\x02\x02\x02\u0995\u0998\x03\x02\x02\x02\u0996" +
		"\u0994\x03\x02\x02\x02\u0997\u0990\x03\x02\x02\x02\u0998\u0999\x03\x02" +
		"\x02\x02\u0999\u0997\x03\x02\x02\x02\u0999\u099A\x03\x02\x02\x02\u099A" +
		"\xBF\x03\x02\x02\x02\u099B\u099C\x07b\x02\x02\u099C\u099D\x05\u010A\x86" +
		"\x02\u099D\u09A1\x07\x8F\x02\x02\u099E\u09A0\x07\xA4\x02\x02\u099F\u099E" +
		"\x03\x02\x02\x02\u09A0\u09A3\x03\x02\x02\x02\u09A1\u099F\x03\x02\x02\x02" +
		"\u09A1\u09A2\x03\x02\x02\x02\u09A2\u09AB\x03\x02\x02\x02\u09A3\u09A1\x03" +
		"\x02\x02\x02\u09A4\u09A8\x05:\x1E\x02\u09A5\u09A7\x07\xA4\x02\x02\u09A6" +
		"\u09A5\x03\x02\x02\x02\u09A7\u09AA\x03\x02\x02\x02\u09A8\u09A6\x03\x02" +
		"\x02\x02\u09A8\u09A9\x03\x02\x02\x02\u09A9\u09AC\x03\x02\x02\x02\u09AA" +
		"\u09A8\x03\x02\x02\x02\u09AB\u09A4\x03\x02\x02\x02\u09AC\u09AD\x03\x02" +
		"\x02\x02\u09AD\u09AB\x03\x02\x02\x02\u09AD\u09AE\x03\x02\x02\x02\u09AE" +
		"\xC1\x03\x02\x02\x02\u09AF\u09B0\x07c\x02\x02\u09B0\u09B1\x05\u010A\x86" +
		"\x02\u09B1\u09B5\x07\x8F\x02\x02\u09B2\u09B4\x07\xA4\x02\x02\u09B3\u09B2" +
		"\x03\x02\x02\x02\u09B4\u09B7\x03\x02\x02\x02\u09B5\u09B3\x03\x02\x02\x02" +
		"\u09B5\u09B6\x03\x02\x02\x02\u09B6\u09BF\x03\x02\x02\x02\u09B7\u09B5\x03" +
		"\x02\x02\x02\u09B8\u09BC\x05:\x1E\x02\u09B9\u09BB\x07\xA4\x02\x02\u09BA" +
		"\u09B9\x03\x02\x02\x02\u09BB\u09BE\x03\x02\x02\x02\u09BC\u09BA\x03\x02" +
		"\x02\x02\u09BC\u09BD\x03\x02\x02\x02\u09BD\u09C0\x03\x02\x02\x02\u09BE" +
		"\u09BC\x03\x02\x02\x02\u09BF\u09B8\x03\x02\x02\x02\u09C0\u09C1\x03\x02" +
		"\x02\x02\u09C1\u09BF\x03\x02\x02\x02\u09C1\u09C2\x03\x02\x02\x02\u09C2" +
		"\xC3\x03\x02\x02\x02\u09C3\u09C4\x07d\x02\x02\u09C4\u09C5\x05\u010A\x86" +
		"\x02\u09C5\u09C9\x07\x8F\x02\x02\u09C6\u09C8\x07\xA4\x02\x02\u09C7\u09C6" +
		"\x03\x02\x02\x02\u09C8\u09CB\x03\x02\x02\x02\u09C9\u09C7\x03\x02\x02\x02" +
		"\u09C9\u09CA\x03\x02\x02\x02\u09CA\u09D3\x03\x02\x02\x02\u09CB\u09C9\x03" +
		"\x02\x02\x02\u09CC\u09D0\x05:\x1E\x02\u09CD\u09CF\x07\xA4\x02\x02\u09CE" +
		"\u09CD\x03\x02\x02\x02\u09CF\u09D2\x03\x02\x02\x02\u09D0\u09CE\x03\x02" +
		"\x02\x02\u09D0\u09D1\x03\x02\x02\x02\u09D1\u09D4\x03\x02\x02\x02\u09D2" +
		"\u09D0\x03\x02\x02\x02\u09D3\u09CC\x03\x02\x02\x02\u09D4\u09D5\x03\x02" +
		"\x02\x02\u09D5\u09D3\x03\x02\x02\x02\u09D5\u09D6\x03\x02\x02\x02\u09D6" +
		"\xC5\x03\x02\x02\x02\u09D7\u09D8\x07e\x02\x02\u09D8\u09D9\x05\u010A\x86" +
		"\x02\u09D9\u09DD\x07\x8F\x02\x02\u09DA\u09DC\x07\xA4\x02\x02\u09DB\u09DA" +
		"\x03\x02\x02\x02\u09DC\u09DF\x03\x02\x02\x02\u09DD\u09DB\x03\x02\x02\x02" +
		"\u09DD\u09DE\x03\x02\x02\x02\u09DE\u09E7\x03\x02\x02\x02\u09DF\u09DD\x03" +
		"\x02\x02\x02\u09E0\u09E4\x05:\x1E\x02\u09E1\u09E3\x07\xA4\x02\x02\u09E2" +
		"\u09E1\x03\x02\x02\x02\u09E3\u09E6\x03\x02\x02\x02\u09E4\u09E2\x03\x02" +
		"\x02\x02\u09E4\u09E5\x03\x02\x02\x02\u09E5\u09E8\x03\x02\x02\x02\u09E6" +
		"\u09E4\x03\x02\x02\x02\u09E7\u09E0\x03\x02\x02\x02\u09E8\u09E9\x03\x02" +
		"\x02\x02\u09E9\u09E7\x03\x02\x02\x02\u09E9\u09EA\x03\x02\x02\x02\u09EA" +
		"\xC7\x03\x02\x02\x02\u09EB\u09EC\x07f\x02\x02\u09EC\u09ED\x05\u010A\x86" +
		"\x02\u09ED\u09F1\x07\x8F\x02\x02\u09EE\u09F0\x07\xA4\x02\x02\u09EF\u09EE" +
		"\x03\x02\x02\x02\u09F0\u09F3\x03\x02\x02\x02\u09F1\u09EF\x03\x02\x02\x02" +
		"\u09F1\u09F2\x03\x02\x02\x02\u09F2\u09FB\x03\x02\x02\x02\u09F3\u09F1\x03" +
		"\x02\x02\x02\u09F4\u09F8\x05:\x1E\x02\u09F5\u09F7\x07\xA4\x02\x02\u09F6" +
		"\u09F5\x03\x02\x02\x02\u09F7\u09FA\x03\x02\x02\x02\u09F8\u09F6\x03\x02" +
		"\x02\x02\u09F8\u09F9\x03\x02\x02\x02\u09F9\u09FC\x03\x02\x02\x02\u09FA" +
		"\u09F8\x03\x02\x02\x02\u09FB\u09F4\x03\x02\x02\x02\u09FC\u09FD\x03\x02" +
		"\x02\x02\u09FD\u09FB\x03\x02\x02\x02\u09FD\u09FE\x03\x02\x02\x02\u09FE" +
		"\xC9\x03\x02\x02\x02\u09FF\u0A00\x07g\x02\x02\u0A00\u0A01\x05\u010A\x86" +
		"\x02\u0A01\u0A05\x07\x8F\x02\x02\u0A02\u0A04\x07\xA4\x02\x02\u0A03\u0A02" +
		"\x03\x02\x02\x02\u0A04\u0A07\x03\x02\x02\x02\u0A05\u0A03\x03\x02\x02\x02" +
		"\u0A05\u0A06\x03\x02\x02\x02\u0A06\u0A0F\x03\x02\x02\x02\u0A07\u0A05\x03" +
		"\x02\x02\x02\u0A08\u0A0C\x05:\x1E\x02\u0A09\u0A0B\x07\xA4\x02\x02\u0A0A" +
		"\u0A09\x03\x02\x02\x02\u0A0B\u0A0E\x03\x02\x02\x02\u0A0C\u0A0A\x03\x02" +
		"\x02\x02\u0A0C\u0A0D\x03\x02\x02\x02\u0A0D\u0A10\x03\x02\x02\x02\u0A0E" +
		"\u0A0C\x03\x02\x02\x02\u0A0F\u0A08\x03\x02\x02\x02\u0A10\u0A11\x03\x02" +
		"\x02\x02\u0A11\u0A0F\x03\x02\x02\x02\u0A11\u0A12\x03\x02\x02\x02\u0A12" +
		"\xCB\x03\x02\x02\x02\u0A13\u0A14\x07h\x02\x02\u0A14\u0A15\x05\u010A\x86" +
		"\x02\u0A15\u0A19\x07\x8F\x02\x02\u0A16\u0A18\x07\xA4\x02\x02\u0A17\u0A16" +
		"\x03\x02\x02\x02\u0A18\u0A1B\x03\x02\x02\x02\u0A19\u0A17\x03\x02\x02\x02" +
		"\u0A19\u0A1A\x03\x02\x02\x02\u0A1A\u0A23\x03\x02\x02\x02\u0A1B\u0A19\x03" +
		"\x02\x02\x02\u0A1C\u0A20\x05:\x1E\x02\u0A1D\u0A1F\x07\xA4\x02\x02\u0A1E" +
		"\u0A1D\x03\x02\x02\x02\u0A1F\u0A22\x03\x02\x02\x02\u0A20\u0A1E\x03\x02" +
		"\x02\x02\u0A20\u0A21\x03\x02\x02\x02\u0A21\u0A24\x03\x02\x02\x02\u0A22" +
		"\u0A20\x03\x02\x02\x02\u0A23\u0A1C\x03\x02\x02\x02\u0A24\u0A25\x03\x02" +
		"\x02\x02\u0A25\u0A23\x03\x02\x02\x02\u0A25\u0A26\x03\x02\x02\x02\u0A26" +
		"\xCD\x03\x02\x02\x02\u0A27\u0A28\x07i\x02\x02\u0A28\u0A29\x05\u010A\x86" +
		"\x02\u0A29\u0A2D\x07\x8F\x02\x02\u0A2A\u0A2C\x07\xA4\x02\x02\u0A2B\u0A2A" +
		"\x03\x02\x02\x02\u0A2C\u0A2F\x03\x02\x02\x02\u0A2D\u0A2B\x03\x02\x02\x02" +
		"\u0A2D\u0A2E\x03\x02\x02\x02\u0A2E\u0A37\x03\x02\x02\x02\u0A2F\u0A2D\x03" +
		"\x02\x02\x02\u0A30\u0A34\x05:\x1E\x02\u0A31\u0A33\x07\xA4\x02\x02\u0A32" +
		"\u0A31\x03\x02\x02\x02\u0A33\u0A36\x03\x02\x02\x02\u0A34\u0A32\x03\x02" +
		"\x02\x02\u0A34\u0A35\x03\x02\x02\x02\u0A35\u0A38\x03\x02\x02\x02\u0A36" +
		"\u0A34\x03\x02\x02\x02\u0A37\u0A30\x03\x02\x02\x02\u0A38\u0A39\x03\x02" +
		"\x02\x02\u0A39\u0A37\x03\x02\x02\x02\u0A39\u0A3A\x03\x02\x02\x02\u0A3A" +
		"\xCF\x03\x02\x02\x02\u0A3B\u0A3C\x07j\x02\x02\u0A3C\u0A3D\x05\u010A\x86" +
		"\x02\u0A3D\u0A41\x07\x8F\x02\x02\u0A3E\u0A40\x07\xA4\x02\x02\u0A3F\u0A3E" +
		"\x03\x02\x02\x02\u0A40\u0A43\x03\x02\x02\x02\u0A41\u0A3F\x03\x02\x02\x02" +
		"\u0A41\u0A42\x03\x02\x02\x02\u0A42\u0A4B\x03\x02\x02\x02\u0A43\u0A41\x03" +
		"\x02\x02\x02\u0A44\u0A48\x05:\x1E\x02\u0A45\u0A47\x07\xA4\x02\x02\u0A46" +
		"\u0A45\x03\x02\x02\x02\u0A47\u0A4A\x03\x02\x02\x02\u0A48\u0A46\x03\x02" +
		"\x02\x02\u0A48\u0A49\x03\x02\x02\x02\u0A49\u0A4C\x03\x02\x02\x02\u0A4A" +
		"\u0A48\x03\x02\x02\x02\u0A4B\u0A44\x03\x02\x02\x02\u0A4C\u0A4D\x03\x02" +
		"\x02\x02\u0A4D\u0A4B\x03\x02\x02\x02\u0A4D\u0A4E\x03\x02\x02\x02\u0A4E" +
		"\xD1\x03\x02\x02\x02\u0A4F\u0A50\x07k\x02\x02\u0A50\u0A51\x05\u010A\x86" +
		"\x02\u0A51\u0A55\x07\x8F\x02\x02\u0A52\u0A54\x07\xA4\x02\x02\u0A53\u0A52" +
		"\x03\x02\x02\x02\u0A54\u0A57\x03\x02\x02\x02\u0A55\u0A53\x03\x02\x02\x02" +
		"\u0A55\u0A56\x03\x02\x02\x02\u0A56\u0A5F\x03\x02\x02\x02\u0A57\u0A55\x03" +
		"\x02\x02\x02\u0A58\u0A5C\x05:\x1E\x02\u0A59\u0A5B\x07\xA4\x02\x02\u0A5A" +
		"\u0A59\x03\x02\x02\x02\u0A5B\u0A5E\x03\x02\x02\x02\u0A5C\u0A5A\x03\x02" +
		"\x02\x02\u0A5C\u0A5D\x03\x02\x02\x02\u0A5D\u0A60\x03\x02\x02\x02\u0A5E" +
		"\u0A5C\x03\x02\x02\x02\u0A5F\u0A58\x03\x02\x02\x02\u0A60\u0A61\x03\x02" +
		"\x02\x02\u0A61\u0A5F\x03\x02\x02\x02\u0A61\u0A62\x03\x02\x02\x02\u0A62" +
		"\xD3\x03\x02\x02\x02\u0A63\u0A64\x07l\x02\x02\u0A64\u0A65\x05\u010A\x86" +
		"\x02\u0A65\u0A69\x07\x8F\x02\x02\u0A66\u0A68\x07\xA4\x02\x02\u0A67\u0A66" +
		"\x03\x02\x02\x02\u0A68\u0A6B\x03\x02\x02\x02\u0A69\u0A67\x03\x02\x02\x02" +
		"\u0A69\u0A6A\x03\x02\x02\x02\u0A6A\u0A73\x03\x02\x02\x02\u0A6B\u0A69\x03" +
		"\x02\x02\x02\u0A6C\u0A70\x05:\x1E\x02\u0A6D\u0A6F\x07\xA4\x02\x02\u0A6E" +
		"\u0A6D\x03\x02\x02\x02\u0A6F\u0A72\x03\x02\x02\x02\u0A70\u0A6E\x03\x02" +
		"\x02\x02\u0A70\u0A71\x03\x02\x02\x02\u0A71\u0A74\x03\x02\x02\x02\u0A72" +
		"\u0A70\x03\x02\x02\x02\u0A73\u0A6C\x03\x02\x02\x02\u0A74\u0A75\x03\x02" +
		"\x02\x02\u0A75\u0A73\x03\x02\x02\x02\u0A75\u0A76\x03\x02\x02\x02\u0A76" +
		"\xD5\x03\x02\x02\x02\u0A77\u0A78\x07m\x02\x02\u0A78\u0A79\x05\u010A\x86" +
		"\x02\u0A79\u0A7D\x07\x8F\x02\x02\u0A7A\u0A7C\x07\xA4\x02\x02\u0A7B\u0A7A" +
		"\x03\x02\x02\x02\u0A7C\u0A7F\x03\x02\x02\x02\u0A7D\u0A7B\x03\x02\x02\x02" +
		"\u0A7D\u0A7E\x03\x02\x02\x02\u0A7E\u0A87\x03\x02\x02\x02\u0A7F\u0A7D\x03" +
		"\x02\x02\x02\u0A80\u0A84\x05:\x1E\x02\u0A81\u0A83\x07\xA4\x02\x02\u0A82" +
		"\u0A81\x03\x02\x02\x02\u0A83\u0A86\x03\x02\x02\x02\u0A84\u0A82\x03\x02" +
		"\x02\x02\u0A84\u0A85\x03\x02\x02\x02\u0A85\u0A88\x03\x02\x02\x02\u0A86" +
		"\u0A84\x03\x02\x02\x02\u0A87\u0A80\x03\x02\x02\x02\u0A88\u0A89\x03\x02" +
		"\x02\x02\u0A89\u0A87\x03\x02\x02\x02\u0A89\u0A8A\x03\x02\x02\x02\u0A8A" +
		"\xD7\x03\x02\x02\x02\u0A8B\u0A8C\x07n\x02\x02\u0A8C\u0A8D\x05\u010A\x86" +
		"\x02\u0A8D\u0A91\x07\x8F\x02\x02\u0A8E\u0A90\x07\xA4\x02\x02\u0A8F\u0A8E" +
		"\x03\x02\x02\x02\u0A90\u0A93\x03\x02\x02\x02\u0A91\u0A8F\x03\x02\x02\x02" +
		"\u0A91\u0A92\x03\x02\x02\x02\u0A92\u0A9B\x03\x02\x02\x02\u0A93\u0A91\x03" +
		"\x02\x02\x02\u0A94\u0A98\x05:\x1E\x02\u0A95\u0A97\x07\xA4\x02\x02\u0A96" +
		"\u0A95\x03\x02\x02\x02\u0A97\u0A9A\x03\x02\x02\x02\u0A98\u0A96\x03\x02" +
		"\x02\x02\u0A98\u0A99\x03\x02\x02\x02\u0A99\u0A9C\x03\x02\x02\x02\u0A9A" +
		"\u0A98\x03\x02\x02\x02\u0A9B\u0A94\x03\x02\x02\x02\u0A9C\u0A9D\x03\x02" +
		"\x02\x02\u0A9D\u0A9B\x03\x02\x02\x02\u0A9D\u0A9E\x03\x02\x02\x02\u0A9E" +
		"\xD9\x03\x02\x02\x02\u0A9F\u0AA0\x07o\x02\x02\u0AA0\u0AA1\x05\u010A\x86" +
		"\x02\u0AA1\u0AA5\x07\x8F\x02\x02\u0AA2\u0AA4\x07\xA4\x02\x02\u0AA3\u0AA2" +
		"\x03\x02\x02\x02\u0AA4\u0AA7\x03\x02\x02\x02\u0AA5\u0AA3\x03\x02\x02\x02" +
		"\u0AA5\u0AA6\x03\x02\x02\x02\u0AA6\u0AAF\x03\x02\x02\x02\u0AA7\u0AA5\x03" +
		"\x02\x02\x02\u0AA8\u0AAC\x05:\x1E\x02\u0AA9\u0AAB\x07\xA4\x02\x02\u0AAA" +
		"\u0AA9\x03\x02\x02\x02\u0AAB\u0AAE\x03\x02\x02\x02\u0AAC\u0AAA\x03\x02" +
		"\x02\x02\u0AAC\u0AAD\x03\x02\x02\x02\u0AAD\u0AB0\x03\x02\x02\x02\u0AAE" +
		"\u0AAC\x03\x02\x02\x02\u0AAF\u0AA8\x03\x02\x02\x02\u0AB0\u0AB1\x03\x02" +
		"\x02\x02\u0AB1\u0AAF\x03\x02\x02\x02\u0AB1\u0AB2\x03\x02\x02\x02\u0AB2" +
		"\xDB\x03\x02\x02\x02\u0AB3\u0AB4\x07p\x02\x02\u0AB4\u0AB5\x05\u010A\x86" +
		"\x02\u0AB5\u0AB9\x07\x8F\x02\x02\u0AB6\u0AB8\x07\xA4\x02\x02\u0AB7\u0AB6" +
		"\x03\x02\x02\x02\u0AB8\u0ABB\x03\x02\x02\x02\u0AB9\u0AB7\x03\x02\x02\x02" +
		"\u0AB9\u0ABA\x03\x02\x02\x02\u0ABA\u0AC3\x03\x02\x02\x02\u0ABB\u0AB9\x03" +
		"\x02\x02\x02\u0ABC\u0AC0\x05:\x1E\x02\u0ABD\u0ABF\x07\xA4\x02\x02\u0ABE" +
		"\u0ABD\x03\x02\x02\x02\u0ABF\u0AC2\x03\x02\x02\x02\u0AC0\u0ABE\x03\x02" +
		"\x02\x02\u0AC0\u0AC1\x03\x02\x02\x02\u0AC1\u0AC4\x03\x02\x02\x02\u0AC2" +
		"\u0AC0\x03\x02\x02\x02\u0AC3\u0ABC\x03\x02\x02\x02\u0AC4\u0AC5\x03\x02" +
		"\x02\x02\u0AC5\u0AC3\x03\x02\x02\x02\u0AC5\u0AC6\x03\x02\x02\x02\u0AC6" +
		"\xDD\x03\x02\x02\x02\u0AC7\u0AC8\x07q\x02\x02\u0AC8\u0AC9\x05\u010A\x86" +
		"\x02\u0AC9\u0ACD\x07\x8F\x02\x02\u0ACA\u0ACC\x07\xA4\x02\x02\u0ACB\u0ACA" +
		"\x03\x02\x02\x02\u0ACC\u0ACF\x03\x02\x02\x02\u0ACD\u0ACB\x03\x02\x02\x02" +
		"\u0ACD\u0ACE\x03\x02\x02\x02\u0ACE\u0AD7\x03\x02\x02\x02\u0ACF\u0ACD\x03" +
		"\x02\x02\x02\u0AD0\u0AD4\x05:\x1E\x02\u0AD1\u0AD3\x07\xA4\x02\x02\u0AD2" +
		"\u0AD1\x03\x02\x02\x02\u0AD3\u0AD6\x03\x02\x02\x02\u0AD4\u0AD2\x03\x02" +
		"\x02\x02\u0AD4\u0AD5\x03\x02\x02\x02\u0AD5\u0AD8\x03\x02\x02\x02\u0AD6" +
		"\u0AD4\x03\x02\x02\x02\u0AD7\u0AD0\x03\x02\x02\x02\u0AD8\u0AD9\x03\x02" +
		"\x02\x02\u0AD9\u0AD7\x03\x02\x02\x02\u0AD9\u0ADA\x03\x02\x02\x02\u0ADA" +
		"\xDF\x03\x02\x02\x02\u0ADB\u0ADC\x07r\x02\x02\u0ADC\u0ADD\x05\u010A\x86" +
		"\x02\u0ADD\u0AE1\x07\x8F\x02\x02\u0ADE\u0AE0\x07\xA4\x02\x02\u0ADF\u0ADE" +
		"\x03\x02\x02\x02\u0AE0\u0AE3\x03\x02\x02\x02\u0AE1\u0ADF\x03\x02\x02\x02" +
		"\u0AE1\u0AE2\x03\x02\x02\x02\u0AE2\u0AEB\x03\x02\x02\x02\u0AE3\u0AE1\x03" +
		"\x02\x02\x02\u0AE4\u0AE8\x05:\x1E\x02\u0AE5\u0AE7\x07\xA4\x02\x02\u0AE6" +
		"\u0AE5\x03\x02\x02\x02\u0AE7\u0AEA\x03\x02\x02\x02\u0AE8\u0AE6\x03\x02" +
		"\x02\x02\u0AE8\u0AE9\x03\x02\x02\x02\u0AE9\u0AEC\x03\x02\x02\x02\u0AEA" +
		"\u0AE8\x03\x02\x02\x02\u0AEB\u0AE4\x03\x02\x02\x02\u0AEC\u0AED\x03\x02" +
		"\x02\x02\u0AED\u0AEB\x03\x02\x02\x02\u0AED\u0AEE\x03\x02\x02\x02\u0AEE" +
		"\xE1\x03\x02\x02\x02\u0AEF\u0AF0\x07s\x02\x02\u0AF0\u0AF1\x05\u010A\x86" +
		"\x02\u0AF1\u0AF5\x07\x8F\x02\x02\u0AF2\u0AF4\x07\xA4\x02\x02\u0AF3\u0AF2" +
		"\x03\x02\x02\x02\u0AF4\u0AF7\x03\x02\x02\x02\u0AF5\u0AF3\x03\x02\x02\x02" +
		"\u0AF5\u0AF6\x03\x02\x02\x02\u0AF6\u0AFF\x03\x02\x02\x02\u0AF7\u0AF5\x03" +
		"\x02\x02\x02\u0AF8\u0AFC\x05:\x1E\x02\u0AF9\u0AFB\x07\xA4\x02\x02\u0AFA" +
		"\u0AF9\x03\x02\x02\x02\u0AFB\u0AFE\x03\x02\x02\x02\u0AFC\u0AFA\x03\x02" +
		"\x02\x02\u0AFC\u0AFD\x03\x02\x02\x02\u0AFD\u0B00\x03\x02\x02\x02\u0AFE" +
		"\u0AFC\x03\x02\x02\x02\u0AFF\u0AF8\x03\x02\x02\x02\u0B00\u0B01\x03\x02" +
		"\x02\x02\u0B01\u0AFF\x03\x02\x02\x02\u0B01\u0B02\x03\x02\x02\x02\u0B02" +
		"\xE3\x03\x02\x02\x02\u0B03\u0B04\x07t\x02\x02\u0B04\u0B05\x05\u010A\x86" +
		"\x02\u0B05\u0B09\x07\x8F\x02\x02\u0B06\u0B08\x07\xA4\x02\x02\u0B07\u0B06" +
		"\x03\x02\x02\x02\u0B08\u0B0B\x03\x02\x02\x02\u0B09\u0B07\x03\x02\x02\x02" +
		"\u0B09\u0B0A\x03\x02\x02\x02\u0B0A\u0B13\x03\x02\x02\x02\u0B0B\u0B09\x03" +
		"\x02\x02\x02\u0B0C\u0B10\x05:\x1E\x02\u0B0D\u0B0F\x07\xA4\x02\x02\u0B0E" +
		"\u0B0D\x03\x02\x02\x02\u0B0F\u0B12\x03\x02\x02\x02\u0B10\u0B0E\x03\x02" +
		"\x02\x02\u0B10\u0B11\x03\x02\x02\x02\u0B11\u0B14\x03\x02\x02\x02\u0B12" +
		"\u0B10\x03\x02\x02\x02\u0B13\u0B0C\x03\x02\x02\x02\u0B14\u0B15\x03\x02" +
		"\x02\x02\u0B15\u0B13\x03\x02\x02\x02\u0B15\u0B16\x03\x02\x02\x02\u0B16" +
		"\xE5\x03\x02\x02\x02\u0B17\u0B18\x07u\x02\x02\u0B18\u0B19\x05\u010A\x86" +
		"\x02\u0B19\u0B1D\x07\x8F\x02\x02\u0B1A\u0B1C\x07\xA4\x02\x02\u0B1B\u0B1A" +
		"\x03\x02\x02\x02\u0B1C\u0B1F\x03\x02\x02\x02\u0B1D\u0B1B\x03\x02\x02\x02" +
		"\u0B1D\u0B1E\x03\x02\x02\x02\u0B1E\u0B27\x03\x02\x02\x02\u0B1F\u0B1D\x03" +
		"\x02\x02\x02\u0B20\u0B24\x05:\x1E\x02\u0B21\u0B23\x07\xA4\x02\x02\u0B22" +
		"\u0B21\x03\x02\x02\x02\u0B23\u0B26\x03\x02\x02\x02\u0B24\u0B22\x03\x02" +
		"\x02\x02\u0B24\u0B25\x03\x02\x02\x02\u0B25\u0B28\x03\x02\x02\x02\u0B26" +
		"\u0B24\x03\x02\x02\x02\u0B27\u0B20\x03\x02\x02\x02\u0B28\u0B29\x03\x02" +
		"\x02\x02\u0B29\u0B27\x03\x02\x02\x02\u0B29\u0B2A\x03\x02\x02\x02\u0B2A" +
		"\xE7\x03\x02\x02\x02\u0B2B\u0B2C\x07v\x02\x02\u0B2C\u0B2D\x05\u010A\x86" +
		"\x02\u0B2D\u0B31\x07\x8F\x02\x02\u0B2E\u0B30\x07\xA4\x02\x02\u0B2F\u0B2E" +
		"\x03\x02\x02\x02\u0B30\u0B33\x03\x02\x02\x02\u0B31\u0B2F\x03\x02\x02\x02" +
		"\u0B31\u0B32\x03\x02\x02\x02\u0B32\u0B3B\x03\x02\x02\x02\u0B33\u0B31\x03" +
		"\x02\x02\x02\u0B34\u0B38\x05:\x1E\x02\u0B35\u0B37\x07\xA4\x02\x02\u0B36" +
		"\u0B35\x03\x02\x02\x02\u0B37\u0B3A\x03\x02\x02\x02\u0B38\u0B36\x03\x02" +
		"\x02\x02\u0B38\u0B39\x03\x02\x02\x02\u0B39\u0B3C\x03\x02\x02\x02\u0B3A" +
		"\u0B38\x03\x02\x02\x02\u0B3B\u0B34\x03\x02\x02\x02\u0B3C\u0B3D\x03\x02" +
		"\x02\x02\u0B3D\u0B3B\x03\x02\x02\x02\u0B3D\u0B3E\x03\x02\x02\x02\u0B3E" +
		"\xE9\x03\x02\x02\x02\u0B3F\u0B40\x07w\x02\x02\u0B40\u0B41\x05\u010A\x86" +
		"\x02\u0B41\u0B45\x07\x8F\x02\x02\u0B42\u0B44\x07\xA4\x02\x02\u0B43\u0B42" +
		"\x03\x02\x02\x02\u0B44\u0B47\x03\x02\x02\x02\u0B45\u0B43\x03\x02\x02\x02" +
		"\u0B45\u0B46\x03\x02\x02\x02\u0B46\u0B4F\x03\x02\x02\x02\u0B47\u0B45\x03" +
		"\x02\x02\x02\u0B48\u0B4C\x05:\x1E\x02\u0B49\u0B4B\x07\xA4\x02\x02\u0B4A" +
		"\u0B49\x03\x02\x02\x02\u0B4B\u0B4E\x03\x02\x02\x02\u0B4C\u0B4A\x03\x02" +
		"\x02\x02\u0B4C\u0B4D\x03\x02\x02\x02\u0B4D\u0B50\x03\x02\x02\x02\u0B4E" +
		"\u0B4C\x03\x02\x02\x02\u0B4F\u0B48\x03\x02\x02\x02\u0B50\u0B51\x03\x02" +
		"\x02\x02\u0B51\u0B4F\x03\x02\x02\x02\u0B51\u0B52\x03\x02\x02\x02\u0B52" +
		"\xEB\x03\x02\x02\x02\u0B53\u0B54\x07x\x02\x02\u0B54\u0B55\x05\u010A\x86" +
		"\x02\u0B55\u0B59\x07\x8F\x02\x02\u0B56\u0B58\x07\xA4\x02\x02\u0B57\u0B56" +
		"\x03\x02\x02\x02\u0B58\u0B5B\x03\x02\x02\x02\u0B59\u0B57\x03\x02\x02\x02" +
		"\u0B59\u0B5A\x03\x02\x02\x02\u0B5A\u0B63\x03\x02\x02\x02\u0B5B\u0B59\x03" +
		"\x02\x02\x02\u0B5C\u0B60\x05:\x1E\x02\u0B5D\u0B5F\x07\xA4\x02\x02\u0B5E" +
		"\u0B5D\x03\x02\x02\x02\u0B5F\u0B62\x03\x02\x02\x02\u0B60\u0B5E\x03\x02" +
		"\x02\x02\u0B60\u0B61\x03\x02\x02\x02\u0B61\u0B64\x03\x02\x02\x02\u0B62" +
		"\u0B60\x03\x02\x02\x02\u0B63\u0B5C\x03\x02\x02\x02\u0B64\u0B65\x03\x02" +
		"\x02\x02\u0B65\u0B63\x03\x02\x02\x02\u0B65\u0B66\x03\x02\x02\x02\u0B66" +
		"\xED\x03\x02\x02\x02\u0B67\u0B68\x07y\x02\x02\u0B68\u0B69\x05\u010A\x86" +
		"\x02\u0B69\u0B6D\x07\x8F\x02\x02\u0B6A\u0B6C\x07\xA4\x02\x02\u0B6B\u0B6A" +
		"\x03\x02\x02\x02\u0B6C\u0B6F\x03\x02\x02\x02\u0B6D\u0B6B\x03\x02\x02\x02" +
		"\u0B6D\u0B6E\x03\x02\x02\x02\u0B6E\u0B77\x03\x02\x02\x02\u0B6F\u0B6D\x03" +
		"\x02\x02\x02\u0B70\u0B74\x05:\x1E\x02\u0B71\u0B73\x07\xA4\x02\x02\u0B72" +
		"\u0B71\x03\x02\x02\x02\u0B73\u0B76\x03\x02\x02\x02\u0B74\u0B72\x03\x02" +
		"\x02\x02\u0B74\u0B75\x03\x02\x02\x02\u0B75\u0B78\x03\x02\x02\x02\u0B76" +
		"\u0B74\x03\x02\x02\x02\u0B77\u0B70\x03\x02\x02\x02\u0B78\u0B79\x03\x02" +
		"\x02\x02\u0B79\u0B77\x03\x02\x02\x02\u0B79\u0B7A\x03\x02\x02\x02\u0B7A" +
		"\xEF\x03\x02\x02\x02\u0B7B\u0B7C\x07z\x02\x02\u0B7C\u0B7D\x05\u010A\x86" +
		"\x02\u0B7D\u0B81\x07\x8F\x02\x02\u0B7E\u0B80\x07\xA4\x02\x02\u0B7F\u0B7E" +
		"\x03\x02\x02\x02\u0B80\u0B83\x03\x02\x02\x02\u0B81\u0B7F\x03\x02\x02\x02" +
		"\u0B81\u0B82\x03\x02\x02\x02\u0B82\u0B8B\x03\x02\x02\x02\u0B83\u0B81\x03" +
		"\x02\x02\x02\u0B84\u0B88\x05:\x1E\x02\u0B85\u0B87\x07\xA4\x02\x02\u0B86" +
		"\u0B85\x03\x02\x02\x02\u0B87\u0B8A\x03\x02\x02\x02\u0B88\u0B86\x03\x02" +
		"\x02\x02\u0B88\u0B89\x03\x02\x02\x02\u0B89\u0B8C\x03\x02\x02\x02\u0B8A" +
		"\u0B88\x03\x02\x02\x02\u0B8B\u0B84\x03\x02\x02\x02\u0B8C\u0B8D\x03\x02" +
		"\x02\x02\u0B8D\u0B8B\x03\x02\x02\x02\u0B8D\u0B8E\x03\x02\x02\x02\u0B8E" +
		"\xF1\x03\x02\x02\x02\u0B8F\u0B90\x07\x18\x02\x02\u0B90\u0B91\x05\u010A" +
		"\x86\x02\u0B91\u0B95\x07\x8F\x02\x02\u0B92\u0B94\x07\xA4\x02\x02\u0B93" +
		"\u0B92\x03\x02\x02\x02\u0B94\u0B97\x03\x02\x02\x02\u0B95\u0B93\x03\x02" +
		"\x02\x02\u0B95\u0B96\x03\x02\x02\x02\u0B96\u0B9F\x03\x02\x02\x02\u0B97" +
		"\u0B95\x03\x02\x02\x02\u0B98\u0B9C\x05:\x1E\x02\u0B99\u0B9B\x07\xA4\x02" +
		"\x02\u0B9A\u0B99\x03\x02\x02\x02\u0B9B\u0B9E\x03\x02\x02\x02\u0B9C\u0B9A" +
		"\x03\x02\x02\x02\u0B9C\u0B9D\x03\x02\x02\x02\u0B9D\u0BA0\x03\x02\x02\x02" +
		"\u0B9E\u0B9C\x03\x02\x02\x02\u0B9F\u0B98\x03\x02\x02\x02\u0BA0\u0BA1\x03" +
		"\x02\x02\x02\u0BA1\u0B9F\x03\x02\x02\x02\u0BA1\u0BA2\x03\x02\x02\x02\u0BA2" +
		"\xF3\x03\x02\x02\x02\u0BA3\u0BA4\x07 \x02\x02\u0BA4\u0BA5\x05\u010A\x86" +
		"\x02\u0BA5\u0BB0\x07\x8F\x02\x02\u0BA6\u0BA7\t\x07\x02\x02\u0BA7\u0BAD" +
		"\x05\xF6|\x02\u0BA8\u0BA9\x05\u0186\xC4\x02\u0BA9\u0BAA\x05\xF6|\x02\u0BAA" +
		"\u0BAC\x03\x02\x02\x02\u0BAB\u0BA8\x03\x02\x02\x02\u0BAC\u0BAF\x03\x02" +
		"\x02\x02\u0BAD\u0BAB\x03\x02\x02\x02\u0BAD\u0BAE\x03\x02\x02\x02\u0BAE" +
		"\u0BB1\x03\x02\x02\x02\u0BAF\u0BAD\x03\x02\x02\x02\u0BB0\u0BA6\x03\x02" +
		"\x02\x02\u0BB1\u0BB2\x03\x02\x02\x02\u0BB2\u0BB0\x03\x02\x02\x02\u0BB2" +
		"\u0BB3\x03\x02\x02\x02\u0BB3\u0BB4\x03\x02\x02\x02\u0BB4\u0BB8\t\x07\x02" +
		"\x02\u0BB5\u0BB7\x07\xA4\x02\x02\u0BB6\u0BB5\x03\x02\x02\x02\u0BB7\u0BBA" +
		"\x03\x02\x02\x02\u0BB8\u0BB6\x03\x02\x02\x02\u0BB8\u0BB9\x03\x02\x02\x02" +
		"\u0BB9\u0BC8\x03\x02\x02\x02\u0BBA\u0BB8\x03\x02\x02\x02\u0BBB\u0BC5\x05" +
		"L\'\x02\u0BBC\u0BBE\x07\xA4\x02\x02\u0BBD\u0BBC\x03\x02\x02\x02\u0BBE" +
		"\u0BC1\x03\x02\x02\x02\u0BBF\u0BBD\x03\x02\x02\x02\u0BBF\u0BC0\x03\x02" +
		"\x02\x02\u0BC0\u0BC2\x03\x02\x02\x02\u0BC1\u0BBF\x03\x02\x02\x02\u0BC2" +
		"\u0BC4\x05L\'\x02\u0BC3\u0BBF\x03\x02\x02\x02\u0BC4\u0BC7\x03\x02\x02" +
		"\x02\u0BC5\u0BC3\x03\x02\x02\x02\u0BC5\u0BC6\x03\x02\x02\x02\u0BC6\u0BC9" +
		"\x03\x02\x02\x02\u0BC7\u0BC5\x03\x02\x02\x02\u0BC8\u0BBB\x03\x02\x02\x02" +
		"\u0BC8\u0BC9\x03\x02\x02\x02\u0BC9\xF5\x03\x02\x02\x02\u0BCA\u0BD2\x05" +
		"\u0188\xC5\x02\u0BCB\u0BD2\x05\u0166\xB4\x02\u0BCC\u0BD2\x05\u0146\xA4" +
		"\x02\u0BCD\u0BD2\x05<\x1F\x02\u0BCE\u0BD2\x05@!\x02\u0BCF\u0BD2\x05B\"" +
		"\x02\u0BD0\u0BD2\x05D#\x02\u0BD1\u0BCA\x03\x02\x02\x02\u0BD1\u0BCB\x03" +
		"\x02\x02\x02\u0BD1\u0BCC\x03\x02\x02\x02\u0BD1\u0BCD\x03\x02\x02\x02\u0BD1" +
		"\u0BCE\x03\x02\x02\x02\u0BD1\u0BCF\x03\x02\x02\x02\u0BD1\u0BD0\x03\x02" +
		"\x02\x02\u0BD2\u0BD3\x03\x02\x02\x02\u0BD3\u0BD1\x03\x02\x02\x02\u0BD3" +
		"\u0BD4\x03\x02\x02\x02\u0BD4\xF7\x03\x02\x02\x02\u0BD5\u0BD6\x07\"\x02" +
		"\x02\u0BD6\u0BD7\x05\u010A\x86\x02\u0BD7\u0BDB\x07\x8F\x02\x02\u0BD8\u0BDA" +
		"\x07\xA4\x02\x02\u0BD9\u0BD8\x03\x02\x02\x02\u0BDA\u0BDD\x03\x02\x02\x02" +
		"\u0BDB\u0BD9\x03\x02\x02\x02\u0BDB\u0BDC\x03\x02\x02\x02\u0BDC\u0BE7\x03" +
		"\x02\x02\x02\u0BDD\u0BDB\x03\x02\x02\x02\u0BDE\u0BE2\x05:\x1E\x02\u0BDF" +
		"\u0BE1\x07\xA4\x02\x02\u0BE0\u0BDF\x03\x02\x02\x02\u0BE1\u0BE4\x03\x02" +
		"\x02\x02\u0BE2\u0BE0\x03\x02\x02\x02\u0BE2\u0BE3\x03\x02\x02\x02\u0BE3" +
		"\u0BE6\x03\x02\x02\x02\u0BE4\u0BE2\x03\x02\x02\x02\u0BE5\u0BDE\x03\x02" +
		"\x02\x02\u0BE6\u0BE9\x03\x02\x02\x02\u0BE7\u0BE5\x03\x02\x02\x02\u0BE7" +
		"\u0BE8\x03\x02\x02\x02\u0BE8\u0BF2\x03\x02\x02\x02\u0BE9\u0BE7\x03\x02" +
		"\x02\x02\u0BEA\u0BEB\t\x07\x02\x02\u0BEB\u0BEE\x05\u017E\xC0\x02\u0BEC" +
		"\u0BED\x07\xA4\x02\x02\u0BED\u0BEF\x05\xFA~\x02\u0BEE\u0BEC";
	private static readonly _serializedATNSegment6: string =
		"\x03\x02\x02\x02\u0BEF\u0BF0\x03\x02\x02\x02\u0BF0\u0BEE\x03\x02\x02\x02" +
		"\u0BF0\u0BF1\x03\x02\x02\x02\u0BF1\u0BF3\x03\x02\x02\x02\u0BF2\u0BEA\x03" +
		"\x02\x02\x02\u0BF3\u0BF4\x03\x02\x02\x02\u0BF4\u0BF2\x03\x02\x02\x02\u0BF4" +
		"\u0BF5\x03\x02\x02\x02\u0BF5\u0BF6\x03\x02\x02\x02\u0BF6\u0BFA\t\x07\x02" +
		"\x02\u0BF7\u0BF9\x07\xA4\x02\x02\u0BF8\u0BF7\x03\x02\x02\x02\u0BF9\u0BFC" +
		"\x03\x02\x02\x02\u0BFA\u0BF8\x03\x02\x02\x02\u0BFA\u0BFB\x03\x02\x02\x02" +
		"\u0BFB\u0C0A\x03\x02\x02\x02\u0BFC\u0BFA\x03\x02\x02\x02\u0BFD\u0C07\x05" +
		"L\'\x02\u0BFE\u0C00\x07\xA4\x02\x02\u0BFF\u0BFE\x03\x02\x02\x02\u0C00" +
		"\u0C03\x03\x02\x02\x02\u0C01\u0BFF\x03\x02\x02\x02\u0C01\u0C02\x03\x02" +
		"\x02\x02\u0C02\u0C04\x03\x02\x02\x02\u0C03\u0C01\x03\x02\x02\x02\u0C04" +
		"\u0C06\x05L\'\x02\u0C05\u0C01\x03\x02\x02\x02\u0C06\u0C09\x03\x02\x02" +
		"\x02\u0C07\u0C05\x03\x02\x02\x02\u0C07\u0C08\x03\x02\x02\x02\u0C08\u0C0B" +
		"\x03\x02\x02\x02\u0C09\u0C07\x03\x02\x02\x02\u0C0A\u0BFD\x03\x02\x02\x02" +
		"\u0C0A\u0C0B\x03\x02\x02\x02\u0C0B\xF9\x03\x02\x02\x02\u0C0C\u0C0D\x07" +
		"\x80\x02\x02\u0C0D\u0C0E\x05\u017E\xC0\x02\u0C0E\u0C10\x07\x8F\x02\x02" +
		"\u0C0F\u0C11\x05\u0108\x85\x02\u0C10\u0C0F\x03\x02\x02\x02\u0C10\u0C11" +
		"\x03\x02\x02\x02\u0C11\xFB\x03\x02\x02\x02\u0C12\u0C13\x07#\x02\x02\u0C13" +
		"\u0C14\x05\u010A\x86\x02\u0C14\u0C18\x07\x8F\x02\x02\u0C15\u0C17\x07\xA4" +
		"\x02\x02\u0C16\u0C15\x03\x02\x02\x02\u0C17\u0C1A\x03\x02\x02\x02\u0C18" +
		"\u0C16\x03\x02\x02\x02\u0C18\u0C19\x03\x02\x02\x02\u0C19\u0C24\x03\x02" +
		"\x02\x02\u0C1A\u0C18\x03\x02\x02\x02\u0C1B\u0C1F\x05:\x1E\x02\u0C1C\u0C1E" +
		"\x07\xA4\x02\x02\u0C1D\u0C1C\x03\x02\x02\x02\u0C1E\u0C21\x03\x02\x02\x02" +
		"\u0C1F\u0C1D\x03\x02\x02\x02\u0C1F\u0C20\x03\x02\x02\x02\u0C20\u0C23\x03" +
		"\x02\x02\x02\u0C21\u0C1F\x03\x02\x02\x02\u0C22\u0C1B\x03\x02\x02\x02\u0C23" +
		"\u0C26\x03\x02\x02\x02\u0C24\u0C22\x03\x02\x02\x02\u0C24\u0C25\x03\x02" +
		"\x02\x02\u0C25\u0C36\x03\x02\x02\x02\u0C26\u0C24\x03\x02\x02\x02\u0C27" +
		"\u0C29\t\x07\x02\x02\u0C28\u0C2A\x05\u017E\xC0\x02\u0C29\u0C28\x03\x02" +
		"\x02\x02\u0C29\u0C2A\x03\x02\x02\x02\u0C2A\u0C32\x03\x02\x02\x02\u0C2B" +
		"\u0C2D\x07\xA4\x02\x02\u0C2C\u0C2B\x03\x02\x02\x02\u0C2D\u0C30\x03\x02" +
		"\x02\x02\u0C2E\u0C2C\x03\x02\x02\x02\u0C2E\u0C2F\x03\x02\x02\x02\u0C2F" +
		"\u0C31\x03\x02\x02\x02\u0C30\u0C2E\x03\x02\x02\x02\u0C31\u0C33\x05\xFA" +
		"~\x02\u0C32\u0C2E\x03\x02\x02\x02\u0C33\u0C34\x03\x02\x02\x02\u0C34\u0C32" +
		"\x03\x02\x02\x02\u0C34\u0C35\x03\x02\x02\x02\u0C35\u0C37\x03\x02\x02\x02" +
		"\u0C36\u0C27\x03\x02\x02\x02\u0C37\u0C38\x03\x02\x02\x02\u0C38\u0C36\x03" +
		"\x02\x02\x02\u0C38\u0C39\x03\x02\x02\x02\u0C39\u0C3A\x03\x02\x02\x02\u0C3A" +
		"\u0C3B\t\x07\x02\x02\u0C3B\xFD\x03\x02\x02\x02\u0C3C\u0C3D\x07$\x02\x02" +
		"\u0C3D\u0C3E\x05\u010A\x86\x02\u0C3E\u0C42\x07\x8F\x02\x02\u0C3F\u0C41" +
		"\x07\xA4\x02\x02\u0C40\u0C3F\x03\x02\x02\x02\u0C41\u0C44\x03\x02\x02\x02" +
		"\u0C42\u0C40\x03\x02\x02\x02\u0C42\u0C43\x03\x02\x02\x02\u0C43\u0C4E\x03" +
		"\x02\x02\x02\u0C44\u0C42\x03\x02\x02\x02\u0C45\u0C49\x05:\x1E\x02\u0C46" +
		"\u0C48\x07\xA4\x02\x02\u0C47\u0C46\x03\x02\x02\x02\u0C48\u0C4B\x03\x02" +
		"\x02\x02\u0C49\u0C47\x03\x02\x02\x02\u0C49\u0C4A\x03\x02\x02\x02\u0C4A" +
		"\u0C4D\x03\x02\x02\x02\u0C4B\u0C49\x03\x02\x02\x02\u0C4C\u0C45\x03\x02" +
		"\x02\x02\u0C4D\u0C50\x03\x02\x02\x02\u0C4E\u0C4C\x03\x02\x02\x02\u0C4E" +
		"\u0C4F\x03\x02\x02\x02\u0C4F\u0C59\x03\x02\x02\x02\u0C50\u0C4E\x03\x02" +
		"\x02\x02\u0C51\u0C52\t\x07\x02\x02\u0C52\u0C55\x05\u017E\xC0\x02\u0C53" +
		"\u0C54\x07\xA4\x02\x02\u0C54\u0C56\x05\xFA~\x02\u0C55\u0C53\x03\x02\x02" +
		"\x02\u0C56\u0C57\x03\x02\x02\x02\u0C57\u0C55\x03\x02\x02\x02\u0C57\u0C58" +
		"\x03\x02\x02\x02\u0C58\u0C5A\x03\x02\x02\x02\u0C59\u0C51\x03\x02\x02\x02" +
		"\u0C5A\u0C5B\x03\x02\x02\x02\u0C5B\u0C59\x03\x02\x02\x02\u0C5B\u0C5C\x03" +
		"\x02\x02\x02\u0C5C\u0C5D\x03\x02\x02\x02\u0C5D\u0C5E\t\x07\x02\x02\u0C5E" +
		"\xFF\x03\x02\x02\x02\u0C5F\u0C60\x07%\x02\x02\u0C60\u0C61\x05\u010A\x86" +
		"\x02\u0C61\u0C65\x07\x8F\x02\x02\u0C62\u0C64\x07\xA4\x02\x02\u0C63\u0C62" +
		"\x03\x02\x02\x02\u0C64\u0C67\x03\x02\x02\x02\u0C65\u0C63\x03\x02\x02\x02" +
		"\u0C65\u0C66\x03\x02\x02\x02\u0C66\u0C71\x03\x02\x02\x02\u0C67\u0C65\x03" +
		"\x02\x02\x02\u0C68\u0C6C\x05:\x1E\x02\u0C69\u0C6B\x07\xA4\x02\x02\u0C6A" +
		"\u0C69\x03\x02\x02\x02\u0C6B\u0C6E\x03\x02\x02\x02\u0C6C\u0C6A\x03\x02" +
		"\x02\x02\u0C6C\u0C6D\x03\x02\x02\x02\u0C6D\u0C70\x03\x02\x02\x02\u0C6E" +
		"\u0C6C\x03\x02\x02\x02\u0C6F\u0C68\x03\x02\x02\x02\u0C70\u0C73\x03\x02" +
		"\x02\x02\u0C71\u0C6F\x03\x02\x02\x02\u0C71\u0C72\x03\x02\x02\x02\u0C72" +
		"\u0C7C\x03\x02\x02\x02\u0C73\u0C71\x03\x02\x02\x02\u0C74\u0C75\t\x07\x02" +
		"\x02\u0C75\u0C78\x05\u017E\xC0\x02\u0C76\u0C77\x07\xA4\x02\x02\u0C77\u0C79" +
		"\x05\xFA~\x02\u0C78\u0C76\x03\x02\x02\x02\u0C79\u0C7A\x03\x02\x02\x02" +
		"\u0C7A\u0C78\x03\x02\x02\x02\u0C7A\u0C7B\x03\x02\x02\x02\u0C7B\u0C7D\x03" +
		"\x02\x02\x02\u0C7C\u0C74\x03\x02\x02\x02\u0C7D\u0C7E\x03\x02\x02\x02\u0C7E" +
		"\u0C7C\x03\x02\x02\x02\u0C7E\u0C7F\x03\x02\x02\x02\u0C7F\u0C80\x03\x02" +
		"\x02\x02\u0C80\u0C81\t\x07\x02\x02\u0C81\u0101\x03\x02\x02\x02\u0C82\u0C83" +
		"\x07&\x02\x02\u0C83\u0C84\x05\u010A\x86\x02\u0C84\u0C88\x07\x8F\x02\x02" +
		"\u0C85\u0C87\x07\xA4\x02\x02\u0C86\u0C85\x03\x02\x02\x02\u0C87\u0C8A\x03" +
		"\x02\x02\x02\u0C88\u0C86\x03\x02\x02\x02\u0C88\u0C89\x03\x02\x02\x02\u0C89" +
		"\u0C94\x03\x02\x02\x02\u0C8A\u0C88\x03\x02\x02\x02\u0C8B\u0C8F\x05:\x1E" +
		"\x02\u0C8C\u0C8E\x07\xA4\x02\x02\u0C8D\u0C8C\x03\x02\x02\x02\u0C8E\u0C91" +
		"\x03\x02\x02\x02\u0C8F\u0C8D\x03\x02\x02\x02\u0C8F\u0C90\x03\x02\x02\x02" +
		"\u0C90\u0C93\x03\x02\x02\x02\u0C91\u0C8F\x03\x02\x02\x02\u0C92\u0C8B\x03" +
		"\x02\x02\x02\u0C93\u0C96\x03\x02\x02\x02\u0C94\u0C92\x03\x02\x02\x02\u0C94" +
		"\u0C95\x03\x02\x02\x02\u0C95\u0C9F\x03\x02\x02\x02\u0C96\u0C94\x03\x02" +
		"\x02\x02\u0C97\u0C98\t\x07\x02\x02\u0C98\u0C9B\x05\u017E\xC0\x02\u0C99" +
		"\u0C9A\x07\xA4\x02\x02\u0C9A\u0C9C\x05\xFA~\x02\u0C9B\u0C99\x03\x02\x02" +
		"\x02\u0C9C\u0C9D\x03\x02\x02\x02\u0C9D\u0C9B\x03\x02\x02\x02\u0C9D\u0C9E" +
		"\x03\x02\x02\x02\u0C9E\u0CA0\x03\x02\x02\x02\u0C9F\u0C97\x03\x02\x02\x02" +
		"\u0CA0\u0CA1\x03\x02\x02\x02\u0CA1\u0C9F\x03\x02\x02\x02\u0CA1\u0CA2\x03" +
		"\x02\x02\x02\u0CA2\u0CA3\x03\x02\x02\x02\u0CA3\u0CA4\t\x07\x02\x02\u0CA4" +
		"\u0103\x03\x02\x02\x02\u0CA5\u0CA6\x07!\x02\x02\u0CA6\u0CA7\x05\u010A" +
		"\x86\x02\u0CA7\u0CAB\x07\x8F\x02\x02\u0CA8\u0CAA\x07\xA4\x02\x02\u0CA9" +
		"\u0CA8\x03\x02\x02\x02\u0CAA\u0CAD\x03\x02\x02\x02\u0CAB\u0CA9\x03\x02" +
		"\x02\x02\u0CAB\u0CAC\x03\x02\x02\x02\u0CAC\u0CB7\x03\x02\x02\x02\u0CAD" +
		"\u0CAB\x03\x02\x02\x02\u0CAE\u0CB2\x05:\x1E\x02\u0CAF\u0CB1\x07\xA4\x02" +
		"\x02\u0CB0\u0CAF\x03\x02\x02\x02\u0CB1\u0CB4\x03\x02\x02\x02\u0CB2\u0CB0" +
		"\x03\x02\x02\x02\u0CB2\u0CB3\x03\x02\x02\x02\u0CB3\u0CB6\x03\x02\x02\x02" +
		"\u0CB4\u0CB2\x03\x02\x02\x02\u0CB5\u0CAE\x03\x02\x02\x02\u0CB6\u0CB9\x03" +
		"\x02\x02\x02\u0CB7\u0CB5\x03\x02\x02\x02\u0CB7\u0CB8\x03\x02\x02\x02\u0CB8" +
		"\u0CC7\x03\x02\x02\x02\u0CB9\u0CB7\x03\x02\x02\x02\u0CBA\u0CBB\t\x07\x02" +
		"\x02\u0CBB\u0CC3\x05\u0106\x84\x02\u0CBC\u0CBE\x07\xA4\x02\x02\u0CBD\u0CBC" +
		"\x03\x02\x02\x02\u0CBE\u0CC1\x03\x02\x02\x02\u0CBF\u0CBD\x03\x02\x02\x02" +
		"\u0CBF\u0CC0\x03\x02\x02\x02\u0CC0\u0CC2\x03\x02\x02\x02\u0CC1\u0CBF\x03" +
		"\x02\x02\x02\u0CC2\u0CC4\x05\xFA~\x02\u0CC3\u0CBF\x03\x02\x02\x02\u0CC4" +
		"\u0CC5\x03\x02\x02\x02\u0CC5\u0CC3\x03\x02\x02\x02\u0CC5\u0CC6\x03\x02" +
		"\x02\x02\u0CC6\u0CC8\x03\x02\x02\x02\u0CC7\u0CBA\x03\x02\x02\x02\u0CC8" +
		"\u0CC9\x03\x02\x02\x02\u0CC9\u0CC7\x03\x02\x02\x02\u0CC9\u0CCA\x03\x02" +
		"\x02\x02\u0CCA\u0CCB\x03\x02\x02\x02\u0CCB\u0CCF\t\x07\x02\x02\u0CCC\u0CCE" +
		"\x07\xA4\x02\x02\u0CCD\u0CCC\x03\x02\x02\x02\u0CCE\u0CD1\x03\x02\x02\x02" +
		"\u0CCF\u0CCD\x03\x02\x02\x02\u0CCF\u0CD0\x03\x02\x02\x02\u0CD0\u0CDF\x03" +
		"\x02\x02\x02\u0CD1\u0CCF\x03\x02\x02\x02\u0CD2\u0CDC\x05L\'\x02\u0CD3" +
		"\u0CD5\x07\xA4\x02\x02\u0CD4\u0CD3\x03\x02\x02\x02\u0CD5\u0CD8\x03\x02" +
		"\x02\x02\u0CD6\u0CD4\x03\x02\x02\x02\u0CD6\u0CD7\x03\x02\x02\x02\u0CD7" +
		"\u0CD9\x03\x02\x02\x02\u0CD8\u0CD6\x03\x02\x02\x02\u0CD9\u0CDB\x05L\'" +
		"\x02\u0CDA\u0CD6\x03\x02\x02\x02\u0CDB\u0CDE\x03\x02\x02\x02\u0CDC\u0CDA" +
		"\x03\x02\x02\x02\u0CDC\u0CDD\x03\x02\x02\x02\u0CDD\u0CE0\x03\x02\x02\x02" +
		"\u0CDE\u0CDC\x03\x02\x02\x02\u0CDF\u0CD2\x03\x02\x02\x02\u0CDF\u0CE0\x03" +
		"\x02\x02\x02\u0CE0\u0105\x03\x02\x02\x02\u0CE1\u0CE3\n\b\x02\x02\u0CE2" +
		"\u0CE1\x03\x02\x02\x02\u0CE3\u0CE4\x03\x02\x02\x02\u0CE4\u0CE2\x03\x02" +
		"\x02\x02\u0CE4\u0CE5\x03\x02\x02\x02\u0CE5\u0107\x03\x02\x02\x02\u0CE6" +
		"\u0CE7\x07\xB5\x02\x02\u0CE7\u0CE8\x07\xA2\x02\x02\u0CE8\u0CE9\x07\x8F" +
		"\x02\x02\u0CE9\u0109\x03\x02\x02\x02\u0CEA\u0CEC\x05\u010C\x87\x02\u0CEB" +
		"\u0CEA\x03\x02\x02\x02\u0CEC\u0CEF\x03\x02\x02\x02\u0CED\u0CEB\x03\x02" +
		"\x02\x02\u0CED\u0CEE\x03\x02\x02\x02\u0CEE\u0CF4\x03\x02\x02\x02\u0CEF" +
		"\u0CED\x03\x02\x02\x02\u0CF0\u0CF3\x07\xEC\x02\x02\u0CF1\u0CF3\x05\u010E" +
		"\x88\x02\u0CF2\u0CF0\x03\x02\x02\x02\u0CF2\u0CF1\x03\x02\x02\x02\u0CF3" +
		"\u0CF6\x03\x02\x02\x02\u0CF4\u0CF2\x03\x02\x02\x02\u0CF4\u0CF5\x03\x02" +
		"\x02\x02\u0CF5\u010B\x03\x02\x02\x02\u0CF6\u0CF4\x03\x02\x02\x02\u0CF7" +
		"\u0CF8\t\t\x02\x02\u0CF8\u010D\x03\x02\x02\x02\u0CF9\u0D03\x05\u0112\x8A" +
		"\x02\u0CFA\u0D03\x05\u014A\xA6\x02\u0CFB\u0D03\x05\u0114\x8B\x02\u0CFC" +
		"\u0D03\x05\u0116\x8C\x02\u0CFD\u0D03\x05\u0118\x8D\x02\u0CFE\u0D03\x05" +
		"\u011A\x8E\x02\u0CFF\u0D03\x05\u011C\x8F\x02\u0D00\u0D03\x05\u011E\x90" +
		"\x02\u0D01\u0D03\x07\xCD\x02\x02\u0D02\u0CF9\x03\x02\x02\x02\u0D02\u0CFA" +
		"\x03\x02\x02\x02\u0D02\u0CFB\x03\x02\x02\x02\u0D02\u0CFC\x03\x02\x02\x02" +
		"\u0D02\u0CFD\x03\x02\x02\x02\u0D02\u0CFE\x03\x02\x02\x02\u0D02\u0CFF\x03" +
		"\x02\x02\x02\u0D02\u0D00\x03\x02\x02\x02\u0D02\u0D01\x03\x02\x02\x02\u0D03" +
		"\u010F\x03\x02\x02\x02\u0D04\u0D09\x07\xEA\x02\x02\u0D05\u0D09\x07\xEB" +
		"\x02\x02\u0D06\u0D09\x07\xEC\x02\x02\u0D07\u0D09\x03\x02\x02\x02\u0D08" +
		"\u0D04\x03\x02\x02\x02\u0D08\u0D05\x03\x02\x02\x02\u0D08\u0D06\x03\x02" +
		"\x02\x02\u0D08\u0D07\x03\x02\x02\x02\u0D09\u0111\x03\x02\x02\x02\u0D0A" +
		"\u0D0D\x07\xC4\x02\x02\u0D0B\u0D0E\x07|\x02\x02\u0D0C\u0D0E\x07\xFC\x02" +
		"\x02\u0D0D\u0D0B\x03\x02\x02\x02\u0D0D\u0D0C\x03\x02\x02\x02\u0D0D\u0D0E" +
		"\x03\x02\x02\x02\u0D0E\u0D19\x03\x02\x02\x02\u0D0F\u0D11\x07\xDB\x02\x02" +
		"\u0D10\u0D12\x07|\x02\x02\u0D11\u0D10\x03\x02\x02\x02\u0D11\u0D12\x03" +
		"\x02\x02\x02\u0D12\u0D19\x03\x02\x02\x02\u0D13\u0D15\x07\xC5\x02\x02\u0D14" +
		"\u0D16\x07|\x02\x02\u0D15\u0D14\x03\x02\x02\x02\u0D15\u0D16\x03\x02\x02" +
		"\x02\u0D16\u0D19\x03\x02\x02\x02\u0D17\u0D19\x07\xC6\x02\x02\u0D18\u0D0A" +
		"\x03\x02\x02\x02\u0D18\u0D0F\x03\x02\x02\x02\u0D18\u0D13\x03\x02\x02\x02" +
		"\u0D18\u0D17\x03\x02\x02\x02\u0D19\u0113\x03\x02\x02\x02\u0D1A\u0D1D\t" +
		"\n\x02\x02\u0D1B\u0D1C\x07\x90\x02\x02\u0D1C\u0D1E\x07~\x02\x02\u0D1D" +
		"\u0D1B\x03\x02\x02\x02\u0D1D\u0D1E\x03\x02\x02\x02\u0D1E\u0115\x03\x02" +
		"\x02\x02\u0D1F\u0D20\t\v\x02\x02\u0D20\u0117\x03\x02\x02\x02\u0D21\u0D22" +
		"\t\f\x02\x02\u0D22\u0119\x03\x02\x02\x02\u0D23\u0D24\t\r\x02\x02\u0D24" +
		"\u011B\x03\x02\x02\x02\u0D25\u0D26\t\x0E\x02\x02\u0D26\u011D\x03\x02\x02" +
		"\x02\u0D27\u0D28\t\x0F\x02\x02\u0D28\u011F\x03\x02\x02\x02\u0D29\u0D2A" +
		"\t\x10\x02\x02\u0D2A\u0121\x03\x02\x02\x02\u0D2B\u0D2C\t\x11\x02\x02\u0D2C" +
		"\u0123\x03\x02\x02\x02\u0D2D\u0D2E\t\x12\x02\x02\u0D2E\u0125\x03\x02\x02" +
		"\x02\u0D2F\u0D30\t\x13\x02\x02\u0D30\u0127\x03\x02\x02\x02\u0D31\u0D34" +
		"\x07\xD2\x02\x02\u0D32\u0D33\x07\x90\x02\x02\u0D33\u0D35\x07~\x02\x02" +
		"\u0D34\u0D32\x03\x02\x02\x02\u0D34\u0D35\x03\x02\x02\x02\u0D35\u0D3C\x03" +
		"\x02\x02\x02\u0D36\u0D39\x07\xE4\x02\x02\u0D37\u0D38\x07\x90\x02\x02\u0D38" +
		"\u0D3A\x07~\x02\x02\u0D39\u0D37\x03\x02\x02\x02\u0D39\u0D3A\x03\x02\x02" +
		"\x02\u0D3A\u0D3C\x03\x02\x02\x02\u0D3B\u0D31\x03\x02\x02\x02\u0D3B\u0D36" +
		"\x03\x02\x02\x02\u0D3C\u0129\x03\x02\x02\x02\u0D3D\u0D3E\t\x14\x02\x02" +
		"\u0D3E\u012B\x03\x02\x02\x02\u0D3F\u0D40\x05\u0120\x91\x02\u0D40\u0D41" +
		"\x07\x90\x02\x02\u0D41\u0D42\x05\u0152\xAA\x02\u0D42\u0D43\x07\x8F\x02" +
		"\x02\u0D43\u0D46\x03\x02\x02\x02\u0D44\u0D46\x07\xA0\x02\x02\u0D45\u0D3F" +
		"\x03\x02\x02\x02\u0D45\u0D44\x03\x02\x02\x02\u0D46\u012D\x03\x02\x02\x02" +
		"\u0D47\u0D48\x05\u0122\x92\x02\u0D48\u0D49\x07\x90\x02\x02\u0D49\u0D4A" +
		"\x05\u0152\xAA\x02\u0D4A\u0D4F\x07\x8F\x02\x02\u0D4B\u0D4C\x07\xB7\x02" +
		"\x02\u0D4C\u0D4D\x05\u0188\xC5\x02\u0D4D\u0D4E\x07\x8F\x02\x02\u0D4E\u0D50" +
		"\x03\x02\x02\x02\u0D4F\u0D4B\x03\x02\x02\x02\u0D4F\u0D50\x03\x02\x02\x02" +
		"\u0D50\u012F\x03\x02\x02\x02\u0D51\u0D52\x05\u0126\x94\x02\u0D52\u0D53" +
		"\x07\x90\x02\x02\u0D53\u0D54\x05\u0152\xAA\x02\u0D54\u0D59\x07\x8F\x02" +
		"\x02\u0D55\u0D56\x07\xB7\x02\x02\u0D56\u0D57\x05\u0188\xC5\x02\u0D57\u0D58" +
		"\x07\x8F\x02\x02\u0D58\u0D5A\x03\x02\x02\x02\u0D59\u0D55\x03\x02\x02\x02" +
		"\u0D59\u0D5A\x03\x02\x02\x02\u0D5A\u0131\x03\x02\x02\x02\u0D5B\u0D5C\x05" +
		"\u0124\x93\x02\u0D5C\u0D5F\x07\x90\x02\x02\u0D5D\u0D60\x05\u0152\xAA\x02" +
		"\u0D5E\u0D60\x05\u0150\xA9\x02\u0D5F\u0D5D\x03\x02\x02\x02\u0D5F\u0D5E" +
		"\x03\x02\x02\x02\u0D60\u0D61\x03\x02\x02\x02\u0D61\u0D66\x07\x8F\x02\x02" +
		"\u0D62\u0D63\x07\xB7\x02\x02\u0D63\u0D64\x05\u0188\xC5\x02\u0D64\u0D65" +
		"\x07\x8F\x02\x02\u0D65\u0D67\x03\x02\x02\x02\u0D66\u0D62\x03\x02\x02\x02" +
		"\u0D66\u0D67\x03\x02\x02\x02\u0D67\u0133\x03\x02\x02\x02\u0D68\u0D6C\x05" +
		"\u0136\x9C\x02\u0D69\u0D6B\x05\u014E\xA8\x02\u0D6A\u0D69\x03\x02\x02\x02" +
		"\u0D6B\u0D6E\x03\x02\x02\x02\u0D6C\u0D6A\x03\x02\x02\x02\u0D6C\u0D6D\x03" +
		"\x02\x02\x02\u0D6D\u0135\x03\x02\x02\x02\u0D6E\u0D6C\x03\x02\x02\x02\u0D6F" +
		"\u0D70\x05\u012A\x96\x02\u0D70\u0D74\x07\x90\x02\x02\u0D71\u0D73\x07\x04" +
		"\x02\x02\u0D72\u0D71\x03\x02\x02\x02\u0D73\u0D76\x03\x02\x02\x02\u0D74" +
		"\u0D72\x03\x02\x02\x02\u0D74\u0D75\x03\x02\x02\x02\u0D75\u0D77\x03\x02" +
		"\x02\x02\u0D76\u0D74\x03\x02\x02\x02\u0D77\u0D78\x05\u0152\xAA\x02\u0D78" +
		"\u0D79\x07\x8F\x02\x02\u0D79\u0137\x03\x02\x02\x02\u0D7A\u0D7E\x05\u013A" +
		"\x9E\x02\u0D7B\u0D7D\x05\u014E\xA8\x02\u0D7C\u0D7B\x03\x02\x02\x02\u0D7D" +
		"\u0D80\x03\x02\x02\x02\u0D7E\u0D7C\x03\x02\x02\x02\u0D7E\u0D7F\x03\x02" +
		"\x02\x02\u0D7F\u0139\x03\x02\x02\x02\u0D80\u0D7E\x03\x02\x02\x02\u0D81" +
		"\u0D82\x05\u0128\x95\x02\u0D82\u0D83\x07\x90\x02\x02\u0D83\u0D84\x05\u0152" +
		"\xAA\x02\u0D84\u0D89\x07\x8F\x02\x02\u0D85\u0D86\x07\xB7\x02\x02\u0D86" +
		"\u0D87\x05\u0188\xC5\x02\u0D87\u0D88\x07\x8F\x02\x02\u0D88\u0D8A\x03\x02" +
		"\x02\x02\u0D89\u0D85\x03\x02\x02\x02\u0D89\u0D8A\x03\x02\x02\x02\u0D8A" +
		"\u013B\x03\x02\x02\x02\u0D8B\u0D8F\x05\u013E\xA0\x02\u0D8C\u0D8E\x05\u0142" +
		"\xA2\x02\u0D8D\u0D8C\x03\x02\x02\x02\u0D8E\u0D91\x03\x02\x02\x02\u0D8F" +
		"\u0D8D\x03\x02\x02\x02\u0D8F\u0D90\x03\x02\x02\x02\u0D90\u0D94\x03\x02" +
		"\x02\x02\u0D91\u0D8F\x03\x02\x02\x02\u0D92\u0D93\x07\xA4\x02\x02\u0D93" +
		"\u0D95\x07\xB9\x02\x02\u0D94\u0D92\x03\x02\x02\x02\u0D94\u0D95\x03\x02" +
		"\x02\x02\u0D95\u013D\x03\x02\x02\x02\u0D96\u0D97\x05\u0140\xA1\x02\u0D97" +
		"\u0D9B\x07\x90\x02\x02\u0D98\u0D9A\x07\x04\x02\x02\u0D99\u0D98\x03\x02" +
		"\x02\x02\u0D9A\u0D9D\x03\x02\x02\x02\u0D9B\u0D99\x03\x02\x02\x02\u0D9B" +
		"\u0D9C\x03\x02\x02\x02\u0D9C\u0D9E\x03\x02\x02\x02\u0D9D\u0D9B\x03\x02" +
		"\x02\x02\u0D9E\u0D9F\x05\u0152\xAA\x02\u0D9F\u0DA0\x07\x8F\x02\x02\u0DA0" +
		"\u013F\x03\x02\x02\x02\u0DA1\u0DA4\x07\xCF\x02\x02\u0DA2\u0DA5\x07|\x02" +
		"\x02\u0DA3\u0DA5\x07\xFC\x02\x02\u0DA4\u0DA2\x03\x02\x02\x02\u0DA4\u0DA3" +
		"\x03\x02\x02\x02\u0DA4\u0DA5\x03\x02\x02\x02\u0DA5\u0DB0\x03\x02\x02\x02" +
		"\u0DA6\u0DA8\x07\xE3\x02\x02\u0DA7\u0DA9\x07|\x02\x02\u0DA8\u0DA7\x03" +
		"\x02\x02\x02\u0DA8\u0DA9\x03\x02\x02\x02\u0DA9\u0DB0\x03\x02\x02\x02\u0DAA" +
		"\u0DAC\x07\xD0\x02\x02\u0DAB\u0DAD\x07|\x02\x02\u0DAC\u0DAB\x03\x02\x02" +
		"\x02\u0DAC\u0DAD\x03\x02\x02\x02\u0DAD\u0DB0\x03\x02\x02\x02\u0DAE\u0DB0" +
		"\x07\xD1\x02\x02\u0DAF\u0DA1\x03\x02\x02\x02\u0DAF\u0DA6\x03\x02\x02\x02" +
		"\u0DAF\u0DAA\x03\x02\x02\x02\u0DAF\u0DAE\x03\x02\x02\x02\u0DB0\u0141\x03" +
		"\x02\x02\x02\u0DB1\u0DB2\x07\xB6\x02\x02\u0DB2\u0DB3\x07\x90\x02\x02\u0DB3" +
		"\u0DB4\x05\u0152\xAA\x02\u0DB4\u0DB5\x07\x8F\x02\x02\u0DB5\u0DC3\x03\x02" +
		"\x02\x02\u0DB6\u0DB7\t\x15\x02\x02\u0DB7\u0DB8\x07\x90\x02\x02\u0DB8\u0DB9" +
		"\x07\xA2\x02\x02\u0DB9\u0DC3\x07\x8F\x02\x02\u0DBA\u0DBE\t\x16\x02\x02" +
		"\u0DBB\u0DBD\v\x02\x02\x02\u0DBC\u0DBB\x03\x02\x02\x02\u0DBD\u0DC0\x03" +
		"\x02\x02\x02\u0DBE\u0DBF\x03\x02\x02\x02\u0DBE\u0DBC\x03\x02\x02\x02\u0DBF" +
		"\u0DC1\x03\x02\x02\x02\u0DC0\u0DBE\x03\x02\x02\x02\u0DC1\u0DC3\x07\x8F" +
		"\x02\x02\u0DC2\u0DB1\x03\x02\x02\x02\u0DC2\u0DB6\x03\x02\x02\x02\u0DC2" +
		"\u0DBA\x03\x02\x02\x02\u0DC3\u0143\x03\x02\x02\x02\u0DC4\u0DC5\x07\xB6" +
		"\x02\x02\u0DC5\u0DC6\x07\x90\x02\x02\u0DC6\u0DC7\x05\u0152\xAA\x02\u0DC7" +
		"\u0DC8\x07\x8F\x02\x02\u0DC8\u0DD6\x03\x02\x02\x02\u0DC9\u0DCA\t\x15\x02" +
		"\x02\u0DCA\u0DCB\x07\x90\x02\x02\u0DCB\u0DCC\x07\xA2\x02\x02\u0DCC\u0DD6" +
		"\x07\x8F\x02\x02\u0DCD\u0DD1\t\x16\x02\x02\u0DCE\u0DD0\v\x02\x02\x02\u0DCF" +
		"\u0DCE\x03\x02\x02\x02\u0DD0\u0DD3\x03\x02\x02\x02\u0DD1\u0DD2\x03\x02" +
		"\x02\x02\u0DD1\u0DCF\x03\x02\x02\x02\u0DD2\u0DD4\x03\x02\x02\x02\u0DD3" +
		"\u0DD1\x03\x02\x02\x02\u0DD4\u0DD6\x07\x8F\x02\x02\u0DD5\u0DC4\x03\x02" +
		"\x02\x02\u0DD5\u0DC9\x03\x02\x02\x02\u0DD5\u0DCD\x03\x02\x02\x02\u0DD6" +
		"\u0145\x03\x02\x02\x02\u0DD7\u0DDB\x05\u0148\xA5\x02\u0DD8\u0DDA\x05\u014E" +
		"\xA8\x02\u0DD9\u0DD8\x03\x02\x02\x02\u0DDA\u0DDD\x03\x02\x02\x02\u0DDB" +
		"\u0DD9\x03\x02\x02\x02\u0DDB\u0DDC\x03\x02\x02\x02\u0DDC\u0147\x03\x02" +
		"\x02\x02\u0DDD\u0DDB\x03\x02\x02\x02\u0DDE\u0DDF\x05\u014C\xA7\x02\u0DDF" +
		"\u0DE0\x07\x90\x02\x02\u0DE0\u0DE1\x05\u0152\xAA\x02\u0DE1\u0DE6\x07\x8F" +
		"\x02\x02\u0DE2\u0DE3\x07\xB7\x02\x02\u0DE3\u0DE4\x05\u0188\xC5\x02\u0DE4" +
		"\u0DE5\x07\x8F\x02\x02\u0DE5\u0DE7\x03\x02\x02\x02\u0DE6\u0DE2\x03\x02" +
		"\x02\x02\u0DE6\u0DE7\x03\x02\x02\x02\u0DE7\u0149\x03\x02\x02\x02\u0DE8" +
		"\u0DEB\x07\xC3\x02\x02\u0DE9\u0DEA\x07\x90\x02\x02\u0DEA\u0DEC\x07}\x02" +
		"\x02\u0DEB\u0DE9\x03\x02\x02\x02\u0DEB\u0DEC\x03\x02\x02\x02\u0DEC\u0DF3" +
		"\x03\x02\x02\x02\u0DED\u0DF0\x07\xDA\x02\x02\u0DEE\u0DEF\x07\x90\x02\x02" +
		"\u0DEF\u0DF1\x07}\x02\x02\u0DF0\u0DEE\x03\x02\x02\x02\u0DF0\u0DF1\x03" +
		"\x02\x02\x02\u0DF1\u0DF3\x03\x02\x02\x02\u0DF2\u0DE8\x03\x02\x02\x02\u0DF2" +
		"\u0DED\x03\x02\x02\x02\u0DF3\u014B\x03\x02\x02\x02\u0DF4\u0DF7\x07\xCE" +
		"\x02\x02\u0DF5\u0DF6\x07\x90\x02\x02\u0DF6\u0DF8\x07}\x02\x02\u0DF7\u0DF5" +
		"\x03\x02\x02\x02\u0DF7\u0DF8\x03\x02\x02\x02\u0DF8\u0DFF\x03\x02\x02\x02" +
		"\u0DF9\u0DFC\x07\xE2\x02\x02\u0DFA\u0DFB\x07\x90\x02\x02\u0DFB\u0DFD\x07" +
		"}\x02\x02\u0DFC\u0DFA\x03\x02\x02\x02\u0DFC\u0DFD\x03\x02\x02\x02\u0DFD" +
		"\u0DFF\x03\x02\x02\x02\u0DFE\u0DF4\x03\x02\x02\x02\u0DFE\u0DF9\x03\x02" +
		"\x02\x02\u0DFF\u014D\x03\x02\x02\x02\u0E00\u0E01\x07\x88\x02\x02\u0E01" +
		"\u0E04\x05\u017E\xC0\x02\u0E02\u0E04\x07\xB6\x02\x02\u0E03\u0E00\x03\x02" +
		"\x02\x02\u0E03\u0E02\x03\x02\x02\x02\u0E04\u0E05\x03\x02\x02\x02\u0E05" +
		"\u0E09\x07\x90\x02\x02\u0E06\u0E08\x07\x04\x02\x02\u0E07\u0E06\x03\x02" +
		"\x02\x02\u0E08\u0E0B\x03\x02\x02\x02\u0E09\u0E07\x03\x02\x02\x02\u0E09" +
		"\u0E0A\x03\x02\x02\x02\u0E0A\u0E0E\x03\x02\x02\x02\u0E0B\u0E09\x03\x02" +
		"\x02\x02\u0E0C\u0E0F\x05\u017E\xC0\x02\u0E0D\u0E0F\x07\xA4\x02\x02\u0E0E" +
		"\u0E0C\x03\x02\x02\x02\u0E0E\u0E0D\x03\x02\x02\x02\u0E0F\u0E10\x03\x02" +
		"\x02\x02\u0E10\u0E0E\x03\x02\x02\x02\u0E10\u0E11\x03\x02\x02\x02\u0E11" +
		"\u0E12\x03\x02\x02\x02\u0E12\u0E20\x07\x8F\x02\x02\u0E13\u0E14\t\x15\x02" +
		"\x02\u0E14\u0E15\x07\x90\x02\x02\u0E15\u0E16\x07\xA2\x02\x02\u0E16\u0E20" +
		"\x07\x8F\x02\x02\u0E17\u0E1B\t\x16\x02\x02\u0E18\u0E1A\v\x02\x02\x02\u0E19" +
		"\u0E18\x03\x02\x02\x02\u0E1A\u0E1D\x03\x02\x02\x02\u0E1B\u0E1C\x03\x02" +
		"\x02\x02\u0E1B\u0E19\x03\x02\x02\x02\u0E1C\u0E1E\x03\x02\x02\x02\u0E1D" +
		"\u0E1B\x03\x02\x02\x02\u0E1E\u0E20\x07\x8F\x02\x02\u0E1F\u0E03\x03\x02" +
		"\x02\x02\u0E1F\u0E13\x03\x02\x02\x02\u0E1F\u0E17\x03\x02\x02\x02\u0E20" +
		"\u014F\x03\x02\x02\x02\u0E21\u0E22\x07\xFB\x02\x02\u0E22\u0E23\x07\x93" +
		"\x02\x02\u0E23\u0E24\x07\xA2\x02\x02\u0E24\u0151\x03\x02\x02\x02\u0E25" +
		"\u0E26\x07\xFE\x02\x02\u0E26\u0153\x03\x02\x02\x02\u0E27\u0E28\x07\x8E" +
		"\x02\x02\u0E28\u0E30\x07\x8F\x02\x02\u0E29\u0E2B\x07\x04\x02\x02\u0E2A" +
		"\u0E29\x03\x02\x02\x02\u0E2B\u0E2E\x03\x02\x02\x02\u0E2C\u0E2A\x03\x02" +
		"\x02\x02\u0E2C\u0E2D\x03\x02\x02\x02\u0E2D\u0E2F\x03\x02\x02\x02\u0E2E" +
		"\u0E2C\x03\x02\x02\x02\u0E2F\u0E31\x05\u0156\xAC\x02\u0E30\u0E2C\x03\x02" +
		"\x02\x02\u0E30\u0E31\x03\x02\x02\x02\u0E31\u0E46\x03\x02\x02\x02\u0E32" +
		"\u0E33\x07\x8E\x02\x02\u0E33\u0E38\x05\u017E\xC0\x02\u0E34\u0E37\x07\x90" +
		"\x02\x02\u0E35\u0E37\x05\u0188\xC5\x02\u0E36\u0E34\x03\x02\x02\x02\u0E36" +
		"\u0E35\x03\x02\x02\x02\u0E37\u0E3A\x03\x02\x02\x02\u0E38\u0E36\x03\x02" +
		"\x02\x02\u0E38\u0E39\x03\x02\x02\x02\u0E39\u0E3B\x03\x02\x02\x02\u0E3A" +
		"\u0E38\x03\x02\x02\x02\u0E3B\u0E43\x07\x8F\x02\x02\u0E3C\u0E3E\x07\x04" +
		"\x02\x02\u0E3D\u0E3C\x03\x02\x02\x02\u0E3E\u0E41\x03\x02\x02\x02\u0E3F" +
		"\u0E3D\x03\x02\x02\x02\u0E3F\u0E40\x03\x02\x02\x02\u0E40\u0E42\x03\x02" +
		"\x02\x02\u0E41\u0E3F\x03\x02\x02\x02\u0E42\u0E44\x05\u0156\xAC\x02\u0E43" +
		"\u0E3F\x03\x02\x02\x02\u0E43\u0E44\x03\x02\x02\x02\u0E44\u0E46\x03\x02" +
		"\x02\x02\u0E45\u0E27\x03\x02\x02\x02\u0E45\u0E32\x03\x02\x02\x02\u0E46" +
		"\u0155\x03\x02\x02\x02\u0E47\u0E48\x07\x8E\x02\x02\u0E48\u0E4D\x05\u017E" +
		"\xC0\x02\u0E49\u0E4C\x07\x90\x02\x02\u0E4A\u0E4C\x05\u0188\xC5\x02\u0E4B" +
		"\u0E49\x03\x02\x02\x02\u0E4B\u0E4A\x03\x02\x02\x02\u0E4C\u0E4F\x03\x02" +
		"\x02\x02\u0E4D\u0E4B\x03\x02\x02\x02\u0E4D\u0E4E\x03\x02\x02\x02\u0E4E" +
		"\u0E50\x03\x02\x02\x02\u0E4F\u0E4D\x03\x02\x02\x02\u0E50\u0E51\x07\x8F" +
		"\x02\x02\u0E51\u0157\x03\x02\x02\x02\u0E52\u0E54\x07\x82\x02\x02\u0E53" +
		"\u0E55\x05\u017E\xC0\x02\u0E54\u0E53\x03\x02\x02\x02\u0E54\u0E55\x03\x02" +
		"\x02\x02\u0E55\u0E56\x03\x02\x02\x02\u0E56\u0E5D\x07\x8F\x02\x02\u0E57" +
		"\u0E59\x07\x83\x02\x02\u0E58\u0E5A\x05\u017E\xC0\x02\u0E59\u0E58\x03\x02" +
		"\x02\x02\u0E59\u0E5A\x03\x02\x02\x02\u0E5A\u0E5B\x03\x02\x02\x02\u0E5B" +
		"\u0E5D\x07\x8F\x02\x02\u0E5C\u0E52\x03\x02\x02\x02\u0E5C\u0E57\x03\x02" +
		"\x02\x02\u0E5D\u0159\x03\x02\x02\x02\u0E5E\u0E66\x07\xB0\x02\x02\u0E5F" +
		"\u0E66\x07\xAE\x02\x02\u0E60\u0E62\x07\xAF\x02\x02\u0E61\u0E63\x07\xA5" +
		"\x02\x02\u0E62\u0E61\x03\x02\x02\x02\u0E62\u0E63\x03\x02\x02\x02\u0E63" +
		"\u0E64\x03\x02\x02\x02\u0E64\u0E66\x07\x02\x02\x03\u0E65\u0E5E\x03\x02" +
		"\x02\x02\u0E65\u0E5F\x03\x02\x02\x02\u0E65\u0E60\x03\x02\x02\x02\u0E66" +
		"\u015B\x03\x02\x02\x02\u0E67\u0E69\x07\xD9\x02\x02\u0E68\u0E6A\x05\u017E" +
		"\xC0\x02\u0E69\u0E68\x03\x02\x02\x02\u0E69\u0E6A\x03\x02\x02\x02\u0E6A" +
		"\u0E80\x03\x02\x02\x02\u0E6B\u0E75\x05\u017E\xC0\x02\u0E6C\u0E70\x07\xA4" +
		"\x02\x02\u0E6D\u0E6F\x07\x04\x02\x02\u0E6E\u0E6D\x03\x02\x02\x02\u0E6F" +
		"\u0E72\x03\x02\x02\x02\u0E70\u0E6E\x03\x02\x02\x02\u0E70\u0E71\x03\x02" +
		"\x02\x02\u0E71\u0E74\x03\x02\x02\x02\u0E72\u0E70\x03\x02\x02\x02\u0E73" +
		"\u0E6C\x03\x02\x02\x02\u0E74\u0E77\x03\x02\x02\x02\u0E75\u0E73\x03\x02" +
		"\x02\x02\u0E75\u0E76\x03\x02\x02\x02\u0E76\u0E7B\x03\x02\x02\x02\u0E77" +
		"\u0E75\x03\x02\x02\x02\u0E78\u0E7A\x07\xA4\x02\x02\u0E79\u0E78\x03\x02" +
		"\x02\x02\u0E7A\u0E7D\x03\x02\x02\x02\u0E7B\u0E79\x03\x02\x02\x02\u0E7B" +
		"\u0E7C\x03\x02\x02\x02\u0E7C\u0E7F\x03\x02\x02\x02\u0E7D\u0E7B\x03\x02" +
		"\x02\x02\u0E7E\u0E6B\x03\x02\x02\x02\u0E7F\u0E82\x03\x02\x02\x02\u0E80" +
		"\u0E7E\x03\x02\x02\x02\u0E80\u0E81\x03\x02\x02\x02\u0E81\u0E83\x03\x02" +
		"\x02\x02\u0E82\u0E80\x03\x02\x02\x02\u0E83\u0E8F\x07\x8F\x02\x02\u0E84" +
		"\u0E8A\x07\xD9\x02\x02\u0E85\u0E89\x05\u017E\xC0\x02\u0E86\u0E89\x07\xA4" +
		"\x02\x02\u0E87\u0E89\x07\x04\x02\x02\u0E88\u0E85\x03\x02\x02\x02\u0E88" +
		"\u0E86\x03\x02\x02\x02\u0E88\u0E87\x03\x02\x02\x02\u0E89\u0E8C\x03\x02" +
		"\x02\x02\u0E8A\u0E88\x03\x02\x02\x02\u0E8A\u0E8B\x03\x02\x02\x02\u0E8B" +
		"\u0E8D\x03\x02\x02\x02\u0E8C\u0E8A\x03\x02\x02\x02\u0E8D\u0E8F\x07\x02" +
		"\x02\x03\u0E8E\u0E67\x03\x02\x02\x02\u0E8E\u0E84\x03\x02\x02\x02\u0E8F" +
		"\u015D\x03\x02\x02\x02\u0E90\u0E95\x07\xA8\x02\x02\u0E91\u0E96\x05\u017E" +
		"\xC0\x02\u0E92\u0E96\x07\x90\x02\x02\u0E93\u0E96\x07\xFE\x02\x02\u0E94" +
		"\u0E96\x07\xA4\x02\x02\u0E95\u0E91\x03\x02\x02\x02\u0E95\u0E92\x03\x02" +
		"\x02\x02\u0E95\u0E93\x03\x02\x02\x02\u0E95\u0E94\x03\x02\x02\x02\u0E96" +
		"\u0E97\x03\x02\x02\x02\u0E97\u0E95\x03\x02\x02\x02\u0E97\u0E98\x03\x02" +
		"\x02\x02\u0E98\u0E99\x03\x02\x02\x02\u0E99\u0EA7\x07\x8F\x02\x02\u0E9A" +
		"\u0EA2\x07\xA8\x02\x02\u0E9B\u0EA1\x05\u017E\xC0\x02\u0E9C\u0EA1\x07\x90" +
		"\x02\x02\u0E9D\u0EA1\x07\xFE\x02\x02\u0E9E\u0EA1\x07\xA4\x02\x02\u0E9F" +
		"\u0EA1\x07\x04\x02\x02\u0EA0\u0E9B\x03\x02\x02\x02\u0EA0\u0E9C\x03\x02" +
		"\x02\x02\u0EA0\u0E9D\x03\x02\x02\x02\u0EA0\u0E9E\x03\x02\x02\x02\u0EA0" +
		"\u0E9F\x03\x02\x02\x02\u0EA1\u0EA4\x03\x02\x02\x02\u0EA2\u0EA0\x03\x02" +
		"\x02\x02\u0EA2\u0EA3\x03\x02\x02\x02\u0EA3\u0EA5\x03\x02\x02\x02\u0EA4" +
		"\u0EA2\x03\x02\x02\x02\u0EA5\u0EA7\x07\x02";
	private static readonly _serializedATNSegment7: string =
		"\x02\x03\u0EA6\u0E90\x03\x02\x02\x02\u0EA6\u0E9A\x03\x02\x02\x02\u0EA7" +
		"\u015F\x03\x02\x02\x02\u0EA8\u0EA9\x07\xA7\x02\x02\u0EA9\u0EAA\x05\u017E" +
		"\xC0\x02\u0EAA\u0EAB\x07\x8F\x02\x02\u0EAB\u0161\x03\x02\x02\x02\u0EAC" +
		"\u0EB0\x07\xC0\x02\x02\u0EAD\u0EB1\x05\u017E\xC0\x02\u0EAE\u0EB1\x07\x90" +
		"\x02\x02\u0EAF\u0EB1\x07\xA4\x02\x02\u0EB0\u0EAD\x03\x02\x02\x02\u0EB0" +
		"\u0EAE\x03\x02\x02\x02\u0EB0\u0EAF\x03\x02\x02\x02\u0EB1\u0EB2\x03\x02" +
		"\x02\x02\u0EB2\u0EB0\x03\x02\x02\x02\u0EB2\u0EB3\x03\x02\x02\x02\u0EB3" +
		"\u0EB4\x03\x02\x02\x02\u0EB4\u0EB6\x07\x8F\x02\x02\u0EB5\u0EB7\x05\u0164" +
		"\xB3\x02\u0EB6\u0EB5\x03\x02\x02\x02\u0EB6\u0EB7\x03\x02\x02\x02\u0EB7" +
		"\u0163\x03\x02\x02\x02\u0EB8\u0EBC\x07\xC0\x02\x02\u0EB9\u0EBD\x05\u017E" +
		"\xC0\x02\u0EBA\u0EBD\x07\x90\x02\x02\u0EBB\u0EBD\x07\xA4\x02\x02\u0EBC" +
		"\u0EB9\x03\x02\x02\x02\u0EBC\u0EBA\x03\x02\x02\x02\u0EBC\u0EBB\x03\x02" +
		"\x02\x02\u0EBD\u0EBE\x03\x02\x02\x02\u0EBE\u0EBC\x03\x02\x02\x02\u0EBE" +
		"\u0EBF\x03\x02\x02\x02\u0EBF\u0EC0\x03\x02\x02\x02\u0EC0\u0EC1\x07\x8F" +
		"\x02\x02\u0EC1\u0165\x03\x02\x02\x02\u0EC2\u0EC4\x07\x86\x02\x02\u0EC3" +
		"\u0EC5\x05\u017E\xC0\x02\u0EC4\u0EC3\x03\x02\x02\x02\u0EC4\u0EC5\x03\x02" +
		"\x02\x02\u0EC5\u0EDB\x03\x02\x02\x02\u0EC6\u0ED0\x05\u017E\xC0\x02\u0EC7" +
		"\u0ECB\x07\xA4\x02\x02\u0EC8\u0ECA\x07\x04\x02\x02\u0EC9\u0EC8\x03\x02" +
		"\x02\x02\u0ECA\u0ECD\x03\x02\x02\x02\u0ECB\u0EC9\x03\x02\x02\x02\u0ECB" +
		"\u0ECC\x03\x02\x02\x02\u0ECC\u0ECF\x03\x02\x02\x02\u0ECD\u0ECB\x03\x02" +
		"\x02\x02\u0ECE\u0EC7\x03\x02\x02\x02\u0ECF\u0ED2\x03\x02\x02\x02\u0ED0" +
		"\u0ECE\x03\x02\x02\x02\u0ED0\u0ED1\x03\x02\x02\x02\u0ED1\u0ED6\x03\x02" +
		"\x02\x02\u0ED2\u0ED0\x03\x02\x02\x02\u0ED3\u0ED5\x07\xA4\x02\x02\u0ED4" +
		"\u0ED3\x03\x02\x02\x02\u0ED5\u0ED8\x03\x02\x02\x02\u0ED6\u0ED4\x03\x02" +
		"\x02\x02\u0ED6\u0ED7\x03\x02\x02\x02\u0ED7\u0EDA\x03\x02\x02\x02\u0ED8" +
		"\u0ED6\x03\x02\x02\x02\u0ED9\u0EC6\x03\x02\x02\x02\u0EDA\u0EDD\x03\x02" +
		"\x02\x02\u0EDB\u0ED9\x03\x02\x02\x02\u0EDB\u0EDC\x03\x02\x02\x02\u0EDC" +
		"\u0EDE\x03\x02\x02\x02\u0EDD\u0EDB\x03\x02\x02\x02\u0EDE\u0EE5\x07\x8F" +
		"\x02\x02\u0EDF\u0EE1\x07\x86\x02\x02\u0EE0\u0EE2\x05\u017E\xC0\x02\u0EE1" +
		"\u0EE0\x03\x02\x02\x02\u0EE1\u0EE2\x03\x02\x02\x02\u0EE2\u0EE3\x03\x02" +
		"\x02\x02\u0EE3\u0EE5\x07\x02\x02\x03\u0EE4\u0EC2\x03\x02\x02\x02\u0EE4" +
		"\u0EDF\x03\x02\x02\x02\u0EE5\u0167\x03\x02\x02\x02\u0EE6\u0EE8\x07\x87" +
		"\x02\x02\u0EE7\u0EE9\n\x17\x02\x02\u0EE8\u0EE7\x03\x02\x02\x02\u0EE9\u0EEA" +
		"\x03\x02\x02\x02\u0EEA\u0EE8\x03\x02\x02\x02\u0EEA\u0EEB\x03\x02\x02\x02" +
		"\u0EEB\u0EEC\x03\x02\x02\x02\u0EEC\u0EED\x07\x8F\x02\x02\u0EED\u0169\x03" +
		"\x02\x02\x02\u0EEE\u0EF1\x07\x8D\x02\x02\u0EEF\u0EF2\x05\u017E\xC0\x02" +
		"\u0EF0\u0EF2\x07\xA4\x02\x02\u0EF1\u0EEF\x03\x02\x02\x02\u0EF1\u0EF0\x03" +
		"\x02\x02\x02\u0EF2\u0EF3\x03\x02\x02\x02\u0EF3\u0EF1\x03\x02\x02\x02\u0EF3" +
		"\u0EF4\x03\x02\x02\x02\u0EF4\u0EF5\x03\x02\x02\x02\u0EF5\u0EFB\x07\x8F" +
		"\x02\x02\u0EF6\u0EF7\x07\x8D\x02\x02\u0EF7\u0EF8\x05\u017E\xC0\x02\u0EF8" +
		"\u0EF9\x07\x02\x02\x03\u0EF9\u0EFB\x03\x02\x02\x02\u0EFA\u0EEE\x03\x02" +
		"\x02\x02\u0EFA\u0EF6\x03\x02\x02\x02\u0EFB\u016B\x03\x02\x02\x02\u0EFC" +
		"\u0EFD\x07\xB3\x02\x02\u0EFD\u0EFE\x05\u017E\xC0\x02\u0EFE\u0EFF\x07\x8F" +
		"\x02\x02\u0EFF\u0F05\x03\x02\x02\x02\u0F00\u0F01\x07\xB4\x02\x02\u0F01" +
		"\u0F02\x05\u017E\xC0\x02\u0F02\u0F03\x07\x8F\x02\x02\u0F03\u0F05\x03\x02" +
		"\x02\x02\u0F04\u0EFC\x03\x02\x02\x02\u0F04\u0F00\x03\x02\x02\x02\u0F05" +
		"\u016D\x03\x02\x02\x02\u0F06\u0F07\x07\xAB\x02\x02\u0F07\u0F08\x07\x90" +
		"\x02\x02\u0F08\u0F09\x07\xA2\x02\x02\u0F09\u0F10\x07\x8F\x02\x02\u0F0A" +
		"\u0F0B\x07\xAB\x02\x02\u0F0B\u0F0C\x07\x90\x02\x02\u0F0C\u0F0D\x05\u017E" +
		"\xC0\x02\u0F0D\u0F0E\x07\x8F\x02\x02\u0F0E\u0F10\x03\x02\x02\x02\u0F0F" +
		"\u0F06\x03\x02\x02\x02\u0F0F\u0F0A\x03\x02\x02\x02\u0F10\u016F\x03\x02" +
		"\x02\x02\u0F11\u0F12\x07\xBE\x02\x02\u0F12\u0F13\x05\u017E\xC0\x02\u0F13" +
		"\u0F14\x07\x8F\x02\x02\u0F14\u0171\x03\x02\x02\x02\u0F15\u0F16\x07\xBF" +
		"\x02\x02\u0F16\u0F17\x05\u017E\xC0\x02\u0F17\u0F18\x07\x8F\x02\x02\u0F18" +
		"\u0173\x03\x02\x02\x02\u0F19\u0F23\x05\u0176\xBC\x02\u0F1A\u0F1C\x07\xA4" +
		"\x02\x02\u0F1B\u0F1A\x03\x02\x02\x02\u0F1C\u0F1F\x03\x02\x02\x02\u0F1D" +
		"\u0F1B\x03\x02\x02\x02\u0F1D\u0F1E\x03\x02\x02\x02\u0F1E\u0F20\x03\x02" +
		"\x02\x02\u0F1F\u0F1D\x03\x02\x02\x02\u0F20\u0F22\x05\u0176\xBC\x02\u0F21" +
		"\u0F1D\x03\x02\x02\x02\u0F22\u0F25\x03\x02\x02\x02\u0F23\u0F21\x03\x02" +
		"\x02\x02\u0F23\u0F24\x03\x02\x02\x02\u0F24\u0175\x03\x02\x02\x02\u0F25" +
		"\u0F23\x03\x02\x02\x02\u0F26\u0F27\x07\x88\x02\x02\u0F27\u0F28\x05\u017E" +
		"\xC0\x02\u0F28\u0F29\t\x18\x02\x02\u0F29\u0F2F\x05\u017E\xC0\x02\u0F2A" +
		"\u0F2E\x07\xA4\x02\x02\u0F2B\u0F2E\x07\x90\x02\x02\u0F2C\u0F2E\x05\u017E" +
		"\xC0\x02\u0F2D\u0F2A\x03\x02\x02\x02\u0F2D\u0F2B\x03\x02\x02\x02\u0F2D" +
		"\u0F2C\x03\x02\x02\x02\u0F2E\u0F31\x03\x02\x02\x02\u0F2F\u0F2D\x03\x02" +
		"\x02\x02\u0F2F\u0F30\x03\x02\x02\x02\u0F30\u0F32\x03\x02\x02\x02\u0F31" +
		"\u0F2F\x03\x02\x02\x02\u0F32\u0F33\x07\x8F\x02\x02\u0F33\u0F3D\x03\x02" +
		"\x02\x02\u0F34\u0F38\x07\xBC\x02\x02\u0F35\u0F37\v\x02\x02\x02\u0F36\u0F35" +
		"\x03\x02\x02\x02\u0F37\u0F3A\x03\x02\x02\x02\u0F38\u0F39\x03\x02\x02\x02" +
		"\u0F38\u0F36\x03\x02\x02\x02\u0F39\u0F3B\x03\x02\x02\x02\u0F3A\u0F38\x03" +
		"\x02\x02\x02\u0F3B\u0F3D\x07\x8F\x02\x02\u0F3C\u0F26\x03\x02\x02\x02\u0F3C" +
		"\u0F34\x03\x02\x02\x02\u0F3D\u0177\x03\x02\x02\x02\u0F3E\u0F42\x07\x7F" +
		"\x02\x02\u0F3F\u0F43\x05\u017E\xC0\x02\u0F40\u0F43\x07\x90\x02\x02\u0F41" +
		"\u0F43\x07\xA4\x02\x02\u0F42\u0F3F\x03\x02\x02\x02\u0F42\u0F40\x03\x02" +
		"\x02\x02\u0F42\u0F41\x03\x02\x02\x02\u0F43\u0F44\x03\x02\x02\x02\u0F44" +
		"\u0F42\x03\x02\x02\x02\u0F44\u0F45\x03\x02\x02\x02\u0F45\u0F46\x03\x02" +
		"\x02\x02\u0F46\u0F52\x07\x8F\x02\x02\u0F47\u0F4D\x07\x7F\x02\x02\u0F48" +
		"\u0F4C\x05\u017E\xC0\x02\u0F49\u0F4C\x07\x90\x02\x02\u0F4A\u0F4C\x07\xA4" +
		"\x02\x02\u0F4B\u0F48\x03\x02\x02\x02\u0F4B\u0F49\x03\x02\x02\x02\u0F4B" +
		"\u0F4A\x03\x02\x02\x02\u0F4C\u0F4F\x03\x02\x02\x02\u0F4D\u0F4B\x03\x02" +
		"\x02\x02\u0F4D\u0F4E\x03\x02\x02\x02\u0F4E\u0F50\x03\x02\x02\x02\u0F4F" +
		"\u0F4D\x03\x02\x02\x02\u0F50\u0F52\x07\x02\x02\x03\u0F51\u0F3E\x03\x02" +
		"\x02\x02\u0F51\u0F47\x03\x02\x02\x02\u0F52\u0179\x03\x02\x02\x02\u0F53" +
		"\u0F55\x07\x84\x02\x02\u0F54\u0F56\x05\u017E\xC0\x02\u0F55\u0F54\x03\x02" +
		"\x02\x02\u0F55\u0F56\x03\x02\x02\x02\u0F56\u0F57\x03\x02\x02\x02\u0F57" +
		"\u0F58\x07\x8F\x02\x02\u0F58\u017B\x03\x02\x02\x02\u0F59\u0F5B\x05\u017E" +
		"\xC0\x02\u0F5A\u0F5C\x07\xA4\x02\x02\u0F5B\u0F5A\x03\x02\x02\x02\u0F5B" +
		"\u0F5C\x03\x02\x02\x02\u0F5C\u0F5E\x03\x02\x02\x02\u0F5D\u0F59\x03\x02" +
		"\x02\x02\u0F5E\u0F5F\x03\x02\x02\x02\u0F5F\u0F5D\x03\x02\x02\x02\u0F5F" +
		"\u0F60\x03\x02\x02\x02\u0F60\u017D\x03\x02\x02\x02\u0F61\u0F68\x07\xA3" +
		"\x02\x02\u0F62\u0F64\x07\x04\x02\x02\u0F63\u0F62\x03\x02\x02\x02\u0F64" +
		"\u0F65\x03\x02\x02\x02\u0F65\u0F63\x03\x02\x02\x02\u0F65\u0F66\x03\x02" +
		"\x02\x02\u0F66\u0F67\x03\x02\x02\x02\u0F67\u0F69\x07\xA2\x02\x02\u0F68" +
		"\u0F63\x03\x02\x02\x02\u0F68\u0F69\x03\x02\x02\x02\u0F69\u0F90\x03\x02" +
		"\x02\x02\u0F6A\u0F71\x05\u0188\xC5\x02\u0F6B\u0F6D\x07\x04\x02\x02\u0F6C" +
		"\u0F6B\x03\x02\x02\x02\u0F6D\u0F6E\x03\x02\x02\x02\u0F6E\u0F6C\x03\x02" +
		"\x02\x02\u0F6E\u0F6F\x03\x02\x02\x02\u0F6F\u0F70\x03\x02\x02\x02\u0F70" +
		"\u0F72\x07\xA2\x02\x02\u0F71\u0F6C\x03\x02\x02\x02\u0F71\u0F72\x03\x02" +
		"\x02\x02\u0F72\u0F90\x03\x02\x02\x02\u0F73\u0F90\x07\xA2\x02\x02\u0F74" +
		"\u0F75\x07\x8B\x02\x02\u0F75\u0F76\x05\u017E\xC0\x02\u0F76\u0F77\x07\x8F" +
		"\x02\x02\u0F77\u0F90\x03\x02\x02\x02\u0F78\u0F7A\x07\x04\x02\x02\u0F79" +
		"\u0F78\x03\x02\x02\x02\u0F7A\u0F7D\x03\x02\x02\x02\u0F7B\u0F79\x03\x02" +
		"\x02\x02\u0F7B\u0F7C\x03\x02\x02\x02\u0F7C\u0F7E\x03\x02\x02\x02\u0F7D" +
		"\u0F7B\x03\x02\x02\x02\u0F7E\u0F82\x07\x90\x02\x02\u0F7F\u0F81\x07\x04" +
		"\x02\x02\u0F80\u0F7F\x03\x02\x02\x02\u0F81\u0F84\x03\x02\x02\x02\u0F82" +
		"\u0F80\x03\x02\x02\x02\u0F82\u0F83\x03\x02\x02\x02\u0F83\u0F90\x03\x02" +
		"\x02\x02\u0F84\u0F82\x03\x02\x02\x02\u0F85\u0F89\x07\x91\x02\x02\u0F86" +
		"\u0F88\x07\x04\x02\x02\u0F87\u0F86\x03\x02\x02\x02\u0F88\u0F8B\x03\x02" +
		"\x02\x02\u0F89\u0F87\x03\x02\x02\x02\u0F89\u0F8A\x03\x02\x02\x02\u0F8A" +
		"\u0F90\x03\x02\x02\x02\u0F8B\u0F89\x03\x02\x02\x02\u0F8C\u0F90\x07\x99" +
		"\x02\x02\u0F8D\u0F90\x07\xFE\x02\x02\u0F8E\u0F90\x05\u0182\xC2\x02\u0F8F" +
		"\u0F61\x03\x02\x02\x02\u0F8F\u0F6A\x03\x02\x02\x02\u0F8F\u0F73\x03\x02" +
		"\x02\x02\u0F8F\u0F74\x03\x02\x02\x02\u0F8F\u0F7B\x03\x02\x02\x02\u0F8F" +
		"\u0F85\x03\x02\x02\x02\u0F8F\u0F8C\x03\x02\x02\x02\u0F8F\u0F8D\x03\x02" +
		"\x02\x02\u0F8F\u0F8E\x03\x02\x02\x02\u0F90\u017F\x03\x02\x02\x02\u0F91" +
		"\u0F92\x07\x9F\x02\x02\u0F92\u0181\x03\x02\x02\x02\u0F93\u0F95\x07\x81" +
		"\x02\x02\u0F94\u0F96\x05\u017E\xC0\x02\u0F95\u0F94\x03\x02\x02\x02\u0F96" +
		"\u0F97\x03\x02\x02\x02\u0F97\u0F95\x03\x02\x02\x02\u0F97\u0F98\x03\x02" +
		"\x02\x02\u0F98\u0F9A\x03\x02\x02\x02\u0F99\u0F9B\x07\x8F\x02\x02\u0F9A" +
		"\u0F99\x03\x02\x02\x02\u0F9A\u0F9B\x03\x02\x02\x02\u0F9B\u0183\x03\x02" +
		"\x02\x02\u0F9C\u0F9D\x07\x8F\x02\x02\u0F9D\u0185\x03\x02\x02\x02\u0F9E" +
		"\u0F9F\t\x19\x02\x02\u0F9F\u0187\x03\x02\x02\x02\u0FA0\u0FBC\x05\u018C" +
		"\xC7\x02\u0FA1\u0FBC\x07\x91\x02\x02\u0FA2\u0FA3\x07\x95\x02\x02\u0FA3" +
		"\u0FBC\n\x1A\x02\x02\u0FA4\u0FA5\x07\x96\x02\x02\u0FA5\u0FBC\n\x1B\x02" +
		"\x02\u0FA6\u0FBC\x07\x98\x02\x02\u0FA7\u0FBC\x07\x97\x02\x02\u0FA8\u0FBC" +
		"\x07\xC8\x02\x02\u0FA9\u0FBC\x07\xDD\x02\x02\u0FAA\u0FBC\x07\xC9\x02\x02" +
		"\u0FAB\u0FBC\x07\xDE\x02\x02\u0FAC\u0FBC\x07\xCB\x02\x02\u0FAD\u0FBC\x07" +
		"\xE0\x02\x02\u0FAE\u0FBC\x07\xC4\x02\x02\u0FAF\u0FBC\x07\xDB\x02\x02\u0FB0" +
		"\u0FBC\x07\xC3\x02\x02\u0FB1\u0FBC\x07\xDA\x02\x02\u0FB2\u0FBC\x07\xC7" +
		"\x02\x02\u0FB3\u0FBC\x07\xDC\x02\x02\u0FB4\u0FBC\x07\xCA\x02\x02\u0FB5" +
		"\u0FBC\x07\xDF\x02\x02\u0FB6\u0FBC\x07\xCC\x02\x02\u0FB7\u0FBC\x07\xE1" +
		"\x02\x02\u0FB8\u0FBC\x07\xEA\x02\x02\u0FB9\u0FBC\x07\xEB\x02\x02\u0FBA" +
		"\u0FBC\x07\x9E\x02\x02\u0FBB\u0FA0\x03\x02\x02\x02\u0FBB\u0FA1\x03\x02" +
		"\x02\x02\u0FBB\u0FA2\x03\x02\x02\x02\u0FBB\u0FA4\x03\x02\x02\x02\u0FBB" +
		"\u0FA6\x03\x02\x02\x02\u0FBB\u0FA7\x03\x02\x02\x02\u0FBB\u0FA8\x03\x02" +
		"\x02\x02\u0FBB\u0FA9\x03\x02\x02\x02\u0FBB\u0FAA\x03\x02\x02\x02\u0FBB" +
		"\u0FAB\x03\x02\x02\x02\u0FBB\u0FAC\x03\x02\x02\x02\u0FBB\u0FAD\x03\x02" +
		"\x02\x02\u0FBB\u0FAE\x03\x02\x02\x02\u0FBB\u0FAF\x03\x02\x02\x02\u0FBB" +
		"\u0FB0\x03\x02\x02\x02\u0FBB\u0FB1\x03\x02\x02\x02\u0FBB\u0FB2\x03\x02" +
		"\x02\x02\u0FBB\u0FB3\x03\x02\x02\x02\u0FBB\u0FB4\x03\x02\x02\x02\u0FBB" +
		"\u0FB5\x03\x02\x02\x02\u0FBB\u0FB6\x03\x02\x02\x02\u0FBB\u0FB7\x03\x02" +
		"\x02\x02\u0FBB\u0FB8\x03\x02\x02\x02\u0FBB\u0FB9\x03\x02\x02\x02\u0FBB" +
		"\u0FBA\x03\x02\x02\x02\u0FBC\u0FBD\x03\x02\x02\x02\u0FBD\u0FBB\x03\x02" +
		"\x02\x02\u0FBD\u0FBE\x03\x02\x02\x02\u0FBE\u0189\x03\x02\x02\x02\u0FBF" +
		"\u0FC0\x07\x04\x02\x02\u0FC0\u018B\x03\x02\x02\x02\u0FC1\u0FC2\x07\xA5" +
		"\x02\x02\u0FC2\u018D\x03\x02\x02\x02\u0227\u0192\u0198\u019D\u01A2\u01A9" +
		"\u021D\u0221\u0227\u022D\u0231\u0237\u023D\u0243\u0249\u024E\u0255\u025C" +
		"\u0263\u0269\u026F\u0277\u0280\u0284\u028D\u028F\u0294\u029A\u02A3\u02A5" +
		"\u02AA\u02B0\u02B9\u02C0\u02C5\u02CD\u02D4\u02D9\u02E1\u02E8\u02ED\u02F5" +
		"\u02FC\u0301\u0309\u0310\u0315\u031D\u0324\u0329\u0331\u0338\u033D\u0345" +
		"\u034C\u0351\u0359\u0360\u0365\u036D\u0374\u0379\u0381\u0388\u038D\u0395" +
		"\u039C\u03A1\u03A9\u03B0\u03B5\u03BD\u03C4\u03C9\u03D1\u03D8\u03DD\u03E5" +
		"\u03EC\u03F1\u0412\u041A\u041C\u0423\u0428\u042E\u0434\u0439\u043F\u0444" +
		"\u044A\u0456\u045B\u0461\u0467\u046D\u0474\u047A\u047D\u0481\u0485\u0487" +
		"\u0497\u049C\u04A2\u04A8\u04AF\u04B5\u04B8\u04BE\u04C7\u04CC\u04D4\u04D9" +
		"\u04DE\u04E4\u04EB\u04F1\u04F4\u04FA\u04FF\u0501\u0508\u050F\u0516\u051E" +
		"\u0523\u0529\u0530\u0536\u0539\u0543\u0548\u054E\u0555\u055B\u055E\u0568" +
		"\u056D\u0573\u057A\u0580\u0583\u058D\u0592\u0598\u059F\u05A5\u05A8\u05B0" +
		"\u05B7\u05BC\u05C0\u05C5\u05CC\u05D2\u05D5\u05DD\u05E3\u05E8\u05EC\u05F1" +
		"\u05F8\u05FE\u0601\u0609\u0610\u0615\u061D\u0624\u0629\u0631\u0638\u063D" +
		"\u0645\u064C\u0651\u0659\u0660\u0665\u066D\u0674\u0679\u0681\u0688\u068D" +
		"\u0695\u069C\u06A1\u06A9\u06B0\u06B5\u06BD\u06C4\u06C9\u06D1\u06D8\u06DD" +
		"\u06E5\u06EC\u06F1\u06F9\u0700\u0705\u070D\u0714\u0719\u0721\u0728\u072D" +
		"\u0735\u073C\u0741\u0749\u0750\u0755\u075D\u0764\u0769\u0771\u0778\u077D" +
		"\u0785\u078C\u0791\u0799\u07A0\u07A5\u07AD\u07B4\u07B9\u07C1\u07C8\u07CD" +
		"\u07D5\u07DC\u07E1\u07E9\u07F0\u07F5\u07FD\u0804\u0809\u0811\u0818\u081D" +
		"\u0825\u082C\u0831\u0839\u0840\u0845\u084D\u0854\u0859\u0861\u0868\u086D" +
		"\u0875\u087C\u0881\u0889\u0890\u0895\u089D\u08A4\u08A9\u08B1\u08B8\u08BD" +
		"\u08C5\u08CC\u08D1\u08D9\u08E0\u08E5\u08ED\u08F4\u08F9\u0901\u0908\u090D" +
		"\u0915\u091C\u0921\u0929\u0930\u0935\u093D\u0944\u0949\u0951\u0958\u095D" +
		"\u0965\u096C\u0971\u0979\u0980\u0985\u098D\u0994\u0999\u09A1\u09A8\u09AD" +
		"\u09B5\u09BC\u09C1\u09C9\u09D0\u09D5\u09DD\u09E4\u09E9\u09F1\u09F8\u09FD" +
		"\u0A05\u0A0C\u0A11\u0A19\u0A20\u0A25\u0A2D\u0A34\u0A39\u0A41\u0A48\u0A4D" +
		"\u0A55\u0A5C\u0A61\u0A69\u0A70\u0A75\u0A7D\u0A84\u0A89\u0A91\u0A98\u0A9D" +
		"\u0AA5\u0AAC\u0AB1\u0AB9\u0AC0\u0AC5\u0ACD\u0AD4\u0AD9\u0AE1\u0AE8\u0AED" +
		"\u0AF5\u0AFC\u0B01\u0B09\u0B10\u0B15\u0B1D\u0B24\u0B29\u0B31\u0B38\u0B3D" +
		"\u0B45\u0B4C\u0B51\u0B59\u0B60\u0B65\u0B6D\u0B74\u0B79\u0B81\u0B88\u0B8D" +
		"\u0B95\u0B9C\u0BA1\u0BAD\u0BB2\u0BB8\u0BBF\u0BC5\u0BC8\u0BD1\u0BD3\u0BDB" +
		"\u0BE2\u0BE7\u0BF0\u0BF4\u0BFA\u0C01\u0C07\u0C0A\u0C10\u0C18\u0C1F\u0C24" +
		"\u0C29\u0C2E\u0C34\u0C38\u0C42\u0C49\u0C4E\u0C57\u0C5B\u0C65\u0C6C\u0C71" +
		"\u0C7A\u0C7E\u0C88\u0C8F\u0C94\u0C9D\u0CA1\u0CAB\u0CB2\u0CB7\u0CBF\u0CC5" +
		"\u0CC9\u0CCF\u0CD6\u0CDC\u0CDF\u0CE4\u0CED\u0CF2\u0CF4\u0D02\u0D08\u0D0D" +
		"\u0D11\u0D15\u0D18\u0D1D\u0D34\u0D39\u0D3B\u0D45\u0D4F\u0D59\u0D5F\u0D66" +
		"\u0D6C\u0D74\u0D7E\u0D89\u0D8F\u0D94\u0D9B\u0DA4\u0DA8\u0DAC\u0DAF\u0DBE" +
		"\u0DC2\u0DD1\u0DD5\u0DDB\u0DE6\u0DEB\u0DF0\u0DF2\u0DF7\u0DFC\u0DFE\u0E03" +
		"\u0E09\u0E0E\u0E10\u0E1B\u0E1F\u0E2C\u0E30\u0E36\u0E38\u0E3F\u0E43\u0E45" +
		"\u0E4B\u0E4D\u0E54\u0E59\u0E5C\u0E62\u0E65\u0E69\u0E70\u0E75\u0E7B\u0E80" +
		"\u0E88\u0E8A\u0E8E\u0E95\u0E97\u0EA0\u0EA2\u0EA6\u0EB0\u0EB2\u0EB6\u0EBC" +
		"\u0EBE\u0EC4\u0ECB\u0ED0\u0ED6\u0EDB\u0EE1\u0EE4\u0EEA\u0EF1\u0EF3\u0EFA" +
		"\u0F04\u0F0F\u0F1D\u0F23\u0F2D\u0F2F\u0F38\u0F3C\u0F42\u0F44\u0F4B\u0F4D" +
		"\u0F51\u0F55\u0F5B\u0F5F\u0F65\u0F68\u0F6E\u0F71\u0F7B\u0F82\u0F89\u0F8F" +
		"\u0F97\u0F9A\u0FBB\u0FBD";
	public static readonly _serializedATN: string = Utils.join(
		[
			bitmarkParser._serializedATNSegment0,
			bitmarkParser._serializedATNSegment1,
			bitmarkParser._serializedATNSegment2,
			bitmarkParser._serializedATNSegment3,
			bitmarkParser._serializedATNSegment4,
			bitmarkParser._serializedATNSegment5,
			bitmarkParser._serializedATNSegment6,
			bitmarkParser._serializedATNSegment7,
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
	public book_frontispiece(): Book_frontispieceContext | undefined {
		return this.tryGetRuleContext(0, Book_frontispieceContext);
	}
	public book_title(): Book_titleContext | undefined {
		return this.tryGetRuleContext(0, Book_titleContext);
	}
	public book_copyright(): Book_copyrightContext | undefined {
		return this.tryGetRuleContext(0, Book_copyrightContext);
	}
	public book_dedication(): Book_dedicationContext | undefined {
		return this.tryGetRuleContext(0, Book_dedicationContext);
	}
	public book_forword(): Book_forwordContext | undefined {
		return this.tryGetRuleContext(0, Book_forwordContext);
	}
	public book_preface(): Book_prefaceContext | undefined {
		return this.tryGetRuleContext(0, Book_prefaceContext);
	}
	public book_prologue(): Book_prologueContext | undefined {
		return this.tryGetRuleContext(0, Book_prologueContext);
	}
	public book_epilogue(): Book_epilogueContext | undefined {
		return this.tryGetRuleContext(0, Book_epilogueContext);
	}
	public book_introduction(): Book_introductionContext | undefined {
		return this.tryGetRuleContext(0, Book_introductionContext);
	}
	public book_inciting_incident(): Book_inciting_incidentContext | undefined {
		return this.tryGetRuleContext(0, Book_inciting_incidentContext);
	}
	public book_conclusion(): Book_conclusionContext | undefined {
		return this.tryGetRuleContext(0, Book_conclusionContext);
	}
	public book_afterword(): Book_afterwordContext | undefined {
		return this.tryGetRuleContext(0, Book_afterwordContext);
	}
	public book_postscript(): Book_postscriptContext | undefined {
		return this.tryGetRuleContext(0, Book_postscriptContext);
	}
	public book_appendix(): Book_appendixContext | undefined {
		return this.tryGetRuleContext(0, Book_appendixContext);
	}
	public book_addendum(): Book_addendumContext | undefined {
		return this.tryGetRuleContext(0, Book_addendumContext);
	}
	public book_acknowledgments(): Book_acknowledgmentsContext | undefined {
		return this.tryGetRuleContext(0, Book_acknowledgmentsContext);
	}
	public book_list_of_contributors(): Book_list_of_contributorsContext | undefined {
		return this.tryGetRuleContext(0, Book_list_of_contributorsContext);
	}
	public book_bibliography(): Book_bibliographyContext | undefined {
		return this.tryGetRuleContext(0, Book_bibliographyContext);
	}
	public book_reference_list(): Book_reference_listContext | undefined {
		return this.tryGetRuleContext(0, Book_reference_listContext);
	}
	public book_endnotes(): Book_endnotesContext | undefined {
		return this.tryGetRuleContext(0, Book_endnotesContext);
	}
	public book_notes(): Book_notesContext | undefined {
		return this.tryGetRuleContext(0, Book_notesContext);
	}
	public book_copyright_permissions(): Book_copyright_permissionsContext | undefined {
		return this.tryGetRuleContext(0, Book_copyright_permissionsContext);
	}
	public book_teaser(): Book_teaserContext | undefined {
		return this.tryGetRuleContext(0, Book_teaserContext);
	}
	public book_auther_bio(): Book_auther_bioContext | undefined {
		return this.tryGetRuleContext(0, Book_auther_bioContext);
	}
	public book_request_for_a_book_review(): Book_request_for_a_book_reviewContext | undefined {
		return this.tryGetRuleContext(0, Book_request_for_a_book_reviewContext);
	}
	public book_coming_soon(): Book_coming_soonContext | undefined {
		return this.tryGetRuleContext(0, Book_coming_soonContext);
	}
	public book_read_more(): Book_read_moreContext | undefined {
		return this.tryGetRuleContext(0, Book_read_moreContext);
	}
	public book_summary(): Book_summaryContext | undefined {
		return this.tryGetRuleContext(0, Book_summaryContext);
	}
	public book_epigraph(): Book_epigraphContext | undefined {
		return this.tryGetRuleContext(0, Book_epigraphContext);
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


export class Book_frontispieceContext extends ParserRuleContext {
	public BitBookFrontispiece(): TerminalNode { return this.getToken(bitmarkParser.BitBookFrontispiece, 0); }
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
	public get ruleIndex(): number { return bitmarkParser.RULE_book_frontispiece; }
	// @Override
	public enterRule(listener: bitmarkParserListener): void {
		if (listener.enterBook_frontispiece) {
			listener.enterBook_frontispiece(this);
		}
	}
	// @Override
	public exitRule(listener: bitmarkParserListener): void {
		if (listener.exitBook_frontispiece) {
			listener.exitBook_frontispiece(this);
		}
	}
}


export class Book_titleContext extends ParserRuleContext {
	public BitBookTitle(): TerminalNode { return this.getToken(bitmarkParser.BitBookTitle, 0); }
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
	public get ruleIndex(): number { return bitmarkParser.RULE_book_title; }
	// @Override
	public enterRule(listener: bitmarkParserListener): void {
		if (listener.enterBook_title) {
			listener.enterBook_title(this);
		}
	}
	// @Override
	public exitRule(listener: bitmarkParserListener): void {
		if (listener.exitBook_title) {
			listener.exitBook_title(this);
		}
	}
}


export class Book_copyrightContext extends ParserRuleContext {
	public BitBookCopyright(): TerminalNode { return this.getToken(bitmarkParser.BitBookCopyright, 0); }
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
	public get ruleIndex(): number { return bitmarkParser.RULE_book_copyright; }
	// @Override
	public enterRule(listener: bitmarkParserListener): void {
		if (listener.enterBook_copyright) {
			listener.enterBook_copyright(this);
		}
	}
	// @Override
	public exitRule(listener: bitmarkParserListener): void {
		if (listener.exitBook_copyright) {
			listener.exitBook_copyright(this);
		}
	}
}


export class Book_dedicationContext extends ParserRuleContext {
	public BitBookDedication(): TerminalNode { return this.getToken(bitmarkParser.BitBookDedication, 0); }
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
	public get ruleIndex(): number { return bitmarkParser.RULE_book_dedication; }
	// @Override
	public enterRule(listener: bitmarkParserListener): void {
		if (listener.enterBook_dedication) {
			listener.enterBook_dedication(this);
		}
	}
	// @Override
	public exitRule(listener: bitmarkParserListener): void {
		if (listener.exitBook_dedication) {
			listener.exitBook_dedication(this);
		}
	}
}


export class Book_forwordContext extends ParserRuleContext {
	public BitBookForword(): TerminalNode { return this.getToken(bitmarkParser.BitBookForword, 0); }
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
	public get ruleIndex(): number { return bitmarkParser.RULE_book_forword; }
	// @Override
	public enterRule(listener: bitmarkParserListener): void {
		if (listener.enterBook_forword) {
			listener.enterBook_forword(this);
		}
	}
	// @Override
	public exitRule(listener: bitmarkParserListener): void {
		if (listener.exitBook_forword) {
			listener.exitBook_forword(this);
		}
	}
}


export class Book_prefaceContext extends ParserRuleContext {
	public BitBookPreface(): TerminalNode { return this.getToken(bitmarkParser.BitBookPreface, 0); }
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
	public get ruleIndex(): number { return bitmarkParser.RULE_book_preface; }
	// @Override
	public enterRule(listener: bitmarkParserListener): void {
		if (listener.enterBook_preface) {
			listener.enterBook_preface(this);
		}
	}
	// @Override
	public exitRule(listener: bitmarkParserListener): void {
		if (listener.exitBook_preface) {
			listener.exitBook_preface(this);
		}
	}
}


export class Book_prologueContext extends ParserRuleContext {
	public BitBookPrologue(): TerminalNode { return this.getToken(bitmarkParser.BitBookPrologue, 0); }
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
	public get ruleIndex(): number { return bitmarkParser.RULE_book_prologue; }
	// @Override
	public enterRule(listener: bitmarkParserListener): void {
		if (listener.enterBook_prologue) {
			listener.enterBook_prologue(this);
		}
	}
	// @Override
	public exitRule(listener: bitmarkParserListener): void {
		if (listener.exitBook_prologue) {
			listener.exitBook_prologue(this);
		}
	}
}


export class Book_epilogueContext extends ParserRuleContext {
	public BitBookEpilogue(): TerminalNode { return this.getToken(bitmarkParser.BitBookEpilogue, 0); }
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
	public get ruleIndex(): number { return bitmarkParser.RULE_book_epilogue; }
	// @Override
	public enterRule(listener: bitmarkParserListener): void {
		if (listener.enterBook_epilogue) {
			listener.enterBook_epilogue(this);
		}
	}
	// @Override
	public exitRule(listener: bitmarkParserListener): void {
		if (listener.exitBook_epilogue) {
			listener.exitBook_epilogue(this);
		}
	}
}


export class Book_introductionContext extends ParserRuleContext {
	public BitBookIntroduction(): TerminalNode { return this.getToken(bitmarkParser.BitBookIntroduction, 0); }
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
	public get ruleIndex(): number { return bitmarkParser.RULE_book_introduction; }
	// @Override
	public enterRule(listener: bitmarkParserListener): void {
		if (listener.enterBook_introduction) {
			listener.enterBook_introduction(this);
		}
	}
	// @Override
	public exitRule(listener: bitmarkParserListener): void {
		if (listener.exitBook_introduction) {
			listener.exitBook_introduction(this);
		}
	}
}


export class Book_inciting_incidentContext extends ParserRuleContext {
	public BitBookIncitingIncident(): TerminalNode { return this.getToken(bitmarkParser.BitBookIncitingIncident, 0); }
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
	public get ruleIndex(): number { return bitmarkParser.RULE_book_inciting_incident; }
	// @Override
	public enterRule(listener: bitmarkParserListener): void {
		if (listener.enterBook_inciting_incident) {
			listener.enterBook_inciting_incident(this);
		}
	}
	// @Override
	public exitRule(listener: bitmarkParserListener): void {
		if (listener.exitBook_inciting_incident) {
			listener.exitBook_inciting_incident(this);
		}
	}
}


export class Book_conclusionContext extends ParserRuleContext {
	public BitBookConclusion(): TerminalNode { return this.getToken(bitmarkParser.BitBookConclusion, 0); }
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
	public get ruleIndex(): number { return bitmarkParser.RULE_book_conclusion; }
	// @Override
	public enterRule(listener: bitmarkParserListener): void {
		if (listener.enterBook_conclusion) {
			listener.enterBook_conclusion(this);
		}
	}
	// @Override
	public exitRule(listener: bitmarkParserListener): void {
		if (listener.exitBook_conclusion) {
			listener.exitBook_conclusion(this);
		}
	}
}


export class Book_afterwordContext extends ParserRuleContext {
	public BitBookAfterword(): TerminalNode { return this.getToken(bitmarkParser.BitBookAfterword, 0); }
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
	public get ruleIndex(): number { return bitmarkParser.RULE_book_afterword; }
	// @Override
	public enterRule(listener: bitmarkParserListener): void {
		if (listener.enterBook_afterword) {
			listener.enterBook_afterword(this);
		}
	}
	// @Override
	public exitRule(listener: bitmarkParserListener): void {
		if (listener.exitBook_afterword) {
			listener.exitBook_afterword(this);
		}
	}
}


export class Book_postscriptContext extends ParserRuleContext {
	public BitBookPostscript(): TerminalNode { return this.getToken(bitmarkParser.BitBookPostscript, 0); }
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
	public get ruleIndex(): number { return bitmarkParser.RULE_book_postscript; }
	// @Override
	public enterRule(listener: bitmarkParserListener): void {
		if (listener.enterBook_postscript) {
			listener.enterBook_postscript(this);
		}
	}
	// @Override
	public exitRule(listener: bitmarkParserListener): void {
		if (listener.exitBook_postscript) {
			listener.exitBook_postscript(this);
		}
	}
}


export class Book_appendixContext extends ParserRuleContext {
	public BitBookappendix(): TerminalNode { return this.getToken(bitmarkParser.BitBookappendix, 0); }
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
	public get ruleIndex(): number { return bitmarkParser.RULE_book_appendix; }
	// @Override
	public enterRule(listener: bitmarkParserListener): void {
		if (listener.enterBook_appendix) {
			listener.enterBook_appendix(this);
		}
	}
	// @Override
	public exitRule(listener: bitmarkParserListener): void {
		if (listener.exitBook_appendix) {
			listener.exitBook_appendix(this);
		}
	}
}


export class Book_addendumContext extends ParserRuleContext {
	public BitBookAddendum(): TerminalNode { return this.getToken(bitmarkParser.BitBookAddendum, 0); }
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
	public get ruleIndex(): number { return bitmarkParser.RULE_book_addendum; }
	// @Override
	public enterRule(listener: bitmarkParserListener): void {
		if (listener.enterBook_addendum) {
			listener.enterBook_addendum(this);
		}
	}
	// @Override
	public exitRule(listener: bitmarkParserListener): void {
		if (listener.exitBook_addendum) {
			listener.exitBook_addendum(this);
		}
	}
}


export class Book_acknowledgmentsContext extends ParserRuleContext {
	public BitBookAcknowledgments(): TerminalNode { return this.getToken(bitmarkParser.BitBookAcknowledgments, 0); }
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
	public get ruleIndex(): number { return bitmarkParser.RULE_book_acknowledgments; }
	// @Override
	public enterRule(listener: bitmarkParserListener): void {
		if (listener.enterBook_acknowledgments) {
			listener.enterBook_acknowledgments(this);
		}
	}
	// @Override
	public exitRule(listener: bitmarkParserListener): void {
		if (listener.exitBook_acknowledgments) {
			listener.exitBook_acknowledgments(this);
		}
	}
}


export class Book_list_of_contributorsContext extends ParserRuleContext {
	public BitBookListOfContributors(): TerminalNode { return this.getToken(bitmarkParser.BitBookListOfContributors, 0); }
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
	public get ruleIndex(): number { return bitmarkParser.RULE_book_list_of_contributors; }
	// @Override
	public enterRule(listener: bitmarkParserListener): void {
		if (listener.enterBook_list_of_contributors) {
			listener.enterBook_list_of_contributors(this);
		}
	}
	// @Override
	public exitRule(listener: bitmarkParserListener): void {
		if (listener.exitBook_list_of_contributors) {
			listener.exitBook_list_of_contributors(this);
		}
	}
}


export class Book_bibliographyContext extends ParserRuleContext {
	public BitBookBibliography(): TerminalNode { return this.getToken(bitmarkParser.BitBookBibliography, 0); }
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
	public get ruleIndex(): number { return bitmarkParser.RULE_book_bibliography; }
	// @Override
	public enterRule(listener: bitmarkParserListener): void {
		if (listener.enterBook_bibliography) {
			listener.enterBook_bibliography(this);
		}
	}
	// @Override
	public exitRule(listener: bitmarkParserListener): void {
		if (listener.exitBook_bibliography) {
			listener.exitBook_bibliography(this);
		}
	}
}


export class Book_reference_listContext extends ParserRuleContext {
	public BitBookReferenceList(): TerminalNode { return this.getToken(bitmarkParser.BitBookReferenceList, 0); }
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
	public get ruleIndex(): number { return bitmarkParser.RULE_book_reference_list; }
	// @Override
	public enterRule(listener: bitmarkParserListener): void {
		if (listener.enterBook_reference_list) {
			listener.enterBook_reference_list(this);
		}
	}
	// @Override
	public exitRule(listener: bitmarkParserListener): void {
		if (listener.exitBook_reference_list) {
			listener.exitBook_reference_list(this);
		}
	}
}


export class Book_endnotesContext extends ParserRuleContext {
	public BitBookEndnotes(): TerminalNode { return this.getToken(bitmarkParser.BitBookEndnotes, 0); }
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
	public get ruleIndex(): number { return bitmarkParser.RULE_book_endnotes; }
	// @Override
	public enterRule(listener: bitmarkParserListener): void {
		if (listener.enterBook_endnotes) {
			listener.enterBook_endnotes(this);
		}
	}
	// @Override
	public exitRule(listener: bitmarkParserListener): void {
		if (listener.exitBook_endnotes) {
			listener.exitBook_endnotes(this);
		}
	}
}


export class Book_notesContext extends ParserRuleContext {
	public BitBookNotes(): TerminalNode { return this.getToken(bitmarkParser.BitBookNotes, 0); }
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
	public get ruleIndex(): number { return bitmarkParser.RULE_book_notes; }
	// @Override
	public enterRule(listener: bitmarkParserListener): void {
		if (listener.enterBook_notes) {
			listener.enterBook_notes(this);
		}
	}
	// @Override
	public exitRule(listener: bitmarkParserListener): void {
		if (listener.exitBook_notes) {
			listener.exitBook_notes(this);
		}
	}
}


export class Book_copyright_permissionsContext extends ParserRuleContext {
	public BitBookCopyrightPermissions(): TerminalNode { return this.getToken(bitmarkParser.BitBookCopyrightPermissions, 0); }
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
	public get ruleIndex(): number { return bitmarkParser.RULE_book_copyright_permissions; }
	// @Override
	public enterRule(listener: bitmarkParserListener): void {
		if (listener.enterBook_copyright_permissions) {
			listener.enterBook_copyright_permissions(this);
		}
	}
	// @Override
	public exitRule(listener: bitmarkParserListener): void {
		if (listener.exitBook_copyright_permissions) {
			listener.exitBook_copyright_permissions(this);
		}
	}
}


export class Book_teaserContext extends ParserRuleContext {
	public BitBookTeaser(): TerminalNode { return this.getToken(bitmarkParser.BitBookTeaser, 0); }
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
	public get ruleIndex(): number { return bitmarkParser.RULE_book_teaser; }
	// @Override
	public enterRule(listener: bitmarkParserListener): void {
		if (listener.enterBook_teaser) {
			listener.enterBook_teaser(this);
		}
	}
	// @Override
	public exitRule(listener: bitmarkParserListener): void {
		if (listener.exitBook_teaser) {
			listener.exitBook_teaser(this);
		}
	}
}


export class Book_auther_bioContext extends ParserRuleContext {
	public BitBookAutherBio(): TerminalNode { return this.getToken(bitmarkParser.BitBookAutherBio, 0); }
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
	public get ruleIndex(): number { return bitmarkParser.RULE_book_auther_bio; }
	// @Override
	public enterRule(listener: bitmarkParserListener): void {
		if (listener.enterBook_auther_bio) {
			listener.enterBook_auther_bio(this);
		}
	}
	// @Override
	public exitRule(listener: bitmarkParserListener): void {
		if (listener.exitBook_auther_bio) {
			listener.exitBook_auther_bio(this);
		}
	}
}


export class Book_request_for_a_book_reviewContext extends ParserRuleContext {
	public BitBookRequestForABookReview(): TerminalNode { return this.getToken(bitmarkParser.BitBookRequestForABookReview, 0); }
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
	public get ruleIndex(): number { return bitmarkParser.RULE_book_request_for_a_book_review; }
	// @Override
	public enterRule(listener: bitmarkParserListener): void {
		if (listener.enterBook_request_for_a_book_review) {
			listener.enterBook_request_for_a_book_review(this);
		}
	}
	// @Override
	public exitRule(listener: bitmarkParserListener): void {
		if (listener.exitBook_request_for_a_book_review) {
			listener.exitBook_request_for_a_book_review(this);
		}
	}
}


export class Book_coming_soonContext extends ParserRuleContext {
	public BitBookComingSoon(): TerminalNode { return this.getToken(bitmarkParser.BitBookComingSoon, 0); }
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
	public get ruleIndex(): number { return bitmarkParser.RULE_book_coming_soon; }
	// @Override
	public enterRule(listener: bitmarkParserListener): void {
		if (listener.enterBook_coming_soon) {
			listener.enterBook_coming_soon(this);
		}
	}
	// @Override
	public exitRule(listener: bitmarkParserListener): void {
		if (listener.exitBook_coming_soon) {
			listener.exitBook_coming_soon(this);
		}
	}
}


export class Book_read_moreContext extends ParserRuleContext {
	public BitBookReadMore(): TerminalNode { return this.getToken(bitmarkParser.BitBookReadMore, 0); }
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
	public get ruleIndex(): number { return bitmarkParser.RULE_book_read_more; }
	// @Override
	public enterRule(listener: bitmarkParserListener): void {
		if (listener.enterBook_read_more) {
			listener.enterBook_read_more(this);
		}
	}
	// @Override
	public exitRule(listener: bitmarkParserListener): void {
		if (listener.exitBook_read_more) {
			listener.exitBook_read_more(this);
		}
	}
}


export class Book_summaryContext extends ParserRuleContext {
	public BitBookSummary(): TerminalNode { return this.getToken(bitmarkParser.BitBookSummary, 0); }
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
	public get ruleIndex(): number { return bitmarkParser.RULE_book_summary; }
	// @Override
	public enterRule(listener: bitmarkParserListener): void {
		if (listener.enterBook_summary) {
			listener.enterBook_summary(this);
		}
	}
	// @Override
	public exitRule(listener: bitmarkParserListener): void {
		if (listener.exitBook_summary) {
			listener.exitBook_summary(this);
		}
	}
}


export class Book_epigraphContext extends ParserRuleContext {
	public BitBookEpigraph(): TerminalNode { return this.getToken(bitmarkParser.BitBookEpigraph, 0); }
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
	public get ruleIndex(): number { return bitmarkParser.RULE_book_epigraph; }
	// @Override
	public enterRule(listener: bitmarkParserListener): void {
		if (listener.enterBook_epigraph) {
			listener.enterBook_epigraph(this);
		}
	}
	// @Override
	public exitRule(listener: bitmarkParserListener): void {
		if (listener.exitBook_epigraph) {
			listener.exitBook_epigraph(this);
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


