/**-----------------------------------------------------
 * All middleware declarations of the application are defined in this file.
 * Feel free to add extra middleware declarations when you add a new middleware 
 * definition to the app. 
 */
const bodyParser = require('body-parser');
const expressSession = require("express-session");

module.exports = function(app) {
    app.use(bodyParser.json({}));
    app.use(expressSession({secret:"secret"}));
    app.use(passport.initialize());
    app.use(passport.session());
};