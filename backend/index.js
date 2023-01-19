const express = require("express")
const {connection} = require("./configs/db")
const {userRouter} = require("./routes/user.route")
const {cartRouter} = require("./routes/cart.route")
const {authenticator} = require("./middlewares/autheticator.middleware")
require("dotenv").config()
const app = express()
app.use(express.json())

app.use("/",userRouter)
app.use("/",authenticator)
app.use("/",cartRouter)

app.listen(process.env.port,async()=>{
    try{
        await connection 
        console.log("connected to db")
    }
    catch(err){
        console.log(err)
    }
    console.log("server is up at 4500")
})