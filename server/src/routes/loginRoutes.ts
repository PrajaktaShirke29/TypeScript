import {Router, Request, Response} from 'express';
import { NextFunction } from 'connect';

interface RequestWithBody extends Request{
    body:{ [key: string]: string | undefined}
}

function requireAuth(req:Request, res:Response, next: NextFunction){
    if(req.session && req.session.loggedIn){
        next();
        return;
    }
    res.status(403);
    res.send('Not Permitted');
}
const router = Router();



router.post('/login', (req:RequestWithBody, res:Response) => {
    const {email, password} = req.body;

    if(email && password && email === 'hi@hi.com' && password === 'password'){
        req.session = {loggedIn : true};

        res.redirect('/');
    }else{
        res.send('Invalid username password');
    }
})

router.get('/', (req:Request, res:Response) => {
    if(req.session && req.session.loggedIn){
        res.send(`
        <div>
            <div>You are logged in</div>
            <a href="/logout">Logout</a>
        </div>`)
    }else{
        res.send(`
        <div>
            <div>You are not logged in</div>
            <a href="/logout">Login</a>
        </div>`)
    }
});

router.get('/protected', (req:Request, res:Response) => {
    res.send('Welcome to Protected route, logged in user');
})

export {router};