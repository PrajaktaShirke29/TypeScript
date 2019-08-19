import express, {Request, Response} from 'express';
import bodyParser from "body-parser";
import cookieSessionn from 'cookie-session';
import { AppRouter } from "./AppRouter";
import './controllers/LoginController';
import './controllers/RootController'
const app = express();

app.use(bodyParser.urlencoded({extended : true}));
app.use(cookieSessionn({keys:['asdfg']}));
app.use(AppRouter.getInstance());

app.listen(3000, () =>{
    console.log('Listing on port 3000');
})