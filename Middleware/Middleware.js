/**-------------------------------------------------------------------------------
 * All middleware declarations of the application are defined in this file.
 * Feel free to add extra middleware declarations when you add a new middleware
 * definition to the app.
 * -------------------------------------------------------------------------------
 */
const bodyParser = require('body-parser');
const expressSession = require("express-session");
const cookieParser = require("cookie-parser");

module.exports.initializeMiddleware = function (app) {
    app.use(bodyParser.json({type: 'application/json'}))
    app.use(bodyParser.urlencoded({extended: true}))
    app.use(expressSession({
        secret: 'some secret',
        resave: false,
        saveUninitialized: true,
        cookie: {}
    }));
    app.use(cookieParser());
    app.use(passport.initialize());
    app.use(passport.session());
};