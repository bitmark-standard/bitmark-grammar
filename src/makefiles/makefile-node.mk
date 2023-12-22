#
# makefile
#
NODE_MODULES=../node_modules
ANTLR4TS=$(NODE_MODULES)/antlr4ts
ANTLR_OPT=-Dlanguage=JavaScript  -o ./
TYPESCRIPTCOMPILER=$(NODE_MODULES)/.bin/tsc
PYTHON=python3

BABEL_DIR=./babel
.PHONY: build es6 

build_dir=./antlr

grammar_dir=../node_modules/bitmark-antlr-grammars/antlr
common_lexer=$(grammar_dir)/common_lexer.g4
common_parser=$(grammar_dir)/common_parser.g4


bitmark_lexer_file=$(build_dir)/bitmarkLexer.g4
bitmark_parser_file=$(build_dir)/bitmarkParser.g4
js_files = bitmarkLexer.js bitmarkParser.js bitmarkListener.js

cloze_lexer_file=$(build_dir)/clozeLexer.g4
cloze_parser_file=$(build_dir)/clozeParser.g4
cloze_js_files = clozeLexer.js clozeParser.js

match_lexer_file=$(build_dir)/matchLexer.g4
match_parser_file=$(build_dir)/matchParser.g4
match_js_files = matchLexer.js matchParser.js

choice_lexer_file=$(build_dir)/choiceLexer.g4
choice_parser_file=$(build_dir)/choiceParser.g4
choice_js_files = choiceLexer.js choiceParser.js

interview_lexer_file=$(build_dir)/interviewLexer.g4
interview_parser_file=$(build_dir)/interviewParser.g4
interview_js_files = interviewLexer.js interviewParser.js

truefalse_lexer_file=$(build_dir)/truefalseLexer.g4
truefalse_parser_file=$(build_dir)/truefalseParser.g4
truefalse_js_files = truefalseLexer.js truefalseParser.js

flashcard_lexer_file=$(build_dir)/flashcardLexer.g4
flashcard_parser_file=$(build_dir)/flashcardParser.g4
flashcard_js_files = flashcardLexer.js flashcardParser.js

chat_lexer_file=$(build_dir)/chatLexer.g4
chat_parser_file=$(build_dir)/chatParser.g4
chat_js_files = chatLexer.js chatParser.js

sequence_lexer_file=$(build_dir)/sequenceLexer.g4
sequence_parser_file=$(build_dir)/sequenceParser.g4
sequence_js_files = sequenceLexer.js sequenceParser.js

.DEFAULT_GOAL = es6

