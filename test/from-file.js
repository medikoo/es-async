"use strict";

const test        = require("tape")
    , { resolve } = require("path")
    , fromFile    = require("../from-file");

const fixture = resolve(__dirname, "_fixtures/test.js");

test("From file", t => {
	t.test("Default options", t =>
		fromFile(fixture).then(code =>
			eval(code)(3).then(result => {
				t.equal(result, 7);
				t.end();
			})
		)
	);
	t.test("Null options", t =>
		fromFile(fixture, null).then(code =>
			eval(code)(3).then(result => {
				t.equal(result, 7);
				t.end();
			})
		)
	);
	t.end();
});
