import express, { Router } from 'express';
import productsController from './products.controller';

const router: Router = express.Router();

// Get all products
router.get('/', productsController.getAllProducts);

// Get product by id
router.get('/:id', productsController.getProductById);

// Add product
router.post('/', productsController.addProduct);

// Update product
router.put('/:id', productsController.putProduct);

// Delete product
router.delete('/:id', productsController.deleteProduct);

// Change quantity
router.patch('/:id', productsController.ChangeInOne);

export default router;
