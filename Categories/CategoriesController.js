const CategoryController = require("express").Router();
const CategoryModel = require('./Category');
/**
 * Categories controller
 */
/**
 * create index function to get all Categories available in DB
 */
CategoryController.get('/', function index(req, res) {

    CategoryModel.find({}, (err, data) => {
        if (err) {
            res.status(500);
            res.json(err);
        } else if (data.length == 0) {
            res.status(204); //204 to say that the server worked successfuly but there is no content
            res.json(data);
        } else {
            res.status(200);
            res.json(data);
        }
    });

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