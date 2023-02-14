#
# Supposed to be in build/worker
#
.PHONY: update 

CD=cd
SRC=../src

SRCDIR=$(SRC)/
PARSERDIR=$(SRC)/typescript-es6/

TMP=$(SRC)/tmp
DIST=./dist
BROWSERIFY_DEBUG_OPTION=--debug
MKDIR_P=mkdir -p

NPM_BIN=../node_modules/.bin/
NPM_BIN2=node_modules/.bin/
BUNDLE_NAME=bitmark-bundle
UGLIFY_FROM_TMP=../node_modules/.bin/uglifyjs

SRCFILES   = index.mjs bitmark-listener.mjs stack.mjs bit-utils.mjs bit-template.mjs
ANTLRFILES = bitmarkLexer.js bitmarkParser.js 

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
	$(NPM_BIN)/webpack -d --config ./webpack.config.es6.noclosure.js
	cp ../dist/bitmark.bundle.es6.js /Library/WebServer/Documents/bitmark/js

clean:
	cd ..;
	$(CD) worker; \
	rm $(TMP)/* $(WWW_JS)/nw-bundle*
