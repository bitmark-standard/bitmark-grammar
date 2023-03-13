
const bg = require('./bitmark-grammar');


try {
  let json = bg.parse('/tmp/bug.bit');
  console.log(json);
}
catch(e) {
  console.error(e);
}

