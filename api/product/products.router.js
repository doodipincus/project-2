import express from 'express';
import productsController from './products.controller.js'

const router = express.Router()
//get all products
router.get('/', productsController.getAllProducts)

//get product by id
router.get('/:id', productsController.getProductById)

//add product
router.post('/', productsController.addProduct)

//
router.put('/:id', productsController.putProduct)

//delete product
router.delete('/:id', productsController.deleteProduct)

//change quantity
router.patch('/:id', productsController.ChangeInOne)

export default router;