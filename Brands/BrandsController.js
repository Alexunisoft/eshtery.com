const BrandsController = require('express').Router();
const BrandModel = require('./Brand');
/**
 * Brand Controller
 */
/**
 * create index function to get all documents in Brands Collection
 */
BrandsController.get('/', function index(req, res) {
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
 * create store function to create new Brand document in DB
 */
BrandsController.post('/', function store(req, res) {
    let brand_collection = new BrandModel({
        'name': req.body.name
    });
    brand_collection.save((err) => {
        if (err) {
            res.status(500);
            res.json(err);
        } else {
            res.status(201);
            res.json({
                "status": "Brand created Successfully",
            });
        }
    });
});
/**
 * craete show function to get document by ID from DB
 */
BrandsController.get('/:id', function show(req, res) {
    BrandModel.findById({ _id: req.params.id }, (err, data) => {
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
            });
        }
    });
});
/**
 * create update function to update existance brand document in DB
 */
BrandsController.patch('/:id', function update(req, res) {
    BrandModel.findByIdAndUpdate({ _id: req.params.id }, req.body, (err, data) => {
        if (err) {
            res.status(500);
            res.json(err);
        } else if (data) {
            res.status(200);
            res.json({
                "status": "Brand updated Successfully "
            });
        } else {
            res.status(404);
            res.json({
                "status": "Resourse Not found "
            });
        }
    });
});
/**
 * create destroy function to delete brand document from Brands Collection in DB
 */
BrandsController.delete('/:id', function destroy(req, res) {
    BrandModel.findByIdAndDelete({ _id: req.params.id }, (err, data) => {
        if (err) {
            res.status(500);
            res.json(err);
        } else if (data) {
            res.status(200);
            res.json({
                "status": "Brand deleted Successfully "
            });
        } else {
            res.status(404);
            res.json({
                "status": "Resourse Not found "
            });
        }
    });
});
module.exports.BrandsController = BrandsController;