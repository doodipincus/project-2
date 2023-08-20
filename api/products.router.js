import express from 'express';
import productsController from './products.controller.js'

const router = express.Router()

// GET localhost:8200/api/users/
router.get('/', productsController.getAllProducts)

// GET localhost:8020/api/users/8
router.get('/:id', productsController.getProductById)

// POST localhost:8020/api/users/
router.post('/', productsController.addProduct)

// // PUT localhost:8020/api/users/
router.put('/:id', productsController.putProduct)

// // DELETE localhost:8020/api/users/
router.delete('/:id', productsController.deleteProduct)

router.patch('/:id', productsController.ChangeInOne)

export default router;