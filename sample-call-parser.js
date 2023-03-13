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

