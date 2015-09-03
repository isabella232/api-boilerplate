"use strict";

let erroz = require("erroz");
let config = require("../config");

//hide stack in production
erroz.options.includeStack = config.env !== "production";

exports.NotFound = erroz({
    name: "NotFound",
    status: "fail",
    code: "not-found",
    template: "Requested resource '%resource' not found"
});

exports.Unauthorized = erroz({
    name: "Unauthorized",
    status: "fail",
    code: "unauthorized",
    template: "Missing authorization: %msg"
});

exports.BadRequest = erroz({
    name: "BadRequest",
    status: "fail",
    code: "bad-request",
    template: "Bad Request: %msg"
});

exports.ValidationError = erroz({
    name: "ValidationError",
    status: "fail",
    code: "validation-fail",
    template: "Validation failed for '%resource'"
});