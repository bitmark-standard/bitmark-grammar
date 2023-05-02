#
# makefile
#
NODE_MODULES=../node_modules
ANTLR4TS=$(NODE_MODULES)/antlr4ts
ANTLR_OPT=-Dlanguage=JavaScript  -o ./
TYPESCRIPTCOMPILER=$(NODE_MODULES)/.bin/tsc
PYTHON_EXECUTABLE=$(shell which python 2>/dev/null || which python3 2>/dev/null)

BABEL_DIR=./babel
.PHONY: build es6 

antlr_dir=./Match/
ts_dir=./typescript-es6/

common_lexer_file=./typescript/common_lexer.g4
common_parser_file=./typescript/common_parser.g4
match_lexer_file=./Match/matchLexer.g4
match_parser_file=./Match/matchParser.g4
match_js_files = matchLexer.js matchParser.js

lexer_file=$(antlr_dir)/matchLexer.g4
parser_file=$(antlr_dir)/matchParser.g4
js_files = matchLexer.js matchParser.js matchListener.js

.DEFAULT_GOAL = es6

es6: $(grammar_file)
	$(PYTHON_EXECUTABLE) ./tools/replace_parser_content.py ./Match/_matchLexer.g4 $(common_lexer_file) $(match_lexer_file) '<<<<<<common<<<<<<'
	$(PYTHON_EXECUTABLE) ./tools/replace_parser_content.py ./Match/_matchParser.g4 $(common_parser_file) $(match_parser_file) '<<<<<<common<<<<<<'
	$(NODE_MODULES)/antlr4ts-cli/antlr4ts $(ANTLR_OPT) $(match_lexer_file);
	$(NODE_MODULES)/antlr4ts-cli/antlr4ts $(ANTLR_OPT) $(match_parser_file);
	cp ./Match/*.ts $(ts_dir)

clean:
	$(RM) $(js_files) ./Match/*.ts ./Match/antlr/*
