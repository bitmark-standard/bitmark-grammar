#
# makefile
# Builds the bitmark parser source for Javascript bundle.
#
NODE_MODULES=../node_modules
PYTHON_EXECUTABLE=$(shell which python 2>/dev/null || which python3 2>/dev/null)

ANTLR4TS=$(NODE_MODULES)/antlr4ts
ANTLR_OPT=-Dlanguage=JavaScript -o ./
TYPESCRIPTCOMPILER=$(NODE_MODULES)/typescript/bin/tsc
RM=rm

BABEL_DIR=./babel
.PHONY: build es6 

antlr_dir=./typescript/
ts_dir=./typescript-es6/

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
	$(PYTHON_EXECUTABLE) ./tools/replace_parser_content.py ./typescript/_bitmarkLexer.g4 $(common_lexer_file) $(bitmark_lexer_file) '<<<<<<common<<<<<<'
	$(PYTHON_EXECUTABLE) ./tools/replace_parser_content.py ./typescript/_bitmarkParser.g4 $(common_parser_file) $(bitmark_parser_file) '<<<<<<common<<<<<<'
	$(NODE_MODULES)/antlr4ts-cli/antlr4ts $(ANTLR_OPT) $(bitmark_lexer_file);
	$(NODE_MODULES)/antlr4ts-cli/antlr4ts $(ANTLR_OPT) $(bitmark_parser_file);
	cp $(antlr_dir)/*.ts $(ts_dir)
	$(NODE_MODULES)/.bin/tsc $(ts_dir)/*.ts -experimentalDecorators -target es6 --module esnext --moduleResolution Node
