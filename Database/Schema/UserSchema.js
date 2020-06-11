const schema = require("mongoose").Schema;
const autoIncrement = require('mongoose-auto-increment');
/**
 * UserSchema Collection definition
 */
const UserSchema = new schema({
    "name": String,
    "email": String,
    "created_at": Date,
    "updated_at": Date,
});
/**
 * Mongoose plugin that auto-increments any ID field on your schema every time a document is saved.
 */
UserSchema.plugin(autoIncrement.plugin, { model: 'User', startAt: 1 });

module.exports.UserSchema = UserSchema;