import { Response, Request } from 'express';

import { get, controller, use, post, bodyValidator } from '../controller/Decorator'
@controller('')
class RegisterController {
    @get('/register')
    getRegister(req: Request, res: Response): void {
        res.send(`
        <div>
            <form method="POST">
                <h1 style="color:blue;margin-left:30px;"> Coustomer Details</h1>
                <div>
                    <label>Name</label>
                    <input name= "cName">   
                </div>
                <div>
                    <label>Phone Number</label>
                    <input name= "cNumber">
                </div>
                <div>
                    <label>Email</label>
                    <input name= "cEmail">
                </div>
                <div>
                    <label>Password</label>
                    <input name= "cPassword">
                </div>
                <div>
                    <button class=""> Register </button>
                </div>
        </div>
        `)
    };

    @post('/register')
    @bodyValidator('cName', 'cNumber', 'cEmail', 'cPassword')
    postRegister(req: Request, res: Response) {
        const { cName, cNumber, cEmail, cPassword } = req.body;

        if (cName && cNumber && cEmail && cPassword) {
            req.session = req.body;

            res.redirect('/dashboard')
        } else {
            res.send('All Fields are required');
        }
    }
}