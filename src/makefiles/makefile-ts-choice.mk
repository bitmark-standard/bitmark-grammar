#
# makefile
#
NODE_MODULES=../node_modules
ANTLR4TS=$(NODE_MODULES)/antlr4ts
ANTLR_OPT=-Dlanguage=JavaScript  -o ./
TYPESCRIPTCOMPILER=$(NODE_MODULES)/.bin/tsc

BABEL_DIR=./babel
.PHONY: build es6 

antlr_dir=./Choice/

lexer_file=$(antlr_dir)/choiceLexer.g4
parser_file=$(antlr_dir)/choiceParser.g4
js_files = choiceLexer.js choiceParser.js choiceListener.js

.DEFAULT_GOAL = es6

es6: $(grammar_file)
	python replace_parser_content.py ./Choice/_choiceLexer.g4 ./typescript/common_lexer.g4 ./Choice/choiceLexer.g4 '<<<<<<common<<<<<<'
	python replace_parser_content.py ./Choice/_choiceParser.g4 ./typescript/common_parser.g4 ./Choice/choiceParser.g4 '<<<<<<common<<<<<<'
	$(NODE_MODULES)/antlr4ts-cli/antlr4ts $(ANTLR_OPT) $(lexer_file);
	$(NODE_MODULES)/antlr4ts-cli/antlr4ts $(ANTLR_OPT) $(parser_file);
	$(TYPESCRIPTCOMPILER) $(antlr_dir)/*.ts -experimentalDecorators --strict true --module commonjs  --target es2015 -lib es2015 --moduleResolution Node --outDir  $(antlr_dir)

clean:
	$(RM) $(js_files) ./Choice/*.ts ./Choice/antlr/*
