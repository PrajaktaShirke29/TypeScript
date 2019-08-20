import express from "express";
import bodyParser from "body-parser";
import cookieSession from "cookie-session";
import { AppRouter } from "./AppRouter";
import path from "path";
import './view/login';
import './view/register';
import './view/root';
const app = express();

app.use(bodyParser.urlencoded({extended : true}));
app.use(cookieSession({keys:['session']}));
app.use(AppRouter.getInstance());
// app.use(express.static(__dirname + 'public'));
app.use(express.static(path.join(__dirname, 'public')));
try{
    app.listen(4000, ()=>{
        console.log('Listing on port 4000');
    });
}catch(err){
    console.log(err);
}
