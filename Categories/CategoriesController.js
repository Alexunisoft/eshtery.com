const CategoryController = require("express").Router();
const CategoryModel = require('./Category');
/**
 * Categories controller
 */
/**
 * 
 */
CategoryController.get('/', function index(req, res) {

    res.send("hello from category controller");
});
/**
 * create store function to create new document from category model
 */
CategoryController.post('/', function store(req, res) {
    if (req.body) {
        let category = new CategoryModel({
            'name': req.body.name,
            'created_at': Date.now(),
        });
        category.save((err) => {
            if (err) {
                console.error("there is error!!");
                res.status(400);
                res.json(err);
            } else {
                res.status(201);
                res.json({
                    "status": "Category created"
                });
            }
        });
    }
});
module.exports.CategoryController = CategoryController;