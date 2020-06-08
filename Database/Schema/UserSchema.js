const schema = require("mongoose").Schema;

/**
 * UserSchema Collection definition
 */
const UserSchema = new schema({
    "name": String,
    "email": String,
    "created_at": Date,
    "updated_at": Date,
});

module.exports.UserSchema = UserSchema;