/**-----------------------------------------------------------------------
 *  This file bootstraps the whole application by loading all services
 *  together. Feel free to add Services to the application and they will
 *  be loaded automatically within this bootstrap file.
 * -----------------------------------------------------------------------
 */

/**
 * Require application services.
 */
const {config} = require("dotenv");
const {initializeHelpers} = require("./Helpers/helpers");
const {initializeDBConnection, initializeDBPlugins} = require("./Database/Connection/connection");
const {initializeConfig} = require("./Config/MasterConfig");
const {initializeMiddleware} = require("./Middleware/Middleware");
const {auth} = require("./Middleware/RouteMiddleware/");

/**
 * Bootstrap the application instance.
 */
async function bootstrap(app) {
    /**
     * initialize .env config file.
     */
    config();
    /**
     * initialize global helper function for the app.
     */
    await initializeHelpers();
    /**
     * initialize connection with MongoDB.
     */
    await initializeDBConnection();
    /**
     * initialize application-wide configuration files.
     */
    initializeConfig();
    /**
     * initialize application middleware.
     */
    initializeMiddleware(app);
    /**
     * initialize application routes.
     */
    require("./routes")(app);

}

module.exports = bootstrap;