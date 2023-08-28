import express, { Router } from 'express';
import usersController from './users.controller';
import middleware from './users.middleware';

const router: Router = express.Router();

// Get all users
router.get('/', middleware.isAdmin, usersController.getAllUsers);

// Get user by id
router.get('/:id', middleware.authorizedUser, usersController.getUserById);

// Add user
router.post('/', middleware.validations, middleware.passwordEncryption, usersController.addUser);

// User login
router.post('/login', middleware.validations, usersController.login);

// Update user
router.put('/:id', middleware.selfUser, middleware.validations, middleware.passwordEncryption, usersController.putUser);

// Delete user
router.delete('/:id', middleware.isAdmin, usersController.deleteUser);

export default router;
