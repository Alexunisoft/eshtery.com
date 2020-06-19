/**
 * Auth middleware to authenticate requests to routes.
 * @param req IncomingMessage Object.
 * @param res ServerResponse Object.
 * @param next Callback function to pass the request to next middleware in pipeline.
 */
function auth(req, res, next) {
    if (req.isAuthenticated()) {
        next();
    } else {
        res.redirect("/auth/login");
    }
}

module.exports.auth = auth;