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

lexer_file=$(build_dir)/matchLexer.g4
parser_file=$(build_dir)/matchParser.g4
common_lexer=$(build_dir)/common_lexer.g4
common_parser=$(build_dir)/common_parser.g4
build_dir=./build

js_files = matchLexer.js matchParser.js matchListener.js

.DEFAULT_GOAL = es6

es6: $(grammar_file)
	python tools/replace_parser_content.py $(grammar_dir)/_matchLexer.g4 $(common_lexer)   $(build_dir)/matchLexer.g4 '<<<<<<common<<<<<<'
	python tools/replace_parser_content.py $(grammar_dir)/_matchParser.g4 $(common_parser) $(build_dir)/matchParser.g4 '<<<<<<common<<<<<<'
	$(NODE_MODULES)/antlr4ts-cli/antlr4ts $(ANTLR_OPT) $(build_dir)/matchLexer.g4
	$(NODE_MODULES)/antlr4ts-cli/antlr4ts $(ANTLR_OPT) $(build_dir)/matchParser.g4
	$(TYPESCRIPTCOMPILER) $(build_dir)/match*.ts -experimentalDecorators --strict true --module commonjs  --target es2015 -lib es2015 --moduleResolution Node --outDir $(build_dir)

clean:
	$(RM) $(js_files) $(build_dir)/*.ts
