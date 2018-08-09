[![*nix build status][nix-build-image]][nix-build-url]
[![Windows build status][win-build-image]][win-build-url]
[![Tests coverage][cov-image]][cov-url]
[![npm version][npm-image]][npm-url]

# es-async

## ES2017 async functions compiler

Backed by [nodent-compiler](https://github.com/MatAtBread/nodent-compiler), compiles async/await syntax into valid ES2016 code.

### Installation

    $ npm install es-async

### CLI usage

Compile JS file using async/await into ES2016 compliant JS file:

```sh
npx es-async path-to-es2017-file.js > path-to-es2016-file.js
```

### Programmatical usage

#### Compile async code directly

```javascript
const compileAsync = require("es-async");

const es2016Code = compileAsync(es2017Code);
```

#### Compile specific file

```javascript
const compileAsyncFromFile = require("es-async/from-file");

compileFromFile(es2017Filename).then(es2016Code => {
	// Process compiled code
});
```

### Result examples

See [online demo](http://nodent.mailed.me.uk/#~options~%7B%22mode%22%3A%22promises%22%2C%22promiseType%22%3A%22native%22%2C%22noRuntime%22%3Atrue%2C%22es6target%22%3Atrue%2C%22wrapAwait%22%3Atrue%2C%22spec%22%3Atrue%7D). Compilation is handled by preconfigured (to reflect _native_ behavior backed by _native_ promises) [nodent-compiler](https://github.com/MatAtBread/nodent-compiler)

<table>
<thead><tr><th>ES2017</th><th>ES016</th></thead>
<tbody>
<tr>
<td>
<pre><code>async function asyncAdd(left) {
  return left + (await right);
}
</pre></code>
</td>
<td>
<pre><code>function asyncAdd(left) {
    return new Promise(($return, $error) =>
      Promise.resolve(right).then($await_1 => {
        try {
            return $return(left + $await_1);
        } catch ($boundEx) {
            return $error($boundEx);
        }
      }, $error)
    );
}
</pre></code>
</td>
</tr>
</tbody>
</table>

### Tests

    $ npm test

Project cross-browser compatibility supported by:

<a href="https://browserstack.com"><img src="https://bstacksupport.zendesk.com/attachments/token/Pj5uf2x5GU9BvWErqAr51Jh2R/?name=browserstack-logo-600x315.png" height="150" /></a>

[nix-build-image]: https://semaphoreci.com/api/v1/medikoo-org/es-async/branches/master/shields_badge.svg
[nix-build-url]: https://semaphoreci.com/medikoo-org/es-async
[win-build-image]: https://ci.appveyor.com/api/projects/status/4xhmavd84yuj53fd?svg=true
[win-build-url]: https://ci.appveyor.com/project/medikoo/es-async
[cov-image]: https://img.shields.io/codecov/c/github/medikoo/es-async.svg
[cov-url]: https://codecov.io/gh/medikoo/es-async
[npm-image]: https://img.shields.io/npm/v/es-async.svg
[npm-url]: https://www.npmjs.com/package/es-async
