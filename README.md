# bitmark-grammar

* Last update Feb 15, 2023, bundle version 1.0.12

##### Update

This is now a public package. 



##### Preparing the environment
You need the latest Node.js, ANTLR parser generator jar file is in the "tools" directory. It is antlr-4.8-complete.jar at this point, and is a bit older than the latest (version 4.11). For building the parser you need the v4.8 as it is written in the makefiles. You also need a python3 installed.

Make sure to install all necessary node modules.
If you don't have ".npmrc" in the root directory, please run this command to create it. The file should contain "legacy-peer-deps=true" line.
```
$ npm config set legacy-peer-deps true
```

Then please run these
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


END
