import {Router, Request, Response} from 'express';
import { NextFunction } from 'connect';
import { get } from "./decorator/routes";
import { controller }from './decorator/controller'

@controller('/auth')
class LoginContoller{
    @get('/login')
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
            <button> Submit</button>
        </form></div>
        `);
    };
}