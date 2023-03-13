# bitmark-grammar

* Last update March 13, 2023

##### Update

This is now a public package. 


##### Install

npm i bitmark-grammar


##### Using the parser

The API function is parse(). It will accept either bit text or a filepath as an argument to it. parse() function will return the result JSON text.

These are simple examples. You can either pass bit text or a filepath to parse() function.

```
// Sample 1
const bg = require('./bitmark-grammar');
try {
  let json = bg.parse('/tmp/bug.bit');
  console.log(json);
}
catch(e) {
  console.error(e);
}

// Sample 2
const fs = require('fs');
const bg = require('./bitmark-grammar');

try {
  let path = '/tmp/bug.bit';
  
  let bittext = fs.readFileSync(path, 'utf8');
  let json = bg.parse(bittext);
  console.log(json);
}
catch(e) {
  console.error(e);
}


```