es6: $(grammar_files)
	cp $(common_lexer) $(build_dir)
	cp $(common_parser) $(build_dir)

	$(PYTHON) ./tools/replace_parser_content.py $(grammar_dir)/_bitmarkLexer.g4 $(grammar_dir)/common_lexer.g4 $(bitmark_lexer_file) '<<<<<<common<<<<<<'
	$(PYTHON) ./tools/replace_parser_content.py $(grammar_dir)/_bitmarkParser.g4 $(grammar_dir)/common_parser.g4 $(bitmark_parser_file) '<<<<<<common<<<<<<'
	$(NODE_MODULES)/antlr4ts-cli/antlr4ts $(ANTLR_OPT) $(bitmark_lexer_file);
	$(NODE_MODULES)/antlr4ts-cli/antlr4ts $(ANTLR_OPT) $(bitmark_parser_file);
	$(TYPESCRIPTCOMPILER) $(build_dir)/*.ts -experimentalDecorators --strict true --module commonjs  --target es2015 -lib es2015 --moduleResolution Node --outDir $(build_dir)

	$(PYTHON) ./tools/replace_parser_content.py $(grammar_dir)/_clozeLexer.g4 $(grammar_dir)/common_lexer.g4 $(cloze_lexer_file) '<<<<<<common<<<<<<'
	$(PYTHON) ./tools/replace_parser_content.py $(grammar_dir)/_clozeParser.g4 $(grammar_dir)/common_parser.g4 $(cloze_parser_file) '<<<<<<common<<<<<<'
	$(NODE_MODULES)/antlr4ts-cli/antlr4ts $(ANTLR_OPT) $(cloze_lexer_file);
	$(NODE_MODULES)/antlr4ts-cli/antlr4ts $(ANTLR_OPT) $(cloze_parser_file);
	$(NODE_MODULES)/.bin/tsc $(build_dir)/*.ts -experimentalDecorators --strict true --module commonjs  --target es2015 -lib es2015 --moduleResolution Node --outDir $(build_dir)

	$(PYTHON) ./tools/replace_parser_content.py $(grammar_dir)/_matchLexer.g4 $(grammar_dir)/common_lexer.g4 $(match_lexer_file) '<<<<<<common<<<<<<'
	$(PYTHON) ./tools/replace_parser_content.py $(grammar_dir)/_matchParser.g4 $(grammar_dir)/common_parser.g4 $(match_parser_file) '<<<<<<common<<<<<<'
	$(NODE_MODULES)/antlr4ts-cli/antlr4ts $(ANTLR_OPT) $(match_lexer_file);
	$(NODE_MODULES)/antlr4ts-cli/antlr4ts $(ANTLR_OPT) $(match_parser_file);
	$(NODE_MODULES)/.bin/tsc $(build_dir)/*.ts  -experimentalDecorators --strict true --module commonjs  --target es2015 -lib es2015 --moduleResolution Node --outDir $(build_dir)

	$(PYTHON) ./tools/replace_parser_content.py $(grammar_dir)/_choiceLexer.g4 $(grammar_dir)/common_lexer.g4 $(choice_lexer_file) '<<<<<<common<<<<<<'
	$(PYTHON) ./tools/replace_parser_content.py $(grammar_dir)/_choiceParser.g4 $(grammar_dir)/common_parser.g4 $(choice_parser_file) '<<<<<<common<<<<<<'
	$(NODE_MODULES)/antlr4ts-cli/antlr4ts $(ANTLR_OPT) $(choice_lexer_file);
	$(NODE_MODULES)/antlr4ts-cli/antlr4ts $(ANTLR_OPT) $(choice_parser_file);
	$(NODE_MODULES)/.bin/tsc $(build_dir)/*.ts -experimentalDecorators --strict true --module commonjs  --target es2015 -lib es2015 --moduleResolution Node --outDir $(build_dir)

	$(PYTHON) ./tools/replace_parser_content.py $(grammar_dir)/_interviewLexer.g4 $(grammar_dir)/common_lexer.g4 $(interview_lexer_file) '<<<<<<common<<<<<<'
	$(PYTHON) ./tools/replace_parser_content.py $(grammar_dir)/_interviewParser.g4 $(grammar_dir)/common_parser.g4 $(interview_parser_file) '<<<<<<common<<<<<<'
	$(NODE_MODULES)/antlr4ts-cli/antlr4ts $(ANTLR_OPT) $(interview_lexer_file);
	$(NODE_MODULES)/antlr4ts-cli/antlr4ts $(ANTLR_OPT) $(interview_parser_file);
	$(NODE_MODULES)/.bin/tsc $(build_dir)/*.ts -experimentalDecorators --strict true --module commonjs  --target es2015 -lib es2015 --moduleResolution Node --outDir $(build_dir)

	$(PYTHON) ./tools/replace_parser_content.py $(grammar_dir)/_truefalseLexer.g4 $(grammar_dir)/common_lexer.g4 $(truefalse_lexer_file) '<<<<<<common<<<<<<'
	$(PYTHON) ./tools/replace_parser_content.py $(grammar_dir)/_truefalseParser.g4 $(grammar_dir)/common_parser.g4 $(truefalse_parser_file) '<<<<<<common<<<<<<'
	$(NODE_MODULES)/antlr4ts-cli/antlr4ts $(ANTLR_OPT) $(truefalse_lexer_file);
	$(NODE_MODULES)/antlr4ts-cli/antlr4ts $(ANTLR_OPT) $(truefalse_parser_file);
	$(NODE_MODULES)/.bin/tsc $(build_dir)/*.ts -experimentalDecorators --strict true --module commonjs  --target es2015 -lib es2015 --moduleResolution Node --outDir $(build_dir)

	$(PYTHON) ./tools/replace_parser_content.py $(grammar_dir)/_flashcardLexer.g4 $(grammar_dir)/common_lexer.g4 $(flashcard_lexer_file) '<<<<<<common<<<<<<'
	$(PYTHON) ./tools/replace_parser_content.py $(grammar_dir)/_flashcardParser.g4 $(grammar_dir)/common_parser.g4 $(flashcard_parser_file) '<<<<<<common<<<<<<'
	$(NODE_MODULES)/antlr4ts-cli/antlr4ts $(ANTLR_OPT) $(flashcard_lexer_file);
	$(NODE_MODULES)/antlr4ts-cli/antlr4ts $(ANTLR_OPT) $(flashcard_parser_file);
	$(NODE_MODULES)/.bin/tsc $(build_dir)/*.ts -experimentalDecorators --strict true --module commonjs  --target es2015 -lib es2015 --moduleResolution Node --outDir $(build_dir)

	$(PYTHON) ./tools/replace_parser_content.py $(grammar_dir)/_chatLexer.g4 $(grammar_dir)/common_lexer.g4 $(chat_lexer_file) '<<<<<<common<<<<<<'
	$(PYTHON) ./tools/replace_parser_content.py $(grammar_dir)/_chatParser.g4 $(grammar_dir)/common_parser.g4 $(chat_parser_file) '<<<<<<common<<<<<<'
	$(NODE_MODULES)/antlr4ts-cli/antlr4ts $(ANTLR_OPT) $(chat_lexer_file);
	$(NODE_MODULES)/antlr4ts-cli/antlr4ts $(ANTLR_OPT) $(chat_parser_file);
	$(NODE_MODULES)/.bin/tsc $(build_dir)/*.ts -experimentalDecorators --strict true --module commonjs  --target es2015 -lib es2015 --moduleResolution Node --outDir $(build_dir)

	$(PYTHON) ./tools/replace_parser_content.py $(grammar_dir)/_sequenceLexer.g4 $(grammar_dir)/common_lexer.g4 $(sequence_lexer_file) '<<<<<<common<<<<<<'
	$(PYTHON) ./tools/replace_parser_content.py $(grammar_dir)/_sequenceParser.g4 $(grammar_dir)/common_parser.g4 $(sequence_parser_file) '<<<<<<common<<<<<<'
	$(NODE_MODULES)/antlr4ts-cli/antlr4ts $(ANTLR_OPT) $(sequence_lexer_file);
	$(NODE_MODULES)/antlr4ts-cli/antlr4ts $(ANTLR_OPT) $(sequence_parser_file);
	$(NODE_MODULES)/.bin/tsc $(build_dir)/*.ts -experimentalDecorators --strict true --module commonjs  --target es2015 -lib es2015 --moduleResolution Node --outDir $(build_dir)



clean:
	$(RM) $(js_files) $(build_dir)* 
