const ProductsController = require('express').Router();
const ProductModel = require('./Product').ProductModel;
/**
 * ProductsController
 */
/**
 * create index function to get all documents in Products collection
 */
ProductsController.get('/', function index(req, res) {
    ProductModel.find({}).populate(['brand', 'category', 'shop']).exec((err, data) => {
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
 * create store function to create new product document in Product Collection in DB
 */
ProductsController.post('/', function store(req, res) {
    let product = new ProductModel({
        'name': req.body.name,
        'description': req.body.description,
        'price': req.body.price,
        'brand': req.body.brand,
        'category': req.body.category,
        'shop': req.body.shop,
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
});
/**
 * create show function to get Product document
 */
ProductsController.get('/:id', function show(req, res) {
    ProductModel.findById({ _id: req.params.id }, ).populate(['brand', 'category', 'shop']).exec((err, data) => {
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
 * create update function to update product document in DB
 */
ProductsController.patch('/:id', function update(req, res) {
    ProductModel.findByIdAndUpdate({ _id: req.params.id }, req.body, (err, data) => {
        if (err) {
            res.status(500);
            res.json(err);
        } else if (data) {
            res.status(200);
            res.json({
                "status": "Product updated Successfully ",
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
 * create destroy function to delete Product document from DB
 */
ProductsController.delete('/:id', function destroy(req, res) {
    ProductModel.findByIdAndDelete({ _id: req.params.id }, (err, data) => {
        if (err) {
            res.status(500);
            res.json(err);
        } else if (data) {
            res.status(200);
            res.json({
                "status": "Product deleted Successfully "
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
 * export ProductsController
 */
module.exports.ProductsController = ProductsController;