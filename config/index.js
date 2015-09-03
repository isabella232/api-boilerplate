"use strict";

var dynamicConfig = require("dynamic-config");

module.exports = dynamicConfig(__dirname, "config.js");