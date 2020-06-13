/**--------------------------------------------------------------------
 * All Strategy configurations of passport are defined in this file.
 * Feel free to add extra configurations when you add new strategies 
 * to the passport object. 
 * --------------------------------------------------------------------
 */

const localStrategy = require('passport-local').Strategy;
const passport = require("passport");
const User = require("./../Users/User");

/**
 * Configuration of passport-local strategy.
 */
passport.use(new localStrategy({
    usernameField: 'username',
    passwordField: 'password'
}, (username, password, done) => {
    User.findOne({ email: username }, (err, user) => {
        if (err) {
            return done(err);
        } else if (!user) {
            return done(null, false, { message: "incorrect Email !!" });
        } else if (!user.isValidPassword(password)) {
            return done(null, false, { message: "incorrect PassWord !!" });
        } else {
            return done(null, user);
        }
    })
}));

/**
 * Serialize user object into web session.
 */
passport.serializeUser(function (user, done) {
    done(null, user.id);
});

/**
 * Deserialize user object from web session.
 */
passport.deserializeUser(function (id, done) {
    User.findById(id, function (err, user) {
        done(err, user);
    });
});
/**
 * Dummy function to ensure the passport object 
 * is singleton throughout the app.
 */
passport.test = () => {
    console.log("test function is defined");
}

module.exports = passport;