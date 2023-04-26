# bitmark-grammar

* Last update Oct 2, 2020, bundle version 1.2.0

##### Update

This version 1.2.0 or newer no longer abort parsing on an error (first error) but continues parsing till the end of the input bitmark text.

The parser throws an exception and returns a list of all errors found in the parsing process. 




##### Preparing the environment
You need the latest Node.js. Antlr latest jar file is inside the source tree under the "tools" directory.

Make sure to install all necessary node modules.
```
$ cd bitmark-grammar
$ npm install
```

###### Building the webpack bundle.
```
$ npm run build
```

###### Running the bulk test
```
$ cd src
$ node test-all.js
```


##### Using BitmapParser in your Javascript code

First, please refer to call-test.js. It is how you integrate the parser with your Javascript code. This is basically only what you need to do.
```
    let parser = require('./index.js');
    ...

    // Currently the options we have are debug and trace only
    options = {
      trace: trace,
      debug: debug,
    };
    text = ...whatever text you have you want to parse.    
    let bitmark = new parser.BitmarkParser(text, options);

    // parse() returns json on success and null on parse error.
    let obj = bitmark.parse();
    if (obj)
       console.log(JSON.stringify(obj,null,4));

on your parse error catch clause
   call bitmark.get_errorJson() to get the error meesage packed in JSON format.



```

##### Webpack bundle for the browser use (updated on Aug 26, 2020)

The latest bundle "bitmark.bundle.e$(version).s6.js" is in the "/dist" directory. The bundle include the "index.js" explained above and all javascript code used from it. It can be rebuilt by this command.
```
$ npm run build
```
To change the version number of the bundle, you need to edit the LINE 13 of package.json. It is like
   export BITMARK_BUNDLE_VERSION=1.0.9 and all other 1.0.9 string to newer version number.

The created bundle will be in /dist directory. For the example usage, please refer to /webpack/index.html.
It uses Google Closure to minify the Javascript code.



##### Separate the parser for each different bit

Cloze done
[.cloze]
[.cloze-solution-grouped]
[.cloze-instruction-grouped]
[.cloze-and-multiple-choice-text]

Match done
[.match]
[.match-all]
[.match-matrix]
[.match-solution-grouped]

Choice done
[.multiple-choice]
[.multiple-response]
[.multiple-choice-text]
Interview done
[.interview]
[.interview-instruction-grouped]

TrueFalse parser
[.true-false]

Flashcard parser
[.flashcard-*]

Chat parser
[.chat]
[.conversation]

These are in bitmarkParser.g4
[.essay]
[.correction]
[.mark]
[.assignment]
[.article]
[.bot-interview]
[.self-assessment]
[.preparation-note]
[.sequence]
[.document_upload]
[.take_picture]
[.record_audio]


##### TODO

1) bit head ([.what:theheck++]) in the text.

Steps to avoid
1. find the occurence of all bit heads
2. Save all in the order it appears
3. Replace them with <h>N</h> where N is the sequence number starting with 0 <h>0</h>
4. Parse the bithead replaced text
5. Unreplace the replaced.