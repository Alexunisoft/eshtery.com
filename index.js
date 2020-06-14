const {initializeConfig} = require("./Config/MasterConfig");
const {initializeMiddleware} = require("./Middleware/Middleware");

const express = require("express");
const mongoose = require("mongoose");
const initialize = require('mongoose-auto-increment').initialize; //require mongoose-auto-increment for initialization
const app = express();

require("dotenv").config();

mongoose.connect(`mongodb://${process.env.DB_URL}/${process.env.DB_NAME}`, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(function() {
        console.log("connection established successfully")
    });
let db = mongoose.connection;
/**
 * initialize mongoose-auto-increment
 */
initialize(db);
/**
 * initialize application-wide configuration files.
 */
initializeConfig();
/**
 * initialize application middleware.
 */
initializeMiddleware(app);
require("./routes")(app);

app.listen(process.env.PORT, function() {
    console.log("Server started listening on port", process.env.PORT);
});