import {Router, Request, Response} from 'express';

const router = Router();

router.get('/login', (req: Request, res: Response) => {
    res.send(`
    <form method="POST">
        <div>
            <label>Email</label>
            <input name = "email"/>
        </div>
        <div>
            <label> Passowrd</label>
            <input name = "password" type="password"/>
        </div>
        <button> Submit</button>
    </form>
    `);
});

router.post('/login', (req:Request, res:Response) => {
    const email = req.body;
    console.log(req.body);
    res.send('Hi');
})

export {router};