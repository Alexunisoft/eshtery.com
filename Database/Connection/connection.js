/**----------------------------------------------------------
 * This file represents the connection started to MongoDB.
 * DO NOT change anything define within this file unless
 * you know exactly what you are doing.
 * ----------------------------------------------------------
 */

const mongoose = require("mongoose");
const loadPlugins = require("./../Plugins/loadPlugins");

/**
 * Establishing mongoose connection.
 */
async function initializeDBConnection() {
    mongoose.connect(`mongodb://${process.env.DB_URL}/${process.env.DB_NAME}`, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });

    await loadPlugins();
}



module.exports.initializeDBConnection = initializeDBConnection;
