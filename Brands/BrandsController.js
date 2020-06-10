const BrandController = require('express').Router();
const BrandModel = require('./Brand');
/**
 * Brand Controller
 */
/**
 * 
 */
BrandController.get('/', function index(req, rea) {

});
/**
 * store function to create new Brand document in DB
 */
BrandController.post('/', function store(req, res) {
    let brand_collection = new({
        'name': req.body.name,
        'created_at': Date.now(),
    });
    brand_collection.save((err) => {
        if (err) {
            res.status(500);
            res.json(err);
        } else {
            res.status(200);
            res.json({
                "status": "Brand created Successfully",
            });
        }
    });
});
module.exports.BrandController = BrandController;