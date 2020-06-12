const ShopSchema = require('../Database/Schema/ShopSchema').ShopSchema;
const model = require('mongoose').model;
/**
 * create Shop model
 */
module.exports.ShopModel = new model('Shop', ShopSchema);