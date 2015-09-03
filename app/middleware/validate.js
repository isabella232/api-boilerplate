"use strict";

let error = require("../error");

function useSchema(schema, name) {
    return function (req, res, next) {

        req.schemaName = name;
        req.schema = schema;
        next();
    };
}

function validate() {
    return function (req, res, next) {

        req.schema.validate(req.body)
            .then(function() {
                next();
            })
            .catch(function (validation) {
                next(new error.ValidationError({resource: req.schemaName, failedFields: validation.failedFields }));
            });
    };
}

/**
 * sets the schema and calls req.schema.validate
 *
 * @param {Object} schema
 * @param {String=} schemaName
 * @returns {*[]}
 */
module.exports = function (schema, schemaName) {
    if (!schema) {
        throw new Error("Missing validation schema");
    }

    return [useSchema(schema, schemaName), validate()];
};