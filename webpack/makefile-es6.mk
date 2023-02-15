#
# Supposed to be in build/worker
#
.PHONY: update 

CD=cd
SRC=../src
# Make this version match package.json version 
VERSION=1.1.7

SRCDIR=$(SRC)/
PARSERDIR=$(SRC)/typescript-es6/

UNAME_S := $(shell uname -s)

TMP=$(SRC)/tmp
DIST=./dist
BROWSERIFY_DEBUG_OPTION=--debug
MKDIR_P=mkdir -p

NPM_BIN=../node_modules/.bin/
NPM_BIN2=node_modules/.bin/
BUNDLE_NAME=bitmark-bundle
UGLIFY_FROM_TMP=../node_modules/.bin/uglifyjs

SRCFILES   = index.mjs bitmark-listener.mjs stack.mjs bit-utils.mjs bit-template.mjs
ANTLRFILES = bitmarkLexer.js bitmarkParser.js bitmarkListener.js bitmark.tokens 

.phony: clean copy update
#

SRCFILELIST = $(addprefix $(SRCDIR), $(SRCFILES))
ANTLRFILELIST = $(addprefix $(PARSERDIR), $(ANTLRFILES))

define UGLIFY_JS
 ./node_modules/.bin/uglifyjs ./src/tmp/$(strip $(1)) > ./src/tmp/$(strip $(1)).x;
 cp ./src/tmp/$(strip $(1)).x ./src/tmp/$(strip $(1));
 echo
endef


update:
	ifeq ($(UNAME_S),Linux)
		sed -i '/debugger/d' ../src/bitmark-listener.mjs
	endif
	ifeq ($(UNAME_S),Darwin)
		sed -i '.bak' '/debugger/d' ../src/bitmark-listener.mjs
	endif
	$(NPM_BIN)/webpack -d --config ./webpack.config.es6.js
	#cp dist/bitmark.bundle.$(VERSION).es6.js /Library/WebServer/Documents/bitmark/js

clean:
	cd ..;
	$(CD) worker; \
	rm $(TMP)/* $(WWW_JS)/nw-bundle*
