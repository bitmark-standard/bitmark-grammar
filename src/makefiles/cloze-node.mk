#
# makefile
#
NODE_MODULES=../node_modules
ANTLR4TS=$(NODE_MODULES)/antlr4ts
ANTLR_OPT=-Dlanguage=JavaScript  -o ./
TYPESCRIPTCOMPILER=$(NODE_MODULES)/.bin/tsc

BABEL_DIR=./babel
.PHONY: build es6 

grammar_dir=../node_modules/bitmark-antlr-grammars/antlr
grammar_files=../node_modules/bitmark-antlr-grammars/antlr/*.g4

lexer_file=$(grammar_dir)/clozeLexer.g4
parser_file=$(grammar_dir)/clozeParser.g4
common_lexer=$(grammar_dir)/common_lexer.g4
common_parser=$(grammar_dir)/common_parser.g4
build_dir=./build

js_files = clozeLexer.js clozeParser.js clozeListener.js

.DEFAULT_GOAL = es6

es6: $(grammar_file)
	python tools/replace_parser_content.py $(grammar_dir)/_clozeLexer.g4 $(common_lexer)   $(build_dir)/clozeLexer.g4 '<<<<<<common<<<<<<'
	python tools/replace_parser_content.py $(grammar_dir)/_clozeParser.g4 $(common_parser) $(build_dir)/clozeParser.g4 '<<<<<<common<<<<<<'
	$(NODE_MODULES)/antlr4ts-cli/antlr4ts $(ANTLR_OPT) $(build_dir)/clozeLexer.g4
	$(NODE_MODULES)/antlr4ts-cli/antlr4ts $(ANTLR_OPT) $(build_dir)/clozeParser.g4
	$(TYPESCRIPTCOMPILER) $(build_dir)/cloze*.ts -experimentalDecorators --strict true --module commonjs  --target es2015 -lib es2015 --moduleResolution Node --outDir $(build_dir)


clean:
	$(RM) $(js_files) ./Cloze/*.ts ./Cloze/antlr/*
