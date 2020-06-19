const fs = require("fs");
const {hashSync} = require("bcrypt");
const User = require("./User");
const AuthController = require("express").Router();
/**
 * register user and hashing the password
 */
AuthController.post("/register", function register(req, res) {
    let salt = 10;
    let hash = hashSync(req.body.password, salt);
    let user = new User({
        name: req.body.name,
        email: req.body.email,
        password: hash
    });
    user.save((err, result) => {
        if (err) {
            res.status(400);
            res.json(err);

        } else {
            req.login(req.user, function(err){
                if(!err){
                    res.redirect("/users/home");
                } else {
                    res.redirect("/auth/login");
                }
            });
        }
    });
})

/**
 * Main authentication route for the whole application.
 */
AuthController.post('/login',
    passport.authenticate('local', {
        failureRedirect: "/auth/form",
    }),
    function (req, res) {
        res.redirect("/users/home");
    }
);

module.exports = AuthController;