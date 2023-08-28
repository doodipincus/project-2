import { Request, Response } from 'express';
import usersService from './users.service';

const getAllUsers = async (req: Request, res: Response): Promise<void> => {
    try {
        const users = await usersService.getUsers();
        res.status(200).send(users);
    } catch (error) {
        console.error(error);
    }
};

const getUserById = async (req: Request, res: Response): Promise<void> => {
    try {
        const { id } = req.params;
        const user = await usersService.getUserById(id);
        res.status(200).json(user);
    } catch (error) {
        console.error(error);
    }
};

const addUser = async (req: Request, res: Response): Promise<void> => {
    try {
        const { id, email, password, isAdmin } = req.body;
        const flag = await usersService.addUser(id, email, password, isAdmin);
        if (flag) {
            res.status(200).send(flag);
        } else {
            res.status(200).send('The operation failed');
        }
    } catch (error) {
        res.status(400).send('Error');
    }
};

const login = async (req: Request, res: Response): Promise<void> => {
    try {
        const { email, password } = req.body;
        const loginResult = await usersService.login(email, password);
        if (loginResult) {
            res.status(200).send(loginResult);
        } else {
            res.status(400).send('The operation failed');
        }
    } catch (error) {
        res.status(400).send('Error');
    }
};

const putUser = async (req: Request, res: Response): Promise<void> => {
    try {
        const { id } = req.params;
        const { email, password, isAdmin } = req.body;
        const updatedUser = await usersService.putUser(id, email, password, isAdmin);
        res.status(200).json(updatedUser);
    } catch (error) {
        console.error(error);
    }
};

const deleteUser = async (req: Request, res: Response): Promise<void> => {
    try {
        const { id } = req.params;
        const deletedUser = await usersService.deleteUser(id);
        res.status(200).json(deletedUser);
    } catch (error) {
        console.error(error);
    }
};

const usersController = {
    getAllUsers,
    getUserById,
    addUser,
    login,
    putUser,
    deleteUser,
};

export default usersController;
