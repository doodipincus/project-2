import express from 'express';
import usersController from './users.controller.js'
import middleware from './users.middleware.js'

const router = express.Router()
// //get all products
router.get('/', middleware.isAdmin, usersController.getAllUsers)

// //get product by id
router.get('/:id', middleware.authorizedUser, usersController.getUserById)

//add product
router.post('/',middleware.validations, middleware.passwordEncryption, usersController.addUser)


router.post('/login',middleware.validations, usersController.login)

// //
router.put('/:id',middleware.selfUser, middleware.validations, middleware.passwordEncryption, usersController.putUser)

// //delete product
router.delete('/:id', middleware.isAdmin, usersController.deleteUser)


export default router;