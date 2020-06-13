const UsersController = require("express").Router();
const User = require("./User");
// definition of various routes goes below...

/**
 * serves the index handler method.
 * @returns void.
 */
UsersController.get("/", function index(req, res) {
    res.send("Hello from index after Failure");
});

/**
 * serves the post route.
 * @returns void.
 */
UsersController.post("/", function store(req, res) {
    res.send("post handler");
});

module.exports.UsersController = UsersController;