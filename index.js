const express = require("express");
const mongoose = require("mongoose");
const initialize = require('mongoose-auto-increment').initialize; //require mongoose-auto-increment for initialization
const app = express();

require("dotenv").config();

mongoose.connect("mongodb://localhost/eshtery", { useNewUrlParser: true, useUnifiedTopology: true })
    .then(function() {
        console.log("connection established successfully")
    });
let db = mongoose.connection;
/**
 * initialize mongoose-auto-increment
 */
initialize(db);
require("./routes")(app);

app.listen(process.env.PORT, function() {
    console.log("Server started listening on port", process.env.PORT);
});