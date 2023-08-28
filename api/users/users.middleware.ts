import jsonfile from 'jsonfile';
import Joi from 'joi';
import bcrypt from "bcrypt";
import { Request, Response, NextFunction } from 'express';

interface User {
    id: string;
    email: string;
    password: string;
    isAdmin: boolean;
}

const saltRounds = 10;

let data: User[] = [];

jsonfile.readFile('./data.users.json', (err, arr) => {
    if (err) console.error(err);
    data = arr;
});

const isAdmin = (req: Request, res: Response, next: NextFunction): void => {
    const email = req.query.email as string;
    const user = data.find(user => String(user.email) === email);
    if (user) {
        if (user.isAdmin) {
            next();
        } else {
            res.send('You are not a manager');
        }
    } else {
        res.send('The email entered is incorrect');
    }
};

const authorizedUser = (req: Request, res: Response, next: NextFunction): void => {
    const { id } = req.params;
    const email = req.query.email as string;
    const user = data.find(user => user.email === email);
    if (user) {
        if (user.isAdmin || String(user.id) === id) {
            next();
        } else {
            res.send('You are not authorized');
        }
    } else {
        res.send('The email entered is incorrect');
    }
};

const selfUser = (req: Request, res: Response, next: NextFunction): void => {
    const { id } = req.params;
    const email = req.query.email as string;
    const user = data.find(user => String(user.email) === email);
    if (user) {
        if (String(user.id) === id) {
            next();
        } else {
            res.send('You are not authorized');
        }
    } else {
        res.send('The email entered is incorrect');
    }
};

const validations = (req: Request, res: Response, next: NextFunction): void => {
    const schema = Joi.object({
        password: Joi.string(),
        email: Joi.string(),
        id: Joi.string(),
    });
    const { password, email, id } = req.body;
    const user = {
        password,
        email,
        id
    };
    const result = schema.validate(user);
    if (result.error) {
        res.send('לא סטרינג');
    } else {
        next();
    }
};

const passwordEncryption = (req: Request, res: Response, next: NextFunction): void => {
    let { password } = req.body;
    const hash = bcrypt.hashSync(password, saltRounds);
    req.body.password = hash;
    next();
};

const middleware = {
    isAdmin,
    authorizedUser,
    selfUser,
    validations,
    passwordEncryption
};

export default middleware;
