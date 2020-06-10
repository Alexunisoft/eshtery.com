const BrandController = require('express').Router();
const BrandModel = require('./Brand');
/**
 * Brand Controller
 */
/**
 * create index function to get all documents in Brands Collection
 */
BrandController.get('/', function index(req, res) {
    BrandModel.find({}, (err, data) => {
        if (err) {
            res.status(500);
            res.json(err);
        } else if (data) {
            res.status(200);
            res.json(data);
        } else {
            res.status(404);
            res.json({
                "status": "Resourse Not found "
            })
        }
    })
});
/**
 * store function to create new Brand document in DB
 */
BrandController.post('/', function store(req, res) {
    let brand_collection = new BrandModel({
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