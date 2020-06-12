const { json } = require('body-parser');

const ShopsController = require('express').Router();
const ShopModel = require('./Shop').ShopModel;
/**
 * Shop Controller
 */
/**
 * create Index function to get collection of Shops
 */
ShopsController.get('/', function index(req, res) {
    ShopModel.find({}).populate('user').exec((err, data) => {
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
ShopsController.post('/', function Store(req, res) {
    let Shop = new ShopModel({
        "name": req.body.name,
        "description": req.body.description,
        "user": req.body.user
    });
    Shop.save((err) => {
        if (err) {
            res.status(500);
            res.json(err);
        } else {
            res.status(200);
            res.json({
                "status": "Shop created Successfully "
            });
        }
    });
});
/**
 * export ShopsController
 */
module.exports.ShopsController = ShopsController;