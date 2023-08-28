import productsDal from './products.dal';

const getProducts = async (): Promise<any> => {
    try {
        const products = await productsDal.getProducts();
        return products;
    } catch (err) {
        console.error('Error reading data:', err);
        throw err;
    }
};

const getProductById = async (id: string): Promise<any> => {
    try {
        const product = await productsDal.getProductById(id);
        return product;
    } catch (err) {
        console.error('Error reading data:', err);
        throw err;
    }
};

const addProduct = async (
    id: string,
    title: string,
    price: number,
    description: string,
    category: string,
    image: string,
    rating: number,
    quantity: number
): Promise<any> => {
    try {
        const product = await productsDal.addProduct(id, title, price, description, category, image, rating, quantity);
        return product;
    } catch (err) {
        console.error('Error reading data:', err);
        throw err;
    }
};

const putProduct = async (
    id: string,
    title: string,
    price: number,
    description: string,
    category: string,
    image: string,
    rating: number,
    quantity: number
): Promise<any> => {
    try {
        const putProduct = await productsDal.putProduct(id, title, price, description, category, image, rating, quantity);
        return putProduct;
    } catch (err) {
        console.error('Error reading data:', err);
        throw err;
    }
};

const deleteProduct = async (id: string): Promise<any> => {
    try {
        const product = await productsDal.deleteProduct(id);
        return product;
    } catch (err) {
        console.error('Error reading data:', err);
        throw err;
    }
};

const ChangeInOne = async (id: string, quantity: { sold: number }): Promise<any> => {
    try {
        const product = await productsDal.ChangeInOne(id, quantity);
        return product;
    } catch (err) {
        console.error('Error reading data:', err);
        throw err;
    }
};

const productsService = {
    getProducts,
    getProductById,
    addProduct,
    putProduct,
    deleteProduct,
    ChangeInOne
};

export default productsService;
