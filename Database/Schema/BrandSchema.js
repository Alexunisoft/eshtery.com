const schema = require('mongoose').Schema;
/**
 * define schema for Brand Collection 
 * each document has name , created_at and updated_at
 */
const BrandSchema = new schema({
    name: {
        type: String,
        required: [true, "Brand name is required"]
    }
}, { timestamps: { createdAt: "created_at", updatedAt: "updated_at" } });
module.exports.BrandSchema = BrandSchema;