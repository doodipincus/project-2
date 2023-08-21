import productsService from './products.service.js';

const getAllProducts = async (req, res) => {
    try {
        const products = await productsService.getProducts();
            return res.status(200).send(products)
    } catch (error) {
        console.error(error)
    }
};

const getProductById = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await productsService.getProductById(id);
            return res.status(200).json(product)
    } catch (error) {
        console.error(error)
    }
};

const addProduct = async (req, res) => {
    try {
        const {id, title, price, description, category, image, rating, quantity} = req.body
        const products = await productsService.addProduct(id, title, price, description, category, image, rating, quantity);
            return res.status(200).send(products)
    } catch (error) {
        console.error(error)
    }
};

const putProduct = async (req, res) => {
    try {
        const { id } = req.params;
        console.log(id)
        const {title, price, description, category, image, rating, quantity} = req.body
        const addProduct = await productsService.putProduct(id, title, price, description, category, image, rating, quantity);

            return res.status(200).json(addProduct)

    } catch (error) {
        console.error(error)
    }
};

const deleteProduct = async (req, res) => {
    try {
        const {id} = req.params
        const deleteProduct = await productsService.deleteProduct(id);

        return res.status(200).json(deleteProduct)

    } catch (error) {
        console.error(error)
    }
};

const ChangeInOne = async (req, res) => {
    try {
        const {id} = req.params;
        const quantity = req.body
        // const quantity = 0
        const product = await productsService.ChangeInOne(id, quantity);
            return res.status(200).json(product)
    } catch (error) {
        console.error(error)
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