const UsersController = require("./Users/UsersController").UsersController;
const AuthController = require("./Users/AuthController");
const CategoriesController = require("./Categories/CategoriesController").CategoryController;
const BrandsController = require('./Brands/BrandsController').BrandsController;
const ProductsController = require('./Products/ProductsController').ProductsController;
const ShopsController = require('./Shops/ShopsController').ShopsController;

module.exports = function (app) {
    app.use("/auth", AuthController);
    app.use("/users", auth, UsersController);
    app.use("/categories", auth, CategoriesController);
    app.use("/brands", auth, BrandsController);
    app.use("/products", auth, ProductsController);
    app.use('/shops', auth, ShopsController);
};