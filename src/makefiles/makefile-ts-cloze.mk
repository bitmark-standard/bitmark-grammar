#
# makefile
#
NODE_MODULES=../node_modules
ANTLR4TS=$(NODE_MODULES)/antlr4ts
ANTLR_OPT=-Dlanguage=JavaScript  -o ./
TYPESCRIPTCOMPILER=$(NODE_MODULES)/.bin/tsc

BABEL_DIR=./babel
.PHONY: build es6 

antlr_dir=./Cloze/

lexer_file=$(antlr_dir)/clozeLexer.g4
parser_file=$(antlr_dir)/clozeParser.g4
js_files = clozeLexer.js clozeParser.js clozeListener.js

.DEFAULT_GOAL = es6

es6: $(grammar_file)
	python replace_parser_content.py ./Cloze/_clozeLexer.g4 ./typescript/common_lexer.g4 ./Cloze/clozeLexer.g4 '<<<<<<common<<<<<<'
	python replace_parser_content.py ./Cloze/_clozeParser.g4 ./typescript/common_parser.g4 ./Cloze/clozeParser.g4 '<<<<<<common<<<<<<'
	$(NODE_MODULES)/antlr4ts-cli/antlr4ts $(ANTLR_OPT) $(lexer_file);
	$(NODE_MODULES)/antlr4ts-cli/antlr4ts $(ANTLR_OPT) $(parser_file);
	$(TYPESCRIPTCOMPILER) $(antlr_dir)/*.ts -experimentalDecorators --strict true --module commonjs  --target es2015 -lib es2015 --moduleResolution Node --outDir  $(antlr_dir)

clean:
	$(RM) $(js_files) ./Cloze/*.ts ./Cloze/antlr/*
