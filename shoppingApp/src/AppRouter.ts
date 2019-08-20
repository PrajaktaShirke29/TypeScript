import express from 'express';
import { createCipher } from 'crypto';

export class AppRouter{
    private static instance: express.Router;

    static getInstance(): express.Router{
        if(!AppRouter.instance){
            AppRouter.instance = express.Router();
        }

        return AppRouter.instance;
    }

}