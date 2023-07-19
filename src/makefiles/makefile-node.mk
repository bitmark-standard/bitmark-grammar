#
# makefile
#
NODE_MODULES=../node_modules
ANTLR4TS=$(NODE_MODULES)/antlr4ts
ANTLR_OPT=-Dlanguage=JavaScript  -o ./
TYPESCRIPTCOMPILER=$(NODE_MODULES)/.bin/tsc

BABEL_DIR=./babel
.PHONY: build es6 

antlr_dir=./typescript/

bitmark_lexer_file=$(antlr_dir)/bitmarkLexer.g4
bitmark_parser_file=$(antlr_dir)/bitmarkParser.g4
js_files = bitmarkLexer.js bitmarkParser.js bitmarkListener.js

cloze_lexer_file=./Cloze/clozeLexer.g4
cloze_parser_file=./Cloze/clozeParser.g4
cloze_js_files = clozeLexer.js clozeParser.js

match_lexer_file=./Match/matchLexer.g4
match_parser_file=./Match/matchParser.g4
match_js_files = matchLexer.js matchParser.js

choice_lexer_file=./Choice/choiceLexer.g4
choice_parser_file=./Choice/choiceParser.g4
choice_js_files = choiceLexer.js choiceParser.js

interview_lexer_file=./Interview/interviewLexer.g4
interview_parser_file=./Interview/interviewParser.g4
interview_js_files = interviewLexer.js interviewParser.js

truefalse_lexer_file=./Truefalse/truefalseLexer.g4
truefalse_parser_file=./Truefalse/truefalseParser.g4
truefalse_js_files = truefalseLexer.js truefalseParser.js

flashcard_lexer_file=./Flashcard/flashcardLexer.g4
flashcard_parser_file=./Flashcard/flashcardParser.g4
flashcard_js_files = flashcardLexer.js flashcardParser.js

chat_lexer_file=./Chat/chatLexer.g4
chat_parser_file=./Chat/chatParser.g4
chat_js_files = chatLexer.js chatParser.js

sequence_lexer_file=./Sequence/sequenceLexer.g4
sequence_parser_file=./Sequence/sequenceParser.g4
sequence_js_files = sequenceLexer.js sequenceParser.js

common_lexer_file=./typescript/common_lexer.g4
common_parser_file=./typescript/common_parser.g4

.DEFAULT_GOAL = es6

es6: $(grammar_file)
	$(NODE_MODULES)/antlr4ts-cli/antlr4ts $(ANTLR_OPT) $(bitmark_lexer_file);
	$(NODE_MODULES)/antlr4ts-cli/antlr4ts $(ANTLR_OPT) $(bitmark_parser_file);
	$(TYPESCRIPTCOMPILER) $(antlr_dir)/*.ts -experimentalDecorators --strict true --module commonjs  --target es2015 -lib es2015 --moduleResolution Node --outDir ./typescript

	$(NODE_MODULES)/antlr4ts-cli/antlr4ts $(ANTLR_OPT) $(cloze_lexer_file);
	$(NODE_MODULES)/antlr4ts-cli/antlr4ts $(ANTLR_OPT) $(cloze_parser_file);
	$(NODE_MODULES)/.bin/tsc ./Cloze/*.ts -experimentalDecorators --strict true --module commonjs  --target es2015 -lib es2015 --moduleResolution Node --outDir ./Cloze

	$(NODE_MODULES)/antlr4ts-cli/antlr4ts $(ANTLR_OPT) $(match_lexer_file);
	$(NODE_MODULES)/antlr4ts-cli/antlr4ts $(ANTLR_OPT) $(match_parser_file);
	$(NODE_MODULES)/.bin/tsc ./Match/*.ts  -experimentalDecorators --strict true --module commonjs  --target es2015 -lib es2015 --moduleResolution Node --outDir ./Match

	$(NODE_MODULES)/antlr4ts-cli/antlr4ts $(ANTLR_OPT) $(choice_lexer_file);
	$(NODE_MODULES)/antlr4ts-cli/antlr4ts $(ANTLR_OPT) $(choice_parser_file);
	$(NODE_MODULES)/.bin/tsc ./Choice/*.ts -experimentalDecorators --strict true --module commonjs  --target es2015 -lib es2015 --moduleResolution Node --outDir ./Choice

	$(NODE_MODULES)/antlr4ts-cli/antlr4ts $(ANTLR_OPT) $(interview_lexer_file);
	$(NODE_MODULES)/antlr4ts-cli/antlr4ts $(ANTLR_OPT) $(interview_parser_file);
	$(NODE_MODULES)/.bin/tsc ./Interview/*.ts -experimentalDecorators --strict true --module commonjs  --target es2015 -lib es2015 --moduleResolution Node --outDir ./Interview

	$(NODE_MODULES)/antlr4ts-cli/antlr4ts $(ANTLR_OPT) $(truefalse_lexer_file);
	$(NODE_MODULES)/antlr4ts-cli/antlr4ts $(ANTLR_OPT) $(truefalse_parser_file);
	$(NODE_MODULES)/.bin/tsc ./Truefalse/*.ts -experimentalDecorators --strict true --module commonjs  --target es2015 -lib es2015 --moduleResolution Node --outDir ./Truefalse

	$(NODE_MODULES)/antlr4ts-cli/antlr4ts $(ANTLR_OPT) $(flashcard_lexer_file);
	$(NODE_MODULES)/antlr4ts-cli/antlr4ts $(ANTLR_OPT) $(flashcard_parser_file);
	$(NODE_MODULES)/.bin/tsc ./Flashcard/*.ts -experimentalDecorators --strict true --module commonjs  --target es2015 -lib es2015 --moduleResolution Node --outDir ./Flashcard

	$(NODE_MODULES)/antlr4ts-cli/antlr4ts $(ANTLR_OPT) $(chat_lexer_file);
	$(NODE_MODULES)/antlr4ts-cli/antlr4ts $(ANTLR_OPT) $(chat_parser_file);
	$(NODE_MODULES)/.bin/tsc ./Chat/*.ts -experimentalDecorators --strict true --module commonjs  --target es2015 -lib es2015 --moduleResolution Node --outDir ./Chat

	$(NODE_MODULES)/antlr4ts-cli/antlr4ts $(ANTLR_OPT) $(sequence_lexer_file);
	$(NODE_MODULES)/antlr4ts-cli/antlr4ts $(ANTLR_OPT) $(sequence_parser_file);
	$(NODE_MODULES)/.bin/tsc ./Sequence/*.ts -experimentalDecorators --strict true --module commonjs  --target es2015 -lib es2015 --moduleResolution Node --outDir ./Sequence



clean:
	$(RM) $(js_files) ./typescript/*.ts ./typescript/antlr/*
