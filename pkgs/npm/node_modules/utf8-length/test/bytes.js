var bytes = require('../');
var test = require('tape');

test('number of bytes', function (t) {
    t.equal(bytes('¡dooq dǝǝq'), 13);
    t.equal(bytes('\uD83D\uDCA9'), 4); // pile of poo
    t.equal(bytes('é\uD83D\uDCA9ä'), 8);
    t.equal(bytes(''), 0);
    t.equal(bytes('abc'), 3);
    t.equal(bytes('abc₫'), 6);
    t.end();
});
