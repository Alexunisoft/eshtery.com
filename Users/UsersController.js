const { request } = require("express");
const bcrypt=require("bcrypt");

const UsersController = require("express").Router();
const User=require("./User");
// definition of various routes goes below...

/**
 * serves the index handler method.
 * @returns void.
 */
UsersController.get("/", function index(req, res){
    res.send("Hello from index");
});

/**
 * serves the post route.
 * @returns void.
 */
UsersController.post("/", function store(req, res){
    res.send("post handler");
});
/**
 * register user and hashing the password
 */
UsersController.post("/register",function register(req,res){
    let salt =10;
    let hash=bcrypt.hashSync(req.body.password,salt);
let user=new User({
    name:req.body.name,
    email:req.body.email,
    password:hash
});
user.save((err,result)=>{
if(err){
    res.status(400);
    res.json(err);

}else{
  res.status(201);
  res.send("CREATED <3");
}
});
})
UsersController.post("/login",function login(req,res){
    
})
module.exports.UsersController = UsersController;