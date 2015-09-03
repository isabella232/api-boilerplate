"use strict";

let error = require("../error");

function notFound(req, res, next) {
    res.json(new error.NotFound({ resource: req.url }).toJSend());
}

module.exports = notFound;