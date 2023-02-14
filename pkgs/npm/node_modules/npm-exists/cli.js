#!/usr/bin/env node
'use strict';

const [packageName] = process.argv.slice(2);
const npmExists = require('.');

if (packageName) {
	npmExists(packageName).then(exists => {
		if (exists) {
			process.stdout.write(`Package ${packageName} is already registered.`);
			process.exit(0);
		}
		process.stdout.write(`Package ${packageName} is available.`);
		process.exit(1);
	});
} else {
	process.stderr.write('Usage: npm-exists <package name>\n\n');
}
