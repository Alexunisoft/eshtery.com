const express = require("express");
const mongoose = require("mongoose");
const app = express();

require("dotenv").config();

mongoose.connect("mongodb://localhost/eshtery", {useNewUrlParser: true, useUnifiedTopology: true})
    .then(function () {
        console.log("connection established successfully")
    });
let db = mongoose.connection;


app.listen(process.env.PORT, function(){
    console.log("Server started listening on port", process.env.PORT);
});