#! /usr/bin/env node

var shell = require('shelljs');

var arguments = ' ' + process.argv.splice(2).join(' ');
shell.exec('java -jar ' + __dirname + '/antlr-4.5-complete.jar' + arguments);
