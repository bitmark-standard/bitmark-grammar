# npm-exists

[![Greenkeeper badge](https://badges.greenkeeper.io/parro-it/npm-exists.svg)](https://greenkeeper.io/)

check if a package exists on npm

[![Build Status](https://secure.travis-ci.org/parro-it/npm-exists.png?branch=master)](http://travis-ci.org/parro-it/npm-exists)
[![NPM module](https://img.shields.io/npm/v/npm-exists.svg)](https://npmjs.org/package/npm-exists)
[![NPM downloads](https://img.shields.io/npm/dt/npm-exists.svg)](https://npmjs.org/package/npm-exists)

# Getting Started

__Install__:

```sh
npm install npm-exists --save
```

__Usage__:

```js
const exists = require('npm-exists');

exists('request')
	.then(moduleExists => {
		if (moduleExists) {
			console.log('gosh, `request` name already taken!');
		} else {
			console.log('you can register `request`');
		}
	});

// use custom registry:
exists('request', 'http://localhost:5432/')
	.then(moduleExists => {
		console.log(moduleExists);
	});
```

# License

MIT © 2016, Andrea Parodi
