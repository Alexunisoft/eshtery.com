const BrandSchema = require('../Database/Schema/BrandSchema').BrandSchema;
const model = require('mongoose').model;
const autoIncrement = require('mongoose-auto-increment');
/**
 * Mongoose plugin that auto-increments any ID field on your schema every time a document is saved.
 */
BrandSchema.plugin(autoIncrement.plugin, { model: 'Brand', startAt: 1 });
/**
 * create model for Brand from BrandSchema
 */
module.exports = model('Brand', BrandSchema);