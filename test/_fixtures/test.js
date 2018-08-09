"use strict";

module.exports = async foo => foo + await new Promise(resolve => resolve(4));
