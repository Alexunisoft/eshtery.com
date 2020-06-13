const schema = require("mongoose").Schema;
const hashSync = require("bcrypt").hashSync;

/**
 * UserSchema Collection definition
 */
const UserSchema = new schema({
    "name": {type:String,required:[true,"The name is required"]},
    "email": {type:String,unique:true,required:true},
    "password": {type:String,required:true},
    
},{timestamps:{
   createdAt:"created_at",
   updatedAt:"updated_at"
}}
);
/**
 * Check if given password hash conforms to that stored in the database.
 * @param {string} password password to validate.
 * @returns {boolean}.
 */
UserSchema.methods.isValidPassword = function(password){
    let salt=10;
    return hashSync(password,salt) === this.password;
};

module.exports.UserSchema = UserSchema;