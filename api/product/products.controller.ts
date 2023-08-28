import { Request, Response } from 'express';
import productsService from './products.service';

const getAllProducts = async (req: Request, res: Response): Promise<void> => {
    try {
        const products = await productsService.getProducts();
        res.status(200).send(products);
    } catch (error) {
        console.error(error);
    }
};

const getProductById = async (req: Request, res: Response): Promise<void> => {
    try {
        const { id } = req.params;
        const product = await productsService.getProductById(id);
        res.status(200).json(product);
    } catch (error) {
        console.error(error);
    }
};

const addProduct = async (req: Request, res: Response): Promise<void> => {
    try {
        const { id, title, price, description, category, image, rating, quantity } = req.body;
        const products = await productsService.addProduct(id, title, price, description, category, image, rating, quantity);
        res.status(200).send(products);
    } catch (error) {
        console.error(error);
    }
};

const putProduct = async (req: Request, res: Response): Promise<void> => {
    try {
        const { id } = req.params;
        console.log(id);
        const { title, price, description, category, image, rating, quantity } = req.body;
        const updatedProduct = await productsService.putProduct(id, title, price, description, category, image, rating, quantity);
        res.status(200).json(updatedProduct);
    } catch (error) {
        console.error(error);
    }
};

const deleteProduct = async (req: Request, res: Response): Promise<void> => {
    try {
        const { id } = req.params;
        const deletedProduct = await productsService.deleteProduct(id);
        res.status(200).json(deletedProduct);
    } catch (error) {
        console.error(error);
    }
};

const ChangeInOne = async (req: Request, res: Response): Promise<void> => {
    try {
        const { id } = req.params;
        const { quantity } = req.body;
        const product = await productsService.ChangeInOne(id, quantity);
        res.status(200).json(product);
    } catch (error) {
        console.error(error);
    }
};

const productsController = {
    getAllProducts,
    getProductById,
    addProduct,
    putProduct,
    deleteProduct,
    ChangeInOne
};

export default productsController;
