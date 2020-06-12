const express = require('express');
const authRouter = express.Router();
const usermodel=require("../Users/User")

authRouter.get("/auth",(req,res)=>{
    usermodel.find({});
//res.send("aurhrouter");
})

authRouter.post("/addauth",(req,res)=>{
    let user= new usermodel({
        name:req.body.name,
        email:req.body.email,
        password:req.body.password
    })
    user.save((err,result)=>{
        res.redirect("/users")
    });
})
module.exports=authRouter;