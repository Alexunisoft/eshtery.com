const ShopsController = require('express').Router();
const ShopModel = require('./Shop').ShopModel;
/**
 * Shop Controller
 */
/**
 * create Index function to get collection of Shops
 */
ShopsController.get('/', function index(req, res) {
    ShopModel.find({}).populate(['user']).exec((err, data) => {
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
 * create Store function to create new document of Shop
 */
ShopsController.post('/', function store(req, res) {
    let Shop = new ShopModel({
        "name": req.body.name,
        "description": req.body.description,
        "user": req.body.user,
    });
    Shop.save((err) => {
        if (err) {
            res.status(500);
            res.json(err);
        } else {
            res.status(201);
            res.json({
                "status": "Shop created Successfully "
            });
        }
    });
});
/**
 * create Show function to get Shop document by ID from DB
 */
ShopsController.get('/:id', function show(req, res) {
    ShopModel.findById({ _id: req.params.id }).populate(['user']).exec((err, data) => {
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
 * create update function for Shop Document in DB
 */
ShopsController.patch('/:id', function update(req, res) {
    ShopModel.findByIdAndUpdate({ _id: req.params.id }, req.body, (err, data) => {
        if (err) {
            res.status(500);
            res.json(err);
        } else if (data) {
            res.status(200);
            res.json({
                "status": "Shop updated successfully "
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
 * create destroy function to delete Shop document from DB
 */
ShopsController.delete('/:id', function destroy(req, res) {
    ShopModel.findByIdAndDelete({ _id: req.params.id }, (err, data) => {
        if (err) {
            res.status(500);
            res.json(err);
        } else if (data) {
            res.status(200);
            res.json({
                "status": "Shop deleted successfully "
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
 * export ShopsController
 */
module.exports.ShopsController = ShopsController;