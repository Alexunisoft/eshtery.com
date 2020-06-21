/**----------------------------------------------------------------------------
 * This file loads plugins defined for the Mongoose Object Document Mapper.
 * Feel free to add more plugins (defined by you or third-party plugins) into
 * the definitions in this file.
 * ----------------------------------------------------------------------------
 */

// load mongoose connection object.
const connection = require("mongoose").connection;

// require plugins...
const {initialize} = require('mongoose-auto-increment');

/**
 * Loads MongoDB plugins define for the mongoose ODM
 * @returns {Promise<void>}
 */
async function loadPlugins(){
    initialize(connection);
}

module.exports = loadPlugins;