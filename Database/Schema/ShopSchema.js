const schema = require('mongoose').Schema;
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
 * export shop schema
 */
module.exports.ShopSchema = ShopSchema;