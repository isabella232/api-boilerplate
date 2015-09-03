"use strict";

let Schema = require("alamid-schema");
Schema.use(require("alamid-schema/plugins/validation"));

let UserSchema = new Schema({
    loginName : {
        type : String,
        required: true
    },
    email: {
        type: String,
        required: true,
        //custom validator, return true or an error code (string)
        validate: function(email) {
            return email !== "grinch@peerigon.com" || "blocked-email";
        }
    },
    password : {
        type : String,
        required : true,
        minLengh: 8
    }
});

module.exports = UserSchema;