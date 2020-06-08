const UsersController = require("./Users/UsersController").UsersController;
const CategoriesController = require("./Categories/CategoriesController").CategoryController;
module.exports = function(app) {
    app.use("/users", UsersController);
    app.use("/categories", CategoriesController);
};