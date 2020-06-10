const ProductsController = require('express').Router();
const ProductModel = require('./Product').ProductModel;
/**
 * ProductsController
 */
/**
 * create store function to create new product document in Product Collection in DB
 */
ProductsController.post('/', function store(req, res) {
        let product = new ProductModel({
            'name': req.body.name,
            'description': req.body.description,
            'price': req.body.price,
            'brand_id': req.body.brand_id,
            'category_id': req.body.category_id,
        });
        product.save((err) => {
            if (err) {
                res.status(500);
                res.json(err);
            } else {
                res.status(201);
                res.json({
                    "status": "Product created successfully "
                });
            }
        });
    })
    /**
     * export ProductsController
     */
module.exports.ProductsController = ProductsController;