const schema = require('mongoose').Schema;
/**
 * define schema for Brand Collection 
 * each document has name , created_at and updated_at
 */
const BrandSchema = new schema({
    name: {
        type: String,
        required: [true, "Brand name is required"]
    },
    created_at: {
        type: true,
        required: true,
    },
    updated_at: String,
});
module.exports.BrandSchema = BrandSchema;