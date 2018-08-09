"use strict";

const ensureString   = require("es5-ext/object/validate-stringifiable-value")
    , isObject       = require("es5-ext/object/is-object")
    , NodentCompiler = require("nodent-compiler");

const compiler = new NodentCompiler();
const compilerOptions = {
	es6target: true,
	noNodentExtensions: true,
	noRuntime: true,
	promises: true,
	sourcemap: false,
	wrapAwait: true
};

module.exports = (sourceCode, options = {}) => {
	sourceCode = ensureString(sourceCode);
	options = isObject(options) ? options : {};
	if (!sourceCode.includes("async")) return sourceCode;
	return compiler.compile(
		sourceCode, options.filename,
		Object.assign({}, compilerOptions, { sourcemap: options.sourcemap || false })
	).code;
};
