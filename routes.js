const UsersController = require("./Users/UsersController").UsersController;
module.exports = function(app){
    app.use("/users", UsersController);
};