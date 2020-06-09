const CategorySchema = require("../Database/Schema/CategorySchema").CategorySchema;
const model = require('mongoose').model;
/**
 * create model for Category from the schema and export it as 
 * Category
 */
module.exports = model('Category', CategorySchema);