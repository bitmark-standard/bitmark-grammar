#
# modkitIo makefile
#
ANTLR4=java -Xmx500M -cp ../tools/antlr-4.8-complete.jar org.antlr.v4.Tool
ANTLR_OPT=-Dlanguage=JavaScript -visitor
BABEL_DIR=./babel
NODE_MODULES=../node_modules
.PHONY: build es6 

antlr_dir=antlr
grammar_file=$(antlr_dir)/bitmark.g4
js_files = bitmarkLexer.js bitmarkParser.js bitmarkListener.js

.DEFAULT_GOAL = es6

es6: $(grammar_file)
	$(NODE_MODULES)/antlr4-cli/bin/antlr4.js $(ANTLR_OPT) $(grammar_file);

clean:
	$(RM) $(js_files) 
