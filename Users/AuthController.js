const bcrypt = require("bcrypt");
const User = require("./User");
const AuthController = require("express").Router();
/**
 * register user and hashing the password
 */
AuthController.post("/register", function register(req, res) {
    let salt = 10;
    let hash = bcrypt.hashSync(req.body.password, salt);
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
            res.status(201);
            res.send("CREATED");
        }
    });
})

AuthController.post('/login',
    passport.authenticate('local', {
        failureRedirect: '/auth/login'
    }),
    function(req, res){
        res.redirect("/users/home");
    }
);

module.exports = AuthController;