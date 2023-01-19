const express = require("express")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const {cartModel} = require("../models/cart.model")
const {userModel} = require("../models/user.model")

const cartRouter = express.Router()

cartRouter.post("/addproduct",async(req,res)=>{
    let {id,title,price,description,images,x,y,category} = req.body
    try{
        // let product = new cartModel({
        //     id,
        //     title,
        //     price,
        //     description,
        //     images:images[0],
        //     category:category.name
        // })
        // await product.save()
        // res.send("product has been added")
        let iD = req.headers.id
           let product = {
            id,
            title,
            price,
            description,
            images:images[0],
            category:category.name
        }
        let user = await userModel.findById(iD)
        user.products.push(product)
        await userModel.findByIdAndUpdate(iD,user)
        res.send("product has been added")
    }
    catch(err){
        res.send(err)
    }
})

cartRouter.delete("/deleteproduct",async(req,res)=>{
    let iD = req.headers.id
    let title = req.headers.title
    try{
        // await cartModel.findByIdAndDelete(id)
        // res.send("product has been deleted")
        
        let user = await userModel.findById(iD)
        let arr = user.products.filter((elem)=>{
            return elem.title!=title
        })
        user.products=arr
        await userModel.findByIdAndUpdate(iD,user)
        res.send("product has been deleted")
    }
    catch(err){
        res.send(err)
    }
})

module.exports = {
    cartRouter
}