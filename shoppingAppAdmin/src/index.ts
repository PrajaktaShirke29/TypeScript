import express from "express";
import bodyParser from "body-parser";
import cookieSession from "cookie-session";
const app = express();

app.use(bodyParser.urlencoded({extended : true}));
app.use(cookieSession({keys:['session']}));

app.listen(3030, ()=>{
    console.log('Listing on port 3030');
})
