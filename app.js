const express = require("express");
const mongoose = require("mongoose");
const adminRouter = require("./routes/adminRoutes");
const app = express();
require('dotenv').config();
const Port = process.env.PORT;
const MongoURL = process.env.MongoUrl;



//body-parser middleWare
app.use(express.json())

app.get('/',(req,res)=>{
    res.send('done')
})



app.use('/admin',adminRouter)

mongoose.connect(MongoURL)
  .then(() => {
      app.listen(Port,()=>{
          console.log('Mongodb Conneted with cloud')
      })
  });


