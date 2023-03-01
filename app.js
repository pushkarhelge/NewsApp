const express = require("express");
const path = require('path');
require('dotenv').config()
const bodyparser = require('body-parser')
const fs = require('fs');
// const mongoose = require('mongoose');
// const users = require('./models/schema')

const app = express();

const port = process.env.PORT || 80;

//setting the view directory
app.set('views',path.join(__dirname,'/views'));    
app.use(bodyparser.urlencoded({extended:false}))
app.use(express.json()) 
app.set('view engine','hbs');
app.use(express.static('public'))


//connection to mongoose atlas cloud
// mongoose.connect(process.env.MONGO_URL,{useNewUrlParser : true})
// .then(()=>{
//     console.log("Database Connected!")
// })
// .catch((err)=>{
//     console.log(err);
// })

// // Setting Routes
// app.get('/',(req,res)=>{
//     res.render('index')
// })

// Define the home route
app.get('/',(req,res)=>{
    res.render('index')
})
app.get('/politics',(req,res)=>{
    res.render('politics')
})
==
app.get('/technology',(req,res)=>{
    res.render('technology')
})
==
app.get('/stock-market',(req,res)=>{
    res.render('stock-market')
})
app.get('/sports',(req,res)=>{
    res.render('sports')
})
==


app.listen(port,()=>{
    console.log(`Server is listening at port ${port}`);
    
})

