const UsersController = require("./Users/UsersController").UsersController;
const CategoriesController = require("./Categories/CategoriesController").CategoryController;
const BrandsController = require('./Brands/BrandsController')
const bodyParser = require('body-parser');
module.exports = function(app) {
    app.use(bodyParser.json({}));
    app.use("/users", UsersController);
    app.use("/categories", CategoriesController);
    app.use("brands", BrandsController);
};