import productsService from './products.service.js';

const getAllProducts = async (req, res) => {
    try {
        const products = await productsService.getProducts();
        // if (products.length > 0)
            return res.status(200).send(products)
        // else {
        //     return res.status(404).json({ "message": "No Users" })
        // }
    } catch (error) {
        console.error(error)
    }
};

const getProductById = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await productsService.getProductById(id);
        // if(user) {
            return res.status(200).json(product)
        // } else {
        //     return res.status(404).json({ "message": "user not found" })

        // }
    } catch (error) {
        console.error(error)
    }
};

const addProduct = async (req, res) => {
    try {
        const {id, title, price, description, category, image, rating, quantity} = req.body
        const products = await productsService.addProduct(id, title, price, description, category, image, rating, quantity);
        // if (products.length > 0)
            return res.status(200).send(products)
        // else {
        //     return res.status(404).json({ "message": "No Users" })
        // }
    } catch (error) {
        console.error(error)
    }
};
const productsController = {
    getAllProducts,
    getProductById,
    addProduct
};


export default productsController;