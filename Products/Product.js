const ProductSchema = require('../Database/Schema/ProductSchema').ProductSchema;
const model = require('mongoose').model;

/**
 * create Product Model by Product Schema
 */
let ProductModel = model('Product', ProductSchema);
/**
 * export productModel 
 */
module.exports.ProductModel = ProductModel;