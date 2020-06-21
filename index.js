const bootstrap = require("./bootstrap");
const express = require("express");
const app = express();

bootstrap(app).then(function(){
    app.listen(env("PORT"), function () {
        console.log("Server started listening on port", env("PORT"));
    });

}).catch(function(err){
    console.log("something went wrong");
    console.error(err);
});


