import {Request, Response, NextFunction} from 'express';
import { get, controller, use, post, bodyValidator } from "../controller/Decorator";

function logger(req: Request, res:Response, next: NextFunction){
    console.log('Request was made!!');
    next();
}
@controller('/auth')
class LoginContoller{
    @get('/login')
    @use(logger)
    getLogin(req: Request, res: Response):void {
        res.send(`<div>
        <form method="POST">
            <div>
                <label>Email</label>
                <input name = "email"/>
            </div>
            <div>
                <label> Password</label>
                <input name = "password" type="password"/>
            </div>
            <button> Login</button>
        </form></div>
        `);
    };

    @post('/login')
    @bodyValidator('email', 'password')
    postLogin(req:Request, res:Response){
        const {email, password} = req.body;
    
        if(email && password && email === 'hi@hi.com' && password === 'password'){
            req.session = {loggedIn : true};
    
            res.redirect('/');
        }else{
            res.send('Invalid username password');
        }
    }

    @get('/logout')
    getLogout(req: Request, res: Response){
        req.session = undefined;
        res.redirect('/');
    }
}