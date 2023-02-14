#
# makefile-choice-ts.mk
#
NODE_MODULES=../../node_modules
ANTLR4TS=$(NODE_MODULES)/antlr4ts
ANTLR_OPT=-Dlanguage=JavaScript  -o ./
TYPESCRIPTCOMPILER=$(NODE_MODULES)/.bin/tsc

BABEL_DIR=./babel
.PHONY: build es6 

antlr_dir=.

lexer_file=$(antlr_dir)/choiceLexer.g4
parser_file=$(antlr_dir)/choiceParser.g4
js_files = choiceLexer.js choiceParser.js choiceListener.js
.DEFAULT_GOAL = es6

es6: $(grammar_file)
	$(NODE_MODULES)/antlr4ts-cli/antlr4ts $(ANTLR_OPT) $(lexer_file);
	$(NODE_MODULES)/antlr4ts-cli/antlr4ts $(ANTLR_OPT) $(parser_file);
	$(TYPESCRIPTCOMPILER) $(antlr_dir)/*.ts -experimentalDecorators --strict true --module commonjs  --target es2015 -lib es2015 --moduleResolution Node --outDir ./

clean:
	$(RM) $(js_files) ./*.ts
