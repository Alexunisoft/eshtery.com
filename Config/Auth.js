/**--------------------------------------------------------------------
 * All Strategy configurations of passport are defined in this file.
 * Feel free to add extra configurations when you add a new strategies 
 * to the passport object. 
 * --------------------------------------------------------------------
 */

const localStrategy = require('passport-local').Strategy;
const passport = require("passport");
const User = require("./../Users/User");

/**
 * Configuration of passport-local strategy.
 */
passport.use(new localStrategy((email,password,done)=>{
    User.findOne({email:email},(err,user)=>{
        if(err){
            return done(err);
        }else if(!user){
            return done(null,false,{message:"incorrect Email !!"});
        }else if(!user.isValidPassword(password)){
            return done(null,false,{message:"incorrect PassWord !!"}); 
        }else{
            return done(null,user);
        }
    })
}));

module.exports = passport;