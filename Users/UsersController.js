const UsersController = require("express").Router();
const User = require("./User");

// definition of various routes goes below...

/**
 * serves the index handler method.
 * @returns void.
 */
UsersController.get("/", function index(req, res) {
    User.find({}).exec(function(err, data) {
        if (!err) {
            res.json(data);
        }
    });
});

/**
 * serves the post route.
 * @returns void.
 */
UsersController.post("/", function store(req, res) {
    res.send("post handler");
});

module.exports.UsersController = UsersController;