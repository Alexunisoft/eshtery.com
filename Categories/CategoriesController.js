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
            res.status(404); //404 to say that the resourse not available
            res.json({
                "status": "Page Not Found, or Server Not Found "
            });
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
/**
 * create show function to get Category document from the DB
 */
CategoryController.get('/:id', function show(req, res) {
    CategoryModel.findOne({ _id: req.params.id }, (err, data) => {
        if (err) {
            res.status(500);
            res.json(err);
        } else if (data) {
            res.status(200);
            res.json(data);
        } else {
            res.status(404);
            res.json({
                "status": "Page Not Found , Server Not Found or Resourse Not found "
            });

        }
    });
});
/**
 * create update function to update document for category in DB
 */
CategoryController.patch('/:id', function update(req, res) {
    CategoryModel.findOneAndUpdate({ _id: req.params.id }, req.body, (err, data) => {
        if (err) {
            res.status(500);
            res.json(err);
        } else if (data) {
            res.status(200);
            res.json({
                "status": "Category updated Successfully",
            });

        } else {
            res.status(404);
            res.json({
                "status": "Page Not Found, or Server Not Found "
            });
        }
    })
});
/**
 * create delete function to delete Category from the DB collection
 */
CategoryController.delete('/:id', function(req, res) {
    CategoryModel.deleteOne({ _id: req.params.id }, (err) => {
        if (err) {
            res.status(500);
            res.json(err);
        } else {
            res.status(200);
            res.json({
                "status": "Category deleted Successfully",
            });
        }
    });
});
module.exports.CategoryController = CategoryController;