const express = require("express");
const adminRouter = require("./routes/adminRoutes");
const app = express();
const creatError = require('http-errors');
const morgan = require("morgan");
require('dotenv').config();
require('./helper/init_mongoDb')
const Port = process.env.PORT || 5000;



app.use(express.json()) //body-parser middleWare
// app.use(morgan('dev')) 


app.get('/',(req,res)=>{
    res.send('done')
})



app.use('/admin',adminRouter)

app.use(async(req,res,next)=>{
    // const error = new Error ("Not Found");
    // error.status = 404;
    // next(error)
    next(creatError.NotFound('path not found'))
})

app.use((err,req,res,next)=>{
    console.log("error ",err)
    // res.status(err.status||500)
    res.send({
        error:{
            status:err.status,
            message:err.message
        }
    })
})

app.listen(Port,()=>{
    console.log(`app is listening on port ${Port}`)
})



