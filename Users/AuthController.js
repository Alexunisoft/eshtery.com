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

AuthController.get("/form", function(req, res){
    let form = fs.readFileSync(__dirname + "/views/login.html");
    res.status(200);
    res.set({"Content-Type": "text/html"});
    res.send(form);
});

/**
 * Logout route to unauthenticate currently logged in user.
 */
AuthController.get("/logout", function(req, res){
    req.logout();
    res.redirect("/auth/form");
});

module.exports = AuthController;