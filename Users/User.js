const UserSchema = require("./../Database/Schema/UserSchema").UserSchema;
const model = require("mongoose").model;

/**
 * Definition of the simple demo method.
 * @returns void.
 */
UserSchema.methods.sayHello = function(){
    console.log("Hello, Developer");
};

/**
 * Exporting the User Model.
 */
module.exports = model("User", UserSchema);
