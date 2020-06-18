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
    }
}, { timestamps: { createdAt: "created_at", updatedAt: "updated_at" } });
module.exports.CategorySchema = categorySchema;