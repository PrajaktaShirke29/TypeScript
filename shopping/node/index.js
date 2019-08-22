
const express= require("express");

const bodyParser=require("body-parser");
const app= express()
const cookieSessionn = require('cookie-session');
const auth = require('./routes/authentication')

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cookieSessionn({keys:['asdfg']}));
app.use('/', auth);
app.listen(4080, function(){
    console.log("Server started at 4080");
}); 

