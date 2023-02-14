#
# Supposed to be in build/worker
#
.PHONY: update 

CD=cd
SRC=../src

SRCDIR=$(SRC)/
PARSERDIR=$(SRC)/typescript/

TMP=$(SRC)/tmp
DIST=./dist
BROWSERIFY_DEBUG_OPTION=--debug
MKDIR_P=mkdir -p

NPM_BIN=../node_modules/.bin/
NPM_BIN2=node_modules/.bin/
BUNDLE_NAME=bitmark-bundle
UGLIFY_FROM_TMP=../node_modules/.bin/uglifyjs

SRCFILES   = parser-call.js bitmark-listener.js stack.js bit-utils.js bit-template.js
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
	$(NPM_BIN)/webpack -d --config ./webpack.config.js

clean:
	cd ..;
	$(CD) worker; \
	rm $(TMP)/* $(WWW_JS)/nw-bundle*
