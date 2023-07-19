# bitmark-grammar

* Last update July 19, 2023


##### Preparing the build environment

Make sure to install all necessary node modules.
```
$ cd bitmark-grammar
$ npm install
```

###### Tests

Test one bitmark

This command will run the parser on the target bit file and output json for it. cd to the 'src' directory and run

```
$ node call.js <testfilename>
```

Bulk testing

This command tests the parser with the included test files in /src/tests. The --diff option compares the result with the expected result in src/tests/EXPECTED.JSON. If the result is not the same as the expected, it will show up. cd to the 'src' directory and run

```
$ node test-all.js --diff
```



##### Using BitmarkParser in your Javascript code

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
