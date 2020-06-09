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
    console.log(req.body);
    res.json(req.body);
    // if (req.body) {
    //     let category = new CategoryModel({
    //         name: JSON.parse(req.body).name,
    //         created_at: Date.now(),
    //     });
    //     category.save((err) => {
    //         if (err) {
    //             console.log("there is error!!");
    //             res.json(err);
    //         } else {
    //             console.log("there is no errors");
    // res.json({
    //     success: true,
    //     message: "Category created successfully",
    // });
    //         }
    //     });
    // }
});
module.exports.CategoryController = CategoryController;