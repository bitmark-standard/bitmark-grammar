#
# modkitIo makefile
#
ANTLR4=java -Xmx500M -cp ../tools/antlr-4.8-complete.jar org.antlr.v4.Tool
ANTLR_OPT=-Dlanguage=JavaScript
BABEL_DIR=./babel
NODE_MODULES=../node_modules
.PHONY: build es6 

antlr_dir=antlr
grammar_file=$(antlr_dir)/bitmark.g4
js_files = bitmarkLexer.js bitmarkParser.js bitmarkListener.js
ts_files = bitmarkLexer.ts bitmarkParser.ts bitmarkListener.ts 

.DEFAULT_GOAL = es6

es6: $(grammar_file)
	$(NODE_MODULES)/antlr4ts-cli/antlr4ts -visitor $(grammar_file);
	#$(NODE_MODULES)/ntypescript/bin/tsc $(antlr_dir)/*.ts -experimentalDecorators -target es6 -lib es6 --moduleResolution Node --outDir ./

clean:
	$(RM) $(js_files) $(antlr_dir)/$(ts_files)
