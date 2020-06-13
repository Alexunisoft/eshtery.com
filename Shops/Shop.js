const ShopSchema = require('../Database/Schema/ShopSchema').ShopSchema;
const model = require('mongoose').model;
/**
 * create Shop model
 */
let ShopModel = new model('Shop', ShopSchema);
module.exports.ShopModel = ShopModel;