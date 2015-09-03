"use strict";

let error = require("../error");

/**
 * authenticate
 *
 * @param req
 * @param res
 * @param next
 */
function auth(req, res, next) {

    /*
    //example using a db call (promise style)
    Db.findOne({apiKey: req.apiKey}).exec()
        .then(function (feedhub) {

            if (!feedhub) {
                throw
            }

            req.feedhub = feedhub;
            next();
        })
        .catch(next);
    */

    if(req.body.loginName !== "hugo") {
        next(new error.Unauthorized({ msg: "Unknown User '" + req.body.loginName + "'", user: req.body.loginName }));
    }
}

module.exports = auth;