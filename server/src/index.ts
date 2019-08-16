import express, {Request, Response} from 'express';
import { router } from "./routes/loginRoutes";
import bodyParser from "body-parser";
import cookieSessionn from 'cookie-session';
import { router as controllerRouter } from "./controllers/decorator/controller";
import './controllers/LoginController';
const app = express();

app.use(bodyParser.urlencoded({extended : true}));
app.use(cookieSessionn({keys:['asdfg']}));
app.use(router);
app.use(controllerRouter);

app.listen(3000, () =>{
    console.log('Listing on port 3000');
})