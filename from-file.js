"use strict";

const ensureString = require("es5-ext/object/validate-stringifiable-value")
    , isObject     = require("es5-ext/object/is-object")
    , pify         = require("pify")
    , { resolve }  = require("path")
    , { readFile } = require("fs")
    , compile      = require("./");

const readFilePromised = pify(readFile);

module.exports = (filename, options = {}) => {
	filename = resolve(ensureString(filename));
	options = isObject(options) ? options : {};
	return readFilePromised(filename).then(sourceCode => compile(sourceCode, options));
};
