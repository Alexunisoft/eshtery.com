const schema = require("mongoose").Schema;
const {hashSync, compareSync} = require("bcrypt");

const autoIncrement = require('mongoose-auto-increment');
/**
 * UserSchema Collection definition
 */
const UserSchema = new schema({
        "name": {type: String, required: [true, "The name is required"]},
        "email": {type: String, unique: true, required: true},
        "password": {type: String, required: true},

    }, {
        timestamps: {
            createdAt: "created_at",
            updatedAt: "updated_at"
        }
    }
);
/**
 * Check if given password hash conforms to that stored in the database.
 * @param {string} password password to validate.
 * @returns {boolean}.
 */
UserSchema.methods.isValidPassword = function (password) {
    let salt = 10;
    return compareSync(password, this.password);
};

/**
 * Mongoose plugin that auto-increments any ID field on your schema every time a document is saved.
 */
UserSchema.plugin(autoIncrement.plugin, {model: 'User', startAt: 1});

module.exports.UserSchema = UserSchema;