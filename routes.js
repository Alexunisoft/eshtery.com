const UsersController = require("./Users/UsersController").UsersController;
const CategoriesController = require("./Categories/CategoriesController").CategoryController;
const bodyParser = require('body-parser');
module.exports = function(app) {
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use("/users", UsersController);
    app.use("/categories", CategoriesController);
};