"use strict";

let error = require("../error");

let users = [
    {
        id: 1,
        loginName: "Matthias"
    },
    {
        id: 2,
        loginName: "Markus"
    }
];

function readCollection(req, res, next) {
    res.success(users);
}

function create(req, res, next) {

    //TODO implement save!
    res.success(req.body);
}

function read(req, res, next) {

    let matchingUsers = users.filter(function(user) {
        return user.id === parseInt(req.params.id);
    });

    if(matchingUsers.length === 0) {
        return next(new error.NotFound({ resource: "User", id: req.params.id }));
    }

    res.success(matchingUsers[0]);
}

exports.create = create;
exports.readCollection = readCollection;
exports.read = read;