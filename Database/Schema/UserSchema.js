const schema = require("mongoose").Schema;

/**
 * UserSchema Collection definition
 */
const UserSchema = new schema({
    "name": {type:String,required:[true,"Where's the name yalla !!"]},
    "email": {type:String,unique:true,required:true},
    "password": {type:String,required:true},
    
},{timestamps:{
   createdAt:"created_at",
   updatedAt:"updated_at"
}}
);

module.exports.UserSchema = UserSchema;