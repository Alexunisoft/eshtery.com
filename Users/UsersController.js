const UsersController = require("express").Router();

// definition of various routes goes below...

/**
 * serves the index handler method.
 * @returns void.
 */
UsersController.get("/", function index(req, res){
    res.send("Hello from index");
});

/**
 * serves the post route.
 * @returns void.
 */
UsersController.post("/", function store(req, res){
    res.send("post handler");
});
module.exports.UsersController = UsersController;