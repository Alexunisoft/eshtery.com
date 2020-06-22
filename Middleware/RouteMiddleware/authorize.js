/**
 * Returns the authorize middleware function.
 * @param role Role to authorize logged in user against.
 * @returns {function(...[*]=)} Authorize Middleware function.
 */
function authorize(role) {
    return (req, res, next) => {
        if (req.user.role === role){
            next();
        } else {
            res.status(403);
            res.send("Forbidden");
        }
    };
}