const schema = require('mongoose').Schema;
const ProductModel = require('../../Products/Product').ProductModel;
const autoIncrement = require('mongoose-auto-increment');
/**
 * create Shop schema to create Shop model with name , description fields and 
 * ref to user who is the owner
 */
let ShopSchema = new schema({
    name: {
        type: String,
        required: [
            true, "Shop name is required"
        ]
    },
    description: {
        type: String,
        required: [
            true, "Shop description is required"
        ]
    },
    user: {
        type: schema.Types.Number,
        ref: 'User',
        required: true,
    }
}, { timestamps: { createdAt: "created_at", updatedAt: "updated_at" } });
/**
 * Mongoose plugin that auto-increments any ID field on your schema every time a document is saved.
 */
ShopSchema.plugin(autoIncrement.plugin, { model: 'Shop', startAt: 1 });
/**
 * Schema method to get all products that this Shop has 
 * return promise
 */
ShopSchema.methods.getAllProducts = async function() {
    return await ProductModel.find({ 'shop': this._id });
};
/**
 * export shop schema
 */
module.exports.ShopSchema = ShopSchema;