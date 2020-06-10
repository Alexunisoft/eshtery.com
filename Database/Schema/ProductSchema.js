const schema = require('mongoose').Schema;
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

}, { timestamps: { createdAt: "created_at", updatedAt: "updated_at" } });