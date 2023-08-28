import { type } from 'express/lib/response';
import jsonfile from 'jsonfile';
// import { Product } from './product'; // Import the product interface or type if defined

type Rating = { rate: number, count: number }

interface Product {
    id: string
    title: string
    price: number
    description: string
    category: string
    image: string
    rating: Rating,
    quantity: number
}

let data: Product[] = [];

jsonfile.readFile('./data.products.json', (err, arr) => {
    if (err) console.error(err);
    data = arr;
});

const getProducts = (): Product[] => {
    return data;
};

const getProductById = (id: string): Product | undefined => {
    const product = data.find(product => id === String(product.id));
    return product;
};

const addProduct = (
    id: string,
    title: string,
    price: number,
    description: string,
    category: string,
    image: string,
    rating: Rating,
    quantity: number
): Product[] => {
    const product: Product = {
        id,
        title,
        price,
        description,
        category,
        image,
        rating,
        quantity,
    };
    data.push(product);
    return data;
};

const putProduct = (
    id: string,
    title: string,
    price: number,
    description: string,
    category: string,
    image: string,
    rating: Rating,
    quantity: number
): Product[] => {
    const index = data.findIndex(product => String(product.id) === id);
    data[index] = {
        id,
        title,
        price,
        description,
        category,
        image,
        rating,
        quantity,
    };
    return data;
};

const deleteProduct = (id: string): void => {
    const index = data.findIndex(product => String(product.id) === id);
    data.splice(index, 1);
};

const ChangeInOne = (id: string, quantity: { sold: number }): Product | undefined => {
    const index = data.findIndex(product => String(product.id) === id);
    const { sold } = quantity;
    if (sold) {
        data[index].quantity -= sold;
    } else {
        data[index].quantity += 1;
    }
    return data[index];
};

const productsDal = {
    getProducts,
    getProductById,
    addProduct,
    putProduct,
    deleteProduct,
    ChangeInOne,
};

export default productsDal;
