# utf8-length

return the number of bytes in a unicode string

[![build status](https://secure.travis-ci.org/substack/utf8-length.png)](http://travis-ci.org/substack/utf8-length)

# example

``` js
var bytes = require('utf8-length');
console.log(bytes('¡dooq dǝǝq'));
```

result:

```
$ node example/beep.js
13
```

# methods

``` js
var bytes = require('utf8-length')
```

## bytes(string)

Return the number of bytes needed to store `string`.

# install

With [npm](https://npmjs.org) do:

```
npm install utf8-bytes
```

# license

MIT
