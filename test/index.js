"use strict";

const test      = require("tape")
    , transpile = require("../");

test("Transpiler", t => {
	t.test("Async code is transpiled", t =>
		// Just sanity check, as all transpilation tests are handled in nodent project.
		eval(transpile("(async foo => (foo + await new Promise(resolve => resolve(4))))"))(
			3
		).then(result => {
			t.equal(result, 7);
			t.end();
		}));

	t.test("Non-async code is passed as is", t => {
		const codeSample = "(foo => new Promise(resolve => resolve(4)))";
		t.equal(transpile(codeSample), codeSample);
		t.end();
	});
	t.end();
});
