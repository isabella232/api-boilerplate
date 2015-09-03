"use strict";

let express = require("express");
let bodyParser = require("body-parser");
let app = express();

let mw = require("./middleware");
let routes = require("./routes");
let config = require("../config");
let schemas = require("./schemas");

require("./helpers/jSend")();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.get("/user", routes.user.readCollection);
app.get("/user/:id", routes.user.read);
app.post("/user", mw.validate(schemas.User, "User"), routes.user.create);

app.use(routes.notFound);

app.use(function (err, req, res, next) {

    //TODO use your favourite logger! Maybe bunyan?
    console.error(err, err.stack);

    if(err.toJSend) {
        return res
            .status(err.statusCode || 500)
            .json(err.toJSend());
    }

    res.status(500).json({
        status: "error",
        message: err.message,
        data: {
            stack: err.stack
        }
    });
});

app.listen(config.port, function () {
    console.log("API listening on port " + config.port);
});