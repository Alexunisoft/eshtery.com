const schema = require('mongoose').Schema;
/**
 * define schema for Category collection
 * that has three fields for each document 
 * name , created_at , updated_at
 */
const categorySchema = new schema({
    name: {
        type: String,
        required: [true,
            "Category name is required",
        ]
    },
    created_at: {
        type: Date,
        required: true
    },
    updated_at: {
        type: Date,
    }
});
module.exports.CategorySchema = categorySchema;