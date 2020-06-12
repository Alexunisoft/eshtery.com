const UsersController = require("./Users/UsersController").UsersController;
const CategoriesController = require("./Categories/CategoriesController").CategoryController;
const BrandsController = require('./Brands/BrandsController').BrandsController;
const ProductsController = require('./Products/ProductsController').ProductsController;
const bodyParser = require('body-parser');

module.exports = function(app) {
    app.use(bodyParser.json({}));
    app.use("/users", UsersController);
    app.use("/categories", CategoriesController);
    app.use("/brands", BrandsController);
    app.use("/products", ProductsController);
};