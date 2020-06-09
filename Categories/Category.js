const CategorySchema = require("../Database/Schema/CategorySchema").CategorySchema;
const model = require('mongoose').model;
const autoIncrement = require('mongoose-auto-increment');
/**
 * Mongoose plugin that auto-increments any ID field on your schema every time a document is saved.
 */
CategorySchema.plugin(autoIncrement.plugin, { model: 'Category', startAt: 100 });
/**
 * create model for Category from the schema and export it as 
 * Category
 */
module.exports = model('Category', CategorySchema);