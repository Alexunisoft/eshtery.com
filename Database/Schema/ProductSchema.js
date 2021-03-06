const schema = require('mongoose').Schema;
const autoIncrement = require('mongoose-auto-increment'); // require mongoose-auto-increment
/**
 * create Product schema to create model that has some fields 
 * name , description , price
 */
let ProductSchema = new schema({
    name: {
        type: String,
        required: [true, "Product name is required "]
    },
    description: {
        type: String,
        required: [
            true, "Product description is required "
        ]
    },
    price: {
        type: Number,
        required: [
            true, "Product price is required "
        ]
    },
    brand: {
        type: schema.Types.Number,
        ref: 'Brand',
        required: true,
    },
    category: {
        type: schema.Types.Number,
        ref: 'Category',
        required: true,
    },
    shop: {
        type: schema.Types.Number,
        ref: 'Shop',
        required: true,
    }
}, { timestamps: { createdAt: "created_at", updatedAt: "updated_at" } });

/**
 * Mongoose plugin that auto-increments any ID field on your schema every time a document is saved.
 */
ProductSchema.plugin(autoIncrement.plugin, { model: 'Product', startAt: 1 });

/**
 * export productSchema
 */
module.exports.ProductSchema = ProductSchema;