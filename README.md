[![Build status][circleci-image]][circleci-url]
[![Build status][appveyor-image]][appveyor-url]
[![Tests coverage][codecov-image]][codecov-url]

# es-async
## ES2017 async functions compiler
### Backed by [nodent-compiler](https://github.com/MatAtBread/nodent-compiler)

Compiles async/await syntax into valid ES2016 code.

[Online demo](http://nodent.mailed.me.uk/#~options~%7B%22mode%22%3A%22promises%22%2C%22promiseType%22%3A%22native%22%2C%22noRuntime%22%3Atrue%2C%22es6target%22%3Atrue%2C%22wrapAwait%22%3Atrue%2C%22spec%22%3Atrue%7D)

### Examples

All compilation is handled by preconfigured (to reflect _native_ behavior) [nodent-compiler](https://github.com/MatAtBread/nodent-compiler)

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
    return new Promise(($return, $error) => Promise.resolve(right).then($await_1 => {
        try {
            return $return(left + $await_1);
        } catch ($boundEx) {
            return $error($boundEx);
        }
    }, $error));
}
</pre></code>
</td>
</tr>
</tbody>
</table>

### Installation

	$ npm install es-async

### Tests

	$ npm test

Project cross-browser compatibility supported by:

<a href="https://browserstack.com"><img src="https://bstacksupport.zendesk.com/attachments/token/Pj5uf2x5GU9BvWErqAr51Jh2R/?name=browserstack-logo-600x315.png" height="150" /></a>

[circleci-image]: https://img.shields.io/circleci/project/github/medikoo/es-async.svg
[circleci-url]: https://circleci.com/gh/medikoo/es-async
[appveyor-image]: https://img.shields.io/appveyor/ci/medikoo/es-async.svg
[appveyor-url]: https://ci.appveyor.com/project/medikoo/es-async
[codecov-image]: https://img.shields.io/codecov/c/github/medikoo/es-async.svg
[codecov-url]: https://codecov.io/gh/medikoo/es-async
