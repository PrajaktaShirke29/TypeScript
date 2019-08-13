import express, {Request, Response} from 'express';
import { router } from "./routes/loginRoutes";
import bodyParser from "body-parser";
const app =express();

app.use(router);
app.use(bodyParser.urlencoded({extended : true}))
app.listen(3000, () =>{
    console.log('Listing on port 3000');
})