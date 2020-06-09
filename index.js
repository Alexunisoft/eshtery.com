const express = require("express");
const mongoose = require("mongoose");
const app = express();

require("dotenv").config();

mongoose.connect(`mongodb://${process.env.DB_URL}/${process.env.DB_NAME}`, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(function () {
        console.log("connection established successfully")
    });
let db = mongoose.connection;

require("./routes")(app);

app.listen(process.env.PORT, function(){
    console.log("Server started listening on port", process.env.PORT);
});