# bitmark-grammar

* Last update April 21, 2023

##### Update

Re: auto-publish using github action

Stopped using github action to auto-publish due to an unknown difficulty, and we opted for the webhook we used to use to trigger CircleCI publish script.



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
