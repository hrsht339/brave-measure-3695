const express = require("express")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const {userModel} = require("../models/user.model")
var cors = require('cors')
const userRouter = express.Router()


 
userRouter.use(cors())

userRouter.post("/register",async(req,res)=>{
    let {name,email,pass} = req.body
    try{
        bcrypt.hash(pass,3,async(err,hashed)=>{
            if(err){
                res.send(err)
            }
            else{
                let user = new userModel({
                    name,
                    email,
                    pass:hashed,
                    isAdmin:false
                })
                await user.save()
                res.send({"msg":"user has been registered"})
            }
        })
     }
    catch(err){
        res.send(err)
    }
})

userRouter.post("/login",async(req,res)=>{
    let {email,pass} = req.body
    try{
        let user = await userModel.findOne({email})
        if(user){
            bcrypt.compare(pass,user.pass,async(err,result)=>{
                if(result){
                    let token = jwt.sign({"id":user._id},"masai")
                    res.send({"msg":"successfully logged in","token":token,"id":user._id,"email":email})
                }
                else{
                    res.send({"msg":"wrong password enter again"})
                }
            })
        }
        else{
            res.send({"msg":"user not find register first"})
        }
    }
    catch(err){
        res.send(err)
    }
})

userRouter.post("/adminregister",async(req,res)=>{
    let {name,email,pass} = req.body
    try{
        bcrypt.hash(pass,3,async(err,hashed)=>{
            if(err){
                res.send(err)
            }
            else{
                let user = new userModel({
                    name,
                    email,
                    pass:hashed,
                    isAdmin:true
                })
                await user.save()
                res.send("admin has been registered")
            }
        })
     }
    catch(err){
        res.send(err)
    }
})

userRouter.post("/adminlogin",async(req,res)=>{
    let {email,pass} = req.body
    try{
        let user = await userModel.findOne({email})
        if(user && user.isAdmin==true){
            bcrypt.compare(pass,user.pass,async(err,result)=>{
                if(result){
                    let token = jwt.sign({"id":user._id},"masai")
                    res.send({"msg":"admin successfully logged in","token":token})
                }
                else{
                    
                    res.send({"msg":"wrong password enter again"})
                }
            })
        }
        else{

            
            res.send({"msg":"admin not find register first"})
        }
    }
    catch(err){
        res.send(err)
    }
})

module.exports = {
    userRouter
}