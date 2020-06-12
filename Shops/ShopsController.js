const ShopsController = require('express').Router();
const ShopModel = require('./Shop').ShopModel;
/**
 * Shop Controller
 */
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